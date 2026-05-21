import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// Internal-only route: not in public nav, not in sitemap, noindex/nofollow.
// Description deliberately anodyne — any future external share (Slack/email
// link preview) shows neutral text rather than dated trade specifics.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-05-21 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-05-21',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-05-21' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260521() {
  await requireViewer('/desk/2026-05-21');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · DESK NOTE · 2026-05-21 · v2</span>
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
              <span className="dn-big">$77,588</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.1%</span>
            </div>
          </div>

          {/* DATA PROVENANCE BAND */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-05-21 00:08Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-21 00:08Z</td>
                  <td className="dn-flag">fresh · 1-min</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 00:01Z scan</td>
                  <td className="dn-flag">fresh · in-progress bar</td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 00:01Z snapshot</td>
                  <td className="dn-flag">fresh · Deribit idx $77,584 vs live $77,588</td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 00:01Z
                  </td>
                  <td className="dn-flag">~7-min lag · 1h bars · 22 assets</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-20 22:15Z render</td>
                  <td className="dn-flag">
                    ~2h render lag · FRED Tier-1 fresh values · LOAD-BEARING
                    (and worse than 05-20)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-05-21 00:05Z</td>
                  <td className="dn-flag">
                    ~3-min stale · offsets recomputed vs live spot
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
              <span className="dn-v bull">+2.0%</span>
              <span className="dn-src">live · 00:08Z · 24h mean +7.1% · now at 24h LOW</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">+3.8% → +2.0%</span>
              <span className="dn-src">compressed · range +2.0/+10.0% (now at lo)</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−2.27% (−2,352 BTC)</span>
              <span className="dn-src">live · deleveraging through the rally</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v">56.8 / 43.2</span>
              <span className="dn-src">live_db `mkt_long_pct` · cooled 59.7 → 56.8 on rally</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−6.7k (net SHORT)</span>
              <span className="dn-src">live · long 16.74k − short 23.44k</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 05-20 note</span>
              <span className="dn-v bear">+2.6k → −6.7k (−9.3k swing)</span>
              <span className="dn-src">FLIPPED · the 05-20 kill line fired</span>
            </div>
            <div>
              <span className="dn-k">IV / 30d RV</span>
              <span className="dn-v">43.0% / 25.5%</span>
              <span className="dn-src">GEX median IV · RV essentially flat</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v">−2.4%</span>
              <span className="dn-src">flip $75,693 vs spot · file +2.5% off idx</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              The 05-20 note wrote one explicit kill line:{' '}
              <em>
                &ldquo;smart money flipping back net short with price still
                pinned to the shelf re-writes this note.&rdquo;
              </em>{' '}
              <span className="dn-signal">
                It fired. SM swung +2.6k → −6.7k BTC (a 9.3k swing, ~3.6×
                the prior net), funding compressed from +7.6% to +2.0% ann,
                OI bled −2,352 BTC, macro deteriorated another notch (10Y
                +6bp to 4.67%, HY OAS regime-tag flipped loose → neutral) —
                and price went <em>up</em> +1.1% anyway
              </span>
              , reclaiming D-EMA50, D-EMA100, and D-SMA150 in one move.
              That is not a contradiction — it is the trade. The rally is
              spot-led (session cb_cvd +4,290), un-leveraged (funding at
              24h low, OI bleeding), and sold by the cohort that scales
              size, into a macro tape that is two notches harder than 05-20.
              The standing SM-preempt-short (0.3R, stop $77,100) wrote into
              the 05-20 §VI fired ~18h ago at ~$77.2k and was stopped on the
              reclaim — that loss is part of today&rsquo;s record, not an
              edit of yesterday&rsquo;s plan.
            </p>

            <p>
              BTC sits at <span className="dn-tag">$77,588</span>{' '}
              (<span className="dn-tag bull">+1.1% 24h</span>), 24h range{' '}
              <span className="dn-tag">$76,485–$77,826</span> (perp). The
              reclaim is precise: spot is now back above{' '}
              <span className="dn-tag stale">D-EMA50 $76.8k (+1.07%)</span>,{' '}
              <span className="dn-tag stale">D-EMA100 $76.9k (+0.95%)</span>,
              and <span className="dn-tag stale">D-SMA150 $77.0k (+0.75%)</span>{' '}
              — the three lines 05-20 flagged as &ldquo;just slipped under
              the shelf.&rdquo; Overhead next:{' '}
              <span className="dn-tag bear">W-EMA20 $78.2k (−0.78%)</span>{' '}
              into <span className="dn-tag bear">D-EMA20 $78.4k (−1.02%)</span>{' '}
              and the 24h high $77.8k just under. Below:{' '}
              <span className="dn-tag bull">D-SMA50 $76.2k (+1.85%)</span>{' '}
              then GEX flip{' '}
              <span className="dn-tag">$75,693 (−2.4%)</span>. The level
              picture says rally; the positioning, funding, and macro
              picture says supply distributing into the rally. The two
              don&rsquo;t need to be reconciled — they need to be{' '}
              <span className="dn-signal">acted on as a pair</span>.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape</span>
            </h2>

            <p>
              The biggest positioning swing since the 05-17 SM cut
              (−23.8k BTC was the series record; today&rsquo;s 9.3k is
              smaller in magnitude but the directional inversion is
              cleaner).{' '}
              <span className="dn-signal">SM net flipped from +2.6k BTC to
              −6.7k BTC (long 16.74k − short 23.44k)</span> — a 9.3k swing,
              roughly 3.6× the prior net long, with the SM net first
              crossing zero at 05-20 13:56Z (prior tick +3.4k → −2.6k) and
              continuing to widen to −6.9k by 15:56Z; the long book bled
              from 20.4k → 16.5k and the short book added from 17.9k →
              23.6k inside ~3 hours.{' '}
              <span className="dn-em">
                The standing 05-20 §VI condition was &ldquo;SM net BTC &lt; 0
                sustained &gt; 2h&rdquo; with a defined 0.3R size, stop 1h
                close &gt; $77,100, target $75,000. The cross has been
                sustained for ~18h. The 1h close &gt; $77,100 stop was taken
                during the overnight rally — recorded today as a stopped
                trade, not an edited plan.
              </span>{' '}
              Retail cooled with the rally:{' '}
              <span className="dn-tag">56.8% long</span> from 59.7 — the
              first session in the series the crowd pulled back from
              max-long.
            </p>

            <p>
              The leverage side reads the same direction. Funding{' '}
              <span className="dn-tag bull">collapsed to +2.0% ann live</span>{' '}
              (24h mean +7.1%, range +2.0/+10.0% — now at the 24h{' '}
              <em>low</em>), down from the 05-20 live +7.6% — longs are{' '}
              <span className="dn-em">not</span> paying up to add into the
              reclaim; if anything, prior longs are letting positions
              decay through the carry cycle. OI fell another{' '}
              <span className="dn-tag bear">−2.27% (−2,352 BTC)</span>{' '}
              over 24h <span className="dn-em">on a rallying price</span>{' '}
              — the classic deleveraging-into-strength signature: more
              positions closing than opening as price climbs. Perp held{' '}
              <span className="dn-tag bear">−$62 discount</span> to spot —
              same spot-strength / perp-weakness sign as 05-20.
            </p>

            <p>
              Windowed flow is spot-bid, futures-flat. 4h: price{' '}
              <span className="dn-tag">−0.02%</span> (the recent grind has
              been earlier), OI{' '}
              <span className="dn-tag bear">−579 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +2,182</span>, futures CVD{' '}
              <span className="dn-tag">Δ +535</span>, big-print{' '}
              <span className="dn-tag bull">+334 BTC / 109 prints</span>.
              1h is similar but smaller: spot CVD{' '}
              <span className="dn-tag bull">Δ +1,088</span>, futures CVD{' '}
              <span className="dn-tag">Δ +105</span>, big-print{' '}
              <span className="dn-tag">+70 / 36</span>. Session-cum (UTC
              day) spot CVD{' '}
              <span className="dn-tag bull">+4,290 BTC</span>, futures CVD{' '}
              <span className="dn-tag">+536 BTC</span>, OI{' '}
              <span className="dn-tag bear">−871 BTC</span>.{' '}
              <span className="dn-em">
                The character has fully inverted from 05-20: yesterday was
                perp-led distribution on flat price; today is spot-led bid
                on rising price with SM sitting hard short underneath it.
                Spot demand can carry the tape, but it does not carry the
                positioning.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · stale-flagged</span>
            </h2>

            <p>
              Structure tactically improved, sequence-wise turned over.
              12h <span className="dn-signal">pushed back inside cloud</span>{' '}
              (cloud 76.6k–79.7k, up from &ldquo;below&rdquo; on 05-20).
              1d <span className="dn-em">did not</span> fire the TD9 BUY
              we flagged one bar away on 05-20 — the BUY 8→9? exhausted{' '}
              without completing and the daily TD setup now reads{' '}
              <span className="dn-tag bear">Sell 1</span>, the front edge
              of a new top-side counter-trend sequence. RSIs lifted to
              high-40s/low-50s on the short TFs; 8h printed a fresh{' '}
              <span className="dn-tag bull">water-down golden cross 1 bar
              ago</span> (DIF still water-down — early); 1h printed a{' '}
              <span className="dn-tag bear">water-up death cross 1 bar
              ago</span> (DIF still water-up — early bear). 4h carries a{' '}
              <span className="dn-tag bull">BULL reg div</span> active.
              <span className="dn-em">
                {' '}Two specific shifts vs 05-20: 12h reclaimed cloud;
                1d TD9 BUY exhaustion → Sell 1 (the counter-trend bottom
                signal failed to fire; the daily is now beginning its
                top-side count instead). Both still provisional until
                the closes confirm.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">77,500</td><td className="num">51.4</td><td className="bear">death (water-up) 9b</td><td className="bull">above 2b ↓77.3k</td><td>Sell 3</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">77,500</td><td className="num">52.9</td><td className="bear">death (water-up) 5b</td><td className="bull">above 40b ↓77.2k</td><td>Sell 2</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">77,500</td><td className="num">55.3</td><td className="bear">death (water-up) 1b</td><td className="bull">above 10b ↓77.2k</td><td>Buy 2</td><td>BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">77,504</td><td className="num">48.9</td><td className="bull">golden (water-dn) 11b</td><td className="bear">below 33b ↑79.5k</td><td className="bear">Sell 7</td><td className="bull">BULL reg</td></tr>
                <tr><td>8h</td><td className="num">77,500</td><td className="num">43.5</td><td className="bull">golden (water-dn) 1b</td><td className="bear">below 15b ↑78.8k</td><td>Sell 5</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">77,500</td><td className="num">42.3</td><td className="neut">—</td><td className="neut">in cloud 76.6–79.7k</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">77,500</td><td className="num">47.5</td><td className="bear">death (water-up) 9b</td><td className="bull">above 35b ↓74.6k</td><td className="hot">Sell 1 (TD9 BUY failed)</td><td>BEAR reg</td></tr>
                <tr><td>3d</td><td className="num">77,504</td><td className="num">52.2</td><td className="neut">—</td><td className="neut">in cloud 73.5–93.0k</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">77,504</td><td className="num">46.4</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below 16b ↑100.3k</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">77,500</td><td className="num">49.2</td><td className="neut">—</td><td className="bull">above 27b ↓46.9k</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Shifts vs 05-20: 12h moved &ldquo;below cloud&rdquo; →
                    &ldquo;in cloud&rdquo;; 1d TD9 BUY (Buy 8→9? on 05-20)
                    failed to print and the daily now reads Sell 1; 8h
                    printed a fresh water-down golden cross 1 bar ago (early
                    bullish flicker on the rally). Short TFs (15m/30m/1h)
                    all printed water-up death crosses inside the last 1–9
                    bars — pop topping. 1d cloud bottom drifted up to ↓74.6k
                    (was ↓74.5k). All values provisional until each TF
                    closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is the day&rsquo;s most concrete improvement.
              Spot has{' '}
              <span className="dn-signal">reclaimed three of the five
              near MAs lost or borderline on 05-20</span>:{' '}
              <span className="dn-tag stale">D-EMA50 $76.8k (+1.07%)</span>{' '}
              — flipped from −0.03% to +1.07% (price moved through it by
              ~$821 of upside, materially clear);{' '}
              <span className="dn-tag stale">D-EMA100 $76.9k (+0.95%)</span>{' '}
              — flipped from −0.19% to +0.95%; and{' '}
              <span className="dn-tag stale">D-SMA150 $77.0k (+0.75%)</span>{' '}
              — flipped from −0.52% to +0.75% (the 05-20 &ldquo;first
              reclaim test overhead&rdquo; is now reclaimed). Overhead
              next:{' '}
              <span className="dn-tag bear">W-EMA20 $78.2k (−0.78%)</span>{' '}
              into <span className="dn-tag bear">D-EMA20 $78.4k (−1.02%)</span>{' '}
              into <span className="dn-tag bear">D-SMA20 $79.4k (−2.29%)</span>{' '}
              and then{' '}
              <span className="dn-tag bear">
                D-SMA200/EMA200 $80.9–81.7k (−4.1 to −5.0%)
              </span>
              . Cycle floor:{' '}
              <span className="dn-tag bull">D-SMA50 $76.2k (+1.85%)</span>{' '}
              cushion, then{' '}
              <span className="dn-tag bull">D-SMA100 $72.4k (+7.14%)</span>{' '}
              cycle anchor. Weekly: above{' '}
              <span className="dn-tag bull">W-SMA20 $75.0k (+3.39%)</span>,
              just under <span className="dn-tag bear">W-EMA20 $78.2k
              (−0.78%)</span>; below W-EMA50 $85.3k (−9.0%) and W-SMA50
              $94.0k (−17.5%).{' '}
              <span className="dn-em">
                All MA levels anchored to parquet last bar 2026-05-21
                00:05Z (close $77,588 — effectively the live spot, anchor
                is ~3 minutes stale); offsets computed against live spot
                $77,588. Displayed MA levels are $-rounded; offsets are
                computed from the exact series values.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · GEX + IV</span>
            </h2>

            <p>
              Dealer gamma{' '}
              <span className="dn-signal">rebuilt to the dampening regime</span>{' '}
              from yesterday&rsquo;s thinned setup. Aggregate GEX{' '}
              <span className="dn-tag bull">+87.9M/1%</span> — 2.4× the
              05-20 +37.4M and well above the 05-18 +15.9M fragility low.
              The 0-gamma flip held essentially the same level{' '}
              <span className="dn-tag">$75,693</span> (was $75,731), so the
              whole +$900 of upside translated to cushion: live spot $77,588
              now sits <span className="dn-tag bull">+2.5% above flip</span>{' '}
              (file: &ldquo;+2.5% dist to flip&rdquo; vs its 00:01Z Deribit
              idx $77,584 — both references give the same number to the
              tenth since spot ≈ idx today). The negative shelves under
              spot all <em>lightened</em>: top neg is now{' '}
              <span className="dn-tag bear">$75k −20.1M</span> (was −24.5M),{' '}
              <span className="dn-tag bear">$74k −9.4M</span> (was −13.5M),{' '}
              <span className="dn-tag bear">$76k −8.8M</span> (was −10.6M).
              Positive walls heavier and stair-stepped:{' '}
              <span className="dn-tag bull">$80k +46.2M</span> (was +38M,
              now the load-bearing ceiling),{' '}
              <span className="dn-tag bull">$82k +20.1M</span>,{' '}
              <span className="dn-tag bull">$78k +17.2M</span>,{' '}
              <span className="dn-tag bull">$85k +10.5M</span>.{' '}
              <span className="dn-em">
                Front gamma flipped sign vs 05-20: 21MAY 0DTE prints
                +18.9M (positive — dampens today), 22MAY 2DTE −7.4M
                (was 22MAY 2DTE −15.7M — about half). Front-week dampening
                today, not amplifying.
              </span>
            </p>

            <p>
              Read straight: the dealer side has{' '}
              <span className="dn-signal">half-reversed back toward the
              coil-with-cushion regime</span> of 05-19. +2.5% cushion vs
              flip, lighter negative pockets, $80k wall as the next
              positive obstacle, positive front gamma — a tape that wants
              to mean-revert in-range from the dealer side alone. The
              negative pockets below are still lined up if flip breaks
              (−20.1M @75k is still a real accelerant), but the cushion
              is now thicker than at any point in the last three sessions.
              IV median 43.0% across 880 instruments vs 30D close-to-close
              RV <span className="dn-tag">25.5%</span> — chain-level
              richness ~<span className="dn-tag">+17pt</span>, essentially
              unchanged from 05-20 +18pt;{' '}
              <span className="dn-em">not</span> a tradable spread, IV is
              a chain-median across N instruments. Strike/expiry vega and
              skew not loaded; vol read framework-only.
            </p>

            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · worse than 05-20 · load-bearing</span>
            </h2>

            <p>
              <span className="dn-signal">
                Macro went the other way from price.
              </span>{' '}
              Tier-1 rates pushed further into EXTREME RISK-OFF on every
              core lane. US 10Y nominal{' '}
              <span className="dn-tag bear">4.67% (+6bp vs 05-20, regime
              +2.96, episodic +2.75)</span> — up from 4.61%; 10Y TIPS real{' '}
              <span className="dn-tag bear">2.18% (+5bp, regime +2.28,
              episodic +3.28)</span> — up from 2.13%; 5Y5Y BE{' '}
              <span className="dn-tag bear">2.32% (+5bp, episodic +1.58)</span>{' '}
              — newly flagged on the episodic filter. MOVE bond vol eased
              a hair to <span className="dn-tag">85.3 (−0.75, episodic
              +2.51)</span> but is still elevated. DXY unchanged{' '}
              <span className="dn-tag">99.05 (episodic +1.53)</span>. The
              third macro lane — credit — took its first regime-tag step:
              HY OAS{' '}
              <span className="dn-tag bear">2.86% (+3bp, regime −0.47,
              episodic +0.47) → tag flipped &ldquo;loose&rdquo; →
              &ldquo;neutral&rdquo;</span> — the first crack we&rsquo;ve
              tracked in the credit holdout.{' '}
              <span className="dn-em">
                The 05-20 escalation gate (HY OAS &gt; 3.0% close →
                tail-to-primary) is now ~14bp away, not yesterday&rsquo;s
                ~17bp; the regime tag moved one notch toward it without
                the level reaching it. Net liquidity unchanged loose
                ($5.886T, episodic +2.47) — the only macro lane still
                offsetting.
              </span>
            </p>

            <p>
              Cross-asset (7d 1h window, summary 00:01Z — not today-only).
              Mean off-diag{' '}
              <span className="dn-tag">|r| 0.365</span> (up from 05-20
              0.339 → correlation regime tightening, still NORMAL band).
              BTC ties NVDA <span className="dn-tag">+0.66</span>, NQ{' '}
              <span className="dn-tag">+0.60</span>, SP500{' '}
              <span className="dn-tag">+0.55</span>, TSLA{' '}
              <span className="dn-tag">+0.55</span>. 7d relative
              performance: BTC{' '}
              <span className="dn-tag bear">−2.53%</span>, NQ{' '}
              <span className="dn-tag bear">−1.63%</span>, SP500{' '}
              <span className="dn-tag bear">−0.93%</span>, NVDA{' '}
              <span className="dn-tag bear">−3.33%</span>, TSLA{' '}
              <span className="dn-tag bear">−7.57%</span>; metals complex
              materially weaker — GOLD{' '}
              <span className="dn-tag bear">−3.40%</span>, SILVER{' '}
              <span className="dn-tag bear">−13.97%</span>, PLAT{' '}
              <span className="dn-tag bear">−9.44%</span>, PALL{' '}
              <span className="dn-tag bear">−8.41%</span>, URNM{' '}
              <span className="dn-tag bear">−11.48%</span>. The 05-20 read
              was BTC −5.21% vs NQ −0.81%; today&rsquo;s 7d rolls the
              window forward by 24h and the BTC-vs-NQ gap narrows to
              −2.53% vs −1.63% — a real compression, not a regime change.
              JGB monthly 2.52% (EXTREME RISK-OFF monthly tag — do not
              lean). USD/JPY 158.93 unchanged.{' '}
              <span className="dn-em">
                Read: over the rolling 7d window, BTC, the equity-tech
                subset, AND the metals complex are all down — BTC&rsquo;s
                decline is smaller than the metals leg (−2.5% vs −3.4 to
                −14%) and roughly in line with the deeper-down equity
                names (NVDA −3.3%, TSLA −7.6%). Directional anchor is
                broad risk-off across the loaded peer set; BTC is not
                idiosyncratically leading or lagging on this window.
              </span>
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · sized to what we can prove</span>
            </h2>

            <div className="dn-trade">
              <span className="dn-side framework">recorded · not executed</span>
              <div className="dn-trade-name">
                SM-preempt-short (05-20 §VI standing order) — qualified, never opened
              </div>
              <div className="dn-thesis">
                The 05-20 §VI condition &ldquo;SM net BTC &lt; 0 sustained
                &gt; 2h&rdquo; defined a 0.3R short with stop 1h close &gt;
                $77,100 and target $75,000. SM crossed negative at 05-20
                13:56Z (prior tick +3,369 → −2,591); the &ldquo;&gt;2h
                sustained&rdquo; clock therefore expired at ~05-20 15:56Z
                with SM at −6,858 and spot ~$77,297. <em>But</em> the
                stop condition (1h close &gt; $77,100) was already true at
                qualification: the 14:00 1h-bar closed at $77,361 (≥77,100),
                and every subsequent 1h close through 23:59Z stayed above
                that level ($77,250 / 77,430 / 77,457 / 77,485 / 77,371 /
                77,584 / 77,138 / 77,433 / 77,412). Standard discipline:
                if the stop is true at qualification, the entry doesn&rsquo;t
                open. Recorded as <em>qualified-but-not-opened</em>, P/L
                zero, not retrofitted out of the book and not booked as a
                loss.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">qualified</span><span className="dn-lvl-v">~05-20 15:56Z (SM cross sustained &gt; 2h; spot ~$77,297)</span></div>
                <div><span className="dn-lvl-k">stop status</span><span className="dn-lvl-v bull">already true at qualification (14:00 1h close $77,361 &gt; $77,100)</span></div>
                <div><span className="dn-lvl-k">disposition</span><span className="dn-lvl-v">not opened (stop-true-at-entry discipline)</span></div>
                <div><span className="dn-lvl-k">P/L</span><span className="dn-lvl-v">0R (no execution)</span></div>
              </div>
              <div className="dn-gating">
                <b>Why disclose:</b> standing orders that qualify but
                don&rsquo;t execute have to be reported the same as
                executed ones — silence would let the writer pretend the
                trigger never fired. The kill line read the positioning
                correctly (SM did flip); the trigger geometry simply put
                the stop inside the entry window once price reclaimed
                $77,100 first. The lesson is in the trigger design (a
                preempt with a stop ahead of price is fragile to a spot-led
                reclaim) — see §VI for the structure-confirmed re-armed
                version.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">stand-aside · primary</span>
              <div className="dn-trade-name">
                Flat in-range — wait for the structure to confirm the positioning
              </div>
              <div className="dn-thesis">
                The cleanest stance after a fired-and-stopped pre-empt is
                to require structure confirmation before re-engaging. The
                positioning + macro stack is short-biased; the price tape
                + dealer cushion is bull-biased; the resolution is the
                first 1h close on either side of the immediate boundary
                (D-EMA50 $76.8k below, $78.2k W-EMA20 above). The break
                IS the entry. Funding compressed and OI bleeding say
                neither side has piled on yet — the resolution should be
                clean.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">stance</span><span className="dn-lvl-v">flat directional · no in-range risk</span></div>
                <div><span className="dn-lvl-k">resolve band</span><span className="dn-lvl-v">$76.8k (D-EMA50) ↔ $78.2k (W-EMA20)</span></div>
                <div><span className="dn-lvl-k">down resolve</span><span className="dn-lvl-v bear">1h close &lt; $76,750 (D-EMA50 reloss)</span></div>
                <div><span className="dn-lvl-k">up resolve</span><span className="dn-lvl-v bull">1h close &gt; $78,200 (W-EMA20 clear)</span></div>
              </div>
              <div className="dn-gating">
                <b>Why in-range nothing:</b> dealer cushion is rebuilt
                (+87.9M, +2.5% above flip); the +80k wall (+46.2M) is the
                next obstacle up; SM is locked short; macro is fresh
                bearish. The setup is symmetrical at the immediate
                boundary, asymmetric at the next reach (short to $75.7k
                flip is ~$1.9k; long to $80k wall is ~$2.4k). Wait for
                the close.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · re-armed</span>
              <div className="dn-trade-name">
                D-EMA50 reloss short — confirmed by structure, not pre-empted
              </div>
              <div className="dn-thesis">
                Replaces the stopped pre-empt with a structure-confirmed
                version. The trigger requires a 1h close back below
                D-EMA50 $76,750 (which would re-invalidate today&rsquo;s
                reclaim) <em>while</em> SM remains net short — the two
                conditions together cover the &ldquo;positioning was
                right, structure caught up&rdquo; resolution. Tighter
                size than the 05-20 coil-break (0.4R vs 0.6R) because
                the entry is no longer a level break with the trade in
                front of it; it&rsquo;s a structure re-loss with the
                rally still nearby as a fade.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">trigger</span><span className="dn-lvl-v bear">1h close &lt; $76,750 + SM net &lt; 0</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bull">1h close &gt; $78,000 (back above 24h-hi shelf)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$76,200 (D-SMA50) / $75,700 (flip) / $75,000 (negative pocket)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.4R on trigger; +0.3R below $75,700; ≤ 0.9R</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> trigger $76,750, stop $78,000 = ~$1,250 risk;
                $76,200 = ~$550, $75,700 = ~$1,050, $75,000 = ~$1,750 →
                0.4–1.4:1 to first targets, modest. <b>Gating:</b> SM
                must still be net short at trigger time (else the
                positioning piece of the thesis is gone — re-evaluate);
                if HY OAS prints &gt; 3.0% close before the trigger, the
                §VI credit-cracks row takes over and size lifts.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · invalidated today</span>
              <div className="dn-trade-name">
                Reclaim long — filter fails, deferred
              </div>
              <div className="dn-thesis">
                The 05-20 reclaim long required &ldquo;1h close &gt; $77,100
                + SM net &gt; 0 + macro pause.&rdquo; Price condition
                satisfied (we&rsquo;re above $77,100). SM condition fails
                hard (deeply net short −6.7k). Macro condition fails
                (rates fresh worse, HY moved a notch toward credit
                cracks). With two of three filters down, the trade is
                explicitly{' '}
                <span className="dn-signal">deferred, not deferred-pending</span>{' '}
                — fading bounces here is structurally more defensible
                than chasing them.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">deferred · 2 of 3 filters fail</span></div>
                <div><span className="dn-lvl-k">re-eligibility</span><span className="dn-lvl-v bull">SM net &gt; 0 sustained &gt; 4h AND 10Y backs off &lt; 4.55%</span></div>
                <div><span className="dn-lvl-k">size if eligible</span><span className="dn-lvl-v">0.15R (smaller than 05-20 0.2R; stack got worse for longs)</span></div>
              </div>
              <div className="dn-gating">
                <b>Why deferred not killed:</b> a clean SM flip back +
                rates reversal would re-open this; both are observable
                conditions. Do not enter on price alone today.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · live hedge</span>
              <div className="dn-trade-name">
                Downside put-spread — grow-trigger held, HY took one notch
              </div>
              <div className="dn-thesis">
                The 05-20 grow-trigger (10Y &gt; 4.55% fresh) remains
                fired (4.67% today, still confirmed). The HY OAS leg
                advanced one regime notch: 2.83% → 2.86% (+3bp), regime
                tag flipped loose → neutral. The 3.0% close gate is
                ~14bp away. Structure unchanged: $74k / $70k put,
                29-MAY-26, indicative 0.25R. Size held — not grown
                further until either HY closes &gt; 3.0% (then primary)
                or 10Y &gt; 4.75% (continuation grow).
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">structure</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">expiry</span><span className="dn-lvl-v">29-MAY-26 (8d) — positive-GEX expiry (+29.6M)</span></div>
                <div><span className="dn-lvl-k">grow-trigger (held)</span><span className="dn-lvl-v bear">10Y &gt; 4.55% fresh ✓ (4.67% today)</span></div>
                <div><span className="dn-lvl-k">HY OAS status</span><span className="dn-lvl-v bear">2.86% · regime &ldquo;neutral&rdquo; (was &ldquo;loose&rdquo;) · 14bp from gate</span></div>
                <div><span className="dn-lvl-k">size (held)</span><span className="dn-lvl-v">0.25R · same as 05-20 · grow conditions defined below</span></div>
                <div><span className="dn-lvl-k">next gate</span><span className="dn-lvl-v bear">HY OAS &gt; 3.0% close → primary; OR 10Y &gt; 4.75% close → +0.1R</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> strike/premium/Greeks not loaded —
                structure illustrative, sizing pending a Deribit 29-MAY
                chain pull. The HY regime-tag step is a real-but-small
                escalation; do not lift size on a one-notch tag move
                without a level or 10Y continuation.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · structure has to catch up</span>
            </h2>

            <p>
              Today&rsquo;s scoreboard is split 2-2: positioning + macro
              say short, structure + dealer say bid. The price tape
              follows the second pair; the positioning trade waits on
              the first. The book is short-biased <em>conditional</em>{' '}
              on structure rejoining — not pre-empted into it again:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Structure rejoins positioning (primary down resolve)</td><td className="bear">1h close &lt; $76,750 (D-EMA50 reloss) + SM still net short</td><td>D-EMA50-reloss short 0.4R, add 0.3R sub-$75,700</td></tr>
                <tr><td>Tape clears overhead (positioning has to give)</td><td className="bull">1h close &gt; $78,200 (W-EMA20 clear)</td><td>cut all bear setups; reclaim long stays deferred until SM &amp; rates filter pass</td></tr>
                <tr><td>SM flips back net long (positioning piece gone)</td><td className="bull">SM net BTC &gt; 0 sustained &gt; 4h</td><td>retire D-EMA50-reloss short setup, re-evaluate reclaim long on SM + rates pair</td></tr>
                <tr><td>Credit cracks (tail → primary)</td><td className="bear">HY OAS &gt; 3.0% close</td><td>escalate tail to primary 0.5R; size 0.4R re-armed short doubles to 0.8R on trigger</td></tr>
                <tr><td>Rates continuation (size grow on tail)</td><td className="bear">10Y &gt; 4.75% close</td><td>tail +0.1R to 0.35R; no immediate equity-side action</td></tr>
                <tr><td>Mid-cycle breaks (escalation)</td><td className="bear">1d close below cloud $74.6k</td><td>hold short runner, drop all longs, max tail</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                SM net flipping back positive on a sustained &gt; 4h
                window
              </span>{' '}
              while price holds the reclaim — that pulls the positioning
              piece, lets the structure-bid lead, and re-opens the
              deferred reclaim long. The reverse: structure rejoining
              positioning at $76,750 with SM still locked short keeps
              the book short-biased without any need for the macro tail
              to fire first. The stopped pre-empt is the lesson: the
              kill line read positioning correctly; the in-range entry
              didn&rsquo;t pay because the spot-led tape ran over the
              short before structure could confirm. The re-armed version
              waits for structure.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit · 3 blockers fixed)
            </span>
            <b>Codex CLI 0.132.0 (gpt-5.5, xhigh reasoning) ran the
            hostile audit cleanly today — stdin/TTY block from 05-20 is
            resolved (empty-stdin pipe).</b>{' '}
            Three HIGH findings, no CRITICAL, all applied EN+ZH:{' '}
            (a) <b>HIGH</b> &mdash; SM-preempt-short trade block had
            inconsistent timing (entry &ldquo;~14Z&rdquo; vs actual
            sustained-cross trigger ~15:56Z) and an unsupported
            &ldquo;stopped overnight&rdquo; P/L narrative (every 1h
            close from 14:00Z onward was already &gt; the $77,100 stop,
            so the stop was true at qualification); rewritten as
            <em>qualified-but-not-opened</em> per stop-true-at-entry
            discipline, P/L 0R, with the 1h-close sequence cited
            verbatim. (b) <b>HIGH</b> &mdash; lead claimed
            &ldquo;single biggest positioning swing in the series&rdquo;
            which is false (05-17 already records SM 24h Δ −23.8k BTC,
            larger than today&rsquo;s 9.3k); corrected to &ldquo;biggest
            since 05-17&rdquo; with the magnitude qualifier (today is
            smaller but the directional inversion is cleaner).{' '}
            (c) <b>HIGH</b> &mdash; cross-asset paragraph framed 7d
            window data as &ldquo;today&rdquo; and claimed BTC was
            &ldquo;leading equities higher / leading metals
            under-performance,&rdquo; both unsupported by the loaded 7d
            relative-performance table; rewritten as a 7d-window-only
            read showing broad risk-off across BTC + equity-tech +
            metals, with BTC&rsquo;s decline smaller than the metals
            leg and in line with the deeper equity names. (d){' '}
            <b>LOW</b> &mdash; archive copy at <code>src/app/desk/page.tsx</code>{' '}
            said &ldquo;Published in English only&rdquo; while the same
            publish adds a ZH mirror; corrected to reference the{' '}
            <em>中文镜像</em> at /zh/desk (and the symmetric ZH archive
            now references /desk). Audit-cleared: funding × 1095, SM
            net arithmetic, GEX flip dual-reference, MA matrix offsets
            vs live spot, requireViewer gating (both paths first
            statement), metadata/robots, index <code>&lt;li&gt;</code>{' '}
            additions, EN/ZH quantitative parity. <b>Build note (INFO):</b>{' '}
            this server runs Node 18.19.1; Next 16.2.6 hard-exits on
            Node &lt; 20.9.0, so a full <code>next build</code> is
            environment-blocked. <code>npx --no-install tsc --noEmit</code>{' '}
            returned exit 0 (TypeScript clean) and is the available
            build proxy. Source audit record:{' '}
            audits/2026-05-21-desk-note.md.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>
            , and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-05-21 00:08Z)
            with section-level provenance disclosed in the manifest band
            above; macro is fresh today, load-bearing, and worse than
            05-20. Levels, sizes, and conditions are illustrative of the
            desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future
            tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The kill line was right and the entry was early — the
                trade re-arms when structure says the same thing
                positioning has been saying for eighteen hours.
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
            v2 · 2026-05-21 00:08Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
