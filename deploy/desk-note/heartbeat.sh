#!/bin/bash
# Daily PRE-FLIGHT heartbeat — is the pipeline ALIVE and ABLE to publish?
# Checks the exact things that have broken silently and cost multi-day outages:
#   - claude subscription OAuth (expired 06-22)
#   - codex auth
#   - git push ability (deploy key went read-only after the org rename, 07-17)
# Pushes ONE ntfy message daily (♥ alive / ✗ broken+what). Under a weekly-publish
# cadence this is the liveness signal that lets you tell "quiet week" from "dead
# system", and it flags auth/key breakage DAYS before a note run needs it — a
# pre-flight, not a post-mortem. On the weekly publish day it also confirms the
# week's note actually landed.

set -uo pipefail
ENV_FILE=/etc/desk-note.env
[ -f "$ENV_FILE" ] && . "$ENV_FILE"
TOPIC="${DESK_NOTE_NTFY_TOPIC:-}"
REPO=/opt/desk-note/web

notify() {  # title, priority, tag, body
  if [ -z "$TOPIC" ]; then echo "heartbeat: NO TOPIC — would send [$1] $4"; return; fi
  curl -s --max-time 20 -H "Title: $1" -H "Priority: $2" -H "Tags: $3" \
    -d "$4" "https://ntfy.sh/${TOPIC}" >/dev/null \
    && echo "heartbeat: sent [$1]" || echo "heartbeat: ntfy send FAILED"
}

fails=""

# 1. claude subscription auth (a real 1-turn inference — the only true test; auth
#    status LIES with loggedIn:true on an expired token, so ping, don't status).
if ! echo "ping" | timeout 45 claude --print --model claude-opus-4-8 --max-turns 1 >/dev/null 2>&1; then
  fails="${fails}claude-auth "
fi

# 2. codex auth
codex login status >/dev/null 2>&1 || fails="${fails}codex-auth "

# 3. git PUSH ability — dry-run tests write perms without pushing; a read-only
#    deploy key is denied here (caught the 07-17 breakage). Fetch first so an
#    up-to-date branch still exercises the write path.
if cd "$REPO" 2>/dev/null; then
  git fetch -q origin 2>/dev/null
  git push --dry-run origin main >/dev/null 2>&1 || fails="${fails}git-push-denied "
else
  fails="${fails}repo-missing "
fi

if [ -z "$fails" ]; then
  notify "desk-note ♥ alive" default heartbeat "auth + push OK · $(date -u '+%a %H:%MZ')"
else
  notify "desk-note ✗ PRE-FLIGHT FAIL" urgent rotating_light "broken: ${fails}· fix before the next note run · ssh btc"
fi
exit 0
