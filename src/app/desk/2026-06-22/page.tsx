import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-22 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-22',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-22' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260622() {
  await requireViewer('/desk/2026-06-22');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-22 · v2</span>
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
              <span className="dn-big">$64,710</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.86%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-22 17:19Z ·{' '}
              <span className="dn-em">
                LIVE-TAPE OUTAGE INTO A SIXTH DAY — the OKX monitor has now been
                frozen 130.6h; price/MTF/GEX/cross-asset are fresh, the
                derivatives tape is still dark and the SM feed has been dead ~10.6
                days
              </span>
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · LAST ROW 2026-06-17 06:43Z (t = &ldquo;06-17 14:43&rdquo; BJ)</td>
                  <td className="dn-flag">
                    <b>FROZEN</b> · live_db.json has written no new row since
                    2026-06-17 06:43Z (file mtime 06-17 06:43:08Z confirms);
                    process status is not archived / not verified in this cut — now{' '}
                    <b>130.6h stale</b> vs the 17:19Z snapshot anchor (was 65.4h on
                    the 06-20 note, 41.4h on 06-19, 17.4h on 06-18 — the outage has
                    run another ~65h since the last note). Funding / OI / CVD /
                    basis / retail / taker-flow are LAST-KNOWN at 06-17 06:43Z, not
                    current. The SM sub-feed (long_btc / short_btc / net_btc) is
                    frozen even longer — constant since 2026-06-12 01:36Z (~255.7h
                    / ~10.65 days); SM net and the SM cut-fraction are{' '}
                    <b>NON-COMPUTABLE</b> this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-22 17:16Z scan</td>
                  <td className="dn-flag">
                    fresh (~3 min before anchor) · rolling latest-file artifact,
                    archived verbatim at
                    /opt/desk-note/snapshots/2026-06-22-1719/ · in-progress bars ·
                    scan spot $64,640, 24h +0.73%, 24h H/L $65,597 / $63,220, qVol
                    $10.27B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-22 17:01Z snapshot</td>
                  <td className="dn-flag">
                    fresh (~18 min before anchor) · Deribit idx $64,818 ($108 above
                    parquet spot $64,710) · 890 instruments (was 948 on 06-20) ·
                    net GEX <b>−0.6M</b> (net SHORT gamma but essentially FLAT —
                    de-amplified from −48.6M on 06-20, −111.1M on 06-19) · flip
                    $64,635 (spot ABOVE for the first time since the 06-18→06-20 breakdown)
                    · the dominant chunk is the 26JUN26 monthly −28.36M, 3.6 DTE
                    (eased from −49.31M on 06-20); the near 0DTE 23JUN26 0.6 is
                    +4.89M positive
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-22 17:01Z
                  </td>
                  <td className="dn-flag">fresh · 7d 1h bars · 22 assets · 167 rows · regime NORMAL (mean |r| 0.288, loosened from 0.304 on 06-20)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-21 22:16Z render</td>
                  <td className="dn-flag">
                    ~19.0h render lag · the FRED Tier-1 daily series carry a{' '}
                    <b>stale 4d</b> flag and are unchanged from the 06-20 note (no
                    new business-day print landed before the Sunday render): 10Y
                    4.49%, TIPS 2.23% (EXTREME RISK-OFF), HY OAS 2.63% (RISK-ON
                    episodic), DXY 100.83 (EXTREME RISK-OFF), Fed net liq $5.849T ·
                    MOVE bond vol is BACK at 65.4 (was fetch-failed on 06-20, 70.7
                    on 06-19 — eased) · USD/JPY 161.37 (yen a touch softer vs the
                    161.28 of the 06-20 note)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-22 16:05Z (close $64,710)</td>
                  <td className="dn-flag">
                    fresh kline (exchange OHLC, independent of the frozen live
                    tape) · offsets recomputed vs the parquet last-bar close, which
                    is the freshest available spot while the live tape is frozen ·
                    the displayed ladder uses the 2023→ subset (182 weekly bars),
                    so no W-SMA200 row; the 200W floor is recomputed directly from
                    the full-history glob — 355 weekly W-MON bars (2019→present) —
                    = <b>$62,447</b>, ~$7 above the $62,440 the 06-20 note pinned
                    (a slow weekly SMA, ~$250/wk) · weekly_200sma.json absent this
                    cut but does not block the parquet recompute
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
              <span className="dn-v bear">−7.24% (STALE · 06-17 06:43Z · 130.6h)</span>
              <span className="dn-src">live_db raw funding −0.006608 × 1095 = −7.24% ann (NOT ×100) · LAST-KNOWN at the 06-17 06:43Z freeze, now 130.6h stale, not a current read · last-available ann over the 24h+1m inclusive sampled window ending at the freeze (1,442 rows): mean +0.20%, range −7.24% / +7.21%, 819 / 1,442 rows negative — a balanced, two-sided book at the point the tape died · unchanged from the 06-19 / 06-20 notes: it is the same frozen row</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · vs 06-20</span>
              <span className="dn-v">tape frozen — not computable</span>
              <span className="dn-src">the live tape has not written since 06-17 06:43Z, so there is still no current funding to difference against the 06-20 note · last-known print at the freeze was −7.24% ann (shorts paying longs); the leverage gate remains un-assessable a sixth day running</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC (−0.45%) · STALE window</span>
              <span className="dn-src">live_db oi_btc 102,945 at the 06-17 06:43Z freeze vs the start of a 24h+1m inclusive sampled window (1,442 rows) · the window ENDS at the freeze, NOT into the 17:19Z snapshot — it describes the tape up to 06-17 06:43Z and is 130.6h out of date</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` at the 06-17 06:43Z freeze (was 58.29% at the start of the 24h+1m inclusive sampled window — a +1.18pt long add into the roll-over) · last-known, 130.6h stale</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED DEAD ~255.7h</span>
              <span className="dn-src">long 13.53k − short 50.83k · this triple has been byte-for-byte constant since 2026-06-12 01:36Z (~255.7h / ~10.65 days) — it is a FROZEN value, NOT a current positioning read; carried only to mark the dead feed</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">NON-COMPUTABLE</span>
              <span className="dn-src">SM feed frozen ~10.65 days · |Δ| / prior_net cannot be computed — there is no current SM net to difference · the squeeze-cycle / re-stack framework is blind this cut, a continuation of the 06-16 / 06-18 / 06-19 / 06-20 ON-HOLD</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.7% / 43.43%</span>
              <span className="dn-src">GEX median IV across 890 instruments (17:01Z, fresh) vs 30D close-to-close RV 43.43% off parquet — chain richness only ~+0.27pt, essentially no premium; RV stays elevated (was 43.04% on 06-20, 24.91% on 05-31) — vol is priced almost exactly to realised</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+0.12% (above)</span>
              <span className="dn-src">flip $64,635 (was $64,396 · rose +$239) · vs parquet spot $64,710 (64,710 / 64,635 − 1 = +0.117%) / GEX file Deribit idx $64,818 (64,818 / 64,635 − 1 = +0.283%, file reads +0.3%) — both references ABOVE the flip for the first time since the 06-18→06-20 breakdown, tile rounds the spot side to +0.12% · net GEX −0.6M (net SHORT gamma but essentially flat) · the 26JUN26 monthly −28.36M is the lone concentrated chunk, 3.6 DTE</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The in-progress weekly bar sits well above the floor, the dealer
                book de-amplified to flat, and spot reclaimed both the 0-γ flip and
                the first daily MA — but the weekly-close test is still open until the
                final 22JUN close, and the desk is reading it all through a dead tape,
                a sixth day running
              </span>. The $62,447 cycle floor (full-history W-SMA200, crept ~$7
              from the 06-20 pin) that the 06-20 note flagged as the live weekly
              test is being tested now: the 22JUN weekly bar is still in progress at{' '}
              <span className="dn-tag bull">$64,710 (parquet last bar 16:05Z),
              +3.62% above the floor</span> — the prior note&rsquo;s escalation
              condition (a weekly close &lt; $62,440) has <em>not</em> fired on the
              in-progress read, but the weekly-close test remains open until the final
              22JUN close, so the 06-15 200W reclaim thesis is provisionally intact
              pending that close. Spot has pushed up
              through two structural lines at once: it sits{' '}
              <span className="dn-tag bull">+0.12% above the 0-γ flip
              $64,635</span> (the GEX file&rsquo;s own Deribit-index read is +0.28%
              — both references above, the first above-flip snapshot since the
              06-18→06-20 breakdown) and{' '}
              <span className="dn-tag bull">+1.77% above D-SMA20 $63,588</span>, the
              first positive daily-MA offset since the 06-18→06-20 breakdown. The dealer
              book stepped fully back: aggregate GEX went{' '}
              <span className="dn-tag bull">−48.6M → −0.6M</span> (essentially flat
              net gamma, from −111.1M two notes ago) as the near-dated negatives
              kept unwinding, and the 26JUN26 monthly amplifier eased{' '}
              <span className="dn-tag bull">−49.31M → −28.36M</span> (3.6 DTE) —
              still the lone concentrated chunk, but roughly half the weight it
              carried into 06-20. MTF holds{' '}
              <span className="dn-tag bear">higher-TF bearish · short-term bounce (3
              bull / 5 bear / 2 neutral)</span> with an{' '}
              <span className="dn-tag bull">8h water-down golden cross just
              printed</span> and the short frames back above cloud, but the regime
              stays <span className="dn-tag bear">5/9 momentum / trend-continuation,
              which reads the bounce as a rally to sell</span> and the 1w just
              printed a water-down death cross.{' '}
              <span className="dn-em">
                The operational fact of the day is unchanged and still binding: the
                OKX monitor has now been frozen 130.6h (last row 2026-06-17
                06:43Z), so funding, OI, CVD, basis and retail are last-known and
                stale, and the SM positioning book has been dead ~10.65 days — SM
                net and the cut-fraction are non-computable. The desk cannot see
                whether the flip reclaim was driven by short covering or by thin
                drift on a holiday-thin tape. The reclaim read is on price and
                gamma alone.
              </span>{' '}
              Conviction stays capped: the trade book is flat, the cover-bounce
              scout has finally seen its price pre-condition print (flip + D-SMA20
              reclaimed) but stays blocked on the blind tape and the sell-rallies
              regime, and the one live decision is whether the reclaim extends to
              D-EMA20 $65,386 / W-EMA200 $67,590 — which the desk still cannot scout
              on a dead tape — or whether the 26JUN monthly drags a fade back toward
              the flip before opex, judged on price and gamma alone until the live
              tape is restored.
            </p>

            <p>
              BTC prints <span className="dn-tag">$64,710</span> at the parquet last
              bar (16:05Z),{' '}
              <span className="dn-tag bull">+0.86%</span> on 24h (vs $64,158 one day
              prior; the MTF scan reads +0.73% on its own 17:16Z window — the spread
              is the reference window, not a data conflict), inside a{' '}
              <span className="dn-tag">$65,548 / $63,267</span> parquet 24h close
              range (close max @ 2026-06-22 13:59Z, close min @ 2026-06-21 23:54Z;
              the actual OHLC 24h high/low are the MTF scan&rsquo;s $65,597 / $63,220
              at 14:00Z / 23:47Z). The Deribit index reads $64,818 at
              17:01Z and the MTF scan spot is $64,640 — so the freshest spot is
              well-corroborated across three independent fresh sources (parquet
              kline $64,710, GEX Deribit index $64,818, MTF scan $64,640), even
              though the live_db tape that normally supplies it is frozen at $65,616
              (06-17 06:43Z, 130.6h stale).{' '}
              <span className="dn-signal">The structural read has moved from floor
              test to a provisional floor-hold-plus-reclaim</span>: the 06-15 weekly
              close $66,286 resolved the 200W reclaim, three red daily closes (06-16
              $65,645, 06-17 $64,473, 06-18 $62,924) gave the breakout back onto the
              floor, and the tape has since printed four finalized daily closes plus
              the 06-22 in-progress bar above it — 06-18 $62,924, 06-19 $63,513,
              06-20 $64,270, 06-21 $63,287 finalized, 06-22 in-progress $64,710 —
              with the in-progress 22JUN weekly bar (currently $64,710, settles end
              of Monday 06-22) +3.62% above the recomputed $62,447 floor.{' '}
              <span className="dn-em">
                This is the cycle floor holding on the in-progress read into the
                weekly settle the prior note was waiting on — the test is open, not
                yet resolved — inside a dealer book that has de-amplified to flat and
                a price that has just reclaimed the 0-γ flip and D-SMA20. Whether the reclaim sustains into the deeper
                overhead wall or fades into the 26JUN monthly depends on flow the
                desk currently cannot see.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · LIVE TAPE FROZEN 130.6h (sixth day) · SM book dead ~10.65 days · funding/OI/flow last-known stale · the desk cannot see how the flip-reclaim bounce was absorbed</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important source of this note — the live
                derivatives tape — is still down, a sixth day running
              </span>. The OKX monitor has appended no row to live_db.json since{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> (t =
              &ldquo;06-17 14:43&rdquo; BJ; the file mtime 06-17 06:43:08Z confirms
              the write stopped there; the process status is not archived or
              verified in this cut, so the note asserts the missing tape, not a
              live/hung process). That is now{' '}
              <span className="dn-tag bear">130.6h of missing tape</span> against the
              17:19Z snapshot anchor — the 06-18 note flagged it at 17.4h, the 06-19
              note at 41.4h, the 06-20 note at 65.4h, and the outage has run another
              ~65h without a write. Everything the live tape carries — funding, open
              interest, spot/futures CVD, perp basis, retail long%, taker-net,
              big-print flow, aggressor skew — is therefore{' '}
              <span className="dn-em">last-known at 06-17 06:43Z and not current</span>.
              The smart-money positioning triple (long_btc / short_btc / net_btc)
              has been byte-for-byte constant —{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> — since{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>, ~255.7h (~10.65
              days). The 06-16 note flagged this dead feed at ~94.5h and put the
              squeeze-cycle ON HOLD; the 06-18 note carried it at ~142h, the 06-19
              note at ~166.5h, the 06-20 note at ~190.5h; today it is ~255.7h and
              still dead.{' '}
              <span className="dn-em">
                SM net is non-computable as a current read, and the SM cut fraction
                (|Δ| / prior_net) cannot be formed — there is no current SM net to
                difference. Any positioning claim in this note is explicitly
                historical, not live.
              </span>
            </p>

            <p>
              For completeness, the <em>last-available</em> tape readings — all
              pinned to the 06-17 06:43Z freeze and now 130.6h out of date, and
              byte-for-byte the same readings the 06-19 / 06-20 notes carried
              because it is the same frozen row — are: funding{' '}
              <span className="dn-tag bear">−7.24% ann</span> (raw −0.006608 × 1095;
              shorts paying longs at the freeze), with the last-available path
              balanced two-sided over the 24h+1m inclusive sampled window (1,442
              rows: mean <span className="dn-tag">+0.20% ann</span>, range{' '}
              <span className="dn-tag">−7.24% / +7.21%</span>, 819 / 1,442 rows
              negative); OI <span className="dn-tag bear">102,945 BTC, −468 over the
              trailing 24h+1m window (−0.45%)</span>; retail{' '}
              <span className="dn-tag">mkt_long_pct 59.47%</span> (a +1.18pt long add
              over that same window); perp basis{' '}
              <span className="dn-tag bear">−$57.43 discount</span> to spot (window
              mean −$58.62, range −$146.17 / +$67.04).{' '}
              <span className="dn-em">
                Read this as a near-six-day-old fingerprint, not a signal: a
                two-sided funding book, OI bleeding, retail adding longs into the
                first leg of weakness. None of it can be carried forward to the
                17:19Z snapshot — and crucially it predates the entire 06-18 →
                06-22 floor-hold-and-reclaim sequence, so it says nothing about how
                positioning absorbed the floor defence or the flip reclaim. The desk
                treats the positioning dimension as unknown, and the flip-reclaim
                bounce as positioning-unconfirmed.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure <span className="dn-roman">II · price/MTF FRESH · higher-TF bearish · short-term bounce (3 bull / 5 bear / 2 neutral) · regime 5/9 momentum (sell rallies) · 8h water-down golden cross just printed · spot reclaimed D-SMA20 (+1.77%) and the 0-γ flip, 200W floor $62,447 below the in-progress weekly bar (+3.62%, weekly-close test OPEN)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map is fresh, still reads higher-TF bearish, but the bounce
                has lifted the short frames above cloud and printed the engine&rsquo;s
                8h golden cross
              </span> — the one dimension, with the dealer map, the desk can still
              trust today. The 17:16Z scan tags{' '}
              <span className="dn-tag bear">3 bull / 5 bear / 2 neutral across 10
              frames</span>, net read <em>higher-TF bearish · short-term bounce</em>{' '}
              — softened again from the 06-20 scan&rsquo;s 1 bull / 6 bear / 3
              neutral, but inside a regime still flagged{' '}
              <span className="dn-tag bear">5/9 momentum (JT≥0, trend-continuation
              favoured)</span> — i.e. the regime still reads the bounce as a
              counter-trend rally to sell, not a confirmed reversal. The short
              frames are constructive: 15m / 30m / 1h all above cloud, the{' '}
              <span className="dn-tag bull">1h water-up golden cross 12b</span> with
              RSI 54.4, and the engine just printed an{' '}
              <span className="dn-tag bull">8h water-down golden cross (1 bar
              ago)</span> joining a 1d water-down golden cross 9b and a 4h water-down
              golden cross 15b. The mid frames have lifted into cloud rather than
              below it — 4h / 8h / 12h all now <em>in cloud</em> (a step up from the
              below-cloud stack of 06-19/06-20) — but the long frames stay bearish:
              1d / 3d / 1w all below cloud, and the{' '}
              <span className="dn-tag bear">1w printed a water-down death cross (just
              now)</span> with RSI 37.3. Reversal divergences: top div 15m / 1h,
              bottom div 30m / 1w.{' '}
              <span className="dn-em">
                Straight read: the bounce pushed the short and mid frames from
                below-cloud to above/in cloud and printed the 8h engine golden
                cross — a real lift — but it has not touched the bearish long
                structure (1d/3d/1w still below cloud, fresh 1w death cross), and
                the regime still reads trend-continuation. A short-frame rally into
                a bearish long stack under a sell-rallies regime is precisely the
                &ldquo;sell rallies&rdquo; setup; the 8h cross is the strongest
                constructive note, the 1w death cross the strongest caution. The 1M
                is the lone clean bull frame; the 1w is the warn frame.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,670</td><td className="num">47.4</td><td className="neut">death (water-up) 10b</td><td className="bull">above ↓64.1k 25b</td><td>Sell 1</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">64,666</td><td className="num">52.3</td><td className="neut">death (water-up) 1b</td><td className="bull">above ↓64.0k 15b</td><td>Buy 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">64,653</td><td className="num bull">54.4</td><td className="bull">golden (water-up) 12b</td><td className="bull">above ↓64.0k 10b</td><td>Buy 2</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">64,664</td><td className="num bull">56.6</td><td className="bull">golden (water-dn) 15b</td><td className="neut">in cloud 64.0k–65.2k 3b</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">64,652</td><td className="num">53.2</td><td className="bull">golden (water-dn) 刚印 (just printed) 1b</td><td className="neut">in cloud 62.7k–66.8k 9b</td><td>Sell 2</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">64,653</td><td className="num">50.7</td><td className="neut">—</td><td className="neut">in cloud 64.2k–70.4k 刚穿</td><td>Sell 2</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">64,644</td><td className="num bear">43.5</td><td className="bull">golden (water-dn) 9b</td><td className="bear">below ↑75.3k 21b</td><td>Sell 1</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">64,640</td><td className="num bear">40.0</td><td className="bear">death (water-up) 9b</td><td className="bear">below ↑73.4k 7b</td><td>Sell 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">64,640</td><td className="num bear">37.3</td><td className="bear">death (water-dn) 刚印 (just printed)</td><td className="bear">below ↑100.3k 21b</td><td>Buy 6</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">64,640</td><td className="num bear">43.2</td><td className="neut">—</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 17:16Z scan (rolling latest file;
                    archived verbatim at
                    /opt/desk-note/snapshots/2026-06-22-1719/). Net read{' '}
                    <em>higher-TF bearish · short-term bounce (3 bull / 5 bear / 2
                    neutral)</em>; regime <em>5/9 momentum (JT≥0,
                    trend-continuation favoured)</em>; reversal divergences{' '}
                    <em>top div 15m / 1h, bottom div 30m / 1w</em>. Header alerts:{' '}
                    <em>1w water-down death cross (just printed)</em>,{' '}
                    <em>8h water-down golden cross (1 bar ago)</em>,{' '}
                    <em>30m water-up death cross (1 bar ago)</em>, <em>1M TD8 Buy —
                    one more close</em>. Scan spot $64,640, 24h +0.73%, 24h H/L
                    $65,597 / $63,220, qVol $10.27B. Closes are in-progress bars;
                    treat every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is the same deep overhead wall as 06-20, but with the
              floor now well below and spot up through the first daily line and the
              flip. $64,710 sits{' '}
              <span className="dn-tag bull">+1.77% above D-SMA20 $63,588</span> — the
              single positive offset on the daily ladder and the first daily MA the
              tape has reclaimed since the 06-18→06-20 breakdown — and{' '}
              <span className="dn-tag bull">+3.62% above the full-history W-SMA200
              200W floor $62,447</span>. The next overhead line is{' '}
              <span className="dn-tag bear">D-EMA20 $65,386 (−1.03%)</span> — within
              1%, the reclaim line that would confirm a sustained turn — followed by
              the cycle-proxy{' '}
              <span className="dn-tag bear">W-EMA200 $67,590 (−4.26%)</span> and{' '}
              <span className="dn-tag bear">D-EMA50 $69,080 (−6.33%)</span>. The
              mid-ladder is a deep wall:{' '}
              <span className="dn-tag bear">W-SMA20 $71,541 (−9.55%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $71,845 (−9.93%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $72,061 (−10.20%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $72,095 (−10.24%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $72,234 (−10.42%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,223 (−12.82%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $74,587 (−13.24%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $74,960 (−13.67%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $75,458 (−14.24%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $76,590 (−15.51%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $77,686 (−16.70%)</span>. Far
              above and disused: W-EMA100 $80,983 (−20.09%), W-EMA50 $82,689
              (−21.74%), W-SMA100 $88,534 (−26.91%), W-SMA50 $91,003 (−28.89%). The
              structural near-set has finally widened on the constructive side: the
              200W floor $62,447 (+3.62%) and D-SMA20 $63,588 (+1.77%) below spot,
              the 0-γ flip $64,635 just reclaimed, and D-EMA20 $65,386 only −1.03%
              overhead — a{' '}
              <span className="dn-tag">~$2.9k</span> band between the floor and the
              first overhead line ($65,386 − $62,447 = $2,939), with spot now
              sitting inside it above both the floor and D-SMA20.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-22 16:05Z (close
                $64,710.40); offsets computed against that same close, which is the
                freshest available spot while the live tape is frozen. Displayed MA
                levels are $-rounded; offsets computed from exact series values. The
                displayed ladder uses the 2023→ subset (182 weekly bars), so
                W-SMA200 is not a matrix row; but the 200W floor IS computable from
                the full-history glob — 355 weekly W-MON bars (2019→present) give
                W-SMA200 $62,447. That is ~$7 above the $62,440 the 06-20 note
                pinned: the floor is a slow weekly SMA (~$250/wk) and creeps up as
                older low bars roll off the 200-week window, so the recompute is an
                honest re-pin, not a conflict. The percentile and last-event remain
                unsourced (weekly_200sma.json absent) and are not fabricated. Daily
                closes: 06-15 $66,286, 06-16 $65,645, 06-17 $64,473, 06-18 $62,924,
                06-19 $63,513, 06-20 $64,270, 06-21 $63,287, 06-22 (in-progress)
                $64,710 — the 06-15 high, three red closes onto the floor, then four
                finalized closes plus the 06-22 in-progress bar above it; weekly
                closes 06-08 $63,058, 06-15 $66,286, 06-22 (in-progress) $64,710.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book de-amplified to FLAT net GEX −0.6M (was −48.6M) · spot +0.12% ABOVE flip $64,635 (first since the 06-18→06-20 breakdown) · 26JUN26 monthly eased to −28.36M (3.6 DTE), still the lone amplifier · heaviest put wall still down at $60k · IV 43.7% ≈ RV 43.43%</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book is now essentially flat net gamma and spot has
                crossed above the flip — the short gamma that powered the down-leg
                has unwound to a residual, concentrated only in the one 26JUN
                monthly
              </span>. Aggregate GEX is <span className="dn-tag bull">−0.6M /
              1%</span> (was −48.6M on 06-20, −111.1M on 06-19 — short gamma
              de-amplified to a rounding residual) and the 0-γ flip is{' '}
              <span className="dn-tag">$64,635</span> (rose +$239 from $64,396), with
              spot <span className="dn-tag bull">+0.12% above</span> on
              spot-denominated math (64,710 / 64,635 − 1 = +0.117%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; off its Deribit-index
              $64,818 reads <span className="dn-tag bull">+0.28%</span> (64,818 /
              64,635 − 1 = +0.283%, file rounds to +0.3%) —{' '}
              <span className="dn-em">both references above the flip</span>, the first
              above-flip snapshot since the 06-18→06-20 breakdown, the book no longer
              amplifying from spot. The wall map still carries its weight on the
              downside but the heavy negatives sit below spot:{' '}
              <span className="dn-tag bear">$60k −20.37M</span> (still the heaviest
              wall, Put OI 19,212, a full $4.7k below spot),{' '}
              <span className="dn-tag bear">$64k −15.35M</span> (the near overhead
              wall, just under the flip, Put OI 5,144),{' '}
              <span className="dn-tag bull">$67k +13.61M</span> (heaviest positive,
              Call OI 4,509),{' '}
              <span className="dn-tag bear">$62k −13.33M</span> (right at the $62,447
              floor, Put OI 6,849),{' '}
              <span className="dn-tag bull">$80k +10.50M</span> (Call OI 24,512),{' '}
              <span className="dn-tag bull">$70k +8.76M</span>,{' '}
              <span className="dn-tag bear">$63k −6.77M</span>,{' '}
              <span className="dn-tag bull">$66k +6.63M</span>,{' '}
              <span className="dn-tag bull">$65.5k +6.27M</span>,{' '}
              <span className="dn-tag bear">$55k −5.94M</span> lower crash-put
              residual.{' '}
              <span className="dn-em">
                The map has flipped constructive right around spot: the $65.5k /
                $66k / $67k strikes just overhead are all positive (+6.27M / +6.63M /
                +13.61M), so dealers are long gamma into the immediate upside and the
                $64k −15.35M is the one negative wall pinning the flip. The heavy
                negative gamma is pushed down to $60k–$64k — the level spot has
                already left — so the immediate-overhead book dampens a continuation
                higher rather than amplifying a fade. The concentrated downside risk
                is the 26JUN monthly 3.6 DTE, not the level spot is trading.
              </span>
            </p>

            <p>
              The expiry strip confirms the de-amplification. The dominant single
              chunk is the{' '}
              <span className="dn-tag bear">26JUN26 monthly −28.36M (3.6 DTE, Call OI
              89,266 / Put OI 73,912)</span> — eased from the −49.31M the 06-20 note
              carried, roughly halved, but still the one concentrated amplifier; the
              rest of the strip is small and net positive. The near calendar is
              front-loaded positive:{' '}
              <span className="dn-tag bull">23JUN26 0.6 +4.89M</span> (the near
              0DTE), <span className="dn-tag bull">24JUN26 1.6 +0.48M</span>,{' '}
              <span className="dn-tag bull">25JUN26 2.6 +1.17M</span>, then the 26JUN
              monthly, then{' '}
              <span className="dn-tag bull">3JUL26 10.6 +1.86M</span>,{' '}
              <span className="dn-tag bull">10JUL26 17.6 +0.65M</span>. The positive
              offsets are far-dated and large:{' '}
              <span className="dn-tag bull">31JUL26 38.6 +18.68M</span>,{' '}
              <span className="dn-tag bull">25DEC26 185.6 +3.94M</span>,{' '}
              <span className="dn-tag bull">28AUG26 66.6 +3.38M</span>,{' '}
              <span className="dn-tag bull">25SEP26 94.6 +1.94M</span>,{' '}
              <span className="dn-tag bull">26MAR27 276.6 +0.92M</span>. The listed
              strip nets to roughly +9.6M against the −0.6M headline aggregate; the
              ~+10.2M gap is a difference of basis, not a missing-expiry remainder —
              the headline is surface-grid GEX read at the nearest spot/current-IV
              grid point, while the by-expiry strip is the exact-spot profile grouped
              by expiry, so the two are not algebraically identical unless recomputed
              on the same basis. Either way{' '}
              <span className="dn-em">
                the near calendar 23–25JUN is positive, the 26JUN monthly is the one
                concentrated negative chunk and it has halved, and there is no
                near-dated negative amplifier feeding the book the way 19JUN fed it a
                week ago — the down-leg&rsquo;s near-dated amplifiers have fully
                unwound and the residual aggregate is flat.
              </span>{' '}
              IV median across 890 instruments is{' '}
              <span className="dn-tag">43.7%</span> against 30D close-to-close RV{' '}
              <span className="dn-tag">43.43%</span> — chain richness only{' '}
              <span className="dn-tag">~+0.27pt</span>, essentially zero premium; a
              chain-median across N instruments, <span className="dn-em">not</span>{' '}
              a tradable spread, with expiry-/strike-level vega, skew and term
              structure not loaded — the vol read stays framework-only. RV
              methodology: 30D close-to-close, logret.std × √365 × 100 on the last 30
              daily log returns (= 31 consecutive daily closes) anchored to parquet
              last bar 2026-06-22 16:05Z; the 29-return read is 44.05%, and the
              underlying 31-close window spans $60,850 – $77,282. RV is essentially
              flat vs the 43.04% of 06-20 and remains far above the 24.91% of 05-31 —
              vol is priced almost exactly to realised, with the 43.7% IV median
              carrying no meaningful premium.
            </p>

            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · Tier-1 stale 4d, unchanged from 06-20 (no new business-day FRED print before the Sunday render) — 10Y 4.49%, TIPS 2.23% EXTREME RISK-OFF, HY OAS 2.63% RISK-ON, DXY 100.83 EXTREME RISK-OFF · MOVE back at 65.4 (eased from 70.7) · USD/JPY 161.37 · BTC re-coupled to a now-softening TradFi complex, lag to NQ −2.36pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro panel render is ~19h old and the Tier-1 FRED daily series
                carry a stale-4d flag — unchanged from the 06-20 note, no new
                business-day print landed before the Sunday render
              </span>. Dashboard render is 2026-06-21 22:16Z, ~19.0h before the
              snapshot, and every Tier-1 daily level matches the 06-20 read, so the
              macro tape is carried forward, not re-moved. US 10Y nominal{' '}
              <span className="dn-tag bear">4.49% (+6.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.63</span> — tight regime, RISK-OFF.
              10Y TIPS real <span className="dn-tag bear">2.23% (+9.0bp)</span>,
              regime z <span className="dn-tag bear">+2.68</span> — EXTREME RISK-OFF,
              the tightest line on the panel. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.23% (+2.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag bull">2.25% (−1.0bp)</span> — inflation
              expectations flat. HY OAS{' '}
              <span className="dn-tag bull">2.63% (−8.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.78</span> — credit loose, a RISK-ON
              episodic, the panel&rsquo;s one easing line. MOVE bond vol is{' '}
              <span className="dn-tag bull">65.4 (−5.27)</span> — back on the panel
              after the 06-20 fetch-fail (was 70.7 on 06-19), a loose episodic,
              eased. The dollar stays firm: DXY{' '}
              <span className="dn-tag bear">100.83 (−0.02 day)</span>, regime z{' '}
              <span className="dn-tag bear">+2.45</span> — EXTREME RISK-OFF, above
              100. Fed net liquidity{' '}
              <span className="dn-tag bear">$5.849T (−0.038T)</span>, regime z{' '}
              <span className="dn-tag">+0.05</span> (a flat standing level) but
              episodic z <span className="dn-tag bear">−2.42</span> — the |episodic
              z| &gt; 1.5 day-change surprise the dashboard flags. USD/JPY{' '}
              <span className="dn-tag bear">161.37 (+0.08 day)</span>, regime z
              +1.50, episodic +1.85 (a touch softer-yen vs the 161.28 of the 06-20
              note); US-JP 10Y spread{' '}
              <span className="dn-tag bear">1.84% (+6.0bp)</span>; USD/CNY{' '}
              <span className="dn-tag">6.7647</span>; WTI{' '}
              <span className="dn-tag">$84.7 (stale 6d)</span>.{' '}
              <span className="dn-em">
                Net: the macro backdrop is the same headwind as 06-20 — real rates
                and the dollar at EXTREME RISK-OFF, Fed liquidity drained, credit
                the one offset and bond vol eased — read as carried-forward, not
                re-confirmed, because the Tier-1 daily series are stale-4d. The
                re-grow gates: HY OAS gate 2.78% is 15bp away (at 2.63%, credit
                eased), and the 10Y gate 4.53% is only 4bp from firing (at 4.49%).
                The reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE at 4.49%.
                The dollar / real-rate firming remains a real macro headwind layered
                onto the endogenous read, though credit and the gates have not
                flipped the tail thesis.
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
                <tr><td>US 10Y nominal</td><td className="num">4.49%</td><td className="num bear">+6.0bp</td><td className="num bear">+1.63</td><td className="bear">tight · RISK-OFF · stale 4d</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.23%</td><td className="num bear">+9.0bp</td><td className="num bear">+2.68</td><td className="bear">tightest line · EXTREME RISK-OFF · stale 4d</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.23%</td><td className="num">+2.0bp</td><td className="num">−0.03</td><td className="neut">flat</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.25%</td><td className="num bull">−1.0bp</td><td className="num">−1.37</td><td className="neut">flat / soft</td></tr>
                <tr><td>HY OAS</td><td className="num">2.63%</td><td className="num bull">−8.0bp</td><td className="num bull">−1.78</td><td className="bull">loose · risk-on episodic · stale 4d</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.505</td><td className="num">0.00</td><td className="num">+0.24</td><td className="stale">weekly · stale 9d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">65.4</td><td className="num bull">−5.27</td><td className="num bull">−0.95</td><td className="bull">loose episodic · back (was fetch-fail)</td></tr>
                <tr><td>DXY</td><td className="num">100.83</td><td className="num bull">−0.02</td><td className="num bear">+2.45</td><td className="bear">EXTREME RISK-OFF · above 100</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.849T</td><td className="num bear">−0.038T</td><td className="num">+0.05</td><td className="bear">drained on the week</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.37</td><td className="num bear">+0.08</td><td className="num bear">+1.50</td><td className="bear">yen a touch softer vs 06-20 (161.28)</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.84%</td><td className="num bear">+6.0bp</td><td className="num bull">−1.03</td><td className="bear">RISK-OFF · stale 4d</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7647</td><td className="num">−0.00</td><td className="num bull">−1.67</td><td className="neut">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 17:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.288</span> — loosened from
              the 0.304 of 06-20 but still in the NORMAL band, and{' '}
              <span className="dn-signal">BTC stays coupled to the TradFi risk
              complex</span>. BTC&rsquo;s top ties remain the equity /
              precious-metal cluster: SP500{' '}
              <span className="dn-tag">+0.553</span>, NQ{' '}
              <span className="dn-tag">+0.500</span>, NVDA{' '}
              <span className="dn-tag">+0.459</span>, URNM{' '}
              <span className="dn-tag">+0.444</span>, GOLD{' '}
              <span className="dn-tag">+0.417</span>, SILVER{' '}
              <span className="dn-tag">+0.408</span>, COPPER{' '}
              <span className="dn-tag">+0.384</span>, MSFT{' '}
              <span className="dn-tag">+0.346</span>, with the energy complex inverse
              (CL <span className="dn-tag">−0.213</span>, BRENT{' '}
              <span className="dn-tag">−0.201</span>, NGAS{' '}
              <span className="dn-tag">−0.342</span>) and JPY{' '}
              <span className="dn-tag">−0.215</span>. 7d performance has the whole
              risk complex soft, with BTC the laggard:{' '}
              <span className="dn-tag bear">BTC −3.18%</span>, NQ{' '}
              <span className="dn-tag bear">−0.82%</span>, SP500{' '}
              <span className="dn-tag bear">−1.13%</span>, JP225{' '}
              <span className="dn-tag bull">+4.73%</span>, NVDA{' '}
              <span className="dn-tag bear">−1.18%</span>, META{' '}
              <span className="dn-tag bear">−5.54%</span>, MSFT{' '}
              <span className="dn-tag bear">−7.62%</span>, GOOGL{' '}
              <span className="dn-tag bear">−6.75%</span>, AMZN{' '}
              <span className="dn-tag bear">−5.25%</span>, TSLA{' '}
              <span className="dn-tag bear">−0.71%</span>; metals soft (GOLD{' '}
              <span className="dn-tag bear">−3.06%</span>, SILVER{' '}
              <span className="dn-tag bear">−6.47%</span>, PLAT{' '}
              <span className="dn-tag bear">−5.88%</span>); energy crashed (CL{' '}
              <span className="dn-tag bear">−7.03%</span>, BRENT{' '}
              <span className="dn-tag bear">−5.89%</span>, NGAS{' '}
              <span className="dn-tag bull">+4.83%</span>).{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d return −3.18% vs NQ −0.82% is a lag of −2.36pt (vs
                −2.73pt on 06-20) — but the character has changed: on 06-20 the lag
                narrowed because BTC stopped falling while NQ rose; this window the
                lag narrowed because the whole risk complex rolled over (NQ −0.82%,
                SP500 −1.13%, big-cap tech −5% to −8%, metals and energy down) while
                BTC&rsquo;s floor-hold flattened its own decline. The
                endogenous-to-crypto read still holds for the down-leg structure
                (dealer gamma / reclaim-handed-back / floor-test, now relieved as the
                book de-amplified to flat), but the dollar and real-rate firming, and
                now a softening equity tape, stay a genuine macro headwind on top of
                it.
              </span>{' '}
              JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag — do not lean
              on it.
            </p>

            <h2 className="dn-sec">
              Trade book <span className="dn-roman">V · book FLAT · 200W floor below the in-progress weekly bar (spot +3.62%, weekly-close test OPEN) · scout price pre-condition PRINTED (flip + D-SMA20 reclaimed) but still blocked on the blind tape + sell-rallies regime · macro tail gate un-fired (10Y 4bp away) · squeeze-cycle ON HOLD (SM dead ~10.65 days)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — the in-progress weekly bar is well
                above the floor and the dealer book de-amplified to flat, but the
                weekly-close test is still open, the binding constraint is still data
                integrity, and the reclaim is positioning-unconfirmed
              </span>. The 06-20 scout was doubly blocked; today the price
              pre-condition has finally printed — spot reclaimed the 0-γ flip
              $64,635 and D-SMA20 $63,588, the in-progress 22JUN weekly bar is +3.62%
              above the floor, the dealer book is flat net gamma, and the 8h engine
              golden cross printed. Every one of those is constructive. But the scout still
              cannot be taken: the net MTF read is still higher-TF bearish and the
              regime still reads the bounce as a rally to sell, price is still below
              D-EMA20 and every line above it, and — decisively — the positioning
              legs (SM short bleed, funding posture, cover-flow confirmation) all
              require a live tape, and there is none for a sixth day. A scout long on
              a positioning-blind tape, on a flip reclaim the desk cannot confirm was
              driven by covering, under a sell-rallies regime, is not a trade. No new
              short either: the dealer book just went flat, the near 0DTE is positive,
              the heavy negative gamma is pushed down to $60k–$64k below spot, and
              shorting a floor-hold-and-reclaim on stale flow with the tape blind is a
              poor entry. The trade book today is: no shorts, no scout, no fresh hedge
              — fix the tape AND see the reclaim extend (D-EMA20 then W-EMA200) or fade
              (back below the flip into the 26JUN monthly) before re-arming.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch — in-progress weekly bar +3.62% above the floor, weekly-close test OPEN: spot $64,710 now +3.62% above the recomputed $62,447 floor, the 22JUN weekly close the 06-20 note was waiting on settles end of Monday and is provisionally well above the floor, four finalized daily closes plus the 06-22 in-progress bar above</span>
              <div className="dn-trade-name">
                200W cycle floor watch — the weekly-close test the 06-20 note flagged is OPEN, in-progress bar above; floor $62,447 = full-history W-SMA200 (355 weekly bars, ~$7 above the 06-20 pin), 22JUN weekly bar in-progress $64,710 (+3.62%), four finalized daily closes plus the 06-22 in-progress bar above
              </div>
              <div className="dn-thesis">
                The 06-20 note carried the floor as a two-close hold with the weekly
                settle (22JUN) as the deciding event and the escalation condition set
                at a weekly close &lt; $62,440. That weekly close is still the
                in-progress 22JUN bar at $64,710, +3.62% above the recomputed $62,447
                floor — the escalation has <em>not</em> fired on the in-progress read,
                but the weekly-close test remains open until the final 22JUN close, so
                the 06-15 200W reclaim thesis is provisionally intact pending that
                close. Four finalized daily closes plus the 06-22 in-progress bar sit
                above it (06-18 $62,924, 06-19 $63,513, 06-20 $64,270, 06-21 $63,287
                finalized, 06-22 in-progress $64,710), the recent lows have
                stopped wicking the floor (the 06-21 24h close low $63,267 sits well
                above it), and the dealer map stepped fully back — aggregate gamma flat at
                −0.6M, the heaviest negative gamma pushed down to $60k. <span className="dn-em">This
                is the floor holding above the in-progress weekly bar, not breaking</span> —
                the test the prior note flagged is still open, not yet resolved, and the
                desk still cannot confirm the flow that would distinguish a defended
                floor from a thin-tape drift, because the live tape is down.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor</span><span className="dn-lvl-v">$62,447 = full-history W-SMA200, recomputed this cut from the 2019→ parquet glob (355 weekly W-MON bars); ~$7 above the $62,440 06-20 pin (slow weekly SMA crept up) · weekly_200sma.json absent so percentile/last-event stay unsourced, not fabricated</span></div>
                <div><span className="dn-lvl-k">spot vs floor</span><span className="dn-lvl-v bull">$64,710 +3.62% above on the in-progress read (was +1.67% on 06-20) · 22JUN weekly bar in-progress $64,710 provisionally well above, the weekly close not yet settled; the recent lows have stopped testing the floor</span></div>
                <div><span className="dn-lvl-k">escalation</span><span className="dn-lvl-v bear">a sustained weekly close &lt; $62,447 breaks the 200W floor — a daily close below is an early warning, an intraday wick is not the break — separate reassessment, the reclaim thesis dies and the down-leg resumes into the 26JUN amplifier</span></div>
                <div><span className="dn-lvl-k">reclaim side</span><span className="dn-lvl-v bull">spot has reclaimed the flip $64,635 and D-SMA20 $63,588; the next confirmation is a 1h/daily reclaim of D-EMA20 $65,386 then W-EMA200 $67,590 — but it is NOT a scout trigger on a blind tape (see scout)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework, not a trade.</b> The floor watch is the single
                load-bearing live level while everything else is stale (live tape) or
                framework-only. It remains a live weekly test (06-20) with the
                in-progress bar above the floor, the dealer map flat and spot above the
                flip — all constructive on price and gamma alone. No position is taken on the
                watch: it sets the escalation level (weekly close &lt; $62,447) and
                the reclaim ladder (D-EMA20 $65,386 → W-EMA200 $67,590), and the desk
                will not pre-position long into a reclaim it cannot confirm or short
                into a floor whose weekly close has not yet settled, on a blind tape.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · price pre-condition PRINTED (flip + D-SMA20 reclaimed) but STILL BLOCKED · positioning tape blind ~10.65 days + sell-rallies regime</span>
              <div className="dn-trade-name">
                Cover-bounce scout — the flip reclaim the 06-20 note set as the price pre-condition has finally printed, but the scout stays stood down: the positioning legs are blind on a frozen tape and the regime still reads the bounce as a rally to sell
              </div>
              <div className="dn-thesis">
                The 06-20 scout was doubly blocked — bearish MTF / sell-rallies
                regime AND a blind tape. Today one of those two blocks has lifted on
                the price side: spot reclaimed the 0-γ flip $64,635 and D-SMA20
                $63,588, the in-progress weekly bar held above the floor, the dealer
                book went flat, and the 8h engine golden cross printed. But the scout
                still cannot be
                taken on two counts. (1) The net MTF read is still higher-TF bearish
                (3 bull / 5 bear / 2 neutral) and the regime is still 5/9 momentum /
                trend-continuation — which reads the short-frame bounce as a
                counter-trend rally to sell, not a reversal to buy — with the 1w
                printing a fresh water-down death cross and price still below D-EMA20
                $65,386 (−1.03%) and every line above it. (2) Decisively, the
                positioning legs (SM short bleed, funding posture, cover-flow
                confirmation) all require a live tape, and there is none — the desk
                cannot see whether the flip reclaim was driven by short covering or
                thin drift.{' '}
                <span className="dn-em">A scout long on a positioning-blind tape, on
                a reclaim the desk cannot confirm was covered, under a sell-rallies
                regime with the long frames still below cloud, is not a trade — a
                relief reclaim at the flip is precisely where a positioning-blind desk
                gets run over if the bounce fails into the 26JUN monthly.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">stood down · no entry · price pre-condition met but re-evaluate only after the live tape is restored</span></div>
                <div><span className="dn-lvl-k">technical pre-condition</span><span className="dn-lvl-v">flip $64,635 / D-SMA20 $63,588 reclaimed (now TRUE) AND MTF resonance off bearish / regime off sell-rallies (NOT true — still higher-TF bearish, 1w death cross fresh) AND a 1h close &gt; D-EMA20 $65,386 (not yet)</span></div>
                <div><span className="dn-lvl-k">data pre-condition</span><span className="dn-lvl-v bear">live tape restored (currently 130.6h frozen) AND SM feed live (currently dead ~10.65 days) — both must hold before any positioning leg can be read; this is the binding block</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> no scout entry without a live positioning tape. Even
                the floor hold, the flip reclaim, and the flat dealer book do not
                trigger a scout while the SM / funding / flow legs are blind and the
                regime reads sell-rallies with the long frames below cloud — the desk
                does not size into a cover-bounce it cannot see being covered. The
                price block has lifted; the operational block (tape down) and the
                regime block (sell-rallies, long frames bearish) have not.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — 10Y leg still only 4bp from firing (4.49% vs 4.53% gate), HY OAS leg 15bp away (2.63% vs 2.78%) · Tier-1 stale 4d, unchanged from 06-20</span>
              <div className="dn-trade-name">
                Downside put-spread — re-grow gate un-fired, 10Y leg 4bp from the gate; no hedge added (macro carried forward stale-4d: rates/dollar firm, credit eased, bond vol back and lower)
              </div>
              <div className="dn-thesis">
                The macro re-grow gate the lineage carries — HY OAS &gt; 2.78% OR 10Y
                &gt; 4.53% as the condition to re-grow a downside tail — stays
                UN-FIRED, and the legs are unchanged from 06-20 because the Tier-1
                daily series are stale-4d (no fresh business-day print before the
                Sunday render): 10Y at 4.49% (4bp from the gate), HY OAS at 2.63%
                (15bp away, easing). The reclaim-long rates filter (10Y &lt; 4.55%)
                stays TRUE at 4.49%. The macro tape is the same dollar / real-rate
                EXTREME RISK-OFF headwind as 06-20, with MOVE back and eased to 65.4 —
                but a macro tail is not the right instrument for a floor holding above
                the in-progress weekly bar and a dealer book that de-amplified to flat; the
                downside risk that remains is the 26JUN monthly, which the dealer gamma
                already prices.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · gate un-fired both legs · unchanged (Tier-1 stale 4d)</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (next Tier-1 print)</span><span className="dn-lvl-v bear">10Y &gt; 4.53% close (currently 4.49%, 4bp to fire) OR HY OAS &gt; 2.78% close (currently 2.63%, 15bp to fire, eased)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — TRUE at 4.49%; awaits a BTC-internal pivot AND a live tape to translate</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as the
                levels drift, not backtested breakpoints. If the 10Y leg fires (it is
                closest), a downside tail would be reassessed in a separate future
                note (trigger / invalidation / R defined there) — and note the dealer
                strip still carries the 26JUN monthly −28.36M, so any such tail would
                be additive to existing dealer amplification rather than a clean
                independent hedge. No fresh business-day macro print exists to act on
                today regardless.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · ON HOLD — SM feed DEAD ~10.65 days, the framework cannot be assessed on its own data</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — ON HOLD (continuation of 06-16 / 06-18 / 06-19 / 06-20): the SM feed is frozen ~255.7h, the re-stack signature cannot be read this cut
              </div>
              <div className="dn-thesis">
                The squeeze-cycle / re-stack-hostile-2 framework reads discrete SM
                steps (Δshort &gt; 0 + Δlong &lt; 0 same minute) as continuation
                signatures; its calendar prior (the BJ 13–15 cadence) was falsified on
                05-31 and it has run as a no-prior watchlist since. It cannot be
                assessed today for the simplest reason: the SM feed is dead. long_btc /
                short_btc / net_btc have been constant since 2026-06-12 01:36Z
                (~255.7h), so there are no SM deltas to read. The 06-16 note put this
                ON HOLD at ~94.5h, the 06-18 note at ~142h, the 06-19 note at ~166.5h,
                the 06-20 note at ~190.5h; it remains ON HOLD at ~255.7h.{' '}
                <span className="dn-em">No signature can print from a frozen feed; the
                framework is dark until the SM data resumes.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v bear">ON HOLD · SM feed frozen ~255.7h (since 2026-06-12 01:36Z) · no SM deltas computable</span></div>
                <div><span className="dn-lvl-k">frozen value (not a read)</span><span className="dn-lvl-v">long 13,532.4 / short 50,825.7 / net −37,293.3 — byte-for-byte constant, carried only to mark the dead feed</span></div>
                <div><span className="dn-lvl-k">resume condition</span><span className="dn-lvl-v">SM feed resumes writing fresh long_btc/short_btc → re-assess re-stack signatures from the first fresh deltas</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a dead feed is not a quiet feed. The desk
                does not infer &ldquo;no re-stack&rdquo; from a frozen triple — it
                infers nothing. The squeeze-cycle read is suspended, not negative, and
                the first fresh SM deltas after the feed resumes are the re-arm point.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions <span className="dn-roman">VI · LIVE TAPE OUTAGE still the operative condition (sixth day) · the 200W floor below the in-progress weekly bar (spot +3.62%, weekly-close test OPEN) and the dealer book de-amplified to FLAT · spot reclaimed the flip + D-SMA20 · scout price-block lifted, tape + regime blocks remain · 26JUN monthly the lone amplifier (halved) · macro 10Y gate 4bp away</span>
            </h2>

            <p>
              Of the 06-20 conditions: the live tape did <em>not</em> come back — it
              is ~65h deader, now 130.6h frozen with the SM feed at ~10.65 days; the
              200W floor remains a live weekly test, with the in-progress 22JUN bar
              +3.62% above it (the escalation weekly close &lt; $62,440 has not fired
              on the in-progress read, the close not yet settled);
              the dealer book de-amplified further from −48.6M to −0.6M (flat) as the
              near-dated negatives kept unwinding; the flip reclaim that was the
              scout&rsquo;s price pre-condition printed (spot +0.12% above the flip,
              +1.77% above D-SMA20); the scout&rsquo;s price block lifted but the tape
              and regime blocks remain; the macro re-grow gate stayed un-fired with
              the 10Y leg still 4bp away (stale-4d); the squeeze-cycle stayed ON HOLD
              on a deader feed. The dominant condition is unchanged: <em>the desk is
              positioning-blind, now into an open weekly floor-test-plus-flip-reclaim
              it cannot confirm rather than a floor test it cannot see being
              defended</em>. The conditions today re-set around the continuing outage,
              the open weekly-close floor test, the printed flip reclaim, and the
              still-blocked scout:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Live tape restored (PRIMARY operational)</td><td className="bull">live_db.json resumes writing fresh rows beyond 2026-06-17 06:43Z AND the SM triple updates off its 06-12 01:36Z freeze</td><td>re-read funding / OI / flow / SM in full; only then can the scout or squeeze-cycle be evaluated — and only then can the flip-reclaim bounce be confirmed as covering vs drift; the positioning dimension has now been blind four notes running</td></tr>
                <tr><td>200W floor — in-progress weekly bar above (weekly-close test OPEN)</td><td className="bull">22JUN weekly bar in-progress $64,710 &gt; $62,447 floor (+3.62%); four finalized daily closes 06-18→06-21 plus the 06-22 in-progress bar above; recent lows stopped testing the floor</td><td>the floor test the 06-20 note flagged stays open until the final 22JUN close — provisionally constructive on price; no position taken</td></tr>
                <tr><td>200W floor lost (cycle-regime escalation)</td><td className="bear">sustained weekly close &lt; $62,447 (W-SMA200 floor); a daily close below is an early warning, an intraday wick is NOT the break</td><td>breaks the 200W floor — separate reassessment; the 06-15 reclaim thesis is falsified, the down-leg resumes with the 26JUN26 monthly −28.36M amplifying into opex</td></tr>
                <tr><td>Flip reclaim (scout price pre-condition) — PRINTED</td><td className="bull">spot $64,710 +0.12% above flip $64,635 and +1.77% above D-SMA20 $63,588; next confirmation 1h close &gt; D-EMA20 $65,386 then W-EMA200 $67,590</td><td>the price pre-condition is met — but it is NOT a scout trigger by itself; it only re-opens scout evaluation IF the live tape is also restored AND the regime comes off sell-rallies; on a blind tape the reclaim is watched, not traded</td></tr>
                <tr><td>26JUN26 monthly amplifier (3.6 DTE) — lone amplifier, halved</td><td className="bear">−28.36M (was −49.31M on 06-20), the one concentrated negative chunk; near 0DTE 23JUN +4.89M positive, near strip 23–25JUN positive, aggregate flat at −0.6M</td><td>the near-dated negative amplifiers have fully unwound — the one concentrated downside risk is the 26JUN monthly 3.6 DTE; watch only, no short instruction in this note (any future setup would define its own trigger / invalidation / R)</td></tr>
                <tr><td>Macro tail re-grow (10Y leg 4bp away)</td><td className="bear">10Y &gt; 4.53% (4bp to fire) OR HY OAS &gt; 2.78% (15bp to fire) — Tier-1 stale 4d, unchanged</td><td>no hedge instruction in this note — a gate fire (10Y is closest) would be reassessed in a separate future note; note any such tail would be additive to existing dealer short gamma −28.36M</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.49%</td><td>standalone filter true; needs a BTC-internal pivot AND a live tape to translate to a scout long</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (ON HOLD)</td><td className="stale">SM feed dead ~255.7h; no deltas computable</td><td>suspended, not negative — re-arm on the first fresh SM deltas after the feed resumes</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the flip-reclaim bounce extends through D-EMA20 $65,386 and
                W-EMA200 $67,590 — which the desk still cannot scout on a blind tape —
                or whether the 26JUN26 monthly amplifier, now halved but still the
                lone concentrated chunk, drags a fade back below the flip toward the
                $62,447 floor before opex; the near-dated amplifiers that powered the
                down-leg have fully unwound (the aggregate is flat at −0.6M, the near
                0DTE +4.89M positive), so the structural risk has narrowed to the one
                monthly 3.6 DTE, and the structural relief — the in-progress weekly
                bar holding above the floor on a provisional read, the
                book de-amplified to flat, flip and D-SMA20 reclaimed —
                is real on price and gamma but positioning-unconfirmed
              </span>. Until the tape is restored this note runs as written: the book
              is flat, the scout&rsquo;s price block has lifted but the tape and
              regime blocks have not, the macro tail gate is un-fired with the 10Y leg
              4bp away, the squeeze-cycle is suspended, and the 200W floor watch is
              the one live level — still a live weekly test, with the in-progress bar
              above. Price and MTF held the floor on the in-progress read into the
              weekly settle, the short and mid frames lifted, and the 8h engine golden
              cross printed; the dealer book
              de-amplified to flat and spot crossed above the flip; macro is the same
              dollar / real-rate headwind carried forward stale-4d, with BTC
              re-coupled to a now-softening TradFi complex. The right read for the next
              24h is{' '}
              <em>constructive but unconfirmed — respect the provisional floor hold
              into the weekly close, the flat book and the flip reclaim, watch the
              26JUN amplifier and the
              D-EMA20 / W-EMA200 reclaim ladder, fix the tape before reading
              positioning, and do not scout a reclaim you cannot see being
              covered</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 — post codex hostile audit
            </span>
            <b>Status:</b> this is the <b>v2</b> note. The STAGE B codex hostile
            cross-model audit (<code>audits/2026-06-22-desk-note.md</code>) returned{' '}
            <b>BLOCK-CRITICAL — 1 CRITICAL + 2 MAJOR + 1 MINOR</b>, plus a
            supplementary ask-deepseek numeric recompute flagging 1 MAJOR. STAGE C
            applied every finding across the full EN file (not only the cited lines)
            and ran a grep-closure loop to zero stale matches before promoting v1 → v2.
            Per-finding grep ledger (pattern → hits before → hits after):{' '}
            <b>DN-001 (CRITICAL, weekly-close resolved before the 22JUN bar is final):</b>{' '}
            searched &ldquo;held on/through the weekly close&rdquo;, &ldquo;did not
            fire&rdquo;, &ldquo;resolved as a hold / weekly-close hold&rdquo;,
            &ldquo;five (daily/consecutive) closes&rdquo; incl. line-wrapped
            &ldquo;five\ncloses&rdquo;, &ldquo;survives the test&rdquo;,
            &ldquo;just held the weekly close&rdquo; — before ~22, after 0; all
            reframed to provisional (in-progress 22JUN bar +3.62% above the floor, the
            weekly-close test remains OPEN until the final close; &ldquo;four finalized
            daily closes plus the 06-22 in-progress bar&rdquo;) — <b>RESOLVED</b>.{' '}
            <b>DN-002 (MAJOR, 26JUN monthly &ldquo;six days out&rdquo; overstates the
            window):</b> searched &ldquo;six days out / days out&rdquo; — before 3,
            after 0; all replaced with &ldquo;3.6 DTE&rdquo; — <b>RESOLVED</b>.{' '}
            <b>DN-003 (MAJOR, unscoped &ldquo;first of the down-leg lineage&rdquo;):</b>{' '}
            searched &ldquo;of the down-leg lineage&rdquo;, &ldquo;since the down-leg
            began&rdquo;, &ldquo;first of the down-leg&rdquo;, &ldquo;reclaimed in the
            down-leg&rdquo; — before 7, after 0; all scoped to &ldquo;since the
            06-18→06-20 breakdown&rdquo; — <b>RESOLVED</b>.{' '}
            <b>DN-004 (MINOR, parquet 24h range used close extrema, not OHLC):</b>{' '}
            searched &ldquo;parquet 24h range&rdquo;, &ldquo;24h low $63,267&rdquo; —
            before 2, after 0; relabeled &ldquo;24h close range&rdquo; / &ldquo;24h
            close low&rdquo; with the true OHLC H/L ($65,597 / $63,220) named alongside
            — <b>RESOLVED</b>.{' '}
            <b>DN-005 (ask-deepseek MAJOR, adjudicated — &ldquo;~$1.8k band between the
            floor and the first overhead line&rdquo;):</b> recomputed floor $62,447 to
            D-EMA20 $65,386 = $2,939; searched &ldquo;1.8k&rdquo; — before 1, after 0;
            corrected to &ldquo;~$2.9k&rdquo; with the arithmetic inline — <b>RESOLVED</b>.
            All findings hits-after = 0 (incl. multiline / line-wrap re-scan).{' '}
            <b>Overall: post codex hostile audit.</b> The arithmetic and consistency
            spot-checks codex confirmed clean (funding ×1095, GEX dual-reference sign,
            SM cut-fraction NON-COMPUTABLE, MA offsets vs the parquet last-bar close,
            expiry-strip sum vs headline, IV/RV, cross-asset, macro arithmetic, the
            requireViewer gate, JSX integrity) stand.{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1; a full{' '}
            <code>next build</code> is environment-blocked on the Node version gate
            (lineage), so <code>npx --no-install tsc --noEmit</code> is the build
            proxy — STAGE E owns the final build verification.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among
            principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a
            single atomic snapshot (2026-06-22 17:19Z) with section-level provenance
            disclosed in the manifest band above;{' '}
            <em>critically, the live derivatives tape was frozen for 130.6h at
            snapshot time (last row 2026-06-17 06:43Z) and the smart-money
            positioning feed has been dead ~10.65 days</em>, so all funding, OI, flow
            and positioning figures are explicitly last-known / stale or
            non-computable and flagged as such; the macro panel render is 2026-06-21
            22:16Z (~19.0h before snapshot) and its Tier-1 series are stale-4d
            (unchanged from the 06-20 note). Price, MTF, GEX and cross-asset are
            fresh. This is the v2 note, promoted after the STAGE B codex hostile
            audit. Levels, sizes, and conditions
            are illustrative of the desk&rsquo;s process, not standing
            recommendations. Past correlation, gamma, and positioning patterns do not
            bind future tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The in-progress weekly bar held above the floor, the book
                de-amplified to flat, and spot reclaimed the flip and D-SMA20 — but
                the weekly close has not settled, the tape is still dark, and the
                reclaim is unconfirmed. Watch the D-EMA20 / W-EMA200 ladder
                and the 26JUN amplifier, fix the feed before reading positioning.
                Constructive. Unconfirmed.
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
            v2 · 2026-06-22 17:19Z snapshot · post codex hostile audit
            · sources: live_db.json (FROZEN 06-17 06:43Z) · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
