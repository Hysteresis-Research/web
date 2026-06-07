import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-07 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-07',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-07' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260607() {
  await requireViewer('/desk/2026-06-07');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-07 · v2</span>
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
              <span className="dn-big">$60,933</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.64%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-07 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-07 00:05Z (snapshot pin row, BJ 08:05 06-07 per live_db <code>t</code> BJ-local convention)</td>
                  <td className="dn-flag">
                    fresh · 1-min · pin row = <code>t == &ldquo;06-07 08:05&rdquo;</code>{' '}
                    (BJ-local, UTC 00:05Z) per runbook §2 LIVE-TAPE landmine ·
                    daily-update.timer 00:00Z + reports-refresh.timer ~:01 both
                    just ran, server artifacts 4–5 min fresh · the 6JUN26 −8.40M
                    front chunk settled CLEAN at 08:00Z 06-06 (~16h before this
                    snap) and the 7JUN26 0.3 DTE chunk is +3.87M POSITIVE — the
                    front amplifier finally let go without a fresh negative
                    replacement, the clean front decay the 06-05 note had
                    forecast and 06-06 missed
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-07 00:01Z scan (BJ 08:01, archived to snapshots/2026-06-07-0008/)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · archived under
                    snapshots/2026-06-07-0008/ before read per runbook §1
                    archive policy · 4 min stale vs anchor · in-progress bars ·
                    multi-TF ⚡ TD9 BUY now THREE concurrent across 12h / 1d /
                    3d (was four on 06-06: 15m / 8h / 12h / 1d — 15m flipped
                    to Sell 5 and 8h reset to Buy 1, while 3d converted from
                    its pending Buy 8 → 9? to a confirmed TD9 BUY; 1M still
                    TD8 → 9? pending one more close) — the oversold-counter
                    cluster ROTATED to slower frames, the engine joined the
                    bounce shape (15m above cloud)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-07 00:01Z snapshot (archived)</td>
                  <td className="dn-flag">
                    archived to snapshots/2026-06-07-0008/ · 4 min stale vs
                    anchor (tighter than 06-06&rsquo;s 28-min stale) · Deribit
                    idx $61,098 vs live $60,933 ($165 above live — back inside
                    a normal idx-vs-live tracking band after 06-06&rsquo;s
                    $1,160 outlier gap) · 1,008 instruments (was 1,044 on
                    06-06 — net −36 as the 6JUN chain cleared at 08:00Z 06-06,
                    new 9JUN/10JUN near-dated listed but smaller than the
                    cleared chunk) · 7JUN26 0.3 DTE +3.87M is the next settle
                    (08:00Z 06-07, ~8h ahead); the 7JUN chunk is POSITIVE so
                    the front-contract settle window does NOT carry an
                    amplifier this time — vs the 6JUN −8.40M and the
                    5JUN −9.61M which both did
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-07 00:01Z (archived)
                  </td>
                  <td className="dn-flag">~4 min lag · 7d 1h bars · 22 assets · 166 rows · regime tag still IDIOSYNCRATIC (mean |r| 0.233, eased from 06-06&rsquo;s 0.238 — moved AWAY from the 0.25 NORMAL threshold by 0.005, the firming trend stalled and reversed slightly) · BTC&rsquo;s top tie stays SILVER +0.261 (was +0.254 on 06-06) and the BTC↔NQ tie FIRMED sharply to +0.188 (was +0.129 — a +0.059 firming as the 7d window incorporated BTC&rsquo;s 06-06 −5.41% wick alongside NQ&rsquo;s rolled-over week)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-06 22:15Z render (archived)</td>
                  <td className="dn-flag">
                    ~1h 50m render lag · weekend FRED freeze (06-07 is Sunday
                    UTC) — every Tier-1 row carries the same Friday-close
                    values as the 06-06 note: US 10Y nominal 4.47% (−2bp Δ
                    column carried from Friday), 10Y TIPS 2.11% (flat), 5Y5Y
                    BE 2.24% (flat), HY OAS 2.74% (−1bp carried), NFCI −0.494
                    (stale 8d), MOVE 75.2 (+4.04 carried from Friday — the
                    largest bond-vol jump of the lineage is now a fixed
                    weekend baseline, not a fresh print), DXY 100.07 (+0.66
                    carried), Fed net liq $5.834T (no fresh weekly print),
                    US-JP spread 1.95%, USD/CNY 6.7650 — the macro tape is
                    structurally frozen until Monday US open
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-07 00:05Z (btcusdt_1m_2024..2026 subset per desk policy + full-history references)</td>
                  <td className="dn-flag">
                    parquet last bar 00:05Z exactly matches the snapshot
                    anchor (no anchor-vs-parquet drift this note, vs 06-06&rsquo;s
                    28-min parquet stale) · close at parquet last bar
                    $60,845.70 vs live spot $60,933.28 (a $87.58 gap, the
                    1-min parquet anchor sits inside the 1-min live tape
                    window). MA source universe is the 2024-2026 subset
                    (128 weekly bars now, +1 vs 06-06&rsquo;s 127), per the
                    06-02 audit DN-005 desk-policy carry; under this subset
                    W-SMA150 / W-SMA200 are non-computable (short of both
                    windows); W-EMA150 / W-EMA200 print but are reported as{' '}
                    <em>seeded</em> truncated lines. Full-history (2019-2026,
                    353 weekly bars including the in-progress 2026-06-08
                    weekly bar at $60,845.70 1m close) added for the 200W
                    reference: W-SMA200 = $62,008 (vs 06-06&rsquo;s $61,794 —
                    moved up $214 as the rolling 200-week window dropped one
                    bar at the old end and added the in-progress new week
                    bar). Live spot $60,933 sits −1.73% below the
                    full-history 200W (vs −3.48% on 06-06 — narrowed the gap
                    by +1.75pt as spot held and 200W rose). Offsets
                    recomputed against live spot $60,933.28 per 06-03 audit
                    DN-006 lineage carry
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W watch (weekly_200sma.json)</td>
                  <td className="dn-v-cell">NOT WRITTEN (file absent on server at audit time, lineage carry from 06-05 / 06-06)</td>
                  <td className="dn-flag">
                    200W watch JSON unavailable (third consecutive note);
                    fall back to the full-history parquet computation per
                    runbook §2 do-not-fabricate. W-SMA200 = $62,008 (353
                    weekly bars from 2019-09-09); live spot $60,933 sits
                    −$1,075 / −1.73% below the level on
                    the SPOT print. The cycle floor is weekly-close, not
                    spot — the 06-06 daily close $60,850 sits −$1,158 below,
                    the 06-07 in-progress daily close $60,846 sits −$1,162
                    below. The in-progress weekly bar (06-08 weekly anchor,
                    new week starting now) would need to recover and close
                    at or above $62,008 by week-end to avoid a formal 200W
                    floor break. Per runbook do-not-fabricate no percentile
                    / break-event claim is asserted off a missing JSON, only
                    the full-history level + the in-progress daily-close gap
                    is surfaced
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale 66d · monthly · do not treat as live (staleness count unchanged from 06-06)</td>
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
              <span className="dn-v bear">−3.16% (snap = 24h trough, deepest of today&rsquo;s 24h window — the 06-06 lineage trough −3.92% mid-window remains deeper)</span>
              <span className="dn-src">live · 24h mean ann <em>−0.13%</em> (was −1.36% on 06-06 · eased +1.23pt back toward zero) · cap occupancy 0 / 1441 sampled rows (fourth consecutive cap-empty note · the lineage cap regime stays structurally retired) · negative-funding minutes 1,049 / 1,441 = <em>72.80%</em> (was 82.57% on 06-06 — eased by −9.77pt but still firmly short-pay weighted) · 24h funding trough −3.158% ann at the snap minute 2026-06-07 00:05Z (BJ 08:05 06-07) — the deepest single-minute negative print of today&rsquo;s 24h window (vs the 06-06 lineage deeper trough of −3.92% which printed mid-window — the lineage extreme stays with 06-06; today&rsquo;s trough IS the snap so the path is still steepening into the print) · 24h max +4.460% ann @ 2026-06-06 09:35Z (BJ 17:35 06-06) — today&rsquo;s 24h positive max, printed pre-7JUN settle window as basis backed up</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">−1.27% → −3.16% (−1.89pt, snap is the 24h trough)</span>
              <span className="dn-src">range −3.16% / +4.46% · the longest single short-pay streak ran 463 min / 7.72h from 2026-06-06 20:14Z (BJ 04:14 06-07) → 2026-06-07 03:56Z (BJ 11:56 06-07) — vs the 06-06 streak of 10.55h, today is −2.83h shorter (the regime eased) but the ≥4h cumulative short-pay gate still clears by ~1.9× on a single contiguous run alone · the leverage gate stays open</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+0.53% (+533 BTC)</span>
              <span className="dn-src">live · second consecutive 24h OI EXPANSION (was +2.31% / +2,307 on 06-06; today&rsquo;s +0.53% is much smaller, the bottom-fishing leverage that drove 06-06&rsquo;s build slowed but did not reverse) — 101,298 → 101,830 with 24h peak 103,149 @ 2026-06-06 10:09Z (BJ 18:09 06-06, into the late-Asia / early-EU consolidation) and 24h low 101,027 @ 2026-06-06 12:00Z (BJ 20:00 06-06, ~2h after the peak) · SM long_btc Δ −1,706, short_btc Δ +813 — the 24h book shape REVERSED from 06-06&rsquo;s one-sided long-build to a long-trim + short-add, the inverse signature</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bull">66.43 / 33.57</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · basically flat vs 06-06&rsquo;s 66.37 (+0.06pt, noise) · 24h range 64.53 / 67.22 with peak 67.22 @ BJ 08:06 06-06 (UTC 00:06 06-06, the daily UTC boundary, into the lead-in of the 06-06 wick) and trough 64.53 @ BJ 18:12 06-06 (UTC 10:12 06-06, into the post-wick relief bounce — retail bled hardest INTO the bounce and re-crowded back through the day); still 6pt above the prior down-leg trough of 60.35% on 05-31, the de-crowding read remains a second-derivative cool</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−42.6k (net SHORT; 24h book REVERTED to short-add + long-trim from the 06-06 long-build)</span>
              <span className="dn-src">live · long 13.62k − short 56.17k · short_btc 24h peak 56,606 @ 2026-06-06 05:51Z (BJ 13:51 06-06 — still below the 06-03 lineage high 60,729 and below 06-06&rsquo;s inside-window peak of 59,175); long_btc 24h peak 15,841 @ 2026-06-06 05:51Z (BJ 13:51 06-06 — same minute as the short peak, both sides scaled together briefly) then bled −2,226 into snap; SM net trough −43,475 @ 2026-06-06 06:01Z (BJ 14:01 06-06) — 10 min after the dual-side peak, vs the 06-04 lineage trough of −46,686 (today&rsquo;s trough is shallower by +3,211, the short side has not retested the lineage extreme)</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 06-06 note</span>
              <span className="dn-v bear">−39.4k → −42.6k (−3,130 more short; long −1,825, short +1,312)</span>
              <span className="dn-src">|Δ|/prior_net = 7.94% (3,130/39,426) · the BOOK shifted to MORE short via a long-side TRIM + short-side ADD — the inverse signature of 06-06&rsquo;s one-sided long-build that was −5,036 less-short with long +4,181 / short −855. The 06-06 long-bottom-fish (long_btc 17,254 peak at BJ 04:16 06-06) got faded inside the next 20h, long_btc bled −3,639 from peak to snap. The lineage signature has FLIPPED AGAIN — 06-01/02/03/04 short-stacks, 05-31/06-05 two-sided shrinks, 06-06 long-bottom-fish, today short-stack-reversion. The book is searching for a footing, not committing</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v bear">53.5% / 37.03%</span>
              <span className="dn-src">GEX median IV · 1,008 inst. (down from 1,044 on 06-06 · net −36 as the 6JUN chain cleared at 08:00Z 06-06 and the 9JUN / 10JUN near-dated chains listed but smaller than the cleared chunk) · IV firmed +1.0pt as the chain held its 06-06 vol mark through the weekend (was 52.5% on 06-06) · 30D RV basically flat at 37.03% (was 37.05%, −0.02pt — the rolling 30D window is now stamped with all the 06-02 / 06-05 / 06-06 deep-ret prints; rolling further is not adding fresh vol) · IV/RV spread WIDENED to ~+16.47pt (was +15.45pt on 06-06 → today +1.02pt expansion as IV crept and RV stalled, the chain is repricing forward realized even higher into the front-amplifier-cleared weekend</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−4.10% (below; live spot ref)</span>
              <span className="dn-src">flip $63,538 (was $63,778 on 06-06 · dropped −$240 — the smallest single-note flip drop of the down-leg lineage, vs 06-06&rsquo;s −$2,731) · vs live spot $60,933 (−4.10%; 60,933.28 / 63,538 − 1 = −4.099%) · vs GEX file Deribit idx $61,098 (−3.84%; 61,098 / 63,538 − 1 = −3.840%, matches the file&rsquo;s own dist-to-flip tile of −3.8%) — both refs negative, the live-spot gap NARROWED to −4.10% from 06-06&rsquo;s lineage extreme of −6.48% (+2.38pt closing of the gap as the flip held and spot rebuilt). Aggregate GEX improved to −38.7M (was −53.5M on 06-06, a +$14.8M structural improvement as the 6JUN −8.40M chunk settled clean and the 7JUN front chunk landed POSITIVE at +3.87M — the cleanest front decay of the lineage)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The 6JUN front amplifier settled CLEAN and the 7JUN chunk
                landed POSITIVE (+3.87M) — the dealer book got the clean
                front decay the 06-05 note had forecast and 06-06 missed,
                spot did NOT extend the wick (24h −0.64% vs 06-06&rsquo;s
                −5.41%, 24h low $59,558 above 06-06&rsquo;s lineage low
                $59,154), but the SM book reverted to short-stacking
                inside the 24h and the 200W cycle floor on spot has only
                narrowed, not been reclaimed
              </span>. Aggregate GEX went{' '}
              <span className="dn-tag bear">−53.5M</span> →{' '}
              <span className="dn-tag bear">−38.7M</span> (a +$14.8M
              structural improvement, the largest single-note gamma
              repair of the lineage — but still firmly net-short-gamma,
              the book did not flip sign). The 0-γ flip moved{' '}
              <span className="dn-tag">$63,778 → $63,538 (−$240)</span>{' '}
              (the smallest single-note flip drop of the down-leg
              lineage), and spot{' '}
              <span className="dn-tag bear">$60,933 sits −4.10% below
              the flip</span> on live-spot math, NARROWED from 06-06&rsquo;s
              lineage extreme of −6.48% by +2.38pt; the GEX file&rsquo;s
              own Deribit-index reference reads{' '}
              <span className="dn-tag bear">−3.84%</span> off its
              $61,098 index, matching the file&rsquo;s own dist-to-flip
              tile of −3.8%. The 06-06 forecast was that the 6JUN
              08:00Z settle would resolve the new front amplifier (ex-6JUN
              residual ~−45.1M) but that a vol-event during the settle
              window remained a tail; what actually happened is the 6JUN
              −8.40M chunk DID settle clean at 08:00Z 06-06 (cleared
              from the strip) AND the new 7JUN front chunk landed{' '}
              <span className="dn-tag bull">+3.87M POSITIVE</span> at the
              0.3 DTE listing, with the 12JUN holding at −8.91M (was
              −8.82M — basically flat), the 19JUN easing slightly to
              −6.26M (was −6.49M), the 26JUN monthly holding at −24.94M
              (was −25.23M), and the $60k crash-put wall easing to{' '}
              <span className="dn-tag bear">−26.19M (was −27.31M, −$1.12M
              lighter as spot held near the strike rather than extending
              through)</span>. Daily closes ran{' '}
              <span className="dn-tag bear">06-05 $61,022 / 06-06
              $60,850</span> (the 06-06 daily close came in $359 ABOVE
              the 06-06 note&rsquo;s parquet-last-bar reading of $60,490
              — the day RECOVERED after the 04:06Z anchor, the −5.41%
              wick did not stick through the close), and the 06-07
              in-progress close at parquet last bar (00:05Z close{' '}
              <span className="dn-tag">$60,846</span>) is{' '}
              <span className="dn-tag">effectively flat</span> vs 06-06
              (−$4 close-to-close, the second daily close stabilization
              of the post-wick state). The 200W cycle floor watch from
              06-06 evolved: the full-history W-SMA200 moved to{' '}
              <span className="dn-tag">$62,008</span> (was $61,794 — up
              $214 as the rolling window dropped a low-end week and the
              in-progress 06-08 weekly bar added the post-wick close);
              live spot $60,933 sits −1.73% below (vs −3.48% on 06-06 —
              the gap narrowed +1.75pt) but the 06-06 daily close
              $60,850 still sits −$1,158 below and the 06-07 in-progress
              close $60,846 sits −$1,162 below. The weekly bar that
              opened today would need to recover and close at or above
              $62,008 by week-end to avoid stamping the first formal
              weekly close below the full-history 200W of the current
              cycle.
            </p>

            <p>
              BTC prints <span className="dn-tag">$60,933</span> live,{' '}
              <span className="dn-tag bear">−0.64%</span> on 24h — the
              smallest 24h spot change of the down-leg lineage since
              06-04&rsquo;s −0.41% close, and the first quiet 24h after
              the 06-06 −5.41% wick. The 24h range was{' '}
              <span className="dn-tag">$61,500 / $59,558</span> (high @
              BJ 08:17 06-06 / UTC 00:17 06-06, low @ BJ 12:35 06-06 /
              UTC 04:35 06-06 — the low printed mid-window in
              late-Asia / pre-EU hours of 06-06, then the tape
              rebuilt steadily into the 06-07 anchor). The 24h low{' '}
              <span className="dn-tag bear">$59,557.64</span> is{' '}
              <span className="dn-em">ABOVE</span> the lineage low
              $59,153.51 from 06-06 by +$404 — the down-leg low did
              not get tested fresh, the post-wick floor held its first
              session. Spot also NARROWED its full-history 200W gap:{' '}
              <span className="dn-signal">
                full-history W-SMA200 is $62,008; live spot $60,933 sits
                −1.73% below (was −3.48% on 06-06), the 06-06 daily
                close $60,850 was −$1,158 below, the in-progress 06-07
                close $60,846 is −$1,162 below — the gap narrowed but
                the level was not reclaimed on either daily close; the
                weekend weekly close determines whether the cycle&rsquo;s
                first formal weekly close below the 200W stamps in
              </span>. The cycle anchor itself is{' '}
              <span className="dn-tag bear">D-SMA100 $72,978 (−16.51%)</span> overhead
              — ~$12.0k away (was ~$13.4k on 06-06, $1.4k closer because
              the rolling 100D anchor bled lower as the down-leg
              prints rolled into the window). The closest overhead MA is
              now <span className="dn-tag bear">D-EMA20 $69,751
              (−12.64%)</span>, ~$8.8k overhead — the rolling 20D EMA
              picked up the deep 06-04 / 06-05 / 06-06 prints fastest.
              The W-SMA20 cluster ($73,230 / D-SMA100 $72,978 / D-EMA50
              $73,173) packs into a $250 band but the cluster itself is
              ~$12.0k–$12.3k overhead.{' '}
              <span className="dn-em">
                The structural backdrop REPAIRED on the dealer side
                (gamma +$14.8M, flip −$240, $60k wall eased −$1.12M, 7JUN
                front chunk POSITIVE), HELD on the price plane (24h close
                flat, lineage low not tested), but RE-DETERIORATED on the
                position side (SM net −3,130 more short, long_btc
                trimmed −1,825, short_btc added +1,312 — the inverse of
                06-06&rsquo;s long-build). The 06-06 long-bottom-fish
                (long_btc 17,254 peak at BJ 04:16 06-06) bled −3,639 into
                snap. The book is not committing — the dealer side is
                better, the position side is worse, and the price plane
                is waiting.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · 24h book REVERTED to short-add + long-trim (the inverse of 06-06&rsquo;s one-sided long-build) · OI expansion slowed to +0.53% (was +2.31%) · funding mean eased toward zero at −0.13% but the snap minute is the 24h trough at −3.16% (deepest of today&rsquo;s 24h window; 06-06&rsquo;s −3.92% mid-window remains the lineage deeper print) · cycle continuation cadence CLOSED-VINDICATED (no fresh print to consider)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position book gave back yesterday&rsquo;s one-sided
                long-build — long_btc trimmed and short_btc added across
                the 24h, the inverse signature of 06-06
              </span>. SM net is{' '}
              <span className="dn-tag">−42,556</span> vs the 06-06
              note&rsquo;s −39,426 — that is{' '}
              <span className="dn-em">+7.94% more short</span>{' '}
              (|−42,556 − (−39,426)| / 39,426 = 7.94%). The components
              moved one-sided in the inverse direction from 06-06:
              long_btc{' '}
              <span className="dn-tag bear">15.44k → 13.62k
              (−1.82k)</span>{' '}
              and short_btc{' '}
              <span className="dn-tag bear">54.86k → 56.17k
              (+1.31k)</span>. The long side cut about 1.4× more than
              the short side added, a clean long-trim + short-add shape
              — the inverse of 06-06&rsquo;s long-build + short-trim
              that was +4.18k long and −0.86k short. Across the 24h
              window (from t == &ldquo;06-06 08:04&rdquo; BJ-local /
              UTC 00:04 06-06): long_btc Δ{' '}
              <span className="dn-tag bear">−1,706</span>, short_btc Δ{' '}
              <span className="dn-tag bear">+813</span>, net Δ{' '}
              <span className="dn-tag bear">−2,520</span> (−1,706 − 813
              = −2,519 with rounding). Inside the 24h the book ran a
              dual peak then a long-bleed: short_btc 24h peak{' '}
              <span className="dn-tag bear">56,606 @ 2026-06-06 05:51Z
              (BJ 13:51 06-06)</span> — still below the 06-03 lineage
              high 60,729 and below the inside-window peak from 06-06
              (59,175 @ BJ 14:31 06-05), so the short side has NOT
              retested its lineage extreme this 24h; long_btc 24h peak{' '}
              <span className="dn-tag bear">15,841 @ 2026-06-06 05:51Z
              (BJ 13:51 06-06)</span> — same minute as the short peak,
              both sides briefly scaled together. SM net trough{' '}
              <span className="dn-tag bear">−43,475 @ 2026-06-06 06:01Z
              (BJ 14:01 06-06)</span> — 10 min after the dual-side peak,
              vs the 06-04 lineage trough of −46,686 (today&rsquo;s
              trough is shallower by +3,211, the short side has not
              retested the lineage extreme).{' '}
              <span className="dn-em">
                The lineage signature has FLIPPED AGAIN: 06-01/02/03/04
                one-sided short-stacks, 05-31/06-05 two-sided shrinks,
                06-06 one-sided long-bottom-fish, today
                long-trim + short-add reversion. The book is searching
                for a footing, not committing to a side. The 06-06
                long-bottom-fish peaked early (BJ 04:16 06-06,
                long_btc 17,254) and bled −3,639 BTC into snap; the
                long side that added into the wick got punished and
                trimmed back across the next 20h.
              </span>
            </p>

            <p>
              <span className="dn-signal">
                The cycle continuation framework has nothing fresh to
                test on this calendar — the framework was formally
                retired on the 06-06 sixth-print failure
              </span>. The 06-05 / 06-06 BJ 15:41 fallback pin failed on
              06-06 (small cover +315 Δnet, max |Δnet| 333 in the BJ
              15:00–16:00 window); today there is no candidate calendar
              minute to evaluate because the calendar prior is dead.
              The framework continues as a no-calendar watchlist for
              fresh re-stack hostile-2 signatures (Δshort &gt; 0 +
              Δlong &lt; 0 same minute with |Δnet| ≥ 3k), but on
              today&rsquo;s 24h tape no single-minute Δnet print
              cleared the ≥ 3k bar.{' '}
              <span className="dn-em">
                The closest move was the BJ 13:51 06-06 dual peak
                (long +short both up that minute, then SM net trough
                10 min later at BJ 14:01 06-06 −43,475) — a re-stack
                shape on a wider 10-minute window but not a single-minute
                hostile-2 signature. The cycle continuation framework
                stays CLOSED-VINDICATED.
              </span>
            </p>

            <p>
              The leverage side is the loudest second-derivative read
              this note.{' '}
              <span className="dn-signal">
                Funding mean eased back toward zero at −0.13% on the
                24h (vs 06-06&rsquo;s −1.36%) — but the snap minute IS
                the 24h trough at −3.16% ann (deepest of today&rsquo;s
                24h window; the 06-06 lineage trough of −3.92% mid-window
                remains the deeper print)
              </span>: live{' '}
              <span className="dn-tag">−3.16% ann</span> at the snap (vs
              06-06&rsquo;s snap-minute −0.32% — today&rsquo;s snap
              minute is the trough of the 24h window, the path is still
              steepening at the print), 24h range{' '}
              <span className="dn-tag">−3.16% / +4.46%</span> with the
              trough{' '}
              <span className="dn-tag bull">−3.158% ann at the snap
              minute 2026-06-07 00:05Z (BJ 08:05 06-07)</span> — the
              deepest single-minute neg of today&rsquo;s 24h window
              (vs 06-06&rsquo;s lineage deeper trough of −3.92% which
              printed mid-window at BJ 18:40 06-05 and reset — that
              06-06 lineage reading remains deeper than today&rsquo;s
              snap). 24h mean ann{' '}
              <span className="dn-tag">−0.13%</span> (vs 06-06&rsquo;s
              −1.36% — a +1.23pt easing back toward zero, the first
              easing of the mean in the down-leg). 24h max ann{' '}
              <span className="dn-tag">+4.46% @ 2026-06-06 09:35Z (BJ
              17:35 06-06)</span> — today&rsquo;s 24h positive max,
              printed pre-7JUN settle window as basis backed up briefly.
              Cap occupancy{' '}
              <span className="dn-tag bull">0 / 1441 sampled rows
              (0.0%)</span> (fourth consecutive cap-empty note; the
              lineage cap regime stays retired); the longest single
              short-pay streak ran{' '}
              <span className="dn-tag bull">463 min / 7.72h</span> from
              2026-06-06 20:14Z (BJ 04:14 06-07) → 2026-06-07 03:56Z (BJ
              11:56 06-07) — vs the 06-06 streak of 10.55h, today is
              −2.83h shorter, but the ≥4h cumulative short-pay gate
              still clears by ~1.9× on a single contiguous run alone.
              Minute deltas (positive vs negative funding readings)
              break <span className="dn-tag">392 pos / 1,049 neg</span>{' '}
              (across the 1,441-row window — 72.80% negative, eased
              from 06-06&rsquo;s 82.57%). OI Δ{' '}
              <span className="dn-tag bear">+533 BTC (+0.53%)</span>{' '}
              over 24h — second consecutive 24h OI EXPANSION but much
              smaller than 06-06&rsquo;s +2,307 BTC. OI built modestly
              into the consolidation: 24h peak{' '}
              <span className="dn-tag bear">103,149 @ 2026-06-06 10:09Z
              (BJ 18:09 06-06)</span> — well after the 06-06 lineage low
              wick at $59,154 BJ 03:18 06-06, the OI add this cycle
              concentrated in the LATE-Asia / early-EU consolidation
              hours, not into a fresh wick. 24h low OI{' '}
              <span className="dn-tag bull">101,027 @ 2026-06-06 12:00Z
              (BJ 20:00 06-06)</span> printed ~2h after the peak,
              followed by a steady re-add into the 24h close.
              Retail <span className="dn-tag">mkt_long_pct 66.43%</span>{' '}
              from 66.90% — bled −0.47pt vs 24h-ago and basically flat
              vs 06-06 note (66.37% → 66.43%, +0.06pt of noise); still
              6pt above the prior down-leg trough of 60.35% on 05-31;
              the de-crowding remains a second-derivative cool. Perp
              trades a{' '}
              <span className="dn-tag bear">−$36.08 discount</span> to
              spot at the snap (1h mean −$34.10, 4h mean −$32.69;
              24h mean −$32.89, range −$197.70 / +$132.38 — basis went
              briefly POSITIVE during the late-Asia 06-06 relief bid
              and again into the 06-07 anchor lead-in, then snapped
              back negative; the 24h max +$132.38 is the deepest
              POSITIVE-basis print of the down-leg lineage by a wide
              margin). 1-min aggressor skew snap{' '}
              <span className="dn-tag bull">+6.8</span> (1h mean +0.57,
              range −44.50 / +29.30) — a mild buy-aggressor in the snap
              minute but the 1h is essentially balanced.{' '}
              <span className="dn-em">
                Funding mean eased back toward zero + cap still retired
                + neg-minute share eased −9.77pt + longest streak
                shorter by −2.83h + basis went briefly positive on
                two separate intra-24h spans + OI expansion slowed
                +0.53% vs 06-06&rsquo;s +2.31%: the leverage book is
                stabilizing on a second-derivative basis, but the snap
                minute being the 24h trough and the SM book reverting
                to short-add are not stabilization signs. The leverage
                side as a whole is mixed-leaning-better, not
                committed-better.
              </span>
            </p>

            <p>
              Windowed flow shows{' '}
              <em>a clear two-stage shape: 24h still net-seller across
              every field, but the 4h and 1h both flip to net-buyer on
              every field tracked — a clean qualifying cover-shape print
              at the 00:05Z anchor on the engine timeframes (a prefix-sum
              scan of the rolling tape shows earlier qualifying 4h
              windows back through 05-31, so today is not a lineage-first
              claim — only a defensibly clean print at this anchor)</em>. 24h:
              price <span className="dn-tag bear">−0.64%</span>, OI{' '}
              <span className="dn-tag bear">+533 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −1,533</span>{' '}
              (no reset adjustment needed — no cb_cvd reset detected
              in the 24h window), futures CVD{' '}
              <span className="dn-tag bear">Δ −275</span>, big-print{' '}
              <span className="dn-tag bear">−315 BTC / 261 prints</span>,
              taker-net{' '}
              <span className="dn-tag bear">−275</span> —{' '}
              <em>spot AND futures net-sold across the 24h with OI
              building modestly; the −0.64% printed on net selling INTO
              a long-trim + short-add — the inverse of 06-06&rsquo;s
              long-build-into-selling shape, but still net-sold across
              the full window</em>. 4h (into snapshot): price{' '}
              <span className="dn-tag bull">+0.60%</span>, OI{' '}
              <span className="dn-tag bull">+65 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +382</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +306</span>, big-print{' '}
              <span className="dn-tag bull">+397 BTC / 44 prints</span>,
              taker-net{' '}
              <span className="dn-tag bull">+306</span> —{' '}
              <span className="dn-em">
                the 4h window FLIPPED to net-buyer across every field
                tracked: spot CVD bid, fut CVD bid, big-print net-buyer
                +397 over 44 prints, taker-net bid, OI modestly
                expanding. This is a clean qualifying 4h cover-shape
                print at the 00:05Z anchor with every windowed flow
                field net-buyer and OI still expanding — a defensibly
                clean cover-shape window on the engine timeframes at
                this anchor (a prefix-sum scan back through 05-31 finds
                earlier qualifying 4h windows; today is not a
                lineage-first)
              </span>. 1h: price{' '}
              <span className="dn-tag bull">+0.41%</span>, OI{' '}
              <span className="dn-tag bull">+275 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −125</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +2</span>, big-print{' '}
              <span className="dn-tag bull">+136 BTC / 11 prints</span>,
              taker-net <span className="dn-tag bull">+2</span> —{' '}
              <em>the 1h continued the 4h shape on big-print and OI
              (big-print net-buyer +136 over 11 prints, OI built +275
              BTC, taker-net flat positive), but spot CVD slipped −125
              in the snap-minute hour, a mild step-back into the
              anchor</em>. The 4h cover-shape is the clearest
              second-derivative signal in this snapshot: spot AND
              futures bought together on big-print confirmation with
              OI expanding modestly — the inverse of 06-06&rsquo;s 24h
              shape that net-sold across every field. The 1h slip on
              spot CVD is one minute of a one-hour window against a
              4h that read clean — but it does say the snap-minute
              bid was not perfectly extending.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · ⚡ TD9 BUY cluster ROTATED to slower frames — three concurrent at 12h / 1d / 3d (was four at 15m / 8h / 12h / 1d on 06-06; 3d converted from pending, 15m/8h dropped off) · cycle-frame RSI eased off lineage extremes but stays single-digit-shy on three frames (8h 16.3, 12h 16.4, 1d 15.5) · cycle anchor lost (now ~$12.0k overhead) · 200W cycle floor gap narrowed to −1.73% on spot</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map ROTATED but did not flip — the ⚡ TD9 BUY
                cluster shifted from four frames (15m / 8h / 12h / 1d)
                to three frames (12h / 1d / 3d), with 3d converting
                its pending Buy 8 → 9? to a confirmed TD9 BUY and 15m /
                8h dropping off the TD9 list as their counts reset
              </span>. The 06-07 00:01Z scan flags ⚡ TD9 BUY on 12h /
              1d / 3d simultaneously (three cycle-to-multi-cycle
              frames), and 1M still TD8 → 9? pending on one more close
              — a four-frame oversold-counter cluster including the
              pending, one fewer than 06-06&rsquo;s five-frame stack
              (which had 15m + 8h + 12h + 1d active and 3d + 1M
              pending). The 15m flipped to{' '}
              <span className="dn-tag bear">Sell 5</span> as the
              engine joined the post-wick bounce shape; the 8h reset
              to <span className="dn-tag bull">Buy 1</span> (the
              previous TD9 BUY count terminated and a fresh BUY count
              re-started). Slow frames remain bearish on cross/cloud:
              the <span className="dn-tag bear">3d water-up death
              cross is at 4 bars</span> (was 3b on 06-06), 12h{' '}
              <span className="dn-tag bear">no fresh MACD cross flagged
              this scan</span> (was death-cross 19b on 06-06), 8h{' '}
              <span className="dn-tag bear">water-down death cross 17b</span>
              {' '}(was 14b on 06-06 — same trend, 3 bars more elapsed),
              4h <span className="dn-tag bull">water-down golden
              cross 5b just printed</span> (was death cross 29b on
              06-06 — a fresh 4h golden cross is the second
              second-derivative signal of the snap, alongside the 4h
              cover-shape flow), 1d{' '}
              <span className="dn-tag bear">below cloud 6b ↑ $73.9k</span>{' '}
              (unchanged from 06-06). RSI eased off lineage extremes
              across the cycle frames but stays deeply oversold: 8h{' '}
              <span className="dn-tag bull">16.3</span> (was 14.3 on
              06-06 — +2.0pt off the lineage extreme), 1d{' '}
              <span className="dn-tag bull">15.5</span> (was 14.6 —
              +0.9pt off the extreme), 12h{' '}
              <span className="dn-tag bull">16.4</span> (was 14.9 —
              +1.5pt), 4h <span className="dn-tag bull">29.9</span>{' '}
              (was 23.8 — +6.1pt off, biggest cycle-frame RSI move
              of the snap), 3d{' '}
              <span className="dn-tag bull">29.6</span> (was 28.8 —
              +0.8pt off, still under 30 for the second consecutive
              note), 1w 32.7 (was 32.2). Every cycle frame stays RSI
              &lt; 35 and three are still under 17 — but the easing
              direction is now consistent across the stack. The engine
              joined the bounce shape: 1h RSI 48.7 (was 37.0 — +11.7pt
              up, the largest engine-frame RSI lift of the lineage),
              30m 53.7 (was 35.3 — +18.4pt, even larger), 15m 56.8
              (was 28.5 — +28.3pt, the engine has rebuilt to neutral).
              The 15m flipped above its cloud{' '}
              <span className="dn-tag bull">above cloud 4b</span>{' '}
              (was below cloud on 06-06).{' '}
              <span className="dn-em">
                Read straight: the ⚡ TD9 BUY cluster rotated slower,
                the 4h golden cross just printed, the engine frames
                rebuilt to neutral RSI / 15m back above cloud, and
                cycle frames eased off the lineage RSI extremes by
                roughly 1–6 points. The setup carries an engine-side
                second-derivative bounce signal alongside the four-frame
                oversold-counter cluster on the slow side — but the
                cycle anchor remains ~$12.0k overhead, the 200W cycle
                floor still sits above spot, and a TD9-anchored entry
                without the third cover-bounce leg (a 1h reclaim above
                the new $63,538 flip) remains a chase. The
                mean-revert long scout from 06-03 stays gated by leg 3
                on the reframed inflection.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">60,839</td><td className="num bull">56.8</td><td className="bull">golden (water-dn) 3b</td><td className="bull">above ↓60.7k 4b</td><td>Sell 5</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">60,852</td><td className="num bull">53.7</td><td className="bull">golden (water-dn) 2b</td><td className="neut">in cloud 60.8k–61.1k 1b</td><td>Sell 2</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">60,852</td><td className="num">48.7</td><td className="bull">golden (water-dn) 27b</td><td className="bear">below ↑61.0k 139b</td><td>Sell 2</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">60,852</td><td className="num bull">29.9</td><td className="bull">golden (water-dn) 5b just printed</td><td className="bear">below ↑70.0k 73b</td><td>Sell 1</td><td>BULL reg</td></tr>
                <tr><td>8h</td><td className="num">60,839</td><td className="num bull">16.3</td><td className="bear">death (water-dn) 17b</td><td className="bear">below ↑74.9k 66b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">60,852</td><td className="num bull">16.4</td><td className="neut">—</td><td className="bear">below ↑77.1k 31b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">60,852</td><td className="num bull">15.5</td><td className="neut">—</td><td className="bear">below ↑73.9k 6b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">60,839</td><td className="num bull">29.6</td><td className="neut">death (water-up) 4b</td><td className="bear">below ↑74.2k 2b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">60,852</td><td className="num">32.7</td><td className="bull">golden (water-dn) 7b</td><td className="bear">below ↑100.3k 18b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">60,852</td><td className="num">41.6</td><td className="neut">—</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 2026-06-07 00:01Z scan
                    (rolling latest-file artifact archived to
                    snapshots/2026-06-07-0008/mtf_div_latest.html before
                    read per runbook §1 archive policy). Scan is 4 min
                    stale vs the 00:05Z snapshot anchor. Header alerts:{' '}
                    <em>multi-TF ⚡ TD9 BUY across 12h / 1d / 3d
                    simultaneous</em>,{' '}
                    <em>1M TD8 → 9? one close pending</em>,{' '}
                    <em>30m water-down golden cross 2b just printed</em>,{' '}
                    <em>4h water-down golden cross 5b just printed</em>.
                    Scan spot $60,852, 24h −0.51%, H/L $61,500 / $59,451,
                    24h qVol $10.58B (down from 06-06&rsquo;s $28.56B —
                    the capitulation flow burned off, today is a quiet
                    consolidation tape by qVol). Closes are in-progress
                    bars; treat every value as provisional until each TF
                    closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms cycle-anchor digestion below the
              ladder with the cluster pack ~$12k overhead. Spot $60,933
              sits{' '}
              <span className="dn-tag bear">−16.51% below D-SMA100
              $72,978</span> — the cycle anchor, the lowest-distance
              line of the daily ladder, ~$12.0k away on the reclaim
              (was ~$13.4k on 06-06, $1.4k closer because the rolling
              100D anchor bled lower as the deep 06-04 / 06-05 / 06-06
              prints rolled into the window). The closest overhead MA
              is now D-EMA20{' '}
              <span className="dn-tag bear">$69,751 (−12.64%)</span> —
              the rolling 20D EMA picked up the down-leg prints
              fastest (was $70,655 on 06-06, $904 closer today). The
              W-SMA20 / D-SMA100 / D-EMA50 cluster packs into a $250
              band but the cluster itself is ~$12.0k–$12.3k overhead:
              W-SMA20{' '}
              <span className="dn-tag bear">$73,230 (−16.79%)</span>,
              D-SMA100 <span className="dn-tag bear">$72,978
              (−16.51%)</span>, D-EMA50{' '}
              <span className="dn-tag bear">$73,173 (−16.73%)</span>.
              The rest in level order: D-SMA20{' '}
              <span className="dn-tag bear">$71,605 (−14.90%)</span>,{' '}
              D-EMA100{' '}
              <span className="dn-tag bear">$74,896 (−18.64%)</span>,{' '}
              D-SMA150{' '}
              <span className="dn-tag bear">$74,887 (−18.63%)</span>,{' '}
              D-SMA50{' '}
              <span className="dn-tag bear">$75,761 (−19.57%)</span>,{' '}
              W-EMA20{' '}
              <span className="dn-tag bear">$76,399 (−20.24%)</span>,{' '}
              D-EMA150{' '}
              <span className="dn-tag bear">$77,369 (−21.24%)</span>,{' '}
              D-SMA200{' '}
              <span className="dn-tag bear">$78,461 (−22.34%)</span>,{' '}
              D-EMA200{' '}
              <span className="dn-tag bear">$79,889 (−23.73%)</span>.
              Far above and disused on the 2024-2026 subset: W-EMA100
              seed $83,034 (−26.62%), W-EMA50 seed $84,123 (−27.57%),
              W-SMA100 $88,523 (−31.17%), W-SMA50 $92,644 (−34.23%);
              W-EMA200 seed reads $73,848 (−17.49%) and W-EMA150 seed
              reads $78,262 (−22.14%) but both are truncated EMA seeds
              on the 128-week subset and surfaced only for completeness.{' '}
              <span className="dn-signal">
                The 200W watch JSON is still absent on the server (third
                consecutive note); the runbook §2 fallback to a
                full-history parquet computation puts full-history
                W-SMA200 at $62,008 (353 weekly bars from 2019-09-09,
                including the in-progress 2026-06-08 weekly bar at
                $60,845.70 1m close). Live spot $60,933 sits −1.73%
                BELOW the cycle floor on the SPOT print
              </span>. The 06-06 daily close $60,850 was −$1,158 below
              and the in-progress 06-07 close $60,846 (parquet last
              bar 00:05Z) is −$1,162 below. The cycle floor is
              weekly-close, not spot — but the in-progress weekly bar
              that opened today would need to recover and close at
              or above $62,008 by week-end to avoid stamping a formal
              200W floor break. On the full-history parquet series
              (W-MON, closed=&lsquo;right&rsquo;, 154 valid 200W
              observations, 9 weekly closes below the 200W) a weekly
              close below the 200W has occurred in ~5.8% of weeks
              (9 / 154), clustered at deep cycle capitulations; per
              runbook do-not-fabricate, no
              percentile / break-event claim is asserted off a
              missing JSON, only the level + the in-progress
              daily-close gap is surfaced. The W-SMA200 moved up
              $214 vs the 06-06 note&rsquo;s $61,794 because the
              rolling 200-week window dropped one low-end week and
              added the in-progress 06-08 weekly bar; the lineage
              W-SMA200 carry direction (per 200W-watch policy)
              reads ~$200/week, today&rsquo;s +$214 is well inside
              that.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-07 00:05Z
                (close $60,845.70); offsets computed against live spot
                $60,933.28 directly (per 06-03 audit DN-006 disposition:
                live-pin denominator carries forward; the
                parquet-adjacent close $60,845.70 is $87.58 below the
                live pin, so the parquet-vs-live gap is tight this note
                — the parquet last bar EXACTLY matches the snapshot
                anchor minute, no anchor-vs-parquet drift). Daily closes:
                05-31 $73,653, 06-01 $71,392, 06-02 $66,730, 06-03
                $64,118, 06-04 $63,853, 06-05 $61,022, 06-06 $60,850
                (closed +$359 above the 06-06 note&rsquo;s parquet
                reading of $60,490 — the day RECOVERED into the UTC
                close), 06-07 in-progress $60,846 — seven consecutive
                closes below the cycle anchor and the 06-06 close
                stabilized vs 06-05 (−$172, the second-smallest
                close-to-close move of the down-leg lineage after
                06-04&rsquo;s −$265).
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book IMPROVED to net-short-gamma aggregate −38.7M (was −53.5M on 06-06, +$14.8M structural improvement — largest single-note gamma repair of the down-leg lineage; still net-short-gamma, no sign flip) · flip dropped only −$240 to $63,538 (was −$2,731 on 06-06 — smallest single-note flip drop of the down-leg) · 7JUN26 0.3 DTE +3.87M POSITIVE (was 6JUN −8.40M; first positive front chunk of the down-leg lineage) · $60k crash-put wall eased to −26.19M (was −27.31M, −$1.12M as spot held near strike rather than extending through) · 12JUN / 19JUN / 26JUN forward chunks all held or eased marginally</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book got the clean front decay the 06-05
                note had forecast and 06-06 missed: the 6JUN −8.40M
                chunk settled clean at 08:00Z 06-06, the 7JUN 0.3 DTE
                chunk listed POSITIVE at +3.87M (the first positive
                front chunk of the down-leg lineage), and aggregate
                gamma improved +$14.8M — but the book is still firmly
                net-short-gamma and the flip held within $240 of
                06-06
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bear">−38.7M / 1%</span> (was
              −53.5M on 06-06 — a +$14.8M structural improvement, the
              largest single-note gamma repair of the down-leg lineage,
              but the book stays net-short-gamma; no sign flip). The
              0-γ flip moved{' '}
              <span className="dn-tag">$63,778 → $63,538 (−$240)</span>{' '}
              — the smallest single-note flip drop of the down-leg
              (vs 06-06&rsquo;s −$2,731). Two dist-to-flip references
              (carried per 06-02 audit DN-007): live-spot reference{' '}
              <span className="dn-tag bear">−4.10%</span>{' '}
              (60,933.28 / 63,538 − 1 = −4.099%); GEX-file
              Deribit-index reference{' '}
              <span className="dn-tag bear">−3.84%</span> (61,098 /
              63,538 − 1 = −3.840%, matches the file&rsquo;s own
              dist-to-flip tile of −3.8%). The live-spot ref is −0.26pt
              wider than the Deribit-idx ref this note because the
              Deribit idx is only $165 above live spot — back inside a
              normal idx-vs-live tracking band after 06-06&rsquo;s
              $1,160 outlier gap. Both refs negative; the live-spot
              ref NARROWED to −4.10% from 06-06&rsquo;s lineage extreme
              of −6.48% (+2.38pt closing of the gap as the flip held
              and spot rebuilt).
            </p>

            <p>
              The wall map eased on the down-strikes that spot held
              near and saw a fresh small positive print right above
              spot:{' '}
              <span className="dn-tag bear">$60k −26.19M</span> (was
              −27.31M on 06-06, −$1.12M lighter — spot held NEAR the
              $60k strike rather than wicking THROUGH it like 06-06, so
              the wall eased modestly; spot $60,933 is now $933 ABOVE
              the strike, the wall has flipped role back to a
              support-magnet under spot for the first time in two
              notes),{' '}
              <span className="dn-tag bear">$55k −10.69M</span> (was
              −10.74M — basically flat),{' '}
              <span className="dn-tag bull">$80k +8.97M</span>{' '}
              (heaviest positive overhead, +$0.47M firmer vs 06-06&rsquo;s
              +8.50M — modestly thicker upside dampening pole),{' '}
              <span className="dn-tag bear">$50k −6.80M</span> (was
              −6.91M — basically flat),{' '}
              <span className="dn-tag bear">$58k −6.47M</span> (was
              −6.89M — eased modestly),{' '}
              <span className="dn-tag bear">$62k −5.84M</span> (was
              −7.21M — eased, the strike has had time to bleed off
              now that spot is two notes below),{' '}
              <span className="dn-tag bull">$61.5k +3.87M</span>{' '}
              (NEW small positive wall right above spot, the first
              positive wall in the $58k–$64k band since the down-leg
              broke),{' '}
              <span className="dn-tag bear">$65k −3.84M</span> (was
              −3.88M — basically flat),{' '}
              <span className="dn-tag bear">$64k −3.42M</span> (was
              −3.41M — basically flat),{' '}
              <span className="dn-tag bull">$82k +3.30M</span>. The
              negative cluster $50k–$65k now stacks (in the listed
              top-10) to roughly{' '}
              <span className="dn-em">−63.25M of dealer amplification</span>{' '}
              (sum of the listed walls in the band: −6.80 − 10.69 −
              6.47 − 26.19 − 5.84 − 3.42 − 3.84 = −63.25M; the $59k
              and $61k walls that appeared in the 06-06 top-10 are
              no longer in today&rsquo;s top-10 strip, so they fell
              out of this cluster sum; vs 06-06&rsquo;s comparable
              listed cluster of −74.81M — the corridor eased ~$11.6M
              lighter on the top-10 basis, the dealer-side downside
              pressure relaxed materially). The load-bearing read
              this note is{' '}
              <span className="dn-signal">
                the 7JUN 0.3 DTE +3.87M POSITIVE front chunk — the
                first positive front chunk of the down-leg lineage,
                replacing the 6JUN −8.40M and 5JUN −9.61M front
                amplifier shape with a small but cleanly-positive print.
                The dealer book finally let the front amplifier decay
                clean. Combined with the $60k wall easing −$1.12M and
                the fresh +$3.87M $61.5k wall, the strikes immediately
                above and below spot have shifted from one-sided
                amplification toward a more two-sided dampening shape,
                even as the 26JUN −24.94M monthly stays the load-bearing
                forward chunk
              </span>. Forward expiries: 8JUN 1.3 −2.29M (small negative,
              tomorrow&rsquo;s settle), 9JUN 2.3 +0.35M, 10JUN 3.3
              +0.42M, 12JUN 5.3 −8.91M (was −8.82M, basically flat),
              19JUN 12.3 −6.26M (was −6.49M, eased), 26JUN 19.3
              −24.94M (was −25.23M, basically flat — the load-bearing
              forward negative), 31JUL 54.3 +1.61M (was +1.06M, firmed),
              28AUG 82.3 +0.92M, 25SEP 110.3 −0.69M (was −1.27M,
              improved), 25DEC 201.3 +1.64M, 26MAR27 292.3 +0.17M. The
              7JUN +3.87M front chunk settles at 08:00Z 06-07 (~8h
              ahead of this snap); since it is POSITIVE, the settle
              window does NOT carry an amplifier this time — vs 6JUN
              −8.40M and 5JUN −9.61M which both did. The post-settle
              ex-7JUN aggregate is roughly{' '}
              <span className="dn-tag">−38.7M − (+3.87M) = −42.6M</span>{' '}
              (slightly worse on a forward-residual basis because the
              positive front chunk is what cleared, leaving the
              negative tail behind), but the front-decay shape itself
              is a structural improvement vs 06-06&rsquo;s rolling
              negative-front replacement.
            </p>

            <p>
              IV median across 1,008 instruments is{' '}
              <span className="dn-tag bear">53.5%</span> (firmed +1.0pt
              from 06-06&rsquo;s 52.5% / 1,044 instruments — a
              modest weekend-vol mark vs 06-06 as the chain held its
              06-06 reading through a quieter spot tape; the 36 fewer
              instruments reflect the 6JUN chain clearing at 08:00Z
              06-06 net of the 9JUN / 10JUN near-dated listings) against
              30D close-to-close RV of{' '}
              <span className="dn-tag bear">37.03%</span> (was 37.05%
              — effectively flat at −0.02pt as the rolling 30D window
              is now fully stamped with the 06-02 / 06-05 / 06-06 deep
              prints; rolling further is not adding fresh vol). Chain
              richness{' '}
              <span className="dn-tag bear">~+16.47pt</span> (was
              ~+15.45pt on 06-06 — a +1.02pt expansion as IV crept
              and RV stalled; the chain is repricing forward realized
              higher into a flat-spot weekend, possibly priced for a
              Monday US-open vol event). A chain-median across N
              instruments, <span className="dn-em">not</span> a
              tradable spread; expiry-/strike-level vega, skew and
              term structure remain not loaded; the vol read stays
              framework-only. RV methodology: 30D close-to-close,
              logret.std × √365 × 100 on the last 30 daily log returns
              (= 31 consecutive daily closes) anchored to parquet
              last bar 2026-06-07 00:05Z; the underlying 31-close
              window now spans $60,845.70 – $82,177.70. For reference,
              last 29 returns / 30 closes reads 37.28%; the 37.03%
              page value comes from 30 returns.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · weekend FRED freeze — every Tier-1 / Tier-2 row carries the same Friday-close values as the 06-06 note (10Y 4.47% / TIPS 2.11% / HY OAS 2.74% / NFCI −0.494 / MOVE 75.2 / DXY 100.07 / Fed liq $5.834T / USD-JPY 160.29 / US-JP 1.95% / USD-CNY 6.7650) · NO fresh macro print possible until Monday US open · the &ldquo;what changed today&rdquo; episodic list (DXY +2.33, Fed liq −2.29, Median CPI +1.82, 10Y BE −1.74) is identical to 06-06 · the macro tape contribution to the BTC down-leg is structurally frozen as a Friday-close baseline · BTC-vs-TradFi 7d gap WIDENED to −13.26pt (was −11.82pt on 06-06) as BTC extended further than NQ this rolling 7d window</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape is structurally frozen on a weekend FRED
                freeze: the 2026-06-06 22:15Z render (Friday-evening UTC,
                weekend FRED freeze in effect since)
                carries the same Friday-close inputs as the 06-06 note,
                with the same Δ-column deltas and the same episodic-z
                list
              </span>. Dashboard render is 2026-06-06 22:15Z, ~1h 50m
              before the snapshot. Every Tier-1 row reads identical to
              the 06-06 panel because no fresh FRED daily print is
              possible until Monday US open: US 10Y nominal{' '}
              <span className="dn-tag bull">4.47% (−2.0bp Δ-column
              carried from Friday)</span>, regime z{' '}
              <span className="dn-tag bear">+1.56</span>, episodic z{' '}
              <span className="dn-tag">+0.14</span> — RISK-OFF tag,
              gate still 6bp from fire on the carried Friday close.
              10Y TIPS real{' '}
              <span className="dn-tag bear">2.11% (flat)</span>, regime
              z <span className="dn-tag bear">+1.75</span>, episodic z{' '}
              <span className="dn-tag">+0.95</span> — RISK-OFF carried.
              5Y5Y BE inflation{' '}
              <span className="dn-tag">2.24% (flat)</span> — carried.
              HY OAS <span className="dn-tag bull">2.74% (−1.0bp
              Δ-column carried)</span>, regime z{' '}
              <span className="dn-tag bull">−1.14</span>, episodic z{' '}
              <span className="dn-tag bull">−0.80</span> — RISK-ON tag
              still, gate still 4bp from fire on the carried Friday
              close (the 06-05 widening did not extend into Friday and
              the weekend cannot extend it further). NFCI{' '}
              <span className="dn-tag">−0.494 (+0.01)</span> — carried,
              stale 8d. Fed net liquidity{' '}
              <span className="dn-tag bear">$5.834T (−0.038T)</span> —
              carried. MOVE bond vol{' '}
              <span className="dn-tag bear">75.2 (+4.04)</span> — the
              06-06 largest single-day bond-vol jump of the lineage is
              now the fixed weekend baseline, not a fresh print today.
              DXY <span className="dn-tag bear">100.07 (+0.66 carried
              Δ; same vs 06-06 note 100.07)</span>, regime z{' '}
              <span className="dn-tag bear">+1.78</span>, episodic z{' '}
              <span className="dn-tag bear">+2.33</span> — RISK-OFF
              EPISODIC carried at the lineage extreme; USD/JPY{' '}
              <span className="dn-tag bear">160.29 (+0.30 carried Δ;
              same vs 06-06 note)</span>; US-JP 10Y spread{' '}
              <span className="dn-tag bull">1.95% (−2.0bp carried)</span>;
              USD/CNY{' '}
              <span className="dn-tag bull">6.7650 (carried)</span>.
              JGB 10Y stale 66d at 2.52% (staleness count unchanged
              from 06-06).{' '}
              <span className="dn-em">
                Net: the macro contribution is a frozen Friday-close
                baseline and the &ldquo;what changed today&rdquo;
                episodic list (DXY +2.33, Fed liq −2.29, Median CPI
                +1.82, 10Y BE −1.74) is identical to 06-06 because
                no FRED row updates over the weekend. The credit
                gate is still 4bp from fire on the carried Friday
                close (no fresh widening possible until Monday); the
                rates gate is still 6bp from fire. The reclaim-long
                rates filter (10Y &lt; 4.55%) is verified TRUE at
                4.47% on the carried Friday close. The BTC-vs-TradFi
                decoupling WIDENED to −13.26pt this print (BTC −17.75%
                vs NQ −4.49%) from −11.82pt on 06-06 — but this time
                BECAUSE BTC extended further into the 7d window (the
                06-06 −5.41% wick rolled in) and NQ partially recovered
                (NQ went from −5.35% to −4.49%, +0.86pt of TradFi
                relief). The rotation is now BTC-extending-into-a-flat-TradFi
                regime, not the co-selling shape of 06-06
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
                <tr><td>US 10Y nominal</td><td className="num">4.47%</td><td className="num bull">−2.0bp (carried)</td><td className="num bear">+1.56</td><td className="num">+0.14</td><td className="bear">tight · carried Friday close · gate 6bp from fire</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.11%</td><td className="num">0.0bp</td><td className="num bear">+1.75</td><td className="num">+0.95</td><td className="bear">tight · still RISK-OFF · carried</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.24%</td><td className="num">0.0bp</td><td className="num">+0.09</td><td className="num bull">−0.88</td><td className="neut">no tag · carried</td></tr>
                <tr><td>HY OAS</td><td className="num bull">2.74%</td><td className="num bull">−1.0bp (carried)</td><td className="num bull">−1.14</td><td className="num bull">−0.80</td><td className="bull">loose · risk-on · gate 4bp from fire on carried Friday close</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.494</td><td className="num">+0.01</td><td className="num">+0.72</td><td className="num">−0.01</td><td className="neut">tight · stale 8d · carried</td></tr>
                <tr><td>MOVE bond vol</td><td className="num bear">75.2</td><td className="num bear">+4.04 (carried)</td><td className="num">−0.10</td><td className="num">+0.30</td><td className="bear">neutral on z · 06-06 lineage jump now fixed weekend baseline</td></tr>
                <tr><td>DXY</td><td className="num bear">100.07</td><td className="num bear">+0.66 carried Δ · 0 vs 06-06 note</td><td className="num bear">+1.78</td><td className="num bear">+2.33</td><td className="bear">RISK-OFF EPISODIC · episodic z carried at lineage extreme · 100.00 reclaimed</td></tr>
                <tr><td>Fed net liquidity</td><td className="num bear">$5.834T</td><td className="num bear">−0.038T</td><td className="num">−0.12</td><td className="num bear">−2.29</td><td className="bear">carried · no fresh weekly print possible until Monday</td></tr>
                <tr><td>USD/JPY</td><td className="num bear">160.29</td><td className="num bear">+0.30 carried Δ · 0 vs 06-06 note</td><td className="num bear">+1.36</td><td className="num bear">+1.43</td><td className="bear">yen weaker · episodic z carried above +1.0</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num bull">1.95%</td><td className="num bull">−2.0bp (carried)</td><td className="num bull">−0.85</td><td className="num">+0.14</td><td className="bull">tightened · carried</td></tr>
                <tr><td>USD/CNY</td><td className="num bull">6.7650</td><td className="num bull">−0.01 (carried)</td><td className="num bull">−1.84</td><td className="num bull">−1.46</td><td className="bull">no tag · loose · carried</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp (monthly · stale 66d)</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean · staleness unchanged from 06-06</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 166 rows, summary
              00:01Z — <span className="dn-em">a 7-day rolling read,
              not today</span>). Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.233</span> (DOWN from
              06-06&rsquo;s 0.238, moved AWAY from the 0.25 NORMAL
              threshold by 0.005 — the firming trend toward NORMAL that
              06-06 noted stalled and reversed slightly, the regime tag
              stays IDIOSYNCRATIC by a wider margin). BTC&rsquo;s top
              tie stays SILVER:{' '}
              <span className="dn-tag">SILVER +0.261</span> (was +0.254
              on 06-06 — firmed +0.007), followed by SP500{' '}
              <span className="dn-tag">+0.220</span> (was +0.185 —
              firmed +0.035), TSLA{' '}
              <span className="dn-tag">+0.220</span> (was +0.195 —
              firmed +0.025), GOLD{' '}
              <span className="dn-tag">+0.194</span> (was +0.182), MSFT{' '}
              <span className="dn-tag">+0.189</span> (was +0.151 —
              firmed +0.038), NQ{' '}
              <span className="dn-tag">+0.188</span>{' '}
              <span className="dn-em">(was +0.129 on 06-06 — firmed
              +0.059, the largest BTC-to-TradFi firming of the lineage
              as both BTC and NQ&rsquo;s prices walked together this
              7d window)</span>, NVDA{' '}
              <span className="dn-tag">+0.185</span> (was +0.158),
              URNM <span className="dn-tag">+0.182</span> (was +0.150),
              COPPER <span className="dn-tag">+0.178</span> (was +0.184),
              PLAT <span className="dn-tag">+0.171</span> (was +0.163),
              META <span className="dn-tag">+0.166</span> (was +0.142),
              NGAS <span className="dn-tag">+0.147</span> (was +0.152),
              JP225 <span className="dn-tag">+0.125</span> (was +0.118 —
              firmed from the bottom of the top-10 to mid). 7d
              performance:{' '}
              <span className="dn-tag bear">BTC −17.75%</span> (extended
              from 06-06&rsquo;s −17.17% by −0.58pt — the 7d window now
              includes the 06-06 close $60,850 and the 06-07 in-progress
              close $60,846, the −5.41% wick is fully inside the
              window), NQ{' '}
              <span className="dn-tag bear">−4.49%</span>{' '}
              <span className="dn-em">(was −5.35% on 06-06 — NQ
              partially RECOVERED by +0.86pt as the 7d window rolled
              forward, the 06-06 NQ extension did not extend into
              today&rsquo;s rolled window)</span>, SP500{' '}
              <span className="dn-tag bear">−2.33%</span> (was −2.74%
              — recovered +0.41pt), JP225{' '}
              <span className="dn-tag bear">−3.98%</span> (was −2.43% —
              EXTENDED −1.55pt, the asia leg of the TradFi
              decoupling worked the other way), NVDA{' '}
              <span className="dn-tag bear">−4.65%</span> (was −5.29%
              — recovered), META{' '}
              <span className="dn-tag bear">−6.61%</span> (was −7.21%
              — recovered), AAPL{' '}
              <span className="dn-tag bear">−1.38%</span>, MSFT{' '}
              <span className="dn-tag bear">−8.85%</span> (was −9.24%
              — recovered slightly), AMZN{' '}
              <span className="dn-tag bear">−9.38%</span> (was −9.63%
              — recovered slightly), TSLA{' '}
              <span className="dn-tag bear">−9.60%</span> (was −10.51%
              — recovered). Metals broadly soft but eased: GOLD{' '}
              <span className="dn-tag bear">−4.90%</span> (was −4.83%
              — flat), SILVER{' '}
              <span className="dn-tag bear">−9.99%</span> (was −10.16%
              — eased), PLAT{' '}
              <span className="dn-tag bear">−7.61%</span> (was −8.14%
              — eased), PALL{' '}
              <span className="dn-tag bear">−10.23%</span> (was −11.39%
              — eased), COPPER{' '}
              <span className="dn-tag bear">−4.21%</span> (was −3.19%
              — extended slightly), URNM{' '}
              <span className="dn-tag bear">−10.74%</span> (was −10.11%
              — extended slightly). Energy stayed positive: CL{' '}
              <span className="dn-tag bull">+4.09%</span> (was +4.08%
              — flat), BRENT{' '}
              <span className="dn-tag bull">+2.62%</span> (was +3.34%
              — cooled), NGAS{' '}
              <span className="dn-tag bear">−0.49%</span> (was −1.40%
              — recovered, almost flat).{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine WIDENED to
                ~−13.26pt (BTC −17.75% vs NQ −4.49%) from −11.82pt on
                06-06 — but this time BECAUSE BTC EXTENDED further
                while TradFi PARTIALLY RECOVERED (NQ +0.86pt, SP500
                +0.41pt, MSFT +0.39pt, TSLA +0.91pt week-on-week vs
                the 06-06 read). The shape is now BTC-extending-into-a-flat-TradFi
                regime, NOT the co-selling shape of 06-06. The
                cross-asset firming on BTC&rsquo;s top ties (NQ +0.059,
                MSFT +0.038, SP500 +0.035, TSLA +0.025) reflects the
                wick prints aligning in time with the TradFi sell-off
                of last week — but the recovered TradFi leg this rolling
                window has BTC alone extending. With mean |r| at 0.233
                (eased from NORMAL), BTC&rsquo;s tape stays structurally
                IDIOSYNCRATIC for trading prescription
              </span>. JGB monthly 2.52% carries EXTREME RISK-OFF
              monthly tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · runner / put-spread tail / cover-bounce scout / cycle continuation framework statuses unchanged · mean-revert long scout leg-3 inflection re-priced to flip $63,538 (was $63,778) — recomputed R/R = 2.15:1 at trigger $63,538 / stop $59,154 / first target $72,978; passes 1.5:1 gate; trigger has not printed; STILL NON-ACTIONABLE · 200W cycle floor watch carried; gap narrowed to −1.73% on spot but daily closes still below · no fresh trades on this snap</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 06-06 framework watches printed cleanly: the 6JUN
                settle resolved CLEAN at 08:00Z 06-06 AND the 7JUN
                replacement chunk landed POSITIVE (+3.87M) — the dealer
                book repair leg moved decisively in the cover-bounce
                scout&rsquo;s favor for the first time since the
                down-leg started, but spot did not reclaim flip $63,538
                so leg 3 has still not printed
              </span>. The cover-bounce scout from 05-31 remains
              DROPPED on the price plane — the cycle anchor is still
              ~$12.0k overhead (was ~$13.4k on 06-06) and three legs
              are still required (anchor reclaim AND dealer-book
              repair AND cover-shape). The dealer-book repair leg got
              MATERIALLY BETTER today (gamma +$14.8M to −38.7M, 7JUN
              front chunk POSITIVE at +3.87M, $60k wall eased
              −$1.12M); the cover-shape leg got materially better on
              the 4h window (every flow field net-buyer with OI
              expanding, a clean qualifying 4h cover-shape at this anchor);
              but the anchor reclaim leg is unmoved at ~$12.0k
              overhead. The runner and the 29MAY put-spread tail stay
              closed unchanged. The cycle-continuation framework
              remains CLOSED-VINDICATED with nothing fresh to test
              today. The mean-revert long scout from 06-03 keeps two
              of three promotion legs cleared and re-prices leg 3 to
              the new flip:{' '}
              <span className="dn-signal">
                a 1h close &gt; flip $63,538 with OI still building is
                the right structural inflection on today&rsquo;s tape,
                and the recomputed R/R at trigger $63,538 / stop
                $59,154 (06-06 capitulation low — today&rsquo;s 24h
                low $59,558 is above that, so the lineage capitulation
                low remains the stop reference) / first target $72,978
                (cycle anchor) reads $4,384 risk / $9,440 reward =
                2.15:1, modestly improved from 06-06&rsquo;s 2.00:1 and
                comfortably above the desk&rsquo;s 1.5:1 gate
              </span>. The scout stays NON-ACTIONABLE because leg 3
              has not printed — spot $60,933 sits $2,605 below the
              reframed trigger (vs $4,132 on 06-06 — closer by $1,527
              as the flip held and spot rebuilt) — but the R/R now
              reads better and the trigger is closer than 06-06. The
              200W cycle floor watch stays informational; the gap to
              spot narrowed to −1.73% (was −3.48% on 06-06) but the
              06-06 daily close $60,850 and the 06-07 in-progress
              close $60,846 are still below the full-history W-SMA200
              $62,008 by ~$1,160; the weekend weekly close determines
              whether the first formal weekly close below the 200W of
              the current cycle stamps in. The trade book today is
              unchanged in terms of live size (none); the desk
              maintains discipline as the dealer side repairs, the
              4h flow flips cover-shape, and the SM book reverts to
              short-stacking against an in-progress bounce engine.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">closed · primary · runner ladder complete · closed on 29MAY 08:00Z expiry settle (unchanged status carried from 06-06)</span>
              <div className="dn-trade-name">
                Flip-extend short — closed on 29MAY 08:00Z expiry settle (unchanged from 06-06)
              </div>
              <div className="dn-thesis">
                Status unchanged. The retrospective read continues
                to vindicate the close: 05-30 / 05-31 daily closes
                ($73,857 / $73,653) marked the two-day post-amplifier
                bounce, then 06-01 broke ($71,392), 06-02 dumped
                (−6.53%), 06-03 extended (−3.91%), 06-04 nearly flat
                (−0.41%), 06-05 extended (−4.43% close-to-close at
                $61,022), 06-06 stabilized (−$172 close-to-close at
                $60,850 — the recovery into the UTC close after the
                04:06Z parquet reading of $60,490), and today&rsquo;s
                in-progress 06-07 close $60,846 is effectively flat
                vs 06-06. The down-leg appears to have stopped
                extending on close-basis terms; re-entry path
                remains a fresh structural setup, not a roll.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (amplifier settle) · no residual position · unchanged from 06-06</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">do not chase a re-entry short into the three-frame ⚡ TD9 BUY cluster, a clean qualifying 4h cover-shape print at this anchor, the front-amplifier-cleared dealer state (gamma +$14.8M, 7JUN +3.87M positive), and an effectively flat day-over-day close — the short side is structurally exhausted on this leg even as the SM book reverted to short-add today</span></div>
              </div>
              <div className="dn-gating">
                <b>Trade closed.</b> The audit-cycle discipline
                holds: no roll, no average, no late-tier add — even
                though the SM book reverted to a short-stack today,
                the engine-frame cover-shape and front-amplifier-cleared
                dealer state argue against a short add on the
                second-derivative.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">DROPPED · scout · cycle anchor lost FOUR+ tiers down · ~$12.0k overhead (was ~$13.4k on 06-06) · dealer-book repair leg DECISIVELY IMPROVED today (+$14.8M to −38.7M; 7JUN front chunk POSITIVE) · cover-shape leg printed a clean qualifying 4h print at the 00:05Z anchor (not a lineage-first claim)</span>
              <div className="dn-trade-name">
                Cover-bounce scout — DROPPED unchanged on the anchor reclaim leg, but TWO of three legs moved decisively better today (dealer-book repair leg +$14.8M, 4h cover-shape leg a clean qualifying print at the 00:05Z anchor across every flow field)
              </div>
              <div className="dn-thesis">
                The cover-bounce path has three legs: (1) anchor
                reclaim (1d close &gt; D-SMA100 $72,978), (2)
                dealer-book repair (aggregate GEX flips back &gt; 0),
                (3) cover-shape flow print (OI shrinking + spot CVD
                bid + SM short_btc bleeds). Today: leg 1 unmoved at
                ~$12.0k overhead (cycle anchor stays the load-bearing
                absent gate), leg 2 IMPROVED MATERIALLY (+$14.8M to
                −38.7M — the largest single-note repair of the
                down-leg, still net-short but moving in the right
                direction; 7JUN front chunk POSITIVE at +3.87M is the
                first positive front chunk of the down-leg), leg 3
                PRINTED CLEAN on the 4h window at the 00:05Z anchor
                (4h: spot CVD +382, fut CVD +306,
                big-print net-buyer +397 over 44 prints, taker-net
                +306, OI +65 BTC — every flow field net-buyer with OI
                expanding). The 1h continued the shape on big-print
                and OI but slipped −125 on spot CVD in the snap-minute
                hour. Two of three legs improved decisively today —
                but leg 1 (anchor reclaim) is the structural gate and
                stays unmoved at ~$12.0k overhead; the scout stays
                DROPPED on the price plane.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout status</span><span className="dn-lvl-v">DROPPED on the price plane (cycle anchor stays the load-bearing absent leg at ~$12.0k overhead); legs 2 and 3 both moved better today</span></div>
                <div><span className="dn-lvl-k">re-entry threshold (carried)</span><span className="dn-lvl-v bull">1d close &gt; D-SMA100 $72,978 AND aggregate GEX flips back &gt; 0 (currently −38.7M, +$14.8M better today) AND 1h cover-shape print (4h cover-shape printed clean today, 1h slipped on spot CVD in the snap-minute hour)</span></div>
                <div><span className="dn-lvl-k">no long entry here</span><span className="dn-lvl-v bear">do not buy the three-concurrent TD9 BUY cluster as a cover-bounce — this is the mean-revert scout setup below, not the cover-bounce setup; the cover-bounce path is gated by the anchor reclaim regardless of how clean the engine-frame cover-shape gets</span></div>
              </div>
              <div className="dn-gating">
                <b>Trade dropped on the price plane.</b> The mean-revert
                long scout below is the separate setup keyed to
                oversold-counter exhaustion; the cover-bounce path is
                gated by anchor reclaim. The 4h cover-shape window
                printing clean today is a meaningful second-derivative
                signal that supports the mean-revert scout&rsquo;s
                leg-3 flip-reclaim trigger if it fires — but it does
                NOT unlock the cover-bounce path on its own; the
                anchor remains the structural gate.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">CLOSED-VINDICATED · short scout · framework watch · no fresh single-minute hostile-2 signature on today&rsquo;s 24h tape (closest was a 10-minute re-stack at BJ 13:51 → BJ 14:01 06-06 but no single-minute Δnet |≥| 3k) · calendar cadence stays formally retired</span>
              <div className="dn-trade-name">
                Anchor-break short scout — CLOSED-VINDICATED (closure carried from 06-06; today&rsquo;s 24h tape produced no single-minute hostile-2 signature, only a wider 10-minute re-stack shape; the calendar cadence stays formally retired)
              </div>
              <div className="dn-thesis">
                Status unchanged from 06-06. The cycle continuation
                framework was formally retired on the 06-06
                sixth-print failure at the BJ 15:41 fallback pin;
                today there is no candidate calendar minute to
                evaluate. The framework continues as a no-calendar
                watchlist for fresh re-stack hostile-2 signatures
                (Δshort &gt; 0 + Δlong &lt; 0 same minute with
                |Δnet| ≥ 3k); on today&rsquo;s 24h tape no
                single-minute Δnet print cleared the ≥ 3k bar. The
                closest was the BJ 13:51 06-06 dual peak (long_btc
                15,841 and short_btc 56,606 same minute), followed
                by the SM net trough at BJ 14:01 06-06 (−43,475, 10
                min later) — a re-stack shape on a 10-minute window
                but not a single-minute hostile-2 signature, and the
                trough is shallower than the 06-04 lineage extreme
                of −46,686 by +3,211 BTC.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">no fresh hostile-2 today</span><span className="dn-lvl-v">no single-minute Δnet ≤ −3k print across the 24h tape; closest pattern was the BJ 13:51 06-06 dual peak + BJ 14:01 06-06 SM net trough −43,475 (10-min window re-stack but not a single-minute signature)</span></div>
                <div><span className="dn-lvl-k">five-print chain (closed)</span><span className="dn-lvl-v">05-30 06:01Z Δnet −5,569 → 06-01 06:16Z −3,137 → 06-02 06:46Z −6,621 → 06-03 07:41Z −7,177 (lineage extreme) → 06-04 07:41Z −5,591 → 06-05 sixth-print test FAILED · framework closed</span></div>
                <div><span className="dn-lvl-k">disposition</span><span className="dn-lvl-v">CLOSED-VINDICATED carried · the desk will not chase a re-entry short on the three-concurrent TD9 BUY cluster, a clean qualifying 4h cover-shape print at this anchor, the +$14.8M gamma repair, the first positive front chunk of the down-leg (+3.87M 7JUN), and an effectively flat close on close — even though the SM book reverted to a short-stack today</span></div>
                <div><span className="dn-lvl-k">framework next step</span><span className="dn-lvl-v">future re-stack hostile-2 signatures (Δshort &gt; 0 + Δlong &lt; 0 same minute, |Δnet| ≥ 3k) remain meaningful tape reads when they print, but on a no-calendar basis only</span></div>
              </div>
              <div className="dn-gating">
                <b>Status:</b> CLOSED-VINDICATED carried.{' '}
                <b>Hard rule:</b> no re-entry short on a tape where
                the cycle continuation cadence has cleanly failed,
                the dealer-side has decisively repaired (+$14.8M
                today), the 4h cover-shape flow has printed clean,
                the engine has rebuilt RSI to neutral, the front
                amplifier has cleared without a fresh negative
                replacement, and the down-leg close has stabilized
                over two consecutive sessions.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">closed · macro tail · closed on 29MAY 08:00Z settle (unchanged status carried from 06-06; weekend FRED freeze — credit and rate-side gates both carried at 4bp / 6bp from fire on Friday closes)</span>
              <div className="dn-trade-name">
                Downside put-spread — closed on 29MAY 08:00Z settle; no roll (weekend FRED freeze — no fresh macro print possible until Monday US open)
              </div>
              <div className="dn-thesis">
                Status unchanged on position. The macro tape is
                structurally frozen on a weekend FRED freeze: every
                Tier-1 row carries the same Friday-close values as
                the 06-06 note, so the credit gate stays 4bp from
                fire (HY OAS 2.74%) and the rate-side gate stays 6bp
                from fire (10Y nominal 4.47%) — no fresh print is
                possible until Monday US open and no weekend
                divergence can be measured. The reclaim-long rates
                filter (10Y &lt; 4.55%) stays verified TRUE at 4.47%
                on the carried Friday close. No fresh hedge today
                because (a) no macro print can drive a re-grow
                trigger over the weekend, (b) the BTC-internal
                dealer-side has decisively REPAIRED (+$14.8M today),
                (c) the front amplifier cleared without a fresh
                negative replacement for the first time of the
                down-leg, and (d) the four-frame oversold-counter
                cluster + a clean qualifying 4h cover-shape print at
                this anchor argue for a long-side counter watch rather
                than a fresh downside hedge.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (Deribit 29MAY settle) · no residual position · no roll · unchanged from 06-06</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (next Tier-1 print)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.74%, 4bp to fire — carried Friday close, gate cannot move over the weekend) OR 10Y &gt; 4.53% close (currently 4.47%, 6bp to fire — carried Friday close)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — verified TRUE at 4.47% on the carried Friday close; the filter held into the weekend</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the macro tape is frozen on a weekend
                freeze; gate proximity carries the Friday close on
                both sides. The next clean macro render at Monday US
                open is the next watchable print. No roll today
                because the BTC-internal structural read (front
                amplifier cleared without replacement, dealer side
                +$14.8M repair, 4h cover-shape clean, three-frame ⚡
                TD9 BUY cluster, mean-revert scout R/R 2.15:1)
                argues for a long-side counter watch.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · framework watch · NON-ACTIONABLE · two of three promotion legs cleared and the third REFRAMED to flip $63,538 — recomputed R/R = 2.15:1 (improved from 06-06&rsquo;s 2.00:1), trigger has not printed; STILL NON-ACTIONABLE pending the print</span>
              <div className="dn-trade-name">
                Mean-revert long scout — framework watch; leg 1 (multi-TF ⚡ TD9 BUY) rotated from four to three concurrent frames (12h / 1d / 3d) + 1M still pending; leg 2 (funding cumulative short-pay ≥ 4h) DEEPENED on the contiguous streak metric (7.72h, still &gt;1.9× the gate) but the 24h mean eased from −1.36% to −0.13%; leg 3 inflection reframed to flip $63,538 — recomputed R/R passes the gate at 2.15:1; print not in
              </div>
              <div className="dn-thesis">
                The mean-revert long scout&rsquo;s three promotion
                legs are: (1) multi-TF TD9 BUY confirmed on a cycle
                frame — today rotated to THREE concurrent frames
                (12h / 1d / 3d) with 1M still TD8 → 9? pending; 3d
                converted from its pending Buy 8 → 9? to a confirmed
                TD9 BUY, while 15m flipped to Sell 5 and 8h reset to
                Buy 1 (one fewer active frame than 06-06&rsquo;s
                four, but slower in average TF, the cluster
                concentrated to the multi-cycle frames); (2) funding
                cumulative short-pay regime ≥ 4h — today CLEARED at
                7.72h single contiguous neg streak (vs 10.55h on
                06-06 — eased by −2.83h but still 1.9× the 4h gate),
                with the 24h mean eased to −0.13% from −1.36% on
                06-06 (the mean turned MUCH less deep, but stays
                negative), and the snap minute is the 24h trough at
                −3.16% ann (deepest of today&rsquo;s 24h window; the
                06-06 lineage trough of −3.92% mid-window remains the
                deeper print); (3) the 1h reclaim above a structural
                inflection. The 06-06 note reframed leg 3 from
                ~$68k to flip $63,778; today the flip dropped only
                $240 to $63,538, so leg 3 carries forward with
                modest re-pricing. Recomputed R/R at the reframed
                inflection: trigger $63,538 / stop $59,154 (06-06
                capitulation low; today&rsquo;s 24h low $59,558 is
                ABOVE that, so the lineage capitulation low remains
                the stop reference) / first target $72,978 (cycle
                anchor) gives risk $4,384 / reward $9,440 = 2.15:1,
                modestly improved from 06-06&rsquo;s 2.00:1 and
                comfortably above the desk&rsquo;s 1.5:1 gate. The
                scout stays NON-ACTIONABLE because leg 3 has not
                printed — spot $60,933 sits $2,605 below the
                reframed inflection (vs $4,132 on 06-06 — closer by
                $1,527 as the flip held and spot rebuilt) — but the
                R/R is now better and the trigger is closer.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">promotion gates (2 of 3 cleared; third reframed and pending)</span><span className="dn-lvl-v bull">leg 1 multi-TF TD9 BUY — CLEARED at THREE concurrent cycle frames (12h / 1d / 3d) + 1M pending; the cluster rotated slower vs 06-06&rsquo;s four-frame stack (15m / 8h dropped off, 3d converted from pending) · leg 2 funding cumulative short-pay ≥ 4h — CLEARED at 7.72h single contiguous streak, 72.80% of 24h negative, 24h mean eased to −0.13% (from −1.36% on 06-06) · leg 3 1h close &gt; flip $63,538 (REFRAMED from $63,778 on 06-06 — flip dropped only $240) — UNCLEARED, spot $60,933 sits $2,605 below the reframed trigger</span></div>
                <div><span className="dn-lvl-k">$63,538 flip (reframed inflection, NOT an entry until the print)</span><span className="dn-lvl-v bull">a 1h close &gt; $63,538 with OI still building (or shrinking) marks the structural inflection that promotes the watch; the new R/R math at trigger $63,538 / stop $59,154 / first target $72,978 reads $4,384 risk / $9,440 reward = 2.15:1, modestly improved from 06-06&rsquo;s 2.00:1 and comfortably above the desk&rsquo;s 1.5:1 gate. <em>Watch / inflection line until the print; entry only on confirmed 1h close above flip</em></span></div>
                <div><span className="dn-lvl-k">stop (if entered)</span><span className="dn-lvl-v bear">1h close &lt; $59,154 (06-06 capitulation low — today&rsquo;s 24h low $59,558 is above that, so the lineage capitulation low remains the stop reference; a fresh capitulation print invalidates the oversold-counter read)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R only · take half at the cycle anchor reclaim, runner to D-SMA50 cluster ~$76k area</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R framework (carried per audit DN-006 from
                06-05):</b>{' '}
                trigger $63,538 / stop $59,154 = $4,384 risk; first
                target $72,978 = $9,440 reward = 2.15:1 (above the
                desk&rsquo;s 1.5:1 gate). <b>Entry permitted on
                confirmed 1h close above flip $63,538</b> — and only
                if OI is still building (or at least not collapsing)
                and big-print/spot CVD show a cover-shape print on
                the trigger bar. The 4h cover-shape window has
                already printed clean today (every flow field
                net-buyer with OI expanding); the 1h slipped on
                spot CVD in the snap-minute hour, so the snap-minute
                trigger-bar check would tighten on a leg-3 print.
                The scout is still NON-ACTIONABLE because leg 3 has
                not printed; the trigger is $2,605 above spot.{' '}
                <b>Hard rule:</b> no TD9-only entry without the
                leg-3 flip reclaim; no add on the three-concurrent
                TD9 cluster that has not been confirmed by price
                action above the flip; no entry without a passing
                R/R gate (today&rsquo;s reframed math passes; if
                the inflection moves further away the math has to
                be rechecked).
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 200W cycle floor watch (carried from 06-06) · gap NARROWED to −1.73% on spot (was −3.48%) — but 06-06 daily close $60,850 and 06-07 in-progress close $60,846 BOTH still −$1,158 / −$1,162 below the full-history W-SMA200 $62,008; weekend weekly close determines whether the first formal weekly close below the 200W of the current cycle stamps in</span>
              <div className="dn-trade-name">
                200W cycle floor watch — carried from 06-06; the gap narrowed but the level was not reclaimed on either daily close; the weekend weekly close prints the structural break or the reclaim
              </div>
              <div className="dn-thesis">
                The runbook §2 200W-support read flags the
                full-history W-SMA200 as the cycle floor — a level
                weekly closes below in ~5.8% of weeks (9 / 154 valid
                200W observations on the desk&rsquo;s full-history
                parquet series, W-MON / closed=&lsquo;right&rsquo;),
                clustered at deep cycle capitulations. The weekly_200sma.json file
                is still absent on the server (third consecutive
                note; the file has not been generated since the desk
                policy added the watch); per runbook fallback the
                full-history (2019-09-09 → 2026-06-07, 353 weekly
                bars) W-SMA200 was computed directly from parquet at
                $62,008. Live spot $60,933 sits −1.73% BELOW this
                level on the SPOT print (was −3.48% on 06-06 — the
                gap NARROWED +1.75pt as spot held flat and the 200W
                level rose $214); the 06-06 daily close $60,850 was
                −$1,158 below the line, and the in-progress 06-07
                close at parquet last bar (00:05Z) $60,846 is
                −$1,162 below. The cycle floor is weekly-close, not
                spot — and the in-progress weekly bar that opened
                today (W-MON anchored to 06-08) would need to
                recover and close at or above $62,008 by week-end
                to avoid stamping a formal 200W floor break. If the
                weekly close prints below the level, it is the first
                weekly close below the 200W of the entire current
                cycle — a macro-structural event that historically
                corresponds to capitulations rather than entries.
                The watch is informational this note; the runbook
                do-not-fabricate discipline blocks any percentile
                / break-event claim off a missing JSON, only the
                level + the in-progress daily-close gap is
                surfaced.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W watch source</span><span className="dn-lvl-v">weekly_200sma.json ABSENT (third consecutive note; lineage carry) · fallback per runbook §2: full-history parquet computation from 2019-09-09, 353 weekly bars, W-SMA200 = $62,008 (moved up $214 vs 06-06&rsquo;s $61,794 as the rolling window dropped a low-end week and added the in-progress 06-08 bar at $60,845.70)</span></div>
                <div><span className="dn-lvl-k">spot vs 200W (this snap)</span><span className="dn-lvl-v bear">spot $60,933 − 200W $62,008 = −$1,075 / −1.73% (live spot below the cycle floor; gap NARROWED +1.75pt vs 06-06&rsquo;s −3.48% as spot held and 200W rose)</span></div>
                <div><span className="dn-lvl-k">06-06 daily close vs 200W</span><span className="dn-lvl-v bear">$60,850 vs $62,008 = −$1,158 below — the 06-06 close came in $359 ABOVE the 06-06 note&rsquo;s parquet-last-bar reading of $60,490 (the day recovered into the UTC close after the 04:06Z anchor), but remains below the 200W</span></div>
                <div><span className="dn-lvl-k">06-07 in-progress close vs 200W</span><span className="dn-lvl-v bear">parquet last bar 00:05Z close $60,846 vs $62,008 = −$1,162 below (basically the same gap as 06-06 close)</span></div>
                <div><span className="dn-lvl-k">weekly close watch (weekend)</span><span className="dn-lvl-v">the in-progress weekly bar (W-MON anchored to 06-08) would need to recover and close at or above $62,008 by week-end to avoid a formal 200W floor break; a weekly close below would be the first of the current cycle (structural macro event)</span></div>
                <div><span className="dn-lvl-k">runbook discipline</span><span className="dn-lvl-v">per runbook do-not-fabricate, no percentile / break-event claim is asserted off a missing JSON; only the full-history level and the in-progress daily-close gap are surfaced. Re-running this watch requires either weekly_200sma.json being generated server-side or a continued full-history parquet computation in the next note</span></div>
              </div>
              <div className="dn-gating">
                <b>Watch only.</b> A weekly close below $62,008 would
                be the first of the current cycle and a structural
                macro-support event; but per the runbook this watch
                is informational, not a trade trigger. The
                mean-revert long scout above is the actionable card
                if leg 3 (flip reclaim) fires; the 200W watch is a
                separate macro-level signal that would shift the
                desk&rsquo;s read of the broader cycle position,
                not a per-trade entry/exit. If a weekly close prints
                below $62,008 the next note must reassess whether
                the broader cycle thesis (intact mid-cycle drawdown
                vs cycle-top retrace) has been falsified.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · 6JUN settle resolved CLEAN AND 7JUN replacement chunk POSITIVE (first positive front chunk of the down-leg) · spot did NOT extend the wick (24h low $59,558 above 06-06&rsquo;s lineage low $59,154) · 06-06 daily close $60,850 stabilized and 06-07 in-progress close $60,846 effectively flat · 200W cycle floor gap narrowed to −1.73% on spot but daily closes still below · mean-revert long scout R/R improved to 2.15:1 on the reframed flip but trigger not in · macro tape frozen on weekend FRED freeze</span>
            </h2>

            <p>
              Of the 06-06 decision conditions: the 6JUN26 expiry
              settle FIRED CLEAN (−8.40M chunk cleared at 08:00Z
              06-06) AND the new 7JUN replacement chunk landed
              POSITIVE at +3.87M (the first positive front chunk of
              the down-leg lineage — the clean front decay the 06-05
              note forecast and 06-06 missed); the dealer book repair
              FIRED MATERIALLY (+$14.8M to −38.7M, the largest
              single-note gamma repair of the down-leg, still
              net-short-gamma but moving in the right direction); the
              spot-extension tail DID NOT FIRE (24h low $59,558 above
              06-06&rsquo;s lineage low $59,154 by +$404 — the
              post-wick floor held its first session); the
              weekend-weekly-close tail is still PENDING (in-progress
              06-07 close $60,846 sits −$1,162 below the full-history
              W-SMA200 $62,008; the weekend close determines the
              first formal 200W break of the current cycle or the
              reclaim); the mean-revert long scout leg-3 inflection
              moved $240 closer to $63,538 with R/R modestly
              improved to 2.15:1; the trigger has not printed (spot
              sits $2,605 below); the cycle continuation watch
              stayed CLOSED-VINDICATED with no fresh hostile-2
              single-minute signature on today&rsquo;s tape; the
              macro re-grow gates are frozen on the weekend FRED
              freeze (HY OAS 4bp from fire, 10Y 6bp from fire,
              carried Friday close on both); the reclaim-long rates
              filter stays TRUE at 4.47% on the carried Friday
              close. The conditions today re-set around a cleanly
              decayed front amplifier (first positive front chunk
              of the down-leg), a held lineage low (post-wick floor
              held first session), a narrowed but un-reclaimed 200W
              gap, a SM book that reverted to short-stacking inside
              the 24h, and a mean-revert long scout with an improved
              R/R but un-printed trigger:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>7JUN26 expiry settle (today 08:00Z, ~8h ahead)</td><td className="bull">+3.87M POSITIVE front chunk settles at 08:00Z; post-settle ex-7JUN aggregate ≈ −42.6M (modestly worse on residual basis because the positive chunk is what clears, leaving the negative tail; but the FRONT-decay shape itself is the first positive-front-chunk settle of the down-leg lineage)</td><td>watch the settle print; no action required if settle prints clean — if a vol event prints, re-evaluate the dealer-book repair leg of the cover-bounce scout</td></tr>
                <tr><td>Mean-revert long scout (leg 3 inflection reframed; R/R 2.15:1)</td><td className="bull">1h close &gt; flip $63,538 with OI still building / not collapsing · trigger $2,605 above spot · recomputed R/R 2.15:1 at trigger $63,538 / stop $59,154 / first target $72,978 — passes the 1.5:1 gate, improved from 06-06&rsquo;s 2.00:1</td><td><em>scout long 0.2R on confirmed 1h close above flip</em> with the entry-bar cover-shape check (big-print net positive + spot CVD bid in the trigger bar — the 4h window printed clean today, the 1h slipped on spot CVD in the snap-minute hour, so the trigger-bar check tightens accordingly); take half at cycle anchor $72,978, runner to D-SMA50 cluster ~$76k</td></tr>
                <tr><td>Cover-bounce scout (long) — DROPPED on the price plane; legs 2 + 3 improved decisively today</td><td className="bull">requires 1d close &gt; $72,978 AND aggregate GEX flips &gt; 0 AND 1h cover-shape print — leg 2 (dealer-book repair) moved +$14.8M to −38.7M (still net-short; sign-flip still pending); leg 3 (cover-shape flow) printed CLEAN on the 4h window at the 00:05Z anchor; leg 1 (anchor reclaim, the structural gate) unmoved at ~$12.0k overhead</td><td>no entry · the path improved on legs 2 + 3 today but stays gated by leg 1 (anchor reclaim); the 4h cover-shape printing clean is a meaningful second-derivative signal that supports the mean-revert scout&rsquo;s leg-3 trigger if it fires</td></tr>
                <tr><td>200W cycle floor watch (carried; gap narrowed to −1.73% on spot but daily closes still below)</td><td className="bear">full-history W-SMA200 $62,008; spot $60,933 sits −1.73% below; in-progress 06-07 close $60,846 sits −$1,162 below; the in-progress weekly bar would need to recover and close ≥ $62,008 by week-end to avoid a formal 200W floor break</td><td>watch the weekend weekly close · informational, not a trade trigger; a confirmed weekly close below would be the first of the current cycle and a macro-structural event that demands a next-note cycle-thesis reassessment</td></tr>
                <tr><td>Cycle continuation cadence (CLOSED-VINDICATED carried; no fresh hostile-2 today)</td><td className="stale">no single-minute Δnet ≤ −3k print across the 24h tape; closest pattern was the BJ 13:51 06-06 dual peak + BJ 14:01 06-06 SM net trough −43,475 (10-min re-stack but not a single-minute signature) — the cadence stays formally retired</td><td>read each fresh Δnet ≤ −3k or Δnet ≥ +3k print as a signal in itself — no time prior · re-stack hostile-2 signatures remain meaningful tape reads when they print, on no-calendar basis only</td></tr>
                <tr><td>HY OAS macro re-grow gate (frozen on weekend)</td><td className="bull">2.74% (4bp from fire, carried Friday close — gate cannot move over the weekend, next watchable print at Monday US open)</td><td>at 4bp from touch on a frozen weekend, the gate is mechanically pinned until Monday · no roll today</td></tr>
                <tr><td>Reclaim-long rates filter (frozen on weekend)</td><td className="bull">10Y &lt; 4.55% close — verified TRUE at 4.47% on the carried Friday close; gate 6bp from fire and pinned over the weekend</td><td>standalone filter holds TRUE; needs the mean-revert leg-3 trigger to translate to scout long</td></tr>
                <tr><td>DXY / MOVE risk-off pulse (frozen on weekend)</td><td className="bear">DXY 100.07 (carried Friday close — episodic z +2.33, lineage extreme on the carried baseline); MOVE 75.2 (carried — the 06-06 lineage jump is now the fixed weekend baseline, not a fresh print)</td><td>the macro risk-off pulse is structurally frozen as a Friday-close baseline; if BTC leg-3 fires before Monday US open, the entry-bar cover-shape check carries the responsibility (no fresh weekend macro divergence is measurable)</td></tr>
                <tr><td>Cycle anchor reclaim watch (price plane four+ tiers down, ~$12.0k closer than 06-06)</td><td className="bull">1d close &gt; D-SMA100 $72,978 — currently ~$12.0k overhead (was ~$13.4k on 06-06, $1.4k closer because the rolling 100D anchor bled lower as the down-leg prints rolled into the window)</td><td>the most distant of the cover-bounce scout&rsquo;s three legs; a 1d close above the anchor would re-arm the cover-bounce scout and trigger fresh structural reassessment</td></tr>
                <tr><td>BTC↔NQ cross-asset rotation (regime IDIOSYNCRATIC eased back from NORMAL)</td><td className="stale">|r| 0.233 (down from 06-06&rsquo;s 0.238, the firming trend stalled and reversed); BTC↔NQ +0.188 (up from +0.129 — firmed +0.059, the largest BTC-to-NQ firming of the lineage); BTC −17.75% vs NQ −4.49% gap −13.26pt (WIDENED from −11.82pt as BTC extended further and NQ recovered)</td><td>the BTC tape is now extending into a partially-recovered TradFi tape (NQ +0.86pt week-on-week vs the 06-06 read) — the rotation flipped from 06-06&rsquo;s co-selling regime to a BTC-extending-alone regime · cross-asset still IDIOSYNCRATIC for trading prescription</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the in-progress weekly bar can recover above
                the full-history 200W $62,008 by week-end (avoiding
                the first formal weekly close below the 200W of the
                current cycle), and whether the mean-revert long
                scout&rsquo;s leg-3 inflection at flip $63,538 prints
                a confirming 1h close before the Monday US open
                releases fresh macro state. The dealer book finally
                let the front amplifier decay clean; the down-leg
                close stabilized over two consecutive sessions; the
                4h cover-shape window printed clean at the 00:05Z
                anchor; the cycle anchor reclaim leg
                is still ~$12.0k overhead and the SM book reverted
                to short-stacking inside the 24h. The question is
                now whether the second-derivative repair on the
                dealer side and the engine-frame cover-shape resolve
                into a 1h flip reclaim that promotes the mean-revert
                long scout to a first scout entry, or whether the
                weekend weekly close stamps the first formal 200W
                break of the cycle and the dealer-book residual
                negative tail (~−42.6M post-7JUN settle, with the
                26JUN −24.94M monthly load-bearing in the forward
                strip) pulls spot down to a fresh capitulation
                print below $59,154
              </span>. Until then this note runs as written: the
              runner and the put-spread tail are closed, the
              cover-bounce scout is dropped on the price plane but
              legs 2 + 3 improved decisively today, the short
              framework watch is CLOSED-VINDICATED with no fresh
              hostile-2 today, the mean-revert long scout is
              NON-ACTIONABLE pending the leg-3 flip-reclaim print
              but the R/R now reads 2.15:1 and the trigger is
              $1,527 closer to spot than 06-06, and the 200W cycle
              floor watch carries the gap-narrowed-but-still-below
              read. The BTC-vs-TradFi decoupling widened to
              −13.26pt as BTC extended alone into a partially
              recovered TradFi tape; the engine MTF frames rebuilt
              to neutral RSI and 15m flipped above cloud; the dealer
              book repaired the largest single-note gamma move of
              the down-leg; the leverage book printed an easing
              short-pay regime but with the snap minute as the 24h
              trough at −3.16% ann. The right read for the next 24h
              is <em>patient — watch the 7JUN settle resolution, the
              weekend weekly close vs $62,008, and a 1h close
              above flip $63,538 — three external prints that
              re-write the call</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> this is the v2 EN note, promoted from v1 by
            STAGE C on the btc-fetcher server after the STAGE B codex
            hostile-but-fair audit returned a{' '}
            <b>BLOCK-CRITICAL</b> verdict with{' '}
            <b>2 CRITICAL + 2 MAJOR + 3 MINOR</b> findings (full audit
            file: <code>audits/2026-06-07-desk-note.md</code>). All
            seven findings have been applied in place to this page.{' '}
            <b>CRITICAL fixes:</b>{' '}
            <em>DN-001</em> — every &ldquo;fresh single-minute deepest
            neg of the lineage&rdquo; framing on the −3.16% snap-minute
            funding trough is reworded to &ldquo;deepest of today&rsquo;s
            24h window&rdquo;, with the 06-06 lineage deeper trough
            −3.92% explicitly retained as the deeper print (tiles,
            section headings, leverage paragraph, and the mean-revert
            scout&rsquo;s leg-2 thesis all rewritten);{' '}
            <em>DN-002</em> — every &ldquo;first 4h window of the
            down-leg lineage&rdquo; and &ldquo;cleanest cover-shape of
            the down-leg&rdquo; claim is replaced with the narrower
            defensible claim &ldquo;a clean qualifying 4h cover-shape
            print at the 00:05Z anchor&rdquo; (the lineage-superlative
            claim was false against a prefix-sum scan of the rolling
            tape: codex found 275 earlier qualifying 4h windows back
            through 05-31, e.g. <code>05-31 09:17</code> BJ
            (<code>2026-05-31 01:17Z</code>) and <code>06-06 04:36</code>
            {' '}BJ (<code>2026-06-05 20:36Z</code>); the cover-bounce
            scout card, the cycle-continuation card, the decision-table
            row, and the closing signature were all rewritten).{' '}
            <b>MAJOR fixes:</b>{' '}
            <em>DN-003</em> — every BJ-to-UTC pair in the SM section
            and downstream framework prose was eight hours wrong: the
            24h spot low corrected to <code>BJ 12:35 06-06</code> /
            <code>UTC 04:35 06-06</code>, the SM dual long/short peak
            to <code>2026-06-06 05:51Z (BJ 13:51 06-06)</code>, the SM
            net trough to <code>2026-06-06 06:01Z (BJ 14:01 06-06)</code>,
            and all repeated session descriptions through the framework
            and decision tables now read consistently;{' '}
            <em>DN-004</em> — the macro dashboard render date corrected
            from a future <code>06-07 22:15Z</code> to the actual
            <code> 2026-06-06 22:15Z</code> (Friday-evening UTC,
            weekend FRED freeze in effect since).{' '}
            <b>MINOR fixes:</b>{' '}
            <em>DN-005</em> — the 200W historical-frequency figure
            corrected from <code>~9%</code> to <code>~5.8%</code>{' '}
            (9 / 154 valid 200W observations on the desk&rsquo;s
            full-history parquet series, W-MON /
            closed=&lsquo;right&rsquo;) in both the structure section
            and the 200W watch trade card;{' '}
            <em>DN-006</em> — the stray manifest typo{' '}
            <code>live spot $59,933 →</code> was deleted (the anchor
            live tape row is <code>$60,933.28</code>);{' '}
            <em>DN-007</em> — the prior IV/RV spread date corrected
            from <code>06-05</code> to <code>06-06</code> in the
            funding-tile source string. <b>Codex-confirmed clean
            (carried, not modified):</b> requireViewer gating, JSX
            shell integrity, build-proxy clearance, live-tape pin
            values, windowed-flow values, GEX file and arithmetic,
            MTF table values, macro source values, cross-asset values,
            MA/RV levels, and the claims-vs-loaded-data discipline on
            NTT / max-pain / strike-IV / BTC-NQ ratio all cleared in
            the audit. The two open issues codex flagged (the
            &ldquo;current cycle&rdquo; cycle-boundary phrasing and
            the 200W-watch &ldquo;current cycle&rdquo; framing) are
            carried as-is for transparency; they did not promote to
            a severity-tagged finding.{' '}
            <b>STAGE A discipline applied (carried):</b>{' '}
            rolling-source archive policy per runbook §1, BJ-local{' '}
            <code>t</code> convention per runbook §2, full MA matrix
            (Daily AND Weekly, SMA AND EMA, n ∈ {`{20,50,100,150,200}`})
            under the 2024-2026 subset with full-history references
            for the 200W watch, funding × 1095 annualization, SM cut
            fraction as |Δ|/prior_net, claims ≤ data per runbook §3,
            requireViewer gating per runbook §4. The MA matrix
            universe stays the 2024-2026 subset per 06-02 audit
            DN-005 desk policy carry.{' '}
            <b>Build note (INFO):</b> Node 18.19.1 vs Next 16.2.6
            requires &gt;= 20.9.0; full <code>next build</code>{' '}
            remains environment-blocked.{' '}
            <code>npx --no-install tsc --noEmit</code> is the build
            proxy and was run by STAGE C after the audit-driven edits
            to verify zero TS regressions.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for
            discussion among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-06-07 00:05Z,
            BJ 08:05 06-07) with section-level provenance disclosed
            in the manifest band above; the macro Tier-1 panel render
            is 2026-06-06 22:15Z (~1h 50m before snapshot) and is
            structurally frozen on a weekend FRED freeze (no fresh
            daily-frequency macro print possible until Monday US
            open). The rolling MTF / GEX / cross-asset artifacts are
            archived to snapshots/2026-06-07-0008/ before read.
            Levels, sizes, and conditions are illustrative of the
            desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind
            future tape. Derivatives carry the risk of total loss and,
            where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The front amplifier decayed clean — 6JUN settled and
                7JUN landed positive. The wick did not extend. The
                4h cover-shape printed clean at the 00:05Z anchor.
                But the SM book reverted to
                short-stacking, the 200W cycle floor still sits
                above two consecutive daily closes, and the
                mean-revert scout&rsquo;s leg-3 print is not in.
                Patient — watch the 7JUN settle, the weekend weekly
                close vs $62,008, and a 1h close above flip $63,538.
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
            v2 · 2026-06-07 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
