import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-14 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-14',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-14' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260714() {
  await requireViewer('/desk/2026-07-14');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-14 · v2</span>
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
              <span className="dn-big">$62,318</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−2.44%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-14 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-14 00:05Z (snapshot pin, tape row t=&ldquo;07-14 08:05&rdquo; BJ)</td>
                  <td className="dn-flag">
                    fresh · 1-min · file tail at snapshot = pin · tape `t` is
                    BJ (UTC+8); 00:05Z = t &ldquo;07-14 08:05&rdquo; · this snap
                    lands 24h after the Mon 07-13 00:00Z weekly settle · 14JUL
                    0.3DTE option settle lands 08:00Z (~8h forward of this snap)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-14 00:01Z scan (BJ 08:01)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates hourly) ·
                    archived to snapshots/2026-07-14-0005/ · ~4-min stale vs
                    snapshot anchor · in-progress bars
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-14 00:01Z snapshot</td>
                  <td className="dn-flag">
                    archived to snapshots/2026-07-14-0005/ · 838 instruments ·
                    Deribit idx $62,560 vs live $62,318 ($242 above) · 14JUL
                    0.3DTE −4.40M settles 08:00Z today (~8h forward of this
                    snap) · median IV 42.4% pre-14JUL-settle from this 00:01Z file
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-14 00:01Z
                  </td>
                  <td className="dn-flag">archived to snapshots/2026-07-14-0005/ · 7d 1h bars · 22 assets · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-13 22:16Z render</td>
                  <td className="dn-flag">
                    archived to snapshots/2026-07-14-0005/ · ~1.8h render lag ·
                    FRED Tier-1: 10Y 4.56% (+2bp, above the 4.55% filter), TIPS
                    2.32%, HY OAS 2.69%, MOVE 77.8 (+8.22), DXY 101.28, Fed net
                    liq $5.958T
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-14 00:06Z</td>
                  <td className="dn-flag">
                    ~1-min post-anchor vs snapshot anchor (parquet 00:06Z bar
                    is one minute AFTER the 00:05Z live pin, intentionally used
                    for the freshest MA/RV cut) · offsets recomputed vs live
                    spot · weekly on Binance W-MON convention (weekly close
                    settles Mon 00:00Z) · full matrix computable (359 weekly bars
                    across 8 yearly parquet files 2019–2026)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W-watch JSON</td>
                  <td className="dn-v-cell">weekly_200sma.json · NOT PRESENT this run</td>
                  <td className="dn-flag">
                    200W watch unavailable — file absent; fall back to matrix
                    W-SMA200 $63,066 (no fabricated percentile / last-event)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale · monthly (73d) · do not treat as live</td>
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
              <span className="dn-v">+8.86%</span>
              <span className="dn-src">live · raw 0.008092 × 1095 = +8.86% · RE-FIRED toward the cap · 24h mean +8.01% · cap occupancy 535 / 1441 sampled rows = 37.1% (one continuous segment pinned at the +10.95% cap from 2026-07-13 14:04Z / BJ 22:04 through 2026-07-13 22:58Z / BJ 07-14 06:58, ~8.9h) · zero negative rows · min +1.68% ann @ 2026-07-13 00:10Z/00:11Z / BJ 08:10</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+1.71% → +8.86% (+7.15pt, back near the cap)</span>
              <span className="dn-src">24h range +1.68% / +10.95% · funding was near its prior-snap low (+1.71% at the prior snap; the exact 24h low is +1.68% ann @ 2026-07-13 00:10Z/00:11Z), then ran to the +10.95% cap and sat there ~8.9h as retail piled into longs and price fell — trapped longs paying the cap, not a demand-led bid</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+6.49% (+6,531 BTC)</span>
              <span className="dn-src">live · 107,207 BTC (+6,531 off the prior 100,676 BTC) · OI BUILT across the window (peak 107,755) — this is fresh gross short positioning, the opposite of the −693 de-gross on 07-13; SM stacked shorts and OI expanded with them</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">64.84 / 35.16</span>
              <span className="dn-src">live_db `mkt_long_pct` · re-crowded +7.28pt from 57.56% (24h ago) — retail piled INTO longs as price fell through the floor, the mirror of smart money tripling its short; the most crowded retail long of the recovery</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−13,426 (net SHORT, TRIPLED the short)</span>
              <span className="dn-src">live · long 11,119 − short 24,545 · short added +9,941, long +915 over 24h — the fresh short build of 07-13 accelerated into a short slam, the deepest net-short of the entire recovery</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 07-13 note</span>
              <span className="dn-v bear">−4,426 → −13,426 (−9,000 net, 203.3% of prior)</span>
              <span className="dn-src">|Δ|/prior_net = |−13,426 − (−4,426)| / 4,426 = 203.3% · the net roughly tripled short (−4,426 → −13,426 ≈ 3.03×) · one discrete re-stack step @ 2026-07-13 07:36Z / BJ 15:36 (Δnet −5,850, Δlong +613 / Δshort +6,463 same minute)</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.4% / 30.02%</span>
              <span className="dn-src">GEX median IV · 838 inst. (pre-14JUL-settle from the 00:01Z file) · chain-median across instruments, NOT a tradable spread · richness ~+12.4pt · RV 30 close-to-close returns</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+1.29% (above)</span>
              <span className="dn-src">flip $61,527 (was $61,687 · −$160) · vs live spot $62,318.23 (+1.29%; 62,318.23/61,527 − 1 = 1.286%) / GEX file Deribit idx $62,560 (+1.68%; 62,560/61,527 − 1 = 1.679%, file rounds +1.7%) — both refs positive but the cushion collapsed from +3.79% · aggregate GEX +37.7M net-long-gamma (was +96.6M — a −58.9M de-gamma)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The re-short won: the floor is handed back on the print, one day
                after it settled
              </span>. The 07-13 note flagged the single line that would rewrite
              it — does spot demand overpower the fresh SM short, or does the
              re-short fade the reclaim the day after it confirmed on the weekly?
              The tape answered decisively for the short. Smart money did not
              hold −4,426; it slammed to{' '}
              <span className="dn-tag bear">−13,426 (short +9,941, long +915,
              ≈3.03× the prior net) on a discrete re-stack step @ 2026-07-13
              07:36Z / BJ 15:36 (Δnet −5,850 in one minute)</span>, OI BUILT{' '}
              <span className="dn-tag bear">+6,531 BTC (+6.49%)</span> as the
              shorts stacked, retail piled the other way{' '}
              <span className="dn-tag bear">57.56% → 64.84% (+7.28pt)</span>, and
              funding re-fired to the{' '}
              <span className="dn-tag bear">+10.95% cap</span> (37.1% occupancy,
              trapped longs paying). Price broke the{' '}
              <span className="dn-tag bear">$63,066 W-SMA200 floor</span> on the
              print — spot $62,318 is −1.19% below it, the 07-13 daily close
              $62,307.00 is the first daily close beneath the floor since 07-08,
              and the low tagged{' '}
              <span className="dn-tag bear">$61,850 @ 2026-07-13 18:20Z</span>.
              The dealer book de-gammaed hard{' '}
              <span className="dn-tag bear">+96.6M → +37.7M</span> (the fourth
              straight de-gamma), the flip cushion collapsed from +3.79% to{' '}
              <span className="dn-tag bull">+1.29%</span>, and the first meaningful
              near-dated negative amplifier appeared on the strip{' '}
              <span className="dn-tag bear">(14JUL 0.3DTE −4.40M, settles 08:00Z
              today)</span>. The MTF engine reads{' '}
              <span className="dn-tag">5/9 cycle-reversal &ldquo;sell the
              bounce&rdquo;</span> with the overall tally 1 long / 8 short / 1
              neutral. The cover-bounce scout is dead: its price pre-condition,
              TRUE the entire recovery, FAILED — spot lost the D-EMA20 $62,836
              and the floor. The last 4h bounced off $61,850 on spot buying, but
              that is a reflex off a broken level into a maximally-short SM book,
              not a demand base. The book stays FLAT — the scout is void, and a
              short is late into a −13,426 SM short with the dealer flip only
              +1.29% beneath spot; the question now is squeeze-back-through-the-
              floor vs a Mon 07-20 weekly close that re-confirms the break.
            </p>

            <p>
              BTC prints <span className="dn-tag">$62,318</span> live,{' '}
              <span className="dn-tag bear">−2.44%</span> on 24h — a decisive
              down-day that gave back the whole recovery cushion — inside a{' '}
              <span className="dn-tag">$64,318 / $61,850</span> range (high @
              2026-07-13 00:23Z / BJ 08:23, low @ 2026-07-13 18:20Z / BJ 07-14
              02:20).{' '}
              <span className="dn-signal">The reclaim is handed back on the
              print</span>: spot $62,318 sits −1.19% below the $63,066 W-SMA200
              floor and −0.85% below the settled-basis W-SMA200 $62,852, the
              07-13 daily close <span className="dn-tag bear">$62,307.00</span>{' '}
              is the first daily close beneath the floor since 07-08, and the
              in-progress 07-14 close at parquet last bar{' '}
              <span className="dn-tag bear">$62,241.00</span> is lower still. The
              in-progress 07-13→07-20 weekly is marking{' '}
              <span className="dn-tag bear">$62,241.00, −1.31% under the
              floor</span> — the re-confirm-break trigger is armed intra-week
              again, but it is NOT a settled weekly event until Mon 07-20; the
              last completed weekly stays the 07-06 bar $63,750.00 that confirmed
              the reclaim on Mon 07-13, so this is a same-week handback of a
              just-confirmed floor, not yet a settled re-break. The daily closes
              read 07-10 <span className="dn-tag bull">$64,129.50</span> (the
              recovery high), 07-11 $63,783.00, 07-12 $63,750.00 (the settled
              weekly close), 07-13{' '}
              <span className="dn-tag bear">$62,307.00</span> (back below the
              floor), 07-14 in-progress{' '}
              <span className="dn-tag bear">$62,241.00</span>. The MA matrix has
              lost two of its three positive lines: spot holds{' '}
              <span className="dn-tag bull">+0.67% over D-SMA20 $61,904</span>{' '}
              and the flip below, but has fallen{' '}
              <span className="dn-tag bear">−0.82% under D-EMA20 $62,836</span>{' '}
              and <span className="dn-tag bear">−1.19% under the W-SMA200 floor
              $63,066</span>, with the{' '}
              <span className="dn-tag bear">D-SMA50 $64,317 (−3.11%)</span> /{' '}
              <span className="dn-tag bear">D-EMA50 $65,029 (−4.17%)</span> cap
              re-widened overhead.{' '}
              <span className="dn-em">
                The structural question the whole recovery hung on resolved to
                the bearish side: the floor did not hold the follow-through. The
                reclaim confirmed on Monday&rsquo;s weekly close and was handed
                back on Tuesday&rsquo;s daily. This is not digestion above the
                floor anymore; it is a fresh break below it, driven by a smart
                money short that tripled while retail crowded the trapped long.
              </span>{' '}
              The cover-bounce scout&rsquo;s price pre-condition (spot above
              flip AND D-EMA20 AND D-SMA20 AND floor) — TRUE on all four legs the
              entire recovery — has FAILED: spot is now below D-EMA20 and below
              the floor, 2 of 4 legs broken, so the scout is void rather than
              deferred.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · the fresh SM short accelerated into a short slam (net roughly tripled on a discrete re-stack step) · OI BUILT +6.49% · retail piled into longs · funding re-fired to the cap · spot-sold / perp-sold-hard into a building book</span>
            </h2>

            <p>
              <span className="dn-signal">
                The day after the re-short printed, smart money tripled it
              </span>. SM net is <span className="dn-tag">−13,426</span> vs the
              07-13 note&rsquo;s −4,426 — that is a{' '}
              <span className="dn-em">−9,000 short build, 203.3% of the prior
              net</span> (|−13,426 − (−4,426)| / 4,426 = 203.3%; the net roughly
              tripled short, −4,426 → −13,426 ≈ 3.03×). The components: long_btc{' '}
              <span className="dn-tag bear">10,204 → 11,119 (+915)</span> and
              short_btc <span className="dn-tag bear">14,604 → 24,545
              (+9,941)</span> — the short side nearly doubled while the long side
              barely moved, a one-sided short slam, not a two-sided re-gross.{' '}
              <span className="dn-em">
                (Long and short legs are whole-BTC rounded; the live sm_net field
                is fractional −4,400.3 (24h ago) → −13,426.1 (now), so a
                whole-BTC long−short reconstructs the net to within ±1 BTC — the
                −4,426 / −13,426 nets are the authoritative tape values, with
                −4,426 the prior-note pin.)
              </span> The build printed one{' '}
              <span className="dn-signal">discrete re-stack step</span>: at{' '}
              <span className="dn-tag bear">2026-07-13 07:36Z (BJ 07-13 15:36)</span>{' '}
              SM net stepped −5,850 in a single minute (Δlong +613, Δshort
              +6,463, spot $63,056) — the largest single-minute step of the
              entire recovery, a short-slam signature (short_btc 14,155 → 20,619
              in one minute) that drove SM net −3,858 → −9,708, then a further
              grind to the snap. SM net traded from the peak (least short){' '}
              <span className="dn-tag">−3,374 @ 2026-07-13 03:41Z (BJ 11:41)</span> —
              the last breath of the completed cover — straight down to the
              trough{' '}
              <span className="dn-tag bear">−13,426 @ 2026-07-14 00:01Z (BJ 08:01)</span>,
              essentially the snap itself.{' '}
              <span className="dn-em">
                The signature matters: a fresh short build that tripled the net
                on a discrete step, with the short side carrying the whole move,
                is the most aggressive smart-money short of the lineage. Smart
                money did not fade the reclaim quietly — it slammed the short the
                minute the weekly confirmed, and pressed it into a floor break.
              </span>
            </p>

            <p>
              The leverage side is a trapped-long print, not a demand press.{' '}
              <span className="dn-signal">
                Funding re-fired to the cap
              </span>: live <span className="dn-tag">+8.86% ann</span> (raw
              0.008092 × 1095), 24h mean{' '}
              <span className="dn-tag">+8.01%</span> — but the shape is the
              tell: funding sat at its 24h low{' '}
              <span className="dn-tag">+1.68% @ 2026-07-13 00:10Z (BJ 08:10)</span>,
              then ran to the <span className="dn-tag">+10.95% cap</span> and
              pinned there ~8.9h (one continuous segment from 2026-07-13 14:04Z /
              BJ 22:04 through 2026-07-13 22:58Z / BJ 07-14 06:58) as price fell,
              easing to +8.86% only into the snap. Cap occupancy{' '}
              <span className="dn-tag bear">535 / 1441 sampled rows (37.1%)</span>,
              zero negative rows (still no short-pay print). This is not a demand
              bid paying up — it is retail longs trapped above a breaking floor,
              paying the cap to the smart-money short on the other side. OI Δ{' '}
              <span className="dn-tag bear">+6,531 BTC (+6.49%)</span> over 24h
              (from 100,676 to 107,207 BTC, peak 107,755) — OI BUILT with the
              short slam, the opposite of the −693 de-gross on 07-13; this is
              fresh gross positioning, not a book unwinding. Retail{' '}
              <span className="dn-tag bear">mkt_long_pct 64.84%</span> re-crowded
              +7.28pt from 57.56% — the most crowded retail long of the recovery,
              the exact mirror of smart money tripling its short. Perp trades a{' '}
              <span className="dn-tag bear">−$83.14 discount</span> to spot at the
              snap (1h mean −$78.24; 4h mean −$69.09; 24h mean −$61.46, range
              −$184.49 / +$69.22 — basis sat at a discount almost the whole
              window as perps sold). 1-min aggressor skew snap{' '}
              <span className="dn-tag bull">+3.3</span> (1h mean +1.25 — a
              near-balanced book at the snap, consistent with the 4h reflex bid).{' '}
              <span className="dn-em">
                Funding at the cap + OI building + SM tripling its short + retail
                max-long: this is the cleanest distribution shape of the lineage.
                The only crowded long is retail, paying the cap into a breaking
                floor, and the professional book is short against it with size.
              </span>
            </p>

            <p>
              Windowed flow is <em>spot-sold and perp-sold-hard into a building
              book over 24h, with a 4h reflex bid off the low</em>. 24h: price{' '}
              <span className="dn-tag bear">−2.44%</span>, OI{' '}
              <span className="dn-tag bear">+6,531 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −1,322</span>{' '}
              <span className="dn-em">(no cb_cvd reset in the window)</span>,
              futures CVD{' '}
              <span className="dn-tag bear">Δ −3,496</span>, big-print{' '}
              <span className="dn-tag bear">−2,444 BTC / 994 prints</span>,
              taker-net <span className="dn-tag bear">−3,496</span> —{' '}
              <span className="dn-em">
                spot sold, futures sold hard, big-prints net-sold, all into a
                +6.49% OI build; the −2.44% print is an aggressive short being
                stacked, not a passive de-lever — the mirror of 07-13&rsquo;s
                spot-bid / perp-sold / shrinking-book shape
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bull">+0.03%</span>, OI{' '}
              <span className="dn-tag">+123 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,654</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +105</span>, big-print{' '}
              <span className="dn-tag bull">+99 BTC / 137 prints</span>,
              taker-net <span className="dn-tag bull">+105</span> —{' '}
              <em>a reflex bid off the $61,850 low, spot leading, OI near-flat</em>.
              1h: price <span className="dn-tag bull">+0.57%</span>, OI{' '}
              <span className="dn-tag">−49 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +951</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +677</span>, big-print{' '}
              <span className="dn-tag bull">+319 BTC / 45 prints</span>,
              taker-net <span className="dn-tag bull">+677</span> —{' '}
              <em>the reflex continued into the snap, spot and perps both bid, OI
              flat</em>.{' '}
              <span className="dn-em">
                The 4h and 1h windows use the same inclusive sampled-row
                convention as the 24h window (start minute = the prior sampled
                anchor row, inclusive endpoint), not exact 240/60-minute
                intervals; an exact-minute window shifts each CVD/OI figure by
                tens of BTC without changing the sold-24h / reflex-bid-4h shape.
              </span>{' '}
              The 24h flow is unambiguous distribution — spot AND futures AND
              big-prints all net-sold into a building short book. The 4h/1h
              reflex bid off $61,850 is a bounce off a broken level, not a demand
              base: it is buying into a maximally-short SM book with the floor
              overhead, the setup for a squeeze OR a lower high, decided by
              whether SM covers or presses.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · engine 5/9 cycle-reversal (sell the bounce) but overall 1 long / 8 short / 1 neutral · higher-TF bottom-div cluster 1d/3d/1w + 1M ⚡TD9 BUY vs a near-term top-div cluster of six · fresh 1h + 3d water-down golden crosses · 12h water-up death cross · floor lost on the daily close</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF engine holds its 5/9 cycle-reversal regime
                (JT&lt;0 · mean-reversion / bounce-favored) but the net tag is
                &ldquo;multi-TF resonance bearish · sell the bounce&rdquo;
              </span>{' '}
              — the overall tally rolled hard to 1 long / 8 short / 1 neutral
              (was 1 / 2 / 7 on 07-13). The divergence tally stayed two-sided:
              top-div 6 (30m/1h/4h/8h/12h/1d) against bottom-div 6
              (15m/30m/1h/1d/3d/1w), with the engine still flagging a{' '}
              <span className="dn-tag bull">higher-TF bottom-div cluster
              (1d/3d/1w)</span> and a persistent{' '}
              <span className="dn-tag bull">1M ⚡TD9 BUY $62,328</span>. The
              crosses split by speed: the fast frames flipped to fresh water-down
              golden crosses off the reflex bid —{' '}
              <span className="dn-tag bull">1h water-down golden cross (just
              printed, 1b)</span> and{' '}
              <span className="dn-tag bull">3d water-down golden cross (just
              printed, 1b)</span> join the standing{' '}
              <span className="dn-tag bull">15m 18b / 30m 8b / 1d 13b golden
              crosses</span> — while the mid frames rolled bearish:{' '}
              <span className="dn-tag bear">12h water-up death cross (2b, just
              printed)</span>, the{' '}
              <span className="dn-tag bear">8h water-up death cross (4b)</span>{' '}
              and the <span className="dn-tag bear">4h water-up death cross
              (11b)</span> persist, and the{' '}
              <span className="dn-tag bear">1w water-down death cross (3b)</span>{' '}
              stands. RSI is soft across the board — fast frames 15m 57 / 30m 49
              / 1h 43, mid 4h 36 (the deepest) / 8h 43 / 12h 46 / 1d 46, and 3d
              41 / 1w 37 / 1M 43 — a broadly oversold-leaning tape with a 4h TD
              &ldquo;Buy 8 → 9?&rdquo; one bar from a TD9 BUY setup.{' '}
              <span className="dn-em">
                Read straight: the engine&rsquo;s cycle-reversal / bounce-favored
                label still leans on the higher-TF bottom-div cluster (1d/3d/1w)
                + the 1M TD9 BUY + the fresh 1h/3d golden crosses off the reflex
                bid — the structural bounce case survives a floor break. But the
                overall book is 8-of-10 short, the mid frames rolled to death
                crosses, and the floor lost on the daily close. The bounce case
                is a higher-TF mean-reversion read; the SM short slam, the floor
                loss, and the mid-frame death crosses are the near-term
                counterweight. A spot base above the floor would revive the
                bounce; a floor loss that holds on the Mon 07-20 weekly close
                kills it.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">62,328</td><td className="num">57.2</td><td className="bull">golden (water-dn) 18b</td><td className="bear">below ↑62.4k 92b</td><td>Sell 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">62,328</td><td className="num bull">49.2</td><td className="bull">golden (water-dn) 8b</td><td className="bear">below ↑63.2k 46b</td><td>Sell 3</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">62,328</td><td className="num bull">43.0</td><td className="bull">golden (water-dn) 刚印 (just printed, 1b)</td><td className="bear">below ↑64.0k 23b</td><td>Sell 2</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">62,328</td><td className="num bull">36.3</td><td className="bear">death (water-up) 11b</td><td className="neut">in cloud 61.5k–62.7k 4b</td><td>Buy 8 → 9?</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">62,328</td><td className="num bull">42.9</td><td className="bear">death (water-up) 4b</td><td className="bull">above ↓61.7k 15b</td><td>Buy 5</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>12h</td><td className="num">62,328</td><td className="num bull">46.3</td><td className="bear">death (water-up) 刚印 (2b)</td><td className="neut">in cloud 60.5k–62.5k 1b</td><td>Buy 5</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>1d</td><td className="num">62,330</td><td className="num bull">45.9</td><td className="bull">golden (water-dn) 13b</td><td className="bear">below ↑66.3k 43b</td><td>Buy 2</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">62,328</td><td className="num">40.9</td><td className="bull">golden (water-dn) 刚印 (just printed, 1b)</td><td className="bear">below ↑71.7k 14b</td><td>Buy 1</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">62,328</td><td className="num bull">37.2</td><td className="bear">death (water-dn) 3b</td><td className="bear">below ↑96.3k 24b</td><td>Buy 2</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">62,328</td><td className="num">42.9</td><td className="neut">MACDh water-up − · ⚡TD9 BUY</td><td className="bull">above ↓47.0k 29b</td><td>⚡TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (BJ 08:01; rolling
                    latest file, archived verbatim to
                    snapshots/2026-07-14-0005/). Header regime:{' '}
                    <em>5/9 cycle-reversal (JT&lt;0) — mean-reversion / bounce
                    favored, trend-following cautioned</em>; overall 1 long / 8
                    short / 1 neutral; alerts:{' '}
                    <em>higher-TF bottom-div cluster (1d/3d/1w)</em>,{' '}
                    <em>1M ⚡TD9 BUY $62,328</em>, <em>1h water-down golden cross
                    (just printed)</em>, <em>3d water-down golden cross (just
                    printed)</em>, <em>12h water-up death cross (2b)</em>,{' '}
                    <em>4h TD8 Buy — 1 more bar to close</em>. Scan spot $62,328,
                    24h −2.15% (00:01Z MTF scan; the live-tape header at 00:05Z
                    shows −2.44% on the same 24h window — the 4-minute gap and the
                    different 24h reference account for the difference), 24h H/L
                    $64,412 / $61,806 (the MTF feed&rsquo;s own 24h window — a
                    different feed and reference than the live-tape prose range
                    $64,318 / $61,850, not a contradiction), qVol $12.30B. Closes
                    are in-progress bars; treat every value as provisional until
                    each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix lost two of its three positive lines on the break.
              Spot $62,318 holds{' '}
              <span className="dn-tag bull">+0.67% over D-SMA20 $61,904</span>{' '}
              and the flip below, but has fallen{' '}
              <span className="dn-tag bear">−0.82% under D-EMA20 $62,836</span>{' '}
              and <span className="dn-tag bear">−1.19% under the W-SMA200 floor
              $63,066</span> (was +3.38% / +1.53% / +1.50% respectively on 07-13
              — the whole recovery cushion gone). The first overhead resistance
              re-widened to the{' '}
              <span className="dn-tag bear">D-SMA50 $64,317 (−3.11%)</span> /{' '}
              <span className="dn-tag bear">D-EMA50 $65,029 (−4.17%)</span> pair
              (was within $629 of spot on 07-13, now the cap is $2.0k–$2.7k
              overhead and the floor is overhead resistance too). Above that, in
              order:{' '}
              <span className="dn-tag bear">D-EMA100 $68,507 (−9.03%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $68,672 (−9.25%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,743 (−10.65%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,946 (−10.91%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $70,293 (−11.34%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $70,614 (−11.75%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $71,657 (−13.03%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $73,625 (−15.36%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,331 (−16.16%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $74,577 (−16.44%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $76,097 (−18.11%)</span>.
              Far above and disused: W-EMA50 $79,405 (−21.52%), W-EMA100 $79,605
              (−21.72%), W-SMA50 $86,435 (−27.90%), W-SMA100 $88,462 (−29.55%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-14 00:06Z (close
                $62,241.00) — a ~1-min post-anchor refresh, one minute after the
                00:05Z live pin, not a stale-before-anchor cut; offsets
                recomputed against live spot $62,318.23.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. Weekly MAs use the Binance W-MON convention
                (weekly close settles Mon 00:00Z), matching the lineage&rsquo;s
                floor and the 07-06 / 06-29 weekly-close references; the full
                matrix is computable (359 weekly bars across the 8 yearly parquet
                files 2019–2026). 200W-watch JSON is absent this run, so the
                floor is the matrix W-SMA200 $63,066 (in-progress-inclusive,
                −1.19% over spot; the settled-basis W-SMA200 thru the 07-06
                weekly bar is $62,852, −0.85% over spot — spot is below both).
                Daily closes: 07-07 $63,335.40, 07-08 $62,255.30, 07-09
                $63,197.00, 07-10 $64,129.50, 07-11 $63,783.00, 07-12 $63,750.00
                (the settled weekly close), 07-13 $62,307.00 (back below the
                floor — the first daily close beneath it since 07-08), 07-14
                (in-progress) $62,241.00.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book de-gammaed hard to +37.7M (from +96.6M) but stays net-long-gamma · flip $61,527 (spot +1.29% above, cushion collapsed from +3.79%) · a small near-dated negative amplifier appeared (14JUL −4.40M) · $63k–$70k positive band caps, $55k–$60k negative cluster bids below</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book de-gammaed hard on the break but stayed
                net-long-gamma
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+37.7M / 1%</span> (was +96.6M on
              07-13 — a −58.9M step shallower, the fourth straight de-gamma from
              +131.8M → +101.6M → +96.6M → +37.7M, but still net positive); the
              book remains long-gamma, just far less so. The 0-γ flip moved{' '}
              <span className="dn-tag">$61,687 → $61,527 (−$160)</span>, and spot
              $62,318 sits{' '}
              <span className="dn-tag bull">+1.29% above flip</span> on
              spot-denominated math (62,318.23 / 61,527 − 1 = +1.286%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads +1.7% off its
              Deribit-index $62,560 ($242 above live spot), which is{' '}
              <span className="dn-tag bull">+1.68%</span> (62,560 / 61,527 − 1 =
              +1.679%) — both references positive, spot above the flip on both,
              but the cushion collapsed from +3.79% on 07-13 to +1.29% today, so
              the dampening zone now sits right beneath spot. The wall map keeps a
              positive band capping the overhead and grew the negative cluster
              below spot:{' '}
              <span className="dn-tag bear">$60k −16.71M</span> (now the heaviest
              wall of either sign, bidding a fade toward the low),{' '}
              <span className="dn-tag bull">$65k +14.82M</span>,{' '}
              <span className="dn-tag bull">$66k +13.39M</span>,{' '}
              <span className="dn-tag bull">$64k +13.00M</span>,{' '}
              <span className="dn-tag bull">$70k +11.19M</span>,{' '}
              <span className="dn-tag bull">$68k +10.21M</span>,{' '}
              <span className="dn-tag bull">$63k +8.29M</span> (a positive wall
              right at the lost floor),{' '}
              <span className="dn-tag bull">$80k +7.21M</span>,{' '}
              <span className="dn-tag bear">$58k −6.84M</span>,{' '}
              <span className="dn-tag bear">$55k −6.37M</span>.{' '}
              <span className="dn-em">
                The $63k–$70k positive band ($63k +8.29M, $64k +13.00M, $65k
                +14.82M, $66k +13.39M, $68k +10.21M, $70k +11.19M) sums to
                roughly +71M of overhead support-turned-cap; but the negative
                cluster below has grown to $60k −16.71M / $58k −6.84M / $55k
                −6.37M ≈ −29.9M, so below the flip the book flips to amplifying —
                a fade toward $60k is dealer-bid resistance-turned-magnet, and a
                loss of the $61,527 flip would put spot into the negative-gamma
                zone where dealers sell weakness. The SM short is pressing spot
                toward that flip
              </span>. The expiry strip carries its first meaningful near-dated
              negative of the recovery: 14JUL 0.3DTE{' '}
              <span className="dn-tag bear">−4.40M</span> (settles 08:00Z today,
              ~8h forward of this snap), 15JUL 1.3 −0.43M, 16JUL 2.3 −1.05M (the
              near negatives sum ~−5.9M), then the forward chunks{' '}
              <span className="dn-tag bull">17JUL 3.3 +20.69M</span>,{' '}
              <span className="dn-tag bull">24JUL 10.3 +4.64M</span> and{' '}
              <span className="dn-tag bull">31JUL 17.3 +24.41M</span> (all
              positive), 28AUG 45.3 +5.74M,{' '}
              <span className="dn-tag bear">25SEP 73.3 −3.06M</span>, 25DEC 164.3
              +0.67M, 26MAR27 255.3 +0.63M, 25JUN27 346.3 +0.53M.{' '}
              <span className="dn-em">
                The 14JUL −4.40M is the first meaningful near-dated negative
                amplifier of the recovery (07-09 carried only a negligible
                −0.44M near negative), but it is small and clears at 08:00Z
                today; the big
                forward chunks (17JUL +20.69M, 31JUL +24.41M) stay positive, so
                the strip has no large near-dated negative to convert the
                dampening regime. The de-gamma to +37.7M and the collapsed flip
                cushion are the real change — the book is much closer to flipping
                than at any point in the recovery, but it has not flipped yet.
              </span>
            </p>

            <p>
              IV median across 838 instruments is{' '}
              <span className="dn-tag">42.4%</span> against 30D close-to-close
              RV of <span className="dn-tag">30.02%</span> — chain-level
              richness <span className="dn-tag">~+12.4pt</span>.{' '}
              <span className="dn-em">
                Disclosure: 838 instruments and 42.4% IV median are
                pre-14JUL-settle values read from the 00:01Z GEX file; the 14JUL
                0.3DTE −4.40M chunk clears at 08:00Z today (~8h forward of this
                snap) and the post-settle instrument count and IV median are NOT
                recomputed here — the near strip carries a small negative either
                way, so the settle nudges rather than flips the gamma regime.
              </span>{' '}
              A chain-median across N instruments,{' '}
              <span className="dn-em">not</span> a tradable spread;
              expiry-/strike-level vega, skew and term structure remain not
              loaded; the vol read stays framework-only. Put/Call OI ratio 0.55
              (128,232 put OI / 233,939 call OI). RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log
              returns anchored to parquet last bar 2026-07-14 00:06Z (a ~1-min
              post-anchor refresh, one minute after the 00:05Z live pin; the
              29-return alternate reads 30.30%; the 30.02% page value uses 30
              returns).
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · split rates/dollar risk-off (10Y 4.56% now ABOVE the 4.55% filter, TIPS 2.32% EXTREME, DXY 101.28 EXTREME) vs credit/liquidity risk-on (HY OAS 2.69%, Fed net liq $5.958T EXTREME) · MOVE jumped +8.22 to 77.8 · reclaim-long rates filter FLIPPED FALSE at 4.56%</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape held its split shape but the 10Y ticked above the
                reclaim-long filter line and bond vol jumped
              </span>. Dashboard render is 2026-07-13 22:16Z, ~1.8h before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bear">4.56% (+2.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.94</span>, episodic z{' '}
              <span className="dn-tag">+1.49</span> — RISK-OFF, and now{' '}
              <span className="dn-em">above the 4.55% reclaim-long filter line</span>{' '}
              (FALSE at 4.56%, was TRUE at 4.54% on 07-13) and clear of the 4.53%
              put-spread re-grow leg (FIRED by 3bp). 10Y TIPS real{' '}
              <span className="dn-tag bear">2.32% (+1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.80</span>, episodic z{' '}
              <span className="dn-tag">+1.62</span> — EXTREME RISK-OFF. 5Y5Y BE
              inflation <span className="dn-tag">2.21% (+1.0bp)</span>. HY OAS{' '}
              <span className="dn-tag">2.69% (−1.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.26</span>, episodic z{' '}
              <span className="dn-tag bull">−0.75</span> — RISK-ON, 9bp below the
              2.78% re-grow gate. MOVE bond vol{' '}
              <span className="dn-tag bear">77.8 (+8.22)</span> — a sharp jump
              (episodic z +2.12), the loosest-to-firming line on the panel and
              the one macro read that moved materially. DXY{' '}
              <span className="dn-tag bear">101.28 (+0.31)</span>, regime z{' '}
              <span className="dn-tag bear">+2.37</span> — EXTREME RISK-OFF. Fed
              net liquidity{' '}
              <span className="dn-tag bull">$5.958T (+0.118T)</span>, episodic z{' '}
              <span className="dn-tag bull">+2.47</span> — EXTREME RISK-ON, the
              +0.118T weekly jump holding. US-JP 10Y spread{' '}
              <span className="dn-tag">1.91% (+2.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag">161.97 (−0.40)</span>. NFCI −0.515 (stale
              10d).{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) FLIPPED FALSE
                at 4.56% — the standalone macro filter that had been the one
                lit-green line for a scout long is now off. The put-spread
                re-grow gate&rsquo;s 10Y leg (&gt; 4.53%) is FIRED at 4.56% by
                3bp, but the HY OAS leg (&gt; 2.78%) stays 9bp away at 2.69% — a
                single-leg OR-watch fire, not the both-leg roll conviction.
                MOVE&rsquo;s +8.22
                jump to 77.8 is a firming bond-vol read that argues against fresh
                risk. JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag
                (stale 73d) — do not lean on it.
              </span>
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
                <tr><td>US 10Y nominal</td><td className="num">4.56%</td><td className="num bear">+2.0bp</td><td className="num bear">+1.94</td><td className="num">+1.49</td><td className="bear">tight · RISK-OFF (above 4.55% filter)</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.32%</td><td className="num bear">+1.0bp</td><td className="num bear">+2.80</td><td className="num">+1.62</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.21%</td><td className="num bear">+1.0bp</td><td className="num">−0.23</td><td className="num">−0.18</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.69%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.26</td><td className="num bull">−0.75</td><td className="bull">loose · RISK-ON (9bp to gate)</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.515</td><td className="num">−0.01</td><td className="num">−0.06</td><td className="num bull">−2.13</td><td className="stale">stale 10d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">77.8</td><td className="num bear">+8.22</td><td className="num">+0.36</td><td className="num bear">+2.12</td><td className="bear">firmer · +8.22 jump</td></tr>
                <tr><td>DXY</td><td className="num">101.28</td><td className="num bear">+0.31</td><td className="num bear">+2.37</td><td className="num">+1.01</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.958T</td><td className="num bull">+0.118T</td><td className="num bull">+2.42</td><td className="num bull">+2.47</td><td className="bull">EXTREME RISK-ON</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.97</td><td className="num bull">−0.40</td><td className="num bear">+1.47</td><td className="num">+0.85</td><td className="neut">yen firmer on day</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.91%</td><td className="num bear">+2.0bp</td><td className="num bull">−0.73</td><td className="num">+1.49</td><td className="bull">tight</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7761</td><td className="num bull">−0.02</td><td className="num bull">−1.42</td><td className="num">−0.18</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="num">+1.43</td><td className="stale">monthly (73d) · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.318</span>{' '}
              (essentially flat from 07-13&rsquo;s 0.315, holding in the NORMAL
              band). BTC&rsquo;s tightest ties re-tightened to the broad-risk
              complex:{' '}
              <span className="dn-tag">NQ +0.552</span> (firmed from +0.457),{' '}
              <span className="dn-tag">SP500 +0.479</span>,{' '}
              <span className="dn-tag">SILVER +0.459</span>,{' '}
              then the energy inverse{' '}
              <span className="dn-tag">CL −0.419</span>,{' '}
              <span className="dn-tag">TSLA +0.407</span>,{' '}
              <span className="dn-tag">BRENT −0.406</span>,{' '}
              <span className="dn-tag">COPPER +0.376</span>,{' '}
              <span className="dn-tag">JP225 +0.366</span>,{' '}
              <span className="dn-tag">GOLD +0.356</span>,{' '}
              <span className="dn-tag">PLAT +0.346</span>,{' '}
              <span className="dn-tag">NVDA +0.345</span>. 7d performance:{' '}
              <span className="dn-tag bear">BTC −2.90%</span> now lags{' '}
              <span className="dn-tag bear">NQ −1.14%</span> by −1.76pt (BTC
              re-lagged the TradFi engine on the down move, having been flat-flat
              on 07-13),{' '}
              <span className="dn-tag bear">SP500 −0.34%</span>,{' '}
              <span className="dn-tag bear">JP225 −3.34%</span>,{' '}
              <span className="dn-tag bull">META +9.37%</span> (the 7d complex
              leader), <span className="dn-tag bull">NVDA +4.65%</span>,{' '}
              <span className="dn-tag bear">TSLA −5.29%</span>,{' '}
              <span className="dn-tag bull">AAPL +1.45%</span>,{' '}
              <span className="dn-tag bull">MSFT +0.64%</span>,{' '}
              <span className="dn-tag bear">GOOGL −3.64%</span>. Metals soft:{' '}
              <span className="dn-tag bear">GOLD −3.44%</span>,{' '}
              <span className="dn-tag bear">SILVER −6.30%</span>,{' '}
              <span className="dn-tag bear">PLAT −1.10%</span>. Energy ripped:{' '}
              <span className="dn-tag bull">CL +14.01%</span>,{' '}
              <span className="dn-tag bull">BRENT +15.05%</span>,{' '}
              <span className="dn-tag bear">NGAS −12.24%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d line rolled from flat-flat vs NQ on 07-13 to a
                −1.76pt lag (BTC −2.90% vs NQ −1.14%) — the down-day re-coupled
                BTC to the risk complex on the way down, and the NQ correlation
                firmed to +0.552. The correlation band held NORMAL, so BTC is
                neither decoupled nor systemically pinned; the −2.44% print is
                mostly BTC-internal (the SM short slam) with a mild TradFi
                risk-off tailwind.
              </span>
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · book FLAT · the reclaim handed back on the print · cover-bounce scout VOID (price pre-condition failed) · no chase-short into a −13,426 SM short with the flip +1.29% beneath · no fresh hedge on a single-leg rates fire</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 07-13 note&rsquo;s single line — does spot demand overpower
                the re-short, or does the re-short fade the reclaim the day after
                it settled — resolved for the re-short, hard
              </span>. Spot demand never showed; smart money tripled its short
              (−4,426 → −13,426) on a discrete re-stack step, OI built +6.49%,
              retail piled longs to 64.84%, funding re-fired to the cap, and
              price broke the $63,066 floor on the 07-13 daily close $62,307.00.
              The cover-bounce scout is now VOID rather than deferred: its price
              pre-condition, TRUE the entire recovery, failed — spot lost the
              D-EMA20 $62,836 and the floor, 2 of 4 legs broken. There is no
              scout long to run. But the mirror trade — chasing the short — is
              also off: SM is already −13,426 (the deepest of the lineage), the
              dealer book is still net-long-gamma +37.7M with the flip only
              +1.29% beneath spot, funding is at the cap (a squeeze risk if SM
              covers), and the last 4h already bounced off $61,850. The trade
              book today is FLAT: no scout long into a void pre-condition, no
              chase-short into a maximally-short SM book above a positive-gamma
              flip, no fresh hedge on a single-leg 1bp-turned-3bp rates fire —
              wait for the Mon 07-20 weekly close to settle the re-break, OR for
              SM to start covering (net back toward flat) with spot reclaiming the
              floor, whichever comes first.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · VOID · price pre-condition FAILED (spot lost D-EMA20 and the floor)</span>
              <div className="dn-trade-name">
                Cover-bounce scout — void: the price pre-condition that gated it the whole recovery broke, and the demand block never showed; there is nothing to run
              </div>
              <div className="dn-thesis">
                The scout carried a price pre-condition (spot above flip AND
                D-EMA20 AND D-SMA20 AND floor) plus a demand trigger (spot CVD
                pulling OI up + SM covering + a D-SMA50/D-EMA50 reclaim). The
                price pre-condition was TRUE the entire recovery and was never the
                trigger; the demand trigger never fired and inverted to an SM
                short-build on 07-13. Today the price pre-condition itself broke:
                spot $62,318 is below D-EMA20 $62,836 and below the W-SMA200 floor
                $63,066 (only D-SMA20 $61,904 and the flip $61,527 hold beneath).
                With the floor lost, the demand block worse than ever (SM tripled
                short, OI built, retail max-long), and the reclaim-long rates
                filter flipped FALSE at 4.56%, the scout has no path to entry. It
                is void, not deferred — a fresh long requires the floor
                reclaimed AND SM covering, i.e. a rebuild of the pre-condition
                from scratch, not a demand confirmation on top of a standing one.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">price pre-condition (FAILED, 2/4)</span><span className="dn-lvl-v bear">spot $62,318 &gt; flip $61,527 AND &gt; D-SMA20 $61,904, but &lt; D-EMA20 $62,836 AND &lt; W-SMA200 floor $63,066 — the four-leg gate broke</span></div>
                <div><span className="dn-lvl-k">revive condition (rebuild from scratch)</span><span className="dn-lvl-v bear">a 1d close back above the $63,066 floor AND SM covering (net back toward flat) AND spot CVD pulling OI up — the whole pre-condition re-established, not a demand add on a standing one</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v">none — the scout is void; no long until the floor is reclaimed and the short covers</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v bear">no scout long into a broken floor, a −13,426 SM short, and a FALSE rates filter</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> the scout was always gated on the demand base,
                never the price pre-condition — and the discipline paid: it stood
                down through the whole recovery while the buyer was first covering
                fuel, then a professional short, and now the floor broke before it
                ever triggered. A satisfied price pre-condition was correctly
                treated as necessary-not-sufficient; today even the necessary leg
                is gone. No re-entry attempt until the floor is reclaimed on a
                daily close and smart money is covering, not adding.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · dealer book de-gammaed to +37.7M but still net-long-gamma · flip +1.29% beneath spot · no chase-short into a maximally-short SM book</span>
              <div className="dn-trade-name">
                No chase-short at the broken floor — SM is already −13,426 (the deepest of the lineage) into a still-positive-gamma book with the flip only +1.29% away
              </div>
              <div className="dn-thesis">
                The floor broke and the 07-13 short re-arm partially fired — a 1d
                close below the floor (07-13 $62,307.00) AND a fresh near-dated
                negative amplifier (14JUL −4.40M) both printed. But the book does
                not chase: aggregate GEX is still +37.7M net-long-gamma with the
                flip $61,527 only +1.29% beneath spot, so the dampening zone sits
                right under price and the negative-gamma amplification only begins
                below the flip. SM is already −13,426 (roughly tripled, the
                deepest short of the recovery) with retail max-long and funding at
                the cap — a positioning shape that carries real squeeze risk if
                SM starts to cover, and the 4h/1h already bounced off $61,850.
                Chasing a short here sells into a crowded professional short above
                a positive-gamma flip, late. A short becomes a trade only on a
                loss of the $61,527 flip into the negative-gamma zone (dealers
                sell weakness there) OR a Mon 07-20 weekly close that settles the
                re-break with the near strip turning negative — not on the daily
                floor loss alone.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · no chase-short into positive gamma with the flip +1.29% away</span></div>
                <div><span className="dn-lvl-k">short trigger (both legs)</span><span className="dn-lvl-v bear">a 1h close &lt; $61,527 flip (into the negative-gamma zone) OR a Mon 07-20 weekly close &lt; $63,066 settling the re-break, with the near strip carrying a negative amplifier — not the daily floor loss on its own</span></div>
                <div><span className="dn-lvl-k">squeeze risk (the counter-trade)</span><span className="dn-lvl-v bull">SM covering net back toward flat + funding unwinding off the cap + a reclaim of the floor — a −13,426 SM short with retail max-long is squeeze fuel if spot turns</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no chase-short into a maximally-short SM book above a +37.7M positive-gamma flip; no short on the daily floor loss alone</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework:</b> the dampening regime held every day of the
                recovery and de-gammaed but did NOT flip on the break — GEX stayed
                positive at +37.7M and the flip stayed below spot. A short is a
                catalyst trade; the catalyst (flip loss into negative gamma, or a
                settled weekly re-break with a negative strip) has not printed.
                And a −13,426 SM short into retail max-long at the funding cap is
                as much squeeze setup as continuation — the book stays flat until
                one side resolves.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · reclaim-long rates filter FLIPPED FALSE (10Y 4.56% &gt; 4.55%) · put-spread re-grow 10Y leg FIRED by 3bp · HY OAS leg 9bp away · no roll</span>
              <div className="dn-trade-name">
                Downside put-spread — no roll: the rates filter flipped false and the 10Y re-grow leg fired by 3bp, but the HY OAS leg is still 9bp away — a single-leg OR-watch fire, not the both-leg roll conviction
              </div>
              <div className="dn-thesis">
                The put-spread re-grow gate is an OR watch of two legs (HY OAS
                &gt; 2.78% OR 10Y &gt; 4.53%) — either leg lights the watch, but a
                roll is a discretionary both-leg conviction, not the mechanical
                OR trip. The 10Y leg is FIRED at 4.56% by 3bp (firmer than
                07-13&rsquo;s 1bp), and the same 4.56% print flipped the
                reclaim-long rates filter (10Y &lt; 4.55%) FALSE — so the one
                lit-green macro line for a scout long is now off. But the HY OAS
                leg still sits 9bp away at 2.69% (RISK-ON), so the OR watch is lit
                on one leg — a single-leg OR-watch fire, not the both-leg roll
                conviction a fresh hedge needs. MOVE&rsquo;s
                +8.22 jump to 77.8 firms the bond-vol backdrop but is not a
                gamma-amplifier signal. No fresh hedge on a single-leg fire into a
                dealer book that is still net-long-gamma with only a small
                near-dated negative amplifier (14JUL −4.40M) on the strip.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · no roll on a single-leg fire</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (both-leg conviction)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.69%, 9bp to fire) confirming the 10Y &gt; 4.53% leg (currently 4.56%, fired by 3bp)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bear">10Y &lt; 4.55% close — FLIPPED FALSE at 4.56%; the standalone long filter is now off</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as
                levels drift, not backtested breakpoints. A hedge leg would be a
                roll to 17JUL26 3.3DTE or 24JUL26 10.3DTE — but both carry large
                positive gamma (+20.69M / +4.64M), so a fresh tail would not get
                an amplifier tailwind; only the tiny 14JUL −4.40M / 25SEP −3.06M
                are negative. Treat the 10Y 4.56% fire as a firming watch, not a
                roll, until the HY OAS leg confirms.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle · the fresh short build accelerated into a short slam on a discrete re-stack step · read as a standalone signal, no calendar prior</span>
              <div className="dn-trade-name">
                Squeeze-cycle — the re-short slammed: SM tripled from −4,426 to −13,426 on a discrete short-stack step @ 2026-07-13 07:36Z (BJ 15:36), the deepest net-short and largest single-minute step of the recovery
              </div>
              <div className="dn-thesis">
                The 07-13 re-short (net −1,103 → −4,426) did not stall — it
                accelerated. A discrete step at{' '}
                <span className="dn-tag bear">2026-07-13 07:36Z (BJ 07-13 15:36)</span>{' '}
                — Δnet −5,850 in one minute (Δlong +613, Δshort +6,463, spot
                $63,056), the largest single-minute step of the recovery and a
                pure short-slam (short_btc 14,155 → 20,619 in one minute) — drove
                SM net from −3,858 to −9,708, then a grind carried it to the
                trough −13,426 @ 2026-07-14 00:01Z / BJ 08:01. This is the
                cleanest continuation of a smart-money short of the lineage:
                covered the squeeze, watched the floor confirm, re-shorted, then
                slammed it into a floor break. The signature is information, not a
                trade for us — the dealer book is still net-long-gamma with the
                flip +1.29% beneath spot, so the SM short has run ahead of its
                structural fuel, and a −13,426 short into retail max-long at the
                funding cap is squeeze setup as much as continuation.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">re-short slammed · SM −7,908 (07-09) → −1,103 (07-12) → −4,426 (07-13) → −13,426 (today) · discrete short-stack step @ 2026-07-13 07:36Z (BJ 15:36) Δnet −5,850</span></div>
                <div><span className="dn-lvl-k">SM 24h band</span><span className="dn-lvl-v">peak (least short) −3,374 @ 2026-07-13 03:41Z (BJ 11:41) · trough −13,426 @ 2026-07-14 00:01Z (BJ 08:01) · one discrete short-slam step, then a grind to the trough at the snap</span></div>
                <div><span className="dn-lvl-k">forward gating</span><span className="dn-lvl-v">SM COVERING back toward flat + funding off the cap + a floor reclaim is the squeeze-long read; a further Δnet ≤ −3k with a flip loss is the short-continuation read — the −13,426 short is the counter-signal to the void scout, not a chase-short trigger</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a re-short that triples the net and
                slams a discrete step into a floor break is the most aggressive
                smart-money short of the recovery — retail max-long / SM
                short-slam / OI building / funding at the cap, a textbook
                distribution shape. But a maximally-short book into a
                positive-gamma dealer flip is exactly where a squeeze ignites if
                spot turns; the signature is a reason to stay FLAT and watch which
                side breaks, not to chase the short. Read as a standalone signal,
                no calendar prior.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the reclaim handed back on the print · SM tripled its short into a floor break · scout VOID · dealer book de-gammaed but still positive · book FLAT, watching squeeze vs settled re-break</span>
            </h2>

            <p>
              Of the 07-13 decision conditions: the floor-lost condition FIRED
              (07-13 daily close $62,307.00 &lt; the $63,066 floor, the first
              daily close beneath it since 07-08 — the reclaim is handed back on
              the print, though NOT settled until the Mon 07-20 weekly close); the
              cover-bounce scout&rsquo;s demand trigger DID NOT fire and its price
              pre-condition BROKE (spot lost D-EMA20 and the floor — the scout is
              now void); the fresh-re-stack short-re-arm FIRED as a signal (Δnet
              −5,850 @ 2026-07-13 07:36Z / BJ 15:36, the short-slam) but is NOT a
              chase-short into positive gamma; the dampening regime HELD but
              de-gammaed hard (GEX +96.6M → +37.7M, flip cushion +3.79% → +1.29%,
              a small 14JUL −4.40M near-dated negative appeared); the rates filter
              FLIPPED FALSE (10Y 4.56% &gt; 4.55%). <em>The lineage&rsquo;s
              central structural question — does the reclaim hold the
              follow-through after confirming on the weekly close — resolved NO:
              the floor confirmed on Monday and broke on Tuesday, on a smart-money
              short that tripled while retail crowded the trapped long.</em> The
              conditions today re-set around a broken floor, a void scout, a
              maximally-short SM book, and a dealer book that de-gammaed but has
              not flipped:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Floor lost on the print (07-13 daily close) — FIRED</td><td className="bear">07-13 closed $62,307.00, −1.20% below the $63,066 W-SMA200 floor (−0.87% below the settled-basis $62,852); the first daily close beneath the floor since 07-08</td><td>the reclaim is handed back on the print; the digestion-above-floor read is falsified intra-week — but NOT settled until the Mon 07-20 weekly close</td></tr>
                <tr><td>Settled re-break (Mon 07-20) — PENDING</td><td className="bear">a Mon 07-20 00:00Z weekly close &lt; $63,066 settles the re-confirm-break; the in-progress 07-13→07-20 week is marking $62,241.00 (−1.31% under)</td><td>if it settles below, the reclaim is a confirmed failure and the short-side watch escalates — with a negative near strip, a short trade; the last completed weekly stays the 07-06 confirm until then</td></tr>
                <tr><td>Cover-bounce scout (long) — VOID</td><td className="bear">price pre-condition FAILED (spot below D-EMA20 $62,836 and the floor $63,066); demand trigger never fired; rates filter FALSE</td><td>no scout long — the scout is void, not deferred; revive only on a floor reclaim AND SM covering, i.e. a rebuild of the pre-condition from scratch</td></tr>
                <tr><td>Dampening regime — de-gammaed, still positive</td><td className="bull">GEX +37.7M net-long-gamma (from +96.6M), flip $61,527 +1.29% beneath spot; the near strip carries a small 14JUL −4.40M negative but the big 17JUL/31JUL chunks stay positive</td><td>no chase-short into positive gamma; a flip loss below $61,527 puts spot into the negative-gamma zone (dealers sell weakness) — the short catalyst, not yet printed</td></tr>
                <tr><td>Fresh re-stack (short-slam) — FIRED as a signal</td><td className="bear">Δnet −5,850 short-stack step @ 2026-07-13 07:36Z / BJ 15:36 (Δshort +6,463 same minute) drove SM to −13,426</td><td>the short watch is armed as information, NOT a chase — a −13,426 SM short into retail max-long at the funding cap is squeeze setup as much as continuation; read as a standalone signal, no calendar prior</td></tr>
                <tr><td>Squeeze risk (the counter-trade) — LIVE</td><td className="bull">SM −13,426 (deepest of the lineage) + retail 64.84% max-long + funding at the +10.95% cap; the 4h/1h already bounced off $61,850</td><td>if SM starts to cover and funding unwinds off the cap with a floor reclaim, the crowded short is squeeze fuel — the long is the squeeze, not the void scout</td></tr>
                <tr><td>Macro tail re-grow (single-leg fire) + rates filter FALSE</td><td className="bear">10Y &gt; 4.53% FIRED at 4.56% by 3bp; HY OAS &gt; 2.78% still 9bp away at 2.69%; reclaim-long filter (10Y &lt; 4.55%) FLIPPED FALSE</td><td>no roll on a single-leg fire; the rates filter for a scout long is now off — a double reason to hold no long here</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the maximally-short SM book (−13,426, retail max-long,
                funding at the cap) resolves as a squeeze — SM covering, funding
                unwinding, spot reclaiming the $63,066 floor — or as a
                continuation, a loss of the $61,527 flip into the negative-gamma
                zone and a Mon 07-20 weekly close that settles the re-break. The
                floor confirmed on Monday and broke on Tuesday; the question is
                now whether the crowded short squeezes back through the floor or
                presses spot through the flip into the amplifying zone below
              </span>. Until then this note runs as written: the book is FLAT — the
              cover-bounce scout is void (price pre-condition broke), a chase-short
              is late into a −13,426 SM short above a positive-gamma flip, and no
              fresh hedge fires on a single-leg rates read. The reclaim is handed
              back on the print, the demand base never showed, smart money tripled
              its short into the break, and the dealer book de-gammaed but did not
              flip. The right read for the next 24h is{' '}
              <em>patient — the floor broke, but the short is crowded and the flip
              still holds beneath; wait for the squeeze or the settled re-break,
              and do not chase the move that already ran</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> v2 · 2026-07-14 00:05Z snapshot · <b>post codex
            hostile audit.</b> The STAGE B codex cross-model audit returned
            PASS-WITH-NOTES — 0 CRITICAL, 2 MAJOR, 3 MINOR — with a supplementary
            ask-deepseek numeric second-audit; findings are recorded at
            audits/2026-07-14-desk-note.md. STAGE C applied every finding and
            grep-verified closure (patterns searched across the full EN file,
            hits-after = 0 for each) before promoting v1 → v2:
            <br />
            <b>DN-001 (MAJOR, MA/RV parquet 00:06Z mislabeled &ldquo;stale&rdquo;
            inside a 00:05Z atomic snapshot):</b> patterns <em>&ldquo;1-min
            stale&rdquo;</em> / <em>&ldquo;stale vs snapshot anchor · offsets&rdquo;</em> —
            hits before 1 (manifest :117; the :82 MTF row is a genuine
            before-anchor stale and is unchanged), hits after 0. Relabeled the
            parquet cut as a ~1-min <em>post-anchor</em> refresh in the manifest,
            the MA disclosure, and the RV disclosure. RESOLVED.
            <br />
            <b>DN-002 (MAJOR, macro-tail gate called a fired OR leg &ldquo;not
            the OR-gate confirmation&rdquo;):</b> patterns <em>&ldquo;OR-gate
            confirmation&rdquo;</em>, <em>&ldquo;both-leg confirmation&rdquo;</em>,
            <em>&ldquo;not the both-leg conviction&rdquo;</em> — hits before 3,
            hits after 0. Reframed as an OR <em>watch</em> (either leg lights the
            watch) vs a discretionary both-leg <em>roll conviction</em>; the
            single fired 10Y leg is now a single-leg OR-watch fire, not the
            both-leg roll conviction a hedge needs. RESOLVED.
            <br />
            <b>DN-003 (MINOR, funding cap interval + 24h-low wording):</b>
            patterns <em>&ldquo;22:05&rdquo;</em> / <em>&ldquo;06:05&rdquo;</em> /
            <em>&ldquo;14:05Z&rdquo;</em> and <em>&ldquo;at its 24h low
            (+1.71%)&rdquo;</em> / <em>&ldquo;~8h&rdquo;</em> — hits before 3, hits
            after 0. Corrected the cap segment to 2026-07-13 14:04Z / BJ 22:04
            through 2026-07-13 22:58Z / BJ 07-14 06:58 (~8.9h) and the low to
            &ldquo;near the prior-snap low (+1.71%); exact 24h low +1.68% ann @
            00:10Z/00:11Z&rdquo;. RESOLVED.
            <br />
            <b>DN-004 (MINOR, spot offsets applied to the 07-13 daily close):</b>
            pattern <em>&ldquo;07-13 closed $62,307.00, −1.19%&rdquo;</em> — hits
            before 1, hits after 0. The decision-table row now uses the
            close-based offsets −1.20% below the $63,066 floor / −0.87% below the
            settled-basis $62,852; the −1.19% / −0.85% figures that remain are
            spot offsets and stay attached to spot. RESOLVED.
            <br />
            <b>DN-005 (MINOR, &ldquo;first near-dated negative amplifier of the
            recovery&rdquo; over-broad):</b> patterns <em>&ldquo;first near-dated
            negative amplifier&rdquo;</em>, <em>&ldquo;finally appeared&rdquo;</em>,
            <em>&ldquo;finally carries a small&rdquo;</em> — hits before 3, hits
            after 0. Qualified all three as the first <em>meaningful</em>
            near-dated negative, noting 07-09 carried only a negligible −0.44M.
            RESOLVED.
            <br />
            <b>ask-deepseek second-audit adjudication:</b> the MINOR funding-low
            item is the same defect as DN-003 and is fixed by it. The MAJOR
            &ldquo;cross-block H/L discrepancy&rdquo; ($64,318 / $61,850 prose vs
            $64,412 / $61,806 MTF table) was adjudicated NOT an error — codex
            confirmed each value against its own source (live tape vs the 00:01Z
            MTF feed); a disclosure line was added to the MTF table note making
            the two-feed distinction explicit rather than changing any number.
            <br />
            All findings RESOLVED (grep hits-after = 0). Verified clean by codex:
            requireViewer gating, JSX/markup integrity (tsc exit 0), live-tape
            core arithmetic, funding × 1095, SM lineage/extrema (deepest −13,426,
            largest single-minute step −5,850), flow windows, MTF artifact,
            GEX/IV panel, MA/RV arithmetic, macro and cross-asset. Snapshot
            provenance and the archive path (snapshots/2026-07-14-0005/) are
            recorded in the manifest band above. <b> v2 · post codex hostile
            audit.</b>
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-07-14 00:05Z, live
            tape row pinned t=&ldquo;07-14 08:05&rdquo; BJ) with section-level
            provenance disclosed in the manifest band above; the macro Tier-1
            panel render is 2026-07-13 22:16Z (~1.8h before snapshot) and some
            inputs are explicitly stale or pending and flagged as such. Levels,
            sizes, and conditions are illustrative of the desk&rsquo;s process,
            not standing recommendations. Past correlation, gamma, and
            positioning patterns do not bind future tape. Derivatives carry the
            risk of total loss and, where leveraged, loss exceeding deposited
            margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The floor confirmed on Monday and broke on Tuesday — the re-short
                won. Smart money tripled its short into the break; retail is
                trapped long at the cap. The scout is void; the short is late and
                crowded. Patient — wait for the squeeze or the settled re-break.
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
            v2 · 2026-07-14 00:05Z snapshot · post codex hostile audit · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
