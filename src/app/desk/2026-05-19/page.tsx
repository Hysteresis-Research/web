import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// Internal-only route: not in public nav, not in sitemap, noindex/nofollow.
// Description deliberately anodyne — any future external share (Slack/email
// link preview) shows neutral text rather than dated trade specifics.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-05-19 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-05-19',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-05-19' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260519() {
  await requireViewer('/desk/2026-05-19');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · DESK NOTE · 2026-05-19 · v2</span>
          <span>internal · for discussion · post-hostile-audit · late snapshot</span>
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
              <span className="dn-big">$76,823</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.2%</span>
            </div>
          </div>

          {/* DATA PROVENANCE BAND */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · snapshot 2026-05-19 09:58Z (late — routine
              not auto-running; produced on demand)
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-19 09:58Z</td>
                  <td className="dn-flag">fresh · 1-min</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 09:46Z scan</td>
                  <td className="dn-flag">fresh · in-progress bar</td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 09:01Z
                  </td>
                  <td className="dn-flag">~57-min lag · 1h bars · 22 assets</td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 08:00Z snapshot</td>
                  <td className="dn-flag">
                    ~2h lag · Deribit idx $77,334 vs live $76,823
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 01:50Z render</td>
                  <td className="dn-flag">
                    ~8h-old render · FRED series stale 4d · do NOT lean
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-05-19 08:05Z</td>
                  <td className="dn-flag">
                    ~1.9h stale · offsets recomputed vs live spot
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
              <span className="dn-v bear">+5.1%</span>
              <span className="dn-src">live · 09:58Z · 24h mean +6.8%</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+6.7% → +5.1%</span>
              <span className="dn-src">positive · longs pay · range +3.2/+11%</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+2.17% (+2,224 BTC)</span>
              <span className="dn-src">live · build on flat price</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">58.1 / 41.9</span>
              <span className="dn-src">live_db `mkt_long_pct`</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">+2.9k (net long)</span>
              <span className="dn-src">live · long 20.57k − short 17.71k</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 05-18 note</span>
              <span className="dn-v">−2.5k → +2.9k</span>
              <span className="dn-src">net short covered → small net long</span>
            </div>
            <div>
              <span className="dn-k">IV / 30d RV</span>
              <span className="dn-v">43.5% / 27.0%</span>
              <span className="dn-src">GEX median IV · 828 inst.</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v">−1.9%</span>
              <span className="dn-src">flip $75,329 vs spot · file +2.7% off idx</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              The 05-18 note set one switch: a 1h close through $76,000 turns
              the flip-break short directional. It never printed — the 24h low
              was $76,014. Worse for that thesis, its strongest leg has
              unwound <span className="dn-em">—</span>{' '}
              <span className="dn-signal">
                smart money has covered from net short back to a small net
                long
              </span>
              , dealers have rebuilt long gamma, and the flip has dropped
              away. The directional short did not confirm. What is left is a
              tightening 48-hour coil welded to the cycle anchor — lower
              conviction, the same bearish undertone.
            </p>

            <p>
              BTC is <span className="dn-tag">$76,823</span>, flat on the day
              (<span className="dn-tag">−0.2% 24h</span>) inside a compressing{' '}
              <span className="dn-tag">$76.0k–$77.8k</span> range — the second
              consecutive session pinned to the{' '}
              <span className="dn-tag stale">D-EMA100 $76.8k (−0.02%)</span>{' '}
              /{' '}
              <span className="dn-tag stale">D-EMA50 $76.7k (+0.14%)</span>{' '}
              shelf, price within ~$15 of the 100-day EMA for 48h running.
              The 05-18 decision support{' '}
              <span className="dn-tag stale">D-SMA150 $77.2k (−0.44%)</span>{' '}
              has flipped from floor to near-ceiling overhead; below sits{' '}
              <span className="dn-tag bull">D-SMA50 $75.8k (+1.33%)</span> then
              the relocated{' '}
              <span className="dn-tag bear">GEX-flip $75,329 (−1.9%)</span>{' '}
              into the <span className="dn-tag bear">$75k −23M GEX</span>{' '}
              pocket. The question is no longer &ldquo;does the shelf
              hold&rdquo; — it has held two days{' '}
              <span className="dn-em">—</span> it is{' '}
              <span className="dn-signal">
                which way the coil resolves, with the acute downside catalyst
                gone but the structural weight still down
              </span>
              .
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape</span>
            </h2>

            <p>
              The 05-18 thesis rested on smart money being net short. That has
              reversed: <span className="dn-signal">top-trader net is back to{' '}
              <span className="dn-tag">+2.9k BTC</span></span> (long 20.57k −
              short 17.71k) versus the −2.5k net short reported in the 05-18
              note — they covered the short and re-established a small net
              long. It is not the +16.1k conviction of 05-17; it is a flat-ish
              straddle of the shelf. <span className="dn-em">
                Removing &ldquo;smart money short&rdquo; removes the strongest
                bear confirmation 05-18 had — the directional short is
                stood down, not merely untriggered.
              </span>{' '}
              Retail, meanwhile, pushed <span className="dn-tag bear">more
              long, 58.1%</span> (54.8 → 56.4 → 58.1 over three sessions) into
              a market that has gone nowhere — a steadily more crowded long.
            </p>

            <p>
              The undertone stays bearish on flow, not on direction. Funding is
              firmly positive again: live{' '}
              <span className="dn-tag bear">+5.1% ann</span>, 24h mean{' '}
              <span className="dn-tag bear">+6.8%</span> (range +3.2% to
              +11.0%) — longs are paying carry to hold a position that has not
              moved. OI built{' '}
              <span className="dn-tag bear">+2.17% (+2,224 BTC)</span> over 24h
              on a flat tape <span className="dn-em">— leverage accumulating
              into a capped level, the classic trapped-long fuel if the shelf
              gives</span>. Perp sits at a wide{' '}
              <span className="dn-tag bear">−$72 discount</span> to spot
              (spot-led, perp heavy). Session spot CVD is persistently
              negative (4h <span className="dn-tag bear">Δ −792</span>, 1h{' '}
              <span className="dn-tag bear">Δ −413</span>, big-print 4h{' '}
              <span className="dn-tag bear">−174 / 160 prints</span>) while
              price holds flat — quiet spot distribution absorbed by the bid.{' '}
              <span className="dn-em">
                Crowded longs paying funding, OI building, spot bleeding,
                price welded to the anchor: a compression with a downward
                lean, not a bottom.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · stale-flagged</span>
            </h2>

            <p>
              The washout has <span className="dn-signal">relieved, not
              reversed</span>. The sub-25 RSIs of 05-18 have recovered to the
              mid-30s/40s (1h <span className="dn-tag">45.5</span>, 4h{' '}
              <span className="dn-tag">37.6</span>, 8h{' '}
              <span className="dn-tag">35.5</span>) — oversold pressure bled
              off through time, not a rally. 1h and 4h printed sub-water
              golden crosses (early, DIF still deeply negative); 8h still
              carries <span className="dn-tag">⚡TD9 BUY</span>, 15m and 12h
              are one bar from TD9. Price is in-cloud on 15m (76.7–76.8k) and
              12h (76.6–79.6k), below cloud 30m/1h/4h/8h/1w, and 1d still
              holds above cloud (↓74.3k). <span className="dn-em">
                Every frame says the same thing: balance. No washout to fade
                long, no trend thrust to chase — a coil, with the 1d cloud at
                $74.3k the line that says mid-cycle is still intact.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">76,750</td><td className="num">41.3</td><td className="bear">death (water-up) 3b</td><td className="neut">in cloud 76.7–76.8k</td><td>Buy 8→9?</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">76,750</td><td className="num">45.8</td><td className="bear">death (water-up) 0b</td><td className="bear">below ↑76.8k</td><td>Buy 2</td><td className="bull">BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">76,750</td><td className="num">45.5</td><td className="bull">golden (water-dn) 14b</td><td className="bear">below ↑77.4k</td><td>Buy 1</td><td className="bull">BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">76,750</td><td className="num">37.6</td><td className="bull">golden (water-dn) 1b</td><td className="bear">below ↑80.5k</td><td>Buy 1</td><td className="bull">BULL reg</td></tr>
                <tr><td>8h</td><td className="num">76,750</td><td className="num">35.5</td><td className="neut">—</td><td className="bear">below ↑78.8k</td><td className="hot">⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">76,750</td><td className="num">36.0</td><td className="bear">death (water-up) 16b</td><td className="neut">in cloud 76.6–79.6k</td><td>Buy 8→9?</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">76,750</td><td className="num">44.4</td><td className="bear">death (water-up) 7b</td><td className="bull">above ↓74.3k</td><td>Buy 7</td><td>BEAR reg</td></tr>
                <tr><td>3d</td><td className="num">76,750</td><td className="num">50.8</td><td className="neut">—</td><td className="neut">in cloud 73.6–93.0k</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">76,750</td><td className="num">45.6</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑100.3k</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">76,750</td><td className="num">48.9</td><td className="neut">—</td><td className="bull">above ↓46.9k</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    RSI relieved off 05-18 washout (was sub-25, now 35–46);
                    1h/4h water-line golden crosses + 8h TD9 BUY = basing
                    attempt, provisional. 1d still above cloud (↓74.3k) —
                    mid-cycle intact.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is near-identical to 05-18 — the defining fact is
              its <span className="dn-signal">stasis</span>. Spot is again
              within ~$15 of{' '}
              <span className="dn-tag stale">D-EMA100 $76.8k (−0.02%)</span>{' '}
              and on{' '}
              <span className="dn-tag stale">D-EMA50 $76.7k (+0.14%)</span> —
              two full sessions welded to the cycle-EMA shelf. Lost above:{' '}
              <span className="dn-tag bear">D-SMA20 $79.4k (−3.24%)</span>,{' '}
              <span className="dn-tag bear">D-EMA20 $78.6k (−2.26%)</span>;{' '}
              <span className="dn-tag stale">D-SMA150 $77.2k (−0.44%)</span>{' '}
              now sits just overhead as the first reclaim test. SMA cycle
              ladder still positive but flat-lining:{' '}
              <span className="dn-tag bull">D-SMA50 $75.8k (+1.33%)</span>,{' '}
              <span className="dn-tag bull">D-SMA100 $72.3k (+6.32%)</span>;
              far resistance{' '}
              <span className="dn-tag stale">
                D-SMA200/EMA200 $81.3–81.7k (−5.5% to −6.0%)
              </span>
              . Weekly unchanged: above{' '}
              <span className="dn-tag bull">W-SMA20 $75.0k (+2.40%)</span>,
              below W-EMA20 $78.2k / W-EMA50 $85.2k / W-SMA50 $94.0k.{' '}
              <span className="dn-em">
                All MA levels anchored to parquet last bar 2026-05-19 08:05Z
                (close $77,130); offsets recomputed vs live spot $76,823.
                Displayed MA levels are $-rounded; offsets are computed from
                the exact series values.
              </span>{' '}
              Two days of zero net structural change is itself the signal: a
              coil tightening on the anchor. NTT pivots not loaded — cloud +
              MA only, no independent NTT confirmation claimed.
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · GEX + IV</span>
            </h2>

            <p>
              The dealer map has <span className="dn-signal">de-escalated
              from 05-18</span>. Aggregate GEX rebuilt to{' '}
              <span className="dn-tag">+65.7M/1%</span> — up from 05-18&rsquo;s
              +15.9M and the highest since the 05-15 +204M decay began;
              dealers are back to a dampening posture. The 0-gamma flip
              dropped to <span className="dn-tag bear">$75,329</span>; live
              spot $76,823 sits <span className="dn-tag">~1.9% above it</span>{' '}
              (the GEX file&rsquo;s &ldquo;+2.7% dist to flip&rdquo; is off
              its 08:00Z Deribit-index $77,334 — both say spot is ~2% above
              flip, a wider cushion than 05-18&rsquo;s ~0.9%). The negative
              shelf at spot has thinned (76k now{' '}
              <span className="dn-tag bear">−6.8M</span> vs 05-18&rsquo;s −10M
              area); the heavy pocket is still{' '}
              <span className="dn-tag bear">$75k −23.2M</span> then{' '}
              <span className="dn-tag bear">$74k −11.6M</span>, under a
              positive ceiling (<span className="dn-tag bull">$80k +42M</span>,{' '}
              <span className="dn-tag bull">$82k +24.8M</span>,{' '}
              <span className="dn-tag bull">$81k +9.5M</span>).{' '}
              <span className="dn-em">
                The front is no longer short gamma — 20/21MAY ≈ flat-positive,
                only 22MAY −7.9M, 29MAY +22M; dealers no longer amplify
                near-term moves the way they did 05-18.
              </span>
            </p>

            <p>
              Read straight: the auto-accelerant is gone above the flip.
              Downside is no longer dealer-amplified until $75.3k breaks; a
              clean break now needs its own force, and the −23M @75k only
              engages below the flip. This <span className="dn-signal">eases
              the acute risk and supports the coil read</span> — vol gets
              dampened in-range, not amplified. IV median across 828
              instruments is <span className="dn-tag">43.5%</span>
              (chain-median summary, not a tradable expiry) vs 30D
              close-to-close RV <span className="dn-tag">27.0%</span>, which
              has compressed (28.6 → 27.0) with the range — a ~+16pt
              chain-level richness, <span className="dn-em">not</span> a spread
              we size from a median. Strike/expiry IV, vega, skew not loaded;
              vol read framework-only.
            </p>

            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · stale · do not lean</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro render is ~8h old and the FRED Tier-1 series are
                stale 4 days (NFCI 11d); it is not load-bearing today.
              </span>{' '}
              One thing is worth flagging as a{' '}
              <span className="dn-em">watch, not a lean</span>: the stale
              panel now prints a rates escalation — US 10Y{' '}
              <span className="dn-tag stale">4.59% (+12bp, episodic +2.94,
              EXTREME RISK-OFF)</span>, 10Y TIPS real{' '}
              <span className="dn-tag stale">2.10% (+10bp, episodic +3.73)</span>
              , MOVE bond vol{' '}
              <span className="dn-tag stale">86.1 (+6.2, episodic +2.77)</span>
              . If that print refreshes and holds fresh, it is a real
              risk-off escalation for a high-β BTC. But it is stale-4d on a
              ~8h-old render — we do not act on it; we mark it as the single
              macro item to re-check the moment fresh credit/rates data lands.
              HY OAS <span className="dn-tag stale">2.80% (loose, −0.87
              regime)</span> still does not corroborate stress; JGB{' '}
              <span className="dn-tag stale">2.52% (monthly · do not
              lean)</span>. <span className="dn-em">
                Today&rsquo;s read rests on positioning + structure + dealer
                map alone; macro is a flagged watch.
              </span>{' '}
              Correlation regime is NORMAL and tightening hard (7d 1h mean |r|
              0.331, up 0.275 → 0.281 → 0.331 over the series): BTC ties NVDA{' '}
              <span className="dn-tag">+0.59</span>, NQ{' '}
              <span className="dn-tag">+0.58</span>, SP500{' '}
              <span className="dn-tag">+0.53</span>. Over 7d BTC printed{' '}
              <span className="dn-tag bear">−4.70%</span> against SP500{' '}
              <span className="dn-tag">−0.01%</span>, NQ{' '}
              <span className="dn-tag">−0.70%</span>, NVDA{' '}
              <span className="dn-tag bull">+1.37%</span>, MSFT{' '}
              <span className="dn-tag bull">+3.61%</span>{' '}
              <span className="dn-em">
                — BTC remains the lone high-β downside underperformer of a
                TradFi peer set that is flat-to-up; this is idiosyncratic BTC
                weakness, not a market-wide risk-off.
              </span>
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · sized to what we can prove</span>
            </h2>

            <div className="dn-trade">
              <span className="dn-side framework">stand-aside · primary</span>
              <div className="dn-trade-name">
                Flat into the coil — 05-18 short stood down, no edge in-range
              </div>
              <div className="dn-thesis">
                The 05-18 flip-break short never triggered ($76,014 low, no 1h
                close &lt; $76k) and its core premise unwound (SM covered to
                net long, dealers rebuilt gamma, flip dropped away). There is
                no directional edge inside a tightening coil with dealers
                dampening in-range. Primary stance is flat, waiting for the
                coil to resolve on a close. The lean, expressed only on a
                trigger below, stays down on the weight of evidence
                (idiosyncratic −4.7% underperformance, retail 58% long, OI
                build + funding bleed, spot distribution).
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">stance</span><span className="dn-lvl-v">flat directional · no in-range risk</span></div>
                <div><span className="dn-lvl-k">coil band</span><span className="dn-lvl-v">$75.3k (flip) ↔ $77.2k (D-SMA150)</span></div>
                <div><span className="dn-lvl-k">down resolve</span><span className="dn-lvl-v bear">1h close &lt; $75,300</span></div>
                <div><span className="dn-lvl-k">up resolve</span><span className="dn-lvl-v bull">1h close &gt; $77,200 + SM still net long</span></div>
              </div>
              <div className="dn-gating">
                <b>Why do-nothing is primary:</b> both real trades below are
                conditional on the coil breaking. Pre-positioning inside a
                dealer-dampened range against a 48h-flat tape is paying theta
                for a coin-flip. The compression itself is the only certainty.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · primary trigger</span>
              <div className="dn-trade-name">
                Coil-break short — below the relocated flip
              </div>
              <div className="dn-thesis">
                A close below $75,300 breaks the flip and the D-SMA50 $75.8k
                cycle ladder in one move, engaging the −23M @75k pocket where
                dealers turn short gamma. The weight of evidence (crowded
                longs, OI build, spot distribution, idiosyncratic weakness)
                says this is the higher-probability resolution — but it must
                print; the dealer cushion above the flip means no edge
                shorting in-range.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">trigger</span><span className="dn-lvl-v bear">1h close &lt; $75,300 (flip + D-SMA50)</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bull">1h close &gt; $76,900 (back on shelf)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$75,000 / $74,000 / $72.3k D-SMA100 watch</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.5R on trigger; +0.3R below $74k; ≤ 0.8R</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> trigger $75,300, stop $76,900 = ~$1,600 risk;
                $75,000 = ~$300, $74,000 = ~$1,300 ≈ 0.2–0.8:1 to first
                targets — poor; the real reward is the $72.3k extension if the
                cycle ladder cracks. Size capped, add only sub-$74k. Do not
                pre-empt the close.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · conditional · small</span>
              <div className="dn-trade-name">
                Reclaim long — only on D-SMA150 with SM confirming
              </div>
              <div className="dn-thesis">
                There is no washout to scalp this time (RSI relieved to 40s,
                not sub-25), so the only long permitted is a confirmed
                regime-shift reclaim, not a dip-buy: a close back above
                D-SMA150 $77.2k while SM net stays positive would void the
                bear lean and open the gap to the lost D-EMA20 / W-EMA20.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">trigger</span><span className="dn-lvl-v bull">1h close &gt; $77,200 + SM net &gt; 0</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1h close &lt; $76,400</span></div>
                <div><span className="dn-lvl-k">target</span><span className="dn-lvl-v">$78,200 (W-EMA20) / $78,600</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.3R · half off $78,200</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> trigger $77,200, stop $76,400 = ~$800 risk,
                target $78,200–78,600 = ~$1,000–1,400 ≈ 1.3–1.8:1.{' '}
                <b>Gating:</b> mutually exclusive with the coil-break short;
                requires SM net still positive at trigger — if SM has
                re-flipped short, skip the long entirely.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · hedge</span>
              <div className="dn-trade-name">
                Downside put-spread — structural, macro a flagged watch
              </div>
              <div className="dn-thesis">
                Crowded longs + OI build + spot distribution keep a downside
                tail real on structure. The stale macro panel hints at a
                rates/MOVE escalation that, IF it refreshes fresh, fattens
                that tail materially — but it is stale-4d, so this stays a
                structural insurance with a macro trigger to confirm, not a
                macro-driven position.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">structure</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">expiry</span><span className="dn-lvl-v">29-MAY-26 (10d) — first big positive-GEX expiry</span></div>
                <div><span className="dn-lvl-k">grow-trigger</span><span className="dn-lvl-v bear">fresh 10Y &gt; 4.55% confirmed OR HY OAS &gt; ~3.0%</span></div>
                <div><span className="dn-lvl-k">size (indicative)</span><span className="dn-lvl-v">0.15R · final pending chain pull</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the 10Y / HY triggers cannot be acted on from
                a stale-4d render — &ldquo;await fresh&rdquo;.
                Strike/premium/Greeks not loaded — structure illustrative,
                sizing pending a Deribit 29-MAY chain pull.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the coil resolves</span>
            </h2>

            <p>
              The 05-18 book is closed: the flip-break short never triggered
              and is stood down (SM covered). Post-coil stance is flat with
              two conditional triggers around the compression band:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Coil breaks down (lean)</td><td className="bear">1h close &lt; $75,300</td><td>coil-break short, add sub-$74k</td></tr>
                <tr><td>Coil breaks up + SM long</td><td className="bull">1h close &gt; $77,200, SM net &gt; 0</td><td>reclaim long, half off $78.2k</td></tr>
                <tr><td>Mid-cycle breaks (escalation)</td><td className="bear">1d close below cloud $74.3k</td><td>hold short runner, grow tail, no longs</td></tr>
                <tr><td>Macro turns real (watch)</td><td className="bear">fresh 10Y &gt; 4.55% / HY &gt; ~3.0% close</td><td>grow tail regardless of price</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes this note is{' '}
              <span className="dn-signal">
                smart money flipping net short again
              </span>{' '}
              while price is still pinned to the shelf — that restores the
              05-18 directional-short conviction without waiting for the
              $75.3k break and voids the reclaim long. Until SM net turns
              negative or the coil breaks on a close, this is a flat book
              watching a compression, with the structural lean down but the
              acute catalyst gone.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 derived from hostile audit 2026-05-19
            </span>
            Hostile audit by codex CLI 0.125.0 (gpt-5.5, xhigh) returned{' '}
            <b>0 correctness blockers</b> and 1 LOW (ZH titleband
            &ldquo;晚间快照&rdquo;, an evening/time-of-day reading, drifted
            from EN &ldquo;late snapshot&rdquo;, the tardy/delayed sense —
            corrected to &ldquo;延迟快照&rdquo;). The note was built applying
            the 05-15/05-17/05-18 audit lessons up front; codex explicitly
            cleared all of them: funding annualization (field × 1095, no
            ×100), the SM net-short → small-net-long <em>reversion</em>
            framing (−2.5k on the 05-18 note → +2.9k; long 20.57k − short
            17.71k = +2.86k ≈ +2.9k, components reproduce the net, never a
            fraction), GEX flip dual-reference sign coherence (−1.9% vs live
            spot; +2.7% off the GEX file&rsquo;s Deribit-index $77,334),
            &ldquo;within ~$15&rdquo; for D-EMA100 proximity (not &ldquo;to
            the dollar&rdquo;), the MA anchor $-rounded disclosure, section
            numbering, the §VI/trade-book trigger consistency, the stale-macro
            discipline (~8h render + FRED-stale-4d, rates/MOVE escalation kept
            watch-not-lean), claims-vs-loaded-data, the correlation series
            (0.275 → 0.281 → 0.331 verified against the 05-17/05-18 notes),
            EN/ZH numeric parity, the requireViewer gating, and the Next.js
            build. Source audit record kept at audits/2026-05-19-desk-note.md
            in the desk repository.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>
            , and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single snapshot (2026-05-19 09:58Z) with
            section-level provenance disclosed in the manifest band above;
            some inputs — macro especially — are explicitly stale and flagged
            as such. Levels, sizes, and conditions are illustrative of the
            desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future
            tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                A coil pays you for waiting, not for guessing which way it
                springs.
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
            v2 · 2026-05-19 09:58Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
