import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// Internal-only route: not in public nav, not in sitemap, noindex/nofollow.
// Description deliberately anodyne — any future external share (Slack/email
// link preview) shows neutral text rather than dated trade specifics.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-05-24 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-05-24',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-05-24' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260524() {
  await requireViewer('/desk/2026-05-24');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · DESK NOTE · 2026-05-24 · v2</span>
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
              <span className="dn-big">$76,752</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.56%</span>
            </div>
          </div>

          {/* DATA PROVENANCE BAND */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-05-24 00:00Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-24 00:00Z (pinned)</td>
                  <td className="dn-flag">fresh · 1-min · file tail at run time 00:09Z</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-05-24 00:01Z scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    ~1-min stale vs snapshot anchor · in-progress bar · scan
                    archived in audits/2026-05-24-desk-note.md
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 00:01Z snapshot</td>
                  <td className="dn-flag">fresh · Deribit idx $76,784 vs live $76,752 · 932 inst.</td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 00:01Z
                  </td>
                  <td className="dn-flag">~1-min lag · 7d 1h bars · 22 assets</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-23 22:17Z render</td>
                  <td className="dn-flag">
                    ~1.7h render lag · FRED Tier-1 unchanged from 05-23 weekend
                    print · next FRED update Monday
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-05-24 00:06Z</td>
                  <td className="dn-flag">
                    ~6-min stale vs snapshot anchor · offsets recomputed vs live spot
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
              <span className="dn-v bear">+9.9%</span>
              <span className="dn-src">live · 00:00Z · 24h mean +6.27% · longs pay hard</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+2.0% → +9.9%</span>
              <span className="dn-src">range +0.34% / +9.92% · net climb (511 up-min · 433 down)</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v">−1.84% (−1,934 BTC)</span>
              <span className="dn-src">live · longs covered on the bounce back</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v">55.3 / 44.7</span>
              <span className="dn-src">live_db `mkt_long_pct` · less crowded 60.1 → 55.3</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−24.9k (net SHORT)</span>
              <span className="dn-src">live · long 9.66k − short 34.53k</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 05-23 note</span>
              <span className="dn-v bear">−14.5k → −24.9k</span>
              <span className="dn-src">peaked −32.4k @ 2026-05-23 08:51Z · re-stacked at 05:00Z BJ 13:00</span>
            </div>
            <div>
              <span className="dn-k">IV / 30d RV</span>
              <span className="dn-v">42.2% / 26.2%</span>
              <span className="dn-src">GEX median IV · 932 inst.</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+1.30% (above)</span>
              <span className="dn-src">flip $75,768 · aggregate GEX +83.8M (was −57.1M)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              Two things happened after the 05-23 snapshot. First, the 05-23
              runner <span className="dn-signal">held all the way through
              the down move</span>: post-snapshot 1h closes stayed sub-flip
              for ~20 UTC hours, the runner&rsquo;s second-target gate
              (1h close &lt; $75,000) fired at 2026-05-23 07:00Z (close{' '}
              <span className="dn-tag">$74,547</span>) and the planned
              half-of-runner cover printed inside the move, spot continued
              to the 24h low of{' '}
              <span className="dn-tag">$74,378</span> at 2026-05-23 07:51Z
              ($378 above the runner&rsquo;s $74,000 stretch target). Then
              the cover signal (1h close &gt; $76,325, flip reclaim) fired
              ~13 hours later at 2026-05-23 20:00Z (close{' '}
              <span className="dn-tag">$77,132</span>) and the residual
              flattened on the bounce. Second,{' '}
              <span className="dn-signal">
                SM did it again — a single-hour, two-discrete-minute
                re-stack from −14.3k to −32.3k at 2026-05-23 05:00Z (BJ
                13:00) with spot around $75,500
              </span>, the deepest SM net short of the entire week
              (peak −32.4k at 2026-05-23 08:51Z). The desk had the right
              directional read and the rule-based sequence captured the
              meat of the move; the conditional sub-$75k add ticket also
              armed at the 07:00Z gate and stopped on the same bounce,
              eating most of the runner&rsquo;s P&amp;L back — net trade
              landed positive on the planned-target portion and mixed on
              the rule-based add, the honest mark being a small overall
              win driven by the held runner not by the chased add.
            </p>

            <p>
              BTC is back at <span className="dn-tag">$76,752</span>, +1.56%
              on 24h, +1.30% above the new <span className="dn-tag">0-γ flip
              $75,768</span>, and pinned against a four-line MA cluster
              within a $113 band:{' '}
              <span className="dn-tag">D-EMA50 $76,714 (+0.05%)</span>,{' '}
              <span className="dn-tag">D-SMA50 $76,738 (+0.02%)</span>,{' '}
              <span className="dn-tag">D-SMA150 $76,792 (−0.05%)</span>,{' '}
              <span className="dn-tag">D-EMA100 $76,827 (−0.10%)</span>.
              Dealer gamma flipped back{' '}
              <span className="dn-signal">positive +83.8M</span> (was −57.1M
              24h ago — a ~$141M swing the other way inside a single day),
              SM has trimmed ~7k of the −32.3k short stack to −24.9k but
              never crossed the cover signal (−5k), funding is paying
              shorts <span className="dn-tag bear">+9.9% ann live</span> off
              a 24h climb from +2.0%, and OI is{' '}
              <span className="dn-tag">−1.84% (−1,934 BTC)</span> while
              price bounced — long covers, not fresh longs.{' '}
              <span className="dn-em">
                The set-up is a squeeze look (record SM short + funding
                paying shorts + dealer gamma dampening + MA pin) that
                hasn&rsquo;t been ratified by the only thing that would
                matter — SM actually covering. Below the flip $75,768 the
                regime flips back to amplifying and the $75k −31.7M pocket
                re-arms; the cluster is the switch.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · second re-stack</span>
            </h2>

            <p>
              Yesterday&rsquo;s runner is the entry the desk should mark
              first. The 05-23 note set the runner&rsquo;s trail at $76,400
              (intraday) and cover-signal at 1h close &gt; $76,325
              (flip reclaim), plus the §VI rule for the runner&rsquo;s
              second target (1h close &lt; $75,000) and an add re-arm at
              the same level when SM net was still &lt; −5k. After the
              snapshot, 1h closes immediately went sub-$75,600 and stayed
              below the flip for the next ~20 UTC hours. The
              second-target gate fired at{' '}
              <span className="dn-tag">2026-05-23 07:00Z, 1h close $74,547</span>
              {' '}— cover half of the 0.15R runner at the close (lock in
              $1,950/unit on that slice). The add re-arm fired at the
              same gate (1h close &lt; $75k + SM net &lt; −5k were both
              true) so +0.2R short took on at the next opportunity around{' '}
              <span className="dn-tag">~$74,547</span>. Spot then printed
              the 24h low <span className="dn-tag">$74,378</span> at
              07:51Z ($378 above the runner&rsquo;s stretch target). The
              cover signal (1h close &gt; $76,325) fired ~13 hours later at{' '}
              <span className="dn-tag">2026-05-23 20:00Z, 1h close $77,132</span>
              {' '}— flatten residual + add. P&amp;L stack vs entry $76,497:
              {' '}<span className="dn-tag">+0.15R @ $75,700 = +$797/unit</span>
              {' '}(05-22), then{' '}
              <span className="dn-tag">+0.075R @ $74,547 = +$1,950/unit</span>
              {' '}(second target), then{' '}
              <span className="dn-tag">+0.075R @ $77,132 = −$635/unit</span>
              {' '}(residual stop), and the add{' '}
              <span className="dn-tag">+0.2R @ $74,547 → −$2,585/unit @ $77,132</span>
              . Per-R-unit normalisation: runner-only net ≈ +0.165R/unit (P&amp;L
              of the planned-target sequence); with the rule-armed add it
              drops to ≈ −0.06R/unit on the same R basis. Honest mark:{' '}
              <span className="dn-em">
                the desk caught the meat of the down move on the planned
                runner schedule and gave it back chasing the rule-armed
                add into the printed bottom — net ~flat-to-small-positive
                if the add is treated as discretionary-skip, net small-loss
                if the add is honored as written
              </span>
              . Both readings are recorded; the 05-23 framework block
              had already flagged &ldquo;use the TD9 BUY to manage the
              short, not enter a long&rdquo;, which is the discretion
              that would have skipped the add.
            </p>

            <p>
              SM is the bigger story. The 05-23 snapshot pinned SM at{' '}
              <span className="dn-tag bear">−14.5k</span>; at{' '}
              <span className="dn-tag">2026-05-23 05:00Z (BJ 13:00)</span>{' '}
              it collapsed to <span className="dn-tag bear">−32.3k</span>{' '}
              inside one hour — two discrete minute-steps at 05:26Z
              (−14.0k step) and 05:31Z (−4.1k step), the same hard-step
              pattern as the 05-22 06:30Z re-stack but larger (long 11.7k
              → 8.0k, short 25.9k → 40.3k — a +14.4k swing of margin).
              Spot at the moment of the step was{' '}
              <span className="dn-tag">~$75,500</span>; spot continued
              down to <span className="dn-tag">$74,378</span> at 07:51Z;
              SM <em>peak</em> short of{' '}
              <span className="dn-tag bear">−32.4k</span> printed at{' '}
              <span className="dn-tag">2026-05-23 08:51Z</span> (long
              7.46k − short 39.83k). From the −32.4k peak SM has trimmed
              back to <span className="dn-tag bear">−24.9k</span> now
              (long 9.66k − short 34.53k), a partial cover of ~7.5k BTC
              of margin over the last ~15 hours.{' '}
              <span className="dn-em">
                SM has covered some but not nearly enough to flip the
                read: the long book is the smallest of the week (9.66k vs
                28.8k on 05-17), the short book is the largest (34.53k
                vs 12.7k on 05-17). The cover-signal threshold from 05-23
                (SM net &gt; −5k) is ~$20k of margin away. The stack is
                unwinding into strength, not running for the door — note
                that SM net has not crossed −5k at any minute in the
                entire 24h window.
              </span>
            </p>

            <p>
              The leverage side has the loudest tell. Funding live is{' '}
              <span className="dn-tag bear">+9.9% ann</span> — the highest
              long-pay reading since 05-17&rsquo;s +5.0%, up from{' '}
              <span className="dn-tag">+2.0% ann 24h ago</span>, with a 24h
              path that net-climbed with noise (range +0.34% / +9.92%,
              mean +6.27%, 511 up-minutes vs 433 down). OI is{' '}
              <span className="dn-tag">−1.84% (−1,934 BTC) on 24h</span> —
              OI shrinking on a +1.56% bounce is the signature of long
              covers and short-position trims, not fresh longs piling in.
              Retail uncrowded: Binance{' '}
              <span className="dn-tag">mkt_long_pct 55.3%</span> from
              60.1% 24h ago — retail trimmed length into the bounce after
              being crowded long into the 05-23 fall (the wrong side both
              ways). Perp trades a{' '}
              <span className="dn-tag bear">−$106 discount</span> to spot
              (1h mean −$102, range −$122 / −$70), wider than 05-23&rsquo;s
              −$99 — the offshore (spot) bid is still leading and the
              futures order book sits at a structural discount;{' '}
              <span className="dn-em">
                you would expect the perp discount to compress on a real
                cover, not widen. It widened.
              </span>{' '}
              1-minute aggressor skew_agg snapshot{' '}
              <span className="dn-tag">−11.6</span> (noisy minute read;
              1h mean +1.4, range −53 / +46 — treat the snapshot as a
              point, not a window).
            </p>

            <p>
              Windowed flow puts the day inside the broader bounce.
              24h: price <span className="dn-tag bull">+1.56%</span>, OI{' '}
              <span className="dn-tag">−1,934 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −5,229</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +4,273</span>, big-print{' '}
              <span className="dn-tag bull">+1,126 BTC / 1,010 prints</span>,
              taker-net <span className="dn-tag bull">+1,340</span> —{' '}
              <span className="dn-em">
                spot CVD bled while futures CVD bid: this is a
                futures-led bounce against persistent offshore spot
                supply, with the big-print tape on the buy side
              </span>
              . 4h: price <span className="dn-tag bull">+0.99%</span>,
              OI <span className="dn-tag">−1,446 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +592</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +846</span>, big-print{' '}
              <span className="dn-tag bull">+661 BTC / 150 prints</span>,
              taker-net <span className="dn-tag bull">+966</span> —
              fresh aggressive buying. 1h (into the snapshot): price{' '}
              <span className="dn-tag bull">+0.26%</span>, OI{' '}
              <span className="dn-tag">−148 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −410</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +768</span>, big-print{' '}
              <span className="dn-tag bull">+174 BTC / 30 prints</span>,
              taker-net <span className="dn-tag bull">+766</span> — the
              same futures-led, spot-supply pattern at higher
              resolution. Read in order: the day is a bounce off
              $74,378 carried by futures buying that ran into the MA
              cluster pin, with spot CVD still bleeding underneath.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · fresh golden crosses · pinned at cluster</span>
            </h2>

            <p>
              The structure flipped from{' '}
              <span className="dn-em">bear-trending with fast-TF oversold</span>{' '}
              on 05-23 to{' '}
              <span className="dn-signal">
                pinned at the cluster with fresh 4h+8h golden crosses,
                fast RSIs back to neutral-warm
              </span>
              . The 1h TD9 BUY at $75,475 ratified — price recovered
              $1,277 from the print, into the MA cluster. RSIs un-stretched:
              1h <span className="dn-tag">23.1 → 62.3</span>, 30m{' '}
              <span className="dn-tag">21.1 → 67.6</span>, 15m{' '}
              <span className="dn-tag">29.7 → 64.9</span>. Cross-pattern:
              4h printed a <span className="dn-tag bull">water-down
              golden cross just now (刚印)</span> and 8h the same — both
              are the early-cross variety (DIF below zero) on the runbook
              taxonomy, &ldquo;short-to-long probe&rdquo; not confirmation.
              The 1h carries a <span className="dn-tag bull">water-down
              golden cross 11b ago</span>. Cloud picture upgraded:
              15m / 1d / 1M above; 30m above (out of cloud, 7 bars);
              1h in cloud (76.5k–76.8k, transitional); 4h / 8h / 1w
              below cloud; 12h below 3 bars; 3d in cloud
              (73.5k–93.0k).{' '}
              <span className="dn-em">
                Read straight: the fast TFs absorbed the oversold and
                printed early reversal patterns; the mid TFs (4h/8h)
                are mid-reversal-attempt with crosses just printed but
                still below cloud; the slow TFs (1d/1w/3d/1M) are
                unchanged from yesterday&rsquo;s coil. The MTF allows
                a counter-trend bounce to continue; it does not yet
                ratify a regime flip from bear to bull.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">76,758</td><td className="num">64.9</td><td className="bear">death (water-up) 6b</td><td className="bull">above ↓75.3k 38b</td><td>Sell 5</td><td>BULL hid</td></tr>
                <tr><td>30m</td><td className="num">76,758</td><td className="num">67.6</td><td className="bull">golden (water-dn) 26b</td><td className="bull">above ↓75.9k 7b</td><td>Sell 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">76,758</td><td className="num">62.3</td><td className="bull">golden (water-dn) 11b</td><td className="neut">in cloud 76.5k–76.8k 1b</td><td>Buy 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">76,758</td><td className="num">51.0</td><td className="bull">golden (water-dn) 0b · 刚印</td><td className="bear">below ↑77.6k 51b</td><td>Sell 3</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">76,758</td><td className="num">—</td><td className="bull">golden (water-dn) 0b · 刚印</td><td className="bear">below cloud</td><td>—</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">76,758</td><td className="num">44.2</td><td className="neut">—</td><td className="bear">below ↑78.0k 3b</td><td>Buy 4</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">76,758</td><td className="num">45.9</td><td className="bear">death (water-up) 12b</td><td className="bull">above ↓74.7k 38b</td><td>Buy 3</td><td>BEAR reg</td></tr>
                <tr><td>3d</td><td className="num">76,758</td><td className="num">50.9</td><td className="neut">—</td><td className="neut">in cloud 73.5–93.0k 7b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">76,758</td><td className="num">45.6</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑100.3k 16b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">76,758</td><td className="num">48.9</td><td className="neut">—</td><td className="bull">above ↓46.9k 27b</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (rolling latest
                    file; archived verbatim in audits/2026-05-24-desk-note.md).
                    Header alerts: <em>4h water-down golden cross 刚印</em>{' '}
                    and <em>8h water-down golden cross 刚印</em> — both are
                    early-cross (DIF below zero) variety, treat as
                    short-to-long probe, not confirmation. No active ⚡TD9
                    on this scan (yesterday&rsquo;s 1h TD9 BUY at $75,475
                    ratified — price recovered $1,277 from the print).
                    Closes are in-progress bars; treat every value as
                    provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is the loudest cell on the page.{' '}
              <span className="dn-signal">
                Four Daily MAs cluster within $113 of spot
              </span>
              : <span className="dn-tag">D-EMA50 $76,714 (+0.05%)</span>,{' '}
              <span className="dn-tag">D-SMA50 $76,738 (+0.02%)</span>,{' '}
              <span className="dn-tag">D-SMA150 $76,792 (−0.05%)</span>,{' '}
              <span className="dn-tag">D-EMA100 $76,827 (−0.10%)</span>.
              Spot is mechanically pinned. Above the cluster sits the
              next ladder of overhead:{' '}
              <span className="dn-tag bear">D-EMA20 $77,849 (−1.41%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $78,110 (−1.74%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $78,285 (−1.96%)</span>,{' '}
              <span className="dn-tag bear">D-SMA20 $79,001 (−2.85%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $79,071 (−2.93%)</span>,
              then the{' '}
              <span className="dn-tag bear">D-SMA200/EMA200 $80.5–81.5k (−4.68/−5.83%)</span>{' '}
              ceiling. Below: thin shelf at{' '}
              <span className="dn-tag bull">W-SMA20 $74,998 (+2.34%)</span>,
              then the long-runway{' '}
              <span className="dn-tag bull">W-EMA200 $73,698 (+4.14%)</span>{' '}
              / <span className="dn-tag bull">D-SMA100 $72,682 (+5.60%)</span>{' '}
              cycle anchor. Far above and disused: W-SMA50{' '}
              <span className="dn-tag bear">$94.0k (−18.35%)</span>,
              W-SMA100 <span className="dn-tag bear">$88.2k (−13.00%)</span>,
              W-EMA50 <span className="dn-tag bear">$85.2k (−9.94%)</span>.{' '}
              <span className="dn-em">
                W-SMA150 / W-SMA200 are still not computed — parquet
                history holds 125 weekly bars, short of both windows;
                W-EMA150 $78,285 (−1.96%) and W-EMA200 $73,698 (+4.14%)
                show because the EMA seeds from available history. All
                MAs anchored to parquet last bar 2026-05-24 00:06Z
                (close $76,628); offsets recomputed against live spot
                $76,752. Displayed MA levels are $-rounded; offsets are
                computed from exact series values.
              </span>{' '}
              The cluster is the switch the dealer map will trade
              against — see §III.
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · GEX flipped back positive · flip dropped</span>
            </h2>

            <p>
              Dealer gamma <span className="dn-signal">
                flipped back from −57.1M to +83.8M
              </span>{' '}
              — a ~$141M move in the dampening direction inside 24h, larger
              than the 05-23 −$125M flip the other way. Aggregate GEX is{' '}
              <span className="dn-tag bull">+83.8M/1%</span>, and the 0-γ
              flip dropped to <span className="dn-tag">$75,768</span>
              {' '}(−$557 vs 05-23&rsquo;s $76,325). Spot $76,752 sits{' '}
              <span className="dn-tag bull">+1.30% above flip</span> — the
              GEX file&rsquo;s own &ldquo;dist to flip&rdquo; reads the
              same <span className="dn-em">+1.3%</span> off Deribit-index
              $76,784 (idx ~$32 above live spot; dual reference agrees
              within rounding). Above the flip dealers are long gamma,
              which means hedging flows <span className="dn-em">dampen</span>{' '}
              the next move — the same dealer book that accelerated the
              break to $74,378 yesterday now slows continuation in either
              direction here. The positive ceiling re-thickened: top wall
              at <span className="dn-tag bull">$80k +45.69M</span> (was
              $80k +29.06M on 05-23 — gained back ~$17M),{' '}
              <span className="dn-tag bull">$82k +18.86M</span> (was
              +13.92M), <span className="dn-tag bull">$78k +10.61M</span>{' '}
              (was negative), <span className="dn-tag bull">$85k
              +9.58M</span>, <span className="dn-tag bull">$90k +8.77M</span>,{' '}
              <span className="dn-tag bull">$81k +7.82M</span>. The
              negative pocket below thinned but did not go away:{' '}
              <span className="dn-tag bear">$75k −31.66M</span> (was
              −53.53M on 05-23 — re-armed lighter as some of the put
              gamma decayed),{' '}
              <span className="dn-tag bear">$74k −10.21M</span> (was
              −13.86M), <span className="dn-tag bear">$76k −9.58M</span>{' '}
              (was −15.21M), <span className="dn-tag bear">$60k
              −7.97M</span> crash-put residual. By-expiry strip flipped
              from a one-week negative tunnel to a mostly-positive
              ladder:{' '}
              <span className="dn-tag bull">24MAY 0DTE +3.70M</span>,{' '}
              <span className="dn-tag bear">25MAY −12.64M</span> (the
              one residual negative in the front),{' '}
              <span className="dn-tag bull">26MAY +2.22M</span>,{' '}
              <span className="dn-tag">27MAY +0.32M</span>,{' '}
              <span className="dn-tag bull">29MAY +17.28M</span> (the
              load-bearing front expiry),{' '}
              <span className="dn-tag bull">5JUN +3.59M</span>,{' '}
              <span className="dn-tag bull">12JUN +4.44M</span>,{' '}
              <span className="dn-tag bull">26JUN +14.52M</span>, then
              positive through year-end.
            </p>

            <p>
              Read it straight:{' '}
              <span className="dn-signal">
                the dealer regime that accelerated yesterday&rsquo;s break
                is gone; the regime that supported the 05-21 / 05-22 coil
                is back, and louder
              </span>
              . Positive +83.8M is the strongest dampening read since
              05-22&rsquo;s +67.4M (before that day&rsquo;s flip). The
              MA-cluster pin (§II) gets dealer-flow support: spot is
              wedged between long-gamma overhead and the $75k negative
              pocket below, and dealer hedging will trade against
              either-direction departure. The 25MAY −12.64M strip is the
              one near-term wrinkle — a Sunday-night negative front pocket
              that could amplify a downside move if positioning rolled
              negative again. IV median across 932 instruments is{' '}
              <span className="dn-tag">42.2%</span> against 30D
              close-to-close RV of{' '}
              <span className="dn-tag">26.2%</span> — chain-level
              richness <span className="dn-tag">~+16.0pt</span>, slightly
              wider than 05-23&rsquo;s +15.7pt and 05-22&rsquo;s +17.5pt.
              A chain-median across N instruments,{' '}
              <span className="dn-em">not</span> a tradable spread;
              expiry- / strike-level vega, skew and term structure remain
              not loaded; the vol read stays framework-only.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · weekend flat · cross-asset · BTC single-name lag</span>
            </h2>

            <p>
              <span className="dn-signal">
                Macro is essentially identical to 05-23 — Sunday read,
                FRED weekend
              </span>
              . Dashboard render is 2026-05-23 22:17Z, ~1.7h before the
              snapshot. US 10Y nominal <span className="dn-tag">4.57%
              (0.0bp)</span> — still 2bp above the 4.55% reclaim-long
              filter floor (failed for 3 sessions running). 10Y TIPS real{' '}
              <span className="dn-tag bear">2.18% (+5.0bp)</span> — ticked
              back up after 05-23&rsquo;s +5bp itself, regime z still
              +2.26 risk-off. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.26% (+5.0bp)</span>{' '}
              — the one fresh Friday-print tick, +5bp from yesterday&rsquo;s
              shown 2.21% (note: 2026-05-23&rsquo;s page carried a 5Y5Y
              −8bp Δ from 05-22; today&rsquo;s panel shows 5Y5Y at 2.26%
              +5bp — the +5bp is vs the prior shown value, the level itself
              is back to 05-22 territory). HY OAS{' '}
              <span className="dn-tag bull">2.78% (−2bp)</span> — eased,
              regime still loose. MOVE bond vol{' '}
              <span className="dn-tag">78.4 (−1.29)</span> — eased further.
              DXY <span className="dn-tag bear">99.32 (+0.13)</span> — tight
              episodic flag, +1.85σ episodic. Fed net liquidity{' '}
              <span className="dn-tag bull">$5.907T (+0.030T)</span>. The slow
              regime z-scores remain extreme — 10Y{' '}
              <span className="dn-tag bear">+2.24</span>, TIPS{' '}
              <span className="dn-tag bear">+2.26</span>, JGB{' '}
              <span className="dn-tag bear">+2.55</span>, EXTREME RISK-OFF
              flags intact — but the day&rsquo;s deltas are not what
              changed.{' '}
              <span className="dn-em">
                The credit-crack watch from 05-21 receded further — HY OAS
                2.78% is ~22bp from the 3.0% re-grow gate; the
                reclaim-long rates filter (10Y &lt; 4.55%) is still 2bp
                away. Macro is a flat backdrop today; the move from
                $74,378 → $76,752 came from the BTC book covering, not
                from a fresh macro impulse.
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
                <tr><td>5Y5Y BE inflation</td><td className="num">2.26%</td><td className="num bear">+5.0bp</td><td className="num">+0.35</td><td className="num">+0.47</td><td className="neut">no tag · back to 05-22</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num bull">−2.0bp</td><td className="num bull">−0.98</td><td className="num bull">−1.02</td><td className="bull">loose · risk-on</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num stale">−0.523</td><td className="num">−0.01</td><td className="num bull">−0.48</td><td className="num bull">−1.35</td><td className="stale">stale 8d · neutral</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">78.4</td><td className="num bull">−1.29</td><td className="num">+0.11</td><td className="num">+1.01</td><td className="neut">vol eased further</td></tr>
                <tr><td>DXY</td><td className="num">99.32</td><td className="num bear">+0.13</td><td className="num bear">+0.93</td><td className="num bear">+1.85</td><td className="bear">tight episodic</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.907T</td><td className="num bull">+0.030T</td><td className="num bull">+0.77</td><td className="num bull">+2.16</td><td className="bull">loose · surge</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.15</td><td className="num">+0.14</td><td className="num bear">+1.21</td><td className="num">+0.62</td><td className="neut">no tag</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.06%</td><td className="num">0.0bp</td><td className="num bull">−0.65</td><td className="num bear">+1.52</td><td className="bear">tight episodic</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7940</td><td className="num bull">−0.01</td><td className="num bull">−1.82</td><td className="num bull">−1.35</td><td className="neut">no tag</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.403</span> (tightened from
              05-23&rsquo;s 0.395 — still NORMAL band). BTC&rsquo;s listed
              ties: NQ <span className="dn-tag">+0.668</span>, SP500{' '}
              <span className="dn-tag">+0.642</span>, CL{' '}
              <span className="dn-tag">−0.617</span>, NVDA{' '}
              <span className="dn-tag">+0.572</span>, BRENT{' '}
              <span className="dn-tag">−0.543</span>, SILVER{' '}
              <span className="dn-tag">+0.484</span>, GOLD{' '}
              <span className="dn-tag">+0.449</span>, TSLA{' '}
              <span className="dn-tag">+0.475</span>. 7d relative
              performance: <span className="dn-tag bear">BTC −1.49%</span>,
              NQ <span className="dn-tag bull">+3.01%</span>, SP500{' '}
              <span className="dn-tag bull">+2.60%</span>, JP225{' '}
              <span className="dn-tag bull">+2.45%</span>, NVDA{' '}
              <span className="dn-tag bear">−1.54%</span>, AAPL{' '}
              <span className="dn-tag bull">+4.36%</span>, TSLA{' '}
              <span className="dn-tag bull">+3.47%</span>, AMZN{' '}
              <span className="dn-tag bull">+3.22%</span>, GOOGL{' '}
              <span className="dn-tag bear">−1.93%</span>; metals mixed —
              GOLD <span className="dn-tag bull">+0.15%</span>, SILVER{' '}
              <span className="dn-tag bull">+2.57%</span>, PALL{' '}
              <span className="dn-tag bear">−4.59%</span>, PLAT{' '}
              <span className="dn-tag bear">−3.64%</span>; energy
              collapsed — CL{' '}
              <span className="dn-tag bear">−12.05%</span>, BRENT{' '}
              <span className="dn-tag bear">−11.57%</span>, NGAS{' '}
              <span className="dn-tag bear">−3.10%</span>.{' '}
              <span className="dn-em">
                The 7d window now shows the major US indices up +2.6 to
                +3.0% (NQ +3.01%, SP500 +2.60%, JP225 +2.45%) while BTC
                ran −1.49% and energy collapsed double-digit (CL −12.05%,
                BRENT −11.57%). The headline BTC-vs-index gap is the
                story — BTC materially lagged the index complex. Single-name
                lags on the board are deeper (GOOGL −1.93%, NVDA −1.54%,
                PLAT −3.64%, PALL −4.59%); we are not claiming BTC is
                the worst single name, only the loudest BTC-vs-index
                divergence of the week. Window-composition compounds
                this read (the bar that rolled off was the prior week&rsquo;s
                high), but the magnitude of BTC&rsquo;s underperformance
                vs NQ/SP500 is a single-name story — positioning and
                dealer book local to BTC, not a beta echo of risk
                assets. Energy/BTC negative correlation (−0.62 / −0.54)
                makes the oil crash a soft-positive cross-asset bias for
                BTC over the lookback, even though it didn&rsquo;t show
                up as BTC strength.
              </span>{' '}
              JGB monthly 2.52% carries an EXTREME RISK-OFF monthly tag —
              do not lean on it. USD/JPY 159.15.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · runner closed · stand-aside · squeeze look, no ratification</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 05-23 runner is closed; the desk has no directional
                open position
              </span>{' '}
              ex the macro tail. The cluster pin, the dealer +gamma above
              flip, the funding spike, and the un-ratified SM cover are a
              setup, not a trade. The discipline is to wait for either
              ratification (SM net &gt; −5k AND 1h close holds &gt;
              cluster — adds the long bias) or invalidation (1h close &lt;
              flip $75,768 AND SM stays &lt; −20k — re-arms the short)
              before re-engaging. Sitting at a $76,750 cluster with
              record-short SM that hasn&rsquo;t covered is a coin-flip
              with the dealer book pinning the coin in mid-air; the right
              size here is zero.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">closed · prior runner · execution mark</span>
              <div className="dn-trade-name">
                Flip-break short — held through the down move, stopped on the bounce
              </div>
              <div className="dn-thesis">
                The 05-23 runner&rsquo;s rule grid was: trail $76,400
                intraday, cover signal 1h close &gt; $76,325, runner
                second-target 1h close &lt; $75,000, add re-arm 1h close
                &lt; $75,000 with SM still &lt; −5k. Post-snapshot 1h
                closes immediately went sub-flip and stayed there ~20
                hours; the runner&rsquo;s planned target schedule fired
                cleanly: second-target gate at{' '}
                <span className="dn-em">2026-05-23 07:00Z, 1h close
                $74,547</span> covered half of the runner (+$1,950 vs
                $76,497 entry). The add re-arm fired at the same gate
                (1h close &lt; $75k + SM −31.5k &lt; −5k) and the +0.2R
                add filled around $74,547. Spot then printed the 24h
                low $74,378 at 07:51Z ($378 above the $74k stretch
                target). The cover signal (1h close &gt; $76,325) fired
                ~13 hours later at{' '}
                <span className="dn-em">2026-05-23 20:00Z, 1h close
                $77,132</span>, flattening residual + add. The thesis
                was right and the planned schedule worked; the
                rule-armed add into the printed bottom ate most of the
                profit back.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed · 2026-05-23 20:00Z cover signal fired</span></div>
                <div><span className="dn-lvl-k">runner-only P&amp;L</span><span className="dn-lvl-v bull">+0.15R @ $75,700 (05-22) + +0.075R @ $74,547 + −0.075R @ $77,132 = net ≈ +0.165R/unit on 0.3R basis (small-to-moderate win)</span></div>
                <div><span className="dn-lvl-k">add P&amp;L (if honored)</span><span className="dn-lvl-v bear">+0.2R @ $74,547 → −$2,585/unit @ $77,132 ≈ −0.22R/unit on the add</span></div>
                <div><span className="dn-lvl-k">net trade (rule-true)</span><span className="dn-lvl-v">runner +0.165R + add −0.22R ≈ −0.06R/unit overall (small loss if the add is honored as written)</span></div>
                <div><span className="dn-lvl-k">net trade (discretion-skip)</span><span className="dn-lvl-v bull">runner-only ≈ +0.165R/unit (small-to-moderate win)</span></div>
                <div><span className="dn-lvl-k">low printed</span><span className="dn-lvl-v">$74,378 @ 2026-05-23 07:51Z · $378 above stretch target</span></div>
                <div><span className="dn-lvl-k">lesson</span><span className="dn-lvl-v">rule-armed adds at a sub-flip 1h close + visible TD9 BUY are buying the bottom by definition; the 05-23 framework block had already said &ldquo;use TD9 BUY to manage the short, not enter a long&rdquo; — that discipline is the discretion that skips the add</span></div>
              </div>
              <div className="dn-gating">
                <b>Why mark this in §V:</b> discipline is to record
                execution truthfully whether rules left us net up, net
                down, or split. The runner schedule worked perfectly; the
                add ticket was the giveback. Two runbook-lineage notes:
                (a) sizing on SM-at-trigger (lineage 05-23 F-02) holds;
                (b) <em>conditional adds at price-extreme gates should
                only fire when positioning is co-signing a continuation,
                not when the same data block is flagging counter-trend
                exhaustion (TD9 BUY + RSI 23)</em>. Convert the 05-23
                framework caveat into a hard add-gate qualifier for the
                next version.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">stand-aside · primary · today</span>
              <div className="dn-trade-name">
                No new directional — pinned at cluster, awaiting SM signal
              </div>
              <div className="dn-thesis">
                Spot pinned within $113 of four Daily MAs (D-EMA50,
                D-SMA50, D-SMA150, D-EMA100 at $76,714–$76,827); dealer
                book +83.8M dampens departures in either direction; SM
                still loaded −24.9k short without crossing the cover
                signal; funding paying shorts +9.9% ann (squeeze fuel
                building). Both a long bias (squeeze on SM cover) and a
                short bias (re-break on flip loss with SM still stacked)
                have a case; neither has ratified. The right size at a
                pinned cluster with split signals is zero.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">stance</span><span className="dn-lvl-v">flat directional · no new risk</span></div>
                <div><span className="dn-lvl-k">decision band</span><span className="dn-lvl-v">$75,768 (flip) ↔ $76,827 (D-EMA100, cluster top)</span></div>
                <div><span className="dn-lvl-k">upside re-engage</span><span className="dn-lvl-v bull">SM net &gt; −5k AND 1h close &gt; $76,827 (cluster top) — squeeze armed</span></div>
                <div><span className="dn-lvl-k">downside re-engage</span><span className="dn-lvl-v bear">1h close &lt; $75,768 (flip) AND SM still &lt; −20k — re-break armed</span></div>
              </div>
              <div className="dn-gating">
                <b>Why stand-aside, not a directional bet:</b> the
                positioning data and the dealer data give opposing
                tactical implications. Record-short SM + funding paying
                shorts + retail uncrowded = classic squeeze setup, but
                SM has not flinched (covered only ~7k of a ~27k stack
                peak, never crossed −5k). Dealer +83.8M above flip +
                MA-cluster pin = mean-revert pin; the chain is not pricing
                a continuation either side (IV 42.2% / RV30 26.2% richness
                ~+16pt, flat from prior days). Sitting at a pin with both
                sides built is a wait-for-the-tape problem, not a
                position problem. Re-arm when one side ratifies.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze watch · not a trade</span>
              <div className="dn-trade-name">
                Squeeze potential — armed, not loaded
              </div>
              <div className="dn-thesis">
                Record SM short (long 9.66k − short 34.53k, longs the
                smallest of the week, shorts the largest) + funding paying
                shorts +9.9% ann (highest since 05-17) + retail uncrowded
                (55.3% vs 60.1% 24h ago) + dealer +83.8M dampening above
                flip + price above flip = textbook setup for a covering
                squeeze. The missing ingredient is the SM&rsquo;s own hand:
                SM has trimmed 7.4k off the −32.3k peak (a partial cover),
                but is still 5× the cover-signal threshold (−24.9k vs
                −5k). The desk does not pre-position a squeeze without
                positioning ratification — the prior two SM re-stacks
                (05-22 06:30Z, 05-23 05:00Z) both came as discrete
                single-hour additions on a still-loaded book, with no
                warning. Until SM net moves above −10k for at least
                4h with a 1h close above the cluster top, treat the
                squeeze as a watch, not a trade — the level-row gates
                below are authoritative.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">watch zone</span><span className="dn-lvl-v">spot $75,768 (flip) → $77,900 (D-EMA20 / next overhead ladder)</span></div>
                <div><span className="dn-lvl-k">squeeze-arm condition</span><span className="dn-lvl-v bull">SM net &gt; −10k for &gt; 4h AND 1h close &gt; $76,827 (cluster top)</span></div>
                <div><span className="dn-lvl-k">squeeze-fail condition</span><span className="dn-lvl-v bear">SM net falls &lt; −30k OR 1h close &lt; $75,768 (flip) — re-arms the short side</span></div>
              </div>
              <div className="dn-gating">
                <b>Why not pre-position:</b> the desk has now seen two
                SM re-stacks (05-22, 05-23) hit out of a position-neutral
                read. The base-rate cost of front-running a squeeze that
                doesn&rsquo;t come is asymmetric here — long entries
                $76.7–77.0k into a still-record-short SM have a stop just
                a few hundred dollars away (flip loss) into the negative
                pocket. Wait for SM to do the work or for the cluster to
                break and re-engage on the actual signal.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · hedge · held</span>
              <div className="dn-trade-name">
                Downside put-spread — residual 0.15R held
              </div>
              <div className="dn-thesis">
                Macro is essentially flat to 05-23 (HY OAS −2bp tighter,
                MOVE −1.29 easier, 10Y / TIPS flat). No fresh easing, no
                fresh escalation — the rationale for the residual hedge
                still holds against the regime z backdrop (10Y +2.24σ,
                JGB +2.55σ). The 25MAY −12.64M expiry overlap is a
                soft front-strip negative pocket but no fresh add
                justification. No size action this note.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">structure</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">expiry</span><span className="dn-lvl-v">29-MAY-26 (5d) — front-strip rolled to mostly positive (29MAY +17.28M)</span></div>
                <div><span className="dn-lvl-k">action this note</span><span className="dn-lvl-v">hold 0.15R · no add (regime z unchanged) · no trim (re-grow gates not breached either way)</span></div>
                <div><span className="dn-lvl-k">re-grow trigger</span><span className="dn-lvl-v bear">HY OAS &gt; 3.0% close → grow toward primary; 10Y &gt; 4.75% close → +0.1R; 1d close below $74.7k cloud → max tail</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> strike/premium/Greeks not loaded —
                structure is illustrative, sizing pending a Deribit
                29-MAY chain pull. Front-strip GEX flipped from negative
                tunnel (05-23) to mostly positive ladder (today) — the
                hedge expiry 29MAY sits at +17.28M now (was −14.62M),
                which means dealer hedging on that expiry now dampens
                continuation rather than amplifying it; this is a
                modestly worse dealer environment for an active
                downside-tail, but the structural rationale (regime z,
                fat-tail insurance) is unchanged.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the pin, the switch, and the squeeze trigger</span>
            </h2>

            <p>
              Of the six 05-23 decision conditions, three fired inside
              the 24h window: (i){' '}
              <em>Runner second target</em> (1h close &lt; $75,000) fired
              at 2026-05-23 07:00Z, 1h close $74,547 → half-of-runner
              covered per rule; (ii){' '}
              <em>Add re-arm</em> (1h close &lt; $75,000 + SM net still
              &lt; −5k) fired at the same gate → +0.2R add filled around
              $74,547 per rule; (iii){' '}
              <em>Cover (structural)</em> (1h close &gt; $76,325 flip
              reclaim) fired at 2026-05-23 20:00Z, 1h close $77,132 →
              flatten residual + add per rule. The three remaining rows
              are clean: SM net never crossed &gt; −5k (cover signal — not
              a single minute in the 24h window above −24k after the
              re-stack); 1d close did not breach the $74.6k cloud (1d in
              progress at $76,628 — well above); HY OAS did not breach
              3.0% (eased to 2.78%); 10Y did not breach 4.75% (flat at
              4.57%). The conditions today re-set around the new
              pin-and-flip grid:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Squeeze ratifies</td><td className="bull">SM net &gt; −10k for &gt; 4h AND 1h close &gt; $76,827</td><td>scout long 0.2R, target $77,850 (D-EMA20)</td></tr>
                <tr><td>Squeeze ratifies harder</td><td className="bull">SM net &gt; −5k AND 1h close &gt; $77,900</td><td>add +0.2R, target $79,000–79,300 (D-SMA20/cluster)</td></tr>
                <tr><td>Cluster loses (re-break)</td><td className="bear">1h close &lt; $75,768 (flip) AND SM still &lt; −20k</td><td>flip-break short 0.3R, target $75,000 / $74,378 (prior low)</td></tr>
                <tr><td>Mid-cycle escalates</td><td className="bear">1d close below $74,700 cloud</td><td>tail to primary (0.3R), short opens regardless of SM</td></tr>
                <tr><td>Macro tail re-grow</td><td className="bear">HY OAS &gt; 3.0% OR 10Y &gt; 4.75% close</td><td>tail +0.1R toward primary</td></tr>
                <tr><td>Reclaim filter ratifies</td><td className="bull">SM net &gt; 0 sustained AND 10Y close &lt; 4.55% AND 1h close &gt; $77,900</td><td>scout long 0.2R (separate from squeeze book)</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                SM&rsquo;s next discrete step — either a step toward zero
                (cover; squeeze arms) or a step further negative
                (re-stack; the prior two breaks compound). Either way,
                the move is positioning-led, the dealer book is the
                accelerant of whichever direction wins, and price is
                hugging the MA cluster as a pin while the book decides
              </span>
              . Until SM moves &gt; ~$10k in either direction from the
              current −24.9k, the note runs as written — flat directional,
              macro tail held, squeeze a watch not a trade. The pin can
              hold for hours or break in a single bar; the prior two
              SM steps (05-22 06:30Z, 05-23 05:00Z) both took six minutes
              and ~five minutes respectively, with no warning beyond
              positioning extremes that were already on the page. Today&rsquo;s
              page has all the same ingredients except direction.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit · 0 CRITICAL · 4 HIGH + 3 MED + 3 LOW all fixed)
            </span>
            <b>Codex CLI 0.132.0 (gpt-5.5, xhigh reasoning) ran the
            hostile audit cleanly — the empty-stdin pipe held, no TTY
            block.</b> Zero CRITICAL; all 10 findings applied EN+ZH:{' '}
            (a) <b>F-01 · HIGH</b> &mdash; <em>runner stop chronology
            inverted</em>: the v1 lead said the runner stopped at 1h
            close $76,929 on 2026-05-23 00:59Z, but author had bucketed
            the live_db <code>t</code> field (Beijing) as UTC; first 1h
            close &gt; $76,400 after the 00:08Z snapshot was actually
            2026-05-23 20:00Z close $77,132, ~20 UTC hours later. The
            runner in fact held through the whole down move; rewritten
            EN+ZH lead, §I and §V to the corrected execution sequence
            (second-target gate fired at 07:00Z close $74,547, cover
            signal fired at 20:00Z close $77,132).{' '}
            (b) <b>F-02 · HIGH</b> &mdash; <em>SM re-stack timestamp
            tz-contamination</em>: v1 said re-stack at &ldquo;13:00Z
            05-23&rdquo; — that is BJ 13:00, i.e. UTC 05:00. Verified
            re-stack window: two discrete minute-steps at 2026-05-23
            05:26Z (−14.0k step) and 05:31Z (−4.1k step), net −14.3k
            → −32.3k inside one UTC hour. Peak SM short at 2026-05-23
            08:51Z, net −32.4k (long 7.46k − short 39.83k). All
            timestamps in EN+ZH §I and §VI rewritten to UTC with BJ
            in parentheses where useful.{' '}
            (c) <b>F-03 · HIGH</b> &mdash; <em>P&amp;L arithmetic
            depends on F-01</em>: v1 cited &ldquo;+~$50 / +~$120 / ~+0.07R&rdquo;
            on a stop at $76,929/76,400; with the corrected stop at
            $77,132 the residual is −$635/unit. §V trade block
            recomputed end-to-end: runner-only +0.165R/unit, add
            (if rule-honored) −0.22R/unit, net rule-true ≈ −0.06R/unit
            with discretion-skip variant ≈ +0.165R/unit. Both readings
            disclosed.{' '}
            (d) <b>F-04 · HIGH</b> &mdash; <em>§VI lineage rebuild</em>:
            v1 said &ldquo;none of six fired&rdquo; — actually three
            fired (second target, add re-arm, structural cover) per
            corrected chronology. §VI lineage paragraph rewritten in
            EN+ZH.{' '}
            (e) <b>F-05 · MED</b> &mdash; <em>squeeze-watch gating
            inconsistent</em>: v1 thesis said &ldquo;SM net &gt; −5k OR
            &lt; −15k for ≥ 4h&rdquo; — but SM has been &lt; −15k for
            the whole 4h window, so the literal reading was already
            true. Removed the &ldquo;OR &lt; −15k&rdquo; clause; thesis
            now defers to the authoritative level-row gates
            (arm: SM &gt; −10k for &gt; 4h + 1h close &gt; $76,827;
            fail: SM &lt; −30k OR 1h close &lt; $75,768).{' '}
            (f) <b>F-06 · MED</b> &mdash; <em>macro deltas misstated</em>:
            10Y TIPS real Δ was written as &ldquo;0.0bp / flat&rdquo;,
            macro_dashboard.html shows +5.0bp; Fed net liquidity Δ was
            &ldquo;flat&rdquo;, panel shows +0.030T. Macro table and
            prose corrected in EN+ZH.{' '}
            (g) <b>F-07 · LOW</b> &mdash; <em>funding wording</em>:
            &ldquo;monotone climb&rdquo; was too strong; actual minute
            deltas were 511 up vs 433 down. Re-worded to &ldquo;net
            climb (511 up-min · 433 down)&rdquo; in EN+ZH meta.{' '}
            (h) <b>F-08 · LOW</b> &mdash; <em>ZH parity leak</em>:
            &ldquo;922 932 个合约&rdquo; in ZH GEX paragraph; removed
            the stale 922.{' '}
            (i) <b>F-09 · LOW</b> &mdash; <em>cross-asset claim too
            broad</em>: &ldquo;BTC has the largest non-energy
            single-name lag&rdquo; was false (GOOGL −1.93%, NVDA
            −1.54%, PLAT −3.64%, PALL −4.59% all deeper). Narrowed to
            &ldquo;BTC vs the major US index complex&rdquo; framing
            and disclosed the deeper single-name lags.{' '}
            (j) <b>F-10 · HIGH</b> &mdash; <em>audit archive
            missing</em>: page asserted the 00:01Z MTF scan is archived
            in <code>audits/2026-05-24-desk-note.md</code>; file did
            not exist. Created with the 00:01Z scan archived verbatim
            (the rolling latest file has since rolled to 08:31 BJ).{' '}
            Codex explicitly cleared: funding × 1095 (no ×100 recurrence
            of the 05-15 landmine), GEX dual-reference sign-consistency
            (flip $75,768, total +83.8M, dist +1.30% off live $76,752 /
            +1.3% off Deribit-idx $76,784 — collapses cleanly), GEX walls
            and by-expiry strip, MA matrix (D-EMA50/SMA50/SMA150/EMA100
            cluster within $113 of spot · W-SMA150/200 non-computable
            with 125 weekly bars), 30D RV 26.229%, claims-vs-loaded-data
            discipline (NTT / max-pain / strike-IV / BTC-NQ
            framework-only · IV chain-median · cross-asset framed as 7d
            rolling window not &ldquo;today&rdquo;), the requireViewer
            gating pattern (both paths, first statement), and the index{' '}
            <code>&lt;li&gt;</code> additions. <b>Build note (INFO):</b>{' '}
            this server runs Node 18.19.1; Next 16.2.6 hard-exits on
            Node &lt; 20.9.0 at <code>node_modules/next/dist/bin/next:21-25</code>,
            so a full <code>next build</code> is environment-blocked
            (lineage from 05-21 / 05-22 / 05-23).{' '}
            <code>npx --no-install tsc --noEmit</code> returned exit 0
            (TypeScript clean) and is the build proxy. Source audit
            record with full MTF scan archive at{' '}
            audits/2026-05-24-desk-note.md.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>
            , and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-05-24 00:00Z)
            with section-level provenance disclosed in the manifest band
            above; macro is essentially unchanged from 05-23 (Sunday
            read, FRED weekend). Levels, sizes, and conditions are
            illustrative of the desk&rsquo;s process, not standing
            recommendations. Past correlation, gamma, and positioning
            patterns do not bind future tape. Derivatives carry the risk
            of total loss and, where leveraged, loss exceeding deposited
            margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                Pinned at the cluster with the dealer book holding it
                still and the position book loaded for either side. The
                next move is SM&rsquo;s.
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
            v2 · 2026-05-24 00:00Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
