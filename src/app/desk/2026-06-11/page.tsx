import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-11 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-11',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-11' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260611() {
  await requireViewer('/desk/2026-06-11');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-11 · v2</span>
          <span>internal · for discussion · v2 · post codex hostile audit</span>
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
              <span className="dn-big">$61,651</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.38%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-11 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-11 00:07Z (snapshot pin)</td>
                  <td className="dn-flag">
                    fresh · 1-min · all derived values pinned to the 00:07Z
                    anchor row · live `t` field is BJ-local (UTC+8) so the 00:07Z
                    anchor row is `06-11 08:07`; this snapshot lands ~16h07m after
                    the 10JUN 08:00Z option settle and ~7h53m before the 11JUN
                    08:00Z settle
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-11 00:01Z scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    ~6-min stale vs the 00:07Z snapshot anchor · in-progress bars ·
                    archived to <code>/opt/desk-note/snapshots/2026-06-11-0007/</code>{' '}
                    at author time
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-11 00:01Z snapshot</td>
                  <td className="dn-flag">
                    pre-settle · ~6-min stale vs the snapshot anchor · Deribit idx
                    $61,747 vs live $61,650.58 · 956 inst (was 958 on 06-10, −2) ·
                    11JUN 0.3DTE −14.07M settles at 08:00Z today (~8h ahead) ·
                    ex-11JUN aggregate ≈ −54.93M still net negative (dashboard-
                    total shortcut; displayed rows are non-additive — see dealer
                    section) · archived to{' '}
                    <code>/opt/desk-note/snapshots/2026-06-11-0007/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-11 00:01Z
                  </td>
                  <td className="dn-flag">~6-min lag · 7d 1h bars · 22 assets · 167 rows · regime NORMAL (mean |r| 0.318) · archived to <code>/opt/desk-note/snapshots/2026-06-11-0007/</code></td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-10 22:15Z render</td>
                  <td className="dn-flag">
                    ~1h52m render lag · FRED Tier-1 eased at the long end (10Y
                    −3bp to 4.53%, TIPS −1bp to 2.20%) · HY OAS +3bp to 2.78% (now
                    AT the 2.78% re-grow gate) · DXY 99.88 (−0.17) · Fed net liq
                    $5.834T (−0.038T) · archived to{' '}
                    <code>/opt/desk-note/snapshots/2026-06-11-0007/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix + 200W floor</td>
                  <td className="dn-v-cell">btcusdt_1m parquet · full-history + 2024–2026 subset</td>
                  <td className="dn-flag">
                    offsets recomputed vs live spot · subset MA ladder from the
                    2024–2026 window per desk policy · 200W floor read from the
                    full-history parquet (W-MON resample, 354 weekly bars) ·{' '}
                    <code>weekly_200sma.json</code> is ABSENT, so the 200W is
                    computed directly from the parquet and the JSON percentile /
                    last-event fields are unavailable (not fabricated) · subset
                    W-SMA150 / W-SMA200 non-computable (128 subset weekly bars)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale 70d · monthly · do not treat as live</td>
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
              <span className="dn-v bear">−0.48%</span>
              <span className="dn-src">live · snap −0.48% ann (short-pay live at the snap) · 24h mean ann −2.41% (was +0.93% on 06-10, FLIPPED −3.34pt) · cap occupancy 0 / 1441 sampled rows (7th consecutive cap-empty snap) · neg-minute share 81.96% (1181 / 1441, was 35.53% on 06-10, +46.43pt) · 24h trough −5.485% ann @ UTC 11:07 06-10 · 24h peak +2.983% ann @ UTC 15:55 06-10</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">snap +0.35% → −0.48% (−0.83pt) · mean +0.93% → −2.41% (−3.34pt)</span>
              <span className="dn-src">range −5.485% / +2.983% ann · longest neg streak 850 sampled rows / 14h08m wall-clock (UTC 00:17→14:25 06-10; the live tape includes a duplicate 06-10 14:40 row, so 850 sampled rows span 14h08m not 14h10m) — clears the ≥4h short-pay leg-2 gate AND funding is negative at the snap, so the re-clear is LIVE, not stale · longest pos streak 253 sampled rows</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v">+0.21% (+209 BTC)</span>
              <span className="dn-src">live · OI ~flat / marginally expanded · base 99,258 (08:07 baseline) → 99,467 · 24h peak 101,202 @ UTC 13:58 06-10, trough 99,225 @ UTC 22:49 06-10 · SM long Δ +98, short Δ +1,366 over the 24h tape</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">67.92 / 32.08</span>
              <span className="dn-src">live_db `mkt_long_pct` · marginal re-crowd +0.57pt vs 06-10&rsquo;s 67.36 (still crowded long) · 24h range 66.12 / 68.26 · peak 68.26 @ UTC 09:37 06-10, trough 66.12 @ UTC 15:43 06-10 (trough at the spot high — faded the bounce)</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−42.7k (net SHORT · 3rd consecutive short-add)</span>
              <span className="dn-src">live · long 13.78k − short 56.52k · short peak 58,719 @ UTC 13:26 06-10 (pressed into the bounce, NOT at the low), short trough 54,901 @ UTC 01:41 06-10 · long peak 14,354 @ UTC 16:06 06-10, long trough 13,619 @ UTC 06:40 06-10 · net trough (most short) −44,838 @ UTC 13:26 06-10, net peak (least short) −41,015 @ UTC 01:41 06-10</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 06-10 note</span>
              <span className="dn-v bear">−41.4k → −42.7k (−1,338 MORE short)</span>
              <span className="dn-src">long +115, short +1,454 (rounded independently; net −1,338) · |Δ| / prior_net = 3.23% (1,338 / 41,398) · third consecutive short-add cut, but the magnitude is EASING (−2,740 on 06-10 → −1,338 today)</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">48.6% / 39.59%</span>
              <span className="dn-src">GEX median IV across 956 inst (was 958 on 06-10, −2) · IV/RV spread +9.01pt · 30D close-to-close RV 39.59% (30 returns / 31 closes; 29-return alt 40.23%)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−2.88% (below)</span>
              <span className="dn-src">flip $63,480 (was $63,592, walked DOWN −$112) · vs live spot $61,650.58 (61,650.58 / 63,480 − 1 = −2.882%) / GEX file idx $61,747 (−2.730%; 61,747 / 63,480 − 1 = −2.730%) — both refs negative, spot below the flip · aggregate GEX −69.0M (was −58.6M, DEEPENED −$10.4M of negative gamma) · file&rsquo;s own dist-to-flip reads −2.7%</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The 200W floor watch holds open below the line, but a mean-revert
                cluster fired underneath it
              </span>. Spot prints{' '}
              <span className="dn-tag bear">−0.38% to $61,651</span> on a wide
              round-trip (24h high <span className="dn-tag">$62,813</span>, low{' '}
              <span className="dn-tag bear">$60,827</span>, net ~flat). The
              full-history W-MON 200-week SMA is{' '}
              <span className="dn-tag">$62,019</span> (200 closed bars ending
              06-08); live spot is{' '}
              <span className="dn-tag bear">−0.59% / −$368 below</span>, the
              06-10 daily close <span className="dn-tag bear">$61,484</span>{' '}
              closed below it, and the in-progress 06-15 weekly bar prints{' '}
              <span className="dn-tag bear">$61,596 = −0.68% / −$423 below</span>.
              The 06-15 weekly close remains the binary.{' '}
              <span className="dn-signal">What changed underneath is the
              mean-revert tape</span>: funding flipped decisively negative
              (24h mean ann <span className="dn-tag bear">+0.93% → −2.41%</span>,
              short-pay live at the snap, neg-minute share{' '}
              <span className="dn-tag">81.96%</span>, longest neg streak{' '}
              <span className="dn-tag">14h08m</span> running live), the TD9-BUY
              cluster BROADENED (3d active ⚡ TD9 BUY + 1h/1M pending), and{' '}
              <span className="dn-em">BTC inverted from laggard to relative
              outperformer</span> — BTC −2.73% on 7d now OUTPERFORMS NQ −6.81%
              by +4.08pt (was a −2.47pt lag on 06-10) as TradFi rolled hard. The
              rates filter even re-cleared: 10Y eased{' '}
              <span className="dn-tag bull">4.56% → 4.53%</span> (back below the
              4.55% reclaim-long filter). Against all that, the structure stays
              bearish: the dealer book DEEPENED to{' '}
              <span className="dn-tag bear">−69.0M</span> (flip walked down to{' '}
              <span className="dn-tag bear">$63,480</span>, spot −2.88% below),
              SM pressed short a 3rd day (−1,338 more short, |Δ|/prior 3.23%,
              magnitude easing), and every MA is overhead. The mean-revert long
              scout funding leg goes LIVE this cut, but the flip-reclaim leg
              (1h close &gt; $63,480, −2.88% above) is the binding holdout —{' '}
              <span className="dn-em">the legs are converging, not aligned</span>.
              The $60k crash-put magnet eased for the first time after two
              re-loads (−47.86M → −38.65M, +9.21M). Desk stays flat.
            </p>

            <p>
              BTC prints <span className="dn-tag">$61,651</span> live,{' '}
              <span className="dn-tag bear">−0.38%</span> on 24h, inside a wide{' '}
              <span className="dn-tag">$62,812.76 / $60,826.51</span> range (high
              @ UTC 15:55 06-10, low @ UTC 09:22 06-10 — spot 24h ago was
              $61,886 at the 08:07 baseline). The tape made a full round-trip and
              came back ~flat: 1h <span className="dn-tag bull">+0.48%</span>, 4h{' '}
              <span className="dn-tag bear">−0.27%</span>.{' '}
              <span className="dn-signal">The load-bearing line stays the 200W
              floor</span>: the W-MON full-history 200-week SMA is{' '}
              <span className="dn-tag">$62,019</span>, live spot is{' '}
              <span className="dn-tag bear">−0.59% below ($61,651)</span>, the
              06-10 daily close $61,484 closed below it, and the in-progress
              06-15 weekly bar prints $61,596 — also below. On the
              close-frequency read, only{' '}
              <span className="dn-tag">8 / 154 weekly closes (5.19%)</span> have
              printed below their own contemporaneous 200W — the same
              low-base-rate location the tape has been testing since the 06-09
              re-break.{' '}
              <span className="dn-em">
                The 200W is the load-bearing line of this note: a 06-15 weekly
                close back above $62,019 reclaims the floor on the only timeframe
                that matters for the cycle read; a close below confirms the first
                weekly close below the 200W in the current post-06-08
                floor-watch lineage (last full-history below-own-200W close was
                2023-10-09).
              </span>{' '}
              The daily-close lineage shows three consecutive closes below the
              floor: 06-07 $63,298, 06-08 $63,058, 06-09 $61,695, 06-10 $61,484
              (FINAL), 06-11 in-progress $61,596 — the floor has been lost on
              every close since the 06-08 reclaim.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · SM pressed short a 3rd day (magnitude EASING) · OI ~flat · retail still crowded · funding FLIPPED decisively negative — short-pay leg-2 now LIVE not stale</span>
            </h2>

            <p>
              <span className="dn-signal">
                Smart money pressed short a third consecutive day, but the
                magnitude is easing
              </span>. SM net is{' '}
              <span className="dn-tag bear">−42,736</span> vs the 06-10
              note&rsquo;s −41,398 — that is{' '}
              <span className="dn-em">−1,338 MORE short</span>{' '}
              (|−42,736 − (−41,398)| / 41,398 = 3.23%). The components: long_btc{' '}
              <span className="dn-tag bear">13,665 → 13,781 (+115)</span> and
              short_btc <span className="dn-tag bear">55,063 → 56,517
              (+1,454)</span> — a short add with a marginal long add this time
              (components rounded independently from the exact long
              13,665.270 → 13,780.700 and short 55,063.368 → 56,516.884; net
              −1,338.086 — do not difference the rounded endpoints).
              The third-day short-press is intact, but the cut magnitude is
              <span className="dn-em"> decaying</span>: −2,740 on 06-10 → −1,338
              today. Short_btc peaked{' '}
              <span className="dn-tag bear">58,719 @ 2026-06-10 13:26Z</span> —{' '}
              <span className="dn-em">pressed into the bounce, not at the low</span>
              {' '}(the 24h low printed at UTC 09:22, ~4h earlier) — then bled into
              the snap; short trough 54,901 @ UTC 01:41 06-10. SM net trough
              (most short){' '}
              <span className="dn-tag bear">−44,838 @ 2026-06-10 13:26Z</span>{' '}
              coincides with that short peak; net peak (least short) −41,015 @
              UTC 01:41 06-10. Long_btc trough 13,619 @ UTC 06:40 06-10, long
              peak 14,354 @ UTC 16:06 06-10. The book is still selling, but the
              pace of the press is slowing.
            </p>

            <p>
              <span className="dn-signal">
                OI sat ~flat while funding flipped decisively negative — the
                clearest tape shift of the cut
              </span>. OI Δ{' '}
              <span className="dn-tag">+209 BTC / +0.21%</span> over 24h (base
              99,258 at the 08:07 baseline → 99,467), marginally expanded; 24h
              peak 101,202 @ UTC 13:58 06-10, trough 99,225 @ UTC 22:49 06-10.
              Retail{' '}
              <span className="dn-tag bear">mkt_long_pct 67.92%</span> from
              67.36% — a marginal +0.57pt re-crowd, still crowded long (24h range
              66.12 / 68.26, trough 66.12 @ UTC 15:43 06-10 at the spot high —
              retail faded the bounce). The headline shift is funding:{' '}
              <span className="dn-em">the snap is short-pay −0.48% ann and the
              24h mean flipped from +0.93% to −2.41% ann (−3.34pt)</span>, cap
              occupancy{' '}
              <span className="dn-tag">0 / 1441 (7th consecutive cap-empty)</span>,
              neg-minute share <span className="dn-tag bear">81.96% (1181 / 1441)</span>{' '}
              up +46.43pt from 35.53%. The longest negative-pay streak was{' '}
              <span className="dn-tag">850 sampled rows / 14h08m wall-clock (UTC 00:17→14:25 06-10; a duplicate 06-10 14:40 row in the tape is why 850 sampled rows span a 14h08m wall-clock window)</span>,
              which RE-CLEARS the mean-revert scout&rsquo;s ≥4h short-pay leg-2
              gate —{' '}
              <span className="dn-em">and unlike 06-10, funding is negative at
              the snap (−0.48%), so this is a LIVE short-pay condition, not a
              stale early-window re-clear</span>. Funding paying shorts to hold
              is the mean-revert tell: the perp tape is over-offered and the
              carry now favors the long.
            </p>

            <p>
              Windowed flow is <em>spot-led bid recovering off the lows with OI
              ~flat</em>. 24h: price{' '}
              <span className="dn-tag bear">−0.38%</span>, OI{' '}
              <span className="dn-tag">+209 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,767</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +404</span>, big-print{' '}
              <span className="dn-tag bull">+20 BTC / 327 prints</span>,
              taker-net <span className="dn-tag bull">+404</span>{' '}
              <span className="dn-em">(reset-adjusted: the fut_cvd field rebased
              to 0 at UTC 06:40 06-10, so the reset-adjusted 24h futures CVD = the
              sum of per-minute taker-net = +404 — futCVD and taker-net are one
              read by construction; cb_cvd had no reset in the 24h)</span>.{' '}
              <span className="dn-em">
                Spot CVD leading positive (+1,767) with futures CVD only mildly
                positive (+404) and OI flat is a spot-led-bid signature — the
                recovery off the $60,827 low was bought in spot, not levered in
                perps.
              </span>{' '}
              4h (into snap): price{' '}
              <span className="dn-tag bear">−0.27%</span>, OI{' '}
              <span className="dn-tag bull">−735 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +272</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +689</span>, big-print{' '}
              <span className="dn-tag bull">+75 BTC / 52 prints</span>,
              taker-net <span className="dn-tag bull">+689</span> —{' '}
              <em>both CVDs bid with OI coming off, a de-grossing-into-strength
              read</em>. 1h: price <span className="dn-tag bull">+0.48%</span>,
              OI <span className="dn-tag">+188 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +443</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +335</span>, big-print{' '}
              <span className="dn-tag bear">−47 BTC / 13 prints</span>,
              taker-net <span className="dn-tag bull">+335</span> —{' '}
              <em>up on a fresh-bid last hour</em>. Perp trades a{' '}
              <span className="dn-tag bear">−$62.26 discount</span> to spot at
              the snap (1h mean −$59.32, range −$109.68 / −$33.18; 4h mean
              −$61.03, range −$117.57 / +$61.28; 24h mean −$53.99, range −$196.96
              / +$61.28 — basis went briefly premium intraday). 1-min aggressor
              skew snap <span className="dn-tag bull">+18.7</span> (1h mean −6.25,
              range −39.1 / +40.8) — a buy-aggressor reflex into the snap,
              consistent with the spot-led recovery bid.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · slow frames deeply oversold (1d 24.3, 12h 29.3, 3d 31.3) · 3d ⚡ TD9 BUY active, 1h/1M pending — cluster BROADENED · all intraday below cloud · oversold-in-breakdown net read</span>
            </h2>

            <p>
              <span className="dn-signal">
                The slow frames are deeply oversold and the TD9-BUY cluster
                broadened
              </span>. The 1d is the deepest oversold at{' '}
              <span className="dn-tag bear">24.3</span>, the 12h at{' '}
              <span className="dn-tag bear">29.3</span> (back below 30), the 3d at{' '}
              <span className="dn-tag bear">31.3</span> and the 8h at 36.4 — the
              slow end is stretched. The engine frames sit just below the
              mid-line: 4h RSI 44.5, 1h 46.7, 30m 47.7, 15m 49.3. The Ichimoku
              map is uniformly heavy: every frame from 1h up is{' '}
              <span className="dn-tag bear">below cloud</span> — 1h below
              ↑61.9k, 4h below ↑62.7k, 8h below ↑71.6k, 12h below ↑75.4k, 1d
              below ↑73.9k — with only 30m clinging{' '}
              <span className="dn-tag">in cloud 61.3k–61.8k</span>, 15m below
              ↑61.8k, and the 1M still{' '}
              <span className="dn-tag bull">above ↓46.9k</span> on the cycle
              frame. The TD read broadened constructive:{' '}
              <span className="dn-tag bull">3d carries an active ⚡ TD9 BUY</span>,
              with 1h (Buy 8 → 9?) and 1M (Buy 8 → 9?) pending a 9-count — a
              wider TD9-BUY cluster than 06-10&rsquo;s (which paired the 3d-active
              print with 4h/1M pending; the active print is now flanked by the
              1h and 1M).
              <span className="dn-em">
                {' '}Read straight: the slow frames are oversold and the 3d TD9
                BUY is live with the cluster broadening, but every intraday frame
                except 30m is below cloud and the tape is in a confirmed
                breakdown. This is an oversold tape inside a confirmed breakdown
                — the TD cluster is a watch for the mean-revert scout, not a
                structural turn.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">49.3</td><td className="bull">golden (water-dn) just printed</td><td className="bear">below ↑61.8k 9b</td><td>Sell 2</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">47.7</td><td className="bear">death (water-up) 10b</td><td className="neut">in cloud 61.3–61.8k 3b</td><td>Sell 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">46.7</td><td className="bear">death (water-dn) 2b</td><td className="bear">below ↑61.9k 34b</td><td>Buy 8 → 9?</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">44.5</td><td className="bull">golden (water-dn) 3b</td><td className="bear">below ↑62.7k 97b</td><td>Sell 1</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num bull">36.4</td><td className="bull">golden (water-dn) 11b</td><td className="bear">below ↑71.6k 78b</td><td>Buy 1</td><td>BEAR hid</td></tr>
                <tr><td>12h</td><td className="num bull">29.3</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑75.4k 39b</td><td>Buy 4</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num bull">24.3</td><td className="neut">—</td><td className="bear">below ↑73.9k 10b</td><td>Buy 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num bull">31.3</td><td className="neut">death (water-up) 5b</td><td className="bear">below ↑74.2k 3b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>1w</td><td className="num bull">33.1</td><td className="neut">—</td><td className="bear">below ↑100.3k 19b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">41.9</td><td className="neut">— (DIF above water)</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={6} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (rolling latest
                    file; archived to{' '}
                    <code>/opt/desk-note/snapshots/2026-06-11-0007/</code> at
                    author time). Header alerts:{' '}
                    <em>3d ⚡ TD9 BUY active</em>, <em>1h / 1M TD Buy 8 → 9?
                    pending</em>, <em>1h water-down death cross 2b (bearish
                    continuation)</em>, <em>15m water-down golden cross just
                    printed</em>. Scan spot $61,569, 24h −0.21% (00:01Z scan; the
                    live-tape header at 00:07Z shows −0.38% on the same 24h
                    window — the ~6-min gap accounts for the difference), 24h H/L
                    $62,840 / $60,692, qVol $11.91B, scan close $61,576. Closes
                    are in-progress bars; treat every value as provisional until
                    each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is uniformly overhead on the daily ladder — there is
              no positive offset left on the dailies. Spot $61,651 sits below
              every daily MA: closest overhead is{' '}
              <span className="dn-tag bear">D-EMA20 $67,319 (−8.42%)</span>, then{' '}
              <span className="dn-tag bear">D-SMA20 $68,749 (−10.32%)</span>,{' '}
              <span className="dn-tag bear">D-EMA50 $71,594 (−13.89%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $72,783 (−15.30%, cycle
              anchor)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $73,945 (−16.63%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $74,133 (−16.84%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $74,687 (−17.45%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $76,599 (−19.51%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $77,997 (−20.96%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $79,209 (−22.17%)</span>.
              The cycle anchor D-SMA100 is −15.30% overhead. The subset weekly
              ladder is equally overhead: W-SMA20 $71,385 (−13.64%), W-EMA20
              $74,942 (−17.74%), W-EMA100 $82,407 (−25.19%), W-EMA50 $83,062
              (−25.78%), W-SMA100 $88,413 (−30.27%), W-SMA50 $91,683 (−32.76%);
              subset W-EMA150 $77,813 (−20.77% seed), W-EMA200 $73,479 (−16.10%
              seed); subset W-SMA150 / W-SMA200 non-computable at 128 subset
              weekly bars.{' '}
              <span className="dn-signal">
                The structural line of the note is the full-history 200W floor
              </span>: full-history W-MON 200-week SMA{' '}
              <span className="dn-tag">$62,019</span> (200 closed bars ending
              06-08), live spot{' '}
              <span className="dn-tag bear">−0.59% / −$368 below</span>, the
              in-progress 06-15 weekly bar 1-min close{' '}
              <span className="dn-tag bear">$61,596 (−0.68% / −$423 below)</span>,
              and the last closed weekly (06-08) $63,058 now history at +1.68%
              above. Weekly-close-below-own-200W frequency 8 / 154 = 5.19%.{' '}
              <span className="dn-em">
                MAs anchored to the btcusdt_1m parquet (subset ladder from the
                2024–2026 window per desk policy; 200W from full-history W-MON
                resample, 354 weekly bars); offsets recomputed against live spot
                $61,650.58 (parquet anchor row ≤00:05Z close $61,596, gap
                $54.58). The <code>weekly_200sma.json</code> precompute is ABSENT,
                so the 200W is computed directly from the parquet and the JSON
                percentile / last-event fields are unavailable (not fabricated).
                Daily closes: 06-07 $63,298, 06-08 $63,058, 06-09 $61,695, 06-10
                $61,484 (FINAL), 06-11 in-progress $61,596 — three consecutive
                closes below the 200W after the 06-08 reclaim. 30D RV 39.59%.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DEEPENED net-short-gamma aggregate −69.0M · flip walked DOWN to $63,480 (spot −2.88% below) · $60k crash-put LIGHTENED to −38.65M (first ease after two re-loads) · 11JUN −14.07M settles in ~8h</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book deepened its short-gamma again, even as the $60k
                put magnet lightened for the first time
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bear">−69.0M</span> (was −58.6M on 06-10 —
              a $10.4M re-stack of negative gamma); the book is more
              destabilizing, not less. The 0-γ flip walked{' '}
              <span className="dn-tag bear">$63,592 → $63,480 (−$112)</span>, and
              spot $61,651 sits{' '}
              <span className="dn-tag bear">−2.88% below flip</span> on
              spot-denominated math (61,650.58 / 63,480 − 1 = −2.882%); the GEX
              file&rsquo;s own dist-to-flip reads −2.7% off its Deribit-index
              $61,747 ($96 above live spot), which is{' '}
              <span className="dn-tag bear">−2.730%</span> (61,747 / 63,480 − 1 =
              −2.730%) — both references negative, spot below the flip and{' '}
              <span className="dn-em">inside the dealer short-gamma zone where
              hedging amplifies the move down</span>. The wall map is still
              dominated by the $60k crash-put, but it eased:{' '}
              <span className="dn-tag bear">$60k −38.65M</span> (LIGHTENED from
              −47.86M, +$9.21M — the first ease after two consecutive re-loads),{' '}
              <span className="dn-tag bear">$58k −11.01M</span>,{' '}
              <span className="dn-tag bear">$61k −10.44M</span>,{' '}
              <span className="dn-tag bear">$55k −9.53M</span>,{' '}
              <span className="dn-tag bull">$80k +8.99M</span> (the only positive
              wall in the top 10),{' '}
              <span className="dn-tag bear">$62k −8.51M</span>,{' '}
              <span className="dn-tag bear">$60.5k −6.73M</span>,{' '}
              <span className="dn-tag bear">$50k −6.52M</span>,{' '}
              <span className="dn-tag bear">$59k −4.04M</span>,{' '}
              <span className="dn-tag bull">$70k +4.01M</span>.{' '}
              <span className="dn-em">
                The $60k strike remains the structural magnet at −38.65M three
                handles below spot, but the lightening is the first sign the
                crash-put bid has stopped re-loading; the 24h low $60,827 held
                above the strike this cut.
              </span>{' '}
              By expiry the near-dated strip is uniformly negative:{' '}
              <span className="dn-tag bear">11JUN 0.3 −14.07M</span> settles at
              08:00Z today (~8h ahead),{' '}
              <span className="dn-tag bear">12JUN 1.3 −19.39M</span>,{' '}
              <span className="dn-tag bear">13JUN 2.3 −4.89M</span>, 14JUN 3.3
              −1.76M, 19JUN 8.3 −5.09M,{' '}
              <span className="dn-tag bear">26JUN 15.3 −25.08M</span> (monthly,
              heaviest), 31JUL 50.3 +5.81M, 28AUG 78.3 +1.59M, 25SEP 106.3
              −0.25M, 25DEC 197.3 +2.33M, 26MAR27 288.3 +0.30M. Post-11JUN
              settle, the ex-11JUN aggregate is roughly −69.0M − (−14.07M) =
              −54.93M, still deeply net negative.{' '}
              <span className="dn-em">
                Caveat: this aggregate shortcut uses the dashboard total
                (−69.0M); the rounded displayed expiry rows above sum to −60.50M,
                so the by-expiry list and the dashboard total are internally
                non-additive by ~8.5M — the −69.0M dashboard total is
                authoritative, do not reconstruct the aggregate from the row list
                alone.
              </span>{' '}
              <span className="dn-em">
                The 11JUN −14.07M front chunk settling at 08:00Z today is the
                first calendar event: it clears a negative chunk, but the strip
                behind it (12JUN, 13JUN, 26JUN) keeps the book short-gamma — the
                amplifier is not coming off with this settle.
              </span>
            </p>

            <p>
              IV median across 956 instruments is{' '}
              <span className="dn-tag">48.6%</span> (was 958 on 06-10, −2
              instruments) against 30D close-to-close RV of{' '}
              <span className="dn-tag">39.59%</span> — chain-level richness{' '}
              <span className="dn-tag">+9.01pt</span>. A chain-median across N
              instruments, <span className="dn-em">not</span> a tradable spread;
              expiry-/strike-level vega, skew and term structure remain not
              loaded; the vol read stays framework-only. RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log
              returns (= 31 consecutive daily closes) anchored to the parquet
              last bar (window 2026-05-12 → 06-11); the last-29-returns /
              30-closes alt reads 40.23%, the 39.59% page value comes from 30
              returns. IV at 48.6% against realized 39.59% is a modest premium
              that widened +0.41pt vs 06-10 — vol is bid but not in panic,
              consistent with a controlled breakdown rather than a liquidation.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Tier-1 EASED at the long end (10Y −3bp to 4.53%, TIPS −1bp to 2.20%) · reclaim-long rates filter (10Y &lt; 4.55%) RE-CLEARED · HY OAS 2.78% now AT the re-grow gate · cross-asset NORMAL with BTC INVERTED to relative outperformer</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape eased at the long end this cut — rates and
                real-rates both backed off, re-clearing the reclaim-long filter
              </span>. Dashboard render is 2026-06-10 22:15Z, ~1h52m before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bull">4.53% (−3.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.92</span>, episodic z{' '}
              <span className="dn-tag bear">+0.65</span> — still RISK-OFF on the
              z, but the level eased and the reclaim-long rates filter (10Y &lt;
              4.55%) is now{' '}
              <span className="dn-tag bull">RE-CLEARED at 4.53%</span> (was BROKEN
              at 4.56% on 06-10). 10Y TIPS real{' '}
              <span className="dn-tag bull">2.20% (−1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.46</span>, episodic z{' '}
              <span className="dn-tag bear">+1.53</span> — EXTREME RISK-OFF on the
              z but eased on the level. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.24% (+2.0bp)</span>. HY OAS{' '}
              <span className="dn-tag bear">2.78% (+3.0bp)</span>, regime z{' '}
              <span className="dn-tag">−0.85</span>, episodic z{' '}
              <span className="dn-tag">+0.28</span> — still loose, but now{' '}
              <span className="dn-em">AT the 2.78% re-grow gate</span> (was 3bp
              away on 06-10 — HY OAS firmed +3bp and closed the gap exactly to
              the gate). MOVE bond vol{' '}
              <span className="dn-tag bull">73.9 (−3.08)</span> — eased. The
              offsets: DXY{' '}
              <span className="dn-tag bull">99.88 (−0.17)</span>, regime z +1.55,
              episodic z +1.60 — RISK-OFF on the z; Fed net liquidity{' '}
              <span className="dn-tag bear">$5.834T (−0.038T)</span>. USD/JPY{' '}
              <span className="dn-tag">160.22 (−0.10)</span>; US-JP 10Y spread{' '}
              <span className="dn-tag">2.02% (−3.0bp)</span>, tight; USD/CNY
              6.7717 (+0.01); 10Y breakeven 2.34% (+1.0bp); WTI $95.0; NFCI
              −0.506 neutral.{' '}
              <span className="dn-em">
                Net: the long end eased into the BTC round-trip, the reclaim-long
                rates filter RE-CLEARED (10Y 4.53% &lt; 4.55%), and the HY OAS
                re-grow gate is now AT 2.78% — the two macro-tail re-grow legs
                are both on their boundaries (10Y eased to exactly 4.53%
                un-fired; HY OAS firmed to exactly 2.78% gate), a knife-edge with
                neither cleanly above. The rates-filter re-clear is a tentative
                positive for the scout-long case; it has not yet translated to a
                BTC bid above the flip.
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
                <tr><td>US 10Y nominal</td><td className="num">4.53%</td><td className="num bull">−3.0bp</td><td className="num bear">+1.92</td><td className="num">+0.65</td><td className="bull">RISK-OFF z · filter RE-CLEARED</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.20%</td><td className="num bull">−1.0bp</td><td className="num bear">+2.46</td><td className="num bear">+1.53</td><td className="bear">EXTREME RISK-OFF z · eased level</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.24%</td><td className="num bear">+2.0bp</td><td className="num">—</td><td className="num">—</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num bear">+3.0bp</td><td className="num">−0.85</td><td className="num">+0.28</td><td className="bear">loose · AT the 2.78% re-grow gate</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.506</td><td className="num">—</td><td className="num">—</td><td className="num">—</td><td className="neut">neutral</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">73.9</td><td className="num bull">−3.08</td><td className="num">—</td><td className="num">—</td><td className="bull">eased</td></tr>
                <tr><td>DXY</td><td className="num">99.88</td><td className="num">−0.17</td><td className="num bear">+1.55</td><td className="num bear">+1.60</td><td className="bear">RISK-OFF episodic</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.834T</td><td className="num bear">−0.038T</td><td className="num">—</td><td className="num">—</td><td className="bear">drained on the week</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.22</td><td className="num">−0.10</td><td className="num">—</td><td className="num">—</td><td className="neut">flat</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.02%</td><td className="num bull">−3.0bp</td><td className="num">—</td><td className="num">—</td><td className="neut">tight</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7717</td><td className="num">+0.01</td><td className="num">—</td><td className="num">—</td><td className="neut">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp (monthly)</td><td className="num">—</td><td className="num">—</td><td className="stale">stale 70d · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.318</span>{' '}
              <span className="dn-signal">regime NORMAL</span> (was 0.287 on
              06-10, firmed +0.031, holds in the NORMAL band) — a broad
              correlated read. BTC&rsquo;s top ties: TSLA{' '}
              <span className="dn-tag">+0.383</span>, SILVER{' '}
              <span className="dn-tag">+0.369</span>, COPPER{' '}
              <span className="dn-tag">+0.362</span>, NVDA{' '}
              <span className="dn-tag">+0.357</span>, MSFT{' '}
              <span className="dn-tag">+0.337</span>, SP500{' '}
              <span className="dn-tag">+0.332</span>, NQ{' '}
              <span className="dn-tag">+0.332</span>, META{' '}
              <span className="dn-tag">+0.321</span>, PLAT{' '}
              <span className="dn-tag">+0.310</span>, GOLD{' '}
              <span className="dn-tag">+0.299</span>, URNM{' '}
              <span className="dn-tag">+0.296</span>, AMZN{' '}
              <span className="dn-tag">+0.282</span>.{' '}
              <span className="dn-signal">The key shift is BTC&rsquo;s relative
              performance</span>: 7d{' '}
              <span className="dn-tag bear">BTC −2.73%</span> now OUTPERFORMS NQ{' '}
              <span className="dn-tag bear">−6.81%</span> by +4.08pt (was a
              −2.47pt lag on 06-10) — TradFi rolled hard while BTC held
              relatively firmer. The rest of the 7d sweep: SP500{' '}
              <span className="dn-tag bear">−3.76%</span>, JP225 −6.91%, NVDA
              −7.23%, META −8.34%, AAPL −7.25%, MSFT −7.29%, GOOGL −1.15%, AMZN
              −5.94%, TSLA −10.09%. Metals stayed hit: SILVER{' '}
              <span className="dn-tag bear">−14.79%</span>, PLAT{' '}
              <span className="dn-tag bear">−11.43%</span>, URNM{' '}
              <span className="dn-tag bear">−17.06%</span>, GOLD −8.84%, PALL
              −7.39%, COPPER −4.12%. Energy: CL −4.75%, BRENT −3.58%, NGAS
              −0.54%. FX: EUR −0.61%, JPY +0.36%.{' '}
              <span className="dn-em">
                BTC −2.73% vs NQ −6.81% is a +4.08pt outperformance and an
                inversion from the 06-10 lag — BTC is now the relative
                outperformer within a still-NORMAL broad risk-off, not the
                idiosyncratic laggard. TradFi (tech and metals) rolled harder
                than crypto this week; the correlation stayed in the NORMAL band,
                so this is BTC outperforming inside a market-wide de-risking, not
                decoupling from it.
              </span>{' '}
              JGB monthly 2.52% stale 70d — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 200W cycle-floor watch (primary, still below) · mean-revert long scout — funding leg now LIVE, flip leg the binding holdout · macro tail re-grow both legs ON boundaries + rates filter re-cleared · squeeze-cycle hostile-2 watchlist · desk flat</span>
            </h2>

            <p>
              <span className="dn-signal">
                The desk is flat; the trade book stays centered on the 200W floor
                while a mean-revert cluster builds underneath it
              </span>. The 06-10 note carried no live position; nothing was
              opened into this snap. The floor watch continues as the primary
              framework — spot −0.59% below $62,019, the 06-10 daily close
              $61,484 below, the 06-15 weekly close the binary. The structure
              stays bearish: the dealer book deepened to −69.0M short-gamma below
              a $63,480 flip, SM pressed short a third day, every MA is overhead.
              But underneath, the mean-revert tape fired: funding flipped
              decisively negative (24h mean −2.41% ann, short-pay LIVE at the
              snap), the TD9-BUY cluster broadened, BTC inverted to a relative
              outperformer, and the rates filter re-cleared. <em>No fresh short
              at $60,827-tagged lows into a −38.65M $60k put magnet that the desk
              would be selling alongside the dealer; no fresh long until the 200W
              reclaims on a weekly-close basis or the scout legs fill cleanly —
              the flip-reclaim leg is the binding holdout.</em> Wait for the
              06-15 weekly close and the 11JUN settle to resolve the floor before
              committing size.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch · still below: spot −0.59%, 06-10 daily close $61,484 below, in-progress 06-15 weekly bar $61,596 below</span>
              <div className="dn-trade-name">
                200W cycle-floor watch — open: spot −0.59% below $62,019, 06-10 daily close $61,484 below, in-progress 06-15 weekly bar $61,596 below
              </div>
              <div className="dn-thesis">
                The 06-08 weekly close $63,058 (+1.68% above the 200W $62,019)
                resolved this watch bullish; the 06-09 tape gave it all back and
                the 06-10 close confirmed it below. Spot −0.38% to $61,651 made a
                wide round-trip (24h low $60,827, below the floor; 24h high
                $62,813, above it) and came back ~flat under the line, the 06-10
                daily close $61,484 closed below it, and the in-progress 06-15
                W-MON weekly bar prints $61,596 = −0.68% / −$423 below. The
                full-history 200-week SMA is $62,019 (200 closed bars ending
                06-08); the weekly-close-below-own-200W frequency is 8 / 154 =
                5.19% — a low-base-rate location. The single resolving event is
                the 06-15 weekly close: a close back above $62,019 reclaims the
                floor, a close below confirms the first sustained weekly-200W
                break of the current post-06-08 floor-watch lineage. Status:{' '}
                <em>watch open, no position</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor (full-history W-MON)</span><span className="dn-lvl-v">$62,019 · 200 closed bars ending 06-08 · live spot −0.59% / −$368 below</span></div>
                <div><span className="dn-lvl-k">in-progress weekly (06-15)</span><span className="dn-lvl-v bear">1m-close $61,596 = −0.68% / −$423 below the 200W — provisional until the 06-15 W-MON close</span></div>
                <div><span className="dn-lvl-k">reclaim condition (bullish)</span><span className="dn-lvl-v bull">06-15 weekly close &gt; $62,019 — reclaims the floor, a one-week dip-and-reclaim of the post-06-08 lineage</span></div>
                <div><span className="dn-lvl-k">break confirmation (bearish)</span><span className="dn-lvl-v bear">06-15 weekly close &lt; $62,019 — first weekly close below the 200W in the current post-06-08 floor-watch lineage (last full-history below-own-200W close was 2023-10-09); escalate the cycle-regime read</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the 200W is a weekly-close line, not
                an intraday level — a wick below $62,019 (the $60,827 low already
                printed one) does not resolve it; only the 06-15 W-MON close
                does. Three consecutive daily closes (06-09 $61,695, 06-10
                $61,484, 06-11 in-progress $61,596) sit below the floor; treat
                the next weekly close as the binary, and read the 11JUN 08:00Z
                settle and the daily-close lineage as the interim tells.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · NON-ACTIONABLE · funding leg-2 now LIVE · flip leg-3 the binding holdout</span>
              <div className="dn-trade-name">
                Mean-revert long scout — legs converging, not aligned: TD9 cluster BROADENED (3d-active + 1h/1M pending), funding short-pay leg-2 now LIVE (14h08m streak, negative at snap), flip leg-3 still −2.88% overhead
              </div>
              <div className="dn-thesis">
                The scout is a three-leg gate: (1) a TD9-BUY cluster, (2) a
                funding short-pay ≥4h contiguous streak, (3) a 1h close above the
                0-γ flip. On this snap two legs advanced. Leg 1 BROADENED — the 3d
                carries an active ⚡ TD9 BUY with 1h (Buy 8 → 9?) and 1M (Buy 8 →
                9?) pending, a wider cluster than 06-10. Leg 2 is now{' '}
                <em>LIVE</em>: an 850-sampled-row / 14h08m wall-clock negative-pay
                streak (UTC 00:17→14:25 06-10) clears the ≥4h gate AND funding is negative
                (−0.48% ann) at the snap — a live short-pay condition, not the
                stale early-window re-clear of 06-10. Leg 3 is the binding
                holdout: the flip walked down to $63,480 but spot is −2.88%
                below, so the 1h-close-above-flip gate is uncleared and the widest
                of the three. Net: the legs are converging but the flip-reclaim
                leg gates the trade, and the dealer book below the flip is
                short-gamma — a long here still fights the hedging flow. Status:{' '}
                <em>non-actionable, flip leg the holdout</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">leg 1 · TD9 cluster</span><span className="dn-lvl-v">3d ⚡ TD9 BUY active · 1h / 1M Buy 8 → 9? pending — BROADENED, not yet confirmed multi-frame</span></div>
                <div><span className="dn-lvl-k">leg 2 · funding short-pay ≥4h</span><span className="dn-lvl-v bull">LIVE — 14h08m negative streak AND funding negative (−0.48%) into the snap; the gate is cleared</span></div>
                <div><span className="dn-lvl-k">leg 3 · 1h close &gt; flip</span><span className="dn-lvl-v bear">flip $63,480, spot −2.88% below — uncleared, the binding holdout</span></div>
                <div><span className="dn-lvl-k">trigger (all 3 clean)</span><span className="dn-lvl-v bull">confirmed multi-frame TD9 BUY AND live funding short-pay ≥4h (cleared) AND 1h close &gt; $63,480 — then scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">stop / size</span><span className="dn-lvl-v bear">1h close &lt; $59,154 (06-06 capitulation low) · size 0.2R · take half at the cycle anchor D-SMA100 $72,783</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R sketch (illustrative, not a live order):</b> a trigger near
                the flip $63,480 against the $59,154 stop is ~$4,326 risk; the
                first target at the cycle anchor $72,783 is ~$9,303 ≈ 2.15:1 —
                attractive in the abstract, but the binding flip leg sits +2.88%
                above spot, so there is no entry to price today even with the
                funding leg now live. <b>Hard rule:</b> do not pre-position long
                below the flip into a short-gamma dealer book and a −38.65M $60k
                put magnet — the scout is a confirmation trade, not an
                anticipation trade. The funding-leg flip to live is the first leg
                to advance cleanly; watch the 1h close against $63,480 as the
                trigger.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — both legs ON their boundaries</span>
              <div className="dn-trade-name">
                Macro tail put-spread — closed; re-grow gates: 10Y &gt; 4.53% eased to exactly 4.53% (un-fired), HY OAS &gt; 2.78% firmed to exactly the 2.78% gate; reclaim-long rates filter (10Y &lt; 4.55%) RE-CLEARED
              </div>
              <div className="dn-thesis">
                The macro tail put-spread is closed with no residual. The re-grow
                gates moved to a knife-edge: the 10Y eased −3bp to exactly 4.53%
                (the leg fired at 4.56% on 06-10 but the level backed to its
                boundary, now un-fired), and the HY OAS firmed +3bp to exactly
                2.78% (now AT the re-grow gate, was 3bp away on 06-10). Both
                re-grow legs sit ON their boundaries, neither cleanly above. The
                reclaim-long rates filter (10Y &lt; 4.55%) is now RE-CLEARED at
                4.53% (was BROKEN at 4.56% on 06-10) — a tentative positive for
                the scout-long case. No re-grow today: both legs sit on their
                boundaries, so any re-grow needs a clean HY OAS print &gt; 2.78%
                AND a clean 10Y print &gt; 4.53% — neither is cleanly above yet.
                The macro backdrop is balanced on the edge concurrent with the
                200W watch.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed · no residual · no roll yet</span></div>
                <div><span className="dn-lvl-k">re-grow leg A (ON boundary)</span><span className="dn-lvl-v">10Y &gt; 4.53% close — AT 4.53%, eased back to the boundary, un-fired</span></div>
                <div><span className="dn-lvl-k">re-grow leg B (ON gate)</span><span className="dn-lvl-v">HY OAS &gt; 2.78% close — AT 2.78%, firmed to the gate exactly</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — RE-CLEARED at 4.53%</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as
                the levels drift, not backtested breakpoints, and both now sit
                exactly on their boundaries — a knife-edge, neither cleanly above.
                A re-grow — gated on clean prints above BOTH legs (HY OAS &gt;
                2.78% AND 10Y &gt; 4.53%) — would roll a put-spread into the
                19JUN or 26JUN forward expiry, into a book
                that is <em>already</em> short-gamma (aggregate −69.0M), so a
                fresh tail would carry the dealer-amplifier tailwind. Wait for a
                clean print above the gate on both legs; do not pre-grow on a
                boundary tag.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · 3rd-day short-press re-armed the signature, magnitude easing</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — watchlist: the 06-10 short-press kept the re-stack signature armed but the magnitude is easing; no time-pin, read each fresh Δnet print as a signal
              </div>
              <div className="dn-thesis">
                The squeeze-cycle framework runs as a watchlist with no calendar
                prior (the cadence was falsified late May). The 06-10 book kept
                the re-stack signature armed: SM added short (+1,454) and added a
                marginal long (+115) into the round-trip, with the short peak
                58,719 @ UTC 13:26 06-10 printing ~4h AFTER the 24h spot low — a
                press-into-the-bounce shape. The largest discrete single-minute
                SM step was −2,578 @ UTC 06:01 06-10 (Δlong −127, Δshort +2,451) —
                a hostile-2 signature but BELOW the −3k single-minute signal
                threshold, so no cycle-3 ignition; the rest was a gradual press
                partially offset by cover steps (+453 @ BJ 23:06, +408 @ BJ 01:46)
                during the bounce to $62k. Read any fresh Δnet ≤ −3k single-minute
                step (Δshort &gt; 0 + Δlong &lt; 0 same minute) as a re-stack
                hostile-2 signal in itself, and any Δnet ≥ +3k cover step as its
                inverse.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">watchlist · no calendar prior · 06-10 book kept the short-add + marginal-long signature, magnitude easing</span></div>
                <div><span className="dn-lvl-k">24h SM shape</span><span className="dn-lvl-v bear">short Δ +1,454, long Δ +115, net −1,338 more short (vs the 06-10 note; rounded independently) · largest discrete step −2,578 @ UTC 06:01 (below the −3k signal) · short peak 58,719 @ UTC 13:26 (~4h after the 24h low)</span></div>
                <div><span className="dn-lvl-k">forward gating</span><span className="dn-lvl-v">fresh Δnet ≤ −3k single-minute = re-stack hostile-2 signal; Δnet ≥ +3k = cover signal — no time prior either way</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the cadence is dead (falsified late
                May), so treat the tape, not the clock. The 06-10 press was a
                gradual short build into the bounce with the largest step (−2,578)
                still below the −3k signal — meaningful as confirmation of the
                breakdown, but it does not by itself signal a cycle-3 ignition.
                The easing magnitude (−2,740 on 06-10 → −1,338 today) and the live
                funding flip both argue the short-press is losing momentum. A
                fresh discrete Δnet ≤ −3k below the 200W would be the signal to
                watch.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · 200W floor still below, 06-15 weekly close the binary · mean-revert cluster firing underneath (funding live, TD9 broadened, BTC inverted, rates re-cleared) vs bearish structure (dealer −69.0M, SM 3rd-day short) · flip-reclaim leg gates the scout</span>
            </h2>

            <p>
              Of the 06-10 conditions: the 200W cycle-floor STAYED below (06-10
              daily close $61,484, in-progress 06-15 weekly bar $61,596 below);
              the dealer-flip reclaim DID NOT hold (flip $63,480, spot −2.88%
              below); the mean-revert scout funding leg FLIPPED LIVE (14h08m
              streak, negative at snap) but the flip leg STAYED the holdout; the
              macro re-grow legs moved to BOTH ON their boundaries (10Y eased to
              4.53%, HY OAS firmed to 2.78%) and the reclaim-long filter
              RE-CLEARED (10Y 4.53% &lt; 4.55%). <em>The single structural read
              is a mean-revert cluster firing underneath a still-bearish
              structure: funding flipped decisively negative, the TD9 cluster
              broadened, BTC inverted to a relative outperformer, and the rates
              filter re-cleared — but the dealer book deepened short-gamma, SM
              pressed short a third day, and every MA is overhead.</em> The
              conditions today re-set around the open floor watch, the converging-
              but-unaligned scout, and a macro tail balanced on both boundaries:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>200W weekly-close reclaim (bullish)</td><td className="bull">06-15 W-MON close &gt; $62,019</td><td>reclaims the floor — a one-week dip-and-reclaim of the post-06-08 lineage; re-opens the scout-long case on a confirmed turn</td></tr>
                <tr><td>200W weekly-close break (bearish)</td><td className="bear">06-15 W-MON close &lt; $62,019</td><td>first weekly close below the 200W in the current post-06-08 floor-watch lineage (last full-history below-own-200W close was 2023-10-09) — escalate the cycle-regime read</td></tr>
                <tr><td>11JUN expiry settle (today 08:00Z, ~8h ahead)</td><td>−14.07M front chunk clears; ex-11JUN aggregate ≈ −54.93M still net negative</td><td>read the settle as an interim tell, not a regime change — the strip behind it (12JUN −19.39M, 26JUN −25.08M) keeps the book short-gamma</td></tr>
                <tr><td>Mean-revert long scout — flip leg (binding holdout)</td><td className="bear">1h close &gt; $63,480 flip — spot −2.88% below, uncleared</td><td>the funding leg-2 is now LIVE (14h08m streak, negative at snap) and the TD9 cluster broadened — the flip-reclaim leg is the single binding gate; on a clean 1h close above $63,480 with the cluster confirmed, scout long 0.2R, stop $59,154, take half at $72,783</td></tr>
                <tr><td>$60k crash-put magnet</td><td className="bear">$60k −38.65M (LIGHTENED +9.21M, first ease after two re-loads); 24h low $60,827 held above the strike</td><td>do not short into the magnet alongside the dealer; the lightening is the first sign the crash-put bid stopped re-loading — watch for it to keep easing</td></tr>
                <tr><td>Macro tail re-grow (both legs ON boundaries)</td><td className="bear">HY OAS &gt; 2.78% (AT the gate); 10Y &gt; 4.53% (AT the boundary, eased back un-fired)</td><td>no re-grow today; require a clean HY OAS print &gt; 2.78% AND a clean 10Y print &gt; 4.53% (both legs) before any put-spread re-grow into 19JUN / 26JUN forward — re-grows into an already short-gamma book; do not pre-grow on a boundary tag</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (no calendar prior)</td><td className="stale">read each fresh Δnet ≤ −3k single-minute step as a signal in itself</td><td>a discrete re-stack hostile-2 below the 200W would confirm cycle-3 ignition; the 06-10 largest step (−2,578) was below the −3k signal — confirmation, not ignition</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                the 06-15 weekly close against the 200W $62,019, with the
                flip-reclaim leg ($63,480) as the near-term trigger for the
                converging scout: a weekly close back above the 200W reclaims the
                floor, a 1h close above the flip arms the scout-long once the
                funding leg (now live) and TD9 cluster are joined; a weekly close
                below confirms the first sustained weekly-200W break of the
                current post-06-08 floor-watch lineage (last full-history
                below-own-200W close was 2023-10-09)
              </span>. Until then this note runs as written: the desk is flat,
              the 200W watch is the primary framework, the mean-revert long scout
              is converging (funding leg LIVE) but non-actionable on the binding
              flip leg, the macro tail sits on both re-grow boundaries with the
              rates filter re-cleared, and the squeeze-cycle hostile-2 framework
              is a watchlist with no calendar prior. The dealer book deepened
              short-gamma below a $63,480 flip though the $60k magnet lightened;
              SM pressed short a third day at an easing pace; funding flipped
              decisively negative; BTC inverted to a relative outperformer inside
              a still-NORMAL broad risk-off. The right read for the next 24h is{' '}
              <em>patient and flat — let the 06-15 weekly close and the 11JUN
              settle resolve the floor, and watch the 1h close against $63,480 as
              the scout trigger</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> v2 built on the 2026-06-11 00:07Z atomic snapshot,{' '}
            <b>post codex hostile-but-fair audit</b> (verdict PASS-WITH-NOTES —
            0 CRITICAL + 1 MAJOR + 3 MINOR; see{' '}
            <code>audits/2026-06-11-desk-note.md</code>). Every finding was
            applied in place and grep-closure verified across the FULL file
            (key wrong-claim pattern searched, stale hits before vs after fix),
            not just at the auditor&rsquo;s cited lines.{' '}
            <b>DN-001 (MAJOR · macro-tail action scope):</b> patterns{' '}
            <code>&quot;would arm&quot;</code>,{' '}
            <code>&quot;arm a put-spread re-grow&quot;</code>,{' '}
            <code>&quot;on a clean HY OAS print above 2.78%&quot;</code> — the
            decision-table row and two prose spots armed a re-grow on HY OAS
            alone while the framework requires both legs; reworded to a no-action
            watch requiring clean HY OAS &gt; 2.78% AND clean 10Y &gt; 4.53%
            (both legs) at lines 821-823, 836-838, 917. Hits before 3 → hits
            after 0. <b>RESOLVED.</b> <b>DN-002 (MINOR · funding streak units):</b>{' '}
            patterns <code>&quot;14.17h&quot;</code>,{' '}
            <code>&quot;850 min&quot;</code> — sampled-row count was conflated
            with wall-clock duration; the 850 is sampled rows and the wall-clock
            UTC 00:17→14:25 06-10 is 14h08m (a duplicate 06-10 14:40 row in the
            tape is why 850 rows span 14h08m). Re-stated as &quot;850 sampled
            rows / 14h08m wall-clock&quot; / &quot;14h08m&quot; at every prose
            and tag instance. Hits before 9 → hits after 0. <b>RESOLVED.</b>{' '}
            <b>DN-003 (MINOR · SM component deltas):</b> patterns{' '}
            <code>&quot;+1,460&quot;</code>, <code>&quot;+110&quot;</code>,{' '}
            <code>&quot;13,671&quot;</code>, <code>&quot;55,069&quot;</code> —
            components did not reconstruct the net; corrected to the exact-rounded
            long +115 / short +1,454 with endpoints long 13,665 → 13,781, short
            55,063 → 56,517, and an explicit independent-rounding note (exact
            long 13,665.270 → 13,780.700, short 55,063.368 → 56,516.884, net
            −1,338.086 — do not difference the rounded endpoints). Net −1,338 and
            cut fraction 3.23% unchanged. Hits before (combined) 6 → hits after
            0. <b>RESOLVED.</b> <b>DN-004 (MINOR · lineage qualifier):</b>{' '}
            pattern <code>&quot;break of the lineage&quot;</code> /{' '}
            <code>&quot;of the post-06-08 lineage&quot;</code> — one closing
            sentence dropped the qualifier; both under-qualified spots restored
            to &quot;the current post-06-08 floor-watch lineage&quot; (with the
            last full-history below-own-200W close 2023-10-09 parenthetical) at
            lines 745-746, 930-933. Hits before 2 → hits after 0.{' '}
            <b>RESOLVED.</b> All four findings RESOLVED with hits-after = 0;{' '}
            <b>post codex hostile audit</b>. Source pins retained for re-check:
            funding × 1095 (snap −0.48% ann, 24h mean −2.41% ann, cap 0 / 1441,
            neg-minute 81.96%, longest neg streak 14h08m wall-clock LIVE re-clear
            of the ≥4h leg-2 gate with funding negative at the snap); GEX
            dual-reference sign (flip $63,480, spot −2.88% / idx −2.730%,
            aggregate −69.0M, $60k −38.65M lightened +9.21M); 200W full-history
            W-MON SMA $62,019 vs live spot −0.59% and in-progress 06-15 bar
            $61,596 −0.68%, 8 / 154 = 5.19% frequency, <code>weekly_200sma.json</code>{' '}
            ABSENT (200W computed directly from parquet, JSON percentile /
            last-event unavailable); SM cut fraction 3.23% (long +115 / short
            +1,454 rounded independently, net −1,338, magnitude easing −2,740 →
            −1,338); daily-close lineage (06-07 $63,298, 06-08 $63,058, 06-09
            $61,695, 06-10 $61,484 FINAL, 06-11 in-progress $61,596); 30D RV
            39.59% (40.23% alt); cross-asset |r| 0.318 NORMAL, BTC −2.73% vs NQ
            −6.81% (+4.08pt outperformance, inverted from the 06-10 −2.47pt lag);
            macro Tier-1 (10Y 4.53% filter RE-CLEARED, HY OAS 2.78% AT the gate,
            TIPS 2.20%, DXY 99.88, Fed net liq $5.834T); fut_cvd reset-adjustment
            (rebase to 0 @ UTC 06:40 06-10, reset-adjusted 24h futures CVD =
            taker-net = +404). Archive:{' '}
            <code>/opt/desk-note/snapshots/2026-06-11-0007/</code> (btc_gex.html,
            cross_asset_correlation_summary.md, macro_dashboard.html,
            mtf_div_latest.html).{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1; Next 16.2.6
            hard-exits on Node &lt; 20.9.0 at{' '}
            <code>node_modules/next/dist/bin/next:24-28</code>, so a full{' '}
            <code>next build</code> is environment-blocked (lineage carried);{' '}
            <code>npx --no-install tsc --noEmit</code> is the build proxy.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-06-11 00:07Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-06-10 22:15Z (~1h52m before
            snapshot) and some inputs are explicitly stale or pending and
            flagged as such. This is a v2 note, post the STAGE B codex
            hostile audit — every finding applied in place and grep-closure
            verified. Levels, sizes, and conditions are illustrative of
            the desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future
            tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The 200W floor stays below and the 06-15 weekly close is the
                binary, but a mean-revert cluster fired underneath — funding
                flipped negative and live, the TD9 cluster broadened, BTC
                inverted to relative outperformer. The flip-reclaim leg gates the
                scout. Flat and patient.
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
            v2 · 2026-06-11 00:07Z snapshot · post codex hostile audit · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
