import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-25 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-25',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-25' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260725() {
  await requireViewer('/desk/2026-07-25');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-25 · v2</span>
          <span>internal · for discussion · post codex hostile audit</span>
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
              <span className="dn-big">$64,167</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.33%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-25 00:06Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-25 00:06Z (snapshot pin, t == &ldquo;07-25 08:06&rdquo; BJ)</td>
                  <td className="dn-flag">
                    fresh · 1-min · anchor pinned to the 00:06Z row (BJ 08:06)
                    for reproducibility · file tail advances live under-foot ·
                    24h-window convention: headline deltas use the prior-row
                    baseline t == &ldquo;07-24 08:05&rdquo; BJ (endpoint minus
                    prior row); funding/flow row-statistics exclude that baseline,
                    premium means include it. The exact same-clock t ==
                    &ldquo;07-24 08:06&rdquo; BJ baseline would read spot −1.22%,
                    OI +1,590.5 BTC / +1.52%, retail 60.30 → 65.12, SM net +1,603.9
                    / +28.1% — the small differences are the baseline convention,
                    disclosed, not a data conflict
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-25 08:01 BJ scan (00:01Z)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · archived verbatim at
                    /opt/desk-note/snapshots/2026-07-25-0006/ · ~5-min stale vs
                    snapshot anchor · in-progress bars
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-25 00:02Z snapshot</td>
                  <td className="dn-flag">
                    ~4-min stale · Deribit idx $64,344 vs live $64,167 · 872
                    instruments · headline aggregate +99.9M vs by-expiry rollup
                    +125.03M (= gex_summary.json net_gex) — a ~+25.1M
                    non-reconciling source-panel gap, disclosed per DN-003
                    lineage (this run the rollup sits ABOVE the headline, the
                    opposite sign of the 07-23 gap)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-25 00:02Z
                  </td>
                  <td className="dn-flag">~4-min lag · 7d 1h bars · 22 assets · 166 rows · archived</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-24 22:16Z render</td>
                  <td className="dn-flag">
                    ~1.85h render lag · FRED Tier-1 rates tightened (10Y +4bp to
                    4.71%, TIPS +4bp to 2.43%, HY OAS +9bp to 2.77%, MOVE +5.94
                    to 76.8) · DXY +0.30 to 101.44 · Fed net liq −$69B to
                    $5.917T · Tier-3 inflation rows mostly monthly/stale
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-25 00:06Z (close $64,139.9)</td>
                  <td className="dn-flag">
                    same-minute anchor · last bar 00:06Z, file mtime 00:06:08Z ·
                    offsets recomputed vs live spot $64,167.16 · W-SMA150 /
                    W-SMA200 non-computable from the 2024–2026 MA subset (134
                    weekly bars) — the 200W cycle floor itself is available from
                    full history / the trap-watch state, see the row below
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W support watch</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · 2026-07-25 00:11Z</td>
                  <td className="dn-flag">
                    200W cycle floor AVAILABLE and maintained — last completed
                    week 2026-07-19 close $64,694.70, W-SMA200 $63,078.14,
                    consecutive_above 3 (streak from 2026-07-05); the full
                    btcusdt_1m_*.parquet glob (360 weekly bars) independently
                    recomputes the completed-week W-SMA200 to $63,078.14. The
                    134-weekly-bar non-computability is only the 2024–2026 MA
                    subset, not the cycle floor. Settled floor $63,078 (spot
                    +1.73% above); nearest computable MA-subset line above it is
                    D-SMA50 $63,194.64 (+1.54%)
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
                  <td className="dn-flag">claims explicitly framework-only (btc_ntt_analysis.html JS-rendered, not extractable)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h ann.</span>
              <span className="dn-v">+6.68%</span>
              <span className="dn-src">live · 24h mean +7.25% · max +10.49% ann (0.009579 field, 2 / 1441 rows — NOT the +10.95% Binance cap) · min +4.73% · 0 negative rows · funding × 1095 (raw 0.006104)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">re-heated fully positive</span>
              <span className="dn-src">range +4.73% / +10.49% · 0 / 1441 negative rows this 24h vs 466 short-pay rows on 07-23 — the negative short-pay stretch of the recovery is gone, longs paying again into a down-price</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+1.48% (+1,551.6 BTC)</span>
              <span className="dn-src">live · third expansion of the down-leg but the wrong kind — down-close, futCVD −1,372.8 / taker-net −1,372.8 / big-net −925.6 SELLING while retail crowds to 65.12% long</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">65.12 / 34.88</span>
              <span className="dn-src">live_db `mkt_long_pct` · crowded up 60.37 → 65.12 at the snap, still below the 24h / recovery high 65.93 printed at BJ 02:03 · 24h range 59.33 / 65.93 — retail buying the down-move</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+7,302 (net LONG, grew via short-cover)</span>
              <span className="dn-src">live · long 15,200.45 − short 7,898.59 = +7,301.87 (rounds +7,302) · continuous net-long since the 07-21 06:36Z cross · net peaked +10,651 @ 07-24 15:35 then bled back</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 24h-ago</span>
              <span className="dn-v">+5,650 → +7,302 (+1,652, +29.2%)</span>
              <span className="dn-src">|Δ|/prior_net = 1,652.25 / 5,649.62 = 29.2% · but Δshort −1,724.8 / Δlong −72.5 — the net grew almost entirely on short-covering, not fresh long demand</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.8% / 29.75%</span>
              <span className="dn-src">GEX median IV · 872 inst · 30D close-to-close RV = logret.std × √365 × 100 on 30 daily returns (parquet last bar 00:06Z)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+3.49% (above)</span>
              <span className="dn-src">flip $62,005 · vs live spot $64,167 (+3.49%; 64,167.16/62,005 − 1 = 3.487%) / GEX file Deribit idx $64,344 (+3.77%; 64,344/62,005 − 1 = 3.771%) — both refs positive, tile uses spot side · aggregate +99.9M headline / +125.03M rollup · de-gammaed from +262.1M on 07-24</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                Second consecutive completed daily close below the failed
                D-EMA50 cap, and the OI that expanded a third time is still the
                wrong kind
              </span>. 07-24 closed{' '}
              <span className="dn-tag bear">$64,116.50</span> (after 07-23&rsquo;s
              $65,069.60), the second consecutive completed close beneath the{' '}
              <span className="dn-tag bear">then-current D-EMA50 cap</span> — 07-23
              printed below the ~$65,109 the D-EMA50 stood at as-of that close,
              07-24 below the ~$65,033 the cap has since slid to as the EMA tracks
              the falling price — the cap that flipped from entry-validation
              support to overhead resistance when the reclaim failed on 07-23.
              Spot prints{' '}
              <span className="dn-tag bear">$64,167 (−1.33% on 24h)</span>, now
              −1.33% <em>below</em> the current D-EMA50 $65,033 cap (vs −0.13% on
              07-24) — the cap-test failure deepened, it did not repair. OI expanded again{' '}
              <span className="dn-tag bear">+1,551.6 BTC (+1.48%)</span> but on a
              down-close with futures CVD{' '}
              <span className="dn-tag bear">−1,372.8</span>, taker-net{' '}
              <span className="dn-tag bear">−1,372.8</span> and big-net{' '}
              <span className="dn-tag bear">−925.6</span> all SELLING, while
              retail crowded to <span className="dn-tag bear">65.12% long</span>{' '}
              (from 60.37%, and the 24h/recovery high 65.93% printed at BJ 02:03)
              and funding
              re-heated to <span className="dn-tag bear">fully positive
              (0 / 1441 negative rows, mean +7.25% ann)</span> after the 466
              short-pay rows of 07-23. Smart money stayed the buyer of record —
              net long <span className="dn-tag bull">+7,302</span>, continuous
              since the 07-21 06:36Z cross, and it <em>grew</em> +1,652 on the
              24h — but the growth is <span className="dn-em">short-covering
              (Δshort −1,725, Δlong −73)</span>, not the fresh long demand the
              scout needs. The dealer book de-gammaed by more than half — {' '}
              <span className="dn-tag">+262.1M → +99.9M headline</span> (rollup
              +125.03M) — so the &ldquo;deepest positive-gamma book of the
              recovery&rdquo; chase-short deterrent has weakened, but it is still
              net positive with the floor holding. This note keeps the scout{' '}
              <span className="dn-em">DEFERRED and the book FLAT</span>: no scout
              long into a second down-close / crowded-long distribution OI /
              rates-FALSE print, and no chase-short into a still-net-positive
              book above a settled floor. Re-arm the long stays structural — a
              D-EMA50 reclaim on an UP-close with buyers behind the OI.
            </p>

            <p>
              BTC prints <span className="dn-tag">$64,167</span> live,{' '}
              <span className="dn-tag bear">−1.33%</span> on 24h, inside a{' '}
              <span className="dn-tag">$65,790 / $63,744</span> range (high @
              07-24 07:17Z / BJ 15:17, low @ 07-24 14:48Z / BJ 22:48).{' '}
              <span className="dn-signal">The down-leg off the 07-21 peak is
              now three completed lower closes deep</span>: 07-21 $66,522.40 →
              07-22 $66,082.00 → 07-23 $65,069.60 → 07-24 $64,116.50, with the
              in-progress 07-25 close at parquet last-bar{' '}
              <span className="dn-tag">$64,139.90</span> — a marginal +$23 above
              07-24, an attempt to stabilise but not a reclaim of anything. The
              MA matrix reads as a tight sandwich around spot: the{' '}
              <span className="dn-tag bear">D-SMA20 $64,244 (−0.12%)</span> and{' '}
              <span className="dn-tag bear">D-EMA20 $64,274 (−0.17%)</span> sit
              just overhead, the <span className="dn-tag bear">D-EMA50 $65,033
              (−1.33%)</span> cap is the first real resistance, and the only
              positive line on the computable ladder is the{' '}
              <span className="dn-tag bull">D-SMA50 $63,194.64 (+1.54%)</span>{' '}
              just below — the nearest computable line above the cycle floor.{' '}
              <span className="dn-em">
                The 200W cycle floor is available and maintained this run: the
                trap-watch state (ma200w_trap_watch_state.json, 00:11Z) carries
                the last completed week 2026-07-19 at W-SMA200{' '}
                <span className="dn-tag bull">$63,078.14</span> with three
                consecutive weekly closes above it, and the full
                btcusdt_1m_*.parquet glob (360 weekly bars) independently
                recomputes the same $63,078 — the 134-weekly-bar
                non-computability is only the 2024–2026 MA subset, not the cycle
                floor. So $63,078 is the settled floor (spot +1.73% above it) and
                the computable D-SMA50 $63,194.64 (+1.54%) sits just above it as
                the nearest MA-subset support.
              </span>{' '}
              The recovery&rsquo;s scout was ARMED on the SM buyer-of-record leg
              and then moved DEFERRED on 07-24 when the D-EMA50 reclaim failed;
              today does not re-arm it — the re-arm gate (a D-EMA50 reclaim on an
              up-close with OI expanding on buyers, AND the reclaim-long rates
              filter true) has none of its legs filled. The book stays flat.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · OI +1.48% but distribution-shaped · retail crowded to 65.12% at the snap (24h/recovery high 65.93% at BJ 02:03) · SM grew net-long on short-covering · funding re-heated fully positive</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position book is distributing, not accumulating
              </span>. OI expanded <span className="dn-tag bear">+1,551.6 BTC
              (+1.48%)</span> over the 24h — 104,526.4 → 106,078.0 — the third
              expansion of the down-leg, but the components are hostile: spot
              CVD ran <span className="dn-tag bull">+3,555</span> (spot bid) while
              futures CVD ran <span className="dn-tag bear">−1,372.8</span>,
              taker-net <span className="dn-tag bear">−1,372.8</span> and big-net{' '}
              <span className="dn-tag bear">−925.6</span> — aggressive futures
              selling into a spot bid, on a <span className="dn-tag bear">−1.33%
              down-close</span>. Retail crowded <span className="dn-tag bear">
              mkt_long_pct 60.37% → 65.12%</span> (24h range 59.33 / 65.93) — the
              snap stays crowded just below the 24h/recovery high 65.93% printed
              at BJ 02:03, retail buying the dip while price falls. <span className="dn-em">Price down + OI up +
              retail piling long + aggressive futures selling is a distribution
              signature, not the demand-fuelled OI-up the scout was armed to
              buy.</span>
            </p>

            <p>
              Smart money stayed the buyer of record and its net grew, but on
              the wrong leg. SM net is{' '}
              <span className="dn-tag bull">+7,302</span> (long 15,200.45 − short
              7,898.59 = +7,301.87) vs the 24h-ago{' '}
              <span className="dn-tag">+5,650</span> — a{' '}
              <span className="dn-tag bull">Δnet +1,652 (+29.2%)</span>
              {' '}(|+7,301.87 − (+5,649.62)| / 5,649.62 = 29.2%). But the
              decomposition is <span className="dn-em">Δshort −1,724.8, Δlong
              −72.5</span>: the long side barely moved and the entire net gain
              came from covering shorts. SM net peaked{' '}
              <span className="dn-tag bull">+10,651 @ 2026-07-24 15:35 BJ (07:35Z
              07-24)</span> then bled back −3,349 into the snapshot; the SM net
              trough over the 24h was <span className="dn-tag">+5,661 @ 2026-07-24
              09:56 BJ (01:56Z 07-24)</span>. The buyer-of-record leg is
              therefore still <em>TRUE</em> and even extended, but its quality is
              a cover, not fresh demand — the same defect the OI carries.{' '}
              <span className="dn-em">A short-cover-fuelled net-long extension
              above a failing cap, with retail crowding the long side into the
              print, is exactly the setup that does not confirm a scout long.</span>
            </p>

            <p>
              The leverage side re-heated on the long side into a falling price
              — the loudest tell of the print.{' '}
              <span className="dn-signal">
                Funding round-tripped fully positive
              </span>: live <span className="dn-tag">+6.68% ann</span> (raw
              0.006104 × 1095), 24h mean{' '}
              <span className="dn-tag bear">+7.25%</span>, range{' '}
              <span className="dn-tag">+4.73% / +10.49%</span> (max 0.009579
              field, 2 / 1441 rows — short of the +10.95% Binance cap), and{' '}
              <span className="dn-tag bear">0 / 1441 negative rows</span> — the
              466 short-pay rows of 07-23 have fully drained; longs are paying to
              hold into a down-move again. OI up, funding positive and re-heating,
              retail crowded long, price down: <span className="dn-em">the
              leverage book is pressing the long side into weakness, the
              opposite of a washed-out setup.</span> Perp trades a{' '}
              <span className="dn-tag bear">−$57.09 discount</span> to spot at
              the snap (1h mean −$61.51, range −$105.00 / −$37.00; 4h mean
              −$63.14; 24h mean −$56.33, range −$171.10 / +$17.92 — basis briefly
              premium once in the 24h, otherwise a persistent discount). 1-min
              aggregate skew snap <span className="dn-tag bear">−13.4</span> —
              mild sell-aggressor tilt into the snapshot.
            </p>

            <p>
              Windowed flow reads <em>a down-close on futures selling with the
              spot bid still present, and the last hour flat</em>. 24h: price{' '}
              <span className="dn-tag bear">−1.33%</span>, OI{' '}
              <span className="dn-tag bear">+1,551.6 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +3,555</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −1,372.8</span>, big-print{' '}
              <span className="dn-tag bear">−925.6 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−1,372.8</span> —{' '}
              <span className="dn-em">spot bought, futures sold, OI expanded on
              the sell side — distribution, not accumulation</span>. 4h (into
              snapshot): price <span className="dn-tag bear">−0.12%</span>, OI{' '}
              <span className="dn-tag bull">−103.2 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +2,938.8</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −804.9</span>, big-print{' '}
              <span className="dn-tag bear">−228.7 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−805.0</span> — <em>OI leaked
              slightly as futures sold and spot bought, the same split at higher
              frequency</em>. 1h: price <span className="dn-tag bull">+0.01%</span>,
              OI <span className="dn-tag bull">−209.0 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,427.5</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −104.9</span>, big-print{' '}
              <span className="dn-tag bull">+10.5 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−105.0</span> — <em>flat price, OI
              still leaking, spot bid the only positive</em>. The persistent spot
              CVD bid across all three windows is the single constructive
              read — but it is buying into a futures-led distribution, and it has
              not stopped the three-close down-leg.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF resonance bearish 1 long / 6 short / 3 neutral · 12h water-up death cross 2b · 1w water-down golden cross just printed · 8h/1M ⚡TD9 BUY + 3d/1w bottom-div (bounce hints against the trend)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF engine turned more bearish while flashing oversold-bounce
                reversal hints
              </span> — a sell-the-bounce read. The net is{' '}
              <span className="dn-tag bear">1 long / 6 short / 3 neutral</span>{' '}
              across 10 frames (vs 07-24&rsquo;s 1 long / 3 short / 6 neutral —
              the neutral cluster resolved bearish). The short-term band 15m–4h
              is uniformly bearish; the mid band carries the fresh damage — the{' '}
              <span className="dn-tag bear">12h water-up death cross printed 2
              bars ago</span> and the 8h a water-up death cross 5 bars ago. Against
              that, the reversal set is real: <span className="dn-tag bull">8h and
              1M ⚡TD9 BUY</span> (oversold-reversal hints), a{' '}
              <span className="dn-tag bull">1w water-down golden cross just
              printed</span>, a <span className="dn-tag bull">3d water-down golden
              cross 5 bars ago</span>, and a bottom-div cluster on{' '}
              <span className="dn-tag bull">3d / 1w</span>. The regime engine
              reads 5/9 cycle-reversal (JT&lt;0) — mean-reversion / bounce-favoured,
              trend-following cautioned. RSI is mid-to-oversold across the board
              (1h 34.2, 4h 36.9, 30m 38.1, 1w 39.1) with no frame overbought.{' '}
              <span className="dn-em">
                Read straight: the trend frames rolled bearish and the
                bounce-reversal frames are firing underneath — the tape is
                stretched enough for a relief bounce but the structure has not
                turned, and a bounce into the D-EMA50 cap is a sell until an
                up-close reclaims it.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,106</td><td className="num">42.7</td><td className="bull">golden (water-dn) 32b</td><td className="bear">below ↑64.2k 47b</td><td>Buy 3</td><td>BEAR hid</td></tr>
                <tr><td>30m</td><td className="num">64,106</td><td className="num">38.1</td><td className="bull">golden (water-dn) 11b</td><td className="bear">below ↑65.2k 28b</td><td>Buy 1</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>1h</td><td className="num">64,104</td><td className="num">34.2</td><td className="bear">death (water-dn) 12b</td><td className="bear">below ↑65.2k 36b</td><td>Buy 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">64,104</td><td className="num">36.9</td><td className="bear">death (water-up) 15b</td><td className="neut">in cloud 63.8–64.5k 1b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">64,106</td><td className="num">44.0</td><td className="bear">death (water-up) 5b</td><td className="bull">above ↓63.6k 48b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">64,104</td><td className="num">46.2</td><td className="bear">death (water-up) 2b</td><td className="bull">above ↓62.3k 22b</td><td>Buy 5</td><td>BEAR reg</td></tr>
                <tr><td>1d</td><td className="num">64,106</td><td className="num">49.5</td><td className="neut">—</td><td className="neut">in cloud 62.2k–70.2k 5b</td><td>Buy 2</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">64,104</td><td className="num">44.5</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑75.3k 18b</td><td>Buy 1</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">64,106</td><td className="num">39.1</td><td className="bull">golden (water-dn) 刚印 (just printed)</td><td className="bear">below ↑97.1k 25b</td><td>Sell 2</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">64,104</td><td className="num">43.8</td><td className="neut">—</td><td className="bull">above ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 08:01 BJ scan (00:01Z; rolling
                    latest file, archived verbatim at
                    /opt/desk-note/snapshots/2026-07-25-0006/). Header alerts:{' '}
                    <em>1w water-down golden cross (just printed)</em>,{' '}
                    <em>12h water-up death cross 2b</em>,{' '}
                    <em>8h ⚡TD9 BUY</em>, <em>1M ⚡TD9 BUY</em>. Scan spot
                    $64,106, 24h −1.47%, 24h H/L $65,780 / $63,666, qVol $9.53B
                    (the live-tape header at 00:06Z shows $64,167 / −1.33% on the
                    same window — the 5-minute gap and the different 24h
                    reference account for the difference). Closes are in-progress
                    bars; treat every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the sandwich. Spot $64,167.16 sits{' '}
              <span className="dn-tag bull">+1.54% above D-SMA50 $63,194.64</span>{' '}
              — the nearest computable MA-subset line above the settled $63,078
              W-SMA200 cycle floor (spot +1.73% above it) — and beneath a stack of
              overhead lines in order:{' '}
              <span className="dn-tag bear">D-SMA20 $64,244 (−0.12%)</span>,{' '}
              <span className="dn-tag bear">D-EMA20 $64,274 (−0.17%)</span>,{' '}
              <span className="dn-tag bear">D-EMA50 $65,033 (−1.33%)</span>{' '}
              (the failed cap / entry-validation line),{' '}
              <span className="dn-tag bear">D-EMA100 $67,826 (−5.39%)</span>{' '}
              (the working first target on any reclaim),{' '}
              <span className="dn-tag bear">W-SMA20 $69,776 (−8.04%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $69,788 (−8.05%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,794 (−8.06%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $69,918 (−8.23%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $70,758 (−9.31%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $72,267 (−11.21%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $72,918 (−12.00%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $73,587 (−12.80%)</span>.
              Far above and disused: W-EMA150 $76,739 (−16.38%; seed), W-EMA50
              $78,959 (−18.73%), W-EMA100 $80,308 (−20.10%), W-SMA50 $85,381
              (−24.85%), W-SMA100 $88,486 (−27.48%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-25 00:06Z (close
                $64,139.90); offsets recomputed against live spot $64,167.16.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. W-SMA150 / W-SMA200 non-computable from this
                2024–2026 MA subset (134 weekly bars) — the 200W cycle floor
                $63,078 is separately available from the trap-watch state and the
                full-history glob; W-EMA150 $76,739 and W-EMA200 $72,918 show
                because the EMA seeds from available history and are reported as
                such. Daily
                closes: 07-20 $65,224.80, 07-21 $66,522.40, 07-22 $66,082.00,
                07-23 $65,069.60, 07-24 $64,116.50, 07-25 (in-progress)
                $64,139.90 — two consecutive completed closes each below its
                then-current D-EMA50 cap (07-23 below the ~$65,109 as-of level,
                07-24 below the $65,033 the cap has since slid to).
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book de-gammaed &gt;50% to +99.9M headline / +125.03M rollup · flip $62,005 (spot +3.49% above) · strip NOT wholly positive — 25JUL 0.3DTE −10.13M + a $64k −10.23M wall at spot · 31JUL +87.14M dominant</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book stayed net-long-gamma but de-gammaed by more than
                half
              </span>. Aggregate GEX is <span className="dn-tag bull">+99.9M /
              1%</span> on the HTML headline, with the by-expiry rollup summing{' '}
              <span className="dn-tag">+125.03M</span> (= gex_summary.json
              net_gex $125,030,116) — a{' '}
              <span className="dn-em">~+25.1M non-reconciling source-panel gap,
              disclosed per DN-003 lineage; this run the rollup sits ABOVE the
              headline, the opposite sign of the 07-23 gap</span>. Either way the
              book has collapsed from the 07-24 +262.1M — the deepest
              positive-gamma band of the recovery is gone. The 0-γ flip is{' '}
              <span className="dn-tag">$62,005</span> and spot $64,167 sits{' '}
              <span className="dn-tag bull">+3.49% above</span> it
              (64,167.16 / 62,005 − 1 = +3.487%); the GEX file&rsquo;s own
              &ldquo;dist to flip&rdquo; reads +3.8% off its Deribit-index
              $64,344 ($177 above live spot), which is{' '}
              <span className="dn-tag bull">+3.77%</span> (64,344 / 62,005 − 1 =
              +3.771%) — both references positive, spot above the flip on both,
              but the +3.49% cushion has compressed from +5.11% on 07-24 as the
              flip rose and spot fell.{' '}
              <span className="dn-em">
                The strip is NOT wholly positive this run: the near-dated 25JUL
                0.3DTE is −10.13M (settles 08:00Z today, ~8h after snapshot),
                27JUL is −5.07M, and the wall map carries a $64,000 −10.23M
                negative pocket right at spot plus a $60,000 −17.77M crash-put
                residual.
              </span>{' '}
              The dominant magnet is <span className="dn-tag bull">31JUL 6.3DTE
              +87.14M</span> (six days out), followed by 7AUG +23.59M and 28AUG
              +17.66M. The heaviest walls are the call caps overhead:{' '}
              <span className="dn-tag bull">$70k +49.31M</span>,{' '}
              <span className="dn-tag bull">$72k +31.67M</span>,{' '}
              <span className="dn-tag bull">$68k +17.73M</span>,{' '}
              <span className="dn-tag bull">$67k +11.56M</span>,{' '}
              <span className="dn-tag bull">$66k +10.77M</span>,{' '}
              <span className="dn-tag bull">$80k +8.89M</span>,{' '}
              <span className="dn-tag bull">$65k +8.34M</span>,{' '}
              <span className="dn-tag bull">$69k +8.03M</span>, against the{' '}
              <span className="dn-tag bear">$64k −10.23M</span> and{' '}
              <span className="dn-tag bear">$60k −17.77M</span> negatives below.{' '}
              <span className="dn-em">
                Net: the book is still dampening on aggregate and spot is above
                the flip, so a hard chase-short is still late — but the deterrent
                that stood the whole recovery (the deepest positive-gamma band)
                has halved and a local negative wall now sits exactly at spot,
                which weakens, without reversing, the no-chase-short discipline.
              </span>
            </p>

            <p>
              IV median across 872 instruments is{' '}
              <span className="dn-tag">41.8%</span> against 30D close-to-close RV
              of <span className="dn-tag">29.75%</span> — chain-level richness{' '}
              <span className="dn-tag">~+12.1pt</span>. A chain-median across N
              instruments, <span className="dn-em">not</span> a tradable spread;
              expiry-/strike-level vega, skew and term structure remain not
              loaded; the vol read stays framework-only. Put/Call OI ratio 0.43
              (call OI 305,922 / put OI 131,214) — a call-heavy book, consistent
              with the overhead call-wall cap structure. RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log
              returns, anchored to parquet last bar 2026-07-25 00:06Z.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Tier-1 rates tightened again (10Y 4.71% +4bp, TIPS 2.43% +4bp, DXY 101.44 EXTREME RISK-OFF) vs credit/liquidity loose (HY OAS 2.77%, NFCI −0.552 RISK-ON) · reclaim-long rates filter FALSE and further out · put-spread HY OAS leg now 1bp from firing</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro split held and the rates/dollar side tightened another
                notch
              </span>. Dashboard render is 2026-07-24 22:16Z, ~1.85h before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bear">4.71% (+4.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.66</span>, episodic z{' '}
              <span className="dn-tag bear">+2.34</span> — EXTREME RISK-OFF, and
              4bp higher than 07-24&rsquo;s 4.67%. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.43% (+4.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+3.05</span> — EXTREME RISK-OFF. 5Y5Y
              BE inflation <span className="dn-tag">2.28% (+1.0bp)</span>. HY OAS{' '}
              <span className="dn-tag">2.77% (+9.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−0.69</span> — still &ldquo;loose&rdquo;
              but 9bp wider on the day and now just{' '}
              <span className="dn-em">1bp shy of the 2.78% put-spread re-grow
              gate</span>. MOVE bond vol <span className="dn-tag">76.8
              (+5.94)</span> — firmed materially, neutral tag. DXY{' '}
              <span className="dn-tag bear">101.44 (+0.30)</span>, regime z{' '}
              <span className="dn-tag bear">+2.30</span> — EXTREME RISK-OFF, the
              dollar firmer. NFCI <span className="dn-tag bull">−0.552
              (−0.01)</span> — RISK-ON. Fed net liquidity{' '}
              <span className="dn-tag bear">$5.917T (−0.069T)</span>, episodic z{' '}
              <span className="dn-tag bear">−2.47</span> — draining $69B on the
              week. USD/JPY <span className="dn-tag">163.83 (+0.75)</span>;
              US-JP 10Y spread <span className="dn-tag">2.04% (+4.0bp)</span>.{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) stays FALSE
                and tightened a further 4bp to 4.71% — the macro gate on a scout
                long is now firmly shut. The put-spread re-grow gate is
                BOTH-legs-required (HY OAS &gt; 2.78% AND 10Y &gt; 4.53%): the 10Y
                leg is TRUE at 4.71% and the HY OAS leg is 1bp from firing at
                2.77% — the closest the hedge trigger has come, but a single-leg
                fire is not a hedge trigger. The rates/dollar core is tight, the
                credit/liquidity side loose; the split persists.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>Macro indicator</th>
                  <th>level</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>episodic z</th>
                  <th>read</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.71%</td><td className="num bear">+4.0bp</td><td className="num bear">+2.66</td><td className="num bear">+2.34</td><td className="bear">EXTREME RISK-OFF · tightened</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.43%</td><td className="num bear">+4.0bp</td><td className="num bear">+3.05</td><td className="num bear">+2.06</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.28%</td><td className="num bear">+1.0bp</td><td className="num">+0.77</td><td className="num bear">+2.51</td><td className="neut">no tag · episodic</td></tr>
                <tr><td>HY OAS</td><td className="num">2.77%</td><td className="num bear">+9.0bp</td><td className="num bull">−0.69</td><td className="num">+1.23</td><td className="bull">loose · 1bp from re-grow gate</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.552</td><td className="num">−0.01</td><td className="num bull">−1.51</td><td className="num bull">−1.71</td><td className="bull">RISK-ON</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">76.8</td><td className="num bear">+5.94</td><td className="num">+0.30</td><td className="num">+1.75</td><td className="neut">neutral · firmed</td></tr>
                <tr><td>DXY</td><td className="num">101.44</td><td className="num bear">+0.30</td><td className="num bear">+2.30</td><td className="num">+1.04</td><td className="bear">EXTREME RISK-OFF · firmer</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.917T</td><td className="num bear">−0.069T</td><td className="num">+0.56</td><td className="num bear">−2.47</td><td className="bull">loose · drained $69B</td></tr>
                <tr><td>USD/JPY</td><td className="num">163.83</td><td className="num bear">+0.75</td><td className="num bear">+1.76</td><td className="num">+2.21</td><td className="neut">no tag · episodic</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.04%</td><td className="num">+4.0bp</td><td className="num">−0.26</td><td className="num">+2.34</td><td className="neut">neutral</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">monthly · do not lean</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7714</td><td className="num">−0.00</td><td className="num bull">−1.34</td><td className="num">−0.62</td><td className="neut">no tag</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 166 rows, summary 00:02Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Regime IDIOSYNCRATIC, mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.229</span> (below the 0.25
              threshold). BTC&rsquo;s listed ties, sorted by |r|: NQ{' '}
              <span className="dn-tag">+0.505</span>, SP500{' '}
              <span className="dn-tag">+0.416</span>, COPPER{' '}
              <span className="dn-tag">+0.400</span>, TSLA{' '}
              <span className="dn-tag">+0.391</span>, SILVER{' '}
              <span className="dn-tag">+0.368</span>, PLAT{' '}
              <span className="dn-tag">+0.355</span>, JP225{' '}
              <span className="dn-tag">+0.331</span>, GOLD{' '}
              <span className="dn-tag">+0.308</span>, URNM{' '}
              <span className="dn-tag">+0.283</span>, NVDA{' '}
              <span className="dn-tag">+0.267</span>, CL{' '}
              <span className="dn-tag">−0.255</span>, BRENT{' '}
              <span className="dn-tag">−0.241</span>. 7d performance:{' '}
              <span className="dn-tag bull">BTC +0.38%</span>, NQ{' '}
              <span className="dn-tag bear">−1.43%</span>, SP500{' '}
              <span className="dn-tag bear">−0.50%</span>, JP225{' '}
              <span className="dn-tag bear">−1.55%</span>, NVDA{' '}
              <span className="dn-tag bull">+1.96%</span>, META{' '}
              <span className="dn-tag bear">−6.77%</span>, TSLA{' '}
              <span className="dn-tag bear">−18.31%</span>, MSFT{' '}
              <span className="dn-tag bear">−3.18%</span>, GOOGL{' '}
              <span className="dn-tag bear">−7.87%</span>, AMZN{' '}
              <span className="dn-tag bear">−6.19%</span>. Commodities led:
              CL <span className="dn-tag bull">+9.82%</span>, BRENT{' '}
              <span className="dn-tag bull">+6.57%</span>, SILVER{' '}
              <span className="dn-tag bull">+4.13%</span>, URNM{' '}
              <span className="dn-tag bull">+2.66%</span>, GOLD{' '}
              <span className="dn-tag bull">+1.15%</span>, COPPER{' '}
              <span className="dn-tag bull">+1.01%</span>.{' '}
              <span className="dn-em">
                BTC (+0.38% 7d) leads only the equity/megacap cluster — a +1.81pt
                edge over NQ (−1.43%) and clear of a −18.31% TSLA and a −6.77%
                META — while energy, silver, uranium, gold and copper all outran
                it. So this stays a stocks-relative tell, not full-strip RS
                leadership (DN-001 lineage): BTC is holding up better than the
                megacap complex is falling, not out-running the whole cross-asset
                strip.
              </span>{' '}
              JGB monthly 2.67% carries an EXTREME RISK-OFF monthly tag — do not
              lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · book FLAT · scout DEFERRED (re-arm structural, no legs filled) · no chase-short despite the de-gamma · put-spread not re-grown on a single 10Y leg</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book stays flat and the scout stays deferred
              </span>. The prior note (07-24) moved the reclaim scout ARMED →
              DEFERRED when the D-EMA50 reclaim failed on the 07-23 completed
              close and the OI expansion proved distribution-shaped. None of the
              re-arm conditions filled today — indeed all three moved further from
              firing: (1) the desk needs a D-EMA50 reclaim on an{' '}
              <em>up-close</em>, and today is the second down-close below the cap
              with spot now −1.33% beneath it; (2) it needs OI expanding on{' '}
              <em>buyers</em>, and today&rsquo;s OI expansion is retail-crowded
              distribution with futures selling and SM growth on short-covering;
              (3) it needs the reclaim-long rates filter true (10Y &lt; 4.55%),
              and the 10Y tightened a further 4bp to 4.71%. Against the chase, the
              dealer book de-gammaed by more than half (+262.1M → +99.9M) and a
              $64k −10.23M wall now sits at spot — so the &ldquo;deepest
              positive-gamma book&rdquo; deterrent has weakened — but the book is
              still net positive, spot is +3.49% above the flip, the floor holds,
              and the 8h/1M ⚡TD9 BUY + 3d/1w bottom-div warn of bounce risk, so a
              hard chase-short is still late. The book today is: no scout entry,
              no short, no fresh hedge.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · DEFERRED · re-arm structural · no legs filled · wait for a confirming up-close reclaim on buyers</span>
              <div className="dn-trade-name">
                Reclaim scout — deferred a second day; the cap-test failure deepened (two down-closes, each below its then-current D-EMA50), OI stayed distribution-shaped, rates filter tightened further FALSE
              </div>
              <div className="dn-thesis">
                The scout was armed on the SM buyer-of-record leg (net long since
                the 07-21 06:36Z cross) and is gated on a genuine reclaim of the
                D-EMA50 cap — the level that validated the recovery&rsquo;s entry
                and then flipped to overhead resistance when 07-23 closed
                $65,069.60 beneath the then-current D-EMA50 (~$65,109 as-of that
                close; the cap has since slid to $65,033). Today the
                buyer-of-record leg is still
                TRUE and even grew (+1,652 net, +29.2%), but the growth is
                short-covering (Δshort −1,725, Δlong −73), not the fresh long
                demand the reclaim needs; the OI expanded a third time
                (+1,551.6 BTC) but on a down-close with futures/taker/big-net all
                selling and retail crowded to 65.12% long — distribution, not
                accumulation; and funding re-heated fully positive (0 negative
                rows). The reclaim requires an <em>up-close</em> reclaim of the
                D-EMA50 $65,033 with OI expanding on buyers, and the rates filter
                (10Y &lt; 4.55%) true — none of which holds. Status:{' '}
                <em>deferred</em>, re-arm is structural.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm trigger (all three required)</span><span className="dn-lvl-v bull">1d close &gt; D-EMA50 $65,033 (an up-close reclaim, not a print) AND OI expanding on buyers (spot+futures CVD both up, SM adding long not covering) AND 10Y &lt; 4.55% close</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on the confirming up-close reclaim, scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">the settled floor — W-SMA200 $63,078 (maintained in the trap-watch state, three weekly closes above) / computable D-SMA50 $63,194.64; a daily close beneath ends the digestion-above-floor read</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">D-EMA100 $67,826 (working first target) then the W-SMA20 $69,776 / D-SMA100 $69,788 cluster</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · take half at D-EMA100</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> re-arm entry ~D-EMA50 $65,033, stop the floor
                $63,078 = ~$1,955 risk; first target D-EMA100 $67,826 = ~$2,793
                reward ≈ <b>1.43:1</b> (2,793 / 1,955 = 1.428). <b>Hard rule:</b>
                the entry is decided on the confirming up-close with buyers behind
                the OI, not on a bounce into the cap and not on a short-cover-fed
                net-long extension. Two consecutive down-closes, each below its
                then-current D-EMA50 cap, plus a re-heating funding + crowded-long
                retail + a FALSE rates filter
                is a distribution print, not a reclaim; do not pre-empt the
                up-close.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · chase-short · STOOD DOWN · deterrent weakened by the de-gamma but not removed</span>
              <div className="dn-trade-name">
                Chase-short — stood down; the book de-gammaed &gt;50% and a $64k negative wall printed at spot, but net-positive gamma + a holding floor + oversold bounce-hints keep it late
              </div>
              <div className="dn-thesis">
                The whole recovery lineage has declined the chase-short on the
                grounds that the dealer book was the deepest positive-gamma band
                of the recovery — a dampening book that punishes momentum shorts.
                That deterrent weakened materially today: aggregate GEX halved
                from +262.1M to +99.9M (rollup +125.03M), the +3.49% flip cushion
                compressed from +5.11%, and a $64,000 −10.23M negative wall now
                sits exactly at spot alongside the near-dated 25JUL 0.3DTE
                −10.13M and 27JUL −5.07M. But the book remains net positive, spot
                is still above the flip, the floor holds (spot +1.54% above the
                computable D-SMA50, three completed weekly closes above the
                $63,078 lineage floor), and the 8h/1M ⚡TD9 BUY plus the 3d/1w
                bottom-div cluster warn that the tape is stretched enough for a
                relief bounce. Status: <em>stood down</em>, monitored.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">would-arm trigger</span><span className="dn-lvl-v bear">a 1d close &lt; the floor (D-SMA50 $63,194 / $63,078 lineage) with aggregate GEX turning net-negative (a fresh negative near-dated chunk added, not just the $64k pocket) — a through-the-floor break into a negative-gamma book</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v bear">no chase-short into a still-net-positive book above the flip with the floor holding and 8h/1M TD9 BUY live</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> the de-gamma is a real change to the deterrent,
                not a green light. A short is armed by a floor break INTO a
                negative-gamma book, not by the mere shrinkage of a positive one.
                Until the floor gives on a close with the book flipping negative,
                the chase-short stays a watch.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread NOT re-grown · both-legs-required gate not met (HY OAS 1bp shy)</span>
              <div className="dn-trade-name">
                Downside put-spread — not re-grown; the re-grow gate is BOTH-legs-required and only the 10Y leg is TRUE (HY OAS 2.77% is 1bp from firing)
              </div>
              <div className="dn-thesis">
                The put-spread re-grow gate is BOTH-legs-required by lineage
                design: HY OAS &gt; 2.78% close AND 10Y &gt; 4.53% close. The 10Y
                leg is firmly TRUE at 4.71% (and tightening), and the HY OAS leg
                is now just 1bp from firing at 2.77% (+9bp on the day) — the
                closest the hedge trigger has come. But a single-leg fire is not
                a hedge trigger; the both-legs rule exists precisely so a lone
                rates move does not re-grow a tail into a still-loose credit tape
                (NFCI RISK-ON, HY OAS regime z −0.69). No roll, no fresh leg.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-grow trigger (both legs)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.77%, 1bp to fire) AND 10Y &gt; 4.53% close (currently 4.71%, TRUE)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bear">10Y &lt; 4.55% close — FALSE at 4.71%, tightened a further 4bp; the macro gate on a scout long is shut</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as
                the levels drift, not backtested breakpoints. If both legs ever
                fire together, a new hedge leg would roll to a 28AUG / 25SEP
                forward; the dealer strip is still net-long-gamma and a fresh tail
                would not carry an amplifier tailwind here. The single-leg-close
                proximity of HY OAS is worth flagging but not acting on.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · failed cap test deepened to two down-closes · OI stays distribution-shaped · SM grew on cover · book de-gammaed but floor holds · scout deferred, book flat</span>
            </h2>

            <p>
              Of the 07-24 conditions: the D-EMA50 reclaim DID NOT FIRE — 07-24
              closed $64,116.50, a second consecutive close below the then-current
              cap (and below the current $65,033), and spot is now −1.33% beneath
              it; the OI-up-on-buyers condition DID NOT FIRE — OI
              expanded but on distribution (retail 65.12% long, futures/taker/
              big-net selling, SM growth on short-cover); the reclaim-long rates
              filter STAYED FALSE and tightened (10Y 4.71% &gt; 4.55%); the floor
              HELD (spot +1.54% above the computable D-SMA50 $63,194, three
              completed weekly closes above the $63,078 lineage floor); the
              buyer-of-record leg STAYED TRUE (SM net long +7,302, continuous
              since the 07-21 cross) but on cover, not demand; the dealer book
              DE-GAMMAED &gt;50% (+262.1M → +99.9M) yet stayed net positive.{' '}
              <em>No condition fired to arm a trade; the failed-cap-test read of
              07-24 extended by a day and the book stays flat.</em> The
              conditions re-set around a deepened cap-test failure, a
              distribution-shaped OI, a shallower-but-still-positive dealer book,
              and a holding floor:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Reclaim scout (long) — re-arm gate</td><td className="bull">1d close &gt; D-EMA50 $65,033 (up-close) AND OI expanding on buyers AND 10Y &lt; 4.55% close</td><td>scout long 0.2R, stop the floor $63,078 / $63,194, target D-EMA100 $67,826 · R/R ≈ 1.43:1</td></tr>
                <tr><td>Cap-test failure deepens (down-leg continues)</td><td className="bear">a third consecutive 1d close lower, losing the D-SMA50 $63,194 / $63,078 floor</td><td>the digestion-above-floor read ends; reassess — a floor break is the escalation, not the cap failure alone</td></tr>
                <tr><td>Floor holds + book stays positive</td><td className="bull">1d closes hold &gt; $63,078 / $63,194 AND aggregate GEX stays net positive</td><td>digestion-above-floor read holds; scout stays armed-structural, waiting on the up-close reclaim</td></tr>
                <tr><td>Chase-short (would-arm)</td><td className="bear">1d close &lt; the floor WITH aggregate GEX turning net-negative (fresh negative near-dated chunk)</td><td>a through-the-floor break into a negative-gamma book would arm a short with stop back above the floor; the de-gamma alone does not arm it</td></tr>
                <tr><td>Macro tail re-grow (BOTH legs)</td><td className="bear">HY OAS &gt; 2.78% (1bp to fire) AND 10Y &gt; 4.53% (TRUE at 4.71%)</td><td>roll a downside put-spread to 28AUG / 25SEP; a single-leg fire is NOT a trigger</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">10Y &lt; 4.55% close — FALSE at 4.71%, tightened +4bp</td><td>the macro gate on a scout long is shut; a reclaim print without the filter true does not translate to a live long</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the down-leg finds a genuine up-close reclaim of the
                D-EMA50 $65,033 with buyers behind the OI (spot AND futures CVD
                up, SM adding long not covering, and the 10Y back below 4.55%), or
                whether a third lower close loses the D-SMA50 / $63,078 floor and
                — only if the dealer book flips net-negative on the break — arms
                the chase-short the lineage has stood down all recovery
              </span>. Until then this note runs as written: the reclaim scout is
              deferred a second day with a structural re-arm gate, the chase-short
              is stood down (its deterrent weakened by the &gt;50% de-gamma but not
              removed while the floor holds), and the put-spread is not re-grown
              on a single 10Y leg. The buyer of record is still bid but growing on
              a cover; retail is crowded long at 65.12% into a falling price,
              just below the recovery high 65.93% it printed at BJ 02:03; funding has re-heated fully positive; and the book
              stays FLAT. The right read for the next 24h is{' '}
              <em>patient — the reclaim is decided on the up-close, not on the
              bounce that would tempt it</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit
            </span>
            <b>Status:</b> v2 EN, promoted from v1 after the STAGE B codex
            hostile-but-fair audit (verdict BLOCK-CRITICAL: 1 CRITICAL + 3 MAJOR +
            1 MINOR, plus an ask-deepseek arithmetic second-audit adjudicated by
            STAGE C). Findings folded in per STAGE C; audit record at
            audits/2026-07-25-desk-note.md. Each finding was closed with a grep
            sweep of the full EN file for the wrong-claim pattern and all semantic
            variants — pattern searched · hits-before (carrying the pre-fix
            meaning) · hits-after · resolution:{' '}
            <b>DN-001 (CRITICAL, as-of D-EMA50 cap collision — 07-23 $65,069.60
            printed beside the current $65,033 cap, an impossible below-cap
            claim):</b> patterns &ldquo;$65,069.60 … below/beneath the $65,033
            cap&rdquo;, &ldquo;second close below the cap&rdquo;, &ldquo;two
            consecutive closes below the D-EMA50 cap&rdquo;, &ldquo;down-closes
            below the cap&rdquo; — hits-before 6 (lead, MA em-block daily-closes,
            scout thesis, R/R hard-rule, decision prose, signature) — hits-after 0
            (every close-vs-cap claim now splits the as-of level: 07-23 closed
            below the then-current D-EMA50 ~$65,109 as-of that close, 07-24 below
            the ~$65,033 the cap has since slid to; spot is −1.33% below the
            current $65,033 cap; the $65,069.60 &gt; $65,033 collision is gone) —
            RESOLVED.{' '}
            <b>DN-002 (MAJOR, 200W floor provenance regressed — floor wrongly
            called unavailable/stale/non-recomputable):</b> patterns
            &ldquo;weekly_200sma.json ABSENT&rdquo;, &ldquo;200W watch
            unavailable&rdquo;, &ldquo;not on disk&rdquo;, &ldquo;cannot be
            recomputed&rdquo;, &ldquo;carried as a stale reference&rdquo;,
            &ldquo;unavailable/unrefreshable&rdquo;, &ldquo;134 weekly bars&rdquo;
            unqualified — hits-before 7 (manifest 200W row + MA-matrix row, MA
            prose em-block, MA-matrix em-block, stop level) — hits-after 0 (source
            restored to ma200w_trap_watch_state.json 00:11Z: last completed week
            2026-07-19 close $64,694.70, W-SMA200 $63,078.14, consecutive_above 3;
            the full btcusdt_1m_*.parquet glob of 360 weekly bars independently
            recomputes $63,078.14; the 134-weekly-bar non-computability is now
            stated as the 2024–2026 MA subset only, and $63,078 is the settled
            available cycle floor with D-SMA50 $63,194.64 the nearest computable
            MA-subset line above it) — RESOLVED.{' '}
            <b>DN-003 (MAJOR, retail superlative self-refuted — 65.12% called the
            most-long recovery reading while the same window prints 65.93%):</b>
            patterns &ldquo;most-long&rdquo;, &ldquo;most-crowded-long&rdquo;,
            &ldquo;recovery high&rdquo; attached to 65.12 — hits-before 5 (OI meta,
            retail meta, roman I header, OI prose, decision prose) — hits-after 0
            (the 65.12% snap is now stated as crowded but below the 24h/recovery
            high 65.93% printed at BJ 02:03; the superlative is reattached to
            65.93, never to the 65.12 pin) — RESOLVED.{' '}
            <b>DN-004 (MAJOR, undisclosed 24h-window convention — headline deltas
            use the prior-row t=07-24 08:05 baseline, not the same-clock 08:06):</b>{' '}
            pattern &ldquo;24h baseline / window convention&rdquo; disclosure
            absent — hits-before 0 disclosures for a prior-row convention in use
            throughout — hits-after: the live-tape manifest row now discloses the
            prior-row baseline t=07-24 08:05 BJ (endpoint minus prior row;
            funding/flow row-stats exclude the baseline, premium means include it)
            and prints the exact same-clock 08:06 alternative (spot −1.22%, OI
            +1,590.5 BTC/+1.52%, retail 60.30→65.12, SM net +1,603.9/+28.1%) as the
            convention delta, not a data conflict — RESOLVED.{' '}
            <b>DN-005 (MINOR, MA staleness contradicts the manifest timestamp —
            parquet last bar is at the 00:06Z anchor, not ~4-min stale):</b>{' '}
            pattern &ldquo;~4-min stale vs snapshot anchor&rdquo; on the MA-matrix
            row — hits-before 1 — hits-after 0 (restated &ldquo;same-minute anchor
            · last bar 00:06Z, file mtime 00:06:08Z&rdquo;; the GEX/cross-asset
            ~4-min lag rows are legitimately 00:02Z vs the 00:06Z anchor and are
            left) — RESOLVED.{' '}
            <b>ask-deepseek second-audit (adjudicated, not auto-applied):</b> the
            SM-net component self-contradiction (net +7,302 vs long 15,200 − short
            7,899 = 7,301) is REAL and fixed — both instances now read exact
            components long 15,200.45 − short 7,898.59 = +7,301.87 (rounds +7,302);
            the SM-cut fraction 1,652.25 / 5,649.62 = 29.2453% is CORRECT to one
            decimal at 29.2% (deepseek&rsquo;s 29.3% double-rounds 29.245→29.25→29.3;
            no change), and all other deepseek items were PASS. Overall: post codex
            hostile audit; all CRITICAL + MAJOR + MINOR grep-closed to hits-after 0.
            The retained self-contained arithmetic: funding × 1095 (live +6.68%
            from raw 0.006104, 24h mean +7.25%, max +10.49% ann at 0.009579 field
            2/1441 rows, 0 negative rows); GEX dual-reference (flip $62,005, spot
            +3.49% / idx +3.77%, both positive) and headline-vs-rollup gap (+99.9M
            headline vs +125.03M by-expiry rollup = gex_summary.json net_gex,
            ~+25.1M, DN-003-lineage non-reconciling panel); the MA matrix vs live
            spot $64,167.16 off parquet 2026-07-25 00:06Z close $64,139.90 (current
            D-EMA50 $65,033 cap −1.33%, D-SMA50 $63,194.64 +1.54%, settled W-SMA200
            $63,078 cycle floor +1.73%); the R/R (entry ~$65,033, stop $63,078,
            target $67,826 → 2,793 / 1,955 = 1.43:1); 30D RV 29.75% (30 returns);
            cross-asset (|r| 0.229, BTC +0.38% vs NQ −1.43% = +1.81pt) and macro
            Tier-1 (10Y 4.71%, HY OAS 2.77% 1bp from gate, DXY 101.44, Fed net liq
            $5.917T) vs source; claims-vs-loaded-data (NTT / max-pain / strike-IV /
            BTC-NQ framework-only; JGB monthly do not lean; IV chain-median across
            872 instruments not a tradable spread); the requireViewer gating
            pattern (first statement, path /desk/2026-07-25); and EN/ZH numeric
            parity with the ZH companion authored in STAGE C.
            <b> Build note (INFO):</b> this server runs Node 18.19.1; Next
            hard-exits on Node &lt; 20.9.0, so a full <code>next build</code> is
            environment-blocked (lineage);{' '}
            <code>npx --no-install tsc --noEmit</code> is the build proxy.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-07-25 00:06Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-07-24 22:16Z (~1.85h before
            snapshot) and some inputs are explicitly stale or pending and
            flagged as such. Levels, sizes, and conditions are illustrative of
            the desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future
            tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                Two down-closes, each below its then-current D-EMA50 cap, and the
                OI is still the wrong kind — retail crowded long, funding
                re-heated, smart money
                growing on a cover. The book de-gammaed but the floor holds. The
                reclaim is decided on the up-close, not the bounce. Patient.
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
            v2 · 2026-07-25 00:06Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
