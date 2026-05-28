import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// Internal-only route: not in public nav, not in sitemap, noindex/nofollow.
// Description deliberately anodyne — any future external share (Slack/email
// link preview) shows neutral text rather than dated trade specifics.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-05-28 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-05-28',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-05-28' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260528() {
  await requireViewer('/desk/2026-05-28');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · DESK NOTE · 2026-05-28 · v2</span>
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
              <span className="dn-big">$74,504</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.91%</span>
            </div>
          </div>

          {/* DATA PROVENANCE BAND */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-05-28 00:08Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-28 00:08Z (pinned line 35609)</td>
                  <td className="dn-flag">fresh · 1-min · file tail at audit time 00:11Z</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-05-28 00:01Z scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    ~7-min stale vs snapshot anchor · in-progress bar · scan
                    archived in audits/2026-05-28-desk-note.md
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-05-28 00:00Z snapshot</td>
                  <td className="dn-flag">
                    fresh · Deribit idx $74,511 vs live $74,504 · 890 inst
                    (was 882 yesterday · 27MAY 0DTE expired, 30MAY/31MAY/26JUN
                    new prints picked up overnight)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-05-28 00:00Z
                  </td>
                  <td className="dn-flag">~8-min lag · 7d 1h bars · 22 assets</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-27 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.9h render lag · FRED Tier-1 fresh print
                    landed (10Y −6bp to 4.50%, TIPS −6bp to 2.10%,
                    HY OAS −2bp to 2.72%, US-JP 10Y spread −6bp to 1.98%,
                    MOVE flat 75.0) · regime tags eased on every Tier-1 line
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-05-28 00:06Z</td>
                  <td className="dn-flag">
                    ~2-min stale vs snapshot anchor · offsets recomputed vs live spot ·
                    W-SMA150 / W-SMA200 non-computable (126 weekly bars on file)
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
              <span className="dn-v bear">+10.95% (cap)</span>
              <span className="dn-src">live · 00:08Z · 24h mean +9.53% · 878/1441 24h rows pinned at cap (~61%); 1068 minute-deltas flat (cap-flat + non-cap-flat)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+10.95% → +10.95%</span>
              <span className="dn-src">range +4.16% / +10.95% · trough @ 2026-05-27 11:33Z (BJ 19:33 05-27) +4.16% ann · re-pinned cap ahead of BJ 13:11 SM step</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+2.02% (+2,004 BTC)</span>
              <span className="dn-src">live · long_btc −2.65k, short_btc +7.83k · OI grew BECAUSE shorts added 3× the long-trim</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">62.64 / 37.36</span>
              <span className="dn-src">live_db `mkt_long_pct` · re-crowded long from 57.20 → 62.64 INTO a second day of break (worst-side imbalance of 6-day lineage)</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−22.5k (net SHORT)</span>
              <span className="dn-src">live · long 9.79k − short 32.33k · trough −22.67k @ 2026-05-27 23:41Z (BJ 07:41 05-28)</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 05-27 note</span>
              <span className="dn-v bear">−12.1k → −22.5k (−10.5k more short)</span>
              <span className="dn-src">|Δ|/prior_net = 87% · single-minute Δnet −5,966 step @ 2026-05-27 05:11Z (BJ 13:11) — biggest step of the lineage</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.3% / 26.46%</span>
              <span className="dn-src">GEX median IV · 890 inst.</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−1.39% (below)</span>
              <span className="dn-src">flip $75,557 · vs live spot $74,504 (−1.39%) / GEX file −1.4% off Deribit idx $74,511 (−1.38%) — both refs negative, page rounds to −1.39% for tile consistency · aggregate GEX −70.8M (was +29.9M)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                Yesterday&rsquo;s break-extends short gate fired clean
                at the BJ 22:00 1h close on 05-27 and the W-SMA20
                $74,266 first target tagged to the dollar at the
                BJ 07:36 24h low this morning
              </span>. The cycle-2 step landed exactly at the BJ 13–15
              cadence the prior note named — 13:11 BJ (UTC 05:11Z
              05-27) printed{' '}
              <span className="dn-tag bear">
                Δlong +774 / Δshort +6,740 / Δnet −5,966
              </span>{' '}
              in one minute, the largest single-minute SM step of the
              6-day lineage by a factor of ~1.5× (yesterday&rsquo;s
              hybrid was −3,973). The step was{' '}
              <span className="dn-em">re-stack hostile</span> in the
              clearest single-bar imprint we have on tape: SM net
              walked <span className="dn-tag">−11,878 → −17,848</span>{' '}
              in 60 seconds at spot $75,635. From there spot couldn&rsquo;t
              reclaim the prior cluster top (24h high{' '}
              <span className="dn-tag">$76,102 @ 2026-05-27 12:23Z
              (BJ 20:23 05-27)</span> — never came within $466 of the
              D-SMA150 $76,568 long-re-engage gate), and at the BJ
              22:00 1h close <span className="dn-tag bear">$75,115.5</span>{' '}
              the break-extends gate printed all three legs cleanly
              (1h close &lt; $75,500 ✓ · SM −20,362 &lt; −13k ✓ ·
              short_btc 32,000 &gt; 25k ✓). The 0.3R flip-extend
              short from yesterday&rsquo;s book is now structurally
              in-money, the first target met, and the next two
              ($73,710 W-EMA200 seed / $72,958 D-SMA100 cycle anchor)
              sit below an aggregate dealer book that{' '}
              <span className="dn-signal">flipped to NET NEGATIVE
              gamma</span> overnight (
              <span className="dn-tag bear">−70.8M/1%</span>, was +29.9M
              — a $100.7M one-day collapse, the second consecutive
              record-magnitude GEX move) hosting a{' '}
              <span className="dn-tag bear">29MAY26 1.3 DTE −84.16M</span>{' '}
              expiry amplifier (was −30.65M yesterday — gained
              another $53.5M of negative gamma against the same expiry
              hosting the macro put-spread).
            </p>

            <p>
              BTC prints <span className="dn-tag">$74,504</span> live,
              −1.91% on 24h, <span className="dn-tag bear">−1.39%
              below the new 0-γ flip $75,557</span> (drifted down $273
              from yesterday&rsquo;s $75,830 — the flip kept following
              spot down, but spot moved through it not with it). Spot
              sits <span className="dn-em">$309 above the W-SMA20
              $74,195 (+0.42%)</span> — the only support level inside
              1% — and is otherwise{' '}
              <span className="dn-signal">below every other Daily MA
              we compute</span>:{' '}
              <span className="dn-tag bear">D-EMA50 $76,545 (−2.67%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $76,733 (−2.90%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $76,473 (−2.57%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $77,173 (−3.46%)</span>,{' '}
              <span className="dn-tag bear">D-EMA20 $77,069 (−3.33%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $77,801 (−4.24%)</span>,{' '}
              <span className="dn-tag bear">D-SMA20 $78,007 (−4.49%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $78,240 (−4.77%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $78,891 (−5.56%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $79,973 (−6.84%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $81,272 (−8.33%)</span>.
              The only positive offsets below spot are{' '}
              <span className="dn-tag bull">W-SMA20 $74,195 (+0.42%)</span>,{' '}
              <span className="dn-tag bull">W-EMA200 $73,710 (+1.08%; seed)</span>,
              and the cycle anchor{' '}
              <span className="dn-tag bull">D-SMA100 $72,958 (+2.12%)</span>.
              The MA wall yesterday&rsquo;s note named as the
              long-re-engage cluster (D-SMA150 $76,568) is now $2,000
              overhead with a stack of five more MAs filling the
              $76,545 → $78,891 corridor. The 24h shape is precisely
              the lower-low / lower-high day yesterday&rsquo;s book
              modelled, with one additional structural escalation we
              had not modelled:{' '}
              <span className="dn-signal">
                3d printed a fresh water-up MACD death cross 刚印
              </span>{' '}
              at 05-26 00:00Z (DIF +552.2 still water-up, but the
              cross just printed) — the slow-frame engine flipped
              bear-probe for the first time since the cycle high; 1d
              has dropped from above-cloud into the cloud
              ($72.2k–$75.4k); 7 of 10 frames are sub-cloud (vs 7 of
              10 yesterday — the count is unchanged but the 1d
              status migrated from above-cloud to in-cloud, a clear
              structural worsening).{' '}
              <span className="dn-em">
                The dealer book lost another $100M of gamma, the
                expiry amplifier almost tripled, retail crowded
                another 5.44 percentage points more long INTO a
                second day of break, SM net nearly doubled its short
                book (cut fraction 87%), and the 3d engine just
                joined the bear-cross stack. Yesterday&rsquo;s
                cycle 2 begins inside the next 24h signoff was correct
                in timing AND direction.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · the BJ 13:11 step was the cleanest re-stack of the lineage · SM 87% more short in 24h</span>
            </h2>

            <p>
              <span className="dn-signal">
                The BJ 13:11 step is the cleanest single-minute
                imprint of a positioning regime change we have on
                tape
              </span>. <span className="dn-tag">2026-05-27 05:11Z
              (BJ 13:11)</span> with spot{' '}
              <span className="dn-tag">$75,635.82</span>: long_btc
              moved <span className="dn-tag">13,108 → 13,882</span>{' '}
              (+774 BTC), short_btc moved{' '}
              <span className="dn-tag">24,989 → 31,729</span>{' '}
              (+6,740 BTC in <em>one minute</em>), net SM stepped{' '}
              <span className="dn-tag">−11,878 → −17,848</span>{' '}
              (Δnet −5,966). Pre-step BJ 13:10 long 13,108 short
              24,989 net −11,881; post-step BJ 13:12 long 13,815
              short 31,704 net −17,889 (the values stayed pinned
              the next minute — not a quote glitch, a real book
              change). Five minutes later at{' '}
              <span className="dn-tag">BJ 13:16 (UTC 05:16Z)</span>{' '}
              short_btc partially covered (Δshort −1,582) while
              long_btc dropped (Δlong −3,260) — a curious{' '}
              <em>opposite-sign cover step</em> that left net
              fractionally less short (−17,848 → −19,526 — wait,{' '}
              <em>more</em> short; long dropped harder than short
              covered). Read the two prints as a single 5-minute
              episode: long book cut 2.49k while short book first
              loaded +6,740 then trimmed −1,582 for a net +5,158;
              SM regime stepped from −11,881 to −19,526 across
              the 5 minutes, a Δnet of −7,645 — that is the
              single biggest 5-minute SM swing of the 6-day
              lineage by ~2.6×. Spot moved $75,636 → $75,616 in
              the same window (−$20, ~0.03%) — almost no immediate
              price response, identical to the prior five
              13:xx-BJ step days. The 6-day cadence pattern (
              05-22 re-stack · 05-23 re-stack · 05-24 two-leg
              cover · 05-25 long-add · 05-26 hybrid trim+add ·
              <span className="dn-em"> 05-27 re-stack hostile</span>)
              is unbroken; cycle 2 step 1 came as a re-stack — the
              hostile branch of yesterday&rsquo;s two-direction
              forecast. The post-step trajectory through the next
              ~19 hours kept the short side accumulating:{' '}
              <span className="dn-tag">short_btc 31,729 → 33,440
              peak</span> at <span className="dn-tag">BJ 00:36
              05-28 (UTC 16:36Z)</span> and{' '}
              <span className="dn-tag">long_btc 13,882 → 9,757
              trough</span> at <span className="dn-tag">BJ 07:41
              05-28 (UTC 23:41Z 05-27)</span>. Net SM ran to its
              trough <span className="dn-tag">−22,668</span> at
              BJ 07:41 05-28; snapshot SM is{' '}
              <span className="dn-tag">−22,535</span>, just 133 BTC
              less short than the trough (the book is{' '}
              <em>still essentially at its 24h trough at the
              snapshot</em>, unlike yesterday&rsquo;s 3.6k bounce
              off −15.7k → −12.1k). Long_btc 9,790 is the lowest
              snapshot value of the 6-day lineage; short_btc 32,325
              is the highest. <span className="dn-em">
                Cycle 2 produced no cover-bounce on the position
                book inside the first 19 hours of the cadence
                window. The short side did not half-cover the way
                cycle 1 step 5 did; it kept loading
              </span>.
            </p>

            <p>
              The leverage side ratifies one-way press. Funding live
              at <span className="dn-tag">+10.95% ann</span> — the
              Binance long-pay cap (8h funding rate ceiling at
              0.01000, ann = ×1095) and re-pinned to the cap by{' '}
              <span className="dn-tag">BJ 13:00 ahead of the
              13:11 SM step</span>. 24h funding path: range{' '}
              <span className="dn-tag">+4.16% / +10.95%</span>,
              trough{' '}
              <span className="dn-tag">+4.16% ann @ 2026-05-27
              11:33Z (BJ 19:33 05-27)</span> — funding first dropped
              off the cap at 2026-05-27 07:39Z (BJ 15:39 05-27,
              0.009937 / +10.88% ann), worked through a soft
              afternoon/evening window into the BJ 19:33 trough, then
              climbed back to cap by the BJ 21–22 break-extend window
              and pinned through the snapshot. 24h mean ann{' '}
              <span className="dn-tag">+9.53%</span> (substantially
              hotter than 05-27&rsquo;s +7.15% mean — funding has
              spent more of the day pinned than yesterday). Minute
              deltas{' '}
              <span className="dn-tag">170 up / 202 down / 1068 flat</span>{' '}
              — the 1068 flat-deltas mix two regimes: 878 of the
              1441 24h rows (~61%) are pinned at exactly the +10.95%
              cap (no movement possible at that bound), and the
              remaining ~190 flat-deltas are non-cap minutes where
              the venue funding number simply didn&rsquo;t step. OI{' '}
              <span className="dn-tag bear">+2,004 BTC (+2.02%)</span>{' '}
              over 24h with the <em>composition flipped</em>:
              long_btc{' '}
              <span className="dn-tag bear">−2,652 BTC</span> and
              short_btc{' '}
              <span className="dn-tag bear">+7,826 BTC</span> at
              endpoints — net structurally short-loaded, with the
              short book adding nearly three times the long-trim.
              The OI grew not because both sides expanded, but
              because shorts added a 7.8k chunk that overwhelmed
              the long-side bleed. Retail{' '}
              <span className="dn-tag bear">mkt_long_pct 62.64%</span>{' '}
              from 57.20% — the second consecutive single-day
              crowding flip (the largest single-day flip of the
              lineage was 05-26→05-27 at +6.99pt; today added
              another +5.44pt for a 2-day cumulative +12.43pt). The
              retail long side is the most crowded it has been in
              the entire 6-day lineage and is positioned{' '}
              <em>worse</em> than at any prior break in the window.
              Perp trades a{' '}
              <span className="dn-tag bear">−$147.55 discount</span>{' '}
              to spot at the snap (1h mean −$127.32, range
              −$162.72 / −$73.10; 4h mean −$126.15, range
              −$277.82 / +$143.51; 24h mean −$130.38, range
              −$296.02 / +$143.51 — basis briefly flipped to
              premium once on the BJ 22:00 break impulse, then
              re-collapsed to wider negative). Basis is{' '}
              <em>$27 wider negative than 05-27&rsquo;s −$120
              snap</em> — long-pay sits on top of a wider negative
              basis. 1-min aggressor skew snap{' '}
              <span className="dn-tag">+20.6</span> (1h mean +7.3,
              range −43.4 / +47.9) — net buy aggression just under
              the surface, possibly the early 1h/4h TD9-BUY reflex
              bid; not yet trend-changing.{' '}
              <span className="dn-em">
                Funding pinned + basis wider negative + retail at
                lineage-peak long + SM at lineage-peak short +
                short_btc at lineage-peak: the leverage book is
                the most one-sided long-side over-stuffed it has
                been across the 6 days
              </span>.
            </p>

            <p>
              Windowed flow shape today is{' '}
              <em>futures-led extension absorbed by spot</em>, the
              same shape as 05-27 but with all magnitudes scaled
              up. 24h: price{' '}
              <span className="dn-tag bear">−1.91%</span>, OI{' '}
              <span className="dn-tag bear">+2,004 BTC</span>, spot
              CVD <span className="dn-tag bull">Δ +8,956</span>,
              futures CVD <span className="dn-tag bear">Δ −1,196</span>,
              big-print{' '}
              <span className="dn-tag bull">+185 BTC / 1,102 prints</span>,
              taker-net <span className="dn-tag bear">−1,196</span>{' '}
              — <span className="dn-em">
                spot CVD ran +8,956 INTO a $1,451 drop — the largest
                spot-absorption signature of the lineage by an
                order of magnitude (vs +984 yesterday). Big-print
                net actually flipped positive +185 BTC over the
                24h despite the price drop; passive spot bid is
                visibly defending. The 24h shape is
                <em> futures sold, spot absorbed</em>, with the
                short-side imbalance riding entirely on the perp
                side
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bear">−0.97%</span>, OI{' '}
              <span className="dn-tag bear">−1,315 BTC</span>, spot
              CVD <span className="dn-tag bull">Δ +1,830</span>,
              futures CVD <span className="dn-tag bear">Δ −480</span>,
              big-print <span className="dn-tag bear">−110 BTC / 136 prints</span>,
              taker-net <span className="dn-tag bear">−480</span> —
              <em> 4h shows OI shrinking on the latest leg-down (
              shorts trimming, not adding, in the most recent 4h);
              spot CVD keeps absorbing</em>. 1h: price{' '}
              <span className="dn-tag bull">+0.08%</span>, OI{' '}
              <span className="dn-tag">+279 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −40</span>, futures
              CVD <span className="dn-tag bull">Δ +123</span>,
              big-print <span className="dn-tag bear">−102 BTC / 41 prints</span>,
              taker-net <span className="dn-tag bull">+123</span> —
              <em> last hour shows the same micro reflex as 05-27
              snap: futures stopped selling and started buying
              (+123), spot stopped buying and started trimming
              (−40); 1h/4h TD9 BUYs printing at $74,516</em>. The
              bid that defended through the 24h drop has converted
              the most recent hour into a fledgling futures buy;
              spot has gone passive. The 4h OI shrink (−1,315 BTC)
              is the first 4h short-trim print since the BJ 13:11
              re-stack — small, possibly the first crack in the
              cycle 2 short side, but the snapshot SM (long 9,790
              short 32,325) shows the trim is still inside the
              short book, not a cover.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · 3d water-up death cross 刚印 · 1d into cloud · 1h/4h TD9 BUY at the low · MAs all overhead except W-SMA20</span>
            </h2>

            <p>
              The MTF map continues its downshift, with one fresh
              structural escalation we had not seen until this
              scan: the 3d frame{' '}
              <span className="dn-signal">
                just printed a water-up MACD death cross
              </span>{' '}
              (刚印 at 05-26 00:00Z, DIF still positive at +552.2 —
              early death cross, multi-week regime probe). The 3d
              had been the highest-frame intact-cycle anchor for
              the prior six notes; today it joined the bear-cross
              stack as an early-warning probe. Engine TFs: 1h still
              water-down death cross (11b ago, DIF −424.2); 4h still
              water-down death cross (8b ago, DIF −535.6 — DIF
              moved deeper-negative from yesterday&rsquo;s −49.9);
              8h and 12h now water-down death cross (2b and 1b ago
              respectively — fresh confirmations on slower engines).
              The 1d sits below SMA200 (D-SMA200 above) but{' '}
              <span className="dn-em">has dropped INTO Ichimoku
              cloud</span> ($72.2k–$75.4k) — the cycle anchor frame
              migrated from above-cloud to in-cloud overnight, the
              cleanest single-day structural shift on the higher
              frames since the cycle high. 1w sits below cloud 17b
              with the 1w MACD still water-down golden cross
              (constructive on weekly histogram but the price
              level is below cloud). 1M still above cloud 27b. TD
              setups: 1h and 4h{' '}
              <span className="dn-tag">⚡ TD9 BUY</span> printed at
              $74,516 — oversold reversal hint at the engine TFs
              right at the W-SMA20 $74,195 test level; 8h Buy 7,
              12h Buy 5, 1d Buy 2, 3d Buy 5, 1w Buy 2, 1M Buy 7 —
              setups extending across the stack. RSIs: 15m 41.2,
              30m 38.4, 1h 33.1 (deeply oversold), 4h 31.8 (deeply
              oversold), 8h 33.6, 12h 34.0, 1d 38.7, 3d 46.7, 1w
              43.3, 1M 47.8 — the engine TFs are at the lowest
              readings of the lineage; 1h 33.1 / 4h 31.8 are the
              first sub-35 prints we have seen since the lineage
              began.{' '}
              <span className="dn-em">
                Reading the map straight: the bear cross has migrated
                from 1h-only on 05-26 to the entire 1h–12h engine
                stack today, with 3d printing the first early-warning
                death cross on the cycle frame and 1d sliding INTO
                cloud. Counterweight: 1h/4h TD9 BUYs printed at the
                low (W-SMA20 zone), but at structurally weaker
                higher-frame context than yesterday&rsquo;s setup
              </span>.
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">74,499</td><td className="num">41.2</td><td className="bear">death (water-dn) 10b</td><td className="bear">below ↑75.3k 44b</td><td>Sell 2</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">74,516</td><td className="num">38.4</td><td className="bear">death (water-dn) 5b</td><td className="bear">below ↑75.8k 67b</td><td>Buy 6</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">74,516</td><td className="num bull">33.1</td><td className="bear">death (water-dn) 11b</td><td className="bear">below ↑76.9k 31b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">74,516</td><td className="num bull">31.8</td><td className="bear">death (water-dn) 8b</td><td className="bear">below ↑76.0k 13b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">74,518</td><td className="num">33.6</td><td className="bear">death (water-dn) 2b · 刚印</td><td className="bear">below ↑78.2k 36b</td><td>Buy 7</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">74,516</td><td className="num">34.0</td><td className="bear">death (water-dn) 1b · 刚印</td><td className="bear">below ↑78.2k 11b</td><td>Buy 5</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1d</td><td className="num">74,518</td><td className="num">38.7</td><td className="bear">death (water-up) 16b</td><td className="neut">in cloud 72.2k–75.4k 1b</td><td>Buy 2</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">74,495</td><td className="num">46.7</td><td className="bear">death (water-up) 刚印 (05-26 00:00Z)</td><td className="neut">in cloud 73.5–92.4k 8b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">74,516</td><td className="num">43.3</td><td className="bull">golden (water-dn) 6b</td><td className="bear">below ↑100.3k 17b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">74,518</td><td className="num">47.8</td><td className="neut">—</td><td className="bull">above ↓46.9k 27b</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (rolling
                    latest file; archived verbatim in
                    audits/2026-05-28-desk-note.md). Header alerts:{' '}
                    <em>8h water-dn death cross 刚印 (2b)</em>,{' '}
                    <em>12h water-dn death cross 刚印 (1b)</em>,{' '}
                    <em>3d water-up death cross 刚印 (just printed
                    05-26 00:00Z)</em> — slower engines confirming
                    the down-leg;{' '}
                    <em>1h ⚡ TD9 BUY at $74,516</em>,{' '}
                    <em>4h ⚡ TD9 BUY at $74,516</em> — oversold
                    reversal hints at both engine TFs at the low.
                    Closes are in-progress bars; treat every value
                    as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix completes the picture. Spot $74,504 sits{' '}
              <span className="dn-em">below every Daily MA we
              compute except D-SMA100</span>, and inside the
              W-SMA20 / W-EMA200-seed / D-SMA100 floor sandwich:
              spot is $309 above W-SMA20 $74,195 (the only support
              level inside 1%) and $794 above W-EMA200 $73,710
              (seed, +1.08%), with the cycle anchor D-SMA100
              $72,958 $1,546 below (+2.12%). The overhead cluster
              from yesterday inverted further:{' '}
              <span className="dn-tag bear">D-SMA150 $76,473
              (−2.57%)</span>{' '}
              (was −0.80%),{' '}
              <span className="dn-tag bear">D-EMA50 $76,545
              (−2.67%)</span>{' '}
              (was −0.95%),{' '}
              <span className="dn-tag bear">D-EMA100 $76,733
              (−2.90%)</span>{' '}
              (was −1.11%),{' '}
              <span className="dn-tag bear">D-SMA50 $77,173
              (−3.46%)</span>{' '}
              (was −1.53%),{' '}
              <span className="dn-tag bear">D-EMA20 $77,069
              (−3.33%)</span>{' '}
              (was −1.97%),{' '}
              <span className="dn-tag bear">W-EMA20 $77,801
              (−4.24%)</span>{' '}
              (was −2.54%),{' '}
              <span className="dn-tag bear">D-SMA20 $78,007
              (−4.49%)</span>{' '}
              (was −3.08%),{' '}
              <span className="dn-tag bear">W-EMA150 $78,240
              (−4.77%; seed)</span>{' '}
              (was −2.94%),{' '}
              <span className="dn-tag bear">D-EMA150 $78,891
              (−5.56%)</span>{' '}
              (was −3.82%). The decision corridor inverted in
              both directions: the long-re-engage gate from
              yesterday (1h close &gt; D-SMA150 $76,568) now sits
              $2,000 overhead with five MAs stacked between spot
              and that level — a structurally heavier ladder than
              yesterday&rsquo;s $613 ladder. Far above and disused:
              W-EMA50 $84,814 (−12.16%), W-EMA100 $83,239
              (−10.49%), W-SMA100 $88,338 (−15.66%), W-SMA50
              $93,387 (−20.22%) — the cycle highs are now 12–20%
              away. <span className="dn-em">
                MAs anchored to parquet last bar 2026-05-28 00:06Z
                (close $74,504.30); offsets recomputed against live
                spot $74,504.35. Displayed MA levels are $-rounded;
                offsets computed from exact series values.
                W-SMA150 / W-SMA200 still not computable — parquet
                history holds 126 weekly bars, short of both
                windows; W-EMA150 $78,240 (−4.77%) and W-EMA200
                $73,710 (+1.08%) show because the EMA seeds from
                available history and are reported as such. The
                meaningful test today is the W-SMA20 $74,195 floor
                +0.42% — the 24h low $74,266.08 tagged $71 above
                this level at BJ 07:36 05-28 (UTC 23:36Z 05-27)
                without breaching. A 1d close below W-SMA20 takes
                the next support to W-EMA200 seed $73,710 (+1.08%)
                and then D-SMA100 $72,958 (+2.12%) — the cycle
                anchor that has not been tested since the cycle
                began
              </span>. The reclaim gate, if a long re-engage is to
              be considered, has migrated to{' '}
              <span className="dn-tag bear">1h close &gt; D-SMA150
              $76,473</span> as a first scout — a $1,969 climb
              from current spot through a stack of five MAs, a
              materially harder bar than yesterday&rsquo;s $613
              climb through D-SMA150 alone.
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · aggregate GEX flipped to −70.8M (−$100M overnight) · 29MAY 1.3DTE −84.16M · $75k −51M is the heaviest single wall on chain</span>
            </h2>

            <p>
              Dealer gamma collapsed for the second consecutive day,
              and this time it{' '}
              <span className="dn-signal">crossed sign</span>:
              aggregate <span className="dn-tag bear">−70.8M/1%</span>{' '}
              (was +29.9M — a $100.7M one-day collapse, larger than
              yesterday&rsquo;s record $48.3M ease and the largest
              single-day GEX move of the entire 6-day lineage by
              ~2.1×). Above spot, dealer gamma is now{' '}
              <em>net short across the whole front of the strip</em>:
              dealers are short gamma at current spot and will
              amplify both directions — but the negative-pocket
              cluster sits asymmetrically below spot, so the
              amplification is structurally tilted toward extending
              moves down. 0-γ flip{' '}
              <span className="dn-tag">drifted to $75,557</span>{' '}
              (was $75,830, down $273 — flip followed spot down
              cleanly but spot pushed through it). Spot $74,504 is{' '}
              <span className="dn-tag bear">−1.39% below flip</span>{' '}
              on spot-denominated math (74,504.35/75,557 − 1 = −1.39%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads
              −1.4% off Deribit-index $74,511 (idx $7 below live
              spot; both references agree on{' '}
              <em>negative sign — spot is below the flip</em> on
              both, the first below-flip print of the lineage at a
              snapshot anchor). Top walls — the ceiling above
              shrunk further:{' '}
              <span className="dn-tag bull">$80k +19.82M</span>{' '}
              (was +29.55M — eased another $9.7M),{' '}
              <span className="dn-tag bull">$82k +11.54M</span>{' '}
              (was +15.64M — eased),{' '}
              <span className="dn-tag bull">$77k +8.55M</span>{' '}
              (was +14.54M — eased; the near-spot positive ceiling
              halved),{' '}
              <span className="dn-tag bull">31JUL26 64.3 +4.55M</span>{' '}
              dealer-strip,{' '}
              <span className="dn-tag bull">26JUN26 29.3 +4.02M</span>{' '}
              (was +11.62M — eased substantially). The negative
              pocket{' '}
              <span className="dn-em">deepened sharply at the spot
              cluster</span>:{' '}
              <span className="dn-tag bear">$75k −51.26M</span>{' '}
              (was −39.90M — gained −$11.4M, still the heaviest
              single wall on the chain by a wide margin),{' '}
              <span className="dn-tag bear">$74k −27.45M</span>{' '}
              (was −15.71M — nearly doubled, now the second-heaviest
              wall),{' '}
              <span className="dn-tag bear">$73k −14.98M</span>{' '}
              (new top-ten entry — a fresh −$15M wall at the
              previously-untouched $73k strike, the level that
              sits at the W-EMA200 seed $73,710),{' '}
              <span className="dn-tag bear">$76k −9.36M</span>{' '}
              (was −13.86M — eased),{' '}
              <span className="dn-tag bear">$74.5k −8.14M</span>{' '}
              (new top-ten — fresh half-strike print at the$74.5k
              line, right next to live spot),{' '}
              <span className="dn-tag bear">$60k −8.94M</span>{' '}
              crash-put residual modestly heavier,{' '}
              <span className="dn-tag bear">$72k −7.50M</span>{' '}
              (new top-ten print). By-expiry: 27MAY 0DTE expired
              yesterday <span className="dn-tag">−7.83M</span> (the
              front net-negative expiry cleared);{' '}
              <span className="dn-tag bear">28MAY26 0.3DTE −14.93M</span>{' '}
              (today&rsquo;s expiry, NEGATIVE net — opposite sign
              from yesterday&rsquo;s 27MAY −7.83M expired print
              and the same direction but ~2× heavier),{' '}
              <span className="dn-tag bear">29MAY26 1.3DTE −84.16M</span>{' '}
              <em>(was −30.65M yesterday — gained another $53.5M
              of negative gamma, now the heaviest single-expiry
              gamma chunk we have seen across the 6-day lineage;
              the expiry that hosts the macro put-spread now
              carries amplifier weight equivalent to ~1.2× the
              entire aggregate GEX magnitude)</em>,{' '}
              <span className="dn-tag bull">30MAY26 2.3DTE +0.03M</span>{' '}
              (flat — first positive expiry after 29MAY clears),{' '}
              <span className="dn-tag bull">31MAY26 3.3DTE +0.28M</span>{' '}
              (light positive),{' '}
              <span className="dn-tag bull">5JUN26 8.3DTE +1.15M</span>{' '}
              (was +3.81M — eased),{' '}
              <span className="dn-tag bull">12JUN26 15.3DTE +0.30M</span>{' '}
              (was +3.45M — eased substantially — the heaviest
              eases are all on the front strip).
            </p>

            <p>
              Read it straight:{' '}
              <span className="dn-signal">
                the dealer book is no longer just non-pinning — it
                has flipped to net-short-gamma in aggregate, with
                the front 1.3DTE expiry carrying an $84M amplifier
                that resolves tomorrow Beijing time
              </span>. Total −70.8M means dealer delta-hedging
              now amplifies both directions, but the wall
              distribution is asymmetric: positive wall sum (top
              5 in the strip) ~$48.5M (was ~$73.7M yesterday — the
              upside ceiling has materially thinned); negative
              wall sum (top 10 in the strip)~$135M concentrated
              in the $72k–$76k band. A break below $74,195
              (W-SMA20) into the negative pocket meets the
              heaviest single wall on the chain ($75k −51.26M just
              above) cascading into $74k −27.45M and $73k
              −14.98M; the path to W-EMA200 seed $73,710 is
              gamma-amplified down. Upside requires reclaiming
              $75,557 (flip) THEN $77k +8.55M (much-eased positive
              wall) just to get back to a flat-gamma regime
              before approaching the next overhead MA cluster.
              The 29MAY26 1.3 DTE −84.16M is the single most
              consequential print of the lineage so far: it puts
              dealer delta-hedging in <em>maximum amplifier mode
              into a single expiry that resolves in 31 hours</em>{' '}
              — any move in either direction through that window
              is structurally faster than at any prior point in
              the 6-day lineage. The macro put-spread (long $74k
              / short $70k put, 29MAY26) hosts directly inside
              that −$84M chunk and benefits structurally from the
              amplifier if the break extends, but it also expires
              tomorrow Beijing-morning regardless of macro print.{' '}
              <span className="dn-em">
                IV median across 890 instruments is{' '}
                <span className="dn-tag">42.3%</span> (flat to
                yesterday) against 30D close-to-close RV of{' '}
                <span className="dn-tag">26.46%</span> (was 26.00%
                — up 46bp on the inclusion of today&rsquo;s
                $74,504 close) — chain-level richness{' '}
                <span className="dn-tag">~+15.8pt</span>{' '}
                (essentially flat to 05-27). A chain-median across
                N instruments, <span className="dn-em">not</span>{' '}
                a tradable spread; expiry- / strike-level vega,
                skew and term structure remain not loaded; the
                vol read stays framework-only. 890 instruments
                today vs 882 yesterday — the +8 is from new
                30MAY/31MAY/26JUN prints picked up overnight
                (chain extending forward as 27MAY 0DTE cleared)
              </span>. RV methodology: 30D close-to-close, logret.std
              × √365 × 100 on the last 30 daily log returns (= 31
              consecutive daily closes) anchored to parquet last
              bar 2026-05-28 00:06Z; range $74,418 – $82,178 over
              the underlying 31-close window. (For reference, last
              30 closes / 29 returns reads 26.82%; the 26.46% page
              value comes from 30 returns.)
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · FRED Tier-1 print eased further (10Y −6bp, TIPS −6bp, HY OAS to 2.72% with episodic z −2.12) · BTC-vs-TradFi decoupling extended to −7.2pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The fresh FRED Tier-1 print landed and it loosened
                further on every Tier-1 line that matters
              </span>. Dashboard render is 2026-05-27 22:15Z,
              ~1.9h before the snapshot; the panel has caught up
              from yesterday&rsquo;s stale-4d tags (only NFCI
              carries stale 12d now — Chicago Fed weekly index).
              US 10Y nominal{' '}
              <span className="dn-tag bull">4.50% (−6.0bp)</span> —
              down 6bp from yesterday&rsquo;s 4.56% print, regime z
              eased to <span className="dn-tag bear">+1.76</span>{' '}
              (was +2.16 — moved out of EXTREME RISK-OFF into RISK-OFF),
              episodic z eased to <span className="dn-tag">+0.75</span>{' '}
              (was +1.33 — materially lower episodic stress). 10Y
              TIPS real{' '}
              <span className="dn-tag bull">2.10% (−6.0bp)</span>{' '}
              (was 2.16%), regime z{' '}
              <span className="dn-tag bear">+1.61</span> (was +2.09),
              episodic z{' '}
              <span className="dn-tag">+1.25</span> (was +2.00) —
              still RISK-OFF tag but materially eased. 5Y5Y BE
              inflation{' '}
              <span className="dn-tag">2.27% (+1.0bp)</span> — drift
              up. HY OAS{' '}
              <span className="dn-tag bull">2.72% (−2.0bp)</span>{' '}
              (was 2.74%), regime z{' '}
              <span className="dn-tag bull">−1.34</span> (was −1.22 —
              deeper risk-on), episodic z{' '}
              <span className="dn-tag bull">−2.12</span> (was −1.89 —
              the deepest single-day risk-on episodic print of the
              lineage; HY OAS now &gt;13bp from yesterday&rsquo;s
              gate of 2.85% and 28bp from the 3.00% original gate).
              MOVE bond vol{' '}
              <span className="dn-tag bull">75.0 (−3.48)</span> —
              the panel reports the same Δ as yesterday because the
              fresh print landed late on 05-26 US session; level
              held at 75.0 today, no fresh tick visible at this
              render. Fed net liquidity{' '}
              <span className="dn-tag bull">$5.907T (+0.030T)</span>{' '}
              — unchanged (weekly cadence; next print 05-29). DXY{' '}
              <span className="dn-tag bull">99.14 (−0.18)</span> —
              eased slightly (small risk-on tick, same level as
              yesterday at this render lag). USD/JPY{' '}
              <span className="dn-tag bear">159.29 (+0.33)</span> —
              same as yesterday; yen weaker. US-JP 10Y spread{' '}
              <span className="dn-tag bull">1.98% (−6.0bp)</span> —
              tightened further from yesterday&rsquo;s 2.04% (US
              rates moved more than JP did; the BTC-relevant rate
              differential narrowed).{' '}
              <span className="dn-em">
                Net: the macro tail eased materially on every Tier-1
                fresh line. None of yesterday&rsquo;s re-grow
                gates fired in the right direction (HY OAS gate
                &gt; 2.85% — moved AWAY to 2.72%; 10Y gate &gt;
                4.60% — moved AWAY to 4.50%; reclaim-long
                rates filter 10Y &lt; 4.55% — fired TRUE at 4.50%
                for the first time in the lineage). The macro
                tape is unambiguously risk-on; BTC broke anyway
                from inside the BTC book, identically to
                yesterday&rsquo;s read but with the BTC-vs-macro
                divergence further extended (BTC was already
                decoupled negative; today it kept moving down
                while macro tail eased further)
              </span>.
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
                <tr><td>US 10Y nominal</td><td className="num">4.50%</td><td className="num bull">−6.0bp (FRESH)</td><td className="num bear">+1.76</td><td className="num">+0.75</td><td className="bear">tight, eased meaningfully · panel dropped EXTREME tag</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.10%</td><td className="num bull">−6.0bp (FRESH)</td><td className="num bear">+1.61</td><td className="num bear">+1.25</td><td className="bear">tight, eased · still RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.27%</td><td className="num bear">+1.0bp</td><td className="num">+0.48</td><td className="num">+0.61</td><td className="neut">drift up · no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.72%</td><td className="num bull">−2.0bp (FRESH)</td><td className="num bull">−1.34</td><td className="num bull">−2.12</td><td className="bull">loose · deepest risk-on episodic of lineage</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num stale">−0.523</td><td className="num stale">−0.01 (stale 12d)</td><td className="num bull">−0.48</td><td className="num bull">−1.35</td><td className="stale">stale 12d · neutral</td></tr>
                <tr><td>MOVE bond vol</td><td className="num bull">75.0</td><td className="num bull">−3.48 (carry-over)</td><td className="num">−0.18</td><td className="num">+0.38</td><td className="neut">flat to yesterday at this render</td></tr>
                <tr><td>DXY</td><td className="num">99.14</td><td className="num bull">−0.18</td><td className="num">+0.73</td><td className="num bear">+1.34</td><td className="neut">tight, slight ease</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.907T</td><td className="num bull">+0.030T</td><td className="num bull">+0.77</td><td className="num bull">+2.16</td><td className="bull">loose · surge episodic</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.29</td><td className="num bear">+0.33</td><td className="num bear">+1.22</td><td className="num">+0.75</td><td className="bear">yen weaker</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.98%</td><td className="num bull">−6.0bp (FRESH)</td><td className="num bull">−0.81</td><td className="num">+0.75</td><td className="bull">tightened · US rates moved more</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7855</td><td className="num bull">−0.01</td><td className="num bull">−1.85</td><td className="num bull">−1.67</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp (monthly)</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not
              today</span>). Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.297</span> (loosened
              further from 05-27&rsquo;s 0.340 — still NORMAL band).
              BTC&rsquo;s listed ties: NQ{' '}
              <span className="dn-tag">+0.555</span> (was +0.551,
              regained the top spot from SILVER — TradFi equity
              tie tightened slightly), SP500{' '}
              <span className="dn-tag">+0.524</span> (was +0.527),
              CL <span className="dn-tag">−0.521</span> (was −0.530),
              SILVER <span className="dn-tag">+0.475</span> (was
              +0.561 — eased materially), BRENT{' '}
              <span className="dn-tag">−0.433</span> (was −0.447),
              NVDA <span className="dn-tag">+0.418</span> (was
              +0.463 — eased), GOLD{' '}
              <span className="dn-tag">+0.414</span> (was +0.470),
              MSFT <span className="dn-tag">+0.401</span> (was +0.430).
              7d relative performance:{' '}
              <span className="dn-tag bear">BTC −4.55%</span>{' '}
              (deteriorated sharply from 05-27&rsquo;s −1.11% —
              BTC&rsquo;s 7d lag widened another 3.44pt in one day),
              NQ <span className="dn-tag bull">+2.68%</span> (was
              +4.11% — eased back as the BTC drag has now affected
              the 7d window&rsquo;s tail), SP500{' '}
              <span className="dn-tag bull">+1.57%</span> (was
              +2.37% — eased), JP225{' '}
              <span className="dn-tag bull">+5.24%</span> (was
              +10.80% — eased from peak),
              TSLA <span className="dn-tag bull">+5.14%</span>{' '}
              (was +7.87% — eased), META{' '}
              <span className="dn-tag bull">+4.45%</span> (was
              +4.39% — held), AAPL{' '}
              <span className="dn-tag bull">+3.39%</span> (held).
              Metals: GOLD{' '}
              <span className="dn-tag bear">−2.14%</span> (turned
              negative from +0.44%), SILVER{' '}
              <span className="dn-tag bear">−2.15%</span> (turned
              negative from +3.77%), PLAT{' '}
              <span className="dn-tag bear">−1.47%</span>, PALL{' '}
              <span className="dn-tag bull">+1.02%</span>, COPPER{' '}
              <span className="dn-tag bear">−0.30%</span>, URNM{' '}
              <span className="dn-tag bull">+5.66%</span>. Energy
              still collapsed: CL{' '}
              <span className="dn-tag bear">−8.90%</span>, BRENT{' '}
              <span className="dn-tag bear">−7.89%</span>, NGAS{' '}
              <span className="dn-tag bear">−3.00%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine widened from
                ~−5.2pt yesterday to ~−7.2pt today (BTC −4.55% vs NQ
                +2.68%, SP500 +1.57%). Today is the cleanest BTC-vs
                -macro divergence in the entire 6-day lineage. The
                TradFi side has now cooled from peak (NQ from +4.11%
                to +2.68%, JP225 from +10.80% to +5.24%, metals
                turned negative — risk-on energy decelerated), but
                BTC kept extending DOWN. Energy stayed collapsed
                (no help, no hurt). The macro print today loosened
                further; BTC broke further. Endogenous-to-crypto is
                the load-bearing read for a second consecutive day
              </span>. JGB monthly 2.52% carries EXTREME RISK-OFF
              monthly tag — do not lean on it. USD/JPY 159.29 — yen
              weaker as of yesterday&rsquo;s render; FX cross
              eased to neutral on the rate side (US-JP spread tightened
              with US rates moving more than JP).
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · flip-extend short target #1 tagged · take half · cycle 2 cover-bounce gate now the watch</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 05-27 break-extends short setup at 0.3R is now
                fully in-money on its own gate-firing chronology
              </span>. Gate trigger printed at the BJ 22:00 1h
              close on 05-27 ($75,115.5 with SM −20,362 and short_btc
              32,000); first target met at the BJ 07:36 24h low
              ($74,266.08 vs the $74,266 W-SMA20 yesterday-projected
              target — tagged $0 above, the cleanest target hit of
              the lineage). The position book did the rest:
              cycle-2 re-stack hostile at BJ 13:11 added the
              single-biggest one-minute Δshort of the lineage
              (+6,740 BTC); SM ran from −11,878 → −22,668 trough
              in ~18 hours (a Δnet −10,790 single-direction run,
              no half-cover, no bounce). The book stays in:
              maintain the flip-extend short with a moved-up stop;
              take half off at the W-SMA20 target hit; press the
              remainder toward W-EMA200 seed $73,710 and D-SMA100
              cycle anchor $72,958 — both supported by the
              29MAY26 1.3 DTE −84.16M expiry amplifier that
              resolves tomorrow Beijing-morning. The cover-bounce
              setup yesterday named (1h TD9 BUY + SM short
              cover) has its first weak ratification in the most
              recent 4h OI shrink (−1,315 BTC) and the 1h fut CVD
              flip (+123) — small, possibly the first crack, but
              the snapshot SM still sits at lineage-trough short.
              Pre-positioning a long here pays a coin-flip against
              the structural amplifier still pinned through 29MAY
              expiry; better-asymmetry is wait-for-conversion (
              1h close &gt; $75,557 flip AND SM short_btc bleeds
              &lt; 30k AND long_btc &gt; 11k inside the 4h leading
              up), then scout long 0.2R toward the D-SMA150
              $76,473 cluster.
            </p>

            <div className="dn-trade">
              <span className="dn-side short">short · primary · in-money · take half · press the remainder</span>
              <div className="dn-trade-name">
                Flip-extend short from yesterday — gate fired, first target hit, structural amplifier still loaded into 29MAY tomorrow
              </div>
              <div className="dn-thesis">
                Yesterday&rsquo;s break-extends short (1h close &lt;
                $75,500 AND SM &lt; −13k AND short_btc &gt; 25k)
                fired all three legs at BJ 22:00 1h close 05-27
                ($75,115.5, SM −20,362, short_btc 32,000). First
                target W-SMA20 $74,266 met at BJ 07:36 24h low
                ($74,266.08 — $0 above the level, cleanest hit of
                the lineage). The position book ratifies the
                press: SM net at lineage-trough short (−22,535,
                snapshot; trough −22,668 BTC just 27 min before
                snapshot at BJ 07:41), short_btc at lineage-peak
                (32,325 BTC), long_btc at lineage-low (9,790 BTC);
                retail crowded long at 62.64% (2-day cumulative
                +12.43pt — most over-stuffed long side of the
                lineage); funding pinned at the cap +10.95% ann
                with 878 of 1441 24h rows (~61%) at the cap and
                an additional ~190 minute-deltas flat off-cap
                (the BJ-evening soft trough +4.16% ann @ BJ 19:33
                05-27 the only meaningful non-cap stretch).
                The dealer book{' '}
                <em>flipped to net-short gamma in aggregate</em>{' '}
                (−70.8M, was +29.9M — $100.7M one-day collapse)
                and the 29MAY26 1.3 DTE expiry now carries
                −84.16M (was −30.65M — peak amplifier into 31h
                expiry tomorrow Beijing-morning). The next
                support is W-EMA200 seed $73,710 (+1.08%) and
                D-SMA100 cycle anchor $72,958 (+2.12%); both sit
                below an unbroken negative-pocket cluster
                ($75k −51.26M just above spot, cascading into
                $74k −27.45M and $73k −14.98M). The trade is
                still alive structurally; the discipline is take
                profit on the first target and let the rest run
                inside the amplifier window.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">entry (yesterday)</span><span className="dn-lvl-v bear">1h close $75,115.5 @ 2026-05-27 14:00Z (BJ 22:00)</span></div>
                <div><span className="dn-lvl-k">target #1 (HIT)</span><span className="dn-lvl-v bull">$74,266 W-SMA20 — tagged $74,266.08 @ 2026-05-27 23:36Z (BJ 07:36 05-28) — TAKE HALF</span></div>
                <div><span className="dn-lvl-k">runner stop</span><span className="dn-lvl-v">1h close &gt; $75,557 (new 0γ flip) — trail to entry once $73,710 (W-EMA200 seed) prints</span></div>
                <div><span className="dn-lvl-k">target #2</span><span className="dn-lvl-v bear">$73,710 W-EMA200 seed (+1.08%) — scale another quarter</span></div>
                <div><span className="dn-lvl-k">target #3 (max)</span><span className="dn-lvl-v bear">$72,958 D-SMA100 cycle anchor (+2.12%) — full close into the amplifier window through 29MAY expiry</span></div>
              </div>
              <div className="dn-gating">
                <b>Press discipline:</b> the structural amplifier
                (29MAY 1.3 DTE −84.16M) is the load-bearing reason
                to press. After 29MAY clears tomorrow Beijing-morning,
                the very next listed expiries are mildly positive
                rather than another negative pocket (30MAY +0.03M,
                31MAY +0.28M, 5JUN +1.15M, 12JUN +0.30M) — the
                front-strip amplifier evaporates and the dealer
                book reverts to modestly long-gamma at the strip
                level. The 0.3R press should resolve
                before 29MAY expiry print or be trimmed to runner
                size. If SM short_btc bleeds &lt; 30k inside any
                4h window, take all remaining off — the position
                book pivot is the early signal.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · conditional · cover-bounce setup</span>
              <div className="dn-trade-name">
                Cover-bounce scout — wait for the position-book pivot AND the flip reclaim
              </div>
              <div className="dn-thesis">
                1h and 4h TD9 BUYs printed at $74,516 (the W-SMA20
                $74,195 zone test); 1h RSI 33.1 and 4h RSI 31.8 are
                the deepest oversold prints of the lineage; the most
                recent 4h OI shrunk (−1,315 BTC) and the most recent
                1h fut CVD flipped to buying (+123, +136 of 41 prints
                showing big-print selling but taker-net buying — the
                same micro-shape that ratified 05-27&rsquo;s small
                bounce reflex). The cover-bounce trade is set up
                <em> in template</em> but the position book has not
                yet pivoted — SM is still at lineage-trough short and
                the dealer amplifier is still loaded through 29MAY.
                A real cover-bounce needs both legs: the position
                book starts to cover (short_btc bleeds &lt; 30k
                inside 4h AND long_btc &gt; 11k) and price reclaims
                the flip (1h close &gt; $75,557). Pre-positioning a
                long here means buying the absorbing spot bid against
                an unbroken short-side position book and an active
                dealer amplifier — paid coin-flip with worse asymmetry
                than yesterday&rsquo;s setup.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">trigger (both legs required)</span><span className="dn-lvl-v bull">1h close &gt; $75,557 (new flip) AND SM short_btc &lt; 30k AND long_btc &gt; 11k inside the 4h leading up</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on trigger print, scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1h close &lt; $74,400 (below W-SMA20 + buffer)</span></div>
                <div><span className="dn-lvl-k">target #1</span><span className="dn-lvl-v">$76,473 D-SMA150 — first overhead cluster MA</span></div>
                <div><span className="dn-lvl-k">target #2</span><span className="dn-lvl-v">$76,733 D-EMA100 / $77,069 D-EMA20 stack</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · take half at D-SMA150 hit</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> trigger ~$75,600, stop $74,400 = ~$1,200
                risk; first target $76,473 = ~$873 ≈ 0.7:1 (weak on
                first target), stretch $77,069 = ~$1,469 ≈ 1.2:1.
                The asymmetry is poor on the first target and
                modest on the stretch — that&rsquo;s why the gate
                is hard (both legs required) and the size is small.{' '}
                <b>Hard rule:</b> this and the flip-extend short
                remnant are mutually exclusive — if the scout long
                triggers, close the runner short at that moment
                regardless of P/L on the remainder.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · hedge · held · structural amplifier peak day</span>
              <div className="dn-trade-name">
                Downside put-spread — 29MAY26 expires tomorrow Beijing-morning inside an $84M negative-gamma chunk
              </div>
              <div className="dn-thesis">
                Macro Tier-1 thawed further (10Y −6bp to 4.50% —
                fired the reclaim-long filter for the first time
                in the lineage; TIPS −6bp to 2.10%; HY OAS −2bp to
                2.72% with episodic z −2.12 deepest of lineage; US-JP
                10Y spread −6bp to 1.98%). All of yesterday&rsquo;s
                re-grow gates moved AWAY in the wrong direction
                (HY OAS 13bp from 2.85% gate, 10Y 10bp below 4.60%
                gate). The macro tape is unambiguously risk-on; BTC
                broke anyway and from the position-book side, not
                the macro side. <span className="dn-em">
                  The hedge expires tomorrow Beijing-morning
                  (29MAY26 1.3 DTE at the snapshot) INSIDE the
                  largest negative-gamma single-expiry chunk we
                  have seen across the lineage (−84.16M, was
                  −30.65M yesterday — gained another $53.5M of
                  amplifier weight). Dealer delta-hedging on the
                  expiry now amplifies a downside move toward
                  strike to a degree unprecedented in this
                  window. The hedge has 31 hours to resolve;
                  structurally the gamma context is the most
                  favorable it has been across the entire 6-day
                  lineage by an order of magnitude (amplifier
                  helps the long put-spread), but the macro tape
                  has tightened further the wrong way (re-grow
                  gates moved AWAY again)
                </span>. Net: hold position unchanged on size
                through 29MAY expiry; on expiry print, the next
                amplifier evaporates entirely (30MAY +0.03M, 31MAY
                +0.28M, 5JUN +1.15M — the dealer strip flips back
                to modestly long-gamma after 29MAY clears). A roll
                to 5JUN26 9.3 DTE or 12JUN26 16.3 DTE is the
                natural next leg if the macro re-grow gates ever
                fire; at current levels they have moved AWAY for
                2 consecutive days and the next print is 05-29
                (after this expiry resolves).
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">structure</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">expiry</span><span className="dn-lvl-v">29-MAY-26 (1.3 DTE) — peak negative-gamma host (−84.16M, was −30.65M); resolves tomorrow Beijing-morning</span></div>
                <div><span className="dn-lvl-k">action this note</span><span className="dn-lvl-v">hold 0.15R · no add (macro print loosened further, re-grow gates moved AWAY again) · no trim (BTC-internal break extends and amplifier peaks today)</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (FRESH gate after today&rsquo;s print)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.80% close (gate lowered from 2.85% — currently 2.72%, 8bp closer to fire) OR 10Y &gt; 4.55% close (gate lowered from 4.60% — currently 4.50%, 5bp closer)</span></div>
                <div><span className="dn-lvl-k">reclaim-long filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — FIRED TRUE today at 4.50% for the first time in lineage</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> strike/premium/Greeks not loaded —
                structure is illustrative, sizing pending a Deribit
                29-MAY chain pull. The 29MAY 1.3 DTE −84.16M is the
                heaviest single-expiry gamma chunk of the lineage
                (gained −$53.5M of negative gamma vs yesterday&rsquo;s
                −30.65M, or ~2.75× heavier / +174%)
                and resolves in 31 hours; a tradable spread that
                benefits from the BTC-internal break amplifier
                while the macro tape loosens further is at its
                structural-favored peak today and evaporates on
                expiry. After 29MAY clears tomorrow Beijing-morning,
                the dealer strip is modestly long-gamma across
                30MAY/31MAY/5JUN/12JUN and the amplifier framework
                resets. The reclaim-long rates filter just fired
                TRUE on 10Y &lt; 4.55% for the first time in the
                6-day lineage — at the macro layer alone (and absent
                the BTC-internal break) this would be a tactical
                long-bias filter; the BTC layer over-rides today,
                but the macro signal is on the record.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · cycle 2 step 1 printed · re-stack hostile branch · base rate for step 2 ~24h forward</span>
              <div className="dn-trade-name">
                Squeeze-cycle 2 step 1 — re-stack hostile @ BJ 13:11 — base rate for step 2 inside the next BJ 13–15 window
              </div>
              <div className="dn-thesis">
                Yesterday&rsquo;s framework predicted{' '}
                <em>discrete SM step at BJ 13–15 today, direction
                conditional</em>. The step landed at BJ 13:11 (UTC
                05:11Z 05-27) at spot $75,635 with the cleanest
                re-stack-hostile imprint of the 6-day lineage
                (Δlong +774, Δshort{' '}
                <em>+6,740</em>, Δnet −5,966 — single-minute step
                ~1.5× yesterday&rsquo;s magnitude). The cycle-2
                base rate is now: another discrete step in the BJ
                13–15 window, expected today (2026-05-28
                05:00–07:00Z). Cycle-2 step 1 was a re-stack —
                the hostile branch of yesterday&rsquo;s two-direction
                forecast — so the conditional probability of step
                2 being a continuation (re-stack hostile or
                two-leg cover) is higher than a flat baseline;
                but cycle-1 cadence interleaved re-stacks with a
                long-add and a hybrid, so step-direction is still
                low-confidence forecast. <span className="dn-em">
                  Lineage state: short side at lineage-peak (32,325
                  BTC, was 24,499 prior note); long side at
                  lineage-low (9,790 BTC, was 12,441); net SM
                  87% more short than 05-27 baseline. The
                  position book is now most fragile to a sudden
                  cover-bounce (lineage-low long_btc means
                  every short-cover bid converts directly into
                  long-side absorption) AND most exposed to a
                  continuation (lineage-peak short_btc has
                  maximum stop-density above)
                </span>. The new question for cycle 2 step 2:
                continuation (re-stack adds to −22.5k base, takes
                SM toward −25k+) or cover (short_btc trims to
                28k+ on a fast spot reclaim of flip $75,557).
                The 29MAY 1.3DTE expiry tomorrow Beijing-morning
                is the single biggest path-dependence input — its
                gamma amplifier resolves within the step-2
                window itself.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">cycle 2 step 1 printed · step 2 base rate ~24h forward on BJ 13–15 cadence (2026-05-28 05:00–07:00Z window opens in ~5h)</span></div>
                <div><span className="dn-lvl-k">step 1 of cycle 2</span><span className="dn-lvl-v">re-stack hostile @ 2026-05-27 05:11Z (BJ 13:11) · spot $75,635 · Δlong +774, Δshort +6,740, Δnet −5,966</span></div>
                <div><span className="dn-lvl-k">SM trough (most short) in window</span><span className="dn-lvl-v">−22,668 BTC @ 2026-05-27 23:41Z (BJ 07:41 05-28) · spot $74,287 · 27 min before snapshot</span></div>
                <div><span className="dn-lvl-k">post-step price path</span><span className="dn-lvl-v">step $75,636 → 24h high $76,102 (+$466) → 24h low $74,266 (−$1,370 from step) → snapshot $74,504 (−$1,132 vs step entry)</span></div>
                <div><span className="dn-lvl-k">step cadence</span><span className="dn-lvl-v">6 consecutive days · all BJ 13–15 window · step 2 of cycle 2 base rate ~24h forward (BJ 13–15 today, 2026-05-28 05:00–07:00Z)</span></div>
              </div>
              <div className="dn-gating">
                <b>Cycle-2 forecast discipline:</b> step 1 was
                re-stack hostile (continuation of the broken-floor
                trend) — this matches the &ldquo;broken floor
                produces a fresh re-stack tomorrow&rdquo; branch
                of yesterday&rsquo;s two-direction forecast. Step
                2 base rate stays at ~24h forward on the BJ 13–15
                cadence; direction-conditional read pending the
                snapshot-to-step path. The position book is at
                maximum strain on both sides (peak short, trough
                long) — a continuation re-stack would extend the
                strain further; a two-leg cover would convert
                the strain into a fast bounce. Watch order: SM
                step at BJ 13–15 first, then GEX 29MAY expiry
                resolve mid-step-window. Both fire inside the
                same 8-hour block.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · gate fired clean · first target tagged · cycle-2 step 2 + 29MAY expiry resolve in the same 8h window</span>
            </h2>

            <p>
              Of the nine 05-27 decision conditions: break-extends
              short FIRED CLEAN at BJ 22:00 05-27 (all three legs
              printed in the same 1h bar — first time any 3-leg
              gate has fired all-three across the 6-day lineage);
              re-stack hostile FIRED CLEAN at BJ 13:11 (Δnet
              −5,966 ≤ −3k gate, SM hit −17,848 &lt; −15k gate);
              mid-cycle escalate FIRED (1d close 05-27 $74,418
              well below cloud top $75.4k); cycle-2 cadence step
              FIRED on time and direction (re-stack hostile at
              BJ 13:11 inside the 13–15 window); macro re-grow
              gates moved AWAY further (HY OAS to 2.72% vs 2.85%
              gate; 10Y to 4.50% vs 4.60% gate); reclaim-long
              rates filter FIRED TRUE for the first time (10Y
              4.50% &lt; 4.55%); long re-engage / short-cover
              early flag / reclaim filter not even close.{' '}
              <em>Four of nine conditions fired strictly, one
              filter fired in the opposite-of-action direction</em>{' '}
              — the highest strict-fire count of the lineage by
              far. The conditions today re-set around a broken
              floor and a maxed-strain position book; cycle-2 step
              2 and 29MAY expiry are the new top-watch rows:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Cycle 2 step 2 — BJ 13–15 today (2026-05-28 05:00–07:00Z)</td><td>discrete SM step expected at the cadence window; direction-conditional</td><td>read step at print; re-stack continues, two-leg cover converts to cover-bounce setup</td></tr>
                <tr><td>29MAY26 expiry resolves (≤ 31h)</td><td>−84.16M dealer-gamma chunk clears tomorrow Beijing-morning</td><td>close put-spread on expiry print; assess dealer-strip post-expiry for next-leg gamma context</td></tr>
                <tr><td>Cover-bounce scout (long)</td><td className="bull">1h close &gt; $75,557 (new flip) AND SM short_btc &lt; 30k AND long_btc &gt; 11k inside the 4h leading up</td><td>scout long 0.2R, target $76,473 (D-SMA150) then $77,069 (D-EMA20)</td></tr>
                <tr><td>Press extends (short runner)</td><td className="bear">1h close &lt; $74,400 (below W-SMA20 + buffer) AND SM &lt; −20k AND short_btc &gt; 31k</td><td>let runner press toward $73,710 (W-EMA200 seed) then $72,958 (D-SMA100 cycle anchor) — trail stop to entry once $73,710 prints</td></tr>
                <tr><td>Cycle anchor test (max press)</td><td className="bear">1d close &lt; $73,200 OR clean 4h follow-through below $73,710</td><td>final close into D-SMA100 $72,958; cycle anchor test below = cycle-regime escalation, separate reassessment</td></tr>
                <tr><td>Re-stack hostile-2 (cycle 2 step 2 continuation)</td><td className="bear">discrete SM Δ ≤ −3k in one minute pushing SM &lt; −24k</td><td>treat as immediate runner press extension, target $72,958 directly</td></tr>
                <tr><td>Short-cover capitulation (cycle 2 reversal)</td><td className="bull">SM short_btc drops &gt; 2k inside 1h AND long_btc &gt; 11k</td><td>close runner short; flip-cover the W-SMA20 reclaim as cover-bounce long pretrigger</td></tr>
                <tr><td>Macro tail re-grow (FRESH gates after 05-28 print)</td><td className="bear">HY OAS &gt; 2.80% (lowered) OR 10Y &gt; 4.55% (lowered) close on next Tier-1 print</td><td>roll put-spread to 5JUN/12JUN forward; tail +0.1R toward primary</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — FIRED TRUE today at 4.50% (first lineage fire); awaits BTC-internal pivot to translate to action</td><td>standalone filter is true; needs BTC-internal cover-bounce trigger to translate to scout long</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether cycle 2 step 2 lands as a re-stack
                continuation or a two-leg cover in BJ 13–15 today.
                The 29MAY expiry resolves in the same 8-hour block
                (tomorrow Beijing-morning, ~31h from snapshot) —
                the only time across the lineage that a cadence
                step and a peak-amplifier expiry resolve inside
                the same window. Timing is near-deterministic;
                direction is structural-asymmetric (position book
                at maximum strain on both sides means whichever
                way the step prints, the move is fast)
              </span>. Until the step prints, this note runs as
              written: flip-extend short runner alive with first
              target tagged and discipline on the press into 29MAY
              expiry, cover-bounce scout gated hard against the
              position-book pivot, macro tail held into the
              amplifier peak day. The macro print today loosened
              further on every Tier-1 line; the BTC-internal
              break extended for a second consecutive day and the
              gate yesterday named fired all three legs cleanly
              for the first time in the lineage. The TradFi
              engine cooled from peak (NQ +2.68% vs +4.11%, JP225
              +5.24% vs +10.80%, metals turned negative); BTC
              decoupled DOWN by another 2pt to a 7d lag of
              −7.2pt. That divergence is now structurally the
              widest and longest of the 6-day lineage and is the
              cleanest single read against
              &ldquo;BTC tracks macro risk-on&rdquo; we have
              produced.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit · 0 CRITICAL · 2 HIGH + 6 MED + 1 LOW all fixed)
            </span>
            <b>Codex CLI 0.132.0 (xhigh reasoning) ran the hostile
            audit cleanly — the empty-stdin pipe held, no TTY
            block.</b> Zero CRITICAL; all 9 findings applied EN+ZH:{' '}
            (a) <b>F-01 · HIGH</b> &mdash; <em>MTF archive claim
            unsupported at audit time</em>: the manifest band cited{' '}
            <code>audits/2026-05-28-desk-note.md</code> as the
            archive of the 00:01Z MTF scan but the audit file did
            not exist at codex pre-flight. Audit record created
            (this document) with the verbatim 00:46Z scan archive
            at the bottom (the rolling artifact had overwritten the
            00:01Z scan by capture time — lineage F-04 pinnability
            gap persists).{' '}
            (b) <b>F-02 · HIGH</b> &mdash; <em>funding cap-row
            count and trough timestamp wrong</em>: page conflated
            the 1068 flat-delta count with cap-occupancy and put
            the trough at &ldquo;BJ 06:30 local-AM dip&rdquo;.
            Correct: 878 of 1441 24h rows (~61%) at the exact
            +10.95% cap; trough +4.16% ann at{' '}
            <code>2026-05-27 11:33Z (BJ 19:33 05-27)</code>; cap-off
            first at <code>2026-05-27 07:39Z (BJ 15:39 05-27)</code>.
            Funding meta tile, Δ-funding tile, §I funding paragraph,
            and trade-book primary-short thesis rewritten EN+ZH.{' '}
            (c) <b>F-03 · MED</b> &mdash; <em>24h high timestamp
            inverted both ways</em>: page said &ldquo;BJ 04:23 05-28
            = UTC 20:23Z 05-27&rdquo;; correct is{' '}
            <code>2026-05-27 12:23Z (BJ 20:23 05-27)</code>.{' '}
            (d) <b>F-04 · MED</b> &mdash; <em>lead carried
            yesterday&rsquo;s W-EMA200 $73,724 / D-SMA100 $72,903
            instead of today&rsquo;s recompute</em>: corrected to
            <code>$73,710 / $72,958</code> in the lead; §II MA
            matrix, trade-book targets, and decision conditions
            were already on the correct values.{' '}
            (e) <b>F-05 · MED</b> &mdash; <em>RV methodology
            text mismatched the value</em>: 26.46% comes from
            30 daily log returns (= 31 closes); text said
            &ldquo;last 30 daily closes&rdquo; which gives 26.82%.
            Rewrote methodology to &ldquo;30 daily log returns (= 31
            consecutive daily closes)&rdquo; with the 26.82%
            alternative reading disclosed.{' '}
            (f) <b>F-06 · MED</b> &mdash; <em>ZH prior 10Y was 4.57%,
            EN had 4.56%</em> (the correct prior). ZH §IV corrected
            to 4.56%.{' '}
            (g) <b>F-07 · MED</b> &mdash; <em>post-29MAY expiry-strip
            sign was wrong</em>: page said &ldquo;next negative
            expiry is much lighter (5JUN +1.15M, 12JUN +0.30M)&rdquo;
            but those values are positive. Rewrote to disclose 30MAY
            +0.03M, 31MAY +0.28M, 5JUN +1.15M, 12JUN +0.30M as
            mildly positive — the front amplifier evaporates rather
            than rolls to another negative pocket.{' '}
            (h) <b>F-08 · MED</b> &mdash; <em>expiry amplifier
            arithmetic wrong</em>: $84.16M vs $30.65M is +$53.51M /
            ~2.75× / +174%, not &ldquo;52% heavier&rdquo;. Corrected
            both languages.{' '}
            (i) <b>F-09 · LOW</b> &mdash; <em>0γ dist-to-flip
            rounding wrong</em>: 74,504.35 / 75,557 − 1 = −1.39%,
            not −1.37%. Tile and both prose mentions corrected.
            Codex explicitly cleared: funding × 1095 magnitude
            (no ×100 landmine recurrence), GEX dual-reference
            sign-consistency (both refs negative; tile −1.39% matches
            cluster prose), GEX walls + by-expiry strip ($75k −51.26M
            heaviest single wall; 29MAY 1.3 DTE −84.16M peak
            amplifier; chain extended from 882 to 890 instruments),
            SM step chronology (BJ 13:11 single-minute step Δlong
            +774 / Δshort +6,740 / Δnet −5,966 — biggest single-step
            of the 6-day lineage; SM cut fraction 86.9% rounds to
            87%), break-extends gate firing chronology (BJ 22:00
            05-27 1h close $75,115.55 with all three legs printed in
            the same bar — first three-leg gate fire of the lineage),
            W-SMA20 target tag (24h low $74,266.08 at BJ 07:36 05-28
            tagged the yesterday-projected $74,266 to $0.08), MA
            matrix (all 19 published offsets verified against parquet
            recompute; W-EMA150 / W-EMA200 correctly seed-disclosed
            with 126 weekly bars), 30D RV 26.46% (30 returns / 31
            closes anchored to parquet last bar 2026-05-28 00:06Z),
            cross-asset 7d (mean |r| 0.297; BTC ties NQ +0.555 /
            SP500 +0.524 / CL −0.521; 7d perf BTC −4.55% vs NQ
            +2.68% — −7.2pt divergence), macro Tier-1 thaw (10Y
            −6bp to 4.50% fired reclaim-long filter for the first
            time in the lineage; HY OAS −2bp to 2.72% episodic
            z −2.12 deepest of lineage; US-JP 10Y spread −6bp to
            1.98%), claims-vs-loaded-data discipline (NTT / max-pain
            / strike-IV / BTC-NQ framework-only; JGB monthly
            &ldquo;do not lean&rdquo;; IV chain-median across 890
            instruments not a tradable spread), EN/ZH numeric parity
            (zero drift apart from F-06 ZH 4.57% typo, fixed), the
            requireViewer gating pattern (both paths, first
            statement), index <code>&lt;li&gt;</code> additions
            (newest-first; EN &ldquo;Gate fired clean, target tagged
            to the dollar&rdquo; / ZH &ldquo;门打齐 · 目标贴位差 $0
            触到&rdquo;), trade-book gating discipline (the note
            acknowledges yesterday&rsquo;s 0.3R break-extends short
            fired all three legs and the first target tagged to the
            dollar; book transitions cleanly to &ldquo;take half,
            press the runner inside the 29MAY 1.3 DTE amplifier
            window&rdquo; with no defense of a stand-aside posture
            invalidated by the gate fire). Source audit record with
            full 00:46Z MTF scan archive at
            audits/2026-05-28-desk-note.md.{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1;
            Next 16.2.6 hard-exits on Node &lt; 20.9.0 at{' '}
            <code>node_modules/next/dist/bin/next:24-28</code>, so a
            full <code>next build</code> is environment-blocked
            (lineage from 05-21 through 05-27).{' '}
            <code>npx --no-install tsc --noEmit</code> returned exit 0
            (TypeScript clean) and is the build proxy.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for
            discussion among principals of Hysteresis Research and
            is{' '}
            <em>not investment advice, not a solicitation, not an
            offer</em>, and not personalized to any recipient&rsquo;s
            circumstances. Numbers reflect a single atomic snapshot
            (2026-05-28 00:08Z) with section-level provenance
            disclosed in the manifest band above; macro Tier-1
            panel render is 2026-05-27 22:15Z (~1.9h before
            snapshot) and the fresh print eased further on every
            Tier-1 line. Levels, sizes, and conditions are
            illustrative of the desk&rsquo;s process, not standing
            recommendations. Past correlation, gamma, and positioning
            patterns do not bind future tape. Derivatives carry the
            risk of total loss and, where leveraged, loss exceeding
            deposited margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                Gate fired clean. Target tagged to the dollar. Cycle
                2 step 2 and the 29MAY amplifier resolve in the same
                8-hour block. Press the runner inside the window;
                wait for the position-book pivot for the cover.
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
            v2 · 2026-05-28 00:08Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
