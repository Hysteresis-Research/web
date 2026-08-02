import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-02 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-02',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-02' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260802() {
  await requireViewer('/desk/2026-08-02');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-02 · v2</span>
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
              <span className="dn-big">$62,900</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.06%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-02 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-02 00:07Z (snapshot pin, t == &ldquo;08-02 08:07&rdquo; BJ)</td>
                  <td className="dn-flag">
                    fresh · 1-min · anchor pinned to the file tail at 00:07Z (BJ 08:07) for
                    reproducibility · 24h-window convention: headline deltas use the same-clock
                    prior-day baseline t == &ldquo;08-01 08:07&rdquo; BJ (endpoint minus the 24h-ago
                    row, 1,440 one-minute intervals back / 1,441 rows inclusive). The 4h / 1h flow
                    blocks use prior-row inclusive baselines
                    (08-02 04:07 / 07:07 BJ through the 08:07 pin); the series is contiguous across the
                    sub-windows this run, so those reproduce the same-clock endpoints — no baseline
                    discrepancy. NO CVD reset signature in the 24h window — endpoint CVD deltas
                    reconcile to their interval sums (fut_cvd 2,213.7 → 1,065.5, a 24h Δ −1,148.2 that
                    matches the summed taker-net −1,148.2; cb_cvd 5,239.4 → 17,569.2), so CVD deltas
                    are raw endpoint differences — Method A not required · funding / flow
                    row-statistics span the 1,441-row window; premium means exclude null rows ·{' '}
                    <b>DATA-QUALITY FLAG:</b> the SM net series took a single-minute step of −22,911 BTC
                    at 08-01 14:36 BJ / 06:36Z (+17,907 short added, −5,004 long cut in 60s) that
                    flips SM from net long to net short — the same recurring ~BJ-14:00 feed-resync
                    signature that produced the 07-31 14:46 +6,369 minute flagged in the prior note, so
                    the SM 24h delta and the &ldquo;roll-off&rdquo; read are DATA-IMPAIRED this run
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-02 08:01 BJ scan (00:01Z)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · archived verbatim at
                    /opt/desk-note/snapshots/2026-08-02-0007/ · ~6-min stale vs snapshot anchor ·
                    in-progress bars · scan spot $62,813
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-02 00:00Z snapshot</td>
                  <td className="dn-flag">
                    ~7-min stale · Deribit idx $63,182 vs live $62,900 · median IV 40.4% · 868
                    instruments (was 870 on 08-01) · headline Total GEX +6.3M vs by-expiry rollup
                    +20.25M (= gex_summary.json net_gex $20,245,577.06) — a ~14M non-reconciling
                    source-panel gap disclosed per DN-003 lineage, the rollup again sitting ABOVE the
                    headline (same relationship as 08-01 / 07-31 / 07-30); both panels now net-LONG-gamma
                    (headline flipped +6.3M from 08-01&rsquo;s −5.8M, rollup +20.25M from +10.25M) — the
                    book re-gammaed slightly positive and the 0DTE front healed positive (2AUG +5.20M vs
                    08-01&rsquo;s 1AUG −5.20M), but a heavy negative shelf below spot persists ($62k
                    −11.27M, $60k −24.91M)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-02 00:00Z
                  </td>
                  <td className="dn-flag">~7-min lag · 7d 1h bars · 22 assets · 167 rows · archived</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-01 22:17Z render</td>
                  <td className="dn-flag">
                    ~1.85h render lag · 10Y held 4.68% (+1bp on the last FRED move, a seventh session
                    at/above the deferred 4.55% gate — reclaim-long rates filter still FALSE and 13bp
                    away), TIPS flat 2.41%, 5Y5Y flat 2.30%, 10Y breakeven 2.28%, HY OAS 2.84% (−3.0bp, tighter) ·
                    MOVE fetch-failed a SECOND straight render (unavailable) · Tier-2 FX got a FRESH
                    print this render — DXY −0.21 to 99.80, USD/JPY −2.78 to 157.40 (yen firmer);
                    Fed net liq $5.825T carried (weekly, no fresh print)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-08-02 00:06Z (in-progress close $62,879.80)</td>
                  <td className="dn-flag">
                    ~1-min anchor lag · offsets recomputed vs live spot $62,900.00 · full
                    btcusdt_1m_*.parquet glob (361 weekly bars, 2019–2026) — every Daily AND Weekly MA
                    offset is NEGATIVE (spot below the entire matrix, same as 08-01) · last completed
                    daily close 08-01 $62,792.30 (a second completed daily close BELOW the $63,311
                    settled floor)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W support watch</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · last recompute 2026-07-27 00:11Z (NOT re-run today) + full-glob recompute this run</td>
                  <td className="dn-flag">
                    the trap-watch state file still carries the last completed week 2026-07-26 close
                    $65,375.10, W-SMA200 $63,311.02, consecutive_above 4 (streak from 2026-07-05). An
                    independent full-glob recompute today (361 weekly bars) reproduces the same
                    completed-week W-SMA200 $63,311.02 and puts the IN-PROGRESS week (ending Sunday
                    2026-08-02) W-SMA200 at $63,530.17 with the in-progress weekly close $62,879.80
                    sitting BELOW both. Today IS the pivotal Sunday, but the snapshot lands at its
                    START (00:07Z) — the weekly bar does not settle for ~24h (end of Sunday 08-02 /
                    08-03 00:00Z). So the DAILY floor break is well-confirmed (07-31 $62,859.90 and
                    08-01 $62,792.30 both closed below $63,311, plus the 08-02 in-progress $62,879.80,
                    spot −0.65% below) while the WEEKLY break is IN ITS FINAL DAY but STILL UNSETTLED —
                    a close here at Sunday-end ends the 4-week above-floor streak
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
              <span className="dn-v">+5.08%</span>
              <span className="dn-src">live · raw 0.004641 field × 1095 · OFF the cap entirely — 24h max only +6.44% ann (no Binance +10.95% cap pin this window, vs 466/1442 cap rows on 08-01) · 24h mean +4.16% ann (cooled from 08-01&rsquo;s +7.77%) · min +2.03% ann (0.001856 field @ 08-01 20:00 BJ / 12:00Z) · 0 / 1441 NEGATIVE rows — a FOURTH straight day at zero: the crowded-long carry keeps cooling but has NOT flushed through the floor break</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">off the cap · +4.16% mean · 0 negatives</span>
              <span className="dn-src">range +2.03% / +6.44% ann · mean +7.77% → +4.16% ann · no cap occupancy this window (max +6.44% is below the +10.95% cap) · funding kept cooling but stayed positive with zero negatives — the long leverage is still there, underwater, un-flushed</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−0.82% (−901.7 BTC)</span>
              <span className="dn-src">live · 109,505.0 → 108,603.4 · a small CONTRACTION (vs 08-01&rsquo;s +2.67% expansion) into a FLAT −0.06% 24h price · the 24h flow split spot-bid / futures-offered (spotCVD +12,329.8 vs futCVD −1,148.2 / taker −1,148.2 / big −144.2) — heavy spot accumulation absorbed by futures distribution, price pinned flat below the floor</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">68.76 / 31.24</span>
              <span className="dn-src">live_db `mkt_long_pct` · 24h high 69.18 (08-01 13:18 BJ / 05:18Z) low 66.85 (08-02 02:06 BJ / 08-01 18:06Z) — STILL crowded long, effectively unchanged from 08-01&rsquo;s 68.76: the retail long crowd did not de-crowd through a second day below the floor</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−15,511 (net SHORT — but on a suspect minute)</span>
              <span className="dn-src">live · long 9,927.13 − short 25,438.28 = −15,511.15 · the tape shows SM flipped to net short, BUT the ENTIRE flip is one −22,911 single-minute step @ 08-01 14:36 BJ / 06:36Z (short +17,907, long −5,004 in 60s — a recurring ~BJ-14:00 feed re-sync, same shape as the 07-31 14:46 minute the prior note flagged), so this is DATA-IMPAIRED · peak +8,487 @ 08-01 14:11 BJ (pre-flip), trough −15,729 @ 08-02 05:41 BJ, level held ~−15,000 for ~17h post-step</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 24h-ago</span>
              <span className="dn-v bear">+8,299 → −15,511 (−23,811, a 2.9× swing)</span>
              <span className="dn-src">|Δnet|/prior_net = 23,810.5 / 8,299.4 = 287% · Δlong −5,413.7 (longs cut) AND Δshort +18,396.8 (shorts stacked) — the roll-off-to-short the chase-short needed, BUT ~97% of the Δshort printed in the single suspect 14:36 minute (17,906.9 of the +18,396.8 Δshort = 97.3% — almost all of it), so the desk does NOT certify a clean SM roll-off · what IS reliable: SM has held net short ~−15,000 for the 17h since the step</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.4% / 29.13%</span>
              <span className="dn-src">GEX median IV · chain-median across 868 instruments (was 870 on 08-01), not a tradable spread · 30D close-to-close RV = logret.std × √365 × 100 on 30 daily returns (parquet last bar 00:06Z) · ~+11.3pt chain richness · 29-return alt 29.48%</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v">−0.02% (AT flip)</span>
              <span className="dn-src">flip $62,912 (dropped $215 from 08-01&rsquo;s $63,127) · vs live spot $62,900.00 (−0.02%; 62,900.00/62,912.07 − 1 = −0.019%) / GEX file Deribit idx $63,182 (+0.43%; 63,182/62,912.07 − 1 = +0.429%, file prints +0.4%) — the two references STRADDLE the flip, spot sits essentially ON it · headline +6.3M / rollup +20.25M — RE-GAMMAED slightly positive from 08-01&rsquo;s −5.8M / +10.25M, but a negative-gamma shelf still sits below spot ($62k −11.27M into $60k −24.91M)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                Into the final day of the pivotal weekly close, price sits flat below the broken floor
                — and the one tell that would arm the chase-short printed on the tape, but on a suspect
                single minute the desk cannot certify
              </span>. The whole 08-01 lineage pointed at &ldquo;the Sunday 08-02 weekly close.&rdquo;
              Today IS that Sunday — but the snapshot lands at its very start (00:07Z), so the weekly
              bar does not settle for ~24h (end of Sunday 08-02 / 08-03 00:00Z). The in-progress weekly
              close <span className="dn-tag bear">$62,879.80</span> sits{' '}
              <span className="dn-tag bear">$431 below the $63,311 settled 200W floor</span> with the
              day still to run; a close here at Sunday-end ends the four-week above-floor streak. Spot
              prints <span className="dn-tag">$62,900</span> live,{' '}
              <span className="dn-tag bear">−0.06%</span> on 24h —{' '}
              <span className="dn-em">essentially flat, a second full session parked below the floor</span>{' '}
              — with a third in-progress daily close below $63,311 behind two completed ones (07-31
              $62,859.90, 08-01 $62,792.30), and{' '}
              <span className="dn-em">every Daily AND Weekly MA offset still negative</span>. Two things
              moved since 08-01, and both cut against a clean bear resolution. First, the buyer of
              record:{' '}
              <span className="dn-signal">
                the SM tape flipped from the 08-01 knife-catch long +8,299 to net short −15,511 — the
                exact roll-off the chase-short was waiting on — but the ENTIRE flip is one −22,911
                single-minute step at 08-01 14:36 BJ
              </span>{' '}
              (+17,907 short added, −5,004 long cut in 60 seconds), the same recurring ~BJ-14:00 feed
              re-sync that produced the +6,369 minute the prior note flagged. So the SM 24h delta is
              DATA-IMPAIRED — the level has held ~−15,000 for 17h, but the desk does not certify a clean
              SM roll-off off a suspect minute. Second, the dealer book:{' '}
              <span className="dn-tag bull">re-gammaed slightly positive</span> — headline{' '}
              <span className="dn-tag">−5.8M → +6.3M</span>, rollup{' '}
              <span className="dn-tag">+10.25M → +20.25M</span> — and the{' '}
              <span className="dn-tag bull">0DTE front healed positive</span> (2AUG +5.20M, was 1AUG
              −5.20M), so the near-dated negative that armed the gamma leg yesterday is GONE, even
              though the crash-put shelf below spot ($62k −11.27M into $60k −24.91M) is intact and a
              touch heavier. Add: OI CONTRACTED{' '}
              <span className="dn-tag">−902 BTC (−0.82%)</span>, funding kept cooling but stayed positive
              with <span className="dn-tag">0 negatives</span> (a fourth straight day — the long carry
              is underwater and un-flushed), retail is still crowded{' '}
              <span className="dn-tag bear">68.76</span>, and the MTF is unchanged at{' '}
              <span className="dn-tag bear">1 long / 9 short</span> in the &ldquo;sell the bounce&rdquo;
              regime with the same oversold-reversal cluster at the lows. The book stays FLAT: the
              chase-short&rsquo;s SM tell is data-impaired, its front-gamma amplifier just healed
              positive, and the weekly close will not settle for a day; the scout stays dead. This note
              turns on whether the Sunday weekly close seals below $63,311 with a CLEAN (non-artifact)
              SM roll-off and a funding flush — or whether SM&rsquo;s (suspect) short and the intact
              spot bid mark a base and price reclaims the $62,912–$63,530 flip/floor band.
            </p>

            <p>
              BTC prints <span className="dn-tag">$62,900</span> live,{' '}
              <span className="dn-tag bear">−0.06%</span> on 24h (essentially flat), inside a{' '}
              <span className="dn-tag">$63,150.00 / $62,324.57</span> range (high @ 08-01 16:59 BJ /
              08:59Z, low @ 08-02 02:46 BJ / 08-01 18:46Z), with a{' '}
              <span className="dn-tag bull">+0.54%</span> lift over the 04:07 → 08:07 sub-window (after
              a +0.92% rebound from the 02:46 $62,325 low) into the snap.{' '}
              <span className="dn-signal">The floor break held on a second completed daily close and is
              in the final day of the weekly test</span>: 07-26 $65,375.10 → 07-27 $63,720.80 → 07-28
              $63,903.60 → 07-29 $63,958.90 → 07-30 $64,750.00 →{' '}
              <span className="dn-tag bear">07-31 $62,859.90</span> →{' '}
              <span className="dn-tag bear">08-01 $62,792.30</span>, with the in-progress 08-02 bar
              (parquet last bar 00:06Z) at <span className="dn-tag bear">$62,879.80</span> — two
              completed daily closes below the $63,311 settled floor plus a third in progress.{' '}
              <span className="dn-em">
                The MA matrix stays fully inverted: spot $62,900 sits BELOW all ten daily offsets and
                all ten weekly offsets. The nearest overhead are the broken-support lines now turned
                resistance, a tight $62.9k–$63.5k cap band:{' '}
                <span className="dn-tag bear">0-γ flip $62,912 (−0.02%, spot AT it)</span>,{' '}
                <span className="dn-tag bear">settled 200W floor $63,311 (−0.65%)</span>,{' '}
                <span className="dn-tag bear">D-SMA50 $63,364 (−0.73%)</span>, and the in-progress-week{' '}
                <span className="dn-tag bear">W-SMA200 $63,530 (−0.99%)</span> — then the
                reclaimed-then-lost near pair D-EMA20 $63,927 (−1.61%) / D-SMA20 $64,427 (−2.24% →
                −2.37%) and the D-EMA50 cap $64,679 (−2.75%; ticked DOWN $78 from 08-01&rsquo;s $64,757
                as the down-closes pulled the EMA lower).
              </span>{' '}
              The 200W cycle floor is available and confirmed this run: the trap-watch state (last
              recompute 2026-07-27, not re-run today) carries the completed week 2026-07-26 at W-SMA200
              $63,311.02 with four consecutive weekly closes above it; a full-glob recompute today (361
              weekly bars) reproduces $63,311.02 for the completed week and puts the in-progress week
              (ending Sunday 2026-08-02) W-SMA200 at $63,530.17 with the in-progress weekly close
              $62,879.80 BELOW both. So $63,311 broke on the DAILY close (two completed, one in
              progress) and the WEEKLY break is now IN ITS FINAL DAY — unsettled until Sunday-end. The
              scout was ARMED on 07-22, DEFERRED on 07-24, STOPPED on 07-31 when this floor broke — the
              recovery read is over, and today is the day the weekly close either seals it or fails it.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · the SM tape flipped to net SHORT −15,511 but the flip is ONE suspect −22,911 minute (DATA-IMPAIRED, the same ~BJ-14:00 feed re-sync flagged 07-31) — the desk down-weights the SM roll-off · OI CONTRACTED −0.82% into a flat price · funding cooled off the cap, 0 negatives a 4th day (long carry un-flushed) · retail still 68.76 · the 24h flow split spot-bid / futures-offered</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single loudest tape event of the day is a data artifact, not a trade — and reading
                it straight is the whole discipline of this section
              </span>. The SM net series shows a −22,911 BTC single-minute step at{' '}
              <span className="dn-tag bear">08-01 14:36 BJ / 06:36Z</span> (net +8,428 → −14,483:
              short_btc +17,907 and long_btc −5,004 in 60 seconds) that flips SM from net long to net
              short. A 17,907-BTC short stack in one minute is not a fill — it is the same recurring
              ~BJ-14:00 feed re-sync / batch reconciliation that produced the +6,369 minute at 07-31
              14:46 the prior note flagged, now printing a second consecutive day at almost the same
              clock.{' '}
              <span className="dn-em">
                So the SM 24h delta (+8,299 → −15,511, a −23,811 swing, |Δ|/prior_net = 287%) is
                DATA-IMPAIRED: the desk does NOT read it as a clean smart-money roll-off to short. What
                IS reliable is the level AFTER the step — SM has held net short ~−15,000 for the ~17h
                since (trough −15,729 @ 08-02 05:41 BJ, snap −15,511), stable, not building. Treat the
                current net-short state as the tape&rsquo;s reading with an asterisk, and treat the
                24h transition as unusable — a positioning tell that hinges on a suspect minute is not
                a tell you short into.
              </span>
            </p>

            <p>
              The rest of the position book is legible, and it reads consolidation below the floor, not
              capitulation.{' '}
              <span className="dn-signal">
                OI contracted and price went flat — a small two-sided deleveraging, the opposite of
                08-01&rsquo;s expansion into the drop
              </span>. Spot was <span className="dn-tag bear">−0.06%</span> on the 24h (flat) with OI{' '}
              <span className="dn-tag">−901.7 BTC (−0.82%)</span> — 109,505.0 → 108,603.4, a modest
              shrink vs 08-01&rsquo;s +2,852 BTC expansion. The 24h aggressor tape SPLIT: spot CVD{' '}
              <span className="dn-tag bull">+12,329.8</span> (heavy spot accumulation, cb_cvd
              5,239.4 → 17,569.2, no reset signature — endpoint deltas reconcile to interval sums)
              against futures CVD{' '}
              <span className="dn-tag bear">−1,148.2</span>, taker-net{' '}
              <span className="dn-tag bear">−1,148.2</span> and big-net{' '}
              <span className="dn-tag bear">−144.2 BTC (490 prints)</span> —{' '}
              <span className="dn-em">spot bought, futures sold, price pinned flat</span>. Perp trades a{' '}
              <span className="dn-tag bear">−$66.68 discount</span> to spot at the snap (24h mean
              −$61.80, range −$113.92 / −$6.12) — a persistent perp discount held through the two days
              below the floor. 1-min aggressor skew snap{' '}
              <span className="dn-tag bear">−7.8</span> (24h mean −1.18, range −53.3 / +38.7).{' '}
              <span className="dn-em">
                OI shrinking into a flat price with spot bid and futures offered is a low-conviction
                standoff at the lows: the spot buyer keeps absorbing, the futures seller keeps
                distributing, and neither has forced the level. This is what a floor break looks like
                on the day it waits on the weekly close — no expansion, no flush, just a flat pin.
              </span>
            </p>

            <p>
              The leverage and crowding reads confirm the long-heavy book beneath the break is still
              intact and un-flushed.{' '}
              <span className="dn-signal">
                Funding kept cooling off the cap but never went negative, and retail stayed crowded
                long — a fourth straight day with the carry underwater and un-flushed
              </span>: live funding <span className="dn-tag">+5.08% ann</span> (raw 0.004641 field ×
              1095, off the cap), 24h mean{' '}
              <span className="dn-tag">+4.16% ann</span> (a further cool from 08-01&rsquo;s +7.77%), max{' '}
              <span className="dn-tag">+6.44% ann</span> (below the +10.95% Binance cap — no cap pin this
              window, vs 466/1442 cap rows on 08-01), min{' '}
              <span className="dn-tag">+2.03% ann (0.001856 field @ 08-01 20:00 BJ / 12:00Z)</span>, and{' '}
              <span className="dn-tag">0 / 1441 negative rows</span> — a fourth straight day at zero.
              Retail <span className="dn-tag bear">mkt_long_pct 68.76</span> (24h high 69.18 @ 08-01
              13:18 BJ / 05:18Z, low 66.85 @ 08-02 02:06 BJ / 08-01 18:06Z) — effectively unchanged from
              08-01, the long crowd did not de-crowd through a second day below the floor.{' '}
              <span className="dn-em">The read is the same as 08-01 and that is the point: funding never
              went negative even as price closed below the floor twice — the long leverage did not flush,
              it just cooled and stayed. A big pool of underwater longs (retail 68.76, funding still
              positive) is cascade fuel IF the break holds and something forces the flush, but the flush
              — the one book that would tell you the break is real capitulation — is still absent four
              days in.</span>
            </p>

            <p>
              Windowed flow is a flat 24h with a small last-4h lift into the snap. 24h: price{' '}
              <span className="dn-tag bear">−0.06%</span>, OI{' '}
              <span className="dn-tag bear">−901.7 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +12,329.8</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −1,148.2</span>, big-print{' '}
              <span className="dn-tag bear">−144.2 BTC / 490 prints</span>, taker-net{' '}
              <span className="dn-tag bear">−1,148.2</span> —{' '}
              <span className="dn-em">spot bid / futures offered, price flat: a spot-accumulation vs
              futures-distribution standoff</span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bull">+0.54%</span>, OI{' '}
              <span className="dn-tag bull">+237.3 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,794.2</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +358.5</span>, big-print{' '}
              <span className="dn-tag bull">+61.0 BTC / 93 prints</span>, taker-net{' '}
              <span className="dn-tag bull">+358.4</span> — a demand-shaped lift over the 04:07 → 08:07
              sub-window (after a +0.92% rebound from the 02:46 $62,325 low), all reads positive with OI
              expanding. 1h: price{' '}
              <span className="dn-tag bull">+0.11%</span>, OI{' '}
              <span className="dn-tag bull">+125.4 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +191.6</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +321.4</span>, big-print{' '}
              <span className="dn-tag bull">+167.3 BTC / 33 prints</span>, taker-net{' '}
              <span className="dn-tag bull">+321.3</span> —{' '}
              <em>a small bid into the snap, futures leading the last-hour lift</em>.{' '}
              <span className="dn-em">
                Baseline convention: the 24h block uses the same-clock prior-day row (08-01 08:07 BJ,
                1,440 one-minute intervals back / 1,441 rows inclusive); the 4h and 1h sub-window
                blocks use prior-row inclusive baselines
                (08-02 04:07 / 07:07 BJ through the 08:07 pin). The series is contiguous across these
                windows this run, so those reproduce the same-clock endpoints — no baseline discrepancy,
                and NO CVD reset signature in the 24h window (endpoint CVD deltas reconcile to their
                interval sums), so the CVD deltas are raw endpoint differences.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF unchanged at 1 long / 9 short / 0 neutral · regime still 6/9 cycle-reversal (JT&lt;0) mean-reversion (&ldquo;sell the bounce&rdquo;) · a fresh 1h water-down golden cross 2b (short-to-long probe) into the same stacked bottoming cluster — HTF bottom-div (8h/1w), ⚡TD9 BUY 1d/1M · MA matrix fully inverted, the in-progress weekly close $62,879.80 below the $63,311 floor into the final day</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF panel is a near-carbon-copy of 08-01 — deeply bearish count, mean-reversion
                regime, and the same oversold-reversal cluster firing at the lows
              </span>. The 00:01Z scan reads{' '}
              <span className="dn-tag bear">1 long / 9 short / 0 neutral</span> across 10 TFs (only 1M
              long; 15m / 30m / 1h / 4h / 8h / 12h / 1d / 3d / 1w all short), unchanged from 08-01. The
              regime tag holds at{' '}
              <span className="dn-tag bear">6/9 cycle-reversal (JT&lt;0) — mean-reversion /
              bounce-favoring, be cautious of trend-following</span>. The fast frames aged their bearish
              crosses (4h water-down death cross 3b → 9b, 8h death 2b → 5b) and RSI stayed washed in the
              38–44 band (1h RSI <span className="dn-tag bear">43.8</span>, 4h 39.2, 8h 38.7, 15m 55.6 —
              a fast-frame reflex off the low). The one fresh tick is a{' '}
              <span className="dn-tag bull">1h water-down golden cross 2 bars ago</span> (an early
              short-to-long probe with DIF still underwater), matching the 4h intraday bounce. 12h and 1d
              hold their clouds (12h in-cloud 61.7k–63.7k, 1d in-cloud 61.9k–68.2k — spot inside both)
              and 1M stays above cloud (↓47.4k).{' '}
              <span className="dn-em">
                The bull counterweight at the lows is the same stack as 08-01 and it persists: the HTF
                bottom-div cluster (8h/1w), ⚡TD9 BUYs on 1d and 1M (oversold-reversal hints), the 1h
                water-down golden cross 2b, the 3d water-down golden cross 7b and the 1w water-down
                golden cross 1b. So this is again a deeply oversold, bearish-count structure with
                bottoming tells firing — the &ldquo;sell the bounce&rdquo; regime pinned against an
                oversold-reversal cluster, the same ambiguous read a floor break with an intact spot
                bid produces.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">62,813</td><td className="num bull">55.6</td><td className="bull">golden (water-dn) 14b</td><td className="bear">below ↑62.9k 32b</td><td>Sell 1</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>30m</td><td className="num">62,814</td><td className="num">49.6</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑63.0k 15b</td><td>Buy 1</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">62,825</td><td className="num">43.8</td><td className="bull">golden (water-dn) 2b</td><td className="bear">below ↑63.4k 35b</td><td>Sell 4</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">62,825</td><td className="num">39.2</td><td className="bear">death (water-dn) 9b</td><td className="bear">below ↑64.2k 12b</td><td>Buy 3</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">62,814</td><td className="num">38.7</td><td className="bear">death (water-dn) 5b</td><td className="bear">below ↑64.2k 6b</td><td>Buy 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">62,813</td><td className="num">40.2</td><td className="neut">death (water-up) 18b</td><td className="neut">in cloud 61.7k–63.7k 3b</td><td>Buy 5</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>1d</td><td className="num">62,814</td><td className="num">44.0</td><td className="neut">death (water-up) 6b</td><td className="neut">in cloud 61.9k–68.2k 13b</td><td>⚡ TD9 BUY</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">62,825</td><td className="num">42.5</td><td className="bull">golden (water-dn) 7b</td><td className="bear">below ↑75.6k 20b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">62,825</td><td className="num">38.2</td><td className="bull">golden (water-dn) 1b</td><td className="bear">below ↑93.8k 26b</td><td>Buy 1</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">62,825</td><td className="num">43.2</td><td className="neut">—</td><td className="bull">above ↓47.4k 30b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 08:01 BJ scan (00:01Z; rolling latest file, archived
                    verbatim at /opt/desk-note/snapshots/2026-08-02-0007/). Header alerts:{' '}
                    <em>⚡ TD9 BUY 1d/1M (oversold reversal hints)</em>,{' '}
                    <em>top-div 5: 15m/30m/1h/4h/1d · bottom-div 4: 1h/4h/8h/1w</em>,{' '}
                    <em>HTF bottom-div cluster 8h/1w</em>,{' '}
                    <em>regime 6/9 cycle-reversal (JT&lt;0) — mean-reversion</em>, near-term direction{' '}
                    <em>15m–4h short, 8h–1d short, 3d–1M short (1M lean long)</em>,{' '}
                    <em>1h water-down golden cross 2b (early, DIF underwater)</em>. Scan spot $62,813,
                    24h −0.07%, 24h H/L $63,127 / $62,229, qVol $3.44B (the live-tape anchor at 00:07Z
                    reads spot $62,900.00 — the ~$87 gap is the 6-minute source lag plus the
                    spot-vs-OHLCV/perp basis). Closes are in-progress bars; treat every value as
                    provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is the same fully inverted read as 08-01: spot below the entire ladder. Spot
              $62,900 sits below all ten daily offsets and all ten weekly offsets — the near lines are
              the broken-support cluster now turned overhead resistance, a tight $62.9k–$63.5k band:{' '}
              <span className="dn-tag bear">0-γ flip $62,912 (−0.02%, spot AT it)</span>,{' '}
              <span className="dn-tag bear">settled 200W floor $63,311 (−0.65%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $63,364 (−0.73%)</span>, and the in-progress-week{' '}
              <span className="dn-tag bear">W-SMA200 $63,530 (−0.99%)</span> — this band now caps every
              bounce. Above that:{' '}
              <span className="dn-tag bear">D-EMA20 $63,927 (−1.61%)</span>,{' '}
              <span className="dn-tag bear">D-SMA20 $64,427 (−2.37%)</span>,{' '}
              <span className="dn-tag bear">D-EMA50 cap $64,679 (−2.75%)</span> (ticked down $78 from
              08-01&rsquo;s $64,757 as the down-closes pulled the EMA lower),{' '}
              <span className="dn-tag bear">D-EMA100 $67,227 (−6.44%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $68,769 (−8.53%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,343 (−9.29%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $69,354 (−9.31%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,554 (−9.57%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $70,052 (−10.21%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $71,129 (−11.57%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $72,833 (−13.64%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,094 (−15.11%; seed)</span>. Far above and
              disused: W-SMA150 $76,619 (−17.91%), W-EMA50 $78,317 (−19.69%), W-EMA100 $79,044
              (−20.42%), W-SMA50 $84,317 (−25.40%), W-SMA100 $88,555 (−28.97%); W-EMA200 $68,605
              (−8.32%; seed) prints above spot too. Below spot there is no reclaimed support left — the
              next structural level down is the negative-gamma shelf ($62k dealer wall, then $60k).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-08-02 00:06Z (in-progress close $62,879.80);
                offsets recomputed against live spot $62,900.00. Displayed MA levels are $-rounded;
                offsets computed from exact series values. The full-glob recompute (361 weekly bars)
                makes every weekly MA computable — W-SMA200 $63,530.17 (in-progress week) / $63,311.02
                (last completed week — the settled floor); W-EMA150 $74,094 and W-EMA200 $68,605 seed
                from available history and print above spot (resistance). Daily closes: 07-26
                $65,375.10, 07-27 $63,720.80, 07-28 $63,903.60, 07-29 $63,958.90, 07-30 $64,750.00,
                07-31 $62,859.90, 08-01 $62,792.30 (a second completed close below the floor), 08-02
                (in-progress) $62,879.80 — two settled daily closes below the $63,311 floor and a third
                in progress, into the final day of the weekly test.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book RE-GAMMAED slightly positive — headline +6.3M (was −5.8M) / rollup +20.25M (was +10.25M) · the 0DTE front HEALED positive (2AUG +5.20M, was 1AUG −5.20M) — the near-dated negative amplifier is GONE · but the negative-gamma shelf below spot is INTACT and heavier ($62k −11.27M into $60k −24.91M, −50.5M of negative walls below) · flip $62,912 (spot AT it, dropped $215) · $70k +12.24M the heaviest positive wall, overhead</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book un-did half of yesterday&rsquo;s chase-short setup: it re-gammaed
                slightly positive and the 0DTE front healed, so the front-dated amplifier is gone — but
                the structural crash-put shelf below spot is intact and a touch heavier
              </span>. Headline Total GEX / 1% move is{' '}
              <span className="dn-tag bull">+6.3M</span> (was −5.8M on 08-01), with the by-expiry rollup
              at <span className="dn-tag bull">+20.25M</span> (= gex_summary.json net_gex
              $20,245,577.06, was +10.25M on 08-01) — a ~14M non-reconciling headline-vs-rollup gap,
              disclosed per DN-003 lineage, with the rollup again ABOVE the headline. Both panels now
              read net-LONG-gamma (dampening) — the book de-gammaed to net-flat on 08-01 and has now
              tipped back positive.{' '}
              <span className="dn-em">So dealers again lightly damp a move here, the opposite of the
              amplifier the chase-short wanted.</span> The 0-γ flip moved{' '}
              <span className="dn-tag">$63,127 → $62,912 (−$215)</span>, and spot $62,900 sits{' '}
              <span className="dn-tag bear">−0.02% BELOW flip</span> on spot-denominated math
              (62,900.00 / 62,912.07 − 1 = −0.019%); the GEX file&rsquo;s own &ldquo;dist to flip&rdquo;
              reads{' '}
              <span className="dn-tag bull">+0.43% off its Deribit-index $63,182</span> (63,182 /
              62,912.07 − 1 = +0.429%, the file prints +0.4%) — the two references STRADDLE the flip
              (live spot a hair below, the file&rsquo;s index above), so spot is effectively ON the
              flip. The wall map still has a negative-gamma shelf right below spot and the positive
              walls overhead:{' '}
              <span className="dn-tag bear">$60k −24.91M</span> (the heaviest wall, the crash-put,
              heavier than 08-01&rsquo;s −24.43M),{' '}
              <span className="dn-tag bull">$70k +12.24M</span> (the heaviest positive, overhead),{' '}
              <span className="dn-tag bear">$62k −11.27M</span> (right below spot, heavier than
              08-01&rsquo;s −10.76M),{' '}
              <span className="dn-tag bull">$72k +8.89M</span>,{' '}
              <span className="dn-tag bear">$58k −8.13M</span>,{' '}
              <span className="dn-tag bull">$67k +8.12M</span>,{' '}
              <span className="dn-tag bull">$68k +7.77M</span>,{' '}
              <span className="dn-tag bull">$66k +7.67M</span>,{' '}
              <span className="dn-tag bull">$80k +7.27M</span>,{' '}
              <span className="dn-tag bear">$55k −6.22M</span>.{' '}
              <span className="dn-em">
                The negative cluster BELOW spot sums to roughly −50.5M ($62k −11.27M + $60k −24.91M +
                $58k −8.13M + $55k −6.22M) — a genuine amplifying shelf, marginally heavier than
                08-01&rsquo;s −49.2M: spot is at the flip, and a break of the $62k wall accelerates into
                the $60k −24.91M crash-put where dealer hedging sells into the fall. Above spot the
                positive walls ($66k–$72k, $80k) cap a bounce. So the STRUCTURAL trapdoor below is
                intact even as the FRONT amplifier healed — the two-sided read that keeps the
                chase-short primed but un-armed.
              </span>{' '}
              By expiry the near-dated negative HEALED:{' '}
              <span className="dn-tag bull">2AUG26 0.3DTE +5.20M</span> (the 0DTE front flipped back
              positive, where 08-01 carried 1AUG −5.20M), 3AUG 1.3 +0.58M, 4AUG 2.3 −1.10M, 5AUG 3.3
              −0.07M, <span className="dn-tag bull">7AUG 5.3 +3.52M</span>, 14AUG 12.3 −3.71M, 21AUG 19.3
              +2.70M, <span className="dn-tag bull">28AUG 26.3 +11.05M</span> (the heaviest positive
              chunk), 25SEP 54.3 −0.47M, 30OCT 89.3 +0.06M, 25DEC 145.3 +1.28M, 26MAR27 236.3 +0.59M,
              25JUN27 327.3 +0.60M — the strip sums to{' '}
              <span className="dn-tag bull">+20.25M</span> (net_gex $20,245,577.06; the +$0.02M vs the
              hand-sum is per-expiry $-rounding). The front 0.3–3.3DTE cluster (2AUG +5.20M + 3AUG
              +0.58M + 4AUG −1.10M + 5AUG −0.07M) nets{' '}
              <span className="dn-tag bull">+4.61M</span> — the amplifying negative-gamma FRONT the
              chase-short leaned on yesterday is GONE; only the deeper strike shelf below spot remains.
            </p>

            <p>
              IV median across the option chain is{' '}
              <span className="dn-tag">40.4%</span> (was 40.5% on 08-01) against 30D close-to-close RV of{' '}
              <span className="dn-tag">29.13%</span> — chain-level richness{' '}
              <span className="dn-tag">~+11.3pt</span>. A chain-median across N instruments (868 today,
              down from 870), <span className="dn-em">not</span> a tradable spread; expiry-/strike-level
              vega, skew and term structure remain not loaded; the vol read stays framework-only. RV
              methodology: 30D close-to-close, logret.std × √365 × 100 on the last 30 daily log returns
              (= 31 consecutive daily closes) anchored to parquet last bar 2026-08-02 00:06Z; the
              29-return alt reads 29.48%.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · 10Y held 4.68% (reclaim-long rates filter still FALSE, 13bp away, MOOT with the recovery read dead) · HY OAS 2.84% (−3.0bp, tighter), TIPS/5Y5Y flat · MOVE fetch-failed a SECOND straight render · Tier-2 FX got a FRESH print — DXY −0.21 to 99.80, USD/JPY −2.78 to 157.40 (yen firmer) · rates the load-bearing tightening, FX/credit/liquidity loose-to-neutral, the floor break is BTC-internal</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape is near-static on the load-bearing rates line and eased on the FX panel
                that got a fresh print — nothing here drives BTC&rsquo;s floor break
              </span>. Dashboard render is 2026-08-01 22:17Z, ~1.85h before the snapshot. US 10Y nominal{' '}
              <span className="dn-tag bear">4.68% (+1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.34</span>, episodic z{' '}
              <span className="dn-tag">+1.40</span> — EXTREME RISK-OFF, a seventh session at/above the
              4.55% reclaim gate. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.41% (0.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.65</span> — EXTREME RISK-OFF, flat. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.30% (0.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag">2.28% (+1.0bp)</span> — flat. HY OAS{' '}
              <span className="dn-tag">2.84% (−3.0bp)</span>, regime z{' '}
              <span className="dn-tag">−0.25</span> — neutral, tighter. MOVE bond vol{' '}
              <span className="dn-tag stale">unavailable (fetch failed a second render)</span>. The
              Tier-2 FX panel got a fresh print and eased: DXY{' '}
              <span className="dn-tag bull">99.80 (−0.21)</span>, regime z +0.76; USD/JPY{' '}
              <span className="dn-tag bull">157.40 (−2.78, yen firmer)</span>; Fed net liquidity{' '}
              <span className="dn-tag bear">$5.825T (−0.092T, weekly, carried)</span>, episodic z −1.09.
              US-JP 10Y spread <span className="dn-tag">2.01% (+1.0bp)</span>. NFCI{' '}
              <span className="dn-tag bull">−0.554</span>, RISK-ON (weekly). USD/CNY loose.{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) stays FALSE at 4.68% (13bp from
                firing) — but it is MOOT this note: the recovery read the filter fed is dead, the scout
                stopped out on the floor close, so the rates leg carries nothing today. Credit is
                neutral-flat, inflation compensation flat, the FX panel eased (dollar softer and yen
                firmer), and MOVE is dark. Nothing in the macro tape drives BTC&rsquo;s floor break —
                it is a BTC-internal distribution / consolidation, not a macro-risk-off event; the
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
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.554</td><td className="num">−0.01</td><td className="num bull">−1.56</td><td className="num bull">−1.53</td><td className="bull">RISK-ON · weekly</td></tr>
                <tr><td>MOVE bond vol</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">unavailable · fetch failed (2nd render)</td></tr>
                <tr><td>DXY</td><td className="num">99.80</td><td className="num bull">−0.21</td><td className="num bear">+0.76</td><td className="num bull">−3.01</td><td className="bull">softer · fresh print</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.825T</td><td className="num bear">−0.092T</td><td className="num">−1.09</td><td className="num bull">−2.47</td><td className="stale">weekly · carried, no fresh print</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.40</td><td className="num bull">−2.78</td><td className="num">+0.30</td><td className="num bull">−3.93</td><td className="bull">yen firmer · fresh print</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.01%</td><td className="num bear">+1.0bp</td><td className="num">−0.32</td><td className="num">+1.40</td><td className="neut">neutral</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7448</td><td className="num bull">—</td><td className="num bull">−1.48</td><td className="num bull">−2.49</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num stale">+2.42</td><td className="num stale">+1.09</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.317</span> — NORMAL band, unchanged from 08-01, still moving
              together. BTC&rsquo;s top tie is{' '}
              <span className="dn-tag">NQ +0.569</span>, then SP500{' '}
              <span className="dn-tag">+0.553</span>, SILVER{' '}
              <span className="dn-tag">+0.476</span>, TSLA{' '}
              <span className="dn-tag">+0.458</span>, JP225{' '}
              <span className="dn-tag">+0.455</span>, PALL{' '}
              <span className="dn-tag">+0.432</span>, GOLD{' '}
              <span className="dn-tag">+0.429</span>, URNM{' '}
              <span className="dn-tag">+0.396</span>, PLAT{' '}
              <span className="dn-tag">+0.394</span>, NVDA{' '}
              <span className="dn-tag">+0.387</span>, COPPER{' '}
              <span className="dn-tag">+0.376</span>. 7d performance keeps BTC mid-pack in a split tape:{' '}
              <span className="dn-tag bear">BTC −2.62%</span> sits roughly tied with JP225{' '}
              <span className="dn-tag bear">−2.73%</span>, behind the index (NQ{' '}
              <span className="dn-tag bear">−0.63%</span>, SP500{' '}
              <span className="dn-tag bull">+0.33%</span>) and far behind the green software megacaps
              (MSFT <span className="dn-tag bull">+19.94%</span>, AMZN{' '}
              <span className="dn-tag bull">+15.81%</span>, GOOGL{' '}
              <span className="dn-tag bull">+9.79%</span>), but ahead of the red AI-megacap sleeve (NVDA{' '}
              <span className="dn-tag bear">−4.36%</span>, META{' '}
              <span className="dn-tag bear">−7.79%</span>, AAPL{' '}
              <span className="dn-tag bear">−7.85%</span>) and gas (NGAS{' '}
              <span className="dn-tag bear">−4.60%</span>). Metals firm: GOLD{' '}
              <span className="dn-tag bear">−0.09%</span>, SILVER{' '}
              <span className="dn-tag bear">−1.01%</span>, PLAT{' '}
              <span className="dn-tag bull">+3.39%</span>, PALL{' '}
              <span className="dn-tag bull">+3.56%</span>, COPPER{' '}
              <span className="dn-tag bull">+2.70%</span>; URNM{' '}
              <span className="dn-tag bear">−2.19%</span>; TSLA −1.40%; CL −0.03%, BRENT +0.46%; EUR
              +1.37%, JPY (yen) firmer.{' '}
              <span className="dn-em">
                The correlation regime is NORMAL (0.317) and BTC is moving WITH a two-tone risk tape —
                mildly negative over the 7d, roughly tied with JP225, behind the index and the green
                software leaders, ahead of the red AI-megacap / gas sleeve. So BTC is neither the RS
                leader nor the worst — it is mid-pack in a split complex, and the floor break is a
                BTC-internal event, not a macro-driven risk-off. Per the DN-001 lineage this is a
                NORMAL, mixed cross-asset read — no rotation call.
              </span>{' '}
              JGB monthly 2.67% carries a monthly tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · cover-bounce scout STOPPED / dead (recovery read invalidated 07-31, re-arms only on a full floor+cap reclaim) · chase-short PRIMED but STOOD DOWN — the floor-break leg holds (2 daily closes + in-progress below $63,311, weekly in its final day) but its SM-positioning tell is DATA-IMPAIRED (the net-short flip is one suspect minute) and its FRONT gamma amplifier HEALED positive (0DTE 2AUG +5.20M) · book FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                The lineage is unchanged in posture and sharper in its blockers — the desk is FLAT into
                the final day of the weekly close, and neither setup can arm on today&rsquo;s tape
              </span>. The 07-31 note stopped the scout on the floor close and primed the chase-short on
              two of three legs; 08-01 held that. Today the chase-short&rsquo;s two supporting legs both
              WEAKENED — the SM roll-off it needed printed but as a data artifact, and the front-dated
              gamma amplifier healed back positive — while the floor-break leg holds and the weekly test
              is now in its final day. So the book stays FLAT: no scout (its recovery read is dead), no
              chase-short entry (the SM tell is un-certifiable and the front amplifier is gone), no fresh
              hedge — waiting on the Sunday weekly close and a clean SM confirmation.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STOPPED / DEAD · the recovery read was invalidated 07-31 — re-arms only on a full reclaim of the floor AND the cap</span>
              <div className="dn-trade-name">
                Cover-bounce scout — STOPPED and dead: the D-EMA50 cap it was deferred against rejected on the 07-31 print and price closed below the $63,311 floor (its own stop), invalidating the recovery read; it never armed and does not re-arm on the old terms
              </div>
              <div className="dn-thesis">
                The scout was deferred eight sessions waiting on a D-EMA50 daily close above the cap with
                SM re-cross and demand-led OI in hand. That never came; instead the 07-31 candle spiked
                above the cap intraday and reversed to close $62,859.90, below the $63,311 settled floor
                — the scout&rsquo;s explicit stop. It fired. Two completed daily closes are now below the
                floor (07-31 $62,859.90, 08-01 $62,792.30) with a third in progress. The scout never
                entered, so there is nothing to stop out — but the read it was built on (digestion above
                the floor, waiting on a cap reclaim) is invalidated and stays dead. A re-arm now requires
                price to first reclaim the $62,912–$63,530 flip/floor band on a daily close AND then
                close above the D-EMA50 cap on demand-led flow — a full recovery from below the floor,
                not a continuation of the old deferral.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">STOPPED / dead · never armed, never entered · the recovery read is over (invalidated 07-31, held 08-01 and 08-02)</span></div>
                <div><span className="dn-lvl-k">re-arm (new terms)</span><span className="dn-lvl-v bull">a daily close back above the $62,912–$63,530 flip/floor band AND then above the D-EMA50 cap $64,679 on demand-led flow with a CLEAN SM read — a full recovery from below the floor, not the old deferral</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no scout long here — do not buy a bounce below a broken floor into an unsettled weekly close; the desk waits for a reclaim on the close, not an intraday probe</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> the scout&rsquo;s edge was a confirmed reclaim, not a prediction of
                one — it waited eight sessions for a cap close and got a cap rejection and a floor break
                instead, the correct outcome of &ldquo;wait for the close.&rdquo; The 1h water-down
                golden cross 2b and the +0.54% 04:07 → 08:07 lift are intraday probes, not a reclaim of the
                floor; the scout re-arms only on a full daily reclaim of the flip/floor band and then the
                cap, on demand-led flow.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · chase · PRIMED but STOOD DOWN · the floor-break leg holds but the SM tell is DATA-IMPAIRED and the FRONT gamma amplifier HEALED positive</span>
              <div className="dn-trade-name">
                Chase-short — the floor-break leg holds (two daily closes + in-progress below $63,311, weekly in its final day) but the two legs that firmed it are gone today: the SM roll-off it needed is one suspect minute (DATA-IMPAIRED) and the 0DTE front gamma healed positive — the short stays stood down
              </div>
              <div className="dn-thesis">
                The chase-short&rsquo;s edge is a floor break with amplifying negative gamma below AND
                smart money already rolled off to short. The floor-break leg holds and strengthened (a
                second completed daily close below $63,311, and the weekly test is in its final day). But
                the other two both weakened. The SM-positioning tell APPEARED to fire — the tape flipped
                from net long +8,299 to net short −15,511 — but the entire flip is one −22,911
                single-minute step at 08-01 14:36 BJ (short +17,907 in 60s), the same recurring
                ~BJ-14:00 feed re-sync flagged 07-31, so the desk cannot certify a clean roll-off off a
                suspect minute. And the gamma amplifier partly healed: the book re-gammaed positive
                (headline −5.8M → +6.3M, rollup +10.25M → +20.25M) and the 0DTE front flipped back
                positive (2AUG +5.20M, was 1AUG −5.20M) — the front-dated negative the short leaned on is
                gone, though the deeper $62k/$60k strike shelf below spot (−50.5M) is intact. So the
                short has a confirmed daily break but no certifiable SM tell and no front amplifier — it
                stands down and waits for the weekly close to seal AND a clean (non-artifact) SM
                confirmation.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm legs (1 held, 1 impaired, 1 healed)</span><span className="dn-lvl-v bear">floor close-break (HELD/STRONGER — 07-31 $62,859.90 + 08-01 $62,792.30 + 08-02 in-progress $62,879.80 all &lt; $63,311; WEEKLY in its final day, settles ~24h out) · SM positioned short (DATA-IMPAIRED — tape shows net short −15,511 but the flip is one suspect minute) · amplifying negative gamma (WEAKENED — front 0DTE healed +5.20M, headline re-gammaed +6.3M; only the deeper $62k/$60k shelf remains)</span></div>
                <div><span className="dn-lvl-k">what would arm the short</span><span className="dn-lvl-v bear">a Sunday 08-02 weekly close below $63,311 (seals the break) AND a CLEAN SM net-short read that does NOT hinge on a single feed-resync minute AND the funding carry finally flushing negative — the missing tells are a settled weekly break and a certifiable SM roll-off</span></div>
                <div><span className="dn-lvl-k">structural map if it arms</span><span className="dn-lvl-v bear">spot at the flip $62,912 → break the $62k −11.27M wall → accelerate into the $60k −24.91M crash-put; the un-flushed long carry (funding +4.16% mean, 0 negatives, retail 68.76) is the cascade fuel</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no chase-short on a positioning tell that hinges on a suspect minute, into a book that just re-gammaed positive, with the weekly close unsettled — wait for the close to seal and a clean SM confirmation</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R (framework, not live):</b> a live entry on a clean SM roll-off + a settled weekly
                break would short ~$62,900 against a stop back above the flip/floor band ~$63,530 (~$630
                risk) toward the $60k crash-put shelf (~$2,900 reward) ≈ 4.6:1 — an attractive amplifier
                setup IF the tells align. They do not today. <b>Discipline:</b> the chase-short only pays
                when SM is verifiably short with you into a sealed break and the gamma amplifies; today
                the SM read is a data artifact, the front amplifier healed, and the weekly is unsettled —
                three reasons to stand down. Let the Sunday close settle and the SM feed print a clean
                read before arming.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · consolidation below the floor into the weekly close — the break held a second daily close, but the spot bid absorbs and the long carry stays un-flushed: a low-conviction pin, not a cascade</span>
              <div className="dn-trade-name">
                Consolidation below the floor into the weekly close — the resolution is a flat pin below $63,311 with a heavy spot bid absorbing futures distribution and an un-flushed long carry, waiting on the Sunday close to seal or fail the break
              </div>
              <div className="dn-thesis">
                Two sessions below the broken floor and the tape has neither cascaded nor reclaimed — it
                pinned flat. Price is −0.06% on the 24h, OI contracted −0.82%, the 24h flow split spot-bid
                (+12,330 CVD) / futures-offered (−1,148), funding kept cooling but stayed positive with 0
                negatives a fourth day, and retail held 68.76. The one loud SM event is a feed artifact.
                So the read is consolidation, not resolution: a heavy spot bid keeps absorbing futures
                distribution at the flip, the underwater long carry has not flushed, and the weekly close
                — the last domino the whole lineage pointed at — settles at the end of today. If the close
                seals below $63,311 with a clean SM roll-off and the funding finally flushes, the
                un-flushed longs (retail 68.76, SM net short if real, capped-funding carry cooling) are
                cascade fuel into the $62k/$60k negative-gamma shelf (the chase-short arms). If the spot
                bid marks a base and price reclaims the $62,912–$63,530 flip/floor band, the scout re-arms
                on a full recovery. The tie-breaker sits exactly at the settled floor: the note turns on
                the Sunday weekly close and whether the SM feed prints a clean read.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">bear resolution (break seals)</span><span className="dn-lvl-v bear">a Sunday 08-02 weekly close below $63,311 with a CLEAN SM net-short read and a funding flush → the un-flushed long carry cascades into the $62k −11.27M / $60k −24.91M negative-gamma shelf; the chase-short arms</span></div>
                <div><span className="dn-lvl-k">bull resolution (base holds)</span><span className="dn-lvl-v bull">the spot bid marks a base and price reclaims the $62,912–$63,530 flip/floor band on a daily close → the scout re-arms on a full recovery back above the floor and then the cap, on demand-led flow</span></div>
                <div><span className="dn-lvl-k">deciding tells</span><span className="dn-lvl-v">the Sunday 08-02 weekly close vs $63,311, whether the SM feed prints a clean (non-artifact) read, and whether the funding carry finally flushes negative (capitulation) or holds positive (unresolved) — not the intraday tick</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the edge is refusing to over-read either side of a flat pin —
                the break held a second daily close but the spot bid absorbs and the carry has not
                flushed, so this is consolidation below the floor, not a confirmed cascade or a confirmed
                base. The lineage does not chase-short on a data-artifact SM flip into a re-gammaed book on
                an unsettled weekly close, and it does not scout-long an intraday bounce below a broken
                floor. It stays flat and reads three tells: the weekly close, the SM feed&rsquo;s clean
                read, and the funding flush. Whichever resolves first writes the next note.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the floor break held a second daily close and the weekly test is in its FINAL DAY (settles ~24h out) · the chase-short&rsquo;s floor-break leg holds but its SM tell is DATA-IMPAIRED and its front gamma amplifier HEALED positive · the scout stays dead · book FLAT</span>
            </h2>

            <p>
              Of the 08-01 decision conditions: the{' '}
              <em>scout&rsquo;s settled-floor stop</em> stays FIRED (07-31 $62,859.90 and 08-01
              $62,792.30 both closed below $63,311, plus the 08-02 in-progress $62,879.80) — the recovery
              read is dead and holds dead; the{' '}
              <em>chase-short floor close-break leg</em> HELD and strengthened (a second completed daily
              close below the floor, weekly now in its final day); the{' '}
              <em>chase-short SM-positioning leg</em> flipped from INVERTED (SM long) to a tape reading of
              net short — but on a single suspect feed-resync minute, so it is DATA-IMPAIRED, not cleanly
              MET; the <em>chase-short negative-gamma leg</em> WEAKENED — the book re-gammaed positive
              (headline +6.3M, rollup +20.25M) and the 0DTE front healed positive (2AUG +5.20M), leaving
              only the deeper $62k/$60k strike shelf; and the <em>reclaim-long rates filter</em> stayed
              FALSE and moot (10Y 4.68%).{' '}
              <em>The break held a second daily close into the final day of the weekly test, but the two
              legs that firmed the chase-short on 08-01 — the SM roll-off and the front-dated negative
              gamma — are today a data artifact and a healed-positive book, so the short is primed on the
              floor break alone and stands down.</em>{' '}
              The conditions today re-set around a held daily floor (weekly in its final day), a
              data-impaired SM net-short read, a re-gammaed dealer book with a deeper negative shelf still
              below spot, a crowded retail, and an un-flushed long carry:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Weekly 200W close (the last domino)</td><td className="bear">IN ITS FINAL DAY — in-progress weekly close $62,879.80 &lt; $63,311 settled floor / $63,530 in-progress W-SMA200; settles at Sunday-end (~24h out), ends the 4-week above-floor streak if it holds</td><td>the pivotal read of the note — a settled close below seals the weekly break; wait for it, do not pre-position</td></tr>
                <tr><td>Scout settled-floor stop</td><td className="bear">STAYS FIRED — 07-31 $62,859.90 + 08-01 $62,792.30 + 08-02 in-progress $62,879.80 all &lt; $63,311</td><td>scout STOPPED / dead — the recovery read is over, book stands down long</td></tr>
                <tr><td>Chase-short floor close-break (leg)</td><td className="bear">HELD / STRONGER — two completed daily closes below $63,311, weekly in its final day</td><td>leg holds daily; the short still waits on the Sunday weekly close to seal the break</td></tr>
                <tr><td>Chase-short SM positioning (leg)</td><td className="stale">DATA-IMPAIRED — tape shows net short −15,511 but the flip is one −22,911 suspect minute (08-01 14:36 BJ feed re-sync); level has held ~−15,000 for 17h</td><td>no chase-short on an un-certifiable SM tell; wait for a clean (non-artifact) net-short read from a stabilized feed</td></tr>
                <tr><td>Chase-short amplifying negative gamma (leg)</td><td className="bull">WEAKENED — book re-gammaed to +6.3M headline / +20.25M rollup, 0DTE front healed +5.20M; only the deeper $62k −11.27M / $60k −24.91M shelf remains</td><td>the front amplifier is gone; the structural shelf below spot is intact but not the firing amplifier the short wanted</td></tr>
                <tr><td>Cover-bounce scout re-arm (new terms)</td><td className="bull">a daily close back above the $62,912–$63,530 flip/floor band AND then above the D-EMA50 cap $64,679 on demand-led flow with a clean SM read</td><td>scout re-arms only on a full recovery from below the floor — not the old deferral</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">FALSE and moot — 10Y 4.68% &gt; 4.55% (13bp away); the recovery read it fed is dead</td><td>standalone filter false; not carrying anything this note</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the Sunday 08-02 weekly close seals below $63,311 with a CLEAN smart-money
                roll-off and a funding flush — which arms the chase-short into the $62k/$60k
                negative-gamma shelf with the un-flushed long carry as fuel — or whether the heavy spot
                bid marks a base and price reclaims the $62,912–$63,530 flip/floor band, which re-opens
                the scout on a full recovery; everything in between is the consolidation-below-the-floor
                the desk now reads
              </span>. Today is the final day of the weekly test the whole lineage pointed at, but the
              snapshot lands at its start, so the close will not settle for ~24h. The break held a second
              daily close, but the two legs that firmed the chase-short on 08-01 both slipped: the SM
              roll-off it needed printed as a data artifact (one suspect ~BJ-14:00 minute) and the
              front-dated gamma amplifier healed back positive, so the short is primed on the floor break
              alone and blocked by an un-certifiable positioning tell. Meanwhile the scout stays dead, the
              put-spread is not re-grown on a rates leg that is moot, OI contracted, funding kept cooling
              but did not flush (0 negatives, a fourth day), retail held 68.76, and the MTF is a
              near-copy of 08-01 — 1/9 with the mean-reversion regime and a stacked bottoming cluster at
              the lows. BTC stayed mid-pack in a NORMAL, split cross-asset tape — a BTC-internal
              consolidation, not a macro event. The right read for the next 24–48h is{' '}
              <em>patient — read the Sunday weekly close, wait for the SM feed to print a clean read, and
              watch the funding flush; do not chase the short on a data-artifact flip, and do not buy a
              bounce below a broken floor</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> v2 EN note — <b>post codex hostile audit</b>. Authored in STAGE A from the
            atomic snapshot (2026-08-02 00:07Z, live tape t == &ldquo;08-02 08:07&rdquo; BJ) and the
            rolling sources archived at /opt/desk-note/snapshots/2026-08-02-0007/, then audited by codex
            (hostile-but-fair) in STAGE B — verdict PASS-WITH-NOTES, 0 CRITICAL, 3 MAJOR, 3 MINOR, 0 NIT
            — with the full finding list recorded in audits/2026-08-02-desk-note.md. STAGE C applied every
            finding (CRITICAL + MAJOR + MINOR) in place and ran a grep-closure pass (key wrong-claim
            pattern + semantic variants searched across the whole file, fixed to zero stale hits) before
            promoting v1 → v2. Per-finding grep-closure:{' '}
            <b>DN-001</b> (MAJOR — suspect-minute share of the 24h Δshort understated as ~78%): searched
            &ldquo;78%&rdquo;; 1 hit before (SM Δ src), 0 after — corrected to ~97% (17,906.9 / 18,396.8
            = 97.3%, almost all of the Δshort) — RESOLVED.{' '}
            <b>DN-002</b> (MAJOR — CVD continuity overclaim: cb_cvd not monotone, single-minute steps
            &gt; |100| exist): searched &ldquo;monotone&rdquo; / &ldquo;no single step&rdquo; /
            &ldquo;both contiguous&rdquo;; 4 hits before (manifest, positioning prose, flow-baseline
            prose), 0 after — reworded to &ldquo;no reset signature — endpoint CVD deltas reconcile to
            interval sums&rdquo; (fut_cvd 24h Δ −1,148.2 = summed taker-net −1,148.2) — RESOLVED.{' '}
            <b>DN-003</b> (MAJOR — stale/manual macro values vs the 22:17Z source): searched
            &ldquo;2.84% (flat)&rdquo; / &ldquo;2.84% flat&rdquo; / HY OAS &ldquo;0.0bp&rdquo; / DXY-ep
            &ldquo;−2.78&rdquo; / &ldquo;−3.00&rdquo; / &ldquo;6.7438&rdquo; / &ldquo;−1.49&rdquo; /
            &ldquo;−2.69&rdquo;; 8 stale hits before across manifest, roman header, macro prose and table,
            0 after — HY OAS delta → −3.0bp/tighter (level 2.84% unchanged), DXY episodic z → −3.01,
            USD/JPY episodic z → −3.93, USD/CNY → 6.7448 / regime z −1.48 / episodic z −2.49; the
            remaining &ldquo;0.0bp&rdquo; (TIPS, 5Y5Y) and &ldquo;−2.78&rdquo; (USD/JPY level delta) are
            source-confirmed correct, not residue — RESOLVED.{' '}
            <b>DN-004</b> (MINOR — +0.54% 4h return misattributed to the 02:46 low): searched
            &ldquo;bounce off that low&rdquo; / &ldquo;bounce off the $62,325&rdquo; / &ldquo;4h bounce
            off&rdquo;; 3 hits before, 0 after — reframed as +0.54% over the 04:07 → 08:07 sub-window
            after a +0.92% rebound from the 02:46 $62,325 low — RESOLVED.{' '}
            <b>DN-005</b> (MINOR — &ldquo;dollar and yen both softer&rdquo; contradicts a firmer yen):
            searched &ldquo;both softer&rdquo;; 1 hit before, 0 after — corrected to &ldquo;dollar softer
            and yen firmer&rdquo; — RESOLVED.{' '}
            <b>DN-006</b> (MINOR — &ldquo;1,441 rows back&rdquo; off-by-one denominator): searched
            &ldquo;1,441 rows back&rdquo;; 2 hits before (manifest, flow-baseline prose), 0 after — set
            to &ldquo;1,440 one-minute intervals back / 1,441 rows inclusive&rdquo; (the &ldquo;1,441-row
            window&rdquo; span for row-statistics is a correct inclusive count, left intact) — RESOLVED.
            All six findings RESOLVED (hits-after = 0 for every pattern). Codex-confirmed clean and
            carried unchanged: requireViewer gate (path /desk/2026-08-02, first statement of the default
            export), JSX/markup integrity, live-tape headline arithmetic, the MA/RV block, the GEX block,
            the MTF block, the cross-asset block, the claims-vs-loaded-data gate, forward-looking
            trade-call scope, and lineage continuity. Full <em>next build</em> is unverified on this host
            (Node 18.19.1 &lt; the Next.js 20.9.0 gate); tsc --noEmit is the build proxy and exits 0.{' '}
            <b>post codex hostile audit</b> · see audits/2026-08-02-desk-note.md.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among
            principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a
            single atomic snapshot (2026-08-02 00:07Z) with section-level provenance
            disclosed in the manifest band above; the macro Tier-1 panel render is
            2026-08-01 22:17Z (~1.85h before snapshot) with MOVE unavailable and the Fed
            net-liquidity row carried weekly, and some inputs are explicitly stale,
            unavailable or pending and flagged as such — including the SM net series,
            whose 24h delta is data-impaired by a single-minute feed re-sync disclosed in
            the manifest. Levels, sizes, and conditions are illustrative of the desk&rsquo;s
            process, not standing recommendations. Past correlation, gamma, and positioning
            patterns do not bind future tape. Derivatives carry the risk of total loss and,
            where leveraged, loss exceeding deposited margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                Into the final day of the weekly close, price sits flat below the broken floor. The SM
                roll-off the short needed printed — but on one suspect minute, and the front gamma
                amplifier healed positive. Read the Sunday close, wait for a clean SM read and the
                funding flush. Flat and patient.
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
            v2 · 2026-08-02 00:07Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
