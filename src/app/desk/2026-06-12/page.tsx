import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-12 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-12',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-12' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260612() {
  await requireViewer('/desk/2026-06-12');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-12 · v2</span>
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
              <span className="dn-big">$63,584</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+3.26%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-12 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-12 00:05Z (snapshot pin)</td>
                  <td className="dn-flag">
                    fresh · 1-min · all derived values pinned to the 00:05Z anchor
                    row · live `t` field is BJ-local (UTC+8) so the 00:05Z anchor
                    row is <code>06-12 08:05</code>; this snapshot lands ~16h05m
                    after the 11JUN 08:00Z option settle and ~7h55m before the
                    12JUN 08:00Z settle
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-12 00:01Z scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    ~4-min stale vs the 00:05Z snapshot anchor · in-progress bars ·
                    archived to <code>/opt/desk-note/snapshots/2026-06-12-0008/</code>{' '}
                    at author time
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-12 00:02Z snapshot</td>
                  <td className="dn-flag">
                    pre-settle · ~3-min stale vs the snapshot anchor · Deribit idx
                    $63,769 vs live $63,584.00 ($185 above) · 984 inst (was 956 on
                    06-11, +28) · 12JUN 0.3DTE −5.60M settles at 08:00Z today (~8h
                    ahead) · ex-12JUN aggregate ≈ +15.3M still net positive
                    (dashboard-total shortcut; displayed rows are non-additive —
                    see dealer section) · archived to{' '}
                    <code>/opt/desk-note/snapshots/2026-06-12-0008/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-12 00:02Z
                  </td>
                  <td className="dn-flag">~3-min lag · 7d 1h bars · 22 assets · 167 rows · regime NORMAL (mean |r| 0.377) · archived to <code>/opt/desk-note/snapshots/2026-06-12-0008/</code></td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-11 22:16Z render</td>
                  <td className="dn-flag">
                    ~1h49m render lag · FRED Tier-1 firmed at the long end (10Y
                    +2bp to 4.55%, TIPS +1bp to 2.21%) · HY OAS +2bp to 2.80% (now
                    ABOVE the 2.78% re-grow gate) · DXY 100.08 (+0.14, back above
                    100) · Fed net liq $5.897T (+0.062T, fresh weekly add) ·
                    archived to{' '}
                    <code>/opt/desk-note/snapshots/2026-06-12-0008/</code>
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
                    W-SMA150 / W-SMA200 non-computable (129 subset weekly bars)
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
              <span className="dn-v bear">−1.44%</span>
              <span className="dn-src">live · snap −1.44% ann (short-pay live at the snap) · 24h mean ann +2.60% (was −2.41% on 06-11, FLIPPED back POSITIVE +5.01pt) · cap occupancy 1 / 1442 sampled rows at the +7.26% max (positive cap effectively empty) · neg-minute share 17.82% (257 / 1442, was 81.96% on 06-11, −64.14pt) · 24h trough −2.10% ann @ UTC 22:50 06-11 · 24h peak +7.26% ann @ UTC 13:48 06-11</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">mean −2.41% → +2.60% (+5.01pt) · snap −0.48% → −1.44%</span>
              <span className="dn-src">range −2.10% / +7.26% ann · funding NORMALIZED positive across the bounce (peak +7.26% as longs paid into the rally) and only re-flipped negative in the last leg · longest neg streak 245 sampled rows / ~4h04m wall-clock (UTC 20:01 06-11 → 00:05 06-12) running live into the snap — clears the ≥4h short-pay leg-2 gate AND funding is negative at the snap, so leg-2 is technically LIVE, but it is a thin recent re-flip, not a 24h-dominant negative like 06-11</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−1.21% (−1,201 BTC)</span>
              <span className="dn-src">live · OI SHRANK while price rallied +3.26% — a short-covering signature · base 99,456 (08:05 baseline) → 98,255 · 24h peak 103,488 @ UTC 13:22 06-11, trough 98,244 @ UTC 00:02 06-12 · SM short Δ −5,334, long Δ −258 over the 24h tape</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bull">61.34 / 38.66</span>
              <span className="dn-src">live_db `mkt_long_pct` · de-crowded −6.58pt vs 06-11&rsquo;s 67.92 (the crowded long peak finally bled off) · 24h range 61.32 / 68.01 · peak 68.01 @ UTC 00:16 06-11, trough 61.32 @ UTC 23:56 06-11 (retail kept leaving as price rose)</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−37.7k (net SHORT · FIRST cover after a 3-day press)</span>
              <span className="dn-src">live · long 13.53k − short 51.24k · short trough 51,237 @ UTC 00:01 06-12 (covering into the snap), short peak 57,068 @ UTC 02:01 06-11 · long peak 16,199 @ UTC 13:46 06-11, long trough 11,885 @ UTC 07:36 06-11 · net trough (most short) −43,231 @ UTC 01:11 06-11, net peak (least short) −37,705 @ UTC 00:01 06-12</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 06-11 note</span>
              <span className="dn-v bull">−42.7k → −37.7k (+5,031 cover)</span>
              <span className="dn-src">long −249, short −5,280 (rounded independently; net +5,031) · |Δ| / prior_net = 11.77% (5,030.69 / 42,736.18) · the FIRST cover after three consecutive short-add cuts — shorts bought back 5,280 BTC while longs barely moved</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">45.6% / 42.17%</span>
              <span className="dn-src">GEX median IV across 984 inst (was 48.6% / 956 on 06-11, −3.0pt vol cool) · IV/RV spread +3.43pt · 30D close-to-close RV 42.17% (30 returns / 31 closes; 29-return alt 41.54%)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v">−0.10% (spot) / +0.19% (idx) — straddling</span>
              <span className="dn-src">flip $63,650 (was $63,480, walked UP +$170) · vs live spot $63,584.00 (63,584.00 / 63,650 − 1 = −0.104%, fractionally below) / GEX file idx $63,769 (63,769 / 63,650 − 1 = +0.187%, fractionally above) — the two references STRADDLE the flip; file&rsquo;s own dist-to-flip reads +0.2% · aggregate GEX +9.7M (was −69.0M, FLIPPED net-long-gamma, a +$78.7M swing) · $60k crash-put LIGHTENED to −23.10M (was −38.65M)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The mean-revert cluster that fired underneath the 200W floor on
                06-11 resolved into the bounce — a +3.26% short-cover rally that
                reclaimed the floor and flipped the dealer book
              </span>. Spot prints{' '}
              <span className="dn-tag bull">+3.26% to $63,584</span> on a clean
              up-day (24h low <span className="dn-tag">$61,575</span> at the window
              open, high <span className="dn-tag">$63,886</span> @ UTC 19:34
              06-11). Four things turned at once.{' '}
              <span className="dn-signal">The 200W floor RECLAIMED</span>: the
              full-history W-MON 200-week SMA is{' '}
              <span className="dn-tag">$62,019</span> (200 closed bars ending
              06-08), live spot now sits{' '}
              <span className="dn-tag bull">+2.52% / +$1,565 above</span> it (was
              −0.59% below on 06-11), the 06-11 daily closed{' '}
              <span className="dn-tag bull">$63,598</span> — the first daily close
              back above the floor since 06-08 — and the in-progress 06-15 weekly
              bar prints <span className="dn-tag bull">$63,566 = +2.50% above</span>.
              <span className="dn-signal"> The dealer book FLIPPED net-long-gamma</span>:
              aggregate GEX went <span className="dn-tag bear">−69.0M</span> →{' '}
              <span className="dn-tag bull">+9.7M</span> (a $78.7M swing), the
              0-γ flip walked up{' '}
              <span className="dn-tag">$63,480 → $63,650</span>, and spot now{' '}
              <span className="dn-em">straddles it</span> (−0.10% on live spot,
              +0.19% on the Deribit idx). <span className="dn-signal">SM covered
              for the first time in the press</span>: net{' '}
              <span className="dn-tag bull">−42.7k → −37.7k (+5,031, shorts bought
              back 5,280 BTC)</span> on OI shrinking −1.21% — a textbook
              short-cover signature. And funding{' '}
              <span className="dn-em">normalized positive on the day</span> (24h
              mean ann <span className="dn-tag bull">−2.41% → +2.60%</span>),
              re-flipping negative only in the last ~4h. Against that bullish
              BTC-internal turn, two checks: the disciplined scout{' '}
              <span className="dn-em">never triggered</span> — the flip-reclaim leg
              that gated it on 06-11 has converged to the boundary but the move
              played out flat — and the{' '}
              <span className="dn-signal">macro-tail re-grow now FIRES on both
              legs</span> (HY OAS 2.80% &gt; 2.78% AND 10Y 4.55% &gt; 4.53%) just
              as BTC turns up. Slow MTF frames (8h–3d) are still below cloud, every
              MA is overhead, and the 15m/30m/1h carry top divergences. Desk stays
              flat: this is a short-cover bounce into the 200W reclaim and the
              flip, not yet a confirmed turn — the 06-15 weekly close is the binary.
            </p>

            <p>
              BTC prints <span className="dn-tag">$63,584</span> live,{' '}
              <span className="dn-tag bull">+3.26%</span> on 24h, off a window-open
              low of <span className="dn-tag">$61,574.52</span> @ UTC 00:05 06-11
              to a high of <span className="dn-tag">$63,885.99</span> @ UTC 19:34
              06-11 — a one-way climb, not a round-trip (the 06-11 tape was the
              round-trip; this 24h is the follow-through). 1h{' '}
              <span className="dn-tag bull">+0.28%</span>, 4h{' '}
              <span className="dn-tag bear">−0.07%</span> — the last few hours
              stalled at the flip/200W band.{' '}
              <span className="dn-signal">The load-bearing line is still the 200W
              floor, but the read has inverted to a reclaim-in-progress</span>:
              the W-MON full-history 200-week SMA is{' '}
              <span className="dn-tag">$62,019</span>, live spot is{' '}
              <span className="dn-tag bull">+2.52% above ($63,584)</span>, the
              06-11 daily close $63,598 closed above it, and the in-progress 06-15
              weekly bar prints $63,566 — also above. On the close-frequency read,{' '}
              <span className="dn-tag">8 / 154 weekly closes (5.19%)</span> have
              printed below their own contemporaneous 200W — the same low-base-rate
              location the tape has been testing, but the tape has now climbed back
              above the line intraweek.{' '}
              <span className="dn-em">
                The 200W is still the load-bearing line: the 06-15 weekly close
                back above $62,019 reclaims the floor on the only timeframe that
                matters for the cycle read — the in-progress bar leans that way at
                +2.50% above, but it is provisional until the 06-15 W-MON close. A
                close below would still confirm the first sustained weekly-200W
                break of the post-06-08 floor-watch lineage (last full-history
                below-own-200W close was 2023-10-09); the bounce makes that the
                lower-probability outcome, not an impossible one.
              </span>{' '}
              The daily-close lineage now shows the reclaim: 06-08 $63,058 (above),
              06-09 $61,695 (below), 06-10 $61,484 FINAL (below), 06-11 $63,598
              FINAL (back above), 06-12 in-progress $63,566 (above) — one
              finalized daily close back above the floor (06-11) plus the 06-12 bar
              in progress above, after the two-close 06-09/06-10 break below.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · SM COVERED for the first time in the press (+5,031, shorts −5,280) · OI shrank on a +3.26% up-day — short-cover signature · retail de-crowded −6.58pt · funding normalized positive intraday</span>
            </h2>

            <p>
              <span className="dn-signal">
                Smart money covered for the first time in the three-day press
              </span>. SM net is{' '}
              <span className="dn-tag bull">−37,705</span> vs the 06-11
              note&rsquo;s −42,736 — that is{' '}
              <span className="dn-em">+5,031 less short</span>{' '}
              (|−37,705 − (−42,736)| / 42,736 = 11.77%). The components: long_btc{' '}
              <span className="dn-tag">13,781 → 13,531 (−249)</span> and short_btc{' '}
              <span className="dn-tag bull">56,517 → 51,237 (−5,280)</span> — a
              near-pure short cover, longs barely moved (components rounded
              independently from the exact long 13,780.700 → 13,531.418 and short
              56,516.884 → 51,236.916; net Δ +5,030.686 — do not difference the
              rounded endpoints). After three consecutive short-add cuts (−2,740
              on 06-10, −1,338 on 06-11, both adding short), the book turned and
              bought back 5,280 BTC of short in this cut. Short_btc peaked{' '}
              <span className="dn-tag bear">57,068 @ 2026-06-11 02:01Z</span> early
              in the window, then bled all the way to{' '}
              <span className="dn-tag bull">51,237 @ UTC 00:01 06-12</span> (the
              snap is the cover low). SM net trough (most short){' '}
              <span className="dn-tag bear">−43,231 @ 2026-06-11 01:11Z</span>; net
              peak (least short) −37,705 right at the snap. Long_btc swung wide —
              trough 11,885 @ UTC 07:36 06-11, peak 16,199 @ UTC 13:46 06-11 — but
              netted back near flat. The three-day short-press has ended with a
              cover; the question is whether this is a one-cut squeeze or the start
              of a genuine unwind.
            </p>

            <p>
              <span className="dn-signal">
                OI shrank while price rallied — the cleanest short-cover tell of
                the cut
              </span>. OI Δ{' '}
              <span className="dn-tag bear">−1,201 BTC / −1.21%</span> over 24h
              (base 99,456 at the 08:05 baseline → 98,255), even as spot ran
              +3.26%; 24h peak 103,488 @ UTC 13:22 06-11 (positions built into the
              first leg up), trough 98,244 @ UTC 00:02 06-12 (deleveraged into the
              snap). <span className="dn-em">Price up + OI down = a covering rally,
              not a fresh-long stack</span> — consistent with the SM short cover
              above. Retail{' '}
              <span className="dn-tag bull">mkt_long_pct 61.34%</span> from 67.92%
              — a −6.58pt de-crowd, the crowded long peak finally bleeding off (24h
              range 61.32 / 68.01, trough 61.32 @ UTC 23:56 06-11 — retail kept
              leaving as price rose). The funding shift is the subtler tell:{' '}
              <span className="dn-em">the 24h mean flipped from −2.41% to +2.60%
              ann as longs paid into the rally (peak +7.26% @ UTC 13:48 06-11), and
              only the last ~4h re-flipped short-pay (snap −1.44% ann)</span>, cap
              occupancy{' '}
              <span className="dn-tag">1 / 1442 at the +7.26% max</span>,
              neg-minute share{' '}
              <span className="dn-tag bull">17.82% (257 / 1442)</span> down
              −64.14pt from 81.96%. The longest negative-pay streak was{' '}
              <span className="dn-tag">245 sampled rows / ~4h04m wall-clock (UTC
              20:01 06-11 → 00:05 06-12)</span>, which still RE-CLEARS the
              mean-revert scout&rsquo;s ≥4h short-pay leg-2 gate with funding
              negative at the snap —{' '}
              <span className="dn-em">but unlike 06-11&rsquo;s 24h-dominant
              negative (81.96% of minutes), this is a thin recent re-flip after a
              positive-funding day, so leg-2 is technically live but materially
              weaker as a mean-revert signal</span>. Funding normalizing as price
              rose is the squeeze playing out, not a fresh over-offered carry.
            </p>

            <p>
              Windowed flow is <em>a spot-led short-cover rally with the last hour
              levering on perps</em>. 24h: price{' '}
              <span className="dn-tag bull">+3.26%</span>, OI{' '}
              <span className="dn-tag bear">−1,201 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,228</span>{' '}
              <span className="dn-em">(reset-adjusted across the UTC 06:15 06-11
              cb_cvd reset: (2,866.4 − 1,581.7) + (29.9 − 86.6) = +1,228.0; raw
              unadjusted would read −1,551.8)</span>, futures CVD{' '}
              <span className="dn-tag">Δ +98</span> (via reset-robust taker-net
              sum), big-print{' '}
              <span className="dn-tag bull">+654 BTC / 580 prints</span>,
              taker-net <span className="dn-tag bull">+98</span> —{' '}
              <span className="dn-em">
                spot CVD strongly positive (+1,228) with futures CVD only mildly
                positive (+98) and OI shrinking is a spot-led-cover signature: the
                bounce off the $61,575 open was bought in spot and covered in
                perps, not levered long
              </span>. 4h (into snap): price{' '}
              <span className="dn-tag bear">−0.07%</span>, OI{' '}
              <span className="dn-tag bull">−991 BTC</span>, spot CVD{' '}
              <span className="dn-tag">Δ +34</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +252</span>, big-print{' '}
              <span className="dn-tag bear">−32 BTC / </span> taker-net{' '}
              <span className="dn-tag bull">+252</span> —{' '}
              <em>flat price with OI still coming off, futures bid — continued
              de-grossing at the flip</em>. 1h: price{' '}
              <span className="dn-tag bull">+0.28%</span>, OI{' '}
              <span className="dn-tag bull">−480 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −149</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +373</span>, big-print{' '}
              <span className="dn-tag bull">+15 BTC</span>, taker-net{' '}
              <span className="dn-tag bull">+373</span> —{' '}
              <em>futures buying with spot offering and OI still down — the last
              push was a perp-led cover into the flip</em>. Perp trades a{' '}
              <span className="dn-tag bear">−$65.75 discount</span> to spot at the
              snap (1h mean −$64.17, range −$110.28 / −$4.42; 4h mean −$61.21,
              range −$110.28 / +$19.58; 24h mean −$71.23, range −$339.74 / +$19.58
              — basis stayed mostly discount through the rally, the deep −$339.74
              print landed early near the low). 1-min aggressor skew snap{' '}
              <span className="dn-tag">−0.1</span> (1h mean +4.50, range −19.1 /
              +32.2) — neutral aggressor balance into the snap, the buy-reflex of
              the rally already spent.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · engine frames reclaimed ABOVE cloud (15m/30m/1h) with RSI lifting hard · slow frames (8h–3d) still below cloud but off the lows · 3d ⚡ TD9 BUY still active, 1M Buy 8→9? pending · top divergences on the intraday warn the bounce is stretched</span>
            </h2>

            <p>
              <span className="dn-signal">
                The engine frames reclaimed above cloud and RSI lifted across the
                board, but the slow frames are still below cloud
              </span>. The intraday set flipped above the Ichimoku cloud:{' '}
              <span className="dn-tag bull">1h above cloud 21b (RSI 63.0, water-up
              golden cross 7b)</span>, 30m above 48b (RSI 60.2), 15m above 27b (RSI
              57.4) — all three back above the 50 mid-line. The 4h sits{' '}
              <span className="dn-tag">in cloud 5b ($62.3k–$66.7k, RSI 56.3,
              water-down golden cross 9b)</span> — straddling. The slow end is
              still heavy but recovering: 8h{' '}
              <span className="dn-tag bear">below cloud 81b</span> (RSI 48.0, off
              36.4 on 06-11), 12h below 41b (RSI 40.8, off 29.3), 1d below 11b (RSI
              33.0, off the 24.3 deep-oversold low), 3d below 3b (RSI 35.3). The
              RSI lift is uniform: 1d 24.3 → 33.0, 12h 29.3 → 40.8, 8h 36.4 → 48.0,
              4h 44.5 → 56.3, 1h 46.7 → 63.0. The TD read{' '}
              <span className="dn-em">narrowed</span>: the{' '}
              <span className="dn-tag bull">3d ⚡ TD9 BUY is still active</span> and
              1M carries a Buy 8 → 9? pending, but the 1h that was pending Buy 8 →
              9? on 06-11 rolled to <span className="dn-tag">Sell 3</span> as the
              bounce consumed the count — the mid-frames (4h Sell 7, 8h Sell 5, 12h
              Sell 3, 1d Sell 4) all flipped to sell setups on the up-move. Header
              alerts flag <span className="dn-tag bear">top divergences on 15m /
              30m / 1h</span> and bottom divergences on 15m / 1h.{' '}
              <span className="dn-em">
                Read straight: the engine has confirmed the bounce (intraday above
                cloud, RSI reclaimed), the slow frames are oversold-recovering but
                not yet turned (8h–3d still below cloud), the lone structural buy
                is the 3d TD9 (the broadened cluster of 06-11 narrowed as the
                bounce played out the intraday counts), and the fresh top
                divergences on the fast frames warn the bounce is short-term
                stretched into the flip. This is a confirmed relief bounce on the
                engine inside a slow-frame breakdown that has not yet turned.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num bull">57.4</td><td className="neut">death (water-up) 14b</td><td className="bull">above ↓62.9k 27b</td><td>Sell 3</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num bull">60.2</td><td className="neut">death (water-up) 2b</td><td className="bull">above ↓62.5k 48b</td><td>Sell 2</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num bull">63.0</td><td className="bull">golden (water-up) 7b</td><td className="bull">above ↓62.3k 21b</td><td>Sell 3</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num bull">56.3</td><td className="bull">golden (water-dn) 9b</td><td className="neut">in cloud 62.3–66.7k 5b</td><td>Sell 7</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>8h</td><td className="num">48.0</td><td className="bull">golden (water-dn) 14b</td><td className="bear">below ↑70.7k 81b</td><td>Sell 5</td><td>BEAR hid</td></tr>
                <tr><td>12h</td><td className="num bull">40.8</td><td className="bull">golden (water-dn) 7b</td><td className="bear">below ↑75.4k 41b</td><td>Sell 3</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num bull">33.0</td><td className="neut">—</td><td className="bear">below ↑73.9k 11b</td><td>Sell 4</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num bull">35.3</td><td className="neut">death (water-up) 5b</td><td className="bear">below ↑74.2k 3b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>1w</td><td className="num bull">34.6</td><td className="neut">—</td><td className="bear">below ↑100.3k 19b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">42.7</td><td className="neut">— (DIF above water)</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={6} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (rolling latest file;
                    archived to{' '}
                    <code>/opt/desk-note/snapshots/2026-06-12-0008/</code> at
                    author time). Header alerts:{' '}
                    <em>3d ⚡ TD9 BUY active</em>, <em>1M TD Buy 8 → 9? pending</em>,{' '}
                    <em>top divergences 15m / 30m / 1h</em>,{' '}
                    <em>bottom divergences 15m / 1h</em>. Net read:{' '}
                    <em>higher-TF bearish · short-term bounce (2 bull / 5 bear / 3
                    neutral of 10 frames)</em>. Scan spot $63,569, 24h +3.28%
                    (00:01Z scan; the live-tape header at 00:05Z shows +3.26% on
                    the same 24h window — the ~4-min gap accounts for the
                    difference), 24h H/L $63,915 / $61,536, qVol $12.22B. Closes
                    are in-progress bars; treat every value as provisional until
                    each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is still uniformly overhead — the bounce closed the gap
              but reclaimed no daily MA. Spot $63,584 sits below every daily MA:
              closest overhead is{' '}
              <span className="dn-tag bear">D-EMA20 $67,134 (−5.29%)</span>, then{' '}
              <span className="dn-tag bear">D-SMA20 $68,191 (−6.76%)</span>,{' '}
              <span className="dn-tag bear">D-EMA50 $71,354 (−10.89%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $72,713 (−12.55%, cycle
              anchor)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $73,779 (−13.82%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $73,935 (−14.00%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $74,434 (−14.58%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $76,452 (−16.83%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $77,883 (−18.36%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $79,073 (−19.59%)</span>. The
              cycle anchor D-SMA100 is −12.55% overhead (was −15.30% on 06-11 — the
              bounce closed ~2.8pt of the gap but did not reclaim it). The subset
              weekly ladder is equally overhead: W-SMA20 $72,104 (−11.82%), W-EMA20
              $75,367 (−15.63%), W-EMA100 $82,691 (−23.11%), W-EMA50 $83,400
              (−23.76%), W-SMA100 $88,534 (−28.18%), W-SMA50 $91,818 (−30.75%);
              subset W-EMA150 $78,097 (−18.58% seed), W-EMA200 $73,768 (−13.81%
              seed); subset W-SMA150 / W-SMA200 non-computable at 129 subset weekly
              bars.{' '}
              <span className="dn-signal">
                The structural line that turned is the full-history 200W floor
              </span>: full-history W-MON 200-week SMA{' '}
              <span className="dn-tag">$62,019</span> (200 closed bars ending
              06-08), live spot{' '}
              <span className="dn-tag bull">+2.52% / +$1,565 above</span> (was
              −0.59% below on 06-11), the in-progress 06-15 weekly bar 1-min close{' '}
              <span className="dn-tag bull">$63,566 (+2.50% above)</span>, and the
              last closed weekly (06-08) $63,058 now history at +1.68% above.
              Weekly-close-below-own-200W frequency 8 / 154 = 5.19%.{' '}
              <span className="dn-em">
                MAs anchored to the btcusdt_1m parquet (subset ladder from the
                2024–2026 window per desk policy; 200W from full-history W-MON
                resample, 354 weekly bars); offsets recomputed against live spot
                $63,584.00 (parquet anchor row 00:06Z close $63,566.10, gap
                $17.90). The <code>weekly_200sma.json</code> precompute is ABSENT,
                so the 200W is computed directly from the parquet and the JSON
                percentile / last-event fields are unavailable (not fabricated).
                Daily closes: 06-08 $63,058 (above), 06-09 $61,695 (below), 06-10
                $61,484 FINAL (below), 06-11 $63,598 FINAL (back above), 06-12
                in-progress $63,566 (above) — one finalized daily close back above
                the 200W (06-11) plus the 06-12 bar in progress above, after the
                two-close 06-09/06-10 break below. 30D RV 42.17%.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book FLIPPED net-long-gamma aggregate +9.7M (was −69.0M) · flip walked UP to $63,650 (spot STRADDLES it) · $60k crash-put LIGHTENED again to −23.10M (2nd consecutive ease) · 12JUN −5.60M settles in ~8h · 26JUN −19.81M the heaviest negative</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book flipped its gamma sign across the bounce — from
                deep short-gamma to marginally net-long-gamma
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+9.7M / 1%</span> (was −69.0M on 06-11
              — a $78.7M positive swing); the book is now net-long-gamma
              (dampening) rather than destabilizing. The 0-γ flip walked{' '}
              <span className="dn-tag">$63,480 → $63,650 (+$170)</span>, and spot
              $63,584{' '}
              <span className="dn-em">straddles it</span>: on spot-denominated math
              spot is −0.10% below (63,584.00 / 63,650 − 1 = −0.104%), while the
              GEX file&rsquo;s own dist-to-flip reads +0.2% off its Deribit-index
              $63,769 ($185 above live spot), which is{' '}
              <span className="dn-tag bull">+0.19%</span> (63,769 / 63,650 − 1 =
              +0.187%) — <span className="dn-em">the two references straddle the
              flip, opposite signs by a fraction of a percent</span>; the flip
              sits between live spot and the Deribit idx. The wall map is still
              led by the $60k crash-put but it eased for a second straight cut:{' '}
              <span className="dn-tag bear">$60k −23.10M</span> (LIGHTENED from
              −38.65M, +$15.55M — the magnet is unwinding after the 24h held above
              it),{' '}
              <span className="dn-tag bull">$80k +11.25M</span> (heaviest positive
              wall),{' '}
              <span className="dn-tag bear">$62k −9.56M</span>,{' '}
              <span className="dn-tag bear">$64k −9.53M</span>,{' '}
              <span className="dn-tag bear">$55k −7.01M</span>,{' '}
              <span className="dn-tag bull">$70k +6.49M</span>,{' '}
              <span className="dn-tag bull">$67k +6.24M</span>,{' '}
              <span className="dn-tag bull">$63.5k +5.58M</span>,{' '}
              <span className="dn-tag bull">$64.5k +5.57M</span>,{' '}
              <span className="dn-tag bear">$50k −5.45M</span>.{' '}
              <span className="dn-em">
                The $60k strike has now halved its negative weight in two cuts
                (−47.86M → −38.65M → −23.10M) as price climbed away from it; the
                near-spot strikes $63.5k / $64.5k carry small positive walls that
                bracket the flip, while $62k / $64k stay modestly negative — a
                roughly balanced book around spot, consistent with the +9.7M
                net-long-gamma aggregate.
              </span>{' '}
              By expiry the strip is mixed, not uniformly negative as it was on
              06-11:{' '}
              <span className="dn-tag bear">12JUN 0.3 −5.60M</span> settles at
              08:00Z today (~8h ahead), 13JUN 1.3 +3.59M, 14JUN 2.3 +0.96M, 15JUN
              3.3 +1.49M, 19JUN 7.3 +2.50M,{' '}
              <span className="dn-tag bear">26JUN 14.3 −19.81M</span> (monthly,
              the heaviest negative), 3JUL 21.3 −0.06M,{' '}
              <span className="dn-tag bull">31JUL 49.3 +11.60M</span>, 28AUG 77.3
              +2.37M, 25SEP 105.3 +1.79M, 25DEC 196.3 +3.85M, 26MAR27 287.3 +0.59M.
              Post-12JUN settle, the ex-12JUN aggregate is roughly +9.7M −
              (−5.60M) = +15.3M, more net positive once the front negative chunk
              clears.{' '}
              <span className="dn-em">
                Caveat: this aggregate shortcut uses the dashboard total (+9.7M);
                the rounded displayed expiry rows above sum to +3.27M, so the
                by-expiry list and the dashboard total are internally non-additive
                by ~6.4M — the +9.7M dashboard total is authoritative, do not
                reconstruct the aggregate from the row list alone.
              </span>{' '}
              <span className="dn-em">
                The 26JUN −19.81M monthly is the one heavy negative chunk left in
                the strip; if price holds above the flip into late June it amplifies
                a fade, but at +9.7M net the book is no longer the down-leg
                amplifier it was at −69.0M.
              </span>
            </p>

            <p>
              IV median across 984 instruments is{' '}
              <span className="dn-tag">45.6%</span> (was 48.6% / 956 instruments on
              06-11 — a −3.0pt vol cool, +28 instruments) against 30D
              close-to-close RV of <span className="dn-tag">42.17%</span> —
              chain-level richness{' '}
              <span className="dn-tag">+3.43pt</span> (narrowed from +9.01pt on
              06-11 as realized vol caught up to implied through the bounce). A
              chain-median across N instruments, <span className="dn-em">not</span>{' '}
              a tradable spread; expiry-/strike-level vega, skew and term structure
              remain not loaded; the vol read stays framework-only. RV methodology:
              30D close-to-close, logret.std × √365 × 100 on the last 30 daily log
              returns (= 31 consecutive daily closes) anchored to the parquet last
              bar (window 2026-05-13 → 06-12); the last-29-returns / 30-closes alt
              reads 41.54%, the 42.17% page value comes from 30 returns. IV cooling
              to 45.6% against realized 42.17% is a thin premium — the vol bid that
              held through the breakdown is bleeding off as the bounce confirms,
              consistent with the gamma-flip to dampening.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Tier-1 FIRMED at the long end (10Y +2bp to 4.55%, TIPS +1bp to 2.21%) · reclaim-long rates filter (10Y &lt; 4.55%) now AT the boundary (the 06-11 re-clear gone) · macro-tail re-grow BOTH legs now FIRE (HY OAS 2.80% &gt; 2.78% AND 10Y 4.55% &gt; 4.53%) · cross-asset NORMAL with BTC the strongest risk asset (+0.32% 7d)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape firmed at the long end this cut — rates and the
                dollar both backed up, un-clearing the reclaim-long filter and
                firing both macro-tail re-grow legs
              </span>. Dashboard render is 2026-06-11 22:16Z, ~1h49m before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bear">4.55% (+2.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.05</span>, episodic z{' '}
              <span className="dn-tag">+0.85</span> — EXTREME RISK-OFF on the z,
              and the reclaim-long rates filter (10Y &lt; 4.55%) is now{' '}
              <span className="dn-tag bear">AT the 4.55% boundary</span> (the
              06-11 re-clear at 4.53% is gone; 4.55% is not &lt; 4.55%, so the
              clean clear lapsed). 10Y TIPS real{' '}
              <span className="dn-tag bear">2.21% (+1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.54</span>, episodic z{' '}
              <span className="dn-tag bear">+1.52</span> — EXTREME RISK-OFF. 5Y5Y
              BE inflation{' '}
              <span className="dn-tag">2.24% (+2.0bp)</span>. HY OAS{' '}
              <span className="dn-tag bear">2.80% (+2.0bp)</span>, regime z{' '}
              <span className="dn-tag">−0.71</span>, episodic z{' '}
              <span className="dn-tag">+0.83</span> — still loose, but now{' '}
              <span className="dn-em">ABOVE the 2.78% re-grow gate</span> (was AT
              the gate on 06-11). MOVE bond vol{' '}
              <span className="dn-tag">73.9 (−3.08)</span> — neutral, unchanged
              from the 06-11 render. The offsets firmed: DXY{' '}
              <span className="dn-tag bear">100.08 (+0.14)</span>, regime z +1.75,
              episodic z +1.64 — RISK-OFF, back above 100; Fed net liquidity{' '}
              <span className="dn-tag bull">$5.897T (+0.062T)</span>, episodic z
              +2.47 — a fresh weekly print ADDING liquidity. USD/JPY{' '}
              <span className="dn-tag">160.52 (+0.13)</span>; US-JP 10Y spread{' '}
              <span className="dn-tag">2.03% (+2.0bp)</span>, tight; USD/CNY
              6.7771; 10Y breakeven 2.34% (+1.0bp); NFCI −0.506 neutral.{' '}
              <span className="dn-em">
                Net: the long end firmed into the BTC bounce, the reclaim-long
                rates filter lapsed back to its 4.55% boundary, and — the key
                condition change — the macro-tail re-grow now FIRES on BOTH legs:
                HY OAS firmed to 2.80% (cleanly &gt; 2.78%) AND 10Y firmed to 4.55%
                (cleanly &gt; 4.53%). The framework requires clean prints above
                both legs and now has them. That arms a put-spread re-grow into the
                19JUN / 26JUN forward exactly as BTC turns up internally — the
                macro tape and the BTC-internal tape are pulling opposite
                directions this cut.
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
                <tr><td>US 10Y nominal</td><td className="num">4.55%</td><td className="num bear">+2.0bp</td><td className="num bear">+2.05</td><td className="num">+0.85</td><td className="bear">EXTREME RISK-OFF z · filter AT boundary</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.21%</td><td className="num bear">+1.0bp</td><td className="num bear">+2.54</td><td className="num bear">+1.52</td><td className="bear">EXTREME RISK-OFF z</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.24%</td><td className="num bear">+2.0bp</td><td className="num">+0.09</td><td className="num">−0.76</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.80%</td><td className="num bear">+2.0bp</td><td className="num">−0.71</td><td className="num">+0.83</td><td className="bear">loose · ABOVE the 2.78% re-grow gate</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.506</td><td className="num">0.00</td><td className="num">+0.19</td><td className="num">−0.73</td><td className="neut">neutral</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">73.9</td><td className="num">−3.08</td><td className="num">−0.19</td><td className="num">−0.12</td><td className="neut">neutral · unchanged render</td></tr>
                <tr><td>DXY</td><td className="num">100.08</td><td className="num bear">+0.14</td><td className="num bear">+1.75</td><td className="num bear">+1.64</td><td className="bear">RISK-OFF · back above 100</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.897T</td><td className="num bull">+0.062T</td><td className="num">+0.82</td><td className="num bull">+2.47</td><td className="bull">fresh weekly add</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.52</td><td className="num">+0.13</td><td className="num bear">+1.38</td><td className="num">+1.47</td><td className="neut">flat</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.03%</td><td className="num bear">+2.0bp</td><td className="num">−0.61</td><td className="num">+0.85</td><td className="neut">tight</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7771</td><td className="num">+0.00</td><td className="num bull">−1.70</td><td className="num">−0.73</td><td className="neut">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp (monthly)</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:02Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.377</span>{' '}
              <span className="dn-signal">regime NORMAL</span> (was 0.318 on
              06-11, firmed +0.059, holds in the NORMAL band) — a broad correlated
              read. BTC&rsquo;s top ties: TSLA{' '}
              <span className="dn-tag">+0.457</span>, SILVER{' '}
              <span className="dn-tag">+0.429</span>, NVDA{' '}
              <span className="dn-tag">+0.424</span>, SP500{' '}
              <span className="dn-tag">+0.412</span>, NQ{' '}
              <span className="dn-tag">+0.405</span>, COPPER{' '}
              <span className="dn-tag">+0.403</span>, GOLD{' '}
              <span className="dn-tag">+0.402</span>, PLAT{' '}
              <span className="dn-tag">+0.393</span>, META{' '}
              <span className="dn-tag">+0.393</span>, MSFT{' '}
              <span className="dn-tag">+0.376</span>.{' '}
              <span className="dn-signal">The shift is BTC&rsquo;s relative
              performance</span>: 7d{' '}
              <span className="dn-tag bull">BTC +0.32%</span> is now the strongest
              risk asset on the board — only JP225 +0.07% and JPY +0.11% are also
              green; everything else is red. BTC OUTPERFORMS NQ{' '}
              <span className="dn-tag bear">−1.89%</span> by +2.21pt (was a +4.08pt
              outperformance on 06-11; BTC has now gone outright positive while NQ
              held its loss as the 7d window rolled forward over the bounce). The
              rest of the 7d sweep: SP500{' '}
              <span className="dn-tag bear">−1.88%</span>, NVDA −4.13%, META −7.73%,
              AAPL −4.80%, MSFT −7.66%, GOOGL −1.88%, AMZN −3.97%, TSLA −3.42%.
              Metals stayed hit: SILVER{' '}
              <span className="dn-tag bear">−8.04%</span>, PLAT{' '}
              <span className="dn-tag bear">−8.07%</span>, URNM{' '}
              <span className="dn-tag bear">−9.61%</span>, GOLD −5.41%, PALL −1.66%,
              COPPER −0.47%. Energy: CL −8.22%, BRENT −7.30%, NGAS −6.56%. FX: EUR
              −0.35%, JPY +0.11%.{' '}
              <span className="dn-em">
                BTC +0.32% vs NQ −1.89% is a +2.21pt outperformance and BTC is now
                the single strongest risk asset in a still-NORMAL broad risk-off —
                TradFi (tech, metals, energy) is uniformly red on 7d while BTC
                bounced back to flat. The correlation firmed into the NORMAL band,
                so this is BTC leading inside a market-wide de-risking, not
                decoupling from it; the 7d window now captures the bounce, which
                is what flipped BTC&rsquo;s sign positive.
              </span>{' '}
              JGB monthly 2.52% stale — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 200W cycle-floor watch (primary, now RECLAIMED intraweek, 06-15 close the binary) · mean-revert long scout — flip leg converged to the boundary but the bounce played out flat (un-triggered) · macro tail re-grow BOTH legs now FIRE · squeeze-cycle hostile-2 watchlist (press ended on a cover) · desk flat</span>
            </h2>

            <p>
              <span className="dn-signal">
                The desk is flat; the mean-revert bounce the 06-11 note flagged
                underneath the floor played out — and the disciplined scout never
                triggered
              </span>. The 06-11 note carried no live position; nothing was opened
              into this snap, so the +3.26% bounce was watched, not traded. That
              is the honest scorecard: the 06-11 scout was gated on a 1h close
              above the flip ($63,480), which was −2.88% overhead at the time; the
              flip leg was the binding holdout, the move ran before it cleared, and
              the flip has since walked up to $63,650 with spot straddling it. The
              floor watch resolved bullish intraweek (spot +2.52% above $62,019,
              the 06-11 daily close $63,598 above, the in-progress 06-15 weekly bar
              $63,566 above), the dealer book flipped to +9.7M net-long-gamma, SM
              covered, funding normalized, and BTC is the strongest risk asset on
              7d. <em>But the move happened without a confirmed entry, every MA is
              still overhead, the slow MTF frames are still below cloud, the
              intraday carries top divergences, and the macro-tail re-grow now
              fires on both legs into the bounce.</em> No chase: the scout is a
              confirmation trade, not an anticipation trade, and the confirmation
              (a clean 1h close above the flip with the 200W reclaimed on a weekly
              close) is right at the boundary but not yet stamped. Wait for the
              06-15 weekly close and a clean flip reclaim before committing size.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch · RECLAIMED intraweek: spot +2.52% above, 06-11 daily close $63,598 above, in-progress 06-15 weekly bar $63,566 above</span>
              <div className="dn-trade-name">
                200W cycle-floor watch — reclaimed intraweek: spot +2.52% above $62,019, 06-11 daily close $63,598 above, in-progress 06-15 weekly bar $63,566 above; the 06-15 weekly close is the binary
              </div>
              <div className="dn-thesis">
                The 06-09/06-10 break put two daily closes below the floor; the
                06-11 tape took it back. Spot +3.26% to $63,584 climbed +2.52%
                above the 200W $62,019, the 06-11 daily close $63,598 was the first
                daily close back above the floor since 06-08, and the in-progress
                06-15 W-MON weekly bar prints $63,566 = +2.50% above. The
                full-history 200-week SMA is $62,019 (200 closed bars ending
                06-08); the weekly-close-below-own-200W frequency is 8 / 154 =
                5.19% — a low-base-rate location the tape has now climbed back out
                of intraweek. The single resolving event is still the 06-15 weekly
                close: a close above $62,019 confirms the reclaim (a one-week
                dip-and-reclaim of the post-06-08 lineage), a close below would
                still confirm the first sustained weekly-200W break of the current
                post-06-08 floor-watch lineage — the bounce makes the reclaim the
                higher-probability outcome but does not stamp it. Status:{' '}
                <em>watch open, reclaim in progress, no position</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor (full-history W-MON)</span><span className="dn-lvl-v">$62,019 · 200 closed bars ending 06-08 · live spot +2.52% / +$1,565 above</span></div>
                <div><span className="dn-lvl-k">in-progress weekly (06-15)</span><span className="dn-lvl-v bull">1m-close $63,566 = +2.50% / +$1,547 above the 200W — provisional until the 06-15 W-MON close</span></div>
                <div><span className="dn-lvl-k">reclaim confirmation (bullish)</span><span className="dn-lvl-v bull">06-15 weekly close &gt; $62,019 — confirms the floor reclaim, a one-week dip-and-reclaim of the post-06-08 lineage; re-opens the scout-long case on a confirmed turn</span></div>
                <div><span className="dn-lvl-k">break confirmation (bearish)</span><span className="dn-lvl-v bear">06-15 weekly close &lt; $62,019 — first weekly close below the 200W in the current post-06-08 floor-watch lineage (last full-history below-own-200W close was 2023-10-09); now the lower-probability path after the intraweek reclaim</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the 200W is a weekly-close line, not
                an intraday level — spot +2.52% above and the in-progress bar
                +2.50% above do not resolve it; only the 06-15 W-MON close does.
                One finalized daily close (06-11 $63,598) plus the 06-12
                in-progress bar ($63,566) sit above the floor; treat the next weekly close as the
                binary, and read the 12JUN 08:00Z settle and the daily-close
                lineage as the interim tells. The intraweek reclaim shifts the
                odds, it does not close the trade.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · NON-ACTIONABLE · flip leg converged to the boundary · cluster narrowed · bounce played out un-triggered</span>
              <div className="dn-trade-name">
                Mean-revert long scout — un-triggered: the bounce ran before the flip leg cleared; flip $63,650 now straddled (−0.10% spot / +0.19% idx), TD9 cluster narrowed to the lone 3d, funding leg-2 live but weaker
              </div>
              <div className="dn-thesis">
                The scout is a three-leg gate: (1) a TD9-BUY cluster, (2) a funding
                short-pay ≥4h contiguous streak, (3) a 1h close above the 0-γ flip.
                On 06-11 legs 1 and 2 advanced but leg 3 was the binding holdout at
                −2.88% below the flip; the disciplined posture was to wait for the
                flip reclaim. The bounce then ran +3.26% — through the flip zone —
                without the scout ever being actionable. On this snap the legs read:
                Leg 1 NARROWED — the 3d ⚡ TD9 BUY is still active but the 1h that
                was pending Buy 8 → 9? on 06-11 rolled to Sell 3 as the bounce
                consumed the count; only 1M (Buy 8 → 9?) remains pending, so the
                cluster thinned rather than confirmed. Leg 2 is still LIVE on the
                ≥4h gate (245-row / ~4h04m negative streak into the snap, funding
                −1.44% at the snap) but materially weaker — the 24h funding mean
                flipped positive (+2.60%) as longs paid into the rally, so this is
                a thin recent re-flip, not a 24h-dominant short-pay. Leg 3 has
                converged from −2.88% to the boundary: spot is −0.10% below the
                flip on the live read, +0.19% above on the idx — straddling, not
                cleanly cleared. Net: the legs converged to the trigger zone but
                the move that the scout was designed to catch already happened, and
                a clean 1h close above $63,650 with the cluster intact is the
                stamp that is still missing. Status:{' '}
                <em>non-actionable, un-triggered, watch the flip close</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">leg 1 · TD9 cluster</span><span className="dn-lvl-v">3d ⚡ TD9 BUY active · 1M Buy 8 → 9? pending · the 06-11 1h-pending rolled to Sell 3 — cluster NARROWED, not confirmed</span></div>
                <div><span className="dn-lvl-k">leg 2 · funding short-pay ≥4h</span><span className="dn-lvl-v">LIVE on the gate (245-row / ~4h04m streak, negative at snap) but WEAKER — 24h mean flipped positive (+2.60%), a thin recent re-flip</span></div>
                <div><span className="dn-lvl-k">leg 3 · 1h close &gt; flip</span><span className="dn-lvl-v">flip $63,650, spot straddling (−0.10% spot / +0.19% idx) — converged to the boundary, not yet a clean close above</span></div>
                <div><span className="dn-lvl-k">trigger (all 3 clean)</span><span className="dn-lvl-v bull">confirmed TD9 BUY cluster AND live funding short-pay ≥4h AND 1h close &gt; $63,650 — then scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">stop / size</span><span className="dn-lvl-v bear">1h close &lt; $61,484 (06-10 daily close / 200W band) · size 0.2R · take half at the cycle anchor D-SMA100 $72,713</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R sketch (illustrative, not a live order):</b> a trigger on a
                clean 1h close above the flip $63,650 against a $61,484 stop is
                ~$2,166 risk; the first target at the cycle anchor $72,713 is
                ~$9,063 ≈ 4.2:1 — attractive, but the trigger requires the clean
                flip close that is not yet stamped and the cluster has narrowed to
                the lone 3d. <b>Hard rule:</b> do not chase the bounce above the
                flip after a +3.26% un-traded move — the scout is a confirmation
                trade, and chasing into a still-overhead MA stack with the
                intraday carrying top divergences is exactly the anticipation the
                framework forbids. The honest read is the desk watched a clean
                mean-revert bounce go by without an actionable entry; wait for the
                flip close AND the 06-15 weekly reclaim, do not retrofit an entry.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — BOTH legs now FIRE</span>
              <div className="dn-trade-name">
                Macro tail put-spread — closed; re-grow gates NOW FIRE on both legs: HY OAS 2.80% &gt; 2.78% AND 10Y 4.55% &gt; 4.53% (clean prints above both); reclaim-long rates filter (10Y &lt; 4.55%) lapsed to its boundary
              </div>
              <div className="dn-thesis">
                The macro tail put-spread is closed with no residual. On 06-11 both
                re-grow legs sat exactly on their boundaries (10Y at 4.53%, HY OAS
                at 2.78%); this cut both firmed cleanly above them — HY OAS +2bp to
                2.80% (&gt; 2.78%) and 10Y +2bp to 4.55% (&gt; 4.53%). The framework
                requires clean prints above BOTH legs and now has them, so the
                macro-tail re-grow is armed for the first time in the lineage. At
                the same time the reclaim-long rates filter (10Y &lt; 4.55%) lapsed
                back to its 4.55% boundary (the 06-11 re-clear at 4.53% is gone).
                The tension is explicit: the macro tail says re-grow a downside
                hedge into the 19JUN / 26JUN forward exactly as the BTC-internal
                tape (short cover, gamma flip, 200W reclaim) turns up. A re-grow
                would lean against the BTC bounce, which is why the desk does not
                fire it mechanically on the gate — the macro legs cleared, but the
                BTC-internal structure that would make a fresh tail pay (a
                short-gamma dealer book, a press extending) has flipped the other
                way (book now +9.7M net-long-gamma).
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed · no residual · re-grow gate FIRED but held discretionary against the BTC-internal turn</span></div>
                <div><span className="dn-lvl-k">re-grow leg A (FIRED)</span><span className="dn-lvl-v bear">10Y &gt; 4.53% close — FIRED at 4.55%, cleanly above</span></div>
                <div><span className="dn-lvl-k">re-grow leg B (FIRED)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close — FIRED at 2.80%, cleanly above the gate</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v">10Y &lt; 4.55% close — LAPSED to the boundary at 4.55% (the 06-11 re-clear gone)</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as
                the levels drift, not backtested breakpoints — both now print
                cleanly above their gates for the first time, but the BTC-internal
                backdrop that would make a fresh tail carry a dealer-amplifier
                tailwind has reversed (the book flipped from −69.0M short-gamma to
                +9.7M net-long-gamma). A mechanical re-grow into a net-long-gamma
                book and a 200W-reclaiming tape would be a poor tail; the desk
                logs the gate as FIRED but does not re-grow against the BTC turn.
                Re-arm the tail only if the BTC-internal structure rolls back over
                (book re-deepens short-gamma below a falling flip AND the 200W
                fails on the 06-15 close) — then the fired macro legs would have a
                BTC-internal confirmation to lean on.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · the 3-day short-press ENDED on a cover (+5,031), no discrete ±3k single-minute step</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — watchlist: the three-day short-press ended with the first cover (+5,031); no discrete Δnet ≥ +3k cover step or ≤ −3k re-stack printed — the cover was gradual
              </div>
              <div className="dn-thesis">
                The squeeze-cycle framework runs as a watchlist with no calendar
                prior (the cadence was falsified late May). The three-day short
                press (−2,740 on 06-10, −1,338 on 06-11) ended this cut with the
                first cover: SM bought back 5,280 BTC of short (+5,031 net) on a
                +3.26% rally with OI shrinking. The cover was gradual, not a single
                discrete step — the largest single-minute SM net step was{' '}
                <span className="dn-tag bear">−1,859 @ UTC 07:31 06-11 (Δlong
                −1,874, Δshort −15)</span>, a long flush below the −3k re-stack
                signal, and the largest single-minute cover step was{' '}
                <span className="dn-tag bull">+737 @ UTC 11:01 06-11 (Δlong +214,
                Δshort −523)</span>, below the +3k cover signal. Neither a
                hostile-2 re-stack nor a discrete cover ignition printed; the press
                simply turned and bled out over the window. Read any fresh Δnet ≤
                −3k single-minute step (Δshort &gt; 0 + Δlong &lt; 0 same minute) as
                a re-stack hostile-2 signal in itself, and any Δnet ≥ +3k cover step
                as its inverse.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">watchlist · no calendar prior · the 3-day press ended on a gradual cover (+5,031), no discrete ±3k step</span></div>
                <div><span className="dn-lvl-k">24h SM shape</span><span className="dn-lvl-v bull">short Δ −5,280, long Δ −249, net +5,031 cover (vs the 06-11 note; rounded independently) · largest re-stack step −1,859 @ UTC 07:31 (below −3k) · largest cover step +737 @ UTC 11:01 (below +3k) · short trough 51,237 @ UTC 00:01 (covering into the snap)</span></div>
                <div><span className="dn-lvl-k">forward gating</span><span className="dn-lvl-v">fresh Δnet ≤ −3k single-minute = re-stack hostile-2 signal; Δnet ≥ +3k = cover ignition — no time prior either way</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the cadence is dead (falsified late
                May), so treat the tape, not the clock. The three-day press ending
                on a cover with OI shrinking and funding normalizing is the
                squeeze unwinding, but the cover came gradually rather than on a
                discrete ignition step — a quieter unwind, not a violent squeeze.
                A fresh discrete Δnet ≤ −3k below a re-failing flip would re-arm the
                short-press read; a Δnet ≥ +3k cover step above the flip would
                confirm a violent unwind. Neither printed; watch the next discrete
                step for which way the book commits.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the 200W floor RECLAIMED intraweek (06-15 close the binary, now leaning reclaim) · the mean-revert bounce played out un-traded · dealer book flipped +9.7M net-long-gamma · macro-tail re-grow BOTH legs now fire into the BTC turn · desk flat</span>
            </h2>

            <p>
              Of the 06-11 conditions: the 200W cycle-floor RECLAIMED intraweek
              (06-11 daily close $63,598 above, in-progress 06-15 weekly bar
              $63,566 above, spot +2.52% above); the dealer-flip reclaim
              effectively HAPPENED (the book flipped to +9.7M net-long-gamma and
              spot straddles the $63,650 flip), though not as the scout-triggering
              clean 1h close; the mean-revert scout flip leg CONVERGED to the
              boundary but the bounce ran un-triggered; the macro re-grow legs both
              FIRED (10Y firmed to 4.55%, HY OAS to 2.80%) and the reclaim-long
              filter LAPSED to its 4.55% boundary; SM COVERED for the first time in
              the press (+5,031). <em>The single structural read is a short-cover
              mean-revert bounce that reclaimed the floor and flipped the dealer
              book — but it ran without a confirmed entry, every MA is still
              overhead, the slow MTF frames are still below cloud, and the
              macro-tail re-grow now fires bearish into the BTC turn.</em> The
              conditions today re-set around the intraweek floor reclaim, the
              un-triggered-but-converged scout, and a macro tail whose gates fired
              against the BTC-internal turn:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>200W weekly-close reclaim (bullish)</td><td className="bull">06-15 W-MON close &gt; $62,019 — in-progress bar +2.50% above</td><td>confirms the floor reclaim, a one-week dip-and-reclaim of the post-06-08 lineage; re-opens the scout-long case on a confirmed turn</td></tr>
                <tr><td>200W weekly-close break (bearish)</td><td className="bear">06-15 W-MON close &lt; $62,019</td><td>first weekly close below the 200W in the current post-06-08 floor-watch lineage (last full-history below-own-200W close was 2023-10-09) — now the lower-probability path after the intraweek reclaim; escalate the cycle-regime read if it prints</td></tr>
                <tr><td>12JUN expiry settle (today 08:00Z, ~8h ahead)</td><td>−5.60M front chunk clears; ex-12JUN aggregate ≈ +15.3M (more net positive)</td><td>read the settle as an interim tell — the book is already net-long-gamma (+9.7M); clearing the negative front chunk leaves it more positive, not a regime change</td></tr>
                <tr><td>Mean-revert long scout — flip leg (converged)</td><td className="bull">1h close &gt; $63,650 flip — spot straddling (−0.10% spot / +0.19% idx)</td><td>the flip leg converged to the boundary but the cluster narrowed to the lone 3d and the bounce ran un-triggered; on a clean 1h close above $63,650 with the cluster intact AND the 06-15 weekly reclaim, scout long 0.2R, stop $61,484, take half at $72,713 — do not chase pre-confirmation</td></tr>
                <tr><td>$60k crash-put magnet</td><td className="bull">$60k −23.10M (LIGHTENED a 2nd cut, +15.55M; price climbed away from it)</td><td>the magnet has halved its weight in two cuts as price left the strike — the crash-put bid is unwinding; no longer a near-spot fade anchor</td></tr>
                <tr><td>Macro tail re-grow (BOTH legs FIRED)</td><td className="bear">HY OAS &gt; 2.78% (FIRED at 2.80%); 10Y &gt; 4.53% (FIRED at 4.55%)</td><td>gate FIRED for the first time, but held discretionary — do not re-grow a downside tail into a net-long-gamma book and a 200W-reclaiming tape; re-arm only if the BTC-internal structure rolls back over (book re-deepens short-gamma AND the 06-15 weekly fails)</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (no calendar prior)</td><td className="stale">read each fresh Δnet ≤ −3k or ≥ +3k single-minute step as a signal in itself</td><td>the 3-day press ended on a gradual cover (+5,031); a fresh discrete re-stack ≤ −3k below a re-failing flip re-arms the short read, a ≥ +3k cover step above the flip confirms a violent unwind — neither printed this cut</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                the 06-15 weekly close against the 200W $62,019 (now leaning
                reclaim with the in-progress bar +2.50% above), with a clean 1h
                close above the flip $63,650 as the scout trigger: a weekly close
                back above the 200W confirms the floor reclaim and a clean flip
                close arms the scout-long once the TD9 cluster re-confirms; a
                weekly close below would still confirm the first sustained
                weekly-200W break of the current post-06-08 floor-watch lineage
                (last full-history below-own-200W close was 2023-10-09)
              </span>. Until then this note runs as written: the desk is flat, the
              200W watch is the primary framework and has reclaimed intraweek, the
              mean-revert long scout converged to its trigger zone but ran
              un-traded (no chase post-move), the macro tail re-grow fired on both
              legs but is held discretionary against the BTC-internal turn, and the
              squeeze-cycle hostile-2 framework is a watchlist with the 3-day press
              ended on a gradual cover. The dealer book flipped from −69.0M
              short-gamma to +9.7M net-long-gamma with the $60k magnet halving; SM
              covered for the first time in the press; funding normalized positive
              on the day; BTC is the strongest risk asset on 7d inside a
              still-NORMAL broad risk-off. The right read for the next 24h is{' '}
              <em>patient and flat — let the 06-15 weekly close confirm the floor
              reclaim and watch a clean 1h close above $63,650 as the scout
              trigger, without chasing the bounce that already ran</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit
            </span>
            <b>Status:</b> v2 cut built on the 2026-06-12 00:05Z atomic snapshot,
            promoted from v1 after the STAGE B codex hostile cross-model audit
            (verdict <b>BLOCK-CRITICAL</b>: 1 CRITICAL + 1 MINOR). Findings record:{' '}
            <code>audits/2026-06-12-desk-note.md</code>. Every finding was applied
            in place and grep-closed (pattern → hits-before → hits-after) before
            promotion:{' '}
            <b>DN-001 (CRITICAL)</b> — in-progress 06-12 daily bar counted as a
            finalized daily close, overstating the below-floor and reclaim lineage
            (finalized below-floor = 2 not 3; finalized reclaim = 1 not 2).
            Patterns searched on the full EN file: <code>two consecutive daily
            closes back above</code> (multiline, daily-close context) — 2 before / 0
            after; <code>Two consecutive daily closes</code> — 1 before / 0 after;{' '}
            <code>three daily closes below the floor</code> — 1 before / 0 after.
            Rewritten to &ldquo;one finalized daily close back above (06-11) plus
            the 06-12 bar in progress above&rdquo; and &ldquo;two daily closes
            below&rdquo;; the 06-15 W-MON weekly close kept as the only binary. Out
            of scope (left intact, not the same claim): <code>three-day
            short-press</code> (SM positioning over 3 days) and <code>31
            consecutive daily closes</code> (RV methodology window). <b>RESOLVED</b>{' '}
            (hits-after = 0). <b>DN-002 (MINOR)</b> — 24h big-print denominator not
            reproducible from the live tape (<code>sum(big_count) = 580</code>, no
            method reproduced 327). Pattern <code>327</code> — 1 before / 0 after;
            net <code>+654 BTC</code> reproduced and retained. Changed to{' '}
            <code>+654 BTC / 580 prints</code> (<code>big_count</code> denominator).{' '}
            <b>RESOLVED</b> (hits-after = 0). Both findings RESOLVED; no UNRESOLVED
            residue, so v1 → v2 promotion proceeded. Source pins re-checked:
            funding × 1095 (snap −1.44% ann from raw −0.001315, 24h mean +2.60% ann
            FLIPPED positive, cap 1 / 1442 at the +7.26% max, neg-minute 17.82%,
            longest neg streak 245 sampled rows / ~4h04m wall-clock UTC 20:01 06-11
            → 00:05 06-12 as a thin recent re-flip that still clears the ≥4h leg-2
            gate with funding negative at the snap); GEX dual-reference sign (flip
            $63,650, spot −0.10% / idx +0.19% — straddling, opposite signs by a
            fraction of a percent, tile and cluster consistent; aggregate +9.7M
            flipped from −69.0M; $60k −23.10M lightened +15.55M); 200W full-history
            W-MON SMA $62,019 vs live spot +2.52% above and in-progress 06-15 bar
            $63,566 +2.50% above, 8 / 154 = 5.19% frequency,{' '}
            <code>weekly_200sma.json</code> ABSENT (200W computed directly from
            parquet, JSON percentile / last-event unavailable, not fabricated); SM
            cut fraction 11.77% (long −249 / short −5,280 rounded independently,
            net +5,031 cover, exact long 13,780.700 → 13,531.418 and short
            56,516.884 → 51,236.916, net Δ +5,030.686 — do not difference the
            rounded endpoints); daily-close lineage (06-08 $63,058, 06-09 $61,695,
            06-10 $61,484 FINAL, 06-11 $63,598 FINAL reclaim, 06-12 in-progress
            $63,566); 30D RV 42.17% (41.54% alt); cross-asset |r| 0.377 NORMAL, BTC
            +0.32% vs NQ −1.89% (+2.21pt outperformance, BTC the strongest risk
            asset); macro Tier-1 (10Y 4.55% filter AT boundary, HY OAS 2.80% ABOVE
            the gate, both macro-tail re-grow legs FIRED, TIPS 2.21%, DXY 100.08,
            Fed net liq $5.897T); cb_cvd reset-adjustment (rebase at UTC 06:15
            06-11, reset-adjusted 24h spot CVD = (2,866.4 − 1,581.7) + (29.9 −
            86.6) = +1,228.0); full MA matrix vs live spot $63,584.00 off parquet
            2026-06-12 00:06Z close $63,566.10 (D-SMA100 $72,713 cycle anchor
            −12.55%, every MA overhead, W-SMA150/200 non-computable at 129 subset
            weekly bars, W-EMA150/200 seed-disclosed); claims-vs-loaded-data (NTT /
            max-pain / strike-IV / BTC-NQ framework-only; JGB monthly do not lean;
            IV chain-median across 984 instruments not a tradable spread). Archive:{' '}
            <code>/opt/desk-note/snapshots/2026-06-12-0008/</code> (btc_gex.html,
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
            Numbers reflect a single atomic snapshot (2026-06-12 00:05Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-06-11 22:16Z (~1h49m before
            snapshot) and some inputs are explicitly stale or pending and
            flagged as such. This is the v2 post-audit cut — the STAGE B codex
            hostile audit has run and its findings are resolved (see the audit
            trace above and <code>audits/2026-06-12-desk-note.md</code>); treat
            every figure as provisional regardless. Levels, sizes, and conditions are
            illustrative of the desk&rsquo;s process, not standing
            recommendations. Past correlation, gamma, and positioning patterns do
            not bind future tape. Derivatives carry the risk of total loss and,
            where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The mean-revert cluster resolved into the bounce — the 200W floor
                reclaimed intraweek, the dealer book flipped net-long-gamma, SM
                covered for the first time in the press, funding normalized. But
                the scout ran un-triggered, every MA is still overhead, and the
                macro re-grow fired into the turn. Flat and patient — the 06-15
                weekly close is the binary.
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
            v2 · 2026-06-12 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
