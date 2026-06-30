import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-30 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-30',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-30' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260630() {
  await requireViewer('/desk/2026-06-30');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-30 · v2</span>
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
              <span className="dn-big">$60,208</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.46%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-30 00:06Z ·{' '}
              <span className="dn-em">
                THE BREAK CONFIRMED ON THE WEEKLY CLOSE WHILE THE TAPE BOUNCED INTO
                IT. The 06-29 weekly close RESOLVED at $60,224.70 — BELOW the now
                $62,643 floor (−3.86%) — so the weekly-close escalation the 06-29 note
                said &ldquo;settles today&rdquo; FIRED, the floor break is CONFIRMED and
                the 06-15 reclaim thesis is FALSIFIED (the dominant structural negative
                of this cut). The floor itself STEPPED UP $62,443 → $62,643 as the 06-29
                weekly bar completed (356 completed bars now) and an old ~$20k 2022 bar
                rolled off the 200-window. BUT the tape bounced into the confirmation: the
                06-29 daily bar was an UP-close +$674.50, spot prints $60,208 (+1.46%) and
                has RECLAIMED $60k and the 0γ flip (+0.12% above), the dealer book FLIPPED
                BACK to +5.6M net-LONG-gamma (dampening restored), the 3JUL amplifier
                SHRANK −9.63M → −4.86M, MTF improved 1/9/0 → 1/6/3 with 8h/12h/1d flipping
                to below-water golden crosses, and the macro credit re-grow gate FIRED (HY
                OAS 2.83% &gt; 2.78%). All read through a dead derivatives tape, now into a
                fourteenth calendar day — the OKX monitor has been frozen 305.4h and the SM
                feed dead ~17.94 days.
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
                    <b>305.4h stale</b> vs the 00:06Z snapshot anchor (was 281.4h on
                    the 06-29 note, 257.4h on 06-28 — the outage has run another ~24h
                    since the last note, into its fourteenth calendar day). Funding / OI /
                    CVD / basis / retail / taker-flow are LAST-KNOWN at 06-17 06:43Z, not
                    current. The SM sub-feed (long_btc / short_btc / net_btc) is frozen
                    even longer — constant since 2026-06-12 01:36Z (~430.5h / ~17.94 days);
                    SM net and the SM cut-fraction are <b>NON-COMPUTABLE</b> this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-30 00:01Z scan</td>
                  <td className="dn-flag">
                    fresh (~5 min before anchor) · rolling latest-file artifact,
                    archived verbatim at
                    /opt/desk-note/snapshots/2026-06-30-0006/ · in-progress bars · scan
                    spot $60,195, 24h +1.24%, 24h H/L $60,758 / $58,850, qVol $13.63B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-30 00:02Z snapshot</td>
                  <td className="dn-flag">
                    fresh (~4 min before anchor) · Deribit idx $60,422 ($214 above
                    parquet spot $60,208) · 874 instruments (−42 vs 06-29) · net GEX{' '}
                    <b>+5.6M</b> (net LONG gamma, <b>FLIPPED BACK POSITIVE</b> from
                    −20.1M on 06-29; +5.9M on 06-28) · flip $60,135 (spot +0.12% ABOVE,
                    RECLAIMED from −1.42% below) · the front is 30JUN26 0.3 DTE at{' '}
                    <b>+8.51M</b> (positive, settles ~08:00Z today), the heaviest negative
                    expiry is 25SEP26 87.3 at <b>−5.41M</b> while the near-dated 3JUL26 3.3
                    amplifier SHRANK to <b>−4.86M</b> (from −9.63M on 06-29) · spot $60,208
                    sits just above the $60k −14.28M wall (heaviest, now just BELOW spot as
                    support-tested), with the $60.5k +11.07M positive wall just overhead
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-30 00:02Z
                  </td>
                  <td className="dn-flag">fresh · 7d 1h bars · 22 assets · 167 rows · regime NORMAL (mean |r| 0.258, loosened from 0.283 on 06-29 toward but still above the 0.25 idiosyncratic threshold — BTC still coupled to the broad risk complex)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-29 22:16Z render</td>
                  <td className="dn-flag">
                    ~1.85h render lag · 10Y <b>4.38%</b> (−2.0bp, 15bp from the 4.53%
                    gate), TIPS <b>2.18%</b> (−1.0bp, still EXTREME RISK-OFF), HY OAS{' '}
                    <b>2.83%</b> (+5.0bp — <b>FIRED above the 2.78% re-grow gate</b>) ·
                    MOVE bond vol <b>68.1</b> (source 1d Δ +1.35, loose) · the FX legs:{' '}
                    <b>DXY 101.37</b> (+0.01 day) and <b>USD/JPY 161.93</b> (+0.15 day),
                    both still firm · Fed net liq $5.812T (−0.037T, no fresh weekly print)
                    · NFCI neutral (now stale 10d) · WTI $78.9 now stale 7d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-30 00:05Z (close $60,208)</td>
                  <td className="dn-flag">
                    fresh kline (exchange OHLC, independent of the frozen live tape) ·
                    offsets recomputed vs the parquet last-bar close, the freshest
                    available spot while the live tape is frozen · the displayed weekly
                    ladder uses the 2023→ subset (184 weekly bars), so no W-SMA200 row;
                    the 200W floor is recomputed directly from the full-history glob —
                    <b>356 completed weekly W-MON bars</b> (2019→present), INCLUDING the
                    now-resolved 06-29 week and excluding the in-progress 07-06 week —{' '}
                    = <b>$62,643</b>, STEPPED UP ~$200 from the $62,443 the 06-25 → 06-29
                    notes pinned, as the 06-29 bar completed and an old ~$20k 2022 bar
                    rolled off the 200-window. <b>Spot is −3.89% BELOW the floor and every
                    MA on the matrix is still overhead — no positive offset, the sixth such
                    cut of the lineage</b> · weekly_200sma.json absent this cut, so the
                    ratio percentile / last-event stay unsourced, not fabricated
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
              <span className="dn-v bear">−7.24% (STALE · 06-17 06:43Z · 305.4h)</span>
              <span className="dn-src">live_db raw funding −0.006608 × 1095 = −7.24% ann (NOT ×100) · LAST-KNOWN at the 06-17 06:43Z freeze, now 305.4h stale, not a current read · byte-for-byte the same frozen row carried by the 06-19 → 06-29 notes; the last-available ann over the 24h+1m inclusive sampled window ending at the freeze (1,442 rows) was mean +0.20%, range −7.24% / +7.21%, 819 / 1,442 rows negative — a balanced, two-sided book at the point the tape died</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · vs 06-29</span>
              <span className="dn-v">tape frozen — not computable</span>
              <span className="dn-src">the live tape has not written since 06-17 06:43Z, so there is still no current funding to difference against the 06-29 note · last-known print at the freeze was −7.24% ann (shorts paying longs); the leverage gate remains un-assessable a fourteenth day running</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC (−0.45%) · STALE window</span>
              <span className="dn-src">live_db oi_btc 102,945 at the 06-17 06:43Z freeze vs the start of a 24h+1m inclusive sampled window (1,442 rows) · the window ENDS at the freeze, NOT into the 00:06Z snapshot — it describes the tape up to 06-17 06:43Z and is 305.4h out of date</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` at the 06-17 06:43Z freeze (was 58.29% at the start of the 24h+1m inclusive sampled window — a +1.18pt long add into the roll-over) · last-known, 305.4h stale</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED DEAD ~430.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · this triple has been byte-for-byte constant since 2026-06-12 01:36Z (~430.5h / ~17.94 days) — it is a FROZEN value, NOT a current positioning read; carried only to mark the dead feed</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">NON-COMPUTABLE</span>
              <span className="dn-src">SM feed frozen ~17.94 days · |Δ| / prior_net cannot be computed — there is no current SM net to difference · the squeeze-cycle / re-stack framework is blind this cut, a continuation of the 06-16 → 06-29 ON-HOLD</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.9% / 43.58%</span>
              <span className="dn-src">GEX median IV across 874 instruments (00:02Z, fresh) vs 30D close-to-close RV 43.58% off parquet — chain richness COLLAPSED to ~+0.32pt over realised (was ~+4.93pt on 06-29 — the chain CHEAPENED sharply as the book flipped back long-gamma and the down-move stalled); RV stays elevated (was 43.07% on 06-29, 24.91% on 05-31) · IV is a chain-median across 874 instruments, NOT a tradable spread</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+0.12% (above · RECLAIMED)</span>
              <span className="dn-src">flip $60,135 (was $60,119 · firmed +$16) · vs parquet spot $60,208 (60,207.60 / 60,135 − 1 = +0.121%) / GEX file Deribit idx $60,422 (60,422 / 60,135 − 1 = +0.477%, file reads +0.5%) — both references ABOVE the flip, RECLAIMED from −1.42% below on 06-29 · net GEX +5.6M (net LONG gamma, FLIPPED BACK POSITIVE from −20.1M) · the 3JUL26 amplifier shrank to −4.86M (from −9.63M)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The break confirmed on the weekly close while the tape bounced into it.
                The 06-29 weekly close RESOLVED at $60,224.70 — below the now $62,643
                floor (−3.86%) — so the weekly-close escalation that the 06-29 note said
                settled today FIRED: the 200W floor break is CONFIRMED and the 06-15
                reclaim thesis is FALSIFIED, the dominant structural negative of this cut.
                But simultaneously the tape bounced into the confirmation — the 06-29 daily
                bar was an UP-close (+$674.50), spot reclaimed $60k AND the 0γ flip, the
                dealer book flipped BACK to +5.6M net-long-gamma, the near-dated amplifier
                shrank, MTF improved to 1/6/3, and the macro credit gate FIRED — all read
                through a dead derivatives tape, a fourteenth calendar day running
              </span>. Spot prints{' '}
              <span className="dn-tag bull">$60,208, +1.46% on 24h</span> at the 00:05Z
              parquet bar (the MTF scan reads +1.24% on its own window), up from the 06-29
              note spot $59,267 — the lineage reclaimed the $60k pin it lost on 06-29. The
              structural positive the lineage had carried — the 200W weekly-close hold — is
              now RESOLVED against it: the 06-29 weekly close{' '}
              <span className="dn-tag bear">$60,224.70 settled −3.86% below the $62,643
              floor</span>, so the 22JUN weekly hold ($63,990, the prior last-resolved
              print) is superseded, the floor break is confirmed at the escalation level,
              and the 06-15 reclaim thesis is dead. Six consecutive daily closes (06-24
              $61,051 −2.54%, 06-25 $59,772 −4.58%, 06-26 $60,072 −4.10%, 06-27 $60,000
              −4.22%, 06-28 $59,550 −4.94%,{' '}
              <span className="dn-tag bull">06-29 $60,225 −3.86%, an UP-close +$674.50</span>)
              now sit below the floor with the weekly close confirming. Spot holds no MA
              beneath it for the sixth cut running — D-EMA20 $62,565 (−3.77%), the 200W
              floor $62,643 (−3.89%) and D-SMA20 $62,761 (−4.07%) are the nearest, all
              overhead. The dealer book{' '}
              <span className="dn-tag bull">flipped BACK to +5.6M net-LONG-gamma</span> and
              the near-dated 3JUL26 amplifier shrank to −4.86M (from −9.63M); spot sits just
              above the $60k −14.28M wall with the $60.5k +11.07M positive wall just
              overhead. MTF improved by three to{' '}
              <span className="dn-tag">1 bull / 6 bear / 3 neutral</span> (was 1/9/0) — the
              15m/30m/1h frames went neutral and the 8h/12h/1d flipped to below-water golden
              crosses — and the regime classifier eased to{' '}
              <span className="dn-tag bull">5/9 reversal (mean-reversion)</span> from 6/9.
              Macro mixed this cut: 10Y eased to 4.38% (15bp from the gate), but HY OAS
              widened +5bp to 2.83% and FIRED above its 2.78% re-grow gate, DXY held EXTREME
              at 101.37.{' '}
              <span className="dn-em">
                The operational fact is unchanged and still binding: the OKX monitor has
                now been frozen 305.4h (last row 2026-06-17 06:43Z), funding / OI / CVD /
                basis / retail are last-known and stale, and the SM positioning book has
                been dead ~17.94 days — SM net and the cut-fraction are non-computable. The
                desk cannot see whether the 06-29 up-close was real demand absorbing the
                break or a thin short-cover bounce as the book flipped back long-gamma. The
                read is on price, gamma and MTF alone.
              </span>{' '}
              The book stays flat: the break is confirmed and the reclaim thesis is dead,
              but the tape that would say whether the bounce is real is still down — the
              scout&rsquo;s price pre-condition flipped TRUE again — first since the 06-22
              brief print (spot reclaimed the flip), a meaningful narrowing, yet it stays stood
              down on the binding blocks (dead tape → SM short bleed / funding / cover-flow
              unreadable; no confirmed engine TD9; no MA beneath spot). No shorts, no scout,
              no fresh hedge.
            </p>
            <p>
              BTC prints <span className="dn-tag">$60,208</span> at the parquet last bar
              (00:05Z),{' '}
              <span className="dn-tag bull">+1.46%</span> on 24h (vs the $59,338.60 bar
              exactly 24h prior — the 06-29 00:05Z parquet bar; the MTF scan reads +1.24%
              on its own 00:01Z window — the spread is the reference window, not a data
              conflict), inside a{' '}
              <span className="dn-tag">$60,758 / $58,850</span> 24h range (per the MTF
              scan H/L). The Deribit index reads $60,422 at 00:02Z and the MTF scan spot
              is $60,195 — so the freshest spot is well-corroborated across three
              independent fresh sources (parquet kline $60,208, GEX Deribit index $60,422,
              MTF scan $60,195), even though the live_db tape that normally supplies it is
              frozen at 06-17 06:43Z, 305.4h stale.{' '}
              <span className="dn-signal">The structural read has moved from a floor broken
              on five daily closes with the weekly-close escalation pending to a floor
              break CONFIRMED on the 06-29 weekly close ($60,224.70, −3.86% below the now
              $62,643 floor) — the 06-15 reclaim thesis is FALSIFIED — into which the tape
              bounced (06-29 up-close +$674.50, spot reclaimed $60k and the flip)</span>:
              the 22JUN weekly close $63,990 was the last weekly hold, the daily closes
              walked down through the line (06-22 $63,990, 06-23 $62,697, 06-24 $61,051,
              06-25 $59,772, 06-26 $60,072, 06-27 $60,000, 06-28 $59,550) and the 06-29
              weekly bar CLOSED $60,224.70 — below the floor. Per the framework, a daily
              close below is the early warning and a sustained weekly close below is the
              escalation that breaks the floor and falsifies the 06-15 reclaim thesis; the
              06-29 weekly close delivered exactly that, so the escalation is no longer
              pending — it FIRED.{' '}
              <span className="dn-em">
                The one structural positive of the lineage is now broken at the weekly-close
                level, not merely the daily-close level — the 06-15 reclaim thesis is dead;
                spot holds no MA beneath it, but the tape bounced on the confirmation (06-29
                up-close, $60k and flip reclaimed, book flipped back long-gamma) and the
                desk still cannot read the tape that would say whether that bounce is demand
                absorbing the break or a thin short-cover pop.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · LIVE TAPE FROZEN 305.4h (fourteenth day) · SM book dead ~17.94 days · funding/OI/flow last-known stale · the desk cannot see whether the 06-29 up-close was demand absorbing the break or a thin short-cover bounce as the book flipped BACK net-long-gamma</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important source of this note — the live derivatives tape —
                is still down, a fourteenth calendar day running
              </span>. The OKX monitor has appended no row to live_db.json since{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> (t = &ldquo;06-17
              14:43&rdquo; BJ; the file mtime 06-17 06:43:08Z confirms the write stopped
              there; the process status is not archived or verified in this cut, so the note
              asserts the missing tape, not a live/hung process). That is now{' '}
              <span className="dn-tag bear">305.4h of missing tape</span> against the 00:06Z
              snapshot anchor — the 06-20 note flagged it at 65.4h, the 06-26 note at
              209.4h, the 06-27 note at 233.4h, the 06-28 note at 257.4h, the 06-29 note at
              281.4h, and the outage has run another ~24h without a write. Everything the
              live tape carries — funding, open interest, spot/futures CVD, perp basis,
              retail long%, taker-net, big-print flow, aggressor skew — is therefore{' '}
              <span className="dn-em">last-known at 06-17 06:43Z and not current</span>. The
              smart-money positioning triple (long_btc / short_btc / net_btc) has been
              byte-for-byte constant —{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> — since{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>, ~430.5h (~17.94 days).
              The 06-16 note flagged this dead feed at ~94.5h and put the squeeze-cycle ON
              HOLD; the 06-28 note carried it at ~382.5h, the 06-29 note at ~406.5h; today
              it is ~430.5h and still dead.{' '}
              <span className="dn-em">
                SM net is non-computable as a current read, and the SM cut fraction (|Δ| /
                prior_net) cannot be formed — there is no current SM net to difference. Any
                positioning claim in this note is explicitly historical, not live.
              </span>
            </p>

            <p>
              For completeness, the <em>last-available</em> tape readings — all pinned to
              the 06-17 06:43Z freeze and now 305.4h out of date, and byte-for-byte the same
              readings the 06-19 → 06-29 notes carried because it is the same frozen row —
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
                Read this as a near-eighteen-day-old fingerprint, not a signal: a two-sided
                funding book, OI bleeding, retail adding longs into the first leg of
                weakness. None of it can be carried forward to the 00:06Z snapshot — and it
                predates the entire 06-18 → 06-22 floor-hold sequence, the 06-23 → 06-28 leg
                that closed below the floor and walked under $60k, AND the 06-29 weekly-close
                confirmation and the 06-29 up-close bounce, so it says nothing about how
                positioning absorbed the confirmed break or whether the latest up-close is
                demand or short-cover. The desk treats the positioning dimension as unknown,
                and the 06-29 up-close as positioning-unconfirmed.
              </span>
            </p>
            <h2 className="dn-sec">
              Structure <span className="dn-roman">II · price/MTF FRESH · multi-TF resonance bearish 1 bull / 6 bear / 3 neutral (IMPROVED by three from 1/9/0 — 15m/30m/1h went neutral) · the high frames softened — 8h/12h/1d FLIPPED to below-water golden crosses (was death crosses on 06-29), only the 1w carries a water-down death cross (1 bar old, DIF −5,878.7) · 15m/30m/1h reclaimed above cloud · 1M TD8 buy one close away · regime EASED to 5/9 reversal (mean-reversion, JT&lt;0) · spot below every MA, the whole ladder overhead, the 200W floor STEPPED UP to $62,643 and CONFIRMED broken on the 06-29 weekly close, spot −3.89% below</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map is fresh and improved by three at the headline (1 bull / 6 bear
                / 3 neutral, the 15m/30m/1h frames reclaimed above cloud and went neutral)
                while the high frames softened — 8h/12h/1d flipped from death crosses to
                below-water golden crosses, leaving only the 1w on a water-down death cross
                — and the regime classifier held mean-reversion at 5/9
              </span> — the one dimension, with the dealer map, the desk can still trust
              today. The 00:01Z scan tags{' '}
              <span className="dn-tag bear">1 bull / 6 bear / 3 neutral across 10 frames</span>,
              net read <em>multi-TF resonance bearish · sell the bounce</em> — improved from
              the 06-29 scan&rsquo;s 1/9/0 as the 15m/30m/1h frames stepped to neutral. The
              regime line reads{' '}
              <span className="dn-tag bull">5/9 reversal / mean-reversion regime (JT&lt;0) —
              bounce-favoured</span> (was 6/9 on 06-29), so the classifier held the
              bounce-favoured lean while easing by one — but the engine still carries no
              confirmed constructive trigger to act on it. The lone bull frame is the{' '}
              <span className="dn-tag">1M (above cloud, TD8 buy one close away)</span>; the
              constructive crosses are{' '}
              <span className="dn-tag">8h / 12h / 1d water-down golden crosses (3 bars /
              just printed / 1 bar — the 1d FLIPPED from a death cross on 06-29)</span> plus
              the 1h water-down golden cross 8 bars old (all unconfirmed below-water probes,
              not TD buys), with no live TD9 buy. The down side eased: only the{' '}
              <span className="dn-tag bear">1w carries a water-down death cross (1 bar old,
              DIF −5,878.7)</span>, while the 15m/30m carry water-UP death crosses (13 bars /
              1 bar). Cloud: 15m/30m/1h RECLAIMED above cloud, 4h→1w below, 1M above. The
              thin constructive set is the{' '}
              <span className="dn-tag bull">8h / 12h / 1d below-water golden crosses, the
              15m/30m/1h cloud reclaim, a 1M TD8 buy one close away, and bottom
              (bullish-reversal) divs on 15m / 30m / 1h</span>.{' '}
              <span className="dn-em">
                Straight read: the frame stack improved by three and the high frames
                softened from death crosses to below-water golden crosses, but the structure
                is still a bearish trend frame — 4h→1w below cloud, no MA support, and the
                200W floor confirmed broken on the weekly close. The engine&rsquo;s only
                constructive prints are unconfirmed below-water golden crosses, a cloud
                reclaim on the fast frames, and a one-close-away 1M TD8 buy. There is no
                confirmed engine print to trade the bounce long; the improvement is real but
                unconfirmed, softened against the confirmed weekly-close break.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">60,175</td><td className="num bear">45.7</td><td className="bear">death (water-up) 13b</td><td className="bull">above ↓60.0k 28b</td><td>Buy 7</td><td>BEAR hid · BEAR reg (top) · BULL hid · BULL reg (bottom)</td></tr>
                <tr><td>30m</td><td className="num">60,188</td><td className="num">51.2</td><td className="bear">death (water-up) 1b</td><td className="bull">above ↓59.8k 15b</td><td>Buy 3</td><td>BEAR hid · BEAR reg (top) · BULL hid · BULL reg (bottom)</td></tr>
                <tr><td>1h</td><td className="num">60,188</td><td className="num">53.3</td><td className="bull">golden (water-dn) 8b</td><td className="bull">above ↓59.9k 7b</td><td>Buy 2</td><td>BEAR hid · BEAR reg (top) · BULL hid · BULL reg (bottom)</td></tr>
                <tr><td>4h</td><td className="num">60,175</td><td className="num bear">47.8</td><td className="bull">golden (water-dn) 19b</td><td className="bear">below ↑61.2k 41b</td><td>Sell 6</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">60,180</td><td className="num bear">42.7</td><td className="bull">golden (water-dn) 3b</td><td className="bear">below ↑63.2k 20b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">60,180</td><td className="num bear">39.0</td><td className="bull">golden (water-dn) 刚印 (just printed)</td><td className="bear">below ↑64.2k 77b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">60,180</td><td className="num bear">34.2</td><td className="bull">golden (water-dn) 1b</td><td className="bear">below ↑70.3k 29b</td><td>Sell 2</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">60,195</td><td className="num bear">34.0</td><td className="neut">—</td><td className="bear">below ↑72.5k 9b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">60,198</td><td className="num bear">33.8</td><td className="bear">death (water-dn) 1b</td><td className="bear">below ↑99.5k 22b</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">60,195</td><td className="num">41.4</td><td className="neut">— (DIF water-up)</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (08:01 Beijing; rolling latest
                    file, archived verbatim at
                    /opt/desk-note/snapshots/2026-06-30-0006/). Net read{' '}
                    <em>multi-TF resonance bearish · sell the bounce (1 bull / 6 bear / 3
                    neutral)</em>; regime <em>5/9 reversal / mean-reversion regime (JT&lt;0,
                    bounce-favoured)</em>; active divergences{' '}
                    <em>reversal: top div 15m / 30m / 1h, bottom div 15m / 30m / 1h; hidden
                    (continuation): BEAR hid 15m / 30m / 1h / 4h / 1d, BULL hid 15m / 30m
                    / 1h</em>. Header alerts:{' '}
                    <em>1w water-down death cross (1 bar ago, DIF −5,878.7)</em>,{' '}
                    <em>1d water-down golden cross (1 bar ago, DIF −2,299.0 — flipped from a
                    death cross on 06-29)</em>,{' '}
                    <em>12h water-down golden cross (just printed, DIF −1,140.5)</em>,{' '}
                    <em>30m water-up death cross (1 bar ago, DIF +112.0)</em>,{' '}
                    <em>1M TD8 Buy — one more close</em>. Scan spot $60,195, 24h +1.24%, 24h
                    H/L $60,758 / $58,850, qVol $13.63B. Closes are in-progress bars; treat
                    every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is the same deep overhead wall as 06-29, and spot has clawed
              back toward the floor on the bounce, so for the sixth cut in the lineage{' '}
              <span className="dn-tag bear">every line on the matrix is overhead — there is
              no positive offset, no MA beneath spot</span>. $60,208 sits{' '}
              <span className="dn-tag bear">−3.77% below D-EMA20 $62,565</span> — the nearest
              line, still overhead — then{' '}
              <span className="dn-tag bear">−3.89% below the full-history W-SMA200 200W floor
              $62,643</span> (which STEPPED UP from $62,443 as the 06-29 weekly bar
              completed) and{' '}
              <span className="dn-tag bear">−4.07% below D-SMA20 $62,761</span>, the next line
              up. Above those, the cycle-proxy{' '}
              <span className="dn-tag bear">D-EMA50 $66,681 (−9.71%)</span>, then{' '}
              <span className="dn-tag bear">W-EMA200 $67,437 (−10.72%, seed)</span>, then{' '}
              <span className="dn-tag bear">D-SMA50 $68,568 (−12.19%)</span>, then a dense
              overhead band:{' '}
              <span className="dn-tag bear">D-EMA100 $70,356 (−14.42%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $70,578 (−14.69%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $70,680 (−14.82%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $71,365 (−15.63%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $71,923 (−16.29%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $73,481 (−18.06%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $73,845 (−18.47%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $75,371 (−20.12%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $75,886 (−20.66%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $76,353 (−21.15%)</span>. Far above and
              disused: W-EMA100 $80,155 (−24.89%), W-EMA50 $80,935 (−25.61%), W-SMA100
              $88,523 (−31.99%), W-SMA50 $88,654 (−32.09%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-30 00:05Z (close $60,207.60);
                offsets recomputed against that same last-bar close, which is the freshest
                available spot while the live tape is frozen. Displayed MA levels are
                $-rounded; offsets computed from exact series values. The displayed weekly
                ladder uses the 2023→ subset (184 weekly bars), so W-SMA200 is non-computable
                there and W-EMA200 $67,437 seeds from available history; the 200W floor
                $62,643 is recomputed separately from the full-history glob (356 completed
                weekly W-MON bars, INCLUDING the now-resolved 06-29 week and excluding the
                in-progress 07-06 week — it stepped up ~$200 from $62,443 as the 06-29 bar
                completed and an old ~$20k 2022 bar rolled off). Daily closes: 06-22 $63,990
                (= the 22JUN weekly close), 06-23 $62,697, 06-24 $61,051 (first close below
                the floor), 06-25 $59,772, 06-26 $60,072, 06-27 $60,000, 06-28 $59,550, 06-29
                $60,225 (sixth close below, an UP-close +$674.50, AND the weekly close that
                confirmed the break), 06-30 (in-progress, 5-min bar) $60,208 — the floor
                break is now confirmed at the weekly-close level.
              </span>
            </p>
            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book FLIPPED BACK to net-LONG-gamma aggregate +5.6M (was −20.1M on 06-29, +5.9M on 06-28) — the book now DAMPENS the next move again · the near-dated 3JUL26 3.3 DTE amplifier SHRANK to −4.86M (from −9.63M on 06-29), the heaviest negative is now the far-dated 25SEP26 87.3 DTE −5.41M, the front is 30JUN26 0.3 DTE +8.51M (positive, settles ~08:00Z today) · the flip firmed $60,119 → $60,135 and spot reclaimed it, so spot is now +0.12% above (was −1.42% below) · IV collapsed to 43.9%</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book reversed the 06-29 re-flip and crossed back the constructive
                way: aggregate gamma flipped from −20.1M net-short to +5.6M net-LONG-gamma,
                so the book dampens rather than amplifies the next move again, and the flip
                reclaim crossed positive as spot pushed back above the firmed flip
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+5.6M / 1%</span> (was −20.1M on 06-29, +5.9M on
              06-28, −87.5M on 06-26); the 06-29 net-short-gamma re-flip lasted a single note
              — the book has crossed back to net-long-gamma. The 0-γ flip firmed{' '}
              <span className="dn-tag">$60,119 → $60,135 (+$16)</span>, and spot $60,208 rose
              past it, so spot sits <span className="dn-tag bull">+0.12% above the flip</span>
              {' '}on spot-denominated math (60,207.60 / 60,135 − 1 = +0.121%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads +0.5% off its Deribit-index
              $60,422 ($214 above parquet spot), which is{' '}
              <span className="dn-tag bull">+0.48%</span>
              (60,422 / 60,135 − 1 = +0.477%) — both references above the flip, RECLAIMED
              from −1.42% below on 06-29. The wall map straddles spot: the heaviest is{' '}
              <span className="dn-tag bear">$60k −14.28M</span> (heaviest wall, now just BELOW
              spot as a support-test), with{' '}
              <span className="dn-tag bull">$60.5k +11.07M</span> just ABOVE spot (the first
              positive ceiling),{' '}
              <span className="dn-tag bear">$58k −13.41M</span>,{' '}
              <span className="dn-tag bear">$56k −10.30M</span>,{' '}
              <span className="dn-tag bear">$59k −8.90M</span> (just below spot),{' '}
              <span className="dn-tag bear">$55k −8.84M</span>,{' '}
              <span className="dn-tag bull">$64k +8.22M</span>,{' '}
              <span className="dn-tag bull">$63k +7.63M</span>,{' '}
              <span className="dn-tag bear">$50k −6.90M</span>,{' '}
              <span className="dn-tag bull">$80k +6.48M</span>.{' '}
              <span className="dn-em">
                Critically, the aggregate is now net-LONG-gamma again, so the book dampens
                the next move rather than amplifying it — a reversal of the −20.1M short-gamma
                book of 06-29. Spot at $60,208 sits between the $60k −14.28M wall just beneath
                (now a support-test rather than an overhead ceiling) and the $60.5k +11.07M
                positive wall just above; beneath the $60k wall is a below-spot put-wall shelf
                — $59k −8.90M, $58k −13.41M, $56k −10.30M, $55k −8.84M, $50k −6.90M — none of
                them a proven floor, while the positive walls ($60.5k, $63k, $64k, $80k) form
                the first resistance shelf above. The dampening book plus the reclaimed flip
                is the most constructive gamma backdrop the lineage has carried since the
                de-amplification of 06-28.
              </span>{' '}
              By expiry the near-dated concentration EASED: the front is the positive 30JUN26{' '}
              <span className="dn-tag bull">0.3 DTE at +8.51M (settles ~08:00Z today)</span>,
              then 1JUL26 1.3{' '}
              <span className="dn-tag bull">+3.96M</span>, 2JUL26 2.3{' '}
              <span className="dn-tag bull">+6.28M</span>, 3JUL26 3.3{' '}
              <span className="dn-tag bear">−4.86M</span> (the near-dated downside amplifier,
              SHRUNK from −9.63M on 06-29), 10JUL26 10.3 +0.12M, 17JUL26 17.3{' '}
              <span className="dn-tag bull">+3.90M</span>, 31JUL26 31.3 +1.01M, 28AUG26 59.3
              +0.65M, 25SEP26 87.3{' '}
              <span className="dn-tag bear">−5.41M</span> (now the heaviest negative expiry, a
              far-dated chunk), 25DEC26 178.3 −0.12M, 26MAR27 269.3 +0.35M, 25JUN27 360.3
              +0.35M. The 29JUN26 −1.29M front settled ~08:00Z yesterday; the concentrated
              near-dated downside amplifier that the 06-29 note flagged at 3JUL26 −9.63M has
              shrunk to −4.86M, and the heaviest negative now sits far out at 25SEP26 −5.41M.
              (The spot-referenced aggregate +5.6M is the net GEX at spot; the by-expiry rows
              are an independent decomposition and need not sum to it.)
            </p>

            <p>
              IV median across 874 instruments is{' '}
              <span className="dn-tag">43.9%</span> (collapsed from 48.0% / 916 instruments on
              06-29, the chain thinned a further 42 contracts) against 30D close-to-close RV
              of{' '}
              <span className="dn-tag">43.58%</span> — chain-level richness{' '}
              <span className="dn-tag">~+0.32pt</span> over realised (was ~+4.93pt on 06-29 —
              the chain CHEAPENED sharply as the book flipped back long-gamma and the down-move
              stalled), with RV staying elevated (43.58% today vs 43.07% on 06-29 and 24.91% on
              05-31 — the high-vol regime that started with the 06-08 → 06-18 down-leg
              persists). A chain-median across 874 instruments, <span className="dn-em">not</span>
              {' '}a tradable spread; expiry-/strike-level vega, skew and term structure remain
              not loaded; the vol read stays framework-only. RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log returns (= 31
              consecutive daily closes) anchored to parquet last bar 2026-06-30 00:05Z;
              underlying close window range $59,550 – $73,653. P/C ratio 0.58, Call OI 218,193
              / Put OI 126,616 BTC.
            </p>
            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · ~1.85h render — 10Y eased to 4.38% (15bp from the gate), TIPS 2.18% EXTREME RISK-OFF, HY OAS 2.83% FIRED above its 2.78% re-grow gate (+5.0bp), MOVE 68.1 (loose) · the FX legs firm: DXY 101.37 (+0.01) EXTREME and USD/JPY 161.93 (+0.15) · regime still NORMAL but loosened (mean |r| 0.258), lag to NQ WIDENED to −4.33pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro panel render is ~1.85h lagged and the read is mixed: rates eased
                a touch (10Y −2bp to 4.38%), but the credit re-grow gate FIRED — HY OAS
                widened +5bp to 2.83%, above its 2.78% trigger — while the dollar held
                EXTREME with the FX legs firm
              </span>. Dashboard render is 2026-06-29 22:16Z, ~1.85h before the snapshot. US
              10Y nominal <span className="dn-tag">4.38% (−2.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+0.88</span> — tight regime, RISK-OFF, 15bp from
              the 4.53% gate. 10Y TIPS real{' '}
              <span className="dn-tag">2.18% (−1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.10</span> — still EXTREME RISK-OFF, among the
              tightest lines on the panel. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.20% (+1.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag">2.22% (+2.0bp)</span> — inflation expectations soft.
              HY OAS{' '}
              <span className="dn-tag bear">2.83% (+5.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−0.43</span> — credit still loose on the
              z-regime, but the spread WIDENED +5bp and FIRED above its 2.78% re-grow gate
              (it had sat exactly on the line on 06-29; this cut it prints above). MOVE bond
              vol is{' '}
              <span className="dn-tag">68.1</span> — the source tags +1.35 on its own 1d
              delta, still &ldquo;loose.&rdquo; The dollar held its EXTREME level and the FX
              legs firmed this cut: DXY{' '}
              <span className="dn-tag bear">101.37 (+0.01 day)</span>, regime z{' '}
              <span className="dn-tag bear">+2.73</span>, essentially unchanged. Fed net
              liquidity{' '}
              <span className="dn-tag bear">$5.812T (−0.037T)</span>, regime z{' '}
              <span className="dn-tag bear">−1.16</span> — no fresh weekly print this cut.
              USD/JPY{' '}
              <span className="dn-tag">161.93 (+0.15 day)</span>, regime z +1.57 — firmer
              than 06-28; US-JP 10Y spread{' '}
              <span className="dn-tag">1.73% (−2.0bp)</span> narrow;
              USD/CNY <span className="dn-tag">6.7975</span>; WTI{' '}
              <span className="dn-tag stale">$78.9 (now stale 7d)</span>.{' '}
              <span className="dn-em">
                Net: the macro backdrop stayed risk-off but the credit leg crossed its
                trigger — HY OAS 2.83% is now ABOVE the 2.78% re-grow gate (the gate FIRED),
                while the rates leg eased to 4.38% and sits 15bp from its 4.53% gate. The
                reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE at 4.38% with room. The
                macro read still reinforces rather than refutes the break of the 200W floor —
                a broad risk-off backdrop with the credit gate now fired — though rates eased
                a touch and the dollar held; the credit-gate fire is the one fresh macro
                escalation this cut.
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
                <tr><td>US 10Y nominal</td><td className="num">4.38%</td><td className="num bull">−2.0bp</td><td className="num bear">+0.88</td><td className="bear">tight · RISK-OFF · 15bp from gate</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.18%</td><td className="num">−1.0bp</td><td className="num bear">+2.10</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.20%</td><td className="num">+1.0bp</td><td className="num">−0.40</td><td className="neut">soft</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.22%</td><td className="num">+2.0bp</td><td className="num">−1.73</td><td className="neut">soft</td></tr>
                <tr><td>HY OAS</td><td className="num">2.83%</td><td className="num bear">+5.0bp</td><td className="num bull">−0.43</td><td className="bear">FIRED above the 2.78% re-grow gate</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.516</td><td className="num">−0.00</td><td className="num">−0.07</td><td className="stale">weekly · neutral · now stale 10d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">68.1</td><td className="num bear">+1.35</td><td className="num bull">−0.66</td><td className="bull">loose</td></tr>
                <tr><td>DXY</td><td className="num">101.37</td><td className="num bear">+0.01</td><td className="num bear">+2.73</td><td className="bear">EXTREME RISK-OFF · FX firm</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.812T</td><td className="num bear">−0.037T</td><td className="num bear">−1.16</td><td className="bear">drained · no fresh weekly print</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.93</td><td className="num bear">+0.15</td><td className="num bear">+1.57</td><td className="bear">firm · firmer vs 06-28</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.73%</td><td className="num">−2.0bp</td><td className="num bull">−1.30</td><td className="neut">narrow</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7975</td><td className="num">+0.01</td><td className="num bull">−1.37</td><td className="neut">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:02Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.258</span> — loosened from the
              0.283 of 06-29 toward the threshold but still{' '}
              <span className="dn-tag">above the 0.25 idiosyncratic threshold</span>, so the
              regime line holds at{' '}
              <span className="dn-signal">NORMAL — BTC stays coupled to the broad cross-asset
              complex</span>, with its top ties the equity / industrial-metal cluster: NQ{' '}
              <span className="dn-tag">+0.750</span>, NVDA{' '}
              <span className="dn-tag">+0.723</span>, SP500{' '}
              <span className="dn-tag">+0.666</span>, JP225{' '}
              <span className="dn-tag">+0.549</span>, COPPER{' '}
              <span className="dn-tag">+0.515</span>, URNM{' '}
              <span className="dn-tag">+0.491</span>, TSLA{' '}
              <span className="dn-tag">+0.481</span>, PALL{' '}
              <span className="dn-tag">+0.390</span>, AAPL{' '}
              <span className="dn-tag">+0.341</span>, SILVER{' '}
              <span className="dn-tag">+0.338</span>, with CL{' '}
              <span className="dn-tag">−0.053</span> / BRENT{' '}
              <span className="dn-tag">−0.064</span> inverse and GOLD a weak{' '}
              <span className="dn-tag">+0.237</span>. 7d performance still has the broad risk
              complex mixed-to-red, with BTC lagging NQ by a WIDER gap than 06-29 though NOT
              the worst performer of the complex:{' '}
              <span className="dn-tag bear">BTC −6.16%</span>, NQ{' '}
              <span className="dn-tag bear">−1.83%</span>, SP500{' '}
              <span className="dn-tag bear">−0.56%</span>, JP225{' '}
              <span className="dn-tag bear">−2.20%</span>, NVDA{' '}
              <span className="dn-tag bear">−6.30%</span>, META{' '}
              <span className="dn-tag bear">−0.11%</span>, AAPL{' '}
              <span className="dn-tag bear">−5.44%</span>, MSFT{' '}
              <span className="dn-tag bull">+0.29%</span>, GOOGL{' '}
              <span className="dn-tag bull">+1.67%</span>, AMZN{' '}
              <span className="dn-tag bull">+3.24%</span>, TSLA{' '}
              <span className="dn-tag bull">+1.45%</span>; metals lower (GOLD{' '}
              <span className="dn-tag bear">−4.28%</span>, SILVER{' '}
              <span className="dn-tag bear">−10.21%</span>, PLAT{' '}
              <span className="dn-tag bear">−5.63%</span>, PALL{' '}
              <span className="dn-tag bear">−3.49%</span>, COPPER{' '}
              <span className="dn-tag bear">−3.89%</span>); crude down, NGAS softer (CL{' '}
              <span className="dn-tag bear">−5.41%</span>, BRENT{' '}
              <span className="dn-tag bear">−5.60%</span>, NGAS{' '}
              <span className="dn-tag bear">−2.54%</span>).{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d return −6.16% vs NQ −1.83% is a lag of −4.33pt (was −3.53pt on
                06-29) — the gap to NQ WIDENED again as BTC under-performed equities. But BTC
                is NOT the deepest laggard of the complex: SILVER −10.21% and NVDA −6.30% both
                fell more over 7d. The risk complex is mixed over 7d (equities split — NQ /
                SP500 / META modestly red, MSFT / GOOGL / AMZN / TSLA green; metals down,
                crude down), so BTC&rsquo;s decline remains embedded in a broad move rather
                than standing out as idiosyncratic — which is what keeps the correlation
                regime at NORMAL even as the mean |r| loosened toward 0.25. The confirmed
                break of the 200W floor still coincides with a risk-off macro tape (10Y tight,
                credit gate fired, DXY EXTREME), so the break stays as much a risk-off-tape
                event as a BTC-specific one — BTC lagged NQ but SILVER and NVDA fell harder.
              </span>{' '}
              JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag — do not lean on it.
            </p>
            <h2 className="dn-sec">
              Trade book <span className="dn-roman">V · book FLAT · 200W floor — BREAK CONFIRMED on the 06-29 weekly close ($60,224.70 &lt; $62,643, −3.86%), 06-15 reclaim thesis FALSIFIED; the floor STEPPED UP to $62,643 · scout price pre-condition flipped TRUE (spot +0.12% above the flip) but scout STILL stood down (tape blind ~17.94 days, no confirmed engine trigger, no MA beneath spot) · macro tail credit gate FIRED (OAS 2.83% &gt; 2.78%) · squeeze-cycle ON HOLD (SM dead ~17.94 days)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — the structural positive of the lineage is
                now resolved AGAINST it (200W break confirmed on the weekly close, reclaim
                thesis falsified), even as the tape bounced into the confirmation and the
                gamma backdrop turned constructive; the binding constraint is still data
                integrity
              </span>. The 06-29 weekly close settled $60,224.70, −3.86% below the now
              $62,643 floor — the escalation the 06-29 note said settled today FIRED, so the
              200W floor break is CONFIRMED at the weekly-close level and the 06-15 reclaim
              thesis is FALSIFIED. But the tape bounced on the confirmation: the 06-29 daily
              bar was an UP-close (+$674.50), spot reclaimed $60k AND the 0γ flip (+0.12%
              above), the dealer book flipped back to +5.6M net-long-gamma (dampening), the
              near-dated amplifier shrank, and MTF improved to 1/6/3 with the high frames
              softening to below-water golden crosses. The scout&rsquo;s price pre-condition
              flipped TRUE again — first since the 06-22 brief print, spot is above the flip — but
              the scout still cannot be taken: the positioning legs (SM short bleed, funding
              posture, cover-flow) all require a live tape and there is none for a fourteenth
              day, the engine carries no confirmed constructive trigger (only unconfirmed
              below-water golden crosses, a cloud reclaim on the fast frames, and a
              one-close-away 1M TD8 buy), and there is still no MA beneath spot. No new short
              either: chasing a confirmed break on a blind tape, into a long-gamma dampening
              book, a reclaimed flip and a bounce-favoured regime with bottom divs, is a poor
              entry. The trade book today is: no shorts, no scout, no fresh hedge — fix the
              tape before reading whether the 06-29 up-close is demand absorbing the break or
              a short-cover pop.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch — BREAK CONFIRMED: the 06-29 weekly close $60,224.70 settled −3.86% below the now $62,643 floor (the weekly-close escalation FIRED), the 06-15 reclaim thesis is FALSIFIED; the floor STEPPED UP $62,443 → $62,643 as the 06-29 weekly bar completed; six consecutive daily closes below (06-24 → 06-29)</span>
              <div className="dn-trade-name">
                200W cycle floor watch — the break is CONFIRMED on the 06-29 weekly close: floor $62,643 = full-history W-SMA200 (356 completed weekly bars, stepped up ~$200 as the 06-29 bar completed), 06-29 weekly close $60,224.70 (−3.86% below) confirms the escalation, six daily closes below (06-24 $61,051, 06-25 $59,772, 06-26 $60,072, 06-27 $60,000, 06-28 $59,550, 06-29 $60,225), the 06-15 reclaim thesis FALSIFIED
              </div>
              <div className="dn-thesis">
                The 06-29 note recorded five consecutive daily closes below the floor with
                the weekly-close escalation settling that day. It settled: the 06-29 weekly
                bar closed{' '}
                <span className="dn-tag bear">$60,224.70, −3.86% below the $62,643 floor</span>.
                Per the framework an intraday wick is not the break, a daily close below is the
                early warning, and a sustained weekly close below is the escalation that breaks
                the floor and falsifies the 06-15 reclaim thesis — that weekly close has now
                printed, so the break is CONFIRMED and the reclaim thesis is FALSIFIED. The
                22JUN weekly close $63,990 (+2.15% above the stepped-up floor) was the last
                weekly hold; it is now superseded by the 06-29 close below.{' '}
                <span className="dn-em">The structural positive of the lineage is resolved
                against it at the weekly-close level; spot holds no MA beneath it, and the
                floor — stepped up to $62,643 — is now confirmed resistance, not a held
                support.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor (STEPPED UP)</span><span className="dn-lvl-v">$62,643 = full-history W-SMA200, recomputed this cut from the 2019→ parquet glob (356 completed weekly W-MON bars, INCLUDING the now-resolved 06-29 week and excluding the in-progress 07-06 week); stepped up ~$200 from the $62,443 the 06-25 → 06-29 notes pinned, as the 06-29 bar completed and an old ~$20k 2022 bar rolled off · weekly_200sma.json absent so the ratio percentile / last-event stay unsourced, not fabricated</span></div>
                <div><span className="dn-lvl-k">break — CONFIRMED on the weekly close</span><span className="dn-lvl-v bear">06-29 weekly close $60,224.70 settled −3.86% below the floor — the escalation FIRED and the break is confirmed; the daily closes also walked six consecutive settles below (06-24 $61,051 −2.54%, 06-25 $59,772 −4.58%, 06-26 $60,072 −4.10%, 06-27 $60,000 −4.22%, 06-28 $59,550 −4.94%, 06-29 $60,225 −3.86% an up-close)</span></div>
                <div><span className="dn-lvl-k">reclaim thesis — FALSIFIED</span><span className="dn-lvl-v bear">the 06-15 reclaim thesis required the floor to hold on a weekly-close basis; the 06-29 weekly close below the floor falsifies it — the prior 22JUN weekly hold ($63,990) is superseded</span></div>
                <div><span className="dn-lvl-k">reclaim ladder (now the recovery path)</span><span className="dn-lvl-v bear">spot is +0.12% above the flip $60,135 (reclaimed) but −3.77% below D-EMA20 $62,565, −3.89% below the floor $62,643, −4.07% below D-SMA20 $62,761 — no MA beneath spot; a structural recovery is a sustained weekly close back above the floor $62,643 (the level the break must un-do), with D-EMA20 $62,565 and D-SMA20 $62,761 as the daily way-stations — NOT a scout trigger on a blind tape (see scout)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework, not a trade.</b> The floor watch is the single load-bearing
                live level while everything else is stale or framework-only. The break is now
                confirmed on the weekly close and the reclaim thesis is falsified — no
                position is taken on the watch: it sets the confirmed break (06-29 weekly
                close $60,224.70 &lt; $62,643), the recovery condition (a sustained weekly
                close back above the stepped-up floor $62,643), and the reclaim way-stations
                (flip $60,135, reclaimed → D-EMA20 $62,565 → floor $62,643 → D-SMA20
                $62,761), and the desk will not pre-position short into a confirmed break the
                engine shows bottom divs and a long-gamma dampening book against, nor long
                into a recovery it cannot confirm, on a blind tape.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STILL STOOD DOWN · price pre-condition flipped TRUE (spot +0.12% above the flip, RECLAIMED from −1.42% below on 06-29) and the book FLIPPED BACK net-long-gamma — but tape blind ~17.94 days + no confirmed engine trigger + no MA beneath spot still bind</span>
              <div className="dn-trade-name">
                Cover-bounce scout — the flip reclaim flipped TRUE (spot +0.12% above) and the book flipped back net-long-gamma, but the scout stays stood down on a blind tape with no confirmed engine trigger and no MA beneath spot
              </div>
              <div className="dn-thesis">
                The 06-22 note saw the scout&rsquo;s price pre-condition print briefly (spot
                reclaimed the flip), the 06-23 → 06-29 notes saw it handed back and widen to
                −1.42% below. Tonight it flipped TRUE again and held: spot is now{' '}
                <em>+0.12% above the flip</em> $60,135 (which firmed +$16), has reclaimed
                $60k, and the dealer book flipped back to +5.6M net-long-gamma. So the price
                and gamma legs of the scout are, for the first time in the lineage, both
                constructive. But the scout is still blocked on three counts. (1) The
                positioning legs (SM short bleed, funding posture, cover-flow) all require a
                live tape, and there is none — the desk cannot see whether the 06-29 up-close
                was demand absorbing the break or a thin short-cover pop as the book flipped
                back long-gamma. (2) The engine carries no confirmed constructive trigger —
                only unconfirmed below-water golden crosses (8h / 12h / 1d), a cloud reclaim
                on 15m/30m/1h, and a one-close-away 1M TD8 buy; no live TD9. (3) There is
                still no MA beneath spot — spot is below D-EMA20, the floor and D-SMA20.{' '}
                <span className="dn-em">A scout long on a positioning-blind tape, with no
                confirmed engine print and no MA beneath spot, is not a trade — even though
                the price pre-condition has flipped TRUE and the book is long-gamma. The
                narrowing is real and worth recording (price and gamma are both constructive
                for the first time), but it is not sufficient to size into without a tape and
                a confirmed engine trigger.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">stood down · no entry · price pre-condition flipped TRUE (spot +0.12% above the flip, reclaimed from −1.42% below on 06-29) and the book is net-long-gamma — but no MA beneath spot, tape blind, engine unconfirmed; re-evaluate only after the live tape is restored AND a confirming engine print</span></div>
                <div><span className="dn-lvl-k">technical pre-condition</span><span className="dn-lvl-v bear">flip $60,135 reclaim (TRUE — spot +0.12% above) BUT D-EMA20 $62,565 / floor $62,643 / D-SMA20 $62,761 reclaim still false (spot below all three, no MA beneath spot) AND a confirming engine print (NOT true — 1 bull / 6 bear / 3 neutral, only unconfirmed below-water golden crosses, a cloud reclaim on the fast frames and a 1M TD8 buy one close away; regime holds mean-reversion)</span></div>
                <div><span className="dn-lvl-k">data pre-condition</span><span className="dn-lvl-v bear">live tape restored (currently 305.4h frozen) AND SM feed live (currently dead ~17.94 days) — both must hold before any positioning leg can be read; this is the binding block</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> no scout entry without a live positioning tape. The flip
                reclaim, the long-gamma book, the bottom divs, the bounce-favoured regime, the
                unconfirmed below-water golden crosses and the 1M TD8 buy do not trigger a
                scout while the SM / funding / flow legs are blind, spot is still below
                D-EMA20 / the floor / D-SMA20 with no MA beneath it, and the engine has no
                confirmed trigger — the desk does not size into a cover-bounce it cannot see
                being covered. The price block that lifted on 06-22 and re-closed on 06-23 →
                06-29 has now flipped TRUE again and held; the operational block (tape down)
                and the engine block (no confirmed trigger) still bind.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — credit leg FIRED: HY OAS 2.83% &gt; the 2.78% gate (+5.0bp this cut, the first print above), 10Y leg 15bp away (4.38% vs 4.53% gate); the credit leg has now crossed its trigger on a close basis</span>
              <div className="dn-trade-name">
                Downside put-spread — re-grow credit gate FIRED (OAS 2.83% &gt; 2.78%), the rates leg 15bp away; no hedge added (the dealer book is now net-long-gamma and the near-dated amplifier shrank, so the endogenous downside risk eased even as the macro gate fired)
              </div>
              <div className="dn-thesis">
                The macro re-grow gate the lineage carries — HY OAS &gt; 2.78% OR 10Y &gt;
                4.53% as the condition to re-grow a downside tail — has now FIRED on the
                credit leg: HY OAS{' '}
                <em>2.83%</em>, +5bp this cut and above the gate (the first print above, on a
                close basis), while the 10Y eased to 4.38% and sits 15bp away. So the credit
                leg has crossed its trigger and the rates leg is well off. The reclaim-long
                rates filter (10Y &lt; 4.55%) stays TRUE at 4.38%, with room. The macro tape
                is still a genuine risk-off impulse (rates tight, credit gate fired, dollar
                EXTREME), but a macro tail is not the right instrument for an
                endogenous-cum-risk-off floor break, and the dealer book has flipped back to
                net-long-gamma with the near-dated amplifier shrunk, so the endogenous
                downside risk eased even as the macro gate fired — a macro tail now would be
                trading a fired credit gate against an easing endogenous structure.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">no position · credit gate FIRED on a close basis · HY OAS 2.83% &gt; 2.78% (+5.0bp, the first print above), 10Y leg 15bp away</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (now fired on credit)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close — FIRED at 2.83% (+5.0bp) · OR 10Y &gt; 4.53% close (currently 4.38%, 15bp to fire — the further leg by far)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — TRUE at 4.38%; awaits a BTC-internal pivot AND a live tape to translate</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as the levels
                drift, not backtested breakpoints. The credit leg has now fired a close above
                (OAS 2.83% &gt; 2.78%) and the rates leg sits 15bp away; a downside tail off a
                fired credit gate would be reassessed in a separate future note (trigger /
                invalidation / R defined there); note the dealer book has flipped back to
                net-long-gamma with the near-dated amplifier shrunk, so the endogenous
                downside structure eased this cut even as the macro credit gate fired — the
                two signals point opposite ways, which is itself a reason not to chase a tail
                here.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · ON HOLD — SM feed DEAD ~17.94 days, the re-stack signature cannot be read this cut</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — ON HOLD (continuation of 06-16 → 06-29): the SM feed is frozen ~430.5h, the re-stack signature cannot be read this cut
              </div>
              <div className="dn-thesis">
                The squeeze-cycle / re-stack-hostile-2 framework reads discrete SM steps
                (Δshort &gt; 0 + Δlong &lt; 0 same minute) as continuation signatures; its
                calendar prior (the BJ 13–15 cadence) was falsified on 05-31 and it has run as
                a no-prior watchlist since. It cannot be assessed today for the simplest
                reason: the SM feed is dead. long_btc / short_btc / net_btc have been constant
                since 2026-06-12 01:36Z (~430.5h), so there are no SM deltas to read. The
                06-16 note put this ON HOLD at ~94.5h, the 06-28 note at ~382.5h, the 06-29
                note at ~406.5h; it remains ON HOLD at ~430.5h.{' '}
                <span className="dn-em">No signature can print from a frozen feed; the
                framework is dark until the SM data resumes.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v bear">ON HOLD · SM feed frozen ~430.5h (since 2026-06-12 01:36Z) · no SM deltas computable</span></div>
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
              Decision conditions <span className="dn-roman">VI · LIVE TAPE OUTAGE still the operative condition (fourteenth day) · 200W floor BREAK CONFIRMED on the 06-29 weekly close ($60,224.70 &lt; $62,643, −3.86%), 06-15 reclaim thesis FALSIFIED, the floor STEPPED UP to $62,643 · flip RECLAIMED (spot +0.12% above), book FLIPPED BACK to +5.6M net-LONG-gamma with the near-dated amplifier shrunk (3JUL26 −4.86M) · scout price pre-condition TRUE but stood down (no MA support, no confirmed engine trigger) · macro credit gate FIRED (OAS 2.83%), regime still NORMAL</span>
            </h2>

            <p>
              Of the 06-29 conditions: the live tape did <em>not</em> come back — it is ~24h
              deader, now 305.4h frozen with the SM feed at ~17.94 days; the 200W floor break
              CONFIRMED on the 06-29 weekly close ($60,224.70, −3.86% below the now $62,643
              floor) — the escalation FIRED and the 06-15 reclaim thesis is FALSIFIED; the
              floor stepped up $62,443 → $62,643 as the 06-29 weekly bar completed; the flip
              RECLAIMED (spot +0.12% above the flip vs −1.42% below on 06-29) as the flip
              firmed to $60,135; the dealer book reversed its 06-29 re-flip and FLIPPED BACK
              from −20.1M to +5.6M net-LONG-gamma — it now dampens the next move again, with
              the near-dated downside amplifier shrunk to 3JUL26 −4.86M; the scout&rsquo;s
              price pre-condition flipped TRUE but the engine carries only unconfirmed
              below-water golden crosses, a cloud reclaim and a one-close-away 1M TD8 buy; the
              macro re-grow gate FIRED on the credit leg (OAS 2.83% &gt; 2.78%) while the rates
              leg eased to 4.38% (15bp away); the correlation regime held NORMAL as the complex
              stayed mixed-to-red and BTC&rsquo;s lag to NQ widened to −4.33pt, though BTC was
              not the worst performer (SILVER/NVDA fell more); the squeeze-cycle stayed ON HOLD
              on a deader feed. The dominant condition is unchanged: <em>the desk is
              positioning-blind, now into a 200W floor break CONFIRMED on the weekly close, a
              flip that has reclaimed, and a book that has flipped back net-long-gamma — none
              of which it can confirm against the tape</em>. The conditions today re-set around
              the continuing outage, the confirmed weekly-close break, the falsified reclaim
              thesis, and the net-long-gamma re-flip:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Live tape restored (PRIMARY operational)</td><td className="bull">live_db.json resumes writing fresh rows beyond 2026-06-17 06:43Z AND the SM triple updates off its 06-12 01:36Z freeze</td><td>re-read funding / OI / flow / SM in full; only then can the scout or squeeze-cycle be evaluated — and only then can the 06-29 up-close be confirmed as demand vs short-cover; the positioning dimension has now been blind twelve notes running</td></tr>
                <tr><td>200W floor — BREAK CONFIRMED (weekly close)</td><td className="bear">06-29 weekly close $60,224.70 settled −3.86% below the $62,643 floor — the escalation FIRED; six consecutive daily closes below (06-24 $61,051, 06-25 $59,772, 06-26 $60,072, 06-27 $60,000, 06-28 $59,550, 06-29 $60,225); in-progress 06-30 bar $60,208, −3.89% below</td><td>the floor break is confirmed at the weekly-close level — the floor (stepped up to $62,643) is now confirmed resistance; no position taken</td></tr>
                <tr><td>200W reclaim thesis — FALSIFIED</td><td className="bear">the 06-15 reclaim thesis required a weekly-close hold of the floor; the 06-29 weekly close below falsifies it — the prior 22JUN weekly hold ($63,990) is superseded</td><td>the reclaim thesis is dead; a structural recovery now requires a sustained weekly close back above the stepped-up floor $62,643; watch that weekly close</td></tr>
                <tr><td>Flip reclaim (scout price pre-condition) — RECLAIMED</td><td className="bull">spot $60,208 +0.12% above flip $60,135, but −3.77% below D-EMA20 $62,565, −3.89% below the floor $62,643; no MA beneath spot; the flip sits below the floor</td><td>the price pre-condition flipped TRUE again — first since the 06-22 brief print — but a scout still needs the live tape restored AND a confirming engine print; on a blind tape with no MA beneath spot the reclaim is recorded, not traded</td></tr>
                <tr><td>Dealer book — FLIPPED BACK net-LONG-gamma</td><td className="bull">aggregate GEX +5.6M (was −20.1M on 06-29, +5.9M on 06-28); the front is 30JUN26 0.3 DTE at +8.51M (positive, settles ~08:00Z today); the near-dated 3JUL26 amplifier shrank to −4.86M; the heaviest negative is now far-dated 25SEP26 −5.41M; spot sits above the $60k −14.28M wall with the $60.5k +11.07M positive wall just overhead</td><td>the dealer book now DAMPENS the next move again — the near-dated concentrated downside risk eased; watch only, no instruction (the book is constructive but the tape is blind)</td></tr>
                <tr><td>Macro tail re-grow (credit leg FIRED)</td><td className="bear">HY OAS 2.83% &gt; 2.78% (FIRED, +5.0bp, the first print above) OR 10Y &gt; 4.53% (15bp to fire, eased to 4.38%) — the FX legs firm (DXY 101.37, USD/JPY 161.93)</td><td>no hedge instruction in this note — the fired credit gate would be reassessed in a separate future note; note the book has flipped back net-long-gamma with the near-dated amplifier shrunk, so the endogenous downside structure eased even as the macro credit gate fired</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.38%</td><td>standalone filter true with room; needs a BTC-internal pivot AND a live tape to translate to a scout long</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (ON HOLD)</td><td className="stale">SM feed dead ~430.5h; no deltas computable</td><td>suspended, not negative — re-arm on the first fresh SM deltas after the feed resumes</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the 06-29 up-close bounce — which reclaimed $60k and the 0γ flip into a
                long-gamma dampening book, with the macro credit gate fired and the 200W break
                already confirmed — is real demand absorbing the confirmed break or a thin
                short-cover pop, which only a restored tape can say; on the structural side,
                the recovery now requires a sustained weekly close back above the stepped-up
                floor $62,643, with D-EMA20 $62,565 and D-SMA20 $62,761 the daily way-stations
              </span>. The dealer book that re-flipped short on 06-29 has reversed and flipped
              back outright (aggregate −20.1M → +5.6M net-LONG-gamma with the near-dated
              amplifier shrunk to 3JUL26 −4.86M, spot from −1.42% below the flip to +0.12%
              above it), so the book now dampens the next move again; the structural positive —
              the 200W floor — is now confirmed broken on the weekly close and the 06-15
              reclaim thesis is dead, and the desk still cannot read the tape that would say
              whether the up-close is demand or short-cover. Until the tape is restored this
              note runs as written: the book is flat, the scout&rsquo;s price block flipped
              TRUE but the engine has only unconfirmed below-water golden crosses and a 1M TD8
              buy one close away, the macro tail credit gate has fired (OAS 2.83%), the
              squeeze-cycle is suspended, and the 200W floor watch is the one live level — now
              a floor confirmed broken on the weekly close, with the recovery condition a
              weekly close back above $62,643. Price reclaimed the $60k pin and the flip and
              MTF improved by three, the book turned long-gamma and the regime held
              mean-reversion with bottom divs; macro stayed risk-off (rates tight, credit gate
              fired, dollar EXTREME) and the correlation regime held NORMAL as the complex
              stayed mixed-to-red with BTC lagging NQ but not the worst performer (SILVER/NVDA
              fell more), so the break is still as much a risk-off-tape event as a BTC-specific
              one — and the dealer structure has turned dampening again. The right read for the
              next 24h is{' '}
              <em>break-confirmed-on-the-weekly-close, thesis-falsified — respect the confirmed
              break, watch whether spot can build a weekly close back above the stepped-up
              floor, fix the tape before reading whether the up-close bounce is demand or
              short-cover, and do not scout a flip reclaim the engine cannot confirm on a blind
              tape</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> this is the <b>v2</b> note — <b>post codex hostile audit</b>. The
            cross-model hostile audit (codex primary + owns the publish gate; ask-deepseek
            numeric second-audit, adjudicated not auto-applied) ran against the pinned
            2026-06-30 00:06Z snapshot; verdict <b>BLOCK-CRITICAL — 1 CRITICAL, 0 MAJOR, 3
            MINOR</b> (see <code>audits/2026-06-30-desk-note.md</code>). STAGE C adjudicated
            every item by recompute and ran grep-closure before promoting v1 → v2; each
            finding records the key pattern searched, grep hits before, and grep hits after.{' '}
            <b>DN-2026-06-30-001 (CRITICAL — price pre-condition &ldquo;first time&rdquo;
            lineage break):</b> patterns searched <code>first time in the lineage</code> and{' '}
            <code>first time</code> across the full EN file; hits before = 3 price-only claims
            (lead, trade book, decision grid) + 2 explicitly price-AND-gamma claims; after the
            fix the 3 price-only claims now read &ldquo;flipped TRUE again — first since the
            06-22 brief print&rdquo;, hits-after = 0 price-only stale matches. The 2 retained
            matches are the explicitly-stated &ldquo;price and gamma both constructive for the
            first time&rdquo; framing the audit suggested keeping separate from the price
            pre-condition — RESOLVED.{' '}
            <b>DN-2026-06-30-002 (MINOR — cross-asset row count):</b> pattern{' '}
            <code>168</code>; hits before = 2 (manifest + prose), both corrected to 167 rows,
            hits-after = 0 — RESOLVED.{' '}
            <b>DN-2026-06-30-003 (MINOR — 8h in BEAR hidden footnote):</b> pattern{' '}
            <code>8h / 1d</code> / <code>BEAR hid … 8h</code>; hits before = 1 (footnote);
            8h removed so the BEAR-hidden list reads 15m / 30m / 1h / 4h / 1d (source-faithful),
            hits-after = 0 — RESOLVED.{' '}
            <b>DN-2026-06-30-004 (MINOR — stale macro z/episodic/delta cells):</b> patterns{' '}
            <code>−0.54</code>, <code>−2.04</code>, <code>−0.79</code>, <code>+1.53</code>,{' '}
            <code>−1.25</code>, <code>· episodic</code>, <code>+0.00</code> (USD/CNY Δ); hits
            before = stale cells in the macro table + prose; synced from the
            2026-06-29 22:16Z render (5Y5Y z −0.40 soft, 10Y BE z −1.73 soft — &ldquo;both
            episodic&rdquo; removed, MOVE z −0.66, USD/JPY z +1.57, US-JP spread z −1.30,
            USD/CNY Δ +0.01), hits-after = 0 stale macro matches — RESOLVED.{' '}
            <b>ask-deepseek second-audit (MAJOR, adjudicated REJECTED):</b> deepseek flagged
            the 06-29 up-close +$674.50 as inconsistent with rounded daily closes ($60,225 −
            $59,550 = $675.00). Recompute: the displayed closes are $-rounded; the exact
            06-29 close $60,224.70 minus the exact 06-28 close $59,550.20 = +$674.50, and codex
            independently verified +674.50 against the parquet OHLC. The deepseek delta used
            rounded inputs — false positive, no change applied.{' '}
            <b>Overall:</b> all CRITICAL + MINOR findings RESOLVED (grep hits-after = 0 for
            every finding), <b>post codex hostile audit</b>, promoted v1 → v2.{' '}
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
            atomic snapshot (2026-06-30 00:06Z) with section-level provenance disclosed in the
            manifest band above;{' '}
            <em>critically, the live derivatives tape was frozen for 305.4h at snapshot time
            (last row 2026-06-17 06:43Z) and the smart-money positioning feed has been dead
            ~17.94 days</em>, so all funding, OI, flow and positioning figures are explicitly
            last-known / stale or non-computable and flagged as such; the macro panel render is
            2026-06-29 22:16Z (~1.85h before snapshot). Price, MTF, GEX and cross-asset are
            fresh. This is the v2 note, post codex hostile audit; the audit findings have been
            adjudicated and applied. Levels, sizes, and conditions are illustrative of the
            desk&rsquo;s process, not standing recommendations. Past correlation, gamma, and
            positioning patterns do not bind future tape. Derivatives carry the risk of total
            loss and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The break confirmed on the weekly close (06-29 $60,224.70 &lt; $62,643) and the
                06-15 reclaim thesis died — but the tape bounced into it: the 06-29 up-close
                reclaimed $60k and the 0γ flip, the dealer book flipped BACK to +5.6M
                net-LONG-gamma, and the near-dated amplifier shrank — all read through a dead
                tape a fourteenth day. Floor broke on the weekly close. Thesis falsified. Book
                long-gamma. Flip reclaimed. Blind.
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
            v2 · 2026-06-30 00:06Z snapshot · post codex hostile audit · 2026-06-30T01:20:00Z ·
            sources: live_db.json (FROZEN 305.4h) · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
