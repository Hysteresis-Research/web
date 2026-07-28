import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-28 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-28',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-28' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260728() {
  await requireViewer('/desk/2026-07-28');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-28 · v2</span>
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
              <span className="dn-big">$63,663</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−2.43%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-28 00:06Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-28 00:06Z (snapshot pin, t == &ldquo;07-28 08:06&rdquo; BJ)</td>
                  <td className="dn-flag">
                    fresh · 1-min · anchor pinned to the 00:06Z row (BJ 08:06) for
                    reproducibility · file tail advances live under-foot · 24h-window
                    convention: headline deltas use the same-clock prior-day baseline
                    t == &ldquo;07-27 08:06&rdquo; BJ (endpoint minus the 24h-ago row,
                    exactly the 07-27 note&rsquo;s anchor); the 4h/1h sub-window flow
                    blocks use prior-row inclusive baselines (04:05 / 07:05 BJ through the
                    08:06 pin), NOT exact same-clock 04:06 / 07:06 endpoints — disclosed in
                    the flow section; funding/flow row-statistics span the 1,441-row
                    window; premium means exclude null rows
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-28 08:01 BJ scan (00:01Z)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · archived verbatim at
                    /opt/desk-note/snapshots/2026-07-28-0006/ · ~5-min stale vs
                    snapshot anchor · in-progress bars · scan spot $63,706, 24h −2.52%
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-28 00:01Z snapshot</td>
                  <td className="dn-flag">
                    ~5-min stale · Deribit idx $63,894 vs live $63,663 · median IV
                    43.2% · 836 instruments · headline aggregate +82.8M vs by-expiry
                    rollup +69.40M (= gex_summary.json net_gex $69,396,518) — a
                    ~−13.4M non-reconciling source-panel gap disclosed per DN-003
                    lineage, and this run the rollup sits BELOW the headline (the
                    opposite sign of the 07-25/07-26/07-27 gaps, where the rollup ran
                    above)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-28 00:01Z
                  </td>
                  <td className="dn-flag">~5-min lag · 7d 1h bars · 22 assets · 166 rows · archived</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-27 22:16Z render</td>
                  <td className="dn-flag">
                    ~1.85h render lag · Monday FRED daily re-print landed (weekend thaw):
                    10Y ticked −2bp to 4.71% → 4.69%, TIPS flat 2.43%, 5Y5Y −4bp to
                    2.24%, 10Y breakeven −5bp to 2.21%, HY OAS +2bp to 2.79% · MOVE is
                    BACK after 07-27&rsquo;s fetch-fail and firmed to 77.2 (+6.33) · DXY
                    unchanged 101.24 · Fed net liq $5.917T (no fresh weekly print)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-28 00:05Z (close $63,724.60)</td>
                  <td className="dn-flag">
                    same-minute anchor · offsets recomputed vs live spot $63,663.41 ·
                    W-SMA200 non-computable from the 2023–2026 MA subset (188 weekly
                    bars); W-SMA150 IS computable at $76,625 but sits far above / disused
                    — the 200W cycle floor itself is available from full history / the
                    trap-watch state, see the row below
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W support watch</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · last recompute 2026-07-27 00:11Z (NOT re-run today)</td>
                  <td className="dn-flag">
                    200W cycle floor AVAILABLE — the trap-watch state file was last
                    recomputed 2026-07-27 (yesterday) and carries the last completed week
                    2026-07-26 close $65,375.10, W-SMA200 $63,311.02, consecutive_above 4
                    (streak from 2026-07-05). An independent full btcusdt_1m_*.parquet glob
                    recompute today (361 weekly bars, 2019–2026) reproduces the same
                    completed-week W-SMA200 $63,311.02 and shows the in-progress week
                    (ending 2026-08-02) W-SMA200 climbing to $63,534 — the floor is rising
                    fast toward spot. Settled floor $63,311 (spot +0.56% above); the
                    computable D-SMA50 $63,311 coincides to the dollar as the nearest
                    MA-subset support
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
              <span className="dn-v">+4.29%</span>
              <span className="dn-src">live · 24h mean +6.82% (was +6.24% on 07-27 — re-heated a 2nd day) · max +9.18% ann (0.00838 field, 1 / 1441 rows @ 07-27 13:47Z) · min +3.99% · 0 / 1441 negative rows · funding × 1095 (raw 0.003915)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">re-heated through a −2.43% down-print</span>
              <span className="dn-src">range +3.99% / +9.18% · mean +6.24% → +6.82% ann · still 0 / 1441 negative — longs kept paying up while price fell, leverage staying on the long side into the roll-back</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+1.11% (+1,161.6 BTC)</span>
              <span className="dn-src">live · 104,428.2 → 105,589.8 · reverses the 07-27 −2.86% contraction back to expansion, but on a DOWN print with the aggressor tape selling (spotCVD −1,893.5 / futCVD −944.1 / taker −974.2 / big −628.1) — distribution / longs caught into weakness, not the clean demand-fuelled up-expansion the scout wants</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">62.77 / 37.23</span>
              <span className="dn-src">live_db `mkt_long_pct` · RE-CROWDED 60.92 → 62.77 (24h low 59.54 at 07-27 14:03Z, high 62.77 at 07-28 00:03Z near the snap) — reversed the 07-27 de-crowd, the retail long is stacking back in on the dip</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+8,620 (net LONG, expanded +214%)</span>
              <span className="dn-src">live · long 15,998.26 − short 7,378.49 = +8,619.77 · continuous net-long since the 07-21 06:36Z cross and now the fattest of the current 24h rebound (net peaked +8,941 @ 07-27 23:15Z near the snap, trough +1,997 @ 07-27 03:51Z) — still below the 07-24 recovery peak +10,651, the buyer of record flipped from a 3-day trim to aggressive dip-buying</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 24h-ago</span>
              <span className="dn-v bull">+2,743 → +8,620 (+5,877, +214.23%)</span>
              <span className="dn-src">|Δ|/prior_net = 5,876.61 / 2,743.16 = 214.23% · Δlong +2,968.4 / Δshort −2,908.3 — added longs AND cut shorts, the clean SM-adding shape the re-arm gate specifies, but printed into a down-close (buying the dip), not behind an up-close reclaim</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.2% / 31.51%</span>
              <span className="dn-src">GEX median IV · chain-median across N instruments, not a tradable spread · 30D close-to-close RV = logret.std × √365 × 100 on 30 daily returns (parquet last bar 00:05Z) · ~+11.7pt chain richness · 29-return alt 31.89%</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+1.70% (above)</span>
              <span className="dn-src">flip $62,599 · vs live spot $63,663 (+1.70%; 63,663.41/62,599.29 − 1 = 1.700%) / GEX file Deribit idx $63,894 (+2.07%; 63,894/62,599.29 − 1 = 2.068%) — both refs positive, tile uses spot side · aggregate +82.8M headline / +69.40M rollup · de-gammaed HARD from +191.1M / +211.84M on 07-27 and grew a fresh near-dated negative cluster after 07-27&rsquo;s wholly-positive strip</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The D-EMA50 cap reclaim rolled back on a completed down-close — the bear
                resolution the 07-27 note named fired, the cap flipped to resistance a
                fourth time — but the position book inverted: the buyer of record that
                was fading the reclaim yesterday flipped to buying the dip hard
              </span>. 07-27 closed{' '}
              <span className="dn-tag bear">$63,720.80</span> (−$1,654.30 vs 07-26&rsquo;s
              $65,375.10), back below the{' '}
              <span className="dn-tag bear">D-EMA50 $64,952 cap</span> it had reclaimed
              for exactly one session, and spot prints{' '}
              <span className="dn-tag bear">$63,663 (−2.43% on 24h)</span>,{' '}
              <span className="dn-tag bear">−1.98% below the cap</span>. That is the bear
              resolution — the short-cover reclaim exhausted into the re-heated funding,
              overbought fast frames and the smart-money short lean exactly as the prior
              note gated it. But the flow legs flipped the other way. Smart money —{' '}
              <span className="dn-em">still the buyer of record, net long{' '}
              <span className="dn-tag bull">+8,620</span> and continuous since the 07-21
              06:36Z cross — expanded its net-long +214.23%, adding longs (+2,968) AND
              cutting shorts (−2,908)</span>, the clean SM-adding shape the re-arm gate
              asked for. OI <span className="dn-tag bear">expanded +1.11% (+1,161.6
              BTC)</span>, reversing yesterday&rsquo;s contraction — but on a down-print
              with the aggressor tape selling across (spotCVD −1,893.5, futCVD −944.1,
              taker −974.2, big −628.1), so the expansion is distribution-shaped, longs
              caught into weakness, not the demand-fuelled up-expansion the scout wants.
              And the reclaim-long rates filter stayed{' '}
              <span className="dn-tag bear">FALSE</span> even on Monday&rsquo;s FRED thaw
              (10Y ticked −2bp to 4.69%, still above the 4.55% gate). So the gate has
              inverted since 07-27: <span className="dn-em">yesterday the price leg was
              TRUE and the flow/rates legs FALSE; today the SM-adding flow leg is TRUE
              while the price leg (up-close reclaim) is FALSE, the OI leg is
              distribution-shaped, and rates stay FALSE</span>. Two competing signals
              printed the same session — a lost cap and a dip-buying buyer of record —
              and they meet right on the floor: spot sits{' '}
              <span className="dn-tag bull">+0.56% above the settled 200W floor $63,311</span>,
              where the computable D-SMA50 $63,311 coincides to the dollar. Meanwhile the
              dealer book de-gammaed hard (+211.84M → +69.40M rollup) and grew its{' '}
              <span className="dn-em">fresh near-dated negative gamma cluster after
              07-27&rsquo;s wholly-positive strip</span> (28JUL −13.30M / 29JUL −4.37M /
              30JUL −0.51M) plus a $64k −11.99M pocket directly overhead (the $64k pocket
              returned/deepened vs 07-25&rsquo;s $64,000 −10.23M at-spot pocket) — the chase-short re-arm conditions are
              the closest to met of the whole leg. This note keeps the scout{' '}
              <span className="dn-em">DEFERRED and the book FLAT</span>: no scout long
              into a lost cap on a down-close with the OI distribution-shaped and rates
              FALSE, even with SM finally adding; and no chase-short into a settled floor
              the buyer of record is defending, even with the negative gamma appearing —
              the whole note now turns on whether $63,311 holds.
            </p>

            <p>
              BTC prints <span className="dn-tag">$63,663</span> live,{' '}
              <span className="dn-tag bear">−2.43%</span> on 24h — the first down-close
              since the two-day bounce — inside a{' '}
              <span className="dn-tag">$65,686.68 / $63,651.18</span> range (high @ 07-27
              13:43Z, low @ 07-27 23:10Z, the low printed into the snap).{' '}
              <span className="dn-signal">The one-session reclaim of the D-EMA50 cap has
              already given way</span>: 07-21 $66,522.40 → 07-22 $66,082.00 → 07-23
              $65,069.60 → 07-24 $64,116.50 → 07-25 $64,338.10 → 07-26 $65,375.10 (the
              lone reclaim close) →{' '}
              <span className="dn-tag bear">07-27 $63,720.80 (−$1,654.30)</span>, with the
              in-progress 07-28 close at parquet last-bar{' '}
              <span className="dn-tag">$63,724.60</span> holding just above the floor. The
              MA matrix has flipped back to a capped ladder: spot has lost the{' '}
              <span className="dn-tag bear">D-EMA20 $64,274 (−0.95%)</span> /{' '}
              <span className="dn-tag bear">D-SMA20 $64,414 (−1.17%)</span> pair it held
              yesterday, sits <span className="dn-tag bear">−1.98% below the reclaimed-then-lost
              D-EMA50 $64,952</span> (now overhead resistance a fourth time), and the only
              positive offset on the whole matrix is the{' '}
              <span className="dn-tag bull">D-SMA50 $63,311 (+0.56%)</span>, which sits
              exactly on the settled 200W floor.{' '}
              <span className="dn-em">
                The 200W cycle floor is available and confirmed this run: the trap-watch
                state (ma200w_trap_watch_state.json, last recomputed 2026-07-27 00:11Z —
                not re-run today) carries the last completed week 2026-07-26 at W-SMA200{' '}
                <span className="dn-tag bull">$63,311.02</span> with four consecutive
                weekly closes above it, and an independent full btcusdt_1m_*.parquet glob
                recompute today (361 weekly bars) reproduces the same $63,311.02 for the
                completed week while the in-progress week (ending 2026-08-02) climbs to{' '}
                <span className="dn-tag">$63,534</span>. So $63,311 is the settled floor
                (spot +0.56% above it, today&rsquo;s low $63,651 held +$340 above it) and
                the D-SMA50 $63,311 coincides to the dollar — a confluence support that
                is also rising fast toward spot.
              </span>{' '}
              The scout was ARMED on 07-22, moved DEFERRED on 07-24 when the D-EMA50
              reclaim first failed, held deferred through 07-25/07-26, saw its price legs
              fire on 07-27 with the flow legs failing, and today sees the price leg fail
              back while the SM-adding flow leg fires — the legs have never printed TRUE
              together. The book stays flat.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · the reclaim rolled back on a −2.43% down-close · OI re-expanded (+1.11%) but on distribution-shaped aggressor selling · SM flipped to BUYING THE DIP (+214.23%, added longs +2,968, cut shorts −2,908) · retail re-crowded to 62.77 · funding re-heated a 2nd day · perp still at a discount</span>
            </h2>

            <p>
              <span className="dn-signal">
                The tape sold the reclaim back while the smart-money buyer stepped in
                hard on the dip — a genuine split between price and the position book
              </span>. Spot fell −2.43% on the 24h with OI{' '}
              <span className="dn-tag bear">expanding +1,161.6 BTC (+1.11%)</span> —
              104,428.2 → 105,589.8 — reversing the 07-27 −2.86% contraction. On the
              down-print the aggressor tape sold across every channel: spot CVD ran{' '}
              <span className="dn-tag bear">−1,893.5</span> (no cb_cvd reset in this
              window), futures CVD <span className="dn-tag bear">−944.1</span>, taker-net{' '}
              <span className="dn-tag bear">−974.2</span> and big-net{' '}
              <span className="dn-tag bear">−628.1 (833 prints)</span> — price down + OI
              up + aggressor selling is a <span className="dn-em">distribution /
              longs-into-weakness shape</span>, the mirror image of yesterday&rsquo;s
              short-covering markup. Perp still trades a{' '}
              <span className="dn-tag bear">−$46.26 discount</span> to spot at the snap
              (1h mean −$55.67, 4h mean −$58.93, 24h mean −$63.56, range −$193.81 /
              +$24.89 — basis briefly premium once in the 24h but overwhelmingly discount),
              consistent with a cash/spot-led sell rather than a futures-led long chase.
              1-min aggressor skew snap <span className="dn-tag">−0.0</span> (1h mean
              +4.02, range −20.3 / +41.1) — flat into the snap after the overnight sell.{' '}
              <span className="dn-em">OI re-expanding on a down-print with the whole
              aggressor tape offered is precisely NOT the &ldquo;buyers behind the OI&rdquo;
              leg the scout needs; the SM positioning feed says buyers, but the executed
              flow says the sellers won the tape and the price fell.</span>
            </p>

            <p>
              Smart money is the standout again — and this time to the bullish side of the
              read.{' '}
              <span className="dn-signal">
                The buyer of record flipped from a three-day trim to aggressive dip-buying,
                more than tripling its net-long
              </span>. SM net is <span className="dn-tag bull">+8,620</span> (long
              15,998.26 − short 7,378.49 = +8,619.77) vs the 24h-ago{' '}
              <span className="dn-tag">+2,743</span> — a{' '}
              <span className="dn-tag bull">Δnet +5,877 (+214.23%)</span> (|+8,619.77 −
              (+2,743.16)| / 2,743.16 = 214.23%). The decomposition is the clean
              add-shape: <span className="dn-tag bull">Δlong +2,968.4</span> (longs added
              materially) AND <span className="dn-tag bull">Δshort −2,908.3</span> (the
              short overlay from yesterday cut back off). SM did not just add longs — it{' '}
              <em>unwound the short leg it built into the 07-26 reclaim</em> and stacked
              longs on the dip. Net peaked{' '}
              <span className="dn-tag bull">+8,941 @ 07-27 23:15Z</span> near the snap and
              troughed <span className="dn-tag">+1,997 @ 07-27 03:51Z</span> — the fattest
              of the current 24h rebound but still below the 07-24 recovery peak +10,651,
              continuously positive since the 07-21 06:36Z cross.{' '}
              <span className="dn-em">This is the SM-adding leg the re-arm gate has waited
              for all week — but it printed into a down-close that lost the D-EMA50 cap,
              on a distribution-shaped OI expansion, with rates FALSE. The buyer of record
              is defending the floor, not confirming a reclaim; a dip-buy at the cycle
              floor is a reason NOT to chase-short, not yet a reason to scout-long.</span>
            </p>

            <p>
              The leverage and crowding reads both leaned the same way this time.{' '}
              <span className="dn-signal">
                Funding re-heated a second day while retail re-crowded back onto the long
                side into the dip
              </span>: live funding <span className="dn-tag">+4.29% ann</span> (raw
              0.003915 × 1095), 24h mean{' '}
              <span className="dn-tag bear">+6.24% → +6.82% ann</span> (a further re-heat),
              max <span className="dn-tag bear">+9.18% ann (0.00838 field, 1 / 1441 rows @
              07-27 13:47Z)</span>, min +3.99%, and{' '}
              <span className="dn-tag">0 / 1441 negative rows</span> — longs paid shorts
              across the whole window and paid more than yesterday, even through a −2.43%
              fall. Retail{' '}
              <span className="dn-tag bear">mkt_long_pct re-crowded 60.92 → 62.77</span>{' '}
              (24h low 59.54 at 07-27 14:03Z, high 62.77 at 07-28 00:03Z near the snap) —
              reversing the 07-27 de-crowd, the long count stacking back in as price fell.{' '}
              <span className="dn-em">Funding rising and retail re-crowding long into a
              down-print is a heavier, more-levered long paying carry into a falling tape —
              a crowded dip-buy. Combined with SM stacking longs, the long side is now
              broad again (retail) AND smart-money-backed (SM), but it is a long fighting a
              down-close below a lost cap: conviction on the buy side, but no price
              confirmation.</span>
            </p>

            <p>
              Windowed flow shows the sell concentrated overnight and the last hour
              stabilizing. 24h: price{' '}
              <span className="dn-tag bear">−2.43%</span>, OI{' '}
              <span className="dn-tag bear">+1,161.6 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −1,893.5</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −944.1</span>, big-print{' '}
              <span className="dn-tag bear">−628.1 BTC / 833 prints</span>, taker-net{' '}
              <span className="dn-tag bear">−974.2</span> —{' '}
              <span className="dn-em">every channel sold into an OI expansion; the −2.43%
              printed on distribution, not on a long flush (OI rose)</span>. 4h (into
              snapshot): price <span className="dn-tag bear">−2.07%</span>, OI{' '}
              <span className="dn-tag bear">+732.4 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −1,196.6</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −1,006.6</span>, big-print{' '}
              <span className="dn-tag bear">−508.1 BTC / 139 prints</span>, taker-net{' '}
              <span className="dn-tag bear">−1,011.5</span> — the bulk of the drop came in
              the last 4h with broad selling and OI still building. 1h: price{' '}
              <span className="dn-tag">−0.04%</span>, OI{' '}
              <span className="dn-tag bull">+20.5 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −61.7</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +302.8</span>, big-print{' '}
              <span className="dn-tag bear">−85.5 BTC</span>, taker-net{' '}
              <span className="dn-tag bull">+276.2</span> —{' '}
              <em>the last hour flattened at the low: futures bid and taker turned
              positive while spot stayed marginally offered, an early stabilization right
              on the floor</em>. The 24h is a clean distribution shape, but the 1h shows
              the sell losing momentum into $63,651 with futures starting to bid — the
              floor is being tested, not yet broken.{' '}
              <span className="dn-em">
                Baseline convention: the 24h block uses the same-clock prior-day row
                (07-27 08:06 BJ), while the 4h and 1h sub-window blocks above use prior-row
                inclusive baselines (07-28 04:05 BJ and 07-28 07:05 BJ through the 08:06
                pin), NOT the exact same-clock 04:06 / 07:06 endpoints. On an exact
                same-clock 1h basis (07:06 → 08:06) the read is spot −0.22%, OI +78.5 BTC,
                spot CVD −148.5, futures CVD +263.4, big-net −100.2 — the same
                stabilization direction (futures still bid) but a slightly larger spot
                drift and spot-CVD offer than the prior-row inclusive 1h printed above.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF flipped bearish to 1 long / 7 short / 2 neutral (was 4/3/3) · fast frames now OVERSOLD (RSI 22–29) with fresh 4h + 1d death crosses (1b) · regime flipped to 5/9 momentum (JT≥0) trend-continuation · 3d/1w water-down golden crosses + bottom-div HTF tell persists · 15m + 1M ⚡TD9 BUY</span>
            </h2>

            <p>
              <span className="dn-signal">
                The engine rolled from a stretched bounce back into the down-move, the
                fast frames swung from overbought to oversold, and the regime flipped to
                trend-continuation — but the slow-frame bottoming signature held
              </span>. The 00:01Z scan reads{' '}
              <span className="dn-tag">1 long / 7 short / 2 neutral</span> across 10 TFs
              (1M long; 15m/30m/1h/4h/8h/1d/3d short; 12h/1w neutral — the source&rsquo;s
              net counts 15m and 3d as short even though they carry a bottom-div warning,
              and 1w is the neutral frame flagged for the HTF bottom-div cluster), a bearish
              flip from 07-26&rsquo;s 4 long / 3 short / 3 neutral. Fast frames dumped
              from overbought to oversold in a session: 15m RSI{' '}
              <span className="dn-tag bear">22.7</span> (water-down death 11b, below
              cloud ↑64.9k), 30m RSI{' '}
              <span className="dn-tag bear">24.0</span> (water-down death 4b, below), 1h
              RSI <span className="dn-tag bear">28.6</span> (water-up death 15b, below 2b)
              — three deeply-oversold fast frames feeding a top-divergence cluster
              (15m/30m/1h/1d) that has now resolved down. Fresh death crosses printed on
              the mid frames: <span className="dn-tag bear">4h water-down death cross 1
              bar ago</span> (RSI 37.6, below cloud 1b) and{' '}
              <span className="dn-tag bear">1d water-up death cross 1 bar ago</span> (RSI
              47.6, in cloud 61.5k–69.x 8b) — the roll-back carried the 4h and 1d that the
              bounce had not. The slow frames are the same HTF bottoming tell as
              yesterday, unbroken: a <span className="dn-tag bull">1w water-down golden
              cross (1 bar ago)</span>, a{' '}
              <span className="dn-tag bull">3d water-down golden cross 6b</span>, and a
              3d/1w bottom-divergence cluster (BULL reg) — but both 3d and 1w remain below
              cloud (3d ↑75.6k 19b, 1w ↑93.8k 26b). The oversold-reversal hints fired on
              the extremes: <span className="dn-tag bull">15m ⚡ TD9 BUY at $63,706</span>{' '}
              and <span className="dn-tag bull">1M ⚡ TD9 BUY at $63,706</span>. The regime
              tag flipped to{' '}
              <span className="dn-tag">5/9 cycle-momentum (JT≥0) — trend-continuation
              favoured</span> (was cycle-reversal / bounce-favouring on 07-27).{' '}
              <span className="dn-em">
                Read straight: the bounce failed on the engine, the fast frames are now
                washed-out oversold (a short-term mean-reversion setup), the mid frames
                confirmed the roll-back with fresh death crosses, and the regime says
                trend-continuation (down) — but the same slow-frame golden-cross +
                bottom-divergence tell that has been building all week is still intact
                under a below-cloud structure. A washed-out down-print into a settled floor
                with an HTF bottoming tell, not a clean trend break.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,706</td><td className="num bear">22.7</td><td className="bear">death (water-dn) 11b</td><td className="bear">below ↑64.9k 39b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">63,706</td><td className="num bear">24.0</td><td className="bear">death (water-dn) 4b</td><td className="bear">below ↑65.1k 7b</td><td>Buy 7</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">63,706</td><td className="num bear">28.6</td><td className="bear">death (water-up) 15b</td><td className="bear">below ↑64.6k 2b</td><td>Buy 4</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">63,706</td><td className="num">37.6</td><td className="bear">death (water-dn) 1b</td><td className="bear">below ↑64.7k 1b</td><td>Buy 4</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">63,706</td><td className="num">41.5</td><td className="bear">death (water-up) 14b</td><td className="neut">in cloud 62.9k–63.x 刚穿 (just crossed)</td><td>Buy 2</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">63,706</td><td className="num">43.6</td><td className="bear">death (water-up) 8b</td><td className="bull">above ↓63.4k 28b</td><td>Buy 2</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">63,706</td><td className="num">47.6</td><td className="bear">death (water-up) 1b</td><td className="neut">in cloud 61.5k–69.x 8b</td><td>Buy 5</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">63,706</td><td className="num">43.8</td><td className="bull">golden (water-dn) 6b</td><td className="bear">below ↑75.6k 19b</td><td>Buy 2</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">63,706</td><td className="num">39.0</td><td className="bull">golden (water-dn) 1b</td><td className="bear">below ↑93.8k 26b</td><td>Sell 3</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">63,706</td><td className="num">43.6</td><td className="neut">—</td><td className="bull">above ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 08:01 BJ scan (00:01Z; rolling latest
                    file, archived verbatim at
                    /opt/desk-note/snapshots/2026-07-28-0006/). Header alerts:{' '}
                    <em>15m ⚡ TD9 BUY printed at $63,706 (oversold reversal hint)</em>,{' '}
                    <em>1M ⚡ TD9 BUY printed at $63,706 (oversold reversal hint)</em>,{' '}
                    <em>top-div 4: 15m/30m/1h/1d · bottom-div 3: 15m/3d/1w</em>,{' '}
                    <em>regime 5/9 cycle-momentum (JT≥0) — trend-continuation favoured</em>.
                    Scan spot $63,706, 24h −2.52% (00:01Z MTF scan; the live-tape anchor
                    at 00:06Z shows −2.43% on the same 24h window — the 5-minute source
                    gap and the differing baseline account for the 0.09pt difference), 24h
                    H/L $65,722 / $63,567 (the MTF scan&rsquo;s own 00:01Z window; the
                    live-tape 00:06Z range in the prose above is $65,686.68 / $63,651.18 —
                    the ~$36 / ~$84 deltas are the 5-minute source gap, live tape
                    authoritative), qVol $9.60B. Closes are in-progress bars; treat every
                    value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the lost cap and the confluence floor. Spot $63,663
              sits <span className="dn-tag bull">+0.56% above D-SMA50 $63,311</span> —
              the only positive offset on the entire matrix, and it coincides to the
              dollar with the settled 200W floor. Overhead it has lost the pair it held
              yesterday: <span className="dn-tag bear">D-EMA20 $64,274 (−0.95%)</span>,{' '}
              <span className="dn-tag bear">D-SMA20 $64,414 (−1.17%)</span>, and the
              reclaimed-then-lost <span className="dn-tag bear">D-EMA50 $64,952
              (−1.98%)</span> — the fourth flip of that cap to resistance. Then in order:{' '}
              <span className="dn-tag bear">W-EMA200 $67,143 (−5.18%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $67,622 (−5.85%)</span> — the working
              first MA target if the reclaim ever comes, with the dealer $66k–$72k
              call-wall band in between —{' '}
              <span className="dn-tag bear">W-SMA20 $69,385 (−8.25%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $69,435 (−8.31%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $69,453 (−8.34%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,746 (−8.72%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $70,506 (−9.70%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $71,867 (−11.42%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $73,177 (−13.00%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $73,313 (−13.16%)</span>. Below spot
              the only support is the settled 200W floor{' '}
              <span className="dn-tag bull">$63,311 (+0.56%)</span> / D-SMA50 confluence,
              with the in-progress week&rsquo;s W-SMA200 climbing to $63,534 just beneath
              spot. Far above and disused: W-SMA150 $76,625 (−16.92%), W-EMA50 $78,345
              (−18.74%), W-EMA100 $78,771 (−19.18%), W-SMA50 $84,334 (−24.51%), W-SMA100
              $88,563 (−28.12%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-28 00:05Z (close $63,724.60);
                offsets recomputed against live spot $63,663.41. Displayed MA levels are
                $-rounded; offsets computed from exact series values. W-SMA200 is
                non-computable from the 2023–2026 MA subset (188 weekly bars) while
                W-SMA150 $76,625 IS computable but sits far above and disused; the
                W-EMA150 $73,177 and W-EMA200 $67,143 lines seed from available history and
                are reported as such (both print above spot, so resistance here, not
                support); the 200W cycle floor $63,311 comes from the full-history glob /
                trap-watch state (see manifest). Daily closes: 07-22 $66,082.00, 07-23
                $65,069.60, 07-24 $64,116.50, 07-25 $64,338.10, 07-26 $65,375.10, 07-27
                $63,720.80, 07-28 (in-progress) $63,724.60 — the one reclaim close (07-26)
                gave way to a −$1,654 down-close below the cap.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book de-gammaed HARD to +82.8M headline / +69.40M rollup (was +191.1M / +211.84M on 07-27) · flip $62,599 (spot +1.70% above) · FRESH near-dated negative cluster after 07-27&rsquo;s wholly-positive strip: 28JUL −13.30M / 29JUL −4.37M / 30JUL −0.51M · $64k −11.99M pocket overhead (returned/deepened vs 07-25&rsquo;s $64k pocket) · 31JUL +48.76M still dominant</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book shed two-thirds of its positive gamma and grew a fresh
                near-dated negative cluster after 07-27&rsquo;s wholly-positive strip
              </span>. Headline aggregate GEX is{' '}
              <span className="dn-tag bull">+82.8M / 1%</span> (was +191.1M on 07-27), with
              the by-expiry rollup at{' '}
              <span className="dn-tag bull">+69.40M</span> (= gex_summary.json net_gex
              $69,396,518, was +211.84M on 07-27) — a ~−13.4M non-reconciling
              headline-vs-rollup gap, disclosed per DN-003 lineage, and this run the rollup
              sits BELOW the headline (the opposite sign of the 07-25/07-26/07-27 gaps).
              The 0-γ flip moved <span className="dn-tag">$62,632 → $62,599 (−$33)</span>,
              and spot $63,663 sits{' '}
              <span className="dn-tag bull">+1.70% above flip</span> on spot-denominated
              math (63,663.41 / 62,599.29 − 1 = +1.700%); the GEX file&rsquo;s own
              &ldquo;dist to flip&rdquo; reads{' '}
              <span className="dn-tag bull">+2.1% off its Deribit-index $63,894</span>{' '}
              ($231 above live spot), which is +2.07% (63,894 / 62,599.29 − 1 = +2.068%) —
              both references positive, spot above the flip on both but with far less
              cushion than yesterday&rsquo;s +4.18%. The wall map still has a positive call
              band overhead but a NEGATIVE pocket has appeared right at spot:{' '}
              <span className="dn-tag bull">$70k +30.70M</span> (heaviest wall),{' '}
              <span className="dn-tag bull">$72k +20.71M</span>,{' '}
              <span className="dn-tag bear">$60k −20.70M</span> (crash-put, now the second-
              largest magnitude on the board),{' '}
              <span className="dn-tag bull">$68k +13.69M</span>,{' '}
              <span className="dn-tag bear">$64k −11.99M</span> (a negative-gamma pocket
              directly overhead — the $64k negative pocket returned and deepened vs
              07-25&rsquo;s $64,000 −10.23M at-spot pocket, not a first-of-the-recovery
              at-spot negative),{' '}
              <span className="dn-tag bull">$65k +11.82M</span>,{' '}
              <span className="dn-tag bull">$67k +10.07M</span>,{' '}
              <span className="dn-tag bull">$66k +10.01M</span>,{' '}
              <span className="dn-tag bull">$80k +8.59M</span>,{' '}
              <span className="dn-tag bull">$69k +5.79M</span>.{' '}
              <span className="dn-em">
                The $66k–$72k band still sums to roughly +91M of positive-gamma call
                resistance ($66k +10.01M + $67k +10.07M + $68k +13.69M + $69k +5.79M +
                $70k +30.70M + $72k +20.71M = +90.97M), so a reclaim still runs into
                dealers selling gamma above — but
                the $64k −11.99M pocket directly overhead and the $60k −20.70M below mean
                the near-spot book is no longer the clean dampener it was: a break of the
                $63,311 floor toward $60k runs into negative gamma that AMPLIFIES rather
                than cushions.
              </span>{' '}
              By expiry the strip is no longer wholly positive: it has grown a near-dated
              negative cluster — 28JUL 0.3DTE{' '}
              <span className="dn-tag bear">−13.30M</span> (settles at 08:00Z today, ~8h
              after the snap), 29JUL 1.3{' '}
              <span className="dn-tag bear">−4.37M</span>, 30JUL 2.3{' '}
              <span className="dn-tag bear">−0.51M</span> (−18.18M near-dated negative in
              aggregate) — before{' '}
              <span className="dn-tag bull">31JUL 3.3 +48.76M</span> the dominant chunk,
              then 7AUG 10.3 +18.51M, 14AUG 17.3 +0.08M, 28AUG 31.3 +14.53M, 25SEP 59.3
              +1.47M (the listed front strip through 25SEP totals +65.17M; the three back
              expiries 25DEC +2.84M / 26MAR27 +0.82M / 25JUN27 +0.56M add +4.22M for the
              +69.40M rollup). The dampening regime is intact by aggregate but thinning,
              and after 07-27&rsquo;s wholly-positive reset the near-dated calendar again
              carries a negative amplifier.
            </p>

            <p>
              IV median across the option chain is{' '}
              <span className="dn-tag">43.2%</span> (was 42.5% on 07-27) against 30D
              close-to-close RV of <span className="dn-tag">31.51%</span> — chain-level
              richness <span className="dn-tag">~+11.7pt</span>. A chain-median across N
              instruments (836 today), <span className="dn-em">not</span> a tradable
              spread; expiry-/strike-level vega, skew and term structure remain not loaded;
              the vol read stays framework-only. RV methodology: 30D close-to-close,
              logret.std × √365 × 100 on the last 30 daily log returns (= 31 consecutive
              daily closes) anchored to parquet last bar 2026-07-28 00:05Z; the 29-return
              alt reads 31.89%.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Monday FRED thaw — 10Y ticked −2bp to 4.69% (reclaim-long rates filter still FALSE, 14bp from firing) · TIPS flat 2.43%, breakeven −5bp to 2.21% · MOVE returned and firmed to 77.2 · rates/dollar EXTREME RISK-OFF vs credit/liquidity loose · DXY unchanged 101.24</span>
            </h2>

            <p>
              <span className="dn-signal">
                Monday&rsquo;s FRED re-print thawed the weekend freeze but barely moved the
                needle — 10Y ticked lower, real yields held, credit widened a touch, and
                the reclaim-long rates filter stays FALSE
              </span>. Dashboard render is 2026-07-27 22:16Z, ~1.85h before the snapshot,
              and the FRED daily series re-printed for Monday 07-27. US 10Y nominal{' '}
              <span className="dn-tag bear">4.69% (−2.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.50</span>, episodic z{' '}
              <span className="dn-tag bear">+1.91</span> — EXTREME RISK-OFF, eased 2bp off
              the frozen 4.71%. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.43% (0.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.98</span>, episodic z{' '}
              <span className="dn-tag bear">+1.86</span> — EXTREME RISK-OFF, flat. 5Y5Y BE
              inflation <span className="dn-tag">2.24% (−4.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag">2.21% (−5.0bp)</span> — inflation compensation
              eased. HY OAS <span className="dn-tag bull">2.79% (+2.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−0.56</span>, episodic z +1.54 — still
              &ldquo;loose&rdquo; but a touch wider. MOVE bond vol is BACK after
              yesterday&rsquo;s fetch-fail and firmed:{' '}
              <span className="dn-tag">77.2 (+6.33)</span>, regime z +0.34, episodic z
              +1.84 — neutral but the highest bond-vol read of the recovery. The offsets:
              DXY <span className="dn-tag bear">101.24 (−0.24 / unchanged vs 07-27)</span>,
              regime z +2.07 — EXTREME RISK-OFF; Fed net liquidity{' '}
              <span className="dn-tag bull">$5.917T</span> (no fresh weekly print),
              episodic z −2.47 — loose. US-JP 10Y spread{' '}
              <span className="dn-tag">2.02% (−2.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag">163.65</span>. NFCI{' '}
              <span className="dn-tag bull">−0.552</span>, RISK-ON (stale 10d).{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) stays FALSE at 4.69%
                — the Monday thaw moved it 2bp closer but it is still 14bp from firing.
                The macro split is unchanged: rates and the dollar sit EXTREME RISK-OFF
                (tight) while credit (HY OAS loose) and liquidity (net liq loose, NFCI
                RISK-ON) stay loose, with MOVE&rsquo;s return firmer a mild new
                bond-vol wrinkle. Nothing in this print flips the scout&rsquo;s rates gate;
                the next FRED daily is the thing to watch.
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
                <tr><td>US 10Y nominal</td><td className="num">4.69%</td><td className="num bull">−2.0bp</td><td className="num bear">+2.50</td><td className="num bear">+1.91</td><td className="bear">EXTREME RISK-OFF · Monday thaw</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.43%</td><td className="num">0.0bp</td><td className="num bear">+2.98</td><td className="num bear">+1.86</td><td className="bear">EXTREME RISK-OFF · flat</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.24%</td><td className="num bull">−4.0bp</td><td className="num">+0.22</td><td className="num">+0.96</td><td className="neut">no tag</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.21%</td><td className="num bull">−5.0bp</td><td className="num">−1.69</td><td className="num">−1.11</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.79%</td><td className="num bear">+2.0bp</td><td className="num bull">−0.56</td><td className="num">+1.54</td><td className="bull">loose · a touch wider</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.552</td><td className="num">−0.01</td><td className="num bull">−1.51</td><td className="num bull">−1.71</td><td className="stale">RISK-ON · stale 10d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">77.2</td><td className="num bear">+6.33</td><td className="num">+0.34</td><td className="num">+1.84</td><td className="neut">neutral · returned, firmer</td></tr>
                <tr><td>DXY</td><td className="num">101.24</td><td className="num">−0.24</td><td className="num bear">+2.07</td><td className="num">+0.57</td><td className="bear">EXTREME RISK-OFF · unchanged</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.917T</td><td className="num">−0.069T</td><td className="num">+0.56</td><td className="num bull">−2.47</td><td className="bull">loose · no fresh weekly print</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.02%</td><td className="num bull">−2.0bp</td><td className="num">−0.32</td><td className="num bear">+1.91</td><td className="neut">neutral</td></tr>
                <tr><td>USD/JPY</td><td className="num">163.65</td><td className="num">−0.18</td><td className="num bear">+1.71</td><td className="num bear">+1.92</td><td className="neut">yen soft</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num stale">+2.42</td><td className="num stale">+1.09</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 166 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.212</span> — IDIOSYNCRATIC band,
              looser still than 07-27&rsquo;s 0.241. BTC&rsquo;s top tie is{' '}
              <span className="dn-tag">NQ +0.405</span> (eased from +0.510), then SP500{' '}
              <span className="dn-tag">+0.330</span>, URNM{' '}
              <span className="dn-tag">+0.320</span>, TSLA{' '}
              <span className="dn-tag">+0.320</span>, PLAT{' '}
              <span className="dn-tag">+0.316</span>, SILVER{' '}
              <span className="dn-tag">+0.305</span>, JP225{' '}
              <span className="dn-tag">+0.296</span>, GOLD{' '}
              <span className="dn-tag">+0.273</span>, COPPER{' '}
              <span className="dn-tag">+0.264</span>, AAPL{' '}
              <span className="dn-tag">−0.189</span>. 7d performance is the tell, and it
              has flipped from 07-27:{' '}
              <span className="dn-tag bear">BTC −2.82%</span> now sits IN the red equity
              cluster and marginally LAGS the engine — NQ{' '}
              <span className="dn-tag bear">−2.38%</span> (BTC −0.44pt behind), SP500{' '}
              <span className="dn-tag bear">−0.58%</span>, JP225{' '}
              <span className="dn-tag bear">−2.15%</span>, with the megacap complex still
              deeply red — TSLA <span className="dn-tag bear">−17.07%</span>, META{' '}
              <span className="dn-tag bear">−7.87%</span>, GOOGL{' '}
              <span className="dn-tag bear">−7.59%</span>, AMZN{' '}
              <span className="dn-tag bear">−7.38%</span>, NVDA{' '}
              <span className="dn-tag bear">−3.37%</span>, MSFT{' '}
              <span className="dn-tag bear">−2.92%</span>, while AAPL{' '}
              <span className="dn-tag bull">+3.07%</span> is the lone green megacap. Metals
              and uranium outran everything: URNM{' '}
              <span className="dn-tag bull">+3.77%</span>, SILVER{' '}
              <span className="dn-tag bull">+2.52%</span>, PALL{' '}
              <span className="dn-tag bull">+2.18%</span>, PLAT{' '}
              <span className="dn-tag bull">+1.19%</span>, GOLD{' '}
              <span className="dn-tag bull">+1.10%</span>, COPPER{' '}
              <span className="dn-tag bull">+0.36%</span>; energy soft (CL −0.78%, BRENT
              −2.03%, NGAS −2.15%).{' '}
              <span className="dn-em">
                The 07-27 read of BTC leading the equity/megacap cluster has rolled off:
                over the current 7d window BTC (−2.82%) now sits slightly behind NQ
                (−2.38%) inside the red equity cluster, so the stocks-relative leadership
                tell has faded — BTC is moving WITH the equity roll-over, not against it,
                while metals/uranium keep the risk bid. Per the DN-001 lineage this is a
                loosened, idiosyncratic tape with BTC back in the equity cluster, not a RS
                leadership signal in either direction.
              </span>{' '}
              JGB monthly 2.67% carries a monthly tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · cover-bounce scout DEFERRED (5th day) — legs INVERTED: SM-adding flow leg now FIRED (+214%) but price leg FAILED (lost the D-EMA50 on a down-close) · chase-short re-arm CLOSEST to met (near-dated negative gamma appeared + cap lost) but STOOD DOWN into the settled floor the buyer of record is defending · book FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                The bear resolution the 07-27 note gated fired — and the same session the
                buyer of record flipped to buying the dip, inverting the scout&rsquo;s
                gate legs yet again
              </span>. The 07-27 note said the reclaim would resolve bear if it
              &ldquo;exhausts into the re-heated funding, overbought fast frames and the
              smart-money short lean, rolling spot back below $65,062 and flipping the cap
              to resistance a fourth time.&rdquo; It did: 07-27 closed $63,720.80 below the
              D-EMA50, the fast frames washed from overbought to oversold, and the cap
              flipped resistance. But where yesterday the price leg was TRUE and the flow
              legs FALSE, today it is the reverse — the{' '}
              <em>SM-adding</em> leg fired hard (net-long +214.23%, added longs +2,968, cut
              shorts −2,908) while the <em>price</em> leg failed (down-close below the cap),
              the OI expansion is distribution-shaped rather than demand-led, and the
              reclaim-long rates filter stays FALSE at 4.69%. The scout&rsquo;s legs have
              still never printed TRUE together. The trade book today is no scout entry, no
              chase-short, no fresh hedge — the disciplined read is to hold the scout
              DEFERRED for the price to reclaim the cap on an up-close and PAIR with the
              now-firing SM-adding, and to stand the chase-short down into the settled floor
              the buyer of record is visibly defending.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · DEFERRED · legs INVERTED — SM-adding leg FIRED, price leg FAILED · wait for the reclaim to pair with the buyer</span>
              <div className="dn-trade-name">
                Cover-bounce scout — the SM-adding leg finally fired (+214%, added longs and cut shorts) but the D-EMA50 cap was lost on a down-close, the OI expansion is distribution-shaped, and rates stay FALSE
              </div>
              <div className="dn-thesis">
                The re-arm gate&rsquo;s legs have inverted since 07-27. Yesterday the
                price leg (D-EMA50 reclaim on an up-close) was TRUE and the flow legs
                FALSE; today the <em>SM-adding</em> leg is TRUE for the first time — SM
                net-long expanded +214.23% to +8,620 by adding longs (+2,968) AND cutting
                the short overlay (−2,908), the clean add-shape the gate specifies — but
                the <em>price</em> leg failed back: 07-27 closed $63,720.80 below the
                D-EMA50 $64,952 cap, spot holds −1.98% beneath it. The other legs also do
                not confirm: OI expanded +1.11% but on a down-print with the aggressor
                tape selling across (spotCVD −1,893.5 / futCVD −944.1 / taker −974.2), a
                distribution shape rather than demand-led; and the reclaim-long rates
                filter stays FALSE at 10Y 4.69% (Monday thaw, 14bp from firing). The buyer
                of record is defending the floor, not confirming a reclaim — a dip-buy at
                the cycle floor, not a breakout. The disciplined entry stays deferred
                until the price reclaims the cap on an up-close AND the SM-add persists
                with OI turning demand-led.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm gate (SM-adding leg now TRUE)</span><span className="dn-lvl-v bull">SM net-long expanded +214.23% to +8,620 (Δlong +2,968 / Δshort −2,908) — the clean add-shape, TRUE for the first time of the recovery</span></div>
                <div><span className="dn-lvl-k">re-arm gate (price / OI / rates legs FALSE)</span><span className="dn-lvl-v bear">D-EMA50 reclaim on an up-close (FALSE — 07-27 closed $63,720.80 below the $64,952 cap) AND OI demand-led (FALSE — +1.11% but distribution-shaped on aggressor selling) AND 10Y &lt; 4.55% (FALSE — 4.69% Monday thaw)</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on a D-EMA50 reclaim on an up-close that PAIRS with the SM-add persisting AND OI turning demand-led (or a rates print &lt; 4.55%): scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">daily close &lt; $63,311 (settled 200W floor / D-SMA50 confluence — a close below ends the recovery read)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$66k–$72k call-wall band is the practical cap; working MA target D-EMA100 $67,622, take half into the $66k / $67k walls</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R on the confirming reclaim · not on the SM-add into a down-close alone</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> entry on the confirmed re-arm ~$64,952 (D-EMA50 reclaim), stop
                $63,311 (settled floor / D-SMA50) = ~$1,641 risk; working target D-EMA100
                $67,622 = ~$2,670 reward ≈ 1.63:1 — but the $66k–$72k call-wall band caps
                the path, so the realistic first target is the $66k / $67k walls and the
                R/R to those is thinner. <b>Hard rule:</b> the scout does not enter on the
                SM-add into a down-close. The buyer of record is defending the floor with a
                dip-buy, which is a reason to stand the chase-short down — not a reason to
                buy a lost cap. The confirming leg is the price reclaiming the D-EMA50 on
                an up-close WITH the SM-add still on and OI turning demand-led, in that
                order; a dip-buy below a lost cap on distribution-shaped OI is a floor
                defence, not a long trigger.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · chase · STOOD DOWN · re-arm CLOSEST to met of the recovery, but into the settled floor the buyer of record is defending</span>
              <div className="dn-trade-name">
                Chase-short — the 07-27 re-arm conditions are the closest to met all week (near-dated negative gamma appeared + spot lost the D-EMA50 on a close), but stood down into $63,311 with SM stacking longs
              </div>
              <div className="dn-thesis">
                The 07-27 note set the chase-short re-arm at &ldquo;a fresh near-dated
                negative gamma chunk added inside the 28JUL–31JUL window AND spot rejecting
                the D-EMA50 back below $65,062 on a close.&rdquo; Both legs are now
                arguably met: the dealer strip grew a near-dated negative cluster (28JUL
                −13.30M / 29JUL −4.37M / 30JUL −0.51M = −18.18M) with a $64k −11.99M pocket
                directly overhead, and spot lost the D-EMA50 on the 07-27 close. That is
                the closest the chase-short has come to arming all recovery. But it stays
                STOOD DOWN, because the setup runs straight into the settled 200W floor
                $63,311 (spot only +0.56% above, today&rsquo;s low held +$340 above it) —
                and the buyer of record is stacking longs into exactly that level
                (SM +214.23%). Shorting a cycle floor that a net-long smart-money book is
                defending, into a still net-positive dealer aggregate (+69.40M rollup with
                31JUL +48.76M dominant), is a low-quality short even with the near-dated
                negative appearing. The chase-short arms only on a floor BREAK, not into it.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm legs (closest to met of the recovery)</span><span className="dn-lvl-v bear">near-dated negative gamma appeared (28JUL −13.30M / 29JUL −4.37M / 30JUL −0.51M, $64k −11.99M pocket overhead) AND spot lost the D-EMA50 on the 07-27 close — both 07-27 legs now arguably TRUE</span></div>
                <div><span className="dn-lvl-k">why still stood down</span><span className="dn-lvl-v bear">into the settled 200W floor $63,311 (spot +0.56% above) that SM is defending with a +214% net-long dip-buy · dealer aggregate still net-positive +69.40M (31JUL +48.76M dominant)</span></div>
                <div><span className="dn-lvl-k">what would arm the short</span><span className="dn-lvl-v bear">a daily close &lt; $63,311 (floor break) with SM rolling back off its net-long and the near-dated negatives still on — then the short arms on the break, stop back above the D-EMA50 $64,952</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no chase-short INTO the settled floor the buyer of record is defending; wait for the break</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> the near-dated negative gamma and the lost cap are real
                and move the chase-short from &ldquo;stood down hard&rdquo; to &ldquo;armed
                on a floor break.&rdquo; But the difference between shorting into a floor
                and shorting a broken floor is the whole edge: the settled $63,311 is
                defended by a net-long smart-money book and a still net-positive dealer
                aggregate, so a short into it fights the buyer of record at the cycle floor.
                If $63,311 breaks on a close with the negatives still on and SM rolling off,
                the amplifying negative gamma below ($64k −11.99M, $60k −20.70M) is the
                tailwind — until then the short waits for the break.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · the note turns on the floor — a lost cap + a dip-buying buyer of record + fresh near-dated negative gamma all meet on $63,311</span>
              <div className="dn-trade-name">
                Floor test — the reclaim rolled back to the settled 200W floor / D-SMA50 confluence with SM defending and near-dated negative gamma appearing; the tell is whether $63,311 holds
              </div>
              <div className="dn-thesis">
                For five sessions the recovery was gated on the D-EMA50 reclaim; it printed
                on 07-26, rolled back on 07-27, and now the whole structure has compressed
                onto one level. The settled 200W floor $63,311 and the computable D-SMA50
                $63,311 coincide to the dollar, spot sits +0.56% above, and three signals
                meet there: a lost cap (bearish), a buyer of record stacking longs into the
                dip (bullish), and a fresh near-dated negative gamma cluster after
                07-27&rsquo;s wholly-positive strip (an amplifier BELOW if the floor breaks). If $63,311 holds and the
                SM-add persists while price reclaims the D-EMA50 on an up-close, the dip-buy
                converts to the demand leg the scout has waited for and the scout arms live.
                If the floor breaks on a close — funding is re-heated, retail is re-crowded
                long into weakness (a fuel source for a flush), the near-dated negatives
                amplify — the recovery read ends and the chase-short arms on the break. The
                framework watches the $63,311 close and the SM net-long trajectory as the
                deciding tells, not the next candle.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">bull resolution</span><span className="dn-lvl-v bull">$63,311 holds AND SM-add persists AND price reclaims the D-EMA50 $64,952 on an up-close — the dip-buy converts to demand, scout arms live</span></div>
                <div><span className="dn-lvl-k">bear resolution</span><span className="dn-lvl-v bear">daily close &lt; $63,311 with the near-dated negatives on and SM rolling off its net-long — recovery read ends, chase-short arms on the break, amplifying negative gamma below ($64k −11.99M, $60k −20.70M)</span></div>
                <div><span className="dn-lvl-k">deciding tells</span><span className="dn-lvl-v">the $63,311 daily close (hold vs break) and the SM net-long trajectory (persist vs roll off) — not the price level intraday</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the edge here is that two of the strongest
                signals on the board point opposite ways at the same level — a lost cap
                says lower, a +214% smart-money dip-buy says the floor holds. The lineage
                does not resolve that by picking a side into the level; it lets the $63,311
                close resolve it. A hold with the SM-add persisting is the demand leg; a
                break with SM rolling off is the flush. Read the close and the SM
                trajectory, not the intraday wick.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the D-EMA50 reclaim rolled back on a down-close (bear resolution FIRED) · the SM-adding leg FIRED (+214%) but the price leg FAILED · scout DEFERRED a 5th day · chase-short re-arm closest to met but stood down into the floor · book FLAT</span>
            </h2>

            <p>
              Of the 07-27 decision conditions: the{' '}
              <em>reclaim rolls back (bear resolution)</em> FIRED clean (07-27 closed
              $63,720.80 below the D-EMA50, cap flipped resistance a fourth time); the{' '}
              <em>D-EMA50 hold JOINED by SM re-adding AND OI expanding on demand</em> scout
              trigger DID NOT FIRE (the SM-add fired but the price hold did not, and the OI
              expansion is distribution-shaped); the{' '}
              <em>reclaim-long rates filter</em> stayed FALSE (10Y 4.69% &gt; 4.55%, Monday
              thaw); the <em>settled-floor stop</em> DID NOT trigger (no close below
              $63,311 — spot +0.56% above, low $63,651 held); and the{' '}
              <em>chase-short re-arm</em> moved from stood-down toward armed (near-dated
              negative gamma appeared + cap lost) but stays STOOD DOWN into the floor.{' '}
              <em>The bear resolution fired, the scout&rsquo;s SM-adding leg fired but its
              price leg failed back, and the whole note compressed onto the $63,311
              floor.</em> The conditions today re-set around a lost cap, a dip-buying buyer
              of record, a thinning dealer book with a fresh near-dated negative, and a
              settled floor being tested:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Reclaim rolls back (bear resolution — 07-27 gate)</td><td className="bear">FIRED — 07-27 close $63,720.80 &lt; D-EMA50 $64,952; cap flipped resistance a 4th time</td><td>the short-cover reclaim exhausted as gated; scout&rsquo;s price leg lost, structure back to capped-below-D-EMA50</td></tr>
                <tr><td>SM adding to net-long (re-arm flow leg)</td><td className="bull">FIRED — SM +214.23% to +8,620 (Δlong +2,968, Δshort −2,908) — the clean add-shape</td><td>the flow leg the gate waited for is met; but into a down-close, so pair it with a reclaim before scout entry</td></tr>
                <tr><td>D-EMA50 reclaim on an up-close (re-arm price leg)</td><td className="bear">FALSE — 07-27 down-close $63,720.80 lost the cap; spot −1.98% below</td><td>no scout long: the SM-add is a floor defence, not a confirmed reclaim</td></tr>
                <tr><td>Buyers behind the OI (re-arm flow leg)</td><td className="bear">FALSE — OI +1.11% but on a down-print with aggressor selling (distribution-shaped)</td><td>no scout long: the OI expansion is longs-into-weakness, not demand-led</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">FALSE — 10Y 4.69% &gt; 4.55% (Monday thaw, 14bp from firing)</td><td>standalone filter false; next FRED daily is the thing that can move it</td></tr>
                <tr><td>Cover-bounce scout (long)</td><td className="bull">D-EMA50 reclaim on an up-close PAIRED with the SM-add persisting AND OI demand-led (or 10Y &lt; 4.55%)</td><td>scout long 0.2R, stop $63,311, working target D-EMA100 $67,622 (capped by $66k–$72k call walls), R/R ~1.63:1</td></tr>
                <tr><td>Settled-floor stop / floor test</td><td className="bear">daily close &lt; $63,311 (200W W-SMA200 / D-SMA50 confluence)</td><td>ends the recovery read; the chase-short arms on the break with the near-dated negatives amplifying below</td></tr>
                <tr><td>Chase-short re-arm (closest to met)</td><td className="bear">near-dated negative gamma appeared + cap lost — BOTH 07-27 legs arguably TRUE — but stands down until a $63,311 floor break</td><td>no chase-short INTO the floor the buyer of record is defending; arm on the break, stop above D-EMA50 $64,952</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the settled 200W floor / D-SMA50 confluence $63,311 holds with the
                buyer of record defending it — the dip-buy converting to the demand leg as
                price reclaims the D-EMA50 on an up-close — or whether it breaks on a close
                into the re-heated funding, the re-crowded retail long, and the fresh
                near-dated negative gamma after 07-27&rsquo;s wholly-positive strip, ending the recovery read and
                arming the chase-short on the break
              </span>. The reclaim the desk waited five sessions for gave way in one, and
              the same session the buyer of record flipped to defending the floor — so the
              note compresses onto $63,311, where a lost cap, a +214% smart-money dip-buy,
              and a fresh near-dated negative amplifier all meet. Until the floor resolves,
              this note runs as written: the scout is DEFERRED a fifth day with its
              SM-adding leg finally TRUE but its price, OI and rates legs FALSE; the
              chase-short is stood down into the floor despite its re-arm being the closest
              to met of the recovery; the put-spread is not re-grown on a single Monday-thaw
              10Y leg; and the book stays FLAT on the floor. The MTF washed to oversold with
              its HTF bottoming tell intact, the dealer book thinned and grew a fresh
              near-dated negative, and BTC slipped back into the red equity cluster — but
              the buyer of record is stacking longs at the cycle floor, and that is the tell
              the desk reads next. The right read for the next 24h is{' '}
              <em>patient — the level is doing the work; read the $63,311 close, not the
              wick, and do not short a floor the smart money is defending or buy a cap the
              price just lost</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> this is the v2 EN note, promoted from v1 after the STAGE B codex
            hostile-but-fair audit recorded at audits/2026-07-28-desk-note.md (verdict
            PASS-WITH-NOTES — 0 CRITICAL, 5 MAJOR). STAGE C applied every MAJOR finding in
            place and ran a grep-closure loop (search the full EN file for each wrong-claim
            pattern, fix every semantic variant, re-grep to zero) before promoting the
            titleband/footer v1 → v2. Snapshot anchor 2026-07-28 00:06Z (live tape t ==
            &ldquo;07-28 08:06&rdquo; BJ); rolling sources archived at
            /opt/desk-note/snapshots/2026-07-28-0006/ for re-audit against the same bytes.
            <br /><br />
            <b>Findings applied (grep-closure record):</b>
            <br />
            <b>DN-001 (MAJOR) — MTF regime count.</b> Patterns searched: &ldquo;1 long / 5
            short / 4 neutral&rdquo;, &ldquo;1/5/4&rdquo;, &ldquo;neutral-warn&rdquo;. Hits
            before: 3 (roman §II, prose count, TF assignment). Hits after: 0. Corrected to
            1 long / 7 short / 2 neutral against the archived source
            (mtf_div_latest.html: 1 多 / 7 空 / 2 中 — 15m/30m/1h/4h/8h/1d/3d short, 12h/1w
            neutral, 1M long; the source counts 15m and 3d as short despite their bottom-div
            warning). RESOLVED.
            <br />
            <b>DN-002 (MAJOR) — sub-window flow baselines.</b> The 4h/1h flow blocks use
            prior-row inclusive baselines (04:05 / 07:05 BJ through the 08:06 pin), not exact
            same-clock endpoints. Resolved by DISCLOSURE (option 1 of the suggested fix):
            manifest and flow-section notes now state the convention and give the exact
            same-clock 1h read (07:06 → 08:06: spot −0.22%, OI +78.5 BTC, spot CVD −148.5,
            futures CVD +263.4, big-net −100.2 — same stabilization direction, larger spot
            drift). Pattern searched: undisclosed &ldquo;1h:&rdquo;/&ldquo;4h&rdquo; sub-window
            claims. Undisclosed hits before: 2 blocks. After disclosure: 0 undisclosed.
            RESOLVED.
            <br />
            <b>DN-003 (MAJOR) — &ldquo;fattest net-long of the recovery&rdquo;.</b> Patterns
            searched: &ldquo;fattest/FATTEST&rdquo;, &ldquo;net-long of the recovery&rdquo;.
            Hits before: 2 (SM tile, SM prose). Hits after: 0. Rephrased to &ldquo;fattest of
            the current 24h rebound&rdquo; and explicitly noted still below the 07-24 recovery
            peak +10,651 (today&rsquo;s 24h max +8,941, anchor +8,620). RESOLVED.
            <br />
            <b>DN-004 (MAJOR) — &ldquo;first near-dated / first at-spot negative of the
            recovery&rdquo;.</b> Patterns searched: &ldquo;first near-dated&rdquo;,
            &ldquo;FIRST near-dated&rdquo;, &ldquo;first at-spot&rdquo;, &ldquo;first time the
            near-dated&rdquo;, &ldquo;near-dated negative … of the recovery&rdquo;. Hits before:
            11 (manifest-adjacent tile, lead dn-em, §III roman, §III signal, $64k pocket,
            strip closer, trade-book framework label + thesis, decision prose ×2, closing
            para). Hits after: 0. Reworded to &ldquo;fresh after 07-27&rsquo;s wholly-positive
            strip&rdquo;; the $64k pocket is now stated as returned/deepened vs 07-25&rsquo;s
            $64,000 −10.23M at-spot pocket (prior lineage: 07-25 25JUL −10.13M / 27JUL −5.07M /
            $64,000 −10.23M; 07-27 was the clean wholly-positive reset). RESOLVED.
            <br />
            <b>DN-005 (MAJOR, = ask-deepseek CRITICAL) — $66k–$72k band sum.</b> Pattern
            searched: &ldquo;+67M&rdquo;, &ldquo;roughly +67&rdquo;, &ldquo;sums to&rdquo;.
            Hits before: 1. Hits after: 0. Corrected to roughly +91M with the term-by-term
            reconstruction shown inline ($66k +10.01M + $67k +10.07M + $68k +13.69M + $69k
            +5.79M + $70k +30.70M + $72k +20.71M = +90.97M). RESOLVED.
            <br /><br />
            <b>ask-deepseek MINOR (rounding) — adjudicated, no change.</b> The +5,877 /
            +2,743 prose figures are disclosed rounded forms of the exact +5,876.61 /
            +2,743.16 shown in the adjacent computation (|+8,619.77 − (+2,743.16)| /
            2,743.16 = 214.23%); codex cleared the SM arithmetic as consistent. No edit.
            <br /><br />
            <b>Codex-confirmed clean (recompute anchors, unchanged in v2):</b> funding ×
            1095 (live +4.29% ann from raw 0.003915, 24h mean +6.82%, max +9.18% ann from
            0.00838, 0 / 1441 negative — no ×100 recurrence); the GEX dual-reference sign
            (flip $62,599, spot +1.70% / idx +2.07%, both positive, tile spot side); the
            headline-vs-rollup gap (+82.8M headline vs +69.40M rollup = ~−13.4M, rollup
            below headline this run); the full MA matrix vs live spot $63,663.41 off parquet
            2026-07-28 00:05Z close $63,724.60 (D-EMA50 $64,952 −1.98% lost cap, D-SMA50
            $63,311 +0.56% coinciding with the settled 200W floor, W-SMA200 non-computable
            at 188 weekly bars while W-SMA150 $76,625 is computable but disused); the
            front-strip-through-25SEP +65.17M / back-three +4.22M = +69.40M rollup
            reconstruction; 30D RV 31.51% (30 returns / 31 closes; 29-return alt 31.89%);
            the scout R/R (entry $64,952, stop $63,311, target $67,622 → 1.63:1);
            cross-asset (|r| 0.212, BTC −2.82% vs NQ −2.38% = −0.44pt) and macro Tier-1 (10Y
            4.69% Monday thaw, HY OAS 2.79%, MOVE 77.2 returned, DXY 101.24, Fed net liq
            $5.917T) vs source; claims-vs-loaded-data (NTT / max-pain / strike-IV / BTC-NQ
            framework-only; JGB monthly do not lean; IV chain-median across 836 instruments
            not a tradable spread); the requireViewer gating pattern (path /desk/2026-07-28,
            first statement). The ma200w_trap_watch_state.json file was last recomputed
            2026-07-27 00:11Z (NOT re-run today) but an independent full-history glob
            recompute today confirms the completed-week (2026-07-26) W-SMA200 $63,311.02; the
            in-progress week (2026-08-02) recomputes to $63,534 and is disclosed as a
            rising-floor flag, not used as the stop. Overall: <b>post codex hostile
            audit</b>.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among
            principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a
            single atomic snapshot (2026-07-28 00:06Z) with section-level provenance
            disclosed in the manifest band above; the macro Tier-1 panel render is
            2026-07-27 22:16Z (~1.85h before snapshot) with Monday&rsquo;s FRED daily
            re-print, and some inputs are explicitly stale or pending and flagged as such.
            Levels, sizes, and conditions are illustrative of the desk&rsquo;s process, not
            standing recommendations. Past correlation, gamma, and positioning patterns do
            not bind future tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The cap reclaimed for one session, then gave way — the bear resolution
                fired. But the same day the buyer of record flipped to stacking longs on
                the dip, and the whole note compressed onto the settled floor $63,311. Do
                not short a floor the smart money is defending or buy a cap the price just
                lost. Read the close. Patient.
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
            v2 · 2026-07-28 00:06Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
