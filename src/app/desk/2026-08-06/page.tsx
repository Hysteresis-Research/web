import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-06 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-06',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-06' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260806() {
  await requireViewer('/desk/2026-08-06');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-06 · v2</span>
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
              <span className="dn-big">$64,620</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.85%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-06 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-06 00:05Z (row t=&ldquo;08-06 08:05&rdquo; BJ, the 00:05Z daily anchor)</td>
                  <td className="dn-flag">
                    fresh · 1-min · pinned to the 00:05Z anchor row for
                    reproducibility (file tail was 00:08Z at read time) · live-tape
                    <code> t</code> is BJ-local (UTC+8): the 00:05Z pin = t &ldquo;08-06
                    08:05&rdquo;, all downstream BJ timestamps converted to UTC in
                    the prose
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-06 08:01 BJ (00:01Z) scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (can advance intrahour) · the
                    archived copy at /opt/desk-note/snapshots/2026-08-06-0005/ is the
                    pinned source · ~4-min stale vs snapshot anchor · in-progress
                    bars · scan spot $64,627, 24h +0.87%
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-06 00:01Z snapshot</td>
                  <td className="dn-flag">
                    ~4-min stale vs anchor · Deribit idx $64,938 vs live $64,620
                    ($318 above live) · 6AUG26 0.3DTE +19.55M still on the book
                    (settles 08:00Z today, ~8h after this snap) · archived at
                    /opt/desk-note/snapshots/2026-08-06-0005/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-06 00:01Z
                  </td>
                  <td className="dn-flag">~4-min lag · 7d 1h bars · 22 assets · 167 rows · archived in snapshot dir</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-05 22:17Z render</td>
                  <td className="dn-flag">
                    ~1.8h render lag · FRED Tier-1: 10Y −7bp to 4.63%, TIPS −3bp to
                    2.40%, HY OAS −5bp to 2.73%, DXY −0.08 to 99.88, Fed net liq
                    −0.092T to $5.825T · MOVE fetch-failed (dark, 2nd render) · NFCI
                    stale · archived in snapshot dir
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-08-06 00:05Z</td>
                  <td className="dn-flag">
                    close $64,599.80 (in-progress 08-06 bar) · offsets recomputed vs
                    live spot $64,620.23 · weekly ladder off the full 2019–2026
                    wildcard (362 weekly bars) · W-SMA200 $63,759.37 in-progress /
                    $63,533.52 settled (the trap-watch floor); W-EMAs full-history
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle floor watch</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · recomputed 2026-08-03 00:11Z</td>
                  <td className="dn-flag">
                    weekly-close 200-SMA $63,533.52, last completed week 2026-08-02
                    close $63,550.00, state ABOVE, 5 consecutive weekly closes above
                    (streak from 2026-07-05) · slow level (~$250/wk), hours-stale is
                    fine · the dedicated weekly_200sma.json runbook path is absent;
                    trap-watch state used as the live substitute
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale · monthly (65d) · do not treat as live</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT pivots, max-pain, strike-level IV, BTC/NQ ratio
                  </td>
                  <td className="dn-v-cell">NOT LOADED in this cut</td>
                  <td className="dn-flag">claims explicitly framework-only (btc_ntt_analysis.html is JS-rendered, not extractable)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h ann.</span>
              <span className="dn-v">+7.11%</span>
              <span className="dn-src">live · funding field 0.006493/8h × 1095 = +7.11% ann · 24h mean +3.06% (was +6.00% on 08-05 — cooled −2.94pt) · 58 / 1442 sampled rows negative (was 0 / 1441 on 08-05 — the negatives RETURNED) · max +7.31% ann @ 08-06 07:51 BJ (23:51Z 08-05), min −0.83% @ 08-06 04:19 BJ (20:19Z 08-05)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h mean</span>
              <span className="dn-v bull">+6.00% → +3.06% (cooled −2.94pt)</span>
              <span className="dn-src">the 08-05 re-heat REVERSED — 58 negative rows returned (0 on 08-05), the long carry bled off nearly in half; this is the leverage-off the cover-bounce scout was gated on, finally showing alongside the SM cover</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−1.03% (−1,112.5 BTC)</span>
              <span className="dn-src">live · a THIRD straight contraction, and the biggest (−628.7 on 08-04, −326.9 on 08-05, now −1,112.5) · 107,138 BTC now vs 108,250 24h ago · positions kept coming off through the cap-clearing close — a covering grind, no fresh long stacking behind the break</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bull">53.42 / 46.58</span>
              <span className="dn-src">live_db `mkt_long_pct` · eased from 56.11 (24h ago) to 53.42 (a −2.69pt de-crowd) · 24h range 53.20 / 56.73 — retail keeps bleeding off the long side, now the least-crowded of the recovery</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−9.04k (net SHORT, but COVERING)</span>
              <span className="dn-src">live · long 13.08k − short 22.11k · net trough (most short) −11.81k @ 08-05 20:11 BJ (12:11Z 08-05); net peak (least short) −8.99k @ 08-06 07:26 BJ (23:26Z 08-05) — SM rolled the short book down through the up-move, ending near the least-short of the window</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs same-clock 24h base</span>
              <span className="dn-v bull">−10,007 → −9,038 (+969 COVER)</span>
              <span className="dn-src">|Δnet|/prior_net = 969.3 / 10,007.4 = 9.69% · CLEAN this run — no BJ-14:36 re-sync artifact (14:36 minute Δ −4.7; the largest single-min step is a normal +1,227 @ 08-06 04:26 BJ / 20:26Z 08-05, a cover step) · Δlong −1,407, Δshort −2,377 — shorts came off HARDER than longs, so net covered</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.6% / 29.11%</span>
              <span className="dn-src">GEX median IV vs 30D close-to-close RV (30 returns / 31 closes, logret.std × √365 × 100) · chain richness ~+11.5pt · IV median is a chain-median across instruments, NOT a tradable spread · P/C OI 0.527 (call 224,009 / put 118,040)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+2.26% (above)</span>
              <span className="dn-src">flip $63,191 (rose from $63,124 on 08-05) · vs live spot $64,620.23 (+2.26%; 64,620.23/63,191.38 − 1 = 2.261%) / GEX file Deribit idx $64,938.37 (+2.76%; 64,938.37/63,191.38 − 1 = 2.764%) — both refs positive · headline GEX +108.0M, by-expiry rollup +121.04M (up from +106.0M / +93.78M on 08-05 — a 4th straight positive build)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The price/positioning divergence resolved BULLISH — the tape dragged
                the book. The 08-05 daily closed above the D-EMA50 cap the 08-05 note
                required AND smart money finally covered, so by that note&rsquo;s own
                stated trigger the cover-bounce scout arms a starter
              </span>. Spot is{' '}
              <span className="dn-tag bull">$64,620, +0.85% on 24h</span>; the 08-05
              daily closed <span className="dn-tag bull">$64,633.90</span> — clearing
              the 08-05 note&rsquo;s named{' '}
              <span className="dn-tag bull">D-EMA50 cap $64,612</span> by $22, the
              exact bull leg that arms the scout. The second leg fired too: SM covered{' '}
              <span className="dn-tag bull">CLEANLY +969 (−10,007 → −9,038)</span> —
              shorts rolled off harder than longs (Δshort −2,377 vs Δlong −1,407), no
              BJ-14:36 artifact this run — and funding{' '}
              <span className="dn-tag bull">cooled hard (24h mean +6.00% → +3.06%,
              58 negative rows returned from 0)</span>, the leverage-off the scout
              was gated on. But the confirmation is a kiss, not a break, and the
              caveats stack:{' '}
              <span className="dn-tag bear">spot sits −0.02% right at the risen
              D-EMA50 cap $64,634</span> (the cap climbed to meet the close — the
              08-05 bar closed $1.19 under the same-day D-EMA50), net −9,038 is a hair
              past the −9,000 cover gate, OI contracted a third straight day{' '}
              <span className="dn-tag bear">−1.03% (−1,112.5 BTC)</span> so the break
              rode a covering grind with no fresh longs behind it, and the dealer book
              re-gammaed to its heaviest positive of the lineage{' '}
              <span className="dn-tag bear">(+108.0M headline / +121.04M rollup,
              the $65k wall +26.35M sitting right at spot)</span> — a heavy dampener
              capping the $64.5k–$68k path. Book moves off FLAT to a{' '}
              <span className="dn-tag bull">scout long starter, 0.2R</span> — the two
              named legs printed together — but sized minimum into a decisive-break /
              gamma-cap caveat, with the chase-short STOOD DOWN (floor held, gamma
              more positive, spot +2.26% above the flip).
            </p>

            <p>
              BTC prints <span className="dn-tag">$64,620</span> live,{' '}
              <span className="dn-tag bull">+0.85%</span> on 24h (the live-tape
              window; the 08:01 BJ MTF scan reads +0.87% on its own 24h base — the
              ~4-min offset and different window open account for the small gap),
              inside a <span className="dn-tag">$65,021 / $63,914</span> range (24h
              high @ 04:21 BJ 08-06 / 20:21Z 08-05, low @ 21:36 BJ 08-05 / 13:36Z
              08-05).{' '}
              <span className="dn-signal">The reclaim extended and the cap
              cleared</span>: 08-03 closed $63,497.20, 08-04 closed $64,075.50, and
              08-05 closed <span className="dn-tag bull">$64,633.90</span> — a $558
              up-day that finally closed <em>above</em> the D-EMA50 cap the last two
              notes flagged at $64,612. Three daily offsets now sit below spot:{' '}
              <span className="dn-tag bull">D-SMA50 $63,271.87 (+2.13%)</span>,{' '}
              <span className="dn-tag bull">D-EMA20 $64,076.05 (+0.85%)</span>, and{' '}
              <span className="dn-tag bull">D-SMA20 $64,428.59 (+0.30%)</span> — up
              from two on 08-05, so the matrix keeps un-inverting. But the overhead is
              right here and load-bearing: the{' '}
              <span className="dn-tag bear">D-EMA50 cap $64,633.70 (−0.02%)</span> has
              risen to meet spot almost exactly — the 08-05 close cleared the old
              $64,612 print, but the cap itself climbed to $64,634, so spot is pinned
              AT the moving cap rather than decisively through it — then a gap to{' '}
              <span className="dn-tag bear">D-EMA100 $67,007.04 (−3.56%)</span>.{' '}
              <span className="dn-em">
                The single close the 08-05 note demanded — a D-EMA50 cap close above
                $64,612 with SM covering — printed on both legs (close $64,633.90,
                SM +969 cover). That arms the scout by the note&rsquo;s own rule. The
                caveat is that spot has not pulled clear of the cap: it sits −0.02%
                against a D-EMA50 that rose right underneath the close, so this is a
                kiss-and-hold, not an impulse through.
              </span>{' '}
              The 08-05 fork resolved the bull way: the tape dragged the book —
              price cleared the cap and SM covered into it — rather than the book
              dragging the tape back below the flip.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · SM COVERED cleanly into the cap-clearing close (no artifact) · shorts rolled off harder than longs, funding cooled and negatives returned · but OI contracted a third day — the break rode a covering grind, not fresh demand</span>
            </h2>

            <p>
              <span className="dn-signal">
                Smart money covered the reclaim — the second scout leg, and cleanly
              </span>. SM net is{' '}
              <span className="dn-tag bull">−9,038</span> vs the same-clock 24h
              baseline −10,007 — that is{' '}
              <span className="dn-em">9.69% less short</span>{' '}
              (|−9,038 − (−10,007)| / 10,007 = 969.3 / 10,007.4 = 9.69%), a cover
              into a +0.85% up-day. The components: long_btc{' '}
              <span className="dn-tag bear">14,483 → 13,076 (−1,407)</span> and
              short_btc{' '}
              <span className="dn-tag bull">24,490 → 22,114 (−2,377)</span>
              — shorts came off HARDER than longs, which is a genuine net cover
              (contrast 08-05, when longs shed and net went deeper short).{' '}
              <span className="dn-em">There is no BJ-14:36 re-sync artifact this
              run</span> — the recurring single-minute feed step that impaired the
              08-02 and 08-04 tells is absent (14:36 minute Δnet −4.7); the largest
              single-minute step is a normal-sized +1,227 @ 08-06 04:26 BJ (20:26Z
              08-05), a cover step, so the read is CERTIFIED, not data-impaired. SM
              net trough (most short){' '}
              <span className="dn-tag bear">−11,805 @ 08-05 20:11 BJ (12:11Z
              08-05)</span>; net peak (least short){' '}
              <span className="dn-tag bull">−8,985 @ 08-06 07:26 BJ (23:26Z
              08-05)</span> — SM rolled the short book down through the up-move and
              ended near the least-short of the window, exactly the cover the scout
              was gated on.
            </p>

            <p>
              The leverage side flushed rather than re-crowded — the mirror image of
              08-05.{' '}
              <span className="dn-signal">
                Funding cooled hard and the negatives returned
              </span>: live <span className="dn-tag">+7.11% ann</span> (field
              0.006493/8h × 1095), but the 24h mean{' '}
              <span className="dn-tag bull">+3.06% ann</span> (vs +6.00% on 08-05 —
              a −2.94pt cool), and the window carries{' '}
              <span className="dn-tag bull">58 / 1442 negative rows</span> — the
              negatives that vanished on 08-05 (0 / 1441) have returned, the long
              carry bled off nearly in half. Range{' '}
              <span className="dn-tag">−0.83% / +7.31% ann</span> (max @ 08-06 07:51
              BJ / 23:51Z 08-05, min @ 08-06 04:19 BJ / 20:19Z 08-05); not cap-pinned.
              OI Δ{' '}
              <span className="dn-tag bear">−1,112.5 BTC (−1.03%)</span> over 24h — a
              THIRD straight contraction and the biggest (−628.7 on 08-04, −326.9 on
              08-05, now −1,112.5; 108,250 → 107,138), so positions kept coming off
              through the cap-clearing close.{' '}
              <span className="dn-em">This is the tension in the bull read</span>:
              the cover and the funding flush are the leverage-off the scout wanted,
              but the OI contraction says the break was a covering grind, not fresh
              long demand stacking behind price. Retail{' '}
              <span className="dn-tag bull">mkt_long_pct 53.42%</span> from 56.11% —
              a −2.69pt de-crowd (24h range 53.20 / 56.73), now the least-crowded of
              the recovery. Perp trades a{' '}
              <span className="dn-tag bear">−$60.67 discount</span> to spot at the
              snap (1h mean −$63.83; 4h mean −$61.15; 24h mean −$57.00, range
              −$159.78 / +$50.94 — basis briefly premium once across the 24h but sits
              at a persistent discount). 1-min aggressor skew snap{' '}
              <span className="dn-tag bear">−13.1</span> (1h mean +0.95, range −21.3 /
              +29.0) — a marginal sell tilt at the snap inside a two-way hour.{' '}
              <span className="dn-em">
                Funding cooled + negatives back + SM covering + retail bleeding: the
                leverage-off legs of the scout are in hand. The one that is NOT is OI
                — a third contraction means the reclaim is still a covering grind, so
                the scout goes on as a minimum-size starter, not a conviction long.
              </span>
            </p>

            <p>
              Windowed flow says the up-print rode a covering grind that turned
              two-sided, with the last hour finally green.{' '}
              <span className="dn-em">The 24h reads are mixed against a positive
              price</span>: 24h price{' '}
              <span className="dn-tag bull">+0.85%</span>, OI{' '}
              <span className="dn-tag bear">−1,112.5 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +957.2</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −660.8</span>, big-print{' '}
              <span className="dn-tag bull">+123.1 BTC / 975 prints</span>,
              taker-net <span className="dn-tag bear">−644.0</span> —{' '}
              <span className="dn-em">
                spot aggressor flow bid (+957) while futures aggressor flow and taker
                sold and OI shrank: a spot-led covering lift, not stacked futures
                demand (both cb_cvd and fut_cvd reset at 06:20Z 08-05 / 14:20 BJ; the
                24h deltas are reset-adjusted around that break)
              </span>. ~4h (row window 04:04 → 08:05 BJ, one row longer than the exact
              clock): price{' '}
              <span className="dn-tag bear">−0.33%</span>, OI{' '}
              <span className="dn-tag bear">−1,455.6 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −397.1</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −11.7</span>, big-print{' '}
              <span className="dn-tag bull">+198.2 BTC / 108 prints</span>,
              taker-net <span className="dn-tag bear">−11.8</span> —{' '}
              <em>the top of the range faded, offered on spot with heavy OI
              coming off</em>. ~1h (row window 07:04 → 08:05 BJ, one row longer than
              the exact clock): price{' '}
              <span className="dn-tag">−0.01%</span>, OI{' '}
              <span className="dn-tag bear">−204.7 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +432.7</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +268.9</span>, big-print{' '}
              <span className="dn-tag bull">+128.6 BTC / 17 prints</span>,
              taker-net <span className="dn-tag bull">+268.8</span> —{' '}
              <em>the freshest hour is all-green on flow with OI still shrinking — a
              covering bid holding spot at the cap</em>. The 24h break printed on a
              spot-led cover into a positive-gamma cap; the 4h faded the highs, the
              1h shows a covering bid defending the cap with positions still coming
              off.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · regime FLIPPED to 5/9 trend-continuation (JT≥0) · a 5-frame water-down golden-cross cluster and a 7-frame bottom-div say the slow book is turning up · but a fresh 8h ⚡TD9 SELL and a just-crossed 1h death cross warn the fast bounce is stretched at the cap</span>
            </h2>

            <p>
              <span className="dn-signal">
                The regime flipped to trend-continuation and the slow book keeps
                turning up — but the fast frames are flashing overbought right at the
                cap, same as 08-05
              </span>. The regime tag is now{' '}
              <span className="dn-tag bull">5/9 周期动量体制 (JT≥0) —
              trend-continuation favoring</span> (flipped from 08-05&rsquo;s 5/9
              cycle-reversal JT&lt;0), the momentum book turning with the price. The
              water-down golden-cross cluster spans{' '}
              <span className="dn-tag bull">4h (15b) / 8h (8b) / 12h (3b) / 3d (9b) /
              1w (2b)</span> — five frames, the early bull-transition tell holding
              across the mid-and-slow book — and the bottom-divergence cluster grew
              to{' '}
              <span className="dn-tag bull">seven frames (15m/30m/1h/4h/8h/12h/1w)</span>
              from five on 08-05. The engine frames hold a long tilt: 15m/30m/1h all
              print above cloud with 1h RSI 59.6 (偏多 / lean-long). But the warnings
              printed with them:{' '}
              <span className="dn-tag bear">a fresh 8h ⚡TD9 SELL</span> (overbought
              reversal hint, cloud just crossed above), a{' '}
              <span className="dn-tag bear">1h water-up death cross just printed
              (刚印)</span> (early bull-to-bear probe on the fast frame), and the
              top-divergence cluster spans 15m/30m/1h/1d (4 frames). The 1M carries a{' '}
              <span className="dn-tag bull">⚡TD9 BUY</span>.{' '}
              <span className="dn-em">
                Read straight: the slow structure is turning up (regime flipped to
                trend-continuation, golden crosses on five frames, bottom-div on
                seven), which supports the scout the positioning book just armed. But
                the fast frames say the immediate bounce is stretched — a new 8h TD9
                sell and a fresh 1h death cross right at the D-EMA50 cap. The slow
                turn and the fast exhaustion are firing at the same level, exactly the
                setup for a kiss-the-cap that holds or fades intraday.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>read</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,627</td><td className="num">46.7</td><td className="neut">death (water-up) 13b</td><td className="bull">above 41b</td><td>Buy 1</td><td>lean-long · bot-div</td></tr>
                <tr><td>30m</td><td className="num">64,627</td><td className="num">52.2</td><td className="neut">death (water-up) 4b</td><td className="bull">above 21b</td><td>Buy 2</td><td>caution · bot-div</td></tr>
                <tr><td>1h</td><td className="num">64,627</td><td className="num bull">59.6</td><td className="bear">death (water-up) 刚印 (just printed)</td><td className="bull">above 59b</td><td>Buy 4</td><td>lean-long · top-div</td></tr>
                <tr><td>4h</td><td className="num">64,627</td><td className="num bull">61.7</td><td className="bull">golden (water-dn) 15b</td><td className="bull">above 3b</td><td>Sell 4</td><td>caution · bot-div</td></tr>
                <tr><td>8h</td><td className="num">64,627</td><td className="num bull">57.8</td><td className="bull">golden (water-dn) 8b</td><td className="neut">cloud above 刚穿 (just crossed)</td><td>⚡ TD9 SELL</td><td>caution · bot-div · TD9 sell</td></tr>
                <tr><td>12h</td><td className="num">64,627</td><td className="num bull">55.3</td><td className="bull">golden (water-dn) 3b</td><td className="neut">in cloud 62.3–64.8k</td><td>Sell 6</td><td>caution · bot-div</td></tr>
                <tr><td>1d</td><td className="num">64,627</td><td className="num">53.2</td><td className="neut">death (water-up) 10b</td><td className="neut">in cloud 62.7–68.0k</td><td>Sell 3</td><td>lean-short · top-div</td></tr>
                <tr><td>3d</td><td className="num">64,627</td><td className="num">46.5</td><td className="bull">golden (water-dn) 9b</td><td className="bear">below ↑76.4k</td><td>Sell 2</td><td>lean-short · trend</td></tr>
                <tr><td>1w</td><td className="num">64,627</td><td className="num">40.5</td><td className="bull">golden (water-dn) 2b</td><td className="bear">below ↑85.9k</td><td>Sell 1</td><td>caution · bot-div · SMA200 +1.35%</td></tr>
                <tr><td>1M</td><td className="num">64,627</td><td className="num">44.2</td><td className="neut">—</td><td className="bull">above ↓47.4k</td><td>⚡ TD9 BUY</td><td>lean-long · trend</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 08:01 BJ (00:01Z) scan (rolling
                    latest file; archived verbatim at
                    /opt/desk-note/snapshots/2026-08-06-0005/). Header alerts:{' '}
                    <em>8h ⚡TD9 SELL, 1h water-up death cross (just printed), 1M ⚡TD9
                    BUY</em>; 5-frame water-down golden cluster 4h/8h/12h/3d/1w.
                    Top-div 4: 15m/30m/1h/1d · bottom-div 7:
                    15m/30m/1h/4h/8h/12h/1w. Regime 5/9 trend-continuation (JT≥0).
                    Scan spot $64,627, 24h +0.87%, H/L $65,022 / $63,847, qVol
                    $9.34B, net tally 4 long / 3 short / 3 neutral. Closes are
                    in-progress bars; treat every value as provisional until each TF
                    closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix reads a reclaim reaching its cap, not a break clear of
              it. Spot $64,620 sits{' '}
              <span className="dn-tag bull">+2.13% above D-SMA50 $63,271.87</span>,{' '}
              <span className="dn-tag bull">+0.85% above D-EMA20 $64,076.05</span>,
              and <span className="dn-tag bull">+0.30% above D-SMA20 $64,428.59</span>
              — three positive daily offsets (up from two on 08-05) — with the
              in-progress <span className="dn-tag bull">W-SMA200 $63,759.37
              (+1.35%)</span> and the settled 200W cycle floor{' '}
              <span className="dn-tag bull">$63,533.52 (+1.71%)</span> below.
              Overhead, immediately:{' '}
              <span className="dn-tag bear">D-EMA50 $64,633.70 (−0.02%)</span> — the
              cap, risen right to spot — then a gap to{' '}
              <span className="dn-tag bear">D-EMA100 $67,007.04 (−3.56%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $68,245.64 (−5.31%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,215.20 (−6.64%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,472.43 (−6.98%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $69,757.04 (−7.36%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $70,517.91 (−8.36%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $72,501.25 (−10.87%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $73,976.57 (−12.65%)</span>.
              Far above and disused: W-SMA150 $76,880 (−15.95%), W-EMA50 $77,805
              (−16.95%), W-EMA100 $78,771 (−17.96%), W-SMA50 $83,353 (−22.47%),
              W-SMA100 $88,659 (−27.11%). The W-EMA200 sits at{' '}
              <span className="dn-tag bear">$68,572.12 (−5.76%)</span>.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-08-06 00:05Z (close
                $64,599.80); offsets recomputed against live spot $64,620.23.
                Displayed MA levels are $-rounded; offsets computed from exact series
                values. The weekly ladder is computed off the full 2019–2026 wildcard
                (362 right-labeled weekly bars), so W-SMA200 IS computable:
                $63,759.37 in-progress (+1.35%) and $63,533.52 settled — the settled
                value being the trap-watch weekly-close 200-SMA (recomputed 08-03
                00:11Z, the floor used for closes throughout). W-EMA200 $68,572.12
                (−5.76%) and W-EMA150 $73,976.57 (−12.65%) are full-history EMAs.
                Daily closes: 08-01 $62,792.30, 08-02 $63,550.00, 08-03 $63,497.20,
                08-04 $64,075.50, 08-05 $64,633.90, 08-06 (in-progress) $64,599.80 —
                the 08-05 close cleared the note&rsquo;s $64,612 D-EMA50 cap by $22,
                but the same-day D-EMA50 rose to $64,635.09, so the close landed
                $1.19 UNDER the risen cap: a cap-clearing close on the prior level,
                a kiss on the moving one.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book re-gammaed to the heaviest positive of the lineage · headline +108.0M / rollup +121.04M (was +106.0M / +93.78M) · flip risen to $63,191, spot +2.26% above · the $65k wall +26.35M sits right at spot — a heavy two-sided cap on the $64.5k–$68k band</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book added positive gamma for a fourth straight run — the
                dampener is now the heaviest of the whole recovery, clamped right over
                spot
              </span>. Headline GEX is{' '}
              <span className="dn-tag bull">+108.0M / 1%</span> (was +106.0M on 08-05)
              and the by-expiry rollup is{' '}
              <span className="dn-tag bull">+121.04M</span> (was +93.78M; the
              by-expiry strip sums to the gex_summary net_gex $121.04M). The 0-γ flip
              rose <span className="dn-tag">$63,124 → $63,191 (+$67)</span>, and spot
              $64,620 sits <span className="dn-tag bull">+2.26% above flip</span> on
              spot-denominated math (64,620.23 / 63,191.38 − 1 = +2.261%); the GEX
              file&rsquo;s Deribit index $64,938.37 ($318 above live spot) reads{' '}
              <span className="dn-tag bull">+2.76%</span> (64,938.37 / 63,191.38 − 1 =
              +2.764%) — both references positive, spot well above the flip on both.
              The wall map is a heavy positive band clamped over spot:{' '}
              <span className="dn-tag bull">$65k +26.35M</span> (heaviest wall, right
              at spot),{' '}
              <span className="dn-tag bull">$70k +20.52M</span>,{' '}
              <span className="dn-tag bull">$66k +19.23M</span>,{' '}
              <span className="dn-tag bull">$67k +18.62M</span>,{' '}
              <span className="dn-tag bull">$68k +18.39M</span>,{' '}
              <span className="dn-tag bull">$72k +10.30M</span>,{' '}
              <span className="dn-tag bull">$80k +8.74M</span>,{' '}
              <span className="dn-tag bull">$64.5k +5.23M</span>, with the negatives
              the crash-put shelf below:{' '}
              <span className="dn-tag bear">$60k −17.88M</span> (heaviest negative,
              the crash-put, eased from −19.59M on 08-05),{' '}
              <span className="dn-tag bear">$58k −5.49M</span>, and{' '}
              <span className="dn-tag bear">$62k −4.43M</span>.{' '}
              <span className="dn-em">
                The five large strikes across the +$64.5k–$68k positive band total
                +87.82M (+26.35M / +5.23M / +19.23M / +18.62M / +18.39M stacked);
                adding the smaller $65.5k +3.21M and $66.5k +0.02M fills the profile
                gap for a full-band +91.04M, with the $65k wall alone the heaviest
                single strike of the lineage sitting exactly at spot — this
                is the ceiling the scout is trading into. Dealers are bid into a fade
                and offered into a squeeze across the whole reclaim zone; the book is
                structurally dampening the break, which is why the scout target is a
                grind, not an impulse
              </span>. Near-dated: 6AUG26 0.3DTE{' '}
              <span className="dn-tag bull">+19.55M</span> is still on the book
              (settles 08:00Z today, ~8h after this snap) — a positive front, no
              near-dated negative amplifier. Forward strip: 7AUG 1.3 +31.60M, 8AUG
              2.3 +2.98M, 9AUG 3.3 +1.56M, 14AUG 8.3 +11.16M, 21AUG 15.3 +13.80M,
              28AUG 22.3 +21.49M, 25SEP 50.3 +11.10M, 30OCT 85.3 +1.31M, 25DEC 141.3
              +4.59M, 26MAR27 232.3 +1.21M, 25JUN27 323.3 +0.70M — the entire forward
              strip is positive; there is no negative-gamma chunk to flip the book
              bear.
            </p>

            <p>
              IV median across the chain is{' '}
              <span className="dn-tag">40.6%</span> against 30D close-to-close RV of{' '}
              <span className="dn-tag">29.11%</span> — chain-level richness{' '}
              <span className="dn-tag">~+11.5pt</span>.{' '}
              <span className="dn-em">
                A chain-median across instruments, not a tradable spread; the
                instrument count is not surfaced in this cut, and expiry-/strike-level
                vega, skew and term structure remain not loaded, so the vol read stays
                framework-only.
              </span>{' '}
              Put/Call OI ratio 0.527 (call OI 224,009 vs put OI 118,040 — a
              call-heavy book, consistent with the positive-gamma dampener). RV
              methodology: 30D close-to-close, logret.std × √365 × 100 on the last 30
              daily log returns (= 31 consecutive daily closes) anchored to parquet
              last bar 2026-08-06 00:05Z; range $62,255 – $66,522 over the underlying
              31-close window. (For reference, last 29 returns / 30 closes reads
              28.89%; the 29.11% page value comes from 30 returns.)
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Tier-1 eased further (10Y −7bp to 4.63%, TIPS −3bp to 2.40%, HY OAS −5bp to 2.73%) · rates filter still FALSE but narrowed to 8bp (was 15bp on 08-05) · MOVE dark · cross-asset regime dropped to IDIOSYNCRATIC · BTC still lagging a strong risk tape</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape eased a second day across rates, real-rates and credit
                — the reclaim-long rates filter narrowed to 8bp but stays FALSE
              </span>. Dashboard render is 2026-08-05 22:17Z, ~1.8h before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bull">4.63% (−7.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.97</span> — RISK-OFF tag, eased 7bp off
              08-05&rsquo;s 4.70%. 10Y TIPS real{' '}
              <span className="dn-tag bull">2.40% (−3.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.46</span> — still EXTREME RISK-OFF,
              eased. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.26% (−1.0bp)</span>. HY OAS{' '}
              <span className="dn-tag bull">2.73% (−5.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−0.92</span> — loose, eased. MOVE bond vol{' '}
              <span className="dn-tag stale">unavailable (fetch failed)</span> — dark
              a second render. DXY{' '}
              <span className="dn-tag bull">99.88 (−0.08)</span> — soft. Fed net
              liquidity{' '}
              <span className="dn-tag bear">$5.825T (−0.092T)</span>, RISK-OFF
              episodic. US-JP 10Y spread{' '}
              <span className="dn-tag">1.96% (−7.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag">157.70 (+0.00)</span>. NFCI −0.529 (loose,
              stale).{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) stays FALSE at
                4.63% but the gap narrowed to 8bp from 08-05&rsquo;s 15bp (4.70%) and
                08-04&rsquo;s 20bp (4.75%) — three days of easing, moving toward the
                gate. 10Y and TIPS still carry RISK-OFF / EXTREME RISK-OFF regime z
                (+1.97 / +2.46); the eased day does not change the regime read. MOVE
                is dark a second render, so bond-vol confirmation is unavailable.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>Macro indicator</th>
                  <th>level</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>read</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.63%</td><td className="num bull">−7.0bp</td><td className="num bear">+1.97</td><td className="bear">risk-off · eased 3rd day</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.40%</td><td className="num bull">−3.0bp</td><td className="num bear">+2.46</td><td className="bear">EXTREME risk-off · eased</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.26%</td><td className="num bull">−1.0bp</td><td className="num">—</td><td className="neut">easing</td></tr>
                <tr><td>HY OAS</td><td className="num">2.73%</td><td className="num bull">−5.0bp</td><td className="num bull">−0.92</td><td className="bull">loose · eased</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.529</td><td className="num">—</td><td className="num bull">—</td><td className="stale">loose · stale</td></tr>
                <tr><td>MOVE bond vol</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">unavailable · fetch failed (2nd render)</td></tr>
                <tr><td>DXY</td><td className="num">99.88</td><td className="num bull">−0.08</td><td className="num">—</td><td className="bull">softer</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.825T</td><td className="num bear">−0.092T</td><td className="num">—</td><td className="bear">drained on the week</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.70</td><td className="num">+0.00</td><td className="num">—</td><td className="neut">flat</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.96%</td><td className="num bull">−7.0bp</td><td className="num">—</td><td className="neut">narrowing</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7402</td><td className="num bull">−0.01</td><td className="num">—</td><td className="bull">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">(monthly, 65d)</td><td className="num bear">—</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.214</span>{' '}
              (dropped below the 0.25 NORMAL floor from 08-05&rsquo;s 0.289 —{' '}
              <span className="dn-tag">IDIOSYNCRATIC regime</span>, assets moving on
              their own drivers). BTC&rsquo;s ties eased to the risk complex: TSLA{' '}
              <span className="dn-tag">+0.464</span> (top), NQ{' '}
              <span className="dn-tag">+0.458</span>, SP500{' '}
              <span className="dn-tag">+0.386</span>, NVDA{' '}
              <span className="dn-tag">+0.357</span>, COPPER +0.286, JP225 +0.280,
              SILVER +0.248, URNM +0.247, GOLD +0.221. 7d performance is again the
              loud line:{' '}
              <span className="dn-tag bull">BTC +1.43%</span> — participating a
              little, but still lagging the risk tape: NQ{' '}
              <span className="dn-tag bull">+7.41%</span>, SP500{' '}
              <span className="dn-tag bull">+5.29%</span>, JP225{' '}
              <span className="dn-tag bull">+5.36%</span>, and the mega-caps ran hard
              — AMZN{' '}
              <span className="dn-tag bull">+18.55%</span>, MSFT{' '}
              <span className="dn-tag bull">+16.13%</span>, NVDA{' '}
              <span className="dn-tag bull">+15.30%</span>, GOOGL{' '}
              <span className="dn-tag bull">+8.55%</span>, META{' '}
              <span className="dn-tag bull">+8.16%</span>, TSLA{' '}
              <span className="dn-tag bull">+7.78%</span>. Metals firm: URNM +10.29%,
              PALL +8.35%, PLAT +8.03%, SILVER +7.16%, COPPER +6.27%, GOLD +4.78%.
              Energy still soft: CL{' '}
              <span className="dn-tag bear">−11.34%</span>, BRENT{' '}
              <span className="dn-tag bear">−9.93%</span>; AAPL{' '}
              <span className="dn-tag bear">−7.94%</span> the lone red mega-cap.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine narrowed to ~−5.98pt (BTC
                +1.43% vs NQ +7.41%, from −6.44pt on 08-05) — BTC is starting to
                participate but still trails a broad risk-on week. The regime dropped
                to IDIOSYNCRATIC (|r| 0.214), so the tape is not driving BTC either
                way this week; the reclaim is BTC-internal, and the scout stands on
                its own positioning legs, not a macro tailwind
              </span>. JGB monthly 2.67% is stale — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · book moves to a SCOUT LONG STARTER 0.2R · the 08-05 fork resolved bull — D-EMA50 cap close + SM cover both printed · sized minimum into the kiss-the-cap / heavy-gamma caveat · chase-short STOOD DOWN</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 08-05 note gated a scout long on two legs — a D-EMA50 cap close
                above $64,612 AND SM covering — and this run printed both, so the book
                moves off flat to a minimum-size starter
              </span>. The 08-05 daily closed $64,633.90 (cleared the $64,612 cap) and
              SM covered cleanly (+969, shorts rolled off harder than longs, net
              −9,038). By the note&rsquo;s own rule that arms the scout. Three caveats
              size it to the minimum: (1) the close cleared the OLD cap but the
              D-EMA50 rose to $64,635, so spot sits −0.02% AT the moving cap — a kiss,
              not a clean break through; (2) net −9,038 is only a hair past the −9,000
              cover gate; (3) OI contracted a third straight day (−1,112.5 BTC), so
              the break rode a covering grind with no fresh longs behind it, into the
              heaviest positive-gamma cap of the lineage (+108.0M headline, the $65k
              wall +26.35M right at spot). The chase-short is STOOD DOWN — the floor
              held, the book re-gammaed more positive, and spot is +2.26% above the
              flip. Book: <span className="dn-em">scout long 0.2R</span>, defined
              below.
            </p>

            <div className="dn-trade">
              <span className="dn-side bull">scout · LONG · ARMED (starter 0.2R) · both 08-05 legs printed — D-EMA50 cap close + SM cover</span>
              <div className="dn-trade-name">
                Cover-bounce scout — armed: the 08-05 daily cleared the D-EMA50 cap and SM covered cleanly into it
              </div>
              <div className="dn-thesis">
                The 08-05 note gated this scout on a D-EMA50 cap close above $64,612
                AND SM covering, inside the same session. Both printed: the 08-05
                daily closed $64,633.90, and SM covered +969 (−10,007 → −9,038, shorts
                off −2,377 vs longs off −1,407, a clean read with no BJ-14:36
                artifact). The supporting book confirms the leverage-off leg: funding
                cooled hard (24h mean +6.00% → +3.06%, 58 negatives returned), retail
                de-crowded to 53.42, the regime flipped to 5/9 trend-continuation, and
                the slow structure is turning up (5-frame water-down golden cluster,
                7-frame bottom-div). The offsetting caveats keep the size minimum:
                spot sits −0.02% AT the risen D-EMA50 cap (a kiss, not a clean break),
                OI contracted a third straight day (−1,112.5 BTC — the break is a
                covering grind, not fresh demand), and the dealer book is the heaviest
                positive-gamma cap of the lineage (+108.0M, the $65k wall +26.35M at
                spot) dampening the path. Starter 0.2R, add only on a decisive break
                clear of the cap.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">entry (armed)</span><span className="dn-lvl-v bull">scout long 0.2R at market ~$64,620 — both named legs (cap close $64,633.90 + SM cover +969) printed this session</span></div>
                <div><span className="dn-lvl-k">add trigger</span><span className="dn-lvl-v bull">a 1d close decisively clear of the D-EMA50 cap (&gt; ~$64,900, above the risen cap not just the old $64,612) with SM net holding &gt; −9,000 — add 0.2R</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1d close &lt; $63,533 (200W cycle floor) — a close back below ends the reclaim read; tighter working stop 1d close &lt; $63,191 flip</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$67,007 (D-EMA100) then $68,246 (D-SMA100) — into the +$64.5k–$68k / +91.04M positive-gamma band; treat as a grind, not an impulse</span></div>
                <div><span className="dn-lvl-k">R/R</span><span className="dn-lvl-v">entry ~$64,620, stop $63,533 = ~$1,087 risk; first target $67,007 = ~$2,387 ≈ 2.20:1 — but the +91.04M positive-gamma band dampens the path, so the realized R is likely below the geometric R</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> starter size only until spot pulls decisively clear
                of the D-EMA50 cap. The kiss-the-cap (spot −0.02% at $64,634) plus a
                third-day OI contraction means the break is not yet demand-confirmed —
                it is a covering grind that met the cap. Do NOT add on the price leg
                alone; the add requires a close clear of the risen cap with SM still
                covering. If SM rolls back short or the 08-06 daily closes back below
                the flip, cut the starter — the armed condition was a single-session
                print, not a standing base.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">flat · chase-short · STOOD DOWN · floor held, gamma heavier positive, spot +2.26% above flip</span>
              <div className="dn-trade-name">
                Chase-short — stood down: the reclaim cleared the cap and the dealer book re-gammaed to its heaviest positive
              </div>
              <div className="dn-thesis">
                The chase-short was gated on a flip/old-floor break ($63,191 flip /
                $63,311 old floor) with SM short AND gamma flipping negative. All three
                point the wrong way: spot is +2.26% above the flip (moved further away,
                not through), the dealer book re-gammaed to +108.0M headline / +121.04M
                rollup — the heaviest positive dampener of the recovery, the opposite
                of the negative-gamma amplifier the short needs — and SM COVERED
                (+969), so even the SM-short leg is now easing. With every leg
                against it, the short stands down; the crash-put shelf at $60k has also
                eased to −17.88M (from −19.59M), leaving even less cascade target.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm trigger</span><span className="dn-lvl-v bear">1d close &lt; $63,191 flip / $63,311 old floor AND aggregate GEX flipping negative (a fresh negative-gamma chunk added inside the front expiries)</span></div>
                <div><span className="dn-lvl-k">SM leg (now easing)</span><span className="dn-lvl-v bear">SM net −9,038, still short but COVERING (+969) — the short leg is weakening, not strengthening</span></div>
                <div><span className="dn-lvl-k">targets on re-arm</span><span className="dn-lvl-v">$62k (−4.43M) then $60k (−17.88M crash-put shelf) — both eased vs 08-05</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no short into a +108.0M positive-gamma book with the 200W floor holding, price +2.26% above the flip, and SM covering</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the entire forward GEX strip is positive (no
                negative-gamma chunk out to 25JUN27); a gamma flip would require a
                fresh negative chunk to build, not just spot drifting down. The $60k
                −17.88M crash-put is the structural target but the path there runs
                through the +$64.5k–$68k / $62k−$63k positive band that dampens both
                directions.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · divergence resolved · the tape dragged the book · watch for demand confirmation or a fade back to the cap</span>
              <div className="dn-trade-name">
                Divergence watch — RESOLVED bull: price cleared the cap and SM covered into it, but OI still contracting
              </div>
              <div className="dn-thesis">
                The 08-05 note framed a clean price/positioning divergence and said it
                would resolve one of two ways — the tape drags the book (SM covers into
                a D-EMA50 cap close, arming the scout) or the book drags the tape (the
                reclaim fails below the flip, re-arming the chase-short). It resolved
                the FIRST way: the 08-05 daily cleared the cap and SM covered +969,
                cleanly. The leverage-off legs confirmed (funding cooled, negatives
                returned, retail de-crowded), and the slow MTF book turned up (regime
                to trend-continuation, 5-frame golden cluster, 7-frame bottom-div). The
                open question is demand: OI contracted a third straight day, so the
                break rode covering, not fresh longs — the next watch is whether OI
                starts to build behind price (confirms the scout, arms the add) or the
                fast-frame exhaustion (8h TD9 sell, 1h death cross) fades spot back to
                the cap and below.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">bull confirmation</span><span className="dn-lvl-v bull">1d close clear of the risen D-EMA50 cap with OI building (contraction reverses) and SM net holding &gt; −9,000 — add the scout</span></div>
                <div><span className="dn-lvl-k">bear risk</span><span className="dn-lvl-v bear">1d close &lt; $63,191 flip with SM rolling back short — the resolution fails, cut the scout, watch the chase-short re-arm</span></div>
                <div><span className="dn-lvl-k">fast-frame tell</span><span className="dn-lvl-v bear">8h ⚡TD9 SELL + 1h water-up death cross (just printed) — near-term risk is a fade from the cap back into the band</span></div>
                <div><span className="dn-lvl-k">slow-frame tell</span><span className="dn-lvl-v bull">regime flipped to 5/9 trend-continuation + 5-frame water-down golden cluster + 7-frame bottom-div — the slow turn supports the armed scout</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the divergence resolved bull on
                positioning, which is why the book armed a starter — but a resolution
                on positioning into an un-confirmed demand base (OI still contracting)
                and a heavy positive-gamma cap is a starter, not a full position. Add
                on demand confirmation (OI build + decisive cap break), not on the
                arming print alone. If the fast-frame fade wins and spot closes back
                below the flip, the resolution was a false break — cut and reassess.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the divergence resolved bull — the tape dragged the book · scout armed a 0.2R starter · the note turns on whether demand confirms (OI builds, cap breaks clear) or the fast-frame fade pulls spot back below the flip</span>
            </h2>

            <p>
              Of the 08-05 decision conditions: the
              cover-bounce-scout-arms path FIRED — the 08-05 daily closed $64,633.90
              (above the $64,612 D-EMA50 cap) AND SM covered +969, both legs in the
              same session; the chase-short re-arm DID NOT FIRE — spot sits +2.26%
              above the risen $63,191 flip and gamma went more positive (+108.0M); the
              200W-cycle-floor-lost condition DID NOT FIRE — the floor held with spot
              +1.71% above it; the reclaim-holds-gamma-positive condition HELD —
              closes stayed above the floor and GEX stayed positive. <em>The
              divergence the 08-05 note flagged resolved the bull way: the tape
              dragged the book.</em> The conditions today re-set around a scout that is
              armed but not yet demand-confirmed:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Cover-bounce scout (long) — ARMED, add trigger</td><td className="bull">1d close decisively clear of the risen D-EMA50 cap (&gt; ~$64,900) AND OI building (contraction reverses) AND SM net &gt; −9,000</td><td>hold the 0.2R starter; add 0.2R on the demand-confirmed break, target $67,007 (D-EMA100) then $68,246 (D-SMA100)</td></tr>
                <tr><td>Scout stop / cut</td><td className="bear">1d close &lt; $63,191 flip (working) or &lt; $63,533 200W floor (hard) — or SM rolling back net short</td><td>cut the starter — the armed condition was a single-session print, not a standing base</td></tr>
                <tr><td>Chase-short (short) — re-arm</td><td className="bear">1d close &lt; $63,191 flip / $63,311 old floor AND aggregate GEX flipping negative</td><td>reassess chase-short only after a fresh audited trigger — no standing size; framework targets $62k (−4.43M) then $60k (−17.88M crash-put)</td></tr>
                <tr><td>200W cycle floor lost</td><td className="bear">weekly close &lt; $63,533.52 (200W) — would end the 5-week above-floor streak</td><td>cycle-support break — separate reassessment; the reclaim read ends</td></tr>
                <tr><td>Fast-frame fade (near-term)</td><td className="bear">8h ⚡TD9 SELL + 1h water-up death cross (just printed) resolve into a 1d close &lt; $63,191 flip</td><td>the reclaim fades from the cap; cut the scout and watch the flip-loss re-arm of the chase-short</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">10Y &lt; 4.55% close — FALSE at 4.63% (8bp to fire, narrowed from 15bp on 08-05)</td><td>standalone filter FALSE but closing on the gate; a BTC-internal cover-bounce is running without the rates tailwind, but 3 days of easing is moving toward it</td></tr>
                <tr><td>BTC-vs-TradFi lag</td><td className="bear">BTC +1.43% vs NQ +7.41% 7d = −5.98pt lag · |r| 0.214 IDIOSYNCRATIC</td><td>watch for BTC catch-up participation; regime dropped below NORMAL so the tape is not driving BTC either way — the reclaim is BTC-internal</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether demand confirms the armed scout — a decisive close clear of
                the risen D-EMA50 cap with OI finally building behind price (add the
                scout, target the $67k–$68.5k cluster) — or whether the fast-frame
                exhaustion wins and spot fades back below the $63,191 flip (cut the
                starter, and if gamma flips negative watch the chase-short re-arm
                toward the $60k −17.88M crash-put, though the eased carry and the
                heavy +91.04M positive-gamma band leave a dampened path)
              </span>. Until one of those prints, this note runs as written: the
              price/positioning divergence resolved bull — the 08-05 daily cleared the
              D-EMA50 cap and SM covered cleanly, funding cooled with negatives back,
              retail de-crowded, and the slow MTF book turned up to trend-continuation
              — so the book carries a minimum-size scout long 0.2R. But the break is a
              kiss-the-cap on a third-day OI contraction into the heaviest
              positive-gamma cap of the lineage, so the size stays minimum and the add
              waits on demand. The right read for the next 24h is <em>hold the
              starter, add only on a demand-confirmed break clear of the cap — do not
              chase the kiss</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit
            </span>
            <b>Status:</b> post codex hostile audit (STAGE B, hostile-but-fair, xhigh
            effort). Verdict PASS-WITH-NOTES — 0 CRITICAL / 0 MAJOR / 2 MINOR / 0 NIT;
            no publish-gating factual or structural break found in v1 EN. Both MINOR
            findings applied in v2; see audits/2026-08-06-desk-note.md. Grep-closure
            was run over the full EN file for each finding (patterns / hits-before /
            hits-after recorded below); zero stale matches remain.{' '}
            <b>DN-001</b> (MINOR — the +$64.5k–$68k / +91.04M gamma-band parenthetical
            did not foot: the five listed large strikes total +87.82M, not +91.04M):
            searched <code>&quot;sums to +91.04M&quot;</code> and the addend list
            <code> +26.35M / +5.23M / +19.23M / +18.62M / +18.39M</code> — hits-before
            1, hits-after 0. Fixed at :532 by stating the five large strikes total
            +87.82M and adding the omitted $65.5k +3.21M and $66.5k +0.02M to fill the
            profile gap for the full-band +91.04M; the standalone +91.04M full-band
            references at :726/:727/:853 are correct as the profile-band total and
            left intact. RESOLVED (hits-after = 0).{' '}
            <b>DN-002</b> (MINOR — the 4h/1h windowed-flow labels used one-row-longer
            slices than the clock labels implied, undisclosed): searched
            <code> &quot;4h (into snapshot)&quot;</code> and <code>&quot;1h: price&quot;</code>
            — hits-before 1 each, hits-after 0 each. Fixed at :355 and :363 by
            disclosing the row-offset windows (~4h row window 04:04 → 08:05 BJ, ~1h
            row window 07:04 → 08:05 BJ, each one row longer than the exact clock); the
            printed deltas are unchanged, now labeled honestly. RESOLVED (hits-after =
            0). Overall: post codex hostile audit; all findings RESOLVED, promoted v1 →
            v2. <b>Build note (INFO):</b> this server runs Node 18.19.1; Next 16.2.6
            hard-exits on Node &lt; 20.9.0, so a full{' '}
            <code>next build</code> is environment-blocked;{' '}
            <code>npx --no-install tsc --noEmit</code> is the build proxy.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-08-06 00:05Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-08-05 22:17Z (~1.8h before
            snapshot) and some inputs are explicitly stale, dark, or pending and
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
                The divergence resolved bull — price cleared the cap and smart money
                covered into it. But it is a kiss on a covering grind into the heaviest
                positive-gamma cap of the recovery. Scout long, minimum size. Add on
                demand, not on the kiss.
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
            v2 · 2026-08-06 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
