import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-20 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-20',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-20' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260620() {
  await requireViewer('/desk/2026-06-20');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-20 · v2</span>
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
              <span className="dn-big">$63,482</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.96%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-20 00:06Z ·{' '}
              <span className="dn-em">
                LIVE-TAPE OUTAGE INTO A THIRD DAY — the OKX monitor has now been
                frozen 65.4h; price/MTF/GEX/macro/cross-asset are fresh, the
                derivatives tape is still dark
              </span>
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · LAST ROW 2026-06-17 06:43Z (t = &ldquo;06-17 14:43&rdquo; BJ)</td>
                  <td className="dn-flag">
                    <b>FROZEN</b> · live_db.json has written no new row since
                    2026-06-17 06:43Z (file mtime confirms); process status is not
                    archived / not verified in this cut — now <b>65.4h stale</b>{' '}
                    vs the 00:06Z snapshot anchor (was 41.4h on the 06-19 note,
                    17.4h on 06-18 — the outage has run another full day). Funding
                    / OI / CVD / basis / retail / taker-flow are LAST-KNOWN at
                    06-17 06:43Z, not current. The SM sub-feed (long_btc /
                    short_btc / net_btc) is frozen even longer — constant since
                    2026-06-12 01:36Z (~190.5h / ~7.9 days); SM net and the SM
                    cut-fraction are <b>NON-COMPUTABLE</b> this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-20 00:01Z scan</td>
                  <td className="dn-flag">
                    fresh (~5 min before anchor) · rolling latest-file artifact,
                    archived verbatim at
                    /opt/desk-note/snapshots/2026-06-20-0006/ · in-progress bars ·
                    scan spot $63,558, 24h +1.04%, 24h H/L $63,645 / $62,237, qVol
                    $7.07B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-20 00:00Z snapshot</td>
                  <td className="dn-flag">
                    fresh · Deribit idx $63,730 ($248 above parquet spot $63,482)
                    · 948 instruments · net GEX −48.6M (net SHORT gamma, but
                    roughly HALF the −111.1M of the 06-19 note as the near-dated
                    negatives unwound) · flip $64,396 (spot below) · today&rsquo;s
                    20JUN26 0.3DTE chunk is +7.78M positive and settles at 08:00Z
                    (≈8h AFTER this snapshot); the dominant chunk is the 26JUN26
                    monthly −49.31M, 6.3 DTE (eased from −55.30M on 06-19, but now
                    ≈101% of the whole aggregate)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-20 00:00Z
                  </td>
                  <td className="dn-flag">fresh · 7d 1h bars · 22 assets · 167 rows · regime NORMAL (mean |r| 0.304, loosened from 0.325 on 06-19)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-19 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.85h render lag · render is fresh but the FRED Tier-1 daily
                    series are UNCHANGED from the 06-19 note (no new business-day
                    print — 06-20 is a Saturday): 10Y 4.49%, TIPS 2.23% (EXTREME
                    RISK-OFF), HY OAS 2.63% (RISK-ON episodic), DXY 100.81 (EXTREME
                    RISK-OFF), Fed net liq $5.849T · MOVE bond vol fetch-failed /
                    unavailable this render (was 70.7) · the Yahoo FX did move:
                    USD/JPY 161.28 (dashboard 1d delta −0.01; +0.92 vs the 160.36 of the 06-19 note, so yen softer vs the prior note)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-20 00:06Z (close $63,482)</td>
                  <td className="dn-flag">
                    fresh kline (exchange OHLC, independent of the frozen live
                    tape) · offsets recomputed vs the parquet last-bar close, which
                    is the freshest available spot while the live tape is frozen ·
                    the displayed ladder uses the 2023→ subset (182 weekly bars),
                    so no W-SMA200 row; the 200W floor is recomputed directly from
                    the full-history glob — 355 weekly W-MON bars (2019→present) —
                    = <b>$62,440</b>, ~$2 above the $62,438 the 06-19 note pinned
                    and ~$210 above the $62,230 the 06-16 / 06-18 notes pinned (a
                    slow weekly SMA, ~$250/wk) · weekly_200sma.json absent this cut
                    but does not block the parquet recompute
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
              <span className="dn-v bear">−7.24% (STALE · 06-17 06:43Z · 65.4h)</span>
              <span className="dn-src">live_db raw funding −0.006608 × 1095 = −7.24% ann (NOT ×100) · LAST-KNOWN at the 06-17 06:43Z freeze, now 65.4h stale, not a current read · last-available ann over the 24h+1m inclusive sampled window ending at the freeze (1,442 rows): mean +0.20%, range −7.24% / +7.21%, 819 / 1,442 rows negative — a balanced, two-sided book at the point the tape died · unchanged from the 06-19 note: it is the same frozen row</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · vs 06-19</span>
              <span className="dn-v">tape frozen — not computable</span>
              <span className="dn-src">the live tape has not written since 06-17 06:43Z, so there is still no current funding to difference against the 06-19 note · last-known print at the freeze was −7.24% ann (shorts paying longs); the leverage gate remains un-assessable a third day running</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC (−0.45%) · STALE window</span>
              <span className="dn-src">live_db oi_btc 102,945 at the 06-17 06:43Z freeze vs the start of a 24h+1m inclusive sampled window (1,442 rows) · the window ENDS at the freeze, NOT into the 00:06Z snapshot — it describes the tape up to 06-17 06:43Z and is 65.4h out of date</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` at the 06-17 06:43Z freeze (was 58.29% at the start of the 24h+1m inclusive sampled window — a +1.18pt long add into the roll-over) · last-known, 65.4h stale</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED DEAD ~190.5h</span>
              <span className="dn-src">long 13.53k − short 50.83k · this triple has been byte-for-byte constant since 2026-06-12 01:36Z (~190.5h / ~7.9 days) — it is a FROZEN value, NOT a current positioning read; carried only to mark the dead feed</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">NON-COMPUTABLE</span>
              <span className="dn-src">SM feed frozen ~7.9 days · |Δ| / prior_net cannot be computed — there is no current SM net to difference · the squeeze-cycle / re-stack framework is blind this cut, a continuation of the 06-16 / 06-18 / 06-19 ON-HOLD</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.1% / 43.04%</span>
              <span className="dn-src">GEX median IV across 948 instruments (00:00Z, fresh) vs 30D close-to-close RV 43.04% off parquet — chain richness only ~+0.06pt, essentially no premium; RV stays elevated (was 42.76% on 06-19, 24.91% on 05-31) — vol is priced almost exactly to realised</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−1.42% (below)</span>
              <span className="dn-src">flip $64,396 (was $64,641 · dropped −$245) · vs parquet spot $63,482 (63,482 / 64,396 − 1 = −1.420%) / GEX file Deribit idx $63,730 (63,730 / 64,396 − 1 = −1.034%) — both references BELOW the flip, tile rounds the spot side to −1.42% · net GEX −48.6M (net SHORT gamma but halved from −111.1M) · the 26JUN26 monthly −49.31M is now ≈101% of the aggregate, today&rsquo;s 20JUN 0DTE +7.78M settles 08:00Z</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The floor held on a close basis and the dealer book
                de-amplified — but the desk is still reading it through a dead
                tape, a third day running
              </span>. The $62,440 cycle floor (full-history W-SMA200, crept ~$2
              from the 06-19 pin) that price was sitting on 24h ago has held: the
              06-18 close $62,924 and the{' '}
              <span className="dn-tag bull">06-19 close $63,513 (a +$589 green
              day)</span> both printed above it, with spot now{' '}
              <span className="dn-tag bull">$63,482 (parquet last bar 00:06Z),
              +1.67% above the floor</span> — a wider buffer than the 06-19
              note&rsquo;s +0.78%, though the 06-19 low{' '}
              <span className="dn-tag bear">$62,237 @ 03:15Z</span> wicked
              ~0.33% below it intraday for a second day before recovering. The
              dealer book stepped back off the floor with it: aggregate GEX went{' '}
              <span className="dn-tag bull">−111.1M → −48.6M</span> (short gamma
              roughly halved, back near the −47.8M of 06-18) as the near-dated
              negatives unwound — today&rsquo;s{' '}
              <span className="dn-tag bull">20JUN 0DTE is +7.78M positive</span>{' '}
              (vs the −42.35M 19JUN chunk yesterday), the $63k put wall spot was
              pinned on collapsed out of the top ten, and the{' '}
              <span className="dn-tag bear">26JUN26 monthly −49.31M (6.3 DTE)</span>{' '}
              is now ≈101% of the entire aggregate — the short gamma has
              concentrated into the one monthly amplifier. Spot sits{' '}
              <span className="dn-tag bear">−1.42% below the 0-γ flip $64,396</span>{' '}
              (was −2.66% on 06-19 — closer, as spot rose and the flip dropped
              $245). MTF holds{' '}
              <span className="dn-tag bear">multi-TF bearish resonance (1 bull /
              6 bear / 3 neutral, &ldquo;sell rallies&rdquo;)</span> — softened
              from 06-19&rsquo;s 8-bear stack, with the short frames lifting to
              neutral, but the regime flipped to{' '}
              <span className="dn-tag bear">5/9 momentum / trend-continuation,
              which reads the bounce as a rally to sell</span>.{' '}
              <span className="dn-em">
                The operational fact of the day is unchanged and still binding:
                the OKX monitor has now been frozen 65.4h (last row 2026-06-17
                06:43Z), so funding, OI, CVD, basis and retail are last-known and
                stale, and the SM positioning book has been dead ~7.9 days — SM
                net and the cut-fraction are non-computable. Crucially, the desk
                cannot see HOW the floor-hold bounce was absorbed: whether shorts
                covered, whether SM net bled, whether the bid was fresh or
                rotation. The bounce read is on price and gamma alone.
              </span>{' '}
              Conviction stays capped: the trade book is flat and defensive, the
              scout stays doubly blocked (bearish MTF + blind tape), and the one
              live decision is whether the floor-hold converts into a flip /
              D-SMA20 reclaim the desk still cannot scout on a blind tape, or
              whether the 26JUN amplifier drags a fresh floor test before opex —
              judged on price and gamma alone until the live tape is restored.
            </p>

            <p>
              BTC prints <span className="dn-tag">$63,482</span> at the parquet
              last bar (00:06Z),{' '}
              <span className="dn-tag bull">+0.96%</span> on 24h (vs $62,875 one
              day prior; the MTF scan reads +1.04% on its own 00:01Z window — the
              spread is the reference window, not a data conflict), inside a{' '}
              <span className="dn-tag">$63,645 / $62,237</span> 24h range (high @
              2026-06-19 23:56Z, low @ 2026-06-19 03:15Z). The Deribit index
              reads $63,730 at 00:00Z and the 06-20 in-progress session has been
              flat — so the freshest spot is well-corroborated across three
              independent fresh sources (parquet kline $63,482, GEX Deribit index
              $63,730, MTF scan $63,558), even though the live_db tape that
              normally supplies it is frozen at $65,616 (06-17 06:43Z, 65.4h
              stale).{' '}
              <span className="dn-signal">The structural read has moved from
              floor test to floor hold-and-bounce</span>: the 06-15 weekly close
              $66,286 resolved the 200W reclaim the 06-16 note led with, three
              red daily closes (06-16 $65,645, 06-17 $64,473, 06-18 $62,924) gave
              the breakout fully back onto the floor, and now two closes have held
              above it — 06-18 $62,924, 06-19 $63,513, 06-20 in-progress $63,482,
              all above the recomputed $62,440 floor. Both the 06-18 low $62,232
              and the 06-19 low $62,237 wicked below the floor intraday and both
              closes recovered.{' '}
              <span className="dn-em">
                This is the floor defended on a close basis two days running,
                inside a net-short-gamma book that has stepped back from the floor
                as the near-dated amplifiers unwound. Whether the hold converts to
                a sustained reclaim or fails into the 26JUN monthly depends on
                flow the desk currently cannot see.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · LIVE TAPE FROZEN 65.4h (third day) · SM book dead ~7.9 days · funding/OI/flow last-known stale · the desk cannot see how the floor-hold bounce was absorbed</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important source of this note — the live
                derivatives tape — is still down, a third day running
              </span>. The OKX monitor has appended no row to live_db.json since{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> (t =
              &ldquo;06-17 14:43&rdquo; BJ; the file mtime confirms the write
              stopped there; the process status is not archived or verified in
              this cut, so the note asserts the missing tape, not a live/hung
              process). That is now <span className="dn-tag bear">65.4h of
              missing tape</span> against the 00:06Z snapshot anchor — the 06-18
              note flagged it at 17.4h, the 06-19 note at 41.4h, and the outage
              has run another full day without a write. Everything the live tape
              carries — funding, open interest, spot/futures CVD, perp basis,
              retail long%, taker-net, big-print flow, aggressor skew — is
              therefore <span className="dn-em">last-known at 06-17 06:43Z and not
              current</span>. The smart-money positioning triple (long_btc /
              short_btc / net_btc) has been byte-for-byte constant —{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> —
              since <span className="dn-tag bear">2026-06-12 01:36Z</span>,
              ~190.5h (~7.9 days). The 06-16 note flagged this dead feed at
              ~94.5h and put the squeeze-cycle ON HOLD; the 06-18 note carried it
              at ~142h, the 06-19 note at ~166.5h; today it is ~190.5h and still
              dead.{' '}
              <span className="dn-em">
                SM net is non-computable as a current read, and the SM cut
                fraction (|Δ| / prior_net) cannot be formed — there is no current
                SM net to difference. Any positioning claim in this note is
                explicitly historical, not live.
              </span>
            </p>

            <p>
              For completeness, the <em>last-available</em> tape readings — all
              pinned to the 06-17 06:43Z freeze and now 65.4h out of date, and
              byte-for-byte the same readings the 06-19 note carried because it is
              the same frozen row — are: funding{' '}
              <span className="dn-tag bear">−7.24% ann</span> (raw −0.006608 ×
              1095; shorts paying longs at the freeze), with the last-available
              path balanced two-sided over the 24h+1m inclusive sampled window
              (1,442 rows: mean <span className="dn-tag">+0.20% ann</span>, range{' '}
              <span className="dn-tag">−7.24% / +7.21%</span>, 819 / 1,442 rows
              negative); OI <span className="dn-tag bear">102,945 BTC, −468 over
              the trailing 24h+1m window (−0.45%)</span>; retail{' '}
              <span className="dn-tag">mkt_long_pct 59.47%</span> (a +1.18pt long
              add over that same window); perp basis{' '}
              <span className="dn-tag bear">−$57.43 discount</span> to spot
              (window mean −$58.62, range −$146.17 / +$67.04).{' '}
              <span className="dn-em">
                Read this as a near-three-day-old fingerprint, not a signal: a
                two-sided funding book, OI bleeding, retail adding longs into the
                first leg of weakness. None of it can be carried forward to the
                00:06Z snapshot — and crucially it predates BOTH the 06-18 selloff
                that put price on the floor AND the 06-19 bounce that held it, so
                it says nothing about how positioning absorbed either move. The
                desk treats the positioning dimension as unknown, and the
                floor-hold bounce as positioning-unconfirmed.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure <span className="dn-roman">II · price/MTF FRESH · multi-TF bearish resonance softened to 1 bull / 6 bear / 3 neutral · regime flipped to 5/9 momentum (sell rallies) · spot below every displayed MA, 200W floor $62,440 held on close twice (+1.67%)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map is fresh, still reads bearish, but the short frames
                lifted on the bounce
              </span> — the one dimension, with the dealer map, the desk can still
              trust today. The 00:01Z scan tags{' '}
              <span className="dn-tag bear">1 bull / 6 bear / 3 neutral across 10
              frames</span>, net read <em>multi-TF bearish resonance, sell
              rallies</em> — softened from the 06-19 scan&rsquo;s 1 bull / 8 bear
              / 1 neutral, but inside a regime that has flipped from 6/9
              cycle-reversal (bounce-favoured) to a{' '}
              <span className="dn-tag bear">5/9 momentum regime (JT≥0,
              trend-continuation favoured)</span> — i.e. the regime now reads the
              bounce as a counter-trend rally to sell, not a reversal to fade. The
              short frames lifted hard off the floor: 15m and 30m both flipped to{' '}
              <span className="dn-tag">neutral, above cloud, RSI 71.5 / 65.7</span>{' '}
              (15m TD8 Sell 8 → 9?), with the 1h still 偏空 but RSI back to 58.9
              and an underwater golden cross 24b. The only constructive notes are
              the relief cluster: a{' '}
              <span className="dn-tag bull">bottom-divergence pair on 30m / 1h</span>{' '}
              and a 1d water-down golden cross 7b. But the mid and long frames are
              a uniform bearish stack below cloud — 4h / 8h / 12h / 1d / 3d all
              偏空, with 4h RSI 46.5 and a water-up death cross 20b, 8h −218 MACDh
              below water, 1d RSI 37.6 below cloud 19b.{' '}
              <span className="dn-em">
                Straight read: the bounce off the floor pushed the short frames
                from oversold to hot (15m RSI 71.5) but did not touch the bearish
                mid/long structure, which is still below cloud across every frame
                from 4h to 3d. The regime flip to trend-continuation is the tell —
                a hot short-frame rally into a bearish mid/long stack is precisely
                the &ldquo;sell rallies&rdquo; setup, not a confirmed turn. The 1M
                is the lone bull frame; the 1w is range-bound.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,555</td><td className="num bear">71.5</td><td className="bull">golden (water-up) 7b</td><td className="bull">above ↓63.0k 45b</td><td>Sell 8 → 9?</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">63,553</td><td className="num">65.7</td><td className="bull">golden (water-dn) 26b</td><td className="bull">above ↓63.3k 1b</td><td>Sell 8 → 9?</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">63,553</td><td className="num">58.9</td><td className="bull">golden (water-dn) 24b</td><td className="neut">in cloud 63.4k–64.3k 1b</td><td>Sell 3</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">63,565</td><td className="num bear">46.5</td><td className="bear">death (water-up) 20b</td><td className="bear">below ↑64.0k 2b</td><td>Sell 4</td><td>BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">63,561</td><td className="num bear">45.5</td><td className="bear">death (water-up) 6b</td><td className="neut">in cloud 62.8k–68.6k 1b</td><td>Sell 2</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">63,558</td><td className="num bear">42.7</td><td className="neut">—</td><td className="bear">below ↑65.9k 57b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">63,543</td><td className="num bear">37.6</td><td className="bull">golden (water-dn) 7b</td><td className="bear">below ↑74.7k 19b</td><td>Buy 3</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">63,543</td><td className="num bear">37.8</td><td className="bear">death (water-up) 8b</td><td className="bear">below ↑74.1k 6b</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,543</td><td className="num bear">35.7</td><td className="neut">—</td><td className="bear">below ↑100.3k 20b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">63,535</td><td className="num">42.7</td><td className="neut">—</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (rolling latest file;
                    archived verbatim at
                    /opt/desk-note/snapshots/2026-06-20-0006/). Net read{' '}
                    <em>multi-TF bearish resonance, sell rallies (1 bull / 6 bear
                    / 3 neutral)</em>; regime <em>5/9 momentum (JT≥0,
                    trend-continuation favoured)</em>; reversal divergences{' '}
                    <em>top div 15m / 4h, bottom div 30m / 1h</em>. Scan spot
                    $63,558, 24h +1.04%, 24h H/L $63,645 / $62,237, qVol $7.07B.
                    Closes are in-progress bars; treat every value as provisional
                    until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is the same one-directional map as 06-19, now with the
              floor a touch further below spot after the bounce: $63,482 sits{' '}
              <span className="dn-em">below every displayed line on the
              ladder</span>, with no positive offset on any displayed MA — the
              lone MA below spot is the full-history W-SMA200 200W floor $62,440
              (~+1.67% above it, up from +0.78% on 06-19). The single near line
              overhead is{' '}
              <span className="dn-tag bear">D-SMA20 $64,054 (−0.89%)</span> — now
              within 1% as the bounce closed the gap — followed by{' '}
              <span className="dn-tag bear">D-EMA20 $65,610 (−3.24%)</span> and the
              cycle-proxy{' '}
              <span className="dn-tag bear">W-EMA200 $67,578 (−6.06%)</span>. The
              mid-ladder is a deep wall:{' '}
              <span className="dn-tag bear">D-EMA50 $69,472 (−8.62%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $71,479 (−11.19%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $72,367 (−12.28%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $72,397 (−12.31%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $72,409 (−12.33%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $72,413 (−12.33%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,207 (−14.45%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $74,470 (−14.75%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $75,246 (−15.63%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $75,450 (−15.86%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $76,873 (−17.42%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $77,954 (−18.57%)</span>. Far
              above and disused: W-EMA100 $80,958 (−21.59%), W-EMA50 $82,641
              (−23.18%), W-SMA100 $88,521 (−28.29%), W-SMA50 $90,978 (−30.22%).
              The structural near-set is narrow and one-directional: D-SMA20 /
              D-EMA20 / W-EMA200 overhead from −0.89% to −6.06%, and the
              full-history 200W floor $62,440 only ~+1.67% below — a{' '}
              <span className="dn-tag">~$1.6k</span> band between the floor and the
              first reclaim line (D-SMA20 $64,054), with spot now only −0.89% from
              that first line after the bounce.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-20 00:06Z (close
                $63,481.80); offsets computed against that same close, which is the
                freshest available spot while the live tape is frozen. Displayed MA
                levels are $-rounded; offsets computed from exact series values.
                The displayed ladder uses the 2023→ subset (182 weekly bars), so
                W-SMA200 is not a matrix row; but the 200W floor IS computable from
                the full-history glob — 355 weekly W-MON bars (2019→present) give
                W-SMA200 $62,440. That is ~$2 above the $62,438 the 06-19 note
                pinned and ~$210 above the $62,230 the 06-16 / 06-18 notes pinned:
                the floor is a slow weekly SMA (~$250/wk) and creeps up as older
                low bars roll off the 200-week window, so the recompute is an
                honest re-pin, not a conflict. The percentile and last-event remain
                unsourced (weekly_200sma.json absent) and are not fabricated. Daily
                closes: 06-13 $64,418, 06-14 $65,702, 06-15 $66,286, 06-16
                $65,645, 06-17 $64,473, 06-18 $62,924, 06-19 $63,513, 06-20
                (in-progress) $63,482 — the 06-15 high, three red closes onto the
                floor, then two closes holding above it.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book de-amplified to net-SHORT-gamma −48.6M (≈half 06-19) · spot −1.42% below flip $64,396 · near-dated negatives unwound (20JUN 0DTE +7.78M positive, $63k wall collapsed) · 26JUN26 monthly −49.31M now ≈101% of the aggregate (6.3 DTE) · heaviest put wall down at $60k</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book is still net-short-gamma but the short gamma
                halved and stepped back off the floor, concentrating into the one
                26JUN monthly amplifier
              </span>. Aggregate GEX is <span className="dn-tag bear">−48.6M /
              1%</span> (was −111.1M on 06-19 — short gamma roughly halved, back
              near the −47.8M of 06-18, as the down-move&rsquo;s near-dated
              amplifiers unwound) and the 0-γ flip is{' '}
              <span className="dn-tag">$64,396</span> (dropped −$245 from $64,641),
              with spot <span className="dn-tag bear">−1.42% below</span> on
              spot-denominated math (63,482 / 64,396 − 1 = −1.420%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; off its Deribit-index
              $63,730 reads <span className="dn-tag bear">−1.03%</span> (63,730 /
              64,396 − 1 = −1.034%) — <span className="dn-em">both references
              below the flip</span>, the book still amplifying from here, but the
              distance has halved as spot rose and the flip dropped. The wall map
              has thinned right around spot and shifted its weight lower:{' '}
              <span className="dn-tag bear">$60k −27.43M</span> (now the heaviest
              wall, the heaviest put OI on the board at 19,939, a full $3.5k below
              spot),{' '}
              <span className="dn-tag bear">$62k −18.11M</span> (right at the
              $62,440 floor, Put OI 7,578),{' '}
              <span className="dn-tag bull">$80k +9.90M</span> (heaviest positive,
              Call OI 24,648),{' '}
              <span className="dn-tag bear">$61k −9.40M</span>,{' '}
              <span className="dn-tag bull">$67k +8.68M</span> (Call OI 4,077),{' '}
              <span className="dn-tag bear">$55k −7.13M</span>,{' '}
              <span className="dn-tag bear">$58k −6.69M</span>,{' '}
              <span className="dn-tag bear">$64k −6.08M</span> (the near overhead
              wall, just under the flip),{' '}
              <span className="dn-tag bull">$70k +5.83M</span>,{' '}
              <span className="dn-tag bear">$50k −4.99M</span> lower crash-put
              residual.{' '}
              <span className="dn-em">
                The $63k put wall spot was pinned on yesterday (−40.18M on 06-19,
                the heaviest on the board) has collapsed out of the top ten
                entirely — the single biggest change in the map. Spot $63,482 now
                sits between a thinned $62k (−18.11M) below and a light $64k
                (−6.08M) above, with the heavy negative gamma pushed down to $60k
                and below (crash-put residual territory). The map is far less
                downside-amplifying right at spot than the 06-19 book; the
                concentrated short gamma is now the 26JUN monthly and the deep
                $60k wall, not the level spot is trading.
              </span>
            </p>

            <p>
              The expiry strip is where the de-amplification shows cleanly. The
              dominant single chunk is the{' '}
              <span className="dn-tag bear">26JUN26 monthly −49.31M (6.3 DTE, Call
              OI 88,938 / Put OI 75,152)</span> — eased from the −55.30M the 06-19
              note carried, but now <span className="dn-em">≈101% of the entire
              −48.6M aggregate</span>: the rest of the book roughly nets to flat,
              so the short gamma has concentrated almost entirely into the one
              monthly opex. The near strip has flipped constructive at the front:{' '}
              <span className="dn-tag bull">20JUN26 0.3 +7.78M</span>{' '}
              (today&rsquo;s 0DTE, settles 08:00Z ≈8h AFTER this snapshot — and
              positive, vs the −42.35M 19JUN chunk that settled benign yesterday),
              then <span className="dn-tag bear">21JUN26 1.3 −6.29M</span>,{' '}
              <span className="dn-tag bear">22JUN26 2.3 −3.53M</span>,{' '}
              <span className="dn-tag bear">23JUN26 3.3 −2.80M</span>,{' '}
              <span className="dn-tag bear">3JUL26 13.3 −2.15M</span>,{' '}
              <span className="dn-tag bear">10JUL26 20.3 −0.72M</span>. The
              positive offsets are far-dated:{' '}
              <span className="dn-tag bull">31JUL26 41.3 +15.01M</span>,{' '}
              <span className="dn-tag bull">25DEC26 188.3 +3.27M</span>,{' '}
              <span className="dn-tag bull">28AUG26 69.3 +2.70M</span>,{' '}
              <span className="dn-tag bull">25SEP26 97.3 +0.84M</span>,{' '}
              <span className="dn-tag bull">26MAR27 279.3 +0.73M</span>. The listed
              strip nets to roughly −34.5M against the −48.6M headline aggregate;
              the ~−14.1M gap is a difference of basis, not a missing-expiry
              remainder — the headline is surface-grid GEX read at the nearest
              spot/current-IV grid point, while the by-expiry strip is the
              exact-spot profile grouped by expiry, so the two are not
              algebraically identical unless recomputed on the same basis. Either
              way{' '}
              <span className="dn-em">
                the near calendar 20JUN–23JUN is now front-loaded POSITIVE
                (today&rsquo;s 0DTE +7.78M) before turning lightly negative, the
                26JUN monthly is the one concentrated amplifier left, and there is
                no near-dated negative chunk feeding it the way 19JUN fed the book
                yesterday — the down-leg&rsquo;s near-dated negative amplifiers have
                unwound pre-settle (today&rsquo;s 0DTE settles 08:00Z after this
                snapshot, outcome not yet observed), and the single remaining
                structural risk is the 26JUN monthly six
                days out.
              </span>{' '}
              IV median across 948 instruments is{' '}
              <span className="dn-tag">43.1%</span> against 30D close-to-close RV{' '}
              <span className="dn-tag">43.04%</span> — chain richness only{' '}
              <span className="dn-tag">~+0.06pt</span>, essentially zero premium; a
              chain-median across N instruments, <span className="dn-em">not</span>{' '}
              a tradable spread, with expiry-/strike-level vega, skew and term
              structure not loaded — the vol read stays framework-only. RV
              methodology: 30D close-to-close, logret.std × √365 × 100 on the last
              30 daily log returns (= 31 consecutive daily closes) anchored to
              parquet last bar 2026-06-20 00:06Z; the 29-return read is 43.16%. RV
              is essentially flat vs the 42.76% of 06-19 and remains far above the
              24.91% of 05-31 — vol is priced almost exactly to realised, with the
              43.1% IV median carrying no meaningful premium.
            </p>

            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · Tier-1 UNCHANGED from 06-19 (weekend, no new business-day FRED print) — 10Y 4.49%, TIPS 2.23% EXTREME RISK-OFF, HY OAS 2.63% RISK-ON, DXY 100.81 EXTREME RISK-OFF · MOVE fetch-failed this render · USD/JPY softer to 161.28 · BTC lag to NQ narrowed to −2.73pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro panel render is fresh but the Tier-1 FRED daily series
                are unchanged from the 06-19 note — 06-20 is a Saturday, no new
                business-day print has landed
              </span>. Dashboard render is 2026-06-19 22:15Z, ~1.85h before the
              snapshot, but every Tier-1 daily level and day-delta matches the
              06-19 read, so the macro tape is carried forward, not re-moved. US
              10Y nominal <span className="dn-tag bear">4.49% (+6.0bp)</span>,
              regime z <span className="dn-tag bear">+1.63</span> — tight regime,
              RISK-OFF. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.23% (+9.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.68</span> — EXTREME RISK-OFF, the
              tightest line on the panel. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.23% (+2.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag bull">2.25% (−1.0bp)</span> — inflation
              expectations flat. HY OAS{' '}
              <span className="dn-tag bull">2.63% (−8.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.78</span> — credit loose, a RISK-ON
              episodic, the panel&rsquo;s one easing line. MOVE bond vol{' '}
              <span className="dn-tag stale">fetch-failed / unavailable</span> this
              render (was 70.7 on 06-19 — a source gap, not a move). The dollar
              stays firm: DXY{' '}
              <span className="dn-tag bear">100.81 (+0.72 day)</span>, regime z{' '}
              <span className="dn-tag bear">+2.47</span> — EXTREME RISK-OFF, above
              100. Fed net liquidity{' '}
              <span className="dn-tag bear">$5.849T (−0.038T)</span>, regime z{' '}
              <span className="dn-tag">+0.05</span> (a flat standing level) but
              episodic z <span className="dn-tag bear">−2.42</span> — the
              |episodic z| &gt; 1.5 day-change surprise the dashboard flags, a
              distinct metric from the neutral regime read in the table. The Yahoo
              FX did update on the day: USD/JPY{' '}
              <span className="dn-tag bear">161.28</span> (dashboard 1d delta −0.01;
              +0.92 vs the 160.36 of the 06-19 note, so yen softer vs the prior
              note), regime z +1.48, episodic z +1.78; US-JP 10Y spread{' '}
              <span className="dn-tag bear">1.84% (+6.0bp)</span>; USD/CNY{' '}
              <span className="dn-tag">6.7681</span>.{' '}
              <span className="dn-em">
                Net: the macro backdrop is materially the same headwind as 06-19 —
                real rates and the dollar at EXTREME RISK-OFF, Fed liquidity
                drained, credit the one offset — read as carried-forward, not
                re-confirmed, because no fresh business-day print exists. The
                re-grow gates: HY OAS gate 2.78% is 15bp away (at 2.63%, credit
                eased), but the 10Y gate 4.53% is only 4bp from firing (at 4.49%).
                The reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE at
                4.49%. The dollar / real-rate firming remains a real macro headwind
                layered onto the endogenous read, though credit and the gates have
                not flipped the tail thesis.
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
                <tr><td>US 10Y nominal</td><td className="num">4.49%</td><td className="num bear">+6.0bp</td><td className="num bear">+1.63</td><td className="bear">tight · RISK-OFF</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.23%</td><td className="num bear">+9.0bp</td><td className="num bear">+2.68</td><td className="bear">tightest line · EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.23%</td><td className="num">+2.0bp</td><td className="num">−0.03</td><td className="neut">flat</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.25%</td><td className="num bull">−1.0bp</td><td className="num">−1.37</td><td className="neut">flat / soft</td></tr>
                <tr><td>HY OAS</td><td className="num">2.63%</td><td className="num bull">−8.0bp</td><td className="num bull">−1.78</td><td className="bull">loose · risk-on, tightened spread</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.505</td><td className="num">0.00</td><td className="num">+0.24</td><td className="stale">weekly</td></tr>
                <tr><td>MOVE bond vol</td><td className="num stale">unavailable</td><td className="num stale">fetch failed</td><td className="num stale">—</td><td className="stale">source gap this render (was 70.7)</td></tr>
                <tr><td>DXY</td><td className="num">100.81</td><td className="num bear">+0.72</td><td className="num bear">+2.47</td><td className="bear">EXTREME RISK-OFF · above 100</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.849T</td><td className="num bear">−0.038T</td><td className="num">+0.05</td><td className="bear">drained on the week</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.28</td><td className="num bear">−0.01</td><td className="num bear">+1.48</td><td className="bear">yen softer vs 06-19 note (+0.92 vs 160.36); 1d delta −0.01</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.84%</td><td className="num bear">+6.0bp</td><td className="num bull">−1.03</td><td className="bear">widened</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7681</td><td className="num">+0.01</td><td className="num bull">−1.66</td><td className="neut">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.304</span> — loosened
              from the 0.325 of 06-19 but still in the NORMAL band, and{' '}
              <span className="dn-signal">BTC stays coupled to the TradFi risk
              complex</span>. BTC&rsquo;s top ties remain the equity /
              precious-metal cluster: SP500{' '}
              <span className="dn-tag">+0.550</span>, NQ{' '}
              <span className="dn-tag">+0.491</span>, NVDA{' '}
              <span className="dn-tag">+0.459</span>, GOLD{' '}
              <span className="dn-tag">+0.448</span>, SILVER{' '}
              <span className="dn-tag">+0.425</span>, EUR{' '}
              <span className="dn-tag">+0.411</span>, COPPER{' '}
              <span className="dn-tag">+0.387</span>, MSFT{' '}
              <span className="dn-tag">+0.346</span>, URNM{' '}
              <span className="dn-tag">+0.319</span>, with the energy complex
              inverse (CL <span className="dn-tag">−0.219</span>, BRENT{' '}
              <span className="dn-tag">−0.236</span>, NGAS{' '}
              <span className="dn-tag">−0.308</span>) and JPY{' '}
              <span className="dn-tag">−0.296</span>. 7d performance has BTC
              roughly flat against a still-firm risk complex:{' '}
              <span className="dn-tag bear">BTC −0.08%</span>, NQ{' '}
              <span className="dn-tag bull">+2.65%</span>, SP500{' '}
              <span className="dn-tag bull">+0.85%</span>, JP225{' '}
              <span className="dn-tag bull">+6.85%</span>, NVDA{' '}
              <span className="dn-tag bull">+1.80%</span>, MSFT{' '}
              <span className="dn-tag bear">−2.23%</span>, TSLA{' '}
              <span className="dn-tag bear">−1.05%</span>; metals soft (GOLD{' '}
              <span className="dn-tag bear">−1.41%</span>, SILVER{' '}
              <span className="dn-tag bear">−4.85%</span>, PLAT{' '}
              <span className="dn-tag bear">−2.29%</span>, URNM{' '}
              <span className="dn-tag bull">+7.31%</span>); energy crashed again
              (CL <span className="dn-tag bear">−6.35%</span>, BRENT{' '}
              <span className="dn-tag bear">−5.24%</span>, NGAS{' '}
              <span className="dn-tag bull">+2.12%</span>).{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d return −0.08% vs NQ +2.65% is a lag of −2.73pt (vs
                −3.88pt on 06-19) — the lag narrowed not because BTC outperformed
                but because BTC stopped falling (the floor-hold bounce flattened
                the 7d return) while NQ kept rising. The endogenous-to-crypto read
                holds: the downside pressure was the dealer-gamma /
                reclaim-handed-back / floor-test structure, now partly relieved as
                the book de-amplified — though the dollar and real-rate firming
                stays a genuine macro headwind on top of it.
              </span>{' '}
              JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag — do not
              lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book <span className="dn-roman">V · book FLAT · 200W floor held on close twice (spot +1.67%, wicked intraday again) · scout still doubly blocked (bearish MTF + blind tape), even with the floor hold + de-amplified book · macro tail gate un-fired (10Y 4bp away) · squeeze-cycle ON HOLD (SM dead ~7.9 days)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — the floor held and the dealer
                book de-amplified, but the binding constraint is still data
                integrity, and the bounce is positioning-unconfirmed
              </span>. The 06-19 scout was already stood down and un-assessable;
              today the floor has held on a close basis twice, the dealer book has
              halved its short gamma off the floor, and the MTF short frames have
              lifted — every one of those is constructive. But the scout still
              cannot be taken: the net MTF read is still bearish resonance / sell
              rallies (and the regime now reads the bounce as a rally to sell),
              price is still below the flip and every displayed MA, and —
              decisively — the positioning legs (SM short bleed, funding posture,
              cover-flow confirmation) all require a live tape, and there is none
              for a third day. A scout long on a positioning-blind tape, into a
              still-net-short-gamma book below the flip, on a bounce the desk
              cannot confirm was driven by covering, is not a trade. No new short
              either: the dealer book just de-amplified, today&rsquo;s 0DTE is
              positive, the heaviest walls dropped to $60k and below, and shorting
              a floor-hold bounce on stale flow with the tape blind is a poor
              entry. The trade book today is: no shorts, no scout, no fresh hedge —
              fix the tape AND get a price decision (flip reclaimed, or floor lost
              on a weekly close into the 26JUN monthly) before re-arming.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch — held on close twice: spot $63,482 now +1.67% above the recomputed $62,440 floor, both the 06-18 and 06-19 lows wicked through intraday and both closes recovered</span>
              <div className="dn-trade-name">
                200W cycle floor watch — the floor test the 06-19 note flagged has held on a close basis twice; floor $62,440 = full-history W-SMA200 (355 weekly bars, ~$2 above the 06-19 pin), spot +1.67% above, intraday wicks below on both 06-18 and 06-19
              </div>
              <div className="dn-thesis">
                The 06-19 note carried the floor as a live test with spot only
                +0.78% above and an intraday wick already through. Two daily closes
                have since held it: 06-18 $62,924, 06-19 $63,513 (a +$589 green
                day), 06-20 in-progress $63,482 — all above the $62,440 floor, with
                spot now +1.67% above it. Both the 06-18 low $62,232 and the 06-19
                low $62,237 wicked ~0.3% / ~0.33% below the floor intraday and both
                closes recovered — the floor is being defended on a close basis,
                not lost. The dealer map stepped back with it: the $63k put wall
                spot was pinned on collapsed out of the top ten, the aggregate
                short gamma halved to −48.6M, and the heaviest negative gamma
                pushed down to $60k. <span className="dn-em">This is the floor
                holding, not breaking</span> — but the weekly close is what
                settles it (W-SMA200 is a weekly-close framework, and this week
                closes 22JUN), and the desk cannot confirm the flow that would
                distinguish a defended floor from a lower-high pause, because the
                live tape is down.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor</span><span className="dn-lvl-v">$62,440 = full-history W-SMA200, recomputed this cut from the 2019→ parquet glob (355 weekly W-MON bars); ~$2 above the $62,438 06-19 pin and ~$210 above the $62,230 06-16 / 06-18 pin (slow weekly SMA crept up) · weekly_200sma.json absent so percentile/last-event stay unsourced, not fabricated</span></div>
                <div><span className="dn-lvl-k">spot vs floor</span><span className="dn-lvl-v bull">$63,482 +1.67% above on a close basis (was +0.78% on 06-19) · 06-18 low $62,232 and 06-19 low $62,237 both wicked below intraday — held on both closes</span></div>
                <div><span className="dn-lvl-k">escalation</span><span className="dn-lvl-v bear">a sustained weekly close &lt; $62,440 breaks the 200W floor (this week closes 22JUN) — a daily close below is an early warning, an intraday wick (printed twice) is not the break — separate reassessment, the reclaim thesis is dead and the down-leg resumes into the 26JUN amplifier</span></div>
                <div><span className="dn-lvl-k">reclaim side</span><span className="dn-lvl-v bull">a 1h/daily reclaim of D-SMA20 $64,054 then the flip $64,396 would confirm the floor-hold bounce structurally — but it is NOT a scout trigger on a blind tape (see scout)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework, not a trade.</b> The floor watch is the single
                load-bearing live level while everything else is stale (live tape)
                or framework-only. It has flipped from a live test (06-19) to a
                two-close hold, with the dealer map stepping back — both
                constructive on price and gamma alone. No position is taken on the
                watch: it sets the escalation level (weekly close &lt; $62,440) and
                the reclaim level (flip $64,396), and the desk will not pre-position
                long into a bounce it cannot confirm or short into a floor that is
                holding, on a blind tape.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STILL DOUBLY BLOCKED · bearish MTF resonance (regime now sell-rallies) + positioning tape blind, despite the floor hold + de-amplified book</span>
              <div className="dn-trade-name">
                Cover-bounce scout — still stood down (MTF bearish resonance, regime flipped to sell-rallies) AND un-assessable (SM / funding / flow legs blind on a frozen tape), even with the floor held twice and the dealer book de-amplified
              </div>
              <div className="dn-thesis">
                The 06-19 scout was stood down on a bearish MTF and a blind tape.
                Today the constructive case is stronger — the floor held on a close
                basis twice, the dealer book halved its short gamma off the floor,
                today&rsquo;s 0DTE is positive, and the short MTF frames lifted to
                neutral with bottom divergences on 30m / 1h. But the scout still
                cannot be taken on three counts. (1) The net MTF read is still
                bearish resonance / sell rallies, and the regime flipped from
                cycle-reversal (bounce-favoured) to 5/9 momentum
                (trend-continuation) — which reads the hot short-frame bounce (15m
                RSI 71.5) as a counter-trend rally to sell, not a reversal to buy.
                (2) Price is still −1.42% below the flip $64,396 and below every
                displayed MA, including D-SMA20 $64,054 only −0.89% overhead — a
                reclaim has not printed. (3) Decisively, the positioning legs (SM
                short bleed, funding posture, cover-flow confirmation) all require a
                live tape, and there is none — the desk cannot see whether the
                floor-hold bounce was driven by short covering or thin
                drift.{' '}
                <span className="dn-em">A scout long on a positioning-blind tape,
                into a still-net-short-gamma book below the flip, on a bounce the
                desk cannot confirm was covered, against a sell-rallies regime, is
                not a trade — a relief print at the floor is precisely where a
                positioning-blind desk gets run over if the bounce fails.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">stood down · no entry · re-evaluate only after the live tape is restored</span></div>
                <div><span className="dn-lvl-k">technical pre-condition</span><span className="dn-lvl-v">1h close &gt; flip $64,396 / D-SMA20 $64,054 reclaimed AND MTF resonance off bearish — none true (the floor hold + de-amplified book are constructive but the regime reads the bounce as a sell-rally, not a reversal)</span></div>
                <div><span className="dn-lvl-k">data pre-condition</span><span className="dn-lvl-v bear">live tape restored (currently 65.4h frozen) AND SM feed live (currently dead ~7.9 days) — both must hold before any positioning leg can be read</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> no scout entry without a live positioning tape.
                Even the floor hold and the de-amplified dealer book do not trigger
                a scout while the SM / funding / flow legs are blind and price sits
                below the flip under a sell-rallies regime — the desk does not size
                into a cover-bounce it cannot see being covered. The scout is doubly
                blocked: technically (bearish MTF resonance, below flip, sell-rally
                regime) and operationally (tape down).
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — 10Y leg still only 4bp from firing (4.49% vs 4.53% gate), HY OAS leg 15bp away (2.63% vs 2.78%) · macro unchanged on the weekend</span>
              <div className="dn-trade-name">
                Downside put-spread — re-grow gate un-fired, 10Y leg 4bp from the gate; no hedge added (macro carried forward unchanged on a Saturday: rates/dollar firm, credit eased)
              </div>
              <div className="dn-thesis">
                The macro re-grow gate the lineage carries — HY OAS &gt; 2.78% OR
                10Y &gt; 4.53% as the condition to re-grow a downside tail — stays
                UN-FIRED, and the legs are unchanged from 06-19 because no fresh
                business-day FRED print has landed (06-20 is a Saturday): 10Y at
                4.49% (4bp from the gate), HY OAS at 2.63% (15bp away, easing). The
                reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE at 4.49%. The
                macro tape is the same dollar / real-rate EXTREME RISK-OFF headwind
                as 06-19 — but a macro tail is not the right instrument for a floor
                that is holding and a dealer book that just de-amplified; the
                downside risk that remains is the 26JUN monthly, which the dealer
                gamma already prices.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · gate un-fired both legs · unchanged on the weekend</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (next Tier-1 print)</span><span className="dn-lvl-v bear">10Y &gt; 4.53% close (currently 4.49%, 4bp to fire) OR HY OAS &gt; 2.78% close (currently 2.63%, 15bp to fire, eased)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — TRUE at 4.49%; awaits a BTC-internal pivot to translate</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as
                the levels drift, not backtested breakpoints. If the 10Y leg fires
                (it is closest), a downside tail would be reassessed in a separate
                future note (trigger / invalidation / R defined there) — and note
                the dealer strip is still net-short-gamma −48.6M into 26JUN, so any
                such tail would be additive to existing dealer amplification rather
                than a clean independent hedge. No new business-day macro print
                exists to act on today regardless.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · ON HOLD — SM feed DEAD ~7.9 days, the framework cannot be assessed on its own data</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — ON HOLD (continuation of 06-16 / 06-18 / 06-19): the SM feed is frozen ~190.5h, the re-stack signature cannot be read this cut
              </div>
              <div className="dn-thesis">
                The squeeze-cycle / re-stack-hostile-2 framework reads discrete SM
                steps (Δshort &gt; 0 + Δlong &lt; 0 same minute) as continuation
                signatures; its calendar prior (the BJ 13–15 cadence) was falsified
                on 05-31 and it has run as a no-prior watchlist since. It cannot be
                assessed today for the simplest reason: the SM feed is dead.
                long_btc / short_btc / net_btc have been constant since 2026-06-12
                01:36Z (~190.5h), so there are no SM deltas to read. The 06-16 note
                put this ON HOLD at ~94.5h, the 06-18 note at ~142h, the 06-19 note
                at ~166.5h; it remains ON HOLD at ~190.5h.{' '}
                <span className="dn-em">No signature can print from a frozen feed;
                the framework is dark until the SM data resumes.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v bear">ON HOLD · SM feed frozen ~190.5h (since 2026-06-12 01:36Z) · no SM deltas computable</span></div>
                <div><span className="dn-lvl-k">frozen value (not a read)</span><span className="dn-lvl-v">long 13,532.4 / short 50,825.7 / net −37,293.3 — byte-for-byte constant, carried only to mark the dead feed</span></div>
                <div><span className="dn-lvl-k">resume condition</span><span className="dn-lvl-v">SM feed resumes writing fresh long_btc/short_btc → re-assess re-stack signatures from the first fresh deltas</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a dead feed is not a quiet feed. The
                desk does not infer &ldquo;no re-stack&rdquo; from a frozen triple
                — it infers nothing. The squeeze-cycle read is suspended, not
                negative, and the first fresh SM deltas after the feed resumes are
                the re-arm point.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions <span className="dn-roman">VI · LIVE TAPE OUTAGE still the operative condition (third day) · the floor HELD on close twice (spot +1.67%) and the dealer book de-amplified · scout still doubly blocked · 26JUN monthly now the lone amplifier · macro 10Y gate 4bp away</span>
            </h2>

            <p>
              Of the 06-19 conditions: the live tape did <em>not</em> come back —
              it is 24h deader, now 65.4h frozen with the SM feed at ~7.9 days; the
              200W floor that was a live test held on a close basis a second day
              (spot +1.67%, both 06-18 and 06-19 lows wicked through intraday); the
              dealer book de-amplified from −111.1M to −48.6M as the near-dated
              negatives unwound; the scout stayed doubly blocked; the macro re-grow
              gate stayed un-fired with the 10Y leg still 4bp away (unchanged on the
              weekend); the squeeze-cycle stayed ON HOLD on a deader feed. The
              dominant condition is unchanged: <em>the desk is positioning-blind, now
              into a floor-hold bounce it cannot confirm rather than a floor test it
              cannot see being defended</em>. The conditions today re-set around the
              continuing outage, the price decision between a flip reclaim and the
              26JUN amplifier, and the still-doubly-blocked scout:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Live tape restored (PRIMARY operational)</td><td className="bull">live_db.json resumes writing fresh rows beyond 2026-06-17 06:43Z AND the SM triple updates off its 06-12 01:36Z freeze</td><td>re-read funding / OI / flow / SM in full; only then can the scout or squeeze-cycle be evaluated — and only then can the floor-hold bounce be confirmed as covering vs drift; the positioning dimension has now been blind three notes running</td></tr>
                <tr><td>200W floor held on close (was the live test)</td><td className="bull">06-18 $62,924, 06-19 $63,513, 06-20 in-progress $63,482 all &gt; $62,440 floor; spot +1.67% above; both 06-18 / 06-19 lows wicked below intraday and recovered</td><td>floor defended on a close basis twice — constructive on price, but the weekly close (22JUN) is what settles it; no position taken</td></tr>
                <tr><td>200W floor lost (cycle-regime escalation)</td><td className="bear">sustained weekly close &lt; $62,440 (W-SMA200 floor); a daily close below is an early warning, the intraday wicks are NOT the break</td><td>breaks the 200W floor — separate reassessment; the 06-15 reclaim thesis is falsified, the down-leg resumes with the 26JUN26 monthly −49.31M amplifying into opex</td></tr>
                <tr><td>Flip reclaim (price pre-condition for scout)</td><td className="bull">1h close &gt; D-SMA20 $64,054 then flip $64,396, with MTF resonance off bearish / regime off sell-rallies</td><td>NOT a scout trigger by itself — only re-opens scout evaluation IF the live tape is also restored; on a blind tape a reclaim is watched, not traded</td></tr>
                <tr><td>26JUN26 monthly amplifier (6.3 DTE) — now the lone amplifier</td><td className="bear">−49.31M, ≈101% of the −48.6M aggregate; today&rsquo;s 20JUN 0DTE +7.78M is positive and settles 08:00Z after this snapshot (settlement outcome not observed in this cut); near strip 21–23JUN lightly negative</td><td>the near-dated negative amplifiers have unwound pre-settle — the one concentrated downside risk is the 26JUN monthly; watch only, no short instruction in this note (any future setup would define its own trigger / invalidation / R)</td></tr>
                <tr><td>Macro tail re-grow (10Y leg 4bp away)</td><td className="bear">10Y &gt; 4.53% (4bp to fire) OR HY OAS &gt; 2.78% (15bp to fire) — unchanged on the weekend</td><td>no hedge instruction in this note — a gate fire (10Y is closest) would be reassessed in a separate future note; note any such tail would be additive to existing dealer short gamma −48.6M</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.49%</td><td>standalone filter true; needs a BTC-internal pivot AND a live tape to translate to a scout long</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (ON HOLD)</td><td className="stale">SM feed dead ~190.5h; no deltas computable</td><td>suspended, not negative — re-arm on the first fresh SM deltas after the feed resumes</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the floor-hold bounce converts into a flip reclaim ($64,396)
                the desk still cannot scout on a blind tape, or whether the 26JUN26
                monthly amplifier — now ≈101% of the whole short-gamma book — drags
                a fresh test of the $62,440 floor before the 22JUN weekly close and
                26JUN opex; the near-dated amplifiers that powered the down-leg have
                unwound (today&rsquo;s 0DTE is +7.78M positive pre-settle, the near
                strip is light, the $63k put wall collapsed), so the structural risk has narrowed to the
                one monthly six days out, and the structural relief — floor held,
                book de-amplified — is real on price and gamma but
                positioning-unconfirmed
              </span>. Until the tape is restored this note runs as written: the book
              is flat, the scout is doubly blocked (bearish MTF resonance + blind
              tape), the macro tail gate is un-fired with the 10Y leg 4bp away, the
              squeeze-cycle is suspended, and the 200W floor watch is the one live
              level — now a two-close hold, not a live test. Price and MTF held the
              floor and the short frames lifted; the dealer book de-amplified to half
              its short gamma and pushed the heaviest walls down to $60k; macro is the
              same dollar / real-rate headwind carried forward on a weekend while BTC
              flattened its lag to a still-rising TradFi complex. The right read for
              the next 24h is{' '}
              <em>constructive but unconfirmed — respect the floor hold and the
              de-amplified book, watch the 26JUN amplifier and the 22JUN weekly close,
              fix the tape before reading positioning, and do not scout a bounce you
              cannot see being covered</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 — post codex hostile audit
            </span>
            <b>Status:</b> this is the <b>v2</b> note, promoted from v1 in STAGE C
            after the STAGE B codex hostile cross-model audit (verdict{' '}
            <b>BLOCK-CRITICAL</b> on v1) recorded at{' '}
            <code>audits/2026-06-20-desk-note.md</code>, with an ask-deepseek numeric
            second-audit appended there. STAGE C applied every finding in place and
            ran a grep-closure pass per finding (key wrong-claim pattern · hits
            before · hits after):{' '}
            <b>DN-001 (CRITICAL, future-settlement break)</b> — the v1 trigger table
            claimed today&rsquo;s 20JUN 0DTE &ldquo;settled benign 08:00Z&rdquo;
            though the snapshot anchor is 00:06Z and 08:00Z is ~8h after it.
            Patterns searched <code>settled benign 08:00Z</code>,{' '}
            <code>amplifier era is spent</code>, <code>amplifiers … are spent</code>:
            hits before 1 / 1 / 1, hits after 0 / 0 / 0. The 0DTE is now pre-settle
            everywhere (&ldquo;+7.78M positive and settles 08:00Z after this
            snapshot; settlement outcome not observed in this cut&rdquo;), the
            &ldquo;era is spent&rdquo; finality re-cast to &ldquo;near-dated negative
            amplifiers have unwound pre-settle&rdquo;; the only remaining{' '}
            <code>settled benign</code> match is the legitimately-past 19JUN chunk.{' '}
            <b>RESOLVED.</b>{' '}
            <b>DN-002 (MAJOR, 24h range / 06-19 low)</b> — v1 prose carried a{' '}
            <code>$63,620 / $62,297</code> range, a 09:12Z low and a ~0.23% wick that
            conflicted with the note&rsquo;s own manifest/MTF{' '}
            <code>$63,645 / $62,237</code> and the parquet recompute (low{' '}
            $62,237.2 at 2026-06-19 03:15Z, ~0.33% below the $62,440 floor). Patterns
            searched <code>$63,620</code>, <code>$62,297</code>,{' '}
            <code>09:12Z</code>, <code>~0.23%</code>: hits before 1 / 5 / 2 / 2, hits
            after 0 / 0 / 0 / 0 across prose, table footnotes and the floor-watch
            block. <b>RESOLVED.</b>{' '}
            <b>DN-003 (MINOR, footer double-snapshot)</b> — v1 footer labelled both
            00:12Z and 00:06Z &ldquo;snapshot&rdquo;. Pattern{' '}
            <code>00:12Z snapshot</code>: hits before 1, hits after 0; footer now
            &ldquo;emitted 2026-06-20T00:12Z · snapshot 2026-06-20 00:06Z&rdquo;.{' '}
            <b>RESOLVED.</b>{' '}
            <b>DN-004 (MINOR, USD/JPY mixed bases)</b> — v1 wrote &ldquo;yen softer
            vs 160.36 on 06-19&rdquo; beside a −0.01 dashboard 1d delta. Pattern{' '}
            <code>160.36 on 06-19</code> / <code>yen softer vs 160.36</code>: hits
            before 3, hits after 0 across manifest, prose and macro table; bases now
            split (&ldquo;dashboard 1d delta −0.01; +0.92 vs the 160.36 of the 06-19
            note&rdquo;). <b>RESOLVED.</b>{' '}
            Codex-confirmed-clean items (requireViewer gating, markup integrity,
            funding ×1095, GEX dual-reference sign, SM cut-fraction NON-COMPUTABLE,
            MA offsets, expiry-strip −34.5M sum, IV/RV, cross-asset, macro
            arithmetic) were left intact. All four findings RESOLVED (grep
            hits-after = 0); no UNRESOLVED residue, so the note was promoted to v2.{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1; a full{' '}
            <code>next build</code> is environment-blocked on the Node version gate
            (lineage), so <code>npx --no-install tsc --noEmit</code> is the build
            proxy — STAGE E owns the final build verification.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among
            principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and
            not personalized to any recipient&rsquo;s circumstances. Numbers reflect
            a single atomic snapshot (2026-06-20 00:06Z) with section-level
            provenance disclosed in the manifest band above;{' '}
            <em>critically, the live derivatives tape was frozen for 65.4h at
            snapshot time (last row 2026-06-17 06:43Z) and the smart-money
            positioning feed has been dead ~7.9 days</em>, so all funding, OI, flow
            and positioning figures are explicitly last-known / stale or
            non-computable and flagged as such; the macro panel render is 2026-06-19
            22:15Z (~1.85h before snapshot) and its Tier-1 series are unchanged from
            the 06-19 note (weekend). Price, MTF, GEX and cross-asset are fresh. This
            is the v2 note, promoted after the STAGE B codex hostile audit
            (BLOCK-CRITICAL on v1) was applied. Levels, sizes, and conditions are illustrative of the desk&rsquo;s
            process, not standing recommendations. Past correlation, gamma, and
            positioning patterns do not bind future tape. Derivatives carry the risk
            of total loss and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The floor held on the close and the dealer book de-amplified, but
                the tape is still dark and the bounce is unconfirmed. Hold the
                $62,440 line into the 22JUN weekly close, watch the 26JUN amplifier
                now carrying the whole short-gamma book, fix the feed before reading
                positioning. Constructive. Unconfirmed.
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
            v2 · emitted 2026-06-20T00:12Z · snapshot 2026-06-20 00:06Z ·
            post codex hostile audit · sources: live_db.json (FROZEN
            06-17 06:43Z) · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
