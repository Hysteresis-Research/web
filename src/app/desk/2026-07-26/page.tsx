import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-26 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-26',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-26' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260726() {
  await requireViewer('/desk/2026-07-26');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-26 · v2</span>
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
              <span className="dn-big">$64,392</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.35%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-26 00:06Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-26 00:06Z (snapshot pin, t == &ldquo;07-26 08:06&rdquo; BJ)</td>
                  <td className="dn-flag">
                    fresh · 1-min · anchor pinned to the 00:06Z row (BJ 08:06) for
                    reproducibility · file tail advances live under-foot (last read
                    00:08Z) · 24h-window convention: headline deltas use the
                    same-clock prior-day baseline t == &ldquo;07-25 08:06&rdquo; BJ
                    (endpoint minus the 24h-ago row); funding/flow row-statistics
                    span the 1,441-row window, premium means exclude null rows
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-26 08:01 BJ scan (00:01Z)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · archived verbatim at
                    /opt/desk-note/snapshots/2026-07-26-0007/ · ~5-min stale vs
                    snapshot anchor · in-progress bars
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-26 00:00Z snapshot</td>
                  <td className="dn-flag">
                    ~6-min stale · Deribit idx $64,538 vs live $64,392 · 870
                    instruments · headline aggregate +131.5M vs by-expiry rollup
                    +151.83M (= gex_summary.json net_gex $151,825,038) — a ~+20.33M
                    non-reconciling source-panel gap, disclosed per DN-003 lineage
                    (this run the rollup again sits ABOVE the headline, same sign
                    as the 07-25 gap)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-26 00:00Z
                  </td>
                  <td className="dn-flag">~6-min lag · 7d 1h bars · 22 assets · 165 rows · archived</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-25 22:16Z render</td>
                  <td className="dn-flag">
                    ~1.85h render lag · FRED Tier-1 daily rates FROZEN over the
                    weekend (07-25 Sat / 07-26 Sun) — 10Y flat 4.71%, TIPS flat
                    2.43%, HY OAS flat 2.77% vs the 07-25 note; only the
                    continuously-quoted FX ticked (DXY +0.04 to 101.47, USD/JPY
                    −0.04 to 163.79) · Fed net liq $5.917T (no fresh weekly print)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-26 00:06Z (close $64,383.70)</td>
                  <td className="dn-flag">
                    same-minute anchor · last bar 00:06Z, file mtime 00:06:xxZ ·
                    offsets recomputed vs live spot $64,392.49 · W-SMA150 /
                    W-SMA200 non-computable from the 2024–2026 MA subset (134
                    weekly bars) — the 200W cycle floor itself is available from
                    full history / the trap-watch state, see the row below
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W support watch</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · recomputed 2026-07-20 00:11Z</td>
                  <td className="dn-flag">
                    200W cycle floor AVAILABLE and maintained — last completed week
                    2026-07-19 close $64,694.70, W-SMA200 $63,078.14,
                    consecutive_above 3 (streak from 2026-07-05); the full
                    btcusdt_1m_*.parquet glob (360 weekly bars, 2019–2026)
                    independently recomputes the completed-week W-SMA200 to
                    $63,078.14. The 134-weekly-bar non-computability is only the
                    2024–2026 MA subset, not the cycle floor. Settled floor $63,078
                    (spot +2.08% above); nearest computable MA-subset line above it
                    is D-SMA50 $63,269.28 (+1.78%)
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
              <span className="dn-v">+4.30%</span>
              <span className="dn-src">live · 24h mean +4.24% (was +7.25% on 07-25) · max +9.14% ann (0.008345 field, 2 / 1441 rows) · min +0.73% · 0 negative rows · funding × 1095 (raw 0.003929)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">cooled off the re-heat</span>
              <span className="dn-src">range +0.73% / +9.14% · mean +7.25% → +4.24% ann · still 0 / 1441 negative rows — longs still paying, but the press eased into the up-print</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+1.34% (+1,425.6 BTC)</span>
              <span className="dn-src">live · 106,078.0 → 107,503.6 · fourth expansion of the down-leg, still the wrong shape — spot CVD +13,052 bid but futures CVD −3,619 / taker −3,646 / big −3,534 SELLING on a +0.35% print</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bull">64.23 / 35.77</span>
              <span className="dn-src">live_db `mkt_long_pct` · de-crowded 65.12 → 64.23 over the 24h (24h high 65.12 at the baseline, low 64.23 at the snap) — the crowded long finally easing off the recovery high 65.93 (07-24)</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+5,093 (net LONG, but trimmed)</span>
              <span className="dn-src">live · long 13,476.12 − short 8,383.24 = +5,092.88 (rounds +5,093) · continuous net-long since the 07-21 06:36Z cross · net peaked +7,839 @ 07-25 06:36Z then de-grossed −3,090 in one minute and bled to a +4,314 trough @ 15:21Z</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 24h-ago</span>
              <span className="dn-v bear">+7,302 → +5,093 (−2,209, −30.25%)</span>
              <span className="dn-src">|Δ|/prior_net = 2,208.99 / 7,301.87 = 30.25% · Δlong −1,724.3 / Δshort +484.7 — the buyer of record TRIMMED into the bounce: cut longs AND added shorts, reducing net-long conviction</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.0% / 29.74%</span>
              <span className="dn-src">GEX median IV · 870 inst · 30D close-to-close RV = logret.std × √365 × 100 on 30 daily returns (parquet last bar 00:06Z)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+3.52% (above)</span>
              <span className="dn-src">flip $62,205 · vs live spot $64,392 (+3.52%; 64,392.49/62,205 − 1 = 3.517%) / GEX file Deribit idx $64,538 (+3.75%; 64,538/62,205 − 1 = 3.751%) — both refs positive, tile uses spot side · aggregate +131.5M headline / +151.83M rollup · re-gammaed from +99.9M on 07-25</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The down-leg printed its first up-close and the backdrop repaired
                at the margins — but the buyer of record trimmed into the bounce
                and the D-EMA50 cap is still unreclaimed
              </span>. 07-25 closed{' '}
              <span className="dn-tag bull">$64,338.10</span> (+$221.60 vs
              07-24&rsquo;s $64,116.50) — the first completed up-close of the
              four-session down-leg off the 07-21 peak — and spot prints{' '}
              <span className="dn-tag bull">$64,392 (+0.35% on 24h)</span>, back
              above the <span className="dn-tag bull">D-SMA20 $64,272 (+0.19%)</span>{' '}
              / <span className="dn-tag bull">D-EMA20 $64,302 (+0.14%)</span> pair
              it lost last week. But it still sits{' '}
              <span className="dn-tag bear">−0.96% below the D-EMA50 $65,015
              cap</span> — the level that flipped to overhead resistance when the
              07-23 reclaim failed — so the up-close is a stabilisation, not a
              reclaim. OI expanded a fourth time{' '}
              <span className="dn-tag bear">+1,425.6 BTC (+1.34%)</span> and the
              shape is unchanged: spot CVD{' '}
              <span className="dn-tag bull">+13,052</span> bid against futures CVD{' '}
              <span className="dn-tag bear">−3,619</span>, taker-net{' '}
              <span className="dn-tag bear">−3,646</span> and big-net{' '}
              <span className="dn-tag bear">−3,534</span> all selling. Retail
              de-crowded <span className="dn-tag bull">65.12 → 64.23</span> and
              funding cooled off its re-heat (24h mean{' '}
              <span className="dn-tag bull">+7.25% → +4.24% ann</span>, still 0
              negative rows). The dealer book re-gammaed{' '}
              <span className="dn-tag bull">+99.9M → +131.5M headline</span>{' '}
              (rollup +151.83M). But the standout is smart money: still the buyer
              of record — net long <span className="dn-tag bull">+5,093</span>,
              continuous since the 07-21 06:36Z cross — yet it{' '}
              <span className="dn-em">trimmed −2,209 (−30.25%) into the up-print,
              cutting longs −1,724 and adding shorts +485</span>, a −3,090
              single-minute de-gross at 07-25 06:41Z. The one hard leg the recovery
              was built on used the first up-close to reduce, not add. This note
              keeps the scout <span className="dn-em">DEFERRED and the book
              FLAT</span>: no scout long into an up-close that did not reclaim the
              cap, a futures-led distribution OI, a rates-FALSE filter and a
              trimming buyer of record; and no chase-short into a re-gammaed
              positive book above a settled floor. Re-arm the long stays
              structural — a D-EMA50 reclaim on an up-close with buyers behind the
              OI and smart money adding, not trimming.
            </p>

            <p>
              BTC prints <span className="dn-tag">$64,392</span> live,{' '}
              <span className="dn-tag bull">+0.35%</span> on 24h, inside a tight{' '}
              <span className="dn-tag">$64,447 / $63,810</span> range (high @
              07-25 18:53Z / BJ 02:53 07-26, low @ 07-25 08:53Z / BJ 16:53).{' '}
              <span className="dn-signal">The four-session down-leg off the 07-21
              peak has turned its first completed up-close</span>: 07-21
              $66,522.40 → 07-22 $66,082.00 → 07-23 $65,069.60 → 07-24 $64,116.50 →
              07-25 <span className="dn-tag bull">$64,338.10 (+$221.60)</span>,
              with the in-progress 07-26 close at parquet last-bar{' '}
              <span className="dn-tag">$64,383.70</span> holding marginally above
              it. The MA matrix reads as a repaired-but-capped sandwich: spot has
              reclaimed the <span className="dn-tag bull">D-SMA20 $64,272
              (+0.19%)</span> and <span className="dn-tag bull">D-EMA20 $64,302
              (+0.14%)</span> pair, the <span className="dn-tag bull">D-SMA50
              $63,269.28 (+1.78%)</span> sits below as the nearest computable line
              above the cycle floor, and the first real resistance overhead is the{' '}
              <span className="dn-tag bear">D-EMA50 $65,015 (−0.96%)</span> failed
              cap.{' '}
              <span className="dn-em">
                The 200W cycle floor is available and maintained this run: the
                trap-watch state (ma200w_trap_watch_state.json, recomputed
                2026-07-20 00:11Z) carries the last completed week 2026-07-19 at
                W-SMA200 <span className="dn-tag bull">$63,078.14</span> with three
                consecutive weekly closes above it, and the full
                btcusdt_1m_*.parquet glob (360 weekly bars, 2019–2026)
                independently recomputes the same $63,078 — the 134-weekly-bar
                non-computability is only the 2024–2026 MA subset, not the cycle
                floor. So $63,078 is the settled floor (spot +2.08% above it) and
                the computable D-SMA50 $63,269.28 (+1.78%) sits just above it as
                the nearest MA-subset support.
              </span>{' '}
              The recovery&rsquo;s scout was ARMED on the SM buyer-of-record leg,
              moved DEFERRED on 07-24 when the D-EMA50 reclaim failed, and stayed
              deferred on 07-25; today does not re-arm it — the re-arm gate (a
              D-EMA50 reclaim on an up-close with OI expanding on buyers, SM adding
              long, AND the reclaim-long rates filter true) has none of its legs
              filled, and the SM leg weakened. The book stays flat.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · OI +1.34% but still distribution-shaped (spot bid vs futures sell) · retail de-crowded 65.12 → 64.23 · SM stayed buyer of record but TRIMMED −30.25% into the bounce · funding cooled off the re-heat</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position book is still distributing, even as the price
                stabilised
              </span>. OI expanded <span className="dn-tag bear">+1,425.6 BTC
              (+1.34%)</span> over the 24h — 106,078.0 → 107,503.6 — the fourth
              expansion of the down-leg, and the components stay split the same way:
              spot CVD ran <span className="dn-tag bull">+13,052</span>
              (reset-adjusted across the 07-25 07:00Z cb_cvd reset) while futures
              CVD ran <span className="dn-tag bear">−3,619</span> (reset-adjusted
              across the same-minute fut_cvd reset), taker-net{' '}
              <span className="dn-tag bear">−3,646</span> and big-net{' '}
              <span className="dn-tag bear">−3,534</span> — aggressive futures
              selling into a persistent spot bid. The difference from 07-25 is that
              this time the spot bid won the tape: the print is{' '}
              <span className="dn-tag bull">+0.35%</span> up rather than −1.33%
              down. Retail de-crowded{' '}
              <span className="dn-tag bull">mkt_long_pct 65.12 → 64.23</span> (24h
              high 65.12 at the baseline, low 64.23 at the snap) — the crowded long
              finally easing off the recovery high 65.93 it printed on 07-24.{' '}
              <span className="dn-em">Price up + OI up + spot bid winning + retail
              de-crowding is a healthier mix than 07-25&rsquo;s down-print — but
              the futures/taker/big selling and the OI-up-on-a-spot-bid shape are
              still distribution, not the demand-fuelled OI-up the scout was armed
              to buy.</span>
            </p>

            <p>
              Smart money stayed the buyer of record but reduced conviction — the
              standout of the print.{' '}
              <span className="dn-signal">
                SM trimmed its net-long into the first up-close
              </span>. SM net is <span className="dn-tag bull">+5,093</span> (long
              13,476.12 − short 8,383.24 = +5,092.88) vs the 24h-ago{' '}
              <span className="dn-tag">+7,302</span> — a{' '}
              <span className="dn-tag bear">Δnet −2,209 (−30.25%)</span>
              {' '}(|+5,092.88 − (+7,301.87)| / 7,301.87 = 30.25%). And the
              decomposition is hostile to the recovery read:{' '}
              <span className="dn-em">Δlong −1,724.3, Δshort +484.7</span> — the
              buyer of record cut its longs AND added shorts, reducing net-long
              conviction by nearly a third. The move was concentrated: SM net
              peaked <span className="dn-tag bull">+7,839 @ 2026-07-25 06:36Z (BJ
              14:36)</span>, then a single-minute de-gross printed at{' '}
              <span className="dn-tag bear">2026-07-25 06:41Z (BJ 14:41) — Δnet
              −3,090.2, Δlong −4,200.3, Δshort −1,110.0 at spot $64,019</span> (a
              long flush larger than the short cut), and net bled to a{' '}
              <span className="dn-tag">+4,314 trough @ 2026-07-25 15:21Z (BJ
              23:21)</span> before recovering to +5,093 at the snap. The
              buyer-of-record leg is therefore still <em>TRUE</em> (net long,
              continuous since the 07-21 cross) but it has visibly blinked — it
              used the first up-close to trim, not to add.{' '}
              <span className="dn-em">A buyer of record that trims 30% into the
              first bounce, with the OI still futures-led and the cap unreclaimed,
              is not the buyer adding behind a reclaim the scout needs.</span>
            </p>

            <p>
              The leverage side cooled off its 07-25 re-heat into the up-print —
              constructive, but the funding is still positive.{' '}
              <span className="dn-signal">
                Funding eased without turning negative
              </span>: live <span className="dn-tag">+4.30% ann</span> (raw
              0.003929 × 1095), 24h mean{' '}
              <span className="dn-tag bull">+4.24%</span> (down from +7.25% on
              07-25), range <span className="dn-tag">+0.73% / +9.14%</span> (max
              0.008345 field, 2 / 1441 rows — short of the +10.95% Binance cap), and{' '}
              <span className="dn-tag">0 / 1441 negative rows</span> — longs are
              still paying to hold, but the press has come off. OI up, funding
              positive but cooling, retail de-crowding, price up:{' '}
              <span className="dn-em">the leverage book let some air out into the
              bounce rather than pressing the long side harder — a milder mix than
              07-25, but not a washed-out one.</span> Perp trades a{' '}
              <span className="dn-tag bear">−$60.42 discount</span> to spot at the
              snap (1h mean −$56.49, range −$68.47 / −$45.43; 4h mean −$59.72; 24h
              mean −$62.55, range −$127.31 / −$17.83 — a persistent discount, never
              premium across the 24h). 1-min aggregate skew snap{' '}
              <span className="dn-tag bear">−22.1</span> (1h mean −15.42, range
              −39.4 / +22.1) — a sell-aggressor tilt into the snapshot.
            </p>

            <p>
              Windowed flow reads <em>an up-print carried by a persistent spot bid
              against futures selling, with the last hour flat</em>. 24h: price{' '}
              <span className="dn-tag bull">+0.35%</span>, OI{' '}
              <span className="dn-tag bear">+1,425.6 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +13,052</span>{' '}
              <span className="dn-em">(reset-adjusted across the 07-25 07:00Z
              cb_cvd reset)</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −3,619</span>{' '}
              <span className="dn-em">(reset-adjusted across the same-minute
              fut_cvd reset)</span>, big-print{' '}
              <span className="dn-tag bear">−3,534 BTC / 494 prints</span>,
              taker-net <span className="dn-tag bear">−3,646</span> —{' '}
              <span className="dn-em">spot bought heavily, futures sold, OI
              expanded on the sell side; the +0.35% printed on a spot bid
              overwhelming a futures-led distribution</span>. 4h (into snapshot):
              price <span className="dn-tag bull">+0.06%</span>, OI{' '}
              <span className="dn-tag bull">+112.2 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,751.2</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −19.3</span>, big-print{' '}
              <span className="dn-tag bull">+30.4 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−19.3</span> — <em>flat-to-up, spot bid
              still the driver with futures roughly balanced</em>. 1h: price{' '}
              <span className="dn-tag bear">−0.06%</span>, OI{' '}
              <span className="dn-tag bull">+13.5 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −28.9</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +17.4</span>, big-print{' '}
              <span className="dn-tag bull">+16.2 BTC / 10 prints</span>, taker-net{' '}
              <span className="dn-tag bull">+17.4</span> — <em>flat into the snap,
              both books quiet</em>. The persistent spot CVD bid is the single
              constructive read of the recovery — and today it finally out-pushed
              the futures selling to a green print — but it is still buying into a
              futures-led distribution and it has not reclaimed the cap.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF resonance eased to 1 long / 4 short / 5 neutral (from 1/6/3) · regime 6/9 trend-continuation (JT≥0) · 30m water-up death cross just printed vs 1w water-down golden cross just printed · 1M ⚡TD9 BUY + bottom-div 1h/3d/1w</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF engine softened its bearishness into the up-print but the
                net still reads sell-the-bounce
              </span>. The resonance is{' '}
              <span className="dn-tag bear">1 long / 4 short / 5 neutral</span>{' '}
              across 10 frames (vs 07-25&rsquo;s 1 long / 6 short / 3 neutral — two
              short frames resolved to neutral). The short-term band is mixed
              rather than uniformly bearish (15m neutral, 30m short, 1h neutral, 4h
              short); the mid band carries the trend damage — the{' '}
              <span className="dn-tag bear">12h water-up death cross is 4 bars
              old</span> and the 8h water-up death cross 8 bars. The fresh crosses
              cut both ways: a <span className="dn-tag bear">30m water-up death
              cross just printed</span> against a{' '}
              <span className="dn-tag bull">1w water-down golden cross just
              printed</span>. The reversal set stays live:{' '}
              <span className="dn-tag bull">1M ⚡TD9 BUY</span>, a bottom-div cluster
              on <span className="dn-tag bull">1h / 3d / 1w</span>, and a 3d
              water-down golden cross 5 bars ago; against it a top-div cluster on
              15m / 30m / 1d. The regime engine reads{' '}
              <span className="dn-tag">6/9 momentum trend-continuation (JT≥0)</span>{' '}
              (flipped from 07-25&rsquo;s 5/9 cycle-reversal). RSI is mid across the
              board (1h 53.7, 4h 42.4, 8h 46.4, 1w 39.1) with no frame overbought
              or deeply oversold.{' '}
              <span className="dn-em">
                Read straight: the engine eased off its most-bearish reading as the
                price stabilised, the just-printed 1w water-down golden cross and
                the 1M TD9 BUY are constructive, but the mid-band death crosses and
                the top-div cluster keep the net a sell-the-bounce until an up-close
                reclaims the D-EMA50 cap.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,329</td><td className="num">52.8</td><td className="bear">death (water-up) 15b</td><td className="bull">above ↓64.2k 42b</td><td>Buy 3</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">64,329</td><td className="num">58.4</td><td className="bear">death (water-up) 刚印 (just printed)</td><td className="neut">in cloud 63.9–64.4k 19b</td><td>Buy 1</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">64,329</td><td className="num">53.7</td><td className="bull">golden (water-dn) 22b</td><td className="bear">below ↑64.4k 60b</td><td>Sell 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">64,329</td><td className="num">42.4</td><td className="bear">death (water-up) 21b</td><td className="bear">below ↑64.4k 1b</td><td>Sell 4</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">64,329</td><td className="num">46.4</td><td className="bear">death (water-up) 8b</td><td className="bull">above ↓63.8k 51b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">64,329</td><td className="num">48.3</td><td className="bear">death (water-up) 4b</td><td className="bull">above ↓62.2k 24b</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">64,329</td><td className="num">50.6</td><td className="neut">—</td><td className="neut">in cloud 62.2k–70.2k 6b</td><td>Buy 3</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">64,329</td><td className="num">45.0</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑75.3k 18b</td><td>Buy 1</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">64,329</td><td className="num">39.1</td><td className="bull">golden (water-dn) 刚印 (just printed)</td><td className="bear">below ↑97.1k 25b</td><td>Sell 2</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">64,329</td><td className="num">44.0</td><td className="neut">—</td><td className="bull">above ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 08:01 BJ scan (00:01Z; rolling
                    latest file, archived verbatim at
                    /opt/desk-note/snapshots/2026-07-26-0007/). Header alerts:{' '}
                    <em>1w water-down golden cross (just printed)</em>,{' '}
                    <em>30m water-up death cross (just printed)</em>,{' '}
                    <em>1M ⚡TD9 BUY</em>. Net read: 多周期共振偏空 · 反弹偏卖
                    (bearish resonance · sell-the-bounce), high-TF bottom-div
                    cluster 3d/1w. Scan spot $64,329, 24h +0.35%, 24h H/L $64,417 /
                    $63,760, qVol $2.96B (the live-tape header at 00:06Z shows
                    $64,392 / +0.35% on the same window — the 5-minute gap accounts
                    for the level difference). Closes are in-progress bars; treat
                    every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the repaired-but-capped read. Spot $64,392.49
              sits <span className="dn-tag bull">+1.78% above D-SMA50
              $63,269.28</span> — the nearest computable MA-subset line above the
              settled $63,078 W-SMA200 cycle floor (spot +2.08% above it) — and has
              reclaimed the <span className="dn-tag bull">D-SMA20 $64,272.13
              (+0.19%)</span> / <span className="dn-tag bull">D-EMA20 $64,301.61
              (+0.14%)</span> pair, but remains beneath a stack of overhead lines
              in order: <span className="dn-tag bear">D-EMA50 $65,015.40
              (−0.96%)</span> (the failed cap / entry-validation line),{' '}
              <span className="dn-tag bear">D-EMA100 $67,761.73 (−4.97%)</span>{' '}
              (the working first target on any reclaim),{' '}
              <span className="dn-tag bear">D-SMA100 $69,663.01 (−7.57%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,775.28 (−7.71%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,788.62 (−7.73%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $69,941.30 (−7.93%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $70,676.04 (−8.89%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $72,133.37 (−10.73%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $72,920.50 (−11.69%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $73,497.71 (−12.39%)</span>.
              Far above and disused: W-EMA150 $76,742.70 (−16.09%; seed), W-EMA50
              $78,968.48 (−18.46%), W-EMA100 $80,312.42 (−19.82%), W-SMA50
              $85,386.31 (−24.59%), W-SMA100 $88,488.84 (−27.23%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-26 00:06Z (close
                $64,383.70); offsets recomputed against live spot $64,392.49.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. W-SMA150 / W-SMA200 non-computable from this
                2024–2026 MA subset (134 weekly bars) — the 200W cycle floor
                $63,078 is separately available from the trap-watch state and the
                full-history glob; W-EMA150 $76,742 and W-EMA200 $72,920 show
                because the EMA seeds from available history and are reported as
                such. Daily closes: 07-20 $65,224.80, 07-21 $66,522.40, 07-22
                $66,082.00, 07-23 $65,069.60, 07-24 $64,116.50, 07-25 $64,338.10
                (the first completed up-close of the down-leg, +$221.60, but still
                below the D-EMA50 cap), 07-26 (in-progress) $64,383.70.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book re-gammaed +99.9M → +131.5M headline / +151.83M rollup · flip $62,205 (spot +3.52% above) · strip more positive — the 07-25 $64k negative wall is gone, $64.5k now +13.38 · 31JUL +87.21M dominant · $70k/$72k call caps overhead</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book re-gammaed positive after the 07-25 de-gamma
              </span>. Aggregate GEX is <span className="dn-tag bull">+131.5M /
              1%</span> on the HTML headline, with the by-expiry rollup summing{' '}
              <span className="dn-tag">+151.83M</span> (= gex_summary.json
              net_gex $151,825,038) — a{' '}
              <span className="dn-em">~+20.33M non-reconciling source-panel gap,
              disclosed per DN-003 lineage; this run the rollup again sits ABOVE
              the headline, the same sign as the 07-25 gap</span>. Either way the
              book has recovered from the 07-25 +99.9M — the de-gamma partially
              reversed and the book is deeper net-long-gamma again. The 0-γ flip is{' '}
              <span className="dn-tag">$62,205</span> and spot $64,392 sits{' '}
              <span className="dn-tag bull">+3.52% above</span> it
              (64,392.49 / 62,205 − 1 = +3.517%); the GEX file&rsquo;s own
              &ldquo;dist to flip&rdquo; reads +3.8% off its Deribit-index $64,538
              ($146 above live spot), which is{' '}
              <span className="dn-tag bull">+3.75%</span> (64,538 / 62,205 − 1 =
              +3.751%) — both references positive, spot above the flip on both, the
              cushion roughly flat vs 07-25&rsquo;s +3.49%.{' '}
              <span className="dn-em">
                The strip is more positive this run: the $64,000 −10.23M negative
                pocket that sat at spot on 07-25 is gone (the $64,500 wall is now
                +13.38M positive support), and the only near-dated negatives are
                small — 27JUL −3.14M and 29JUL −0.04M — against a 26JUL 0.3DTE that
                is +14.52M positive and settles at 08:00Z today (~8h after
                snapshot). The lone material negative is the $60,000 −17.48M
                crash-put residual, far below spot.
              </span>{' '}
              The dominant magnet is <span className="dn-tag bull">31JUL 5.3DTE
              +87.21M</span> (five days out), followed by 7AUG +24.75M and 28AUG
              +18.28M. The heaviest walls are the call caps overhead:{' '}
              <span className="dn-tag bull">$70k +49.35M</span>,{' '}
              <span className="dn-tag bull">$72k +31.06M</span>,{' '}
              <span className="dn-tag bull">$68k +18.71M</span>,{' '}
              <span className="dn-tag bull">$64.5k +13.38M</span>,{' '}
              <span className="dn-tag bull">$67k +11.88M</span>,{' '}
              <span className="dn-tag bull">$65k +11.49M</span>,{' '}
              <span className="dn-tag bull">$66k +11.30M</span>,{' '}
              <span className="dn-tag bull">$80k +8.96M</span>,{' '}
              <span className="dn-tag bull">$69k +8.31M</span>, against the{' '}
              <span className="dn-tag bear">$60k −17.48M</span> crash-put below.{' '}
              <span className="dn-em">
                Net: the book is deeper dampening than 07-25, spot is +3.52% above
                the flip, the near-dated negative pocket at spot has cleared, and a
                wall of positive-gamma call caps sits $65k–$72k overhead — so the
                no-chase-short discipline strengthened back up this run, and the
                same call-wall cap structure ($65k–$72k) that has capped the whole
                recovery is intact overhead.
              </span>
            </p>

            <p>
              IV median across 870 instruments is{' '}
              <span className="dn-tag">42.0%</span> against 30D close-to-close RV
              of <span className="dn-tag">29.74%</span> — chain-level richness{' '}
              <span className="dn-tag">~+12.3pt</span>. A chain-median across N
              instruments, <span className="dn-em">not</span> a tradable spread;
              expiry-/strike-level vega, skew and term structure remain not loaded;
              the vol read stays framework-only. Put/Call OI ratio 0.43 (call OI
              305,438 / put OI 131,141) — a call-heavy book, consistent with the
              overhead call-wall cap structure. RV methodology: 30D close-to-close,
              logret.std × √365 × 100 on the last 30 daily log returns, anchored to
              parquet last bar 2026-07-26 00:06Z.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Tier-1 FROZEN over the weekend — 10Y flat 4.71%, TIPS flat 2.43%, HY OAS flat 2.77% (1bp from the gate), DXY 101.47 EXTREME RISK-OFF · reclaim-long rates filter stays FALSE · put-spread both-legs-required, HY OAS still 1bp shy</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape is frozen over the weekend and the split holds
              </span>. Dashboard render is 2026-07-25 22:16Z, ~1.85h before the
              snapshot, but the FRED Tier-1 daily rates have not printed a new value
              since Friday — 07-25 is Saturday, 07-26 Sunday — so the core is
              unchanged vs the 07-25 note. US 10Y nominal{' '}
              <span className="dn-tag bear">4.71% (flat)</span>, regime z{' '}
              <span className="dn-tag bear">+2.66</span>, episodic z{' '}
              <span className="dn-tag bear">+2.34</span> — EXTREME RISK-OFF. 10Y
              TIPS real <span className="dn-tag bear">2.43% (flat)</span>, regime z{' '}
              <span className="dn-tag bear">+3.05</span> — EXTREME RISK-OFF. 5Y5Y
              BE inflation <span className="dn-tag">2.28% (flat)</span>. HY OAS{' '}
              <span className="dn-tag">2.77% (flat)</span>, regime z{' '}
              <span className="dn-tag bull">−0.69</span> — still &ldquo;loose&rdquo;
              and still just <span className="dn-em">1bp shy of the 2.78%
              put-spread re-grow gate</span>. MOVE bond vol{' '}
              <span className="dn-tag">76.8 (flat)</span> — neutral tag. DXY{' '}
              <span className="dn-tag bear">101.47 (+0.04)</span>, regime z{' '}
              <span className="dn-tag bear">+2.30</span> — EXTREME RISK-OFF, the
              dollar a touch firmer on the continuously-quoted tape. NFCI{' '}
              <span className="dn-tag bull">−0.552 (flat, stale 8d)</span> —
              RISK-ON. Fed net liquidity{' '}
              <span className="dn-tag bear">$5.917T (flat)</span>, episodic z{' '}
              <span className="dn-tag bear">−2.47</span> — no fresh weekly print.
              USD/JPY <span className="dn-tag">163.79 (−0.04)</span>; US-JP 10Y
              spread <span className="dn-tag">2.04% (flat)</span>.{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) stays FALSE at
                4.71% — the macro gate on a scout long is firmly shut. The
                put-spread re-grow gate is BOTH-legs-required (HY OAS &gt; 2.78%
                AND 10Y &gt; 4.53%): the 10Y leg is TRUE at 4.71% and the HY OAS
                leg is still 1bp from firing at 2.77% — unchanged over the weekend,
                and a single-leg fire is not a hedge trigger. The rates/dollar core
                is tight, the credit/liquidity side loose; the split persists.
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
                <tr><td>US 10Y nominal</td><td className="num">4.71%</td><td className="num">flat (wknd)</td><td className="num bear">+2.66</td><td className="num bear">+2.34</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.43%</td><td className="num">flat (wknd)</td><td className="num bear">+3.05</td><td className="num bear">+2.06</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.28%</td><td className="num">flat (wknd)</td><td className="num">+0.77</td><td className="num bear">+2.51</td><td className="neut">no tag · episodic</td></tr>
                <tr><td>HY OAS</td><td className="num">2.77%</td><td className="num">flat (wknd)</td><td className="num bull">−0.69</td><td className="num">+1.23</td><td className="bull">loose · 1bp from re-grow gate</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.552</td><td className="num">flat</td><td className="num bull">−1.51</td><td className="num bull">−1.71</td><td className="bull">RISK-ON · stale 8d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">76.8</td><td className="num">flat (wknd)</td><td className="num">+0.30</td><td className="num">+1.75</td><td className="neut">neutral</td></tr>
                <tr><td>DXY</td><td className="num">101.47</td><td className="num bear">+0.04</td><td className="num bear">+2.30</td><td className="num">+1.04</td><td className="bear">EXTREME RISK-OFF · firmer</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.917T</td><td className="num">flat</td><td className="num">+0.56</td><td className="num bear">−2.47</td><td className="bull">loose · no fresh print</td></tr>
                <tr><td>USD/JPY</td><td className="num">163.79</td><td className="num bull">−0.04</td><td className="num bear">+1.74</td><td className="num">+2.05</td><td className="neut">no tag · episodic</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.04%</td><td className="num">flat (wknd)</td><td className="num">−0.26</td><td className="num">+2.34</td><td className="neut">neutral</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">monthly · do not lean</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7714</td><td className="num">−0.00</td><td className="num bull">−1.34</td><td className="num">−0.62</td><td className="neut">no tag</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 165 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Regime IDIOSYNCRATIC, mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.234</span> (below the 0.25
              threshold). BTC&rsquo;s listed ties, sorted by |r|: NQ{' '}
              <span className="dn-tag">+0.509</span>, SP500{' '}
              <span className="dn-tag">+0.422</span>, COPPER{' '}
              <span className="dn-tag">+0.414</span>, TSLA{' '}
              <span className="dn-tag">+0.388</span>, SILVER{' '}
              <span className="dn-tag">+0.372</span>, PLAT{' '}
              <span className="dn-tag">+0.364</span>, JP225{' '}
              <span className="dn-tag">+0.353</span>, GOLD{' '}
              <span className="dn-tag">+0.310</span>, URNM{' '}
              <span className="dn-tag">+0.285</span>, NVDA{' '}
              <span className="dn-tag">+0.269</span>, CL{' '}
              <span className="dn-tag">−0.262</span>, BRENT{' '}
              <span className="dn-tag">−0.246</span>. 7d performance:{' '}
              <span className="dn-tag bear">BTC −0.63%</span>, NQ{' '}
              <span className="dn-tag bear">−0.79%</span>, SP500{' '}
              <span className="dn-tag bear">−0.15%</span>, JP225{' '}
              <span className="dn-tag bear">−2.03%</span>, NVDA{' '}
              <span className="dn-tag bull">+2.86%</span>, META{' '}
              <span className="dn-tag bear">−6.36%</span>, MSFT{' '}
              <span className="dn-tag bear">−3.37%</span>, GOOGL{' '}
              <span className="dn-tag bear">−7.45%</span>, AMZN{' '}
              <span className="dn-tag bear">−6.17%</span>, TSLA{' '}
              <span className="dn-tag bear">−18.04%</span>. Commodities led:
              SILVER <span className="dn-tag bull">+4.36%</span>, CL{' '}
              <span className="dn-tag bull">+3.65%</span>, URNM{' '}
              <span className="dn-tag bull">+2.21%</span>, COPPER{' '}
              <span className="dn-tag bull">+1.56%</span>, BRENT{' '}
              <span className="dn-tag bull">+1.30%</span>, GOLD{' '}
              <span className="dn-tag bull">+1.02%</span>.{' '}
              <span className="dn-em">
                BTC (−0.63% 7d) leads parts of the equity/megacap cluster — a thin
                +0.16pt edge over NQ (−0.79%) and clear of a −18.04% TSLA, a −7.45%
                GOOGL and a −6.36% META — but it trails both SP500 (−0.15%) and
                NVDA (+2.86%), and energy, silver, uranium, copper and gold all
                outran it. So this stays a stocks-relative tell, not full-strip RS
                leadership (DN-001 lineage), and the edge over NQ has narrowed to
                +0.16pt from +1.81pt on 07-25.
              </span>{' '}
              JGB monthly 2.67% carries an EXTREME RISK-OFF monthly tag — do not
              lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · book FLAT · scout DEFERRED (re-arm structural, no legs filled, SM leg weakened) · chase-short stood down (deterrent re-strengthened by the re-gamma) · put-spread not re-grown on a single 10Y leg</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book stays flat and the scout stays deferred a third day
              </span>. The prior note (07-25) held the reclaim scout DEFERRED with a
              structural re-arm gate. None of the re-arm conditions filled today,
              and the buyer-of-record leg weakened: (1) the desk needs a D-EMA50
              reclaim on an <em>up-close</em> — 07-25 was an up-close but closed
              $64,338.10, still below the $65,015 cap, so the cap is unreclaimed;
              (2) it needs OI expanding on <em>buyers</em>, and today&rsquo;s OI
              expansion is still futures-led distribution (spot bid vs futures /
              taker / big selling); (3) it needs the reclaim-long rates filter true
              (10Y &lt; 4.55%), and the 10Y is frozen FALSE at 4.71%; and (4) the
              SM buyer-of-record leg <em>trimmed</em> −30.25% into the bounce
              (Δlong −1,724, Δshort +485), the opposite of the SM-adding the
              reclaim needs. Against the chase, the dealer book re-gammaed{' '}
              (+99.9M → +131.5M, rollup +151.83M), the $64k negative pocket at spot
              cleared, spot is +3.52% above the flip, the floor holds, and the
              1M ⚡TD9 BUY plus the 1h/3d/1w bottom-div warn of bounce risk — so a
              hard chase-short is more stood-down than it was on 07-25, not less.
              The book today is: no scout entry, no short, no fresh hedge.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · DEFERRED · re-arm structural · no legs filled · SM leg weakened · wait for a confirming up-close reclaim on buyers</span>
              <div className="dn-trade-name">
                Reclaim scout — deferred a third day; the first up-close came but stopped below the D-EMA50 cap, OI stayed distribution-shaped, rates filter frozen FALSE, and the buyer of record trimmed −30% into the bounce
              </div>
              <div className="dn-thesis">
                The scout was armed on the SM buyer-of-record leg (net long since
                the 07-21 06:36Z cross) and is gated on a genuine reclaim of the
                D-EMA50 cap — the level that validated the recovery&rsquo;s entry
                and then flipped to overhead resistance when 07-23 closed
                $65,069.60 beneath it (the cap has since slid to $65,015). Today
                the down-leg printed its first up-close (07-25 $64,338.10, +$221.60)
                and spot reclaimed the D-SMA20 / D-EMA20 pair, but it stopped
                −0.96% below the D-EMA50 cap; the OI expanded a fourth time
                (+1,425.6 BTC) but on futures-led distribution with the spot bid
                the only positive; funding cooled but stayed positive (0 negative
                rows); and — the new development — the buyer of record trimmed its
                net-long −2,209 (−30.25%), cutting longs and adding shorts, using
                the first bounce to reduce rather than add. The reclaim requires an
                <em> up-close</em> reclaim of the D-EMA50 $65,015 with OI expanding
                on buyers, SM adding long, and the rates filter (10Y &lt; 4.55%)
                true — none of which holds. Status: <em>deferred</em>, re-arm is
                structural and the SM leg now needs to re-firm.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm trigger (all required)</span><span className="dn-lvl-v bull">1d close &gt; D-EMA50 $65,015 (an up-close reclaim, not a print) AND OI expanding on buyers (spot+futures CVD both up, SM adding long not covering/trimming) AND 10Y &lt; 4.55% close</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on the confirming up-close reclaim, scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">the settled floor — W-SMA200 $63,078 (maintained in the trap-watch state, three weekly closes above) / computable D-SMA50 $63,269; a daily close beneath ends the digestion-above-floor read</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">D-EMA100 $67,762 (working first target) then the D-SMA100 $69,663 / W-SMA20 $69,789 cluster</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · take half at D-EMA100</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> re-arm entry ~D-EMA50 $65,015, stop the floor $63,078 =
                ~$1,937 risk; first target D-EMA100 $67,762 = ~$2,747 reward ≈{' '}
                <b>1.42:1</b> (2,747 / 1,937 = 1.418). <b>Hard rule:</b> the entry
                is decided on the confirming up-close with buyers behind the OI AND
                smart money adding, not on a bounce into the cap and not while the
                buyer of record is trimming. An up-close that stalls below the cap,
                a futures-led OI expansion, a frozen-FALSE rates filter and a
                −30% SM trim is a stabilisation, not a reclaim; do not pre-empt the
                up-close.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · chase-short · STOOD DOWN · deterrent re-strengthened by the re-gamma</span>
              <div className="dn-trade-name">
                Chase-short — stood down; the book re-gammaed +99.9M → +131.5M, the $64k negative wall at spot cleared, the floor holds and oversold bounce-hints keep it late
              </div>
              <div className="dn-thesis">
                The whole recovery lineage has declined the chase-short on the
                grounds that the dealer book is net-long-gamma — a dampening book
                that punishes momentum shorts. That deterrent weakened on 07-25
                when the book de-gammaed &gt;50%; today it re-strengthened:
                aggregate GEX recovered from +99.9M to +131.5M (rollup +151.83M),
                the $64,000 −10.23M negative pocket that sat at spot on 07-25 has
                cleared (the $64,500 wall is now +13.38M positive), spot is +3.52%
                above the flip, the floor holds (spot +1.78% above the computable
                D-SMA50, three completed weekly closes above the $63,078 lineage
                floor), and the 1M ⚡TD9 BUY plus the 1h/3d/1w bottom-div cluster
                warn that the tape is stretched enough for the relief bounce that
                has now started. Status: <em>stood down</em>, monitored.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">would-arm trigger</span><span className="dn-lvl-v bear">a 1d close &lt; the floor (D-SMA50 $63,269 / $63,078 lineage) with aggregate GEX turning net-negative (a fresh negative near-dated chunk added) — a through-the-floor break into a negative-gamma book</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v bear">no chase-short into a re-gammaed net-positive book above the flip with the floor holding and the 1M TD9 BUY + bottom-div cluster live</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> a short is armed by a floor break INTO a
                negative-gamma book, not by any de-gamma of a positive one — and
                this run the book re-gammaed rather than de-gammaed. Until the floor
                gives on a close with the book flipping negative, the chase-short
                stays a watch.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread NOT re-grown · both-legs-required gate not met (HY OAS 1bp shy, frozen over the weekend)</span>
              <div className="dn-trade-name">
                Downside put-spread — not re-grown; the re-grow gate is BOTH-legs-required and only the 10Y leg is TRUE (HY OAS 2.77% still 1bp from firing, unchanged over the weekend)
              </div>
              <div className="dn-thesis">
                The put-spread re-grow gate is BOTH-legs-required by lineage
                design: HY OAS &gt; 2.78% close AND 10Y &gt; 4.53% close. The 10Y
                leg is firmly TRUE at 4.71%, and the HY OAS leg is still 1bp from
                firing at 2.77% — frozen over the weekend, the closest the hedge
                trigger has come but not fired. A single-leg fire is not a hedge
                trigger; the both-legs rule exists precisely so a lone rates move
                does not re-grow a tail into a still-loose credit tape (NFCI
                RISK-ON, HY OAS regime z −0.69). No roll, no fresh leg.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-grow trigger (both legs)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.77%, 1bp to fire) AND 10Y &gt; 4.53% close (currently 4.71%, TRUE)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bear">10Y &lt; 4.55% close — FALSE at 4.71%, frozen over the weekend; the macro gate on a scout long is shut</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as
                the levels drift, not backtested breakpoints. If both legs ever
                fire together, reassess the hedge then — this note carries no
                standing roll instruction and names no forward expiry; the dealer
                strip is net-long-gamma and a fresh tail would not carry an
                amplifier tailwind here. The single-leg-close proximity
                of HY OAS is worth flagging but not acting on, and the weekend
                freeze means the next FRED print (Monday) is the earliest it can
                move.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · first up-close but capped below D-EMA50 · OI still distribution-shaped · buyer of record trimmed −30% · book re-gammaed, floor holds · scout deferred, book flat</span>
            </h2>

            <p>
              Of the 07-25 conditions: the D-EMA50 reclaim DID NOT FIRE — 07-25
              closed $64,338.10, an up-close but still below the $65,015 cap, and
              spot is now −0.96% beneath it; the OI-up-on-buyers condition DID NOT
              FIRE — OI expanded but on futures-led distribution (spot bid vs
              futures / taker / big selling); the reclaim-long rates filter STAYED
              FALSE at 4.71% (frozen over the weekend); the floor HELD (spot +1.78%
              above the computable D-SMA50 $63,269, three completed weekly closes
              above the $63,078 lineage floor); the buyer-of-record leg STAYED TRUE
              (SM net long +5,093, continuous since the 07-21 cross) but{' '}
              <em>trimmed −30.25%</em> into the bounce; the dealer book RE-GAMMAED
              (+99.9M → +131.5M) rather than de-gammaed further.{' '}
              <em>No condition fired to arm a trade; the failed-cap-test read
              extended into a stabilisation that improved the backdrop at the
              margins but left the gate unmet and the SM leg weaker.</em> The
              conditions re-set around a first-up-close-but-capped tape, a
              distribution-shaped OI, a re-gammaed dealer book, a trimming buyer of
              record, and a holding floor:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Reclaim scout (long) — re-arm gate</td><td className="bull">1d close &gt; D-EMA50 $65,015 (up-close) AND OI expanding on buyers AND SM adding long AND 10Y &lt; 4.55% close</td><td>scout long 0.2R, stop the floor $63,078 / $63,269, target D-EMA100 $67,762 · R/R ≈ 1.42:1</td></tr>
                <tr><td>Cap reclaim confirms (up-leg begins)</td><td className="bull">1d close &gt; $65,015 with SM adding long and OI on buyers</td><td>re-arm the scout live; the digestion-above-floor read converts to a recovery leg toward D-EMA100</td></tr>
                <tr><td>Cap-test failure resumes (down-leg continues)</td><td className="bear">a fresh 1d close lower, losing the D-SMA50 $63,269 / $63,078 floor</td><td>the digestion-above-floor read ends; reassess — a floor break is the escalation, not the capped up-close</td></tr>
                <tr><td>Chase-short (would-arm)</td><td className="bear">1d close &lt; the floor WITH aggregate GEX turning net-negative (fresh negative near-dated chunk)</td><td>a through-the-floor break into a negative-gamma book would arm a short with stop back above the floor; the re-gammaed book does not arm it</td></tr>
                <tr><td>Macro tail re-grow (BOTH legs)</td><td className="bear">HY OAS &gt; 2.78% (1bp to fire, frozen) AND 10Y &gt; 4.53% (TRUE at 4.71%)</td><td>reassess a downside put-spread hedge; a single-leg fire is NOT a trigger, no standing roll or forward expiry set here</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">10Y &lt; 4.55% close — FALSE at 4.71%, frozen over the weekend</td><td>the macro gate on a scout long is shut; a reclaim print without the filter true does not translate to a live long</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the stabilisation converts into a genuine up-close reclaim
                of the D-EMA50 $65,015 with buyers behind the OI (spot AND futures
                CVD up, smart money adding long not trimming, and the 10Y back
                below 4.55%), or whether the buyer of record&rsquo;s −30% trim
                marks the top of the bounce and a fresh lower close rolls back to
                test the D-SMA50 / $63,078 floor — where only a break into a
                net-negative dealer book arms the chase-short the lineage has stood
                down all recovery
              </span>. Until then this note runs as written: the reclaim scout is
              deferred a third day with a structural re-arm gate and a weakened SM
              leg, the chase-short is stood down (its deterrent re-strengthened by
              the re-gamma), and the put-spread is not re-grown on a single 10Y
              leg. The down-leg turned its first up-close and the backdrop repaired
              at the margins — D-SMA20/EMA20 reclaimed, retail de-crowded, funding
              cooled, the book re-gammaed, the MTF softened — but the D-EMA50 cap is
              unreclaimed, the OI is still futures-led, and the buyer of record
              trimmed into the bounce. The book stays FLAT. The right read for the
              next 24h is <em>patient — the reclaim is decided on the up-close with
              smart money adding, not on the first bounce that trimmed it</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit — every finding
              grep-closed to zero residue
            </span>
            <b>Status:</b> this is the v2 EN, promoted in STAGE C from the v1 draft
            authored off the 2026-07-26 00:06Z atomic snapshot. The STAGE B codex
            hostile-but-fair audit returned PASS-WITH-NOTES (0 CRITICAL, 1 MAJOR,
            2 MINOR); the supplementary ask-deepseek arithmetic second-audit was
            adjudicated item-by-item (recomputed, not auto-applied — deepseek is not
            an auditor). Findings folded into audits/2026-07-26-desk-note.md and
            resolved below with the grep-closure record (pattern searched · hits
            before · hits after).{' '}
            <b>Findings (codex):</b>{' '}
            <b>DN-001 (MAJOR — conditional put-spread dated action exceeds the
            scout/deferred framework):</b> patterns searched{' '}
            <code>28AUG / 25SEP</code>, <code>would roll to</code>,{' '}
            <code>roll a downside put-spread to</code> — 2 stale hits before
            (dn-gating caveat + decision-table action row), 0 after; both recast as
            framework watches (&ldquo;reassess the hedge; no standing roll
            instruction and no forward expiry set here&rdquo;), the standalone
            <code>28AUG +18.28M</code> GEX-magnet mention retained as data, not an
            instruction — RESOLVED.{' '}
            <b>DN-002 (MINOR — 1h big-print mismatch):</b> pattern{' '}
            <code>10.5 BTC</code> — 1 stale hit before, 0 after; the 1h big-net
            corrected to +16.2 BTC / 10 prints (direct 07:06→08:06 BJ interval sums
            +16.17 across 10 nonzero prints) — RESOLVED.{' '}
            <b>DN-003 (MINOR — cross-asset RS overstated by omitting NVDA):</b>{' '}
            pattern <code>leads only</code> / <code>equity/megacap</code> — 1 stale
            hit before, 0 after; recast to &ldquo;leads parts of the equity/megacap
            cluster … but trails both SP500 (−0.15%) and NVDA (+2.86%)&rdquo; —
            RESOLVED.{' '}
            <b>Adjudicated (ask-deepseek supplementary, recomputed):</b> its R/R
            note is CORRECT — target − entry = 67,762 − 65,015 = <b>2,747</b> (v1
            carried 2,746); fixed at the R/R line and here, ratio 2,747 / 1,937 =
            1.4182 → 1.42:1 unchanged. Its D-SMA150 offset claim is REJECTED —
            64,392.49 / 69,775.28 − 1 = −7.7145% rounds to <b>−7.71%</b> as printed,
            not −7.70% (deepseek arithmetic slip). Its 24h-high/low
            &ldquo;inconsistency&rdquo; is REJECTED as a false positive — the prose
            $64,447 / $63,810 is the codex-cleared live-tape 24h H/L, the MTF-table
            $64,417 / $63,760 is the 08:01 BJ MTF scan&rsquo;s own H/L, a distinct
            ~5-min-lagged source panel disclosed inline. Its SM Δshort rounding note
            is a NIT — +484.7 (one-decimal) and +485 (integer) are
            context-consistent roundings, no drift, left as written.{' '}
            <b>Self-contained arithmetic carried for audit:</b> funding × 1095 (live
            +4.30% from raw 0.003929, 24h mean +4.24%, max +9.14% ann at 0.008345
            field 2/1441 rows, 0 negative rows); the GEX dual-reference (flip
            $62,205, spot +3.52% / idx +3.75%, both positive) and the
            headline-vs-rollup gap (+131.5M headline vs +151.83M by-expiry rollup =
            gex_summary.json net_gex $151,825,038, ~+20.33M, DN-003-lineage
            non-reconciling panel); the SM cut fraction (|+5,092.88 − (+7,301.87)| /
            7,301.87 = 30.25%, Δlong −1,724.3 / Δshort +484.7); the MA matrix vs
            live spot $64,392.49 off parquet 2026-07-26 00:06Z close $64,383.70
            (D-EMA50 $65,015.40 cap −0.96%, D-SMA50 $63,269.28 +1.78%, D-SMA150
            $69,775.28 −7.71%, settled W-SMA200 $63,078.14 cycle floor +2.08%,
            W-SMA150/200 non-computable at 134 weekly-bar 2024–2026 subset but
            recomputed $63,078.14 on the full 360-weekly-bar 2019–2026 glob); the
            R/R (entry ~$65,015, stop $63,078, target $67,762 → 2,747 / 1,937 =
            1.42:1); the 24h CVD reset-adjustment across the 07-25 07:00Z cb_cvd and
            fut_cvd resets (spot CVD +13,052, futures CVD −3,619); 30D RV 29.74%
            (30 returns); cross-asset (|r| 0.234, BTC −0.63% vs NQ −0.79% =
            +0.16pt, trails SP500 −0.15% and NVDA +2.86%); and macro Tier-1 frozen
            over the weekend (10Y 4.71%, HY OAS 2.77% 1bp from gate, DXY 101.47, Fed
            net liq $5.917T). Claims-vs-loaded-data discipline: NTT / max-pain /
            strike-IV / BTC-NQ framework-only; JGB monthly do not lean; IV
            chain-median across 870 instruments not a tradable spread. The
            requireViewer gating pattern (first statement, path /desk/2026-07-26) is
            in place. EN/ZH numeric parity holds (the ZH companion is authored in
            STAGE C to the same v2 numbers). <b>post codex hostile audit.</b>{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1; Next hard-exits
            on Node &lt; 20.9.0, so a full <code>next build</code> is
            environment-blocked (lineage); <code>npx --no-install tsc --noEmit</code>{' '}
            is the build proxy.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-07-26 00:06Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-07-25 22:16Z (~1.85h before
            snapshot) and its FRED daily rates are frozen over the weekend and
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
                The down-leg turned its first up-close and the backdrop repaired at
                the margins — but it stalled below the D-EMA50 cap, the OI is still
                futures-led, and the buyer of record used the bounce to trim 30%.
                The book re-gammaed, the floor holds. The reclaim is decided on the
                up-close with smart money adding, not the first bounce. Patient.
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
            v2 · 2026-07-26 00:06Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
