import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-31 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-31',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-31' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260731() {
  await requireViewer('/desk/2026-07-31');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-31 · v2</span>
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
              <span className="dn-big">$64,854</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.27%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-31 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-31 00:07Z (snapshot pin, t == &ldquo;07-31 08:07&rdquo; BJ)</td>
                  <td className="dn-flag">
                    fresh · 1-min · anchor pinned to the file tail at 00:07Z (BJ 08:07) for
                    reproducibility · 24h-window convention: headline deltas use the same-clock
                    prior-day baseline t == &ldquo;07-30 08:07&rdquo; BJ (endpoint minus the
                    24h-ago row, exactly 1,440 rows back). The 4h / 1h flow blocks use
                    prior-row inclusive baselines (07-31 04:07 / 07:07 BJ through the 08:07
                    pin); the series is contiguous across the sub-windows this run, so those
                    reproduce the same-clock 04:07 / 07:07 endpoints — no baseline discrepancy.
                    NO CVD reset in the 24h window this run (cb_cvd 2,157.4 → 4,664.4,
                    fut_cvd −662.7 → 424.5 both monotone-contiguous), so CVD deltas are raw
                    endpoint differences — Method A not required · funding / flow row-statistics
                    span the 1,441-row window (1,440 minute intervals + the open row); premium
                    means exclude null rows
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-31 08:01 BJ scan (00:01Z)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · archived verbatim at
                    /opt/desk-note/snapshots/2026-07-31-0007/ · ~6-min stale vs snapshot anchor
                    · in-progress bars · scan spot ≈ $64,794
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-31 00:01Z snapshot</td>
                  <td className="dn-flag">
                    ~6-min stale · Deribit idx $65,185 vs live $64,854 · median IV 41.5% · 936
                    instruments · headline aggregate +143.4M vs by-expiry rollup +151.05M (=
                    gex_summary.json net_gex $151,049,301.83) — a ~+7.6M non-reconciling
                    source-panel gap disclosed per DN-003 lineage, the rollup again sitting
                    ABOVE the headline (same sign as 07-30 / 07-29), with the by-expiry strip
                    summing to +151.04M
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-31 00:01Z
                  </td>
                  <td className="dn-flag">~6-min lag · 7d 1h bars · 22 assets · 167 rows · archived</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-30 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.9h render lag · Thursday FRED daily re-print landed and REVERSED the
                    easing streak: 10Y ticked +6bp to 4.67% (4.71 → 4.69 → 4.65 → 4.61 → 4.67,
                    the first back-up in five prints), TIPS flat 2.41%, 5Y5Y +4bp to 2.28%,
                    10Y breakeven +6bp to 2.26%, HY OAS +3bp to 2.87% · MOVE 74.2 (+3.30) · DXY
                    softened −0.83 to 99.97 (broke below 100) · USD/JPY −3.65 to 159.65 (yen
                    firmed hard) · Fed net liq $5.825T (fresh weekly print, −0.092T)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-31 00:05Z (in-progress close $64,853.30)</td>
                  <td className="dn-flag">
                    ~2-min anchor lag · offsets recomputed vs live spot $64,854.01 · W-SMA200
                    non-computable from the 2023–2026 MA subset (188 weekly bars); W-SMA150 IS
                    computable at $76,633 but sits far above / disused — the 200W cycle floor
                    itself comes from the full-history glob / trap-watch state, see the row
                    below · last completed daily close 07-30 $64,750.00 (a +$791 up-close; the
                    07-31 bar is ~2 minutes old)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W support watch</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · last recompute 2026-07-27 00:11Z (NOT re-run today)</td>
                  <td className="dn-flag">
                    200W cycle floor AVAILABLE — the trap-watch state file still carries the
                    last completed week 2026-07-26 close $65,375.10, W-SMA200 $63,311.02,
                    consecutive_above 4 (streak from 2026-07-05). An independent full
                    btcusdt_1m_*.parquet glob recompute today (361 weekly bars, 2019–2026)
                    reproduces the same completed-week W-SMA200 $63,311.02 and shows the
                    in-progress week (ending 2026-08-02) W-SMA200 climbing to $63,540. Settled
                    floor $63,311 (spot +2.44% above); the floor was NOT tested today — the 24h
                    low $63,616.00 held $305 above it as price rallied away
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
              <span className="dn-v">+10.95%</span>
              <span className="dn-src">live · raw 0.01 field × 1095 (AT the +10.95% cap this snap) · 24h mean +9.16% (re-heated further from 07-30&rsquo;s +8.19%) · max +10.95% ann (cap, 529 / 1441 rows) · min +4.38% ann (0.004004 field @ 07-31 04:11 BJ / 07-30 20:11Z) · 0 / 1441 NEGATIVE rows (second straight day at zero) — the carry stays crowded long even as retail de-crowded</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">re-heated · at cap · 0 negatives</span>
              <span className="dn-src">range +4.38% / +10.95% ann · mean +8.19% → +9.16% ann · cap occupancy 529 / 1441 rows (~37%) · the crowded-long carry held through the rally — funding is the one book NOT confirming the smart-money re-cross</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">+2.16% (+2,258.4 BTC)</span>
              <span className="dn-src">live · 104,346.0 → 106,604.4 · an EXPANSION and demand-shaped this time — price +1.27% WITH OI growing and all four flow reads positive (spotCVD +2,507.0 / futCVD +1,087.2 / taker +1,087.2 / big +716.2) as smart money COVERED shorts and re-crossed net long; the demand-led expansion the scout wants, for the first time of the recovery</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v">55.72 / 44.28</span>
              <span className="dn-src">live_db `mkt_long_pct` · 24h high 61.29 (07-30 09:05 BJ / 01:05Z) low 55.40 (07-31 07:03 BJ / 07-30 23:03Z) — DE-crowded into the rally (down from 07-30&rsquo;s 60.93), retail is NOT chasing the up-move even as funding stays capped</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+503 (RE-CROSSED net LONG)</span>
              <span className="dn-src">live · long 12,246.82 − short 11,743.38 = +503.44 · the buyer of record COVERED and re-crossed net long after one day net short — flipped short→long in a single +3,976.7 BTC minute @ 07-30 14:31 BJ (06:31Z, −2,112.1 → +1,864.6), peaked +2,118 @ 07-30 19:41 BJ (11:41Z), dipped back near flat overnight, re-crossed +215.6 @ 07-31 07:51 BJ (07-30 23:51Z) and sits +503 into the snap</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 24h-ago</span>
              <span className="dn-v bull">−2,295 → +503 (+2,798, 122% swing)</span>
              <span className="dn-src">|Δnet|/prior_net = 2,797.98 / 2,294.54 = 121.9% · Δlong +939.7 (longs re-added) AND Δshort −1,858.3 (shorts covered) — a short-cover-led re-cross: two-thirds of the swing is covering, one-third fresh long, the mirror image of 07-30&rsquo;s flip-to-short</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.5% / 28.77%</span>
              <span className="dn-src">GEX median IV · chain-median across 936 instruments, not a tradable spread · 30D close-to-close RV = logret.std × √365 × 100 on 30 daily returns (parquet last bar 00:05Z) · ~+12.7pt chain richness · 29-return alt 28.06%</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+2.85% (above)</span>
              <span className="dn-src">flip $63,057 · vs live spot $64,854 (+2.85%; 64,854.01/63,057.47 − 1 = 2.849%) / GEX file Deribit idx $65,185 (+3.37%; 65,185.38/63,057.47 − 1 = 3.374%, tile prints +3.4%) — both refs positive, tile uses spot side · aggregate +143.4M headline / +151.05M rollup — RE-GAMMAED UP HARD from 07-30&rsquo;s +75.1M / +94.46M, the flip rose $56 ($63,001 → $63,057), and the near-dated negative HEALED (31JUL 0DTE now +67.37M positive)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The bull fork resolved — the buyer of record COVERED. Smart money&rsquo;s
                one-day net-short was a bear trap: it re-crossed to net long +503, and it did
                it into a demand-led OI expansion that carried spot up to test the D-EMA50 cap
                to the dollar
              </span>. The 07-30 note framed the whole thing on a two-way fork: either the
              crowd&rsquo;s bid carries price into a D-EMA50 reclaim that forces SM to cover (a
              bear trap — the scout arms as SM re-crosses long), or SM&rsquo;s fresh short
              presages a $63,311 close-break (the chase-short arms). Today the FIRST path won —
              cleanly. Smart money flipped back{' '}
              <span className="dn-tag bull">−2,295 → +503</span>, a 122% swing, and the
              decomposition is short-cover-led: <span className="dn-tag bull">Δshort −1,858</span>{' '}
              covered against <span className="dn-tag bull">Δlong +939</span> re-added, the
              mirror image of yesterday&rsquo;s flip-to-short. Price rallied{' '}
              <span className="dn-tag bull">+1.27%</span> on an OI{' '}
              <span className="dn-tag bull">expansion +2,258 BTC (+2.16%)</span> with{' '}
              <span className="dn-em">all four flow reads positive</span> (spotCVD +2,507,
              futCVD +1,087, taker +1,087, big +716) — the demand-led expansion the scout has
              waited a week for, for the first time of the recovery. And 07-30 printed a{' '}
              <span className="dn-tag bull">$64,750.00 up-close (+$791)</span>, the third
              completed consecutive up-close, dragging spot up through the D-EMA20 / D-SMA20
              pair to test the <span className="dn-tag bear">D-EMA50 $64,910.69</span> cap at{' '}
              <span className="dn-em">−0.09% — the tightest below-cap retest since the cap was
              lost on 07-24</span> (the scout was ARMED above the cap on 07-22, so this is not the
              closest of the entire recovery). So the
              scout&rsquo;s two flow legs both flipped TRUE (SM re-crossed long, OI turned
              demand-led); the single leg still unmet is the price leg itself — a D-EMA50 close
              above the cap, now a razor&rsquo;s width away. But it did not quite close above:
              the 07-31 in-progress bar prints $64,853.30, still $57 under the cap, and the
              reclaim-long rates filter went the <span className="dn-em">wrong way</span> —
              Thursday&rsquo;s 10Y ticked <span className="dn-tag bear">+6bp to 4.67%</span>,
              breaking the four-day easing streak and pushing the gate from 6bp to 12bp away.
              So the scout holds <span className="dn-em">DEFERRED an eighth day, but at its
              closest to arming since the 07-24 deferral</span> — one daily close above $64,911
              from firing live. The chase-short, meanwhile, reversed entirely: SM covered, the
              0DTE negative healed (31JUL now <span className="dn-tag bull">+67.37M</span>), the
              dealer book RE-GAMMAED to <span className="dn-tag bull">+143.4M / +151.05M</span>,
              and the floor was never even tested (24h low $63,616, $305 above $63,311) — it is
              further from armed than at any recent point and stays STOOD DOWN. The book stays
              FLAT, but the tilt turned bullish: the phase has aligned on flow, and the cap is
              the only gate left. The note turns on whether the next daily close takes the
              D-EMA50 — arming the scout live — or the razor-thin rejection at the cap resolves
              into another lower high with the crowd still over-long.
            </p>

            <p>
              BTC prints <span className="dn-tag">$64,854</span> live,{' '}
              <span className="dn-tag bull">+1.27%</span> on 24h, inside a{' '}
              <span className="dn-tag">$65,137.61 / $63,616.00</span> range (high @ 07-30 21:50
              BJ / 13:50Z, low @ 07-30 08:55 BJ / 00:55Z early in the window before the rally).{' '}
              <span className="dn-signal">The floor was never in play today — price rallied
              away from it and pressed the cap instead</span>: 07-25 $64,338.10 → 07-26
              $65,375.10 → 07-27 $63,720.80 → 07-28 $63,903.60 → 07-29 $63,958.90 →{' '}
              <span className="dn-tag bull">07-30 $64,750.00 (+$791.10)</span>, with the
              in-progress 07-31 bar (~2 minutes old) at{' '}
              <span className="dn-tag bull">$64,853.30</span>. Three completed consecutive
              up-closes (07-28, 07-29, 07-30) with the 07-31 bar in-progress above 07-30, and
              the 07-30 close is the first to clear the D-EMA20 / D-SMA20 pair. The MA matrix
              has improved materially: spot has RECLAIMED the near pair and now tests the cap —{' '}
              <span className="dn-tag bull">D-SMA50 $63,450 (+2.21%)</span>,{' '}
              <span className="dn-tag bull">D-EMA20 $64,358 (+0.77%)</span> and{' '}
              <span className="dn-tag bull">D-SMA20 $64,546 (+0.48%)</span> are now three
              positive support offsets below spot (all three were overhead resistance on
              07-30), leaving the <span className="dn-tag bear">D-EMA50 $64,910.69 (−0.09%)</span>{' '}
              as the single line still overhead, and it is a hair away.{' '}
              <span className="dn-em">
                The 200W cycle floor is available and confirmed this run: the trap-watch state
                (ma200w_trap_watch_state.json, last recomputed 2026-07-27 00:11Z — not re-run
                today) carries the last completed week 2026-07-26 at W-SMA200{' '}
                <span className="dn-tag bull">$63,311.02</span> with four consecutive weekly
                closes above it, and an independent full btcusdt_1m_*.parquet glob recompute
                today (361 weekly bars) reproduces the same $63,311.02 for the completed week
                while the in-progress week (ending 2026-08-02) climbs to{' '}
                <span className="dn-tag">$63,540</span>. So $63,311 is the settled floor (spot
                +2.44% above it now, four daily closes above it) but it sat out of play today —
                the 24h low $63,616 held $305 above it as price rallied.
              </span>{' '}
              The scout was ARMED on 07-22, moved DEFERRED on 07-24 when the D-EMA50 reclaim
              first failed, and has held deferred through 07-25 / 26 / 27 / 28 / 29 / 30 — its
              price and flow legs never once printing TRUE together. Today the flow legs printed
              TRUE (SM re-crossed long, OI demand-led) and the price leg is FALSE by $57. The
              book stays flat — but this is the closest the two have come since the 07-24 deferral
              (the scout was fully ARMED on 07-22, before the cap was lost).
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · smart money COVERED and re-crossed net LONG +503 (short→long in a single +3,976.7 BTC minute @ 07-30 14:31 BJ), covering shorts −1,858 and re-adding longs +940 · OI EXPANDED +2.16% demand-shaped with ALL flow reads positive · price +1.27% pressing the D-EMA50 cap to the dollar · funding stayed capped (+9.16% mean, 0 negatives) but retail DE-crowded to 55.72 · perp discount narrowing</span>
            </h2>

            <p>
              <span className="dn-signal">
                Smart money covered and re-crossed net long into a demand-led expansion — the
                first time in the recovery that the positioning book, the OI, and the flow all
                point the same way
              </span>. Spot is up +1.27% on the 24h with OI{' '}
              <span className="dn-tag bull">expanding +2,258.4 BTC (+2.16%)</span> —
              104,346.0 → 106,604.4. This is the demand shape, not the distribution shape of
              07-30: over the 24h the aggressor tape BOUGHT on every read — spot CVD{' '}
              <span className="dn-tag bull">+2,507.0</span>, futures CVD{' '}
              <span className="dn-tag bull">+1,087.2</span>, taker-net{' '}
              <span className="dn-tag bull">+1,087.2</span>, big-net{' '}
              <span className="dn-tag bull">+716.2 BTC (745 prints)</span> — and the positioning
              book underneath is the tell: OI grew because{' '}
              <span className="dn-em">smart money covered shorts (−1,858) and re-added longs
              (+940)</span> while the crowd&rsquo;s spot bid pushed price up. Perp still trades a{' '}
              <span className="dn-tag bear">−$27.65 discount</span> to spot at the snap, but the
              discount is narrowing (24h mean −$78.84, range −$255.74 / +$84.83, 5 isolated
              one-minute premium prints) — a spot-led market the perp is catching up to from
              behind rather than a leveraged-long chase. 1-min aggressor skew snap{' '}
              <span className="dn-tag bear">−24.7</span> (24h mean −4.61, range −37.4 / +37.4) —
              offered into the very last minute even as the 24h bought.{' '}
              <span className="dn-em">An OI expansion with SM covering-and-re-crossing-long and
              the whole flow tape bid is the demand-led expansion the scout has waited on — the
              exact alignment that was missing every prior session of the recovery.</span>
            </p>

            <p>
              Smart money is the standout — and it is the bull-side resolution the 07-30 note
              named.{' '}
              <span className="dn-signal">
                The buyer of record covered its one-day short and re-crossed to net long, and it
                did it by both covering shorts and re-adding longs
              </span>. SM net is <span className="dn-tag bull">+503</span> (long 12,246.82 −
              short 11,743.38 = +503.44) vs the 24h-ago{' '}
              <span className="dn-tag bear">−2,295</span> — a{' '}
              <span className="dn-tag bull">Δnet +2,798 (a 122% swing)</span> (|+503.44 −
              (−2,294.54)| / 2,294.54 = 121.9%). The decomposition is short-cover-led:{' '}
              <span className="dn-tag bull">Δshort −1,858.3</span> (shorts covered, two-thirds of
              the swing) AND <span className="dn-tag bull">Δlong +939.7</span> (longs re-added,
              one-third). SM crossed short→long in a single{' '}
              <span className="dn-tag bull">+3,976.7 BTC minute @ 07-30 14:31 BJ / 06:31Z</span>{' '}
              (−2,112.1 → +1,864.6, the largest single-minute Δnet of the window — a covering
              step, the exact inverse of a re-stack), peaked{' '}
              <span className="dn-tag bull">+2,118 @ 07-30 19:41 BJ / 11:41Z</span>, eased back
              toward flat overnight, re-crossed net long a final time{' '}
              <span className="dn-tag bull">+215.6 @ 07-31 07:51 BJ / 07-30 23:51Z</span> and sits
              +503 at the snap.{' '}
              <span className="dn-em">The re-arm gate&rsquo;s SM leg is now TRUE for the first
              time in the recovery: the buyer that flipped short into the 07-29 bounce covered
              that short into this one, and is now positioned WITH the up-move rather than
              against it. That is the bull-side tell the 07-30 note gated the scout on —
              present now.</span>
            </p>

            <p>
              The leverage and crowding reads are the one place the picture is NOT clean — they
              split from each other.{' '}
              <span className="dn-signal">
                Funding stayed pinned near the cap while retail de-crowded, so the carry is
                crowded long in fewer hands even as the retail account ratio fell
              </span>: live funding <span className="dn-tag bull">+10.95% ann</span> (raw 0.01
              field × 1095, AT the cap), 24h mean{' '}
              <span className="dn-tag bull">+9.16% ann</span> (a further RE-HEAT from
              07-30&rsquo;s +8.19%), max <span className="dn-tag">+10.95% ann</span> (cap, 529 /
              1441 rows ~37%), min{' '}
              <span className="dn-tag">+4.38% ann (0.004004 field @ 07-31 04:11 BJ / 07-30
              20:11Z)</span>, and{' '}
              <span className="dn-tag bull">0 / 1441 negative rows</span> — a second straight day
              at zero negatives. But retail{' '}
              <span className="dn-tag">mkt_long_pct 55.72</span> (24h high 61.29 @ 07-30 09:05 BJ
              / 01:05Z, low 55.40 @ 07-31 07:03 BJ / 07-30 23:03Z) — DE-crowded from
              07-30&rsquo;s 60.93, the retail long ratio FALLING into the rally.{' '}
              <span className="dn-em">The read: the crowded-long carry is the one book not
              confirming the smart-money re-cross — funding stays capped, which on a lower retail
              ratio means the long leverage is concentrated rather than broad. It is a mild
              caution flag on an otherwise-aligned demand tape: the rally is smart-money-led and
              retail is NOT chasing it, but the capped funding says the leverage is still there
              to unwind if the cap rejects.</span>
            </p>

            <p>
              Windowed flow is demand-led across the 24h and consolidating at the highs into the
              snap. 24h: price <span className="dn-tag bull">+1.27%</span>, OI{' '}
              <span className="dn-tag bull">+2,258.4 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +2,507.0</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +1,087.2</span>, big-print{' '}
              <span className="dn-tag bull">+716.2 BTC / 745 prints</span>, taker-net{' '}
              <span className="dn-tag bull">+1,087.2</span> —{' '}
              <span className="dn-em">every read positive, OI expanding WITH buyers and SM
              covering: demand-led, not distribution</span>. 4h (into snapshot): price{' '}
              <span className="dn-tag">−0.01%</span>, OI{' '}
              <span className="dn-tag bull">+241.8 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +438.9</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +759.3</span>, big-print{' '}
              <span className="dn-tag bull">+135.9 BTC / 103 prints</span>, taker-net{' '}
              <span className="dn-tag bull">+759.3</span> — flat price on positive flow, a
              consolidation at the cap with buyers still under it. 1h: price{' '}
              <span className="dn-tag">−0.07%</span>, OI{' '}
              <span className="dn-tag">−8.3 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +788.3</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +389.6</span>, big-print{' '}
              <span className="dn-tag bull">+141.6 BTC / 26 prints</span>, taker-net{' '}
              <span className="dn-tag bull">+389.6</span> —{' '}
              <em>spot bid hard into the snap (+788 spot CVD) on flat OI, a spot-led push into
              the cap that the perp has not yet joined</em>.{' '}
              <span className="dn-em">
                Baseline convention: the 24h block uses the same-clock prior-day row (07-30 08:07
                BJ, exactly 1,440 rows back); the 4h and 1h sub-window blocks use prior-row
                inclusive baselines (07-31 04:07 / 07:07 BJ through the 08:07 pin). The series is
                contiguous across these windows this run, so those reproduce the exact same-clock
                04:07 / 07:07 endpoints — no baseline discrepancy to disclose, and NO CVD reset
                occurred in the 24h window (cb_cvd and fut_cvd are both monotone-contiguous), so
                the CVD deltas are raw endpoint differences.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF recovered to 4 long / 4 short / 2 neutral (was 1/7/2) as the fast frames flipped long · regime FLIPPED BACK to 5/9 cycle-momentum (JT≥0) trend-continuation from 07-30&rsquo;s 6/9 cycle-reversal · fast frames reclaimed cloud (30m/1h above, 4h/8h back in-cloud) · fresh 8h & 1w water-down golden crosses 1b · bottom-div cluster 5 TFs (15m/30m/4h/8h/1w) · 1M ⚡TD9 BUY</span>
            </h2>

            <p>
              <span className="dn-signal">
                The frame count recovered hard and the regime flipped back to
                trend-continuation — the panel now reads with the up-move on the fast frames
                rather than against it
              </span>. The 00:01Z scan reads{' '}
              <span className="dn-tag">4 long / 4 short / 2 neutral</span> across 10 TFs (15m /
              30m / 1h / 1M long; 4h / 8h / 1d / 3d short; 12h / 1w neutral), a sharp recovery
              from 07-30&rsquo;s 1 long / 7 short / 2 neutral as the fast frames all flipped
              long. And the regime tag flipped back the other way — from{' '}
              <span className="dn-tag">6/9 cycle-reversal (JT&lt;0) — mean-reversion</span> on
              07-30 to{' '}
              <span className="dn-tag bull">5/9 cycle-momentum (JT≥0) — trend-continuation</span>{' '}
              today. With the fast frames now leaning long and price rising, trend-continuation
              points UP on the near frames: the panel that said &ldquo;sell the bounce&rdquo;
              yesterday reads &ldquo;the near-term trend is up&rdquo; today. The bottom-div
              cluster narrowed to <span className="dn-tag bull">5 TFs (15m/30m/4h/8h/1w)</span>{' '}
              (from 7) with top-div at 2 (15m/1d). Fast frames reclaimed structure: 30m RSI{' '}
              <span className="dn-tag bull">53.2</span> and 1h RSI{' '}
              <span className="dn-tag bull">57.4</span> are both above cloud now (30m ↓64.2k 32b,
              1h ↓64.0k 16b), 15m RSI 49.6 is back in cloud (64.5k–64.8k) — but 15m and 1h just
              printed fresh water-up death crosses 1b, the near-term pullback inside the up-move.
              Mid frames lifted into their clouds: 4h RSI{' '}
              <span className="dn-tag bull">56.1</span> (in cloud 64.7k–65.3k, water-down golden
              11b), 8h RSI <span className="dn-tag bull">53.6</span> (in cloud 64.1k–65.0k, a{' '}
              <span className="dn-tag bull">fresh water-down golden cross 1b</span>) — both were
              below cloud on 07-30. 12h RSI 52.6 is above cloud (↓63.7k 34b). Slow frames keep
              the HTF bottoming tell and freshened it: a{' '}
              <span className="dn-tag bull">1w water-down golden cross 1 bar ago</span> (RSI 40.1,
              still below cloud ↑93.8k) and a{' '}
              <span className="dn-tag bull">3d water-down golden cross 7b</span> (RSI 46.3, below
              cloud ↑75.6k), plus the top-frame oversold-reversal:{' '}
              <span className="dn-tag bull">1M ⚡ TD9 BUY at ≈$64,780</span>.{' '}
              <span className="dn-em">
                Read straight: the panel confirmed the bounce — the count recovered to even, the
                regime flipped back to trend-continuation with the fast frames long, and the
                mid frames climbed into their clouds with 8h printing a fresh golden cross. The
                slow frames (3d/1w) are still below cloud and no cap is reclaimed, so it is not
                yet a structural all-clear — but for the scout this is the first MTF read of the
                recovery that leans WITH a reclaim rather than against it.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,794</td><td className="num">49.6</td><td className="bear">death (water-up) 1b</td><td className="neut">in cloud 64.5k–64.8k 2b</td><td>Buy 4</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">64,794</td><td className="num bull">53.2</td><td className="bear">death (water-up) 17b</td><td className="bull">above ↓64.2k 32b</td><td>Buy 1</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">64,794</td><td className="num bull">57.4</td><td className="bear">death (water-up) 1b</td><td className="bull">above ↓64.0k 16b</td><td>Sell 1</td><td>BEAR hid</td></tr>
                <tr><td>4h</td><td className="num">64,794</td><td className="num bull">56.1</td><td className="bull">golden (water-dn) 11b</td><td className="neut">in cloud 64.7k–65.3k 3b</td><td>Sell 6</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">64,794</td><td className="num bull">53.6</td><td className="bull">golden (water-dn) 1b</td><td className="neut">in cloud 64.1k–65.0k 2b</td><td>Sell 7</td><td>BULL hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">64,780</td><td className="num bull">52.6</td><td className="bear">death (water-up) 14b</td><td className="bull">above ↓63.7k 34b</td><td>Sell 4</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">64,783</td><td className="num bull">52.7</td><td className="bear">death (water-up) 4b</td><td className="neut">in cloud 61.7k–69.7k 11b</td><td>Sell 1</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">64,780</td><td className="num">46.3</td><td className="bull">golden (water-dn) 7b</td><td className="bear">below ↑75.6k 20b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">64,783</td><td className="num">40.1</td><td className="bull">golden (water-dn) 1b</td><td className="bear">below ↑93.8k 26b</td><td>Sell 3</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">64,780</td><td className="num">44.2</td><td className="neut">—</td><td className="bull">above ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 08:01 BJ scan (00:01Z; rolling latest file,
                    archived verbatim at /opt/desk-note/snapshots/2026-07-31-0007/). Header
                    alerts: <em>1M ⚡ TD9 BUY at $64,780 (oversold reversal hint)</em>,{' '}
                    <em>top-div 2: 15m/1d · bottom-div 5: 15m/30m/4h/8h/1w</em>,{' '}
                    <em>regime 5/9 cycle-momentum (JT≥0) — trend-continuation (flipped back from
                    07-30&rsquo;s 6/9 cycle-reversal)</em>, near-term direction{' '}
                    <em>short 15m–4h lean long, mid 8h–1d lean short, long 3d–1M lean short</em>.
                    Scan spot ≈$64,794 (per-TF closes $64,780–$64,794; the live-tape anchor at
                    00:07Z reads spot $64,854.01 — the ~$60 gap is the 6-minute source lag plus
                    the spot-vs-OHLCV/perp basis). Closes are in-progress bars; treat every value
                    as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the reclaim of the near pair and the razor-thin test of the
              cap. Spot $64,854 now sits ABOVE three daily offsets that were all overhead on
              07-30: <span className="dn-tag bull">D-SMA50 $63,450 (+2.21%)</span>,{' '}
              <span className="dn-tag bull">D-EMA20 $64,358 (+0.77%)</span> and{' '}
              <span className="dn-tag bull">D-SMA20 $64,546 (+0.48%)</span> — three positive
              support offsets, where 07-30 had only the one (D-SMA50). The single line still
              overhead is the cap, and it is a hair away:{' '}
              <span className="dn-tag bear">D-EMA50 $64,910.69 (−0.09%)</span> — resistance a
              seventh session, but the 07-31 in-progress daily close $64,853.30 sits just $57
              beneath it, the tightest below-cap test since the cap was lost on 07-24 (the scout
              was ARMED above the cap on 07-22). Above the cap the ladder is
              unchanged and far: <span className="dn-tag bear">W-EMA200 $67,154 (−3.43%;
              seed)</span>, <span className="dn-tag bear">D-EMA100 $67,445 (−3.84%)</span> — the
              working first MA target if the reclaim comes, with the dealer $65k–$72k call-wall
              band in between —{' '}
              <span className="dn-tag bear">D-SMA100 $69,088 (−6.13%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,442 (−6.61%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $69,542 (−6.74%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,686 (−6.93%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $70,274 (−7.71%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $71,473 (−9.26%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $73,055 (−11.23%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $73,192 (−11.39%; seed)</span>. Below spot
              the support stack is the reclaimed near pair, then the{' '}
              <span className="dn-tag bull">settled 200W floor $63,311 (+2.44%)</span> with the
              D-SMA50 just above it and the in-progress week&rsquo;s W-SMA200 at $63,540. Far
              above and disused: W-SMA150 $76,633 (−15.37%), W-EMA50 $78,390 (−17.27%), W-EMA100
              $78,794 (−17.69%), W-SMA50 $84,356 (−23.12%), W-SMA100 $88,575 (−26.78%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-31 00:05Z (in-progress close
                $64,853.30); offsets recomputed against live spot $64,854.01. Displayed MA levels
                are $-rounded; offsets computed from exact series values. W-SMA200 is
                non-computable from the 2023–2026 MA subset (188 weekly bars) while W-SMA150
                $76,633 IS computable but sits far above and disused; the W-EMA150 $73,192 and
                W-EMA200 $67,154 lines seed from available history and are reported as such (both
                print above spot, so resistance here, not support); the 200W cycle floor $63,311
                comes from the full-history glob / trap-watch state (see manifest). Daily closes:
                07-24 $64,116.50, 07-25 $64,338.10, 07-26 $65,375.10, 07-27 $63,720.80, 07-28
                $63,903.60, 07-29 $63,958.90, 07-30 $64,750.00, 07-31 (in-progress, ~2 min)
                $64,853.30 — three completed consecutive up-closes (07-28, 07-29, 07-30) with
                07-31 in-progress above 07-30, the 07-30 close the first to clear the D-EMA20 /
                D-SMA20 pair, none yet closing above the D-EMA50 cap.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book RE-GAMMAED UP HARD to +143.4M headline / +151.05M rollup (was +75.1M / +94.46M on 07-30) · flip rose $63,001 → $63,057 (spot +2.85% above, cushion widened) · the near-dated negative HEALED — 31JUL 0DTE now +67.37M dominant-positive, the whole strip positive bar the far $60k −18.87M crash-put · $65k +44.16M the heaviest wall, right at spot · $64.5k +7.44M at-spot support</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book re-gammaed up hard, the flip cushion widened, and the near-dated
                negative healed entirely — the chase-short&rsquo;s gamma fuel is gone again, and
                the reclaim now runs into a heavy positive call band right at spot
              </span>. Headline aggregate GEX is{' '}
              <span className="dn-tag bull">+143.4M / 1%</span> (was +75.1M on 07-30), with the
              by-expiry rollup at{' '}
              <span className="dn-tag bull">+151.05M</span> (= gex_summary.json net_gex
              $151,049,301.83, was +94.46M on 07-30) — a ~+7.6M non-reconciling headline-vs-rollup
              gap, disclosed per DN-003 lineage, with the rollup again ABOVE the headline (same
              sign as 07-30 / 07-29). The 0-γ flip moved{' '}
              <span className="dn-tag">$63,001 → $63,057 (+$56)</span>, and spot $64,854 sits{' '}
              <span className="dn-tag bull">+2.85% above flip</span> on spot-denominated math
              (64,854.01 / 63,057.47 − 1 = +2.849%); the GEX file&rsquo;s own &ldquo;dist to
              flip&rdquo; reads{' '}
              <span className="dn-tag bull">+3.37% off its Deribit-index $65,185</span>{' '}
              (65,185.38 / 63,057.47 − 1 = +3.374%, the tile prints +3.4%) — both references
              positive, and the cushion WIDENED from 07-30&rsquo;s +1.61% as spot rose faster than
              the flip. The wall map is a heavy positive call band centred right at spot:{' '}
              <span className="dn-tag bull">$65k +44.16M</span> (the heaviest wall, at spot),{' '}
              <span className="dn-tag bull">$70k +21.57M</span>,{' '}
              <span className="dn-tag bull">$66k +18.90M</span>,{' '}
              <span className="dn-tag bear">$60k −18.87M</span> (the lone meaningful negative on
              the strike board, the far crash-put),{' '}
              <span className="dn-tag bull">$72k +15.71M</span>,{' '}
              <span className="dn-tag bull">$67k +14.30M</span>,{' '}
              <span className="dn-tag bull">$68k +13.19M</span>,{' '}
              <span className="dn-tag bull">$80k +9.36M</span>,{' '}
              <span className="dn-tag bull">$64.5k +7.44M</span> (at-spot support),{' '}
              <span className="dn-tag bull">$69k +5.70M</span>.{' '}
              <span className="dn-em">
                The $66k–$72k band sums to roughly +89M of positive-gamma call resistance ($66k
                +18.90M + $67k +14.30M + $68k +13.19M + $69k +5.70M + $70k +21.57M + $72k +15.71M
                = +89.37M), and the $65k wall right at spot is the single heaviest at +44.16M — so
                a reclaim through the cap runs straight into dealers selling gamma, a dampener on
                any squeeze. Below spot the near-spot book is positive support (the $64.5k pocket
                +7.44M) and the only negative until the far $60k (−18.87M) crash-put is gone — so
                the floor, if it were ever retested, sits under net-positive gamma that cushions
                rather than amplifies.
              </span>{' '}
              By expiry the near-dated negative HEALED completely:{' '}
              <span className="dn-tag bull">31JUL 0.3DTE +67.37M</span> (the 0DTE front, now the
              dominant chunk and POSITIVE — where 07-30 carried a 30JUL −5.60M), then 1AUG 1.3
              +2.36M, 2AUG 2.3 +1.17M, 3AUG 3.3 +2.94M,{' '}
              <span className="dn-tag bull">7AUG 7.3 +34.99M</span>, 14AUG 14.3 +4.35M, 21AUG 21.3
              +2.23M, <span className="dn-tag bull">28AUG 28.3 +24.27M</span>, 25SEP 56.3 +5.02M,
              30OCT 91.3 +0.01M, 25DEC 147.3 +4.60M, 26MAR27 238.3 +1.07M, 25JUN27 329.3 +0.66M —
              the listed strip sums to <span className="dn-tag bull">+151.04M</span> (net_gex
              $151,049,301.83 rounds to +151.05M; the −$0.01M is per-expiry $-rounding).
              So the strip is positive across every listed expiry: the amplifying negative-gamma
              cluster the chase-short needs is entirely absent — a +67.37M 0DTE front and a
              +151.05M aggregate is a strongly dampened book, the opposite of an amplifier.
            </p>

            <p>
              IV median across the option chain is{' '}
              <span className="dn-tag">41.5%</span> (was 43.3% on 07-30) against 30D
              close-to-close RV of <span className="dn-tag">28.77%</span> — chain-level richness{' '}
              <span className="dn-tag">~+12.7pt</span>. A chain-median across N instruments (936
              today), <span className="dn-em">not</span> a tradable spread; expiry-/strike-level
              vega, skew and term structure remain not loaded; the vol read stays framework-only.
              RV methodology: 30D close-to-close, logret.std × √365 × 100 on the last 30 daily log
              returns (= 31 consecutive daily closes) anchored to parquet last bar 2026-07-31
              00:05Z; the 29-return alt reads 28.06%.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Thursday FRED re-print REVERSED the easing streak — 10Y ticked +6bp to 4.67% (first back-up in five prints; reclaim-long rates filter still FALSE and now 12bp from firing, moving AWAY) · but the dollar softened materially (DXY −0.83 to 99.97, below 100) and the yen firmed hard (USD/JPY −3.65 to 159.65) · rates/dollar mixed, credit/liquidity loose</span>
            </h2>

            <p>
              <span className="dn-signal">
                Thursday&rsquo;s FRED re-print broke the four-day easing streak — the 10Y ticked
                +6bp to 4.67%, pushing the reclaim-long rates filter from 6bp to 12bp away, the
                wrong direction — even as the dollar softened below 100 and the yen firmed sharply
              </span>. Dashboard render is 2026-07-30 22:15Z, ~1.9h before the snapshot, and the
              FRED daily series re-printed for Thursday 07-30. US 10Y nominal{' '}
              <span className="dn-tag bear">4.67% (+6.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.31</span>, episodic z{' '}
              <span className="dn-tag">+1.40</span> — EXTREME RISK-OFF, and the first back-up in
              five prints (4.71 → 4.69 → 4.65 → 4.61 → 4.67). 10Y TIPS real{' '}
              <span className="dn-tag bear">2.41% (0.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.70</span> — EXTREME RISK-OFF, flat. 5Y5Y BE
              inflation <span className="dn-tag">2.28% (+4.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag">2.26% (+6.0bp)</span> — inflation compensation firmer. HY
              OAS <span className="dn-tag bull">2.87% (+3.0bp)</span>, regime z{' '}
              <span className="dn-tag">−0.06</span> — neutral, a touch wider. MOVE bond vol{' '}
              <span className="dn-tag">74.2 (+3.30)</span>, regime z +0.03 — neutral. The offsets
              softened notably: DXY{' '}
              <span className="dn-tag bull">99.97 (−0.83)</span>, regime z +0.91 — tight but broke
              below 100 (−1.42 since 07-30&rsquo;s 101.39); USD/JPY{' '}
              <span className="dn-tag bull">159.65 (−3.65)</span> — yen firmed hard (from
              163.84); Fed net liquidity{' '}
              <span className="dn-tag bear">$5.825T (−0.092T, fresh weekly print)</span>, episodic
              z −2.47 — RISK-OFF on the header tag but the level still loose in context. US-JP 10Y
              spread <span className="dn-tag">2.00% (+6.0bp)</span>. NFCI{' '}
              <span className="dn-tag bull">−0.554</span>, RISK-ON (weekly).{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) stays FALSE at 4.67% and moved
                the wrong way — a +6bp back-up broke the easing streak and pushed the gate from
                6bp to 12bp away, so the standalone rates leg is now further from firing than it
                was on 07-30. But the dollar side eased materially (DXY below 100, yen firmed),
                credit stayed loose (HY OAS neutral) and liquidity/NFCI stayed loose/RISK-ON — a
                mixed macro tape rather than a clean risk-off tightening. Nothing here flips the
                scout&rsquo;s rates gate today; the rates leg simply is not the one carrying the
                setup — the smart-money re-cross and the cap test are.
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
                <tr><td>US 10Y nominal</td><td className="num">4.67%</td><td className="num bear">+6.0bp</td><td className="num bear">+2.31</td><td className="num">+1.40</td><td className="bear">EXTREME RISK-OFF · Thursday +6bp (streak broke)</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.41%</td><td className="num">0.0bp</td><td className="num bear">+2.70</td><td className="num">+1.30</td><td className="bear">EXTREME RISK-OFF · flat</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.28%</td><td className="num bear">+4.0bp</td><td className="num">+0.81</td><td className="num">+2.20</td><td className="neut">episodic</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.26%</td><td className="num bear">+6.0bp</td><td className="num">−0.94</td><td className="num">+0.83</td><td className="neut">no tag · firmed</td></tr>
                <tr><td>HY OAS</td><td className="num">2.87%</td><td className="num bear">+3.0bp</td><td className="num">−0.06</td><td className="num">+2.39</td><td className="neut">neutral · a touch wider</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.554</td><td className="num">−0.01</td><td className="num bull">−1.56</td><td className="num bull">−1.53</td><td className="bull">RISK-ON · weekly</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">74.2</td><td className="num">+3.30</td><td className="num">+0.03</td><td className="num">+1.09</td><td className="neut">neutral</td></tr>
                <tr><td>DXY</td><td className="num">99.97</td><td className="num bull">−0.83</td><td className="num bear">+0.91</td><td className="num bull">−2.78</td><td className="bull">softened below 100</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.825T</td><td className="num bear">−0.092T</td><td className="num">−1.09</td><td className="num bull">−2.47</td><td className="bear">fresh weekly print · drew down</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.65</td><td className="num bull">−3.65</td><td className="num">+0.80</td><td className="num bull">−3.00</td><td className="bull">yen firmed hard</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.00%</td><td className="num bear">+6.0bp</td><td className="num">−0.36</td><td className="num">+1.40</td><td className="neut">neutral</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num stale">+2.42</td><td className="num stale">+1.09</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.343</span> — NORMAL band, loosened slightly from
              07-30&rsquo;s 0.363 but still moving together. BTC&rsquo;s top tie is{' '}
              <span className="dn-tag">NQ +0.558</span>, then SP500{' '}
              <span className="dn-tag">+0.548</span>, TSLA{' '}
              <span className="dn-tag">+0.534</span>, JP225{' '}
              <span className="dn-tag">+0.479</span>, SILVER{' '}
              <span className="dn-tag">+0.469</span>, PLAT{' '}
              <span className="dn-tag">+0.453</span>, COPPER{' '}
              <span className="dn-tag">+0.451</span>, PALL{' '}
              <span className="dn-tag">+0.445</span>, GOLD{' '}
              <span className="dn-tag">+0.410</span>, URNM{' '}
              <span className="dn-tag">+0.408</span>, NVDA{' '}
              <span className="dn-tag">+0.396</span>. 7d performance is the tell, and it stays the
              cross-asset bull note:{' '}
              <span className="dn-tag bear">BTC −0.25%</span> is basically flat — resilient
              versus NQ, JP225, the red AI-megacap sleeve and energy, but NOT the top risk-asset
              performer (green software and metals led): it sits AHEAD of NQ{' '}
              <span className="dn-tag bear">−0.87%</span> (BTC +0.62pt) inside a split complex —
              with the AI-megacaps deeply red: NVDA{' '}
              <span className="dn-tag bear">−5.39%</span>, META{' '}
              <span className="dn-tag bear">−10.62%</span>, TSLA{' '}
              <span className="dn-tag bear">−4.73%</span>, AAPL{' '}
              <span className="dn-tag bear">−2.46%</span>, JP225{' '}
              <span className="dn-tag bear">−0.69%</span>, against the green megacaps MSFT{' '}
              <span className="dn-tag bull">+16.93%</span>, AMZN{' '}
              <span className="dn-tag bull">+9.76%</span>, GOOGL{' '}
              <span className="dn-tag bull">+4.72%</span> and SP500{' '}
              <span className="dn-tag bull">+0.48%</span>. Metals turned GREEN across the board
              (GOLD <span className="dn-tag bull">+1.35%</span>, SILVER{' '}
              <span className="dn-tag bull">+2.05%</span>, PLAT{' '}
              <span className="dn-tag bull">+3.38%</span>, PALL{' '}
              <span className="dn-tag bull">+4.59%</span>, COPPER{' '}
              <span className="dn-tag bull">+2.84%</span>), energy stayed heavy (CL −8.49%, BRENT
              −6.98%, NGAS −5.79%), URNM −3.46%.{' '}
              <span className="dn-em">
                The correlation regime is still NORMAL (0.343) and BTC is moving WITH a
                two-tone risk tape — basically flat over the 7d, outperforming NQ and the red
                AI-megacap / energy sleeve, while green large-cap software (MSFT +16.93%, AMZN
                +9.76%, GOOGL +4.72%) and the green metals led the split tape ahead of it. So
                BTC is NOT the top risk-asset performer — it is a relative-strength survivor
                versus the red sleeve, not an RS leader. Per the DN-001 lineage this is a
                NORMAL, mixed cross-asset read — a mild bull tilt on a split tape, not a
                rotation call.
              </span>{' '}
              JGB monthly 2.67% carries a monthly tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · cover-bounce scout DEFERRED (8th day) but CLOSEST to arming since the 07-24 deferral — flow legs now TRUE (SM re-crossed net LONG +503, OI demand-led with all CVD positive), price leg FALSE by $57 (D-EMA50 cap unreclaimed), rates FALSE and moved AWAY (10Y +6bp to 4.67%) · chase-short STOOD DOWN and FURTHER from armed — SM covered, the 0DTE negative healed, book re-gammaed to +151.05M, floor untested · book FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 07-30 fork resolved on the bull side — smart money covered and re-crossed net
                long, and the flow finally aligned with the price — but the price stopped $57
                short of the cap, so the scout is primed but not yet armed
              </span>. The 07-30 note gated both trades on the same event and laid out the bull
              path explicitly: the crowd&rsquo;s bid carries price into a D-EMA50 reclaim that
              forces SM to cover, the scout arms as SM re-crosses long. Today that is exactly
              what happened on the flow side — SM covered its short and re-crossed net long +503,
              OI expanded demand-led with all four flow reads positive, and price rallied through
              the D-EMA20 / D-SMA20 pair to press the cap. The scout&rsquo;s two flow legs both
              flipped TRUE for the first time in the recovery. But the price leg — a D-EMA50 close
              above the cap — is unmet by $57 (07-31 in-progress $64,853.30 vs $64,910.69), and
              the rates filter moved the wrong way (10Y +6bp to 4.67%). So the trade book today
              is still no scout entry, no chase-short, no fresh hedge — but the disciplined read
              has shifted from &ldquo;deferred, waiting on the flow&rdquo; to &ldquo;deferred,
              waiting only on the close&rdquo;: hold the scout until the D-EMA50 reclaims on a
              daily close, which now PAIRS with an SM re-cross and a demand-led OI already in
              hand, and keep the chase-short stood down — it reversed away from armed on every
              leg today.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · DEFERRED (8th day) · flow legs now TRUE (SM re-crossed net LONG, OI demand-led), price leg FALSE by $57, rates FALSE and moved away</span>
              <div className="dn-trade-name">
                Cover-bounce scout — the flow legs finally printed TRUE (smart money covered and re-crossed net long, OI expanded demand-led with all CVD positive) and price pressed the D-EMA50 cap to the dollar, but the close stopped $57 short and rates ticked the wrong way, so it holds deferred one daily close from arming
              </div>
              <div className="dn-thesis">
                The re-arm gate is at its best reading since the 07-24 deferral: two of four legs flipped
                TRUE and the price leg is a razor&rsquo;s width from firing. The <em>SM-adding</em>
                leg is now TRUE — SM COVERED its one-day short and re-crossed to net long +503
                (Δshort −1,858 covered, Δlong +939 re-added, a 122% swing), the first net-long
                re-cross since it flipped short, positioned WITH the up-move. The <em>OI demand</em>
                leg is now TRUE — OI expanded +2.16% (+2,258 BTC) with all four flow reads positive
                (spotCVD +2,507, futCVD +1,087, taker +1,087, big +716), the demand-led expansion
                that was missing every prior session. The <em>price</em> leg (D-EMA50 reclaim on an
                up-close) is FALSE by $57 — three completed up-closes (07-28 / 29 / 30) dragged spot
                up to test the $64,910.69 cap, but the 07-31 in-progress close $64,853.30 is −0.09%
                beneath it, unreclaimed a seventh session. And the <em>rates</em> filter stays FALSE
                and moved AWAY — 10Y +6bp to 4.67%, now 12bp from the 4.55% gate. The scout&rsquo;s
                demand leg and price-reclaim leg have finally come into phase; the entry arms the
                moment a daily close clears the D-EMA50 cap with the SM re-cross and demand-led OI
                still in place.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm gate (two of four legs TRUE)</span><span className="dn-lvl-v bull">SM adding / re-crossing net long (TRUE — re-crossed +503, covered shorts, re-added longs) · OI demand-led (TRUE — +2.16% expansion with all four flow reads positive) · D-EMA50 reclaim on an up-close (FALSE by $57 — 07-31 close $64,853.30 vs $64,910.69 cap) · 10Y &lt; 4.55% (FALSE and worse — 4.67%, +6bp, 12bp away)</span></div>
                <div><span className="dn-lvl-k">the signature</span><span className="dn-lvl-v bull">SM added into the 07-27 dip (+214%), trimmed into the 07-29 bounce (−41%), flipped short into 07-30 (−2,285), and has now COVERED and re-crossed net long (+503) into the cap test — the demand leg and the price-reclaim leg have finally come into phase</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on a D-EMA50 daily close above $64,911 with the SM re-cross and demand-led OI still in place: scout long 0.2R — the flow confirmation is already in hand, only the close is pending</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">daily close &lt; $63,311 (settled 200W floor / D-SMA50 confluence — a close below ends the recovery read)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$65k–$72k call-wall band is the practical cap ($65k +44.16M right at spot); working MA target D-EMA100 $67,445, take half into the $66k / $67k walls</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R on the confirming daily close · the flow is confirming for the first time, so the entry is the price close, not a further flow wait</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> entry on the confirmed reclaim ~$64,911 (D-EMA50 daily close), stop
                $63,311 (settled floor / D-SMA50) = ~$1,600 risk; working target D-EMA100 $67,445
                = ~$2,534 reward ≈ 1.58:1 — but the $65k–$72k call-wall band caps the path (the
                $65k +44.16M wall sits right at spot), so the realistic first target is the $66k /
                $67k walls and the R/R to those is thinner. <b>Hard rule:</b> the scout arms on the
                D-EMA50 close, not on the intraday tag — the price has pressed the cap to the dollar
                twice in the recovery (07-24, today) without a close above it, so the confirming leg
                is a completed daily close over $64,911, with the SM re-cross and demand-led OI (both
                already TRUE) still holding.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · chase · STOOD DOWN · FURTHER from armed — SM covered, the 0DTE negative healed, book re-gammaed to +151.05M, floor untested</span>
              <div className="dn-trade-name">
                Chase-short — every re-arm leg reversed today: smart money covered its short, the near-dated negative healed (31JUL now +67.37M positive), the book re-gammaed to +151.05M, and the floor was never tested, so it is further from armed than at any recent point
              </div>
              <div className="dn-thesis">
                On 07-30 the chase-short was CLOSER to armed than at any point since the reset — SM
                had flipped net short and a 0DTE negative had re-appeared, needing only a $63,311
                close-break. Today every one of those legs reversed. SM COVERED and re-crossed net
                long +503, so the positioning tell the short was built on is gone. The near-dated
                negative HEALED — the 30JUL −5.60M 0DTE is off the board and the 31JUL front is now
                +67.37M, the dominant-positive chunk. The dealer book RE-GAMMAED up hard from
                +75.1M / +94.46M to +143.4M / +151.05M, with the $65k +44.16M wall now the heaviest
                and right at spot. And the floor was never in play — the 24h low $63,616 held $305
                above $63,311 as price rallied away. So the chase-short is FURTHER from armed than
                07-30 on every leg: shorting here is shorting a covered book into a heavy positive
                call band with the floor untested — the lowest-quality short the lineage stands down.
                It re-arms only on a fresh SM roll-off AND a $63,311 close-break with amplifying
                negative gamma — none of which is present.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm legs (all reversed)</span><span className="dn-lvl-v bull">SM roll-off (REVERSED — SM covered and re-crossed net long +503) · near-dated negative gamma (REVERSED — 31JUL 0DTE +67.37M positive, the 30JUL −5.60M healed) · floor close-break (UNMET — floor untested, 24h low $63,616 held $305 above) · amplifying negative gamma (REVERSED — book re-gammaed to +151.05M positive)</span></div>
                <div><span className="dn-lvl-k">why further from armed than 07-30</span><span className="dn-lvl-v bull">the buyer of record covered (the bear-side positioning tell is gone), the dealer book re-gammaed +56.6M on the rollup, the 0DTE front flipped from −5.60M to +67.37M, and price rallied away from the floor rather than pressing it</span></div>
                <div><span className="dn-lvl-k">what would arm the short</span><span className="dn-lvl-v bear">a fresh SM roll-off back to net short AND a daily close &lt; $63,311 with near-dated negative gamma re-appearing — a full reversal of today&rsquo;s tape, not a continuation of it</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no chase-short into a covered book, a healed 0DTE front, a +151.05M positive dealer strip and an untested floor; the setup ran the other way today</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> the chase-short&rsquo;s edge is a floor break with amplifying
                negative gamma below and smart money already positioned for it. On 07-30 the
                positioning leg was present and only the break was missing; today the positioning
                leg reversed (SM covered), the gamma leg reversed (book re-gammaed, 0DTE front
                healed), and the floor moved out of play. Every input that made the short
                &ldquo;closer to armed&rdquo; yesterday is gone. It stands down and waits for a
                genuine reversal — a fresh SM roll-off and a $63,311 close-break — not a
                continuation of today&rsquo;s demand tape.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · the bull fork resolved — smart money covered the short, the crowd de-crowded, and the two books re-aligned into a cap test</span>
              <div className="dn-trade-name">
                Distribution → accumulation — yesterday&rsquo;s two-book split resolved bullishly: the buyer of record covered its short into a demand-led expansion and price pressed the D-EMA50 cap; the fork is now the cap close, not the floor
              </div>
              <div className="dn-thesis">
                Eight sessions in, the 07-30 distribution-vs-defence split resolved — and it
                resolved the way the 07-30 note named as the bull path. On the 07-27 dip SM added
                +214% (demand leg TRUE, price leg FALSE); on the 07-29 bounce it trimmed −41% (both
                FALSE); on 07-30 it flipped outright short −2,285 (distribution into strength); and
                today it COVERED that short and re-crossed net long +503 into a demand-led OI
                expansion while retail de-crowded (55.72 from 60.93) — smart money buying back the
                bear-trap short as the crowd stepped aside. The floor never came into play; price
                rallied to test the cap instead. This is no longer a standoff — it is a
                short-cover reclaim into overhead resistance, and the tie-breaker has moved UP from
                the $63,311 floor to the $64,911 D-EMA50 cap. Either the next daily close clears the
                cap (the scout arms live, the reclaim runs at the $65k–$72k call band with the flow
                already confirming), or the razor-thin rejection at the cap holds and price sets
                another lower high with the crowded-long carry (funding capped, 0 negatives) still
                there to unwind. The note turns on that cap close, not the intraday tag.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">bull resolution</span><span className="dn-lvl-v bull">D-EMA50 $64,911 reclaim on a daily close with the SM re-cross (+503) and demand-led OI (all CVD positive) still in place — the phase is aligned, the scout arms live 0.2R; the trend-continuation regime flip and the recovered MTF count lean this way</span></div>
                <div><span className="dn-lvl-k">bear resolution</span><span className="dn-lvl-v bear">the razor-thin rejection at $64,911 holds and price sets another lower high, the crowded-long carry (funding +9.16% mean, 0 negatives, cap 37%) unwinds, and a fresh SM roll-off re-opens the $63,311 floor question — but that is a reversal of today&rsquo;s tape, not the base case</span></div>
                <div><span className="dn-lvl-k">deciding tells</span><span className="dn-lvl-v">the $64,911 D-EMA50 daily close, whether SM holds the re-cross or rolls back off, and whether the capped funding sustains or flushes on a rejection — not the intraday cap tag</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the edge is recognizing that the standoff resolved —
                smart money covered, the crowd de-crowded, and the tape is now a short-cover
                reclaim into the cap, not a distribution-vs-defence split. The lineage does not
                chase the intraday cap tag; it waits for the D-EMA50 daily close to confirm the
                reclaim (scout arms with the flow already TRUE) or for the rejection to hold and a
                fresh SM roll-off to re-open the floor question (chase-short re-arms). Read the cap
                close, the SM hold-vs-roll-off, and the funding carry — not the candle.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the bull fork resolved — SM COVERED and re-crossed net LONG +503 (the bull-side positioning tell FIRED), OI expanded demand-led (all CVD positive), price pressed the D-EMA50 cap to −0.09% · but the cap close DID NOT fire (07-31 in-progress $64,853.30, $57 under) and the rates filter moved AWAY (10Y +6bp to 4.67%) · scout DEFERRED but CLOSEST to arming · chase-short FURTHER from armed · book FLAT</span>
            </h2>

            <p>
              Of the 07-30 decision conditions: the{' '}
              <em>cover-bounce scout&rsquo;s flow legs</em> FIRED for the first time in the
              recovery (SM covered and re-crossed net long +503, and OI expanded demand-led with all
              four flow reads positive — the two legs that were FALSE or worse every prior session);
              the <em>D-EMA50 reclaim on an up-close</em> DID NOT fire but came to the dollar (three
              completed up-closes dragged spot to −0.09% of the $64,910.69 cap, the 07-31
              in-progress close $64,853.30 sitting $57 under — the closest test since the 07-24 deferral);
              the <em>reclaim-long rates filter</em> stayed FALSE and moved AWAY
              (Thursday&rsquo;s 10Y ticked +6bp to 4.67%, breaking the four-day easing streak and
              pushing the gate from 6bp to 12bp); the{' '}
              <em>chase-short re-arm</em> reversed on every leg (SM covered, the 0DTE negative
              healed to +67.37M, the book re-gammaed to +151.05M, the floor untested); and the{' '}
              <em>settled-floor stop</em> was never in play (24h low $63,616 held $305 above
              $63,311 as price rallied away).{' '}
              <em>Smart money covered the bear-trap short and re-crossed net long into a demand-led
              expansion — the bull-side resolution the 07-30 note named — but price stopped $57 short
              of the cap close that arms the trade, so the scout is primed and deferred rather than
              live.</em>{' '}
              The conditions today re-set around a covered smart-money book, a de-crowded retail, a
              re-gammaed positive dealer book, a rates leg that moved away, and a D-EMA50 cap tested
              to the dollar:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>SM adding / re-crossing net long (scout flow leg)</td><td className="bull">TRUE — SM COVERED and re-crossed net long +503 (Δshort −1,858 covered, Δlong +939 re-added, 122% swing), the first net-long re-cross since it flipped short</td><td>scout flow leg met: the buyer of record is positioned WITH the up-move — the entry now waits only on the price close</td></tr>
                <tr><td>Buyers behind the OI (scout flow leg)</td><td className="bull">TRUE — OI +2.16% (+2,258 BTC) demand-led, all four flow reads positive (spotCVD +2,507, futCVD +1,087, taker +1,087, big +716)</td><td>scout demand leg met: the expansion is demand-led for the first time in the recovery</td></tr>
                <tr><td>D-EMA50 reclaim on an up-close (scout price leg)</td><td className="bear">FALSE by $57 — 07-31 in-progress close $64,853.30 vs the $64,910.69 cap (−0.09%); three completed up-closes but none above the cap</td><td>no scout long yet: the price leg is a razor&rsquo;s width from firing — the scout arms on a daily close above $64,911</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">FALSE and worse — 10Y 4.67% &gt; 4.55% (Thursday +6bp, streak broke, 12bp from firing vs 6bp on 07-30)</td><td>standalone filter false and moved away; but it is not the leg carrying the setup — the SM re-cross and cap test are</td></tr>
                <tr><td>Cover-bounce scout (long)</td><td className="bull">a D-EMA50 $64,911 daily close with the SM re-cross (+503) and demand-led OI still in place</td><td>scout long 0.2R, stop $63,311, working target D-EMA100 $67,445 (capped by $65k–$72k call walls), R/R ~1.58:1</td></tr>
                <tr><td>Chase-short re-arm (further from armed)</td><td className="bull">all legs REVERSED — SM covered (+503), 0DTE negative healed (31JUL +67.37M), book re-gammaed (+151.05M), floor untested</td><td>no chase-short into a covered book / positive strip / untested floor; re-arms only on a fresh SM roll-off AND a $63,311 close-break</td></tr>
                <tr><td>Settled-floor stop / floor test</td><td className="bull">NOT in play — 24h low $63,616 held $305 above the $63,311 floor as price rallied away; spot +2.44% above</td><td>the floor sat out today; the recovery read runs on, the tie-breaker moved up to the $64,911 cap</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                the $64,911 D-EMA50 daily close now that smart money has covered and re-crossed net
                long — a close above arms the scout live with the flow confirmation already in hand,
                while a razor-thin rejection sets another lower high with the crowded-long carry
                still to unwind, and everything in between is the short-cover reclaim into the cap
                that the desk now reads
              </span>. The bull fork resolved: the buyer of record covered its one-day bear-trap
              short and re-crossed net long into a demand-led OI expansion, the crowd de-crowded
              rather than chased, and price rallied through the D-EMA20 / D-SMA20 pair to press the
              D-EMA50 cap to the dollar — the scout&rsquo;s two flow legs printing TRUE together for
              the first time in the recovery. But the price leg stopped $57 short of the cap close,
              and the rates filter ticked the wrong way, so nothing armed on the close. Until a
              daily close clears $64,911 or the rejection holds and forces SM back off, this note
              runs as written: the scout is DEFERRED an eighth day but at its CLOSEST to arming since
              the 07-24 deferral — flow confirmed, one close from live; the chase-short reversed away from
              armed on every leg and stands down; the put-spread is not re-grown on a rates leg that
              moved further from firing; and the book stays FLAT below the cap. The MTF count
              recovered to even with the regime flipping back to trend-continuation, the dealer book
              re-gammaed to +151.05M with the 0DTE front healed, and BTC stayed resilient versus
              NQ and the red AI/energy sleeve — not the top performer (green software and metals
              led) but basically flat in a split tape — the alignment finally leans bull. The right read
              for the next 24h is{' '}
              <em>patient — the flow has confirmed; read the $64,911 cap close and whether smart
              money holds the re-cross, not the intraday tag, and do not buy the cap the price has
              not yet closed above</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> v2 EN note — post codex hostile-but-fair audit
            (audits/2026-07-31-desk-note.md, verdict BLOCK-CRITICAL: 1 CRITICAL, 2 MAJOR,
            2 MINOR, plus an ask-deepseek supplementary numeric recompute). STAGE C applied
            every finding and ran the mandatory grep-closure loop (pattern → hits-before →
            hits-after) to zero stale residue before promoting v1 → v2. Snapshot anchor
            2026-07-31 00:07Z (live tape t == &ldquo;07-31 08:07&rdquo; BJ); rolling sources
            archived at /opt/desk-note/snapshots/2026-07-31-0007/.
            <br /><br />
            <b>Findings applied (grep-closure, each RESOLVED at hits-after = 0):</b>{' '}
            <b>DN-001</b> (CRITICAL, BJ→UTC conversion off by one month in the live-tape
            annotations) — patterns searched <em>06-30 23:03Z</em> and <em>06-30 23:51Z</em>{' '}
            (plus a broad <em>06-\d\d</em> date sweep): hits-before 4 (:186 &amp; :369 for the
            07-30 23:03Z retail low, :191 &amp; :344 for the 07-30 23:51Z SM re-cross row),
            hits-after 0. Every BJ 07-31 07:03 / 07:51 stamp now converts to 2026-07-30 23:03Z /
            23:51Z; the broad sweep confirms the only remaining <em>06-</em> token is the correct
            06:31Z UTC time (07-30 14:31 BJ), not a date — RESOLVED. <b>DN-002</b> (MAJOR,
            &ldquo;closest to arming of the whole recovery&rdquo; contradicts the scout&rsquo;s
            own 07-22 ARMED state) — patterns <em>entire recovery / whole recovery / closest to
            arming of the recovery / closest test of the recovery / tightest test of the recovery
            / best reading of the recovery / closest the two have come</em>: hits-before 8 (:234,
            :243, :291, :508, :734, :765, :889, :936), hits-after 0. Every arming/cap-test
            superlative is now bounded to &ldquo;since the 07-24 deferral&rdquo; (or &ldquo;the
            tightest below-cap retest since the cap was lost on 07-24&rdquo;), the 07-22 ARMED
            state is kept explicit, and the −0.09% test line now states outright it is NOT the
            closest of the entire recovery; the codex-accepted flow &ldquo;first time in/of the
            recovery&rdquo; claims (a distinct claim family, not the flagged superlative) were
            left intact — RESOLVED. <b>DN-003</b> (MAJOR, BTC overstated as &ldquo;most
            resilient / least-bad major risk asset&rdquo; while the same paragraph lists stronger
            green assets) — patterns <em>most resilient / LEAST-bad / relative-strength survivor
            (unqualified)</em>: hits-before 4 (:702, :722, :725, :941), hits-after 0. Every
            superlative narrowed: BTC is resilient versus NQ, JP225, the red AI-megacap sleeve
            and energy but is NOT the top risk-asset performer — green large-cap software
            (MSFT/AMZN/GOOGL) and the green metals led the split tape ahead of it — RESOLVED.
            <b>DN-004</b> (MINOR, MOVE labelled &ldquo;flat&rdquo; in manifest/prose while the
            table and source show +3.30) — pattern <em>MOVE 74.2 (flat) / 74.2 (flat)</em>:
            hits-before 2 (:120, :635), hits-after 0; both re-stated as MOVE 74.2 (+3.30) with
            the neutral regime read retained (table row already correct) — RESOLVED. <b>DN-005</b>{' '}
            (MINOR, 1-min aggressor skew 24h mean off by 0.01) — pattern <em>mean −4.62</em>:
            hits-before 1 (:318), hits-after 0; corrected to −4.61 (row-pinned 1,441-row window
            mean −4.6053) — RESOLVED. <b>Supplementary (ask-deepseek, adjudicated):</b> the
            net-GEX strip-sum equality (&ldquo;+151.04M (= net_gex)&rdquo;) was corrected —
            pattern <em>(= net_gex)</em> hits-before 1 (:595), hits-after 0 — the strip sums to
            +151.04M while net_gex $151,049,301.83 rounds to +151.05M, the −$0.01M now disclosed
            as per-expiry $-rounding; the two remaining deepseek items (SM prior-net −2,295 vs
            −2,294.54, D-EMA50 $64,910.69 vs ~$64,911) were adjudicated as the note&rsquo;s
            standard round-for-display / exact-for-math convention (codex marked both arithmetics
            clean) and left as-is. Overall: <b>post codex hostile audit</b>.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among
            principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a
            single atomic snapshot (2026-07-31 00:07Z) with section-level provenance
            disclosed in the manifest band above; the macro Tier-1 panel render is
            2026-07-30 22:15Z (~1.9h before snapshot) with Thursday&rsquo;s FRED daily
            re-print, and some inputs are explicitly stale or pending and flagged as such.
            Levels, sizes, and conditions are illustrative of the desk&rsquo;s process, not
            standing recommendations. Past correlation, gamma, and positioning patterns do
            not bind future tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                Smart money covered the bear-trap short and re-crossed net long into a demand-led
                expansion, and price pressed the D-EMA50 cap to the dollar — the scout&rsquo;s
                flow legs finally printed TRUE together, one daily close from arming. Do not buy
                the cap the price has not closed above. Read the close. Patient.
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
            v2 · 2026-07-31 00:07Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
