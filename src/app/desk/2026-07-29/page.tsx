import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-29 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-29',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-29' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260729() {
  await requireViewer('/desk/2026-07-29');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-29 · v2</span>
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
              <span className="dn-big">$64,042</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.45%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-29 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-29 00:05Z (snapshot pin, t == &ldquo;07-29 08:05&rdquo; BJ)</td>
                  <td className="dn-flag">
                    fresh · 1-min · anchor pinned to the 00:05Z row (BJ 08:05) for
                    reproducibility · file tail advances live under-foot · 24h-window
                    convention: headline deltas use the same-clock prior-day baseline
                    t == &ldquo;07-28 08:05&rdquo; BJ (endpoint minus the 24h-ago row,
                    exactly the 07-28 note&rsquo;s anchor). Unlike 07-28, the series is
                    contiguous across the sub-windows this run, so the 4h/1h flow blocks
                    (prior-row inclusive baselines 07-29 04:05 / 07:05 BJ through the 08:05
                    pin) reproduce the exact same-clock 04:05 / 07:05 endpoints — no
                    baseline discrepancy to disclose · funding/flow row-statistics span the
                    1,441-row window; premium means exclude null rows
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-29 08:01 BJ scan (00:01Z)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · archived verbatim at
                    /opt/desk-note/snapshots/2026-07-29-0005/ · ~4-min stale vs
                    snapshot anchor · in-progress bars · scan spot $63,955, 24h +0.37%
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-29 00:01Z snapshot</td>
                  <td className="dn-flag">
                    ~4-min stale · Deribit idx $64,139 vs live $64,042 · median IV
                    43.5% · 838 instruments · headline aggregate +100.4M vs by-expiry
                    rollup +116.31M (= gex_summary.json net_gex $116,313,503) — a
                    ~+15.9M non-reconciling source-panel gap disclosed per DN-003
                    lineage, and this run the rollup sits ABOVE the headline again (the
                    same sign as 07-25/07-26/07-27, reversing the 07-28 run where the
                    rollup ran below)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-29 00:01Z
                  </td>
                  <td className="dn-flag">~4-min lag · 7d 1h bars · 22 assets · 167 rows · archived</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-28 22:17Z render</td>
                  <td className="dn-flag">
                    ~1.8h render lag · Tuesday FRED daily re-print landed: 10Y ticked −4bp
                    to 4.69% → 4.65%, TIPS +1bp to 2.44%, 5Y5Y −4bp to 2.24%, 10Y breakeven
                    −5bp to 2.21%, HY OAS +2bp to 2.81% · MOVE unchanged 77.2 · DXY 101.39
                    (+0.15 vs 07-27) · Fed net liq $5.917T (no fresh weekly print)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-29 00:05Z (close $64,034.50)</td>
                  <td className="dn-flag">
                    same-minute anchor · offsets recomputed vs live spot $64,041.86 ·
                    W-SMA200 non-computable from the 2023–2026 MA subset (188 weekly
                    bars); W-SMA150 IS computable at $76,627 but sits far above / disused
                    — the 200W cycle floor itself is available from full history / the
                    trap-watch state, see the row below
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W support watch</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · last recompute 2026-07-27 00:11Z (NOT re-run today)</td>
                  <td className="dn-flag">
                    200W cycle floor AVAILABLE — the trap-watch state file was last
                    recomputed 2026-07-27 and carries the last completed week 2026-07-26
                    close $65,375.10, W-SMA200 $63,311.02, consecutive_above 4 (streak from
                    2026-07-05). An independent full btcusdt_1m_*.parquet glob recompute
                    today (361 weekly bars, 2019–2026) reproduces the same completed-week
                    W-SMA200 $63,311.02 and shows the in-progress week (ending 2026-08-02)
                    W-SMA200 climbing to $63,536 — the floor is still rising fast toward
                    spot. Settled floor $63,311 (spot +1.15% above); the computable D-SMA50
                    $63,361 is the nearest MA support, now +$50 above the floor (they
                    coincided to the dollar on 07-28)
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
              <span className="dn-v">+10.95%</span>
              <span className="dn-src">live · AT THE +10.95% cap (raw 0.01 field × 1095) · 24h mean +4.70% (cooled from +6.82% on 07-28) · max +10.95% ann (0.01 field, cap, 344 / 1441 rows) · min −3.32% ann (−0.003036 field @ 07-28 12:11 BJ) · 300 / 1441 NEGATIVE rows (was 0 / 1441) — funding round-tripped negative → back to the cap</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">round-tripped negative → cap</span>
              <span className="dn-src">range −3.32% / +10.95% ann · mean +6.82% → +4.70% ann · 300 negative rows appeared (was 0 on 07-28) — the crowded-long carry unwound into the 07-28 dip, then re-heated back to the Binance cap into the snap; a full reset, not a one-way re-heat</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−2.18% (−2,305.1 BTC)</span>
              <span className="dn-src">live · 105,591.2 → 103,286.0 · a short-covering CONTRACTION — price rose +0.45% on OI falling with the aggressor tape BUYING (futCVD +1,200.9 / taker +1,182.5 / big +408.8) but spot offered (spotCVD −1,151.8): shorts covering into the bounce, not fresh demand behind an expansion — the opposite of the OI-up-on-buyers leg the scout wants</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v">63.41 / 36.59</span>
              <span className="dn-src">live_db `mkt_long_pct` · 24h low 62.62 (07-28 08:18 BJ / 00:18Z) high 65.69 (07-28 15:03 BJ / 07:03Z) — spiked crowded intraday on the bounce then de-crowded back near flat into the snap, roughly unchanged vs 07-28&rsquo;s 62.77</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">+5,038 (net LONG, TRIMMED −41.48%)</span>
              <span className="dn-src">live · long 14,363.76 − short 9,325.51 = +5,038.25 · continuous net-long since the 07-21 06:36 BJ (07-20 22:36Z) cross but CUT HARD into the bounce (net peaked +9,622 @ 07-28 11:01 BJ / 03:01Z, troughed +5,019 @ 07-29 07:41 BJ / 07-28 23:41Z right into the snap) — the buyer of record trimmed the +214% dip-buy it stacked yesterday</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 24h-ago</span>
              <span className="dn-v bear">+8,610 → +5,038 (−3,572, −41.48%)</span>
              <span className="dn-src">|Δ|/prior_net = 3,571.78 / 8,610.03 = 41.48% · Δlong −1,634.8 / Δshort +1,937.0 — cut longs AND added shorts, the clean TRIM shape, the exact inverse of yesterday&rsquo;s add (Δlong +2,968 / Δshort −2,908): SM adds into dips, trims into bounces</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.5% / 31.33%</span>
              <span className="dn-src">GEX median IV · chain-median across 838 instruments, not a tradable spread · 30D close-to-close RV = logret.std × √365 × 100 on 30 daily returns (parquet last bar 00:05Z) · ~+12.2pt chain richness · 29-return alt 30.02%</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+2.11% (above)</span>
              <span className="dn-src">flip $62,716 · vs live spot $64,042 (+2.11%; 64,041.86/62,716.49 − 1 = 2.113%) / GEX file Deribit idx $64,139 (+2.27%; 64,139.04/62,716.49 − 1 = 2.268%) — both refs positive, tile uses spot side · aggregate +100.4M headline / +116.31M rollup — RE-GAMMAED UP from +82.8M / +69.40M on 07-28, and the near-dated negative cluster HEALED (the strip is effectively positive again, bar a trivial 14AUG −0.09M residual)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The settled 200W floor $63,311 held on a close basis, the dealer book
                re-gammaed positive and the engine bounced — but the bounce is hollow, and
                the buyer of record trimmed −41.48% into it
              </span>. 07-28 closed{' '}
              <span className="dn-tag bull">$63,903.60</span> (+$182.80 vs 07-27&rsquo;s
              $63,720.80), the first up-close off the floor, and the in-progress 07-29 close
              prints <span className="dn-tag bull">$64,034.50</span> — two up-closes with
              spot at <span className="dn-tag bull">$64,042 (+0.45% on 24h)</span>. The floor
              did its job: the $63,311 close the whole 07-28 note compressed onto never
              broke (24h low $62,800 on the wick, but the daily closed above), and the
              chase-short that was &ldquo;closest to met&rdquo; yesterday now has its fuel
              gone — the dealer strip re-gammaed to{' '}
              <span className="dn-tag bull">+100.4M headline / +116.31M rollup</span> (from
              +82.8M / +69.40M), the near-dated negative cluster HEALED (28JUL settled off,
              29JUL flipped +10.12M, 31JUL +61.31M dominant), and the $64k pocket that was
              −11.99M overhead is now{' '}
              <span className="dn-tag bull">+14.23M positive</span>. But the bounce is not a
              reclaim, and its internals are hollow.{' '}
              <span className="dn-em">Spot rose on OI CONTRACTING −2,305 BTC (−2.18%) with
              the aggressor tape buying (futCVD +1,200.9, taker +1,182.5) but spot offered
              (spotCVD −1,151.8) — a short-covering markup, not a demand-fuelled
              expansion</span>. And the buyer of record inverted itself again: after adding
              +214% into the 07-27 dip, smart money{' '}
              <span className="dn-tag bear">TRIMMED −41.48%</span> into this bounce (net
              +8,610 → +5,038, cutting longs −1,635 AND adding shorts +1,937). That is the
              recurring signature of this whole recovery:{' '}
              <span className="dn-em">SM adds into dips and trims into bounces, so the
              demand leg and the price-reclaim leg never print TRUE together</span>. The
              D-EMA50 cap stayed unreclaimed — spot sits{' '}
              <span className="dn-tag bear">−1.36% below the D-EMA50 $64,923</span>, the only
              positive offset on the matrix being the D-SMA50 $63,361 (+1.07%) just above
              the floor — funding round-tripped through 300 negative rows back to the +10.95%
              cap, and the reclaim-long rates filter stayed{' '}
              <span className="dn-tag bear">FALSE</span> (Tuesday&rsquo;s 10Y ticked −4bp to
              4.65%, still 10bp above the 4.55% gate). So all four scout legs are FALSE — no
              price reclaim, SM trimming not adding, OI contracting not demand-led, rates
              FALSE — and the scout holds <span className="dn-em">DEFERRED a sixth day with
              the book FLAT</span>. The chase-short is stood down and now FURTHER from armed:
              the negative-gamma fuel that appeared on 07-28 evaporated overnight. The note
              turns on whether the two-up-close bounce can convert into a D-EMA50 reclaim
              with SM re-adding — or fades back to the floor as the last two bounces did.
            </p>

            <p>
              BTC prints <span className="dn-tag">$64,042</span> live,{' '}
              <span className="dn-tag bull">+0.45%</span> on 24h — the second up-close off
              the floor — inside a{' '}
              <span className="dn-tag">$64,083.68 / $62,800.00</span> range (high @ 07-29
              00:54 BJ / 07-28 16:54Z, low @ 07-28 21:48 BJ / 13:48Z on the overnight wick,
              which stabbed below $63k but recovered). <span className="dn-signal">The floor held on the close the desk
              said to read, not the wick</span>: 07-22 $66,082.00 → 07-23 $65,069.60 → 07-24
              $64,116.50 → 07-25 $64,338.10 → 07-26 $65,375.10 → 07-27 $63,720.80 →{' '}
              <span className="dn-tag bull">07-28 $63,903.60 (+$182.80)</span>, with the
              in-progress 07-29 close at parquet last-bar{' '}
              <span className="dn-tag bull">$64,034.50</span>. Two up-closes, both above the
              settled 200W floor $63,311, neither reclaiming the D-EMA50 cap. The MA matrix
              is still a capped ladder: spot has recovered toward but not through the{' '}
              <span className="dn-tag bear">D-EMA20 $64,267 (−0.35%)</span> /{' '}
              <span className="dn-tag bear">D-SMA20 $64,465 (−0.66%)</span> pair, sits{' '}
              <span className="dn-tag bear">−1.36% below the D-EMA50 $64,923</span> (the cap,
              overhead resistance a fifth session running), and the only positive offset on
              the whole matrix is the{' '}
              <span className="dn-tag bull">D-SMA50 $63,361 (+1.07%)</span>, which now sits
              +$50 above the settled floor rather than coinciding to the dollar as it did
              yesterday.{' '}
              <span className="dn-em">
                The 200W cycle floor is available and confirmed this run: the trap-watch
                state (ma200w_trap_watch_state.json, last recomputed 2026-07-27 00:11Z —
                not re-run today) carries the last completed week 2026-07-26 at W-SMA200{' '}
                <span className="dn-tag bull">$63,311.02</span> with four consecutive
                weekly closes above it, and an independent full btcusdt_1m_*.parquet glob
                recompute today (361 weekly bars) reproduces the same $63,311.02 for the
                completed week while the in-progress week (ending 2026-08-02) climbs to{' '}
                <span className="dn-tag">$63,536</span>. So $63,311 is the settled floor
                (spot +1.15% above it, 07-28 closed above it, the overnight $62,800 wick did
                not settle below) and the D-SMA50 $63,361 is the nearest MA support — a
                confluence floor that is rising fast toward spot.
              </span>{' '}
              The scout was ARMED on 07-22, moved DEFERRED on 07-24 when the D-EMA50 reclaim
              first failed, and has held deferred through 07-25/07-26/07-27/07-28 — its
              price and flow legs never once printing TRUE together. Today the price leg is
              still FALSE (no cap reclaim) and the flow legs flipped back to FALSE (SM
              trimming, OI contracting). The book stays flat.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · the floor held on a close, the engine bounced +0.45% · but on an OI CONTRACTION (−2.18%) of short-covering, not demand · SM TRIMMED −41.48% into the bounce (cut longs, added shorts) — the inverse of the 07-27 +214% dip-buy · funding round-tripped through 300 negative rows back to the +10.95% cap · retail near flat · perp still at a discount</span>
            </h2>

            <p>
              <span className="dn-signal">
                The tape bought the bounce by covering shorts while the smart-money buyer
                stepped back out — the mirror image of yesterday&rsquo;s dip
              </span>. Spot rose +0.45% on the 24h with OI{' '}
              <span className="dn-tag bear">contracting −2,305.1 BTC (−2.18%)</span> —
              105,591.2 → 103,286.0 — reversing the 07-28 +1.11% expansion. On the up-print
              the aggressor tape bought, but in the short-covering shape: futures CVD ran{' '}
              <span className="dn-tag bull">+1,200.9</span>, taker-net{' '}
              <span className="dn-tag bull">+1,182.5</span> and big-net{' '}
              <span className="dn-tag bull">+408.8 (849 prints)</span> POSITIVE, while spot
              CVD ran <span className="dn-tag bear">−1,151.8</span> (no cb_cvd reset in this
              window — the intraday cb_cvd 11,972 low is a counter dip, not a reset). Price up + OI
              down + futures/taker buying + spot offered is a{' '}
              <span className="dn-em">short-covering markup</span>: shorts buying to close as
              OI falls, not new longs opening into an expansion. Perp still trades a{' '}
              <span className="dn-tag bear">−$93.07 discount</span> to spot at the snap (24h
              mean −$73.74, range −$170.79 / +$41.28 — basis briefly premium once but
              overwhelmingly discount), consistent with a spot-led market that the perp is
              chasing from behind rather than a futures-led long chase. 1-min aggressor skew
              snap <span className="dn-tag bear">−12.0</span> (24h mean −2.04, range −54.6 /
              +57.3) — offered into the snap even on the up-day.{' '}
              <span className="dn-em">OI contracting on a short-cover is precisely NOT the
              &ldquo;buyers behind the OI&rdquo; leg the scout needs; the bounce is real on
              price but hollow on structure — the shorts that drove the 07-27 down-leg are
              buying themselves back, not fresh demand arriving.</span>
            </p>

            <p>
              Smart money is the standout again — and this time back to the cautious side.{' '}
              <span className="dn-signal">
                The buyer of record trimmed its net-long by two-fifths into the bounce,
                cutting longs and adding shorts — the exact inverse of the 07-27 dip-buy
              </span>. SM net is <span className="dn-tag bear">+5,038</span> (long 14,363.76 −
              short 9,325.51 = +5,038.25) vs the 24h-ago{' '}
              <span className="dn-tag">+8,610</span> — a{' '}
              <span className="dn-tag bear">Δnet −3,572 (−41.48%)</span> (|+5,038.25 −
              (+8,610.03)| / 8,610.03 = 41.48%). The decomposition is the clean trim shape:{' '}
              <span className="dn-tag bear">Δlong −1,634.8</span> (longs cut) AND{' '}
              <span className="dn-tag bear">Δshort +1,937.0</span> (a fresh short overlay
              rebuilt). SM did not just cut longs — it{' '}
              <em>re-added the short leg it had unwound into the 07-27 dip</em>. Net peaked{' '}
              <span className="dn-tag">+9,622 @ 07-28 11:01 BJ / 03:01Z</span> and troughed{' '}
              <span className="dn-tag bear">+5,019 @ 07-29 07:41 BJ / 07-28 23:41Z</span> right
              into the snap — the buyer of record was still cutting at the anchor, continuously
              net-long since the 07-21 06:36 BJ (07-20 22:36Z) cross but at its thinnest of the
              rebound.{' '}
              <span className="dn-em">This is the SM-adding leg the re-arm gate has waited
              all week for, printing FALSE again — and worse than FALSE, it inverted: the
              buyer that defended the floor with a +214% dip-buy trimmed −41% into the
              bounce off it. The signature is now unmistakable across the recovery — SM adds
              into dips and trims into bounces, so the demand leg and the price-reclaim leg
              are structurally out of phase, and the scout cannot fire until they align.</span>
            </p>

            <p>
              The leverage and crowding reads round-tripped rather than trended.{' '}
              <span className="dn-signal">
                Funding unwound through a full band of negative rows into the 07-28 dip,
                then re-heated to the Binance cap into the snap — a reset, not a one-way
                move
              </span>: live funding <span className="dn-tag">+10.95% ann</span> (raw 0.01
              field × 1095, at the exchange cap), 24h mean{' '}
              <span className="dn-tag">+6.82% → +4.70% ann</span> (a net COOL over the
              window), max <span className="dn-tag">+10.95% ann</span> (0.01 field cap, 344 /
              1441 rows), min <span className="dn-tag bear">−3.32% ann (−0.003036 field @
              07-28 12:11 BJ)</span>, and{' '}
              <span className="dn-tag bear">300 / 1441 negative rows</span> — where 07-28 had
              0 negatives, the whole crowded-long carry flushed into the dip (longs stopped
              paying, briefly got paid) before snapping back to the cap into the up-close.
              Retail <span className="dn-tag">mkt_long_pct 63.41</span> (24h low 62.62 @ 07-28
              08:18 BJ / 00:18Z, high 65.69 @ 07-28 15:03 BJ / 07:03Z) — spiked crowded
              intraday on the bounce then
              de-crowded back near flat, roughly unchanged vs 07-28&rsquo;s 62.77.{' '}
              <span className="dn-em">The funding round-trip is the tell: the leverage that
              was one-sidedly long into the 07-28 down-close got reset through the dip, so
              the bounce is not being driven by fresh crowded-long carry — it is a short-cover
              with the funding snapping back to the cap as shorts pay to exit. A cleaner,
              less-crowded book than 07-28, but built on covering rather than conviction.</span>
            </p>

            <p>
              Windowed flow shows the cover concentrated in the last few hours and the last
              hour turning both futures and spot bid. 24h: price{' '}
              <span className="dn-tag bull">+0.45%</span>, OI{' '}
              <span className="dn-tag bear">−2,305.1 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −1,151.8</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +1,200.9</span>, big-print{' '}
              <span className="dn-tag bull">+408.8 BTC / 849 prints</span>, taker-net{' '}
              <span className="dn-tag bull">+1,182.5</span> —{' '}
              <span className="dn-em">futures/taker bought into a falling OI while spot was
              sold; the +0.45% printed on a short-cover, not a long expansion</span>. 4h
              (into snapshot): price <span className="dn-tag bull">+0.10%</span>, OI{' '}
              <span className="dn-tag bear">−1,005.2 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −478.7</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +2,116.1</span>, big-print{' '}
              <span className="dn-tag bull">+1,183.9 BTC / 120 prints</span>, taker-net{' '}
              <span className="dn-tag bull">+2,129.4</span> — heavy futures covering with OI
              still bleeding. 1h: price{' '}
              <span className="dn-tag bull">+0.52%</span>, OI{' '}
              <span className="dn-tag bear">−458.3 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +259.0</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +1,566.9</span>, big-print{' '}
              <span className="dn-tag bull">+1,097.5 BTC</span>, taker-net{' '}
              <span className="dn-tag bull">+1,550.8</span> —{' '}
              <em>the last hour turned spot bid too (spot CVD positive) as the cover
              accelerated, but OI kept falling — even the strongest hour of the bounce is
              shorts closing, not longs opening</em>. The whole 24h is a short-cover shape.{' '}
              <span className="dn-em">
                Baseline convention: the 24h block uses the same-clock prior-day row
                (07-28 08:05 BJ); the 4h and 1h sub-window blocks use prior-row inclusive
                baselines (07-29 04:05 / 07:05 BJ through the 08:05 pin). The series is
                contiguous across these windows this run, so those prior-row inclusive reads
                reproduce the exact same-clock 04:05 / 07:05 endpoints — no baseline
                discrepancy to disclose, unlike the 07-28 note.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF bounced to 1 long / 6 short / 3 neutral (was 1/7/2) · fast frames RECOVERED from washed-out oversold back above midline (15m 57.9, 30m 57.3, 1h 52.5) with a fresh 30m water-up golden cross · but 4h/1h/3d/1w still below cloud · regime 5/9 momentum (JT≥0) trend-continuation held · 3d/1w bottom-div cluster intact · 1M ⚡TD9 BUY</span>
            </h2>

            <p>
              <span className="dn-signal">
                The engine bounced off the washout — the fast frames swung from deeply
                oversold back above the midline in a session — but the mid and slow frames
                stayed capped below cloud, and the regime still reads trend-continuation
              </span>. The 00:01Z scan reads{' '}
              <span className="dn-tag">1 long / 6 short / 3 neutral</span> across 10 TFs
              (1M long; 30m/1h/4h/8h/1d/3d short; 15m/12h/1w neutral), a marginal recovery
              from 07-28&rsquo;s 1 long / 7 short / 2 neutral — the net still reads
              &ldquo;multi-frame resonance bearish · sell the bounce&rdquo; with the same{' '}
              <span className="dn-tag bull">high-timeframe bottom-div cluster (3d/1w)</span>{' '}
              flagged. Fast frames rebounded hard from yesterday&rsquo;s 22–29 washout: 15m
              RSI <span className="dn-tag">57.9</span> (back above midline, above cloud), 30m
              RSI <span className="dn-tag">57.3</span> with a{' '}
              <span className="dn-tag bull">fresh water-up golden cross 1 bar ago</span>
              (DIF +58.6, in cloud), 1h RSI{' '}
              <span className="dn-tag">52.5</span> (water-down golden 12b, still below cloud
              ↑64.7k) — the oversold mean-reversion the 07-28 note flagged played out into
              the bounce. But the mid frames stayed heavy: 4h RSI{' '}
              <span className="dn-tag">44.2</span> (water-down death 7b, below cloud ↑64.7k),
              8h RSI <span className="dn-tag">44.7</span> (in cloud, just crossed), 1d RSI{' '}
              <span className="dn-tag">48.7</span> (water-up death 2b, in cloud 61.4k–69.9k)
              — the bounce did not lift them back through the cloud. The slow frames are the
              same HTF bottoming tell, unbroken: a{' '}
              <span className="dn-tag bull">1w water-down golden cross 1 bar ago</span>
              (DIF −5,388.6, early), a{' '}
              <span className="dn-tag bull">3d water-down golden cross 6b</span>, and the
              3d/1w bottom-divergence cluster (BULL reg) — but both remain below cloud (3d
              ↑75.6k 19b, 1w ↑93.8k 26b). The oversold-reversal hint fired on the top frame:{' '}
              <span className="dn-tag bull">1M ⚡ TD9 BUY at $63,951</span>. The regime tag
              held at{' '}
              <span className="dn-tag">5/9 cycle-momentum (JT≥0) — trend-continuation
              favoured</span>.{' '}
              <span className="dn-em">
                Read straight: the bounce is exactly the fast-frame mean-reversion the
                washout set up — RSI back above 50 on the low frames, a fresh 30m golden
                cross — but the 1h/4h/3d/1w are still below cloud and the regime still says
                trend-continuation (down). A relief bounce inside a below-cloud structure
                with the HTF bottoming tell intact, not a structural reclaim. The engine
                lifted, the frame that matters for the scout (a cap reclaim above cloud) did
                not.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,951</td><td className="num">57.9</td><td className="bear">death (water-up) 7b</td><td className="bull">above ↓63.6k 24b</td><td>Sell 2</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">63,951</td><td className="num">57.3</td><td className="bull">golden (water-up) 1b</td><td className="neut">in cloud 63.6k–64.4k 1b</td><td>Sell 1</td><td>BEAR hid</td></tr>
                <tr><td>1h</td><td className="num">63,951</td><td className="num">52.5</td><td className="bull">golden (water-dn) 12b</td><td className="bear">below ↑64.7k 26b</td><td>Sell 4</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">63,951</td><td className="num">44.2</td><td className="bear">death (water-dn) 7b</td><td className="bear">below ↑64.7k 7b</td><td>Sell 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">63,951</td><td className="num">44.7</td><td className="bear">death (water-up) 17b</td><td className="neut">in cloud 63.5k–64.1k 刚穿 (just crossed)</td><td>Sell 1</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">63,951</td><td className="num">46.3</td><td className="bear">death (water-up) 10b</td><td className="bull">above ↓63.6k 30b</td><td>Buy 4</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">63,951</td><td className="num">48.7</td><td className="bear">death (water-up) 2b</td><td className="neut">in cloud 61.4k–69.9k 9b</td><td>Buy 6</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">63,951</td><td className="num">44.4</td><td className="bull">golden (water-dn) 6b</td><td className="bear">below ↑75.6k 19b</td><td>Buy 2</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">63,951</td><td className="num">39.2</td><td className="bull">golden (water-dn) 1b</td><td className="bear">below ↑93.8k 26b</td><td>Sell 3</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">63,951</td><td className="num">43.8</td><td className="neut">—</td><td className="bull">above ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 08:01 BJ scan (00:01Z; rolling latest
                    file, archived verbatim at
                    /opt/desk-note/snapshots/2026-07-29-0005/). Header alerts:{' '}
                    <em>1M ⚡ TD9 BUY printed at $63,951 (oversold reversal hint)</em>,{' '}
                    <em>top-div 3: 15m/1h/1d · bottom-div 4: 1h/4h/3d/1w</em>,{' '}
                    <em>regime 5/9 cycle-momentum (JT≥0) — trend-continuation favoured</em>.
                    Scan spot $63,955, 24h +0.37% (00:01Z MTF scan; the live-tape anchor at
                    00:05Z shows +0.45% on the same 24h window — the 4-minute source gap and
                    the differing baseline account for the 0.08pt return drift), 24h H/L
                    $64,084 / $62,660 (the MTF scan&rsquo;s own 00:01Z window; the live-tape
                    00:05Z range in the prose above is $64,083.68 / $62,800.00). The ~$0 high
                    delta is the 4-minute source gap, but the ~$140 low delta is a
                    price-basis difference, NOT timing: the MTF panel / parquet low $62,660
                    is the OHLCV-bar (perp) print (low $62,660.1 @ 07-28 13:47Z, which
                    reproduces in both the 00:01Z and 00:05Z windows), while the prose range
                    reads live_db.spot low $62,800.00 — the delta persists after aligning the
                    00:05Z window, so it is a spot-vs-OHLCV/perp basis gap, not four minutes.
                    Live tape (spot) authoritative for the prose range. qVol $9.17B. Closes
                    are in-progress bars; treat every value as provisional until each TF
                    closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the unreclaimed cap and the confluence floor. Spot
              $64,042 sits <span className="dn-tag bull">+1.07% above D-SMA50 $63,361</span>{' '}
              — the only positive offset on the entire matrix, now +$50 above the settled
              200W floor (they coincided to the dollar on 07-28). Overhead the bounce ran
              into but not through the near pair:{' '}
              <span className="dn-tag bear">D-EMA20 $64,267 (−0.35%)</span>,{' '}
              <span className="dn-tag bear">D-SMA20 $64,465 (−0.66%)</span>, and the
              unreclaimed <span className="dn-tag bear">D-EMA50 $64,923 (−1.36%)</span> — the
              cap, resistance a fifth session. Then in order:{' '}
              <span className="dn-tag bear">W-EMA200 $67,146 (−4.62%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $67,555 (−5.20%)</span> — the working
              first MA target if the reclaim ever comes, with the dealer $66k–$72k call-wall
              band in between —{' '}
              <span className="dn-tag bear">D-SMA100 $69,337 (−7.64%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,401 (−7.72%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $69,464 (−7.81%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,736 (−8.17%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $70,422 (−9.06%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $71,736 (−10.73%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $73,181 (−12.49%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $73,222 (−12.54%)</span>. Below spot the
              only support is the settled 200W floor{' '}
              <span className="dn-tag bull">$63,311 (+1.15%)</span> with the D-SMA50 $63,361
              just above it, and the in-progress week&rsquo;s W-SMA200 climbing to $63,536
              just beneath spot. Far above and disused: W-SMA150 $76,627 (−16.42%), W-EMA50
              $78,357 (−18.27%), W-EMA100 $78,777 (−18.71%), W-SMA50 $84,340 (−24.07%),
              W-SMA100 $88,566 (−27.69%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-29 00:05Z (close $64,034.50);
                offsets recomputed against live spot $64,041.86. Displayed MA levels are
                $-rounded; offsets computed from exact series values. W-SMA200 is
                non-computable from the 2023–2026 MA subset (188 weekly bars) while
                W-SMA150 $76,627 IS computable but sits far above and disused; the W-EMA150
                $73,181 and W-EMA200 $67,146 lines seed from available history and are
                reported as such (both print above spot, so resistance here, not support);
                the 200W cycle floor $63,311 comes from the full-history glob / trap-watch
                state (see manifest). Daily closes: 07-23 $65,069.60, 07-24 $64,116.50,
                07-25 $64,338.10, 07-26 $65,375.10, 07-27 $63,720.80, 07-28 $63,903.60,
                07-29 (in-progress) $64,034.50 — two up-closes off the floor, neither
                reclaiming the D-EMA50 cap.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book RE-GAMMAED UP to +100.4M headline / +116.31M rollup (was +82.8M / +69.40M on 07-28) · flip $62,716 (spot +2.11% above) · near-dated negative cluster HEALED — 29JUL +10.12M / 30JUL +0.45M / 31JUL +61.31M dominant, strip effectively positive again (trivial 14AUG −0.09M residual) · $64k pocket flipped −11.99M → +14.23M at spot · $60k −20.90M the lone crash-put</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book re-gammaed positive and healed the near-dated negative
                cluster it grew on 07-28 — the chase-short&rsquo;s gamma fuel evaporated
                overnight
              </span>. Headline aggregate GEX is{' '}
              <span className="dn-tag bull">+100.4M / 1%</span> (was +82.8M on 07-28), with
              the by-expiry rollup at{' '}
              <span className="dn-tag bull">+116.31M</span> (= gex_summary.json net_gex
              $116,313,503, was +69.40M on 07-28) — a ~+15.9M non-reconciling
              headline-vs-rollup gap, disclosed per DN-003 lineage, and this run the rollup
              sits ABOVE the headline again (same sign as 07-25/07-26/07-27, reversing the
              07-28 run). The 0-γ flip moved{' '}
              <span className="dn-tag">$62,599 → $62,716 (+$117)</span>, and spot $64,042
              sits <span className="dn-tag bull">+2.11% above flip</span> on
              spot-denominated math (64,041.86 / 62,716.49 − 1 = +2.113%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads{' '}
              <span className="dn-tag bull">+2.3% off its Deribit-index $64,139</span>{' '}
              ($97 above live spot), which is +2.27% (64,139.04 / 62,716.49 − 1 = +2.268%) —
              both references positive, spot above the flip with more cushion than
              07-28&rsquo;s +1.70%. The wall map is a positive call band with the
              at-spot pocket now HEALED:{' '}
              <span className="dn-tag bull">$70k +33.34M</span> (heaviest wall),{' '}
              <span className="dn-tag bear">$60k −20.90M</span> (crash-put, the lone
              meaningful negative on the board),{' '}
              <span className="dn-tag bull">$72k +20.57M</span>,{' '}
              <span className="dn-tag bull">$68k +15.10M</span>,{' '}
              <span className="dn-tag bull">$65k +15.06M</span>,{' '}
              <span className="dn-tag bull">$64k +14.23M</span> (the at-spot pocket flipped
              from 07-28&rsquo;s −11.99M straight to +14.23M positive — the negative pocket
              overhead is gone),{' '}
              <span className="dn-tag bull">$67k +10.98M</span>,{' '}
              <span className="dn-tag bull">$66k +10.86M</span>,{' '}
              <span className="dn-tag bull">$80k +8.73M</span>,{' '}
              <span className="dn-tag bull">$69k +6.38M</span>.{' '}
              <span className="dn-em">
                The $66k–$72k band still sums to roughly +97M of positive-gamma call
                resistance ($66k +10.86M + $67k +10.98M + $68k +15.10M + $69k +6.38M + $70k
                +33.34M + $72k +20.57M = +97.23M), so a reclaim still runs into dealers
                selling gamma above — but below spot the book is once again a clean
                dampener: the $64k pocket healed to +14.23M and the only negative until $60k
                (−20.90M) is a far crash-put, so a move down into the $63,311 floor now runs
                into POSITIVE gamma that cushions rather than the amplifying negatives that
                appeared on 07-28.
              </span>{' '}
              By expiry the strip is effectively positive again — bar a trivial 14AUG −0.09M
              residual: the 07-28 near-dated negative
              cluster (28JUL −13.30M / 29JUL −4.37M / 30JUL −0.51M) is gone — 28JUL settled
              off the board, and{' '}
              <span className="dn-tag bull">29JUL 0.3DTE +10.12M</span>,{' '}
              <span className="dn-tag bull">30JUL 1.3 +0.45M</span> flipped positive — before{' '}
              <span className="dn-tag bull">31JUL 2.3 +61.31M</span> the dominant chunk, then
              1AUG 3.3 +1.02M, 7AUG 9.3 +22.21M, 14AUG 16.3 −0.09M (a trivial residual
              negative), 28AUG 30.3 +15.45M, 25SEP 58.3 +1.49M (the listed front strip
              through 25SEP totals +111.96M; the three back expiries 25DEC +2.90M / 26MAR27
              +0.83M / 25JUN27 +0.61M add +4.34M for the +116.30M rollup). The dampening
              regime is intact and deepened, and after 07-28&rsquo;s near-dated negative the
              calendar reset to a clean positive strip — the amplifier below is gone.
            </p>

            <p>
              IV median across the option chain is{' '}
              <span className="dn-tag">43.5%</span> (was 43.2% on 07-28) against 30D
              close-to-close RV of <span className="dn-tag">31.33%</span> — chain-level
              richness <span className="dn-tag">~+12.2pt</span>. A chain-median across N
              instruments (838 today), <span className="dn-em">not</span> a tradable
              spread; expiry-/strike-level vega, skew and term structure remain not loaded;
              the vol read stays framework-only. RV methodology: 30D close-to-close,
              logret.std × √365 × 100 on the last 30 daily log returns (= 31 consecutive
              daily closes) anchored to parquet last bar 2026-07-29 00:05Z; the 29-return
              alt reads 30.02%.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Tuesday FRED re-print — 10Y ticked −4bp to 4.65% (reclaim-long rates filter still FALSE, 10bp from firing) · TIPS +1bp 2.44%, breakeven −5bp to 2.21% · MOVE unchanged 77.2 · rates/dollar EXTREME RISK-OFF vs credit/liquidity loose · DXY 101.39</span>
            </h2>

            <p>
              <span className="dn-signal">
                Tuesday&rsquo;s FRED re-print eased the long end another 4bp but the
                reclaim-long rates filter stays FALSE — real yields firm, credit a touch
                wider, dollar bid, the split unchanged
              </span>. Dashboard render is 2026-07-28 22:17Z, ~1.8h before the snapshot, and
              the FRED daily series re-printed for Tuesday 07-28. US 10Y nominal{' '}
              <span className="dn-tag bull">4.65% (−4.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.24</span>, episodic z{' '}
              <span className="dn-tag bear">+1.35</span> — EXTREME RISK-OFF, eased 4bp off
              4.69%. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.44% (+1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.98</span>, episodic z{' '}
              <span className="dn-tag bear">+1.82</span> — EXTREME RISK-OFF, firmed a touch.
              5Y5Y BE inflation <span className="dn-tag">2.24% (−4.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag">2.21% (−5.0bp)</span> — inflation compensation eased.
              HY OAS <span className="dn-tag bull">2.81% (+2.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−0.44</span>, episodic z +1.79 — still
              &ldquo;loose&rdquo; but a touch wider. MOVE bond vol{' '}
              <span className="dn-tag">77.2 (unchanged, Δ +6.33 carried)</span>, regime z
              +0.34, episodic z +1.84 — neutral. The offsets: DXY{' '}
              <span className="dn-tag bear">101.39 (+0.15 vs 07-27)</span>, regime z +2.21 —
              EXTREME RISK-OFF; Fed net liquidity{' '}
              <span className="dn-tag bull">$5.917T</span> (no fresh weekly print), episodic
              z −2.47 — loose. US-JP 10Y spread{' '}
              <span className="dn-tag">1.98% (−4.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag">163.84</span>. NFCI{' '}
              <span className="dn-tag bull">−0.552</span>, RISK-ON (stale 11d).{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) stays FALSE at 4.65%
                — Tuesday&rsquo;s print moved it 4bp closer but it is still 10bp from firing.
                The macro split is unchanged: rates and the dollar sit EXTREME RISK-OFF
                (tight) while credit (HY OAS loose) and liquidity (net liq loose, NFCI
                RISK-ON) stay loose. Nothing in this print flips the scout&rsquo;s rates gate;
                the next FRED daily is the thing to watch, and the trend (4.71 → 4.69 → 4.65)
                is toward the gate.
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
                <tr><td>US 10Y nominal</td><td className="num">4.65%</td><td className="num bull">−4.0bp</td><td className="num bear">+2.24</td><td className="num bear">+1.35</td><td className="bear">EXTREME RISK-OFF · Tuesday −4bp</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.44%</td><td className="num bear">+1.0bp</td><td className="num bear">+2.98</td><td className="num bear">+1.82</td><td className="bear">EXTREME RISK-OFF · firmed</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.24%</td><td className="num bull">−4.0bp</td><td className="num">+0.22</td><td className="num">+0.96</td><td className="neut">no tag</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.21%</td><td className="num bull">−5.0bp</td><td className="num">−1.69</td><td className="num">−1.11</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.81%</td><td className="num bear">+2.0bp</td><td className="num bull">−0.44</td><td className="num">+1.79</td><td className="bull">loose · a touch wider</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.552</td><td className="num">−0.01</td><td className="num bull">−1.51</td><td className="num bull">−1.71</td><td className="stale">RISK-ON · stale 11d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">77.2</td><td className="num">+6.33</td><td className="num">+0.34</td><td className="num">+1.84</td><td className="neut">neutral · unchanged</td></tr>
                <tr><td>DXY</td><td className="num">101.39</td><td className="num">−0.08</td><td className="num bear">+2.21</td><td className="num">+0.85</td><td className="bear">EXTREME RISK-OFF · bid</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.917T</td><td className="num">−0.069T</td><td className="num">+0.56</td><td className="num bull">−2.47</td><td className="bull">loose · no fresh weekly print</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.98%</td><td className="num bull">−4.0bp</td><td className="num">−0.44</td><td className="num bear">+1.35</td><td className="neut">neutral</td></tr>
                <tr><td>USD/JPY</td><td className="num">163.84</td><td className="num">+0.07</td><td className="num bear">+1.72</td><td className="num bear">+1.94</td><td className="neut">yen soft</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num stale">+2.42</td><td className="num stale">+1.09</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.266</span> — NORMAL band, tightened
              from 07-28&rsquo;s 0.212 idiosyncratic back above the 0.25 threshold.
              BTC&rsquo;s top tie is{' '}
              <span className="dn-tag">NQ +0.504</span> (firmed from +0.405), then SP500{' '}
              <span className="dn-tag">+0.449</span>, URNM{' '}
              <span className="dn-tag">+0.438</span>, JP225{' '}
              <span className="dn-tag">+0.412</span>, SILVER{' '}
              <span className="dn-tag">+0.380</span>, PLAT{' '}
              <span className="dn-tag">+0.377</span>, TSLA{' '}
              <span className="dn-tag">+0.368</span>, GOLD{' '}
              <span className="dn-tag">+0.341</span>, COPPER{' '}
              <span className="dn-tag">+0.331</span>, CL{' '}
              <span className="dn-tag">−0.281</span>, BRENT{' '}
              <span className="dn-tag">−0.278</span>. 7d performance is the tell, and the
              whole tape is now red: <span className="dn-tag bear">BTC −3.93%</span> sits
              marginally AHEAD of NQ <span className="dn-tag bear">−4.12%</span> (BTC +0.19pt,
              back in front) but inside a broadly red risk complex — SP500{' '}
              <span className="dn-tag bear">−0.63%</span>, JP225{' '}
              <span className="dn-tag bear">−7.12%</span>, NVDA{' '}
              <span className="dn-tag bear">−4.38%</span>, META{' '}
              <span className="dn-tag bear">−6.94%</span>, GOOGL{' '}
              <span className="dn-tag bear">−4.04%</span>, AMZN{' '}
              <span className="dn-tag bear">−5.80%</span>, MSFT{' '}
              <span className="dn-tag bear">−0.29%</span>, TSLA{' '}
              <span className="dn-tag bear">−19.09%</span>, with AAPL{' '}
              <span className="dn-tag bull">+5.14%</span> the lone green megacap. And the
              metals/uranium bid that outran everything on 07-28 has ROLLED OVER: GOLD{' '}
              <span className="dn-tag bear">−1.93%</span>, SILVER{' '}
              <span className="dn-tag bear">−3.49%</span>, PLAT{' '}
              <span className="dn-tag bear">−2.25%</span>, PALL{' '}
              <span className="dn-tag bear">−2.17%</span>, URNM{' '}
              <span className="dn-tag bear">−3.48%</span>, COPPER{' '}
              <span className="dn-tag bear">−3.09%</span>; energy red too (CL −3.04%, BRENT
              −4.93%, NGAS −5.61%).{' '}
              <span className="dn-em">
                The correlation regime tightened back to NORMAL and BTC nudged back in front
                of NQ over the 7d window, but the tell is that everything is red now — the
                metals/uranium bid that was the risk offset on 07-28 has gone, so BTC is
                moving WITH a broadly risk-off tape rather than leading a rotation. Per the
                DN-001 lineage this is a tightened, risk-off cross-asset read with BTC
                marginally ahead of the equity engine, not an RS leadership signal in either
                direction.
              </span>{' '}
              JGB monthly 2.67% carries a monthly tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · cover-bounce scout DEFERRED (6th day) — all four legs FALSE: no cap reclaim, SM TRIMMED −41% into the bounce (not adding), OI CONTRACTED on short-covering (not demand), rates FALSE · chase-short STOOD DOWN and FURTHER from armed — the near-dated negative gamma fuel evaporated · book FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                The floor held, the book re-gammaed, the engine bounced — and none of it
                fired a scout leg, because the buyer of record trimmed into exactly the
                bounce it bought the dip for
              </span>. The 07-28 note framed the resolution on whether $63,311 held with the
              buyer defending it — the dip-buy converting to demand as price reclaimed the
              D-EMA50 on an up-close. The floor held on a close, and there were two up-closes
              — but the conversion did not happen: instead of the SM-add persisting, smart
              money TRIMMED −41.48% (cutting longs, re-adding shorts) into the bounce, and
              the up-move came on an OI CONTRACTION of short-covering rather than a
              demand-led expansion. So all four scout legs read FALSE — no D-EMA50 reclaim,
              no SM-add, no demand-led OI, rates FALSE — the same four that have never once
              printed TRUE together. The trade book today is no scout entry, no chase-short,
              no fresh hedge — the disciplined read is to hold the scout DEFERRED until a
              D-EMA50 reclaim on an up-close PAIRS with SM re-adding on a demand-led OI, and
              to keep the chase-short stood down now that its gamma fuel is gone.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · DEFERRED (6th day) · all four legs FALSE — no reclaim, SM trimming, OI contracting, rates FALSE</span>
              <div className="dn-trade-name">
                Cover-bounce scout — the floor held and the engine bounced, but the buyer of record trimmed −41% into it, the OI contracted on short-covering, the D-EMA50 cap stayed unreclaimed, and rates stay FALSE
              </div>
              <div className="dn-thesis">
                The re-arm gate has all four legs FALSE again, and the flow legs inverted
                from 07-27. The <em>price</em> leg (D-EMA50 reclaim on an up-close) is FALSE
                — two up-closes off the floor (07-28 $63,903.60, 07-29 in-progress
                $64,034.50) but both below the D-EMA50 $64,923 cap, spot −1.36% beneath. The{' '}
                <em>SM-adding</em> leg is FALSE and worse than FALSE — SM TRIMMED net-long
                −41.48% to +5,038 by cutting longs (−1,635) AND re-adding shorts (+1,937),
                the exact inverse of the 07-27 +214% dip-buy; the buyer of record adds into
                dips and trims into bounces. The <em>OI demand</em> leg is FALSE — OI
                contracted −2.18% (−2,305 BTC) on a short-cover (futures/taker buying to
                close as OI falls, spot offered), not a demand-led expansion. And the{' '}
                <em>rates</em> filter stays FALSE at 10Y 4.65% (Tuesday −4bp, 10bp from
                firing). The recurring signature means the scout&rsquo;s demand leg and
                price-reclaim leg are structurally out of phase; the entry stays deferred
                until they align — a cap reclaim on an up-close WITH SM re-adding on a
                demand-led OI.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm gate (all four legs FALSE)</span><span className="dn-lvl-v bear">D-EMA50 reclaim on an up-close (FALSE — two up-closes but below the $64,923 cap) · SM adding (FALSE — TRIMMED −41.48%, cut longs, added shorts) · OI demand-led (FALSE — −2.18% short-cover contraction) · 10Y &lt; 4.55% (FALSE — 4.65%)</span></div>
                <div><span className="dn-lvl-k">the signature</span><span className="dn-lvl-v bear">SM adds into dips (07-27 +214%) and trims into bounces (07-29 −41%) — the demand leg and the price-reclaim leg never print TRUE together</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on a D-EMA50 reclaim on an up-close that PAIRS with SM re-adding AND OI turning demand-led (or a rates print &lt; 4.55%): scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">daily close &lt; $63,311 (settled 200W floor / D-SMA50 confluence — a close below ends the recovery read)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$66k–$72k call-wall band is the practical cap; working MA target D-EMA100 $67,555, take half into the $66k / $67k walls</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R on the confirming reclaim · not on a short-cover bounce the buyer of record is trimming into</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> entry on the confirmed re-arm ~$64,923 (D-EMA50 reclaim), stop
                $63,311 (settled floor / D-SMA50) = ~$1,612 risk; working target D-EMA100
                $67,555 = ~$2,632 reward ≈ 1.63:1 — but the $66k–$72k call-wall band caps
                the path, so the realistic first target is the $66k / $67k walls and the
                R/R to those is thinner. <b>Hard rule:</b> the scout does not enter on a
                short-cover bounce. Two up-closes off the floor with SM trimming −41% and OI
                contracting is a relief bounce, not a demand-led reclaim — the buyer of
                record is stepping OUT of the bounce it bought the dip for. The confirming
                leg is the price reclaiming the D-EMA50 on an up-close WITH SM re-adding and
                OI turning demand-led, in that order.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · chase · STOOD DOWN · FURTHER from armed — the near-dated negative gamma fuel evaporated overnight</span>
              <div className="dn-trade-name">
                Chase-short — the 07-28 re-arm was &ldquo;closest to met&rdquo;; the gamma fuel is now gone, the book re-gammaed positive, the $64k pocket healed, and the floor held
              </div>
              <div className="dn-thesis">
                On 07-28 the chase-short was the closest to armed of the whole recovery: a
                fresh near-dated negative cluster (28JUL −13.30M / 29JUL −4.37M / 30JUL
                −0.51M) plus a $64k −11.99M pocket overhead, and spot had lost the D-EMA50 on
                a close. Both legs have now REVERSED. The near-dated negative cluster healed
                overnight — 28JUL settled off, 29JUL flipped +10.12M, 30JUL +0.45M, and the
                strip is effectively positive again (bar a trivial 14AUG −0.09M residual) with
                31JUL +61.31M dominant; the $64k pocket
                went from −11.99M straight to +14.23M; the dealer aggregate deepened to
                +116.31M rollup; and the floor held on a close with two up-closes. So the
                chase-short is not just stood down — it is FURTHER from armed than at any
                point since the reset, with its amplifying-negative-gamma fuel gone and a
                clean positive dampener now sitting between spot and the floor. The
                chase-short arms only on a floor BREAK with the negatives back and SM rolling
                off — none of which is present.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm legs (both REVERSED vs 07-28)</span><span className="dn-lvl-v bull">near-dated negative gamma HEALED (29JUL +10.12M / 30JUL +0.45M / 31JUL +61.31M, $64k pocket +14.23M) AND the floor HELD on a close (two up-closes) — the 07-28 legs both unwound</span></div>
                <div><span className="dn-lvl-k">why further stood down</span><span className="dn-lvl-v bull">dealer aggregate deepened positive +116.31M · the near-spot book is a clean positive dampener again ($64k +14.23M, only $60k −20.90M far below) · spot +1.15% above the floor</span></div>
                <div><span className="dn-lvl-k">what would arm the short</span><span className="dn-lvl-v bear">a daily close &lt; $63,311 (floor break) with fresh near-dated negative gamma re-appearing AND SM rolling off its net-long — then the short arms on the break, stop above the D-EMA50 $64,923</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no chase-short into a positive-gamma dampener above a floor that just held; wait for the break with the negatives back</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> the whole edge of the chase-short was the amplifying
                negative gamma below spot; that fuel evaporated overnight when the strip
                re-gammaed positive and the $64k pocket healed. Shorting into a
                deepened positive-gamma book above a floor that held on a close, with dealers
                now cushioning the downside rather than amplifying it, is the low-quality
                short the lineage stands down. If $63,311 breaks on a close with fresh
                near-dated negatives back and SM rolling off, the short re-arms on the break
                — until then it waits, and today it is further from that than yesterday.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · the recurring signature is now the whole story — SM adds into dips, trims into bounces, so the reclaim never pairs with the demand</span>
              <div className="dn-trade-name">
                Phase mismatch — the floor holds and the engine bounces, but the buyer of record trims into every bounce and adds into every dip, keeping the scout&rsquo;s two legs permanently out of phase
              </div>
              <div className="dn-thesis">
                Six sessions into the deferral the pattern has resolved into a clean
                signature: on the 07-27 dip SM added +214% (demand leg TRUE, price leg
                FALSE); on the 07-26 reclaim it trimmed (price leg TRUE, demand leg FALSE);
                on today&rsquo;s bounce it trimmed again −41% (both flow and price legs
                FALSE). The buyer of record defends the floor by buying dips and fades
                strength by trimming bounces — which is a rational way to hold a net-long at
                a cycle floor, but it means the scout&rsquo;s two entry legs (a cap reclaim
                AND SM adding on demand) are structurally out of phase and will not align on
                a short-cover bounce. The note therefore turns on a genuine regime change,
                not another oscillation: either a D-EMA50 reclaim on an up-close that SM
                actually adds into (the phase finally aligning, scout arms live), or a
                $63,311 close-break where SM finally rolls off its net-long (the floor
                defence failing, chase-short arms). Absent one of those, the book stays flat
                and the note repeats.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">bull resolution</span><span className="dn-lvl-v bull">D-EMA50 $64,923 reclaim on an up-close that SM ADDS into (not trims) with OI turning demand-led — the phase aligns, scout arms live 0.2R</span></div>
                <div><span className="dn-lvl-k">bear resolution</span><span className="dn-lvl-v bear">daily close &lt; $63,311 with SM rolling OFF its net-long and fresh near-dated negatives back — the floor defence fails, chase-short arms on the break</span></div>
                <div><span className="dn-lvl-k">deciding tells</span><span className="dn-lvl-v">the SM net-long trajectory relative to price direction (adds into strength vs trims into strength) and the $63,311 daily close — not the intraday bounce</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the edge is recognizing that the bounce and the
                dip are the same oscillation the desk has watched all week — a buyer
                defending a floor, not a trend resolving. The lineage does not chase either
                side of that oscillation; it waits for the phase to align (reclaim + SM add)
                or break (floor close-break + SM roll-off). A short-cover bounce that SM
                trims into is neither. Read the SM trajectory against price direction and the
                $63,311 close, not the candle.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the settled floor $63,311 HELD on a close (two up-closes, bear resolution DID NOT fire) · the D-EMA50 reclaim DID NOT fire (capped −1.36% below on short-covering) · all four scout legs FALSE · chase-short FURTHER stood down (near-dated negatives healed) · book FLAT</span>
            </h2>

            <p>
              Of the 07-28 decision conditions: the{' '}
              <em>settled-floor stop / floor test</em> resolved a HOLD (07-28 closed
              $63,903.60, the first up-close off the $63,311 confluence with the 07-29
              in-progress $64,034.50 the second — the bear resolution the desk gated the
              chase-short on DID NOT fire); the{' '}
              <em>cover-bounce scout (long)</em> trigger DID NOT FIRE (the floor held and the
              engine bounced, but on short-covering with the buyer of record trimming, so
              neither the price nor the flow leg met); the{' '}
              <em>D-EMA50 reclaim on an up-close paired with SM re-adding</em> did not occur
              (two up-closes but both capped below $64,923, and SM TRIMMED −41.48% into the
              bounce); the <em>reclaim-long rates filter</em> stayed FALSE (Tuesday&rsquo;s
              10Y ticked −4bp to 4.65%, still 10bp above the 4.55% gate); and the{' '}
              <em>chase-short re-arm</em> moved FURTHER from armed — the near-dated negative
              gamma that was its fuel healed overnight (29JUL +10.12M, 30JUL +0.45M, the strip
              effectively positive again bar a trivial 14AUG −0.09M residual, $64k pocket
              +14.23M).{' '}
              <em>The floor held on a close, the book re-gammaed positive, and the
              engine bounced — but the bounce is hollow, so nothing armed on either side.</em>{' '}
              The conditions today re-set around a held floor, a short-cover bounce, a
              trimming buyer of record, a deepened positive-gamma dealer book, and an
              unreclaimed D-EMA50 cap:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Settled-floor stop / floor test (07-28 gate)</td><td className="bull">HELD — 07-28 close $63,903.60, the first up-close off the $63,311 W-SMA200 / D-SMA50 confluence (07-29 in-progress $64,034.50 the second); 07-28 close +0.94% above the floor, spot +1.15% above</td><td>the bear resolution did NOT fire; the recovery read runs on, the chase-short stays stood down</td></tr>
                <tr><td>D-EMA50 reclaim on an up-close (scout price leg)</td><td className="bear">FALSE — two up-closes but both below the $64,923 cap; 07-28 close $63,903.60 sits −1.57% beneath (spot −1.36%); the cap is unreclaimed a 6th day</td><td>no scout long: the bounce never took the cap, so the price leg is unmet</td></tr>
                <tr><td>SM adding to net-long (scout flow leg)</td><td className="bear">FALSE — SM TRIMMED −41.48% to +5,038 (Δlong −1,635, Δshort +1,937) — the trim-shape, inverse of 07-27&rsquo;s +214% add</td><td>no scout long: the buyer of record faded the bounce, not funded it</td></tr>
                <tr><td>Buyers behind the OI (scout flow leg)</td><td className="bear">FALSE — OI −2.18% (−2,305 BTC) short-cover contraction, not demand-led expansion</td><td>no scout long: the bounce is shorts closing, not longs stepping in</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">FALSE — 10Y 4.65% &gt; 4.55% (Tuesday −4bp, 10bp from firing)</td><td>standalone filter false; the next FRED daily is the thing that can move it toward the gate</td></tr>
                <tr><td>Cover-bounce scout (long)</td><td className="bull">a D-EMA50 $64,923 reclaim on an up-close PAIRED with SM re-adding AND OI turning demand-led (or 10Y &lt; 4.55%)</td><td>scout long 0.2R, stop $63,311, working target D-EMA100 $67,555 (capped by $66k–$72k call walls), R/R ~1.63:1</td></tr>
                <tr><td>Chase-short re-arm (further from armed)</td><td className="bull">near-dated negative gamma HEALED + floor HELD on a close — both 07-28 legs REVERSED; dealer aggregate deepened +116.31M</td><td>no chase-short into a positive-gamma dampener above a held floor; arms only on a $63,311 close-break with negatives back and SM rolling off</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the buyer of record&rsquo;s next move is to ADD into a D-EMA50 reclaim
                on an up-close (the phase finally aligning, scout arms live) or to ROLL OFF its
                net-long into a $63,311 close-break (the floor defence failing, chase-short
                arms on the break) — everything else is the same short-cover-and-trim
                oscillation the desk has watched for six sessions
              </span>. The floor held and the book re-gammaed positive, but it held on
              short-covering with the buyer of record trimming −41.48% into the bounce, the
              exact inverse of the 07-27 dip when it added +214% — so the scout&rsquo;s two
              legs (a cap reclaim AND SM adding on demand) stayed out of phase a sixth day and
              nothing armed. Until the phase aligns or the floor breaks, this note runs as
              written: the scout is DEFERRED a sixth day with all four legs FALSE; the
              chase-short is FURTHER from armed than at any point since the reset, its
              near-dated negative-gamma fuel healed into a clean positive dampener; the
              put-spread is not re-grown on a single Tuesday-thaw 10Y leg; and the book stays
              FLAT above the floor. The MTF bounced off oversold with its HTF bottoming tell
              intact, the dealer book deepened positive and healed its near-dated negatives,
              and BTC firmed with the risk cluster — but the buyer of record trimmed the
              bounce it defended the dip into, and that phase mismatch is the tell the desk
              reads next. The right read for the next 24h is{' '}
              <em>patient — the level is doing the work; read the $63,311 close and the SM
              trajectory against price direction, not the bounce, and do not buy a cap the
              price has not reclaimed or short a floor the smart money is defending</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> v2 EN note. STAGE B codex hostile-but-fair audit ran and is
            recorded at audits/2026-07-29-desk-note.md (verdict PASS-WITH-NOTES — 0 CRITICAL,
            3 MAJOR, 3 MINOR). STAGE C applied every finding (CRITICAL + MAJOR + MINOR) in
            place and ran the mandatory grep-closure loop — for each finding, the wrong-claim
            string pattern was grepped across the full EN file and every stale match fixed
            until zero remained. The supplementary ask-deepseek recompute pass was adjudicated
            item-by-item (recompute before acting), not auto-applied. Snapshot anchor
            2026-07-29 00:05Z (live tape t == &ldquo;07-29 08:05&rdquo; BJ); rolling sources
            archived at /opt/desk-note/snapshots/2026-07-29-0005/.
            <br /><br />
            <b>Per-finding grep-closure (pattern — hits before → hits after — status):</b>
            <br />
            DN-001 (MAJOR — live_db.t BJ stamps mislabeled Z): patterns{' '}
            <code>00:54Z</code> (1→0), <code>21:48Z</code> (1→0), <code>08:18Z</code> (2→0),{' '}
            <code>15:03Z</code> (2→0), <code>11:01Z</code> (2→0), <code>07:41Z</code> (2→0),
            and the lineage <code>06:36Z</code> cross (2→0) — every live-tape event stamp is
            now a BJ / UTC pair (retail 08:18 BJ / 00:18Z &amp; 15:03 BJ / 07:03Z; SM peak
            11:01 BJ / 03:01Z &amp; trough 07:41 BJ / 07-28 23:41Z; spot high 00:54 BJ /
            07-28 16:54Z &amp; low 21:48 BJ / 13:48Z; cross 07-21 06:36 BJ / 07-20 22:36Z).
            RESOLVED (hits-after = 0). <br />
            DN-002 (MAJOR — MTF/live H/L basis): pattern{' '}
            <code>~$140 deltas are the 4-minute source gap</code> (1→0). The MTF/parquet low
            $62,660 is now stated as the OHLCV-bar (perp) print (low $62,660.1 @ 07-28
            13:47Z, reproducing in both the 00:01Z and 00:05Z windows) vs the prose
            live_db.spot low $62,800.00 — a spot-vs-OHLCV/perp basis gap that persists after
            aligning the 00:05Z window, not four minutes; the 4-min gap explains only the
            timestamp/return drift. RESOLVED (hits-after = 0). <br />
            DN-003 (MAJOR — up-close count + close offsets): pattern{' '}
            <code>second up-close</code> in the 07-28 sense (3 total → 1, the single survivor
            at the 07-29 in-progress subject which IS the second up-close, so stale-meaning
            hits = 0); 07-28 is now stated as the FIRST up-close (07-29 in-progress the
            second) at the lead, the floor-test prose, and the decision table. Spot-derived
            offsets attached to the 07-28 close subject were recomputed to close-specific
            values: 07-28 close +0.94% above the $63,311.02 floor (spot +1.15%) and −1.57%
            below the $64,922.66 D-EMA50 (spot −1.36%). RESOLVED (stale-meaning hits-after =
            0). <br />
            DN-004 (MINOR — stale D-EMA100 in decision table): pattern <code>67,622</code>
            (1→0); the decision-table working target now reads D-EMA100 $67,555 (parquet
            recompute 67,554.647), matching the body/R/R, R/R restated ~1.63:1 (2,632 / 1,612).
            RESOLVED (hits-after = 0). <br />
            DN-005 (MINOR — &ldquo;wholly positive&rdquo; overstates the strip): pattern{' '}
            <code>wholly positive</code> (9→0); every strip reference now reads
            &ldquo;effectively positive … bar a trivial 14AUG −0.09M residual&rdquo; and every
            aggregate-book reference reads &ldquo;re-gammaed positive.&rdquo; RESOLVED
            (hits-after = 0). <br />
            DN-006 (MINOR — CVD low written as a dollar value): pattern <code>$11,972</code>
            (1→0); the spot-CVD counter low now reads <code>cb_cvd 11,972</code> (counter dip,
            not a USD price). RESOLVED (hits-after = 0).
            <br /><br />
            <b>ask-deepseek supplementary recompute — adjudication:</b> (1) D-EMA100
            $67,555 vs $67,622 — CONFIRMED, identical to DN-004, fixed. (2) DXY delta
            &ldquo;+0.15 vs 07-27&rdquo; (prose) vs &ldquo;−0.08&rdquo; (macro table) —
            NOT AN ERROR (codex-clean): the two deltas carry distinct labels and baselines —
            the prose is vs the 07-27 note level 101.24, the table column is the last FRED
            daily move — so both are correct and no change made. (3) OI delta −2,305.1 vs
            −2,305.2 — REJECTED (false positive): the exact difference 105,591.168 −
            103,286.041 = 2,305.127 rounds to −2,305.1, per codex recompute; deepseek used
            pre-rounded inputs. (4) Funding min −3.32% vs −3.33% — REJECTED (false positive):
            −0.003036 × 1095 = −3.3244, which rounds to −3.32%; deepseek&rsquo;s 3.32542 is an
            arithmetic slip. Only item (1) was actionable and is covered by DN-004.
            <br /><br />
            <b>Recompute anchors (unchanged, codex-confirmed clean):</b> funding × 1095 (live
            +10.95% ann from raw 0.01 at the exchange cap, 24h mean +4.70%, max +10.95% ann,
            min −3.32% ann from −0.003036, 300 / 1441 negative rows); the GEX dual-reference
            sign (flip $62,716, spot +2.11% / idx +2.27%, both positive, tile spot side;
            headline +100.4M vs by-expiry rollup +116.31M = gex_summary.json net_gex
            $116,313,503, ~+15.9M gap with the rollup ABOVE the headline this run); the full
            MA matrix vs live spot $64,041.86 off parquet 2026-07-29 00:05Z close $64,034.50
            (D-EMA50 $64,923 −1.36% cap, D-SMA50 $63,361 +1.07% nearest support, settled 200W
            floor $63,311.02, W-SMA200 non-computable at 188 weekly bars while W-SMA150
            $76,627 is computable but disused, D-EMA100 $67,555); the SM cut fraction
            |Δnet|/prior_net = 3,571.78 / 8,610.03 = 41.48% (Δlong −1,634.8 / Δshort
            +1,937.0); 30D close-to-close RV 31.33% (29-return alt 30.02%); the by-expiry
            rollup reconstruction (listed expiries sum +116.30M ≈ net_gex +116.31M);
            cross-asset (|r| 0.266 NORMAL, BTC −3.93% vs NQ −4.12%) and macro Tier-1 (10Y
            4.65% Tuesday −4bp, HY OAS 2.81%, MOVE 77.2, DXY 101.39, Fed net liq $5.917T);
            claims-vs-loaded-data (NTT / max-pain / strike-IV / BTC-NQ framework-only; JGB
            monthly do-not-lean; IV chain-median across 838 instruments, not a tradable
            spread); and the requireViewer gating pattern (path /desk/2026-07-29, first
            statement of the default export). All six findings RESOLVED; promoted v1 → v2.
            Post codex hostile audit.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among
            principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a
            single atomic snapshot (2026-07-29 00:05Z) with section-level provenance
            disclosed in the manifest band above; the macro Tier-1 panel render is
            2026-07-28 22:17Z (~1.8h before snapshot) with Tuesday&rsquo;s FRED daily
            re-print, and some inputs are explicitly stale or pending and flagged as such.
            Levels, sizes, and conditions are illustrative of the desk&rsquo;s process, not
            standing recommendations. Past correlation, gamma, and positioning patterns do
            not bind future tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The floor held and the book re-gammaed positive, but the bounce is hollow —
                short-covering on a falling OI with the buyer of record trimming −41% into
                it. SM adds into dips and trims into bounces, so the reclaim never pairs with
                the demand. Do not buy a cap the price has not reclaimed. Read the close.
                Patient.
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
            v2 · 2026-07-29 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
