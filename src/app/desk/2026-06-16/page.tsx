import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-16 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-16',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-16' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260616() {
  await requireViewer('/desk/2026-06-16');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-16 · v2</span>
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
              <span className="dn-big">$66,332</span>
              n2n&nbsp;<span>+0.99%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-16 00:06Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-16 00:06Z (snapshot pin)</td>
                  <td className="dn-flag">
                    fresh · 1-min · all derived values pinned to the 00:06Z anchor
                    row · live `t` field is BJ-local (UTC+8) so the 00:06Z anchor
                    row is <code>06-16 08:06</code>; this snapshot lands ~16h06m
                    after the 15JUN 08:00Z option settle (the 06-15 weekly settle,
                    now PAST) and ~7h54m before the 16JUN 08:00Z settle ·{' '}
                    <b>window convention:</b> every live-tape comparison below is{' '}
                    <b>NOTE-TO-NOTE (n2n)</b> — measured from the prior note&rsquo;s
                    06-15 00:06Z snap to this 00:06Z snap, i.e. 1441 sampled rows ≈
                    24h00m for the day window (the prior and current snaps are exactly
                    24h apart this cut), 241 rows ≈ 4h00m, and 61 rows ≈ 1h00m, so the
                    day/4h/1h deltas are tagged <code>n2n</code>; any remaining
                    &ldquo;24h&rdquo; tag is the MTF scan engine&rsquo;s own window or
                    a forward-looking phrase · <b>SM block STILL FROZEN:</b> the
                    Hyperliquid smart-money feed has not advanced since 2026-06-12
                    01:36Z (~94.5h stale at this snap) — SM long/short/net read STALE
                    and are treated framework-only, not as live positioning (see meta
                    tiles + Positioning section)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-16 00:01Z scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    ~5-min stale vs the 00:06Z snapshot anchor · in-progress bars ·
                    archived to <code>/opt/desk-note/snapshots/2026-06-16-0006/</code>{' '}
                    at author time
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-16 00:02Z snapshot</td>
                  <td className="dn-flag">
                    post-15JUN-settle · ~4-min stale vs the snapshot anchor · Deribit
                    idx $66,472 vs live $66,331.99 ($140 above) · 934 inst (was 948 on
                    06-15, −14 as the 15JUN weekly chain settled and rolled off) ·
                    16JUN 0.3DTE +8.79M settles at 08:00Z today (~8h ahead) — a small
                    positive front chunk · ex-16JUN aggregate ≈ +52.5M still net
                    positive (clearing the positive front chunk LOWERS the aggregate;
                    dashboard total +61.3M authoritative, displayed rows are
                    non-additive — see dealer section) · archived to{' '}
                    <code>/opt/desk-note/snapshots/2026-06-16-0006/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-16 00:01Z
                  </td>
                  <td className="dn-flag">~5-min lag · 7d 1h bars · 22 assets · 167 rows · regime NORMAL (mean |r| 0.413) · archived to <code>/opt/desk-note/snapshots/2026-06-16-0006/</code></td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-15 22:15Z render</td>
                  <td className="dn-flag">
                    ~1h51m render lag · <b>FRESH Monday prints resumed</b> — the FRED
                    Tier-1 daily series are no longer weekend-carried: 10Y prints a
                    fresh 4.48% (+3.0bp), HY OAS a fresh 2.71% (−7.0bp), TIPS 2.17%
                    (+1.0bp) on the Monday US session, so the Δ ARE fresh moves this
                    cut · DXY 99.46 (1d Δ −0.29; flat note-to-note from 06-15&rsquo;s
                    99.46 — the dashboard 1d Δ reflects the prior session, the n2n move
                    is ~0) · Fed net liq $5.897T · archived to{' '}
                    <code>/opt/desk-note/snapshots/2026-06-16-0006/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix + 200W floor</td>
                  <td className="dn-v-cell">btcusdt_1m parquet · full-history + 2024–2026 subset</td>
                  <td className="dn-flag">
                    offsets recomputed vs live spot · subset MA ladder from the
                    2024–2026 window per desk policy · 200W floor read from the
                    full-history parquet (W-MON resample, 200 CLOSED bars ending the
                    06-15 weekly close) ·{' '}
                    <code>weekly_200sma.json</code> is ABSENT, so the 200W is
                    computed directly from the parquet and the JSON percentile /
                    last-event fields are unavailable (not fabricated) · subset
                    W-SMA150 / W-SMA200 non-computable (130 subset weekly bars)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale · monthly (~75d) · do not treat as live</td>
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
              <span className="dn-v bear">−0.67%</span>
              <span className="dn-src">live · snap −0.67% ann (raw −0.000609 × 1095; short-pay live at the snap — funding FLIPPED BACK negative) · n2n mean ann −3.14% (was −2.58% on 06-15; the window ran a deeper short-pay leg this cut) · cap occupancy 2 / 1441 sampled rows at the +2.72% max, 1 / 1441 at the −7.84% min · neg-minute share 80.57% (1161 / 1441, was 74.88% on 06-15, +5.69pt) · n2n peak +2.72% ann · n2n trough −7.84% ann</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · n2n</span>
              <span className="dn-v bear">mean −2.58% → −3.14% (−0.56pt) · snap +2.69% → −0.67% (−3.36pt)</span>
              <span className="dn-src">range −7.84% / +2.72% ann · the funding path ran a long short-pay leg into the snap (the trailing contiguous NEGATIVE streak ending AT the snap is 915 sampled rows / ~15h15m, ending at the snap) and funding is NEGATIVE at the snap · funding IS negative at the snap, so the scout funding leg-2 gate is REVIVED again, reversed from 06-15&rsquo;s DEAD read — third consecutive flip-state (DEAD 06-13 → REVIVED 06-14 → DEAD 06-15 → REVIVED now)</span>
            </div>
            <div>
              <span className="dn-k">OI · n2n</span>
              <span className="dn-v bull">+1.69% (+1,721 BTC)</span>
              <span className="dn-src">live · 103,299 (up from the 06-15 snap 101,578, +1,721) · OI EXPANDED a THIRD consecutive day — a larger build than 06-15&rsquo;s +1,423, extending the OI build into the up-leg (the post-06-08 builds were +737 on 06-10, +216 on 06-11, then the −1,211 / −466 bleed on 06-12 / 06-13, then +2,365 on 06-14, +1,423 on 06-15 and +1,721 this cut) · n2n peak 104,795, trough 101,509</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v">57.10 / 42.90</span>
              <span className="dn-src">live_db `mkt_long_pct` · bled a further −1.60pt vs 06-15&rsquo;s 58.70 (the de-crowding continued for a third day even as price rose — retail STILL did NOT chase the up-leg) · n2n range 56.60 / 58.92 · peak 58.92 / trough 56.60</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v stale">−37.3k · FEED FROZEN ~94.5h (NOT LOADED)</span>
              <span className="dn-src">live_db SM block has NOT advanced since 2026-06-12 01:36Z — long 13,532.412 / short 50,825.664 / net −37,293.252 are the FROZEN last-written values, identical to the 06-13, 06-14 and 06-15 notes&rsquo; (the freeze predates all three). ~94.5h stale at this snap. Treat as STALE / NOT LOADED — no live SM positioning read this cut</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 06-15 note</span>
              <span className="dn-v stale">NON-COMPUTABLE — feed frozen</span>
              <span className="dn-src">the SM endpoints are byte-identical to 06-15 because the feed froze 2026-06-12 01:36Z; no SM Δ, cut fraction, or squeeze-cycle step can be computed this cut without fabricating · the only live positioning reads are retail mkt_long_pct and the perp-tape proxy (OI + funding + basis)</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.4% / 42.40%</span>
              <span className="dn-src">GEX median IV across 934 inst (was 44.5% / 948 on 06-15, −1.1pt as the 15JUN chain rolled off) · IV/RV spread +1.0pt · 30D close-to-close RV 42.40% (30 returns / 31 closes; 29-return alt 43.15%)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+1.69% (spot) / +1.90% (idx) — both ABOVE</span>
              <span className="dn-src">flip $65,232 (was $63,557, walked UP +$1,675) · vs live spot $66,331.99 (66,331.99 / 65,232 − 1 = +1.686%) / GEX file idx $66,472 (66,472 / 65,232 − 1 = +1.901%) — both references ABOVE the flip, but the gap NARROWED vs 06-15 (+3.34% / +3.69% then) as the flip walked up faster than spot rose · aggregate GEX +61.3M (was +74.1M, eased −$12.8M post-15JUN-settle) · $60k crash-put −19.50M (DEEPENED from −18.00M) · P/C 0.64</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The binary RESOLVED — the 06-15 weekly close came in at $66,286,
                cleanly above the $62,230 200W floor, so the cycle-floor reclaim
                the prior note flagged is{' '}
                <span className="dn-tag bull">CONFIRMED</span>, and the up-leg
                ground out a fifth session{' '}
                <span className="dn-tag bull">+0.99% to $66,332</span> while the
                fast frames COOLED out of overbought — but the structure is still
                exhaustion-flagged and the smart-money feed is still dark
              </span>. Inside a perp/OHLC tape range of{' '}
              <span className="dn-tag">$67,255 / $65,314</span>{' '}
              (high @ BJ 23:55 06-15 / UTC 15:55 06-15, low @ BJ 09:06 06-15 /
              UTC 01:06 06-15) the tape pushed to a fresh n2n high then settled
              back, a quieter grind than the V-shaped 06-15 day. The 200W floor
              reclaim is now CONFIRMED on the weekly candle — the 06-15 weekly
              close finalized at{' '}
              <span className="dn-tag bull">$66,286</span> above the $62,230 floor,
              and there are now{' '}
              <span className="dn-tag bull">FIVE finalized daily closes above the
              floor</span> (06-11 $63,598, 06-12 $63,547, 06-13 $64,418, 06-14
              $65,702, 06-15 $66,286) with the in-progress 06-22 weekly bar $66,276
              also above. The dealer book stayed net-long-gamma but eased to{' '}
              <span className="dn-tag bull">+61.3M</span> (was +74.1M) as the 15JUN
              positive chunk settled, the 0-γ flip walked UP to{' '}
              <span className="dn-tag">$65,232</span> (was $63,557), so spot now
              sits <span className="dn-tag bull">+1.69% above the flip</span> — still
              above, but the cushion NARROWED. And spot reclaimed its first daily
              MA: <span className="dn-tag bull">D-SMA20 $66,093 is now BELOW spot
              (+0.36%)</span>, the first positive daily-MA offset of the entire
              lineage, with D-EMA20 $66,675 (−0.51%) the nearest overhead.{' '}
              <em>But the cuts against cleanliness persist: funding FLIPPED BACK
              negative at the snap (−0.67% ann on a ~15h short-pay leg into the
              snap), so the scout&rsquo;s funding leg-2 REVIVED — but its TD9-BUY
              cluster is still fully inverted (top divergences on 15m / 30m / 1h /
              4h, ⚡ TD9 SELL on 8h / 12h, the 4h and 1d pending Sell 8 → 9?); the
              fast-frame RSI did COOL OUT of overbought (15m 43.2 / 30m 48.1 / 1h
              55.8, down from 77.8 / 78.9 / 75.9) but it cooled via a stall-and-fade
              while price held, not via a fresh impulse; the Hyperliquid SM feed is
              FROZEN ~94.5h so the smart-money side is still unconfirmable; and every
              MA above D-SMA20 is still overhead.</em> The mean-revert scout STILL
              can&rsquo;t fire — its flip leg holds and its funding leg revived, but
              its TD9-BUY cluster is inverted to a SELL/top-divergence cluster, the
              single disqualifier for a mean-revert long. This is a bounce that
              extended into a confirmed 200W reclaim on firming structure but is now
              maturing into top-divergence exhaustion with the position book
              unreadable — the desk stays FLAT, and with the binary resolved the
              live tension shifts from the floor to whether this up-leg can clear the
              D-EMA20 / lower-MA band or rolls over from the exhaustion cluster.
            </p>

            <p>
              BTC prints <span className="dn-tag">$66,332</span> live,{' '}
              <span className="dn-tag bull">+0.99%</span> note-to-note — a quieter
              grind-up day, 1h <span className="dn-tag bull">+0.18%</span>, 4h{' '}
              <span className="dn-tag bear">−0.35%</span>, the tape made a fresh n2n
              high at $67,255 then eased back into the snap.{' '}
              <span className="dn-signal">The cycle-floor reclaim is now CONFIRMED on
              the weekly candle — the binary the prior note flagged has
              resolved</span>: the 06-15 weekly W-MON close finalized at $66,286,
              cleanly above the 200W $62,230, and the 06-15 daily close also
              finalized at $66,286, giving FIVE consecutive FINALIZED daily closes
              above the floor — 06-11 $63,598, 06-12 $63,547, 06-13 $64,418, 06-14
              $65,702 and 06-15 $66,286 — with the in-progress 06-22 weekly bar
              $66,276 also above. That is a strict upgrade on the 06-15 lineage (the
              reclaim was leaning-but-unresolved then; it is confirmed now). The MA
              matrix took its first crack this cut: spot has reclaimed{' '}
              <span className="dn-tag bull">D-SMA20 $66,093 (+0.36%)</span> — the
              first daily MA back below spot in the entire post-06-08 lineage — with{' '}
              <span className="dn-tag bull">D-EMA20 $66,675 (−0.51%)</span> the nearest
              overhead, a single small swing away. The cycle anchor{' '}
              <span className="dn-tag bear">D-SMA100 $72,618 (−8.66%)</span> sits
              below the daily stack, and the W-SMA20 weekly floor that broke in early
              June is still <span className="dn-tag bear">$71,619 (−7.38%)</span>{' '}
              overhead.{' '}
              <span className="dn-em">For the first time in this lineage the board is
              not entirely overhead — the 200W floor (+6.59%) AND the D-SMA20 (+0.36%)
              are now positive offsets below spot, while every line above D-EMA20
              stays overhead. This is a tape that has confirmed its cycle-floor
              reclaim on a weekly close and is now pressing into the lower daily MA
              band, with the first fast daily MA reclaimed.</span> The mean-revert
              scout&rsquo;s three-leg gate shifted again, on the funding axis: this
              cut its funding leg REVIVED (funding flipped back negative at the snap)
              and its flip leg holds, but its TD9-BUY cluster stayed fully inverted
              (top divergences on 15m / 30m / 1h / 4h, ⚡ TD9 SELL on 8h / 12h, the 4h
              and 1d at Sell 8 → 9?) — so the gate is broken on its leg-1 TD cluster,
              the one leg that disqualifies a mean-revert long outright. The scout
              stands down.
            </p>
            <h2 className="dn-sec">
              Positioning{' '}
              <span className="dn-roman">I · live tape · SM feed STILL FROZEN ~94.5h (NOT LOADED — no smart-money read) · funding FLIPPED BACK negative at the snap (−0.67% ann on a ~15h short-pay leg into the snap — scout leg-2 REVIVED again) · OI EXPANDED a THIRD day (+1,721) · retail bled −1.60pt and STILL did NOT chase</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important positioning fact this cut is, again, an
                absence: the Hyperliquid smart-money feed is frozen and has now been
                for ~94.5 hours
              </span>. The SM block in live_db has not advanced since{' '}
              <span className="dn-tag stale">2026-06-12 01:36Z</span> — long_btc{' '}
              <span className="dn-tag">13,532.412</span>, short_btc{' '}
              <span className="dn-tag">50,825.664</span>, net{' '}
              <span className="dn-tag">−37,293.252</span> are the last-written values
              and they are <span className="dn-em">byte-identical to the figures the
              06-13, 06-14 and 06-15 notes carried</span>, which means the freeze
              predates all three notes and the smart-money side has been dark across
              the entire up-leg. <span className="dn-em">No SM Δ, no cut fraction, no
              squeeze-cycle single-minute step can be computed this cut without
              fabricating numbers — the entire smart-money side is treated STALE /
              NOT LOADED for a fourth consecutive note.</span> The honest consequence
              is unchanged: the squeeze-cycle hostile-2 framework cannot be assessed
              on its own data, and the only live positioning reads left are retail
              mkt_long_pct and the perp-tape proxy (OI + funding + basis). What that
              proxy says shifted this cut — and the shift is the funding flip back
              negative.
            </p>

            <p>
              <span className="dn-signal">
                The leverage side flipped back again — funding crossed back to
                short-pay at the snap after running a long short-pay leg into it, and
                that is what REVIVES the scout&rsquo;s funding leg
              </span>. Funding is{' '}
              <span className="dn-tag bear">−0.67% ann at the snap</span> (raw
              −0.000609 × 1095), n2n mean{' '}
              <span className="dn-tag bear">−3.14%</span> (vs −2.58% on 06-15), range{' '}
              <span className="dn-tag">−7.84% / +2.72%</span>. The path ran a deep
              short-pay leg into the snap — the trailing contiguous negative streak
              ending AT the snap is{' '}
              <span className="dn-tag bear">915 sampled rows / ~15h15m</span>, and{' '}
              <span className="dn-em">funding is negative at the snap</span>, so the
              ≥4h short-pay requirement is met.{' '}
              <span className="dn-em">The 06-15 read — leg-2 DEAD on a positive-at-snap
              flip — has reversed again: funding is paying shorts at the snap, the
              contiguous leg into the snap is a deep ~15h negative streak, and the
              mean-revert scout&rsquo;s funding short-pay leg is now REVIVED, not dead.
              This is the fourth consecutive note in which the funding leg has flipped
              state (DEAD 06-13 → REVIVED 06-14 → DEAD 06-15 → REVIVED now) — the leg
              is unstable, and that instability is itself the tell: the funding leg
              cannot be relied on as a standalone signal.</span> Neg-minute share rose
              74.88% → 80.57% (1161 / 1441 — most of the window WAS short-pay and it
              stayed negative into the snap), cap occupancy is{' '}
              <span className="dn-tag">2 / 1441 at the +2.72% max, 1 / 1441 at the
              −7.84% min</span>, OI{' '}
              <span className="dn-tag bull">+1,721 BTC (+1.69%)</span> EXPANDED a
              THIRD consecutive day (103,299, up from the 06-15 snap 101,578; a larger
              build than 06-15&rsquo;s +1,423), and retail{' '}
              <span className="dn-tag">mkt_long_pct 57.10%</span> bled a further
              −1.60pt even as price rose — retail STILL did NOT chase the up-leg.
              Perp trades a <span className="dn-tag bear">−$58.49 discount</span> to
              spot at the snap (1h mean −$43.23, 4h mean −$36.94; n2n-day mean
              −$38.61, range −$146.99 / +$39.99 — basis went premium briefly intraday
              but sits discounted at the snap). 1-min aggressor skew snap{' '}
              <span className="dn-tag bull">+19.5</span> (1h mean +1.57) — a buy-
              aggressor tilt right into the snap.{' '}
              <span className="dn-em">
                Funding flipped back to short-pay, OI still expanding a third day,
                perp at a discount, retail de-crowding into the rally: the perp-tape
                proxy reads a rally still being doubted by the perp book (OI building
                while funding pays shorts and perp trades a discount) — a more
                squeeze-primed configuration than the 06-15 longs-pressing read, but
                with the SM feed dark it stays a proxy read, not a confirmed one.
              </span>
            </p>

            <p>
              Windowed flow is <em>a grind-up day bought on spot through the day with
              the back-half 4h fading — a quieter up-day than 06-15, the morning
              push to fresh highs sold back into the snap</em>. n2n-day: price{' '}
              <span className="dn-tag bull">+0.99%</span>, OI{' '}
              <span className="dn-tag bull">+1,721 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +2,582</span>{' '}
              <span className="dn-em">(no cb_cvd reset in the window)</span>, futures
              CVD <span className="dn-tag bull">Δ +2,262</span>, big-print{' '}
              <span className="dn-tag bull">+2,013 BTC</span>, taker-net{' '}
              <span className="dn-tag bull">+2,262</span> —{' '}
              <span className="dn-em">spot AND futures both bought the day decisively
              with a heavy big-print bid (+2,013 BTC net) and OI still expanding — net
              long-side initiation across the day, the strongest day-level flow of the
              up-leg</span>. 4h (into snap): price{' '}
              <span className="dn-tag bear">−0.35%</span>, OI{' '}
              <span className="dn-tag bear">−399 BTC</span>, spot CVD{' '}
              <span className="dn-tag">Δ −34</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +135</span>, big-print{' '}
              <span className="dn-tag bear">−414 BTC</span>, taker-net{' '}
              <span className="dn-tag bull">+135</span> — <em>the fade leg: spot net
              flat, big-prints net sold −414 BTC and OI bled −399 as the push to
              $67,255 was distributed back — the back-half stall after the morning
              high</em>. 1h: price{' '}
              <span className="dn-tag bull">+0.18%</span>, OI{' '}
              <span className="dn-tag bull">+80 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +301</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +121</span>, big-print{' '}
              <span className="dn-tag bear">−10 BTC</span>, taker-net{' '}
              <span className="dn-tag bull">+121</span> — <em>the last hour ticked
              back up, spot and futures aggressors buying small, OI nudging up — a
              modest re-bid into the snap after the 4h fade, not a fresh impulse</em>.
              The day shape is the cleanest read: a strong spot-and-futures-led day
              with a heavy big-print bid that stalled in the back four hours as the
              fresh high was distributed — a bounce the perp book is still doubting
              (funding pays shorts, perp at a discount) even as OI builds a third day.
            </p>
            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · fast-frame RSI COOLED OUT of overbought (15m 43.2 / 30m 48.1 / 1h 55.8, down from 77.8 / 78.9 / 75.9) — the overbought reset via a stall-and-fade while price held · but the exhaustion cluster PERSISTS (top divergences on 15m / 30m / 1h / 4h, ⚡ TD9 SELL on 8h / 12h, 4h &amp; 1d pending Sell 8 → 9?) · D-SMA20 reclaimed, every line above it overhead</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map cooled the overbought froth but kept the exhaustion
                cluster lit: the scan reads net 3 bull / 4 bear / 3 neutral (unchanged
                from 06-15), header tag &ldquo;高级别偏空 · 短线反弹&rdquo;
                (higher-frame bearish · short-term bounce), with a 5/9 reversal regime
                hint (JT&lt;0)
              </span>. The fast frames pulled back OUT of overbought — 15m RSI{' '}
              <span className="dn-tag bull">43.2</span>, 30m{' '}
              <span className="dn-tag bull">48.1</span>, 1h{' '}
              <span className="dn-tag bull">55.8</span> (down hard from 06-15&rsquo;s
              77.8 / 78.9 / 75.9) — the overbought condition that capped 06-15 reset,
              but it reset via a <span className="dn-em">stall-and-fade while price
              held</span> rather than a fresh down-impulse: the 15m slipped back below
              cloud (↑66.4k 7b) on a water-up death cross while 30m and 1h held above
              cloud. The exhaustion signals, however, persist:{' '}
              <span className="dn-tag bear">top divergences on 15m / 30m / 1h /
              4h</span> (four of them) plus{' '}
              <span className="dn-tag bear">⚡ TD9 SELL on 8h AND 12h</span>, with the
              4h and 1d both pending <span className="dn-tag bear">Sell 8 → 9?</span>{' '}
              and the 1M pending Buy 8 → 9?.{' '}
              <span className="dn-em">The bounce relieved its overbought RSI through a
              cooling pullback that held price, but it did so without clearing the
              top-divergence / TD9-SELL exhaustion stack — the classic
              extension-into-exhaustion signature has matured from 06-15&rsquo;s
              overbought-and-rising into a cooled-but-still-divergent read, which is a
              tape losing upside momentum while holding its gains rather than one
              resolving cleanly higher.</span> The affirmative bull persists on the
              daily: <span className="dn-tag bull">1d water-down golden cross 3b</span>{' '}
              (the 06-14 cross held and aged), though the 1d is still below cloud (RSI
              43.8) at Sell 8 → 9?. The mid frames are mixed: 1h holds a water-up death
              cross 4b above cloud at Buy 6, the 4h a water-up golden cross 7b above
              cloud at Sell 8 → 9?, the 8h no-cross in cloud at ⚡ TD9 SELL, 12h
              water-down golden 15b below cloud at ⚡ TD9 SELL. The slow frames stay
              below cloud: 3d holds a{' '}
              <span className="dn-tag bear">water-up death cross 7b at Sell 2</span>{' '}
              (the cycle-frame bear), 1w no cross below cloud Buy 5, 1M holds the
              pending Buy 8 → 9? above cloud.{' '}
              <span className="dn-em">
                Read straight: the bounce cooled its overbought froth (fast-frame RSI
                back to the 43–56 band, 15m slipped below cloud) while holding price
                near the highs — a constructive reset on the surface — but the
                top-divergence cluster across all four fast/mid frames and the ⚡ TD9
                SELL on 8h / 12h survived the cooldown, and the 4h / 1d are a single
                bar from a TD9 SELL of their own. Higher-frame structure still
                bearish; short-term reversal regime still favored the bounce; the
                cooled-but-still-divergent read warns the up-leg is maturing and
                losing momentum even as it holds its gains.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">66,284</td><td className="num bull">43.2</td><td className="bear">death (water-up) 27b</td><td className="bear">below ↑66.4k 7b</td><td>Sell 2</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">66,284</td><td className="num">48.1</td><td className="bear">death (water-up) 12b</td><td className="bull">above ↓65.8k 54b</td><td>Sell 1</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">66,284</td><td className="num">55.8</td><td className="bear">death (water-up) 4b</td><td className="bull">above ↓64.7k 28b</td><td>Buy 6</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">66,284</td><td className="num bull">63.6</td><td className="bull">golden (water-up) 7b</td><td className="bull">above ↓63.3k 7b</td><td className="bear">Sell 8 → 9?</td><td>BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">66,284</td><td className="num bull">60.0</td><td className="neut">no cross</td><td className="neut">in cloud 64.1–68.6k 4b</td><td className="bear">⚡ TD9 SELL</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">66,284</td><td className="num">55.9</td><td className="bull">golden (water-dn) 15b</td><td className="bear">below ↑70.8k 49b</td><td className="bear">⚡ TD9 SELL</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">66,284</td><td className="num bull">43.8</td><td className="bull">golden (water-dn) 3b</td><td className="bear">below ↑74.3k 15b</td><td className="bear">Sell 8 → 9?</td><td>—</td></tr>
                <tr><td>3d</td><td className="num">66,284</td><td className="num bull">40.6</td><td className="bear">death (water-up) 7b</td><td className="bear">below ↑74.7k 5b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">66,284</td><td className="num bull">38.0</td><td className="neut">no cross</td><td className="bear">below ↑100.3k 20b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">66,275</td><td className="num">43.9</td><td className="bull">DIF water-up (no cross)</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (rolling latest file;
                    archived verbatim to{' '}
                    <code>/opt/desk-note/snapshots/2026-06-16-0006/</code>). Header
                    alerts: <em>net 3 bull / 4 bear / 3 neutral · 高级别偏空 · 短线反弹</em>,{' '}
                    <em>top divergences on 15m / 30m / 1h / 4h</em>, <em>bottom
                    divergence on 15m</em>, <em>⚡ TD9 SELL on 8h / 12h</em>,{' '}
                    <em>4h &amp; 1d pending Sell 8 → 9?, 1M pending Buy 8 → 9?</em>,{' '}
                    <em>5/9 reversal regime (JT&lt;0)</em>. Scan spot $66,284, 24h
                    +0.87% (00:01Z MTF scan; the live-tape header at 00:06Z shows
                    +0.99% n2n on the snapshot window — the 5-minute gap and the
                    different window account for the difference), 24h H/L $67,255 /
                    $65,314, qVol $11.09B. Closes are in-progress bars; treat every
                    value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the up-leg has taken its first daily MA — spot
              has reclaimed the D-SMA20 — while the rest of the board stays overhead.
              Spot $66,332 sits ABOVE the 200W floor (+6.59%) AND the{' '}
              <span className="dn-tag bull">D-SMA20 $66,093 (+0.36%)</span>, the first
              daily MA back below spot in the lineage; below every other line. Nearest
              overhead is <span className="dn-tag bull">D-EMA20 $66,675 (−0.51%)</span>{' '}
              — a single small swing — then{' '}
              <span className="dn-tag bear">D-EMA50 $70,518 (−5.94%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $71,619 (−7.38%)</span> (the
              broken weekly floor),{' '}
              <span className="dn-tag bear">D-SMA100 $72,618 (−8.66%; cycle
              anchor)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $73,132 (−9.30%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $73,156 (−9.33%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $73,469 (−9.71%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $73,720 (−10.02%; seed)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $74,736 (−11.24%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $75,893 (−12.60%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $77,397 (−14.30%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $77,976 (−14.93%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $78,548 (−15.55%)</span>. Far
              above and disused: W-EMA100 $82,419 (−19.52%), W-EMA50 $82,831
              (−19.92%), W-SMA100 $88,549 (−25.09%), W-SMA50 $91,034 (−27.14%).{' '}
              <span className="dn-em">
                MAs anchored to parquet 2026-06-16 00:05Z close $66,276.20; offsets
                recomputed against live spot $66,331.99. Displayed MA levels are
                $-rounded; offsets computed from exact series values. Subset MA
                ladder is the 2024–2026 window per desk policy; W-SMA150 / W-SMA200
                non-computable (130 subset weekly bars), W-EMA150 (−14.93%) and
                W-EMA200 (−10.02%) seed from available history and are reported as
                such. The 200W $62,230 is the full-history W-MON line (200 closed
                bars ending the 06-15 weekly close). Daily closes: 06-08 $63,058
                (above), 06-09 $61,695 (below), 06-10 $61,484 FINAL (below), 06-11
                $63,598 FINAL (above), 06-12 $63,547 FINAL (above), 06-13 $64,418
                FINAL (above), 06-14 $65,702 FINAL (above), 06-15 $66,286 FINAL
                (above), 06-16 (in-progress) $66,276 (above) — five finalized closes
                above the 200W floor plus the in-progress bar above.
              </span>
            </p>
            <h2 className="dn-sec">
              Dealer map{' '}
              <span className="dn-roman">III · book EASED to +61.3M net-long-gamma (was +74.1M) as the 15JUN positive chunk settled · 0-γ flip walked UP to $65,232 so spot sits +1.69% above — still above, but the cushion NARROWED (was +3.34%) · 16JUN +8.79M (a small positive chunk) clears 08:00Z today · $60k crash-put DEEPENED to −19.50M, 26JUN monthly DEEPENED to −21.14M</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book eased its net-long-gamma as the 15JUN positive chunk
                settled, and the flip walked up faster than spot rose, so the spot
                cushion above the flip narrowed
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+61.3M / 1%</span> (was +74.1M on 06-15 —
              a −$12.8M ease as the 15JUN +28.59M positive chunk settled out); the
              book is still net-long-gamma (dampening) but from a shallower position
              than mid-week. The 0-γ flip walked UP{' '}
              <span className="dn-tag">$63,557 → $65,232 (+$1,675)</span>, and spot
              $66,332 now sits{' '}
              <span className="dn-tag bull">+1.69% above flip</span> on
              spot-denominated math (66,331.99 / 65,232 − 1 = +1.686%); the GEX
              file&rsquo;s own Deribit-index reference $66,472 reads{' '}
              <span className="dn-tag bull">+1.90% above</span> (66,472 / 65,232 − 1 =
              +1.901%, the file&rsquo;s &ldquo;Dist to Flip&rdquo; reads +1.9%).{' '}
              <span className="dn-em">Both references are still ABOVE the flip but the
              gap NARROWED sharply vs 06-15 (+3.34% / +3.69% then) — the flip walked up
              +$1,675 while spot rose only ~+$650, so the dealer book is dampening from
              a thinner cushion this cut.</span> The wall map is a thick positive
              overhead band against a DEEPENED deep crash-put: heaviest positive walls{' '}
              <span className="dn-tag bull">$67k +27.99M</span> (the heaviest single
              positive wall, just overhead),{' '}
              <span className="dn-tag bull">$80k +13.95M</span>,{' '}
              <span className="dn-tag bull">$70k +10.25M</span>,{' '}
              <span className="dn-tag bull">$68k +8.28M</span>,{' '}
              <span className="dn-tag bull">$66k +7.55M</span> (just below spot),{' '}
              <span className="dn-tag bull">$75k +7.16M</span>; the negatives are{' '}
              <span className="dn-tag bear">$60k −19.50M</span> (the persistent
              crash-put, DEEPENED from 06-15&rsquo;s −18.00M),{' '}
              <span className="dn-tag bear">$64k −9.97M</span> (just below spot),{' '}
              <span className="dn-tag bear">$62k −8.55M</span>,{' '}
              <span className="dn-tag bear">$63k −6.60M</span>.{' '}
              <span className="dn-em">
                The near-overhead $67k +27.99M is now a single dominant positive cap
                directly above spot — a dealer book heavily offered into a push through
                $67k — with spot sitting on the $66k +7.55M shelf and above a thin
                stack of negative pockets at $64k −9.97M / $63k −6.60M just under spot.
                The crash-put magnet at $60k DEEPENED (−$1.50M vs 06-15, −18.00M →
                −19.50M) but at −9.5% below spot it is not a near-spot anchor; the read
                is a dealer book bid into a push but with a heavier offered cap at $67k
                and a thicker negative pocket just below spot than 06-15 carried.
              </span>
            </p>

            <p>
              The expiry strip is positive across the front but the displayed rows
              are <span className="dn-em">non-additive</span> against the dashboard
              total. Per-expiry: 16JUN 0.3DTE{' '}
              <span className="dn-tag bull">+8.79M</span> (settles 08:00Z today — a
              small positive front chunk), 17JUN 1.3{' '}
              <span className="dn-tag bull">+4.68M</span>, 18JUN 2.3 +3.52M, 19JUN 3.3{' '}
              <span className="dn-tag bull">+17.21M</span>,{' '}
              <span className="dn-tag bear">26JUN 10.3 −21.14M</span> (the monthly, the
              heaviest negative chunk on the board, DEEPENED from 06-15&rsquo;s
              −10.03M), 3JUL +2.63M, 31JUL{' '}
              <span className="dn-tag bull">+22.18M</span> (the heaviest positive
              overall), 28AUG +3.48M, 25SEP +5.03M, 25DEC +5.99M, 26MAR27 +0.92M.{' '}
              <span className="dn-em">The displayed rows sum to ≈ +53.29M, which is
              NOT the dashboard aggregate +61.3M — the per-strike/per-expiry
              decompositions are non-additive against the headline total; the
              dashboard +61.3M is authoritative.</span> The 16JUN 0.3DTE settles at
              08:00Z today (~8h ahead): because it is a POSITIVE +8.79M chunk, clearing
              it LOWERS the aggregate — ex-16JUN reads roughly +52.5M, still firmly net
              positive but a smaller positive book post-settle.{' '}
              <span className="dn-em">
                With the 26JUN monthly −21.14M now the dominant structural negative
                and DEEPENED, the front of the curve is a positive shelf that thins
                after today&rsquo;s small settle while the heaviest negative sits ~10
                days out at the monthly — the book stays net-long-gamma but the
                structural short-gamma is building in the 26JUN expiry.
              </span>
            </p>

            <p>
              IV median across 934 instruments is{' '}
              <span className="dn-tag">43.4%</span> (eased from 44.5% / 948
              instruments on 06-15 — a −1.1pt nudge as the 15JUN weekly chain rolled
              off, −14 instruments) against 30D close-to-close RV of{' '}
              <span className="dn-tag">42.40%</span> — chain-level richness{' '}
              <span className="dn-tag">~+1.0pt</span>, the IV/RV spread compressing
              toward flat.{' '}
              <span className="dn-em">A chain-median across 934 instruments,{' '}
              <span className="dn-em">not</span> a tradable spread; expiry-/strike-
              level vega, skew and term structure remain not loaded; the vol read
              stays framework-only.</span> RV methodology: 30D close-to-close,
              logret.std × √365 × 100 on the last 30 daily log returns (= 31
              consecutive daily closes) anchored to parquet 2026-06-16 00:06Z; the
              underlying 31-close window spans 05-17 → 06-16. (For reference, last 29
              returns / 30 closes reads 43.15%; the 42.40% page value comes from 30
              returns.) P/C ratio 0.64 on the GEX file (Call OI 271,436 / Put OI
              173,018).
            </p>
            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · FRESH Monday prints resumed — the FRED Tier-1 daily series are no longer weekend-carried (10Y 4.48% +3.0bp, HY OAS 2.71% −7.0bp, TIPS 2.17% +1.0bp are fresh Monday moves) · re-grow legs stay UN-FIRED (10Y 5bp below the 4.53% gate, HY OAS eased 7bp BELOW the 2.78% gate), reclaim-long filter holds · DXY flat at 99.46 · cross-asset NORMAL |r| 0.413, BTC leads the equity tape on 7d</span>
            </h2>

            <p>
              <span className="dn-signal">
                The Monday FRED daily prints resumed — the macro panel is no longer
                weekend-carried, so the Δ this cut ARE fresh moves: 10Y ticked up
                +3.0bp to 4.48%, HY OAS eased −7.0bp to 2.71%, TIPS +1.0bp to 2.17%
              </span>. Dashboard render is 2026-06-15 22:15Z, ~1h51m before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag">4.48%</span>, regime z{' '}
              <span className="dn-tag bear">+1.58</span>, episodic z{' '}
              <span className="dn-tag bull">−0.13</span> — a fresh +3.0bp Monday print,
              which <span className="dn-em">keeps the reclaim-long rates filter (10Y
              &lt; 4.55%) TRUE and the re-grow leg-A gate (10Y &gt; 4.53%) UN-FIRED,
              now 5bp below the gate</span>. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.17%</span>, regime z{' '}
              <span className="dn-tag bear">+2.21</span>, episodic z{' '}
              <span className="dn-tag bear">+0.98</span> — a fresh +1.0bp; the regime z
              is the single EXTREME risk-off tag on the daily panel. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.24%</span> (+1.0bp). HY OAS{' '}
              <span className="dn-tag bull">2.71%</span>, regime z{' '}
              <span className="dn-tag bull">−1.29</span>, episodic z{' '}
              <span className="dn-tag bull">−1.38</span> — a fresh −7.0bp, easing
              BELOW the 2.78% re-grow gate, so re-grow leg-B stays UN-FIRED (now below
              it, not at it). MOVE bond vol{' '}
              <span className="dn-tag">69.4</span> — loose, flat. The dollar held: DXY{' '}
              <span className="dn-tag">99.46 (1d Δ −0.29)</span>, regime z{' '}
              <span className="dn-tag bear">+1.03</span>, episodic z{' '}
              <span className="dn-tag bear">+0.59</span> — still RISK-OFF on the
              z-tags but flat note-to-note from 06-15&rsquo;s 99.46 (the dashboard 1d Δ
              −0.29 reflects the prior session&rsquo;s move; the n2n move this cut is
              ~0); Fed net liquidity{' '}
              <span className="dn-tag bull">$5.897T</span> loose (episodic z +2.47, the
              single &ldquo;what changed&rdquo; positive); NFCI −0.506 neutral (stale
              ~10d); US-JP 10Y spread{' '}
              <span className="dn-tag">1.83% (+3.0bp)</span> (narrowed as the JGB
              monthly updated); USD/JPY{' '}
              <span className="dn-tag">160.32 (+0.36)</span>; USD/CNY 6.7621.{' '}
              <span className="dn-em">
                Net: the Monday prints came in quiet and below the gates — the re-grow
                gates stay un-fired (10Y 4.48% 5bp below the 4.53% leg-A gate; HY OAS
                2.71% now 7bp BELOW the leg-B gate, a fresh easing), and the
                reclaim-long filter (10Y &lt; 4.55%) holds. The macro tape stays
                ALIGNED with the BTC turn rather than fighting it; DXY firm-but-flat
                and TIPS-real EXTREME remain the offsetting risk-off lines, but the
                rates and credit paths that matter for BTC are quiet and below their
                gates, and the credit path eased further this cut.
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
                <tr><td>US 10Y nominal</td><td className="num">4.48%</td><td className="num bear">+3.0bp (fresh Mon)</td><td className="num bear">+1.58</td><td className="num bull">−0.13</td><td className="bear">tight regime · re-grow leg-A UN-FIRED (5bp below gate), filter holds</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.17%</td><td className="num bear">+1.0bp (fresh Mon)</td><td className="num bear">+2.21</td><td className="num bear">+0.98</td><td className="bear">EXTREME RISK-OFF regime</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.24%</td><td className="num">+1.0bp</td><td className="num">+0.10</td><td className="num bull">−0.50</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.71%</td><td className="num bull">−7.0bp (fresh Mon)</td><td className="num bull">−1.29</td><td className="num bull">−1.38</td><td className="bull">RISK-ON · eased BELOW the 2.78% gate, leg-B UN-FIRED</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.506</td><td className="num stale">stale ~10d</td><td className="num">+0.19</td><td className="num bull">−0.73</td><td className="neut">neutral</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">69.4</td><td className="num">+0.02</td><td className="num bull">−0.60</td><td className="num bull">−1.00</td><td className="bull">loose · flat</td></tr>
                <tr><td>DXY</td><td className="num">99.46</td><td className="num">−0.29 (prior session)</td><td className="num bear">+1.03</td><td className="num bear">+0.59</td><td className="bear">RISK-OFF z-tags · flat ~0 n2n from 99.46</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.897T</td><td className="num bull">+0.062T</td><td className="num bull">+0.82</td><td className="num bull">+2.47</td><td className="bull">loose · what changed today</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.32</td><td className="num bear">+0.36</td><td className="num bear">+1.31</td><td className="num bear">+1.13</td><td className="neut">yen soft</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.83%</td><td className="num">+3.0bp</td><td className="num bull">−1.08</td><td className="num bull">−0.13</td><td className="bear">RISK-OFF · narrowed as JGB updated</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7621</td><td className="num bull">−0.01</td><td className="num bull">−1.77</td><td className="num bull">−1.34</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">monthly +13.5bp (~75d)</td><td className="num bear">+2.56</td><td className="num">+1.43</td><td className="stale">EXTREME monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.413</span> (eased from
              06-15&rsquo;s 0.421, still in the NORMAL band, not systemic).
              BTC&rsquo;s listed ties stayed TradFi-tech led but loosened slightly: NQ{' '}
              <span className="dn-tag">+0.652</span> (was +0.681), SP500{' '}
              <span className="dn-tag">+0.650</span> (was +0.673), NVDA{' '}
              <span className="dn-tag">+0.620</span>, SILVER{' '}
              <span className="dn-tag">+0.540</span>, TSLA{' '}
              <span className="dn-tag">+0.514</span>, GOOGL{' '}
              <span className="dn-tag">+0.511</span>, JP225{' '}
              <span className="dn-tag">+0.500</span>, COPPER{' '}
              <span className="dn-tag">+0.497</span>, GOLD{' '}
              <span className="dn-tag">+0.477</span>, MSFT{' '}
              <span className="dn-tag">+0.474</span>, PLAT{' '}
              <span className="dn-tag">+0.443</span>, META{' '}
              <span className="dn-tag">+0.419</span>. 7d performance:{' '}
              <span className="dn-tag bull">PALL +10.49%</span>, JP225{' '}
              <span className="dn-tag bull">+8.73%</span>,{' '}
              <span className="dn-tag bull">BTC +5.98%</span> (now LEADS the equity
              tape), NQ <span className="dn-tag bull">+4.15%</span>, URNM{' '}
              <span className="dn-tag bull">+3.22%</span>, SILVER{' '}
              <span className="dn-tag bull">+3.16%</span>, COPPER{' '}
              <span className="dn-tag bull">+3.14%</span>, SP500{' '}
              <span className="dn-tag bull">+2.22%</span>, NVDA{' '}
              <span className="dn-tag bull">+2.14%</span>; the mega-cap tech tape was
              mixed — GOOGL <span className="dn-tag bull">+1.82%</span>, AMZN{' '}
              <span className="dn-tag bull">+1.65%</span>, META{' '}
              <span className="dn-tag bull">+1.18%</span>, TSLA{' '}
              <span className="dn-tag bull">+0.54%</span>, but AAPL{' '}
              <span className="dn-tag bear">−1.21%</span> and MSFT{' '}
              <span className="dn-tag bear">−2.83%</span> heavy; metals mixed (SILVER
              +3.16%, PLAT +1.11%, GOLD <span className="dn-tag bear">−0.06%</span>);
              energy kept collapsing — CL{' '}
              <span className="dn-tag bear">−11.18%</span>, BRENT{' '}
              <span className="dn-tag bear">−11.10%</span>.{' '}
              <span className="dn-em">
                The story this cut is BTC retaking the equity-tape lead: BTC +5.98% on
                7d is now ahead of NQ +4.15% and SP500 +2.22% (only PALL +10.49% and
                JP225 +8.73% ran higher), a reversal from 06-15&rsquo;s mid-pack read
                as the early-June crash rolled further off the 7d window. BTC&rsquo;s
                ties to the US tech indices loosened a touch (NQ +0.652, SP500 +0.650,
                down from +0.681 / +0.673) but stay the tightest cross-asset readings —
                BTC is still trading as a high-beta tech proxy inside a still-NORMAL
                broad regime, now leading rather than lagging that tape. The energy
                collapse (CL/BRENT −11%) is the macro cross-current but is not the
                BTC-load-bearing read this cut
              </span>. JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag — do
              not lean on it.
            </p>
            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 200W floor watch PRIMARY (reclaim now CONFIRMED — the 06-15 weekly close $66,286 resolved above the $62,230 floor; five finalized daily closes above) · mean-revert scout STILL can&rsquo;t fire (flip leg holds, funding leg REVIVED, but the TD9-BUY cluster stays inverted to a SELL/top-divergence cluster) · macro-tail re-grow UN-FIRED · squeeze-cycle hostile-2 ON HOLD (SM feed frozen) · desk flat</span>
            </h2>

            <p>
              <span className="dn-signal">
                The binary resolved bullish and the up-leg ground out a fifth session,
                but with the exhaustion cluster intact and the position book still
                dark it does not change a flat book — it closes the primary watch as a
                confirmed reclaim and keeps the scout grounded
              </span>. The desk carried no position into this snap and opened nothing;
              the up-leg that started 06-12 extended into a fifth session and the desk
              watched it run without an entry by design. The honest scorecard: the
              200W reclaim is now CONFIRMED on the 06-15 weekly close ($66,286 &gt;
              $62,230, five finalized daily closes above), spot reclaimed its first
              daily MA (D-SMA20 +0.36%), the dealer book stayed net-long-gamma at
              +61.3M (eased post-settle) with spot +1.69% above the flip, and the fast
              frames cooled out of overbought. <em>But the mean-revert scout still
              can&rsquo;t fire: its flip leg holds and its funding leg REVIVED
              (funding flipped back negative at the snap), yet its TD9-BUY cluster is
              still fully inverted to a SELL/top-divergence cluster (top divergences on
              15m / 30m / 1h / 4h, ⚡ TD9 SELL on 8h / 12h, the 4h and 1d pending Sell 8
              → 9?) — the single leg that disqualifies a mean-revert long outright — so
              it is no closer to a clean fire; every MA above D-SMA20 is overhead; the
              top-divergence cluster survived the RSI cooldown; and the SM feed is
              frozen ~94.5h so the squeeze read cannot be confirmed.</em> No chase. The
              scout is a confirmation trade and the confirmation it needs (a clean
              three-leg gate WITH a TD9-BUY cluster, not a SELL cluster) is still
              incomplete — wait for a re-armed gate, do not retrofit an entry into a
              fifth-session tape that is holding its gains but losing momentum and
              still flashing top divergences.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch · reclaim CONFIRMED: the 06-15 weekly close $66,286 resolved ABOVE the $62,230 floor; FIVE finalized daily closes above (06-11 $63,598, 06-12 $63,547, 06-13 $64,418, 06-14 $65,702, 06-15 $66,286)</span>
              <div className="dn-trade-name">
                200W cycle-floor watch — reclaim CONFIRMED: the 06-15 weekly W-MON close finalized at $66,286, cleanly above the 200W $62,230; the binary the prior note flagged has resolved bullish, with five finalized daily closes above and the in-progress 06-22 weekly bar $66,276 above
              </div>
              <div className="dn-thesis">
                The 06-09/06-10 break put two daily closes below the floor; the 06-11
                tape took it back and 06-12 through 06-15 held and extended it. This cut
                the resolving event landed: the 06-15 weekly W-MON close finalized at
                $66,286, above the 200W $62,230 — the floor reclaim the 06-15 note
                flagged as the binary is now CONFIRMED on the weekly candle, a one-week
                dip-and-reclaim of the post-06-08 lineage. The 06-15 daily close also
                finalized at $66,286, giving five consecutive FINALIZED daily closes
                above the floor (06-11 $63,598, 06-12 $63,547, 06-13 $64,418, 06-14
                $65,702, 06-15 $66,286). Spot $66,332 sits +6.59% above the floor and
                the in-progress 06-22 W-MON weekly bar prints $66,276 = +6.51% above.
                The full-history 200-week SMA is $62,230 (200 closed bars ending the
                06-15 weekly close); the weekly-close-below-own-200W frequency is 8 /
                155 = 5.16% — a low-base-rate location the tape has now reclaimed on a
                weekly close. With the binary resolved, the framework shifts from
                &ldquo;does the weekly close confirm or break&rdquo; to a watch on
                whether the up-leg holds the floor and clears the lower daily MA band:
                a sustained move back below the floor would re-open the break case, but
                that is now a low-probability path after a confirmed weekly reclaim and
                a +6.51% intraweek cushion. Status:{' '}
                <em>watch open, reclaim CONFIRMED, no position</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor (full-history W-MON)</span><span className="dn-lvl-v">$62,230 · 200 closed bars ending the 06-15 weekly close · live spot +6.59% / +$4,102 above</span></div>
                <div><span className="dn-lvl-k">06-15 weekly close (RESOLVED)</span><span className="dn-lvl-v bull">$66,286 = +6.51% above the 200W — the binary resolved BULLISH, reclaim CONFIRMED on the weekly candle</span></div>
                <div><span className="dn-lvl-k">in-progress weekly (06-22)</span><span className="dn-lvl-v bull">1m-close $66,276 = +6.51% / +$4,046 above the 200W — provisional until the 06-22 W-MON close</span></div>
                <div><span className="dn-lvl-k">finalized daily-close lineage</span><span className="dn-lvl-v bull">06-11 $63,598 · 06-12 $63,547 · 06-13 $64,418 · 06-14 $65,702 · 06-15 $66,286 (all FINAL, all above) · 06-16 in-progress $66,276 (above) — five finalized closes above the floor</span></div>
                <div><span className="dn-lvl-k">break re-open (bearish, low-prob)</span><span className="dn-lvl-v bear">a sustained weekly close back below $62,230 — would re-open the first sustained weekly-200W break (last full-history below-own-200W close was 2023-10-09); now a low-probability path after a confirmed reclaim and a +6.51% cushion</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the 200W is a weekly-close line, and the
                06-15 weekly close has now RESOLVED it above the floor — the reclaim is
                confirmed, not pending. Five finalized daily closes (06-11 $63,598,
                06-12 $63,547, 06-13 $64,418, 06-14 $65,702, 06-15 $66,286) sit above.
                The watch now reads the up-leg&rsquo;s ability to hold the floor and
                press the lower daily MA band rather than a binary candle; treat any
                move back toward the floor as the interim tell, but do not re-open the
                break case absent a sustained weekly close below $62,230, which the
                +6.51% cushion makes a low-probability path.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STILL CAN&rsquo;T FIRE · flip leg holds + funding leg REVIVED, but the TD9-BUY cluster stays fully inverted to a SELL/top-divergence cluster · stood down</span>
              <div className="dn-trade-name">
                Mean-revert long scout — still can&rsquo;t fire: the flip leg holds (spot +1.69% above $65,232) and the funding short-pay leg-2 REVIVED (funding flipped back negative at the snap, −0.67% ann on a ~15h short-pay streak), but the TD9-BUY cluster is still fully inverted (top divergences on 15m / 30m / 1h / 4h, ⚡ TD9 SELL on 8h / 12h, the 4h &amp; 1d pending Sell 8 → 9?) — the gate is broken on leg-1, the disqualifier
              </div>
              <div className="dn-thesis">
                The scout is a three-leg gate: (1) a TD9-BUY cluster, (2) a funding
                short-pay ≥4h contiguous streak negative at the snap, (3) a 1h close
                above the 0-γ flip. On 06-15 leg 3 held but leg 2 had died and leg 1 was
                inverted to a SELL read. This cut the legs shifted again:{' '}
                <em>Leg 3 HOLDS</em> — the flip walked up to $65,232 and spot sits
                +1.69% above (+1.90% idx). <em>Leg 2 REVIVED</em> — funding flipped
                back to short-pay at the snap (−0.67% ann) on a deep ~15h contiguous
                negative streak ending AT the snap, so the ≥4h short-pay requirement is
                met. <em>Leg 1 stays INVERTED</em> — there is still no TD9-BUY anywhere;
                instead top divergences sit on 15m / 30m / 1h / 4h, ⚡ TD9 SELL fired on
                8h / 12h, and the 4h and 1d are pending Sell 8 → 9?. Net: the scout
                cannot fire — a mean-revert long is gated on a TD9-BUY cluster that is
                fully inverted to a SELL/top-divergence cluster, even with the funding
                and flip legs both live, and the move it was designed to catch already
                ran five sessions. The gate is broken on the one leg that disqualifies
                a mean-revert long outright. Status: <em>stood down, no entry</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">leg 1 · TD9 cluster</span><span className="dn-lvl-v bear">INVERTED — no TD9 BUY anywhere; top divergences on 15m / 30m / 1h / 4h, ⚡ TD9 SELL on 8h / 12h, 4h &amp; 1d pending Sell 8 → 9?, 3d water-up death cross Sell 2 — a full SELL/top-divergence cluster</span></div>
                <div><span className="dn-lvl-k">leg 2 · funding short-pay ≥4h</span><span className="dn-lvl-v bull">REVIVED — funding flipped back negative at the snap (−0.67% ann); the trailing contiguous negative streak into the snap is 915 rows / ~15h15m, funding negative at the snap — meets the negative-at-snap requirement</span></div>
                <div><span className="dn-lvl-k">leg 3 · 1h close &gt; flip</span><span className="dn-lvl-v bull">HOLDS — flip $65,232, spot +1.69% above (idx +1.90%) — clean above-flip, but academic with leg 1 inverted</span></div>
                <div><span className="dn-lvl-k">trigger (all 3 clean)</span><span className="dn-lvl-v bull">confirmed TD9 BUY cluster AND a live funding short-pay ≥4h negative at the snap AND 1h close &gt; flip — then scout long 0.2R; legs 2 and 3 are live this cut, leg 1 is inverted, so not simultaneously clean</span></div>
                <div><span className="dn-lvl-k">stop / size</span><span className="dn-lvl-v bear">1h close &lt; $61,484 (06-10 daily close / 200W band) · size 0.2R · take half at the cycle anchor D-SMA100 $72,618</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R sketch (illustrative, not a live order):</b> were the gate to
                re-arm, a trigger on a clean 1h close above the flip $65,232 against a
                $61,484 stop is ~$3,748 risk; the first target at the cycle anchor
                $72,618 is ~$7,386 reward (measured from the $65,232 entry) ≈ 1.97:1
                — thinner than mid-week as the flip walked up toward spot, and the
                gate cannot fire while the TD cluster is inverted to a SELL read.{' '}
                <b>Hard rule:</b> do not synthesize an entry from the two legs that are
                live — a mean-revert long requires a TD9-BUY cluster, and the cluster
                has top divergences across all four fast/mid frames plus ⚡ TD9 SELL on
                8h / 12h; buying a fifth-session, top-divergent tape into a TD9-SELL
                cluster with every MA above D-SMA20 overhead is exactly the
                anticipation the framework forbids. The honest read: the scout has now
                failed to fire on a fifth consecutive different broken combination
                (flip-then-funding 06-13, TD-cluster 06-14, funding-and-TD 06-15,
                TD-cluster-only this cut) — the funding leg&rsquo;s repeated state-flips
                are themselves the tell that it cannot anchor an entry; wait for a
                confirmed TD9-BUY cluster to re-form, do not retrofit.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — BOTH legs remain UN-FIRED (fresh Monday prints: 10Y 4.48% below the 4.53% gate, HY OAS 2.71% eased BELOW the 2.78% gate)</span>
              <div className="dn-trade-name">
                Macro tail put-spread — closed; re-grow gates remain UN-FIRED on both legs: fresh Monday 10Y 4.48% (below the 4.53% leg-A gate) AND HY OAS 2.71% (eased BELOW the 2.78% leg-B gate); reclaim-long rates filter (10Y &lt; 4.55%) holds TRUE
              </div>
              <div className="dn-thesis">
                The macro tail put-spread is closed with no residual. The re-grow legs
                both fired 06-12 and both un-fired 06-13; across 06-14 / 06-15 the FRED
                daily series were weekend-carried, and this cut the Monday prints
                resumed fresh — and nothing re-fired: 10Y prints 4.48% (below the 4.53%
                gate and inside the reclaim-long filter 10Y &lt; 4.55%), and HY OAS
                eased to 2.71% (now BELOW, not at, its gate).{' '}
                <span className="dn-em">The fresh Monday prints confirm the gates stay
                un-fired by virtue of being below them — the credit path (HY OAS)
                eased a further −7.0bp this cut, moving AWAY from the re-grow gate, and
                the only macro tick worth noting is the 10Y +3.0bp staying well inside
                its filter. The macro tape stays aligned with the BTC turn rather than
                fighting it.</span>{' '}
                A re-grow would have leaned against the bounce; the gates staying
                un-fired keeps even the discretionary tension off the table. The desk
                holds no tail and has no gate to fire against the net-long-gamma,
                200W-reclaiming tape.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed · no residual · re-grow gate UN-FIRED on both legs (fresh Monday prints) — no tension to manage</span></div>
                <div><span className="dn-lvl-k">re-grow leg A (UN-FIRED)</span><span className="dn-lvl-v bull">10Y &gt; 4.53% close — UN-FIRED at 4.48% (fresh Monday, 5bp below the gate)</span></div>
                <div><span className="dn-lvl-k">re-grow leg B (UN-FIRED)</span><span className="dn-lvl-v bull">HY OAS &gt; 2.78% close — UN-FIRED at 2.71% (fresh Monday, eased 7bp BELOW the gate)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — HOLDS TRUE at 4.48%</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as the
                levels drift, not backtested breakpoints; this cut the fresh Monday
                prints put both legs cleanly below their gates (HY OAS eased further
                away). A fresh tail would only make sense if the BTC-internal structure
                rolled back over (book re-deepens short-gamma below a re-failing flip
                AND the tape loses the 200W) WITH the macro legs re-firing — none of
                those holds now. Re-arm the watch only on a clean re-fire of BOTH macro
                legs into a BTC-internal breakdown; absent that, there is no tail to
                grow.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · ON HOLD — the SM feed is FROZEN ~94.5h, the framework cannot be assessed on its own data this cut</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — ON HOLD: the Hyperliquid SM feed froze 2026-06-12 01:36Z (~94.5h stale), so no SM Δnet step can be computed; the perp-tape proxy (OI +1,721 third-day build, funding flipped back negative, perp discount) now suggests the perp book still doubting the up-leg rather than longs pressing it — but it is unconfirmable
              </div>
              <div className="dn-thesis">
                The squeeze-cycle framework runs as a watchlist with no calendar prior
                (the cadence was falsified late May), and this cut it is ON HOLD for a
                fourth consecutive note because its primary input is dark: the SM block
                in live_db has not advanced since 2026-06-12 01:36Z, so the SM
                long/short/net are frozen and no discrete Δnet ≥ +3k cover step or
                ≤ −3k re-stack can be measured without fabricating.{' '}
                <span className="dn-em">The squeeze read this cut therefore rests
                entirely on the perp-tape proxy, which shifted back vs 06-15: OI
                EXPANDED a third day (+1,721) AND funding FLIPPED BACK negative into
                the snap with perp at a discount — the configuration of a rally the
                perp book is still doubting (paying shorts, trading a discount) rather
                than the longs-pressing tell of 06-15. That is a more squeeze-primed
                read, but with the SM feed dark it cannot be confirmed.</span> Read any
                fresh Δnet ≤ −3k single-minute step (Δshort &gt; 0 + Δlong &lt; 0 same
                minute) as a re-stack hostile-2 signal once the feed thaws, and any
                Δnet ≥ +3k cover step as its inverse — but neither can be read while the
                feed is frozen.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v stale">ON HOLD · SM feed frozen ~94.5h (since 2026-06-12 01:36Z) · no SM Δnet step computable this cut</span></div>
                <div><span className="dn-lvl-k">perp-tape proxy (live)</span><span className="dn-lvl-v">OI +1,721 (+1.69%) a third-day build · funding flipped back negative (snap −0.67%) · day-level spot CVD +2,582 / futures CVD +2,262 (both bought the day) but the 4h faded · perp −$58.49 discount — the perp book still doubting the up-leg, unconfirmable vs SM</span></div>
                <div><span className="dn-lvl-k">forward gating</span><span className="dn-lvl-v">once the SM feed thaws: fresh Δnet ≤ −3k single-minute = re-stack hostile-2 signal; Δnet ≥ +3k = cover ignition — no time prior either way; until then the proxy is the only read</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the cadence is dead (falsified late May),
                and the SM feed is frozen, so there is no SM data to read this cut —
                treat the framework as ON HOLD, not as a quiet book. Do NOT carry the
                frozen −37.3k net forward as if it were a live read or difference it
                against a future thawed value as a single step (the gap will be a
                multi-day accumulation, not a minute step). The perp-tape proxy now
                points back to the perp book doubting the bounce (funding pays shorts,
                perp at a discount) rather than longs pressing it, but without the SM
                feed it stays a proxy. Resume the framework the moment the feed
                advances; re-read the first fresh Δnet step for which way the book
                commits.
              </div>
            </div>
            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the 200W reclaim CONFIRMED (the 06-15 weekly close resolved above the floor — the binary resolved bullish) · spot reclaimed its first daily MA (D-SMA20 +0.36%) · the scout STILL can&rsquo;t fire as the TD cluster stays inverted even with funding revived · the dealer book eased to +61.3M net-long-gamma, the flip walked up so the cushion narrowed to +1.69% · the SM feed is frozen ~94.5h · desk flat</span>
            </h2>

            <p>
              Of the 06-15 conditions: the 200W cycle-floor reclaim is now CONFIRMED
              (the 06-15 weekly close finalized at $66,286 above the $62,230 floor, the
              binary resolved bullish, spot +6.59% above, in-progress 06-22 bar +6.51%
              above); spot reclaimed its first daily MA (D-SMA20 $66,093, +0.36%); the
              dealer book EASED to +61.3M net-long-gamma post-15JUN-settle and the flip
              walked up to $65,232 so spot&rsquo;s cushion narrowed to +1.69% above;
              the mean-revert scout STILL can&rsquo;t fire — its flip leg holds and its
              funding leg revived, but its TD9-BUY cluster stayed fully inverted to a
              SELL/top-divergence cluster, the leg-1 disqualifier; the macro re-grow
              legs remain UN-FIRED (fresh Monday 10Y 4.48%, HY OAS eased to 2.71%) and
              the reclaim-long filter holds; and the SM feed is FROZEN ~94.5h so the
              squeeze-cycle framework is ON HOLD and the perp-tape proxy is the only
              positioning read. <em>The single structural read is a bounce that
              extended into a fifth-session up-leg and confirmed its 200W reclaim on the
              weekly close — the floor reclaim resolved bullish, spot reclaimed
              D-SMA20, gamma held net-long at +61.3M, and the day was bought hard on
              both spot and futures with a heavy big-print bid — but it is doing so into
              a top-divergence cluster across all four fast/mid frames and ⚡ TD9 SELL on
              8h / 12h, with the 4h back-half fading the fresh high, every MA above
              D-SMA20 overhead, and the smart-money side unreadable.</em> The conditions
              today re-set around the confirmed floor reclaim, the still-grounded scout
              (now broken on the TD leg alone), a macro tail with both gates un-fired,
              and a squeeze framework on hold:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>200W weekly-close reclaim (CONFIRMED)</td><td className="bull">06-15 W-MON close $66,286 &gt; $62,230 — RESOLVED bullish; five finalized daily closes above + in-progress bar +6.51% above</td><td>the binary resolved — the floor reclaim is confirmed on the weekly candle, a one-week dip-and-reclaim of the post-06-08 lineage; the watch shifts to whether the up-leg holds the floor and clears the lower daily MA band</td></tr>
                <tr><td>First daily MA reclaimed (bullish)</td><td className="bull">D-SMA20 $66,093 now BELOW spot (+0.36%) — the first positive daily-MA offset of the lineage; D-EMA20 $66,675 (−0.51%) nearest overhead</td><td>read the D-EMA20 reclaim as the next bull tell and a fail back below D-SMA20 as the first sign the up-leg is rolling; the lower daily MA band ($66.7k–$72.6k) is the overhead the bounce must work through</td></tr>
                <tr><td>16JUN expiry settle (today 08:00Z, ~8h ahead)</td><td>+8.79M small positive front chunk clears; ex-16JUN aggregate ≈ +52.5M (a smaller positive book post-settle)</td><td>read the settle as an interim tell — clearing a small POSITIVE chunk trims the net-long-gamma cushion modestly; the book stays firmly net positive, not a regime change</td></tr>
                <tr><td>Mean-revert long scout — TD leg (BROKEN)</td><td className="bear">TD9-BUY cluster fully inverted (top divs on 15m/30m/1h/4h, ⚡ TD9 SELL on 8h/12h, 4h &amp; 1d pending Sell 8 → 9?); funding leg REVIVED, flip leg holds</td><td>the scout cannot fire while the TD cluster is inverted to a SELL/top-divergence read, even though the funding and flip legs are both live; stand down — re-arm only on a confirmed TD9-BUY cluster re-forming AND a live funding short-pay ≥4h negative at the snap AND 1h close &gt; flip, do not synthesize from the two live legs</td></tr>
                <tr><td>0-γ flip (walked up, cushion narrowed)</td><td className="bull">flip $65,232 (+$1,675); spot +1.69% / idx +1.90% — both ABOVE, but the gap narrowed from +3.34% / +3.69%</td><td>spot stays above the flip but the cushion thinned as the flip walked up faster than spot; a dampening dealer location still, but a re-test of the flip is closer than mid-week — watch a fail back below $65,232 as the first dealer-side warning</td></tr>
                <tr><td>Macro tail re-grow (BOTH legs UN-FIRED, fresh Mon)</td><td className="bull">10Y &lt; 4.53% (UN-FIRED at 4.48%, fresh Monday); HY OAS &lt; 2.78% (UN-FIRED at 2.71%, eased below)</td><td>fresh Monday prints put both legs below their gates (HY OAS eased further away); no tail to grow and no tension to manage — macro aligned with the BTC turn; re-arm only on a clean re-fire of BOTH legs into a BTC-internal breakdown</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (SM feed FROZEN ~94.5h)</td><td className="stale">ON HOLD — no SM Δnet step computable; perp-tape proxy now points back to the perp book doubting the up-leg</td><td>the framework cannot be assessed on its own data while the feed is frozen; resume the moment it thaws and read the first fresh Δnet ≤ −3k (re-stack) or ≥ +3k (cover) single-minute step; do not difference the frozen net against a future thawed value as a step</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the up-leg can clear the lower daily MA band (D-EMA20 $66,675
                then the $70k–$73k cluster) or rolls over from the top-divergence
                exhaustion stack: with the 200W binary now resolved bullish and
                D-SMA20 reclaimed, the live tension has moved off the floor and onto
                the overhead — a clean D-EMA20 reclaim extends the up-leg toward the
                cycle anchor D-SMA100 $72,618, while a fail back below D-SMA20 with the
                top divergences and ⚡ TD9 SELL resolving lower is the first sign the
                fifth-session bounce is exhausting
              </span>. Until then this note runs as written: the desk is flat, the 200W
              watch is the primary framework and its reclaim is now CONFIRMED on the
              06-15 weekly close, the mean-revert long scout still can&rsquo;t fire (the
              funding leg revived and the flip leg holds, but the TD cluster stayed
              inverted to a SELL/top-divergence read — no chase), the macro tail
              re-grow stays un-fired (fresh Monday prints below both gates) with the
              macro tape aligned to the BTC turn, and the squeeze-cycle hostile-2
              framework is ON HOLD with the SM feed frozen ~94.5h. The dealer book
              eased to +61.3M net-long-gamma post-settle and spot&rsquo;s cushion above
              the flip narrowed to +1.69%; funding flipped back to short-pay at the
              snap; OI expanded a third day as the day was bought on both spot and
              futures with a heavy big-print bid that the 4h back-half faded;
              BTC&rsquo;s 7d performance retook the equity-tape lead inside a
              still-NORMAL broad regime. The right read for the next 24h is{' '}
              <em>patient and flat — the binary resolved in the bounce&rsquo;s favor and
              the floor reclaim is confirmed, but the up-leg is now maturing into a
              top-divergence cluster while holding its gains, and a fifth-session bounce
              that has reclaimed only its first daily MA and is fading the fresh high
              into exhaustion signals is not a trade; let the D-EMA20 reclaim or a
              D-SMA20 fail tell which way it resolves, and let a TD9-BUY cluster re-form
              before the scout is anything other than grounded</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 — post codex hostile audit (2026-06-16)
            </span>
            <b>Status:</b> this is the <b>v2</b> cut built on the 2026-06-16 00:06Z
            atomic snapshot, <b>post codex hostile audit</b>. STAGE B codex
            cross-model hostile audit returned{' '}
            <b>PASS-WITH-NOTES (0 CRITICAL / 0 MAJOR / 1 MINOR / 0 NIT)</b>; the
            ask-deepseek arithmetic second-audit (adjudicated by STAGE C, recomputed
            before acting) raised one CRITICAL that STAGE C adjudicated FALSE.
            Full record: <code>audits/2026-06-16-desk-note.md</code>.{' '}
            <b>Findings + grep-closure (each pattern searched across the FULL EN
            file; hits-after = 0 ⇒ RESOLVED):</b>{' '}
            <b>DN-001 (MINOR · codex)</b> — five low-load-bearing macro z-score table
            cells did not match the archived macro panel. Recomputed against{' '}
            <code>/opt/desk-note/snapshots/2026-06-16-0006/macro_dashboard.html</code>:
            5Y5Y BE regime/episodic <code>+0.10 / −0.50</code> (was{' '}
            <code>−0.02 / −0.85</code>), MOVE episodic <code>−1.00</code> (was{' '}
            <code>−1.02</code>), USD/JPY episodic <code>+1.13</code> (was{' '}
            <code>+1.09</code>), US-JP 10Y episodic <code>−0.13</code> (was{' '}
            <code>−0.62</code>), JGB 10Y regime/episodic <code>+2.56 / +1.43</code>{' '}
            (was <code>+2.62 / +1.41</code>). Patterns searched across the full EN
            file: <code>−0.02</code> / <code>−0.85</code> / <code>−1.02</code> /{' '}
            <code>+1.09</code> / <code>−0.62</code> / <code>+2.62</code> /{' '}
            <code>+1.41</code> — each before 1 (the table cell) / after 0; the macro
            prose cites none of these z-values, so the wrong figures lived only in the
            five table cells — <b>RESOLVED</b>.{' '}
            <b>SA-CRIT (CRITICAL · ask-deepseek, adjudicated FALSE — REJECTED)</b> —
            ask-deepseek claimed the snap funding <code>−0.67% ann (raw −0.000609 ×
            1095)</code> is off by 100× and should read <code>−66.7%</code>.
            Recompute and adjudication: the page reports four funding figures on one
            self-consistent scale — snap <code>−0.67%</code>, n2n mean{' '}
            <code>−3.14%</code>, trough <code>−7.84%</code>, peak <code>+2.72%</code>{' '}
            — and the snap raw <code>−0.000609</code> sits well inside the realized
            raw window (the trough raw is more negative). Rescaling ONLY the snap ×100
            to −66.7% would make it more negative than the window trough −7.84% (a
            single sample cannot exceed the window&rsquo;s own extreme) and would
            contradict the un-flagged mean/trough/peak, which deepseek left unchanged
            despite sharing the identical <code>× 1095</code> formula. codex (primary,
            owns the publish gate) independently verified <code>−0.67%</code> snap and{' '}
            <code>−3.14%</code> mean as PASS. The finding is a unit-reading false
            positive; no number is changed. Pattern searched: <code>−66.7</code> /{' '}
            <code>66.69</code> (before 0 / after 0 — the page never carried the
            deepseek value); <code>−0.67% ann</code> retained as the correct value —{' '}
            <b>REJECTED (no change)</b>.{' '}
            <b>All findings resolved or adjudicated; no UNRESOLVED residue — promoted
            to v2.</b> The audited source pins below are recorded for lineage:{' '}
            funding × 1095 (snap −0.67% ann from raw −0.000609, FLIPPED BACK negative
            at the snap, n2n mean −3.14% ann, range −7.84% / +2.72%, cap 2 / 1441 at
            the +2.72% max and 1 / 1441 at the −7.84% min, neg-minute share 80.57% =
            1161 / 1441, trailing contiguous negative streak ending AT the snap 915
            rows / ~15h15m with funding negative at the snap — scout funding leg-2
            REVIVED again); GEX dual-reference sign (flip $65,232, spot +1.69% =
            66,331.99 / 65,232 − 1 / idx +1.90% = 66,472 / 65,232 − 1 — both ABOVE,
            gap NARROWED vs 06-15; aggregate +61.3M eased from +74.1M; $60k −19.50M
            DEEPENED from −18.00M; displayed expiry rows sum ≈ +53.29M NON-ADDITIVE
            vs the dashboard +61.3M, dashboard authoritative; 16JUN 0.3DTE +8.79M
            settles 08:00Z today, ex-16JUN ≈ +52.5M, clearing a positive chunk LOWERS
            the aggregate; 26JUN monthly −21.14M DEEPENED from −10.03M); 200W
            full-history W-MON SMA $62,230 (200 closed bars ending the 06-15 weekly
            close) vs live spot +6.59% above and in-progress 06-22 bar $66,276 +6.51%
            above, 8 / 155 = 5.16% frequency, the 06-15 weekly close $66,286 RESOLVED
            above the floor (reclaim CONFIRMED),{' '}
            <code>weekly_200sma.json</code> ABSENT (200W computed directly from parquet,
            JSON percentile / last-event unavailable, not fabricated);{' '}
            <b>SM FEED FROZEN</b> — the Hyperliquid SM block has not advanced since
            2026-06-12 01:36Z (~94.5h stale), long 13,532.412 / short 50,825.664 / net
            −37,293.252 are the frozen last-written values (byte-identical to the 06-13,
            06-14 and 06-15 notes, freeze predates all three), so NO SM Δ / cut fraction
            / squeeze-cycle step is computed this cut (not fabricated); daily-close
            lineage (06-08 $63,058, 06-09 $61,695, 06-10 $61,484 FINAL, 06-11 $63,598
            FINAL, 06-12 $63,547 FINAL, 06-13 $64,418 FINAL, 06-14 $65,702 FINAL, 06-15
            $66,286 FINAL, 06-16 in-progress $66,276 — FIVE finalized closes above the
            floor); OI n2n +1,721 BTC (+1.69%, snap 103,299, a third consecutive
            build larger than 06-15&rsquo;s +1,423); 30D RV 42.40% (30 returns / 31
            closes; 43.15% alt at 29 returns; window 05-17 → 06-16); cross-asset |r|
            0.413 NORMAL, BTC +5.98% LEADS the equity tape on 7d (only PALL +10.49% /
            JP225 +8.73% higher) with BTC-equity correlations loosened slightly (NQ
            +0.652, SP500 +0.650); macro Tier-1 FRESH Monday prints resumed (10Y 4.48%
            +3.0bp — re-grow leg-A UN-FIRED, reclaim-long filter 10Y &lt; 4.55% holds;
            HY OAS 2.71% −7.0bp eased BELOW the gate, leg-B UN-FIRED; TIPS 2.17%
            regime-z EXTREME; DXY 99.46 flat ~0 n2n, dashboard 1d Δ −0.29 prior
            session; MOVE 69.4; Fed net liq $5.897T); no cb_cvd reset in the n2n
            window; full MA matrix vs live spot $66,331.99 off parquet 2026-06-16
            00:05Z close $66,276.20 (D-SMA100 $72,618 cycle anchor −8.66%, D-SMA20
            $66,093 RECLAIMED +0.36% the first positive daily-MA offset, D-EMA20
            $66,675 −0.51% nearest overhead, W-SMA150/200 non-computable at 130 subset
            weekly bars, W-EMA150/200 seed-disclosed); MTF cross labels per the
            archived scan (fast-frame RSI cooled out of overbought to 43.2 / 48.1 /
            55.8 from 77.8 / 78.9 / 75.9, 15m slipped below cloud on a water-up death
            cross, 30m / 1h above cloud, 4h water-up golden cross 7b above cloud Sell 8
            → 9?, 8h in cloud ⚡ TD9 SELL, 12h ⚡ TD9 SELL below cloud, 1d water-down
            golden cross 3b below cloud Sell 8 → 9?, 3d water-up death cross Sell 2, top
            divergences on 15m / 30m / 1h / 4h, bottom divergence on 15m);
            claims-vs-loaded-data (NTT / max-pain / strike-IV / BTC-NQ framework-only;
            JGB monthly do not lean; IV chain-median across 934 instruments not a
            tradable spread). Archive:{' '}
            <code>/opt/desk-note/snapshots/2026-06-16-0006/</code> (btc_gex.html,
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
            Numbers reflect a single atomic snapshot (2026-06-16 00:06Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-06-15 22:15Z (~1h51m before
            snapshot) with fresh Monday prints resumed, and the Hyperliquid SM
            feed is frozen ~94.5h — that input is explicitly stale and flagged as
            such. This is the <b>v2</b> cut — <em>post the STAGE B codex hostile
            audit; the findings, adjudication, and grep-closure record are written
            in the audit-trace block above (codex PASS-WITH-NOTES, one MINOR macro
            z-score patch applied, the ask-deepseek funding CRITICAL adjudicated a
            false positive and rejected).</em> Levels, sizes, and conditions are illustrative of the
            desk&rsquo;s process, not standing recommendations. Past correlation,
            gamma, and positioning patterns do not bind future tape. Derivatives
            carry the risk of total loss and, where leveraged, loss exceeding
            deposited margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                A fifth-session up-leg that resolved the binary — the 06-15 weekly close
                $66,286 confirmed the 200W reclaim above the $62,230 floor, spot
                reclaimed its first daily MA (D-SMA20 +0.36%), and the day was bought on
                both spot and futures with a heavy big-print bid. But the dealer book
                eased to +61.3M and the flip walked up so the cushion narrowed to
                +1.69%, funding flipped back to short-pay, the top-divergence cluster
                survived the RSI cooldown (top divs on 15m/30m/1h/4h, ⚡ TD9 SELL on
                8h/12h), every MA above D-SMA20 is overhead, and the SM feed is frozen
                ~94.5h so the position book is unreadable. Flat and patient — the binary
                resolved bullish, but the up-leg is maturing into exhaustion while
                holding its gains.
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
            v2 · 2026-06-16 00:06Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
