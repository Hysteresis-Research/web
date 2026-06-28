import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-28 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-28',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-28' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260628() {
  await requireViewer('/desk/2026-06-28');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-28 · v2</span>
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
              <span className="dn-big">$60,011</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.10%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-28 00:06Z ·{' '}
              <span className="dn-em">
                LIVE-TAPE OUTAGE INTO A TWELFTH DAY — the OKX monitor has now been
                frozen 257.4h; price/MTF/GEX/cross-asset are fresh, the derivatives
                tape is still dark and the SM feed has been dead ~15.94 days. The
                structural reads of this cut: the 06-27 daily bar closed DOWN at
                $60,000.30 (−$72 vs 06-26 $60,072, a FOURTH consecutive close below the
                $62,443 floor — the 06-26 up-tick was handed back); the dealer book
                continued de-amplifying and aggregate GEX FLIPPED to net-LONG-gamma
                +5.9M (dampening) from −20.9M on 06-27; the flip eased $60,432 → $60,272
                with spot now only −0.43% below it (was −0.60%); and the imminent event
                is the 06-29 weekly close, which settles TOMORROW (Monday) — the
                in-progress 06-29 week reads −3.90% below the floor.
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
                    <b>257.4h stale</b> vs the 00:06Z snapshot anchor (was 233.4h on
                    the 06-27 note, 209.4h on 06-26 — the outage has run another ~24h
                    since the last note). Funding / OI / CVD / basis / retail /
                    taker-flow are LAST-KNOWN at 06-17 06:43Z, not current. The SM
                    sub-feed (long_btc / short_btc / net_btc) is frozen even longer —
                    constant since 2026-06-12 01:36Z (~382.5h / ~15.94 days); SM net and
                    the SM cut-fraction are <b>NON-COMPUTABLE</b> this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-28 00:01Z scan</td>
                  <td className="dn-flag">
                    fresh (~5 min before anchor) · rolling latest-file artifact,
                    archived verbatim at
                    /opt/desk-note/snapshots/2026-06-28-0006/ · in-progress bars · scan
                    spot $60,048, 24h −0.08%, 24h H/L $60,925 / $59,820, qVol $4.91B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-28 00:00Z snapshot</td>
                  <td className="dn-flag">
                    fresh (~6 min before anchor) · Deribit idx $60,203 ($192 above
                    parquet spot $60,011) · 930 instruments (−18 vs 06-27) · net GEX{' '}
                    <b>+5.9M</b> (net LONG gamma, <b>FLIPPED POSITIVE</b> from −20.9M on
                    06-27, −87.5M on 06-26) · flip $60,272 (spot −0.43% BELOW, the gap
                    narrowed from −0.60%) · the front is now 28JUN26 0.3 DTE at{' '}
                    <b>+4.33M</b> (POSITIVE, settles ~08:00Z today), the heaviest negative
                    expiry is 3JUL26 5.3 at −6.08M · spot $60,011 sits just below the $60k
                    −15.49M wall (still the heaviest, now OVERHEAD), with the $59k −10.29M
                    and $58k −12.47M walls beneath
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-28 00:00Z
                  </td>
                  <td className="dn-flag">fresh · 7d 1h bars · 22 assets · 167 rows · regime NORMAL (mean |r| 0.285, essentially unchanged from 0.288 on 06-27 — still above the 0.25 idiosyncratic threshold, BTC coupled to the broad risk complex)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-27 22:16Z render</td>
                  <td className="dn-flag">
                    ~1.83h render lag · a weekend render — most FRED Tier-1 daily series
                    are byte-identical to the 06-27 render: 10Y <b>4.40%</b> (−1.0bp, 13bp
                    from the gate), TIPS <b>2.19%</b> (−4.0bp, still EXTREME RISK-OFF), HY
                    OAS <b>2.78%</b> (+2.0bp, still AT the 2.78% re-grow gate — 0bp to
                    fire) · MOVE bond vol <b>66.8</b> (source 1d Δ +1.40, loose) · the only
                    fresh refresh this cut is the FX legs: <b>DXY 101.36</b> (−0.08 day,
                    was 101.44) and <b>USD/JPY 161.68</b> (−0.11 day, was 161.79) ticked
                    a touch · Fed net liq $5.812T (no fresh weekly print) · NFCI neutral
                    (now stale 8d) · WTI $78.9 now stale 5d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-28 00:05Z (close $60,011)</td>
                  <td className="dn-flag">
                    fresh kline (exchange OHLC, independent of the frozen live tape) ·
                    offsets recomputed vs the parquet last-bar close, the freshest
                    available spot while the live tape is frozen · the displayed weekly
                    ladder uses the 2023→ subset (183 weekly bars), so no W-SMA200 row;
                    the 200W floor is recomputed directly from the full-history glob —
                    355 completed weekly W-MON bars (2019→present), excluding the
                    in-progress 06-29 week — = <b>$62,443</b>, unchanged vs the $62,443
                    the 06-25 → 06-27 notes pinned (a slow weekly SMA, ~$250/wk). <b>Spot
                    is now −3.90% BELOW the floor (slipped from −3.80%) and every MA on
                    the matrix is still overhead — no positive offset, the fourth such cut
                    of the lineage</b> · weekly_200sma.json absent this cut, so the ratio
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
              <span className="dn-v bear">−7.24% (STALE · 06-17 06:43Z · 257.4h)</span>
              <span className="dn-src">live_db raw funding −0.006608 × 1095 = −7.24% ann (NOT ×100) · LAST-KNOWN at the 06-17 06:43Z freeze, now 257.4h stale, not a current read · byte-for-byte the same frozen row carried by the 06-19 → 06-27 notes; the last-available ann over the 24h+1m inclusive sampled window ending at the freeze (1,442 rows) was mean +0.20%, range −7.24% / +7.21%, 819 / 1,442 rows negative — a balanced, two-sided book at the point the tape died</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · vs 06-27</span>
              <span className="dn-v">tape frozen — not computable</span>
              <span className="dn-src">the live tape has not written since 06-17 06:43Z, so there is still no current funding to difference against the 06-27 note · last-known print at the freeze was −7.24% ann (shorts paying longs); the leverage gate remains un-assessable a twelfth day running</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC (−0.45%) · STALE window</span>
              <span className="dn-src">live_db oi_btc 102,945 at the 06-17 06:43Z freeze vs the start of a 24h+1m inclusive sampled window (1,442 rows) · the window ENDS at the freeze, NOT into the 00:06Z snapshot — it describes the tape up to 06-17 06:43Z and is 257.4h out of date</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` at the 06-17 06:43Z freeze (was 58.29% at the start of the 24h+1m inclusive sampled window — a +1.18pt long add into the roll-over) · last-known, 257.4h stale</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED DEAD ~382.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · this triple has been byte-for-byte constant since 2026-06-12 01:36Z (~382.5h / ~15.94 days) — it is a FROZEN value, NOT a current positioning read; carried only to mark the dead feed</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">NON-COMPUTABLE</span>
              <span className="dn-src">SM feed frozen ~15.94 days · |Δ| / prior_net cannot be computed — there is no current SM net to difference · the squeeze-cycle / re-stack framework is blind this cut, a continuation of the 06-16 → 06-27 ON-HOLD</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">44.3% / 43.37%</span>
              <span className="dn-src">GEX median IV across 930 instruments (00:00Z, fresh) vs 30D close-to-close RV 43.37% off parquet — chain richness only ~+0.93pt, thin to realised (the chain stayed near realised, was ~+0.95pt on 06-27); RV stays elevated (was 43.35% on 06-27, 24.91% on 05-31) · IV is a chain-median across 930 instruments, NOT a tradable spread</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−0.43% (below)</span>
              <span className="dn-src">flip $60,272 (was $60,432 · eased −$160) · vs parquet spot $60,011 (60,010.90 / 60,272 − 1 = −0.433%) / GEX file Deribit idx $60,203 (60,203 / 60,272 − 1 = −0.114%, file reads −0.1%) — both references BELOW the flip but the gap narrowed from −0.60% on 06-27 · net GEX +5.9M (net LONG gamma, FLIPPED POSITIVE from −20.9M) · no concentrated downside amplifier remains in the strip</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The up-close was handed back, but the book kept de-amplifying — and flipped
                positive. The 06-27 daily bar closed DOWN at $60,000.30 (−$72 under 06-26
                $60,072), a FOURTH consecutive close below the $62,443 floor that returned
                the 06-26 up-tick; yet the dealer book continued the de-amplification it
                began on 06-27 and aggregate GEX FLIPPED from −20.9M net-short-gamma to
                +5.9M net-LONG-gamma (now dampening), the flip eased $60,432 → $60,272 with
                spot now only −0.43% below it (was −0.60%), and the MTF regime classifier
                flipped BACK to 5/9 reversal / mean-reversion — all of it still read through
                a dead derivatives tape, a twelfth day running
              </span>. Spot prints{' '}
              <span className="dn-tag bear">$60,011, −0.10% on 24h</span> at the 00:05Z
              parquet bar (the MTF scan reads −0.08% on its own window), essentially flat
              against the 06-27 note spot $60,072 — the lineage&rsquo;s first up-close was
              given back and spot is pinned just at $60k. The structural positive the
              lineage carries — the 200W weekly-close hold — is at its decision point and the
              decision is now IMMINENT: the 22JUN weekly close $63,990 (+2.48% above the
              floor) still stands as the last resolved weekly print, but the daily closes
              have now walked FOUR consecutive settles below it (06-24 $61,051 −2.23%, 06-25
              $59,772 −4.28%, 06-26 $60,072 −3.80%,{' '}
              <span className="dn-tag bear">06-27 $60,000 −3.91%</span>), and the in-progress
              06-29 week reads{' '}
              <span className="dn-tag bear">$60,011, −3.90% below the floor</span> — and
              06-29 is Monday, TOMORROW, so the weekly-close escalation that resolves the
              06-15 reclaim thesis settles within the next ~24–48h. Spot holds no MA beneath
              it for the fourth cut running — D-SMA20 $62,922 (−4.63%) and the 200W floor
              $62,443 (−3.90%) are both overhead, the nearest lines on the matrix. The dealer
              book{' '}
              <span className="dn-tag bull">de-amplified further and FLIPPED to +5.9M net-LONG-gamma</span>{' '}
              as the strip cleared its concentrated downside; spot sits just below the $60k
              −15.49M wall, now overhead. MTF worsened by one to{' '}
              <span className="dn-tag bear">1 bull / 8 bear / 1 neutral</span> (was 1/7/2) —
              the 30m frame rolled off neutral and the 12h TD9 oversold hint aged out to a
              sell — but the regime classifier flipped the constructive way, from 6/9
              trend-continuation to{' '}
              <span className="dn-tag bull">5/9 reversal (mean-reversion)</span>. Macro stayed
              risk-off this cut on a weekend render: 10Y held 4.40%, HY OAS held 2.78% and is
              still AT its re-grow gate (0bp to fire), DXY held EXTREME but ticked a touch to
              101.36 (a fresh FX refresh this cut, not stale carry).{' '}
              <span className="dn-em">
                The operational fact is unchanged and still binding: the OKX monitor has now
                been frozen 257.4h (last row 2026-06-17 06:43Z), funding / OI / CVD / basis /
                retail are last-known and stale, and the SM positioning book has been dead
                ~15.94 days — SM net and the cut-fraction are non-computable. The desk cannot
                see whether the 06-27 down-close was real distribution or thin two-sided
                churn as the book flipped long-gamma. The read is on price, gamma and MTF
                alone.
              </span>{' '}
              The book stays flat: the book de-amplified to net-LONG-gamma and the flip
              reclaim narrowed to within −0.43%, the regime flipped back to mean-reversion,
              and the macro tape is no longer worsening — but the floor break extended to a
              fourth daily close, the 06-26 up-tick was handed back, there is no MA beneath
              spot, the engine carries no confirmed long trigger, and the tape is still dead —
              no scout and no short can be sized here, and the single resolving event (the
              06-29 weekly close) is now one day out.
            </p>

            <p>
              BTC prints <span className="dn-tag">$60,011</span> at the parquet last bar
              (00:05Z),{' '}
              <span className="dn-tag bear">−0.10%</span> on 24h (vs the $60,072.10 bar
              exactly 24h prior — the 06-27 00:05Z parquet bar; the MTF scan reads −0.08% on
              its own 00:01Z window — the spread is the reference window, not a data
              conflict), inside a{' '}
              <span className="dn-tag">$60,925 / $59,820</span> 24h range (per the MTF scan
              H/L). The Deribit index reads $60,203 at 00:00Z and the MTF scan spot is
              $60,048 — so the freshest spot is well-corroborated across three independent
              fresh sources (parquet kline $60,011, GEX Deribit index $60,203, MTF scan
              $60,048), even though the live_db tape that normally supplies it is frozen at
              06-17 06:43Z, 257.4h stale.{' '}
              <span className="dn-signal">The structural read has moved from a floor still
              broken on a third daily close but stabilising (the 06-26 up-close) to a floor
              broken on a FOURTH consecutive daily close with that up-tick handed back — but
              the dealer book continued de-amplifying and flipped to net-long-gamma, and the
              flip reclaim narrowed to −0.43%</span>: the 22JUN weekly close $63,990 (+2.48%
              above) is still the last resolved weekly hold, the daily closes walked down
              through the line (06-22 $63,990, 06-23 $62,697, 06-24 $61,051, 06-25 $59,772,
              06-26 $60,072) and the 06-27 close $60,000 ticked back DOWN (−$72) while still
              below. Per the framework, a daily close below is the early warning and a
              sustained weekly close below is the escalation that breaks the floor and
              falsifies the 06-15 reclaim thesis; the in-progress 06-29 week reads $60,011
              (−3.90% below) and 06-29 is a Monday — TOMORROW — so the escalation is no longer
              a distant pending and settles within ~24–48h.{' '}
              <span className="dn-em">
                The one structural positive of the lineage is broken at the daily-close level
                on four consecutive closes and is one day from the weekly-close escalation
                that resolves it; spot holds no MA beneath it, but the dealer book that
                pressed the early-week break has not only de-amplified — it has flipped to
                net-long-gamma — and the desk still cannot read the tape that would say
                whether the down-close is distribution or churn.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · LIVE TAPE FROZEN 257.4h (twelfth day) · SM book dead ~15.94 days · funding/OI/flow last-known stale · the desk cannot see whether the 06-27 down-close was distribution or thin two-sided churn as the book flipped net-long-gamma</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important source of this note — the live derivatives tape —
                is still down, a twelfth day running
              </span>. The OKX monitor has appended no row to live_db.json since{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> (t = &ldquo;06-17
              14:43&rdquo; BJ; the file mtime 06-17 06:43:08Z confirms the write stopped
              there; the process status is not archived or verified in this cut, so the note
              asserts the missing tape, not a live/hung process). That is now{' '}
              <span className="dn-tag bear">257.4h of missing tape</span> against the 00:06Z
              snapshot anchor — the 06-20 note flagged it at 65.4h, the 06-24 note at 161.4h,
              the 06-26 note at 209.4h, the 06-27 note at 233.4h, and the outage has run
              another ~24h without a write. Everything the live tape carries — funding, open
              interest, spot/futures CVD, perp basis, retail long%, taker-net, big-print
              flow, aggressor skew — is therefore{' '}
              <span className="dn-em">last-known at 06-17 06:43Z and not current</span>. The
              smart-money positioning triple (long_btc / short_btc / net_btc) has been
              byte-for-byte constant —{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> — since{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>, ~382.5h (~15.94 days).
              The 06-16 note flagged this dead feed at ~94.5h and put the squeeze-cycle ON
              HOLD; the 06-26 note carried it at ~334.5h, the 06-27 note at ~358.5h; today it
              is ~382.5h and still dead.{' '}
              <span className="dn-em">
                SM net is non-computable as a current read, and the SM cut fraction (|Δ| /
                prior_net) cannot be formed — there is no current SM net to difference. Any
                positioning claim in this note is explicitly historical, not live.
              </span>
            </p>

            <p>
              For completeness, the <em>last-available</em> tape readings — all pinned to
              the 06-17 06:43Z freeze and now 257.4h out of date, and byte-for-byte the same
              readings the 06-19 → 06-27 notes carried because it is the same frozen row —
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
                Read this as a near-sixteen-day-old fingerprint, not a signal: a two-sided
                funding book, OI bleeding, retail adding longs into the first leg of
                weakness. None of it can be carried forward to the 00:06Z snapshot — and it
                predates the entire 06-18 → 06-22 floor-hold sequence, the 06-23 → 06-25 leg
                that closed below the floor twice and accelerated under $60k, the 06-26
                up-close, AND the 06-27 down-close, so it says nothing about how positioning
                absorbed the break or whether the latest down-close was distribution or churn.
                The desk treats the positioning dimension as unknown, and the 06-27
                down-close as positioning-unconfirmed.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure <span className="dn-roman">II · price/MTF FRESH · multi-TF resonance bearish 1 bull / 8 bear / 1 neutral (WORSENED by one from 1/7/2 — 30m rolled off neutral) · 1d &amp; 1w water-down death crosses both stand, the 12h TD9 oversold hint aged out to a Sell 2 · the thin constructive set is a 4h water-down golden cross now 7 bars old (still below-water) plus 1h/1M TD8 buys (one more close each) · regime FLIPPED BACK to 5/9 reversal (mean-reversion, JT&lt;0) · spot below every MA, the whole ladder overhead, the 200W floor $62,443 broken on the fourth daily close (06-27 $60,000), spot −3.90% below</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map is fresh, worsened by one at the headline (1 bull / 8 bear / 1
                neutral, the 30m frame rolled off neutral and the 12h TD9 hint aged out to a
                sell) but the regime classifier flipped BACK the constructive way to
                reversal / mean-reversion — the only constructive engine prints are a 4h
                below-water golden cross now 7 bars old and 1h / 1M TD8 buys one close away
              </span> — the one dimension, with the dealer map, the desk can still trust
              today. The 00:01Z scan tags{' '}
              <span className="dn-tag bear">1 bull / 8 bear / 1 neutral across 10 frames</span>,
              net read <em>multi-TF resonance bearish · sell the bounce</em> — worsened from
              the 06-27 scan&rsquo;s 1/7/2 as the 30m frame stepped back to a bear count and
              the 12h flipped to a sell. The regime line reads{' '}
              <span className="dn-tag bull">5/9 reversal / mean-reversion regime (JT&lt;0) —
              bounce-favoured</span> (was 6/9 trend-continuation on 06-27), so the classifier
              flipped back from a down-trend-continuation lean to a bounce-favoured lean even
              as the frame count worsened — but the engine still carries no confirmed
              constructive trigger to act on it. The lone bull frame is the{' '}
              <span className="dn-tag">1M (above cloud)</span>; the constructive crosses are a{' '}
              <span className="dn-tag">4h water-down golden cross 7 bars ago</span> (advanced
              from 1 bar on 06-27 but still an unconfirmed below-water probe, not a TD buy)
              with no live TD9 buy — the{' '}
              <span className="dn-tag bear">12h TD9 oversold hint of 06-27 aged out without a
              bounce and the frame now reads a Sell 2</span>. The down side is heavy: the{' '}
              <span className="dn-tag bear">8h, 12h, 1d and 1w carry water-down death
              crosses</span>, with the{' '}
              <span className="dn-tag bear">1d water-down death cross now 1 bar old (DIF
              −2,317.0)</span> beneath the{' '}
              <span className="dn-tag bear">1w water-down death cross (just printed, DIF
              −5,839.0)</span>, and the lower frames (15m / 30m / 1h) have rolled to{' '}
              <span className="dn-tag bear">water-UP death crosses</span> (death crosses above
              the zero line — a fresh roll-down from the golden crosses they carried on
              06-27). Cloud: 4h→1w all below cloud, 30m in-cloud, 15m below, 1h above, 1M
              above; only the 1M holds a bull frame. The thin constructive set is the{' '}
              <span className="dn-tag bull">4h below-water golden cross (7 bars), plus 1h TD8
              and 1M TD8 buys — one more close each, and a 15m bottom (bullish-reversal)
              div</span>.{' '}
              <span className="dn-em">
                Straight read: the frame stack worsened by one and the lower frames rolled to
                death crosses, but the regime classifier flipped back to mean-reversion. The
                high frames are all on death crosses with a 1-bar-old 1d death cross beneath
                the 1w, and the 12h oversold hint that might have led a bounce aged out to a
                sell. The engine&rsquo;s only constructive prints are an unconfirmed 4h
                below-water golden cross and two one-close-away TD8 buys. There is no
                confirmed engine print to trade the bounce long; the dominant tape read is the
                twin 1d/1w death crosses, the absent MA support, and the fourth close below
                the 200W floor — softened only by the long-gamma flip and the bounce-favoured
                regime. This is a bearish trend frame whose mean-reversion setup has no
                confirmed trigger.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">60,027</td><td className="num bear">38.3</td><td className="bear">death (water-up) 28b</td><td className="bear">below ↑60.5k 10b</td><td>Sell 1</td><td>BULL reg (bottom)</td></tr>
                <tr><td>30m</td><td className="num">60,027</td><td className="num bear">40.5</td><td className="bear">death (water-up) 13b</td><td className="neut">in cloud 59.5k–60.3k 5b</td><td>Buy 5</td><td>BEAR reg (top)</td></tr>
                <tr><td>1h</td><td className="num">60,029</td><td className="num bear">44.0</td><td className="bear">death (water-up) 5b</td><td className="bull">above ↓60.0k 9b</td><td>Buy 8 → 9?</td><td>BEAR reg (top)</td></tr>
                <tr><td>4h</td><td className="num">60,035</td><td className="num bear">43.2</td><td className="bull">golden (water-dn) 7b</td><td className="bear">below ↑63.7k 29b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">60,035</td><td className="num bear">39.0</td><td className="bear">death (water-dn) 15b</td><td className="bear">below ↑64.3k 14b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">60,035</td><td className="num bear">35.3</td><td className="bear">death (water-dn) 9b</td><td className="bear">below ↑64.1k 73b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">60,041</td><td className="num bear">32.0</td><td className="bear">death (water-dn) 1b</td><td className="bear">below ↑73.2k 27b</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>3d</td><td className="num">60,048</td><td className="num bear">33.6</td><td className="neut">—</td><td className="bear">below ↑72.5k 9b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">60,048</td><td className="num bear">33.2</td><td className="bear">death (water-dn) 刚印 (just printed)</td><td className="bear">below ↑100.3k 21b</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">60,048</td><td className="num">41.3</td><td className="neut">—</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (08:01 Beijing; rolling latest
                    file, archived verbatim at
                    /opt/desk-note/snapshots/2026-06-28-0006/). Net read{' '}
                    <em>multi-TF resonance bearish · sell the bounce (1 bull / 8 bear / 1
                    neutral)</em>; regime <em>5/9 reversal / mean-reversion regime (JT&lt;0,
                    bounce-favoured)</em>; reversal divergences{' '}
                    <em>top div 30m &amp; 1h, bottom div 15m</em>. Header alerts:{' '}
                    <em>1d water-down death cross (1 bar ago, DIF −2,317.0)</em>,{' '}
                    <em>1w water-down death cross (just printed, DIF −5,839.0)</em>,{' '}
                    <em>1h TD8 Buy — one more close</em>,{' '}
                    <em>1M TD8 Buy — one more close</em>. Scan spot $60,048, 24h −0.08%, 24h
                    H/L $60,925 / $59,820, qVol $4.91B. Closes are in-progress bars; treat
                    every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is the same deep overhead wall as 06-27, and spot has slipped a
              touch further from the 200W floor, so for the fourth cut in the lineage{' '}
              <span className="dn-tag bear">every line on the matrix is overhead — there is no
              positive offset, no MA beneath spot</span>. $60,011 sits{' '}
              <span className="dn-tag bear">−3.90% below the full-history W-SMA200 200W floor
              $62,443</span> — the nearest line, still overhead (was −3.80% on 06-27) —
              and{' '}
              <span className="dn-tag bear">−4.63% below D-SMA20 $62,922</span>, the next line
              up. Above those, the cycle-proxy{' '}
              <span className="dn-tag bear">D-EMA20 $63,130 (−4.94%)</span>, then{' '}
              <span className="dn-tag bear">D-EMA50 $67,237 (−10.75%)</span>, then{' '}
              <span className="dn-tag bear">W-EMA200 $67,507 (−11.10%, seed)</span>, then a
              dense overhead band:{' '}
              <span className="dn-tag bear">D-SMA50 $69,446 (−13.59%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $70,779 (−15.21%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $70,966 (−15.44%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $71,000 (−15.48%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $71,532 (−16.11%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $73,136 (−17.95%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $73,846 (−18.74%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,026 (−18.93%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $75,657 (−20.68%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $75,684 (−20.71%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $76,683 (−21.74%)</span>. Far above and
              disused: W-EMA100 $80,553 (−25.50%), W-EMA50 $81,773 (−26.61%), W-SMA100
              $88,459 (−32.16%), W-SMA50 $89,792 (−33.17%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-28 00:05Z (close $60,010.90);
                offsets recomputed against that same last-bar close, which is the freshest
                available spot while the live tape is frozen. Displayed MA levels are
                $-rounded; offsets computed from exact series values. The displayed weekly
                ladder uses the 2023→ subset (183 weekly bars), so W-SMA200 is non-computable
                there and W-EMA200 $67,507 seeds from available history; the 200W floor
                $62,443 is recomputed separately from the full-history glob (355 completed
                weekly W-MON bars, excluding the in-progress 06-29 week). Daily closes: 06-19
                $63,513, 06-20 $64,270, 06-21 $63,287, 06-22 $63,990 (= the 22JUN weekly
                close), 06-23 $62,697, 06-24 $61,051 (first close below the floor), 06-25
                $59,772 (second close below, −4.28%), 06-26 $60,072 (third close below, first
                up-close, −3.80% below), 06-27 $60,000 (fourth close below, a DOWN-close −$72,
                −3.91% below — the 06-26 up-tick handed back), 06-28 (in-progress, 5-min bar)
                $60,011 — the floor break has extended to a fourth consecutive daily close,
                and of the last 24h 1-min closes all 1,441 printed below the floor while 1,333
                held at/above $60k (108 below).
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book FLIPPED to net-LONG-gamma aggregate +5.9M (was −20.9M on 06-27, −87.5M on 06-26) — the book now DAMPENS the next move · no concentrated downside amplifier remains, the front is 28JUN26 0.3 DTE at +4.33M (POSITIVE, settles ~08:00Z today), the heaviest negative expiry is 3JUL26 5.3 at −6.08M · the flip eased $60,432 → $60,272 and spot is now only −0.43% below it · IV held 44.3%</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book completed the de-amplification it began on 06-27 and crossed
                the line: aggregate gamma flipped from −20.9M net-short to +5.9M
                net-LONG-gamma, so the book now dampens rather than amplifies the next move,
                and the flip eased to within −0.43% of spot
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+5.9M / 1%</span> (was −20.9M on 06-27, −87.5M
              on 06-26, −73.9M on 06-25); the book has crossed from net-short-gamma to
              net-long-gamma for the first time in the recent leg — the four-night
              re-amplification of 06-23 → 06-26 first reversed on 06-27 and has now flipped
              outright positive. The 0-γ flip eased{' '}
              <span className="dn-tag">$60,432 → $60,272 (−$160)</span>, and spot $60,011
              sits <span className="dn-tag bear">−0.43% below the flip</span> on
              spot-denominated math (60,010.90 / 60,272 − 1 = −0.433%); the GEX file&rsquo;s
              own &ldquo;dist to flip&rdquo; reads −0.1% off its Deribit-index $60,203 ($192
              above parquet spot), which is <span className="dn-tag bear">−0.11%</span>
              (60,203 / 60,272 − 1 = −0.114%) — both references below the flip, but the gap to
              the flip narrowed further from −0.60% on 06-27. The wall map is put-heavy around
              spot but shallower than the early-week book:{' '}
              <span className="dn-tag bear">$60k −15.49M</span> (heaviest wall, much shallower
              than the −24.18M of 06-27 as the book de-amplified, now just ABOVE spot as the
              cluster ceiling),{' '}
              <span className="dn-tag bear">$58k −12.47M</span>,{' '}
              <span className="dn-tag bear">$59k −10.29M</span> (both just below spot),{' '}
              <span className="dn-tag bear">$56k −9.54M</span>,{' '}
              <span className="dn-tag bear">$55k −9.25M</span>,{' '}
              <span className="dn-tag bear">$50k −6.81M</span>,{' '}
              <span className="dn-tag bull">$64k +7.74M</span>,{' '}
              <span className="dn-tag bull">$63k +6.62M</span>,{' '}
              <span className="dn-tag bull">$80k +6.31M</span>,{' '}
              <span className="dn-tag bull">$65k +5.78M</span>.{' '}
              <span className="dn-em">
                The listed major walls from $55k–$60k total −57.04M and sit at and below
                spot — spot at $60,011 sits just under the $60k −15.49M wall, now a cluster
                ceiling, with the $59k −10.29M and $58k −12.47M walls beneath. Critically, the
                aggregate is now net-LONG-gamma, so the book dampens the next move rather than
                amplifying it — a materially different regime from the −87.5M short-gamma book
                of 06-26; the positive walls ($63k, $64k, $65k, $80k) sit overhead as the
                first real resistance shelf above the flip and offer no support beneath spot;
                beneath spot is a below-spot put-wall shelf — $59k −10.29M and $58k −12.47M
                directly under, with $56k −9.54M / $55k −9.25M / $50k −6.81M as lower magnets —
                none of them a proven floor.
              </span>{' '}
              By expiry there is no concentration: the front is the small 28JUN26{' '}
              <span className="dn-tag bull">0.3 DTE at +4.33M (POSITIVE, settles ~08:00Z
              today)</span>, then 29JUN26 1.3 −0.22M, 30JUN26 2.3 −1.83M, 1JUL26 3.3{' '}
              <span className="dn-tag bull">+1.37M</span>, 3JUL26 5.3{' '}
              <span className="dn-tag bear">−6.08M</span> (the heaviest negative expiry),
              10JUL26 12.3 −0.82M, 17JUL26 19.3{' '}
              <span className="dn-tag bull">+3.74M</span>, 31JUL26 33.3 −0.32M, 28AUG26 61.3{' '}
              +0.53M, 25SEP26 89.3 −5.38M, 25DEC26 180.3 −0.33M, 26MAR27 271.3 +0.36M, 25JUN27
              362.3 +0.41M. The 27JUN26 −6.03M front settled ~08:00Z yesterday and no forward
              expiry carries a 26JUN-scale chunk — the concentrated downside-amplifier risk
              that defined the 06-23 → 06-26 leg is fully cleared and the front expiry is now
              positive. (The spot-referenced aggregate +5.9M is the net GEX at spot; the
              by-expiry rows are an independent decomposition and need not sum to it.)
            </p>

            <p>
              IV median across 930 instruments is{' '}
              <span className="dn-tag">44.3%</span> (held vs 44.3% / 948 instruments on
              06-27, the chain thinned a further 18 contracts) against 30D close-to-close RV
              of{' '}
              <span className="dn-tag">43.37%</span> — chain-level richness{' '}
              <span className="dn-tag">~+0.93pt</span>, thin to realised (was ~+0.95pt on
              06-27), with RV staying elevated (43.37% today vs 43.35% on 06-27 and 24.91% on
              05-31 — the high-vol regime that started with the 06-08 → 06-18 down-leg
              persists). A chain-median across 930 instruments, <span className="dn-em">not</span>{' '}
              a tradable spread; expiry-/strike-level vega, skew and term structure remain not
              loaded; the vol read stays framework-only. RV methodology: 30D close-to-close,
              logret.std × √365 × 100 on the last 30 daily log returns (= 31 consecutive
              daily closes) anchored to parquet last bar 2026-06-28 00:05Z; underlying close
              window range $59,772 – $73,857. (For reference, the last 29 returns / 30 closes
              reads 43.90%; the 43.37% page value comes from 30 returns.) P/C ratio 0.58,
              Call OI 213,356 / Put OI 123,038 BTC.
            </p>

            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · weekend render (~1.83h), most Tier-1 daily byte-identical to 06-27 — 10Y 4.40% (13bp from the gate), TIPS 2.19% EXTREME RISK-OFF, HY OAS 2.78% (still AT its 2.78% gate — 0bp to fire), MOVE 66.8 (loose) · only the FX legs refreshed: DXY 101.36 (−0.08) and USD/JPY 161.68 (−0.11) ticked a touch, both still firm · regime still NORMAL, lag to NQ WIDENED to −2.57pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro panel render is a weekend render (~1.83h lag) with most of the
                Tier-1 daily series byte-identical to 06-27, and the read stayed risk-off —
                rates held, credit still sits exactly on its re-grow gate, and the dollar held
                EXTREME with the FX legs the only fresh refresh this cut, ticking a touch
                lower
              </span>. Dashboard render is 2026-06-27 22:16Z, ~1.83h before the snapshot. US
              10Y nominal <span className="dn-tag">4.40% (−1.0bp carried)</span>, regime z{' '}
              <span className="dn-tag bear">+1.02</span> — tight regime, RISK-OFF, 13bp from
              the 4.53% gate. 10Y TIPS real{' '}
              <span className="dn-tag">2.19% (−4.0bp carried)</span>, regime z{' '}
              <span className="dn-tag bear">+2.20</span> — still EXTREME RISK-OFF, among the
              tightest lines on the panel. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.19% (0.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag">2.20% (−1.0bp carried)</span> — inflation expectations
              soft, both episodic. HY OAS{' '}
              <span className="dn-tag bear">2.78% (+2.0bp carried)</span>, regime z{' '}
              <span className="dn-tag bull">−0.75</span> — credit still loose (RISK-ON on the
              z-regime) but the spread sits exactly AT its 2.78% re-grow gate (0bp to fire,
              needs a print above to trigger). MOVE bond vol is{' '}
              <span className="dn-tag">66.8</span> — the source tags +1.40 on its own 1d
              delta, still &ldquo;loose.&rdquo; The dollar held its EXTREME level but the FX
              legs are the one fresh refresh this cut: DXY{' '}
              <span className="dn-tag bear">101.36 (−0.08 day)</span>, regime z{' '}
              <span className="dn-tag bear">+2.77</span>, ticked down from the 101.44 of 06-27
              (a fresh refresh, not stale carry). Fed net liquidity{' '}
              <span className="dn-tag bear">$5.812T (−0.037T)</span>, regime z{' '}
              <span className="dn-tag bear">−1.16</span> — no fresh weekly print this cut.
              USD/JPY{' '}
              <span className="dn-tag">161.68 (−0.11 day)</span>, regime z +1.53 — also a
              fresh refresh, eased from 161.79; US-JP 10Y spread{' '}
              <span className="dn-tag">1.75% (−1.0bp carried)</span> narrow;
              USD/CNY <span className="dn-tag">6.7897 (−0.00)</span>; WTI{' '}
              <span className="dn-tag stale">$78.9 (now stale 5d)</span>.{' '}
              <span className="dn-em">
                Net: the macro backdrop stayed risk-off and essentially unchanged on a weekend
                render — the rates and credit legs are carried byte-for-byte from 06-27 (10Y
                4.40%, TIPS 2.19%, OAS 2.78%), only the FX legs refreshed a touch lower. The
                two re-grow legs are unchanged: the credit leg is still ON the 2.78% gate (0bp)
                while the rates leg sits 13bp away — the credit gate remains the live one. The
                reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE at 4.40% with room. The
                macro read still reinforces rather than refutes the break of the 200W floor — a
                broad risk-off backdrop with the credit gate on the line — and is neither
                worsening nor easing this cut.
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
                <tr><td>US 10Y nominal</td><td className="num">4.40%</td><td className="num">−1.0bp</td><td className="num bear">+1.02</td><td className="bear">tight · RISK-OFF · 13bp from gate</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.19%</td><td className="num">−4.0bp</td><td className="num bear">+2.20</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.19%</td><td className="num">0.0bp</td><td className="num">−0.54</td><td className="neut">soft · episodic</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.20%</td><td className="num">−1.0bp</td><td className="num">−2.04</td><td className="neut">soft · episodic</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num bear">+2.0bp</td><td className="num bull">−0.75</td><td className="bull">loose · still AT the 2.78% gate (0bp to fire)</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.516</td><td className="num">−0.00</td><td className="num">−0.07</td><td className="stale">weekly · neutral · now stale 8d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">66.8</td><td className="num bear">+1.40</td><td className="num bull">−0.81</td><td className="bull">loose</td></tr>
                <tr><td>DXY</td><td className="num">101.36</td><td className="num bull">−0.08</td><td className="num bear">+2.77</td><td className="bear">EXTREME RISK-OFF · fresh FX refresh (was 101.44)</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.812T</td><td className="num bear">−0.037T</td><td className="num bear">−1.16</td><td className="bear">drained · no fresh weekly print</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.68</td><td className="num bull">−0.11</td><td className="num bear">+1.53</td><td className="bear">firm · fresh FX refresh (was 161.79)</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.75%</td><td className="num">−1.0bp</td><td className="num bull">−1.25</td><td className="neut">narrow</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7897</td><td className="num">−0.00</td><td className="num bull">−1.43</td><td className="neut">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.285</span> — essentially unchanged
              from the 0.288 of 06-27 and still <span className="dn-tag">above the 0.25
              idiosyncratic threshold</span>, so the regime line holds at{' '}
              <span className="dn-signal">NORMAL — BTC stays coupled to the broad cross-asset
              complex</span>, with its top ties the equity / industrial-metal cluster: NQ{' '}
              <span className="dn-tag">+0.772</span>, NVDA{' '}
              <span className="dn-tag">+0.749</span>, SP500{' '}
              <span className="dn-tag">+0.687</span>, JP225{' '}
              <span className="dn-tag">+0.559</span>, TSLA{' '}
              <span className="dn-tag">+0.528</span>, COPPER{' '}
              <span className="dn-tag">+0.503</span>, URNM{' '}
              <span className="dn-tag">+0.468</span>, META{' '}
              <span className="dn-tag">+0.372</span>, AAPL{' '}
              <span className="dn-tag">+0.356</span>, PALL{' '}
              <span className="dn-tag">+0.355</span>, with CL{' '}
              <span className="dn-tag">−0.125</span> / BRENT{' '}
              <span className="dn-tag">−0.128</span> inverse and GOLD a weak{' '}
              <span className="dn-tag">+0.244</span>. 7d performance still has the broad risk
              complex red, with BTC lagging NQ by a WIDER gap than 06-27 though
              NOT the worst performer of the complex:{' '}
              <span className="dn-tag bear">BTC −6.65%</span>, NQ{' '}
              <span className="dn-tag bear">−4.08%</span>, SP500{' '}
              <span className="dn-tag bear">−1.97%</span>, JP225{' '}
              <span className="dn-tag bear">−3.67%</span>, NVDA{' '}
              <span className="dn-tag bear">−7.52%</span>, META{' '}
              <span className="dn-tag bear">−3.77%</span>, AAPL{' '}
              <span className="dn-tag bear">−4.88%</span>, MSFT{' '}
              <span className="dn-tag bear">−1.52%</span>, GOOGL{' '}
              <span className="dn-tag bear">−6.74%</span>, AMZN{' '}
              <span className="dn-tag bear">−4.13%</span>, TSLA{' '}
              <span className="dn-tag bear">−5.50%</span>; metals lower (GOLD{' '}
              <span className="dn-tag bear">−1.88%</span>, SILVER{' '}
              <span className="dn-tag bear">−9.40%</span>, PLAT{' '}
              <span className="dn-tag bear">−2.80%</span>, PALL{' '}
              <span className="dn-tag bear">−3.54%</span>, COPPER{' '}
              <span className="dn-tag bear">−3.25%</span>); crude down, NGAS positive (CL{' '}
              <span className="dn-tag bear">−8.32%</span>, BRENT{' '}
              <span className="dn-tag bear">−8.24%</span>, NGAS{' '}
              <span className="dn-tag bull">+0.48%</span>).{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d return −6.65% vs NQ −4.08% is a lag of −2.57pt (was −1.27pt on
                06-27) — the gap to NQ WIDENED again as BTC under-performed the bounce in
                equities. But BTC is NOT the deepest laggard of the complex: URNM −9.91%,
                SILVER −9.40%, CL −8.32%, BRENT −8.24% and NVDA −7.52% all fell more over 7d.
                The whole risk complex stays red over 7d (NQ −4.08%, NVDA −7.52%, the Mag7
                mostly −4% to −7%, metals down, crude down hard with NGAS the lone green), so
                BTC&rsquo;s decline remains embedded in a broad risk-off move rather than
                standing out as idiosyncratic — which is what keeps the correlation regime at
                NORMAL. The fourth close below the 200W floor still coincides with a risk-off
                macro tape (10Y tight, credit on its gate, DXY EXTREME), so the break stays as
                much a risk-off-tape event as a BTC-specific one — BTC lagged NQ but several
                names (URNM, SILVER, CL, BRENT, NVDA) fell harder.
              </span>{' '}
              JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book <span className="dn-roman">V · book FLAT · 200W floor — DAILY-CLOSE BREAK EXTENDED to a FOURTH consecutive close (06-27 $60,000 &lt; $62,443, a DOWN-close that handed back the 06-26 up-tick), weekly-close escalation IMMINENT (06-29 settles TOMORROW; in-progress reads −3.90% below) · scout STILL stood down (price block narrowed to −0.43% below the flip and the book flipped net-long-gamma, but tape blind, no MA support, no confirmed engine trigger) · macro tail credit gate ON the line (OAS 2.78%, 0bp) · squeeze-cycle ON HOLD (SM dead ~15.94 days)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — the dealer book flipped to net-long-gamma
                and the flip reclaim narrowed to −0.43%, the regime flipped back to
                mean-reversion, but the floor break extended to a fourth daily close that
                handed back the 06-26 up-tick, and the binding constraint is still data
                integrity — with the resolving weekly close now one day out
              </span>. The structural positive of the lineage stayed broken at the daily-close
              level this cut and the character hardened back down: the 06-27 daily bar closed
              $60,000.30, −3.91% below the $62,443 floor, the fourth consecutive daily close
              beneath the line and a DOWN-close (−$72 under 06-26 $60,072) that returned the
              06-26 up-tick. Per the framework that is the early warning confirmed on four
              closes, not yet the full break — the break is a sustained weekly close below,
              and the in-progress 06-29 week reads $60,011 (−3.90% below) with 06-29 falling
              on Monday, so the escalation is no longer a distant pending: it settles
              TOMORROW. The 22JUN weekly close $63,990 (+2.48% above) is still the last
              resolved weekly hold, so the 200W reclaim thesis is not yet falsified — but it
              is ~24–48h from resolution. The scout still cannot be taken even though its
              price block narrowed further and the book turned friendly: spot is now only
              −0.43% below the flip (was −0.60% on 06-27) and the dealer book flipped to
              +5.9M net-long-gamma, but spot is still below the flip with no MA beneath it,
              the positioning legs (SM short bleed, funding posture, cover-flow) all require a
              live tape and there is none for a twelfth day, and the engine carries no
              confirmed constructive trigger — only an unconfirmed 4h below-water golden cross
              and two one-close-away TD8 buys against twin 1d/1w death crosses. No new short
              either: the concentrated downside amplifier is fully cleared and the book has
              flipped net-long-gamma, so the structure that would have pressed a short is gone,
              and chasing a fourth close below the floor into a long-gamma book on a blind
              tape is a poor entry. The trade book today is: no shorts, no scout, no fresh
              hedge — fix the tape AND watch the 06-29 weekly close vs the floor, which
              settles tomorrow, before re-arming.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch — DAILY-CLOSE BREAK EXTENDED to a FOURTH close, the 06-26 up-tick HANDED BACK: the 06-27 daily close $60,000.30 settled −3.91% below the $62,443 floor (a fourth consecutive close below, a DOWN-close −$72 under 06-26 $60,072); weekly-close escalation IMMINENT (06-29 settles TOMORROW; in-progress reads $60,011, −3.90% below); the 22JUN weekly close $63,990 +2.48% above still stands as the last resolved weekly hold</span>
              <div className="dn-trade-name">
                200W cycle floor watch — the daily-close break extended to a fourth consecutive close (a down-close that handed back the 06-26 up-tick), and the weekly-close escalation is now imminent: floor $62,443 = full-history W-SMA200 (355 completed weekly bars, unchanged vs the 06-25 → 06-27 pin), 06-24 daily close $61,051 (−2.23% below), 06-25 $59,772 (−4.28% below), 06-26 $60,072 (−3.80% below, first up-close), 06-27 $60,000 (−3.91% below, down-close), in-progress 06-29 week $60,011 (−3.90% below), all 1,441 last-24h 1-min closes below the floor
              </div>
              <div className="dn-thesis">
                The 06-27 note recorded a third consecutive daily close below the floor that
                had stabilised on the first up-close. That stabilisation did not hold — it
                reversed: the 06-27 daily bar closed{' '}
                <span className="dn-tag bear">$60,000.30, −3.91% below the $62,443 floor</span>,
                a fourth consecutive daily close beneath the line and a DOWN-close (−$72 under
                06-26 $60,072) that handed the 06-26 up-tick straight back. Per the framework
                an intraday wick is not the break, a daily close below is the early warning —
                now confirmed on four consecutive closes — and a sustained weekly close below
                is the escalation that breaks the floor and falsifies the 06-15 reclaim thesis.
                The 22JUN weekly close{' '}
                <span className="dn-tag bull">$63,990, +2.48% above</span> still stands as the
                last resolved weekly hold, so the thesis is not yet dead, but the in-progress
                06-29 week reads{' '}
                <span className="dn-tag bear">$60,011, −3.90% below</span> and 06-29 is a
                Monday — so the escalation that resolves the thesis settles TOMORROW.{' '}
                <span className="dn-em">The structural positive of the lineage is broken at the
                daily-close level on four consecutive closes; spot holds no MA beneath it, and
                the 06-29 weekly close — one day out — is the single level that resolves the
                thesis.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor</span><span className="dn-lvl-v">$62,443 = full-history W-SMA200, recomputed this cut from the 2019→ parquet glob (355 completed weekly W-MON bars, excluding the in-progress 06-29 week); unchanged vs the 06-25 → 06-27 pin (slow weekly SMA, ~$250/wk) · weekly_200sma.json absent so the ratio percentile / last-event stay unsourced, not fabricated</span></div>
                <div><span className="dn-lvl-k">daily-close break — EXTENDED to a fourth close, up-tick HANDED BACK</span><span className="dn-lvl-v bear">06-24 daily close $61,051 (−2.23% below), 06-25 $59,772 (−4.28% below), 06-26 $60,072 (−3.80% below, first up-close) and 06-27 $60,000 (−3.91% below, a down-close that returned the up-tick) — four consecutive closes beneath the line; all 1,441 of the last 24h 1-min closes printed below the floor though 1,333 held at/above $60k (108 below), and the in-progress 06-28 bar holds −3.90% below</span></div>
                <div><span className="dn-lvl-k">last resolved weekly hold (still stands)</span><span className="dn-lvl-v bull">22JUN weekly close $63,990 +2.48% above the floor still stands — the 200W reclaim thesis is not yet falsified, but it is one weekly close (tomorrow) from dying</span></div>
                <div><span className="dn-lvl-k">escalation (next weekly close) — IMMINENT (settles tomorrow)</span><span className="dn-lvl-v bear">a sustained weekly close &lt; $62,443 breaks the 200W floor and falsifies the 06-15 reclaim thesis — the in-progress 06-29 week reads $60,011 (−3.90% below) and 06-29 is Monday; this is the level that resolves the thesis at the 06-29 settle, now ~24–48h out</span></div>
                <div><span className="dn-lvl-k">reclaim side (now close)</span><span className="dn-lvl-v bear">spot is −0.43% below the flip $60,272, −3.90% below the 200W floor $62,443, and −4.63% below D-SMA20 $62,922 — no MA beneath spot; the flip sits below the floor, so a reclaim is a daily close back above the flip $60,272 then the floor $62,443 then D-SMA20 $62,922 — NOT a scout trigger on a blind tape (see scout)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework, not a trade.</b> The floor watch is the single load-bearing
                live level while everything else is stale or framework-only. The daily-close
                break has extended to a fourth consecutive close and the weekly-close
                escalation settles tomorrow — no position is taken on the watch: it sets the
                confirmed early-warning level (four daily closes below), the imminent
                escalation (06-29 weekly close &lt; $62,443, tomorrow), and the reclaim ladder
                (flip $60,272 → floor $62,443 → D-SMA20 $62,922 — note the flip sits below the
                floor, so the first reclaim step is the flip then the floor then D-SMA20), and
                the desk will not pre-position short into a break the book has already flipped
                long-gamma out of nor long into a reclaim it cannot confirm, on a blind tape.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STILL STOOD DOWN · price pre-condition NARROWED FURTHER (spot only −0.43% below the flip, vs −0.60% on 06-27) and the book FLIPPED net-long-gamma, but spot still below the flip, no MA beneath spot + tape blind ~15.94 days + no confirmed engine trigger</span>
              <div className="dn-trade-name">
                Cover-bounce scout — the flip reclaim narrowed further to within −0.43% and the book flipped net-long-gamma, but the scout stays stood down on a blind tape with no MA beneath spot and no confirmed engine trigger
              </div>
              <div className="dn-thesis">
                The 06-22 note saw the scout&rsquo;s price pre-condition print briefly (spot
                reclaimed the flip), the 06-23 → 06-26 notes saw it handed back and widen, the
                06-27 note saw it narrow sharply to −0.60%. Tonight it narrowed further: spot
                is now{' '}
                <em>only −0.43% below the flip</em> $60,272 (which eased a further $160 as the
                book de-amplified), still −3.90% below the 200W floor, below D-SMA20, and
                pinned just at $60k — but there is still no MA beneath spot at all. So the
                scout is blocked on four counts. (1) The price pre-condition narrowed further
                but is not yet true — spot is still below the flip, and below the floor and
                D-SMA20. (2) The positioning legs (SM short bleed, funding posture, cover-flow)
                all require a live tape, and there is none — the desk cannot see whether the
                06-27 down-close was distribution or thin two-sided churn as the book flipped
                long-gamma. (3) The dealer book flipped to +5.9M net-long-gamma with the
                amplifier cleared, which is constructive for stability but removes the squeeze
                fuel a cover-bounce would ride. (4) The engine carries no confirmed
                constructive trigger — only an unconfirmed 4h water-down golden cross (now 7
                bars old, below water) and two one-close-away TD8 buys (1h, 1M) against twin
                1d/1w death crosses; the 12h TD9 oversold hint of 06-27 aged out to a Sell 2.{' '}
                <span className="dn-em">A scout long on a positioning-blind tape, below the flip
                and the floor with no MA beneath spot and no confirmed engine print, is not a
                trade — the only constructive counters are the narrowed flip gap, the
                net-long-gamma flip, the bounce-favoured regime, the unconfirmed 4h cross, the
                TD8 buys and the still-standing last weekly hold, and none is sufficient to
                size into without a tape and a confirmed engine trigger.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">stood down · no entry · price pre-condition narrowed further (spot −0.43% below the flip, vs −0.60% on 06-27) but still below it and below the floor, no MA beneath spot — re-evaluate only after the live tape is restored AND spot re-reclaims the flip then the floor then D-SMA20</span></div>
                <div><span className="dn-lvl-k">technical pre-condition</span><span className="dn-lvl-v bear">flip $60,272 / floor $62,443 / D-SMA20 $62,922 reclaim (NOT true — spot below all three, no MA beneath spot, though the flip is now within −0.43%) AND a confirming engine print (NOT true — 1 bull / 8 bear / 1 neutral, twin 1d/1w death crosses, only an unconfirmed 4h below-water golden cross and 1h/1M TD8 buys one close away; regime flipped back to mean-reversion)</span></div>
                <div><span className="dn-lvl-k">data pre-condition</span><span className="dn-lvl-v bear">live tape restored (currently 257.4h frozen) AND SM feed live (currently dead ~15.94 days) — both must hold before any positioning leg can be read; this is the binding block</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> no scout entry without a live positioning tape. The narrowed
                flip gap, the net-long-gamma flip, the bounce-favoured regime, the unconfirmed
                4h cross, the TD8 buys and the still-standing last weekly hold do not trigger a
                scout while the SM / funding / flow legs are blind, spot is still below the flip
                and the floor with no MA beneath it, and the engine has no confirmed trigger —
                the desk does not size into a cover-bounce it cannot see being covered. The
                price block that lifted on 06-22 and re-closed on 06-23 → 06-26 has narrowed
                further this cut but is not yet open; the operational block (tape down) and the
                engine block (no confirmed trigger) still bind.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — credit leg still ON the line: HY OAS 2.78% = the 2.78% gate (0bp to fire), 10Y leg 13bp away (4.40% vs 4.53% gate); neither has fired a close above but the credit leg is exactly at the trigger · weekend render, Tier-1 carried byte-identical</span>
              <div className="dn-trade-name">
                Downside put-spread — re-grow gate un-fired but the credit leg is still ON the line (OAS 2.78% = gate, 0bp), the rates leg 13bp away; no hedge added (the book has flipped net-long-gamma, no dealer-amplified downside to hedge into)
              </div>
              <div className="dn-thesis">
                The macro re-grow gate the lineage carries — HY OAS &gt; 2.78% OR 10Y &gt;
                4.53% as the condition to re-grow a downside tail — stays UN-FIRED on a close
                basis, with the credit leg still exactly on the line this cut: HY OAS{' '}
                <em>2.78%</em>, equal to the gate (0bp to fire, needs a print above to
                trigger), while the 10Y holds 4.40% and sits 13bp away. So the credit leg is
                at the trigger and the rates leg is well off. The reclaim-long rates filter
                (10Y &lt; 4.55%) stays TRUE at 4.40%, with room. The macro tape is still a
                genuine risk-off impulse (rates tight, credit on its gate, dollar EXTREME) but
                a weekend render with no fresh deltas to the rates / credit legs; a macro tail
                is not the right instrument for an endogenous-cum-risk-off floor break, and the
                concentrated downside risk that the dealer gamma priced has cleared and the
                book has flipped net-long-gamma, so there is no dealer-amplified downside to
                hedge into.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · gate un-fired on a close basis · HY OAS leg still ON the line (2.78% = gate, 0bp), 10Y leg 13bp away</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (next Tier-1 print)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.78%, ON the line — needs a print above) OR 10Y &gt; 4.53% close (currently 4.40%, 13bp to fire — the further leg by far)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — TRUE at 4.40%; awaits a BTC-internal pivot AND a live tape to translate</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as the levels
                drift, not backtested breakpoints. Neither leg has fired a close above — the
                credit leg is exactly on the line (0bp, needs a print above) and the rates leg
                sits 13bp away — and if either fires, a downside tail would be reassessed in a
                separate future note (trigger / invalidation / R defined there); note the
                dealer strip carries no concentrated downside amplifier and the book has
                flipped net-long-gamma, so any such tail would be a cleaner independent hedge
                rather than additive to dealer short gamma.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · ON HOLD — SM feed DEAD ~15.94 days, the re-stack signature cannot be read this cut</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — ON HOLD (continuation of 06-16 → 06-27): the SM feed is frozen ~382.5h, the re-stack signature cannot be read this cut
              </div>
              <div className="dn-thesis">
                The squeeze-cycle / re-stack-hostile-2 framework reads discrete SM steps
                (Δshort &gt; 0 + Δlong &lt; 0 same minute) as continuation signatures; its
                calendar prior (the BJ 13–15 cadence) was falsified on 05-31 and it has run as
                a no-prior watchlist since. It cannot be assessed today for the simplest
                reason: the SM feed is dead. long_btc / short_btc / net_btc have been constant
                since 2026-06-12 01:36Z (~382.5h), so there are no SM deltas to read. The
                06-16 note put this ON HOLD at ~94.5h, the 06-26 note at ~334.5h, the 06-27
                note at ~358.5h; it remains ON HOLD at ~382.5h.{' '}
                <span className="dn-em">No signature can print from a frozen feed; the
                framework is dark until the SM data resumes.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v bear">ON HOLD · SM feed frozen ~382.5h (since 2026-06-12 01:36Z) · no SM deltas computable</span></div>
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
              Decision conditions <span className="dn-roman">VI · LIVE TAPE OUTAGE still the operative condition (twelfth day) · 200W floor DAILY-CLOSE BREAK EXTENDED to a FOURTH close, the 06-26 up-tick HANDED BACK (06-27 $60,000, a down-close), weekly-close escalation IMMINENT (06-29 settles TOMORROW; reads −3.90% below) · flip reclaim NARROWED to −0.43%, book FLIPPED to +5.9M net-LONG-gamma · scout stood down (no MA support, no confirmed engine trigger) · macro credit gate ON the line (OAS 2.78%), regime still NORMAL</span>
            </h2>

            <p>
              Of the 06-27 conditions: the live tape did <em>not</em> come back — it is ~24h
              deader, now 257.4h frozen with the SM feed at ~15.94 days; the 200W floor
              daily-close break <em>extended</em> to a fourth consecutive close (06-27 $60,000,
              −3.91% below) and the 06-26 up-tick was <em>handed back</em> on a down-close, and
              the weekly-close escalation is now imminent (06-29 settles tomorrow; in-progress
              reads −3.90% below); the flip reclaim narrowed further (spot −0.43% below the flip
              vs −0.60% on 06-27) as the flip eased to $60,272; the dealer book completed its
              de-amplification and FLIPPED from −20.9M to +5.9M net-LONG-gamma — it now dampens
              the next move; the scout&rsquo;s price block narrowed further but the engine
              carries only an unconfirmed 4h below-water golden cross and one-close-away TD8
              buys; the macro re-grow gate stayed un-fired with the credit leg still exactly on
              the line (OAS 2.78%) while the rates leg sits 13bp away; the correlation regime
              held NORMAL as the whole risk complex stayed red and BTC&rsquo;s lag to NQ
              widened to −2.57pt, though BTC was not the worst performer (URNM/SILVER/CL/BRENT/NVDA
              fell more); the squeeze-cycle stayed ON HOLD on a deader feed. The dominant
              condition is unchanged: <em>the desk is positioning-blind, now into a 200W floor
              broken on four consecutive daily closes, a reclaim that has narrowed to within
              −0.43% with no MA support, and a book that has flipped net-long-gamma — all of
              which it cannot confirm</em>. The conditions today re-set around the continuing
              outage, the extended daily-close break, the imminent weekly-close escalation, and
              the net-long-gamma flip:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Live tape restored (PRIMARY operational)</td><td className="bull">live_db.json resumes writing fresh rows beyond 2026-06-17 06:43Z AND the SM triple updates off its 06-12 01:36Z freeze</td><td>re-read funding / OI / flow / SM in full; only then can the scout or squeeze-cycle be evaluated — and only then can the 06-27 down-close be confirmed as distribution vs churn; the positioning dimension has now been blind ten notes running</td></tr>
                <tr><td>200W floor — DAILY-CLOSE BREAK EXTENDED, up-tick HANDED BACK</td><td className="bear">06-24 $61,051 (−2.23%), 06-25 $59,772 (−4.28%), 06-26 $60,072 (−3.80%, first up-close) and 06-27 $60,000 (−3.91%, a down-close) — four consecutive closes below the $62,443 floor; 1,333 of the last-24h 1-min closes held at/above $60k; in-progress 06-28 bar $60,011, −3.90% below</td><td>the daily-close break has extended to a fourth consecutive close and the up-tick was handed back — the floor is still overhead, the slow level still resistance; no position taken</td></tr>
                <tr><td>200W floor — escalation (next weekly close) IMMINENT</td><td className="bear">a sustained weekly close &lt; $62,443 (W-SMA200 floor) breaks the floor; the 22JUN weekly close $63,990 +2.48% above still stands, the in-progress 06-29 week reads $60,011 −3.90% below and 06-29 is Monday</td><td>the 06-29 weekly close is the single level that resolves the 06-15 reclaim thesis — a close below escalates the break and falsifies the thesis; it settles TOMORROW; watch the 06-29 settle closely</td></tr>
                <tr><td>Flip reclaim (scout price pre-condition) — NARROWED to −0.43%</td><td className="bear">spot $60,011 −0.43% below flip $60,272, −3.90% below the floor $62,443, −4.63% below D-SMA20 $62,922; no MA beneath spot; the flip sits below the floor, so re-reclaim is a daily close back above the flip then the floor then D-SMA20</td><td>the price pre-condition narrowed further but spot is still below $60k-adjacent on the flip — re-reclaim of the flip then the floor then D-SMA20 is the first step that re-opens scout evaluation, but only IF the live tape is also restored; on a blind tape below the flip the reclaim is watched, not traded</td></tr>
                <tr><td>Dealer book — FLIPPED net-LONG-gamma</td><td className="bull">aggregate GEX +5.9M (was −20.9M on 06-27, −87.5M on 06-26); the front is 28JUN26 0.3 DTE at +4.33M (positive, settles ~08:00Z today); the heaviest negative expiry is 3JUL26 5.3 at −6.08M; spot sits below the $60k −15.49M wall with the $59k −10.29M and $58k −12.47M walls beneath</td><td>the dealer book now DAMPENS the next move — the concentrated downside risk is fully cleared and no forward chunk replaces it; watch only, no short instruction (the amplifier that would have pressed a short has cleared and the book is long-gamma)</td></tr>
                <tr><td>Macro tail re-grow (credit leg ON the line)</td><td className="bear">HY OAS &gt; 2.78% (currently 2.78%, ON the line, 0bp — needs a print above) OR 10Y &gt; 4.53% (13bp to fire) — weekend render, rates/credit carried byte-identical; only the FX legs refreshed (DXY 101.36, USD/JPY 161.68)</td><td>no hedge instruction in this note — a gate fire (OAS is on the line) would be reassessed in a separate future note; note the book has flipped net-long-gamma, so any such tail would be a cleaner independent hedge</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.40%</td><td>standalone filter true with room; needs a BTC-internal pivot AND a live tape to translate to a scout long</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (ON HOLD)</td><td className="stale">SM feed dead ~382.5h; no deltas computable</td><td>suspended, not negative — re-arm on the first fresh SM deltas after the feed resumes</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the 06-29 weekly close — which settles TOMORROW — confirms the break
                by settling below the $62,443 200W floor (the daily-close break has now
                extended to four consecutive closes, 06-24 $61,051, 06-25 $59,772, 06-26
                $60,072, 06-27 $60,000, and the in-progress 06-29 week reads −3.90% below) or
                whether spot can claw a daily close back above the floor before the 06-29
                settle and keep the 06-15 reclaim thesis alive; on the constructive side, a
                daily close back above the flip $60,272 (now only −0.43% away) then the floor
                $62,443 then D-SMA20 $62,922 — which the desk still cannot scout on a blind
                tape — would re-open the case
              </span>. The dealer book that pressed the early-week break has not only
              de-amplified but flipped outright (aggregate −20.9M → +5.9M net-LONG-gamma as
              the strip cleared its concentrated downside, spot from −0.60% below the flip to
              −0.43% below it), so the book now dampens the next move; the structural positive
              — the 200W floor — is broken at the daily-close level on four consecutive closes
              and is one day from the weekly-close escalation that resolves it, and the desk
              still cannot read the tape that would say whether the down-close is distribution
              or churn. Until the tape is restored this note runs as written: the book is flat,
              the scout&rsquo;s price block narrowed further but the engine has only an
              unconfirmed 4h cross and TD8 buys one close away, the macro tail credit gate is
              on the line (OAS 2.78%), the squeeze-cycle is suspended, and the 200W floor watch
              is the one live level — now a floor broken on four daily closes, with the
              weekly-close escalation settling tomorrow. Price stayed pinned at $60k and MTF
              worsened by one at the headline, but the dealer book flipped net-long-gamma, the
              flip reclaim narrowed to −0.43%, and the regime flipped back to mean-reversion;
              macro stayed risk-off (rates tight, credit on its gate, dollar EXTREME) on a
              weekend render and the correlation regime held NORMAL as the whole complex stayed
              red with BTC lagging NQ but not the worst performer (URNM/SILVER/CL/BRENT/NVDA
              fell more), so the break is still as much a risk-off-tape
              event as a BTC-specific one — but the long-gamma flip is the first sign the
              dealer structure has turned dampening. The right read for the next 24h is{' '}
              <em>floor-broken-on-four-daily-closes, escalation-settles-tomorrow — respect the
              extended break, watch the 06-29 weekly close vs the floor now that it is one day
              out and the book has flipped long-gamma, fix the tape before reading positioning,
              and do not scout a reclaim that has narrowed to −0.43% but not yet cleared the
              flip on a blind tape</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> this is the <b>v2</b> note — <b>post codex hostile audit</b>. STAGE B
            ran the codex cross-model hostile audit (verdict BLOCK-CRITICAL: 1 CRITICAL + 1
            MAJOR + 1 MINOR) plus an ask-deepseek numeric second-audit; the record is{' '}
            <code>audits/2026-06-28-desk-note.md</code>. STAGE C adjudicated every finding by
            recompute against the pinned snapshot, applied fixes file-wide, and ran grep-closure
            to zero stale matches before promoting v1 → v2. Per finding (pattern searched —
            hits before — hits after):{' '}
            <b>DN-001 (CRITICAL — BTC falsely called the &ldquo;deepest laggard&rdquo;):</b>{' '}
            searched <code>laggard</code> / <code>deepest</code> / &ldquo;BTC the laggard&rdquo;
            — 4 stale hits before (the cross-asset paragraph, the cross-asset dn-em summary, and
            two decision-summary lines) — 0 stale hits after (the lone remaining
            <code>laggard</code> match is the corrected negation &ldquo;BTC is NOT the deepest
            laggard&rdquo;). Source <code>cross_asset_correlation_summary.md</code> confirms BTC
            −6.65% lagged NQ −4.08% by −2.57pt but was NOT the worst 7d performer: URNM −9.91%,
            SILVER −9.40%, CL −8.32%, BRENT −8.24% and NVDA −7.52% all fell more.{' '}
            <b>RESOLVED.</b>{' '}
            <b>DN-002 (MAJOR — dealer map claimed &ldquo;the only structure below is the $58k
            put wall&rdquo; after listing several below-spot walls):</b> searched &ldquo;only
            structure below&rdquo; / &ldquo;$58k put wall&rdquo; exclusivity — 1 stale hit
            before — 0 after; reframed as a below-spot put-wall shelf ($59k −10.29M / $58k
            −12.47M directly under, $56k −9.54M / $55k −9.25M / $50k −6.81M lower magnets, none a
            proven floor). <b>RESOLVED.</b>{' '}
            <b>DN-003 (MINOR — MTF table repeated scan spot $60,048 as every timeframe close):</b>{' '}
            searched the table close column <code>60,048</code> — 10 rows before (7 stale: 15m
            through 1d) — 3 after (only 3d/1w/1M, which the source confirms are $60,048);
            populated per-TF closes from the pinned MTF table (15m/30m $60,027, 1h $60,029,
            4h/8h/12h $60,035, 1d $60,041). <b>RESOLVED.</b>{' '}
            <b>ask-deepseek second-audit (adjudicated by recompute):</b> the DXY and USD/JPY
            day-deltas were corrected to match the displayed note-over-note levels — DXY 101.36
            vs 101.44 = −0.08 (was −0.07, 4 hits → 0), USD/JPY 161.68 vs 161.79 = −0.11 (was
            −0.12, 4 hits → 0). The flagged expiry-strip-sum &ldquo;CRITICAL&rdquo; (by-expiry
            rows sum to −4.24M vs net GEX +5.9M) was adjudicated REJECTED: the +5.9M is the GEX
            source file&rsquo;s own stated total (codex confirmed clean) and the page already
            discloses that the spot-referenced aggregate and the by-expiry decomposition measure
            different things and need not sum — no change made. The 06-27 close $60,000.30 vs
            $60,000 flag was adjudicated REJECTED: $60,000 is the consistent whole-dollar
            rounding of $60,000.30 (the precise value is shown in prose where the −$72 delta
            matters). Overall: <b>post codex hostile audit</b>, all CRITICAL + MAJOR + MINOR
            findings RESOLVED with grep-closure verified at zero stale matches. The numbers
            carried above are the STAGE A atomic-snapshot reads (parquet last bar 2026-06-28
            00:05Z, close $60,010.90; MTF / GEX / cross-asset 00:00–00:01Z; macro render
            2026-06-27 22:16Z; live tape FROZEN at 2026-06-17 06:43Z, 257.4h; SM feed dead since
            2026-06-12 01:36Z, ~15.94 days), archived at{' '}
            <code>/opt/desk-note/snapshots/2026-06-28-0006/</code> for the auditor to re-check
            the same bytes.{' '}
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
            atomic snapshot (2026-06-28 00:06Z) with section-level provenance disclosed in the
            manifest band above;{' '}
            <em>critically, the live derivatives tape was frozen for 257.4h at snapshot time
            (last row 2026-06-17 06:43Z) and the smart-money positioning feed has been dead
            ~15.94 days</em>, so all funding, OI, flow and positioning figures are explicitly
            last-known / stale or non-computable and flagged as such; the macro panel render is
            2026-06-27 22:16Z (~1.83h before snapshot), a weekend render whose rates / credit
            Tier-1 series are byte-identical to 06-27 with only the FX legs refreshed. Price,
            MTF, GEX and cross-asset are fresh. This is the v2 note, post the STAGE B codex
            hostile audit — findings adjudicated and applied. Levels, sizes, and conditions are illustrative of
            the desk&rsquo;s process, not standing recommendations. Past correlation, gamma,
            and positioning patterns do not bind future tape. Derivatives carry the risk of
            total loss and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The up-tick was handed back: the 200W floor stayed broken on a fourth daily
                close (06-27 $60,000, a down-close that returned the 06-26 up-tick), but the
                dealer book flipped to +5.9M net-LONG-gamma and the flip reclaim narrowed to
                −0.43% — all read through a dead tape a twelfth day. Floor broke four times.
                Book flipped long-gamma. Weekly close settles tomorrow. Blind.
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
            v2 · 2026-06-28 00:06Z snapshot · post codex hostile audit ·
            sources: live_db.json (FROZEN 257.4h) · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
