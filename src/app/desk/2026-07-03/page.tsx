import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-03 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-03',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-03' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260703() {
  await requireViewer('/desk/2026-07-03');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-03 · v2</span>
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
              <span className="dn-big">$61,433</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+2.58%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-03 00:07Z ·{' '}
              <span className="dn-em">
                THE BOUNCE EXTENDED — for the first time in the run the constructive flip was
                NOT handed back by the 00:07Z cut (the 07-03 in-progress bar $61,433 still holds
                near the 07-02 close, down only $107.50; the 07-03 daily close does not yet exist).
                The 07-02 daily bar closed UP +$1,541.00 at
                $61,540.60, the SECOND consecutive up-close and the strongest of the run, pressing
                spot to −1.76% under the $62,643 200W floor and right into the tight
                D-EMA20 $62,056 (−1.00%) / D-SMA20 $62,252 (−1.32%) / floor $62,643 (−1.93%)
                reclaim cluster (in-progress 07-03 bar $61,433). The dealer book DEEPENED to
                +60.7M net-LONG-gamma (was +12.0M on 07-02 — it dampens harder), the front three
                expiries are positive and no material near-dated downside amplifier remains (front
                3JUL26 0.3 DTE +19.55M — the same expiry that was the −7.75M downside amplifier on
                07-02 flipped positive as it rolled to the front); 6JUL26 3.3 DTE is a small −0.34M
                negative and the heaviest negative is far-dated
                25SEP26 −3.03M, and spot sits +1.90% ABOVE the flip $60,286 (was +0.15% on 07-02).
                BUT the MTF engine cuts the other way: it FLIPPED BACK to a 5/9 CYCLE-REVERSAL
                regime (JT&lt;0, from trend-continuation on 07-02) and printed a fresh ⚡4h TD9 SELL
                at $61,491 (overbought reversal hint, AT the highs) with top (bearish-reversal)
                divergences on 15m / 30m / 1h — early topping signature into the bounce, even as
                the headline count improved by one to 3 bull / 6 bear / 1 neutral. The 200W break
                stays CONFIRMED (06-29 weekly close $60,224.70 &lt; $62,643) and the 06-15 reclaim
                thesis stays FALSIFIED; the floor is unchanged $62,643 (−1.93% below — now within
                striking distance). Cross-asset LOOSENED further to IDIOSYNCRATIC (mean |r| 0.192,
                well below the 0.25 line) and BTC&rsquo;s 7d return +3.28% now LEADS NQ +0.14% by
                +3.14pt (was a −1.60pt lag on 07-02 — the laggard read is fully unwound). Macro
                eased at the credit margin (HY OAS 2.74% &lt; the 2.78% re-grow gate, the gate
                STAYS un-fired) while rates firmed toward their gate (10Y 4.48%, +4bp, 5bp from
                4.53%) and the dollar softened but stayed EXTREME (DXY 100.85). All read through a
                dead derivatives tape, now a seventeenth calendar day — the OKX monitor has been
                frozen 377.4h and the SM feed dead ~20.94 days. The desk reads the extended bounce
                as a genuine improvement in the gamma/price map that it still cannot confirm as
                demand on a blind tape — and the engine is now flashing overbought reversal at the
                highs, so the second up-close buys respect, not a chase.
              </span>
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · LAST ROW 2026-06-17 06:43Z (t = &ldquo;06-17 14:43&rdquo; BJ)</td>
                  <td className="dn-flag">
                    <b>FROZEN</b> · live_db.json has written no new row since
                    2026-06-17 06:43Z (file mtime 06-17 06:43:08Z confirms); process
                    status is not archived / not verified in this cut — now{' '}
                    <b>377.4h stale</b> vs the 00:07Z snapshot anchor (was 353.4h on the
                    07-02 note, 329.4h on 07-01 — the outage has run another ~24h since the
                    last note, into its seventeenth calendar day). Funding / OI / CVD / basis /
                    retail / taker-flow are LAST-KNOWN at 06-17 06:43Z, not current. The SM
                    sub-feed (long_btc / short_btc / net_btc) is frozen even longer — constant
                    since 2026-06-12 01:36Z (~502.5h / ~20.94 days); SM net and the SM
                    cut-fraction are <b>NON-COMPUTABLE</b> this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-03 00:01Z scan</td>
                  <td className="dn-flag">
                    fresh (~6 min before anchor) · rolling latest-file artifact,
                    archived verbatim at
                    /opt/desk-note/snapshots/2026-07-03-0007/ · in-progress bars · scan
                    spot $61,489, 24h +2.54%, 24h H/L $62,180 / $59,555, qVol $14.41B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-03 00:00Z snapshot</td>
                  <td className="dn-flag">
                    fresh (~7 min before anchor) · Deribit idx $61,781 ($348 above
                    parquet spot $61,433) · 926 instruments · net GEX{' '}
                    <b>+60.7M</b> (net LONG gamma, DEEPENED from +12.0M on the 07-02
                    note; +5.6M on 06-30) · flip $60,286 (spot +1.90% ABOVE, from +0.15%
                    on 07-02) · the front is 3JUL26 0.3 DTE at{' '}
                    <b>+19.55M</b> (positive, settles ~08:00Z today — the SAME expiry that was
                    the −7.75M near-dated downside amplifier on 07-02, flipped positive as it
                    rolled to the front), and there is <b>no material near-dated downside amplifier
                    left</b> (6JUL26 3.3 DTE a small −0.34M negative) — the heaviest negative expiry is the far-dated{' '}
                    <b>25SEP26 84.3 DTE at −3.03M</b> · spot $61,433 sits below the $62k +14.48M /
                    $63k +16.90M positive ceilings (the reclaim-zone bracket) and above the $60k
                    −11.81M put wall
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-03 00:00Z
                  </td>
                  <td className="dn-flag">fresh · 7d 1h bars · 22 assets · 167 rows · regime IDIOSYNCRATIC (mean |r| 0.192, LOOSENED further from 0.239 on 07-02 — BTC is now well below the 0.25 idiosyncratic threshold, and its 7d return +3.28% is no longer just off-worst but LEADS the NQ +0.14% by +3.14pt; the laggard read of the prior lineage is fully unwound)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-02 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.85h render lag · 10Y <b>4.48%</b> (+4.0bp, 5bp from the 4.53% gate),
                    TIPS <b>2.25%</b> (+5.0bp, EXTREME RISK-OFF), HY OAS{' '}
                    <b>2.74%</b> (−1.0bp — stays BELOW the 2.78% re-grow gate, the gate STILL
                    does not fire) · MOVE bond vol <b>68.6</b> (source 1d Δ +1.77, loose) · the
                    FX legs: <b>DXY 100.85</b> (−0.54 day, softened but still EXTREME) and{' '}
                    <b>USD/JPY 162.54</b> (−0.09 day) · Fed net liq $5.843T
                    (+0.053T, FRESH weekly print) · NFCI neutral (now stale ~13d) · WTI
                    $71.9 (+1.6 day)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-03 00:06Z (close $61,433)</td>
                  <td className="dn-flag">
                    fresh kline (exchange OHLC, independent of the frozen live tape) ·
                    offsets recomputed vs the parquet last-bar close, the freshest
                    available spot while the live tape is frozen · the displayed weekly
                    ladder uses the 2023→ subset (184 weekly bars), so no W-SMA200 row
                    (W-EMA200 $67,449 seeds from available history); the 200W floor is
                    recomputed directly from the full-history glob —
                    <b>356 completed weekly W-MON bars</b> (2019→present, INCLUDING the
                    resolved 06-29 week and excluding the in-progress 07-06 week) —{' '}
                    = <b>$62,643</b>, UNCHANGED from the 07-02 note (the 06-29 week resolved
                    three cuts ago, so no step). <b>Spot is −1.93% BELOW the floor and every MA
                    on the matrix is still overhead — no positive offset, the ninth such cut of
                    the lineage — but the bounce tightened the nearest cluster to −1.00% /
                    −1.32% / −1.93%</b> · weekly_200sma.json absent this cut, so the ratio
                    percentile / last-event stay unsourced, not fabricated
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
              <span className="dn-v bear">−7.24% (STALE · 06-17 06:43Z · 377.4h)</span>
              <span className="dn-src">live_db raw funding −0.006608 × 1095 = −7.24% ann (NOT ×100) · LAST-KNOWN at the 06-17 06:43Z freeze, now 377.4h stale, not a current read · byte-for-byte the same frozen row carried by the 06-19 → 07-02 notes; the last-available ann over the 24h+1m inclusive sampled window ending at the freeze (1,442 rows) was mean +0.20%, range −7.24% / +7.21%, 819 / 1,442 rows negative — a balanced, two-sided book at the point the tape died</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · vs 07-02</span>
              <span className="dn-v">tape frozen — not computable</span>
              <span className="dn-src">the live tape has not written since 06-17 06:43Z, so there is still no current funding to difference against the 07-02 note · last-known print at the freeze was −7.24% ann (shorts paying longs); the leverage gate remains un-assessable a seventeenth day running</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC (−0.45%) · STALE window</span>
              <span className="dn-src">live_db oi_btc 102,945 at the 06-17 06:43Z freeze vs the start of a 24h+1m inclusive sampled window (1,442 rows) · the window ENDS at the freeze, NOT into the 00:07Z snapshot — it describes the tape up to 06-17 06:43Z and is 377.4h out of date</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` at the 06-17 06:43Z freeze (was 58.29% at the start of the 24h+1m inclusive sampled window — a +1.18pt long add into the roll-over) · last-known, 377.4h stale</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED DEAD ~502.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · this triple has been byte-for-byte constant since 2026-06-12 01:36Z (~502.5h / ~20.94 days) — it is a FROZEN value, NOT a current positioning read; carried only to mark the dead feed</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">NON-COMPUTABLE</span>
              <span className="dn-src">SM feed frozen ~20.94 days · |Δ| / prior_net cannot be computed — there is no current SM net to difference · the squeeze-cycle / re-stack framework is blind this cut, a continuation of the 06-16 → 07-02 ON-HOLD</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.8% / 37.55%</span>
              <span className="dn-src">GEX median IV across 926 instruments (00:00Z, fresh) vs 30D close-to-close RV 37.55% off parquet — chain richness ~+5.25pt over realised (was ~+5.92pt on 07-02 — richness NARROWED as both IV and RV eased on the second up-close); RV eased (was 38.58% on 07-02, 24.91% on 05-31) · IV is a chain-median across 926 instruments, NOT a tradable spread</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+1.90% (above · extended)</span>
              <span className="dn-src">flip $60,286 (was $59,811 · +$475) · vs parquet spot $61,433 (61,433.10 / 60,286 − 1 = +1.903%) / GEX file Deribit idx $61,781 (61,781 / 60,286 − 1 = +2.479%, file reads +2.5%) — both references ABOVE the flip, EXTENDED from +0.15% above on 07-02 · net GEX +60.7M (net LONG gamma, DEEPENED from +12.0M) · no material near-dated downside amplifier left (front 3JUL26 +19.55M; 6JUL26 a small −0.34M negative)</span>
            </div>
          </div>
          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The bounce extended — and this time it was NOT handed back by the 00:07Z cut (the
                07-03 in-progress bar $61,433 still holds near the 07-02 close, down only $107.50;
                the 07-03 daily close does not yet exist). The 07-02 daily bar
                closed UP +$1,541.00 at $61,540.60, the second consecutive up-close and the
                strongest of the run, pressing spot to −1.76% below the $62,643 floor and into the
                tight D-EMA20 / D-SMA20 / floor reclaim cluster; the whole map deepened
                constructive with it: the dealer book deepened to +60.7M net-LONG-gamma (it
                dampens harder), the front three expiries flipped positive with no material
                near-dated downside amplifier left (front 3JUL26 +19.55M; 6JUL26 a small −0.34M negative), spot pushed to +1.90% above the flip, and the
                headline MTF improved by one to 3/6/1. BUT the engine flipped BACK to a 5/9
                cycle-reversal regime and printed a fresh 4h TD9 SELL at the highs with top divs on
                15m / 30m / 1h — an early topping signature into the bounce. All read through a
                dead derivatives tape, a seventeenth calendar day running
              </span>. Spot prints{' '}
              <span className="dn-tag bull">$61,433, +2.58% on 24h</span> at the 00:06Z
              parquet bar (the MTF scan reads +2.54% on its own window), up from the 07-02
              note spot $59,901 — the lineage extended the bounce back toward the floor it lost
              on 06-24. The 200W break stays{' '}
              <span className="dn-tag bear">CONFIRMED on the 06-29 weekly close $60,224.70,
              −3.86% below the $62,643 floor</span>, the 06-15 reclaim thesis stays FALSIFIED,
              and the floor is unchanged this cut ($62,643, the 06-29 week resolved three cuts
              ago). Nine consecutive daily closes (06-24 $61,051 −2.54%, 06-25 $59,772 −4.58%,
              06-26 $60,072 −4.10%, 06-27 $60,000 −4.22%, 06-28 $59,550 −4.94%, 06-29 $60,224.70
              −3.86%, 06-30 $58,605.40 −6.45%, 07-01 $59,999.60 −4.22%,{' '}
              <span className="dn-tag bull">07-02 $61,540.60 −1.76%, an UP-close +$1,541.00,
              the strongest of the run</span>) now sit below the floor, the last two both
              up-closes lifting spot back toward the line. Spot holds no MA beneath it for the
              ninth cut running — D-EMA20 $62,056 (−1.00%), D-SMA20 $62,252 (−1.32%) and the 200W
              floor $62,643 (−1.93%) are the nearest, all overhead but tightened hard by the
              bounce. The dealer book{' '}
              <span className="dn-tag bull">deepened to +60.7M net-LONG-gamma</span> and the front
              three expiries are positive with no material near-dated downside amplifier left (6JUL26 a small −0.34M negative); spot sits below the
              $62k +14.48M / $63k +16.90M positive ceilings and above the $60k −11.81M put wall.
              MTF improved by one at the headline to{' '}
              <span className="dn-tag bear">3 bull / 6 bear / 1 neutral</span> (was 2/6/2 — 30m
              reclaimed above cloud) — but the regime classifier{' '}
              <span className="dn-tag bear">flipped BACK to 5/9 cycle-reversal (JT&lt;0)</span> from
              trend-continuation, and a fresh{' '}
              <span className="dn-tag bear">⚡4h TD9 SELL printed at $61,491 (overbought reversal
              hint, at the highs)</span> with top divs on 15m / 30m / 1h. Macro firmed at rates and
              eased at credit: 10Y rose +4bp to 4.48% (5bp from its gate), HY OAS narrowed −1bp to
              2.74% (stays BELOW the 2.78% re-grow gate — the gate stays un-fired), DXY softened to
              100.85 but held EXTREME.{' '}
              <span className="dn-em">
                The operational fact is unchanged and still binding: the OKX monitor has now
                been frozen 377.4h (last row 2026-06-17 06:43Z), funding / OI / CVD / basis /
                retail are last-known and stale, and the SM positioning book has been dead
                ~20.94 days — SM net and the cut-fraction are non-computable. The second up-close
                is the first in the run not yet handed back into the next session by the 00:07Z cut
                (the 07-03 in-progress bar still holds near it, down only $107.50; the 07-03 daily
                close does not yet exist), and the gamma/price map
                is the most constructive the lineage has carried — but the tape that would say
                whether this is demand or thin short-cover is still down, and the engine is now
                flashing overbought reversal at the highs. The read is on price, gamma and MTF
                alone.
              </span>{' '}
              The book stays flat: the break is confirmed, the reclaim thesis is dead, and the
              extended bounce that pressed spot into the reclaim zone is — for all its
              improvement — unconfirmable on a blind tape and now met by an overbought reversal
              print at the highs. The scout&rsquo;s price pre-condition stays TRUE (spot +1.90%
              above the flip) and the reclaim zone is within reach, but the scout stays stood down.
              No shorts, no scout, no fresh hedge.
            </p>
            <p>
              BTC prints <span className="dn-tag">$61,433</span> at the parquet last bar
              (00:06Z),{' '}
              <span className="dn-tag bull">+2.58%</span> on 24h (vs the $59,890.60 bar
              exactly 24h prior — the 07-02 00:06Z parquet bar; the MTF scan reads +2.54%
              on its own 00:01Z window — the spread is the reference window, not a data
              conflict), inside a{' '}
              <span className="dn-tag">$62,180 / $59,555</span> 24h range (per the MTF
              scan H/L). The Deribit index reads $61,781 at 00:00Z and the MTF scan spot
              is $61,489 — so the freshest spot is well-corroborated across three
              independent fresh sources (parquet kline $61,433, GEX Deribit index $61,781,
              MTF scan $61,489), even though the live_db tape that normally supplies it is
              frozen at 06-17 06:43Z, 377.4h stale.{' '}
              <span className="dn-signal">The structural read has moved from a confirmed break
              with a SECOND bounce printing (07-02 note) to that same confirmed break with the
              bounce EXTENDED to a third session — the 07-02 daily close $61,540.60 is the first
              up-close in the run not yet handed back into the next session by the 00:07Z cut (the
              07-03 in-progress bar $61,433 still holds near it; the 07-03 daily close does not yet
              exist), and it pressed spot to
              −1.76% below the floor, right into the reclaim cluster</span>: the 22JUN weekly close
              $63,990 was the last weekly hold, the daily closes walked down through the line
              (06-22 → 06-28), the 06-29 weekly bar closed $60,224.70 below the floor to confirm
              the break, the 06-29 daily bar bounced, the 06-30 bar reversed it, and 07-01 → 07-02
              bounced twice in a row. Per the framework the break was confirmed at the weekly-close
              level and the 06-15 reclaim thesis falsified; nothing this cut un-does that — the
              extended bounce is a bounce inside a confirmed break until a weekly close reclaims
              the floor.{' '}
              <span className="dn-em">
                The one structural positive of the lineage is broken at the weekly-close level
                and the reclaim thesis is dead; spot holds no MA beneath it, but the extended
                bounce has now pressed it to within −1.93% of the floor with the book deeply
                long-gamma — the most constructive gamma/price map the lineage has carried. The
                desk reads it as a real improvement it cannot yet confirm as demand on a blind
                tape, and now the engine is flashing overbought reversal at the highs.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · LIVE TAPE FROZEN 377.4h (seventeenth day) · SM book dead ~20.94 days · funding/OI/flow last-known stale · the 07-02 up-close extended the bounce to a third session and by the 00:07Z cut had not been handed back into the next session (the 07-03 daily close does not yet exist), but the desk still cannot see whether it is demand absorbing the break or thin short-cover — the positioning tape is dark</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important source of this note — the live derivatives tape —
                is still down, a seventeenth calendar day running
              </span>. The OKX monitor has appended no row to live_db.json since{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> (t = &ldquo;06-17
              14:43&rdquo; BJ; the file mtime 06-17 06:43:08Z confirms the write stopped
              there; the process status is not archived or verified in this cut, so the note
              asserts the missing tape, not a live/hung process). That is now{' '}
              <span className="dn-tag bear">377.4h of missing tape</span> against the 00:07Z
              snapshot anchor — the 06-20 note flagged it at 65.4h, the 06-27 note at 233.4h,
              the 06-30 note at 305.4h, the 07-02 note at 353.4h, and the outage has run
              another ~24h without a write. Everything the live tape carries — funding, open
              interest, spot/futures CVD, perp basis, retail long%, taker-net, big-print flow,
              aggressor skew — is therefore{' '}
              <span className="dn-em">last-known at 06-17 06:43Z and not current</span>. The
              smart-money positioning triple (long_btc / short_btc / net_btc) has been
              byte-for-byte constant —{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> — since{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>, ~502.5h (~20.94 days).
              The 06-16 note flagged this dead feed at ~94.5h and put the squeeze-cycle ON
              HOLD; the 07-02 note carried it at ~478.5h; today it is ~502.5h and still dead.{' '}
              <span className="dn-em">
                SM net is non-computable as a current read, and the SM cut fraction (|Δ| /
                prior_net) cannot be formed — there is no current SM net to difference. Any
                positioning claim in this note is explicitly historical, not live.
              </span>
            </p>

            <p>
              For completeness, the <em>last-available</em> tape readings — all pinned to
              the 06-17 06:43Z freeze and now 377.4h out of date, and byte-for-byte the same
              readings the 06-19 → 07-02 notes carried because it is the same frozen row —
              are: funding <span className="dn-tag bear">−7.24% ann</span> (raw −0.006608 ×
              1095; shorts paying longs at the freeze), with the last-available path balanced
              two-sided over the 24h+1m inclusive sampled window (1,442 rows: mean{' '}
              <span className="dn-tag">+0.20% ann</span>, range{' '}
              <span className="dn-tag">−7.24% / +7.21%</span>, 819 / 1,442 rows negative); OI{' '}
              <span className="dn-tag bear">102,945 BTC, −468 over the trailing 24h+1m window
              (−0.45%)</span>; retail{' '}
              <span className="dn-tag">mkt_long_pct 59.47%</span> (a +1.18pt long add over
              that same window); perp basis{' '}
              <span className="dn-tag bear">−$57.43 discount</span> to spot.{' '}
              <span className="dn-em">
                Read this as a near-three-week-old fingerprint, not a signal: a two-sided
                funding book, OI bleeding, retail adding longs into the first leg of weakness.
                None of it can be carried forward to the 00:07Z snapshot — and it predates the
                entire 06-18 → 06-22 floor-hold sequence, the 06-23 → 06-28 leg that closed
                below the floor, the 06-29 weekly-close confirmation, the 06-30 reversal AND the
                07-01 → 07-02 two-session bounce, so it says nothing about whether the extended
                bounce is short-cover exhausting or demand absorbing the break. The desk treats
                the positioning dimension as unknown, and the extended bounce as
                positioning-unconfirmed.
              </span>
            </p>
            <h2 className="dn-sec">
              Structure <span className="dn-roman">II · price/MTF FRESH · multi-TF resonance mixed 3 bull / 6 bear / 1 neutral (IMPROVED by one from 2/6/2 — 30m reclaimed above cloud) · net read higher-TF bearish · short-term chop · 4h/8h/12h/1d GOLDEN crosses (water-down) hold, but 15m/30m/1h rolled to DEATH crosses (water-up) at the highs and a fresh ⚡4h TD9 SELL printed (overbought reversal hint) with top divs on 15m/30m/1h · 1M TD9 buy still prints · regime FLIPPED BACK to 5/9 cycle-reversal (JT&lt;0) · spot below every MA, the whole ladder overhead, the 200W floor $62,643 CONFIRMED broken, spot −1.93% below on a ninth close but tightened by the bounce</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map is fresh and improved by one at the headline (3 bull / 6 bear / 1
                neutral, 30m reclaimed above cloud) with the mid-frames (4h/8h/12h/1d) holding
                below-water golden crosses — but the fast frames rolled to death crosses at the
                highs, the regime classifier flipped BACK to cycle-reversal, and a fresh 4h TD9
                SELL printed an overbought reversal hint
              </span> — the one dimension, with the dealer map, the desk can still trust
              today, and this cut it reads as a topping tension into the bounce. The 00:01Z scan
              tags{' '}
              <span className="dn-tag">3 bull / 6 bear / 1 neutral across 10 frames</span>,
              net read <em>higher-timeframe bearish · short-term chop</em> — improved from
              the 07-02 scan&rsquo;s 2/6/2 as 30m reclaimed above cloud. The regime line reads{' '}
              <span className="dn-tag bear">5/9 cycle-reversal / mean-reversion regime (JT&lt;0)</span>{' '}
              (was 5/9 trend-continuation on 07-02), so the classifier flipped BACK from
              trend-continuation to mean-reversion — and the engine now carries a fresh overbought
              reversal print to act against, not a constructive trigger. The source-bias bull frames are the{' '}
              <span className="dn-tag">15m / 30m / 1M</span>, with{' '}
              <span className="dn-tag">1h above cloud but neutral in the source count</span> and the{' '}
              <span className="dn-tag">1M above cloud (TD9 buy printed at $61,489)</span> — the 1M
              TD9 buy is the one fresh oversold reversal hint carried forward. The topping signature
              is the print this cut:{' '}
              <span className="dn-tag bear">a fresh ⚡4h TD9 SELL at $61,491 (overbought reversal
              hint, at the highs)</span> with{' '}
              <span className="dn-tag bear">top (bearish-reversal) divergences on 15m / 30m /
              1h</span> and the fast frames rolling to{' '}
              <span className="dn-tag bear">above-water death crosses (15m 38 bars / 30m 16 bars /
              1h 4 bars)</span> — momentum rolling over from a high. The mid-frames still hold the
              constructive side:{' '}
              <span className="dn-tag">4h / 8h / 12h / 1d below-water golden crosses (9 / 5 / 3 / 2
              bars)</span> — all unconfirmed below-water probes — while the higher frames (8h → 1w)
              stay below cloud and the{' '}
              <span className="dn-tag bear">1w carries a below-water death cross (1 bar)</span>.
              Cloud: 30m / 1h / 1M above cloud, 15m / 4h in cloud, 8h → 1w below. The thin
              constructive set is the{' '}
              <span className="dn-tag">4h / 8h / 12h / 1d below-water golden crosses, a 1M TD9 buy,
              and bottom (bullish-reversal) divs on 1h / 8h</span> — set against the fresh 4h TD9
              SELL and top divs on 15m/30m/1h at the highs.{' '}
              <span className="dn-em">
                Straight read: the frame stack improved by one and the mid-frames (4h/8h/12h/1d)
                hold below-water golden crosses, but the fast frames (15m/30m/1h) rolled to
                above-water death crosses, the regime flipped back to mean-reversion, and a fresh
                4h TD9 SELL with top divs on 15m/30m/1h reads as an early topping signature into
                the bounce — at the highs, with the 200W floor confirmed broken and spot −1.93%
                below on a ninth close. The engine&rsquo;s constructive prints (mid-frame golden
                crosses, 1M TD9 buy, bottom divs 1h/8h) are now offset by an overbought reversal
                print, so there is no clean multi-frame turn to trade the break long against — and
                a reason to distrust the extension at these levels.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">61,492</td><td className="num neut">49.5</td><td className="bear">death (water-up) 38b</td><td className="neut">in cloud 61.1k–61.6k 8b</td><td>Sell 2</td><td>BEAR hid · BEAR reg (top) · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">61,486</td><td className="num">52.8</td><td className="bear">death (water-up) 16b</td><td className="bull">above ↓60.6k 69b</td><td>Buy 4</td><td>BEAR hid · BEAR reg (top) · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">61,490</td><td className="num">59.1</td><td className="bear">death (water-up) 4b</td><td className="bull">above ↓59.9k 33b</td><td>Buy 1</td><td>BEAR hid · BEAR reg (top) · BULL hid · BULL reg (bottom)</td></tr>
                <tr><td>4h</td><td className="num">61,491</td><td className="num">60.3</td><td className="bull">golden (water-dn) 9b</td><td className="neut">in cloud 60.3k–61.8k 4b</td><td className="bear">⚡TD9 SELL</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">61,486</td><td className="num neut">55.9</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑63.3k 29b</td><td>Sell 6</td><td>BEAR hid · BULL reg (bottom)</td></tr>
                <tr><td>12h</td><td className="num">61,486</td><td className="num neut">51.5</td><td className="bull">golden (water-dn) 3b</td><td className="bear">below ↑64.3k 83b</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">61,489</td><td className="num bear">43.7</td><td className="bull">golden (water-dn) 2b</td><td className="bear">below ↑68.6k 32b</td><td>Sell 2</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">61,489</td><td className="num bear">38.4</td><td className="neut">—</td><td className="bear">below ↑72.5k 10b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">61,485</td><td className="num bear">35.5</td><td className="bear">death (water-dn) 1b</td><td className="bear">below ↑99.5k 22b</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">61,489</td><td className="num bear">42.4</td><td className="neut">— (DIF water-dn)</td><td className="bull">above ↓47.0k 29b</td><td>TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (08:01 Beijing; rolling latest
                    file, archived verbatim at
                    /opt/desk-note/snapshots/2026-07-03-0007/). Net read{' '}
                    <em>higher-timeframe bearish · short-term chop (3 bull / 6 bear / 1
                    neutral)</em>; regime <em>5/9 cycle-reversal / mean-reversion regime
                    (JT&lt;0)</em>; active divergences{' '}
                    <em>reversal: top div 15m / 30m / 1h, bottom div 1h / 8h; hidden
                    (continuation): BEAR hid 15m / 30m / 1h / 4h / 8h / 1d, BULL hid 15m / 30m /
                    1h</em>. Header alerts:{' '}
                    <em>⚡4h TD9 SELL printed at $61,491 — overbought reversal hint (at the
                    highs)</em>,{' '}
                    <em>⚡1M TD9 BUY printed at $61,489 — oversold reversal hint</em>,{' '}
                    <em>1w below-water death cross (1 bar ago, DIF −5,878.7)</em>,{' '}
                    <em>1d below-water golden cross (2 bars ago, DIF −2,270.4)</em>,{' '}
                    <em>8h below-water golden cross (5 bars ago)</em>,{' '}
                    <em>12h below-water golden cross (3 bars ago)</em>. Scan spot
                    $61,489, 24h +2.54%, 24h H/L $62,180 / $59,555, qVol $14.41B. Closes are
                    in-progress bars; treat every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is the same deep overhead wall as 07-02, but the second up-close
              pressed spot right into the reclaim cluster, so the nearest lines tightened hard
              while every line stays overhead — for the ninth cut in the lineage{' '}
              <span className="dn-tag bear">every line on the matrix is overhead — there is
              no positive offset, no MA beneath spot</span>. $61,433 sits{' '}
              <span className="dn-tag bear">−1.00% below D-EMA20 $62,056</span> — the nearest
              line, still overhead — then{' '}
              <span className="dn-tag bear">−1.32% below D-SMA20 $62,252</span> and{' '}
              <span className="dn-tag bear">−1.93% below the full-history W-SMA200 200W floor
              $62,643</span> (unchanged this cut) — the three tightest to within 2% of spot. Above
              those, the cycle-proxy{' '}
              <span className="dn-tag bear">D-EMA50 $65,984 (−6.90%)</span>, then{' '}
              <span className="dn-tag bear">D-SMA50 $67,379 (−8.82%)</span>, then{' '}
              <span className="dn-tag bear">W-EMA200 $67,449 (−8.92%, seed)</span>, then a dense
              overhead band:{' '}
              <span className="dn-tag bear">D-EMA100 $69,781 (−11.96%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $70,347 (−12.67%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $70,639 (−13.03%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $71,051 (−13.54%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $72,040 (−14.72%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $72,971 (−15.81%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $73,862 (−16.83%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $74,954 (−18.04%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $75,883 (−19.04%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $75,894 (−19.05%)</span>. Far above and
              disused: W-EMA100 $80,179 (−23.38%), W-EMA50 $80,983 (−24.14%), W-SMA100
              $88,535 (−30.61%), W-SMA50 $88,679 (−30.72%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-03 00:06Z (close $61,433.10); offsets
                recomputed against that same last-bar close, which is the freshest available
                spot while the live tape is frozen. Displayed MA levels are $-rounded; offsets
                computed from exact series values. The displayed weekly ladder uses the 2023→
                subset (184 weekly bars), so W-SMA200 is non-computable there and W-EMA200
                $67,449 seeds from available history; the 200W floor $62,643 is recomputed
                separately from the full-history glob (356 completed weekly W-MON bars,
                INCLUDING the resolved 06-29 week and excluding the in-progress 07-06 week —
                unchanged from 07-02). Daily closes: 06-22 $63,990 (= the 22JUN weekly close),
                06-23 $62,697, 06-24 $61,051 (first close below the floor), 06-25 $59,772, 06-26
                $60,072, 06-27 $60,000, 06-28 $59,550, 06-29 $60,224.70 (the weekly close that
                confirmed the break), 06-30 $58,605.40 (the deepest of the run, −6.45%), 07-01
                $59,999.60 (an up-close +$1,394.20), 07-02 $61,540.60 (the ninth close below, an
                UP-close +$1,541.00 — the strongest of the run, and by the 00:07Z cut not yet
                handed back into the next session), 07-03 (in-progress, 5-min bar) $61,433 — the floor break stays
                confirmed and the extended bounce has pressed spot into the reclaim cluster.
              </span>
            </p>
            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DEEPENED to net-LONG-gamma aggregate +60.7M (was +12.0M on 07-02, +5.6M on 06-30) — the book DAMPENS the next move harder · the front three expiries are positive (front 3JUL26 0.3 DTE +19.55M, settles ~08:00Z today) and there is no material near-dated downside amplifier left — the 3JUL26 that was the −7.75M amplifier on 07-02 flipped positive as it rolled to the front; 6JUL26 3.3 DTE is a small −0.34M negative and the heaviest negative is far-dated 25SEP26 −3.03M · the flip stepped $59,811 → $60,286 and spot pushed +1.90% above · IV 42.8%</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book deepened its net-long-gamma posture: aggregate gamma rose from
                +12.0M to +60.7M net-LONG-gamma, so the book dampens the next move harder, and the
                flip reclaim widened as spot pushed further above the flip — the most constructive
                gamma backdrop the lineage has carried
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+60.7M / 1%</span> (was +12.0M on 07-02, −31.5M on
              07-01, +5.6M on 06-30); the book has whipsawed short → long → short → long → deeper
              long across the recent notes and now sits deeply net-long-gamma. The 0-γ flip stepped{' '}
              <span className="dn-tag">$59,811 → $60,286 (+$475)</span>, and spot $61,433 pushed
              further above it, so spot sits{' '}
              <span className="dn-tag bull">+1.90% above the flip</span>
              {' '}on spot-denominated math (61,433.10 / 60,286 − 1 = +1.903%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads +2.5% off its Deribit-index
              $61,781 ($348 above parquet spot), which is{' '}
              <span className="dn-tag bull">+2.48%</span>
              (61,781 / 60,286 − 1 = +2.479%) — both references above the flip, EXTENDED from
              +0.15% above on 07-02. The wall map is a positive ceiling above spot with a single
              put wall just below: the heaviest is{' '}
              <span className="dn-tag bull">$63k +16.90M</span> (heaviest wall, a positive ceiling
              above spot), with{' '}
              <span className="dn-tag bull">$62k +14.48M</span> just above,{' '}
              <span className="dn-tag bull">$64k +12.29M</span>,{' '}
              <span className="dn-tag bear">$60k −11.81M</span> (the put wall just BELOW spot),{' '}
              <span className="dn-tag bull">$66k +10.23M</span>,{' '}
              <span className="dn-tag bear">$56k −9.09M</span>,{' '}
              <span className="dn-tag bull">$65k +8.51M</span>,{' '}
              <span className="dn-tag bear">$55k −7.26M</span>,{' '}
              <span className="dn-tag bull">$80k +7.08M</span>,{' '}
              <span className="dn-tag bear">$50k −6.35M</span>.{' '}
              <span className="dn-em">
                Critically, the aggregate is deeply net-LONG-gamma, so the book dampens the
                next move harder rather than amplifying it — a deepening of the +12.0M book of
                07-02 and the most constructive gamma backdrop the lineage has carried. Spot at
                $61,433 sits below the $62k +14.48M / $63k +16.90M positive ceilings (which bracket
                the D-SMA20 $62,252 / floor $62,643 reclaim zone) and above the $60k −11.81M put
                wall; the positive ceiling caps the bounce just overhead at the reclaim zone, while
                the single put wall below is the near shelf. A deeply long-gamma book above the
                flip with no material near-dated downside amplifier is the most constructive gamma structure
                of the run — but the tape that would say whether the price move under it is demand
                is still down, and the MTF engine is flashing overbought reversal at the highs.
              </span>{' '}
              By expiry the near-dated concentration is positive but for a small 6JUL26 negative: the front is the positive
              3JUL26{' '}
              <span className="dn-tag bull">0.3 DTE at +19.55M (settles ~08:00Z today — the same
              expiry that was the −7.75M near-dated downside amplifier on 07-02, flipped positive as
              it rolled to the front)</span>, then 4JUL26 1.3{' '}
              <span className="dn-tag bull">+5.25M</span>, 5JUL26 2.3 +1.89M, 6JUL26 3.3 −0.34M,
              10JUL26 7.3{' '}
              <span className="dn-tag bull">+13.88M</span>, 17JUL26 14.3{' '}
              <span className="dn-tag bull">+15.15M</span>, 24JUL26 21.3 +1.30M, 31JUL26 28.3{' '}
              <span className="dn-tag bull">+10.71M</span>, 28AUG26 56.3 +3.01M, 25SEP26 84.3{' '}
              <span className="dn-tag bear">−3.03M</span>, 25DEC26 175.3 +0.65M, 26MAR27 266.3
              +0.43M, 25JUN27 357.3 +0.51M. The 2JUL26 front settled ~08:00Z yesterday; the
              near-dated downside amplifier that the 07-01 note had seen blow out to −21.15M and the
              07-02 note carried at 3JUL26 −7.75M has now flipped positive (+19.55M) as 3JUL26
              rolled to the front — the concentrated short-dated downside is gone, and the only
              negative expiry of size is the far-dated 25SEP26 −3.03M. (The spot-referenced
              aggregate +60.7M is the net GEX at spot; the by-expiry rows are an independent
              decomposition and need not sum to it.)
            </p>

            <p>
              IV median across 926 instruments is{' '}
              <span className="dn-tag">42.8%</span> (eased from 44.5% / 878 instruments
              on 07-02) against 30D close-to-close RV of{' '}
              <span className="dn-tag">37.55%</span> — chain-level richness{' '}
              <span className="dn-tag">~+5.25pt</span> over realised (was ~+5.92pt on 07-02 —
              richness NARROWED as both IV and RV eased on the second up-close), with RV easing
              further off its recent highs (37.55% today vs 38.58% on 07-02 and 24.91% on 05-31 —
              still elevated, but the two up-closes pulled 30D realised down). A chain-median across
              926 instruments, <span className="dn-em">not</span>
              {' '}a tradable spread; expiry-/strike-level vega, skew and term structure remain
              not loaded; the vol read stays framework-only. RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log returns (= 31
              consecutive daily closes) anchored to parquet last bar 2026-07-03 00:06Z. P/C
              ratio 0.57, Call OI 234,322 / Put OI 133,532 BTC.
            </p>
            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · ~1.85h render — 10Y +4bp to 4.48% (5bp from the gate), TIPS 2.25% EXTREME RISK-OFF, HY OAS 2.74% −1.0bp stays BELOW its 2.78% re-grow gate (the gate STILL does not fire), MOVE 68.6 (loose) · the FX legs softened but firm: DXY 100.85 (still EXTREME) and USD/JPY 162.54 · regime LOOSENED further to IDIOSYNCRATIC (mean |r| 0.192), BTC +3.28% now LEADS NQ by +3.14pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro panel render is ~1.85h lagged and the read is mixed: rates firmed +4bp
                toward their gate (10Y 4.48%, 5bp away) while the credit spread narrowed another
                −1bp to 2.74% and stayed BELOW its 2.78% re-grow gate — the gate stays un-fired —
                and the dollar softened but held 100.85 EXTREME
              </span>. Dashboard render is 2026-07-02 22:15Z, ~1.85h before the snapshot. US
              10Y nominal <span className="dn-tag">4.48% (+4.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.51</span> — tight regime, RISK-OFF, 5bp from
              the 4.53% gate (the nearer leg now). 10Y TIPS real{' '}
              <span className="dn-tag">2.25% (+5.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.56</span> — EXTREME RISK-OFF, among the tightest
              lines on the panel. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.20% (−2.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag">2.23% (−1.0bp)</span> — inflation expectations soft.
              HY OAS{' '}
              <span className="dn-tag bull">2.74% (−1.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−0.99</span> — credit loose on the z-regime; the
              spread narrowed another −1bp and stays BELOW its 2.78% re-grow gate (it fired at
              2.83% on 06-30 and 2.80% on 07-01, then dropped under to 2.75% on 07-02 — this cut it
              holds under at 2.74%, so the credit re-grow gate STILL does not fire). MOVE bond vol
              is{' '}
              <span className="dn-tag">68.6</span> — the source tags +1.77 on its own 1d
              delta, still &ldquo;loose&rdquo; (unchanged from 07-02). The dollar softened but held
              EXTREME: DXY{' '}
              <span className="dn-tag bear">100.85 (−0.54 day)</span>, regime z{' '}
              <span className="dn-tag bear">+2.12</span>, off the day but still extreme. Fed
              net liquidity{' '}
              <span className="dn-tag bull">$5.843T (+0.053T)</span>, regime z{' '}
              <span className="dn-tag">−0.60</span> — a FRESH weekly print, net liquidity added.
              USD/JPY{' '}
              <span className="dn-tag">162.54 (−0.09 day)</span>, regime z +1.68; US-JP 10Y
              spread{' '}
              <span className="dn-tag">1.83% (+4.0bp)</span> narrow;
              USD/CNY <span className="dn-tag">6.7881</span>; WTI{' '}
              <span className="dn-tag">$71.9 (+1.6 day)</span>.{' '}
              <span className="dn-em">
                Net: the macro backdrop stayed risk-off on the z-panel (rates tight and firming,
                TIPS EXTREME, dollar EXTREME) but the credit margin held loose — the credit leg
                narrowed another −1bp to 2.74% and stays BELOW the 2.78% re-grow gate, so the
                credit gate that fired on the 06-28 → 07-01 notes stays un-fired for a second cut;
                the rates leg firmed +4bp to 4.48% and now sits only 5bp from its 4.53% gate, the
                nearer leg. The reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE at 4.48%,
                with less room. The macro read still reinforces rather than refutes the confirmed
                break — a broad risk-off z-panel — but the fresh moves are two-sided: the credit
                gate stays un-fired and the correlation regime loosened further as BTC led NQ (see
                cross-asset below), while rates firmed toward their gate.
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
                <tr><td>US 10Y nominal</td><td className="num">4.48%</td><td className="num bear">+4.0bp</td><td className="num bear">+1.51</td><td className="bear">tight · RISK-OFF · 5bp from gate</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.25%</td><td className="num bear">+5.0bp</td><td className="num bear">+2.56</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.20%</td><td className="num bull">−2.0bp</td><td className="num">−0.39</td><td className="neut">soft</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.23%</td><td className="num bull">−1.0bp</td><td className="num">−1.56</td><td className="neut">soft</td></tr>
                <tr><td>HY OAS</td><td className="num">2.74%</td><td className="num bull">−1.0bp</td><td className="num bull">−0.99</td><td className="bull">stays BELOW the 2.78% re-grow gate — gate still does not fire</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.504</td><td className="num">−0.00</td><td className="num">+0.40</td><td className="stale">weekly · neutral · now stale ~13d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">68.6</td><td className="num bear">+1.77</td><td className="num bull">−0.62</td><td className="bull">loose</td></tr>
                <tr><td>DXY</td><td className="num">100.85</td><td className="num bull">−0.54</td><td className="num bear">+2.12</td><td className="bear">EXTREME RISK-OFF · softened but firm</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.843T</td><td className="num bull">+0.053T</td><td className="num">−0.60</td><td className="neut">added · fresh weekly print</td></tr>
                <tr><td>USD/JPY</td><td className="num">162.54</td><td className="num bull">−0.09</td><td className="num bear">+1.68</td><td className="bear">firm</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.83%</td><td className="num">+4.0bp</td><td className="num bull">−1.00</td><td className="neut">narrow</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7881</td><td className="num">−0.01</td><td className="num bull">−1.39</td><td className="neut">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>
            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.192</span> — loosened further from the
              0.239 of 07-02 to sit{' '}
              <span className="dn-tag">well below the 0.25 idiosyncratic threshold</span>, so the
              regime line stays{' '}
              <span className="dn-signal">IDIOSYNCRATIC — BTC is now well decoupled by correlation
              from the broad cross-asset complex</span>, with its top ties a tight band of the
              equity / metals cluster all near +0.40: PALL{' '}
              <span className="dn-tag">+0.407</span>, NQ{' '}
              <span className="dn-tag">+0.406</span>, NVDA{' '}
              <span className="dn-tag">+0.405</span>, PLAT{' '}
              <span className="dn-tag">+0.400</span>, URNM{' '}
              <span className="dn-tag">+0.394</span>, SP500{' '}
              <span className="dn-tag">+0.392</span>, SILVER{' '}
              <span className="dn-tag">+0.349</span>, GOLD{' '}
              <span className="dn-tag">+0.320</span>, TSLA{' '}
              <span className="dn-tag">+0.248</span>, COPPER{' '}
              <span className="dn-tag">+0.246</span>, JP225{' '}
              <span className="dn-tag">+0.210</span>, with JPY{' '}
              <span className="dn-tag">−0.149</span> inverse and CL{' '}
              <span className="dn-tag">+0.019</span> / BRENT{' '}
              <span className="dn-tag">+0.026</span> near-zero. And the 7d performance flipped the
              BTC-vs-NQ framing: BTC now leads NQ/SP500 and is no longer a laggard —{' '}
              <span className="dn-tag bull">BTC +3.28%</span> is ahead of NQ{' '}
              <span className="dn-tag bull">+0.14%</span> by +3.14pt (it was a −1.60pt lag on
              07-02 and a −9.29pt lag on 07-01) and ahead of SP500 +1.75%, though several mega-caps
              and metals sit further ahead — the leaders are the mega-caps AAPL{' '}
              <span className="dn-tag bull">+11.25%</span>, MSFT{' '}
              <span className="dn-tag bull">+9.92%</span>, META{' '}
              <span className="dn-tag bull">+7.33%</span>, AMZN{' '}
              <span className="dn-tag bull">+6.99%</span> and the metals PALL{' '}
              <span className="dn-tag bull">+6.22%</span>, SILVER{' '}
              <span className="dn-tag bull">+6.00%</span>, with TSLA{' '}
              <span className="dn-tag bull">+5.91%</span>, GOOGL{' '}
              <span className="dn-tag bull">+4.83%</span>, GOLD{' '}
              <span className="dn-tag bull">+2.65%</span>, BTC{' '}
              <span className="dn-tag bull">+3.28%</span>, SP500{' '}
              <span className="dn-tag bull">+1.75%</span>, PLAT{' '}
              <span className="dn-tag bull">+1.73%</span>, COPPER{' '}
              <span className="dn-tag bull">+1.23%</span> all green; the reds are energy and Japan
              — BRENT{' '}
              <span className="dn-tag bear">−5.19%</span>, CL{' '}
              <span className="dn-tag bear">−4.82%</span>, JP225{' '}
              <span className="dn-tag bear">−2.78%</span>, NGAS{' '}
              <span className="dn-tag bear">−2.15%</span>, URNM{' '}
              <span className="dn-tag bear">−1.01%</span>, with NVDA{' '}
              <span className="dn-tag bear">−0.01%</span> flat.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d return +3.28% vs NQ +0.14% is a lead of +3.14pt (was a −1.60pt lag
                on 07-02, −9.29pt on 07-01) — the gap to NQ has flipped from a deep lag to a clear
                lead across three sessions, and this cut it settles the
                framing: BTC is no longer the laggard and now leads NQ/SP500 (though several
                mega-caps and metals are further ahead), and
                the correlation regime loosened further below the 0.25 line to idiosyncratic. So
                the sharp risk-off / worst-performer read the earlier lineage carried is fully
                unwound — BTC is neither statistically coupled at the threshold nor a laggard this
                cut. The macro z-panel still reads risk-off (rates tight and firming, DXY EXTREME),
                but the cross-asset regime loosened and BTC led NQ, so the two cross-market reads
                diverge from the tight macro z-panel.
              </span>{' '}
              JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag — do not lean on it.
            </p>
            <h2 className="dn-sec">
              Trade book <span className="dn-roman">V · book FLAT · 200W floor — BREAK CONFIRMED on the 06-29 weekly close ($60,224.70 &lt; $62,643, −3.86%), 06-15 reclaim thesis FALSIFIED; the 07-02 up-close EXTENDED the bounce to a third session (not yet handed back into the next session by the 00:07Z cut; the 07-03 daily close does not yet exist), pressing spot to −1.93% below the floor into the reclaim cluster · scout price pre-condition stays TRUE (spot +1.90% above the flip) — scout STILL stood down (tape blind ~20.94 days, no confirmed engine trigger — the engine now flashes a 4h TD9 SELL at the highs — and no MA beneath spot) · macro tail credit gate STILL un-fired (OAS 2.74% &lt; 2.78%) · squeeze-cycle ON HOLD (SM dead ~20.94 days)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — the structural positive of the lineage is
                resolved AGAINST it (200W break confirmed on the weekly close, reclaim thesis
                falsified), the 07-02 up-close extended the constructive gamma/price map to a third
                session, and the binding constraint is still data integrity — with a fresh caution
                as the engine flips to overbought reversal at the highs
              </span>. The 06-29 weekly close settled $60,224.70, −3.86% below the $62,643
              floor — the break is CONFIRMED and the 06-15 reclaim thesis FALSIFIED, and
              nothing this cut un-does that. The 07-02 note recorded a SECOND bounce (the 06-30
              first bounce was handed back on 07-01); this cut that bounce EXTENDED — the 07-02
              daily close $61,540.60 was an up-close +$1,541.00, the strongest of the run and, by
              the 00:07Z cut, not yet handed back into the next session (the 07-03 in-progress bar
              still holds near it, down only $107.50; the 07-03 daily close does not yet exist),
              pressing spot to −1.76% below the floor and
              into the reclaim cluster. The dealer book deepened to +60.7M net-long-gamma, the front
              three expiries flipped positive with no material near-dated downside amplifier left (6JUL26 a small −0.34M negative), and spot
              pushed to +1.90% above the flip. The scout&rsquo;s price pre-condition stays TRUE —
              spot is well above the flip and the reclaim zone is within −1.93% — so the price leg
              is open and improving. But the desk still takes no scout: the tape that would confirm
              demand is blind, there is no MA beneath spot, and the engine has now flipped to a
              cycle-reversal regime with a fresh 4h TD9 SELL (overbought reversal) and top divs on
              15m/30m/1h AT the highs — chasing the extension here, into an overbought reversal
              print on a blind tape, is a poor entry. No new short either: the book is deeply
              long-gamma, the flip is +1.90% reclaimed, spot is only −1.93% below the floor, and a
              1M TD9 buy still prints — a poor place to press short. The trade book today is: no
              shorts, no scout, no fresh hedge — fix the tape before reading whether the extended
              bounce is short-cover or demand.
            </p>
            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch — BREAK CONFIRMED: the 06-29 weekly close $60,224.70 settled −3.86% below the $62,643 floor (the weekly-close escalation FIRED), the 06-15 reclaim thesis is FALSIFIED; the 07-02 up-close EXTENDED the bounce to a third session, pressing spot to −1.93% below the floor into the reclaim cluster; nine consecutive daily closes below (06-24 → 07-02)</span>
              <div className="dn-trade-name">
                200W cycle floor watch — the break is CONFIRMED on the 06-29 weekly close and the bounce EXTENDED into the reclaim cluster: floor $62,643 = full-history W-SMA200 (356 completed weekly bars, unchanged this cut), 06-29 weekly close $60,224.70 (−3.86% below) confirmed the break, the 07-02 daily close $61,540.60 (an up-close +$1,541.00, the strongest of the run) pressed spot to −1.76% below the floor, the 06-15 reclaim thesis FALSIFIED
              </div>
              <div className="dn-thesis">
                The 07-02 note recorded the break confirmed on the 06-29 weekly close with a
                second bounce printing. This cut the bounce extended: the 07-02 daily bar closed{' '}
                <span className="dn-tag bull">$61,540.60, −1.76% below the $62,643 floor</span>,
                an up-close +$1,541.00 that was the strongest of the run and, by the 00:07Z cut,
                not yet handed back into the next session (the 07-03 in-progress bar still holds
                near it; the 07-03 daily close does not yet exist), pressing spot into the D-EMA20 / D-SMA20 / floor
                reclaim cluster. Per the framework an intraday wick is not the break, a daily close
                below is the early warning, and a sustained weekly close below is the escalation
                that breaks the floor and falsifies the 06-15 reclaim thesis — that weekly close
                printed on 06-29, so the break stays CONFIRMED and the reclaim thesis FALSIFIED.
                The 22JUN weekly close $63,990 was the last weekly hold; it remains superseded.{' '}
                <span className="dn-em">The structural positive of the lineage stays resolved
                against it at the weekly-close level; spot holds no MA beneath it, the floor
                — unchanged at $62,643 — is confirmed resistance now within −1.93%, and the
                extended bounce is a bounce inside a confirmed break until a weekly close reclaims
                the floor.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor (unchanged)</span><span className="dn-lvl-v">$62,643 = full-history W-SMA200, recomputed this cut from the 2019→ parquet glob (356 completed weekly W-MON bars, INCLUDING the resolved 06-29 week and excluding the in-progress 07-06 week); unchanged from the 07-02 note, the 06-29 week resolved three cuts ago · weekly_200sma.json absent so the ratio percentile / last-event stay unsourced, not fabricated</span></div>
                <div><span className="dn-lvl-k">break — CONFIRMED, bounce EXTENDED</span><span className="dn-lvl-v bear">06-29 weekly close $60,224.70 settled −3.86% below the floor — the break is confirmed; nine consecutive daily closes below (06-24 $61,051 −2.54%, 06-25 $59,772 −4.58%, 06-26 $60,072 −4.10%, 06-27 $60,000 −4.22%, 06-28 $59,550 −4.94%, 06-29 $60,224.70 −3.86%, 06-30 $58,605.40 −6.45% the deepest, 07-01 $59,999.60 −4.22%, 07-02 $61,540.60 −1.76% the strongest up-close); the last two are up-closes, 07-02 not yet handed back into the next session by the 00:07Z cut (the 07-03 daily close does not yet exist), but both stayed below the floor</span></div>
                <div><span className="dn-lvl-k">reclaim thesis — FALSIFIED</span><span className="dn-lvl-v bear">the 06-15 reclaim thesis required the floor to hold on a weekly-close basis; the 06-29 weekly close below the floor falsifies it — the prior 22JUN weekly hold ($63,990) is superseded</span></div>
                <div><span className="dn-lvl-k">reclaim ladder (now the recovery path)</span><span className="dn-lvl-v bear">spot is +1.90% above the flip $60,286 (extended), −1.00% below D-EMA20 $62,056, −1.32% below D-SMA20 $62,252, −1.93% below the floor $62,643 — no MA beneath spot, but the cluster tightened to within 2%; a structural recovery is a sustained weekly close back above the floor $62,643 (the level the break must un-do), with D-EMA20 $62,056 and D-SMA20 $62,252 as the way-stations — NOT a scout trigger on a blind tape (see scout)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework, not a trade.</b> The floor watch is the single load-bearing
                live level while everything else is stale or framework-only. The break is
                confirmed on the weekly close, the reclaim thesis is falsified, and the bounce
                extended into the reclaim cluster — no position is taken on the watch: it sets the
                confirmed break (06-29 weekly close $60,224.70 &lt; $62,643), the recovery
                condition (a sustained weekly close back above the floor $62,643), and the reclaim
                way-stations (flip $60,286 → D-EMA20 $62,056 → D-SMA20 $62,252 → floor $62,643),
                and the desk will not chase an extended bounce long into a blind tape with the
                engine flashing overbought reversal at the highs, nor press short a confirmed break
                only −1.93% below the floor into a deeply long-gamma book with the flip reclaimed
                and a 1M TD9 buy printed.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STILL STOOD DOWN · price pre-condition stays TRUE (spot +1.90% above the flip, extended from +0.15% on 07-02) and the book DEEPENED net-long-gamma — the most constructive price/gamma map of the run; but tape blind ~20.94 days + no confirmed engine trigger (the engine now flashes a 4h TD9 SELL at the highs) + no MA beneath spot still bind</span>
              <div className="dn-trade-name">
                Cover-bounce scout — the flip reclaim stays TRUE (spot +1.90% above) and the book deepened net-long-gamma, the price leg open and improving; the scout stays stood down on a blind tape, with the engine now flashing an overbought reversal at the highs and no MA beneath spot
              </div>
              <div className="dn-thesis">
                The 06-30 note saw the scout&rsquo;s price pre-condition flip TRUE, the 07-01 note
                saw it flip back FALSE as the first bounce failed, and the 07-02 note saw it flip
                back TRUE on the second bounce. This cut it stays TRUE and extended: spot is{' '}
                <em>+1.90% above the flip</em> $60,286 (which stepped +$475), has pressed into the
                reclaim cluster, and the dealer book deepened to +60.7M net-long-gamma with no
                material near-dated downside amplifier left. So the price and gamma legs are the most
                constructive of the run. But the scout stays stood down, and this cut for a fresh
                reason: the confirming legs remain absent AND the engine turned against the entry.
                (1) The positioning legs (SM short bleed, funding posture, cover-flow) all require
                a live tape, and there is none — the desk cannot see whether the extended bounce is
                short-cover exhausting or demand absorbing. (2) The engine carries no confirmed
                constructive trigger — the regime flipped BACK to cycle-reversal and a fresh 4h TD9
                SELL (overbought reversal hint) printed at $61,491 with top divs on 15m/30m/1h at
                the highs, offsetting the mid-frame golden crosses and the 1M TD9 buy. (3) There is
                still no MA beneath spot — spot is above the flip but below D-EMA20, D-SMA20 and the
                floor.{' '}
                <span className="dn-em">A scout long on a positioning-blind tape, with no confirmed
                engine print and now an overbought reversal signature at the highs, is not a trade —
                the price leg is open and improving, but chasing an extended bounce into a 4h TD9
                SELL on a blind tape is exactly the entry the desk stands down. The 1M TD9 buy is a
                real oversold hint worth recording, but it is offset by the 4h TD9 SELL at these
                levels.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">stood down · no entry · price pre-condition stays TRUE (spot +1.90% above the flip, extended from +0.15% on 07-02) and the book is deeply net-long-gamma, but no MA beneath spot, tape blind, engine now flashing an overbought reversal (4h TD9 SELL); re-evaluate only after the live tape is restored AND a confirming engine print</span></div>
                <div><span className="dn-lvl-k">technical pre-condition</span><span className="dn-lvl-v bear">flip $60,286 reclaim (TRUE — spot +1.90% above) BUT D-EMA20 $62,056 / D-SMA20 $62,252 / floor $62,643 reclaim false (spot below all, no MA beneath spot) AND a confirming engine print (NOT true — 3 bull / 6 bear / 1 neutral, mid-frame below-water golden crosses and a 1M TD9 buy offset by a fresh 4h TD9 SELL and top divs on 15m/30m/1h; regime is cycle-reversal)</span></div>
                <div><span className="dn-lvl-k">data pre-condition</span><span className="dn-lvl-v bear">live tape restored (currently 377.4h frozen) AND SM feed live (currently dead ~20.94 days) — both must hold before any positioning leg can be read; this is the binding block</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> no scout entry without a live positioning tape. The 1M TD9
                buy, the mid-frame below-water golden crosses, the bottom divs and the reclaimed
                flip do not trigger a scout while the SM / funding / flow legs are blind, spot is
                below D-EMA20 / the floor / D-SMA20 with no MA beneath it, and the engine now
                carries an overbought reversal print (4h TD9 SELL) at the highs — the desk does not
                size into a cover-bounce it cannot see being covered, especially an extended one now
                met by a reversal signature. The price block that lifted on 06-30, re-closed on
                07-01 and re-opened on 07-02 stays open and improving; the operational block (tape
                down) and the engine block (no confirmed trigger, now an overbought reversal) still
                bind.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — credit leg STILL un-fired: HY OAS 2.74% &lt; the 2.78% gate (narrowed another −1.0bp this cut, stays below), 10Y leg 5bp away (4.48% vs 4.53% gate); the credit leg holds under its trigger, the rates leg firmed nearer</span>
              <div className="dn-trade-name">
                Downside put-spread — re-grow credit gate STILL un-fired (OAS 2.74% &lt; 2.78%), the rates leg 5bp away; no hedge added (the dealer book deepened net-long-gamma with no material near-dated amplifier left, so the endogenous downside structure eased further even as the rates leg firmed toward its gate)
              </div>
              <div className="dn-thesis">
                The macro re-grow gate the lineage carries — HY OAS &gt; 2.78% OR 10Y &gt;
                4.53% as the condition to re-grow a downside tail — is STILL un-fired on the
                credit leg: HY OAS{' '}
                <em>2.74%</em>, −1bp this cut and holding below the gate (it fired at 2.83% on
                06-30 and 2.80% on 07-01, then dropped under to 2.75% on 07-02 — this cut it holds
                under at 2.74%), while the 10Y firmed +4bp to 4.48% and sits 5bp away — the nearer
                leg now. So both legs are off their triggers, but the rates leg is closing. The
                reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE at 4.48%, with less room. The
                macro tape is still a risk-off impulse on the z-panel (rates tight and firming,
                TIPS EXTREME, dollar EXTREME), but a macro tail is not the right instrument for an
                endogenous-cum-idiosyncratic floor break, and the dealer book has deepened to
                net-long-gamma with no material near-dated amplifier left, so the endogenous downside
                structure eased further this cut — which, with the credit gate un-fired, is a reason
                to stand the tail down, not to add it.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bull">no position · credit gate STILL un-fired on a close basis · HY OAS 2.74% &lt; 2.78% (−1.0bp, stays below), 10Y leg 5bp away</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (un-fired)</span><span className="dn-lvl-v bull">HY OAS &gt; 2.78% close — STILL UN-FIRED at 2.74% (narrowed another −1.0bp below the gate) · OR 10Y &gt; 4.53% close (currently 4.48%, 5bp to fire — the nearer leg, firming, but still off)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — TRUE at 4.48%; awaits a BTC-internal pivot AND a live tape to translate</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as the levels
                drift, not backtested breakpoints. The credit leg holds under the gate
                (OAS 2.74% &lt; 2.78%) and the rates leg sits 5bp away and firming; with neither
                leg fired there is no tail to grow this cut; note the dealer book has deepened to
                net-long-gamma with no material near-dated amplifier left, so the endogenous downside
                structure eased further even as the rates leg firmed toward its gate — the tail
                stands down.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · ON HOLD — SM feed DEAD ~20.94 days, the re-stack signature cannot be read this cut</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — ON HOLD (continuation of 06-16 → 07-02): the SM feed is frozen ~502.5h, the re-stack signature cannot be read this cut
              </div>
              <div className="dn-thesis">
                The squeeze-cycle / re-stack-hostile-2 framework reads discrete SM steps
                (Δshort &gt; 0 + Δlong &lt; 0 same minute) as continuation signatures; its
                calendar prior (the BJ 13–15 cadence) was falsified on 05-31 and it has run as
                a no-prior watchlist since. It cannot be assessed today for the simplest
                reason: the SM feed is dead. long_btc / short_btc / net_btc have been constant
                since 2026-06-12 01:36Z (~502.5h), so there are no SM deltas to read. The
                06-16 note put this ON HOLD at ~94.5h, the 07-01 note at ~454.5h, the 07-02
                note at ~478.5h; it remains ON HOLD at ~502.5h.{' '}
                <span className="dn-em">No signature can print from a frozen feed; the
                framework is dark until the SM data resumes.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v bear">ON HOLD · SM feed frozen ~502.5h (since 2026-06-12 01:36Z) · no SM deltas computable</span></div>
                <div><span className="dn-lvl-k">frozen value (not a read)</span><span className="dn-lvl-v">long 13,532.4 / short 50,825.7 / net −37,293.3 — byte-for-byte constant, carried only to mark the dead feed</span></div>
                <div><span className="dn-lvl-k">resume condition</span><span className="dn-lvl-v">SM feed resumes writing fresh long_btc/short_btc → re-assess re-stack signatures from the first fresh deltas</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a dead feed is not a quiet feed. The desk does
                not infer &ldquo;no re-stack&rdquo; from a frozen triple — it infers nothing.
                The squeeze-cycle read is suspended, not negative, and the first fresh SM
                deltas after the feed resumes are the re-arm point.
              </div>
            </div>
            <h2 className="dn-sec">
              Decision conditions <span className="dn-roman">VI · LIVE TAPE OUTAGE still the operative condition (seventeenth day) · 200W floor BREAK CONFIRMED on the 06-29 weekly close ($60,224.70 &lt; $62,643, −3.86%), 06-15 reclaim thesis FALSIFIED, the 07-02 up-close EXTENDED the bounce to a third session · flip EXTENDED (spot +1.90% above), book DEEPENED to +60.7M net-LONG-gamma with no material near-dated amplifier left · scout price pre-condition stays TRUE but the engine flipped to cycle-reversal with a 4h TD9 SELL at the highs · macro credit gate STILL un-fired (OAS 2.74%), regime LOOSENED further to IDIOSYNCRATIC as BTC LED NQ by +3.14pt</span>
            </h2>

            <p>
              Of the 07-02 conditions: the live tape did <em>not</em> come back — it is ~24h
              deader, now 377.4h frozen with the SM feed at ~20.94 days; the 200W floor break
              stays CONFIRMED on the 06-29 weekly close ($60,224.70, −3.86% below the $62,643
              floor) and the 06-15 reclaim thesis stays FALSIFIED; the floor is unchanged this
              cut ($62,643, the 06-29 week resolved three cuts ago); the second bounce the 07-02
              note recorded EXTENDED — the 07-02 daily close $61,540.60 was an up-close +$1,541.00,
              the strongest of the run and, by the 00:07Z cut, not yet handed back into the next
              session (the 07-03 daily close does not yet exist); the flip was
              EXTENDED (spot +1.90% above vs +0.15% on 07-02) as the flip stepped to $60,286; the
              dealer book DEEPENED from +12.0M to +60.7M net-LONG-gamma — it dampens the next move
              harder, with no material near-dated downside amplifier left (front 3JUL26 +19.55M; 6JUL26 a small −0.34M negative); the
              scout&rsquo;s price pre-condition stays TRUE but the engine flipped BACK to
              cycle-reversal with a fresh 4h TD9 SELL (overbought reversal) at the highs; the macro
              re-grow gate stays un-fired on the credit leg (OAS 2.74% &lt; 2.78%) while the rates
              leg firmed to 4.48% (5bp away); the correlation regime loosened further to
              IDIOSYNCRATIC as BTC&rsquo;s 7d return LED NQ by +3.14pt; the squeeze-cycle stayed ON
              HOLD on a deader feed. The dominant condition is unchanged: <em>the desk is
              positioning-blind, into a 200W floor break CONFIRMED on the weekly close, an extended
              bounce that pressed spot into the reclaim cluster, and a book that has deepened
              net-long-gamma — none of which it can confirm against the tape, and now met by an
              overbought reversal print at the highs</em>. The conditions today re-set around the
              continuing outage, the confirmed weekly-close break, the extended bounce, and the
              deepened net-long-gamma book:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Live tape restored (PRIMARY operational)</td><td className="bull">live_db.json resumes writing fresh rows beyond 2026-06-17 06:43Z AND the SM triple updates off its 06-12 01:36Z freeze</td><td>re-read funding / OI / flow / SM in full; only then can the scout or squeeze-cycle be evaluated — and only then can the extended bounce be confirmed as short-cover exhausting vs demand absorbing; the positioning dimension has now been blind fifteen notes running</td></tr>
                <tr><td>200W floor — BREAK CONFIRMED, bounce EXTENDED</td><td className="bear">06-29 weekly close $60,224.70 settled −3.86% below the $62,643 floor — the break is confirmed; nine consecutive daily closes below (06-24 → 07-02), the 06-30 close $58,605.40 the deepest (−6.45%), the 07-02 close $61,540.60 the strongest up-close (−1.76%) and, by the 00:07Z cut, not yet handed back into the next session (the 07-03 daily close does not yet exist); in-progress 07-03 bar $61,433, −1.93% below</td><td>the floor break is confirmed at the weekly-close level and the bounce extended into the reclaim cluster — the floor ($62,643) is confirmed resistance now within −1.93%; no position taken</td></tr>
                <tr><td>200W reclaim thesis — FALSIFIED</td><td className="bear">the 06-15 reclaim thesis required a weekly-close hold of the floor; the 06-29 weekly close below falsifies it — the prior 22JUN weekly hold ($63,990) is superseded</td><td>the reclaim thesis is dead; a structural recovery now requires a sustained weekly close back above the floor $62,643; watch that weekly close</td></tr>
                <tr><td>Flip reclaim (scout price pre-condition) — EXTENDED</td><td className="bull">spot $61,433 +1.90% above flip $60,286, but −1.00% below D-EMA20 $62,056, −1.93% below the floor $62,643; no MA beneath spot; the flip sits below the floor</td><td>the price pre-condition stays TRUE and improving; but a scout still needs the live tape restored AND a confirming engine print — and the engine now flashes a 4h TD9 SELL (overbought reversal) at the highs; on a blind tape with no MA beneath spot the extension is recorded, not traded</td></tr>
                <tr><td>Dealer book — DEEPENED net-LONG-gamma</td><td className="bull">aggregate GEX +60.7M (was +12.0M on 07-02, +5.6M on 06-30); the front is 3JUL26 0.3 DTE at +19.55M (settles ~08:00Z today); NO near-dated downside amplifier left (heaviest negative far-dated 25SEP26 −3.03M); spot sits below the $62k +14.48M / $63k +16.90M positive ceilings and above the $60k −11.81M put wall</td><td>the dealer book now DAMPENS the next move harder — the near-dated concentrated downside risk is gone; watch only, no instruction (the book is the most constructive of the run but the tape is blind and the engine flags an overbought reversal at the highs)</td></tr>
                <tr><td>Macro tail re-grow (credit leg un-fired)</td><td className="bull">HY OAS 2.74% &lt; 2.78% (STILL un-fired, narrowed another −1.0bp) OR 10Y &gt; 4.53% (5bp to fire, firmed to 4.48%) — the FX legs softened but firm (DXY 100.85, USD/JPY 162.54)</td><td>no hedge instruction in this note — with neither leg fired there is no tail to grow; note the book has deepened net-long-gamma with no material near-dated amplifier, so the endogenous downside structure eased further even as the rates leg firmed toward its gate</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.48%</td><td>standalone filter true with less room; needs a BTC-internal pivot AND a live tape to translate to a scout long</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (ON HOLD)</td><td className="stale">SM feed dead ~502.5h; no deltas computable</td><td>suspended, not negative — re-arm on the first fresh SM deltas after the feed resumes</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the extended bounce — which closed up +$1,541.00 on 07-02 and, by the
                00:07Z cut, had not been handed back into the next session (the 07-03 daily close
                does not yet exist), deepened the book to +60.7M
                net-long-gamma and pressed spot to +1.90% above the flip and −1.93% below the floor,
                with the 200W break already confirmed — is short-cover or demand, which only a
                restored tape can say; on the structural side, the recovery still requires a
                sustained weekly close back above the floor $62,643, with D-EMA20 $62,056 and
                D-SMA20 $62,252 the way-stations
              </span>. The dealer book that deepened to +60.7M net-LONG-gamma with no near-dated
              amplifier left (spot +1.90% above the flip) now dampens the next move harder; the
              structural positive — the 200W floor — stays confirmed broken on the weekly close and
              the 06-15 reclaim thesis stays dead, the bounce extended into the reclaim cluster, and
              the desk still cannot read the tape that would say whether it is short-cover or demand
              — with the engine now flashing an overbought reversal at the highs. Until the tape is
              restored this note runs as written: the book is flat, the scout&rsquo;s price block
              stays TRUE and improving but the engine turned to a 4h TD9 SELL, the macro tail credit
              gate stays un-fired below its line (OAS 2.74%), the squeeze-cycle is suspended, and the
              200W floor watch is the one live level — a floor confirmed broken on the weekly close
              with the bounce extended into the reclaim cluster, the recovery condition a weekly
              close back above $62,643. Price pressed into the reclaim zone and the flip extended,
              the book deepened long-gamma with no material near-dated amplifier, and the correlation regime loosened
              further as BTC led NQ — so the risk-off / worst-laggard read of the earlier
              lineage is fully unwound; but the MTF engine flipped back to cycle-reversal with a 4h
              TD9 SELL at the highs, and macro stayed risk-off on the z-panel (rates tight and
              firming, dollar EXTREME). The right read for the next 24h is{' '}
              <em>break-confirmed-on-the-weekly-close, bounce-extended-into-the-reclaim-cluster —
              respect the confirmed break, treat the deepened long-gamma map as a real improvement
              the blind tape cannot confirm as demand, weigh the fresh overbought reversal print at
              the highs, watch whether spot can build a weekly close back above the floor, and fix
              the tape before reading whether the extended bounce is short-cover or demand</em>.
            </p>
          </div>
          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> this is the <b>v2</b> note — <b>post codex hostile audit</b>. It went
            through the cross-model hostile audit recorded in{' '}
            <code>audits/2026-07-03-desk-note.md</code> (codex primary + owns the publish gate;
            ask-deepseek numeric second-audit, adjudicated not auto-applied). Verdict was
            BLOCK-CRITICAL (1 CRITICAL + 2 MAJOR + 1 MINOR, plus 2 deepseek MINOR). All findings
            were applied EVERYWHERE the invariant appears (not only at cited lines), then
            grep-closed to zero stale matches before promotion.{' '}
            <b>DN-001 (CRITICAL, over-timed lineage claim):</b> patterns searched —{' '}
            <code>handed back the next/following session</code>,{' '}
            <code>handed back the next day</code>,{' '}
            <code>NOT reversed the following session / next day</code>,{' '}
            <code>first NOT handed back</code>; grep hits before = 14 stale carriers (manifest em,
            lead signal + em, prose signal, Positioning header, MA-matrix daily-close em, trade-book
            header, trade prose, trade thesis, break-lvl, decision para, decision-table 200W row,
            signature, closing signal); hits after = 0 — <b>RESOLVED</b>. Every completed
            &ldquo;next-session survival&rdquo; formulation was replaced with timestamp-bounded
            language (&ldquo;not yet handed back into the next session by the 00:07Z cut; the 07-03
            in-progress bar $61,433 still holds near the 07-02 close, down only $107.50; the 07-03
            daily close does not yet exist&rdquo;). Genuinely completed past facts (06-30 reversed
            the 06-29 bounce; the 06-30 first bounce was handed back on 07-01) were left intact.{' '}
            <b>DN-002 (MAJOR, &ldquo;entire near strip positive&rdquo;):</b> patterns searched —{' '}
            <code>entire/ENTIRE near strip (is/flipped) positive</code>,{' '}
            <code>near-dated concentration is entirely positive</code>,{' '}
            <code>NO near-dated (downside) amplifier</code>; grep hits before = 6 &ldquo;entire near
            strip / entirely positive&rdquo; carriers + ~12 emphatic &ldquo;NO amplifier&rdquo;
            mentions; hits after = 0 for the wrong claim — <b>RESOLVED</b>. Reframed to &ldquo;front
            three expiries are positive and no material near-dated downside amplifier remains; 6JUL26
            3.3 DTE is a small −0.34M negative, while the heaviest negative is far-dated 25SEP26
            −3.03M&rdquo; and softened every &ldquo;NO amplifier&rdquo; to &ldquo;no material
            near-dated amplifier.&rdquo;{' '}
            <b>DN-003 (MAJOR, BTC leadership overclaim):</b> patterns searched —{' '}
            <code>LEADS/LED the complex</code>, <code>out-front of the equity complex</code>,{' '}
            <code>bounced hardest</code>, bare <code>BTC led/LED</code>; grep hits before = 5
            overclaim phrases + 2 bare &ldquo;BTC led&rdquo;; hits after = 0 — <b>RESOLVED</b>.
            Narrowed to &ldquo;BTC leads NQ/SP500 and is no longer a laggard (several mega-caps and
            metals sit further ahead)&rdquo;; the correct BTC-vs-NQ lead (+3.14pt) was retained.{' '}
            <b>DN-004 (MINOR, MTF bull-frame composition):</b> pattern searched —{' '}
            <code>bull frames are the 30m / 1h (above cloud)</code>; grep hits before = 1; hits
            after = 0 — <b>RESOLVED</b>. Corrected to &ldquo;the source-bias bull frames are 15m /
            30m / 1M, with 1h above cloud but neutral in the source count.&rdquo;{' '}
            <b>deepseek MINOR ×2 (adjudicated, then applied):</b> patterns searched — bare{' '}
            <code>$60,225</code> and bare <code>$58,605</code> in the daily-close lists; recomputed
            against the weekly close and the 07-01 up-close derivation (+$1,394.20 = 59,999.60 −
            58,605.40) and confirmed the full-precision values; grep hits before = 3 lists each;
            hits after = 0 — <b>RESOLVED</b>, standardized to <code>$60,224.70</code> and{' '}
            <code>$58,605.40</code>.{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1; a full{' '}
            <code>next build</code> is environment-blocked on the Node version gate (lineage),
            so <code>npx --no-install tsc --noEmit</code> is the build proxy — STAGE E owns the
            final build verification.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among principals of
            Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a single
            atomic snapshot (2026-07-03 00:07Z) with section-level provenance disclosed in the
            manifest band above;{' '}
            <em>critically, the live derivatives tape was frozen for 377.4h at snapshot time
            (last row 2026-06-17 06:43Z) and the smart-money positioning feed has been dead
            ~20.94 days</em>, so all funding, OI, flow and positioning figures are explicitly
            last-known / stale or non-computable and flagged as such; the macro panel render is
            2026-07-02 22:15Z (~1.85h before snapshot). Price, MTF, GEX and cross-asset are
            fresh. This is the v2 note, promoted after the codex hostile audit; audit findings have
            been adjudicated and applied (see the audit-trace block above). Levels, sizes, and conditions are illustrative of
            the desk&rsquo;s process, not standing recommendations. Past correlation, gamma, and
            positioning patterns do not bind future tape. Derivatives carry the risk of total
            loss and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The bounce extended: the 07-02 up-close ($61,540.60, +$1,541.00) had not been
                handed back into the next session by the 00:07Z cut (the 07-03 in-progress bar
                $61,433 still holds near it; the 07-03 daily close does not yet exist), the dealer book deepened to +60.7M
                net-LONG-gamma with no material near-dated amplifier left, spot pushed +1.90% above the flip
                and into the reclaim cluster −1.93% under the floor — the most constructive
                gamma/price map of the run, all read through a dead tape a seventeenth day and now
                met by a 4h TD9 SELL at the highs. Break confirmed. Bounce extended. Book
                long-gamma. Engine flags reversal. Blind.
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
            v2 · 2026-07-03 00:07Z snapshot · post codex hostile audit ·
            2026-07-03T01:05:00Z · sources: live_db.json (FROZEN 377.4h) ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED · Yahoo ·
            Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
