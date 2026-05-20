import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// Internal-only route: not in public nav, not in sitemap, noindex/nofollow.
// Description deliberately anodyne — any future external share (Slack/email
// link preview) shows neutral text rather than dated trade specifics.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-05-20 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-05-20',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-05-20' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260520() {
  await requireViewer('/desk/2026-05-20');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · DESK NOTE · 2026-05-20 · v2</span>
          <span>internal · for discussion · partial audit (codex env-blocked)</span>
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
              <span className="dn-big">$76,682</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.1%</span>
            </div>
          </div>

          {/* DATA PROVENANCE BAND */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-05-20 02:34Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-20 02:34Z</td>
                  <td className="dn-flag">fresh · 1-min</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 02:31Z scan</td>
                  <td className="dn-flag">fresh · in-progress bar</td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 02:34Z snapshot</td>
                  <td className="dn-flag">fresh · Deribit idx $76,744 vs live $76,682</td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 02:01Z
                  </td>
                  <td className="dn-flag">~33-min lag · 1h bars · 22 assets</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-19 22:17Z render</td>
                  <td className="dn-flag">
                    ~4h render lag · FRED Tier-1 REFRESHED (no more stale-4d) ·
                    LOAD-BEARING today
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-05-20 00:06Z</td>
                  <td className="dn-flag">
                    ~2.5h stale · offsets recomputed vs live spot
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
              <span className="dn-v bear">+7.6%</span>
              <span className="dn-src">live · 02:34Z · 24h mean +5.5%</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+6.1% → +7.6%</span>
              <span className="dn-src">climbing · range +2.8/+7.6% (now at hi)</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−1.49% (−1,560 BTC)</span>
              <span className="dn-src">live · deleveraging continues</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">59.7 / 40.3</span>
              <span className="dn-src">live_db `mkt_long_pct` · series 54.8→56.4→58.1→59.7</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">+2.6k (net long)</span>
              <span className="dn-src">live · long 20.45k − short 17.84k</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 05-19 note</span>
              <span className="dn-v">+2.9k → +2.6k</span>
              <span className="dn-src">essentially unchanged · no regime flip</span>
            </div>
            <div>
              <span className="dn-k">IV / 30d RV</span>
              <span className="dn-v">43.4% / 25.4%</span>
              <span className="dn-src">GEX median IV · RV compressed 27→25.4</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−1.2%</span>
              <span className="dn-src">flip $75,731 vs spot · file +1.3% off idx</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              The 05-19 note flagged a rates spike on a stale-4d render as a{' '}
              <em>watch, not a lean</em>. The FRED Tier-1 series have now
              refreshed and the spike is real <span className="dn-em">—</span>{' '}
              <span className="dn-signal">
                US 10Y prints 4.61% fresh with episodic z = +2.67 (EXTREME
                RISK-OFF)
              </span>
              , TIPS real 2.13% episodic +3.38, MOVE bond vol 86.1 still
              elevated. The grow-trigger we wrote into the 05-19 tail (10Y
              &gt; 4.55% confirmed) has fired live. Day 3 of the coil holds
              its level but its lean has consolidated: funding climbed +50%
              over 24h, OI bled another 1.5k BTC, 4h big-print is{' '}
              <span className="dn-tag bear">−2,894 BTC</span> of futures
              distribution, retail crowded to 59.7% long, and macro is now
              the fourth side pressing — positioning + structure + dealer +
              macro all on the same side, smart money the only thing not yet
              flipped.
            </p>

            <p>
              BTC sits at <span className="dn-tag">$76,682</span>, day three
              of the coil (<span className="dn-tag">−0.1% 24h</span>),
              tightening to a <span className="dn-tag">$76.1k–$77.3k</span>{' '}
              24h range that compressed off the 05-19 $76.0k–$77.8k band.
              Spot has{' '}
              <span className="dn-signal">slipped just under the shelf</span>:{' '}
              <span className="dn-tag stale">D-EMA50 $76.7k (−0.03%)</span>{' '}
              and{' '}
              <span className="dn-tag stale">D-EMA100 $76.8k (−0.19%)</span> —
              both EMAs that price held above on 05-19 now sit a hair
              overhead, the first directional tell inside the coil. Above
              that, <span className="dn-tag stale">D-SMA150 $77.1k (−0.52%)</span>{' '}
              is the next reclaim line; below,{' '}
              <span className="dn-tag bull">D-SMA50 $76.0k (+0.93%)</span>{' '}
              then the relocated{' '}
              <span className="dn-tag bear">GEX-flip $75,731 (−1.2%)</span>{' '}
              into the <span className="dn-tag bear">$75k −24.5M GEX</span>{' '}
              pocket. The question is the same as 05-19{' '}
              <span className="dn-em">—</span>{' '}
              <span className="dn-signal">
                which way the coil resolves
              </span>{' '}
              — but the evidence stack has thickened on the down side.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape</span>
            </h2>

            <p>
              The only structural reason the directional short isn&rsquo;t
              already live: <span className="dn-signal">smart money has not
              flipped back to net short</span>. Top-trader net is{' '}
              <span className="dn-tag">+2.6k BTC</span> (long 20.45k − short
              17.84k), essentially unchanged from the +2.9k of the 05-19
              note. <span className="dn-em">
                The literal 24h-ago endpoint reads −1.3k (long 19.26k − short
                20.57k), so the &ldquo;24h-Δ SM&rdquo; alone looks like a
                +3.9k swing — but that 24h-ago timestamp caught an intraday
                short dip on 05-19 morning that fully recovered within hours.
                Day-over-day vs the 05-19 note snapshot, SM is flat. Read it
                as &ldquo;held the small net long, no regime change&rdquo;,
                not as a fresh long-side conviction add.
              </span>{' '}
              Retail, meanwhile, pushed to{' '}
              <span className="dn-tag bear">59.7% long</span> — the fourth
              consecutive session of more crowded retail longs (54.8 → 56.4 →
              58.1 → 59.7).
            </p>

            <p>
              Everything else on the tape leans down. Funding is at the upper
              end of its 24h range: live{' '}
              <span className="dn-tag bear">+7.6% ann</span> (24h mean +5.5%,
              range +2.8% to +7.6% — <em>now</em> = max), up{' '}
              <span className="dn-tag bear">+50% from the 05-19 +5.1%</span> —
              crowded longs are paying meaningfully more carry per day for a
              position that has gone nowhere in three sessions. OI fell{' '}
              <span className="dn-tag bear">−1.49% (−1,560 BTC)</span> over
              24h <span className="dn-em">— continued deleveraging on flat
              price; some longs are giving up while others pay rising
              funding to stay</span>. Perp persists at a{' '}
              <span className="dn-tag bear">−$72 discount</span> to spot —
              same magnitude as 05-19, a steady spot-strength / perp-weakness
              signature.
            </p>

            <p>
              The windowed flow is where the day&rsquo;s real news is. 4h
              price <span className="dn-tag">−0.12%</span> (flat), OI{' '}
              <span className="dn-tag bear">−856 BTC</span> (longs closing),
              spot CVD <span className="dn-tag">Δ −192</span> (quiet), but
              futures CVD{' '}
              <span className="dn-tag bear">Δ −2,806</span> and big-print net{' '}
              <span className="dn-tag bear">−2,894 BTC over 116 prints</span>{' '}
              <span className="dn-em">— heavy futures-side distribution on
              flat price</span>. 1h was similar: futures CVD{' '}
              <span className="dn-tag bear">Δ −1,633</span>, big-print{' '}
              <span className="dn-tag bear">−1,604 / 35 prints</span>.
              Session-cum perp CVD is{' '}
              <span className="dn-tag bear">−3,742 BTC</span> with cb_cvd ≈
              flat. <span className="dn-em">
                The character of the selling has shifted from the spot-led
                distribution of 05-18 to perp-led distribution today — a
                different cohort of leveraged sellers is now active, and
                they&rsquo;re leaning into the coil.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · stale-flagged</span>
            </h2>

            <p>
              Structure shifted a notch down without breaking. 12h{' '}
              <span className="dn-signal">just slipped below cloud</span>{' '}
              (&ldquo;刚穿&rdquo; → 76.6k overhead) — one more frame turning
              bearish; 1d is one bar from{' '}
              <span className="dn-tag bull">TD9 BUY (Buy 8→9?)</span>, a
              counter-trend reversal-hint about to print on the daily that
              argues against piling in short into the washout. RSIs hold
              mid-30s/40s on 4h/8h/12h, mid-40s on the engine intraday — no
              capitulation, no thrust. Multiple sub-water golden crosses
              (1h/4h/1w) are early-bullish flickers; multiple BULL regular
              divergences (1h/4h) carry the basing thesis at the same time
              the slow frames flag deeper-trend down (1d BEAR reg, 12h TD9
              BUY active). <span className="dn-em">
                Same picture as 05-19, with two specific shifts: 12h has
                fallen out of cloud, and the 1d TD9 BUY is now one bar away
                — the daily would call &ldquo;exhaustion&rdquo; on the next
                close. Treat both as provisional until they close.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">76,619</td><td className="num">44.9</td><td className="bear">death (water-dn) 0b</td><td className="bear">below ↑76.7k (just crossed)</td><td>Sell 2</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">76,620</td><td className="num">45.7</td><td className="bear">death (water-dn) 5b</td><td className="bear">below ↑76.8k</td><td>Buy 1</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">76,633</td><td className="num">45.2</td><td className="bull">golden (water-dn) 9b</td><td className="bear">below ↑76.9k</td><td>Buy 3</td><td className="bull">BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">76,633</td><td className="num">38.2</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑80.3k</td><td>Buy 2</td><td className="bull">BULL reg</td></tr>
                <tr><td>8h</td><td className="num">76,619</td><td className="num">36.1</td><td className="neut">—</td><td className="bear">below ↑78.8k</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">76,619</td><td className="num">35.8</td><td className="bear">death (water-up) 18b</td><td className="bear">below ↑76.6k (just crossed)</td><td className="hot">⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">76,619</td><td className="num">43.9</td><td className="bear">death (water-up) 8b</td><td className="bull">above ↓74.5k</td><td className="hot">Buy 8→9?</td><td>BEAR reg</td></tr>
                <tr><td>3d</td><td className="num">76,619</td><td className="num">50.6</td><td className="neut">—</td><td className="neut">in cloud 73.5–93.0k</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">76,619</td><td className="num">45.5</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑100.3k</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">76,619</td><td className="num">48.8</td><td className="neut">—</td><td className="bull">above ↓46.9k</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Shifts vs 05-19: 12h fell out of cloud; 1d TD9 BUY one
                    bar away. 1d still above cloud (↓74.5k, was ↓74.3k);
                    mid-cycle intact but slipping. Multiple TD9 BUYs
                    accumulating across days (8h carryover, 12h active,
                    1d incoming) = counter-trend pressure building, treat
                    provisional until the closes confirm.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix dates the directional tell precisely. Spot has{' '}
              <span className="dn-signal">slipped just under the cycle-EMA
              shelf</span>:{' '}
              <span className="dn-tag stale">D-EMA50 $76.7k (−0.03%)</span> —
              flipped from +0.14% on 05-19 to −0.03% today (price went
              through it by ~$20); and{' '}
              <span className="dn-tag stale">D-EMA100 $76.8k (−0.19%)</span> —
              from −0.02% to −0.19% (now ~$148 below, vs $15 yesterday). The
              shelf has not been{' '}
              <span className="dn-em">decisively</span> broken — these are
              fractional offsets and could reclaim on any 4h close — but the
              bias inside the coil has tipped down. Lost above:{' '}
              <span className="dn-tag bear">D-SMA20 $79.4k (−3.42%)</span>,{' '}
              <span className="dn-tag bear">D-EMA20 $78.4k (−2.18%)</span>;{' '}
              <span className="dn-tag stale">D-SMA150 $77.1k (−0.52%)</span>{' '}
              is the first reclaim test overhead. SMA cycle ladder still
              positive but eroding:{' '}
              <span className="dn-tag bull">D-SMA50 $76.0k (+0.93%)</span> —
              the cushion just under spot — and{' '}
              <span className="dn-tag bull">D-SMA100 $72.3k (+6.03%)</span> as
              the cycle anchor proper. Far resistance{' '}
              <span className="dn-tag stale">
                D-SMA200/EMA200 $81.1–81.7k (−5.4% to −6.1%)
              </span>
              . Weekly: above{' '}
              <span className="dn-tag bull">W-SMA20 $75.0k (+2.24%)</span>,
              below W-EMA20 $78.1k / W-EMA50 $85.2k / W-SMA50 $94.0k.{' '}
              <span className="dn-em">
                All MA levels anchored to parquet last bar 2026-05-20 00:06Z
                (close $76,729); offsets recomputed vs live spot $76,682.
                Displayed MA levels are $-rounded; offsets are computed from
                the exact series values.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · GEX + IV</span>
            </h2>

            <p>
              Dealer gamma <span className="dn-signal">collapsed back toward
              the 05-18 vol-amplifying regime</span>. Aggregate GEX is{' '}
              <span className="dn-tag">+37.4M/1%</span> — down from
              05-19&rsquo;s +65.7M and barely above 05-18&rsquo;s +15.9M; the
              cushion that built mid-coil has eroded. The 0-gamma flip
              relocated up to <span className="dn-tag bear">$75,731</span>;
              live spot $76,682 sits <span className="dn-tag bear">~1.2%
              above it</span> (the GEX file&rsquo;s &ldquo;+1.3% dist to
              flip&rdquo; is off its 02:34Z Deribit-index $76,744 — both
              consistent: spot ~+1.2–1.3% above flip, thinner than the
              ~+1.9% cushion of 05-19, closer to the +0.9% fragility of
              05-18). A new negative shelf has built at spot:{' '}
              <span className="dn-tag bear">$76k −10.6M</span> (was not in
              top-10 on 05-19), with the heavy{' '}
              <span className="dn-tag bear">$75k −24.5M</span> pocket and{' '}
              <span className="dn-tag bear">$74k −13.5M</span> below, under a
              positive ceiling (<span className="dn-tag bull">$80k +38M</span>,{' '}
              <span className="dn-tag bull">$82k +21.7M</span>,{' '}
              <span className="dn-tag bull">$81k +7.9M</span>).{' '}
              <span className="dn-em">
                22MAY 2DTE prints −15.7M (sizable front-negative back on
                the board), and 0DTE 20MAY −3.6M. The front is short gamma
                again — moves into mid-week amplify.
              </span>
            </p>

            <p>
              Read straight: the dealer map de-escalation that argued
              &ldquo;coil with cushion&rdquo; on 05-19 has half-reversed.
              Cushion +1.2%, negative shelf at spot, front short gamma — not
              as fragile as 05-18 but no longer the dampening setup it was
              yesterday. <span className="dn-signal">A break of $75.7k flip
              re-engages the −24.5M @75k accelerant with less dealer
              resistance than 05-19 implied</span>. IV median 828/878
              instruments{' '}
              <span className="dn-tag">43.4%</span> vs 30D close-to-close RV{' '}
              <span className="dn-tag">25.4%</span> (compressed further from
              27.0%) — chain-level richness widened to{' '}
              <span className="dn-tag">~+18pt</span>,{' '}
              <span className="dn-em">not</span> a spread we sell into a
              re-shorted front. Strike/expiry IV, vega, skew not loaded; vol
              read framework-only.
            </p>

            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · refreshed · load-bearing</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 05-19 macro tail watch has fired live.
              </span>{' '}
              The FRED Tier-1 series have refreshed (no more stale-4d flags
              on the daily rows; render is ~4h old, the values are not).
              US 10Y now prints{' '}
              <span className="dn-tag bear">4.61% (+2bp, regime +2.59,
              episodic +2.67) → EXTREME RISK-OFF</span>; 10Y TIPS real{' '}
              <span className="dn-tag bear">2.13% (+3bp, episodic +3.38) →
              RISK-OFF</span>; MOVE bond vol{' '}
              <span className="dn-tag">86.1 (episodic +2.77)</span> still
              elevated. The 05-19 grow-trigger we wrote into the macro tail
              (&ldquo;fresh 10Y &gt; 4.55% confirmed&rdquo;) is now satisfied
              — the tail moves from structural insurance with a stale-data
              caveat to a structural-plus-macro-confirmed hedge.{' '}
              <span className="dn-em">
                The remaining lone holdout: HY OAS prints 2.83% (+3bp from
                05-19&rsquo;s 2.80%, regime −0.67, episodic −0.20) — still
                tagged &ldquo;loose&rdquo;, but starting to widen. Credit is
                the last thing standing between rates-driven risk-off and
                cascade; today shows the first three basis points of HY
                widening. The 3.0–3.2% close trigger is now meaningfully
                closer than the 05-19 read of &ldquo;not corroborating&rdquo;
                suggested.
              </span>
            </p>

            <p>
              Cross-asset confirms idiosyncratic BTC weakness. Correlation
              regime NORMAL, mean |r| <span className="dn-tag">0.339</span>{' '}
              (essentially flat vs 05-19&rsquo;s 0.331); BTC ties NVDA{' '}
              <span className="dn-tag">+0.60</span>, NQ{' '}
              <span className="dn-tag">+0.58</span>, SP500{' '}
              <span className="dn-tag">+0.52</span>. Over 7d BTC printed{' '}
              <span className="dn-tag bear">−5.21%</span> against NQ{' '}
              <span className="dn-tag">−0.81%</span> — BTC remains the lone
              high-β downside underperformer in a TradFi peer set that is
              flat-to-down only mildly. JGB monthly 2.52% (EXTREME RISK-OFF
              monthly tag — do not lean). USD/JPY 158.93 (regime +1.20),
              DXY 99.05 (episodic +1.53 tight). Net liquidity unchanged
              $5.886T (loose, episodic +2.47){' '}
              <span className="dn-em">— the standoff between tightening
              real rates and loose net-liq has tipped today toward
              tightening</span>.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · sized to what we can prove</span>
            </h2>

            <div className="dn-trade">
              <span className="dn-side framework">stand-aside · primary</span>
              <div className="dn-trade-name">
                Flat into the coil — conviction up, no edge in-range
              </div>
              <div className="dn-thesis">
                The 05-19 stance carries: flat until the coil resolves on a
                close. What has changed is conviction in the down-resolve —
                macro fresh and bearish, funding +50%, OI bleed, heavy 4h
                futures distribution, dealer cushion thinning back, retail
                near 60% long, 12h out of cloud. The only structural reason
                NOT to lean short pre-emptively is SM hasn&rsquo;t flipped
                back to net short. Once it does — or once the close prints
                — the lean has the rest of the table.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">stance</span><span className="dn-lvl-v">flat directional · no in-range risk</span></div>
                <div><span className="dn-lvl-k">coil band</span><span className="dn-lvl-v">$75.7k (flip) ↔ $77.1k (D-SMA150)</span></div>
                <div><span className="dn-lvl-k">down resolve</span><span className="dn-lvl-v bear">1h close &lt; $75,700</span></div>
                <div><span className="dn-lvl-k">up resolve</span><span className="dn-lvl-v bull">1h close &gt; $77,100 + SM still net long</span></div>
              </div>
              <div className="dn-gating">
                <b>Why still do-nothing in-range:</b> dealer cushion is
                thinned but still positive (+37M), and short-end TD9 BUYs
                (8h carry, 12h active, 1d incoming) argue against chasing
                shorts into compression. The break itself is the entry. The
                evidence stack rewards patience, not pre-positioning.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · primary trigger</span>
              <div className="dn-trade-name">
                Coil-break short — flip + D-SMA50 / now macro-confirmed
              </div>
              <div className="dn-thesis">
                Same trigger geometry as 05-19, with the difference that the
                macro side now confirms. A 1h close below $75,700 takes flip
                + D-SMA50 in one move, engages the −24.5M @75k pocket where
                dealers turn short gamma, and rides into a freshly-bearish
                rates tape. Conviction is materially higher than 05-19 at
                the same level.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">trigger</span><span className="dn-lvl-v bear">1h close &lt; $75,700 (flip + D-SMA50)</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bull">1h close &gt; $76,900 (back on shelf)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$75,000 / $74,000 / $72.3k D-SMA100 watch</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.6R on trigger (up 0.1R vs 05-19); +0.4R below $74k; ≤ 1.0R</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> trigger $75,700, stop $76,900 = ~$1,200 risk;
                $75,000 = ~$700, $74,000 = ~$1,700 ≈ 0.6–1.4:1 to first
                targets — modest, which is why size stays capped and the
                stretch is the $72.3k extension if the cycle ladder cracks.
                Macro confirmation justifies the +0.1R bump from 05-19.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · conditional · small</span>
              <div className="dn-trade-name">
                Reclaim long — only on D-SMA150 with SM AND a macro pause
              </div>
              <div className="dn-thesis">
                The reclaim long is harder to take with macro fresh and
                bearish. It still exists, but it needs both the price
                reclaim AND a sign that macro pauses (e.g., HY OAS stops
                widening or 10Y reverses). Without that, this becomes a
                fade-the-bounce setup, not a directional long.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">trigger</span><span className="dn-lvl-v bull">1h close &gt; $77,100 + SM net &gt; 0 + macro pause</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1h close &lt; $76,400</span></div>
                <div><span className="dn-lvl-k">target</span><span className="dn-lvl-v">$78,100 (W-EMA20) / $78,400 (D-EMA20)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R (down from 0.3R on 05-19) · half off $78,100</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> trigger $77,100, stop $76,400 = ~$700 risk,
                target $78,100–78,400 = ~$1,000–1,300 ≈ 1.4–1.9:1.{' '}
                <b>Gating:</b> mutually exclusive with coil-break short;
                requires SM net positive AND a fresh macro pause signal —
                if either fails, skip; treat any bounce without those as
                fade-able into the lost shelf.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · live hedge</span>
              <div className="dn-trade-name">
                Downside put-spread — grow-trigger fired
              </div>
              <div className="dn-thesis">
                The 05-19 grow-trigger (&ldquo;fresh 10Y &gt; 4.55%
                confirmed&rdquo;) has fired: 10Y 4.61% fresh, EXTREME
                RISK-OFF. This moves the macro tail from structural
                insurance to a confirmed live hedge. The HY OAS leg of the
                trigger is still pending (2.83%, +3bp, but still &ldquo;loose&rdquo;);
                once HY closes above ~3.0%, this is no longer a tail — it
                is a primary position.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">structure</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">expiry</span><span className="dn-lvl-v">29-MAY-26 (9d) — positive-GEX expiry</span></div>
                <div><span className="dn-lvl-k">grow-trigger (fired)</span><span className="dn-lvl-v bear">10Y &gt; 4.55% fresh ✓ (4.61% confirmed)</span></div>
                <div><span className="dn-lvl-k">size (indicative)</span><span className="dn-lvl-v">0.25R · grown from 0.15R (+67%) · final pending chain</span></div>
                <div><span className="dn-lvl-k">next gate</span><span className="dn-lvl-v bear">HY OAS &gt; 3.0% close → escalate to primary</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> Strike/premium/Greeks not loaded — structure
                illustrative, sizing pending a Deribit 29-MAY chain pull.
                The 0.15R → 0.25R bump reflects fired macro trigger; the
                HY-OAS escalation gate is the next threshold to watch.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the coil resolves</span>
            </h2>

            <p>
              All four pressure sides (positioning · structure · dealer
              · macro) lean down; only SM hasn&rsquo;t crossed. The level is
              the same; the conviction is higher:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Coil breaks down (lean, now macro-confirmed)</td><td className="bear">1h close &lt; $75,700</td><td>coil-break short 0.6R, add sub-$74k</td></tr>
                <tr><td>Coil breaks up + SM long + macro pause</td><td className="bull">1h close &gt; $77,100, SM &gt; 0, HY/10Y reverse</td><td>reclaim long 0.2R, half off $78.1k</td></tr>
                <tr><td>SM flips back net short (no break needed)</td><td className="bear">SM net BTC &lt; 0 sustained &gt; 2h</td><td>open 0.3R short · stop 1h close &gt; $77,100 · target $75,000</td></tr>
                <tr><td>Credit cracks (tail → primary)</td><td className="bear">HY OAS &gt; 3.0% close</td><td>escalate tail to primary, ignore in-range price</td></tr>
                <tr><td>Mid-cycle breaks (escalation)</td><td className="bear">1d close below cloud $74.5k</td><td>hold runner, drop longs, max tail</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes this note is{' '}
              <span className="dn-signal">
                smart money flipping back net short
              </span>{' '}
              with price still pinned to the shelf — that aligns all four
              sides without requiring the $75.7k break and pulls the short
              entry up by ~$1k. The reverse: SM staying long while the
              macro tape eases would re-open the reclaim long. Until then,
              the book is short-biased and flat in-range, with the macro
              tail now live and growing on HY confirmation.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (partial · codex env-blocked 2026-05-20)
            </span>
            <b>Partial audit only — not the standard cross-model gate.</b>{' '}
            The codex CLI 0.125.0 attempt entered an interactive stdin
            (non-TTY environment), exited 144, and produced no findings;
            this is an environmental issue, not a model issue. A
            single-model self-review (claude-sonnet-4-6, against the
            standard hostile attack list) was run as fallback and caught
            3 items, all applied EN+ZH: (a) <b>MED</b> &mdash; trade-book
            macro tail stated &ldquo;doubled from 0.15R&rdquo; for a
            0.15→0.25R move (+67%, not a true doubling); corrected to
            &ldquo;grown from 0.15R (+67%)&rdquo;. (b) <b>MED</b> &mdash;
            §VI intro contradicted the lead by saying &ldquo;three of
            four&rdquo; pressure sides lean down when the lead said all
            four (the day&rsquo;s thesis: macro joined); corrected to
            &ldquo;all four&rdquo;. (c) <b>LOW</b> &mdash; §VI &ldquo;SM
            preempt-short&rdquo; condition was missing explicit stop/target;
            added (stop 1h close &gt; $77,100, target $75,000). Audit-cleared
            (single-model only, NOT cross-model): funding × 1095, SM
            arithmetic & day-over-day-vs-24h-Δ reconciliation, GEX flip
            dual-reference, MA offsets, macro stale→load-bearing flip,
            §VI/trade-book consistency, EN/ZH parity, requireViewer gating,
            build. <b>Known gap:</b> the desk-note convention requires a
            cross-model audit; today&rsquo;s ship is single-model. To upgrade
            to a true v2 once codex CLI stdin/TTY is unblocked, re-run the
            same prompt and reconcile any additional findings. Source audit
            record: audits/2026-05-20-desk-note.md.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>
            , and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-05-20 02:34Z)
            with section-level provenance disclosed in the manifest band
            above; macro is fresh today and load-bearing (with render-lag
            caveat). Levels, sizes, and conditions are illustrative of the
            desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future
            tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                Three sides press and one side holds — the trade is what the
                last side does, not what the first three already did.
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
            v2 · 2026-05-20 02:34Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
