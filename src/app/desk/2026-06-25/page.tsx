import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-25 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-25',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-25' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260625() {
  await requireViewer('/desk/2026-06-25');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-25 · v2</span>
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
              <span className="dn-big">$61,080</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−2.68%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-25 00:07Z ·{' '}
              <span className="dn-em">
                LIVE-TAPE OUTAGE INTO A NINTH DAY — the OKX monitor has now been
                frozen 185.4h; price/MTF/GEX/cross-asset are fresh, the derivatives
                tape is still dark and the SM feed has been dead ~12.94 days. The
                structural event of this cut: the 200W floor broke on the 06-24 daily
                close ($61,051 &lt; $62,443) — the early warning the 06-24 note named
                has FIRED.
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
                    <b>185.4h stale</b> vs the 00:07Z snapshot anchor (was 161.4h on
                    the 06-24 note, 137.4h on 06-23 — the outage has run another ~24h
                    since the last note). Funding / OI / CVD / basis / retail /
                    taker-flow are LAST-KNOWN at 06-17 06:43Z, not current. The SM
                    sub-feed (long_btc / short_btc / net_btc) is frozen even longer —
                    constant since 2026-06-12 01:36Z (~310.5h / ~12.94 days); SM net and
                    the SM cut-fraction are <b>NON-COMPUTABLE</b> this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-25 00:01Z scan</td>
                  <td className="dn-flag">
                    fresh (~6 min before anchor) · rolling latest-file artifact,
                    archived verbatim at
                    /opt/desk-note/snapshots/2026-06-25-0007/ · in-progress bars · scan
                    spot $61,050, 24h −2.73%, 24h H/L $63,210 / $59,060, qVol $16.95B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-25 00:02Z snapshot</td>
                  <td className="dn-flag">
                    fresh (~5 min before anchor) · Deribit idx $61,073 ($7 below
                    parquet spot $61,080) · 926 instruments (+34 vs 06-24) · net GEX{' '}
                    <b>−73.9M</b> (net SHORT gamma, <b>DEEPENED</b> from −64.4M on
                    06-24, −35.1M on 06-23) · flip $63,067 (spot −3.15% BELOW, a third
                    night below, the gap widened) · the dominant chunk is the 26JUN26
                    monthly <b>−69.70M</b>, now 1.3 DTE (DEEPENED from −61.89M on 06-24)
                    and spot has fallen deeper into the $58k–$62k negative-gamma cluster,
                    sitting between the $60k −37.06M cluster floor and the $62k −23.08M
                    strike
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-25 00:01Z
                  </td>
                  <td className="dn-flag">fresh · 7d 1h bars · 22 assets · 167 rows · regime IDIOSYNCRATIC (mean |r| 0.243, loosened from 0.298 on 06-24, crossed below the 0.25 idiosyncratic threshold)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-24 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.85h render lag · the FRED Tier-1 daily series printed fresh deltas
                    and carry <b>no stale flag</b> this cut: 10Y 4.51% → <b>4.50%</b>{' '}
                    (−1.0bp, eased back to 3bp from the gate), TIPS 2.28% → <b>2.29%</b>{' '}
                    (+1.0bp, EXTREME RISK-OFF), HY OAS 2.65% → <b>2.71%</b> (+6.0bp,
                    RISK-ON but widened toward its gate, now 7bp away) · MOVE bond vol{' '}
                    <b>69.1</b> (+3.67 day, still loose) · DXY <b>101.39</b> (+0.37 day,
                    EXTREME RISK-OFF) and USD/JPY <b>161.56</b> (−0.01) both read
                    byte-identical to the 06-24 render (level + Δ + z) — the FX daily
                    series likely did not refresh in this render, treat the FX legs as
                    possibly stale-carry, not a fresh confirmation · Fed net liq $5.849T ·
                    NFCI neutral (weekly) · WTI $78.9 (fresh daily this cut)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-25 00:06Z (close $61,080)</td>
                  <td className="dn-flag">
                    fresh kline (exchange OHLC, independent of the frozen live tape) ·
                    offsets recomputed vs the parquet last-bar close, the freshest
                    available spot while the live tape is frozen · the displayed weekly
                    ladder uses the 2023→ subset (182 weekly bars), so no W-SMA200 row;
                    the 200W floor is recomputed directly from the full-history glob —
                    355 completed weekly W-MON bars (2019→present), excluding the
                    in-progress 06-29 week — = <b>$62,443</b>, unchanged vs the $62,443
                    the 06-24 note pinned (a slow weekly SMA, ~$250/wk). <b>Spot is now
                    −2.18% BELOW the floor and every MA on the matrix is overhead — no
                    positive offset, the first such cut of the lineage</b> · weekly_200sma.json
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
              <span className="dn-v bear">−7.24% (STALE · 06-17 06:43Z · 185.4h)</span>
              <span className="dn-src">live_db raw funding −0.006608 × 1095 = −7.24% ann (NOT ×100) · LAST-KNOWN at the 06-17 06:43Z freeze, now 185.4h stale, not a current read · last-available ann over the 24h+1m inclusive sampled window ending at the freeze (1,442 rows): mean +0.20%, range −7.24% / +7.21%, 819 / 1,442 rows negative — a balanced, two-sided book at the point the tape died · byte-for-byte the same frozen row carried by the 06-19 → 06-24 notes</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · vs 06-24</span>
              <span className="dn-v">tape frozen — not computable</span>
              <span className="dn-src">the live tape has not written since 06-17 06:43Z, so there is still no current funding to difference against the 06-24 note · last-known print at the freeze was −7.24% ann (shorts paying longs); the leverage gate remains un-assessable a ninth day running</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC (−0.45%) · STALE window</span>
              <span className="dn-src">live_db oi_btc 102,945 at the 06-17 06:43Z freeze vs the start of a 24h+1m inclusive sampled window (1,442 rows) · the window ENDS at the freeze, NOT into the 00:07Z snapshot — it describes the tape up to 06-17 06:43Z and is 185.4h out of date</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` at the 06-17 06:43Z freeze (was 58.29% at the start of the 24h+1m inclusive sampled window — a +1.18pt long add into the roll-over) · last-known, 185.4h stale</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED DEAD ~310.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · this triple has been byte-for-byte constant since 2026-06-12 01:36Z (~310.5h / ~12.94 days) — it is a FROZEN value, NOT a current positioning read; carried only to mark the dead feed</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">NON-COMPUTABLE</span>
              <span className="dn-src">SM feed frozen ~12.94 days · |Δ| / prior_net cannot be computed — there is no current SM net to difference · the squeeze-cycle / re-stack framework is blind this cut, a continuation of the 06-16 → 06-24 ON-HOLD</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">46.8% / 43.13%</span>
              <span className="dn-src">GEX median IV across 926 instruments (00:02Z, fresh) vs 30D close-to-close RV 43.13% off parquet — chain richness only ~+3.67pt, essentially priced to realised; RV stays elevated (was 42.76% on 06-24, 24.91% on 05-31) · IV is a chain-median across 926 instruments, NOT a tradable spread</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−3.15% (below)</span>
              <span className="dn-src">flip $63,067 (was $64,163 · slipped −$1,096) · vs parquet spot $61,080 (61,080.40 / 63,067 − 1 = −3.150%) / GEX file Deribit idx $61,073 (61,073 / 63,067 − 1 = −3.162%, file reads −3.2%) — both references BELOW the flip a third night, the gap widened from −2.18% on 06-24 · net GEX −73.9M (net SHORT gamma, DEEPENED from −64.4M) · the 26JUN26 monthly −69.70M deepened, 1.3 DTE</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The early warning the 06-24 note named has fired: the 200W floor broke on
                the daily close. The 06-24 daily bar finalized at $61,051 — below the
                $62,443 200W floor — so for the first time since the 06-15 reclaim a daily
                close has settled beneath the line, every MA on the matrix is now overhead,
                the dealer book deepened again to −73.9M net-short-gamma into a 1.3-DTE
                26JUN opex, and all of it still reads through a dead derivatives tape, a
                ninth day running
              </span>. Spot prints{' '}
              <span className="dn-tag bear">$61,080, −2.68% on 24h</span> at the 00:06Z
              parquet bar (the MTF scan reads −2.73% on its own window), down from the
              06-24 note spot $62,768, and the structure broke on the one dimension that had held.
              The single structural positive the lineage carried — the 200W weekly-close
              hold — is now at its decision point: the 22JUN weekly close $63,990 (+2.48%
              above the floor) still stands as the last resolved weekly print, but the
              06-24 <span className="dn-tag bear">daily close $61,051 (−2.23% below the
              floor)</span> fired the early warning, and the in-progress 06-29 week reads{' '}
              <span className="dn-tag bear">$61,080, −2.18% below the floor</span> (was
              +0.52% above on 06-24), so the weekly-close escalation is now pending into the
              06-29 settle. Spot lost the last positive line on the matrix — there is no MA
              beneath it for the first time in the lineage; D-SMA20 $63,343 (−3.57%) and
              the 200W floor $62,443 (−2.18%) are both overhead now. The dealer book{' '}
              <span className="dn-tag bear">deepened −64.4M → −73.9M net-short-gamma</span>{' '}
              as the 26JUN26 monthly thickened{' '}
              <span className="dn-tag bear">−61.89M → −69.70M (1.3 DTE)</span> and spot fell
              into the $58k–$62k cluster between the $60k −37.06M floor and the $62k
              −23.08M strike. MTF deteriorated to{' '}
              <span className="dn-tag bear">1 bull / 9 bear / 0 neutral</span> (was 1/8/1):
              every mid and high frame is bearish, a fresh 1w water-down death cross just
              printed, and the only constructive print is a 1h water-down golden cross 1 bar
              ago — but it is an early below-water probe (DIF −572.9), not a confirmed
              trigger. Macro is two-sided: 10Y eased 1bp to 4.50% (back to 3bp from the
              gate), but HY OAS widened 6bp to 2.71% (now 7bp from its gate).{' '}
              <span className="dn-em">
                The operational fact is unchanged and still binding: the OKX monitor has now
                been frozen 185.4h (last row 2026-06-17 06:43Z), funding / OI / CVD / basis /
                retail are last-known and stale, and the SM positioning book has been dead
                ~12.94 days — SM net and the cut-fraction are non-computable. The desk cannot
                see whether the close below the floor was distribution or thin drift. The read
                is on price, gamma and MTF alone.
              </span>{' '}
              The book stays flat: the daily-close break is a hard structural change but the
              weekly-close escalation has not yet confirmed, every read worsened, the book is
              pressed below the 200W line with a deepening short-gamma amplifier 1.3 DTE, on
              a positioning-blind tape — no scout and no short can be sized here.
            </p>

            <p>
              BTC prints <span className="dn-tag">$61,080</span> at the parquet last bar
              (00:06Z),{' '}
              <span className="dn-tag bear">−2.68%</span> on 24h (vs the $62,761 bar exactly
              24h prior — the 06-24 00:06Z parquet bar, $7 under the 06-24 note&rsquo;s $62,768
              00:07Z spot, the same series one minute apart; the MTF scan reads −2.73% on its
              own 00:01Z window — the spread is the reference window, not a data conflict),
              inside a{' '}
              <span className="dn-tag">$63,210 / $59,060</span> 24h range (the 24h high
              printed 06-24 11:49Z, the 24h low $59,060 at 06-24 17:48Z; the MTF scan H/L
              match $63,210 / $59,060). The Deribit index reads $61,073 at 00:02Z and the
              MTF scan spot is $61,050 — so the freshest spot is well-corroborated across
              three independent fresh sources (parquet kline $61,080, GEX Deribit index
              $61,073, MTF scan $61,050), even though the live_db tape that normally supplies
              it is frozen at $65,616 (06-17 06:43Z, 185.4h stale).{' '}
              <span className="dn-signal">The structural read has moved from a held
              weekly-close floor under direct intraday attack to a floor broken on the daily
              close, with the weekly-close escalation now pending</span>: the 22JUN weekly
              close $63,990 (+2.48% above) is still the last resolved weekly hold, but the
              daily closes walked down through the line (06-21 $63,287, 06-22 $63,990, 06-23
              $62,697, 06-24 $61,051) and the 06-24 close settled −2.23% below it. Per the
              framework, an intraday wick is not the break and a daily close below is the
              early warning — that early warning has now FIRED — while a sustained weekly
              close below is the escalation that breaks the floor and falsifies the 06-15
              reclaim thesis; the in-progress 06-29 week reads $61,080 (−2.18% below), so
              the escalation is pending the 06-29 settle, not yet confirmed.{' '}
              <span className="dn-em">
                The one structural positive of the lineage is now broken at the daily-close
                level and pending escalation at the weekly close; spot holds no MA beneath
                it, the dealer amplifier deepened into a 1.3-DTE opex, and the desk still
                cannot read the tape that would say whether the line is being lost on
                distribution or thin drift.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · LIVE TAPE FROZEN 185.4h (ninth day) · SM book dead ~12.94 days · funding/OI/flow last-known stale · the desk cannot see how the close below the 200W floor was absorbed</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important source of this note — the live derivatives tape —
                is still down, a ninth day running
              </span>. The OKX monitor has appended no row to live_db.json since{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> (t = &ldquo;06-17
              14:43&rdquo; BJ; the file mtime 06-17 06:43:08Z confirms the write stopped
              there; the process status is not archived or verified in this cut, so the note
              asserts the missing tape, not a live/hung process). That is now{' '}
              <span className="dn-tag bear">185.4h of missing tape</span> against the 00:07Z
              snapshot anchor — the 06-20 note flagged it at 65.4h, the 06-23 note at 137.4h,
              the 06-24 note at 161.4h, and the outage has run another ~24h without a write.
              Everything the live tape carries — funding, open interest, spot/futures CVD,
              perp basis, retail long%, taker-net, big-print flow, aggressor skew — is
              therefore{' '}
              <span className="dn-em">last-known at 06-17 06:43Z and not current</span>. The
              smart-money positioning triple (long_btc / short_btc / net_btc) has been
              byte-for-byte constant —{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> — since{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>, ~310.5h (~12.94 days).
              The 06-16 note flagged this dead feed at ~94.5h and put the squeeze-cycle ON
              HOLD; the 06-23 note carried it at ~262.5h, the 06-24 note at ~286.5h; today it
              is ~310.5h and still dead.{' '}
              <span className="dn-em">
                SM net is non-computable as a current read, and the SM cut fraction (|Δ| /
                prior_net) cannot be formed — there is no current SM net to difference. Any
                positioning claim in this note is explicitly historical, not live.
              </span>
            </p>

            <p>
              For completeness, the <em>last-available</em> tape readings — all pinned to
              the 06-17 06:43Z freeze and now 185.4h out of date, and byte-for-byte the same
              readings the 06-19 → 06-24 notes carried because it is the same frozen row —
              are: funding <span className="dn-tag bear">−7.24% ann</span> (raw −0.006608 ×
              1095; shorts paying longs at the freeze), with the last-available path balanced
              two-sided over the 24h+1m inclusive sampled window (1,442 rows: mean{' '}
              <span className="dn-tag">+0.20% ann</span>, range{' '}
              <span className="dn-tag">−7.24% / +7.21%</span>, 819 / 1,442 rows negative); OI{' '}
              <span className="dn-tag bear">102,945 BTC, −468 over the trailing 24h+1m window
              (−0.45%)</span>; retail{' '}
              <span className="dn-tag">mkt_long_pct 59.47%</span> (a +1.18pt long add over
              that same window); perp basis{' '}
              <span className="dn-tag bear">−$57.43 discount</span> to spot (window mean
              −$58.62, range −$146.17 / +$67.04).{' '}
              <span className="dn-em">
                Read this as a near-nine-day-old fingerprint, not a signal: a two-sided
                funding book, OI bleeding, retail adding longs into the first leg of
                weakness. None of it can be carried forward to the 00:07Z snapshot — and it
                predates the entire 06-18 → 06-22 floor-hold sequence AND the 06-23 → 06-24
                leg that closed below the floor, so it says nothing about how positioning
                absorbed the break. The desk treats the positioning dimension as unknown,
                and the close below the floor as positioning-unconfirmed.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure <span className="dn-roman">II · price/MTF FRESH · multi-TF resonance bearish DEEPENED to 1 bull / 9 bear / 0 neutral · mid+high frames all bearish, 1w death cross fresh · only constructive print a 1h water-down golden cross 1 bar ago (early below-water probe, DIF −572.9) · regime still 6/9 reversal (mean-reversion) · spot lost the last MA, the whole ladder is overhead, the 200W floor $62,443 broke on the 06-24 daily close ($61,051), spot −2.18% below</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map is fresh, deteriorated another step to fully bearish across the
                mid and high frames, and the one constructive print is an early below-water
                probe, not a confirmed trigger
              </span> — the one dimension, with the dealer map, the desk can still trust
              today. The 00:01Z scan tags{' '}
              <span className="dn-tag bear">1 bull / 9 bear / 0 neutral across 10 frames</span>,
              net read <em>multi-TF resonance bearish · sell the bounce</em> — a step worse
              than the 06-24 scan&rsquo;s 1 bull / 8 bear / 1 neutral as the last neutral
              frame rolled bearish. The regime line still reads{' '}
              <span className="dn-tag">6/9 reversal regime (JT&lt;0) — mean-reversion /
              bounce-favoured, trend-follow with caution</span> (was 5/9 on 06-24), so the
              classifier leans mean-reversion a touch harder — but the engine carries no
              confirmed constructive trigger to act on it. The lone bull print is a{' '}
              <span className="dn-tag">1h water-down golden cross 1 bar ago</span> (close
              $61,034, DIF −572.9 — an early below-water probe, bearish-to-bullish but
              unconfirmed, not a TD buy). The down side is heavy: the{' '}
              <span className="dn-tag bear">4h, 8h and 12h all carry water-down death
              crosses</span> (11b / 6b / 3b), the{' '}
              <span className="dn-tag bear">1w water-down death cross is fresh (just
              printed)</span> with RSI 33.9 and DIF −5,759 (a weak below-water death cross,
              bearish-continuation), and the 15m / 30m / 1d carry water-down golden crosses
              that are the only counters besides the 1h probe. Cloud: 12h / 1d / 3d / 1w all
              below; the 15m sits in-cloud; only the 1M holds above. The thin constructive
              set is the{' '}
              <span className="dn-tag bull">8h TD8 buy and 1M TD8 buy — each one more
              close</span> and a single bottom divergence (1h).{' '}
              <span className="dn-em">
                Straight read: the frame stack deepened to fully bearish, every mid and high
                frame is on a death cross, and the engine&rsquo;s only constructive print is
                an unconfirmed 1h below-water golden cross against a fresh 1w death cross.
                The regime classifier still says mean-reversion, but there is no confirmed
                engine print to trade it long; the dominant tape read is the 1w death cross,
                the lost last MA, and the close below the 200W floor. This is a bearish trend
                frame whose oversold-bounce setup has no confirmed trigger.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">61,034</td><td className="num">59.6</td><td className="bull">golden (water-dn) 21b</td><td className="neut">in cloud 60.6k–61.2k 3b</td><td>Sell 4</td><td>BEAR hid</td></tr>
                <tr><td>30m</td><td className="num">61,042</td><td className="num">50.9</td><td className="bull">golden (water-dn) 7b</td><td className="bear">below ↑62.5k 22b</td><td>Sell 1</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">61,034</td><td className="num bear">44.4</td><td className="bull">golden (water-dn) 1b</td><td className="bear">below ↑62.8k 44b</td><td>Sell 5</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">61,042</td><td className="num bear">36.1</td><td className="bear">death (water-dn) 11b</td><td className="bear">below ↑63.9k 11b</td><td>Buy 4</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">61,042</td><td className="num bear">36.6</td><td className="bear">death (water-dn) 6b</td><td className="bear">below ↑64.7k 5b</td><td>Buy 8 → 9?</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">61,050</td><td className="num bear">34.7</td><td className="bear">death (water-dn) 3b</td><td className="bear">below ↑64.6k 67b</td><td>Buy 6</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">61,045</td><td className="num bear">33.3</td><td className="bull">golden (water-dn) 12b</td><td className="bear">below ↑76.4k 24b</td><td>Buy 3</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">61,042</td><td className="num bear">34.7</td><td className="neut">—</td><td className="bear">below ↑73.0k 8b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">61,045</td><td className="num bear">33.9</td><td className="bear">death (water-dn) 刚印 (just printed)</td><td className="bear">below ↑100.3k 21b</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">61,043</td><td className="num">41.7</td><td className="neut">—</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (08:01 Beijing; rolling latest
                    file, archived verbatim at
                    /opt/desk-note/snapshots/2026-06-25-0007/). Net read{' '}
                    <em>multi-TF resonance bearish · sell the bounce (1 bull / 9 bear / 0
                    neutral)</em>; regime <em>6/9 reversal regime (JT&lt;0, mean-reversion /
                    bounce-favoured, trend-follow with caution)</em>; reversal divergences{' '}
                    <em>top div 30m / 1h / 4h, bottom div 1h</em>. Header alerts:{' '}
                    <em>1w water-down death cross (just printed, DIF −5,759)</em>,{' '}
                    <em>1h water-down golden cross (1 bar ago, DIF −572.9, early below-water
                    probe)</em>, <em>8h TD8 Buy — one more close</em>, <em>1M TD8 Buy — one
                    more close</em>. Scan spot $61,050, 24h −2.73%, 24h H/L $63,210 / $59,060,
                    qVol $16.95B. Closes are in-progress bars; treat every value as provisional
                    until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is the same deep overhead wall as 06-24, but spot has now slipped
              below the 200W floor too, so for the first time in the lineage{' '}
              <span className="dn-tag bear">every line on the matrix is overhead — there is no
              positive offset, no MA beneath spot</span>. $61,080 sits{' '}
              <span className="dn-tag bear">−2.18% below the full-history W-SMA200 200W floor
              $62,443</span> — the line that was the lone positive on 06-24 (+0.52%) and is
              now overhead — and{' '}
              <span className="dn-tag bear">−3.57% below D-SMA20 $63,343</span>, the next line
              up. Above those, the cycle-proxy{' '}
              <span className="dn-tag bear">D-EMA20 $64,342 (−5.07%)</span>, then{' '}
              <span className="dn-tag bear">W-EMA200 $67,583 (−9.62%)</span>, then a dense
              overhead band: <span className="dn-tag bear">D-EMA50 $68,208 (−10.45%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $70,686 (−13.59%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $71,470 (−14.54%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $71,505 (−14.58%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $71,528 (−14.61%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $71,860 (−15.00%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,214 (−17.70%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $74,427 (−17.93%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $74,518 (−18.03%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $75,453 (−19.05%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $76,166 (−19.81%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $77,204 (−20.88%)</span>. Far above and
              disused: W-EMA100 $80,968 (−24.56%), W-EMA50 $82,661 (−26.11%), W-SMA100
              $88,526 (−31.00%), W-SMA50 $90,988 (−32.87%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-25 00:06Z (close $61,080.40);
                offsets recomputed against that same last-bar close, which is the freshest
                available spot while the live tape is frozen. Displayed MA levels are
                $-rounded; offsets computed from exact series values. The displayed weekly
                ladder uses the 2023→ subset (182 weekly bars), so W-SMA200 is non-computable
                there and W-EMA200 $67,583 seeds from available history; the 200W floor
                $62,443 is recomputed separately from the full-history glob (355 completed
                weekly W-MON bars, excluding the in-progress 06-29 week). Daily closes: 06-18
                $62,924, 06-19 $63,513, 06-20 $64,270, 06-21 $63,287, 06-22 $63,990 (= the
                22JUN weekly close), 06-23 $62,697, 06-24 $61,051 (the close BELOW the floor),
                06-25 (in-progress, 5-min bar) $61,080 — the 06-24 close fired the daily-close
                early warning (−2.23% below the floor), the in-progress 06-25 bar holds −2.18%
                below, and 703 / 1,441 of the last 24h 1-min closes printed below the floor.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DEEPENED net-short-gamma aggregate −73.9M (was −64.4M on 06-24, −35.1M on 06-23) · 26JUN26 monthly DEEPENED to −69.70M (1.3 DTE) · spot fell DEEPER below the flip $63,067 (−3.15%) into the $58k–$62k cluster between the $60k −37.06M floor and the $62k −23.08M strike · the re-amplification of 06-23/06-24 extended a third night</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book&rsquo;s re-amplification extended a third night: aggregate
                gamma deepened from −64.4M to −73.9M net-short-gamma as opex closed to 1.3
                DTE and spot fell deeper into the put-heavy strikes
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bear">−73.9M / 1%</span> (was −64.4M on 06-24, −35.1M
              on 06-23, −0.6M flat on 06-22); the book is more net-short-gamma than at any
              point of the recent leg. The 0-γ flip slipped{' '}
              <span className="dn-tag">$64,163 → $63,067 (−$1,096)</span>, and spot $61,080
              sits <span className="dn-tag bear">−3.15% below the flip</span> on
              spot-denominated math (61,080.40 / 63,067 − 1 = −3.150%); the GEX file&rsquo;s
              own &ldquo;dist to flip&rdquo; reads −3.2% off its Deribit-index $61,073 ($7
              below parquet spot), which is <span className="dn-tag bear">−3.16%</span>
              (61,073 / 63,067 − 1 = −3.162%) — both references below the flip a third night,
              the gap to the flip widened from −2.18% on 06-24. The wall map is put-heavy
              below and at spot: <span className="dn-tag bear">$60k −37.06M</span> (heaviest
              wall, the cluster floor, just below spot),{' '}
              <span className="dn-tag bear">$62k −23.08M</span> (just above spot),{' '}
              <span className="dn-tag bear">$58k −14.53M</span>,{' '}
              <span className="dn-tag bear">$55k −9.69M</span>,{' '}
              <span className="dn-tag bear">$61k −9.08M</span>,{' '}
              <span className="dn-tag bear">$59k −8.70M</span>,{' '}
              <span className="dn-tag bull">$80k +7.30M</span>,{' '}
              <span className="dn-tag bear">$50k −6.53M</span>,{' '}
              <span className="dn-tag bull">$66k +4.83M</span>,{' '}
              <span className="dn-tag bull">$67k +4.80M</span>.{' '}
              <span className="dn-em">
                The listed major walls from $58k–$62k total roughly −92M and bracket spot
                directly — spot at $61,080 sits inside the cluster, pinned between the $60k
                −37.06M cluster floor below and the $62k −23.08M strike above, which is the
                structural mechanism behind the deepening: a dealer book short gamma right at
                spot amplifies the next move in either direction rather than dampening it. The
                positive walls ($66k, $67k, $80k) all sit overhead and offer no support
                beneath spot; the only support below is the $60k put wall, which is a magnet,
                not a floor.
              </span>{' '}
              By expiry the concentration is the 26JUN26 monthly{' '}
              <span className="dn-tag bear">−69.70M (1.3 DTE)</span> — DEEPENED from −61.89M
              on 06-24 and −41.99M on 06-23, the monthly amplifier re-thickened again as opex
              closed in. The near strip is small: 25JUN26 0.3{' '}
              <span className="dn-tag bear">−1.46M</span>, 27JUN26 2.3 −0.47M, with the
              28JUN26 3.3 the first positive at +1.67M. Forward of the monthly the strip is
              small and mixed — 3JUL26 8.3 is still negative at −5.45M — then mostly positive
              from 10JUL onward: 10JUL26 15.3 +0.82M, 31JUL26 36.3{' '}
              <span className="dn-tag bull">+4.29M</span>, 28AUG26 64.3 +1.77M, 25SEP26 92.3
              −3.21M, 25DEC26 183.3 +0.59M, 26MAR27 274.3 +0.44M. No forward expiry carries
              the 26JUN weight — the entire concentrated downside-amplifier risk is the one
              monthly chunk, 1.3 DTE, and it has deepened rather than decayed into opex. (The
              spot-referenced aggregate −73.9M is the net GEX at spot; the by-expiry rows are
              an independent decomposition and need not sum to it.)
            </p>

            <p>
              IV median across 926 instruments is{' '}
              <span className="dn-tag">46.8%</span> (firmed from 44.5% / 892 instruments on
              06-24) against 30D close-to-close RV of{' '}
              <span className="dn-tag">43.13%</span> — chain-level richness{' '}
              <span className="dn-tag">~+3.67pt</span>, modestly rich to realised, with RV
              staying elevated (43.13% today vs 42.76% on 06-24 and 24.91% on 05-31 — the
              high-vol regime that started with the 06-08 → 06-18 down-leg persists). A
              chain-median across 926 instruments, <span className="dn-em">not</span> a
              tradable spread; expiry-/strike-level vega, skew and term structure remain not
              loaded; the vol read stays framework-only. RV methodology: 30D close-to-close,
              logret.std × √365 × 100 on the last 30 daily log returns (= 31 consecutive
              daily closes) anchored to parquet last bar 2026-06-25 00:06Z; underlying close
              window range $60,850 – $75,906. (For reference, the last 29 returns / 30 closes
              reads 43.65%; the 43.13% page value comes from 30 returns.) P/C ratio 0.61,
              Call OI 284,881 / Put OI 172,940 BTC.
            </p>

            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · render fresh (~1.85h), Tier-1 daily printed fresh deltas with NO stale flag — 10Y 4.50% (−1bp, eased to 3bp from the gate), TIPS 2.29% (+1bp) EXTREME RISK-OFF, HY OAS 2.71% (+6bp, widened to 7bp from its gate), DXY 101.39 (byte-identical to 06-24 — FX series likely not refreshed, flagged) · BTC the deep laggard, regime crossed to IDIOSYNCRATIC, lag to NQ −4.31pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro panel render is fresh (~1.85h), the Tier-1 daily series printed
                fresh deltas with no stale flag, and the read is two-sided this cut — rates
                eased a touch off the gate, but credit widened toward its gate and the dollar
                stayed pinned at the EXTREME RISK-OFF level
              </span>. Dashboard render is 2026-06-24 22:15Z, ~1.85h before the snapshot. US
              10Y nominal <span className="dn-tag bull">4.50% (−1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.68</span> — tight regime, RISK-OFF, eased 1bp
              off 06-24&rsquo;s 4.51% to 3bp from the 4.53% re-grow gate. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.29% (+1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+3.05</span> — EXTREME RISK-OFF, the tightest line
              on the panel, still firming. 5Y5Y BE inflation{' '}
              <span className="dn-tag bull">2.17% (−1.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag bull">2.18% (−3.0bp)</span> — inflation expectations
              softening, both episodic. HY OAS{' '}
              <span className="dn-tag bear">2.71% (+6.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.22</span> — credit still loose (RISK-ON on the
              z-regime) but the spread widened 6bp on the day, narrowing the distance to its
              2.78% re-grow gate to 7bp. MOVE bond vol is{' '}
              <span className="dn-tag">69.1</span> — +3.67 on the day per the source, still
              &ldquo;loose.&rdquo; The dollar held its EXTREME level: DXY{' '}
              <span className="dn-tag bear">101.39 (+0.37 day)</span>, regime z{' '}
              <span className="dn-tag bear">+2.98</span>, episodic z +2.55 — but the level,
              delta and z read byte-identical to the 06-24 render, so treat it as
              possibly-stale FX carry, not a fresh confirmation. Fed net liquidity{' '}
              <span className="dn-tag bear">$5.849T (−0.038T)</span>, regime z{' '}
              <span className="dn-tag">+0.05</span> but episodic z{' '}
              <span className="dn-tag bear">−2.42</span> — the |episodic z| &gt; 1.5
              day-change surprise the dashboard flags. USD/JPY{' '}
              <span className="dn-tag">161.56 (−0.01 day)</span>, regime z +1.53, episodic
              +1.86 — also byte-identical to 06-24, same stale-carry caveat; US-JP 10Y spread{' '}
              <span className="dn-tag bull">1.85% (−1.0bp)</span>; USD/CNY{' '}
              <span className="dn-tag">6.8101 (+0.02)</span>; WTI{' '}
              <span className="dn-tag">$78.9 (−1.4, fresh daily this cut)</span>.{' '}
              <span className="dn-em">
                Net: the macro backdrop is two-sided this cut — the 10Y eased 1bp off the
                gate (now 3bp away) while credit widened 6bp toward its gate (now 7bp away),
                so the two re-grow legs moved in opposite directions and neither fired. The
                dollar / real-rate EXTREME RISK-OFF headwind persists but the FX legs are
                possibly stale-carry. The reclaim-long rates filter (10Y &lt; 4.55%) stays
                TRUE at 4.50% with a touch more room. The macro read neither confirms nor
                refutes the endogenous break of the 200W floor — it is a persistent headwind
                that did not intensify this cut.
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
                <tr><td>US 10Y nominal</td><td className="num">4.50%</td><td className="num bull">−1.0bp</td><td className="num bear">+1.68</td><td className="bear">tight · RISK-OFF · 3bp from gate</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.29%</td><td className="num bear">+1.0bp</td><td className="num bear">+3.05</td><td className="bear">tightest line · EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.17%</td><td className="num bull">−1.0bp</td><td className="num">−0.81</td><td className="neut">soft · episodic</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.18%</td><td className="num bull">−3.0bp</td><td className="num">−2.39</td><td className="neut">soft · episodic</td></tr>
                <tr><td>HY OAS</td><td className="num">2.71%</td><td className="num bear">+6.0bp</td><td className="num bull">−1.22</td><td className="bull">loose · widened to 7bp from gate</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.516</td><td className="num">−0.00</td><td className="num">−0.07</td><td className="stale">weekly · neutral</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">69.1</td><td className="num bear">+3.67</td><td className="num bull">−0.60</td><td className="bull">loose · up on the day</td></tr>
                <tr><td>DXY</td><td className="num">101.39</td><td className="num bear">+0.37</td><td className="num bear">+2.98</td><td className="bear">EXTREME RISK-OFF · ID to 06-24 (FX stale-carry?)</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.849T</td><td className="num bear">−0.038T</td><td className="num">+0.05</td><td className="bear">drained · episodic −2.42</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.56</td><td className="num">−0.01</td><td className="num bear">+1.53</td><td className="bear">firm · ID to 06-24 (FX stale-carry?)</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.85%</td><td className="num bull">−1.0bp</td><td className="num bull">−0.99</td><td className="neut">tight</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.8101</td><td className="num">+0.02</td><td className="num bull">−1.31</td><td className="neut">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.243</span> — loosened from the
              0.298 of 06-24 and now <span className="dn-tag">crossed below the 0.25
              idiosyncratic threshold</span>, so the regime line flipped from NORMAL to{' '}
              <span className="dn-signal">IDIOSYNCRATIC — BTC is decoupling from the broad
              cross-asset complex on the 7d window</span>, though its top ties remain the
              equity / industrial-metal cluster: NQ <span className="dn-tag">+0.579</span>,
              SP500 <span className="dn-tag">+0.535</span>, NVDA{' '}
              <span className="dn-tag">+0.503</span>, COPPER{' '}
              <span className="dn-tag">+0.424</span>, JP225{' '}
              <span className="dn-tag">+0.419</span>, URNM{' '}
              <span className="dn-tag">+0.377</span>, TSLA{' '}
              <span className="dn-tag">+0.356</span>, with NGAS{' '}
              <span className="dn-tag">−0.273</span> inverse and GOLD a weak{' '}
              <span className="dn-tag">+0.192</span>. 7d performance has BTC the clear
              laggard of the complex:{' '}
              <span className="dn-tag bear">BTC −5.26%</span>, NQ{' '}
              <span className="dn-tag bear">−0.95%</span>, SP500{' '}
              <span className="dn-tag bear">−1.14%</span>, JP225{' '}
              <span className="dn-tag bull">+0.20%</span>, NVDA{' '}
              <span className="dn-tag bear">−3.13%</span>, META{' '}
              <span className="dn-tag bear">−3.15%</span>, MSFT{' '}
              <span className="dn-tag bear">−4.50%</span>, GOOGL{' '}
              <span className="dn-tag bear">−6.37%</span>, AMZN{' '}
              <span className="dn-tag bear">−2.84%</span>, TSLA{' '}
              <span className="dn-tag bear">−5.38%</span>; metals crushed (GOLD{' '}
              <span className="dn-tag bear">−6.90%</span>, SILVER{' '}
              <span className="dn-tag bear">−16.56%</span>, PLAT{' '}
              <span className="dn-tag bear">−10.04%</span>, PALL{' '}
              <span className="dn-tag bear">−12.01%</span>); energy down (CL{' '}
              <span className="dn-tag bear">−7.00%</span>, BRENT{' '}
              <span className="dn-tag bear">−6.51%</span>, NGAS{' '}
              <span className="dn-tag bull">+2.10%</span>).{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d return −5.26% vs NQ −0.95% is a lag of −4.31pt (was −2.49pt on
                06-24) — the gap nearly doubled, and the character shifted: equities are now
                only modestly red (NQ −0.95%, SP500 −1.14%) while BTC fell −5.26%, so this is
                no longer BTC underperforming inside a uniformly red tape — equities have
                stabilised and BTC has kept falling, which is what tipped the correlation
                regime to IDIOSYNCRATIC. The endogenous-to-crypto read is reinforced: the
                break of the 200W floor is a BTC-specific event (dealer gamma deepening, spot
                below the flip and the floor, no MA support), with the metals complex the
                only correlated casualty and equities largely out of it.
              </span>{' '}
              JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book <span className="dn-roman">V · book FLAT · 200W floor — DAILY-CLOSE BREAK FIRED (06-24 close $61,051 &lt; $62,443), weekly-close escalation PENDING (06-29 in-progress reads −2.18% below) · scout STILL stood down (spot −3.15% below the flip, no MA support, tape blind, book deepened short-gamma, no confirmed engine print) · macro tail mixed (10Y eased to 3bp, OAS widened to 7bp) · squeeze-cycle ON HOLD (SM dead ~12.94 days)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — the cycle floor&rsquo;s daily-close early
                warning has fired, the weekly-close escalation is pending, every other read
                worsened, and the binding constraint is still data integrity
              </span>. The structural positive of the lineage broke at the daily-close level
              this cut: the 06-24 daily bar closed $61,051, −2.23% below the $62,443 floor,
              so the early-warning condition the 06-24 note named (a daily close below the
              floor) has FIRED. Per the framework that is the first hard warning, not yet the
              break — the break is a sustained weekly close below, and the in-progress 06-29
              week reads $61,080 (−2.18% below), so the escalation is pending the 06-29 settle.
              The 22JUN weekly close $63,990 (+2.48% above) is still the last resolved weekly
              hold, so the 200W reclaim thesis is not yet falsified, but it is now one weekly
              close from dying. The scout still cannot be taken: spot is −3.15% below the flip
              (deeper than 06-24&rsquo;s −2.18%) with no MA beneath it, the positioning legs
              (SM short bleed, funding posture, cover-flow) all require a live tape and there
              is none for a ninth day, the dealer book deepened to −73.9M net-short-gamma with
              the 26JUN monthly −69.70M 1.3 DTE, and the engine carries no confirmed
              constructive trigger — only an unconfirmed 1h below-water golden cross against a
              fresh 1w death cross. No new short either: the daily-close break already fired
              into a −69.70M monthly that prices the concentrated downside, 1.3 DTE, with
              stale flow and a blind tape — chasing a break that the dealer strip already
              prices, into opex, is a poor entry. The trade book today is: no shorts, no
              scout, no fresh hedge — fix the tape AND watch the 06-29 weekly close vs the
              floor before re-arming.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch — DAILY-CLOSE BREAK FIRED: the 06-24 daily close $61,051 settled −2.23% below the $62,443 floor (the early warning the 06-24 note named), weekly-close escalation PENDING (06-29 in-progress reads $61,080, −2.18% below); the 22JUN weekly close $63,990 +2.48% above still stands as the last resolved weekly hold</span>
              <div className="dn-trade-name">
                200W cycle floor watch — the daily-close early warning fired and the weekly-close escalation is pending: floor $62,443 = full-history W-SMA200 (355 completed weekly bars, unchanged vs the 06-24 pin), 06-24 daily close $61,051 (−2.23% below), in-progress 06-29 week $61,080 (−2.18% below), 703/1,441 last-24h 1-min closes below the floor
              </div>
              <div className="dn-thesis">
                The 06-24 note framed the floor as a weekly-close hold under direct intraday
                attack — buffer +0.52%, the 24h low wicked below — and named the next daily
                close vs the floor as the early warning. That warning fired: the 06-24 daily
                bar closed{' '}
                <span className="dn-tag bear">$61,051, −2.23% below the $62,443 floor</span>,
                the first daily close beneath the line since the 06-15 reclaim. Per the
                framework an intraday wick is not the break and a daily close below is the
                early warning — now fired — while a sustained weekly close below is the
                escalation that breaks the floor and falsifies the 06-15 reclaim thesis. The
                22JUN weekly close{' '}
                <span className="dn-tag bull">$63,990, +2.48% above</span> still stands as the
                last resolved weekly hold, so the thesis is not yet dead, but the in-progress
                06-29 week reads{' '}
                <span className="dn-tag bear">$61,080, −2.18% below</span>, so the escalation
                is pending the 06-29 settle.{' '}
                <span className="dn-em">The structural positive of the lineage is broken at
                the daily-close level and one weekly close from full escalation; spot holds
                no MA beneath it, and the 06-29 weekly close is now the single level that
                resolves the thesis.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor</span><span className="dn-lvl-v">$62,443 = full-history W-SMA200, recomputed this cut from the 2019→ parquet glob (355 completed weekly W-MON bars, excluding the in-progress 06-29 week); unchanged vs the 06-24 pin (slow weekly SMA, ~$250/wk) · weekly_200sma.json absent so the ratio percentile / last-event stay unsourced, not fabricated</span></div>
                <div><span className="dn-lvl-k">daily-close early warning — FIRED</span><span className="dn-lvl-v bear">the 06-24 daily close $61,051 settled −2.23% below the floor — the early warning the 06-24 note named has fired; 703/1,441 of the last 24h 1-min closes printed below the floor and the in-progress 06-25 bar holds −2.18% below</span></div>
                <div><span className="dn-lvl-k">last resolved weekly hold (still stands)</span><span className="dn-lvl-v bull">22JUN weekly close $63,990 +2.48% above the floor still stands — the 200W reclaim thesis is not yet falsified, but it is one weekly close from dying</span></div>
                <div><span className="dn-lvl-k">escalation (next weekly close) — PENDING</span><span className="dn-lvl-v bear">a sustained weekly close &lt; $62,443 breaks the 200W floor and falsifies the 06-15 reclaim thesis — the in-progress 06-29 week reads $61,080 (−2.18% below); this is the level that resolves the thesis at the 06-29 settle</span></div>
                <div><span className="dn-lvl-k">reclaim side (deeper below)</span><span className="dn-lvl-v bear">spot is −3.15% below the flip $63,067, −2.18% below the 200W floor $62,443, and −3.57% below D-SMA20 $63,343 — no MA beneath spot; a reclaim is a daily close back above the floor then the flip then D-SMA20 — NOT a scout trigger on a blind tape (see scout)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework, not a trade.</b> The floor watch is the single load-bearing
                live level while everything else is stale or framework-only. The daily-close
                early warning has fired and the weekly-close escalation is pending — no
                position is taken on the watch: it sets the fired early-warning level (06-24
                daily close below), the pending escalation (06-29 weekly close &lt; $62,443),
                and the reclaim ladder (floor $62,443 → flip $63,067 → D-SMA20 $63,343), and
                the desk will not pre-position short into a break the −69.70M monthly already
                prices nor long into a reclaim it cannot confirm, on a blind tape.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STILL STOOD DOWN · price pre-condition DEEPER OFFSIDE (spot −3.15% below the flip, −2.18% below the floor, no MA beneath spot) + tape blind ~12.94 days + book deepened short-gamma + no confirmed engine print</span>
              <div className="dn-trade-name">
                Cover-bounce scout — the flip reclaim is now deeper offside than 06-24, spot lost the floor with no MA beneath it, and the scout stays stood down on a blind tape into a deepening short-gamma book
              </div>
              <div className="dn-thesis">
                The 06-22 note saw the scout&rsquo;s price pre-condition print briefly (spot
                reclaimed the flip), the 06-23 / 06-24 notes saw it handed back and widen.
                Tonight it deteriorated further: spot rolled $62,768 (the 06-24 note spot) → $61,080, now{' '}
                <em>−3.15% below the flip</em> $63,067, −2.18% below the 200W floor, and below
                D-SMA20 — there is no MA beneath spot at all. So the scout is blocked on four
                counts. (1) The price pre-condition is deeper offside — spot is further below
                the flip than 06-24 and has now lost the floor. (2) The positioning legs (SM
                short bleed, funding posture, cover-flow) all require a live tape, and there
                is none — the desk cannot see whether the close below the floor was
                distribution or thin drift. (3) The dealer book deepened to −73.9M
                net-short-gamma with spot inside the $58k–$62k cluster between the $60k
                −37.06M floor and the $62k −23.08M strike, so the book amplifies the next move
                rather than dampening it. (4) The engine carries no confirmed constructive
                trigger — only an unconfirmed 1h water-down golden cross (early below-water
                probe, DIF −572.9) against a fresh 1w death cross.{' '}
                <span className="dn-em">A scout long on a positioning-blind tape, below the
                flip and the floor with no MA beneath spot, into a deepening short-gamma book,
                with no confirmed engine print, is not a trade — the only constructive counters
                are the regime&rsquo;s mean-reversion lean and the still-standing last weekly
                hold, and neither is sufficient to size into without a tape and a confirmed
                engine trigger.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">stood down · no entry · price pre-condition deeper offside (spot −3.15% below the flip, below the floor, no MA beneath spot) — re-evaluate only after the live tape is restored AND spot re-reclaims the floor then the flip then D-SMA20</span></div>
                <div><span className="dn-lvl-k">technical pre-condition</span><span className="dn-lvl-v bear">floor $62,443 / flip $63,067 / D-SMA20 $63,343 reclaim (NOT true — spot below all three, no MA beneath spot) AND a confirming engine print (NOT true — 1 bull / 9 bear / 0 neutral, 1w death cross fresh, only an unconfirmed 1h below-water golden cross)</span></div>
                <div><span className="dn-lvl-k">data pre-condition</span><span className="dn-lvl-v bear">live tape restored (currently 185.4h frozen) AND SM feed live (currently dead ~12.94 days) — both must hold before any positioning leg can be read; this is the binding block</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> no scout entry without a live positioning tape. The
                mean-reversion regime and the still-standing last weekly hold do not trigger a
                scout while the SM / funding / flow legs are blind, spot is below the flip and
                the floor with no MA beneath it, the dealer book is more short gamma at spot,
                and the engine has no confirmed trigger — the desk does not size into a
                cover-bounce it cannot see being covered. The price block that lifted on 06-22
                has re-closed and widened; the operational block (tape down) and the
                structural block (deepened short gamma into a 1.3-DTE opex, floor broken on the
                daily close) compound it.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — two-sided this cut: 10Y leg eased to 3bp from firing (4.50% vs 4.53% gate), HY OAS leg widened to 7bp from firing (2.71% vs 2.78%); neither fired · Tier-1 printed fresh deltas, no stale flag</span>
              <div className="dn-trade-name">
                Downside put-spread — re-grow gate un-fired, legs moved opposite ways (10Y eased to 3bp, OAS widened to 7bp); no hedge added (the 26JUN −69.70M monthly already prices the concentrated downside)
              </div>
              <div className="dn-thesis">
                The macro re-grow gate the lineage carries — HY OAS &gt; 2.78% OR 10Y &gt;
                4.53% as the condition to re-grow a downside tail — stays UN-FIRED, and the
                two legs moved in opposite directions this cut: the 10Y eased{' '}
                <em>off</em> the gate (from 2bp away on 06-24 at 4.51% to 3bp away today at
                4.50%) while HY OAS widened <em>toward</em> it (from 13bp away at 2.65% to 7bp
                away at 2.71%). So the credit leg is now the closer of the two, but neither
                has fired. The reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE at 4.50%,
                with a touch more room. The macro tape is the same dollar / real-rate EXTREME
                RISK-OFF headwind, but a macro tail is not the right instrument for an
                endogenous floor break; the concentrated downside risk that remains is the
                26JUN monthly −69.70M, which the dealer gamma already prices, 1.3 DTE.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · gate un-fired both legs · 10Y leg eased to 3bp from the gate, OAS leg widened to 7bp (now the closer leg)</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (next Tier-1 print)</span><span className="dn-lvl-v bear">10Y &gt; 4.53% close (currently 4.50%, 3bp to fire, eased) OR HY OAS &gt; 2.78% close (currently 2.71%, 7bp to fire, widened)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — TRUE at 4.50%; awaits a BTC-internal pivot AND a live tape to translate</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as the levels
                drift, not backtested breakpoints. Neither leg fired — the credit leg is now
                the closer (7bp) and the rates leg eased back (3bp) — and if either fires, a
                downside tail would be reassessed in a separate future note (trigger /
                invalidation / R defined there); note the dealer strip carries the 26JUN
                monthly −69.70M, so any such tail would be additive to existing dealer short
                gamma rather than a clean independent hedge.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · ON HOLD — SM feed DEAD ~12.94 days, the re-stack signature cannot be read this cut</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — ON HOLD (continuation of 06-16 → 06-24): the SM feed is frozen ~310.5h, the re-stack signature cannot be read this cut
              </div>
              <div className="dn-thesis">
                The squeeze-cycle / re-stack-hostile-2 framework reads discrete SM steps
                (Δshort &gt; 0 + Δlong &lt; 0 same minute) as continuation signatures; its
                calendar prior (the BJ 13–15 cadence) was falsified on 05-31 and it has run as
                a no-prior watchlist since. It cannot be assessed today for the simplest
                reason: the SM feed is dead. long_btc / short_btc / net_btc have been constant
                since 2026-06-12 01:36Z (~310.5h), so there are no SM deltas to read. The
                06-16 note put this ON HOLD at ~94.5h, the 06-23 note at ~262.5h, the 06-24
                note at ~286.5h; it remains ON HOLD at ~310.5h.{' '}
                <span className="dn-em">No signature can print from a frozen feed; the
                framework is dark until the SM data resumes.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v bear">ON HOLD · SM feed frozen ~310.5h (since 2026-06-12 01:36Z) · no SM deltas computable</span></div>
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
              Decision conditions <span className="dn-roman">VI · LIVE TAPE OUTAGE still the operative condition (ninth day) · 200W floor DAILY-CLOSE BREAK FIRED (06-24 $61,051), weekly-close escalation PENDING (06-29 reads −2.18% below) · flip reclaim DEEPER OFFSIDE (−3.15%), book DEEPENED −73.9M, 26JUN monthly −69.70M (1.3 DTE) · scout stood down (no MA support, no confirmed print) · macro mixed (10Y eased to 3bp, OAS widened to 7bp)</span>
            </h2>

            <p>
              Of the 06-24 conditions: the live tape did <em>not</em> come back — it is ~24h
              deader, now 185.4h frozen with the SM feed at ~12.94 days; the 200W floor
              daily-close early warning <em>fired</em> (06-24 close $61,051, −2.23% below)
              and the weekly-close escalation is now pending (06-29 in-progress reads −2.18%
              below); the flip reclaim went further offside (spot −3.15% below the flip vs
              −2.18% on 06-24) and spot lost the floor with no MA beneath it; the dealer book
              deepened from −64.4M to −73.9M net-short-gamma as the 26JUN monthly deepened
              −61.89M → −69.70M (1.3 DTE); the scout&rsquo;s price block widened and the
              engine carries no confirmed constructive trigger; the macro re-grow gate stayed
              un-fired but the legs split (10Y eased to 3bp, OAS widened to 7bp); the
              squeeze-cycle stayed ON HOLD on a deader feed. The dominant condition is
              unchanged: <em>the desk is positioning-blind, now into a 200W floor broken on
              the daily close, a deeper-offside reclaim with no MA support, and a deepening
              short-gamma book it cannot confirm</em>. The conditions today re-set around the
              continuing outage, the fired daily-close break, the pending weekly-close
              escalation, and the deepened 26JUN amplifier:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Live tape restored (PRIMARY operational)</td><td className="bull">live_db.json resumes writing fresh rows beyond 2026-06-17 06:43Z AND the SM triple updates off its 06-12 01:36Z freeze</td><td>re-read funding / OI / flow / SM in full; only then can the scout or squeeze-cycle be evaluated — and only then can the close below the floor be confirmed as distribution vs drift; the positioning dimension has now been blind seven notes running</td></tr>
                <tr><td>200W floor — DAILY-CLOSE BREAK FIRED</td><td className="bear">06-24 daily close $61,051, −2.23% below the $62,443 floor (the early warning the 06-24 note named); 703/1,441 last-24h 1-min closes below; in-progress 06-25 bar $61,080, −2.18% below</td><td>the daily-close early warning has fired — this is the first hard structural change since the 06-15 reclaim; no position taken, the floor is now overhead and the slow level has flipped from support to resistance</td></tr>
                <tr><td>200W floor — escalation (next weekly close) PENDING</td><td className="bear">a sustained weekly close &lt; $62,443 (W-SMA200 floor) breaks the floor; the 22JUN weekly close $63,990 +2.48% above still stands, the in-progress 06-29 week reads $61,080 −2.18% below</td><td>the 06-29 weekly close is the single level that resolves the 06-15 reclaim thesis — a close below escalates the break and falsifies the thesis, the down-leg resumes with the 26JUN −69.70M amplifier; watch the 06-29 settle closely</td></tr>
                <tr><td>Flip reclaim (scout price pre-condition) — DEEPER OFFSIDE</td><td className="bear">spot $61,080 −3.15% below flip $63,067, −2.18% below the floor $62,443, −3.57% below D-SMA20 $63,343; no MA beneath spot; re-reclaim is a daily close back above the floor then the flip then D-SMA20</td><td>the price pre-condition went further offside and lost the floor — re-reclaim of the floor then the flip then D-SMA20 is the first step that re-opens scout evaluation, but only IF the live tape is also restored; on a blind tape below the floor the reclaim is watched, not traded</td></tr>
                <tr><td>26JUN26 monthly amplifier (1.3 DTE) — DEEPENED, net book deepened</td><td className="bear">26JUN −69.70M (was −61.89M on 06-24), aggregate GEX −73.9M (was −64.4M); spot sits inside the $58k–$62k cluster between the $60k −37.06M floor and the $62k −23.08M strike</td><td>the dealer book deepened net-short-gamma at spot — it amplifies the next move; the one concentrated downside risk is the 26JUN monthly 1.3 DTE; watch only, no short instruction in this note (the break already fired into a strip that prices it; any future setup defines its own trigger / invalidation / R)</td></tr>
                <tr><td>Macro tail re-grow (legs split)</td><td className="bear">10Y &gt; 4.53% (3bp to fire, eased) OR HY OAS &gt; 2.78% (7bp to fire, widened — now the closer leg) — Tier-1 printed fresh deltas, no stale flag this cut</td><td>no hedge instruction in this note — a gate fire (OAS is now closest, 7bp away) would be reassessed in a separate future note; note any such tail would be additive to existing dealer short gamma −69.70M</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.50%</td><td>standalone filter true with a touch more room; needs a BTC-internal pivot AND a live tape to translate to a scout long</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (ON HOLD)</td><td className="stale">SM feed dead ~310.5h; no deltas computable</td><td>suspended, not negative — re-arm on the first fresh SM deltas after the feed resumes</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the 06-29 weekly close confirms the break by settling below the
                $62,443 200W floor — the daily-close early warning has already fired (06-24
                $61,051) and the in-progress 06-29 week reads −2.18% below — or whether spot
                can claw a daily close back above the floor before the 06-29 settle and keep
                the 06-15 reclaim thesis alive; on the constructive side, a daily close back
                above the floor then the flip $63,067 then D-SMA20 $63,343 — which the desk
                still cannot scout on a blind tape — would re-open the case
              </span>. The de-amplification of the early-week notes has fully reversed across
              three sessions (aggregate −0.6M → −35.1M → −64.4M → −73.9M, spot from above the
              flip to −3.15% below it and below the floor), so the structural risk has
              re-thickened to the one monthly, 1.3 DTE; the structural positive — the 200W
              floor — broke at the daily-close level and is one weekly close from full
              escalation, the desk still cannot read the tape that would say whether it is
              being lost on distribution or thin drift. Until the tape is restored this note
              runs as written: the book is flat, the scout&rsquo;s price block is wider and
              the engine has no confirmed trigger, the macro tail gate legs split (OAS now the
              closer at 7bp), the squeeze-cycle is suspended, and the 200W floor watch is the
              one live level — now a broken-on-daily-close floor pending weekly-close
              escalation. Price and MTF deepened bearish, the dealer book deepened short-gamma
              and spot fell below the flip and the floor; macro is a persistent dollar /
              real-rate headwind that did not intensify, BTC the deep laggard as the
              correlation regime crossed to IDIOSYNCRATIC. The right read for the next 24h is{' '}
              <em>floor-broken-on-daily-close, escalation-pending — respect the fired early
              warning, watch the 06-29 weekly close vs the floor against the −69.70M monthly
              into opex, fix the tape before reading positioning, and do not scout a reclaim
              that has gone deeper offside below the floor</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> this is the <b>v2</b> note — <b>post codex hostile audit</b>,
            promoted from v1 after STAGE C applied every finding with grep-closure
            verification. Primary audit: codex hostile cross-model run, verdict
            PASS-WITH-NOTES (0 CRITICAL, 1 MAJOR, 0 MINOR, 0 NIT). Supplementary numeric
            recompute: ask-deepseek (NOT an auditor — every item adjudicated by recompute
            before acting, never auto-applied). Reference:{' '}
            <code>audits/2026-06-25-desk-note.md</code>.{' '}
            <b>Findings &amp; grep-closure evidence (pattern → hits-before → hits-after):</b>{' '}
            <b>DN-001 (MAJOR — reclaim ladder out of numeric order, floor → D-SMA20 → flip
            after the flip slipped below D-SMA20):</b> reordered every reclaim ladder to the
            ascending sequence floor $62,443 → flip $63,067 → D-SMA20 $63,343. Patterns
            searched: <code>&ldquo;then D-SMA20 then the flip&rdquo;</code> (4 → 0),{' '}
            <code>&ldquo;D-SMA20 $63,343 → flip $63,067&rdquo;</code> (1 → 0),{' '}
            <code>&ldquo;D-SMA20 $63,343 / flip $63,067&rdquo;</code> (1 → 0),{' '}
            <code>&ldquo;then D-SMA20 $63,343 then the flip&rdquo;</code> (1 → 0). All seven
            ladder occurrences (the six codex-cited lines plus the second ladder in the
            decision-conditions row) now read floor → flip → D-SMA20; residual{' '}
            <code>D-SMA20 … flip</code> matches are descending offset listings, not reclaim
            sequences. <b>RESOLVED (hits-after = 0).</b>{' '}
            <b>ask-deepseek CRITICAL (claimed conflicting 06-24 prices $62,768 vs $62,761):</b>{' '}
            ADJUDICATED — both values are sourced and distinct, not a contradiction: $62,768 is
            the 06-24 note spot (06-24 00:07Z parquet bar, confirmed against the 06-24 page)
            and $62,761 is the bar exactly 24h before today&rsquo;s 00:06Z bar (06-24 00:06Z),
            $7 apart on the same series one minute apart. The −2.68% 24h change recomputes from
            $62,761 (61,080.40 / 62,760.5 − 1 = −2.677%). No numeric change; clarifying labels
            added at the three references so the two anchors cannot read as conflicting.{' '}
            <b>ask-deepseek MINOR (MA-offset rounding D-SMA50 −13.59%, D-SMA150 −14.61%):</b>{' '}
            ADJUDICATED — REJECTED on recompute: 61,080.40 / 70,686 = −13.589% → −13.59% (page
            correct, not −13.58%); 61,080.40 / 71,528 = −14.606% → −14.61% (page correct, not
            −14.60%). The deepseek deltas came from mis-divided ratios; page values stand
            unchanged. The numbers carried above are the STAGE A atomic-snapshot reads (parquet
            last bar 2026-06-25 00:06Z; MTF / GEX / cross-asset 00:01–00:02Z; macro render
            2026-06-24 22:15Z; live tape FROZEN at 2026-06-17 06:43Z, 185.4h; SM feed dead
            since 2026-06-12 01:36Z, ~12.94 days), archived at{' '}
            <code>/opt/desk-note/snapshots/2026-06-25-0007/</code> for the auditor to re-check
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
            atomic snapshot (2026-06-25 00:07Z) with section-level provenance disclosed in the
            manifest band above;{' '}
            <em>critically, the live derivatives tape was frozen for 185.4h at snapshot time
            (last row 2026-06-17 06:43Z) and the smart-money positioning feed has been dead
            ~12.94 days</em>, so all funding, OI, flow and positioning figures are explicitly
            last-known / stale or non-computable and flagged as such; the macro panel render is
            2026-06-24 22:15Z (~1.85h before snapshot) and its Tier-1 series printed fresh
            deltas with no stale flag this cut, though the DXY / USD/JPY FX legs read
            byte-identical to the 06-24 render and are flagged as possibly stale-carry. Price,
            MTF, GEX and cross-asset are fresh. This is the v2 note, promoted after the STAGE B
            codex hostile audit. Levels, sizes, and conditions are illustrative of the
            desk&rsquo;s process, not standing recommendations. Past correlation, gamma, and
            positioning patterns do not bind future tape. Derivatives carry the risk of total
            loss and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The early warning fired: the 200W floor broke on the 06-24 daily close
                ($61,051), spot holds no MA beneath it, the dealer book deepened short-gamma
                into the 1.3-DTE 26JUN opex, and the correlation regime crossed to
                idiosyncratic — all read through a dead tape a ninth day. Floor broke on the
                close. Escalation pending. Blind.
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
            v2 · 2026-06-25 00:07Z snapshot · post codex hostile audit ·
            sources: live_db.json (FROZEN 185.4h) · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
