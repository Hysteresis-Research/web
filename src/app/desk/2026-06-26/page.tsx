import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-26 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-26',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-26' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260626() {
  await requireViewer('/desk/2026-06-26');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-26 · v2</span>
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
              <span className="dn-big">$59,857</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−2.00%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-26 00:06Z ·{' '}
              <span className="dn-em">
                LIVE-TAPE OUTAGE INTO A TENTH DAY — the OKX monitor has now been
                frozen 209.4h; price/MTF/GEX/cross-asset are fresh, the derivatives
                tape is still dark and the SM feed has been dead ~13.94 days. The
                structural event of this cut: the 200W floor break EXTENDED to a second
                consecutive daily close (06-25 $59,772 &lt; $62,443, after 06-24 $61,051),
                spot accelerated below $60k, and the 26JUN26 monthly −74.71M amplifier
                settles TODAY (~08:00Z, 0.3 DTE) as the dealer book deepened −73.9M →
                −87.5M.
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
                    <b>209.4h stale</b> vs the 00:06Z snapshot anchor (was 185.4h on
                    the 06-25 note, 161.4h on 06-24 — the outage has run another ~24h
                    since the last note). Funding / OI / CVD / basis / retail /
                    taker-flow are LAST-KNOWN at 06-17 06:43Z, not current. The SM
                    sub-feed (long_btc / short_btc / net_btc) is frozen even longer —
                    constant since 2026-06-12 01:36Z (~334.5h / ~13.94 days); SM net and
                    the SM cut-fraction are <b>NON-COMPUTABLE</b> this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-26 00:01Z scan</td>
                  <td className="dn-flag">
                    fresh (~5 min before anchor) · rolling latest-file artifact,
                    archived verbatim at
                    /opt/desk-note/snapshots/2026-06-26-0006/ · in-progress bars · scan
                    spot $59,779, 24h −2.06%, 24h H/L $61,931 / $58,030, qVol $18.12B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-26 00:00Z snapshot</td>
                  <td className="dn-flag">
                    fresh (~6 min before anchor) · Deribit idx $59,807 ($50 below
                    parquet spot $59,857) · 1,038 instruments (+112 vs 06-25) · net GEX{' '}
                    <b>−87.5M</b> (net SHORT gamma, <b>DEEPENED</b> from −73.9M on
                    06-25, −64.4M on 06-24) · flip $62,074 (spot −3.57% BELOW, a fourth
                    night below, the gap widened) · the dominant chunk is the 26JUN26
                    monthly <b>−74.71M</b>, now 0.3 DTE (DEEPENED from −69.70M on 06-25)
                    and settling TODAY (~08:00Z) · spot $59,857 has fallen below the $60k
                    −60.78M wall, which is now OVERHEAD, with the $58k −21.04M and $59k
                    −16.68M walls beneath
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-26 00:00Z
                  </td>
                  <td className="dn-flag">fresh · 7d 1h bars · 22 assets · 167 rows · regime NORMAL (mean |r| 0.287, RE-COUPLED from 0.243 on 06-25 — crossed back above the 0.25 idiosyncratic threshold as the broad risk complex sold off together)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-25 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.85h render lag · the FRED Tier-1 daily series printed fresh deltas
                    and carry <b>no stale flag</b> this cut: 10Y 4.50% → <b>4.41%</b>{' '}
                    (−9.0bp, eased HARD — flight-to-quality, now 12bp from the gate), TIPS
                    2.29% → <b>2.23%</b> (−6.0bp, still EXTREME RISK-OFF), HY OAS 2.71% →{' '}
                    <b>2.76%</b> (+5.0bp, RISK-ON on z but widened to just 2bp from its
                    gate) · MOVE bond vol <b>69.1</b> (+3.67 day, loose) · DXY{' '}
                    <b>101.44</b> (−0.17 day, EXTREME RISK-OFF) and USD/JPY{' '}
                    <b>161.79</b> (+0.03) BOTH printed fresh deltas this cut (not
                    byte-identical to 06-25), so the FX legs refreshed · Fed net liq
                    $5.812T · NFCI neutral (weekly) · WTI $78.9 (fresh daily this cut)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-26 00:06Z (close $59,857)</td>
                  <td className="dn-flag">
                    fresh kline (exchange OHLC, independent of the frozen live tape) ·
                    offsets recomputed vs the parquet last-bar close, the freshest
                    available spot while the live tape is frozen · the displayed weekly
                    ladder uses the 2023→ subset (183 weekly bars), so no W-SMA200 row;
                    the 200W floor is recomputed directly from the full-history glob —
                    355 completed weekly W-MON bars (2019→present), excluding the
                    in-progress 06-29 week — = <b>$62,443</b>, unchanged vs the $62,443
                    the 06-25 note pinned (a slow weekly SMA, ~$250/wk). <b>Spot is now
                    −4.14% BELOW the floor and every MA on the matrix is overhead — no
                    positive offset, the second such cut of the lineage</b> · weekly_200sma.json
                    absent this cut, so the ratio percentile / last-event stay unsourced,
                    not fabricated
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
              <span className="dn-v bear">−7.24% (STALE · 06-17 06:43Z · 209.4h)</span>
              <span className="dn-src">live_db raw funding −0.006608 × 1095 = −7.24% ann (NOT ×100) · LAST-KNOWN at the 06-17 06:43Z freeze, now 209.4h stale, not a current read · byte-for-byte the same frozen row carried by the 06-19 → 06-25 notes; the last-available ann over the 24h+1m inclusive sampled window ending at the freeze (1,442 rows) was mean +0.20%, range −7.24% / +7.21%, 819 / 1,442 rows negative — a balanced, two-sided book at the point the tape died</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · vs 06-25</span>
              <span className="dn-v">tape frozen — not computable</span>
              <span className="dn-src">the live tape has not written since 06-17 06:43Z, so there is still no current funding to difference against the 06-25 note · last-known print at the freeze was −7.24% ann (shorts paying longs); the leverage gate remains un-assessable a tenth day running</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC (−0.45%) · STALE window</span>
              <span className="dn-src">live_db oi_btc 102,945 at the 06-17 06:43Z freeze vs the start of a 24h+1m inclusive sampled window (1,442 rows) · the window ENDS at the freeze, NOT into the 00:06Z snapshot — it describes the tape up to 06-17 06:43Z and is 209.4h out of date</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` at the 06-17 06:43Z freeze (was 58.29% at the start of the 24h+1m inclusive sampled window — a +1.18pt long add into the roll-over) · last-known, 209.4h stale</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED DEAD ~334.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · this triple has been byte-for-byte constant since 2026-06-12 01:36Z (~334.5h / ~13.94 days) — it is a FROZEN value, NOT a current positioning read; carried only to mark the dead feed</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">NON-COMPUTABLE</span>
              <span className="dn-src">SM feed frozen ~13.94 days · |Δ| / prior_net cannot be computed — there is no current SM net to difference · the squeeze-cycle / re-stack framework is blind this cut, a continuation of the 06-16 → 06-25 ON-HOLD</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">47.4% / 43.20%</span>
              <span className="dn-src">GEX median IV across 1,038 instruments (00:00Z, fresh) vs 30D close-to-close RV 43.20% off parquet — chain richness only ~+4.2pt, modestly rich to realised; RV stays elevated (was 43.13% on 06-25, 24.91% on 05-31) · IV is a chain-median across 1,038 instruments, NOT a tradable spread</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−3.57% (below)</span>
              <span className="dn-src">flip $62,074 (was $63,067 · slipped −$993) · vs parquet spot $59,857 (59,857.4 / 62,074 − 1 = −3.571%) / GEX file Deribit idx $59,807 (59,807 / 62,074 − 1 = −3.652%, file reads −3.7%) — both references BELOW the flip a fourth night, the gap widened from −3.15% on 06-25 · net GEX −87.5M (net SHORT gamma, DEEPENED from −73.9M) · the 26JUN26 monthly −74.71M deepened, 0.3 DTE, settles today</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The break the 06-25 note fired has now extended: the 200W floor broke on a
                second consecutive daily close. The 06-25 daily bar finalized at $59,772 —
                −4.28% below the $62,443 floor, deeper than the 06-24 close $61,051 — so for
                the second day running a daily close has settled beneath the line, spot has
                accelerated below $60k, every MA on the matrix is overhead, the dealer book
                deepened again to −87.5M net-short-gamma as the 26JUN −74.71M monthly settles
                TODAY 0.3 DTE, and the correlation regime re-coupled to NORMAL as the whole
                risk complex sold off together — all of it still read through a dead
                derivatives tape, a tenth day running
              </span>. Spot prints{' '}
              <span className="dn-tag bear">$59,857, −2.00% on 24h</span> at the 00:06Z
              parquet bar (the MTF scan reads −2.06% on its own window), down from the
              06-25 note spot $61,080, and the break that fired on the daily close one cut
              ago has now extended rather than reversed.
              The single structural positive the lineage carried — the 200W weekly-close
              hold — remains at its decision point: the 22JUN weekly close $63,990 (+2.48%
              above the floor) still stands as the last resolved weekly print, but the
              daily closes have now walked two consecutive settles below it (06-24 $61,051
              −2.23%, <span className="dn-tag bear">06-25 $59,772 −4.28%</span>), and the
              in-progress 06-29 week reads{' '}
              <span className="dn-tag bear">$59,857, −4.14% below the floor</span> (was
              −2.18% on 06-25), so the weekly-close escalation is now pending into the
              06-29 settle and going the wrong way. Spot holds no MA beneath it for the
              second cut running — D-SMA20 $63,228 (−5.33%) and the 200W floor $62,443
              (−4.14%) are both overhead, the nearest lines on the matrix. The dealer book{' '}
              <span className="dn-tag bear">deepened −73.9M → −87.5M net-short-gamma</span>{' '}
              as the 26JUN26 monthly thickened{' '}
              <span className="dn-tag bear">−69.70M → −74.71M (0.3 DTE, settles ~08:00Z
              today)</span> and spot fell below the $60k −60.78M wall, which is now overhead.
              MTF stayed at{' '}
              <span className="dn-tag bear">1 bull / 9 bear / 0 neutral</span> but
              deteriorated internally: a fresh 1d water-down death cross just printed to join
              the 1w death cross, and the only constructive print is an 8h TD9 buy (oversold
              hint) plus an unconfirmed 1h below-water golden cross (DIF −450.4). Macro turned
              decisively risk-off this cut: 10Y eased hard −9bp to 4.41% (flight-to-quality),
              HY OAS widened 5bp to 2.76% (now 2bp from its gate), DXY held EXTREME RISK-OFF.{' '}
              <span className="dn-em">
                The operational fact is unchanged and still binding: the OKX monitor has now
                been frozen 209.4h (last row 2026-06-17 06:43Z), funding / OI / CVD / basis /
                retail are last-known and stale, and the SM positioning book has been dead
                ~13.94 days — SM net and the cut-fraction are non-computable. The desk cannot
                see whether the acceleration below the floor was distribution or thin drift.
                The read is on price, gamma and MTF alone.
              </span>{' '}
              The book stays flat: the daily-close break has extended to a second close and
              the move below $60k confirms direction, but the weekly-close escalation has not
              yet confirmed, every read worsened, the book is pressed below the 200W line with
              a deepening short-gamma amplifier settling today, on a positioning-blind tape —
              no scout and no short can be sized here.
            </p>

            <p>
              BTC prints <span className="dn-tag">$59,857</span> at the parquet last bar
              (00:06Z),{' '}
              <span className="dn-tag bear">−2.00%</span> on 24h (vs the $61,080 bar exactly
              24h prior — the 06-25 00:06Z parquet bar, the same series that anchored the
              06-25 note&rsquo;s $61,080 spot; the MTF scan reads −2.06% on its own 00:01Z
              window — the spread is the reference window, not a data conflict), inside a{' '}
              <span className="dn-tag">$61,931 / $58,030</span> 24h range (per the MTF scan
              H/L). The Deribit index reads $59,807 at 00:00Z and the MTF scan spot is
              $59,779 — so the freshest spot is well-corroborated across three independent
              fresh sources (parquet kline $59,857, GEX Deribit index $59,807, MTF scan
              $59,779), even though the live_db tape that normally supplies it is frozen at
              $65,616 (06-17 06:43Z, 209.4h stale).{' '}
              <span className="dn-signal">The structural read has moved from a floor broken
              on a single daily close to a floor broken on two consecutive daily closes with
              spot accelerated below $60k, the weekly-close escalation pending and going the
              wrong way</span>: the 22JUN weekly close $63,990 (+2.48% above) is still the
              last resolved weekly hold, but the daily closes have walked down through and
              away from the line (06-22 $63,990, 06-23 $62,697, 06-24 $61,051, 06-25
              $59,772). Per the framework, a daily close below is the early warning and a
              sustained weekly close below is the escalation that breaks the floor and
              falsifies the 06-15 reclaim thesis; the in-progress 06-29 week reads $59,857
              (−4.14% below), so the escalation is pending the 06-29 settle and deteriorating,
              not yet confirmed.{' '}
              <span className="dn-em">
                The one structural positive of the lineage is now broken at the daily-close
                level on two consecutive closes and pending escalation at the weekly close;
                spot holds no MA beneath it, the dealer amplifier deepened into a 0.3-DTE opex
                settling today, and the desk still cannot read the tape that would say whether
                the line is being lost on distribution or thin drift.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · LIVE TAPE FROZEN 209.4h (tenth day) · SM book dead ~13.94 days · funding/OI/flow last-known stale · the desk cannot see how the acceleration below the 200W floor was absorbed</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important source of this note — the live derivatives tape —
                is still down, a tenth day running
              </span>. The OKX monitor has appended no row to live_db.json since{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> (t = &ldquo;06-17
              14:43&rdquo; BJ; the file mtime 06-17 06:43:08Z confirms the write stopped
              there; the process status is not archived or verified in this cut, so the note
              asserts the missing tape, not a live/hung process). That is now{' '}
              <span className="dn-tag bear">209.4h of missing tape</span> against the 00:06Z
              snapshot anchor — the 06-20 note flagged it at 65.4h, the 06-24 note at 161.4h,
              the 06-25 note at 185.4h, and the outage has run another ~24h without a write.
              Everything the live tape carries — funding, open interest, spot/futures CVD,
              perp basis, retail long%, taker-net, big-print flow, aggressor skew — is
              therefore{' '}
              <span className="dn-em">last-known at 06-17 06:43Z and not current</span>. The
              smart-money positioning triple (long_btc / short_btc / net_btc) has been
              byte-for-byte constant —{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> — since{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>, ~334.5h (~13.94 days).
              The 06-16 note flagged this dead feed at ~94.5h and put the squeeze-cycle ON
              HOLD; the 06-24 note carried it at ~286.5h, the 06-25 note at ~310.5h; today it
              is ~334.5h and still dead.{' '}
              <span className="dn-em">
                SM net is non-computable as a current read, and the SM cut fraction (|Δ| /
                prior_net) cannot be formed — there is no current SM net to difference. Any
                positioning claim in this note is explicitly historical, not live.
              </span>
            </p>

            <p>
              For completeness, the <em>last-available</em> tape readings — all pinned to
              the 06-17 06:43Z freeze and now 209.4h out of date, and byte-for-byte the same
              readings the 06-19 → 06-25 notes carried because it is the same frozen row —
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
                Read this as a near-fourteen-day-old fingerprint, not a signal: a two-sided
                funding book, OI bleeding, retail adding longs into the first leg of
                weakness. None of it can be carried forward to the 00:06Z snapshot — and it
                predates the entire 06-18 → 06-22 floor-hold sequence AND the 06-23 → 06-25
                leg that closed below the floor twice and accelerated under $60k, so it says
                nothing about how positioning absorbed the break. The desk treats the
                positioning dimension as unknown, and the acceleration below the floor as
                positioning-unconfirmed.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure <span className="dn-roman">II · price/MTF FRESH · multi-TF resonance bearish 1 bull / 9 bear / 0 neutral · mid+high frames all bearish, a fresh 1d water-down death cross joined the 1w · only constructive prints an 8h TD9 buy (oversold hint) and an unconfirmed 1h water-down golden cross 1 bar ago (DIF −450.4) · regime 5/9 reversal (mean-reversion) · spot below every MA, the whole ladder overhead, the 200W floor $62,443 broke on a second daily close (06-25 $59,772), spot −4.14% below</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map is fresh, held at fully bearish across the mid and high frames,
                and deteriorated internally as a fresh 1d death cross printed beneath the 1w
                — the only constructive prints are an 8h TD9 buy and an unconfirmed 1h
                below-water golden cross
              </span> — the one dimension, with the dealer map, the desk can still trust
              today. The 00:01Z scan tags{' '}
              <span className="dn-tag bear">1 bull / 9 bear / 0 neutral across 10 frames</span>,
              net read <em>multi-TF resonance bearish · sell the bounce</em> — the same
              headline 1/9/0 as the 06-25 scan but a step worse internally as the 1d frame
              rolled to a fresh death cross. The regime line reads{' '}
              <span className="dn-tag">5/9 reversal regime (JT&lt;0) — mean-reversion /
              bounce-favoured, trend-follow with caution</span> (was 6/9 on 06-25), so the
              classifier eased its mean-reversion lean by one frame — and the engine carries
              no confirmed constructive trigger to act on it. The lone bull frame is the{' '}
              <span className="dn-tag">1M (above cloud)</span>; the lone constructive cross is
              a <span className="dn-tag">1h water-down golden cross 1 bar ago</span> (close
              $59,796, DIF −450.4 — an early below-water probe, bearish-to-bullish but
              unconfirmed, not a TD buy). The down side is heavy: the{' '}
              <span className="dn-tag bear">4h, 8h, 12h, 1d and 1w all carry water-down death
              crosses</span>, with the{' '}
              <span className="dn-tag bear">1d water-down death cross fresh (just printed, DIF
              −2,307.5)</span> joining the{' '}
              <span className="dn-tag bear">1w water-down death cross (just printed, DIF
              −5,860.4)</span>. Cloud: every frame 15m→1w is below or in-cloud (15m in-cloud);
              only the 1M holds above. The thin constructive set is the{' '}
              <span className="dn-tag bull">8h TD9 buy (printed $59,796, oversold reversal
              hint), plus 12h TD8 and 1M TD8 buys — each one more close</span> and the bottom
              hints from the regime lean.{' '}
              <span className="dn-em">
                Straight read: the frame stack held fully bearish, every mid and high frame is
                on a death cross, and a fresh 1d death cross just printed beneath the 1w. The
                engine&rsquo;s only constructive prints are an 8h TD9 buy (an oversold hint,
                last bar may be in-progress) and an unconfirmed 1h below-water golden cross.
                The regime classifier still says mean-reversion, but there is no confirmed
                engine print to trade it long; the dominant tape read is the twin 1d/1w death
                crosses, the absent MA support, and the second close below the 200W floor.
                This is a bearish trend frame whose oversold-bounce setup has no confirmed
                trigger.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">59,797</td><td className="num">50.6</td><td className="bull">golden (water-dn) 31b</td><td className="neut">in cloud 59.7k–60.0k 2b</td><td>Buy 2</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">59,796</td><td className="num bear">47.3</td><td className="bull">golden (water-dn) 8b</td><td className="bear">below ↑61.1k 21b</td><td>Sell 1</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>1h</td><td className="num">59,796</td><td className="num bear">44.2</td><td className="bull">golden (water-dn) 1b</td><td className="bear">below ↑60.7k 68b</td><td>Sell 5</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">59,796</td><td className="num bear">35.7</td><td className="bear">death (water-dn) 17b</td><td className="bear">below ↑64.1k 17b</td><td>Buy 4</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">59,796</td><td className="num bear">35.0</td><td className="bear">death (water-dn) 9b</td><td className="bear">below ↑64.7k 8b</td><td>TD9 BUY</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">59,782</td><td className="num bear">31.0</td><td className="bear">death (water-dn) 5b</td><td className="bear">below ↑64.6k 69b</td><td>Buy 8 → 9?</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">59,782</td><td className="num bear">30.6</td><td className="bear">death (water-dn) 刚印 (just printed)</td><td className="bear">below ↑76.4k 25b</td><td>Buy 4</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">59,779</td><td className="num bear">33.3</td><td className="neut">—</td><td className="bear">below ↑73.0k 8b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">59,779</td><td className="num bear">33.0</td><td className="bear">death (water-dn) 刚印 (just printed)</td><td className="bear">below ↑100.3k 21b</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">59,779</td><td className="num">41.2</td><td className="neut">—</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (08:01 Beijing; rolling latest
                    file, archived verbatim at
                    /opt/desk-note/snapshots/2026-06-26-0006/). Net read{' '}
                    <em>multi-TF resonance bearish · sell the bounce (1 bull / 9 bear / 0
                    neutral)</em>; regime <em>5/9 reversal regime (JT&lt;0, mean-reversion /
                    bounce-favoured, trend-follow with caution)</em>; reversal divergences{' '}
                    <em>top div 30m / 1h / 4h</em>. Header alerts:{' '}
                    <em>1d water-down death cross (just printed, DIF −2,307.5)</em>,{' '}
                    <em>1w water-down death cross (just printed, DIF −5,860.4)</em>,{' '}
                    <em>1h water-down golden cross (1 bar ago, DIF −450.4, early below-water
                    probe)</em>, <em>8h TD9 Buy printed $59,796 (oversold reversal hint, last
                    bar may be in-progress)</em>, <em>12h TD8 Buy — one more close</em>,{' '}
                    <em>1M TD8 Buy — one more close</em>. Scan spot $59,779, 24h −2.06%, 24h
                    H/L $61,931 / $58,030, qVol $18.12B. Closes are in-progress bars; treat
                    every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is the same deep overhead wall as 06-25, and spot has slipped
              further below the 200W floor, so for the second cut in the lineage{' '}
              <span className="dn-tag bear">every line on the matrix is overhead — there is no
              positive offset, no MA beneath spot</span>. $59,857 sits{' '}
              <span className="dn-tag bear">−4.14% below the full-history W-SMA200 200W floor
              $62,443</span> — the nearest line, now firmly overhead (was −2.18% on 06-25) —
              and{' '}
              <span className="dn-tag bear">−5.33% below D-SMA20 $63,228</span>, the next line
              up. Above those, the cycle-proxy{' '}
              <span className="dn-tag bear">D-EMA20 $63,802 (−6.18%)</span>, then{' '}
              <span className="dn-tag bear">W-EMA200 $67,506 (−11.33%)</span>, then{' '}
              <span className="dn-tag bear">D-EMA50 $67,831 (−11.76%)</span>, then a dense
              overhead band: <span className="dn-tag bear">D-SMA50 $70,257 (−14.80%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $70,992 (−15.68%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $71,215 (−15.95%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $71,324 (−16.08%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $71,733 (−16.56%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $73,122 (−18.14%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,024 (−19.14%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $74,217 (−19.35%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $75,656 (−20.88%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $76,006 (−21.25%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $77,018 (−22.28%)</span>. Far above and
              disused: W-EMA100 $80,550 (−25.69%), W-EMA50 $81,767 (−26.79%), W-SMA100
              $88,457 (−32.33%), W-SMA50 $89,789 (−33.34%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-26 00:06Z (close $59,857.40);
                offsets recomputed against that same last-bar close, which is the freshest
                available spot while the live tape is frozen. Displayed MA levels are
                $-rounded; offsets computed from exact series values. The displayed weekly
                ladder uses the 2023→ subset (183 weekly bars), so W-SMA200 is non-computable
                there and W-EMA200 $67,506 seeds from available history; the 200W floor
                $62,443 is recomputed separately from the full-history glob (355 completed
                weekly W-MON bars, excluding the in-progress 06-29 week). Daily closes: 06-19
                $63,513, 06-20 $64,270, 06-21 $63,287, 06-22 $63,990 (= the 22JUN weekly
                close), 06-23 $62,697, 06-24 $61,051 (first close below the floor), 06-25
                $59,772 (second close below, −4.28%), 06-26 (in-progress, 5-min bar) $59,857 —
                the floor break has extended to a second consecutive daily close, the
                in-progress 06-26 bar holds −4.14% below, and all 1,440 of the last 24h 1-min
                closes printed below the floor (was 703 / 1,441 on 06-25).
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DEEPENED net-short-gamma aggregate −87.5M (was −73.9M on 06-25, −64.4M on 06-24) · 26JUN26 monthly DEEPENED to −74.71M (0.3 DTE, settles ~08:00Z today) · spot fell DEEPER below the flip $62,074 (−3.57%) and below the $60k −60.78M wall, now OVERHEAD · the re-amplification of 06-23→06-25 extended a fourth night into opex</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book&rsquo;s re-amplification extended a fourth night: aggregate
                gamma deepened from −73.9M to −87.5M net-short-gamma as opex closed to 0.3 DTE
                and spot fell below the heaviest put wall
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bear">−87.5M / 1%</span> (was −73.9M on 06-25, −64.4M
              on 06-24, −35.1M on 06-23); the book is more net-short-gamma than at any point
              of the recent leg. The 0-γ flip slipped{' '}
              <span className="dn-tag">$63,067 → $62,074 (−$993)</span>, and spot $59,857
              sits <span className="dn-tag bear">−3.57% below the flip</span> on
              spot-denominated math (59,857.40 / 62,074 − 1 = −3.571%); the GEX file&rsquo;s
              own &ldquo;dist to flip&rdquo; reads −3.7% off its Deribit-index $59,807 ($50
              below parquet spot), which is <span className="dn-tag bear">−3.65%</span>
              (59,807 / 62,074 − 1 = −3.652%) — both references below the flip a fourth night,
              the gap to the flip widened from −3.15% on 06-25. The wall map is put-heavy at
              and below spot: <span className="dn-tag bear">$60k −60.78M</span> (heaviest
              wall, DEEPENED from −37.06M on 06-25, now just ABOVE spot as the cluster
              ceiling),{' '}
              <span className="dn-tag bear">$58k −21.04M</span>,{' '}
              <span className="dn-tag bear">$59k −16.68M</span> (both just below spot),{' '}
              <span className="dn-tag bear">$55k −10.10M</span>,{' '}
              <span className="dn-tag bear">$56k −7.63M</span>,{' '}
              <span className="dn-tag bear">$61k −7.30M</span>,{' '}
              <span className="dn-tag bear">$50k −6.81M</span>,{' '}
              <span className="dn-tag bull">$80k +6.71M</span>,{' '}
              <span className="dn-tag bull">$65k +5.12M</span>,{' '}
              <span className="dn-tag bull">$67k +4.87M</span>.{' '}
              <span className="dn-em">
                The listed major walls from $55k–$61k total roughly −123M and now sit AT and
                below spot — spot at $59,857 has fallen through the $60k −60.78M wall, which
                deepened and flipped from just-below to just-above as a cluster ceiling, with
                the $58k −21.04M and $59k −16.68M walls beneath. A dealer book this short
                gamma right at spot amplifies the next move in either direction rather than
                dampening it. The positive walls ($65k, $67k, $80k) all sit far overhead and
                offer no support beneath spot; the only structure below is the $58k put wall,
                which is a magnet, not a floor.
              </span>{' '}
              By expiry the concentration is the 26JUN26 monthly{' '}
              <span className="dn-tag bear">−74.71M (0.3 DTE)</span> — DEEPENED from −69.70M
              on 06-25 and −61.89M on 06-24, the monthly amplifier re-thickened again and now
              settles TODAY (~08:00Z). The near strip beyond it is small: 27JUN26 1.3{' '}
              <span className="dn-tag bear">−4.05M</span>, 28JUN26 2.3 −0.34M, with the
              29JUN26 3.3 the first positive at +0.62M. Forward of the monthly the strip is
              small and mixed — 3JUL26 7.3 is still negative at −6.45M —
              then mostly positive: 10JUL26 14.3 −0.67M, 31JUL26 35.3{' '}
              <span className="dn-tag bull">+1.96M</span>, 28AUG26 63.3 +1.45M, 25SEP26 91.3
              −4.86M, 25DEC26 182.3 −0.40M, 26MAR27 273.3 +0.28M, 25JUN27 364.3 +0.38M. No
              forward expiry carries the 26JUN weight — the entire concentrated
              downside-amplifier risk is the one monthly chunk, 0.3 DTE, and it has deepened
              rather than decayed into opex, settling today. (The spot-referenced aggregate
              −87.5M is the net GEX at spot; the by-expiry rows are an independent
              decomposition and need not sum to it.)
            </p>

            <p>
              IV median across 1,038 instruments is{' '}
              <span className="dn-tag">47.4%</span> (firmed from 46.8% / 926 instruments on
              06-25) against 30D close-to-close RV of{' '}
              <span className="dn-tag">43.20%</span> — chain-level richness{' '}
              <span className="dn-tag">~+4.2pt</span>, modestly rich to realised, with RV
              staying elevated (43.20% today vs 43.13% on 06-25 and 24.91% on 05-31 — the
              high-vol regime that started with the 06-08 → 06-18 down-leg persists). A
              chain-median across 1,038 instruments, <span className="dn-em">not</span> a
              tradable spread; expiry-/strike-level vega, skew and term structure remain not
              loaded; the vol read stays framework-only. RV methodology: 30D close-to-close,
              logret.std × √365 × 100 on the last 30 daily log returns (= 31 consecutive
              daily closes) anchored to parquet last bar 2026-06-26 00:06Z; underlying close
              window range $59,772 – $74,418. (For reference, the last 29 returns / 30 closes
              reads 43.94%; the 43.20% page value comes from 30 returns.) P/C ratio 0.59,
              Call OI 295,924 / Put OI 174,923 BTC.
            </p>

            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · render fresh (~1.85h), Tier-1 daily printed fresh deltas with NO stale flag — 10Y 4.41% (−9bp, eased HARD, flight-to-quality, now 12bp from the gate), TIPS 2.23% (−6bp) EXTREME RISK-OFF, HY OAS 2.76% (+5bp, widened to just 2bp from its gate), DXY 101.44 (−0.17, EXTREME RISK-OFF, FX refreshed this cut) · the whole risk complex sold off together, regime RE-COUPLED to NORMAL, lag to NQ −2.08pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro panel render is fresh (~1.85h), the Tier-1 daily series printed
                fresh deltas with no stale flag, and the read turned decisively risk-off this
                cut — rates rallied hard (flight-to-quality), credit crept to the edge of its
                gate, and the dollar stayed pinned at the EXTREME RISK-OFF level
              </span>. Dashboard render is 2026-06-25 22:15Z, ~1.85h before the snapshot. US
              10Y nominal <span className="dn-tag bull">4.41% (−9.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.09</span> — tight regime, RISK-OFF, eased 9bp
              off 06-25&rsquo;s 4.50%, a hard flight-to-quality move that backed the rates
              re-grow leg well off (now 12bp from the 4.53% gate). 10Y TIPS real{' '}
              <span className="dn-tag bull">2.23% (−6.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.54</span> — eased 6bp but still EXTREME
              RISK-OFF, among the tightest lines on the panel. 5Y5Y BE inflation{' '}
              <span className="dn-tag bull">2.17% (−1.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag bull">2.18% (−3.0bp)</span> — inflation expectations
              soft, both episodic. HY OAS{' '}
              <span className="dn-tag bear">2.76% (+5.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−0.89</span> — credit still loose (RISK-ON on the
              z-regime) but the spread widened 5bp on the day, narrowing the distance to its
              2.78% re-grow gate to just 2bp, the closest the gate has come to firing. MOVE
              bond vol is <span className="dn-tag">69.1</span> — +3.67 on the day per the
              source, still &ldquo;loose.&rdquo; The dollar held its EXTREME level: DXY{' '}
              <span className="dn-tag bear">101.44 (−0.17 day)</span>, regime z{' '}
              <span className="dn-tag bear">+2.90</span>, episodic z +2.12 — and unlike the
              06-25 render the level, delta and z all printed fresh this cut, so the FX legs
              refreshed (not a byte-identical stale-carry). Fed net liquidity{' '}
              <span className="dn-tag bear">$5.812T (−0.037T)</span>, regime z{' '}
              <span className="dn-tag bear">−1.16</span>, episodic z{' '}
              <span className="dn-tag bear">−2.43</span> — the |episodic z| &gt; 1.5
              day-change surprise the dashboard flags. USD/JPY{' '}
              <span className="dn-tag">161.79 (+0.03 day)</span>, regime z +1.56, episodic
              +1.83 — also a fresh delta this cut; US-JP 10Y spread{' '}
              <span className="dn-tag bull">1.76% (−9.0bp)</span> narrowed as the 10Y fell;
              USD/CNY <span className="dn-tag">6.8101 (+0.02)</span>; WTI{' '}
              <span className="dn-tag">$78.9 (−1.4, fresh daily this cut)</span>.{' '}
              <span className="dn-em">
                Net: the macro backdrop turned genuinely risk-off this cut — the 10Y rallied
                9bp (flight-to-quality), credit widened 5bp to just 2bp from its gate, and the
                dollar held EXTREME, all while the equity complex sold off (see cross-asset).
                The two re-grow legs split harder: the rates leg backed well off (12bp away)
                while the credit leg crept to the edge (2bp away, now by far the closer). The
                reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE at 4.41% with more room.
                The macro read now reinforces rather than refutes the break of the 200W floor —
                it is a broad-risk-off impulse that BTC fell into, not the idiosyncratic-crypto
                read of 06-25.
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
                <tr><td>US 10Y nominal</td><td className="num">4.41%</td><td className="num bull">−9.0bp</td><td className="num bear">+1.09</td><td className="bear">tight · RISK-OFF · flight-to-quality, 12bp from gate</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.23%</td><td className="num bull">−6.0bp</td><td className="num bear">+2.54</td><td className="bear">eased · still EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.17%</td><td className="num bull">−1.0bp</td><td className="num">−0.81</td><td className="neut">soft · episodic</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.18%</td><td className="num bull">−3.0bp</td><td className="num">−2.39</td><td className="neut">soft · episodic</td></tr>
                <tr><td>HY OAS</td><td className="num">2.76%</td><td className="num bear">+5.0bp</td><td className="num bull">−0.89</td><td className="bull">loose · widened to just 2bp from gate</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.516</td><td className="num">−0.00</td><td className="num">−0.07</td><td className="stale">weekly · neutral</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">69.1</td><td className="num bear">+3.67</td><td className="num bull">−0.60</td><td className="bull">loose · up on the day</td></tr>
                <tr><td>DXY</td><td className="num">101.44</td><td className="num bull">−0.17</td><td className="num bear">+2.90</td><td className="bear">EXTREME RISK-OFF · FX refreshed this cut</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.812T</td><td className="num bear">−0.037T</td><td className="num bear">−1.16</td><td className="bear">drained · episodic −2.43</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.79</td><td className="num">+0.03</td><td className="num bear">+1.56</td><td className="bear">firm · FX refreshed this cut</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.76%</td><td className="num bull">−9.0bp</td><td className="num bull">−1.23</td><td className="neut">narrowed</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.8101</td><td className="num">+0.02</td><td className="num bull">−1.31</td><td className="neut">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.287</span> — tightened from the
              0.243 of 06-25 and now <span className="dn-tag">crossed back above the 0.25
              idiosyncratic threshold</span>, so the regime line flipped from IDIOSYNCRATIC
              back to <span className="dn-signal">NORMAL — BTC is re-coupling to the broad
              cross-asset complex as the whole risk tape sold off together</span>, with its
              top ties the equity / industrial-metal cluster: NQ{' '}
              <span className="dn-tag">+0.794</span>, NVDA{' '}
              <span className="dn-tag">+0.761</span>, SP500{' '}
              <span className="dn-tag">+0.713</span>, JP225{' '}
              <span className="dn-tag">+0.595</span>, COPPER{' '}
              <span className="dn-tag">+0.550</span>, TSLA{' '}
              <span className="dn-tag">+0.504</span>, AAPL{' '}
              <span className="dn-tag">+0.489</span>, URNM{' '}
              <span className="dn-tag">+0.443</span>, META{' '}
              <span className="dn-tag">+0.432</span>, with CL{' '}
              <span className="dn-tag">−0.164</span> / BRENT{' '}
              <span className="dn-tag">−0.169</span> inverse and GOLD a weak{' '}
              <span className="dn-tag">+0.212</span>. 7d performance has the broad risk complex
              red and BTC still the laggard, but by a narrower gap than 06-25:{' '}
              <span className="dn-tag bear">BTC −5.12%</span>, NQ{' '}
              <span className="dn-tag bear">−3.04%</span>, SP500{' '}
              <span className="dn-tag bear">−1.80%</span>, JP225{' '}
              <span className="dn-tag bear">−1.15%</span>, NVDA{' '}
              <span className="dn-tag bear">−7.23%</span>, META{' '}
              <span className="dn-tag bear">−5.09%</span>, AAPL{' '}
              <span className="dn-tag bear">−7.12%</span>, MSFT{' '}
              <span className="dn-tag bear">−6.48%</span>, GOOGL{' '}
              <span className="dn-tag bear">−6.36%</span>, AMZN{' '}
              <span className="dn-tag bear">−6.37%</span>, TSLA{' '}
              <span className="dn-tag bear">−5.84%</span>; metals lower (GOLD{' '}
              <span className="dn-tag bear">−4.13%</span>, SILVER{' '}
              <span className="dn-tag bear">−11.73%</span>, PLAT{' '}
              <span className="dn-tag bear">−5.28%</span>, PALL{' '}
              <span className="dn-tag bear">−7.29%</span>, COPPER{' '}
              <span className="dn-tag bear">−5.07%</span>); crude down, NGAS slightly positive (CL{' '}
              <span className="dn-tag bear">−4.83%</span>, BRENT{' '}
              <span className="dn-tag bear">−4.57%</span>, NGAS{' '}
              <span className="dn-tag bull">+0.23%</span>).{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d return −5.12% vs NQ −3.04% is a lag of −2.08pt (was −4.31pt on
                06-25) — the gap roughly halved, and the character shifted the opposite way
                from 06-25: equities are no longer flat-to-modestly-red while BTC falls alone;
                this cut the whole complex sold off hard (NQ −3.04%, NVDA −7.23%, the Mag7 all
                −5% to −7%, metals down and crude down with NGAS the lone green), so BTC&rsquo;s decline is now embedded in
                a broad risk-off move rather than standing out as idiosyncratic. That is what
                tipped the correlation regime back to NORMAL. The endogenous-to-crypto read of
                06-25 has weakened: the second close below the 200W floor coincided with a
                macro flight-to-quality (10Y −9bp, credit widening, DXY EXTREME) and a
                broad-beta equity drawdown, so the break is now as much a risk-off-tape event
                as a BTC-specific one.
              </span>{' '}
              JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book <span className="dn-roman">V · book FLAT · 200W floor — DAILY-CLOSE BREAK EXTENDED to a SECOND consecutive close (06-25 $59,772 &lt; $62,443, after 06-24 $61,051), weekly-close escalation PENDING (06-29 in-progress reads −4.14% below) · scout STILL stood down (spot −3.57% below the flip, no MA support, tape blind, book deepened short-gamma, only an 8h TD9 oversold hint) · macro tail mixed (10Y eased to 12bp, OAS widened to just 2bp) · squeeze-cycle ON HOLD (SM dead ~13.94 days)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — the cycle floor&rsquo;s daily-close break
                has extended to a second consecutive close and spot accelerated below $60k,
                the weekly-close escalation is pending and deteriorating, every other read
                worsened, and the binding constraint is still data integrity
              </span>. The structural positive of the lineage broke at the daily-close level
              again this cut: the 06-25 daily bar closed $59,772, −4.28% below the $62,443
              floor, the second consecutive daily close beneath the line after 06-24&rsquo;s
              $61,051. Per the framework that is the early warning confirmed on repetition,
              not yet the full break — the break is a sustained weekly close below, and the
              in-progress 06-29 week reads $59,857 (−4.14% below), so the escalation is
              pending the 06-29 settle and moving the wrong way. The 22JUN weekly close
              $63,990 (+2.48% above) is still the last resolved weekly hold, so the 200W
              reclaim thesis is not yet falsified, but it is one weekly close from dying. The
              scout still cannot be taken: spot is −3.57% below the flip (deeper than
              06-25&rsquo;s −3.15%) with no MA beneath it, the positioning legs (SM short
              bleed, funding posture, cover-flow) all require a live tape and there is none
              for a tenth day, the dealer book deepened to −87.5M net-short-gamma with the
              26JUN monthly −74.71M 0.3 DTE settling today, and the engine carries no confirmed
              constructive trigger — only an 8h TD9 oversold hint and an unconfirmed 1h
              below-water golden cross against twin 1d/1w death crosses. No new short either:
              the daily-close break already extended into a −74.71M monthly that prices the
              concentrated downside, 0.3 DTE and settling today, with stale flow and a blind
              tape — chasing a break that the dealer strip already prices, into opex, is a
              poor entry. The trade book today is: no shorts, no scout, no fresh hedge — fix
              the tape AND watch the 06-29 weekly close vs the floor before re-arming.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch — DAILY-CLOSE BREAK EXTENDED: the 06-25 daily close $59,772 settled −4.28% below the $62,443 floor (a second consecutive close below, after 06-24 $61,051 −2.23%), weekly-close escalation PENDING (06-29 in-progress reads $59,857, −4.14% below); the 22JUN weekly close $63,990 +2.48% above still stands as the last resolved weekly hold</span>
              <div className="dn-trade-name">
                200W cycle floor watch — the daily-close break extended to a second consecutive close and the weekly-close escalation is pending: floor $62,443 = full-history W-SMA200 (355 completed weekly bars, unchanged vs the 06-25 pin), 06-24 daily close $61,051 (−2.23% below), 06-25 daily close $59,772 (−4.28% below), in-progress 06-29 week $59,857 (−4.14% below), all 1,440 last-24h 1-min closes below the floor
              </div>
              <div className="dn-thesis">
                The 06-25 note recorded the first daily close below the floor (06-24 $61,051)
                as the early warning fired. That warning did not reverse — it repeated and
                deepened: the 06-25 daily bar closed{' '}
                <span className="dn-tag bear">$59,772, −4.28% below the $62,443 floor</span>,
                a second consecutive daily close beneath the line, with spot accelerating
                below $60k. Per the framework an intraday wick is not the break, a daily close
                below is the early warning — now confirmed on two consecutive closes — and a
                sustained weekly close below is the escalation that breaks the floor and
                falsifies the 06-15 reclaim thesis. The 22JUN weekly close{' '}
                <span className="dn-tag bull">$63,990, +2.48% above</span> still stands as the
                last resolved weekly hold, so the thesis is not yet dead, but the in-progress
                06-29 week reads{' '}
                <span className="dn-tag bear">$59,857, −4.14% below</span>, so the escalation
                is pending the 06-29 settle and deteriorating.{' '}
                <span className="dn-em">The structural positive of the lineage is broken at
                the daily-close level on two consecutive closes and one weekly close from full
                escalation; spot holds no MA beneath it, and the 06-29 weekly close is now the
                single level that resolves the thesis.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor</span><span className="dn-lvl-v">$62,443 = full-history W-SMA200, recomputed this cut from the 2019→ parquet glob (355 completed weekly W-MON bars, excluding the in-progress 06-29 week); unchanged vs the 06-25 pin (slow weekly SMA, ~$250/wk) · weekly_200sma.json absent so the ratio percentile / last-event stay unsourced, not fabricated</span></div>
                <div><span className="dn-lvl-k">daily-close break — EXTENDED to a second close</span><span className="dn-lvl-v bear">06-24 daily close $61,051 (−2.23% below) and 06-25 daily close $59,772 (−4.28% below) — two consecutive closes beneath the line; all 1,440 of the last 24h 1-min closes printed below the floor and the in-progress 06-26 bar holds −4.14% below</span></div>
                <div><span className="dn-lvl-k">last resolved weekly hold (still stands)</span><span className="dn-lvl-v bull">22JUN weekly close $63,990 +2.48% above the floor still stands — the 200W reclaim thesis is not yet falsified, but it is one weekly close from dying</span></div>
                <div><span className="dn-lvl-k">escalation (next weekly close) — PENDING</span><span className="dn-lvl-v bear">a sustained weekly close &lt; $62,443 breaks the 200W floor and falsifies the 06-15 reclaim thesis — the in-progress 06-29 week reads $59,857 (−4.14% below); this is the level that resolves the thesis at the 06-29 settle</span></div>
                <div><span className="dn-lvl-k">reclaim side (deeper below)</span><span className="dn-lvl-v bear">spot is −3.57% below the flip $62,074, −4.14% below the 200W floor $62,443, and −5.33% below D-SMA20 $63,228 — no MA beneath spot; the flip has slipped below the floor, so a reclaim is a daily close back above the flip $62,074 then the floor $62,443 then D-SMA20 $63,228 — NOT a scout trigger on a blind tape (see scout)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework, not a trade.</b> The floor watch is the single load-bearing
                live level while everything else is stale or framework-only. The daily-close
                break has extended to a second consecutive close and the weekly-close
                escalation is pending — no position is taken on the watch: it sets the
                confirmed early-warning level (two daily closes below), the pending escalation
                (06-29 weekly close &lt; $62,443), and the reclaim ladder (flip $62,074 →
                floor $62,443 → D-SMA20 $63,228 — note the flip has now slipped below the
                floor, so the first reclaim step is the flip then the floor then D-SMA20), and
                the desk will not pre-position short into a break the −74.71M monthly already
                prices nor long into a reclaim it cannot confirm, on a blind tape.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STILL STOOD DOWN · price pre-condition DEEPER OFFSIDE (spot −3.57% below the flip, −4.14% below the floor, no MA beneath spot) + tape blind ~13.94 days + book deepened short-gamma + only an 8h TD9 oversold hint</span>
              <div className="dn-trade-name">
                Cover-bounce scout — the flip reclaim is now deeper offside than 06-25, spot lost $60k with no MA beneath it, and the scout stays stood down on a blind tape into a deepening short-gamma book settling today
              </div>
              <div className="dn-thesis">
                The 06-22 note saw the scout&rsquo;s price pre-condition print briefly (spot
                reclaimed the flip), the 06-23 → 06-25 notes saw it handed back and widen.
                Tonight it deteriorated further: spot rolled $61,080 (the 06-25 note spot) →
                $59,857, now{' '}
                <em>−3.57% below the flip</em> $62,074, −4.14% below the 200W floor, below
                D-SMA20, and through $60k — there is no MA beneath spot at all. So the scout
                is blocked on four counts. (1) The price pre-condition is deeper offside — spot
                is further below the flip than 06-25 and has now lost $60k. (2) The positioning
                legs (SM short bleed, funding posture, cover-flow) all require a live tape, and
                there is none — the desk cannot see whether the acceleration below the floor
                was distribution or thin drift. (3) The dealer book deepened to −87.5M
                net-short-gamma with spot below the $60k −60.78M wall, so the book amplifies
                the next move rather than dampening it, and the 26JUN −74.71M monthly settles
                today. (4) The engine carries no confirmed constructive trigger — only an 8h
                TD9 oversold hint (last bar may be in-progress) and an unconfirmed 1h
                water-down golden cross (DIF −450.4) against twin fresh 1d/1w death crosses.{' '}
                <span className="dn-em">A scout long on a positioning-blind tape, below the
                flip and the floor and $60k with no MA beneath spot, into a deepening
                short-gamma book settling today, with no confirmed engine print, is not a
                trade — the only constructive counters are the regime&rsquo;s mean-reversion
                lean, the 8h TD9 hint, and the still-standing last weekly hold, and none is
                sufficient to size into without a tape and a confirmed engine trigger.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">stood down · no entry · price pre-condition deeper offside (spot −3.57% below the flip, −4.14% below the floor, below $60k, no MA beneath spot) — re-evaluate only after the live tape is restored AND spot re-reclaims the flip then the floor then D-SMA20</span></div>
                <div><span className="dn-lvl-k">technical pre-condition</span><span className="dn-lvl-v bear">flip $62,074 / floor $62,443 / D-SMA20 $63,228 reclaim (NOT true — spot below all three, no MA beneath spot) AND a confirming engine print (NOT true — 1 bull / 9 bear / 0 neutral, twin 1d/1w death crosses fresh, only an 8h TD9 hint and an unconfirmed 1h below-water golden cross)</span></div>
                <div><span className="dn-lvl-k">data pre-condition</span><span className="dn-lvl-v bear">live tape restored (currently 209.4h frozen) AND SM feed live (currently dead ~13.94 days) — both must hold before any positioning leg can be read; this is the binding block</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> no scout entry without a live positioning tape. The
                mean-reversion regime, the 8h TD9 hint and the still-standing last weekly hold
                do not trigger a scout while the SM / funding / flow legs are blind, spot is
                below the flip and the floor and $60k with no MA beneath it, the dealer book is
                more short gamma at spot and settling today, and the engine has no confirmed
                trigger — the desk does not size into a cover-bounce it cannot see being
                covered. The price block that lifted on 06-22 has re-closed and widened; the
                operational block (tape down) and the structural block (deepened short gamma
                into a 0.3-DTE opex, floor broken on two daily closes) compound it.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — two-sided this cut: 10Y leg eased to 12bp from firing (4.41% vs 4.53% gate), HY OAS leg widened to just 2bp from firing (2.76% vs 2.78%); neither fired but the credit leg is on the edge · Tier-1 printed fresh deltas, no stale flag</span>
              <div className="dn-trade-name">
                Downside put-spread — re-grow gate un-fired, legs split hard (10Y eased to 12bp, OAS widened to just 2bp); no hedge added (the 26JUN −74.71M monthly already prices the concentrated downside)
              </div>
              <div className="dn-thesis">
                The macro re-grow gate the lineage carries — HY OAS &gt; 2.78% OR 10Y &gt;
                4.53% as the condition to re-grow a downside tail — stays UN-FIRED, but the
                two legs split hard this cut: the 10Y eased{' '}
                <em>off</em> the gate (from 3bp away on 06-25 at 4.50% to 12bp away today at
                4.41%, a flight-to-quality rally) while HY OAS widened <em>toward</em> it
                (from 7bp away at 2.71% to just 2bp away at 2.76%). So the credit leg is now on
                the very edge of firing while the rates leg backed well off. The reclaim-long
                rates filter (10Y &lt; 4.55%) stays TRUE at 4.41%, with more room. The macro
                tape is now a genuine risk-off impulse (rates rallying, credit widening, dollar
                EXTREME, equities lower) rather than the 06-25 mixed read; but a macro tail is
                not the right instrument for an endogenous-cum-risk-off floor break, and the
                concentrated downside risk that remains is the 26JUN monthly −74.71M, which the
                dealer gamma already prices, 0.3 DTE.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · gate un-fired both legs · 10Y leg eased to 12bp from the gate, OAS leg widened to just 2bp (on the edge of firing)</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (next Tier-1 print)</span><span className="dn-lvl-v bear">10Y &gt; 4.53% close (currently 4.41%, 12bp to fire, eased) OR HY OAS &gt; 2.78% close (currently 2.76%, just 2bp to fire, widened — the closer leg by far)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — TRUE at 4.41%; awaits a BTC-internal pivot AND a live tape to translate</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as the levels
                drift, not backtested breakpoints. Neither leg fired — the credit leg is now
                on the edge (2bp) and the rates leg eased well back (12bp) — and if either
                fires, a downside tail would be reassessed in a separate future note (trigger /
                invalidation / R defined there); note the dealer strip carries the 26JUN
                monthly −74.71M settling today, so any such tail would be additive to existing
                dealer short gamma rather than a clean independent hedge.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · ON HOLD — SM feed DEAD ~13.94 days, the re-stack signature cannot be read this cut</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — ON HOLD (continuation of 06-16 → 06-25): the SM feed is frozen ~334.5h, the re-stack signature cannot be read this cut
              </div>
              <div className="dn-thesis">
                The squeeze-cycle / re-stack-hostile-2 framework reads discrete SM steps
                (Δshort &gt; 0 + Δlong &lt; 0 same minute) as continuation signatures; its
                calendar prior (the BJ 13–15 cadence) was falsified on 05-31 and it has run as
                a no-prior watchlist since. It cannot be assessed today for the simplest
                reason: the SM feed is dead. long_btc / short_btc / net_btc have been constant
                since 2026-06-12 01:36Z (~334.5h), so there are no SM deltas to read. The
                06-16 note put this ON HOLD at ~94.5h, the 06-24 note at ~286.5h, the 06-25
                note at ~310.5h; it remains ON HOLD at ~334.5h.{' '}
                <span className="dn-em">No signature can print from a frozen feed; the
                framework is dark until the SM data resumes.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v bear">ON HOLD · SM feed frozen ~334.5h (since 2026-06-12 01:36Z) · no SM deltas computable</span></div>
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
              Decision conditions <span className="dn-roman">VI · LIVE TAPE OUTAGE still the operative condition (tenth day) · 200W floor DAILY-CLOSE BREAK EXTENDED to a SECOND close (06-25 $59,772), weekly-close escalation PENDING (06-29 reads −4.14% below) · flip reclaim DEEPER OFFSIDE (−3.57%), book DEEPENED −87.5M, 26JUN monthly −74.71M (0.3 DTE, settles today) · scout stood down (no MA support, only an 8h TD9 hint) · macro turned risk-off (10Y eased to 12bp, OAS widened to just 2bp), regime re-coupled to NORMAL</span>
            </h2>

            <p>
              Of the 06-25 conditions: the live tape did <em>not</em> come back — it is ~24h
              deader, now 209.4h frozen with the SM feed at ~13.94 days; the 200W floor
              daily-close break <em>extended</em> to a second consecutive close (06-25
              $59,772, −4.28% below) with spot accelerating under $60k, and the weekly-close
              escalation is now pending and deteriorating (06-29 in-progress reads −4.14%
              below); the flip reclaim went further offside (spot −3.57% below the flip vs
              −3.15% on 06-25) and the flip itself slipped below the floor; the dealer book
              deepened from −73.9M to −87.5M net-short-gamma as the 26JUN monthly deepened
              −69.70M → −74.71M (0.3 DTE, settles today); the scout&rsquo;s price block
              widened and the engine carries only an 8h TD9 oversold hint; the macro re-grow
              gate stayed un-fired but the legs split hard (10Y eased to 12bp, OAS widened to
              just 2bp) as the tape turned decisively risk-off; the correlation regime
              re-coupled to NORMAL as the whole risk complex sold off together; the
              squeeze-cycle stayed ON HOLD on a deader feed. The dominant condition is
              unchanged: <em>the desk is positioning-blind, now into a 200W floor broken on
              two consecutive daily closes, a deeper-offside reclaim with no MA support, and a
              deepening short-gamma book settling today that it cannot confirm</em>. The
              conditions today re-set around the continuing outage, the extended daily-close
              break, the pending weekly-close escalation, and the deepened 26JUN amplifier
              into opex:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Live tape restored (PRIMARY operational)</td><td className="bull">live_db.json resumes writing fresh rows beyond 2026-06-17 06:43Z AND the SM triple updates off its 06-12 01:36Z freeze</td><td>re-read funding / OI / flow / SM in full; only then can the scout or squeeze-cycle be evaluated — and only then can the acceleration below the floor be confirmed as distribution vs drift; the positioning dimension has now been blind eight notes running</td></tr>
                <tr><td>200W floor — DAILY-CLOSE BREAK EXTENDED</td><td className="bear">06-24 daily close $61,051 (−2.23% below) and 06-25 daily close $59,772 (−4.28% below) — two consecutive closes below the $62,443 floor; all 1,440 last-24h 1-min closes below; in-progress 06-26 bar $59,857, −4.14% below</td><td>the daily-close break has extended to a second consecutive close with spot under $60k — the floor is firmly overhead, the slow level has flipped from support to resistance; no position taken</td></tr>
                <tr><td>200W floor — escalation (next weekly close) PENDING</td><td className="bear">a sustained weekly close &lt; $62,443 (W-SMA200 floor) breaks the floor; the 22JUN weekly close $63,990 +2.48% above still stands, the in-progress 06-29 week reads $59,857 −4.14% below</td><td>the 06-29 weekly close is the single level that resolves the 06-15 reclaim thesis — a close below escalates the break and falsifies the thesis, the down-leg resumes with the 26JUN −74.71M amplifier; watch the 06-29 settle closely</td></tr>
                <tr><td>Flip reclaim (scout price pre-condition) — DEEPER OFFSIDE</td><td className="bear">spot $59,857 −3.57% below flip $62,074, −4.14% below the floor $62,443, −5.33% below D-SMA20 $63,228; no MA beneath spot; the flip slipped below the floor, so re-reclaim is a daily close back above the flip then the floor then D-SMA20</td><td>the price pre-condition went further offside and spot lost $60k — re-reclaim of the flip then the floor then D-SMA20 is the first step that re-opens scout evaluation, but only IF the live tape is also restored; on a blind tape below the floor the reclaim is watched, not traded</td></tr>
                <tr><td>26JUN26 monthly amplifier (0.3 DTE, settles today) — DEEPENED, net book deepened</td><td className="bear">26JUN −74.71M (was −69.70M on 06-25), aggregate GEX −87.5M (was −73.9M); spot sits below the $60k −60.78M wall with the $58k −21.04M and $59k −16.68M walls beneath</td><td>the dealer book deepened net-short-gamma at spot — it amplifies the next move; the one concentrated downside risk is the 26JUN monthly settling ~08:00Z today; watch only, no short instruction in this note (the break already extended into a strip that prices it; any future setup defines its own trigger / invalidation / R)</td></tr>
                <tr><td>Macro tail re-grow (legs split hard)</td><td className="bear">10Y &gt; 4.53% (12bp to fire, eased) OR HY OAS &gt; 2.78% (just 2bp to fire, widened — on the edge) — Tier-1 printed fresh deltas, no stale flag this cut</td><td>no hedge instruction in this note — a gate fire (OAS is now on the edge, 2bp away) would be reassessed in a separate future note; note any such tail would be additive to existing dealer short gamma −74.71M</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.41%</td><td>standalone filter true with more room after the flight-to-quality rally; needs a BTC-internal pivot AND a live tape to translate to a scout long</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (ON HOLD)</td><td className="stale">SM feed dead ~334.5h; no deltas computable</td><td>suspended, not negative — re-arm on the first fresh SM deltas after the feed resumes</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the 06-29 weekly close confirms the break by settling below the
                $62,443 200W floor — the daily-close break has now extended to two consecutive
                closes (06-24 $61,051, 06-25 $59,772) and the in-progress 06-29 week reads
                −4.14% below — or whether spot can claw a daily close back above the floor
                before the 06-29 settle and keep the 06-15 reclaim thesis alive; on the
                constructive side, a daily close back above the flip $62,074 then the floor
                $62,443 then D-SMA20 $63,228 — which the desk still cannot scout on a blind
                tape — would re-open the case
              </span>. The de-amplification of the early-week notes has fully reversed across
              four sessions (aggregate −0.6M → −35.1M → −64.4M → −73.9M → −87.5M, spot from
              above the flip to −3.57% below it and below the floor and $60k), so the
              structural risk has re-thickened to the one monthly, 0.3 DTE and settling today;
              the structural positive — the 200W floor — broke at the daily-close level on two
              consecutive closes and is one weekly close from full escalation, and the desk
              still cannot read the tape that would say whether it is being lost on
              distribution or thin drift. Until the tape is restored this note runs as
              written: the book is flat, the scout&rsquo;s price block is wider and the engine
              has only an 8h TD9 hint, the macro tail gate legs split (OAS on the edge at
              2bp), the squeeze-cycle is suspended, and the 200W floor watch is the one live
              level — now a floor broken on two daily closes pending weekly-close escalation.
              Price and MTF deepened bearish, the dealer book deepened short-gamma and spot
              fell below the flip and the floor and $60k; macro turned decisively risk-off
              (rates rallying, credit on the edge of its gate, dollar EXTREME) and the
              correlation regime re-coupled to NORMAL as the whole complex sold off, so the
              break is now as much a risk-off-tape event as a BTC-specific one. The right read
              for the next 24h is{' '}
              <em>floor-broken-on-two-daily-closes, escalation-pending — respect the extended
              break, watch the 06-29 weekly close vs the floor against the −74.71M monthly as
              it settles today, fix the tape before reading positioning, and do not scout a
              reclaim that has gone deeper offside below the floor and $60k</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> this is the <b>v2</b> note — <b>post codex hostile audit</b>,
            promoted from v1 after STAGE C applied every finding with grep-closure
            verification. Primary audit: codex hostile cross-model run, verdict
            PASS-WITH-NOTES (0 CRITICAL, 1 MAJOR, 1 MINOR, 0 NIT). Supplementary numeric
            recompute: ask-deepseek (NOT an auditor — every item adjudicated by recompute
            before acting, never auto-applied; this cut it found no real numeric error).
            Reference: <code>audits/2026-06-26-desk-note.md</code>.{' '}
            <b>Findings &amp; grep-closure evidence (pattern → hits-before → hits-after):</b>{' '}
            <b>DN-001 (MAJOR — reclaim ladder out of numeric order in the floor-watch gating
            sentence after the flip slipped below the 200W floor):</b> reordered the gating
            ladder to the ascending sequence flip $62,074 → floor $62,443 → D-SMA20 $63,228.
            Patterns searched: <code>&ldquo;floor $62,443 → flip&rdquo;</code> (1 → 0),{' '}
            <code>&ldquo;floor $62,443 → flip $62,074 → D-SMA20&rdquo;</code> (1 → 0). The
            other ladder occurrences (the reclaim-side row, the scout status row, and the
            decision-conditions flip-reclaim row at lines ~772 / ~818 / ~936) already read
            flip → floor → D-SMA20 and were re-verified; residual{' '}
            <code>floor $62,443 … flip</code> matches are descending offset listings, not
            reclaim sequences. <b>RESOLVED (hits-after = 0).</b>{' '}
            <b>DN-002 (MINOR — cross-asset prose overclaimed &ldquo;whole complex red&rdquo; /
            &ldquo;energy down&rdquo; while the listed data carries NGAS +0.23%):</b> narrowed
            the prose to carve out NGAS — &ldquo;whole complex red&rdquo; → &ldquo;broad risk
            complex red,&rdquo; the energy parenthetical → &ldquo;crude down, NGAS slightly
            positive,&rdquo; and &ldquo;metals and energy down&rdquo; → &ldquo;metals down and
            crude down with NGAS the lone green.&rdquo; Patterns searched:{' '}
            <code>&ldquo;whole complex red&rdquo;</code> (1 → 0),{' '}
            <code>&ldquo;energy down&rdquo;</code> (1 → 0),{' '}
            <code>&ldquo;metals and energy&rdquo;</code> (1 → 0). The NGAS +0.23% datum itself
            is unchanged and the cross-asset numeric core is untouched.{' '}
            <b>RESOLVED (hits-after = 0).</b> Every CRITICAL + MAJOR + MINOR finding is
            grep-closed at hits-after = 0. The numbers carried above are the
            STAGE A atomic-snapshot reads (parquet last bar 2026-06-26 00:06Z; MTF / GEX /
            cross-asset 00:00–00:01Z; macro render 2026-06-25 22:15Z; live tape FROZEN at
            2026-06-17 06:43Z, 209.4h; SM feed dead since 2026-06-12 01:36Z, ~13.94 days),
            archived at <code>/opt/desk-note/snapshots/2026-06-26-0006/</code> for the auditor
            to re-check the same bytes.{' '}
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
            atomic snapshot (2026-06-26 00:06Z) with section-level provenance disclosed in the
            manifest band above;{' '}
            <em>critically, the live derivatives tape was frozen for 209.4h at snapshot time
            (last row 2026-06-17 06:43Z) and the smart-money positioning feed has been dead
            ~13.94 days</em>, so all funding, OI, flow and positioning figures are explicitly
            last-known / stale or non-computable and flagged as such; the macro panel render is
            2026-06-25 22:15Z (~1.85h before snapshot) and its Tier-1 series printed fresh
            deltas with no stale flag this cut, with the DXY / USD/JPY FX legs also refreshed.
            Price, MTF, GEX and cross-asset are fresh. This is the v2 note, post codex hostile
            audit. Levels, sizes, and conditions are illustrative of the
            desk&rsquo;s process, not standing recommendations. Past correlation, gamma, and
            positioning patterns do not bind future tape. Derivatives carry the risk of total
            loss and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The break extended: the 200W floor broke on a second consecutive daily close
                (06-25 $59,772), spot accelerated below $60k with no MA beneath it, the dealer
                book deepened short-gamma into the 0.3-DTE 26JUN opex settling today, and the
                correlation regime re-coupled to normal as the whole risk complex sold off —
                all read through a dead tape a tenth day. Floor broke twice. Escalation
                pending. Blind.
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
            v2 · 2026-06-26 00:06Z snapshot · post codex hostile audit ·
            sources: live_db.json (FROZEN 209.4h) · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}

