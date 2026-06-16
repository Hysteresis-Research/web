# deploy/desk-note — orchestration layer (version-controlled SSOT)

The daily BTC desk-note pipeline runs **headless on the btc-fetcher server**, not
from this repo. This directory is the **tracked source of truth** for the
orchestration layer so it has version history, review, and a recovery point —
previously `run.sh` lived ONLY at `/opt/desk-note/run.sh` (untracked, single point
of loss, and a mid-flight-edit hazard).

## Files

| repo (SSOT) | live path on btc-fetcher | role |
|---|---|---|
| `run.sh` | `/opt/desk-note/run.sh` | 5-stage wrapper (A draft → B codex audit → B2 deepseek arith → C fix+ZH+landings+v2 → D re-gate → E tsc+commit+push) |
| `desk-note.service` | `/etc/systemd/system/desk-note.service` | oneshot, `EnvironmentFile=/etc/desk-note.env`, 90 min ceiling, 4G mem |
| `desk-note.timer` | `/etc/systemd/system/desk-note.timer` | `OnCalendar=*-*-* 00:05:00 UTC` (BJ 08:05) + 180 s jitter |

The note CONTENT spec is the runbook at `docs/desk-note-runbook.md` (read by the
Stage A/C agents). This dir is the *machinery* that runs it.

## Deploy ritual (edit run.sh / units)

`run.sh` is NOT auto-deployed — the per-run `git reset --hard origin/main` operates
on the repo clone (`/opt/desk-note/web`), but the LIVE executing copy is the separate
file `/opt/desk-note/run.sh`. Keep them in sync by hand, in this order:

1. Edit `deploy/desk-note/run.sh` **here** (or edit the live copy then copy back — but
   prefer repo-first so the commit captures the change).
2. `bash -n deploy/desk-note/run.sh` — must pass.
3. Commit + push.
4. **On the server, ONLY when no run is active** (see hazard below):
   ```sh
   ssh btc 'cd /opt/desk-note/web && git fetch -q origin && git reset --hard origin/main \
     && cp deploy/desk-note/run.sh /opt/desk-note/run.sh \
     && cp deploy/desk-note/desk-note.service /etc/systemd/system/desk-note.service \
     && cp deploy/desk-note/desk-note.timer /etc/systemd/system/desk-note.timer \
     && systemctl daemon-reload && bash -n /opt/desk-note/run.sh && echo deployed'
   ```

## HAZARD — never edit the LIVE run.sh while a run is in flight

bash reads a script by byte offset as it executes. Editing `/opt/desk-note/run.sh`
mid-run can shift offsets and corrupt where bash resumes (e.g. Stage E). **Before
touching the live copy, always check:**

```sh
ssh btc 'date -u; pgrep -f "[b]in/bash /opt/desk-note/run.sh" && echo ACTIVE || echo clean'
```

The daily timer fires 00:05 UTC and a run takes ~30–50 min, so a run is typically
active 00:05–00:55 UTC. If a run is active, stage the edit and apply post-exit
(a `while pgrep …; do sleep 30; done` loop, then `cp`). Backups accumulate at
`/opt/desk-note/run.sh.bak-*` — keep making one before each live edit.

## Why run.sh is a deployed copy, not a symlink into the repo

A symlink (`/opt/desk-note/run.sh` → repo copy) would make the per-run
`git reset --hard origin/main` rewrite the script bash is currently executing —
the exact mid-flight corruption above, but on every run. The deployed-copy +
manual-sync design avoids that.
