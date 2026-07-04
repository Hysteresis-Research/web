import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-04 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-04',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-04' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260704() {
  await requireViewer('/desk/2026-07-04');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-04 · v2</span>
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
              <span className="dn-big">$62,646.80</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.98%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-04 00:05Z ·{' '}
              <span className="dn-em">
                THE BOUNCE CARRIED TO THE FLOOR — the 07-03 daily bar closed UP +$1,024.90 at
                $62,565.50, the THIRD consecutive up-close and the tenth consecutive close below
                the $62,643 200W floor (−0.12%), and it did what no prior cut in the run managed:
                it reclaimed the D-EMA20 $62,210 / D-SMA20 $62,156 pair, so for the first time in
                the lineage spot holds TWO MAs beneath it (the nine-cut &ldquo;no MA beneath
                spot&rdquo; streak ends) and the in-progress 07-04 bar $62,646.80 sits +0.01% AT
                the 200W floor $62,643, testing it from below (the 07-04 daily close does not yet
                exist). The dealer book DEEPENED again to +88.1M net-LONG-gamma (was +60.7M on
                07-03 — it dampens harder), BUT a near-dated downside amplifier RE-EMERGED: the
                7JUL26 3.3 DTE expiry now carries −8.22M (the front 4JUL26 0.3 DTE is +19.61M,
                settles ~08:00Z today), so the constructive book carries a fresh short-dated
                downside pocket three sessions out. Spot sits +2.20% ABOVE the flip $61,296 (was
                +1.90% above $60,286 on 07-03). The MTF engine FLIPPED BACK to a 5/9
                TREND-CONTINUATION regime (JT≥0, from cycle-reversal on 07-03) and the headline
                improved to 4 bull / 5 bear / 1 neutral, BUT it now prints TWO ⚡TD9 SELLs (4h AND
                8h) at the highs with top (bearish-reversal) divergences on 15m / 1h — a
                STRENGTHENED overbought-reversal signature — offset by a higher-TF bottom-div
                cluster (30m / 8h / 12h / 1d) and a 1M ⚡TD9 BUY. The 200W break stays CONFIRMED
                (06-29 weekly close $60,224.70 &lt; $62,643) and the 06-15 reclaim thesis stays
                FALSIFIED, but spot is now AT the floor and a structural recovery — a sustained
                weekly close back above $62,643 — is in genuine reach for the first time in the run
                (the in-progress 07-06 weekly bar reads $62,647). Cross-asset stays IDIOSYNCRATIC
                (mean |r| 0.192, unchanged) and BTC&rsquo;s 7d return +4.27% LEADS NQ +1.58% by
                +2.69pt and SP500 +1.88% by +2.39pt, though several mega-caps and metals sit
                further ahead (BTC 9th of the complex). Macro eased at credit (HY OAS 2.75% &lt;
                the 2.78% re-grow gate, the gate STAYS un-fired, 3bp to fire) while rates held
                toward theirs (10Y 4.48%, 5bp from 4.53%) and the dollar held EXTREME (DXY 100.85;
                MOVE unavailable this cut). All read through a dead derivatives tape, now an
                eighteenth calendar day — the OKX monitor has been frozen 401.4h and the SM feed
                dead ~21.94 days. The desk reads the reclaim of the MA pair and the test of the
                floor from below as the most constructive turn of the lineage — but on a blind
                tape it still cannot confirm demand, and the engine is flashing TWO TD9 SELLs at
                the highs, so the third up-close and the floor test buy respect, not a chase.
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
                    <b>401.4h stale</b> vs the 00:05Z snapshot anchor (was 377.4h on the
                    07-03 note, 353.4h on 07-02 — the outage has run another ~24h since the
                    last note, into its eighteenth calendar day). Funding / OI / CVD / basis /
                    retail / taker-flow are LAST-KNOWN at 06-17 06:43Z, not current. The SM
                    sub-feed (long_btc / short_btc / net_btc) is frozen even longer — constant
                    since 2026-06-12 01:36Z (~526.5h / ~21.94 days); SM net and the SM
                    cut-fraction are <b>NON-COMPUTABLE</b> this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-04 00:01Z scan</td>
                  <td className="dn-flag">
                    fresh (~4 min before anchor) · rolling latest-file artifact,
                    archived verbatim at
                    /opt/desk-note/snapshots/2026-07-04-0005/ · in-progress bars · scan
                    spot $62,583, 24h +1.71%, 24h H/L $62,957 / $61,229, qVol $8.22B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-04 00:01Z snapshot</td>
                  <td className="dn-flag">
                    fresh (~4 min before anchor) · Deribit idx $62,823 ($176 above
                    parquet spot $62,646.80) · 914 instruments · net GEX{' '}
                    <b>+88.1M</b> (net LONG gamma, DEEPENED from +60.7M on the 07-03
                    note; +12.0M on 07-02) · flip $61,296 (spot +2.20% ABOVE, from +1.90%
                    on 07-03) · the front is 4JUL26 0.3 DTE at{' '}
                    <b>+19.61M</b> (positive, settles ~08:00Z today), but a near-dated downside
                    amplifier has <b>RE-EMERGED</b> at{' '}
                    <b>7JUL26 3.3 DTE −8.22M</b> (a fresh concentrated short-dated downside pocket
                    three sessions out) — the heaviest positive ceiling is{' '}
                    <b>$63k +31.62M</b> and the put wall is <b>$60k −21.49M</b> · spot $62,646.80
                    sits AT the 200W floor $62,643, just below the $63k ceiling
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-04 00:01Z
                  </td>
                  <td className="dn-flag">fresh · 7d 1h bars · 22 assets · 167 rows · regime IDIOSYNCRATIC (mean |r| 0.192, UNCHANGED from 07-03 — BTC stays well below the 0.25 idiosyncratic threshold, and its 7d return +4.27% LEADS the NQ +1.58% by +2.69pt and SP500 +1.88% by +2.39pt, though several mega-caps and metals sit further ahead — BTC is 9th of the complex)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-03 22:16Z render</td>
                  <td className="dn-flag">
                    ~1.82h render lag · 10Y <b>4.48%</b> (+4.0bp, 5bp from the 4.53% gate),
                    TIPS <b>2.25%</b> (+5.0bp, EXTREME RISK-OFF), HY OAS{' '}
                    <b>2.75%</b> (+1.0bp — stays BELOW the 2.78% re-grow gate, the gate STILL
                    does not fire, 3bp to go) · MOVE bond vol <b>unavailable this cut</b> (fetch
                    failed; was 68.6 on 07-03) · the FX legs: <b>DXY 100.85</b> (−0.54 day, still
                    EXTREME) and <b>USD/JPY 161.34</b> (−0.11 day, yen firmed from 162.54) · Fed
                    net liq $5.843T (source panel delta +0.053T, unchanged vs the 07-03 note) · NFCI neutral (now
                    stale ~14d) · WTI $71.9 (stale ~4d)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-04 00:06Z (close $62,646.80)</td>
                  <td className="dn-flag">
                    fresh kline (exchange OHLC, independent of the frozen live tape) ·
                    offsets recomputed vs the parquet last-bar close, the freshest
                    available spot while the live tape is frozen · the displayed weekly
                    ladder uses the 2023→ subset (184 weekly bars), so no W-SMA200 row
                    (W-EMA200 $67,461 seeds from available history); the 200W floor is
                    recomputed directly from the full-history glob —
                    <b>356 completed weekly W-MON bars</b> (2019→present, INCLUDING the
                    resolved 06-29 week and excluding the in-progress 07-06 week) —{' '}
                    = <b>$62,643</b>, UNCHANGED from the 07-03 note (the 06-29 week resolved
                    four cuts ago, so no step). <b>For the first time in the lineage TWO MAs sit
                    beneath spot — D-SMA20 $62,156 (+0.79%) and D-EMA20 $62,210 (+0.70%) — the
                    nine-cut &ldquo;no MA beneath spot&rdquo; streak ends, and spot is +0.01%
                    AT the 200W floor $62,643, testing it from below</b> · weekly_200sma.json
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
              <span className="dn-v bear">−7.24% (STALE · 06-17 06:43Z · 401.4h)</span>
              <span className="dn-src">live_db raw funding −0.006608 × 1095 = −7.24% ann (NOT ×100) · LAST-KNOWN at the 06-17 06:43Z freeze, now 401.4h stale, not a current read · byte-for-byte the same frozen row carried by the 06-19 → 07-03 notes; the last-available ann over the 24h+1m inclusive sampled window ending at the freeze (1,442 rows) was mean +0.20%, range −7.24% / +7.21%, 819 / 1,442 rows negative — a balanced, two-sided book at the point the tape died</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · vs 07-03</span>
              <span className="dn-v">tape frozen — not computable</span>
              <span className="dn-src">the live tape has not written since 06-17 06:43Z, so there is still no current funding to difference against the 07-03 note · last-known print at the freeze was −7.24% ann (shorts paying longs); the leverage gate remains un-assessable an eighteenth day running</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC (−0.45%) · STALE window</span>
              <span className="dn-src">live_db oi_btc 102,945 at the 06-17 06:43Z freeze vs the start of a 24h+1m inclusive sampled window (1,442 rows) · the window ENDS at the freeze, NOT into the 00:05Z snapshot — it describes the tape up to 06-17 06:43Z and is 401.4h out of date</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` at the 06-17 06:43Z freeze (was 58.29% at the start of the 24h+1m inclusive sampled window — a +1.18pt long add into the roll-over) · last-known, 401.4h stale</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED DEAD ~526.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · this triple has been byte-for-byte constant since 2026-06-12 01:36Z (~526.5h / ~21.94 days) — it is a FROZEN value, NOT a current positioning read; carried only to mark the dead feed</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">NON-COMPUTABLE</span>
              <span className="dn-src">SM feed frozen ~21.94 days · |Δ| / prior_net cannot be computed — there is no current SM net to difference · the squeeze-cycle / re-stack framework is blind this cut, a continuation of the 06-16 → 07-03 ON-HOLD</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.1% / 38.05%</span>
              <span className="dn-src">GEX median IV across 914 instruments (00:01Z, fresh) vs 30D close-to-close RV 38.05% off parquet — chain richness ~+4.05pt over realised (was ~+5.25pt on 07-03 — richness NARROWED as IV eased while RV firmed on the third up-close); RV firmed (was 37.55% on 07-03; the alternative 29-return window reads 35.07%) · IV is a chain-median across 914 instruments, NOT a tradable spread</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+2.20% (above · extended)</span>
              <span className="dn-src">flip $61,296 (was $60,286 · +$1,010) · vs parquet spot $62,646.80 (62,646.80 / 61,296 − 1 = +2.204%) / GEX file Deribit idx $62,823 (62,823 / 61,296 − 1 = +2.491%, file reads +2.5%) — both references ABOVE the flip, EXTENDED from +1.90% above on 07-03 · net GEX +88.1M (net LONG gamma, DEEPENED from +60.7M) · a near-dated downside amplifier RE-EMERGED (7JUL26 3.3 DTE −8.22M) even as the front 4JUL26 reads +19.61M</span>
            </div>
          </div>
          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The bounce carried to the floor — the 07-03 daily bar closed UP +$1,024.90 at
                $62,565.50, the third consecutive up-close and the tenth consecutive close below
                the $62,643 floor (−0.12%), and it did what no prior cut in the run managed: it
                reclaimed the D-EMA20 / D-SMA20 pair, so for the first time in the lineage spot
                holds two MAs beneath it, and the in-progress 07-04 bar $62,646.80 sits +0.01% AT
                the 200W floor, testing it from below (the 07-04 daily close does not yet exist).
                The dealer book deepened again to +88.1M net-LONG-gamma, but a near-dated downside
                amplifier RE-EMERGED (7JUL26 3.3 DTE −8.22M); spot pushed to +2.20% above the flip;
                and the MTF engine flipped BACK to a 5/9 trend-continuation regime with the
                headline improved to 4/5/1 — but it now prints TWO ⚡TD9 SELLs (4h AND 8h) at the
                highs with top divs on 15m / 1h, a strengthened overbought-reversal signature. All
                read through a dead derivatives tape, an eighteenth calendar day running
              </span>. Spot prints{' '}
              <span className="dn-tag bull">$62,646.80, +1.98% on 24h</span> at the 00:06Z
              parquet bar (the MTF scan reads +1.71% on its own window), up from the 07-03
              note spot $61,433 — the lineage carried the bounce all the way back to the floor it
              lost on 06-24. The 200W break stays{' '}
              <span className="dn-tag bear">CONFIRMED on the 06-29 weekly close $60,224.70,
              −3.86% below the $62,643 floor</span>, the 06-15 reclaim thesis stays FALSIFIED,
              and the floor is unchanged this cut ($62,643, the 06-29 week resolved four cuts
              ago). Ten consecutive daily closes (06-24 $61,051 −2.54%, 06-25 $59,772 −4.58%,
              06-26 $60,072 −4.10%, 06-27 $60,000 −4.22%, 06-28 $59,550 −4.94%, 06-29 $60,224.70
              −3.86%, 06-30 $58,605.40 −6.45%, 07-01 $59,999.60 −4.22%, 07-02 $61,540.60 −1.76%,{' '}
              <span className="dn-tag bull">07-03 $62,565.50 −0.12%, an UP-close +$1,024.90,
              the third straight and closest to the floor of the run</span>) now sit below the
              floor, the last three all up-closes lifting spot back to the line. For the first
              time in the lineage spot holds MAs beneath it —{' '}
              <span className="dn-tag bull">D-SMA20 $62,156 (+0.79%) and D-EMA20 $62,210
              (+0.70%)</span> are now support, with the 200W floor $62,643 (+0.01%) right at spot.
              The dealer book{' '}
              <span className="dn-tag bull">deepened to +88.1M net-LONG-gamma</span> and the front
              4JUL26 is +19.61M, but a{' '}
              <span className="dn-tag bear">near-dated downside amplifier re-emerged (7JUL26
              −8.22M)</span>; spot sits at the $63k +31.62M positive ceiling and above the $60k
              −21.49M put wall. MTF improved at the headline to{' '}
              <span className="dn-tag">4 bull / 5 bear / 1 neutral</span> (was 3/6/1) and the
              regime classifier{' '}
              <span className="dn-tag bull">flipped BACK to 5/9 trend-continuation (JT≥0)</span>{' '}
              from cycle-reversal — but the engine now carries{' '}
              <span className="dn-tag bear">TWO ⚡TD9 SELLs (4h AND 8h) at the highs</span> with
              top divs on 15m / 1h, a strengthened overbought signature. Macro held at rates and
              eased at credit: 10Y steady at 4.48% (5bp from its gate), HY OAS +1bp to 2.75%
              (stays BELOW the 2.78% re-grow gate — the gate stays un-fired, 3bp to go), DXY held
              100.85 EXTREME.{' '}
              <span className="dn-em">
                The operational fact is unchanged and still binding: the OKX monitor has now
                been frozen 401.4h (last row 2026-06-17 06:43Z), funding / OI / CVD / basis /
                retail are last-known and stale, and the SM positioning book has been dead
                ~21.94 days — SM net and the cut-fraction are non-computable. The third up-close
                carried spot to the floor and put two MAs beneath it for the first time in the run,
                and the gamma/price map is the most constructive the lineage has held — but the
                tape that would say whether this is demand or thin short-cover is still down, and
                the engine is now flashing TWO TD9 SELLs at the highs. The read is on price, gamma
                and MTF alone.
              </span>{' '}
              The book stays flat: the break is confirmed, the reclaim thesis is dead, and the
              bounce that carried spot to the floor is — for all its improvement — unconfirmable
              on a blind tape and now met by two overbought reversal prints at the highs. The
              scout&rsquo;s price pre-condition stays TRUE and strengthens (spot +2.20% above the
              flip, two MAs beneath, at the floor), but the scout stays stood down. No shorts, no
              scout, no fresh hedge.
            </p>
            <p>
              BTC prints <span className="dn-tag">$62,646.80</span> at the parquet last bar
              (00:06Z),{' '}
              <span className="dn-tag bull">+1.98%</span> on 24h (vs the $61,433 bar
              roughly 24h prior — the 07-03 00:06Z parquet bar; the MTF scan reads +1.71%
              on its own 00:01Z window — the spread is the reference window, not a data
              conflict), inside a{' '}
              <span className="dn-tag">$62,957 / $61,229</span> 24h range (per the MTF
              scan H/L). The Deribit index reads $62,823 at 00:01Z and the MTF scan spot
              is $62,583 — so the freshest spot is well-corroborated across three
              independent fresh sources (parquet kline $62,646.80, GEX Deribit index $62,823,
              MTF scan $62,583), even though the live_db tape that normally supplies it is
              frozen at 06-17 06:43Z, 401.4h stale.{' '}
              <span className="dn-signal">The structural read has moved from a confirmed break
              with the bounce EXTENDED to a third session (07-03 note) to that same confirmed
              break with the bounce now CARRIED TO THE FLOOR — the 07-03 daily close $62,565.50
              was the third consecutive up-close (+$1,024.90) and the first in the run to reclaim
              the D-EMA20 / D-SMA20 pair, and the in-progress 07-04 bar $62,646.80 tests the 200W
              floor $62,643 from below (+0.01%; the 07-04 daily close does not yet exist)</span>:
              the 22JUN weekly close $63,990 was the last weekly hold, the daily closes walked
              down through the line (06-22 → 06-28), the 06-29 weekly bar closed $60,224.70 below
              the floor to confirm the break, the 06-29 daily bar bounced, the 06-30 bar reversed
              it, and 07-01 → 07-03 bounced three sessions in a row back to the floor. Per the
              framework the break was confirmed at the weekly-close level and the 06-15 reclaim
              thesis falsified; nothing this cut un-does that — the bounce is a bounce inside a
              confirmed break until a weekly close reclaims the floor.{' '}
              <span className="dn-em">
                The one structural positive of the lineage is broken at the weekly-close level
                and the reclaim thesis is dead; but spot now holds two MAs beneath it and sits
                AT the floor, with the book deeply long-gamma — the most constructive gamma/price
                map the lineage has carried, and the first cut where a structural recovery (a
                weekly close back above $62,643) is in genuine reach. The desk reads it as a real
                improvement it cannot yet confirm as demand on a blind tape, and now the engine is
                flashing two overbought reversal prints at the highs.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · LIVE TAPE FROZEN 401.4h (eighteenth day) · SM book dead ~21.94 days · funding/OI/flow last-known stale · the 07-03 up-close carried the bounce to the floor and reclaimed the D-EMA20/D-SMA20 pair, but the desk still cannot see whether it is demand absorbing the break or thin short-cover — the positioning tape is dark</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important source of this note — the live derivatives tape —
                is still down, an eighteenth calendar day running
              </span>. The OKX monitor has appended no row to live_db.json since{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> (t = &ldquo;06-17
              14:43&rdquo; BJ; the file mtime 06-17 06:43:08Z confirms the write stopped
              there; the process status is not archived or verified in this cut, so the note
              asserts the missing tape, not a live/hung process). That is now{' '}
              <span className="dn-tag bear">401.4h of missing tape</span> against the 00:05Z
              snapshot anchor — the 06-20 note flagged it at 65.4h, the 06-27 note at 233.4h,
              the 06-30 note at 305.4h, the 07-03 note at 377.4h, and the outage has run
              another ~24h without a write. Everything the live tape carries — funding, open
              interest, spot/futures CVD, perp basis, retail long%, taker-net, big-print flow,
              aggressor skew — is therefore{' '}
              <span className="dn-em">last-known at 06-17 06:43Z and not current</span>. The
              smart-money positioning triple (long_btc / short_btc / net_btc) has been
              byte-for-byte constant —{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> — since{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>, ~526.5h (~21.94 days).
              The 06-16 note flagged this dead feed at ~94.5h and put the squeeze-cycle ON
              HOLD; the 07-03 note carried it at ~502.5h; today it is ~526.5h and still dead.{' '}
              <span className="dn-em">
                SM net is non-computable as a current read, and the SM cut fraction (|Δ| /
                prior_net) cannot be formed — there is no current SM net to difference. Any
                positioning claim in this note is explicitly historical, not live.
              </span>
            </p>

            <p>
              For completeness, the <em>last-available</em> tape readings — all pinned to
              the 06-17 06:43Z freeze and now 401.4h out of date, and byte-for-byte the same
              readings the 06-19 → 07-03 notes carried because it is the same frozen row —
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
                07-01 → 07-03 three-session bounce back to the floor, so it says nothing about
                whether the bounce is short-cover exhausting or demand absorbing the break. The
                desk treats the positioning dimension as unknown, and the bounce to the floor as
                positioning-unconfirmed.
              </span>
            </p>
            <h2 className="dn-sec">
              Structure <span className="dn-roman">II · price/MTF FRESH · multi-TF resonance mixed 4 bull / 5 bear / 1 neutral (IMPROVED by one from 3/6/1 — 1h reclaimed an above-water golden cross) · net read higher-TF bearish · short-term bounce · fast frames 30m/1h GOLDEN, mid-frames 4h/8h/12h/1d below-water GOLDEN, but TWO ⚡TD9 SELLs (4h AND 8h) printed at the highs with top divs on 15m/1h · 1M TD9 buy still prints · regime FLIPPED BACK to 5/9 trend-continuation (JT≥0) · for the FIRST time in the lineage two MAs sit beneath spot (D-SMA20 / D-EMA20) and spot is +0.01% AT the 200W floor $62,643, the break still CONFIRMED but recovery in reach</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map is fresh and improved by one at the headline (4 bull / 5 bear / 1
                neutral, 1h reclaimed an above-water golden cross) with the mid-frames
                (4h/8h/12h/1d) holding below-water golden crosses and the regime classifier
                flipped BACK to trend-continuation — but the engine now prints TWO ⚡TD9 SELLs
                (4h AND 8h) at the highs with top divs on 15m / 1h, a strengthened
                overbought-reversal signature
              </span> — the one dimension, with the dealer map, the desk can still trust
              today, and this cut it reads as a topping tension into the bounce even as the
              trend frame turns constructive. The 00:01Z scan tags{' '}
              <span className="dn-tag">4 bull / 5 bear / 1 neutral across 10 frames</span>,
              net read <em>higher-timeframe bearish · short-term bounce</em> — improved from
              the 07-03 scan&rsquo;s 3/6/1 as 1h reclaimed an above-water golden cross. The
              regime line reads{' '}
              <span className="dn-tag bull">5/9 trend-continuation / cycle-momentum regime (JT≥0)</span>{' '}
              (was 5/9 cycle-reversal on 07-03), so the classifier flipped BACK from
              mean-reversion to trend-continuation — but the engine now carries two fresh
              overbought reversal prints to act against, not a clean constructive trigger. The
              bull frames are the{' '}
              <span className="dn-tag">15m / 30m / 1h / 1M</span> — the fast stack (15m / 30m /
              1h) above cloud and the 1M above cloud (TD9 buy printed), the 4h also above cloud
              (support ↓61.8k) — while the 8h is in cloud and 12h → 1w stay bearish below cloud.
              The topping signature is the print
              this cut:{' '}
              <span className="dn-tag bear">TWO fresh ⚡TD9 SELLs on the 4h AND the 8h (overbought
              reversal hint, at the highs)</span> with{' '}
              <span className="dn-tag bear">top (bearish-reversal) divergences on 15m / 1h</span>{' '}
              and the 15m rolling to an{' '}
              <span className="dn-tag bear">above-water death cross (5 bars)</span> — momentum
              rolling over from a high on the fast frames. The mid-frames still hold the
              constructive side:{' '}
              <span className="dn-tag">4h / 8h / 12h / 1d below-water golden crosses (15 / 8 / 5 /
              3 bars)</span> — all unconfirmed below-water probes — while the higher frames (12h →
              1w) stay below cloud (8h in cloud) and the{' '}
              <span className="dn-tag bear">1w carries a below-water death cross (1 bar)</span>.
              Cloud: 15m / 30m / 1h / 4h / 1M above cloud, 8h in cloud, 12h → 1w below. The
              constructive set is the{' '}
              <span className="dn-tag">fast-frame golden crosses, the mid-frame below-water golden
              crosses, a 1M TD9 buy, and bottom (bullish-reversal) divs on 30m / 8h / 12h / 1d (a
              higher-TF bottom-div cluster)</span> — set against the two fresh TD9 SELLs and top
              divs on 15m / 1h at the highs.{' '}
              <span className="dn-em">
                Straight read: the frame stack improved by one, the regime flipped to
                trend-continuation, and the fast frames plus a higher-TF bottom-div cluster read
                constructive — but the engine printed TWO TD9 SELLs (4h AND 8h) with top divs on
                15m / 1h at the highs, so the overbought-reversal signature strengthened this cut.
                At the highs, with the 200W floor confirmed broken but spot now AT it (+0.01%) and
                two MAs beneath, the engine&rsquo;s constructive prints (fast/mid golden crosses,
                1M TD9 buy, bottom-div cluster) are offset by two overbought reversal prints — so
                there is no clean multi-frame turn to trade the break long against, and a reason to
                distrust the extension at these levels even as the trend frame turns.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">62,583</td><td className="num">57.9</td><td className="bear">death (water-up) 5b</td><td className="bull">above ↓61.9k 57b</td><td>Sell 3</td><td>BEAR reg (top) · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">62,583</td><td className="num">63.4</td><td className="bull">golden (water-up) 14b</td><td className="bull">above ↓60.9k 117b</td><td>Buy 4</td><td>BULL hid · BULL reg (bottom)</td></tr>
                <tr><td>1h</td><td className="num">62,583</td><td className="num">66.9</td><td className="bull">golden (water-up) 4b</td><td className="bull">above ↓60.3k 57b</td><td>Buy 1</td><td>BEAR reg (top) · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">62,583</td><td className="num">67.0</td><td className="bull">golden (water-dn) 15b</td><td className="bull">above ↓61.8k 4b</td><td className="bear">⚡TD9 SELL</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">62,583</td><td className="num neut">62.4</td><td className="bull">golden (water-dn) 8b</td><td className="neut">in cloud 61.8k–62.6k 1b</td><td className="bear">⚡TD9 SELL</td><td>BEAR hid · BULL reg (bottom)</td></tr>
                <tr><td>12h</td><td className="num">62,583</td><td className="num neut">57.3</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑64.1k 85b</td><td>Sell 5</td><td>BULL reg (bottom)</td></tr>
                <tr><td>1d</td><td className="num">62,583</td><td className="num neut">47.9</td><td className="bull">golden (water-dn) 3b</td><td className="bear">below ↑68.6k 33b</td><td>Sell 3</td><td>BEAR hid · BULL reg (bottom)</td></tr>
                <tr><td>3d</td><td className="num">62,583</td><td className="num bear">40.5</td><td className="neut">—</td><td className="bear">below ↑70.6k 11b</td><td>Sell 1</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">62,583</td><td className="num bear">37.0</td><td className="bear">death (water-dn) 1b</td><td className="bear">below ↑99.5k 22b</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">62,583</td><td className="num bear">43.0</td><td className="neut">— (DIF water-dn)</td><td className="bull">above ↓47.0k 29b</td><td>TD9 BUY</td><td>BULL reg (bottom)</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (08:01 Beijing; rolling latest
                    file, archived verbatim at
                    /opt/desk-note/snapshots/2026-07-04-0005/). Net read{' '}
                    <em>higher-timeframe bearish · short-term bounce (4 bull / 5 bear / 1
                    neutral)</em>; regime <em>5/9 trend-continuation / cycle-momentum regime
                    (JT≥0)</em>; active divergences{' '}
                    <em>reversal: top div 15m / 1h, bottom div 30m / 8h / 12h / 1d; hidden
                    (continuation): BEAR hid 4h / 8h / 1d, BULL hid 15m / 30m / 1h</em>. Header
                    alerts:{' '}
                    <em>⚡4h TD9 SELL and ⚡8h TD9 SELL both printed — overbought reversal hint
                    (at the highs)</em>,{' '}
                    <em>⚡1M TD9 BUY printed — oversold reversal hint</em>,{' '}
                    <em>1w below-water death cross (1 bar ago, DIF −5,878.7)</em>,{' '}
                    <em>1d below-water golden cross (3 bars ago)</em>,{' '}
                    <em>8h below-water golden cross (8 bars ago)</em>,{' '}
                    <em>12h below-water golden cross (5 bars ago)</em>. Scan spot
                    $62,583, 24h +1.71%, 24h H/L $62,957 / $61,229, qVol $8.22B. Closes are
                    in-progress bars; treat every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix took its first structural turn of the lineage: the third up-close
              pushed spot above the D-SMA20 / D-EMA20 pair, so for the first time in the run{' '}
              <span className="dn-tag bull">two MAs sit beneath spot — D-SMA20 $62,156 (+0.79%)
              and D-EMA20 $62,210 (+0.70%) are now support</span>, ending the nine-cut
              &ldquo;no MA beneath spot&rdquo; streak. Above them, the 200W floor is right at
              spot:{' '}
              <span className="dn-tag bull">spot $62,646.80 is +0.01% AT the full-history W-SMA200
              200W floor $62,643</span> (unchanged this cut), testing it from below. Then the
              wall steps back up overhead — the cycle-proxy{' '}
              <span className="dn-tag bear">D-EMA50 $65,895 (−4.93%)</span>, then{' '}
              <span className="dn-tag bear">D-SMA50 $67,073 (−6.60%)</span>, then{' '}
              <span className="dn-tag bear">W-EMA200 $67,461 (−7.14%, seed)</span>, then a dense
              overhead band:{' '}
              <span className="dn-tag bear">D-EMA100 $69,662 (−10.07%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $70,284 (−10.87%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $70,699 (−11.39%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $71,001 (−11.77%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $72,156 (−13.18%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $72,850 (−14.01%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $73,878 (−15.20%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $74,834 (−16.29%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $75,902 (−17.46%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $75,763 (−17.31%)</span>. Far above and
              disused: W-EMA100 $80,203 (−21.89%), W-EMA50 $81,031 (−22.69%), W-SMA100
              $88,548 (−29.25%), W-SMA50 $88,703 (−29.37%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-04 00:06Z (close $62,646.80); offsets
                recomputed against that same last-bar close, which is the freshest available
                spot while the live tape is frozen. Displayed MA levels are $-rounded; offsets
                computed from exact series values. The displayed weekly ladder uses the 2023→
                subset (184 weekly bars), so W-SMA200 is non-computable there and W-EMA200
                $67,461 seeds from available history; the 200W floor $62,643 is recomputed
                separately from the full-history glob (356 completed weekly W-MON bars,
                INCLUDING the resolved 06-29 week and excluding the in-progress 07-06 week —
                unchanged from 07-03). Daily closes: 06-22 $63,990 (= the 22JUN weekly close),
                06-23 $62,697, 06-24 $61,051 (first close below the floor), 06-25 $59,772, 06-26
                $60,072, 06-27 $60,000, 06-28 $59,550, 06-29 $60,224.70 (the weekly close that
                confirmed the break), 06-30 $58,605.40 (the deepest of the run, −6.45%), 07-01
                $59,999.60 (an up-close +$1,394.20), 07-02 $61,540.60 (an up-close +$1,541.00),
                07-03 $62,565.50 (the tenth close below, an UP-close +$1,024.90 — the third
                straight and closest to the floor, −0.12%), 07-04 (in-progress, 5-min bar)
                $62,646.80 (+0.01% AT the floor) — the floor break stays confirmed and the bounce
                has carried spot back to the line with two MAs now beneath it.
              </span>
            </p>
            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DEEPENED again to net-LONG-gamma aggregate +88.1M (was +60.7M on 07-03, +12.0M on 07-02) — the book DAMPENS the next move harder · the front is 4JUL26 0.3 DTE +19.61M (settles ~08:00Z today), BUT a near-dated downside amplifier RE-EMERGED at 7JUL26 3.3 DTE −8.22M — a fresh concentrated short-dated downside pocket three sessions out · the flip stepped $60,286 → $61,296 and spot pushed +2.20% above · heaviest ceiling $63k +31.62M (AT spot), put wall $60k −21.49M · IV 42.1%</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book deepened its net-long-gamma posture again: aggregate gamma rose
                from +60.7M to +88.1M net-LONG-gamma, so the book dampens the next move harder,
                and the flip reclaim widened as spot pushed further above the flip — the most
                constructive gamma backdrop the lineage has carried; BUT a near-dated downside
                amplifier RE-EMERGED at 7JUL26 −8.22M, a fresh short-dated pocket the 07-03 book
                did not carry
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+88.1M / 1%</span> (was +60.7M on 07-03, +12.0M on
              07-02, −31.5M on 07-01); the book has whipsawed short → long → deeper long → deeper
              still across the recent notes and now sits at its deepest net-long-gamma of the run.
              The 0-γ flip stepped{' '}
              <span className="dn-tag">$60,286 → $61,296 (+$1,010)</span>, and spot $62,646.80
              pushed further above it, so spot sits{' '}
              <span className="dn-tag bull">+2.20% above the flip</span>
              {' '}on spot-denominated math (62,646.80 / 61,296 − 1 = +2.204%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads +2.5% off its Deribit-index
              $62,823 ($176 above parquet spot), which is{' '}
              <span className="dn-tag bull">+2.49%</span>
              (62,823 / 61,296 − 1 = +2.491%) — both references above the flip, EXTENDED from
              +1.90% above on 07-03. The wall map is a positive ceiling AT spot with a single
              deep put wall below: the heaviest is{' '}
              <span className="dn-tag bull">$63k +31.62M</span> (heaviest wall, a positive ceiling
              right at spot / the floor), with the deep put wall{' '}
              <span className="dn-tag bear">$60k −21.49M</span> below spot, then a stack of positive
              ceilings overhead{' '}
              <span className="dn-tag bull">$64k +16.64M</span>,{' '}
              <span className="dn-tag bull">$66k +13.79M</span>,{' '}
              <span className="dn-tag bull">$65k +13.03M</span>,{' '}
              <span className="dn-tag bull">$70k +12.99M</span>,{' '}
              <span className="dn-tag bull">$68k +10.60M</span>,{' '}
              <span className="dn-tag bull">$62.5k +8.11M</span>,{' '}
              <span className="dn-tag bull">$80k +8.02M</span>, and{' '}
              <span className="dn-tag bear">$56k −7.73M</span> below.{' '}
              <span className="dn-em">
                Critically, the aggregate is deeply net-LONG-gamma, so the book dampens the
                next move harder rather than amplifying it — a deepening of the +60.7M book of
                07-03 and the most constructive gamma backdrop the lineage has carried. Spot at
                $62,646.80 sits AT the $63k +31.62M positive ceiling (which brackets the floor
                $62,643 / D-SMA20 $62,156 zone) and above the $60k −21.49M put wall; the positive
                ceiling caps the bounce right at the floor, while the deep put wall below is the
                near shelf. BUT the deeply long-gamma read carries a caveat this cut: a near-dated
                downside amplifier RE-EMERGED at 7JUL26 3.3 DTE −8.22M — a fresh concentrated
                short-dated downside pocket three sessions out that the 07-03 book did not carry,
                so the constructive aggregate is not clean at the front. And the tape that would
                say whether the price move under it is demand is still down, while the MTF engine
                is flashing two TD9 SELLs at the highs.
              </span>{' '}
              By expiry the near-dated concentration is positive at the very front but carries the
              re-emerged 7JUL26 negative: the front is the positive 4JUL26{' '}
              <span className="dn-tag bull">0.3 DTE at +19.61M (settles ~08:00Z today)</span>,
              then 5JUL26 1.3 +6.11M, 6JUL26 2.3 +2.62M, 7JUL26 3.3{' '}
              <span className="dn-tag bear">−8.22M (the re-emerged near-dated downside
              amplifier)</span>, 10JUL26 6.3{' '}
              <span className="dn-tag bull">+21.65M</span>, 17JUL26 13.3{' '}
              <span className="dn-tag bull">+20.37M</span>, 24JUL26 20.3 +2.70M, 31JUL26 27.3{' '}
              <span className="dn-tag bull">+29.21M</span>, 28AUG26 55.3 +4.51M, 25SEP26 83.3{' '}
              <span className="dn-tag bear">−1.25M</span>, 25DEC26 174.3 +1.40M, 26MAR27 265.3
              +0.57M, 25JUN27 356.3 +0.52M. The 3JUL26 front settled ~08:00Z yesterday; the
              downside amplifier the 07-02 note had seen at 3JUL26 −7.75M and the 07-03 note had
              seen flip positive as 3JUL26 rolled to the front has now RE-EMERGED at 7JUL26 −8.22M
              — the concentrated short-dated downside is back, three sessions out. (The
              spot-referenced aggregate +88.1M is the net GEX at spot; the by-expiry rows are an
              independent decomposition and need not sum to it.)
            </p>

            <p>
              IV median across 914 instruments is{' '}
              <span className="dn-tag">42.1%</span> (eased from 42.8% / 926 instruments
              on 07-03) against 30D close-to-close RV of{' '}
              <span className="dn-tag">38.05%</span> — chain-level richness{' '}
              <span className="dn-tag">~+4.05pt</span> over realised (was ~+5.25pt on 07-03 —
              richness NARROWED as IV eased while RV firmed on the third up-close), with RV firming
              off its recent path (38.05% today vs 37.55% on 07-03 and 24.91% on 05-31 — the
              alternative 29-return window reads 35.07%). A chain-median across
              914 instruments, <span className="dn-em">not</span>
              {' '}a tradable spread; expiry-/strike-level vega, skew and term structure remain
              not loaded; the vol read stays framework-only. RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log returns (= 31
              consecutive daily closes) anchored to parquet last bar 2026-07-04 00:06Z. P/C
              ratio and Call/Put OI split not re-tabulated this cut.
            </p>
            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · ~1.82h render — 10Y steady 4.48% (5bp from the gate), TIPS 2.25% EXTREME RISK-OFF, HY OAS 2.75% +1.0bp stays BELOW its 2.78% re-grow gate (the gate STILL does not fire, 3bp to go), MOVE unavailable this cut · the FX legs held/firmed: DXY 100.85 (still EXTREME) and USD/JPY 161.34 (yen firmed) · regime stays IDIOSYNCRATIC (mean |r| 0.192, unchanged), BTC +4.27% LEADS NQ by +2.69pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro panel render is ~1.82h lagged and the read is little changed: rates held
                at 4.48% (5bp from their gate) while the credit spread widened a touch +1bp to
                2.75% and stayed BELOW its 2.78% re-grow gate — the gate stays un-fired, 3bp to go
                — and the dollar held 100.85 EXTREME
              </span>. Dashboard render is 2026-07-03 22:16Z, ~1.82h before the snapshot. US
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
              spread widened a touch +1bp but stays BELOW its 2.78% re-grow gate (it fired at
              2.83% on 06-30 and 2.80% on 07-01, then dropped under to 2.75% on 07-02 and 2.74% on
              07-03 — this cut it holds under at 2.75%, so the credit re-grow gate STILL does not
              fire, 3bp to go). MOVE bond vol is{' '}
              <span className="dn-tag stale">unavailable this cut</span> — the source fetch failed
              (it read 68.6 on 07-03); the vol leg is not refreshed. The dollar held EXTREME: DXY{' '}
              <span className="dn-tag bear">100.85 (−0.54 day)</span>, regime z{' '}
              <span className="dn-tag bear">+2.12</span>, still extreme. Fed
              net liquidity{' '}
              <span className="dn-tag">$5.843T</span>, regime z{' '}
              <span className="dn-tag">−0.60</span> — unchanged vs the 07-03 note; the source panel
              delta column reads +0.053T.
              USD/JPY{' '}
              <span className="dn-tag">161.34 (−0.11 day)</span>, regime z +1.39, the yen firmed
              from 162.54; US-JP 10Y spread{' '}
              <span className="dn-tag">1.83% (+4.0bp)</span> narrow;
              USD/CNY <span className="dn-tag">6.7881 (−0.01)</span>; WTI{' '}
              <span className="dn-tag stale">$71.9 (stale ~4d)</span>.{' '}
              <span className="dn-em">
                Net: the macro backdrop stayed risk-off on the z-panel (rates tight, TIPS EXTREME,
                dollar EXTREME) but the credit margin held loose — the credit leg widened a touch
                +1bp to 2.75% and stays BELOW the 2.78% re-grow gate, so the credit gate that fired
                on the 06-28 → 07-01 notes stays un-fired for a third cut (3bp to fire); the rates
                leg held at 4.48% and sits 5bp from its 4.53% gate, the nearer leg. The
                reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE at 4.48%. The macro read
                still reinforces rather than refutes the confirmed break — a broad risk-off z-panel
                — but the fresh moves are minimal: the credit gate stays un-fired, the correlation
                regime holds idiosyncratic with BTC leading NQ (see cross-asset below), and the
                yen firmed while the dollar held extreme.
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
                <tr><td>10Y breakeven</td><td className="num">2.23%</td><td className="num">0.0bp</td><td className="num">−1.56</td><td className="neut">steady</td></tr>
                <tr><td>HY OAS</td><td className="num">2.75%</td><td className="num bear">+1.0bp</td><td className="num bull">−0.92</td><td className="bull">stays BELOW the 2.78% re-grow gate — gate still does not fire (3bp to go)</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.504</td><td className="num">−0.00</td><td className="num">+0.40</td><td className="stale">weekly · neutral · now stale ~14d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num stale">n/a</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">unavailable this cut · fetch failed (was 68.6)</td></tr>
                <tr><td>DXY</td><td className="num">100.85</td><td className="num bull">−0.54</td><td className="num bear">+2.12</td><td className="bear">EXTREME RISK-OFF · held</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.843T</td><td className="num">+0.053T</td><td className="num">−0.60</td><td className="neut">source panel delta +0.053T · unchanged vs the 07-03 note</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.34</td><td className="num bull">−0.11</td><td className="num bear">+1.39</td><td className="bear">firm · yen firmed from 162.54</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.83%</td><td className="num">+4.0bp</td><td className="num bull">−1.00</td><td className="neut">narrow</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7881</td><td className="num">−0.01</td><td className="num bull">−1.39</td><td className="neut">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">monthly (63d)</td><td className="num bear">+2.56</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>
            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.192</span> — unchanged from the
              0.192 of 07-03 and sitting{' '}
              <span className="dn-tag">well below the 0.25 idiosyncratic threshold</span>, so the
              regime line stays{' '}
              <span className="dn-signal">IDIOSYNCRATIC — BTC stays well decoupled by correlation
              from the broad cross-asset complex</span>, with its top ties a band of the
              equity / metals cluster all near +0.30–0.40: PLAT{' '}
              <span className="dn-tag">+0.394</span>, PALL{' '}
              <span className="dn-tag">+0.373</span>, SILVER{' '}
              <span className="dn-tag">+0.332</span>, URNM{' '}
              <span className="dn-tag">+0.316</span>, SP500{' '}
              <span className="dn-tag">+0.310</span>, NQ{' '}
              <span className="dn-tag">+0.307</span>, GOLD{' '}
              <span className="dn-tag">+0.303</span>, NVDA{' '}
              <span className="dn-tag">+0.303</span>, COPPER{' '}
              <span className="dn-tag">+0.284</span>, JP225{' '}
              <span className="dn-tag">+0.186</span>, TSLA{' '}
              <span className="dn-tag">+0.148</span>, with AMZN{' '}
              <span className="dn-tag">−0.147</span> and JPY{' '}
              <span className="dn-tag">−0.115</span> inverse and AAPL{' '}
              <span className="dn-tag">+0.082</span> near-zero. And the 7d performance keeps the
              BTC-vs-NQ framing constructive: BTC leads NQ/SP500 and is not a laggard —{' '}
              <span className="dn-tag bull">BTC +4.27%</span> is ahead of NQ{' '}
              <span className="dn-tag bull">+1.58%</span> by +2.69pt (it was a +3.14pt lead on
              07-03) and ahead of SP500 +1.88% by +2.39pt, though several mega-caps
              and metals sit further ahead — the leaders are the mega-caps AAPL{' '}
              <span className="dn-tag bull">+9.16%</span>, META{' '}
              <span className="dn-tag bull">+6.42%</span>, GOOGL{' '}
              <span className="dn-tag bull">+6.04%</span> and the metals SILVER{' '}
              <span className="dn-tag bull">+5.58%</span>, PALL{' '}
              <span className="dn-tag bull">+5.35%</span>, with TSLA{' '}
              <span className="dn-tag bull">+5.04%</span>, AMZN{' '}
              <span className="dn-tag bull">+4.69%</span>, MSFT{' '}
              <span className="dn-tag bull">+4.46%</span>, BTC{' '}
              <span className="dn-tag bull">+4.27%</span>, GOLD{' '}
              <span className="dn-tag bull">+2.22%</span>, SP500{' '}
              <span className="dn-tag bull">+1.88%</span>, NVDA{' '}
              <span className="dn-tag bull">+1.65%</span>, NQ{' '}
              <span className="dn-tag bull">+1.58%</span>, URNM{' '}
              <span className="dn-tag bull">+1.08%</span>, PLAT{' '}
              <span className="dn-tag bull">+0.61%</span> all green; the reds are energy and Japan
              — BRENT{' '}
              <span className="dn-tag bear">−2.54%</span>, CL{' '}
              <span className="dn-tag bear">−2.50%</span>, NGAS{' '}
              <span className="dn-tag bear">−1.85%</span>, JP225{' '}
              <span className="dn-tag bear">−0.71%</span>, JPY{' '}
              <span className="dn-tag bear">−0.25%</span>, with COPPER{' '}
              <span className="dn-tag bear">−0.15%</span> near flat.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d return +4.27% vs NQ +1.58% is a lead of +2.69pt (was +3.14pt on
                07-03) — the gap to NQ stays a clear lead across the three-session bounce, and BTC
                is no longer the laggard, though several mega-caps and metals are further ahead
                (BTC is 9th of the complex). The correlation regime holds idiosyncratic below the
                0.25 line. So the sharp risk-off / worst-performer read the earlier lineage carried
                stays fully unwound — BTC is neither statistically coupled at the threshold nor a
                laggard this cut. The macro z-panel still reads risk-off (rates tight, DXY
                EXTREME), but the cross-asset regime stays loose and BTC keeps leading NQ, so the
                two cross-market reads still diverge from the tight macro z-panel.
              </span>{' '}
              JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag — do not lean on it.
            </p>
            <h2 className="dn-sec">
              Trade book <span className="dn-roman">V · book FLAT · 200W floor — BREAK CONFIRMED on the 06-29 weekly close ($60,224.70 &lt; $62,643, −3.86%), 06-15 reclaim thesis FALSIFIED; the 07-03 up-close CARRIED the bounce to the floor (third straight up-close, reclaimed the D-EMA20/D-SMA20 pair), spot +0.01% AT the floor with a structural recovery (weekly close above $62,643) now in reach · scout price pre-condition stays TRUE and STRENGTHENS (spot +2.20% above flip, two MAs beneath) — scout STILL stood down (tape blind ~21.94 days, no confirmed engine trigger — the engine flashes TWO 4h/8h TD9 SELLs at the highs) · macro tail credit gate STILL un-fired (OAS 2.75% &lt; 2.78%) · squeeze-cycle ON HOLD (SM dead ~21.94 days)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — the structural positive of the lineage is
                resolved AGAINST it (200W break confirmed on the weekly close, reclaim thesis
                falsified), but the 07-03 up-close carried the constructive gamma/price map to
                the floor and put two MAs beneath spot for the first time in the run, and the
                binding constraint is still data integrity — with the engine now flashing TWO TD9
                SELLs at the highs
              </span>. The 06-29 weekly close settled $60,224.70, −3.86% below the $62,643
              floor — the break is CONFIRMED and the 06-15 reclaim thesis FALSIFIED, and
              nothing this cut un-does that. The 07-03 note recorded the bounce EXTENDED to a
              third session; this cut it CARRIED to the floor — the 07-03 daily close $62,565.50
              was an up-close +$1,024.90, the third straight, that reclaimed the D-EMA20 / D-SMA20
              pair (two MAs now beneath spot), and the in-progress 07-04 bar $62,646.80 sits +0.01%
              AT the floor. The dealer book deepened to +88.1M net-long-gamma, but a near-dated
              downside amplifier re-emerged (7JUL26 −8.22M), and spot pushed to +2.20% above the
              flip. The scout&rsquo;s price pre-condition stays TRUE and strengthens — spot is well
              above the flip, two MAs are beneath it, and it is AT the floor — so the price leg is
              open and improving. But the desk still takes no scout: the tape that would confirm
              demand is blind, and the engine has flipped to a trend-continuation regime but with
              TWO fresh TD9 SELLs (4h AND 8h) and top divs on 15m / 1h AT the highs — chasing the
              bounce here, into two overbought reversal prints on a blind tape, is a poor entry. No
              new short either: the book is deeply long-gamma, the flip is +2.20% reclaimed, spot
              is AT the floor with two MAs beneath, and a 1M TD9 buy still prints — a poor place to
              press short. The trade book today is: no shorts, no scout, no fresh hedge — fix the
              tape before reading whether the bounce to the floor is short-cover or demand.
            </p>
            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch — BREAK CONFIRMED: the 06-29 weekly close $60,224.70 settled −3.86% below the $62,643 floor (the weekly-close escalation FIRED), the 06-15 reclaim thesis is FALSIFIED; the 07-03 up-close CARRIED the bounce to the floor (spot +0.01% AT $62,643), reclaiming the D-EMA20/D-SMA20 pair; ten consecutive daily closes below (06-24 → 07-03)</span>
              <div className="dn-trade-name">
                200W cycle floor watch — the break is CONFIRMED on the 06-29 weekly close and the bounce has CARRIED to the floor: floor $62,643 = full-history W-SMA200 (356 completed weekly bars, unchanged this cut), 06-29 weekly close $60,224.70 (−3.86% below) confirmed the break, the 07-03 daily close $62,565.50 (an up-close +$1,024.90, the third straight) pressed spot to −0.12% below the floor, the in-progress 07-04 bar $62,646.80 is +0.01% AT the floor, the 06-15 reclaim thesis FALSIFIED
              </div>
              <div className="dn-thesis">
                The 07-03 note recorded the break confirmed on the 06-29 weekly close with the
                bounce extended to a third session. This cut the bounce carried to the floor: the
                07-03 daily bar closed{' '}
                <span className="dn-tag bull">$62,565.50, −0.12% below the $62,643 floor</span>,
                an up-close +$1,024.90 that was the third straight and reclaimed the D-EMA20 /
                D-SMA20 pair, and the in-progress 07-04 bar $62,646.80 is +0.01% AT the floor,
                testing it from below. Per the framework an intraday wick is not the break, a daily
                close below is the early warning, and a sustained weekly close below is the
                escalation that breaks the floor and falsifies the 06-15 reclaim thesis — that
                weekly close printed on 06-29, so the break stays CONFIRMED and the reclaim thesis
                FALSIFIED. The 22JUN weekly close $63,990 was the last weekly hold; it remains
                superseded.{' '}
                <span className="dn-em">The structural positive of the lineage stays resolved
                against it at the weekly-close level; but spot now holds two MAs beneath it and
                sits AT the floor — the floor, unchanged at $62,643, is being tested from below,
                and for the first time in the run a structural recovery (a sustained weekly close
                back above $62,643) is in genuine reach (the in-progress 07-06 weekly bar reads
                $62,647). The bounce is a bounce inside a confirmed break until that weekly close
                prints.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor (unchanged)</span><span className="dn-lvl-v">$62,643 = full-history W-SMA200, recomputed this cut from the 2019→ parquet glob (356 completed weekly W-MON bars, INCLUDING the resolved 06-29 week and excluding the in-progress 07-06 week); unchanged from the 07-03 note, the 06-29 week resolved four cuts ago · weekly_200sma.json absent so the ratio percentile / last-event stay unsourced, not fabricated</span></div>
                <div><span className="dn-lvl-k">break — CONFIRMED, bounce AT the floor</span><span className="dn-lvl-v bear">06-29 weekly close $60,224.70 settled −3.86% below the floor — the break is confirmed; ten consecutive daily closes below (06-24 $61,051 −2.54%, 06-25 $59,772 −4.58%, 06-26 $60,072 −4.10%, 06-27 $60,000 −4.22%, 06-28 $59,550 −4.94%, 06-29 $60,224.70 −3.86%, 06-30 $58,605.40 −6.45% the deepest, 07-01 $59,999.60 −4.22%, 07-02 $61,540.60 −1.76%, 07-03 $62,565.50 −0.12% the closest); the last three are up-closes; the in-progress 07-04 bar $62,646.80 is +0.01% AT the floor (the 07-04 daily close does not yet exist)</span></div>
                <div><span className="dn-lvl-k">reclaim thesis — FALSIFIED</span><span className="dn-lvl-v bear">the 06-15 reclaim thesis required the floor to hold on a weekly-close basis; the 06-29 weekly close below the floor falsifies it — the prior 22JUN weekly hold ($63,990) is superseded</span></div>
                <div><span className="dn-lvl-k">recovery path (now in reach)</span><span className="dn-lvl-v bull">spot is +2.20% above the flip $61,296, +0.79% above D-SMA20 $62,156, +0.70% above D-EMA20 $62,210 (two MAs beneath spot for the first time in the run), +0.01% AT the floor $62,643 — a structural recovery is a sustained weekly close back above the floor $62,643 (the level the break must un-do); the in-progress 07-06 weekly bar reads $62,647, so the recovery is in genuine reach for the first time — but a weekly close is not a scout trigger on a blind tape (see scout)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework, not a trade.</b> The floor watch is the single load-bearing
                live level while everything else is stale or framework-only. The break is
                confirmed on the weekly close, the reclaim thesis is falsified, and the bounce
                carried spot to the floor with two MAs beneath — no position is taken on the watch:
                it sets the confirmed break (06-29 weekly close $60,224.70 &lt; $62,643), the
                recovery condition (a sustained weekly close back above the floor $62,643), and the
                recovery way-stations (flip $61,296 → D-EMA20 $62,210 → D-SMA20 $62,156 → floor
                $62,643, now all beneath or at spot), and the desk will not chase a bounce long
                into a blind tape with the engine flashing two TD9 SELLs at the highs, nor press
                short a confirmed break with spot AT the floor into a deeply long-gamma book with
                the flip reclaimed and a 1M TD9 buy printed.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STILL STOOD DOWN · price pre-condition stays TRUE and STRENGTHENS (spot +2.20% above the flip, two MAs beneath, AT the floor) and the book DEEPENED net-long-gamma — the most constructive price/gamma map of the run; but tape blind ~21.94 days + no confirmed engine trigger (the engine flashes TWO 4h/8h TD9 SELLs at the highs) still bind</span>
              <div className="dn-trade-name">
                Cover-bounce scout — the flip reclaim stays TRUE (spot +2.20% above) with two MAs now beneath spot and the book deepened net-long-gamma, the price leg open and improving; the scout stays stood down on a blind tape, with the engine now flashing TWO overbought reversal prints (4h AND 8h TD9 SELL) at the highs
              </div>
              <div className="dn-thesis">
                The 06-30 note saw the scout&rsquo;s price pre-condition flip TRUE, the 07-01 note
                saw it flip back FALSE, the 07-02 → 07-03 notes saw it flip back TRUE and extend.
                This cut it stays TRUE and strengthens further: spot is{' '}
                <em>+2.20% above the flip</em> $61,296 (which stepped +$1,010), sits AT the floor,
                and now holds TWO MAs beneath it (D-SMA20 $62,156 / D-EMA20 $62,210), while the
                dealer book deepened to +88.1M net-long-gamma. So the price and gamma legs are the
                most constructive of the run. But the scout stays stood down, and this cut the
                reasons still bind: (1) the positioning legs (SM short bleed, funding posture,
                cover-flow) all require a live tape, and there is none — the desk cannot see whether
                the bounce to the floor is short-cover exhausting or demand absorbing. (2) The
                engine carries no confirmed constructive trigger — the regime flipped to
                trend-continuation but TWO fresh TD9 SELLs (4h AND 8h, overbought reversal hint)
                printed at the highs with top divs on 15m / 1h, offsetting the fast/mid golden
                crosses and the 1M TD9 buy. (3) A near-dated downside amplifier re-emerged (7JUL26
                −8.22M), a fresh short-dated pocket under the constructive aggregate.{' '}
                <span className="dn-em">A scout long on a positioning-blind tape, with no confirmed
                engine print and now TWO overbought reversal prints at the highs, is not a trade —
                the price leg is open and improving, but chasing a bounce to the floor into two 4h/8h
                TD9 SELLs on a blind tape is exactly the entry the desk stands down. The 1M TD9 buy
                and the higher-TF bottom-div cluster are real oversold hints worth recording, but
                they are offset by the 4h AND 8h TD9 SELLs at these levels.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">stood down · no entry · price pre-condition stays TRUE and strengthens (spot +2.20% above the flip, two MAs beneath, AT the floor) and the book is deeply net-long-gamma, but tape blind, engine now flashing two overbought reversals (4h AND 8h TD9 SELL); re-evaluate only after the live tape is restored AND a confirming engine print</span></div>
                <div><span className="dn-lvl-k">technical pre-condition</span><span className="dn-lvl-v bear">flip $61,296 reclaim (TRUE — spot +2.20% above) AND D-SMA20 $62,156 / D-EMA20 $62,210 reclaim (TRUE — two MAs now beneath spot) BUT floor $62,643 reclaim only AT the line (spot +0.01%, no weekly close yet) AND a confirming engine print (NOT true — 4 bull / 5 bear / 1 neutral, fast/mid golden crosses and a 1M TD9 buy offset by TWO fresh 4h/8h TD9 SELLs and top divs on 15m/1h; regime is trend-continuation but overbought at the highs)</span></div>
                <div><span className="dn-lvl-k">data pre-condition</span><span className="dn-lvl-v bear">live tape restored (currently 401.4h frozen) AND SM feed live (currently dead ~21.94 days) — both must hold before any positioning leg can be read; this is the binding block</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> no scout entry without a live positioning tape. The 1M TD9
                buy, the fast/mid golden crosses, the higher-TF bottom-div cluster and the reclaimed
                flip and MA pair do not trigger a scout while the SM / funding / flow legs are
                blind and the engine now carries TWO overbought reversal prints (4h AND 8h TD9
                SELL) at the highs — the desk does not size into a cover-bounce it cannot see being
                covered, especially one that has carried to the floor and is now met by two reversal
                signatures. The price block that lifted on 06-30, re-closed on 07-01 and re-opened
                07-02 → 07-03 stays open and improving; the operational block (tape down) and the
                engine block (no confirmed trigger, now two overbought reversals) still bind.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — credit leg STILL un-fired: HY OAS 2.75% &lt; the 2.78% gate (widened +1.0bp this cut, stays below, 3bp to fire), 10Y leg 5bp away (4.48% vs 4.53% gate); both legs hold under their triggers</span>
              <div className="dn-trade-name">
                Downside put-spread — re-grow credit gate STILL un-fired (OAS 2.75% &lt; 2.78%), the rates leg 5bp away; no hedge added (the dealer book deepened net-long-gamma, so the endogenous downside structure eased even as a near-dated amplifier re-emerged at 7JUL26)
              </div>
              <div className="dn-thesis">
                The macro re-grow gate the lineage carries — HY OAS &gt; 2.78% OR 10Y &gt;
                4.53% as the condition to re-grow a downside tail — is STILL un-fired on the
                credit leg: HY OAS{' '}
                <em>2.75%</em>, +1bp this cut and holding below the gate (it fired at 2.83% on
                06-30 and 2.80% on 07-01, then dropped under to 2.75% on 07-02 and 2.74% on 07-03 —
                this cut it holds under at 2.75%, 3bp to fire), while the 10Y held at 4.48% and
                sits 5bp away — the nearer leg. So both legs are off their triggers. The
                reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE at 4.48%. The macro tape is
                still a risk-off impulse on the z-panel (rates tight, TIPS EXTREME, dollar
                EXTREME), but a macro tail is not the right instrument for an
                endogenous-cum-idiosyncratic floor break, and the dealer book has deepened to
                net-long-gamma (even with the re-emerged 7JUL26 −8.22M near-dated pocket), so the
                aggregate endogenous downside structure eased this cut — which, with the credit gate
                un-fired, is a reason to stand the tail down, not to add it.
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
                is no tail to grow this cut; note the dealer book has deepened to net-long-gamma, so
                the aggregate endogenous downside structure eased even as a near-dated amplifier
                re-emerged at 7JUL26 — the tail stands down.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · ON HOLD — SM feed DEAD ~21.94 days, the re-stack signature cannot be read this cut</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — ON HOLD (continuation of 06-16 → 07-03): the SM feed is frozen ~526.5h, the re-stack signature cannot be read this cut
              </div>
              <div className="dn-thesis">
                The squeeze-cycle / re-stack-hostile-2 framework reads discrete SM steps
                (Δshort &gt; 0 + Δlong &lt; 0 same minute) as continuation signatures; its
                calendar prior (the BJ 13–15 cadence) was falsified on 05-31 and it has run as
                a no-prior watchlist since. It cannot be assessed today for the simplest
                reason: the SM feed is dead. long_btc / short_btc / net_btc have been constant
                since 2026-06-12 01:36Z (~526.5h), so there are no SM deltas to read. The
                06-16 note put this ON HOLD at ~94.5h, the 07-02 note at ~478.5h, the 07-03
                note at ~502.5h; it remains ON HOLD at ~526.5h.{' '}
                <span className="dn-em">No signature can print from a frozen feed; the
                framework is dark until the SM data resumes.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v bear">ON HOLD · SM feed frozen ~526.5h (since 2026-06-12 01:36Z) · no SM deltas computable</span></div>
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
              Decision conditions <span className="dn-roman">VI · LIVE TAPE OUTAGE still the operative condition (eighteenth day) · 200W floor BREAK CONFIRMED on the 06-29 weekly close ($60,224.70 &lt; $62,643, −3.86%), 06-15 reclaim thesis FALSIFIED, the 07-03 up-close CARRIED the bounce to the floor · flip EXTENDED (spot +2.20% above), book DEEPENED to +88.1M net-LONG-gamma BUT a near-dated amplifier RE-EMERGED (7JUL26 −8.22M) · scout price pre-condition stays TRUE and strengthens (two MAs beneath spot, AT the floor) but the engine flipped to trend-continuation with TWO 4h/8h TD9 SELLs at the highs · macro credit gate STILL un-fired (OAS 2.75%), regime stays IDIOSYNCRATIC as BTC LEADS NQ by +2.69pt</span>
            </h2>

            <p>
              Of the 07-03 conditions: the live tape did <em>not</em> come back — it is ~24h
              deader, now 401.4h frozen with the SM feed at ~21.94 days; the 200W floor break
              stays CONFIRMED on the 06-29 weekly close ($60,224.70, −3.86% below the $62,643
              floor) and the 06-15 reclaim thesis stays FALSIFIED; the floor is unchanged this
              cut ($62,643, the 06-29 week resolved four cuts ago); the third bounce the 07-03
              note recorded CARRIED to the floor — the 07-03 daily close $62,565.50 was an up-close
              +$1,024.90, the third straight, that reclaimed the D-EMA20 / D-SMA20 pair, and the
              in-progress 07-04 bar $62,646.80 is +0.01% AT the floor (the 07-04 daily close does
              not yet exist); the flip was EXTENDED (spot +2.20% above vs +1.90% on 07-03) as the
              flip stepped to $61,296; the dealer book DEEPENED from +60.7M to +88.1M
              net-LONG-gamma — it dampens the next move harder — BUT a near-dated downside
              amplifier RE-EMERGED (7JUL26 3.3 DTE −8.22M); the scout&rsquo;s price pre-condition
              stays TRUE and strengthens (two MAs beneath spot) but the engine flipped to
              trend-continuation with TWO fresh 4h/8h TD9 SELLs at the highs; the macro re-grow
              gate stays un-fired on the credit leg (OAS 2.75% &lt; 2.78%) while the rates leg held
              at 4.48% (5bp away); the correlation regime stayed IDIOSYNCRATIC as BTC&rsquo;s 7d
              return LED NQ by +2.69pt; the squeeze-cycle stayed ON HOLD on a deader feed. The
              dominant condition is unchanged: <em>the desk is positioning-blind, into a 200W floor
              break CONFIRMED on the weekly close, a bounce that carried spot to the floor with two
              MAs beneath it, and a book that has deepened net-long-gamma — none of which it can
              confirm against the tape, and now met by two overbought reversal prints at the
              highs</em>. The conditions today re-set around the continuing outage, the confirmed
              weekly-close break, the bounce to the floor, and the deepened net-long-gamma book:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Live tape restored (PRIMARY operational)</td><td className="bull">live_db.json resumes writing fresh rows beyond 2026-06-17 06:43Z AND the SM triple updates off its 06-12 01:36Z freeze</td><td>re-read funding / OI / flow / SM in full; only then can the scout or squeeze-cycle be evaluated — and only then can the bounce to the floor be confirmed as short-cover exhausting vs demand absorbing; the positioning dimension has now been blind sixteen notes running</td></tr>
                <tr><td>200W floor — BREAK CONFIRMED, bounce AT the floor</td><td className="bear">06-29 weekly close $60,224.70 settled −3.86% below the $62,643 floor — the break is confirmed; ten consecutive daily closes below (06-24 → 07-03), the 06-30 close $58,605.40 the deepest (−6.45%), the 07-03 close $62,565.50 the closest (−0.12%, an up-close, the third straight); in-progress 07-04 bar $62,646.80, +0.01% AT the floor</td><td>the floor break is confirmed at the weekly-close level and the bounce carried to the floor — the floor ($62,643) is being tested from below; no position taken</td></tr>
                <tr><td>200W reclaim thesis — FALSIFIED</td><td className="bear">the 06-15 reclaim thesis required a weekly-close hold of the floor; the 06-29 weekly close below falsifies it — the prior 22JUN weekly hold ($63,990) is superseded</td><td>the reclaim thesis is dead; a structural recovery now requires a sustained weekly close back above the floor $62,643 (in reach — the in-progress 07-06 weekly bar reads $62,647); watch that weekly close</td></tr>
                <tr><td>Flip reclaim (scout price pre-condition) — STRENGTHENED</td><td className="bull">spot $62,646.80 +2.20% above flip $61,296, +0.79% above D-SMA20 $62,156, +0.70% above D-EMA20 $62,210 (two MAs beneath spot for the first time in the run), +0.01% AT the floor $62,643</td><td>the price pre-condition stays TRUE and strengthens; but a scout still needs the live tape restored AND a confirming engine print — and the engine now flashes TWO 4h/8h TD9 SELLs (overbought reversal) at the highs; on a blind tape the bounce to the floor is recorded, not traded</td></tr>
                <tr><td>Dealer book — DEEPENED net-LONG-gamma, but a near-dated amplifier re-emerged</td><td className="bull">aggregate GEX +88.1M (was +60.7M on 07-03, +12.0M on 07-02); the front is 4JUL26 0.3 DTE at +19.61M (settles ~08:00Z today); BUT a near-dated downside amplifier RE-EMERGED at 7JUL26 3.3 DTE −8.22M; spot sits AT the $63k +31.62M positive ceiling and above the $60k −21.49M put wall</td><td>the dealer book now DAMPENS the next move harder in aggregate, but the re-emerged 7JUL26 −8.22M is a fresh short-dated downside pocket; watch only, no instruction (the aggregate is the most constructive of the run but the tape is blind, the engine flags two reversals at the highs, and the front is not clean)</td></tr>
                <tr><td>Macro tail re-grow (credit leg un-fired)</td><td className="bull">HY OAS 2.75% &lt; 2.78% (STILL un-fired, +1.0bp, 3bp to fire) OR 10Y &gt; 4.53% (5bp to fire, held 4.48%) — the FX legs held/firmed (DXY 100.85, USD/JPY 161.34), MOVE unavailable this cut</td><td>no hedge instruction in this note — with neither leg fired there is no tail to grow; note the book has deepened net-long-gamma in aggregate even as a near-dated amplifier re-emerged, so the endogenous downside structure eased on net</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.48%</td><td>standalone filter true; needs a BTC-internal pivot AND a live tape to translate to a scout long</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (ON HOLD)</td><td className="stale">SM feed dead ~526.5h; no deltas computable</td><td>suspended, not negative — re-arm on the first fresh SM deltas after the feed resumes</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the bounce to the floor — which closed up +$1,024.90 on 07-03 (the third
                straight up-close), reclaimed the D-EMA20 / D-SMA20 pair, deepened the book to
                +88.1M net-long-gamma and pressed spot to +2.20% above the flip and +0.01% AT the
                floor, with the 200W break already confirmed — is short-cover or demand, which only
                a restored tape can say; on the structural side, the recovery now requires a
                sustained weekly close back above the floor $62,643, which is in genuine reach for
                the first time (the in-progress 07-06 weekly bar reads $62,647)
              </span>. The dealer book that deepened to +88.1M net-LONG-gamma (spot +2.20% above the
              flip) now dampens the next move harder in aggregate — though a near-dated amplifier
              re-emerged at 7JUL26 −8.22M; the structural positive — the 200W floor — stays
              confirmed broken on the weekly close and the 06-15 reclaim thesis stays dead, but the
              bounce carried spot to the floor with two MAs beneath it, and the desk still cannot
              read the tape that would say whether it is short-cover or demand — with the engine now
              flashing TWO overbought reversal prints at the highs. Until the tape is restored this
              note runs as written: the book is flat, the scout&rsquo;s price block stays TRUE and
              strengthens but the engine turned to two 4h/8h TD9 SELLs, the macro tail credit gate
              stays un-fired below its line (OAS 2.75%), the squeeze-cycle is suspended, and the
              200W floor watch is the one live level — a floor confirmed broken on the weekly close
              with the bounce now testing it from below, the recovery condition a weekly close back
              above $62,643. Price carried to the floor and the flip extended, the book deepened
              long-gamma in aggregate, and the correlation regime stayed idiosyncratic as BTC led
              NQ — so the risk-off / worst-laggard read of the earlier lineage stays fully unwound;
              but the MTF engine flipped to trend-continuation with TWO 4h/8h TD9 SELLs at the
              highs, and macro stayed risk-off on the z-panel (rates tight, dollar EXTREME). The
              right read for the next 24h is{' '}
              <em>break-confirmed-on-the-weekly-close, bounce-carried-to-the-floor — respect the
              confirmed break, treat the deepened long-gamma map and the reclaimed MA pair as a real
              improvement the blind tape cannot confirm as demand, weigh the two fresh overbought
              reversal prints and the re-emerged near-dated amplifier, watch whether spot can build
              a weekly close back above the floor, and fix the tape before reading whether the
              bounce to the floor is short-cover or demand</em>.
            </p>
          </div>
          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> this is the <b>v2</b> note — <b>post codex hostile audit</b>. The v1
            draft went through the cross-model hostile audit (codex primary + owns the publish
            gate; ask-deepseek numeric second-audit, ref{' '}
            <code>audits/2026-07-04-desk-note.md</code>, verdict BLOCK-CRITICAL: 1 CRITICAL + 1
            MAJOR + 2 MINOR/NIT). Each finding was adjudicated (recomputed against the archived
            snapshot before acting) and applied, then grep-closed across the full EN file until
            zero stale matches remained. Findings:{' '}
            <b>DN-001 (CRITICAL — GEX wall + by-expiry strips stale/off-source):</b> replaced both
            strips from the archived <code>btc_gex.html</code> (00:01Z declared). Patterns searched:
            wall literals <code>14.90 / 13.44 / 9.80 / 8.40 / 7.90 / 6.90 / 6.60 / 5.80</code> and
            fabricated strikes <code>$55k / $50k</code>; expiry literals <code>+2.10 / −0.40 /
            +14.10 / +15.40 / +10.90(31JUL) / +3.10 / −3.10 / +0.70(25DEC) / +0.45</code>. Hits
            before: wall strip lines 580–588, expiry strip lines 606–613. Hits after: 0 (residual
            <code>+0.70</code> hits are the D-EMA20 offset, <code>+0.40</code> the NFCI z — not GEX).
            Walls now $63k +31.62 / $60k −21.49 / $64k +16.64 / $66k +13.79 / $65k +13.03 / $70k
            +12.99 / $68k +10.60 / $62.5k +8.11 / $80k +8.02 / $56k −7.73; expiries 5JUL +6.11 /
            6JUL +2.62 / 7JUL −8.22 / 10JUL +21.65 / 17JUL +20.37 / 24JUL +2.70 / 31JUL +29.21 /
            28AUG +4.51 / 25SEP −1.25 / 25DEC +1.40 / 26MAR +0.57 / 25JUN +0.52. Aggregate +88.1M,
            flip $61,296, front 4JUL +19.61M and 7JUL −8.22M kept (confirmed clean). <b>RESOLVED.</b>{' '}
            <b>DN-002 (MAJOR — MTF 4h Kumo state wrong):</b> the archived
            <code>mtf_div_latest.html</code> has 4h above cloud (↓61.8k, 4b), 8h in cloud
            (61.8k–62.6k, 1b). Patterns searched: <code>in cloud 61.4k</code> (4h table cell),
            <code>4h / 8h in cloud</code> (cloud summary), <code>4h is neutral (in cloud)</code> and
            <code>8h → 1w ... below cloud</code> (prose). Hits before: 1 / 1 / 1 / 1. Hits after: 0.
            4h cell now above ↓61.8k 4b; cloud summary now 15m/30m/1h/4h/1M above cloud, 8h in
            cloud, 12h→1w below; headline 4 bull / 5 bear / 1 neutral preserved. <b>RESOLVED.</b>{' '}
            <b>DN-003 (MINOR — Fed net liquidity delta denominator):</b> the macro panel delta
            column reads +0.053T; the note-over-note statement is a different quantity. Patterns
            searched: <code>0.000T</code>, <code>no fresh print</code>. Hits before: 1 / 3 (manifest
            line 162, prose 669, table 709). Hits after: 0. All now label the source-panel delta
            +0.053T as unchanged vs the 07-03 note. <b>RESOLVED.</b>{' '}
            <b>DN-004 (NIT — footer/pre-audit provenance timestamp):</b> the pre-audit footer
            embedded a future <code>2026-07-04T01:05:00Z</code>. Pattern searched:
            <code>01:05:00Z</code>. Hits before: 1. Hits after: 0 — footer now carries the v2
            post-audit publish time 2026-07-04T00:55:00Z. <b>RESOLVED.</b>{' '}
            <b>ask-deepseek MINOR (spot cross-block inconsistency):</b> header spot printed
            <code>$62,647</code> while the price section used the exact <code>$62,646.80</code>.
            Pattern searched: <code>$62,647</code> as spot. Hits before: 2 (header stamp line 56,
            price tag line 260). Hits after: 0 for the spot displays (both now $62,646.80); the
            remaining <code>$62,647</code> matches are the in-progress 07-06 <em>weekly bar</em>, a
            distinct quantity left intact. <b>RESOLVED.</b>{' '}
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
            atomic snapshot (2026-07-04 00:05Z) with section-level provenance disclosed in the
            manifest band above;{' '}
            <em>critically, the live derivatives tape was frozen for 401.4h at snapshot time
            (last row 2026-06-17 06:43Z) and the smart-money positioning feed has been dead
            ~21.94 days</em>, so all funding, OI, flow and positioning figures are explicitly
            last-known / stale or non-computable and flagged as such; the macro panel render is
            2026-07-03 22:16Z (~1.82h before snapshot). Price, MTF, GEX and cross-asset are
            fresh. This is the v2 note, published after the codex hostile audit; its findings have
            been adjudicated and applied (see the audit-trace block above). Levels, sizes, and conditions are
            illustrative of the desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future tape. Derivatives
            carry the risk of total loss and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The bounce carried to the floor: the 07-03 up-close ($62,565.50, +$1,024.90, the
                third straight) reclaimed the D-EMA20 / D-SMA20 pair — two MAs beneath spot for
                the first time in the run — and the in-progress 07-04 bar $62,646.80 tests the
                200W floor $62,643 from below (+0.01%); the dealer book deepened to +88.1M
                net-LONG-gamma but a near-dated amplifier re-emerged (7JUL26 −8.22M), spot pushed
                +2.20% above the flip, all read through a dead tape an eighteenth day and now met
                by TWO 4h/8h TD9 SELLs at the highs. Break confirmed. Bounce at the floor. Book
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
            v2 · 2026-07-04 00:05Z snapshot · post codex hostile audit ·
            2026-07-04T00:55:00Z · sources: live_db.json (FROZEN 401.4h) ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED · Yahoo ·
            Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
