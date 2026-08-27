import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-27 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-27',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-27' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260827() {
  await requireViewer('/desk/2026-08-27');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-27 · v2</span>
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
              <span className="dn-big">$78,857</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.31%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-27 00:05Z (pinned anchor row) · rolling sources archived to /opt/desk-note/snapshots/2026-08-27-0007
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · anchor row pinned at <code>t = &ldquo;08-27 08:05&rdquo;</code> = 2026-08-27 00:05Z</td>
                  <td className="dn-flag">
                    fresh · 1-min · <b>the <code>t</code> field is BJ-local (UTC+8), not UTC</b> · every horizon in this note is endpointed on this pinned row, not on the rolling file tail (the tail advanced to 00:07Z during authoring and is deliberately not used) · 24h window = 1,441 rows = 1,440 minute-to-minute intervals + the open row
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-27 00:01Z scan (archived copy)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact, regenerated hourly · read from the dated archive, not the live path · in-progress bars on every TF · scan header prints Beijing time (08:01) and its own spot $78,920 / 24h +0.57%, both of which differ from the pinned tape anchor — see §II
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-27 00:01Z (archived copy) + gex_summary.json same stamp, <b>now archived alongside it</b> (sha256 <code>f86c52ae…13d49a</code>)</td>
                  <td className="dn-flag">
                    960 instruments (was 966 on 08-26) · file&rsquo;s own Deribit index $79,203 vs pinned live spot $78,856.54 · <b>three aggregate bases, none blended</b>: footed strip / <code>net_gex</code> +287.8980M, headline card +280.6M, 49-point strike-profile sum +281.1237M · the exact <code>net_gex</code> $287,897,984.62 comes from the JSON, which is a <em>rolling hourly-overwritten</em> path — it was copied byte-identical into the dated snapshot directory before the next overwrite, so the exact figure is now durably pinned rather than sourced from a file that would not survive · chain-median IV is printed to one decimal on the card (45.1%), so any IV-derived spread here carries ±0.05pt = ±5 volatility basis points
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">cross_asset_correlation_summary.md · 2026-08-27 00:01Z (archived copy)</td>
                  <td className="dn-flag">7d @ 1h · 22 assets · 168 rows · co-movement only — identifies neither driver nor hedge effectiveness · two of the seven days are weekend days carrying no equity prints</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-26 22:15Z render (archived copy)</td>
                  <td className="dn-flag">
                    ~1.8h render lag · <b>this is a fresh weekday FRED cut</b>, not a weekend re-render — both daily yield rows moved −6.0bp · episodic filter |z| &gt; 1.5
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix + 30D RV</td>
                  <td className="dn-v-cell">btcusdt_1m_*.parquet · all 8 yearly files · last bar 2026-08-27 00:05Z close $78,880.00</td>
                  <td className="dn-flag">
                    span 2019-09-08 → 2026-08-27 · 2,546 daily bars / 365 weekly bars · offsets recomputed vs the pinned live spot $78,856.54 · the last daily and last weekly bar are both in-progress
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle-floor watch</td>
                  <td className="dn-v-cell">weekly_200sma.json <b>ABSENT</b> · fallback = parquet recompute + ma200w_trap_watch_state.json</td>
                  <td className="dn-flag">
                    second consecutive session with the watch JSON missing · weekly_200sma_state.json exists but is stale (<code>asof</code> 2026-07-06, last completed week 2026-07-05) — <b>do not lean on it</b> · percentile and last-event are computed here, not read from the watch file
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N · stale 86d</td>
                  <td className="dn-flag">stale · monthly · do not lean</td>
                </tr>
                <tr>
                  <td className="dn-s">order blotter / execution feed / position reconciliation</td>
                  <td className="dn-v-cell">NOT LOADED in this cut</td>
                  <td className="dn-flag">
                    <b>material to this note</b> — §V records a <b>modeled/paper fill</b> inferred from the tape trading through a desk-instructed limit price, not a broker confirmation · no submission ID, working/cancelled flag, partial-fill record, average price or account attribution is loaded, so order existence, routing, status, quantity and ownership are all unverifiable and the resulting 0.2R position is an <b>unreconciled model</b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">NTT pivots, max-pain, strike-level IV, BTC/NQ ratio</td>
                  <td className="dn-v-cell">NOT LOADED in this cut</td>
                  <td className="dn-flag">claims explicitly framework-only (btc_ntt_analysis.html is JS-rendered and not extractable)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h ann.</span>
              <span className="dn-v bull">+4.96%</span>
              <span className="dn-src">live · raw field 0.004526 × 1095 · this is also the 24h <em>minimum</em> · 24h mean +7.8506% ann, max +10.8372% · cap occupancy 0 / 1,441 sampled rows = 0.0% · 0 / 10,081 negative rows on 7d</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · cap release</span>
              <span className="dn-v bull">28h06m off the cap (1,686 min)</span>
              <span className="dn-src">last capped row 08-25 19:59Z (0.01 = +10.95% ann), first below-cap 08-25 20:00Z (+10.9325% ann) · <b>3.88× the 434-elapsed-minute de-crowding gate the 08-26 note re-specified</b> — the gate is CLEARED for the first time since it was written</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−0.97% (−1,040.0 BTC)</span>
              <span className="dn-src">106,723.859 → 105,683.838 on the pinned endpoints · price +0.31% on the same window, so price up / OI down · gross opens, closes and account-level turnover are NOT observable in this feed — replacement leverage offsetting a flush would print the same net</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">52.06 / 47.94</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · <b>RE-crowded +2.04pt</b> from 50.02% · 24h trough 50.01% @00:11Z, peak 52.10% @23:53Z (the peak is 12 minutes before the anchor) · 7d range 45.96% / 53.20%</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+30.6k (net LONG)</span>
              <span className="dn-src">long_btc 37,457.1 − short_btc 6,851.0 = 30,606.1 · long_traders 4,962 / short_traders 1,280 · both sides moved against the net: longs −2,904.9, shorts +1,644.7</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 08-26 note</span>
              <span className="dn-v bear">−4,549.6 · cut fraction 12.94%</span>
              <span className="dn-src">|Δ| / prior_net = 4,549.6 / 35,155.7 = 12.94% · <b>CERTIFIABLE after five consecutive notes flagged uncertifiable</b> — largest single-minute step −743.3 = 16.34% of |Δnet| (latest prior concentration 72.50% on 08-26, before that 93.28% on 08-25, 81.76% on 08-24, 98.12% on 08-23) · see §I</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">45.1% / 41.8790%</span>
              <span className="dn-src">GEX chain-median across 960 instruments — <em>not a tradable spread</em> · RV = close-to-close, 30 daily returns, ×√365, computed at the 00:05Z anchor on the published lineage convention (in-progress daily bar included) · richness +3.2210pt, widened +0.9151pt</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+22.10% (above)</span>
              <span className="dn-src">flip $64,581.07 (rose $355.88 from $64,225.19) · vs pinned live spot $78,856.54 = +22.1047%; vs the GEX file&rsquo;s own Deribit index $79,202.81 = +22.6409% (card rounds to +22.6%) — <b>both references positive, tile and prose agree in sign</b> · an 18.10% decline from spot reaches it</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The limit price traded. After four sessions flat and two
                frameworks disposed of unfilled, the tape reached the 08-25
                retest-hold long&rsquo;s ≈$78,200 limit on 08-26 at 12:30Z —
                and the expiry the 08-26 note bolted on the day before never
                had to fire. No broker feed is loaded, so what follows is a
                modeled/paper fill of a desk instruction, not a confirmed
                execution
              </span>. The tape did not tag the limit and bounce: it swept{' '}
              <span className="dn-tag bull">$600.00 through it</span>, printing{' '}
              <span className="dn-tag">217 exchange one-minute bars at or below
              $78,200</span> and bottoming at{' '}
              <span className="dn-tag">$77,600.00 @08-26 15:04Z</span>. The stop
              is a 1d-close rule at <span className="dn-tag">$77,248.42</span>{' '}
              and was never approached on either basis — the deepest intraday
              print stopped <span className="dn-tag bull">$351.58 above
              it</span>, and the 08-26 daily close{' '}
              <span className="dn-tag bull">$78,989.40</span> settled{' '}
              $1,740.98 clear. From the assumed fill price the modeled trade
              ran to{' '}
              <span className="dn-tag bull">$79,138.70 @08-26 23:46Z</span> ={' '}
              <span className="dn-tag">+0.986R gross</span>, stopping{' '}
              <span className="dn-tag">$861.30</span> short of the $80,000
              first target, and sits at the anchor{' '}
              <span className="dn-tag bull">+$656.54 = +0.690R gross =
              +0.138R at the stated 0.2R sizing</span>. Three things arrived
              alongside it that the framework had been asking for and not
              getting: funding is{' '}
              <span className="dn-tag bull">28h06m off the cap</span>, 3.88×
              the 434-minute gate the 08-26 note wrote; OI{' '}
              <span className="dn-tag bull">contracted −1,040.0 BTC</span> into
              an up-session, satisfying the &ldquo;ideally with OI
              falling&rdquo; clause that 08-25 recorded as violated; and the SM
              tape is <span className="dn-tag bull">CERTIFIABLE</span> after
              five consecutive notes flagged it uncertifiable, its −4,549.6
              Δnet distributed across the window instead of parked in one
              artifact minute. Two things did not: retail{' '}
              <span className="dn-tag bear">RE-crowded +2.04pt to 52.06%</span>,
              peaking 12 minutes before the anchor, and the 1d{' '}
              <span className="dn-tag bear">TD9 SELL has printed</span>. The
              dealer clamp deepened{' '}
              <span className="dn-tag">+35.55M to +287.90M footed</span> — the
              largest step since the 08-22 panel, though nowhere near a lineage
              maximum (08-17→08-18 stepped +100.80M and 08-19→08-20 stepped
              +125.24M) — and the level is now the second-deepest available
              reading, which is a different ordinal from the daily change. And
              directly under the entry, the gamma shelf that deteriorated on
              08-26 repaired: $78,000 went{' '}
              <span className="dn-tag bull">+24.74M → +29.72M</span>, closing
              the explicit watch the prior note set on it. The book is modeled
              LONG. That is a desk statement about its own instruction, not a
              broker-verified position — no blotter, order state or execution
              feed is loaded — and §V says exactly how far that claim can be
              pushed.
            </p>

            <h2 className="dn-sec">
              Positioning{' '}
              <span className="dn-roman">I · funding released and STAYED released (28h06m, gate cleared) · OI contracted into an up-session · SM tape CERTIFIABLE after five consecutive notes flagged it uncertifiable · retail re-crowded against all of it</span>
            </h2>

            <p>
              Start with the number that has been unreadable for a week. SM net
              went <span className="dn-tag">35,155.7 → 30,606.1</span> across
              the pinned endpoints, a{' '}
              <span className="dn-tag bear">−4,549.6</span> Δnet and a cut
              fraction of <span className="dn-tag">4,549.6 / 35,155.7 =
              12.94%</span>. For five consecutive notes that figure has been
              published with a warning attached, because the move lived in a
              single minute: 98.12% on 08-23, 81.76% on 08-24, 93.28% on 08-25
              and 72.50% on 08-26 — the run is five sessions long but it is{' '}
              <em>not</em> a run above 80%, since the latest prior session came
              in at 72.50%. This session it carries no warning. The largest
              single-minute step is{' '}
              <span className="dn-tag">−743.3, or 16.34% of |Δnet|</span>; the
              top three sum to 33.99%, the top five to 49.37%, the top ten to
              79.90%. Gross minute-to-minute turnover across the window is{' '}
              <span className="dn-tag">20,422.9 BTC, 4.49× the net move</span>,
              spread over <span className="dn-tag">152 down-minutes and 136
              up-minutes</span>. There is still one roster jump in the window —{' '}
              <span className="dn-tag">long_traders 4,779 → 4,936 at
              07:41Z</span> — but net_btc moved only −57.7 across it, so the
              re-sampling that has been contaminating this series did not, this
              time, produce a net_btc discontinuity. <em>The trim is tape, not
              artifact.</em> That is a statement about measurability, not about
              direction: the desk can now read the number, and what it reads is
              smart money cutting long exposure{' '}
              <span className="dn-tag">−2,904.9 BTC</span> while{' '}
              <em>adding</em> shorts <span className="dn-tag">+1,644.7 BTC</span>{' '}
              into a session that closed up. Two-sided de-risking against the
              tape&rsquo;s own direction is the least comfortable reading in
              this note, and it is the first one worth anything at all after
              five contaminated sessions.
            </p>

            <p>
              Funding is the cleanest print on the page. The last capped row
              was <span className="dn-tag">08-25 19:59Z</span> at the +10.95%
              ann ceiling; the first below-cap row was 20:00Z at +10.9325%. To
              the pinned anchor that is{' '}
              <span className="dn-tag bull">1,686 elapsed minutes = 28h06m</span>,
              with <span className="dn-tag">0 of 1,441 sampled rows at the
              cap</span> in the 24h window. The 08-26 note re-specified its
              de-crowding gate at <em>434 elapsed minutes</em> — the length of
              the run that had already proved reversible when funding re-pinned
              after 7h14m — and explicitly refused to count the then-current
              245-minute run as evidence. That gate is now cleared by{' '}
              <span className="dn-tag bull">3.88×</span>. Live reads{' '}
              <span className="dn-tag bull">+4.9560% ann</span> off raw 0.004526
              × 1095, which is also the <em>minimum</em> of the 24h path against
              a mean of +7.8506% and a max of +10.8372%: the pin did not just
              release, it kept bleeding, and the anchor catches it at its
              loosest. Rows are not equated with intervals anywhere in this
              paragraph — 1,686 rows and 1,686 minutes coincide here because
              the feed had no gaps, and both are stated.
            </p>

            <p>
              OI supplies the second wanted condition. Aggregate contracted{' '}
              <span className="dn-tag bull">−1,040.0 BTC / −0.9745%</span> to
              105,683.838 while price rose +0.3107% on the identical endpoints,
              with the 24h peak 106,996.077 at 00:42Z and the trough
              105,319.065 at 11:38Z. The 08-25 framework wanted its un-pin
              &ldquo;ideally with OI falling&rdquo; and recorded an OI{' '}
              <em>expansion</em> of +1,670.2 BTC against itself; that clause is
              now satisfied. The standing caveat holds and is not weakened by
              the direction being convenient: gross opens, closes and
              account-lifecycle data are not in this feed, so a deleveraging
              offset by replacement leverage would print the same net, and this
              cut cannot exclude it.
            </p>

            <p>
              Retail is the one positioning read that moved the wrong way, and
              it moved hard. <code>mkt_long_pct</code> went{' '}
              <span className="dn-tag bear">50.02% → 52.06%, +2.04pt</span>,
              with the 24h trough 50.01% at 00:11Z and the peak{' '}
              <span className="dn-tag bear">52.10% at 23:53Z</span> — twelve
              minutes before the anchor, so the note is catching retail
              crowding essentially at its local maximum rather than reporting a
              faded spike. Against a 7d range of 45.96% / 53.20% this is the
              upper half of the week. The composite reading is a{' '}
              <em>split, not a confirmation</em>: the leverage gate opened
              (funding released, OI contracted, SM trimmed) while the retail
              gate closed (crowding rebuilt into strength). A desk that only
              quoted the funding release here would be quoting half its own
              data. Flow for the window: spot CVD{' '}
              <span className="dn-tag bull">+842.6</span>, futures CVD{' '}
              <span className="dn-tag bull">+1,463.7</span>, big-print net{' '}
              <span className="dn-tag bull">+957.00</span>, taker net{' '}
              <span className="dn-tag bull">+1,463.53</span> — buy-side across
              all four, which is consistent with rotation into the bid and{' '}
              <em>cannot</em> exclude liquidation-driven prints, because gross
              open/close and account-lifecycle fields are the exact data this
              feed does not carry. Perp premium at the anchor is{' '}
              <span className="dn-tag">−0.79</span> and aggregate skew{' '}
              <span className="dn-tag">−0.3</span>, both effectively flat.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF 8 long / 0 short / 2 neutral, zero shorts on either convention · 1d TD9 SELL printed · 18-of-20 MA cells positive · cycle floor read on the settled basis, watch JSON absent</span>
            </h2>

            <p>
              The MTF aggregate header reads{' '}
              <span className="dn-tag bull">8 long / 0 short / 2 neutral</span>{' '}
              across ten frames. Summing the per-TF bias column instead gives{' '}
              <span className="dn-tag">5 偏多 / 4 警示 / 1 震荡</span> — both
              counts are printed because they disagree, and neither produces a
              single short. Momentum regimes read{' '}
              <span className="dn-tag bull">7 of 9 at JT ≥ 0</span>, up from
              6 of 9 on 08-26. The reversal panel is where the caution sits:
              three top divergences (1h / 4h / 8h) against three bottom
              divergences (15m / 30m / 1h), and the{' '}
              <span className="dn-tag bear">1d TD9 SELL has printed at
              $78,920</span> — the 08-25 note flagged it one bar out, and it is
              now on the board with the caveat that the daily bar is
              in-progress. The 8h water-up death cross that was one bar old on
              08-26 is now four bars old; the 4h equivalent is 26 bars; the 1h
              frame has just crossed below its cloud and carries the 警示 tag.
              RSI is stretched on the slow frames — 12h{' '}
              <span className="dn-tag bear">80.9</span>, 1d{' '}
              <span className="dn-tag bear">80.4</span> — while the engine
              frames have cooled to 4h 59.0 and 1h 55.6.
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">78,920</td><td className="num">62.9</td><td className="bull">golden (water-dn) 29b</td><td className="bull">above ↓78.4k 12b</td><td>Sell 4</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">78,920</td><td className="num">59.2</td><td className="bull">golden (water-dn) 14b</td><td className="bull">above ↓78.9k 1b</td><td>Sell 7</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">78,920</td><td className="num">55.6</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑79.0k just crossed</td><td>Sell 7</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">78,920</td><td className="num">59.0</td><td className="neut">death (water-up) 26b</td><td className="bull">above ↓74.8k 55b</td><td>Sell 2</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>8h</td><td className="num">78,920</td><td className="num">69.1</td><td className="neut">death (water-up) 4b</td><td className="bull">above ↓63.9k 23b</td><td>Sell 1</td><td>BEAR reg</td></tr>
                <tr><td>12h</td><td className="num">78,920</td><td className="num bear">80.9</td><td className="bull">golden (water-dn) 19b</td><td className="bull">above ↓64.6k 17b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">78,920</td><td className="num bear">80.4</td><td className="bull">golden (water-dn) 9b</td><td className="bull">above ↓64.1k 9b</td><td className="bear">⚡ TD9 SELL</td><td>BULL hid</td></tr>
                <tr><td>3d</td><td className="num">78,920</td><td className="num">70.6</td><td className="neut">—</td><td className="bull">above ↓78.5k 1b</td><td>Sell 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">78,920</td><td className="num">57.7</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑85.9k 30b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">78,920</td><td className="num">51.2</td><td className="neut">—</td><td className="bull">above ↓47.4k 30b</td><td>Sell 1</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 2026-08-27 00:01Z scan, read
                    from the dated archive. The scan header prints Beijing time
                    (08:01) and carries its <em>own</em> spot $78,920 with 24h
                    +0.57% and H/L $79,200 / $77,600 — the pinned live-tape
                    anchor at 00:05Z reads spot $78,856.54 and +0.31% on its own
                    1,441-row window. The two are different instruments on
                    different windows and are <b>not</b> reconciled to each
                    other anywhere in this note; each is quoted with its source
                    attached. Closes are in-progress bars on every frame.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is unchanged in shape and marginally stronger in
              level: <span className="dn-tag bull">18 of 20 cells
              positive</span>, with the daily ladder at{' '}
              <span className="dn-tag bull">10 of 10</span> and the only two
              negatives both on the weekly SMA side. Daily SMAs sit at{' '}
              <span className="dn-tag bull">D-SMA20 $69,655.56 (+13.21%)</span>,{' '}
              <span className="dn-tag bull">D-SMA50 $66,417.64 (+18.73%)</span>,{' '}
              <span className="dn-tag bull">D-SMA100 $66,189.48 (+19.14%)</span>,{' '}
              <span className="dn-tag bull">D-SMA150 $69,395.14 (+13.63%)</span>,{' '}
              <span className="dn-tag bull">D-SMA200 $69,221.34 (+13.92%)</span>;
              daily EMAs at{' '}
              <span className="dn-tag bull">D-EMA20 $71,892.03 (+9.69%)</span>,{' '}
              <span className="dn-tag bull">D-EMA50 $68,172.94 (+15.67%)</span>,{' '}
              <span className="dn-tag bull">D-EMA100 $68,078.49 (+15.83%)</span>,{' '}
              <span className="dn-tag bull">D-EMA150 $69,789.50 (+12.99%)</span>,{' '}
              <span className="dn-tag bull">D-EMA200 $71,983.92 (+9.55%)</span>.
              Weekly SMAs:{' '}
              <span className="dn-tag bull">W-SMA20 $69,918.01 (+12.78%)</span>,{' '}
              <span className="dn-tag bear">W-SMA50 $81,058.11 (−2.72%)</span>,{' '}
              <span className="dn-tag bear">W-SMA100 $88,974.33 (−11.37%)</span>,{' '}
              <span className="dn-tag bull">W-SMA150 $77,791.16 (+1.37%)</span>,{' '}
              <span className="dn-tag bull">W-SMA200 $64,560.94 (+22.14%)</span>.
              Weekly EMAs:{' '}
              <span className="dn-tag bull">W-EMA20 $70,203.47 (+12.33%)</span>,{' '}
              <span className="dn-tag bull">W-EMA50 $77,312.40 (+2.00%)</span>,{' '}
              <span className="dn-tag bull">W-EMA100 $78,455.51 (+0.51%)</span>,{' '}
              <span className="dn-tag bull">W-EMA150 $73,950.68 (+6.63%)</span>,{' '}
              <span className="dn-tag bull">W-EMA200 $68,711.83 (+14.76%)</span>.
              Offsets are computed against the pinned live spot $78,856.54 off
              a parquet whose last bar is 2026-08-27 00:05Z close $78,880.00 —
              the last daily bar and the last weekly bar are both in-progress,
              so every weekly cell moves again at the 08-30 settle.{' '}
              <span className="dn-tag">D-EMA400 $78,240.35 (+0.79%)</span> and{' '}
              <span className="dn-tag">W-EMA100 $78,455.51 (+0.51%)</span>{' '}
              bracket the shelf the trade was designed around; both sit above
              the $78,200 entry and below spot, which is the geometry the
              framework wanted and did not have yesterday.
            </p>

            <p>
              The cycle floor is a disclosed fallback for the second session
              running: <span className="dn-tag stale">weekly_200sma.json is
              absent</span>, and weekly_200sma_state.json is stale to
              2026-07-06 and is not leaned on. On the <em>settled</em> weekly
              basis — the last completed W-SUN bar, 2026-08-23 — W-SMA200 reads{' '}
              <span className="dn-tag">$64,269.62</span>, which reconciles
              exactly to ma200w_trap_watch_state.json (recomputed
              2026-08-24, <code>consecutive_above</code> = 1 with the streak
              starting 2026-08-23). Against that floor the settled 08-23 close
              $77,719.10 sits +20.93% above, and the pinned live spot sits{' '}
              <span className="dn-tag bull">+22.70%</span> above, so an{' '}
              <span className="dn-tag">18.50% decline</span> reaches it. The
              in-progress-week variant, which folds the unfinished 08-30 bar
              into the 200-observation window, gives{' '}
              <span className="dn-tag">$64,560.94</span>, spot +22.14%, an
              18.13% decline — both are printed and the settled basis is the
              published one. On the settled series the current ratio 1.226964
              is strictly higher than{' '}
              <span className="dn-tag">40 of 165 weekly observations</span>{' '}
              (<span className="dn-tag">24.2%</span>, the strict empirical
              percentile and the published one). Inserting the live spot as an
              added 166th observation puts it at rank{' '}
              <span className="dn-tag">41/166 = 24.7th</span> — the denominator
              grows with the insertion, so 41/165 is not a valid reading of
              either convention. And{' '}
              <span className="dn-tag">10 of 165 weekly closes (6.1%)</span>{' '}
              sit below the floor. That 6.1% is scoped to a Binance-perp
              parquet beginning 2019-09-08 — it is not BTC&rsquo;s full history
              and is not comparable to the ~9% long-run figure the framework
              cites. Nothing about this level moved this session; it is carried
              because it is the line that would reframe the rest, not because
              it is near.
            </p>

            <h2 className="dn-sec">
              Dealer map{' '}
              <span className="dn-roman">III · clamp DEEPENED +35.55M to +287.90M footed — largest step since the 08-22 panel, NOT a lineage-maximum step; the level is the second-deepest available reading, a separate ordinal · the shelf under the entry REPAIRED and the 08-26 watch closes favourably · front returned positive after one negative front</span>
            </h2>

            <p>
              Footed across the 11-line expiry strip the aggregate is{' '}
              <span className="dn-tag bull">+287.90M</span>, reconciling to{' '}
              <code>gex_summary.json</code> <code>net_gex</code>{' '}
              $287,897,984.62 — read from the copy now pinned into the dated
              archive at{' '}
              <code>/opt/desk-note/snapshots/2026-08-27-0007/gex_summary.json</code>{' '}
              (sha256 <code>f86c52ae…13d49a</code>, internal stamp 00:01Z,
              byte-identical to the rolling file it was taken from), because
              the rolling path is overwritten hourly and would not have
              survived. Against 08-26&rsquo;s +252.35M that is{' '}
              <span className="dn-tag bull">+35.55M in one session</span>. Two
              ordinals are involved here and they are <em>not</em> the same
              claim. On <em>daily change</em>, +35.55M is the largest step
              since the 08-22 panel (08-22→08-23 −7.54M, →08-24 +5.32M, →08-25
              +9.15M, →08-26 −4.49M), and it is nowhere near a lineage
              maximum: the 08-18 note recorded +28.06M → +128.86M ={' '}
              <span className="dn-tag">+100.80M</span> in one session, and the
              08-19 panel&rsquo;s +128.92M → the 08-20 panel&rsquo;s +254.15M
              is another <span className="dn-tag">+125.24M</span>. Any
              &ldquo;largest step of the lineage&rdquo; framing is retired
              here. On <em>level</em>, it is separately the{' '}
              <span className="dn-tag">second-deepest available reading</span>:
              it clears 07-23 +283.46M by +4.44M and is exceeded only by 07-22
              +313.63M, with 08-25 +256.84M, 08-20 +254.15M, 08-26 +252.35M,
              08-22 +249.91M, 08-24 +247.69M, 08-23 +242.37M and 07-24
              +235.95M all below. It is <b>not</b> a lineage maximum on either
              ordinal, and the <span className="dn-tag stale">2026-08-21
              archive remains absent</span>, so the level ordinal is over
              available panels rather than over every day. One reconciliation
              note that differs from yesterday: on 08-26 the headline card and
              the 49-point strike-profile sum matched exactly, and today they
              do not — headline <span className="dn-tag">+280.6M</span> against
              a profile sum of <span className="dn-tag">+281.1237M</span>, a
              $0.52M gap, with the footed strip{' '}
              <span className="dn-tag">$6.774301M above the profile and
              $7.297984M above the headline</span> — not equidistant from the
              two. Three bases, none blended anywhere in this note.
            </p>

            <p>
              The part that matters to the modeled position is directly under
              it.
              The 08-26 note set an explicit watch — <em>&ldquo;if $78,000
              itself turns negative the retest-hold loses its structural
              anchor&rdquo;</em> — after recording $77,000 flipping to −0.967M,
              $77,500 deepening to −2.790M, $78,500 flipping to −0.969M and
              $78,000 easing −2.421M. Every one of those moved back this
              session. <span className="dn-tag bull">$78,000: +24.7416M →
              +29.7154M (+4.97M)</span>,{' '}
              <span className="dn-tag bull">$77,500: −2.7903M → −1.1818M
              (+1.61M)</span>,{' '}
              <span className="dn-tag bull">$77,000: −0.9668M → −0.3640M
              (+0.60M)</span>, with $78,500 essentially unchanged at −0.9615M.
              The watch closes favourably and the stop now sits under a shelf
              that is measurably <em>better</em> defended than when the R/R was
              computed — the exact inverse of the caveat the 08-26 note
              attached to that ratio. This claim is scoped to the named strikes
              and does not generalise: on the 25 common strikes below spot the
              aggregate still <em>thinned</em>{' '}
              <span className="dn-tag bear">−5.07M</span> on a 15-up / 10-down
              split, because the deep shelf gave up what the near shelf gained
              — $74,000 −4.62M, $75,000 −4.11M, $73,000 −1.56M, $70,000 −1.54M.
              Near shelf repaired, deep shelf thinned, and &ldquo;the shelf
              under spot improved&rdquo; in unqualified form is retired here
              the same way its mirror-image was on 08-26.
            </p>

            <p>
              Above spot the 24 common strikes added{' '}
              <span className="dn-tag bull">+40.31M</span> on a 20-up / 4-down
              split, with all four decliners named — $83,000, $95,000, $100,000
              and $102,000. All ten top walls are positive and sum{' '}
              <span className="dn-tag">+230.40M</span>, which is 80.03% of the
              footed strip and 81.96% of the 49-point profile: $80,000{' '}
              <span className="dn-tag bull">+52.06M</span>, $82,000 +41.04M,
              $78,000 +29.72M, $90,000 +18.33M, $81,000 +18.24M, $79,000
              +17.71M, $85,000 +17.30M, $84,000 +15.09M, $100,000 +11.36M,
              $70,000 +9.55M. The deepest negative on the whole profile is{' '}
              <span className="dn-tag bear">$60,000 −5.38M</span>, 23.9% below
              spot. The 0-γ flip rose $355.88 to{' '}
              <span className="dn-tag">$64,581.07</span>; spot is +22.1047%
              above it and the file&rsquo;s own Deribit index $79,202.81 is
              +22.6409% above it, both positive, and an 18.10% decline from
              spot reaches it. By expiry, the front line{' '}
              <span className="dn-tag bull">27AUG26 at 0.3 DTE is POSITIVE
              +14.14M</span> and has <em>not yet settled</em> — it settles
              today at 08:00Z, 7h55m after this note&rsquo;s 00:05Z anchor, so
              it is a snapshot at current IV and not a resolved line. It
              returns the front to positive after exactly{' '}
              <span className="dn-tag">one</span> negative front print,
              26AUG26 −2.04M on the 08-26 panel — not two consecutive. The
              08-25 and 08-24 panels&rsquo; own frontmost lines were 25AUG26{' '}
              <span className="dn-tag bull">+9.37M</span> and 24AUG26{' '}
              <span className="dn-tag bull">+9.67M</span>, both positive; the
              −1.21M sometimes attached to 24AUG26 was its 1.3-DTE value on the
              08-23 panel, whose frontmost line was 23AUG26 +5.76M, and it is
              therefore an earlier back-dated observation rather than a
              consecutive frontmost print.{' '}
              <span className="dn-tag">28AUG26 +83.36M</span> at 1.3 DTE is
              28.96% of the footed strip and settles 2026-08-28 08:00Z; its
              share has now fallen five sessions running (36.17% → 33.71% →
              31.28% → 29.37% → 28.96%) <em>while its absolute size rose
              +9.24M this session</em>, so the falling share is compositional
              arithmetic and not decay — the strip grew faster than the line
              did. <span className="dn-tag">25SEP26 +90.00M (31.26%)</span> is
              now the largest single line on the board. Every by-expiry figure
              is a snapshot at current IV, not a guaranteed roll-off.
            </p>

            <p>
              On volatility: chain-median IV reads{' '}
              <span className="dn-tag">45.1% across 960 instruments</span>{' '}
              (966 on 08-26, so six instruments left the chain), against 30D
              close-to-close RV of{' '}
              <span className="dn-tag">41.8790%</span> computed at the 00:05Z
              anchor. The convention is stated because it is load-bearing: the
              published lineage includes the in-progress daily bar, and that
              convention reproduces both prior notes <em>exactly</em> —
              08-26&rsquo;s 41.8922% at its 00:05Z anchor and 08-25&rsquo;s
              43.1981% at its 00:04Z anchor. The completed-bars-only variant
              today is 41.7978% and is not the published number. Richness is{' '}
              <span className="dn-tag">+3.2210pt</span>, widened{' '}
              <span className="dn-tag">+0.9151pt</span> from 08-26&rsquo;s
              published +2.3059pt, and the decomposition is nearly one-sided:{' '}
              <span className="dn-tag">ΔIV +0.9019pt supplies 98.56%</span> of
              the move against ΔRV of just −0.0132pt, the two footing exactly to
              the +0.9151pt. Vol got marked up; realised barely moved. The
              arithmetic is done against the prior note&rsquo;s <em>published</em>{' '}
              spread rather than a recomputed one, which fixes the prior IV at
              the sub-decimal 44.1981% that +2.3059pt implies — the GEX card
              itself printed 44.2% then and 45.1% now, one decimal, so every
              IV-derived figure in this paragraph carries ±0.05pt —{' '}
              <span className="dn-tag">±5 volatility basis points</span> on
              today&rsquo;s rounded card input, and up to{' '}
              <span className="dn-tag">±10</span> where two independently
              rounded card values are differenced. The comparison is good to
              about five volatility basis points of spread, not better.
            </p>

            <h2 className="dn-sec">
              Macro &amp; cross-asset{' '}
              <span className="dn-roman">IV · the double-episodic risk-off of 08-25 has fully unwound — both daily yields −6bp, 10Y no longer episodic, TIPS real episodic on the DOWNSIDE · correlation regime loosened further to 0.182</span>
            </h2>

            <p>
              This is a fresh weekday FRED cut, the second in three notes, and
              it reverses the hostile print the desk has been carrying since
              08-25. The 10Y nominal is{' '}
              <span className="dn-tag bull">4.64%, −6.0bp</span>, regime z
              +1.67 with episodic z −0.44 — <b>no longer flagged episodic</b>{' '}
              after the 08-25 spike to +5bp. The 10Y TIPS real yield is{' '}
              <span className="dn-tag bull">2.32%, −6.0bp</span>, regime z
              +1.62, and it <em>is</em> flagged episodic at{' '}
              <span className="dn-tag bull">−1.91</span> — but on the opposite
              side from 08-25: real yields are now falling fast enough to trip
              the filter downward, which is the risk-on direction for BTC.
              Both rows still carry the RISK-OFF regime tag on their 252-day z,
              and the distinction between a stretched <em>level</em> and a
              favourable <em>impulse</em> is the whole content of this
              paragraph. Elsewhere in Tier 1: 5Y5Y breakeven 2.33% flat
              (z +1.61), HY OAS{' '}
              <span className="dn-tag bull">2.70% RISK-ON</span> (z −1.03),
              NFCI −0.566 RISK-ON (z −1.78), MOVE 69.4 (−2.48, neutral), DXY
              98.90 (−0.10, neutral). The one persistent hostile line is{' '}
              <span className="dn-tag bear">Fed net liquidity $5.792T,
              draining at episodic z −2.45</span> and tagged RISK-OFF. Today&rsquo;s
              full episodic set is TIPS real −1.91, Fed net liquidity −2.45 and
              USD/CNY −2.29. The highest <em>fresh daily</em> Tier-1 regime z
              is the 10Y at +1.67; the board&rsquo;s highest number is JGB 10Y
              at +2.42 EXTREME RISK-OFF, and that row is{' '}
              <span className="dn-tag stale">FRED monthly, stale 86 days — do
              not lean</span>.
            </p>

            <p>
              Cross-asset stays{' '}
              <span className="dn-tag">IDIOSYNCRATIC</span> and loosened
              further, mean off-diagonal |r| falling{' '}
              <span className="dn-tag">0.198 → 0.182</span> against a &lt;0.25
              threshold — 0.198 being the immediate-prior 08-26 dated summary,
              not the 0.205 that note carried forward from 08-25. BTC&rsquo;s 7d ranking is a metals cluster again —{' '}
              <span className="dn-tag">PLAT +0.336</span>, SILVER +0.244, GOLD
              +0.240, PALL +0.240 — with TSLA +0.187 fifth, SP500 +0.141 ninth
              and <span className="dn-tag">NQ eleventh at +0.109</span>. This is
              co-movement only: it identifies neither a driver nor hedge
              effectiveness, and it is <em>not</em> an equity-last ranking,
              since META −0.003 and AAPL +0.010 sit at the bottom while TSLA
              outranks both metals-adjacent industrials and the indices. On
              levels, BTC is <span className="dn-tag bull">+13.80% over the 7d
              window</span> against NQ −0.06% and SP500 −0.01%, a{' '}
              <span className="dn-tag">13.86pt</span> lead over NQ. The
              immediate-prior 08-26 dated summary printed BTC +21.72% against
              NQ −1.07%, a <span className="dn-tag">22.79pt</span> lead, so the
              sequence is 22.79pt → 13.86pt. The window rolling forward off the
              08-20 base is the <em>dominant</em> cause and not the only one —
              both endpoints moved, since NQ went −1.07% → −0.06% as well —
              stated so the narrowing is not read as a pure give-back by BTC.
              Two of the seven days carry no equity prints.
            </p>

            <h2 className="dn-sec">
              The book{' '}
              <span className="dn-roman">V · retest-hold long — limit price traded at $78,200 on 08-26 12:30Z, recorded as a MODELED/PAPER fill of a desk instruction, NOT a broker-confirmed execution · stop never approached · modeled MFE +0.986R gross, $861.30 short of first target · chase-short stood down a sixth session, and this time it moved AWAY</span>
            </h2>

            <p>
              The 08-25 framework specified an entry and the 08-26 note gave it
              a deadline; the tape resolved it with eleven and a half hours to
              spare. On the adopted exchange-bar basis the first print at or
              below $78,200 is the{' '}
              <span className="dn-tag">08-26 12:30Z bar, low $77,906.40</span>{' '}
              (the monitor tape puts its first touch one minute later at 12:31Z
              on the same low — a basis discrepancy of one minute, disclosed
              because the 08-26 note was decided by a basis disagreement of
              $91.90). What followed removes the ambiguity that a marginal
              touch would carry: <span className="dn-tag">217 exchange
              one-minute bars</span> traded at or below the limit and the tape
              swept <span className="dn-tag">$600.00 through it</span> to{' '}
              $77,600.00 at 15:04Z. A limit that is swept six hundred dollars
              through is not a queue-position question. But marketability is
              the <em>only</em> thing the tape proves. It does not prove that
              an order existed, was submitted, was routed, stayed working, was
              not cancelled, filled in whole or in part, at what average price,
              or in whose account — none of which is loaded in this cut.
              Everything downstream in this section is therefore an{' '}
              <b>assumed/paper execution of a desk instruction</b> and an{' '}
              <b>unreconciled modeled 0.2R position</b>, and every R figure
              below inherits that label.
            </p>

            <p>
              Neither exit rule fired. The stop is a 1d-close condition at{' '}
              <span className="dn-tag">$77,248.42</span> — a fixed number, not
              a moving line — and the deepest intraday print of the whole
              post-touch window stopped{' '}
              <span className="dn-tag bull">$351.58 above it</span>, with the
              08-26 daily close $78,989.40 settling $1,740.98 clear; the
              close-basis rule was never even tested. The $80,000 first target
              was not tagged: the post-touch high is{' '}
              <span className="dn-tag">$79,138.70 at 08-26 23:46Z</span>,{' '}
              $861.30 short. In R terms against the $951.58 of risk per unit,
              the modeled trade has run{' '}
              <span className="dn-tag bull">MFE +0.986R gross</span> and{' '}
              <span className="dn-tag bear">MAE −0.631R gross</span>, and marks
              at the anchor at{' '}
              <span className="dn-tag bull">+$656.54 = +0.690R gross =
              +0.138R at the stated 0.2R sizing</span> — all four figures
              computed from the instructed limit price against the tape, with
              no average price or fill record to reconcile them to. Worth
              recording plainly: the modeled MFE came within 1.4% of a full R
              and the desk booked nothing,
              because no partial-target rule was ever written into this
              framework. That is a design gap, and it is the one this session
              exposes — the same way 08-25 exposed a missing price basis and
              08-26 a missing order duration. It is fixed below rather than
              noted and left.
            </p>

            <p>
              On the lineage claim, the honest version is narrower than it
              looks. This is <b>not</b> the first fill of the run: 2026-08-06
              armed a 0.2R starter and filled it at market. What is new is that
              the complete chain ran as pre-published — a rule with a named
              basis and duration fired, and its separately-specified limit
              price traded without being re-priced — after two consecutive
              frameworks (2026-08-18 and 2026-08-25&rsquo;s predecessor) were
              disposed of unfilled and a flat book sat through a +22% week.
              The ledger is <em>appended to, not rewritten</em>. It runs one
              row per dated event, and the 08-26 note closed it at{' '}
              <span className="dn-tag">4 events / 3 near-misses / 1
              disposal</span> with row 4 dated 2026-08-26 as the retest-hold
              near-miss ($412.26 live gap). Row 4 keeps that classification
              permanently — a dated near-miss cannot retroactively become a
              fill because the framework it belonged to later resolved. What
              today adds is{' '}
              <span className="dn-tag">row 5, dated 2026-08-27: resolution of
              that framework by a modeled/paper fill</span>, giving{' '}
              <span className="dn-tag">5 events / 3 near-misses / 1 disposal /
              1 modeled fill</span>. The $151.00 and $210.30 historical misses
              on rows carried forward stay exactly as dated; only the forward
              gap resolved.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · retest-hold · <b>MODELED / PAPER FILL</b> · 0.2R · unreconciled · the limit PRICE traded; no broker confirmation, order state or position reconciliation is loaded · stop and first target both unchanged and untouched</span>
              <div className="dn-trade-name">
                Retest-hold long at the $78,000 / D-EMA400 / W-EMA100 shelf — the limit price traded at 12:30Z on 08-26, 11h30m before the instruction&rsquo;s own expiry
              </div>
              <div className="dn-thesis">
                The entry, quoted from the 08-25 note and carried unchanged
                through 08-26:{' '}
                <em>&ldquo;limit ≈$78,200 · 0.2R · no chase.&rdquo;</em> It
                traded. On the adopted exchange-bar basis the first qualifying
                print is the 08-26 12:30Z bar (low $77,906.40); 217 one-minute
                bars printed at or below $78,200 across the session and the low
                of the whole instruction window was $77,600.00 at 15:04Z, a
                $600.00 sweep through the limit. The limit was never re-priced
                and the tape was never chased — the modeled fill is booked at
                the number that was written down two sessions earlier, which is
                an assumption about a desk instruction and not a reported
                average price. The 08-26 expiry
                (&ldquo;held until the 2026-08-27 00:00Z daily close, then
                lapses&rdquo;) did not need to fire, but it was the right
                addition and stays in the method. Everything the framework
                asked for as confirmation has since arrived except one: funding
                is 28h06m off the cap against a 434-minute gate, OI contracted
                −1,040.0 BTC into an up-session, the SM tape is certifiable
                after five consecutive notes flagged it uncertifiable, and the
                $78,000 gamma wall the
                trade is anchored to <em>strengthened</em> +4.97M to +29.72M,
                closing the 08-26 watch favourably. The exception is retail,
                which re-crowded +2.04pt to 52.06% and peaked twelve minutes
                before the anchor. The modeled position is carried on the
                levels as written, with a partial-target rule added below
                because its absence converted a +0.986R modeled excursion into
                nothing.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status (desk instruction · MODELED, NOT broker-verified)</span><span className="dn-lvl-v bull">MODELED / PAPER FILL · assumed long 0.2R at the instructed $78,200 · assumed fill timestamp 2026-08-26 12:30Z on the exchange-bar basis (12:31Z on the monitor tape, same low) · <b>no order blotter, submission ID, working/cancelled flag, partial-fill record, average price, account attribution or execution feed is loaded in this cut</b> — the tape trading $600.00 through a desk-instructed limit proves <em>marketability</em> and removes queue-position ambiguity, and proves nothing about order existence, routing, status, quantity or ownership. The 0.2R position below is an unreconciled model, not a reconciled book state</span></div>
                <div><span className="dn-lvl-k">marketability evidence (NOT execution evidence)</span><span className="dn-lvl-v">217 exchange one-minute bars at or below $78,200 inside the 08-26 00:00Z–08-27 00:00Z instruction window · first touch exchange 12:30Z low $77,906.40 (monitor @12:31Z, same low) · window low exchange $77,600.00 @15:04Z (monitor $77,615.80 @15:06Z) · window high exchange $79,200.00 @02:26Z (monitor @02:27Z) — every one of these is a price-path fact, dual-based throughout</span></div>
                <div><span className="dn-lvl-k">stop (unchanged · fixed number, not an MA)</span><span className="dn-lvl-v bear">1d close &lt; $77,248.42 — NOT approached: deepest post-touch print $77,600.00 is $351.58 above it, and the 08-26 daily close $78,989.40 is $1,740.98 clear · from the $78,200 entry that is $951.58 of risk; from the pinned spot $78,856.54 it is 2.04% below</span></div>
                <div><span className="dn-lvl-k">modeled excursion since the assumed fill</span><span className="dn-lvl-v">MFE $79,138.70 @08-26 23:46Z = +$938.70 = <b>+0.986R gross</b>, $861.30 short of the $80,000 target · MAE $77,600.00 @08-26 15:04Z = −$600.00 = −0.631R gross · mark at anchor +$656.54 = +0.690R gross = +0.138R at 0.2R sizing — all computed off the instructed $78,200, since no average price exists to compute them off</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v bull">$80,000 fixed (+2.30% from the limit, +1.45% from spot, untagged) · then W-SMA50 — <b>quoted at all three vintages</b>: $81,784.71 as written 08-25, $81,049.16 on 08-26, $81,058.11 recomputed today (it moved +$8.95 <em>up</em> overnight). A moving-MA target remains a flagged defect, carried openly rather than quietly re-based</span></div>
                <div><span className="dn-lvl-k">NEW — partial-target rule (defect closed at the point of writing)</span><span className="dn-lvl-v bull">take half at $79,600 and trail the remainder to breakeven $78,200. The framework specified an entry, a stop, two targets and no instruction for the space between them, so a +0.986R modeled excursion converted to nothing. One rule, written before the next approach, not after it</span></div>
                <div><span className="dn-lvl-k">disposal rule (unchanged)</span><span className="dn-lvl-v">a 1d close below $77,248.42 retires it and the shelf-hold thesis is simply wrong · the &ldquo;1d close above $81,784.71 without a fill&rdquo; branch is now <b>moot</b> — it was a no-fill disposal branch and the limit price traded</span></div>
                <div><span className="dn-lvl-k">gamma shelf under the entry (08-26 watch · RESOLVED favourably)</span><span className="dn-lvl-v bull">$78,000 +24.7416M → +29.7154M · $77,500 −2.7903M → −1.1818M · $77,000 −0.9668M → −0.3640M · $78,500 flat at −0.9615M — the watch condition (&ldquo;if $78,000 itself turns negative&rdquo;) did not fire and moved the other way. Watch stays open at the same trigger</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v bear">do not add on strength, do not move the stop down to survive a retest, and do not read the +35.55M clamp deepening as a reason to size up — it is a dealer-book fact, not a position sizing input</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R (illustrative, unchanged inputs):</b> limit $78,200, stop
                $77,248.42 = $951.58 risk; first target $80,000 = $1,800 reward
                = <b>1.8916:1</b>. The ratio is arithmetic on chosen levels, not
                evidence. Unlike 08-26, it is no longer flattered by a
                deteriorating shelf: the strikes immediately beneath the stop
                repaired this session, so the number is at least computed
                against a floor that is better defended than when it was set —
                while the 25 common strikes below spot still thinned −5.07M in
                aggregate on the deep end, which is the honest counterweight.{' '}
                <b>Hard rule, restated:</b> the stop is not moved down to
                survive the tape, the modeled position is not added to because
                the first excursion was favourable, and the new partial-target
                rule
                applies to the <em>next</em> approach, not retroactively to the
                one the desk already sat through. A rule written after the fact
                to book a move that already happened is not a rule.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">ledger · near-miss / disposal record · <b>FIFTH EVENT ADDED — first modeled-fill resolution</b> · row unit = one dated event, per the 08-25 definition · rows 1–4 are dated history and are NOT reclassified</span>
              <div className="dn-trade-name">
                Near-miss ledger — the fifth event, and the first one that resolves rather than misses
              </div>
              <div className="dn-thesis">
                The 08-26 note closed this ledger at <b>4 events / 3 near-misses /
                1 disposal</b>. Today appends row 5 and changes nothing above it.
                That is the discipline the ledger exists for: row 4 is dated
                2026-08-26 and records a framework that armed correctly and could
                not be filled under its own rules by that note&rsquo;s anchor. The
                framework resolving one session later does not un-happen the
                near-miss, and a ledger that lets later outcomes rewrite earlier
                rows is not a record. The counts are now{' '}
                <b>5 events / 3 near-misses / 1 disposal / 1 modeled fill</b>. The
                08-19 scout (entry ≈$64,632, stop $63,301, targets $66,343 /
                $66,391) stays <b>EXPIRED UNFILLED</b> at 10.03R gross / ≈2.01R at
                stated 0.2R sizing, unchanged and not re-litigated.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">row 1 · 2026-08-23 (near-miss #1)</span><span className="dn-lvl-v">pullback long leg 2 — lowest exchange 1h close $76,020.30, <b>$20.30</b> above the $76,000 band top</span></div>
                <div><span className="dn-lvl-k">row 2 · 2026-08-24 (near-miss #2)</span><span className="dn-lvl-v">pullback long first target $80,000 — 24h high $79,991.00, <b>$9.00</b> short, on a framework that had never armed</span></div>
                <div><span className="dn-lvl-k">row 3 · 2026-08-25 (disposal)</span><span className="dn-lvl-v">pullback long RETIRED UNFILLED on the pre-committed disposal rule — a disposal, not a near-miss; no fill price exists so no R figure is computed</span></div>
                <div><span className="dn-lvl-k">row 4 · 2026-08-26 (near-miss #3 · UNCHANGED)</span><span className="dn-lvl-v bear">retest-hold long ARMED and not filled by that note&rsquo;s anchor — post-arm low $78,351.00 vs the ≈$78,200 limit = <b>$151.00</b>; strict reading $210.30; live gap at that anchor $412.26. <b>This row keeps its near-miss classification permanently.</b> Its framework resolved on 08-26 12:30Z, seven hours after that note was published — a later resolution, not a retroactive fill</span></div>
                <div><span className="dn-lvl-k">row 5 · 2026-08-27 (NEW · modeled fill, first resolution)</span><span className="dn-lvl-v bull">row 4&rsquo;s framework resolved: the ≈$78,200 limit price traded on 08-26 at 12:30Z and swept $600.00 through, recorded as a <b>modeled/paper fill</b> of a desk instruction · no broker confirmation, so the R figures attached to it (+0.986R MFE, −0.631R MAE, +0.690R mark) are modeled and unreconciled</span></div>
                <div><span className="dn-lvl-k">open design defects carried</span><span className="dn-lvl-v"><b>(a)</b> the <code>net_btc</code> gate remains unsound while the SM feed produces roster discontinuities — though this session produced no <code>net_btc</code> discontinuity · <b>(b)</b> price basis + duration on every band gate — closed 08-25/08-26 · <b>(c)</b> NEW: a framework specified with an entry, a stop and targets but no instruction between them converts an excursion into nothing — closed today by the $79,600 partial rule · <b>(d)</b> a target quoted as a moving MA re-bases underneath the framework — still flagged, not closed · <b>(e)</b> NEW: execution state cannot be asserted from price-path data; every fill claim must inherit a modeled/unreconciled label until a blotter is loaded — flagged and applied throughout this note</span></div>
              </div>
              <div className="dn-gating">
                <b>Process note:</b> five events in nine days, and the first one to
                resolve did so at the price written down two sessions earlier
                without a re-price or a chase. That is the method working. It is
                also, on the loaded data, a <em>modeled</em> resolution — the
                ledger records what the tape did against an instruction, and it
                does not record a broker fill, because no broker feed has ever
                been loaded into this run.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · chase-short · STOOD DOWN — sixth consecutive session · for the first time in the sequence the two legs moved in OPPOSITE directions, and the gamma leg moved sharply AWAY</span>
              <div className="dn-trade-name">
                Chase-short — stood down again, and this session the case got materially worse rather than marginally better
              </div>
              <div className="dn-thesis">
                The price leg improved trivially and the gamma leg deteriorated
                enormously. Spot needs an <span className="dn-tag">18.10%</span>{' '}
                decline to reach the 0-γ flip $64,581.07, against 18.30% on
                08-26 — 0.20 percentage points closer on a leg that needs
                eighteen. The gamma leg, which requires the footed aggregate to
                turn negative or collapse toward zero, went the other way by{' '}
                <span className="dn-tag">+35.55M to +287.90M</span> — the
                largest single-session deepening <em>since the 08-22 panel</em>,
                not of the lineage (08-17→08-18 stepped +100.80M and
                08-19→08-20 stepped +125.24M), and separately the
                second-deepest absolute reading available. The five prior
                sessions of this stand-down all saw the two legs move together
                or nearly so; this is the first where they split, and the split
                is heavily against the short. Add that the front expiry
                returned to positive (+14.14M) after{' '}
                <em>one</em> negative front print (26AUG26 −2.04M), and the two
                dated settlement candidates that were the short&rsquo;s best
                near-term hope are now one currently positive 0.3-DTE line{' '}
                <em>due to settle at 08:00Z, 7h55m after this anchor and
                therefore unresolved here</em>, and one +83.36M line settling
                tomorrow.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">STOOD DOWN — no short contemplated at this snapshot, and no short contemplated against the modeled long in the same book</span></div>
                <div><span className="dn-lvl-k">price leg (unmet · marginally closer)</span><span className="dn-lvl-v">spot within reach of the 0-γ flip $64,581.07 — an 18.10% decline reaches it (was 18.30%); spot is +22.1047% above it, +22.6409% off the file&rsquo;s Deribit index $79,202.81</span></div>
                <div><span className="dn-lvl-k">gamma leg (unmet · sharply FURTHER)</span><span className="dn-lvl-v bear">footed aggregate turning negative or collapsing toward zero — currently +287.90M (headline card +280.6M, 49-point profile +281.1237M), DEEPENED +35.55M (largest step since the 08-22 panel; NOT a lineage-maximum step) · 27AUG26 reads +14.14M at the anchor and settles today 08:00Z — unsettled at the time of writing · 28AUG26 (+83.36M / 28.96%) settles 2026-08-28 08:00Z</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v bear">do not read the 1d TD9 SELL, the 8h water-up death cross (4 bars) or the three top divergences as a short trigger — they are mean-reversion evidence inside a book that is 18-of-20 long on the MA matrix, with zero short frames on either MTF convention and a dealer clamp at its second-deepest reading</span></div>
              </div>
              <div className="dn-gating">
                <b>Both legs unmet, and the composite moved away.</b> The desk
                has now stood this down six sessions running. The discipline
                that matters is not repeating the stand-down — it is recording
                that a leg moved <em>against</em> the case this session rather
                than quietly re-quoting the price leg&rsquo;s 0.20pt of
                improvement as if the framework got closer. It did not.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the entry rule&rsquo;s price condition was met end-to-end · the de-crowding gate cleared · the shelf watch resolved favourably · retail and the 1d TD9 are the two standing objections</span>
            </h2>

            <p>
              Of the 08-26 conditions: the{' '}
              <b>≈$78,200 limit PRICE TRADED</b> at 12:30Z on 08-26 (recorded
              as a modeled fill; no broker confirmation is loaded), with the
              instruction&rsquo;s own expiry unused; the <b>stop did not
              fire</b> on either an intraday or a close basis; the{' '}
              <b>$80,000 first target did not fire</b>, missing by $861.30 at
              the 23:46Z high; the{' '}
              <b>no-fill disposal branch is moot</b>; the{' '}
              <b>434-minute de-crowding gate CLEARED</b> at 1,686 elapsed
              minutes, 3.88× its threshold; the{' '}
              <b>$78,000-turns-negative shelf watch DID NOT FIRE</b> and
              resolved the other way at +29.72M; the{' '}
              <b>chase-short price and gamma legs both remain unmet</b>, with
              the gamma leg moving sharply further away; the{' '}
              <b>SM certifiability condition FIRED</b> for the first time, at
              16.34% single-minute concentration after five consecutive notes
              were flagged uncertifiable at 98.12% / 81.76% / 93.28% / 72.50%
              on 08-23 / 08-24 / 08-25 / 08-26 (the run is five sessions long;
              it is not a run above 80%). <em>One entry rule&rsquo;s price
              condition was met exactly as pre-published, two gates the desk
              had been waiting on cleared, one watch resolved favourably, and
              no exit rule was tested.</em> The conditions reset around a
              modeled position rather than a pending one:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Retest-hold long (MODELED position) — stop (unchanged)</td><td className="bear">1d close &lt; $77,248.42</td><td>flatten · the shelf-hold thesis is falsified and the trade is retired, not re-based</td></tr>
                <tr><td>Retest-hold long — NEW partial-target rule</td><td className="bull">$79,600 touch</td><td>take half, trail the remainder to breakeven $78,200 · written now because its absence converted a +0.986R modeled excursion into nothing</td></tr>
                <tr><td>Retest-hold long — first target</td><td className="bull">$80,000 fixed (+1.45% from spot; high stopped $861.30 short at 08-26 23:46Z)</td><td>take the balance · $80,000 also carries the largest wall on the board at +52.06M, so expect the tag to be contested</td></tr>
                <tr><td>Retest-hold long — second target</td><td>W-SMA50 · $81,058.11 today, $81,049.16 on 08-26, $81,784.71 as written 08-25</td><td>flagged defect: a moving-MA target. Quote all three vintages every session; do not silently re-base</td></tr>
                <tr><td>Gamma shelf under the entry (watch stays open)</td><td className="bear">$78,000 turning negative (currently +29.72M, strengthened +4.97M)</td><td>if it flips, the retest-hold loses its structural anchor and is reassessed <em>before</em> the stop is reached</td></tr>
                <tr><td>Retail crowding (standing objection)</td><td className="bear">52.06%, +2.04pt, 24h peak 52.10% twelve minutes before the anchor · 7d range 45.96% / 53.20%</td><td>no action at this level · a push through the 7d high 53.20% while price stalls under $80,000 is the configuration that would make the desk take the partial early rather than wait for $79,600</td></tr>
                <tr><td>Funding re-pin (the gate that just cleared)</td><td className="bull">currently +4.9560% ann, 28h06m off the cap · 0 / 1,441 capped rows</td><td>a return to the +10.95% cap for a sustained run re-arms the crowding objection · the 434-minute standard is now a two-way test, not a one-way gate</td></tr>
                <tr><td>1d TD9 SELL (printed) + 12h/1d RSI 80.9 / 80.4</td><td className="bear">printed at $78,920 on an in-progress daily bar</td><td>mean-reversion evidence, not a short trigger and not an exit trigger · it argues for taking the partial at $79,600 rather than holding for $80,000, which is exactly what the new rule does</td></tr>
                <tr><td>Chase-short</td><td className="stale">price leg 18.10% away; gamma leg +287.90M and deepening</td><td>stood down · no short against the modeled long in the same book</td></tr>
                <tr><td>Cycle floor (unchanged, carried not actioned)</td><td>W-SMA200 $64,269.62 settled basis · spot +22.70% above · 18.50% decline reaches it</td><td>no action · watch JSON absent for a second session, percentile self-computed and scoped to a 2019-09-08 parquet</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the $80,000 wall — the largest on the board at +52.06M,
                and the level the 08-26 high already failed under once — caps
                this move before the modeled position converts its excursion
                into realised R, or whether the cleared funding gate and the
                repaired shelf carry it through to the W-SMA50 band. The desk
                is modeled long at a number it wrote down two sessions before
                the tape offered it, which is the process working; it has also just
                watched +0.986R evaporate for want of a rule it had not written,
                which is the process failing in a different place
              </span>. Until then this note runs as written: the modeled long is
              carried on unchanged levels with a partial rule added at $79,600, the
              stop stays at the fixed $77,248.42 and is not moved to survive a
              retest, the chase-short is stood down a sixth session against
              legs that split away from it, and the two standing objections —
              retail crowding at 52.06% and a printed 1d TD9 SELL — are
              recorded as objections rather than argued away. The right read
              for the next 24h is <em>hold the levels, book the half, and do
              not confuse a good entry with a finished trade</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit
            </span>
            v1 was audited in place by codex (hostile-but-fair, single
            xhigh-effort call) and the record is at{' '}
            <code>audits/2026-08-27-desk-note.md</code>. Verdict:{' '}
            <b>BLOCK-CRITICAL — 2 CRITICAL + 5 MAJOR + 7 MINOR + 0 NIT</b>. All
            fourteen findings are applied here. Each one was closed by grep
            sweep over the full EN file rather than only at the cited lines;
            hits-before are counted over v1, hits-after over this file, and
            residual hits are listed where the surviving string carries the{' '}
            <em>opposite</em> (corrective) meaning. Every finding below is{' '}
            <b>RESOLVED</b>: no pattern retains its pre-fix meaning anywhere in
            the file.{' '}
            <b>DN-001 (CRITICAL — false lineage superlative on the +35.55M GEX
            step):</b> patterns <code>largest single-session step</code> /{' '}
            <code>largest single-session change</code> /{' '}
            <code>largest single-session deepening of the lineage</code> /{' '}
            <code>of the checked lineage by a wide margin</code> /{' '}
            <code>wide margin</code> — 4 hits before across the lead, the §III
            header, the §III body and the chase-short thesis; <b>0 after</b>.
            The claim is narrowed to &ldquo;largest step since the 08-22
            panel,&rdquo; the two larger lineage steps are now printed inline
            (08-17→08-18 +100.80M from the 08-18 note; 08-19 +128.92M →
            08-20 +254.15M = +125.24M), and the daily-change ordinal is stated
            separately from the level ordinal at all four sites.{' '}
            <code>largest step of the lineage</code> returns 1 hit, at the
            sentence retiring that framing. <b>RESOLVED.</b>{' '}
            <b>DN-002 (CRITICAL — 27AUG26 called settled 7h55m before
            settlement):</b> patterns <code>settled-positive</code> /{' '}
            <code>one settled</code> — 1 hit before in the chase-short thesis;{' '}
            <b>0 after</b>. It now reads as a currently positive 0.3-DTE line
            due to settle at 08:00Z, explicitly unresolved at the 00:05Z
            anchor, and the §III expiry paragraph and the chase-short gamma-leg
            row carry the same unsettled label. <b>RESOLVED.</b>{' '}
            <b>DN-003 (MAJOR — &ldquo;two consecutive negative fronts&rdquo;
            and &ldquo;front positive again&rdquo;):</b> patterns{' '}
            <code>two consecutive negative front</code> /{' '}
            <code>two negative fronts</code> / <code>positive again</code> /{' '}
            <code>24AUG26 −1.21M</code> — 3 hits before (§III header, §III
            body, chase-short thesis); <b>0 after</b>. The count is corrected to
            exactly one prior negative front (26AUG26 −2.04M); the 08-25 and
            08-24 panels&rsquo; own frontmost lines are printed as 25AUG26
            +9.37M and 24AUG26 +9.67M, both positive; and the −1.21M is
            relabelled as 24AUG26&rsquo;s 1.3-DTE value on the 08-23 panel,
            whose frontmost line was 23AUG26 +5.76M. <b>RESOLVED.</b>{' '}
            <b>DN-004 (MAJOR — execution claims exceed loaded data):</b>{' '}
            patterns <code>FILLED</code> (uppercase) 4 hits, {' '}
            <code>The book is LONG</code> 1, <code>the position is live</code> 1,{' '}
            <code>the live position</code> 1, <code>a live long</code> 2,{' '}
            <code>the live objection(s)</code> 2, <code>· live ·</code> 1,{' '}
            <code>the trade filled</code> 1 — 13 hits before; <b>0 after</b> for
            every pattern. §V is relabelled end-to-end as a{' '}
            <b>modeled/paper fill of a desk instruction</b> and an{' '}
            <b>unreconciled modeled 0.2R position</b>: the section header, the
            trade-block side label, the status row, the evidence row (renamed
            &ldquo;marketability evidence, NOT execution evidence&rdquo;), the
            excursion row, the lead, the manifest row, the §VI opener, the §VI
            table and the closing paragraph all inherit it, and the sentence
            enumerating what the tape cannot prove — order existence, routing,
            status, quantity, average price, ownership — sits directly under
            the marketability argument. The NFA block was strengthened to
            match. Uppercase <code>UNFILLED</code> survives at 2 hits (the
            08-19 scout and the row-3 disposal), which are historical
            non-fills. <b>RESOLVED.</b>{' '}
            <b>DN-005 (MAJOR — SM certifiability history misdated;
            &ldquo;five-session run above 80%&rdquo; false):</b> patterns{' '}
            <code>93.28% on 08-26</code> 1 hit, <code>five-session run</code> 1,{' '}
            <code>run above 80%</code> 1, <code>first time in five sessions</code>{' '}
            3, <code>four consecutive sessions</code> 1 — 7 hits before;{' '}
            <b>0 after</b> for every pattern. The history is rewritten as
            98.12% / 81.76% / 93.28% / 72.50% on 08-23 / 08-24 / 08-25 / 08-26
            at all sites (SM tile, §I header, §I body, §V thesis, §VI opener),
            the prior warning run is corrected from four to five notes, and the
            run is explicitly stated to be five sessions long but{' '}
            <em>not</em> a run above 80%. <code>run above 80%</code> returns 2
            hits, both inside that negation. Today&rsquo;s 16.34% single-minute
            concentration is preserved unchanged. <b>RESOLVED.</b>{' '}
            <b>DN-006 (MAJOR — exact net-GEX source not in the dated
            archive):</b> pattern <code>gex_summary.json</code> — 3 body hits
            before, of which 2 sourced the exact +287,897,984.62 to a rolling
            hourly-overwritten path with no durability disclosure;{' '}
            <b>0 after</b>. The file was copied byte-identical into{' '}
            <code>/opt/desk-note/snapshots/2026-08-27-0007/gex_summary.json</code>{' '}
            (sha256 <code>f86c52ae2ac65f9c02cc166afd9eedff4b757736ada3cc34a2e5a712a813d49a</code>,
            internal stamp 00:01Z, matching the archived <code>btc_gex.html</code>),
            and the manifest row and §III both now cite that pinned copy and
            state why. <b>RESOLVED.</b>{' '}
            <b>DN-007 (MAJOR — near-miss ledger continuity rewritten):</b>{' '}
            patterns <code>fourth and fifth rows</code> /{' '}
            <code>three sessions closes here</code> — 2 hits before;{' '}
            <b>0 after</b>. Row 4 keeps its dated 2026-08-26 near-miss
            classification permanently and is stated as such; row 5 is added as
            the 2026-08-27 modeled-fill resolution; and the ledger — absent from
            v1 entirely — is now rendered in full as a five-row block reading{' '}
            <b>5 events / 3 near-misses / 1 disposal / 1 modeled fill</b>.{' '}
            <b>RESOLVED.</b>{' '}
            <b>MINOR findings, all applied.</b> <b>DN-008</b> retail-peak
            staleness: <code>13 minutes</code> 2 hits before, <b>0 after</b> —
            both corrected to 12 elapsed minutes (peak row{' '}
            <code>08-27 07:53</code> BJ = 08-26 23:53Z against the 00:05Z
            anchor), matching the three sites that were already right.{' '}
            <b>DN-009</b> 200W percentile denominator: <code>41/165</code> 1 hit
            before, <b>0 after</b> carrying that meaning — the published figure
            is the strict 40/165 = 24.2%, with the insertion rank restated as
            41/166 = 24.7th and the denominator growth explained;{' '}
            <code>41/165</code> returns 1 hit, in the sentence rejecting it.{' '}
            <b>DN-010</b> footed-strip gaps: <code>above both</code> in the
            §III aggregate sentence 1 hit before, <b>0 after</b> — both exact
            gaps are printed ($6.774301M above the profile, $7.297984M above
            the headline) and the strip is stated as not equidistant.{' '}
            <b>DN-011</b> IV precision units: <code>about a basis point</code> 1
            hit before, <b>0 after</b> — replaced with ±5 volatility basis
            points for the rounded card input and up to ±10 when differencing
            two rounded cards; the manifest row carries the same unit.{' '}
            <b>DN-012</b> cross-asset immediate-prior: <code>0.205 →</code> and{' '}
            <code>22.72%</code> 2 hits before, <b>0 after</b> — the sequence is
            now 0.198 → 0.182 and 22.79pt → 13.86pt off the dated 08-26 summary
            (BTC +21.72%, NQ −1.07%), and the window roll-off is described as
            the dominant rather than the exclusive cause, with NQ&rsquo;s own
            −1.07% → −0.06% move named. <b>DN-013</b> dual-basis window high:{' '}
            <code>@02:27Z</code> as a bare label 1 hit before, <b>0 after</b> —
            the row now reads exchange $79,200.00 @02:26Z (monitor @02:27Z),
            matching the discipline already used for the first touch and the
            low. <b>DN-014</b> footer anchor: the footer now reads{' '}
            <b>00:05Z anchor · 00:07Z archive</b>, separating the analytical
            endpoint from the archive/authoring time encoded in the
            snapshot-directory name. All three are <b>RESOLVED</b> with
            hits-after = 0.{' '}
            <b>Carried open, disclosed not fixed:</b> the 2026-08-21 GEX
            archive is still missing, so the second-deepest-reading ordinal is
            over available panels and not over every day; the 200W watch JSON is
            absent for a second session and the percentile is self-computed off
            a Binance-perp parquet beginning 2019-09-08; order/execution truth
            remains unavailable, which is why DN-004&rsquo;s relabelling is a
            permanent scope statement rather than a wording change; and a full{' '}
            <code>next build</code> is environment-blocked (Node v18.19.1 below
            Next 16.2.6&rsquo;s ≥20.9.0), so{' '}
            <code>tsc --noEmit</code> is the build proxy and it exits 0.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-08-27 00:05Z pinned
            anchor row) with section-level provenance disclosed in the manifest
            band above; the macro Tier-1 panel render is 2026-08-26 22:15Z
            (~1.8h before snapshot) and some inputs are explicitly stale,
            absent, or pending and flagged as such. The position recorded in
            §V is a MODELED/PAPER record of a desk instruction whose limit price
            traded on the tape — no broker confirmation, blotter, order-state
            feed, average price or position reconciliation is loaded, and it
            must not be read as a reconciled position or as evidence that any
            order existed. Levels, sizes, and
            conditions are illustrative of the desk&rsquo;s process, not
            standing recommendations. Past correlation, gamma, and positioning
            patterns do not bind future tape. Derivatives carry the risk of
            total loss and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The limit traded at the number we wrote down two sessions ago,
                and the tape swept six hundred dollars through it. The gate
                cleared, the shelf repaired, and we still let a +0.986R modeled
                excursion go for want of a rule. Hold the levels. Book the half.
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
            v2 · 2026-08-27 00:05Z anchor · 00:07Z archive · post codex hostile audit ·
            sources: live_db.json · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · gex_summary.json ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Deribit
          </span>
        </footer>
      </article>
    </main>
  );
}
