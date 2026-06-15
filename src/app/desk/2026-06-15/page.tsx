import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-15 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-15',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-15' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260615() {
  await requireViewer('/desk/2026-06-15');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-15 · v2</span>
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
              <span className="dn-big">$65,680</span>
n2n&nbsp;<span>+1.90%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-15 00:06Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-15 00:06Z (snapshot pin)</td>
                  <td className="dn-flag">
                    fresh · 1-min · all derived values pinned to the 00:06Z anchor
                    row · live `t` field is BJ-local (UTC+8) so the 00:06Z anchor
                    row is <code>06-15 08:06</code>; this snapshot lands ~16h06m
                    after the 14JUN 08:00Z option settle and ~7h54m before the
                    15JUN 08:00Z settle · <b>window convention:</b> every live-tape
                    comparison below is <b>NOTE-TO-NOTE (n2n)</b> — measured from
                    the prior note&rsquo;s 06-14 00:06Z snap to this 00:06Z snap,
                    i.e. 1441 sampled rows ≈ 24h00m for the day window (the prior
                    and current snaps are exactly 24h apart this cut), 241 rows ≈
                    4h00m, and 61 rows ≈ 1h00m, so the day/4h/1h deltas are tagged{' '}
                    <code>n2n</code>; any remaining &ldquo;24h&rdquo; tag is the MTF
                    scan engine&rsquo;s own window or a forward-looking phrase ·{' '}
                    <b>SM block STILL FROZEN:</b> the Hyperliquid smart-money feed
                    has not advanced since 2026-06-12 01:36Z (~70.5h stale at this
                    snap) — SM long/short/net read STALE and are treated
                    framework-only, not as live positioning (see meta tiles +
                    Positioning section)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-15 00:01Z scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    ~5-min stale vs the 00:06Z snapshot anchor · in-progress bars ·
                    archived to <code>/opt/desk-note/snapshots/2026-06-15-0006/</code>{' '}
                    at author time
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-15 00:01Z snapshot</td>
                  <td className="dn-flag">
                    pre-settle · ~5-min stale vs the snapshot anchor · Deribit idx
                    $65,899 vs live $65,679.88 ($219 above) · 948 inst (was 946 on
                    06-14, +2) · 15JUN 0.3DTE +28.59M settles at 08:00Z today (~8h
                    ahead) — this is the 06-15 weekly settle, on the binary date ·
                    ex-15JUN aggregate ≈ +45.5M still net positive (clearing the
                    positive front chunk LOWERS the aggregate; dashboard total
                    +74.1M authoritative, displayed rows are non-additive — see
                    dealer section) · archived to{' '}
                    <code>/opt/desk-note/snapshots/2026-06-15-0006/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-15 00:01Z
                  </td>
                  <td className="dn-flag">~5-min lag · 7d 1h bars · 22 assets · 166 rows · regime NORMAL (mean |r| 0.421) · archived to <code>/opt/desk-note/snapshots/2026-06-15-0006/</code></td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-14 22:17Z render</td>
                  <td className="dn-flag">
                    ~1h49m render lag · <b>weekend (Sunday-night render)</b> — FRED
                    Tier-1 daily series are frozen at the Friday 06-12 closes (10Y
                    4.45%, TIPS 2.16%, HY OAS 2.78% all carried; do not read the Δ
                    as a fresh weekend move — Monday FRED daily prints resume in the
                    upcoming US session, after this snapshot) · DXY 99.46 (1d Δ
                    −0.29; −0.29 note-to-note from 06-14&rsquo;s 99.75 — the
                    dashboard 1d Δ and the n2n move coincide this cut) · Fed net liq
                    $5.897T · archived to{' '}
                    <code>/opt/desk-note/snapshots/2026-06-15-0006/</code>
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
                  <td className="dn-flag">stale · monthly (~74d) · do not treat as live</td>
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
              <span className="dn-v bull">+2.69%</span>
              <span className="dn-src">live · snap +2.69% ann (raw +0.002455 × 1095; long-pay live at the snap — funding FLIPPED BACK positive) · n2n mean ann −2.58% (was +0.29% on 06-14; the window ran a long short-pay leg through the middle that ended before the snap) · cap occupancy 1 / 1441 sampled rows at the +6.11% max, 2 / 1441 at the −6.72% min · neg-minute share 74.88% (1079 / 1441, was 41.64% on 06-14, +33.24pt) · n2n peak +6.11% ann · n2n trough −6.72% ann</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · n2n</span>
              <span className="dn-v bull">mean +0.29% → −2.58% (−2.87pt) · snap −5.03% → +2.69% (+7.72pt)</span>
              <span className="dn-src">range −6.72% / +6.11% ann · the funding path ran a long short-pay leg through the window (longest contiguous negative streak 1079 sampled rows / ~17h59m, ENDED at 06-15 02:04 BJ / UTC 06-14 18:04, near the window low) and then FLIPPED back positive into the snap — the trailing contiguous POSITIVE streak ending AT the snap is 362 sampled rows / ~6h02m, and funding is POSITIVE at the snap · funding is NOT negative at the snap, so the scout funding leg-2 gate is DEAD again, reversed from 06-14&rsquo;s REVIVED read</span>
            </div>
            <div>
              <span className="dn-k">OI · n2n</span>
              <span className="dn-v bull">+1.42% (+1,423 BTC)</span>
              <span className="dn-src">live · 101,578 (up from the 06-14 snap 100,155, +1,423) · OI EXPANDED a second consecutive day — a smaller build than 06-14&rsquo;s +2,365 but extending the OI build into the up-leg (the post-06-08 builds were +737 on 06-10, +216 on 06-11, then the −1,211 / −466 bleed on 06-12 / 06-13, then +2,365 on 06-14 and +1,423 this cut) · n2n peak 101,831, trough 99,951</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v">58.70 / 41.30</span>
              <span className="dn-src">live_db `mkt_long_pct` · bled a further −0.59pt vs 06-14&rsquo;s 59.29 (the de-crowding continued for a second day even as price rose — retail STILL did NOT chase the up-leg) · n2n range 58.09 / 59.85 · peak 59.85 / trough 58.09</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v stale">−37.3k · FEED FROZEN ~70.5h (NOT LOADED)</span>
              <span className="dn-src">live_db SM block has NOT advanced since 2026-06-12 01:36Z — long 13,532.412 / short 50,825.664 / net −37,293.252 are the FROZEN last-written values, identical to the 06-13 and 06-14 notes&rsquo; (the freeze predates both). ~70.5h stale at this snap. Treat as STALE / NOT LOADED — no live SM positioning read this cut</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 06-14 note</span>
              <span className="dn-v stale">NON-COMPUTABLE — feed frozen</span>
              <span className="dn-src">the SM endpoints are byte-identical to 06-14 because the feed froze 2026-06-12 01:36Z; no SM Δ, cut fraction, or squeeze-cycle step can be computed this cut without fabricating · the only live positioning reads are retail mkt_long_pct and the perp-tape proxy (OI + funding + basis)</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">44.5% / 42.09%</span>
              <span className="dn-src">GEX median IV across 948 inst (was 43.6% / 946 on 06-14, +0.9pt) · IV/RV spread +2.41pt · 30D close-to-close RV 42.09% (30 returns / 31 closes; 29-return alt 42.82%)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+3.34% (spot) / +3.69% (idx) — both ABOVE</span>
              <span className="dn-src">flip $63,557 (was $63,359, walked UP +$198) · vs live spot $65,679.88 (65,679.88 / 63,557 − 1 = +3.339%) / GEX file idx $65,899 (65,899 / 63,557 − 1 = +3.685%) — both references cleanly ABOVE the flip, the gap widened again as spot rose faster than the flip walked · aggregate GEX +74.1M (was +63.4M, grew +$10.7M net-long-gamma) · $60k crash-put −18.00M (lightened from −21.07M) · P/C 0.60</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The up-leg extended into a V-shaped second day — the tape dipped to
                $63,651 then rallied{' '}
                <span className="dn-tag bull">+1.90% to $65,680</span> and the
                structure firmed on nearly every read, but the tape is now flashing
                exhaustion as loudly as the structure is firming, and the
                smart-money feed is still dark
              </span>. Inside a perp/OHLC tape range of{' '}
              <span className="dn-tag">$65,775 / $63,651</span>{' '}
              (high @ BJ 07:57 06-15 / UTC 23:57 06-14, low @ BJ 02:23 06-15 /
              UTC 18:23 06-14) the morning dip was bought hard and the PM grind took
              spot to fresh n2n highs. The 200W floor reclaim STRENGTHENED again —
              the 06-14 daily close finalized at{' '}
              <span className="dn-tag bull">$65,702</span>, so there are now{' '}
              <span className="dn-tag bull">FOUR finalized daily closes above the
              $62,019 floor</span> (06-11 $63,598, 06-12 $63,547, 06-13 $64,418,
              06-14 $65,702) plus the in-progress 06-15 weekly bar $65,625 above. The
              dealer book deepened its net-long-gamma further to{' '}
              <span className="dn-tag bull">+74.1M</span> (was +63.4M), the 0-γ flip
              walked up only to <span className="dn-tag">$63,557</span> (was $63,359),
              so spot now sits <span className="dn-tag bull">+3.34% cleanly above the
              flip</span> — the gap widened again. And the fast frames extended: all
              four fast/mid frames (15m / 30m / 1h / 4h) now sit ABOVE cloud, the 4h
              reclaimed its cloud on a fresh water-up golden cross, and the nearest
              daily MAs came within a single swing (D-SMA20 −1.18%, D-EMA20 −1.46%).{' '}
              <em>But the cuts against cleanliness got louder: funding FLIPPED BACK
              positive at the snap (+2.69% ann after a ~18h short-pay leg ended
              pre-snap), so the scout&rsquo;s funding leg DIED again; the fast frames
              are screaming overbought (RSI 77.8 / 78.9 / 75.9) into FOUR ⚡ TD9 SELL
              signals and bear divergences on 30m / 1h / 4h; the Hyperliquid SM feed
              is FROZEN ~70.5h so the smart-money side is still unconfirmable; and
              every MA is still overhead.</em> The mean-revert scout STILL
              can&rsquo;t fire — its flip leg holds, but its funding leg died again
              and its TD9-BUY cluster is fully inverted to a SELL cluster. This is a
              bounce extending into a genuine up-leg on firming structure but running
              straight into short-term exhaustion with the position book unreadable —
              the desk stays FLAT, and the 06-15 weekly close (which resolves end of
              today) is still the binary, leaning reclaim hard.
            </p>

            <p>
              BTC prints <span className="dn-tag">$65,680</span> live,{' '}
              <span className="dn-tag bull">+1.90%</span> note-to-note — a V-shaped
              up-day, 1h <span className="dn-tag bull">+0.65%</span>, 4h{' '}
              <span className="dn-tag bull">+2.91%</span>, the rally concentrated in
              the back half after a morning dip to $63,651.{' '}
              <span className="dn-signal">The cycle-floor reclaim is the read that
              strengthened again</span>: the 06-14 close finalized at $65,702 (the
              06-14 note carried it in-progress at $64,388), giving four consecutive
              FINALIZED daily closes above the 200W $62,019 — 06-11 $63,598, 06-12
              $63,547, 06-13 $64,418 and 06-14 $65,702 — with the in-progress 06-15
              bar $65,625 also above. That is a strict upgrade on the 06-14 lineage
              (three finalized closes). The MA matrix is still entirely overhead but
              the nearest lines came within a single normal swing —{' '}
              <span className="dn-tag bull">D-SMA20 $66,467 (−1.18%)</span> is the
              nearest, with <span className="dn-tag bull">D-EMA20 $66,654
              (−1.46%)</span> right behind — both fast daily lines are now within
              easy reach, a clear improvement on 06-14 (nearest then −3.28%). The
              cycle anchor <span className="dn-tag bear">D-SMA100 $72,608
              (−9.54%)</span> sits below the daily stack, and the W-SMA20 weekly
              floor that broke in early June is still{' '}
              <span className="dn-tag bear">$72,207 (−9.04%)</span> overhead.{' '}
              <span className="dn-em">Every single MA on the daily and weekly ladder
              is above spot; the only positive structural offset on the entire board
              is the 200W floor itself (+5.90%). This is still a tape that has
              reclaimed its cycle floor on a close basis and is now pressing the
              nearest daily MAs — the reclaim is four closes deep and the bounce is
              extending into the lower MA band.</span> The mean-revert scout&rsquo;s
              three-leg gate decayed again, on yet another axis: this cut its funding
              leg DIED back (funding flipped positive at the snap) and its TD9-BUY
              cluster stayed inverted (four ⚡ TD9 SELL across 15m / 30m / 8h / 12h,
              the 3d holding a water-up death cross at Sell 1), while only its flip
              leg holds — so the gate is no closer to a clean fire, just broken on a
              different combination again. The scout stands down.
            </p>
            <h2 className="dn-sec">
              Positioning{' '}
              <span className="dn-roman">I · live tape · SM feed STILL FROZEN ~70.5h (NOT LOADED — no smart-money read) · funding FLIPPED BACK positive at the snap (+2.69% after a ~18h short-pay leg ended pre-snap — scout leg-2 DIED again) · OI EXPANDED a second day (+1,423) · retail bled −0.59pt and STILL did NOT chase</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important positioning fact this cut is, again, an
                absence: the Hyperliquid smart-money feed is frozen and has now been
                for ~70.5 hours
              </span>. The SM block in live_db has not advanced since{' '}
              <span className="dn-tag stale">2026-06-12 01:36Z</span> — long_btc{' '}
              <span className="dn-tag">13,532.412</span>, short_btc{' '}
              <span className="dn-tag">50,825.664</span>, net{' '}
              <span className="dn-tag">−37,293.252</span> are the last-written values
              and they are <span className="dn-em">byte-identical to the figures the
              06-13 and 06-14 notes carried</span>, which means the freeze predates
              both notes and the smart-money side has been dark across the entire
              up-leg. <span className="dn-em">No SM Δ, no cut fraction, no
              squeeze-cycle single-minute step can be computed this cut without
              fabricating numbers — the entire smart-money side is treated STALE /
              NOT LOADED for a third consecutive note.</span> The honest consequence
              is unchanged: the squeeze-cycle hostile-2 framework cannot be assessed
              on its own data, and the only live positioning reads left are retail
              mkt_long_pct and the perp-tape proxy (OI + funding + basis). What that
              proxy says shifted this cut — and the shift is the funding flip.
            </p>

            <p>
              <span className="dn-signal">
                The leverage side flipped back — funding crossed back to long-pay at
                the snap after running a long short-pay leg through the window, and
                that is what KILLS the scout&rsquo;s funding leg again
              </span>. Funding is{' '}
              <span className="dn-tag bull">+2.69% ann at the snap</span> (raw
              +0.002455 × 1095), n2n mean{' '}
              <span className="dn-tag">−2.58%</span> (vs +0.29% on 06-14), range{' '}
              <span className="dn-tag">−6.72% / +6.11%</span>. The path ran a deep
              short-pay leg through the middle of the window — the longest contiguous
              negative streak was{' '}
              <span className="dn-tag bear">1079 sampled rows / ~17h59m</span>, but it{' '}
              <span className="dn-em">ENDED at 06-15 02:04 BJ (UTC 06-14 18:04), near
              the window low</span>, and funding then flipped POSITIVE into the snap —
              the trailing contiguous positive streak ending AT the snap is{' '}
              <span className="dn-tag bull">362 sampled rows / ~6h02m</span>, and
              funding is firmly positive at the snap.{' '}
              <span className="dn-em">The 06-14 read — leg-2 REVIVED on a ≥4h
              short-pay leg negative at the snap — has reversed again: funding is
              paying longs at the snap, the contiguous leg into the snap is positive,
              and the mean-revert scout&rsquo;s funding short-pay leg is now DEAD,
              not merely weaker. This is the third consecutive note in which the
              funding leg has flipped state (DEAD 06-13 → REVIVED 06-14 → DEAD
              now).</span> Neg-minute share jumped 41.64% → 74.88% (1079 / 1441 — most
              of the window WAS short-pay, but it normalized into the snap), cap
              occupancy is{' '}
              <span className="dn-tag">1 / 1441 at the +6.11% max, 2 / 1441 at the
              −6.72% min</span>, OI{' '}
              <span className="dn-tag bull">+1,423 BTC (+1.42%)</span> EXPANDED a
              second consecutive day (101,578, up from the 06-14 snap 100,155; smaller
              than 06-14&rsquo;s +2,365 but a continued build), and retail{' '}
              <span className="dn-tag">mkt_long_pct 58.70%</span> bled a further
              −0.59pt even as price rose — retail STILL did NOT chase the up-leg.
              Perp trades a <span className="dn-tag bear">−$53.70 discount</span> to
              spot at the snap (1h mean −$41.25, 4h mean −$45.82; n2n-day mean
              −$35.28, range −$282.00 / +$26.25 — basis went premium briefly intraday
              but sits discounted at the snap). 1-min aggressor skew snap{' '}
              <span className="dn-tag bull">+11.1</span> (1h mean −3.12) — a buy-
              aggressor tilt right into the snap.{' '}
              <span className="dn-em">
                Funding flipped back to long-pay, OI still expanding, perp at a
                discount, retail de-crowding into the rally: the perp-tape proxy
                reads a rally now being pressed by longs (OI building while funding
                normalizes positive into the snap) rather than the shorts-leaning
                configuration of 06-14 — a more conventionally bullish, less
                squeeze-primed read. With the SM feed dark it stays a proxy read, not
                a confirmed one.
              </span>
            </p>

            <p>
              Windowed flow is <em>a V-shaped day bought on both spot and futures in
              the back half — a real up-day, dip bought and then chased on spot and
              leverage into the snap</em>. n2n-day: price{' '}
              <span className="dn-tag bull">+1.90%</span>, OI{' '}
              <span className="dn-tag bull">+1,423 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,512</span>{' '}
              <span className="dn-em">(no cb_cvd reset in the window)</span>, futures
              CVD <span className="dn-tag">Δ +158</span>, big-print{' '}
              <span className="dn-tag">−8 BTC</span>, taker-net{' '}
              <span className="dn-tag">−9</span> —{' '}
              <span className="dn-em">spot bought the day decisively while the
              day-level futures CVD netted to roughly flat (futures sold the morning
              dip then bought the PM rally back), with OI still expanding — net
              long-side initiation into the back-half rally</span>. 4h (into snap):
              price <span className="dn-tag bull">+2.91%</span>, OI{' '}
              <span className="dn-tag bull">+844 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,035</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +974</span>, big-print{' '}
              <span className="dn-tag bull">+5 BTC</span>, taker-net{' '}
              <span className="dn-tag bull">+16</span> — <em>the rally leg: both spot
              and futures aggressors bought hard, OI building, the cleanest impulsive
              up-move of the window</em>. 1h: price{' '}
              <span className="dn-tag bull">+0.65%</span>, OI{' '}
              <span className="dn-tag bull">+64 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +114</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +306</span>, big-print{' '}
              <span className="dn-tag">+0 BTC</span>, taker-net{' '}
              <span className="dn-tag bull">+26</span> — <em>the last hour stayed bid,
              futures aggressors still buying, OI ticking up — continuation into the
              snap, not a stall</em>. The 4h shape is the cleanest read: a spot-and-
              futures-led rally with OI building and funding normalizing positive — a
              bounce the perp book is now joining rather than fighting, which is more
              conventional continuation fuel but removes the short-squeeze asymmetry
              that the 06-14 shorts-leaning tape carried.
            </p>
            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · all four fast/mid frames (15m / 30m / 1h / 4h) now ABOVE cloud (4h reclaimed on a FRESH water-up golden cross) and 8h climbed INTO cloud — structure firmed · but RSI is overbought (77.8 / 78.9 / 75.9) into FOUR ⚡ TD9 SELL and bear divergences on 30m / 1h / 4h — exhaustion intensified · every MA overhead</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map firmed the structure another notch and lit up exhaustion
                even louder: the scan reads net 3 bull / 4 bear / 3 neutral (one
                frame less bearish than 06-14&rsquo;s 3 / 5 / 2), header tag
                &ldquo;高级别偏空 · 短线反弹&rdquo; (higher-frame bearish · short-term
                bounce), with a ⚡ 30m TD9 reversal hint flagged
              </span>. The whole fast/mid band is now ABOVE cloud — 15m, 30m, 1h AND
              4h all cleared their clouds, the 4h reclaiming its cloud this cut on a{' '}
              <span className="dn-tag bull">FRESH water-up golden cross 1b</span>, and
              the 8h climbed from below cloud into it (64.7k–68.6k). But the fast
              frames are now screaming overbought: 15m RSI{' '}
              <span className="dn-tag bear">77.8</span>, 30m{' '}
              <span className="dn-tag bear">78.9</span>, 1h{' '}
              <span className="dn-tag bear">75.9</span> — all deep in overbought
              territory — and the exhaustion signals stacked up:{' '}
              <span className="dn-tag bear">⚡ TD9 SELL on 15m, 30m, 8h AND 12h</span>{' '}
              (four of them, plus the header&rsquo;s ⚡ 30m reversal hint), with bear
              divergences on 30m / 1h / 4h.{' '}
              <span className="dn-em">The bounce is rising into overbought fast-frame
              RSI and a cluster of TD9 SELL exhaustion alerts — the classic
              extension-into-exhaustion signature, now more pronounced than on
              06-14.</span> The affirmative bull persists on the daily:{' '}
              <span className="dn-tag bull">1d water-down golden cross 2b</span> (the
              fresh 06-14 cross held and aged a bar), though the 1d is still below
              cloud (RSI 41.7) at Sell 7. The slow frames stay below cloud and mixed:
              12h water-down golden 13b but ⚡ TD9 SELL below cloud, 3d holds a{' '}
              <span className="dn-tag bear">water-up death cross 6b at Sell 1</span>{' '}
              (the cycle-frame bear), 1w no cross below cloud Buy 5, 1M holds the
              pending Buy 8 → 9? above cloud.{' '}
              <span className="dn-em">
                Read straight: the bounce firmed the structure (all four fast/mid
                frames above cloud, 4h reclaimed, 8h into cloud, 1d golden cross
                holding) — a real, extending up-leg — but it is doing so into
                overbought fast-frame RSI, four ⚡ TD9 SELL signals and bear
                divergences on the mid frames, while the 3d death cross keeps the
                cycle frame bearish. The map is a bounce with enough momentum to lift
                the whole fast band above cloud and simultaneously flashing the
                exhaustion that precedes a stall. Higher-frame structure still
                bearish; short-term reversal regime favored the bounce; the
                overbought-into-TD9-SELL read warns it is maturing fast.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">65,721</td><td className="num bear">77.8</td><td className="bull">golden (water-dn) 18b</td><td className="bull">above ↓64.2k 11b</td><td className="bear">⚡ TD9 SELL</td><td>BULL reg</td></tr>
                <tr><td>30m</td><td className="num">65,730</td><td className="num bear">78.9</td><td className="bull">golden (water-dn) 6b</td><td className="bull">above ↓64.4k 6b</td><td className="bear">⚡ TD9 SELL</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">65,730</td><td className="num bear">75.9</td><td className="bull">golden (water-up) 3b</td><td className="bull">above ↓64.2k 4b</td><td>Sell 5</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">65,730</td><td className="num bull">68.1</td><td className="bull">golden (water-up) 1b · fresh</td><td className="bull">above ↓65.1k 1b</td><td>Sell 2</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>8h</td><td className="num">65,718</td><td className="num bull">60.3</td><td className="neut">no cross</td><td className="neut">in cloud 64.7–68.6k 1b</td><td className="bear">⚡ TD9 SELL</td><td>BEAR hid</td></tr>
                <tr><td>12h</td><td className="num">65,718</td><td className="num">53.1</td><td className="bull">golden (water-dn) 13b</td><td className="bear">below ↑72.8k 47b</td><td className="bear">⚡ TD9 SELL</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">65,718</td><td className="num bull">41.7</td><td className="bull">golden (water-dn) 2b</td><td className="bear">below ↑74.3k 14b</td><td>Sell 7</td><td>—</td></tr>
                <tr><td>3d</td><td className="num">65,730</td><td className="num bull">39.6</td><td className="bear">death (water-up) 6b</td><td className="bear">below ↑74.7k 4b</td><td>Sell 1</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">65,729</td><td className="num bull">37.3</td><td className="neut">no cross</td><td className="bear">below ↑100.3k 20b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">65,730</td><td className="num">43.6</td><td className="bull">DIF water-up (no cross)</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (rolling latest file;
                    archived verbatim to{' '}
                    <code>/opt/desk-note/snapshots/2026-06-15-0006/</code>). Header
                    alerts: <em>net 3 bull / 4 bear / 3 neutral · 高级别偏空 · 短线反弹</em>,{' '}
                    <em>⚡ 30m TD9 reversal hint</em>, <em>four ⚡ TD9 SELL (15m / 30m /
                    8h / 12h)</em>, <em>bear divergences on 30m / 1h / 4h</em>. Scan
                    spot $65,718, 24h +2.07% (00:01Z MTF scan; the live-tape header at
                    00:06Z shows +1.90% n2n on the snapshot window — the 5-minute gap
                    and the different window account for the difference), 24h H/L
                    $65,775 / $63,650, qVol $7.56B. Closes are in-progress bars; treat
                    every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the bounce is still happening below structure,
              but the nearest lines are now within a single normal swing and the
              fast daily band is nearly reclaimed. Spot $65,680 sits below every
              daily and weekly line on the board; the only positive offset anywhere
              is the 200W floor itself (+5.90%). Nearest overhead is{' '}
              <span className="dn-tag bull">D-SMA20 $66,467 (−1.18%)</span> then{' '}
              <span className="dn-tag bull">D-EMA20 $66,654 (−1.46%)</span> — both
              fast daily lines within easy reach — then{' '}
              <span className="dn-tag bear">D-EMA50 $70,665 (−7.05%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $72,207 (−9.04%)</span> (the
              broken weekly floor),{' '}
              <span className="dn-tag bear">D-SMA100 $72,608 (−9.54%; cycle
              anchor)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $73,282 (−10.37%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $73,320 (−10.42%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $73,676 (−10.85%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $73,788 (−10.99%; seed)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $75,563 (−13.08%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $76,013 (−13.59%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $77,517 (−15.27%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $78,124 (−15.93%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $78,665 (−16.51%)</span>. Far
              above and disused: W-EMA100 $82,732 (−20.61%), W-EMA50 $83,481
              (−21.32%), W-SMA100 $88,555 (−25.83%), W-SMA50 $91,859 (−28.50%).{' '}
              <span className="dn-em">
                MAs anchored to parquet 2026-06-15 00:06Z close $65,625.10; offsets
                recomputed against live spot $65,679.88. Displayed MA levels are
                $-rounded; offsets computed from exact series values. Subset MA
                ladder is the 2024–2026 window per desk policy; W-SMA150 / W-SMA200
                non-computable (129 subset weekly bars), W-EMA150 (−15.93%) and
                W-EMA200 (−10.99%) seed from available history and are reported as
                such. The 200W $62,019 is the full-history W-MON line (200 closed
                bars ending 06-08). Daily closes: 06-08 $63,058 (above), 06-09
                $61,695 (below), 06-10 $61,484 FINAL (below), 06-11 $63,598 FINAL
                (above), 06-12 $63,547 FINAL (above), 06-13 $64,418 FINAL (above),
                06-14 $65,702 FINAL (above), 06-15 (in-progress) $65,625 (above) —
                four finalized closes above the 200W floor plus the in-progress bar
                above.
              </span>
            </p>
            <h2 className="dn-sec">
              Dealer map{' '}
              <span className="dn-roman">III · book DEEPENED further to +74.1M net-long-gamma (was +63.4M) · 0-γ flip walked UP only to $63,557 so spot sits +3.34% cleanly above (gap widened again) · 15JUN +28.59M (the 06-15 weekly settle) clears 08:00Z today, clearing a POSITIVE chunk LOWERS the aggregate to ≈ +45.5M</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book deepened its net-long-gamma again on the up-day and
                the flip barely moved, so spot pulled further away above it
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+74.1M / 1%</span> (was +63.4M on 06-14 —
              a +$10.7M positive grow); the book is now even more firmly
              net-long-gamma (dampening) than at the start of the week. The 0-γ flip
              moved only <span className="dn-tag">$63,359 → $63,557 (+$198)</span>,
              and spot $65,680 now sits{' '}
              <span className="dn-tag bull">+3.34% above flip</span> on
              spot-denominated math (65,679.88 / 63,557 − 1 = +3.339%); the GEX
              file&rsquo;s own Deribit-index reference $65,899 reads{' '}
              <span className="dn-tag bull">+3.69% above</span> (65,899 / 63,557 − 1 =
              +3.685%). <span className="dn-em">Both references are cleanly ABOVE the
              flip and the gap WIDENED again vs 06-14 (+1.73% / +1.95% then) — spot
              kept rising faster than the flip walked up, so the dealer book is
              dampening from a deeper position of strength.</span> The wall map is a
              thick positive overhead band against a lightened deep crash-put:
              heaviest positive walls{' '}
              <span className="dn-tag bull">$67k +16.82M</span>,{' '}
              <span className="dn-tag bull">$66k +14.82M</span>,{' '}
              <span className="dn-tag bull">$80k +13.20M</span>,{' '}
              <span className="dn-tag bull">$70k +11.28M</span>,{' '}
              <span className="dn-tag bull">$65k +7.42M</span> (just below spot),{' '}
              <span className="dn-tag bull">$75k +6.77M</span>,{' '}
              <span className="dn-tag bull">$65.5k +5.59M</span>,{' '}
              <span className="dn-tag bull">$68k +5.47M</span>,{' '}
              <span className="dn-tag bull">$64.5k +5.26M</span>; the negatives are{' '}
              <span className="dn-tag bear">$60k −18.00M</span> (the persistent
              crash-put, lightened from 06-14&rsquo;s −21.07M),{' '}
              <span className="dn-tag bear">$62k −7.29M</span>,{' '}
              <span className="dn-tag bear">$55k −5.72M</span>,{' '}
              <span className="dn-tag bear">$50k −4.76M</span>,{' '}
              <span className="dn-tag bear">$64k −3.40M</span> (just below spot).{' '}
              <span className="dn-em">
                The near-overhead $65k–$67k band is a heavy positive shelf (~+44M
                across four strikes) with spot sitting just above the $65k +7.42M and
                $65.5k +5.59M walls and below the dense $66k–$67k +31.6M cap — a
                dealer book structurally offered into a push through $66k–$67k and bid
                into a fade toward the small $64k −3.40M / $63k −2.43M pocket just
                under spot. The crash-put magnet at $60k lightened again (+$3.07M vs
                06-14, −21.07M → −18.00M) but at −8.6% below spot it is not a
                near-spot anchor.
              </span>
            </p>

            <p>
              The expiry strip is positive across the front but the displayed rows
              are <span className="dn-em">non-additive</span> against the dashboard
              total. Per-expiry: 15JUN 0.3DTE{' '}
              <span className="dn-tag bull">+28.59M</span> (settles 08:00Z today —
              this is the 06-15 weekly settle, the heaviest near positive and
              directly on the binary date), 16JUN 1.3{' '}
              <span className="dn-tag bull">+3.71M</span>, 17JUN 2.3 +2.90M, 18JUN 3.3
              +3.53M, 19JUN 4.3 <span className="dn-tag bull">+13.92M</span>,{' '}
              <span className="dn-tag bear">26JUN 11.3 −10.03M</span> (the monthly, the
              heaviest negative chunk on the board, lightened from 06-14&rsquo;s
              −16.80M), 3JUL +1.19M, 31JUL{' '}
              <span className="dn-tag bull">+18.15M</span> (the heaviest positive
              overall), 28AUG +3.42M, 25SEP +4.38M, 25DEC +5.49M, 26MAR27 +0.88M.{' '}
              <span className="dn-em">The displayed rows sum to ≈ +76.13M, which is
              NOT the dashboard aggregate +74.1M — the per-strike/per-expiry
              decompositions are non-additive against the headline total; the
              dashboard +74.1M is authoritative.</span> The 15JUN 0.3DTE settles at
              08:00Z today (~8h ahead) and is the 06-15 weekly settle: because it is a
              POSITIVE +28.59M chunk, clearing it LOWERS the aggregate — ex-15JUN
              reads roughly +45.5M, still firmly net positive but a smaller positive
              book post-settle.{' '}
              <span className="dn-em">
                The 15JUN +28.59M chunk lands directly on the binary date — the
                option settle (08:00Z) and the 06-15 weekly candle close (23:59Z)
                coincide today. With the 26JUN monthly −10.03M the structural negative
                still well out in time and lightened, the front of the curve is a
                positive shelf that thins after today&rsquo;s settle but stays
                net-long-gamma.
              </span>
            </p>

            <p>
              IV median across 948 instruments is{' '}
              <span className="dn-tag">44.5%</span> (firmed from 43.6% / 946
              instruments on 06-14 — a +0.9pt nudge as realized stays elevated)
              against 30D close-to-close RV of{' '}
              <span className="dn-tag">42.09%</span> — chain-level richness{' '}
              <span className="dn-tag">~+2.41pt</span>, the IV/RV spread holding near
              flat.{' '}
              <span className="dn-em">A chain-median across 948 instruments,{' '}
              <span className="dn-em">not</span> a tradable spread; expiry-/strike-
              level vega, skew and term structure remain not loaded; the vol read
              stays framework-only.</span> RV methodology: 30D close-to-close,
              logret.std × √365 × 100 on the last 30 daily log returns (= 31
              consecutive daily closes) anchored to parquet 2026-06-15 00:06Z; the
              underlying 31-close window spans 05-16 → 06-15. (For reference, last 29
              returns / 30 closes reads 42.82%; the 42.09% page value comes from 30
              returns.) P/C ratio 0.60 on the GEX file (Call OI 268,122 / Put OI
              160,154).
            </p>
            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · WEEKEND (Sunday-night render) — FRED Tier-1 daily series still frozen at the Friday 06-12 closes (10Y 4.45%, TIPS 2.16%, HY OAS 2.78% carried; Monday prints resume in the upcoming US session) · re-grow legs stay UN-FIRED, reclaim-long filter holds · DXY eased further to 99.46 · cross-asset NORMAL |r| 0.421, BTC ties to TradFi-tech tightened sharply</span>
            </h2>

            <p>
              <span className="dn-signal">
                It is still a weekend at the render — today is Monday but the macro
                panel rendered Sunday night, so the FRED Tier-1 daily series carry
                the Friday 06-12 closes and should not be read as fresh moves; the
                Monday daily prints resume during the US session, after this snapshot
              </span>. Dashboard render is 2026-06-14 22:17Z, ~1h49m before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bull">4.45%</span>, regime z{' '}
              <span className="dn-tag bear">+1.38</span>, episodic z{' '}
              <span className="dn-tag bull">−0.50</span> — carried at Friday&rsquo;s
              level, which <span className="dn-em">holds the reclaim-long rates filter
              (10Y &lt; 4.55%) TRUE and keeps the re-grow leg-A gate (10Y &gt; 4.53%)
              UN-FIRED</span>. 10Y TIPS real{' '}
              <span className="dn-tag bull">2.16%</span>, regime z{' '}
              <span className="dn-tag bear">+2.12</span>, episodic z{' '}
              <span className="dn-tag bear">+0.94</span> — carried; the regime z is the
              single EXTREME risk-off tag on the daily panel. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.23%</span>. HY OAS{' '}
              <span className="dn-tag">2.78%</span>, regime z{' '}
              <span className="dn-tag bull">−0.84</span>, episodic z{' '}
              <span className="dn-tag">+0.31</span> — carried AT the 2.78% re-grow gate,
              so re-grow leg-B stays UN-FIRED (not above it). MOVE bond vol{' '}
              <span className="dn-tag">69.4</span> — loose, flat. The dollar softened
              further: DXY <span className="dn-tag bull">99.46 (1d Δ −0.29)</span>,
              regime z <span className="dn-tag bear">+1.03</span>, episodic z{' '}
              <span className="dn-tag bear">+0.59</span> — still RISK-OFF on the
              z-tags but eased −0.29 note-to-note from 06-14&rsquo;s 99.75 (the
              dashboard&rsquo;s own 1d Δ is −0.29, coinciding with the n2n move this
              cut); Fed net liquidity{' '}
              <span className="dn-tag bull">$5.897T</span> loose; NFCI −0.506 neutral
              (stale ~9d); US-JP 10Y spread{' '}
              <span className="dn-tag">1.94%</span>; USD/JPY{' '}
              <span className="dn-tag">160.18 (+0.05)</span>; USD/CNY 6.7621.{' '}
              <span className="dn-em">
                Net: nothing fired on the weekend because the daily series are still
                carried at Friday&rsquo;s closes — the re-grow gates stay un-fired (10Y
                4.45% below the 4.53% leg-A gate; HY OAS 2.78% at, not above, the
                leg-B gate), and the reclaim-long filter (10Y &lt; 4.55%) holds. The
                only macro thing that moved is the dollar easing further below 100, a
                second-day risk-on tick. The macro tape stays ALIGNED with the BTC
                turn rather than fighting it; DXY firm and TIPS-real EXTREME remain the
                offsetting risk-off lines, but the rates path that matters for BTC is
                quiet and below its gates. Re-read once Monday FRED daily prints
                resume.
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
                <tr><td>US 10Y nominal</td><td className="num">4.45%</td><td className="num stale">carried (Fri 06-12)</td><td className="num bear">+1.38</td><td className="num bull">−0.50</td><td className="bear">tight regime · re-grow leg-A UN-FIRED, filter holds (weekend-carried)</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.16%</td><td className="num stale">carried (Fri 06-12)</td><td className="num bear">+2.12</td><td className="num bear">+0.94</td><td className="bear">EXTREME RISK-OFF regime · carried</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.23%</td><td className="num stale">carried (Fri 06-12)</td><td className="num">−0.03</td><td className="num bull">−0.89</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num stale">carried (Fri 06-12)</td><td className="num bull">−0.84</td><td className="num">+0.31</td><td className="bull">loose · AT the 2.78% gate, leg-B UN-FIRED</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.506</td><td className="num stale">stale ~9d</td><td className="num">+0.19</td><td className="num bull">−0.73</td><td className="neut">neutral</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">69.4</td><td className="num bull">−0.09</td><td className="num bull">−0.60</td><td className="num bull">−1.02</td><td className="bull">loose · flat</td></tr>
                <tr><td>DXY</td><td className="num">99.46</td><td className="num bull">−0.29</td><td className="num bear">+1.03</td><td className="num bear">+0.59</td><td className="bear">RISK-OFF z-tags · eased −0.29 n2n from 99.75 (dashboard 1d Δ coincides)</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.897T</td><td className="num bull">+0.062T</td><td className="num bull">+0.82</td><td className="num bull">+2.47</td><td className="bull">loose</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.18</td><td className="num bear">+0.05</td><td className="num bear">+1.29</td><td className="num bear">+1.07</td><td className="neut">yen soft</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.94%</td><td className="num stale">carried</td><td className="num bull">−0.88</td><td className="num bull">−0.50</td><td className="bull">tight</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7621</td><td className="num bull">−0.01</td><td className="num bull">−1.77</td><td className="num bull">−1.34</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">monthly (~74d)</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 166 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.421</span> (firmed from
              06-14&rsquo;s 0.407, into the NORMAL band&rsquo;s upper half, not
              systemic). BTC&rsquo;s listed ties tightened SHARPLY this cut and are
              TradFi-tech led: NQ <span className="dn-tag">+0.681</span> (was +0.577),
              SP500 <span className="dn-tag">+0.673</span> (was +0.562), NVDA{' '}
              <span className="dn-tag">+0.613</span>, JP225{' '}
              <span className="dn-tag">+0.571</span>, SILVER{' '}
              <span className="dn-tag">+0.560</span>, COPPER{' '}
              <span className="dn-tag">+0.547</span>, TSLA{' '}
              <span className="dn-tag">+0.546</span>, GOOGL{' '}
              <span className="dn-tag">+0.525</span>, PLAT{' '}
              <span className="dn-tag">+0.517</span>, META{' '}
              <span className="dn-tag">+0.516</span>, GOLD{' '}
              <span className="dn-tag">+0.511</span>, MSFT{' '}
              <span className="dn-tag">+0.496</span>. 7d performance:{' '}
              <span className="dn-tag bull">PALL +7.14%</span>, JP225{' '}
              <span className="dn-tag bull">+6.62%</span>, COPPER{' '}
              <span className="dn-tag bull">+4.88%</span>, TSLA{' '}
              <span className="dn-tag bull">+3.54%</span>,{' '}
              <span className="dn-tag bull">BTC +3.34%</span>, NQ{' '}
              <span className="dn-tag bull">+2.96%</span>, SILVER{' '}
              <span className="dn-tag bull">+2.88%</span>, SP500{' '}
              <span className="dn-tag bull">+1.23%</span>; the mega-cap tech tape was
              heavy — AAPL <span className="dn-tag bear">−4.96%</span>, MSFT{' '}
              <span className="dn-tag bear">−4.91%</span>, META{' '}
              <span className="dn-tag bear">−3.57%</span>, AMZN{' '}
              <span className="dn-tag bear">−2.42%</span>; metals mixed (SILVER
              +2.88%, GOLD <span className="dn-tag bear">−1.07%</span>, PLAT{' '}
              <span className="dn-tag bear">−1.52%</span>); energy kept collapsing —
              CL <span className="dn-tag bear">−13.30%</span>, BRENT{' '}
              <span className="dn-tag bear">−12.47%</span>.{' '}
              <span className="dn-em">
                The story this cut is the correlation tightening, not the ranking: BTC
                +3.34% on 7d is now mid-pack (PALL, JP225, COPPER and TSLA all ran
                higher as the early-June crash rolled off the 7d window and compressed
                BTC&rsquo;s relative lead), but its ties to the US tech indices
                jumped — NQ +0.681 and SP500 +0.673 are the tightest BTC-equity
                readings in this lineage. BTC is trading as a high-beta tech proxy
                this week inside a still-NORMAL broad regime; the energy collapse
                (CL/BRENT −13% / −12%) and the mega-cap tech drawdown are the macro
                cross-currents, but neither is the BTC-load-bearing read this cut
              </span>. JGB monthly 2.52% carries an EXTREME RISK-OFF monthly tag — do
              not lean on it.
            </p>
            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 200W floor watch PRIMARY (reclaim STRENGTHENED to four finalized closes above; the 06-15 weekly close resolves end of today, leaning reclaim hard) · mean-revert scout STILL can&rsquo;t fire (flip leg holds, but funding leg DIED again + TD9 cluster fully inverted) · macro-tail re-grow UN-FIRED · squeeze-cycle hostile-2 ON HOLD (SM feed frozen) · desk flat</span>
            </h2>

            <p>
              <span className="dn-signal">
                A second up-day with firming structure but louder exhaustion, and the
                position book still dark, does not change a flat book — it
                strengthens the watch and keeps the scout grounded
              </span>. The desk carried no position into this snap and opened nothing;
              the up-leg that started 06-12 extended into a fourth session and the
              desk watched it run without an entry by design. The honest scorecard:
              the 200W reclaim strengthened to four finalized daily closes above the
              floor (a strict upgrade), the dealer book deepened net-long-gamma to
              +74.1M and spot pulled +3.34% above the flip, the fast frames all
              reclaimed cloud, and the nearest daily MAs came within ~1.2–1.5% —
              every structural read firmed. <em>But the mean-revert scout still
              can&rsquo;t fire: its flip leg holds, yet its funding leg DIED again
              (funding flipped back positive at the snap) and its TD9-BUY cluster is
              fully inverted to a SELL cluster (four ⚡ TD9 SELL, the 3d at a death
              cross) — so it is no closer to a clean fire — each day a different
              combination breaks; every MA is overhead; the fast frames are
              overbought (RSI 77–79) into the TD9 SELL cluster; and the SM feed is
              frozen ~70.5h so the squeeze read cannot be confirmed.</em> No chase.
              The scout is a confirmation trade and the confirmation it needs (a clean
              three-leg gate AND the 06-15 weekly reclaim) is still incomplete — wait
              for the 06-15 weekly close (which resolves today) and a re-armed gate,
              do not retrofit an entry into an extending tape that is now overbought
              and flashing exhaustion.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch · reclaim STRENGTHENED: now FOUR finalized daily closes above (06-11 $63,598, 06-12 $63,547, 06-13 $64,418, 06-14 $65,702) + in-progress 06-15 weekly bar $65,625 above</span>
              <div className="dn-trade-name">
                200W cycle-floor watch — reclaim strengthened: now FOUR finalized daily closes above $62,019 (06-11 $63,598, 06-12 $63,547, 06-13 $64,418, 06-14 $65,702) plus the in-progress 06-15 weekly bar $65,625 above; the 06-15 weekly close resolves end of today (23:59Z), leaning reclaim hard
              </div>
              <div className="dn-thesis">
                The 06-09/06-10 break put two daily closes below the floor; the 06-11
                tape took it back and 06-12/06-13/06-14 held and extended it. This cut
                the 06-14 daily close finalized at $65,702 — a fourth consecutive
                FINALIZED daily close above the 200W $62,019, on top of 06-11&rsquo;s
                $63,598, 06-12&rsquo;s $63,547 and 06-13&rsquo;s $64,418, and the
                highest of the four. That is the strict upgrade from the 06-14 read
                (three finalized closes). Spot $65,680 sits +5.90% above the floor and
                the in-progress 06-15 W-MON weekly bar prints $65,625 = +5.81% above.
                The full-history 200-week SMA is $62,019 (200 closed bars ending
                06-08); the weekly-close-below-own-200W frequency is 8 / 154 = 5.19% —
                a low-base-rate location the tape has now sat back above for four
                finalized daily closes. The single resolving event is the 06-15 weekly
                close, which lands TODAY: a close above $62,019 confirms the reclaim (a
                one-week dip-and-reclaim of the post-06-08 lineage), a close below
                would still confirm the first sustained weekly-200W break — but four
                finalized daily closes above plus a +5.81% intraweek cushion make the
                reclaim the higher-probability outcome by a wide margin. Status:{' '}
                <em>watch open, reclaim strengthening, resolves today, no position</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor (full-history W-MON)</span><span className="dn-lvl-v">$62,019 · 200 closed bars ending 06-08 · live spot +5.90% / +$3,661 above</span></div>
                <div><span className="dn-lvl-k">in-progress weekly (06-15)</span><span className="dn-lvl-v bull">1m-close $65,625 = +5.81% / +$3,606 above the 200W — provisional until the 06-15 W-MON close TODAY (23:59Z)</span></div>
                <div><span className="dn-lvl-k">finalized daily-close lineage</span><span className="dn-lvl-v bull">06-11 $63,598 FINAL · 06-12 $63,547 FINAL · 06-13 $64,418 FINAL · 06-14 $65,702 FINAL (all above) · 06-15 in-progress $65,625 (above) — four finalized closes above the floor</span></div>
                <div><span className="dn-lvl-k">reclaim confirmation (bullish)</span><span className="dn-lvl-v bull">06-15 weekly close &gt; $62,019 — confirms the floor reclaim; re-opens the scout-long case on a confirmed turn</span></div>
                <div><span className="dn-lvl-k">break confirmation (bearish)</span><span className="dn-lvl-v bear">06-15 weekly close &lt; $62,019 — first sustained weekly close below the 200W in the post-06-08 lineage (last full-history below-own-200W close was 2023-10-09); now a low-probability path given the +5.81% cushion</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the 200W is a weekly-close line, not an
                intraday level — spot +5.90% above and the in-progress bar +5.81%
                above do not resolve it; only the 06-15 W-MON close does, and that
                lands today. Four finalized daily closes (06-11 $63,598, 06-12
                $63,547, 06-13 $64,418, 06-14 $65,702) sit above; treat today&rsquo;s
                weekly close as the binary, and read the 15JUN 08:00Z settle and the
                daily-close lineage as the interim tells. The strengthened intraweek
                hold widens the odds toward reclaim, it does not close the trade until
                the candle prints.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STILL CAN&rsquo;T FIRE · flip leg holds, but the funding leg DIED again + the TD9-BUY cluster is fully inverted to a SELL cluster · stood down</span>
              <div className="dn-trade-name">
                Mean-revert long scout — still can&rsquo;t fire: the flip leg holds (spot +3.34% above $63,557), but the funding short-pay leg-2 DIED again (funding flipped back positive at the snap, +2.69% ann) and the TD9-BUY cluster is fully inverted (four ⚡ TD9 SELL across 15m / 30m / 8h / 12h, the 3d at a water-up death cross Sell 1) — the gate is broken on two of three legs
              </div>
              <div className="dn-thesis">
                The scout is a three-leg gate: (1) a TD9-BUY cluster, (2) a funding
                short-pay ≥4h contiguous streak negative at the snap, (3) a 1h close
                above the 0-γ flip. On 06-14 leg 2 had REVIVED and leg 3 held, but leg
                1 had inverted to a SELL read. This cut the legs decayed yet again, on
                a different combination: <em>Leg 3 HOLDS</em> — the flip walked up only
                to $63,557 and spot sits +3.34% above (+3.69% idx).{' '}
                <em>Leg 2 DIED again</em> — funding flipped back to long-pay at the
                snap (+2.69% ann); the window ran a long short-pay leg (longest neg
                streak 1079 rows / ~18h) but it ENDED at 06-15 02:04 BJ near the
                window low, and the contiguous leg into the snap is now POSITIVE (362
                rows / ~6h), so funding is not negative at the snap and the ≥4h
                short-pay requirement fails. <em>Leg 1 stays INVERTED</em> — there is
                no TD9-BUY anywhere; instead four ⚡ TD9 SELL fired (15m / 30m / 8h /
                12h), the 3d holds a water-up death cross at Sell 1, and bear
                divergences sit on 30m / 1h / 4h. Net: the scout cannot fire — a
                mean-revert long is gated on a TD9-BUY cluster that is fully inverted
                to a SELL cluster, with the funding leg dead and only the flip leg
                live, and the move it was designed to catch already ran four sessions.
                The gate is broken on two of three legs, not closer to a clean fire.
                Status: <em>stood down, no entry</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">leg 1 · TD9 cluster</span><span className="dn-lvl-v bear">INVERTED — no TD9 BUY anywhere; four ⚡ TD9 SELL (15m / 30m / 8h / 12h), 3d water-up death cross Sell 1, bear divs on 30m / 1h / 4h — a full SELL cluster</span></div>
                <div><span className="dn-lvl-k">leg 2 · funding short-pay ≥4h</span><span className="dn-lvl-v bear">DEAD again — funding flipped back positive at the snap (+2.69% ann); the ~18h short-pay leg ended pre-snap (06-15 02:04 BJ), trailing leg into the snap is POSITIVE (362 rows / ~6h) — fails the negative-at-snap requirement</span></div>
                <div><span className="dn-lvl-k">leg 3 · 1h close &gt; flip</span><span className="dn-lvl-v bull">HOLDS — flip $63,557, spot +3.34% above (idx +3.69%) — clean above-flip, but academic with leg 1 inverted and leg 2 dead</span></div>
                <div><span className="dn-lvl-k">trigger (all 3 clean)</span><span className="dn-lvl-v bull">confirmed TD9 BUY cluster AND a live funding short-pay ≥4h negative at the snap AND 1h close &gt; flip — then scout long 0.2R; only leg 3 is live this cut, so not simultaneously clean</span></div>
                <div><span className="dn-lvl-k">stop / size</span><span className="dn-lvl-v bear">1h close &lt; $61,484 (06-10 daily close / 200W band) · size 0.2R · take half at the cycle anchor D-SMA100 $72,608</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R sketch (illustrative, not a live order):</b> were the gate to
                re-arm, a trigger on a clean 1h close above the flip $63,557 against a
                $61,484 stop is ~$2,073 risk; the first target at the cycle anchor
                $72,608 is ~$9,051 reward (measured from the $63,557 entry) ≈ 4.37:1
                — attractive on paper, but the gate cannot
                fire while the TD cluster is inverted to a SELL read and the funding
                leg is dead. <b>Hard rule:</b> do not synthesize an entry from the one
                leg that is live — a mean-revert long requires a TD9-BUY cluster, and
                the cluster has flipped to four ⚡ TD9 SELL with bear divergences and
                overbought fast-frame RSI; buying an extending, overbought tape into a
                TD9-SELL cluster with every MA overhead is exactly the anticipation
                the framework forbids. The honest read: the scout has now failed to
                fire on a fourth consecutive different broken combination (flip-then-
                funding 06-13, TD-cluster 06-14, funding-and-TD this cut) — wait for a
                confirmed TD9-BUY cluster to re-form AND the 06-15 weekly reclaim, do
                not retrofit.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — BOTH legs remain UN-FIRED (weekend-carried at the 06-14 un-fired state)</span>
              <div className="dn-trade-name">
                Macro tail put-spread — closed; re-grow gates remain UN-FIRED on both legs: weekend-carried 10Y 4.45% (below the 4.53% leg-A gate) AND HY OAS 2.78% (AT, not above, the leg-B gate); reclaim-long rates filter (10Y &lt; 4.55%) holds TRUE
              </div>
              <div className="dn-thesis">
                The macro tail put-spread is closed with no residual. The re-grow legs
                both fired 06-12 and both un-fired 06-13; across 06-14 and this cut the
                FRED daily series are weekend-carried at the Friday 06-12 closes, so
                nothing re-fired: 10Y holds 4.45% (below the 4.53% gate and inside the
                reclaim-long filter 10Y &lt; 4.55%), and HY OAS holds 2.78% (at, not
                above, its gate).{' '}
                <span className="dn-em">There is no fresh weekend macro signal — the
                gates stay un-fired by virtue of being carried below them, and the only
                live macro tick is DXY easing further below 100 (a second-day risk-on
                read). The macro tape stays aligned with the BTC turn rather than
                fighting it.</span>{' '}
                A re-grow would have leaned against the bounce; the gates staying
                un-fired keeps even the discretionary tension off the table. The desk
                holds no tail and has no gate to fire against the net-long-gamma,
                200W-reclaiming tape. Re-read once Monday FRED daily prints resume.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed · no residual · re-grow gate UN-FIRED on both legs (weekend-carried) — no tension to manage</span></div>
                <div><span className="dn-lvl-k">re-grow leg A (UN-FIRED)</span><span className="dn-lvl-v bull">10Y &gt; 4.53% close — UN-FIRED at 4.45% (weekend-carried below the gate)</span></div>
                <div><span className="dn-lvl-k">re-grow leg B (UN-FIRED)</span><span className="dn-lvl-v bull">HY OAS &gt; 2.78% close — UN-FIRED at 2.78% (weekend-carried AT the gate, not above)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — HOLDS TRUE at 4.45%</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as the
                levels drift, not backtested breakpoints, and across the weekend they
                are simply carried — re-read once Monday&rsquo;s first fresh FRED daily
                print lands. A fresh tail would only make sense if the BTC-internal
                structure rolled back over (book re-deepens short-gamma below a
                re-failing flip AND the 06-15 weekly fails) WITH the macro legs
                re-firing — none of those holds now. Re-arm the watch only on a clean
                re-fire of BOTH macro legs into a BTC-internal breakdown; absent that,
                there is no tail to grow.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · ON HOLD — the SM feed is FROZEN ~70.5h, the framework cannot be assessed on its own data this cut</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — ON HOLD: the Hyperliquid SM feed froze 2026-06-12 01:36Z (~70.5h stale), so no SM Δnet step can be computed; the perp-tape proxy (OI +1,423 second-day build, funding flipped back positive, perp discount) now suggests longs pressing the up-leg rather than shorts leaning into it — but it is unconfirmable
              </div>
              <div className="dn-thesis">
                The squeeze-cycle framework runs as a watchlist with no calendar prior
                (the cadence was falsified late May), and this cut it is ON HOLD for a
                third consecutive note because its primary input is dark: the SM block
                in live_db has not advanced since 2026-06-12 01:36Z, so the SM
                long/short/net are frozen and no discrete Δnet ≥ +3k cover step or
                ≤ −3k re-stack can be measured without fabricating.{' '}
                <span className="dn-em">The squeeze read this cut therefore rests
                entirely on the perp-tape proxy, which shifted vs 06-14: OI EXPANDED a
                second day (+1,423) but funding FLIPPED BACK positive into the snap and
                the 4h rally was bought on both spot AND futures aggressors — the
                configuration of longs pressing a rally (paying funding to hold) rather
                than the shorts-leaning re-stack tell of 06-14. That is a less
                squeeze-primed read, but with the SM feed dark it cannot be
                confirmed.</span> Read any fresh Δnet ≤ −3k single-minute step (Δshort
                &gt; 0 + Δlong &lt; 0 same minute) as a re-stack hostile-2 signal once
                the feed thaws, and any Δnet ≥ +3k cover step as its inverse — but
                neither can be read while the feed is frozen.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v stale">ON HOLD · SM feed frozen ~70.5h (since 2026-06-12 01:36Z) · no SM Δnet step computable this cut</span></div>
                <div><span className="dn-lvl-k">perp-tape proxy (live)</span><span className="dn-lvl-v">OI +1,423 (+1.42%) a second-day build · funding flipped back positive (snap +2.69%) · 4h spot CVD +1,035 / futures CVD +974 (both bought the rally) · perp −$53.70 discount — longs pressing the up-leg, unconfirmable vs SM</span></div>
                <div><span className="dn-lvl-k">forward gating</span><span className="dn-lvl-v">once the SM feed thaws: fresh Δnet ≤ −3k single-minute = re-stack hostile-2 signal; Δnet ≥ +3k = cover ignition — no time prior either way; until then the proxy is the only read</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the cadence is dead (falsified late May),
                and the SM feed is frozen, so there is no SM data to read this cut —
                treat the framework as ON HOLD, not as a quiet book. Do NOT carry the
                frozen −37.3k net forward as if it were a live read or difference it
                against a future thawed value as a single step (the gap will be a
                multi-day accumulation, not a minute step). The perp-tape proxy now
                points to longs pressing the bounce rather than shorts re-stacking, but
                without the SM feed it stays a proxy. Resume the framework the moment
                the feed advances; re-read the first fresh Δnet step for which way the
                book commits.
              </div>
            </div>
            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the 200W reclaim STRENGTHENED (four finalized daily closes above; the 06-15 close resolves today, leaning reclaim hard) · the scout STILL can&rsquo;t fire as the funding leg died again and the TD cluster stayed inverted · the dealer book deepened net-long-gamma to +74.1M · the perp tape turned to longs pressing but the SM feed is frozen · desk flat</span>
            </h2>

            <p>
              Of the 06-14 conditions: the 200W cycle-floor reclaim STRENGTHENED (the
              06-14 daily close finalized at $65,702, a fourth finalized close above
              the floor, spot +5.90% above, in-progress 06-15 bar +5.81% above); the
              dealer book DEEPENED its net-long-gamma to +74.1M and spot pulled +3.34%
              above the flip; the mean-revert scout STILL can&rsquo;t fire — its flip
              leg holds, but its funding leg died again (flipped back positive at the
              snap) and its TD9-BUY cluster stayed fully inverted to a SELL read, so
              it is broken on two of three legs; the macro re-grow legs remain UN-FIRED
              (weekend-carried at 10Y 4.45%, HY OAS 2.78%) and the reclaim-long filter
              holds; and the SM feed is FROZEN ~70.5h so the squeeze-cycle framework is
              ON HOLD and the perp-tape proxy is the only positioning read. <em>The
              single structural read is a bounce that extended into a fourth-session
              up-leg on firming structure — the 200W reclaim strengthened to four
              closes, gamma deepened to +74.1M, the fast frames all reclaimed cloud and
              the nearest daily MAs came within ~1.2–1.5%, and the rally was bought on
              both spot and futures — but it is doing so into overbought fast-frame RSI
              (77–79), four ⚡ TD9 SELL signals and bear divergences on the mid frames,
              with every MA overhead, funding flipped back positive, and the
              smart-money side unreadable.</em> The conditions today re-set around the
              strengthened floor reclaim that resolves this session, the still-grounded
              scout (now broken on the funding and TD legs), a macro tail with both
              gates un-fired, and a squeeze framework on hold:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>200W weekly-close reclaim (bullish)</td><td className="bull">06-15 W-MON close &gt; $62,019 — resolves TODAY (23:59Z); four finalized daily closes above + in-progress bar +5.81% above</td><td>confirms the floor reclaim, a one-week dip-and-reclaim of the post-06-08 lineage; re-opens the scout-long case on a confirmed turn — now the higher-probability path by a wide margin</td></tr>
                <tr><td>200W weekly-close break (bearish)</td><td className="bear">06-15 W-MON close &lt; $62,019</td><td>first sustained weekly close below the 200W in the post-06-08 lineage (last full-history below-own-200W close was 2023-10-09) — now a low-probability path after four finalized daily closes above and a +5.81% cushion; escalate the cycle-regime read if it prints</td></tr>
                <tr><td>15JUN expiry settle (today 08:00Z, ~8h ahead)</td><td>+28.59M positive front chunk clears (the 06-15 weekly settle, on the binary date); ex-15JUN aggregate ≈ +45.5M (a smaller positive book post-settle)</td><td>read the settle as an interim tell — clearing a POSITIVE chunk trims the net-long-gamma cushion; the book stays firmly net positive, not a regime change; the option settle (08:00Z) and the weekly candle close (23:59Z) coincide today</td></tr>
                <tr><td>Mean-revert long scout — funding + TD legs (BROKEN)</td><td className="bear">funding flipped back positive at the snap (+2.69% ann, leg-2 DEAD); TD9-BUY cluster fully inverted (four ⚡ TD9 SELL, 3d death cross Sell 1, bear divs on 30m/1h/4h)</td><td>the scout cannot fire while the funding leg is dead and the TD cluster is inverted to a SELL read, even though the flip leg holds; stand down — re-arm only on a confirmed TD9-BUY cluster re-forming AND a live funding short-pay ≥4h negative at the snap AND the 06-15 weekly reclaim, do not synthesize from the one live leg</td></tr>
                <tr><td>0-γ flip (held low, spot well above)</td><td className="bull">flip $63,557 (+$198); spot +3.34% / idx +3.69% — both ABOVE, gap widened again</td><td>spot pulled further away above the flip as gamma deepened; a dampening, supportive dealer location, not a trigger on its own</td></tr>
                <tr><td>Macro tail re-grow (BOTH legs UN-FIRED, carried)</td><td className="bull">10Y &lt; 4.53% (UN-FIRED at 4.45%, weekend-carried); HY OAS AT 2.78% (UN-FIRED, not above)</td><td>weekend-carried below/at both gates; no tail to grow and no tension to manage — macro aligned with the BTC turn; re-read once Monday FRED daily prints resume, re-arm only on a clean re-fire of BOTH legs into a BTC-internal breakdown</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (SM feed FROZEN ~70.5h)</td><td className="stale">ON HOLD — no SM Δnet step computable; perp-tape proxy now points to longs pressing the up-leg</td><td>the framework cannot be assessed on its own data while the feed is frozen; resume the moment it thaws and read the first fresh Δnet ≤ −3k (re-stack) or ≥ +3k (cover) single-minute step; do not difference the frozen net against a future thawed value as a step</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                the 06-15 weekly close against the 200W $62,019, which resolves end of
                today (now leaning reclaim hard with four finalized daily closes above
                and the in-progress bar +5.81% above): a weekly close back above the
                200W confirms the floor reclaim and re-opens the scout-long case once a
                TD9-BUY cluster re-forms; a weekly close below would still confirm the
                first sustained weekly-200W break of the post-06-08 lineage (last
                full-history below-own-200W close was 2023-10-09), now a low-probability
                path
              </span>. Until then this note runs as written: the desk is flat, the 200W
              watch is the primary framework and its reclaim strengthened to four
              finalized daily closes above, the mean-revert long scout still
              can&rsquo;t fire (the funding leg died again and the TD cluster stayed
              inverted to a SELL even as the flip leg held — no chase), the macro tail
              re-grow stays un-fired (weekend-carried) with the macro tape aligned to
              the BTC turn, and the squeeze-cycle hostile-2 framework is ON HOLD with
              the SM feed frozen ~70.5h. The dealer book deepened to +74.1M
              net-long-gamma and spot pulled +3.34% above the flip; funding flipped
              back to long-pay at the snap; OI expanded a second day as the rally was
              bought on both spot and futures; BTC&rsquo;s ties to the US tech indices
              tightened sharply inside a still-NORMAL broad regime. The right read for
              the next 24h is{' '}
              <em>patient and flat — let the 06-15 weekly close confirm the
              strengthened floor reclaim and let a TD9-BUY cluster re-form before the
              scout is anything other than grounded; the structure firmed and the
              bounce extended into the lower MA band, but it is doing so overbought and
              into a TD9-SELL cluster with the position book unreadable, and an
              extending-but-overbought up-leg is not a trade</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 — post codex hostile audit (2026-06-15)
            </span>
            <b>Status:</b> this is the <b>v2</b> cut built on the 2026-06-15 00:06Z
            atomic snapshot, <b>post codex hostile audit</b>. STAGE B codex
            cross-model hostile audit returned{' '}
            <b>PASS-WITH-NOTES (0 CRITICAL / 0 MAJOR / 1 MINOR / 0 NIT)</b>; the
            ask-deepseek arithmetic second-audit (adjudicated by STAGE C, recomputed
            before acting) surfaced one CRITICAL R/R miscalc and one MAJOR sign flip
            that codex did not catch, plus minor rounding notes. Full record:{' '}
            <code>audits/2026-06-15-desk-note.md</code>. <b>Findings + grep-closure
            (each pattern searched across the FULL EN file; hits-after = 0 ⇒
            RESOLVED):</b>{' '}
            <b>DN-001 (MINOR · codex)</b> — intraday low/range labeled spot but the{' '}
            <code>$65,775 / $63,651</code> values + 07:57 high match the live-tape
            perp/OHLC h/l fields, not the spot column. Fix: relabeled the lead range
            as a <b>perp/OHLC tape range</b> and changed &ldquo;spot dipped&rdquo; →
            &ldquo;the tape dipped&rdquo;. Patterns searched:{' '}
            <code>spot dipped</code> (before 1 / after 0), lead{' '}
            <code>$65,775 / $63,651</code> range attribution (relabeled; the L476
            match is the MTF scan&rsquo;s own 24h H/L, correctly labeled as scan and
            left intact) — <b>RESOLVED</b>.{' '}
            <b>SA-CRIT (CRITICAL · ask-deepseek, adjudicated TRUE)</b> — scout R/R
            sketch reward was measured from the stop, not the entry: 72,608 − 61,484
            = $11,124 was quoted, but reward from the $63,557 entry is 72,608 − 63,557
            = $9,051, so the ratio is 9,051 / 2,073 = 4.37:1, not 5.4:1. Fix: reward{' '}
            <code>~$9,051</code> (measured from the $63,557 entry), ratio{' '}
            <code>4.37:1</code>. Patterns searched: <code>11,124</code> (before 1 /
            after 0), <code>5.4:1</code> (before 1 / after 0) — <b>RESOLVED</b>.{' '}
            <b>SA-MAJ (MAJOR · ask-deepseek, adjudicated TRUE)</b> — $60k crash-put
            change carried a sign flip: lightening from −21.07M to −18.00M is a{' '}
            <b>+$3.07M</b> change, not −$3.07M. Fix:{' '}
            <code>+$3.07M (−21.07M → −18.00M)</code>. Pattern searched:{' '}
            <code>−$3.07M</code> / <code>-$3.07M</code> (before 1 / after 0; the
            from/to statements at the meta tile, dealer wall and source-pin lines were
            already correct and unsigned) — <b>RESOLVED</b>.{' '}
            <b>SA-MIN (MINOR · ask-deepseek, adjudicated ACCEPTED-AS-CONVENTION)</b> —
            header <code>$65,680</code> vs prose <code>$65,679.88</code> is the
            deliberate rounded-stamp convention (disclosed: displayed values
            $-rounded, offsets from exact series); range low <code>$63,651</code>{' '}
            (live-tape h/l) vs MTF scan <code>$63,650</code> is a $1 tape-vs-scan
            cross-source rounding, both correctly sourced. No number change; intended
            values are unambiguous. <b>All CRITICAL + MAJOR + MINOR findings RESOLVED;
            no UNRESOLVED residue — promoted to v2.</b> The audited source pins
            below are recorded for lineage:{' '}
            funding × 1095 (snap +2.69% ann from raw +0.002455, FLIPPED BACK positive
            at the snap, n2n mean −2.58% ann, range −6.72% / +6.11%, cap 1 / 1441 at
            the +6.11% max and 2 / 1441 at the −6.72% min, neg-minute share 74.88% =
            1079 / 1441, longest contiguous negative streak 1079 rows / ~17h59m ended
            06-15 02:04 BJ / UTC 06-14 18:04, trailing POSITIVE streak ending AT the
            snap 362 rows / ~6h02m with funding positive at the snap — scout funding
            leg-2 DEAD again); GEX dual-reference sign (flip $63,557, spot +3.34% =
            65,679.88 / 63,557 − 1 / idx +3.69% = 65,899 / 63,557 − 1 — both ABOVE,
            gap widened vs 06-14; aggregate +74.1M grew from +63.4M; $60k −18.00M
            lightened from −21.07M; displayed expiry rows sum ≈ +76.13M NON-ADDITIVE
            vs the dashboard +74.1M, dashboard authoritative; 15JUN 0.3DTE +28.59M
            settles 08:00Z today (the 06-15 weekly settle), ex-15JUN ≈ +45.5M,
            clearing a positive chunk LOWERS the aggregate); 200W full-history W-MON
            SMA $62,019 (200 closed bars ending 06-08) vs live spot +5.90% above and
            in-progress 06-15 bar $65,625 +5.81% above, 8 / 154 = 5.19% frequency,{' '}
            <code>weekly_200sma.json</code> ABSENT (200W computed directly from parquet,
            JSON percentile / last-event unavailable, not fabricated);{' '}
            <b>SM FEED FROZEN</b> — the Hyperliquid SM block has not advanced since
            2026-06-12 01:36Z (~70.5h stale), long 13,532.412 / short 50,825.664 / net
            −37,293.252 are the frozen last-written values (byte-identical to the 06-13
            and 06-14 notes, freeze predates both), so NO SM Δ / cut fraction /
            squeeze-cycle step is computed this cut (not fabricated); daily-close
            lineage (06-08 $63,058, 06-09 $61,695, 06-10 $61,484 FINAL, 06-11 $63,598
            FINAL, 06-12 $63,547 FINAL, 06-13 $64,418 FINAL, 06-14 $65,702 FINAL,
            06-15 in-progress $65,625 — FOUR finalized closes above the floor); OI n2n
            +1,423 BTC (+1.42%, snap 101,578, a second consecutive build smaller than
            06-14&rsquo;s +2,365); 30D RV 42.09% (30 returns / 31 closes; 42.82% alt at
            29 returns; window 05-16 → 06-15); cross-asset |r| 0.421 NORMAL, BTC +3.34%
            mid-pack on 7d (PALL / JP225 / COPPER / TSLA ran higher) but BTC-equity
            correlations tightened sharply (NQ +0.681, SP500 +0.673); macro Tier-1
            WEEKEND-CARRIED at the Friday 06-12 closes (10Y 4.45% — re-grow leg-A
            UN-FIRED, reclaim-long filter 10Y &lt; 4.55% holds; HY OAS 2.78% AT the
            gate, leg-B UN-FIRED; TIPS 2.16% regime-z EXTREME; DXY 99.46 eased −0.29
            n2n from 99.75, dashboard 1d Δ −0.29 coincides; MOVE 69.4; Fed net liq
            $5.897T); no cb_cvd reset in the n2n window; full MA matrix vs live spot
            $65,679.88 off parquet 2026-06-15 00:06Z close $65,625.10 (D-SMA100
            $72,608 cycle anchor −9.54%, every MA overhead, nearest D-SMA20 −1.18% /
            D-EMA20 −1.46%, W-SMA150/200 non-computable at 129 subset weekly bars,
            W-EMA150/200 seed-disclosed); MTF cross labels per the archived scan (all
            four fast/mid frames 15m / 30m / 1h / 4h above cloud, 4h fresh water-up
            golden cross 1b, 8h into cloud, 1d water-down golden cross 2b below cloud,
            four ⚡ TD9 SELL on 15m / 30m / 8h / 12h, bear divs on 30m / 1h / 4h, 3d
            water-up death cross Sell 1, fast RSI 77.8 / 78.9 / 75.9 overbought);
            claims-vs-loaded-data (NTT / max-pain / strike-IV / BTC-NQ framework-only;
            JGB monthly do not lean; IV chain-median across 948 instruments not a
            tradable spread). Archive:{' '}
            <code>/opt/desk-note/snapshots/2026-06-15-0006/</code> (btc_gex.html,
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
            Numbers reflect a single atomic snapshot (2026-06-15 00:06Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-06-14 22:17Z (~1h49m before
            snapshot) and is weekend-carried, and the Hyperliquid SM feed is
            frozen ~70.5h — those inputs are explicitly stale and flagged as
            such. This is the <b>v2</b> cut — <em>post the STAGE B codex
            hostile audit; the findings and grep-closure record are in the audit
            trace above.</em> Levels, sizes, and conditions are illustrative of the
            desk&rsquo;s process, not standing recommendations. Past correlation,
            gamma, and positioning patterns do not bind future tape. Derivatives
            carry the risk of total loss and, where leveraged, loss exceeding
            deposited margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                A fourth-session up-leg on firming structure — the 200W reclaim
                strengthened to four finalized closes above, the dealer book deepened
                net-long-gamma to +74.1M and spot pulled +3.34% above the flip, the
                fast frames all reclaimed cloud and the nearest daily MAs came within
                ~1.2–1.5%. But it is extending overbought (RSI 77–79) into four ⚡ TD9
                SELL signals, funding flipped back to long-pay, every MA is overhead,
                and the SM feed is frozen ~70.5h so the position book is unreadable.
                Flat and patient — the 06-15 weekly close resolves today, leaning
                reclaim hard.
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
            v2 · 2026-06-15 00:06Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
