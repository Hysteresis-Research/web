# Codex audit — 2026-05-20 cron design (GitHub Actions daily desk-note, PR #21)

| Field | Value |
|---|---|
| **Date** | 2026-05-20 |
| **Target** | PR #21 `feat/desk-note-cron` — two new files: `.github/workflows/desk-note.yml`, `docs/desk-note-cron-setup.md` |
| **Files reviewed** | `.github/workflows/desk-note.yml` (142 lines), `docs/desk-note-cron-setup.md` (134 lines) — both reviewed from `git show origin/feat/desk-note-cron` diff output, extracted to `/tmp/` for codex dispatch |
| **Reviewer** | OpenAI codex-cli 0.125.0, model gpt-5.5 (ChatGPT-account default), `model_reasoning_effort=xhigh`. Invocation: `echo "" | codex exec -c model_reasoning_effort=xhigh "<prompt>"` from working dir `/Users/moonman/Desktop/web`. Empty-stdin pipe resolved the 2026-05-20 exit-144/stdin-TTY hang. codex also ran web searches against Tailscale, GitHub Actions, and npm docs to verify platform-specific claims. Findings reviewed and filtered by claude-sonnet-4-6 (codex-reviewer delegate). |
| **Scope** | Security / infrastructure review — NOT a numerical-content review. Covers: permissions posture, secret exfiltration paths, supply-chain, SSH key threat model, git-push robustness, audit-loop integrity, cost/budget runaway, modernization gaps. Also grades the 7 chat-recommended mitigations. |
| **Snapshot anchor** | N/A — infrastructure review, no data anchor |
| **Tokens** | 38,056 (codex xhigh; codex also ran web searches against Tailscale/GitHub/npm docs) |
| **Build** | N/A — no code to build; review is of workflow YAML and setup doc |
| **Verdict** | **FAIL as-is. Two CRITICAL blockers + five HIGH findings before merging PR #21.** The design hands an autonomous LLM prod push authority, long-lived API keys, a live tailnet session, and unrestricted root SSH to a private box — all within the same job, with no structural kill-switch between generation and publication. The 7 proposed mitigations reduce blast radius but do not close the core privilege-escalation path. |

---

## Findings table

| ID | Severity | File:line | Finding | Impact | Recommended fix |
|---|---|---|---|---|---|
| F-01 | CRITICAL | `.github/workflows/desk-note.yml:19,24,120` | **LLM has write-token and Bash access in the same job.** `contents: write` + `persist-credentials: true` + `claude --permission-mode acceptEdits --allowedTools Bash,Read,Edit,Write` means the GITHUB_TOKEN (capable of pushing to `main`) is reachable by every child process the agent spawns. Any prompt injection, poisoned npm package lifecycle hook, or model failure can push arbitrary content to `main` → Vercel auto-deploys to prod. | Unrestricted prod push from LLM execution context. Vercel auto-deploy means a bad commit is live within minutes. No human review gate. | Split into two jobs: (a) generation job with `contents: read`, `persist-credentials: false`; (b) deterministic publish job that inspects the diff, enforces an allowlist of permitted paths, then pushes. Pass artifacts between jobs via GitHub Actions artifacts, not shared workspace. |
| F-02 | CRITICAL | `.github/workflows/desk-note.yml:48,58`; `docs/desk-note-cron-setup.md:40` | **Unrestricted root SSH key reachable by LLM.** `BTC_FETCHER_SSH_KEY` written to `~/.ssh/btc-fetcher` before `npm ci` and the Claude invocation. The key grants unrestricted root shell on btc-fetcher. Every subsequent step — including the LLM's Bash tool — can read `~/.ssh/btc-fetcher` and use it. A compromised npm package or a prompt-injected agent can exfiltrate or misuse root access to the private server. | Full root compromise of btc-fetcher from within the GitHub Actions runner. Permanent backdoor possible (add new authorized_keys, pivot to other tailnet nodes). | (a) Fetch the BTC snapshot in a dedicated early step, then immediately `rm ~/.ssh/btc-fetcher` (shred -u is better) before installing npm packages or invoking Claude. (b) Replace root SSH + unrestricted key with a non-root btc-data user + `command=` forced-command restricted to a specific read-only snapshot script. (c) Prefer Tailscale SSH (eliminating the long-lived key secret entirely). |
| F-03 | HIGH | `.github/workflows/desk-note.yml:40,66,71` | **Tailscale + root SSH configured before unpinned npm installs.** The step order is: checkout → git config → node setup → Tailscale join → SSH key write → `npm ci` → `npm install -g @anthropic-ai/claude-code` → `npm install -g @openai/codex`. A poisoned package lifecycle script (postinstall) runs after tailnet join and SSH key are already in place. It has immediate root access to btc-fetcher and GITHUB_TOKEN. | Supply-chain attack pivot: compromised npm package → root SSH + tailnet + prod push, all from one postinstall hook. | Reorder: fetch snapshot → rm SSH key → remove Tailscale → then install npm packages → then invoke Claude. Alternatively, do all npm installs in a pre-tailscale step before any credential material is in the environment. |
| F-04 | HIGH | `.github/workflows/desk-note.yml:25,36,41,46,73`; workflow `version: latest` | **All third-party actions and CLIs are mutable.** `actions/checkout@v4`, `actions/setup-node@v4`, `tailscale/github-action@v3` are mutable tags. `version: latest` for the Tailscale client is especially unjustified. `npm install -g @anthropic-ai/claude-code` and `npm install -g @openai/codex` pin neither version nor integrity hash. A tag re-point or a compromised npm package publish introduces arbitrary code into a job with prod authority. | Arbitrary code execution in a privileged context, via a single upstream tag or npm publish event. | Pin all actions to commit SHAs. Pin `version:` for the Tailscale client to a specific semver. Pin global npm installs to exact versions (`npm install -g @anthropic-ai/claude-code@<version>`). Enable Dependabot for `.github/workflows/*.yml`. |
| F-05 | HIGH | `.github/workflows/desk-note.yml:43`; `docs/desk-note-cron-setup.md:38` | **Static Tailscale OAuth credentials — tailnet-join standing capability.** `TAILSCALE_OAUTH_CLIENT_ID` + `TAILSCALE_OAUTH_SECRET` stored in GitHub Secrets are a permanent tailnet-join credential. Anyone who obtains the secret (secrets scan, runner log leak, repo compromise) can join the tailnet from any machine and then SSH from within CGNAT — which means the `from="100.64.0.0/10"` SSH key restriction provides only shallow defense. Tailscale's GitHub Action now supports GitHub OIDC workload identity federation, eliminating the static OAuth secret. | Stolen OAuth secret = persistent tailnet membership from any endpoint the attacker controls, bypassing the from= IP restriction. | Replace `TAILSCALE_OAUTH_SECRET` with Tailscale's GitHub Actions OIDC integration (workload identity federation) if available for this account tier, or rotate to short-lived OAuth tokens with the narrowest possible expiry and ACL. |
| F-06 | HIGH | `.github/workflows/desk-note.yml:91,114,124` | **Runbook is mutable repo text injected directly as LLM instructions with prod authority.** `docs/desk-note-runbook.md` is embedded into the Claude prompt via `$(cat docs/desk-note-runbook.md)`. The runbook is repo content; any contributor or PR that modifies it (including the bot itself after a prior run) rewrites the agent's instructions for the next run. This is a CI prompt injection vector with Bash tool and prod push authority. The heredoc EOF marker cannot be escaped by runbook content (self-trust boundary), but a future modification of the runbook by the bot itself — or by a compromised contributor PR — changes CI behavior silently. | Runbook modification (by any contributor with repo write, or by the bot itself) silently changes what the agent does at 00:05 UTC the next day, including what it stages, commits, and pushes. | Add `docs/desk-note-runbook.md` to CODEOWNERS alongside `.github/workflows/*`. Consider hashing the runbook and validating the hash before injection. Add structural instruction validation: check the prompt contains expected sentinel strings before passing to Claude. |
| F-07 | HIGH | `.github/workflows/desk-note.yml:105,127,132` | **Build sanity and HTTP verify run after push; HTTP check cannot fail the job.** The deterministic `next build` step and the HTTP-verify step run after the Claude runbook, which may have already called `git push origin main`. If the build or HTTP check fails after push, the bad commit is already on `main` and Vercel is already deploying it. The HTTP check comment explicitly says "do not fail the job on a non-307 here" — making it pure observation, not a gate. | Invalid build or broken gated route pushed to prod; no automatic rollback; Vercel may 500 the deploy. | Move `next build` to before the Claude runbook (verify repo is buildable) and also before any push. Enforce it as a required pre-push gate. The HTTP verify after Vercel deploy is reasonable as observation, but label it clearly as non-blocking. |
| F-08 | MED | `.github/workflows/desk-note.yml:60` | **`StrictHostKeyChecking accept-new` — TOFU on first SSH.** Accept-new trusts whatever host key btc-fetcher presents on the first connection without verification. On a Tailscale network this is substantially safer than open internet, but a Tailscale ACL misconfiguration or MITM on first run could install a wrong host key silently. | Attacker with tailnet presence at the right Tailscale IP on first workflow run installs a trusted but wrong host key. All subsequent connections trust the attacker's key. | Pin the btc-fetcher host key in `known_hosts` (add it once manually to the repo or as a non-secret variable): `ssh-keyscan -H 100.78.238.8` output stored in a `BTC_FETCHER_KNOWN_HOSTS` repo variable, then `echo "$BTC_FETCHER_KNOWN_HOSTS" >> ~/.ssh/known_hosts` before SSH. |
| F-09 | MED | `docs/desk-note-cron-setup.md:73` | **Branch-protection guidance is vague and prescribes weakening prod protection.** "Ensure the bot identity / a status check allows the workflow to bypass — or relax the protection for the `hysres-deskbot` author." Relaxing branch protection for a bot identity that has write access and Bash capability removes a key human review gate. | A push from the LLM bypasses any branch protection rule that would otherwise require human review before `main` changes. | Either (a) do not relax branch protection — instead, design the publish step to use a dedicated deployment PAT (not GITHUB_TOKEN) whose push is exempted via GitHub Environments with required reviewers, OR (b) use a separate `desk-notes` branch that the bot pushes to, and merge to main via a short-lived auto-merge rule scoped to `src/app/desk/**` only. |
| F-10 | MED | `.github/workflows/desk-note.yml:80,83`; `docs/desk-note-cron-setup.md:37` | **`NPM_TOKEN` passed to the LLM runbook step.** `NPM_TOKEN` appears in `env:` for the `Run daily desk-note runbook` step. The LLM's Bash tool can read `printenv NPM_TOKEN` or spawn a child process that reads it. The setup doc also says "re-use the existing Vercel `NPM_TOKEN`" — reusing a token used in Vercel's build pipeline across a less-controlled CI context widens its blast radius. | If the Vercel NPM_TOKEN and CI NPM_TOKEN are the same, a compromise in CI enables unauthorized package publishing or Vercel-deploy manipulation. | (a) Use a dedicated read-only `NPM_TOKEN` scoped to `read:packages` only (mitigation #4 is correct here). (b) Remove NPM_TOKEN from the runbook step env — it is only needed for `npm ci` (already done in the install step) and `next build` (already done in post-run step). The LLM step does not need package-registry access. |
| F-11 | MED | `.github/workflows/desk-note.yml:18,123` | **`timeout-minutes: 45` caps wall time but not token burn.** `--max-turns 200` with no `--max-tokens` limit means the agent can exhaust API budget before the 45-minute wall timeout if it runs many large inference calls. Codex xhigh itself consumed 38K tokens in this single audit; a 200-turn Claude session could easily exceed $10–20 in a single run before the job times out. | Daily API cost runaway; at 200 turns × multi-K-token context, worst case could be $50–100/day before the monthly cap triggers. Monthly cap is after-the-fact, not per-run. | Set `--max-turns` to a lower empirically-validated value (30–60 for the desk-note runbook). Monitor actual per-run cost and alert before monthly cap is reached. Consider adding a lightweight Python wrapper that counts token estimates and aborts if they exceed a per-run budget. |
| F-12 | MED | `.github/workflows/desk-note.yml:11,13` | **`cancel-in-progress: false` + `workflow_dispatch` with no idempotency lock.** If a manual trigger fires while the scheduled run is queued or running, both can run concurrently (different GitHub runners). Both will try to commit and push for the same date. The second push will be rejected (non-fast-forward) with no rebase logic, silently leaving that day's artifacts in a runner that is then destroyed. | Race condition: two concurrent runs for the same date, one of which fails silently; no retry; no alerting. | (a) Add a date-keyed file check at the start of the runbook step: if `src/app/desk/YYYY-MM-DD/page.tsx` already exists, exit 0 (idempotency). (b) Add a rebase-and-retry loop before `git push` if the first push is rejected for non-fast-forward. |
| F-13 | MED | `docs/desk-note-cron-setup.md:93,100` | **Failed audit artifacts vanish with the runner.** When the PUBLISH GATE holds (codex finds a CRITICAL), the runbook commits drafts locally and exits non-zero. But GitHub-hosted runners are ephemeral — the local commit is discarded when the runner terminates. The setup doc says "read the freshly-committed `audits/YYYY-MM-DD-desk-note.md`" but that commit never made it to the remote. | A day's drafts and audit record are lost on gate failure; human has nothing to inspect. | Add a GitHub Actions `actions/upload-artifact` step in the job's `if: always()` section to upload `audits/`, partial draft TSX files, and the runner's git log. These persist for 30 days without pushing to the repo. |
| F-14 | LOW | `.github/workflows/desk-note.yml:21` | **`actions: read` permission probably unnecessary.** No step reads Actions API endpoints directly; the permission appears to be carried over from a template. | Unnecessary permissions expand the GITHUB_TOKEN blast radius. | Remove `actions: read` from the permissions block. |
| F-15 | LOW | `.github/workflows/desk-note.yml:17` | **Ephemeral runner is only between jobs, not between steps.** GitHub-hosted runners are fresh per job, which is correct here. However, within the single job, all steps share the workspace and home directory. Steps that write secrets to disk (SSH key, implicitly GITHUB_TOKEN in git credential store) leave those artifacts reachable by all later steps including the LLM's Bash tool. | The ephemeral property provides no intra-job isolation. | Addressed structurally by F-01 (split jobs) and F-02 (rm SSH key early). Flag as reminder. |

---

## Mitigation grades

| # | Proposed mitigation | Grade | Codex reasoning |
|---|---|---|---|
| 1 | `from="100.64.0.0/10",no-*` prefix on authorized_keys CI key | **missing-something** | Helps if only the SSH key leaks from outside Tailscale. Does not help if the attacker also holds `TAILSCALE_OAUTH_SECRET` (can join tailnet, then SSH from inside CGNAT, satisfying the `from=` restriction). Does not restrict which commands root can run. Needed, but not sufficient alone. |
| 2 | Pin all third-party actions to commit SHA | **missing-something** | Necessary, and addresses actions. But the design also has unpinned global npm installs (`npm install -g @anthropic-ai/claude-code`, `npm install -g @openai/codex`) and `version: latest` for the Tailscale client. SHA-pinning actions alone leaves those vectors open. Must also pin CLI package versions and enable Dependabot. |
| 3 | Hard monthly spend caps on Anthropic + OpenAI dashboards | **effective** | Good cost blast-radius control. Does not prevent data exfiltration or prod compromise; addresses the budget-runaway axis only. A necessary but not security-sufficient control. |
| 4 | Dedicated NPM_TOKEN (90-day expiry, `read:packages` only) | **effective** | Correct least-privilege move. Additional recommendation: stop passing this token to the LLM runbook step (not needed there; only needed for `npm ci` and `next build` which are separate steps). |
| 5 | Strict Tailscale OAuth scope (`auth_keys:write`, `tag:ci-deskbot` only) | **missing-something** | Correct scoping reduces damage if the OAuth secret leaks to an entity that cannot use auth_keys scope for other purposes. But it is still a static, long-lived credential. Prefer Tailscale's GitHub Actions OIDC / workload identity federation (ephemeral per-run, no stored secret). |
| 6 | No echo of secrets in workflow; secrets via `env:` not CLI args | **theater** | Prevents secrets in process argument lists and runner logs. Does not prevent the LLM's Bash tool from running `printenv` or a compromised child process from reading the environment. The constraint is real (avoids the most naive leaks) but does not close the exfiltration path when the agent has arbitrary Bash access. |
| 7 | CODEOWNERS + branch protection for `.github/workflows/*` | **missing-something** | Correct and necessary. But `docs/desk-note-runbook.md` is injected verbatim as agent instructions and must be covered by the same CODEOWNERS rule. Also must cover `package.json`, `package-lock.json`, and any script the runbook references — a poisoned lockfile or npm script is equally dangerous. |

---

## Missing mitigations (not in the 7 proposed)

- **Split generation from publishing.** Run Claude with `contents: read`, `persist-credentials: false`, no SSH key, no NPM_TOKEN in the generation job. Pass outputs as GitHub Actions artifacts to a deterministic second job that enforces a path allowlist (`src/app/desk/**`, `audits/**` only), verifies no diff outside those paths, runs `next build`, then pushes.
- **Remove SSH material before LLM invocation.** Fetch the BTC snapshot in a dedicated early step, then `shred -u ~/.ssh/btc-fetcher` before `npm ci` or Claude. If Tailscale SSH is used, tear down the Tailscale session before the Claude step.
- **Tailscale SSH instead of OpenSSH + key.** Eliminates `BTC_FETCHER_SSH_KEY` secret entirely. Access is gated by tailnet membership + ACL, not by a static key that persists in the runner. Non-interactive commands work fine over Tailscale SSH.
- **`command=` forced-command on the SSH key.** If OpenSSH+key is retained, restrict the authorized_keys entry to a specific read-only script (e.g., `command="/opt/btc-data/export-snapshot.sh"`) so the key cannot open a general shell.
- **`known_hosts` pinning.** Replace `StrictHostKeyChecking accept-new` with a hardcoded host key stored as a GitHub repo variable.
- **Artifact upload on failure.** `if: always()` + `actions/upload-artifact` step to preserve audit records and partial drafts when the PUBLISH GATE holds or the runner is discarded.
- **Secret scanning push protection.** Enable in Repo Settings → Code security → Secret scanning → Push protection. Blocks any push that includes a recognized secret pattern.
- **Dependabot for workflow action SHAs.** Enable in `.github/dependabot.yml` with `package-ecosystem: github-actions` to auto-PR when pinned SHAs fall behind security-patched versions.
- **Pre-push diff allowlist.** Before `git push`, run a shell check: `git diff --name-only HEAD origin/main` must contain only files matching `src/app/desk/**` and `audits/**`. Any unexpected path (`.github/`, `package*`, `src/lib/`, etc.) exits non-zero before push.
- **GitHub Environment with required reviewers for the push step.** If the daily cadence allows ~5 min human review, a GitHub Environment protection rule on the publish job provides a hard human gate without weakening branch protection.

---

## Cleared items (no defect found)

- **`concurrency: cancel-in-progress: false`** — correct choice for cron; `true` would cancel a running job if a manual trigger fired, potentially leaving the day without a note. The race condition (F-12) is about concurrent runs, not about in-progress cancellation. The concurrency group name `desk-note-daily` is correct; it serializes scheduled vs dispatched runs. Queue behavior (not cancellation) is the concern.
- **Heredoc EOF injection** — `PROMPT=$(cat <<EOF ... $(cat docs/desk-note-runbook.md) ... EOF)` is safe from EOF injection because the runbook is treated as shell expansion content, not as a heredoc terminator. The literal string `EOF` at the end of a line inside `$(cat ...)` does not close the outer heredoc. This is self-trust (the runbook is in-repo), but the EOF terminator attack is not feasible here.
- **`printf '%s\n' "$BTC_FETCHER_SSH_KEY"` log capture risk** — `printf` itself does not echo the value to stdout; the key is written to a file. GitHub Actions automatically masks registered secrets in logs. Not a logging risk from this step specifically.
- **`actions: write` / `id-token: write` not present** — good; OIDC token generation and additional Actions API mutations are not granted. `contents: write` and `actions: read` are the only non-default grants.
- **`GITHUB_TOKEN` implicit capabilities** — `contents: write` covers code push. With `actions: read` the token cannot trigger new workflow runs. `packages: read` and `deployments: write` are not granted. The token cannot self-modify workflows (that requires `contents: write` + `workflows: write`; the latter is not present). Scope is limited but still overprivileged relative to what generation actually requires (see F-01).
- **GitHub-hosted runner ephemeral isolation between jobs** — correctly documented in context; each job gets a fresh VM. Within this single-job design the isolation benefit does not apply to intra-job steps. Cleared as stated, with the F-01/F-15 caveat.

---

## Skipped / pushed back

- **Tailscale IP hardcoded as `100.78.238.8`** — Tailscale IPs are stable for a given device (device-bound, not session-bound). This is not a rotation risk. Hardcoding it in SSH config is fine; the Tailscale ACL references the IP correctly. Not flagged.
- **`fetch-depth: 0` on checkout** — needed for `git push` without shallow-clone errors. Not overprivileged.
- **`deskbot@hysteresisresearch.com` git identity** — cosmetic; does not affect push authorization.

---

## Verification

- Files reviewed from `git show origin/feat/desk-note-cron` diff text. Codex could not `nl` them from disk (not checked out in the main worktree); it treated the diff as source of truth and ran web searches to verify platform claims (Tailscale OIDC support, GitHub token permissions, runner ephemerality). Line numbers are diff-relative.
- Codex invocation form that worked: `echo "" | codex exec -c model_reasoning_effort=xhigh "<prompt>"` from `/Users/moonman/Desktop/web`. Codex ran in read-only sandbox mode.
- Codex verdict text: "fail as-is."

---

## Tests

No automated tests exist for workflow infrastructure. Recommended: run `actionlint` on the YAML before merge. Add a smoke-test workflow run via `workflow_dispatch` after all secrets are provisioned.

---

## Open issues / follow-up

- **F-01 (CRITICAL)** — Split generation from publishing (two jobs). Blocker.
- **F-02 (CRITICAL)** — Remove SSH key before LLM step; replace root SSH with Tailscale SSH or forced-command. Blocker.
- **F-03 (HIGH)** — Reorder steps: npm installs before Tailscale join + SSH setup.
- **F-04 (HIGH)** — Pin all actions to SHA; pin CLI versions; enable Dependabot.
- **F-05 (HIGH)** — Evaluate Tailscale OIDC / WIF to eliminate static OAuth secret.
- **F-06 (HIGH)** — Add `docs/desk-note-runbook.md` to CODEOWNERS; consider runbook hash validation.
- **F-07 (HIGH)** — Move `next build` to before Claude invocation as a pre-push gate.
- **F-08 (MED)** — Pin btc-fetcher host key in known_hosts.
- **F-09 (MED)** — Harden or restructure branch protection guidance; do not recommend relaxing protection for the bot author.
- **F-10 (MED)** — Remove NPM_TOKEN from the LLM runbook step env.
- **F-11 (MED)** — Set `--max-turns` to a lower empirically-validated value; add per-run cost monitoring.
- **F-12 (MED)** — Add idempotency check; add rebase-retry on non-fast-forward push rejection.
- **F-13 (MED)** — Add `actions/upload-artifact` on `if: always()` for failed-gate run artifacts.
- **F-14 (LOW)** — Remove `actions: read` permission.

---

## codex meta

| Field | Value |
|---|---|
| **codex CLI version** | 0.125.0 |
| **Model** | gpt-5.5 (ChatGPT-account default; `--model` flag not accepted by this auth type) |
| **Reasoning effort** | xhigh (`-c model_reasoning_effort=xhigh`) |
| **Invocation form** | `echo "" | codex exec -c model_reasoning_effort=xhigh "<prompt>"` — empty-stdin pipe resolved the exit-144 / `Reading additional input from stdin...` TTY hang seen on 2026-05-20. This form worked on first attempt; no fallback needed. |
| **Sandbox** | read-only (codex default for `exec` with no file-write tools) |
| **Exit status** | Clean (codex produced output; 2026-05-20T03:48:36 ERROR line is a benign session-rollout telemetry error, not a reviewer error) |
| **Tokens** | 38,056 |
| **Web searches** | Codex ran searches against Tailscale GitHub Action docs, Tailscale OAuth KB, GitHub Actions GITHUB_TOKEN permissions docs, and GitHub-hosted runner isolation docs to verify platform-specific claims |
| **Auth note** | ChatGPT-account codex does NOT accept `--model gpt-5`; default to gpt-5.5. The `echo "" | codex exec` pattern is now the confirmed working invocation for non-TTY / subagent contexts. |
| **Files reviewed** | `.github/workflows/desk-note.yml` (142 lines), `docs/desk-note-cron-setup.md` (134 lines) — both from `origin/feat/desk-note-cron` branch diff |
