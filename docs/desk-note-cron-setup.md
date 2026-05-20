# Daily desk-note GitHub Actions cron — setup

This replaces the `/schedule` remote-routine path (claude.ai routine service
was unreachable 6 days running across 6 attempts 2026-05-15..05-20; the
"transient outage" premise broke). The cron now runs on GitHub Actions, calls
the Anthropic + OpenAI APIs directly, and is independent of claude.ai.

## What the workflow does

`.github/workflows/desk-note.yml` fires at **00:05 UTC** daily (Beijing 08:05).
For each fire:

1. Checks out `hysres/web` `main` with push token.
2. Connects to Tailscale and configures SSH to the btc-fetcher box (`ssh btc`).
3. Installs Node deps + Claude Code CLI + codex CLI.
4. Runs the runbook `docs/desk-note-runbook.md` headless via
   `claude --print --permission-mode acceptEdits ...` with a CI shim that
   remaps absolute Mac paths to `$GITHUB_WORKSPACE` and tells the agent to
   invoke codex via `echo "" | codex exec ...` (the 2026-05-20 stdin-TTY
   workaround).
5. The runbook is unchanged from the manual flow: pull snapshot → derive
   metrics → author EN+ZH gated pages → run codex hostile audit → fix
   blockers → promote v2 → `next build` → commit named files only →
   `git push origin main` → HTTP-verify.
6. Vercel auto-deploys from `main` as today.

Per-run cost estimate: ~$1–$2 in API tokens (Claude ~$0.50–$1, codex ~$0.50–$1).

## One-time setup the user must do

### 1. GitHub Secrets (Repo → Settings → Secrets and variables → Actions)

| Secret | What it is | Source |
|---|---|---|
| `ANTHROPIC_API_KEY` | API key for Claude Code CLI | console.anthropic.com → API keys |
| `OPENAI_API_KEY` | API key for codex CLI | platform.openai.com → API keys |
| `NPM_TOKEN` | GitHub Packages PAT, `read:packages` scope (existing — already used by Vercel build) | re-use the existing Vercel `NPM_TOKEN` or generate a new classic PAT |
| `TAILSCALE_OAUTH_CLIENT_ID` | Tailscale OAuth client ID (for the GH Actions Tailscale step) | login.tailscale.com → Settings → OAuth clients (scope `auth_keys`, tag `tag:ci-deskbot`) |
| `TAILSCALE_OAUTH_SECRET` | Tailscale OAuth secret (paired with the above) | same place |
| `BTC_FETCHER_SSH_KEY` | Private SSH key authorized on `btc-fetcher` for the `root` account | re-use the local `~/.ssh/id_ed25519` or generate a dedicated `btc-fetcher-ci` keypair and add its pubkey to `/root/.ssh/authorized_keys` on btc-fetcher |

### 2. Tailscale ACL — allow the CI tag onto the tailnet

In Tailscale admin → Access controls:

- Define `tag:ci-deskbot`.
- Allow it to SSH to btc-fetcher (`100.78.238.8`):
  ```jsonc
  {
    "acls": [
      // ... existing rules ...
      { "action": "accept", "src": ["tag:ci-deskbot"], "dst": ["100.78.238.8:22"] }
    ],
    "tagOwners": {
      // ... existing ...
      "tag:ci-deskbot": ["autogroup:owner"]
    }
  }
  ```

### 3. (Optional but recommended) Dedicated SSH key for CI

Generate a CI-only key so it can be rotated independently:

```bash
ssh-keygen -t ed25519 -f ~/.ssh/btc-fetcher-ci -C "deskbot@github-actions" -N ""
# Add the pubkey to btc-fetcher
ssh btc 'cat >> /root/.ssh/authorized_keys' < ~/.ssh/btc-fetcher-ci.pub
# Add the private key to GitHub Secrets as BTC_FETCHER_SSH_KEY
gh secret set BTC_FETCHER_SSH_KEY --repo hysres/web < ~/.ssh/btc-fetcher-ci
```

### 4. Confirm `GITHUB_TOKEN` can push to `main`

Repo → Settings → Actions → General → "Workflow permissions" must be set to
"Read and write permissions". The workflow already declares
`permissions: contents: write`; without the repo-level setting it will be
denied.

If `main` is branch-protected, ensure the bot identity / a status check
allows the workflow to bypass — or relax the protection for the
`hysres-deskbot` author.

## First-run smoke test

After all secrets are set, fire the workflow manually:

```bash
gh workflow run desk-note.yml --repo hysres/web
gh run watch --repo hysres/web
```

If it produces a desk note for today's date and pushes to `main`, the cron
is live. If it fails before push, the PUBLISH GATE held — read the run log
and the freshly-committed `audits/YYYY-MM-DD-desk-note.md` to see what
codex caught.

## What still requires manual action

- **Codex finds an unresolved CRITICAL** → workflow commits locally + exits
  non-zero; the bot does NOT push. A human runs `gh run view`, reads the
  audit record, and decides whether to fix + re-run or skip the day.
- **Data is unusable** (snapshot fails, macro badly stale, etc.) → runbook
  flags it in the manifest; if it cannot support an honest note, the
  runbook is instructed to skip publishing and exit non-zero. A human
  inspects the artifacts that did get committed (the partial drafts) and
  the run log.
- **Quality drift** → check the `audits/` directory periodically; if codex
  starts catching the same MED/LOW repeatedly across days, refactor the
  runbook to pre-handle that landmine.

## Why this design

- **Independent of claude.ai routine service** — uses Anthropic API
  directly via Claude Code CLI; the broken `/schedule` mechanism is out of
  the loop.
- **Reuses the existing runbook** — `docs/desk-note-runbook.md` is the
  single source of truth for the process; manual runs and CI runs execute
  the same text.
- **Honors the PUBLISH GATE** — codex audit runs in the same job; the
  gate is enforced before `git push`.
- **Preserves contributor WIP** — the runbook is explicit: "stage named
  files only, never `.claude/` or secrets, never other contributors' WIP."
- **No standing fixed cost** — GitHub Actions free tier covers ~30min/day
  for public/private repos at this tier; even with the 45min timeout the
  monthly bill is minutes-of-runtime ($0–small) plus API tokens
  ($1–2/day = ~$30–60/month).

## Decommissioning the manual flow

Once the cron has run cleanly for 3 consecutive days, the manual flow
(user pings "没有跑" → assistant catches up that session) becomes a
backup, not the default. Update `project_daily_desk_note_routine.md`
memory accordingly.
