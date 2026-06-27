import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-27 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-27',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-27' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260627() {
  await requireViewer('/desk/2026-06-27');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-27 · v2</span>
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
              <span className="dn-big">$60,072</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.39%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-27 00:06Z ·{' '}
              <span className="dn-em">
                LIVE-TAPE OUTAGE INTO AN ELEVENTH DAY — the OKX monitor has now been
                frozen 233.4h; price/MTF/GEX/cross-asset are fresh, the derivatives
                tape is still dark and the SM feed has been dead ~14.94 days. The
                structural event of this cut: the 26JUN26 monthly −74.71M amplifier
                SETTLED yesterday (~08:00Z) and the dealer book DE-AMPLIFIED hard
                −87.5M → −20.9M; the 06-26 daily bar closed UP at $60,072 (+$300 vs
                06-25 $59,772, a third consecutive close below the $62,443 floor but
                stabilised back above $60k); the flip dropped $62,074 → $60,432 with
                spot now only −0.60% below it (was −3.57%).
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
                    <b>233.4h stale</b> vs the 00:06Z snapshot anchor (was 209.4h on
                    the 06-26 note, 185.4h on 06-25 — the outage has run another ~24h
                    since the last note). Funding / OI / CVD / basis / retail /
                    taker-flow are LAST-KNOWN at 06-17 06:43Z, not current. The SM
                    sub-feed (long_btc / short_btc / net_btc) is frozen even longer —
                    constant since 2026-06-12 01:36Z (~358.5h / ~14.94 days); SM net and
                    the SM cut-fraction are <b>NON-COMPUTABLE</b> this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-27 00:01Z scan</td>
                  <td className="dn-flag">
                    fresh (~5 min before anchor) · rolling latest-file artifact,
                    archived verbatim at
                    /opt/desk-note/snapshots/2026-06-27-0005/ · in-progress bars · scan
                    spot $60,093, 24h +0.54%, 24h H/L $60,734 / $58,288, qVol $16.83B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-27 00:01Z snapshot</td>
                  <td className="dn-flag">
                    fresh (~5 min before anchor) · Deribit idx $60,288 ($216 above
                    parquet spot $60,072) · 948 instruments (−90 vs 06-26) · net GEX{' '}
                    <b>−20.9M</b> (net SHORT gamma, <b>DE-AMPLIFIED</b> from −87.5M on
                    06-26, −73.9M on 06-25) · flip $60,432 (spot −0.60% BELOW, the gap
                    collapsed from −3.57%) · the dominant 26JUN26 monthly −74.71M
                    amplifier <b>SETTLED yesterday (~08:00Z, 06-26)</b>, so the
                    concentrated downside chunk is GONE — the front is now 27JUN26
                    0.3 DTE at only −6.03M · spot $60,072 sits just below the $60k
                    −24.18M wall (still the heaviest, now OVERHEAD), with the $59k
                    −9.82M and $58k −12.88M walls beneath
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-27 00:01Z
                  </td>
                  <td className="dn-flag">fresh · 7d 1h bars · 22 assets · 166 rows · regime NORMAL (mean |r| 0.288, essentially unchanged from 0.287 on 06-26 — still above the 0.25 idiosyncratic threshold, BTC coupled to the broad risk complex)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-26 22:16Z render</td>
                  <td className="dn-flag">
                    ~1.85h render lag · the FRED Tier-1 daily series printed small fresh
                    deltas this cut: 10Y 4.41% → <b>4.40%</b>{' '}
                    (−1.0bp, eased a touch further — now 13bp from the gate), TIPS 2.23%
                    → <b>2.19%</b> (−4.0bp, still EXTREME RISK-OFF), HY OAS 2.76% →{' '}
                    <b>2.78%</b> (+2.0bp, now AT the 2.78% re-grow gate — 0bp to fire) ·
                    MOVE bond vol <b>66.8</b> (source 1d Δ +1.40, but down 2.3 vs the
                    06-26 note&rsquo;s 69.1 print, loose) ·{' '}
                    <b>DXY 101.44 and USD/JPY 161.79 are byte-identical to the 06-26
                    render</b> (likely STALE weekend carry — flagged, not refreshed) ·
                    Fed net liq $5.812T (no fresh weekly print) · NFCI neutral (weekly) ·
                    WTI $78.9 now stale 4d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-27 00:05Z (close $60,072)</td>
                  <td className="dn-flag">
                    fresh kline (exchange OHLC, independent of the frozen live tape) ·
                    offsets recomputed vs the parquet last-bar close, the freshest
                    available spot while the live tape is frozen · the displayed weekly
                    ladder uses the 2023→ subset (183 weekly bars), so no W-SMA200 row;
                    the 200W floor is recomputed directly from the full-history glob —
                    355 completed weekly W-MON bars (2019→present), excluding the
                    in-progress 06-29 week — = <b>$62,443</b>, unchanged vs the $62,443
                    the 06-25 / 06-26 notes pinned (a slow weekly SMA, ~$250/wk). <b>Spot
                    is now −3.80% BELOW the floor (narrowed from −4.14%) and every MA on
                    the matrix is still overhead — no positive offset, the third such cut
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
              <span className="dn-v bear">−7.24% (STALE · 06-17 06:43Z · 233.4h)</span>
              <span className="dn-src">live_db raw funding −0.006608 × 1095 = −7.24% ann (NOT ×100) · LAST-KNOWN at the 06-17 06:43Z freeze, now 233.4h stale, not a current read · byte-for-byte the same frozen row carried by the 06-19 → 06-26 notes; the last-available ann over the 24h+1m inclusive sampled window ending at the freeze (1,442 rows) was mean +0.20%, range −7.24% / +7.21%, 819 / 1,442 rows negative — a balanced, two-sided book at the point the tape died</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · vs 06-26</span>
              <span className="dn-v">tape frozen — not computable</span>
              <span className="dn-src">the live tape has not written since 06-17 06:43Z, so there is still no current funding to difference against the 06-26 note · last-known print at the freeze was −7.24% ann (shorts paying longs); the leverage gate remains un-assessable an eleventh day running</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC (−0.45%) · STALE window</span>
              <span className="dn-src">live_db oi_btc 102,945 at the 06-17 06:43Z freeze vs the start of a 24h+1m inclusive sampled window (1,442 rows) · the window ENDS at the freeze, NOT into the 00:06Z snapshot — it describes the tape up to 06-17 06:43Z and is 233.4h out of date</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` at the 06-17 06:43Z freeze (was 58.29% at the start of the 24h+1m inclusive sampled window — a +1.18pt long add into the roll-over) · last-known, 233.4h stale</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED DEAD ~358.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · this triple has been byte-for-byte constant since 2026-06-12 01:36Z (~358.5h / ~14.94 days) — it is a FROZEN value, NOT a current positioning read; carried only to mark the dead feed</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">NON-COMPUTABLE</span>
              <span className="dn-src">SM feed frozen ~14.94 days · |Δ| / prior_net cannot be computed — there is no current SM net to difference · the squeeze-cycle / re-stack framework is blind this cut, a continuation of the 06-16 → 06-26 ON-HOLD</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">44.3% / 43.35%</span>
              <span className="dn-src">GEX median IV across 948 instruments (00:01Z, fresh) vs 30D close-to-close RV 43.35% off parquet — chain richness only ~+0.95pt, thin to realised (was ~+4.2pt on 06-26 as IV eased 47.4% → 44.3%); RV stays elevated (was 43.20% on 06-26, 24.91% on 05-31) · IV is a chain-median across 948 instruments, NOT a tradable spread</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−0.60% (below)</span>
              <span className="dn-src">flip $60,432 (was $62,074 · dropped −$1,642 as the 26JUN monthly settled) · vs parquet spot $60,072 (60,072.10 / 60,432 − 1 = −0.596%) / GEX file Deribit idx $60,288 (60,288 / 60,432 − 1 = −0.238%, file reads −0.2%) — both references BELOW the flip but the gap collapsed from −3.57% on 06-26 · net GEX −20.9M (net SHORT gamma, DE-AMPLIFIED from −87.5M) · the 26JUN26 monthly −74.71M amplifier settled yesterday, the concentrated downside chunk is gone</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The amplifier settled and the book de-amplified hard. The 26JUN26 monthly
                −74.71M chunk that the 06-26 note flagged as the concentrated downside risk
                settled yesterday ~08:00Z, and the dealer book collapsed from −87.5M to −20.9M
                net-short-gamma; the 06-26 daily bar then closed UP at $60,072 (+$300 over
                06-25 $59,772 — a third consecutive close below the $62,443 floor but stabilised
                back above $60k); the flip dropped $62,074 → $60,432 with spot now only −0.60%
                below it (was −3.57%); and MTF eased to 1 bull / 7 bear / 2 neutral — all of it
                still read through a dead derivatives tape, an eleventh day running
              </span>. Spot prints{' '}
              <span className="dn-tag bull">$60,072, +0.39% on 24h</span> at the 00:05Z
              parquet bar (the MTF scan reads +0.54% on its own window), up from the
              06-26 note spot $59,857 — the first up-close of the lineage since the floor
              broke, with the move below $60k partly clawed back. The structural positive the
              lineage carries — the 200W weekly-close hold — remains at its decision point: the
              22JUN weekly close $63,990 (+2.48% above the floor) still stands as the last
              resolved weekly print, but the daily closes have now walked three consecutive
              settles below it (06-24 $61,051 −2.23%, 06-25 $59,772 −4.28%,{' '}
              <span className="dn-tag bear">06-26 $60,072 −3.80%</span>), and the in-progress
              06-29 week reads{' '}
              <span className="dn-tag bear">$60,072, −3.80% below the floor</span> (improved
              from −4.14% on 06-26), so the weekly-close escalation is still pending into the
              06-29 settle, no longer deteriorating but not yet reversed. Spot holds no MA
              beneath it for the third cut running — D-SMA20 $63,078 (−4.76%) and the 200W floor
              $62,443 (−3.80%) are both overhead, the nearest lines on the matrix. The dealer
              book{' '}
              <span className="dn-tag bull">de-amplified −87.5M → −20.9M net-short-gamma</span>{' '}
              as the 26JUN26 monthly settled and the front rolled to{' '}
              <span className="dn-tag">27JUN26 0.3 DTE at only −6.03M</span>; spot reclaimed back
              toward the $60k −24.18M wall, now just overhead. MTF eased to{' '}
              <span className="dn-tag bear">1 bull / 7 bear / 2 neutral</span> (was 1/9/0) — the
              15m and 30m frames rolled to neutral and a 12h TD9 buy printed (oversold hint) —
              but the regime classifier FLIPPED the wrong way, from 5/9 reversal
              (mean-reversion) to{' '}
              <span className="dn-tag bear">6/9 trend-continuation</span> (down). Macro stayed
              risk-off this cut: 10Y eased a touch to 4.40%, HY OAS widened 2bp to 2.78% and is
              now AT its re-grow gate (0bp to fire), DXY held EXTREME but is byte-identical to
              06-26 (likely stale weekend carry).{' '}
              <span className="dn-em">
                The operational fact is unchanged and still binding: the OKX monitor has now
                been frozen 233.4h (last row 2026-06-17 06:43Z), funding / OI / CVD / basis /
                retail are last-known and stale, and the SM positioning book has been dead
                ~14.94 days — SM net and the cut-fraction are non-computable. The desk cannot
                see whether yesterday&rsquo;s up-close was real demand or thin short-covering as
                the monthly settled. The read is on price, gamma and MTF alone.
              </span>{' '}
              The book stays flat: the amplifier settled and the book de-amplified, the flip
              reclaim collapsed to within −0.60%, and spot printed its first up-close above $60k
              — but the floor break has extended to a third daily close, the weekly-close
              escalation has not confirmed either way, there is no MA beneath spot, the regime
              flipped to trend-continuation down, the engine carries no confirmed long trigger,
              and the tape is still dead — no scout and no short can be sized here.
            </p>

            <p>
              BTC prints <span className="dn-tag">$60,072</span> at the parquet last bar
              (00:05Z),{' '}
              <span className="dn-tag bull">+0.39%</span> on 24h (vs the $59,839.5 bar exactly
              24h prior — the 06-26 00:05Z parquet bar; the MTF scan reads +0.54% on its own
              00:01Z window — the spread is the reference window, not a data conflict), inside a{' '}
              <span className="dn-tag">$60,734 / $58,288</span> 24h range (per the MTF scan
              H/L). The Deribit index reads $60,288 at 00:01Z and the MTF scan spot is
              $60,093 — so the freshest spot is well-corroborated across three independent
              fresh sources (parquet kline $60,072, GEX Deribit index $60,288, MTF scan
              $60,093), even though the live_db tape that normally supplies it is frozen at
              06-17 06:43Z, 233.4h stale.{' '}
              <span className="dn-signal">The structural read has moved from a floor broken on
              two consecutive daily closes accelerating below $60k to a floor still broken on a
              third daily close but stabilising — an up-close back above $60k, the amplifier
              settled, the flip reclaim within −0.60%</span>: the 22JUN weekly close $63,990
              (+2.48% above) is still the last resolved weekly hold, the daily closes walked
              down through the line (06-22 $63,990, 06-23 $62,697, 06-24 $61,051, 06-25 $59,772)
              and the 06-26 close $60,072 is the first to tick back up while still below. Per
              the framework, a daily close below is the early warning and a sustained weekly
              close below is the escalation that breaks the floor and falsifies the 06-15
              reclaim thesis; the in-progress 06-29 week reads $60,072 (−3.80% below), so the
              escalation is pending the 06-29 settle and has stopped deteriorating, not yet
              reversed.{' '}
              <span className="dn-em">
                The one structural positive of the lineage is broken at the daily-close level on
                three consecutive closes and pending escalation at the weekly close; spot holds
                no MA beneath it, but the dealer amplifier that pressed the break has settled and
                the book de-amplified, and the desk still cannot read the tape that would say
                whether the up-close is demand or thin covering.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · LIVE TAPE FROZEN 233.4h (eleventh day) · SM book dead ~14.94 days · funding/OI/flow last-known stale · the desk cannot see whether the up-close above $60k was demand or thin covering as the monthly settled</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important source of this note — the live derivatives tape —
                is still down, an eleventh day running
              </span>. The OKX monitor has appended no row to live_db.json since{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> (t = &ldquo;06-17
              14:43&rdquo; BJ; the file mtime 06-17 06:43:08Z confirms the write stopped
              there; the process status is not archived or verified in this cut, so the note
              asserts the missing tape, not a live/hung process). That is now{' '}
              <span className="dn-tag bear">233.4h of missing tape</span> against the 00:06Z
              snapshot anchor — the 06-20 note flagged it at 65.4h, the 06-24 note at 161.4h,
              the 06-25 note at 185.4h, the 06-26 note at 209.4h, and the outage has run another
              ~24h without a write. Everything the live tape carries — funding, open interest,
              spot/futures CVD, perp basis, retail long%, taker-net, big-print flow, aggressor
              skew — is therefore{' '}
              <span className="dn-em">last-known at 06-17 06:43Z and not current</span>. The
              smart-money positioning triple (long_btc / short_btc / net_btc) has been
              byte-for-byte constant —{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> — since{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>, ~358.5h (~14.94 days).
              The 06-16 note flagged this dead feed at ~94.5h and put the squeeze-cycle ON
              HOLD; the 06-25 note carried it at ~310.5h, the 06-26 note at ~334.5h; today it
              is ~358.5h and still dead.{' '}
              <span className="dn-em">
                SM net is non-computable as a current read, and the SM cut fraction (|Δ| /
                prior_net) cannot be formed — there is no current SM net to difference. Any
                positioning claim in this note is explicitly historical, not live.
              </span>
            </p>

            <p>
              For completeness, the <em>last-available</em> tape readings — all pinned to
              the 06-17 06:43Z freeze and now 233.4h out of date, and byte-for-byte the same
              readings the 06-19 → 06-26 notes carried because it is the same frozen row —
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
                Read this as a near-fifteen-day-old fingerprint, not a signal: a two-sided
                funding book, OI bleeding, retail adding longs into the first leg of
                weakness. None of it can be carried forward to the 00:06Z snapshot — and it
                predates the entire 06-18 → 06-22 floor-hold sequence, the 06-23 → 06-25 leg
                that closed below the floor twice and accelerated under $60k, AND the 06-26
                up-close and monthly settle, so it says nothing about how positioning absorbed
                the break or whether yesterday&rsquo;s bounce was real. The desk treats the
                positioning dimension as unknown, and the up-close as positioning-unconfirmed.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure <span className="dn-roman">II · price/MTF FRESH · multi-TF resonance bearish 1 bull / 7 bear / 2 neutral (EASED from 1/9/0 — 15m &amp; 30m rolled to neutral) · a fresh 1d water-down death cross joined the 1w, but a 12h TD9 buy printed (oversold hint) and a 4h water-down golden cross printed 1 bar ago · regime 6/9 trend-continuation (JT≥0 — FLIPPED from 5/9 reversal) · spot below every MA, the whole ladder overhead, the 200W floor $62,443 still broken on the third daily close (06-26 $60,072), spot −3.80% below</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map is fresh and eased at the headline (1 bull / 7 bear / 2 neutral, the
                15m and 30m frames rolled to neutral and a 12h TD9 buy printed) but the regime
                classifier flipped to trend-continuation — the only constructive engine prints
                are the 12h TD9 buy and a 4h below-water golden cross 1 bar ago
              </span> — the one dimension, with the dealer map, the desk can still trust
              today. The 00:01Z scan tags{' '}
              <span className="dn-tag bear">1 bull / 7 bear / 2 neutral across 10 frames</span>,
              net read <em>multi-TF resonance bearish · sell the bounce</em> — eased from the
              06-26 scan&rsquo;s 1/9/0 as the 15m and 30m frames stepped to neutral. The regime
              line reads{' '}
              <span className="dn-tag bear">6/9 trend-continuation regime (JT≥0) —
              trend-follow favoured</span> (was 5/9 reversal / mean-reversion on 06-26), so the
              classifier flipped from a bounce-favoured lean to a down-trend-continuation lean
              even as the frame count eased — and the engine still carries no confirmed
              constructive trigger to act on it. The lone bull frame is the{' '}
              <span className="dn-tag">1M (above cloud)</span>; the constructive crosses are a{' '}
              <span className="dn-tag">4h water-down golden cross 1 bar ago</span> (DIF −873.9 —
              an early below-water probe, bearish-to-bullish but unconfirmed, not a TD buy) and a{' '}
              <span className="dn-tag bull">12h TD9 buy printed $60,093</span> (oversold reversal
              hint, last bar may be in-progress). The down side is still heavy: the{' '}
              <span className="dn-tag bear">8h, 12h, 1d and 1w carry water-down death
              crosses</span>, with the{' '}
              <span className="dn-tag bear">1d water-down death cross fresh (just printed, DIF
              −2,309.6)</span> joining the{' '}
              <span className="dn-tag bear">1w water-down death cross (just printed, DIF
              −5,835.4)</span>. Cloud: 4h→1w all below cloud, 1h in-cloud, 15m/30m/1M above;
              only the 1M holds a bull frame. The thin constructive set is the{' '}
              <span className="dn-tag bull">12h TD9 buy (oversold reversal hint), the 4h
              below-water golden cross, plus a 1M TD8 buy — one more close</span>.{' '}
              <span className="dn-em">
                Straight read: the frame stack eased at the headline (15m/30m neutral) but the
                regime classifier flipped to down-trend-continuation, and the high frames are all
                on death crosses with a fresh 1d death cross beneath the 1w. The engine&rsquo;s
                only constructive prints are a 12h TD9 buy (an oversold hint, last bar may be
                in-progress) and an unconfirmed 4h below-water golden cross. There is no
                confirmed engine print to trade the bounce long; the dominant tape read is the
                twin 1d/1w death crosses, the absent MA support, and the third close below the
                200W floor — softened only by the up-close and the de-amplified book. This is a
                bearish trend frame whose oversold-bounce setup has no confirmed trigger.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">60,094</td><td className="num">57.5</td><td className="bull">golden (water-dn) 9b</td><td className="bull">above ↓59.9k 20b</td><td>Sell 6</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">60,093</td><td className="num">54.8</td><td className="bull">golden (water-up) 3b</td><td className="bull">above ↓59.9k 3b</td><td>Sell 6</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">60,093</td><td className="num">52.1</td><td className="bull">golden (water-dn) 21b</td><td className="neut">in cloud 59.7k–60.6k 2b</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>4h</td><td className="num">60,093</td><td className="num bear">42.5</td><td className="bull">golden (water-dn) 1b</td><td className="bear">below ↑64.2k 23b</td><td>Sell 1</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">60,093</td><td className="num bear">37.7</td><td className="bear">death (water-dn) 12b</td><td className="bear">below ↑64.4k 11b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">60,093</td><td className="num bear">34.7</td><td className="bear">death (water-dn) 7b</td><td className="bear">below ↑64.3k 71b</td><td>TD9 BUY</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">60,093</td><td className="num bear">32.1</td><td className="bear">death (water-dn) 刚印 (just printed)</td><td className="bear">below ↑75.5k 26b</td><td>Buy 5</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">60,093</td><td className="num bear">33.6</td><td className="neut">—</td><td className="bear">below ↑73.0k 8b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">60,093</td><td className="num bear">33.2</td><td className="bear">death (water-dn) 刚印 (just printed)</td><td className="bear">below ↑100.3k 21b</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">60,093</td><td className="num">41.3</td><td className="neut">—</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (08:01 Beijing; rolling latest
                    file, archived verbatim at
                    /opt/desk-note/snapshots/2026-06-27-0005/). Net read{' '}
                    <em>multi-TF resonance bearish · sell the bounce (1 bull / 7 bear / 2
                    neutral)</em>; regime <em>6/9 trend-continuation regime (JT≥0,
                    trend-follow favoured)</em>; reversal divergences{' '}
                    <em>top div 4h, bottom div 15m</em>. Header alerts:{' '}
                    <em>1d water-down death cross (just printed, DIF −2,309.6)</em>,{' '}
                    <em>1w water-down death cross (just printed, DIF −5,835.4)</em>,{' '}
                    <em>4h water-down golden cross (1 bar ago, DIF −873.9, early below-water
                    probe)</em>, <em>12h TD9 Buy printed $60,093 (oversold reversal hint, last
                    bar may be in-progress)</em>, <em>1M TD8 Buy — one more close</em>. Scan spot
                    $60,093, 24h +0.54%, 24h H/L $60,734 / $58,288, qVol $16.83B. Closes are
                    in-progress bars; treat every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is the same deep overhead wall as 06-26, and spot has clawed back a
              touch toward the 200W floor, so for the third cut in the lineage{' '}
              <span className="dn-tag bear">every line on the matrix is overhead — there is no
              positive offset, no MA beneath spot</span>. $60,072 sits{' '}
              <span className="dn-tag bear">−3.80% below the full-history W-SMA200 200W floor
              $62,443</span> — the nearest line, still overhead (was −4.14% on 06-26) —
              and{' '}
              <span className="dn-tag bear">−4.76% below D-SMA20 $63,078</span>, the next line
              up. Above those, the cycle-proxy{' '}
              <span className="dn-tag bear">D-EMA20 $63,465 (−5.35%)</span>, then{' '}
              <span className="dn-tag bear">W-EMA200 $67,508 (−11.01%, seed)</span>, then{' '}
              <span className="dn-tag bear">D-EMA50 $67,535 (−11.05%)</span>, then a dense
              overhead band: <span className="dn-tag bear">D-SMA50 $69,860 (−14.01%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $70,998 (−15.39%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $71,003 (−15.39%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $71,131 (−15.55%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $71,637 (−16.14%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $73,142 (−17.87%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,026 (−18.85%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $74,033 (−18.86%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $75,658 (−20.60%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $75,844 (−20.80%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $76,852 (−21.83%)</span>. Far above and
              disused: W-EMA100 $80,555 (−25.43%), W-EMA50 $81,775 (−26.54%), W-SMA100
              $88,460 (−32.09%), W-SMA50 $89,794 (−33.10%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-27 00:05Z (close $60,072.10);
                offsets recomputed against that same last-bar close, which is the freshest
                available spot while the live tape is frozen. Displayed MA levels are
                $-rounded; offsets computed from exact series values. The displayed weekly
                ladder uses the 2023→ subset (183 weekly bars), so W-SMA200 is non-computable
                there and W-EMA200 $67,508 seeds from available history; the 200W floor
                $62,443 is recomputed separately from the full-history glob (355 completed
                weekly W-MON bars, excluding the in-progress 06-29 week). Daily closes: 06-19
                $63,513, 06-20 $64,270, 06-21 $63,287, 06-22 $63,990 (= the 22JUN weekly
                close), 06-23 $62,697, 06-24 $61,051 (first close below the floor), 06-25
                $59,772 (second close below, −4.28%), 06-26 $60,072 (third close below but the
                first up-close, +$300, back above $60k, −3.80% below), 06-27 (in-progress, 5-min
                bar) $60,072 — the floor break has extended to a third consecutive daily close
                but stabilised on an up-tick, and of the last 24h 1-min closes all 1,441 printed
                below the floor while 435 reclaimed at/above $60k (1,006 below).
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DE-AMPLIFIED net-short-gamma aggregate −20.9M (was −87.5M on 06-26, −73.9M on 06-25) · 26JUN26 monthly −74.71M amplifier SETTLED yesterday (~08:00Z, 06-26) — the concentrated downside chunk is GONE, the front is now 27JUN26 0.3 DTE at only −6.03M · the flip dropped $62,074 → $60,432 and spot is now only −0.60% below it · IV eased 47.4% → 44.3%</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book&rsquo;s four-night re-amplification reversed in a single
                session: the 26JUN −74.71M monthly settled, aggregate gamma collapsed from
                −87.5M to −20.9M net-short-gamma, and the flip dropped to within −0.60% of spot
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bear">−20.9M / 1%</span> (was −87.5M on 06-26, −73.9M
              on 06-25, −64.4M on 06-24); the book is still net-short-gamma but far less so than
              at any point of the recent leg — the de-amplification the early-week notes lost has
              been handed back in one cut as the monthly settled. The 0-γ flip dropped{' '}
              <span className="dn-tag">$62,074 → $60,432 (−$1,642)</span>, and spot $60,072
              sits <span className="dn-tag bear">−0.60% below the flip</span> on
              spot-denominated math (60,072.10 / 60,432 − 1 = −0.596%); the GEX file&rsquo;s
              own &ldquo;dist to flip&rdquo; reads −0.2% off its Deribit-index $60,288 ($216
              above parquet spot), which is <span className="dn-tag bear">−0.24%</span>
              (60,288 / 60,432 − 1 = −0.238%) — both references below the flip, but the gap to
              the flip collapsed from −3.57% on 06-26. The wall map is put-heavy around spot:{' '}
              <span className="dn-tag bear">$60k −24.18M</span> (heaviest wall, much shallower
              than the −60.78M of 06-26 after the monthly settled, now just ABOVE spot as the
              cluster ceiling),{' '}
              <span className="dn-tag bear">$58k −12.88M</span>,{' '}
              <span className="dn-tag bear">$59k −9.82M</span> (both just below spot),{' '}
              <span className="dn-tag bear">$56k −9.37M</span>,{' '}
              <span className="dn-tag bear">$55k −9.25M</span>,{' '}
              <span className="dn-tag bear">$50k −6.77M</span>,{' '}
              <span className="dn-tag bull">$64k +7.27M</span>,{' '}
              <span className="dn-tag bull">$63k +7.01M</span>,{' '}
              <span className="dn-tag bull">$80k +6.50M</span>,{' '}
              <span className="dn-tag bull">$65k +6.07M</span>.{' '}
              <span className="dn-em">
                The listed major walls from $55k–$60k total −65.5M and sit at and below
                spot — spot at $60,072 sits just under the $60k −24.18M wall, now a cluster
                ceiling, with the $59k −9.82M and $58k −12.88M walls beneath. The book is far
                less short gamma at spot than 06-26, so it dampens the next move materially more
                than it did into the monthly; the positive walls ($63k, $64k, $65k, $80k) sit
                overhead as the first real resistance shelf above the flip and offer no support
                beneath spot; the only structure below is the $58k put wall, a magnet, not a
                floor.
              </span>{' '}
              By expiry the concentration is GONE: the 26JUN26 monthly{' '}
              <span className="dn-tag bull">−74.71M settled yesterday (~08:00Z, 06-26)</span>, so
              the front is now the small 27JUN26{' '}
              <span className="dn-tag bear">0.3 DTE at −6.03M</span> (settles ~08:00Z today),
              then 28JUN26 1.3{' '}
              <span className="dn-tag bull">+2.19M</span>, 29JUN26 2.3 +0.94M, 30JUN26 3.3
              −1.50M, 3JUL26 6.3 −4.59M, 10JUL26 13.3 −0.50M, 17JUL26 20.3{' '}
              <span className="dn-tag bull">+4.02M</span>, 31JUL26 34.3 +0.76M, 28AUG26 62.3
              +0.68M, 25SEP26 90.3 −5.20M, 25DEC26 181.3 −0.29M, 26MAR27 272.3 +0.36M, 25JUN27
              363.3 +0.40M. No forward expiry carries the 26JUN weight — the concentrated
              downside-amplifier risk that defined the 06-23 → 06-26 leg has settled and no
              forward chunk replaces it. (The spot-referenced aggregate −20.9M is the net GEX at
              spot; the by-expiry rows are an independent decomposition and need not sum to it.)
            </p>

            <p>
              IV median across 948 instruments is{' '}
              <span className="dn-tag">44.3%</span> (eased from 47.4% / 1,038 instruments on
              06-26 as the monthly settled and the chain thinned) against 30D close-to-close RV
              of{' '}
              <span className="dn-tag">43.35%</span> — chain-level richness{' '}
              <span className="dn-tag">~+0.95pt</span>, now thin to realised (was ~+4.2pt on
              06-26), with RV staying elevated (43.35% today vs 43.20% on 06-26 and 24.91% on
              05-31 — the high-vol regime that started with the 06-08 → 06-18 down-leg persists).
              A chain-median across 948 instruments, <span className="dn-em">not</span> a
              tradable spread; expiry-/strike-level vega, skew and term structure remain not
              loaded; the vol read stays framework-only. RV methodology: 30D close-to-close,
              logret.std × √365 × 100 on the last 30 daily log returns (= 31 consecutive
              daily closes) anchored to parquet last bar 2026-06-27 00:05Z; underlying close
              window range $59,772 – $73,857. (For reference, the last 29 returns / 30 closes
              reads 44.09%; the 43.35% page value comes from 30 returns.) P/C ratio 0.58,
              Call OI 214,741 / Put OI 125,560 BTC.
            </p>

            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · render fresh (~1.85h), Tier-1 daily printed small fresh deltas — 10Y 4.40% (−1bp, eased, now 13bp from the gate), TIPS 2.19% (−4bp) EXTREME RISK-OFF, HY OAS 2.78% (+2bp, now AT its 2.78% gate — 0bp to fire), MOVE 66.8 (loose) · DXY 101.44 and USD/JPY 161.79 byte-identical to 06-26 (likely STALE weekend carry, flagged) · regime still NORMAL, lag to NQ narrowed to −1.27pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro panel render is fresh (~1.85h), the Tier-1 daily series printed small
                fresh deltas, and the read stayed risk-off — rates eased a touch further, credit
                widened to sit exactly on its re-grow gate, and the dollar held EXTREME but the
                FX legs are byte-identical to 06-26 and likely stale weekend carry
              </span>. Dashboard render is 2026-06-26 22:16Z, ~1.85h before the snapshot. US
              10Y nominal <span className="dn-tag bull">4.40% (−1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.02</span> — tight regime, RISK-OFF, eased 1bp
              off 06-26&rsquo;s 4.41%, now 13bp from the 4.53% gate. 10Y TIPS real{' '}
              <span className="dn-tag bull">2.19% (−4.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.20</span> — eased 4bp but still EXTREME
              RISK-OFF, among the tightest lines on the panel. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.19% (0.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag bull">2.20% (−1.0bp)</span> — inflation expectations
              soft, both episodic. HY OAS{' '}
              <span className="dn-tag bear">2.78% (+2.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−0.75</span> — credit still loose (RISK-ON on the
              z-regime) but the spread widened 2bp on the day to sit exactly AT its 2.78% re-grow
              gate (0bp to fire, the closest the gate has ever come). MOVE bond vol is{' '}
              <span className="dn-tag">66.8</span> — the source tags +1.40 on its own 1d
              delta, though the level is down 2.3 vs the 06-26 note&rsquo;s 69.1 print, still
              &ldquo;loose.&rdquo; The dollar held its EXTREME level: DXY{' '}
              <span className="dn-tag bear">101.44 (−0.17 day)</span>, regime z{' '}
              <span className="dn-tag bear">+2.90</span>, episodic z +2.12 — but the level, delta
              and z are byte-identical to the 06-26 render, so the desk flags this as likely
              stale weekend carry, not a fresh print. Fed net liquidity{' '}
              <span className="dn-tag bear">$5.812T (−0.037T)</span>, regime z{' '}
              <span className="dn-tag bear">−1.16</span> — no fresh weekly print this cut (same
              as 06-26). USD/JPY{' '}
              <span className="dn-tag">161.79 (+0.03 day)</span>, regime z +1.56 — also
              byte-identical to 06-26, likely stale carry; US-JP 10Y spread{' '}
              <span className="dn-tag bull">1.75% (−1.0bp)</span> narrowed marginally;
              USD/CNY <span className="dn-tag">6.7897 (−0.00)</span>; WTI{' '}
              <span className="dn-tag stale">$78.9 (now stale 4d)</span>.{' '}
              <span className="dn-em">
                Net: the macro backdrop stayed risk-off but quieted at the margin — the 10Y
                eased 1bp, TIPS eased 4bp, MOVE eased, while credit crept 2bp wider to sit
                exactly on its gate. The two re-grow legs have fully crossed: the credit leg is
                now ON the 2.78% gate (0bp) while the rates leg sits 13bp away — the credit gate
                is the live one. The reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE at
                4.40% with room. The DXY / USD/JPY stale-carry flag matters: the FX risk-off
                signal is not freshly confirmed this cut. The macro read still reinforces rather
                than refutes the break of the 200W floor — a broad risk-off backdrop with the
                credit gate on the line — but it is no longer worsening.
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
                <tr><td>US 10Y nominal</td><td className="num">4.40%</td><td className="num bull">−1.0bp</td><td className="num bear">+1.02</td><td className="bear">tight · RISK-OFF · 13bp from gate</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.19%</td><td className="num bull">−4.0bp</td><td className="num bear">+2.20</td><td className="bear">eased · still EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.19%</td><td className="num">0.0bp</td><td className="num">−0.54</td><td className="neut">soft · episodic</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.20%</td><td className="num bull">−1.0bp</td><td className="num">−2.04</td><td className="neut">soft · episodic</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num bear">+2.0bp</td><td className="num bull">−0.75</td><td className="bull">loose · now AT the 2.78% gate (0bp to fire)</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.516</td><td className="num">−0.00</td><td className="num">−0.07</td><td className="stale">weekly · neutral</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">66.8</td><td className="num bear">+1.40</td><td className="num bull">−0.81</td><td className="bull">loose · −2.3 vs 06-26 note (69.1)</td></tr>
                <tr><td>DXY</td><td className="num stale">101.44</td><td className="num stale">−0.17</td><td className="num bear">+2.90</td><td className="stale">EXTREME RISK-OFF · byte-identical to 06-26 (likely stale carry)</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.812T</td><td className="num bear">−0.037T</td><td className="num bear">−1.16</td><td className="bear">drained · no fresh weekly print</td></tr>
                <tr><td>USD/JPY</td><td className="num stale">161.79</td><td className="num stale">+0.03</td><td className="num bear">+1.56</td><td className="stale">firm · byte-identical to 06-26 (likely stale carry)</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.75%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.25</td><td className="neut">narrowed</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7897</td><td className="num">−0.00</td><td className="num bull">−1.43</td><td className="neut">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 166 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.288</span> — essentially unchanged
              from the 0.287 of 06-26 and still <span className="dn-tag">above the 0.25
              idiosyncratic threshold</span>, so the regime line holds at{' '}
              <span className="dn-signal">NORMAL — BTC stays coupled to the broad cross-asset
              complex</span>, with its top ties the equity / industrial-metal cluster: NQ{' '}
              <span className="dn-tag">+0.772</span>, NVDA{' '}
              <span className="dn-tag">+0.745</span>, SP500{' '}
              <span className="dn-tag">+0.693</span>, JP225{' '}
              <span className="dn-tag">+0.568</span>, TSLA{' '}
              <span className="dn-tag">+0.523</span>, COPPER{' '}
              <span className="dn-tag">+0.500</span>, URNM{' '}
              <span className="dn-tag">+0.487</span>, META{' '}
              <span className="dn-tag">+0.369</span>, AAPL{' '}
              <span className="dn-tag">+0.360</span>, PALL{' '}
              <span className="dn-tag">+0.352</span>, with CL{' '}
              <span className="dn-tag">−0.138</span> / BRENT{' '}
              <span className="dn-tag">−0.140</span> inverse and GOLD a weak{' '}
              <span className="dn-tag">+0.244</span>. 7d performance still has the broad risk
              complex red and BTC the laggard, but by a narrower gap than 06-26:{' '}
              <span className="dn-tag bear">BTC −5.40%</span>, NQ{' '}
              <span className="dn-tag bear">−4.13%</span>, SP500{' '}
              <span className="dn-tag bear">−2.11%</span>, JP225{' '}
              <span className="dn-tag bear">−2.63%</span>, NVDA{' '}
              <span className="dn-tag bear">−7.72%</span>, META{' '}
              <span className="dn-tag bear">−4.21%</span>, AAPL{' '}
              <span className="dn-tag bear">−4.69%</span>, MSFT{' '}
              <span className="dn-tag bear">−2.20%</span>, GOOGL{' '}
              <span className="dn-tag bear">−7.62%</span>, AMZN{' '}
              <span className="dn-tag bear">−4.38%</span>, TSLA{' '}
              <span className="dn-tag bear">−5.25%</span>; metals lower (GOLD{' '}
              <span className="dn-tag bear">−1.74%</span>, SILVER{' '}
              <span className="dn-tag bear">−8.62%</span>, PLAT{' '}
              <span className="dn-tag bear">−2.96%</span>, PALL{' '}
              <span className="dn-tag bear">−4.59%</span>, COPPER{' '}
              <span className="dn-tag bear">−3.13%</span>); crude down, NGAS positive (CL{' '}
              <span className="dn-tag bear">−7.96%</span>, BRENT{' '}
              <span className="dn-tag bear">−7.82%</span>, NGAS{' '}
              <span className="dn-tag bull">+1.69%</span>).{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d return −5.40% vs NQ −4.13% is a lag of −1.27pt (was −2.08pt on
                06-26) — the gap narrowed again as the bounce closed some of BTC&rsquo;s
                under-performance. The whole risk complex stays red over 7d (NQ −4.13%, NVDA
                −7.72%, the Mag7 mostly −4% to −8%, metals down, crude down with NGAS the lone
                green), so BTC&rsquo;s decline remains embedded in a broad risk-off move rather
                than standing out as idiosyncratic — which is what keeps the correlation regime
                at NORMAL. The third close below the 200W floor still coincides with a risk-off
                macro tape (10Y eased but tight, credit on its gate, DXY EXTREME but stale-flag),
                so the break stays as much a risk-off-tape event as a BTC-specific one — but the
                up-close and de-amplified book are the first signs the move is steadying.
              </span>{' '}
              JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book <span className="dn-roman">V · book FLAT · 200W floor — DAILY-CLOSE BREAK EXTENDED to a THIRD consecutive close (06-26 $60,072 &lt; $62,443) but stabilised on an up-close back above $60k, weekly-close escalation PENDING (06-29 in-progress reads −3.80% below, improved) · scout STILL stood down (price block NARROWED sharply — spot only −0.60% below the flip — but tape blind, no MA support, no confirmed engine trigger, regime flipped to trend-continuation) · macro tail credit gate ON the line (OAS 2.78%, 0bp) · squeeze-cycle ON HOLD (SM dead ~14.94 days)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — the dealer amplifier settled and the book
                de-amplified, spot printed its first up-close above $60k and the flip reclaim
                collapsed to within −0.60%, but the floor break extended to a third daily close,
                the regime flipped to trend-continuation, and the binding constraint is still
                data integrity
              </span>. The structural positive of the lineage stayed broken at the daily-close
              level this cut, but the character softened: the 06-26 daily bar closed $60,072,
              −3.80% below the $62,443 floor, the third consecutive daily close beneath the line
              but the first UP-close (+$300 over 06-25 $59,772) and back above $60k. Per the
              framework that is the early warning confirmed on repetition, not yet the full
              break — the break is a sustained weekly close below, and the in-progress 06-29 week
              reads $60,072 (−3.80% below), so the escalation is pending the 06-29 settle and has
              stopped deteriorating. The 22JUN weekly close $63,990 (+2.48% above) is still the
              last resolved weekly hold, so the 200W reclaim thesis is not yet falsified. The
              scout still cannot be taken even though its price block narrowed sharply: spot is
              now only −0.60% below the flip (was −3.57% on 06-26) but still below it with no MA
              beneath spot, the positioning legs (SM short bleed, funding posture, cover-flow)
              all require a live tape and there is none for an eleventh day, and the engine
              carries no confirmed constructive trigger — only a 12h TD9 oversold hint and an
              unconfirmed 4h below-water golden cross against twin 1d/1w death crosses and a
              regime that flipped to trend-continuation (down). No new short either: the
              concentrated downside amplifier (26JUN −74.71M) settled yesterday and the book
              de-amplified to −20.9M, so the structure that would have pressed a short is gone,
              and chasing a third close below the floor after the amplifier has cleared, on a
              blind tape, is a poor entry. The trade book today is: no shorts, no scout, no fresh
              hedge — fix the tape AND watch the 06-29 weekly close vs the floor before
              re-arming.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch — DAILY-CLOSE BREAK EXTENDED to a THIRD close but STABILISED: the 06-26 daily close $60,072 settled −3.80% below the $62,443 floor (a third consecutive close below, after 06-24 $61,051 and 06-25 $59,772) but is the first UP-close, back above $60k; weekly-close escalation PENDING (06-29 in-progress reads $60,072, −3.80% below, improved from −4.14%); the 22JUN weekly close $63,990 +2.48% above still stands as the last resolved weekly hold</span>
              <div className="dn-trade-name">
                200W cycle floor watch — the daily-close break extended to a third consecutive close but stabilised on an up-tick, and the weekly-close escalation is pending: floor $62,443 = full-history W-SMA200 (355 completed weekly bars, unchanged vs the 06-25 / 06-26 pin), 06-24 daily close $61,051 (−2.23% below), 06-25 daily close $59,772 (−4.28% below), 06-26 daily close $60,072 (−3.80% below, first up-close), in-progress 06-29 week $60,072 (−3.80% below), all 1,441 last-24h 1-min closes below the floor
              </div>
              <div className="dn-thesis">
                The 06-26 note recorded the second consecutive daily close below the floor as
                the early warning deepened. That warning did not extend further — it stabilised:
                the 06-26 daily bar closed{' '}
                <span className="dn-tag bear">$60,072, −3.80% below the $62,443 floor</span>, a
                third consecutive daily close beneath the line but the first to tick UP (+$300
                over 06-25 $59,772) and reclaim above $60k. Per the framework an intraday wick is
                not the break, a daily close below is the early warning — now confirmed on three
                consecutive closes — and a sustained weekly close below is the escalation that
                breaks the floor and falsifies the 06-15 reclaim thesis. The 22JUN weekly close{' '}
                <span className="dn-tag bull">$63,990, +2.48% above</span> still stands as the
                last resolved weekly hold, so the thesis is not yet dead, and the in-progress
                06-29 week reads{' '}
                <span className="dn-tag bear">$60,072, −3.80% below</span>, so the escalation is
                pending the 06-29 settle and has stopped deteriorating.{' '}
                <span className="dn-em">The structural positive of the lineage is broken at the
                daily-close level on three consecutive closes but stabilising; spot holds no MA
                beneath it, and the 06-29 weekly close is still the single level that resolves
                the thesis.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor</span><span className="dn-lvl-v">$62,443 = full-history W-SMA200, recomputed this cut from the 2019→ parquet glob (355 completed weekly W-MON bars, excluding the in-progress 06-29 week); unchanged vs the 06-25 / 06-26 pin (slow weekly SMA, ~$250/wk) · weekly_200sma.json absent so the ratio percentile / last-event stay unsourced, not fabricated</span></div>
                <div><span className="dn-lvl-k">daily-close break — EXTENDED to a third close, STABILISED</span><span className="dn-lvl-v bear">06-24 daily close $61,051 (−2.23% below), 06-25 daily close $59,772 (−4.28% below) and 06-26 daily close $60,072 (−3.80% below, first up-close) — three consecutive closes beneath the line; all 1,441 of the last 24h 1-min closes printed below the floor but 435 reclaimed at/above $60k and the in-progress 06-27 bar holds −3.80% below</span></div>
                <div><span className="dn-lvl-k">last resolved weekly hold (still stands)</span><span className="dn-lvl-v bull">22JUN weekly close $63,990 +2.48% above the floor still stands — the 200W reclaim thesis is not yet falsified, but it is one weekly close from dying</span></div>
                <div><span className="dn-lvl-k">escalation (next weekly close) — PENDING</span><span className="dn-lvl-v bear">a sustained weekly close &lt; $62,443 breaks the 200W floor and falsifies the 06-15 reclaim thesis — the in-progress 06-29 week reads $60,072 (−3.80% below, improved from −4.14%); this is the level that resolves the thesis at the 06-29 settle</span></div>
                <div><span className="dn-lvl-k">reclaim side (now close)</span><span className="dn-lvl-v bear">spot is −0.60% below the flip $60,432, −3.80% below the 200W floor $62,443, and −4.76% below D-SMA20 $63,078 — no MA beneath spot; the flip dropped below the floor, so a reclaim is a daily close back above the flip $60,432 then the floor $62,443 then D-SMA20 $63,078 — NOT a scout trigger on a blind tape (see scout)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework, not a trade.</b> The floor watch is the single load-bearing
                live level while everything else is stale or framework-only. The daily-close
                break has extended to a third consecutive close but stabilised on an up-tick and
                the weekly-close escalation is pending — no position is taken on the watch: it
                sets the confirmed early-warning level (three daily closes below), the pending
                escalation (06-29 weekly close &lt; $62,443), and the reclaim ladder (flip
                $60,432 → floor $62,443 → D-SMA20 $63,078 — note the flip sits below the floor,
                so the first reclaim step is the flip then the floor then D-SMA20), and the desk
                will not pre-position short into a break the amplifier has already settled out of
                nor long into a reclaim it cannot confirm, on a blind tape.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STILL STOOD DOWN · price pre-condition NARROWED SHARPLY (spot only −0.60% below the flip, vs −3.57% on 06-26) but still below it, no MA beneath spot + tape blind ~14.94 days + no confirmed engine trigger + regime flipped to trend-continuation</span>
              <div className="dn-trade-name">
                Cover-bounce scout — the flip reclaim narrowed sharply to within −0.60% as the book de-amplified, but the scout stays stood down on a blind tape with no MA beneath spot and no confirmed engine trigger
              </div>
              <div className="dn-thesis">
                The 06-22 note saw the scout&rsquo;s price pre-condition print briefly (spot
                reclaimed the flip), the 06-23 → 06-26 notes saw it handed back and widen to
                −3.57%. Tonight it narrowed sharply: spot rose $59,857 (the 06-26 note spot) →
                $60,072, now{' '}
                <em>only −0.60% below the flip</em> $60,432 (which itself dropped $1,642 as the
                26JUN monthly settled), still −3.80% below the 200W floor, below D-SMA20, and
                holding above $60k — but there is still no MA beneath spot at all. So the scout
                is blocked on four counts. (1) The price pre-condition narrowed sharply but is
                not yet true — spot is still below the flip, and below the floor and D-SMA20. (2)
                The positioning legs (SM short bleed, funding posture, cover-flow) all require a
                live tape, and there is none — the desk cannot see whether the up-close was real
                demand or thin short-covering as the monthly settled. (3) The dealer book
                de-amplified to −20.9M net-short-gamma with the 26JUN amplifier settled, which is
                constructive but removes the squeeze fuel a cover-bounce would ride. (4) The
                engine carries no confirmed constructive trigger — only a 12h TD9 oversold hint
                (last bar may be in-progress) and an unconfirmed 4h water-down golden cross (DIF
                −873.9) against twin fresh 1d/1w death crosses and a regime that flipped to
                trend-continuation (down).{' '}
                <span className="dn-em">A scout long on a positioning-blind tape, below the flip
                and the floor with no MA beneath spot, with a regime that flipped to
                down-trend-continuation and no confirmed engine print, is not a trade — the only
                constructive counters are the up-close, the collapsed flip gap, the de-amplified
                book, the 12h TD9 hint, and the still-standing last weekly hold, and none is
                sufficient to size into without a tape and a confirmed engine trigger.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">stood down · no entry · price pre-condition narrowed sharply (spot −0.60% below the flip, vs −3.57% on 06-26) but still below it and below the floor, no MA beneath spot — re-evaluate only after the live tape is restored AND spot re-reclaims the flip then the floor then D-SMA20</span></div>
                <div><span className="dn-lvl-k">technical pre-condition</span><span className="dn-lvl-v bear">flip $60,432 / floor $62,443 / D-SMA20 $63,078 reclaim (NOT true — spot below all three, no MA beneath spot, though the flip is now within −0.60%) AND a confirming engine print (NOT true — 1 bull / 7 bear / 2 neutral, regime flipped to trend-continuation, twin 1d/1w death crosses fresh, only a 12h TD9 hint and an unconfirmed 4h below-water golden cross)</span></div>
                <div><span className="dn-lvl-k">data pre-condition</span><span className="dn-lvl-v bear">live tape restored (currently 233.4h frozen) AND SM feed live (currently dead ~14.94 days) — both must hold before any positioning leg can be read; this is the binding block</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> no scout entry without a live positioning tape. The up-close,
                the collapsed flip gap, the de-amplified book, the 12h TD9 hint and the
                still-standing last weekly hold do not trigger a scout while the SM / funding /
                flow legs are blind, spot is still below the flip and the floor with no MA
                beneath it, the regime has flipped to trend-continuation, and the engine has no
                confirmed trigger — the desk does not size into a cover-bounce it cannot see
                being covered. The price block that lifted on 06-22 and re-closed on 06-23 →
                06-26 has narrowed sharply this cut but is not yet open; the operational block
                (tape down) and the engine block (no confirmed trigger, regime flipped down)
                still bind.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — credit leg now ON the line: HY OAS 2.78% = the 2.78% gate (0bp to fire), 10Y leg 13bp away (4.40% vs 4.53% gate); neither has fired a close above but the credit leg is exactly at the trigger · Tier-1 printed small fresh deltas</span>
              <div className="dn-trade-name">
                Downside put-spread — re-grow gate un-fired but the credit leg is ON the line (OAS 2.78% = gate, 0bp), the rates leg eased (13bp away); no hedge added (the 26JUN amplifier has settled and the book de-amplified)
              </div>
              <div className="dn-thesis">
                The macro re-grow gate the lineage carries — HY OAS &gt; 2.78% OR 10Y &gt;
                4.53% as the condition to re-grow a downside tail — stays UN-FIRED on a close
                basis, but the credit leg crept exactly onto the line this cut: HY OAS widened
                2bp to <em>2.78%</em>, equal to the gate (0bp to fire, needs a print above to
                trigger), while the 10Y eased 1bp to 4.40% and sits 13bp away. So the credit leg
                is now AT the trigger and the rates leg backed further off. The reclaim-long
                rates filter (10Y &lt; 4.55%) stays TRUE at 4.40%, with room. The macro tape is
                still a genuine risk-off impulse (rates tight, credit on its gate, dollar EXTREME
                though stale-flagged) but quieting at the margin; a macro tail is not the right
                instrument for an endogenous-cum-risk-off floor break, and the concentrated
                downside risk that the dealer gamma priced — the 26JUN monthly −74.71M — has now
                settled, so there is no dealer-amplified downside to hedge into.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · gate un-fired on a close basis · HY OAS leg now ON the line (2.78% = gate, 0bp), 10Y leg 13bp away (eased)</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (next Tier-1 print)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.78%, ON the line — needs a print above) OR 10Y &gt; 4.53% close (currently 4.40%, 13bp to fire, eased — the further leg by far)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — TRUE at 4.40%; awaits a BTC-internal pivot AND a live tape to translate</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as the levels
                drift, not backtested breakpoints. Neither leg has fired a close above — the
                credit leg is exactly on the line (0bp, needs a print above) and the rates leg
                eased further off (13bp) — and if either fires, a downside tail would be
                reassessed in a separate future note (trigger / invalidation / R defined there);
                note the dealer strip no longer carries a concentrated downside amplifier (the
                26JUN monthly −74.71M has settled), so any such tail would be a cleaner
                independent hedge than into the 06-26 book rather than additive to dealer short
                gamma.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · ON HOLD — SM feed DEAD ~14.94 days, the re-stack signature cannot be read this cut</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — ON HOLD (continuation of 06-16 → 06-26): the SM feed is frozen ~358.5h, the re-stack signature cannot be read this cut
              </div>
              <div className="dn-thesis">
                The squeeze-cycle / re-stack-hostile-2 framework reads discrete SM steps
                (Δshort &gt; 0 + Δlong &lt; 0 same minute) as continuation signatures; its
                calendar prior (the BJ 13–15 cadence) was falsified on 05-31 and it has run as
                a no-prior watchlist since. It cannot be assessed today for the simplest
                reason: the SM feed is dead. long_btc / short_btc / net_btc have been constant
                since 2026-06-12 01:36Z (~358.5h), so there are no SM deltas to read. The
                06-16 note put this ON HOLD at ~94.5h, the 06-25 note at ~310.5h, the 06-26
                note at ~334.5h; it remains ON HOLD at ~358.5h.{' '}
                <span className="dn-em">No signature can print from a frozen feed; the
                framework is dark until the SM data resumes.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v bear">ON HOLD · SM feed frozen ~358.5h (since 2026-06-12 01:36Z) · no SM deltas computable</span></div>
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
              Decision conditions <span className="dn-roman">VI · LIVE TAPE OUTAGE still the operative condition (eleventh day) · 200W floor DAILY-CLOSE BREAK EXTENDED to a THIRD close but STABILISED (06-26 $60,072, first up-close), weekly-close escalation PENDING (06-29 reads −3.80% below, improved) · flip reclaim NARROWED to −0.60%, book DE-AMPLIFIED −20.9M, 26JUN monthly SETTLED · scout stood down (no MA support, no confirmed engine trigger, regime flipped to trend-continuation) · macro credit gate ON the line (OAS 2.78%), regime still NORMAL</span>
            </h2>

            <p>
              Of the 06-26 conditions: the live tape did <em>not</em> come back — it is ~24h
              deader, now 233.4h frozen with the SM feed at ~14.94 days; the 200W floor
              daily-close break <em>extended</em> to a third consecutive close (06-26 $60,072,
              −3.80% below) but <em>stabilised</em> on the first up-close, back above $60k, and
              the weekly-close escalation is now pending and improved (06-29 in-progress reads
              −3.80% below, up from −4.14%); the flip reclaim narrowed sharply (spot −0.60% below
              the flip vs −3.57% on 06-26) as the flip itself dropped to $60,432; the dealer book
              de-amplified from −87.5M to −20.9M net-short-gamma as the 26JUN monthly −74.71M
              settled out; the scout&rsquo;s price block narrowed sharply but the engine carries
              only a 12h TD9 hint and the regime flipped to trend-continuation; the macro re-grow
              gate stayed un-fired but the credit leg crept exactly onto the line (OAS 2.78%)
              while the rates leg eased to 13bp; the correlation regime held NORMAL as the whole
              risk complex stayed red; the squeeze-cycle stayed ON HOLD on a deader feed. The
              dominant condition is unchanged: <em>the desk is positioning-blind, now into a 200W
              floor broken on three consecutive daily closes but stabilising, a reclaim that has
              narrowed to within −0.60% with no MA support, and a de-amplified book it cannot
              confirm</em>. The conditions today re-set around the continuing outage, the
              stabilised daily-close break, the pending weekly-close escalation, and the settled
              26JUN amplifier:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Live tape restored (PRIMARY operational)</td><td className="bull">live_db.json resumes writing fresh rows beyond 2026-06-17 06:43Z AND the SM triple updates off its 06-12 01:36Z freeze</td><td>re-read funding / OI / flow / SM in full; only then can the scout or squeeze-cycle be evaluated — and only then can the 06-26 up-close be confirmed as demand vs thin covering; the positioning dimension has now been blind nine notes running</td></tr>
                <tr><td>200W floor — DAILY-CLOSE BREAK EXTENDED, STABILISED</td><td className="bear">06-24 daily close $61,051 (−2.23% below), 06-25 daily close $59,772 (−4.28% below) and 06-26 daily close $60,072 (−3.80% below, first up-close) — three consecutive closes below the $62,443 floor; 435 of the last-24h 1-min closes reclaimed at/above $60k; in-progress 06-27 bar $60,072, −3.80% below</td><td>the daily-close break has extended to a third consecutive close but stabilised on an up-tick back above $60k — the floor is still overhead, the slow level still resistance; no position taken</td></tr>
                <tr><td>200W floor — escalation (next weekly close) PENDING</td><td className="bear">a sustained weekly close &lt; $62,443 (W-SMA200 floor) breaks the floor; the 22JUN weekly close $63,990 +2.48% above still stands, the in-progress 06-29 week reads $60,072 −3.80% below (improved from −4.14%)</td><td>the 06-29 weekly close is the single level that resolves the 06-15 reclaim thesis — a close below escalates the break and falsifies the thesis; the read stopped deteriorating this cut; watch the 06-29 settle closely</td></tr>
                <tr><td>Flip reclaim (scout price pre-condition) — NARROWED to −0.60%</td><td className="bear">spot $60,072 −0.60% below flip $60,432, −3.80% below the floor $62,443, −4.76% below D-SMA20 $63,078; no MA beneath spot; the flip dropped below the floor, so re-reclaim is a daily close back above the flip then the floor then D-SMA20</td><td>the price pre-condition narrowed sharply and spot holds above $60k — re-reclaim of the flip then the floor then D-SMA20 is the first step that re-opens scout evaluation, but only IF the live tape is also restored; on a blind tape below the flip the reclaim is watched, not traded</td></tr>
                <tr><td>26JUN26 monthly amplifier — SETTLED, book de-amplified</td><td className="bull">26JUN −74.71M settled yesterday (~08:00Z, 06-26); aggregate GEX −20.9M (was −87.5M); the front is now 27JUN26 0.3 DTE at −6.03M; spot sits below the $60k −24.18M wall with the $59k −9.82M and $58k −12.88M walls beneath</td><td>the dealer book de-amplified materially — it dampens the next move far more than into the monthly; the concentrated downside risk has cleared and no forward chunk replaces it; watch only, no short instruction (the amplifier that would have pressed a short has settled)</td></tr>
                <tr><td>Macro tail re-grow (credit leg ON the line)</td><td className="bear">HY OAS &gt; 2.78% (currently 2.78%, ON the line, 0bp — needs a print above) OR 10Y &gt; 4.53% (13bp to fire, eased) — Tier-1 printed small fresh deltas; DXY / USD/JPY byte-identical to 06-26 (stale-flagged)</td><td>no hedge instruction in this note — a gate fire (OAS is now on the line) would be reassessed in a separate future note; note the 26JUN amplifier has settled, so any such tail would be a cleaner independent hedge than into the 06-26 book</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.40%</td><td>standalone filter true with room; needs a BTC-internal pivot AND a live tape to translate to a scout long</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (ON HOLD)</td><td className="stale">SM feed dead ~358.5h; no deltas computable</td><td>suspended, not negative — re-arm on the first fresh SM deltas after the feed resumes</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the 06-29 weekly close confirms the break by settling below the
                $62,443 200W floor — the daily-close break has now extended to three consecutive
                closes (06-24 $61,051, 06-25 $59,772, 06-26 $60,072) but stabilised on the first
                up-close and the in-progress 06-29 week reads −3.80% below — or whether spot can
                claw a daily close back above the floor before the 06-29 settle and keep the
                06-15 reclaim thesis alive; on the constructive side, a daily close back above
                the flip $60,432 (now only −0.60% away) then the floor $62,443 then D-SMA20
                $63,078 — which the desk still cannot scout on a blind tape — would re-open the
                case
              </span>. The four-night re-amplification of the 06-23 → 06-26 notes fully reversed
              in one cut (aggregate −87.5M → −20.9M as the 26JUN −74.71M monthly settled, spot
              from −3.57% below the flip to −0.60% below it on the first up-close back above
              $60k), so the concentrated structural risk that pressed the break has cleared; the
              structural positive — the 200W floor — is broken at the daily-close level on three
              consecutive closes but stabilising and one weekly close from full escalation, and
              the desk still cannot read the tape that would say whether the up-close is demand
              or thin covering. Until the tape is restored this note runs as written: the book is
              flat, the scout&rsquo;s price block narrowed sharply but the engine has only a 12h
              TD9 hint and the regime flipped to trend-continuation, the macro tail credit gate
              is on the line (OAS 2.78%), the squeeze-cycle is suspended, and the 200W floor
              watch is the one live level — now a floor broken on three daily closes but
              stabilising, pending weekly-close escalation. Price stabilised and MTF eased at the
              headline, the dealer book de-amplified and the flip reclaim collapsed to within
              −0.60%; macro stayed risk-off (rates tight but eased, credit on its gate, dollar
              EXTREME but stale-flagged) and the correlation regime held NORMAL as the whole
              complex stayed red, so the break is still as much a risk-off-tape event as a
              BTC-specific one — but the up-close and the settled amplifier are the first signs
              the move is steadying. The right read for the next 24h is{' '}
              <em>floor-broken-on-three-daily-closes-but-stabilising, escalation-pending —
              respect the extended break, watch the 06-29 weekly close vs the floor now that the
              amplifier has settled, fix the tape before reading positioning, and do not scout a
              reclaim that has narrowed to −0.60% but not yet cleared the flip on a blind
              tape</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> this is the <b>v2</b> note — <b>post codex hostile audit</b>. STAGE B
            ran a codex hostile cross-model audit (verdict PASS-WITH-NOTES — 0 CRITICAL, 0
            MAJOR, 2 MINOR), with a supplementary ask-deepseek numeric second-audit; the full
            record is at <code>audits/2026-06-27-desk-note.md</code>. STAGE C adjudicated every
            finding by recompute against the pinned snapshot
            (<code>/opt/desk-note/snapshots/2026-06-27-0005/</code>) and parquet, then applied
            the fixes file-wide and ran grep-closure to zero stale matches before promoting v1 →
            v2.{' '}
            <b>Findings (ID — patterns searched — grep hits before → after — status):</b>{' '}
            <b>DN-001</b> (MINOR, MTF 1d alert DIF mis-copied) — searched{' '}
            <code>2,307.5</code> / <code>2307.5</code>; the pinned mtf_div_latest.html prints
            1d DIF <code>−2309.6</code>, so both page occurrences were corrected to{' '}
            <code>−2,309.6</code> — 2 → 0 — <b>RESOLVED</b>.{' '}
            <b>DN-002</b> (MINOR, &ldquo;above $60k&rdquo; vs the <code>&gt;=</code> predicate)
            — recomputed the inclusive last-24h window (1,441 rows): closes <code>&gt;= 60000</code>
            = 435, closes <code>&lt; 60000</code> = 1,006, so the 435 / 1,006 split is the
            at-or-above predicate; searched <code>reclaimed above $60k</code> and reworded all
            three count mentions to <code>435 reclaimed at/above $60k (1,006 below)</code> — 3 →
            0 — <b>RESOLVED</b>. (Spot-narrative &ldquo;above $60k&rdquo; phrases are correct
            and left intact.){' '}
            <b>DS-MOVE</b> (deepseek-flagged CRITICAL, self-contradictory MOVE delta) —
            adjudicated against macro_dashboard.html: the source level is 66.8 with its own 1d Δ{' '}
            <code>+1.40</code> (verified), but the level is down 2.3 vs the 06-26 note&rsquo;s
            69.1 render, so &ldquo;+1.40 day … eased from 69.1&rdquo; juxtaposed two different
            references as one day-move; searched <code>eased from 69.1</code> /{' '}
            <code>+1.40 day</code> / <code>+1.40 on the day</code> and reworded all three
            occurrences to attribute the +1.40 to the source 1d delta and the −2.3 to the
            note-over-note change — 3 → 0 — <b>RESOLVED</b>.{' '}
            <b>DS-WALL</b> (deepseek-flagged MINOR, wall-sum) — recomputed the listed $55k–$60k
            walls ($55k −9.25M + $56k −9.37M + $58k −12.88M + $59k −9.82M + $60k −24.18M) ={' '}
            <code>−65.5M</code>, not −62M; searched <code>62M</code> and corrected the one
            occurrence to <code>−65.5M</code> — 1 → 0 — <b>RESOLVED</b>. Overall: all findings
            RESOLVED, <b>post codex hostile audit</b>; no UNRESOLVED residue. The numbers
            carried above are the STAGE A atomic-snapshot reads (parquet last bar 2026-06-27
            00:05Z; MTF / GEX / cross-asset 00:01Z; macro render 2026-06-26 22:16Z; live tape
            FROZEN at 2026-06-17 06:43Z, 233.4h; SM feed dead since 2026-06-12 01:36Z, ~14.94
            days), archived at{' '}
            <code>/opt/desk-note/snapshots/2026-06-27-0005/</code> for the auditor to re-check
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
            atomic snapshot (2026-06-27 00:06Z) with section-level provenance disclosed in the
            manifest band above;{' '}
            <em>critically, the live derivatives tape was frozen for 233.4h at snapshot time
            (last row 2026-06-17 06:43Z) and the smart-money positioning feed has been dead
            ~14.94 days</em>, so all funding, OI, flow and positioning figures are explicitly
            last-known / stale or non-computable and flagged as such; the macro panel render is
            2026-06-26 22:16Z (~1.85h before snapshot) and its Tier-1 series printed small fresh
            deltas this cut, though the DXY / USD/JPY FX legs are byte-identical to 06-26 and
            flagged as likely stale weekend carry. Price, MTF, GEX and cross-asset are fresh.
            This is the v2 note, post the STAGE B codex hostile audit. Levels, sizes, and
            conditions are illustrative of the desk&rsquo;s process, not standing
            recommendations. Past correlation, gamma, and positioning patterns do not bind
            future tape. Derivatives carry the risk of total loss and, where leveraged, loss
            exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The break stabilised: the 200W floor stayed broken on a third daily close
                (06-26 $60,072) but printed the first up-close back above $60k, the 26JUN
                −74.71M monthly settled and the dealer book de-amplified −87.5M → −20.9M, the
                flip reclaim collapsed to within −0.60% — all read through a dead tape an
                eleventh day. Floor broke thrice. Amplifier settled. Escalation pending. Blind.
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
            v2 · 2026-06-27 00:06Z snapshot · post codex hostile audit ·
            sources: live_db.json (FROZEN 233.4h) · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
