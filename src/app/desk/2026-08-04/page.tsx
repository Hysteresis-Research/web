import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-04 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-04',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-04' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260804() {
  await requireViewer('/desk/2026-08-04');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-04 · v2</span>
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
              <span className="dn-big">$63,534</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.16%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-04 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-04 00:07Z (snapshot pin, t == &ldquo;08-04 08:07&rdquo; BJ)</td>
                  <td className="dn-flag">
                    fresh · 1-min · anchor pinned to the file tail at 00:07Z (BJ 08:07) for
                    reproducibility · 24h-window convention: headline deltas use the same-clock
                    prior-day baseline t == &ldquo;08-03 08:07&rdquo; BJ (endpoint minus the 24h-ago
                    row, 1,440 one-minute intervals back / 1,441 rows inclusive). The 4h / 1h flow
                    blocks use prior-row inclusive baselines (08-04 04:07 / 07:07 BJ through the 08:07
                    pin); the series is contiguous across the sub-windows this run, so those reproduce
                    the same-clock endpoints — no baseline discrepancy. NO CVD reset signature in the
                    24h window — endpoint fut_cvd Δ −2,312.3 reconciles exactly to the summed taker-net
                    −2,312.3, and cb_cvd (25,747.3 → 30,900.3, eleven &gt;120 BTC one-minute steps, max +139.9, no reset-scale step) — so
                    CVD deltas are raw endpoint differences, Method A not required · funding / flow
                    row-statistics span the 1,441-row window; premium means exclude null rows ·{' '}
                    <b>DATA-QUALITY NOTE:</b> the SM net series is <b>DATA-IMPAIRED</b> this run — a single
                    suspect one-minute step of +10,205.3 BTC at 08-03 14:36 BJ (08-03 06:36Z, the recurring
                    ~BJ-14:00 feed re-sync artifact flagged 07-31 / 08-02) accounts for ~100% of the apparent
                    +10,052 net-short cover; ex-artifact the 24h ΔNet is −153.2 (essentially FLAT). The
                    apparent SM &ldquo;cover&rdquo; CANNOT be certified as a genuine tape read this run —
                    same failure mode as the 08-02 −22,911 minute, contrast the CLEAN 08-03 read
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-04 08:01 BJ scan (00:01Z)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · archived verbatim at
                    /opt/desk-note/snapshots/2026-08-04-0007/ · ~6-min stale vs snapshot anchor ·
                    in-progress bars · scan spot $63,464
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-04 00:01Z snapshot</td>
                  <td className="dn-flag">
                    ~6-min stale · Deribit idx $63,829 vs live $63,534 · median IV 40.3% · 826
                    instruments (was 866 on 08-03) · headline Total GEX +68.6M vs by-expiry rollup
                    +56.49M (= gex_summary.json net_gex $56,492,041.90) — a ~12.1M non-reconciling
                    source-panel gap disclosed per DN-003 lineage, but the relationship FLIPPED this run:
                    the rollup now sits BELOW the headline (was above on 08-03 / 08-02 / 08-01); BOTH panels
                    RE-GAMMAED EVEN MORE net-LONG-gamma (headline +38.1M → +68.6M, rollup +48.86M → +56.49M)
                    and the 0DTE front stayed positive (4AUG +5.75M) — the dealer book is an even stronger
                    dampener now · authoritative signed walls (gex_summary.json) top_pos $70k +17.29M /
                    top_neg $60k −22.51M (crash-put); the panel&rsquo;s signed Top-10 Gamma Walls table is
                    loaded and cited — $70k +17.29M, $68k +12.45M, $67k +10.91M, $66k +10.90M, $64k +9.76M,
                    $72k +8.73M, $65k +8.68M, $80k +7.71M (the positive shelf overhead) vs $62k −9.73M / $60k
                    −22.51M (the negatives below) — only the non-top-10 interior remainder was not extracted,
                    claims held ≤ data
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-04 00:01Z
                  </td>
                  <td className="dn-flag">~6-min lag · 7d 1h bars · 22 assets · 167 rows · archived</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-03 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.87h render lag · 10Y JUMPED +7.0bp to 4.75% (the rates complex is the ONLY thing that
                    moved today — reclaim-long rates filter still FALSE and now 20bp away, FURTHER from
                    firing than 08-03&rsquo;s 13bp), TIPS +6.0bp to 2.47%, 5Y5Y 2.31% (+1bp), 10Y breakeven
                    ~2.27%, HY OAS 2.84% (−3.0bp, stale 4d) · MOVE fetch-failed a FOURTH straight render
                    (unavailable) · DXY 99.62 (carried, −0.18), USD/JPY 157.41 (−0.17, yen firm); Fed net liq
                    $5.825T carried (weekly, no fresh print)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-08-04 00:05Z (in-progress close $63,543.30)</td>
                  <td className="dn-flag">
                    ~2-min anchor lag · offsets recomputed vs live spot $63,534.01 · full
                    btcusdt_1m_*.parquet glob (8 files, 362 weekly bars, 2019–2026) — the matrix stays NO
                    LONGER fully inverted: D-SMA50 $63,279 is the single POSITIVE daily offset (+0.40%);
                    the settled W-SMA200 $63,533 is marginally positive too (+0.001%, spot pinned on it), and
                    every other daily and weekly MA is negative · last COMPLETED daily close 08-03
                    $63,497.20 (a down-close that slipped $53 under the 08-02 $63,550.00 close and $36 under
                    the settled W-SMA200 $63,533.52, but HELD above the old $63,311 floor and the $62,907
                    flip — NOT a decisive bear break)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W support watch</td>
                  <td className="dn-v-cell">independent full-glob parquet recompute this run (362 weekly bars) · ma200w_trap_watch_state.json NOT cited as an anchored source (mutable sidecar, not archived at the 00:07 anchor)</td>
                  <td className="dn-flag">
                    the 200W settlement is an INDEPENDENT full-glob parquet recompute this run (362
                    weekly bars) — the ma200w_trap_watch_state.json sidecar was NOT archived into the
                    00:07 snapshot and is not cited as an anchored source. The recompute carries the SAME
                    settlement as 08-03 (no new weekly close until Sunday 08-09): the last completed week
                    (ending 2026-08-02) closed $63,550.00 against W-SMA200 $63,533.52 — ABOVE the floor by
                    $16.48, the FIFTH consecutive weekly close above the 200W (07-05, 07-12, 07-19, 07-26,
                    08-02). The in-progress week (ending 2026-08-09) W-SMA200 sits $63,754.09 with the 08-04
                    in-progress close $63,543.30 below it by $210.79
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
              <span className="dn-v">+3.54%</span>
              <span className="dn-src">live · raw 0.003236 field × 1095 · OFF the cap (was pinned +10.95% on 08-03) · 24h mean +4.93% ann · min −1.593% ann (@ 08-04 04:53 BJ / 08-03 20:53Z) · max +10.95% (cap) · 194 / 1441 NEGATIVE rows (first 08-04 02:37 BJ / 08-03 18:37Z, last 08-04 05:50 BJ / 08-03 21:50Z) — the crowded-long carry FLUSHED this window, a hard break from the 5 straight days at zero negatives into 08-03</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">re-pinned cap → FLUSHED · +4.93% mean · 194 negatives</span>
              <span className="dn-src">range −1.593% / +10.95% ann · cap rows 379/1441 (last cap 08-03 14:25 BJ — mostly early carryover from the 08-03 pin) · the long carry that re-pinned to the cap on 08-03 flushed hard into this session: 194 negative-funding rows appeared (0 on 08-03), the leverage the reclaim added came back off</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−0.58% (−628.7 BTC)</span>
              <span className="dn-src">live · 109,193.7 → 108,565.1 · a CONTRACTION (vs 08-03&rsquo;s +590 expansion) into a flat +0.16% price · the 24h flow split spot-bid / futures-offered again (spotCVD +5,153.0 vs futCVD −2,312.3 / taker −2,312.3 / big +111.3 across 612 active minutes, 932 big prints) — spot accumulation, futures distribute, positions net came OFF</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v">59.94 / 40.06</span>
              <span className="dn-src">live_db `mkt_long_pct` · 24h high 68.85 (08-03 18:03 BJ / 08-03 10:03Z) low 59.26 (08-04 05:51 BJ / 08-03 21:51Z) — de-crowded HARD through the 60 line from 08-03&rsquo;s 65.87: the retail long crowd finally cleared out, the first sub-60 read in the recovery</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v stale">−8,995 (net SHORT — DATA-IMPAIRED)</span>
              <span className="dn-src">live · long 15,538.3 − short 24,534.1 = −8,995.8 · DATA-IMPAIRED — a single suspect +10,205.3 BTC minute @ 08-03 14:36 BJ (the recurring ~BJ-14:00 re-sync) accounts for ~100% of the apparent cover; ex-artifact the tape is essentially FLAT (ΔNet −153.2). The desk CANNOT certify this as a genuine SM cover · 24h range corrupted (max −7,884.7 @ 08-03 21:36 BJ, min −19,162.4 @ 08-03 09:56 BJ — spans the artifact); SM tail frozen the last ~2 min</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 24h-ago</span>
              <span className="dn-v stale">−19,047 → −8,995 (+10,052 apparent · ARTIFACT)</span>
              <span className="dn-src">|Δnet|/prior_net = 10,052.1 / 19,047.9 = 52.8% APPARENT · Δlong +4,514.3, Δshort −5,537.8 — BUT one suspect minute (+10,205.3 @ 08-03 14:36 BJ) is ~100% of it; ex-artifact ΔNet = −153.2 (FLAT). The &ldquo;cover&rdquo; the scout&rsquo;s bull path needs is UN-CERTIFIABLE this run — a data-impairment, not a certified roll</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.3% / 29.14%</span>
              <span className="dn-src">GEX median IV · chain-median across 826 instruments (was 866 on 08-03), not a tradable spread · 30D close-to-close RV = logret.std × √365 × 100 on 30 daily returns (parquet last bar 00:05Z) · ~+11.16pt chain richness · 29-return alt 29.56%</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+1.00% (ABOVE flip)</span>
              <span className="dn-src">flip $62,907 (dropped $108 from 08-03&rsquo;s $63,015) · vs live spot $63,534.01 (+1.00%; 63,534.01/62,907.20 − 1 = +0.996%) / GEX file Deribit idx $63,829 (+1.47%; 63,829.46/62,907.20 − 1 = +1.466%) — BOTH references sit ABOVE the flip · headline +68.6M / rollup +56.49M — RE-GAMMAED EVEN MORE positive from 08-03&rsquo;s +38.1M / +48.86M: the dampener strengthened</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The contested reclaim STALLED into a coil at the floor — neither the bull cap-close nor the
                bear floor-break resolved, and the one tell that would arm the scout, a clean smart-money
                cover, is UN-READABLE because the ~BJ-14:00 re-sync artifact corrupted the SM tape again
              </span>. The 08-03 note turned on whether the reclaim extends to a D-EMA50 cap close ($64,657)
              with SM COVERING (arms the scout) or the bid fails below the risen $63,533 floor with SM still
              short and the carry flushing (re-arms the chase-short). Neither fired. Spot prints{' '}
              <span className="dn-tag">$63,534</span> live,{' '}
              <span className="dn-tag bull">+0.16%</span> on 24h — dead flat — pinned within a hair of the
              settled 200W $63,533.52. The tape poked a 24h high{' '}
              <span className="dn-tag">$64,079.9</span> (short of the $64,614 cap) then pulled back{' '}
              <span className="dn-tag bear">−0.53% in the last 4h</span>, and wicked a 24h low{' '}
              <span className="dn-tag">$62,310.01</span> (below the flip/floor band) before recovering to
              pin the floor. The 08-03 daily bar CLOSED{' '}
              <span className="dn-tag bear">$63,497.20</span> — a down-close $53 under the 08-02 close and
              $36 under the settled W-SMA200, but HELD above the old $63,311 floor and the $62,907 flip: a
              stall, not a break. <span className="dn-em">The book that would decide it went dark</span>:{' '}
              <span className="dn-signal">
                the SM tape shows an apparent +10,052 cover to net −8,995, but a single suspect minute
                (+10,205 @ 08-03 14:36 BJ, the recurring re-sync) is ~100% of it — ex-artifact the tape is
                FLAT (ΔNet −153)
              </span>, so the scout&rsquo;s confirming tell cannot be certified. Around that dark spot, the
              blockers EASED: <span className="dn-tag bull">funding FLUSHED</span> (194 negative rows vs 0
              for five straight days — the pinned-long carry finally came off),{' '}
              <span className="dn-tag bull">retail cleared through 60 to 59.94</span> (the long crowd
              flushed), and the <span className="dn-tag bull">1h ⚡TD9 SELL that warned overbought on 08-03
              is GONE</span>. But the dealer book re-gammaed EVEN MORE positive — headline{' '}
              <span className="dn-tag">+38.1M → +68.6M</span>, rollup{' '}
              <span className="dn-tag">+48.86M → +56.49M</span>, spot +1.00% above the $62,907 flip — a
              stronger two-sided dampener, and <span className="dn-tag bear">OI CONTRACTED −0.58%</span> as
              positions came off, while <span className="dn-tag bear">10Y JUMPED +7bp to 4.75%</span>
              (rates filter now 20bp FALSE, further from firing) and BTC LAGGED a risk index that ran
              +2.7–3.3% on the 7d while BTC sat flat. The MTF net-read is{' '}
              <span className="dn-tag bear">&ldquo;sell the bounce&rdquo;</span> with the top-div cluster
              growing to five frames, but the golden-cross cluster and the HTF bottom-div cluster
              (8h/12h/1w) stay intact. The book stays FLAT: the chase-short is still INVALIDATED (no sealed
              break, gamma an even stronger dampener); the cover-bounce scout REVIVES further on the eased
              blockers but does NOT arm — the cap is unmet, the SM cover is un-certifiable, and rates moved
              further false. This note turns on whether a CLEAN SM cover finally prints alongside a cap
              close — or whether the coil breaks the flip/old-floor band on a clean SM short with gamma
              flipping negative.
            </p>
            <p>
              BTC prints <span className="dn-tag">$63,534</span> live,{' '}
              <span className="dn-tag bull">+0.16%</span> on 24h, inside a{' '}
              <span className="dn-tag">$64,079.90 / $62,310.01</span> range (high @ 08-04 03:35 BJ /
              08-03 19:35Z, low @ 08-03 16:34 BJ / 08-03 08:34Z) — a wide two-way session that resolved
              back to flat, pinned to the settled 200W.{' '}
              <span className="dn-signal">The reclaim neither extended to the cap nor failed the floor — it
              coiled</span>: 07-27 $63,720.80 → 07-28 $63,903.60 → 07-29 $63,958.90 → 07-30 $64,750.00 →{' '}
              <span className="dn-tag bear">07-31 $62,859.90</span> →{' '}
              <span className="dn-tag bear">08-01 $62,792.30</span> →{' '}
              <span className="dn-tag bull">08-02 $63,550.00</span> (the up-close that reclaimed the floor)
              →{' '}
              <span className="dn-tag bear">08-03 $63,497.20</span> (a completed down-close, $53 under the
              08-02 close and $36 under the settled 200W, but above the old floor / flip), with the
              in-progress 08-04 bar (parquet last bar 00:05Z) at{' '}
              <span className="dn-tag">$63,543.30</span> — the daily tape is now three closes hugging the
              $63.5k floor band ($63,550 / $63,497 / $63,543 in-progress), a flat coil, not a trend.{' '}
              <span className="dn-em">
                The MA matrix stays no-longer-fully-inverted: D-SMA50 $63,279 (+0.40%) is the single
                positive daily offset — the first reclaimed support back under spot — and the settled
                W-SMA200 $63,533 (+0.001%) is marginally positive too, spot pinned on it, while every other
                daily and weekly MA prints overhead. The near band is a tight cluster of just-reclaimed
                support and just-overhead resistance, spot pinned in the middle:{' '}
                <span className="dn-tag bull">0-γ flip $62,907 (+1.00%, spot ABOVE)</span>,{' '}
                <span className="dn-tag bull">D-SMA50 $63,279 (+0.40%, reclaimed)</span>,{' '}
                <span className="dn-tag bull">old floor $63,311 (+0.35%, reclaimed)</span>,{' '}
                <span className="dn-tag">settled 200W $63,533 (+0.001%, PINNED — spot is on it)</span>,
                then overhead{' '}
                <span className="dn-tag bear">in-progress-week W-SMA200 $63,754 (−0.35%)</span>,{' '}
                <span className="dn-tag bear">D-EMA20 $63,906 (−0.58%)</span>,{' '}
                <span className="dn-tag bear">D-SMA20 $64,326 (−1.23%)</span>, and the{' '}
                <span className="dn-tag bear">D-EMA50 cap $64,614 (−1.67%)</span> (the scout&rsquo;s
                arming line, ticked down from 08-03&rsquo;s $64,657).
              </span>{' '}
              The 200W cycle floor carries the SAME settlement as 08-03 (no new weekly close until Sunday
              08-09) — an independent full-glob parquet recompute this run (362 weekly bars), not a cited
              state read: the last completed week (ending 08-02) closed $63,550.00 against W-SMA200
              $63,533.52, a close ABOVE by $16.48 and the fifth consecutive above the 200W. The in-progress
              week (ending 08-09) W-SMA200 sits $63,754.09 with the 08-04 in-progress close $63,543.30 below
              it by $210.79. So the daily floor broke (07-31/08-01) and reclaimed (08-02), the weekly break
              never sealed, and price has since coiled ON the risen floor for three daily closes.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · SM read DATA-IMPAIRED — the apparent +10,052 cover to net −8,995 is ~100% one suspect minute (+10,205 @ 08-03 14:36 BJ, the ~BJ-14:00 re-sync); ex-artifact FLAT (ΔNet −153), the scout&rsquo;s confirming cover CANNOT be certified · funding FLUSHED (194 negative rows vs 0 for 5 days) — the pinned-long carry came off · retail cleared through 60 to 59.94 · OI CONTRACTED −0.58% into a flat +0.16% price · the 24h flow split spot-bid / futures-offered</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important read of the day is a NON-read: the SM tape that would confirm or
                deny the scout&rsquo;s cover went dark, corrupted by the recurring ~BJ-14:00 re-sync artifact
                for the second time in three sessions
              </span>. The apparent move is a big cover — net −19,047.9 (24h-ago) → −8,995.8 (snap), ΔNet
              +10,052.1, |Δ|/prior_net 52.8%, with Δlong +4,514.3 and Δshort −5,537.8. But a single
              one-minute step of{' '}
              <span className="dn-tag stale">+10,205.3 BTC at 08-03 14:36 BJ (08-03 06:36Z)</span> — the same
              feed re-sync that produced the 08-02 −22,911 minute and the 07-31 +6,369 minute — is ~100% of
              the entire swing; ex-artifact the 24h ΔNet is{' '}
              <span className="dn-tag stale">−153.2 (essentially FLAT)</span>. The 24h range is corrupted by
              the same step (max −7,884.7 @ 08-03 21:36 BJ, min −19,162.4 @ 08-03 09:56 BJ, spanning the
              artifact), and the SM tail is frozen the last ~2 min.{' '}
              <span className="dn-em">
                So the desk CANNOT certify an SM cover this run — the tape neither confirms the buyer of
                record turned buyer (the scout&rsquo;s bull tell) nor that it stayed short (the
                chase-short&rsquo;s tell). This is the same data-impairment that gutted the 08-02 read, and
                it lands on exactly the leg both trades hinge on. Read ex-artifact, SM is FLAT — neither
                covering nor adding — which is consistent with the price coil, but it is a non-signal, not a
                confirmation. The scout&rsquo;s cover tell is un-readable.
              </span>
            </p>

            <p>
              The rest of the position book reads a stall with the long carry finally flushing — the
              constructive change under a dark SM tape.{' '}
              <span className="dn-signal">
                OI CONTRACTED into a flat price with spot bought and futures sold — positions came off, not
                on
              </span>. Spot was <span className="dn-tag bull">+0.16%</span> on the 24h (dead flat) with OI{' '}
              <span className="dn-tag bear">−628.7 BTC (−0.58%)</span> — 109,193.7 → 108,565.1, a
              contraction (vs 08-03&rsquo;s +590 expansion). The 24h aggressor tape SPLIT: spot CVD{' '}
              <span className="dn-tag bull">+5,153.0</span> (spot accumulation, cb_cvd 25,747.3 → 30,900.3,
              no reset-scale step — eleven &gt;120 BTC one-minute steps, max +139.9) against futures CVD{' '}
              <span className="dn-tag bear">−2,312.3</span>, taker-net{' '}
              <span className="dn-tag bear">−2,312.3</span> (fut_cvd Δ reconciles exactly to the summed
              taker-net) and big-net{' '}
              <span className="dn-tag bull">+111.3 BTC (932 prints across 612 active minutes)</span> — spot
              bought, futures sold, big-prints marginally net-bought, price flat.{' '}
              <span className="dn-em">
                Big-net flipped positive this run (+111.3 vs 08-03&rsquo;s −1,935) — the futures offer
                thinned even as CVD stayed offered. Perp trades a −$58.76 discount to spot at the snap (24h
                mean −$74.34, range −$139.90 / +$61.97 — two rows briefly went to premium), a persistent
                perp discount held through the coil, so the tape stays spot-led. The read is a stall on
                contracting OI with the futures offer thinning — the reclaim is neither being pressed higher
                nor unwound hard, it is coiling as leverage bleeds off both sides.
              </span>
            </p>

            <p>
              The leverage and crowding reads are the clean constructive change: the long carry that
              re-pinned to the cap on 08-03 FLUSHED, and retail cleared through 60.{' '}
              <span className="dn-signal">
                Funding came OFF the +10.95% cap and printed 194 negative rows — the first negative funding
                in six days — while retail de-crowded hard through the 60 line to 59.94
              </span>: live funding <span className="dn-tag">+3.54% ann</span> (raw 0.003236 field × 1095,
              OFF the cap), 24h mean{' '}
              <span className="dn-tag">+4.93% ann</span> (cooled from 08-03&rsquo;s +9.16%), min{' '}
              <span className="dn-tag bull">−1.593% ann (@ 08-04 04:53 BJ / 08-03 20:53Z)</span>, cap rows{' '}
              <span className="dn-tag">379 / 1441</span> (last cap 08-03 14:25 BJ — mostly early carryover
              from the 08-03 pin), and{' '}
              <span className="dn-tag bull">194 / 1441 NEGATIVE rows</span> (first 08-04 02:37 BJ, last 08-04
              05:50 BJ) — the pinned-long carry finally came off after five straight days at zero negatives.
              Retail <span className="dn-tag bull">mkt_long_pct 59.94</span> (24h high 68.85 @ 08-03 18:03
              BJ, low 59.26 @ 08-04 05:51 BJ) — de-crowded through 60 from 08-03&rsquo;s 65.87, the first
              sub-60 read in the recovery.{' '}
              <span className="dn-em">This is the read that most improves the scout&rsquo;s backdrop: the
              re-heated long carry the 08-03 note flagged as cascade fuel has flushed, and the retail long
              crowd cleared — a genuine base builds when leverage flushes and crowding clears, and both
              happened. But a flush is a necessary, not a sufficient, condition: it removes a downside
              blocker, it does not by itself arm the scout, which still needs the cap close and a certified
              SM cover the tape cannot supply this run.</span>
            </p>

            <p>
              Windowed flow is a flat 24h, a soft last-4h that rolled the intraday high back over, and a
              flat 1h into the snap. 24h: price{' '}
              <span className="dn-tag bull">+0.156%</span>, OI{' '}
              <span className="dn-tag bear">−628.7 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +5,153.0</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −2,312.3</span>, big-print{' '}
              <span className="dn-tag bull">+111.3 BTC / 932 prints across 612 active minutes</span>,
              taker-net{' '}
              <span className="dn-tag bear">−2,312.3</span> —{' '}
              <span className="dn-em">spot bid / futures offered, price flat, positions off</span>. 4h (into
              snapshot): price{' '}
              <span className="dn-tag bear">−0.526%</span>, OI{' '}
              <span className="dn-tag bull">+85.0 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −1,401.8</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −1,094.4</span>, big-print{' '}
              <span className="dn-tag bear">−169.6 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−1,094.4</span> — the pullback that rolled the $64,079.9 high
              back over, offered on both books. 1h: price{' '}
              <span className="dn-tag">−0.002%</span> (flat), OI{' '}
              <span className="dn-tag bull">+44.5 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +74.4</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +74.6</span>, big-print{' '}
              <span className="dn-tag bull">+105.5 BTC</span>, taker-net{' '}
              <span className="dn-tag bull">+74.6</span> —{' '}
              <em>a small two-sided bid into the snap, flat</em>.{' '}
              <span className="dn-em">
                Baseline convention: the 24h block uses the same-clock prior-day row (08-03 08:07 BJ, 1,440
                one-minute intervals back / 1,441 rows inclusive); the 4h and 1h sub-window blocks use
                prior-row inclusive baselines (08-04 04:07 / 07:07 BJ through the 08:07 pin). The series is
                contiguous across these windows this run, so those reproduce the same-clock endpoints — no
                baseline discrepancy, and NO CVD reset signature in the 24h window (fut_cvd endpoint Δ
                −2,312.3 reconciles to the summed taker-net −2,312.3), so the CVD deltas are raw endpoint
                differences.
              </span>
            </p>
            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF slipped to 2 long / 6 short / 2 neutral · regime holds 5/9 周期动量 (JT≥0) trend-continuation but the NET READ is 多周期共振偏空·反弹偏卖 &ldquo;sell the bounce&rdquo; · the 1h ⚡TD9 SELL from 08-03 is GONE (now Buy 4) but the top-div cluster grew to 5 frames (15m/30m/1h/4h/1d) · the golden-cross cluster (1h/4h/8h/3d/1w) and the HTF bottom-div cluster (8h/12h/1w) stay intact · MA matrix no-longer-fully-inverted, D-SMA50 the single reclaimed support, spot pinned on the 200W</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF panel slipped a notch and its net-read hardened to &ldquo;sell the bounce&rdquo;
                even as the regime tag holds trend-continuation — a coil with a growing top-div warning and
                an intact golden-cross / HTF-bottom-div counterweight
              </span>. The 00:01Z scan reads{' '}
              <span className="dn-tag bear">2 long / 6 short / 2 neutral</span> across 10 TFs (was 2/7/1 on
              08-03). The regime tag holds{' '}
              <span className="dn-tag">5/9 cycle-momentum (JT≥0) — trend-continuation</span>, but the panel
              net-read is{' '}
              <span className="dn-tag bear">多周期共振偏空·反弹偏卖 (multi-TF resonance leans short — sell
              the bounce)</span>. The constructive change from 08-03: the{' '}
              <span className="dn-tag bull">1h ⚡TD9 SELL that warned overbought is GONE</span> (the 1h reset
              to Buy 4), and the golden-cross cluster persists — 1h water-down golden 11b, 4h golden 3b, 8h
              water-down golden 2b, 3d golden 8b, 1w water-down golden 2b. The HTF bottom-div cluster{' '}
              <span className="dn-tag bull">8h / 12h / 1w</span> stays intact, and the 1M keeps its{' '}
              <span className="dn-tag bull">⚡TD9 BUY</span>. But the warning grew:{' '}
              <span className="dn-tag bear">the top-div cluster widened to five frames (15m/30m/1h/4h/1d)</span>,
              the 15m carries a water-up death cross 26b (the fast frame rolled over), the 30m a water-up
              death 6b, and the 4h/8h still sit below cloud.{' '}
              <span className="dn-em">
                So the structure is a coil with two-sided evidence: a golden-cross cluster through 1h–1w and
                deep-frame TD9 BUYs / HTF bottom-div on the bull side, a five-frame top-div cluster and a
                &ldquo;sell the bounce&rdquo; resonance tag on the bear side, and the fast frames rolled
                over. The removal of the 1h TD9 SELL eased one overbought flag, but the top-div cluster
                growing to five frames replaced it with a broader stalled-momentum warning. This is a
                bounce that has lost its upside impulse without yet turning down — the structural picture of
                the coil.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,464</td><td className="num bear">41</td><td className="bear">death (water-up) 26b</td><td className="neut">in cloud 63.2k–63.5k 2b</td><td>Buy 3</td><td>TOP+BOT-div</td></tr>
                <tr><td>30m</td><td className="num">63,464</td><td className="num">49</td><td className="bear">death (water-up) 6b</td><td className="bull">above ↓63.0k 20b</td><td>Buy 8</td><td>TOP+BOT-div</td></tr>
                <tr><td>1h</td><td className="num">63,464</td><td className="num bull">53</td><td className="bull">golden (water-dn) 11b</td><td className="bull">above ↓63.3k 11b</td><td>Buy 4</td><td>TOP-div</td></tr>
                <tr><td>4h</td><td className="num">63,464</td><td className="num">51</td><td className="bull">golden (water-dn) 3b</td><td className="bear">below ↑64.2k 24b</td><td>Sell 4</td><td>TOP+BOT-div</td></tr>
                <tr><td>8h</td><td className="num">63,464</td><td className="num">48</td><td className="bull">golden (water-dn) 2b</td><td className="bear">below ↑64.4k 12b</td><td>Buy 1</td><td>BOT-div</td></tr>
                <tr><td>12h</td><td className="num">63,464</td><td className="num">47</td><td className="neut">death (cont.)</td><td className="neut">in cloud 62.3k–64.8k 7b</td><td>Sell 2</td><td>BOT-div</td></tr>
                <tr><td>1d</td><td className="num">63,464</td><td className="num">47</td><td className="bear">death (water-up) 8b</td><td className="neut">in cloud 61.9k–68.0k 15b</td><td>Sell 1</td><td>TOP-div</td></tr>
                <tr><td>3d</td><td className="num">63,464</td><td className="num">44</td><td className="bull">golden (water-dn) 8b</td><td className="bear">below ↑76.4k 21b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,464</td><td className="num">39</td><td className="bull">golden (water-dn) 2b</td><td className="bear">below ↑85.9k 27b</td><td>Buy 2</td><td>BOT-div</td></tr>
                <tr><td>1M</td><td className="num">63,464</td><td className="num">43.5</td><td className="neut">—</td><td className="bull">above ↓47.4k</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 08:01 BJ scan (00:01Z; rolling latest file, archived
                    verbatim at /opt/desk-note/snapshots/2026-08-04-0007/). Header alerts:{' '}
                    <em>⚡ TD9 BUY 1M (oversold reversal hint); the 08-03 1h ⚡ TD9 SELL is GONE</em>,{' '}
                    <em>top-div 5: 15m/30m/1h/4h/1d · bottom-div 6: 15m/30m/4h/8h/12h/1w</em>,{' '}
                    <em>8h water-down golden 2b, 1w water-down golden 2b</em>,{' '}
                    <em>regime 5/9 cycle-momentum (JT≥0) — trend-continuation; net-read 多周期共振偏空·反弹偏卖 &ldquo;sell the bounce&rdquo;</em>,
                    count <em>2 long / 6 short / 2 neutral</em>. Scan spot $63,464, 24h −0.14%, 24h H/L
                    $64,059 / $62,268, qVol $9.61B (the live-tape anchor at 00:07Z reads spot $63,534.01 —
                    the ~$70 gap is the 6-minute source lag plus the spot-vs-OHLCV/perp basis). Closes are
                    in-progress bars; treat every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix stays no-longer-fully-inverted — spot is pinned on the settled 200W with one
              reclaimed daily support just under it. Spot $63,534 sits ABOVE three near lines, ON the 200W,
              and below the rest:{' '}
              <span className="dn-tag bull">0-γ flip $62,907 (+1.00%)</span>,{' '}
              <span className="dn-tag bull">D-SMA50 $63,279 (+0.40%)</span> — the single positive daily MA
              offset, the first reclaimed support — and{' '}
              <span className="dn-tag bull">old floor $63,311 (+0.35%, reclaimed)</span>, then the{' '}
              <span className="dn-tag">settled 200W floor $63,533 (+0.001%, spot PINNED on it)</span>.
              Immediately overhead is the band that caps the coil:{' '}
              <span className="dn-tag bear">in-progress-week W-SMA200 $63,754 (−0.35%)</span>,{' '}
              <span className="dn-tag bear">D-EMA20 $63,906 (−0.58%)</span>,{' '}
              <span className="dn-tag bear">D-SMA20 $64,326 (−1.23%)</span>,{' '}
              <span className="dn-tag bear">D-EMA50 cap $64,614 (−1.67%)</span> — the scout&rsquo;s arming
              line. Above that:{' '}
              <span className="dn-tag bear">D-EMA100 $67,094 (−5.31%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $68,484 (−7.23%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $68,562 (−7.33%; seed)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $68,859 (−7.73%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,162 (−8.14%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,503 (−8.59%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $69,889 (−9.09%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $70,813 (−10.28%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $72,655 (−12.55%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $73,963 (−14.10%; seed)</span>. Far above and disused:
              W-SMA150 $76,873 (−17.35%), W-EMA50 $77,763 (−18.30%), W-EMA100 $78,750 (−19.32%), W-SMA50
              $83,332 (−23.76%), W-SMA100 $88,649 (−28.33%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-08-04 00:05Z (in-progress close $63,543.30); offsets
                recomputed against live spot $63,534.01. Displayed MA levels are $-rounded; offsets
                computed from exact series values. The full-glob recompute (8 files, 362 weekly bars) makes
                every weekly MA computable — W-SMA200 $63,754.09 (in-progress week) / $63,533.52 (last
                completed week — the risen settled floor spot is pinned on); W-EMA150 $73,963 and W-EMA200
                $68,562 seed from available history and print above spot. Daily closes: 07-27 $63,720.80,
                07-28 $63,903.60, 07-29 $63,958.90, 07-30 $64,750.00, 07-31 $62,859.90, 08-01 $62,792.30,
                08-02 $63,550.00 (the up-close that reclaimed the floor), 08-03 $63,497.20 (a completed
                down-close that held above the old floor / flip), 08-04 (in-progress) $63,543.30 — three
                closes coiling on the $63.5k floor band.
              </span>
            </p>
            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book RE-GAMMAED EVEN MORE positive — headline +68.6M (was +38.1M) / rollup +56.49M (was +48.86M) · spot reclaimed further above the $62,907 flip (+1.00%) so the chase-short&rsquo;s gamma amplifier stays GONE and the dampener STRENGTHENED · the 0DTE front stayed positive (4AUG +5.75M) · authoritative walls top_pos $70k +17.29M / top_neg $60k −22.51M (crash-put); the panel&rsquo;s signed Top-10 wall ladder is loaded — a $64k–$72k positive shelf overhead (plus far $80k) vs $62k −9.73M / $60k −22.51M negatives below</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book strengthened the dampener it built on 08-03 — it re-gammaed even more
                positive and spot sits +1.00% above the flip, so the negative-gamma amplifier the
                chase-short leaned on through the whole floor break stays fully gone and the two-sided
                cushion is heavier
              </span>. Headline Total GEX / 1% move is{' '}
              <span className="dn-tag bull">+68.6M</span> (was +38.1M on 08-03), with the by-expiry rollup
              at <span className="dn-tag bull">+56.49M</span> (= gex_summary.json net_gex $56,492,041.90,
              was +48.86M on 08-03) — a ~12.1M non-reconciling headline-vs-rollup gap, disclosed per DN-003
              lineage, with the relationship FLIPPED this run: the rollup now sits BELOW the headline (it was
              above on 08-03 / 08-02 / 08-01). Both panels read strong net-LONG-gamma (dampening), stronger
              than 08-03.{' '}
              <span className="dn-em">So dealers damp a move here even harder — a positive-gamma cushion
              that caps both a squeeze up and a break down, the opposite of the amplifier the chase-short
              wanted below the floor.</span> The 0-γ flip DROPPED{' '}
              <span className="dn-tag">$63,015 → $62,907 (−$108)</span>, and spot $63,534 sits{' '}
              <span className="dn-tag bull">+1.00% ABOVE flip</span> on spot-denominated math (63,534.01 /
              62,907.20 − 1 = +0.996%); the GEX file&rsquo;s Deribit-index reference $63,829 sits{' '}
              <span className="dn-tag bull">+1.47% above</span> (63,829.46 / 62,907.20 − 1 = +1.466%) — BOTH
              references are above the flip, spot further into positive gamma than 08-03&rsquo;s +0.67%. On
              the wall map, the authoritative extremes from gex_summary.json are{' '}
              <span className="dn-tag bull">$70k +17.29M</span> (the heaviest positive wall, overhead) and{' '}
              <span className="dn-tag bear">$60k −22.51M</span> (the crash-put, the heaviest negative,
              below).{' '}
              <span className="dn-em">
                The panel&rsquo;s signed Top-10 Gamma Walls table is loaded this run, so the interior is
                mapped, not just the two extremes: overhead a positive shelf runs $64k +9.76M, $65k +8.68M,
                $66k +10.90M, $67k +10.91M, $68k +12.45M, $70k +17.29M (heaviest), $72k +8.73M, plus a far
                $80k +7.71M; below, the negatives are $62k −9.73M and $60k −22.51M (the crash-put). Only the
                non-top-10 interior remainder was not extracted, so claims are held ≤ data. Directionally
                unchanged from 08-03 — a heaviest positive wall overhead at $70k and a $60k crash-put below,
                with spot pinned in a positive-gamma pocket above the flip, but the near walls now resolve: a
                $64k positive wall just overhead and a $62k negative just below bracket the coil. The
                trapdoor below is still there but the
                door is heavier: a break down has to first push back through the strengthened positive
                cushion and the flip before the $60k crash-put amplifies; a squeeze up runs into the $70k
                positive wall. The book is a two-sided DAMPENER, heavier than 08-03, not the one-sided
                amplifier the chase-short needed.
              </span>{' '}
              By expiry the front stayed positive:{' '}
              <span className="dn-tag bull">4AUG26 0.3DTE +5.75M</span> (the 0DTE front, positive), 5AUG 1.3
              +4.64M, 6AUG 2.3 +1.53M,{' '}
              <span className="dn-tag bull">7AUG 3.3 +8.28M</span>, 14AUG 10.3 +3.09M,{' '}
              <span className="dn-tag bull">21AUG 17.3 +8.28M</span>,{' '}
              <span className="dn-tag bull">28AUG 24.3 +14.12M</span> (the heaviest positive chunk), 25SEP
              52.3 +6.48M, 30OCT 87.3 +0.88M, 25DEC 143.3 +2.13M, 26MAR27 234.3 +0.69M, 25JUN27 325.3 +0.63M
              — the displayed by-expiry components sum to{' '}
              <span className="dn-tag bull">+56.50M</span> (component-rounding; the exact net_gex
              $56,492,041.90 = +56.49M rollup). The front 0.3–3.3DTE
              cluster (4AUG +5.75M + 5AUG +4.64M + 6AUG +1.53M + 7AUG +8.28M) nets{' '}
              <span className="dn-tag bull">+20.20M</span> — a solidly positive front, so the near-dated
              amplifier stays gone and the front is a dampener too, heavier than 08-03&rsquo;s +10.17M.
            </p>

            <p>
              IV median across the option chain is{' '}
              <span className="dn-tag">40.3%</span> (essentially unchanged from 08-03&rsquo;s 40.4%) against
              30D close-to-close RV of{' '}
              <span className="dn-tag">29.14%</span> — chain-level richness{' '}
              <span className="dn-tag">~+11.16pt</span>. A chain-median across N instruments (826 today,
              down from 866), <span className="dn-em">not</span> a tradable spread; expiry-/strike-level
              vega, skew and term structure remain not loaded; the vol read stays framework-only (chain
              call OI 219,972.3 / put OI 114,986.6 for context only). RV methodology: 30D close-to-close,
              logret.std × √365 × 100 on the last 30 daily log returns (= 31 consecutive daily closes)
              anchored to parquet last bar 2026-08-04 00:05Z; the 29-return alt reads 29.56%.
            </p>
            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · 10Y JUMPED +7.0bp to 4.75% (reclaim-long rates filter now 20bp FALSE — FURTHER from firing than 08-03&rsquo;s 13bp) · TIPS +6.0bp to 2.47%, the rates complex is the ONLY thing that moved · HY OAS 2.84% (stale 4d), NFCI −0.554 RISK-ON (stale 10d) · MOVE fetch-failed a FOURTH straight render · DXY 99.62 / yen firm, both carried · rates the load-bearing tightening, the coil is BTC-internal</span>
            </h2>

            <p>
              <span className="dn-signal">
                The only thing that moved on the macro tape is the load-bearing rates line — and it moved
                the WRONG way for the scout: 10Y jumped +7bp, pushing the reclaim-long rates filter further
                from firing
              </span>. Dashboard render is 2026-08-03 22:15Z, ~1.87h before the snapshot. US 10Y nominal{' '}
              <span className="dn-tag bear">4.75% (+7.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.69</span>, episodic z{' '}
              <span className="dn-tag">+1.92</span> — EXTREME RISK-OFF, and the biggest single move on the
              board. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.47% (+6.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.93</span> — EXTREME RISK-OFF, up with nominals. 5Y5Y BE
              inflation{' '}
              <span className="dn-tag">2.31% (+1.0bp)</span>, 10Y breakeven ~2.27% — flat. HY OAS{' '}
              <span className="dn-tag">2.84% (−3.0bp, stale 4d)</span>, regime z{' '}
              <span className="dn-tag">−0.25</span> — neutral. MOVE bond vol{' '}
              <span className="dn-tag stale">unavailable (fetch failed a fourth render)</span>. DXY{' '}
              <span className="dn-tag">99.62 (−0.18, carried)</span>, regime z +0.61, episodic z −2.84 —
              tight; USD/JPY{' '}
              <span className="dn-tag">157.41 (−0.17, yen firm)</span>; Fed net liquidity{' '}
              <span className="dn-tag bear">$5.825T (−0.092T, weekly, carried)</span>, regime z −1.09,
              episodic z −2.47 (RISK-OFF). US-JP 10Y spread{' '}
              <span className="dn-tag">2.08% (+7.0bp)</span>. NFCI{' '}
              <span className="dn-tag bull">−0.554 (stale 10d)</span>, RISK-ON. USD/CNY 6.7464 loose.{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) is FALSE at 4.75% and now 20bp from
                firing — FURTHER out than 08-03&rsquo;s 13bp, the wrong direction for the scout&rsquo;s rates
                leg, which reads FALSE and moved against. The rates complex (10Y / TIPS / US-JP spread all
                +6–7bp) is the ONLY thing that moved today; credit is stale-neutral, NFCI stale-loose, the
                dollar and yen carried, Fed net-liquidity carried RISK-OFF, and MOVE is dark a fourth
                render. Nothing in the macro tape drives BTC&rsquo;s coil — it is a BTC-internal stall, and
                the correlation read below confirms BTC is LAGGING the macro risk complex, not leading it.
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
                <tr><td>US 10Y nominal</td><td className="num">4.75%</td><td className="num bear">+7.0bp</td><td className="num bear">+2.69</td><td className="num">+1.92</td><td className="bear">EXTREME RISK-OFF · JUMPED</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.47%</td><td className="num bear">+6.0bp</td><td className="num bear">+2.93</td><td className="num">+1.79</td><td className="bear">EXTREME RISK-OFF · up</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.31%</td><td className="num">+1.0bp</td><td className="num">+1.28</td><td className="num">+2.17</td><td className="neut">episodic · flat</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.27%</td><td className="num">−1.0bp</td><td className="num">−0.78</td><td className="num">+1.19</td><td className="neut">no tag · flat</td></tr>
                <tr><td>HY OAS</td><td className="num">2.84%</td><td className="num bull">−3.0bp</td><td className="num">−0.25</td><td className="num">+1.72</td><td className="stale">neutral · stale 4d</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.554</td><td className="num">−0.01</td><td className="num bull">−1.56</td><td className="num bull">−1.53</td><td className="stale">RISK-ON · weekly stale 10d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">unavailable · fetch failed (4th render)</td></tr>
                <tr><td>DXY</td><td className="num">99.62</td><td className="num">−0.18</td><td className="num">+0.61</td><td className="num bull">−2.84</td><td className="neut">tight · carried</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.825T</td><td className="num bear">−0.092T</td><td className="num">−1.09</td><td className="num bull">−2.47</td><td className="stale">weekly · carried, no fresh print</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.41</td><td className="num">−0.17</td><td className="num">+0.30</td><td className="num bull">−3.15</td><td className="bull">yen firm</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.08%</td><td className="num bear">+7.0bp</td><td className="num">−0.08</td><td className="num">+1.92</td><td className="neut">neutral</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7464</td><td className="num">−0.00</td><td className="num bull">−1.46</td><td className="num bull">−2.20</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp monthly</td><td className="num stale">+2.42</td><td className="num stale">+1.09</td><td className="stale">monthly stale 63d · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.315</span> — NORMAL band, essentially unchanged from
              08-03&rsquo;s 0.318, still moving together. BTC&rsquo;s top tie is{' '}
              <span className="dn-tag">NQ +0.618</span>, then SP500{' '}
              <span className="dn-tag">+0.598</span>, TSLA{' '}
              <span className="dn-tag">+0.564</span>, NVDA{' '}
              <span className="dn-tag">+0.525</span>, JP225{' '}
              <span className="dn-tag">+0.477</span>, URNM{' '}
              <span className="dn-tag">+0.429</span>, SILVER{' '}
              <span className="dn-tag">+0.428</span>, COPPER{' '}
              <span className="dn-tag">+0.419</span>, PALL{' '}
              <span className="dn-tag">+0.392</span>, GOLD{' '}
              <span className="dn-tag">+0.388</span>, PLAT{' '}
              <span className="dn-tag">+0.361</span>. 7d performance puts BTC LAGGING a risk tape that ran
              without it:{' '}
              <span className="dn-tag">BTC +0.03%</span> (dead flat) sits far behind the index (NQ{' '}
              <span className="dn-tag bull">+3.29%</span>, SP500{' '}
              <span className="dn-tag bull">+2.72%</span>, JP225{' '}
              <span className="dn-tag bull">+2.74%</span>) and the green software / large-cap leaders (MSFT{' '}
              <span className="dn-tag bull">+24.30%</span>, AMZN{' '}
              <span className="dn-tag bull">+21.03%</span>, GOOGL{' '}
              <span className="dn-tag bull">+13.71%</span>, NVDA{' '}
              <span className="dn-tag bull">+5.66%</span>, TSLA{' '}
              <span className="dn-tag bull">+5.26%</span>), roughly level with GOLD{' '}
              <span className="dn-tag bull">+0.08%</span>, and ahead only of the laggards (META{' '}
              <span className="dn-tag bear">−0.90%</span>, AAPL{' '}
              <span className="dn-tag bear">−9.84%</span>) and energy (CL{' '}
              <span className="dn-tag bear">−2.08%</span>, BRENT{' '}
              <span className="dn-tag bear">−1.83%</span>). Metals/misc mixed: SILVER{' '}
              <span className="dn-tag bull">+1.00%</span>, PLAT{' '}
              <span className="dn-tag bull">+1.22%</span>, PALL{' '}
              <span className="dn-tag bear">−1.08%</span>, COPPER{' '}
              <span className="dn-tag bull">+3.03%</span>, URNM{' '}
              <span className="dn-tag bull">+2.22%</span>, NGAS{' '}
              <span className="dn-tag bull">+0.33%</span>; EUR +1.19%, JPY (yen) firmer (USD/JPY −3.76%).{' '}
              <span className="dn-em">
                The correlation regime is NORMAL (0.315) and BTC is moving WITH the risk complex on a
                rolling basis, but the 7d PERFORMANCE says BTC LAGGED it hard — the index ran +2.7–3.3%
                while BTC sat flat, so BTC is the underperformer this week, not the leader. The coil is a
                BTC-internal stall against a risk tape that moved higher without it — not a macro-driven
                risk-on that BTC is riding, and not a risk-off that is dragging it down. Per the DN-001
                lineage this is a NORMAL, mixed cross-asset read — no rotation call, but the RS lag is the
                notable feature.
              </span>{' '}
              JGB monthly 2.67% carries a monthly tag — do not lean on it.
            </p>
            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · chase-short still INVALIDATED — no sealed break, the dealer book re-gammaed to an even stronger +56.49M dampener; re-arms only on a decisive close below the flip/old-floor band with gamma flipping negative and a CLEAN SM short · cover-bounce scout REVIVES further (funding flushed, retail cleared, 1h TD9 SELL gone) but does NOT arm — the cap is unmet, the SM cover is UN-CERTIFIABLE (artifact), rates moved further false · book FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                The contested reclaim coiled instead of resolving — neither trade armed, and the one tell
                that would arm the scout went dark, so the desk stays FLAT for a second day
              </span>. The 08-03 note stood the chase-short down (invalidated) and kept the scout
              reviving-but-blocked pending a cap close and an SM cover. Neither the bull cap-close ($64,614)
              nor the bear floor-break fired — price coiled on the settled 200W. The scout&rsquo;s downside
              blockers EASED (funding flushed, retail cleared through 60, the 1h TD9 SELL is gone), but its
              upside confirmation is still missing (spot never closed the cap) and its decisive tell is
              UN-READABLE (the SM cover is ~100% artifact). So the book stays FLAT: chase-short invalidated
              (re-arms only on a decisive break with clean SM short and negative gamma), scout
              reviving-but-unarmed (arms only on a cap close with a certified SM cover), no fresh hedge —
              waiting on a clean SM tape and a resolution of the coil.
            </p>

            <div className="dn-trade">
              <span className="dn-side short">short · chase · INVALIDATED · no sealed break, the dealer book re-gammaed to an even stronger +56.49M dampener — the short stays stood down</span>
              <div className="dn-trade-name">
                Chase-short — still INVALIDATED: the floor never sealed a break (08-03 closed $63,497.20, held above the old floor / flip), the dealer book re-gammaed to an even stronger +56.49M / +68.6M dampener, and the SM tape is UN-READABLE this run — the short stands down a second day
              </div>
              <div className="dn-thesis">
                The chase-short&rsquo;s edge was a sealed floor break with amplifying negative gamma below
                AND smart money verifiably short. None of those is in hand. The floor-break leg is
                INVALIDATED — the weekly settled above the 200W ($63,550 &gt; $63,533) and the 08-03 daily
                closed $63,497.20, a down-close that HELD above the old $63,311 floor and the $62,907 flip;
                the low $62,310.01 wicked below the band intraday but recovered, no daily close sealed
                below. The gamma leg is INVALIDATED and worse for the short than 08-03 — the book re-gammaed
                to an even stronger +56.49M rollup / +68.6M headline dampener with spot +1.00% above the
                flip, so dealers damp a break down harder. The SM leg is now UN-READABLE — the apparent
                cover is ~100% the ~BJ-14:00 artifact minute, ex-artifact FLAT, so the desk can neither say
                SM is short (the short&rsquo;s tell) nor covering. The short is invalidated on its core
                thesis and its confirming tape is dark; it stands down.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">leg status (2 invalidated, 1 un-readable)</span><span className="dn-lvl-v bull">floor close-break (INVALIDATED — the weekly settled above and 08-03 closed $63,497 above the old floor / flip; the low $62,310 wicked below but no close sealed) · amplifying negative gamma (INVALIDATED, WORSE — book re-gammaed to +56.49M / +68.6M dampener, spot +1.00% above flip, front 0DTE +5.75M) · SM positioned short (UN-READABLE — apparent cover is ~100% artifact, ex-artifact FLAT)</span></div>
                <div><span className="dn-lvl-k">what would re-arm the short</span><span className="dn-lvl-v bear">a DECISIVE daily close below the flip / old-floor band ($62,907 flip / $63,311 old floor) AND the dealer book flipping back negative-gamma (spot back below the flip into a negative shelf) AND a CLEAN, certified SM short on an un-corrupted tape — a new break, on readable data, not a wick that recovered</span></div>
                <div><span className="dn-lvl-k">structural map if it re-arms</span><span className="dn-lvl-v bear">a decisive close below $62,907 → into negative gamma → toward the $60k −22.51M crash-put; but the long carry has already FLUSHED (194 negative funding rows, retail sub-60), so the cascade fuel the 08-03 note flagged is largely spent — a break now has less trapped leverage behind it</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no chase-short here — the break did not seal, it coiled; do not short a held floor into an even stronger positive-gamma dampener on an un-readable SM tape — wait for a decisive break below the flip with clean SM data and gamma flipping negative</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> the chase-short only pays when SM is verifiably short with you INTO a
                sealed break and the gamma amplifies. Today the break did not seal — price coiled on the
                floor — the gamma dampener strengthened, and the SM tape is un-readable, so all three legs
                fail (two invalidated, one dark). The setup does not re-arm on the old lines but on a fresh,
                decisive break below the flip/old-floor band with negative gamma AND a clean SM short. Stand
                down.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · REVIVING FURTHER but NOT armed · funding flushed, retail cleared, the 1h TD9 SELL is gone — but the cap is unmet, the SM cover is UN-CERTIFIABLE, and rates moved further false</span>
              <div className="dn-trade-name">
                Cover-bounce scout — REVIVING FURTHER: the downside blockers eased (funding flushed 194 negatives, retail cleared through 60, the 1h ⚡TD9 SELL is gone) — but it does NOT arm because spot never closed the D-EMA50 cap, the SM cover is ~100% artifact (un-certifiable), and the rates filter moved further FALSE (10Y +7bp to 4.75%)
              </div>
              <div className="dn-thesis">
                The scout&rsquo;s recovery read keeps reviving: the two downside blockers the 08-03 note
                flagged — a re-pinned long carry and a still-crowded retail long — both cleared this run
                (funding flushed to 194 negative rows, retail de-crowded through 60 to 59.94), and the 1h
                ⚡TD9 SELL overbought flag is gone. The golden-cross cluster (1h/4h/8h/3d/1w) and the HTF
                bottom-div cluster (8h/12h/1w) stay intact, and the dealer book is a stronger dampener that
                caps downside. That is a materially better backdrop than 08-03. But its arming line is
                unchanged — a daily close above the D-EMA50 cap $64,614 on demand-led flow with a CLEAN SM
                read that is COVERING — and today the two confirming tells are still absent: spot poked
                $64,079.9 but never closed the cap (and pulled back −0.53% in the last 4h), and the SM cover
                is UN-CERTIFIABLE (~100% artifact, ex-artifact FLAT). The rates leg also moved the wrong way
                (10Y +7bp to 4.75%, filter now 20bp FALSE). So the scout is more alive than 08-03 but still
                blocked on the two tells that matter — the cap close and a readable SM cover.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bull">REVIVING FURTHER · downside blockers eased (carry flushed, retail cleared, 1h TD9 SELL gone) — but NOT armed and not entered</span></div>
                <div><span className="dn-lvl-k">arming line + confirms needed</span><span className="dn-lvl-v bull">a daily close above the D-EMA50 cap $64,614 on demand-led OI expansion with a CLEAN, certified SM read that is COVERING (not the ~BJ-14:00 artifact) — the flip/floor reclaim is done and the carry/crowding blockers have cleared, the cap close and a readable SM cover are what is left</span></div>
                <div><span className="dn-lvl-k">blockers (why it stands down today)</span><span className="dn-lvl-v bear">spot never closed the cap (poked $64,079.9, pulled back −0.53% in 4h, −1.67% below the $64,614 cap) · SM cover UN-CERTIFIABLE (~100% artifact, ex-artifact FLAT) · rates filter FALSE and WORSE, 10Y 4.75% (20bp away) · OI contracted (positions off, not demand-led on)</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no scout long here — do not buy a coil below the cap on a flushed carry alone when the cap is unmet and the SM cover cannot be read; the flush improves the backdrop but the scout arms on the cap close with a certified SM cover, not on eased blockers below the cap</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R (framework, not live):</b> a live entry on a D-EMA50 cap close ~$64,614 against a
                stop back below the reclaimed floor band ~$63,300 (~$1,314 risk) toward the next daily
                resistance cluster D-EMA100/D-SMA100 $67,094–$68,484 (~$2,480–$3,870 reward) ≈ 1.89:1 to the
                lower bound / 2.95:1 to the upper — an acceptable recovery setup IF the confirms align. They
                do not today. <b>Discipline:</b> the scout&rsquo;s edge is a confirmed reclaim through the
                cap on fresh demand with SM turning buyer on a readable tape — not a coil below the cap on a
                carry flush. The blockers easing is real and improves the odds, but the cap close and a
                certified SM cover are the tells that arm it; a coil with the cap unmet and a dark SM tape
                is a better setup than 08-03, not the trigger.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · the contested reclaim STALLED into a coil on the floor — carry flushed and blockers eased (bull) but the cap is unmet and the SM tape is dark (no confirmation): a stall waiting on a clean tape, not a base to buy or a break to short</span>
              <div className="dn-trade-name">
                Contested reclaim → stalled coil on the risen floor — spot pinned on the settled 200W between an unmet D-EMA50 cap above and a held flip/old-floor band below, with the long carry flushed but the SM confirming tell un-readable, waiting on a clean SM tape to break the tie
              </div>
              <div className="dn-thesis">
                The 08-03 fork did not resolve — the contested reclaim coiled. Price is +0.16% on the 24h
                (flat), pinned on the settled 200W $63,533; it poked $64,079.9 (short of the $64,614 cap)
                then pulled back −0.53% in 4h, and wicked $62,310.01 (below the band) before recovering. The
                08-03 daily closed $63,497.20 — a down-close that held above the old floor / flip. The bull
                side improved: the long carry FLUSHED (194 negative funding rows vs 0 for five days), retail
                cleared through 60 to 59.94, the 1h TD9 SELL is gone, and the golden-cross / HTF-bottom-div
                clusters stay intact. The bear side is contained: no sealed break, the dealer book an even
                stronger +56.49M dampener, big-net flipped positive. But the decisive book went DARK — the
                apparent SM cover is ~100% the ~BJ-14:00 artifact, ex-artifact FLAT — so neither the
                scout&rsquo;s cover nor the chase-short&rsquo;s short can be certified. The read is a stall
                on contracting OI with leverage bleeding off both sides, waiting on a clean tape. If a
                readable SM cover prints alongside a D-EMA50 cap close, the scout arms into the $67k–$68.5k
                cluster. If the coil breaks the flip/old-floor band on a clean SM short with gamma flipping
                negative, the chase-short re-arms toward the $60k crash-put — though the flushed carry
                leaves less cascade fuel. The tie-breaker is a clean SM tape.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">bull resolution (reclaim confirms)</span><span className="dn-lvl-v bull">a daily close above the D-EMA50 cap $64,614 on demand-led OI expansion with a CLEAN, certified SM COVER → the scout arms into the D-EMA100/D-SMA100 $67,094–$68,484 resistance cluster</span></div>
                <div><span className="dn-lvl-k">bear resolution (coil breaks down)</span><span className="dn-lvl-v bear">a DECISIVE daily close below the $62,907 flip / $63,311 old-floor band with a CLEAN SM short and gamma flipping negative → into negative gamma toward the $60k −22.51M crash-put (with the carry already flushed, less cascade fuel than 08-03)</span></div>
                <div><span className="dn-lvl-k">deciding tells</span><span className="dn-lvl-v">FIRST a clean, un-corrupted SM tape (the ~BJ-14:00 artifact must clear), THEN the D-EMA50 cap close vs the flip/old-floor break — not the intraday wick that recovered both ways this session</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the edge is refusing to over-read a coil — the reclaim held the
                floor and the carry flushed (real bull improvement) but the cap is unmet and the SM tape is
                dark (no confirmation), so this is a stall to wait out, not a base to buy or a break to
                short. The lineage does not scout-long a coil below the cap on a flush alone, and it does
                not chase-short a held floor into a stronger positive-gamma dampener on an un-readable SM
                tape. It stays flat and waits for a clean SM tape plus a cap close or a decisive band break.
                Whichever resolves first — on readable data — writes the next note.
              </div>
            </div>
            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the contested reclaim STALLED into a coil on the risen floor — neither the cap-close nor the floor-break resolved · the SM cover the scout needs is UN-CERTIFIABLE (~100% artifact) · the chase-short stays INVALIDATED (no sealed break, stronger dampener) · the scout REVIVES further (carry flushed, retail cleared, 1h TD9 SELL gone) but is BLOCKED (cap unmet, SM dark, rates further false) · book FLAT</span>
            </h2>

            <p>
              Of the 08-03 decision conditions: the{' '}
              <em>D-EMA50 cap close</em>, the scout&rsquo;s arming line, did NOT print (spot poked
              $64,079.9, short of the $64,614 cap, then pulled back −0.53% in 4h); the{' '}
              <em>SM cover-vs-add tell</em>, the decisive read for both trades, went UN-READABLE (the
              apparent +10,052 cover is ~100% the ~BJ-14:00 artifact minute, ex-artifact FLAT); the{' '}
              <em>pinned-long carry</em> the 08-03 note flagged as cascade fuel FLUSHED (194 negative
              funding rows vs 0 for five days, retail cleared through 60 to 59.94); the{' '}
              <em>chase-short floor close-break leg</em> stayed INVALIDATED (08-03 closed $63,497.20, held
              above the old floor / flip — the $62,310 low wicked below but no close sealed); the{' '}
              <em>chase-short negative-gamma leg</em> stayed INVALIDATED and WORSE (book re-gammaed to a
              stronger +56.49M / +68.6M dampener, spot +1.00% above the flip); and the{' '}
              <em>reclaim-long rates filter</em> moved FURTHER FALSE (10Y +7bp to 4.75%, now 20bp from the
              4.55% gate).{' '}
              <em>The reclaim coiled instead of resolving — the carry flushed and the retail crowd cleared
              (the scout&rsquo;s downside blockers eased), but the cap stayed unmet, the SM cover cannot be
              certified, and rates moved against, so the scout revives further yet stays unarmed and the
              chase-short stays invalidated; the book stays flat.</em>{' '}
              The conditions today re-set around a coil on the risen floor, a flushed carry, a cleared
              retail crowd, a strengthened dealer dampener, and a scout blocked on the two tells that arm it
              — the cap close and a readable SM cover:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>D-EMA50 cap close (scout arming line)</td><td className="bear">UNMET — spot poked a 24h high $64,079.9 (short of the $64,614 cap) then pulled back −0.53% in the last 4h; the 08-04 in-progress close $63,543.30 sits −1.66% below the cap</td><td>the scout&rsquo;s upside confirmation did not print; it does not arm without a cap close</td></tr>
                <tr><td>SM cover-vs-add (the decisive tell)</td><td className="stale">UN-CERTIFIABLE — the apparent +10,052 cover to net −8,995 is ~100% one suspect +10,205 minute (08-03 14:36 BJ, ~BJ-14:00 re-sync); ex-artifact ΔNet −153.2 (FLAT)</td><td>the tape that would confirm the scout OR the chase-short is dark; wait for a clean SM read</td></tr>
                <tr><td>Pinned-long carry (08-03 cascade-fuel flag)</td><td className="bull">FLUSHED — 194 negative funding rows (first in 6 days, was 0 for 5 straight), funding off the +10.95% cap to +4.93% mean; retail de-crowded through 60 to 59.94</td><td>the scout&rsquo;s downside blocker cleared — the re-heated leverage came off; a genuine base condition met</td></tr>
                <tr><td>Chase-short floor close-break (leg)</td><td className="bull">INVALIDATED — 08-03 closed $63,497.20, HELD above the old $63,311 floor and the $62,907 flip; the $62,310 low wicked below the band but no daily close sealed</td><td>no break to chase; re-arms only on a DECISIVE close below the flip/old-floor band</td></tr>
                <tr><td>Chase-short amplifying negative gamma (leg)</td><td className="bull">INVALIDATED / WORSE — book re-gammaed to +68.6M headline / +56.49M rollup, spot +1.00% above the $62,907 flip, front 0DTE +5.75M</td><td>the dampener strengthened; the short needs gamma flipping negative to re-arm</td></tr>
                <tr><td>Cover-bounce scout re-arm</td><td className="bull">REVIVING FURTHER — carry flushed, retail cleared, 1h ⚡TD9 SELL gone, golden-cross / HTF-bottom-div clusters intact; arms on a D-EMA50 cap close $64,614 with a CLEAN SM COVER</td><td>more alive than 08-03 but not armed — waits on the cap close and a readable SM cover</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">FALSE / WORSE — 10Y 4.75% &gt; 4.55% (20bp away, +7bp today, further than 08-03&rsquo;s 13bp)</td><td>one of the scout&rsquo;s confirms, moved the wrong way; a widening gate</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether a CLEAN, certifiable SM cover finally prints alongside a D-EMA50 cap close ($64,614)
                — which arms the scout into the $67k–$68.5k resistance cluster — or whether the coil breaks
                the $62,907 flip / $63,311 old-floor band on a clean SM short with gamma flipping negative,
                which re-arms the chase-short toward the $60k crash-put; everything in between is the
                stalled coil on the risen floor with an un-readable SM tape the desk now reads
              </span>. The contested reclaim the 08-03 note tracked did not resolve — it coiled on the
              settled 200W, poking short of the cap and wicking below the floor band before recovering to
              flat. The bull side improved (the pinned carry flushed, retail cleared through 60, the 1h TD9
              SELL is gone, the golden-cross / HTF-bottom-div clusters hold) and the bear side stayed
              contained (no sealed break, an even stronger +56.49M dampener), but the decisive book went
              dark: the SM cover the scout needs is ~100% the ~BJ-14:00 artifact, un-certifiable. The
              chase-short stays invalidated and stands down; the scout revives further on the eased blockers
              but stays unarmed on the unmet cap and the dark SM tape; the put-spread is not re-grown into a
              strengthened dampener. BTC LAGGED a NORMAL, risk-on cross-asset tape (the index +2.7–3.3% on
              the 7d while BTC sat flat) — a BTC-internal stall, not a macro event. The right read for the
              next 24–48h is{' '}
              <em>patient — wait for a CLEAN SM tape (the ~BJ-14:00 artifact must clear), then watch the
              D-EMA50 cap close vs the flip/old-floor break; do not buy a coil below the cap on a flush
              alone, and do not short a held floor into a stronger positive-gamma dampener on a dark SM
              read</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit
            </span>
            <b>Status:</b> v2 EN note — <b>post codex hostile audit</b> (verdict PASS-WITH-NOTES: 0 CRITICAL,
            2 MAJOR, 1 MINOR; see audits/2026-08-04-desk-note.md). STAGE C applied every codex finding
            (MAJOR + MINOR) plus the adjudicated ask-deepseek secondary minors, then ran the mandatory
            grep-closure loop (pattern searched · hits-before · hits-after) before promoting v1 → v2.{' '}
            <b>Finding ledger:</b>{' '}
            <em>DN-001 (MAJOR — GEX wall-ladder understated):</em> the pinned btc_gex.html panel exposes a
            signed Top-10 Gamma Walls table, so the &ldquo;full signed per-strike ladder NOT cleanly
            extractable / interior described qualitatively&rdquo; caveat was replaced by the loaded ladder
            ($70k +17.29M, $68k +12.45M, $67k +10.91M, $66k +10.90M, $64k +9.76M, $72k +8.73M, $65k +8.68M,
            $80k +7.71M positive; $62k −9.73M, $60k −22.51M negative) at the manifest, the §III roman, the
            §III prose dn-em, and this caveat. Patterns searched: &ldquo;not cleanly extractable&rdquo;,
            &ldquo;described qualitatively&rdquo;, &ldquo;price×IV density&rdquo;, &ldquo;full signed
            per-strike&rdquo;, &ldquo;only the two authoritative&rdquo;, &ldquo;the interior is
            described&rdquo; · hits-before 4 blocks · hits-after 0 (the sole remaining &ldquo;the two
            extremes&rdquo; hit is the corrected &ldquo;mapped, not just the two extremes&rdquo; prose) —{' '}
            <b>RESOLVED</b>.{' '}
            <em>DN-002 (MAJOR — macro rows off the 22:15Z panel):</em> re-aligned 5Y5Y (regime z +1.13 →
            +1.28, episodic +2.18 → +2.17), 10Y breakeven (2.28% → 2.27%, Δ ~0bp → −1.0bp, regime −0.64 →
            −0.78, episodic +1.63 → +1.19), US-JP spread (regime −0.32 → −0.08, episodic +1.40 → +1.92),
            USD/CNY (Δ +0.00 → −0.00, regime −1.48 → −1.46, episodic −2.49 → −2.20) in the table, and the
            breakeven prose (manifest + §IV) 2.28% → 2.27%. Patterns searched: &ldquo;+1.13&rdquo;,
            &ldquo;+2.18&rdquo;, &ldquo;2.28%&rdquo;, &ldquo;~0bp&rdquo;, &ldquo;−0.64&rdquo;,
            &ldquo;+1.63&rdquo;, &ldquo;−0.32&rdquo;, &ldquo;+1.40&rdquo;, &ldquo;−1.48&rdquo;,
            &ldquo;−2.49&rdquo; · hits-before 6 · hits-after 0 — <b>RESOLVED</b>.{' '}
            <em>DN-003 (MINOR — MTF cells omitted):</em> set the 1w TD cell to &ldquo;Buy 2&rdquo; and the 1M
            RSI cell to &ldquo;43.5&rdquo; from the pinned mtf_div_latest.html. Patterns searched: 1w-row
            TD &ldquo;—&rdquo;, 1M-row RSI &ldquo;—&rdquo; · hits-before 2 · hits-after 0 — <b>RESOLVED</b>.{' '}
            <b>ask-deepseek secondary minors (adjudicated, recomputed before acting):</b> APPLIED — SM
            footing (long 15,538.2 → 15,538.3 so 15,538.3 − 24,534.1 = −8,995.8, the true net −8,995.821);
            by-expiry strip footing (the displayed components sum to +56.50M, exact net_gex $56,492,041.90 =
            +56.49M rollup); in-progress-close offset −1.67% → −1.66% (only where the subject is the
            $63,543.30 close; spot-vs-cap −1.67% is correct and unchanged); Deribit-idx division +1.465% →
            +1.466% (both occurrences); and the MA cross-block claim reworded so the marginally-positive
            settled W-SMA200 (+0.001%) is no longer contradicted by &ldquo;every other daily and weekly MA
            is negative&rdquo; (manifest + §I prose). REJECTED — OI Δ −628.7 held: the true delta −628.671
            rounds to −628.7 (codex confirmed clean); the endpoint mis-foot is rounding noise, −0.58%
            unaffected.{' '}
            <b>Author-flagged data-quality caveats carried through v2:</b>{' '}
            <em>(1)</em> the SM net series is DATA-IMPAIRED this run — a single suspect one-minute step
            (+10,205.3 BTC @ 08-03 14:36 BJ, the recurring ~BJ-14:00 feed re-sync) accounts for ~100% of the
            apparent +10,052 net-short cover; ex-artifact ΔNet −153.2 (FLAT), so the SM cover is
            un-certifiable and is labeled as such throughout;{' '}
            <em>(2)</em> the GEX wall map is now loaded from the panel&rsquo;s signed Top-10 Gamma Walls
            table (per DN-001 above), consistent with the gex_summary.json extremes ($70k +17.29M / $60k
            −22.51M); only the non-top-10 interior remainder was not extracted, so claims are held ≤ data;{' '}
            <em>(3)</em> the GEX headline-vs-rollup relationship FLIPPED (rollup +56.49M now BELOW headline
            +68.6M, was above on 08-03) — the ~12.1M gap is disclosed per DN-003 lineage;{' '}
            <em>(4)</em> the ma200w_trap_watch_state.json sidecar is NOT cited as an anchored source (mutable,
            not archived at the 00:07 anchor); the 200W settlement is an independent full-glob recompute;{' '}
            <em>(5)</em> the macro render is 2026-08-03 22:15Z (~1.87h pre-snapshot) with MOVE unavailable a
            fourth straight render and Fed net-liquidity / DXY / USD-JPY carried. Full <em>next build</em> is
            unverified on this host (Node 18.19.1 &lt; the Next.js 20.9.0 gate); <em>tsc --noEmit</em> is the
            build proxy. <b>post codex hostile audit.</b>
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among
            principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a
            single atomic snapshot (2026-08-04 00:07Z) with section-level provenance
            disclosed in the manifest band above; the macro Tier-1 panel render is
            2026-08-03 22:15Z (~1.87h before snapshot) with MOVE unavailable a fourth
            straight render and the Fed net-liquidity row carried weekly, and some inputs
            are explicitly stale, unavailable or pending and flagged as such. This is a v2
            note, post codex hostile audit. Levels, sizes, and conditions are
            illustrative of the desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future tape. Derivatives
            carry the risk of total loss and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The contested reclaim coiled on the risen floor — the carry flushed and the retail crowd
                cleared, but the cap stayed unmet and the SM cover went dark on the ~BJ-14:00 artifact. The
                chase-short stays invalidated; the scout revives further but stays unarmed. Wait for a clean
                SM tape and a resolution of the coil. Flat and patient.
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
            v2 · 2026-08-04 00:07Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet full-glob
            200W recompute (ma200w_trap_watch_state.json NOT archived — not cited) ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
