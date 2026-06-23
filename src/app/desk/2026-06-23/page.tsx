import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-23 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-23',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-23' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260623() {
  await requireViewer('/desk/2026-06-23');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-23 · v2</span>
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
              <span className="dn-big">$63,961</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.79%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-23 00:08Z ·{' '}
              <span className="dn-em">
                LIVE-TAPE OUTAGE INTO A SEVENTH DAY — the OKX monitor has now been
                frozen 137.4h; price/MTF/GEX/cross-asset are fresh, the derivatives
                tape is still dark and the SM feed has been dead ~10.94 days
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
                    <b>137.4h stale</b> vs the 00:08Z snapshot anchor (was 130.6h on
                    the 06-22 note, 65.4h on 06-20, 17.4h on 06-18 — the outage has run
                    another ~6.8h since the last note). Funding / OI / CVD / basis /
                    retail / taker-flow are LAST-KNOWN at 06-17 06:43Z, not current. The
                    SM sub-feed (long_btc / short_btc / net_btc) is frozen even longer —
                    constant since 2026-06-12 01:36Z (~262.5h / ~10.94 days); SM net and
                    the SM cut-fraction are <b>NON-COMPUTABLE</b> this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-23 00:01Z scan</td>
                  <td className="dn-flag">
                    fresh (~7 min before anchor) · rolling latest-file artifact,
                    archived verbatim at
                    /opt/desk-note/snapshots/2026-06-23-0008/ · in-progress bars · scan
                    spot $63,975, 24h +1.01%, 24h H/L $65,597 / $63,328, qVol $10.43B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-23 00:01Z snapshot</td>
                  <td className="dn-flag">
                    fresh (~7 min before anchor) · Deribit idx $64,116 ($155 above
                    parquet spot $63,961) · 890 instruments (flat vs 06-22) · net GEX{' '}
                    <b>−35.1M</b> (net SHORT gamma, <b>RE-AMPLIFIED</b> from −0.6M flat
                    on 06-22) · flip $64,580 (spot BELOW again — the 06-22 above-flip
                    reclaim was handed back overnight) · the dominant chunk is the
                    26JUN26 monthly <b>−41.99M</b>, 3.3 DTE (DEEPENED from −28.36M on
                    06-22), and the near-0DTE 23JUN26 0.3 has flipped to −3.18M; spot has
                    rolled into the $58k–$64k negative-gamma cluster
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-23 00:01Z
                  </td>
                  <td className="dn-flag">fresh · 7d 1h bars · 22 assets · 167 rows · regime NORMAL (mean |r| 0.286, loosened from 0.288 on 06-22)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-22 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.9h render lag (fresher than the 06-22 note&rsquo;s ~19h) · the
                    FRED Tier-1 daily series still carry a <b>stale 4d</b> flag but the
                    levels printed fresh deltas: 10Y 4.49% → <b>4.46%</b> (−3.0bp), TIPS
                    2.23% → <b>2.21%</b> (EXTREME RISK-OFF), HY OAS <b>2.66%</b>{' '}
                    (0.0bp, RISK-ON), DXY <b>100.83</b> (EXTREME RISK-OFF, −0.02 day) · MOVE bond
                    vol firmed back to <b>70.0</b> (+4.62, was 65.4 on 06-22) · Fed net liq
                    $5.849T · USD/JPY 161.37 (flat vs 06-22)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-23 00:05Z (close $63,961)</td>
                  <td className="dn-flag">
                    fresh kline (exchange OHLC, independent of the frozen live tape) ·
                    offsets recomputed vs the parquet last-bar close, the freshest
                    available spot while the live tape is frozen · the displayed weekly
                    ladder uses the 2023→ subset (183 weekly bars), so no W-SMA200 row;
                    the 200W floor is recomputed directly from the full-history glob —
                    355 completed weekly W-MON bars (2019→present), excluding the
                    in-progress 06-29 week — = <b>$62,443</b>, ~$4 below the $62,447 the
                    06-22 note pinned (a slow weekly SMA, ~$250/wk) · weekly_200sma.json
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
              <span className="dn-v bear">−7.24% (STALE · 06-17 06:43Z · 137.4h)</span>
              <span className="dn-src">live_db raw funding −0.006608 × 1095 = −7.24% ann (NOT ×100) · LAST-KNOWN at the 06-17 06:43Z freeze, now 137.4h stale, not a current read · last-available ann over the 24h+1m inclusive sampled window ending at the freeze (1,442 rows): mean +0.20%, range −7.24% / +7.21%, 819 / 1,442 rows negative — a balanced, two-sided book at the point the tape died · byte-for-byte the same frozen row carried by the 06-19 / 06-20 / 06-22 notes</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · vs 06-22</span>
              <span className="dn-v">tape frozen — not computable</span>
              <span className="dn-src">the live tape has not written since 06-17 06:43Z, so there is still no current funding to difference against the 06-22 note · last-known print at the freeze was −7.24% ann (shorts paying longs); the leverage gate remains un-assessable a seventh day running</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC (−0.45%) · STALE window</span>
              <span className="dn-src">live_db oi_btc 102,945 at the 06-17 06:43Z freeze vs the start of a 24h+1m inclusive sampled window (1,442 rows) · the window ENDS at the freeze, NOT into the 00:08Z snapshot — it describes the tape up to 06-17 06:43Z and is 137.4h out of date</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` at the 06-17 06:43Z freeze (was 58.29% at the start of the 24h+1m inclusive sampled window — a +1.18pt long add into the roll-over) · last-known, 137.4h stale</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED DEAD ~262.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · this triple has been byte-for-byte constant since 2026-06-12 01:36Z (~262.5h / ~10.94 days) — it is a FROZEN value, NOT a current positioning read; carried only to mark the dead feed</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">NON-COMPUTABLE</span>
              <span className="dn-src">SM feed frozen ~10.94 days · |Δ| / prior_net cannot be computed — there is no current SM net to difference · the squeeze-cycle / re-stack framework is blind this cut, a continuation of the 06-16 / 06-18 / 06-19 / 06-20 / 06-22 ON-HOLD</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.6% / 42.58%</span>
              <span className="dn-src">GEX median IV across 890 instruments (00:01Z, fresh) vs 30D close-to-close RV 42.58% off parquet — chain richness only ~+1.02pt, essentially priced to realised; RV stays elevated (was 43.43% on 06-22, 24.91% on 05-31) · IV is a chain-median across 890 instruments, NOT a tradable spread</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−0.96% (below)</span>
              <span className="dn-src">flip $64,580 (was $64,635 · slipped −$55) · vs parquet spot $63,961 (63,961.20 / 64,580 − 1 = −0.958%) / GEX file Deribit idx $64,116 (64,116 / 64,580 − 1 = −0.718%, file reads −0.7%) — both references BELOW the flip again, the 06-22 above-flip reclaim handed back, tile rounds the spot side to −0.96% · net GEX −35.1M (net SHORT gamma, re-amplified from −0.6M flat) · the 26JUN26 monthly −41.99M deepened, 3.3 DTE</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The cycle floor passed its weekly-close test — the 22JUN weekly closed
                $63,990, above the $62,443 200W floor — but the overnight tape handed
                back the 06-22 reclaim and the dealer book re-loaded net-short-gamma into
                the 26JUN opex, all still read through a dead derivatives tape, a seventh
                day running
              </span>. The open weekly-close test the last three notes carried is now
              <em> answered</em>: the 22JUN weekly bar settled at{' '}
              <span className="dn-tag bull">$63,990 (+2.48% above the $62,443
              floor)</span>, the prior note&rsquo;s escalation condition (a weekly close
              &lt; $62,440) did <em>not</em> fire, and the 06-15 200W reclaim thesis is no
              longer provisional — it is a confirmed weekly-close hold. The new in-progress
              week (ending 06-29) currently reads{' '}
              <span className="dn-tag bull">$63,961, +2.43% above the floor</span>. But the
              constructive overlay the 06-22 note flagged on top of the floor has been
              partly given back: spot rolled{' '}
              <span className="dn-tag bear">$64,710 → $63,961 (−1.16% over ~8h)</span>{' '}
              into the 00:05Z parquet bar, dropping{' '}
              <span className="dn-tag bear">back below the 0-γ flip $64,580 (−0.96%)</span>{' '}
              after the single above-flip print on 06-22, and the dealer book{' '}
              <span className="dn-tag bear">re-amplified −0.6M → −35.1M net-short-gamma</span>{' '}
              as the 26JUN26 monthly deepened{' '}
              <span className="dn-tag bear">−28.36M → −41.99M (3.3 DTE)</span> and spot fell
              <em> into</em> the $58k–$64k negative-gamma cluster. MTF deteriorated to{' '}
              <span className="dn-tag bear">1 bull / 7 bear / 2 neutral</span> (was 3/5/2),
              the 1w printed a fresh water-down death cross, but the engine frames carry
              oversold-bounce hints (1h ⚡TD9 BUY, 8h water-down golden cross 2b) and the
              regime flipped from sell-rallies momentum to a{' '}
              <span className="dn-tag">6/9 reversal regime (JT&lt;0, mean-reversion
              favoured, trend-follow with caution)</span>.{' '}
              <span className="dn-em">
                The operational fact is unchanged and still binding: the OKX monitor has
                now been frozen 137.4h (last row 2026-06-17 06:43Z), funding / OI / CVD /
                basis / retail are last-known and stale, and the SM positioning book has
                been dead ~10.94 days — SM net and the cut-fraction are non-computable. The
                desk cannot see whether the overnight fade was distribution or thin drift.
                The read is on price, gamma and MTF alone.
              </span>{' '}
              The book stays flat: the floor cleared its weekly close, but the short-term
              reclaim failed and the book re-loaded for the 26JUN monthly now 3.3 DTE, and
              no scout can be sized on a positioning-blind tape into a re-amplifying dealer
              book under a bearish net-MTF read.
            </p>

            <p>
              BTC prints <span className="dn-tag">$63,961</span> at the parquet last bar
              (00:05Z),{' '}
              <span className="dn-tag bull">+0.79%</span> on 24h (vs $63,461 one day prior;
              the MTF scan reads +1.01% on its own 00:01Z window — the spread is the
              reference window, not a data conflict), inside a{' '}
              <span className="dn-tag">$65,548 / $63,433</span> parquet 24h close range
              (close max @ 2026-06-22 13:59Z, close min @ 2026-06-22 00:11Z; the MTF scan
              OHLC 24h H/L are $65,597 / $63,328). The Deribit index reads $64,116 at 00:01Z
              and the MTF scan spot is $63,975 — so the freshest spot is well-corroborated
              across three independent fresh sources (parquet kline $63,961, GEX Deribit
              index $64,116, MTF scan $63,975), even though the live_db tape that normally
              supplies it is frozen at $65,616 (06-17 06:43Z, 137.4h stale).{' '}
              <span className="dn-signal">The structural read has moved from an open
              floor-test to a resolved weekly-close hold sitting under a failed
              reclaim</span>: the 06-15 weekly close $66,286 opened the 200W reclaim, three
              red daily closes (06-16 $65,645, 06-17 $64,473, 06-18 $62,924) handed the
              breakout back onto the floor, five finalized daily closes then held above it
              (06-18 $62,924, 06-19 $63,513, 06-20 $64,270, 06-21 $63,287, 06-22 $63,990),
              and the 06-22 close <em>is</em> the 22JUN weekly close — $63,990, +2.48% above
              the floor — so the weekly-close test the prior note was waiting on resolved as
              a hold.{' '}
              <span className="dn-em">
                That is the one unambiguous positive of the day. Everything stacked above it
                — the flip reclaim, the de-amplified book — was given back overnight: the
                in-progress 06-23 daily bar is $63,961, back below the flip and below
                D-EMA20, inside a dealer book that has re-amplified net-short-gamma into a
                3.3-DTE monthly, on a tape the desk still cannot read for positioning.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · LIVE TAPE FROZEN 137.4h (seventh day) · SM book dead ~10.94 days · funding/OI/flow last-known stale · the desk cannot see how the overnight fade off the flip was absorbed</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important source of this note — the live derivatives tape —
                is still down, a seventh day running
              </span>. The OKX monitor has appended no row to live_db.json since{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> (t = &ldquo;06-17
              14:43&rdquo; BJ; the file mtime 06-17 06:43:08Z confirms the write stopped
              there; the process status is not archived or verified in this cut, so the note
              asserts the missing tape, not a live/hung process). That is now{' '}
              <span className="dn-tag bear">137.4h of missing tape</span> against the 00:08Z
              snapshot anchor — the 06-18 note flagged it at 17.4h, the 06-19 note at 41.4h,
              the 06-20 note at 65.4h, the 06-22 note at 130.6h, and the outage has run
              another ~6.8h without a write. Everything the live tape carries — funding, open
              interest, spot/futures CVD, perp basis, retail long%, taker-net, big-print
              flow, aggressor skew — is therefore{' '}
              <span className="dn-em">last-known at 06-17 06:43Z and not current</span>. The
              smart-money positioning triple (long_btc / short_btc / net_btc) has been
              byte-for-byte constant —{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> — since{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>, ~262.5h (~10.94 days).
              The 06-16 note flagged this dead feed at ~94.5h and put the squeeze-cycle ON
              HOLD; the 06-20 note carried it at ~190.5h, the 06-22 note at ~255.7h; today it
              is ~262.5h and still dead.{' '}
              <span className="dn-em">
                SM net is non-computable as a current read, and the SM cut fraction (|Δ| /
                prior_net) cannot be formed — there is no current SM net to difference. Any
                positioning claim in this note is explicitly historical, not live.
              </span>
            </p>

            <p>
              For completeness, the <em>last-available</em> tape readings — all pinned to
              the 06-17 06:43Z freeze and now 137.4h out of date, and byte-for-byte the same
              readings the 06-19 / 06-20 / 06-22 notes carried because it is the same frozen
              row — are: funding <span className="dn-tag bear">−7.24% ann</span> (raw
              −0.006608 × 1095; shorts paying longs at the freeze), with the last-available
              path balanced two-sided over the 24h+1m inclusive sampled window (1,442 rows:
              mean <span className="dn-tag">+0.20% ann</span>, range{' '}
              <span className="dn-tag">−7.24% / +7.21%</span>, 819 / 1,442 rows negative); OI{' '}
              <span className="dn-tag bear">102,945 BTC, −468 over the trailing 24h+1m window
              (−0.45%)</span>; retail{' '}
              <span className="dn-tag">mkt_long_pct 59.47%</span> (a +1.18pt long add over
              that same window); perp basis{' '}
              <span className="dn-tag bear">−$57.43 discount</span> to spot (window mean
              −$58.62, range −$146.17 / +$67.04).{' '}
              <span className="dn-em">
                Read this as a near-seven-day-old fingerprint, not a signal: a two-sided
                funding book, OI bleeding, retail adding longs into the first leg of
                weakness. None of it can be carried forward to the 00:08Z snapshot — and it
                predates the entire 06-18 → 06-22 floor-hold sequence AND tonight&rsquo;s fade
                off the flip, so it says nothing about how positioning absorbed the floor
                defence, the brief flip reclaim, or the overnight roll-back. The desk treats
                the positioning dimension as unknown, and the fade off the flip as
                positioning-unconfirmed.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure <span className="dn-roman">II · price/MTF FRESH · multi-TF resonance bearish · sell the bounce (1 bull / 7 bear / 2 neutral) · regime flipped to 6/9 reversal (mean-reversion favoured) · 1w water-down death cross fresh · 1h ⚡TD9 BUY + 8h golden cross oversold hints · spot back below the flip and D-EMA20, holding D-SMA20 (+0.66%), 200W floor $62,443 held the 22JUN weekly close (+2.43% on the in-progress week)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map is fresh, deteriorated back to multi-TF bearish, but the regime
                classifier flipped to reversal / mean-reversion and the engine frames carry
                oversold-bounce hints
              </span> — the one dimension, with the dealer map, the desk can still trust
              today. The 00:01Z scan tags{' '}
              <span className="dn-tag bear">1 bull / 7 bear / 2 neutral across 10 frames</span>,
              net read <em>multi-TF resonance bearish · sell the bounce</em> — a step worse
              than the 06-22 scan&rsquo;s 3 bull / 5 bear / 2 neutral as the overnight fade
              rolled the short frames back below cloud (15m below 16b, 30m below 1b; only the
              1h holds above cloud 1b). But the regime line flipped:{' '}
              <span className="dn-tag">6/9 reversal regime (JT&lt;0) — mean-reversion /
              bounce-favoured, trend-follow with caution</span>, where the 06-22 scan read
              5/9 momentum / trend-continuation. The engine carries the constructive
              counter-notes: a fresh{' '}
              <span className="dn-tag bull">1h ⚡TD9 BUY printed at $63,977</span>{' '}
              (oversold-reversal hint), an{' '}
              <span className="dn-tag bull">8h water-down golden cross (2 bars ago)</span>{' '}
              joining a 1d water-down golden cross 10b and a 4h water-down golden cross 17b,
              and a <span className="dn-tag bull">1M TD8 buy — one more close</span>. Against
              that the long structure is bearish: 12h / 1d / 3d / 1w all below cloud, and the{' '}
              <span className="dn-tag bear">1w printed a fresh water-down death cross (just
              now)</span> with RSI 36.4 and DIF −5,526 (a weak below-water death cross,
              bearish-continuation). Reversal divergences: top div 1h, bottom div 15m / 1w.{' '}
              <span className="dn-em">
                Straight read: the net frame stack is bearish and the short frames have
                rolled back below cloud, but the regime flipped from sell-rallies to
                mean-reversion, the 1h TD9 buy and 8h golden cross are oversold-bounce hints,
                and price is parked on D-SMA20 just above the 200W floor. This is a bearish
                trend frame with an oversold-bounce setup underneath it — the mirror of
                06-22, where a constructive bounce sat inside a sell-rallies regime; today a
                bearish stack sits inside a mean-reversion regime. Neither side has won. The
                1w death cross is the strongest caution, the 1h TD9 buy the strongest
                constructive note.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,976</td><td className="num bear">39.1</td><td className="neut">death (water-up) 37b</td><td className="bear">below ↑64.8k 16b</td><td>Sell 4</td><td>BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">63,976</td><td className="num bear">38.2</td><td className="neut">death (water-up) 15b</td><td className="bear">below ↑64.0k 1b</td><td>Buy 7</td><td>BEAR hid</td></tr>
                <tr><td>1h</td><td className="num">63,977</td><td className="num">43.4</td><td className="neut">death (water-up) 5b</td><td className="bull">above ↓64.0k 1b</td><td>⚡ TD9 BUY</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">63,977</td><td className="num">48.7</td><td className="bull">golden (water-dn) 17b</td><td className="neut">in cloud 64.0k–64.5k 5b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">63,977</td><td className="num">48.6</td><td className="bull">golden (water-dn) 2b</td><td className="neut">in cloud 62.8k–66.7k 10b</td><td>Sell 1</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">63,977</td><td className="num">46.9</td><td className="neut">—</td><td className="bear">below ↑64.3k 63b</td><td>Buy 2</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">63,976</td><td className="num bear">40.9</td><td className="bull">golden (water-dn) 10b</td><td className="bear">below ↑75.3k 22b</td><td>Sell 2</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">63,971</td><td className="num bear">38.7</td><td className="bear">death (water-up) 9b</td><td className="bear">below ↑73.4k 7b</td><td>Sell 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,971</td><td className="num bear">36.4</td><td className="bear">death (water-dn) 刚印 (just printed)</td><td className="bear">below ↑100.3k 21b</td><td>Buy 6</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">63,971</td><td className="num bear">42.9</td><td className="neut">—</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (08:01 Beijing; rolling latest
                    file, archived verbatim at
                    /opt/desk-note/snapshots/2026-06-23-0008/). Net read{' '}
                    <em>multi-TF resonance bearish · sell the bounce (1 bull / 7 bear / 2
                    neutral)</em>; regime <em>6/9 reversal regime (JT&lt;0, mean-reversion /
                    bounce-favoured, trend-follow with caution)</em>; reversal divergences{' '}
                    <em>top div 1h, bottom div 15m / 1w</em>. Header alerts:{' '}
                    <em>1w water-down death cross (just printed)</em>,{' '}
                    <em>8h water-down golden cross (2 bars ago)</em>, <em>1h ⚡TD9 BUY at
                    $63,977</em>, <em>1M TD8 Buy — one more close</em>. Scan spot $63,975, 24h
                    +1.01%, 24h H/L $65,597 / $63,328, qVol $10.43B. Closes are in-progress
                    bars; treat every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is the same deep overhead wall as 06-22, but spot has slipped
              back below D-EMA20 and now sits pinned between D-SMA20 just under it and the
              200W floor below. $63,961 sits{' '}
              <span className="dn-tag bull">+0.66% above D-SMA20 $63,544</span> — the single
              positive daily-MA offset and the line the tape is now resting on — and{' '}
              <span className="dn-tag bull">+2.43% above the full-history W-SMA200 200W floor
              $62,443</span>. The first overhead line is{' '}
              <span className="dn-tag bear">D-EMA20 $65,188 (−1.88%)</span> — reclaimed
              intraday on 06-22 (the note read it at −1.03% with spot at $64,710) and handed
              back overnight — followed by the cycle-proxy{' '}
              <span className="dn-tag bear">W-EMA200 $67,547 (−5.31%)</span>, then a dense
              overhead band: <span className="dn-tag bear">D-EMA50 $68,852 (−7.10%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $71,197 (−10.16%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $71,513 (−10.56%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $71,889 (−11.03%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $71,920 (−11.07%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $72,138 (−11.34%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $73,513 (−12.99%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,078 (−13.66%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $74,805 (−14.50%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $75,684 (−15.49%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $76,460 (−16.35%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $77,542 (−17.51%)</span>. Far above and
              disused: W-EMA100 $80,632 (−20.67%), W-EMA50 $81,928 (−21.93%), W-SMA100
              $88,498 (−27.73%), W-SMA50 $89,871 (−28.83%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-23 00:05Z (close $63,961.20);
                offsets recomputed against that same last-bar close, which is the freshest
                available spot while the live tape is frozen (so the D-SMA20 offset is a
                near-self-reference and is read as &ldquo;price on the line,&rdquo; not a
                tradable gap). Displayed MA levels are $-rounded; offsets computed from exact
                series values. The displayed weekly ladder uses the 2023→ subset (183 weekly
                bars), so W-SMA200 is non-computable there and W-EMA200 $67,547 seeds from
                available history; the 200W floor $62,443 is recomputed separately from the
                full-history glob (355 completed weekly W-MON bars). Daily closes: 06-17
                $64,473, 06-18 $62,924, 06-19 $63,513, 06-20 $64,270, 06-21 $63,287, 06-22
                $63,990 (= the 22JUN weekly close), 06-23 (in-progress, 5-min bar) $63,961 —
                five finalized closes (06-18 → 06-22) above the floor and the weekly close resolved above it.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book RE-AMPLIFIED net-short-gamma aggregate −35.1M (was −0.6M flat on 06-22) · 26JUN26 monthly DEEPENED to −41.99M (3.3 DTE) · spot fell BACK BELOW the flip $64,580 into the $58k–$64k negative-gamma cluster · the de-amplification of the last three notes reversed</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book&rsquo;s de-amplification reversed: aggregate gamma went from
                flat back to a −35.1M net-short-gamma posture as opex approaches and spot
                fell into the put-heavy strikes
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bear">−35.1M / 1%</span> (was −0.6M flat on 06-22,
              −48.6M on 06-20, −111.1M on 06-19); the book has re-loaded net-short-gamma
              (amplifying). The 0-γ flip slipped{' '}
              <span className="dn-tag">$64,635 → $64,580 (−$55)</span>, and spot $63,961 sits{' '}
              <span className="dn-tag bear">−0.96% below the flip</span> on
              spot-denominated math (63,961.20 / 64,580 − 1 = −0.958%); the GEX file&rsquo;s
              own &ldquo;dist to flip&rdquo; reads −0.7% off its Deribit-index $64,116 ($155
              above parquet spot), which is{' '}
              <span className="dn-tag bear">−0.72%</span> (64,116 / 64,580 − 1 = −0.718%) —
              both references below the flip, the 06-22 above-flip reclaim handed back in a
              single overnight session. The wall map is now put-heavy below and at spot:{' '}
              <span className="dn-tag bear">$60k −22.73M</span> (heaviest wall, the cluster
              floor),{' '}
              <span className="dn-tag bear">$64k −17.69M</span> (right at spot),{' '}
              <span className="dn-tag bear">$62k −16.51M</span>,{' '}
              <span className="dn-tag bull">$67k +9.98M</span>,{' '}
              <span className="dn-tag bull">$80k +9.58M</span>,{' '}
              <span className="dn-tag bear">$63k −9.06M</span>,{' '}
              <span className="dn-tag bull">$70k +7.58M</span>,{' '}
              <span className="dn-tag bear">$55k −6.41M</span>,{' '}
              <span className="dn-tag bear">$61k −6.33M</span>,{' '}
              <span className="dn-tag bear">$58k −6.08M</span>.{' '}
              <span className="dn-em">
                The listed major walls from $58k–$64k total roughly −78M and bracket
                spot directly — spot at $63,961 sits inside it, on the $64k −17.69M strike,
                which is the structural mechanism behind the re-amplification: a dealer book
                short gamma right at spot amplifies the next move in either direction rather
                than dampening it. The positive walls ($67k, $70k, $80k) all sit overhead and
                offer no support beneath spot.
              </span>{' '}
              By expiry the concentration is the 26JUN26 monthly{' '}
              <span className="dn-tag bear">−41.99M (3.3 DTE)</span> — DEEPENED from −28.36M
              on 06-22 and −49.31M on 06-20, so the monthly amplifier re-thickened back toward
              its 06-20 weight as opex closed in. The near strip is now negative too: 23JUN26
              0.3 <span className="dn-tag bear">−3.18M</span> (was +4.89M positive on 06-22),
              24JUN26 1.3 −1.82M, 25JUN26 2.3 −0.22M. Forward of the monthly the strip is
              small and mixed — 3JUL26 10.3 is still slightly negative at −0.75M — then mostly
              positive from 10JUL onward: 10JUL26 17.3 +0.24M, 31JUL26 38.3{' '}
              <span className="dn-tag bull">+15.23M</span>, 28AUG26 66.3 +2.86M, 25SEP26 94.3
              +0.76M, 25DEC26 185.3 +3.28M, 26MAR27 276.3 +0.77M. No forward expiry carries
              the 26JUN weight — the entire concentrated downside-amplifier risk is the one
              monthly chunk, 3.3 DTE, and it has re-thickened rather than decayed.
            </p>

            <p>
              IV median across 890 instruments is{' '}
              <span className="dn-tag">43.6%</span> (flat on the 890-instrument count vs
              06-22, IV 43.7% → 43.6%) against 30D close-to-close RV of{' '}
              <span className="dn-tag">42.58%</span> — chain-level richness only{' '}
              <span className="dn-tag">~+1.02pt</span>, essentially priced to realised, with
              RV staying elevated (42.58% today vs 43.43% on 06-22 and 24.91% on 05-31 — the
              high-vol regime that started with the 06-08 → 06-18 down-leg persists). A
              chain-median across 890 instruments, <span className="dn-em">not</span> a
              tradable spread; expiry-/strike-level vega, skew and term structure remain not
              loaded; the vol read stays framework-only. RV methodology: 30D close-to-close,
              logret.std × √365 × 100 on the last 30 daily log returns (= 31 consecutive
              daily closes) anchored to parquet last bar 2026-06-23 00:05Z; underlying close
              window range $60,850 – $77,282. (For reference, the last 29 returns / 30 closes
              reads 43.20%; the 42.58% page value comes from 30 returns.) P/C ratio 0.63,
              Call OI 272,383 / Put OI 171,045 BTC.
            </p>

            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · render fresh (~1.9h) · Tier-1 stale-4d but levels printed fresh deltas — 10Y 4.46% (−3bp, eased), TIPS 2.21% EXTREME RISK-OFF, HY OAS 2.66% RISK-ON, DXY 100.83 EXTREME RISK-OFF · MOVE firmed back to 70.0 (+4.62) · BTC re-coupled to a soft TradFi complex, lag to NQ −2.71pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro panel render is fresh (~1.9h) and the Tier-1 daily series printed
                fresh deltas this cut, though they still carry a stale-4d flag — rates eased
                a touch, the dollar held at EXTREME RISK-OFF, and bond vol firmed back
              </span>. Dashboard render is 2026-06-22 22:15Z, ~1.9h before the snapshot. US
              10Y nominal <span className="dn-tag bull">4.46% (−3.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.44</span> — tight regime, RISK-OFF, eased 3bp
              from 06-22&rsquo;s 4.49%. 10Y TIPS real{' '}
              <span className="dn-tag bull">2.21% (−2.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.50</span> — EXTREME RISK-OFF, the tightest
              line on the panel, eased slightly. 5Y5Y BE inflation{' '}
              <span className="dn-tag bull">2.18% (−5.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag bull">2.23% (−2.0bp)</span> — inflation expectations
              softening, both episodic. HY OAS{' '}
              <span className="dn-tag bear">2.66% (0.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.56</span> — credit still loose, a RISK-ON
              episodic, a touch wider on the day. MOVE bond vol is{' '}
              <span className="dn-tag bear">70.0 (+4.62)</span> — firmed back after the 65.4
              of 06-22, still &ldquo;loose&rdquo; but a touch tighter on the day. The dollar
              stays firm: DXY <span className="dn-tag bear">100.83 (−0.02 day)</span>, regime
              z <span className="dn-tag bear">+2.45</span>, episodic z +2.09 — EXTREME
              RISK-OFF, above 100. Fed net liquidity{' '}
              <span className="dn-tag bear">$5.849T (−0.038T)</span>, regime z{' '}
              <span className="dn-tag">+0.05</span> but episodic z{' '}
              <span className="dn-tag bear">−2.42</span> — the |episodic z| &gt; 1.5
              day-change surprise the dashboard flags. USD/JPY{' '}
              <span className="dn-tag bear">161.37 (+0.08 day)</span>, regime z +1.50,
              episodic +1.85 (flat vs 06-22); US-JP 10Y spread{' '}
              <span className="dn-tag bear">1.81% (−3.0bp)</span>; USD/CNY{' '}
              <span className="dn-tag">6.7671</span>; WTI{' '}
              <span className="dn-tag">$84.7 (stale 7d)</span>.{' '}
              <span className="dn-em">
                Net: the macro backdrop is the same dollar / real-rate EXTREME RISK-OFF
                headwind as the lineage, with rates a touch easier and bond vol a touch
                firmer on the day — a wash, not a regime shift. The re-grow gates: HY OAS gate
                2.78% is 12bp away (at 2.66%), and the 10Y gate 4.53% is 7bp away (at 4.46%,
                eased back). The reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE at
                4.46%. The dollar / real-rate firming remains a real macro headwind layered
                onto the endogenous read; credit and the gates have not flipped the tail
                thesis.
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
                <tr><td>US 10Y nominal</td><td className="num">4.46%</td><td className="num bull">−3.0bp</td><td className="num bear">+1.44</td><td className="bear">tight · RISK-OFF · stale 4d</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.21%</td><td className="num bull">−2.0bp</td><td className="num bear">+2.50</td><td className="bear">tightest line · EXTREME RISK-OFF · stale 4d</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.18%</td><td className="num bull">−5.0bp</td><td className="num">−0.69</td><td className="neut">soft · episodic</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.23%</td><td className="num bull">−2.0bp</td><td className="num">−1.67</td><td className="neut">soft · episodic</td></tr>
                <tr><td>HY OAS</td><td className="num">2.66%</td><td className="num">0.0bp</td><td className="num bull">−1.56</td><td className="bull">loose · risk-on episodic</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.505</td><td className="num">0.00</td><td className="num">+0.24</td><td className="stale">weekly · stale 10d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">70.0</td><td className="num bear">+4.62</td><td className="num bull">−0.51</td><td className="bull">loose · firmed back (was 65.4)</td></tr>
                <tr><td>DXY</td><td className="num">100.83</td><td className="num">−0.02</td><td className="num bear">+2.45</td><td className="bear">EXTREME RISK-OFF · above 100</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.849T</td><td className="num bear">−0.038T</td><td className="num">+0.05</td><td className="bear">drained · episodic −2.42</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.37</td><td className="num bear">+0.08</td><td className="num bear">+1.50</td><td className="bear">flat vs 06-22</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.81%</td><td className="num bull">−3.0bp</td><td className="num bull">−1.11</td><td className="bear">RISK-OFF · stale 4d</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7671</td><td className="num">−0.00</td><td className="num bull">−1.64</td><td className="neut">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.286</span> — loosened from the
              0.288 of 06-22 but still in the NORMAL band, and{' '}
              <span className="dn-signal">BTC stays coupled to the TradFi risk
              complex</span>. BTC&rsquo;s top ties remain the equity / precious-metal
              cluster: SP500 <span className="dn-tag">+0.561</span>, NQ{' '}
              <span className="dn-tag">+0.511</span>, NVDA{' '}
              <span className="dn-tag">+0.459</span>, URNM{' '}
              <span className="dn-tag">+0.437</span>, GOLD{' '}
              <span className="dn-tag">+0.408</span>, SILVER{' '}
              <span className="dn-tag">+0.401</span>, COPPER{' '}
              <span className="dn-tag">+0.382</span>, MSFT{' '}
              <span className="dn-tag">+0.333</span>, with the energy complex inverse (CL{' '}
              <span className="dn-tag">−0.214</span>, BRENT{' '}
              <span className="dn-tag">−0.203</span>, NGAS{' '}
              <span className="dn-tag">−0.324</span>) and JPY{' '}
              <span className="dn-tag">−0.202</span>. 7d performance has the whole risk
              complex soft, with BTC the laggard:{' '}
              <span className="dn-tag bear">BTC −3.34%</span>, NQ{' '}
              <span className="dn-tag bear">−0.63%</span>, SP500{' '}
              <span className="dn-tag bear">−1.09%</span>, JP225{' '}
              <span className="dn-tag bull">+4.38%</span>, NVDA{' '}
              <span className="dn-tag bear">−1.55%</span>, META{' '}
              <span className="dn-tag bear">−5.13%</span>, MSFT{' '}
              <span className="dn-tag bear">−7.82%</span>, GOOGL{' '}
              <span className="dn-tag bear">−6.23%</span>, AMZN{' '}
              <span className="dn-tag bear">−6.19%</span>, TSLA{' '}
              <span className="dn-tag bull">+0.04%</span>; metals soft (GOLD{' '}
              <span className="dn-tag bear">−2.98%</span>, SILVER{' '}
              <span className="dn-tag bear">−7.00%</span>, PLAT{' '}
              <span className="dn-tag bear">−5.23%</span>); energy crashed (CL{' '}
              <span className="dn-tag bear">−7.19%</span>, BRENT{' '}
              <span className="dn-tag bear">−5.93%</span>, NGAS{' '}
              <span className="dn-tag bull">+2.85%</span>).{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d return −3.34% vs NQ −0.63% is a lag of −2.71pt (vs −2.36pt on
                06-22) — and the character is the same as 06-22: BTC underperforms inside a
                broadly red risk tape (NQ −0.63%, SP500 −1.09%, big-cap tech −5% to −8%,
                metals and energy down), not a decoupling where TradFi rallied and BTC did
                not. The endogenous-to-crypto read still holds for the down-leg structure
                (dealer gamma re-amplifying, reclaim handed back, 200W floor held its weekly
                close), but the dollar / real-rate firming and a softening equity tape stay a
                genuine macro headwind on top of it.
              </span>{' '}
              JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book <span className="dn-roman">V · book FLAT · 200W floor HELD the 22JUN weekly close (spot +2.43% on the in-progress week) — the open test the last three notes carried is resolved as a hold · scout STILL stood down (flip reclaim handed back, tape blind, book re-amplified) · macro tail gate un-fired (10Y 7bp away) · squeeze-cycle ON HOLD (SM dead ~10.94 days)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — the cycle floor passed its weekly-close
                test, but the short-term reclaim was handed back, the dealer book
                re-amplified, and the binding constraint is still data integrity
              </span>. The one upgrade vs 06-22 is real: the 22JUN weekly closed $63,990,
              above the $62,443 floor, so the weekly-close test the 06-20 and 06-22 notes
              flagged is resolved as a hold and the 200W reclaim thesis is no longer
              provisional. But the constructive overlay is gone: spot handed back the flip
              and D-EMA20 overnight, the dealer book re-amplified −0.6M → −35.1M
              net-short-gamma with the 26JUN monthly deepening to −41.99M (3.3 DTE), and the
              net MTF read deteriorated to 1 bull / 7 bear / 2 neutral. The scout still
              cannot be taken: spot is back below the flip, the positioning legs (SM short
              bleed, funding posture, cover-flow) all require a live tape and there is none
              for a seventh day, and a scout long into a re-amplifying short-gamma book on a
              blind tape is not a trade. No new short either: the SM book is unreadable, the
              floor just held its weekly close, and shorting a held-floor with stale flow and
              a 3.3-DTE monthly that the gamma already prices is a poor entry. The trade book
              today is: no shorts, no scout, no fresh hedge — fix the tape AND see whether
              spot re-reclaims the flip or loses D-SMA20 toward the floor before re-arming.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch — WEEKLY CLOSE HELD: the 22JUN weekly closed $63,990, +2.48% above the recomputed $62,443 floor, the escalation (weekly close &lt; $62,440) did NOT fire; the open test the 06-20 / 06-22 notes carried is resolved as a hold, the new in-progress week currently reads +2.43% above</span>
              <div className="dn-trade-name">
                200W cycle floor watch — the weekly-close test the prior notes flagged RESOLVED as a hold: 22JUN weekly close $63,990 (+2.48%) above floor $62,443 = full-history W-SMA200 (355 completed weekly bars, ~$4 below the 06-22 pin), new in-progress week (06-29) currently reads $63,961 (+2.43%), five finalized daily closes above
              </div>
              <div className="dn-thesis">
                The 06-20 note set the weekly settle (22JUN) as the deciding event with the
                escalation condition at a weekly close &lt; $62,440; the 06-22 note carried it
                as an open, in-progress test. That close has now printed: 22JUN settled{' '}
                <span className="dn-tag bull">$63,990, +2.48% above the recomputed $62,443
                floor</span> — the escalation did <em>not</em> fire, so the 06-15 200W reclaim
                thesis is no longer provisional; it is a confirmed weekly-close hold. The new
                in-progress week (ending 06-29) currently reads $63,961, +2.43% above the floor. Five
                finalized daily closes sit above it (06-18 $62,924 → 06-22 $63,990), the
                recent lows have stopped wicking it (the 06-22 24h close low $63,433 sits well
                above), and the floor is now a tested-and-held cycle level on a weekly-close
                basis. <span className="dn-em">This is the cleanest positive in the note — the
                cycle floor passed the test the lineage was waiting on</span> — but it is a
                slow level, the desk still cannot confirm the flow that defended it, and the
                short-term tape has rolled back below the flip into a re-amplifying book.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor</span><span className="dn-lvl-v">$62,443 = full-history W-SMA200, recomputed this cut from the 2019→ parquet glob (355 completed weekly W-MON bars, excluding the in-progress 06-29 week); ~$4 below the $62,447 06-22 pin (slow weekly SMA) · weekly_200sma.json absent so the ratio percentile / last-event stay unsourced, not fabricated</span></div>
                <div><span className="dn-lvl-k">weekly close (test resolved)</span><span className="dn-lvl-v bull">22JUN weekly close $63,990 +2.48% above the floor — the escalation (weekly close &lt; $62,440) did NOT fire; the 200W reclaim thesis confirmed on a weekly-close basis · new in-progress week reads $63,961 +2.43% above</span></div>
                <div><span className="dn-lvl-k">escalation (next weekly close)</span><span className="dn-lvl-v bear">a sustained weekly close &lt; $62,443 breaks the 200W floor — a daily close below is an early warning, an intraday wick is not the break — separate reassessment, the reclaim thesis dies and the down-leg resumes into the 26JUN amplifier</span></div>
                <div><span className="dn-lvl-k">reclaim side (handed back)</span><span className="dn-lvl-v bear">spot lost the flip $64,580 and D-EMA20 $65,188 overnight; it holds only D-SMA20 $63,544 (+0.66%); re-reclaim is a 1h close &gt; the flip then D-EMA20 — NOT a scout trigger on a blind tape (see scout)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework, not a trade.</b> The floor watch is the single load-bearing
                live level while everything else is stale (live tape) or framework-only. It
                has now cleared its weekly-close test — the strongest read it has carried in
                the lineage — but no position is taken on the watch: it sets the escalation
                level (next weekly close &lt; $62,443) and the reclaim ladder (flip $64,580 →
                D-EMA20 $65,188 → W-EMA200 $67,547), and the desk will not pre-position long
                into a reclaim it cannot confirm or short into a floor that just held its
                weekly close, on a blind tape.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STILL STOOD DOWN · price pre-condition HANDED BACK (spot below the flip again) + tape blind ~10.94 days + book re-amplified short-gamma</span>
              <div className="dn-trade-name">
                Cover-bounce scout — the flip reclaim that printed on 06-22 was given back overnight; the scout stays stood down on a blind tape, into a re-amplifying short-gamma book, with the net MTF read back to bearish
              </div>
              <div className="dn-thesis">
                The 06-22 note saw the scout&rsquo;s price pre-condition finally print —
                spot reclaimed the 0-γ flip $64,635 and D-SMA20 — but kept it stood down on
                the blind tape and the sell-rallies regime. Tonight the price pre-condition
                has <em>unwound</em>: spot rolled $64,710 → $63,961, back below the flip
                $64,580 (−0.96%) and below D-EMA20, holding only D-SMA20 (+0.66%). So the
                scout is blocked on three counts now, not two. (1) The price pre-condition is
                no longer met — spot is below the flip again. (2) The positioning legs (SM
                short bleed, funding posture, cover-flow confirmation) all require a live
                tape, and there is none — the desk cannot see whether the overnight fade was
                distribution or thin drift. (3) The dealer book re-amplified to −35.1M
                net-short-gamma with spot sitting on the $64k −17.69M strike inside the
                $58k–$64k cluster, so the book now <em>amplifies</em> the next move rather
                than dampening it.{' '}
                <span className="dn-em">A scout long on a positioning-blind tape, below the
                flip, into a re-amplifying short-gamma book, with the net MTF read back to
                bearish, is not a trade — the only constructive counters are the held weekly
                floor, the 1h TD9 buy and the regime&rsquo;s flip to mean-reversion, and none
                of those is sufficient to size into without a tape.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">stood down · no entry · price pre-condition handed back (spot below the flip) — re-evaluate only after the live tape is restored AND spot re-reclaims the flip</span></div>
                <div><span className="dn-lvl-k">technical pre-condition</span><span className="dn-lvl-v bear">flip $64,580 / D-EMA20 $65,188 reclaim (NOT true — spot below both, holds only D-SMA20 $63,544) AND net MTF off bearish / a confirming engine print (NOT true — 1 bull / 7 bear / 2 neutral, 1w death cross fresh, though regime flipped to mean-reversion and 1h TD9 buy printed)</span></div>
                <div><span className="dn-lvl-k">data pre-condition</span><span className="dn-lvl-v bear">live tape restored (currently 137.4h frozen) AND SM feed live (currently dead ~10.94 days) — both must hold before any positioning leg can be read; this is the binding block</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> no scout entry without a live positioning tape. The held
                weekly floor, the 1h TD9 buy and the mean-reversion regime do not trigger a
                scout while the SM / funding / flow legs are blind, spot is below the flip,
                and the dealer book is short gamma at spot — the desk does not size into a
                cover-bounce it cannot see being covered. The price block that lifted on 06-22
                has re-closed; the operational block (tape down) and now a structural block
                (re-amplified short gamma) compound it.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — 10Y leg eased back to 7bp from firing (4.46% vs 4.53% gate), HY OAS leg 12bp away (2.66% vs 2.78%) · Tier-1 printed fresh deltas, still stale-4d flagged</span>
              <div className="dn-trade-name">
                Downside put-spread — re-grow gate un-fired, 10Y leg eased back to 7bp from the gate; no hedge added (rates eased a touch, dollar firm, bond vol firmed back to 70.0)
              </div>
              <div className="dn-thesis">
                The macro re-grow gate the lineage carries — HY OAS &gt; 2.78% OR 10Y &gt;
                4.53% as the condition to re-grow a downside tail — stays UN-FIRED, and the
                10Y leg eased <em>back</em> from 4bp away (06-22, 4.49%) to 7bp away (today,
                4.46%): 10Y at 4.46%, HY OAS at 2.66% (12bp away). The reclaim-long rates
                filter (10Y &lt; 4.55%) stays TRUE at 4.46%. The macro tape is the same dollar
                / real-rate EXTREME RISK-OFF headwind as the lineage, with MOVE firmed back to
                70.0 — but a macro tail is not the right instrument for a floor that just held
                its weekly close; the concentrated downside risk that remains is the 26JUN
                monthly −41.99M, which the dealer gamma already prices, 3.3 DTE.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · gate un-fired both legs · 10Y leg eased back to 7bp from the gate</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (next Tier-1 print)</span><span className="dn-lvl-v bear">10Y &gt; 4.53% close (currently 4.46%, 7bp to fire, eased back) OR HY OAS &gt; 2.78% close (currently 2.66%, 12bp to fire)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — TRUE at 4.46%; awaits a BTC-internal pivot AND a live tape to translate</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as the levels
                drift, not backtested breakpoints. If the 10Y leg fires (it is closest, though
                it eased back this cut), a downside tail would be reassessed in a separate
                future note (trigger / invalidation / R defined there) — and note the dealer
                strip carries the 26JUN monthly −41.99M, so any such tail would be additive to
                existing dealer short gamma rather than a clean independent hedge.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · ON HOLD — SM feed DEAD ~10.94 days, the re-stack signature cannot be read this cut</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — ON HOLD (continuation of 06-16 / 06-18 / 06-19 / 06-20 / 06-22): the SM feed is frozen ~262.5h, the re-stack signature cannot be read this cut
              </div>
              <div className="dn-thesis">
                The squeeze-cycle / re-stack-hostile-2 framework reads discrete SM steps
                (Δshort &gt; 0 + Δlong &lt; 0 same minute) as continuation signatures; its
                calendar prior (the BJ 13–15 cadence) was falsified on 05-31 and it has run as
                a no-prior watchlist since. It cannot be assessed today for the simplest
                reason: the SM feed is dead. long_btc / short_btc / net_btc have been constant
                since 2026-06-12 01:36Z (~262.5h), so there are no SM deltas to read. The
                06-16 note put this ON HOLD at ~94.5h, the 06-20 note at ~190.5h, the 06-22
                note at ~255.7h; it remains ON HOLD at ~262.5h.{' '}
                <span className="dn-em">No signature can print from a frozen feed; the
                framework is dark until the SM data resumes.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v bear">ON HOLD · SM feed frozen ~262.5h (since 2026-06-12 01:36Z) · no SM deltas computable</span></div>
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
              Decision conditions <span className="dn-roman">VI · LIVE TAPE OUTAGE still the operative condition (seventh day) · 200W floor HELD the 22JUN weekly close (test resolved) · flip reclaim + book de-amplification HANDED BACK — book re-amplified −35.1M, 26JUN monthly deepened to −41.99M (3.3 DTE) · scout stood down (price block re-closed) · macro 10Y gate eased back to 7bp</span>
            </h2>

            <p>
              Of the 06-22 conditions: the live tape did <em>not</em> come back — it is ~6.8h
              deader, now 137.4h frozen with the SM feed at ~10.94 days; the 200W floor
              weekly-close test <em>resolved as a hold</em> (22JUN closed $63,990, +2.48%
              above the floor, escalation did not fire); the flip reclaim that was the
              scout&rsquo;s price pre-condition was handed back (spot −0.96% below the flip);
              the dealer book re-amplified from −0.6M flat to −35.1M net-short-gamma as the
              26JUN monthly deepened −28.36M → −41.99M (3.3 DTE); the scout&rsquo;s price
              block re-closed; the macro re-grow gate stayed un-fired with the 10Y leg easing
              back to 7bp; the squeeze-cycle stayed ON HOLD on a deader feed. The dominant
              condition is unchanged: <em>the desk is positioning-blind, now into a held
              weekly floor sitting under a failed reclaim and a re-amplifying short-gamma
              book it cannot confirm</em>. The conditions today re-set around the continuing
              outage, the resolved weekly-close floor hold, the handed-back reclaim, and the
              re-loaded 26JUN amplifier:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Live tape restored (PRIMARY operational)</td><td className="bull">live_db.json resumes writing fresh rows beyond 2026-06-17 06:43Z AND the SM triple updates off its 06-12 01:36Z freeze</td><td>re-read funding / OI / flow / SM in full; only then can the scout or squeeze-cycle be evaluated — and only then can the overnight fade off the flip be confirmed as distribution vs drift; the positioning dimension has now been blind five notes running</td></tr>
                <tr><td>200W floor — WEEKLY CLOSE HELD (test resolved)</td><td className="bull">22JUN weekly close $63,990 +2.48% above $62,443 floor; the escalation (weekly close &lt; $62,440) did NOT fire; new in-progress week reads $63,961 +2.43% above; five finalized daily closes above</td><td>the floor test the 06-20 / 06-22 notes carried is resolved as a hold — the 06-15 reclaim thesis is confirmed on a weekly-close basis; no position taken, the slow level is the load-bearing live read</td></tr>
                <tr><td>200W floor lost (cycle-regime escalation)</td><td className="bear">sustained weekly close &lt; $62,443 (W-SMA200 floor); a daily close below is an early warning, an intraday wick is NOT the break</td><td>breaks the 200W floor — separate reassessment; the 06-15 reclaim thesis is falsified, the down-leg resumes with the 26JUN26 monthly −41.99M amplifying into opex</td></tr>
                <tr><td>Flip reclaim (scout price pre-condition) — HANDED BACK</td><td className="bear">spot $63,961 −0.96% below flip $64,580 and below D-EMA20 $65,188; holds only D-SMA20 $63,544 (+0.66%); re-reclaim 1h close &gt; flip then D-EMA20</td><td>the price pre-condition that printed on 06-22 has unwound — re-reclaim of the flip is the first step that re-opens scout evaluation, but only IF the live tape is also restored; on a blind tape below the flip the reclaim is watched, not traded</td></tr>
                <tr><td>26JUN26 monthly amplifier (3.3 DTE) — RE-DEEPENED, net book re-amplified</td><td className="bear">26JUN −41.99M (was −28.36M on 06-22), aggregate GEX −35.1M (was −0.6M flat); near strip 23–25JUN now negative; spot sits on the $64k −17.69M strike inside the $58k–$64k cluster</td><td>the dealer book re-loaded net-short-gamma at spot — it amplifies the next move; the one concentrated downside risk is the 26JUN monthly 3.3 DTE; watch only, no short instruction in this note (any future setup defines its own trigger / invalidation / R)</td></tr>
                <tr><td>Macro tail re-grow (10Y leg eased to 7bp)</td><td className="bear">10Y &gt; 4.53% (7bp to fire, eased back from 4bp) OR HY OAS &gt; 2.78% (12bp to fire) — Tier-1 printed fresh deltas, still stale-4d flagged</td><td>no hedge instruction in this note — a gate fire (10Y is closest) would be reassessed in a separate future note; note any such tail would be additive to existing dealer short gamma −41.99M</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.46%</td><td>standalone filter true; needs a BTC-internal pivot AND a live tape to translate to a scout long</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (ON HOLD)</td><td className="stale">SM feed dead ~262.5h; no deltas computable</td><td>suspended, not negative — re-arm on the first fresh SM deltas after the feed resumes</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether spot re-reclaims the flip $64,580 and the D-EMA20 / W-EMA200 ladder
                — which the desk still cannot scout on a blind tape — or whether the re-loaded
                26JUN26 monthly −41.99M, now 3.3 DTE and the lone concentrated chunk, drags a
                fade through D-SMA20 $63,544 back toward the $62,443 floor before opex; the
                de-amplification of the last three notes reversed overnight (aggregate −0.6M →
                −35.1M, spot back below the flip and into the negative-gamma cluster), so the
                structural risk has re-thickened to the one monthly, and the structural
                positive — the 200W floor holding its 22JUN weekly close — is confirmed but
                slow, and sits under a failed reclaim the desk still cannot read for
                positioning
              </span>. Until the tape is restored this note runs as written: the book is flat,
              the scout&rsquo;s price block has re-closed, the macro tail gate is un-fired with
              the 10Y leg eased back to 7bp, the squeeze-cycle is suspended, and the 200W floor
              watch is the one live level — now a tested-and-held weekly-close floor. Price and
              MTF held the floor on the weekly close but rolled the short frames back below
              cloud, the dealer book re-amplified short-gamma and spot crossed back below the
              flip; macro is the same dollar / real-rate headwind with rates a touch easier and
              bond vol firmer, BTC the laggard in a broadly red TradFi tape. The right read for
              the next 24h is{' '}
              <em>floor-confirmed but reclaim-failed — respect the held weekly floor, watch the
              flip re-reclaim vs the D-SMA20 loss into the 26JUN amplifier, fix the tape before
              reading positioning, and do not scout a reclaim that has already been handed
              back</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 — post codex hostile audit
            </span>
            <b>Status:</b> this is the <b>v2</b> note, promoted by STAGE C after the STAGE B
            codex hostile cross-model audit returned{' '}
            <b>PASS-WITH-NOTES — 0 CRITICAL + 0 MAJOR + 4 MINOR</b> (full record at{' '}
            <code>audits/2026-06-23-desk-note.md</code>). Every codex finding was applied in
            place and grep-closure verified across the full EN file before promotion; the
            supplementary ask-deepseek numeric second-audit was adjudicated per runbook §5
            (codex owns the publish gate; GLM is not an auditor). Findings &amp; grep-closure:{' '}
            <b>DN-001</b> (MINOR — over-counted the post-test floor-hold sequence as &ldquo;six
            finalized closes&rdquo;): searched <code>six</code> / <code>Six finalized</code> /{' '}
            <code>six finalized closes</code>; 4 hits before, standardized to <b>five</b>{' '}
            (06-18 → 06-22, the post-breakdown hold), 0 hits after — <b>RESOLVED</b>.{' '}
            <b>DN-002</b> (MINOR — the in-progress 06-29 week was described as &ldquo;opens
            $63,961 / +2.43%&rdquo;, but that is the 00:05Z parquet last-bar read, not a weekly
            open): searched <code>opens </code> and the &ldquo;in-progress week $63,961&rdquo;
            level variants; 6 hits before, reworded to <b>currently reads / reads</b>, 0 hits
            after (only the unrelated &ldquo;re-opens scout&rdquo; / &ldquo;opened the 200W
            reclaim&rdquo; remain) — <b>RESOLVED</b>. <b>DN-003</b> (MINOR — the
            &ldquo;$58k–$64k cluster totals roughly −78M&rdquo; reconstructs only the listed
            major walls, not the full strike profile which is ~−81M to −85M): searched{' '}
            <code>now totals roughly −78M</code>; 1 hit before, qualified to <b>&ldquo;the
            listed major walls from $58k–$64k total roughly −78M&rdquo;</b>, 0 hits after —{' '}
            <b>RESOLVED</b>. <b>DN-004</b> (MINOR — &ldquo;forward of the monthly the strip
            turns positive&rdquo; while immediately listing 3JUL26 at −0.75M): searched{' '}
            <code>turns positive</code>; 1 hit before, reworded to <b>&ldquo;small and mixed —
            3JUL still slightly negative — then mostly positive from 10JUL onward&rdquo;</b>, 0
            hits after — <b>RESOLVED</b>. Adjudicated from the ask-deepseek pass and also fixed
            for internal-consistency: the manifest HY OAS delta (was an implied{' '}
            <code>2.63% → 2.66%</code> +3bp against the table&rsquo;s 0.0bp source daily delta;{' '}
            <code>2.63</code> 1→0, now <b>2.66% (0.0bp)</b>), the manifest DXY tag (was{' '}
            <code>unchanged</code> against the table&rsquo;s −0.02; now <b>−0.02 day</b>), and
            the SM-net rounded components (were <code>13.53k − 50.83k</code> which subtract to
            −37.30k against the displayed −37.29k; now the exact <b>13,532.4 − 50,825.7</b> =
            −37,293.3 → −37.29k) and the outage step (was <code>~7h</code>: 130.6 + 7 = 137.6 ≠
            137.4; now <b>~6.8h</b>, 130.6 + 6.8 = 137.4). The ask-deepseek &ldquo;aggregate GEX
            −35.1M vs expiry-sum −24.82M&rdquo; CRITICAL was <b>rejected on adjudication</b>:
            codex confirmed both the −35.1M spot-referenced aggregate and the by-expiry rows
            against <code>btc_gex.html</code>; a per-expiry decomposition need not sum to the
            spot-referenced net GEX. Overall: <b>post codex hostile audit</b>, all four codex
            MINOR findings RESOLVED (grep hits-after = 0), no CRITICAL or MAJOR raised by the
            gate-owning audit.{' '}
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
            atomic snapshot (2026-06-23 00:08Z) with section-level provenance disclosed in the
            manifest band above;{' '}
            <em>critically, the live derivatives tape was frozen for 137.4h at snapshot time
            (last row 2026-06-17 06:43Z) and the smart-money positioning feed has been dead
            ~10.94 days</em>, so all funding, OI, flow and positioning figures are explicitly
            last-known / stale or non-computable and flagged as such; the macro panel render is
            2026-06-22 22:15Z (~1.9h before snapshot) and its Tier-1 series are stale-4d flagged
            though they printed fresh deltas. Price, MTF, GEX and cross-asset are fresh. This is
            the v2 note, promoted after the STAGE B codex hostile audit. Levels, sizes, and
            conditions are illustrative of the desk&rsquo;s process, not standing
            recommendations. Past correlation, gamma, and positioning patterns do not bind
            future tape. Derivatives carry the risk of total loss and, where leveraged, loss
            exceeding deposited margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The cycle floor passed its weekly-close test — 22JUN closed above $62,443 —
                but the overnight tape handed back the flip reclaim and the dealer book
                re-amplified short-gamma into the 26JUN opex, all read through a dead tape a
                seventh day. Floor-confirmed. Reclaim-failed. Blind.
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
            v2 · 2026-06-23 00:08Z snapshot · post codex hostile audit ·
            sources: live_db.json (FROZEN 137.4h) · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
