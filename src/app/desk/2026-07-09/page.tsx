import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-09 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-09',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-09' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260709() {
  await requireViewer('/desk/2026-07-09');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-09 · v2</span>
          <span>internal · for discussion · post codex hostile audit</span>
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
              <span className="dn-big">$62,194</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−2.00%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-09 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-09 00:05Z (snapshot pin · BJ 08:05 row)</td>
                  <td className="dn-flag">
                    fresh · 1-min · anchor pinned to t=&ldquo;07-09 08:05&rdquo;
                    (BJ) = 00:05Z; the file tail keeps appending, so all windows
                    are frozen to this pinned index. Snapshot &ldquo;now&rdquo;
                    values (spot, retail, SM net, funding) use the exact BJ
                    08:05 pin; 24h deltas span the last 1441 sampled rows ending
                    at the pin, so 24h-ago = the BJ 08:06 (07-08) sampled row,
                    because the BJ 14:21 futures-CVD reset minute is duplicated
                    in the tape
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-09 00:01Z scan (BJ 08:01)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · ~4-min stale vs snapshot
                    anchor · in-progress bars · scan archived in
                    /opt/desk-note/snapshots/2026-07-09-0005/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-09 00:01Z snapshot</td>
                  <td className="dn-flag">
                    ~4-min stale vs anchor · Deribit idx $62,498 vs live spot
                    $62,194 (idx $304 above) · 878 instruments · 9JUL26 0.3DTE
                    +0.09M settles 08:00Z today (post-snapshot); no near-dated
                    negative amplifier on the strip
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-09 00:01Z
                  </td>
                  <td className="dn-flag">~4-min lag · 7d 1h bars · 22 assets · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-08 22:16Z render</td>
                  <td className="dn-flag">
                    ~1.8h render lag · FRED Tier-1: 10Y 4.55% (+7.0bp,
                    RISK-OFF), TIPS 2.30% (+6.0bp, EXTREME), HY OAS 2.67%
                    (−5.0bp, RISK-ON), MOVE 72.4 (+7.0), DXY 101.12 (+0.27,
                    EXTREME), Fed net liq $5.843T · Tier-3 inflation rows stale
                    (68d monthly)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-09 00:05Z (close $62,147.10)</td>
                  <td className="dn-flag">
                    offsets recomputed vs live spot $62,194.00 · full 2019→
                    glob loaded (358 weekly bars) so the entire W-matrix incl
                    W-SMA150 / W-SMA200 is computable this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle-floor watch JSON</td>
                  <td className="dn-v-cell">weekly_200sma.json · ABSENT this cut</td>
                  <td className="dn-flag">
                    canonical watch JSON not present on the server → ratio
                    percentile / last-event stay unsourced (not fabricated);
                    floor recomputed directly from the parquet W-MON W-SMA200
                    ($63,062.79) per the runbook fallback
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale · monthly (68d) · do not treat as live</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT pivots, max-pain, strike-level IV, BTC/NQ ratio
                  </td>
                  <td className="dn-v-cell">NOT LOADED in this cut</td>
                  <td className="dn-flag">claims explicitly framework-only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h ann.</span>
              <span className="dn-v">+6.45%</span>
              <span className="dn-src">live · raw 0.005891%/8h × 1095 · 24h mean +4.97% ann · cap occupancy 86 / 1441 sampled rows = 6.0% · 96 negative rows · max +10.95% @ 07-08 19:26Z (BJ 03:26 07-09) · trough −0.28% @ 07-08 04:40Z (BJ 12:40 07-08)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+5.23% → +6.45% (+1.22pt, firmed)</span>
              <span className="dn-src">tape-internal 24h: 24h-ago row +5.23% ann → now +6.45% · 24h mean cooled to +4.97% (was +8.00% on the 07-08 note) · funding stayed positive through a −2.00% down-day — no capitulation flush</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+1.00% (+995 BTC)</span>
              <span className="dn-src">live · first OI BUILD after two days of shrink · SM long_btc −1,765 / short_btc +1,309 — fresh short build + long flush; OI grew into the down-leg (new positioning, not de-grossing)</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">64.00 / 36.00</span>
              <span className="dn-src">live_db `mkt_long_pct` · BJ 08:05 pin · piled from 58.81 → 64.00 (+5.19pt) as price fell −2.00% · 24h range 58.81 / 65.09 — retail leaning INTO the decline, on the wrong side of the SM short build</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−3,115.7 (net SHORT, flipped from flat)</span>
              <span className="dn-src">live · long 10,185.4 − short 13,301.2 · 24h-ago net −42.6 (flat) · 24h net min −4,175 @ 07-08 16:26Z (BJ 00:26 07-09), max +1,470 @ 07-08 02:41Z (BJ 10:41 07-08); short_btc 24h max 15,096.3 @ 07-08 09:01Z (BJ 17:01 07-08)</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · 24h step</span>
              <span className="dn-v bear">−42.6 → −3,116 (fresh directional short)</span>
              <span className="dn-src">the 24h-ago SM net was ~FLAT (−42.6, matching the prior note&rsquo;s ~flat read); cut fraction |Δ|/prior_net is meaningless against a flat base — report absolute: net stepped −3,073 into net-short on a long flush + short add · NOT a two-sided de-gross (OI grew)</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.7% / 31.72%</span>
              <span className="dn-src">GEX median IV · 878 inst · 30D close-to-close RV (30 returns / 31 closes; 29-ret alt 32.25%) · chain richness ~+11.0pt</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+1.80% (above)</span>
              <span className="dn-src">flip $61,094 (was $61,071 on 07-08) · vs live spot $62,194 (+1.80%; 62,194/61,094 − 1 = 1.797%) / GEX file Deribit idx $62,498 (+2.30%; 62,498/61,094 − 1 = 2.298%) — both refs positive · aggregate GEX +80.6M net-long-gamma (was +114.2M on 07-08 — shallower)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The recovery&rsquo;s pullback deepened into a third down-close
                and the reclaimed 200W floor is now lost on the in-progress
                weekly
              </span>. Spot <span className="dn-tag bear">$62,194</span> sits{' '}
              <span className="dn-tag bear">−1.38% below the $63,062.79 W-SMA200
              cycle floor</span>; the in-progress 07-13 weekly close{' '}
              <span className="dn-tag bear">$62,147.10 prints −1.45% under
              it</span> (vs the 07-08 note&rsquo;s +0.90% above), and two
              consecutive daily closes — 07-08{' '}
              <span className="dn-tag bear">$62,255.30</span> and 07-09
              in-progress <span className="dn-tag bear">$62,147.10</span> — are
              back beneath the floor. The prior note&rsquo;s &ldquo;reclaim
              INTACT, in-progress week above&rdquo; has flipped to{' '}
              <span className="dn-em">
                in-progress week back below — the re-confirm-break trigger is
                now armed intra-week
              </span>, though it is <span className="dn-em">not yet</span> a
              confirmed weekly close below: the week does not settle until Mon
              07-13, and the last completed weekly event stays the 07-06 reclaim
              ($64,023.60 above). The tape under the pullback is genuinely
              bearish this cut, unlike the prior two &ldquo;de-grossing not
              demand&rdquo; reads:{' '}
              <span className="dn-tag bear">OI grew +995 BTC (+1.00%)</span> —
              fresh positioning, not de-grossing — SM flipped from flat (−42.6) to{' '}
              <span className="dn-tag bear">net-SHORT −3,116</span> on a long
              flush (−1,765) plus a short build (+1,309), and{' '}
              <span className="dn-tag bear">retail piled INTO longs +5.19pt to
              64.00%</span> as price fell. Funding held positive (+6.45% ann,
              24h mean +4.97%, 96 negative rows, 6.0% cap occupancy) so this is
              a controlled directional down-leg, not a capitulation flush. The
              dealer book stays net-long-gamma but shallower{' '}
              <span className="dn-tag bull">+80.6M</span> (was +114.2M) with the
              flip $61,094 spot +1.80% above and no meaningful near-dated
              negative amplifier (only 11JUL26 −0.44M, negligible), so the
              decline ran orderly. Book stays{' '}
              <span className="dn-em">FLAT</span>: no short into the flip/$60k
              positive-gamma bid, no scout long (both the price AND the demand
              pre-conditions are now broken), no fresh hedge (only the rates leg
              of the OR-gate fired). The single line is the Mon 07-13 weekly
              close vs the $63,063 floor.
            </p>

            <p>
              BTC prints <span className="dn-tag">$62,194</span> live,{' '}
              <span className="dn-tag bear">−2.00%</span> on 24h (24h-ago
              $63,461), inside a{' '}
              <span className="dn-tag">$63,712 / $61,570</span> range (high @
              07-08 00:45Z / BJ 08:45 07-08, low @ 07-08 15:25Z / BJ 23:25
              07-08).{' '}
              <span className="dn-signal">
                The pullback is now a three-down-close leg off the 07-06 peak
              </span>: daily closes 07-06{' '}
              <span className="dn-tag bull">$64,023.60</span> (the reclaim top),
              07-07 <span className="dn-tag bear">$63,335.40</span>, 07-08{' '}
              <span className="dn-tag bear">$62,255.30</span>, 07-09 in-progress{' '}
              <span className="dn-tag bear">$62,147.10</span> — a −$1,876 slide
              in three sessions that has carried price back below the cycle
              floor. The MA matrix has collapsed to a single positive offset:
              spot sits <span className="dn-tag bull">+0.63% above D-SMA20
              $61,805.93</span> — the only line beneath — and{' '}
              <span className="dn-tag bear">−0.55% below D-EMA20
              $62,540.43</span>, with the{' '}
              <span className="dn-tag bear">200W floor W-SMA200 $63,062.79
              (−1.38%)</span> now overhead as resistance rather than support.{' '}
              <span className="dn-em">
                The reclaimed floor has flipped from a floor we held to a level
                we sit under — that is the structural fact of this note.
              </span>{' '}
              Everything else on the ladder is deep overhead in order: D-EMA50
              $65,392 (−4.89%), D-SMA50 $65,654 (−5.27%), D-EMA100 $69,042
              (−9.92%), D-SMA150 $70,103 (−11.28%), D-SMA100 $70,823 (−12.18%),
              then the weekly cluster from W-EMA200 $68,928 (−9.77%) up. The
              cover-bounce scout&rsquo;s price pre-condition — spot above the
              flip AND above D-EMA20/D-SMA20 AND above the floor — has failed on
              two of three legs this cut (below D-EMA20, below the floor); it
              stays stood down on price as well as demand.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · OI BUILT +995 BTC into the down-leg · SM flipped flat → net-short on a long flush + short add · retail piled INTO longs · funding held positive (no flush)</span>
            </h2>

            <p>
              <span className="dn-signal">
                This is the first cut of the pullback where the position book
                added risk rather than shedding it
              </span>. Over the 24h window OI{' '}
              <span className="dn-tag bear">grew +995 BTC (+1.00%)</span> — the
              first OI build after two consecutive days of shrink named in the
              07-07 and 07-08 notes — and the composition is directional: SM net{' '}
              stepped from <span className="dn-tag">−42.6 (flat)</span> to{' '}
              <span className="dn-tag bear">−3,115.7 (net short)</span>, a −3,073
              move built from long_btc{' '}
              <span className="dn-tag bear">11,950.0 → 10,185.4 (−1,765)</span>{' '}
              and short_btc{' '}
              <span className="dn-tag bear">11,992.6 → 13,301.2 (+1,309)</span>.
              The long side flushed and the short side stacked in the same
              window — a genuine bearish repositioning, not the two-sided
              de-gross of the prior two cuts. SM net troughed{' '}
              <span className="dn-tag bear">−4,175 @ 07-08 16:26Z (BJ 00:26
              07-09)</span> and recovered fractionally to −3,116 into the
              snapshot; short_btc peaked{' '}
              <span className="dn-tag bear">15,096.3 @ 07-08 09:01Z (BJ 17:01
              07-08)</span> then bled to 13,301, and long_btc bottomed{' '}
              <span className="dn-tag bear">10,140.3 @ 07-08 23:21Z (BJ 07:21
              07-09)</span>.{' '}
              <span className="dn-em">
                The SM cut fraction is undefined: the 24h-ago net was ~flat
                (−42.6, in line with the 07-08 note&rsquo;s ~flat read), so
                |Δ|/prior_net has no meaning — the honest read is the absolute
                step into net-short, not a percentage of a flat base.
              </span>
            </p>

            <p>
              <span className="dn-signal">
                Retail leaned hard into the decline
              </span>. `mkt_long_pct` climbed{' '}
              <span className="dn-tag bear">58.81% → 64.00% (+5.19pt)</span>{' '}
              across the 24h, range 58.81 / 65.09 — retail added longs as spot
              fell −2.00%, putting the crowd on the opposite side of the smart-
              money short build. That divergence — retail long, SM short, OI
              building — is the cleanest bearish positioning shape of the
              recovery so far. The leverage side did{' '}
              <span className="dn-em">not</span> capitulate, though: funding held{' '}
              <span className="dn-tag">+6.45% ann live</span> (raw 0.005891%/8h ×
              1095), 24h mean{' '}
              <span className="dn-tag">+4.97% ann</span> (cooled from the 07-08
              note&rsquo;s +8.00%), range{' '}
              <span className="dn-tag">−0.28% / +10.95%</span> with the max @
              07-08 19:26Z (BJ 03:26 07-09) and the only negative trough{' '}
              <span className="dn-tag">−0.28% @ 07-08 04:40Z (BJ 12:40
              07-08)</span>; cap occupancy{' '}
              <span className="dn-tag">86 / 1441 sampled rows (6.0%)</span> and{' '}
              96 negative rows out of 1,441. Perp trades a{' '}
              <span className="dn-tag bear">−$51.17 discount</span> to spot at
              the snap (1h mean −$47.31, 4h mean −$48.65, 24h mean −$55.29,
              range −$167.77 / +$138.14 — basis touched premium intraday but sat
              discount on the mean). 1-min aggregate skew snap{' '}
              <span className="dn-tag bear">−2.3</span> (24h mean −0.48) — a mild
              sell tilt, no oversold reflex bid.{' '}
              <span className="dn-em">
                OI building + SM flipping short + retail crowding the long side
                + funding holding positive: the leverage book is pressing the
                down-leg, not deflating it — the mirror image of the two
                de-grossing cuts that preceded it.
              </span>
            </p>

            <p>
              Windowed flow is <em>spot bid into a perp-led sell, with the OI
              build concentrated in the 24h and the last four hours drawing OI
              back down</em>. 24h: price{' '}
              <span className="dn-tag bear">−2.00%</span>, OI{' '}
              <span className="dn-tag bear">+995 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,852</span> (clean, no reset in
              the window), futures CVD{' '}
              <span className="dn-tag bear">Δ −395</span>{' '}
              <span className="dn-em">(reset-adjusted across the 07-08 06:21Z /
              BJ 14:21 fut_cvd reset; the raw endpoint delta +6,427 is
              contaminated by that counter reset and is NOT the flow)</span>,
              taker-net <span className="dn-tag bear">−500</span>, big-print{' '}
              <span className="dn-tag bull">+420 BTC</span> —{' '}
              <span className="dn-em">
                spot bought while futures and takers net-sold into a −2% print
                with OI building: a spot-bid-into-perp-sell shape, but now with
                fresh short OI behind it rather than the prior cuts&rsquo;
                de-grossing
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bear">−0.11%</span>, OI{' '}
              <span className="dn-tag bull">−708 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,699</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −481</span>, taker-net{' '}
              <span className="dn-tag bear">−483</span>, big-print{' '}
              <span className="dn-tag bull">+252 BTC</span> — <em>OI came back
              down in the last 4h as spot kept bidding and perps sold: some of
              the intraday short stack has already covered</em>. 1h: price{' '}
              <span className="dn-tag bear">−0.16%</span>, OI{' '}
              <span className="dn-tag bull">−126 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −187</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −103</span>, taker-net{' '}
              <span className="dn-tag bear">−103</span>, big-print{' '}
              <span className="dn-tag bull">+55 BTC</span> — <em>quiet, offered
              into the snap</em>. The read: the 24h built short OI on a spot-bid
              backdrop, but the most recent 4h shows that OI ebbing — the short
              press is not yet a one-way avalanche.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF rolled MORE bearish · 5/9 trend-continuation &ldquo;sell the bounce&rdquo; · fresh 1w water-down + 8h water-up death crosses (2b) · offset by a 12h/1d bottom-div cluster + a re-printed 1M ⚡ TD9 BUY · MA matrix one positive line</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF engine rolled a notch more bearish and now reads
                trend-continuation to the downside
              </span>. The scan is 1 long / 7 short / 2 neutral across 10
              frames (1M the lone long; 15m + 4h neutral), a{' '}
              <span className="dn-tag bear">5/9 cycle-momentum regime (JT ≥ 0) —
              trend-continuation primary</span>, net &ldquo;multi-TF bearish
              resonance, sell the bounce&rdquo; (was 6/9 / higher-TF-bearish,
              short-term-bounce on 07-08). Two fresh crosses printed two bars
              back: the{' '}
              <span className="dn-tag bear">1w water-down death cross (DIF
              −5,878.7)</span> — a weak, below-water death cross, bearish
              continuation — and the{' '}
              <span className="dn-tag bear">8h water-up death cross (DIF
              +483.9)</span> — an early, above-water long-to-short probe.
              Against that, the counter-signal cluster held and deepened: a{' '}
              <span className="dn-tag bull">bottom-div cluster on 12h/1d</span>{' '}
              (six bottom-divs total: 15m/30m/1h/4h/12h/1d) and a re-printed{' '}
              <span className="dn-tag bull">1M ⚡ TD9 BUY at $62,258</span>{' '}
              (oversold reversal hint, lower than the 07-08 print $63,294). The
              1h flipped to a water-down golden cross (5b) even as its TD ran
              Sell 4, and the 1d TD rotated from the 07-08 Sell 7 to a fresh Buy
              2 setup.{' '}
              <span className="dn-em">
                Read straight: the higher-TF trend frames confirmed the
                down-leg (fresh 1w + 8h death crosses), while the oversold
                counter-signals (12h/1d bottom-divs, 1M TD9 BUY, sub-daily Buy
                setups) say the leg is stretched — a bearish-continuation regime
                carrying an oversold reflex, not a clean turn either way.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">62,246</td><td className="num bull">54.6</td><td className="bull">golden (water-up) 7b</td><td className="bull">above ↓62.2k 6b</td><td>Buy 4</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">62,241</td><td className="num">50.9</td><td className="neut">golden (water-dn) 16b</td><td className="bear">below ↑62.5k 41b</td><td>Buy 1</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">62,245</td><td className="num">45.5</td><td className="neut">golden (water-dn) 5b</td><td className="bear">below ↑63.0k 22b</td><td>Sell 4</td><td>BULL reg</td></tr>
                <tr><td>4h</td><td className="num">62,245</td><td className="num">45.7</td><td className="bear">death (water-up) 12b</td><td className="bull">above ↓61.5k 34b</td><td>Buy 7</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">62,245</td><td className="num">49.6</td><td className="bear">death (water-up) 2b</td><td className="neut">in cloud 60.7–62.6k 2b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">62,254</td><td className="num">50.4</td><td className="neut">golden (water-dn) 15b</td><td className="neut">in cloud 62.2–66.1k 1b</td><td>Buy 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1d</td><td className="num">62,241</td><td className="num">46.1</td><td className="neut">golden (water-dn) 8b</td><td className="bear">below ↑65.3k 38b</td><td>Buy 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">62,246</td><td className="num bear">40.7</td><td className="neut">—</td><td className="bear">below ↑70.9k 12b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">62,254</td><td className="num bear">37.2</td><td className="bear">death (water-dn) 2b</td><td className="bear">below ↑98.7k 23b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">62,258</td><td className="num">42.8</td><td className="neut">—</td><td className="bull">above ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (BJ 08:01; rolling
                    latest file, archived verbatim in
                    /opt/desk-note/snapshots/2026-07-09-0005/). Header alerts:{' '}
                    <em>1w water-down death cross 2b (DIF −5,878.7)</em>,{' '}
                    <em>8h water-up death cross 2b (DIF +483.9)</em>,{' '}
                    <em>1M ⚡ TD9 BUY $62,258</em>. Net read{' '}
                    <em>1 long / 7 short / 2 neutral · trend-continuation,
                    sell the bounce · ⚠ higher-TF bottom-div cluster
                    (12h/1d)</em>. Scan spot $62,241, 24h −1.63% (Binance perp
                    kline window; the live-tape 24h reads −2.00% off spot
                    −1440min, a different reference and window), H/L $63,740 /
                    $61,520, qVol $10.15B. Closes are in-progress bars; treat
                    every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the floor loss. Spot $62,194 holds a single
              positive offset —{' '}
              <span className="dn-tag bull">+0.63% above D-SMA20
              $61,805.93</span> — and sits below every other line:{' '}
              <span className="dn-tag bear">D-EMA20 $62,540.43 (−0.55%)</span>,
              the <span className="dn-tag bear">200W floor W-SMA200 $63,062.79
              (−1.38%)</span>, then <span className="dn-tag bear">D-EMA50
              $65,392.40 (−4.89%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $65,654.06 (−5.27%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $68,927.93 (−9.77%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $69,041.90 (−9.92%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $70,102.82 (−11.28%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $70,822.94 (−12.18%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $71,321.22 (−12.80%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $72,224.17 (−13.89%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $74,229.31 (−16.21%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,700.84 (−16.74%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $75,148.05 (−17.24%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $76,151.77 (−18.33%)</span>,{' '}
              then the disused deep weeklies W-EMA50 $80,347.78 (−22.59%),
              W-EMA100 $80,178.10 (−22.43%), W-SMA50 $87,612.54 (−29.01%),
              W-SMA100 $88,589.51 (−29.80%). The near-line set is now a thin
              $61.8k–$63.1k band: D-SMA20 support just beneath, D-EMA20 and the
              200W floor just overhead.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-09 00:05Z (close
                $62,147.10); offsets recomputed against live spot $62,194.00.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. Full 2019→ parquet glob loaded (358 weekly bars),
                so W-SMA150 / W-SMA200 are computable this cut — no seed-only
                disclosure needed. Daily closes: 07-04 $63,114.80, 07-05
                $63,617.10, 07-06 $64,023.60, 07-07 $63,335.40, 07-08
                $62,255.30, 07-09 (in-progress) $62,147.10 — three consecutive
                down-closes, the last two below the cycle floor. 30D
                close-to-close RV 31.72% (logret.std × √365 × 100 on 30 returns
                / 31 closes; 29-return alt 32.25%).
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book stays net-long-gamma but SHALLOWER +80.6M (was +114.2M) · flip $61,094 spot +1.80% above · $63k +16.27M wall offers the bounce · $56–60k −29.3M cluster bids the fade · no meaningful near-dated negative amplifier (only 11JUL26 −0.44M)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book stayed net-long-gamma but shed a third of its
                depth
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+80.6M / 1%</span> (was +114.2M on
              07-08, +157.8M on 07-07 — the run keeps shallowing), still
              dampening. The 0-γ flip is{' '}
              <span className="dn-tag">$61,094</span> (was $61,071) and spot
              $62,194 sits{' '}
              <span className="dn-tag bull">+1.80% above</span> on spot math
              (62,194 / 61,094 − 1 = +1.797%); the GEX file&rsquo;s own
              &ldquo;dist to flip&rdquo; reads{' '}
              <span className="dn-tag bull">+2.3%</span> off its Deribit-index
              $62,498 ($304 above live spot), which is{' '}
              <span className="dn-tag bull">+2.30%</span> (62,498 / 61,094 − 1 =
              +2.298%) — both references positive, spot above the flip on both,
              but the cushion has narrowed from the 07-08 note&rsquo;s +3.87% as
              price fell toward the flip. The wall map straddles spot: the
              heaviest positive wall is{' '}
              <span className="dn-tag bull">$63k +16.27M</span> (just overhead,
              ~+1.3%), backed by{' '}
              <span className="dn-tag bull">$65k +15.75M</span>,{' '}
              <span className="dn-tag bull">$64k +14.69M</span>,{' '}
              <span className="dn-tag bull">$66k +13.10M</span>,{' '}
              <span className="dn-tag bull">$70k +12.16M</span>,{' '}
              <span className="dn-tag bull">$68k +9.98M</span>,{' '}
              <span className="dn-tag bull">$80k +7.68M</span>; the negative
              cluster sits below at{' '}
              <span className="dn-tag bear">$60k −15.96M</span> (heaviest
              negative),{' '}
              <span className="dn-tag bear">$58k −7.06M</span>,{' '}
              <span className="dn-tag bear">$56k −6.32M</span> — the $56–60k band
              totals ≈ −29.3M.{' '}
              <span className="dn-em">
                The book offers a squeeze back into the $63k–$66k positive band
                (which caps the bounce) and bids a fade toward $60k (where the
                negative cluster amplifies a break) — a dampening profile that
                keeps price range-bound between the flip and $63k until an
                expiry or a spot flow breaks it.
              </span>{' '}
              By expiry there is no meaningful near-dated negative amplifier:
              9JUL 0.3DTE{' '}
              <span className="dn-tag">+0.09M</span> (settles 08:00Z today,
              post-snapshot, negligible), 10JUL 1.3 +16.83M, 11JUL 2.3{' '}
              <span className="dn-tag bear">−0.44M</span> (near-dated but
              negligible, non-amplifying), 17JUL 8.3 +18.25M, 31JUL 22.3 +25.35M
              (the heaviest forward chunk, positive), 28AUG 50.3 +4.81M, 25SEP
              78.3 <span className="dn-tag bear">−2.25M</span> (a small forward
              negative), 25DEC 169.3 +1.00M, 26MAR27 260.3 +0.72M. The tiny
              11JUL −0.44M and 25SEP −2.25M negatives are dwarfed by the near
              positive strip; the amplifier that powered the 06-29 break is not
              on the near strip, so the pullback ran without one.
            </p>

            <p>
              IV median across 878 instruments is{' '}
              <span className="dn-tag">42.7%</span> against 30D close-to-close RV
              of <span className="dn-tag">31.72%</span> — chain-level richness{' '}
              <span className="dn-tag">~+11.0pt</span>. Put/Call OI ratio{' '}
              <span className="dn-tag">0.56</span> (call OI 237,380 / put OI
              133,146 BTC) — call-heavy open interest, consistent with the
              positive-gamma wall band overhead.{' '}
              <span className="dn-em">
                A chain-median across N instruments, <em>not</em> a tradable
                spread; expiry-/strike-level vega, skew and term structure
                remain not loaded, so the vol read stays framework-only.
              </span>{' '}
              RV methodology: 30D close-to-close, logret.std × √365 × 100 on the
              last 30 daily log returns (= 31 consecutive daily closes) anchored
              to parquet last bar 2026-07-09 00:05Z; the 29-return alt reads
              32.25%. IV at 42.7% is up from the 07-08 note&rsquo;s regime — the
              chain is pricing the pullback&rsquo;s vol, but the +11.0pt
              richness says realized has not caught the implied.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · rates/dollar firmed risk-off HARD (10Y +7bp to 4.55%, TIPS 2.30% EXTREME, DXY 101.12 EXTREME) · the 10Y put-spread re-grow gate FIRED (&gt;4.53%) and the reclaim-long rates filter dropped to its 4.55% boundary · HY credit loosened further (2.67% RISK-ON) · cross-asset RE-COUPLED to NORMAL (|r| 0.295)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape split: rates and the dollar firmed risk-off hard
                while credit loosened further
              </span>. Dashboard render is 2026-07-08 22:16Z, ~1.8h before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bear">4.55% (+7.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.92</span>, episodic z{' '}
              <span className="dn-tag">+1.47</span> — RISK-OFF, firmed. 10Y TIPS
              real <span className="dn-tag bear">2.30% (+6.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.80</span>, episodic z{' '}
              <span className="dn-tag bear">+1.79</span> — EXTREME RISK-OFF
              episodic. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.19% (−3.0bp)</span> — no tag. HY OAS{' '}
              <span className="dn-tag bull">2.67% (−5.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.41</span>, episodic z{' '}
              <span className="dn-tag bull">−1.24</span> — RISK-ON, loosened
              further. MOVE bond vol{' '}
              <span className="dn-tag">72.4 (+7.0)</span> — neutral, firmer.
              DXY <span className="dn-tag bear">101.12 (+0.27)</span>, regime z{' '}
              <span className="dn-tag bear">+2.34</span> — EXTREME RISK-OFF; Fed
              net liquidity{' '}
              <span className="dn-tag">$5.843T (+0.053T)</span>, episodic z{' '}
              +2.11, tight. US-JP 10Y spread{' '}
              <span className="dn-tag">1.90% (+7.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag">162.15 (+0.06)</span>; USD/CNY 6.7969.{' '}
              <span className="dn-em">
                Net: the put-spread re-grow gate&rsquo;s 10Y leg FIRED for the
                first time of the lineage — 10Y 4.55% is above the 4.53% gate by
                2bp — and the reclaim-long rates filter (10Y &lt; 4.55%) dropped
                to its boundary (4.55% is at, not below, the line, so the filter
                is no longer cleanly true). The HY OAS leg, by contrast, eased
                further from its gate — 2.67% is now 11bp below the 2.78% trigger
                (was 6bp on 07-08). The OR-gate is technically tripped on rates,
                but credit is decisively loose and the book carries no held
                hedge, so the fire is a watch-event, not an auto-roll — and BTC
                is trading on its own floor loss, not on rates this cut.
              </span>{' '}
              JGB monthly 2.65% (stale 68d) carries EXTREME RISK-OFF — do not
              lean on it.
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>Macro indicator</th>
                  <th>level</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>episodic z</th>
                  <th>read</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.55%</td><td className="num bear">+7.0bp</td><td className="num bear">+1.92</td><td className="num">+1.47</td><td className="bear">tight · RISK-OFF · firmed</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.30%</td><td className="num bear">+6.0bp</td><td className="num bear">+2.80</td><td className="num bear">+1.79</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.19%</td><td className="num bull">−3.0bp</td><td className="num">−0.52</td><td className="num">−1.13</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.67%</td><td className="num bull">−5.0bp</td><td className="num bull">−1.41</td><td className="num bull">−1.24</td><td className="bull">loose · RISK-ON</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.515</td><td className="num">−0.01</td><td className="num">−0.06</td><td className="num bull">−2.13</td><td className="neut">neutral · episodic</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">72.4</td><td className="num bear">+7.0</td><td className="num">−0.21</td><td className="num">+0.30</td><td className="neut">neutral · firmer</td></tr>
                <tr><td>DXY</td><td className="num">101.12</td><td className="num bear">+0.27</td><td className="num bear">+2.34</td><td className="num">+1.04</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.843T</td><td className="num bull">+0.053T</td><td className="num">−0.60</td><td className="num">+2.11</td><td className="bear">tight · episodic</td></tr>
                <tr><td>USD/JPY</td><td className="num">162.15</td><td className="num">+0.06</td><td className="num bear">+1.54</td><td className="num">+1.29</td><td className="neut">no tag</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.90%</td><td className="num bear">+7.0bp</td><td className="num bull">−0.78</td><td className="num">+1.47</td><td className="bull">tight</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7969</td><td className="num">+0.00</td><td className="num bull">−1.29</td><td className="num">+1.41</td><td className="neut">no tag</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="num">+1.43</td><td className="stale">monthly (68d) · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.295</span> —{' '}
              <span className="dn-signal">
                a re-coupling: correlations crossed back above the 0.25
                threshold into the NORMAL band
              </span>{' '}
              from the 07-08 note&rsquo;s 0.201 IDIOSYNCRATIC read. BTC&rsquo;s
              listed ties firmed and rotated to the metals + broad-equity
              complex: SILVER{' '}
              <span className="dn-tag">+0.413</span>, PLAT{' '}
              <span className="dn-tag">+0.393</span>, SP500{' '}
              <span className="dn-tag">+0.384</span>, COPPER{' '}
              <span className="dn-tag">+0.374</span>, NQ{' '}
              <span className="dn-tag">+0.374</span>, GOLD{' '}
              <span className="dn-tag">+0.369</span>, JP225{' '}
              <span className="dn-tag">+0.336</span>, CL{' '}
              <span className="dn-tag">−0.328</span>, BRENT{' '}
              <span className="dn-tag">−0.312</span>, NVDA{' '}
              <span className="dn-tag">+0.304</span>. 7d performance:{' '}
              <span className="dn-tag bull">BTC +4.24%</span> (still the complex
              leader on the trailing week off the 06-30 low), NQ{' '}
              <span className="dn-tag bear">−1.87%</span>, SP500{' '}
              <span className="dn-tag bear">−0.07%</span>, JP225{' '}
              <span className="dn-tag bear">−1.87%</span>, NVDA{' '}
              <span className="dn-tag bull">+2.92%</span>, AAPL{' '}
              <span className="dn-tag bull">+5.82%</span> (the one mega-cap ahead
              of BTC), TSLA{' '}
              <span className="dn-tag bear">−6.56%</span> (worst), META{' '}
              <span className="dn-tag bear">−1.32%</span>. Metals mixed: GOLD{' '}
              <span className="dn-tag bull">+0.65%</span>, SILVER{' '}
              <span className="dn-tag bear">−1.82%</span>, PLAT{' '}
              <span className="dn-tag bull">+0.35%</span>. Energy ripped
              (negatively correlated to BTC): CL{' '}
              <span className="dn-tag bull">+9.43%</span>, BRENT{' '}
              <span className="dn-tag bull">+10.77%</span>.{' '}
              <span className="dn-em">
                BTC still leads the equity complex on the trailing 7d (+4.24% vs
                NQ −1.87% = +6.11pt) because the window opens at the 06-30
                capitulation low, but the last three sessions have BTC falling
                while NQ/SP500 chopped — the re-coupling is happening on the way
                down, and BTC&rsquo;s ties to the risk-off metals + equity
                complex are the load-bearing macro read now that the idiosyncratic
                window has closed.
              </span>
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 200W reclaim watch — in-progress week BACK BELOW the floor, re-confirm-break trigger armed intra-week (not yet a confirmed weekly close below) · cover-bounce scout STOOD DOWN (price AND demand pre-conditions now broken) · macro tail — rates leg of the OR-gate fired, credit un-fired, no held hedge · squeeze-cycle QUIET (directional short build, no same-minute re-stack) · no fresh trades</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book stays flat and the primary watch has inverted
              </span>. The reclaim that the last three notes tracked has been
              given back on the in-progress weekly: spot below the floor, the
              07-13 in-progress close below the floor, two daily closes below.
              The re-confirm-break trigger — a completed 07-13 (or later) weekly
              close under the floor — is now armed intra-week, but has{' '}
              <span className="dn-em">not</span> fired (the week does not settle
              until Mon 07-13). The cover-bounce scout, which the 07-08 note
              already stood down on demand, now fails its price pre-condition
              too. The macro tail&rsquo;s rates leg tripped its re-grow gate but
              credit did not confirm and there is no hedge to roll. The trade
              book today is: no shorts, no scout entry, no fresh hedge — wait for
              the weekly close to resolve the floor and for the position book to
              show whether the short build is a press or a one-off.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle-floor watch — reclaim GIVEN BACK on the in-progress weekly: spot $62,194 −1.38% below the $63,062.79 floor, the in-progress 07-13 week $62,147.10 prints −1.45% under it (was +0.90% above on 07-08), two daily closes below (07-08 $62,255.30, 07-09 $62,147.10); the last COMPLETED weekly event stays the 07-06 reclaim ($64,023.60 above); the 06-15 reclaim thesis stays FALSIFIED</span>
              <div className="dn-trade-name">
                200W floor — reclaim handed back intra-week; the re-confirm-break trigger is armed but unconfirmed until the Mon 07-13 weekly close
              </div>
              <div className="dn-thesis">
                The stepped W-MON W-SMA200 floor has climbed to $63,062.79 (from
                the 07-08 note&rsquo;s $62,864 — the floor rises ~$200/wk). The
                07-06 weekly close $64,023.60 reclaimed it (+1.84%) and was the
                first weekly close above since the 06-29 break confirmation; the
                07-08 note showed the in-progress 07-13 week still +0.90% above.
                This cut the pullback dragged the in-progress week back under:
                the 07-13 in-progress close $62,147.10 is −1.45% below the floor,
                spot $62,194 is −1.38% below, and 07-08 / 07-09 daily closes both
                settled beneath it. That is a real intra-week loss of the
                reclaimed level, but it is <em>not</em> a confirmed weekly close
                below — the week settles Mon 07-13, and until then the last
                completed weekly event is the 07-06 reclaim. Status:{' '}
                <em>reclaim intact on the last completed weekly close; in-progress
                week back below; re-confirm-break trigger armed, unconfirmed</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor</span><span className="dn-lvl-v">$63,062.79 = full-history W-MON W-SMA200, recomputed this cut from the 2019→ parquet glob (358 weekly bars, last completed 07-06 week $62,863.98, in-progress 07-13 week $63,062.79). Canonical weekly_200sma.json ABSENT, so ratio percentile / last-event stay unsourced (not fabricated)</span></div>
                <div><span className="dn-lvl-k">break — CONFIRMED (prior)</span><span className="dn-lvl-v bear">06-29 weekly close $60,224.70 settled −3.86% below the then-floor $62,642.79; 06-30 daily close $58,605.40 the deepest</span></div>
                <div><span className="dn-lvl-k">reclaim — last completed weekly close</span><span className="dn-lvl-v bull">07-06 weekly close $64,023.60 (+1.84% above the $62,863.98 floor) — the first weekly close above since the break; still the last SETTLED weekly event</span></div>
                <div><span className="dn-lvl-k">in-progress week — BACK BELOW</span><span className="dn-lvl-v bear">07-13 in-progress close $62,147.10 (−1.45% below the $63,062.79 floor); spot −1.38% below; 07-08 & 07-09 daily closes both beneath the floor</span></div>
                <div><span className="dn-lvl-k">re-confirm-break trigger (armed, unconfirmed)</span><span className="dn-lvl-v bear">a completed 07-13 (or later) weekly close &lt; $63,062.79 re-confirms the break and re-falsifies the recovery — the single line that inverts this watch; the week settles Mon 07-13</span></div>
                <div><span className="dn-lvl-k">re-reclaim (bull invalidation of the break)</span><span className="dn-lvl-v bull">a 07-13 weekly close back above $63,062.79 keeps the reclaim alive — spot needs +1.38% into the settle</span></div>
              </div>
              <div className="dn-gating">
                <b>Watch discipline:</b> the 200W is a weekly-close level, and
                the desk reads it on completed weekly closes — an intra-week
                excursion below is a warning, not a confirmation. The 06-29
                break required a completed weekly close below; the 07-06 reclaim
                required a completed weekly close above; the re-confirm-break
                requires the same. This note flags the in-progress week below
                the floor and arms the trigger, but does not treat the recovery
                as re-falsified until the Mon 07-13 settle prints below. No
                positioning is taken on the intra-week excursion alone.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STOOD DOWN · both pre-conditions now broken — the price pre-condition FAILED this cut (spot below D-EMA20 and below the reclaimed floor) on top of the demand block that was already deteriorating; entry deferred until price re-reclaims the floor AND demand confirms</span>
              <div className="dn-trade-name">
                Cover-bounce scout — price pre-condition failed on the floor loss; demand still net-selling; stood down on both legs
              </div>
              <div className="dn-thesis">
                The scout held a valid price pre-condition through the reclaim
                (spot above the flip, above D-EMA20/D-SMA20, above the floor) but
                was stood down on 07-07 and 07-08 because the demand block never
                confirmed. This cut the price leg failed as well: spot $62,194
                is still above the flip (+1.80%) and above D-SMA20 (+0.63%), but
                it is <em>below</em> D-EMA20 (−0.55%) and <em>below</em> the 200W
                floor (−1.38%) — two of the three price legs are now broken. And
                demand deteriorated further: OI built into the down-leg (+995
                BTC), SM flipped to net-short (−3,116), taker/futures CVD
                net-sold (−500 / reset-adjusted −395), and retail crowded the
                long side (+5.19pt). There is no version of the cover-bounce
                thesis that is live when price has lost the floor and the
                position book is building shorts. The scout stays stood down on
                both price and demand.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">stood down · no entry · re-evaluate only on price re-reclaiming the floor ($63,062.79) AND D-EMA20 ($62,540) on a close basis, PLUS a demand confirmation (OI building on up-moves + taker-net positive + SM rebuilding long)</span></div>
                <div><span className="dn-lvl-k">price pre-condition (2 of 3 legs FAILED)</span><span className="dn-lvl-v bear">flip $61,094 reclaim TRUE (spot +1.80% above) · D-SMA20 $61,806 TRUE (+0.63%) · D-EMA20 $62,540 FALSE (−0.55%) · 200W floor $63,063 FALSE (−1.38%)</span></div>
                <div><span className="dn-lvl-k">demand pre-condition (NOT met — worsened)</span><span className="dn-lvl-v bear">OI +995 BTC (built, not de-grossing) · taker-net −500 / futures CVD −395 (net-sold) · SM net −42.6 → −3,116 (flipped short, needed to rebuild long) · retail +5.19pt to 64.00% (crowded the wrong side)</span></div>
                <div><span className="dn-lvl-k">engine confirmation</span><span className="dn-lvl-v bear">NOT true — 1 long / 7 short / 2 neutral, 5/9 trend-continuation &ldquo;sell the bounce&rdquo;; fresh 1w + 8h death crosses, offset by 12h/1d bottom-divs and a 1M ⚡ TD9 BUY</span></div>
                <div><span className="dn-lvl-k">stop (if ever triggered)</span><span className="dn-lvl-v bear">a completed weekly close &lt; $63,062.79 re-confirms the break and ends the recovery read entirely</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> the scout was never a price-only trade — it
                needed a demand print to translate the reclaim into a long. With
                the reclaim now handed back intra-week, the price case has
                inverted: a scout long here would be buying under the cycle floor
                into a positive-gamma dealer book that bids the fade toward $60k,
                against a smart-money short build. The correct entry is a
                re-reclaim of the floor + D-EMA20 on a close basis with demand
                confirming — not a dip-buy under a lost level.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · the 10Y leg of the put-spread re-grow OR-gate FIRED for the first time (10Y 4.55% &gt; the 4.53% gate) and the reclaim-long rates filter (10Y &lt; 4.55%) dropped to its boundary; the HY OAS leg eased FURTHER from its gate (2.67% vs 2.78%, now 11bp below); no held hedge, credit un-fired — the fire is a watch-event, not an auto-roll</span>
              <div className="dn-trade-name">
                Downside put-spread — rates leg of the OR-gate tripped, credit leg did not; no position on, so no roll — flagged, not acted
              </div>
              <div className="dn-thesis">
                No downside hedge is on. The OR-gate that would arm one is now
                split: the 10Y leg FIRED — 10Y 4.55% (+7bp) is above the 4.53%
                gate by 2bp, the first time of the lineage — while the HY OAS
                leg eased further to 2.67% (−5bp), now 11bp below its 2.78% gate
                (was 6bp on 07-08). At the same time the reclaim-long rates
                filter (10Y &lt; 4.55%) dropped to its boundary (4.55% is at, not
                below, the line). Because the book carries no hedge and credit is
                decisively loose (HY OAS regime z −1.41, RISK-ON), the rates-leg
                fire is a watch-event rather than an auto-roll: a single-leg
                OR-gate trip on rates, with credit un-confirmed, does not by
                itself justify growing a tail — and BTC is trading on its own
                floor loss this cut, not on rates.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · OR-gate split — 10Y leg FIRED (4.55% &gt; 4.53%), HY OAS leg un-fired (2.67% &lt; 2.78%, 11bp below)</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (10Y leg FIRED)</span><span className="dn-lvl-v bear">10Y &gt; 4.53% close — now TRUE at 4.55% (+2bp over); the HY OAS &gt; 2.78% leg stays un-fired at 2.67%</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bear">10Y &lt; 4.55% close — at the boundary (4.55%), no longer cleanly TRUE; a further tick up turns it FALSE</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates (HY OAS &gt; 2.78%, 10Y &gt;
                4.53%) are discretionary watches set as the levels drifted, not
                backtested breakpoints, and the OR-gate firing on a single leg
                (rates) with the other (credit) easing away is a weaker signal
                than a two-leg confirmation. If a hedge were ever armed on a
                two-leg fire it would roll to a near forward (e.g. 17JUL 8.3DTE
                or 24JUL 15.3DTE), but the current dealer strip is net-long-gamma
                with no meaningful near-dated negative amplifier (only 11JUL26
                −0.44M, negligible), so a fresh tail would not carry an
                amplifier tailwind. No hedge this cut.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · QUIET this cut for the re-stack signature — the SM feed updates smoothly (no discrete same-minute Δshort &gt; 0 + Δlong &lt; 0 step) — but the 24h NET move was a genuine DIRECTIONAL short build (long −1,765, short +1,309, net flat → −3,116), not the two-sided flush of the prior cut</span>
              <div className="dn-trade-name">
                Squeeze-cycle — no qualifying same-minute re-stack, but the 24h net flow was a directional short build with OI growing (the mirror of the prior de-grossing cuts)
              </div>
              <div className="dn-thesis">
                The squeeze-cycle framework watches for a re-stack hostile-2
                signature (Δshort &gt; 0 + Δlong &lt; 0 in the same minute) as a
                discrete extension event; its 7-day BJ 13–15 calendar prior was
                falsified on 05-31 and remains dead. This cut the SM feed updates
                smoothly (289 distinct states across the 24h), so no single-minute
                re-stack step printed. But the net 24h flow is unambiguously
                directional: SM net stepped flat (−42.6) → net-short (−3,116) on a
                long flush (−1,765) and a short add (+1,309) while OI grew +995
                BTC — the opposite of the two-sided de-gross the 07-07 and 07-08
                notes described. Read as a signal in itself: smart money built a
                net-short into the floor loss with retail crowding the long side.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">live feed · no qualifying same-minute hostile-2 step this cut (feed updates smoothly) · the 24h SM move was a directional short build (net flat → −3,116, OI +995), not a two-sided flush</span></div>
                <div><span className="dn-lvl-k">SM net path (24h)</span><span className="dn-lvl-v bear">−42.6 (24h-ago) → +1,470 max @ 07-08 02:41Z (BJ 10:41) → −4,175 min @ 07-08 16:26Z (BJ 00:26 07-09) → −3,116 snap</span></div>
                <div><span className="dn-lvl-k">forward gating</span><span className="dn-lvl-v">read each fresh Δnet ≤ −3k print as a signal (no time prior); a completed weekly close below the floor + SM net extending short is the affirmative re-confirm-break read; SM net rebuilding toward flat with price re-reclaiming the floor is the recovery-survives read</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the same-minute re-stack signature
                is a tape read, not a base rate — the calendar prior is dead. A
                smooth directional short build (this cut) is a different animal
                from a discrete hostile-2 step; both are meaningful when they
                print, but the smooth build is read as position-flow confirmation
                of the down-leg rather than as a squeeze-ignition surrogate.
                Treat any fresh discrete step as a signal, not as a schedule.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the reclaim was handed back intra-week (trigger armed, unconfirmed) · the tape turned genuinely bearish (OI built, SM short, retail long) · the dealer book dampens the range · the scout is stood down on both legs · book FLAT — wait for the Mon 07-13 weekly close</span>
            </h2>

            <p>
              Of the 07-08 decision conditions: the 200W reclaim watch has{' '}
              INVERTED on the in-progress weekly (spot and the 07-13 in-progress
              close back below the floor; the re-confirm-break trigger is armed
              but unconfirmed until the Mon 07-13 settle); the cover-bounce scout
              DID NOT TRIGGER and this cut FAILED its price pre-condition on top
              of the demand block (floor lost, D-EMA20 lost); the macro re-grow
              OR-gate&rsquo;s 10Y leg FIRED for the first time (4.55% &gt; 4.53%)
              while the HY OAS leg eased further away and the reclaim-long rates
              filter dropped to its boundary; the squeeze-cycle hostile-2 watch
              stayed QUIET on the re-stack signature but the 24h SM flow turned a
              directional short build; the demand block that the prior note
              needed for a scout DETERIORATED again (OI built, SM short, CVD/taker
              net-sold, retail crowded long). <em>The one condition that fired
              cleanly is the intra-week floor loss — everything else is the tape
              confirming a down-leg rather than a discrete trigger.</em> The
              conditions re-set around a lost-intra-week floor, a bearish
              position book, a dampening dealer strip, and a flat trade book:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>200W re-confirm-break (PRIMARY · armed, unconfirmed)</td><td className="bear">a completed 07-13 (or later) weekly close &lt; $63,062.79 (in-progress week already −1.45% below)</td><td>re-confirms the break, re-falsifies the recovery; the single line that inverts the watch — but wait for the Mon 07-13 settle, no positioning on the intra-week excursion</td></tr>
                <tr><td>200W re-reclaim (recovery survives)</td><td className="bull">a 07-13 weekly close back above $63,062.79 (spot needs +1.38% into the settle)</td><td>keeps the reclaim alive on the completed weekly close; re-arms the scout&rsquo;s price pre-condition</td></tr>
                <tr><td>Cover-bounce scout (long) — stood down on BOTH legs</td><td className="bear">price: re-reclaim floor $63,063 AND D-EMA20 $62,540 on close · demand: OI building on up-moves + taker-net positive + SM rebuilding long</td><td>no entry until price re-reclaims the floor AND demand confirms; a dip-buy under the lost floor is not the trade</td></tr>
                <tr><td>Short re-arm (low base rate)</td><td className="bear">a completed weekly close below the floor AND SM net extending &lt; −5k AND a daily close &lt; D-SMA20 $61,806</td><td>would re-arm a short toward the $60k / $56k negative-gamma cluster; base rate low — dealer book bids the fade, no meaningful near-dated amplifier (only 11JUL26 −0.44M)</td></tr>
                <tr><td>Macro tail re-grow (OR-gate SPLIT)</td><td className="bear">10Y &gt; 4.53% FIRED (4.55%); HY OAS &gt; 2.78% un-fired (2.67%, 11bp below)</td><td>single-leg rates fire with credit un-confirmed and no held hedge → flag only; a two-leg fire would roll a tail to 17JUL/24JUL forward</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">10Y &lt; 4.55% close — at the boundary (4.55%), no longer cleanly TRUE</td><td>the rates permission for a reclaim-long has lapsed to neutral; needs both a BTC-internal pivot AND rates back below 4.55%</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (FALSIFIED calendar)</td><td className="stale">no same-minute re-stack this cut; 7-day BJ 13–15 base rate dead</td><td>read each fresh discrete Δnet ≤ −3k as a signal in itself — no time prior; the smooth directional short build is down-leg confirmation, not a squeeze surrogate</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the Mon 07-13 weekly close settles below the $63,062.79
                floor — re-confirming the break and re-falsifying the recovery —
                or claws back above it to keep the reclaim alive on the completed
                weekly close
              </span>. Until that settle prints, the intra-week loss of the floor
              is a warning, not a confirmation, and the book takes no positioning
              on the excursion alone. This note runs as written: the 200W watch
              is armed to re-confirm the break but unconfirmed, the cover-bounce
              scout is stood down on both price and demand, the macro tail&rsquo;s
              rates leg fired without credit confirming, and the squeeze-cycle
              framework reads the 24h as a directional short build rather than a
              discrete re-stack. The tape turned genuinely bearish this cut — OI
              built, SM flipped short, retail crowded the long side, funding held
              positive — but the dealer book still dampens the range between the
              flip and $63k, and the last completed weekly close is still a
              reclaim. The right read for the next 24h is{' '}
              <em>patient — the floor is decided on the weekly close, not the
              intra-week wick</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit — all findings resolved
            </span>
            <b>Status:</b> this is the v2 EN desk note, promoted after the STAGE
            B codex hostile-but-fair audit (verdict PASS-WITH-NOTES · 0 CRITICAL
            · 0 MAJOR · 4 MINOR) plus the supplementary ask-deepseek numeric
            second-pass (2 CRITICAL · 1 MINOR, adjudicated by STAGE C on
            recompute). Findings and the grep-closure verification are recorded
            below; the full record is at{' '}
            <code>audits/2026-07-09-desk-note.md</code>. Each finding was fixed
            everywhere its wrong-claim pattern appeared, not only at the cited
            lines (the 06-08/06-09 semantic-residue failure mode), verified by
            re-grepping the whole EN file to zero stale hits.{' '}
            <b>DN-001 (MINOR · MTF category count):</b> searched
            &ldquo;8 short / 1 long&rdquo;, &ldquo;1 neutral across&rdquo; —
            hits before 1, hits after 0 — RESOLVED; prose now reads
            &ldquo;1 long / 7 short / 2 neutral across 10 frames (1M the lone
            long; 15m + 4h neutral)&rdquo;, matching the artifact and the source
            note.{' '}
            <b>DN-002 (MINOR · retail snapshot on 08:06 not the 08:05 pin):</b>{' '}
            searched &ldquo;63.93&rdquo;, &ldquo;36.07&rdquo;,
            &ldquo;5.12pt&rdquo; — hits before 5, hits after 0 — RESOLVED;
            snapshot &ldquo;now&rdquo; retail is the BJ 08:05 pin 64.00 / 36.00,
            and the 24h move is 58.81 → 64.00 (+5.19pt) against the disclosed
            08:06 sampled 24h-ago base.{' '}
            <b>DN-003 (MINOR · 24h-window convention under-disclosed):</b> the
            manifest live-tape flag now states that &ldquo;now&rdquo; values use
            the exact BJ 08:05 pin while 24h deltas span the last 1441 sampled
            rows (24h-ago = BJ 08:06) because the BJ 14:21 futures-CVD reset
            minute is duplicated — RESOLVED (disclosure added).{' '}
            <b>DN-004 (MINOR · omitted near-dated negative expiry):</b> searched
            &ldquo;no near-dated negative amplifier&rdquo;,
            &ldquo;no near-dated amplifier&rdquo;, &ldquo;the only forward
            negative&rdquo; — hits before 5, hits after 0 — RESOLVED; every
            amplifier claim now reads &ldquo;no meaningful near-dated negative
            amplifier (only 11JUL26 −0.44M, negligible)&rdquo; and the expiry
            strip lists 11JUL 2.3 −0.44M explicitly.{' '}
            <b>deepseek CRITICAL-1 (06-29 break %):</b> recomputed
            (62,642.79 − 60,224.70) / 62,642.79 = 3.86%; searched
            &ldquo;−4.20%&rdquo; — hits before 1, hits after 0 — RESOLVED, the
            break print now reads −3.86%.{' '}
            <b>deepseek CRITICAL-2 (cross-block SM prior contradiction):</b>{' '}
            adjudicated on recompute — the tape 24h-ago (BJ 08:06 sampled,
            per the disclosed convention) is −42.6, so the note-to-note −34 /
            step −3,082 figures were unified to the tape values −42.6 / step
            −3,073 (= −3,115.7 − (−42.6)); searched &ldquo;−34&rdquo;,
            &ldquo;−3,082&rdquo; — hits before 6 / 1, hits after 0 / 0 —
            RESOLVED, a single prior reference now runs through the whole file.{' '}
            <b>deepseek MINOR (snap-net rounding −3,115.7 vs −3,116):</b>{' '}
            adjudicated as an intentional precise-in-data-cell (−3,115.7,
            matching live_db row 70176) / rounded-in-prose (−3,116) convention,
            the same treatment as long 10,185.4 / short 13,301.2 — no change.{' '}
            Snapshot anchor 2026-07-09 00:05Z (live tape t=&ldquo;07-09
            08:05&rdquo; BJ); rolling artifacts archived in
            /opt/desk-note/snapshots/2026-07-09-0005/ so the audit re-reads the
            same bytes.{' '}
            <b>Build note (INFO):</b> per the lineage, this server&rsquo;s Node
            version may block a full <code>next build</code>; the build proxy is{' '}
            <code>npx --no-install tsc --noEmit</code>, run in the STAGE B/E
            path.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-07-09 00:05Z) with
            section-level provenance disclosed in the manifest band above; the
            macro Tier-1 panel render is 2026-07-08 22:16Z (~1.8h before
            snapshot) and some inputs are explicitly stale or pending and
            flagged as such. Levels, sizes, and conditions are illustrative of
            the desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future
            tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The reclaim was handed back intra-week and the tape turned
                genuinely bearish — OI built, SM flipped short, retail crowded
                the long side. But the floor is decided on the weekly close, not
                the wick. Patient into Mon 07-13.
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
            v2 · 2026-07-09 00:42Z · 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
