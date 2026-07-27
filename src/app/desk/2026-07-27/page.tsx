import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-27 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-27',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-27' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260727() {
  await requireViewer('/desk/2026-07-27');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-27 · v2</span>
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
              <span className="dn-big">$65,251</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.33%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-27 00:06Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-27 00:06Z (snapshot pin, t == &ldquo;07-27 08:06&rdquo; BJ)</td>
                  <td className="dn-flag">
                    fresh · 1-min · anchor pinned to the 00:06Z row (BJ 08:06) for
                    reproducibility · file tail advances live under-foot · 24h-window
                    convention: headline deltas use the same-clock prior-day baseline
                    t == &ldquo;07-26 08:06&rdquo; BJ (endpoint minus the 24h-ago row);
                    funding/flow row-statistics span the 1,441-row window; premium
                    means exclude null rows
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-27 08:01 BJ scan (00:01Z)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · archived verbatim at
                    /opt/desk-note/snapshots/2026-07-27-0006/ · ~5-min stale vs
                    snapshot anchor · in-progress bars · scan spot $65,347, 24h +1.58%
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-27 00:00Z snapshot</td>
                  <td className="dn-flag">
                    ~6-min stale · Deribit idx $65,571 vs live $65,251 · median IV
                    42.5% · headline aggregate +191.1M vs by-expiry rollup +211.84M
                    (= gex_summary.json net_gex $211,840,285) — a ~+20.74M
                    non-reconciling source-panel gap, disclosed per DN-003 lineage
                    (rollup again sits ABOVE the headline, same sign as the 07-25/07-26
                    gaps)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-27 00:00Z
                  </td>
                  <td className="dn-flag">~6-min lag · 7d 1h bars · 22 assets · 167 rows · archived</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-26 22:16Z render</td>
                  <td className="dn-flag">
                    ~1.85h render lag · FRED Tier-1 daily rates FROZEN over the weekend
                    (07-25 Sat / 07-26 Sun) — 10Y 4.71%, TIPS 2.43%, HY OAS 2.77% carry
                    the same levels as the 07-26 note (the dashboard Δ column reflects
                    the last completed FRED move, not a weekend re-print); only the
                    continuously-quoted FX ticked (DXY −0.24 to 101.24, USD/JPY 163.6) ·
                    MOVE fetch-failed · Fed net liq $5.917T (no fresh weekly print)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-27 00:05Z (close $65,254.70)</td>
                  <td className="dn-flag">
                    same-minute anchor · offsets recomputed vs live spot $65,251.07 ·
                    W-SMA200 non-computable from the 2023–2026 MA subset (187 weekly
                    bars); W-SMA150 IS computable at $76,683 but sits far above / disused
                    — the 200W cycle floor itself is available from
                    full history / the trap-watch state, see the row below
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W support watch</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · recomputed 2026-07-27 00:11Z</td>
                  <td className="dn-flag">
                    200W cycle floor AVAILABLE and maintained — last completed week
                    2026-07-26 close $65,375.10, W-SMA200 $63,311.02, consecutive_above
                    4 (streak from 2026-07-05); the full btcusdt_1m_*.parquet glob (360
                    weekly bars, 2019–2026) independently recomputes the completed-week
                    W-SMA200 to $63,311.02. Settled floor $63,311 (spot +3.06% above);
                    nearest computable MA-subset line above it is D-SMA50 $63,328.24
                    (+3.04%)
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
              <span className="dn-v">+6.72%</span>
              <span className="dn-src">live · 24h mean +6.24% (was +4.24% on 07-26 — RE-HEATED) · max +10.24% ann (0.009348 field, 1 / 1441 rows @ 07-26 20:35 BJ / 12:35Z) · min +3.65% · 0 / 1441 negative rows · funding × 1095 (raw 0.006134)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">re-heated off the 07-26 cooling</span>
              <span className="dn-src">range +3.65% / +10.24% · mean +4.24% → +6.24% ann · still 0 / 1441 negative — longs paying up again into the reclaim, leverage re-crowding on the long side even as SM trims and retail leaves</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−2.86% (−3,075.5 BTC)</span>
              <span className="dn-src">live · 107,503.6 → 104,428.2 · the three-expansion distribution of the down-leg REVERSED into a contraction on the up-print — short-covering / deleveraging, not the demand-fuelled OI expansion the scout was armed to buy</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bull">60.92 / 39.08</span>
              <span className="dn-src">live_db `mkt_long_pct` · de-crowded 64.23 → 60.92 (24h high 64.51 at 07-26 09:11 BJ / 01:11Z, baseline 64.23, low 60.92 at the snap) — the least-crowded read of the recovery, off the 07-24 high 65.93</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+2,743 (net LONG, trimmed a 3rd day)</span>
              <span className="dn-src">live · long 13,029.90 − short 10,286.74 = +2,743.16 · continuous net-long since the 07-21 06:36Z cross · net peaked +5,618 @ 07-26 14:36 BJ (06:36Z) then bled to a +2,684 trough @ 07-27 07:46 BJ (23:46Z 07-26) near the snap — the thinnest net-long of the recovery</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 24h-ago</span>
              <span className="dn-v bear">+5,093 → +2,743 (−2,350, −46.14%)</span>
              <span className="dn-src">|Δ|/prior_net = 2,349.72 / 5,092.88 = 46.14% · Δlong −446.2 / Δshort +1,903.5 — the buyer of record barely cut longs but ADDED shorts +1,904 into the reclaim: still net long, but building a short leg, the opposite of the SM-adding the re-arm gate requires</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.5% / 30.12%</span>
              <span className="dn-src">GEX median IV · chain-median across N instruments, not a tradable spread · 30D close-to-close RV = logret.std × √365 × 100 on 30 daily returns (parquet last bar 00:05Z) · ~+12.4pt chain richness · 29-return alt 30.42%</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+4.18% (above)</span>
              <span className="dn-src">flip $62,632 · vs live spot $65,251 (+4.18%; 65,251.07/62,632 − 1 = 4.181%) / GEX file Deribit idx $65,571 (+4.69%; 65,571/62,632 − 1 = 4.692%) — both refs positive, tile uses spot side · aggregate +191.1M headline / +211.84M rollup · re-gammaed deeper from +131.5M / +151.83M on 07-26</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The D-EMA50 cap the whole recovery was gated on finally got
                reclaimed on a completed up-close — but it printed on the wrong
                fuel and the buyer of record kept trimming
              </span>. 07-26 closed{' '}
              <span className="dn-tag bull">$65,375.10</span> (+$1,037.00 vs
              07-25&rsquo;s $64,338.10) — the second consecutive up-close and the
              first daily close back above the{' '}
              <span className="dn-tag bull">D-EMA50 $65,062 cap</span> that flipped
              to overhead resistance on the 07-23 failed test — and spot prints{' '}
              <span className="dn-tag bull">$65,251 (+1.33% on 24h)</span>,{' '}
              <span className="dn-tag bull">+0.29% above the cap</span>. That is the
              price leg of the scout&rsquo;s re-arm gate, filled at last. But the
              reclaim came on internals the gate specifically excludes. OI{' '}
              <span className="dn-tag bull">contracted −2.86% (−3,075.5 BTC)</span> —
              the three-expansion distribution of the down-leg reversed into a
              short-covering / deleveraging contraction, not the demand-fuelled
              OI-up the scout wanted. Smart money — still the buyer of record, net
              long <span className="dn-tag bull">+2,743</span> and continuous since
              the 07-21 06:36Z cross — <span className="dn-em">trimmed a third
              straight day, cutting net −2,350 (−46.14%) by barely touching longs
              (−446) and ADDING shorts (+1,904)</span>: it used the reclaim to build
              a short leg, the opposite of the SM-adding the gate requires. And the
              reclaim-long rates filter stayed <span className="dn-tag bear">FALSE a
              fourth day</span> (10Y frozen 4.71% over the weekend, above the 4.55%
              gate). So the gate is now split down the middle — the{' '}
              <span className="dn-em">price legs are TRUE (D-EMA50 reclaim + up-close)
              while the flow/rates legs are FALSE (OI contracted not demand-expanded,
              SM trimming-and-shorting not adding, rates FALSE)</span>. Funding
              re-heated (24h mean +4.24% → +6.24% ann) and retail de-crowded hard
              (64.23 → 60.92, the least crowded of the recovery), a mixed leverage
              read: fewer retail longs, but the ones left paying up. This note keeps
              the scout <span className="dn-em">DEFERRED and the book FLAT</span>: no
              scout long into a short-covering reclaim with the buyer of record
              stepping back and rates FALSE; and no chase-short into the deepest
              positive-gamma dealer book of the recovery, spot climbing into the
              $66k–$72k call-wall cap. The price finally did what the scout waited
              for — the position book did not confirm it.
            </p>

            <p>
              BTC prints <span className="dn-tag">$65,251</span> live,{' '}
              <span className="dn-tag bull">+1.33%</span> on 24h — the second
              consecutive 24h up-print and the larger of the two — inside a{' '}
              <span className="dn-tag">$65,530 / $64,294</span> range (high @ 07-27
              07:10 BJ / 07-26 23:10Z, low @ 07-26 14:25 BJ / 07-26 06:25Z).{' '}
              <span className="dn-signal">The four-session down-leg has now turned
              two up-closes and reclaimed its cap</span>: 07-21 $66,522.40 → 07-22
              $66,082.00 → 07-23 $65,069.60 → 07-24 $64,116.50 → 07-25 $64,338.10 →
              07-26 <span className="dn-tag bull">$65,375.10 (+$1,037.00)</span>, with
              the in-progress 07-27 close at parquet last-bar{' '}
              <span className="dn-tag">$65,254.70</span> holding above the cap. The
              MA matrix reads as a repaired ladder up to the cap: spot sits above the
              reclaimed <span className="dn-tag bull">D-SMA20 $64,418 (+1.29%)</span> /{' '}
              <span className="dn-tag bull">D-EMA20 $64,478 (+1.20%)</span> pair, above
              the <span className="dn-tag bull">D-SMA50 $63,328 (+3.04%)</span>, and
              now <span className="dn-tag bull">+0.29% above the D-EMA50 $65,062</span>{' '}
              — the level that was the failed cap on 07-23/07-26 and is now the pivot.
              The next resistance overhead is the{' '}
              <span className="dn-tag bear">D-EMA100 $67,731 (−3.66%)</span>, but the
              dealer $66k–$72k call-wall band sits in between.{' '}
              <span className="dn-em">
                The 200W cycle floor is available and maintained this run: the
                trap-watch state (ma200w_trap_watch_state.json, recomputed 2026-07-27
                00:11Z) carries the last completed week 2026-07-26 at W-SMA200{' '}
                <span className="dn-tag bull">$63,311.02</span> with four consecutive
                weekly closes above it, and the full btcusdt_1m_*.parquet glob (360
                weekly bars, 2019–2026) independently recomputes the same $63,311. So
                $63,311 is the settled floor (spot +3.06% above it) and the computable
                D-SMA50 $63,328 (+3.04%) sits just above it as the nearest MA-subset
                support.
              </span>{' '}
              The scout was ARMED on 07-22 on the SM buyer-of-record leg, moved
              DEFERRED on 07-24 when the D-EMA50 reclaim failed, and stayed deferred
              on 07-25/07-26; today the price re-arm leg finally fires, but the
              confirming flow legs (OI expanding on buyers, SM adding long) and the
              rates filter do not. The book stays flat.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · reclaim on OI CONTRACTION (−2.86%) — short-covering, not demand · SM stayed buyer of record but TRIMMED −46.14% and ADDED shorts a 3rd day · retail de-crowded to 60.92 (least of the recovery) · funding re-heated · perp still at a discount</span>
            </h2>

            <p>
              <span className="dn-signal">
                The reclaim was a short-covering markup with spot leading, not the
                demand-fuelled expansion the scout was armed to buy
              </span>. OI <span className="dn-tag bull">contracted −3,075.5 BTC
              (−2.86%)</span> over the 24h — 107,503.6 → 104,428.2 — reversing the
              three straight expansions of the down-leg. On the up-print, spot CVD ran{' '}
              <span className="dn-tag bull">+7,178</span> (no cb_cvd reset in this
              window) while futures CVD ran{' '}
              <span className="dn-tag bear">−996.5</span>, taker-net{' '}
              <span className="dn-tag bear">−992.4</span> and big-net{' '}
              <span className="dn-tag bear">−496.5</span> — a persistent spot bid with
              much lighter futures selling than 07-26 (which ran futures −3,619 / taker
              −3,646 / big −3,534). OI down + spot bid winning + futures covering
              lightly is a <span className="dn-em">short-covering / deleveraging
              shape</span>: the price climbed as shorts covered and longs thinned, not
              because fresh demand stacked OI. Perp still trades a{' '}
              <span className="dn-tag bear">−$38.72 discount</span> to spot at the snap
              (1h mean −$59.46, 4h mean −$60.28, 24h mean −$59.08, range −$231.87 /
              −$15.46 — basis never went premium across the 24h), consistent with a
              cash/spot-led bid rather than a futures-led leverage chase. 1-min
              aggressor skew snap <span className="dn-tag bear">−9.8</span> (1h mean
              −3.06, range −42.9 / +23.7) — a mild sell-aggressor tilt into the snap.{' '}
              <span className="dn-em">Price up + OI down + spot bid + light futures
              cover is a cleaner up-print than 07-26&rsquo;s distribution — but it is a
              short-covering reclaim, not demand-led, and the OI contraction is
              precisely what the scout&rsquo;s &ldquo;buyers behind the OI&rdquo; leg
              is NOT.</span>
            </p>

            <p>
              Smart money is the standout again, and again to the bearish side of the
              read.{' '}
              <span className="dn-signal">
                The buyer of record trimmed its net-long a third straight day and did
                it by adding shorts
              </span>. SM net is <span className="dn-tag bull">+2,743</span> (long
              13,029.90 − short 10,286.74 = +2,743.16) vs the 24h-ago{' '}
              <span className="dn-tag">+5,093</span> — a{' '}
              <span className="dn-tag bear">Δnet −2,350 (−46.14%)</span> (|+2,743.16 −
              (+5,092.88)| / 5,092.88 = 46.14%). The decomposition is hostile to the
              reclaim: <span className="dn-tag bear">Δlong −446.2</span> (longs barely
              touched) but <span className="dn-tag bear">Δshort +1,903.5</span> (shorts
              added materially). SM did not sell its longs into the bounce — it{' '}
              <em>overlaid a short</em>. Net peaked{' '}
              <span className="dn-tag">+5,618 @ 07-26 14:36 BJ (06:36Z)</span> and bled
              straight down to a <span className="dn-tag bear">+2,684 trough @ 07-27
              07:46 BJ (23:46Z 07-26)</span> near the snap — the thinnest net-long
              since the 07-21 06:36Z cross, though still continuously positive (the
              buyer-of-record leg has not flipped, only thinned).{' '}
              <span className="dn-em">The one hard leg the recovery was built on has
              now used both the first up-close (07-25, cut −30.25%) and the cap-reclaim
              up-close (07-26, cut −46.14% by adding shorts) to reduce conviction. A
              reclaim the smart-money buyer is fading is a reclaim to respect, not to
              chase.</span>
            </p>

            <p>
              The leverage and crowding reads split.{' '}
              <span className="dn-signal">
                Funding re-heated while retail de-crowded to the least-crowded read of
                the recovery
              </span>: live funding <span className="dn-tag">+6.72% ann</span> (raw
              0.006134 × 1095), 24h mean{' '}
              <span className="dn-tag bear">+4.24% → +6.24% ann</span> (a re-heat off
              the 07-26 cooling), max{' '}
              <span className="dn-tag bear">+10.24% ann (0.009348 field, 1 / 1441 rows
              @ 07-26 20:35 BJ / 12:35Z)</span>, min +3.65%, and{' '}
              <span className="dn-tag">0 / 1441 negative rows</span> — longs still pay
              shorts across the whole window, and pay more than yesterday. But retail{' '}
              <span className="dn-tag bull">mkt_long_pct de-crowded 64.23 → 60.92</span>{' '}
              (24h high 64.51 at 07-26 09:11 BJ / 01:11Z, baseline 64.23, low 60.92 at the snap) — off the 07-24
              recovery high 65.93, the thinnest retail long of the whole leg.{' '}
              <span className="dn-em">Funding rising while the retail long count falls
              is a mixed leverage signal: the crowd is thinning but the longs that
              remain are paying up. Combined with SM adding shorts, the leverage that
              is left on the long side is neither retail-broad nor smart-money-backed —
              it is a narrower, more-levered long paying carry into a cap reclaim.</span>
            </p>

            <p>
              Windowed flow confirms the spot-led, short-covering shape. 24h: price{' '}
              <span className="dn-tag bull">+1.33%</span>, OI{' '}
              <span className="dn-tag bull">−3,075.5 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +7,178</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −996.5</span>, big-print{' '}
              <span className="dn-tag bear">−496.5 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−992.4</span> —{' '}
              <span className="dn-em">spot bought hard into an up-print with OI
              shrinking; the +1.33% printed on covering + cash bid, not fresh long
              stacking</span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bull">+0.85%</span>, OI{' '}
              <span className="dn-tag bull">−2,476.2 BTC</span>, spot CVD{' '}
              <span className="dn-tag">Δ +236.7</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −320.0</span>, big-print{' '}
              <span className="dn-tag bull">+90.4 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−314.4</span> — the bulk of the OI drop
              came in the last 4h as price pushed to the 24h high. 1h: price{' '}
              <span className="dn-tag bear">−0.36%</span>, OI{' '}
              <span className="dn-tag bull">−706.8 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −477.9</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −445.3</span>, taker-net{' '}
              <span className="dn-tag bear">−466.2</span> —{' '}
              <em>spot and futures both offered into the snap as price came off the
              $65,530 high; the last hour is a pullback with OI still bleeding</em>.
              The 24h is the cleanest cover-and-cash-bid shape of the lineage, but the
              1h shows the bounce pulling back off its high with OI still contracting —
              a short-covering push losing its first bit of steam.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF softened to 4 long / 3 short / 3 neutral — HTF bearish, short-term bounce · fast frames OVERBOUGHT (RSI 71–77, top-div cluster, 4h ⚡TD9 SELL) · fresh 1w water-down golden cross + 1M ⚡TD9 BUY + 3d/1w bottom-div cluster · cap reclaimed but overhead still capped</span>
            </h2>

            <p>
              <span className="dn-signal">
                The engine frames confirm the bounce but are stretched, and the slow
                frames are building a higher-timeframe bottoming signature under a
                still-bearish structure
              </span>. The 00:01Z scan reads{' '}
              <span className="dn-tag">4 long / 3 short / 3 neutral</span> across 10
              TFs with the net &ldquo;HTF bearish · short-term bounce&rdquo; and a
              flagged bottom-divergence cluster on 3d/1w — a softening from 07-26&rsquo;s
              1 long / 4 short / 5 neutral. Fast frames confirmed and are now
              overbought: 15m RSI <span className="dn-tag bull">71.6</span> (water-up
              golden 10b, above cloud), 30m RSI{' '}
              <span className="dn-tag bull">76.9</span> (golden 5b, above), 1h RSI{' '}
              <span className="dn-tag bull">76.6</span> (water-down golden 46b, above 3b)
              — three overbought fast frames feeding the top-divergence cluster
              (15m/30m/1h/1d). The 4h printed a fresh{' '}
              <span className="dn-tag bear">⚡ TD9 SELL at $65,347</span> (overbought
              reversal hint) with RSI 59.5, in cloud 64.7k–65.8k. Mid frames rolled
              the other way: <span className="dn-tag bear">8h water-up death cross
              11b</span> (RSI 55.6), <span className="dn-tag bear">12h water-up death
              cross 6b</span> (RSI 56.3) — the engine bounce has not carried the
              8h/12h. The slow frames are the interesting tell: a fresh{' '}
              <span className="dn-tag bull">1w water-down golden cross (1 bar ago)</span>,
              a <span className="dn-tag bull">3d water-down golden cross 5b</span>, a{' '}
              <span className="dn-tag bull">1M ⚡ TD9 BUY at $65,346</span> (oversold
              reversal hint), and the 3d/1w bottom-divergence cluster — but 3d and 1w
              both remain below cloud (3d ↑75.3k 18b, 1w ↑93.8k 26b) and the 3d is TD
              Sell 8 → 9? (one bar from a fresh TD9 sell). The regime tag reads{' '}
              <span className="dn-tag">5/9 cycle-reversal (JT&lt;0) — mean-reversion /
              bounce-favoring, trend-following cautioned</span>.{' '}
              <span className="dn-em">
                Read straight: the bounce is real and confirmed on the engine, but it
                is overbought on the fast frames (RSI 76 + 4h TD9 SELL), unconfirmed by
                the mid frames (8h/12h death crosses), and the slow-frame bottoming
                divergence (3d/1w) is building under a structure that is still below
                cloud. This is a stretched relief bounce with an HTF bottoming tell —
                not yet a structural turn.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">65,346</td><td className="num bull">71.6</td><td className="bull">golden (water-up) 10b</td><td className="bull">above ↓64.7k 43b</td><td>Buy 3</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">65,347</td><td className="num bull">76.9</td><td className="bull">golden (water-up) 5b</td><td className="bull">above ↓64.4k 48b</td><td>Sell 7</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">65,339</td><td className="num bull">76.6</td><td className="bull">golden (water-dn) 46b</td><td className="bull">above ↓64.7k 3b</td><td>Sell 4</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">65,347</td><td className="num">59.5</td><td className="bull">golden (water-dn) 4b</td><td className="neut">in cloud 64.7k–65.8k 4b</td><td>⚡ TD9 SELL</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">65,346</td><td className="num">55.6</td><td className="bear">death (water-up) 11b</td><td className="bull">above ↓63.8k 54b</td><td>Sell 5</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">65,339</td><td className="num">56.3</td><td className="bear">death (water-up) 6b</td><td className="bull">above ↓62.4k 26b</td><td>Sell 2</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">65,339</td><td className="num">54.9</td><td className="neut">—</td><td className="neut">in cloud 61.8k–70.1k 7b</td><td>Sell 1</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">65,346</td><td className="num">47.3</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑75.3k 18b</td><td>Sell 8 → 9?</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">65,346</td><td className="num">40.6</td><td className="bull">golden (water-dn) 1b</td><td className="bear">below ↑93.8k 26b</td><td>Sell 3</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">65,346</td><td className="num">44.5</td><td className="neut">—</td><td className="bull">above</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 08:01 BJ scan (00:01Z; rolling latest
                    file, archived verbatim at
                    /opt/desk-note/snapshots/2026-07-27-0006/). Header alerts:{' '}
                    <em>1w water-down golden cross (1 bar ago)</em>,{' '}
                    <em>4h ⚡ TD9 SELL printed at $65,347 (overbought reversal hint)</em>,{' '}
                    <em>1M ⚡ TD9 BUY printed at $65,346 (oversold reversal hint)</em>,{' '}
                    <em>3d TD8 Sell — 1 bar from TD9</em>. Scan spot $65,347, 24h
                    +1.58% (00:01Z MTF scan; the live-tape anchor at 00:06Z shows
                    +1.33% on the same 24h window — the 5-minute gap and the pullback
                    off the $65,530 high account for the 0.25pt difference), 24h H/L
                    $65,555 / $64,256 (the MTF scan&rsquo;s own 00:01Z window; the
                    live-tape 00:06Z range in the prose above is $65,530 / $64,294 — the
                    ~$25 / ~$38 deltas are the 5-minute source gap, live tape
                    authoritative), qVol $4.27B. Closes are in-progress bars; treat
                    every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the cap reclaim and the overhead cap. Spot
              $65,251 sits{' '}
              <span className="dn-tag bull">+0.29% above D-EMA50 $65,062</span> — the
              failed cap now reclaimed as pivot — above the reclaimed{' '}
              <span className="dn-tag bull">D-SMA20 $64,418 (+1.29%)</span>,{' '}
              <span className="dn-tag bull">D-EMA20 $64,478 (+1.20%)</span> pair and
              the <span className="dn-tag bull">D-SMA50 $63,328 (+3.04%)</span>, which
              sits just above the settled floor as the nearest computable support.
              Overhead in order: <span className="dn-tag bear">D-EMA100 $67,731
              (−3.66%)</span> — the working first target, but the dealer $66k–$72k
              call-wall band sits in between —{' '}
              <span className="dn-tag bear">D-SMA100 $69,569 (−6.21%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,778 (−6.49%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $70,231 (−7.09%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $70,317 (−7.20%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $70,617 (−7.60%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $72,009 (−9.38%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $73,425 (−11.13%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $73,519 (−11.25%; seed)</span>.
              Still overhead (seed): <span className="dn-tag bear">W-EMA200 $67,380
              (−3.16%; seed)</span> seeds from the 200W band but prints above spot, so
              it is resistance here, not support. Below spot: the settled 200W floor{' '}
              <span className="dn-tag bull">$63,311 (+3.06%)</span> anchors the downside. Far above and disused: W-SMA150 $76,683 (−14.91%),
              W-EMA50 $79,187 (−17.60%), W-EMA100 $79,301 (−17.72%), W-SMA50 $85,552
              (−23.73%), W-SMA100 $88,674 (−26.41%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-27 00:05Z (close $65,254.70);
                offsets recomputed against live spot $65,251.07. Displayed MA levels
                are $-rounded; offsets computed from exact series values. W-SMA200 is
                non-computable from the 2023–2026 MA subset (187 weekly bars) while
                W-SMA150 $76,683 IS computable but sits far above and disused; the
                W-EMA150 $73,519 and W-EMA200 $67,380 lines seed from
                available history and are reported as such; the 200W cycle floor
                $63,311 comes from the full-history glob / trap-watch state (see
                manifest). Daily closes: 07-21 $66,522.40, 07-22 $66,082.00, 07-23
                $65,069.60, 07-24 $64,116.50, 07-25 $64,338.10, 07-26 $65,375.10,
                07-27 (in-progress) $65,254.70 — two consecutive up-closes, the second
                back above the D-EMA50 cap.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book re-gammaed DEEPER positive · +191.1M headline / +211.84M rollup (was +131.5M / +151.83M on 07-26) · flip $62,632 (spot +4.18% above) · $66k–$72k call-wall band caps overhead · 31JUL +122.79M dominant, wholly-positive strip</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book got deeper net-long-gamma into the reclaim — the
                deepest of the recovery
              </span>. Headline aggregate GEX is{' '}
              <span className="dn-tag bull">+191.1M / 1%</span> (was +131.5M on 07-26),
              with the by-expiry rollup at{' '}
              <span className="dn-tag bull">+211.84M</span> (= gex_summary.json net_gex
              $211,840,285, was +151.83M on 07-26) — a ~+20.74M non-reconciling
              headline-vs-rollup gap, disclosed per DN-003 lineage (the rollup again
              sits ABOVE the headline, same sign as the 07-25/07-26 gaps). The 0-γ flip
              moved <span className="dn-tag">$62,205 → $62,632 (+$427)</span>, and spot
              $65,251 sits <span className="dn-tag bull">+4.18% above flip</span> on
              spot-denominated math (65,251.07 / 62,632 − 1 = +4.181%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads{' '}
              <span className="dn-tag bull">+4.7% off its Deribit-index $65,571</span>{' '}
              ($320 above live spot), which is +4.69% (65,571 / 62,632 − 1 = +4.692%) —
              both references positive, spot well above the flip on both. The wall map
              is a band of positive-gamma call resistance overhead:{' '}
              <span className="dn-tag bull">$70k +68.44M</span> (heaviest wall),{' '}
              <span className="dn-tag bull">$72k +37.87M</span>,{' '}
              <span className="dn-tag bull">$68k +26.44M</span>,{' '}
              <span className="dn-tag bull">$66k +19.05M</span>,{' '}
              <span className="dn-tag bull">$67k +16.17M</span>,{' '}
              <span className="dn-tag bull">$69k +11.80M</span>,{' '}
              <span className="dn-tag bull">$80k +9.78M</span>, with spot sitting in a
              positive-support pocket between{' '}
              <span className="dn-tag bull">$65k +9.07M</span> and{' '}
              <span className="dn-tag bull">$65.5k +8.19M</span>, and the only notable
              negative below at <span className="dn-tag bear">$60k −15.60M</span>
              {' '}(crash-put residual).{' '}
              <span className="dn-em">
                The $66k–$72k band sums to roughly +180M of positive-gamma call
                resistance directly overhead — the dealer book is structurally bid
                into a fade and heavily offered into a squeeze, so a chase-up runs
                straight into dealers selling gamma. The reclaim cleared the $65k pocket
                but the real cap is the call-wall band, not the D-EMA50.
              </span>{' '}
              By expiry the strip is wholly positive with no near-dated amplifier: 27JUL
              0.3DTE <span className="dn-tag bull">+10.98M</span> settles at 08:00Z today
              (~8h after the snap, positive, no vol event), then 28JUL 1.3 +2.97M, 29JUL
              2.3 +1.49M, 30JUL 3.3 +1.32M, and{' '}
              <span className="dn-tag bull">31JUL 4.3 +122.79M</span> the dominant
              chunk, then 7AUG 11.3 +34.06M, 14AUG 18.3 +2.84M, 28AUG 32.3 +23.01M,
              25SEP 60.3 +6.06M (the listed front strip through 25SEP totals +205.52M;
              the three back expiries 25DEC +4.61M / 26MAR27 +1.17M / 25JUN27 +0.54M add
              +6.32M for the +211.84M rollup). No single expiry carries a negative
              amplifier; the dampening regime is intact and deepening.
            </p>

            <p>
              IV median across the option chain is{' '}
              <span className="dn-tag">42.5%</span> (was 42.0% on 07-26) against 30D
              close-to-close RV of <span className="dn-tag">30.12%</span> — chain-level
              richness <span className="dn-tag">~+12.4pt</span>. A chain-median across N
              instruments, <span className="dn-em">not</span> a tradable spread;
              expiry-/strike-level vega, skew and term structure remain not loaded; the
              vol read stays framework-only. RV methodology: 30D close-to-close,
              logret.std × √365 × 100 on the last 30 daily log returns (= 31 consecutive
              daily closes) anchored to parquet last bar 2026-07-27 00:05Z; the 29-return
              alt reads 30.42%.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Tier-1 daily rates FROZEN over the weekend (10Y 4.71%, TIPS 2.43%, HY OAS 2.77%) · rates/dollar EXTREME RISK-OFF vs credit/liquidity loose · DXY softened −0.24 to 101.24 · reclaim-long rates filter stays FALSE (10Y &gt; 4.55%)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape is frozen at weekend levels — rates and the dollar hold
                their EXTREME RISK-OFF regime reads, credit and liquidity stay loose,
                and the reclaim-long rates filter stays FALSE a fourth day
              </span>. Dashboard render is 2026-07-26 22:16Z, ~1.85h before the
              snapshot; FRED daily series did not re-print over 07-25 Sat / 07-26 Sun.
              US 10Y nominal <span className="dn-tag bear">4.71%</span>, regime z{' '}
              <span className="dn-tag bear">+2.66</span>, episodic z{' '}
              <span className="dn-tag bear">+2.34</span> — EXTREME RISK-OFF, unchanged
              vs the 07-26 note. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.43%</span>, regime z{' '}
              <span className="dn-tag bear">+3.05</span>, episodic z{' '}
              <span className="dn-tag bear">+2.06</span> — EXTREME RISK-OFF. 5Y5Y BE
              inflation <span className="dn-tag">2.28%</span>, 10Y breakeven{' '}
              <span className="dn-tag">2.26%</span>. HY OAS{' '}
              <span className="dn-tag bull">2.77%</span>, regime z{' '}
              <span className="dn-tag bull">−0.69</span>, episodic z +1.23 — still
              &ldquo;loose&rdquo; but the least-loose of the risk-on set. MOVE bond vol{' '}
              <span className="dn-tag stale">fetch-failed (unavailable)</span>. The
              offsets: DXY <span className="dn-tag bull">101.24 (−0.24 day)</span>,
              regime z +2.07 — EXTREME RISK-OFF regime but softened on the day; Fed net
              liquidity <span className="dn-tag bull">$5.917T</span> (no fresh weekly
              print), episodic z −2.47 — loose. US-JP 10Y spread{' '}
              <span className="dn-tag">2.04%</span>; USD/JPY{' '}
              <span className="dn-tag">163.6</span> (yen a touch softer over 7d). NFCI{' '}
              <span className="dn-tag bull">−0.552</span>, RISK-ON (stale 9d).{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) stays FALSE at
                4.71% — the same weekend-frozen level as 07-26, and 16bp from firing.
                The macro split is unchanged: rates and the dollar sit EXTREME RISK-OFF
                (tight) while credit (HY OAS loose) and liquidity (net liq loose, NFCI
                RISK-ON) stay loose. Nothing in this weekend render moves the scout&rsquo;s
                rates gate, and Monday&rsquo;s FRED re-print is the next thing that can.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>Macro indicator</th>
                  <th>level</th>
                  <th>Δ (last FRED move)</th>
                  <th>regime z</th>
                  <th>episodic z</th>
                  <th>read</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.71%</td><td className="num bear">+4.0bp</td><td className="num bear">+2.66</td><td className="num bear">+2.34</td><td className="bear">EXTREME RISK-OFF · frozen weekend</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.43%</td><td className="num bear">+4.0bp</td><td className="num bear">+3.05</td><td className="num bear">+2.06</td><td className="bear">EXTREME RISK-OFF · frozen</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.28%</td><td className="num">+1.0bp</td><td className="num">+0.77</td><td className="num bear">+2.51</td><td className="neut">episodic tag</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.26%</td><td className="num bull">−2.0bp</td><td className="num">−0.98</td><td className="num">+0.42</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.77%</td><td className="num bear">+9.0bp</td><td className="num bull">−0.69</td><td className="num">+1.23</td><td className="bull">loose · least-loose of the set</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.552</td><td className="num">−0.01</td><td className="num bull">−1.51</td><td className="num bull">−1.71</td><td className="stale">RISK-ON · stale 9d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">fetch failed · unavailable</td></tr>
                <tr><td>DXY</td><td className="num">101.24</td><td className="num bull">−0.24</td><td className="num bear">+2.07</td><td className="num">+0.57</td><td className="bear">EXTREME RISK-OFF · softer on day</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.917T</td><td className="num">−0.069T</td><td className="num">+0.56</td><td className="num bull">−2.47</td><td className="bull">loose · no fresh weekly print</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.04%</td><td className="num bear">+4.0bp</td><td className="num">−0.26</td><td className="num bear">+2.34</td><td className="neut">neutral</td></tr>
                <tr><td>USD/JPY</td><td className="num">163.6</td><td className="num">+0.78% (7d)</td><td className="num">—</td><td className="num">—</td><td className="neut">yen softer over 7d</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">(monthly)</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.241</span> — IDIOSYNCRATIC
              band (below the 0.25 threshold). BTC&rsquo;s top tie is{' '}
              <span className="dn-tag">NQ +0.510</span> (strengthened back above 0.5),
              then PLAT <span className="dn-tag">+0.434</span>, SP500{' '}
              <span className="dn-tag">+0.434</span>, SILVER{' '}
              <span className="dn-tag">+0.414</span>, TSLA{' '}
              <span className="dn-tag">+0.388</span>, JP225{' '}
              <span className="dn-tag">+0.388</span>, COPPER{' '}
              <span className="dn-tag">+0.371</span>, GOLD{' '}
              <span className="dn-tag">+0.363</span>, CL{' '}
              <span className="dn-tag">−0.317</span>, BRENT{' '}
              <span className="dn-tag">−0.299</span>. 7d performance is the tell:{' '}
              <span className="dn-tag bull">BTC +1.28%</span> LEADS the equity engine
              and megacap cluster, which rolled over hard — NQ{' '}
              <span className="dn-tag bear">−0.38%</span>, SP500{' '}
              <span className="dn-tag bull">+0.17%</span>, TSLA{' '}
              <span className="dn-tag bear">−17.16%</span>, GOOGL{' '}
              <span className="dn-tag bear">−7.36%</span>, META{' '}
              <span className="dn-tag bear">−6.36%</span>, AMZN{' '}
              <span className="dn-tag bear">−5.64%</span>, MSFT{' '}
              <span className="dn-tag bear">−2.45%</span> — while NVDA{' '}
              <span className="dn-tag bull">+2.99%</span> and JP225{' '}
              <span className="dn-tag bull">+0.70%</span> held. Metals and uranium
              outran BTC: SILVER <span className="dn-tag bull">+5.52%</span>, URNM{' '}
              <span className="dn-tag bull">+3.82%</span>, GOLD{' '}
              <span className="dn-tag bull">+2.24%</span>, COPPER{' '}
              <span className="dn-tag bull">+1.42%</span>, PALL{' '}
              <span className="dn-tag bull">+1.41%</span>, PLAT{' '}
              <span className="dn-tag bull">+1.09%</span>; energy mixed (CL +1.16%,
              BRENT −0.79%).{' '}
              <span className="dn-em">
                BTC now clearly leads the equity/megacap cluster over 7d (+1.28% vs NQ
                −0.38% = +1.66pt, with the whole megacap complex deeply red), but
                metals/uranium outran it — so per the DN-001 lineage this is a
                stocks-relative RS tell, not full-strip leadership. The macro pulse
                stays split (rates/dollar tight, credit/liquidity loose), and
                BTC&rsquo;s relative bid is coming from the equity side rolling over,
                not from a broad risk-on impulse
              </span>. JGB monthly 2.67% carries a monthly tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · cover-bounce scout DEFERRED (4th day) — price re-arm legs FIRED (D-EMA50 reclaim on up-close) but flow/rates legs FALSE (OI contracted, SM trimming + shorting, rates FALSE) · chase-short STOOD DOWN into the deepest positive-gamma book of the recovery · book FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                The one price condition the scout has waited five sessions for finally
                fired — and the position book failed to confirm it the same day
              </span>. The 07-26 note&rsquo;s re-arm gate was &ldquo;a D-EMA50 reclaim
              on an up-close with buyers behind the OI and smart money adding.&rdquo;
              Today the <em>reclaim-on-up-close</em> leg is TRUE for the first time
              (07-26 closed $65,375.10 above the D-EMA50 $65,062 cap; spot holds
              +0.29% above it). But the <em>buyers-behind-the-OI</em> leg is FALSE (OI
              contracted −2.86% on short-covering, not demand), the{' '}
              <em>smart-money-adding</em> leg is FALSE (SM trimmed −46.14% and added
              shorts +1,904), and the reclaim-long rates filter is FALSE (10Y 4.71%
              &gt; 4.55%). Two of the gate&rsquo;s legs fired on price; the two flow
              legs and the rates leg did not. The disciplined read is to hold the scout
              DEFERRED for the confirming flow the reclaim printed without: the trade
              book today is no scout entry, no chase-short, no fresh hedge — wait for
              the D-EMA50 hold to be JOINED by SM re-adding to net-long AND OI expanding
              on demand (or a rates print &lt; 4.55%) before scout-long, and do not
              chase-short into a re-gammaed positive book above a settled floor.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · DEFERRED · price legs FIRED, flow/rates legs FALSE · wait for the confirming flow</span>
              <div className="dn-trade-name">
                Cover-bounce scout — the D-EMA50 cap reclaimed on an up-close for the first time, but on OI contraction with the buyer of record trimming and adding shorts and rates FALSE
              </div>
              <div className="dn-thesis">
                The re-arm gate has finally met its price legs: 07-26 closed
                $65,375.10 above the D-EMA50 $65,062 cap that was the failed-reclaim
                level on 07-23/07-26, and spot holds $65,251 (+0.29% above). That is
                the completed up-close above the cap the scout was armed to buy. But
                the gate&rsquo;s AND-conditions are not met. (1) OI{' '}
                <em>contracted</em> −2.86% (−3,075.5 BTC) — the reclaim was
                short-covering / deleveraging, the opposite of the demand-fuelled
                OI-up the &ldquo;buyers behind the OI&rdquo; leg requires. (2) Smart
                money — still the buyer of record at net +2,743 — trimmed −46.14% and
                did it by <em>adding shorts +1,904</em> rather than cutting longs; the
                SM-adding leg is not just unmet, it inverted. (3) The reclaim-long
                rates filter stays FALSE at 10Y 4.71% (frozen weekend, 16bp from
                firing). The structural backdrop improved on the price (two up-closes,
                cap reclaimed, retail de-crowded, MTF softened to a bounce) but the
                position book is fading it. The disciplined entry stays deferred until
                the flow confirms the price.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm gate (price legs now TRUE)</span><span className="dn-lvl-v bull">D-EMA50 $65,062 reclaimed on the 07-26 up-close $65,375.10 · spot +0.29% above · TRUE for the first time of the recovery</span></div>
                <div><span className="dn-lvl-k">re-arm gate (flow/rates legs still FALSE)</span><span className="dn-lvl-v bear">OI expanding on buyers (FALSE — contracted −2.86%) AND SM adding to net-long (FALSE — trimmed −46.14%, added shorts +1,904) AND 10Y &lt; 4.55% (FALSE — 4.71% frozen)</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on the D-EMA50 hold being JOINED by SM re-adding net-long AND OI expanding on demand (or a rates print &lt; 4.55%): scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">daily close &lt; $63,311 (settled 200W floor — a close below ends the recovery read)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$66k–$72k call-wall band is the practical cap; working MA target D-EMA100 $67,731, take half into the $66k / $67k walls</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R on the confirming flow · not on the price reclaim alone</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> entry on confirmed re-arm ~$65,062 (D-EMA50 hold), stop
                $63,311 (settled floor) = ~$1,751 risk; working target D-EMA100 $67,731
                = ~$2,669 reward ≈ 1.52:1 — but the $66k–$72k call-wall band caps the
                path, so the realistic first target is the $66k / $67k walls and the
                R/R to those is thinner. <b>Hard rule:</b> the scout does not enter on
                the price reclaim alone. The reclaim printed on short-covering with the
                buyer of record adding shorts — a reclaim the smart money is fading. The
                confirming leg is SM re-adding net-long on OI that expands with the
                price, not a squeeze that the smart-money short is leaning against. A
                D-EMA50 hold with SM still trimming is a fade candidate, not a long.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · chase · STOOD DOWN · deepest positive-gamma book of the recovery · spot into the call-wall cap</span>
              <div className="dn-trade-name">
                Chase-short — stood down harder than 07-26: the dealer book re-gammaed deeper positive (+191.1M / +211.84M) and spot is climbing into the $66k–$72k call-wall band
              </div>
              <div className="dn-thesis">
                The bearish tape reads (SM adding shorts, futures/taker selling, fast
                frames overbought with a 4h TD9 SELL, mid-frame death crosses) tempt a
                chase-short into the reclaim — but the dealer structure stands it down.
                Aggregate GEX re-gammaed to +191.1M headline / +211.84M rollup (from
                +131.5M / +151.83M on 07-26), the deepest net-long-gamma of the
                recovery, with the flip at $62,632 (spot +4.18% above) and a
                wholly-positive expiry strip (31JUL +122.79M dominant, no near-dated
                negative amplifier). Spot is pushing into the $66k–$72k call-wall band
                (+180M of positive-gamma call resistance), where dealers sell gamma and
                dampen — a book that fades squeezes but also cushions fades. A chase-short
                into a deepening positive-gamma book above a settled floor has no
                structural tailwind.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">why stood down</span><span className="dn-lvl-v bear">dealer book deepest positive-gamma of the recovery (+191.1M / +211.84M) · flip $62,632 (spot +4.18% above) · $66k–$72k call-wall cap · wholly-positive strip, no near-dated amplifier</span></div>
                <div><span className="dn-lvl-k">what would re-arm a short</span><span className="dn-lvl-v bear">a fresh near-dated negative gamma chunk added inside the 28JUL–31JUL window AND spot rejecting the D-EMA50 back below $65,062 on a close, with SM extending shorts past net-flat</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no chase-short into the call-wall band above the settled floor on a positive-gamma book</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> the SM short-add and the overbought fast frames are
                real tape tells, but they are counter-trend signals inside a positive-gamma
                regime, not a short setup on their own. The chase-short only makes sense
                if the dealer book flips a near-dated chunk negative or spot loses the
                reclaimed D-EMA50 on a close — until then the positive-gamma book is the
                dominant structure and a chase-short is fighting it.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · reclaim-on-wrong-fuel · the price event fired, the confirming flow did not — the whole note turns on which one wins next</span>
              <div className="dn-trade-name">
                Reclaim quality — the D-EMA50 cap reclaimed on short-covering with the buyer of record fading it; the tell is whether SM re-adds on the hold or the short-cover exhausts and rolls back below the cap
              </div>
              <div className="dn-thesis">
                The recovery lineage has been gated on the D-EMA50 reclaim for five
                sessions; today it printed, but on the wrong internals. A cap reclaim
                on OI contraction with the smart-money buyer adding shorts is a
                short-covering markup, not a demand breakout — the two resolve
                differently. If SM re-adds to net-long on the D-EMA50 hold and OI turns
                up on demand, the reclaim converts to a real leg and the scout arms
                live. If the short-cover exhausts — funding is already re-heated, the
                fast frames are overbought, the 4h printed a TD9 SELL, and SM is leaning
                short — the reclaim rolls back below the D-EMA50 and the cap flips to
                resistance for a fourth time. The framework watches the SM net-long
                trajectory and the OI shape on the D-EMA50 hold as the deciding tells,
                not the price level alone.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">bull resolution</span><span className="dn-lvl-v bull">SM net-long re-expands off the +2,684 trough AND OI turns up on the D-EMA50 hold — the reclaim converts, scout arms live</span></div>
                <div><span className="dn-lvl-k">bear resolution</span><span className="dn-lvl-v bear">short-cover exhausts (funding re-heated, fast frames overbought, 4h TD9 SELL, SM leaning short) and spot loses the D-EMA50 $65,062 on a close — cap flips resistance a 4th time</span></div>
                <div><span className="dn-lvl-k">deciding tells</span><span className="dn-lvl-v">SM net-long trajectory (re-add vs continued trim/short) and OI shape (demand-up vs cover-driven-down) on the D-EMA50 hold — not the price level</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a reclaim the smart money is fading is a
                lower-quality reclaim than one it is buying, even at the same price. The
                lineage&rsquo;s edge has been to let the position book confirm the price,
                not to buy the level. Today the level printed and the book did not — so
                the framework holds the scout deferred and reads the next SM/OI prints
                as the resolution, not the next candle.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the D-EMA50 cap reclaimed on an up-close (price legs of the re-arm gate FIRED) · OI contracted, SM trimmed and shorted, rates FALSE (flow/rates legs FALSE) · scout DEFERRED for the confirming flow · chase-short stood down · book FLAT</span>
            </h2>

            <p>
              Of the 07-26 decision conditions: the re-arm gate&rsquo;s{' '}
              <em>D-EMA50 reclaim on an up-close</em> leg FIRED clean (07-26 closed
              $65,375.10 above the $65,062 cap, spot +0.29% above); the{' '}
              <em>buyers behind the OI</em> leg DID NOT FIRE (OI contracted −2.86% on
              short-covering); the <em>smart money adding</em> leg DID NOT FIRE (SM
              trimmed −46.14% and added shorts +1,904); the{' '}
              <em>reclaim-long rates filter</em> stayed FALSE (10Y 4.71% &gt; 4.55%,
              frozen weekend); the settled-floor stop DID NOT trigger (no close below
              $63,311 — spot +3.06% above); and the chase-short stayed stood down (book
              re-gammaed deeper positive). <em>The single price condition the recovery
              was gated on finally fired, the two flow conditions and the rates
              condition did not, and the scout stays deferred for the confirming
              flow.</em> The conditions today re-set around a reclaimed-but-unconfirmed
              cap, a trimming buyer of record, a deeper positive-gamma book, and a
              settled floor:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>D-EMA50 reclaim on an up-close (re-arm price leg)</td><td className="bull">FIRED — 07-26 close $65,375.10 &gt; D-EMA50 $65,062; spot +0.29% above</td><td>price leg of the gate met for the first time; wait for the flow legs before scout entry</td></tr>
                <tr><td>Buyers behind the OI (re-arm flow leg)</td><td className="bear">FALSE — OI contracted −2.86% (−3,075.5 BTC) on short-covering, not demand</td><td>no scout long: the reclaim is a cover markup, not a demand breakout</td></tr>
                <tr><td>Smart money adding to net-long (re-arm flow leg)</td><td className="bear">FALSE — SM trimmed −46.14% to +2,743, added shorts +1,904 (Δlong −446)</td><td>no scout long: the buyer of record is fading the reclaim, not backing it</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">FALSE — 10Y 4.71% &gt; 4.55% (frozen weekend, 16bp from firing)</td><td>standalone filter false; Monday FRED re-print is the next thing that can move it</td></tr>
                <tr><td>Cover-bounce scout (long)</td><td className="bull">D-EMA50 hold JOINED by SM re-adding net-long AND OI expanding on demand (or 10Y &lt; 4.55%)</td><td>scout long 0.2R, stop $63,311, working target D-EMA100 $67,731 (capped by $66k–$72k call walls)</td></tr>
                <tr><td>Reclaim rolls back (bear resolution)</td><td className="bear">daily close &lt; D-EMA50 $65,062 with the short-cover exhausted and SM leaning short</td><td>cap flips resistance a 4th time; scout stays deferred, re-assess the down-leg</td></tr>
                <tr><td>Settled-floor stop</td><td className="bear">daily close &lt; $63,311 (200W W-SMA200 floor)</td><td>ends the recovery read; separate reassessment</td></tr>
                <tr><td>Chase-short re-arm</td><td className="bear">fresh near-dated negative gamma chunk (28JUL–31JUL) AND spot loses D-EMA50 on a close</td><td>only then a chase-short; not into the current deep positive-gamma book</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the short-covering reclaim of the D-EMA50 cap converts into a
                demand-led leg — SM re-adding to net-long on the hold with OI expanding
                on buyers — or whether it exhausts into the re-heated funding,
                overbought fast frames and the smart-money short lean, rolling spot back
                below $65,062 and flipping the cap to resistance a fourth time
              </span>. The price finally did what the recovery was gated on; the position
              book did not confirm it the same day. Until it does, this note runs as
              written: the scout is DEFERRED with its price legs met but its flow and
              rates legs FALSE, the chase-short is stood down into the deepest positive-gamma
              book of the recovery, the put-spread is not re-grown on a single frozen
              10Y leg, and the book stays FLAT above a settled floor. BTC leads the
              equity/megacap cluster over 7d, the MTF softened to a stretched bounce with
              an HTF bottoming tell, and the dealer book deepened its dampening — but the
              buyer of record is fading the reclaim, and that is the tell the desk reads
              next. The right read for the next 24h is{' '}
              <em>patient — the reclaim is real, the confirmation is not, and a reclaim
              the smart money is fading is one to respect, not to chase</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit — STAGE B verdict applied)
            </span>
            <b>Status:</b> v2 EN, promoted from v1 by STAGE C after the STAGE B codex
            hostile audit (verdict BLOCK-CRITICAL — 1 CRITICAL + 2 MAJOR + 3 MINOR;
            record at audits/2026-07-27-desk-note.md). Every finding was fixed in place
            and grep-closed across the full EN file before promotion; per-finding
            grep-closure (pattern searched · hits before · hits after · state):{' '}
            <b>DN-001</b> (CRITICAL — stale 200W floor propagating into stop/risk/R/R):
            patterns &ldquo;63,078.14&rdquo; (3→0, now 63,311.02), &ldquo;$63,078&rdquo;
            (12→0, now $63,311), &ldquo;+3.44%&rdquo; (5→0, now +3.06%),
            &ldquo;2026-07-20&rdquo; recompute date (2→0, now 2026-07-27),
            &ldquo;2026-07-19&rdquo; last-completed-week (2→0, now 2026-07-26),
            &ldquo;64,694&rdquo; week close (1→0, now $65,375.10),
            &ldquo;consecutive_above 3&rdquo;/&ldquo;three consecutive&rdquo; (2→0, now
            4/four), &ldquo;1.35:1&rdquo; (2→0, now 1.52:1), &ldquo;1,984&rdquo; risk
            (1→0, now ~$1,751) — RESOLVED (floor is the 2026-07-26 completed week
            W-SMA200 $63,311.02, consecutive_above 4, spot +3.06% above; R/R entry
            $65,062 / stop $63,311 / target $67,731 = ~$1,751 risk : ~$2,669 reward =
            1.52:1). <b>DN-002</b> (MAJOR — OI expansion count): patterns
            &ldquo;four-expansion&rdquo; and &ldquo;four straight expansion&rdquo; (3→0,
            now three) — RESOLVED (07-24 +2,221.6 / 07-25 +1,590.5 / 07-26 +1,425.6 is a
            three-expansion streak reversed by the 07-27 −3,075.5 contraction; the
            &ldquo;four-session down-leg&rdquo; is a distinct price-session claim, left
            as-is). <b>DN-003</b> (MAJOR — W-SMA150 computability): pattern
            &ldquo;W-SMA150 / W-SMA200 non-computable&rdquo; and variant
            &ldquo;W-SMA150/200 non-computable&rdquo; (3→0) — RESOLVED (only W-SMA200 is
            non-computable at 187 weekly bars; W-SMA150 $76,683 IS computable but sits
            far above / disused). <b>DN-004</b> (MINOR — by-expiry rollup): added the
            back-strip reconstruction (front strip through 25SEP +205.52M; 25DEC +4.61M
            / 26MAR27 +1.17M / 25JUN27 +0.54M = +6.32M → +211.84M rollup) — RESOLVED.
            <b>DN-005</b> (MINOR — retail 24h high timestamp): &ldquo;24h high 64.51 at
            the baseline&rdquo; (2→0) — RESOLVED (high 64.51 at 07-26 09:11 BJ / 01:11Z;
            baseline 64.23). <b>DN-006</b> (MINOR — W-EMA200 mislabeled below-spot with a
            bull class) — RESOLVED (moved to the overhead/seed list, styled bear, framed
            as resistance at −3.16%). The supplementary ask-deepseek recompute was
            adjudicated, not auto-applied: its CRITICAL duplicates DN-004 (expiry sum,
            now reconstructed); its MAJOR (two 24h H/L ranges) is reconciled inline as a
            disclosed 5-minute source gap (MTF-scan $65,555 / $64,256 at 00:01Z vs
            live-tape $65,530 / $64,294 at 00:06Z, live tape authoritative). Snapshot
            anchor 2026-07-27 00:06Z (live tape t == &ldquo;07-27 08:06&rdquo; BJ);
            rolling sources archived at /opt/desk-note/snapshots/2026-07-27-0006/ for
            re-audit against the same bytes. Self-contained figures a downstream audit
            should recompute: funding × 1095 (live +6.72% ann from raw 0.006134, 24h
            mean +6.24%, max +10.24% ann from 0.009348, 0 / 1441 negative — no ×100
            recurrence); the GEX dual-reference sign (flip $62,632, spot +4.18% / idx
            +4.69%, both positive, tile spot side); the headline-vs-rollup gap (+191.1M
            headline vs +211.84M rollup = ~+20.74M, DN-003 lineage); the SM cut fraction
            (|+2,743.16 − (+5,092.88)| / 5,092.88 = 46.14%, Δlong −446.2 / Δshort
            +1,903.5); the full MA matrix vs live spot $65,251.07 off parquet
            2026-07-27 00:05Z close $65,254.70 (D-EMA50 $65,062 +0.29% reclaimed cap,
            settled 200W floor $63,311 +3.06%, W-SMA200 non-computable at 187 weekly
            bars while W-SMA150 $76,683 is computable but disused); 30D RV 30.12% (30 returns / 31 closes; 29-return alt 30.42%);
            the R/R (entry $65,062, stop $63,311, target $67,731 → 1.52:1); cross-asset
            (|r| 0.241, BTC +1.28% vs NQ −0.38% = +1.66pt) and macro Tier-1 (10Y 4.71%,
            HY OAS 2.77%, DXY 101.24, Fed net liq $5.917T) vs source; claims-vs-loaded-data
            (NTT / max-pain / strike-IV / BTC-NQ framework-only; JGB monthly do not lean;
            IV chain-median not a tradable spread; MOVE fetch-failed); the requireViewer
            gating pattern (path /desk/2026-07-27, first statement). Post codex hostile
            audit. EN/ZH parity maintained (ZH companion written forward in native CN
            voice at /zh/desk/2026-07-27 with the same numbers and caveats).
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among
            principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a
            single atomic snapshot (2026-07-27 00:06Z) with section-level provenance
            disclosed in the manifest band above; the macro Tier-1 panel render is
            2026-07-26 22:16Z (~1.85h before snapshot) with FRED daily rates frozen over
            the weekend, and some inputs are explicitly stale, unavailable, or pending
            and flagged as such. Levels, sizes, and conditions are illustrative of the
            desk&rsquo;s process, not standing recommendations. Past correlation, gamma,
            and positioning patterns do not bind future tape. Derivatives carry the risk
            of total loss and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The cap reclaimed at last — but on short-covering, with the buyer of
                record adding shorts and rates still FALSE. The price fired; the book
                did not confirm. A reclaim the smart money is fading is one to respect,
                not to chase. Patient.
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
            v2 · 2026-07-27 00:06Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
