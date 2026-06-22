#!/bin/bash
# Daily health check for the desk-note pipeline. Runs ~03:30 UTC (after the
# 00:05 run + its 180-min ceiling). Checks the ACTUAL outcome — did today's
# note land on origin/main — independent of HOW a failure happened (auth 401,
# systemd timeout, PUBLISH-GATE block, silent). Pushes one ntfy message either
# way, so the absence of any message means the alerter itself died.
#
# Channel: ntfy.sh/$DESK_NOTE_NTFY_TOPIC (topic from /etc/desk-note.env, kept
# out of git). Install the ntfy app, subscribe to that topic, done — no token.

set -uo pipefail

ENV_FILE=/etc/desk-note.env
[ -f "$ENV_FILE" ] && . "$ENV_FILE"
TOPIC="${DESK_NOTE_NTFY_TOPIC:-}"

TODAY="$(date -u +%Y-%m-%d)"
REPO=/opt/desk-note/web
LOG="/opt/desk-note/logs/${TODAY}.log"

notify() {  # title, priority, body
  local title="$1" prio="$2" body="$3"
  if [ -z "$TOPIC" ]; then
    echo "health: NO NTFY TOPIC set in $ENV_FILE — would have sent: [$title] $body"
    return
  fi
  curl -s --max-time 20 \
    -H "Title: $title" -H "Priority: $prio" -H "Tags: $4" \
    -d "$body" "https://ntfy.sh/${TOPIC}" >/dev/null \
    && echo "health: ntfy sent [$title]" \
    || echo "health: ntfy send FAILED"
}

cd "$REPO" 2>/dev/null || { notify "desk-note ✗ $TODAY" urgent "repo $REPO missing on btc-fetcher" rotating_light; exit 0; }
git fetch -q origin 2>/dev/null

if git ls-tree --name-only "origin/main" "src/app/desk/${TODAY}/page.tsx" 2>/dev/null | grep -q .; then
  # Published. One-line confirm (mute on the phone if the daily ✓ is noise).
  title_txt="$(git show "origin/main:src/app/desk/page.tsx" 2>/dev/null \
    | grep -A4 "dateTime=\"${TODAY}\"" | grep -oE '<Link[^>]*>[^<]+</Link>' \
    | sed -E 's|<Link[^>]*>([^<]+)</Link>|\1|' | head -1)"
  notify "desk-note ✓ $TODAY" default "published · ${title_txt:-untitled}" white_check_mark
  exit 0
fi

# NOT on main — figure out why from the day's log, surface it in the alert.
reason="no log file"
if [ -f "$LOG" ]; then
  reason="$(grep -hoE '401 Invalid authentication|Reached max turns|FATAL[^\"]*|Result=timeout|PUBLISH GATE: committed locally|BLOCK-CRITICAL' "$LOG" | tail -1)"
  [ -z "$reason" ] && reason="ran but no publish; tail: $(tail -1 "$LOG" | cut -c1-120)"
fi
notify "desk-note ✗ $TODAY NOT PUBLISHED" urgent "reason: ${reason} · debug: ssh btc journalctl -u desk-note -n 60" rotating_light
exit 0
