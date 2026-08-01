import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-01 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-01',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-01' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260801() {
  await requireViewer('/desk/2026-08-01');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-01 · v2</span>
          <span>internal · for discussion · v2 · post codex hostile audit</span>
        </header>

        <div className="dn-body">

          <div className="dn-head">
            <div className="dn-mark" aria-hidden="true">
              <svg width="80" height="48" viewBox="0 0 100 60">
                <path
                  d="M 10 54 C 30 54, 38 53, 58 30 C 70 13, 78 7, 90 6 C 70 6, 62 7, 42 30 C 30 47, 22 53, 10 54 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="dn-lockup">
              <div className="dn-name">Hysteresis Research</div>
              <div className="dn-name-cn">迟 滞 研 究</div>
            </div>
            <div className="dn-stamp">
              BTC · spot
              <span className="dn-big">$62,961</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−2.89%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-01 00:09Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-01 00:09Z (snapshot pin, t == &ldquo;08-01 08:09&rdquo; BJ)</td>
                  <td className="dn-flag">
                    fresh · 1-min · anchor pinned to the file tail at 00:09Z (BJ 08:09) for
                    reproducibility · 24h-window convention: headline deltas use the same-clock
                    prior-day baseline t == &ldquo;07-31 08:08&rdquo; BJ (endpoint minus the
                    24h-ago row, 1,441 rows back). The 4h / 1h flow blocks use prior-row inclusive
                    baselines (08-01 04:08 / 07:08 BJ through the 08:09 pin); the series is
                    contiguous across the sub-windows this run, so those reproduce the same-clock
                    endpoints — no baseline discrepancy. NO CVD reset in the 24h window this run
                    (cb_cvd 4,630.8 → 5,367.9, fut_cvd 375.2 → 2,230.9 both monotone-contiguous),
                    so CVD deltas are raw endpoint differences — Method A not required · funding /
                    flow row-statistics span the 1,442-row window (1,441 minute intervals + the
                    open row); premium means exclude null rows
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-01 08:01 BJ scan (00:01Z)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · archived verbatim at
                    /opt/desk-note/snapshots/2026-08-01-0008/ · ~8-min stale vs snapshot anchor ·
                    in-progress bars · scan spot $62,864
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-01 00:00Z snapshot</td>
                  <td className="dn-flag">
                    ~9-min stale · Deribit idx $63,243 vs live $62,961 · median IV 40.5% · 870
                    instruments (was 936 on 07-31) · headline Total GEX −5.8M vs by-expiry rollup
                    +10.25M (= gex_summary.json net_gex $10,250,368.85) — a ~16M non-reconciling
                    source-panel gap disclosed per DN-003 lineage, the rollup again sitting ABOVE
                    the headline (same relationship as 07-31 / 07-30), with the by-expiry strip
                    summing to +10.26M; the two panels straddle zero this snap (headline slightly
                    net-short-gamma, rollup slightly net-long-gamma) — a de-gammaed, near-flat book
                    right at the flip
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-01 00:00Z
                  </td>
                  <td className="dn-flag">~9-min lag · 7d 1h bars · 22 assets · 167 rows · archived</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-31 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.9h render lag · Friday FRED daily re-print: 10Y ticked +1bp to 4.68% (a
                    sixth session at/above the deferred 4.55% gate — reclaim-long rates filter
                    still FALSE and now 13bp away), TIPS flat 2.41%, 5Y5Y flat 2.30%, 10Y breakeven
                    +1bp to 2.28%, HY OAS −3bp to 2.84% (tightened back) · MOVE fetch-failed
                    (unavailable this render) · the Tier-2 FX / liquidity rows carried UNCHANGED
                    from 07-31 (DXY 99.97, USD/JPY 159.65, Fed net liq $5.825T — no fresh Saturday
                    print), flagged stale-on-those
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-08-01 00:05Z (in-progress close $62,916.70)</td>
                  <td className="dn-flag">
                    ~4-min anchor lag · offsets recomputed vs live spot $62,960.96 · full
                    btcusdt_1m_*.parquet glob (361 weekly bars, 2019–2026) — W-SMA200 IS computable
                    at $63,530 (in-progress week) / $63,311 (last completed week) · every daily AND
                    weekly MA offset is NEGATIVE this snap (spot below the entire matrix) · last
                    completed daily close 07-31 $62,859.90 (a −$1,890.10 / −2.92% DOWN-close, BELOW
                    the $63,311 settled floor)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W support watch</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · last recompute 2026-07-27 00:11Z (NOT re-run today) + full-glob recompute this run</td>
                  <td className="dn-flag">
                    the trap-watch state file still carries the last completed week 2026-07-26
                    close $65,375.10, W-SMA200 $63,311.02, consecutive_above 4 (streak from
                    2026-07-05). An independent full-glob recompute today (361 weekly bars)
                    reproduces the same completed-week W-SMA200 $63,311.02 and shows the in-progress
                    week (ending 2026-08-02) W-SMA200 at $63,530.36 with the in-progress weekly close
                    $62,916.70 sitting BELOW both. So the DAILY floor break is confirmed (07-31 close
                    $62,859.90 and 08-01 in-progress $62,916.70 both below $63,311, spot −0.55%
                    below) while the WEEKLY break is IN PROGRESS but UNconfirmed — a Sunday 08-02
                    weekly close here would end the 4-week above-floor streak
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale · monthly · do not treat as live</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT pivots, max-pain, strike-level IV, BTC/NQ ratio
                  </td>
                  <td className="dn-v-cell">NOT LOADED in this cut</td>
                  <td className="dn-flag">claims explicitly framework-only (btc_ntt_analysis.html JS-rendered, not extractable)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h ann.</span>
              <span className="dn-v">+4.64%</span>
              <span className="dn-src">live · raw 0.004235 field × 1095 · came OFF the cap (24h-ago row was at the +10.95% cap) · 24h mean +7.77% ann (cooled from 07-31&rsquo;s +9.16%) · max +10.95% ann (cap, at the 07-31 00:08Z window open) · min +1.77% ann (0.001612 field @ 07-31 20:18 BJ / 12:18Z) · 0 / 1442 NEGATIVE rows (third straight day at zero) — the crowded-long carry cooled but did NOT flush through the floor break</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">off the cap · +10.95% → +4.64% · 0 negatives</span>
              <span className="dn-src">range +1.77% / +10.95% ann · mean +9.16% → +7.77% ann · cap occupancy 466 / 1442 rows (~32%) · funding cooled off the cap as price fell but stayed positive with zero negatives — the long leverage is still there, underwater, not yet flushed</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+2.67% (+2,852.3 BTC)</span>
              <span className="dn-src">live · 106,641.1 → 109,493.4 · an EXPANSION into a −2.89% price DROP with all four flow reads positive (spotCVD +737.1 / futCVD +1,855.7 / taker +1,855.7 / big +700.2) — aggressive buyers ABSORBED by heavier passive supply, and the SM book shrank (long +3,094 / short −4,702 = −1,608 net OI) so the OI growth came from OUTSIDE the SM book (the crowd caught the knife): distribution INTO a crowded long, not demand-led</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">68.76 / 31.24</span>
              <span className="dn-src">live_db `mkt_long_pct` · 24h high 69.97 (08-01 01:51 BJ / 07-31 17:51Z) low 55.59 (07-31 09:03 BJ / 01:03Z) — RE-CROWDED long HARD into the DROP (up from 07-31&rsquo;s 55.72), retail bought the knife as price fell through the floor</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+8,299 (net LONG, knife-catch)</span>
              <span className="dn-src">live · long 15,340.81 − short 7,041.44 = +8,299.36 · the buyer of record CAUGHT THE KNIFE — built net long hard into the drop, covering shorts −4,702 and re-adding longs +3,094 · trough −74.84 @ 07-31 12:11 BJ (04:11Z), then a single +6,369.0 BTC minute @ 07-31 14:46 BJ (06:46Z, +35.58 → +6,404.59 — the largest single-min Δnet of the window, likely a feed re-sync but present in the tape), peaked +9,240 @ 08-01 03:16 BJ (07-31 19:16Z), eased to +8,299 into the snap</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 24h-ago</span>
              <span className="dn-v bull">+503 → +8,299 (+7,796, 15.5× swing)</span>
              <span className="dn-src">|Δnet|/prior_net = 7,795.9 / 503.4 = 1,549% (a 15.5× swing off a near-flat +503 base) · Δlong +3,094.0 (longs re-added) AND Δshort −4,701.9 (shorts covered) — a net-long BUILD into the fall, NOT the roll-off-to-short the chase-short needed: SM is positioned AGAINST the floor break, not for it</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.5% / 29.67%</span>
              <span className="dn-src">GEX median IV · chain-median across 870 instruments (was 936 on 07-31), not a tradable spread · 30D close-to-close RV = logret.std × √365 × 100 on 30 daily returns (parquet last bar 00:05Z) · ~+10.8pt chain richness · 29-return alt 29.64%</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−0.26% (BELOW)</span>
              <span className="dn-src">flip $63,127 · vs live spot $62,960.96 (−0.26%; 62,960.96/63,126.74 − 1 = −0.263%) / GEX file Deribit idx $63,243 (+0.18%; 63,243/63,126.74 − 1 = +0.184%, file prints +0.2%) — the two references STRADDLE the flip: spot just BELOW, index just ABOVE, tile uses the spot side · headline aggregate −5.8M / rollup +10.25M — DE-GAMMAED HARD from 07-31&rsquo;s +143.4M / +151.05M to roughly flat, the positive dampener GONE, with a negative-gamma shelf right below spot ($62k −10.76M, $60k −24.43M)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The cap rejected and price went through the floor on the print — and smart money
                caught the knife. The 07-31 note leaned mildly bull on a cap reclaim; the tape did
                the bear path instead, and it ran further, closing below the cycle floor
              </span>. The 07-31 note gated everything on the $64,911 D-EMA50 cap close and named
              the bear path plainly: the razor-thin rejection at the cap holds, price sets another
              lower high, and a fresh SM roll-off re-opens the $63,311 floor. Today the rejection
              did more than hold — the 07-31 candle spiked to{' '}
              <span className="dn-tag">$65,364 intraday</span> (above the cap on the tape, never on
              a close), then fully reversed to close{' '}
              <span className="dn-tag bear">$62,859.90 (−$1,890.10 / −2.92%)</span>, a down-close{' '}
              <span className="dn-em">below the $63,311 settled 200W floor</span>. That is the
              scout&rsquo;s stop condition (daily close &lt; $63,311) — it FIRED. The cover-bounce
              scout, deferred eight sessions waiting on a cap close, never armed and is now stood
              down: the recovery read it was built on is invalidated. Spot prints{' '}
              <span className="dn-tag">$62,961</span> live,{' '}
              <span className="dn-tag bear">−2.89%</span> on 24h, a second in-progress close
              ($62,916.70) below the floor, and{' '}
              <span className="dn-em">every daily AND weekly MA offset is now negative</span> — spot
              sits below the entire matrix. But the bear resolution is NOT clean, and that is the
              whole note:{' '}
              <span className="dn-signal">
                the buyer of record did the opposite of roll off — it built net long +8,299 into
                the drop
              </span>{' '}
              (from +503, a 15.5× swing, covering shorts −4,702 and re-adding longs +3,094), retail
              RE-crowded long to <span className="dn-tag bear">68.76</span> (from 55.72), OI EXPANDED{' '}
              <span className="dn-tag bear">+2,852 BTC (+2.67%)</span> with all four flow reads
              positive, and funding cooled off the cap but stayed positive with{' '}
              <span className="dn-tag">0 negatives</span> — the long carry is underwater but unflushed.
              This is distribution INTO a crowded long beneath a broken floor: aggressive buyers
              absorbed by heavier passive supply, the crowd catching the knife. Meanwhile the dealer
              book DE-GAMMAED from <span className="dn-tag bull">+143.4M / +151.05M</span> to{' '}
              <span className="dn-tag bear">−5.8M headline / +10.25M rollup</span> — roughly flat,
              the positive dampener gone — with a negative-gamma shelf right below spot ($62k −10.76M,
              $60k −24.43M) and the 0DTE front flipped back negative (1AUG −5.20M, was +67.37M). So
              the chase-short&rsquo;s gamma and floor-break legs are now MET, but its SM-positioning
              leg INVERTED (SM long, not short) and the WEEKLY floor break is unconfirmed (a Sunday
              08-02 close here ends the 4-week streak). The book stays FLAT: the recovery read is
              dead, but the desk does not chase-short a fresh knife-catch by the buyer of record into
              an unconfirmed weekly break. The note turns on whether SM is right and price reclaims
              the $63,127–$63,530 flip/floor band, or the break holds and the long-heavy book
              cascades into the negative-gamma trapdoor below.
            </p>

            <p>
              BTC prints <span className="dn-tag">$62,961</span> live,{' '}
              <span className="dn-tag bear">−2.89%</span> on 24h, inside a{' '}
              <span className="dn-tag">$65,364.00 / $62,491.01</span> range (high @ 07-31 09:11 BJ /
              01:11Z early in the window, low @ 07-31 23:27 BJ / 15:27Z).{' '}
              <span className="dn-signal">The cap was tested above and rejected, then price closed
              through the floor</span>: 07-25 $64,338.10 → 07-26 $65,375.10 → 07-27 $63,720.80 →
              07-28 $63,903.60 → 07-29 $63,958.90 → 07-30 $64,750.00 →{' '}
              <span className="dn-tag bear">07-31 $62,859.90 (−$1,890.10)</span>, with the in-progress
              08-01 bar (parquet last bar 00:05Z) at{' '}
              <span className="dn-tag bear">$62,916.70</span> — a −$1,890 down-close that erased the
              three-session up-run in a single day and closed below the $63,311 settled floor, then a
              second (in-progress) close $57 above the 07-31 close but still $394 under the floor.{' '}
              <span className="dn-em">
                The MA matrix inverted completely: every line the 07-30 rally reclaimed is lost
                again. Spot $62,961 sits BELOW all ten daily offsets and all weekly offsets — the
                nearest overhead are the broken-support lines now turned resistance:{' '}
                <span className="dn-tag bear">settled 200W floor $63,311 (−0.55%)</span>,{' '}
                <span className="dn-tag bear">D-SMA50 $63,398 (−0.69%)</span>, the 0-γ flip $63,127,
                and the in-progress-week W-SMA200 $63,530 — a tight $63.1k–$63.5k band capping spot —
                then the reclaimed-then-lost near pair D-EMA20 $64,049 (−1.70%) / D-SMA20 $64,405
                (−2.24%) and the D-EMA50 cap $64,757 (−2.77%; ticked DOWN $153 from 07-31&rsquo;s
                $64,911 as the down-close pulled the EMA lower).
              </span>{' '}
              The 200W cycle floor is available and confirmed this run: the trap-watch state
              (last recompute 2026-07-27, not re-run today) carries the completed week 2026-07-26 at
              W-SMA200 $63,311.02 with four consecutive weekly closes above it; a full-glob recompute
              today (361 weekly bars) reproduces $63,311.02 for the completed week and puts the
              in-progress week (ending 2026-08-02) W-SMA200 at $63,530.36 with the in-progress weekly
              close $62,916.70 BELOW both. So $63,311 broke on a DAILY close (two running) but the
              WEEKLY break is unconfirmed until Sunday. The scout was ARMED on 07-22, moved DEFERRED
              on 07-24, held deferred through the recovery, and today STOPPED — the recovery read is
              over.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · smart money CAUGHT THE KNIFE — built net LONG +8,299 into the drop (from +503, a 15.5× swing), covering shorts −4,702 and re-adding longs +3,094 · OI EXPANDED +2.67% into a −2.89% fall with all flow reads positive — distribution INTO a crowded long · retail RE-crowded to 68.76 · funding cooled off the cap (+7.77% mean) but stayed positive, 0 negatives — the long carry underwater and unflushed</span>
            </h2>

            <p>
              <span className="dn-signal">
                The positioning book and the price point opposite ways — smart money, retail and OI
                all built long into a −2.89% drop, absorbed by heavier passive supply
              </span>. Spot fell −2.89% on the 24h with OI{' '}
              <span className="dn-tag bear">expanding +2,852.3 BTC (+2.67%)</span> —
              106,641.1 → 109,493.4. The aggressor tape BOUGHT on every read — spot CVD{' '}
              <span className="dn-tag bull">+737.1</span>, futures CVD{' '}
              <span className="dn-tag bull">+1,855.7</span>, taker-net{' '}
              <span className="dn-tag bull">+1,855.7</span>, big-net{' '}
              <span className="dn-tag bull">+700.2 BTC (1,017 prints)</span> — yet price fell, the
              signature of aggressive buyers being absorbed by a larger passive seller.{' '}
              <span className="dn-em">The SM book itself shrank (long +3,094, short −4,702 = −1,608
              net OI), so the +2,852 OI growth came from OUTSIDE the SM book — the retail/crowd long
              add is what expanded OI into the fall.</span> Perp trades a{' '}
              <span className="dn-tag bear">−$56.03 discount</span> to spot at the snap (24h mean
              −$69.44, range −$236.17 / +$47.71) — a persistent perp discount through the drop. 1-min
              aggressor skew snap <span className="dn-tag bear">−11.3</span> (24h mean −4.50, range
              −47.1 / +44.7).{' '}
              <span className="dn-em">
                OI expanding into a price drop with the SM book shrinking and the crowd adding longs
                is the distribution shape — supply distributed into a crowded, leveraged long that
                bought the knife. The demand-led expansion of 07-31 has inverted: same positive-CVD
                tape, opposite price outcome, because the passive supply overwhelmed it.
              </span>
            </p>

            <p>
              Smart money is the standout, and the read is two-sided.{' '}
              <span className="dn-signal">
                The buyer of record caught the knife — it built net long +8,299 into the drop, the
                exact opposite of the roll-off-to-short the chase-short needed
              </span>. SM net is <span className="dn-tag bull">+8,299</span> (long 15,340.81 − short
              7,041.44 = +8,299.36) vs the 24h-ago{' '}
              <span className="dn-tag">+503</span> — a{' '}
              <span className="dn-tag bull">Δnet +7,796 (a 15.5× swing)</span> (|+8,299.36 − 503.44|
              / 503.44 = 1,549%, a swing off a near-flat base). The decomposition is a two-sided
              build: <span className="dn-tag bull">Δshort −4,701.9</span> (shorts covered) AND{' '}
              <span className="dn-tag bull">Δlong +3,094.0</span> (longs re-added). SM net troughed{' '}
              <span className="dn-tag">−74.84 @ 07-31 12:11 BJ / 04:11Z</span> (briefly flat), then
              stepped up hard in a single{' '}
              <span className="dn-tag bull">+6,369.0 BTC minute @ 07-31 14:46 BJ / 06:46Z</span>{' '}
              (+35.58 → +6,404.59 — the largest single-minute Δnet of the window;{' '}
              <span className="dn-em">a step that large in one minute is more likely a feed re-sync /
              batch reconciliation than a single genuine trade, but it is present in the recorded
              tape</span>), peaked{' '}
              <span className="dn-tag bull">+9,240 @ 08-01 03:16 BJ / 07-31 19:16Z</span> and eased to
              +8,299 at the snap.{' '}
              <span className="dn-em">
                Read straight: this is a knife-catch. SM is now heavily long BELOW a broken floor —
                either it is right and marks a bear-trap low, or it is a falling knife adding fuel to
                a liquidation cascade if the break holds. Whichever, it is NOT the SM-short the
                chase-short is built on: the buyer of record is positioned against the break, so the
                short has no positioning tell to lean on.
              </span>
            </p>

            <p>
              The leverage and crowding reads confirm the long-heavy book beneath the break.{' '}
              <span className="dn-signal">
                Funding cooled off the cap but stayed positive with zero negatives, while retail
                RE-crowded long — the carry is underwater and unflushed
              </span>: live funding <span className="dn-tag">+4.64% ann</span> (raw 0.004235 field ×
              1095, off the cap), 24h mean{' '}
              <span className="dn-tag">+7.77% ann</span> (a cool from 07-31&rsquo;s +9.16%), max{' '}
              <span className="dn-tag">+10.95% ann</span> (cap, at the 07-31 00:08Z window open), min{' '}
              <span className="dn-tag">+1.77% ann (0.001612 field @ 07-31 20:18 BJ / 12:18Z)</span>,
              and <span className="dn-tag">0 / 1442 negative rows</span> — a third straight day at
              zero negatives, cap occupancy 466 / 1442 rows (~32%). Retail{' '}
              <span className="dn-tag bear">mkt_long_pct 68.76</span> (24h high 69.97 @ 08-01 01:51
              BJ / 07-31 17:51Z, low 55.59 @ 07-31 09:03 BJ / 01:03Z) — RE-crowded hard from
              07-31&rsquo;s 55.72, the retail long ratio RISING into the fall.{' '}
              <span className="dn-em">The read: funding never went negative even as price fell −2.89%
              through the floor — the long leverage did not flush, it cooled and stayed. That is the
              bear risk (a big pool of underwater longs, retail crowded to 68.76 and SM knife-catching,
              is fuel for a cascade if the break holds), but it is also why the break is not yet
              confirmed capitulation: the flush has not happened. The one book that would tell you the
              break is real — a funding flush to negative and a long-side liquidation — is absent.</span>
            </p>

            <p>
              Windowed flow is positive across the 24h but rolling over into the snap. 24h: price{' '}
              <span className="dn-tag bear">−2.89%</span>, OI{' '}
              <span className="dn-tag bear">+2,852.3 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +737.1</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +1,855.7</span>, big-print{' '}
              <span className="dn-tag bull">+700.2 BTC / 1,017 prints</span>, taker-net{' '}
              <span className="dn-tag bull">+1,855.7</span> —{' '}
              <span className="dn-em">every flow read positive into a −2.89% fall: aggressive buying
              absorbed by heavier supply, distribution into the crowd</span>. 4h (into snapshot):
              price <span className="dn-tag">0.00%</span>, OI{' '}
              <span className="dn-tag bear">−530.6 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +685.3</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −84.4</span>, big-print{' '}
              <span className="dn-tag bull">+54.7 BTC / 119 prints</span>, taker-net{' '}
              <span className="dn-tag bear">−84.4</span> — flat price, OI contracting, spot bid but
              futures offered: a stall at the lows. 1h: price{' '}
              <span className="dn-tag bear">−0.05%</span>, OI{' '}
              <span className="dn-tag bear">−144.8 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −255.5</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −273.6</span>, big-print{' '}
              <span className="dn-tag bear">−127.1 BTC / 31 prints</span>, taker-net{' '}
              <span className="dn-tag bear">−273.6</span> —{' '}
              <em>every read offered into the snap, OI still contracting — the knife-catch bid is
              tiring at the lows</em>.{' '}
              <span className="dn-em">
                Baseline convention: the 24h block uses the same-clock prior-day row (07-31 08:08 BJ,
                1,441 rows back); the 4h and 1h sub-window blocks use prior-row inclusive baselines
                (08-01 04:08 / 07:08 BJ through the 08:09 pin). The series is contiguous across these
                windows this run, so those reproduce the same-clock endpoints — no baseline
                discrepancy, and NO CVD reset occurred in the 24h window (cb_cvd and fut_cvd both
                monotone-contiguous), so the CVD deltas are raw endpoint differences.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF collapsed to 1 long / 9 short / 0 neutral (was 4/4/2) as the fast frames rolled back over · regime FLIPPED BACK to 6/9 cycle-reversal (JT&lt;0) mean-reversion (&ldquo;sell the bounce&rdquo;) from 07-31&rsquo;s 5/9 trend-continuation · fresh 4h &amp; 8h water-down death crosses · every frame below cloud bar 12h/1d (in cloud) and 1M (above) · bull counterweight at the lows — HTF bottom-div (8h/1w), ⚡TD9 BUY 30m/1d/1M, 1w water-down golden cross 1b</span>
            </h2>

            <p>
              <span className="dn-signal">
                The frame count collapsed and the regime flipped back to mean-reversion — the panel
                that read &ldquo;the near-term trend is up&rdquo; yesterday reads &ldquo;sell the
                bounce&rdquo; today, but with a stack of oversold-reversal tells at the lows
              </span>. The 00:01Z scan reads{' '}
              <span className="dn-tag bear">1 long / 9 short / 0 neutral</span> across 10 TFs (only
              1M long; 15m / 30m / 1h / 4h / 8h / 12h / 1d / 3d / 1w all short), a sharp reversal
              from 07-31&rsquo;s 4 long / 4 short / 2 neutral as the fast frames rolled back over. The
              regime tag flipped from{' '}
              <span className="dn-tag">5/9 cycle-momentum (JT≥0) trend-continuation</span> on 07-31 to{' '}
              <span className="dn-tag bear">6/9 cycle-reversal (JT&lt;0) — mean-reversion / bounce-favoring,
              be cautious of trend-following</span> today. Fast frames printed fresh bearish crosses:
              4h a <span className="dn-tag bear">water-down death cross 3b</span> and 8h a{' '}
              <span className="dn-tag bear">water-down death cross 2b</span> (both were golden crosses
              on 07-31), with 15m/30m/1h/4h/8h all below cloud and RSI washed to the low-to-mid 30s
              (1h RSI <span className="dn-tag bear">32.5</span>, 4h 36.3, 30m 37.7, 15m 39.2, 8h 38.5).
              Only 12h and 1d hold their clouds (12h in-cloud 61.7k–63.7k, 1d in-cloud 61.9k–68.5k —
              spot inside both) and 1M stays above cloud (↓47.4k).{' '}
              <span className="dn-em">
                But the bull counterweight at the lows is real and stacked: the HTF bottom-div cluster
                (8h/1w), THREE fresh ⚡TD9 BUYs (30m / 1d / 1M oversold-reversal hints), a 1w
                water-down golden cross 1 bar ago (RSI 40.1-region below cloud) and a 3d water-down
                golden cross 7b that persist. So this is a deeply oversold, bearish-count structure
                with bottoming tells firing — the &ldquo;sell the bounce&rdquo; regime pinned against
                an oversold-reversal cluster, exactly the ambiguous read a knife-catch produces.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">62,864</td><td className="num">39.2</td><td className="bull">golden (water-dn) 30b</td><td className="bear">below ↑63.0k 2b</td><td>Buy 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">62,864</td><td className="num">37.7</td><td className="bull">golden (water-dn) 13b</td><td className="bear">below ↑64.2k 34b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">62,864</td><td className="num bear">32.5</td><td className="neut">death (water-up) 25b</td><td className="bear">below ↑64.2k 11b</td><td>Buy 4</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">62,864</td><td className="num">36.3</td><td className="bear">death (water-dn) 3b</td><td className="bear">below ↑64.9k 6b</td><td>Buy 7</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">62,864</td><td className="num">38.5</td><td className="bear">death (water-dn) 2b</td><td className="bear">below ↑64.1k 3b</td><td>Buy 4</td><td>BULL reg</td></tr>
                <tr><td>12h</td><td className="num">62,864</td><td className="num">40.0</td><td className="neut">death (water-up) 16b</td><td className="neut">in cloud 61.7k–63.7k 1b</td><td>Buy 3</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">62,864</td><td className="num">44.2</td><td className="neut">death (water-up) 5b</td><td className="neut">in cloud 61.9k–68.5k 12b</td><td>⚡ TD9 BUY</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">62,864</td><td className="num">42.6</td><td className="bull">golden (water-dn) 7b</td><td className="bear">below ↑75.6k 20b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">62,864</td><td className="num">38.2</td><td className="bull">golden (water-dn) 1b</td><td className="bear">below ↑93.8k 26b</td><td>Buy 1</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">62,864</td><td className="num">43.2</td><td className="neut">—</td><td className="bull">above ↓47.4k 30b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 08:01 BJ scan (00:01Z; rolling latest file, archived
                    verbatim at /opt/desk-note/snapshots/2026-08-01-0008/). Header alerts:{' '}
                    <em>⚡ TD9 BUY 30m/1d/1M (oversold reversal hints)</em>,{' '}
                    <em>top-div 4: 30m/1h/4h/1d · bottom-div 5: 15m/30m/4h/8h/1w</em>,{' '}
                    <em>HTF bottom-div cluster 8h/1w</em>,{' '}
                    <em>regime 6/9 cycle-reversal (JT&lt;0) — mean-reversion (flipped back from
                    07-31&rsquo;s 5/9 cycle-momentum)</em>, near-term direction{' '}
                    <em>15m–4h short, 8h–1d short, 3d–1M short (1M lean long)</em>,{' '}
                    <em>8h water-down death cross 2b · 1w water-down golden cross 1b</em>. Scan spot
                    $62,864, 24h −2.99%, 24h H/L $65,391 / $62,410, qVol $11.12B (the live-tape anchor
                    at 00:09Z reads spot $62,960.96 — the ~$97 gap is the 8-minute source lag plus the
                    spot-vs-OHLCV/perp basis). Closes are in-progress bars; treat every value as
                    provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is the cleanest bearish read of the recovery: spot below the entire
              ladder. Spot $62,961 sits below all ten daily offsets and all weekly offsets — the near
              lines are the broken-support cluster now turned overhead resistance:{' '}
              <span className="dn-tag bear">settled 200W floor $63,311 (−0.55%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $63,398 (−0.69%)</span>, and the in-progress-week
              W-SMA200 $63,530 (−0.90%), with the 0-γ flip $63,127 threaded through them — a tight
              $63.1k–$63.5k band that now caps every bounce. Above that:{' '}
              <span className="dn-tag bear">D-EMA20 $64,049 (−1.70%)</span>,{' '}
              <span className="dn-tag bear">D-SMA20 $64,405 (−2.24%)</span>,{' '}
              <span className="dn-tag bear">D-EMA50 cap $64,757 (−2.77%)</span> (ticked down $153 from
              07-31&rsquo;s $64,911 as the down-close pulled the EMA lower),{' '}
              <span className="dn-tag bear">D-EMA100 $67,317 (−6.47%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $68,916 (−8.64%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,345 (−9.21%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $69,358 (−9.22%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,608 (−9.55%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $70,150 (−10.25%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $71,300 (−11.70%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $72,934 (−13.67%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,094 (−15.03%; seed)</span>. Far above and
              disused: W-SMA150 $76,620 (−17.83%), W-EMA50 $78,319 (−19.61%), W-EMA100 $79,045
              (−20.35%), W-SMA50 $84,317 (−25.33%), W-SMA100 $88,555 (−28.90%); W-EMA200 $68,606
              (−8.23%; seed) prints above spot too. Below spot there is no reclaimed support left —
              the next structural level down is the negative-gamma shelf ($62k dealer wall, then
              $60k).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-08-01 00:05Z (in-progress close $62,916.70);
                offsets recomputed against live spot $62,960.96. Displayed MA levels are $-rounded;
                offsets computed from exact series values. The full-glob recompute (361 weekly bars)
                makes W-SMA200 computable at $63,530.36 (in-progress week) / $63,311.02 (last
                completed week — the settled floor); W-EMA150 $74,094 and W-EMA200 $68,606 seed from
                available history and print above spot (resistance). Daily closes: 07-25 $64,338.10,
                07-26 $65,375.10, 07-27 $63,720.80, 07-28 $63,903.60, 07-29 $63,958.90, 07-30
                $64,750.00, 07-31 $62,859.90 (a −$1,890.10 down-close below the floor), 08-01
                (in-progress) $62,916.70 — the first daily close below the $63,311 settled floor of
                the recovery, and a second in-progress close still $394 under it.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DE-GAMMAED HARD to −5.8M headline / +10.25M rollup (was +143.4M / +151.05M on 07-31) — roughly FLAT, the positive dampener GONE · flip $63,127 (spot −0.26% BELOW, index +0.18% ABOVE — the two references straddle it) · a negative-gamma shelf right below spot ($62k −10.76M, $60k −24.43M) · the 0DTE front flipped back NEGATIVE (1AUG −5.20M, was +67.37M) · $70k +13.27M the heaviest positive wall, overhead</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book de-gammaed from strongly positive to roughly flat, the near-dated
                negative re-appeared, and spot sits at the flip with a negative-gamma trapdoor right
                below — the chase-short&rsquo;s gamma fuel is back
              </span>. Headline Total GEX / 1% move is{' '}
              <span className="dn-tag bear">−5.8M</span> (was +143.4M on 07-31), with the by-expiry
              rollup at <span className="dn-tag bull">+10.25M</span> (= gex_summary.json net_gex
              $10,250,368.85, was +151.05M on 07-31) — a ~16M non-reconciling headline-vs-rollup gap,
              disclosed per DN-003 lineage, with the rollup again ABOVE the headline (same
              relationship as 07-31 / 07-30). The two panels straddle zero this snap: the headline is
              slightly net-short-gamma, the rollup slightly net-long-gamma —{' '}
              <span className="dn-em">either way the book has de-gammaed to near-flat from a +151M
              dampener, so dealers no longer damp a move here</span>. The 0-γ flip moved{' '}
              <span className="dn-tag">$63,057 → $63,127 (+$70)</span>, and spot $62,961 sits{' '}
              <span className="dn-tag bear">−0.26% BELOW flip</span> on spot-denominated math
              (62,960.96 / 63,126.74 − 1 = −0.263%); the GEX file&rsquo;s own &ldquo;dist to
              flip&rdquo; reads{' '}
              <span className="dn-tag bull">+0.18% off its Deribit-index $63,243</span> (63,243 /
              63,126.74 − 1 = +0.184%, the file prints +0.2%) — the two references STRADDLE the flip
              (live spot just below, the file&rsquo;s index just above), so spot is effectively AT
              the flip. The wall map has a negative-gamma shelf right below spot and the positive
              walls overhead:{' '}
              <span className="dn-tag bear">$60k −24.43M</span> (the heaviest wall, the crash-put),{' '}
              <span className="dn-tag bull">$70k +13.27M</span> (the heaviest positive, overhead),{' '}
              <span className="dn-tag bear">$62k −10.76M</span> (right below spot),{' '}
              <span className="dn-tag bull">$72k +9.45M</span>,{' '}
              <span className="dn-tag bull">$67k +8.44M</span>,{' '}
              <span className="dn-tag bear">$58k −7.87M</span>,{' '}
              <span className="dn-tag bull">$68k +7.77M</span>,{' '}
              <span className="dn-tag bull">$80k +7.37M</span>,{' '}
              <span className="dn-tag bull">$66k +7.34M</span>,{' '}
              <span className="dn-tag bear">$55k −6.14M</span>.{' '}
              <span className="dn-em">
                The negative cluster BELOW spot sums to roughly −49.2M ($62k −10.76M + $60k −24.43M +
                $58k −7.87M + $55k −6.14M) — a genuine amplifying shelf: spot is at the flip, and a
                break of the $62k wall accelerates into the $60k −24.43M crash-put where dealer
                hedging sells into the fall. Above spot the positive walls ($66k–$72k, $80k) cap a
                bounce. So the structure is spot pinned under the $63.1k–$63.5k resistance/flip band
                with a negative-gamma trapdoor below — the amplifier the chase-short wants, present
                for the first time since the recovery.
              </span>{' '}
              By expiry the near-dated negative RE-APPEARED:{' '}
              <span className="dn-tag bear">1AUG26 0.3DTE −5.20M</span> (the 0DTE front flipped
              negative, where 07-31 carried +67.37M), 2AUG 1.3 −3.40M, 3AUG 2.3 +0.71M, 4AUG 3.3
              −1.45M, <span className="dn-tag bull">7AUG 6.3 +5.96M</span>, 14AUG 13.3 −3.15M, 21AUG
              20.3 +2.21M, <span className="dn-tag bull">28AUG 27.3 +11.83M</span> (the heaviest
              positive chunk), 25SEP 55.3 −0.06M, 30OCT 90.3 +0.06M, 25DEC 146.3 +1.52M, 26MAR27
              237.3 +0.63M, 25JUN27 328.3 +0.60M — the strip sums to{' '}
              <span className="dn-tag bull">+10.26M</span> (net_gex $10,250,368.85 rounds to +10.25M;
              the +$0.01M is per-expiry $-rounding). The negative rows in the 0.3–3.3DTE front
              cluster (1AUG −5.20M + 2AUG −3.40M + 4AUG −1.45M, excluding the lone positive 3AUG
              2.3DTE +0.71M) sum to −10.05M, while the all-front 0.3–3.3DTE net (including 3AUG)
              is −9.34M — either way the amplifying negative-gamma front the chase-short needs,
              present again.
            </p>

            <p>
              IV median across the option chain is{' '}
              <span className="dn-tag">40.5%</span> (was 41.5% on 07-31) against 30D close-to-close RV
              of <span className="dn-tag">29.67%</span> — chain-level richness{' '}
              <span className="dn-tag">~+10.8pt</span>. A chain-median across N instruments (870
              today, down from 936 — the 31JUL 0DTE chunk settled and rolled off),{' '}
              <span className="dn-em">not</span> a tradable spread; expiry-/strike-level vega, skew and
              term structure remain not loaded; the vol read stays framework-only. RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log returns (= 31
              consecutive daily closes) anchored to parquet last bar 2026-08-01 00:05Z; the 29-return
              alt reads 29.64%.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Friday FRED re-print — 10Y +1bp to 4.68% (reclaim-long rates filter still FALSE, now 13bp away and moving the wrong way a sixth session), HY OAS −3bp to 2.84% (tightened back), TIPS/5Y5Y flat · MOVE fetch-failed this render · the Tier-2 FX / liquidity rows carried UNCHANGED from 07-31 (no fresh Saturday print) · rates the load-bearing tightening, FX/credit/liquidity loose-to-neutral</span>
            </h2>

            <p>
              <span className="dn-signal">
                Friday&rsquo;s FRED re-print kept the 10Y creeping up (+1bp to 4.68%) with the
                reclaim-long rates filter FALSE and moving away a sixth session, while credit
                tightened back and the FX / liquidity panel carried unchanged
              </span>. Dashboard render is 2026-07-31 22:15Z, ~1.9h before the snapshot, with the
              Friday FRED daily series re-printed. US 10Y nominal{' '}
              <span className="dn-tag bear">4.68% (+1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.34</span>, episodic z{' '}
              <span className="dn-tag">+1.40</span> — EXTREME RISK-OFF, a sixth session at/above the
              4.55% reclaim gate. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.41% (0.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.65</span> — EXTREME RISK-OFF, flat. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.30% (0.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag">2.28% (+1.0bp)</span> — flat-to-firmer. HY OAS{' '}
              <span className="dn-tag bull">2.84% (−3.0bp)</span>, regime z{' '}
              <span className="dn-tag">−0.25</span> — neutral, tightened back. MOVE bond vol{' '}
              <span className="dn-tag">unavailable (fetch failed this render)</span>. The Tier-2 FX /
              liquidity rows carried unchanged from 07-31 (no fresh Saturday print): DXY{' '}
              <span className="dn-tag">99.97 (−0.83, stale)</span>, regime z +0.91; USD/JPY{' '}
              <span className="dn-tag">159.65 (−3.65, stale)</span>; Fed net liquidity{' '}
              <span className="dn-tag bear">$5.825T (−0.092T, stale)</span>, episodic z −2.47. US-JP
              10Y spread <span className="dn-tag">2.01% (+1.0bp)</span>. NFCI{' '}
              <span className="dn-tag bull">−0.554</span>, RISK-ON (weekly). USD/CNY{' '}
              <span className="dn-tag bull">6.7438 (−0.02)</span>.{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) stays FALSE at 4.68% and moved the
                wrong way again (+1bp, 13bp from firing) — but it is MOOT this note: the recovery read
                the filter fed is dead, the scout stopped out on the floor close, so the rates leg is
                not carrying anything today. Credit tightened back (HY OAS −3bp), inflation
                compensation is flat, the FX / liquidity panel is stale-carried, and MOVE is
                unavailable. Nothing in the macro tape drives BTC&rsquo;s floor break — that is a
                BTC-internal distribution / knife-catch, not a macro-risk-off event; the correlation
                read (below) confirms BTC is not leading the macro complex either way.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>Macro indicator</th>
                  <th>level</th>
                  <th>Δ (last FRED move)</th>
                  <th>regime z</th>
                  <th>episodic z</th>
                  <th>read</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.68%</td><td className="num bear">+1.0bp</td><td className="num bear">+2.34</td><td className="num">+1.40</td><td className="bear">EXTREME RISK-OFF · crept up</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.41%</td><td className="num">0.0bp</td><td className="num bear">+2.65</td><td className="num">+1.24</td><td className="bear">EXTREME RISK-OFF · flat</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.30%</td><td className="num">0.0bp</td><td className="num">+1.13</td><td className="num">+2.18</td><td className="neut">episodic · flat</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.28%</td><td className="num bear">+1.0bp</td><td className="num">−0.64</td><td className="num">+1.63</td><td className="neut">no tag · firmer</td></tr>
                <tr><td>HY OAS</td><td className="num">2.84%</td><td className="num bull">−3.0bp</td><td className="num">−0.25</td><td className="num">+1.72</td><td className="neut">neutral · tightened back</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.554</td><td className="num">−0.01</td><td className="num bull">−1.56</td><td className="num bull">−1.53</td><td className="bull">RISK-ON · weekly</td></tr>
                <tr><td>MOVE bond vol</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">unavailable · fetch failed</td></tr>
                <tr><td>DXY</td><td className="num">99.97</td><td className="num">−0.83 (stale)</td><td className="num bear">+0.91</td><td className="num bull">−2.78</td><td className="stale">carried from 07-31 · no fresh print</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.825T</td><td className="num bear">−0.092T (stale)</td><td className="num">−1.09</td><td className="num bull">−2.47</td><td className="stale">carried from 07-31 · no fresh print</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.65</td><td className="num">−3.65 (stale)</td><td className="num">+0.80</td><td className="num bull">−3.00</td><td className="stale">carried from 07-31 · no fresh print</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.01%</td><td className="num bear">+1.0bp</td><td className="num">−0.32</td><td className="num">+1.40</td><td className="neut">neutral</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7438</td><td className="num bull">−0.02</td><td className="num bull">−1.49</td><td className="num bull">−2.69</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num stale">+2.42</td><td className="num stale">+1.09</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.317</span> — NORMAL band, loosened slightly from
              07-31&rsquo;s 0.343 but still moving together. BTC&rsquo;s top tie is{' '}
              <span className="dn-tag">NQ +0.563</span>, then SP500{' '}
              <span className="dn-tag">+0.550</span>, SILVER{' '}
              <span className="dn-tag">+0.479</span>, JP225{' '}
              <span className="dn-tag">+0.465</span>, TSLA{' '}
              <span className="dn-tag">+0.451</span>, PALL{' '}
              <span className="dn-tag">+0.436</span>, GOLD{' '}
              <span className="dn-tag">+0.432</span>, URNM{' '}
              <span className="dn-tag">+0.404</span>, PLAT{' '}
              <span className="dn-tag">+0.396</span>, COPPER{' '}
              <span className="dn-tag">+0.395</span>, NVDA{' '}
              <span className="dn-tag">+0.386</span>. 7d performance keeps BTC mid-pack in a split
              tape: <span className="dn-tag bear">BTC −1.85%</span> sits roughly tied with JP225{' '}
              <span className="dn-tag bear">−1.82%</span>, behind the index (NQ{' '}
              <span className="dn-tag bull">+0.02%</span>, SP500{' '}
              <span className="dn-tag bull">+0.68%</span>) and far behind the green software megacaps
              (MSFT <span className="dn-tag bull">+21.18%</span>, AMZN{' '}
              <span className="dn-tag bull">+16.79%</span>, GOOGL{' '}
              <span className="dn-tag bull">+11.19%</span>), but ahead of the red AI-megacap sleeve
              (NVDA <span className="dn-tag bear">−3.67%</span>, META{' '}
              <span className="dn-tag bear">−6.78%</span>, AAPL{' '}
              <span className="dn-tag bear">−7.50%</span>) and energy (CL{' '}
              <span className="dn-tag bear">−3.04%</span>, BRENT{' '}
              <span className="dn-tag bear">−1.66%</span>, NGAS{' '}
              <span className="dn-tag bear">−4.30%</span>). Metals mixed: GOLD{' '}
              <span className="dn-tag bear">−0.19%</span>, SILVER{' '}
              <span className="dn-tag bear">−0.96%</span>, PLAT{' '}
              <span className="dn-tag bull">+3.34%</span>, PALL{' '}
              <span className="dn-tag bull">+2.99%</span>, COPPER{' '}
              <span className="dn-tag bull">+2.61%</span>; URNM{' '}
              <span className="dn-tag bear">−2.11%</span>; TSLA −0.47%; EUR +1.28%, JPY (yen) firmer.{' '}
              <span className="dn-em">
                The correlation regime is NORMAL (0.317) and BTC is moving WITH a two-tone risk tape
                — mildly negative over the 7d, roughly tied with JP225, behind the index and the green
                software leaders, ahead of the red AI-megacap / energy sleeve. So BTC is neither the
                RS leader nor the worst — it is mid-pack in a split complex, and the floor break is a
                BTC-internal event, not a macro-driven risk-off. Per the DN-001 lineage this is a
                NORMAL, mixed cross-asset read — no rotation call.
              </span>{' '}
              JGB monthly 2.67% carries a monthly tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · cover-bounce scout STOPPED — the recovery read is invalidated (cap rejected on the print, 07-31 closed $62,859.90 below the $63,311 floor stop, a second in-progress close under it) · chase-short PRIMED but STOOD DOWN — gamma + floor-break legs now MET (near-dated negative back, book de-gammaed to −5.8M/+10.25M with a negative shelf below spot, daily floor broke) but the SM-positioning leg INVERTED (SM knife-caught net long +8,299) and the WEEKLY break is unconfirmed · book FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 07-31 fork resolved on the bear side and ran past it — the cap rejected on the
                print and price closed through the floor — but smart money caught the knife, so the
                clean chase-short is blocked by the buyer of record standing under the break
              </span>. The 07-31 note leaned mildly bull on a cap reclaim and named the bear path
              exactly: the razor-thin rejection holds, another lower high, a fresh SM roll-off
              re-opens the floor. The tape did the bear path — and then closed below the floor, which
              the mild-bull tilt did not price. Say it plainly: the bull tilt was wrong; the bear path
              the note named as the alternative is what printed, and it went further. So the trade book
              today is no scout (its recovery read is dead), no chase-short entry (the buyer of record
              is long under the break and the weekly break is unconfirmed), no fresh hedge — the book
              stays FLAT while two setups that point opposite ways both wait for confirmation.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STOPPED / INVALIDATED · the recovery read is over — cap rejected on the print, 07-31 closed below the $63,311 floor stop</span>
              <div className="dn-trade-name">
                Cover-bounce scout — STOPPED: the D-EMA50 cap it was deferred against rejected on the print (07-31 spiked to $65,364 intraday, closed $62,859.90), and the 07-31 close below the $63,311 settled floor is the scout&rsquo;s own stop condition — the recovery read is invalidated, the scout never armed and now stands down
              </div>
              <div className="dn-thesis">
                The scout was deferred eight sessions waiting on a single event: a D-EMA50 daily close
                above $64,911 with the SM re-cross and demand-led OI in hand. It never came. On 07-31
                price spiked to $65,364 intraday (above the cap on the tape, never on a close), then
                fully reversed to close $62,859.90 — a −$1,890.10 down-close that erased the
                three-session up-run and closed BELOW the $63,311 settled 200W floor. That is the
                scout&rsquo;s explicit stop (daily close &lt; $63,311, a close below ends the recovery
                read). It fired. The scout never entered a position, so there is nothing to stop out —
                but the read it was built on (digestion above the floor, waiting on a cap reclaim) is
                invalidated. It does not re-arm on the same terms: a re-arm now requires price to
                first reclaim the $63.1k–$63.5k flip/floor band AND then close above the D-EMA50 cap
                on demand-led flow — a full recovery from below the floor, not a continuation of the
                old deferral.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">what fired</span><span className="dn-lvl-v bear">the cap rejected on the print (07-31 intraday $65,364 above the cap, close $62,859.90 far below) AND the stop fired (07-31 close $62,859.90 &lt; $63,311 settled floor; 08-01 in-progress $62,916.70 a second close below)</span></div>
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">STOPPED / invalidated · never armed, never entered · the recovery read is over</span></div>
                <div><span className="dn-lvl-k">re-arm (new terms)</span><span className="dn-lvl-v bull">price reclaims the $63,127–$63,530 flip/floor band on a daily close AND then closes above the D-EMA50 cap $64,757 on demand-led flow with SM holding net long — a full recovery from below the floor, not the old deferral</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no scout long here — do not buy a knife-catch below a broken floor just because SM did; the desk waits for a reclaim, not a falling-knife bid</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> the scout&rsquo;s edge was a confirmed reclaim, not a prediction of
                one. It waited eight sessions for a cap close and got a cap rejection and a floor break
                instead — the correct outcome of &ldquo;wait for the close, do not buy the cap the
                price has not closed above.&rdquo; The lineage does not now flip to buying the break
                because SM caught the knife; a knife-catch by the buyer of record is a data point, not
                an entry. The scout re-arms only on a full reclaim of the floor and the cap, on
                demand-led flow.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · chase · PRIMED but STOOD DOWN · gamma + floor-break legs now MET, but SM-positioning leg INVERTED (SM knife-caught net long) and the WEEKLY break is unconfirmed</span>
              <div className="dn-trade-name">
                Chase-short — the closest to armed of the recovery on gamma and the floor break (near-dated negative back, book de-gammaed to net-flat with a negative shelf below spot, 07-31 closed below the floor), but the buyer of record caught the knife instead of rolling off, so the positioning tell is inverted and the short stands down
              </div>
              <div className="dn-thesis">
                The chase-short&rsquo;s edge is a floor break with amplifying negative gamma below AND
                smart money already positioned for it. Two of those three are now present for the first
                time in the recovery: the DAILY floor broke (07-31 close $62,859.90 &lt; $63,311), and
                the gamma amplifier is back — the book de-gammaed from +151.05M to −5.8M headline /
                +10.25M rollup (roughly flat, the dampener gone), the 0DTE front flipped negative
                (1AUG −5.20M, was +67.37M), and a negative-gamma shelf sits right below spot ($62k
                −10.76M into $60k −24.43M, −49.2M of negative walls below). But the third leg INVERTED:
                smart money did not roll off to short — it CAUGHT THE KNIFE, building net long +8,299
                into the drop (from +503, covering shorts −4,702 and re-adding longs +3,094). So the
                short has no positioning tell to lean on — the buyer of record is standing under the
                break, a bid that can squeeze a chase-short violently if it marks a bear-trap low. And
                the WEEKLY floor break is unconfirmed: the in-progress week (ending 08-02) sits below
                the W-SMA200 but does not close until Sunday. Shorting here is shorting a confirmed
                daily break into a heavy SM long bid with the weekly break not yet sealed — the desk
                stands it down and waits for confirmation.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm legs (2 of 3 met, 1 inverted)</span><span className="dn-lvl-v bear">floor close-break (MET — 07-31 close $62,859.90 &lt; $63,311, daily) · amplifying negative gamma (MET — book −5.8M headline, 0DTE front −5.20M, negative shelf $62k/$60k below spot) · SM positioned short (INVERTED — SM knife-caught net long +8,299, standing UNDER the break)</span></div>
                <div><span className="dn-lvl-k">what would arm the short</span><span className="dn-lvl-v bear">a fresh SM roll-off from the knife-catch back toward net short AND a confirmed hold below the floor (a Sunday 08-02 weekly close below $63,311 and/or a second-third daily close), with the negative-gamma shelf still below — SM capitulating on the long is the missing tell</span></div>
                <div><span className="dn-lvl-k">structural map if it arms</span><span className="dn-lvl-v bear">spot at the flip $63,127 → break the $62k −10.76M wall → accelerate into the $60k −24.43M crash-put; the unflushed long carry (funding still +7.77% mean, 0 negatives, retail 68.76) is the cascade fuel</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no chase-short into a fresh knife-catch by the buyer of record on an unconfirmed weekly break — the SM long bid is squeeze risk; wait for SM to roll off and the break to seal</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R (framework, not live):</b> a live entry on SM roll-off + a confirmed break would
                short ~$62,900 against a stop back above the flip/floor band ~$63,530 (~$630 risk)
                toward the $60k crash-put shelf (~$2,900 reward) ≈ 4.6:1 — an attractive amplifier
                setup IF the positioning tell aligns. It does not today. <b>Discipline:</b> the
                chase-short only pays when SM is short with you into the break; today SM is long against
                you, so the gamma and floor-break legs are necessary but not sufficient. Stand down and
                let the buyer of record show its hand — hold the knife (bear trap, the short never
                arms) or drop it (roll-off, the short arms into the shelf).
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · the bull fork failed — the cap rejected on the print and price closed through the floor, but smart money caught the knife: distribution into a crowded long beneath a broken floor</span>
              <div className="dn-trade-name">
                Distribution into a crowded long — the 07-31 mild-bull tilt was wrong; the bear path printed and ran through the floor, but the buyer of record and the crowd bought the break, so the resolution is a long-heavy book beneath a broken floor rather than a clean cascade
              </div>
              <div className="dn-thesis">
                Nine sessions in, the recovery read ended — the cap rejected on the print (07-31
                intraday $65,364, close $62,859.90) and price closed below the $63,311 floor, the
                bear path the 07-31 note named as the alternative to its base case. But the resolution
                is not a clean bear cascade: while price fell −2.89% and OI expanded +2,852 BTC,
                aggressive buyers bought every flow read (spot/futures/taker/big all positive), smart
                money knife-caught net long +8,299, and retail RE-crowded to 68.76 — the supply was
                distributed INTO a crowded, leveraged long that caught the knife. Funding cooled off
                the cap but never went negative (0 negatives, mean +7.77%): the long carry is
                underwater and unflushed. So the book beneath the broken floor is long-heavy and
                un-capitulated — which cuts both ways. If SM is right, the knife-catch marks a
                bear-trap low and price reclaims the $63.1k–$63.5k band (the scout re-arms on a full
                recovery). If the break holds, the unflushed longs (retail 68.76 + SM +8,299 + the
                capped-funding carry) are cascade fuel into the $62k/$60k negative-gamma shelf (the
                chase-short arms on an SM roll-off). The tie-breaker has moved DOWN from the $64,911
                cap to the $63,311 floor: the note now turns on whether the floor break holds on the
                weekly close and whether SM holds or drops the knife.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">bear resolution (break holds)</span><span className="dn-lvl-v bear">a Sunday 08-02 weekly close below $63,311 and/or SM rolling off the knife-catch → the unflushed long carry cascades into the $62k −10.76M / $60k −24.43M negative-gamma shelf; the chase-short arms on the roll-off</span></div>
                <div><span className="dn-lvl-k">bull resolution (bear trap)</span><span className="dn-lvl-v bull">SM is right, the knife-catch holds, and price reclaims the $63,127–$63,530 flip/floor band on a daily close → the scout re-arms on a full recovery back above the floor and then the cap, on demand-led flow</span></div>
                <div><span className="dn-lvl-k">deciding tells</span><span className="dn-lvl-v">the Sunday 08-02 weekly close vs $63,311, whether SM holds the +8,299 knife-catch or rolls it off, and whether the funding carry finally flushes negative (capitulation) or holds positive (unresolved) — not the intraday tick</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the edge is recognizing that the recovery read is over
                (cap rejected, floor broke on the close) without over-reading the break as a clean
                cascade — smart money and the crowd caught the knife, so the book is long-heavy and
                un-capitulated beneath the floor. The lineage does not chase-short a fresh SM long bid
                on an unconfirmed weekly break, and it does not scout-long a knife-catch below a broken
                floor. It stays flat and reads three tells: the weekly close, the SM hold-vs-roll-off,
                and the funding flush. Whichever resolves first writes the next note.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the bull fork FAILED — the D-EMA50 cap rejected on the print (07-31 intraday $65,364, close $62,859.90) and price closed below the $63,311 settled floor (scout stop FIRED, recovery read invalidated) · the chase-short&rsquo;s gamma + floor-break legs FIRED but its SM-positioning leg INVERTED (SM knife-caught net long +8,299) · the WEEKLY break is unconfirmed · book FLAT</span>
            </h2>

            <p>
              Of the 07-31 decision conditions: the{' '}
              <em>D-EMA50 cap reclaim on a close</em> DID NOT fire — the cap rejected outright (07-31
              spiked to $65,364 intraday, never closed above, then reversed to close $62,859.90); the{' '}
              <em>scout&rsquo;s settled-floor stop</em> FIRED (07-31 close $62,859.90 &lt; $63,311,
              the recovery read invalidated, a second in-progress close $62,916.70 below); the{' '}
              <em>scout flow legs</em> that were TRUE on 07-31 (SM re-cross, demand-led OI) INVERTED —
              SM built further net long into a drop that made the OI expansion distribution, not
              demand; the <em>chase-short&rsquo;s gamma and floor-break legs</em> FIRED for the first
              time in the recovery (near-dated negative back at 1AUG −5.20M, book de-gammaed to −5.8M
              headline / +10.25M rollup, negative shelf below spot, daily floor broke) but its{' '}
              <em>SM-positioning leg</em> INVERTED (SM knife-caught net long +8,299, standing under
              the break); and the <em>reclaim-long rates filter</em> stayed FALSE and moved away (10Y
              +1bp to 4.68%, now moot with the recovery read dead).{' '}
              <em>The cap rejected and price closed through the floor — the bear path the 07-31 note
              named — but smart money caught the knife instead of rolling off, so the scout is dead
              and the chase-short is primed-but-blocked.</em>{' '}
              The conditions today re-set around a broken daily floor (weekly unconfirmed), a
              knife-catching smart-money long, a re-crowded retail, a de-gammaed dealer book with a
              negative shelf below, and an unflushed long carry:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>D-EMA50 cap reclaim on a close (scout price leg)</td><td className="bear">FAILED / REJECTED — 07-31 spiked to $65,364 intraday (above the cap on the tape) but closed $62,859.90 far below; the cap ticked down to $64,757</td><td>the scout&rsquo;s trigger is dead — a cap reclaim now requires a full recovery from below the floor first</td></tr>
                <tr><td>Scout settled-floor stop</td><td className="bear">FIRED — 07-31 close $62,859.90 &lt; $63,311 settled floor; 08-01 in-progress $62,916.70 a second close below (spot −0.55%)</td><td>scout STOPPED / invalidated — the recovery read is over, book stands down long</td></tr>
                <tr><td>Chase-short floor close-break (leg)</td><td className="bear">MET (daily) — 07-31 closed $62,859.90 below $63,311; WEEKLY unconfirmed (in-progress week ending 08-02 below W-SMA200 but not yet closed)</td><td>leg met daily; the short waits on the Sunday weekly close to seal the break</td></tr>
                <tr><td>Chase-short amplifying negative gamma (leg)</td><td className="bear">MET — book de-gammaed to −5.8M headline / +10.25M rollup (net-flat), 0DTE front −5.20M, negative shelf $62k −10.76M / $60k −24.43M below spot</td><td>the gamma amplifier is back for the first time in the recovery — the fuel is present below</td></tr>
                <tr><td>Chase-short SM positioning (leg)</td><td className="bull">INVERTED — SM knife-caught net long +8,299 (from +503), standing UNDER the break rather than short with it</td><td>no chase-short: the buyer of record is a long bid / squeeze risk; the short arms only on an SM roll-off</td></tr>
                <tr><td>Cover-bounce scout re-arm (new terms)</td><td className="bull">a daily close back above the $63,127–$63,530 flip/floor band AND then above the D-EMA50 cap $64,757 on demand-led flow with SM holding long</td><td>scout re-arms only on a full recovery from below the floor — not the old deferral</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">FALSE and worse — 10Y 4.68% &gt; 4.55% (Friday +1bp, 13bp away); MOOT with the recovery read dead</td><td>standalone filter false and moved away; not carrying anything this note</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the floor break holds on the Sunday 08-02 weekly close now that smart money
                has caught the knife — a hold with an SM roll-off arms the chase-short into the
                $62k/$60k negative-gamma shelf with the unflushed long carry as fuel, while a reclaim
                of the $63,127–$63,530 flip/floor band that proves SM right re-opens the scout on a
                full recovery, and everything in between is the distribution-into-a-crowded-long the
                desk now reads
              </span>. The bull fork failed: the D-EMA50 cap rejected on the print, price closed
              through the $63,311 floor, and the scout&rsquo;s stop fired — the recovery read is over.
              But the buyer of record caught the knife (net long +8,299), retail re-crowded to 68.76,
              OI expanded into the fall, and funding cooled off the cap without flushing negative — so
              the book beneath the broken floor is long-heavy and un-capitulated, and the desk neither
              chases the short into that bid nor buys the knife. Until the weekly close seals or fails
              the break and SM holds or drops the knife, this note runs as written: the cover-bounce
              scout is STOPPED and stood down, the chase-short is the closest to armed of the recovery
              on gamma and the floor break but blocked by an inverted positioning leg, the put-spread
              is not re-grown on a rates leg that is now moot, and the book stays FLAT. The MTF count
              collapsed to 1/9 with the regime flipped back to mean-reversion but a bottoming cluster
              (HTF bottom-div, ⚡TD9 BUY 30m/1d/1M) at the lows; the dealer book de-gammaed to net-flat
              with a negative shelf below spot; and BTC stayed mid-pack in a NORMAL, split cross-asset
              tape — a BTC-internal break, not a macro event. The right read for the next 24–48h is{' '}
              <em>patient — read the Sunday weekly close, the SM hold-vs-roll-off, and the funding
              flush; do not chase the short into a fresh knife-catch, and do not buy the knife below a
              broken floor</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> v2 EN note — <b>post codex hostile audit</b>. This draft was authored in
            STAGE A directly from the atomic snapshot (2026-08-01 00:09Z, live tape t ==
            &ldquo;08-01 08:09&rdquo; BJ) and the rolling sources archived at
            /opt/desk-note/snapshots/2026-08-01-0008/, then passed the STAGE B codex hostile-but-fair
            audit (recorded in audits/2026-08-01-desk-note.md). Verdict: PASS-WITH-NOTES — 0 CRITICAL,
            0 MAJOR, 2 MINOR, 0 NIT; no gate-blocking defect. The ask-deepseek supplementary numeric
            recompute did not run this cut (curl timed out reaching the endpoint; codex remained
            primary and owns the publish gate). STAGE C applied both MINOR findings and ran the
            mandatory grep-closure loop before promoting v1 → v2. Findings:{' '}
            <b>DN-001</b> (MINOR — GEX prior-rollup date one day early: the +10.25M rollup was said to
            be &ldquo;+151.05M on 07-30&rdquo; when +151.05M was the 07-31 rollup) — patterns searched{' '}
            <em>&ldquo;151.05M on 07-30&rdquo;</em> (grep before 1, after 0) and the broader{' '}
            <em>&ldquo;151.05M&rdquo;</em> audit (4 other hits, all correctly dated 07-31 or undated —
            lines 209/247/526/778 verified, no change needed) — fixed at line 537 to &ldquo;was
            +151.05M on 07-31&rdquo; — <b>RESOLVED</b> (hits-after = 0).{' '}
            <b>DN-002</b> (MINOR — the &ldquo;0-3DTE near cluster&rdquo; label did not match the rows
            summed: −10.05M is only the listed negative rows 1AUG/2AUG/4AUG, excluding the lone
            positive 3AUG +0.71M and including 4AUG at 3.3DTE; strict 0-3DTE nets −7.89M, all-front
            0.3-3.3DTE nets −9.34M) — patterns searched <em>&ldquo;0-3DTE near cluster&rdquo;</em>
            (grep before 1, after 0) and <em>&ldquo;10.05M&rdquo;/&ldquo;0.3DTE&rdquo;</em> (single
            front reference confirmed) — relabelled to &ldquo;the negative rows in the 0.3–3.3DTE
            front cluster … excluding the lone positive 3AUG 2.3DTE +0.71M&rdquo; and the all-front
            0.3–3.3DTE net −9.34M stated with the inclusion rule at line 579 — <b>RESOLVED</b>
            (hits-after = 0). Codex-confirmed clean and unchanged: requireViewer gating (path
            /desk/2026-08-01, first statement of the default export); JSX single main/article;
            manifest-vs-body live tape (spot 62,960.96, 24h −2.89%, OI +2.85k/+2.67%, funding 4.64%,
            SM +8.30k, cb_cvd +737.1, fut_cvd +1,856, premium −56.03, skew −11.3); 24h/4h/1h window
            arithmetic; BJ/UTC extrema pairs; MA/RV matrix (30D RV 29.67%); MTF 1-long/9-short + JT
            regime; GEX core (−5.8M headline / +10.25M rollup, flip $63,127, walls, by-expiry strip);
            macro Tier-1 (10Y 4.68%, HY OAS 2.84%, MOVE fetch-failed, DXY/USD-JPY/Fed-net-liq
            stale-carried from 07-31); cross-asset (|r| 0.317, BTC −1.85% mid-pack); NTT / max-pain /
            strike-IV / BTC-NQ declared NOT LOADED and framework-only; lineage for the first daily
            close below the $63,311 settled floor. Full <em>next build</em> remains unverified on this
            host (Node 18.19.1 &lt; the Next.js 20.9.0 gate); tsc --noEmit is the STAGE C build proxy
            and passes. <b>post codex hostile audit</b> — both MINOR findings RESOLVED with grep
            hits-after = 0; ref audits/2026-08-01-desk-note.md.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among
            principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a
            single atomic snapshot (2026-08-01 00:09Z) with section-level provenance
            disclosed in the manifest band above; the macro Tier-1 panel render is
            2026-07-31 22:15Z (~1.9h before snapshot) with Friday&rsquo;s FRED daily
            re-print and the Tier-2 FX / liquidity rows carried unchanged from 07-31, and
            some inputs are explicitly stale, unavailable or pending and flagged as such.
            Levels, sizes, and conditions are illustrative of the desk&rsquo;s process, not
            standing recommendations. Past correlation, gamma, and positioning patterns do
            not bind future tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The cap rejected and price closed through the floor — the recovery read is over. But
                smart money caught the knife, net long +8,299 below a broken floor, so the desk neither
                chases the short into that bid nor buys the knife. Read the Sunday weekly close and
                whether SM holds or drops it. Patient.
              </div>
              <div className="dn-sign-name">Desk · BTC derivatives</div>
            </div>
            <div className="dn-sign-stamp" aria-hidden="true">
              <svg width="36" height="22" viewBox="0 0 100 60">
                <path
                  d="M 10 54 C 30 54, 38 53, 58 30 C 70 13, 78 7, 90 6 C 70 6, 62 7, 42 30 C 30 47, 22 53, 10 54 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

        </div>

        <footer className="dn-foot">
          <span>Hysteresis Research · 迟滞研究 · HK</span>
          <span>
            v2 · 2026-08-01 00:09Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
