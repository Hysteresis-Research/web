import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-01 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-01',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-01' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260701() {
  await requireViewer('/desk/2026-07-01');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-01 · v2</span>
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
              <span className="dn-big">$58,701</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−2.50%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-01 00:06Z ·{' '}
              <span className="dn-em">
                THE BOUNCE FAILED AND THE TAPE HANDED IT BACK. The 06-29 up-close that
                reclaimed $60k and the 0γ flip was fully reversed on the 06-30 daily close
                $58,605.40 (−$1,619.30, the LOWEST close of the run and a seventh
                consecutive close below the now $62,643 200W floor), and the whole
                constructive picture the 06-30 note carried reversed with it: the dealer book
                FLIPPED BACK to −31.5M net-SHORT-gamma (was +5.6M long — it AMPLIFIES again),
                the near-dated 3JUL26 downside amplifier BLEW OUT to −21.15M (from −4.86M),
                spot LOST the flip (−1.84% below, was +0.12% above), MTF worsened 1/6/3 → 1/9/0
                with 8h and 1d flipping back to below-water DEATH crosses (were golden on 06-30 —
                the 12h reads an older 15-bar death cross that conflicts with the 06-30 just-printed
                12h golden, lineage-flagged, not a fresh re-cross),
                and spot dropped to −6.29% below the confirmed floor. The one fresh constructive
                print is the 1M TD9 BUY, which PRINTED (was one close away on 06-30) — a lone
                oversold reversal hint. The 200W break stays CONFIRMED (06-29 weekly close
                $60,224.70 &lt; $62,643) and the 06-15 reclaim thesis stays FALSIFIED. Cross-asset
                turned: BTC −6.84% is now the WORST 7d performer of the complex while equities
                went green (NQ +2.45%, SP500 +1.33%) — the break looks MORE idiosyncratic. All
                read through a dead derivatives tape, now a fifteenth calendar day — the OKX
                monitor has been frozen 329.4h and the SM feed dead ~18.94 days.
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
                    <b>329.4h stale</b> vs the 00:06Z snapshot anchor (was 305.4h on the
                    06-30 note, 281.4h on 06-29 — the outage has run another ~24h since the
                    last note, into its fifteenth calendar day). Funding / OI / CVD / basis /
                    retail / taker-flow are LAST-KNOWN at 06-17 06:43Z, not current. The SM
                    sub-feed (long_btc / short_btc / net_btc) is frozen even longer — constant
                    since 2026-06-12 01:36Z (~454.5h / ~18.94 days); SM net and the SM
                    cut-fraction are <b>NON-COMPUTABLE</b> this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-01 00:01Z scan</td>
                  <td className="dn-flag">
                    fresh (~5 min before anchor) · rolling latest-file artifact,
                    archived verbatim at
                    /opt/desk-note/snapshots/2026-07-01-0006/ · in-progress bars · scan
                    spot $58,662, 24h −2.54%, 24h H/L $60,250 / $58,160, qVol $11.30B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-01 00:01Z snapshot</td>
                  <td className="dn-flag">
                    fresh (~5 min before anchor) · Deribit idx $58,862 ($161 above
                    parquet spot $58,701) · 874 instruments · net GEX{' '}
                    <b>−31.5M</b> (net SHORT gamma, <b>FLIPPED BACK NEGATIVE</b> from
                    +5.6M on 06-30; −20.1M on 06-29) · flip $59,804 (spot −1.84% BELOW,
                    LOST from +0.12% above on 06-30) · the front is 1JUL26 0.3 DTE at{' '}
                    <b>−3.65M</b> (settles ~08:00Z today), the heaviest negative expiry is now
                    the near-dated <b>3JUL26 2.3 DTE at −21.15M</b> (BLEW OUT from −4.86M on
                    06-30 — the re-emerged concentrated downside amplifier) · spot $58,701 sits
                    between the $58k −18.63M wall (heaviest, just below) and the $59k −9.23M
                    wall (just above), with the first positive ceiling the $60.5k +6.73M wall
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-01 00:01Z
                  </td>
                  <td className="dn-flag">fresh · 7d 1h bars · 22 assets · 167 rows · regime NORMAL (mean |r| 0.250, loosened from 0.258 on 06-30 to sit exactly ON the 0.25 idiosyncratic threshold — BTC still coupled by correlation, but its 7d return −6.84% is now the WORST of the complex while equities went green)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-30 22:17Z render</td>
                  <td className="dn-flag">
                    ~1.82h render lag · 10Y <b>4.38%</b> (0.0bp, 15bp from the 4.53% gate),
                    TIPS <b>2.16%</b> (−2.0bp, RISK-OFF), HY OAS{' '}
                    <b>2.80%</b> (−3.0bp — narrowed but STILL above the 2.78% re-grow gate) ·
                    MOVE bond vol <b>68.1</b> (source 1d Δ +1.35, loose) · the FX legs:{' '}
                    <b>DXY 101.17</b> (+0.06 day, eased but still EXTREME) and{' '}
                    <b>USD/JPY 161.93</b> (+0.15 day), both firm · Fed net liq $5.812T
                    (−0.037T, no fresh weekly print) · NFCI neutral (now stale 11d) · WTI
                    $78.9 now stale 8d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-01 00:05Z (close $58,701)</td>
                  <td className="dn-flag">
                    fresh kline (exchange OHLC, independent of the frozen live tape) ·
                    offsets recomputed vs the parquet last-bar close, the freshest
                    available spot while the live tape is frozen · the displayed weekly
                    ladder uses the 2023→ subset (184 weekly bars), so no W-SMA200 row;
                    the 200W floor is recomputed directly from the full-history glob —
                    <b>356 completed weekly W-MON bars</b> (2019→present, INCLUDING the
                    resolved 06-29 week and excluding the in-progress 07-06 week) —{' '}
                    = <b>$62,643</b>, UNCHANGED from the 06-30 note (the 06-29 week already
                    resolved last cut, so no step this cut). <b>Spot is −6.29% BELOW the floor
                    and every MA on the matrix is still overhead — no positive offset, the
                    seventh such cut of the lineage</b> · weekly_200sma.json absent this cut,
                    so the ratio percentile / last-event stay unsourced, not fabricated
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
              <span className="dn-v bear">−7.24% (STALE · 06-17 06:43Z · 329.4h)</span>
              <span className="dn-src">live_db raw funding −0.006608 × 1095 = −7.24% ann (NOT ×100) · LAST-KNOWN at the 06-17 06:43Z freeze, now 329.4h stale, not a current read · byte-for-byte the same frozen row carried by the 06-19 → 06-30 notes; the last-available ann over the 24h+1m inclusive sampled window ending at the freeze (1,442 rows) was mean +0.20%, range −7.24% / +7.21%, 819 / 1,442 rows negative — a balanced, two-sided book at the point the tape died</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · vs 06-30</span>
              <span className="dn-v">tape frozen — not computable</span>
              <span className="dn-src">the live tape has not written since 06-17 06:43Z, so there is still no current funding to difference against the 06-30 note · last-known print at the freeze was −7.24% ann (shorts paying longs); the leverage gate remains un-assessable a fifteenth day running</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC (−0.45%) · STALE window</span>
              <span className="dn-src">live_db oi_btc 102,945 at the 06-17 06:43Z freeze vs the start of a 24h+1m inclusive sampled window (1,442 rows) · the window ENDS at the freeze, NOT into the 00:06Z snapshot — it describes the tape up to 06-17 06:43Z and is 329.4h out of date</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` at the 06-17 06:43Z freeze (was 58.29% at the start of the 24h+1m inclusive sampled window — a +1.18pt long add into the roll-over) · last-known, 329.4h stale</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED DEAD ~454.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · this triple has been byte-for-byte constant since 2026-06-12 01:36Z (~454.5h / ~18.94 days) — it is a FROZEN value, NOT a current positioning read; carried only to mark the dead feed</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">NON-COMPUTABLE</span>
              <span className="dn-src">SM feed frozen ~18.94 days · |Δ| / prior_net cannot be computed — there is no current SM net to difference · the squeeze-cycle / re-stack framework is blind this cut, a continuation of the 06-16 → 06-30 ON-HOLD</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">44.8% / 43.37%</span>
              <span className="dn-src">GEX median IV across 874 instruments (00:01Z, fresh) vs 30D close-to-close RV 43.37% off parquet — chain richness ~+1.43pt over realised (was ~+0.32pt on 06-30 — the chain RE-RICHENED as the book flipped back short-gamma and the down-move resumed); RV stays elevated (was 43.58% on 06-30, 24.91% on 05-31) · IV is a chain-median across 874 instruments, NOT a tradable spread</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−1.84% (below · LOST)</span>
              <span className="dn-src">flip $59,804 (was $60,135 · slipped −$331) · vs parquet spot $58,701 (58,701.30 / 59,804 − 1 = −1.844%) / GEX file Deribit idx $58,862 (58,862 / 59,804 − 1 = −1.575%, file reads −1.6%) — both references BELOW the flip, LOST from +0.12% above on 06-30 · net GEX −31.5M (net SHORT gamma, FLIPPED BACK NEGATIVE from +5.6M) · the near-dated 3JUL26 amplifier blew out to −21.15M (from −4.86M)</span>
            </div>
          </div>
          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The bounce failed and the tape handed it back. The 06-29 up-close that
                reclaimed $60k and the 0γ flip was fully reversed on the 06-30 daily close
                $58,605.40 (−$1,619.30, the lowest close of the run and a seventh consecutive
                close below the now $62,643 floor), and every constructive read the 06-30 note
                carried reversed with it: the dealer book flipped BACK to −31.5M net-SHORT-gamma
                (it amplifies again), the near-dated 3JUL26 amplifier blew out to −21.15M, spot
                LOST the flip (−1.84% below), MTF worsened back to 1/9/0 with 8h and 1d
                re-crossing to below-water death crosses (the 12h death cross is an older 15-bar
                print that conflicts with the 06-30 12h golden — see Structure), and spot fell to
                −6.29% below the
                confirmed floor. The lone fresh constructive print is the 1M TD9 buy, which
                PRINTED. All read through a dead derivatives tape, a fifteenth calendar day
                running
              </span>. Spot prints{' '}
              <span className="dn-tag bear">$58,701, −2.50% on 24h</span> at the 00:05Z
              parquet bar (the MTF scan reads −2.54% on its own window), down from the 06-30
              note spot $60,208 — the lineage handed back the $60k pin it had just reclaimed.
              The 200W break stays{' '}
              <span className="dn-tag bear">CONFIRMED on the 06-29 weekly close $60,224.70,
              −3.86% below the $62,643 floor</span>, the 06-15 reclaim thesis stays FALSIFIED,
              and the floor is unchanged this cut ($62,643, the 06-29 week already resolved
              last note). Seven consecutive daily closes (06-24 $61,051 −2.54%, 06-25 $59,772
              −4.58%, 06-26 $60,072 −4.10%, 06-27 $60,000 −4.22%, 06-28 $59,550 −4.94%, 06-29
              $60,225 −3.86% an up-close,{' '}
              <span className="dn-tag bear">06-30 $58,605 −6.45%, a DOWN-close −$1,619.30</span>)
              now sit below the floor, the 06-30 close the deepest of the run. Spot holds no MA
              beneath it for the seventh cut running — D-EMA20 $62,059 (−5.41%), D-SMA20
              $62,436 (−5.98%) and the 200W floor $62,643 (−6.29%) are the nearest, all
              overhead. The dealer book{' '}
              <span className="dn-tag bear">flipped BACK to −31.5M net-SHORT-gamma</span> and
              the near-dated 3JUL26 amplifier blew out to −21.15M; spot sits between the $58k
              −18.63M wall just below and the $59k −9.23M wall just above. MTF worsened by
              three to{' '}
              <span className="dn-tag bear">1 bull / 9 bear / 0 neutral</span> (was 1/6/3) — the
              30m/1h frames fell below cloud and 15m slipped back inside cloud, while 8h and 1d
              re-crossed to below-water death crosses (the 12h stays an older 15-bar death cross,
              conflicting with the 06-30 12h golden) — while the regime classifier tightened to{' '}
              <span className="dn-tag">6/9 reversal (mean-reversion)</span> from 5/9. Macro
              eased at the margin: 10Y flat at 4.38%, HY OAS narrowed −3bp to 2.80% (still just
              above its 2.78% gate), DXY eased to 101.17 but held EXTREME.{' '}
              <span className="dn-em">
                The operational fact is unchanged and still binding: the OKX monitor has now
                been frozen 329.4h (last row 2026-06-17 06:43Z), funding / OI / CVD / basis /
                retail are last-known and stale, and the SM positioning book has been dead
                ~18.94 days — SM net and the cut-fraction are non-computable. The 06-30 note
                asked whether the up-close was demand absorbing the break or a thin short-cover
                pop; the price answer this cut leans short-cover — it was handed straight back
                — but the tape that would confirm it is still down. The read is on price, gamma
                and MTF alone.
              </span>{' '}
              The book stays flat: the break is confirmed, the reclaim thesis is dead, and the
              bounce that briefly flickered constructive is gone — the scout&rsquo;s price
              pre-condition flipped back FALSE (spot −1.84% below the flip), so even the one leg
              that turned TRUE on 06-30 has re-closed. No shorts, no scout, no fresh hedge.
            </p>
            <p>
              BTC prints <span className="dn-tag">$58,701</span> at the parquet last bar
              (00:05Z),{' '}
              <span className="dn-tag bear">−2.50%</span> on 24h (vs the $60,207.60 bar
              exactly 24h prior — the 06-30 00:05Z parquet bar; the MTF scan reads −2.54%
              on its own 00:01Z window — the spread is the reference window, not a data
              conflict), inside a{' '}
              <span className="dn-tag">$60,250 / $58,160</span> 24h range (per the MTF
              scan H/L). The Deribit index reads $58,862 at 00:01Z and the MTF scan spot
              is $58,662 — so the freshest spot is well-corroborated across three
              independent fresh sources (parquet kline $58,701, GEX Deribit index $58,862,
              MTF scan $58,662), even though the live_db tape that normally supplies it is
              frozen at 06-17 06:43Z, 329.4h stale.{' '}
              <span className="dn-signal">The structural read has moved from a floor break
              CONFIRMED on the weekly close into which the tape bounced (06-30 note) to that
              same confirmed break with the bounce now fully REVERSED — the 06-30 daily close
              $58,605.40 handed back the entire 06-29 up-close and printed the lowest close of
              the run</span>: the 22JUN weekly close $63,990 was the last weekly hold, the daily
              closes walked down through the line (06-22 → 06-28), the 06-29 weekly bar closed
              $60,224.70 below the floor to confirm the break, the 06-29 daily bar bounced
              (+$674.50), and the 06-30 daily bar reversed it outright (−$1,619.30). Per the
              framework the break was confirmed at the weekly-close level and the 06-15 reclaim
              thesis falsified; nothing this cut un-does that — the bounce that followed the
              confirmation has simply failed.{' '}
              <span className="dn-em">
                The one structural positive of the lineage is broken at the weekly-close level
                and the reclaim thesis is dead; spot holds no MA beneath it, and the bounce
                the desk could not confirm as demand on 06-30 has been handed back — which
                leans the read toward short-cover, though the blind tape still cannot prove it.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · LIVE TAPE FROZEN 329.4h (fifteenth day) · SM book dead ~18.94 days · funding/OI/flow last-known stale · the 06-30 bounce was handed back on the 06-30 down-close, but the desk still cannot see whether that was short-cover exhausting or demand failing — the positioning tape is dark</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important source of this note — the live derivatives tape —
                is still down, a fifteenth calendar day running
              </span>. The OKX monitor has appended no row to live_db.json since{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> (t = &ldquo;06-17
              14:43&rdquo; BJ; the file mtime 06-17 06:43:08Z confirms the write stopped
              there; the process status is not archived or verified in this cut, so the note
              asserts the missing tape, not a live/hung process). That is now{' '}
              <span className="dn-tag bear">329.4h of missing tape</span> against the 00:06Z
              snapshot anchor — the 06-20 note flagged it at 65.4h, the 06-27 note at 233.4h,
              the 06-28 note at 257.4h, the 06-29 note at 281.4h, the 06-30 note at 305.4h,
              and the outage has run another ~24h without a write. Everything the live tape
              carries — funding, open interest, spot/futures CVD, perp basis, retail long%,
              taker-net, big-print flow, aggressor skew — is therefore{' '}
              <span className="dn-em">last-known at 06-17 06:43Z and not current</span>. The
              smart-money positioning triple (long_btc / short_btc / net_btc) has been
              byte-for-byte constant —{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> — since{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>, ~454.5h (~18.94 days).
              The 06-16 note flagged this dead feed at ~94.5h and put the squeeze-cycle ON
              HOLD; the 06-29 note carried it at ~406.5h, the 06-30 note at ~430.5h; today it
              is ~454.5h and still dead.{' '}
              <span className="dn-em">
                SM net is non-computable as a current read, and the SM cut fraction (|Δ| /
                prior_net) cannot be formed — there is no current SM net to difference. Any
                positioning claim in this note is explicitly historical, not live.
              </span>
            </p>

            <p>
              For completeness, the <em>last-available</em> tape readings — all pinned to
              the 06-17 06:43Z freeze and now 329.4h out of date, and byte-for-byte the same
              readings the 06-19 → 06-30 notes carried because it is the same frozen row —
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
                Read this as a near-nineteen-day-old fingerprint, not a signal: a two-sided
                funding book, OI bleeding, retail adding longs into the first leg of weakness.
                None of it can be carried forward to the 00:06Z snapshot — and it predates the
                entire 06-18 → 06-22 floor-hold sequence, the 06-23 → 06-28 leg that closed
                below the floor, the 06-29 weekly-close confirmation and up-close bounce, AND
                the 06-30 down-close that handed the bounce back, so it says nothing about how
                positioning absorbed the confirmed break or whether the failed bounce was
                short-cover exhausting or demand giving out. The desk treats the positioning
                dimension as unknown, and the 06-30 reversal as positioning-unconfirmed.
              </span>
            </p>
            <h2 className="dn-sec">
              Structure <span className="dn-roman">II · price/MTF FRESH · multi-TF resonance bearish 1 bull / 9 bear / 0 neutral (WORSENED by three from 1/6/3 — 30m/1h fell below cloud, 15m slipped back inside cloud) · 8h and 1d FLIPPED BACK to below-water DEATH crosses (were golden on 06-30), the 1w carries a water-down death cross too, while the 12h reads a 15-bar death cross that conflicts with the 06-30 just-printed 12h golden and is lineage-flagged, not a fresh re-cross this cut · 15m/30m/1h carry water-down golden crosses · 1M TD9 buy PRINTED (was one close away) · regime tightened to 6/9 reversal (mean-reversion, JT&lt;0) · spot below every MA, the whole ladder overhead, the 200W floor $62,643 CONFIRMED broken, spot −6.29% below on a seventh close</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map is fresh and worsened by three at the headline (1 bull / 9 bear /
                0 neutral, the 30m/1h frames fell below cloud and 15m slipped back inside cloud)
                while 8h and 1d flipped from below-water golden crosses back to below-water death
                crosses (the 12h is an older 15-bar death cross that conflicts with the 06-30 12h
                golden, lineage-flagged) — and the regime classifier tightened to 6/9
                mean-reversion
              </span> — the one dimension, with the dealer map, the desk can still trust
              today. The 00:01Z scan tags{' '}
              <span className="dn-tag bear">1 bull / 9 bear / 0 neutral across 10 frames</span>,
              net read <em>multi-TF resonance bearish · sell the bounce</em> — worsened from
              the 06-30 scan&rsquo;s 1/6/3 as the 30m/1h frames dropped below cloud and 15m
              slipped back inside cloud off their 06-30 reclaim. The regime line reads{' '}
              <span className="dn-tag">6/9 reversal / mean-reversion regime (JT&lt;0) —
              bounce-favoured</span> (was 5/9 on 06-30), so the classifier tightened the
              bounce-favoured lean by one — but the engine still carries no confirmed
              constructive trigger to act on it. The lone bull frame is the{' '}
              <span className="dn-tag">1M (above cloud, TD9 buy PRINTED at $58,662)</span> — the
              one fresh constructive print this cut, an oversold reversal hint on the monthly
              (was TD8, one close away, on 06-30). The near-term crosses are{' '}
              <span className="dn-tag">15m / 1h water-down golden crosses (1 bar / 2 bars) and
              a 30m water-down golden cross (12 bars)</span> — all unconfirmed below-water
              probes, not TD buys — while the down side holds the high frames:{' '}
              <span className="dn-tag bear">8h / 12h / 1d / 1w carry water-down death crosses
              (2 bars / 15 bars / 1 bar / 1 bar — only the 8h and 1d FLIPPED from golden crosses on
              06-30; the 12h death cross is 15 bars old and conflicts with the 06-30 note&rsquo;s
              just-printed 12h golden, so it is lineage-flagged, not a fresh re-cross this
              cut)</span>. Cloud: 15m back inside cloud (just crossed), 30m/1h/4h→1w below,
              1M above. The thin constructive set is the{' '}
              <span className="dn-tag">15m / 1h / 30m below-water golden crosses, a 1M TD9 buy
              PRINTED, and bottom (bullish-reversal) divs on 15m / 30m / 1h</span>.{' '}
              <span className="dn-em">
                Straight read: the frame stack worsened by three and the 8h and 1d re-crossed
                from below-water golden crosses back to death crosses (the 12h is an older 15-bar
                death cross, lineage-flagged), deepening the bearish
                trend frame — 30m→1w below cloud, 15m inside cloud, no MA support, the 200W floor confirmed
                broken and spot −6.29% below on a seventh close. The engine&rsquo;s only
                constructive prints are unconfirmed below-water golden crosses on the fast
                frames, a re-inside-cloud 15m, and a now-printed 1M TD9 buy. There is no
                confirmed engine print to trade the break long against; the 1M TD9 buy is a
                real oversold hint but a single monthly print into a short-gamma amplifying
                book with no MA beneath spot.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">58,672</td><td className="num">53.6</td><td className="bull">golden (water-dn) 1b</td><td className="neut">in cloud 刚穿 · 58.6k–58.9k</td><td>Sell 3</td><td>BEAR hid · BULL reg (bottom)</td></tr>
                <tr><td>30m</td><td className="num">58,672</td><td className="num bear">46.9</td><td className="bull">golden (water-dn) 12b</td><td className="bear">below ↑59.6k 41b</td><td>Sell 1</td><td>BEAR hid · BULL hid · BULL reg (bottom)</td></tr>
                <tr><td>1h</td><td className="num">58,672</td><td className="num bear">41.2</td><td className="bull">golden (water-dn) 2b</td><td className="bear">below ↑59.8k 18b</td><td>Buy 3</td><td>BEAR hid · BEAR reg (top) · BULL hid · BULL reg (bottom)</td></tr>
                <tr><td>4h</td><td className="num">58,673</td><td className="num bear">37.7</td><td className="bear">death (water-dn) 3b</td><td className="bear">below ↑60.9k 47b</td><td>Buy 7</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">58,673</td><td className="num bear">36.2</td><td className="bear">death (water-dn) 2b</td><td className="bear">below ↑63.2k 23b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">58,673</td><td className="num bear">32.9</td><td className="bear">death (water-dn) 15b</td><td className="bear">below ↑64.3k 79b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">58,662</td><td className="num bear">30.6</td><td className="bear">death (water-dn) 1b</td><td className="bear">below ↑68.8k 30b</td><td>Buy 2</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">58,662</td><td className="num bear">32.1</td><td className="neut">—</td><td className="bear">below ↑72.5k 10b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">58,662</td><td className="num bear">32.3</td><td className="bear">death (water-dn) 1b</td><td className="bear">below ↑99.5k 22b</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">58,662</td><td className="num bear">40.8</td><td className="neut">— (DIF water-dn)</td><td className="bull">above ↓47.0k 29b</td><td>TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (08:01 Beijing; rolling latest
                    file, archived verbatim at
                    /opt/desk-note/snapshots/2026-07-01-0006/). Net read{' '}
                    <em>multi-TF resonance bearish · sell the bounce (1 bull / 9 bear / 0
                    neutral)</em>; regime <em>6/9 reversal / mean-reversion regime (JT&lt;0,
                    bounce-favoured)</em>; active divergences{' '}
                    <em>reversal: top div 1h, bottom div 15m / 30m / 1h; hidden
                    (continuation): BEAR hid 15m / 30m / 1h / 4h / 1d, BULL hid 30m / 1h</em>.
                    Header alerts:{' '}
                    <em>8h water-down death cross (2 bars ago, DIF −939.2 — flipped from a
                    golden cross on 06-30)</em>,{' '}
                    <em>1d water-down death cross (1 bar ago, DIF −2,360.4 — flipped from a
                    golden cross on 06-30)</em>,{' '}
                    <em>1w water-down death cross (1 bar ago, DIF −5,878.7)</em>,{' '}
                    <em>15m water-down golden cross (1 bar ago, DIF −13.8)</em>,{' '}
                    <em>1h water-down golden cross (2 bars ago, DIF −319.9)</em>,{' '}
                    <em>1M TD9 BUY printed at $58,662 — oversold reversal hint</em>. Scan spot
                    $58,662, 24h −2.54%, 24h H/L $60,250 / $58,160, qVol $11.30B. Closes are
                    in-progress bars; treat every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is the same deep overhead wall as 06-30, and spot has dropped
              further from the floor on the reversal, so for the seventh cut in the lineage{' '}
              <span className="dn-tag bear">every line on the matrix is overhead — there is
              no positive offset, no MA beneath spot</span>. $58,701 sits{' '}
              <span className="dn-tag bear">−5.41% below D-EMA20 $62,059</span> — the nearest
              line, still overhead — then{' '}
              <span className="dn-tag bear">−5.98% below D-SMA20 $62,436</span> and{' '}
              <span className="dn-tag bear">−6.29% below the full-history W-SMA200 200W floor
              $62,643</span> (unchanged this cut). Above those, the cycle-proxy{' '}
              <span className="dn-tag bear">D-EMA50 $66,307 (−11.47%)</span>, then{' '}
              <span className="dn-tag bear">W-EMA200 $67,422 (−12.93%, seed)</span>, then{' '}
              <span className="dn-tag bear">D-SMA50 $68,100 (−13.80%)</span>, then a dense
              overhead band:{' '}
              <span className="dn-tag bear">D-EMA100 $70,094 (−16.25%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $70,502 (−16.74%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $70,548 (−16.79%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $71,227 (−17.59%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $71,780 (−18.22%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $73,265 (−19.88%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $73,825 (−20.49%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $75,205 (−21.95%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $75,876 (−22.64%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $76,161 (−22.93%)</span>. Far above and
              disused: W-EMA100 $80,125 (−26.74%), W-EMA50 $80,876 (−27.42%), W-SMA100
              $88,508 (−33.68%), W-SMA50 $88,624 (−33.76%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-01 00:05Z (close $58,701.30); offsets
                recomputed against that same last-bar close, which is the freshest available
                spot while the live tape is frozen. Displayed MA levels are $-rounded; offsets
                computed from exact series values. The displayed weekly ladder uses the 2023→
                subset (184 weekly bars), so W-SMA200 is non-computable there and W-EMA200
                $67,422 seeds from available history; the 200W floor $62,643 is recomputed
                separately from the full-history glob (356 completed weekly W-MON bars,
                INCLUDING the resolved 06-29 week and excluding the in-progress 07-06 week —
                unchanged from 06-30, the 06-29 week already resolved last cut). Daily closes:
                06-22 $63,990 (= the 22JUN weekly close), 06-23 $62,697, 06-24 $61,051 (first
                close below the floor), 06-25 $59,772, 06-26 $60,072, 06-27 $60,000, 06-28
                $59,550, 06-29 $60,225 (an UP-close +$674.50, AND the weekly close that
                confirmed the break), 06-30 $58,605 (seventh close below, a DOWN-close
                −$1,619.30, the lowest of the run — the 06-29 up-close handed back), 07-01
                (in-progress, 5-min bar) $58,701 — the floor break stays confirmed and the
                bounce is reversed.
              </span>
            </p>
            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book FLIPPED BACK to net-SHORT-gamma aggregate −31.5M (was +5.6M on 06-30, −20.1M on 06-29) — the book now AMPLIFIES the next move again · the near-dated 3JUL26 2.3 DTE amplifier BLEW OUT to −21.15M (from −4.86M on 06-30), now the heaviest negative expiry by far, the front is 1JUL26 0.3 DTE −3.65M (settles ~08:00Z today) · the flip slipped $60,135 → $59,804 and spot lost it, so spot is now −1.84% below (was +0.12% above) · IV 44.8%</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book reversed the 06-30 long-gamma flip and crossed back the
                hostile way: aggregate gamma flipped from +5.6M net-long to −31.5M
                net-SHORT-gamma, so the book amplifies rather than dampens the next move
                again, and the flip reclaim slipped back negative as spot fell below the flip
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bear">−31.5M / 1%</span> (was +5.6M on 06-30, −20.1M on
              06-29, +5.9M on 06-28); the book has whipsawed short → long → short across the
              last three notes and now sits net-short-gamma at the deepest of the four. The
              0-γ flip slipped{' '}
              <span className="dn-tag">$60,135 → $59,804 (−$331)</span>, and spot $58,701 fell
              below it, so spot sits <span className="dn-tag bear">−1.84% below the flip</span>
              {' '}on spot-denominated math (58,701.30 / 59,804 − 1 = −1.844%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads −1.6% off its Deribit-index
              $58,862 ($161 above parquet spot), which is{' '}
              <span className="dn-tag bear">−1.58%</span>
              (58,862 / 59,804 − 1 = −1.575%) — both references below the flip, LOST from
              +0.12% above on 06-30. The wall map is a put-heavy shelf straddling spot: the
              heaviest is{' '}
              <span className="dn-tag bear">$58k −18.63M</span> (heaviest wall, now just BELOW
              spot as the nearest support-test), with{' '}
              <span className="dn-tag bear">$59k −9.23M</span> just ABOVE spot,{' '}
              <span className="dn-tag bear">$60k −14.12M</span>,{' '}
              <span className="dn-tag bear">$56k −13.52M</span>,{' '}
              <span className="dn-tag bear">$55k −12.40M</span>,{' '}
              <span className="dn-tag bear">$50k −8.13M</span>,{' '}
              <span className="dn-tag bull">$60.5k +6.73M</span> (the first positive ceiling),{' '}
              <span className="dn-tag bear">$58.5k −6.09M</span>,{' '}
              <span className="dn-tag bull">$80k +5.65M</span>,{' '}
              <span className="dn-tag bull">$63k +5.36M</span>.{' '}
              <span className="dn-em">
                Critically, the aggregate is net-SHORT-gamma again, so the book amplifies the
                next move rather than damping it — a reversal of the +5.6M long-gamma book of
                06-30 and the most negative of the last four notes. Spot at $58,701 sits between
                the $58k −18.63M wall just beneath (now the nearest support-test) and the $59k
                −9.23M wall just above; the whole near shelf ($60k, $56k, $55k, $50k) is
                negative, none of it a proven floor, and the first positive wall does not appear
                until $60.5k +6.73M, overhead. A short-gamma book below the flip with a
                blown-out near-dated amplifier is the most hostile gamma backdrop the lineage
                has carried since the −87.5M book of 06-26.
              </span>{' '}
              By expiry the near-dated concentration RE-EMERGED and blew out: the front is the
              negative 1JUL26{' '}
              <span className="dn-tag bear">0.3 DTE at −3.65M (settles ~08:00Z today)</span>,
              then 2JUL26 1.3{' '}
              <span className="dn-tag bull">+2.04M</span>, 3JUL26 2.3{' '}
              <span className="dn-tag bear">−21.15M</span> (the near-dated downside amplifier,
              BLOWN OUT from −4.86M on 06-30 — now the heaviest negative expiry by far), 4JUL26
              3.3 +0.34M, 10JUL26 9.3{' '}
              <span className="dn-tag bear">−7.11M</span>, 17JUL26 16.3{' '}
              <span className="dn-tag bull">+2.37M</span>, 31JUL26 30.3{' '}
              <span className="dn-tag bear">−4.08M</span>, 28AUG26 58.3 +0.14M, 25SEP26 86.3{' '}
              <span className="dn-tag bear">−6.66M</span>, 25DEC26 177.3 −1.66M, 26MAR27 268.3
              −0.05M, 25JUN27 359.3 +0.45M. The 30JUN26 front settled ~08:00Z yesterday; the
              near-dated downside amplifier that the 06-30 note had seen shrink to −4.86M has
              blown out to 3JUL26 −21.15M at 2.3 DTE — the concentrated short-dated downside is
              back and larger. (The spot-referenced aggregate −31.5M is the net GEX at spot;
              the by-expiry rows are an independent decomposition and need not sum to it.)
            </p>

            <p>
              IV median across 874 instruments is{' '}
              <span className="dn-tag">44.8%</span> (up from 43.9% / 874 instruments on 06-30,
              the chain count unchanged) against 30D close-to-close RV of{' '}
              <span className="dn-tag">43.37%</span> — chain-level richness{' '}
              <span className="dn-tag">~+1.43pt</span> over realised (was ~+0.32pt on 06-30 —
              the chain RE-RICHENED as the book flipped back short-gamma and the down-move
              resumed), with RV staying elevated (43.37% today vs 43.58% on 06-30 and 24.91% on
              05-31 — the high-vol regime that started with the 06-08 → 06-18 down-leg
              persists). A chain-median across 874 instruments, <span className="dn-em">not</span>
              {' '}a tradable spread; expiry-/strike-level vega, skew and term structure remain
              not loaded; the vol read stays framework-only. RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log returns (= 31
              consecutive daily closes) anchored to parquet last bar 2026-07-01 00:05Z;
              underlying close window range $58,605 – $71,392. P/C ratio 0.57, Call OI 223,034
              / Put OI 128,197 BTC.
            </p>
            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · ~1.82h render — 10Y flat at 4.38% (15bp from the gate), TIPS 2.16% RISK-OFF, HY OAS 2.80% narrowed −3.0bp but STILL above its 2.78% re-grow gate, MOVE 68.1 (loose) · the FX legs firm: DXY eased to 101.17 (still EXTREME) and USD/JPY 161.93 · regime still NORMAL but loosened to the threshold (mean |r| 0.250), BTC now the WORST 7d performer as equities went green</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro panel render is ~1.82h lagged and the read eased at the margin:
                rates flat (10Y 4.38%), the credit spread narrowed −3bp to 2.80% but stayed
                just above its 2.78% re-grow gate, and the dollar eased to 101.17 while holding
                EXTREME
              </span>. Dashboard render is 2026-06-30 22:17Z, ~1.82h before the snapshot. US
              10Y nominal <span className="dn-tag">4.38% (0.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+0.88</span> — tight regime, RISK-OFF, 15bp from
              the 4.53% gate. 10Y TIPS real{' '}
              <span className="dn-tag">2.16% (−2.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.93</span> — still RISK-OFF, among the tightest
              lines on the panel. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.20% (+1.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag">2.22% (+2.0bp)</span> — inflation expectations soft.
              HY OAS{' '}
              <span className="dn-tag bear">2.80% (−3.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−0.62</span> — credit still loose on the
              z-regime; the spread narrowed −3bp but STILL prints above its 2.78% re-grow gate
              (it fired at 2.83% on 06-30 and holds just above the line this cut). MOVE bond
              vol is{' '}
              <span className="dn-tag">68.1</span> — the source tags +1.35 on its own 1d
              delta, still &ldquo;loose.&rdquo; The dollar eased but held EXTREME and the FX
              legs stayed firm this cut: DXY{' '}
              <span className="dn-tag bear">101.17 (+0.06 day)</span>, regime z{' '}
              <span className="dn-tag bear">+2.50</span>, off the 101.37 of 06-30 but still
              extreme. Fed net liquidity{' '}
              <span className="dn-tag bear">$5.812T (−0.037T)</span>, regime z{' '}
              <span className="dn-tag bear">−1.16</span> — no fresh weekly print this cut.
              USD/JPY{' '}
              <span className="dn-tag">161.93 (+0.15 day)</span>, regime z +1.57; US-JP 10Y
              spread{' '}
              <span className="dn-tag">1.73% (0.0bp)</span> narrow;
              USD/CNY <span className="dn-tag">6.7783</span>; WTI{' '}
              <span className="dn-tag stale">$78.9 (now stale 8d)</span>.{' '}
              <span className="dn-em">
                Net: the macro backdrop stayed risk-off but eased at the margin — the credit
                leg narrowed −3bp to 2.80% (still just above the 2.78% re-grow gate), the rates
                leg held flat at 4.38% (15bp from its 4.53% gate), and the dollar eased to
                101.17 but held EXTREME. The reclaim-long rates filter (10Y &lt; 4.55%) stays
                TRUE at 4.38% with room. The macro read still reinforces rather than refutes
                the confirmed break of the 200W floor — a broad risk-off backdrop with the
                credit gate still fired — but the fresh signal this cut is the cross-asset
                turn, not the macro panel: equities went green over the 7d window while BTC fell
                hardest, which makes this leg of the break look more idiosyncratic than
                risk-off-driven (see cross-asset below).
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
                <tr><td>US 10Y nominal</td><td className="num">4.38%</td><td className="num">0.0bp</td><td className="num bear">+0.88</td><td className="bear">tight · RISK-OFF · 15bp from gate</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.16%</td><td className="num bull">−2.0bp</td><td className="num bear">+1.93</td><td className="bear">RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.20%</td><td className="num">+1.0bp</td><td className="num">−0.40</td><td className="neut">soft</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.22%</td><td className="num">+2.0bp</td><td className="num">−1.73</td><td className="neut">soft</td></tr>
                <tr><td>HY OAS</td><td className="num">2.80%</td><td className="num bull">−3.0bp</td><td className="num bull">−0.62</td><td className="bear">narrowed but STILL above the 2.78% re-grow gate</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.516</td><td className="num">−0.00</td><td className="num">−0.07</td><td className="stale">weekly · neutral · now stale 11d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">68.1</td><td className="num bear">+1.35</td><td className="num bull">−0.66</td><td className="bull">loose</td></tr>
                <tr><td>DXY</td><td className="num">101.17</td><td className="num bear">+0.06</td><td className="num bear">+2.50</td><td className="bear">EXTREME RISK-OFF · eased but firm</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.812T</td><td className="num bear">−0.037T</td><td className="num bear">−1.16</td><td className="bear">drained · no fresh weekly print</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.93</td><td className="num bear">+0.15</td><td className="num bear">+1.57</td><td className="bear">firm</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.73%</td><td className="num">0.0bp</td><td className="num bull">−1.29</td><td className="neut">narrow</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7783</td><td className="num">−0.02</td><td className="num bull">−1.49</td><td className="neut">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>
            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.250</span> — loosened from the
              0.258 of 06-30 to sit exactly{' '}
              <span className="dn-tag">on the 0.25 idiosyncratic threshold</span>, so the
              regime line holds at{' '}
              <span className="dn-signal">NORMAL — BTC stays coupled by correlation to the
              broad cross-asset complex</span>, with its top ties still the equity /
              industrial-metal cluster: NQ{' '}
              <span className="dn-tag">+0.738</span>, NVDA{' '}
              <span className="dn-tag">+0.719</span>, SP500{' '}
              <span className="dn-tag">+0.663</span>, URNM{' '}
              <span className="dn-tag">+0.542</span>, JP225{' '}
              <span className="dn-tag">+0.530</span>, TSLA{' '}
              <span className="dn-tag">+0.496</span>, COPPER{' '}
              <span className="dn-tag">+0.475</span>, PALL{' '}
              <span className="dn-tag">+0.403</span>, PLAT{' '}
              <span className="dn-tag">+0.348</span>, AAPL{' '}
              <span className="dn-tag">+0.345</span>, META{' '}
              <span className="dn-tag">+0.336</span>, SILVER{' '}
              <span className="dn-tag">+0.328</span>, with CL{' '}
              <span className="dn-tag">−0.036</span> / BRENT{' '}
              <span className="dn-tag">−0.043</span> inverse and GOLD a weak{' '}
              <span className="dn-tag">+0.232</span>. But the 7d performance turned decisively:
              the broad risk complex went GREEN while BTC fell hardest —{' '}
              <span className="dn-tag bear">BTC −6.84%</span> is now the WORST performer of the
              complex, below URNM{' '}
              <span className="dn-tag bear">−6.07%</span> and PLAT{' '}
              <span className="dn-tag bear">−5.86%</span>, while equities rallied: NQ{' '}
              <span className="dn-tag bull">+2.45%</span>, SP500{' '}
              <span className="dn-tag bull">+1.33%</span>, JP225{' '}
              <span className="dn-tag bull">+2.66%</span>, GOOGL{' '}
              <span className="dn-tag bull">+2.72%</span>, AMZN{' '}
              <span className="dn-tag bull">+2.67%</span>, TSLA{' '}
              <span className="dn-tag bull">+8.25%</span>, MSFT{' '}
              <span className="dn-tag bull">+0.48%</span>, with NVDA{' '}
              <span className="dn-tag bear">−1.00%</span>, AAPL{' '}
              <span className="dn-tag bear">−1.40%</span>, META{' '}
              <span className="dn-tag bear">−0.20%</span> the only red mega-caps; metals mixed
              (GOLD{' '}
              <span className="dn-tag bear">−2.21%</span>, SILVER{' '}
              <span className="dn-tag bear">−5.14%</span>, PLAT{' '}
              <span className="dn-tag bear">−5.86%</span>, PALL{' '}
              <span className="dn-tag bear">−1.81%</span>, COPPER{' '}
              <span className="dn-tag bull">+0.67%</span>); crude down (CL{' '}
              <span className="dn-tag bear">−3.76%</span>, BRENT{' '}
              <span className="dn-tag bear">−3.96%</span>, NGAS{' '}
              <span className="dn-tag bull">+1.98%</span>).{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d return −6.84% vs NQ +2.45% is a lag of −9.29pt (was −4.33pt on
                06-30) — the gap to NQ WIDENED sharply, and this cut it flips the framing: BTC
                is now the deepest laggard of the whole complex, and the equity tape rallied
                while BTC broke. The correlation regime holds NORMAL (mean |r| exactly at the
                0.25 threshold, top ties still equities/metals), so BTC is not yet
                statistically decoupled — but the return dispersion says the confirmed break is
                looking MORE BTC-specific than risk-off-driven, a shift from the 06-24 → 06-30
                notes where BTC fell inside a broadly red complex. The macro z-panel still reads
                risk-off (rates tight, credit gate fired, DXY EXTREME), but the tape the peers
                actually printed over 7d was green — so the risk-off-tape framing weakens this
                cut, without flipping to a clean idiosyncratic read.
              </span>{' '}
              JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag — do not lean on it.
            </p>
            <h2 className="dn-sec">
              Trade book <span className="dn-roman">V · book FLAT · 200W floor — BREAK CONFIRMED on the 06-29 weekly close ($60,224.70 &lt; $62,643, −3.86%), 06-15 reclaim thesis FALSIFIED; the bounce that followed FAILED (06-30 close $58,605.40 handed it back) · scout price pre-condition flipped back FALSE (spot −1.84% below the flip) — scout STILL stood down (tape blind ~18.94 days, no confirmed engine trigger, no MA beneath spot) · macro tail credit gate STILL fired (OAS 2.80% &gt; 2.78%) · squeeze-cycle ON HOLD (SM dead ~18.94 days)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — the structural positive of the lineage is
                resolved AGAINST it (200W break confirmed on the weekly close, reclaim thesis
                falsified), the bounce that briefly turned the gamma/flip/MTF picture
                constructive on 06-30 has failed, and the binding constraint is still data
                integrity
              </span>. The 06-29 weekly close settled $60,224.70, −3.86% below the $62,643
              floor — the break is CONFIRMED and the 06-15 reclaim thesis FALSIFIED, and
              nothing this cut un-does that. The 06-30 note recorded a bounce into the
              confirmation (up-close, $60k and the flip reclaimed, book long-gamma, MTF
              improved to 1/6/3); this cut the bounce FAILED — the 06-30 daily close
              $58,605.40 handed back the entire 06-29 up-close, the dealer book flipped back to
              −31.5M net-short-gamma, the near-dated amplifier blew out to −21.15M, spot lost
              the flip (−1.84% below), and MTF worsened back to 1/9/0. The scout&rsquo;s price
              pre-condition, which flipped TRUE on 06-30, flipped back FALSE — spot is below
              the flip again — so even that one leg has re-closed. No new short either: chasing
              a confirmed break down −6.29% below the floor into a short-gamma amplifying book,
              with a printed 1M TD9 buy and bottom divs on the fast frames, on a blind tape, is
              a poor entry after the fact. The trade book today is: no shorts, no scout, no
              fresh hedge — fix the tape before reading whether the failed bounce was
              short-cover exhausting or demand giving out.
            </p>
            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch — BREAK CONFIRMED: the 06-29 weekly close $60,224.70 settled −3.86% below the $62,643 floor (the weekly-close escalation FIRED), the 06-15 reclaim thesis is FALSIFIED; the bounce that followed FAILED (06-30 close $58,605.40 handed it back); seven consecutive daily closes below (06-24 → 06-30)</span>
              <div className="dn-trade-name">
                200W cycle floor watch — the break is CONFIRMED on the 06-29 weekly close and the bounce has FAILED: floor $62,643 = full-history W-SMA200 (356 completed weekly bars, unchanged this cut), 06-29 weekly close $60,224.70 (−3.86% below) confirmed the break, the 06-30 daily close $58,605.40 handed back the 06-29 up-close (seventh daily close below, the deepest of the run), the 06-15 reclaim thesis FALSIFIED
              </div>
              <div className="dn-thesis">
                The 06-30 note recorded the break confirmed on the 06-29 weekly close with the
                tape bouncing into it. This cut the bounce failed: the 06-30 daily bar closed{' '}
                <span className="dn-tag bear">$58,605.40, −6.45% below the $62,643 floor</span>,
                a down-close −$1,619.30 that handed back the entire 06-29 up-close and printed
                the lowest close of the run. Per the framework an intraday wick is not the
                break, a daily close below is the early warning, and a sustained weekly close
                below is the escalation that breaks the floor and falsifies the 06-15 reclaim
                thesis — that weekly close printed on 06-29, so the break stays CONFIRMED and
                the reclaim thesis FALSIFIED. The 22JUN weekly close $63,990 was the last
                weekly hold; it remains superseded.{' '}
                <span className="dn-em">The structural positive of the lineage stays resolved
                against it at the weekly-close level; spot holds no MA beneath it, the floor
                — unchanged at $62,643 — is confirmed resistance, and the bounce that briefly
                flickered constructive has been handed back.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor (unchanged)</span><span className="dn-lvl-v">$62,643 = full-history W-SMA200, recomputed this cut from the 2019→ parquet glob (356 completed weekly W-MON bars, INCLUDING the resolved 06-29 week and excluding the in-progress 07-06 week); unchanged from the 06-30 note, the 06-29 week already resolved last cut · weekly_200sma.json absent so the ratio percentile / last-event stay unsourced, not fabricated</span></div>
                <div><span className="dn-lvl-k">break — CONFIRMED, bounce FAILED</span><span className="dn-lvl-v bear">06-29 weekly close $60,224.70 settled −3.86% below the floor — the break is confirmed; seven consecutive daily closes below (06-24 $61,051 −2.54%, 06-25 $59,772 −4.58%, 06-26 $60,072 −4.10%, 06-27 $60,000 −4.22%, 06-28 $59,550 −4.94%, 06-29 $60,225 −3.86% an up-close, 06-30 $58,605 −6.45% a down-close, the deepest); the 06-29 up-close was handed back on 06-30</span></div>
                <div><span className="dn-lvl-k">reclaim thesis — FALSIFIED</span><span className="dn-lvl-v bear">the 06-15 reclaim thesis required the floor to hold on a weekly-close basis; the 06-29 weekly close below the floor falsifies it — the prior 22JUN weekly hold ($63,990) is superseded</span></div>
                <div><span className="dn-lvl-k">reclaim ladder (now the recovery path)</span><span className="dn-lvl-v bear">spot is −1.84% below the flip $59,804 (lost), −5.41% below D-EMA20 $62,059, −6.29% below the floor $62,643, −5.98% below D-SMA20 $62,436 — no MA beneath spot; a structural recovery is a sustained weekly close back above the floor $62,643 (the level the break must un-do), with the flip $59,804, D-EMA20 $62,059 and D-SMA20 $62,436 as the way-stations — NOT a scout trigger on a blind tape (see scout)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework, not a trade.</b> The floor watch is the single load-bearing
                live level while everything else is stale or framework-only. The break is
                confirmed on the weekly close, the reclaim thesis is falsified, and the bounce
                has failed — no position is taken on the watch: it sets the confirmed break
                (06-29 weekly close $60,224.70 &lt; $62,643), the recovery condition (a
                sustained weekly close back above the floor $62,643), and the reclaim
                way-stations (flip $59,804 → D-EMA20 $62,059 → D-SMA20 $62,436 → floor
                $62,643), and the desk will not chase a confirmed break short −6.29% below the
                floor into a printed 1M TD9 buy and bottom divs on a blind tape, nor long into
                a recovery it cannot confirm.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STILL STOOD DOWN · price pre-condition flipped back FALSE (spot −1.84% below the flip, LOST from +0.12% above on 06-30) and the book FLIPPED BACK net-short-gamma — the one leg that turned TRUE on 06-30 has re-closed; tape blind ~18.94 days + no confirmed engine trigger + no MA beneath spot still bind</span>
              <div className="dn-trade-name">
                Cover-bounce scout — the flip reclaim flipped back FALSE (spot −1.84% below) and the book flipped back net-short-gamma, so even the price leg re-closed; the scout stays stood down on a blind tape with no confirmed engine trigger and no MA beneath spot
              </div>
              <div className="dn-thesis">
                The 06-22 note saw the scout&rsquo;s price pre-condition print briefly, the
                06-30 note saw it flip TRUE and hold (spot +0.12% above the flip). This cut it
                flipped back FALSE: spot is{' '}
                <em>−1.84% below the flip</em> $59,804 (which slipped −$331), has lost $60k and
                $59k, and the dealer book flipped back to −31.5M net-short-gamma. So the price
                and gamma legs that both turned constructive on 06-30 have both re-closed — the
                scout is blocked on all counts again. (1) The positioning legs (SM short bleed,
                funding posture, cover-flow) all require a live tape, and there is none — the
                desk cannot see whether the failed bounce was short-cover exhausting or demand
                giving out. (2) The engine carries no confirmed constructive trigger — only
                unconfirmed below-water golden crosses (15m / 1h / 30m), a re-inside-cloud 15m,
                and a now-printed 1M TD9 buy; no confirmed multi-frame turn. (3) There is still
                no MA beneath spot — spot is below the flip, D-EMA20, D-SMA20 and the floor.{' '}
                <span className="dn-em">A scout long on a positioning-blind tape, with no
                confirmed engine print, a net-short-gamma amplifying book and no MA beneath
                spot, is not a trade — and this cut even the price pre-condition that flickered
                TRUE on 06-30 has re-closed. The 1M TD9 buy is a real oversold hint worth
                recording, but a single monthly print is not sufficient to size into a scout
                against a failed bounce.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">stood down · no entry · price pre-condition flipped back FALSE (spot −1.84% below the flip, lost from +0.12% above on 06-30) and the book is net-short-gamma; no MA beneath spot, tape blind, engine unconfirmed; re-evaluate only after the live tape is restored AND a confirming engine print</span></div>
                <div><span className="dn-lvl-k">technical pre-condition</span><span className="dn-lvl-v bear">flip $59,804 reclaim (FALSE — spot −1.84% below) AND D-EMA20 $62,059 / floor $62,643 / D-SMA20 $62,436 reclaim false (spot below all, no MA beneath spot) AND a confirming engine print (NOT true — 1 bull / 9 bear / 0 neutral, only unconfirmed below-water golden crosses on the fast frames and a 1M TD9 buy; regime holds mean-reversion)</span></div>
                <div><span className="dn-lvl-k">data pre-condition</span><span className="dn-lvl-v bear">live tape restored (currently 329.4h frozen) AND SM feed live (currently dead ~18.94 days) — both must hold before any positioning leg can be read; this is the binding block</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> no scout entry without a live positioning tape. The 1M TD9
                buy, the below-water golden crosses, the bottom divs and the bounce-favoured
                regime do not trigger a scout while the SM / funding / flow legs are blind, spot
                is below the flip / D-EMA20 / the floor / D-SMA20 with no MA beneath it, and the
                book is net-short-gamma with no confirmed engine trigger — the desk does not
                size into a cover-bounce it cannot see being covered. The price block that
                lifted on 06-22 and again on 06-30 has re-closed this cut; the operational block
                (tape down) and the engine block (no confirmed trigger) still bind.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — credit leg STILL fired: HY OAS 2.80% &gt; the 2.78% gate (narrowed −3.0bp this cut but holds above), 10Y leg 15bp away (4.38% vs 4.53% gate); the credit leg remains above its trigger on a close basis</span>
              <div className="dn-trade-name">
                Downside put-spread — re-grow credit gate STILL fired (OAS 2.80% &gt; 2.78%), the rates leg 15bp away; no hedge added (the dealer book is net-short-gamma with a blown-out near-dated amplifier, so the endogenous downside risk RE-GREW even as the macro credit gate narrowed toward its line)
              </div>
              <div className="dn-thesis">
                The macro re-grow gate the lineage carries — HY OAS &gt; 2.78% OR 10Y &gt;
                4.53% as the condition to re-grow a downside tail — remains fired on the credit
                leg: HY OAS{' '}
                <em>2.80%</em>, −3bp this cut but still above the gate (it fired at 2.83% on
                06-30 and holds just above the line), while the 10Y is flat at 4.38% and sits
                15bp away. So the credit leg stays above its trigger and the rates leg is well
                off. The reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE at 4.38%, with
                room. The macro tape is still a genuine risk-off impulse on the z-panel (rates
                tight, credit gate fired, dollar EXTREME), but a macro tail is not the right
                instrument for an endogenous-cum-idiosyncratic floor break, and the dealer book
                has flipped back to net-short-gamma with the near-dated amplifier blown out to
                −21.15M, so the endogenous downside structure re-grew this cut on its own —
                which is a reason to watch the tail, not to chase it after a −6.29% break.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">no position · credit gate STILL fired on a close basis · HY OAS 2.80% &gt; 2.78% (−3.0bp but holds above), 10Y leg 15bp away</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (fired on credit)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close — FIRED at 2.80% (narrowed −3.0bp but holds above) · OR 10Y &gt; 4.53% close (currently 4.38%, 15bp to fire — the further leg by far)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — TRUE at 4.38%; awaits a BTC-internal pivot AND a live tape to translate</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as the levels
                drift, not backtested breakpoints. The credit leg holds a close above the gate
                (OAS 2.80% &gt; 2.78%) and the rates leg sits 15bp away; a downside tail off the
                fired credit gate would be reassessed in a separate future note (trigger /
                invalidation / R defined there); note the dealer book has flipped back to
                net-short-gamma with the near-dated amplifier blown out, so the endogenous
                downside structure re-grew this cut in step with the macro credit gate — but the
                move has already run −6.29% below the floor, so chasing a tail here would be
                late.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · ON HOLD — SM feed DEAD ~18.94 days, the re-stack signature cannot be read this cut</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — ON HOLD (continuation of 06-16 → 06-30): the SM feed is frozen ~454.5h, the re-stack signature cannot be read this cut
              </div>
              <div className="dn-thesis">
                The squeeze-cycle / re-stack-hostile-2 framework reads discrete SM steps
                (Δshort &gt; 0 + Δlong &lt; 0 same minute) as continuation signatures; its
                calendar prior (the BJ 13–15 cadence) was falsified on 05-31 and it has run as
                a no-prior watchlist since. It cannot be assessed today for the simplest
                reason: the SM feed is dead. long_btc / short_btc / net_btc have been constant
                since 2026-06-12 01:36Z (~454.5h), so there are no SM deltas to read. The
                06-16 note put this ON HOLD at ~94.5h, the 06-29 note at ~406.5h, the 06-30
                note at ~430.5h; it remains ON HOLD at ~454.5h.{' '}
                <span className="dn-em">No signature can print from a frozen feed; the
                framework is dark until the SM data resumes.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v bear">ON HOLD · SM feed frozen ~454.5h (since 2026-06-12 01:36Z) · no SM deltas computable</span></div>
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
              Decision conditions <span className="dn-roman">VI · LIVE TAPE OUTAGE still the operative condition (fifteenth day) · 200W floor BREAK CONFIRMED on the 06-29 weekly close ($60,224.70 &lt; $62,643, −3.86%), 06-15 reclaim thesis FALSIFIED, the bounce FAILED (06-30 close $58,605.40) · flip LOST (spot −1.84% below), book FLIPPED BACK to −31.5M net-SHORT-gamma with the near-dated amplifier blown out (3JUL26 −21.15M) · scout price pre-condition flipped back FALSE · macro credit gate STILL fired (OAS 2.80%), regime NORMAL but BTC now the worst 7d performer</span>
            </h2>

            <p>
              Of the 06-30 conditions: the live tape did <em>not</em> come back — it is ~24h
              deader, now 329.4h frozen with the SM feed at ~18.94 days; the 200W floor break
              stays CONFIRMED on the 06-29 weekly close ($60,224.70, −3.86% below the $62,643
              floor) and the 06-15 reclaim thesis stays FALSIFIED; the floor is unchanged this
              cut ($62,643, the 06-29 week already resolved); the bounce the 06-30 note carried
              FAILED — the 06-30 daily close $58,605.40 handed back the 06-29 up-close and
              printed the lowest close of the run; the flip was LOST (spot −1.84% below vs
              +0.12% above on 06-30) as the flip slipped to $59,804; the dealer book reversed
              its 06-30 long-gamma flip and FLIPPED BACK from +5.6M to −31.5M net-SHORT-gamma —
              it now amplifies the next move again, with the near-dated downside amplifier blown
              out to 3JUL26 −21.15M; the scout&rsquo;s price pre-condition flipped back FALSE
              and the engine carries only unconfirmed below-water golden crosses and a printed
              1M TD9 buy; the macro re-grow gate stays fired on the credit leg (OAS 2.80% &gt;
              2.78%) while the rates leg is flat at 4.38% (15bp away); the correlation regime
              held NORMAL but BTC&rsquo;s 7d return became the WORST of the complex as equities
              went green, so the break looks more idiosyncratic; the squeeze-cycle stayed ON
              HOLD on a deader feed. The dominant condition is unchanged: <em>the desk is
              positioning-blind, into a 200W floor break CONFIRMED on the weekly close, a
              bounce that has now failed, and a book that has flipped back net-short-gamma —
              none of which it can confirm against the tape</em>. The conditions today re-set
              around the continuing outage, the confirmed weekly-close break, the failed bounce,
              and the net-short-gamma re-flip:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Live tape restored (PRIMARY operational)</td><td className="bull">live_db.json resumes writing fresh rows beyond 2026-06-17 06:43Z AND the SM triple updates off its 06-12 01:36Z freeze</td><td>re-read funding / OI / flow / SM in full; only then can the scout or squeeze-cycle be evaluated — and only then can the failed 06-30 bounce be confirmed as short-cover exhausting vs demand giving out; the positioning dimension has now been blind thirteen notes running</td></tr>
                <tr><td>200W floor — BREAK CONFIRMED, bounce FAILED</td><td className="bear">06-29 weekly close $60,224.70 settled −3.86% below the $62,643 floor — the break is confirmed; seven consecutive daily closes below (06-24 → 06-30), the 06-30 close $58,605.40 the deepest (−6.45%), handing back the 06-29 up-close; in-progress 07-01 bar $58,701, −6.29% below</td><td>the floor break is confirmed at the weekly-close level and the bounce has failed — the floor ($62,643) is confirmed resistance; no position taken</td></tr>
                <tr><td>200W reclaim thesis — FALSIFIED</td><td className="bear">the 06-15 reclaim thesis required a weekly-close hold of the floor; the 06-29 weekly close below falsifies it — the prior 22JUN weekly hold ($63,990) is superseded</td><td>the reclaim thesis is dead; a structural recovery now requires a sustained weekly close back above the floor $62,643; watch that weekly close</td></tr>
                <tr><td>Flip reclaim (scout price pre-condition) — LOST</td><td className="bear">spot $58,701 −1.84% below flip $59,804, −5.41% below D-EMA20 $62,059, −6.29% below the floor $62,643; no MA beneath spot; the flip sits below the floor</td><td>the price pre-condition flipped back FALSE — the 06-30 reclaim was handed back; a scout still needs the live tape restored AND a confirming engine print; on a blind tape with no MA beneath spot the loss is recorded, not traded</td></tr>
                <tr><td>Dealer book — FLIPPED BACK net-SHORT-gamma</td><td className="bear">aggregate GEX −31.5M (was +5.6M on 06-30, −20.1M on 06-29); the front is 1JUL26 0.3 DTE at −3.65M (settles ~08:00Z today); the near-dated 3JUL26 amplifier blew out to −21.15M; spot sits between the $58k −18.63M wall just below and the $59k −9.23M wall just above; the first positive wall is $60.5k +6.73M overhead</td><td>the dealer book now AMPLIFIES the next move again — the near-dated concentrated downside risk re-grew; watch only, no instruction (the book is hostile but the tape is blind)</td></tr>
                <tr><td>Macro tail re-grow (credit leg fired)</td><td className="bear">HY OAS 2.80% &gt; 2.78% (fired, narrowed −3.0bp but holds above) OR 10Y &gt; 4.53% (15bp to fire, flat at 4.38%) — the FX legs firm (DXY 101.17, USD/JPY 161.93)</td><td>no hedge instruction in this note — the fired credit gate would be reassessed in a separate future note; note the book has flipped back net-short-gamma with the near-dated amplifier blown out, so the endogenous downside structure re-grew in step with the macro gate — but the move has already run −6.29% below the floor</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.38%</td><td>standalone filter true with room; needs a BTC-internal pivot AND a live tape to translate to a scout long</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (ON HOLD)</td><td className="stale">SM feed dead ~454.5h; no deltas computable</td><td>suspended, not negative — re-arm on the first fresh SM deltas after the feed resumes</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the failed 06-30 bounce — which reclaimed $60k and the flip on 06-29
                and then handed it all back on the 06-30 down-close into a re-flipped
                short-gamma book, with the near-dated amplifier blown out and the 200W break
                already confirmed — was short-cover exhausting or demand giving out, which only
                a restored tape can say; on the structural side, the recovery still requires a
                sustained weekly close back above the floor $62,643, with the flip $59,804,
                D-EMA20 $62,059 and D-SMA20 $62,436 the way-stations
              </span>. The dealer book that flipped long on 06-30 has reversed and flipped back
              outright (aggregate +5.6M → −31.5M net-SHORT-gamma with the near-dated amplifier
              blown out to 3JUL26 −21.15M, spot from +0.12% above the flip to −1.84% below), so
              the book now amplifies the next move again; the structural positive — the 200W
              floor — stays confirmed broken on the weekly close and the 06-15 reclaim thesis
              stays dead, the bounce has failed, and the desk still cannot read the tape that
              would say whether the failed bounce was short-cover or demand. Until the tape is
              restored this note runs as written: the book is flat, the scout&rsquo;s price
              block flipped back FALSE with the engine on unconfirmed below-water golden crosses
              and a printed 1M TD9 buy, the macro tail credit gate holds above its line (OAS
              2.80%), the squeeze-cycle is suspended, and the 200W floor watch is the one live
              level — a floor confirmed broken on the weekly close with the bounce handed back,
              the recovery condition a weekly close back above $62,643. Price handed back the
              $60k pin and the flip and MTF worsened by three, the book turned short-gamma and
              the regime tightened to mean-reversion with a printed 1M TD9 buy; macro stayed
              risk-off on the z-panel (rates tight, credit gate fired, dollar EXTREME) but the
              correlation regime loosened to the threshold as the complex went green with BTC
              the worst 7d performer, so the break now looks more BTC-specific than
              risk-off-driven — and the dealer structure has turned amplifying again. The right
              read for the next 24h is{' '}
              <em>break-confirmed-on-the-weekly-close, bounce-failed — respect the confirmed
              break, watch whether spot can build a weekly close back above the floor, fix the
              tape before reading whether the failed bounce was short-cover or demand, and do
              not scout a lost flip the engine cannot confirm on a blind tape</em>.
            </p>
          </div>
          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> this is the <b>v2</b> note — <b>post codex hostile audit</b>. The
            cross-model hostile audit (codex primary + owns the publish gate; ask-deepseek
            numeric second-audit, adjudicated not auto-applied) ran against the pinned
            2026-07-01 00:06Z snapshot and returned{' '}
            <b>PASS-WITH-NOTES — 0 CRITICAL, 1 MAJOR, 1 MINOR</b> (see{' '}
            <code>audits/2026-07-01-desk-note.md</code>). Every finding was adjudicated, applied
            in place, and grep-closed to zero stale matches before this v2 promotion.{' '}
            <b>DN-2026-07-01-001 (MAJOR — MTF re-cross overreach):</b> patterns searched{' '}
            <code>8h/12h/1d</code> (re-cross / flip grouping), <code>15m/30m/1h ... below
            cloud</code>, <code>only 15m/1h ... golden</code>, <code>re-took/re-crossed the
            high frames</code> — 6+ hits before across the manifest em, lead, Structure II
            roman + signal + prose + em; <b>0 stale hits after</b>. The headline/prose now
            state that only 8h and 1d flipped back from 06-30 golden to below-water death
            crosses, that the 12h is a 15-bar death cross that conflicts with the 06-30
            just-printed 12h golden and is lineage-flagged (not a fresh re-cross), that 30m/1h
            fell below cloud while 15m slipped back inside cloud, and that 15m/30m/1h all carry
            water-down golden crosses — matching the page&rsquo;s own table (15m in cloud /
            golden 1b, 30m golden 12b, 12h death 15b). RESOLVED (hits-after = 0).{' '}
            <b>DN-2026-07-01-002 (MINOR — stale MSFT 7d return):</b> pattern searched{' '}
            <code>MSFT +0.29%</code> — 1 hit before, <b>0 after</b>; corrected to{' '}
            <b>+0.48%</b> per <code>cross_asset_correlation_summary.md:74</code>. RESOLVED
            (hits-after = 0).{' '}
            <b>ask-deepseek numeric second-audit (MINOR — 0γ dual-reference %):</b> ADJUDICATED
            and <b>REJECTED</b> — recompute gives 58,862 / 59,804 − 1 = −1.575145%, so the
            draft&rsquo;s <b>−1.575%</b> (and its −1.58% round) is arithmetically correct;
            DeepSeek&rsquo;s claimed −1.5734% is the miscalculation. No change applied (GLM /
            ask-deepseek is a second-audit aid, not an auditor). All findings <b>post codex
            hostile audit</b>.{' '}
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
            atomic snapshot (2026-07-01 00:06Z) with section-level provenance disclosed in the
            manifest band above;{' '}
            <em>critically, the live derivatives tape was frozen for 329.4h at snapshot time
            (last row 2026-06-17 06:43Z) and the smart-money positioning feed has been dead
            ~18.94 days</em>, so all funding, OI, flow and positioning figures are explicitly
            last-known / stale or non-computable and flagged as such; the macro panel render is
            2026-06-30 22:17Z (~1.82h before snapshot). Price, MTF, GEX and cross-asset are
            fresh. This is the v2 note, promoted after the codex hostile audit; the audit
            findings have been adjudicated and applied. Levels, sizes, and conditions are
            illustrative of the desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future tape. Derivatives
            carry the risk of total loss and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The bounce failed and the tape handed it back: the 06-29 up-close was reversed
                on the 06-30 down-close ($58,605.40, the lowest of the run), the dealer book
                flipped BACK to −31.5M net-SHORT-gamma, the near-dated amplifier blew out to
                −21.15M, and spot lost the flip — all read through a dead tape a fifteenth day.
                Break confirmed. Bounce failed. Book short-gamma. Flip lost. Blind.
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
            v2 · 2026-07-01 00:06Z snapshot · post codex hostile audit ·
            2026-07-01T01:05:00Z · sources: live_db.json (FROZEN 329.4h) ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED · Yahoo ·
            Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
