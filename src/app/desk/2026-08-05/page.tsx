import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-05 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-05',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-05' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260805() {
  await requireViewer('/desk/2026-08-05');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-05 · v2</span>
          <span>internal · for discussion · v2 · post codex hostile audit (audits/2026-08-05-desk-note.md)</span>
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
              <span className="dn-big">$64,076</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.77%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-05 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-05 00:05Z (row t=&ldquo;08-05 08:05&rdquo; BJ, the 00:05Z daily anchor)</td>
                  <td className="dn-flag">
                    fresh · 1-min · pinned to the 00:05Z anchor row for
                    reproducibility (file tail was 00:08Z at read time) · live-tape
                    <code> t</code> is BJ-local (UTC+8): the 00:05Z pin = t &ldquo;08-05
                    08:05&rdquo;, all downstream BJ timestamps converted to UTC in
                    the prose
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-05 08:01 BJ (00:01Z) scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (can advance intrahour; the live
                    file had already stepped to 08:16 BJ / 00:16Z at read time) ·
                    the archived 00:07Z copy at
                    /opt/desk-note/snapshots/2026-08-05-0007/ is the pinned source ·
                    ~4-min stale vs snapshot anchor · in-progress bars · scan spot
                    $64,076, 24h +0.96%
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-05 00:01Z snapshot</td>
                  <td className="dn-flag">
                    ~4-min stale vs anchor · Deribit idx $64,439 vs live $64,076
                    ($363 above live) · 830 instruments · 5AUG26 0.3DTE +20.65M
                    still on the book (settles 08:00Z today, ~8h after this snap) ·
                    archived at /opt/desk-note/snapshots/2026-08-05-0007/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-05 00:01Z
                  </td>
                  <td className="dn-flag">~4-min lag · 7d 1h bars · 22 assets · 167 rows · archived in snapshot dir</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-04 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.8h render lag · FRED Tier-1: 10Y −5bp to 4.70%, TIPS −4bp to
                    2.43%, HY OAS −7bp to 2.78%, DXY −0.08 to 99.88, Fed net liq
                    −0.092T to $5.825T · MOVE fetch-failed (dark) · NFCI stale 11d ·
                    archived in snapshot dir
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-08-05 00:05Z</td>
                  <td className="dn-flag">
                    close $64,046.80 (in-progress 08-05 bar) · offsets recomputed vs
                    live spot $64,075.79 · weekly ladder off the full 2019–2026
                    wildcard (362 weekly bars) · W-SMA200 $63,756.61 in-progress /
                    $63,533.52 settled (the trap-watch floor); W-EMAs full-history
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle floor watch</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · recomputed 2026-08-03 00:11Z</td>
                  <td className="dn-flag">
                    weekly-close 200-SMA $63,533.52, last completed week 2026-08-02
                    close $63,550.00, state ABOVE, 5 consecutive weekly closes above
                    (streak from 2026-07-05) · slow level (~$250/wk), hours-stale is
                    fine · the dedicated weekly_200sma.json runbook path is absent;
                    trap-watch state used as the live substitute
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale · monthly (64d) · do not treat as live</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT pivots, max-pain, strike-level IV, BTC/NQ ratio
                  </td>
                  <td className="dn-v-cell">NOT LOADED in this cut</td>
                  <td className="dn-flag">claims explicitly framework-only (btc_ntt_analysis.html is JS-rendered, not extractable)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h ann.</span>
              <span className="dn-v">+1.88%</span>
              <span className="dn-src">live · funding field 0.001718/8h × 1095 = +1.88% ann · 24h mean +6.00% (was +4.93% flushed on 08-04) · 0 / 1441 sampled rows negative (was 194 / 1441 on 08-04 — the negatives are GONE) · max +10.57% ann @ 08-04 19:03 BJ (11:03Z 08-04), min +0.07% @ 08-05 04:52 BJ (20:52Z 08-04)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h mean</span>
              <span className="dn-v bear">+4.93% → +6.00% (re-heated +1.07pt)</span>
              <span className="dn-src">the 08-04 flush (194 negative rows, first negatives in 6 days) FILLED BACK IN — 0 negatives this window, the long carry re-crowded, not the leverage-off the bull case wanted</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−0.30% (−326.9 BTC)</span>
              <span className="dn-src">live · a second straight contraction (was −0.58% / −628.7 BTC on 08-04) · 108,250 BTC now vs 108,577 24h ago · positions came off into the up-print — no fresh long stacking behind the reclaim</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bull">56.11 / 43.89</span>
              <span className="dn-src">live_db `mkt_long_pct` · eased from 59.97 (24h ago) to 56.11 (a −3.86pt de-crowd) · 24h range 55.90 / 60.44 — retail keeps bleeding off the long side even as price lifts</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−10.01k (net SHORT, deeper)</span>
              <span className="dn-src">live · long 14.48k − short 24.49k · net trough (most short) −10.89k @ 08-05 04:06 BJ (20:06Z 08-04); net peak (least short) −8.55k @ 08-04 09:01 BJ (01:01Z 08-04) — SM sat short across the whole up-move</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs same-clock 24h base</span>
              <span className="dn-v bear">−9,028 → −10,007 (−980 net, deeper short)</span>
              <span className="dn-src">|Δnet|/prior_net = 979.5 / 9,027.9 = 10.85% · CLEAN this run — no BJ-14:36 re-sync artifact (the single largest 24h step is −1,032 @ 08-05 04:06, normal size) · Δlong −1,048 (longs came off), Δshort −69 (flat) — SM SOLD the reclaim by shedding longs</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.3% / 29.23%</span>
              <span className="dn-src">GEX median IV across 830 inst. vs 30D close-to-close RV (30 returns / 31 closes, logret.std × √365 × 100) · chain richness ~+11.1pt · IV median is a chain-median across N instruments, NOT a tradable spread</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+1.51% (above)</span>
              <span className="dn-src">flip $63,124 (rose from $62,907 on 08-04) · vs live spot $64,075.79 (+1.51%; 64,075.79/63,124 − 1 = 1.507%) / GEX file Deribit idx $64,439 (+2.08%; 64,439/63,124 − 1 = 2.082%, file rounds +2.1%) — both refs positive · headline GEX +106.0M, by-expiry rollup +93.78M (both up hard from +68.6M / +56.49M on 08-04)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The coil broke UPWARD off the 200W floor into a strong 08-04
                up-close — but smart money SOLD the reclaim and the dealer book
                re-gammaed into a heavier positive cap, so the bounce prints
                un-confirmed on every internal
              </span>. Spot is{' '}
              <span className="dn-tag bull">$64,076, +0.77% on 24h</span>, up ~+0.85%
              off the 08-04 pin on the $63,533.52 cycle floor; the 08-04 daily
              closed <span className="dn-tag bull">$64,075.50</span> — a $578
              up-close over 08-03, the best daily close since 07-30 — reclaiming
              back above the 200W floor and the D-SMA50, but stopping{' '}
              <span className="dn-tag bear">−$536 (−0.83%) under the D-EMA50 cap
              $64,612</span>, the exact bull leg the 08-04 note required. Underneath
              the up-print the tape does not confirm: SM rolled{' '}
              <span className="dn-tag bear">CLEANLY deeper net short −9,028 →
              −10,007</span> (no artifact this run; Δlong −1,048, Δshort −69 — they
              sold the reclaim by shedding longs), the dealer book re-gammaed{' '}
              <span className="dn-tag bull">even more positive (+106.0M headline /
              +93.78M rollup, was +68.6M / +56.49M)</span> into a heavier two-sided
              dampener with the flip risen to $63,124, funding{' '}
              <span className="dn-tag bear">re-heated (24h mean +4.93% → +6.00%, the
              08-04 negatives GONE — 0 / 1441 rows)</span> so the long carry
              re-crowded, OI contracted a second day{' '}
              <span className="dn-tag bear">−0.30% (−326.9 BTC)</span>, and every 24h
              flow read is net-offered (spotCVD −1,420, futCVD −859, taker −850,
              big −581) with the last 4h and 1h already fading (−0.12% / −0.27%).
              Neither trigger arms: the cover-bounce scout needs an SM COVER and a
              D-EMA50 cap close (got neither — SM went deeper short, price capped),
              and the chase-short needs a floor break with gamma flipping negative
              (got neither — the coil broke UP, gamma went more positive). Book
              stays FLAT; this is a low-conviction squeeze into a positive-gamma
              cap that SM is leaning against.
            </p>

            <p>
              BTC prints <span className="dn-tag">$64,076</span> live,{' '}
              <span className="dn-tag bull">+0.77%</span> on 24h (the live-tape
              window; the 08:01 BJ MTF scan reads +0.96% on its own 24h base — the
              ~4-min offset and different window open account for the 0.19pt gap),
              inside a <span className="dn-tag">$64,494 / $63,327</span> range (24h
              high @ 07:16 BJ 08-05 / 23:16Z 08-04, low @ 08:56 BJ 08-04 / 00:56Z
              08-04).{' '}
              <span className="dn-signal">The floor held and the reclaim
              extended</span>: 08-02 closed $63,550.00, 08-03 closed $63,497.20,
              and 08-04 closed <span className="dn-tag bull">$64,075.50</span> — a
              $578 up-day back above both the 200W floor{' '}
              <span className="dn-tag bull">$63,533.52 (+0.85%)</span> and the
              D-SMA50 <span className="dn-tag bull">$63,257.59 (+1.29%)</span> after
              the 08-03 relapse below the floor (08-02 had already closed above both
              at $63,550.00; 08-03 dipped $36 under the floor to $63,497.20). The reclaim also pulled the{' '}
              <span className="dn-tag bull">D-EMA20 $63,965.00 (+0.17%)</span> back
              positive — two daily offsets now above spot, up from the single
              positive daily on 08-04, so the matrix is a touch less inverted. But
              the overhead is right here: <span className="dn-tag bear">D-SMA20
              $64,364.74 (−0.45%)</span> and the load-bearing{' '}
              <span className="dn-tag bear">D-EMA50 cap $64,612.06 (−0.83%)</span>,
              then a gap to <span className="dn-tag bear">D-EMA100 $67,044.05
              (−4.43%)</span>.{' '}
              <span className="dn-em">
                Spot is pinned in a tight ~$1.35k band — D-EMA20 support (+0.17%) /
                D-SMA20 (−0.45%) / D-EMA50 cap (−0.83%) — with the 200W floor
                (+0.85%) and D-SMA50 (+1.29%) below. The reclaim is real on price
                and on two dailies, but the single close that arms the bull case,
                a D-EMA50 cap close above $64,612, has not printed.
              </span>{' '}
              The 08-04 note&rsquo;s two forks — a clean SM cover + D-EMA50 cap
              close (arms the scout into the $67k–$68.5k cluster), or a flip/old-floor
              break on a clean SM short with gamma flipping negative (re-arms the
              chase-short toward the $60k crash-put) — both stay un-fired: price
              went the bull direction while positioning and gamma went the bear
              direction, so nothing resolved.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · SM rolled CLEANLY deeper short into the up-day (no artifact) · longs shed, funding re-heated, OI contracted a second day · the reclaim has no positioning behind it</span>
            </h2>

            <p>
              <span className="dn-signal">
                Smart money sold the reclaim — and for the first time in three runs
                the tell is clean
              </span>. SM net is{' '}
              <span className="dn-tag bear">−10,007</span> vs the same-clock 24h
              baseline −9,028 — that is{' '}
              <span className="dn-em">10.85% more short</span>{' '}
              (|−10,007 − (−9,028)| / 9,028 = 979.5 / 9,027.9 = 10.85%), a deeper
              short into a +0.77% up-day. The components: long_btc{' '}
              <span className="dn-tag bear">15,531 → 14,483 (−1,048)</span> and
              short_btc <span className="dn-tag">24,559 → 24,490 (−69, flat)</span>.
              The whole move is longs coming OFF while shorts held — SM did not
              cover the short book into the bounce, they shed the long book, which
              deepens net short. <span className="dn-em">Critically, there is no
              BJ-14:36 re-sync artifact this run</span> — the recurring single-minute
              feed step that impaired the 08-02 and 08-04 tells is absent; the
              single largest 24h net step is a normal-sized −1,032 @ 08-05 04:06 BJ
              (20:06Z 08-04), so the deeper-short read is CERTIFIED, not
              data-impaired. SM net trough (most short){' '}
              <span className="dn-tag bear">−10,887 @ 08-05 04:06 BJ (20:06Z
              08-04)</span>; net peak (least short){' '}
              <span className="dn-tag">−8,548 @ 08-04 09:01 BJ (01:01Z 08-04)</span>
              — SM sat short across the entire up-move and got deeper into it.
            </p>

            <p>
              The leverage side re-crowded rather than flushed.{' '}
              <span className="dn-signal">
                Funding re-heated off the 08-04 flush
              </span>: live <span className="dn-tag">+1.88% ann</span> (field
              0.001718/8h × 1095), but the 24h mean is{' '}
              <span className="dn-tag bear">+6.00% ann</span> (vs +4.93% on 08-04 —
              a +1.07pt re-heat), and the window carries{' '}
              <span className="dn-tag bear">0 / 1441 negative rows</span> — the 194
              negative rows the 08-04 note flagged (the first negatives in six days)
              have entirely filled back in. Range{' '}
              <span className="dn-tag">+0.07% / +10.57% ann</span> (max @ 08-04 19:03
              BJ / 11:03Z 08-04, min @ 08-05 04:52 BJ / 20:52Z 08-04); the +10.57%
              max touched only 3 / 1441 rows, so the carry is one-sided long but not
              cap-pinned. OI Δ{' '}
              <span className="dn-tag bear">−326.9 BTC (−0.30%)</span> over 24h — a
              second straight contraction (108,577 → 108,250) after 08-04&rsquo;s
              −628.7 / −0.58%, so positions keep bleeding off rather than stacking
              behind the reclaim. Retail{' '}
              <span className="dn-tag bull">mkt_long_pct 56.11%</span> from 59.97% —
              a −3.86pt de-crowd (24h range 55.90 / 60.44), the long side keeps
              clearing even as price lifts. Perp trades a{' '}
              <span className="dn-tag bear">−$53.40 discount</span> to spot at the
              snap (1h mean −$51.10, range −$127.83 / −$23.65; 4h mean −$48.75; 24h
              mean −$59.64, range −$245.49 / +$106.13 — basis briefly premium once
              across the 24h but sits at a persistent discount). 1-min aggressor
              skew snap <span className="dn-tag bull">+7.3</span> (1h mean −1.85,
              range −48.4 / +35.7) — a marginal buy tilt at the snap inside a
              two-way hour.{' '}
              <span className="dn-em">
                Funding re-heated + OI contracting + retail bleeding + SM deeper
                short + perp at a discount: the reclaim is a spot-led grind with the
                positioning book leaning the other way. This is not the leverage-off,
                SM-covering base the bull scout is gated on.
              </span>
            </p>

            <p>
              Windowed flow says the up-print rode a covering grind, not fresh
              demand, and the most recent hours are fading.{' '}
              <span className="dn-em">Every 24h flow read is net-offered against a
              positive price</span>: 24h price{' '}
              <span className="dn-tag bull">+0.77%</span>, OI{' '}
              <span className="dn-tag bear">−326.9 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −1,420</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −859</span>, big-print{' '}
              <span className="dn-tag bear">−581 BTC / 925 prints</span>,
              taker-net <span className="dn-tag bear">−850</span> —{' '}
              <span className="dn-em">
                price up +0.77% while spot AND futures aggressor flow both sold and
                OI shrank: a short-covering / thin-book lift, not stacked buying
                (no cb_cvd / fut_cvd reset in the window, deltas are clean)
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bear">−0.12%</span>, OI{' '}
              <span className="dn-tag bear">−237.3 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −227</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −399</span>, big-print{' '}
              <span className="dn-tag bear">−333 BTC / 177 prints</span>,
              taker-net <span className="dn-tag bear">−369</span> —{' '}
              <em>the reclaim is already rolling over, offered on every read</em>.
              1h: price <span className="dn-tag bear">−0.27%</span>, OI{' '}
              <span className="dn-tag bear">−257.6 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −55</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −106</span>, big-print{' '}
              <span className="dn-tag bull">+53 BTC / 63 prints</span>,
              taker-net <span className="dn-tag bear">−68</span> —{' '}
              <em>OI still shrinking, spot/futures offered, a small big-print bid
              the only green</em>. The 24h up-move printed on covering into a
              positive-gamma cap; the 4h/1h show it fading with positions still
              coming off — the bounce has no fuel behind it.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · engine frames lifted above cloud (long-tilt) · fresh 12h + 1w water-down golden crosses · but a NEW 4h ⚡TD9 SELL and a just-printed 1h water-up death cross warn the bounce is overbought · regime 5/9 cycle-reversal</span>
            </h2>

            <p>
              <span className="dn-signal">
                The engine frames confirmed the bounce and two more slow frames
                printed water-down golden crosses — but the fast frames are
                already flashing overbought
              </span>. The regime tag is{' '}
              <span className="dn-tag">5/9 cycle-reversal (JT&lt;0) —
              mean-reversion / bounce-favoring, trend-following cautious</span>.
              Fresh this scan: <span className="dn-tag bull">12h water-down golden
              cross (1 bar ago)</span> and{' '}
              <span className="dn-tag bull">1w water-down golden cross (2 bars
              ago)</span> join the 4h (9b), 8h (5b) and 3d (8b) golden crosses — a
              five-frame water-down golden-cross cluster (4h/8h/12h/3d/1w),
              the early bull-transition tell stacking across the mid-and-slow book.
              The engine frames lifted above cloud and hold a long tilt: 15m/30m/1h
              all print <span className="dn-tag bull">price above EMA400, above
              cloud</span> with 1h RSI 55.2 (偏多·顺势 / lean-long, trend-follow).
              But the warnings printed with them:{' '}
              <span className="dn-tag bear">a NEW 4h ⚡TD9 SELL</span> (overbought
              reversal hint at $64,076), a{' '}
              <span className="dn-tag bear">1h water-up death cross just printed
              (刚印)</span> (early bull-to-bear probe on the fast frame), and the
              top-divergence cluster still spans 15m/30m/1h/1d (4 frames). The
              bottom-divergence cluster spans 15m/4h/8h/12h/1w (5 frames) and the
              1M carries a ⚡TD9 BUY.{' '}
              <span className="dn-em">
                Read straight: the mid/slow structure is turning up (golden crosses
                spreading to 12h and 1w, bottom-divergence on five frames), the
                engine confirmed the lift, but the fast frames say the immediate
                bounce is stretched — a new 4h TD9 sell and a fresh 1h death cross
                right at the D-EMA50 cap. The slow turn and the fast exhaustion are
                firing at the same level.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>read</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,076</td><td className="num">46.0</td><td className="neut">death (water-up) 16b</td><td className="bull">above ↓63.9k 40b</td><td>Buy 4</td><td>lean-long · trend</td></tr>
                <tr><td>30m</td><td className="num">64,076</td><td className="num">51.0</td><td className="neut">death (water-up) 3b</td><td className="bull">above ↓63.7k 27b</td><td>Buy 4</td><td>long structure · fade highs</td></tr>
                <tr><td>1h</td><td className="num">64,076</td><td className="num bull">55.2</td><td className="bear">death (water-up) 刚印 (just printed)</td><td className="bull">above ↓63.4k 35b</td><td>Buy 3</td><td>lean-long · trend</td></tr>
                <tr><td>4h</td><td className="num">64,076</td><td className="num bull">56.7</td><td className="bull">golden (water-dn) 9b</td><td className="neut">in cloud 64.0–64.1k 1b</td><td>⚡ TD9 SELL</td><td>short struct · bot-div · TD9 sell</td></tr>
                <tr><td>8h</td><td className="num">64,076</td><td className="num bull">53.0</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑64.4k 15b</td><td>Sell 6</td><td>short struct · bot-div</td></tr>
                <tr><td>12h</td><td className="num">64,076</td><td className="num bull">51.5</td><td className="bull">golden (water-dn) 1b (new)</td><td className="neut">in cloud 62.3–64.8k 9b</td><td>Sell 4</td><td>short struct · bot-div</td></tr>
                <tr><td>1d</td><td className="num">64,076</td><td className="num">50.5</td><td className="neut">death (water-up) 9b</td><td className="neut">in cloud 62.3k–68.0k 16b</td><td>Sell 2</td><td>lean-short · trend · top-div</td></tr>
                <tr><td>3d</td><td className="num">64,076</td><td className="num">45.2</td><td className="bull">golden (water-dn) 8b</td><td className="bear">below ↑76.4k 21b</td><td>Buy 4</td><td>lean-short · trend</td></tr>
                <tr><td>1w</td><td className="num">64,076</td><td className="num">39.7</td><td className="bull">golden (water-dn) 2b (new)</td><td className="bear">below ↑85.9k 27b</td><td>Sell 1</td><td>range-long · bot-div · SMA200 +0.5%</td></tr>
                <tr><td>1M</td><td className="num">64,076</td><td className="num">43.9</td><td className="neut">—</td><td className="bull">above ↓47.4k 30b</td><td>⚡ TD9 BUY</td><td>lean-long · trend</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 08:01 BJ (00:01Z) scan (rolling
                    latest file; archived verbatim at
                    /opt/desk-note/snapshots/2026-08-05-0007/). Header alerts:{' '}
                    <em>12h water-down golden cross (1b), 1w water-down golden cross
                    (2b), 1h water-up death cross (just printed), 4h ⚡TD9 SELL, 1M
                    ⚡TD9 BUY</em>. Top-div 4: 15m/30m/1h/1d · bottom-div 5:
                    15m/4h/8h/12h/1w. Scan spot $64,076, 24h +0.96%, H/L $64,513 /
                    $63,290, qVol $8.31B. Closes are in-progress bars; treat every
                    value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix reads a partial reclaim, not a turn. Spot $64,076 sits{' '}
              <span className="dn-tag bull">+1.29% above D-SMA50 $63,257.59</span>{' '}
              and <span className="dn-tag bull">+0.17% above D-EMA20 $63,965.00</span>
              — two positive daily offsets (up from one on 08-04) — with the
              in-progress <span className="dn-tag bull">W-SMA200 $63,756.61
              (+0.50%)</span> and the settled 200W cycle floor{' '}
              <span className="dn-tag bull">$63,533.52 (+0.85%)</span> below.
              Overhead in order:{' '}
              <span className="dn-tag bear">D-SMA20 $64,364.74 (−0.45%)</span>,{' '}
              <span className="dn-tag bear">D-EMA50 $64,612.06 (−0.83%)</span> — the
              cap — then a gap to{' '}
              <span className="dn-tag bear">D-EMA100 $67,044.05 (−4.43%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $68,356.75 (−6.26%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,187.55 (−7.39%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,493.82 (−7.80%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $69,818.49 (−8.23%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $70,660.04 (−9.32%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $72,574.81 (−11.71%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $73,969.24 (−13.38%)</span>.
              Far above and disused: W-SMA150 $76,876 (−16.65%), W-EMA50 $77,783
              (−17.62%), W-EMA100 $78,760 (−18.64%), W-SMA50 $83,342 (−23.12%),
              W-SMA100 $88,654 (−27.72%). The W-EMA200 sits at{' '}
              <span className="dn-tag bear">$68,566.62 (−6.55%)</span>.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-08-05 00:05Z (close
                $64,046.80); offsets recomputed against live spot $64,075.79.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. The weekly ladder is computed off the full
                2019–2026 wildcard (3,632,048 minute rows / 362 right-labeled
                weekly bars), so W-SMA200 IS computable: $63,756.61 in-progress
                (+0.50%) and $63,533.52 settled — the settled value being the
                trap-watch weekly-close 200-SMA (recomputed 08-03 00:11Z, the
                $63,533.52 floor used for closes throughout). W-EMA200 $68,566.62
                (−6.55%) and W-EMA150 $73,969.24 (−13.38%) are full-history EMAs.
                Daily closes: 07-31 $62,859.90, 08-01 $62,792.30, 08-02 $63,550.00,
                08-03 $63,497.20, 08-04 $64,075.50, 08-05 (in-progress) $64,046.80
                — the 08-04 close is back above both the 200W floor and D-SMA50
                after the 08-03 relapse below the floor (08-02 also closed above
                both; 08-03 dipped below the 200W floor), i.e. the second post-break
                close above both, not the first.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book re-gammaed EVEN more positive · headline +106.0M / rollup +93.78M (was +68.6M / +56.49M) · flip risen to $63,124, spot +1.51% above · a heavier two-sided dampener capping the $64.5k–$68k band</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book added positive gamma for a third straight run —
                the dampener is now heavy on both sides of spot
              </span>. Headline GEX is{' '}
              <span className="dn-tag bull">+106.0M / 1%</span> (was +68.6M on 08-04)
              and the by-expiry rollup is{' '}
              <span className="dn-tag bull">+93.78M</span> (was +56.49M; the
              by-expiry strip sums to +93.78M, matching the gex_summary net_gex
              $93.78M). The 0-γ flip rose{' '}
              <span className="dn-tag">$62,907 → $63,124 (+$217)</span>, and spot
              $64,076 sits <span className="dn-tag bull">+1.51% above flip</span> on
              spot-denominated math (64,075.79 / 63,124 − 1 = +1.507%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads +2.1% off its
              Deribit-index $64,439 ($363 above live spot), which is{' '}
              <span className="dn-tag bull">+2.08%</span> (64,439 / 63,124 − 1 =
              +2.082%) — both references positive, spot above the flip on both. The
              wall map is a positive band clamped right over spot:{' '}
              <span className="dn-tag bull">$70k +18.34M</span> (heaviest wall),{' '}
              <span className="dn-tag bull">$64.5k +15.81M</span>,{' '}
              <span className="dn-tag bull">$68k +15.68M</span>,{' '}
              <span className="dn-tag bull">$67k +15.43M</span>,{' '}
              <span className="dn-tag bull">$65k +14.25M</span>,{' '}
              <span className="dn-tag bull">$66k +13.14M</span>,{' '}
              <span className="dn-tag bull">$72k +9.34M</span>,{' '}
              <span className="dn-tag bull">$80k +8.23M</span>, with the negatives
              the crash-put shelf below:{' '}
              <span className="dn-tag bear">$60k −19.59M</span> (heaviest negative,
              the crash-put) and{' '}
              <span className="dn-tag bear">$62k −6.85M</span>.{' '}
              <span className="dn-em">
                The +$64.5k–$68k positive band (+$15.8M / +$15.7M / +$15.4M /
                +$14.3M / +$13.1M stacked) is exactly the ceiling the price is
                testing — dealers are bid into a fade and offered into a squeeze
                across the whole reclaim zone. The dealer book is structurally
                dampening the bounce, not fuelling it
              </span>. Near-dated: 5AUG26 0.3DTE{' '}
              <span className="dn-tag bull">+20.65M</span> is still on the book
              (settles 08:00Z today, ~8h after this snap) — a positive front, no
              near-dated negative amplifier. Forward strip: 6AUG 1.3 +1.54M, 7AUG
              2.3 +20.56M, 8AUG 3.3 +0.81M, 14AUG 9.3 +6.92M, 21AUG 16.3 +11.80M,
              28AUG 23.3 +16.78M, 25SEP 51.3 +8.83M, 30OCT 86.3 +0.95M, 25DEC 142.3
              +3.39M, 26MAR27 233.3 +0.89M, 25JUN27 324.3 +0.66M — the entire
              forward strip is positive; there is no negative-gamma chunk to flip
              the book bear.
            </p>

            <p>
              IV median across 830 instruments is{' '}
              <span className="dn-tag">40.3%</span> against 30D close-to-close RV of{' '}
              <span className="dn-tag">29.23%</span> — chain-level richness{' '}
              <span className="dn-tag">~+11.1pt</span>.{' '}
              <span className="dn-em">
                A chain-median across N instruments, not a tradable spread;
                expiry-/strike-level vega, skew and term structure remain not
                loaded; the vol read stays framework-only.
              </span>{' '}
              Put/Call OI ratio 0.52 (call OI 221,708 vs put OI 115,342 — a
              call-heavy book, consistent with the positive-gamma dampener). RV
              methodology: 30D close-to-close, logret.std × √365 × 100 on the last
              30 daily log returns (= 31 consecutive daily closes) anchored to
              parquet last bar 2026-08-05 00:05Z; range $62,255 – $66,522 over the
              underlying 31-close window. (For reference, last 29 returns / 30
              closes reads 29.48%; the 29.23% page value comes from 30 returns.)
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Tier-1 eased back (10Y −5bp to 4.70%, TIPS −4bp to 2.43%, HY OAS −7bp to 2.78%) · rates filter still FALSE but narrowed to 15bp (was 20bp on 08-04) · MOVE dark · BTC deeply lagging a roaring risk tape</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape eased back across rates, real-rates and credit after
                08-04&rsquo;s jump — but the reclaim-long rates filter stays FALSE
              </span>. Dashboard render is 2026-08-04 22:15Z, ~1.8h before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bull">4.70% (−5.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.38</span>, episodic z{' '}
              <span className="dn-tag">+1.33</span> — EXTREME RISK-OFF tag, eased 5bp
              off 08-04&rsquo;s 4.75%. 10Y TIPS real{' '}
              <span className="dn-tag bull">2.43% (−4.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.66</span> — still EXTREME RISK-OFF,
              eased. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.31% (+1.0bp)</span>, episodic z +2.17. HY
              OAS <span className="dn-tag bull">2.78% (−7.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−0.62</span> — loose, eased. MOVE bond
              vol <span className="dn-tag stale">unavailable (fetch failed)</span> —
              dark this render. DXY{' '}
              <span className="dn-tag bull">99.88 (−0.08)</span>, episodic z −2.18 —
              soft. Fed net liquidity{' '}
              <span className="dn-tag bear">$5.825T (−0.092T)</span>, RISK-OFF
              episodic. US-JP 10Y spread{' '}
              <span className="dn-tag">2.03% (−5.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag bull">157.41 (−0.17)</span> (yen firmer). NFCI
              −0.554 (stale 11d).{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) stays FALSE at
                4.70% but the gap narrowed to 15bp from 08-04&rsquo;s 20bp (4.75%)
                — moving back toward the gate but not through it. 10Y and TIPS both
                carry EXTREME RISK-OFF regime z (+2.38 / +2.66); the eased day does
                not change the regime read. MOVE is dark so bond-vol confirmation is
                unavailable this run.
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
                <tr><td>US 10Y nominal</td><td className="num">4.70%</td><td className="num bull">−5.0bp</td><td className="num bear">+2.38</td><td className="num">+1.33</td><td className="bear">EXTREME risk-off · eased</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.43%</td><td className="num bull">−4.0bp</td><td className="num bear">+2.66</td><td className="num">+1.24</td><td className="bear">EXTREME risk-off · eased</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.31%</td><td className="num bear">+1.0bp</td><td className="num">+1.28</td><td className="num bear">+2.17</td><td className="neut">episodic pop</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num bull">−7.0bp</td><td className="num bull">−0.62</td><td className="num">+0.52</td><td className="bull">loose · eased</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.554</td><td className="num">−0.01</td><td className="num bull">−1.56</td><td className="num bull">−1.53</td><td className="stale">risk-on · stale 11d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">unavailable · fetch failed</td></tr>
                <tr><td>DXY</td><td className="num">99.88</td><td className="num bull">−0.08</td><td className="num">+0.83</td><td className="num bull">−2.18</td><td className="bull">softer</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.825T</td><td className="num bear">−0.092T</td><td className="num bull">−1.09</td><td className="num bear">−2.47</td><td className="bear">drained on the week</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.41</td><td className="num bull">−0.17</td><td className="num">+0.30</td><td className="num bear">−3.15</td><td className="bull">yen firmer</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.03%</td><td className="num bull">−5.0bp</td><td className="num">−0.24</td><td className="num">+1.33</td><td className="neut">neutral</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7464</td><td className="num bull">−0.00</td><td className="num bull">−1.46</td><td className="num bull">−2.20</td><td className="bull">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.289</span>{' '}
              (loosened from 08-04&rsquo;s 0.315 but still in the NORMAL band,
              0.25–0.5). BTC&rsquo;s ties re-tightened to the risk complex: NQ{' '}
              <span className="dn-tag">+0.565</span> (top), TSLA{' '}
              <span className="dn-tag">+0.554</span>, SP500{' '}
              <span className="dn-tag">+0.542</span>, NVDA{' '}
              <span className="dn-tag">+0.479</span>, JP225{' '}
              <span className="dn-tag">+0.431</span>, COPPER +0.393, SILVER +0.383,
              GOLD +0.341. 7d performance is the loud line:{' '}
              <span className="dn-tag bear">BTC +0.20%</span> — essentially flat
              while the risk tape ripped: NQ{' '}
              <span className="dn-tag bull">+6.64%</span>, SP500{' '}
              <span className="dn-tag bull">+3.99%</span>, JP225{' '}
              <span className="dn-tag bull">+4.77%</span>, and the software
              mega-caps ran hard — MSFT{' '}
              <span className="dn-tag bull">+24.46%</span>, AMZN{' '}
              <span className="dn-tag bull">+19.89%</span>, GOOGL{' '}
              <span className="dn-tag bull">+13.36%</span>, NVDA{' '}
              <span className="dn-tag bull">+9.76%</span>, TSLA{' '}
              <span className="dn-tag bull">+6.04%</span>. Metals firm: PLAT +7.85%,
              URNM +7.28%, PALL +6.16%, COPPER +4.49%, SILVER +4.01%, GOLD +1.23%.
              Energy collapsed: CL{' '}
              <span className="dn-tag bear">−8.87%</span>, BRENT{' '}
              <span className="dn-tag bear">−7.25%</span>; AAPL{' '}
              <span className="dn-tag bear">−8.79%</span> and META −1.37% the only
              red mega-caps.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine is ~−6.44pt (BTC +0.20% vs
                NQ +6.64%) — BTC sat out a broad risk-on week that lifted equities,
                metals and the software complex. The correlation is NORMAL (|r|
                0.289) but the return gap is BTC-internal weakness: the risk tape
                is not the problem, BTC is not participating
              </span>. JGB monthly 2.67% carries EXTREME RISK-OFF monthly tag — do
              not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · book FLAT · cover-bounce scout STOOD DOWN (SM sold the reclaim, no D-EMA50 cap close) · chase-short STOOD DOWN (coil broke up, gamma more positive) · no fresh trades</span>
            </h2>

            <p>
              <span className="dn-signal">
                Both sides of the 08-04 fork are stood down — price and positioning
                pointed opposite directions, so nothing armed
              </span>. The cover-bounce scout was gated on TWO legs: a clean SM
              cover AND a D-EMA50 cap close above $64,612. Neither fired — SM rolled
              deeper short (−9,028 → −10,007, longs shed), and the 08-04 daily
              closed $64,075.50, $536 under the cap. The chase-short was gated on a
              flip/old-floor break with SM short AND gamma flipping negative —
              instead the coil broke UP off the 200W floor and the dealer book
              re-gammaed even more positive (+106.0M headline), so its gamma leg
              inverted and its price leg went the wrong way. The book today is: no
              scout long into a reclaim that SM is selling with no D-EMA50 cap
              close; no chase-short into a heavier positive-gamma book with the
              floor holding and price above the flip. Book stays{' '}
              <span className="dn-em">FLAT</span>. The single line that arms the
              scout is a D-EMA50 cap close above $64,612 <em>with</em> SM covering
              (short_btc rolling down and/or net &gt; −9k); the single line that
              arms the chase-short is a 1d close back below the $63,124 flip / $63,311
              old-floor band with gamma flipping negative.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">flat · scout · STOOD DOWN · 2 of 2 legs unmet · SM sold the reclaim, no D-EMA50 cap close</span>
              <div className="dn-trade-name">
                Cover-bounce scout — stood down: price reclaimed but SM rolled deeper short and the D-EMA50 cap held
              </div>
              <div className="dn-thesis">
                The scout needs the reclaim to be a real cover-bounce: an SM cover
                (short book rolling down / net climbing off the lows) AND a D-EMA50
                cap close above $64,612 to confirm the overhead reclaim. This run
                gave the opposite on positioning: SM shed longs and deepened net
                short to −10,007 (a clean read, no BJ-14:36 artifact), while the
                08-04 daily closed $64,075.50 — $536 short of the cap. The
                structural backdrop is mixed: two daily offsets flipped positive
                (D-SMA50 +1.29%, D-EMA20 +0.17%), fresh 12h and 1w water-down golden
                crosses printed, the 200W floor held on close — but funding
                re-heated (mean +6.00%, 0 negatives), OI contracted a second day,
                and every 24h flow read is net-offered. The reclaim is a
                covering grind into a positive-gamma cap, not a demand-led base.
                Stood down until the position book confirms.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">arming trigger (both legs)</span><span className="dn-lvl-v bull">1d close &gt; $64,612 (D-EMA50 cap reclaim) AND SM covering (short_btc rolling down and/or net &gt; −9,000) inside the same session</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on trigger print, scout long 0.2R — the mid/slow structure (golden crosses spreading to 12h/1w, bottom-div on 5 frames) supports it once positioning confirms</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1d close &lt; $63,533 (200W cycle floor) — a close back below ends the reclaim read</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$67,044 (D-EMA100) then $68,357 (D-SMA100) — into the +$64.5k–$68k positive-gamma band</span></div>
                <div><span className="dn-lvl-k">R/R</span><span className="dn-lvl-v">trigger ~$64,612, stop $63,533 = ~$1,079 risk; first target $67,044 = ~$2,432 ≈ 2.25:1 — but the positive-gamma band dampens the path, so treat the target as a grind not an impulse</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> do not scout-long on the price leg alone. The
                08-04 note&rsquo;s discipline holds — a reclaim that SM is selling
                and OI is bleeding is a covering squeeze, not a base. The scout arms
                only when the D-EMA50 cap close and an SM cover print together;
                either one alone is a false signal.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">flat · chase-short · STOOD DOWN · coil broke UP, gamma more positive</span>
              <div className="dn-trade-name">
                Chase-short — stood down: the coil resolved upward off the floor and the dealer book re-gammaed heavier positive
              </div>
              <div className="dn-thesis">
                The chase-short was gated on a flip/old-floor break ($63,124 flip /
                $63,311 old floor) with SM short AND gamma flipping negative. Two of
                three inverted: the coil broke UP off the 200W floor (08-04 close
                $64,075.50, spot +1.51% above the flip) and the dealer book
                re-gammaed to +106.0M headline / +93.78M rollup — a heavier positive
                dampener, the opposite of the negative-gamma amplifier the short
                needs. Only the SM-short leg is intact (net −10,007, and cleanly so).
                With the price and gamma legs both against it, the short stands down;
                the flushed carry noted on 08-04 also leaves less cascade fuel even
                if the floor were to break.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm trigger</span><span className="dn-lvl-v bear">1d close &lt; $63,124 flip / $63,311 old floor AND aggregate GEX flipping negative (a fresh negative-gamma chunk added inside the front expiries)</span></div>
                <div><span className="dn-lvl-k">SM leg (intact)</span><span className="dn-lvl-v bear">SM net −10,007, deeper short, clean tell — the one leg already in hand</span></div>
                <div><span className="dn-lvl-k">targets on re-arm</span><span className="dn-lvl-v">$62k (−6.85M) then $60k (−19.59M crash-put shelf) — the heaviest negative wall</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no short into a +106.0M positive-gamma book with the 200W floor holding and price above the flip</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the entire forward GEX strip is positive (no
                negative-gamma chunk out to 25JUN27); a gamma flip would require a
                fresh negative chunk to build, not just spot drifting down. The $60k
                −19.59M crash-put is the structural target but the path there runs
                through the +$64.5k–$68k / $62k−$63k positive band that dampens both
                directions.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · reclaim vs positioning divergence · the tape and the book point opposite ways</span>
              <div className="dn-trade-name">
                Divergence watch — price reclaimed off the floor while SM, funding, OI and flow all leaned the other way
              </div>
              <div className="dn-thesis">
                The defining feature of this snap is a clean divergence: price up
                +0.77% and a $578 08-04 up-close reclaiming the 200W floor and
                D-SMA50, against SM rolling deeper short (−980, longs shed), funding
                re-heating (0 negatives), OI contracting a second day, and every 24h
                aggressor-flow read net-offered. Divergences resolve one of two
                ways — the tape drags the book (SM covers into a D-EMA50 cap close,
                arming the scout) or the book drags the tape (the reclaim fails back
                below the flip, re-arming the chase-short). The 4h ⚡TD9 SELL and the
                just-printed 1h water-up death cross say the immediate fast-frame
                risk is the second path; the fresh 12h/1w golden crosses and
                five-frame bottom-divergence say the slow structure favours the
                first. This watch resolves when either the cap close + SM cover, or
                the flip-loss + gamma flip, prints.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">bull resolution</span><span className="dn-lvl-v bull">D-EMA50 cap close &gt; $64,612 with SM covering — tape drags the book, scout arms</span></div>
                <div><span className="dn-lvl-k">bear resolution</span><span className="dn-lvl-v bear">1d close &lt; $63,124 flip with gamma flipping negative — book drags the tape, chase-short arms</span></div>
                <div><span className="dn-lvl-k">fast-frame tell</span><span className="dn-lvl-v bear">4h ⚡TD9 SELL + 1h water-up death cross (just printed) — near-term risk is the fade back into the band</span></div>
                <div><span className="dn-lvl-k">slow-frame tell</span><span className="dn-lvl-v bull">fresh 12h (1b) + 1w (2b) water-down golden crosses + bottom-div on 15m/4h/8h/12h/1w — the slow turn favours the reclaim</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a price/positioning divergence is a
                &ldquo;wait&rdquo; signal, not a trade. Do not pre-position for
                either resolution — the whole point of the FLAT book is that the
                confirming print (cap close + cover, or flip-loss + gamma flip)
                tells you which way the divergence broke. Trade the resolution, not
                the divergence.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the coil broke up off the floor but SM sold it and gamma capped it · both triggers stood down · the note turns on whether the tape drags the book or the book drags the tape</span>
            </h2>

            <p>
              Of the 08-04 decision conditions: the coil-breaks-up-on-clean-SM-cover
              path DID NOT FIRE cleanly — price broke up but SM sold it (deeper
              short, no cover) and there was no D-EMA50 cap close; the
              coil-breaks-down path DID NOT FIRE — the floor held and price closed
              above it; the flip/old-floor break DID NOT FIRE — spot sits +1.51%
              above the risen $63,124 flip; the gamma-flips-negative condition
              INVERTED — the book re-gammaed to +106.0M headline. <em>The only 08-04
              condition that resolved in a single direction is SM positioning, which
              deepened short cleanly (no artifact) — but that leg alone arms
              neither trade.</em> The conditions today re-set around a reclaim the
              positioning book is fighting:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Cover-bounce scout (long) — both legs</td><td className="bull">1d close &gt; $64,612 (D-EMA50 cap) AND SM covering (short_btc rolling down / net &gt; −9,000)</td><td>scout long 0.2R, target $67,044 (D-EMA100) then $68,357 (D-SMA100)</td></tr>
                <tr><td>Chase-short (short) — re-arm</td><td className="bear">1d close &lt; $63,124 flip / $63,311 old floor AND aggregate GEX flipping negative</td><td>reassess chase-short only after a fresh audited trigger — no standing size from this note; framework targets $62k (−6.85M) then $60k (−19.59M crash-put)</td></tr>
                <tr><td>200W cycle floor lost</td><td className="bear">weekly close &lt; $63,533.52 (200W) — would end the 5-week above-floor streak</td><td>cycle-support break — separate reassessment; the &ldquo;reclaimed above the floor&rdquo; read ends</td></tr>
                <tr><td>Reclaim holds + gamma stays positive</td><td className="bull">1d closes hold &gt; $63,533 (200W) AND aggregate GEX stays positive</td><td>reclaim-above-floor read holds; scout asymmetry improves only if SM begins to cover</td></tr>
                <tr><td>Fast-frame fade (near-term)</td><td className="bear">4h ⚡TD9 SELL + 1h water-up death cross (just printed) resolve into a 4h close &lt; $63,533</td><td>the reclaim fades back into the band; watch for the flip-loss re-arm of the chase-short</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">10Y &lt; 4.55% close — FALSE at 4.70% (15bp to fire, narrowed from 20bp on 08-04)</td><td>standalone filter FALSE; even a BTC-internal cover-bounce would run without the rates tailwind</td></tr>
                <tr><td>BTC-vs-TradFi lag</td><td className="bear">BTC +0.20% vs NQ +6.64% 7d = −6.44pt lag · |r| 0.289 NORMAL</td><td>watch for BTC catch-up participation or continued idiosyncratic underperformance; not a trade on its own</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the reclaim drags the positioning book with it — a D-EMA50
                cap close above $64,612 with SM finally covering (arms the scout
                into the $67k–$68.5k cluster) — or whether the positioning book
                drags the tape back down — a 1d close below the $63,124 flip / $63,311
                old-floor band with gamma flipping negative (re-arms the chase-short
                toward the $60k −19.59M crash-put, though the re-heated-but-not-cap-pinned
                carry and the deep positive-gamma band leave a dampened path)
              </span>. Until one of those prints, this note runs as written: the
              coil broke up off the cycle floor into a strong 08-04 close, but the
              bounce is un-confirmed on SM (deeper short, clean), funding (re-heated,
              0 negatives), OI (contracting), and flow (net-offered), and it is
              capped by a heavier positive-gamma book at the $64.5k–$68k band. Book
              stays FLAT: no scout long into a reclaim SM is selling, no chase-short
              into a +106.0M positive book with the floor holding. The right read
              for the next 24h is <em>wait for the divergence to resolve — trade the
              confirming print, not the reclaim</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit
            </span>
            <b>Status:</b> STAGE B codex hostile-but-fair audit returned
            BLOCK-CRITICAL — 1 CRITICAL + 2 MAJOR + 2 MINOR
            (audits/2026-08-05-desk-note.md). STAGE C applied every finding and ran
            a grep-closure pass over the full EN file (key wrong-claim pattern +
            semantic variants, fix-and-re-grep until zero stale hits) before
            promoting v1 → v2. Finding-by-finding:{' '}
            <b>DN-001 (CRITICAL)</b> — the &ldquo;first daily close back above both
            the 200W floor and D-SMA50 since the 07-31 break&rdquo; claim was
            self-refuted (08-02 $63,550.00 already closed above both). Patterns
            searched: &ldquo;first daily close back above&rdquo;, &ldquo;first back
            above&rdquo;; hits before 2 (prose + MA footnote), hits after 0 —
            reframed to the second post-break close above both, back above after the
            08-03 relapse below the floor. RESOLVED.{' '}
            <b>DN-002 (MAJOR)</b> — W-SMA200 was called non-computable only because
            the weekly ladder silently used a 2023+ subset (189 bars). Recomputed
            the weekly ladder off the full 2019–2026 wildcard (3,632,048 minute rows
            / 362 right-labeled weekly bars, matching the 08-04 lineage): W-SMA200
            $63,756.61 in-progress / $63,533.52 settled (= trap-watch floor),
            W-EMA150 $73,969.24, W-EMA200 $68,566.62. Patterns searched:
            &ldquo;non-computable&rdquo; / &ldquo;not computable&rdquo;, &ldquo;189
            weekly bars&rdquo;, subset EMA values &ldquo;67,110&rdquo; /
            &ldquo;73,053&rdquo;, &ldquo;W-EMA seed&rdquo;; hits before 8 (manifest,
            prose ladder, footnote, audit head), hits after 0. RESOLVED.{' '}
            <b>DN-003 (MAJOR)</b> — the decision table carried a sized
            &ldquo;chase-short 0.25R&rdquo; outside the flat/scout framework.
            Pattern searched: &ldquo;0.25R&rdquo;; hits before 1, hits after 0 — the
            row is now a framework/watch condition (reassess only after a fresh
            audited trigger, no standing size). RESOLVED.{' '}
            <b>DN-004 (MINOR)</b> — the SM Δ baseline was mislabeled &ldquo;vs 08-04
            note&rdquo; when the −9,028 figure is the same-clock 24h baseline
            (physical line 107617); the 08-04 note itself displayed −8,995. Pattern
            searched: &ldquo;vs 08-04 note&rdquo; / &ldquo;the 08-04 note&rsquo;s
            −9,028&rdquo;; hits before 2 (meta label + Positioning prose), hits after
            0 — relabeled &ldquo;same-clock 24h baseline&rdquo;, the arithmetic
            (979.5 / 9,027.9 = 10.85%) unchanged and confirmed correct. RESOLVED.{' '}
            <b>DN-005 (MINOR)</b> — the MTF cadence said the rolling latest file
            &ldquo;regenerates hourly&rdquo; when the live artifact had advanced
            intrahour (08:16 BJ / 00:16Z at read time). Pattern searched:
            &ldquo;regenerates hourly&rdquo; / &ldquo;regenerates&rdquo;; hits before
            1, hits after 0 — reworded to a rolling latest-file artifact that can
            advance intrahour, with the archived 00:07Z copy as the pinned source.
            RESOLVED. All findings RESOLVED (hits-after = 0); note promoted to v2.
            The codex-confirmed-clean set (funding × 1095, GEX dual-reference sign,
            by-expiry rollup +93.78M, daily MA matrix, 30D RV 29.23%, macro Tier-1,
            cross-asset |r| 0.289, claims-vs-loaded-data discipline, requireViewer
            gate) was left intact. <b>Build note (INFO):</b> this server runs Node
            18.19.1; Next 16.2.6 hard-exits on Node &lt; 20.9.0, so a full{' '}
            <code>next build</code> is environment-blocked;{' '}
            <code>npx --no-install tsc --noEmit</code> is the build proxy and
            returns exit 0.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-08-05 00:05Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-08-04 22:15Z (~1.8h before
            snapshot) and some inputs are explicitly stale, dark, or pending and
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
                The coil broke up off the floor, but smart money sold the reclaim
                and the dealer book capped it. Price and positioning point opposite
                ways. Wait for the divergence to resolve. Flat.
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
            v2 · 2026-08-05 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
