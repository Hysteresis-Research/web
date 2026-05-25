import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// Internal-only route: not in public nav, not in sitemap, noindex/nofollow.
// Description deliberately anodyne — any future external share (Slack/email
// link preview) shows neutral text rather than dated trade specifics.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-05-25 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-05-25',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-05-25' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260525() {
  await requireViewer('/desk/2026-05-25');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · DESK NOTE · 2026-05-25 · v2</span>
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
              <span className="dn-big">$77,195</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.66%</span>
            </div>
          </div>

          {/* DATA PROVENANCE BAND */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-05-25 00:08Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-25 00:08Z (pinned)</td>
                  <td className="dn-flag">fresh · 1-min · file tail at audit time 00:10Z</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-05-25 00:01Z scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    ~7-min stale vs snapshot anchor · in-progress bar · scan
                    archived in audits/2026-05-25-desk-note.md
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 00:00Z snapshot</td>
                  <td className="dn-flag">fresh · Deribit idx $77,162 vs live $77,195 · 930 inst.</td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 00:00Z
                  </td>
                  <td className="dn-flag">~8-min lag · 7d 1h bars · 22 assets</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-24 22:17Z render</td>
                  <td className="dn-flag">
                    ~1.9h render lag · FRED Tier-1 unchanged from 05-24 print ·
                    next FRED Tier-1 refresh expected this US session
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-05-25 00:06Z</td>
                  <td className="dn-flag">
                    ~2-min stale vs snapshot anchor · offsets recomputed vs live spot
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
              <span className="dn-v bear">+7.12%</span>
              <span className="dn-src">live · 00:08Z · 24h mean +8.90% · long-pay cooled</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+9.90% → +7.12%</span>
              <span className="dn-src">range +6.47% / +10.95% · net ease (388 up-min · 424 down · 628 flat)</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−3.73% (−3,842 BTC)</span>
              <span className="dn-src">live · short_btc −9.69k (cover); long_btc +1.40k</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v">53.96 / 46.04</span>
              <span className="dn-src">live_db `mkt_long_pct` · further uncrowded 55.23 → 53.96</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−13.7k (net SHORT)</span>
              <span className="dn-src">live · long 11.05k − short 24.76k</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 05-24 note</span>
              <span className="dn-v bull">−24.9k → −13.7k</span>
              <span className="dn-src">peak −8.99k @ 2026-05-24 06:36Z · cover steps 05:11Z + 05:16Z (BJ 13:11/13:16)</span>
            </div>
            <div>
              <span className="dn-k">IV / 30d RV</span>
              <span className="dn-v">42.5% / 26.3%</span>
              <span className="dn-src">GEX median IV · 930 inst.</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+1.59% (above)</span>
              <span className="dn-src">flip $75,969 · aggregate GEX +65.1M (was +83.8M)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              Two things printed against yesterday&rsquo;s stand-aside call.
              First, <span className="dn-signal">SM covered — net SM
              moved +14.7k in five minutes (−23.83k → −9.12k), briefly
              reaching the 24h peak of −8.99k at 06:36Z, then reloaded
              to −13.71k by snapshot</span> — discrete cover steps at
              2026-05-24 05:11Z + 05:16Z (BJ 13:11 / 13:16). Step one at
              05:11Z opened +5.2k of fresh longs into the cluster (long
              book 9.5k → 14.7k); step two at 05:16Z covered −9.9k of
              shorts (short book 33.5k → 23.6k); net moved −23.8k →
              −9.1k inside five UTC minutes at spot{' '}
              <span className="dn-tag">~$76,730</span>. Same discrete
              hard-step pattern as the 05-22 06:30Z and 05-23 05:00Z
              re-stacks — this time in reverse. Second,{' '}
              <span className="dn-signal">price didn&rsquo;t follow</span>.
              Spot ran from the cover level $76,730 to the 24h-high{' '}
              <span className="dn-tag">$77,353</span> at 10:27Z (+$623 /
              +0.81%), got rejected, retraced to the 24h-low{' '}
              <span className="dn-tag">$76,122</span> at 21:59Z (−$1,231
              from high), then bounced back to{' '}
              <span className="dn-tag">$77,195</span> live (+0.66% on 24h,
              +$465 above the cover step). Yesterday&rsquo;s squeeze-arm
              condition (SM &gt; −10k for &gt; 4h AND 1h close &gt; $76,827)
              narrowly failed — SM held above −10k for{' '}
              <span className="dn-tag">3h 9min</span> (05:16Z → 08:25Z),
              just shy of the 4h threshold, and the 1h-close-above-cluster
              run came mostly after SM had already drifted back below
              −10k. Stand-aside was the right call by the letter; the
              squeeze did effectively ratify (cover happened, spot ran
              +$623, then supply absorbed it) and the desk did not
              capture it.{' '}
              <span className="dn-em">
                The position book is materially less loaded now (short
                book 24.76k vs 34.55k, long book 11.05k vs 9.66k),
                funding cooled from the +9.9% peak to +7.12%, the
                cluster widened slightly but still pins spot, dealer
                +gamma eased from +83.8M to +65.1M but is still
                dampening. The asymmetric setup that powered yesterday&rsquo;s
                stand-aside (record short + record long-pay + dealer
                pin) is half-consumed. The remaining read is a more
                neutral coil with stale fuel and a slow SM re-stack
                already in progress (−9.1k → −13.7k since 05:17Z,
                drifting at ~−250 BTC/hour with no hard step).
              </span>
            </p>

            <p>
              BTC prints <span className="dn-tag">$77,195</span> live,
              +0.66% on 24h, +1.59% above the new{' '}
              <span className="dn-tag">0-γ flip $75,969</span> (drifted
              up $201 from yesterday&rsquo;s $75,768), and sits inside a
              wider Daily MA cluster than yesterday but still inside it:
              {' '}<span className="dn-tag">D-SMA50 $76,908 (+0.37%)</span>,{' '}
              <span className="dn-tag">D-EMA100 $76,840 (+0.46%)</span>,{' '}
              <span className="dn-tag">D-SMA150 $76,726 (+0.61%)</span>{' '}
              cluster just below spot;{' '}
              <span className="dn-tag bear">D-EMA50 $77,813 (−0.79%)</span>{' '}
              and{' '}
              <span className="dn-tag bear">W-EMA20 $78,049 (−1.09%)</span>{' '}
              cluster just above. Aggregate dealer gamma{' '}
              <span className="dn-tag bull">+65.1M/1%</span> (was
              +83.8M — eased $18.7M but still in the dampening half of
              the regime). SM has trimmed from{' '}
              <span className="dn-tag bear">−24.9k</span> 24h ago to{' '}
              <span className="dn-tag bear">−13.7k</span> now via the
              one discrete cover window, with the rest of the day a slow
              re-load. Funding cooled to{' '}
              <span className="dn-tag">+7.12% ann live</span> off a 24h
              mean of <span className="dn-tag">+8.90%</span> (peaked
              +10.95% during the cover; minute deltas were 388 up vs 424
              down vs 628 flat — net easing). OI{' '}
              <span className="dn-tag bear">−3.73% (−3,842 BTC)</span> on
              24h is the structural footprint of the SM short cover (short
              side closed −9.69k, long side +1.40k, rest filled in by
              non-SM rebuilding). Retail uncrowded further to{' '}
              <span className="dn-tag">mkt_long_pct 53.96%</span> from
              55.23% — retail did not chase the squeeze.{' '}
              <span className="dn-em">
                The read is single-line: the cover printed at the cluster
                and didn&rsquo;t escape it. The dealer book held the lid;
                supply ran into spot at $77,350; price round-tripped
                inside the day&rsquo;s $1,231 range; SM is already
                slow-stacking back. Below the flip $75,969 the regime
                flips back to amplifying and the $75k −27.1M pocket
                re-arms; above $77,813 the next overhead ladder (D-EMA50
                / W-EMA20 / W-EMA150) is the wall to take. The cluster
                is still the switch.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · the cover that didn&rsquo;t move price</span>
            </h2>

            <p>
              The SM cover is the cell on the page. At{' '}
              <span className="dn-tag">2026-05-24 05:11Z (BJ 13:11)</span>{' '}
              with spot <span className="dn-tag">$76,730.00</span> (pre-step
              05:10Z spot $76,738.86), long_btc
              stepped from <span className="dn-tag">9,515</span> to{' '}
              <span className="dn-tag">14,723</span> in a single minute —
              +5.2k longs opened, short_btc essentially flat (33,344 →
              33,485). Net moved <span className="dn-tag">−23.83k</span>{' '}
              → <span className="dn-tag">−18.76k</span>. Five minutes
              later at <span className="dn-tag">05:16Z (BJ 13:16)</span>{' '}
              with spot <span className="dn-tag">$76,730.19</span>,
              short_btc collapsed from <span className="dn-tag">
              33,485</span> to <span className="dn-tag">23,585</span> —
              −9.9k shorts covered, long_btc trimmed slightly (14,723 →
              14,464). Net moved <span className="dn-tag">−18.76k</span>{' '}
              → <span className="dn-tag">−9.12k</span>. Total inside five
              UTC minutes: +14.7k of net change, both legs (long add +
              short cover), at spot{' '}
              <span className="dn-tag">~$76,730</span> — the cluster mid.
              Hard-step pattern identical in shape to the 05-22 06:30Z
              and 05-23 05:00Z re-stacks: a single Beijing-afternoon
              window, two discrete one-minute prints, sized to remake the
              book. SM peak (least short) printed at{' '}
              <span className="dn-tag">2026-05-24 06:36Z, −8,992 BTC</span>,
              with spot{' '}
              <span className="dn-tag">$76,757</span>. From the −8.99k
              peak SM held above −10k for{' '}
              <span className="dn-tag">189 minutes (3h 9min, 05:16Z →
              08:25Z)</span>, then drifted back below: hourly samples
              walked −9.1k → −10.0k (08:00Z) → −10.4k (09:00Z) → −11.4k
              (10:00Z) → −11.9k (12:00Z) → −12.3k (15:00Z) → −13.0k
              (17:00Z) → −13.4k (22:00Z) → −13.7k (00:00Z now). Slow,
              continuous, no hard re-stack step. From the −8.99k peak
              to the −13.71k now: −4.7k drift over ~17.5 hours
              (~−269 BTC/hour) — that is the SM re-loading appetite at
              today&rsquo;s wedge between dealer dampening and supply
              into the cluster top.{' '}
              <span className="dn-em">
                The cover happened. It just didn&rsquo;t convert. Spot
                topped at $77,353 (+$623 above the cover, +0.81%) and
                got sold; spot bottomed at $76,122 (−$608 below the
                cover) and got bought; current spot is +$465 above the
                cover — net of all that, almost nothing. The position
                book absorbed the squeeze fuel without paying out.
              </span>
            </p>

            <p>
              The leverage side ratifies the soft outcome. Funding live{' '}
              <span className="dn-tag">+7.12% ann</span> — down from
              yesterday&rsquo;s <span className="dn-tag">+9.90% snapshot</span>
              {' '}and the 24h peak of <span className="dn-tag">+10.95%</span>
              {' '}(the peak fired around 01:00–05:00Z while SM was still
              loaded short, then again 19:00–21:00Z as longs chased the
              afternoon bounce — both times longs paid hard before
              easing). 24h mean <span className="dn-tag">+8.90%</span>,
              minute deltas <span className="dn-tag">388 up / 424 down /
              628 flat</span> (net easing). OI is the cleanest tell:{' '}
              <span className="dn-tag bear">−3,842 BTC (−3.73%) over
              24h</span>, almost the exact size of the SM short cover
              (−9.69k SM short × roughly half not netted by new
              non-SM positions opening into the void). Retail{' '}
              <span className="dn-tag">mkt_long_pct 53.96%</span> (from
              55.23%) — uncrowded further on the recovery, no chase.
              Perp trades a{' '}
              <span className="dn-tag bear">−$88.71 discount</span> to
              spot (1h mean −$93, range −$144 / −$52; 24h mean −$100) —
              perp discount narrowed slightly from yesterday&rsquo;s
              −$106 but still structurally negative;{' '}
              <span className="dn-em">
                the offshore (spot) bid still leads, the futures order
                book sits at a structural discount, and the positive
                funding sits on top of a negative perp basis — the
                divergence says: positive funding here is paid not by
                a tradable cash-and-carry but by leveraged perp
                positioning rolling against itself
              </span>
              . 1-minute aggressor skew_agg snapshot{' '}
              <span className="dn-tag">+18.1</span> (1h mean −2.2,
              range −51 / +40; 24h mean +0.6 — point, not window).
            </p>

            <p>
              Windowed flow puts the day&rsquo;s round-trip in context.
              24h: price <span className="dn-tag bull">+0.66%</span>, OI{' '}
              <span className="dn-tag">−3,842 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +6,416</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +547</span>, big-print{' '}
              <span className="dn-tag bull">+769 BTC / 656 prints</span>,
              taker-net <span className="dn-tag bull">+547</span> —{' '}
              <span className="dn-em">
                this is a spot-led day, exactly inverted from
                yesterday&rsquo;s &ldquo;futures-led bounce against
                offshore spot supply&rdquo;: today spot CVD bid +6.4k
                while futures CVD added only +547. The spot side is
                doing the work; the perp book is mostly closing risk
              </span>
              . 4h (into the snapshot): price{' '}
              <span className="dn-tag bull">+0.60%</span>, OI{' '}
              <span className="dn-tag">−1,033 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,143</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +440</span>, big-print{' '}
              <span className="dn-tag bull">+440 BTC / 116 prints</span>,
              taker-net <span className="dn-tag bull">+440</span> — fresh
              spot-led buying off the 21:59Z low. 1h: price{' '}
              <span className="dn-tag bull">+0.40%</span>, OI{' '}
              <span className="dn-tag">−258 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +734</span>, futures CVD{' '}
              <span className="dn-tag">Δ +55</span>, big-print{' '}
              <span className="dn-tag bull">+9 BTC / 24 prints</span>,
              taker-net <span className="dn-tag bull">+55</span> — same
              spot-led pattern at the highest resolution, perp barely
              moving. Read it straight: the day is a $1,231 round-trip
              carried entirely by spot bid into the cluster, with the
              perp book net unwinding alongside SM covering. The
              up-leg from $76,122 to $77,195 (1h+) is spot grinding,
              not a chase.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · mid-TFs cross up · 1h flips down · pin loosens</span>
            </h2>

            <p>
              The structure today is a{' '}
              <span className="dn-signal">
                split MTF: mid-TFs printing fresh early reversals
                (water-down golden crosses on 4h / 8h / 12h, the 12h
                cross just one bar old) while the 1h flipped to a
                water-up death cross (early downside probe), and the
                fast TFs above cloud holding warm-neutral
              </span>
              . The 1h flip is the signal to mark: water-up death
              cross is an &ldquo;early death-cross (DIF above zero)&rdquo;
              variety on the runbook taxonomy — long-to-short probe at
              the fastest meaningful TF, in the same bar that mid-TFs
              are printing the opposite reversal probe upward. That is
              the structural shape of an indecisive pin, not a flip.
              RSIs: 1h <span className="dn-tag">58.5</span>, 30m{' '}
              <span className="dn-tag">60.8</span>, 15m{' '}
              <span className="dn-tag">60.2</span> — warm but not
              stretched; 4h <span className="dn-tag">53.7</span>, 8h{' '}
              <span className="dn-tag">49.1</span>, 12h{' '}
              <span className="dn-tag">46.4</span>, 1d{' '}
              <span className="dn-tag">47.4</span> — all near 50.
              Cloud picture: 15m / 30m above (just punched); 1h above
              cloud 2b (very fresh); 4h below cloud 3b (↑ 77.1k cloud
              top resistance); 8h below cloud 27b (↑ 78.8k); 12h below
              cloud 5b (↑ 78.0k); 1d above cloud 39b (↓ 75.1k); 3d in
              cloud (73.5k–93.0k); 1w below cloud 17b (↑ 100.3k); 1M
              above cloud 27b.{' '}
              <span className="dn-em">
                Same coil-vs-decision-attempt as yesterday: fast TFs
                support a continuation upward, mid TFs printing the
                early-reversal probes that would extend it, but the
                1h carries an early death-cross at the wrong moment
                and the 4h–8h–12h cloud tops are still overhead at
                $77.1k–78.8k. The MTF allows the cover-up bounce to
                continue toward the cluster top, but does not yet
                ratify a regime flip out of the coil.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">77,101</td><td className="num">60.2</td><td className="bull">golden (water-dn) 7b</td><td className="bull">above ↓76.9k 2b</td><td>Sell 4</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">77,107</td><td className="num">60.8</td><td className="bull">golden (water-dn) 3b</td><td className="bull">above ↓77.1k 刚穿</td><td>Sell 5</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">77,107</td><td className="num">58.5</td><td className="bear">death (water-up) 10b</td><td className="bull">above ↓76.0k 2b</td><td>Sell 3</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">77,107</td><td className="num">53.7</td><td className="bull">golden (water-dn) 6b</td><td className="bear">below ↑77.1k 3b</td><td>Buy 1</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">77,107</td><td className="num">49.1</td><td className="bull">golden (water-dn) 3b</td><td className="bear">below ↑78.8k 27b</td><td>Sell 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">77,101</td><td className="num">46.4</td><td className="bull">golden (water-dn) 1b · 刚印</td><td className="bear">below ↑78.0k 5b</td><td>Sell 2</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">77,107</td><td className="num">47.4</td><td className="bear">death (water-up) 13b</td><td className="bull">above ↓75.1k 39b</td><td>Buy 4</td><td>BEAR reg</td></tr>
                <tr><td>3d</td><td className="num">77,107</td><td className="num">51.6</td><td className="neut">—</td><td className="neut">in cloud 73.5–93.0k 7b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">77,107</td><td className="num">46.0</td><td className="bull">golden (water-dn) 6b</td><td className="bear">below ↑100.3k 17b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">77,101</td><td className="num">49.0</td><td className="neut">—</td><td className="bull">above ↓46.9k 27b</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (rolling latest
                    file; archived verbatim in audits/2026-05-25-desk-note.md).
                    Header alert: <em>12h water-down golden cross 刚印
                    (1b)</em> — early reversal probe at the slowest
                    intraday TF; consistent with the 4h+8h water-down
                    crosses 6b/3b ago. Counter-signal: <em>1h water-up
                    death cross 10b ago</em> — early death-cross at the
                    fastest meaningful TF, opposite direction. No active
                    ⚡TD9 on this scan. Closes are in-progress bars; treat
                    every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is wider today than yesterday but still pins
              spot. <span className="dn-signal">
                Three Daily MAs cluster within $469 below spot, two more
                within $854 above
              </span>: below — <span className="dn-tag">D-SMA50 $76,908
              (+0.37%)</span>,{' '}
              <span className="dn-tag">D-EMA100 $76,840 (+0.46%)</span>,{' '}
              <span className="dn-tag">D-SMA150 $76,726 (+0.61%)</span>;
              above —{' '}
              <span className="dn-tag bear">D-EMA50 $77,813 (−0.79%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $78,049 (−1.09%)</span>.
              Then the next ladder of overhead:{' '}
              <span className="dn-tag bear">W-EMA150 $78,274 (−1.38%)</span>,{' '}
              <span className="dn-tag bear">D-SMA20 $78,833 (−2.08%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $79,050 (−2.35%)</span>,
              then the{' '}
              <span className="dn-tag bear">D-SMA200/EMA200 $80.4–81.5k
              (−3.99% / −5.24%)</span> ceiling. Below the cluster: thin
              shelf at{' '}
              <span className="dn-tag bull">W-SMA20 $74,325 (+3.86%)</span>,
              then the long-runway{' '}
              <span className="dn-tag bull">W-EMA200 $73,736 (+4.69%)</span>{' '}
              / <span className="dn-tag bull">D-SMA100 $72,759 (+6.10%)</span>{' '}
              cycle anchor. Far above and disused: W-EMA50{' '}
              <span className="dn-tag bear">$84.9k (−9.09%)</span>,
              W-EMA100 <span className="dn-tag bear">$83.3k (−7.32%)</span>,
              W-SMA100 <span className="dn-tag bear">$88.4k (−12.64%)</span>,
              W-SMA50 <span className="dn-tag bear">$93.4k (−17.38%)</span>.{' '}
              <span className="dn-em">
                W-SMA150 / W-SMA200 still not computed — parquet history
                holds 126 weekly bars, short of both windows; W-EMA150
                $78,274 (−1.38%) and W-EMA200 $73,736 (+4.69%) show
                because the EMA seeds from available history. All MAs
                anchored to parquet last bar 2026-05-25 00:06Z (close
                $77,101); offsets recomputed against live spot $77,195.
                Displayed MA levels are $-rounded; offsets are computed
                from exact series values. The pin is looser than
                yesterday&rsquo;s $113-band (today the same five MAs
                span ~$1,323 from D-SMA150 below to W-EMA20 above) but
                still mechanically closes the same range that yesterday&rsquo;s
                day printed.
              </span>{' '}
              The cluster boundary on the upside ($77,813 D-EMA50 /
              $78,049 W-EMA20 / $78,274 W-EMA150) is the wall the
              squeeze would have had to take to convert; it didn&rsquo;t
              get within $400 (high $77,353).
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · GEX eased to +65.1M · flip drift up · front strip even heavier positive</span>
            </h2>

            <p>
              Dealer gamma eased to <span className="dn-tag bull">+65.1M/1%</span>
              {' '}from yesterday&rsquo;s +83.8M — still firmly in the
              dampening half of the regime but ~$18.7M less heavy. 0-γ
              flip drifted up <span className="dn-tag">$201 to $75,969</span>
              {' '}(was $75,768). Spot $77,195 sits{' '}
              <span className="dn-tag bull">+1.59% above flip</span> on
              spot-denominated math; the GEX file&rsquo;s own &ldquo;dist
              to flip&rdquo; reads <span className="dn-em">+1.6%</span>{' '}
              off Deribit-index $77,162 (idx $33 below live spot, dual
              reference agrees within rounding). Above the flip dealers
              are long gamma, which means hedging flows{' '}
              <span className="dn-em">dampen</span> the next move — the
              same dealer book that kept the squeeze from extending
              through $77,400 and pinned the round-trip inside $1,231.
              The positive ceiling thickened on the load-bearing walls:{' '}
              <span className="dn-tag bull">$80k +51.30M</span> (was
              +45.69M — gained +$5.6M, the heaviest single wall on the
              chain),{' '}
              <span className="dn-tag bull">$82k +19.55M</span> (was
              +18.86M), <span className="dn-tag bull">$78k +13.14M</span>{' '}
              (was +10.61M — strengthened),{' '}
              <span className="dn-tag bull">$85k +9.55M</span>,{' '}
              <span className="dn-tag bull">$90k +8.83M</span>,{' '}
              <span className="dn-tag bull">$81k +8.13M</span>. The
              negative pocket below eased on every line:{' '}
              <span className="dn-tag bear">$75k −27.06M</span> (was
              −31.66M — eased $4.6M),{' '}
              <span className="dn-tag bear">$74k −8.90M</span> (was
              −10.21M),{' '}
              <span className="dn-tag bear">$76k −8.75M</span> (was
              −9.58M),{' '}
              <span className="dn-tag bear">$60k −7.80M</span> crash-put
              residual. By-expiry strip lost yesterday&rsquo;s 25MAY
              −12.64M front pocket (now 25MAY 0DTE the negative front:
              <span className="dn-tag bear">−9.21M</span>, expiring
              today), and the load-bearing 29MAY expiry{' '}
              <span className="dn-em">grew</span>:{' '}
              <span className="dn-tag bull">26MAY 1.3DTE +3.86M</span>,{' '}
              <span className="dn-tag bull">27MAY 2.3DTE +2.06M</span>,{' '}
              <span className="dn-tag bull">28MAY 3.3DTE +0.53M</span>,{' '}
              <span className="dn-tag bull">29MAY 4.3DTE +24.48M</span>{' '}
              (was +17.28M yesterday — gained +$7.2M, the heaviest
              expiry on the entire by-expiry strip; 26JUN +15.62M is
              second),{' '}
              <span className="dn-tag bull">5JUN +6.85M</span>,{' '}
              <span className="dn-tag bull">12JUN +4.91M</span>,{' '}
              <span className="dn-tag bull">26JUN +15.62M</span>.
            </p>

            <p>
              Read it straight: <span className="dn-signal">
                the dealer regime that pinned yesterday&rsquo;s round-trip
                is unchanged in shape but slightly lighter in weight
              </span>. +65.1M is still strongly dampening — comparable to
              the 05-22 +67.4M coil read and squarely above the
              flip-regime tipping point. The MA-cluster pin (§II)
              continues to get dealer support: spot wedged between long-gamma
              overhead (78k+13.14M, 80k+51.30M, 82k+19.55M) and the $75k
              −27.06M pocket below, with the cover signal&rsquo;s upside
              wall sitting at $80k +51.30M (the strongest single ceiling
              of the week). The 25MAY 0DTE −9.21M expires today so the
              front-strip negative pocket clears by tomorrow&rsquo;s open;
              from 26MAY onward the entire front strip is positive. IV
              median across 930 instruments is{' '}
              <span className="dn-tag">42.5%</span> against 30D
              close-to-close RV of{' '}
              <span className="dn-tag">26.3%</span> — chain-level richness{' '}
              <span className="dn-tag">~+16.2pt</span>, essentially flat
              to 05-24&rsquo;s +16.0pt. A chain-median across N
              instruments, <span className="dn-em">not</span> a tradable
              spread; expiry- / strike-level vega, skew and term structure
              remain not loaded; the vol read stays framework-only.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · weekend tail · DXY easing · BTC lag closes</span>
            </h2>

            <p>
              <span className="dn-signal">
                Macro is the second-day Sunday read — FRED Tier-1 frozen
                vs 05-24
              </span>. Dashboard render is 2026-05-24 22:17Z, ~1.9h before
              the snapshot. US 10Y nominal{' '}
              <span className="dn-tag">4.57% (0.0bp)</span> — flat, still
              2bp above the 4.55% reclaim-long filter floor. 10Y TIPS
              real <span className="dn-tag">2.18% (+5.0bp)</span> — same
              level as yesterday but the panel still shows yesterday&rsquo;s
              +5bp Δ (FRED weekend lag; today&rsquo;s US open will print
              fresh). 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.26% (+5.0bp)</span>, HY OAS{' '}
              <span className="dn-tag bull">2.78% (−2.0bp)</span>,
              MOVE bond vol <span className="dn-tag">78.4 (−1.29)</span>{' '}
              — all same level as 05-24, panel shows yesterday&rsquo;s
              deltas frozen. Fed net liquidity{' '}
              <span className="dn-tag bull">$5.907T (+0.030T)</span>
              {' '}— same.{' '}
              <span className="dn-signal">DXY 99.05 (−0.27)</span> — the
              one fresh-Sunday tick worth marking, eased from
              yesterday&rsquo;s 99.32; DXY easing is a soft-positive
              cross-asset bias for BTC. The slow regime z-scores remain
              extreme — 10Y{' '}
              <span className="dn-tag bear">+2.24</span>, TIPS{' '}
              <span className="dn-tag bear">+2.26</span>, JGB{' '}
              <span className="dn-tag bear">+2.55</span>, EXTREME RISK-OFF
              flags intact — but the day&rsquo;s deltas are not what
              changed.{' '}
              <span className="dn-em">
                The credit / rates filter remains: HY OAS 2.78% is
                ~22bp from the 3.0% re-grow gate; the reclaim-long
                rates filter (10Y &lt; 4.55%) is still 2bp away. Macro
                is a flat-to-soft-positive backdrop today — DXY easing
                marginally helps; nothing else moved. Next FRED Tier-1
                print is during this US session and will be the first
                fresh macro input in three days.
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
                <tr><td>10Y TIPS real</td><td className="num">2.18%</td><td className="num">+5.0bp (stale)</td><td className="num bear">+2.26</td><td className="num bear">+2.47</td><td className="bear">tight · panel frozen Δ</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.26%</td><td className="num">+5.0bp (stale)</td><td className="num">+0.35</td><td className="num">+0.47</td><td className="neut">no tag · panel frozen Δ</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num bull">−2.0bp (stale)</td><td className="num bull">−0.98</td><td className="num bull">−1.02</td><td className="bull">loose · risk-on</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num stale">−0.523</td><td className="num">−0.01</td><td className="num bull">−0.48</td><td className="num bull">−1.35</td><td className="stale">stale 9d · neutral</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">78.4</td><td className="num bull">−1.29 (stale)</td><td className="num">+0.11</td><td className="num">+1.01</td><td className="neut">vol eased</td></tr>
                <tr><td>DXY</td><td className="num">99.05</td><td className="num bull">−0.27</td><td className="num">+0.63</td><td className="num bear">+1.16</td><td className="neut">tight · eased today</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.907T</td><td className="num bull">+0.030T (stale)</td><td className="num bull">+0.77</td><td className="num bull">+2.16</td><td className="bull">loose · surge</td></tr>
                <tr><td>USD/JPY</td><td className="num">158.88</td><td className="num bull">−0.14</td><td className="num bear">+1.16</td><td className="num">+0.37</td><td className="neut">no tag · eased</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.06%</td><td className="num">0.0bp</td><td className="num bull">−0.65</td><td className="num bear">+1.52</td><td className="bear">tight episodic</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7940</td><td className="num bull">−0.01</td><td className="num bull">−1.82</td><td className="num bull">−1.35</td><td className="neut">no tag</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.384</span> (loosened from
              05-24&rsquo;s 0.403 — still NORMAL band). BTC&rsquo;s listed
              ties: NQ <span className="dn-tag">+0.663</span>, SP500{' '}
              <span className="dn-tag">+0.621</span>, CL{' '}
              <span className="dn-tag">−0.605</span>, SILVER{' '}
              <span className="dn-tag">+0.556</span>, NVDA{' '}
              <span className="dn-tag">+0.551</span>, BRENT{' '}
              <span className="dn-tag">−0.533</span>, GOLD{' '}
              <span className="dn-tag">+0.477</span>, META{' '}
              <span className="dn-tag">+0.461</span>, TSLA{' '}
              <span className="dn-tag">+0.451</span>, PALL{' '}
              <span className="dn-tag">+0.433</span>. 7d relative
              performance:{' '}
              <span className="dn-tag bear">BTC −0.16%</span> (narrowed
              from 05-24&rsquo;s window-read of −1.49%), NQ{' '}
              <span className="dn-tag bull">+2.87%</span>, SP500{' '}
              <span className="dn-tag bull">+1.96%</span>, JP225{' '}
              <span className="dn-tag bull">+5.16%</span> (the new
              standout — Japan strength), NVDA{' '}
              <span className="dn-tag bear">−1.30%</span>, AAPL{' '}
              <span className="dn-tag bull">+3.51%</span>, TSLA{' '}
              <span className="dn-tag bull">+4.11%</span>, AMZN{' '}
              <span className="dn-tag bull">+2.80%</span>, GOOGL{' '}
              <span className="dn-tag bear">−2.04%</span>; metals mixed —
              GOLD <span className="dn-tag bull">+1.23%</span>, SILVER{' '}
              <span className="dn-tag bull">+3.72%</span>, PALL{' '}
              <span className="dn-tag bear">−2.30%</span>, PLAT{' '}
              <span className="dn-tag bear">−1.03%</span>, COPPER{' '}
              <span className="dn-tag bull">+3.21%</span>; energy still
              collapsed — CL{' '}
              <span className="dn-tag bear">−10.65%</span>, BRENT{' '}
              <span className="dn-tag bear">−9.97%</span>, NGAS{' '}
              <span className="dn-tag bear">−5.44%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the index complex narrowed from
                ~−4.5pt (yesterday) to ~−3.0pt today (BTC −0.16% vs
                NQ +2.87%, SP500 +1.96%) — partial catch-up. Single-name
                drag has eased (NVDA −1.30% vs −1.54% yesterday,
                GOOGL −2.04% vs −1.93%). Energy continues its
                collapse — CL down a further ~+0.5pt of the rolling
                window&rsquo;s loss; the BTC/energy negative
                correlation (−0.60/−0.53) still translates the oil
                crash into a soft-positive cross-asset bias. Japan
                strength (+5.16% on JP225) is the standout single
                index; BTC-JP225 correlation +0.359 is moderate so
                the read-through is dampened but directionally aligned.
              </span>{' '}
              JGB monthly 2.52% carries an EXTREME RISK-OFF monthly tag —
              do not lean on it. USD/JPY 158.88, eased from 159.15.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · stand-aside vindicated by the letter · soft-miss in spirit · hold the tail</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 05-24 stand-aside vindicated by the rule grid; the
                squeeze effectively ratified anyway and the desk did
                not capture it
              </span>. None of the six 05-24 decision conditions fired
              strictly: squeeze-arm (SM &gt; −10k for &gt; 4h AND 1h
              close &gt; $76,827) was true on the SM duration leg for
              <span className="dn-tag">3h 9min</span> (just shy of 4h)
              and the 1h-close-above-cluster bars mostly came after SM
              had drifted back below −10k — overlap during which both
              conditions held simultaneously: zero rolling-4h windows;
              squeeze-harder (SM &gt; −5k AND 1h close &gt; $77,900)
              never came close (SM peaked at −8.99k; 1h close peaked
              at $77,290); cluster-loses (1h close &lt; $75,768 AND SM{' '}
              &lt; −20k) never came close (1h close low $76,106; SM at
              −20k only at 00:00–05:15Z, before the cover); mid-cycle,
              macro tail re-grow, reclaim filter — all clean. The
              stand-aside book is flat with no realized P&amp;L today;
              the macro put-spread sits on the 29MAY expiry which is
              now <span className="dn-tag">+24.48M dealer gamma</span>{' '}
              (heavier dampening than yesterday&rsquo;s +17.28M — the
              hedge expiry now sits inside the dealer&rsquo;s strongest
              positive expiry strip).
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">stand-aside · primary · today</span>
              <div className="dn-trade-name">
                No new directional — cover printed, didn&rsquo;t convert, slow re-stack underway
              </div>
              <div className="dn-thesis">
                Spot pinned inside a wider Daily MA cluster ($76,726
                D-SMA150 to $77,813 D-EMA50 — $1,087 span). Dealer
                book +65.1M still dampens departures either side
                (eased $18.7M from yesterday but still firmly
                dampening half). SM cover printed (-24.9k → -8.99k
                peak) but failed to convert (spot top $77,353, gave
                it back, round-tripped to $76,122 then back to
                $77,195). SM is already slow-re-loading short
                (−9.1k → −13.7k since 05:17Z, ~−269 BTC/hr drift, no
                hard step). Funding cooled (+9.9% → +7.12% ann),
                retail uncrowded further (55.23% → 53.96%). The
                squeeze fuel that powered yesterday&rsquo;s
                stand-aside is half-consumed; the remaining setup is
                a more neutral coil with the same dealer pin and a
                less loaded position book. Right size at a wider
                pin with consumed fuel and re-loading SM is still
                zero.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">stance</span><span className="dn-lvl-v">flat directional · no new risk</span></div>
                <div><span className="dn-lvl-k">decision band</span><span className="dn-lvl-v">$75,969 (flip) ↔ $78,049 (W-EMA20, cluster top)</span></div>
                <div><span className="dn-lvl-k">upside re-engage (looser)</span><span className="dn-lvl-v bull">1h close &gt; $78,049 (W-EMA20) AND SM net does not re-stack &lt; −20k inside the 4h leading up — scout long 0.2R, target $78,833 (D-SMA20) then $79,050 (D-EMA150)</span></div>
                <div><span className="dn-lvl-k">downside re-engage</span><span className="dn-lvl-v bear">1h close &lt; $75,969 (flip) AND SM &lt; −18k — flip-break short 0.3R, target $75,000 / $74,378 (prior cycle low)</span></div>
                <div><span className="dn-lvl-k">re-stack escalates</span><span className="dn-lvl-v bear">discrete SM net change ≤ −5k in one minute pushing SM &lt; −22k — squeeze re-arms hostile, treat as immediate short setup at the next reclaim of the cluster top</span></div>
              </div>
              <div className="dn-gating">
                <b>Why stand-aside, not a long re-engage on the cover:</b>{' '}
                the cover printed but the dealer book pinned the
                follow-through — spot couldn&rsquo;t take the $77,400
                area let alone the $78k cluster top. SM is already
                drifting short again (no hard step but persistent),
                which removes the squeeze fuel from the long side.
                Without the asymmetric setup (record short + record
                long-pay + dealer pin), the residual edge is a
                directional coin-flip inside the pin — wait for either
                a clean break of the cluster top with SM not re-stacking
                (long re-engage) or a clean flip loss with SM stacked
                again (short re-engage). Pre-positioning the next
                squeeze attempt is also a no — the prior squeeze
                burned its own fuel and there&rsquo;s no fresh
                positioning to re-arm it.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">closed · prior squeeze watch · execution mark</span>
              <div className="dn-trade-name">
                Squeeze potential — armed yesterday, fuel consumed, not loaded
              </div>
              <div className="dn-thesis">
                Yesterday&rsquo;s squeeze framework block (&ldquo;armed,
                not loaded&rdquo;) required: SM net &gt; −10k for &gt;
                4h AND 1h close &gt; $76,827. Outcome: SM held above
                −10k for 3h 9min (just short), and the cluster-top
                close bars came after the SM duration window had
                expired. The book never had both legs simultaneously
                true for the required 4-hour rolling window. Honest
                mark: the cover happened (the squeeze ratification
                positioning-wise), spot ran $623 ($76,730 → $77,353),
                got sold, and the desk did not capture it because the
                strict gate did not trip. A discretionary scout-long
                at 06:00Z 1h close $76,956 (where both conditions
                were true simultaneously for the closing bar) would
                have entered around $77,000 and faced $400 of upside
                ($77,353 high) vs $1,231 of round-trip range — even
                on the discretionary read, the asymmetric edge was
                small once the dealer pin held. Squeeze framework
                retires; setup downgraded to neutral pin.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">closed · positioning setup consumed by the cover</span></div>
                <div><span className="dn-lvl-k">squeeze top printed</span><span className="dn-lvl-v">$77,353 @ 2026-05-24 10:27Z · +$623 above the cover step ($76,730)</span></div>
                <div><span className="dn-lvl-k">round-trip low</span><span className="dn-lvl-v">$76,122 @ 2026-05-24 21:59Z · −$608 below cover step</span></div>
                <div><span className="dn-lvl-k">cover-to-now</span><span className="dn-lvl-v">$76,730 → $77,195 = +$465 (the entire net 24h gain happened on the cover bar; rest is range)</span></div>
                <div><span className="dn-lvl-k">re-arm condition</span><span className="dn-lvl-v">would need fresh SM re-stack back below −20k followed by re-cover — the prior pattern&rsquo;s asymmetry is gone for this cycle</span></div>
              </div>
              <div className="dn-gating">
                <b>Lesson:</b> the strict squeeze gate (SM &gt; −10k AND
                1h close &gt; cluster top, both for &gt;4h continuous)
                worked as a discipline — it kept the desk out of a
                low-edge entry that would have rendered ~$300/unit at
                best given the dealer pin overhead. The gate is too
                strict if the test is &ldquo;capture every cover that
                runs&rdquo; — but the test is &ldquo;only engage when
                the asymmetric edge is large enough to overcome the
                pin&rdquo;, and on that test it worked. Add to runbook
                lineage as confirmation: SM-cover + spot above cluster
                top is not by itself enough; the read needs to be that
                the cover is sustained (SM not slipping back below
                −10k inside the same 4h) AND the cluster top has been
                cleared by the close (not just the wick).
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · hedge · held</span>
              <div className="dn-trade-name">
                Downside put-spread — residual 0.15R held
              </div>
              <div className="dn-thesis">
                Macro is essentially identical to 05-24 (FRED Tier-1
                weekend frozen; the panel-shown Δs are yesterday&rsquo;s).
                DXY ticked easier (−0.27) which is a marginal
                soft-positive for BTC, but no fresh trigger for size
                action. The 29MAY expiry that hosts the hedge now
                carries +24.48M dealer gamma (was +17.28M) — the
                dealer book on the hedge expiry has thickened
                further into the dampening side, which makes the
                tail&rsquo;s dealer environment modestly worse for
                an active downside-tail. Regime-z backdrop unchanged
                (10Y +2.24σ, JGB +2.55σ, TIPS real +2.26σ); the
                rationale (fat-tail insurance against the slow regime
                z) holds.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">structure</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">expiry</span><span className="dn-lvl-v">29-MAY-26 (4.3 DTE) — front-strip now mostly-positive ladder with 29MAY the heaviest at +24.48M</span></div>
                <div><span className="dn-lvl-k">action this note</span><span className="dn-lvl-v">hold 0.15R · no add (regime z unchanged) · no trim (re-grow gates not breached)</span></div>
                <div><span className="dn-lvl-k">re-grow trigger</span><span className="dn-lvl-v bear">HY OAS &gt; 3.0% close → grow toward primary; 10Y &gt; 4.75% close → +0.1R; 1d close below $75.1k cloud → max tail</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> strike/premium/Greeks not loaded —
                structure is illustrative, sizing pending a Deribit
                29-MAY chain pull. 29MAY at +24.48M is now the
                heaviest expiry on the entire by-expiry strip (26JUN
                +15.62M is second); dealer hedging on that expiry will
                dampen continuation rather than amplify it, meaning
                if the macro tail does fire the realized move could
                be smaller than the regime-z math implies — a
                strike-level Greeks pull would clarify the actual
                payoff curve.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the pin holds · re-engage on a clean break · re-stack escalates as new tail</span>
            </h2>

            <p>
              Of the six 05-24 decision conditions, <em>zero</em> fired
              strictly inside the 24h window — the closest was the
              squeeze-arm row which had SM &gt; −10k for 3h 9min (just
              shy of the 4h leg) and never simultaneously coincided with
              a 1h close &gt; $76,827 across a full 4-hour rolling
              window. Squeeze-harder, cluster-loses, mid-cycle escalates,
              macro tail re-grow, reclaim filter — all clean. Yesterday&rsquo;s
              stand-aside book is unchanged today (flat directional, macro
              tail held). The conditions today re-set around the new
              pin-and-flip grid:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Cluster-top reclaim ratifies</td><td className="bull">1h close &gt; $78,049 (W-EMA20) AND SM net does not re-stack &lt; −20k inside the 4h leading up</td><td>scout long 0.2R, target $78,833 (D-SMA20) then $79,050 (D-EMA150)</td></tr>
                <tr><td>Reclaim ratifies harder</td><td className="bull">SM net &gt; −5k sustained AND 1h close &gt; $79,050 (D-EMA150)</td><td>add +0.2R, target $80,400 (D-SMA200) — into top wall +51.30M</td></tr>
                <tr><td>Cluster loses (re-break)</td><td className="bear">1h close &lt; $75,969 (flip) AND SM &lt; −18k</td><td>flip-break short 0.3R, target $75,000 / $74,378 (cycle low)</td></tr>
                <tr><td>Re-stack hostile (new tail)</td><td className="bear">discrete SM net change ≤ −5k in one minute pushing SM &lt; −22k</td><td>treat as immediate short setup at the next reclaim of the cluster top ($77,813 D-EMA50)</td></tr>
                <tr><td>Mid-cycle escalates</td><td className="bear">1d close below $75,100 cloud (↓ Ichimoku 1d cloud top)</td><td>tail to primary (0.3R), short opens regardless of SM</td></tr>
                <tr><td>Macro tail re-grow</td><td className="bear">HY OAS &gt; 3.0% OR 10Y &gt; 4.75% close (FRED Tier-1 today is the first fresh print)</td><td>tail +0.1R toward primary</td></tr>
                <tr><td>Reclaim filter ratifies</td><td className="bull">SM net &gt; 0 sustained AND 10Y close &lt; 4.55% AND 1h close &gt; $78,049</td><td>scout long 0.2R (separate from cluster-top book)</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the slow SM re-stack continues to drift or prints
                a discrete step. Drift (~−250 BTC/hour) is consistent with
                the dealer pin and would extend the coil; a hard step
                back below −20k re-arms a short setup at the cluster
                top; a hard cover step (SM &gt; −5k) is the only thing
                that would force a long re-engage on a clean cluster-top
                break
              </span>. Until SM moves &gt; ~±5k in a single hour, the
              note runs as written — flat directional, macro tail held,
              squeeze framework retired. The pin can hold for hours or
              break in a single bar; today&rsquo;s SM cover was the
              third hard step in four days (05-22 06:30Z re-stack,
              05-23 05:00Z re-stack, 05-24 05:11Z + 05:16Z cover) — the
              cadence says another step is closer than the calendar
              suggests, and the dealer book is set to dampen whichever
              direction the next step takes. The first FRED Tier-1
              fresh print of the new week lands inside the next 24h and
              is the only macro variable that can break the pin from
              outside the BTC book.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit · 0 CRITICAL · 2 HIGH + 3 MED + 1 LOW all fixed)
            </span>
            <b>Codex CLI 0.132.0 (gpt-5.5, xhigh reasoning) ran the
            hostile audit cleanly — the empty-stdin pipe held, no TTY
            block.</b> Zero CRITICAL; all 6 findings applied EN+ZH:{' '}
            (a) <b>F-01 · HIGH</b> &mdash; <em>audit archive
            missing</em>: page asserted{' '}
            <code>audits/2026-05-25-desk-note.md</code> existed; it
            did not at v1 author time. Created the audit file in this
            commit with the full finding list + the 00:01Z MTF scan
            archived verbatim (the rolling latest file has since
            rolled to 08:31 BJ).{' '}
            (b) <b>F-02 · HIGH</b> &mdash; <em>cover magnitude
            overstated</em>: v1 lead said &ldquo;almost the entire
            −24.9k stack closed&rdquo;; the hard window only cut SM
            net from −23.83k to −9.12k (+14.7k) and SM is back at
            −13.71k by snapshot, so &ldquo;almost entire&rdquo; is
            wrong both at trough (−9.12k is still net short) and at
            snapshot (−13.71k is well above the cover trough).
            Rewrote EN+ZH lead to: &ldquo;net SM moved +14.7k in five
            minutes, briefly reaching the 24h peak of −8.99k at
            06:36Z, then reloaded to −13.71k by snapshot&rdquo;.{' '}
            (c) <b>F-03 · MED</b> &mdash; <em>funding minute-delta
            counts off-by-two and prose-vs-meta mean drift</em>:
            v1 said 386/426/628; direct count over pinned line range
            29849–31289 gives 388/424/628. Prose carried &ldquo;+8.88%
            mean&rdquo; while meta carried &ldquo;+8.90%&rdquo;;
            verified mean is +8.9004%. Updated both languages to
            388/424/628 and unified mean to +8.90%.{' '}
            (d) <b>F-04 · MED</b> &mdash; <em>by-expiry ranking
            inverted</em>: v1 said &ldquo;29MAY +24.48M is the
            heaviest monthly expiry on the chain after 26JUN&rdquo;
            — but 29MAY +24.48M is heavier than 26JUN +15.62M.
            Rewrote both prose-§III and trade-book caveat in EN+ZH:
            &ldquo;29MAY is the heaviest expiry on the entire
            by-expiry strip; 26JUN +15.62M is second.&rdquo;{' '}
            (e) <b>F-05 · MED</b> &mdash; <em>re-stack gate
            sign-ambiguous</em>: v1 said &ldquo;discrete SM step &gt;
            −5k in a single minute pushing SM &lt; −22k&rdquo;; for a
            hostile short re-stack the change should be negative, so
            &ldquo;&gt; −5k&rdquo; reads backwards. Rewrote both
            §V trade book and §VI table in EN+ZH to: &ldquo;discrete
            SM net change ≤ −5k in one minute pushing SM &lt;
            −22k&rdquo;.{' '}
            (f) <b>F-06 · LOW</b> &mdash; <em>05:11Z spot wrong
            row</em>: v1 §I labeled $76,738.86 as the 05:11Z spot;
            that is the 05:10Z spot. The 05:11Z spot (the step bar)
            is $76,730.00. Fixed in EN+ZH §I with both timestamps
            disclosed.{' '}
            Codex explicitly cleared: funding × 1095 (no ×100
            recurrence of the 05-15 landmine), GEX dual-reference
            sign-consistency (flip $75,969, total +65.1M, dist +1.59%
            off live $77,195 / +1.6% off Deribit-idx $77,162 —
            collapses cleanly), GEX walls and by-expiry strip,
            MA matrix (D-SMA50/EMA100/SMA150 cluster +0.37/+0.46/+0.61%
            below spot, D-EMA50/W-EMA20 cluster −0.79/−1.09% above ·
            W-SMA150/200 non-computable with 126 weekly bars), 30D RV
            26.26%, claims-vs-loaded-data discipline (NTT / max-pain /
            strike-IV / BTC-NQ framework-only · IV chain-median ·
            cross-asset framed as 7d rolling window not
            &ldquo;today&rdquo;), the requireViewer gating pattern
            (both paths, first statement), the index{' '}
            <code>&lt;li&gt;</code> additions, SM cover chronology
            (cover steps 05:11Z + 05:16Z at spot $76,730, peak −8,992
            at 06:36Z, 189-minute hold above −10k), 1h-close-above-cluster
            bars (8 bars: 01/06/09/10/11/12/23/00Z), and the joint
            squeeze-arm 4h-rolling-window check (zero windows where
            both legs held simultaneously). Source audit record with
            full MTF scan archive at audits/2026-05-25-desk-note.md.{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1;
            Next 16.2.6 hard-exits on Node &lt; 20.9.0 at{' '}
            <code>node_modules/next/dist/bin/next:21-25</code>, so a
            full <code>next build</code> is environment-blocked
            (lineage from 05-21 / 05-22 / 05-23 / 05-24).{' '}
            <code>npx --no-install tsc --noEmit</code> returned exit 0
            (TypeScript clean) and is the build proxy.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>
            , and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-05-25 00:08Z)
            with section-level provenance disclosed in the manifest band
            above; macro is essentially unchanged from 05-24 (FRED Tier-1
            weekend frozen; next fresh print this US session). Levels,
            sizes, and conditions are illustrative of the desk&rsquo;s
            process, not standing recommendations. Past correlation,
            gamma, and positioning patterns do not bind future tape.
            Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The cover printed at the cluster and didn&rsquo;t escape it.
                The pin holds; the next move is SM&rsquo;s — again.
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
            v2 · 2026-05-25 00:08Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
