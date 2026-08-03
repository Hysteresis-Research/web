import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-03 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-03',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-03' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260803() {
  await requireViewer('/desk/2026-08-03');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-03 · v2</span>
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
              <span className="dn-big">$63,435</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.85%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-03 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-03 00:07Z (snapshot pin, t == &ldquo;08-03 08:07&rdquo; BJ)</td>
                  <td className="dn-flag">
                    fresh · 1-min · anchor pinned to the file tail at 00:07Z (BJ 08:07) for
                    reproducibility · 24h-window convention: headline deltas use the same-clock
                    prior-day baseline t == &ldquo;08-02 08:07&rdquo; BJ (endpoint minus the 24h-ago
                    row, 1,440 one-minute intervals back / 1,441 rows inclusive). The 4h / 1h flow
                    blocks use prior-row inclusive baselines (08-03 04:07 / 07:07 BJ through the 08:07
                    pin); the series is contiguous across the sub-windows this run, so those reproduce
                    the same-clock endpoints — no baseline discrepancy. NO CVD reset signature in the
                    24h window — endpoint fut_cvd Δ −1,877.5 reconciles exactly to the summed taker-net
                    −1,877.5, and cb_cvd (17,569.2 → 25,747.3, six &gt;120 BTC one-minute steps, max +239.3, no reset-scale step) — so
                    CVD deltas are raw endpoint differences, Method A not required · funding / flow
                    row-statistics span the 1,441-row window; premium means exclude null rows ·{' '}
                    <b>DATA-QUALITY NOTE:</b> the SM net series is CLEAN this run — no single-minute step
                    &gt; |3,000| BTC in the 24h window (contrast the 08-02 note, whose −22,911 minute
                    made the SM read data-impaired). The SM roll-off deeper into net short is a genuine
                    tape read this run, not an artifact
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-03 08:01 BJ scan (00:01Z)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · archived verbatim at
                    /opt/desk-note/snapshots/2026-08-03-0007/ · ~6-min stale vs snapshot anchor ·
                    in-progress bars · scan spot $63,526
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-03 00:00Z snapshot</td>
                  <td className="dn-flag">
                    ~7-min stale · Deribit idx $63,925 vs live $63,435 · median IV 40.4% · 866
                    instruments (was 868 on 08-02) · headline Total GEX +38.1M vs by-expiry rollup
                    +48.86M (= gex_summary.json net_gex $48,863,525.27) — a ~10.8M non-reconciling
                    source-panel gap disclosed per DN-003 lineage, the rollup again sitting ABOVE the
                    headline (same relationship as 08-02 / 08-01 / 07-31); both panels RE-GAMMAED HARD
                    net-LONG-gamma (headline +6.3M → +38.1M, rollup +20.25M → +48.86M) and the 0DTE front
                    stayed positive (3AUG +7.31M) — the dealer book is a strong dampener now, the
                    chase-short&rsquo;s gamma amplifier is gone; the negative shelf below spot lightened
                    to −44.66M ($62k −9.06M, $60k −22.74M)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-03 00:00Z
                  </td>
                  <td className="dn-flag">~7-min lag · 7d 1h bars · 22 assets · 167 rows · archived</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-02 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.87h render lag · 10Y held 4.68% (+1bp on the last FRED move, an eighth session
                    at/above the deferred 4.55% gate — reclaim-long rates filter still FALSE and 13bp
                    away, but LIVE-RELEVANT again now the recovery read has revived), TIPS flat 2.41%,
                    5Y5Y flat 2.30%, 10Y breakeven 2.28% (+1bp), HY OAS 2.84% (−3.0bp, tighter) · MOVE
                    fetch-failed a THIRD straight render (unavailable) · DXY −0.18 to 99.62, USD/JPY
                    157.40 (carried, yen firm); Fed net liq $5.825T carried (weekly, no fresh print)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-08-03 00:05Z (in-progress close $63,472.80)</td>
                  <td className="dn-flag">
                    ~2-min anchor lag · offsets recomputed vs live spot $63,435.04 · full
                    btcusdt_1m_*.parquet glob (362 weekly bars, 2019–2026) — the matrix is NO LONGER
                    fully inverted: D-SMA50 $63,333.27 is the single POSITIVE daily offset (+0.16%),
                    every other daily and weekly MA is negative · last completed daily close 08-02
                    $63,550.00 (an UP-close that RECLAIMED above the $63,311 old floor and above the risen
                    settled 200W $63,533.52)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W support watch</td>
                  <td className="dn-v-cell">independent full-glob parquet recompute this run (362 weekly bars) · ma200w_trap_watch_state.json NOT archived at the 00:07 anchor and the mutable file advanced to recomputed_at 2026-08-03 00:11Z AFTER the anchor — NOT cited as an anchored source</td>
                  <td className="dn-flag">
                    the 200W settlement is an INDEPENDENT full-glob parquet recompute this run (362
                    weekly bars) — the ma200w_trap_watch_state.json sidecar was NOT archived into the
                    00:07 snapshot, and the current mutable file has since advanced (recomputed_at
                    2026-08-03 00:11:39Z, AFTER the note anchor, now carrying last_completed_week
                    2026-08-02 close $63,550.00 / W-SMA200 $63,533.52 / consecutive_above 5), so it is NOT
                    cited as an anchored source. The independent recompute SETTLES the pivotal Sunday:
                    the week ending 2026-08-02 closed $63,550.00 against a RISEN W-SMA200 $63,533.52 — a
                    close ABOVE the floor by $16.48 (+0.026%), the FIFTH consecutive weekly close above
                    the 200W (07-05, 07-12, 07-19, 07-26, 08-02). The prior lineage&rsquo;s bear
                    resolution (&ldquo;seal below $63,311&rdquo;) did NOT fire; the floor HELD on the
                    weekly close. The in-progress week (ending 2026-08-09) W-SMA200 sits $63,753.74 with
                    the 08-03 in-progress close $63,472.80 below it
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
              <span className="dn-v bear">+10.95%</span>
              <span className="dn-src">live · raw 0.01 field × 1095 · RE-PINNED to the Binance +10.95% cap — 316 / 1441 rows at cap this window (first cap row 08-03 02:52 BJ, last 08-03 08:07 BJ: the tape has sat pinned to the cap for the last ~5h into the snap, a hard reversal from the 08-02 window that carried 0 cap rows) · 24h mean +9.16% ann · min +4.52% ann (0.004124 field @ 08-02 08:41 BJ / 08-02 00:41Z) · 0 / 1441 NEGATIVE rows — a FIFTH straight day at zero: the crowded-long carry did NOT flush and has RE-HEATED to the cap</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">re-pinned to cap · +9.16% mean · 0 negatives</span>
              <span className="dn-src">range +4.52% / +10.95% ann · mean +4.16% → +9.16% ann (re-heated) · cap occupancy 316/1441 rows (was 0 on 08-02) · the long carry that cooled off the cap for four days snapped back to the cap into this reclaim — leverage re-added on the long side even as SM rolled deeper short</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v">+0.54% (+590.4 BTC)</span>
              <span className="dn-src">live · 108,603.4 → 109,193.7 · a small EXPANSION (vs 08-02&rsquo;s −0.82% contraction) into a +0.85% up-day · the 24h flow split spot-bid / futures-offered again (spotCVD +8,178.1 vs futCVD −1,877.5 / taker −1,877.5 / big −1,934.9 across 473 active minutes, 745 big prints) — spot accumulation lifting price while futures distribute, OI added on net</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">65.87 / 34.13</span>
              <span className="dn-src">live_db `mkt_long_pct` · 24h high 68.92 (08-02 08:41 BJ / 08-02 00:41Z) low 65.28 (08-02 16:48 BJ / 08-02 08:48Z) — de-crowded ~3pt from 08-02&rsquo;s 68.76 but STILL crowded long above 65: the retail long crowd thinned into the reclaim but did not clear out</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−19,047 (net SHORT — CLEAN)</span>
              <span className="dn-src">live · long 11,023.9 − short 30,071.9 = −19,047.9 · CLEAN read this run — NO suspect single-minute step (contrast the 08-02 −22,911 artifact), so the desk certifies this net-short as a genuine tape reading · SM rolled STEADILY DEEPER short: 24h max −14,813.3 @ 08-02 10:50 BJ, min (most short) −19,359.8 @ 08-03 06:36 BJ, snap −19,047.9 — the buyer of record leaned into the reclaim as a SELLER</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 24h-ago</span>
              <span className="dn-v bear">−15,511 → −19,047 (−3,537, deeper short · CLEAN)</span>
              <span className="dn-src">|Δnet|/prior_net = 3,536.8 / 15,511.1 = 22.8% · Δlong +1,096.8 (longs modestly re-added) AND Δshort +4,633.6 (shorts stacked harder) — net rolled −3,536.8 deeper short on a CLEAN feed · this is the clean SM roll-off the 08-02 note could NOT certify off a suspect minute — but it rolled AGAINST an up-day / floor reclaim, so it reads as SM SELLING the bounce, not confirming a break</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.4% / 29.27%</span>
              <span className="dn-src">GEX median IV · chain-median across 866 instruments (was 868 on 08-02), not a tradable spread · 30D close-to-close RV = logret.std × √365 × 100 on 30 daily returns (parquet last bar 00:05Z) · ~+11.13pt chain richness · 29-return alt 29.65%</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+0.67% (ABOVE flip)</span>
              <span className="dn-src">flip $63,015 (rose $103 from 08-02&rsquo;s $62,912) · vs live spot $63,435.04 (+0.67%; 63,435.04/63,015 − 1 = +0.667%) / GEX file Deribit idx $63,925 (+1.44%; 63,925/63,015 − 1 = +1.444%, file prints +1.4%) — BOTH references sit ABOVE the flip now (spot reclaimed positive gamma, vs 08-02&rsquo;s straddle-the-flip) · headline +38.1M / rollup +48.86M — RE-GAMMAED HARD positive from 08-02&rsquo;s +6.3M / +20.25M: dealers now damp moves, the negative shelf below spot lightened to −44.66M</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The pivotal Sunday weekly close the whole lineage pointed at HELD the floor — but the
                reclaim is contested, because smart money cleanly rolled deeper short into it and the
                long carry re-pinned to the funding cap
              </span>. The 08-02 note turned on one question: does the Sunday 08-02 weekly close seal
              below $63,311 (arm the chase-short) or does the spot bid mark a base and reclaim the
              flip/floor band (re-open the scout). The weekly bar has now SETTLED and the answer is the
              bull one: the week ending 08-02 closed{' '}
              <span className="dn-tag bull">$63,550.00</span>, ABOVE the risen settled 200W{' '}
              <span className="dn-tag">$63,533.52</span> by $16.48 (+0.026%) and above the old $63,311
              floor by $239 — a{' '}
              <span className="dn-tag bull">FIFTH consecutive weekly close above the 200W</span>{' '}
              (07-05, 07-12, 07-19, 07-26, 08-02). The bear resolution the prior lineage built toward did
              NOT fire; the floor held on the close. Spot prints{' '}
              <span className="dn-tag">$63,435</span> live,{' '}
              <span className="dn-tag bull">+0.85%</span> on 24h, and the 08-02 daily bar closed{' '}
              <span className="dn-tag bull">$63,550.00 up</span>, reclaiming above the old floor. The MA
              matrix is no longer fully inverted — D-SMA50 $63,333 flipped to a{' '}
              <span className="dn-tag bull">+0.16% positive offset</span>, the first support back under
              spot. But <span className="dn-em">the reclaim is contested on every book that matters</span>.
              First, the buyer of record:{' '}
              <span className="dn-signal">
                the SM tape rolled deeper net short to −19,047 on a CLEAN feed this run (no suspect
                minute), stacking shorts +4,634 into the up-day — smart money SOLD the bounce
              </span>. This is the clean roll-off the 08-02 note could not certify off an artifact minute,
              but it printed AGAINST the reclaim, not with a break. Second, the carry:{' '}
              <span className="dn-tag bear">funding RE-PINNED to the +10.95% cap</span> (316/1441 rows at
              cap, last ~5h into the snap, vs 0 cap rows on 08-02) with{' '}
              <span className="dn-tag bear">0 negatives a fifth day</span> — the long leverage did not
              flush, it re-heated. Third, the dealer book:{' '}
              <span className="dn-tag bull">re-gammaed HARD positive</span> — headline{' '}
              <span className="dn-tag">+6.3M → +38.1M</span>, rollup{' '}
              <span className="dn-tag">+20.25M → +48.86M</span> — spot reclaimed above the $63,015 flip
              (+0.67%), so the chase-short&rsquo;s gamma amplifier is fully GONE and dealers now damp
              moves. OI expanded <span className="dn-tag">+590 BTC (+0.54%)</span>, retail de-crowded ~3pt
              to <span className="dn-tag bear">65.87</span> (still long), and the MTF regime FLIPPED to{' '}
              <span className="dn-tag bull">5/9 trend-continuation</span> with the count improved to{' '}
              <span className="dn-tag bear">2 long / 7 short / 1 neutral</span> and a fresh{' '}
              <span className="dn-tag bull">8h water-down golden cross</span> — but a{' '}
              <span className="dn-tag bear">new 1h ⚡TD9 SELL</span> warns the bounce is stretched. The
              book stays FLAT: the chase-short&rsquo;s floor-break leg is INVALIDATED (weekly closed
              above) and its gamma reversed to a dampener, so it stands down; the cover-bounce scout is
              REVIVING (floor reclaimed on the close, regime flipped, 8h golden cross, dampening gamma)
              but NOT armed — it needs a daily close above the D-EMA50 cap $64,657 on demand-led flow with
              a CLEAN SM read, and today SM is short against it, funding is pinned, and rates are FALSE.
              This note turns on whether the reclaim extends to a D-EMA50 cap close with SM covering — or
              whether SM&rsquo;s short and the capped-long carry drag price back below the risen $63,533
              floor.
            </p>

            <p>
              BTC prints <span className="dn-tag">$63,435</span> live,{' '}
              <span className="dn-tag bull">+0.85%</span> on 24h, inside a{' '}
              <span className="dn-tag">$63,782.20 / $62,806.59</span> range (high @ 08-03 06:12 BJ /
              08-02 22:12Z, low @ 08-02 08:56 BJ / 08-02 00:56Z), a full session traded back above the
              old floor.{' '}
              <span className="dn-signal">The floor break the prior lineage tracked did NOT seal on the
              weekly close — it reclaimed</span>: 07-26 $65,375.10 → 07-27 $63,720.80 → 07-28 $63,903.60 →
              07-29 $63,958.90 → 07-30 $64,750.00 →{' '}
              <span className="dn-tag bear">07-31 $62,859.90</span> →{' '}
              <span className="dn-tag bear">08-01 $62,792.30</span> →{' '}
              <span className="dn-tag bull">08-02 $63,550.00</span> (an up-close back above the floor),
              with the in-progress 08-03 bar (parquet last bar 00:05Z) at{' '}
              <span className="dn-tag">$63,472.80</span> — two completed daily closes below $63,311
              (07-31, 08-01) were followed by an up-close that reclaimed it, and critically the WEEKLY bar
              settled ABOVE the risen 200W.{' '}
              <span className="dn-em">
                The MA matrix is no longer fully inverted: D-SMA50 $63,333 (+0.16%) is the single
                positive daily offset — the first reclaimed support back under spot — while every other
                daily and weekly MA still prints overhead. The near band, now a mix of just-reclaimed
                support and still-overhead resistance:{' '}
                <span className="dn-tag bull">0-γ flip $63,015 (+0.67%, spot ABOVE it)</span>,{' '}
                <span className="dn-tag bull">old floor $63,311 (+0.20%, reclaimed)</span>,{' '}
                <span className="dn-tag bull">D-SMA50 $63,333 (+0.16%, reclaimed)</span>, then overhead{' '}
                <span className="dn-tag bear">settled 200W $63,533 (−0.16%)</span>,{' '}
                <span className="dn-tag bear">in-progress-week W-SMA200 $63,754 (−0.50%)</span>,{' '}
                <span className="dn-tag bear">D-EMA20 $63,942 (−0.79%)</span>,{' '}
                <span className="dn-tag bear">D-SMA20 $64,384 (−1.47%)</span>, and the{' '}
                <span className="dn-tag bear">D-EMA50 cap $64,657 (−1.89%)</span> (the scout&rsquo;s
                arming line, ticked down from 08-02&rsquo;s $64,679 as the down-closes still weigh).
              </span>{' '}
              The 200W cycle floor SETTLED bull this run: the ma200w_trap_watch_state.json sidecar was
              NOT archived at the 00:07 anchor and the mutable file advanced past it (recomputed_at 08-03
              00:11Z, now carrying the settled 08-02 week / 5 above), so the settlement is an independent
              full-glob parquet recompute this run (362 weekly bars), not a cited state read — it settles
              the pivotal Sunday: the week ending 08-02 closed $63,550.00 against a risen W-SMA200
              $63,533.52, a close ABOVE by $16.48 and the fifth consecutive above the 200W. The in-progress week (ending 08-09) W-SMA200 sits $63,753.74
              with the 08-03 in-progress close $63,472.80 below it. So the daily floor broke (two closes
              07-31/08-01) and then RECLAIMED (08-02 up-close), and the weekly break NEVER SEALED — it
              closed above. The scout was ARMED 07-22, DEFERRED 07-24, STOPPED 07-31 on the floor break;
              the reclaim on the weekly close revives its read, but it re-arms only on a cap close.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · SM rolled CLEANLY deeper net SHORT −19,047 (no suspect minute this run) — the buyer of record SOLD the reclaim · funding RE-PINNED to the +10.95% cap (316/1441 rows, 0 negatives a 5th day) — the long carry re-heated, did NOT flush · OI EXPANDED +0.54% into a +0.85% up-day · retail de-crowded ~3pt to 65.87 (still long) · the 24h flow split spot-bid / futures-offered</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important read of the day is that the SM roll-off the 08-02 note could
                not certify off a suspect minute has now printed CLEAN — and it rolled deeper short INTO
                the reclaim, not into a break
              </span>. The SM net series carries NO single-minute step &gt; |3,000| BTC in the 24h window
              this run (the recurring ~BJ-14:00 feed re-sync that produced the 08-02 −22,911 minute and
              the 07-31 +6,369 minute did not fire), so the desk certifies the net-short read.{' '}
              <span className="dn-tag bear">SM net −19,047.9</span> (long 11,023.9 − short 30,071.9),
              rolled deeper short from the 24h-ago −15,511.1 by −3,536.8 (Δlong +1,096.8 re-added, Δshort
              +4,633.6 stacked, |Δ|/prior_net = 22.8%). The path is a steady lean short: 24h max −14,813.3
              @ 08-02 10:50 BJ, min (most short) −19,359.8 @ 08-03 06:36 BJ, snap −19,047.9.{' '}
              <span className="dn-em">
                This is a clean, certifiable roll-off — but the timing inverts its meaning versus the
                08-02 setup. Yesterday a (suspect) net-short would have CONFIRMED a floor break; today a
                (clean) net-short prints INTO an up-day that reclaimed the floor on the weekly close. So
                the buyer of record is SELLING the reclaim, leaning against the bounce the price tape and
                the dealer book are building. That is not a chase-short trigger (the break it would chase
                did not seal) — it is the single loudest reason the reclaim is contested, not confirmed.
              </span>
            </p>

            <p>
              The rest of the position book reads a demand-led reclaim with a heavy futures offer and a
              re-heated long carry — a contested bid, not a clean base.{' '}
              <span className="dn-signal">
                OI expanded into an up-day with spot bought and futures sold — the mirror of a healthy
                reclaim on one leg and a warning on the other
              </span>. Spot was <span className="dn-tag bull">+0.85%</span> on the 24h with OI{' '}
              <span className="dn-tag">+590.4 BTC (+0.54%)</span> — 108,603.4 → 109,193.7, a modest
              expansion (vs 08-02&rsquo;s −902 BTC contraction). The 24h aggressor tape SPLIT: spot CVD{' '}
              <span className="dn-tag bull">+8,178.1</span> (spot accumulation, cb_cvd 17,569.2 → 25,747.3,
              no reset-scale step — six &gt;120 BTC one-minute steps, max +239.3) against futures CVD{' '}
              <span className="dn-tag bear">−1,877.5</span>, taker-net{' '}
              <span className="dn-tag bear">−1,877.5</span> (fut_cvd Δ reconciles exactly to the summed
              taker-net) and big-net{' '}
              <span className="dn-tag bear">−1,934.9 BTC (745 prints across 473 active minutes)</span> —{' '}
              <span className="dn-em">spot bought, futures sold, price up</span>. Perp trades a{' '}
              <span className="dn-tag bear">−$72.67 discount</span> to spot at the snap (24h mean −$69.13,
              range −$239.35 / −$29.12) — a persistent perp discount held right through the reclaim, so
              the up-move is spot-led, not a futures short-squeeze. 1-min aggressor skew snap{' '}
              <span className="dn-tag">+0.5</span> (1h mean −4.72, range −36.3 / +18.9).{' '}
              <span className="dn-em">
                OI expanding into an up-day with the spot bid leading and futures/big-prints offered is a
                demand-led reclaim on the spot leg, but the perp discount and the SM short mean the
                derivatives book is leaning the other way. This is a contested reclaim — a spot bid
                marking a base against a futures/SM offer — not a clean, one-sided base.
              </span>
            </p>

            <p>
              The leverage and crowding reads are the loudest warning under the reclaim: the long carry
              did not flush, it re-heated to the cap.{' '}
              <span className="dn-signal">
                Funding RE-PINNED to the +10.95% Binance cap into the bounce, and retail stayed crowded
                long above 65 — a fifth straight day with zero negatives, the carry underwater and now
                re-leveraged
              </span>: live funding <span className="dn-tag bear">+10.95% ann</span> (raw 0.01 field ×
              1095, AT the cap), 24h mean{' '}
              <span className="dn-tag bear">+9.16% ann</span> (re-heated from 08-02&rsquo;s +4.16%), min{' '}
              <span className="dn-tag">+4.52% ann (0.004124 field @ 08-02 08:41 BJ / 08-02 00:41Z)</span>,
              cap rows <span className="dn-tag bear">316 / 1441</span> (first 08-03 02:52 BJ, last 08-03
              08:07 BJ — pinned the last ~5h into the snap, vs 0 cap rows on 08-02), and{' '}
              <span className="dn-tag bear">0 / 1441 negative rows</span> — a fifth straight day at zero.
              Retail <span className="dn-tag bear">mkt_long_pct 65.87</span> (24h high 68.92 @ 08-02 08:41
              BJ, low 65.28 @ 08-02 16:48 BJ) — de-crowded ~3pt from 08-02&rsquo;s 68.76 into the bounce
              but still crowded long.{' '}
              <span className="dn-em">This is the read that makes the reclaim contested rather than clean:
              a genuine base would flush the long leverage, but here the crowd re-added on the long side
              (funding snapped back to the cap) as SM rolled deeper short. That is a book primed to
              unwind DOWNWARD if the bid fails — a re-heated long carry against a certified SM short is
              cascade fuel below the floor, not a launchpad above it. The bull needs SM to cover and the
              carry to hold; the bear needs the bid to fail and the carry to flush.</span>
            </p>

            <p>
              Windowed flow is an up 24h with a flat last-4h and a small bid into the snap. 24h: price{' '}
              <span className="dn-tag bull">+0.85%</span>, OI{' '}
              <span className="dn-tag bull">+590.4 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +8,178.1</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −1,877.5</span>, big-print{' '}
              <span className="dn-tag bear">−1,934.9 BTC / 745 prints across 473 active minutes</span>, taker-net{' '}
              <span className="dn-tag bear">−1,877.5</span> —{' '}
              <span className="dn-em">spot bid / futures offered, price up: a spot-led reclaim against a
              futures offer</span>. 4h (into snapshot): price{' '}
              <span className="dn-tag">−0.005%</span> (flat), OI{' '}
              <span className="dn-tag bear">−24.3 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −6.6</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −430.8</span>, big-print{' '}
              <span className="dn-tag bear">−146.7 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−430.8</span> — a flat, mildly-offered pause after the run-up.
              1h: price{' '}
              <span className="dn-tag bull">+0.084%</span>, OI{' '}
              <span className="dn-tag bull">+106.6 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +109.6</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −134.8</span>, big-print{' '}
              <span className="dn-tag bear">−136.8 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−134.8</span> —{' '}
              <em>a small spot bid into the snap, futures still offered</em>.{' '}
              <span className="dn-em">
                Baseline convention: the 24h block uses the same-clock prior-day row (08-02 08:07 BJ,
                1,440 one-minute intervals back / 1,441 rows inclusive); the 4h and 1h sub-window blocks
                use prior-row inclusive baselines (08-03 04:07 / 07:07 BJ through the 08:07 pin). The
                series is contiguous across these windows this run, so those reproduce the same-clock
                endpoints — no baseline discrepancy, and NO CVD reset signature in the 24h window
                (fut_cvd endpoint Δ −1,877.5 reconciles to the summed taker-net −1,877.5), so the CVD
                deltas are raw endpoint differences.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF improved to 2 long / 7 short / 1 neutral · regime FLIPPED to 5/9 周期动量 (JT≥0) trend-continuation (from 6/9 cycle-reversal mean-reversion) · a fresh 8h water-down golden cross JUST printed and a 1w golden 2b — but a NEW 1h ⚡TD9 SELL warns the bounce is overbought · MA matrix no longer fully inverted, D-SMA50 the first reclaimed support back under spot</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF panel improved and the regime FLIPPED — from the &ldquo;sell the bounce&rdquo;
                mean-reversion tag it carried through the whole floor break to a trend-continuation tag —
                but a fresh 1h TD9 SELL caps the enthusiasm
              </span>. The 00:01Z scan reads{' '}
              <span className="dn-tag bear">2 long / 7 short / 1 neutral</span> across 10 TFs (15m and 1M
              long, 30m neutral, 1h / 4h / 8h / 12h / 1d / 3d / 1w short) — improved from 08-02&rsquo;s
              1/9. The regime tag FLIPPED to{' '}
              <span className="dn-tag bull">5/9 cycle-momentum (JT≥0) — trend-continuation, be cautious
              of counter-trend fades</span> (from 6/9 cycle-reversal mean-reversion). The reclaim printed
              a{' '}
              <span className="dn-tag bull">fresh 8h water-down golden cross (just printed)</span> to go
              with the 30m golden 14b, 4h golden 5b, 3d golden 8b and the 1w water-down golden 2b — a
              cross cluster building on the higher frames. But the caution flag is real: a{' '}
              <span className="dn-tag bear">NEW 1h ⚡TD9 SELL</span> printed (an overbought-exhaustion hint
              right on the frame that leads the bounce), the 15m turned a water-up death cross 5b (the
              fast frame rolling over) and carries a top-div, and the 1h/4h/8h all still sit below or in
              cloud. The bull counterweight persists — ⚡TD9 BUYs on 1d and 1M, a bottom-div cluster on
              15m/1h/4h/8h/1w — but so does a top-div cluster on 15m/4h/1d.{' '}
              <span className="dn-em">
                So the structure flipped to trend-continuation on the reclaim, with a golden-cross
                cluster building through 30m–1w and the deep-frame TD9 BUYs intact — the constructive
                read the bounce earned. But the fresh 1h TD9 SELL and the 15m rollover say the bounce is
                stretched in the near term, and the frames that matter for the scout (4h/8h) are still
                below cloud. This is a reclaim with momentum on its side and an overbought warning on the
                fast frames — constructive but not yet a clean trend.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,526</td><td className="num">55</td><td className="bear">death (water-up) 5b</td><td className="bull">above ↓63.3k 27b</td><td>Sell 3</td><td>TOP+BOT-div</td></tr>
                <tr><td>30m</td><td className="num">63,526</td><td className="num bull">61</td><td className="bull">golden (water-dn) 14b</td><td className="bull">above ↓63.2k 44b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1h</td><td className="num">63,526</td><td className="num bull">60</td><td className="bull">golden (water-up) 6b</td><td className="neut">in cloud 62.7k–63.8k 9b</td><td>⚡ TD9 SELL</td><td>BOT-div</td></tr>
                <tr><td>4h</td><td className="num">63,530</td><td className="num">50</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑63.9k 18b</td><td>Sell 2</td><td>TOP+BOT-div</td></tr>
                <tr><td>8h</td><td className="num">63,526</td><td className="num">47</td><td className="bull">golden (water-dn) just printed</td><td className="bear">below ↑64.2k 9b</td><td>Sell 5</td><td>BOT-div</td></tr>
                <tr><td>12h</td><td className="num">63,526</td><td className="num">46</td><td className="neut">death (water-up cont.)</td><td className="neut">in cloud 62.1k–64.2k 5b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">63,526</td><td className="num">48</td><td className="neut">death (water-up) 7b</td><td className="neut">in cloud 61.9k–68.0k 14b</td><td>⚡ TD9 BUY</td><td>TOP-div</td></tr>
                <tr><td>3d</td><td className="num">63,526</td><td className="num">44</td><td className="bull">golden (water-dn) 8b</td><td className="bear">below ↑76.4k 21b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,526</td><td className="num">39</td><td className="bull">golden (water-dn) 2b</td><td className="bear">below ↑85.9k 27b</td><td>Buy 2</td><td>BOT-div</td></tr>
                <tr><td>1M</td><td className="num">63,526</td><td className="num">44</td><td className="neut">—</td><td className="bull">above ↓47.4k 30b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 08:01 BJ scan (00:01Z; rolling latest file, archived
                    verbatim at /opt/desk-note/snapshots/2026-08-03-0007/). Header alerts:{' '}
                    <em>⚡ TD9 SELL 1h (NEW — overbought hint), ⚡ TD9 BUY 1d/1M (oversold reversal
                    hints)</em>,{' '}
                    <em>top-div 3: 15m/4h/1d · bottom-div 5: 15m/1h/4h/8h/1w</em>,{' '}
                    <em>8h water-down golden cross just printed, 1w water-down golden 2b</em>,{' '}
                    <em>regime 5/9 cycle-momentum (JT≥0) — trend-continuation</em>, count{' '}
                    <em>2 long / 7 short / 1 neutral</em>. Scan spot $63,526, 24h +1.13%, 24h H/L
                    $63,779 / $62,782, qVol $5.33B (the live-tape anchor at 00:07Z reads spot $63,435.04 —
                    the ~$91 gap is the 6-minute source lag plus the spot-vs-OHLCV/perp basis). Closes are
                    in-progress bars; treat every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is no longer fully inverted — the reclaim put the first support back under
              spot. Spot $63,435 sits ABOVE three near lines and below the rest:{' '}
              <span className="dn-tag bull">0-γ flip $63,015 (+0.67%)</span>,{' '}
              <span className="dn-tag bull">old floor $63,311 (+0.20%, reclaimed)</span>, and{' '}
              <span className="dn-tag bull">D-SMA50 $63,333 (+0.16%)</span> — the single positive daily
              MA offset, the first reclaimed support. Immediately overhead is the band that now caps the
              bounce:{' '}
              <span className="dn-tag bear">settled 200W floor $63,533 (−0.16%)</span>,{' '}
              <span className="dn-tag bear">in-progress-week W-SMA200 $63,754 (−0.50%)</span>,{' '}
              <span className="dn-tag bear">D-EMA20 $63,942 (−0.79%)</span>,{' '}
              <span className="dn-tag bear">D-SMA20 $64,384 (−1.47%)</span>,{' '}
              <span className="dn-tag bear">D-EMA50 cap $64,657 (−1.89%)</span> — the scout&rsquo;s arming
              line. Above that:{' '}
              <span className="dn-tag bear">D-EMA100 $67,165 (−5.55%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $68,635 (−7.58%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $68,561 (−7.48%; seed)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $68,852 (−7.87%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,159 (−8.28%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,527 (−8.76%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $69,974 (−9.34%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $70,972 (−10.62%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $72,747 (−12.80%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $73,962 (−14.23%; seed)</span>. Far above and disused:
              W-SMA150 $76,872 (−17.48%), W-EMA50 $77,760 (−18.42%), W-EMA100 $78,749 (−19.45%), W-SMA50
              $83,331 (−23.88%), W-SMA100 $88,648 (−28.44%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-08-03 00:05Z (in-progress close $63,472.80); offsets
                recomputed against live spot $63,435.04. Displayed MA levels are $-rounded; offsets
                computed from exact series values. The full-glob recompute (362 weekly bars) makes every
                weekly MA computable — W-SMA200 $63,753.74 (in-progress week) / $63,533.52 (last completed
                week — the risen settled floor the 08-02 close cleared); W-EMA150 $73,962 and W-EMA200
                $68,561 seed from available history and print above spot. Daily closes: 07-26 $65,375.10,
                07-27 $63,720.80, 07-28 $63,903.60, 07-29 $63,958.90, 07-30 $64,750.00, 07-31 $62,859.90,
                08-01 $62,792.30, 08-02 $63,550.00 (an up-close that RECLAIMED above the floor), 08-03
                (in-progress) $63,472.80 — the two settled closes below the floor were reclaimed by the
                08-02 up-close, and the weekly bar settled above the 200W.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book RE-GAMMAED HARD positive — headline +38.1M (was +6.3M) / rollup +48.86M (was +20.25M) · spot reclaimed above the $63,015 flip (+0.67%) so the chase-short&rsquo;s gamma amplifier is GONE, dealers now DAMP moves · the 0DTE front stayed positive (3AUG +7.31M) · the negative shelf below spot LIGHTENED to −44.66M ($62k −9.06M into $60k −22.74M) · $70k +14.91M the heaviest positive wall, overhead</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book finished the job it started on 08-02: it re-gammaed HARD positive and
                spot reclaimed above the flip, so the negative-gamma amplifier the chase-short leaned on
                through the whole floor break is fully gone — dealers now damp moves in both directions
              </span>. Headline Total GEX / 1% move is{' '}
              <span className="dn-tag bull">+38.1M</span> (was +6.3M on 08-02), with the by-expiry rollup
              at <span className="dn-tag bull">+48.86M</span> (= gex_summary.json net_gex $48,863,525.27,
              was +20.25M on 08-02) — a ~10.8M non-reconciling headline-vs-rollup gap, disclosed per
              DN-003 lineage, with the rollup again ABOVE the headline. Both panels read strong
              net-LONG-gamma (dampening).{' '}
              <span className="dn-em">So dealers now damp a move here — a positive-gamma cushion that
              caps both a squeeze up and a break down, the opposite of the amplifier the chase-short
              wanted below the floor.</span> The 0-γ flip rose{' '}
              <span className="dn-tag">$62,912 → $63,015 (+$103)</span>, and spot $63,435 sits{' '}
              <span className="dn-tag bull">+0.67% ABOVE flip</span> on spot-denominated math (63,435.04 /
              63,015 − 1 = +0.667%); the GEX file&rsquo;s Deribit-index reference $63,925 sits{' '}
              <span className="dn-tag bull">+1.44% above</span> (63,925 / 63,015 − 1 = +1.444%, the file
              prints +1.4%) — BOTH references are above the flip now (spot reclaimed positive gamma, vs
              08-02&rsquo;s straddle-the-flip). The wall map has the positive walls overhead and a
              LIGHTENED negative shelf below:{' '}
              <span className="dn-tag bull">$70k +14.91M</span> (the heaviest positive wall, overhead),{' '}
              <span className="dn-tag bear">$60k −22.74M</span> (the crash-put, lighter than
              08-02&rsquo;s −24.91M),{' '}
              <span className="dn-tag bull">$68k +10.81M</span>,{' '}
              <span className="dn-tag bull">$66k +10.76M</span>,{' '}
              <span className="dn-tag bull">$67k +10.46M</span>,{' '}
              <span className="dn-tag bull">$72k +10.03M</span>,{' '}
              <span className="dn-tag bear">$62k −9.06M</span> (below spot, lighter than 08-02&rsquo;s
              −11.27M),{' '}
              <span className="dn-tag bull">$80k +7.82M</span>,{' '}
              <span className="dn-tag bear">$58k −7.00M</span>,{' '}
              <span className="dn-tag bear">$55k −5.86M</span>.{' '}
              <span className="dn-em">
                The negative cluster BELOW spot sums to roughly −44.66M ($62k −9.06M + $60k −22.74M + $58k
                −7.00M + $55k −5.86M) — a lighter shelf than 08-02&rsquo;s −50.5M, and now sitting below a
                positive-gamma flip rather than at it. So the trapdoor below is still there but the door
                is heavier to open: spot is +0.67% ABOVE the flip in dampening gamma, so a break down has
                to first push back through the positive cushion to the $62k wall before the $60k crash-put
                amplifies. Above spot the positive walls ($66k–$72k, $80k) cap a squeeze. The dealer book
                is now a two-sided DAMPENER, not the one-sided amplifier the chase-short needed.
              </span>{' '}
              By expiry the front stayed positive:{' '}
              <span className="dn-tag bull">3AUG26 0.3DTE +7.31M</span> (the 0DTE front, positive), 4AUG
              1.3 +0.46M, 5AUG 2.3 +1.74M, 6AUG 3.3 +0.66M,{' '}
              <span className="dn-tag bull">7AUG 4.3 +11.94M</span>, 14AUG 11.3 −0.02M, 21AUG 18.3 +5.58M,{' '}
              <span className="dn-tag bull">28AUG 25.3 +15.58M</span> (the heaviest positive chunk), 25SEP
              53.3 +1.94M, 30OCT 88.3 +0.09M, 25DEC 144.3 +2.24M, 26MAR27 235.3 +0.74M, 25JUN27 326.3
              +0.61M — the strip sums to{' '}
              <span className="dn-tag bull">+48.86M</span> (net_gex $48,863,525.27; the +$0.01M vs the
              hand-sum is per-expiry $-rounding). The front 0.3–3.3DTE cluster (3AUG +7.31M + 4AUG +0.46M +
              5AUG +1.74M + 6AUG +0.66M) nets{' '}
              <span className="dn-tag bull">+10.17M</span> — a solidly positive front, so the near-dated
              amplifier is gone and the front is now a dampener too.
            </p>

            <p>
              IV median across the option chain is{' '}
              <span className="dn-tag">40.4%</span> (unchanged from 08-02) against 30D close-to-close RV of{' '}
              <span className="dn-tag">29.27%</span> — chain-level richness{' '}
              <span className="dn-tag">~+11.13pt</span>. A chain-median across N instruments (866 today,
              down from 868), <span className="dn-em">not</span> a tradable spread; expiry-/strike-level
              vega, skew and term structure remain not loaded; the vol read stays framework-only. RV
              methodology: 30D close-to-close, logret.std × √365 × 100 on the last 30 daily log returns
              (= 31 consecutive daily closes) anchored to parquet last bar 2026-08-03 00:05Z; the
              29-return alt reads 29.65%.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · 10Y held 4.68% (reclaim-long rates filter still FALSE, 13bp away — but LIVE-RELEVANT again now the recovery read has revived) · HY OAS 2.84% (−3.0bp, tighter), TIPS/5Y5Y flat · MOVE fetch-failed a THIRD straight render · DXY −0.18 to 99.62 (softer), yen firm · rates the load-bearing tightening, credit neutral/tighter and DXY softer / NFCI loose but Fed net-liquidity carried RISK-OFF, the reclaim is BTC-internal</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape is near-static on the load-bearing rates line — nothing here drives
                BTC&rsquo;s reclaim, but the rates filter is live-relevant again now the recovery read has
                revived
              </span>. Dashboard render is 2026-08-02 22:15Z, ~1.87h before the snapshot. US 10Y nominal{' '}
              <span className="dn-tag bear">4.68% (+1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.34</span>, episodic z{' '}
              <span className="dn-tag">+1.40</span> — EXTREME RISK-OFF, an eighth session at/above the
              4.55% reclaim gate. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.41% (0.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.65</span> — EXTREME RISK-OFF, flat. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.30% (0.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag">2.28% (+1.0bp)</span> — flat. HY OAS{' '}
              <span className="dn-tag">2.84% (−3.0bp)</span>, regime z{' '}
              <span className="dn-tag">−0.25</span> — neutral, tighter. MOVE bond vol{' '}
              <span className="dn-tag stale">unavailable (fetch failed a third render)</span>. DXY{' '}
              <span className="dn-tag bull">99.62 (−0.18)</span>, regime z +0.61, episodic z −2.84 —
              softer; USD/JPY{' '}
              <span className="dn-tag">157.40 (carried, yen firm)</span>; Fed net liquidity{' '}
              <span className="dn-tag bear">$5.825T (−0.092T, weekly, carried)</span>, regime z −1.09, episodic z −2.47 (RISK-OFF).
              US-JP 10Y spread <span className="dn-tag">2.01% (+1.0bp)</span>. NFCI{' '}
              <span className="dn-tag bull">−0.554</span>, RISK-ON (weekly, stale 9d). USD/CNY 6.7448
              loose.{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) stays FALSE at 4.68% (13bp from
                firing) — and it is LIVE-RELEVANT again this note, because the recovery read revived on
                the floor reclaim, so the scout&rsquo;s rates leg is back in play (and reads FALSE). It is
                one of the scout&rsquo;s blockers, alongside the SM short and the pinned funding. Credit
                is neutral-flat, inflation compensation flat, the dollar softer and NFCI loose, but Fed
                net-liquidity carried RISK-OFF (regime z −1.09 / episodic z −2.47), and MOVE is dark.
                Nothing in the macro tape drives BTC&rsquo;s reclaim — it is a BTC-internal move, and the
                correlation read below confirms BTC is not leading the macro complex either way.
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
                <tr><td>US 10Y nominal</td><td className="num">4.68%</td><td className="num bear">+1.0bp</td><td className="num bear">+2.34</td><td className="num">+1.40</td><td className="bear">EXTREME RISK-OFF · held</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.41%</td><td className="num">0.0bp</td><td className="num bear">+2.65</td><td className="num">+1.24</td><td className="bear">EXTREME RISK-OFF · flat</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.30%</td><td className="num">0.0bp</td><td className="num">+1.13</td><td className="num">+2.18</td><td className="neut">episodic · flat</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.28%</td><td className="num bear">+1.0bp</td><td className="num">−0.64</td><td className="num">+1.63</td><td className="neut">no tag · flat</td></tr>
                <tr><td>HY OAS</td><td className="num">2.84%</td><td className="num bull">−3.0bp</td><td className="num">−0.25</td><td className="num">+1.72</td><td className="neut">neutral · tighter</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.554</td><td className="num">−0.01</td><td className="num bull">−1.56</td><td className="num bull">−1.53</td><td className="bull">RISK-ON · weekly stale 9d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">unavailable · fetch failed (3rd render)</td></tr>
                <tr><td>DXY</td><td className="num">99.62</td><td className="num bull">−0.18</td><td className="num">+0.61</td><td className="num bull">−2.84</td><td className="bull">softer</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.825T</td><td className="num bear">−0.092T</td><td className="num">−1.09</td><td className="num bull">−2.47</td><td className="stale">weekly · carried, no fresh print</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.40</td><td className="num">carried</td><td className="num">+0.30</td><td className="num bull">−3.93</td><td className="bull">yen firm</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.01%</td><td className="num bear">+1.0bp</td><td className="num">−0.32</td><td className="num">+1.40</td><td className="neut">neutral</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7448</td><td className="num">−0.01</td><td className="num bull">−1.48</td><td className="num bull">−2.49</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">monthly</td><td className="num stale">+2.42</td><td className="num stale">+1.09</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.318</span> — NORMAL band, unchanged from 08-02, still moving
              together. BTC&rsquo;s top tie is{' '}
              <span className="dn-tag">NQ +0.571</span>, then SP500{' '}
              <span className="dn-tag">+0.558</span>, SILVER{' '}
              <span className="dn-tag">+0.471</span>, TSLA{' '}
              <span className="dn-tag">+0.465</span>, JP225{' '}
              <span className="dn-tag">+0.453</span>, PALL{' '}
              <span className="dn-tag">+0.431</span>, GOLD{' '}
              <span className="dn-tag">+0.429</span>, COPPER{' '}
              <span className="dn-tag">+0.418</span>, URNM{' '}
              <span className="dn-tag">+0.409</span>, PLAT{' '}
              <span className="dn-tag">+0.396</span>, NVDA{' '}
              <span className="dn-tag">+0.387</span>. 7d performance keeps BTC mid-pack in a split tape:{' '}
              <span className="dn-tag bear">BTC −2.37%</span> sits behind the index (NQ{' '}
              <span className="dn-tag bull">+0.09%</span>, SP500{' '}
              <span className="dn-tag bull">+0.82%</span>) and far behind the green software megacaps
              (MSFT <span className="dn-tag bull">+20.74%</span>, AMZN{' '}
              <span className="dn-tag bull">+16.48%</span>, GOOGL{' '}
              <span className="dn-tag bull">+11.30%</span>), roughly tied with JP225{' '}
              <span className="dn-tag bear">−1.36%</span>, but ahead of the red AI-megacap sleeve (NVDA{' '}
              <span className="dn-tag bear">−4.02%</span>, META{' '}
              <span className="dn-tag bear">−7.22%</span>, AAPL{' '}
              <span className="dn-tag bear">−7.63%</span>) and energy (CL{' '}
              <span className="dn-tag bear">−4.64%</span>, BRENT{' '}
              <span className="dn-tag bear">−4.25%</span>, NGAS{' '}
              <span className="dn-tag bear">−2.96%</span>). Metals mixed: GOLD{' '}
              <span className="dn-tag bear">−0.49%</span>, SILVER{' '}
              <span className="dn-tag bear">−2.06%</span>, PLAT{' '}
              <span className="dn-tag bull">+2.62%</span>, PALL{' '}
              <span className="dn-tag bull">+1.67%</span>, COPPER{' '}
              <span className="dn-tag bull">+2.81%</span>; URNM{' '}
              <span className="dn-tag bear">−1.62%</span>; TSLA −0.53%; EUR +1.24%, JPY (yen) firmer.{' '}
              <span className="dn-em">
                The correlation regime is NORMAL (0.318) and BTC is moving WITH a two-tone risk tape —
                mildly negative over the 7d, behind the index and the green software leaders, roughly tied
                with JP225, ahead of the red AI-megacap / energy sleeve. So BTC is neither the RS leader
                nor the worst — it is mid-pack in a split complex, and the reclaim is a BTC-internal event,
                not a macro-driven risk-on. Per the DN-001 lineage this is a NORMAL, mixed cross-asset
                read — no rotation call.
              </span>{' '}
              JGB monthly 2.67% carries a monthly tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · chase-short INVALIDATED — the weekly close settled ABOVE the floor ($63,550 &gt; $63,533), its floor-break leg is gone and its gamma reversed to a dampener (+48.86M); re-arms only on a fresh close below the RISEN $63,533 floor with gamma flipping negative · cover-bounce scout REVIVING but NOT armed — floor reclaimed on the close, regime flipped, 8h golden cross, dampening gamma, but SM short / funding pinned / 1h TD9 SELL / rates FALSE block it · book FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                The pivotal weekly close resolved the lineage&rsquo;s fork to the bull side — the floor
                held — so the chase-short is INVALIDATED and the cover-bounce scout REVIVES, but neither
                arms on today&rsquo;s tape and the desk stays FLAT
              </span>. The 08-02 note stood the chase-short down pending the Sunday close and kept the
              scout dead. The close settled ABOVE the floor ($63,550.00 &gt; the risen $63,533.52), which
              removes the chase-short&rsquo;s core leg entirely (there is no sealed break to chase) and
              revives the scout&rsquo;s recovery read (price reclaimed the floor on the close). But the
              scout does not arm here: SM is certifiably SHORT against the bounce, funding re-pinned to
              the cap, a fresh 1h TD9 SELL warns overbought, and the rates filter is FALSE. So the book
              stays FLAT: chase-short invalidated (stands down, re-arms only below the risen floor with
              gamma negative), scout reviving-but-blocked (arms only on a D-EMA50 cap close with a clean
              SM read), no fresh hedge — waiting on the cap close and an SM cover.
            </p>

            <div className="dn-trade">
              <span className="dn-side short">short · chase · INVALIDATED · the weekly close settled ABOVE the risen floor — the floor-break leg is gone and the gamma reversed to a dampener</span>
              <div className="dn-trade-name">
                Chase-short — INVALIDATED on the weekly close: the pivotal Sunday 08-02 bar settled $63,550.00, ABOVE the risen 200W $63,533.52 (a 5th consecutive weekly close above), so the floor-break leg the whole setup rested on is gone, and the dealer book re-gammaed to a +48.86M dampener — the short stands down
              </div>
              <div className="dn-thesis">
                The chase-short&rsquo;s edge was a sealed floor break with amplifying negative gamma below
                AND smart money rolled off short. Two of those reversed on the resolution. The floor-break
                leg is INVALIDATED — the weekly bar the whole lineage waited on settled $63,550.00, ABOVE
                the risen settled 200W $63,533.52 and above the old $63,311 floor, the fifth consecutive
                weekly close above the 200W; the daily closes below the floor (07-31, 08-01) were
                reclaimed by the 08-02 up-close. The gamma leg is INVALIDATED — the book re-gammaed HARD
                positive (headline +6.3M → +38.1M, rollup +20.25M → +48.86M) and spot reclaimed above the
                $63,015 flip, so dealers now DAMP moves; the negative shelf below spot lightened to
                −44.66M and sits below a positive-gamma cushion. Only the SM leg survives — and it is now
                cleanly net short −19,047 — but a short leaning against a reclaim is not a break to chase;
                it is a reason the reclaim is contested, not a trade trigger. The short is invalidated on
                its core thesis and stands down.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">leg status (2 invalidated, 1 survives but mis-timed)</span><span className="dn-lvl-v bull">floor close-break (INVALIDATED — the weekly settled $63,550 &gt; risen $63,533; the daily break reclaimed on the 08-02 up-close) · amplifying negative gamma (INVALIDATED — book re-gammaed to +48.86M dampener, spot +0.67% above the flip, front 0DTE +7.31M) · SM positioned short (SURVIVES / CLEAN −19,047 — but leaning against a reclaim, not confirming a break)</span></div>
                <div><span className="dn-lvl-k">what would re-arm the short</span><span className="dn-lvl-v bear">a fresh DAILY close back below the RISEN settled floor $63,533 (a failed reclaim) AND the dealer book flipping back negative-gamma (spot back below the $63,015 flip into a negative shelf) AND the pinned-long carry finally flushing — a new break of the reclaimed level, not the old one</span></div>
                <div><span className="dn-lvl-k">structural map if it re-arms</span><span className="dn-lvl-v bear">a failed reclaim back below $63,533 → back under the $63,015 flip into negative gamma → the $62k −9.06M wall → the $60k −22.74M crash-put; the re-pinned long carry (funding at the +10.95% cap, retail 65.87) is the cascade fuel</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no chase-short here — the break the setup rested on did not seal, it reclaimed; do not short a held floor into a positive-gamma dampener just because SM is short — wait for a failed reclaim below $63,533 with gamma flipping negative</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> the chase-short only pays when SM is verifiably short with you INTO a
                sealed break and the gamma amplifies. Today the break did not seal — the weekly close
                reclaimed the floor — and the gamma reversed to a dampener, so two of three legs are gone
                and the surviving SM short is mis-timed (leaning against a reclaim). The setup is
                invalidated on its own terms; it does not re-arm on the old $63,311 line but on a fresh
                failure of the risen $63,533 floor with negative gamma. Stand down.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · REVIVING but NOT armed · the floor reclaimed on the weekly close and the regime flipped, but SM is short / funding is pinned / a 1h TD9 SELL warns overbought / rates FALSE</span>
              <div className="dn-trade-name">
                Cover-bounce scout — REVIVING: the floor reclaimed on the weekly close, the regime flipped to trend-continuation, an 8h golden cross printed and the gamma turned to a dampener — but it does NOT arm with SM short, funding pinned to the cap, a fresh 1h TD9 SELL, and the rates filter FALSE
              </div>
              <div className="dn-thesis">
                The scout&rsquo;s recovery read — stopped out on the 07-31 floor break — revives on the
                reclaim: the 08-02 weekly close settled above the floor, the MTF regime flipped to 5/9
                trend-continuation, a fresh 8h water-down golden cross printed into a 30m/4h/3d/1w
                golden-cross cluster, D-SMA50 flipped to the first positive daily offset, and the dealer
                book re-gammaed to a dampener that caps downside as much as upside. That is the
                constructive backdrop the scout was built for. But its arming line is unchanged — a daily
                close above the D-EMA50 cap $64,657 on demand-led flow with a CLEAN SM read — and today
                every confirming tell is missing: SM is cleanly net SHORT −19,047 (leaning against the
                bounce, not confirming it), funding RE-PINNED to the +10.95% cap (the long carry re-heated
                rather than the demand being fresh), a NEW 1h ⚡TD9 SELL warns the bounce is overbought,
                and the reclaim-long rates filter is FALSE at 4.68%. So the scout is alive again but
                blocked — it waits on the cap close and an SM cover.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bull">REVIVING · recovery read back in play (floor reclaimed on the weekly close, regime flipped to trend-continuation, 8h golden cross, dampening gamma) — but NOT armed and not entered</span></div>
                <div><span className="dn-lvl-k">arming line + confirms needed</span><span className="dn-lvl-v bull">a daily close above the D-EMA50 cap $64,657 on demand-led OI expansion with a CLEAN SM read that is COVERING (not adding short) — the reclaim of the flip/floor band is done, the cap close and the SM cover are what is left</span></div>
                <div><span className="dn-lvl-k">blockers (why it stands down today)</span><span className="dn-lvl-v bear">SM cleanly net SHORT −19,047 (selling the reclaim) · funding pinned at the +10.95% cap (carry re-heated, not fresh demand) · a NEW 1h ⚡TD9 SELL (overbought) · rates filter FALSE 10Y 4.68% · spot still below the D-EMA50 cap by −1.89%</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no scout long here — do not buy a reclaim that SM is selling into, with funding pinned and a fresh 1h TD9 SELL; the scout waits for the cap close on demand-led flow with SM covering, not an overbought bounce below the cap</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R (framework, not live):</b> a live entry on a D-EMA50 cap close ~$64,657 against a
                stop back below the reclaimed floor band ~$63,300 (~$1,357 risk) toward the next daily
                resistance cluster D-EMA100/D-SMA100 $67,165–$68,635 (~$2,508–$3,978 reward) ≈ 1.85:1 to the lower bound / 2.93:1 to the upper — an
                acceptable recovery setup IF the confirms align. They do not today. <b>Discipline:</b> the
                scout&rsquo;s edge is a confirmed reclaim through the cap on fresh demand with SM turning
                buyer — not a probe below the cap that SM is selling. The reclaim of the floor is real and
                revives the read, but the cap close and the SM cover are the tells that arm it; a bounce
                with SM short, pinned funding and a 1h TD9 SELL is the setup, not the trigger.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · contested reclaim above the held floor — the weekly close held, but SM is selling the bounce and the long carry re-pinned to the cap: a bid marking a base against a derivatives offer, not a clean recovery</span>
              <div className="dn-trade-name">
                Contested reclaim above the held floor — the resolution is a spot-led bid reclaiming the $63,311/$63,533 band on the weekly close, met by a certified SM short and a re-pinned long carry, waiting on the D-EMA50 cap close to confirm or a failed reclaim to break
              </div>
              <div className="dn-thesis">
                The pivotal weekly close resolved the lineage&rsquo;s fork to the bull side — the floor
                held ($63,550 &gt; $63,533, a 5th consecutive weekly close above) and price reclaimed the
                flip/floor band — but the reclaim is contested on every derivatives book. Price is +0.85%
                on the 24h, OI expanded +0.54%, the 24h flow split spot-bid (+8,178 CVD) /
                futures-offered (−1,878), the regime flipped to trend-continuation, an 8h golden cross
                printed, and the dealer book re-gammaed to a +48.86M dampener — the constructive side. But
                SM rolled CLEANLY deeper short −19,047 into the bounce, funding RE-PINNED to the +10.95%
                cap (0 negatives a fifth day), retail held 65.87, and a fresh 1h TD9 SELL warns overbought
                — the contested side. So the read is a spot bid marking a base against a futures/SM offer,
                not a clean recovery. If the reclaim extends to a D-EMA50 cap close with SM covering and
                the carry holding, the scout arms into the $67k–$68.6k resistance cluster. If the bid
                fails and price closes back below the risen $63,533 floor with SM still short and the carry
                flushing, the chase-short re-arms below a positive-gamma flip into the $62k/$60k shelf. The
                tie-breaker sits at the cap above and the reclaimed floor below.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">bull resolution (reclaim confirms)</span><span className="dn-lvl-v bull">a daily close above the D-EMA50 cap $64,657 on demand-led OI expansion with SM COVERING and the carry holding → the scout arms into the D-EMA100/D-SMA100 $67,165–$68,635 resistance cluster</span></div>
                <div><span className="dn-lvl-k">bear resolution (reclaim fails)</span><span className="dn-lvl-v bear">a daily close back below the risen settled floor $63,533 and the $63,015 flip with SM still short and the pinned carry flushing → back into negative gamma, the chase-short re-arms into the $62k −9.06M / $60k −22.74M shelf</span></div>
                <div><span className="dn-lvl-k">deciding tells</span><span className="dn-lvl-v">the D-EMA50 cap close vs $64,657, whether SM COVERS or keeps adding short, and whether the pinned-long carry holds (base) or flushes (break) — not the intraday tick</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the edge is refusing to over-read either side of a contested
                reclaim — the floor held on the weekly close (a real bull resolution) but SM is selling
                the bounce and the carry re-pinned to the cap (a real contest), so this is a reclaim to
                confirm, not a base to buy or a break to short. The lineage does not scout-long a bounce
                that SM is selling below the cap, and it does not chase-short a floor that just held on the
                weekly close into a positive-gamma dampener. It stays flat and reads three tells: the cap
                close, the SM cover-vs-add, and the funding flush-vs-hold. Whichever resolves first writes
                the next note.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the pivotal weekly close HELD the floor ($63,550 &gt; $63,533, a 5th consecutive close above) · the chase-short is INVALIDATED (break did not seal, gamma reversed to dampener) · the cover-bounce scout REVIVES (floor reclaimed, regime flipped, 8h golden cross) but is BLOCKED (SM short, funding pinned, 1h TD9 SELL, rates FALSE) · book FLAT</span>
            </h2>

            <p>
              Of the 08-02 decision conditions: the{' '}
              <em>weekly 200W close</em>, the last domino the whole lineage pointed at, SETTLED — and it
              HELD the floor at $63,550.00 above the risen $63,533.52, a fifth consecutive weekly close
              above the 200W, so the bear resolution did NOT fire; the{' '}
              <em>scout&rsquo;s settled-floor stop</em> is now RECLAIMED (the 08-02 up-close $63,550.00
              closed back above $63,311, reviving the recovery read); the{' '}
              <em>chase-short floor close-break leg</em> is INVALIDATED (the daily break reclaimed and the
              weekly settled above); the <em>chase-short negative-gamma leg</em> is INVALIDATED (the book
              re-gammaed to a +48.86M dampener, spot +0.67% above the flip); the{' '}
              <em>chase-short SM-positioning leg</em> is now CLEAN net short −19,047 — but leaning against
              a reclaim, so it is a mis-timed survivor, not a trigger; and the{' '}
              <em>reclaim-long rates filter</em> stayed FALSE (10Y 4.68%) but is LIVE-RELEVANT again now
              the recovery read revived.{' '}
              <em>The floor held on the weekly close, so the chase-short is invalidated on two legs and
              the scout revives — but the scout is blocked by a certified SM short, a funding carry
              re-pinned to the cap, a fresh 1h TD9 SELL, and a FALSE rates filter, so the book stays
              flat.</em>{' '}
              The conditions today re-set around a held floor reclaimed on the weekly close, a contested
              bid (SM selling, carry re-pinned), a re-gammaed dealer dampener, a de-crowded-but-still-long
              retail, and a scout reviving toward its cap-close arming line:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Weekly 200W close (the last domino)</td><td className="bull">SETTLED / HELD — the week ending 08-02 closed $63,550.00, ABOVE the risen W-SMA200 $63,533.52 by $16.48 (+0.026%); a 5th consecutive weekly close above the 200W (07-05, 07-12, 07-19, 07-26, 08-02)</td><td>the pivotal read resolved BULL — the floor held on the close; the bear &ldquo;seal below&rdquo; resolution is invalidated</td></tr>
                <tr><td>Chase-short floor close-break (leg)</td><td className="bull">INVALIDATED — the daily break (07-31 / 08-01 below) reclaimed on the 08-02 up-close $63,550.00, and the weekly settled above $63,533</td><td>the core leg is gone; the short re-arms only on a FRESH close below the risen $63,533 floor</td></tr>
                <tr><td>Chase-short amplifying negative gamma (leg)</td><td className="bull">INVALIDATED — book re-gammaed to +38.1M headline / +48.86M rollup, spot +0.67% above the $63,015 flip, front 0DTE +7.31M; the negative shelf below lightened to −44.66M</td><td>the amplifier reversed to a dampener; the short needs gamma flipping negative again to re-arm</td></tr>
                <tr><td>Chase-short SM positioning (leg)</td><td className="bear">CLEAN net short −19,047 (no suspect minute) — but leaning AGAINST the reclaim, not confirming a break</td><td>the surviving leg is mis-timed; a certified SM short into a held floor is a contest tell, not a chase-short trigger</td></tr>
                <tr><td>Cover-bounce scout re-arm</td><td className="bull">REVIVING — floor reclaimed on the close, regime flipped to 5/9 trend-continuation, 8h golden cross printed, gamma a dampener; arms on a D-EMA50 cap close $64,657 on demand-led flow with SM COVERING</td><td>scout alive again but not armed — waits on the cap close and an SM cover</td></tr>
                <tr><td>Scout blockers (today)</td><td className="bear">SM short −19,047 · funding pinned +10.95% cap (0 neg 5th day) · NEW 1h ⚡TD9 SELL (overbought) · rates filter FALSE 10Y 4.68% · spot −1.89% below the cap</td><td>four blockers stand the scout down despite the revived read; the book stays flat long</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">FALSE — 10Y 4.68% &gt; 4.55% (13bp away); LIVE-RELEVANT again now the recovery read revived</td><td>one of the scout&rsquo;s confirms, currently false; back in play as a gate</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the reclaim extends to a D-EMA50 cap close ($64,657) with smart money COVERING and
                the pinned-long carry holding — which arms the scout into the $67k–$68.6k resistance
                cluster — or whether the spot bid fails and price closes back below the risen $63,533 floor
                with SM still short and the carry flushing, which re-arms the chase-short below a
                positive-gamma flip into the $62k/$60k shelf; everything in between is the
                contested-reclaim-above-the-floor the desk now reads
              </span>. The pivotal Sunday close the whole lineage pointed at HELD the floor — the bull
              resolution fired — but the reclaim is contested: SM cleanly rolled deeper short into the
              bounce, funding re-pinned to the cap (0 negatives a fifth day), and a fresh 1h TD9 SELL warns
              overbought, even as the regime flipped to trend-continuation, an 8h golden cross printed, and
              the dealer book re-gammaed to a +48.86M dampener. The chase-short is invalidated on its core
              legs and stands down; the scout revives on the reclaim but is blocked four ways and stays
              unarmed; the put-spread is not re-grown into a positive-gamma dampener. BTC stayed mid-pack
              in a NORMAL, split cross-asset tape — a BTC-internal reclaim, not a macro event. The right
              read for the next 24–48h is{' '}
              <em>patient — watch the D-EMA50 cap close, whether SM covers or keeps adding short, and
              whether the pinned-long carry holds or flushes; do not buy a reclaim SM is selling below the
              cap, and do not short a floor that just held on the weekly close</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit (2026-08-03)
            </span>
            <b>Status:</b> v2 EN note — <b>post codex hostile audit</b> (verdict PASS-WITH-NOTES: 0
            CRITICAL / 3 MAJOR / 6 MINOR; ref <em>audits/2026-08-03-desk-note.md</em>). Authored in STAGE
            A from the atomic snapshot (2026-08-03 00:07Z, live tape t == &ldquo;08-03 08:07&rdquo; BJ)
            and the rolling sources archived at /opt/desk-note/snapshots/2026-08-03-0007/
            (mtf_div_latest.html, btc_gex.html, macro_dashboard.html, cross_asset_correlation_summary.md),
            plus the live_db.json tail, the full btcusdt_1m_*.parquet glob (362 weekly bars) for the MA /
            RV / 200W recompute, and the gex_summary.json rollup. Every codex finding was applied in place
            and closed with a grep-closure loop over the full EN file (pattern searched · hits before ·
            hits after):{' '}
            <b>DN-001 (MAJOR)</b> — 4h/1h taker-net used the same-clock endpoint while the other deltas
            used the prior-row baseline; patterns <em>&ldquo;−420.1&rdquo; / &ldquo;−116.1&rdquo;</em>,
            before 2, after 0 — both taker-nets moved to the prior-row convention (−430.8 / −134.8, now
            equal to fut_cvd Δ) — <b>RESOLVED</b>.{' '}
            <b>DN-002 (MINOR)</b> — cb_cvd start understated and step-count wrong; patterns
            <em>&ldquo;17,635.8&rdquo; / &ldquo;two small &lt;|120| steps&rdquo;</em>, before 2 + 2, after
            0 + 0 — start corrected to 17,569.2 (25,747.3 − 17,569.2 = +8,178.1) and reworded to six
            &gt;120 BTC one-minute steps, max +239.3, no reset-scale step — <b>RESOLVED</b>.{' '}
            <b>DN-003 (MINOR)</b> — &ldquo;473 prints&rdquo; is the active-minute count, not the raw print
            count; pattern <em>&ldquo;473 prints&rdquo;</em>, before 3, after 0 — restated as 745 prints
            across 473 active minutes — <b>RESOLVED</b>.{' '}
            <b>DN-004 (MINOR)</b> — aggressor-skew stats labeled 24h but computed on the 1h window;
            pattern <em>&ldquo;24h mean −4.72&rdquo;</em>, before 1, after 0 — relabeled 1h mean —{' '}
            <b>RESOLVED</b>.{' '}
            <b>DN-005 (MAJOR)</b> — the mutable ma200w_trap_watch_state.json was cited as an anchored
            source but was not archived at 00:07 and its recomputed_at advanced to 00:11:39Z after the
            anchor; patterns <em>&ldquo;last recompute 2026-07-27&rdquo; / &ldquo;state file is
            STALE&rdquo; / &ldquo;consecutive_above 4&rdquo;</em>, before 5 sites (manifest v-cell +
            flag, prose, audit-trace, footer), after 0 — reframed everywhere to an independent full-glob
            parquet recompute (362 weekly bars) with the sidecar explicitly NOT cited as an anchored
            source and noted to have advanced past the anchor (now carrying the settled 08-02 week /
            consecutive_above 5, which corroborates the recompute) — <b>RESOLVED</b>.{' '}
            <b>DN-006 (MAJOR)</b> — Fed net-liquidity z-scores mislabeled and the macro heading overstated
            liquidity as loose; patterns <em>&ldquo;episodic z −1.09&rdquo; / &ldquo;loose-to-neutral&rdquo;</em>,
            before 1 + 1, after 0 + 0 — prose fixed to regime z −1.09 / episodic z −2.47 (RISK-OFF), the
            &ldquo;Net:&rdquo; prose and heading reframed to credit neutral/tighter + DXY softer + NFCI
            loose but Fed net-liquidity carried RISK-OFF — <b>RESOLVED</b>.{' '}
            <b>DN-007 (MINOR)</b> — MTF table not faithful to the archived scan; patterns <em>4h close
            &ldquo;63,526&rdquo; / 15m &ldquo;TOP-div&rdquo; / 4h &ldquo;BOT-div&rdquo; / prose
            &ldquo;bottom-div cluster on 1h/4h/8h/1w&rdquo;</em>, before, after 0 — 4h close set to 63,530,
            15m and 4h div cells rendered TOP+BOT-div (matching the footnote counts top-div 3 / bottom-div
            5), and the prose bottom-div cluster corrected to 15m/1h/4h/8h/1w — <b>RESOLVED</b>.{' '}
            <b>DN-008 (MINOR)</b> — $70k +14.91M mislabeled the heaviest wall (absolute) when $60k −22.74M
            is larger; pattern <em>&ldquo;the heaviest wall, positive&rdquo;</em>, before 1, after 0 —
            restated as the heaviest positive wall — <b>RESOLVED</b>.{' '}
            <b>DN-009 (MINOR)</b> — framework R/R reward not reconstructible from the stated cluster;
            patterns <em>&ldquo;~$2,900 reward&rdquo; / &ldquo;≈ 2.1:1&rdquo;</em>, before 1 + 1, after 0
            + 0 — replaced with the reward range $2,508–$3,978 ≈ 1.85:1 (to $67,165) / 2.93:1 (to $68,635)
            — <b>RESOLVED</b>. Deepseek supplementary numerics were adjudicated, not auto-applied: the OI
            +590.4 BTC and SM −19,047.9 net items are display-rounding artifacts of 1-decimal endpoints
            (codex confirmed the exact values +590.378 → +590.4 and −19,047.925 → −19,047.9 clean), so no
            change; the cb_cvd, R/R and MTF-div items overlap DN-002/DN-009/DN-007 and were resolved via
            codex&rsquo;s adjudicated fix (start 17,569.2, not the deepseek-suggested +8,111.5). All 9
            findings RESOLVED (grep hits-after = 0). Reproducibility notes: the SM net series is CLEAN this
            run (no suspect single-minute step &gt; |3,000| BTC in the 24h window, unlike the 08-02 −22,911
            artifact); the pivotal Sunday weekly close was settled by an independent full-glob recompute
            ($63,550.00 vs W-SMA200 $63,533.52). Full <em>next build</em> is unverified on this host (Node
            18.19.1 &lt; the Next.js 20.9.0 gate); <em>tsc --noEmit</em> is the build proxy and exits 0.{' '}
            <b>post codex hostile audit.</b>
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among
            principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a
            single atomic snapshot (2026-08-03 00:07Z) with section-level provenance
            disclosed in the manifest band above; the macro Tier-1 panel render is
            2026-08-02 22:15Z (~1.87h before snapshot) with MOVE unavailable a third
            straight render and the Fed net-liquidity row carried weekly, and some inputs
            are explicitly stale, unavailable or pending and flagged as such. Levels, sizes, and
            conditions are illustrative of the desk&rsquo;s process, not standing
            recommendations. Past correlation, gamma, and positioning patterns do not bind
            future tape. Derivatives carry the risk of total loss and, where leveraged, loss
            exceeding deposited margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The pivotal weekly close held the floor — the bull resolution fired — but SM cleanly
                rolled deeper short into the reclaim and the long carry re-pinned to the cap. The
                chase-short is invalidated; the scout revives but is blocked. Watch the cap close and an
                SM cover. Flat and patient.
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
            v2 · 2026-08-03 00:07Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet full-glob
            200W recompute (ma200w_trap_watch_state.json NOT archived / advanced past
            the anchor — not cited) · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
