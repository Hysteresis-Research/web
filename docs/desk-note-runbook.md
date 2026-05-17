# Daily BTC desk-note runbook

Self-contained runbook for the recurring **Hysteresis Research BTC desk note**.
This file IS the payload for the scheduled agent (`/schedule` remote routine).
The agent has **zero conversation context** — everything needed is here.

- **Cadence**: daily, **00:05 UTC** (Beijing 08:05).
- **Why this time**: btc-fetcher `daily-update.timer` runs `00:00 UTC`;
  `reports-refresh.timer` runs hourly (~:01). At 00:05 UTC both have just run,
  so server artifacts are ~4–5 min fresh.
- **Output**: gated `hysteresisresearch.com/desk/YYYY-MM-DD` (EN) + `/zh/desk/...`
  (ZH), promoted to **v2 post-codex-audit**, pushed to `hysres/web` `main`
  (Vercel prod deploy).
- **Repo**: `/Users/moonman/Desktop/web` (NOT the cwd the agent starts in).
- **Reference implementation**: `src/app/desk/2026-05-17/page.tsx` (+ zh mirror)
  is the canonical v2 template. Read it first, every run.

---

## 1 · Pull the atomic snapshot (ssh alias `btc`, server time = UTC)

| Source | Path | Content |
|---|---|---|
| live tape | `/opt/btc-monitor/live_db.json` | JSONL, 1/min: `t spot c premium oi_btc funding mkt_long_pct long_pct short_pct net_btc long_btc short_btc cb_cvd fut_cvd taker_net big_net big_count skew_agg` |
| MTF | `/opt/btc-data/output/mtf_div_latest.html` | MACD cross / RSI / Ichimoku / TD per TF |
| macro | `/opt/btc-data/output/macro_dashboard.html` | 252D regime z + 30D episodic z panel |
| GEX/IV | `/opt/btc-data/output/btc_gex.html` | flip, walls, by-expiry, IV median |
| cross-asset | `/opt/btc-data/cross_asset_correlation_summary.md` | 7d 1h corr + asset moves |
| MA/RV | `/opt/btc-data/data/btcusdt_1m_*.parquet` | last ~3 yearly files |
| venv | `/opt/btc-data/.venv/bin/python3` | has pandas |

- HTML files: strip `<script>/<style>`, regex tags to text, `html.unescape`.
- `btc_ntt_analysis.html` is **JS-rendered → not extractable**. Keep NTT, max-pain,
  strike-IV, BTC/NQ ratio **framework-only / NOT LOADED** in the manifest.
- parquet index is **epoch ms**: `pd.to_datetime(idx.astype('int64'), unit='ms', utc=True)`.

## 2 · Derived quantities — formula discipline

- **FUNDING LANDMINE (CRITICAL — 05-15 F-02 / re-flagged 05-17).** The `funding`
  field is **already in percent** (e.g. `0.004581` = `+0.0046%/8h`).
  **Annualized % = `funding_field × 1095`** (3 funding periods/day × 365).
  **NOT `× 1095 × 100`.** Sanity-check against the SessionStart snapshot banner
  if present (it states `+X%/8h (+Y% ann.)`).
- Endpoints: latest, ~1h (−61 recs), ~4h (−241), ~24h (−1441). Funding 24h
  path: min / max / mean ann.
- OI Δ24h: BTC and %. SM net = `long_btc − short_btc`. **SM 24h Δ = now − 24h-ago**.
  **SM cut fraction = |Δ| / prior_net** — compute it, never eyeball ("a quarter"
  was the 05-17 F-01 2.4× error; 23.8/39.9 = 60%, "more than half").
- Retail = `mkt_long_pct`. Windowed (1h, 4h): price %, OI ΔBTC, spotCVD Δ
  (`cb_cvd`), futCVD Δ (`fut_cvd`), bigNet sum, takerNet sum.
- **Full MA matrix**: Daily AND Weekly, SMA AND EMA, n ∈ {20,50,100,150,200},
  offsets vs **live spot**. Disclose anchor (parquet last-bar ts + close).
- 30D close-to-close RV: `logret.std()*sqrt(365)*100` on daily closes.

## 3 · Synthesis discipline (the desk voice)

- **Compare to the prior note** (`src/app/desk/<prev-date>/`). If the tape
  invalidated the prior thesis, **say so plainly — do not defend it**. Check
  whether any prior kill/decision condition fired; lead with that.
- Claims ≤ data: anything NOT LOADED → framework-only, listed in `dn-manifest`.
- JGB = FRED **monthly → "stale · monthly · do not lean"** everywhere it appears.
- IV = **chain-median across N instruments, NOT a tradable spread**.
- BTC peer set = **TradFi/macro** (NQ/SP500/Mag7/Gold/Silver/oil/FX), never
  crypto-internal.
- **GEX flip**: disclose BOTH references — vs live spot AND the GEX file's own
  Deribit-index reference. Keep the `dn-meta` tile sign **consistent with the
  cluster prose** (05-17 F-02: tile said +2.0% off idx while prose said −1.9%
  vs spot — must not sign-flip).
- ZH = **native Chinese trader voice** per `docs/zh-style-guide.md`, not a
  translation. Same numbers + same caveats as EN (zero drift).

## 4 · Author the pages

- `src/app/desk/YYYY-MM-DD/page.tsx` (EN) + `src/app/zh/desk/YYYY-MM-DD/page.tsx`
  (ZH), structure copied from the **current `2026-05-17` v2** pages: titleband,
  `dn-head`/stamp, `dn-manifest`, 8 `dn-meta` tiles, `dn-prose` §I–VI,
  `dn-trade` book, `dn-audit-trace`, `dn-nfa`, `dn-signature`, `dn-foot`.
- **GATING — CRITICAL (security; 05-17 `5c96e66`).** Every page MUST have, copied
  verbatim from the current `2026-05-17` page (verify, do not assume):
  - `import { requireViewer } from '@/lib/gate';`
  - `export const dynamic = 'force-dynamic';`
  - `export default async function …`
  - `await requireViewer('/desk/YYYY-MM-DD');` (EN) /
    `await requireViewer('/zh/desk/YYYY-MM-DD');` (ZH) as the **first statement**.
  Missing/wrong path ⇒ gated-content bypass ⇒ treat as CRITICAL, do not ship.
- Update EN+ZH `src/app/desk/page.tsx` `entry-list`: prepend a `<li>` (newest
  first) with `<TickerMark ticker="BTC" />`; title = short noun phrase (EN) /
  native CN (ZH), in the established spare register.
- `metadata` + `robots` noindex/nofollow + anodyne description (copy 05-17).

## 5 · Codex hostile audit (quality gate — mandatory)

- Run codex CLI hostile-but-fair on `git diff <prev-origin-main>..HEAD`.
  Stance: guilty until code/text proves consistent; cite file:line; absence of
  evidence = flag. Attack: funding ×1095, GEX dual-ref sign, SM cut fraction,
  MA offsets, claims-vs-loaded-data, EN/ZH parity, the requireViewer pattern,
  `next build`.
- Write `audits/YYYY-MM-DD-desk-note.md` matching existing `audits/` format
  (12 fields: date target files reviewer scope snapshot tokens build verdict +
  findings table w/ severity + cleared + follow-up).
- Fix **all CRITICAL + HIGH (blockers)** in EN+ZH. Apply MED/LOW if cheap.
- Promote titleband/`dn-at-head`/footer **v1 → v2**; rewrite `dn-audit-trace`
  to the real finding list + `audits/…md` pointer (see 05-17 for exact prose).
- **PUBLISH GATE**: if any **CRITICAL is unresolved**, DO NOT push. Commit
  locally, write the audit record, and report for human review instead.

## 6 · Build, integrate, publish

```bash
cd /Users/moonman/Desktop/web
export NPM_TOKEN=$(grep '^export NPM_TOKEN=' ~/.zshrc | head -1 | cut -d= -f2)  # if npm i needed
git fetch origin && git rebase origin/main          # intervening commits expected; keep gating
npx --no-install next build                          # MUST be green; routes ƒ (dynamic)
git add src/app/desk/YYYY-MM-DD/page.tsx src/app/zh/desk/YYYY-MM-DD/page.tsx \
        src/app/desk/page.tsx src/app/zh/desk/page.tsx audits/YYYY-MM-DD-desk-note.md
git commit -m "desk: YYYY-MM-DD v2 — <one-line thesis> (post codex audit)"
git push origin main                                 # → Vercel prod deploy
# verify: curl -s -o/dev/null -w '%{http_code} %{redirect_url}' --max-redirs 0 \
#   https://www.hysteresisresearch.com/desk/YYYY-MM-DD   → 307 → /signin
```

## 7 · Safety / idempotency

- If `src/app/desk/YYYY-MM-DD/` already exists → update in place, never duplicate.
- Stage **named files only** — never `git add .`, never `.claude/`, never secrets.
- Never force-push. Never `--no-verify`. Never amend pushed commits.
- If the snapshot fails or is unusably stale: the `dn-manifest` must flag it
  honestly; if it cannot support an honest note, **skip publishing and report**
  — never fabricate numbers to fill tiles.
- A note shipped means: build green, codex audit recorded, no unresolved
  CRITICAL, gated route returns 307→/signin.
