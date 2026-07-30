import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-30 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-30',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-30' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260730() {
  await requireViewer('/desk/2026-07-30');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-30 · v2</span>
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
              <span className="dn-big">$64,018</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.04%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-30 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-30 00:05Z (snapshot pin, t == &ldquo;07-30 08:05&rdquo; BJ)</td>
                  <td className="dn-flag">
                    fresh · 1-min · anchor pinned to the 00:05Z row (BJ 08:05) for
                    reproducibility · file tail advances live under-foot · 24h-window
                    convention: headline deltas use the same-clock prior-day baseline
                    t == &ldquo;07-29 08:05&rdquo; BJ (endpoint minus the 24h-ago row,
                    the 07-29 note&rsquo;s anchor). The series is contiguous across the
                    sub-windows this run, so the 4h/1h flow blocks (prior-row inclusive
                    baselines 07-30 04:05 / 07:05 BJ through the 08:05 pin) reproduce the
                    exact same-clock 04:05 / 07:05 endpoints — no baseline discrepancy to
                    disclose · one CVD reset in the 24h window at 07-29 14:12 BJ (06:12Z):
                    cb_cvd 13,175.0 → 91.9 and fut_cvd −591.1 → 68.8, both reset-adjusted
                    Method A ((pre − start) + (end − post)) · funding/flow row-statistics
                    span the 1,441-row window; premium means exclude null rows
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-30 08:01 BJ scan (00:01Z)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · archived verbatim at
                    /opt/desk-note/snapshots/2026-07-30-0008/ · ~4-min stale vs
                    snapshot anchor · in-progress bars · scan spot ≈ $63,994
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-30 00:00Z snapshot</td>
                  <td className="dn-flag">
                    ~5-min stale · Deribit idx $64,137 vs live $64,018 · median IV
                    43.3% · 846 instruments · headline aggregate +75.1M vs by-expiry
                    rollup +94.46M (= gex_summary.json net_gex $94,462,727) — a ~+19.36M
                    non-reconciling source-panel gap disclosed per DN-003 lineage, and
                    this run the rollup again sits ABOVE the headline (same sign as
                    07-29), with the by-expiry strip summing to exactly +94.46M
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-30 00:00Z
                  </td>
                  <td className="dn-flag">~5-min lag · 7d 1h bars · 22 assets · 167 rows · archived</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-29 22:17Z render</td>
                  <td className="dn-flag">
                    ~1.8h render lag · Wednesday FRED daily re-print landed: 10Y ticked
                    −4bp to 4.61% (a fourth straight ease, 4.71 → 4.69 → 4.65 → 4.61),
                    TIPS −3bp to 2.41%, 5Y5Y +4bp to 2.28%, 10Y breakeven +6bp to 2.26%,
                    HY OAS +3bp to 2.84% · MOVE rose to 74.2 (+3.30) · DXY 101.39 (−0.08) · Fed
                    net liq $5.917T (no fresh weekly print)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-30 00:05Z (in-progress close $63,979.00)</td>
                  <td className="dn-flag">
                    same-minute anchor · offsets recomputed vs live spot $64,017.99 ·
                    W-SMA200 non-computable from the 2023–2026 MA subset (188 weekly
                    bars); W-SMA150 IS computable at $76,627 but sits far above / disused
                    — the 200W cycle floor itself is available from full history / the
                    trap-watch state, see the row below · last completed daily close
                    07-29 $63,958.90 (the 07-30 bar is 5 minutes old)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W support watch</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · last recompute 2026-07-27 00:11Z (NOT re-run today)</td>
                  <td className="dn-flag">
                    200W cycle floor AVAILABLE — the trap-watch state file was last
                    recomputed 2026-07-27 and carries the last completed week 2026-07-26
                    close $65,375.10, W-SMA200 $63,311.02, consecutive_above 4 (streak from
                    2026-07-05). An independent full btcusdt_1m_*.parquet glob recompute
                    today (361 weekly bars, 2019–2026) reproduces the same completed-week
                    W-SMA200 $63,311.02 and shows the in-progress week (ending 2026-08-02)
                    W-SMA200 climbing to $63,536. Settled floor $63,311 (spot +1.12%
                    above); the computable D-SMA50 $63,410 is the nearest MA support, now
                    +$99 above the floor. The 24h low $63,313.81 held just $2.79 above the
                    settled floor — a to-the-dollar defence
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
              <span className="dn-v">+9.39%</span>
              <span className="dn-src">live · raw 0.008571 field × 1095 (NOT at the +10.95% cap this snap) · 24h mean +8.19% (re-heated from 07-29&rsquo;s +4.70%) · max +10.95% ann (0.01 field, cap, 515 / 1441 rows) · min +2.02% ann (0.0018410 field @ 07-29 22:45 BJ / 14:45Z) · 0 / 1441 NEGATIVE rows (was 300 / 1441 on 07-29) — the crowd re-crowded long, funding round-tripped straight back off the 07-29 negative flush</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">re-heated · 0 negative rows</span>
              <span className="dn-src">range +2.02% / +10.95% ann · mean +4.70% → +8.19% ann · the 300 negative rows on 07-29 healed to 0 — leverage re-crowded one-sidedly long into the bounce as smart money flipped the other way</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+1.02% (+1,056.8 BTC)</span>
              <span className="dn-src">live · 103,286.0 → 104,342.8 · an EXPANSION but distribution-shaped — price flat (−0.04%) while OI grew with SM flipping net SHORT (Δshort +4,273 / Δlong −3,050) and the 24h aggressor tape offered on the futures side (futCVD −907.8 / taker −859.3) even as spot was bid (spotCVD +2,210.0); new short positioning into a held floor, not the demand-led expansion the scout wants</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v">60.93 / 39.07</span>
              <span className="dn-src">live_db `mkt_long_pct` · 24h low 58.88 (07-29 21:03 BJ / 13:03Z) high 63.48 (07-29 08:12 BJ / 00:12Z) — de-crowded on the floor test then re-crowded into the last-4h bounce, roughly in line with 07-29&rsquo;s 63.41</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−2,285 (FLIPPED net SHORT)</span>
              <span className="dn-src">live · long 11,313.72 − short 13,598.81 = −2,285.09 · the buyer of record FLIPPED to net short for the FIRST time since the 07-21 14:36 BJ / 06:36Z long cross — crossed long→short at 07-29 14:31 BJ (06:31Z, +898.5 → −1,294.5), troughed −2,566 @ 07-30 04:26 BJ (07-29 20:26Z) on the floor test, sits −2,285 into the snap</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 24h-ago</span>
              <span className="dn-v bear">+5,038 → −2,285 (−7,323, 145% swing)</span>
              <span className="dn-src">|Δnet|/prior_net = 7,323.35 / 5,038.25 = 145.4% · Δlong −3,050.0 (longs dumped) AND Δshort +4,273.3 (shorts stacked) — the full flip shape: not a trim, a reversal from net long to net short in a single 24h window</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.3% / 29.52%</span>
              <span className="dn-src">GEX median IV · chain-median across 846 instruments, not a tradable spread · 30D close-to-close RV = logret.std × √365 × 100 on 30 daily returns (parquet last bar 00:05Z) · ~+13.8pt chain richness · 29-return alt 29.07%</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+1.61% (above)</span>
              <span className="dn-src">flip $63,001 · vs live spot $64,018 (+1.61%; 64,017.99/63,001.34 − 1 = 1.614%) / GEX file Deribit idx $64,137 (+1.80%; 64,137.47/63,001.34 − 1 = 1.803%) — both refs positive, tile uses spot side · aggregate +75.1M headline / +94.46M rollup — DE-GAMMAED from +100.4M / +116.31M on 07-29, the flip rose $285 toward spot ($62,716 → $63,001), and a modest near-dated negative re-appeared (30JUL 0DTE −5.60M)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The buyer of record ROLLED OFF — smart money flipped from net-long +5,038
                to net-SHORT −2,285, the first net-short since the 07-21 cross — but it did
                it into a floor that HELD to the dollar, so half the bear resolution fired
                without the other half
              </span>. The 07-29 note framed the whole thing on a single fork: does SM ADD
              into a D-EMA50 reclaim (scout arms) or ROLL OFF into a $63,311 close-break
              (chase-short arms). Today SM rolled off, hard —{' '}
              <span className="dn-tag bear">+5,038 → −2,285</span>, a 145% swing, dumping
              longs (−3,050) AND stacking shorts (+4,273) — the cleanest flip of the whole
              recovery. But the floor did not break: 07-29 closed{' '}
              <span className="dn-tag bull">$63,958.90</span> (+$55.30, the second completed up-close),
              the 07-30 bar prints <span className="dn-tag bull">$63,979.00</span> so far,
              and the 24h low <span className="dn-tag bull">$63,313.81</span> held just{' '}
              <span className="dn-em">$2.79 above the settled 200W floor $63,311.02</span> —
              a to-the-dollar defence. So the tape handed the desk half a bear resolution
              (SM roll-off) without the half that arms the trade (a floor close-break). And
              the split runs deeper than positioning: while smart money flipped short, the{' '}
              <span className="dn-em">crowd re-crowded long</span> — funding re-heated to a{' '}
              <span className="dn-tag bull">+8.19% mean with 0 / 1441 negative rows</span>{' '}
              (the 07-29 negative flush fully healed), retail sits 60.93, and the last four
              hours were a demand bounce (<span className="dn-tag bull">price +0.72%, OI
              +1,512 expansion, spot/futures/taker CVD all positive</span>) recovering off
              the floor test. <span className="dn-em">Distribution: OI expanded +1.02% on
              the 24h while price went nowhere and the buyer of record flipped short into
              retail&rsquo;s bid</span>. The D-EMA50 cap stayed unreclaimed — spot sits{' '}
              <span className="dn-tag bear">−1.33% below the D-EMA50 $64,883</span>, the only
              positive matrix offset being the D-SMA50 $63,410 (+0.96%) just above the floor
              — and the reclaim-long rates filter stayed{' '}
              <span className="dn-tag bear">FALSE</span> (Wednesday&rsquo;s 10Y eased a
              fourth straight day to 4.61%, now just 6bp above the 4.55% gate). So the scout
              holds <span className="dn-em">DEFERRED a seventh day with the book FLAT</span>,
              its SM leg now worse than FALSE (flipped short, not merely not-adding). The
              chase-short is the mirror: its SM-roll-off condition is now MET and a modest
              near-dated negative re-appeared (30JUL 0DTE −5.60M), but the floor HELD on a
              close and the book is still <span className="dn-tag bull">+75.1M / +94.46M</span>{' '}
              positive overall — so the short stays STOOD DOWN, closer to armed than at any
              point since the reset but waiting on the $63,311 close. The note turns on
              whether SM&rsquo;s flip-short presages a floor break that finally arms the
              chase-short — or whether it is smart money fading a floor-hold that the crowd
              carries back up into a bear trap.
            </p>

            <p>
              BTC prints <span className="dn-tag">$64,018</span> live,{' '}
              <span className="dn-tag bear">−0.04%</span> on 24h — effectively flat — inside
              a <span className="dn-tag">$64,723.90 / $63,313.81</span> range (high @ 07-29
              17:58 BJ / 09:58Z, low @ 07-30 05:09 BJ / 07-29 21:09Z on the overnight floor
              test). <span className="dn-signal">The floor held on the close AND on the wick
              this time</span>: 07-24 $64,116.50 → 07-25 $64,338.10 → 07-26 $65,375.10 →
              07-27 $63,720.80 → 07-28 $63,903.60 →{' '}
              <span className="dn-tag bull">07-29 $63,958.90 (+$55.30)</span>, with the
              in-progress 07-30 bar (5 minutes old) at{' '}
              <span className="dn-tag bull">$63,979.00</span>. Two completed consecutive
              up-closes (07-28, 07-29) with the 07-30 bar in-progress above 07-29,
              all above the settled 200W floor $63,311, none reclaiming the D-EMA50 cap. The
              MA matrix is still a capped ladder: spot sits below the{' '}
              <span className="dn-tag bear">D-EMA20 $64,233 (−0.33%)</span> /{' '}
              <span className="dn-tag bear">D-SMA20 $64,454 (−0.68%)</span> pair, sits{' '}
              <span className="dn-tag bear">−1.33% below the D-EMA50 $64,883</span> (the cap,
              overhead resistance a sixth session running), and the only positive offset on
              the whole matrix is the{' '}
              <span className="dn-tag bull">D-SMA50 $63,410 (+0.96%)</span>, now +$99 above
              the settled floor.{' '}
              <span className="dn-em">
                The 200W cycle floor is available and confirmed this run: the trap-watch
                state (ma200w_trap_watch_state.json, last recomputed 2026-07-27 00:11Z —
                not re-run today) carries the last completed week 2026-07-26 at W-SMA200{' '}
                <span className="dn-tag bull">$63,311.02</span> with four consecutive
                weekly closes above it, and an independent full btcusdt_1m_*.parquet glob
                recompute today (361 weekly bars) reproduces the same $63,311.02 for the
                completed week while the in-progress week (ending 2026-08-02) climbs to{' '}
                <span className="dn-tag">$63,536</span>. So $63,311 is the settled floor
                (spot +1.12% above it, three daily closes above it, and the 07-29 21:09Z low
                $63,313.81 held $2.79 above it on the wick) and the D-SMA50 $63,410 is the
                nearest MA support — a confluence floor rising fast toward spot.
              </span>{' '}
              The scout was ARMED on 07-22, moved DEFERRED on 07-24 when the D-EMA50 reclaim
              first failed, and has held deferred through 07-25/26/27/28/29 — its price and
              flow legs never once printing TRUE together. Today the price leg is still
              FALSE (no cap reclaim) and the SM flow leg went from FALSE-trimming to
              FALSE-flipped-short. The book stays flat.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · the floor held to the dollar (24h low $63,313.81 vs settled floor $63,311.02) on a second completed up-close (07-30 in-progress above 07-29) · but SM FLIPPED net SHORT −2,285 (first since the 07-21 cross), dumping longs −3,050 and stacking shorts +4,273 · OI EXPANDED +1.02% distribution-shaped · funding re-heated to +8.19% mean with 0 negatives as the crowd re-crowded long · last-4h a demand bounce off the floor test · perp still at a discount</span>
            </h2>

            <p>
              <span className="dn-signal">
                Smart money flipped to net short while the crowd re-crowded long — the two
                books are pointing opposite ways across a floor that held to the dollar
              </span>. Spot is flat on the 24h (−0.04%) with OI{' '}
              <span className="dn-tag bear">expanding +1,056.8 BTC (+1.02%)</span> —
              103,286.0 → 104,342.8. An OI expansion on flat price is the distribution shape
              when you read who is behind it: over the 24h the aggressor tape offered on the
              derivative side (futures CVD{' '}
              <span className="dn-tag bear">−907.8</span>, taker-net{' '}
              <span className="dn-tag bear">−859.3</span>) even as spot was bid (spot CVD{' '}
              <span className="dn-tag bull">+2,210.0</span>, reset-adjusted across the 07-29
              14:12 BJ / 06:12Z cb_cvd reset 13,175.0 → 91.9), and big-net ran a thin{' '}
              <span className="dn-tag bull">+162.0 BTC (765 prints)</span>. The tell is the
              positioning book underneath: OI grew because{' '}
              <span className="dn-em">smart money stacked shorts (+4,273) and dumped longs
              (−3,050)</span> into the expansion — new short positioning against a held
              floor, not fresh demand. Perp still trades a{' '}
              <span className="dn-tag bear">−$97.67 discount</span> to spot at the snap (24h
              mean −$83.12, range −$166.29 / +$24.03 — four isolated one-minute premium
              prints, overwhelmingly discount), a spot-led market the perp is chasing from behind. 1-min aggressor
              skew snap <span className="dn-tag bear">−13.4</span> (24h mean −3.06, range
              −51.6 / +36.9) — offered into the snap.{' '}
              <span className="dn-em">An OI expansion with SM flipping short and the futures
              tape offered is NOT the demand-led expansion the scout needs; it is
              distribution into a floor the crowd is defending on the spot bid.</span>
            </p>

            <p>
              Smart money is the standout — and this is the move the 07-29 note flagged as
              the bear-side fork.{' '}
              <span className="dn-signal">
                The buyer of record flipped from net long to net short for the first time
                since the 07-21 cross, and did it by both dumping longs and stacking shorts
              </span>. SM net is <span className="dn-tag bear">−2,285</span> (long 11,313.72 −
              short 13,598.81 = −2,285.09) vs the 24h-ago{' '}
              <span className="dn-tag bull">+5,038</span> — a{' '}
              <span className="dn-tag bear">Δnet −7,323 (a 145% swing)</span> (|−2,285.09 −
              (+5,038.25)| / 5,038.25 = 145.4%). The decomposition is the full flip shape:{' '}
              <span className="dn-tag bear">Δlong −3,050.0</span> (longs dumped) AND{' '}
              <span className="dn-tag bear">Δshort +4,273.3</span> (shorts stacked). This is
              not the −41% trim of 07-29 — it is a reversal. SM crossed long→short at{' '}
              <span className="dn-tag bear">07-29 14:31 BJ / 06:31Z</span> (+898.5 →
              −1,294.5), the first net-short reading since the 07-21 14:36 BJ / 06:36Z
              long cross that anchored the whole recovery, and troughed{' '}
              <span className="dn-tag bear">−2,566 @ 07-30 04:26 BJ / 07-29 20:26Z</span> —
              right into the overnight floor test — before easing to −2,285 at the snap.{' '}
              <span className="dn-em">The re-arm gate&rsquo;s SM leg is now worse than
              FALSE: the buyer that defended the floor with a +214% dip-buy on 07-27 and
              trimmed −41% on 07-29 has now flipped outright short. That is the bear-side
              tell the 07-29 note gated the chase-short on — present now, but only half of
              it: SM rolled off, the floor did not break.</span>
            </p>

            <p>
              The leverage and crowding reads went the OTHER way — the crowd re-crowded long
              as smart money flipped short.{' '}
              <span className="dn-signal">
                Funding round-tripped straight back off the 07-29 negative flush to a heated
                one-sided-long mean with zero negative rows
              </span>: live funding <span className="dn-tag bull">+9.39% ann</span> (raw
              0.008571 field × 1095, below but near the cap), 24h mean{' '}
              <span className="dn-tag bull">+8.19% ann</span> (a net RE-HEAT from
              07-29&rsquo;s +4.70%), max <span className="dn-tag">+10.95% ann</span> (0.01
              field cap, 515 / 1441 rows), min{' '}
              <span className="dn-tag">+2.02% ann (0.0018410 field @ 07-29 22:45 BJ /
              14:45Z)</span>, and{' '}
              <span className="dn-tag bull">0 / 1441 negative rows</span> — where 07-29 had
              300 negatives, the carry re-crowded fully back to the long side. Retail{' '}
              <span className="dn-tag">mkt_long_pct 60.93</span> (24h low 58.88 @ 07-29 21:03
              BJ / 13:03Z on the floor test, high 63.48 @ 07-29 08:12 BJ / 00:12Z) —
              de-crowded into the low then re-crowded into the bounce, roughly in line with
              07-29&rsquo;s 63.41.{' '}
              <span className="dn-em">The funding/retail re-heat against the SM flip is the
              day&rsquo;s core divergence: the crowd is paying up to be long into a bounce
              that the smart-money book is fading with fresh shorts. That is a
              distribution-into-strength signature, not a demand-led reclaim — the exact
              opposite alignment the scout needs.</span>
            </p>

            <p>
              Windowed flow shows the 24h offered on the derivative side but the last four
              hours a clean demand bounce off the floor test. 24h: price{' '}
              <span className="dn-tag bear">−0.04%</span>, OI{' '}
              <span className="dn-tag bear">+1,056.8 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +2,210.0</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −907.8</span>, big-print{' '}
              <span className="dn-tag bull">+162.0 BTC / 765 prints</span>, taker-net{' '}
              <span className="dn-tag bear">−859.3</span> —{' '}
              <span className="dn-em">spot bid but futures/taker offered while OI expanded
              and SM flipped short: distribution</span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bull">+0.72%</span>, OI{' '}
              <span className="dn-tag bull">+1,512.5 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,425.7</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +853.7</span>, big-print{' '}
              <span className="dn-tag bull">+369.3 BTC / 152 prints</span>, taker-net{' '}
              <span className="dn-tag bull">+838.9</span> — a genuine demand bounce off the
              overnight low, OI expanding WITH buyers for once. 1h: price{' '}
              <span className="dn-tag bull">+0.14%</span>, OI{' '}
              <span className="dn-tag bull">+365.5 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +569.3</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +230.6</span>, big-print{' '}
              <span className="dn-tag bear">−35.4 BTC</span>, taker-net{' '}
              <span className="dn-tag bull">+227.5</span> —{' '}
              <em>the bounce held into the snap but big-prints turned marginally net-seller,
              a hint the demand is thinning at the highs of the recovery</em>.{' '}
              <span className="dn-em">
                Baseline convention: the 24h block uses the same-clock prior-day row
                (07-29 08:05 BJ); the 4h and 1h sub-window blocks use prior-row inclusive
                baselines (07-30 04:05 / 07:05 BJ through the 08:05 pin). The series is
                contiguous across these windows this run, so those prior-row inclusive reads
                reproduce the exact same-clock 04:05 / 07:05 endpoints — no baseline
                discrepancy to disclose. The single 24h CVD reset (07-29 14:12 BJ / 06:12Z)
                is reset-adjusted Method A for both cb_cvd and fut_cvd.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF slipped to 1 long / 7 short / 2 neutral (was 1/6/3) on the count — but the REGIME FLIPPED to 6/9 cycle-reversal (JT&lt;0), mean-reversion / bounce favoured, from 07-29&rsquo;s 5/9 trend-continuation · the bull counterweight · bottom-div cluster widened to 7 TFs (15m/30m/1h/4h/8h/3d/1w, HTF cluster 8h/3d/1w) · fresh 1w water-down golden cross 1b · 1M ⚡TD9 BUY</span>
            </h2>

            <p>
              <span className="dn-signal">
                The frame count edged more bearish but the regime engine flipped the other
                way — from trend-continuation to mean-reversion — so the panel now reads
                &ldquo;sell the bounce&rdquo; on resonance while the regime says a bounce is
                favoured
              </span>. The 00:01Z scan reads{' '}
              <span className="dn-tag">1 long / 7 short / 2 neutral</span> across 10 TFs
              (1M long; 15m/30m/1h/4h/8h/1d/3d short; 12h/1w neutral), a shade more bearish
              on the count than 07-29&rsquo;s 1/6/3 — the net still reads{' '}
              <span className="dn-tag bear">multi-frame resonance bearish · sell the
              bounce</span>. But the standout is the regime flip: the tag moved from{' '}
              <span className="dn-tag">5/9 cycle-momentum (JT≥0) — trend-continuation</span>{' '}
              on 07-29 to{' '}
              <span className="dn-tag bull">6/9 cycle-reversal (JT&lt;0) — mean-reversion /
              bounce favoured, trend-following requires caution</span> today. That is the
              day&rsquo;s bull counterweight inside the bearish frame stack: the panel&rsquo;s
              own cycle engine now says the down-move is stretched and a mean-reversion
              bounce is the base case. The bottom-divergence cluster widened to{' '}
              <span className="dn-tag bull">7 TFs (15m/30m/1h/4h/8h/3d/1w)</span> with the
              HTF cluster flagged (8h/3d/1w) and top-div at 4 (15m/30m/1h/1d). Fast frames
              are back at the midline: 15m RSI <span className="dn-tag">53.4</span> (below
              cloud), 30m RSI <span className="dn-tag">50.5</span> (in cloud, water-down
              golden 2b), 1h RSI <span className="dn-tag">49.5</span> (in cloud). Mid frames
              stayed heavy: 4h RSI <span className="dn-tag">46.9</span> (below cloud,
              water-down golden 5b), 8h RSI <span className="dn-tag">45.8</span> (below cloud,
              just crossed), 1d RSI <span className="dn-tag">48.9</span> (in cloud). The slow
              frames keep the HTF bottoming tell, unbroken and freshening: a{' '}
              <span className="dn-tag bull">1w water-down golden cross 1 bar ago</span>
              (DIF +280, early), a{' '}
              <span className="dn-tag bull">3d water-down golden cross 6b</span>, both still
              below cloud (3d ↑75.6k, 1w ↑93.8k), and the top-frame oversold-reversal:{' '}
              <span className="dn-tag bull">1M ⚡ TD9 BUY at ≈$63,994</span>.{' '}
              <span className="dn-em">
                Read straight: the count is bearish but the regime flipped to mean-reversion
                and the HTF bottom-div cluster widened to seven frames — the panel is now
                internally split, calling &ldquo;sell the bounce&rdquo; on resonance while
                its cycle engine and divergence stack lean for a bounce. For the scout that
                changes nothing directly — the 1h/4h/8h/3d/1w are still below cloud and no
                cap is reclaimed — but it is the first structural read in a week that leans
                against a fresh leg down, which matters for the chase-short.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,988</td><td className="num">53.4</td><td className="bull">golden (water-dn) 8b</td><td className="bear">below ↑64.0k 19b</td><td>Sell 2</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">63,994</td><td className="num">50.5</td><td className="bull">golden (water-dn) 2b</td><td className="neut">in cloud 63.7k–64.3k 5b</td><td>Buy 1</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">63,988</td><td className="num">49.5</td><td className="bear">death (water-up) 9b</td><td className="neut">in cloud 63.7k–64.2k 3b</td><td>Sell 2</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">63,987</td><td className="num">46.9</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑64.7k 13b</td><td>Buy 3</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">63,992</td><td className="num">45.8</td><td className="bear">death (water-up) 20b</td><td className="bear">below ↑64.1k 刚穿 (just crossed)</td><td>Sell 4</td><td>BULL hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">63,994</td><td className="num">46.9</td><td className="bear">death (water-up) 12b</td><td className="bull">above ↓63.6k 32b</td><td>Sell 2</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">63,988</td><td className="num">48.9</td><td className="bear">death (water-up) 3b</td><td className="neut">in cloud 61.6k–69.9k 10b</td><td>Buy 7</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">63,994</td><td className="num">44.5</td><td className="bull">golden (water-dn) 6b</td><td className="bear">below ↑75.6k 19b</td><td>Buy 2</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">63,994</td><td className="num">39.3</td><td className="bull">golden (water-dn) 1b</td><td className="bear">below ↑93.8k 26b</td><td>Sell 3</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">63,994</td><td className="num">43.8</td><td className="neut">—</td><td className="bull">above ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 08:01 BJ scan (00:01Z; rolling latest
                    file, archived verbatim at
                    /opt/desk-note/snapshots/2026-07-30-0008/). Header alerts:{' '}
                    <em>1M ⚡ TD9 BUY (oversold reversal hint)</em>,{' '}
                    <em>top-div 4: 15m/30m/1h/1d · bottom-div 7: 15m/30m/1h/4h/8h/3d/1w
                    (HTF cluster 8h/3d/1w)</em>,{' '}
                    <em>regime 6/9 cycle-reversal (JT&lt;0) — mean-reversion / bounce
                    favoured, trend-following requires caution (flipped from 07-29&rsquo;s
                    5/9 trend-continuation)</em>, net read{' '}
                    <em>multi-frame resonance bearish · sell the bounce</em>. Scan spot
                    ≈$63,994 (per-TF closes $63,987–$63,994; the live-tape anchor at 00:05Z
                    reads spot $64,017.99 — the ~$24 gap is the 4-minute source lag plus the
                    spot-vs-OHLCV/perp basis). Closes are in-progress bars; treat every
                    value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the unreclaimed cap and the confluence floor. Spot
              $64,018 sits <span className="dn-tag bull">+0.96% above D-SMA50 $63,410</span>{' '}
              — the only positive offset on the entire matrix, now +$99 above the settled
              200W floor. Overhead the recovery ran into but not through the near pair:{' '}
              <span className="dn-tag bear">D-EMA20 $64,233 (−0.33%)</span>,{' '}
              <span className="dn-tag bear">D-SMA20 $64,454 (−0.68%)</span>, and the
              unreclaimed <span className="dn-tag bear">D-EMA50 $64,883 (−1.33%)</span> — the
              cap, resistance a sixth session. Then in order:{' '}
              <span className="dn-tag bear">W-EMA200 $67,146 (−4.66%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $67,482 (−5.13%)</span> — the working
              first MA target if the reclaim ever comes, with the dealer $66k–$72k call-wall
              band in between —{' '}
              <span className="dn-tag bear">D-SMA100 $69,214 (−7.51%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,398 (−7.75%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $69,459 (−7.83%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,703 (−8.16%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $70,336 (−8.98%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $71,601 (−10.59%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $73,181 (−12.52%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $73,130 (−12.46%)</span>. Below spot the
              only support is the settled 200W floor{' '}
              <span className="dn-tag bull">$63,311 (+1.12%)</span> with the D-SMA50 $63,410
              just above it, and the in-progress week&rsquo;s W-SMA200 climbing to $63,536
              just beneath spot. Far above and disused: W-SMA150 $76,627 (−16.45%), W-EMA50
              $78,355 (−18.30%), W-EMA100 $78,776 (−18.73%), W-SMA50 $84,339 (−24.09%),
              W-SMA100 $88,566 (−27.72%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-30 00:05Z (in-progress close
                $63,979.00); offsets recomputed against live spot $64,017.99. Displayed MA
                levels are $-rounded; offsets computed from exact series values. W-SMA200 is
                non-computable from the 2023–2026 MA subset (188 weekly bars) while
                W-SMA150 $76,627 IS computable but sits far above and disused; the W-EMA150
                $73,181 and W-EMA200 $67,146 lines seed from available history and are
                reported as such (both print above spot, so resistance here, not support);
                the 200W cycle floor $63,311 comes from the full-history glob / trap-watch
                state (see manifest). Daily closes: 07-24 $64,116.50, 07-25 $64,338.10,
                07-26 $65,375.10, 07-27 $63,720.80, 07-28 $63,903.60, 07-29 $63,958.90,
                07-30 (in-progress, 5 min) $63,979.00 — two completed up-closes off the floor
                (07-28, 07-29) with 07-30 in-progress above 07-29, none
                reclaiming the D-EMA50 cap.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DE-GAMMAED to +75.1M headline / +94.46M rollup (was +100.4M / +116.31M on 07-29) · flip rose $62,716 → $63,001 (spot +1.61% above, closer to spot) · a modest near-dated negative re-appeared — 30JUL 0DTE −5.60M, but 31JUL +55.53M dominant and the strip sums to +94.46M · $64k at-spot pocket +7.11M (positive but thinner than 07-29&rsquo;s +14.23M) · $60k −22.24M the lone crash-put</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book de-gammaed but stayed solidly positive, the flip climbed
                toward spot, and a modest near-dated negative re-appeared — the
                chase-short&rsquo;s gamma fuel came partway back, but only partway
              </span>. Headline aggregate GEX is{' '}
              <span className="dn-tag bull">+75.1M / 1%</span> (was +100.4M on 07-29), with
              the by-expiry rollup at{' '}
              <span className="dn-tag bull">+94.46M</span> (= gex_summary.json net_gex
              $94,462,727, was +116.31M on 07-29) — a ~+19.36M non-reconciling
              headline-vs-rollup gap, disclosed per DN-003 lineage, with the rollup again
              ABOVE the headline (same sign as 07-29). The 0-γ flip moved{' '}
              <span className="dn-tag">$62,716 → $63,001 (+$285)</span>, climbing toward
              spot, and spot $64,018 sits{' '}
              <span className="dn-tag bull">+1.61% above flip</span> on spot-denominated math
              (64,017.99 / 63,001.34 − 1 = +1.614%); the GEX file&rsquo;s own &ldquo;dist to
              flip&rdquo; reads{' '}
              <span className="dn-tag bull">+1.80% off its Deribit-index $64,137</span>{' '}
              (64,137.47 / 63,001.34 − 1 = +1.803%) — both references positive, but the
              cushion narrowed from 07-29&rsquo;s +2.11% as the flip rose faster than spot.
              The wall map is still a positive call band with a thinner at-spot pocket:{' '}
              <span className="dn-tag bull">$70k +28.17M</span> (heaviest wall),{' '}
              <span className="dn-tag bear">$60k −22.24M</span> (crash-put, the lone
              meaningful negative on the strike board),{' '}
              <span className="dn-tag bull">$72k +16.64M</span>,{' '}
              <span className="dn-tag bull">$65k +15.82M</span>,{' '}
              <span className="dn-tag bull">$68k +13.72M</span>,{' '}
              <span className="dn-tag bull">$66k +11.16M</span>,{' '}
              <span className="dn-tag bull">$67k +10.75M</span>,{' '}
              <span className="dn-tag bull">$80k +8.47M</span>,{' '}
              <span className="dn-tag bull">$64k +7.11M</span> (the at-spot pocket stayed
              positive but thinned from 07-29&rsquo;s +14.23M),{' '}
              <span className="dn-tag bull">$64.5k +6.96M</span>.{' '}
              <span className="dn-em">
                The $66k–$72k band still sums to roughly +80M of positive-gamma call
                resistance ($66k +11.16M + $67k +10.75M + $68k +13.72M + $70k +28.17M + $72k
                +16.64M = +80.44M), so a reclaim still runs into dealers selling gamma above.
                Below spot the near-spot book is a thinner but still-positive dampener: the
                $64k pocket is +7.11M and the only strike negative until the far $60k
                (−22.24M) crash-put is gone — so a move down into the $63,311 floor still
                runs into net-positive gamma that cushions rather than the amplifying
                negatives a chase-short wants.
              </span>{' '}
              By expiry a modest near-dated negative re-appeared:{' '}
              <span className="dn-tag bear">30JUL 0.3DTE −5.60M</span> (the 0DTE front, the
              only meaningful near-dated negative), before{' '}
              <span className="dn-tag bull">31JUL 1.3 +55.53M</span> the dominant chunk, then
              1AUG 2.3 +0.29M, 2AUG 3.3 +0.15M, 7AUG 8.3 +22.30M, 14AUG 15.3 −0.45M (a
              trivial residual negative), 28AUG 29.3 +15.81M, 25SEP 57.3 +2.12M, 25DEC 148.3
              +2.85M, 26MAR27 239.3 +0.85M, 25JUN27 330.3 +0.61M — the listed strip sums to
              exactly <span className="dn-tag bull">+94.46M</span> (= net_gex). So the strip
              is positive overall with one small 0DTE negative on the front: the amplifying
              negative-gamma cluster the chase-short needs is not really present — a single
              −5.60M 0DTE against a +55.53M next-day and a +94.46M aggregate is a dampened
              book, not an amplifier.
            </p>

            <p>
              IV median across the option chain is{' '}
              <span className="dn-tag">43.3%</span> (was 43.5% on 07-29) against 30D
              close-to-close RV of <span className="dn-tag">29.52%</span> — chain-level
              richness <span className="dn-tag">~+13.8pt</span>. A chain-median across N
              instruments (846 today), <span className="dn-em">not</span> a tradable
              spread; expiry-/strike-level vega, skew and term structure remain not loaded;
              the vol read stays framework-only. RV methodology: 30D close-to-close,
              logret.std × √365 × 100 on the last 30 daily log returns (= 31 consecutive
              daily closes) anchored to parquet last bar 2026-07-30 00:05Z; the 29-return
              alt reads 29.07%.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Wednesday FRED re-print — 10Y eased a fourth straight day −4bp to 4.61% (reclaim-long rates filter still FALSE, but now just 6bp from firing) · TIPS −3bp 2.41%, breakeven +6bp to 2.26% · MOVE rose to 74.2 (+3.30) · rates/dollar RISK-OFF vs credit/liquidity loose · DXY 101.39</span>
            </h2>

            <p>
              <span className="dn-signal">
                Wednesday&rsquo;s FRED re-print eased the long end a fourth straight day to
                4.61%, grinding the reclaim-long rates filter to within 6bp of firing —
                still FALSE, but the trend is unmistakably toward the gate
              </span>. Dashboard render is 2026-07-29 22:17Z, ~1.8h before the snapshot, and
              the FRED daily series re-printed for Wednesday 07-29. US 10Y nominal{' '}
              <span className="dn-tag bull">4.61% (−4.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.00</span>, episodic z{' '}
              <span className="dn-tag">+0.86</span> — RISK-OFF, eased 4bp off 4.65% and now
              4.71 → 4.69 → 4.65 → 4.61 across four prints. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.41% (−3.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.75</span> — EXTREME RISK-OFF, eased a touch.
              5Y5Y BE inflation <span className="dn-tag">2.28% (+4.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag">2.26% (+6.0bp)</span> — inflation compensation firmed.
              HY OAS <span className="dn-tag bull">2.84% (+3.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−0.25</span> — still &ldquo;loose&rdquo; but a
              touch wider. MOVE bond vol{' '}
              <span className="dn-tag">74.2 (+3.30, rose from 70.9)</span>, regime z +0.03 —
              neutral, vol a touch firmer. The offsets: DXY{' '}
              <span className="dn-tag bear">101.39 (−0.08)</span>, regime z +2.21 — EXTREME
              RISK-OFF; Fed net liquidity{' '}
              <span className="dn-tag bull">$5.917T</span> (no fresh weekly print), episodic
              z −2.47 — loose. US-JP 10Y spread{' '}
              <span className="dn-tag">1.94% (−4.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag">163.84</span>. NFCI{' '}
              <span className="dn-tag bull">−0.554</span>, RISK-ON (weekly).{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) stays FALSE at 4.61%
                — a fourth straight ease moved it to just 6bp from firing, the closest it
                has been all recovery. The macro split is unchanged: rates and the dollar
                sit RISK-OFF (tight, though the 10Y z eased to +2.00 from +2.24) while credit
                (HY OAS loose) and liquidity (net liq loose, NFCI RISK-ON) stay loose, with
                MOVE firmer but still neutral (74.2, +3.30). Nothing in this print flips the scout&rsquo;s rates gate today,
                but the trend is the tell — one more FRED daily of this size fires it.
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
                <tr><td>US 10Y nominal</td><td className="num">4.61%</td><td className="num bull">−4.0bp</td><td className="num bear">+2.00</td><td className="num">+0.86</td><td className="bear">RISK-OFF · Wednesday −4bp (4th ease)</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.41%</td><td className="num bull">−3.0bp</td><td className="num bear">+2.75</td><td className="num">+1.37</td><td className="bear">EXTREME RISK-OFF · eased</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.28%</td><td className="num bear">+4.0bp</td><td className="num">+0.81</td><td className="num">+2.20</td><td className="neut">episodic</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.26%</td><td className="num bear">+6.0bp</td><td className="num">−0.94</td><td className="num">+0.83</td><td className="neut">no tag · firmed</td></tr>
                <tr><td>HY OAS</td><td className="num">2.84%</td><td className="num bear">+3.0bp</td><td className="num bull">−0.25</td><td className="num">+2.12</td><td className="bull">loose · a touch wider</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.554</td><td className="num">−0.01</td><td className="num bull">−1.56</td><td className="num bull">−1.53</td><td className="bull">RISK-ON · weekly</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">74.2</td><td className="num bear">+3.30 (rose)</td><td className="num">+0.03</td><td className="num">+1.09</td><td className="neut">neutral · firmer</td></tr>
                <tr><td>DXY</td><td className="num">101.39</td><td className="num">−0.08</td><td className="num bear">+2.21</td><td className="num">+0.85</td><td className="bear">EXTREME RISK-OFF · bid</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.917T</td><td className="num">−0.069T</td><td className="num">+0.56</td><td className="num bull">−2.47</td><td className="bull">loose · no fresh weekly print</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.94%</td><td className="num bull">−4.0bp</td><td className="num">−0.56</td><td className="num">+0.86</td><td className="neut">tight</td></tr>
                <tr><td>USD/JPY</td><td className="num">163.84</td><td className="num">+0.07</td><td className="num bear">+1.72</td><td className="num bear">+1.94</td><td className="neut">yen soft</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num stale">+2.42</td><td className="num stale">+1.09</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.363</span> — NORMAL band, tightened
              hard from 07-29&rsquo;s 0.266 as the whole risk complex moved together.
              BTC&rsquo;s top tie is{' '}
              <span className="dn-tag">NQ +0.571</span> (firmed from +0.504), then SP500{' '}
              <span className="dn-tag">+0.547</span>, JP225{' '}
              <span className="dn-tag">+0.525</span>, URNM{' '}
              <span className="dn-tag">+0.479</span>, TSLA{' '}
              <span className="dn-tag">+0.461</span>, PLAT{' '}
              <span className="dn-tag">+0.461</span>, SILVER{' '}
              <span className="dn-tag">+0.453</span>, PALL{' '}
              <span className="dn-tag">+0.422</span>, GOLD{' '}
              <span className="dn-tag">+0.421</span>, COPPER{' '}
              <span className="dn-tag">+0.405</span>. 7d performance is the tell, and it is
              the day&rsquo;s cross-asset bull note:{' '}
              <span className="dn-tag bear">BTC −3.12%</span> is the LEAST-bad major risk
              engine bar the green megacaps — sitting well AHEAD of NQ{' '}
              <span className="dn-tag bear">−5.87%</span> (BTC +2.75pt) inside a deeply red
              complex — JP225 <span className="dn-tag bear">−7.90%</span>, NVDA{' '}
              <span className="dn-tag bear">−9.99%</span>, META{' '}
              <span className="dn-tag bear">−12.53%</span>, AMZN{' '}
              <span className="dn-tag bear">−5.27%</span>, TSLA{' '}
              <span className="dn-tag bear">−17.34%</span>, URNM{' '}
              <span className="dn-tag bear">−6.92%</span>, with SP500{' '}
              <span className="dn-tag bear">−2.14%</span> and the green megacaps AAPL{' '}
              <span className="dn-tag bull">+4.43%</span>, MSFT{' '}
              <span className="dn-tag bull">+9.08%</span>, GOOGL{' '}
              <span className="dn-tag bull">+0.56%</span> the exceptions. Metals are red but
              shallow (GOLD −1.10%, SILVER −2.72%, PLAT −1.74%, PALL −1.54%, COPPER −1.60%),
              energy heavier (CL −4.22%, BRENT −3.93%, NGAS −6.72%).{' '}
              <span className="dn-em">
                The correlation regime tightened to NORMAL 0.363 and BTC is moving WITH a
                broadly red risk tape — but it is the most resilient major risk asset in it,
                down a third of what NQ is over the 7d and less than half of the AI-megacap
                complex. Per the DN-001 lineage this is a tightened, risk-off cross-asset
                read with BTC as the relative-strength survivor rather than an RS leadership
                signal — a mild bull tilt on a red tape, not a rotation call.
              </span>{' '}
              JGB monthly 2.67% carries a monthly tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · cover-bounce scout DEFERRED (7th day) — SM leg now worse than FALSE (flipped net SHORT, not merely not-adding), price leg FALSE (cap unreclaimed), rates FALSE (6bp from gate) · chase-short STOOD DOWN but CLOSER to armed — SM roll-off condition MET and a 0DTE negative back, but the floor HELD on a close and the book is still +94.46M positive · book FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 07-29 fork resolved on the SM side — the buyer of record rolled off and
                flipped short — but not on the floor side, so neither trade armed
              </span>. The 07-29 note gated both trades on the same event: SM adds into a
              reclaim (scout) vs SM rolls off into a floor break (chase-short). Today SM
              rolled off — decisively, flipping net short — which is the chase-short&rsquo;s
              trigger condition on the positioning leg. But the floor HELD to the dollar on
              a second completed up-close, and the dealer book, though de-gammaed, is still +94.46M
              positive with only a 0DTE −5.60M near-dated negative — so the chase-short&rsquo;s
              floor-break-plus-amplifying-gamma trigger is unmet. And the scout&rsquo;s SM
              leg went from FALSE-trimming to FALSE-flipped-short, its worst reading of the
              recovery, with the cap still unreclaimed. The trade book today is no scout
              entry, no chase-short, no fresh hedge — the disciplined read is to hold the
              scout DEFERRED until a D-EMA50 reclaim PAIRS with SM re-adding, and to keep the
              chase-short stood down but primed: it is closer to armed than at any point
              since the reset, and a $63,311 close-break with SM already short would arm it
              on the break.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · DEFERRED (7th day) · SM leg worse than FALSE (flipped net SHORT), price leg FALSE, OI distribution-shaped, rates FALSE</span>
              <div className="dn-trade-name">
                Cover-bounce scout — the floor held on a second completed up-close, but the buyer of record flipped net SHORT into it, OI expanded on distribution, the D-EMA50 cap stayed unreclaimed, and rates stay FALSE
              </div>
              <div className="dn-thesis">
                The re-arm gate has all four legs FALSE, and the SM leg is now the worst it
                has read all recovery. The <em>price</em> leg (D-EMA50 reclaim on an
                up-close) is FALSE — two completed up-closes off the floor (07-28 $63,903.60,
                07-29 $63,958.90) with 07-30 in-progress $63,979.00 above 07-29, but all below the D-EMA50 $64,883
                cap, spot −1.33% beneath. The <em>SM-adding</em> leg is worse than FALSE —
                SM FLIPPED from net-long +5,038 to net-SHORT −2,285 (Δlong −3,050 dumped,
                Δshort +4,273 stacked, a 145% swing), the first net-short since the 07-21
                cross; the buyer of record is not merely declining to add, it is now
                positioned against the bounce. The <em>OI demand</em> leg is FALSE — OI
                expanded +1.02% (+1,057 BTC) but distribution-shaped (SM flipping short, 24h
                futures/taker offered), though the last-4h sub-window WAS a genuine demand
                bounce (OI +1,512 with all CVD positive). And the <em>rates</em> filter
                stays FALSE at 10Y 4.61% (Wednesday −4bp, 6bp from firing). The scout&rsquo;s
                demand leg and price-reclaim leg remain structurally out of phase; the entry
                stays deferred until a cap reclaim on an up-close PAIRS with SM re-adding on
                a demand-led OI.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm gate (all four legs FALSE)</span><span className="dn-lvl-v bear">D-EMA50 reclaim on an up-close (FALSE — two completed up-closes but below the $64,883 cap) · SM adding (worse than FALSE — FLIPPED net SHORT −2,285, dumped longs, stacked shorts) · OI demand-led (FALSE — +1.02% distribution expansion; only the last-4h sub-window was demand-led) · 10Y &lt; 4.55% (FALSE — 4.61%, 6bp away)</span></div>
                <div><span className="dn-lvl-k">the signature</span><span className="dn-lvl-v bear">SM added into the 07-27 dip (+214%), trimmed into the 07-29 bounce (−41%), and has now flipped outright short (−2,285) into the second completed up-close — the demand leg and the price-reclaim leg never print TRUE together</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on a D-EMA50 reclaim on an up-close that PAIRS with SM re-crossing net-long AND OI turning demand-led (or a rates print &lt; 4.55%): scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">daily close &lt; $63,311 (settled 200W floor / D-SMA50 confluence — a close below ends the recovery read)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$66k–$72k call-wall band is the practical cap; working MA target D-EMA100 $67,482, take half into the $66k / $67k walls</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R on the confirming reclaim · never into a bounce the buyer of record has flipped short against</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> entry on the confirmed re-arm ~$64,883 (D-EMA50 reclaim), stop
                $63,311 (settled floor / D-SMA50) = ~$1,572 risk; working target D-EMA100
                $67,482 = ~$2,599 reward ≈ 1.65:1 — but the $66k–$72k call-wall band caps
                the path, so the realistic first target is the $66k / $67k walls and the
                R/R to those is thinner. <b>Hard rule:</b> the scout does not enter with the
                buyer of record net short. Two completed up-closes off the floor with SM flipping
                net-short and OI expanding on distribution is a bounce smart money is
                fading, not a demand-led reclaim. The confirming leg is the price reclaiming
                the D-EMA50 on an up-close WITH SM re-crossing net-long and OI turning
                demand-led, in that order.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · chase · STOOD DOWN · CLOSER to armed — the SM roll-off condition is now MET and a 0DTE negative re-appeared, but the floor HELD on a close</span>
              <div className="dn-trade-name">
                Chase-short — the 07-29 SM-roll-off trigger is now MET (SM flipped net short) and a 0DTE negative re-appeared, but the floor held to the dollar and the book is still +94.46M positive, so it stays stood down pending the close-break
              </div>
              <div className="dn-thesis">
                On 07-29 the chase-short was FURTHER from armed than at any point since the
                reset — the near-dated negatives had healed and SM was still net long. Today
                one of its two trigger legs FIRED: SM rolled off and flipped net SHORT
                −2,285 (the positioning tell the 07-29 note gated the short on), and a modest
                0DTE near-dated negative re-appeared (30JUL −5.60M). But the other leg — a
                floor CLOSE-BREAK with amplifying negative gamma — is unmet: 07-29 closed
                $63,958.90 (the second completed up-close), the 24h low $63,313.81 held $2.79 above the
                settled floor $63,311.02, and the book, though de-gammaed to +94.46M, is
                still solidly positive with a single small 0DTE negative against a +55.53M
                next-day — a dampener, not an amplifier. So the chase-short is CLOSER to
                armed than yesterday (the SM leg flipped, a negative re-appeared) but stays
                STOOD DOWN: it arms on a $63,311 close-break, and with SM already short and
                the flip fresh, that break would arm it fast.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm legs (one MET, one unmet)</span><span className="dn-lvl-v bear">SM roll-off (MET — flipped net SHORT −2,285, first since the 07-21 cross) AND a 0DTE negative back (30JUL −5.60M) · BUT floor close-break (UNMET — floor HELD to the dollar on a second completed up-close) and amplifying negative gamma (UNMET — book still +94.46M positive)</span></div>
                <div><span className="dn-lvl-k">why closer to armed than 07-29</span><span className="dn-lvl-v bear">the buyer of record flipped net short (the bear-side positioning tell), the dealer book de-gammaed from +116.31M to +94.46M with the flip climbing toward spot, and a 0DTE negative re-appeared — the trend is toward the trigger</span></div>
                <div><span className="dn-lvl-k">what would arm the short</span><span className="dn-lvl-v bear">a daily close &lt; $63,311 (floor break) with SM already net short (present) and the near-dated negative gamma deepening — the short arms on the break, stop above the D-EMA50 $64,883</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no chase-short into a floor that just held to the dollar with the book still +94.46M positive; wait for the $63,311 close-break — but stay primed, SM is already short</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> the chase-short&rsquo;s edge is a floor break with
                amplifying negative gamma below and smart money already positioned for it.
                One of those is now present — SM flipped net short — but the floor held on a
                close and the book is still net-positive, so shorting here is shorting a
                held floor into a positive-gamma dampener, the low-quality short the lineage
                stands down. The difference from 07-29 is that the setup is now primed: if
                $63,311 breaks on a close, SM is already short and a 0DTE negative is already
                on the board, so the short would arm on the break rather than needing the
                positioning to turn first. Until the close breaks, it waits — but closer
                than it has been.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · the two books split — smart money flipped short while the crowd re-crowded long across a floor that held to the dollar</span>
              <div className="dn-trade-name">
                Distribution vs defence — the buyer of record flipped net short into a bounce the crowd is paying up to be long, and the floor held to the dollar between them; the fork is now the $63,311 close
              </div>
              <div className="dn-thesis">
                Seven sessions in, the oscillation resolved into a clean two-book split: on
                the 07-27 dip SM added +214% (demand leg TRUE, price leg FALSE); on the 07-29
                bounce it trimmed −41% (both FALSE); today it flipped outright net short
                −2,285 while funding re-heated to +8.19% with 0 negatives and retail
                re-crowded — smart money distributing into a crowd that is defending the
                floor with the spot bid. The floor held to the dollar between them
                ($63,313.81 low vs $63,311.02 settled). This is no longer a single buyer
                oscillating; it is two books pointing opposite ways, and the tie-breaker is
                the $63,311 daily close. Either the crowd&rsquo;s bid carries price back up
                into a D-EMA50 reclaim that forces SM to cover (a bear trap, the scout
                eventually arms as SM re-crosses long), or SM&rsquo;s short presages a close
                below $63,311 where the crowd&rsquo;s over-long carry unwinds hard (the floor
                fails, the chase-short arms on the break with SM already positioned). The
                note turns on that close, not the intraday bounce.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">bull resolution</span><span className="dn-lvl-v bull">D-EMA50 $64,883 reclaim on an up-close that forces SM to re-cross net-long (short-covering into demand) with OI demand-led — the phase aligns, scout arms live 0.2R; the mean-reversion regime flip and the widened HTF bottom-div cluster lean this way</span></div>
                <div><span className="dn-lvl-k">bear resolution</span><span className="dn-lvl-v bear">daily close &lt; $63,311 with SM already net short and the crowded-long carry (funding +8.19% mean, 0 negatives) unwinding — the floor defence fails, chase-short arms on the break</span></div>
                <div><span className="dn-lvl-k">deciding tells</span><span className="dn-lvl-v">the $63,311 daily close, whether SM covers (re-crosses long) or presses the short, and whether the crowded-long funding sustains or flushes — not the intraday bounce</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the edge is recognizing that this is now a
                distribution-vs-defence standoff, not a trend resolving — smart money short,
                crowd long, floor holding to the dollar between them. The lineage does not
                chase either side of that standoff; it waits for the $63,311 close to break
                the tie (floor break + SM short → chase-short arms) or for a reclaim that
                forces SM to cover (reclaim + SM re-cross → scout arms). Read the close, the
                SM cover/press, and the funding carry — not the candle.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the settled floor $63,311 HELD to the dollar (24h low $63,313.81, second completed up-close — bear resolution DID NOT fire) · the D-EMA50 reclaim DID NOT fire (capped −1.33% below) · SM FLIPPED net SHORT (the bear-side positioning tell fired — but half of the resolution, not the whole) · chase-short CLOSER to armed but STOOD DOWN pending the close-break · book FLAT</span>
            </h2>

            <p>
              Of the 07-29 decision conditions: the{' '}
              <em>settled-floor stop / floor test</em> resolved a HOLD (07-29 closed
              $63,958.90, the second completed up-close off the $63,311 confluence, with the 24h low
              $63,313.81 holding $2.79 above the settled floor on the overnight wick — the
              bear resolution the desk gated the chase-short on did NOT fire on the close);
              the <em>cover-bounce scout (long)</em> trigger DID NOT FIRE (the floor held but
              SM flipped net short into the bounce, so the flow leg went the wrong way and
              the price leg never met); the{' '}
              <em>D-EMA50 reclaim on an up-close paired with SM re-adding</em> did not occur
              (two completed up-closes but all capped below $64,883, and SM FLIPPED net short rather
              than adding); the <em>reclaim-long rates filter</em> stayed FALSE
              (Wednesday&rsquo;s 10Y eased a fourth straight day to 4.61%, now 6bp above the
              4.55% gate); and the <em>chase-short re-arm</em> moved CLOSER to armed — its
              SM-roll-off leg FIRED (SM flipped net short −2,285, the first since the 07-21
              cross) and a 0DTE near-dated negative re-appeared (30JUL −5.60M), but the
              floor-close-break leg stayed unmet.{' '}
              <em>Smart money rolled off and flipped short — half the bear resolution — but
              the floor held to the dollar and the book stayed +94.46M positive, so nothing
              armed on either side.</em>{' '}
              The conditions today re-set around a held floor, a smart-money book that
              flipped short, a crowd that re-crowded long, a de-gammaed but still-positive
              dealer book, and an unreclaimed D-EMA50 cap:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Settled-floor stop / floor test (07-29 gate)</td><td className="bull">HELD — 07-29 close $63,958.90, the second completed up-close off the $63,311 W-SMA200 / D-SMA50 confluence; 24h low $63,313.81 held $2.79 above the settled floor on the wick; spot +1.12% above</td><td>the bear resolution did NOT fire on the close; the recovery read runs on, the chase-short stays stood down pending a close-break</td></tr>
                <tr><td>D-EMA50 reclaim on an up-close (scout price leg)</td><td className="bear">FALSE — two completed up-closes but all below the $64,883 cap; 07-29 close $63,958.90 sits −1.43% beneath (spot −1.33%); the cap is unreclaimed a 6th day</td><td>no scout long: the bounce never took the cap, so the price leg is unmet</td></tr>
                <tr><td>SM adding to net-long (scout flow leg)</td><td className="bear">worse than FALSE — SM FLIPPED net SHORT −2,285 (Δlong −3,050, Δshort +4,273, 145% swing), the first net-short since the 07-21 cross</td><td>no scout long: the buyer of record is now positioned against the bounce, not funding it</td></tr>
                <tr><td>Buyers behind the OI (scout flow leg)</td><td className="bear">FALSE — OI +1.02% (+1,057 BTC) distribution expansion (SM short, 24h futures/taker offered); only the last-4h sub-window was demand-led</td><td>no scout long: the 24h expansion is distribution, not fresh demand</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">FALSE — 10Y 4.61% &gt; 4.55% (Wednesday −4bp, a 4th straight ease, 6bp from firing)</td><td>standalone filter false but the closest all recovery; one more FRED daily of this size fires it</td></tr>
                <tr><td>Cover-bounce scout (long)</td><td className="bull">a D-EMA50 $64,883 reclaim on an up-close PAIRED with SM re-crossing net-long AND OI turning demand-led (or 10Y &lt; 4.55%)</td><td>scout long 0.2R, stop $63,311, working target D-EMA100 $67,482 (capped by $66k–$72k call walls), R/R ~1.65:1</td></tr>
                <tr><td>Chase-short re-arm (closer to armed)</td><td className="bear">SM roll-off MET (flipped net short −2,285) + 0DTE negative back (30JUL −5.60M) — BUT floor HELD on a close and book still +94.46M positive</td><td>no chase-short into a floor that held to the dollar with a still-positive book; arms on a $63,311 close-break — and with SM already short, that break arms it fast</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                the $63,311 daily close now that smart money has already flipped short — a
                close below arms the chase-short on the break with the positioning already in
                place, while a reclaim that forces SM to cover arms the scout, and everything
                in between is the distribution-vs-defence standoff the desk now reads
              </span>. The floor held to the dollar on a second completed up-close, but it held with the
              buyer of record flipping net SHORT into the bounce — the first net-short since
              the 07-21 cross and the bear-side positioning tell the 07-29 note gated the
              chase-short on — while the crowd re-crowded long (funding +8.19% mean, 0
              negatives). So half the bear resolution fired (SM roll-off) without the half
              that arms the trade (a floor close-break), and the scout&rsquo;s flow leg went
              from FALSE-trimming to FALSE-flipped-short a seventh day. Until the close
              breaks or a reclaim forces SM to cover, this note runs as written: the scout is
              DEFERRED a seventh day with its SM leg at its worst reading of the recovery;
              the chase-short is CLOSER to armed than at any point since the reset — SM short,
              a 0DTE negative back, the flip climbing toward spot — but stood down pending
              the $63,311 close; the put-spread is not re-grown on a single below-4.55% leg
              that has not printed; and the book stays FLAT above the floor. The MTF regime
              flipped to mean-reversion with the HTF bottom-div cluster widening to seven
              frames (a bull counterweight), the dealer book de-gammaed but stayed positive,
              and BTC was the most resilient major risk asset in a deeply red tape — but the
              two books split, and that split is the tell the desk reads next. The right read
              for the next 24h is{' '}
              <em>patient — the level is doing the work; read the $63,311 close and whether
              smart money covers or presses its fresh short, not the bounce, and do not buy a
              cap the price has not reclaimed or short a floor that just held to the
              dollar</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> v2 EN note — post codex hostile-but-fair audit
            (audits/2026-07-30-desk-note.md, verdict PASS-WITH-NOTES: 0 CRITICAL, 2 MAJOR,
            2 MINOR). STAGE C applied every finding and ran the mandatory grep-closure loop
            (pattern → hits-before → hits-after) to zero stale residue before promoting v1 →
            v2. Snapshot anchor 2026-07-30 00:05Z (live tape t == &ldquo;07-30 08:05&rdquo;
            BJ); rolling sources archived at /opt/desk-note/snapshots/2026-07-30-0008/.
            <br /><br />
            <b>Findings applied (grep-closure, each RESOLVED at hits-after = 0):</b>{' '}
            <b>DN-001</b> (MAJOR, macro table/prose transcription) — patterns searched{' '}
            <em>MOVE eased / MOVE cooling / eased from 77 / vol cooling / eased to 74 /
            &ldquo;(eased)&rdquo;</em> (MOVE direction), <em>TIPS episodic +1.6</em>,{' '}
            <em>5Y5Y &ldquo;no tag&rdquo; / +1.1</em>, <em>10Y breakeven episodic
            &ldquo;—&rdquo;</em>: hits-before 9 (manifest :120, roman :623, prose :644 &amp;
            :659, table rows :677/:678/:679/:682), hits-after 0. Source
            macro_dashboard.html re-cut: MOVE 74.2 ROSE +3.30 (regime z +0.03, episodic
            +1.09, read neutral — &ldquo;eased/cooling&rdquo; removed, prior ≈70.9 not 77.2);
            TIPS episodic +1.37; 5Y5Y episodic +2.20 flagged episodic; 10Y breakeven
            episodic +0.83 — RESOLVED. <b>DN-002</b> (MAJOR, 07-21 long-cross timestamp off
            by 8h) — pattern <em>07-21 06:36 / 07-20 22:36</em>: hits-before 2 (:192, :343),
            hits-after 0; every reference replaced with the corrected 07-21 14:36 BJ / 06:36Z
            cross (live-tape row net +4,138.49 after −641.90) — RESOLVED. <b>DN-003</b>
            (MINOR, up-close over-count) — patterns <em>third up-close / three up-closes /
            three consecutive up-closes</em>: hits-before 15, hits-after 0; 07-29 re-stated
            as the SECOND completed consecutive up-close (07-28 first, 07-29 second) with the
            07-30 in-progress bar above 07-29 so far, and the floor-defence sense re-worded to
            &ldquo;daily closes above the floor&rdquo; where direction was not the claim —
            RESOLVED. <b>DN-004</b> (MINOR, perp premium prints) — pattern <em>briefly
            premium once</em>: hits-before 1 (:319), hits-after 0; re-stated as four isolated
            one-minute premium prints — RESOLVED. No CRITICAL findings; the ask-deepseek
            supplementary recompute returned no numeric error and was adjudicated (not
            auto-applied) per runbook §5.
            <br /><br />
            <b>Recompute anchors (codex-confirmed clean, carried forward):</b>{' '}
            funding × 1095 (live +9.39% ann from raw 0.008571, below the +10.95% cap; 24h
            mean +8.19%, max +10.95% ann cap 515 / 1441 rows, min +2.02% ann from 0.0018410,
            0 / 1441 negative rows); the GEX dual-reference sign (flip $63,001, spot +1.61% /
            idx +1.80%, both positive, tile spot side; headline +75.1M vs by-expiry rollup
            +94.46M = gex_summary.json net_gex $94,462,727, ~+19.36M gap with the rollup
            ABOVE the headline, listed expiries sum to exactly +94.46M); the full MA matrix
            vs live spot $64,017.99 off parquet 2026-07-30 00:05Z in-progress close
            $63,979.00 (D-EMA50 $64,883 −1.33% cap, D-SMA50 $63,410 +0.96% nearest support,
            settled 200W floor $63,311.02, W-SMA200 non-computable at 188 weekly bars while
            W-SMA150 $76,627 is computable but disused, D-EMA100 $67,482); the SM flip
            fraction |Δnet|/prior_net = 7,323.35 / 5,038.25 = 145.4% (Δlong −3,050.0 /
            Δshort +4,273.3, cross long→short 07-29 14:31 BJ / 06:31Z, first net-short since
            the 07-21 cross); the 24h CVD reset-adjustment Method A over the single 07-29
            14:12 BJ / 06:12Z reset (cb_cvd 13,175.0 → 91.9 gives spot Δ +2,210.0; fut_cvd
            −591.1 → 68.8 gives fut Δ −907.8); 30D close-to-close RV 29.52% (29-return alt
            29.07%); the settled floor defence (24h low $63,313.81 held $2.79 above
            $63,311.02); MTF 1 long / 7 short / 2 neutral with the regime FLIP to 6/9
            cycle-reversal (JT&lt;0) and bottom-div cluster widening to 7 TFs; macro Tier-1
            (10Y 4.61% Wednesday −4bp / 4th straight ease / 6bp from the 4.55% gate, HY OAS
            2.84%, MOVE 74.2, DXY 101.39, Fed net liq $5.917T); cross-asset (|r| 0.363
            NORMAL, BTC −3.12% vs NQ −5.87%); claims-vs-loaded-data (NTT / max-pain /
            strike-IV / BTC-NQ framework-only; JGB monthly do-not-lean; IV chain-median
            across 846 instruments, not a tradable spread); and the requireViewer gating
            pattern (path /desk/2026-07-30, first statement of the default export). Post
            codex hostile audit — v2 published.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among
            principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a
            single atomic snapshot (2026-07-30 00:05Z) with section-level provenance
            disclosed in the manifest band above; the macro Tier-1 panel render is
            2026-07-29 22:17Z (~1.8h before snapshot) with Wednesday&rsquo;s FRED daily
            re-print, and some inputs are explicitly stale or pending and flagged as such.
            Levels, sizes, and conditions are illustrative of the desk&rsquo;s process, not
            standing recommendations. Past correlation, gamma, and positioning patterns do
            not bind future tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The floor held to the dollar on a second completed up-close, but the buyer of record
                flipped net short into the bounce while the crowd re-crowded long — smart
                money distributing, retail defending, the two books split across $63,311. Do
                not buy a cap the price has not reclaimed or short a floor that just held.
                Read the close. Patient.
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
            v2 · 2026-07-30 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
