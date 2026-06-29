import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-29 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-29',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-29' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260629() {
  await requireViewer('/desk/2026-06-29');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-29 · v2</span>
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
              <span className="dn-big">$59,267</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.30%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-29 00:06Z ·{' '}
              <span className="dn-em">
                LIVE-TAPE OUTAGE INTO A THIRTEENTH DAY — the OKX monitor has now been
                frozen 281.4h; price/MTF/GEX/cross-asset are fresh, the derivatives
                tape is still dark and the SM feed has been dead ~16.94 days. The
                structural reads of this cut: the 06-28 daily bar closed DOWN at
                $59,550 (−$450 vs 06-27 $60,000, a FIFTH consecutive close below
                the $62,443 floor); the weekly-close escalation is now SETTLING TODAY
                (06-29 is Monday — the in-progress 06-29 week reads $59,267.30, −5.09%
                below the floor, on track to confirm the break); the dealer book FLIPPED
                BACK to net-SHORT-gamma −20.1M (was +5.9M net-long on 06-28) and a
                concentrated downside amplifier re-emerged at 3JUL26 −9.63M; and the flip
                reclaim WIDENED to −1.42% (spot below the eased flip $60,119) as the
                06-28 long-gamma reprieve was handed straight back.
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
                    <b>281.4h stale</b> vs the 00:06Z snapshot anchor (was 257.4h on
                    the 06-28 note, 233.4h on 06-27 — the outage has run another ~24h
                    since the last note). Funding / OI / CVD / basis / retail /
                    taker-flow are LAST-KNOWN at 06-17 06:43Z, not current. The SM
                    sub-feed (long_btc / short_btc / net_btc) is frozen even longer —
                    constant since 2026-06-12 01:36Z (~406.5h / ~16.94 days); SM net and
                    the SM cut-fraction are <b>NON-COMPUTABLE</b> this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-29 00:01Z scan</td>
                  <td className="dn-flag">
                    fresh (~5 min before anchor) · rolling latest-file artifact,
                    archived verbatim at
                    /opt/desk-note/snapshots/2026-06-29-0006/ · in-progress bars · scan
                    spot $59,465, 24h −0.92%, 24h H/L $60,543 / $58,888, qVol $6.21B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-29 00:01Z snapshot</td>
                  <td className="dn-flag">
                    fresh (~5 min before anchor) · Deribit idx $59,677 ($410 above
                    parquet spot $59,267) · 916 instruments (−14 vs 06-28) · net GEX{' '}
                    <b>−20.1M</b> (net SHORT gamma, <b>FLIPPED BACK NEGATIVE</b> from
                    +5.9M on 06-28; −20.9M on 06-27) · flip $60,119 (spot −1.42% BELOW,
                    the gap WIDENED from −0.43%) · the front is now 29JUN26 0.3 DTE at{' '}
                    <b>−1.29M</b> (settles ~08:00Z today), the heaviest negative
                    expiry is 3JUL26 4.3 at <b>−9.63M</b> (a RE-EMERGED downside
                    amplifier, deeper than the −6.08M of 06-28) · spot $59,267 sits just
                    below the $60k −13.33M wall (still the heaviest, now OVERHEAD), with
                    the $59k −9.32M and $58k −12.94M walls beneath
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-29 00:01Z
                  </td>
                  <td className="dn-flag">fresh · 7d 1h bars · 22 assets · 168 rows · regime NORMAL (mean |r| 0.283, essentially unchanged from 0.285 on 06-28 — still above the 0.25 idiosyncratic threshold, BTC coupled to the broad risk complex)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-28 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.85h render lag · a Sunday-evening render — most FRED Tier-1 daily
                    series are byte-identical to the 06-28 render: 10Y <b>4.40%</b>
                    (−1.0bp, 13bp from the gate), TIPS <b>2.19%</b> (−4.0bp, still
                    EXTREME RISK-OFF), HY OAS <b>2.78%</b> (+2.0bp, still AT the 2.78%
                    re-grow gate — 0bp to fire) · MOVE bond vol <b>66.8</b> (source 1d Δ
                    −0.31, loose) · the FX legs are essentially flat this cut:{' '}
                    <b>DXY 101.37</b> (+0.01 day, was 101.36) and <b>USD/JPY 161.68</b>
                    (−0.12 day, unchanged) · Fed net liq $5.812T (no fresh weekly print)
                    · NFCI neutral (now stale 9d) · WTI $78.9 now stale 6d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-29 00:06Z (close $59,267)</td>
                  <td className="dn-flag">
                    fresh kline (exchange OHLC, independent of the frozen live tape) ·
                    offsets recomputed vs the parquet last-bar close, the freshest
                    available spot while the live tape is frozen · the displayed weekly
                    ladder uses the 2023→ subset (182 weekly bars), so no W-SMA200 row;
                    the 200W floor is recomputed directly from the full-history glob —
                    355 completed weekly W-MON bars (2019→present), excluding the
                    in-progress 06-29 week — = <b>$62,443</b>, unchanged vs the $62,443
                    the 06-25 → 06-28 notes pinned (a slow weekly SMA, ~$250/wk). <b>Spot
                    is now −5.09% BELOW the floor (slipped from −3.90%) and every MA on
                    the matrix is still overhead — no positive offset, the fifth such cut
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
              <span className="dn-v bear">−7.24% (STALE · 06-17 06:43Z · 281.4h)</span>
              <span className="dn-src">live_db raw funding −0.006608 × 1095 = −7.24% ann (NOT ×100) · LAST-KNOWN at the 06-17 06:43Z freeze, now 281.4h stale, not a current read · byte-for-byte the same frozen row carried by the 06-19 → 06-28 notes; the last-available ann over the 24h+1m inclusive sampled window ending at the freeze (1,442 rows) was mean +0.20%, range −7.24% / +7.21%, 819 / 1,442 rows negative — a balanced, two-sided book at the point the tape died</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · vs 06-28</span>
              <span className="dn-v">tape frozen — not computable</span>
              <span className="dn-src">the live tape has not written since 06-17 06:43Z, so there is still no current funding to difference against the 06-28 note · last-known print at the freeze was −7.24% ann (shorts paying longs); the leverage gate remains un-assessable a thirteenth day running</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC (−0.45%) · STALE window</span>
              <span className="dn-src">live_db oi_btc 102,945 at the 06-17 06:43Z freeze vs the start of a 24h+1m inclusive sampled window (1,442 rows) · the window ENDS at the freeze, NOT into the 00:06Z snapshot — it describes the tape up to 06-17 06:43Z and is 281.4h out of date</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` at the 06-17 06:43Z freeze (was 58.29% at the start of the 24h+1m inclusive sampled window — a +1.18pt long add into the roll-over) · last-known, 281.4h stale</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED DEAD ~406.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · this triple has been byte-for-byte constant since 2026-06-12 01:36Z (~406.5h / ~16.94 days) — it is a FROZEN value, NOT a current positioning read; carried only to mark the dead feed</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">NON-COMPUTABLE</span>
              <span className="dn-src">SM feed frozen ~16.94 days · |Δ| / prior_net cannot be computed — there is no current SM net to difference · the squeeze-cycle / re-stack framework is blind this cut, a continuation of the 06-16 → 06-28 ON-HOLD</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">48.0% / 43.07%</span>
              <span className="dn-src">GEX median IV across 916 instruments (00:01Z, fresh) vs 30D close-to-close RV 43.07% off parquet — chain richness jumped to ~+4.93pt over realised (was ~+0.93pt on 06-28 — the chain RICHENED as the book flipped back short-gamma); RV stays elevated (was 43.37% on 06-28, 24.91% on 05-31) · IV is a chain-median across 916 instruments, NOT a tradable spread</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−1.42% (below)</span>
              <span className="dn-src">flip $60,119 (was $60,272 · eased −$153) · vs parquet spot $59,267 (59,267.30 / 60,119 − 1 = −1.416%) / GEX file Deribit idx $59,677 (59,677 / 60,119 − 1 = −0.735%, file reads −0.7%) — both references BELOW the flip and the gap WIDENED from −0.43% on 06-28 · net GEX −20.1M (net SHORT gamma, FLIPPED BACK NEGATIVE from +5.9M) · a concentrated downside amplifier re-emerged at 3JUL26 −9.63M</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The long-gamma reprieve was handed straight back, and the floor break
                walked to a fifth close. The 06-28 daily bar closed DOWN at $59,550
                (−$450 under 06-27 $60,000), a FIFTH consecutive close below the
                $62,443 floor; the dealer book that flipped long-gamma on 06-28 FLIPPED
                BACK to −20.1M net-short-gamma (now amplifying again) and a concentrated
                downside amplifier re-emerged at 3JUL26 −9.63M, the flip eased $60,272 →
                $60,119 but spot fell faster so the reclaim WIDENED to −1.42% (was
                −0.43%), and the MTF frame stack worsened by one to 1/9/0 even as the
                regime classifier improved to 6/9 reversal — all of it still read through
                a dead derivatives tape, a thirteenth day running
              </span>. Spot prints{' '}
              <span className="dn-tag bear">$59,267, −1.30% on 24h</span> at the 00:06Z
              parquet bar (the MTF scan reads −0.92% on its own window), down from the
              06-28 note spot $60,011 — the lineage gave back the $60k pin and is now
              printing below it. The structural positive the lineage carries — the 200W
              weekly-close hold — is at its decision point and the decision is now
              SETTLING: the 22JUN weekly close $63,990 (+2.48% above the floor) still
              stands as the last resolved weekly print, but the daily closes have now
              walked FIVE consecutive settles below it (06-24 $61,051 −2.23%, 06-25
              $59,772 −4.28%, 06-26 $60,072 −3.80%, 06-27 $60,000 −3.91%,{' '}
              <span className="dn-tag bear">06-28 $59,550 −4.63%</span>), and the
              in-progress 06-29 week reads{' '}
              <span className="dn-tag bear">$59,267, −5.09% below the floor</span> — and
              06-29 is Monday, TODAY, so the weekly-close escalation that resolves the
              06-15 reclaim thesis settles at the end of today, on track to confirm the
              break. Spot holds no MA beneath it for the fifth cut running — the 200W
              floor $62,443 (−5.09%) and D-EMA20 $62,722 (−5.51%) are both overhead, the
              nearest lines on the matrix. The dealer book{' '}
              <span className="dn-tag bear">flipped BACK to −20.1M net-SHORT-gamma</span>{' '}
              and re-grew a concentrated downside amplifier at 3JUL26 −9.63M; spot sits
              just below the $60k −13.33M wall, now overhead. MTF worsened by one to{' '}
              <span className="dn-tag bear">1 bull / 9 bear / 0 neutral</span> (was
              1/8/1) — the 30m frame rolled off neutral to a bear count — but the regime
              classifier held the constructive way and improved to{' '}
              <span className="dn-tag bull">6/9 reversal (mean-reversion)</span> from 5/9.
              Macro stayed risk-off this cut on a Sunday-evening render: 10Y held 4.40%,
              HY OAS held 2.78% and is still AT its re-grow gate (0bp to fire), DXY held
              EXTREME and essentially flat at 101.37.{' '}
              <span className="dn-em">
                The operational fact is unchanged and still binding: the OKX monitor has
                now been frozen 281.4h (last row 2026-06-17 06:43Z), funding / OI / CVD /
                basis / retail are last-known and stale, and the SM positioning book has
                been dead ~16.94 days — SM net and the cut-fraction are non-computable.
                The desk cannot see whether the 06-28 down-close was real distribution or
                thin two-sided churn as the book flipped back short-gamma. The read is on
                price, gamma and MTF alone.
              </span>{' '}
              The book stays flat: the regime improved to mean-reversion and the floor
              break is one settle from the weekly-close resolution — but the 06-28
              long-gamma reprieve reversed (book back to −20.1M short-gamma, amplifier
              re-emerged), the floor break extended to a fifth daily close, the flip
              reclaim widened to −1.42%, there is no MA beneath spot, the engine carries
              no confirmed long trigger, and the tape is still dead — no scout and no
              short can be sized here, and the single resolving event (the 06-29 weekly
              close) settles at the end of today.
            </p>

            <p>
              BTC prints <span className="dn-tag">$59,267</span> at the parquet last bar
              (00:06Z),{' '}
              <span className="dn-tag bear">−1.30%</span> on 24h (vs the $60,048.50 bar
              exactly 24h prior — the 06-28 00:06Z parquet bar; the MTF scan reads −0.92%
              on its own 00:01Z window — the spread is the reference window, not a data
              conflict), inside a{' '}
              <span className="dn-tag">$60,543 / $58,888</span> 24h range (per the MTF
              scan H/L). The Deribit index reads $59,677 at 00:01Z and the MTF scan spot
              is $59,465 — so the freshest spot is well-corroborated across three
              independent fresh sources (parquet kline $59,267, GEX Deribit index
              $59,677, MTF scan $59,465), even though the live_db tape that normally
              supplies it is frozen at 06-17 06:43Z, 281.4h stale.{' '}
              <span className="dn-signal">The structural read has moved from a floor
              broken on a fourth daily close with the book flipped long-gamma to a floor
              broken on a FIFTH consecutive daily close with the book flipped BACK
              short-gamma and a downside amplifier re-emerged — and the flip reclaim
              widened to −1.42%</span>: the 22JUN weekly close $63,990 (+2.48% above) is
              still the last resolved weekly hold, the daily closes walked down through
              the line (06-22 $63,990, 06-23 $62,697, 06-24 $61,051, 06-25 $59,772, 06-26
              $60,072, 06-27 $60,000) and the 06-28 close $59,550 ticked further DOWN
              (−$450) while below. Per the framework, a daily close below is the early
              warning and a sustained weekly close below is the escalation that breaks the
              floor and falsifies the 06-15 reclaim thesis; the in-progress 06-29 week
              reads $59,267 (−5.09% below) and 06-29 is a Monday — TODAY — so the
              escalation is no longer pending and settles at the end of today.{' '}
              <span className="dn-em">
                The one structural positive of the lineage is broken at the daily-close
                level on five consecutive closes and settles its weekly-close escalation
                today; spot holds no MA beneath it, and the dealer book that briefly
                de-amplified on 06-28 has flipped back to net-short-gamma and re-grown a
                downside amplifier — and the desk still cannot read the tape that would
                say whether the down-close is distribution or churn.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · LIVE TAPE FROZEN 281.4h (thirteenth day) · SM book dead ~16.94 days · funding/OI/flow last-known stale · the desk cannot see whether the 06-28 down-close was distribution or thin two-sided churn as the book flipped BACK net-short-gamma</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important source of this note — the live derivatives tape —
                is still down, a thirteenth day running
              </span>. The OKX monitor has appended no row to live_db.json since{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> (t = &ldquo;06-17
              14:43&rdquo; BJ; the file mtime 06-17 06:43:08Z confirms the write stopped
              there; the process status is not archived or verified in this cut, so the note
              asserts the missing tape, not a live/hung process). That is now{' '}
              <span className="dn-tag bear">281.4h of missing tape</span> against the 00:06Z
              snapshot anchor — the 06-20 note flagged it at 65.4h, the 06-24 note at 161.4h,
              the 06-26 note at 209.4h, the 06-27 note at 233.4h, the 06-28 note at 257.4h,
              and the outage has run another ~24h without a write. Everything the live tape
              carries — funding, open interest, spot/futures CVD, perp basis, retail long%,
              taker-net, big-print flow, aggressor skew — is therefore{' '}
              <span className="dn-em">last-known at 06-17 06:43Z and not current</span>. The
              smart-money positioning triple (long_btc / short_btc / net_btc) has been
              byte-for-byte constant —{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> — since{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>, ~406.5h (~16.94 days).
              The 06-16 note flagged this dead feed at ~94.5h and put the squeeze-cycle ON
              HOLD; the 06-27 note carried it at ~358.5h, the 06-28 note at ~382.5h; today it
              is ~406.5h and still dead.{' '}
              <span className="dn-em">
                SM net is non-computable as a current read, and the SM cut fraction (|Δ| /
                prior_net) cannot be formed — there is no current SM net to difference. Any
                positioning claim in this note is explicitly historical, not live.
              </span>
            </p>

            <p>
              For completeness, the <em>last-available</em> tape readings — all pinned to
              the 06-17 06:43Z freeze and now 281.4h out of date, and byte-for-byte the same
              readings the 06-19 → 06-28 notes carried because it is the same frozen row —
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
                Read this as a near-seventeen-day-old fingerprint, not a signal: a two-sided
                funding book, OI bleeding, retail adding longs into the first leg of
                weakness. None of it can be carried forward to the 00:06Z snapshot — and it
                predates the entire 06-18 → 06-22 floor-hold sequence, the 06-23 → 06-28 leg
                that closed below the floor five times and walked under $60k, the 06-26
                up-close AND the 06-27 → 06-28 down-closes, so it says nothing about how
                positioning absorbed the break or whether the latest down-close was
                distribution or churn. The desk treats the positioning dimension as unknown,
                and the 06-28 down-close as positioning-unconfirmed.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure <span className="dn-roman">II · price/MTF FRESH · multi-TF resonance bearish 1 bull / 9 bear / 0 neutral (WORSENED by one from 1/8/1 — 30m rolled off neutral) · 1d &amp; 1w water-down death crosses both stand (1d 2 bars old DIF −2,317.0, 1w 1 bar old DIF −5,878.7) · the thin constructive set is 15m/30m below-water golden crosses (2 bars / just printed) plus a 4h below-water golden cross 13 bars old and a 1M TD8 buy one close away · regime IMPROVED to 6/9 reversal (mean-reversion, JT&lt;0) · spot below every MA, the whole ladder overhead, the 200W floor $62,443 broken on the fifth daily close (06-28 $59,550), spot −5.09% below</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map is fresh, worsened by one at the headline (1 bull / 9 bear / 0
                neutral, the 30m frame rolled off neutral to a bear count) but the regime
                classifier improved the constructive way to 6/9 reversal / mean-reversion —
                the only constructive engine prints are 15m / 30m below-water golden crosses,
                a 4h below-water golden cross 13 bars old, and a 1M TD8 buy one close away
              </span> — the one dimension, with the dealer map, the desk can still trust
              today. The 00:01Z scan tags{' '}
              <span className="dn-tag bear">1 bull / 9 bear / 0 neutral across 10 frames</span>,
              net read <em>multi-TF resonance bearish · sell the bounce</em> — worsened from
              the 06-28 scan&rsquo;s 1/8/1 as the 30m frame stepped back to a bear count. The
              regime line reads{' '}
              <span className="dn-tag bull">6/9 reversal / mean-reversion regime (JT&lt;0) —
              bounce-favoured</span> (was 5/9 reversal on 06-28), so the classifier held the
              bounce-favoured lean and tightened it even as the frame count worsened — but the
              engine still carries no confirmed constructive trigger to act on it. The lone
              bull frame is the{' '}
              <span className="dn-tag">1M (above cloud)</span>; the constructive crosses are{' '}
              <span className="dn-tag">15m / 30m water-down golden crosses (2 bars / just
              printed)</span> and a{' '}
              <span className="dn-tag">4h water-down golden cross 13 bars old</span> (all
              unconfirmed below-water probes, not TD buys), with no live TD9 buy. The down
              side is heavy: the{' '}
              <span className="dn-tag bear">8h, 12h, 1d and 1w carry water-down death
              crosses</span>, with the{' '}
              <span className="dn-tag bear">1d water-down death cross now 2 bars old (DIF
              −2,317.0)</span> beneath the{' '}
              <span className="dn-tag bear">1w water-down death cross (1 bar old, DIF
              −5,878.7)</span>, and the 1h carries a{' '}
              <span className="dn-tag bear">water-down death cross 11 bars old</span>. Cloud:
              15m→1w all below cloud, 1M above; only the 1M holds a bull frame. The thin
              constructive set is the{' '}
              <span className="dn-tag bull">15m / 30m / 4h below-water golden crosses plus a
              1M TD8 buy one close away, and bottom (bullish-reversal) divs on 15m / 30m /
              1h</span>.{' '}
              <span className="dn-em">
                Straight read: the frame stack worsened by one but the regime classifier
                improved to mean-reversion. The high frames are all on death crosses with a
                2-bar-old 1d death cross beneath a 1-bar-old 1w death cross, and the engine&rsquo;s
                only constructive prints are unconfirmed below-water golden crosses and a
                one-close-away 1M TD8 buy. There is no confirmed engine print to trade the
                bounce long; the dominant tape read is the twin 1d/1w death crosses, the
                absent MA support, and the fifth close below the 200W floor — softened only by
                the bottom divs and the bounce-favoured regime. This is a bearish trend frame
                whose mean-reversion setup has no confirmed trigger.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">59,475</td><td className="num bear">47.7</td><td className="bull">golden (water-dn) 2b</td><td className="bear">below ↑59.8k 37b</td><td>Sell 4</td><td>BEAR hid · BULL reg (bottom)</td></tr>
                <tr><td>30m</td><td className="num">59,476</td><td className="num bear">43.6</td><td className="bull">golden (water-dn) 刚印 (just printed)</td><td className="bear">below ↑60.2k 22b</td><td>Sell 2</td><td>BULL reg (bottom)</td></tr>
                <tr><td>1h</td><td className="num">59,460</td><td className="num bear">41.7</td><td className="bear">death (water-dn) 11b</td><td className="bear">below ↑59.6k 3b</td><td>Buy 1</td><td>BEAR + BULL reg (top &amp; bottom) · BEAR + BULL hid</td></tr>
                <tr><td>4h</td><td className="num">59,462</td><td className="num bear">39.7</td><td className="bull">golden (water-dn) 13b</td><td className="bear">below ↑61.7k 35b</td><td>Buy 4</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">59,462</td><td className="num bear">36.6</td><td className="bear">death (water-dn) 18b</td><td className="bear">below ↑63.3k 17b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">59,462</td><td className="num bear">33.8</td><td className="bear">death (water-dn) 11b</td><td className="bear">below ↑64.1k 75b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">59,447</td><td className="num bear">30.5</td><td className="bear">death (water-dn) 2b</td><td className="bear">below ↑72.2k 28b</td><td>Buy 7</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">59,468</td><td className="num bear">32.9</td><td className="neut">—</td><td className="bear">below ↑72.5k 9b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">59,468</td><td className="num bear">32.8</td><td className="bear">death (water-dn) 1b</td><td className="bear">below ↑99.5k 22b</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">59,482</td><td className="num">41.1</td><td className="neut">— (DIF water-up)</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (08:01 Beijing; rolling latest
                    file, archived verbatim at
                    /opt/desk-note/snapshots/2026-06-29-0006/). Net read{' '}
                    <em>multi-TF resonance bearish · sell the bounce (1 bull / 9 bear / 0
                    neutral)</em>; regime <em>6/9 reversal / mean-reversion regime (JT&lt;0,
                    bounce-favoured)</em>; active divergences{' '}
                    <em>reversal: top div 1h, bottom div 15m / 30m / 1h; hidden
                    (continuation): BEAR hid 15m / 1h / 4h / 1d, BULL hid 1h</em>. Header
                    alerts:{' '}
                    <em>1d water-down death cross (2 bars ago, DIF −2,317.0)</em>,{' '}
                    <em>1w water-down death cross (1 bar ago, DIF −5,878.7)</em>,{' '}
                    <em>15m water-down golden cross (2 bars ago)</em>,{' '}
                    <em>30m water-down golden cross (just printed)</em>,{' '}
                    <em>1M TD8 Buy — one more close</em>. Scan spot $59,465, 24h −0.92%, 24h
                    H/L $60,543 / $58,888, qVol $6.21B. Closes are in-progress bars; treat
                    every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is the same deep overhead wall as 06-28, and spot has slipped
              further below the 200W floor, so for the fifth cut in the lineage{' '}
              <span className="dn-tag bear">every line on the matrix is overhead — there is no
              positive offset, no MA beneath spot</span>. $59,267 sits{' '}
              <span className="dn-tag bear">−5.09% below the full-history W-SMA200 200W floor
              $62,443</span> — the nearest line, still overhead (was −3.90% on 06-28) — and{' '}
              <span className="dn-tag bear">−5.51% below D-EMA20 $62,722</span> and{' '}
              <span className="dn-tag bear">−5.59% below D-SMA20 $62,777</span>, the next lines
              up. Above those, the cycle-proxy{' '}
              <span className="dn-tag bear">D-EMA50 $66,907 (−11.42%)</span>, then{' '}
              <span className="dn-tag bear">W-EMA200 $67,583 (−12.30%, seed)</span>, then{' '}
              <span className="dn-tag bear">D-SMA50 $68,978 (−14.08%)</span>, then a dense
              overhead band:{' '}
              <span className="dn-tag bear">D-EMA100 $70,542 (−15.98%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $70,797 (−16.29%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $71,431 (−17.03%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $71,505 (−17.11%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $73,647 (−19.53%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,214 (−20.14%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $74,518 (−20.47%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $75,453 (−21.45%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $75,516 (−21.52%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $76,505 (−22.53%)</span>. Far above and
              disused: W-EMA100 $80,968 (−26.80%), W-EMA50 $82,661 (−28.30%), W-SMA100
              $88,526 (−33.05%), W-SMA50 $90,988 (−34.86%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-29 00:06Z (close $59,267.30);
                offsets recomputed against that same last-bar close, which is the freshest
                available spot while the live tape is frozen. Displayed MA levels are
                $-rounded; offsets computed from exact series values. The displayed weekly
                ladder uses the 2023→ subset (182 weekly bars), so W-SMA200 is non-computable
                there and W-EMA200 $67,583 seeds from available history; the 200W floor
                $62,443 is recomputed separately from the full-history glob (355 completed
                weekly W-MON bars, excluding the in-progress 06-29 week). Daily closes: 06-20
                $64,270, 06-21 $63,287, 06-22 $63,990 (= the 22JUN weekly close), 06-23
                $62,697, 06-24 $61,051 (first close below the floor), 06-25 $59,772 (second
                close below, −4.28%), 06-26 $60,072 (third close below, first up-close), 06-27
                $60,000 (fourth close below, a down-close), 06-28 $59,550 (fifth close below, a
                DOWN-close −$450, −4.63% below), 06-29 (in-progress, 5-min bar) $59,267 — the
                floor break has extended to a fifth consecutive daily close, and of the last
                24h 1-min closes all 1,441 printed below the floor.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book FLIPPED BACK to net-SHORT-gamma aggregate −20.1M (was +5.9M on 06-28, −20.9M on 06-27) — the book now AMPLIFIES the next move again · a concentrated downside amplifier RE-EMERGED at 3JUL26 4.3 DTE −9.63M (deeper than the −6.08M of 06-28), the front is 29JUN26 0.3 DTE −1.29M (settles ~08:00Z today) · the flip eased $60,272 → $60,119 but spot fell faster, so spot is now −1.42% below it (was −0.43%) · IV jumped to 48.0%</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book reversed the 06-28 de-amplification and crossed back: aggregate
                gamma flipped from +5.9M net-long to −20.1M net-SHORT-gamma, so the book
                amplifies rather than dampens the next move again, and the flip reclaim widened
                to −1.42% as spot fell past the eased flip
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bear">−20.1M / 1%</span> (was +5.9M on 06-28, −20.9M on
              06-27, −87.5M on 06-26); the 06-28 net-long-gamma reprieve lasted a single note —
              the book has crossed back to net-short-gamma. The 0-γ flip eased{' '}
              <span className="dn-tag">$60,272 → $60,119 (−$153)</span>, but spot $59,267 fell
              faster, so spot sits <span className="dn-tag bear">−1.42% below the flip</span> on
              spot-denominated math (59,267.30 / 60,119 − 1 = −1.416%); the GEX file&rsquo;s own
              &ldquo;dist to flip&rdquo; reads −0.7% off its Deribit-index $59,677 ($410 above
              parquet spot), which is <span className="dn-tag bear">−0.74%</span>
              (59,677 / 60,119 − 1 = −0.735%) — both references below the flip, and the gap to
              the flip WIDENED from −0.43% on 06-28. The wall map is put-heavy around spot:{' '}
              <span className="dn-tag bear">$60k −13.33M</span> (heaviest wall, now just ABOVE
              spot as the cluster ceiling),{' '}
              <span className="dn-tag bear">$58k −12.94M</span>,{' '}
              <span className="dn-tag bear">$56k −10.80M</span>,{' '}
              <span className="dn-tag bear">$55k −10.26M</span>,{' '}
              <span className="dn-tag bear">$59k −9.32M</span> (just below spot),{' '}
              <span className="dn-tag bear">$50k −7.14M</span>,{' '}
              <span className="dn-tag bull">$64k +6.71M</span>,{' '}
              <span className="dn-tag bull">$80k +6.11M</span>,{' '}
              <span className="dn-tag bull">$63k +5.74M</span>,{' '}
              <span className="dn-tag bull">$65k +5.27M</span>.{' '}
              <span className="dn-em">
                The listed major walls from $55k–$60k total −56.65M and sit at and below spot —
                spot at $59,267 sits just under the $60k −13.33M wall, now a cluster ceiling,
                with the $59k −9.32M wall directly beneath and the $58k −12.94M / $56k −10.80M /
                $55k −10.26M shelf below that. Critically, the aggregate is now net-SHORT-gamma
                again, so the book amplifies the next move rather than dampening it — a reversal
                of the +5.9M long-gamma book of 06-28; the positive walls ($63k, $64k, $65k,
                $80k) sit overhead as the first real resistance shelf above the flip and offer
                no support beneath spot; beneath spot is a below-spot put-wall shelf — $59k
                −9.32M directly under, with $58k −12.94M / $56k −10.80M / $55k −10.26M / $50k
                −7.14M as lower magnets — none of them a proven floor.
              </span>{' '}
              By expiry the concentration RE-EMERGED: the front is the small 29JUN26{' '}
              <span className="dn-tag bear">0.3 DTE at −1.29M (settles ~08:00Z today)</span>,
              then 30JUN26 1.3 −0.29M, 1JUL26 2.3{' '}
              <span className="dn-tag bull">+1.75M</span>, 2JUL26 3.3{' '}
              <span className="dn-tag bull">+0.49M</span>, 3JUL26 4.3{' '}
              <span className="dn-tag bear">−9.63M</span> (the heaviest negative expiry, a
              RE-EMERGED downside amplifier deeper than the −6.08M of 06-28), 10JUL26 11.3{' '}
              <span className="dn-tag bear">−2.49M</span>, 17JUL26 18.3{' '}
              <span className="dn-tag bull">+3.05M</span>, 31JUL26 32.3 −1.21M, 28AUG26 60.3
              +0.05M, 25SEP26 88.3{' '}
              <span className="dn-tag bear">−5.73M</span>, 25DEC26 179.3 −0.58M, 26MAR27 270.3
              +0.30M, 25JUN27 361.3 +0.40M. The 28JUN26 +4.33M front settled ~08:00Z yesterday;
              the 3JUL26 −9.63M chunk is the heaviest forward amplifier and the concentrated
              downside-amplifier risk that the 06-28 note had called fully cleared is back.
              (The spot-referenced aggregate −20.1M is the net GEX at spot; the by-expiry rows
              are an independent decomposition and need not sum to it.)
            </p>

            <p>
              IV median across 916 instruments is{' '}
              <span className="dn-tag">48.0%</span> (jumped from 44.3% / 930 instruments on
              06-28, the chain thinned a further 14 contracts) against 30D close-to-close RV
              of{' '}
              <span className="dn-tag">43.07%</span> — chain-level richness{' '}
              <span className="dn-tag">~+4.93pt</span> over realised (was ~+0.93pt on 06-28 —
              the chain RICHENED markedly as the book flipped back short-gamma), with RV staying
              elevated (43.07% today vs 43.37% on 06-28 and 24.91% on 05-31 — the high-vol
              regime that started with the 06-08 → 06-18 down-leg persists). A chain-median
              across 916 instruments, <span className="dn-em">not</span> a tradable spread;
              expiry-/strike-level vega, skew and term structure remain not loaded; the vol read
              stays framework-only. RV methodology: 30D close-to-close, logret.std × √365 × 100
              on the last 30 daily log returns (= 31 consecutive daily closes) anchored to
              parquet last bar 2026-06-29 00:06Z; underlying close window range $59,267 –
              $73,857. P/C ratio 0.58, Call OI 213,392 / Put OI 123,450 BTC.
            </p>

            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · Sunday-evening render (~1.85h), most Tier-1 daily byte-identical to 06-28 — 10Y 4.40% (13bp from the gate), TIPS 2.19% EXTREME RISK-OFF, HY OAS 2.78% (still AT its 2.78% gate — 0bp to fire), MOVE 66.8 (loose) · the FX legs essentially flat: DXY 101.37 (+0.01) and USD/JPY 161.68 (−0.12), both still firm · regime still NORMAL, lag to NQ WIDENED to −3.53pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro panel render is a Sunday-evening render (~1.85h lag) with most of the
                Tier-1 daily series byte-identical to 06-28, and the read stayed risk-off —
                rates held, credit still sits exactly on its re-grow gate, and the dollar held
                EXTREME with the FX legs essentially flat this cut
              </span>. Dashboard render is 2026-06-28 22:15Z, ~1.85h before the snapshot. US
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
              <span className="dn-tag">66.8</span> — the source tags −0.31 on its own 1d
              delta, still &ldquo;loose.&rdquo; The dollar held its EXTREME level and the FX
              legs are essentially flat this cut: DXY{' '}
              <span className="dn-tag bear">101.37 (+0.01 day)</span>, regime z{' '}
              <span className="dn-tag bear">+2.73</span>, a touch up from the 101.36 of 06-28.
              Fed net liquidity{' '}
              <span className="dn-tag bear">$5.812T (−0.037T)</span>, regime z{' '}
              <span className="dn-tag bear">−1.16</span> — no fresh weekly print this cut.
              USD/JPY{' '}
              <span className="dn-tag">161.68 (−0.12 day)</span>, regime z +1.53 — unchanged
              from 06-28; US-JP 10Y spread{' '}
              <span className="dn-tag">1.75% (−1.0bp carried)</span> narrow;
              USD/CNY <span className="dn-tag">6.7975 (+0.01)</span>; WTI{' '}
              <span className="dn-tag stale">$78.9 (now stale 6d)</span>.{' '}
              <span className="dn-em">
                Net: the macro backdrop stayed risk-off and essentially unchanged on a
                Sunday-evening render — the rates and credit legs are carried byte-for-byte from
                06-28 (10Y 4.40%, TIPS 2.19%, OAS 2.78%), the FX legs barely moved. The two
                re-grow legs are unchanged: the credit leg is still ON the 2.78% gate (0bp) while
                the rates leg sits 13bp away — the credit gate remains the live one. The
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
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.516</td><td className="num">−0.00</td><td className="num">−0.07</td><td className="stale">weekly · neutral · now stale 9d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">66.8</td><td className="num bull">−0.31</td><td className="num bull">−0.79</td><td className="bull">loose</td></tr>
                <tr><td>DXY</td><td className="num">101.37</td><td className="num bear">+0.01</td><td className="num bear">+2.73</td><td className="bear">EXTREME RISK-OFF · FX flat (was 101.36)</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.812T</td><td className="num bear">−0.037T</td><td className="num bear">−1.16</td><td className="bear">drained · no fresh weekly print</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.68</td><td className="num bull">−0.12</td><td className="num bear">+1.53</td><td className="bear">firm · unchanged vs 06-28</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.75%</td><td className="num">−1.0bp</td><td className="num bull">−1.25</td><td className="neut">narrow</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7975</td><td className="num">+0.01</td><td className="num bull">−1.37</td><td className="neut">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 168 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.283</span> — essentially unchanged
              from the 0.285 of 06-28 and still <span className="dn-tag">above the 0.25
              idiosyncratic threshold</span>, so the regime line holds at{' '}
              <span className="dn-signal">NORMAL — BTC stays coupled to the broad cross-asset
              complex</span>, with its top ties the equity / industrial-metal cluster: NQ{' '}
              <span className="dn-tag">+0.747</span>, NVDA{' '}
              <span className="dn-tag">+0.742</span>, SP500{' '}
              <span className="dn-tag">+0.659</span>, TSLA{' '}
              <span className="dn-tag">+0.537</span>, JP225{' '}
              <span className="dn-tag">+0.536</span>, COPPER{' '}
              <span className="dn-tag">+0.496</span>, URNM{' '}
              <span className="dn-tag">+0.448</span>, PALL{' '}
              <span className="dn-tag">+0.380</span>, META{' '}
              <span className="dn-tag">+0.362</span>, AAPL{' '}
              <span className="dn-tag">+0.346</span>, with CL{' '}
              <span className="dn-tag">−0.114</span> / BRENT{' '}
              <span className="dn-tag">−0.122</span> inverse and GOLD a weak{' '}
              <span className="dn-tag">+0.212</span>. 7d performance still has the broad risk
              complex red, with BTC lagging NQ by a WIDER gap than 06-28 though
              NOT the worst performer of the complex:{' '}
              <span className="dn-tag bear">BTC −6.90%</span>, NQ{' '}
              <span className="dn-tag bear">−3.37%</span>, SP500{' '}
              <span className="dn-tag bear">−1.43%</span>, JP225{' '}
              <span className="dn-tag bear">−3.94%</span>, NVDA{' '}
              <span className="dn-tag bear">−6.75%</span>, META{' '}
              <span className="dn-tag bear">−3.68%</span>, AAPL{' '}
              <span className="dn-tag bear">−3.96%</span>, MSFT{' '}
              <span className="dn-tag bear">−0.32%</span>, GOOGL{' '}
              <span className="dn-tag bear">−5.86%</span>, AMZN{' '}
              <span className="dn-tag bear">−3.47%</span>, TSLA{' '}
              <span className="dn-tag bear">−3.51%</span>; metals lower (GOLD{' '}
              <span className="dn-tag bear">−3.35%</span>, SILVER{' '}
              <span className="dn-tag bear">−11.66%</span>, PLAT{' '}
              <span className="dn-tag bear">−3.97%</span>, PALL{' '}
              <span className="dn-tag bear">−5.62%</span>, COPPER{' '}
              <span className="dn-tag bear">−3.80%</span>); crude down hard, NGAS softer (CL{' '}
              <span className="dn-tag bear">−9.52%</span>, BRENT{' '}
              <span className="dn-tag bear">−9.30%</span>, NGAS{' '}
              <span className="dn-tag bear">−0.72%</span>).{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d return −6.90% vs NQ −3.37% is a lag of −3.53pt (was −2.57pt on
                06-28) — the gap to NQ WIDENED again as BTC under-performed equities. But BTC is
                NOT the deepest laggard of the complex: SILVER −11.66%, CL −9.52%, BRENT −9.30%
                and URNM −7.78% all fell more over 7d. The whole risk complex stays red over 7d
                (NQ −3.37%, NVDA −6.75%, the Mag7 mostly −3% to −7%, metals down, crude down hard
                with NGAS softer), so BTC&rsquo;s decline remains embedded in a broad risk-off
                move rather than standing out as idiosyncratic — which is what keeps the
                correlation regime at NORMAL. The fifth close below the 200W floor still
                coincides with a risk-off macro tape (10Y tight, credit on its gate, DXY
                EXTREME), so the break stays as much a risk-off-tape event as a BTC-specific one —
                BTC lagged NQ but several names (SILVER, CL, BRENT, URNM) fell harder.
              </span>{' '}
              JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book <span className="dn-roman">V · book FLAT · 200W floor — DAILY-CLOSE BREAK EXTENDED to a FIFTH consecutive close (06-28 $59,550 &lt; $62,443, a DOWN-close −$450), weekly-close escalation SETTLES TODAY (06-29 is Monday; in-progress reads −5.09% below) · scout STILL stood down (price block WIDENED to −1.42% below the flip and the book flipped BACK net-short-gamma, tape blind, no MA support, no confirmed engine trigger) · macro tail credit gate ON the line (OAS 2.78%, 0bp) · squeeze-cycle ON HOLD (SM dead ~16.94 days)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — the dealer book flipped BACK to
                net-short-gamma and the flip reclaim widened to −1.42%, the regime held
                mean-reversion, but the floor break extended to a fifth daily close and the
                binding constraint is still data integrity — with the resolving weekly close
                settling today
              </span>. The structural positive of the lineage stayed broken at the daily-close
              level this cut and the character hardened further down: the 06-28 daily bar closed
              $59,550, −4.63% below the $62,443 floor, the fifth consecutive daily close
              beneath the line and a DOWN-close (−$450 under 06-27 $60,000). Per the
              framework that is the early warning confirmed on five closes, not yet the full
              break — the break is a sustained weekly close below, and the in-progress 06-29
              week reads $59,267 (−5.09% below) with 06-29 falling on Monday, so the escalation
              is no longer pending: it settles TODAY. The 22JUN weekly close $63,990 (+2.48%
              above) is still the last resolved weekly hold, so the 200W reclaim thesis is not
              yet falsified — but it resolves at the end of today. The scout still cannot be
              taken and its price block worsened: spot is now −1.42% below the flip (was −0.43%
              on 06-28) and the dealer book flipped BACK to −20.1M net-short-gamma with a
              downside amplifier re-emerged, spot is still below the flip with no MA beneath it,
              the positioning legs (SM short bleed, funding posture, cover-flow) all require a
              live tape and there is none for a thirteenth day, and the engine carries no
              confirmed constructive trigger — only unconfirmed below-water golden crosses and a
              one-close-away 1M TD8 buy against twin 1d/1w death crosses. No new short either:
              chasing a fifth close below the floor on a blind tape, with the engine showing
              bottom divs and a bounce-favoured regime and the front expiry already settling
              today, is a poor entry even though the book has flipped back short-gamma. The
              trade book today is: no shorts, no scout, no fresh hedge — fix the tape AND watch
              the 06-29 weekly close vs the floor, which settles today, before re-arming.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch — DAILY-CLOSE BREAK EXTENDED to a FIFTH close: the 06-28 daily close $59,550 settled −4.63% below the $62,443 floor (a fifth consecutive close below, a DOWN-close −$450 under 06-27 $60,000); weekly-close escalation SETTLES TODAY (06-29 is Monday; in-progress reads $59,267, −5.09% below); the 22JUN weekly close $63,990 +2.48% above still stands as the last resolved weekly hold</span>
              <div className="dn-trade-name">
                200W cycle floor watch — the daily-close break extended to a fifth consecutive close (another down-close), and the weekly-close escalation settles today: floor $62,443 = full-history W-SMA200 (355 completed weekly bars, unchanged vs the 06-25 → 06-28 pin), 06-24 daily close $61,051 (−2.23% below), 06-25 $59,772 (−4.28% below), 06-26 $60,072 (−3.80% below), 06-27 $60,000 (−3.91% below), 06-28 $59,550 (−4.63% below, down-close), in-progress 06-29 week $59,267 (−5.09% below), all 1,441 last-24h 1-min closes below the floor
              </div>
              <div className="dn-thesis">
                The 06-28 note recorded a fourth consecutive daily close below the floor with
                the 06-26 up-tick handed back. The leg continued down: the 06-28 daily bar
                closed{' '}
                <span className="dn-tag bear">$59,550, −4.63% below the $62,443 floor</span>,
                a fifth consecutive daily close beneath the line and a DOWN-close (−$450 under
                06-27 $60,000). Per the framework an intraday wick is not the break, a daily
                close below is the early warning — now confirmed on five consecutive closes —
                and a sustained weekly close below is the escalation that breaks the floor and
                falsifies the 06-15 reclaim thesis. The 22JUN weekly close{' '}
                <span className="dn-tag bull">$63,990, +2.48% above</span> still stands as the
                last resolved weekly hold, so the thesis is not yet dead, but the in-progress
                06-29 week reads{' '}
                <span className="dn-tag bear">$59,267, −5.09% below</span> and 06-29 is a
                Monday — so the escalation that resolves the thesis settles TODAY.{' '}
                <span className="dn-em">The structural positive of the lineage is broken at the
                daily-close level on five consecutive closes; spot holds no MA beneath it, and
                the 06-29 weekly close — settling today — is the single level that resolves the
                thesis.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor</span><span className="dn-lvl-v">$62,443 = full-history W-SMA200, recomputed this cut from the 2019→ parquet glob (355 completed weekly W-MON bars, excluding the in-progress 06-29 week); unchanged vs the 06-25 → 06-28 pin (slow weekly SMA, ~$250/wk) · weekly_200sma.json absent so the ratio percentile / last-event stay unsourced, not fabricated</span></div>
                <div><span className="dn-lvl-k">daily-close break — EXTENDED to a fifth close</span><span className="dn-lvl-v bear">06-24 daily close $61,051 (−2.23% below), 06-25 $59,772 (−4.28% below), 06-26 $60,072 (−3.80% below), 06-27 $60,000 (−3.91% below) and 06-28 $59,550 (−4.63% below, a down-close −$450) — five consecutive closes beneath the line; all 1,441 of the last 24h 1-min closes printed below the floor, and the in-progress 06-29 bar holds −5.09% below</span></div>
                <div><span className="dn-lvl-k">last resolved weekly hold (still stands)</span><span className="dn-lvl-v bull">22JUN weekly close $63,990 +2.48% above the floor still stands — the 200W reclaim thesis is not yet falsified, but it is one weekly close (today) from dying</span></div>
                <div><span className="dn-lvl-k">escalation (next weekly close) — SETTLES TODAY</span><span className="dn-lvl-v bear">a sustained weekly close &lt; $62,443 breaks the 200W floor and falsifies the 06-15 reclaim thesis — the in-progress 06-29 week reads $59,267 (−5.09% below) and 06-29 is Monday; this is the level that resolves the thesis at the 06-29 settle, at the end of today</span></div>
                <div><span className="dn-lvl-k">reclaim side (now further off)</span><span className="dn-lvl-v bear">spot is −1.42% below the flip $60,119, −5.09% below the 200W floor $62,443, and −5.51% below D-EMA20 $62,722 — no MA beneath spot; the flip sits below the floor, so a reclaim is a daily close back above the flip $60,119 then the floor $62,443 then D-EMA20 $62,722 — NOT a scout trigger on a blind tape (see scout)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework, not a trade.</b> The floor watch is the single load-bearing
                live level while everything else is stale or framework-only. The daily-close
                break has extended to a fifth consecutive close and the weekly-close
                escalation settles today — no position is taken on the watch: it sets the
                confirmed early-warning level (five daily closes below), the settling
                escalation (06-29 weekly close &lt; $62,443, today), and the reclaim ladder
                (flip $60,119 → floor $62,443 → D-EMA20 $62,722 — note the flip sits below the
                floor, so the first reclaim step is the flip then the floor then D-EMA20), and
                the desk will not pre-position short into a break the engine shows bottom divs
                against nor long into a reclaim it cannot confirm, on a blind tape.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STILL STOOD DOWN · price pre-condition WIDENED (spot −1.42% below the flip, vs −0.43% on 06-28) and the book FLIPPED BACK net-short-gamma, spot still below the flip, no MA beneath spot + tape blind ~16.94 days + no confirmed engine trigger</span>
              <div className="dn-trade-name">
                Cover-bounce scout — the flip reclaim widened to −1.42% and the book flipped back net-short-gamma, and the scout stays stood down on a blind tape with no MA beneath spot and no confirmed engine trigger
              </div>
              <div className="dn-thesis">
                The 06-22 note saw the scout&rsquo;s price pre-condition print briefly (spot
                reclaimed the flip), the 06-23 → 06-26 notes saw it handed back and widen, the
                06-27 → 06-28 notes saw it narrow to within −0.43%. Tonight it widened again:
                spot is now{' '}
                <em>−1.42% below the flip</em> $60,119 (which eased a further $153 as it
                tracked spot), still −5.09% below the 200W floor, below D-EMA20, and printing
                below $60k — and there is still no MA beneath spot at all. So the scout is
                blocked on four counts. (1) The price pre-condition widened back out — spot is
                further below the flip, and below the floor and D-EMA20. (2) The positioning
                legs (SM short bleed, funding posture, cover-flow) all require a live tape, and
                there is none — the desk cannot see whether the 06-28 down-close was
                distribution or thin two-sided churn as the book flipped back short-gamma. (3)
                The dealer book flipped BACK to −20.1M net-short-gamma with a downside amplifier
                re-emerged at 3JUL26 −9.63M, which removes the stability the 06-28 long-gamma
                book offered. (4) The engine carries no confirmed constructive trigger — only
                unconfirmed below-water golden crosses (15m / 30m / 4h) and a one-close-away 1M
                TD8 buy against twin 1d/1w death crosses.{' '}
                <span className="dn-em">A scout long on a positioning-blind tape, below the flip
                and the floor with no MA beneath spot and no confirmed engine print, is not a
                trade — the only constructive counters are the bottom divs, the bounce-favoured
                regime, the unconfirmed below-water golden crosses, the 1M TD8 buy and the
                still-standing last weekly hold, and none is sufficient to size into without a
                tape and a confirmed engine trigger.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">stood down · no entry · price pre-condition WIDENED (spot −1.42% below the flip, vs −0.43% on 06-28) and still below it and below the floor, no MA beneath spot — re-evaluate only after the live tape is restored AND spot re-reclaims the flip then the floor then D-EMA20</span></div>
                <div><span className="dn-lvl-k">technical pre-condition</span><span className="dn-lvl-v bear">flip $60,119 / floor $62,443 / D-EMA20 $62,722 reclaim (NOT true — spot below all three, no MA beneath spot, the flip now −1.42% away) AND a confirming engine print (NOT true — 1 bull / 9 bear / 0 neutral, twin 1d/1w death crosses, only unconfirmed below-water golden crosses and a 1M TD8 buy one close away; regime holds mean-reversion)</span></div>
                <div><span className="dn-lvl-k">data pre-condition</span><span className="dn-lvl-v bear">live tape restored (currently 281.4h frozen) AND SM feed live (currently dead ~16.94 days) — both must hold before any positioning leg can be read; this is the binding block</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> no scout entry without a live positioning tape. The bottom
                divs, the bounce-favoured regime, the unconfirmed below-water golden crosses,
                the 1M TD8 buy and the still-standing last weekly hold do not trigger a scout
                while the SM / funding / flow legs are blind, spot is still below the flip and
                the floor with no MA beneath it, and the engine has no confirmed trigger — the
                desk does not size into a cover-bounce it cannot see being covered. The price
                block that lifted on 06-22 and re-closed on 06-23 → 06-26 narrowed on 06-27 →
                06-28 and has widened back out this cut; the operational block (tape down) and
                the engine block (no confirmed trigger) still bind.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — credit leg still ON the line: HY OAS 2.78% = the 2.78% gate (0bp to fire), 10Y leg 13bp away (4.40% vs 4.53% gate); neither has fired a close above but the credit leg is exactly at the trigger · Sunday-evening render, Tier-1 carried byte-identical</span>
              <div className="dn-trade-name">
                Downside put-spread — re-grow gate un-fired but the credit leg is still ON the line (OAS 2.78% = gate, 0bp), the rates leg 13bp away; no hedge added (the dealer book has re-grown its own downside amplifier at 3JUL26 −9.63M)
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
                a Sunday-evening render with no fresh deltas to the rates / credit legs; a macro
                tail is not the right instrument for an endogenous-cum-risk-off floor break, and
                the dealer book has re-grown its own concentrated downside amplifier at 3JUL26
                −9.63M and flipped back net-short-gamma, so a macro tail would now be additive to
                dealer short gamma rather than an independent hedge.
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
                separate future note (trigger / invalidation / R defined there); note the dealer
                strip has re-grown a concentrated downside amplifier (3JUL26 −9.63M) and the
                book has flipped back net-short-gamma, so any such tail would be additive to
                dealer short gamma rather than a cleaner independent hedge.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · ON HOLD — SM feed DEAD ~16.94 days, the re-stack signature cannot be read this cut</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — ON HOLD (continuation of 06-16 → 06-28): the SM feed is frozen ~406.5h, the re-stack signature cannot be read this cut
              </div>
              <div className="dn-thesis">
                The squeeze-cycle / re-stack-hostile-2 framework reads discrete SM steps
                (Δshort &gt; 0 + Δlong &lt; 0 same minute) as continuation signatures; its
                calendar prior (the BJ 13–15 cadence) was falsified on 05-31 and it has run as
                a no-prior watchlist since. It cannot be assessed today for the simplest
                reason: the SM feed is dead. long_btc / short_btc / net_btc have been constant
                since 2026-06-12 01:36Z (~406.5h), so there are no SM deltas to read. The
                06-16 note put this ON HOLD at ~94.5h, the 06-27 note at ~358.5h, the 06-28
                note at ~382.5h; it remains ON HOLD at ~406.5h.{' '}
                <span className="dn-em">No signature can print from a frozen feed; the
                framework is dark until the SM data resumes.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v bear">ON HOLD · SM feed frozen ~406.5h (since 2026-06-12 01:36Z) · no SM deltas computable</span></div>
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
              Decision conditions <span className="dn-roman">VI · LIVE TAPE OUTAGE still the operative condition (thirteenth day) · 200W floor DAILY-CLOSE BREAK EXTENDED to a FIFTH close (06-28 $59,550, a down-close), weekly-close escalation SETTLES TODAY (06-29; reads −5.09% below) · flip reclaim WIDENED to −1.42%, book FLIPPED BACK to −20.1M net-SHORT-gamma with a downside amplifier re-emerged (3JUL26 −9.63M) · scout stood down (no MA support, no confirmed engine trigger) · macro credit gate ON the line (OAS 2.78%), regime still NORMAL</span>
            </h2>

            <p>
              Of the 06-28 conditions: the live tape did <em>not</em> come back — it is ~24h
              deader, now 281.4h frozen with the SM feed at ~16.94 days; the 200W floor
              daily-close break <em>extended</em> to a fifth consecutive close (06-28 $59,550,
              −4.63% below) on a down-close, and the weekly-close escalation is now settling
              (06-29 settles today; in-progress reads −5.09% below); the flip reclaim widened
              (spot −1.42% below the flip vs −0.43% on 06-28) as the flip eased to $60,119; the
              dealer book reversed its 06-28 de-amplification and FLIPPED BACK from +5.9M to
              −20.1M net-SHORT-gamma — it now amplifies the next move again, with a concentrated
              downside amplifier re-emerged at 3JUL26 −9.63M; the scout&rsquo;s price block
              widened and the engine carries only unconfirmed below-water golden crosses and a
              one-close-away 1M TD8 buy; the macro re-grow gate stayed un-fired with the credit
              leg still exactly on the line (OAS 2.78%) while the rates leg sits 13bp away; the
              correlation regime held NORMAL as the whole risk complex stayed red and BTC&rsquo;s
              lag to NQ widened to −3.53pt, though BTC was not the worst performer
              (SILVER/CL/BRENT/URNM fell more); the squeeze-cycle stayed ON HOLD on a deader
              feed. The dominant condition is unchanged: <em>the desk is positioning-blind, now
              into a 200W floor broken on five consecutive daily closes, a reclaim that has
              widened to −1.42% with no MA support, and a book that has flipped back
              net-short-gamma — all of which it cannot confirm</em>. The conditions today re-set
              around the continuing outage, the extended daily-close break, the settling
              weekly-close escalation, and the net-short-gamma re-flip:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Live tape restored (PRIMARY operational)</td><td className="bull">live_db.json resumes writing fresh rows beyond 2026-06-17 06:43Z AND the SM triple updates off its 06-12 01:36Z freeze</td><td>re-read funding / OI / flow / SM in full; only then can the scout or squeeze-cycle be evaluated — and only then can the 06-28 down-close be confirmed as distribution vs churn; the positioning dimension has now been blind eleven notes running</td></tr>
                <tr><td>200W floor — DAILY-CLOSE BREAK EXTENDED (fifth close)</td><td className="bear">06-24 $61,051 (−2.23%), 06-25 $59,772 (−4.28%), 06-26 $60,072 (−3.80%), 06-27 $60,000 (−3.91%) and 06-28 $59,550 (−4.63%, a down-close −$450) — five consecutive closes below the $62,443 floor; all 1,441 last-24h 1-min closes below the floor; in-progress 06-29 bar $59,267, −5.09% below</td><td>the daily-close break has extended to a fifth consecutive close on a down-close — the floor is still overhead, the slow level still resistance; no position taken</td></tr>
                <tr><td>200W floor — escalation (next weekly close) SETTLES TODAY</td><td className="bear">a sustained weekly close &lt; $62,443 (W-SMA200 floor) breaks the floor; the 22JUN weekly close $63,990 +2.48% above still stands, the in-progress 06-29 week reads $59,267 −5.09% below and 06-29 is Monday</td><td>the 06-29 weekly close is the single level that resolves the 06-15 reclaim thesis — a close below escalates the break and falsifies the thesis; it settles at the END OF TODAY; watch the 06-29 settle closely</td></tr>
                <tr><td>Flip reclaim (scout price pre-condition) — WIDENED to −1.42%</td><td className="bear">spot $59,267 −1.42% below flip $60,119, −5.09% below the floor $62,443, −5.51% below D-EMA20 $62,722; no MA beneath spot; the flip sits below the floor, so re-reclaim is a daily close back above the flip then the floor then D-EMA20</td><td>the price pre-condition widened back out — re-reclaim of the flip then the floor then D-EMA20 is the first step that re-opens scout evaluation, but only IF the live tape is also restored; on a blind tape below the flip the reclaim is watched, not traded</td></tr>
                <tr><td>Dealer book — FLIPPED BACK net-SHORT-gamma</td><td className="bear">aggregate GEX −20.1M (was +5.9M on 06-28, −20.9M on 06-27); the front is 29JUN26 0.3 DTE at −1.29M (settles ~08:00Z today); the heaviest negative expiry is 3JUL26 4.3 at −9.63M (a re-emerged amplifier); spot sits below the $60k −13.33M wall with the $59k −9.32M and $58k −12.94M walls beneath</td><td>the dealer book now AMPLIFIES the next move again — the concentrated downside risk re-emerged at 3JUL26 −9.63M; watch only, no short instruction (the engine shows bottom divs and the front expiry settles today)</td></tr>
                <tr><td>Macro tail re-grow (credit leg ON the line)</td><td className="bear">HY OAS &gt; 2.78% (currently 2.78%, ON the line, 0bp — needs a print above) OR 10Y &gt; 4.53% (13bp to fire) — Sunday-evening render, rates/credit carried byte-identical; the FX legs flat (DXY 101.37, USD/JPY 161.68)</td><td>no hedge instruction in this note — a gate fire (OAS is on the line) would be reassessed in a separate future note; note the book has flipped back net-short-gamma with a re-emerged amplifier, so any such tail would be additive to dealer short gamma</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.40%</td><td>standalone filter true with room; needs a BTC-internal pivot AND a live tape to translate to a scout long</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (ON HOLD)</td><td className="stale">SM feed dead ~406.5h; no deltas computable</td><td>suspended, not negative — re-arm on the first fresh SM deltas after the feed resumes</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the 06-29 weekly close — which settles TODAY — confirms the break by
                settling below the $62,443 200W floor (the daily-close break has now extended to
                five consecutive closes, 06-24 $61,051, 06-25 $59,772, 06-26 $60,072, 06-27
                $60,000, 06-28 $59,550, and the in-progress 06-29 week reads −5.09% below) or
                whether spot can claw a daily close back above the floor before the 06-29 settle
                and keep the 06-15 reclaim thesis alive; on the constructive side, a daily close
                back above the flip $60,119 (now −1.42% away) then the floor $62,443 then D-EMA20
                $62,722 — which the desk still cannot scout on a blind tape — would re-open the
                case
              </span>. The dealer book that de-amplified on 06-28 has reversed and flipped back
              outright (aggregate +5.9M → −20.1M net-SHORT-gamma with a downside amplifier
              re-emerged at 3JUL26 −9.63M, spot from −0.43% below the flip to −1.42% below it),
              so the book now amplifies the next move again; the structural positive — the 200W
              floor — is broken at the daily-close level on five consecutive closes and settles
              its weekly-close escalation today, and the desk still cannot read the tape that
              would say whether the down-close is distribution or churn. Until the tape is
              restored this note runs as written: the book is flat, the scout&rsquo;s price block
              widened and the engine has only unconfirmed below-water golden crosses and a 1M TD8
              buy one close away, the macro tail credit gate is on the line (OAS 2.78%), the
              squeeze-cycle is suspended, and the 200W floor watch is the one live level — now a
              floor broken on five daily closes, with the weekly-close escalation settling today.
              Price lost the $60k pin and MTF worsened by one at the headline, but the regime
              held mean-reversion and the engine shows bottom divs; macro stayed risk-off (rates
              tight, credit on its gate, dollar EXTREME) on a Sunday-evening render and the
              correlation regime held NORMAL as the whole complex stayed red with BTC lagging NQ
              but not the worst performer (SILVER/CL/BRENT/URNM fell more), so the break is still
              as much a risk-off-tape event as a BTC-specific one — and the dealer structure has
              turned amplifying again. The right read for the next 24h is{' '}
              <em>floor-broken-on-five-daily-closes, escalation-settles-today — respect the
              extended break, watch the 06-29 weekly close vs the floor now that it settles today
              and the book has flipped back short-gamma, fix the tape before reading positioning,
              and do not scout a reclaim that has widened to −1.42% on a blind tape</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> this is the <b>v2</b> note — <b>post codex hostile audit</b>. STAGE B
            ran the codex cross-model hostile audit (verdict PASS-WITH-NOTES: 0 CRITICAL, 0
            MAJOR, 1 MINOR) plus the ask-deepseek numeric second-audit (1 MAJOR, 3 MINOR
            proposed); STAGE C adjudicated every item by recompute against the pinned 2026-06-29
            00:06Z snapshot and ran grep-closure to zero stale matches before promoting v1 → v2.
            Findings are recorded against{' '}
            <code>audits/2026-06-29-desk-note.md</code>.{' '}
            <b>DN-2026-06-29-001 (MINOR, codex — MTF active-div badges dropped):</b> patterns
            searched <code>BULL reg (bottom)</code>, <code>BEAR + BULL reg</code>, MTF row
            badges vs the binding source{' '}
            <code>/opt/desk-note/snapshots/2026-06-29-0006/mtf_div_latest.html</code> (15m row
            BEAR hid + BULL reg; 1h row BEAR hid + BEAR reg + BULL hid + BULL reg). Hits before
            fix: 2 rows under-reported (15m, 1h). Action: mirrored ALL active-div badges into
            the 15m and 1h rows (15m → BEAR hid · BULL reg; 1h → BEAR + BULL reg · BEAR + BULL
            hid) and expanded the table note to list reversal AND hidden divergences. Hits after
            fix: 0 under-reported rows. <b>RESOLVED.</b>{' '}
            <b>ask-deepseek MAJOR (06-27 close shown as two values, $60,000 vs $60,000.30):</b>{' '}
            patterns searched <code>60,000.30</code>, <code>59,550.20</code>. Adjudication: the
            note&rsquo;s dominant convention is whole-dollar daily closes; the two cent-precise
            strings were the only sub-dollar closes and the source of the dual-value. Action:
            rounded 06-27 → $60,000 and 06-28 → $59,550 everywhere; the −$450 down-tick is now
            exactly consistent ($60,000 − $59,550 = $450). Hits before fix: 5 (60,000.30) + 5
            (59,550.20). Hits after fix: 0 / 0. <b>RESOLVED.</b>{' '}
            <b>ask-deepseek MINOR-1 (−$450 vs −$450.10):</b> resolved by the same whole-dollar
            rounding — $60,000 − $59,550 = $450 exact, so −$450 stands and needs no decimal.
            <b>RESOLVED.</b>{' '}
            <b>ask-deepseek MINOR-2 (−5.09% → claimed −5.08%):</b> REJECTED as a false positive
            on recompute — $59,267.30 / $62,443 − 1 = −5.0858%, which rounds to −5.09% (codex
            primary independently confirmed the −5.09% spot-to-floor gap). No change; pattern{' '}
            <code>−5.09%</code> verified correct.{' '}
            <b>ask-deepseek MINOR-3 (D-EMA20 −5.51% / D-SMA20 −5.59% → claimed −5.50% / −5.60%):</b>{' '}
            REJECTED as false positives on recompute — $59,267.30 / $62,722 − 1 = −5.508% →
            −5.51% and $59,267.30 / $62,777 − 1 = −5.591% → −5.59% (offsets are computed from
            exact series values, codex confirmed all MA offsets). No change. Overall:{' '}
            <b>post codex hostile audit</b> — every actionable finding RESOLVED with grep
            hits-after = 0; the two rejected MINORs were deepseek arithmetic errors, not note
            errors.{' '}
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
            atomic snapshot (2026-06-29 00:06Z) with section-level provenance disclosed in the
            manifest band above;{' '}
            <em>critically, the live derivatives tape was frozen for 281.4h at snapshot time
            (last row 2026-06-17 06:43Z) and the smart-money positioning feed has been dead
            ~16.94 days</em>, so all funding, OI, flow and positioning figures are explicitly
            last-known / stale or non-computable and flagged as such; the macro panel render is
            2026-06-28 22:15Z (~1.85h before snapshot), a Sunday-evening render whose rates /
            credit Tier-1 series are byte-identical to 06-28 with the FX legs essentially flat.
            Price, MTF, GEX and cross-asset are fresh. This is the v2 note, post codex hostile
            audit — findings adjudicated by recompute and applied. Levels, sizes, and
            conditions are illustrative of the desk&rsquo;s process, not standing
            recommendations. Past correlation, gamma, and positioning patterns do not bind
            future tape. Derivatives carry the risk of total loss and, where leveraged, loss
            exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The reprieve was handed back: the 200W floor broke on a fifth daily close (06-28
                $59,550, a down-close), the dealer book flipped BACK to −20.1M net-SHORT-gamma
                with a downside amplifier re-emerged at 3JUL26 −9.63M, and the flip reclaim
                widened to −1.42% — all read through a dead tape a thirteenth day. Floor broke
                five times. Book flipped back short-gamma. Weekly close settles today. Blind.
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
            v2 · 2026-06-29 00:06Z snapshot · post codex hostile audit · 2026-06-29T00:54:57Z ·
            sources: live_db.json (FROZEN 281.4h) · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
