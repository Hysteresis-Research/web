import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';

// Internal-only route: not in public nav, not in sitemap, noindex/nofollow.
// Description deliberately anodyne — any future external share (Slack/email
// link preview) shows neutral text rather than dated trade specifics.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-05-15 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-05-15',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-05-15' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default function Desk20260515() {
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · DESK NOTE · 2026-05-15 · v2</span>
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
              <span className="dn-big">$80,951</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.70%</span>
            </div>
          </div>

          {/* DATA PROVENANCE BAND */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-05-15 02:39Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-15 02:39Z</td>
                  <td className="dn-flag">fresh · 1-min</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD9</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 02:39Z scan</td>
                  <td className="dn-flag">fresh · in-progress bar</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 02:14Z scan</td>
                  <td className="dn-flag">25-min lag · daily indicators</td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 02:14Z snapshot</td>
                  <td className="dn-flag">25-min lag · Deribit chain</td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 02:14Z
                  </td>
                  <td className="dn-flag">25-min lag · 1h bars</td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA levels</td>
                  <td className="dn-v-cell">parquet last bar 2026-05-13 23:59Z</td>
                  <td className="dn-flag">
                    2-day stale · offsets recomputed vs live spot
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · 75-day-stale tag in source</td>
                  <td className="dn-flag">stale · do not treat as live confirmation</td>
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
              <span className="dn-v bear">−2.10%</span>
              <span className="dn-src">live · 02:39Z</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+0.78% → −2.10%</span>
              <span className="dn-src">live_db 24h endpoints</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v">+5.95% (+6.2k BTC)</span>
              <span className="dn-src">live · 02:39Z</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v">38.4 / 61.6</span>
              <span className="dn-src">live_db `mkt_long_pct`</span>
            </div>
            <div>
              <span className="dn-k">top-trader long%</span>
              <span className="dn-v bull">60.86</span>
              <span className="dn-src">live_db `long_pct`</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+23.1k</span>
              <span className="dn-src">live · top-trader long − short</span>
            </div>
            <div>
              <span className="dn-k">SM 24h Δ</span>
              <span className="dn-v bear">−14.0k BTC</span>
              <span className="dn-src">distributing into strength</span>
            </div>
            <div>
              <span className="dn-k">IV / 30d RV</span>
              <span className="dn-v">43.6% / 27.7%</span>
              <span className="dn-src">GEX median IV · 936 inst.</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              The market is between two well-defined walls and no one&rsquo;s
              hand is on the wheel. The book leans long against an over-paid
              short crowd, but the trigger has not fired and the dealers&rsquo;
              tape is dampening, not amplifying. Every claim below cites its
              snapshot.
            </p>

            <p>
              BTC sits at <span className="dn-tag">$80,951</span>, pinned
              between the{' '}
              <span className="dn-tag bull">$80k +42M-GEX shelf</span> and the{' '}
              <span className="dn-tag bear">$82k +65M-GEX ceiling</span>, the
              latter coinciding with Daily SMA200{' '}
              <span className="dn-tag stale">$82.3k (stale 2d)</span> and Daily
              EMA200 <span className="dn-tag stale">$82.0k (stale 2d)</span>.
              The 0-gamma flip sits <span className="dn-tag">$76,547</span>{' '}
              (<span className="dn-tag">−5.4%</span> below live spot, per GEX
              file internal +5.9% reading off its own $81,078 reference).
              Below flip the largest displayed downside pocket is the $75k{' '}
              <span className="dn-tag bear">−14M GEX</span> level; the full
              strike distribution is not loaded. There is no ambiguity about
              where the regime decision is made{' '}
              <span className="dn-em">—</span>{' '}
              <span className="dn-signal">
                price has to leave 82k or 79k cleanly
              </span>
              , and until it does, this is a pin trade with a sentiment
              kicker.
            </p>

            <h2 className="dn-sec">
              Regime <span className="dn-roman">I · cross-asset + macro</span>
            </h2>

            <p>
              Cross-asset correlation regime is{' '}
              <span className="dn-signal">idiosyncratic</span> (7d 1h mean |r|
              = 0.234, threshold 0.25). BTC&rsquo;s strongest listed positive
              correlations are NQ <span className="dn-tag">+0.37</span> and
              SP500 <span className="dn-tag">+0.35</span>{' '}
              <span className="dn-em">—</span> still tied, but the leash is
              slack enough that a single-asset positioning story can play
              through. Since the 2026-03-28 baseline NQ has run{' '}
              <span className="dn-tag bull">+27.7%</span> and BTC{' '}
              <span className="dn-tag">+22.2%</span>{' '}
              <span className="dn-em">—</span> a{' '}
              <span className="dn-signal">
                5.5-point relative underperformance
              </span>{' '}
              that the funding tape says is a positioning issue, not a beta
              issue.
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>Macro tier-1 indicator</th>
                  <th>level</th>
                  <th>regime z</th>
                  <th>30d episodic z</th>
                  <th>read</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.46%</td><td className="num bear">+1.56</td><td className="num bear">+1.83</td><td className="bear">risk-off</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">1.99%</td><td className="num bear">+0.69</td><td className="num bear">+1.72</td><td className="bear">tight</td></tr>
                <tr><td>HY OAS</td><td className="num">2.82%</td><td className="num bull">−0.75</td><td className="num bull">−0.52</td><td className="bull">loose</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.524</td><td className="num bull">−0.49</td><td className="num bull">−1.64</td><td className="neut">loosening</td></tr>
                <tr><td>DXY</td><td className="num">99.08</td><td className="num bear">+0.62</td><td className="num bear">+1.16</td><td className="bear">tight</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.886T</td><td className="num bull">+0.70</td><td className="num bull">+2.47</td><td className="bull">surge</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.35%</td><td className="num bear">+2.47</td><td className="num">+1.18</td><td className="stale">stale 75d · do not lean</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.11%</td><td className="num bull">−0.62</td><td className="num bear">+1.83</td><td className="bear">tight</td></tr>
              </tbody>
            </table>

            <p>
              The honest read of the macro tape:{' '}
              <span className="dn-signal">rates pressing higher</span> (+1.83σ
              episodic) with DXY tight (+1.16σ episodic), a stagflation-lite
              footprint that should be a headwind. It isn&rsquo;t, because
              Net Liq just printed +2.47σ episodic surge and HY credit refuses
              to widen.{' '}
              <span className="dn-em">
                The conditions that should kill risk are present except the
                one that matters — credit.
              </span>{' '}
              The desk&rsquo;s discretionary watch on HY OAS is 3.20% (current
              2.82%); we have not derived that threshold from history and
              treat it as a tripwire, not a tested level. JGB carries a
              +2.47σ regime tag but the source file flags the series as
              75-day-stale; we do not load it into the tactical read.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · stale-flagged</span>
            </h2>

            <p>
              Multi-timeframe is in{' '}
              <span className="dn-signal">visible disagreement</span>, which
              is what makes the trade interesting. The 4h just printed an
              underwater MACD golden cross 2 bars ago (
              <span className="dn-tag">
                DIF −129.3, MACDh +68.2 at the print; current MACDh +124
              </span>
              ). The 1h just printed an above-zero death cross (
              <span className="dn-tag">DIF +345, MACDh −5</span>) — a
              borderline event that flickered to flat in the prior 02:16Z
              scan before re-printing as death cross at 02:39Z.{' '}
              <span className="dn-em">
                The 1h cell is the single most snapshot-sensitive row in this
                note; treat its sign as provisional until a clean 1h close.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">80,890</td><td className="num">39.2</td><td className="bear">death cross 32b</td><td className="neut">in cloud 80.6–81.2k</td><td>Buy 4</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">80,890</td><td className="num">47.1</td><td className="bear">death cross 11b</td><td className="bull">above ↓79.6k</td><td>Buy 2</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">80,890</td><td className="num">52.9</td><td className="bear">death cross 0b *</td><td className="bull">above ↓80.3k</td><td>Buy 2</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">80,890</td><td className="num">53.0</td><td className="bull">golden cross 2b</td><td className="bull">above ↓80.8k</td><td>Sell 4</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">80,890</td><td className="num">53.5</td><td className="bear">death cross 12b</td><td className="bull">above ↓79.7k</td><td>Sell 3</td><td>BEAR reg</td></tr>
                <tr><td>12h</td><td className="num">80,890</td><td className="num">55.7</td><td className="bear">death cross 8b</td><td className="bull">above ↓76.7k</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">80,890</td><td className="num">59.3</td><td className="bear">death cross 3b</td><td className="bull">above ↓73.0k</td><td>Buy 3</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">80,890</td><td className="num">58.3</td><td className="neut">—</td><td className="neut">in cloud</td><td className="hot">⚡ TD9 SELL</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">80,890</td><td className="num">49.8</td><td className="bull">golden cross 4b</td><td className="bear">below ↑100.3k</td><td>Sell 5</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    * 1h MACD cross flickered to 0b death cross in 02:39Z
                    scan after MACDh briefly recovered to ~0 in 02:16Z scan
                    — treat as provisional
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix prints a clean ladder above{' '}
              <span className="dn-tag bull">D-SMA20 $79.1k (+2.40%)</span>,{' '}
              <span className="dn-tag bull">D-SMA50 $74.5k (+8.62%)</span> and
              the cycle anchor{' '}
              <span className="dn-tag bull">D-SMA100 $71.8k (+12.78%)</span>;
              resistance is the Daily SMA200/EMA200 cluster at{' '}
              <span className="dn-tag stale">
                $82.0–82.3k (−1.23% to −1.59%)
              </span>
              . Weekly remains{' '}
              <span className="dn-signal">structurally mixed</span>: above
              W-EMA20 <span className="dn-tag bull">$78.4k (+3.20%)</span>,
              below W-SMA50{' '}
              <span className="dn-tag bear">$94.6k (−14.45%)</span>, far above
              W-EMA200 <span className="dn-tag bull">$68.9k (+17.54%)</span>.
              This is a mid-cycle digestion footprint, not a topping print.{' '}
              <span className="dn-em">
                All MA levels are anchored to the 2026-05-13 23:59Z close of
                $79,288; offsets above are recomputed against live spot
                $80,951.
              </span>
            </p>

            <p>
              The 4h Ichimoku cloud holds support near $80.8k. NTT pivot data
              was not loaded in this cut; we use cloud-only structure here
              and do not claim independent NTT pivot confirmation. 3D TD9
              SELL is the one signal that argues against any chase higher —
              we treat it as an overbought reversal warning that earns
              size-down into the $82–83k shelf, not as a tested short
              trigger; no TD9 forward-return study accompanies this read.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">III · live tape</span>
            </h2>

            <p>
              This is the cleanest part of the picture and the reason we
              lean long. In the last 24h the live tape&rsquo;s per-8h
              funding rate has gone from{' '}
              <span className="dn-tag">+0.78% ann</span> (24h-ago endpoint)
              to <span className="dn-tag bear">−2.10% ann</span> (latest),
              with the intervening realized funding stamp at 2026-05-15
              00:00Z at <span className="dn-tag bear">−4.64% ann</span>. OI
              grew <span className="dn-tag">+5.95% over 24h</span> (
              <span className="dn-tag">+6,196 BTC</span>, ~$501M) and given
              funding turned negative within that window, the marginal
              position added is <span className="dn-signal">a new short</span>
              . Retail (Binance mkt) sits at{' '}
              <span className="dn-tag bear">61.6% short</span>; top-trader
              (smart money) positioning is{' '}
              <span className="dn-tag bull">
                long% 60.86 · net +23.1k BTC
              </span>
              , although they have{' '}
              <span className="dn-tag bear">cut −14.0k BTC in 24h</span> —
              distributing into strength, not flipping side.
            </p>

            <p>
              Session CVD: Coinbase spot{' '}
              <span className="dn-tag bull">+428 BTC</span>, perp{' '}
              <span className="dn-tag bull">+1,575 BTC</span>. 1h windowed:
              price <span className="dn-tag bear">−0.56%</span>, OI{' '}
              <span className="dn-tag bear">−476 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −289</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +138</span> — i.e. mild
              distribution on spot, mild absorption on perp. 4h big-print
              bias is modestly long (
              <span className="dn-tag">+57 BTC net over 126 prints</span>).{' '}
              <span className="dn-em">
                Net: shorts are paid to hold, smart money is net long but
                trimming, retail is on the wrong side, the tape is
                digesting.
              </span>{' '}
              This is a setup that pays the long side conditional on{' '}
              <span className="dn-signal">$82k taken cleanly</span> — not
              before.
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">IV · GEX + IV</span>
            </h2>

            <p>
              Dealer aggregate GEX (from the 02:14Z snapshot) is{' '}
              <span className="dn-tag bull">+204.1M/1%</span> (long gamma)
              with the 0-gamma flip{' '}
              <span className="dn-tag">$76,547</span>, currently{' '}
              <span className="dn-tag">−5.4%</span> below live spot. Above
              flip dealers dampen vol — exactly the pin behavior the tape is
              showing. Top-10 walls cluster around current price: $82k
              (+65M), $80k (+42M), $81.5k (+29M), $85k (+19M), $90k (+19M),
              $84k (+15M). Below flip the only structure in the top-10
              displayed is the $75k −14M pocket; we have not loaded the full
              strike distribution. Today expires{' '}
              <span className="dn-tag">78.5M GEX of 0DTE</span>; we expect a
              conditional pin bias around the 80–82k strike cluster into NY
              close, but the source does not give us max-pain, dealer
              inventory direction, or intraday hedging flow to call it
              deterministically.
            </p>

            <p>
              Implied vol at{' '}
              <span className="dn-tag">
                43.6% median across 936 instruments
              </span>{' '}
              (a cross-chain summary stat, not the IV of any specific
              expiry) sits against 30D realized of{' '}
              <span className="dn-tag">27.7%</span>. This is a directional
              richness signal at chain level,{' '}
              <span className="dn-em">not</span> a tradable spread for a
              7-day short strangle. We do not load expiry-/strike-level IV,
              vega, skew, or term structure in this cut; the vol idea below
              is framework-only until those are pulled.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · sized to what we can prove</span>
            </h2>

            <div className="dn-trade">
              <span className="dn-side long">long · primary</span>
              <div className="dn-trade-name">
                BTC short-squeeze long, conditional on $82.3k break
              </div>
              <div className="dn-thesis">
                Funding has flipped to short-pay (−2.10% ann), retail is
                61.6% short, smart money is net long but distributing,
                dealers are long gamma above flip and pinning, 4h MACD is
                golden-crossed underwater, 1h is a provisional death cross.
                Squeeze fuel is real; trigger is not pulled until 82.3k is
                taken on a 1h close. Two execution windows below:
                scout-position in range, or wait for the break.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">$80,500–80,900</span></div>
                <div><span className="dn-lvl-k">scout stop</span><span className="dn-lvl-v bear">$79,400 (1h close)</span></div>
                <div><span className="dn-lvl-k">first target</span><span className="dn-lvl-v">$82,000–82,300</span></div>
                <div><span className="dn-lvl-k">stretch target</span><span className="dn-lvl-v">$84,800 / $87,500</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R math (acknowledged weak from scout entry):</b>{' '}
                midpoint $80,700, risk $1,300 to stop, reward $1,300–1,600
                to first target = ~1.0–1.2:1 before fees.{' '}
                <b>Preferred execution:</b> add on confirmed 1h close &gt;
                $82,300, stop below $81,000 reclaim = 1,300 risk to $84,800
                first stretch = ~2.9:1. <b>Sizing:</b> 0.4R scout, +0.6R on
                confirmed break; total ≤ 1.0R.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework only</span>
              <div className="dn-trade-name">
                BTC vs NQ relative-value long — sizing pending ratio series
              </div>
              <div className="dn-thesis">
                5.5pt rebased underperformance vs NQ since 3/28 with
                correlation 0.37 is not random; NQ has the macro tailwind
                already priced in, BTC has the positioning tailwind still
                ahead. Idiosyncratic regime makes the pair legible.{' '}
                <span className="dn-em">
                  We do not have a BTC/NQ ratio series loaded
                </span>{' '}
                — rebased return ratio is ~0.957, but that is not the same
                as a price ratio or beta-adjusted exposure. Trade levels
                withheld until the ratio chart is built.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">structure</span><span className="dn-lvl-v">long BTC / short XYZ100 (xyz:NQ proxy)</span></div>
                <div><span className="dn-lvl-k">size sketch</span><span className="dn-lvl-v">vol-parity ≈ 0.6× BTC notional : 1× NQ notional (RV 27.7%/17%)</span></div>
                <div><span className="dn-lvl-k">entry</span><span className="dn-lvl-v">pending</span></div>
                <div><span className="dn-lvl-k">invalidation</span><span className="dn-lvl-v">pending</span></div>
              </div>
              <div className="dn-gating">
                <b>Required before sizing:</b> BTC/NQ price-ratio series
                rebased to 3/28, definition of vol/beta normalization, NQ
                realized vol from xyz:XYZ100 candles, correlation stability
                check.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side vol">vol · framework only</span>
              <div className="dn-trade-name">
                Short front-month vol into pin — premium-rich but unsized
              </div>
              <div className="dn-thesis">
                Cross-chain IV median 43.6% vs 30D RV 27.7% is a +16-point
                richness signal at chain level. Dealers long gamma above
                flip dampen realized; today&rsquo;s 0DTE 78.5M GEX pins.{' '}
                <span className="dn-em">
                  A short strangle needs strike-specific IV, premium,
                  Greeks, and skew
                </span>{' '}
                — none of which are loaded. We will not size this trade
                from a chain-median stat.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">candidate</span><span className="dn-lvl-v">short 22-MAY $79k / $82k strangle</span></div>
                <div><span className="dn-lvl-k">hedge</span><span className="dn-lvl-v">long $76k put / $84k call (29-MAY wing)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">pending strike IV/Greeks pull</span></div>
                <div><span className="dn-lvl-k">invalidation</span><span className="dn-lvl-v">break of either short strike</span></div>
              </div>
              <div className="dn-gating">
                <b>Required before sizing:</b> Deribit chain for 22-MAY +
                29-MAY, net credit, breakevens, vega + gamma + theta, term
                structure, 25Δ skew, scenario P&amp;L grid for ±3σ spot
                moves.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · hedge</span>
              <div className="dn-trade-name">
                Small downside put-spread against primary long
              </div>
              <div className="dn-thesis">
                Rates +1.83σ episodic, DXY tight; the credit mismatch (HY z
                −0.75σ) can revalue fast on any growth-scare catalyst.
                Hedge sized as insurance, not view. Trigger is
                discretionary, not derived from a backtest.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">structure</span><span className="dn-lvl-v">long $77k / short $74k put</span></div>
                <div><span className="dn-lvl-k">expiry</span><span className="dn-lvl-v">29-MAY-26 (14d)</span></div>
                <div><span className="dn-lvl-k">grow-trigger</span><span className="dn-lvl-v bear">HY OAS &gt; 3.20% close (watch)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.10R</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> 3.20% threshold is a discretionary watch
                level, not a tested HY-OAS breakpoint; replace with proper
                threshold once a HY-vs-BTC drawdown study runs.
              </div>
            </div>

            <h2 className="dn-sec">
              Kill conditions{' '}
              <span className="dn-roman">VI · when we walk</span>
            </h2>

            <p>
              We hold the long-bias book while four things remain true. We
              unwind it the moment any of them stops:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>kill level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Funding stays paid-short or flat</td><td className="bear">funding 8h ann &gt; +0.5% sustained 24h</td><td>cut squeeze long, recheck</td></tr>
                <tr><td>Price holds above 1h cloud</td><td className="bear">1h close below $79.4k</td><td>flat primary, prep $77k tag</td></tr>
                <tr><td>HY credit refuses to widen</td><td className="bear">HY OAS &gt; 3.20% close (watch)</td><td>grow tail hedge, halve risk</td></tr>
                <tr><td>3D TD9 SELL extends with bear divergence</td><td className="bear">3d close &lt; $79k after TD13</td><td>flat all directional, await reset</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes the whole note is{' '}
              <span className="dn-signal">
                a clean 1h close through $82.3k
              </span>
              . That turns the framework-only rel-val long into directional,
              the scout squeeze long into a runner, and the chain-median
              short-vol idea into a costly mistake — close any short-vega
              exposure on the print, not the retest.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 derived from hostile audit 2026-05-15
            </span>
            Hostile audit by codex CLI 0.125.0 (xhigh) returned 26 findings
            (4 CRITICAL, 9 HIGH, 9 MED, 3 LOW, 1 NIT). All 11 correctness
            blockers addressed in this revision: data-manifest band (F-01),
            funding unit corrected from ×100 error (F-02), MTF table copied
            from 02:39Z scan verbatim (F-03 / F-06), live-tape section
            re-pulled atomically (F-04), NTT pivot claim removed (F-05),
            BTC/NQ ratio reframed as framework-only (F-07), vol trade
            reframed as framework-only with required-data checklist
            (F-08 / F-09), primary-long R/R explicitly stated and execution
            split into scout vs confirmed-break (F-10), squeeze language
            conditioned on break (F-11), JGB tagged stale-75d (F-12), MA
            stale flag + anchor disclosed (F-13). Secondary fixes (F-14 GEX
            flip math · F-15 max-pain · F-16 only-structure phrasing · F-18
            &ldquo;rates +27.7%&rdquo; → &ldquo;NQ +27.7%&rdquo; · F-19 HY
            threshold reframed · F-20 TD9 framing · F-21 &ldquo;tied
            loosest&rdquo; inverted · F-25 MACD parenthetical · F-26
            three-vs-four) all applied. Source audit record kept in the
            desk repository.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>
            , and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-05-15 02:39Z)
            with section-level provenance disclosed in the manifest band
            above; some inputs are explicitly stale or pending and flagged
            as such. Levels, sizes, and kill conditions are illustrative of
            the desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future
            tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                Take the trade the tape gives, not the one the chart
                implies.
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
            v2 · 2026-05-15 02:39Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
