import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-05 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-05',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-05' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260705() {
  await requireViewer('/desk/2026-07-05');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-05 · v2</span>
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
              <span className="dn-big">$63,048.50</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.69%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-05 00:05Z ·{' '}
              <span className="dn-em">
                THE BOUNCE RECLAIMED THE FLOOR ON A DAILY CLOSE — the 07-04 daily bar closed UP
                +$549.30 at $63,114.80, the FOURTH consecutive up-close and, uniquely in the run,
                the FIRST daily close back ABOVE the $62,643 200W floor (+0.75%), ending the
                ten-close streak below it (06-24 → 07-03). The in-progress 07-05 bar $63,048.50
                sits +0.65% ABOVE the floor, and for the first time in the lineage THREE MAs sit
                beneath spot — D-SMA20 $62,017 (+1.66%), D-EMA20 $62,330 (+1.15%) and the 200W
                floor / W-SMA200 $62,643 (+0.65%) itself — so the floor has flipped from overhead
                resistance to support beneath spot. The dealer book DEEPENED again to +110.2M
                net-LONG-gamma (was +88.1M on 07-04 — the deepest of the run, it dampens harder
                still), the near-dated 7JUL26 downside amplifier EASED to −5.12M (was −8.22M) and
                the $60k put wall eased to −16.69M (was −21.49M), with the front 5JUL26 0.3 DTE at
                +23.93M (settles ~08:00Z today). Spot sits +2.68% ABOVE the flip $61,405 (was
                +2.20% above $61,296 on 07-04). BUT the MTF engine FLIPPED BACK to a 5/9
                CYCLE-REVERSAL regime (JT&lt;0, from trend-continuation on 07-04), the headline
                weakened to 4 bull / 3 bear / 3 neutral, the fast frames 30m / 1h ROLLED from
                golden to death crosses (1h an above-water death cross just-printed) and the engine
                STILL carries TWO ⚡TD9 SELLs (4h AND 8h) at the highs with top divergences on 15m /
                1h — a persistent stall / topping signature into the reclaim, offset by a 1M ⚡TD9
                BUY and a bottom-div cluster (8h / 12h / 1d). The 200W break stays CONFIRMED (06-29
                weekly close $60,224.70 &lt; $62,643) and the 06-15 reclaim thesis stays FALSIFIED,
                but a structural recovery — a sustained weekly close back above $62,643 — is now ~1
                day from its FIRST genuine settlement test (the in-progress week-ending 07-06 bar
                reads above the floor and completes Monday 07-06). Cross-asset stays IDIOSYNCRATIC
                (mean |r| 0.193, ~unchanged) and BTC&rsquo;s 7d return +5.01% LEADS NQ +2.21% by
                +2.80pt and SP500 +2.30% by +2.71pt, with BTC now 6th of the complex (was 9th on
                07-04). Macro held: HY OAS 2.75% stays BELOW the 2.78% re-grow gate (un-fired, 3bp
                to go), 10Y steady 4.48% (5bp from 4.53%), DXY held EXTREME 100.86 (MOVE
                unavailable this cut). All read through a dead derivatives tape, now a nineteenth
                calendar day — the OKX monitor frozen 425.4h and the SM feed dead ~22.94 days. The
                desk reads the daily-close reclaim of the floor and the third MA beneath spot as
                the most constructive turn of the lineage — but on a blind tape it still cannot
                confirm demand, the engine flipped back to cycle-reversal with fast frames rolling
                over and two persistent TD9 SELLs at the highs, and the recovery is a daily-close
                reclaim inside a still-confirmed weekly break until a weekly close prints above the
                floor.
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
                    <b>425.4h stale</b> vs the 00:05Z snapshot anchor (was 401.4h on the
                    07-04 note, 377.4h on 07-03 — the outage has run another ~24h since the
                    last note, into its nineteenth calendar day). Funding / OI / CVD / basis /
                    retail / taker-flow are LAST-KNOWN at 06-17 06:43Z, not current. The SM
                    sub-feed (long_btc / short_btc / net_btc) is frozen even longer — constant
                    since 2026-06-12 01:36Z (~550.5h / ~22.94 days); SM net and the SM
                    cut-fraction are <b>NON-COMPUTABLE</b> this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-05 00:01Z scan</td>
                  <td className="dn-flag">
                    fresh (~4 min before anchor) · rolling latest-file artifact,
                    archived verbatim at
                    /opt/desk-note/snapshots/2026-07-05-0008/ · in-progress bars · scan
                    spot $63,057, 24h +0.76%, 24h H/L $63,450 / $62,303, qVol $5.01B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-05 00:00 UTC panel (mtime 00:00:39Z)</td>
                  <td className="dn-flag">
                    fresh (~5 min before anchor) · Deribit idx $63,354 ($305 above
                    parquet spot $63,048.50) · 918 instruments · net GEX{' '}
                    <b>+110.2M</b> (net LONG gamma, DEEPENED from +88.1M on the 07-04
                    note — the deepest of the run) · flip $61,405 (spot +2.68% ABOVE, from
                    +2.20% on 07-04) · the front is 5JUL26 0.3 DTE at{' '}
                    <b>+23.93M</b> (positive, settles ~08:00Z today), and the near-dated
                    downside amplifier <b>EASED</b> to{' '}
                    <b>7JUL26 2.3 DTE −5.12M</b> (was −8.22M on 07-04) — the heaviest positive
                    ceiling is <b>$63.5k +20.98M</b> and the put wall eased to{' '}
                    <b>$60k −16.69M</b> (was −21.49M) · spot $63,048.50 sits ABOVE the 200W floor
                    $62,643, between the $63k +19.59M and $63.5k +20.98M ceilings · IV median 41.9%
                    · P/C 0.57 (Call OI 229,614 / Put OI 129,788)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-05 00:00Z
                  </td>
                  <td className="dn-flag">fresh · 7d 1h bars · 22 assets · 167 rows · regime IDIOSYNCRATIC (mean |r| 0.193, ~UNCHANGED from 0.192 on 07-04 — BTC stays well below the 0.25 idiosyncratic threshold, and its 7d return +5.01% LEADS the NQ +2.21% by +2.80pt and SP500 +2.30% by +2.71pt; BTC has climbed to 6th of the complex from 9th on 07-04)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-04 22:16Z render</td>
                  <td className="dn-flag">
                    ~1.82h render lag (weekend — little changed vs 07-04) · 10Y <b>4.48%</b>{' '}
                    (+4.0bp, 5bp from the 4.53% gate), TIPS <b>2.25%</b> (+5.0bp, EXTREME
                    RISK-OFF), HY OAS{' '}
                    <b>2.75%</b> (+1.0bp — stays BELOW the 2.78% re-grow gate, the gate STILL
                    does not fire, 3bp to go) · MOVE bond vol <b>unavailable this cut</b> (fetch
                    failed) · the FX legs: <b>DXY 100.86</b> (−0.00 day, still EXTREME) and{' '}
                    <b>USD/JPY 161.34</b> (−0.11 day) · Fed net liq $5.843T (source panel delta
                    +0.053T, source regime tight / episodic) · NFCI neutral (stale 8d) · WTI $71.9 (stale ~5d)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-05 00:05Z (close $63,048.50)</td>
                  <td className="dn-flag">
                    fresh kline (exchange OHLC, independent of the frozen live tape) ·
                    offsets recomputed vs the parquet last-bar close, the freshest
                    available spot while the live tape is frozen · the displayed weekly
                    ladder uses the 2023→ subset (183 weekly bars), so no W-SMA200 row
                    (W-EMA200 $67,509 seeds from available history); the 200W floor is
                    recomputed directly from the full-history glob —
                    <b>356 completed weekly W-MON bars</b> (2019→present, INCLUDING the
                    resolved 06-29 week and excluding the in-progress 07-06 week) —{' '}
                    = <b>$62,643</b>, UNCHANGED from the 07-04 note. <b>For the first time in the
                    lineage THREE MAs sit beneath spot — D-SMA20 $62,017 (+1.66%), D-EMA20 $62,330
                    (+1.15%) and the 200W floor / W-SMA200 $62,643 (+0.65%) — the floor has flipped
                    from overhead resistance to support beneath spot</b> · weekly_200sma.json
                    absent this cut, so the ratio percentile / last-event stay unsourced, not
                    fabricated
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
              <span className="dn-v bear">−7.24% (STALE · 06-17 06:43Z · 425.4h)</span>
              <span className="dn-src">live_db raw funding −0.006608 × 1095 = −7.24% ann (NOT ×100) · LAST-KNOWN at the 06-17 06:43Z freeze, now 425.4h stale, not a current read · byte-for-byte the same frozen row carried by the 06-19 → 07-04 notes; the last-available ann over the 24h+1m inclusive sampled window ending at the freeze (1,442 rows) was mean +0.20%, range −7.24% / +7.21%, 819 / 1,442 rows negative — a balanced, two-sided book at the point the tape died</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · vs 07-04</span>
              <span className="dn-v">tape frozen — not computable</span>
              <span className="dn-src">the live tape has not written since 06-17 06:43Z, so there is still no current funding to difference against the 07-04 note · last-known print at the freeze was −7.24% ann (shorts paying longs); the leverage gate remains un-assessable a nineteenth day running</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC (−0.45%) · STALE window</span>
              <span className="dn-src">live_db oi_btc 102,945 at the 06-17 06:43Z freeze vs the start of a 24h+1m inclusive sampled window (1,442 rows) · the window ENDS at the freeze, NOT into the 00:05Z snapshot — it describes the tape up to 06-17 06:43Z and is 425.4h out of date</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` at the 06-17 06:43Z freeze (was 58.29% at the start of the 24h+1m inclusive sampled window — a +1.18pt long add into the roll-over) · last-known, 425.4h stale</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED DEAD ~550.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · this triple has been byte-for-byte constant since 2026-06-12 01:36Z (~550.5h / ~22.94 days) — it is a FROZEN value, NOT a current positioning read; carried only to mark the dead feed</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">NON-COMPUTABLE</span>
              <span className="dn-src">SM feed frozen ~22.94 days · |Δ| / prior_net cannot be computed — there is no current SM net to difference · the squeeze-cycle / re-stack framework is blind this cut, a continuation of the 06-16 → 07-04 ON-HOLD</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.9% / 34.58%</span>
              <span className="dn-src">GEX median IV across 918 instruments (00:00Z, fresh) vs 30D close-to-close RV 34.58% off parquet — chain richness ~+7.32pt over realised (was ~+4.05pt on 07-04 — richness WIDENED as RV fell faster than IV); RV fell (was 38.05% on 07-04; the alternative 29-return window reads 35.16%) · IV is a chain-median across 918 instruments, NOT a tradable spread</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+2.68% (above · extended)</span>
              <span className="dn-src">flip $61,405 (was $61,296 · +$109) · vs parquet spot $63,048.50 (63,048.50 / 61,405 − 1 = +2.676%) / GEX file Deribit idx $63,354 (63,354 / 61,405 − 1 = +3.174%, file reads +3.2%) — both references ABOVE the flip, EXTENDED from +2.20% above on 07-04 · net GEX +110.2M (net LONG gamma, DEEPENED from +88.1M — the deepest of the run) · the near-dated downside amplifier EASED (7JUL26 2.3 DTE −5.12M, was −8.22M) as the front 5JUL26 reads +23.93M</span>
            </div>
          </div>
          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The bounce reclaimed the floor on a daily-close basis — the 07-04 daily bar closed
                UP +$549.30 at $63,114.80, the fourth consecutive up-close and the FIRST daily
                close back above the $62,643 floor (+0.75%), ending the ten-close streak below it,
                and the in-progress 07-05 bar $63,048.50 sits +0.65% ABOVE the floor with THREE MAs
                now beneath spot for the first time in the run (D-SMA20 / D-EMA20 / the 200W floor
                itself). The dealer book deepened again to +110.2M net-LONG-gamma — the deepest of
                the run — the near-dated 7JUL26 amplifier eased to −5.12M and the $60k put wall
                eased to −16.69M; spot pushed to +2.68% above the flip. BUT the MTF engine flipped
                BACK to a 5/9 cycle-reversal regime with the headline weakened to 4/3/3, the fast
                frames 30m / 1h rolled from golden to death crosses, and it STILL prints TWO ⚡TD9
                SELLs (4h AND 8h) at the highs with top divs on 15m / 1h — a persistent stall
                signature into the reclaim. All read through a dead derivatives tape, a nineteenth
                calendar day running
              </span>. Spot prints{' '}
              <span className="dn-tag bull">$63,048.50, +0.69% on 24h</span> at the 00:05Z
              parquet bar (the MTF scan reads +0.76% on its own window), up from the 07-04
              note spot $62,646.80 — the lineage carried the bounce from testing the floor to
              closing back above it. The 200W break stays{' '}
              <span className="dn-tag bear">CONFIRMED on the 06-29 weekly close $60,224.70,
              −3.86% below the $62,643 floor</span>, the 06-15 reclaim thesis stays FALSIFIED,
              and the floor is unchanged this cut ($62,643, the 06-29 week resolved five cuts
              ago). Ten consecutive daily closes below the floor (06-24 $61,051 −2.54% through
              07-03 $62,565.50 −0.12%) now give way to{' '}
              <span className="dn-tag bull">07-04 $63,114.80 +0.75%, an UP-close +$549.30, the
              fourth straight and the FIRST close back above the floor</span> — the four up-closes
              lifted spot through the line. For the first time in the lineage spot holds THREE MAs
              beneath it —{' '}
              <span className="dn-tag bull">D-SMA20 $62,017 (+1.66%), D-EMA20 $62,330 (+1.15%)
              and the 200W floor $62,643 (+0.65%)</span> are now support. The dealer book{' '}
              <span className="dn-tag bull">deepened to +110.2M net-LONG-gamma</span>, the front
              5JUL26 is +23.93M, and the{' '}
              <span className="dn-tag bull">near-dated 7JUL26 amplifier eased to −5.12M</span>{' '}
              (was −8.22M); spot sits between the $63k +19.59M and $63.5k +20.98M ceilings and
              above the eased $60k −16.69M put wall. MTF weakened at the headline to{' '}
              <span className="dn-tag">4 bull / 3 bear / 3 neutral</span> (was 4/5/1) and the
              regime classifier{' '}
              <span className="dn-tag bear">flipped BACK to 5/9 cycle-reversal (JT&lt;0)</span>{' '}
              from trend-continuation — the fast frames 30m / 1h rolled from golden to death
              crosses and the engine still carries{' '}
              <span className="dn-tag bear">TWO ⚡TD9 SELLs (4h AND 8h) at the highs</span> with
              top divs on 15m / 1h, a persistent overbought signature. Macro held at rates and
              eased at credit: 10Y steady at 4.48% (5bp from its gate), HY OAS 2.75% (stays BELOW
              the 2.78% re-grow gate — the gate stays un-fired, 3bp to go), DXY held 100.86
              EXTREME.{' '}
              <span className="dn-em">
                The operational fact is unchanged and still binding: the OKX monitor has now
                been frozen 425.4h (last row 2026-06-17 06:43Z), funding / OI / CVD / basis /
                retail are last-known and stale, and the SM positioning book has been dead
                ~22.94 days — SM net and the cut-fraction are non-computable. The fourth up-close
                reclaimed the floor on a daily-close basis and put a third MA beneath spot for the
                first time in the run, and the gamma/price map is the most constructive the lineage
                has held — but the tape that would say whether this is demand or thin short-cover is
                still down, the engine flipped back to cycle-reversal with fast frames rolling over,
                and two TD9 SELLs still flash at the highs. The read is on price, gamma and MTF
                alone.
              </span>{' '}
              The book stays flat: the break is confirmed at the weekly-close level, the reclaim
              thesis is dead, and the bounce that reclaimed the floor on a daily close is — for all
              its improvement — unconfirmable on a blind tape and still met by two overbought
              reversal prints at the highs with the regime turned back to mean-reversion. The
              scout&rsquo;s price pre-condition stays TRUE and strengthens (spot +2.68% above the
              flip, three MAs beneath, above the floor), but the scout stays stood down. No shorts,
              no scout, no fresh hedge.
            </p>
            <p>
              BTC prints <span className="dn-tag">$63,048.50</span> at the parquet last bar
              (00:05Z),{' '}
              <span className="dn-tag bull">+0.69%</span> on 24h (vs the $62,617 bar
              roughly 24h prior; the MTF scan reads +0.76% on its own 00:01Z window — the
              spread is the reference window, not a data conflict), inside a{' '}
              <span className="dn-tag">$63,450 / $62,303</span> 24h range (per the MTF
              scan H/L). The Deribit index reads $63,354 at 00:00Z and the MTF scan spot
              is $63,057 — so the freshest spot is well-corroborated across three
              independent fresh sources (parquet kline $63,048.50, GEX Deribit index $63,354,
              MTF scan $63,057), even though the live_db tape that normally supplies it is
              frozen at 06-17 06:43Z, 425.4h stale.{' '}
              <span className="dn-signal">The structural read has moved from a confirmed break
              with the bounce CARRIED TO THE FLOOR (07-04 note) to that same confirmed break with
              the bounce now RECLAIMING THE FLOOR ON A DAILY CLOSE — the 07-04 daily close
              $63,114.80 was the fourth consecutive up-close (+$549.30) and the first in the run to
              settle back above the $62,643 floor, and the in-progress 07-05 bar $63,048.50 holds
              +0.65% above it with a third MA now beneath spot</span>: the 22JUN weekly close
              $63,990 was the last weekly hold, the daily closes walked down through the line
              (06-22 → 06-28), the 06-29 weekly bar closed $60,224.70 below the floor to confirm
              the break, then 06-30 → 07-04 bounced (bar 06-30 the deepest, −6.45%) five sessions
              with the last four up-closes carrying spot back above the line. Per the framework the
              break was confirmed at the weekly-close level and the 06-15 reclaim thesis falsified;
              nothing this cut un-does that — a daily-close reclaim is not the recovery, which needs
              a weekly close back above the floor.{' '}
              <span className="dn-em">
                The one structural positive of the lineage is broken at the weekly-close level
                and the reclaim thesis is dead; but spot now holds three MAs beneath it and has
                closed back above the floor on a daily basis, with the book deeply long-gamma —
                the most constructive gamma/price map the lineage has carried, and the first cut
                where a structural recovery (a weekly close back above $62,643) is ~1 day from its
                first genuine settlement test (the in-progress week-ending 07-06 bar reads above
                the floor and completes Monday 07-06). The desk reads it as a real improvement it
                cannot yet confirm as demand on a blind tape, and the engine has flipped back to
                cycle-reversal with two overbought reversal prints still flashing at the highs.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · LIVE TAPE FROZEN 425.4h (nineteenth day) · SM book dead ~22.94 days · funding/OI/flow last-known stale · the 07-04 up-close reclaimed the floor on a daily close and put a third MA beneath spot, but the desk still cannot see whether it is demand absorbing the break or thin short-cover — the positioning tape is dark</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important source of this note — the live derivatives tape —
                is still down, a nineteenth calendar day running
              </span>. The OKX monitor has appended no row to live_db.json since{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> (t = &ldquo;06-17
              14:43&rdquo; BJ; the file mtime 06-17 06:43:08Z confirms the write stopped
              there; the process status is not archived or verified in this cut, so the note
              asserts the missing tape, not a live/hung process). That is now{' '}
              <span className="dn-tag bear">425.4h of missing tape</span> against the 00:05Z
              snapshot anchor — the 06-20 note flagged it at 65.4h, the 06-27 note at 233.4h,
              the 06-30 note at 305.4h, the 07-04 note at 401.4h, and the outage has run
              another ~24h without a write. Everything the live tape carries — funding, open
              interest, spot/futures CVD, perp basis, retail long%, taker-net, big-print flow,
              aggressor skew — is therefore{' '}
              <span className="dn-em">last-known at 06-17 06:43Z and not current</span>. The
              smart-money positioning triple (long_btc / short_btc / net_btc) has been
              byte-for-byte constant —{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> — since{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>, ~550.5h (~22.94 days).
              The 06-16 note flagged this dead feed at ~94.5h and put the squeeze-cycle ON
              HOLD; the 07-04 note carried it at ~526.5h; today it is ~550.5h and still dead.{' '}
              <span className="dn-em">
                SM net is non-computable as a current read, and the SM cut fraction (|Δ| /
                prior_net) cannot be formed — there is no current SM net to difference. Any
                positioning claim in this note is explicitly historical, not live.
              </span>
            </p>

            <p>
              For completeness, the <em>last-available</em> tape readings — all pinned to
              the 06-17 06:43Z freeze and now 425.4h out of date, and byte-for-byte the same
              readings the 06-19 → 07-04 notes carried because it is the same frozen row —
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
                None of it can be carried forward to the 00:05Z snapshot — and it predates the
                entire 06-18 → 06-22 floor-hold sequence, the 06-23 → 06-28 leg that closed
                below the floor, the 06-29 weekly-close confirmation, the 06-30 reversal AND the
                07-01 → 07-04 four-session bounce that reclaimed the floor on a daily close, so
                it says nothing about whether the bounce is short-cover exhausting or demand
                absorbing the break. The desk treats the positioning dimension as unknown, and
                the daily-close reclaim of the floor as positioning-unconfirmed.
              </span>
            </p>
            <h2 className="dn-sec">
              Structure <span className="dn-roman">II · price/MTF FRESH · multi-TF resonance mixed 4 bull / 3 bear / 3 neutral (WEAKENED from 4/5/1 — the fast frames 30m/1h rolled from golden to death crosses) · net read higher-TF mixed · short-term bounce STALLING · fast frames 15m/30m/1h DEATH crosses (1h above-water just-printed), mid-frames 4h/8h GOLDEN below-water but carrying TWO ⚡TD9 SELLs at the highs with top divs on 15m/1h · 1M TD9 buy still prints · regime FLIPPED BACK to 5/9 cycle-reversal (JT&lt;0) · for the FIRST time in the lineage THREE MAs sit beneath spot (D-SMA20 / D-EMA20 / the 200W floor) and spot has closed back above the $62,643 floor on a daily basis, the break still CONFIRMED at the weekly close but recovery ~1 day from its first settlement test</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map is fresh and weakened by two at the headline (4 bull / 3 bear / 3
                neutral, the fast frames 30m/1h rolled from golden to death crosses) with the
                mid-frames (4h/8h) still holding below-water golden crosses and the regime
                classifier flipped BACK to cycle-reversal — and the engine STILL prints TWO ⚡TD9
                SELLs (4h AND 8h) at the highs with top divs on 15m / 1h, a persistent
                overbought-reversal signature
              </span> — the one dimension, with the dealer map, the desk can still trust
              today, and this cut it reads as a stall / topping tension into the reclaim even as
              spot holds above the floor. The 00:01Z scan tags{' '}
              <span className="dn-tag">4 bull / 3 bear / 3 neutral across 10 frames</span>,
              net read <em>higher-timeframe mixed · short-term bounce stalling</em> — weakened
              from the 07-04 scan&rsquo;s 4/5/1 as the fast stack rolled over. The
              regime line reads{' '}
              <span className="dn-tag bear">5/9 cycle-reversal / mean-reversion regime (JT&lt;0)</span>{' '}
              (was 5/9 trend-continuation on 07-04), so the classifier flipped BACK from
              trend-continuation to mean-reversion — the engine now leans against the extension.
              The constructive frames are the{' '}
              <span className="dn-tag">4h / 8h / 1M</span> — 4h and 8h above cloud with below-water
              golden crosses (8h reclaimed above-cloud from in-cloud), and the 1M above cloud (TD9
              buy printed) — while 12h → 1w stay bearish below cloud. The stall signature is the
              print this cut:{' '}
              <span className="dn-tag bear">the fast frames 30m / 1h rolled from golden to death
              crosses (1h an above-water death cross just-printed)</span> and{' '}
              <span className="dn-tag bear">TWO ⚡TD9 SELLs persist on the 4h AND 8h (overbought
              reversal hint, at the highs)</span> with{' '}
              <span className="dn-tag bear">top (bearish-reversal) divergences on 15m / 1h</span>{' '}
              — momentum rolling over from a high on the fast frames while the mid-frames hold. The
              constructive side:{' '}
              <span className="dn-tag">4h / 8h below-water golden crosses (21 / 11 bars), 12h / 1d
              still golden below-water (7 / 4 bars)</span> — unconfirmed below-water probes — while
              the higher frames (12h → 1w) stay below cloud and the{' '}
              <span className="dn-tag bear">1w carries a below-water death cross (1 bar)</span>.
              Cloud: 15m / 30m / 1h / 4h / 8h / 1M above cloud, 12h → 1w below. The
              constructive set is the{' '}
              <span className="dn-tag">mid-frame below-water golden crosses, a 1M TD9 buy, and
              bottom (bullish-reversal) divs on 8h / 12h / 1d (a higher-TF bottom-div cluster)</span>{' '}
              — set against the fast-frame death crosses, the two persistent TD9 SELLs and top
              divs on 15m / 1h at the highs.{' '}
              <span className="dn-em">
                Straight read: the frame stack weakened by two, the regime flipped BACK to
                cycle-reversal, and the fast frames rolled from golden to death crosses — so the
                short-term bounce is stalling on the fast timeframes even as spot holds above the
                floor. At the highs, with the 200W floor confirmed broken at the weekly close but
                spot now back above it (+0.65%) and three MAs beneath, the engine&rsquo;s
                constructive prints (mid golden crosses, 1M TD9 buy, bottom-div cluster) are offset
                by two persistent overbought reversal prints and a fast-frame roll-over — so there
                is no clean multi-frame turn to trade the reclaim long against, and a reason to
                distrust the extension at these levels as the trend frame gives way to
                mean-reversion.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,062</td><td className="num neut">47.1</td><td className="bear">death (water-up) 15b</td><td className="bull">above ↓62.9k 45b</td><td>Sell 1</td><td>BEAR hid · BEAR reg (top) · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">63,058</td><td className="num">53.1</td><td className="bear">death (water-up) 3b</td><td className="bull">above ↓62.6k 165b</td><td>Buy 4</td><td>BULL hid</td></tr>
                <tr><td>1h</td><td className="num">63,058</td><td className="num">60.5</td><td className="bear">death (water-up) just-printed</td><td className="bull">above ↓62.2k 81b</td><td>Buy 2</td><td>BEAR reg (top) · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">63,058</td><td className="num">67.5</td><td className="bull">golden (water-dn) 21b</td><td className="bull">above ↓61.8k 10b</td><td className="bear">⚡TD9 SELL</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">63,058</td><td className="num neut">64.7</td><td className="bull">golden (water-dn) 11b</td><td className="bull">above ↓62.6k 2b</td><td className="bear">⚡TD9 SELL</td><td>BEAR hid · BULL reg (bottom)</td></tr>
                <tr><td>12h</td><td className="num">63,058</td><td className="num neut">59.5</td><td className="bull">golden (water-dn) 7b</td><td className="bear">below ↑63.7k 87b</td><td>Sell 7</td><td>BULL reg (bottom)</td></tr>
                <tr><td>1d</td><td className="num">63,058</td><td className="num neut">49.6</td><td className="bull">golden (water-dn) 4b</td><td className="bear">below ↑68.5k 34b</td><td>Sell 4</td><td>BULL reg (bottom)</td></tr>
                <tr><td>3d</td><td className="num">63,057</td><td className="num bear">41.4</td><td className="neut">—</td><td className="bear">below ↑70.6k 11b</td><td>Sell 1</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,058</td><td className="num bear">37.5</td><td className="bear">death (water-dn) 1b</td><td className="bear">below ↑99.5k 22b</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">63,050</td><td className="num bear">43.3</td><td className="neut">— (DIF water-up)</td><td className="bull">above ↓47.0k 29b</td><td>TD9 BUY</td><td>BULL reg (bottom)</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (08:01 Beijing; rolling latest
                    file, archived verbatim at
                    /opt/desk-note/snapshots/2026-07-05-0008/). Net read{' '}
                    <em>higher-timeframe mixed · short-term bounce stalling (4 bull / 3 bear / 3
                    neutral)</em>; regime <em>5/9 cycle-reversal / mean-reversion regime
                    (JT&lt;0)</em>; active divergences{' '}
                    <em>reversal: top div 15m / 1h, bottom div 8h / 12h / 1d; hidden
                    (continuation): BEAR hid 15m / 8h, BULL hid 15m / 30m / 1h</em>. Header
                    alerts:{' '}
                    <em>⚡4h TD9 SELL @$63,058 and ⚡8h TD9 SELL @$63,058 both persist —
                    overbought reversal hint (at the highs)</em>,{' '}
                    <em>⚡1M TD9 BUY @$63,050 — oversold reversal hint</em>,{' '}
                    <em>1w below-water death cross (1 bar ago, DIF −5,878.7)</em>,{' '}
                    <em>1h above-water death cross just-printed (DIF +246.9)</em>. Scan spot
                    $63,057, 24h +0.76%, 24h H/L $63,450 / $62,303, qVol $5.01B. Closes are
                    in-progress bars; treat every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix took its second structural turn of the lineage: the fourth up-close
              pushed spot above the 200W floor itself, so for the first time in the run{' '}
              <span className="dn-tag bull">three MAs sit beneath spot — D-SMA20 $62,017 (+1.66%),
              D-EMA20 $62,330 (+1.15%) and the 200W floor / W-SMA200 $62,643 (+0.65%) are now
              support</span>, the floor having flipped from overhead resistance to support beneath
              spot. Then the wall steps back up overhead — the cycle-proxy{' '}
              <span className="dn-tag bear">D-EMA50 $65,801 (−4.18%)</span>, then{' '}
              <span className="dn-tag bear">D-SMA50 $66,782 (−5.59%)</span>, then{' '}
              <span className="dn-tag bear">W-EMA200 $67,509 (−6.61%, seed)</span>, then a dense
              overhead band:{' '}
              <span className="dn-tag bear">D-EMA100 $69,540 (−9.34%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $70,289 (−10.30%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $70,973 (−11.17%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $71,010 (−11.21%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $72,726 (−13.31%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $73,157 (−13.82%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,028 (−14.83%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $74,720 (−15.62%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $75,641 (−16.65%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $75,659 (−16.67%)</span>. Far above and
              disused: W-EMA100 $80,558 (−21.73%), W-EMA50 $81,781 (−22.91%), W-SMA100
              $88,461 (−28.73%), W-SMA50 $89,797 (−29.79%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-05 00:05Z (close $63,048.50); offsets
                recomputed against that same last-bar close, which is the freshest available
                spot while the live tape is frozen. Displayed MA levels are $-rounded; offsets
                computed from exact series values. The displayed weekly ladder uses the 2023→
                subset (183 weekly bars), so W-SMA200 is non-computable there and W-EMA200
                $67,509 seeds from available history; the 200W floor $62,643 is recomputed
                separately from the full-history glob (356 completed weekly W-MON bars,
                INCLUDING the resolved 06-29 week and excluding the in-progress 07-06 week —
                unchanged from 07-04). Daily closes: 06-22 $63,990 (= the 22JUN weekly close),
                06-23 $62,697, 06-24 $61,051 (first close below the floor), 06-25 $59,772, 06-26
                $60,072, 06-27 $60,000, 06-28 $59,550, 06-29 $60,224.70 (the weekly close that
                confirmed the break), 06-30 $58,605.40 (the deepest of the run, −6.45%), 07-01
                $59,999.60 (an up-close +$1,394.20), 07-02 $61,540.60 (an up-close +$1,541.00),
                07-03 $62,565.50 (the tenth close below, −0.12%), 07-04 $63,114.80 (an UP-close
                +$549.30 — the fourth straight and the FIRST close back above the floor, +0.75%),
                07-05 (in-progress, 5-min bar) $63,048.50 (+0.65% above the floor) — the floor
                break stays confirmed at the weekly close and the bounce has reclaimed the floor on
                a daily-close basis with three MAs now beneath spot.
              </span>
            </p>
            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DEEPENED again to net-LONG-gamma aggregate +110.2M (was +88.1M on 07-04, +60.7M on 07-03) — the deepest of the run, the book DAMPENS the next move harder still · the front is 5JUL26 0.3 DTE +23.93M (settles ~08:00Z today), and the near-dated downside amplifier EASED to 7JUL26 2.3 DTE −5.12M (was −8.22M) · the flip stepped $61,296 → $61,405 and spot pushed +2.68% above · heaviest ceiling $63.5k +20.98M (just overhead), put wall eased $60k −16.69M (was −21.49M) · IV 41.9% · P/C 0.57</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book deepened its net-long-gamma posture again to the deepest of the
                run: aggregate gamma rose from +88.1M to +110.2M net-LONG-gamma, so the book
                dampens the next move harder still, the flip reclaim widened as spot pushed further
                above the flip, the near-dated 7JUL26 amplifier EASED and the put wall eased — the
                most constructive gamma backdrop the lineage has carried
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+110.2M / 1%</span> (was +88.1M on 07-04, +60.7M on
              07-03, +12.0M on 07-02); the book has whipsawed short → long → deeper long → deeper
              still and now sits at its deepest net-long-gamma of the run. The 0-γ flip stepped{' '}
              <span className="dn-tag">$61,296 → $61,405 (+$109)</span>, and spot $63,048.50
              pushed further above it, so spot sits{' '}
              <span className="dn-tag bull">+2.68% above the flip</span>
              {' '}on spot-denominated math (63,048.50 / 61,405 − 1 = +2.676%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads +3.2% off its Deribit-index
              $63,354 ($305 above parquet spot), which is{' '}
              <span className="dn-tag bull">+3.17%</span>
              (63,354 / 61,405 − 1 = +3.174%) — both references above the flip, EXTENDED from
              +2.20% above on 07-04. The wall map is a stack of positive ceilings bracketing spot
              with an eased put wall below: the heaviest is{' '}
              <span className="dn-tag bull">$63.5k +20.98M</span> (heaviest wall, a positive ceiling
              just overhead), with{' '}
              <span className="dn-tag bull">$63k +19.59M</span> and{' '}
              <span className="dn-tag bull">$64k +19.51M</span> bracketing spot, then{' '}
              <span className="dn-tag bull">$70k +15.64M</span>,{' '}
              <span className="dn-tag bull">$65k +15.20M</span>,{' '}
              <span className="dn-tag bull">$66k +14.93M</span>,{' '}
              <span className="dn-tag bull">$68k +12.95M</span>,{' '}
              <span className="dn-tag bull">$67k +8.99M</span>,{' '}
              <span className="dn-tag bull">$80k +8.26M</span> overhead, with the deep put wall{' '}
              <span className="dn-tag bear">$60k −16.69M</span> below spot (eased from −21.49M on
              07-04).{' '}
              <span className="dn-em">
                Critically, the aggregate is deeply net-LONG-gamma at the deepest of the run, so the
                book dampens the next move harder rather than amplifying it — a deepening of the
                +88.1M book of 07-04 and the most constructive gamma backdrop the lineage has
                carried. Spot at $63,048.50 sits between the $63k +19.59M and $63.5k +20.98M
                positive ceilings (which bracket spot just above the floor $62,643) and above the
                eased $60k −16.69M put wall; the positive ceiling stack caps the bounce just
                overhead, while the eased put wall below is the near shelf. And the near-dated
                downside amplifier EASED this cut: 7JUL26 2.3 DTE −5.12M (was −8.22M on 07-04) — the
                short-dated downside pocket shrank. But the tape that would say whether the price
                move under it is demand is still down, while the MTF engine flipped back to
                cycle-reversal and still flashes two TD9 SELLs at the highs.
              </span>{' '}
              By expiry the near-dated concentration is positive at the very front with the eased
              7JUL26 negative: the front is the positive 5JUL26{' '}
              <span className="dn-tag bull">0.3 DTE at +23.93M (settles ~08:00Z today)</span>,
              then 6JUL26 1.3 +6.51M, 7JUL26 2.3{' '}
              <span className="dn-tag bear">−5.12M (the eased near-dated downside amplifier)</span>,
              8JUL26 3.3 +0.66M, 10JUL26 5.3{' '}
              <span className="dn-tag bull">+25.31M</span>, 17JUL26 12.3{' '}
              <span className="dn-tag bull">+23.41M</span>, 24JUL26 19.3 +4.23M, 31JUL26 26.3{' '}
              <span className="dn-tag bull">+33.92M</span>, 28AUG26 54.3 +5.24M, 25SEP26 82.3{' '}
              <span className="dn-tag bear">−0.82M</span>, 25DEC26 173.3 +1.76M, 26MAR27 264.3
              +0.68M, 25JUN27 355.3 +0.53M. The 4JUL26 front settled ~08:00Z yesterday; the
              downside amplifier the 07-04 note had seen at 7JUL26 −8.22M has EASED to −5.12M as it
              rolled a session closer — the concentrated short-dated downside shrank. (The
              spot-referenced aggregate +110.2M is the net GEX at spot; the by-expiry rows are an
              independent decomposition and need not sum to it.)
            </p>

            <p>
              IV median across 918 instruments is{' '}
              <span className="dn-tag">41.9%</span> (eased from 42.1% / 914 instruments
              on 07-04) against 30D close-to-close RV of{' '}
              <span className="dn-tag">34.58%</span> — chain-level richness{' '}
              <span className="dn-tag">~+7.32pt</span> over realised (was ~+4.05pt on 07-04 —
              richness WIDENED as RV fell faster than IV), with RV falling off its recent path
              (34.58% today vs 38.05% on 07-04 — the alternative 29-return window reads 35.16%). A
              chain-median across 918 instruments, <span className="dn-em">not</span>
              {' '}a tradable spread; expiry-/strike-level vega, skew and term structure remain
              not loaded; the vol read stays framework-only. RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log returns (= 31
              consecutive daily closes) anchored to parquet last bar 2026-07-05 00:05Z. P/C
              ratio <span className="dn-tag">0.57</span> (Call OI 229,614 / Put OI 129,788) — a
              call-heavy chain.
            </p>
            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · ~1.82h render (weekend — little changed vs 07-04) — 10Y steady 4.48% (5bp from the gate), TIPS 2.25% EXTREME RISK-OFF, HY OAS 2.75% +1.0bp stays BELOW its 2.78% re-grow gate (the gate STILL does not fire, 3bp to go), MOVE unavailable this cut · the FX legs held: DXY 100.86 (still EXTREME) and USD/JPY 161.34 · regime stays IDIOSYNCRATIC (mean |r| 0.193, ~unchanged), BTC +5.01% LEADS NQ by +2.80pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro panel render is ~1.82h lagged over the weekend and the read is little
                changed: rates held at 4.48% (5bp from their gate) while the credit spread held at
                2.75% and stayed BELOW its 2.78% re-grow gate — the gate stays un-fired, 3bp to go
                — and the dollar held 100.86 EXTREME
              </span>. Dashboard render is 2026-07-04 22:16Z, ~1.82h before the snapshot. US
              10Y nominal <span className="dn-tag">4.48% (+4.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.51</span> — tight regime, RISK-OFF, 5bp from
              the 4.53% gate (the nearer leg). 10Y TIPS real{' '}
              <span className="dn-tag">2.25% (+5.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.56</span> — EXTREME RISK-OFF, among the tightest
              lines on the panel. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.22% (+2.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag">2.23% (0.0bp)</span> — inflation expectations steady.
              HY OAS{' '}
              <span className="dn-tag bull">2.75% (+1.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−0.92</span> — credit loose on the z-regime; the
              spread held +1bp but stays BELOW its 2.78% re-grow gate (it fired at 2.83% on 06-30
              and 2.80% on 07-01, then dropped under to 2.75% on 07-02, 2.74% on 07-03 and 2.75% on
              07-04 — this cut it holds under at 2.75%, so the credit re-grow gate STILL does not
              fire, 3bp to go). MOVE bond vol is{' '}
              <span className="dn-tag stale">unavailable this cut</span> — the source fetch failed;
              the vol leg is not refreshed. The dollar held EXTREME: DXY{' '}
              <span className="dn-tag bear">100.86 (−0.00 day)</span>, regime z{' '}
              <span className="dn-tag bear">+2.11</span>, still extreme. Fed
              net liquidity{' '}
              <span className="dn-tag">$5.843T</span>, regime z{' '}
              <span className="dn-tag">−0.60</span> — unchanged vs the 07-04 note; the source panel
              delta column reads +0.053T and classifies it tight / episodic.
              USD/JPY{' '}
              <span className="dn-tag">161.34 (−0.11 day)</span>, regime z +1.39; US-JP 10Y spread{' '}
              <span className="dn-tag">1.83% (+4.0bp)</span> narrow;
              USD/CNY <span className="dn-tag">6.7702</span>; WTI{' '}
              <span className="dn-tag stale">$71.9 (stale ~5d)</span>.{' '}
              <span className="dn-em">
                Net: the macro backdrop stayed risk-off on the z-panel (rates tight, TIPS EXTREME,
                dollar EXTREME) but the credit margin held loose — the credit leg held at 2.75% and
                stays BELOW the 2.78% re-grow gate, so the credit gate that fired on the 06-28 →
                07-01 notes stays un-fired for a fourth cut (3bp to fire); the rates leg held at
                4.48% and sits 5bp from its 4.53% gate, the nearer leg. The reclaim-long rates
                filter (10Y &lt; 4.55%) stays TRUE at 4.48%. The macro read still reinforces rather
                than refutes the confirmed break — a broad risk-off z-panel — but the fresh moves
                are minimal over the weekend: the credit gate stays un-fired, the correlation regime
                holds idiosyncratic with BTC leading NQ (see cross-asset below), and the dollar held
                extreme.
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
                <tr><td>5Y5Y BE inflation</td><td className="num">2.22%</td><td className="num bear">+2.0bp</td><td className="num">−0.12</td><td className="neut">steady</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.23%</td><td className="num">0.0bp</td><td className="num">−1.55</td><td className="neut">steady</td></tr>
                <tr><td>HY OAS</td><td className="num">2.75%</td><td className="num bear">+1.0bp</td><td className="num bull">−0.92</td><td className="bull">stays BELOW the 2.78% re-grow gate — gate still does not fire (3bp to go)</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.504</td><td className="num">−0.00</td><td className="num">+0.40</td><td className="stale">weekly · neutral · stale 8d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num stale">n/a</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">unavailable this cut · fetch failed</td></tr>
                <tr><td>DXY</td><td className="num">100.86</td><td className="num">−0.00</td><td className="num bear">+2.11</td><td className="bear">EXTREME RISK-OFF · held</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.843T</td><td className="num">+0.053T</td><td className="num">−0.60</td><td className="bear">tight · episodic · source panel delta +0.053T · unchanged vs the 07-04 note</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.34</td><td className="num bull">−0.11</td><td className="num bear">+1.39</td><td className="bear">firm</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.83%</td><td className="num">+4.0bp</td><td className="num bull">−1.00</td><td className="neut">narrow</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7702</td><td className="num">−0.02</td><td className="num">−1.51</td><td className="neut">—</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">monthly (64d)</td><td className="num bear">+2.56</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>
            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.193</span> — ~unchanged from the
              0.192 of 07-04 and sitting{' '}
              <span className="dn-tag">well below the 0.25 idiosyncratic threshold</span>, so the
              regime line stays{' '}
              <span className="dn-signal">IDIOSYNCRATIC — BTC stays well decoupled by correlation
              from the broad cross-asset complex</span>, with its top ties a band of the
              equity / metals cluster all near +0.30–0.40: PLAT{' '}
              <span className="dn-tag">+0.404</span>, PALL{' '}
              <span className="dn-tag">+0.370</span>, SILVER{' '}
              <span className="dn-tag">+0.331</span>, URNM{' '}
              <span className="dn-tag">+0.318</span>, SP500{' '}
              <span className="dn-tag">+0.311</span>, GOLD{' '}
              <span className="dn-tag">+0.294</span>, NVDA{' '}
              <span className="dn-tag">+0.289</span>, NQ{' '}
              <span className="dn-tag">+0.287</span>, COPPER{' '}
              <span className="dn-tag">+0.266</span>, JP225{' '}
              <span className="dn-tag">+0.196</span>, TSLA{' '}
              <span className="dn-tag">+0.137</span>, MSFT{' '}
              <span className="dn-tag">+0.114</span>, with AMZN{' '}
              <span className="dn-tag">−0.149</span> and JPY{' '}
              <span className="dn-tag">−0.122</span> inverse and AAPL{' '}
              <span className="dn-tag">+0.088</span> near-zero. And the 7d performance keeps the
              BTC-vs-NQ framing constructive and improves BTC&rsquo;s rank: BTC leads NQ/SP500 and
              is no laggard —{' '}
              <span className="dn-tag bull">BTC +5.01%</span> is ahead of NQ{' '}
              <span className="dn-tag bull">+2.21%</span> by +2.80pt (it was a +2.69pt lead on
              07-04) and ahead of SP500 +2.30% by +2.71pt, and BTC has climbed to 6th of the
              complex (from 9th on 07-04) — the leaders are the mega-caps AAPL{' '}
              <span className="dn-tag bull">+9.61%</span>, META{' '}
              <span className="dn-tag bull">+6.76%</span> and the metal SILVER{' '}
              <span className="dn-tag bull">+6.55%</span>, then GOOGL{' '}
              <span className="dn-tag bull">+5.59%</span>, TSLA{' '}
              <span className="dn-tag bull">+5.55%</span>, BTC{' '}
              <span className="dn-tag bull">+5.01%</span>, PALL{' '}
              <span className="dn-tag bull">+4.96%</span>, AMZN{' '}
              <span className="dn-tag bull">+4.94%</span>, MSFT{' '}
              <span className="dn-tag bull">+4.29%</span>, SP500{' '}
              <span className="dn-tag bull">+2.30%</span>, GOLD{' '}
              <span className="dn-tag bull">+2.28%</span>, NQ{' '}
              <span className="dn-tag bull">+2.21%</span>, NVDA{' '}
              <span className="dn-tag bull">+2.01%</span>, PLAT{' '}
              <span className="dn-tag bull">+1.00%</span>, JP225{' '}
              <span className="dn-tag bull">+0.90%</span>, URNM{' '}
              <span className="dn-tag bull">+0.72%</span>, COPPER{' '}
              <span className="dn-tag bull">+0.45%</span>, EUR{' '}
              <span className="dn-tag bull">+0.36%</span> all green; the reds are energy and the
              yen — CL{' '}
              <span className="dn-tag bear">−4.69%</span>, BRENT{' '}
              <span className="dn-tag bear">−4.43%</span>, NGAS{' '}
              <span className="dn-tag bear">−1.35%</span>, JPY{' '}
              <span className="dn-tag bear">−0.15%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d return +5.01% vs NQ +2.21% is a lead of +2.80pt (was +2.69pt on
                07-04) — the gap to NQ widened a touch across the fourth up-close, and BTC has
                climbed to 6th of the complex from 9th, no longer a laggard. The correlation regime
                holds idiosyncratic below the 0.25 line. So the sharp risk-off / worst-performer
                read the earlier lineage carried stays fully unwound — BTC is neither statistically
                coupled at the threshold nor a laggard this cut, and it has climbed the performance
                table. The macro z-panel still reads risk-off (rates tight, DXY EXTREME), but the
                cross-asset regime stays loose and BTC keeps leading NQ, so the two cross-market
                reads still diverge from the tight macro z-panel.
              </span>{' '}
              JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag — do not lean on it.
            </p>
            <h2 className="dn-sec">
              Trade book <span className="dn-roman">V · book FLAT · 200W floor — BREAK CONFIRMED on the 06-29 weekly close ($60,224.70 &lt; $62,643, −3.86%), 06-15 reclaim thesis FALSIFIED; the 07-04 up-close RECLAIMED the floor on a daily close (fourth straight up-close, +0.75% above), three MAs now beneath spot with a structural recovery (weekly close above $62,643) ~1 day from its first settlement test · scout price pre-condition stays TRUE and STRENGTHENS (spot +2.68% above flip, three MAs beneath) — scout STILL stood down (tape blind ~22.94 days, regime flipped back to cycle-reversal, the engine flashes TWO 4h/8h TD9 SELLs at the highs) · macro tail credit gate STILL un-fired (OAS 2.75% &lt; 2.78%) · squeeze-cycle ON HOLD (SM dead ~22.94 days)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — the structural positive of the lineage is
                resolved AGAINST it (200W break confirmed on the weekly close, reclaim thesis
                falsified), but the 07-04 up-close reclaimed the floor on a daily-close basis and
                put a third MA beneath spot for the first time in the run, and the binding
                constraint is still data integrity — with the engine now flipped back to
                cycle-reversal and still flashing TWO TD9 SELLs at the highs
              </span>. The 06-29 weekly close settled $60,224.70, −3.86% below the $62,643
              floor — the break is CONFIRMED and the 06-15 reclaim thesis FALSIFIED, and
              nothing this cut un-does that. The 07-04 note recorded the bounce carried to the
              floor; this cut it RECLAIMED the floor on a daily close — the 07-04 daily close
              $63,114.80 was an up-close +$549.30, the fourth straight, the first back above the
              floor (+0.75%), and the in-progress 07-05 bar $63,048.50 holds +0.65% above it with
              three MAs now beneath spot. The dealer book deepened to +110.2M net-long-gamma (the
              deepest of the run), the near-dated 7JUL26 amplifier eased to −5.12M and the put wall
              eased, and spot pushed to +2.68% above the flip. The scout&rsquo;s price pre-condition
              stays TRUE and strengthens — spot is well above the flip, three MAs are beneath it,
              and it has closed back above the floor — so the price leg is open and improving. But
              the desk still takes no scout: the tape that would confirm demand is blind, and the
              engine has flipped BACK to a cycle-reversal regime with the fast frames 30m / 1h
              rolled to death crosses and TWO persistent TD9 SELLs (4h AND 8h) and top divs on 15m
              / 1h AT the highs — chasing the reclaim here, into a fast-frame roll-over and two
              overbought reversal prints on a blind tape, is a poor entry. No new short either: the
              book is the deepest long-gamma of the run, the flip is +2.68% reclaimed, spot is back
              above the floor with three MAs beneath, and a 1M TD9 buy still prints — a poor place
              to press short. The trade book today is: no shorts, no scout, no fresh hedge — fix the
              tape before reading whether the reclaim of the floor is short-cover or demand.
            </p>
            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch — BREAK CONFIRMED: the 06-29 weekly close $60,224.70 settled −3.86% below the $62,643 floor (the weekly-close escalation FIRED), the 06-15 reclaim thesis is FALSIFIED; the 07-04 up-close RECLAIMED the floor on a daily close (spot +0.65% above $62,643), putting a third MA beneath spot; recovery ~1 day from its first weekly-close settlement test</span>
              <div className="dn-trade-name">
                200W cycle floor watch — the break is CONFIRMED on the 06-29 weekly close and the bounce has RECLAIMED the floor on a daily-close basis: floor $62,643 = full-history W-SMA200 (356 completed weekly bars, unchanged this cut), 06-29 weekly close $60,224.70 (−3.86% below) confirmed the break, the 07-04 daily close $63,114.80 (an up-close +$549.30, the fourth straight) was the FIRST close back above the floor (+0.75%), the in-progress 07-05 bar $63,048.50 is +0.65% above the floor, the 06-15 reclaim thesis FALSIFIED
              </div>
              <div className="dn-thesis">
                The 07-04 note recorded the break confirmed on the 06-29 weekly close with the
                bounce carried to the floor. This cut the bounce reclaimed the floor on a daily
                close: the 07-04 daily bar closed{' '}
                <span className="dn-tag bull">$63,114.80, +0.75% above the $62,643 floor</span>,
                an up-close +$549.30 that was the fourth straight and the first close back above the
                floor, ending the ten-close streak below it, and the in-progress 07-05 bar
                $63,048.50 holds +0.65% above the floor with a third MA now beneath spot. Per the
                framework an intraday wick is not the break, a daily close below is the early
                warning, and a sustained weekly close below is the escalation that breaks the floor
                and falsifies the 06-15 reclaim thesis — that weekly close printed on 06-29, so the
                break stays CONFIRMED and the reclaim thesis FALSIFIED. The 22JUN weekly close
                $63,990 was the last weekly hold; it remains superseded.{' '}
                <span className="dn-em">The structural positive of the lineage stays resolved
                against it at the weekly-close level; but spot now holds three MAs beneath it and
                has closed back above the floor on a daily basis — the floor, unchanged at $62,643,
                has flipped to support beneath spot, and for the first time in the run a structural
                recovery (a sustained weekly close back above $62,643) is ~1 day from its first
                genuine settlement test (the in-progress week-ending 07-06 bar reads above the floor
                and completes Monday 07-06). The bounce is a daily-close reclaim inside a confirmed
                weekly break until that weekly close prints.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor (unchanged)</span><span className="dn-lvl-v">$62,643 = full-history W-SMA200, recomputed this cut from the 2019→ parquet glob (356 completed weekly W-MON bars, INCLUDING the resolved 06-29 week and excluding the in-progress 07-06 week); unchanged from the 07-04 note, the 06-29 week resolved five cuts ago · weekly_200sma.json absent so the ratio percentile / last-event stay unsourced, not fabricated</span></div>
                <div><span className="dn-lvl-k">break — CONFIRMED, floor RECLAIMED on a daily close</span><span className="dn-lvl-v bear">06-29 weekly close $60,224.70 settled −3.86% below the floor — the break is confirmed; ten consecutive daily closes below (06-24 $61,051 −2.54% through 07-03 $62,565.50 −0.12%), the 06-30 close $58,605.40 the deepest (−6.45%); then 07-04 $63,114.80 +0.75% closed back ABOVE the floor (the fourth straight up-close, +$549.30, the first above the line); the in-progress 07-05 bar $63,048.50 is +0.65% above the floor</span></div>
                <div><span className="dn-lvl-k">reclaim thesis — FALSIFIED</span><span className="dn-lvl-v bear">the 06-15 reclaim thesis required the floor to hold on a weekly-close basis; the 06-29 weekly close below the floor falsifies it — the prior 22JUN weekly hold ($63,990) is superseded</span></div>
                <div><span className="dn-lvl-k">recovery path (first settlement test ~1 day out)</span><span className="dn-lvl-v bull">spot is +2.68% above the flip $61,405, +1.66% above D-SMA20 $62,017, +1.15% above D-EMA20 $62,330, +0.65% above the floor $62,643 (three MAs beneath spot for the first time in the run) — a structural recovery is a sustained weekly close back above the floor $62,643 (the level the break must un-do); the in-progress week-ending 07-06 bar reads above the floor and completes Monday 07-06, so the recovery is ~1 day from its first genuine settlement test — but a weekly close is not a scout trigger on a blind tape (see scout)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework, not a trade.</b> The floor watch is the single load-bearing
                live level while everything else is stale or framework-only. The break is
                confirmed on the weekly close, the reclaim thesis is falsified, and the bounce
                reclaimed the floor on a daily close with three MAs beneath — no position is taken
                on the watch: it sets the confirmed break (06-29 weekly close $60,224.70 &lt;
                $62,643), the recovery condition (a sustained weekly close back above the floor
                $62,643, first test ~1 day out), and the recovery way-stations (flip $61,405 →
                D-SMA20 $62,017 → D-EMA20 $62,330 → floor $62,643, now all beneath spot), and the
                desk will not chase a bounce long into a blind tape with the regime flipped back to
                cycle-reversal and the engine flashing two TD9 SELLs at the highs, nor press short a
                confirmed break with spot back above the floor into the deepest long-gamma book of
                the run with the flip reclaimed and a 1M TD9 buy printed.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STILL STOOD DOWN · price pre-condition stays TRUE and STRENGTHENS (spot +2.68% above the flip, three MAs beneath, above the floor) and the book DEEPENED to the deepest net-long-gamma of the run; but tape blind ~22.94 days + no confirmed engine trigger (regime flipped back to cycle-reversal, fast frames rolled to death crosses, the engine flashes TWO 4h/8h TD9 SELLs at the highs) still bind</span>
              <div className="dn-trade-name">
                Cover-bounce scout — the flip reclaim stays TRUE (spot +2.68% above) with three MAs now beneath spot and the book at the deepest net-long-gamma of the run, the price leg open and improving; the scout stays stood down on a blind tape, with the engine flipped back to cycle-reversal and two persistent overbought reversal prints (4h AND 8h TD9 SELL) at the highs
              </div>
              <div className="dn-thesis">
                The 06-30 note saw the scout&rsquo;s price pre-condition flip TRUE, the 07-01 note
                saw it flip back FALSE, the 07-02 → 07-04 notes saw it flip back TRUE and extend.
                This cut it stays TRUE and strengthens further: spot is{' '}
                <em>+2.68% above the flip</em> $61,405 (which stepped +$109), has closed back above
                the floor, and now holds THREE MAs beneath it (D-SMA20 $62,017 / D-EMA20 $62,330 /
                the floor $62,643), while the dealer book deepened to +110.2M net-long-gamma — the
                deepest of the run. So the price and gamma legs are the most constructive of the
                run. But the scout stays stood down, and this cut the reasons still bind: (1) the
                positioning legs (SM short bleed, funding posture, cover-flow) all require a live
                tape, and there is none — the desk cannot see whether the reclaim of the floor is
                short-cover exhausting or demand absorbing. (2) The engine carries no confirmed
                constructive trigger — the regime flipped BACK to cycle-reversal, the fast frames
                30m / 1h rolled from golden to death crosses, and TWO TD9 SELLs (4h AND 8h,
                overbought reversal hint) persist at the highs with top divs on 15m / 1h,
                offsetting the mid golden crosses and the 1M TD9 buy. (3) A near-dated downside
                pocket persists though eased (7JUL26 −5.12M).{' '}
                <span className="dn-em">A scout long on a positioning-blind tape, with no confirmed
                engine print and TWO overbought reversal prints at the highs into a fast-frame
                roll-over, is not a trade — the price leg is open and improving, but chasing a
                reclaim of the floor into two 4h/8h TD9 SELLs and a regime flip back to
                mean-reversion on a blind tape is exactly the entry the desk stands down. The 1M TD9
                buy and the higher-TF bottom-div cluster are real oversold hints worth recording,
                but they are offset by the 4h AND 8h TD9 SELLs and the fast-frame death crosses at
                these levels.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">stood down · no entry · price pre-condition stays TRUE and strengthens (spot +2.68% above the flip, three MAs beneath, above the floor) and the book is the deepest net-long-gamma of the run, but tape blind, regime flipped back to cycle-reversal, engine flashing two persistent overbought reversals (4h AND 8h TD9 SELL); re-evaluate only after the live tape is restored AND a confirming engine print</span></div>
                <div><span className="dn-lvl-k">technical pre-condition</span><span className="dn-lvl-v bear">flip $61,405 reclaim (TRUE — spot +2.68% above) AND D-SMA20 $62,017 / D-EMA20 $62,330 reclaim (TRUE — two daily MAs beneath spot) AND floor $62,643 daily-close reclaim (TRUE — spot +0.65% above, but no weekly close yet) AND a confirming engine print (NOT true — 4 bull / 3 bear / 3 neutral, mid golden crosses and a 1M TD9 buy offset by fast-frame death crosses, TWO persistent 4h/8h TD9 SELLs and top divs on 15m/1h; regime flipped back to cycle-reversal)</span></div>
                <div><span className="dn-lvl-k">data pre-condition</span><span className="dn-lvl-v bear">live tape restored (currently 425.4h frozen) AND SM feed live (currently dead ~22.94 days) — both must hold before any positioning leg can be read; this is the binding block</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> no scout entry without a live positioning tape. The 1M TD9
                buy, the mid golden crosses, the higher-TF bottom-div cluster and the reclaimed
                flip, MA pair and floor do not trigger a scout while the SM / funding / flow legs
                are blind and the engine has flipped back to cycle-reversal with TWO overbought
                reversal prints (4h AND 8h TD9 SELL) at the highs and fast frames rolling over —
                the desk does not size into a cover-bounce it cannot see being covered, especially
                one that has reclaimed the floor and is now met by two reversal signatures and a
                regime flip. The price block that lifted on 06-30, re-closed on 07-01 and re-opened
                07-02 → 07-04 stays open and improving; the operational block (tape down) and the
                engine block (no confirmed trigger, two persistent overbought reversals, regime
                flipped back) still bind.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — credit leg STILL un-fired: HY OAS 2.75% &lt; the 2.78% gate (held +1.0bp this cut, stays below, 3bp to fire), 10Y leg 5bp away (4.48% vs 4.53% gate); both legs hold under their triggers</span>
              <div className="dn-trade-name">
                Downside put-spread — re-grow credit gate STILL un-fired (OAS 2.75% &lt; 2.78%), the rates leg 5bp away; no hedge added (the dealer book deepened to the deepest net-long-gamma of the run and the near-dated amplifier eased, so the endogenous downside structure eased further)
              </div>
              <div className="dn-thesis">
                The macro re-grow gate the lineage carries — HY OAS &gt; 2.78% OR 10Y &gt;
                4.53% as the condition to re-grow a downside tail — is STILL un-fired on the
                credit leg: HY OAS{' '}
                <em>2.75%</em>, +1bp this cut and holding below the gate (it fired at 2.83% on
                06-30 and 2.80% on 07-01, then dropped under to 2.75% on 07-02, 2.74% on 07-03 and
                2.75% on 07-04 — this cut it holds under at 2.75%, 3bp to fire), while the 10Y held
                at 4.48% and sits 5bp away — the nearer leg. So both legs are off their triggers.
                The reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE at 4.48%. The macro tape
                is still a risk-off impulse on the z-panel (rates tight, TIPS EXTREME, dollar
                EXTREME), but a macro tail is not the right instrument for an
                endogenous-cum-idiosyncratic floor break, and the dealer book has deepened to the
                deepest net-long-gamma of the run with the near-dated amplifier eased (7JUL26
                −5.12M), so the aggregate endogenous downside structure eased further this cut —
                which, with the credit gate un-fired, is a reason to stand the tail down, not to add
                it.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bull">no position · credit gate STILL un-fired on a close basis · HY OAS 2.75% &lt; 2.78% (+1.0bp, stays below, 3bp to fire), 10Y leg 5bp away</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (un-fired)</span><span className="dn-lvl-v bull">HY OAS &gt; 2.78% close — STILL UN-FIRED at 2.75% (3bp below the gate) · OR 10Y &gt; 4.53% close (currently 4.48%, 5bp to fire — the nearer leg, but still off)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — TRUE at 4.48%; awaits a BTC-internal pivot AND a live tape to translate</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as the levels
                drift, not backtested breakpoints. The credit leg holds under the gate
                (OAS 2.75% &lt; 2.78%) and the rates leg sits 5bp away; with neither leg fired there
                is no tail to grow this cut; note the dealer book has deepened to the deepest
                net-long-gamma of the run and the near-dated amplifier eased, so the aggregate
                endogenous downside structure eased further — the tail stands down.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · ON HOLD — SM feed DEAD ~22.94 days, the re-stack signature cannot be read this cut</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — ON HOLD (continuation of 06-16 → 07-04): the SM feed is frozen ~550.5h, the re-stack signature cannot be read this cut
              </div>
              <div className="dn-thesis">
                The squeeze-cycle / re-stack-hostile-2 framework reads discrete SM steps
                (Δshort &gt; 0 + Δlong &lt; 0 same minute) as continuation signatures; its
                calendar prior (the BJ 13–15 cadence) was falsified on 05-31 and it has run as
                a no-prior watchlist since. It cannot be assessed today for the simplest
                reason: the SM feed is dead. long_btc / short_btc / net_btc have been constant
                since 2026-06-12 01:36Z (~550.5h), so there are no SM deltas to read. The
                06-16 note put this ON HOLD at ~94.5h, the 07-03 note at ~502.5h, the 07-04
                note at ~526.5h; it remains ON HOLD at ~550.5h.{' '}
                <span className="dn-em">No signature can print from a frozen feed; the
                framework is dark until the SM data resumes.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v bear">ON HOLD · SM feed frozen ~550.5h (since 2026-06-12 01:36Z) · no SM deltas computable</span></div>
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
              Decision conditions <span className="dn-roman">VI · LIVE TAPE OUTAGE still the operative condition (nineteenth day) · 200W floor BREAK CONFIRMED on the 06-29 weekly close ($60,224.70 &lt; $62,643, −3.86%), 06-15 reclaim thesis FALSIFIED, the 07-04 up-close RECLAIMED the floor on a daily close · flip EXTENDED (spot +2.68% above), book DEEPENED to +110.2M net-LONG-gamma (deepest of the run) and the near-dated amplifier EASED (7JUL26 −5.12M) · scout price pre-condition stays TRUE and strengthens (three MAs beneath spot, above the floor) but the engine flipped BACK to cycle-reversal with fast frames rolling to death crosses and TWO 4h/8h TD9 SELLs at the highs · macro credit gate STILL un-fired (OAS 2.75%), regime stays IDIOSYNCRATIC as BTC LEADS NQ by +2.80pt</span>
            </h2>

            <p>
              Of the 07-04 conditions: the live tape did <em>not</em> come back — it is ~24h
              deader, now 425.4h frozen with the SM feed at ~22.94 days; the 200W floor break
              stays CONFIRMED on the 06-29 weekly close ($60,224.70, −3.86% below the $62,643
              floor) and the 06-15 reclaim thesis stays FALSIFIED; the floor is unchanged this
              cut ($62,643, the 06-29 week resolved five cuts ago); the bounce the 07-04 note
              recorded at the floor RECLAIMED it on a daily close — the 07-04 daily close
              $63,114.80 was an up-close +$549.30, the fourth straight, the first back above the
              floor (+0.75%), and the in-progress 07-05 bar $63,048.50 is +0.65% above it with a
              third MA now beneath spot; the flip was EXTENDED (spot +2.68% above vs +2.20% on
              07-04) as the flip stepped to $61,405; the dealer book DEEPENED from +88.1M to
              +110.2M net-LONG-gamma — the deepest of the run, it dampens the next move harder still
              — and the near-dated downside amplifier EASED (7JUL26 2.3 DTE −5.12M, was −8.22M); the
              scout&rsquo;s price pre-condition stays TRUE and strengthens (three MAs beneath spot)
              but the engine flipped BACK to cycle-reversal with the fast frames 30m / 1h rolled to
              death crosses and TWO persistent 4h/8h TD9 SELLs at the highs; the macro re-grow gate
              stays un-fired on the credit leg (OAS 2.75% &lt; 2.78%) while the rates leg held at
              4.48% (5bp away); the correlation regime stayed IDIOSYNCRATIC as BTC&rsquo;s 7d return
              LED NQ by +2.80pt; the squeeze-cycle stayed ON HOLD on a deader feed. The
              dominant condition is unchanged: <em>the desk is positioning-blind, into a 200W floor
              break CONFIRMED on the weekly close, a bounce that reclaimed the floor on a daily
              close with three MAs beneath it, and a book that has deepened to the deepest
              net-long-gamma of the run — none of which it can confirm against the tape, and now met
              by a regime flip back to cycle-reversal and two overbought reversal prints at the
              highs</em>. The conditions today re-set around the continuing outage, the confirmed
              weekly-close break, the daily-close reclaim of the floor, and the deepened
              net-long-gamma book:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Live tape restored (PRIMARY operational)</td><td className="bull">live_db.json resumes writing fresh rows beyond 2026-06-17 06:43Z AND the SM triple updates off its 06-12 01:36Z freeze</td><td>re-read funding / OI / flow / SM in full; only then can the scout or squeeze-cycle be evaluated — and only then can the reclaim of the floor be confirmed as short-cover exhausting vs demand absorbing; the positioning dimension has now been blind seventeen notes running</td></tr>
                <tr><td>200W floor — BREAK CONFIRMED, floor RECLAIMED on a daily close</td><td className="bear">06-29 weekly close $60,224.70 settled −3.86% below the $62,643 floor — the break is confirmed; ten consecutive daily closes below (06-24 → 07-03), the 06-30 close $58,605.40 the deepest (−6.45%); then 07-04 $63,114.80 +0.75% closed back ABOVE the floor (the fourth straight up-close, the first above the line); in-progress 07-05 bar $63,048.50, +0.65% above the floor</td><td>the floor break is confirmed at the weekly-close level and the bounce reclaimed the floor on a daily close — the floor ($62,643) has flipped to support beneath spot; no position taken</td></tr>
                <tr><td>200W reclaim thesis — FALSIFIED</td><td className="bear">the 06-15 reclaim thesis required a weekly-close hold of the floor; the 06-29 weekly close below falsifies it — the prior 22JUN weekly hold ($63,990) is superseded</td><td>the reclaim thesis is dead; a structural recovery now requires a sustained weekly close back above the floor $62,643 (~1 day from its first settlement test — the in-progress week-ending 07-06 bar reads above the floor, completes Monday 07-06); watch that weekly close</td></tr>
                <tr><td>Flip reclaim (scout price pre-condition) — STRENGTHENED</td><td className="bull">spot $63,048.50 +2.68% above flip $61,405, +1.66% above D-SMA20 $62,017, +1.15% above D-EMA20 $62,330 (two daily MAs beneath spot), +0.65% above the floor $62,643 (three MAs beneath spot for the first time in the run)</td><td>the price pre-condition stays TRUE and strengthens; but a scout still needs the live tape restored AND a confirming engine print — and the engine flipped back to cycle-reversal with fast frames rolling to death crosses and TWO 4h/8h TD9 SELLs (overbought reversal) at the highs; on a blind tape the reclaim of the floor is recorded, not traded</td></tr>
                <tr><td>Dealer book — DEEPENED net-LONG-gamma (deepest of the run), near-dated amplifier EASED</td><td className="bull">aggregate GEX +110.2M (was +88.1M on 07-04, +60.7M on 07-03); the front is 5JUL26 0.3 DTE at +23.93M (settles ~08:00Z today); the near-dated downside amplifier EASED to 7JUL26 2.3 DTE −5.12M (was −8.22M); spot sits between the $63k +19.59M and $63.5k +20.98M positive ceilings and above the eased $60k −16.69M put wall</td><td>the dealer book now DAMPENS the next move harder still in aggregate and the endogenous downside structure eased further; watch only, no instruction (the aggregate is the most constructive of the run but the tape is blind, the engine flipped back to cycle-reversal with two reversals at the highs)</td></tr>
                <tr><td>Macro tail re-grow (credit leg un-fired)</td><td className="bull">HY OAS 2.75% &lt; 2.78% (STILL un-fired, +1.0bp, 3bp to fire) OR 10Y &gt; 4.53% (5bp to fire, held 4.48%) — the FX legs held (DXY 100.86, USD/JPY 161.34), MOVE unavailable this cut</td><td>no hedge instruction in this note — with neither leg fired there is no tail to grow; note the book has deepened to the deepest net-long-gamma of the run and the near-dated amplifier eased, so the endogenous downside structure eased further</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.48%</td><td>standalone filter true; needs a BTC-internal pivot AND a live tape to translate to a scout long</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (ON HOLD)</td><td className="stale">SM feed dead ~550.5h; no deltas computable</td><td>suspended, not negative — re-arm on the first fresh SM deltas after the feed resumes</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the reclaim of the floor — which closed up +$549.30 on 07-04 (the fourth
                straight up-close), settled back above the $62,643 floor for the first time in the
                run, deepened the book to +110.2M net-long-gamma and pressed spot to +2.68% above
                the flip and +0.65% above the floor, with the 200W break already confirmed — is
                short-cover or demand, which only a restored tape can say; on the structural side,
                the recovery now requires a sustained weekly close back above the floor $62,643,
                whose first genuine settlement test is ~1 day out (the in-progress week-ending 07-06
                bar reads above the floor)
              </span>. The dealer book that deepened to +110.2M net-LONG-gamma (spot +2.68% above the
              flip) now dampens the next move harder still in aggregate — and the near-dated
              amplifier eased to 7JUL26 −5.12M; the structural positive — the 200W floor — stays
              confirmed broken on the weekly close and the 06-15 reclaim thesis stays dead, but the
              bounce reclaimed the floor on a daily close with three MAs beneath it, and the desk
              still cannot read the tape that would say whether it is short-cover or demand — with
              the engine now flipped back to cycle-reversal and two overbought reversal prints still
              at the highs. Until the tape is restored this note runs as written: the book is flat,
              the scout&rsquo;s price block stays TRUE and strengthens but the engine turned back to
              cycle-reversal with two 4h/8h TD9 SELLs and fast-frame death crosses, the macro tail
              credit gate stays un-fired below its line (OAS 2.75%), the squeeze-cycle is suspended,
              and the 200W floor watch is the one live level — a floor confirmed broken on the
              weekly close but now reclaimed on a daily close and flipped to support beneath spot,
              the recovery condition a weekly close back above $62,643 with its first test ~1 day
              out. Price reclaimed the floor and the flip extended, the book deepened long-gamma to
              the deepest of the run, and the correlation regime stayed idiosyncratic as BTC led NQ
              — so the risk-off / worst-laggard read of the earlier lineage stays fully unwound; but
              the MTF engine flipped back to cycle-reversal with TWO 4h/8h TD9 SELLs at the highs
              and fast frames rolling over, and macro stayed risk-off on the z-panel (rates tight,
              dollar EXTREME). The right read for the next 24h is{' '}
              <em>break-confirmed-on-the-weekly-close, floor-reclaimed-on-a-daily-close — respect
              the confirmed break, treat the deepest long-gamma map of the run and the third MA
              beneath spot as a real improvement the blind tape cannot confirm as demand, weigh the
              two persistent overbought reversal prints and the regime flip back to cycle-reversal,
              watch whether spot can build the first weekly close back above the floor ~1 day out,
              and fix the tape before reading whether the reclaim of the floor is short-cover or
              demand</em>.
            </p>
          </div>
          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> this is the <b>v2</b> note — <b>post codex hostile audit</b>. The v1 draft
            was reviewed by the cross-model hostile audit (codex primary + owns the publish gate;
            ask-deepseek numeric second-audit) recorded at{' '}
            <code>audits/2026-07-05-desk-note.md</code>; codex returned{' '}
            <b>PASS-WITH-NOTES</b> — no CRITICAL, 1 MAJOR + 3 MINOR + 1 NIT — and ask-deepseek found
            no numeric error. Every finding was adjudicated (recompute against source) and applied,
            then each was grep-closed across the FULL EN file (search the wrong-claim pattern + all
            semantic variants, fix every stale hit, repeat until zero remain) so the fix lands
            wherever the claim appears, not only at the cited lines:
            <ul>
              <li>
                <b>DN-001 · MAJOR</b> — MTF table flattened per-TF closes to a uniform{' '}
                <code>$63,057</code> and misstated active-div cells. Patterns searched:{' '}
                <code>63,057</code> as a per-TF close (before: 10 per-TF rows uniform; after: 0
                stale per-TF rows — the 5 legitimate hits are the 3d close $63,057 and the scan-spot
                $63,057);{' '}<code>BEAR hid 4h / 8h / 1d</code> hidden-div summary (before: 1;
                after: 0);{' '}<code>BEAR hid</code> on the 4h and 1d cells (before: 2; after: 0).
                Fixed per-TF closes (15m $63,062; 30m/1h/4h/8h/12h/1d/1w $63,058; 3d $63,057; 1M
                $63,050), set 15m div to <code>BEAR hid · BEAR reg · BULL hid</code>, 4h to{' '}
                <code>—</code>, 8h to <code>BEAR hid · BULL reg</code>, 1d to <code>BULL reg</code>,
                and rewrote the hidden-div summary to <code>BEAR hid 15m / 8h, BULL hid 15m / 30m /
                1h</code>. <b>RESOLVED</b> (hits-after = 0).
              </li>
              <li>
                <b>DN-002 · MINOR</b> — macro render lag computed off the wrong anchor. Pattern
                searched: <code>1.87h</code> (before: 5; after: 0). The 22:16 UTC panel vs the
                00:05Z anchor is 1h49m = <code>1.82h</code>; all five references now read ~1.82h.{' '}
                <b>RESOLVED</b> (hits-after = 0).
              </li>
              <li>
                <b>DN-003 · MINOR</b> — stale macro row metadata. Patterns searched: NFCI{' '}
                <code>~15d</code> (before: 2; after: 0 → <code>stale 8d</code>); USD/CNY{' '}
                <code>−1.39</code> / delta <code>−0.01</code> / read <code>loose</code> (before:
                each present; after: 0 → z <code>−1.51</code>, delta <code>−0.02</code>, no regime
                tag; the surviving <code>+1.39</code> is USD/JPY&rsquo;s regime z, source-correct);
                Fed net liquidity <code>neut</code> read (before: 1; after: 0 → <code>tight ·
                episodic</code> per source). <b>RESOLVED</b> (hits-after = 0).
              </li>
              <li>
                <b>DN-004 · MINOR</b> — cross-asset performance sweep omitted a loaded green asset.
                Pattern searched: <code>COPPER</code> in the return sweep (before: 0 in the
                performance list; after: 1). Added <code>COPPER +0.45%</code> between URNM +0.72% and
                EUR +0.36%. <b>RESOLVED</b> (hits-after = 0).
              </li>
              <li>
                <b>DN-005 · NIT</b> — GEX timestamp rounded away from the source panel. Pattern
                searched: <code>00:01Z</code> on GEX-sourced references (before: 3; after: 0 — the
                surviving 00:01Z hits are all MTF-scan, which the source titles 08:01 BJ = 00:01
                UTC). The GEX panel is cited as <code>2026-07-05 00:00 UTC</code> (mtime 00:00:39Z)
                and its freshness as ~5 min before the 00:05Z anchor. <b>RESOLVED</b> (hits-after =
                0).
              </li>
            </ul>
            Overall: <b>post codex hostile audit</b>, all findings RESOLVED with zero stale residue,
            build proxy <code>tsc --noEmit</code> exit 0. The live derivatives tape remains frozen
            (425.4h) and the SM feed dead (~22.94 days); those dimensions are disclosed as
            last-known / non-computable, not audited into existence. Full <code>next build</code>
            stays environment-blocked (Node v18.19.1 &lt; Next&rsquo;s required &gt;=20.9.0);{' '}
            <code>tsc --noEmit</code> is the build proxy. See{' '}
            <code>audits/2026-07-05-desk-note.md</code> for the full verdict.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among principals of
            Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a single
            atomic snapshot (2026-07-05 00:05Z) with section-level provenance disclosed in the
            manifest band above;{' '}
            <em>critically, the live derivatives tape was frozen for 425.4h at snapshot time
            (last row 2026-06-17 06:43Z) and the smart-money positioning feed has been dead
            ~22.94 days</em>, so all funding, OI, flow and positioning figures are explicitly
            last-known / stale or non-computable and flagged as such; the macro panel render is
            2026-07-04 22:16Z (~1.82h before snapshot). Price, MTF, GEX and cross-asset are
            fresh. This is the v2 note, post codex hostile audit; its figures have been adjudicated
            and every finding applied (see the audit-trace block above). Levels, sizes, and conditions are
            illustrative of the desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future tape. Derivatives
            carry the risk of total loss and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The bounce reclaimed the floor on a daily close: the 07-04 up-close ($63,114.80,
                +$549.30, the fourth straight) settled back above the $62,643 floor for the first
                time in the run — three MAs now beneath spot (D-SMA20 / D-EMA20 / the floor) — and
                the in-progress 07-05 bar $63,048.50 holds +0.65% above it; the dealer book deepened
                to +110.2M net-LONG-gamma (the deepest of the run) with the near-dated amplifier
                eased (7JUL26 −5.12M), spot pushed +2.68% above the flip, all read through a dead
                tape a nineteenth day and now met by a regime flip back to cycle-reversal and TWO
                4h/8h TD9 SELLs at the highs. Break confirmed. Floor reclaimed on a daily close.
                Book long-gamma. Engine flags reversal. Blind.
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
            v2 · 2026-07-05 00:05Z snapshot · post codex hostile audit ·
            2026-07-05T00:58:11Z · sources: live_db.json (FROZEN 425.4h) ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED · Yahoo ·
            Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
