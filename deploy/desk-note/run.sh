#!/bin/bash
# Daily desk-note runner — 4-stage refactor (replaces the monolithic
# 2026-08-19: Stage A/C + title helper pinned claude-opus-4-8 -> claude-opus-5 (model-generation
# pass; Opus 5 = in-plan Opus tier on Max, thinking adaptive by default; server claude-code moved
# to the native 2.1.227 binary the same day — --max-turns/--permission-mode/--allowedTools verified).
# claude --print that died on 2026-05-30 / 2026-05-31 with the same
# socket-drop failure mode). Each claude call is bounded to a single
# scope; codex runs directly (not wrapped in claude).
#
# Stages:
#   A  claude   write v1 EN draft only
#   B  codex    hostile audit on v1 EN → audits/...md
#   C  claude   apply fixes + write ZH (native CN) + landings + v1→v2 + tsc
#   E  bash     final tsc + commit + conditional push (gated on verdict)
#
# Idempotent: each stage checks if its output already exists and skips
# if so, allowing manual resume after a partial failure.
#
# Per memory project_daily_desk_note_routine.md, this runs under
# desk-note.service (systemd timer 00:05 UTC, randomized 0-180s).
set -euo pipefail

REPO=/opt/desk-note/web
LOG_DIR=/opt/desk-note/logs
TODAY="$(date -u +%Y-%m-%d)"
LOG="$LOG_DIR/${TODAY}.log"
mkdir -p "$LOG_DIR"

# Mirror stdout+stderr to journal AND a dated logfile.
exec > >(tee -a "$LOG") 2>&1

echo "===== desk-note runner (4-stage): $(date -u +%FT%TZ) ====="
echo "today (UTC): $TODAY"

# --- Defensive HOME default ---
# systemd does NOT set $HOME by default, and with `set -u` an unset $HOME
# would kill the script if anything later expands it. 2026-06-01 F-01:
# that's exactly what happened on the first cron exercise of the 4-stage
# refactor (11ms exit before stage A — the prior line was `export
# NVM_DIR="$HOME/.nvm"`, which was itself wrong on this server, see below).
export HOME="${HOME:-/root}"

# --- CLI availability check ---
# On btc-fetcher both claude (/usr/local/bin/claude → @anthropic-ai/claude-code)
# and codex (/usr/local/bin/codex → @openai/codex) are system-wide installs;
# they are on systemd's default PATH (/usr/local/sbin:/usr/local/bin:/...).
# DO NOT source nvm here — there is no nvm on this server. The earlier
# nvm-sourcing logic was a misapplication of memory
# reference_codex_cli_path_gotcha.md, which describes the LOCAL workstation.
if ! command -v claude >/dev/null 2>&1; then
  echo "FATAL: claude CLI not on PATH (PATH=$PATH)"
  exit 1
fi
if ! command -v codex >/dev/null 2>&1; then
  echo "FATAL: codex CLI not on PATH (PATH=$PATH)"
  exit 1
fi

# --- Prep: sync repo to origin/main ---
if [ ! -d "$REPO/.git" ]; then
  echo "FATAL: $REPO not a git repo. Run setup first."
  exit 1
fi

cd "$REPO"
echo "--- sync repo to origin/main ---"
git fetch --quiet origin
git reset --hard origin/main
git log --oneline -1

if [ ! -d node_modules ] || [ package-lock.json -nt node_modules/.package-lock.json 2>/dev/null ]; then
  echo "--- npm ci (lockfile change or first run) ---"
  npm ci --no-audit --no-fund 2>&1 | tail -8
fi

git config user.name  "desk-note-bot"
git config user.email "desk-note-bot@hysres"

# -- Cadence gate (2026-08-22): weekly + event-triggered daily --------------
# Monday = the weekly note (anchored to the just-settled W-SUN weekly close).
# Other days publish ONLY if an event fired (event-check.sh: a real 24h/7d move
# or a funding regime flip); else skip -- the weekly note covers a quiet range.
# Cuts daily Opus-5 cost + daily failure surface on a frozen tape while a real
# move still gets a same-day note. Force any day: touch /tmp/desk-note-force-$TODAY
DOW="$(date -u +%u)"   # 1=Mon .. 7=Sun
if [ -f "/tmp/desk-note-force-$TODAY" ]; then
  echo "cadence: FORCE marker present -- proceeding"
elif [ "$DOW" = "1" ]; then
  echo "cadence: Monday -- weekly note, proceeding"
elif /opt/desk-note/event-check.sh; then
  echo "cadence: event fired -- event-triggered daily, proceeding"
else
  echo "cadence: quiet tape, not Monday -- skipping today (weekly cadence covers it)"
  exit 0
fi

EN_FILE="src/app/desk/$TODAY/page.tsx"
ZH_FILE="src/app/zh/desk/$TODAY/page.tsx"
AUDIT_FILE="audits/$TODAY-desk-note.md"
SUBJECT_FILE="/tmp/desk-note-subject-$TODAY"
mkdir -p "src/app/desk/$TODAY" "src/app/zh/desk/$TODAY" "audits"

#============================================================================
# STAGE A — claude writes v1 EN draft
#============================================================================
echo "===== STAGE A: claude writes v1 EN draft ====="
A_START="$(date -u +%s)"

if [ -f "$REPO/$EN_FILE" ] && [ -s "$REPO/$EN_FILE" ]; then
  echo "stage A skip: $EN_FILE already exists ($(wc -l < "$REPO/$EN_FILE") lines) — resuming"
else
  STAGE_A_PROMPT="You are executing STAGE A of the daily Hysteresis Research BTC desk-note routine on the btc-fetcher server. Today is $TODAY (UTC). You are already ON btc-fetcher; the cwd is the web repo.

YOUR SCOPE — read \`$REPO/docs/desk-note-runbook.md\` sections 1–4 and produce ONLY the v1 EN page at \`$EN_FILE\`. DO NOT:
- write the ZH companion (that is STAGE C)
- run codex audit (that is STAGE B, runs directly after you exit)
- update src/app/desk/page.tsx or src/app/zh/desk/page.tsx landing pages (STAGE C)
- commit or push (STAGE E)
- promote v1 → v2 in the titleband, footer, or dn-audit-trace strings (STAGE C does that AFTER the audit returns)

The titleband should read 'HysRes · BTC · DESK NOTE · $TODAY · v1'. The footer trace line should mark 'v1 · <UTC time>Z snapshot'. The dn-audit-trace block at the bottom should explicitly state 'awaiting STAGE B codex audit — v1 unaudited'. Do NOT pre-write fabricated audit-trace content; STAGE C will rewrite the trace block once the real codex verdict is in.

Read sources directly: /opt/btc-monitor/live_db.json, /opt/btc-data/output/*.html, /opt/btc-data/cross_asset_correlation_summary.md, /opt/btc-data/data/btcusdt_1m_*.parquet, /opt/btc-data/.venv/bin/python3. Translate any '/Users/moonman/Desktop/web' reference in the runbook to '$REPO'.

Authoring discipline (per runbook §2–§4): EN-native trader voice; full MA matrix (Daily AND Weekly × SMA AND EMA × n ∈ {20,50,100,150,200}); funding × 1095 (NOT ×1095×100); SM cut fraction = |Δ| / prior_net; claims ≤ data (NTT / max-pain / strike-IV / BTC-NQ → framework-only); requireViewer gating MUST be the first statement of the default export. Brand abbreviation = 'HysRes', NEVER 'HR'. Reference canonical v2 template: src/app/desk/2026-05-31/page.tsx (you are emitting v1 — same structural skeleton, but unpromoted).

After writing $EN_FILE, exit. Do not perform any other action."

  set +e
  claude --print \
    --model claude-opus-5 \
    --permission-mode acceptEdits \
    --allowedTools "Bash,Read,Edit,Write,Glob,Grep" \
    --max-turns 120 \
    "$STAGE_A_PROMPT"
  CLAUDE_A_EXIT=$?
  set -e
  echo "--- stage A claude exit: $CLAUDE_A_EXIT (took $(( $(date -u +%s) - A_START ))s) ---"

  # Resilience (2026-06-15): claude can hit --max-turns AFTER the v1 page is
  # already written and well-formed (it loops on a final re-read / polish).
  # A non-zero exit is NOT fatal if the page exists, is JSX-closed, and is gated;
  # only a missing / truncated / ungated page aborts the pipeline. The Stage B
  # codex audit is the real correctness gate downstream regardless.
  if [ $CLAUDE_A_EXIT -ne 0 ]; then
    if [ -f "$REPO/$EN_FILE" ] && [ -s "$REPO/$EN_FILE" ] \
       && grep -qF "requireViewer('/desk/$TODAY')" "$REPO/$EN_FILE" \
       && [ "$(tail -1 "$REPO/$EN_FILE" | tr -d '[:space:]')" = "}" ]; then
      echo "WARN: stage A exited $CLAUDE_A_EXIT (likely max-turns) but $EN_FILE is present, JSX-closed, and gated — proceeding to STAGE B"
    else
      echo "FATAL: stage A exited $CLAUDE_A_EXIT and $EN_FILE is missing / truncated / ungated"
      exit $CLAUDE_A_EXIT
    fi
  fi
  if [ ! -f "$REPO/$EN_FILE" ] || [ ! -s "$REPO/$EN_FILE" ]; then
    echo "FATAL: stage A complete but $EN_FILE missing or empty"
    exit 1
  fi
fi

echo "Stage A OK: $EN_FILE ($(wc -l < "$REPO/$EN_FILE") lines, $(wc -c < "$REPO/$EN_FILE") bytes)"

#============================================================================
# STAGE B — codex hostile audit on v1 EN, write audits/$TODAY-desk-note.md
#============================================================================
echo "===== STAGE B: codex hostile audit on v1 EN ====="
B_START="$(date -u +%s)"

if [ -f "$REPO/$AUDIT_FILE" ] && [ -s "$REPO/$AUDIT_FILE" ]; then
  echo "stage B skip: $AUDIT_FILE already exists ($(wc -l < "$REPO/$AUDIT_FILE") lines) — resuming"
else
  STAGE_B_PROMPT="You are running a hostile cross-model audit on today's v1 EN desk-note draft. Date: $TODAY. You are codex; this is your only call.

Target file: $REPO/$EN_FILE
Cwd: $REPO

STANCE (per memory feedback_codex_hostile_but_fair_stance.md): assume the draft is wrong until prose + numbers + timestamps affirmatively prove it. Absence of evidence = flag, not pass. Cite file:line for every finding.

Severity rubric:
- CRITICAL  factual / structural break visible to any reader; gates publish
- MAJOR     substantive disclosure gap or scope-claim mismatch
- MINOR     arithmetic off-by-1, style, missing inline ref, denominator
- NIT       brand/typography (e.g. 'HR' instead of 'HysRes')

HUNT LIST:
1. Numerical / arithmetic consistency — every percentage, every sum, every delta, every cross-ref between manifest tile and prose body.
2. Timestamp / staleness coherence — every BJ↔UTC pair, every staleness window vs the snapshot anchor.
3. Lineage / narrative continuity — any 'first X of the lineage' claim must be cross-checked against the file's own quoted history.
4. Claims-vs-loaded-data — manifest declares NTT / max-pain / strike-IV / BTC-NQ as NOT LOADED → verify prose honors this.
5. requireViewer gating — must be the first statement of the async default export; the path argument must match the route exactly.
6. Forward-looking trade calls vs framework scope — no recommendation that exceeds 'scout deferred / scout long 0.2R' framing.
7. JSX / markup integrity — single <main>, single <article>, no broken span nesting, no unescaped raw apostrophes.

LIVE DATA CROSS-REFERENCE: you ARE on btc-fetcher; use it. /opt/btc-monitor/live_db.json (JSONL, 1/min) is the live tape; /opt/btc-data/output/*.html are the artifact panels; /opt/btc-data/data/btcusdt_1m_*.parquet are the price/OHLCV history. Run arithmetic with /opt/btc-data/.venv/bin/python3. Cite source-file timestamps in your audit.

WRITE the audit record to $REPO/$AUDIT_FILE in Markdown. Format the 12 required fields per memory feedback_codex_audit_record_format.md — model on the existing $REPO/audits/2026-05-31-desk-note.md and audits/2026-05-29-desk-note.md as templates. The 12 fields are: Date, Target, Files reviewed, Reviewer, Scope, Snapshot anchor, Tokens, Build (tsc proxy note — full next build is environment-blocked on this server's Node 18.19.1), Verdict (PASS / PASS-WITH-NOTES / BLOCK-CRITICAL — be explicit on a line that starts with the word 'Verdict' so downstream parsing can grep it), Findings table (ID | Severity | File:line | Finding | Evidence | Suggested fix), Codex-confirmed clean (list what you attacked and cleared), Open issues, Follow-up.

Take the full xhigh-effort budget; the run is bounded by this single call. Exit cleanly after the audit file is written."

  # Empty stdin pipe to dodge the TTY hang seen on 2026-05-20.
  set +e
  echo "" | codex exec -c model_reasoning_effort=xhigh "$STAGE_B_PROMPT"
  CODEX_EXIT=$?
  set -e
  echo "--- stage B codex exit: $CODEX_EXIT (took $(( $(date -u +%s) - B_START ))s) ---"

  if [ ! -f "$REPO/$AUDIT_FILE" ] || [ ! -s "$REPO/$AUDIT_FILE" ]; then
    echo "FATAL: stage B complete but $AUDIT_FILE missing or empty"
    exit 1
  fi
fi

# Parse the verdict line. Pattern allows multiple table-formats:
#   "| **Verdict** | ..."   "**Verdict**: BLOCK-CRITICAL"   "Verdict: PASS"
VERDICT_LINE="$(grep -iE 'verdict' "$REPO/$AUDIT_FILE" | head -3 | tr '\n' ' | ')"
echo "Stage B verdict context: $VERDICT_LINE"
HAS_CRITICAL=0
if echo "$VERDICT_LINE" | grep -qiE 'BLOCK[- ]?CRITICAL|unresolved CRITICAL'; then
  HAS_CRITICAL=1
  echo "PUBLISH GATE flag: stage B verdict includes BLOCK-CRITICAL"
fi

#============================================================================
# STAGE B2 — ask-deepseek supplementary arithmetic/consistency audit (runbook §5).
# codex stays primary + OWNS the publish gate above; this is an extra numeric
# backstop appended to the audit file for Stage C to ADJUDICATE (never auto-apply).
# Hard fallback: skip silently if ask-deepseek is unavailable — never break the run.
#============================================================================
if grep -q "ask-deepseek arithmetic/consistency second-audit" "$REPO/$AUDIT_FILE" 2>/dev/null; then
  echo "stage B2 skip: deepseek section already in $AUDIT_FILE — resuming"
elif command -v ask-deepseek >/dev/null 2>&1; then
  echo "===== STAGE B2: ask-deepseek arithmetic second-audit ====="
  B2_START="$(date -u +%s)"
  DS_PROMPT="You are a hostile-but-fair SECOND auditor on today's EN desk-note draft. Recompute every SELF-CONTAINED numeric claim using ONLY the numbers in the text (no external data): funding annualization = raw field x 1095 (NOT x1095x100); GEX 0-gamma flip dual-reference percentages and signs (spot/flip-1 and idx/flip-1); SM cut fraction = |delta_net|/prior_net; MA matrix offsets = spot/MA-1; the expiry-strip sum; any R/R ratio (entry / stop / target must use a CONSISTENT entry price); and cross-block consistency (the same number must not appear with two different values or a flipped sign across manifest tiles / prose / trade book / audit-trace). For each issue: [SEVERITY CRITICAL/MAJOR/MINOR] [quote the claim] [the problem] [recompute / correct value]. If a class checks out, write 'PASS: <what>'. End with a one-line verdict on whether you found any real numeric error. codex is the PRIMARY auditor and owns the publish gate; you are the arithmetic backstop. Note text follows:
====================
$(sed 's/<[^>]*>//g' "$REPO/$EN_FILE")"
  set +e
  {
    printf '\n## ask-deepseek arithmetic/consistency second-audit (%s)\n\n' "$(date -u +%FT%TZ)"
    printf '_Supplementary numeric recompute per runbook §5. codex remains primary + owns the publish gate. Stage C must ADJUDICATE each item (recompute before acting), never auto-apply; GLM is deliberately NOT an auditor (2026-06-13 false-positive run)._\n\n'
    ask-deepseek "$DS_PROMPT"
  } >> "$REPO/$AUDIT_FILE" 2>&1
  DS_EXIT=$?
  set -e
  echo "--- stage B2 ask-deepseek exit: $DS_EXIT (took $(( $(date -u +%s) - B2_START ))s) ---"
else
  echo "stage B2 skip: ask-deepseek not on PATH — codex-only audit (fallback, per runbook §5)"
fi

#============================================================================
# STAGE C — claude: apply fixes, write ZH, update landings, v1→v2, tsc
#============================================================================
echo "===== STAGE C: claude apply fixes + write ZH + landings + v1→v2 + tsc ====="
C_START="$(date -u +%s)"

if [ -f "$REPO/$ZH_FILE" ] && [ -s "$REPO/$ZH_FILE" ] && grep -q "\"$TODAY\"" "$REPO/src/app/desk/page.tsx" 2>/dev/null; then
  # Resume heuristic: ZH file exists AND today's date appears in the EN
  # landing entry-list → assume stage C completed in a prior run.
  echo "stage C skip: $ZH_FILE exists and landing has today's date — resuming"
else
  STAGE_C_PROMPT="You are executing STAGE C of the daily Hysteresis Research BTC desk-note routine on the btc-fetcher server. Today is $TODAY (UTC).

YOUR SCOPE (do these in order):
1. Read $REPO/$AUDIT_FILE (the stage-B codex hostile-audit verdict + findings list).
IMPORTANT — fix scope: Stage B's cited file:line references in the audit are PRIMARY EXAMPLES of a broken invariant, NOT an exhaustive enumeration. Treat each finding as a wrong claim to correct EVERYWHERE in the file, not just at the cited lines. This is the 2026-06-08 / 06-09 failure mode root cause — Stage C fixed all cited lines but missed semantically equivalent claims elsewhere; Stage D caught the contradiction and gated publish. See audits/2026-06-09-pipeline-failure-investigation.md.

2. Apply EVERY finding's suggested fix to $REPO/$EN_FILE in place. Apply CRITICAL + MAJOR + MINOR; apply NIT if trivial.
2a. Grep-closure (MANDATORY before promoting v1 → v2 and before writing the dn-audit-trace block). For each CRITICAL and MAJOR finding, extract the key wrong-claim string pattern (the specific number, label, or phrase the finding describes as wrong). Run Grep on the FULL EN file for that pattern AND all semantic variants. Fix every match that still carries the pre-fix meaning. Repeat the grep + fix loop until ZERO stale matches remain. For each finding, record in a working note: (pattern searched, hits before fix, hits after fix). Do not skip this step even if the cited lines appear comprehensive — it is the audit-trace honesty gate that the 06-08 / 06-09 runs failed.

3. Promote the EN file v1 → v2: titleband '… · v2', footer 'v2 · …Z', and rewrite the dn-audit-trace block. For EACH finding (CRITICAL + MAJOR + MINOR): state ID — key patterns searched in step 2a — grep hits before — grep hits after — RESOLVED (hits-after = 0) or UNRESOLVED (hits-after > 0, list remaining lines). State 'post codex hostile audit' overall. Reference $AUDIT_FILE. **Do NOT use phrases like \"v2 applies every finding\" or \"applies wherever it appears\" unless grep verification confirms hits-after = 0 for every finding.** If any finding is UNRESOLVED, do NOT promote to v2; write 'PUBLISH-BLOCKED: <finding ID> residue at <line>' to $SUBJECT_FILE per step 6 and exit non-zero.
4. Write the ZH companion at $REPO/$ZH_FILE, generated forward in native CN trader voice (per runbook §3 + memory feedback_hysres_web_zh_native.md — NOT translated from EN). Same numbers + same caveats as the v2 EN (zero drift); sentence shape comes from CN. The ZH titleband should read 'HysRes · BTC · 交易台备忘 · $TODAY · v2'. Reference style: src/app/zh/desk/2026-05-31/page.tsx and src/app/zh/desk/2026-05-29/page.tsx.
5. Prepend a <li> entry to $REPO/src/app/desk/page.tsx (EN) and $REPO/src/app/zh/desk/page.tsx (ZH) entry-list. Format: dateTime=\"$TODAY\", <TickerMark ticker=\"BTC\" />, <Link href=\"/desk/$TODAY\">{thesis}</Link> for EN and href=\"/zh/desk/$TODAY\" for ZH. Thesis = short noun phrase (EN spare register / ZH native).
6. Write a single-line file at $SUBJECT_FILE containing the commit subject of the form 'desk: $TODAY v2 — <one-line thesis> (post codex hostile audit)'. STAGE E reads this file for the commit message.
7. Run \`cd $REPO && npx --no-install tsc --noEmit\` as build proxy. If tsc fails, fix the type error and re-run until it passes. Only exit cleanly when tsc returns exit 0.

DO NOT:
- run codex audit again (stage B owned that)
- commit or push (stage E owns that)
- modify $AUDIT_FILE (stage B owns it; do not retroactively edit)

If you cannot resolve every CRITICAL finding (e.g. data fundamentally doesn't support a claim, no fix achievable), leave the EN file at v1 (do not promote), write 'PUBLISH-BLOCKED: <reason>' to $SUBJECT_FILE, and exit non-zero. Stage E will commit locally only and not push.

After step 7 succeeds, exit cleanly. Stage C is done."

  set +e
  claude --print \
    --model claude-opus-5 \
    --permission-mode acceptEdits \
    --allowedTools "Bash,Read,Edit,Write,Glob,Grep" \
    --max-turns 120 \
    "$STAGE_C_PROMPT"
  CLAUDE_C_EXIT=$?
  set -e
  echo "--- stage C claude exit: $CLAUDE_C_EXIT (took $(( $(date -u +%s) - C_START ))s) ---"
  # Note: 2026-06-01 F-02 — max-turns 80 hit Reached max turns AFTER all
  # fixes/ZH/landings/tsc were done (claude was looping on a final tsc
  # nit). Bumped to 120 for headroom. The fix-application work itself
  # comfortably fits inside this budget.

  if [ $CLAUDE_C_EXIT -ne 0 ]; then
    echo "WARN: stage C exited non-zero — proceeding to stage E to commit local-only"
  fi
  if [ ! -f "$REPO/$ZH_FILE" ] || [ ! -s "$REPO/$ZH_FILE" ]; then
    echo "FATAL: stage C complete but $ZH_FILE missing or empty"
    exit 1
  fi
  if [ ! -f "$SUBJECT_FILE" ] || [ ! -s "$SUBJECT_FILE" ]; then
    echo "WARN: stage C did not write $SUBJECT_FILE — using fallback subject"
  fi
fi

echo "Stage C OK: $ZH_FILE ($(wc -l < "$REPO/$ZH_FILE") lines, $(wc -c < "$REPO/$ZH_FILE") bytes)"

#============================================================================
# STAGE D — codex re-gate on v2 EN (post Stage C fix-application)
#============================================================================
# Added 2026-06-01 F-03: prior Stage E gated push on the Stage B v1
# verdict, which is structurally wrong — it can NEVER pass because v1 by
# definition has the findings that Stage C fixes. Stage D re-runs codex on
# the corrected v2 to produce a meaningful publish-gate verdict.
echo "===== STAGE D: codex re-gate on v2 EN ====="
D_START="$(date -u +%s)"

if grep -q '^## v2 re-gate' "$REPO/$AUDIT_FILE" 2>/dev/null; then
  echo "stage D skip: v2 re-gate section already present in $AUDIT_FILE — resuming"
else
  STAGE_D_PROMPT="You are running a SCOPED re-gate on the v2 EN desk-note draft AFTER Stage C applied the fixes from the original Stage B hostile audit. Date: $TODAY.

Target file: $REPO/$EN_FILE (v2, post-fix-application)
Prior audit: $REPO/$AUDIT_FILE (Stage B's v1 audit + findings list — READ THIS FIRST)

YOUR SCOPE — narrower than Stage B:
1. For EACH finding in the prior audit's findings table, verify whether the v2 file has the fix applied. Report status RESOLVED / PARTIALLY-RESOLVED / NOT-RESOLVED / NEW-CRITICAL-INTRODUCED per finding.
2. Surface any NEW issues that Stage C's fix-application introduced (typo, number propagation error, broken JSX from edits, contradiction between fixed line and other lines).
3. Cross-reference against the same source files Stage B used (live_db.json, btc_gex.html, mtf_div_latest.html, parquet) for any number changed in v2.

OUTPUT — APPEND (do not overwrite) a new section to $REPO/$AUDIT_FILE that begins with the literal Markdown heading '## v2 re-gate' (exact text, line-anchored — Stage E greps for this). The section must contain:
- A per-finding verification table (ID | original-severity | v2-status | evidence)
- A 'New findings introduced by v2' subsection (if any)
- A FINAL LINE that begins with the exact literal 'v2 verdict:' followed by one of PASS, PASS-WITH-NOTES, BLOCK-CRITICAL — Stage E greps this line to decide push.

Take ~5 min. Stage D is bounded. Exit cleanly after appending."

  set +e
  echo "" | codex exec -c model_reasoning_effort=xhigh "$STAGE_D_PROMPT"
  CODEX_D_EXIT=$?
  set -e
  echo "--- stage D codex exit: $CODEX_D_EXIT (took $(( $(date -u +%s) - D_START ))s) ---"
fi

# Parse the v2 verdict. Fall back to Stage B's v1 verdict if Stage D didn't
# write one (safe conservative: when in doubt, block push).
V2_VERDICT_LINE="$(grep -iE '^v2 verdict:|^\| v2 verdict|v2 verdict:' "$REPO/$AUDIT_FILE" | tail -1 || true)"
if [ -n "$V2_VERDICT_LINE" ]; then
  echo "Stage D v2 verdict: $V2_VERDICT_LINE"
  if echo "$V2_VERDICT_LINE" | grep -qiE 'BLOCK[- ]?CRITICAL|NEW-CRITICAL'; then
    HAS_CRITICAL=1
    echo "PUBLISH GATE flag: v2 verdict includes BLOCK-CRITICAL or NEW-CRITICAL"
  else
    HAS_CRITICAL=0
    echo "PUBLISH GATE clear: v2 verdict is clean"
  fi
else
  echo "WARN: Stage D produced no 'v2 verdict:' line — falling back to Stage B v1 verdict (\$HAS_CRITICAL=$HAS_CRITICAL, conservative)"
fi

#============================================================================
# STAGE E — bash: final tsc + commit + conditional push (gated on V2 verdict)
#============================================================================
echo "===== STAGE E: tsc + commit + conditional push ====="

cd "$REPO"

# ── Title gate (2026-06-15): code backstop for the runbook §4 ≤80-char cap ──
# The prose cap drifted twice (06-07, 06-15 → 226-char titles): Stage C models
# the title on the verbose note in context. This enforces the SAME ≤80 number
# in code — deterministic char-count detection (locale-independent via python)
# + a bounded minimal-context rewrite that CANNOT re-bloat (it sees only the
# over-long title + short exemplars, never the note). It never blocks the note
# on a cosmetic title: any empty/too-long/errored rewrite degrades to no-op.
title_gate() {
  local landing="$1" prefix="$2" lang="$3" exemplars="$4"
  local title n short prompt
  title="$(grep -A4 "dateTime=\"$TODAY\"" "$REPO/$landing" 2>/dev/null \
    | grep -oE "<Link href=\"$prefix/$TODAY\">[^<]*</Link>" \
    | sed -E "s|<Link[^>]*>([^<]*)</Link>|\1|" | head -1)"
  [ -z "$title" ] && { echo "title-gate[$lang]: no $TODAY entry — skip"; return 0; }
  n="$(printf '%s' "$title" | python3 -c 'import sys; print(len(sys.stdin.read()))')"
  if [ "$n" -le 80 ]; then echo "title-gate[$lang]: OK ($n chars)"; return 0; fi
  echo "title-gate[$lang]: $n chars > 80 — bounded rewrite"
  prompt="Shorten this desk-note index title to a single short noun phrase, 25-55 characters. NO comma-chained clauses, NO dollar/number/percent values, NO parenthetical, NO em-dash clause lists. Capture only the single spine; the body of the note carries the detail. Exemplars ($lang): $exemplars. Output ONLY the replacement title text on one line, nothing else.

Title: $title"
  short="$(printf '%s' "$prompt" | claude --print --model claude-opus-5 --max-turns 2 2>/dev/null | head -1 | sed -E 's/^[[:space:]]+//; s/[[:space:]]+$//; s/^[\"“]//; s/[\"”]$//')"
  local sn
  sn="$(printf '%s' "$short" | python3 -c 'import sys; print(len(sys.stdin.read()))' 2>/dev/null || echo 999)"
  if [ -z "$short" ] || [ "$sn" -gt 80 ] || printf '%s' "$short" | grep -qiE '^error'; then
    echo "title-gate[$lang]: rewrite empty/too-long/errored ('$short') — leaving original (cosmetic, non-blocking)"
    return 0
  fi
  python3 -c 'import sys; from pathlib import Path; p,old,new=sys.argv[1:4]; x=Path(p).read_text(); Path(p).write_text(x.replace(">"+old+"</Link>", ">"+new+"</Link>", 1), encoding="utf-8")' "$REPO/$landing" "$title" "$short" \
    && echo "title-gate[$lang]: rewritten $n -> $sn chars: '$short'"
}
title_gate "src/app/desk/page.tsx" "/desk" "EN" "Pause without recovery / Bounce off the cycle floor / Wall cleared, new magnet below / Through the floor on the print / Between two walls"
title_gate "src/app/zh/desk/page.tsx" "/zh/desk" "ZH" "停了但底没起 / 周期底上反弹 / 墙穿过去，新磁下移 / 底破在印上 / 两道墙之间"

echo "--- final tsc --noEmit ---"
if ! npx --no-install tsc --noEmit 2>&1 | tail -5; then
  echo "FATAL: tsc check failed at stage E — investigate manually; nothing committed"
  exit 1
fi

git add "$AUDIT_FILE" "$EN_FILE" "$ZH_FILE" src/app/desk/page.tsx src/app/zh/desk/page.tsx

if git diff --staged --quiet; then
  echo "no staged changes — nothing to commit (idempotent re-run on already-published day?)"
  exit 0
fi

# Build commit subject.
if [ -f "$SUBJECT_FILE" ] && [ -s "$SUBJECT_FILE" ]; then
  COMMIT_SUBJECT="$(head -1 "$SUBJECT_FILE" | tr -d '\n')"
else
  COMMIT_SUBJECT="desk: $TODAY v2 — daily run (post codex hostile audit)"
fi

# Guard: if stage C reported a publish-blocked condition through SUBJECT_FILE,
# commit locally only.
if echo "$COMMIT_SUBJECT" | grep -q 'PUBLISH-BLOCKED'; then
  HAS_CRITICAL=1
  echo "PUBLISH-BLOCKED carried via subject file: $COMMIT_SUBJECT"
fi

git commit -m "$COMMIT_SUBJECT" || { echo "FATAL: commit failed"; exit 1; }
echo "Committed: $(git log --oneline -1)"

if [ "$HAS_CRITICAL" -eq 1 ]; then
  echo "PUBLISH GATE: committed locally, NOT pushing (verdict had unresolved CRITICAL)"
  exit 1
fi

git push origin main 2>&1 | tail -5
echo "Pushed to origin/main"

# HTTP verify after Vercel settle.
sleep 60
for u in "https://www.hysteresisresearch.com/desk/$TODAY" "https://www.hysteresisresearch.com/zh/desk/$TODAY"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-redirs 0 "$u" || echo "?")
  echo "  $u -> HTTP $code"
done

echo "===== done: $(date -u +%FT%TZ) ====="
