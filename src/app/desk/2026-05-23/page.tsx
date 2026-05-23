import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// Internal-only route: not in public nav, not in sitemap, noindex/nofollow.
// Description deliberately anodyne — any future external share (Slack/email
// link preview) shows neutral text rather than dated trade specifics.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-05-23 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-05-23',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-05-23' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260523() {
  await requireViewer('/desk/2026-05-23');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · DESK NOTE · 2026-05-23 · v2</span>
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
              <span className="dn-big">$75,543</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−2.58%</span>
            </div>
          </div>

          {/* DATA PROVENANCE BAND */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-05-23 00:08Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-23 00:08Z</td>
                  <td className="dn-flag">fresh · 1-min</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-05-23 00:01Z scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    ~7-min stale vs snapshot anchor · in-progress bar · scan
                    archived in audits/2026-05-23-desk-note.md
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 00:01Z snapshot</td>
                  <td className="dn-flag">fresh · Deribit idx $75,542 vs live $75,543 · 922 inst.</td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 00:01Z
                  </td>
                  <td className="dn-flag">~7-min lag · 7d 1h bars · 22 assets</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-22 22:16Z render</td>
                  <td className="dn-flag">
                    ~2h render lag · FRED Tier-1 fresh · roughly unchanged vs
                    05-22 · Tier-3 inflation panel fetch-failed (driver-only ·
                    not load-bearing)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-05-23 00:06Z</td>
                  <td className="dn-flag">
                    ~2-min stale · offsets recomputed vs live spot
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
                  <td className="dn-flag">claims explicitly framework-only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h ann.</span>
              <span className="dn-v">+2.2%</span>
              <span className="dn-src">live · 00:08Z · 24h mean +2.4% · briefly negative mid-window</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+3.6% → +2.2%</span>
              <span className="dn-src">range −1.1% / +5.0% · longs paid less, still paid</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+4.22% (+4,250 BTC)</span>
              <span className="dn-src">live · grew on a fall · fresh short supply</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v">60.0 / 40.0</span>
              <span className="dn-src">live_db `mkt_long_pct` · crowded MORE long 55.3 → 60.0</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−14.5k (net SHORT)</span>
              <span className="dn-src">live · long 11.68k − short 26.20k</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 05-22 note</span>
              <span className="dn-v bear">−1.3k → −14.5k</span>
              <span className="dn-src">re-stacked +13.2k BTC short (long −6.2k · short +7.0k)</span>
            </div>
            <div>
              <span className="dn-k">IV / 30d RV</span>
              <span className="dn-v">41.5% / 25.8%</span>
              <span className="dn-src">GEX median IV · 922 inst.</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−1.0% (below)</span>
              <span className="dn-src">flip $76,325 · aggregate GEX −57.1M (was +67.4M)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              The 05-22 note set a single line that re-writes this note — a 1h
              close out of the $76,500–$78,300 box. Over the next 24h{' '}
              <span className="dn-signal">
                the lower edge broke and the flip-break short triggered
              </span>
              : 1h close $76,497 at 2026-05-22 19:00Z, deep into a SM net short
              of −17k, with the dealer map already in negative-gamma regime.
              Price has carried to <span className="dn-tag bear">$75,543</span>{' '}
              (<span className="dn-tag">24h −2.58%</span>); the first target
              $75,700 printed, the second $75,000 sits ~$540 away. The story
              of the day is not the trigger — the trigger was set up by 05-22.
              The story is what made the trigger arm:{' '}
              <span className="dn-em">
                six hours after the 05-22 snapshot, smart money re-stacked
                the entire short book and then some — SM net went from −1.3k
                to −16.7k inside the six minutes 06:30Z → 06:36Z on 05-22, at
                a price of ~$77,400. The 05-22 read &ldquo;positioning has no
                lean&rdquo; was true for six hours. SM came back hard, then
                the box broke under the weight of the stack.
              </span>{' '}
              Dealer gamma swung from <span className="dn-tag bull">+67.4M</span>{' '}
              to <span className="dn-tag bear">−57.1M</span> — a ~$125M
              regime flip from dampening to amplifying. We are now below the
              0-γ flip at <span className="dn-tag bear">$76,325</span>, in
              negative-gamma territory, with SM more short than at any point
              in the prior week and a fat negative pocket at{' '}
              <span className="dn-tag bear">$75k −53.5M</span> below spot.
            </p>

            <p>
              BTC sits at <span className="dn-tag">$75,543</span>, $782 below
              the flip and $1,011 below the prior box floor. The 05-22 anchor
              cluster (D-EMA50 $76,797 / D-EMA100 $76,873 / D-SMA150 $76,948)
              broke as supports — all three are overhead now, with{' '}
              <span className="dn-tag bear">D-SMA50 $76,527 (−1.29%)</span>{' '}
              and <span className="dn-tag bear">D-EMA50 $76,671 (−1.47%)</span>{' '}
              the immediate ceiling and{' '}
              <span className="dn-tag bear">D-EMA100 $76,808 (−1.65%)</span> /{' '}
              <span className="dn-tag bear">D-SMA150 $76,854 (−1.71%)</span>{' '}
              stacked right behind. Below: a thin shelf at{' '}
              <span className="dn-tag bull">W-SMA20 $74,943 (+0.80%)</span>,
              then <span className="dn-tag bull">W-EMA200 $73,687 (+2.52%)</span>,
              then the <span className="dn-tag bull">D-SMA100 $72,593 (+4.06%)</span>{' '}
              cycle anchor. RSIs are stretched ({' '}
              <span className="dn-tag">1h 23.1</span>,{' '}
              <span className="dn-tag">30m 21.1</span>,{' '}
              <span className="dn-tag">15m 29.7</span>) and a ⚡ 1h TD9 BUY
              printed at $75,475 — the first oversold-reversal hint of the
              move. The box read is invalid; the new read is below-the-flip
              with negative gamma underneath and a near-term bounce risk in
              the wash.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape</span>
            </h2>

            <p>
              The whole 05-22 thesis pivoted on &ldquo;SM is no longer locked
              hard short — it covered 81%.&rdquo; <span className="dn-signal">
                That read held for exactly six hours and then SM put it all
                back, and more
              </span>
              . SM net went from{' '}
              <span className="dn-tag">−1,290 BTC</span> at the 05-22 snapshot
              to <span className="dn-tag bear">−14,517 BTC</span> now — a{' '}
              <span className="dn-tag bear">−13,227 BTC swing</span>, split
              as long book{' '}
              <span className="dn-tag">17.92k → 11.68k (−6.24k)</span> and
              short book{' '}
              <span className="dn-tag">19.21k → 26.20k (+6.98k)</span>. The
              re-stack was not a drift: <span className="dn-em">
                SM net collapsed from −1.16k to −16.66k inside the six minutes
                14:30→14:36 Beijing (06:30Z→06:36Z) on 05-22, in two discrete
                steps (−1.16k → −9.68k at 14:31, then −9.68k → −16.66k at
                14:36), at a spot price of ~$77,400. It stayed in the −14k to
                −17.6k range for the remaining ~17.5 hours, currently −14.5k.
                It never re-narrowed toward zero, and it never crossed net
                long.
              </span>{' '}
              The honest synthesis: 05-22 said positioning was neutral; six
              hours later positioning was the most short it had been all
              week, and the box broke under that stack. The 05-22 sized the
              flip-break short at 0.3R precisely because positioning was
              &ldquo;no longer co-signing&rdquo; — by trigger time at 19:00Z,
              positioning was very much co-signing, more than the 05-21
              version ever had. The conditional gating did its job (SM net
              still &lt; 0 at trigger — held at −17.4k); the size ceiling did
              not. Note that for next-version sizing on flip-break trades.
            </p>

            <p>
              The leverage side told the stacking story underneath. Funding
              live <span className="dn-tag">+2.2% ann</span> (longs still pay,
              barely), down from the 05-22 endpoint of +3.6% — and the 24h
              range was <span className="dn-tag">−1.1% / +5.0%</span> with a
              mean of +2.4%, meaning funding briefly went{' '}
              <span className="dn-em">negative</span> mid-window (shorts paid
              longs for ~tens of minutes) at the exact moment SM was stacking
              the short. OI{' '}
              <span className="dn-tag bear">+4.22% (+4,250 BTC) on 24h</span>{' '}
              — OI growing while price fell −2.58% is the signature of fresh
              short supply, not long capitulation; the SM short add alone
              accounts for ~+7.0k of contract growth on the short leg.
              Retail (Binance mkt) <span className="dn-tag bear">
                crowded more long, 55.3 → 60.0%
              </span>{' '}
              — into the drop. Perp holds a{' '}
              <span className="dn-tag bear">−$99 discount</span> to spot
              (slightly wider than 05-22&rsquo;s −$70); 1-minute aggressor
              skew snapshot <span className="dn-tag">+43.7</span> (noisy at
              this resolution — the metric prints in the tens both directions
              minute-to-minute; treat as a point read, not a window
              average).{' '}
              <span className="dn-em">
                Read the four together: SM stacking short + OI growing on
                falling price + retail piling longer + perp discount widening
                = the SM short is loaded, retail is the counterparty, and
                the futures order book sits at a discount even on a net-buy
                aggressor minute — the bid is offshore (spot CVD), not
                onshore (futures).
              </span>
            </p>

            <p>
              Windowed flow shows the day in three acts. 24h: price{' '}
              <span className="dn-tag bear">−2.58%</span>, OI{' '}
              <span className="dn-tag bear">+4,250 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +984</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +1,302</span>, big-print{' '}
              <span className="dn-tag bull">+1,043 BTC / 947 prints</span>,
              taker-net <span className="dn-tag bull">+1,300</span> —{' '}
              <span className="dn-em">
                net aggressive buying across the day, absorbed by fresh short
                supply
              </span>
              . 4h: price <span className="dn-tag bear">−0.59%</span>, OI{' '}
              <span className="dn-tag">+172 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −583</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −561</span>, big-print{' '}
              <span className="dn-tag bear">−134 BTC / 168 prints</span> —
              continuation selling. 1h (into the snapshot): price{' '}
              <span className="dn-tag bear">−0.34%</span>, OI{' '}
              <span className="dn-tag">+6 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +292</span>, futures CVD{' '}
              <span className="dn-tag">Δ +30</span>, big-print{' '}
              <span className="dn-tag bull">+39 BTC / 39 prints</span> — a
              fresh spot bid into the low alongside the printed TD9 BUY.
              Treat the 1h tape as a counter-trend bounce warning, not as a
              reversal — same flow signature 05-21 carried at $76k, before
              SM re-stacked and the move continued.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · oversold-stretched</span>
            </h2>

            <p>
              The multi-timeframe map flipped from{' '}
              <span className="dn-em">neutral-and-coiled</span> on 05-22 to{' '}
              <span className="dn-signal">
                bear-trending with oversold flags on the fast TFs
              </span>
              . Fast RSIs collapsed — 1h <span className="dn-tag">23.1</span>,
              30m <span className="dn-tag">21.1</span>, 15m{' '}
              <span className="dn-tag">29.7</span> — and a{' '}
              <span className="dn-tag bull">⚡ 1h TD9 BUY</span> printed at
              $75,475, the first oversold-reversal hint. The mid TFs sit deep
              but not stretched: 4h <span className="dn-tag">30.4</span>, 8h{' '}
              <span className="dn-tag">32.3</span>. Slow TFs are merely
              softer: 1d <span className="dn-tag">40.4</span>, 3d{' '}
              <span className="dn-tag">48.4</span>. Cross-pattern: 4h printed
              a <span className="dn-tag bear">water-down death cross 2 bars
              ago</span>, 8h a <span className="dn-tag bear">water-down death
              cross 1 bar ago</span>, 30m a water-down death cross 21 bars
              ago, while the 15m and the 1w hold{' '}
              <span className="dn-tag bull">water-down golden crosses</span>{' '}
              4–5 bars ago. Cloud picture flipped down: 15m / 1d / 1M above
              the cloud; 30m / 1h / 4h / 8h / 1w below; 12h cloud lid just
              broke (1 bar below, ↑78.0k); 3d still in cloud (73.5k–93.0k).
              <span className="dn-em">
                Read straight: the structure cracked open downward. The
                immediate read is bottom-side-stretched on the fast TFs —
                bounce risk is real — but the mid and slow TFs have not yet
                printed reversal patterns, and the 1d still has room to fall
                into the $74.6k cloud lid (TD Buy 2, still 6 bars from a 9).
                This is the 00:01Z MTF scan — −7 min vs the 00:08Z snapshot,
                archived in audits/2026-05-23-desk-note.md per F-02 lineage.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">75,475</td><td className="num hot">29.7</td><td className="bull">golden (water-dn) 4b</td><td className="bear">below ↑76.9k</td><td>Buy 2</td><td>BULL reg</td></tr>
                <tr><td>30m</td><td className="num">75,475</td><td className="num hot">21.1</td><td className="bear">death (water-dn) 21b</td><td className="bear">below ↑77.4k</td><td>Buy 5</td><td>BEAR hid</td></tr>
                <tr><td>1h</td><td className="num">75,475</td><td className="num hot">23.1</td><td className="bear">death (water-up) 18b</td><td className="bear">below ↑77.3k</td><td className="hot">⚡ TD9 BUY</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">75,499</td><td className="num">30.4</td><td className="bear">death (water-dn) 2b</td><td className="bear">below ↑78.1k</td><td>Buy 5</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">75,499</td><td className="num">32.3</td><td className="bear">death (water-dn) 1b</td><td className="bear">below ↑78.8k</td><td>Buy 4</td><td>BEAR hid</td></tr>
                <tr><td>12h</td><td className="num">75,475</td><td className="num">32.7</td><td className="neut">—</td><td className="bear">below ↑78.0k 1b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">75,475</td><td className="num">40.4</td><td className="bear">death (water-up) 11b</td><td className="bull">above ↓74.6k</td><td>Buy 2</td><td>BEAR reg</td></tr>
                <tr><td>3d</td><td className="num">75,475</td><td className="num">48.4</td><td className="neut">—</td><td className="neut">in cloud 73.5–93.0k</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">75,478</td><td className="num">44.4</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑100.3k</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">75,478</td><td className="num">48.2</td><td className="neut">—</td><td className="bull">above ↓46.9k</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (rolling latest
                    file; archived verbatim in audits/2026-05-23-desk-note.md).
                    Active ⚡TD9: 1h TD9 BUY at $75,475. Shifts vs 05-22:
                    fast RSIs cracked (1h 49.6 → 23.1, 30m 48.1 → 21.1, 15m
                    45.9 → 29.7); 4h flipped to a fresh water-down death
                    cross (was a golden water-down 17b); 8h same shape (was
                    a golden water-down 4b); 12h flipped out of the cloud (in
                    cloud → below 1b); 1d held but rolled (TD Sell 2 → Buy 2,
                    indicating the bar closed weak enough to reset the count
                    to the buy side). Closes are in-progress bars; treat
                    every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix flipped from{' '}
              <span className="dn-em">pinned on the reclaimed cluster</span>{' '}
              to <span className="dn-signal">
                the cluster lost as support, the daily cycle anchor as the
                next visible support
              </span>
              . The 05-22 cluster (D-EMA50 $76,797 / D-EMA100 $76,873 /
              D-SMA150 $76,948) is now all overhead within a 0.4% band, with{' '}
              <span className="dn-tag bear">D-SMA50 $76,527 (−1.29%)</span>{' '}
              and <span className="dn-tag bear">D-EMA50 $76,671 (−1.47%)</span>{' '}
              the closest, then{' '}
              <span className="dn-tag bear">D-EMA100 $76,808 (−1.65%)</span>{' '}
              and <span className="dn-tag bear">D-SMA150 $76,854 (−1.71%)</span>{' '}
              stacked, then{' '}
              <span className="dn-tag bear">D-EMA20 $77,866 (−2.98%)</span> /{' '}
              <span className="dn-tag bear">W-EMA20 $78,006 (−3.16%)</span> /{' '}
              <span className="dn-tag bear">W-EMA150 $78,270 (−3.48%)</span>{' '}
              and the <span className="dn-tag bear">D-SMA200/EMA200 $80.6–81.5k (−6.33 to −7.35%)</span>{' '}
              ceiling. Below spot the supports thin out:{' '}
              <span className="dn-tag bull">W-SMA20 $74,943 (+0.80%)</span>{' '}
              first — only $600 of room — then a $1,250 air pocket to{' '}
              <span className="dn-tag bull">W-EMA200 $73,687 (+2.52%)</span>,
              then the <span className="dn-tag bull">D-SMA100 $72,593 (+4.06%)</span>{' '}
              cycle anchor. Far above: the disused W-SMA50/100 ceilings
              (<span className="dn-tag bear">$94.0k / $88.2k</span>) sit at{' '}
              <span className="dn-tag bear">−19.62 / −14.36%</span>.{' '}
              <span className="dn-em">
                W-SMA150 and W-SMA200 are still not computed — the parquet
                history holds 125 weekly bars, short of the 150/200 windows;
                W-EMA150 $78,270 (−3.48%) and W-EMA200 $73,687 (+2.52%) are
                shown because the EMA seeds from the available history. All
                MA levels are anchored to the parquet last bar 2026-05-23
                00:06Z (close $75,539); offsets are recomputed against live
                spot $75,543. Displayed MA levels are $-rounded; offsets are
                computed from the exact series values.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · GEX flipped negative</span>
            </h2>

            <p>
              Dealer gamma <span className="dn-signal">
                flipped from net positive +67.4M to net negative −57.1M
              </span>{' '}
              — a ~$125M swing inside 24h, the regime move the 05-22 note
              flagged as the open downside risk if the flip broke. It broke.
              Aggregate GEX is now <span className="dn-tag bear">−57.1M/1%</span>,
              and the 0-γ flip rose <span className="dn-tag bear">
                $76,325 (+$209 vs 05-22)
              </span>. Live spot $75,543 sits{' '}
              <span className="dn-tag bear">−1.0% below flip</span> — the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads the same{' '}
              <span className="dn-em">−1.0%</span> off Deribit-index $75,542
              (idx ≈ spot today within a single dollar, so the dual reference
              collapses to a single number). Below the flip dealers are short
              gamma, which means hedging flows{' '}
              <span className="dn-em">amplify</span> the next move — the same
              dealer book that absorbed the 05-22 box is now an accelerant.
              The negative pocket below got{' '}
              <span className="dn-em">much heavier</span>: the{' '}
              <span className="dn-tag bear">$75k strike now sits at −53.53M</span>{' '}
              (was −26.0M, doubled), with{' '}
              <span className="dn-tag bear">$75.5k −38.68M</span> right at
              spot, <span className="dn-tag bear">$76k −15.21M</span> just
              overhead, <span className="dn-tag bear">$74k −13.86M</span> and{' '}
              <span className="dn-tag bear">$73k −11.77M</span> stacked down.
              The positive ceiling thinned: <span className="dn-tag bull">$80k +29.06M</span>{' '}
              (was +47.7M — the load-bearing $80k wall lost ~$18M),{' '}
              <span className="dn-tag bull">$82k +13.92M</span>,{' '}
              <span className="dn-tag bull">$90k +7.40M</span>. Front strip is{' '}
              <span className="dn-em">all negative</span>: 23MAY 0DTE{' '}
              <span className="dn-tag bear">−42.40M</span>, 24MAY{' '}
              <span className="dn-tag bear">−12.14M</span>, 25MAY{' '}
              <span className="dn-tag bear">−40.19M</span>, 26MAY{' '}
              <span className="dn-tag bear">−3.11M</span>, 29MAY{' '}
              <span className="dn-tag bear">−14.62M</span> — a one-week
              negative tunnel ahead. Only the back end (12JUN onward) is
              positive.
            </p>

            <p>
              Read it straight: <span className="dn-signal">
                the dealer regime that supported the coil is gone, and what
                replaced it points the same direction the SM short and the
                broken structure already point
              </span>
              . Negative aggregate GEX and a one-week negative front strip
              mean dealer hedging now sells dips and buys rips — the inverse
              of the mean-revert dampening that held the 05-22 box. A
              counter-bounce up to the $76,325 flip would have dealers
              passing through gamma neutral and back into{' '}
              <span className="dn-em">dampening</span> territory above; a
              continuation down through $75k crosses into the −53.5M pocket
              the file holds at that strike, the deepest single-strike
              negative concentration on the surface. IV median across 922
              instruments is{' '}
              <span className="dn-tag">41.5%</span> against 30D close-to-close
              RV of <span className="dn-tag">25.8%</span> — a ~+15.7pt
              chain-level richness, slightly narrower than 05-22&rsquo;s +17.5pt
              despite the realised move; the chain is not yet pricing
              continuation, which is itself a soft constructive for any
              put-side hedge. As always that is a chain-median across N
              instruments, <span className="dn-em">not</span> a tradable
              spread; expiry- and strike-level vega, skew and term structure
              are not loaded and the vol read stays framework-only.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · roughly unchanged · cross-asset</span>
            </h2>

            <p>
              <span className="dn-signal">
                Macro is roughly unchanged from 05-22 — it is not the driver
                today
              </span>
              ; positioning and the dealer book are. The dashboard render is
              2026-05-22 22:16Z, ~2h before the snapshot. Day-over-day Δs are
              mixed and small: US 10Y nominal{' '}
              <span className="dn-tag">4.57% (0.0bp)</span> — unchanged at
              the very level the 05-22 reclaim-long filter required to drop
              below 4.55%; that filter remains failed by 2bp, same as 05-22.
              10Y TIPS real <span className="dn-tag bear">2.18% (+5bp)</span> —
              ticked back up after the 05-22 −5bp ease. HY OAS{' '}
              <span className="dn-tag bull">2.78% (−2bp)</span>, regime tag
              still loose, episodic z still negative. MOVE bond vol{' '}
              <span className="dn-tag">79.7 (−1.81)</span>. Several daily
              series (DXY, MOVE, Fed liquidity, NFCI) show identical levels
              and Δs to 05-22 — FRED-rendered Friday close repeated for
              Saturday (the next FRED update arrives Monday). The slow
              regime z-scores remain extreme — 10Y <span className="dn-tag bear">+2.24</span>,
              TIPS <span className="dn-tag bear">+2.26</span>, JGB{' '}
              <span className="dn-tag bear">+2.55</span>, EXTREME RISK-OFF
              tags intact — but the day&rsquo;s deltas are not what changed.{' '}
              <span className="dn-em">
                The credit-crack watch from the 05-21 escalation remains
                receded — HY OAS at 2.78% is ~22bp from the 3.0% re-grow
                gate. The reclaim-long rates filter (10Y &lt; 4.55%) is
                still 2bp away. Macro is a flat backdrop today; the move
                came from the BTC book, not from a fresh macro impulse.
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
                <tr><td>US 10Y nominal</td><td className="num">4.57%</td><td className="num">0.0bp</td><td className="num bear">+2.24</td><td className="num bear">+1.52</td><td className="bear">risk-off · flat</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.18%</td><td className="num bear">+5.0bp</td><td className="num bear">+2.26</td><td className="num bear">+2.47</td><td className="bear">tight · ticked up</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.21%</td><td className="num">−8.0bp</td><td className="num">−0.32</td><td className="num">−0.39</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num bull">−2.0bp</td><td className="num bull">−0.98</td><td className="num bull">−1.02</td><td className="bull">loose · risk-on</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.523</td><td className="num">−0.01</td><td className="num bull">−0.48</td><td className="num bull">−1.35</td><td className="neut">neutral</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">79.7</td><td className="num bull">−1.81</td><td className="num">+0.21</td><td className="num">+1.30</td><td className="neut">vol eased</td></tr>
                <tr><td>DXY</td><td className="num">99.19</td><td className="num">+0.08</td><td className="num bear">+0.78</td><td className="num bear">+1.71</td><td className="bear">tight</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.907T</td><td className="num bull">+0.030T</td><td className="num bull">+0.77</td><td className="num bull">+2.16</td><td className="bull">loose · surge</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.06%</td><td className="num">0.0bp</td><td className="num bull">−0.65</td><td className="num bear">+1.52</td><td className="bear">tight</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, summary 00:01Z —{' '}
              <span className="dn-em">a rolling 7-day read, not today</span>).
              Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.395</span> (loosened from 05-22&rsquo;s
              0.413 — correlation eased a touch, still NORMAL band). BTC&rsquo;s
              listed ties: NQ <span className="dn-tag">+0.65</span>, SP500{' '}
              <span className="dn-tag">+0.63</span>, NVDA{' '}
              <span className="dn-tag">+0.58</span>, CL{' '}
              <span className="dn-tag">−0.53</span>, BRENT{' '}
              <span className="dn-tag">−0.52</span>, TSLA{' '}
              <span className="dn-tag">+0.45</span>, GOLD{' '}
              <span className="dn-tag">+0.44</span>. 7d relative performance:
              BTC <span className="dn-tag bear">−4.51%</span>, NQ{' '}
              <span className="dn-tag bull">+1.34%</span>, SP500{' '}
              <span className="dn-tag bull">+1.10%</span>, NVDA{' '}
              <span className="dn-tag bear">−4.12%</span>, GOOGL{' '}
              <span className="dn-tag bear">−3.05%</span>, TSLA{' '}
              <span className="dn-tag bull">+1.19%</span>; metals mixed —
              GOLD <span className="dn-tag bear">−0.87%</span>, SILVER{' '}
              <span className="dn-tag bear">−0.77%</span>, PLAT{' '}
              <span className="dn-tag bear">−2.47%</span>, PALL{' '}
              <span className="dn-tag bear">−5.30%</span>; oil weakened — CL{' '}
              <span className="dn-tag bear">−2.30%</span>, BRENT{' '}
              <span className="dn-tag bear">−1.65%</span>.{' '}
              <span className="dn-em">
                The 7d window now shows broad equities recovered (NQ +1.34%,
                SP500 +1.10%) while BTC widened the drawdown to −4.51% — a
                clear single-name lag, not a beta echo of risk assets. The
                window-composition effect compounds this (the bar that rolled
                off was the 05-16 high), but the day&rsquo;s −2.58% in BTC
                against NQ/SP500 broadly flat is consistent with a
                positioning-and-dealer move local to BTC, not a macro risk
                pulse.
              </span>{' '}
              JGB monthly 2.52% carries an EXTREME RISK-OFF monthly tag — do
              not lean on it. USD/JPY 159.00.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · trigger fired, runner managed</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 05-22 flip-break short triggered and is in profit; the
                first target hit.
              </span>{' '}
              Trigger condition was 1h close &lt; $76,500 with SM net
              still &lt; 0; the 1h closed at <span className="dn-tag">$76,497</span>{' '}
              at 2026-05-22 19:00Z, with SM at{' '}
              <span className="dn-tag bear">−16,106 BTC</span> (long 10.41k −
              short 26.52k; the SM gate filled by ~16k of margin, not by a
              hair). Filled 0.3R; first target{' '}
              <span className="dn-tag">$75,700</span> hit at 2026-05-22
              19:31Z (1h close basis $75,693; spot first crossed at 19:43Z);
              runner trailing toward the second target{' '}
              <span className="dn-tag">$75,000</span> (~$540 below spot). The 05-22 reclaim-long is dead by every filter (SM
              not net long, 10Y still 2bp above 4.55%, price below the
              $77,300–$78,000 entry zone). The macro tail held at 0.15R — no
              fresh escalation. This note&rsquo;s book actions: take half off
              first target, lift the trailing stop to{' '}
              <span className="dn-tag">$76,400</span> (just above flip), keep
              the +0.2R add ticket alive sub-$75,000.
            </p>

            <div className="dn-trade">
              <span className="dn-side short">short · open · runner</span>
              <div className="dn-trade-name">
                Flip-break short — triggered 05-22 19:00Z, first target hit
              </div>
              <div className="dn-thesis">
                The 05-22 trigger fired (1h close $76,497 at 19:00Z, SM
                −16.1k — gate met by ~16k of margin). Below the flip dealers
                cross short gamma; the $75k −53.5M pocket — doubled from
                05-22&rsquo;s −26.0M — is the accelerant. SM is now −14.5k,
                deeper than the 05-21 −6.7k peak. The trade is in profit;
                the management discipline is to keep the gamma map and SM
                positioning co-signing the runner, and to flatten the moment
                either breaks.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">open · 0.15R runner (half off at $75,700, hit 19:31Z 05-22)</span></div>
                <div><span className="dn-lvl-k">trail stop</span><span className="dn-lvl-v">$76,400 (just above 0γ flip $76,325)</span></div>
                <div><span className="dn-lvl-k">add ticket</span><span className="dn-lvl-v bear">+0.2R below $75,000 (1h close)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$75,000 (−53.5M pocket lid) / $74,000 (1d cloud lid −1.8%)</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R running:</b> entry $76,497, stop now $76,400 = ~$97
                profit <em>locked</em> from entry; give-back from spot
                $75,543 to stop is ~$857; $75,000 ≈ $1,500 below entry,
                $74,000 ≈ $2,500. <b>Cover discipline:</b> flatten if 1h
                close &gt; $76,325 (flip reclaim), if SM net &gt; −5k
                (cover signal), OR if 1h TD9 BUY ratifies into a 4h water-up
                cross (counter-trend confirmation). Sizing lesson: the 05-22
                0.5R ceiling presumed positioning was &ldquo;no longer
                co-signing&rdquo;; by trigger time SM had re-stacked to
                −16.1k, very much co-signing. Scale the next flip-break
                trade on observed SM at trigger, not on the prior
                note&rsquo;s narrative — noted in the runbook lineage.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">cancelled · was &ldquo;near-armed&rdquo;</span>
              <div className="dn-trade-name">
                Reclaim long — invalidated by the box break
              </div>
              <div className="dn-thesis">
                The 05-22 reclaim long was near-armed on three filters: SM
                net long sustained, 10Y &lt; 4.55%, entry $77,300–78,000.
                Two of three failed harder (SM at −14.5k vs net long, 10Y at
                4.57% vs &lt; 4.55%) and the third is now price-impossible
                (spot $75,543 vs entry floor $77,300, $1,757 below). The
                trade does not exist. Cancel ticket cleanly; do not chase a
                counter-trend bounce into the cluster as a substitute — that
                is a different trade with different gating.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">cancelled · no entry · no residual</span></div>
                <div><span className="dn-lvl-k">re-arm condition</span><span className="dn-lvl-v">SM net &gt; 0 sustained &gt; 4h AND 10Y close &lt; 4.55% AND 1h close &gt; $76,325 (flip reclaim) — all three</span></div>
                <div><span className="dn-lvl-k">earliest plausible</span><span className="dn-lvl-v">next note · or later</span></div>
              </div>
              <div className="dn-gating">
                <b>Why cancelled, not deferred:</b> the entry zone is gone
                — &ldquo;deferred&rdquo; presumes the price stayed near
                entry while filters worked; price ran $1,800 below entry
                while filters got worse. The next time a reclaim long is on
                the table the levels will be different, so the trade is
                re-spec&rsquo;d from scratch, not continued.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · counter-bounce watch · not a trade</span>
              <div className="dn-trade-name">
                Oversold reflex risk — flag, not a long
              </div>
              <div className="dn-thesis">
                The 1h TD9 BUY at $75,475, RSI 23, and the spot-CVD
                +292/1h alongside the print are the textbook setup for an
                oversold reflex bounce toward the broken cluster (D-SMA50
                $76,527 / flip $76,325). This is a real risk for the runner,
                not a trade. The desk does not buy oversold bounces into a
                negative-gamma regime under a SM short load — the asymmetry
                is wrong (any bounce caps at the flip; any continuation runs
                the −53.5M pocket).
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">flag zone</span><span className="dn-lvl-v">$76,325 (flip) ↔ $76,527 (D-SMA50)</span></div>
                <div><span className="dn-lvl-k">bounce-fail signal</span><span className="dn-lvl-v bear">rejection 1h close back below $76,000 → runner thesis intact</span></div>
                <div><span className="dn-lvl-k">bounce-stick signal</span><span className="dn-lvl-v bull">1h close &gt; $76,325 + 4h water-up cross → cover runner</span></div>
              </div>
              <div className="dn-gating">
                <b>Why not a trade:</b> RSI extremes pair with TD9 BUYs all
                the time in trending tapes without reversing; the prior
                two examples on the same chart (05-15 squeeze, 05-18 SM
                short) both saw the TF9 BUY fade and the trend continue
                inside the negative-gamma side. The bias is &ldquo;use it
                to manage the short, not to enter a long.&rdquo;
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · hedge · held</span>
              <div className="dn-trade-name">
                Downside put-spread — residual 0.15R held
              </div>
              <div className="dn-thesis">
                The 05-22 trim to 0.15R was motivated by macro easing; today
                macro is roughly unchanged from there (10Y flat at 4.57%, HY
                marginally tighter −2bp, MOVE flat). No fresh easing, no
                fresh escalation — the rationale for the trim still holds,
                and the rationale for the residual hedge still holds against
                the regime z backdrop (10Y +2.24σ, JGB +2.55σ). No size
                action this note.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">structure</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">expiry</span><span className="dn-lvl-v">29-MAY-26 (6d) — front-strip is now negative GEX (−14.62M)</span></div>
                <div><span className="dn-lvl-k">action this note</span><span className="dn-lvl-v">hold 0.15R · no add (regime z unchanged) · no trim (re-grow gates not breached either way)</span></div>
                <div><span className="dn-lvl-k">re-grow trigger</span><span className="dn-lvl-v bear">HY OAS &gt; 3.0% close → grow toward primary; 10Y &gt; 4.75% close → +0.1R; 1d close below $74.6k cloud → max tail</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> strike/premium/Greeks not loaded — structure
                is illustrative, sizing pending a Deribit 29-MAY chain pull.
                Front-strip GEX flipped negative across the held expiry
                (29MAY now −14.62M, was +35.81M on 05-22) — that does not
                change the structure but it does mean any dealer hedging in
                front-strip will now reinforce a continuation rather than
                dampen it, which is supportive for the existing put-spread
                without justifying a fresh add on its own.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · below the flip, runner discipline</span>
            </h2>

            <p>
              Of the six 05-22 decision conditions, only{' '}
              <span className="dn-em">&ldquo;Coil breaks down&rdquo;</span>{' '}
              fired (1h close $76,497 &lt; $76,500 + SM −16.1k &lt; 0 at
              2026-05-22 19:00Z); the first trade-block target $75,700 hit
              as a consequence at 19:31Z, but that is a target step inside
              the trade, not a §VI row. The other five are clean: no 1h
              close &gt; $78,300 (24h high $77,740), no SM net long (deeper
              short instead), no HY OAS close &gt; 3.0% (eased to 2.78%),
              no 10Y close &gt; 4.75% (flat at 4.57%), no 1d close below
              the $74.6k cloud (1d in progress at $75,475 — above $74,600). The note carries a 0.15R runner short and a 0.15R
              macro tail, and the conditions re-set around a tighter
              dealer-aware grid:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Runner second target</td><td className="bear">1h close &lt; $75,000</td><td>cover half of runner, hold 0.05R</td></tr>
                <tr><td>Add re-arm</td><td className="bear">1h close &lt; $75,000 + SM net still &lt; −5k</td><td>+0.2R add (was the sub-$75k ticket)</td></tr>
                <tr><td>Cover (positioning)</td><td className="bull">SM net &gt; −5k (cover signal) OR SM net &gt; 0</td><td>flatten runner, cancel add ticket</td></tr>
                <tr><td>Cover (structural)</td><td className="bull">1h close &gt; $76,325 (flip reclaim)</td><td>flatten runner, cancel add ticket</td></tr>
                <tr><td>Mid-cycle break (escalation)</td><td className="bear">1d close below cloud $74.6k</td><td>tail to primary (0.4R), hold runner</td></tr>
                <tr><td>Macro tail re-grow</td><td className="bear">HY OAS &gt; 3.0% OR 10Y &gt; 4.75% close</td><td>tail +0.1R toward primary</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                either a 1d close below $74.6k (escalation — the runner
                becomes the trade, the tail grows, the longs everywhere stay
                cancelled) or a 1h close above $76,325 (the flip reclaimed,
                dealer regime back to dampening, SM stack would have to be
                covering for it to print)
              </span>
              . The first is the continuation case the dealer map and SM
              positioning already point at; the second is the cover-and-fade
              case the 1h TD9 BUY + RSI 23 + spot-CVD bid hints at without
              ratifying. Between $74.6k and $76,325 the note is run as
              written — runner managed against the trailing stop and the
              cover signals, no longs, macro tail held. The honest read
              against 05-22: the &ldquo;positioning is neutral&rdquo; framing
              was correct for six hours and wrong for the rest, and the
              trade was sized for the framing not for what happened next.
              The trigger worked anyway because the gating was on observed
              SM at trigger time, not on the prior note&rsquo;s narrative.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit · 0 CRITICAL · 2 HIGH + 2 MED + 3 LOW all fixed)
            </span>
            <b>Codex CLI 0.132.0 (gpt-5.5, xhigh reasoning) ran the hostile
            audit cleanly — the empty-stdin pipe held, no TTY block.</b>{' '}
            Zero CRITICAL; the two HIGH, two MED and three LOW all applied
            EN+ZH:{' '}
            (a) <b>F-01 · HIGH</b> &mdash; missing audit archive + freshness
            direction inversion: page claimed &ldquo;scan archived in
            audits/2026-05-23-desk-note.md&rdquo; before that file existed,
            and described the 00:01Z MTF scan as &ldquo;fresher than the
            00:08Z snapshot&rdquo; — backwards (00:01Z is 7 min{' '}
            <em>before</em> the snapshot, i.e. ~7 min stale). Resolved by
            creating audits/2026-05-23-desk-note.md with the 00:01Z scan
            archived verbatim, and reworking the freshness flag /
            audit-trace prose to state &ldquo;~7-min stale vs snapshot
            anchor.&rdquo;{' '}
            (b) <b>F-02 · HIGH</b> &mdash; trade-state chronology wrong:
            §V originally said SM at trigger was &ldquo;~−17.4k&rdquo; and
            the first target hit &ldquo;between 04:00Z and 06:00Z 05-23&rdquo;.
            Pinned-row verification: SM at trigger 1h-close minute
            (live_db t == &ldquo;05-23 03:00&rdquo; = 2026-05-22 19:00Z)
            was <b>−16,106 BTC</b>; first $75,700 print at t == &ldquo;05-23
            03:31&rdquo; BJ = <b>2026-05-22 19:31Z</b> (c $75,693; spot first
            crossed at 19:43Z) — both off by significant margins. EN/ZH §V
            re-stated to the verified values.{' '}
            (c) <b>F-03 · MED</b> &mdash; snapshot-anchor contamination:
            §I prose used premium &minus;$114 and aggressor skew &minus;4.9,
            which are the t == &ldquo;05-23 08:09&rdquo; values, not the
            00:08Z anchor t == &ldquo;05-23 08:08&rdquo; (premium &minus;$99,
            skew_agg +43.7). The live_db file appended past the pin during
            authoring. Updated to the 00:08Z anchor values; skew_agg
            disclosed as a 1-minute noisy snapshot.{' '}
            (d) <b>F-04 · MED</b> &mdash; stale 05-22 target label: §V
            target row read &ldquo;$75,000 (−26M pocket lid)&rdquo; — that
            was 05-22; the current pocket is −53.5M (also stated correctly
            in §III prose). Target row updated to &ldquo;$75,000 (−53.5M
            pocket lid).&rdquo;{' '}
            (e) <b>F-05 · LOW</b> &mdash; W-SMA50/100 labels swapped in the
            far-overhead MA sentence; reordered so the level matches the
            label (W-SMA50 $94.0k / W-SMA100 $88.2k).{' '}
            (f) <b>F-06 · LOW</b> &mdash; §VI lineage count imprecise
            (&ldquo;two of six fired&rdquo; → only the down-break row
            actually fired; the first-target hit is a trade-block step, not
            a §VI condition). Rewritten.{' '}
            (g) <b>F-07 · LOW</b> &mdash; runner R/R wording called the
            $97 entry-to-stop gap &ldquo;trailing risk&rdquo; — it is locked
            <em>profit</em> from entry; give-back from spot is ~$857.
            Clarified.{' '}
            Codex explicitly cleared: funding × 1095 (+2.20% live ann from
            0.002009; 24h endpoint +3.59% from 0.003278; mean +2.41%;
            range −1.06/+5.02%; no ×100 recurrence of the 05-15 landmine),
            the SM cut-fraction landmine (page consistently uses
            re-stack / multiplier framing, never the 05-22 |Δ|/prior idiom
            which would yield 1025.7% here), the SM jump chronology
            (re-stack concentrated in 06:30Z→06:36Z on 05-22, two discrete
            1-minute steps verified at live_db idx 27350 / 27355), the GEX
            flip dual-reference (file dist −1.0% off Deribit-idx $75,542 ≈
            live spot $75,543, dual reference collapses cleanly to a single
            signed number; total GEX −57.1M), main MA matrix offsets and
            the W-SMA150/200 non-computability, 30D RV 25.80%,
            claims-vs-loaded-data discipline (NTT / max-pain / strike-IV /
            BTC-NQ framework-only; IV chain-median; cross-asset 7d-window
            framing), live-tape flows (1h / 4h / 24h CVD, OI, big_net,
            taker_net), EN/ZH numeric parity post-fix, the requireViewer
            gating pattern (both paths, first statement), and the index{' '}
            <code>&lt;li&gt;</code> additions.{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1; Next
            16.2.6 hard-exits on Node &lt; 20.9.0, so a full{' '}
            <code>next build</code> is environment-blocked.{' '}
            <code>npx --no-install tsc --noEmit</code> returned exit 0
            (TypeScript clean) and is the build proxy. Source audit record:{' '}
            audits/2026-05-23-desk-note.md.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>
            , and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-05-23 00:08Z) with
            section-level provenance disclosed in the manifest band above;
            macro is roughly unchanged today and the regime z-scores remain
            elevated. Levels, sizes, and conditions are illustrative of the
            desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future
            tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The trigger fired. The reason it fired re-stacked overnight,
                and the dealer book flipped sign.
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
            v2 · 2026-05-23 00:08Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
