import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-10 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-10',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-10' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260810() {
  await requireViewer('/desk/2026-08-10');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-10 · v2</span>
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
              <span className="dn-big">$64,896</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.10%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-10 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-10 00:05Z tape anchor</td>
                  <td className="dn-flag">
                    fresh · 1-min · anchor row t==&ldquo;08-10 08:05&rdquo; (BJ,
                    UTC+8) = 00:05Z daily pin; read at 00:07Z session start ·
                    landmine cleared (00:05Z pin is NOT t==&ldquo;08-10
                    00:05&rdquo;, which would be the 16:05Z 08-09 row)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-10 00:01Z scan (BJ 08:01)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · ~6-min stale vs 00:07Z read ·
                    in-progress bars · archived verbatim in
                    /opt/desk-note/snapshots/2026-08-10-0007
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-10 00:01Z snapshot</td>
                  <td className="dn-flag">
                    ~6-min stale vs snapshot anchor · Deribit idx $65,186 vs live
                    $64,896 ($290 above live) · 828 instruments · median IV 40.6%
                    · 10AUG26 0.3DTE +15.35M settles 08:00Z today (~8h AFTER this
                    00:05Z snapshot — still live, no settle-adjustment applied)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-10 00:01Z
                  </td>
                  <td className="dn-flag">~6-min lag · 7d 1h bars · 22 assets · 166 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-09 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.9h render lag · FRED Tier-1: 10Y +6bp to 4.69% (EXTREME
                    RISK-OFF), TIPS +2bp to 2.43%, HY OAS −4bp to 2.71%
                    (RISK-ON), DXY 99.62 (+0.02), Fed net liq $5.840T · MOVE bond
                    vol UNAVAILABLE this render
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-08-10 00:05Z (close $64,868.00)</td>
                  <td className="dn-flag">
                    offsets recomputed vs live spot $64,896 · W-SMA200
                    non-computable (190 weekly bars on file, needs 200) · W-SMA150
                    computes at 190 bars · W-EMA150/200 seed-disclosed
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle-floor watch</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · sma200 $63,760.71</td>
                  <td className="dn-flag">
                    recomputed_at 2026-08-10 00:11:24Z — refreshed 4 min AFTER
                    the 00:07 snapshot anchor (post-anchor, disclosed) · JSON:
                    sma200 $63,760.71, consecutive_above 6 through the 08-09
                    weekly settle $64,867.80 · slow level (~$250/wk) · the prior
                    note&rsquo;s 08-03 settled value $63,533.52 was not archived
                    in the atomic snapshot and is not recoverable, so this note
                    anchors to the current file
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
              <span className="dn-v bear">+8.12%</span>
              <span className="dn-src">live · raw 0.007419 ×1095 = +8.12% ann · 24h mean +7.36% (was +5.92% on 08-09) · range +3.79% / +10.88% · 0 / 1442 sampled rows negative — funding never turned short-pay across the 24h</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+5.92% → +8.12% (24h mean +7.36%)</span>
              <span className="dn-src">carry re-heated a further +1.44pt on the 24h mean · leverage gate firmly long-pay, no negative print in the window — the stall is NOT a funding flush</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v">−0.16% (−167.8 BTC)</span>
              <span className="dn-src">live · flat over 24h but the last 4h shed −902.2 BTC and the last 1h −630.3 BTC on the pullback off the $65,435 high — deleveraging INTO the snapshot, not building</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">53.78 / 46.22</span>
              <span className="dn-src">live_db `mkt_long_pct` · from 53.40 24h ago (+0.38pt more crowded) · 24h range 52.45 / 54.78 — retail re-crowded the long side into the stall</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−3,405 (net SHORT, rolled back)</span>
              <span className="dn-src">live · long 10.77k − short 14.18k · rolled back to net short from the 08-09 note&rsquo;s certified +155 daily anchor — deep-short partially restored</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 08-09 note</span>
              <span className="dn-v bear">+155 → −3,405 (Δnet −3,560)</span>
              <span className="dn-src">long −2,410, short +1,150 · roll-back-short is the current stable state (17h) BUT it re-synced through the recurring BJ 15:01 (07:01Z 08-09) single-minute feed artifact — direction certifiable, magnitude artifact-crossed · |Δ|/prior_net not meaningful (prior net ≈ 0)</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.6% / 27.66%</span>
              <span className="dn-src">GEX median IV · 828 inst. · 30D close-to-close RV (logret.std ×√365 ×100, 30 returns) · chain-level richness ~+12.9pt</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+1.97% (above)</span>
              <span className="dn-src">flip $63,641 · vs live spot $64,896 (+1.97%; 64,896/63,641 − 1 = 1.972%) / GEX file Deribit idx $65,186 (+2.43%; 65,186/63,641 − 1 = 2.428%, file rounds +2.4%) — both refs positive, page rounds spot side to +1.97% for tile consistency · aggregate GEX +111.3M (deep positive gamma)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The 08-09 note&rsquo;s explicit cut condition fired: smart money
                rolled back to net short
              </span>. That note carried a 0.4R scout long at the D-EMA50 cap
              reclaim with one hard rule — &ldquo;a certified SM roll-back-short
              cuts the whole.&rdquo; SM net went{' '}
              <span className="dn-tag bull">+155</span> (the 08-09 certified
              daily anchor) →{' '}
              <span className="dn-tag bear">−3,405</span> (long 10.77k − short
              14.18k), a stable 17-hour reading that de-longed −2,410 and
              re-shorted +1,150 vs the prior anchor.{' '}
              <span className="dn-em">
                The direction is unambiguous — SM cut longs and re-added shorts —
                but the transition ran through the recurring BJ 15:01 (07:01Z
                08-09) single-minute feed artifact, so the magnitude is
                artifact-crossed and the exact −3,405 should be read as
                &ldquo;deep-short partially restored,&rdquo; not a precise level.
              </span>{' '}
              At the same time the extension the reclaim wanted{' '}
              <span className="dn-tag bear">FAILED</span>: spot pushed a 24h high{' '}
              <span className="dn-tag">$65,435 @ BJ 14:15 08-10 (06:15Z)</span>{' '}
              then rejected <span className="dn-tag bear">−0.42% over 4h</span>{' '}
              back to $64,896, shedding{' '}
              <span className="dn-tag bear">−902 BTC of OI in that 4h</span>{' '}
              (−630 in the last 1h) — a clean deleveraging fade, not a funding
              flush (24h mean funding re-heated to{' '}
              <span className="dn-tag bear">+7.36% ann</span>, 0 / 1442 rows
              negative), with retail{' '}
              <span className="dn-tag bear">re-crowding +0.38pt to 53.78%</span>{' '}
              and the fast MTF frames rolling over (fresh{' '}
              <span className="dn-tag bear">1h water-up death cross 1 bar
              ago</span>, 15m/30m below cloud, top-div 15m/1h/4h). What still
              holds is structural: the D-EMA50 cap reclaim{' '}
              <span className="dn-tag bull">holds three completed daily closes
              above $64,661, with the 08-10 session in-progress still above</span>, the dealer book carries{' '}
              <span className="dn-tag bull">+111.3M positive gamma</span> with
              spot +1.97% above the $63,641 flip, the 200W cycle floor holds a{' '}
              <span className="dn-tag bull">6th above-floor weekly close</span>{' '}
              (08-09 settle $64,868 vs sma200 $63,761, +1.74%), and the slow MTF
              book still leans constructive (8h/12h/1d/1w golden crosses, HTF
              bottom-div 12h/1w, 1M ⚡TD9 BUY). The read: the floor held but the
              extension stalled and the position book rolled back short — so the
              book <span className="dn-em">cuts the scout to flat</span> on the
              prior note&rsquo;s own rule and stands down, chase-short NOT armed
              (gamma deeply positive, spot above the flip, floor intact).
            </p>

            <p>
              BTC prints <span className="dn-tag">$64,896</span> live,{' '}
              <span className="dn-tag bear">−0.10%</span> on 24h (spot
              64,896 vs 64,961 at the 08-09 08:04 BJ 24h-ago row) — a nearly
              flat tape that masks a two-phase 24h: a heavy spot bid drove the
              push to <span className="dn-tag">$65,435 @ BJ 14:15 08-10</span>{' '}
              (24h high), then a sharp deleveraging pullback carried it back
              under $65k into the snap. 24h low{' '}
              <span className="dn-tag">$64,730 @ BJ 11:17 08-09 (03:17Z)</span>.
              The D-EMA50 cap reclaim is the load-bearing structural read:
              daily closes <span className="dn-tag">08-07 $64,885.40</span>,{' '}
              <span className="dn-tag bull">08-08 $64,928.50</span> (the high
              close of the run), <span className="dn-tag">08-09 $64,867.80</span>,
              and 08-10 in-progress $64,868.00 all sit above the rising D-EMA50
              (<span className="dn-tag bull">$64,661, spot +0.36%</span>) — three
              completed closes above the cap (08-07/08-08/08-09), with the 08-10
              session still above it in-progress.{' '}
              <span className="dn-em">
                But the closes above the cap have bought only a stall, not an
                extension: the run peaked on the 08-08 close, the two closes
                since are ~$61 lower, and today&rsquo;s $65,435 probe was sold.
              </span>{' '}
              The next real overhead is the D-EMA100{' '}
              <span className="dn-tag bear">$66,839 (−2.91%)</span> / W-EMA200{' '}
              <span className="dn-tag bear">$67,096 (−3.28%)</span> confluence —
              the grind has not tested it. Spot sits above the tight D-EMA20 /
              D-SMA20 / D-EMA50 / D-SMA50 cluster ($63.4k–$64.7k) and below
              everything from the D-EMA100 up.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · SM rolled back to net short −3,405 (through the BJ 15:01 artifact) · extension FAILED at $65,435, OI shed −902/4h on the fade · funding re-heated, no negative print</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position book rolled back to net short and the prior
                note&rsquo;s cut condition fired
              </span>. SM net is{' '}
              <span className="dn-tag bear">−3,405</span> (long 10,771 − short
              14,176) vs the 08-09 note&rsquo;s certified{' '}
              <span className="dn-tag bull">+155</span> daily anchor (long
              13,181 − short 13,026). The components both moved bearish and
              persisted: long_btc{' '}
              <span className="dn-tag bear">13.18k → 10.77k (−2,410)</span> and
              short_btc <span className="dn-tag bear">13.03k → 14.18k
              (+1,150)</span>, Δnet <span className="dn-tag bear">−3,560</span>.{' '}
              <span className="dn-em">
                The honest caveat: the one-minute BJ 15:00 → 15:01 step
                (2026-08-09, 07:00Z → 07:01Z 08-09) went +138 → −3,945 — long
                dropped 13,228 → 10,213 (−3,015) and short jumped 13,090 → 14,158
                (+1,068) in one bar. (The +155 is the prior daily anchor, not the
                pre-step row; versus that anchor the state moved +155 → −3,405 by
                the 00:05Z snapshot.)
              </span>{' '}
              That is the recurring BJ ~14:00–15:00 feed re-sync the lineage has
              flagged repeatedly (the 08-09 note&rsquo;s +155 itself crossed the
              same window in the opposite direction). So the SM series
              oscillates ±~4k through this daily re-sync, and today&rsquo;s
              −3,405 sits on the short side of it. Since the 15:01 step the
              reading has been stable for ~17 hours (−3.9k bleeding to −3.4k),
              which makes it the current <em>certifiable</em> state — a genuine
              roll-back-short by the same standard the prior note used to
              certify its +155. <span className="dn-em">|Δ|/prior_net is not a
              meaningful cut fraction here (prior net ≈ 0); the read is
              directional — SM de-longed and re-shorted, deep-short partially
              restored.</span> Retail moved the same way: mkt_long_pct{' '}
              <span className="dn-tag bear">53.78%</span> from 53.40% 24h ago
              (+0.38pt), 24h range 52.45 / 54.78 — the crowd re-leaned long into
              the stall while SM leaned short.
            </p>

            <p>
              The leverage side did <em>not</em> cool — it re-heated.{' '}
              <span className="dn-signal">
                Funding stayed firmly long-pay across the whole 24h
              </span>: live <span className="dn-tag bear">+8.12% ann</span> (raw
              0.007419 × 1095), 24h mean{' '}
              <span className="dn-tag bear">+7.36%</span> (up from the 08-09
              note&rsquo;s +5.92% — a +1.44pt re-heat), range{' '}
              <span className="dn-tag">+3.79% / +10.88%</span>, and{' '}
              <span className="dn-tag bear">0 / 1442 sampled rows negative</span>{' '}
              — longs paid shorts every minute of the window. OI Δ{' '}
              <span className="dn-tag">−167.8 BTC (−0.16%)</span> over 24h looks
              flat, but the shape is the story: the last 4h shed{' '}
              <span className="dn-tag bear">−902.2 BTC</span> and the last 1h{' '}
              <span className="dn-tag bear">−630.3 BTC</span> as spot faded off
              the $65,435 high — the 24h-flat OI is an early build (into the
              push) fully given back (on the fade). Perp trades a{' '}
              <span className="dn-tag bear">−$53.81 discount</span> to spot at
              the snap (1h mean −$47.30, 24h mean −$50.71, range −$79.49 /
              −$5.71 — basis never went premium across the 24h; the discount
              widened from the 08-09 note&rsquo;s −$42 24h mean). 1-min
              aggressor skew snap <span className="dn-tag bear">−4.9</span> (1h
              mean −0.58) — a mild sell-lean at the snap, no oversold reflex
              bid.{' '}
              <span className="dn-em">
                Funding re-heated + retail re-crowded long + SM rolled short +
                OI shed on the fade: the leverage book pressed long into a
                stall that SM faded and the tape sold. That is the exact
                deleveraging-into-a-cap shape the prior note warned would
                &ldquo;resolve the stall back under the cap.&rdquo;
              </span>
            </p>

            <p>
              Windowed flow confirms a <em>heavy absorbed spot bid earlier,
              then a clean two-sided deleveraging fade into the snapshot</em>.
              24h: price <span className="dn-tag bear">−0.10%</span>, OI{' '}
              <span className="dn-tag bear">−167.8 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +18,336</span> (no cb_cvd reset in
              the window — verified), futures CVD{' '}
              <span className="dn-tag bear">Δ −99</span>, big-print{' '}
              <span className="dn-tag bull">+43 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−99</span>{' '}
              <span className="dn-em">(taker-net sum equals futures CVD Δ by
              construction — fut_cvd is the running cumsum of taker_net)</span> —{' '}
              <span className="dn-em">
                a +18.3k BTC net spot bid fully absorbed for −0.10% price, with
                futures flat-to-offered; this is the same absorbed-bid signature
                the 08-09 note logged, one more day of heavy spot demand that
                did not translate to price
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bear">−0.42%</span>, OI{' '}
              <span className="dn-tag bear">−902.2 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −247</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −616</span>, big-print{' '}
              <span className="dn-tag bear">−250 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−616</span> —{' '}
              <em>the fade off the high: spot AND futures offered, big prints
              net sellers, OI shed hard</em>. 1h: price{' '}
              <span className="dn-tag bear">−0.28%</span>, OI{' '}
              <span className="dn-tag bear">−630.3 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −207</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −249</span>, big-print{' '}
              <span className="dn-tag bear">−37 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−249</span> —{' '}
              <em>the fade still running into the snap, no reflex bid yet</em>.
              The 24h absorbed spot bid keeps the demand story alive under the
              surface, but the last 4h is unambiguously a deleveraging sell — the
              extension was rejected and the book let air out.{' '}
              <span className="dn-em">
                (The 4h and 1h blocks are cumulative deltas measured from the
                previous boundary row — BJ 04:04 → 08:05 and 07:04 → 08:05 — the
                running-cumsum convention for these series, not the exact
                same-clock 04:05/07:05 opens; the exact-clock windows differ by a
                few BTC of OI and CVD.)
              </span>
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF split — slow book constructive (8h/12h/1d/1w golden, HTF bottom-div, 1M ⚡TD9 BUY) but fast frames rolled over (fresh 1h death cross, 15m/30m below cloud, top-div 15m/1h/4h) · D-EMA50 cap held three completed closes (08-10 in-progress still above), capped by the D-EMA100 / W-EMA200 confluence</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map is a clean split: the slow book leans up, the fast
                frames rolled over
              </span>. Constructive on the slow side — 8h water-down golden
              cross 20b (RSI 55.5, above cloud), 12h water-down golden 11b (RSI
              55.7, above cloud, BULL reg div), 1d fresh{' '}
              <span className="dn-tag bull">water-up golden cross 3b</span> (RSI
              54.0, in cloud 62.6k–67.9k), 1w water-down golden 3b, and an{' '}
              <span className="dn-tag bull">HTF bottom-div cluster at
              12h/1w</span> plus a{' '}
              <span className="dn-tag bull">1M ⚡TD9 BUY (printed $64,846)</span>.
              Rolled over on the fast side — a{' '}
              <span className="dn-tag bear">fresh 1h water-up death cross 1 bar
              ago</span> (RSI 38.6, in cloud), 15m water-up death 6b (RSI 34.3,
              below cloud), 30m water-up death 9b (RSI 33.5, below cloud just
              crossed), 4h water-up death 7b (RSI 53.2, still above cloud), and
              a <span className="dn-tag bear">top-div cluster at 15m/1h/4h</span>.
              The header net read is <em>&ldquo;higher-TF bearish · short-term
              bounce, HTF bottom-div cluster (12h/1w)&rdquo;</em> with the regime
              tagged <span className="dn-tag">5/9 trend-continuation (JT≥0)</span>.{' '}
              <span className="dn-em">
                Read straight: the slow book has not broken — golden crosses on
                8h/12h/1d/1w and a bottom-div cluster say the multi-day path
                still leans up — but the fast frames confirm the intraday stall,
                with a just-printed 1h death cross and the 15m/30m already back
                below cloud. This is the structural fingerprint of a reclaim
                that held its floor but lost its near-term momentum at the cap.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,840</td><td className="num">34.3</td><td className="bear">death (water-up) 6b</td><td className="bear">below ↑65.0k 4b</td><td>Buy 7</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">64,840</td><td className="num">33.5</td><td className="bear">death (water-up) 9b</td><td className="bear">below ↑64.8k (just crossed)</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1h</td><td className="num">64,840</td><td className="num">38.6</td><td className="bear">death (water-up) 1b (fresh)</td><td className="neut">in cloud 64.7k–65.0k 1b</td><td>Buy 8 → 9?</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">64,840</td><td className="num">53.2</td><td className="bear">death (water-up) 7b</td><td className="bull">above ↓63.9k 27b</td><td>Buy 1</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>8h</td><td className="num">64,840</td><td className="num bull">55.5</td><td className="bull">golden (water-dn) 20b</td><td className="bull">above ↓64.7k 8b</td><td>Buy 2</td><td>BEAR hid</td></tr>
                <tr><td>12h</td><td className="num">64,840</td><td className="num bull">55.7</td><td className="bull">golden (water-dn) 11b</td><td className="bull">above ↓64.6k 6b</td><td>Buy 3</td><td>BULL reg</td></tr>
                <tr><td>1d</td><td className="num">64,840</td><td className="num bull">54.0</td><td className="bull">golden (water-up) 3b</td><td className="neut">in cloud 62.6k–67.9k 21b</td><td>Sell 7</td><td>BULL hid</td></tr>
                <tr><td>3d</td><td className="num">64,840</td><td className="num">47.1</td><td className="neut">—</td><td className="bear">below ↑76.2k 23b</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">64,840</td><td className="num">40.9</td><td className="bull">golden (water-dn) 3b</td><td className="bear">below ↑85.9k 28b</td><td>Sell 2</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">64,846</td><td className="num">44.3</td><td className="neut">—</td><td className="bull">above ↓47.4k 30b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (BJ 08:01; rolling
                    latest file; archived verbatim in
                    /opt/desk-note/snapshots/2026-08-10-0007). Header alerts:{' '}
                    <em>1h water-up death cross (1 bar ago), DIF +40.1 — early
                    death cross (DIF above water)</em>; <em>1M ⚡TD9 BUY printed
                    at $64,846</em>; <em>1h TD8 Buy — 1 more bar to close</em>.
                    Scan spot $64,840, 24h −0.14%, 24h H/L $65,483 / $64,700,
                    qVol $3.12B (00:01Z MTF scan; the live-tape anchor at 00:05Z
                    shows spot $64,896 and 24h −0.10% on the same window — the
                    ~4-min gap accounts for the difference). Closes are
                    in-progress bars; treat every value as provisional until each
                    TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms cap-held digestion. Spot $64,896 sits above
              a tight daily cluster — <span className="dn-tag bull">D-SMA50
              $63,377 (+2.40%)</span>, <span className="dn-tag bull">D-SMA20
              $64,329 (+0.88%)</span>, <span className="dn-tag bull">D-EMA20
              $64,324 (+0.89%)</span>, and the load-bearing{' '}
              <span className="dn-tag bull">D-EMA50 cap $64,661 (+0.36%)</span> —
              and below everything from the D-EMA100 up:{' '}
              <span className="dn-tag bear">D-EMA100 $66,839 (−2.91%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $67,096 (−3.28%)</span>{' '}
              (the nearest overhead confluence, a ~$66.8k–$67.1k cap band),{' '}
              <span className="dn-tag bear">D-SMA100 $67,749 (−4.21%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $68,593 (−5.39%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,173 (−6.18%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,325 (−6.39%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $69,500 (−6.62%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $70,015 (−7.31%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $72,200 (−10.12%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $72,956 (−11.05%; seed)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $77,127 (−15.86%)</span>,{' '}
              <span className="dn-tag bear">W-EMA50 $77,303 (−16.05%)</span>,{' '}
              <span className="dn-tag bear">W-EMA100 $78,223 (−17.04%)</span>,{' '}
              <span className="dn-tag bear">W-SMA50 $82,492 (−21.33%)</span>,{' '}
              <span className="dn-tag bear">W-SMA100 $88,720 (−26.85%)</span>.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-08-10 00:05Z (close
                $64,868.00); offsets recomputed against live spot $64,896.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. W-SMA200 non-computable (190 weekly bars on file,
                needs 200); W-EMA150 $72,956 (−11.05%) and W-EMA200 $67,096
                (−3.28%) show because the EMA seeds from available history and
                are reported as such. Daily closes: 08-05 $64,633.90, 08-06
                $64,300.00, 08-07 $64,885.40, 08-08 $64,928.50, 08-09 $64,867.80,
                08-10 (in-progress) $64,868.00 — three consecutive completed
                closes above the D-EMA50 cap (08-07/08-08/08-09), with the 08-10
                session still above it in-progress. Separately, the 200W cycle floor (sma200 $63,760.71
                from the trap-watch JSON refreshed 2026-08-10 00:11:24Z, 4 min
                post the snapshot anchor) holds a 6th above-floor weekly close:
                08-09 settled $64,867.80, +$1,107 (+1.74%) clear.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · deep positive gamma +111.3M · flip $63,641 (spot +1.97% above) · heavy $65k–$72k positive band caps the grind · $60k −16.04M crash-put residual · no negative amplifier on any forward expiry</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book carries deep positive gamma and no down-leg
                amplifier
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+111.3M / 1%</span> (net-long-gamma,
              dampening). The 0-γ flip sits{' '}
              <span className="dn-tag">$63,641</span>, and spot $64,896 is{' '}
              <span className="dn-tag bull">+1.97% above flip</span> on
              spot-denominated math (64,896 / 63,641 − 1 = +1.972%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads +2.4% off its
              Deribit-index $65,186 ($290 above live spot), which is{' '}
              <span className="dn-tag bull">+2.43%</span> (65,186 / 63,641 − 1 =
              +2.428%) — both references positive, spot above the flip on both.
              The wall map is a heavy two-sided clamp: overhead{' '}
              <span className="dn-tag bull">$68k +20.63M</span> (heaviest wall),{' '}
              <span className="dn-tag bull">$70k +20.37M</span>,{' '}
              <span className="dn-tag bull">$67k +16.75M</span>,{' '}
              <span className="dn-tag bull">$66k +16.74M</span>,{' '}
              <span className="dn-tag bull">$65k +14.08M</span> (right at spot),{' '}
              <span className="dn-tag bull">$72k +10.11M</span>,{' '}
              <span className="dn-tag bull">$65.5k +8.99M</span>,{' '}
              <span className="dn-tag bull">$80k +8.80M</span>; below,{' '}
              <span className="dn-tag bear">$60k −16.04M</span> crash-put
              residual and <span className="dn-tag bear">$62k −7.76M</span>.{' '}
              <span className="dn-em">
                The $65k–$72k positive band totals roughly +108M of dampening
                supply — it caps a squeeze as much as it cushions a fade, and
                it is exactly the overhead that has stalled the grind. The only
                sizeable negative gamma is the $60k / $62k shelf below spot
                (−23.80M combined), a floor cushion, not a trap overhead.
              </span>{' '}
              10AUG26 0.3DTE is <span className="dn-tag bull">+15.35M</span> and
              settles at 08:00Z today — ~8h <em>after</em> this 00:05Z snapshot,
              so it is still live in the book (no settle-adjustment). Forward
              expiries are uniformly positive: 14AUG 4.3 +16.21M, 21AUG 11.3
              +15.62M, 28AUG 18.3 +24.46M (heaviest), 25SEP 46.3 +12.91M, 30OCT
              81.3 +1.46M, 25DEC 137.3 +5.24M, 26MAR27 228.3 +1.47M, 25JUN27
              319.3 +0.73M. <span className="dn-em">No single forward expiry
              carries a negative amplifier — the dealer strip is structurally
              long-gamma across the curve, the opposite of the down-leg regime.
              A fade finds dealer bid; a squeeze finds dealer offer.</span>
            </p>

            <p>
              IV median across 828 instruments is{' '}
              <span className="dn-tag">40.6%</span> against 30D close-to-close RV
              of <span className="dn-tag">27.66%</span> — chain-level richness{' '}
              <span className="dn-tag">~+12.9pt</span>. A chain-median across N
              instruments, <span className="dn-em">not</span> a tradable spread;
              expiry-/strike-level vega, skew and term structure remain not
              loaded; the vol read stays framework-only. RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log
              returns anchored to parquet last bar 2026-08-10 00:05Z. Put/Call
              ratio 0.57, put OI 118,153 BTC — a call-heavy book consistent with
              the positive-gamma reading.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · rates FIRMED (10Y +6bp to 4.69% EXTREME RISK-OFF, TIPS +2bp to 2.43%) · credit eased (HY OAS −4bp to 2.71% RISK-ON) · DXY flat 99.62 · reclaim-long rates filter FALSE at 14bp · BTC-vs-TradFi lag narrowed to −1.92pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                Rates firmed while credit eased — a mixed macro tape, net still
                risk-tolerant on the lines that matter for BTC
              </span>. Dashboard render is 2026-08-09 22:15Z, ~1.9h before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bear">4.69% (+6.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.24</span>, episodic z{' '}
              <span className="dn-tag">+1.08</span> — EXTREME RISK-OFF,
              firmed. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.43% (+2.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.53</span> — EXTREME RISK-OFF,
              firmed. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.28% (−1.0bp)</span>. HY OAS{' '}
              <span className="dn-tag bull">2.71% (−4.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.03</span>, episodic z{' '}
              <span className="dn-tag bull">−0.67</span> — RISK-ON, credit
              calmer on the day. MOVE bond vol{' '}
              <span className="dn-tag stale">UNAVAILABLE</span> this render (no
              read). DXY <span className="dn-tag">99.62 (+0.02)</span>, episodic
              z <span className="dn-tag bull">−1.82</span> — essentially flat.
              Fed net liquidity <span className="dn-tag">$5.840T (+0.014T)</span>,
              episodic z <span className="dn-tag">+2.47</span>. US-JP 10Y spread{' '}
              <span className="dn-tag bear">2.02% (+6.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag bull">157.84 (−0.57)</span> (yen firmer).
              NFCI −0.529 (loose, weekly).{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) is FALSE at
                4.69% — 14bp on the wrong side, unchanged in stance from the
                08-09 note&rsquo;s &ldquo;FALSE at 14bp.&rdquo; Rates are the
                headwind (10Y and TIPS both EXTREME RISK-OFF and firming), but
                credit is calm (HY OAS RISK-ON) and the dollar is flat, so the
                macro tape is not the thing forcing the stall — the stall is
                positioning-driven. The BTC-vs-TradFi decoupling narrowed to
                −1.92pt this print (BTC +2.44% vs NQ +4.36% on 7d) from −2.24pt
                on 08-09 — BTC still lags the risk engine, the gap is closing
                only because BTC held while the tape kept running.
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
                <tr><td>US 10Y nominal</td><td className="num">4.69%</td><td className="num bear">+6.0bp</td><td className="num bear">+2.24</td><td className="num">+1.08</td><td className="bear">EXTREME RISK-OFF · firmed</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.43%</td><td className="num bear">+2.0bp</td><td className="num bear">+2.53</td><td className="num">+1.05</td><td className="bear">EXTREME RISK-OFF · firmed</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.28%</td><td className="num bull">−1.0bp</td><td className="num">+0.86</td><td className="num">+1.12</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.71%</td><td className="num bull">−4.0bp</td><td className="num bull">−1.03</td><td className="num bull">−0.67</td><td className="bull">RISK-ON · credit calm</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.529</td><td className="num">+0.00</td><td className="num">−0.65</td><td className="num bull">−1.00</td><td className="bull">loose (weekly)</td></tr>
                <tr><td>MOVE bond vol</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">unavailable this render</td></tr>
                <tr><td>DXY</td><td className="num">99.62</td><td className="num">+0.02</td><td className="num">+0.58</td><td className="num bull">−1.82</td><td className="neut">flat · tight regime</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.840T</td><td className="num bull">+0.014T</td><td className="num">−0.70</td><td className="num bear">+2.47</td><td className="neut">small weekly build</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.84</td><td className="num bull">−0.57</td><td className="num">+0.36</td><td className="num bull">−1.80</td><td className="bull">yen firmer</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.02%</td><td className="num bear">+6.0bp</td><td className="num">−0.25</td><td className="num">+1.08</td><td className="neut">neutral</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7467</td><td className="num">−0.00</td><td className="num bull">−1.41</td><td className="num bull">−1.63</td><td className="neut">no tag · loose</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.25%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.04</td><td className="num">+0.28</td><td className="neut">no tag</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 166 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.207</span>{' '}
              (IDIOSYNCRATIC band, &lt; 0.25 — essentially flat vs the 08-09
              note&rsquo;s 0.205). BTC&rsquo;s listed ties: NQ{' '}
              <span className="dn-tag">+0.449</span> (top), TSLA{' '}
              <span className="dn-tag">+0.433</span>, SP500{' '}
              <span className="dn-tag">+0.349</span>, NVDA{' '}
              <span className="dn-tag">+0.348</span>, COPPER{' '}
              <span className="dn-tag">+0.260</span>, JP225{' '}
              <span className="dn-tag">+0.218</span>, GOLD{' '}
              <span className="dn-tag">+0.218</span>, PLAT{' '}
              <span className="dn-tag">+0.194</span>, AMZN{' '}
              <span className="dn-tag">+0.192</span>, META{' '}
              <span className="dn-tag">+0.189</span>. 7d performance:{' '}
              <span className="dn-tag bull">BTC +2.44%</span>, NQ{' '}
              <span className="dn-tag bull">+4.36%</span>, SP500{' '}
              <span className="dn-tag bull">+2.95%</span>, JP225{' '}
              <span className="dn-tag bull">+4.86%</span>, NVDA{' '}
              <span className="dn-tag bull">+11.40%</span>, MSFT{' '}
              <span className="dn-tag bull">+6.66%</span>, TSLA{' '}
              <span className="dn-tag bull">+5.13%</span>, META{' '}
              <span className="dn-tag bull">+5.20%</span>, URNM{' '}
              <span className="dn-tag bull">+13.90%</span> (leader). Metals
              strong: GOLD <span className="dn-tag bull">+6.78%</span>, SILVER{' '}
              <span className="dn-tag bull">+9.67%</span>, PLAT{' '}
              <span className="dn-tag bull">+5.69%</span>, PALL{' '}
              <span className="dn-tag bull">+6.20%</span>. Energy soft: CL{' '}
              <span className="dn-tag bear">−2.74%</span>, BRENT{' '}
              <span className="dn-tag bear">−0.22%</span>, NGAS{' '}
              <span className="dn-tag bear">−1.13%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine narrowed to ~−1.92pt
                (BTC +2.44% vs NQ +4.36%) from −2.24pt on 08-09 — the gap is
                closing because BTC held its ground while risk kept climbing, not
                because it led. Idiosyncratic-to-crypto stays the load-bearing
                read: at |r| 0.207 the tape is not moving BTC, positioning is.
              </span>{' '}
              JGB monthly 2.67% carries an EXTREME RISK-OFF monthly tag — do not
              lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · cover-bounce scout CUT to flat (0.4R → 0) on the certified SM roll-back-short · chase-short STOOD DOWN (gamma +111.3M, spot above flip, floor held) · no fresh trade on this snap</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 08-09 scout is cut to flat on its own kill rule
              </span>. That note carried a 0.4R scout long (a 0.2R starter
              ~$64,620 + a 0.2R add ~$64,900, blended ~$64,760) with a stack of
              exit conditions: &ldquo;a failed test trims the add back to the
              0.2R starter; a 1d close below the $63,676 flip / $63,533 floor OR
              a certified SM roll-back-short cuts the whole.&rdquo; Only one of
              those fired. Demand re-acceleration <em>did not fire</em> — the
              $65,435 probe was sold and OI shed −902 in 4h — but that is a soft
              quality miss, not the failed-test trim, which the 08-09 note gated
              on a 1d close back under the D-EMA50 cap with OI rolling over; the
              closes still hold the cap, so the trim did not trigger. What fired
              is the hard kill: SM <em>rolled back to net short</em> (+155 →
              −3,405, stable 17h), which cuts the whole. The floor/flip cut has
              NOT fired (1d closes hold above the $63,641 flip and the $63,760
              200W floor), so this is not a stop-out into a breakdown — it is a
              discipline cut on a position book that reversed under a reclaim
              that stalled.{' '}
              <span className="dn-em">
                The book goes flat. The chase-short is explicitly NOT armed: the
                dealer strip is +111.3M positive gamma, spot sits +1.97% above
                the flip, the cycle floor holds its 6th weekly close, and the
                $60k crash-put eased to −16.04M — none of the short-side
                conditions are in place.
              </span>{' '}
              The one honest hedge on the cut: the roll-back-short re-synced
              through the BJ 15:01 feed artifact, so if the next BJ ~14:00–15:00
              window flips SM back toward flat with price still holding the
              D-EMA50, the scout starter re-arms — the cut respects the
              prior-note rule as written, but the artifact keeps the door open
              for a fast re-entry.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">closed · scout long · CUT to flat on the certified SM roll-back-short (prior-note kill condition)</span>
              <div className="dn-trade-name">
                Cover-bounce scout — cut 0.4R → 0 as the 08-09 note required on a certified SM roll-back-short; demand re-acceleration also did not fire at the $65,435 probe
              </div>
              <div className="dn-thesis">
                The 08-09 scout was carried at 0.4R (0.2R starter ~$64,620 +
                0.2R add ~$64,900, blended ~$64,760) into a demand-vs-stall
                decision. The demand leg failed: the 24h high $65,435 (BJ 14:15
                08-10) was sold, spot faded −0.42% over 4h with OI shedding −902
                BTC, and the fast MTF frames rolled over (fresh 1h death cross).
                The position leg reversed outright: SM net went +155 → −3,405
                (long −2,410, short +1,150), a stable 17h roll-back-short. The
                prior note&rsquo;s rule on that event is explicit — <em>cut the
                whole</em>. Status: <em>closed / flat</em>. No residual, no
                flip. Performance: the blended ~$64,760 entry is roughly flat to
                the $64,896 snap (~+0.2%); the cut is a discipline exit on a
                falsified thesis, not a target tag.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed / flat · cut on the certified SM roll-back-short + failed cap test · no residual, no flip-to-short</span></div>
                <div><span className="dn-lvl-k">kill condition that fired</span><span className="dn-lvl-v bear">SM net +155 → −3,405 (certified roll-back-short, stable 17h) — the whole-position kill; demand re-acceleration also did not fire ($65,435 sold, OI −902/4h), a soft quality miss, not the cap-losing failed-test trim</span></div>
                <div><span className="dn-lvl-k">re-arm (scout starter)</span><span className="dn-lvl-v bull">SM re-flattens toward ≥ −1k (next BJ 14:00–15:00 re-sync or a genuine cover) AND spot holds &gt; D-EMA50 $64,661 on a 1d close → 0.2R starter back on</span></div>
                <div><span className="dn-lvl-k">artifact caveat</span><span className="dn-lvl-v">the roll-back re-synced through the BJ 15:01 (07:01Z 08-09) single-minute feed step; magnitude artifact-crossed, direction certifiable</span></div>
              </div>
              <div className="dn-gating">
                <b>Cut is on-rule.</b> The 08-09 note pre-authorized this exact
                exit; the discipline is to take it, not to defend the scout into
                a book that reversed. Reopening the long requires the position
                book to re-flatten AND price to hold the cap — not one leg.
                Reopening a short requires a separate structural setup (gamma
                flip negative + a 1d close below the $63,641 flip), none of which
                is present.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · chase-short · STOOD DOWN — positive gamma, spot above flip, floor held</span>
              <div className="dn-trade-name">
                Chase-short — NOT armed; the down-side conditions are absent (gamma +111.3M, spot +1.97% above the flip, 6th weekly close above the 200W floor)
              </div>
              <div className="dn-thesis">
                A short-side press requires the dealer book to flip to negative
                gamma and price to lose the flip / floor. Neither is close:
                aggregate GEX is +111.3M (deep positive, dampening), the flip
                sits $63,641 with spot +1.97% above, the $60k crash-put eased to
                −16.04M, and the 200W cycle floor ($63,761) holds a 6th
                above-floor weekly close ($64,868, +1.74%). The SM roll-back is a
                position signal, not a structural break — it justifies cutting a
                long, not initiating a short into a long-gamma book that bids a
                fade.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">arm condition</span><span className="dn-lvl-v bear">aggregate GEX flips negative (a fresh negative chunk on a near expiry) AND 1d close &lt; $63,641 flip → then watch the $60k −16.04M crash-put shelf</span></div>
                <div><span className="dn-lvl-k">floor watch</span><span className="dn-lvl-v bull">200W sma200 $63,761 (JSON refreshed 08-10 00:11Z, post-anchor) — a weekly close below ends the cycle-floor read; currently +1.74% clear</span></div>
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">stood down · no short at the cap into a +111.3M positive-gamma book with spot above the flip</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> the deep positive-gamma strip means a fade
                finds dealer bid and a squeeze finds dealer offer — a mean-
                reverting clamp, not a trend accelerant. Shorting a stall inside
                that clamp with the flip 2% below and the cycle floor holding is
                a low-quality press; wait for the structure to break, not just
                the position book to lean.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout re-entry · DEFERRED · book flat, awaiting SM re-flatten + cap-hold</span>
              <div className="dn-trade-name">
                Cover-bounce scout re-entry — deferred until the position book re-flattens and price holds the D-EMA50 cap; the artifact keeps a fast re-entry live
              </div>
              <div className="dn-thesis">
                The bullish structural case is not dead — the D-EMA50 cap held
                three completed closes (08-10 in-progress still above), the
                dealer book is long-gamma, the slow MTF frames
                (8h/12h/1d/1w golden, HTF bottom-div, 1M ⚡TD9 BUY) lean up, the
                200W floor holds, and the 24h spot bid (+18.3k CVD) shows demand
                still under the tape. What is missing is the position book: SM
                rolled short and retail re-crowded long, the wrong configuration
                for a durable bounce. The re-entry waits for SM to re-flatten
                (toward ≥ −1k) with price still holding the cap — and because the
                roll-back re-synced through the BJ 15:01 feed artifact, that
                re-flatten could print on the very next BJ ~14:00–15:00 window,
                so the deferral is short-fused, not indefinite.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm trigger (both legs)</span><span className="dn-lvl-v bull">SM net re-flattens ≥ −1k (BJ 14:00–15:00 re-sync or genuine cover) AND 1d close holds &gt; D-EMA50 $64,661</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on the two-leg print, scout long 0.2R starter · add 0.2R only on a 1d close extending &gt; the stalled $65,435 high with OI rebuilding</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1d close &lt; $63,641 (0γ flip) / $63,761 (200W floor) — a close below ends the digestion-above-cap read</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$66,839 (D-EMA100) / $67,096 (W-EMA200) confluence, then $67,749 (D-SMA100)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R starter · 0.4R max · take half at the $66.8k–$67.1k confluence</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R (illustrative):</b> re-arm entry ~$64,661 (D-EMA50 hold),
                stop $63,641 (flip) = ~$1,020 risk; first target $66,839
                (D-EMA100) = ~$2,178 reward ≈ 2.1:1. <b>Hard rule:</b> do not
                re-enter on price alone — a cap-hold with SM still net short is
                the same failed configuration that just got cut. The position
                book must re-flatten first; a spot reclaim of $65,435 with SM
                still &lt; −3k is a false start (it can spike on a short-cover
                squeeze before the book actually turns).
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the cap held but the extension stalled and SM rolled back short · scout cut to flat on-rule · chase-short stood down · the note turns on whether the position book re-flattens or the stall resolves into a flip/floor break</span>
            </h2>

            <p>
              Of the 08-09 decision conditions: the demand re-acceleration
              DID NOT FIRE (the $65,435 probe was sold, OI shed −902/4h, the
              fast frames rolled over); the certified SM roll-back-short FIRED
              (+155 → −3,405, stable 17h, through the BJ 15:01 artifact); the
              1d-close-below-flip / floor cut DID NOT FIRE (closes hold above
              both the $63,641 flip and the $63,760 200W floor); the funding
              re-heat continued (24h mean
              +5.92% → +7.36%, 0/1442 negative); the D-EMA50 cap reclaim HELD
              (three completed closes above, 08-10 in-progress still above); the
              chase-short re-arm DID NOT FIRE
              (gamma stayed deeply positive +111.3M, spot above the flip, floor
              held). <em>One kill condition fired clean (SM roll-back-short), one
              soft condition weakened (demand re-acceleration did not fire — a
              soft quality miss, not a cap-losing close), the harder breakdown
              cut did not, and the structural backdrop — cap, gamma, floor — is
              intact.</em> By the prior note&rsquo;s own rule the scout is cut to
              flat; the conditions re-set around a flat book, a held cap, a
              rolled-short position book, and a deferred re-entry:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Certified SM roll-back-short (FIRED)</td><td className="bear">SM net +155 → −3,405 (long −2,410, short +1,150), stable 17h · re-synced through the BJ 15:01 (07:01Z 08-09) feed artifact</td><td>cut the 0.4R scout to flat — on the prior note&rsquo;s explicit rule; no flip-to-short</td></tr>
                <tr><td>Scout re-entry (long) — deferred</td><td className="bull">SM net re-flattens ≥ −1k AND 1d close holds &gt; D-EMA50 $64,661</td><td>scout long 0.2R starter; add 0.2R only on a 1d close &gt; $65,435 with OI rebuilding; target $66,839 / $67,096</td></tr>
                <tr><td>Digestion-above-cap holds</td><td className="bull">1d closes hold &gt; D-EMA50 $64,661 AND aggregate GEX stays positive</td><td>cap-held read continues; the scout re-arms as soon as the position book confirms</td></tr>
                <tr><td>Cap lost (structural escalation)</td><td className="bear">1d close &lt; D-EMA50 $64,661, then &lt; $63,641 flip / $63,761 200W floor</td><td>the digestion-above-cap thesis is falsified; a close below the flip/floor is the first structural break and re-opens the chase-short question</td></tr>
                <tr><td>Chase-short re-arm (low base rate now)</td><td className="bear">aggregate GEX flips negative AND 1d close &lt; $63,641 flip</td><td>arm short toward the $60k −16.04M crash-put shelf; base rate low — gamma is +111.3M and the floor holds</td></tr>
                <tr><td>Funding re-heat / retail re-crowd (watch)</td><td className="bear">24h mean funding +7.36% ann, 0/1442 negative; mkt_long 53.78% (+0.38pt)</td><td>no action — a leverage-off flush (funding negative print + retail de-crowd) would strengthen the scout re-entry case if it comes with the SM re-flatten</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">10Y &lt; 4.55% close — FALSE at 4.69% (14bp on the wrong side)</td><td>standalone filter false; a macro tailwind for the scout would need 10Y back under 4.55%</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the position book re-flattens off the D-EMA50 cap (SM
                back toward flat on the next BJ 14:00–15:00 re-sync or a genuine
                cover, with the 24h spot bid finally translating to price toward
                the $66.8k–$67.1k confluence), or whether the stall resolves
                lower — a 1d close losing the cap and then the $63,641 flip /
                $63,761 floor
              </span>. The scout is cut to flat on-rule; the chase-short is
              stood down; the re-entry is deferred but short-fused on the SM
              re-flatten. The structural backdrop is intact — the D-EMA50 cap
              held three completed closes (08-10 in-progress still above), the
              dealer book is +111.3M long-gamma, the 200W floor holds its 6th
              weekly close, the slow MTF frames lean up, and
              a heavy 24h spot bid is still absorbing under the tape — but the
              position book (SM short, retail crowded long) and the fast frames
              (fresh 1h death cross) say the near-term momentum has stalled at
              the cap. The right read for the next 24h is{' '}
              <em>flat and patient — let the book re-flatten before re-entering,
              and do not short a stall inside a long-gamma clamp</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit —{' '}
              <code>audits/2026-08-10-desk-note.md</code>, BLOCK-CRITICAL: 1
              CRITICAL + 3 MAJOR + 3 MINOR)
            </span>
            <b>Status:</b> STAGE B codex hostile audit returned BLOCK-CRITICAL;
            STAGE C applied every finding and ran the mandatory grep-closure
            loop (pattern → hits-before → hits-after) before promoting v1 → v2.
            The <code>ask-deepseek</code> numeric second-pass timed out (curl 28,
            300s) and produced no additional items; codex remains the primary
            gate. Per-finding resolution:{' '}
            <b>DN-001 (CRITICAL)</b> — the in-progress 08-10 bar was counted as a
            completed &ldquo;4th consecutive daily close&rdquo;; searched{' '}
            <code>4th</code> / <code>four consecutive</code> /{' '}
            <code>four closes</code> / <code>fourth</code> (8 hits before, 0
            after) — reframed to three completed closes (08-07/08-08/08-09) with
            the 08-10 session still above the cap in-progress, at lead, MA
            paragraph, roman headers, trade book, decision conditions and this
            trace — <b>RESOLVED</b>.{' '}
            <b>DN-002 (MAJOR)</b> — the 24h low timestamp was off by 8h; searched{' '}
            <code>19:17</code> / <code>11:17Z</code> (1 hit before, 0 after) —
            corrected to $64,730 @ BJ 11:17 08-09 (03:17Z) — <b>RESOLVED</b>.{' '}
            <b>DN-003 (MAJOR)</b> — the note over-claimed the failed-test trim as
            fired; searched <code>Two of those fired</code> /{' '}
            <code>which alone would trim the add</code> /{' '}
            <code>demand test failed</code> (as kill condition) (3 hits before, 0
            after) — reframed as a soft quality miss (demand re-acceleration did
            not fire), keeping the flat cut grounded solely on the certified SM
            roll-back-short; the failed-test trim needs a 1d close back under the
            cap, which did not happen — <b>RESOLVED</b>.{' '}
            <b>DN-004 (MAJOR)</b> — the stale 08-03 200W floor ($63,533.52) is
            unrecoverable from the atomic snapshot and the current source
            contradicts it; searched <code>63,533</code> / <code>+2.10%</code> /{' '}
            <code>$1,334</code> / <code>7 days stale</code> as current-floor
            claims (before: all current-floor references on the 08-03 value;
            after: 0) — updated to the live trap-watch JSON (recomputed_at
            2026-08-10 00:11:24Z, 4 min post the 00:07 anchor, disclosed): sma200
            $63,760.71, consecutive_above 6, distance +1.74% (+$1,107) vs the
            08-09 settle $64,867.80. Two <code>63,533</code> strings remain by
            design and do not carry the pre-fix meaning: the manifest flag labels
            $63,533.52 as the prior-note value not archived/recoverable, and the
            trade-book quote of the 08-09 kill rule (&ldquo;$63,676 flip /
            $63,533 floor&rdquo;) is a verbatim historical quote, not a
            current-floor claim — <b>RESOLVED</b>.{' '}
            <b>DN-005 (MINOR)</b> — the $65k–$72k band did not sum to the stated
            ~+99M; searched <code>roughly +99M</code> (1 hit before, 0 after) —
            corrected to ~+108M (20.63 + 20.37 + 16.75 + 16.74 + 14.08 + 10.11 +
            8.99 = 107.67M) — <b>RESOLVED</b>.{' '}
            <b>DN-006 (MINOR)</b> — the one-minute SM step baseline was rounded to
            the daily anchor; searched{' '}
            <code>+155 → −3,945 step printed in a single minute</code> (1 hit
            before, 0 after) — corrected to the actual pre-step row: BJ 15:00 →
            15:01 went +138 → −3,945, with the +155 → −3,405 move stated against
            the prior daily anchor — <b>RESOLVED</b>.{' '}
            <b>DN-007 (MINOR)</b> — the 4h/1h flow windows used an undisclosed
            boundary convention; added an inline note that the 4h/1h blocks are
            cumulative deltas from the previous boundary row (BJ 04:04 → 08:05,
            07:04 → 08:05), not exact same-clock opens (0 undisclosed windows
            after) — <b>RESOLVED</b>. All seven RESOLVED (hits-after = 0 for
            every finding); <b>post codex hostile audit</b>. The self-contained
            arithmetic a reviewer should re-attack: funding × 1095 (live +8.12%
            ann from raw 0.007419, 24h mean +7.36%, 0/1442 negative); the GEX
            dual-reference sign (flip $63,641, spot +1.97% / Deribit idx +2.43%,
            both positive); the SM roll-back (+155 → −3,405, long −2,410, short
            +1,150, Δnet −3,560) with the BJ 15:00 → 15:01 (07:00Z → 07:01Z
            08-09) single-minute artifact; the MA matrix vs live spot $64,896 off
            parquet 2026-08-10 00:05Z close $64,868.00 (D-EMA50 cap $64,661
            +0.36%, three completed closes above with 08-10 in-progress still
            above; W-SMA200 non-computable at 190 weekly bars; W-EMA150/200
            seed-disclosed); the 200W floor 6th above-floor weekly close (08-09
            $64,867.80 vs sma200 $63,760.71, +1.74%, JSON refreshed 08-10
            00:11:24Z, post-anchor); 30D RV 27.66% (30 returns); cross-asset (|r|
            0.207, BTC +2.44% vs NQ +4.36% = −1.92pt); macro Tier-1 (10Y 4.69%
            +6bp, TIPS 2.43%, HY OAS 2.71% −4bp, DXY 99.62, Fed net liq $5.840T,
            MOVE unavailable); the reclaim-long rates filter FALSE at 14bp;
            claims-vs-loaded-data (NTT / max-pain / strike-IV / BTC-NQ
            framework-only; JGB monthly do not lean; IV chain-median across 828
            instruments not a tradable spread); and the requireViewer gating
            pattern (first statement of the default export). <b>Build note
            (INFO):</b> the lineage runs <code>npx --no-install next build</code>{' '}
            as the publish gate in STAGE E; STAGE C validated with{' '}
            <code>npx --no-install tsc --noEmit</code> (exit 0).
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-08-10 00:07Z, tape
            anchor 00:05Z) with section-level provenance disclosed in the
            manifest band above; the macro Tier-1 panel render is 2026-08-09
            22:15Z (~1.9h before snapshot) and some inputs are explicitly stale
            or unavailable (MOVE) and flagged as such. Levels, sizes, and
            conditions are illustrative of the desk&rsquo;s process, not standing
            recommendations. Past correlation, gamma, and positioning patterns
            do not bind future tape. Derivatives carry the risk of total loss
            and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The cap held its floor but the extension stalled, and the
                position book rolled back short. The scout is cut to flat on its
                own rule. No short into a long-gamma clamp. Flat and patient.
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
            v2 · 2026-08-10 00:07Z snapshot · post codex hostile audit
            (2026-08-10T00:30Z) · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
