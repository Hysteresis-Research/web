import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-14 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-14',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-14' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260614() {
  await requireViewer('/desk/2026-06-14');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-14 · v2</span>
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
              <span className="dn-big">$64,453</span>
n2n&nbsp;<span>+1.38%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-14 00:06Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-14 00:06Z (snapshot pin)</td>
                  <td className="dn-flag">
                    fresh · 1-min · all derived values pinned to the 00:06Z anchor
                    row · live `t` field is BJ-local (UTC+8) so the 00:06Z anchor
                    row is <code>06-14 08:06</code>; this snapshot lands ~16h06m
                    after the 13JUN 08:00Z option settle and ~7h54m before the
                    14JUN 08:00Z settle · <b>window convention:</b> every live-tape
                    comparison below is <b>NOTE-TO-NOTE (n2n)</b> — measured from
                    the prior note&rsquo;s 06-13 00:06Z snap to this 00:06Z snap,
                    i.e. 1441 sampled rows ≈ 24h00m for the day window (the prior
                    and current snaps are exactly 24h apart this cut), 241 rows ≈
                    4h00m, and 61 rows ≈ 1h00m, so the day/4h/1h deltas are tagged{' '}
                    <code>n2n</code>; any remaining &ldquo;24h&rdquo; tag is the MTF
                    scan engine&rsquo;s own window or a forward-looking phrase ·{' '}
                    <b>SM block FROZEN:</b> the Hyperliquid smart-money feed has not
                    advanced since 2026-06-12 01:36Z (~46.5h stale at this snap) — SM
                    long/short/net read STALE and are treated framework-only, not as
                    live positioning (see meta tiles + Positioning section)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-14 00:01Z scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    ~5-min stale vs the 00:06Z snapshot anchor · in-progress bars ·
                    archived to <code>/opt/desk-note/snapshots/2026-06-14-0006/</code>{' '}
                    at author time
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-14 00:00Z snapshot</td>
                  <td className="dn-flag">
                    pre-settle · ~6-min stale vs the snapshot anchor · Deribit idx
                    $64,593 vs live $64,452.78 ($140 above) · 946 inst (was 952 on
                    06-13, −6) · 14JUN 0.3DTE +17.10M settles at 08:00Z today (~8h
                    ahead) · ex-14JUN aggregate ≈ +46.3M still net positive
                    (clearing the positive front chunk LOWERS the aggregate;
                    dashboard total +63.4M authoritative, displayed rows are
                    non-additive — see dealer section) · archived to{' '}
                    <code>/opt/desk-note/snapshots/2026-06-14-0006/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-14 00:00Z
                  </td>
                  <td className="dn-flag">~6-min lag · 7d 1h bars · 22 assets · 162 rows · regime NORMAL (mean |r| 0.407) · archived to <code>/opt/desk-note/snapshots/2026-06-14-0006/</code></td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-13 22:16Z render</td>
                  <td className="dn-flag">
                    ~1h50m render lag · <b>weekend</b> — FRED Tier-1 daily series are
                    frozen at the Friday 06-12 closes (10Y 4.45%, TIPS 2.16%, HY OAS
                    2.78% all carried; do not read the Δ as a fresh weekend move) ·
                    DXY 99.75 (1d Δ −0.11; −0.33 note-to-note from 06-13&rsquo;s
                    100.08) · Fed net
                    liq $5.897T · archived to{' '}
                    <code>/opt/desk-note/snapshots/2026-06-14-0006/</code>
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
                  <td className="dn-flag">stale · monthly (~73d) · do not treat as live</td>
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
              <span className="dn-v bear">−5.03%</span>
              <span className="dn-src">live · snap −5.03% ann (raw −0.004589 × 1095; short-pay live at the snap — funding FLIPPED to paying shorts) · n2n mean ann +0.29% (was +2.18% on 06-13, −1.89pt) · cap occupancy 1 / 1441 sampled rows at the +6.73% max, 2 / 1441 at the −5.71% min · neg-minute share 41.64% (600 / 1441, was 7.84% on 06-13, +33.80pt) · n2n peak +6.73% ann · n2n trough −5.71% ann</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · n2n</span>
              <span className="dn-v bear">mean +2.18% → +0.29% (−1.89pt) · snap +5.95% → −5.03% (−10.98pt)</span>
              <span className="dn-src">range −5.71% / +6.73% ann · funding FLIPPED to a sustained short-pay leg — the path crossed negative and the trailing contiguous negative streak ending AT the snap is 456 sampled rows / ~7h36m wall-clock, and funding is NEGATIVE at the snap · that is a ≥4h contiguous short-pay leg with funding negative at the snap — the scout funding leg-2 gate is REVIVED (LIVE), reversed from 06-13&rsquo;s DEAD read · longest negative streak this window = the same 456 rows</span>
            </div>
            <div>
              <span className="dn-k">OI · n2n</span>
              <span className="dn-v bull">+2.42% (+2,365 BTC)</span>
              <span className="dn-src">live · 100,155 (up from the 06-13 snap 97,790, +2,365) · OI EXPANDED to the largest n2n build of the post-06-08 sequence (prior post-06-08 builds were smaller: +739 on 06-10, +212 on 06-11) — the bleed reversed into a build on the up-day · n2n peak 100,697 @ UTC 19:59 06-13, trough 97,790 @ UTC 00:06 06-13 (= the window open / 06-13 snap)</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v">59.29 / 40.71</span>
              <span className="dn-src">live_db `mkt_long_pct` · bled a further −1.69pt vs 06-13&rsquo;s 60.98 (the de-crowding continued even as price rose — retail did NOT chase the up-leg) · n2n range 58.45 / 61.43 · peak 61.43 / trough 58.45</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v stale">−37.3k · FEED FROZEN ~46.5h (NOT LOADED)</span>
              <span className="dn-src">live_db SM block has NOT advanced since 2026-06-12 01:36Z — long 13,532.412 / short 50,825.664 / net −37,293.252 are the FROZEN last-written values, identical to the 06-13 note&rsquo;s (the freeze predates the prior note). ~46.5h stale at this snap. Treat as STALE / NOT LOADED — no live SM positioning read this cut</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 06-13 note</span>
              <span className="dn-v stale">NON-COMPUTABLE — feed frozen</span>
              <span className="dn-src">the SM endpoints are byte-identical to 06-13 because the feed froze 2026-06-12 01:36Z; no SM Δ, cut fraction, or squeeze-cycle step can be computed this cut without fabricating · the only live positioning reads are retail mkt_long_pct and the perp-tape proxy (OI + funding + basis)</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.6% / 41.13%</span>
              <span className="dn-src">GEX median IV across 946 inst (was 43.8% / 952 on 06-13, −0.2pt, ~flat) · IV/RV spread +2.47pt · 30D close-to-close RV 41.13% (30 returns / 31 closes; 29-return alt 41.81%)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+1.73% (spot) / +1.95% (idx) — both ABOVE</span>
              <span className="dn-src">flip $63,359 (was $63,282, walked UP +$77) · vs live spot $64,452.78 (64,452.78 / 63,359 − 1 = +1.726%) / GEX file idx $64,593 (64,593 / 63,359 − 1 = +1.948%) — both references cleanly ABOVE the flip, the gap widened as spot rose faster than the flip walked · aggregate GEX +63.4M (was +20.7M, grew +$42.7M net-long-gamma) · $60k crash-put −21.07M (lightened from −23.34M) · P/C ~0.60</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The flat digestion of 06-13 gave way to a genuine up-leg — spot
                extended <span className="dn-tag bull">+1.38% to $64,453</span> and
                the structure firmed on every read except the one that matters most
                this cut: the smart-money feed went dark
              </span>. Inside a <span className="dn-tag">$64,687 / $63,462</span>{' '}
              range (high @ BJ 05:42 06-14 / UTC 21:42 06-13, low @ BJ 11:28 06-13 /
              UTC 03:28 06-13) the bounce turned into a one-directional grind. The
              200W floor reclaim STRENGTHENED again — the 06-13 daily close finalized
              at <span className="dn-tag bull">$64,418</span>, so there are now{' '}
              <span className="dn-tag bull">THREE finalized daily closes above the
              $62,019 floor</span> (06-11 $63,598, 06-12 $63,547, 06-13 $64,418) plus
              the in-progress 06-15 weekly bar $64,388 above. The dealer book
              deepened its net-long-gamma sharply to{' '}
              <span className="dn-tag bull">+63.4M</span> (was +20.7M), the 0-γ flip
              walked up only to <span className="dn-tag">$63,359</span> (was $63,282),
              so spot now sits <span className="dn-tag bull">+1.73% cleanly above the
              flip</span> — the gap widened as spot rose faster than the flip. And
              the perp tape turned active: funding FLIPPED to a sustained short-pay
              leg (<span className="dn-tag bear">snap −5.03% ann</span>, ~7h36m
              contiguous negative into the snap) and OI EXPANDED{' '}
              <span className="dn-tag bull">+2,365 BTC</span> — the largest build of
              the post-06-08 sequence, the read being shorts leaning into the bounce.{' '}
              <em>But two things cut against the cleanliness: the Hyperliquid SM feed
              is FROZEN (~46.5h stale since 06-12 01:36Z) so the smart-money side is
              unconfirmable and treated NOT LOADED; and the MTF map is flashing
              exhaustion — the fast frames reclaimed cloud and the 1d printed a fresh
              water-down golden cross, but top divergences sit on 15m / 30m / 1h / 4h
              and a new ⚡ 8h TD9 SELL fired.</em> Every MA is still overhead. The
              mean-revert scout STILL can&rsquo;t fire — its funding leg revived and
              the flip leg holds, but its TD9-BUY cluster DIED and flipped contra
              (3d to Sell, 8h ⚡ TD9 SELL). This is a bounce extending on improving
              structure into a tape that is starting to flash short-term exhaustion,
              with the position book unreadable — the desk stays FLAT and the 06-15
              weekly close is still the binary, now leaning reclaim hard.
            </p>

            <p>
              BTC prints <span className="dn-tag">$64,453</span> live,{' '}
              <span className="dn-tag bull">+1.38%</span> note-to-note — a clean
              up-day after the 06-13 doji, 1h <span className="dn-tag bull">+0.02%</span>,
              4h <span className="dn-tag bull">+0.30%</span>, the grind steady rather
              than impulsive into the snap.{' '}
              <span className="dn-signal">The cycle-floor reclaim is the read that
              strengthened again</span>: the 06-13 close finalized at $64,418 (the
              06-13 note carried it in-progress at $63,553), giving three consecutive
              FINALIZED daily closes above the 200W $62,019 — 06-11 $63,598, 06-12
              $63,547 and 06-13 $64,418 — with the in-progress 06-14 bar $64,388 also
              above. That is a strict upgrade on the 06-13 lineage (two finalized
              closes). The MA matrix has not improved overhead but the nearest line
              came within a single normal swing —{' '}
              <span className="dn-tag bull">D-EMA20 $66,637 (−3.28%)</span> is the
              nearest and the only one within easy reach, the cycle anchor{' '}
              <span className="dn-tag bear">D-SMA100 $72,611 (−11.24%)</span> sits
              deep below the daily stack, and the W-SMA20 weekly floor that broke in
              early June is still <span className="dn-tag bear">$72,145 (−10.66%)</span>{' '}
              overhead. <span className="dn-em">Every single MA on the daily and
              weekly ladder is above spot; the only positive structural offset on the
              entire board is the 200W floor itself (+3.92%). This is still a tape
              that has reclaimed its cycle floor on a close basis and nothing
              else — but the reclaim is now three closes deep and the bounce is
              extending.</span> The mean-revert scout&rsquo;s three-leg gate decayed
              in yet another awkward way: this cut its funding leg REVIVED (a fresh
              ≥4h short-pay streak) and its flip leg still holds, but its TD9-BUY
              cluster DIED and flipped contra (the 3d rolled to Sell 1 / water-up
              death and the 8h printed ⚡ TD9 SELL) — so the gate is no closer to a
              clean fire, just broken on a different leg again. The scout stands down.
            </p>
            <h2 className="dn-sec">
              Positioning{' '}
              <span className="dn-roman">I · live tape · SM feed FROZEN ~46.5h (NOT LOADED — no smart-money read) · funding FLIPPED to a sustained short-pay leg (snap −5.03%, ~7h36m negative into snap — scout leg-2 REVIVED) · OI EXPANDED (+2,365) the largest build of the post-06-08 sequence · retail bled −1.69pt and did NOT chase</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important positioning fact this cut is an absence:
                the Hyperliquid smart-money feed is frozen and has been for ~46.5
                hours
              </span>. The SM block in live_db has not advanced since{' '}
              <span className="dn-tag stale">2026-06-12 01:36Z</span> — long_btc{' '}
              <span className="dn-tag">13,532.412</span>, short_btc{' '}
              <span className="dn-tag">50,825.664</span>, net{' '}
              <span className="dn-tag">−37,293.252</span> are the last-written values
              and they are <span className="dn-em">byte-identical to the figures the
              06-13 note carried</span>, which means the freeze predates the prior
              note and the 06-13 note&rsquo;s cited SM movement was already reading a
              frozen feed. <span className="dn-em">No SM Δ, no cut fraction, no
              squeeze-cycle single-minute step can be computed this cut without
              fabricating numbers — the entire smart-money side is treated STALE /
              NOT LOADED.</span> The honest consequence: the squeeze-cycle hostile-2
              framework cannot be assessed on its own data this cut, and the only
              live positioning reads left are retail mkt_long_pct and the perp-tape
              proxy (OI + funding + basis). What that proxy says is unambiguous on
              the up-day even if the SM side is dark.
            </p>

            <p>
              <span className="dn-signal">
                The leverage side flipped hard — funding crossed to a sustained
                short-pay leg, and that is what REVIVES the scout&rsquo;s funding leg
              </span>. Funding is{' '}
              <span className="dn-tag bear">−5.03% ann at the snap</span> (raw
              −0.004589 × 1095), n2n mean{' '}
              <span className="dn-tag">+0.29%</span> (vs +2.18% on 06-13), range{' '}
              <span className="dn-tag">−5.71% / +6.73%</span>. The path crossed
              negative and STAYED negative into the snap — the trailing contiguous
              negative streak ending AT the snap is{' '}
              <span className="dn-tag bear">456 sampled rows / ~7h36m</span>, well
              past the ≥4h leg-2 gate, and funding is firmly negative at the snap.{' '}
              <span className="dn-em">The 06-13 read — leg-2 DEAD on fully-normalized
              positive funding — has fully reversed: funding is paying shorts again
              on a ≥4h contiguous leg, and the mean-revert scout&rsquo;s funding
              short-pay leg is now LIVE, not merely weaker.</span> Neg-minute share
              jumped 7.84% → 41.64% (600 / 1441), cap occupancy is{' '}
              <span className="dn-tag">1 / 1441 at the +6.73% max, 2 / 1441 at the
              −5.71% min</span>, OI{' '}
              <span className="dn-tag bull">+2,365 BTC (+2.42%)</span> EXPANDED to
              the largest build of the post-06-08 sequence (100,155, up from the 06-13
              snap 97,790; the 06-10 +739 / 06-11 +212 builds were smaller), and retail{' '}
              <span className="dn-tag">mkt_long_pct 59.29%</span> bled a further
              −1.69pt even as price rose — retail did NOT chase the up-leg. Perp
              trades a <span className="dn-tag bear">−$17.97 discount</span> to spot
              at the snap (1h mean −$26.60, 4h mean −$29.43; n2n-day mean −$37.04,
              range −$134.37 / +$24.73 — basis went premium briefly intraday but sits
              discounted at the snap). 1-min aggressor skew snap{' '}
              <span className="dn-tag bull">+9.0</span> (1h mean −0.18) — a faint
              buy-aggressor tilt into the snap.{' '}
              <span className="dn-em">
                Funding flipped to short-pay, OI expanding, perp at a discount,
                retail de-crowding into the rally: the perp-tape proxy reads shorts
                leaning into the bounce — fresh short OI added on the up-day and
                paying to hold — which is exactly the configuration that, with a live
                SM feed, would be the squeeze-cycle re-stack tell. The SM feed being
                dark is the reason it stays a proxy read, not a confirmed one.
              </span>
            </p>

            <p>
              Windowed flow is <em>a one-sided spot-led bid with futures and big
              prints lagging — a real up-day, but bought on spot, not chased on
              leverage at the snap</em>. n2n-day: price{' '}
              <span className="dn-tag bull">+1.38%</span>, OI{' '}
              <span className="dn-tag bull">+2,365 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +3,440</span>{' '}
              <span className="dn-em">(no cb_cvd reset in the window)</span>, futures
              CVD <span className="dn-tag bear">Δ −677</span>, big-print{' '}
              <span className="dn-tag bear">−137 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−677</span> —{' '}
              <span className="dn-em">spot bought the up-day decisively while futures
              aggressors and block flow net-sold into it; OI still expanded, so the
              futures selling is short-side initiation, not long liquidation — shorts
              pressing into a spot-led rally</span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bull">+0.30%</span>, OI{' '}
              <span className="dn-tag bear">−540 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +318</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −22</span>, big-print{' '}
              <span className="dn-tag bull">+99 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−22</span> — <em>spot still bid, OI
              ticking down as some shorts covered into the snap, a mild grind
              higher</em>. 1h: price{' '}
              <span className="dn-tag bull">+0.02%</span>, OI{' '}
              <span className="dn-tag bull">+67 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −66</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +115</span>, big-print{' '}
              <span className="dn-tag bear">−12 BTC</span>, taker-net{' '}
              <span className="dn-tag bull">+115</span> — <em>the last hour went flat
              and two-sided, OI adding a touch — a pause into the snap, not a
              continuation</em>. The n2n-day shape is the cleanest read: a spot-led
              up-day with shorts initiating into it (OI building, futures aggressors
              selling, funding flipping to pay shorts) — a bounce the perp book is
              fighting, which is constructive for continuation if the shorts are
              wrong and fuel if they are squeezed.
            </p>
            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · the fast frames reclaimed cloud (15m / 30m / 1h all above) and the 1d printed a FRESH water-down golden cross · but top divergences sit on 15m / 30m / 1h / 4h and a new ⚡ 8h TD9 SELL fired — the bounce is flashing short-term exhaustion · every MA overhead</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map reclaimed the fast frames but lit up exhaustion warnings
                across the board: the scan reads net 3 bull / 5 bear / 2 neutral,
                header tag &ldquo;高级别偏空 · 短线反弹&rdquo; (higher-frame bearish ·
                short-term bounce), regime 5/9 reversal (JT &lt; 0, mean-reversion
                favoring)
              </span>. The fast frames are now ABOVE cloud — 15m, 30m and 1h all
              cleared their clouds on the up-leg, and the 1h carries the highest RSI
              on the board (<span className="dn-tag bull">62.2</span>) with a water-up
              golden cross 14b. But every one of those fast frames also carries a TOP
              divergence: 15m, 30m, 1h and 4h all flag BEAR regular / BEAR hidden
              divergence reads — <span className="dn-em">the bounce is rising into
              top divergences on all four fast/mid frames, the classic
              extension-into-exhaustion signature</span>. The 4h holds a water-down
              golden 21b but sits IN cloud (62.1k–66.4k) at Sell 6. The fresh
              affirmative bull is on the daily:{' '}
              <span className="dn-tag bull">1d water-down golden cross 1b, FRESH</span>{' '}
              — the daily MACD just crossed up for the first time of the move, though
              the 1d is still below cloud and oversold (RSI 36.4) at Sell 6. The slow
              frames are all below cloud and mixed: 8h printed a new{' '}
              <span className="dn-tag bear">⚡ TD9 SELL</span> (the headline exhaustion
              alert), 12h water-down golden 11b but Sell 7, 3d rolled to a water-up
              death cross 6b at Sell 1 (the 3d ⚡ TD9 BUY that anchored the 06-11→06-13
              lineage is GONE), 1w no cross below cloud Buy 4, 1M holds the pending
              Buy 8 → 9? above cloud.{' '}
              <span className="dn-em">
                Read straight: the bounce reclaimed the fast frames (15m / 30m / 1h
                above cloud, 1d fresh golden cross) — a real short-term up-leg — but
                it is doing so into top divergences on every fast/mid frame and a new
                ⚡ 8h TD9 SELL, and the 3d TD9 BUY that was the lone cycle-frame bull
                for three sessions has flipped to a death cross. The map is a bounce
                that has gathered enough momentum to clear the fast clouds but is
                simultaneously flashing the exhaustion signals that precede a stall.
                The higher-frame structure is still bearish (slow frames below cloud);
                the short-term reversal regime favors a bounce; the divergences warn
                it is maturing.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,365</td><td className="num bull">54.8</td><td className="bear">death (water-up) 1b</td><td className="bull">above ↓64.1k 53b</td><td>Buy 1</td><td>BEAR hid · BEAR reg · BULL hid · top div</td></tr>
                <tr><td>30m</td><td className="num">64,356</td><td className="num bull">59.6</td><td className="bull">golden (water-up) 5b</td><td className="bull">above ↓63.7k 36b</td><td>Buy 2</td><td>BEAR reg · BULL hid · top div</td></tr>
                <tr><td>1h</td><td className="num">64,356</td><td className="num bull">62.2</td><td className="bull">golden (water-up) 14b</td><td className="bull">above ↓63.7k 69b</td><td>Sell 5</td><td>BEAR hid · BEAR reg · BULL hid · top div</td></tr>
                <tr><td>4h</td><td className="num">64,356</td><td className="num bull">61.3</td><td className="bull">golden (water-dn) 21b</td><td className="neut">in cloud 62.1–66.4k 17b</td><td>Sell 6</td><td>BEAR reg · BULL hid · top div</td></tr>
                <tr><td>8h</td><td className="num">64,356</td><td className="num">53.0</td><td className="bull">golden (water-dn) 20b</td><td className="bear">below ↑65.7k 87b</td><td className="bear">⚡ TD9 SELL</td><td>BEAR hid</td></tr>
                <tr><td>12h</td><td className="num">64,356</td><td className="num">45.6</td><td className="bull">golden (water-dn) 11b</td><td className="bear">below ↑74.3k 45b</td><td>Sell 7</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">64,339</td><td className="num bull">36.4</td><td className="bull">golden (water-dn) 1b · fresh</td><td className="bear">below ↑73.9k 13b</td><td>Sell 6</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">64,348</td><td className="num bull">36.9</td><td className="bear">death (water-up) 6b</td><td className="bear">below ↑74.7k 4b</td><td>Sell 1</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">64,339</td><td className="num bull">35.6</td><td className="neut">no cross</td><td className="bear">below ↑100.3k 19b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">64,348</td><td className="num">43.0</td><td className="bull">DIF water-up (no cross)</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (rolling latest file;
                    archived verbatim to{' '}
                    <code>/opt/desk-note/snapshots/2026-06-14-0006/</code>). Header
                    alerts: <em>net 3 bull / 5 bear / 2 neutral · 高级别偏空 · 短线反弹</em>,{' '}
                    <em>regime 5/9 reversal (JT &lt; 0)</em>, <em>top divergences on
                    15m / 30m / 1h / 4h</em>, <em>⚡ 8h TD9 SELL</em>. Scan spot
                    $64,356, 24h +1.27% (00:01Z MTF scan; the live-tape header at
                    00:06Z shows +1.38% n2n on the snapshot window — the 5-minute gap
                    and the different window account for the difference), 24h H/L
                    $64,738 / $63,360, qVol $4.88B. Closes are in-progress bars; treat
                    every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the bounce is still happening entirely below
              structure, but the nearest line is now within a single normal swing.
              Spot $64,453 sits below every daily and weekly line on the board; the
              only positive offset anywhere is the 200W floor itself (+3.92%). Nearest
              overhead is <span className="dn-tag bull">D-EMA20 $66,637 (−3.28%)</span>{' '}
              — the single reclaim target within easy reach — then{' '}
              <span className="dn-tag bear">D-SMA20 $66,915 (−3.68%)</span>,{' '}
              <span className="dn-tag bear">D-EMA50 $70,819 (−8.99%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $72,145 (−10.66%)</span> (the
              broken weekly floor),{' '}
              <span className="dn-tag bear">D-SMA100 $72,611 (−11.24%; cycle
              anchor)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $73,410 (−12.20%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $73,510 (−12.32%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $73,776 (−12.64%; seed)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $73,910 (−12.80%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $75,445 (−14.57%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $76,135 (−15.34%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $77,639 (−16.98%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $78,108 (−17.48%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $78,783 (−18.19%)</span>. Far
              above and disused: W-EMA100 $82,707 (−22.07%), W-EMA50 $83,433
              (−22.75%), W-SMA100 $88,542 (−27.21%), W-SMA50 $91,835 (−29.82%).{' '}
              <span className="dn-em">
                MAs anchored to parquet 2026-06-14 00:05Z close $64,387.60; offsets
                recomputed against live spot $64,452.78. Displayed MA levels are
                $-rounded; offsets computed from exact series values. Subset MA
                ladder is the 2024–2026 window per desk policy; W-SMA150 / W-SMA200
                non-computable (129 subset weekly bars), W-EMA150 (−17.48%) and
                W-EMA200 (−12.64%) seed from available history and are reported as
                such. The 200W $62,019 is the full-history W-MON line (200 closed
                bars ending 06-08). Daily closes: 06-08 $63,058 (above), 06-09
                $61,695 (below), 06-10 $61,484 FINAL (below), 06-11 $63,598 FINAL
                (above), 06-12 $63,547 FINAL (above), 06-13 $64,418 FINAL (above),
                06-14 (in-progress) $64,388 (above) — three finalized closes above
                the 200W floor plus the in-progress bar above.
              </span>
            </p>
            <h2 className="dn-sec">
              Dealer map{' '}
              <span className="dn-roman">III · book DEEPENED sharply to +63.4M net-long-gamma (was +20.7M) · 0-γ flip walked UP only to $63,359 so spot sits +1.73% cleanly above (gap widened) · 14JUN +17.10M settles 08:00Z today, clearing it LOWERS the aggregate to ≈ +46.3M</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book tripled its net-long-gamma on the up-day and the flip
                barely moved, so spot pulled cleanly away above it
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+63.4M / 1%</span> (was +20.7M on 06-13 —
              a +$42.7M positive grow); the book is now firmly net-long-gamma
              (dampening), much more so than at the start of the bounce. The 0-γ flip
              moved only <span className="dn-tag">$63,282 → $63,359 (+$77)</span>,
              and spot $64,453 now sits{' '}
              <span className="dn-tag bull">+1.73% above flip</span> on
              spot-denominated math (64,452.78 / 63,359 − 1 = +1.726%); the GEX
              file&rsquo;s own Deribit-index reference $64,593 reads{' '}
              <span className="dn-tag bull">+1.95% above</span> (64,593 / 63,359 − 1 =
              +1.948%). <span className="dn-em">Both references are cleanly ABOVE the
              flip and the gap WIDENED vs 06-13 (+0.47% / +0.76%) — spot rose faster
              than the flip walked up, so the dealer book is now dampening from a
              position of strength rather than straddling.</span> The wall map is a
              thick positive overhead band against a lightened deep crash-put:
              heaviest positive walls{' '}
              <span className="dn-tag bull">$64.5k +19.20M</span> (right at spot),{' '}
              <span className="dn-tag bull">$65k +13.95M</span>,{' '}
              <span className="dn-tag bull">$80k +11.71M</span>,{' '}
              <span className="dn-tag bull">$67k +9.94M</span>,{' '}
              <span className="dn-tag bull">$70k +8.48M</span>,{' '}
              <span className="dn-tag bull">$66k +6.14M</span>,{' '}
              <span className="dn-tag bull">$75k +5.35M</span>; the negatives are{' '}
              <span className="dn-tag bear">$60k −21.07M</span> (the persistent
              crash-put, lightened from 06-13&rsquo;s −23.34M),{' '}
              <span className="dn-tag bear">$62k −8.41M</span> (just below spot),{' '}
              <span className="dn-tag bear">$55k −6.41M</span>.{' '}
              <span className="dn-em">
                The near-overhead $64.5k–$67k band is a heavy positive shelf (~+49M
                across four strikes) capped right at spot by the $64.5k +19.20M wall —
                a dealer book structurally offered into a push through $64.5k and bid
                into a fade toward the $62k −8.41M shelf just under spot. The crash-put
                magnet at $60k lightened this cut (−$2.27M) but at −6.9% below spot it
                is not a near-spot anchor.
              </span>
            </p>

            <p>
              The expiry strip is positive across the front but the displayed rows
              are <span className="dn-em">non-additive</span> against the dashboard
              total. Per-expiry: 14JUN 0.3DTE{' '}
              <span className="dn-tag bull">+17.10M</span> (settles 08:00Z today),
              15JUN 1.3 <span className="dn-tag bull">+22.71M</span> (the heaviest
              near positive, settles the 06-15 weekly), 16JUN 2.3 +1.65M, 17JUN 3.3
              +1.88M, 19JUN 5.3 +6.20M,{' '}
              <span className="dn-tag bear">26JUN 12.3 −16.80M</span> (the monthly,
              the heaviest negative chunk on the board, lightened from 06-13&rsquo;s
              −22.05M), 3JUL +0.80M, 31JUL +14.24M, 28AUG +2.85M, 25SEP +2.60M, 25DEC
              +4.30M, 26MAR27 +0.65M.{' '}
              <span className="dn-em">The displayed rows sum to ≈ +58.18M, which is
              NOT the dashboard aggregate +63.4M — the per-strike/per-expiry
              decompositions are non-additive against the headline total; the
              dashboard +63.4M is authoritative.</span> The 14JUN 0.3DTE settles at
              08:00Z today (~8h ahead): because it is a POSITIVE +17.10M chunk,
              clearing it LOWERS the aggregate — ex-14JUN reads roughly +46.3M, still
              firmly net positive but a smaller positive book post-settle.{' '}
              <span className="dn-em">
                The 15JUN +22.71M chunk (the 06-15 weekly settle) is the heaviest
                near-dated positive and sits directly on the binary date; with the
                26JUN monthly −16.80M the structural negative still well out in time,
                the front of the curve is a positive shelf that thins after each of
                the next two settles but stays net-long-gamma.
              </span>
            </p>

            <p>
              IV median across 946 instruments is{' '}
              <span className="dn-tag">43.6%</span> (~flat from 43.8% / 952
              instruments on 06-13 — a −0.2pt nudge, the −6 instruments the prior 0DTE
              chunk expiring) against 30D close-to-close RV of{' '}
              <span className="dn-tag">41.13%</span> — chain-level richness{' '}
              <span className="dn-tag">~+2.47pt</span>, the IV/RV spread holding near
              flat as realized stays elevated.{' '}
              <span className="dn-em">A chain-median across 946 instruments,{' '}
              <span className="dn-em">not</span> a tradable spread; expiry-/strike-
              level vega, skew and term structure remain not loaded; the vol read
              stays framework-only.</span> RV methodology: 30D close-to-close,
              logret.std × √365 × 100 on the last 30 daily log returns (= 31
              consecutive daily closes) anchored to parquet 2026-06-14 00:05Z; the
              underlying 31-close window spans 05-15 → 06-14. (For reference, last 29
              returns / 30 closes reads 41.81%; the 41.13% page value comes from 30
              returns.) P/C ratio ~0.60 on the GEX file.
            </p>
            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · WEEKEND — FRED Tier-1 daily series frozen at the Friday 06-12 closes (10Y 4.45%, TIPS 2.16%, HY OAS 2.78% carried) · re-grow legs stay UN-FIRED, reclaim-long filter holds · DXY softened to 99.75 · cross-asset NORMAL |r| 0.407, BTC leads the board on 7d (+6.01%) bar COPPER</span>
            </h2>

            <p>
              <span className="dn-signal">
                It is a weekend, so the macro panel is mostly frozen — the FRED Tier-1
                daily series carry the Friday 06-12 closes and should not be read as
                fresh moves
              </span>. Dashboard render is 2026-06-13 22:16Z, ~1h50m before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bull">4.45%</span>, regime z{' '}
              <span className="dn-tag bear">+1.38</span>, episodic z{' '}
              <span className="dn-tag bull">−0.50</span> — frozen at Friday&rsquo;s
              level, which <span className="dn-em">holds the reclaim-long rates filter
              (10Y &lt; 4.55%) TRUE and keeps the re-grow leg-A gate (10Y &gt; 4.53%)
              UN-FIRED</span>. 10Y TIPS real{' '}
              <span className="dn-tag bull">2.16%</span>, regime z{' '}
              <span className="dn-tag bear">+2.12</span>, episodic z{' '}
              <span className="dn-tag bear">+0.94</span> — frozen; the regime z is the
              single EXTREME risk-off tag on the panel. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.23%</span>. HY OAS{' '}
              <span className="dn-tag">2.78%</span>, regime z{' '}
              <span className="dn-tag bull">−0.84</span>, episodic z{' '}
              <span className="dn-tag">+0.31</span> — frozen AT the 2.78% re-grow gate,
              so re-grow leg-B stays UN-FIRED (not above it). MOVE bond vol{' '}
              <span className="dn-tag">69.4</span> — loose, flat. The dollar softened:
              DXY <span className="dn-tag bull">99.75 (1d Δ −0.11)</span>, regime z{' '}
              <span className="dn-tag bear">+1.36</span>, episodic z{' '}
              <span className="dn-tag bear">+1.09</span> — still RISK-OFF on the
              z-tags but eased below 100, −0.33 note-to-note from 06-13&rsquo;s 100.08
              (the dashboard&rsquo;s own 1d Δ is −0.11); Fed net liquidity{' '}
              <span className="dn-tag bull">$5.897T</span> loose; NFCI −0.506 neutral
              (stale ~8d); US-JP 10Y spread{' '}
              <span className="dn-tag">1.94%</span>; USD/JPY{' '}
              <span className="dn-tag">160.18 (+0.05)</span>; USD/CNY 6.7621.{' '}
              <span className="dn-em">
                Net: nothing fired on the weekend because the daily series are frozen
                — the re-grow gates that the 06-12 fire then un-fired on 06-13 stay
                un-fired (10Y 4.45% below the 4.53% leg-A gate; HY OAS 2.78% at, not
                above, the leg-B gate), and the reclaim-long filter (10Y &lt; 4.55%)
                holds. The only thing that moved is the dollar easing below 100, a
                marginal risk-on tick. The macro tape stays ALIGNED with the BTC turn
                rather than fighting it; DXY firm and TIPS-real EXTREME remain the
                offsetting risk-off lines, but the rates path that matters for BTC is
                quiet and below its gates. Re-read on Monday when FRED daily prints
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
                <tr><td>US 10Y nominal</td><td className="num">4.45%</td><td className="num stale">frozen (Fri 06-12)</td><td className="num bear">+1.38</td><td className="num bull">−0.50</td><td className="bear">tight regime · re-grow leg-A UN-FIRED, filter holds (weekend-frozen)</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.16%</td><td className="num stale">frozen (Fri 06-12)</td><td className="num bear">+2.12</td><td className="num bear">+0.94</td><td className="bear">EXTREME RISK-OFF regime · frozen</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.23%</td><td className="num stale">frozen (Fri 06-12)</td><td className="num">−0.03</td><td className="num bull">−0.89</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num stale">frozen (Fri 06-12)</td><td className="num bull">−0.84</td><td className="num">+0.31</td><td className="bull">loose · AT the 2.78% gate, leg-B UN-FIRED</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.506</td><td className="num stale">stale ~8d</td><td className="num">+0.19</td><td className="num bull">−0.73</td><td className="neut">neutral</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">69.4</td><td className="num bull">−0.09</td><td className="num bull">−0.61</td><td className="num bull">−1.02</td><td className="bull">loose · flat</td></tr>
                <tr><td>DXY</td><td className="num">99.75</td><td className="num bull">−0.11</td><td className="num bear">+1.36</td><td className="num bear">+1.09</td><td className="bear">RISK-OFF z-tags · eased below 100, −0.33 n2n from 100.08 (table Δ is the dashboard 1d −0.11)</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.897T</td><td className="num bull">+0.062T</td><td className="num bull">+0.82</td><td className="num bull">+2.47</td><td className="bull">loose</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.18</td><td className="num bear">+0.05</td><td className="num bear">+1.29</td><td className="num bear">+1.07</td><td className="neut">yen soft</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.94%</td><td className="num stale">frozen</td><td className="num bull">−0.88</td><td className="num bull">−0.50</td><td className="bull">tight</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7621</td><td className="num bull">−0.01</td><td className="num bull">−1.77</td><td className="num bull">−1.34</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">monthly (~73d)</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 162 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.407</span> (firmed from
              06-13&rsquo;s 0.391, just into the NORMAL band&rsquo;s upper half, not
              systemic). BTC&rsquo;s listed ties are TradFi-tech led and tightened
              slightly: NQ <span className="dn-tag">+0.577</span>, SP500{' '}
              <span className="dn-tag">+0.562</span>, TSLA{' '}
              <span className="dn-tag">+0.521</span>, NVDA{' '}
              <span className="dn-tag">+0.516</span>, COPPER{' '}
              <span className="dn-tag">+0.493</span>, SILVER{' '}
              <span className="dn-tag">+0.489</span>, META{' '}
              <span className="dn-tag">+0.485</span>, GOOGL{' '}
              <span className="dn-tag">+0.479</span>, MSFT{' '}
              <span className="dn-tag">+0.472</span>, GOLD{' '}
              <span className="dn-tag">+0.441</span>, JP225{' '}
              <span className="dn-tag">+0.428</span>. 7d performance:{' '}
              <span className="dn-tag bull">BTC +6.01%</span> (now leads the entire
              board bar one — only COPPER ran higher), COPPER{' '}
              <span className="dn-tag bull">+7.07%</span>, PALL{' '}
              <span className="dn-tag bull">+4.99%</span>, JP225{' '}
              <span className="dn-tag bull">+3.69%</span>, TSLA{' '}
              <span className="dn-tag bull">+3.55%</span>, NQ{' '}
              <span className="dn-tag bull">+2.31%</span>, SP500{' '}
              <span className="dn-tag bull">+0.67%</span>; the mega-cap tech tape was
              heavy — MSFT <span className="dn-tag bear">−6.18%</span>, AAPL{' '}
              <span className="dn-tag bear">−5.22%</span>, META{' '}
              <span className="dn-tag bear">−3.62%</span>, AMZN{' '}
              <span className="dn-tag bear">−2.88%</span>; metals mixed (GOLD{' '}
              <span className="dn-tag bear">−1.89%</span>, PLAT{' '}
              <span className="dn-tag bear">−3.50%</span>, SILVER +0.46%); energy kept
              collapsing — CL <span className="dn-tag bear">−11.72%</span>, BRENT{' '}
              <span className="dn-tag bear">−11.41%</span>.{' '}
              <span className="dn-em">
                BTC +6.01% now leads the whole 22-asset board except COPPER +7.07% —
                a strict upgrade from 06-13, where BTC led the US tech-index pair but
                JP225 and PALL ran higher. Its lead over NQ +2.31% widened to +3.70pt
                (was +1.49pt on 06-13) — this time the gap widened because BTC ran on
                its own up-leg, not because NQ rolled. The broad regime stays NORMAL
                and BTC is now the firmest endogenous risk asset on the board bar a
                single industrial metal; the energy collapse (CL/BRENT −11%) and the
                mega-cap tech drawdown are the macro cross-currents, but neither is the
                BTC-load-bearing read this cut
              </span>. JGB monthly 2.52% carries an EXTREME RISK-OFF monthly tag — do
              not lean on it.
            </p>
            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 200W floor watch PRIMARY (reclaim STRENGTHENED to three finalized closes above, 06-15 close leaning reclaim hard) · mean-revert scout STILL can&rsquo;t fire (funding leg revived + flip leg holds, but TD9 cluster DIED/flipped contra) · macro-tail re-grow UN-FIRED · squeeze-cycle hostile-2 ON HOLD (SM feed frozen) · desk flat</span>
            </h2>

            <p>
              <span className="dn-signal">
                An up-day with improving structure into a tape flashing exhaustion,
                and the position book gone dark, does not change a flat book — it
                strengthens the watch and keeps the scout grounded
              </span>. The desk carried no position into this snap and opened nothing;
              the bounce that started 06-12 is now a real up-leg and the desk watched
              it extend without an entry by design. The honest scorecard: the 200W
              reclaim strengthened to three finalized daily closes above the floor (a
              strict upgrade), the dealer book tripled its net-long-gamma to +63.4M
              and spot pulled +1.73% above the flip, the perp tape turned constructive
              (shorts leaning into a spot-led rally), and BTC now leads the cross-asset
              board on 7d bar COPPER — every directional read firmed. <em>But the
              mean-revert scout still can&rsquo;t fire: its funding leg revived and its
              flip leg holds, yet its TD9-BUY cluster died and flipped contra (3d to a
              death cross, 8h to a ⚡ TD9 SELL), so it is no closer to a clean fire —
              each day a different leg breaks; every MA is overhead; the fast frames
              reclaimed cloud but into top divergences on all four fast/mid frames; and
              the SM feed is frozen ~46.5h so the squeeze read cannot be confirmed.</em>{' '}
              No chase. The scout is a confirmation trade and the confirmation it needs
              (a clean three-leg gate AND the 06-15 weekly reclaim) is still
              incomplete — wait for the 06-15 weekly close and a re-armed gate, do not
              retrofit an entry into an extending-but-exhausting tape.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch · reclaim STRENGTHENED: now THREE finalized daily closes above (06-11 $63,598, 06-12 $63,547, 06-13 $64,418) + in-progress 06-15 weekly bar $64,388 above</span>
              <div className="dn-trade-name">
                200W cycle-floor watch — reclaim strengthened: three finalized daily closes above $62,019 (06-11 $63,598, 06-12 $63,547, 06-13 $64,418) plus the in-progress 06-15 weekly bar $64,388 above; the 06-15 weekly close is still the binary, now leaning reclaim hard
              </div>
              <div className="dn-thesis">
                The 06-09/06-10 break put two daily closes below the floor; the 06-11
                tape took it back and 06-12/06-13 held and extended it. This cut the
                06-13 daily close finalized at $64,418 — a third consecutive FINALIZED
                daily close above the 200W $62,019, on top of 06-11&rsquo;s $63,598 and
                06-12&rsquo;s $63,547, and the highest of the three. That is the strict
                upgrade from the 06-13 read (two finalized closes). Spot $64,453 sits
                +3.92% above the floor and the in-progress 06-15 W-MON weekly bar
                prints $64,388 = +3.82% above. The full-history 200-week SMA is $62,019
                (200 closed bars ending 06-08); the weekly-close-below-own-200W
                frequency is 8 / 154 = 5.19% — a low-base-rate location the tape has now
                sat back above for three finalized daily closes. The single resolving
                event is still the 06-15 weekly close: a close above $62,019 confirms
                the reclaim (a one-week dip-and-reclaim of the post-06-08 lineage), a
                close below would still confirm the first sustained weekly-200W break —
                but three finalized daily closes above plus a +3.82% intraweek cushion
                make the reclaim the higher-probability outcome by a wide margin.
                Status: <em>watch open, reclaim strengthening, no position</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor (full-history W-MON)</span><span className="dn-lvl-v">$62,019 · 200 closed bars ending 06-08 · live spot +3.92% / +$2,434 above</span></div>
                <div><span className="dn-lvl-k">in-progress weekly (06-15)</span><span className="dn-lvl-v bull">1m-close $64,388 = +3.82% / +$2,369 above the 200W — provisional until the 06-15 W-MON close</span></div>
                <div><span className="dn-lvl-k">finalized daily-close lineage</span><span className="dn-lvl-v bull">06-11 $63,598 FINAL · 06-12 $63,547 FINAL · 06-13 $64,418 FINAL (all above) · 06-14 in-progress $64,388 (above) — three finalized closes above the floor</span></div>
                <div><span className="dn-lvl-k">reclaim confirmation (bullish)</span><span className="dn-lvl-v bull">06-15 weekly close &gt; $62,019 — confirms the floor reclaim; re-opens the scout-long case on a confirmed turn</span></div>
                <div><span className="dn-lvl-k">break confirmation (bearish)</span><span className="dn-lvl-v bear">06-15 weekly close &lt; $62,019 — first sustained weekly close below the 200W in the post-06-08 lineage (last full-history below-own-200W close was 2023-10-09); now a low-probability path given the +3.82% cushion</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the 200W is a weekly-close line, not an
                intraday level — spot +3.92% above and the in-progress bar +3.82%
                above do not resolve it; only the 06-15 W-MON close does. Three
                finalized daily closes (06-11 $63,598, 06-12 $63,547, 06-13 $64,418)
                plus the 06-14 in-progress bar sit above; treat the next weekly close
                as the binary, and read the 14JUN 08:00Z settle and the daily-close
                lineage as the interim tells. The strengthened intraweek hold widens
                the odds toward reclaim, it does not close the trade.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STILL CAN&rsquo;T FIRE · funding leg-2 REVIVED + flip leg holds, but the TD9-BUY cluster DIED / flipped contra · stood down</span>
              <div className="dn-trade-name">
                Mean-revert long scout — still can&rsquo;t fire: the funding short-pay leg-2 REVIVED (snap −5.03%, ~7h36m negative into snap) and the flip leg holds (spot +1.73% above $63,359), but the TD9-BUY cluster DIED and flipped contra (3d to Sell 1 / water-up death, 8h ⚡ TD9 SELL) — the gate is broken on a different leg again
              </div>
              <div className="dn-thesis">
                The scout is a three-leg gate: (1) a TD9-BUY cluster, (2) a funding
                short-pay ≥4h contiguous streak, (3) a 1h close above the 0-γ flip. On
                06-13 leg 1 was the lone live member (3d ⚡ TD9 BUY), leg 2 was DEAD
                (funding normalized positive), and leg 3 had just cleared. This cut the
                legs decayed yet again, on a different axis: <em>Leg 2 REVIVED</em> —
                funding flipped to a sustained short-pay leg (snap −5.03%, n2n mean
                +0.29%, a 456-row / ~7h36m contiguous negative streak into the snap with
                funding negative at the snap), the first live ≥4h short-pay leg since
                the 06-13 dead read (06-11 already had a live ≥4h short-pay leg, so
                this is a revival, not a lineage first). <em>Leg 3 HOLDS</em> — the flip walked up only to $63,359 and
                spot sits +1.73% above (+1.95% idx). But <em>Leg 1 DIED and flipped
                contra</em> — the 3d ⚡ TD9 BUY that anchored the move rolled to a
                water-up death cross at Sell 1, and the 8h printed a fresh ⚡ TD9 SELL;
                the TD cluster is now a SELL cluster, with top divergences on 15m / 30m
                / 1h / 4h reinforcing the exhaustion read. Net: the scout cannot fire —
                a mean-revert long is gated on a TD9-BUY cluster that has not just
                lapsed but inverted, and the move it was designed to catch already ran.
                The gate is broken on a different leg than 06-13, not closer to a clean
                fire. Status: <em>stood down, no entry</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">leg 1 · TD9 cluster</span><span className="dn-lvl-v bear">DIED / CONTRA — 3d rolled to Sell 1 / water-up death (the ⚡ TD9 BUY is gone), 8h printed ⚡ TD9 SELL; top divs on 15m / 30m / 1h / 4h — the cluster inverted to a SELL read</span></div>
                <div><span className="dn-lvl-k">leg 2 · funding short-pay ≥4h</span><span className="dn-lvl-v bull">REVIVED / LIVE — funding flipped short-pay (snap −5.03%), trailing neg streak 456 rows / ~7h36m into the snap, funding negative at the snap — a clean ≥4h leg</span></div>
                <div><span className="dn-lvl-k">leg 3 · 1h close &gt; flip</span><span className="dn-lvl-v bull">HOLDS — flip $63,359, spot +1.73% above (idx +1.95%) — clean above-flip, but academic with leg 1 inverted</span></div>
                <div><span className="dn-lvl-k">trigger (all 3 clean)</span><span className="dn-lvl-v bull">confirmed TD9 BUY cluster AND a live funding short-pay ≥4h AND 1h close &gt; flip — then scout long 0.2R; legs 2 and 3 are live but leg 1 is inverted, so not simultaneously clean</span></div>
                <div><span className="dn-lvl-k">stop / size</span><span className="dn-lvl-v bear">1h close &lt; $61,484 (06-10 daily close / 200W band) · size 0.2R · take half at the cycle anchor D-SMA100 $72,611</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R sketch (illustrative, not a live order):</b> were the gate to
                re-arm, a trigger on a clean 1h close above the flip $63,359 against a
                $61,484 stop is ~$1,875 risk; the first target at the cycle anchor
                $72,611 is ~$9,252 ≈ 4.9:1 — attractive on paper, but the gate cannot
                fire while the TD cluster is inverted to a SELL read. <b>Hard rule:</b>{' '}
                do not synthesize an entry from the two legs that are live — a
                mean-revert long requires a TD9-BUY cluster, and the cluster has flipped
                to TD9 SELL with top divergences across the fast frames; buying an
                extending tape into 8h-TD9-SELL exhaustion with every MA overhead is
                exactly the anticipation the framework forbids. The honest read: the
                scout has now failed to fire on a third consecutive different broken leg
                (flip-then-funding on 06-13, TD-cluster this cut) — wait for a confirmed
                TD9-BUY cluster to re-form AND the 06-15 weekly reclaim, do not retrofit.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — BOTH legs remain UN-FIRED (weekend-frozen at the 06-13 un-fired state)</span>
              <div className="dn-trade-name">
                Macro tail put-spread — closed; re-grow gates remain UN-FIRED on both legs: weekend-frozen 10Y 4.45% (below the 4.53% leg-A gate) AND HY OAS 2.78% (AT, not above, the leg-B gate); reclaim-long rates filter (10Y &lt; 4.55%) holds TRUE
              </div>
              <div className="dn-thesis">
                The macro tail put-spread is closed with no residual. The re-grow legs
                both fired 06-12 and both un-fired 06-13; this cut the FRED daily series
                are weekend-frozen at the Friday 06-12 closes, so nothing re-fired: 10Y
                holds 4.45% (below the 4.53% gate and inside the reclaim-long filter 10Y
                &lt; 4.55%), and HY OAS holds 2.78% (at, not above, its gate).{' '}
                <span className="dn-em">There is no fresh weekend macro signal — the
                gates stay un-fired by virtue of being frozen below them, and the only
                live macro tick is DXY easing below 100 (a marginal risk-on read). The
                macro tape stays aligned with the BTC turn rather than fighting it.</span>{' '}
                A re-grow would have leaned against the bounce; the gates staying
                un-fired keeps even the discretionary tension off the table. The desk
                holds no tail and has no gate to fire against the net-long-gamma,
                200W-reclaiming tape. Re-read on Monday when FRED daily prints resume.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed · no residual · re-grow gate UN-FIRED on both legs (weekend-frozen) — no tension to manage</span></div>
                <div><span className="dn-lvl-k">re-grow leg A (UN-FIRED)</span><span className="dn-lvl-v bull">10Y &gt; 4.53% close — UN-FIRED at 4.45% (weekend-frozen below the gate)</span></div>
                <div><span className="dn-lvl-k">re-grow leg B (UN-FIRED)</span><span className="dn-lvl-v bull">HY OAS &gt; 2.78% close — UN-FIRED at 2.78% (weekend-frozen AT the gate, not above)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — HOLDS TRUE at 4.45%</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as the
                levels drift, not backtested breakpoints, and this cut they are simply
                frozen — re-read Monday on the first fresh FRED daily print. A fresh
                tail would only make sense if the BTC-internal structure rolled back
                over (book re-deepens short-gamma below a re-failing flip AND the 06-15
                weekly fails) WITH the macro legs re-firing — none of those holds now.
                Re-arm the watch only on a clean re-fire of BOTH macro legs into a
                BTC-internal breakdown; absent that, there is no tail to grow.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · ON HOLD — the SM feed is FROZEN ~46.5h, the framework cannot be assessed on its own data this cut</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — ON HOLD: the Hyperliquid SM feed froze 2026-06-12 01:36Z (~46.5h stale), so no SM Δnet step can be computed; the perp-tape proxy (OI +2,365 up-day, funding flipped short-pay, perp discount) suggests shorts leaning into the bounce but it is unconfirmable
              </div>
              <div className="dn-thesis">
                The squeeze-cycle framework runs as a watchlist with no calendar prior
                (the cadence was falsified late May), and this cut it is ON HOLD because
                its primary input is dark: the SM block in live_db has not advanced
                since 2026-06-12 01:36Z, so the SM long/short/net are frozen and no
                discrete Δnet ≥ +3k cover step or ≤ −3k re-stack can be measured without
                fabricating. <span className="dn-em">The squeeze read this cut therefore
                rests entirely on the perp-tape proxy, which is suggestive but not
                confirming: OI EXPANDED +2,365 on the up-day, funding FLIPPED to pay
                shorts (~7h36m short-pay into the snap), futures aggressors net-sold
                into a spot-led rally, and perp trades a discount — the configuration of
                shorts initiating into a bounce, which would be the re-stack tell if the
                SM feed corroborated it.</span> Read any fresh Δnet ≤ −3k single-minute
                step (Δshort &gt; 0 + Δlong &lt; 0 same minute) as a re-stack hostile-2
                signal once the feed thaws, and any Δnet ≥ +3k cover step as its inverse
                — but neither can be read while the feed is frozen.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v stale">ON HOLD · SM feed frozen ~46.5h (since 2026-06-12 01:36Z) · no SM Δnet step computable this cut</span></div>
                <div><span className="dn-lvl-k">perp-tape proxy (live)</span><span className="dn-lvl-v">OI +2,365 (+2.42%) on the up-day · funding flipped short-pay (snap −5.03%, ~7h36m) · futures CVD −677 into a spot-led rally · perp −$17.97 discount — shorts leaning into the bounce, unconfirmable vs SM</span></div>
                <div><span className="dn-lvl-k">forward gating</span><span className="dn-lvl-v">once the SM feed thaws: fresh Δnet ≤ −3k single-minute = re-stack hostile-2 signal; Δnet ≥ +3k = cover ignition — no time prior either way; until then the proxy is the only read</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the cadence is dead (falsified late May),
                and the SM feed is frozen, so there is no SM data to read this cut —
                treat the framework as ON HOLD, not as a quiet book. Do NOT carry the
                frozen −37.3k net forward as if it were a live read or difference it
                against a future thawed value as a single step (the gap will be a
                multi-day accumulation, not a minute step). The perp-tape proxy points
                to shorts initiating into the bounce, which is the configuration a
                re-stack would print, but without the SM feed it stays a proxy. Resume
                the framework the moment the feed advances; re-read the first fresh Δnet
                step for which way the book commits.
              </div>
            </div>
            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the 200W reclaim STRENGTHENED (three finalized daily closes above; 06-15 close leaning reclaim hard) · the scout STILL can&rsquo;t fire as the TD cluster inverted · the dealer book tripled net-long-gamma · the perp tape turned constructive but the SM feed is frozen · desk flat</span>
            </h2>

            <p>
              Of the 06-13 conditions: the 200W cycle-floor reclaim STRENGTHENED (the
              06-13 daily close finalized at $64,418, a third finalized close above the
              floor, spot +3.92% above, in-progress 06-15 bar +3.82% above); the dealer
              book TRIPLED its net-long-gamma to +63.4M and spot pulled +1.73% above the
              flip; the mean-revert scout STILL can&rsquo;t fire — its funding leg
              revived and its flip leg holds, but its TD9-BUY cluster inverted to a SELL
              read, so it is broken on a different leg again; the macro re-grow legs
              remain UN-FIRED (weekend-frozen at 10Y 4.45%, HY OAS 2.78%) and the
              reclaim-long filter holds; and the SM feed is FROZEN ~46.5h so the
              squeeze-cycle framework is ON HOLD and the perp-tape proxy is the only
              positioning read. <em>The single structural read is a bounce that has
              extended into a genuine up-leg on improving structure — the 200W reclaim
              strengthened to three closes, gamma tripled, the perp tape turned
              constructive (shorts leaning into a spot-led rally), and BTC leads the
              cross-asset board bar COPPER — but it is doing so into top divergences on
              every fast/mid frame and a fresh ⚡ 8h TD9 SELL, with every MA overhead and
              the smart-money side unreadable.</em> The conditions today re-set around
              the strengthened floor reclaim, the still-grounded scout (now broken on
              the TD leg), a macro tail with both gates un-fired, and a squeeze framework
              on hold:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>200W weekly-close reclaim (bullish)</td><td className="bull">06-15 W-MON close &gt; $62,019 — three finalized daily closes above + in-progress bar +3.82% above</td><td>confirms the floor reclaim, a one-week dip-and-reclaim of the post-06-08 lineage; re-opens the scout-long case on a confirmed turn — now the higher-probability path by a wide margin</td></tr>
                <tr><td>200W weekly-close break (bearish)</td><td className="bear">06-15 W-MON close &lt; $62,019</td><td>first sustained weekly close below the 200W in the post-06-08 lineage (last full-history below-own-200W close was 2023-10-09) — now a low-probability path after three finalized daily closes above and a +3.82% cushion; escalate the cycle-regime read if it prints</td></tr>
                <tr><td>14JUN expiry settle (today 08:00Z, ~8h ahead)</td><td>+17.10M positive front chunk clears; ex-14JUN aggregate ≈ +46.3M (a smaller positive book post-settle)</td><td>read the settle as an interim tell — clearing a POSITIVE chunk trims the net-long-gamma cushion; the book stays firmly net positive, not a regime change</td></tr>
                <tr><td>Mean-revert long scout — TD9 leg (INVERTED)</td><td className="bear">TD9-BUY cluster — DIED / CONTRA (3d Sell 1 water-up death, 8h ⚡ TD9 SELL, top divs on 15m/30m/1h/4h)</td><td>the scout cannot fire while the TD cluster is inverted to a SELL read, even though the funding leg revived and the flip leg holds; stand down — re-arm only on a confirmed TD9-BUY cluster re-forming AND a live funding short-pay ≥4h AND the 06-15 weekly reclaim, do not synthesize from the two live legs</td></tr>
                <tr><td>0-γ flip (held low, spot well above)</td><td className="bull">flip $63,359 (+$77); spot +1.73% / idx +1.95% — both ABOVE, gap widened</td><td>spot pulled away above the flip as gamma tripled; a dampening, supportive dealer location, not a trigger on its own</td></tr>
                <tr><td>Macro tail re-grow (BOTH legs UN-FIRED, frozen)</td><td className="bull">10Y &lt; 4.53% (UN-FIRED at 4.45%, weekend-frozen); HY OAS AT 2.78% (UN-FIRED, not above)</td><td>weekend-frozen below/at both gates; no tail to grow and no tension to manage — macro aligned with the BTC turn; re-read Monday on the first fresh FRED daily print, re-arm only on a clean re-fire of BOTH legs into a BTC-internal breakdown</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (SM feed FROZEN ~46.5h)</td><td className="stale">ON HOLD — no SM Δnet step computable; perp-tape proxy points to shorts leaning into the bounce</td><td>the framework cannot be assessed on its own data while the feed is frozen; resume the moment it thaws and read the first fresh Δnet ≤ −3k (re-stack) or ≥ +3k (cover) single-minute step; do not difference the frozen net against a future thawed value as a step</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                the 06-15 weekly close against the 200W $62,019 (now leaning reclaim
                hard with three finalized daily closes above and the in-progress bar
                +3.82% above): a weekly close back above the 200W confirms the floor
                reclaim and re-opens the scout-long case once a TD9-BUY cluster
                re-forms; a weekly close below would still confirm the first sustained
                weekly-200W break of the post-06-08 lineage (last full-history
                below-own-200W close was 2023-10-09), now a low-probability path
              </span>. Until then this note runs as written: the desk is flat, the 200W
              watch is the primary framework and its reclaim strengthened to three
              finalized daily closes above, the mean-revert long scout still can&rsquo;t
              fire (the TD cluster inverted to a SELL even as the funding and flip legs
              held — no chase), the macro tail re-grow stays un-fired (weekend-frozen)
              with the macro tape aligned to the BTC turn, and the squeeze-cycle
              hostile-2 framework is ON HOLD with the SM feed frozen ~46.5h. The dealer
              book tripled to +63.4M net-long-gamma and spot pulled +1.73% above the
              flip; funding flipped to pay shorts; OI expanded to the largest build of
              the post-06-08 sequence as shorts leaned into a spot-led rally; BTC now leads the
              cross-asset board on 7d bar COPPER inside a still-NORMAL broad regime. The
              right read for the next 24h is{' '}
              <em>patient and flat — let the 06-15 weekly close confirm the strengthened
              floor reclaim and let a TD9-BUY cluster re-form before the scout is
              anything other than grounded; the structure firmed and the bounce
              extended, but it is extending into top-divergence exhaustion with the
              position book unreadable, and an extending-but-exhausting up-leg is not a
              trade</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit (PASS-WITH-NOTES) — every
              finding grep-closed to zero stale matches
            </span>
            <b>Status:</b> this is the <b>v2</b> cut built on the 2026-06-14 00:06Z
            atomic snapshot, promoted from v1 after the STAGE B codex hostile
            cross-model audit (verdict <b>PASS-WITH-NOTES — 0 CRITICAL, 2 MAJOR</b>)
            plus an ask-deepseek arithmetic second-audit (1 CRITICAL numeric flag).
            See <code>audits/2026-06-14-desk-note.md</code>. Every finding was applied
            in place and then grep-closed across the FULL EN file until zero stale
            matches remained (per the 06-08 / 06-09 root-cause discipline — fix the
            invariant everywhere, not only at the cited lines).{' '}
            <b>Findings &amp; grep-closure:</b>{' '}
            <b>DN-001 (MAJOR) RESOLVED</b> — claim &ldquo;OI expansion is the first
            build of the post-06-08 lineage&rdquo; was FALSE (the post-06-08 sequence
            already had OI builds: +739 BTC on 06-10, +212 BTC on 06-11). Patterns
            searched: <code>first build</code>, <code>first time of the</code>,{' '}
            <code>first expansion</code>, <code>expanded for the first</code>,{' '}
            <code>build of the lineage</code>, <code>expansion of the lineage</code>.
            Hits before fix: 6 OI-bearing (manifest tile, lead, §I roman header, §I
            funding para, §VI close, audit-trace pin). Hits after fix: 0 (reframed to
            &ldquo;largest build of the post-06-08 sequence&rdquo;; the surviving{' '}
            <code>first time of the move</code> at the 1d-MACD line and{' '}
            <code>first time</code>-free MA text are unrelated to OI). +2,365 BTC /
            +2.42% arithmetic unchanged (codex-confirmed).{' '}
            <b>DN-002 (MAJOR) RESOLVED</b> — claim &ldquo;funding is the first live
            &ge;4h short-pay leg of the lineage&rdquo; was FALSE (06-11 already ran a
            live &ge;4h short-pay leg, 850-row negative streak, snap still negative).
            Patterns searched: <code>short-pay leg of the lineage</code>,{' '}
            <code>first live</code>, <code>leg of the lineage</code>,{' '}
            <code>first ... short-pay</code>. Hits before fix: 1 (scout leg-2 thesis).
            Hits after fix: 0 (reframed to &ldquo;first live &ge;4h short-pay leg
            since the 06-13 dead read&rdquo;; the meta tiles and §I prose already used
            the correct REVIVED / reversed-from-06-13 framing). Streak arithmetic (456
            rows / ~7h36m, snap −5.03% ann) unchanged (codex-confirmed).{' '}
            <b>ask-deepseek CRITICAL (DXY Δ) RESOLVED</b> — adjudicated against the
            loaded macro dashboard: the dashboard&rsquo;s own 1d Δ field IS −0.11
            (faithful to source), but presenting &ldquo;99.75 (−0.11)&rdquo; adjacent
            to &ldquo;from 06-13&rsquo;s 100.08&rdquo; implied −0.11 was the
            note-to-note move, when 99.75 − 100.08 = −0.33. Patterns searched:{' '}
            <code>−0.11</code>, <code>100.08</code>, <code>99.75</code>. Hits before
            fix: 4 conflation sites (manifest, §IV prose, macro table, audit-trace
            pin). Hits after fix: 0 conflations — every site now labels −0.11 as the
            dashboard 1d Δ and states −0.33 note-to-note explicitly. Verdict overall:
            promoted v1 → v2 <b>post codex hostile audit</b>. Source pins
            (author-time, now audit-confirmed):{' '}
            funding × 1095 (snap −5.03% ann from raw −0.004589, n2n mean +0.29% ann,
            range −5.71% / +6.73%, cap 1 / 1441 at the +6.73% max and 2 / 1441 at the
            −5.71% min, neg-minute share 41.64% = 600 / 1441, trailing negative streak
            ending AT the snap 456 sampled rows / ~7h36m with funding negative at the
            snap — a ≥4h short-pay leg, scout funding leg-2 REVIVED / LIVE); GEX
            dual-reference sign (flip $63,359, spot +1.73% = 64,452.78 / 63,359 − 1 /
            idx +1.95% = 64,593 / 63,359 − 1 — both ABOVE, gap widened vs 06-13;
            aggregate +63.4M grew from +20.7M; $60k −21.07M lightened; displayed
            expiry rows sum ≈ +58.18M NON-ADDITIVE vs the dashboard +63.4M, dashboard
            authoritative; 14JUN 0.3DTE +17.10M settles 08:00Z, ex-14JUN ≈ +46.3M,
            clearing a positive chunk LOWERS the aggregate); 200W full-history W-MON
            SMA $62,019 (200 closed bars ending 06-08) vs live spot +3.92% above and
            in-progress 06-15 bar $64,388 +3.82% above, 8 / 154 = 5.19% frequency,{' '}
            <code>weekly_200sma.json</code> ABSENT (200W computed directly from parquet,
            JSON percentile / last-event unavailable, not fabricated);{' '}
            <b>SM FEED FROZEN</b> — the Hyperliquid SM block has not advanced since
            2026-06-12 01:36Z (~46.5h stale), long 13,532.412 / short 50,825.664 / net
            −37,293.252 are the frozen last-written values (byte-identical to the 06-13
            note, freeze predates it), so NO SM Δ / cut fraction / squeeze-cycle step
            is computed this cut (not fabricated); daily-close lineage (06-08 $63,058,
            06-09 $61,695, 06-10 $61,484 FINAL, 06-11 $63,598 FINAL, 06-12 $63,547
            FINAL, 06-13 $64,418 FINAL, 06-14 in-progress $64,388 — THREE finalized
            closes above the floor); OI n2n +2,365 BTC (+2.42%, snap 100,155, the
            largest build of the post-06-08 sequence — the 06-10 +739 / 06-11 +212
            builds were smaller, so NOT a lineage-first build); 30D RV 41.13% (30 returns / 31 closes; 41.81%
            alt at 29 returns; window 05-15 → 06-14); cross-asset |r| 0.407 NORMAL, BTC
            +6.01% leads the board bar COPPER +7.07% (+3.70pt vs NQ +2.31%, was +1.49pt
            on 06-13); macro Tier-1 WEEKEND-FROZEN at the Friday 06-12 closes (10Y
            4.45% — re-grow leg-A UN-FIRED, reclaim-long filter 10Y &lt; 4.55% holds;
            HY OAS 2.78% AT the gate, leg-B UN-FIRED; TIPS 2.16% regime-z EXTREME; DXY
            99.75 eased below 100 (dashboard 1d Δ −0.11; −0.33 note-to-note from
            06-13&rsquo;s 100.08); MOVE 69.4; Fed net liq $5.897T); no cb_cvd reset in
            the n2n window; full MA matrix vs live spot $64,452.78 off parquet
            2026-06-14 00:05Z close $64,387.60 (D-SMA100 $72,611 cycle anchor −11.24%,
            every MA overhead, nearest D-EMA20 −3.28%, W-SMA150/200 non-computable at
            129 subset weekly bars, W-EMA150/200 seed-disclosed); MTF cross labels per
            the archived scan (15m / 30m / 1h above cloud, 1d fresh water-down golden
            cross 1b, top divs on 15m / 30m / 1h / 4h, ⚡ 8h TD9 SELL, 3d rolled to a
            water-up death cross); claims-vs-loaded-data (NTT / max-pain / strike-IV /
            BTC-NQ framework-only; JGB monthly do not lean; IV chain-median across 946
            instruments not a tradable spread). Archive:{' '}
            <code>/opt/desk-note/snapshots/2026-06-14-0006/</code> (btc_gex.html,
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
            Numbers reflect a single atomic snapshot (2026-06-14 00:06Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-06-13 22:16Z (~1h50m before
            snapshot) and is weekend-frozen, and the Hyperliquid SM feed is
            frozen ~46.5h — those inputs are explicitly stale and flagged as
            such. This is the <b>v2</b> cut — promoted from v1 after the
            STAGE B codex hostile audit (PASS-WITH-NOTES; the two MAJOR
            lineage-novelty findings and the ask-deepseek DXY-Δ flag applied
            and grep-closed). Levels, sizes,
            and conditions are illustrative of the desk&rsquo;s process, not
            standing recommendations. Past correlation, gamma, and positioning
            patterns do not bind future tape. Derivatives carry the risk of
            total loss and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                A real up-leg on improving structure — the 200W reclaim strengthened to
                three finalized closes above, the dealer book tripled net-long-gamma and
                spot pulled +1.73% above the flip, funding flipped to pay shorts as OI
                expanded, and BTC led the board bar COPPER. But it is extending into top
                divergences on every fast frame and a fresh ⚡ 8h TD9 SELL, every MA is
                overhead, and the SM feed is frozen ~46.5h so the position book is
                unreadable. Flat and patient — the 06-15 weekly close is the binary,
                leaning reclaim hard.
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
            v2 · 2026-06-14 00:06Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
