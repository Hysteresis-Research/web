import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';

// Internal-only route: not in public nav, not in sitemap, noindex/nofollow.
// Description deliberately anodyne — any future external share (Slack/email
// link preview) shows neutral text rather than dated trade specifics.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-05-17 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-05-17',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-05-17' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default function Desk20260517() {
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · DESK NOTE · 2026-05-17 · v1</span>
          <span>internal · for discussion · pre-audit</span>
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
              <span className="dn-big">$77,988</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.3%</span>
            </div>
          </div>

          {/* DATA PROVENANCE BAND */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-05-17 01:30Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-17 01:30Z</td>
                  <td className="dn-flag">fresh · 1-min</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 01:16Z scan</td>
                  <td className="dn-flag">14-min lag · in-progress bar</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 01:28Z scan</td>
                  <td className="dn-flag">2-min lag · daily/weekly indicators</td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 01:28Z snapshot</td>
                  <td className="dn-flag">2-min lag · Deribit chain · 942 inst.</td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 01:00Z
                  </td>
                  <td className="dn-flag">30-min lag · 1h bars · 22 assets</td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-05-17 00:06Z</td>
                  <td className="dn-flag">
                    ~1.4h stale · offsets recomputed vs live spot
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
              <span className="dn-v bear">+5.0%</span>
              <span className="dn-src">live · 01:30Z · longs pay</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+3.7% → +5.0%</span>
              <span className="dn-src">live_db 24h endpoints</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v">+0.96% (+973 BTC)</span>
              <span className="dn-src">live · 01:30Z</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">54.8 / 45.2</span>
              <span className="dn-src">live_db `mkt_long_pct`</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+16.1k</span>
              <span className="dn-src">live · long − short BTC</span>
            </div>
            <div>
              <span className="dn-k">SM 24h Δ</span>
              <span className="dn-v bear">−23.8k BTC</span>
              <span className="dn-src">distributing into weakness</span>
            </div>
            <div>
              <span className="dn-k">IV / 30d RV</span>
              <span className="dn-v">43.8% / 29.1%</span>
              <span className="dn-src">GEX median IV · 942 inst.</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">+2.0%</span>
              <span className="dn-src">GEX · flip $76,496</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              The 05-15 note leaned long on a squeeze that needed $82.3k taken
              cleanly. The tape did the opposite. Two days later funding has
              flipped from short-pay to long-pay, smart money has cut a quarter
              of its net book, dealers have shed four-fifths of their long
              gamma, and the 0-gamma flip is now <span className="dn-em">—</span>{' '}
              <span className="dn-signal">two percent away, not five below</span>
              . This note does not defend the prior call; it marks where the
              first kill condition fired and what the post-kill structure is.
            </p>

            <p>
              BTC sits at <span className="dn-tag">$77,988</span>, in the lower
              half of a tight <span className="dn-tag">$77.6k–$79.2k</span> 24h
              range ($7.0B 24h qVol), pressing the one cluster that decides the
              next leg: the{' '}
              <span className="dn-tag stale">
                Daily SMA150 $77.3k (+0.87%)
              </span>{' '}
              / <span className="dn-tag stale">Weekly EMA20 $78.3k (−0.45%)</span>{' '}
              / <span className="dn-tag bear">GEX-flip $76,496 (−1.9%)</span>{' '}
              band. Above it the structure is a pullback inside an intact cycle
              (still above Daily SMA50/SMA100). Through it the dealer map turns
              vol-amplifying and the next displayed downside pocket is{' '}
              <span className="dn-tag bear">$75k −20M GEX</span>. There is no
              ambiguity about where the decision is made{' '}
              <span className="dn-em">—</span>{' '}
              <span className="dn-signal">
                price holds $77.3k or it loses the flip
              </span>
              , and the asymmetry that was up on 05-15 is now down.
            </p>

            <h2 className="dn-sec">
              Regime <span className="dn-roman">I · cross-asset + macro</span>
            </h2>

            <p>
              The correlation regime has{' '}
              <span className="dn-signal">tightened, not loosened</span>: 7d 1h
              mean |r| = 0.275 (<span className="dn-tag">NORMAL</span>), up from
              the 0.234 idiosyncratic reading on 05-15. BTC&rsquo;s strongest
              listed ties are now NVDA <span className="dn-tag">+0.47</span>, NQ{' '}
              <span className="dn-tag">+0.45</span>, TSLA{' '}
              <span className="dn-tag">+0.41</span>, SP500{' '}
              <span className="dn-tag">+0.40</span> — the leash shortened. Over
              the 7d window BTC printed <span className="dn-tag bear">−3.37%</span>{' '}
              against SP500 <span className="dn-tag">−0.36%</span>, NQ{' '}
              <span className="dn-tag">−1.31%</span> and NVDA{' '}
              <span className="dn-tag bull">+3.13%</span>.{' '}
              <span className="dn-em">
                The 05-15 framing — &ldquo;5.5pt underperformance is a
                positioning issue, not a beta issue&rdquo; — resolved the wrong
                way.
              </span>{' '}
              BTC kept underperforming while correlation rose; that reads as
              high downside beta in a risk-off tape, not a closing positioning
              gap. Energy ran hard (CL <span className="dn-tag">+8.97%</span>,
              BRENT <span className="dn-tag">+6.63%</span>, NGAS{' '}
              <span className="dn-tag">+8.97%</span>) while metals sold
              (SILVER <span className="dn-tag bear">−6.00%</span>, GOLD{' '}
              <span className="dn-tag bear">−4.01%</span>) — an
              inflation-with-risk-off footprint, not a clean risk bid.
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>Macro indicator</th>
                  <th>level</th>
                  <th>regime z</th>
                  <th>30d episodic z</th>
                  <th>read</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.47%</td><td className="num bear">+1.63</td><td className="num bear">+1.80</td><td className="bear">risk-off</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.00%</td><td className="num bear">+0.78</td><td className="num bear">+1.92</td><td className="bear">tight</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.28%</td><td className="num">+0.61</td><td className="num">+1.10</td><td className="neut">drifting up</td></tr>
                <tr><td>HY OAS</td><td className="num">2.76%</td><td className="num bull">−1.13</td><td className="num bull">−1.08</td><td className="bull">loose · risk-on</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num stale">−0.524</td><td className="num bull">−0.49</td><td className="num bull">−1.64</td><td className="stale">loosening · stale 9d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">79.9 (+10.2)</td><td className="num">+0.19</td><td className="num bear">+1.68</td><td className="bear">vol spike · new</td></tr>
                <tr><td>DXY</td><td className="num">99.27</td><td className="num bear">+0.82</td><td className="num bear">+1.50</td><td className="bear">tight</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.886T</td><td className="num bull">+0.70</td><td className="num bull">+2.47</td><td className="bull">surge</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.95%</td><td className="num bull">−0.92</td><td className="num bear">+1.80</td><td className="bear">tight</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              The honest macro read is the same skeleton as 05-15 with two
              joints stiffer:{' '}
              <span className="dn-signal">rates pressing harder</span> (10Y
              +1.80σ episodic, TIPS real +1.92σ) and a new stress vector{' '}
              <span className="dn-em">—</span> MOVE bond vol jumped +10.2 to
              79.9 (+1.68σ episodic), which was not on the 05-15 board. DXY is
              tight (+1.50σ). The only thing standing between this footprint
              and a risk-off cascade is credit, and credit refuses:{' '}
              <span className="dn-signal">HY OAS 2.76%</span> is tighter than
              05-15&rsquo;s 2.82% and tags risk-on (−1.08σ episodic). Net
              liquidity still prints a +2.47σ surge. That makes HY OAS the
              single most important external tripwire — the discretionary
              watch is a close above ~3.0–3.2% (we have not derived this from
              history; it is a tripwire, not a tested level). JGB carries a
              +2.55σ regime tag and an EXTREME RISK-OFF flag, but the source
              series is FRED monthly; per desk discipline we do not load it
              into the tactical read.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · stale-flagged</span>
            </h2>

            <p>
              The short-term structure is{' '}
              <span className="dn-signal">broken but oversold</span>. Spot is
              below the Ichimoku cloud on 15m / 30m / 1h / 4h / 8h and the 1w,
              with the 30m printing a sub-water death cross 1 bar ago
              (bearish continuation). RSI is washed on the engine
              timeframes (<span className="dn-tag">1h 35.1</span>,{' '}
              <span className="dn-tag">4h 35.0</span>,{' '}
              <span className="dn-tag">8h 38.4</span>) and 4h/8h/12h/1d MACD
              histograms are deeply negative. Against that, the 1h printed a
              sub-water golden cross 9 bars ago and carries{' '}
              <span className="dn-tag bull">BULL hidden + BULL regular</span>{' '}
              divergence <span className="dn-em">—</span> the only constructive
              cell on the board, and the reason a counter-trend bounce is set
              up rather than a clean short. The higher frames (12h / 1d / 3d /
              1M) are still above or inside cloud:{' '}
              <span className="dn-em">
                this is a short-term regime break inside an intact mid-cycle,
                not a cycle top — until the cluster goes.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">78,044</td><td className="num">42.3</td><td className="bear">death (water-up) 13b</td><td className="bear">below ↑78.1k</td><td>Buy 5</td><td>BEAR/BULL mixed</td></tr>
                <tr><td>30m</td><td className="num">78,044</td><td className="num">42.0</td><td className="bear">death (water-dn) 1b</td><td className="bear">below ↑78.2k</td><td>Buy 7</td><td>BEAR hid</td></tr>
                <tr><td>1h</td><td className="num">78,044</td><td className="num bull">35.1</td><td className="bull">golden (water-dn) 9b</td><td className="bear">below ↑79.7k</td><td>Buy 4</td><td className="bull">BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">78,044</td><td className="num bull">35.0</td><td className="bear">death (water-dn) 9b</td><td className="bear">below ↑80.5k</td><td>Sell 1</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">78,044</td><td className="num">38.4</td><td className="bear">death (water-up) 18b</td><td className="bear">below ↑78.8k</td><td>Buy 6</td><td>BEAR reg</td></tr>
                <tr><td>12h</td><td className="num">78,044</td><td className="num">41.3</td><td className="bear">death (water-up) 12b</td><td className="bull">above ↓77.8k</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">78,044</td><td className="num">48.7</td><td className="bear">death (water-up) 5b</td><td className="bull">above ↓73.0k</td><td>Buy 5</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">78,044</td><td className="num">53.3</td><td className="neut">—</td><td className="neut">in cloud 73.6–93.0k</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">78,044</td><td className="num">46.9</td><td className="bull">golden (water-dn) 4b</td><td className="bear">below ↑100.3k</td><td>Sell 5</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    No active ⚡TD9. 1h is the constructive outlier;
                    treat its sign as provisional until a clean 1h close
                    holds above $79.7k cloud base.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix says the same thing precisely. Spot has{' '}
              <span className="dn-signal">lost the daily 20</span>: below{' '}
              <span className="dn-tag bear">D-SMA20 $79.3k (−1.69%)</span> and{' '}
              <span className="dn-tag bear">D-EMA20 $79.0k (−1.30%)</span>. It
              still holds the cycle ladder:{' '}
              <span className="dn-tag bull">D-SMA50 $75.4k (+3.43%)</span>,{' '}
              <span className="dn-tag bull">D-SMA100 $72.1k (+8.14%)</span>{' '}
              (the cycle anchor). Resistance is the{' '}
              <span className="dn-tag stale">
                Daily SMA200/EMA200 cluster $81.6–81.9k (−4.4% to −4.7%)
              </span>{' '}
              — note this dropped ~$0.4k from 05-15&rsquo;s $82.0–82.3k. The
              decision support is the{' '}
              <span className="dn-tag stale">
                D-SMA150 $77.3k (+0.87%)
              </span>{' '}
              sitting just under spot, coincident with{' '}
              <span className="dn-tag stale">W-EMA20 $78.3k (−0.45%)</span> —
              spot is on the weekly pivot. Below D-SMA150 there is no MA
              structure until D-SMA50 $75.4k, which is exactly where the GEX
              flip ($76.5k) and the −20M @75k pocket sit.{' '}
              <span className="dn-em">
                All MA levels are anchored to the parquet last bar 2026-05-17
                00:06Z (close $78,187); offsets above are recomputed against
                live spot $77,988.
              </span>
            </p>

            <p>
              Weekly remains structurally mixed: above{' '}
              <span className="dn-tag bull">W-SMA20 $75.8k (+2.92%)</span> but
              below <span className="dn-tag bear">W-EMA50 $85.6k (−8.89%)</span>,{' '}
              <span className="dn-tag bear">W-SMA50 $94.6k (−17.56%)</span> and{' '}
              <span className="dn-tag bear">W-EMA100 $83.6k (−6.67%)</span>.
              The W-EMA20 test at $78.3k is the level that matters: a weekly
              close back above it keeps the digestion read; a weekly close
              below converts the daily-20 loss into a weekly-pivot loss. NTT
              pivot data was not loaded in this cut; we use cloud + MA
              structure only and do not claim independent NTT pivot
              confirmation.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">III · live tape</span>
            </h2>

            <p>
              This is where the 05-15 thesis died. The squeeze long rested on{' '}
              <span className="dn-signal">funding paying shorts</span> (−2.10%
              ann on 05-15). The live tape now reads{' '}
              <span className="dn-tag bear">+5.0% ann (longs pay)</span>, drifted
              up from <span className="dn-tag">+3.7% ann</span> at the 24h-ago
              endpoint, with a 24h path that ranged −0.4% to +7.0% and a 24h
              mean of +3.3% ann. <span className="dn-em">
                Funding flipping and holding positive is precisely the 05-15
                kill condition #1 (&ldquo;funding 8h ann &gt; +0.5% sustained
                24h → cut squeeze long&rdquo;). It fired.
              </span>{' '}
              The squeeze-fuel thesis is closed, not deferred.
            </p>

            <p>
              The rest of the tape confirms de-risking, not accumulation. OI
              grew <span className="dn-tag">+0.96% over 24h</span> (
              <span className="dn-tag">+973 BTC</span>) and{' '}
              <span className="dn-tag">+806 BTC over 4h</span> while price fell —
              with funding positive, the marginal book is{' '}
              <span className="dn-signal">longs adding into weakness</span>,
              not a fresh short. Smart money (top-trader) is still net long{' '}
              <span className="dn-tag bull">+16.1k BTC</span> (long 28.8k −
              short 12.7k) but has cut{' '}
              <span className="dn-tag bear">−23.8k BTC in 24h</span> — a sharper
              distribution than 05-15&rsquo;s −14.0k, and into weakness rather
              than strength. Retail (Binance mkt) flipped to{' '}
              <span className="dn-tag bear">54.8% long</span> from 38.4% long on
              05-15 — it covered shorts and went long into a −1.3% day, the
              wrong side again, now on the other side. Perp trades a{' '}
              <span className="dn-tag bear">−$29 discount</span> to spot;
              aggressor skew is <span className="dn-tag bear">−22</span> (net
              sell pressure).
            </p>

            <p>
              Windowed flow: over 4h price{' '}
              <span className="dn-tag bear">−0.42%</span>, OI{' '}
              <span className="dn-tag">+806 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +661</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −800</span>, big-print net{' '}
              <span className="dn-tag bear">−203 BTC over 105 prints</span>. Over
              1h price <span className="dn-tag bear">−0.29%</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +186</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −398</span>.{' '}
              <span className="dn-em">
                Net: persistent futures-led distribution with a spot bid
                absorbing underneath — smart money trimming, retail catching,
                shorts now paid to press.
              </span>{' '}
              The spot-absorption is the only thing that makes the
              counter-trend bounce a trade rather than a fade.
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">IV · GEX + IV</span>
            </h2>

            <p>
              The dealer map inverted. Aggregate GEX is{' '}
              <span className="dn-tag">+37.7M/1%</span> — long gamma, but{' '}
              <span className="dn-signal">
                one-fifth of the +204M that was pinning on 05-15
              </span>
              . The 0-gamma flip is <span className="dn-tag bear">$76,496</span>,
              now <span className="dn-tag bear">−1.9% below live spot</span>{' '}
              $77,988 (the GEX file&rsquo;s own +2.0% &ldquo;dist to flip&rdquo;
              reads off its Deribit-index reference $78,035; both say the same
              thing — it was −5.4% below on 05-15, the cushion is mostly gone).
              The
              top walls cluster as a positive ceiling above (
              <span className="dn-tag bull">$80k +41.7M</span>,{' '}
              <span className="dn-tag bull">$82k +27.8M</span>) and a{' '}
              <span className="dn-signal">negative-gamma shelf at and below</span>{' '}
              spot: <span className="dn-tag bear">$78k −14.1M</span> (dealers
              short gamma at current price → they amplify intraday moves here),{' '}
              <span className="dn-tag bear">$77.5k −10.5M</span>,{' '}
              <span className="dn-tag bear">$75k −20.1M</span>,{' '}
              <span className="dn-tag bear">$74k −7.7M</span>, with a deep{' '}
              <span className="dn-tag">$60k −7.6M</span> crash-put pocket.{' '}
              <span className="dn-em">
                Every front-dated expiry is negative gamma — 0DTE 17MAY −8.7M,
                18MAY −15.5M, 19MAY −4.2M, 22MAY −5.7M — turning positive only
                at 29MAY (+26.7M) and 26JUN (+19.5M).
              </span>
            </p>

            <p>
              Read it straight: above-flip-by-2% with a negative-gamma shelf
              under spot and the entire 0–5 DTE strip short gamma is a{' '}
              <span className="dn-signal">vol-amplifying</span> configuration,
              the opposite of the 05-15 pin. A break of the $77.3k / $76.5k
              cluster has dealers selling into the move, not buying it.{' '}
              <span className="dn-em">
                The 05-15 short-front-vol idea is now an explicit mistake — do
                not sell front gamma here; if anything the framework lean is
                long gamma into the flip test.
              </span>{' '}
              IV median across 942 instruments is{' '}
              <span className="dn-tag">43.8%</span> (a chain-median summary
              stat, not the IV of any expiry) against 30D close-to-close RV of{' '}
              <span className="dn-tag">29.1%</span> — a ~+15pt richness signal
              at chain level, <span className="dn-em">not</span> a tradable
              spread. We do not load expiry-/strike-level IV, vega, skew or
              term structure in this cut; the vol read below is framework-only.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · sized to what we can prove</span>
            </h2>

            <div className="dn-trade">
              <span className="dn-side framework">stand-aside · primary</span>
              <div className="dn-trade-name">
                No directional edge at the cluster — flat, thesis killed
              </div>
              <div className="dn-thesis">
                The 05-15 squeeze long is closed on its own kill condition
                (funding flipped and held positive). Shorting into 1h RSI 35
                with a 1h bullish divergence, 2% above a negative-gamma flip,
                with the mid-cycle MA ladder still intact, is a low-quality
                entry. The desk&rsquo;s primary stance is{' '}
                <span className="dn-em">flat directional</span> until the
                $77.3k D-SMA150 / $76.5k flip cluster resolves on a close.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">stance</span><span className="dn-lvl-v">flat directional · no new risk</span></div>
                <div><span className="dn-lvl-k">decision band</span><span className="dn-lvl-v">$77.3k–$76.5k (D-SMA150 → flip)</span></div>
                <div><span className="dn-lvl-k">upside invalidation</span><span className="dn-lvl-v">1h close back above $79.7k cloud base</span></div>
                <div><span className="dn-lvl-k">re-engage</span><span className="dn-lvl-v">on cluster break (short) or bounce confirm (long)</span></div>
              </div>
              <div className="dn-gating">
                <b>Why primary is do-nothing:</b> the only two real trades
                below are both <i>conditional</i> — one on a break, one on a
                hold. Pre-positioning either before the cluster resolves is
                paying for a coin-flip 2% above a vol-amplifying flip.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · conditional</span>
              <div className="dn-trade-name">
                Flip-break short, conditional on $76.5k loss + credit tell
              </div>
              <div className="dn-thesis">
                Below the $77.3k D-SMA150 → $76.5k 0-gamma flip, dealers flip
                short gamma and the −20M @75k / −7.7M @74k pockets are
                accelerants. This is the directional trade with the dealer map
                behind it — but it is conditional on the break printing, not
                pre-positioned, and it wants a macro confirmation given HY
                credit is the only thing holding the complex up.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">trigger</span><span className="dn-lvl-v bear">1h close &lt; $76,400 (below flip)</span></div>
                <div><span className="dn-lvl-k">confirm</span><span className="dn-lvl-v">HY OAS &gt; ~3.0% close (watch) OR clean 4h follow-through</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bull">1h close back &gt; $77,800</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$75,000 / $74,000 / cycle-anchor watch $72.1k</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> trigger $76,400, stop $77,800 = ~$1,400 risk;
                first target $75,000 = ~$1,400, stretch $74,000 = ~$2,400 ≈
                1.0–1.7:1 before fees. <b>Sizing:</b> 0.5R on trigger, +0.3R
                only on HY-OAS confirm; total ≤ 0.8R. <b>Do not</b> take this
                without the break — there is no edge shorting inside the range.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · small</span>
              <div className="dn-trade-name">
                Counter-trend bounce scout — oversold + spot absorption
              </div>
              <div className="dn-thesis">
                1h sub-water golden cross + 1h BULL hidden/regular divergence +
                RSI 35 washed + spot sitting on W-EMA20 $78.3k + 4h spot CVD
                +661 absorbing against futures CVD −800. A tactical bounce
                toward the lost daily-20 ($79.0–79.3k) is set up. This is{' '}
                <span className="dn-em">
                  counter-trend inside a broken short-term structure
                </span>{' '}
                — small, fast, and the first to be cut.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">$77,600–78,100</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1h close &lt; $77,300 (D-SMA150)</span></div>
                <div><span className="dn-lvl-k">target</span><span className="dn-lvl-v">$79,000–79,300 (D-EMA20/SMA20)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.25R · take half at $78.8k</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> entry mid $77,850, stop $77,300 = ~$550 risk,
                target $79,000–79,300 = ~$1,200–1,450 ≈ 2.2–2.6:1.{' '}
                <b>Hard rule:</b> this and the flip-break short are mutually
                exclusive — the $77.3k 1h close is the single switch between
                them. No averaging down; the bounce is invalid the moment
                D-SMA150 closes below.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · hedge</span>
              <div className="dn-trade-name">
                Downside put-spread — tail is fatter than 05-15
              </div>
              <div className="dn-thesis">
                Rates +1.80σ episodic, TIPS real +1.92σ, MOVE bond vol +1.68σ
                (new), DXY tight, and HY OAS the only thing holding the complex.
                Front dealer gamma is negative. The convexity of a credit
                revaluation is higher than on 05-15. Hedge sized as insurance,
                not view; trigger discretionary, not backtested.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">structure</span><span className="dn-lvl-v">long $75k / short $71k put</span></div>
                <div><span className="dn-lvl-k">expiry</span><span className="dn-lvl-v">29-MAY-26 (12d) — first positive-GEX expiry</span></div>
                <div><span className="dn-lvl-k">grow-trigger</span><span className="dn-lvl-v bear">HY OAS &gt; ~3.0–3.2% close (watch)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.15R (up from 0.10R on 05-15)</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the 3.0–3.2% HY threshold is a discretionary
                watch, not a tested HY-OAS breakpoint. Strike/premium/Greeks
                not loaded — structure is illustrative, sizing pending a
                Deribit 29-MAY chain pull.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the single switch</span>
            </h2>

            <p>
              The 05-15 book is already unwound on its own kill table. The
              post-kill stance is flat with two conditional triggers around one
              level. We act when one of these prints, not before:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Cluster loses (bear path)</td><td className="bear">1h close &lt; $76,400 (below flip)</td><td>flip-break short, confirm on HY-OAS</td></tr>
                <tr><td>Cluster holds + oversold (bounce)</td><td className="bull">1h hold &gt; $77,300 w/ 1h bull div intact</td><td>scout long to D-20, half off $78.8k</td></tr>
                <tr><td>Credit cracks (tail)</td><td className="bear">HY OAS &gt; ~3.0–3.2% close (watch)</td><td>grow tail hedge, no longs</td></tr>
                <tr><td>Reclaim invalidates both</td><td className="bull">1h close &gt; $79,700 (cloud base)</td><td>flat, re-assess from a digestion read</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes this note is{' '}
              <span className="dn-signal">
                a 1h close through $76,400
              </span>
              . It converts the conditional short into directional with the
              dealer map behind it, voids the bounce scout, and turns the
              &ldquo;intact mid-cycle&rdquo; read into a live test of the
              D-SMA50 $75.4k cycle ladder. Until then this is a flat book
              watching one level, not a position with a view.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v1 · pre-audit
            </span>
            This note has <b>not</b> yet been through cross-model hostile
            audit. Unlike the 05-15 v2 (which shipped only after a 26-finding
            codex review, including the funding ×100 unit error as a CRITICAL),
            this is a single-model synthesis off one atomic snapshot
            (2026-05-17 01:30Z). The funding annualization here is{' '}
            field × 1095 (8h rate already in percent: +0.0046%/8h → +5.0% ann),
            consistent with the 05-15 F-02 correction and the live snapshot
            banner — but a hostile reviewer should re-verify it, the SM
            net-BTC delta, the MA anchor offsets, and the GEX flip distance
            before this is treated as desk-final. Codex hostile review pending;
            promote to v2 with a full audit trace once run.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>
            , and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-05-17 01:30Z) with
            section-level provenance disclosed in the manifest band above; some
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
                When the kill condition fires, you don&rsquo;t argue with it
                — you mark it.
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
            v1 · 2026-05-17 01:30Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
