import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-13 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-13',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-13' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260713() {
  await requireViewer('/desk/2026-07-13');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-13 · v2</span>
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
              <span className="dn-big">$64,023</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.29%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-13 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-13 00:07Z (snapshot pin, tape row t=&ldquo;07-13 08:07&rdquo; BJ)</td>
                  <td className="dn-flag">
                    fresh · 1-min · file tail at snapshot = pin · tape `t` is
                    BJ (UTC+8); 00:07Z = t &ldquo;07-13 08:07&rdquo; · this snap
                    lands 7 min after the Mon 07-13 00:00Z weekly settle · 13JUL
                    0.3DTE option settle lands 08:00Z (~8h forward of this snap)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-13 00:01Z scan (BJ 08:01)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates hourly) ·
                    archived to snapshots/2026-07-13-0007/ · ~6-min stale vs
                    snapshot anchor · in-progress bars
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-13 00:01Z snapshot</td>
                  <td className="dn-flag">
                    archived to snapshots/2026-07-13-0007/ · 870 instruments ·
                    Deribit idx $63,994 vs live $64,023 ($29 below) · 13JUL
                    0.3DTE +2.69M settles 08:00Z today (~8h forward of this
                    snap) · median IV 41.7% pre-13JUL-settle from this 00:01Z file
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-13 00:01Z
                  </td>
                  <td className="dn-flag">archived to snapshots/2026-07-13-0007/ · 7d 1h bars · 22 assets · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-12 22:16Z render</td>
                  <td className="dn-flag">
                    archived to snapshots/2026-07-13-0007/ · ~1.85h render lag ·
                    FRED Tier-1: 10Y 4.54% (−2bp), TIPS 2.31%, HY OAS 2.70%,
                    MOVE 69.6 (+0.66), DXY 100.97, Fed net liq $5.958T (+0.118T)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-13 00:05Z</td>
                  <td className="dn-flag">
                    ~2-min stale vs snapshot anchor · offsets recomputed vs live
                    spot · weekly on Binance W-MON convention (weekly close
                    settles Mon 00:00Z) · full matrix computable (359 weekly bars)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W-watch JSON</td>
                  <td className="dn-v-cell">weekly_200sma.json · NOT PRESENT this run</td>
                  <td className="dn-flag">
                    200W watch unavailable — file absent; fall back to matrix
                    W-SMA200 $63,075 (no fabricated percentile / last-event)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale · monthly (72d) · do not treat as live</td>
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
              <span className="dn-v">+1.71%</span>
              <span className="dn-src">live · raw 0.001564 × 1095 = +1.71% · bled toward zero · 24h mean +6.51% (the window still carries the 07-12 evening bump to +8.78%) · cap occupancy 0 / 1442 sampled rows = 0.0% · zero negative rows · min +1.58% ann @ 2026-07-13 00:01Z / BJ 08:01 (the most recent print — funding is at its 24h low and falling)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+5.18% → +1.71% (−3.47pt off the prior anchor)</span>
              <span className="dn-src">24h range +1.58% / +8.78% · funding popped to +8.78% @ 2026-07-12 13:47Z (BJ 21:47) as price ran the 24h high, then bled to +1.71% into the snap as SM re-shorted and price came back — the leverage press is gone, funding sits just above zero</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−0.68% (−693 BTC)</span>
              <span className="dn-src">live · 100,652 BTC (−0.68% off the prior 101,345 BTC) · OI leaked across every window (4h −406, 1h −22) — the long flush drew the book down even as SM added shorts; net de-gross, not fresh gross positioning</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">57.60 / 42.40</span>
              <span className="dn-src">live_db `mkt_long_pct` · re-crowded +1.90pt from 55.70 (24h ago) / 55.70 (07-12 note) — retail leaned back INTO longs as price held, the mirror of smart money adding shorts</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−4,426 (net SHORT, RE-shorted)</span>
              <span className="dn-src">live · long 10,188 − short 14,614 · long flushed −2,430, short added +895 over 24h — the completed cover of 07-12 REVERSED into a fresh short build, the deepest net-short since 07-10</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 07-12 note</span>
              <span className="dn-v bear">−1,103 → −4,426 (−3,323 net, re-short 301.3% of prior)</span>
              <span className="dn-src">|Δ|/prior_net = |−4,426 − (−1,103)| / 1,103 = 301.3% · the net nearly quadrupled short (−1,103 → −4,426 ≈ 4.0×) · one discrete re-stack step @ 2026-07-12 07:06Z / BJ 15:06 (Δnet −2,820, Δlong −1,747 / Δshort +1,073 same minute)</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.7% / 29.97%</span>
              <span className="dn-src">GEX median IV · 870 inst. (pre-13JUL-settle from the 00:01Z file) · chain-median across instruments, NOT a tradable spread · richness ~+11.7pt · RV 30 close-to-close returns</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+3.79% (above)</span>
              <span className="dn-src">flip $61,687 (was $61,644 · +$43) · vs live spot $64,022.87 (+3.79%; 64,022.87/61,687 − 1 = 3.787%) / GEX file Deribit idx $63,994 (+3.74%; 63,994/61,687 − 1 = 3.740%, file rounds +3.7%) — both refs positive · aggregate GEX +96.6M net-long-gamma (was +101.6M — a notch shallower)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The floor confirmed on the settled weekly close — and smart
                money re-shorted into the confirmation
              </span>. The Monday 07-13 00:00Z weekly settle, the decisive event
              the whole recovery has been waiting on, resolved to reclaim-holds:
              the 07-06 weekly bar closed{' '}
              <span className="dn-tag bull">$63,750.00, +1.07% above the
              W-SMA200 floor $63,075</span>, and the fresh in-progress 07-13 week
              last marked <span className="dn-tag bull">$64,007.80 at 00:05Z (+1.48% above the
              floor)</span>, so the re-confirm-break trigger is now dis-armed AND
              settled on a completed weekly. But the tape that greeted the
              confirmation is the most bearish positioning shape since 07-09:
              smart money RE-shorted, net{' '}
              <span className="dn-tag bear">−1,103 → −4,426 (a long flush −2,430
              + a short add +895, on a discrete re-stack step @ 2026-07-12
              07:06Z / BJ 15:06)</span>, retail re-crowded longs{' '}
              <span className="dn-tag bear">55.70% → 57.60% (+1.90pt)</span>,
              funding bled toward zero{' '}
              <span className="dn-tag bear">+5.18% → +1.71% ann</span> (24h low,
              still falling), and OI leaked{' '}
              <span className="dn-tag bear">−693 BTC (−0.68%)</span>. Spot bought
              on CVD <span className="dn-tag bull">+5,639</span> but the perp book{' '}
              <span className="dn-tag bear">sold it (futCVD −216, taker −216)</span>{' '}
              into the shrinking OI while SM leaned short — a spot-bid /
              perp-sold / SM-short shape on a flat{' '}
              <span className="dn-tag bull">+0.29%</span> print. The dealer book
              stayed net-long-gamma (<span className="dn-tag bull">+96.6M</span>,
              shallower from +131.8M→+101.6M→+96.6M) with the flip $61,687 spot
              +3.79% below and no near-dated negative amplifier; the MTF engine
              rolled a notch deeper to a{' '}
              <span className="dn-tag">6/9 cycle-reversal &ldquo;bounce-favored&rdquo;</span>{' '}
              read on a higher-TF bottom-div cluster (1d/3d/1w) + a persistent 1M
              ⚡TD9 BUY, offset by a near-term top-div cluster of six and a fresh
              8h water-up death cross. The cover-bounce scout&rsquo;s price
              pre-condition stays TRUE on all four legs — but the buyer of record
              is now SELLING, not covering, so the scout stands down again and
              the book stays FLAT: no scout long into an SM short-build, no short
              into a deep positive-gamma book, no fresh hedge on a single-leg
              rates fire. Patient — the floor is confirmed, but the demand base
              never showed and smart money is leaning against the reclaim; the
              long is decided when spot demand overpowers the re-short, not when
              the price pre-condition stays lit.
            </p>

            <p>
              BTC prints <span className="dn-tag">$64,023</span> live,{' '}
              <span className="dn-tag bull">+0.29%</span> on 24h — a flat print
              that recovered the 07-12 pullback — inside a{' '}
              <span className="dn-tag">$64,254 / $63,661</span> range (high @
              2026-07-12 15:07Z / BJ 23:07, low @ 2026-07-12 06:30Z / BJ 14:30).{' '}
              <span className="dn-signal">The reclaim is now a settled weekly
              event, not an intra-week wick</span>: the week ending at Mon 07-13
              00:00Z closed <span className="dn-tag bull">$63,750.00</span> —
              +1.07% above the $63,075 floor and +1.43% above the settled-basis
              W-SMA200 $62,852 — the FIRST completed weekly close to confirm the
              reclaim after 06-29&rsquo;s break, and the in-progress 07-13 week
              is already <span className="dn-tag bull">$64,007.80 (+1.48%)</span>{' '}
              over the floor. The daily closes read 07-10{' '}
              <span className="dn-tag bull">$64,129.50</span> (the recovery
              high), 07-11 <span className="dn-tag">$63,783.00</span>, 07-12{' '}
              <span className="dn-tag">$63,750.00</span> (the settled weekly
              close), and 07-13 in-progress at parquet last bar{' '}
              <span className="dn-tag bull">$64,007.80</span> — the last four
              (07-09 to 07-12) all above the floor, with 07-08 $62,255.30 the one
              close below it. The MA matrix carries three positive lines and a
              tightening overhead cap: spot is{' '}
              <span className="dn-tag bull">+3.38% over D-SMA20 $61,930</span>,{' '}
              <span className="dn-tag bull">+1.53% over D-EMA20 $63,060</span>,
              and <span className="dn-tag bull">+1.50% over the W-SMA200 floor
              $63,075</span>, with the{' '}
              <span className="dn-tag bear">D-SMA50 $64,652 (−0.97%)</span>{' '}
              /{' '}
              <span className="dn-tag bear">D-EMA50 $65,209 (−1.82%)</span> pair
              the first overhead resistance — the D-SMA50 has fallen to within
              $629 of spot, the tightest the cap has been all recovery.{' '}
              <span className="dn-em">
                The structural question resolved constructively — the floor held
                on the close that counts — but the positioning that met the
                confirmation turned bearish. This is not post-squeeze digestion
                anymore; it is a fresh SM short build above a just-confirmed
                floor, with retail crowding the other side. The floor held; the
                buyer did not show.
              </span>{' '}
              The cover-bounce scout&rsquo;s price pre-condition (spot above
              flip AND D-EMA20 AND D-SMA20 AND floor) stays TRUE on all four
              legs — but the demand block did not merely fail to confirm, it
              inverted: smart money is now adding shorts, so the scout stays
              deferred.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · the completed cover REVERSED into a fresh SM short build (long flush + short add on a discrete re-stack step) · retail re-crowded longs · funding bled toward zero · spot-bid / perp-sold / SM-short</span>
            </h2>

            <p>
              <span className="dn-signal">
                The day after the cover completed, smart money re-shorted
              </span>. SM net is <span className="dn-tag">−4,426</span> vs the
              07-12 note&rsquo;s −1,103 — that is a{' '}
              <span className="dn-em">−3,323 re-short, 301.3% of the prior net</span>{' '}
              (|−4,426 − (−1,103)| / 1,103 = 301.3%; the net nearly quadrupled
              short, −1,103 → −4,426 ≈ 4.0×). The components: long_btc{' '}
              <span className="dn-tag bear">12,617 → 10,188 (−2,430)</span> and
              short_btc <span className="dn-tag bear">13,720 → 14,614
              (+895)</span> — a long flush concurrent with a short add, the
              opposite of the two-session cover that ran 07-10 → 07-12.{' '}
              <span className="dn-em">
                (Long and short legs are whole-BTC rounded; the live sm_net field
                is fractional −1,102.3 → −4,426.3, so a whole-BTC long−short
                reconstructs the net to within ±1 BTC — the −1,103 / −4,426 nets
                are the authoritative tape values.)
              </span> Unlike the 07-12 slow grind, this move printed a{' '}
              <span className="dn-signal">discrete re-stack step</span>: at{' '}
              <span className="dn-tag bear">2026-07-12 07:06Z (BJ 07-12 15:06)</span>{' '}
              SM net stepped −2,820 in a single minute (Δlong −1,747, Δshort
              +1,073, spot $63,801) — a re-stack-hostile-2 signature (Δshort
              &gt; 0 + Δlong &lt; 0 same minute), just under the −3k threshold
              but the sharpest single-minute event of the window. SM net traded
              from the peak (least short){' '}
              <span className="dn-tag bull">−541 @ 2026-07-12 05:31Z (BJ 13:31)</span> —
              nearly flat, the tail of the completed cover — down to the trough{' '}
              <span className="dn-tag bear">−4,446 @ 2026-07-12 18:01Z (BJ 07-13 02:01)</span>,
              holding ~−4,426 into the snap.{' '}
              <span className="dn-em">
                The signature matters: a completed cover reversing into a fresh
                short build on a discrete re-stack step is a positioning
                statement, not a drift. Smart money covered the squeeze that
                reclaimed the floor, watched the floor confirm on the weekly, and
                re-shorted into it — leaning against the reclaim rather than
                joining it.
              </span>
            </p>

            <p>
              The leverage side confirms the long de-lever.{' '}
              <span className="dn-signal">
                Funding bled toward zero
              </span>: live <span className="dn-tag">+1.71% ann</span> (raw
              0.001564 × 1095), 24h mean{' '}
              <span className="dn-tag">+6.51%</span> — but the mean is backward
              looking, still carrying the 07-12 evening bump to{' '}
              <span className="dn-tag">+8.78% @ 2026-07-12 13:47Z (BJ 21:47)</span> (funding
              popped as price ran the 24h high, then collapsed as SM shorted and
              price came back). The min print is the most recent —{' '}
              <span className="dn-tag">+1.58% ann @ 2026-07-13 00:01Z (BJ 08:01)</span> —
              so funding is at its 24h low and falling. Cap occupancy{' '}
              <span className="dn-tag bull">0 / 1442 sampled rows (0.0%)</span>{' '}
              (the +10.95% cap is fully empty), zero negative rows (still no
              short-pay print). OI Δ{' '}
              <span className="dn-tag bear">−693 BTC (−0.68%)</span> over 24h
              (−0.68% off the prior 101,345 BTC; live OI 100,652) — OI leaked
              across every window (4h −406, 1h −22), the long flush drawing the
              book down even as SM stacked shorts, so gross is falling, not
              expanding. Retail{' '}
              <span className="dn-tag bear">mkt_long_pct 57.60%</span> re-crowded
              +1.90pt from 55.70% (24h ago and the 07-12 note) — retail leaned
              back into longs as price held, the mirror of smart money adding
              shorts. Perp trades a{' '}
              <span className="dn-tag bear">−$64.86 discount</span> to spot at
              the snap (1h mean −$37.67; 4h mean −$38.00; 24h mean −$41.62, range
              −$88.85 / +$31.79 — basis briefly ticked premium intraday but sits
              at a discount into the snap). 1-min aggressor skew snap{' '}
              <span className="dn-tag bull">+29.3</span> (1h mean −0.72 — a
              balanced book with a small buy-aggressor tick right at the snap).{' '}
              <span className="dn-em">
                Funding just above zero + OI shrinking + SM re-shorting + retail
                re-crowding longs: the leverage read is a long de-lever meeting a
                fresh smart-money short. Nothing here is pressing the long side;
                the only crowded long is retail, and the professional book is
                fading it.
              </span>
            </p>

            <p>
              Windowed flow is <em>spot-bid into a perp-sold, shrinking book</em>
              {' '}— the same de-grossing shape as 07-12, but this time SM is
              adding shorts underneath it. 24h: price{' '}
              <span className="dn-tag bull">+0.29%</span>, OI{' '}
              <span className="dn-tag bear">−693 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +5,639</span>{' '}
              <span className="dn-em">(no cb_cvd reset in the window — a genuine
              spot-buy accumulation)</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −216</span>, big-print{' '}
              <span className="dn-tag bull">+22 BTC / 390 prints</span>,
              taker-net <span className="dn-tag bear">−216</span> —{' '}
              <span className="dn-em">
                spot bought steadily while perps net-sold into a −0.68% OI
                unwind; the +0.29% flat print is the leverage book leaving with
                spot absorbing the flow, not fresh perp longs stacking
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bear">−0.29%</span>, OI{' '}
              <span className="dn-tag bear">−406 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +251</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −116</span>, big-print{' '}
              <span className="dn-tag bear">−70 BTC / 77 prints</span>,
              taker-net <span className="dn-tag bear">−116</span> —{' '}
              <em>the same shape: spot bid, perps sold, big-prints net-sold as
              the recent hours drew OI down</em>. 1h: price{' '}
              <span className="dn-tag bull">+0.31%</span>, OI{' '}
              <span className="dn-tag bear">−22 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −98</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +58</span>, big-print{' '}
              <span className="dn-tag bear">−31 BTC / 32 prints</span>,
              taker-net <span className="dn-tag bull">+58</span> —{' '}
              <em>a mixed final hour, spot offered slightly, perps ticked bid,
              OI near-flat</em>.{' '}
              <span className="dn-em">
                The 4h and 1h flow windows use the same inclusive sampled-row
                convention as the 24h window (start minute = the prior sampled
                anchor row, inclusive endpoint), not exact 240/60-minute
                intervals; an exact-minute window shifts each CVD/OI figure by
                tens of BTC (e.g. the 4h Coinbase CVD +251 → +293, the 1h −98 →
                −144) without changing the spot-bid / perp-sold shape.
              </span>{' '}
              The spot CVD accumulation (+5,639 over 24h) is the one constructive
              thread it shares with 07-12 — but it is now leaking into a
              shrinking OI <em>while SM adds shorts</em>, so it is spot absorbing
              a perp de-gross and a smart-money short, not a demand base
              building.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · engine rolled a notch deeper to 6/9 cycle-reversal (bounce-favored) · higher-TF bottom-div cluster 1d/3d/1w · near-term top-div cluster of six · fresh 8h water-up death cross · 3d water-down golden cross just printed · 1M ⚡TD9 BUY persists</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF engine reads a 6/9 cycle-reversal regime
                (JT&lt;0 · mean-reversion / bounce-favored)
              </span>{' '}
              — a notch deeper than the 07-12 5/9 read, the net tag still
              &ldquo;higher-TF bearish / short-term chop.&rdquo; The divergence
              tally is two-sided and grew on both ends: top-div 6
              (15m/30m/1h/4h/12h/1d) against bottom-div 5 (30m/1h/1d/3d/1w), with
              the engine flagging a{' '}
              <span className="dn-tag bull">higher-TF bottom-div cluster
              (1d/3d/1w)</span> and a persistent{' '}
              <span className="dn-tag bull">1M ⚡TD9 BUY $63,728</span>. The
              crosses split by speed and rolled a touch more bearish on the mid
              frame: the fast frames carry water-up death crosses{' '}
              (<span className="dn-tag bear">15m 11b</span>,{' '}
              <span className="dn-tag bear">30m 5b</span>,{' '}
              <span className="dn-tag bear">4h 5b</span>), the{' '}
              <span className="dn-tag bear">1h water-down death cross 2b</span>{' '}
              and the standing{' '}
              <span className="dn-tag bear">1w water-down death cross 3b</span>{' '}
              persist, and a fresh{' '}
              <span className="dn-tag bear">8h water-up death cross (just
              printed)</span> rolled the 8h from 07-12&rsquo;s golden cross —
              while the mid-to-high frames hold golden crosses:{' '}
              <span className="dn-tag bull">1d water-down golden 12b</span> and a{' '}
              <span className="dn-tag bull">3d water-down golden cross (just
              printed, 1b)</span>. RSI is soft-to-oversold on the fast frames
              (15m 34, 30m 34, 1h 39) and mid-band above (4h 51, 8h 55, 12h 56,
              1d 52), cooling to 43/38/44 on 3d/1w/1M.{' '}
              <span className="dn-em">
                Read straight: the engine&rsquo;s cycle-reversal / bounce-favored
                label leans on the higher-TF bottom-div cluster (1d/3d/1w) + the
                1M TD9 BUY + the fresh 3d golden cross — the same structural
                bounce case the recovery has carried. But the near-term rolled
                the wrong way: a top-div cluster of six from 15m up to 1d, and
                the 8h flipping from a golden cross to a water-up death cross,
                say the immediate path is chop-to-down. The bounce case is a
                higher-TF structural read; the SM re-short and the top-div
                cluster are the near-term counterweight. A spot base would
                confirm the bounce; a floor loss would kill it — and now a
                sustained SM short build is the third thing that could stall it.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,744</td><td className="num bull">34.4</td><td className="bear">death (water-up) 11b</td><td className="bear">below ↑63.9k 9b</td><td>Buy 2</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">63,731</td><td className="num bull">34.0</td><td className="bear">death (water-up) 5b</td><td className="bear">below ↑63.9k 5b</td><td>Buy 7</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">63,731</td><td className="num">38.7</td><td className="bear">death (water-dn) 2b</td><td className="bear">below ↑63.8k 1b</td><td>Buy 4</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">63,744</td><td className="num">50.6</td><td className="bear">death (water-up) 5b</td><td className="bull">above ↓62.9k 58b</td><td>Buy 2</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>8h</td><td className="num">63,731</td><td className="num">55.3</td><td className="bear">death (water-up) 刚印 (just printed)</td><td className="bull">above ↓62.1k 12b</td><td>Buy 2</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">63,744</td><td className="num">56.0</td><td className="neut">MACDh water-up + (no fresh cross)</td><td className="bull">above ↓62.6k 4b</td><td>Buy 3</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>1d</td><td className="num">63,731</td><td className="num">51.9</td><td className="bull">golden (water-dn) 12b</td><td className="bear">below ↑66.3k 42b</td><td>Sell 4</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">63,728</td><td className="num">43.1</td><td className="bull">golden (water-dn) 刚印 (just printed)</td><td className="bear">below ↑71.7k 14b</td><td>Sell 4</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">63,731</td><td className="num">38.4</td><td className="bear">death (water-dn) 3b</td><td className="bear">below ↑96.3k 24b</td><td>Sell 1</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">63,728</td><td className="num">43.6</td><td className="neut">MACDh water-up − · ⚡TD9 BUY</td><td className="bull">above ↓47.0k 29b</td><td>⚡TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (BJ 08:01; rolling
                    latest file, archived verbatim to
                    snapshots/2026-07-13-0007/). Header regime:{' '}
                    <em>6/9 cycle-reversal (JT&lt;0) — mean-reversion / bounce
                    favored, trend-following cautioned</em>; overall 1 long / 2
                    short / 7 neutral; alerts:{' '}
                    <em>higher-TF bottom-div cluster (1d/3d/1w)</em>,{' '}
                    <em>1M ⚡TD9 BUY $63,728</em>, <em>3d water-down golden cross
                    (just printed)</em>, <em>8h water-up death cross (just
                    printed)</em>, <em>1h water-down death cross (2b)</em>. Scan
                    spot $63,740, 24h −0.15% (00:01Z MTF scan; the live-tape
                    header at 00:07Z shows +0.29% on the same 24h window — the
                    6-minute gap and the different 24h reference account for the
                    difference), 24h H/L $64,272 / $63,603, qVol $3.84B. Closes
                    are in-progress bars; treat every value as provisional until
                    each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms three positive lines above a confirmed
              floor with a tightening overhead cap. Spot $64,023 sits{' '}
              <span className="dn-tag bull">+3.38% over D-SMA20 $61,930</span>,{' '}
              <span className="dn-tag bull">+1.53% over D-EMA20 $63,060</span>,
              and <span className="dn-tag bull">+1.50% over the W-SMA200 floor
              $63,075</span> — three positive lines, essentially flat vs the
              07-12 note (D-SMA20 +3.28%, D-EMA20 +1.47%, floor +1.31%) as price
              held. The first overhead resistance is the{' '}
              <span className="dn-tag bear">D-SMA50 $64,652 (−0.97%)</span> /{' '}
              <span className="dn-tag bear">D-EMA50 $65,209 (−1.82%)</span> pair —
              the D-SMA50 has fallen to within $629 of spot (was $64,914 / −1.57%
              on 07-12), the tightest the cap has been all recovery and the level
              a spot base would need to reclaim. Above that, in order:{' '}
              <span className="dn-tag bear">D-EMA100 $68,667 (−6.76%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $68,689 (−6.79%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $70,008 (−8.55%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $70,699 (−9.44%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,832 (−8.32%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $70,461 (−9.14%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $71,806 (−10.84%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $73,759 (−13.20%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,354 (−13.89%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $74,718 (−14.31%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $76,109 (−15.88%)</span>.
              Far above and disused: W-EMA50 $79,474 (−19.44%), W-EMA100 $79,640
              (−19.61%), W-SMA50 $86,470 (−25.96%), W-SMA100 $88,480 (−27.64%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-13 00:05Z (close
                $64,007.80); offsets recomputed against live spot $64,022.87.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. Weekly MAs use the Binance W-MON convention
                (weekly close settles Mon 00:00Z), matching the lineage&rsquo;s
                floor and the 07-06 / 06-29 weekly-close references; the full
                matrix is computable (359 weekly bars on file). 200W-watch JSON
                is absent this run, so the floor is the matrix W-SMA200 $63,075
                (in-progress-inclusive, +1.50% under spot; the settled-basis
                W-SMA200 thru the 07-06 weekly bar is $62,852). Daily closes:
                07-06 $64,023.60, 07-07 $63,335.40, 07-08 $62,255.30, 07-09
                $63,197.00, 07-10 $64,129.50, 07-11 $63,783.00, 07-12
                $63,750.00 (the settled weekly close), 07-13 (in-progress)
                $64,007.80 — the last four (07-09 to 07-12) above the $63,075
                floor, with 07-08 $62,255.30 the one close below it.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book stays net-long-gamma +96.6M (shallower from +101.6M) · flip $61,687 (spot +3.79% above) · no near-dated negative amplifier on the strip · $64k–$68k positive wall band caps</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book stayed deeply net-long-gamma and de-gammaed
                another notch as the near expiries thinned
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+96.6M / 1%</span> (was +101.6M on
              07-12 — a −5.0M step shallower, the third straight de-gamma from
              +131.8M → +101.6M → +96.6M, still firmly dampening); the book
              remains long-gamma. The 0-γ flip moved{' '}
              <span className="dn-tag">$61,644 → $61,687 (+$43)</span>, and spot
              $64,023 sits{' '}
              <span className="dn-tag bull">+3.79% above flip</span> on
              spot-denominated math (64,022.87 / 61,687 − 1 = +3.787%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads +3.7% off its
              Deribit-index $63,994 ($29 below live spot), which is{' '}
              <span className="dn-tag bull">+3.74%</span> (63,994 / 61,687 − 1 =
              +3.740%) — both references positive, spot above the flip on both.
              The wall map keeps a positive band capping the overhead and a lone
              negative bidding the fade:{' '}
              <span className="dn-tag bull">$66k +20.88M</span> (heaviest),{' '}
              <span className="dn-tag bull">$65k +20.20M</span>,{' '}
              <span className="dn-tag bull">$64k +19.45M</span> (support just
              below live spot),{' '}
              <span className="dn-tag bull">$70k +17.44M</span>,{' '}
              <span className="dn-tag bull">$68k +16.01M</span>,{' '}
              <span className="dn-tag bear">$60k −13.17M</span> (the lone top-10
              negative, bidding a fade toward the floor),{' '}
              <span className="dn-tag bull">$80k +8.42M</span>,{' '}
              <span className="dn-tag bull">$67k +7.85M</span>,{' '}
              <span className="dn-tag bull">$72k +6.81M</span>,{' '}
              <span className="dn-tag bear">$55k −5.72M</span>.{' '}
              <span className="dn-em">
                The $64k–$68k positive band ($64k +19.45M, $65k +20.20M, $66k
                +20.88M, $67k +7.85M, $68k +16.01M) sums to roughly +84M of
                overhead support-turned-cap; the only meaningful negative gamma
                is $60k −13.17M / $55k −5.72M below spot, so the book is
                structurally bid into a fade toward the floor and offered into a
                squeeze back toward $66k. The SM re-short is running straight
                into the top of that positive band
              </span>. The expiry strip is dominated by positives with no
              near-dated amplifier: 13JUL 0.3DTE +2.69M (settles 08:00Z today,
              ~8h forward of this snap), 14JUL 1.3 +1.45M, 15JUL 2.3 −0.15M, 16JUL
              3.3 −0.06M (the two near negatives are negligible), then the forward
              chunks{' '}
              <span className="dn-tag bull">17JUL 4.3 +38.87M</span>,{' '}
              <span className="dn-tag bull">24JUL 11.3 +11.43M</span> and{' '}
              <span className="dn-tag bull">31JUL 18.3 +41.46M</span> (all
              positive), 28AUG 46.3 +8.17M, 25SEP 74.3 +0.01M, 25DEC 165.3
              +2.23M, 26MAR27 256.3 +0.94M, 25JUN27 347.3 +0.55M. No single
              expiry carries a negative amplifier weight anywhere on the strip —
              the dampening backdrop has no calendar catalyst to flip it near-term,
              which is exactly why the SM re-short is not a short trade for us.
            </p>

            <p>
              IV median across 870 instruments is{' '}
              <span className="dn-tag">41.7%</span> against 30D close-to-close
              RV of <span className="dn-tag">29.97%</span> — chain-level
              richness <span className="dn-tag">~+11.7pt</span>.{' '}
              <span className="dn-em">
                Disclosure: 870 instruments and 41.7% IV median are
                pre-13JUL-settle values read from the 00:01Z GEX file; the 13JUL
                0.3DTE +2.69M chunk clears at 08:00Z today (~8h forward of this
                snap) and the post-settle instrument count and IV median are NOT
                recomputed here — the strip carries no negative amplifier either
                way, so the settle is a non-event for the gamma regime.
              </span>{' '}
              A chain-median across N instruments,{' '}
              <span className="dn-em">not</span> a tradable spread;
              expiry-/strike-level vega, skew and term structure remain not
              loaded; the vol read stays framework-only. Put/Call OI ratio 0.55
              (126,973 put OI / 232,618 call OI). RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log
              returns anchored to parquet last bar 2026-07-13 00:05Z (the
              29-return alternate reads 29.61%; the 29.97% page value uses 30
              returns).
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · split rates/dollar risk-off (10Y 4.54%, TIPS 2.31% EXTREME, DXY 100.97 EXTREME) vs credit/liquidity risk-on (HY OAS 2.70%, Fed net liq $5.958T EXTREME) · panel essentially unchanged · reclaim-long rates filter TRUE at 4.54%</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape held its split shape and barely moved — rates and
                the dollar risk-off, credit and Fed liquidity risk-on
              </span>. Dashboard render is 2026-07-12 22:16Z, ~1.85h before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bull">4.54% (−2.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.82</span>, episodic z{' '}
              <span className="dn-tag">+1.21</span> — RISK-OFF tag but{' '}
              <span className="dn-em">below the 4.55% reclaim-long filter line</span>{' '}
              (TRUE at 4.54%) and just above the 4.53% put-spread re-grow leg
              (FIRED by 1bp). 10Y TIPS real{' '}
              <span className="dn-tag bear">2.31% (0.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.77</span>, episodic z{' '}
              <span className="dn-tag">+1.62</span> — EXTREME RISK-OFF, flat. 5Y5Y
              BE inflation{' '}
              <span className="dn-tag">2.20% (+2.0bp)</span>. HY OAS{' '}
              <span className="dn-tag">2.70% (0.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.21</span>, episodic z{' '}
              <span className="dn-tag bull">−0.59</span> — RISK-ON, 8bp below the
              2.78% re-grow gate, flat. MOVE bond vol{' '}
              <span className="dn-tag">69.6 (+0.66)</span> — still &ldquo;loose&rdquo;,
              a touch firmer. DXY{' '}
              <span className="dn-tag bear">100.97 (+0.03)</span>, regime z{' '}
              <span className="dn-tag bear">+2.11</span> — EXTREME RISK-OFF, flat.
              Fed net liquidity{' '}
              <span className="dn-tag bull">$5.958T (+0.118T)</span>, episodic z{' '}
              <span className="dn-tag bull">+2.47</span> — EXTREME RISK-ON, the
              +0.118T weekly jump holding. US-JP 10Y spread{' '}
              <span className="dn-tag">1.89% (−2.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag">161.97 (−0.40)</span>. NFCI −0.515 (stale
              9d).{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE
                at 4.54%; the put-spread re-grow gate&rsquo;s 10Y leg (&gt;
                4.53%) stays FIRED by a single basis point — a single-leg
                watch-event, not an auto-roll, with the HY OAS leg (&gt; 2.78%)
                still 8bp from firing at 2.70%. The panel is essentially
                unchanged from 07-12 — rates and dollar hard risk-off on the
                extremes, credit and Fed liquidity decisively risk-on, nothing
                moved enough to change the BTC read. JGB monthly 2.65% carries an
                EXTREME RISK-OFF monthly tag (stale 72d) — do not lean on it.
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
                <tr><td>US 10Y nominal</td><td className="num">4.54%</td><td className="num bull">−2.0bp</td><td className="num bear">+1.82</td><td className="num">+1.21</td><td className="bear">tight, RISK-OFF (below 4.55% filter)</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.31%</td><td className="num">0.0bp</td><td className="num bear">+2.77</td><td className="num">+1.62</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.20%</td><td className="num bear">+2.0bp</td><td className="num">−0.37</td><td className="num">−0.61</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.70%</td><td className="num">0.0bp</td><td className="num bull">−1.21</td><td className="num bull">−0.59</td><td className="bull">loose · RISK-ON (8bp to gate)</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.515</td><td className="num">−0.01</td><td className="num">−0.06</td><td className="num bull">−2.13</td><td className="stale">stale 9d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">69.6</td><td className="num bear">+0.66</td><td className="num bull">−0.47</td><td className="num">−0.24</td><td className="bull">loose · firmer on day</td></tr>
                <tr><td>DXY</td><td className="num">100.97</td><td className="num bear">+0.03</td><td className="num bear">+2.11</td><td className="num">+0.70</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.958T</td><td className="num bull">+0.118T</td><td className="num bull">+2.42</td><td className="num bull">+2.47</td><td className="bull">EXTREME RISK-ON</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.97</td><td className="num bull">−0.40</td><td className="num bear">+1.47</td><td className="num">+0.85</td><td className="neut">yen firmer on day</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.89%</td><td className="num">−2.0bp</td><td className="num bull">−0.79</td><td className="num">+1.21</td><td className="bull">tight</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7761</td><td className="num bull">−0.02</td><td className="num bull">−1.42</td><td className="num">−0.18</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="num">+1.43</td><td className="stale">monthly (72d) · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.315</span>{' '}
              (essentially flat from 07-12&rsquo;s 0.314, holding in the NORMAL
              band). BTC&rsquo;s tightest ties are the broad-risk complex:{' '}
              <span className="dn-tag">NQ +0.457</span>,{' '}
              <span className="dn-tag">SP500 +0.453</span>,{' '}
              <span className="dn-tag">TSLA +0.448</span>,{' '}
              <span className="dn-tag">COPPER +0.424</span>,{' '}
              <span className="dn-tag">GOLD +0.413</span>,{' '}
              <span className="dn-tag">SILVER +0.408</span>,{' '}
              <span className="dn-tag">PLAT +0.387</span>, then the energy
              inverse <span className="dn-tag">CL −0.355</span> /{' '}
              <span className="dn-tag">BRENT −0.341</span>, with{' '}
              <span className="dn-tag">NVDA +0.315</span>. 7d performance:{' '}
              <span className="dn-tag">BTC +0.00%</span> now flat vs{' '}
              <span className="dn-tag bear">NQ −0.01%</span> — a lead of just{' '}
              <span className="dn-tag">+0.01pt</span> (collapsed from +0.79pt on
              07-12 as the 06-30 low fully ages out of the 7d window),{' '}
              <span className="dn-tag bull">SP500 +0.51%</span>,{' '}
              <span className="dn-tag bear">JP225 −2.06%</span>,{' '}
              <span className="dn-tag bull">META +12.90%</span> (the 7d complex
              leader), <span className="dn-tag bull">NVDA +7.07%</span>,{' '}
              <span className="dn-tag bull">TSLA +1.88%</span>,{' '}
              <span className="dn-tag bull">AAPL +2.47%</span>,{' '}
              <span className="dn-tag bear">MSFT −2.07%</span>. Metals soft:{' '}
              <span className="dn-tag bear">GOLD −2.32%</span>,{' '}
              <span className="dn-tag bear">SILVER −6.05%</span>,{' '}
              <span className="dn-tag bear">PLAT −2.43%</span>. Energy ripped:{' '}
              <span className="dn-tag bull">CL +7.87%</span>,{' '}
              <span className="dn-tag bull">BRENT +9.58%</span>,{' '}
              <span className="dn-tag bear">NGAS −9.32%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lead over the TradFi engine has closed to +0.01pt
                (BTC +0.00% vs NQ −0.01%) from +0.79pt on 07-12 — the
                outperformance has fully aged out as the 06-30 low rolls off the
                window; BTC and NQ are now flat-flat over 7d, neither leading. The
                correlation band held NORMAL, so BTC is neither decoupled nor
                systemically pinned to the risk complex.
              </span>
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · book FLAT · floor confirmed on the weekly close but SM RE-shorted into it · cover-bounce scout price pre-condition TRUE, demand block INVERTED to an SM short-build · no short into positive gamma · no fresh hedge on a single-leg rates fire</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 07-12 note&rsquo;s call — the floor is decided on the Monday
                weekly close, and the long is decided when spot demand replaces
                the covering fuel — printed correct on both legs
              </span>. The weekly close settled the floor: the 07-06 week closed
              $63,750.00, +1.07% above the $63,075 floor, so the reclaim held on
              the decisive event — the re-confirm-break trigger is now dis-armed
              and settled. But the second leg resolved to the bearish side even
              harder than 07-12: spot demand did not replace the covering fuel —
              instead smart money re-shorted, net −1,103 → −4,426 on a discrete
              re-stack step, while retail re-crowded longs and funding bled toward
              zero. The scout&rsquo;s price pre-condition stays TRUE on all four
              legs — spot $64,023 above the flip $61,687, above D-EMA20 $63,060,
              above D-SMA20 $61,930, above the floor $63,075 — but the demand
              block did not merely fail to confirm, it inverted: the buyer of
              record is now a professional short, not a covering perp or a spot
              base. The trade book today is: no scout long into an SM short-build,
              no short into a deep positive-gamma book with no amplifier, no fresh
              hedge on a single-leg 1bp rates fire — wait for a spot-demand base
              (spot CVD pulling OI UP, not leaking into a shrinking book while SM
              shorts) with a reclaim of the D-SMA50 $64,652 / D-EMA50 $65,209 cap
              before scout-long.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · DEFERRED · price pre-condition TRUE (4/4 legs) · demand block INVERTED to an SM short-build</span>
              <div className="dn-trade-name">
                Cover-bounce scout — price legs all TRUE, but the buyer of record inverted from a covering short to a fresh SM short; stand down
              </div>
              <div className="dn-thesis">
                The scout&rsquo;s price pre-condition is satisfied on all four
                legs (spot above flip, D-EMA20, D-SMA20, and the W-SMA200 floor)
                and has been for the whole recovery — but a satisfied price
                pre-condition was never the trigger. The trigger is a confirmed
                spot-demand base, and the demand read is worse than 07-12: the
                07-12 note flagged the buyer as a covering perp short into a
                completed cover; today that cover reversed into a fresh SM short
                build (net −1,103 → −4,426, a long flush −2,430 + short add +895
                on a discrete re-stack step @ 2026-07-12 07:06Z / BJ 15:06), retail re-crowded
                longs +1.90pt to 57.60%, funding bled to +1.71% ann and OI leaked
                −693. Spot CVD did buy (+5,639 over 24h with no reset) — the one
                constructive thread — but it leaked into a −0.68% OI unwind while
                perps net-sold (futCVD −216, taker −216) and smart money added
                shorts, which is spot absorbing a perp de-gross AND an SM short,
                not a base building. Entering long here buys into a professional
                short lean above a just-confirmed floor, not the start of demand.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">price pre-condition (TRUE, 4/4)</span><span className="dn-lvl-v bull">spot $64,023 &gt; flip $61,687 AND &gt; D-EMA20 $63,060 AND &gt; D-SMA20 $61,930 AND &gt; W-SMA200 floor $63,075</span></div>
                <div><span className="dn-lvl-k">demand trigger (the real gate — UNMET, now INVERTED)</span><span className="dn-lvl-v bear">spot CVD pulling OI UP (not leaking into a shrinking book) AND SM covering (not adding shorts) AND a 1h/4h close reclaim of D-SMA50 $64,652 / D-EMA50 $65,209 with OI building — a spot base, not a professional short lean</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on the demand trigger, scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1h close &lt; $63,075 (W-SMA200 floor — a close below re-arms the re-confirm-break and ends the digestion read even after the weekly confirm)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$68,667 (D-EMA100) is the working first target — the D-SMA50 $64,652 / D-EMA50 $65,209 cap is entry validation (a demand-trigger entry sits at the reclaim), not a take-profit</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · first target $68,667</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> a demand-trigger entry near the D-EMA50 reclaim
                ~$65,209 with the stop at the floor $63,075 = ~$2,134 risk; first
                target back at $64,652 is below entry, so the working first target
                is $68,667 (D-EMA100) = ~$3,458 reward ≈ 1.6:1 — acceptable but
                conditional on the base forming above the cap AND smart money
                covering, not on the price pre-condition. <b>Hard rule:</b> a
                satisfied price pre-condition is NOT an entry signal on its own —
                it has been TRUE the whole recovery while the buyer was first
                covering fuel, then a professional short. The entry is the spot
                base (CVD pulling OI up + SM covering + the D-EMA50 cap
                reclaimed), in that order. No scout long into an SM short-build.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · dampening regime intact · no near-dated negative amplifier on the strip · the SM re-short is not a short trade for us</span>
              <div className="dn-trade-name">
                No short at the floor into a +96.6M net-long-gamma book — the dealer strip has no catalyst to flip dampening near-term
              </div>
              <div className="dn-thesis">
                Aggregate GEX +96.6M (a third straight de-gamma from +131.8M →
                +101.6M → +96.6M but firmly net-long-gamma), flip $61,687 with
                spot +3.79% above, the $64k–$68k positive band capping and the
                lone $60k −13.17M negative bidding a fade toward the floor. The
                entire expiry strip is positive-dominated — no 13JUL / 17JUL /
                24JUL / 31JUL negative amplifier anywhere (the near 15JUL −0.15M
                / 16JUL −0.06M are negligible) — so a short pressed here fights a
                dampening book with no calendar catalyst to convert it, even
                though smart money is re-shorting. The 13JUL 0.3DTE +2.69M settles
                08:00Z today (~8h forward of this snap) as a non-event for the
                gamma regime. Reopening short requires a fresh near-dated
                negative-gamma amplifier on the strip AND a 1d close below the
                $63,075 floor — the SM re-short is a warning that the demand base
                is further away, not a green light to join the short.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · no short into positive gamma</span></div>
                <div><span className="dn-lvl-k">re-arm short trigger</span><span className="dn-lvl-v bear">a fresh near-dated negative-gamma expiry on the strip AND a 1d close &lt; $63,075 (floor loss re-arming the re-confirm-break even after the weekly confirm)</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no short at the floor into a +96.6M net-long-gamma book with a positive-dominated expiry strip — the SM short lean is not a substitute for a negative-gamma amplifier</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework:</b> the dampening regime has held every day of the
                recovery and the pullback and re-short did not threaten it — GEX
                stayed deeply positive, the flip stayed well below spot, and
                no negative amplifier printed on the near strip. A short is a
                catalyst trade, and there is no catalyst; SM re-shorting into a
                positive-gamma book is information about the demand base, not a
                trade signal for us.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · single-leg rates fire (10Y &gt; 4.53% by 1bp) · HY OAS leg 8bp away · no roll</span>
              <div className="dn-trade-name">
                Downside put-spread — no roll: the put-spread re-grow gate is a single-leg 1bp fire, not the OR-gate both-leg confirmation
              </div>
              <div className="dn-thesis">
                The put-spread re-grow gate is an OR of two legs (HY OAS &gt;
                2.78% OR 10Y &gt; 4.53%). The 10Y leg is FIRED at 4.54% but by a
                single basis point — a watch-event, not a conviction fire — while
                the HY OAS leg sits 8bp away at 2.70% (RISK-ON). The reclaim-long
                rates filter (10Y &lt; 4.55%) stays TRUE at 4.54%, so the same
                4.54% print is simultaneously below the reclaim filter and above
                the re-grow leg — a knife-edge that argues for no action either
                way. No fresh hedge on a single-leg 1bp fire into a dampening
                dealer book with no near-dated negative amplifier.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · no roll on a single-leg 1bp fire</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (both-leg conviction)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.70%, 8bp to fire) confirming the 10Y &gt; 4.53% leg (currently 4.54%, fired by 1bp)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — still TRUE at 4.54%; awaits a BTC-internal spot-demand pivot</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set
                as levels drift, not backtested breakpoints. A hedge leg would be
                a roll to 17JUL26 4.3DTE or 24JUL26 11.3DTE — but both carry
                positive gamma (+38.87M / +11.43M), so a fresh tail would not get
                the amplifier tailwind. The single-leg 10Y fire at 4.54% is inside
                1bp of the reclaim-long filter; treat it as noise until the HY OAS
                leg confirms.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle · the completed cover REVERSED into a fresh short build on a discrete re-stack step · read as a standalone signal, no calendar prior</span>
              <div className="dn-trade-name">
                Squeeze-cycle — the two-session cover reversed: SM re-shorted −1,103 → −4,426 on a discrete re-stack-hostile-2 step @ 2026-07-12 07:06Z (BJ 07-12 15:06), the deepest net-short since 07-10
              </div>
              <div className="dn-thesis">
                The squeeze that fueled the reclaim completed as a slow cover on
                07-12 (SM −7,908 → −2,057 → −1,103), and the next discrete SM
                event was not a further cover but a REVERSAL: a
                re-stack-hostile-2 step at{' '}
                <span className="dn-tag bear">2026-07-12 07:06Z (BJ 07-12 15:06)</span>{' '}
                — Δnet −2,820 in one minute (Δlong −1,747, Δshort +1,073, spot
                $63,801), just under the −3k threshold but the sharpest
                single-minute step of the window — drove SM net from nearly flat
                (−541 @ 2026-07-12 05:31Z / BJ 13:31) to the trough −4,446 @ 2026-07-12 18:01Z / BJ 07-13 02:01. This
                is a fresh short build, not the ignition of a cover-bounce: smart
                money watched the floor confirm on the weekly and re-shorted into
                it. The signature re-arms the short-side watch as information, but
                it is NOT a short trade for us — the dealer book is positive-gamma
                with no amplifier, so the SM short lean has no structural fuel to
                extend it.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">cover reversed into a fresh short build · SM −7,908 (07-09) → −1,103 (07-12) → −4,426 (today) · discrete re-stack step @ 2026-07-12 07:06Z (BJ 07-12 15:06) Δnet −2,820</span></div>
                <div><span className="dn-lvl-k">SM 24h band</span><span className="dn-lvl-v">peak (least short) −541 @ 2026-07-12 05:31Z (BJ 13:31) · trough −4,446 @ 2026-07-12 18:01Z (BJ 07-13 02:01) · one discrete re-stack step, then a hold near the trough</span></div>
                <div><span className="dn-lvl-k">forward gating</span><span className="dn-lvl-v">a fresh Δnet ≤ −3k re-stack extends the short watch; SM COVERING back toward flat + spot CVD pulling OI up is the affirmative long read — the re-short is the counter-signal to the scout, not a trade</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a completed cover reversing into a
                fresh short build is the cleanest bearish positioning statement of
                the recovery — retail long / SM short / OI leaking, the shape last
                seen on 07-09. But a bearish positioning shape into a
                positive-gamma dealer book with a just-confirmed floor is a reason
                to STAY FLAT, not to short: the re-short is information that the
                demand base is further away, read as a standalone signal with no
                calendar prior.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the floor CONFIRMED on the settled weekly close · SM re-shorted into the confirmation · demand block inverted · scout deferred on the demand trigger · book FLAT</span>
            </h2>

            <p>
              Of the 07-12 decision conditions: the weekly-close-settles-the-floor
              condition FIRED and resolved CONSTRUCTIVE (the 07-06 week closed
              $63,750.00, +1.07% above the $63,075 floor — the reclaim held on the
              decisive weekly close, the re-confirm-break dis-armed and settled);
              the cover-bounce scout DID NOT TRIGGER (price pre-condition stays
              TRUE but the demand trigger is unmet and now inverted); the
              floor-lost condition DID NOT FIRE (no daily close below the floor);
              the dampening regime HELD (GEX +96.6M, no near-dated negative
              amplifier); the fresh-re-stack short-re-arm condition FIRED as a
              signal (Δnet −2,820 @ 2026-07-12 07:06Z / BJ 15:06, the SM re-short) but is NOT a
              short trade into positive gamma; the rates filter stayed TRUE (10Y
              4.54% &lt; 4.55%). <em>The lineage&rsquo;s central structural
              question — does the reclaim hold on a completed weekly close —
              resolved YES; but the same day the floor confirmed, smart money
              re-shorted into it and retail re-crowded the other side.</em> The
              conditions today re-set around a confirmed floor, an inverted demand
              block, a fresh SM short build, and a scout gated on the demand
              trigger:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Weekly close settled the floor (Mon 07-13) — RESOLVED</td><td className="bull">the 07-06 week closed $63,750.00, +1.07% above the $63,075 W-SMA200 floor (+1.43% above the settled-basis $62,852); the reclaim held on the decisive weekly close</td><td>the re-confirm-break trigger is dis-armed AND settled; the digestion-above-floor read is confirmed on a completed weekly — the structural question resolved constructive</td></tr>
                <tr><td>Cover-bounce scout (long) — demand trigger</td><td className="bull">spot CVD pulling OI UP AND SM covering (not adding shorts) AND a 1h/4h reclaim of D-SMA50 $64,652 / D-EMA50 $65,209 with OI building</td><td>scout long 0.2R, target $68,667 (D-EMA100); the price pre-condition is already TRUE and is NOT the trigger — the demand block has inverted to an SM short-build</td></tr>
                <tr><td>Floor lost (re-arms even after weekly confirm)</td><td className="bear">1d close &lt; $63,075 (W-SMA200); a subsequent weekly close below re-confirms the break</td><td>the reclaim is handed back; the digestion-above-floor read ends and the short-side watch re-arms — but only with a fresh near-dated negative-gamma amplifier</td></tr>
                <tr><td>Dampening regime intact</td><td className="bull">GEX stays net-long-gamma AND no near-dated negative amplifier prints on the near strip (13JUL/17JUL/24JUL/31JUL all positive; 15JUL/16JUL negligible)</td><td>no short at the floor into positive gamma; the fade toward the floor is dealer-bid ($60k −13.17M), the squeeze toward $66k is dealer-offered — the SM re-short has no gamma fuel</td></tr>
                <tr><td>Fresh re-stack (short re-arm) — FIRED as a signal</td><td className="bear">Δnet −2,820 re-stack-hostile-2 @ 2026-07-12 07:06Z / BJ 15:06 (Δshort &gt; 0 + Δlong &lt; 0 same minute) drove SM to −4,426</td><td>the short watch is armed as information, NOT a trade — a bearish positioning shape into positive gamma with a confirmed floor is a reason to stay flat; read as a standalone signal, no calendar prior</td></tr>
                <tr><td>Macro tail re-grow (single-leg fire)</td><td className="bear">10Y &gt; 4.53% FIRED at 4.54% by 1bp; HY OAS &gt; 2.78% still 8bp away at 2.70%</td><td>no roll on a single-leg 1bp fire; wait for the HY OAS leg to confirm before any hedge roll</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.54% (by 1bp); awaits a BTC-internal spot-demand pivot</td><td>standalone filter TRUE; needs the demand trigger to translate to scout long</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the fresh SM short build (−1,103 → −4,426) presses a 1d
                close below the $63,075 floor and hands back the just-confirmed
                reclaim, or whether the spot-CVD accumulation (+5,639 over 24h,
                leaking into a shrinking OI while SM shorts) finally stops leaking,
                pulls OI up, and forces smart money to cover back toward flat — a
                real spot base reclaiming the D-SMA50 $64,652 / D-EMA50 $65,209
                cap. The floor confirmed on the weekly close; the question is now
                whether spot demand can overpower a professional short lean, or
                whether the re-short fades the reclaim the day after it settled
              </span>. Until then this note runs as written: the book is FLAT — no
              scout long into an SM short-build, no short into a deep
              positive-gamma book with no amplifier, no fresh hedge on a
              single-leg 1bp rates fire. The floor held on the close that counts,
              the demand block inverted, smart money re-shorted, and the dealer
              book stayed dampening. The right read for the next 24h is{' '}
              <em>patient — the floor is confirmed, but the buyer of record is now
              selling; the long is decided when spot demand overpowers the
              re-short, not when the price pre-condition stays lit</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> v2 · 2026-07-13 00:07Z snapshot · post codex hostile
            audit (verdict BLOCK-CRITICAL on v1). STAGE B codex cross-model audit
            + ask-deepseek supplementary numeric second-audit are recorded at
            audits/2026-07-13-desk-note.md; STAGE C applied every CRITICAL /
            MAJOR / MINOR / NIT finding across the FULL EN file (not only the
            cited lines) and ran a grep-closure pass — pattern searched, hits
            before, hits after — for each. <b>codex findings:</b>{' '}
            <b>DN-001 (CRITICAL):</b> BJ-derived live-tape event timestamps were
            mislabelled UTC/Z or wrongly re-converted. Patterns searched:{' '}
            <code>15:06Z</code>, <code>23:07Z</code>, <code>14:30Z</code>,{' '}
            <code>13:31Z</code>, <code>02:01Z</code>, <code>21:47Z</code>,{' '}
            <code>08:01Z</code> (tape refs), <code>BJ 23:06</code>, plus the
            short-form <code>@ 07-13 08:01</code> funding-min row — ~22 stale
            hits across 17 lines before; every live-tape <code>t</code> field
            now prints true UTC-Z + BJ conversion (re-stack 2026-07-12 07:06Z /
            BJ 15:06, high 15:07Z / BJ 23:07, low 06:30Z / BJ 14:30, SM peak
            05:31Z / BJ 13:31, trough 07-12 18:01Z / BJ 07-13 02:01, funding max
            13:47Z / BJ 21:47, funding min 07-13 00:01Z / BJ 08:01). Hits after:
            0 — RESOLVED. <b>DN-002 (MAJOR):</b> the weekly-lineage &ldquo;opened
            $64,007.80&rdquo; presented the parquet last-bar close as a weekly
            open. Pattern <code>opened $64,007.80</code> / <code>opened</code>:
            1 hit before, re-worded to &ldquo;last marked $64,007.80 at
            00:05Z&rdquo;; the other $64,007.80 refs already label it as the
            in-progress parquet last bar. Hits after: 0 — RESOLVED.{' '}
            <b>DN-003 (MAJOR):</b> &ldquo;stayed triple-digit positive&rdquo;
            overstated GEX (+96.6M, sub-triple-digit-millions). Pattern{' '}
            <code>triple-digit</code>: 1 hit before, changed to &ldquo;stayed
            deeply positive&rdquo;. Hits after: 0 — RESOLVED.{' '}
            <b>DN-004 (MINOR):</b> Put/Call OI parenthetical reversed
            numerator/denominator. Pattern{' '}
            <code>232,618 call OI / 126,973 put OI</code>: 1 hit before, fixed to
            &ldquo;126,973 put OI / 232,618 call OI&rdquo;. Hits after: 0 —
            RESOLVED. <b>DN-005 (MINOR):</b> exact-window caveat understated the
            effect as &ldquo;a few BTC&rdquo;. Pattern <code>a few BTC</code>: 1
            hit before, quantified as &ldquo;tens of BTC (4h CVD +251 → +293, 1h
            −98 → −144)&rdquo;. Hits after: 0 — RESOLVED. <b>DN-006 (NIT):</b>{' '}
            $64k wall called &ldquo;support just overhead&rdquo; while live spot
            $64,022.87 is above $64k. Pattern <code>support just overhead</code>:
            1 hit before, changed to &ldquo;support just below live spot&rdquo;.
            Hits after: 0 — RESOLVED. <b>ask-deepseek adjudicated:</b>{' '}
            <b>#3 (CRITICAL):</b> SM cut fraction — recomputed |−4,426 −
            (−1,103)| = 3,323 (not 3,324), 3,323 / 1,103 = 301.3% (not 301.6%).
            Patterns <code>301.6%</code> / <code>3,324</code>: 4 hits before, all
            corrected to 301.3% / −3,323; the &ldquo;≈ 4.0× / nearly
            quadrupled&rdquo; framing is retained (4,426 / 1,103 = 4.01×, the
            level ratio, consistent with a 301.3% change). Hits after: 0 —
            RESOLVED. <b>#7 (MAJOR):</b> OI 24h change — 101,345 − 100,652 = 693,
            not 692. Pattern <code>692</code>: 5 hits before, all corrected to
            −693 (the −0.68% rounding is unchanged). Hits after: 0 — RESOLVED.{' '}
            <b>#5 (CRITICAL, adjudicated NOT-A-DEFECT):</b> the by-expiry GEX
            strip sums to ~+107.59M vs the +96.6M aggregate. codex (primary
            auditor, owns the publish gate) examined the identical discrepancy in
            its Open Issues and did NOT mark it against the draft because the
            source GEX panel is itself non-additive and the note makes no claim
            that the strip reconstructs the aggregate; no edit applied, per the
            rule that ask-deepseek is a supplementary recompute, not an auditor.
            Grep-closure completed with ZERO stale matches for every CRITICAL and
            MAJOR pattern before promotion. Snapshot provenance and the archive
            path (snapshots/2026-07-13-0007/) are recorded in the manifest band
            above. <b>post codex hostile audit.</b>
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-07-13 00:07Z, live
            tape row pinned t=&ldquo;07-13 08:07&rdquo; BJ) with section-level
            provenance disclosed in the manifest band above; the macro Tier-1
            panel render is 2026-07-12 22:16Z (~1.85h before snapshot) and some
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
                The floor confirmed on the weekly close — and smart money
                re-shorted into it. The level held; the buyer did not show. The
                scout&rsquo;s gate is the demand base, not the price
                pre-condition. Patient.
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
            v2 · 2026-07-13 00:07Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
