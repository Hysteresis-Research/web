import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-13 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-13',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-13' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260613() {
  await requireViewer('/desk/2026-06-13');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-13 · v2</span>
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
              <span className="dn-big">$63,578</span>
n2n&nbsp;<span>−0.01%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-13 00:06Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-13 00:06Z (snapshot pin)</td>
                  <td className="dn-flag">
                    fresh · 1-min · all derived values pinned to the 00:06Z anchor
                    row · live `t` field is BJ-local (UTC+8) so the 00:06Z anchor
                    row is <code>06-13 08:06</code>; this snapshot lands ~16h06m
                    after the 12JUN 08:00Z option settle and ~7h54m before the
                    13JUN 08:00Z settle · <b>window convention:</b> every live-tape
                    comparison below is <b>NOTE-TO-NOTE (n2n)</b> — measured from
                    the prior note&rsquo;s 06-12 00:05Z snap to this 00:06Z snap,
                    i.e. 1442 sampled rows ≈ 24h01m for the day window, 241 rows ≈
                    4h01m, and 61 rows ≈ 1h01m, each one minute longer than a strict
                    clock window — so the day/4h/1h deltas are tagged{' '}
                    <code>n2n</code>; any remaining &ldquo;24h&rdquo; tag is the MTF
                    scan engine&rsquo;s own window or a forward-looking phrase
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-13 00:01Z scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    ~5-min stale vs the 00:06Z snapshot anchor · in-progress bars ·
                    archived to <code>/opt/desk-note/snapshots/2026-06-13-0006/</code>{' '}
                    at author time
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-13 00:00Z snapshot</td>
                  <td className="dn-flag">
                    pre-settle · ~6-min stale vs the snapshot anchor · Deribit idx
                    $63,763 vs live $63,578.00 ($185 above) · 952 inst (was 984 on
                    06-12, −32) · 13JUN 0.3DTE +12.91M settles at 08:00Z today (~8h
                    ahead) · ex-13JUN aggregate ≈ +7.8M still net positive
                    (clearing the positive front chunk LOWERS the aggregate;
                    dashboard total +20.7M authoritative, displayed rows are
                    non-additive — see dealer section) · archived to{' '}
                    <code>/opt/desk-note/snapshots/2026-06-13-0006/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-13 00:00Z
                  </td>
                  <td className="dn-flag">~6-min lag · 7d 1h bars · 22 assets · 166 rows · regime NORMAL (mean |r| 0.391) · archived to <code>/opt/desk-note/snapshots/2026-06-13-0006/</code></td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-12 22:15Z render</td>
                  <td className="dn-flag">
                    ~1h51m render lag · FRED Tier-1 EASED at the long end (10Y
                    −10bp to 4.45%, TIPS −5bp to 2.16%) · HY OAS −2bp to 2.78% (back
                    AT the 2.78% re-grow gate, no longer above) · DXY 100.08 (+0.14)
                    · Fed net liq $5.897T (+0.062T) · archived to{' '}
                    <code>/opt/desk-note/snapshots/2026-06-13-0006/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix + 200W floor</td>
                  <td className="dn-v-cell">btcusdt_1m parquet · full-history + 2024–2026 subset</td>
                  <td className="dn-flag">
                    offsets recomputed vs live spot · subset MA ladder from the
                    2024–2026 window per desk policy · 200W floor read from the
                    full-history parquet (W-MON resample) ·{' '}
                    <code>weekly_200sma.json</code> is ABSENT, so the 200W is
                    computed directly from the parquet and the JSON percentile /
                    last-event fields are unavailable (not fabricated) · subset
                    W-SMA150 / W-SMA200 non-computable (129 subset weekly bars)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale · monthly (~72d) · do not treat as live</td>
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
              <span className="dn-v bull">+5.95%</span>
              <span className="dn-src">live · snap +5.95% ann (raw 0.005433 × 1095; long-pay live at the snap) · n2n mean ann +2.18% (was +2.60% on 06-12, −0.42pt) · cap occupancy 2 / 1442 sampled rows at the +5.96% max · neg-minute share 7.84% (113 / 1442, was 17.82% on 06-12, −9.98pt) · n2n trough −1.44% ann (= the 06-12 snap value, at the window open) · n2n peak +5.96% ann</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · n2n</span>
              <span className="dn-v bull">mean +2.60% → +2.18% (−0.42pt) · snap −1.44% → +5.95% (+7.39pt)</span>
              <span className="dn-src">range −1.44% / +5.96% ann · funding NORMALIZED fully positive — the 06-12 snap re-flip (−1.44%) sat at this window&rsquo;s open and the path climbed positive and stayed there · longest negative streak 67 sampled rows / ~1h07m wall-clock at the window open, then continuously positive into the snap · NO ≥4h contiguous short-pay leg and funding POSITIVE at the snap — the scout funding leg-2 gate is now DEAD</span>
            </div>
            <div>
              <span className="dn-k">OI · n2n</span>
              <span className="dn-v bear">−0.47% (−464 BTC)</span>
              <span className="dn-src">live · 97,790 (down from the 06-12 snap 98,255, −465) · OI kept bleeding on a flat day · n2n peak 99,370 @ UTC 04:32 06-12, trough 97,538 @ UTC 21:33 06-12 · SM short Δ −411, long Δ +1 over the n2n tape</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v">60.98 / 39.02</span>
              <span className="dn-src">live_db `mkt_long_pct` · bled a further −0.36pt vs 06-12&rsquo;s 61.34 (the de-crowding continued, quietly) · n2n range 59.27 / 62.03 · peak 62.03 / trough 59.27</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−37.3k (net SHORT · 2nd straight cover, but tiny)</span>
              <span className="dn-src">live · long 13.53k − short 50.83k · short trough 50,643 @ UTC 00:26 06-13, short peak 51,237 @ UTC 00:05 06-13 (= the 06-12 snap level — the book barely moved) · net trough (most short) −37,705 @ UTC 00:05 06-13 (= the 06-12 snap), net peak (least short) −37,138 @ UTC 00:26 06-13 · QUIET, no discrete ±3k single-minute step</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 06-12 note</span>
              <span className="dn-v bull">−37.7k → −37.3k (+412 cover)</span>
              <span className="dn-src">long +1, short −411 (rounded independently; net +412) · |Δ| / prior_net = 1.09% (412.246 / 37,705.498) · the second consecutive cover after the 06-12 +5,031, but an order of magnitude smaller — a near-flat book, not a fresh squeeze unwind</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.8% / 40.92%</span>
              <span className="dn-src">GEX median IV across 952 inst (was 45.6% / 984 on 06-12, −1.8pt vol cool) · IV/RV spread +2.88pt · 30D close-to-close RV 40.92% (30 returns / 31 closes; 29-return alt 41.19%)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+0.47% (spot) / +0.76% (idx) — both ABOVE</span>
              <span className="dn-src">flip $63,282 (was $63,650, walked DOWN −$368) · vs live spot $63,578.00 (63,578.00 / 63,282 − 1 = +0.468%) / GEX file idx $63,763 (63,763 / 63,282 − 1 = +0.760%) — both references now ABOVE the flip (the 06-12 straddle resolved upward as the flip walked down) · aggregate GEX +20.7M (was +9.7M, grew +$11M net-long-gamma) · $60k crash-put −23.34M (steady) · P/C 0.61</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The +3.26% bounce of 06-12 gave way to a flat digestion day — a
                doji on the tape, but the structural backdrop kept improving
                underneath it
              </span>. Spot prints <span className="dn-tag">−0.01% to $63,578</span>{' '}
              — effectively unchanged note-to-note inside a{' '}
              <span className="dn-tag">$64,384 / $62,857</span> range (high @ BJ
              23:15 06-12 / UTC 15:15 06-12, low @ BJ 14:39 06-12 / UTC 06:39
              06-12). Nothing on the price line resolved; almost everything
              structural firmed. The 200W floor reclaim STRENGTHENED — the 06-12
              daily close finalized at <span className="dn-tag bull">$63,547</span>,
              so there are now <span className="dn-tag bull">TWO finalized daily
              closes above the $62,019 floor</span> (06-11 $63,598, 06-12 $63,547)
              plus the in-progress 06-15 weekly bar $63,553 above. The dealer book
              grew its net-long-gamma to{' '}
              <span className="dn-tag bull">+20.7M</span> (was +9.7M), the 0-γ flip
              walked DOWN to <span className="dn-tag">$63,282</span> (was $63,650),
              so spot now sits <span className="dn-tag bull">+0.47% cleanly above
              the flip</span> rather than straddling it. Funding NORMALIZED fully
              positive — snap <span className="dn-tag bull">+5.95% ann</span>, no
              ≥4h short-pay streak, funding positive at the snap — which kills the
              mean-revert scout&rsquo;s funding leg-2 even as the flip leg cleared.
              And the macro tape EASED at the long end (10Y −10bp to 4.45%, TIPS
              −5bp to 2.16%), UN-FIRING both 06-12 re-grow legs and resolving
              yesterday&rsquo;s macro-vs-BTC tension on the bullish side.{' '}
              <em>But the tape itself stalled: every MA is still overhead, the fast
              MTF frames (30m / 1h) rolled to death-cross with top divergences, the
              slow frames are still below cloud, and SM did not re-press (+412, a
              near-flat second cover).</em> This is digestion above the reclaimed
              floor — the structure improved on every read while the price did
              nothing — and the desk stays FLAT with the 06-15 weekly close still
              the binary.
            </p>

            <p>
              BTC prints <span className="dn-tag">$63,578</span> live,{' '}
              <span className="dn-tag">−0.01%</span> note-to-note — a flat consolidation
              session after the 06-12 up-day, 1h <span className="dn-tag bull">+0.17%</span>,
              4h <span className="dn-tag bear">−0.13%</span>, the whole day a tight
              coil under the bounce high.{' '}
              <span className="dn-signal">The cycle-floor reclaim is the read that
              strengthened</span>: the 06-12 close finalized at $63,547 (the 06-12
              note carried it in-progress at $63,566), giving two consecutive
              FINALIZED daily closes above the 200W $62,019 — 06-11 $63,598 and
              06-12 $63,547 — with the in-progress 06-13 bar $63,553 also above.
              That is a strict upgrade on the corrected 06-12 lineage (one finalized
              close plus an in-progress bar). The MA matrix has not improved
              overhead — <span className="dn-tag bull">D-EMA20 $66,791 (−4.81%)</span>{' '}
              is the nearest line and the only one within reach, the cycle anchor{' '}
              <span className="dn-tag bear">D-SMA100 $72,639 (−12.47%)</span> sits
              deep below the daily stack, and the W-SMA20 weekly floor that broke
              in early June is still <span className="dn-tag bear">$72,103 (−11.82%)</span>{' '}
              overhead. <span className="dn-em">Every single MA on the daily and
              weekly ladder is above spot; the only positive structural offset on
              the entire board is the 200W floor itself (+2.51%). This is a tape
              that has reclaimed its cycle floor on a close basis and nothing
              else.</span> The mean-revert scout&rsquo;s three-leg gate from 06-12 —
              TD9 cluster AND funding short-pay ≥4h AND 1h close &gt; flip — has
              decayed in an awkward way: the flip leg finally cleared (spot +0.47%
              above the walked-down flip) at exactly the moment the funding leg DIED
              (funding normalized positive, no ≥4h streak), so the gate is no closer
              to firing than it was — it is just broken on a different leg. The
              scout stands down.
            </p>

            <h2 className="dn-sec">
              Positioning{' '}
              <span className="dn-roman">I · live tape · SM near-flat (+412 cover, the 2nd straight cover but tiny, cut 1.09%) · funding NORMALIZED fully positive (snap +5.95%, no ≥4h short-pay — scout leg-2 DEAD) · OI still bleeding (−464) on a flat day</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position book went quiet — the second straight cover, but an
                order of magnitude smaller than 06-12&rsquo;s
              </span>. SM net is <span className="dn-tag">−37,293</span> vs the
              06-12 note&rsquo;s −37,705 — that is{' '}
              <span className="dn-em">+412 covered, a 1.09% trim</span>{' '}
              (|−37,293.252 − (−37,705.498)| / 37,705.498 = 1.09%). The components
              barely moved: long_btc{' '}
              <span className="dn-tag">13,531 → 13,532 (+1)</span> and short_btc{' '}
              <span className="dn-tag bull">51,237 → 50,826 (−411)</span>. After the
              06-12 +5,031 cover, the book essentially stopped — short_btc&rsquo;s
              n2n peak 51,237 @ UTC 00:05 06-13 IS the 06-12 snap level, its trough
              50,643 @ UTC 00:26 06-13 only −594 below, and SM net traversed a
              −37,705 / −37,138 band all day. <span className="dn-em">No discrete
              ±3k single-minute step printed in either direction; the squeeze
              unwind that started gradual on 06-12 simply went flat.</span> This is
              not a re-press and not a fresh cover wave — it is a book that has
              taken its cover and is now sitting still at −37.3k net short, waiting
              like the rest of the tape for the 06-15 close.
            </p>

            <p>
              <span className="dn-signal">
                The leverage side normalized fully — and that is what kills the
                scout&rsquo;s funding leg
              </span>. Funding is{' '}
              <span className="dn-tag bull">+5.95% ann at the snap</span> (raw
              0.005433 × 1095), n2n mean{' '}
              <span className="dn-tag">+2.18%</span> (vs +2.60% on 06-12), range{' '}
              <span className="dn-tag">−1.44% / +5.96%</span>. The −1.44% low is the
              06-12 snap value sitting at this window&rsquo;s open; from there the
              path climbed positive and STAYED positive — the longest contiguous
              negative streak was just{' '}
              <span className="dn-tag">67 sampled rows / ~1h07m at the window
              open</span>, well short of the ≥4h leg-2 gate, and funding is firmly
              positive at the snap. <span className="dn-em">The 06-12 read — leg-2
              technically LIVE on a thin 245-row re-flip — has fully reversed: the
              re-flip cleared, funding is paying longs again, and the mean-revert
              scout&rsquo;s funding short-pay leg is now DEAD, not merely weaker.</span>{' '}
              Neg-minute share fell 17.82% → 7.84% (113 / 1442), cap occupancy is{' '}
              <span className="dn-tag">2 / 1442 at the +5.96% max</span> (the
              positive cap effectively empty), OI{' '}
              <span className="dn-tag bear">−464 BTC (−0.47%)</span> kept bleeding on
              a flat day (97,790, down a further −465 from the 06-12 snap 98,255),
              and retail <span className="dn-tag">mkt_long_pct 60.98%</span> bled a
              further −0.36pt. Perp trades a{' '}
              <span className="dn-tag bear">−$41.46 discount</span> to spot at the
              snap (1h mean −$38.96, 4h mean −$39.51; n2n-day mean −$65.28, range
              −$150.13 / +$17.54 — basis briefly went premium intraday but sits
              discounted at the snap). 1-min aggressor skew snap{' '}
              <span className="dn-tag bull">+28.5</span> (1h mean +7.74) — a mild
              buy-aggressor tilt into the snap.{' '}
              <span className="dn-em">
                Funding fully positive, OI still shrinking, retail still bleeding,
                both SM sides near-flat: the leverage book has finished deflating
                and is sitting balanced — neither pressing nor re-stacking.
              </span>
            </p>

            <p>
              Windowed flow is <em>a quiet two-sided digestion — spot offered,
              futures and big-prints bid, on a flat price with OI shrinking</em>.
              n2n-day: price <span className="dn-tag">−0.01%</span>, OI{' '}
              <span className="dn-tag bear">−464 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −425</span>{' '}
              <span className="dn-em">(no cb_cvd reset in the window — cleaner than
              06-12)</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +492</span>, big-print{' '}
              <span className="dn-tag bull">+226 BTC / 456 prints</span>, taker-net{' '}
              <span className="dn-tag bull">+493</span> —{' '}
              <span className="dn-em">spot sold while futures and block flow bought
              into a flat tape with OI shrinking; a balanced digestion, not a
              directional commitment either way</span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bear">−0.13%</span>, OI{' '}
              <span className="dn-tag bear">−297 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −352</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +300</span>, big-print{' '}
              <span className="dn-tag bear">−42 BTC / 54 prints</span>, taker-net{' '}
              <span className="dn-tag bull">+290</span> — <em>spot offered, futures
              bid, a slight drift lower into the snap</em>. 1h: price{' '}
              <span className="dn-tag bull">+0.17%</span>, OI{' '}
              <span className="dn-tag bull">+48 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +227</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +155</span>, big-print{' '}
              <span className="dn-tag bull">+30 BTC / 5 prints</span>, taker-net{' '}
              <span className="dn-tag bull">+182</span> — <em>the last hour ticked
              up two-sided with OI adding a touch — a small bid into the snap, not a
              trend</em>. The n2n-day shape is the cleanest read: a flat price held by
              futures and block bid against spot supply, with the leverage book
              deflating — exactly the lateral digestion-above-floor the lead names.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · the fast frames (30m / 1h) rolled to water-up death-cross with top divergences · slow frames still below cloud · 3d ⚡ TD9 BUY + bottom-divergence the lone bullish engine read · every MA overhead</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map stalled and tipped the fast frames over: the scan reads
                net 1 bull / 5 bear / 4 neutral, header tag &ldquo;多周期共振偏空·反弹偏卖&rdquo;
                (multi-period resonance bearish · sell the bounce)
              </span>. The 30m and 1h both carry{' '}
              <span className="dn-tag bear">water-up death crosses</span> (30m 11b,
              1h 6b) with top-divergence reads — the 1h readout explicitly prints{' '}
              &ldquo;震荡偏空 · 顶背离&rdquo; (range-bound bearish · top divergence), and
              the header flags 30m / 1h as the top-divergence frames. The 15m is the
              lone fast bull (<span className="dn-tag bull">water-down golden cross
              1b, FRESH</span>) but it is below cloud and reads RSI 48.6 — a weak
              early signal under the cloud, not a thrust. The mid frames are mixed:
              4h <span className="dn-tag">RSI 55.1, water-down golden 15b, in cloud
              (62.2k–66.6k)</span> — the only frame straddling its cloud and the
              highest RSI on the board; 8h <span className="dn-tag">RSI 48.2,
              water-down golden 17b, below cloud</span>. The slow frames are all
              below cloud and rolling: 12h water-down golden 9b but Sell 5; 1d{' '}
              <span className="dn-tag bear">RSI 32.9, no cross, below cloud, Sell
              5</span> — deep oversold and still under structure; 1w RSI 34.5, below
              cloud, Buy 4. The single bullish engine read sits on the cycle frame:{' '}
              <span className="dn-tag bull">3d ⚡ TD9 BUY active</span> with a 4-bar
              count and a bottom-divergence readout (&ldquo;空头结构但底背离 · 留意企稳&rdquo;
              — bearish structure but bottom divergence, watch for stabilization),
              and 1M holds a pending Buy 8 → 9? above cloud.{' '}
              <span className="dn-em">
                Read straight: the bounce&rsquo;s engine has rolled over on the fast
                frames (30m / 1h death-cross + top divs), the slow frames are deep
                oversold but still below cloud, and the only affirmative bull is the
                3d ⚡ TD9 BUY + bottom-div on the cycle frame — the same lone signal
                that has carried since 06-11. The fast-frame top divergences are the
                tell that the +3.26% bounce is digesting, not extending; the 3d
                TD9 is the tell that the cycle frame still favors a base. The map is
                a stalled bounce inside a bearish higher-frame structure.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,532</td><td className="num">48.6</td><td className="bull">golden (water-dn) 1b · fresh</td><td className="bear">below ↑63.6k 10b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>30m</td><td className="num">63,546</td><td className="num">49.5</td><td className="bear">death (water-up) 11b</td><td className="bull">above ↓63.4k 20b</td><td>Buy 1</td><td>BEAR reg · BULL hid · top div</td></tr>
                <tr><td>1h</td><td className="num">63,532</td><td className="num bull">51.8</td><td className="bear">death (water-up) 6b</td><td className="bull">above ↓62.8k 45b</td><td>Sell 1</td><td>BEAR reg · BULL hid · top div</td></tr>
                <tr><td>4h</td><td className="num">63,537</td><td className="num bull">55.1</td><td className="bull">golden (water-dn) 15b</td><td className="neut">in cloud 62.2–66.6k 11b</td><td>Buy 1</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>8h</td><td className="num">63,537</td><td className="num">48.2</td><td className="bull">golden (water-dn) 17b</td><td className="bear">below ↑67.7k 84b</td><td>Buy 1</td><td>BEAR hid</td></tr>
                <tr><td>12h</td><td className="num">63,532</td><td className="num bull">40.8</td><td className="bull">golden (water-dn) 9b</td><td className="bear">below ↑74.8k 43b</td><td>Sell 5</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">63,537</td><td className="num bull">32.9</td><td className="neut">no cross</td><td className="bear">below ↑73.9k 12b</td><td>Sell 5</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">63,532</td><td className="num bull">35.2</td><td className="bear">death (water-up) 6b</td><td className="bear">below ↑74.7k 4b</td><td className="bull">⚡ TD9 BUY</td><td>BULL reg (底背离)</td></tr>
                <tr><td>1w</td><td className="num">63,532</td><td className="num bull">34.5</td><td className="neut">no cross</td><td className="bear">below ↑100.3k 19b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">63,532</td><td className="num">42.7</td><td className="bull">DIF water-up (no cross)</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (rolling latest file;
                    archived verbatim to{' '}
                    <code>/opt/desk-note/snapshots/2026-06-13-0006/</code>). Header
                    alerts: <em>net 1 bull / 5 bear / 4 neutral · 多周期共振偏空·反弹偏卖</em>,{' '}
                    <em>top divergences on 30m / 1h</em>, <em>3d ⚡ TD9 BUY +
                    bottom-divergence</em>. Scan spot $63,532, 24h −0.09% (00:01Z MTF
                    scan; the live-tape header at 00:06Z shows −0.01% on the same 24h
                    window — the 5-minute gap accounts for the 0.08pt difference),
                    24h H/L $64,363 / $62,800, qVol $9.25B. Closes are in-progress
                    bars; treat every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the digestion is happening entirely below
              structure. Spot $63,578 sits below every daily and weekly line on the
              board; the only positive offset anywhere is the 200W floor itself
              (+2.51%). Nearest overhead is{' '}
              <span className="dn-tag bull">D-EMA20 $66,791 (−4.81%)</span> — the
              single reclaim target within a normal swing — then{' '}
              <span className="dn-tag bear">D-SMA20 $67,517 (−5.83%)</span>,{' '}
              <span className="dn-tag bear">D-EMA50 $71,048 (−10.51%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $72,103 (−11.82%)</span> (the
              broken weekly floor),{' '}
              <span className="dn-tag bear">D-SMA100 $72,639 (−12.47%; cycle
              anchor)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $73,576 (−13.59%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $73,712 (−13.75%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $73,768 (−13.81%; seed)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $74,157 (−14.27%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $75,366 (−15.64%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $76,281 (−16.65%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $77,765 (−18.24%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $78,097 (−18.59%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $78,919 (−19.44%)</span>. Far
              above and disused: W-EMA100 $82,691 (−23.11%), W-EMA50 $83,400
              (−23.77%), W-SMA100 $88,534 (−28.19%), W-SMA50 $91,818 (−30.76%).{' '}
              <span className="dn-em">
                MAs anchored to parquet 2026-06-13 00:06Z close $63,553.20; offsets
                recomputed against live spot $63,578.00. Displayed MA levels are
                $-rounded; offsets computed from exact series values. Subset MA
                ladder is the 2024–2026 window per desk policy; W-SMA150 / W-SMA200
                non-computable (129 subset weekly bars), W-EMA150 (−18.59%) and
                W-EMA200 (−13.81%) seed from available history and are reported as
                such. The 200W $62,019 is the full-history W-MON line (200 closed
                bars ending 06-08). Daily closes: 06-08 $63,058 (above), 06-09
                $61,695 (below), 06-10 $61,484 FINAL (below), 06-11 $63,598 FINAL
                (above), 06-12 $63,547 FINAL (above), 06-13 (in-progress) $63,553
                (above) — two finalized closes above the 200W floor plus the
                in-progress bar above.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map{' '}
              <span className="dn-roman">III · book GREW to +20.7M net-long-gamma (was +9.7M) · 0-γ flip walked DOWN to $63,282 so spot now sits +0.47% cleanly above (no longer straddling) · 13JUN +12.91M settles 08:00Z today, clearing it LOWERS the aggregate</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book deepened its net-long-gamma and walked the flip
                down underneath spot
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+20.7M / 1%</span> (was +9.7M on 06-12 —
              a +$11M positive grow); the book is more firmly net-long-gamma
              (dampening) than it was at the bounce. The 0-γ flip moved{' '}
              <span className="dn-tag">$63,650 → $63,282 (−$368)</span>, and spot
              $63,578 now sits <span className="dn-tag bull">+0.47% above flip</span>{' '}
              on spot-denominated math (63,578.00 / 63,282 − 1 = +0.468%); the GEX
              file&rsquo;s own Deribit-index reference $63,763 reads{' '}
              <span className="dn-tag bull">+0.76% above</span> (63,763 / 63,282 − 1
              = +0.760%). <span className="dn-em">Both references are now ABOVE the
              flip — the 06-12 straddle (−0.10% spot / +0.19% idx) resolved upward
              as the flip walked down, not as spot rallied.</span> The wall map is a
              positive overhead band against a single deep crash-put: heaviest
              positive walls <span className="dn-tag bull">$64.5k +14.09M</span>,{' '}
              <span className="dn-tag bull">$80k +10.88M</span>,{' '}
              <span className="dn-tag bull">$65k +7.99M</span>,{' '}
              <span className="dn-tag bull">$67k +7.63M</span>,{' '}
              <span className="dn-tag bull">$70k +7.05M</span>,{' '}
              <span className="dn-tag bull">$64k +5.87M</span>; the negatives are{' '}
              <span className="dn-tag bear">$60k −23.34M</span> (the persistent
              crash-put, steady vs 06-12&rsquo;s −23.10M),{' '}
              <span className="dn-tag bear">$62k −9.61M</span> (just below spot),{' '}
              <span className="dn-tag bear">$55k −7.01M</span>,{' '}
              <span className="dn-tag bear">$58k −5.26M</span>.{' '}
              <span className="dn-em">
                The near-overhead $64k–$67k band is a thick positive shelf (~+35M
                across four strikes) and the $62k −9.61M sits just under spot — a
                dealer book structurally bid into a fade toward $62k and offered
                into a push through $64.5k. The crash-put magnet at $60k held its
                weight this cut (no further lightening), but it sits −5.6% below
                spot and is not a near-spot anchor.
              </span>
            </p>

            <p>
              The expiry strip is positive across the front but the displayed rows
              are <span className="dn-em">non-additive</span> against the
              dashboard total. Per-expiry: 13JUN 0.3DTE{' '}
              <span className="dn-tag bull">+12.91M</span> (settles 08:00Z today),
              14JUN 1.3 +5.80M, 15JUN 2.3{' '}
              <span className="dn-tag bull">+15.22M</span> (the heaviest near
              positive, settles the 06-15 weekly), 16JUN 3.3 +0.27M, 19JUN 6.3
              +2.15M, <span className="dn-tag bear">26JUN 13.3 −22.05M</span> (the
              monthly, the heaviest negative chunk on the board), 3JUL +0.43M, 31JUL
              +12.04M, 28AUG +2.40M, 25SEP +1.41M, 25DEC +3.63M, 26MAR27 +0.55M.{' '}
              <span className="dn-em">The displayed rows sum to ≈ +34.76M, which is
              NOT the dashboard aggregate +20.7M — the per-strike/per-expiry
              decompositions are non-additive against the headline total; the
              dashboard +20.7M is authoritative.</span> The 13JUN 0.3DTE settles at
              08:00Z today (~8h ahead): because it is a POSITIVE +12.91M chunk,
              clearing it LOWERS the aggregate — ex-13JUN reads roughly +7.8M, still
              net positive but a smaller positive book post-settle. <span className="dn-em">
                This is the opposite of the late-May amplifier dynamic, where a
                large negative chunk cleared and flipped the book positive; here a
                positive front chunk clears and trims the net-long-gamma cushion,
                with the 26JUN monthly −22.05M the structural negative still well
                out in time.
              </span>
            </p>

            <p>
              IV median across 952 instruments is{' '}
              <span className="dn-tag">43.8%</span> (down from 45.6% / 984
              instruments on 06-12 — a −1.8pt vol cool, the −32 instruments are
              06-12&rsquo;s 0DTE chunk expiring) against 30D close-to-close RV of{' '}
              <span className="dn-tag">40.92%</span> — chain-level richness{' '}
              <span className="dn-tag">~+2.88pt</span>, the IV/RV spread compressing
              as realized stays elevated and implied bleeds.{' '}
              <span className="dn-em">A chain-median across 952 instruments,{' '}
              <span className="dn-em">not</span> a tradable spread; expiry-/strike-
              level vega, skew and term structure remain not loaded; the vol read
              stays framework-only.</span> RV methodology: 30D close-to-close,
              logret.std × √365 × 100 on the last 30 daily log returns (= 31
              consecutive daily closes) anchored to parquet 2026-06-13 00:06Z; the
              underlying 31-close window spans 05-14 → 06-13. (For reference, last 29
              returns / 30 closes reads 41.19%; the 40.92% page value comes from 30
              returns.) P/C ratio 0.61 on the GEX file.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Tier-1 EASED at the long end (10Y −10bp to 4.45%, TIPS −5bp to 2.16%) · BOTH 06-12 re-grow legs UN-FIRED (10Y back below 4.53%, HY OAS back AT 2.78%) · reclaim-long filter RE-CLEARED · cross-asset NORMAL |r| 0.391, BTC leads NQ/SP500 7d (JP225/PALL ran higher)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape eased at the long end and un-fired the re-grow gates
                — yesterday&rsquo;s macro-vs-BTC tension resolved on the bullish
                side
              </span>. Dashboard render is 2026-06-12 22:15Z, ~1h51m before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bull">4.45% (−10bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.38</span>, episodic z{' '}
              <span className="dn-tag bull">−0.50</span> — a 10bp drop that{' '}
              <span className="dn-em">RE-CLEARS the reclaim-long rates filter
              (10Y &lt; 4.55%) AND drops back below the 4.53% re-grow leg-A gate it
              fired on 06-12</span>. 10Y TIPS real{' '}
              <span className="dn-tag bull">2.16% (−5bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.12</span>, episodic z{' '}
              <span className="dn-tag bear">+0.94</span> — eased on the day but the
              regime z is the single EXTREME risk-off tag on the panel. 5Y5Y BE
              inflation <span className="dn-tag">2.23% (+5bp)</span>. HY OAS{' '}
              <span className="dn-tag">2.78% (−2bp)</span>, regime z{' '}
              <span className="dn-tag bull">−0.84</span>, episodic z{' '}
              <span className="dn-tag">+0.31</span> — back AT the 2.78% re-grow gate,
              no longer above it, so re-grow leg-B has lapsed off its 06-12 fire.
              MOVE bond vol <span className="dn-tag">69.4 (−0.09)</span> — loose,
              flat. The dollar firmed: DXY{' '}
              <span className="dn-tag bear">100.08 (+0.14)</span>, regime z{' '}
              <span className="dn-tag bear">+1.75</span>, episodic z{' '}
              <span className="dn-tag bear">+1.64</span> — RISK-OFF, the one Tier-1
              line leaning the wrong way; Fed net liquidity{' '}
              <span className="dn-tag bull">$5.897T (+0.062T)</span> loose; NFCI
              −0.506 neutral; US-JP 10Y spread{' '}
              <span className="dn-tag">1.94% (−10bp)</span>; USD/JPY{' '}
              <span className="dn-tag">160.52 (+0.13)</span>; USD/CNY 6.7771; 10Y
              breakeven 2.31% (+2bp).{' '}
              <span className="dn-em">
                Net: the re-grow gates that BOTH fired on 06-12 are now BOTH
                un-fired (10Y −10bp to 4.45% is back below the 4.53% leg-A gate; HY
                OAS −2bp to 2.78% is back at, not above, the leg-B gate), and the
                reclaim-long filter (10Y &lt; 4.55%) re-cleared. The macro tape has
                eased risk-on at the long end exactly as the BTC-internal tape
                turned up — the 06-12 tension (macro re-grow firing bearish into a
                bullish BTC turn) has resolved with macro now ALIGNED with the BTC
                turn, not fighting it. DXY firm and TIPS-real EXTREME are the two
                offsetting risk-off lines, but the rates path that matters for BTC
                eased.
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
                <tr><td>US 10Y nominal</td><td className="num">4.45%</td><td className="num bull">−10bp</td><td className="num bear">+1.38</td><td className="num bull">−0.50</td><td className="bear">tight regime · eased; re-grow leg-A UN-FIRED, filter re-cleared</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.16%</td><td className="num bull">−5bp</td><td className="num bear">+2.12</td><td className="num bear">+0.94</td><td className="bear">EXTREME RISK-OFF regime · eased on day</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.23%</td><td className="num bear">+5bp</td><td className="num">−0.03</td><td className="num bull">−0.89</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num bull">−2bp</td><td className="num bull">−0.84</td><td className="num">+0.31</td><td className="bull">loose · back AT the 2.78% gate, leg-B UN-FIRED</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.506</td><td className="num">0.00</td><td className="num">+0.19</td><td className="num bull">−0.73</td><td className="neut">neutral</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">69.4</td><td className="num bull">−0.09</td><td className="num bull">−0.61</td><td className="num bull">−1.02</td><td className="bull">loose · flat</td></tr>
                <tr><td>DXY</td><td className="num">100.08</td><td className="num bear">+0.14</td><td className="num bear">+1.75</td><td className="num bear">+1.64</td><td className="bear">RISK-OFF · the one Tier-1 line leaning wrong</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.897T</td><td className="num bull">+0.062T</td><td className="num bull">+0.82</td><td className="num bull">+2.47</td><td className="bull">loose · fresh weekly add</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.52</td><td className="num bear">+0.13</td><td className="num bear">+1.38</td><td className="num bear">+1.47</td><td className="neut">yen soft</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.94%</td><td className="num bull">−10bp</td><td className="num bull">−0.88</td><td className="num bull">−0.50</td><td className="bull">tightened</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7771</td><td className="num">+0.00</td><td className="num bull">−1.70</td><td className="num bull">−0.73</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">monthly (~72d)</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 166 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.391</span> (firmed from
              06-12&rsquo;s 0.377 but still in the NORMAL band, not systemic).
              BTC&rsquo;s listed ties are TradFi-tech led and tightened: NQ{' '}
              <span className="dn-tag">+0.572</span>, SP500{' '}
              <span className="dn-tag">+0.549</span>, TSLA{' '}
              <span className="dn-tag">+0.514</span>, NVDA{' '}
              <span className="dn-tag">+0.502</span>, META{' '}
              <span className="dn-tag">+0.492</span>, MSFT{' '}
              <span className="dn-tag">+0.486</span>, GOOGL{' '}
              <span className="dn-tag">+0.480</span>, SILVER{' '}
              <span className="dn-tag">+0.473</span>, COPPER{' '}
              <span className="dn-tag">+0.470</span>, GOLD{' '}
              <span className="dn-tag">+0.435</span>. 7d performance:{' '}
              <span className="dn-tag bull">BTC +3.77%</span> (leads the US
              tech-index pair NQ/SP500, but NOT the full board — JP225 and PALL
              both ran higher), NQ{' '}
              <span className="dn-tag bull">+2.28%</span>, SP500{' '}
              <span className="dn-tag bull">+0.58%</span>, JP225{' '}
              <span className="dn-tag bull">+4.31%</span>, PALL{' '}
              <span className="dn-tag bull">+5.36%</span>, COPPER{' '}
              <span className="dn-tag bull">+3.17%</span>, TSLA{' '}
              <span className="dn-tag bull">+3.04%</span>; the mega-cap tech tape
              was heavy — MSFT{' '}
              <span className="dn-tag bear">−5.71%</span>, AAPL{' '}
              <span className="dn-tag bear">−5.48%</span>, META{' '}
              <span className="dn-tag bear">−3.68%</span>, AMZN{' '}
              <span className="dn-tag bear">−3.22%</span>; metals mixed (GOLD{' '}
              <span className="dn-tag bear">−2.66%</span>, PLAT{' '}
              <span className="dn-tag bear">−3.40%</span>, SILVER +0.19%); energy
              kept collapsing — CL{' '}
              <span className="dn-tag bear">−10.47%</span>, BRENT{' '}
              <span className="dn-tag bear">−10.52%</span>.{' '}
              <span className="dn-em">
                BTC +3.77% leads the US tech-index pair (NQ/SP500) on 7d — its
                lead over NQ +2.28% is +1.49pt (was +2.21pt on 06-12 — the gap
                narrowed as BTC consolidated flat while NQ kept grinding up, not
                because BTC rolled) — but it does NOT lead the full board: JP225
                +4.31% and PALL +5.36% both outperformed BTC on 7d. The broad
                regime stays NORMAL and BTC is endogenously firm inside it,
                the firmest of the US risk indices though not the board top;
                the energy collapse (CL/BRENT −10%) and the
                mega-cap tech drawdown are the macro cross-currents, but neither is
                the BTC-load-bearing read this cut
              </span>. JGB monthly 2.52% carries an EXTREME RISK-OFF monthly tag — do
              not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 200W floor watch PRIMARY (reclaim STRENGTHENED to two finalized closes above) · mean-revert scout DECAYED (funding leg-2 dead even as the flip leg cleared) · macro-tail re-grow UN-FIRED (tension resolved) · squeeze-cycle hostile-2 quiet · desk flat</span>
            </h2>

            <p>
              <span className="dn-signal">
                A flat day with an improving structure does not change a flat book —
                it strengthens the watch and decays the scout
              </span>. The desk carried no position into this snap and opened
              nothing; the +3.26% bounce of 06-12 is now a day old and digesting,
              and the desk watched it without an entry by design. The honest
              scorecard: the 200W reclaim strengthened to two finalized daily closes
              above the floor (a strict upgrade), the dealer book deepened its
              net-long-gamma and walked the flip below spot, funding normalized fully
              positive, and macro eased into alignment with the BTC turn — every
              structural read improved. <em>But the mean-revert scout decayed rather
              than triggered: its flip leg finally cleared at the same moment its
              funding leg died, so it is no closer to a clean fire; every MA is
              overhead; the fast MTF frames rolled to death-cross with top
              divergences; and SM went near-flat (+412), neither pressing nor
              covering with force.</em> No chase. The scout is a confirmation trade
              and the confirmation it needs (a clean three-leg gate AND the 06-15
              weekly reclaim) is structurally further away now that the funding leg
              is dead — wait for the 06-15 weekly close and a re-armed gate, do not
              retrofit an entry into a stalled-but-bullish tape.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch · reclaim STRENGTHENED: now TWO finalized daily closes above (06-11 $63,598, 06-12 $63,547) + in-progress 06-15 weekly bar $63,553 above</span>
              <div className="dn-trade-name">
                200W cycle-floor watch — reclaim strengthened: two finalized daily closes above $62,019 (06-11 $63,598, 06-12 $63,547) plus the in-progress 06-15 weekly bar $63,553 above; the 06-15 weekly close is still the binary, now leaning reclaim further
              </div>
              <div className="dn-thesis">
                The 06-09/06-10 break put two daily closes below the floor; the 06-11
                tape took it back and 06-12 held it. This cut the 06-12 daily close
                finalized at $63,547 — a second consecutive FINALIZED daily close
                above the 200W $62,019, on top of 06-11&rsquo;s $63,598. That is the
                strict upgrade from the corrected 06-12 read (which carried one
                finalized close plus an in-progress bar). Spot $63,578 sits +2.51%
                above the floor and the in-progress 06-15 W-MON weekly bar prints
                $63,553 = +2.47% above. The full-history 200-week SMA is $62,019 (200
                closed bars ending 06-08); the weekly-close-below-own-200W frequency
                is 8 / 154 = 5.19% — a low-base-rate location the tape has now sat
                back above for two finalized daily closes. The single resolving event
                is still the 06-15 weekly close: a close above $62,019 confirms the
                reclaim (a one-week dip-and-reclaim of the post-06-08 lineage), a
                close below would still confirm the first sustained weekly-200W break
                — but two finalized daily closes above plus a flat hold make the
                reclaim the higher-probability outcome by a wider margin than 06-12.
                Status: <em>watch open, reclaim strengthening, no position</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor (full-history W-MON)</span><span className="dn-lvl-v">$62,019 · 200 closed bars ending 06-08 · live spot +2.51% / +$1,559 above</span></div>
                <div><span className="dn-lvl-k">in-progress weekly (06-15)</span><span className="dn-lvl-v bull">1m-close $63,553 = +2.47% / +$1,534 above the 200W — provisional until the 06-15 W-MON close</span></div>
                <div><span className="dn-lvl-k">finalized daily-close lineage</span><span className="dn-lvl-v bull">06-11 $63,598 FINAL (above) · 06-12 $63,547 FINAL (above) · 06-13 in-progress $63,553 (above) — two finalized closes above the floor</span></div>
                <div><span className="dn-lvl-k">reclaim confirmation (bullish)</span><span className="dn-lvl-v bull">06-15 weekly close &gt; $62,019 — confirms the floor reclaim; re-opens the scout-long case on a confirmed turn</span></div>
                <div><span className="dn-lvl-k">break confirmation (bearish)</span><span className="dn-lvl-v bear">06-15 weekly close &lt; $62,019 — first sustained weekly close below the 200W in the post-06-08 lineage (last full-history below-own-200W close was 2023-10-09); now the lower-probability path</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the 200W is a weekly-close line, not an
                intraday level — spot +2.51% above and the in-progress bar +2.47%
                above do not resolve it; only the 06-15 W-MON close does. Two
                finalized daily closes (06-11 $63,598, 06-12 $63,547) plus the 06-13
                in-progress bar sit above; treat the next weekly close as the binary,
                and read the 13JUN 08:00Z settle and the daily-close lineage as the
                interim tells. The strengthened intraweek hold widens the odds
                toward reclaim, it does not close the trade.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · DECAYED · funding leg-2 DIED as the flip leg cleared · stood down further</span>
              <div className="dn-trade-name">
                Mean-revert long scout — decayed: the flip leg finally cleared (spot +0.47% above the walked-down flip $63,282) but the funding short-pay leg-2 DIED (funding normalized positive, no ≥4h streak) — the gate is no closer to firing, just broken on a different leg
              </div>
              <div className="dn-thesis">
                The scout is a three-leg gate: (1) a TD9-BUY cluster, (2) a funding
                short-pay ≥4h contiguous streak, (3) a 1h close above the 0-γ flip.
                On 06-12 leg 3 was straddling the boundary and leg 2 was technically
                LIVE on a thin 245-row re-flip; the bounce had already run, so the
                scout was non-actionable. This cut the legs decayed rather than
                converged: <em>Leg 3 CLEARED</em> — the flip walked down to $63,282
                and spot sits +0.47% above on the live read (+0.76% on the idx), the
                first clean above-flip read of the lineage. But{' '}
                <em>Leg 2 DIED</em> — funding normalized fully positive (snap +5.95%,
                n2n mean +2.18%), the longest negative streak collapsed to 67 rows /
                ~1h07m at the window open, and funding is paying longs at the snap, so
                there is no ≥4h short-pay leg at all. <em>Leg 1 is unchanged</em> —
                the 3d ⚡ TD9 BUY (now with a bottom-divergence readout) is still the
                lone cluster member, 1M still pending Buy 8 → 9?. Net: the scout
                cannot fire — a mean-revert long is gated on a funding short-pay
                condition that has evaporated, and the move it was designed to catch
                already happened. The gate is structurally further from a clean fire
                than on 06-12, not closer. Status:{' '}
                <em>decayed, stood down, no entry</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">leg 1 · TD9 cluster</span><span className="dn-lvl-v">3d ⚡ TD9 BUY active (+ bottom-divergence readout) · 1M Buy 8 → 9? pending — lone cluster member, unchanged</span></div>
                <div><span className="dn-lvl-k">leg 2 · funding short-pay ≥4h</span><span className="dn-lvl-v bear">DEAD — funding normalized positive (snap +5.95%), longest neg streak 67 rows / ~1h07m at the window open, no ≥4h streak, funding paying longs at the snap</span></div>
                <div><span className="dn-lvl-k">leg 3 · 1h close &gt; flip</span><span className="dn-lvl-v bull">CLEARED — flip $63,282, spot +0.47% above (idx +0.76%) — clean above-flip, but academic with leg 2 dead</span></div>
                <div><span className="dn-lvl-k">trigger (all 3 clean)</span><span className="dn-lvl-v bull">confirmed TD9 BUY cluster AND a fresh live funding short-pay ≥4h AND 1h close &gt; flip — then scout long 0.2R; all three are not simultaneously live</span></div>
                <div><span className="dn-lvl-k">stop / size</span><span className="dn-lvl-v bear">1h close &lt; $61,484 (06-10 daily close / 200W band) · size 0.2R · take half at the cycle anchor D-SMA100 $72,639</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R sketch (illustrative, not a live order):</b> were the gate to
                re-arm, a trigger on a clean 1h close above the flip $63,282 against a
                $61,484 stop is ~$1,798 risk; the first target at the cycle anchor
                $72,639 is ~$9,061 ≈ 5.0:1 — attractive on paper, but the gate cannot
                fire while the funding leg is dead. <b>Hard rule:</b> do not
                synthesize an entry from the one leg that cleared — a mean-revert long
                requires the funding short-pay condition to be LIVE, and it is not;
                buying a flat tape above a walked-down flip with every MA overhead and
                the fast frames carrying top divergences is exactly the anticipation
                the framework forbids. The honest read is the desk watched a clean
                mean-revert bounce go by un-traded and the scout has now decayed out
                of reach; wait for the funding leg to re-arm AND the 06-15 weekly
                reclaim, do not retrofit.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — BOTH legs now UN-FIRED (reverted from 06-12&rsquo;s BOTH-FIRED)</span>
              <div className="dn-trade-name">
                Macro tail put-spread — closed; re-grow gates UN-FIRED on both legs: 10Y eased −10bp to 4.45% (back below the 4.53% leg-A gate) AND HY OAS eased −2bp to 2.78% (back AT, not above, the leg-B gate); reclaim-long rates filter (10Y &lt; 4.55%) RE-CLEARED
              </div>
              <div className="dn-thesis">
                The macro tail put-spread is closed with no residual. On 06-12 both
                re-grow legs fired cleanly above their gates (10Y 4.55% &gt; 4.53%, HY
                OAS 2.80% &gt; 2.78%) and the desk logged the fire but held it
                discretionary against the bullish BTC-internal turn. This cut both
                legs UN-FIRED: 10Y eased −10bp to 4.45% (back below the 4.53% gate AND
                re-clearing the reclaim-long filter 10Y &lt; 4.55%), and HY OAS eased
                −2bp to 2.78% (back AT its gate, no longer above). <span className="dn-em">
                The 06-12 tension — macro re-grow firing bearish exactly as BTC turned
                up — has resolved: macro eased risk-on at the long end and the re-grow
                gates are no longer firing, so the macro tape is now ALIGNED with the
                BTC turn rather than fighting it.</span> A re-grow would have leaned
                against the BTC bounce; the gates un-firing removes even the
                discretionary tension. The desk holds no tail and has no gate to fire
                against the net-long-gamma, 200W-reclaiming tape.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed · no residual · re-grow gate UN-FIRED on both legs — no tension to manage</span></div>
                <div><span className="dn-lvl-k">re-grow leg A (UN-FIRED)</span><span className="dn-lvl-v bull">10Y &gt; 4.53% close — UN-FIRED at 4.45% (−10bp, back below the gate)</span></div>
                <div><span className="dn-lvl-k">re-grow leg B (UN-FIRED)</span><span className="dn-lvl-v bull">HY OAS &gt; 2.78% close — UN-FIRED at 2.78% (−2bp, back AT the gate, not above)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — RE-CLEARED at 4.45% (the 06-12 lapse to the 4.55% boundary reversed)</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as the
                levels drift, not backtested breakpoints — both fired on 06-12 and
                both un-fired this cut on a 10bp 10Y move, which is exactly why the
                desk does not trade them mechanically. A fresh tail would only make
                sense if the BTC-internal structure rolled back over (book re-deepens
                short-gamma below a re-failing flip AND the 06-15 weekly fails) WITH
                the macro legs re-firing — none of those holds now. Re-arm the watch
                only on a clean re-fire of BOTH macro legs into a BTC-internal
                breakdown; absent that, there is no tail to grow.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · QUIET — the book went near-flat (+412 cover), no discrete ±3k single-minute step</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — watchlist, quiet: after the 06-12 +5,031 cover the book went near-flat (+412), short barely moved (−411), no discrete Δnet ≥ +3k cover step or ≤ −3k re-stack printed
              </div>
              <div className="dn-thesis">
                The squeeze-cycle framework runs as a watchlist with no calendar prior
                (the cadence was falsified late May). The three-day short press ended
                06-12 with the first cover (+5,031); this cut the book essentially
                stopped — SM net +412, short_btc −411, long_btc +1. The n2n tape held
                a narrow −37,705 / −37,138 net band with no discrete single-minute
                step in either direction — no Δnet ≥ +3k cover ignition and no Δnet ≤
                −3k re-stack hostile-2. <span className="dn-em">The squeeze that
                started unwinding gradually on 06-12 went flat: the book took its
                cover and is now sitting still, neither re-pressing nor accelerating
                the unwind.</span> Read any fresh Δnet ≤ −3k single-minute step
                (Δshort &gt; 0 + Δlong &lt; 0 same minute) as a re-stack hostile-2
                signal in itself, and any Δnet ≥ +3k cover step as its inverse — but
                neither printed, and the book&rsquo;s stillness is itself the read.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">watchlist · no calendar prior · the book went near-flat (+412 cover, 1.09% trim) after the 06-12 +5,031, no discrete ±3k step</span></div>
                <div><span className="dn-lvl-k">n2n SM shape</span><span className="dn-lvl-v">short Δ −411, long Δ +1, net +412 cover (vs the 06-12 note; rounded independently) · net band −37,705 / −37,138 all day · short trough 50,643 @ UTC 00:26 · QUIET, no ±3k single-minute step</span></div>
                <div><span className="dn-lvl-k">forward gating</span><span className="dn-lvl-v">fresh Δnet ≤ −3k single-minute = re-stack hostile-2 signal; Δnet ≥ +3k = cover ignition — no time prior either way; the book&rsquo;s current stillness favors neither</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the cadence is dead (falsified late May),
                so treat the tape, not the clock. A near-flat book the day after a
                gradual cover is consistent with a squeeze that has finished unwinding
                rather than one re-loading — but stillness is not a signal, it is the
                absence of one. A fresh discrete Δnet ≤ −3k below a re-failing flip
                would re-arm the short-press read; a Δnet ≥ +3k cover step above the
                flip would confirm a violent unwind. Neither printed; watch the next
                discrete step for which way the book commits off this flat base.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the 200W reclaim STRENGTHENED (two finalized daily closes above; 06-15 close still the binary, leaning reclaim) · the scout DECAYED as funding normalized · the dealer book deepened net-long-gamma · macro eased into alignment with the BTC turn · desk flat</span>
            </h2>

            <p>
              Of the 06-12 conditions: the 200W cycle-floor reclaim STRENGTHENED (the
              06-12 daily close finalized at $63,547, a second finalized close above
              the floor, spot +2.51% above, in-progress 06-15 bar +2.47% above); the
              dealer book DEEPENED its net-long-gamma to +20.7M and walked the flip
              down to $63,282 so spot now sits +0.47% cleanly above; the mean-revert
              scout DECAYED — its flip leg cleared but its funding leg DIED, so it is
              further from a clean fire, not closer; the macro re-grow legs BOTH
              UN-FIRED (10Y −10bp to 4.45%, HY OAS −2bp to 2.78%) and the reclaim-long
              filter RE-CLEARED, resolving the 06-12 macro-vs-BTC tension on the
              bullish side; SM went near-flat (+412 cover). <em>The single structural
              read is a digestion-above-the-reclaimed-floor day where every structural
              input improved while price did nothing — the 200W reclaim strengthened,
              gamma deepened, funding normalized, macro eased into alignment — but the
              tape stalled with every MA overhead, the fast frames rolling to
              death-cross with top divergences, and the scout decayed out of reach.</em>{' '}
              The conditions today re-set around the strengthened floor reclaim, the
              decayed-and-stood-down scout, and a macro tail with both gates
              un-fired:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>200W weekly-close reclaim (bullish)</td><td className="bull">06-15 W-MON close &gt; $62,019 — two finalized daily closes above + in-progress bar +2.47% above</td><td>confirms the floor reclaim, a one-week dip-and-reclaim of the post-06-08 lineage; re-opens the scout-long case on a confirmed turn — now the higher-probability path by a wider margin</td></tr>
                <tr><td>200W weekly-close break (bearish)</td><td className="bear">06-15 W-MON close &lt; $62,019</td><td>first sustained weekly close below the 200W in the post-06-08 lineage (last full-history below-own-200W close was 2023-10-09) — now the lower-probability path after two finalized daily closes above; escalate the cycle-regime read if it prints</td></tr>
                <tr><td>13JUN expiry settle (today 08:00Z, ~8h ahead)</td><td>+12.91M positive front chunk clears; ex-13JUN aggregate ≈ +7.8M (a smaller positive book post-settle)</td><td>read the settle as an interim tell — clearing a POSITIVE chunk trims the net-long-gamma cushion; the book stays net positive but less so, not a regime change</td></tr>
                <tr><td>Mean-revert long scout — funding leg (DIED)</td><td className="bear">funding short-pay ≥4h — DEAD (funding normalized positive, snap +5.95%, no ≥4h streak)</td><td>the scout cannot fire while the funding leg is dead even though the flip leg cleared (spot +0.47% above $63,282); stand down — re-arm only on a fresh live funding short-pay ≥4h AND a confirmed TD9 cluster AND the 06-15 weekly reclaim, do not synthesize from the one cleared leg</td></tr>
                <tr><td>0-γ flip (walked DOWN, spot above)</td><td className="bull">flip $63,282 (−$368); spot +0.47% / idx +0.76% — both ABOVE</td><td>the 06-12 straddle resolved upward as the flip walked down; spot now sits cleanly above on both references — a dampening, supportive dealer location, not a trigger on its own</td></tr>
                <tr><td>Macro tail re-grow (BOTH legs UN-FIRED)</td><td className="bull">10Y &lt; 4.53% (UN-FIRED at 4.45%); HY OAS AT 2.78% (UN-FIRED, not above)</td><td>both 06-12 fires reversed; no tail to grow and no tension to manage — macro now aligned with the BTC turn; re-arm the watch only on a clean re-fire of BOTH legs into a BTC-internal breakdown</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (no calendar prior)</td><td className="stale">read each fresh Δnet ≤ −3k or ≥ +3k single-minute step as a signal in itself</td><td>the book went near-flat (+412) after the 06-12 cover with no discrete step; a fresh re-stack ≤ −3k below a re-failing flip re-arms the short read, a ≥ +3k cover step above the flip confirms a violent unwind — neither printed, the book is still</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                the 06-15 weekly close against the 200W $62,019 (now leaning reclaim
                with two finalized daily closes above and the in-progress bar +2.47%
                above): a weekly close back above the 200W confirms the floor reclaim
                and re-opens the scout-long case once the funding leg re-arms; a
                weekly close below would still confirm the first sustained weekly-200W
                break of the post-06-08 lineage (last full-history below-own-200W
                close was 2023-10-09), now the lower-probability path
              </span>. Until then this note runs as written: the desk is flat, the
              200W watch is the primary framework and its reclaim strengthened to two
              finalized daily closes above, the mean-revert long scout decayed out of
              reach (the funding leg died as the flip leg cleared — no chase), the
              macro tail re-grow un-fired on both legs and the macro-vs-BTC tension
              resolved on the bullish side, and the squeeze-cycle hostile-2 framework
              is a watchlist with the book gone near-flat. The dealer book deepened
              to +20.7M net-long-gamma and walked the flip below spot; funding
              normalized fully positive; OI kept bleeding on a flat day; BTC leads
              the US tech-index pair (NQ/SP500) on 7d but not the full board
              (JP225 +4.31%, PALL +5.36% ran higher) inside a still-NORMAL broad
              regime. The
              right read for the next 24h is{' '}
              <em>patient and flat — let the 06-15 weekly close confirm the
              strengthened floor reclaim and let the funding leg re-arm before the
              scout is anything other than decayed; the structure improved, the tape
              stalled, and a stalled-but-bullish digestion is not a trade</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit — PASS-WITH-NOTES
            </span>
            <b>Status:</b> this is the <b>v2</b> cut built on the 2026-06-13 00:06Z
            atomic snapshot. The STAGE B codex hostile cross-model audit{' '}
            <b>has run</b> — verdict <b>PASS-WITH-NOTES</b>, no CRITICAL, 3 MAJOR +
            1 MINOR — and every finding is applied and grep-verified against the
            full EN file before promotion. Verdict and findings:{' '}
            <code>audits/2026-06-13-desk-note.md</code>. <b>Grep-closure (post codex
            hostile audit):</b>{' '}
            <b>DN-001</b> (MAJOR · window scope) — patterns searched:{' '}
            <code>24h</code>/<code>4h</code>/<code>1h</code> used as live-tape
            lookback labels (the windows were computed note-to-note, one minute
            longer than strict clock windows); wrong-claim hits before 17 (header
            stamp, funding meta ×3, Δ-funding + OI keys, OI/retail/SM peak-trough
            ranges, lead + flat-day prose, funding prose, perp-basis means, the
            windowed-flow day row ×2, squeeze ×2, scout thesis), hits after{' '}
            <b>0</b> — every live-tape window relabeled <code>n2n</code> and a
            window-convention definition added to the manifest; the residual{' '}
            <code>24h</code> strings are the convention text, the MTF scan-engine&rsquo;s
            own 24h window (a separate artifact), and the forward-looking
            &ldquo;next 24h&rdquo;, none a live-tape lookback — <b>RESOLVED</b>.{' '}
            <b>DN-002</b> (MAJOR · macro z-scores) — patterns searched: the stale
            episodic/regime z-values <code>−2.26</code> (Fed net-liq sign flip),{' '}
            <code>+0.05 / −0.10</code> (5Y5Y), <code>+0.12 / −0.80</code> (NFCI),{' '}
            <code>−0.60 / −0.51</code> (MOVE), <code>+1.30 / +0.72</code> (USD/JPY),{' '}
            <code>−0.95 / +0.18</code> (US-JP spread), <code>+0.01 / −1.88 / −2.10</code>{' '}
            (USD/CNY); hits before 7 rows, hits after <b>0</b> — all re-sourced to
            the archived 22:15Z dashboard (Fed net-liq episodic z corrected{' '}
            <code>−2.26 → +2.47</code> with the positive/add-liquidity read; the
            flagged z-values live only in the macro table, prose carries 10Y/TIPS/DXY
            z which were not flagged) — <b>RESOLVED</b>. <b>DN-003</b> (MAJOR ·
            cross-asset leadership) — patterns searched: <code>strongest</code>,{' '}
            <code>strongest-tier</code>, <code>index complex</code>,{' '}
            <code>leads the index</code>; hits before 5 (roman IV, body parenthetical,
            body &ldquo;leads the index complex&rdquo;, footer summary, this trace),
            hits after <b>0</b> — all reframed to &ldquo;BTC leads NQ/SP500 (the US
            tech-index pair) but NOT the full board; JP225 +4.31% and PALL +5.36% ran
            higher&rdquo;, the +1.49pt BTC-NQ gap retained (audit-confirmed correct) —
            <b>RESOLVED</b>. <b>DN-004</b> (MINOR · MTF close cells) — pattern{' '}
            <code>63,532</code> in the 30m/4h/8h/1d rows; corrected to the archived
            scan closes 30m <code>63,546</code>, 4h/8h/1d <code>63,537</code>; the
            residual <code>63,532</code> cells are the scan spot and the bars the
            audit did not flag — <b>RESOLVED</b>. Source pins (factual data, checked
            against the server&rsquo;s parquet / JSON sources):{' '}
            funding × 1095 (snap +5.95% ann from raw 0.005433, n2n mean +2.18% ann,
            range −1.44% / +5.96%, cap 2 / 1442 at the +5.96% max, neg-minute share
            7.84% = 113 / 1442, longest negative streak 67 sampled rows / ~1h07m at
            the window open with funding positive at the snap — NO ≥4h short-pay leg,
            scout funding leg-2 DEAD); GEX dual-reference sign (flip $63,282, spot
            +0.47% = 63,578.00 / 63,282 − 1 / idx +0.76% = 63,763 / 63,282 − 1 — both
            ABOVE, the 06-12 straddle resolved upward; aggregate +20.7M grew from
            +9.7M; $60k −23.34M steady; displayed expiry rows sum ≈ +34.76M
            NON-ADDITIVE vs the dashboard +20.7M, dashboard authoritative; 13JUN
            0.3DTE +12.91M settles 08:00Z, ex-13JUN ≈ +7.8M, clearing a positive
            chunk LOWERS the aggregate); 200W full-history W-MON SMA $62,019 (200
            closed bars ending 06-08) vs live spot +2.51% above and in-progress 06-15
            bar $63,553 +2.47% above, 8 / 154 = 5.19% frequency,{' '}
            <code>weekly_200sma.json</code> ABSENT (200W computed directly from
            parquet, JSON percentile / last-event unavailable, not fabricated); SM cut
            fraction 1.09% (long +1 / short −411 rounded independently, net +412
            cover; exact net −37,705.498 → −37,293.252, Δ +412.246 — do not difference
            the rounded endpoints; QUIET, no ±3k single-minute step); daily-close
            lineage (06-08 $63,058, 06-09 $61,695, 06-10 $61,484 FINAL, 06-11 $63,598
            FINAL, 06-12 $63,547 FINAL, 06-13 in-progress $63,553 — TWO finalized
            closes above the floor); 30D RV 40.92% (30 returns / 31 closes; 41.19%
            alt at 29 returns; window 05-14 → 06-13); cross-asset |r| 0.391 NORMAL,
            BTC +3.77% leads NQ/SP500 (+1.49pt vs NQ +2.28%, was +2.21pt on 06-12) but NOT the full board (JP225 +4.31%, PALL +5.36% higher);
            macro Tier-1 (10Y 4.45% −10bp — re-grow leg-A UN-FIRED and reclaim-long
            filter 10Y &lt; 4.55% RE-CLEARED; HY OAS 2.78% −2bp back AT the gate, leg-B
            UN-FIRED; TIPS 2.16% regime-z EXTREME; DXY 100.08 RISK-OFF; MOVE 69.4;
            Fed net liq $5.897T); no cb_cvd reset in the n2n window (reset-adjustment
            not required this cut); full MA matrix vs live spot $63,578.00 off parquet
            2026-06-13 00:06Z close $63,553.20 (D-SMA100 $72,639 cycle anchor −12.47%,
            every MA overhead, nearest D-EMA20 −4.81%, W-SMA150/200 non-computable at
            129 subset weekly bars, W-EMA150/200 seed-disclosed); MTF cross labels
            verified against the archived scan (15m water-down golden 1b fresh; 30m /
            1h water-up death with top divergences; 3d ⚡ TD9 BUY + bottom-divergence);
            claims-vs-loaded-data (NTT / max-pain / strike-IV / BTC-NQ framework-only;
            JGB monthly do not lean; IV chain-median across 952 instruments not a
            tradable spread). Archive:{' '}
            <code>/opt/desk-note/snapshots/2026-06-13-0006/</code> (btc_gex.html,
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
            Numbers reflect a single atomic snapshot (2026-06-13 00:06Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-06-12 22:15Z (~1h51m before
            snapshot) and some inputs are explicitly stale or pending and
            flagged as such. This is the <b>v2</b> post-audit cut — the STAGE B
            codex hostile audit has run (PASS-WITH-NOTES, no CRITICAL) and its
            three MAJOR + one MINOR findings are applied and grep-verified; the
            verdict is recorded in the audit trace above and in{' '}
            <code>audits/2026-06-13-desk-note.md</code>. Levels, sizes, and
            conditions are illustrative of the desk&rsquo;s process, not standing
            recommendations. Past correlation, gamma, and positioning patterns do
            not bind future tape. Derivatives carry the risk of total loss and,
            where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                A flat day that improved every structural read — the 200W reclaim
                strengthened to two finalized closes above, the dealer book deepened
                net-long-gamma and walked the flip below spot, funding normalized,
                macro eased into alignment. But the tape stalled: every MA overhead,
                the fast frames rolled to death-cross with top divs, and the scout
                decayed out of reach as its funding leg died. Flat and patient — the
                06-15 weekly close is the binary.
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
            v2 · 2026-06-13 00:06Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
