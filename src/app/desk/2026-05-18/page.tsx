import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// Internal-only route: not in public nav, not in sitemap, noindex/nofollow.
// Description deliberately anodyne — any future external share (Slack/email
// link preview) shows neutral text rather than dated trade specifics.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-05-18 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-05-18',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-05-18' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260518() {
  await requireViewer('/desk/2026-05-18');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · DESK NOTE · 2026-05-18 · v2</span>
          <span>internal · for discussion · post-hostile-audit</span>
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
              <span className="dn-big">$76,820</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.2%</span>
            </div>
          </div>

          {/* DATA PROVENANCE BAND */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-05-18 01:43Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-18 01:43Z</td>
                  <td className="dn-flag">fresh · 1-min</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 01:42Z scan</td>
                  <td className="dn-flag">fresh · in-progress bar</td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 01:01Z snapshot</td>
                  <td className="dn-flag">
                    ~42-min lag · Deribit idx $77,218 vs live $76,820
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 01:01Z
                  </td>
                  <td className="dn-flag">~42-min lag · 1h bars · 22 assets</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 01:43Z render</td>
                  <td className="dn-flag">
                    FRED series stale 4d (NFCI 10d) · do NOT lean on macro
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-05-18 00:06Z</td>
                  <td className="dn-flag">
                    ~1.6h stale · offsets recomputed vs live spot
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
              <span className="dn-v">≈ 0.0%</span>
              <span className="dn-src">live · 01:43Z · 24h mean +0.1%</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+4.9% → ≈ 0%</span>
              <span className="dn-src">decayed · range −4.3/+5.1%</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−1.08% (−1,111 BTC)</span>
              <span className="dn-src">live · deleveraging</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">56.4 / 43.6</span>
              <span className="dn-src">live_db `mkt_long_pct`</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−2.5k (net short)</span>
              <span className="dn-src">live · long 17.96k − short 20.43k</span>
            </div>
            <div>
              <span className="dn-k">SM 24h Δ</span>
              <span className="dn-v bear">+16.1k → −2.5k</span>
              <span className="dn-src">flipped net long→short</span>
            </div>
            <div>
              <span className="dn-k">IV / 30d RV</span>
              <span className="dn-v">44.6% / 28.6%</span>
              <span className="dn-src">GEX median IV · 934 inst.</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−0.9%</span>
              <span className="dn-src">flip $76,142 vs spot · file +1.4% off idx</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              The 05-17 note set one switch: a close through the $77.3k /
              $76.5k cluster turns the conditional short directional. The
              cluster went. Daily SMA150 and the weekly EMA20 are both lost,
              the bounce scout is dead on its own stop, and the single fact
              that matters most printed underneath it{' '}
              <span className="dn-em">—</span>{' '}
              <span className="dn-signal">
                smart money has flipped from net long to net short
              </span>
              . This note does not re-argue the path; it marks that the path
              resolved down and reads the last-stand structure.
            </p>

            <p>
              BTC is <span className="dn-tag">$76,820</span>, pinned to the
              bottom of a <span className="dn-tag">$76.7k–$78.6k</span> 24h
              range ($7.5B qVol) after a{' '}
              <span className="dn-tag bear">−2.0% 4h leg</span>. Price has lost
              the 05-17 decision support{' '}
              <span className="dn-tag stale">D-SMA150 $77.2k (−0.54%)</span>{' '}
              and the weekly pivot{' '}
              <span className="dn-tag stale">W-EMA20 $78.2k (−1.70%)</span>,
              and now sits exactly on the last-stand shelf:{' '}
              <span className="dn-tag stale">D-EMA100 $76.8k (−0.02%)</span>{' '}
              /{' '}
              <span className="dn-tag stale">D-EMA50 $76.7k (+0.16%)</span>{' '}
              /{' '}
              <span className="dn-tag bear">GEX-flip $76,142 (−0.9%)</span>.
              Below that the only structure is{' '}
              <span className="dn-tag bull">D-SMA50 $75.6k (+1.60%)</span>{' '}
              into the <span className="dn-tag bear">$75k −23M GEX</span>{' '}
              pocket. The decision is no longer &ldquo;does the cluster
              hold&rdquo; <span className="dn-em">—</span> it is{' '}
              <span className="dn-signal">
                does the cycle-EMA / flip shelf hold, with smart money already
                short
              </span>
              .
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape</span>
            </h2>

            <p>
              Lead with positioning because that is what changed regime, not
              macro (stale, see §IV). The single highest-signal move:{' '}
              <span className="dn-signal">
                top-trader (smart money) flipped from net long{' '}
                <span className="dn-tag">+16.1k BTC</span> (05-17) to net short{' '}
                <span className="dn-tag bear">−2.5k BTC</span>
              </span>{' '}
              — long 17.96k vs short 20.43k, a −18.6k BTC swing in 24h. On 05-17
              they were net long but distributing; they have now crossed to the
              other side. Against that, retail (Binance mkt) went{' '}
              <span className="dn-tag bear">more long, 56.4%</span> (from 54.8%
              on 05-17) into a continued decline{' '}
              <span className="dn-em">
                — dumb money long, smart money short, price at lower lows is
                the textbook configuration, not a contrarian-long tell.
              </span>
            </p>

            <p>
              Funding has <span className="dn-signal">decayed to neutral</span>
              : the live 8h rate annualizes to{' '}
              <span className="dn-tag">≈ 0.0%</span> (24h mean{' '}
              <span className="dn-tag">+0.1%</span>, range −4.3% to +5.1%),
              down from <span className="dn-tag">+4.9%</span> at the 24h-ago
              endpoint. The 05-17 thesis hung on funding paying longs; that
              signal is gone — funding is now informationally neutral and the
              read shifts entirely to SM positioning and structure. OI fell{' '}
              <span className="dn-tag bear">−1.08% (−1,111 BTC)</span> over 24h
              and <span className="dn-tag bear">−825 BTC over 4h</span> while
              price dropped <span className="dn-em">— a long flush /
              deleveraging</span>, not fresh shorts building the down-move;
              only the last 1h added OI{' '}
              <span className="dn-tag">+1,014 BTC</span> (late shorts pressing
              the low). Perp holds a <span className="dn-tag bear">−$33
              discount</span> to spot.
            </p>

            <p>
              Windowed flow confirms spot-led distribution: 4h price{' '}
              <span className="dn-tag bear">−2.02%</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −1,886</span>, futures CVD{' '}
              <span className="dn-tag">Δ +75</span>, big-print net{' '}
              <span className="dn-tag bull">+215 / 161 prints</span>; 1h price{' '}
              <span className="dn-tag bear">−0.30%</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −896</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +451</span>, big-print net{' '}
              <span className="dn-tag bull">+484 / 40 prints</span>.{' '}
              <span className="dn-em">
                The 4h leg was spot selling the desk could not absorb; the
                last 1h shows large prints stepping in at the low — the only
                constructive tell on the tape, and the seed of the
                counter-trend scout below.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · stale-flagged</span>
            </h2>

            <p>
              The tape is <span className="dn-signal">washed out</span>: 15m
              RSI <span className="dn-tag">24.9</span>, 30m{' '}
              <span className="dn-tag">21.9</span>, 1h{' '}
              <span className="dn-tag">23.9</span> — capitulation readings,
              with <span className="dn-tag bull">⚡TD9 BUY on 15m / 30m /
              8h</span> firing simultaneously (oversold reversal hints; last
              bar may be in-progress, treat as provisional). Spot is below
              cloud on 15m / 30m / 1h / 4h / 8h and the 1w; 12h has slipped
              into cloud (75.9–78.4k); only 1d / 3d / 1M hold cloud-above or
              in-cloud. The 1h carries{' '}
              <span className="dn-tag bull">BULL regular + BULL hidden</span>{' '}
              divergence. <span className="dn-em">
                A reflex bounce is well set up — but every short/mid frame is
                below cloud with deeply negative MACD histograms; this is an
                oversold spring inside a confirmed downtrend, not a base.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">76,756</td><td className="num bull">24.9</td><td className="bear">death (water-up) 14b</td><td className="bear">below ↑78.1k</td><td className="hot">⚡ TD9 BUY</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">76,756</td><td className="num bull">21.9</td><td className="bear">death (water-up) 6b</td><td className="bear">below ↑78.1k</td><td className="hot">⚡ TD9 BUY</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">76,756</td><td className="num bull">23.9</td><td className="bear">death (water-dn) 2b</td><td className="bear">below ↑78.3k</td><td>Buy 4</td><td className="bull">BULL reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">76,756</td><td className="num">30.1</td><td className="bear">death (water-dn) 15b</td><td className="bear">below ↑80.3k</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">76,756</td><td className="num">31.9</td><td className="neut">—</td><td className="bear">below ↑78.8k</td><td className="hot">⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">76,756</td><td className="num">36.2</td><td className="bear">death (water-up) 14b</td><td className="neut">in cloud 75.9–78.4k</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">76,756</td><td className="num">44.5</td><td className="bear">death (water-up) 6b</td><td className="bull">above ↓74.3k</td><td>Buy 6</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">76,751</td><td className="num">50.8</td><td className="neut">—</td><td className="neut">in cloud 73.6–93.0k</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">76,756</td><td className="num">45.6</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑100.3k</td><td>Buy 1</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Triple ⚡TD9 BUY (15m/30m/8h) + sub-25 RSI = washout
                    reversal hint; provisional until a clean bar closes.
                    1d still above cloud (↓74.3k) — mid-cycle not yet broken.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix dates the regime break precisely. Spot has lost{' '}
              <span className="dn-tag bear">D-SMA20 $79.3k (−3.16%)</span>,{' '}
              <span className="dn-tag bear">D-EMA20 $78.8k (−2.47%)</span>, the
              05-17 support{' '}
              <span className="dn-tag stale">D-SMA150 $77.2k (−0.54%)</span>{' '}
              and the weekly pivot{' '}
              <span className="dn-tag stale">W-EMA20 $78.2k (−1.70%)</span>. It
              now sits <span className="dn-signal">exactly on the cycle-EMA
              shelf</span>:{' '}
              <span className="dn-tag stale">D-EMA50 $76.7k (+0.16%)</span> and{' '}
              <span className="dn-tag stale">D-EMA100 $76.8k (−0.02%)</span> —
              price is within ~$15 of the 100-day EMA. The SMA cycle ladder
              still reads positive but eroding:{' '}
              <span className="dn-tag bull">D-SMA50 $75.6k (+1.60%)</span>,{' '}
              <span className="dn-tag bull">D-SMA100 $72.2k (+6.42%)</span>;
              resistance is the far{' '}
              <span className="dn-tag stale">
                D-SMA200/EMA200 $81.4–81.8k (−5.7% to −6.1%)
              </span>
              . Weekly: above{' '}
              <span className="dn-tag bull">W-SMA20 $75.0k (+2.40%)</span> only;
              below W-EMA20 / W-EMA50 $85.2k / W-SMA50 $94.0k.{' '}
              <span className="dn-em">
                All MA levels anchored to parquet last bar 2026-05-18 00:06Z
                (close $77,057); offsets recomputed vs live spot $76,820.
                Displayed MA levels are $-rounded; offsets are computed from
                the exact series values.
              </span>{' '}
              Net: the EMA cycle anchor is being tested today; the SMA cycle
              ladder is the next line under it. NTT pivots not loaded — cloud +
              MA only, no independent NTT confirmation claimed.
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · GEX + IV</span>
            </h2>

            <p>
              Dealer gamma is <span className="dn-signal">near zero and
              vol-amplifying right at the decision</span>. Aggregate GEX is{' '}
              <span className="dn-tag">+15.9M/1%</span> — collapsed further
              from 05-17&rsquo;s +37.7M and 05-15&rsquo;s +204M. The 0-gamma
              flip is <span className="dn-tag bear">$76,142</span>; live spot
              $76,820 sits only <span className="dn-tag bear">~0.9% above
              it</span> (the GEX file&rsquo;s own &ldquo;+1.4% dist to
              flip&rdquo; is off its 01:01Z Deribit-index $77,218 — since then
              spot has fallen ~$400, so the live cushion is thinner than the
              file states). The wall map is a positive ceiling above (
              <span className="dn-tag bull">$80k +39M</span>,{' '}
              <span className="dn-tag bull">$82k +24M</span>) over a
              negative-gamma shelf at and below spot:{' '}
              <span className="dn-tag bear">$77.5k −14.3M</span>,{' '}
              <span className="dn-tag bear">$78k −10.4M</span>,{' '}
              <span className="dn-tag bear">$75k −23.1M</span>,{' '}
              <span className="dn-tag bear">$74k −10.2M</span>, deep{' '}
              <span className="dn-tag">$60k −7.8M</span> crash pocket.{' '}
              <span className="dn-em">
                Today&rsquo;s 0DTE (18MAY) is −25.5M GEX — the single largest
                negative expiry on the board; the entire front (19/20/22MAY)
                is negative, turning positive only at 29MAY (+16.4M).
              </span>
            </p>

            <p>
              Read straight: a break of the $76.1k flip puts dealers short
              gamma with a <span className="dn-signal">−23M @75k
              accelerant</span> immediately below and a −25.5M 0DTE pinning
              nothing — they sell into the move. This is the same
              vol-amplifying configuration flagged 05-17, now with spot at the
              trigger instead of 2% above it. IV median across 934 instruments
              is <span className="dn-tag">44.6%</span> (chain-median summary,
              not a tradable expiry) vs 30D close-to-close RV{' '}
              <span className="dn-tag">28.6%</span> — a ~+16pt chain-level
              richness, <span className="dn-em">not</span> a spread we will
              sell into negative front gamma. Strike/expiry IV, vega, skew not
              loaded; vol read framework-only.
            </p>

            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · stale · do not lean</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro panel is stale 4 days (NFCI 10d) and is explicitly
                not load-bearing today.
              </span>{' '}
              The FRED Tier-1 series last refreshed pre-weekend; values are
              carried, not current. For completeness the carried footprint is
              unchanged from 05-17: US 10Y{' '}
              <span className="dn-tag stale">4.47%</span> (regime +1.63),
              10Y TIPS real{' '}
              <span className="dn-tag stale">2.00%</span>, HY OAS{' '}
              <span className="dn-tag stale">2.76%</span> (risk-on, regime
              −1.13), MOVE bond vol{' '}
              <span className="dn-tag stale">79.9</span>, DXY{' '}
              <span className="dn-tag stale">99.27</span>, Fed net liquidity{' '}
              <span className="dn-tag stale">$5.886T</span>, JGB 10Y{' '}
              <span className="dn-tag stale">2.52% (monthly · do not lean)</span>
              . <span className="dn-em">
                Because macro is stale, today&rsquo;s regime read rests on
                positioning + dealer structure alone.
              </span>{' '}
              The HY-OAS tripwire (discretionary watch &gt; ~3.0–3.2% close)
              is unchanged but cannot be acted on from a 4-day-stale print —
              treat as &ldquo;await fresh credit&rdquo;, not confirmed.
              Correlation regime is NORMAL (7d 1h mean |r| 0.281); BTC ties
              tightened (NQ <span className="dn-tag">+0.51</span>, NVDA{' '}
              <span className="dn-tag">+0.49</span>, SP500{' '}
              <span className="dn-tag">+0.46</span>), and over 7d BTC printed{' '}
              <span className="dn-tag bear">−5.29%</span> vs SP500{' '}
              <span className="dn-tag">−0.15%</span>, NQ{' '}
              <span className="dn-tag">−1.00%</span>, NVDA{' '}
              <span className="dn-tag bull">+3.59%</span>{' '}
              <span className="dn-em">
                — BTC is the clear high-β downside underperformer of its
                TradFi peer set, in a tightening-correlation tape.
              </span>
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · sized to what we can prove</span>
            </h2>

            <div className="dn-trade">
              <span className="dn-side short">short · primary · confirmed-break</span>
              <div className="dn-trade-name">
                Flip-break runner — directional with SM short + dealer map
              </div>
              <div className="dn-thesis">
                The 05-17 conditional short is now at trigger with the
                positioning behind it: SM net short, retail long, OI
                deleveraging, dealers near-zero gamma. A close below the
                $76.1k flip turns the −23M @75k pocket into an accelerant.
                This is the directional trade — but it triggers on the break,
                not on selling the washout into sub-25 RSI + triple TD9 BUY.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">trigger</span><span className="dn-lvl-v bear">1h close &lt; $76,000 (below flip)</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bull">1h close &gt; $77,300 (reclaim D-SMA150)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$75,600 (D-SMA50) / $75,000 / $74,000</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.5R on trigger; +0.3R on $75.6k loss; ≤ 0.8R</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> trigger $76,000, stop $77,300 = ~$1,300 risk;
                $75,000 = ~$1,000, $74,000 = ~$2,000 ≈ 0.8–1.5:1 before fees
                — modest, which is why size is capped and the add waits for
                the $75.6k D-SMA50 loss. <b>Do not</b> pre-position short into
                the washout; the edge is the break, not the hole.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · preferred · fade the bounce</span>
              <div className="dn-trade-name">
                Re-short the reflex into lost support
              </div>
              <div className="dn-thesis">
                The higher-quality short is not the break — it is fading the
                oversold reflex back into the levels just lost. Triple TD9 BUY
                + sub-25 RSI argues a bounce comes first; sell it into the
                lost D-SMA150 / W-EMA20 with SM already short and the cloud
                overhead as resistance.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">zone</span><span className="dn-lvl-v bear">$77,200–78,300 (D-SMA150 → W-EMA20)</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bull">1h close &gt; $78,600 (24h high / cloud)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$76,100 flip / $75,600 / $75,000</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.5R, scale 0.25R per $0.5k into zone</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> mid-zone $77,750, stop $78,600 = ~$850 risk;
                $76,100 = ~$1,650, $75,000 = ~$2,750 ≈ 1.9–3.2:1 — the
                cleanest book on the page. <b>Gating:</b> only valid while SM
                stays net short and 1d holds above cloud ($74.3k); a 1h
                reclaim &gt; $78,600 voids it.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · small · contrarian</span>
              <div className="dn-trade-name">
                Washout reflex scalp — TD9 cluster + spot absorption
              </div>
              <div className="dn-thesis">
                Triple ⚡TD9 BUY (15m/30m/8h) + 1h RSI 24 + 1h BULL regular
                divergence + big-print net +484 stepping in at the 1h low,
                with spot resting ~$15 from D-EMA100. A fast reflex to
                the lost D-SMA150 is playable — counter-trend, smallest size,
                first cut.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">entry</span><span className="dn-lvl-v bull">$76,500–76,850 (on D-EMA100 hold)</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1h close &lt; $76,000 (flip lost)</span></div>
                <div><span className="dn-lvl-k">target</span><span className="dn-lvl-v">$77,200–77,800; half off $77,200</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · scalp only</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> entry mid $76,675, stop $76,000 = ~$675 risk,
                target $77,200–77,800 = ~$525–1,125 ≈ 0.8–1.7:1 — weak; this
                is a momentum scalp on the TD9 cluster, not a position.{' '}
                <b>Hard rule:</b> mutually exclusive with the flip-break
                short — the $76,000 1h close is the single switch. No
                averaging down. Flat into any close below flip.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · hedge</span>
              <div className="dn-trade-name">
                Downside put-spread — structural, not macro-confirmed
              </div>
              <div className="dn-thesis">
                Front dealer gamma negative, SM net short, cycle-EMA shelf
                under test. The tail is real on structure alone; macro is
                stale 4d so this is NOT a macro-confirmed hedge — it is a
                dealer/positioning-driven insurance. Trigger discretionary.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">structure</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">expiry</span><span className="dn-lvl-v">29-MAY-26 (11d) — first positive-GEX expiry</span></div>
                <div><span className="dn-lvl-k">grow-trigger</span><span className="dn-lvl-v bear">fresh HY OAS &gt; ~3.0–3.2% close</span></div>
                <div><span className="dn-lvl-k">size (indicative)</span><span className="dn-lvl-v">0.15R · final pending chain pull</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> HY threshold cannot be acted on from a
                4-day-stale print — &ldquo;await fresh credit&rdquo;.
                Strike/premium/Greeks not loaded — structure illustrative,
                sizing pending a Deribit 29-MAY chain pull.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the single switch</span>
            </h2>

            <p>
              The 05-17 book is resolved: bounce scout stopped, conditional
              short now at trigger. The post-resolution stance is short-biased
              with one level governing everything:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Flip lost (bear path lives)</td><td className="bear">1h close &lt; $76,000</td><td>flip-break runner, add on $75.6k loss; washout scout flat</td></tr>
                <tr><td>Oversold reflex up (preferred)</td><td className="bull">bounce into $77.2–78.3k w/ SM still short</td><td>fade-the-bounce re-short</td></tr>
                <tr><td>Mid-cycle breaks (escalation)</td><td className="bear">1d close below cloud $74.3k</td><td>hold runner, drop all longs, grow tail</td></tr>
                <tr><td>Structure reclaims (invalidation)</td><td className="bull">1h close &gt; $78,600</td><td>flat shorts, re-assess; SM-flip watch</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes this note is{' '}
              <span className="dn-signal">
                smart money flipping back net long
              </span>{' '}
              while price holds the cycle-EMA shelf — that would void the
              fade-short, invalidate the bear path, and turn the washout scout
              into a real long. Until SM net BTC turns positive again, the
              book is short-biased and the only long permitted is the small
              scalp against the $76.0k switch.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 derived from hostile audit 2026-05-18
            </span>
            Hostile audit by codex CLI 0.125.0 (gpt-5.5, xhigh) returned 5
            findings (2 HIGH, 1 MED, 2 LOW). Both blockers fixed EN+ZH:{' '}
            <b>F-01</b> — the SM component display read &ldquo;long 18.0k −
            short 20.4k&rdquo; (= −2.4k), contradicting the stated −2.5k net;
            components re-stated at the precision that reproduces the net
            (long 17.96k − short 20.43k = −2.47k ≈ −2.5k; +16.1k → −2.5k =
            −18.6k swing unchanged); <b>F-02</b> — &ldquo;on the 100-day EMA
            to the dollar&rdquo; overclaimed a $14 gap as sub-dollar;
            corrected to &ldquo;within ~$15&rdquo; (EN) / &ldquo;约 $14&rdquo;
            (ZH). Secondary: <b>F-03</b> — macro cross-ref &ldquo;see
            §III&rdquo; → &ldquo;§IV&rdquo;; <b>F-04</b> — anchor footnote now
            states displayed MA levels are $-rounded, offsets from exact
            series; <b>F-05</b> — §VI &ldquo;flip lost&rdquo; row now restates
            the washout scout goes flat at $76,000. Codex cleared: funding
            annualization (field × 1095, no ×100), GEX flip dual-reference
            sign coherence, the SM net-long→short flip framing (never a
            fraction), macro-stale discipline (all 6 required locations),
            claims-vs-loaded-data, trade-book R/R arithmetic, the mutual-
            exclusivity switch, EN/ZH numeric parity, the requireViewer
            gating, and the Next.js build. Source audit record kept at{' '}
            audits/2026-05-18-desk-note.md in the desk repository.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>
            , and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-05-18 01:43Z) with
            section-level provenance disclosed in the manifest band above; some
            inputs — macro especially — are explicitly stale and flagged as
            such. Levels, sizes, and conditions are illustrative of the
            desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future
            tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                When the smart side crosses, you don&rsquo;t fade it — you
                follow it and fade the bounce.
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
            v2 · 2026-05-18 01:43Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
