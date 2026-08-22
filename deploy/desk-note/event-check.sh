#!/bin/bash
# Event detector for the desk-note pipeline's event-triggered daily.
# Non-Monday runs call this: exit 0 = an event fired (publish a note today),
# exit 1 = quiet tape (skip today; the Monday weekly note covers it). Pure
# live_db, deterministic, no prior-note dependency. Cadence self-adjusts to
# volatility: frozen range → nothing fires → weekly only; a real move/trend →
# fires → daily notes while it lasts → back to weekly when it calms.
# Tunable via env:
#   DESK_NOTE_EVENT_MOVE_PCT   (default 6.0)   |24h spot move| ≥ this ⇒ event
#   DESK_NOTE_EVENT_MOVE7D_PCT (default 12.0)  |7d spot move|  ≥ this ⇒ event
# Funding sign-flip through zero in 24h is also an event (leverage regime turn).

set -uo pipefail
ENV_FILE=/etc/desk-note.env
[ -f "$ENV_FILE" ] && . "$ENV_FILE"
MOVE_PCT="${DESK_NOTE_EVENT_MOVE_PCT:-6.0}"
MOVE7D_PCT="${DESK_NOTE_EVENT_MOVE7D_PCT:-12.0}"

/opt/btc-data/.venv/bin/python3 - "$MOVE_PCT" "$MOVE7D_PCT" <<'PY'
import json, sys
thr24, thr7d = float(sys.argv[1]), float(sys.argv[2])
rows = []
with open("/opt/btc-monitor/live_db.json") as f:
    for line in f:
        line = line.strip()
        if line:
            try: rows.append(json.loads(line))
            except Exception: pass
if len(rows) < 1442:
    print("EVENT: insufficient tape (<24h) — failing safe to publish"); sys.exit(0)

now = rows[-1]
p24 = rows[-1441]
p7d = rows[-10081] if len(rows) >= 10081 else None
reasons = []

s_now = now.get("spot")
# 1) 24h move
s24 = p24.get("spot")
mv24 = (s_now / s24 - 1) * 100 if (s_now and s24) else 0.0
if abs(mv24) >= thr24:
    reasons.append(f"24h {mv24:+.2f}% (>={thr24}%)")
# 2) 7d move (grinding trend leg a weekly note would miss)
mv7d = None
if p7d and p7d.get("spot") and s_now:
    mv7d = (s_now / p7d["spot"] - 1) * 100
    if abs(mv7d) >= thr7d:
        reasons.append(f"7d {mv7d:+.2f}% (>={thr7d}%)")
# 3) funding sign flip through zero in 24h
f_now, f_prev = now.get("funding"), p24.get("funding")
if f_now is not None and f_prev is not None:
    if (f_now > 0) != (f_prev > 0) and abs(f_now) > 1e-9 and abs(f_prev) > 1e-9:
        reasons.append(f"funding flip {f_prev*1095:+.1f}%→{f_now*1095:+.1f}% ann")

if reasons:
    print("EVENT: " + " · ".join(reasons)); sys.exit(0)
mv7s = f"{mv7d:+.2f}%" if mv7d is not None else "n/a"
print(f"no-event: 24h {mv24:+.2f}% (<{thr24}%) · 7d {mv7s} (<{thr7d}%) · funding same-sign"); sys.exit(1)
PY
