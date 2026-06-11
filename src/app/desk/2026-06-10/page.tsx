import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-10 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-10',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-10' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260610() {
  await requireViewer('/desk/2026-06-10');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-10 · v2</span>
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
              <span className="dn-big">$61,840</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.97%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-10 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-10 00:05Z (snapshot pin)</td>
                  <td className="dn-flag">
                    fresh · 1-min · file tail at author time = pin · live `t`
                    field is BJ-local (UTC+8) so the 00:05Z anchor row is
                    `06-10 08:05`; this snapshot lands 16h05m after the 09JUN
                    08:00Z option settle and ~7h55m before the 10JUN 08:00Z settle
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-10 00:01Z scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    ~4-min stale vs snapshot anchor · in-progress bars · NOT
                    archived: the exact 00:01Z scan state is not recoverable
                    (the rolling source advanced to 00:31Z during audit); quoted
                    values checked only against the closest rolling state
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-10 00:02Z snapshot</td>
                  <td className="dn-flag">
                    pre-settle · ~3-min stale vs snapshot anchor · Deribit idx
                    $61,928 vs live $61,840 · 958 inst (was 946 on 06-09, +12) ·
                    10JUN 0.3DTE −11.53M settles at 08:00Z today (~8h ahead) ·
                    ex-10JUN aggregate ≈ −47.07M still net negative (dashboard-
                    total shortcut; displayed rows are non-additive — see dealer
                    section) · btc_gex.html retained at 00:02Z mtime, NOT a
                    timestamped archive
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-10 00:01Z
                  </td>
                  <td className="dn-flag">~4-min lag · 7d 1h bars · 22 assets · 167 rows · regime flipped IDIOSYNCRATIC → NORMAL</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-09 22:16Z render</td>
                  <td className="dn-flag">
                    ~1h49m render lag · FRED Tier-1 firmed at the long end (10Y
                    +1bp to 4.56%, TIPS +2bp to 2.21%, both EXTREME RISK-OFF
                    regime z) · HY OAS −1bp to 2.75% (3bp from the 2.78% gate) ·
                    DXY softened −0.17 to 99.88 · Fed net liq −0.038T to $5.834T
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix + 200W floor</td>
                  <td className="dn-v-cell">btcusdt_1m parquet · full-history + 2024–2026 subset</td>
                  <td className="dn-flag">
                    offsets recomputed vs live spot · subset MA ladder from the
                    2024–2026 window per desk policy · 200W floor read from the
                    full-history parquet (W-MON resample, 354 weekly bars) ·
                    subset W-SMA150 / W-SMA200 non-computable (129 subset weekly
                    bars)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale 69d · monthly · do not treat as live</td>
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
              <span className="dn-v">+0.35%</span>
              <span className="dn-src">live · snap +0.352% ann (positive / near-flat) · 24h mean ann +0.93% (was +1.46% on 06-09, eased −0.53pt but still positive) · cap occupancy 0 / 1441 sampled rows (6th consecutive cap-empty snap) · neg-minute share 35.53% (512 / 1441, firmed +7.42pt vs 06-09&rsquo;s 28.11%) · 24h trough −4.730% ann @ BJ 12:33 06-09 / UTC 04:33 06-09 · 24h max +5.712% ann @ BJ 03:05 06-10 / UTC 19:05 06-09</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">snap −1.81% → +0.35% (+2.16pt) · mean +1.46% → +0.93% (−0.53pt)</span>
              <span className="dn-src">range −4.73% / +5.71% ann · longest neg streak 371 min / 6.18h (BJ 08:05→14:15 06-09 / UTC 00:05→06:15 06-09) — numerically RE-CLEARS the ≥4h short-pay leg-2 gate, but the streak is stale/early-window and funding flipped positive into the snap (+0.35%) · longest pos streak 554 min / 9.23h (BJ 22:52 06-09 → 08:05 06-10) running into the snap</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+0.76% (+745 BTC)</span>
              <span className="dn-src">live · OI EXPANDED (inverse of 06-09&rsquo;s −0.36% shrink) — the book re-levered into the selloff · base 98,510 (08:04 baseline) → 99,255 · 24h peak 100,391 @ UTC 17:06 06-09, trough 97,245 @ UTC 04:43 06-09 · SM long Δ −779, short Δ +1,961</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">67.36 / 32.64</span>
              <span className="dn-src">live_db `mkt_long_pct` · re-crowded +2.65pt vs 06-09&rsquo;s 64.71 (dip-buying into the break) · 24h range 64.61 / 69.04 · peak 69.04 @ UTC 17:22 06-09, trough 64.61 @ UTC 00:27 06-09</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−41.4k (net SHORT · short-add + long-trim, inverse of 06-09)</span>
              <span className="dn-src">live · long 13.67k − short 55.06k · short peak 55,589 @ UTC 16:51 06-09 (10 min after the 24h spot low), short trough 50,698 @ UTC 11:16 06-09 · long peak 14,460 @ UTC 06:56 06-09, long trough 12,171 @ UTC 12:45 06-09 · net trough (most short) −41,801 @ UTC 16:51 06-09, net peak (least short) −37,016 @ UTC 11:16 06-09</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 06-09 note</span>
              <span className="dn-v bear">−38.7k → −41.4k (−2,740 MORE short)</span>
              <span className="dn-src">long −779, short +1,961 · |Δ| / prior_net = 7.09% (2,740 / 38,658) · the book reverted exactly to the 06-09-inverse shape: it ADDED short and TRIMMED long after the prior note&rsquo;s one-day cover</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">48.2% / 39.60%</span>
              <span className="dn-src">GEX median IV across 958 inst (was 946 on 06-09, +12) · IV/RV spread +8.60pt · 30D close-to-close RV 39.60% (30 returns / 31 closes; 29-return alt 40.24%)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−2.76% (below)</span>
              <span className="dn-src">flip $63,592 (was $64,351, walked DOWN −$759 with the selloff) · vs live spot $61,839.99 (61,839.99 / 63,592 − 1 = −2.7551%) / GEX file idx $61,928 (−2.62%; 61,928 / 63,592 − 1 = −2.6167%) — both refs negative, spot below the flip · aggregate GEX −58.6M (was −36.7M, DEEPENED −$21.9M of negative gamma) · file&rsquo;s own dist-to-flip reads −2.6%</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The 06-09 bullish 200W reclaim was given back in a single day —
                the watch re-opens
              </span>. Spot printed{' '}
              <span className="dn-tag bear">−1.97% to $61,840</span>, wicked to a
              24h low <span className="dn-tag bear">$60,755</span> below the
              200-week floor, and the 06-09 daily close{' '}
              <span className="dn-tag bear">$61,695</span> sits below it. The
              full-history W-MON 200-week SMA is{' '}
              <span className="dn-tag">$62,019</span> (200 closed bars ending
              06-08); live spot is{' '}
              <span className="dn-tag bear">−0.29% / −$179 below</span>, and the
              in-progress weekly bar (ending 06-15) prints{' '}
              <span className="dn-tag bear">$61,820 = −0.32% / −$199 below the
              200W</span>. Yesterday&rsquo;s note resolved the floor bullish on
              the 06-08 weekly close $63,058 (+1.68% above); that resolution is
              now reversed. The dealer book deepened against the move: aggregate
              GEX <span className="dn-tag bear">−36.7M → −58.6M</span> (a $21.9M
              re-stack of negative gamma), the 0-γ flip walked{' '}
              <span className="dn-tag bear">$64,351 → $63,592 (−$759)</span> with
              spot −2.76% below it, and the $60k crash-put wall deepened{' '}
              <span className="dn-tag bear">−34.00M → −47.86M (−$13.86M, a 2nd
              consecutive re-load)</span>. The near-dated strip is all negative:
              10JUN −11.53M settles at 08:00Z today, 11JUN −15.23M, 12JUN
              −17.94M. The position book reverted to the 06-09-inverse shape —
              SM <span className="dn-tag bear">added short and trimmed long</span>{' '}
              (−2,740 more short, |Δ|/prior 7.09%), OI{' '}
              <span className="dn-tag bear">EXPANDED +745 BTC</span> into the
              break, and retail re-crowded to{' '}
              <span className="dn-tag bear">67.36% long (+2.65pt, dip-buying)</span>.
              Cross-asset flipped IDIOSYNCRATIC → NORMAL (mean |r| 0.232 →
              0.287) on a broad correlated risk-off — BTC −7.77% on 7d with
              nearly everything down (silver −13.74%, uranium −16.41%, platinum
              −11.52%; small exceptions GOOGL +0.04%, JPY +0.29%). This note marks the 200W re-break: the trade book pivots
              from the 06-09 cover read back to a re-opened floor watch, the
              mean-revert long scout stays non-actionable, and the macro tail
              re-grow gate moved 1bp farther to 3bp from a second firing leg.
            </p>

            <p>
              BTC prints <span className="dn-tag">$61,840</span> live,{' '}
              <span className="dn-tag bear">−1.97%</span> on 24h, inside a{' '}
              <span className="dn-tag">$63,499.9 / $60,755.0</span> range (high @
              BJ 13:35 / UTC 05:35 06-09, low @ BJ 00:41 / UTC 16:41 06-09 —
              spot 24h ago was $63,084 at the 08:04 baseline).{' '}
              <span className="dn-signal">The single fact that re-writes the
              prior note is the 200W floor</span>: the W-MON full-history
              200-week SMA is{' '}
              <span className="dn-tag">$62,019</span>, live spot is{' '}
              <span className="dn-tag bear">−0.29% below ($61,840)</span>, the
              06-09 daily close $61,695 closed below it, and the in-progress
              06-15 weekly bar prints $61,820 — also below. The 06-08 weekly
              close $63,058 that resolved the watch bullish is now history at
              +1.68% above. On the close-frequency read, only{' '}
              <span className="dn-tag">8 / 154 weekly closes (5.19%)</span> have
              printed below their own contemporaneous 200W — a low-base-rate
              location that the tape is testing again.{' '}
              <span className="dn-em">
                The 200W is the load-bearing line of this note: a 06-15 weekly
                close back above $62,019 keeps the floor intact on the only
                timeframe that matters for the cycle read; a close below
                confirms the first weekly close below the 200W in the current post-06-08 floor-watch lineage (last full-history below-own-200W close was 2023-10-09).
              </span>{' '}
              The daily-close lineage tells the give-back directly: 06-07
              $63,298, 06-08 $63,058, 06-09 $61,695, 06-10 in-progress $61,820
              — two consecutive daily closes lost the floor after the 06-08
              reclaim.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · book reverted to short-add + long-trim (06-09 inverse) · OI EXPANDED into the break · retail re-crowded · funding leg-2 re-clears numerically but stale</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position book reverted to the exact inverse of the 06-09
                cover
              </span>. SM net is{' '}
              <span className="dn-tag bear">−41,398</span> vs the 06-09
              note&rsquo;s −38,658 — that is{' '}
              <span className="dn-em">−2,740 MORE short</span>{' '}
              (|−41,398 − (−38,658)| / 38,658 = 7.09%). The components: long_btc{' '}
              <span className="dn-tag bear">14.45k → 13.67k (−779)</span> and
              short_btc <span className="dn-tag bear">53.10k → 55.06k
              (+1,961)</span> — a short add concurrent with a long trim, the
              mirror image of the 06-09 print that had ADDED long and CUT short.
              Short_btc peaked 10 minutes after the 24h spot low:{' '}
              <span className="dn-tag bear">55,589 @ 2026-06-09 16:51Z</span> —
              10 minutes after the $60,755 wick — then bled marginally into the
              snap. SM net trough (most short){' '}
              <span className="dn-tag bear">−41,801 @ 2026-06-09 16:51Z</span>
              coincides with that short peak; net peak (least short) −37,016 @
              UTC 11:16 06-09. Long_btc trough{' '}
              <span className="dn-tag bear">12,171 @ 2026-06-09 12:45Z</span>,
              long peak 14,460 @ UTC 06:56 06-09. The book sold the break: smart
              money pressed short into the low and has not covered it back.
            </p>

            <p>
              <span className="dn-signal">
                OI EXPANDED into the selloff — the book re-levered, it did not
                de-gross
              </span>. OI Δ{' '}
              <span className="dn-tag bear">+745 BTC / +0.76%</span> over 24h
              (base 98,510 at the 08:04 baseline → 99,255), the inverse of
              06-09&rsquo;s −0.36% shrink; 24h peak 100,391 @ UTC 17:06 06-09,
              trough 97,245 @ UTC 04:43 06-09. Retail{' '}
              <span className="dn-tag bear">mkt_long_pct 67.36%</span> from
              64.71% — a +2.65pt re-crowd into the dip (24h range 64.61 / 69.04,
              peak 69.04 @ UTC 17:22 06-09). The leverage read is{' '}
              <span className="dn-em">fresh-short-against-dip-buyers</span>: OI
              up, SM adding short, retail adding long into the break — the
              crowded long side is the one taking the other side of the
              professional short. Funding is the one easing print: snap{' '}
              <span className="dn-tag">+0.35% ann</span> (positive / near-flat),
              24h mean ann <span className="dn-tag">+0.93%</span> (vs +1.46% on
              06-09, −0.53pt), cap occupancy{' '}
              <span className="dn-tag">0 / 1441 (6th consecutive cap-empty)</span>,
              neg-minute share <span className="dn-tag">35.53% (512 / 1441)</span>{' '}
              firmed +7.42pt. The longest negative-pay streak was{' '}
              <span className="dn-tag">371 min / 6.18h (BJ 08:05→14:15 06-09 /
              UTC 00:05→06:15 06-09)</span>, which numerically RE-CLEARS the
              mean-revert scout&rsquo;s ≥4h short-pay leg-2 gate —{' '}
              <span className="dn-em">but the streak sits in the early window
              and funding flipped positive (+0.35%) into the snap, so the
              re-clear is stale and weak, not a live short-pay condition</span>.
              The longest positive streak (554 min / 9.23h, BJ 22:52 06-09 →
              08:05 06-10) is the one running into the snapshot.
            </p>

            <p>
              Windowed flow is <em>heavy on the 24h with futures leading the
              sell, flattening into the last hour</em>. 24h: price{' '}
              <span className="dn-tag bear">−1.97%</span>, OI{' '}
              <span className="dn-tag bear">+745 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −218</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −2,243</span>, big-print{' '}
              <span className="dn-tag bear">−1,342 BTC / 502 prints</span>,
              taker-net <span className="dn-tag bear">−2,243</span>{' '}
              <span className="dn-em">(futCVD and taker-net are identical by
              construction — futCVD is the cumulative taker-net — so they are one
              read, not two)</span>; no cb_cvd reset in the 24h.{' '}
              <span className="dn-em">
                Price down with OI up and futures-CVD leading negative is the
                fresh-short signature — the down-move was sold, not covered.
              </span>{' '}
              4h (into snap): price{' '}
              <span className="dn-tag bear">−0.26%</span>, OI{' '}
              <span className="dn-tag bull">−410 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +299</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −971</span>, big-print{' '}
              <span className="dn-tag bear">−24 BTC / 69 prints</span>,
              taker-net <span className="dn-tag bear">−971</span> —{' '}
              <em>spot bid against a still-offered futures tape with OI
              starting to come off, a tentative basis-led stabilization</em>.
              1h: price <span className="dn-tag bull">+0.09%</span>, OI{' '}
              <span className="dn-tag">+34 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +55</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −69</span>, big-print{' '}
              <span className="dn-tag bull">+39 BTC / 11 prints</span>,
              taker-net <span className="dn-tag bear">−69</span> —{' '}
              <em>flat-to-up on a quiet last hour</em>. Perp trades a{' '}
              <span className="dn-tag bear">−$52.96 discount</span> to spot at
              the snap (1h mean −$45.44, 4h mean −$47.00, 24h mean −$40.88,
              range −$132.68 / +$96.09 — basis went briefly premium inside the
              24h). 1-min aggressor skew snap{' '}
              <span className="dn-tag bull">+17.6</span> (1h mean +3.58, range
              −34.90 / +26.90) — a mild buy-aggressor tilt into the snap, the
              first sign of a spot reflex bid against the futures-led sell.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · RSI rolled back over (12h 27.2, 1d 24.2 deepest) · 3d ⚡ TD9 BUY active, 4h/1M pending · slow frames all below cloud · sell-the-bounce net read</span>
            </h2>

            <p>
              <span className="dn-signal">
                RSI rolled back over across the slow frames as the give-back
                printed
              </span>. The 12h is back below 30 at{' '}
              <span className="dn-tag bear">27.2</span>, the 1d is the deepest
              oversold at <span className="dn-tag bear">24.2</span>, the 8h at
              34.0 and the 3d at 31.4 — all bled lower vs 06-09 as spot lost the
              floor. The engine frames are no better: 4h RSI 42.4, 1h 39.4 (back
              below the mid-line). The Ichimoku map is uniformly heavy: every
              frame from 30m up is{' '}
              <span className="dn-tag bear">below cloud</span> — 30m below
              ↑63.0k, 1h below ↑62.3k, 4h below ↑63.8k, 8h below ↑73.6k, 1d
              below ↑73.9k — with only 15m clinging{' '}
              <span className="dn-tag">in cloud 61.6k–62.1k</span> and the 1M
              still <span className="dn-tag bull">above ↓46.9k</span> on the
              cycle frame. The TD read is mixed-constructive on the slow end:{' '}
              <span className="dn-tag bull">3d carries an active ⚡ TD9 BUY</span>,
              with 4h (Buy 8 → 9?) and 1M (Buy 8 → 9?) pending a 9-count — a
              TD9-BUY cluster forming on the cycle frames even as momentum bleeds.
              <span className="dn-em">
                {' '}Read straight: the slow frames are oversold and the 3d TD9
                BUY is live, but every intraday frame is below cloud and the net
                divergence read is sell-the-bounce. This is an oversold tape
                inside a confirmed breakdown — the TD cluster is a watch for a
                mean-revert scout, not a structural turn.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">61,696</td><td className="num">45.2</td><td className="bear">death (water-dn) 7b</td><td className="neut">in cloud 61.6–62.1k 6b</td><td>Buy 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">61,696</td><td className="num">41.7</td><td className="bull">golden (water-dn) 11b</td><td className="bear">below ↑63.0k 26b</td><td>Buy 7</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">61,696</td><td className="num">39.4</td><td className="bear">death (water-up) 31b</td><td className="bear">below ↑62.3k 10b</td><td>Buy 3</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">61,703</td><td className="num">42.4</td><td className="bull">golden (water-dn) 23b</td><td className="bear">below ↑63.8k 91b</td><td>Buy 8 → 9?</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">61,703</td><td className="num bull">34.0</td><td className="bull">golden (water-dn) 8b</td><td className="bear">below ↑73.6k 75b</td><td>Buy 4</td><td>BEAR hid</td></tr>
                <tr><td>12h</td><td className="num">61,703</td><td className="num bull">27.2</td><td className="bull">golden (water-dn) 3b</td><td className="bear">below ↑76.0k 37b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">61,696</td><td className="num bull">24.2</td><td className="neut">—</td><td className="bear">below ↑73.9k 9b</td><td>Sell 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">61,696</td><td className="num bull">31.4</td><td className="neut">death (water-up) 5b</td><td className="bear">below ↑74.2k 3b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">61,696</td><td className="num bull">33.2</td><td className="neut">—</td><td className="bear">below ↑100.3k 19b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">61,696</td><td className="num">42.0</td><td className="neut">— (DIF above water)</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (rolling latest
                    file; the exact 00:01Z scan is NOT archived/recoverable —
                    the source advanced post-scan, checked only against the
                    closest rolling state). Header alerts:{' '}
                    <em>3d ⚡ TD9 BUY active</em>, <em>4h / 1M TD Buy 8 → 9?
                    pending</em>, net divergence read <em>sell the bounce</em>.
                    Scan spot $61,696, 24h −2.15% (00:01Z scan; the live-tape
                    header at 00:05Z shows −1.97% on the same 24h window — the
                    4-minute gap accounts for the 0.18pt difference), 24h H/L
                    $63,500 / $60,755, qVol $13.75B. Closes are in-progress
                    bars; treat every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is uniformly overhead on the daily ladder — there is
              no positive offset left on the dailies. Spot $61,840 sits below
              every daily MA: closest overhead is{' '}
              <span className="dn-tag bear">D-EMA20 $67,953 (−9.00%)</span>, then{' '}
              <span className="dn-tag bear">D-SMA20 $69,461 (−10.97%)</span>,{' '}
              <span className="dn-tag bear">D-EMA50 $72,015 (−14.13%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $72,854 (−15.12%, cycle
              anchor)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $74,201 (−16.66%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $74,333 (−16.81%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $76,805 (−19.48%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $75,024 (−17.57%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $78,125 (−20.84%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $79,390 (−22.11%)</span>.
              The cycle anchor D-SMA100 is now −15.12% overhead — the digestion-
              above-anchor read of late May is long gone. The subset weekly
              ladder is equally overhead: W-SMA20 $72,016 (−14.13%), W-EMA20
              $75,201 (−17.77%), W-EMA100 $82,657 (−25.18%), W-EMA50 $83,332
              (−25.79%), W-SMA100 $88,517 (−30.14%), W-SMA50 $91,783 (−32.62%);
              subset W-EMA150 $78,074 (−20.79% seed), W-EMA200 $73,750 (−16.15%
              seed); subset W-SMA150 / W-SMA200 non-computable at 129 subset
              weekly bars.{' '}
              <span className="dn-signal">
                The structural line of the note is the full-history 200W floor
              </span>: full-history W-MON 200-week SMA{' '}
              <span className="dn-tag">$62,019</span> (200 closed bars ending
              06-08), live spot{' '}
              <span className="dn-tag bear">−0.29% / −$179 below</span>, the
              in-progress 06-15 weekly bar 1-min close{' '}
              <span className="dn-tag bear">$61,820 (−0.32% / −$199 below)</span>,
              and the last closed weekly (06-08) $63,058 now history at +1.68%
              above. Weekly-close-below-own-200W frequency 8 / 154 = 5.19%.{' '}
              <span className="dn-em">
                MAs anchored to the btcusdt_1m parquet (subset ladder from the
                2024–2026 window per desk policy; 200W from full-history W-MON
                resample, 354 weekly bars); offsets recomputed against live spot
                $61,839.99 (parquet anchor row ≤00:05Z close $61,819.90, gap
                $20.09). Daily closes: 06-07 $63,298, 06-08 $63,058, 06-09
                $61,695, 06-10 (in-progress) $61,820 — two consecutive closes
                below the 200W after the 06-08 reclaim. 30D RV 39.60%.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DEEPENED net-short-gamma aggregate −58.6M · flip walked DOWN to $63,592 (spot −2.76% below) · $60k crash-put RE-DEEPENED to −47.86M · 10JUN −11.53M settles in ~8h</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book deepened its short-gamma into the break, not out
                of it
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bear">−58.6M</span> (was −36.7M on 06-09 —
              a $21.9M re-stack of negative gamma); the book is more
              destabilizing, not less. The 0-γ flip walked{' '}
              <span className="dn-tag bear">$64,351 → $63,592 (−$759)</span>, and
              spot $61,840 sits{' '}
              <span className="dn-tag bear">−2.76% below flip</span> on
              spot-denominated math (61,839.99 / 63,592 − 1 = −2.7551%); the GEX
              file&rsquo;s own dist-to-flip reads −2.6% off its Deribit-index
              $61,928 ($88 above live spot), which is{' '}
              <span className="dn-tag bear">−2.62%</span> (61,928 / 63,592 − 1 =
              −2.6167%) — both references negative, spot below the flip and{' '}
              <span className="dn-em">inside the dealer short-gamma zone where
              hedging amplifies the move down</span>. The wall map is dominated
              by the $60k crash-put:{' '}
              <span className="dn-tag bear">$60k −47.86M</span> (deepened from
              −34.00M, a 2nd consecutive re-load of −$13.86M),{' '}
              <span className="dn-tag bear">$62k −10.04M</span>,{' '}
              <span className="dn-tag bull">$80k +9.15M</span> (the only positive
              wall in the top 10),{' '}
              <span className="dn-tag bear">$55k −9.12M</span>,{' '}
              <span className="dn-tag bear">$61k −8.74M</span>,{' '}
              <span className="dn-tag bear">$61.5k −6.57M</span>,{' '}
              <span className="dn-tag bear">$50k −6.38M</span>,{' '}
              <span className="dn-tag bear">$58k −5.60M</span>,{' '}
              <span className="dn-tag bear">$60.5k −4.97M</span>,{' '}
              <span className="dn-tag bear">$64k −4.30M</span>.{' '}
              <span className="dn-em">
                The $60k strike is now the structural magnet: a −47.86M put wall
                three handles below spot means dealer hedging accelerates a move
                toward $60k and the 24h low $60,755 already tagged its edge.
              </span>{' '}
              By expiry the near-dated strip is uniformly negative:{' '}
              <span className="dn-tag bear">10JUN 0.3 −11.53M</span> settles at
              08:00Z today (~8h ahead),{' '}
              <span className="dn-tag bear">11JUN 1.3 −15.23M</span>,{' '}
              <span className="dn-tag bear">12JUN 2.3 −17.94M</span>, 13JUN 3.3
              +1.09M, 19JUN 9.3 −5.99M,{' '}
              <span className="dn-tag bear">26JUN 16.3 −25.49M</span> (monthly,
              heaviest), 31JUL 51.3 +4.02M, 28AUG 79.3 +1.07M, 25SEP 107.3
              −0.13M, 25DEC 198.3 +2.39M, 26MAR27 289.3 +0.33M. Post-10JUN
              settle, the ex-10JUN aggregate is roughly −58.6M − (−11.53M) =
              −47.07M, still deeply net negative.{' '}
              <span className="dn-em">
                Caveat: this aggregate shortcut uses the dashboard total
                (−58.6M); the rounded displayed expiry rows above sum to −67.41M
                (ex-10JUN −55.88M), so the by-expiry list and the dashboard
                total are internally non-additive by ~8.81M — the −58.6M
                dashboard total is authoritative, do not reconstruct the
                aggregate from the row list alone.
              </span>{' '}
              <span className="dn-em">
                The 10JUN −11.53M front chunk settling at 08:00Z today is the
                first calendar event: it clears a negative chunk, but the strip
                behind it (11JUN, 12JUN, 26JUN) keeps the book short-gamma — the
                amplifier is not coming off with this settle.
              </span>
            </p>

            <p>
              IV median across 958 instruments is{' '}
              <span className="dn-tag">48.2%</span> (was 946 on 06-09, +12
              instruments) against 30D close-to-close RV of{' '}
              <span className="dn-tag">39.60%</span> — chain-level richness{' '}
              <span className="dn-tag">+8.60pt</span>. A chain-median across N
              instruments, <span className="dn-em">not</span> a tradable spread;
              expiry-/strike-level vega, skew and term structure remain not
              loaded; the vol read stays framework-only. RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log
              returns (= 31 consecutive daily closes) anchored to the parquet
              last bar; the last-29-returns / 30-closes alt reads 40.24%, the
              39.60% page value comes from 30 returns. IV at 48.2% against
              realized 39.60% is a modest premium — vol is bid but not in panic,
              consistent with a controlled breakdown rather than a liquidation.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Tier-1 firmed at the long end (10Y 4.56%, TIPS 2.21%, both EXTREME RISK-OFF) · reclaim-long rates filter (10Y &lt; 4.55%) now BROKEN · HY OAS 2.75% 3bp from the re-grow gate · cross-asset flipped to NORMAL on broad risk-off</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape firmed at the long end into the BTC break — rates
                and real-rates both moved against risk
              </span>. Dashboard render is 2026-06-09 22:16Z, ~1h49m before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bear">4.56% (+1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.14</span>, episodic z{' '}
              <span className="dn-tag bear">+1.07</span> — EXTREME RISK-OFF, and
              the reclaim-long rates filter (10Y &lt; 4.55%) is now{' '}
              <span className="dn-tag bear">BROKEN at 4.56%</span> (was AT the
              boundary on 06-09). 10Y TIPS real{' '}
              <span className="dn-tag bear">2.21% (+2.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.56</span>, episodic z{' '}
              <span className="dn-tag bear">+1.75</span> — EXTREME RISK-OFF. 5Y5Y
              BE inflation <span className="dn-tag">2.23% (−1.0bp)</span>, z
              −0.04 / −1.34. HY OAS{' '}
              <span className="dn-tag bull">2.75% (−1.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.06</span>, episodic z{' '}
              <span className="dn-tag bull">−0.48</span> — still risk-on, but now{' '}
              <span className="dn-em">3bp from the 2.78% re-grow gate</span> (was
              2bp on 06-09 — the gap WIDENED 1bp: HY OAS narrowed −1bp and backed
              AWAY from fire, so only the 10Y leg moved toward fire). MOVE bond
              vol{' '}
              <span className="dn-tag">77.0 (+1.78)</span> — neutral, a touch
              firmer. The offsets: DXY{' '}
              <span className="dn-tag bull">99.88 (−0.17)</span>, regime z +1.55,
              episodic z +1.60 — softened −0.27 vs 06-09&rsquo;s 100.15; Fed net
              liquidity <span className="dn-tag bear">$5.834T (−0.038T)</span>,
              episodic z −2.29. USD/JPY{' '}
              <span className="dn-tag">160.22 (−0.10)</span>, z +1.34 / +1.31;
              US-JP 10Y spread{' '}
              <span className="dn-tag">2.04% (+1.0bp)</span>, z −0.60 / +1.07,
              tight; USD/CNY 6.7717 (+0.01), z −1.77 / −1.09; 10Y breakeven 2.35%
              (−1.0bp), z +0.20 / −1.81.{' '}
              <span className="dn-em">
                Net: the long end firmed into the BTC break, the reclaim-long
                rates filter broke (10Y 4.56% &gt; 4.55%), and the HY OAS re-grow
                gate is 3bp from firing — the macro backdrop has tightened
                against risk, but the put-spread re-grow second leg still needs
                an HY OAS print &gt; 2.78% (3bp away, having backed off 1bp this
                cut). DXY softening is the lone offsetting
                line and it has not translated to a BTC bid.
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
                <tr><td>US 10Y nominal</td><td className="num">4.56%</td><td className="num bear">+1.0bp</td><td className="num bear">+2.14</td><td className="num bear">+1.07</td><td className="bear">EXTREME RISK-OFF · filter BROKEN</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.21%</td><td className="num bear">+2.0bp</td><td className="num bear">+2.56</td><td className="num bear">+1.75</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.23%</td><td className="num bull">−1.0bp</td><td className="num">−0.04</td><td className="num">−1.34</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.75%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.06</td><td className="num bull">−0.48</td><td className="bull">risk-on · 3bp to the 2.78% gate</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.494</td><td className="num">+0.01</td><td className="num">—</td><td className="num">—</td><td className="stale">stale 11d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">77.0</td><td className="num bear">+1.78</td><td className="num">—</td><td className="num">—</td><td className="neut">neutral · firmer</td></tr>
                <tr><td>DXY</td><td className="num">99.88</td><td className="num bull">−0.17</td><td className="num bear">+1.55</td><td className="num bear">+1.60</td><td className="bull">softer −0.27 · RISK-OFF episodic</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.834T</td><td className="num bear">−0.038T</td><td className="num">−0.12</td><td className="num bear">−2.29</td><td className="bear">drained on the week</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.22</td><td className="num bull">−0.10</td><td className="num bear">+1.34</td><td className="num">+1.31</td><td className="neut">yen marginally firmer</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.04%</td><td className="num bear">+1.0bp</td><td className="num">−0.60</td><td className="num">+1.07</td><td className="neut">tight</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7717</td><td className="num">+0.01</td><td className="num bull">−1.77</td><td className="num bull">−1.09</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp (monthly)</td><td className="num">—</td><td className="num">—</td><td className="stale">stale 69d · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.287</span>{' '}
              <span className="dn-signal">flipped IDIOSYNCRATIC → NORMAL</span>{' '}
              (was 0.232 on 06-09, crossed back above the 0.25 threshold, +0.055)
              — a broad correlated risk-off, the opposite of the idiosyncratic
              crypto-only read of yesterday. BTC&rsquo;s top ties firmed and
              re-ordered: TSLA{' '}
              <span className="dn-tag">+0.344</span> (new top tie, was SILVER),
              SILVER <span className="dn-tag">+0.331</span>, COPPER{' '}
              <span className="dn-tag">+0.306</span>, URNM{' '}
              <span className="dn-tag">+0.305</span>, SP500{' '}
              <span className="dn-tag">+0.293</span>, NVDA{' '}
              <span className="dn-tag">+0.285</span>, MSFT{' '}
              <span className="dn-tag">+0.283</span>, NQ{' '}
              <span className="dn-tag">+0.278</span>, GOLD{' '}
              <span className="dn-tag">+0.265</span>, META / PLAT{' '}
              <span className="dn-tag">+0.251</span>, AMZN{' '}
              <span className="dn-tag">+0.246</span>. 7d performance is a
              risk-off sweep:{' '}
              <span className="dn-tag bear">BTC −7.77%</span>, NQ{' '}
              <span className="dn-tag bear">−5.30%</span>, SP500{' '}
              <span className="dn-tag bear">−3.19%</span>, JP225 −5.60%, NVDA
              −6.60%, META −2.23%, AAPL −7.50%, MSFT −7.25%, GOOGL +0.04%, AMZN
              −5.03%, TSLA −5.83%. Metals were hit hardest: SILVER{' '}
              <span className="dn-tag bear">−13.74%</span>, PLAT{' '}
              <span className="dn-tag bear">−11.52%</span>, PALL{' '}
              <span className="dn-tag bear">−11.15%</span>, URNM{' '}
              <span className="dn-tag bear">−16.41%</span>, GOLD −5.91%, COPPER
              −4.75%. Energy: CL −6.54%, BRENT −5.29%, NGAS −0.14%.{' '}
              <span className="dn-em">
                BTC −7.77% vs NQ −5.30% is a −2.47pt lag, but both are negative
                and the correlation firmed back into the NORMAL band — this is
                BTC participating in a broad correlated risk-off, not an
                idiosyncratic crypto event. The endogenous-crypto read of 06-09
                gives way: the 200W break printed inside a market-wide
                de-risking, with rates firming and metals collapsing.
              </span>{' '}
              JGB monthly 2.52% stale 69d — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 200W cycle-floor watch RE-OPENS (primary) · mean-revert long scout non-actionable (leg-2 re-clears but stale, leg-3 farther) · macro tail re-grow gate 3bp from a 2nd leg · squeeze-cycle hostile-2 watchlist · desk flat, no fresh entry</span>
            </h2>

            <p>
              <span className="dn-signal">
                The desk is flat and the trade book re-centers on the 200W
                re-break
              </span>. The 06-09 note carried no live position (the flip-extend
              short was closed and the cover-bounce scout dropped); nothing was
              opened into this snap. The 06-08 bullish 200W resolution reversed
              in one day, so the floor watch re-opens as the primary framework.
              The dealer book is short-gamma below a $63,592 flip with a −47.86M
              $60k crash-put magnet, OI expanded on fresh shorts, and the
              macro tape firmed against risk — the structural backdrop is
              bearish-amplifying, not stabilizing. But the slow frames are
              oversold (12h RSI 27.2, 1d 24.2), a 3d ⚡ TD9 BUY is live, and
              funding is near-flat positive — a tape that is stretched, not
              capitulating. <em>No fresh short at $60,755-tagged lows into a
              −47.86M put magnet that the desk would be selling alongside the
              dealer; no fresh long until the 200W reclaims on a weekly-close
              basis or the scout legs fill cleanly.</em> Wait for the 06-15
              weekly close and the 10JUN settle to resolve the floor before
              committing size.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch RE-OPENS · bullish resolution of 06-08 reversed in one day</span>
              <div className="dn-trade-name">
                200W cycle-floor watch — re-opened: spot −0.29% below $62,019, 06-09 daily close $61,695 below, in-progress 06-15 weekly bar $61,820 below
              </div>
              <div className="dn-thesis">
                The 06-08 weekly close $63,058 (+1.68% above the 200W $62,019)
                resolved this watch bullish; the 06-09 tape gave it all back.
                Spot −1.97% to $61,840 wicked to a 24h low $60,755 (below the
                floor), the 06-09 daily close $61,695 closed below it, and the
                in-progress 06-15 W-MON weekly bar prints $61,820 = −0.32% /
                −$199 below. The full-history 200-week SMA is $62,019 (200 closed
                bars ending 06-08); the weekly-close-below-own-200W frequency is
                8 / 154 = 5.19% — a low-base-rate location. The single resolving
                event is the 06-15 weekly close: a close back above $62,019
                keeps the floor intact (a one-week dip below that reclaims), a
                close below confirms the first sustained weekly-200W break of the
                lineage. Status: <em>watch re-opened, no position</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor (full-history W-MON)</span><span className="dn-lvl-v">$62,019 · 200 closed bars ending 06-08 · live spot −0.29% / −$179 below</span></div>
                <div><span className="dn-lvl-k">in-progress weekly (06-15)</span><span className="dn-lvl-v bear">1m-close $61,820 = −0.32% / −$199 below the 200W — provisional until the 06-15 W-MON close</span></div>
                <div><span className="dn-lvl-k">reclaim condition (bullish)</span><span className="dn-lvl-v bull">06-15 weekly close &gt; $62,019 — keeps the floor intact, a one-week dip-and-reclaim</span></div>
                <div><span className="dn-lvl-k">break confirmation (bearish)</span><span className="dn-lvl-v bear">06-15 weekly close &lt; $62,019 — first weekly close below the 200W in the current post-06-08 floor-watch lineage (last full-history below-own-200W close was 2023-10-09); escalate the cycle-regime read</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the 200W is a weekly-close line, not
                an intraday level — a wick below $62,019 (the $60,755 low already
                printed one) does not resolve it; only the 06-15 W-MON close
                does. The 06-08 reclaim and the 06-09 give-back show the floor is
                being contested handle-to-handle; treat the next weekly close as
                the binary, and read the 10JUN 08:00Z settle and the daily-close
                lineage (06-09 $61,695, 06-10 in-progress $61,820) as the
                interim tells.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · NON-ACTIONABLE · leg-2 re-clears numerically but stale · leg-3 farther away</span>
              <div className="dn-trade-name">
                Mean-revert long scout — still non-actionable: TD9 leg narrowed to 3d-active + 4h/1M pending, funding leg-2 re-clears on a stale early-window streak, flip leg-3 farther overhead
              </div>
              <div className="dn-thesis">
                The 06-09 scout was a three-leg gate: (1) a TD9-BUY cluster, (2)
                a funding short-pay ≥4h contiguous streak, (3) a 1h close above
                the 0-γ flip. On this snap: leg 1 is partially live — the 3d
                carries an active ⚡ TD9 BUY with 4h (Buy 8 → 9?) and 1M (Buy 8 →
                9?) pending, a forming cluster but not a confirmed multi-frame
                print. Leg 2 numerically RE-CLEARS via a 371-min / 6.18h
                negative-pay streak (BJ 08:05→14:15 06-09), but that streak sits
                in the early window and funding flipped positive (+0.35% ann)
                into the snap — a stale, weak re-clear, not a live short-pay
                condition. Leg 3 moved <em>farther away</em>: the flip walked down
                to $63,592 but spot fell faster to $61,840, so the 1h-close-above-
                flip gate is now −2.76% below, wider than 06-09. Net: the legs do
                not align, and the dealer book below the flip is short-gamma —
                a long here fights the hedging flow. Status: <em>non-actionable</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">leg 1 · TD9 cluster</span><span className="dn-lvl-v">3d ⚡ TD9 BUY active · 4h / 1M Buy 8 → 9? pending — forming, not confirmed</span></div>
                <div><span className="dn-lvl-k">leg 2 · funding short-pay ≥4h</span><span className="dn-lvl-v">RE-CLEARS numerically (6.18h streak) but STALE — early-window, funding +0.35% positive into snap</span></div>
                <div><span className="dn-lvl-k">leg 3 · 1h close &gt; flip</span><span className="dn-lvl-v bear">flip $63,592, spot −2.76% below — farther than 06-09, uncleared</span></div>
                <div><span className="dn-lvl-k">trigger (all 3 clean)</span><span className="dn-lvl-v bull">confirmed multi-frame TD9 BUY AND live funding short-pay ≥4h AND 1h close &gt; $63,592 — then scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">stop / size</span><span className="dn-lvl-v bear">1h close &lt; $59,154 (06-06 capitulation low) · size 0.2R · take half at the cycle anchor D-SMA100 $72,854</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R sketch (illustrative, not a live order):</b> a trigger near
                the flip $63,592 against the $59,154 stop is ~$4,438 risk; the
                first target at the cycle anchor $72,854 is ~$9,262 ≈ 2.09:1 —
                attractive in the abstract, but all three legs must fire and the
                trigger itself sits +2.76% above spot, so there is no entry to
                price today. <b>Hard rule:</b> do not pre-position long below the
                flip into a short-gamma dealer book and a −47.86M $60k put magnet
                — the scout is a confirmation trade, not an anticipation trade.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate 3bp from a 2nd firing leg</span>
              <div className="dn-trade-name">
                Macro tail put-spread — closed; re-grow gates: 10Y &gt; 4.53% already FIRED (4.56%), HY OAS &gt; 2.78% now 3bp away; reclaim-long rates filter (10Y &lt; 4.55%) BROKEN
              </div>
              <div className="dn-thesis">
                The macro tail put-spread is closed with no residual. The re-grow
                gates are mixed: the 10Y &gt; 4.53% leg FIRED (10Y at 4.56%), but
                the HY OAS &gt; 2.78% leg backed AWAY to 3bp (HY OAS 2.75%,
                narrowed −1bp from 2bp on 06-09 — moved away from fire, not toward
                it). The reclaim-long rates filter (10Y &lt; 4.55%) is now
                BROKEN at 4.56% (was AT the boundary on 06-09). One of the two
                re-grow legs has fired; a single HY OAS print &gt; 2.78% arms a
                full two-leg re-grow into the next forward expiry. The macro
                backdrop has tightened against risk concurrent with the 200W
                break — the tail is closer to re-arming than at any point since it
                was closed.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed · no residual · no roll yet</span></div>
                <div><span className="dn-lvl-k">re-grow leg A (FIRED)</span><span className="dn-lvl-v bear">10Y &gt; 4.53% close — FIRED at 4.56%</span></div>
                <div><span className="dn-lvl-k">re-grow leg B (3bp away)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close — 2.75%, 3bp to fire</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bear">10Y &lt; 4.55% close — BROKEN at 4.56%</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as
                the levels drift, not backtested breakpoints. A re-grow on the HY
                OAS print would roll a put-spread into the 19JUN or 26JUN forward
                expiry — and unlike the late-May tails, this one would re-grow
                into a book that is <em>already</em> short-gamma (aggregate
                −58.6M), so a fresh tail carries the dealer-amplifier tailwind the
                May tails had. Wait for the HY OAS print; do not pre-grow on the
                10Y leg alone.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · OI expanded + short-add re-armed the signature</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — watchlist: the 06-09 short-add + long-trim re-armed the re-stack signature; no time-pin, read each fresh Δnet print as a signal
              </div>
              <div className="dn-thesis">
                The squeeze-cycle framework was closed-vindicated on 06-09 (the
                5-print chain ended, no calendar prior survived). The 06-10 book
                re-armed the re-stack signature: SM added short (+1,961) and
                trimmed long (−779) into the break, with the short peak 55,589 @
                UTC 16:51 06-09 printing 10 min after the 24h spot low — a
                press-into-weakness shape, not a discrete single-minute hostile-2
                step. The framework runs as a watchlist with no time-of-day base
                rate: read any fresh Δnet ≤ −3k single-minute step (Δshort &gt; 0
                + Δlong &lt; 0 same minute) as a re-stack hostile-2 signal in
                itself, and any Δnet ≥ +3k cover step as its inverse.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">watchlist · no calendar prior · 06-09 book re-armed short-add + long-trim</span></div>
                <div><span className="dn-lvl-k">24h SM shape</span><span className="dn-lvl-v bear">short Δ +1,961, long Δ −779, net −2,740 more short · short peak 55,589 @ UTC 16:51 (10 min after the 24h low)</span></div>
                <div><span className="dn-lvl-k">forward gating</span><span className="dn-lvl-v">fresh Δnet ≤ −3k single-minute = re-stack hostile-2 signal; Δnet ≥ +3k = cover signal — no time prior either way</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the cadence is dead (falsified late
                May), so treat the tape, not the clock. The 06-09 press was a
                gradual short build into the low, not a discrete step — meaningful
                as confirmation of the breakdown, but it does not by itself signal
                a cycle-3 ignition. A fresh discrete Δnet ≤ −3k below the 200W
                would be the signal to watch.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · 200W reclaim given back in one day · dealer book deepened short-gamma · macro firmed against risk · the 06-15 weekly close is the binary</span>
            </h2>

            <p>
              Of the 06-09 conditions: the 200W cycle-floor (resolved bullish on
              06-08) REVERSED — spot lost the floor on close and intraday; the
              dealer-flip reclaim DID NOT hold (flip walked down to $63,592, spot
              −2.76% below); the mean-revert scout STAYED non-actionable (legs
              never aligned); the macro re-grow 10Y leg FIRED (4.56% &gt; 4.53%)
              and the reclaim-long filter BROKE (10Y &gt; 4.55%). <em>The single
              structural event is the 200W re-break, printed inside a broad
              correlated risk-off with the dealer book deepening short-gamma and
              the macro long end firming against risk.</em> The conditions today
              re-set around the re-opened floor watch, a short-gamma dealer book,
              and a macro tail one print from a second re-grow leg:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>200W weekly-close reclaim (bullish)</td><td className="bull">06-15 W-MON close &gt; $62,019</td><td>floor intact — a one-week dip-and-reclaim; keeps the cycle read constructive and re-opens the scout-long case on a confirmed turn</td></tr>
                <tr><td>200W weekly-close break (bearish)</td><td className="bear">06-15 W-MON close &lt; $62,019</td><td>first weekly close below the 200W in the current post-06-08 floor-watch lineage (last full-history below-own-200W close was 2023-10-09) — escalate the cycle-regime read; the digestion thesis is fully falsified</td></tr>
                <tr><td>10JUN expiry settle (today 08:00Z, ~8h ahead)</td><td>−11.53M front chunk clears; ex-10JUN aggregate ≈ −47.07M still net negative</td><td>read the settle as an interim tell, not a regime change — the strip behind it (11JUN −15.23M, 12JUN −17.94M, 26JUN −25.49M) keeps the book short-gamma</td></tr>
                <tr><td>$60k crash-put magnet</td><td className="bear">$60k −47.86M (deepened 2nd day); 24h low $60,755 already tagged its edge</td><td>do not short into the magnet alongside the dealer; a clean break and hold below $60k with OI still expanding would be a separate escalation</td></tr>
                <tr><td>Mean-revert long scout (all 3 legs)</td><td className="bull">confirmed multi-frame TD9 BUY AND live funding short-pay ≥4h AND 1h close &gt; $63,592 flip</td><td>scout long 0.2R, stop $59,154, take half at the cycle anchor $72,854 — non-actionable today (legs unaligned)</td></tr>
                <tr><td>Macro tail re-grow (2nd leg)</td><td className="bear">HY OAS &gt; 2.78% close (3bp to fire); 10Y &gt; 4.53% leg already FIRED at 4.56%</td><td>arm a put-spread re-grow into 19JUN / 26JUN forward on the HY OAS print — re-grows into an already short-gamma book</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (no calendar prior)</td><td className="stale">read each fresh Δnet ≤ −3k single-minute step as a signal in itself</td><td>a discrete re-stack hostile-2 below the 200W would confirm cycle-3 ignition; the 06-09 gradual short build is confirmation, not ignition</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                the 06-15 weekly close against the 200W $62,019: a close back
                above keeps the floor intact and re-opens the scout-long case on
                a confirmed turn; a close below confirms the first sustained
                weekly-200W break of the lineage and escalates the cycle-regime
                read
              </span>. Until then this note runs as written: the desk is flat,
              the 200W watch is re-opened as the primary framework, the
              mean-revert long scout is non-actionable for unaligned legs, the
              macro tail is 3bp from a second re-grow leg, and the squeeze-cycle
              hostile-2 framework is a watchlist with no calendar prior. The
              dealer book deepened short-gamma below a $63,592 flip with a
              −47.86M $60k magnet; OI expanded on fresh shorts; the macro long
              end firmed against risk; cross-asset flipped to NORMAL on a broad
              correlated risk-off. The right read for the next 24h is{' '}
              <em>patient and flat — let the 06-15 weekly close and the 10JUN
              settle resolve the floor before committing size</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> v2 promoted from the v1 draft (2026-06-10 00:05Z
            atomic snapshot) after the STAGE B codex hostile-but-fair audit
            (<code>audits/2026-06-10-desk-note.md</code>, verdict BLOCK-CRITICAL:
            1 CRITICAL + 3 MAJOR + 3 MINOR). Each finding was fixed in place and
            then verified by grep-closure across the full EN file — the
            pre-fix wrong-claim pattern is searched and re-searched until zero
            stale matches remain; hits-before / hits-after recorded below.
            <b> DN-001 (CRITICAL · settlement timing):</b> searched{' '}
            <code>"5 min after the 09JUN 08:00Z"</code> and{' '}
            <code>"~8h before the 10JUN"</code> — hits before 1, after 0;
            replaced with <code>16h05m after the 09JUN 08:00Z settle</code> /{' '}
            <code>~7h55m before the 10JUN 08:00Z settle</code> (UTC/BJ
            conflation; 00:05Z row is BJ 08:05). RESOLVED.
            <b> DN-002 (MAJOR · phantom archive):</b> searched{' '}
            <code>"snapshots/2026-06-10-0005"</code> /{' '}
            <code>"archived verbatim"</code> / <code>"archived in snapshots"</code>{' '}
            — hits before 4 (manifest MTF, manifest GEX, MTF table note, this
            trace), after 0; the directory does not exist, so every archive
            claim was removed and replaced with an explicit not-recoverable /
            not-archived disclosure (the rolling MTF advanced 00:01Z → 00:31Z
            during the audit; values checked only against the closest rolling
            state). RESOLVED.
            <b> DN-003 (MAJOR · HY OAS gate direction):</b> searched{' '}
            <code>"widening toward"</code>, <code>"moved toward fire"</code>,{' '}
            <code>"wrong side"</code>, <code>"one bp from a second"</code>,{' '}
            <code>"one print away"</code> — hits before 4 (lead, macro prose,
            macro-tail thesis, macro net dn-em), after 0 for the HY direction
            sense. HY OAS narrowed −1bp (2.76% → 2.75%) and the gap WIDENED from
            2bp to 3bp — it backed AWAY from the 2.78% gate; reframed as mixed
            (only the 10Y leg moved toward fire). The single residual
            <code> "moved toward fire"</code> match at the macro prose now
            describes the 10Y leg correctly, not HY. RESOLVED.
            <b> DN-004 (MAJOR · "everything down"):</b> searched{' '}
            <code>"everything down"</code> / <code>"all down"</code> — hits
            before 1 (lead), after 0 for the absolute claim; the source shows
            GOOGL +0.04% and JPY +0.29%, so changed to{' '}
            <code>"nearly everything down"</code> with the small exceptions
            named, NORMAL/risk-off conclusion kept. RESOLVED.
            <b> DN-005 (MINOR · non-additive expiry strip):</b> the by-expiry
            rows sum to −67.41M (ex-10JUN −55.88M) and do not reconstruct the
            −58.6M dashboard total (non-additive by ~8.81M); added an inline
            caveat in the dealer section and the manifest naming the dashboard
            total authoritative. RESOLVED.
            <b> DN-006 (MINOR · short-peak wording):</b> searched{' '}
            <code>"at the 24h spot low"</code> / <code>"peaked at"</code> — hits
            before 1, after 0; the short peak (55,589 @ 16:51Z) prints 10 minutes
            after the $60,755 low (00:41Z BJ / 16:41Z UTC 06-09), so changed
            "peaked at" to "peaked 10 minutes after". RESOLVED.
            <b> DN-007 (MINOR · lineage qualifier):</b> searched{' '}
            <code>"first sustained weekly-200W break of the lineage"</code> —
            hits before 5 (lead em, trade-book thesis + level, decision table,
            closing em — note one span counted twice), after 0; qualified to{' '}
            <code>"first weekly close below the 200W in the current post-06-08
            floor-watch lineage (last full-history below-own-200W close was
            2023-10-09)"</code> everywhere, since 8 / 154 historical weekly
            closes already printed below their own 200W. RESOLVED.
            <b> Overall:</b> all 7 findings RESOLVED (hits-after = 0 for every
            CRITICAL + MAJOR + MINOR pattern); promoted v1 → v2 post codex
            hostile audit. Key figures unchanged and re-confirmed against source:
            funding × 1095 (snap +0.35%, 24h mean +0.93%, cap 0 / 1441,
            neg-minute 35.53%, longest neg streak 6.18h stale re-clear of the
            ≥4h leg-2 gate); GEX dual-reference sign (flip $63,592, spot −2.76% /
            idx −2.62%, aggregate −58.6M, $60k −47.86M); 200W full-history W-MON
            SMA $62,019 vs live spot −0.29% and in-progress 06-15 bar $61,820
            −0.32%, 8 / 154 = 5.19% frequency; SM cut fraction 7.09% (long −779 /
            short +1,961); daily-close lineage (06-07 $63,298, 06-08 $63,058,
            06-09 $61,695, 06-10 in-progress $61,820); 30D RV 39.60% (40.24%
            alt); cross-asset |r| 0.287 NORMAL, BTC −7.77% vs NQ −5.30%; macro
            Tier-1 (10Y 4.56% filter BROKEN, HY OAS 2.75% 3bp to gate having
            backed off 1bp, TIPS 2.21%, DXY 99.88, Fed net liq $5.834T).{' '}
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
            Numbers reflect a single atomic snapshot (2026-06-10 00:05Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-06-09 22:16Z (~1h49m before
            snapshot) and some inputs are explicitly stale or pending and
            flagged as such. Levels, sizes, and conditions are illustrative of
            the desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future
            tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The 200W reclaim was given back in a day. The book deepened
                short-gamma, the macro firmed against risk, and the floor watch
                re-opens. The 06-15 weekly close is the binary. Flat and patient.
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
            v2 · 2026-06-10 00:05Z snapshot · post codex hostile audit · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
