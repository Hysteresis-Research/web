import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-09 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-09',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-09' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260609() {
  await requireViewer('/desk/2026-06-09');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-09 · v2</span>
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
              <span className="dn-big">$63,042</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.31%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-09 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-09 00:05Z (snapshot pin row, BJ 08:05 06-09 per live_db <code>t</code> BJ-local convention)</td>
                  <td className="dn-flag">
                    fresh · 1-min · pin row = <code>t == &ldquo;06-09 08:05&rdquo;</code>{' '}
                    (BJ-local, UTC 00:05Z) per runbook §2 LIVE-TAPE landmine ·
                    daily-update.timer 00:00Z + reports-refresh.timer ~:01 both
                    just ran, server artifacts ~4-min fresh · two-day gap since
                    the 06-07 note (06-08 note was skipped); diffs labelled
                    &ldquo;vs 06-07&rdquo; span ~48h. The 7JUN26 +3.87M front
                    chunk settled clean at 08:00Z 06-07 and the 8JUN26 −2.29M
                    front chunk settled at 08:00Z 06-08, both inside the
                    inter-note window; today the 9JUN26 +2.26M chunk is the
                    next settle at 08:00Z (~8h ahead) — the next positive front
                    chunk after an intervening 8JUN negative, pending the
                    08:00Z settle (NOT yet settled at this anchor)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-09 00:01Z scan (BJ 08:01, archived to snapshots/2026-06-09-0008/)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · archived under
                    snapshots/2026-06-09-0008/ before read per runbook §1
                    archive policy · 4 min stale vs anchor · in-progress bars ·
                    multi-TF ⚡ TD9 BUY narrowed to ONE concurrent frame (3d
                    only, was three concurrent across 12h / 1d / 3d on 06-07
                    — the 12h and 1d frames advanced past their TD9 print and
                    are now Sell 5 / Sell 1 inside the post-wick bounce) · 1M
                    still TD8 → 9? pending one close · header alerts: 12h
                    water-down golden cross just printed (1 bar) and 3d ⚡ TD9
                    BUY at $63,043 — the engine frames have rebuilt past their
                    TD9 oversold-counter signatures, the cycle frames are
                    catching up
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-09 00:01Z snapshot (archived)</td>
                  <td className="dn-flag">
                    archived to snapshots/2026-06-09-0008/ · 4 min stale vs
                    anchor · Deribit idx $63,264 vs live $63,042 ($222 above
                    live — inside a normal idx-vs-live tracking band) · 946
                    instruments (was 1,008 on 06-07 — net −62 as the 7JUN and
                    8JUN chains both cleared and new 11JUN / 12JUN /
                    near-dated chains listed smaller than the cleared chunks) ·
                    9JUN26 0.3 DTE +2.26M POSITIVE is the next settle (08:00Z
                    06-09, ~8h ahead); the next positive front chunk after an
                    intervening 8JUN −2.29M negative — pending the 08:00Z
                    settle, NOT yet settled at this anchor — vs 7JUN +3.87M /
                    8JUN −2.29M which bracketed the inter-note window, and vs
                    6JUN −8.40M / 5JUN −9.61M which both carried amplifiers
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-09 00:01Z (archived)
                  </td>
                  <td className="dn-flag">~4 min lag · 7d 1h bars · 22 assets · 167 rows · regime tag still IDIOSYNCRATIC (mean |r| 0.232, basically flat vs 06-07&rsquo;s 0.233 — the easing direction stalled at the threshold) · BTC&rsquo;s top tie STAYS SILVER +0.300 (was +0.261 on 06-07, firmed +0.039); BTC↔NQ tie FIRMED FURTHER to +0.227 (was +0.188 — firmed +0.039 again, two-note co-firming as BTC and NQ both partially recovered in the rolling 7d window)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-08 22:17Z render (archived)</td>
                  <td className="dn-flag">
                    ~1h 48m render lag · Monday-evening UTC render: the
                    Friday 06-05 FRED daily print finally rolled in since the
                    06-07 06:06-render baseline · US 10Y nominal 4.55%{' '}
                    <em>(+8.0bp Δ — the rates re-grow gate at 4.53% FIRED on
                    the Friday close; was 4.47% on the 06-07 carried baseline)</em>,
                    10Y TIPS 2.19% (+8.0bp, EXTREME RISK-OFF episodic
                    deepened), 5Y5Y BE 2.23% (−1.0bp), HY OAS 2.76% (+2.0bp,{' '}
                    <em>gate 2.78% now 2bp from fire vs 4bp on 06-07</em>),
                    NFCI −0.494 (stale 10d, was 8d on 06-07), MOVE 77.0
                    (+1.78 — firmed further past the 06-06 lineage jump), DXY
                    100.15 (+0.08), Fed net liq $5.834T (no fresh weekly
                    print), US-JP 10Y spread 2.03% (+8.0bp — widened
                    sharply on the US-side move), USD/JPY 160.30 (+0.31),
                    USD/CNY 6.7650 (−0.01) · the &ldquo;weekend FRED freeze&rdquo;
                    caveat from 06-07 partially lifted as the Friday print
                    landed; the rates re-grow gate fired, the credit gate
                    moved 2bp closer, and the reclaim-long rates filter
                    (10Y &lt; 4.55%) is now AT the boundary at exactly 4.55%
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet anchor row 2026-06-09 00:05Z (anchor-limited; physical last row is 2026-06-09 00:06Z per DN-005 audit relabel · btcusdt_1m_2024..2026 subset per desk policy + full-history references)</td>
                  <td className="dn-flag">
                    parquet anchor row 00:05Z exactly matches the snapshot
                    anchor (no anchor-vs-parquet drift) · close at parquet
                    anchor row $63,022.00 vs live spot $63,042.00 (a $20.00
                    gap, tightest of the lineage; physical last row 00:06Z
                    close is $63,069.30 — the relabel keeps the anchor pin
                    explicit per DN-005). MA source universe is the
                    2024-2026 subset per the 06-02 audit DN-005 desk-policy
                    carry; under this subset W-SMA150 / W-SMA200 are
                    non-computable (129 weekly bars, +1 vs 06-07&rsquo;s 128;
                    short of both windows); W-EMA150 / W-EMA200 print but
                    are reported as <em>seeded</em> truncated lines.
                    Full-history (2019-09-09 → 2026-06-09, 354 weekly bars
                    including the in-progress 2026-06-15 weekly bar at
                    $63,022.00 1m close) added for the 200W reference;
                    formal full-history W-SMA200 of 200 closed weekly bars
                    ending 06-08 = $62,019 (vs 06-07&rsquo;s $62,008 — moved
                    up $11 as the rolling window dropped one low-end week
                    and added the 06-08 close $63,058). Live spot $63,042
                    sits <em>+1.65% ABOVE</em> the full-history 200W (was
                    −1.73% BELOW on 06-07 — a +3.38pt flip). Offsets
                    recomputed against live spot $63,042.00 per 06-03 audit
                    DN-006 lineage carry
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W watch (weekly_200sma.json)</td>
                  <td className="dn-v-cell">NOT WRITTEN (file absent on server at audit time, fourth consecutive lineage carry)</td>
                  <td className="dn-flag">
                    200W watch JSON unavailable (fourth consecutive note);
                    fall back to the full-history parquet computation per
                    runbook §2 do-not-fabricate. Formal W-SMA200 of 200
                    closed weekly bars ending 06-08 = $62,019. <em>Live
                    spot $63,042 sits +1.65% / +$1,023 above; the 06-08
                    weekly close $63,058 prints +$1,039 / +1.68% ABOVE the
                    level — the first weekly close above the full-history
                    200W since the down-leg broke on 06-01 and the
                    structural resolution of the 06-07 watch on the
                    bullish side.</em> The historical-frequency context per
                    runbook do-not-fabricate: weekly closes below their own
                    200W on the desk&rsquo;s full-history series have
                    occurred in <em>8 / 154 valid 200W observations
                    (~5.19%)</em>, clustered at deep cycle capitulations;
                    no such close prints on this week&rsquo;s bar, and no
                    percentile / break-event claim is asserted off a missing
                    JSON, only the level + the 06-08 weekly-close vs 200W
                    gap is surfaced
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale 68d · monthly · do not treat as live (staleness count up +2d from 06-07)</td>
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
              <span className="dn-v bear">−1.81% (snap = near today&rsquo;s 24h trough −1.82%; shallower than 06-07&rsquo;s snap-minute trough of −3.16%)</span>
              <span className="dn-src">live · 24h mean ann <em>+1.46%</em> (was −0.13% on 06-07 · a +1.59pt FLIP back to positive — the first positive 24h mean of the post-wick window) · cap occupancy 0 / 1441 sampled rows (fifth consecutive cap-empty note · the lineage cap regime stays structurally retired) · negative-funding minutes 405 / 1,441 = <em>28.11%</em> (was 72.80% on 06-07 — eased by −44.69pt, the largest single-note share-shift of the lineage) · 24h funding trough −1.821% ann at BJ 07:34 06-09 / UTC 23:34 06-08 — early-morning BJ / late-evening UTC trough, NOT the snap minute as on 06-07 · snap minute −1.806% reads 0.015pt shallower than the 24h trough · 24h max +4.244% ann @ BJ 14:12 06-08 / UTC 06:12 06-08 — the mid-Asia positive peak inside the rally session</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">−3.16% → −1.81% (+1.35pt shallower; mean +1.59pt back to positive)</span>
              <span className="dn-src">range −1.82% / +4.24% · longest contiguous neg streak 145 min / 2.42h from BJ 02:13 06-09 / UTC 18:13 06-08 → BJ 04:37 06-09 / UTC 20:37 06-08 — vs the 06-07 streak of 7.72h, today is −5.30h shorter (the regime eased materially) and FAILS the ≥4h cumulative short-pay gate on a single contiguous run; longest contiguous pos streak 731 min / 12.18h from BJ 08:05 06-08 / UTC 00:05 06-08 → BJ 20:15 06-08 / UTC 12:15 06-08 — the positive band now dominates the 24h tape · the leverage gate has CLOSED on the funding side, the leg-2 promotion criterion from the mean-revert scout no longer clears</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−0.36% (−355 BTC)</span>
              <span className="dn-src">live · first 24h OI SHRINK since the 06-04 down-leg started (06-05 +0.6%, 06-06 +2.31%, 06-07 +0.53% all expansions) — 98,871 → 98,516 (08:04 BJ baseline per DN-003 carry; t == &ldquo;06-08 08:04&rdquo; BJ-local / UTC 00:04 06-08) with 24h peak 99,435 @ BJ 12:34 06-08 / UTC 04:34 06-08 (mid-day Asia of 06-08) and 24h trough 97,539 @ BJ 21:21 06-08 / UTC 13:21 06-08 (early-EU session of 06-08) · vs 06-07 pin OI 101,830 the book has shrunk ~−3,314 BTC / −3.25% across ~48h — the leverage book that built into the wick has bled materially on this side of the recovery · SM long_btc Δ +648, short_btc Δ −2,320 — the 24h book shape REVERSED again to a short-cover + long-add, the inverse signature of 06-07&rsquo;s long-trim + short-add</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">64.71 / 35.29</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · bled −1.72pt vs 06-07&rsquo;s 66.43 (the first net cool since 06-05, retail crowding leaked into the rally) · 24h range 63.18 / 67.51 with peak 67.51 @ BJ 08:05 06-08 / UTC 00:05 06-08 (the 24h-ago anchor pin row — retail held into the rally lead-in then bled through the day) and trough 63.18 @ BJ 01:06 06-09 / UTC 17:06 06-08 (into the early-EU bleed of 06-08 / pre-dawn BJ 06-09); still 4pt above the prior down-leg trough of 60.35% on 05-31, the de-crowding remains a second-derivative cool but the direction turned</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−38.7k (net SHORT; 24h book REVERTED again to long-add + short-trim — the inverse signature of 06-07)</span>
              <span className="dn-src">live · long 14.44k − short 53.10k · short_btc 24h peak 55,422 @ BJ 08:05 06-08 / UTC 00:05 06-08 — actually the 24h-ago anchor pin row, so the short side has been trimming for the entire 24h; short_btc 24h trough 52,232 @ BJ 19:41 06-08 / UTC 11:41 06-08 — the lowest short read of the post-wick window; long_btc 24h peak 15,517 @ BJ 14:46 06-08 / UTC 06:46 06-08 and long_btc 24h trough 13,344 @ BJ 09:51 06-08 / UTC 01:51 06-08 (early-Asia of 06-08); SM net trough −41,676 @ BJ 12:31 06-08 / UTC 04:31 06-08 and SM net peak (least short) −37,475 @ BJ 19:31 06-08 / UTC 11:31 06-08 — the book scaled to most-short into mid-day Asia 06-08 then unwound steadily to least-short into the evening of 06-08 before stabilizing back near −38.7k into snap</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 06-07 note</span>
              <span className="dn-v bull">−42.6k → −38.7k (+3,898 less short; long +829, short −3,070; ~48h gap)</span>
              <span className="dn-src">|Δ|/prior_net = 9.16% (3,898/42,556) · across the ~48h inter-note gap the BOOK shifted to LESS SHORT via short-trim + long-add — the inverse signature of 06-07&rsquo;s long-trim + short-add, and consistent with the 06-08 rally session. The lineage signature has FLIPPED ONCE MORE — 06-01/02/03/04 short-stacks, 05-31/06-05 two-sided shrinks, 06-06 long-bottom-fish, 06-07 short-stack-reversion, today short-cover + long-add into the recovered tape. The book is following price, not leading it. The 06-07 snap short_btc peak 56,172 (at the 06-07 anchor) was also the post-wick lineage short_btc high; since then short_btc has bled −3,070 BTC across the 48h gap</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v bear">47.6% / 39.30%</span>
              <span className="dn-src">GEX median IV · 946 inst. (down from 1,008 on 06-07 · net −62 as the 7JUN and 8JUN chains both cleared at 08:00Z 06-07 / 06-08 and the new 11JUN / 12JUN near-dated chains listed smaller than the cleared chunks) · IV cooled materially −5.9pt as the chain shed two front chunks across a calm rally tape (was 53.5% on 06-07) · 30D RV firmed to 37.03% → 39.30% as the rolling 30D window now stamps the 06-07 (+3.74% close-to-close) + the 06-06 wick prints simultaneously · IV/RV spread NARROWED to ~+8.30pt (was +16.47pt on 06-07 — a −8.17pt collapse as IV cooled and RV firmed; the chain is no longer pricing forward realized as high as the 06-07 weekend mark)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−2.03% (below; live spot ref)</span>
              <span className="dn-src">flip $64,351 (was $63,538 on 06-07 · MOVED UP +$813 with the rally — the dealer book repriced the flip alongside spot, walking the inflection up by roughly the same magnitude as the spot recovery) · vs live spot $63,042 (−2.03%; 63,042.00 / 64,351 − 1 = −2.034%) · vs GEX file Deribit idx $63,264 (−1.69%; 63,264 / 64,351 − 1 = −1.690%, matches the file&rsquo;s own dist-to-flip tile of −1.7%) — both refs negative, the live-spot gap NARROWED to −2.03% from 06-07&rsquo;s −4.10% (+2.07pt closing as flip walked +$813 and spot rallied +$2,109). Aggregate GEX improved marginally to −36.7M (was −38.7M on 06-07, +$2.0M repair — the gamma move is smaller than 06-07&rsquo;s lineage-largest +$14.8M, the book is still firmly net-short-gamma)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The 06-07 watch resolved on the BULLISH side: the in-progress
                weekly bar (W-MON anchored to 06-08) closed at $63,058 — that
                is <em>+$1,039 / +1.68% ABOVE</em> the full-history W-SMA200
                $62,019, the first weekly close ABOVE the cycle floor since
                the down-leg broke on 06-01, and the structural resolution of
                the 06-07 note&rsquo;s one open watch on the side of the
                bulls
              </span>. Aggregate GEX went{' '}
              <span className="dn-tag bear">−38.7M</span> →{' '}
              <span className="dn-tag bear">−36.7M</span> (a +$2.0M
              repair — small relative to 06-07&rsquo;s +$14.8M lineage-largest
              move, the book stays firmly net-short-gamma). But the 0-γ flip
              <em> walked UP +$813</em> alongside the rally:{' '}
              <span className="dn-tag">$63,538 → $64,351</span>, and spot{' '}
              <span className="dn-tag bear">$63,042 sits −2.03% below the
              flip</span> on live-spot math, NARROWED from 06-07&rsquo;s
              −4.10% by +2.07pt; the GEX file&rsquo;s own Deribit-index
              reference reads{' '}
              <span className="dn-tag bear">−1.69%</span> off its $63,264
              index, matching the file&rsquo;s own dist-to-flip tile of
              −1.7%. The 06-07 forecast was that &ldquo;the in-progress
              weekly bar (W-MON anchored to 06-08) would need to recover and
              close at or above $62,008 by week-end to avoid stamping a
              formal 200W floor break&rdquo; — that test cleared by +$1,039.
              The dealer side just cleared 7JUN +3.87M at 08:00Z 06-07 and
              then 8JUN −2.29M at 08:00Z 06-08 (an intervening negative front
              chunk inside the inter-note window); today&rsquo;s 9JUN +2.26M
              is the next positive front chunk and settles at 08:00Z 06-09,
              still pending at this anchor; the wall map saw the{' '}
              <span className="dn-tag bear">$60k crash-put RE-DEEPEN to
              −34.00M</span> (was −26.19M on 06-07 — the −$7.81M re-load is
              the largest single-strike negative-gamma re-add of the
              post-wick window, the dealer book penciled in a fresh
              destabilizer at the strike spot most recently held but
              cleared); the macro side saw the Friday 06-05 FRED daily
              print finally land at the 06-08 22:17Z render, with{' '}
              <span className="dn-tag bear">US 10Y nominal 4.55% (+8.0bp Δ
              — the rates re-grow gate at 4.53% FIRED on the carried Friday
              close, was 4.47% on the 06-07 baseline)</span>, HY OAS 2.76%
              (+2.0bp, gate 2.78% now <em>2bp from fire</em> vs 4bp on
              06-07), and the reclaim-long rates filter (10Y &lt; 4.55%) is
              now AT the boundary at exactly 4.55%. Daily closes ran{' '}
              <span className="dn-tag">06-07 $63,298 / 06-08 $63,058</span>{' '}
              (the 06-07 daily close came in $2,452 ABOVE the 06-07
              note&rsquo;s parquet-last-bar reading of $60,846 — the day
              rallied hard after the 00:05Z anchor), and the 06-09
              in-progress close at parquet anchor row ({'  '}00:05Z close{' '}
              <span className="dn-tag">$63,022</span>) is{' '}
              <span className="dn-tag">$36 below</span> 06-08&rsquo;s daily
              close. The down-leg is structurally repaired on the
              cycle-floor read, but the dealer flip walked with the rally
              and the macro side rotated against the reclaim-long stance for
              the first time on this lineage.
            </p>

            <p>
              BTC prints <span className="dn-tag">$63,042</span> live,{' '}
              <span className="dn-tag bear">−0.31%</span> on 24h (24h
              baseline 08:04 BJ / UTC 00:04 06-08 per DN-003 audit
              disposition — one minute before the 08:05 anchor; the
              funding denominator uses the exact 08:05 anchor row) — the
              smallest 24h spot change of the post-wick window, and the
              second consecutive sub-1% 24h after the 06-07 rally session
              ($60,933 → $63,298 close-to-close +3.88%) gave way to a
              consolidation tape on 06-08. The 24h range was{' '}
              <span className="dn-tag">$64,190 / $62,430</span> (high @
              BJ 07:15 06-09 / UTC 23:15 06-08, low @ BJ 21:42 06-08 / UTC
              13:42 06-08 — the high printed pre-dawn 06-09 BJ as the
              cumulative 06-08 rally extended into the lead-in of today&rsquo;s
              anchor, then bled −$1,148 / −1.79% into the 00:05Z print).
              The 24h low <span className="dn-tag">$62,430</span> is{' '}
              <span className="dn-em">+$3,277 ABOVE</span> the post-wick
              floor of $59,154 from 06-06, and{' '}
              <span className="dn-em">+$411 ABOVE</span> the full-history
              W-SMA200 of $62,019 — the cycle floor held on every minute of
              this 24h tape, the floor break that 06-07 watched did not get
              within reach. Spot RECLAIMED the full-history 200W on a
              spot-print basis:{' '}
              <span className="dn-signal">
                live spot $63,042 sits +1.65% ABOVE the full-history 200W
                $62,019; the 06-08 weekly close $63,058 sits +$1,039 above;
                the 06-07 daily close $63,298 sits +$1,279 above; the
                in-progress 06-09 close $63,022 sits +$1,003 above — four
                separate post-watch readings ALL above the cycle floor for
                the first time of the down-leg lineage
              </span>. The cycle anchor remains{' '}
              <span className="dn-tag bear">D-SMA100 $72,937 (−13.57%)</span>{' '}
              overhead — ~$9.9k away (was ~$12.0k on 06-07, $2.1k closer
              because spot recovered by $2,109 while the rolling 100D anchor
              bled marginally lower). The closest overhead MA is now{' '}
              <span className="dn-tag bear">D-EMA20 $68,725 (−8.27%)</span>,
              ~$5.7k overhead — the rolling 20D EMA picked up the bottom
              prints faster than the SMA series. The W-SMA20 cluster shifted
              vs 06-07: W-SMA20 $72,076 / D-SMA100 $72,937 / D-EMA50 $72,483
              now pack a wider $861 band, ~$9.4k–$9.9k overhead.{' '}
              <span className="dn-em">
                The cycle floor read FLIPPED to bullish on the spot plane
                AND on the weekly-close plane; the dealer-side improved
                marginally (gamma +$2.0M) but the flip walked +$813 with
                the rally; the position book reverted again — this time to
                a short-cover + long-add across the 48h (long +829, short
                −3,070), the inverse of 06-07; the macro side rotated
                against the reclaim-long stance with rates +8bp to the
                gate boundary and HY OAS 2bp from fire. The cycle floor
                read is the structural prize of this snap, but the dealer
                flip and the macro tape both moved against the next entry
                up the ladder.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · 24h book REVERTED to short-trim + long-add (the inverse of 06-07&rsquo;s long-trim + short-add) · OI shrank for the first time of the post-wick window at −0.36% · funding 24h mean FLIPPED back to +1.46% from 06-07&rsquo;s −0.13%, negative-minute share collapsed to 28.11% (was 72.80%), longest contiguous neg streak −5.30h shorter at 2.42h — the leg-2 short-pay gate of the mean-revert scout no longer clears · cycle continuation cadence stays CLOSED-VINDICATED (no fresh single-minute hostile-2 today)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position book gave back 06-07&rsquo;s short-add: short_btc
                trimmed and long_btc added across the inter-note window, the
                inverse signature of 06-07
              </span>. SM net is{' '}
              <span className="dn-tag">−38,658</span> vs the 06-07
              note&rsquo;s −42,556 — that is{' '}
              <span className="dn-em">−9.16% less short across the ~48h
              gap</span>{' '}
              (|−38,658 − (−42,556)| / 42,556 = 9.16%). The components
              moved one-sided in the inverse direction from 06-07: long_btc{' '}
              <span className="dn-tag bull">13.62k → 14.44k
              (+0.83k)</span>{' '}
              and short_btc{' '}
              <span className="dn-tag bull">56.17k → 53.10k
              (−3.07k)</span>. The short side cut about 3.7× more than
              the long side added, a clean short-trim + long-add shape
              — the inverse of 06-07&rsquo;s long-trim + short-add that
              was −1.82k long and +1.31k short. Across the 24h window
              (from t == &ldquo;06-08 08:04&rdquo; BJ-local / UTC 00:04
              06-08): long_btc Δ{' '}
              <span className="dn-tag bull">+648</span>, short_btc Δ{' '}
              <span className="dn-tag bull">−2,320</span>, net Δ{' '}
              <span className="dn-tag bull">+2,968</span> (648 − (−2,320)
              = 2,968 less short on the 24h window itself). Inside the 24h
              the book ran a peak-then-unwind shape: SM net trough (most
              short){' '}
              <span className="dn-tag bear">−41,676 @ BJ 12:31 06-08 /
              UTC 04:31 06-08</span> — into the mid-day Asia of 06-08
              (NOT the same minute as the 24h spot low $62,430, which
              printed later at UTC 13:42 06-08) — then unwound steadily to{' '}
              <span className="dn-tag bull">−37,475 @ BJ 19:31 06-08 /
              UTC 11:31 06-08</span> (least-short of the 24h), before
              stabilizing back near −38.7k into snap. Long_btc peaked{' '}
              <span className="dn-tag bull">15,517 @ BJ 14:46 06-08 /
              UTC 06:46 06-08</span> — the highest long read since the
              06-06 long-bottom-fish peak of 17,254; short_btc bottomed{' '}
              <span className="dn-tag bull">52,232 @ BJ 19:41 06-08 /
              UTC 11:41 06-08</span> — the lowest short read of the
              post-wick window.{' '}
              <span className="dn-em">
                The lineage signature has FLIPPED ONCE MORE: 06-01/02/03/04
                one-sided short-stacks, 05-31/06-05 two-sided shrinks,
                06-06 one-sided long-bottom-fish, 06-07 one-sided
                long-trim + short-add reversion, today short-cover +
                long-add into the recovered tape. The book is following
                price, not leading it — the 06-07 short-stack got faded as
                spot rallied $2,109 across the inter-note window, and the
                long-bottom-fish residual from 06-06 caught a partial
                reload.
              </span>
            </p>

            <p>
              <span className="dn-signal">
                The cycle continuation framework has nothing fresh to
                test on this calendar — the framework was formally
                retired on the 06-06 sixth-print failure and stays
                CLOSED-VINDICATED through this snap
              </span>. The 24h tape did not produce a single-minute Δnet
              ≤ −3k print; the closest re-stack shape was the BJ 12:31
              06-08 / UTC 04:31 06-08 SM net trough at −41,676 (10-minute
              window vs the BJ 19:31 06-08 / UTC 11:31 06-08 peak at
              −37,475 = +4,201 less short — but spread across 60
              minutes, not a single-minute hostile-2 signature). No fresh
              BJ 13–15 cadence test was due
              (calendar prior is dead).{' '}
              <span className="dn-em">
                Re-stack hostile-2 signatures (Δshort &gt; 0 + Δlong &lt;
                0 same minute with |Δnet| ≥ 3k) remain meaningful tape
                reads when they print, but today&rsquo;s tape produced
                neither.
              </span>
            </p>

            <p>
              The leverage side is the loudest second-derivative read
              this note.{' '}
              <span className="dn-signal">
                Funding 24h mean FLIPPED back to +1.46% from 06-07&rsquo;s
                −0.13% — the first positive 24h mean of the post-wick
                window and a +1.59pt swing
              </span>: live <span className="dn-tag">−1.81% ann</span> at
              the snap, 24h range{' '}
              <span className="dn-tag">−1.82% / +4.24%</span> with the
              trough <span className="dn-tag bull">−1.821% ann at BJ
              07:34 06-09 / UTC 23:34 06-08</span> — the trough is
              early-morning Asia of 06-09 (late-evening UTC of 06-08),
              not the snap minute as on 06-07 (the snap minute reads
              −1.806%, 0.015pt shallower than the 24h trough). 24h
              mean ann <span className="dn-tag">+1.46%</span> (vs
              06-07&rsquo;s −0.13% — a +1.59pt flip back to positive,
              the first positive 24h mean of the post-wick window).
              24h max ann <span className="dn-tag">+4.24% @ BJ 14:12
              06-08 / UTC 06:12 06-08</span> — the mid-Asia positive
              peak inside the rally session. Cap occupancy{' '}
              <span className="dn-tag bull">0 / 1441 sampled rows
              (0.0%)</span> (fifth consecutive cap-empty note; the
              lineage cap regime stays structurally retired); the
              longest contiguous neg streak ran{' '}
              <span className="dn-tag bull">145 min / 2.42h</span> from
              BJ 02:13 06-09 / UTC 18:13 06-08 → BJ 04:37 06-09 / UTC
              20:37 06-08 — vs the 06-07 streak of 7.72h, today is
              −5.30h shorter, <em>and FAILS the ≥4h cumulative short-pay
              gate on a single contiguous run</em>. The longest
              contiguous pos streak ran{' '}
              <span className="dn-tag">731 min / 12.18h</span> from
              BJ 08:05 06-08 / UTC 00:05 06-08 → BJ 20:15 06-08 / UTC
              12:15 06-08 — the positive band now dominates the
              24h tape. Minute deltas (positive vs negative funding
              readings) break <span className="dn-tag">1,034 pos /
              405 neg</span> (across the 1,441-row window — 28.11%
              negative, was 72.80% on 06-07 — the share collapsed −44.69pt,
              the largest single-note share-shift of the lineage). OI Δ{' '}
              <span className="dn-tag bull">−355 BTC (−0.36%)</span>{' '}
              over 24h — first 24h OI SHRINK since the 06-04 down-leg
              started (06-05 +0.6%, 06-06 +2.31%, 06-07 +0.53% all
              expansions); 24h peak{' '}
              <span className="dn-tag">99,435 @ BJ 12:34 06-08 / UTC
              04:34 06-08</span> — the leverage push into the mid-day
              Asia of 06-08 — then bled to 24h trough{' '}
              <span className="dn-tag bull">97,539 @ BJ 21:21 06-08 /
              UTC 13:21 06-08</span> — the leverage that built into
              the rally has bled steadily through the early-EU bleed
              and into the snap, vs 06-07 pin
              OI 101,830 the book has shrunk ~−3,314 BTC / −3.25%
              across the 48h. Retail{' '}
              <span className="dn-tag">mkt_long_pct 64.71%</span> from
              67.51% on the 24h window — bled −2.80pt vs 24h-ago and
              −1.72pt vs the 06-07 note (66.43% → 64.71%) — the first
              net cool since 06-05, the crowded long side leaked into
              the rally. Still 4pt above the prior down-leg trough of
              60.35% on 05-31; the de-crowding remains a
              second-derivative cool but the direction turned. Perp
              trades a <span className="dn-tag bear">−$41.39
              discount</span> to spot at the snap (1h mean −$24.35,
              4h mean −$19.59; 24h mean −$37.31, range −$208.19 /
              +$98.86 — basis went briefly POSITIVE inside the 24h
              window during the late-Asia 06-08 push, then snapped
              back negative; the 24h max +$98.86 is the second
              consecutive note with positive-basis prints inside the
              24h tape). 1-min aggressor skew snap{' '}
              <span className="dn-tag bear">−16.5</span> (1h mean
              −2.97, range −31.60 / +23.30) — a mild sell-aggressor
              tilt in the snap minute but the 1h is roughly balanced.{' '}
              <span className="dn-em">
                Funding mean flipped back positive + neg-minute share
                collapsed −44.69pt + longest contiguous neg streak
                FAILS the 4h gate + OI shrank for the first time of
                the post-wick window + 48h SM short_btc bled −3,070
                + retail crowding bled −1.72pt vs 06-07: the leverage
                book has materially deflated on the rally. The leg-2
                short-pay regime of the mean-revert long scout NO
                LONGER CLEARS the 4h gate — that promotion leg has
                CLOSED on the bullish side; only legs 1 (TD9 cluster)
                and 3 (flip reclaim) carry forward. The leverage
                side as a whole is committed-better.
              </span>
            </p>

            <p>
              Windowed flow (24h headline values use the 08:04 BJ
              baseline t == &ldquo;06-08 08:04&rdquo; / UTC 00:04 06-08
              per DN-003 audit disposition — one minute before the
              declared 08:05 anchor; funding denominator uses the exact
              08:05 anchor row, so the two windows differ by 1 minute)
              shows{' '}
              <em>a 24h that bid on spot CVD but net-sold on futures
              CVD and taker-net, with bid on both 4h and 1h sub-window
              spot CVD — the rally is digesting the build-up, not
              extending it</em>. 24h (08:04 BJ baseline): price{' '}
              <span className="dn-tag bear">−0.31%</span>, OI{' '}
              <span className="dn-tag bull">−355 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +2,601</span>{' '}
              (no reset adjustment needed — no cb_cvd reset detected
              in the 24h window), futures CVD{' '}
              <span className="dn-tag bear">Δ −806</span>, big-print{' '}
              <span className="dn-tag bull">+3 BTC / 372 prints</span>,
              taker-net{' '}
              <span className="dn-tag bear">−810</span> —{' '}
              <em>spot CVD bid materially across the 24h but
              futures-side flow stayed net-sold, big-print and
              taker-net basically two-sided; the consolidation tape
              after the 06-07 rally session</em>. 4h (into snapshot):
              price <span className="dn-tag bear">−0.53%</span>, OI{' '}
              <span className="dn-tag bull">+405 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +374</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +8</span>, big-print{' '}
              <span className="dn-tag bull">+158 BTC / 99 prints</span>,
              taker-net{' '}
              <span className="dn-tag bear">−4</span> —{' '}
              <em>the 4h window bought on spot CVD and big-print while
              the futures-side was flat — a softer 4h shape than
              06-07&rsquo;s clean qualifying cover-shape, and the
              price-tag was a −0.53% decline so the buying is
              digesting the fall rather than confirming the rally</em>.
              1h: price <span className="dn-tag bear">−0.60%</span>,
              OI <span className="dn-tag bull">−153 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +89</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −153</span>, big-print{' '}
              <span className="dn-tag bear">−50 BTC / 13 prints</span>,
              taker-net <span className="dn-tag bear">−151</span> —{' '}
              <em>the 1h slipped on every futures-side field with the
              spot CVD only modestly positive, the snap-minute bid
              looks rest-mode after the multi-hour push higher</em>.
              The 4h cover-shape that printed clean on 06-07 has
              softened on this snap — futures-side flow now reads
              flat / mixed rather than net-buyer; the consolidation
              tape is not extending the 06-07 cover signal but is not
              reversing it either.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · ⚡ TD9 BUY cluster CONCENTRATED to ONE concurrent frame (3d only; was three on 06-07: 12h / 1d / 3d) · 12h water-down golden cross just printed (the engine joins the bounce a frame slower) · cycle-frame RSI lifted further off lineage extremes (8h 36.4, 12h 30.6, 1d 26.2, 3d 34.1) · cycle anchor lost (now ~$9.9k overhead vs ~$12.0k on 06-07) · 200W cycle floor RECLAIMED on weekly close AND on spot (+1.65% live spot · +1.68% on 06-08 weekly close · the structural test resolved bullish)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map advanced past the multi-TF oversold-counter
                cluster — only the 3d frame still flags an active ⚡ TD9
                BUY (the 12h and 1d frames advanced to Sell 5 / Sell 1
                inside the post-wick bounce), and the 12h MACD printed a
                fresh water-down golden cross at the 00:00Z 06-09 close
                — the engine joins the bounce a frame slower than the
                4h golden cross that printed on 06-07
              </span>. The 06-09 00:01Z scan flags ⚡ TD9 BUY on 3d only,
              and 1M still TD8 → 9? pending on one more close — a
              two-frame oversold-counter cluster including the pending,
              one fewer than 06-07&rsquo;s three-frame stack (which had
              12h / 1d / 3d active and 1M pending). The 12h advanced to{' '}
              <span className="dn-tag bear">Sell 5</span> with a fresh
              water-down golden cross 1 bar (the post-TD9 follow-through
              flagged by the scan header), the 1d advanced to{' '}
              <span className="dn-tag bear">Sell 1</span> as a fresh
              countdown began. Slow frames stay bearish on cross/cloud:
              the <span className="dn-tag bear">3d water-up death cross
              is at 4 bars</span> (unchanged from 06-07), 8h{' '}
              <span className="dn-tag bear">water-down golden cross 5b</span>{' '}
              (unchanged from 06-07 — same engine signal, no further
              extension), 4h{' '}
              <span className="dn-tag bear">water-down golden cross 17b</span>
              {' '}(was 5b just printed on 06-07 — 12 bars more elapsed,
              the golden cross held), 1d{' '}
              <span className="dn-tag bear">below cloud 8b ↑ $73.9k</span>{' '}
              (was 6b on 06-07). RSI lifted further off lineage extremes
              across the cycle frames but stays oversold-zone: 8h{' '}
              <span className="dn-tag bull">36.4</span> (was 16.3 on
              06-07 — +20.1pt off, the largest single-note lift of the
              cycle-frame RSI), 1d{' '}
              <span className="dn-tag bull">26.2</span> (was 15.5 —
              +10.7pt off, also a large move), 12h{' '}
              <span className="dn-tag bull">30.6</span> (was 16.4 —
              +14.2pt off), 4h <span className="dn-tag bull">48.7</span>{' '}
              (was 29.9 — +18.8pt up, now in neutral territory), 3d{' '}
              <span className="dn-tag bull">34.1</span> (was 29.6 —
              +4.5pt off, finally above 30), 1w 34.1 (was 32.7). Three
              cycle frames are now above 30 (8h 36.4, 12h 30.6, 3d 34.1)
              with 1d the lone sub-30 holdout at 26.2 — and the engine
              frames are full neutral: 1h 48.3 (was 48.7 — basically
              flat), 30m 42.8 (was 53.7 — bled), 15m 40.2 (was 56.8 —
              bled materially). The 15m flipped back{' '}
              <span className="dn-tag bear">below cloud 3b</span>{' '}
              (was above cloud 4b on 06-07).{' '}
              <span className="dn-em">
                Read straight: the ⚡ TD9 BUY cluster narrowed from
                three concurrent frames to one (3d only), the 12h
                joined the bounce on its own golden cross, cycle-frame
                RSI lifted broadly off the lineage extremes, the engine
                frames bled back to neutral or mild bearish on RSI as
                the 06-08 rally session priced in. The setup loses the
                multi-frame oversold-counter cluster as a leg of the
                mean-revert scout — leg 1 has degraded from three
                concurrent to one concurrent + one pending, that
                promotion leg of the scout is now near-failure as the
                engine works through the TD9 sequence rather than
                clustering around it.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,043</td><td className="num">40.2</td><td className="bear">death (water-dn) 7b</td><td className="bear">below ↑63.3k 3b</td><td>Buy 4</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">63,043</td><td className="num">42.8</td><td className="neut">death (water-up) 15b</td><td className="neut">in cloud 62.7k–63.2k 1b</td><td>Buy 4</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">63,052</td><td className="num">48.3</td><td className="neut">death (water-up) 7b</td><td className="bull">above ↓62.5k 28b</td><td>Buy 3</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">63,043</td><td className="num">48.7</td><td className="bull">golden (water-dn) 17b</td><td className="bear">below ↑66.1k 85b</td><td>Buy 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">63,043</td><td className="num bull">36.4</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑74.3k 72b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">63,043</td><td className="num bull">30.6</td><td className="bull">golden (water-dn) 1b just printed</td><td className="bear">below ↑77.1k 35b</td><td>Sell 5</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">63,052</td><td className="num bull">26.2</td><td className="neut">—</td><td className="bear">below ↑73.9k 8b</td><td>Sell 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">63,043</td><td className="num bull">34.1</td><td className="neut">death (water-up) 4b</td><td className="bear">below ↑74.2k 2b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,043</td><td className="num">34.1</td><td className="neut">—</td><td className="bear">below ↑100.3k 19b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">63,052</td><td className="num">42.5</td><td className="neut">—</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 2026-06-09 00:01Z scan
                    (rolling latest-file artifact archived to
                    snapshots/2026-06-09-0008/mtf_div_latest.html before
                    read per runbook §1 archive policy). Scan is 4 min
                    stale vs the 00:05Z snapshot anchor. Header alerts:{' '}
                    <em>12h water-down golden cross 1 bar just printed</em>,{' '}
                    <em>3d ⚡ TD9 BUY at $63,043</em>,{' '}
                    <em>1M TD8 → 9? one close pending</em>. Scan spot
                    $63,050, 24h −0.28%, H/L $64,180 / $62,377, 24h qVol
                    $11.68B (up modestly from 06-07&rsquo;s $10.58B; still
                    a quiet consolidation tape, far below 06-06&rsquo;s
                    $28.56B capitulation print). Closes are in-progress
                    bars; treat every value as provisional until each TF
                    closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms cycle-anchor digestion still ~$9.9k
              overhead with the cluster pack ~$9.4k–$9.9k overhead. Spot
              $63,042 sits{' '}
              <span className="dn-tag bear">−13.57% below D-SMA100
              $72,937</span> — the cycle anchor, the lowest-distance
              line of the daily ladder, ~$9.9k away on the reclaim (was
              ~$12.0k on 06-07, $2.1k closer because spot rallied
              +$2,109 while the rolling 100D anchor bled modestly lower
              from $72,978). The closest overhead MA is now D-EMA20{' '}
              <span className="dn-tag bear">$68,725 (−8.27%)</span> —
              the rolling 20D EMA picked up the down-leg prints
              fastest (was $69,751 on 06-07, $1,026 closer today). The
              W-SMA20 / D-SMA100 / D-EMA50 cluster sits in a $861 band
              ~$9.4k–$9.9k overhead: W-SMA20{' '}
              <span className="dn-tag bear">$72,076 (−12.53%)</span>,
              D-SMA100 <span className="dn-tag bear">$72,937
              (−13.57%)</span>, D-EMA50{' '}
              <span className="dn-tag bear">$72,483 (−13.03%)</span>.
              The rest in level order: D-SMA20{' '}
              <span className="dn-tag bear">$70,316 (−10.34%)</span>,{' '}
              D-EMA100{' '}
              <span className="dn-tag bear">$74,478 (−15.35%)</span>,{' '}
              D-SMA150{' '}
              <span className="dn-tag bear">$74,536 (−15.42%)</span>,{' '}
              D-SMA50{' '}
              <span className="dn-tag bear">$75,340 (−16.32%)</span>,{' '}
              W-EMA20{' '}
              <span className="dn-tag bear">$75,315 (−16.30%; seed)</span>,{' '}
              D-EMA150{' '}
              <span className="dn-tag bear">$77,023 (−18.15%)</span>,{' '}
              D-SMA200{' '}
              <span className="dn-tag bear">$78,246 (−19.43%)</span>,{' '}
              D-EMA200{' '}
              <span className="dn-tag bear">$79,580 (−20.78%)</span>.
              Far above and disused on the 2024-2026 subset: W-EMA150
              seed $78,090 (−19.27%), W-EMA100 seed $82,680 (−23.75%),
              W-EMA50 seed $83,379 (−24.39%), W-SMA100 $88,529
              (−28.79%), W-SMA50 $91,807 (−31.33%); W-EMA200 seed reads
              $73,762 (−14.53%) but is a truncated seed on the 129-week
              subset and surfaced only for completeness.{' '}
              <span className="dn-signal">
                The 200W watch JSON is still absent on the server
                (fourth consecutive note); the runbook §2 fallback to
                a full-history parquet computation puts the formal
                full-history W-SMA200 (200 closed weekly bars ending
                06-08) at $62,019 (vs 06-07&rsquo;s $62,008 — moved up
                $11 as the rolling window dropped one low-end week and
                added the 06-08 close $63,058). Live spot $63,042 sits
                +1.65% ABOVE the cycle floor on the SPOT print — and the
                06-08 weekly close $63,058 sits +1.68% / +$1,039 ABOVE
                the level on the WEEKLY-CLOSE print, the first weekly
                close above the full-history 200W since the down-leg
                broke on 06-01 and the structural resolution of the
                06-07 watch on the bullish side
              </span>. On the full-history parquet series (W-MON,
              closed=&lsquo;right&rsquo;, 154 valid 200W observations,{' '}
              <em>8 / 154 weekly closes below the level</em>) a weekly
              close below the 200W has occurred in ~5.19% of weeks
              (refined from 06-07&rsquo;s 5.84% with the new closed
              count and the 06-08 ABOVE-print rolling in); per runbook
              do-not-fabricate, no percentile / break-event claim is
              asserted off a missing JSON, only the level + the 06-08
              weekly-close vs 200W gap is surfaced. The W-SMA200 moved
              up only $11 vs 06-07 because the rolling 200-week window
              dropped one low-end week and added the 06-08 close
              $63,058 (the addition was close to the old end&rsquo;s
              average); the lineage W-SMA200 carry direction stays
              ~$200/week, today&rsquo;s +$11 is unusually small because
              the dropped end&rsquo;s value happened to land near
              $63k.{' '}
              <span className="dn-em">
                MAs anchored to parquet anchor row 2026-06-09 00:05Z
                (close $63,022.00); offsets computed against live spot
                $63,042.00 directly (per 06-03 audit DN-006
                disposition: live-pin denominator carries forward; the
                parquet-adjacent close $63,022.00 is $20.00 below the
                live pin, the tightest parquet-vs-live gap of the
                lineage). Daily closes: 06-02 $66,730, 06-03 $64,118,
                06-04 $63,853, 06-05 $61,022, 06-06 $60,850 (lineage
                low close), 06-07 $63,298 (a +$2,448 / +4.02% recovery
                close, the largest single-day close-to-close lift of
                the post-wick window), 06-08 $63,058 (a small −$241 /
                −0.38% pullback consolidation), 06-09 in-progress
                $63,022 — eight consecutive closes below the cycle
                anchor and three consecutive closes above the
                full-history 200W cycle floor.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book IMPROVED marginally to net-short-gamma aggregate −36.7M (was −38.7M on 06-07, +$2.0M repair — small vs the 06-07 +$14.8M lineage-largest move; still firmly net-short-gamma, no sign flip) · flip WALKED UP +$813 to $64,351 alongside the rally (the 06-07 leg-3 trigger at $63,538 FIRED post-note on 06-08 multi-hour, max 1h close $63,936.50 at 2026-06-08 15:00Z, but the dealer book repriced the flip up by roughly the same magnitude as spot recovered — the inflection has effectively walked with the move) · 9JUN26 0.3 DTE +2.26M POSITIVE is the next settle at 08:00Z 06-09 (the next positive front chunk after an intervening 8JUN −2.29M negative, pending the 08:00Z settle; 7JUN +3.87M cleared at 08:00Z 06-07, 8JUN −2.29M at 08:00Z 06-08) · $60k crash-put wall RE-DEEPENED to −34.00M (was −26.19M on 06-07 — the −$7.81M re-load is the largest single-strike negative-gamma re-add of the post-wick window, the dealer book penciled in a fresh destabilizer at the strike spot most recently held but cleared) · 26JUN −22.60M monthly held as the load-bearing forward negative</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book improved marginally on aggregate (+$2.0M to
                −36.7M, small relative to 06-07&rsquo;s lineage-largest
                +$14.8M) but the 0-γ flip WALKED UP +$813 alongside the
                spot rally — the inflection has effectively chased the move
                rather than holding the prior price
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bear">−36.7M / 1%</span> (was
              −38.7M on 06-07, a +$2.0M structural repair, but the
              book stays firmly net-short-gamma; no sign flip). The
              0-γ flip moved{' '}
              <span className="dn-tag">$63,538 → $64,351 (+$813)</span>{' '}
              — the flip walked UP with the rally, a structurally
              different shape than the down-leg pattern of flip drops
              alongside spot drops; here both ran together higher. Two
              dist-to-flip references (carried per 06-02 audit DN-007):
              live-spot reference{' '}
              <span className="dn-tag bear">−2.03%</span>{' '}
              (63,042.00 / 64,351 − 1 = −2.034%); GEX-file
              Deribit-index reference{' '}
              <span className="dn-tag bear">−1.69%</span> (63,264 /
              64,351 − 1 = −1.690%, matches the file&rsquo;s own
              dist-to-flip tile of −1.7%). The live-spot ref is −0.34pt
              wider than the Deribit-idx ref this note because the
              Deribit idx is $222 above live spot — well inside the
              normal idx-vs-live tracking band. Both refs negative; the
              live-spot ref NARROWED to −2.03% from 06-07&rsquo;s
              −4.10% (+2.07pt closing as the flip walked +$813 and spot
              rallied +$2,109 — the flip captured roughly 39% of the
              spot move higher).
            </p>

            <p>
              The wall map RE-DEEPENED on the strikes spot recently
              held but cleared:{' '}
              <span className="dn-tag bear">$60k −34.00M</span> (was
              −26.19M on 06-07, the wall RE-DEEPENED −$7.81M as spot
              held above the strike across the inter-note window — the
              dealer book penciled in a fresh destabilizer at the
              $60k strike now that spot has moved away from it, the
              wall is no longer being bled by spot-near-strike
              activity),{' '}
              <span className="dn-tag bear">$62k −9.10M</span> (was
              −5.84M on 06-07, RE-DEEPENED −$3.26M — the $62k strike
              became a fresh near-spot negative as spot rallied
              through it),{' '}
              <span className="dn-tag bear">$55k −8.10M</span> (was
              −10.69M on 06-07 — eased modestly as the strike moved
              further from current spot),{' '}
              <span className="dn-tag bull">$80k +10.66M</span>{' '}
              (heaviest positive overhead, +$1.69M firmer vs
              06-07&rsquo;s +8.97M — modestly thicker upside dampening
              pole),{' '}
              <span className="dn-tag bear">$50k −5.81M</span> (was
              −6.80M — eased modestly),{' '}
              <span className="dn-tag bear">$58k −4.46M</span> (was
              −6.47M — eased),{' '}
              <span className="dn-tag bear">$61k −3.83M</span> (NEW
              in the top-10, a fresh below-spot negative just under
              the rally close),{' '}
              <span className="dn-tag bull">$82k +3.80M</span> (was
              +3.30M — firmed),{' '}
              <span className="dn-tag bear">$63k −3.30M</span> (NEW
              top-10 entry, the strike spot is sitting on; the
              dealer book has placed a small negative directly at
              spot),{' '}
              <span className="dn-tag bear">$63.5k −2.86M</span>{' '}
              (NEW top-10 entry, immediately above spot). The
              negative cluster $50k–$65k now stacks (in the listed
              top-10) to roughly{' '}
              <span className="dn-em">−71.46M of dealer amplification</span>{' '}
              (sum of the listed walls in the band: −34.00 − 9.10 −
              8.10 − 5.81 − 4.46 − 3.83 − 3.30 − 2.86 = −71.46M; vs
              06-07&rsquo;s comparable listed cluster of −63.25M —
              the corridor RE-LOADED ~$8.2M heavier on the top-10
              basis, the dealer-side downside amplification deepened
              even as aggregate gamma improved marginally). The
              load-bearing read this note is{' '}
              <span className="dn-signal">
                the $60k crash-put RE-DEEPENING by −$7.81M alongside
                the spot recovery — the dealer book is penciling in
                a fresh destabilizer at the strike spot most
                recently held but cleared, which would amplify any
                fresh test back through the level. The aggregate
                small-positive move is misleading: the book repaired
                $2.0M on aggregate but the strikes immediately at
                and below spot ($60k −7.81M, $62k −3.26M deeper,
                plus the NEW $63k and $63.5k small negatives at and
                just above spot) RE-LOADED with negative gamma.
                The 06-07 cleanest-front-decay structure has not
                continued past the front chunk
              </span>. Forward expiries: 10JUN 1.3 −3.51M (small
              negative, tomorrow&rsquo;s settle), 11JUN 2.3 −6.48M
              (NEW significant negative on the near-dated strip),
              12JUN 3.3 −8.24M (was −8.91M on 06-07, basically
              flat), 19JUN 10.3 −4.90M (was −6.26M on 06-07, eased
              −$1.36M), 26JUN 17.3 −22.60M (was −24.94M on 06-07,
              eased −$2.34M — the load-bearing forward negative,
              still the heaviest single-expiry chunk), 31JUL 52.3
              +4.36M (was +1.61M — firmed +$2.75M, the largest
              forward firming), 28AUG 80.3 +1.51M, 25SEP 108.3
              +1.34M (was −0.69M, flipped POSITIVE), 25DEC 199.3
              +3.52M (was +1.64M — firmed +$1.88M), 26MAR27 290.3
              +0.65M. The 9JUN +2.26M front chunk settles at 08:00Z
              06-09 (~8h ahead of this snap); since it is POSITIVE,
              the settle window is NOT expected to carry an amplifier
              this time — but the settle has NOT printed yet at this
              anchor, the chunk is still pending. The post-settle
              ex-9JUN aggregate is
              roughly{' '}
              <span className="dn-tag">−36.7M − (+2.26M) = −38.96M</span>{' '}
              (slightly worse on a forward-residual basis because
              the positive chunk is what clears, leaving the
              negative tail behind), but the front-decay shape
              itself is a structural continuation of the 06-07
              positive-front pattern, pending the 8h-ahead settle.
            </p>

            <p>
              IV median across 946 instruments is{' '}
              <span className="dn-tag bull">47.6%</span> (cooled
              −5.9pt from 06-07&rsquo;s 53.5% / 1,008 instruments —
              the chain shed two front chunks across a calm rally
              tape and the vol mark cooled materially; the 62 fewer
              instruments reflect the 7JUN and 8JUN chains clearing
              at 08:00Z 06-07 / 06-08 net of the new 11JUN / 12JUN
              near-dated listings) against 30D close-to-close RV of{' '}
              <span className="dn-tag bear">39.30%</span> (was
              37.03% on 06-07, +2.27pt — the rolling 30D window now
              stamps the 06-07 +3.74% close-to-close lift alongside
              the 06-06 wick prints, RV firmed). Chain richness{' '}
              <span className="dn-tag bull">~+8.30pt</span> (was
              ~+16.47pt on 06-07 — a −8.17pt collapse as IV cooled
              and RV firmed; the chain is no longer pricing forward
              realized as high as the 06-07 weekend mark and has
              partially mean-reverted as the rally proved
              non-extending). A chain-median across N instruments,{' '}
              <span className="dn-em">not</span> a tradable spread;
              expiry-/strike-level vega, skew and term structure
              remain not loaded; the vol read stays framework-only.
              RV methodology: 30D close-to-close, logret.std × √365
              × 100 on the last 30 daily log returns (= 31
              consecutive daily closes) anchored to parquet anchor row
              2026-06-09 00:05Z; the underlying 31-close window now
              spans $60,849.70 – $82,177.70. The main 30-return /
              31-close value 39.30% is the source-backed read; the
              29-return parenthetical from the v1 draft did not
              reproduce on audit recomputation (DN-009) and has been
              removed.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · weekend FRED freeze PARTIALLY LIFTED — the Friday 06-05 print finally rolled in at the 06-08 22:17Z render (US 10Y 4.55% +8.0bp Δ — the rates re-grow gate at 4.53% FIRED on the carried Friday close; was 4.47% on the 06-07 carried baseline) · 10Y TIPS 2.19% (+8.0bp, EXTREME RISK-OFF episodic deepened) · HY OAS 2.76% (+2.0bp, gate 2.78% now 2bp from fire vs 4bp on 06-07) · MOVE 77.0 (+1.78 — firmed further past the 06-06 lineage jump) · DXY 100.15 (+0.08) · the reclaim-long rates filter (10Y &lt; 4.55%) is now AT the boundary at exactly 4.55% · BTC-vs-TradFi 7d gap NARROWED to −8.53pt (was −13.26pt on 06-07) as BTC recovered into the rolling 7d window and the 06-06 wick partially rolled off the front edge</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape&rsquo;s weekend FRED freeze partially
                lifted at the 06-08 22:17Z render as the Friday 06-05
                FRED daily print finally landed — and the rates side
                rotated against the reclaim-long stance for the first
                time on this lineage
              </span>. Dashboard render is 2026-06-08 22:17Z, ~1h 48m
              before the snapshot. The Friday-close 10Y nominal{' '}
              <span className="dn-tag bear">4.55% (+8.0bp Δ — the
              rates re-grow gate at 4.53% FIRED on the carried Friday
              close; was 4.47% on the 06-07 baseline)</span>, regime z{' '}
              <span className="dn-tag bear">+2.09</span>, episodic z{' '}
              <span className="dn-tag bear">+1.01</span> — EXTREME
              RISK-OFF tag with episodic-z above +1.0 now. 10Y TIPS
              real <span className="dn-tag bear">2.19% (+8.0bp)</span>,
              regime z <span className="dn-tag bear">+2.42</span>,
              episodic z <span className="dn-tag bear">+1.68</span> —
              EXTREME RISK-OFF episodic deepened. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.23% (−1.0bp)</span> — modest
              cool. HY OAS <span className="dn-tag bull">2.76%
              (+2.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.00</span>, episodic z{' '}
              <span className="dn-tag">−0.31</span> — loose tag,{' '}
              <em>but gate 2.78% now only 2bp from fire (was 4bp on
              06-07)</em>. NFCI{' '}
              <span className="dn-tag">−0.494 (+0.01)</span> — stale
              10d (up +2d from 06-07&rsquo;s 8d). Fed net liquidity{' '}
              <span className="dn-tag bear">$5.834T</span> — no fresh
              weekly print. MOVE bond vol{' '}
              <span className="dn-tag bear">77.0 (+1.78)</span> —
              firmed further past the 06-06 lineage jump, now neutral
              on regime z (+0.07). DXY{' '}
              <span className="dn-tag bear">100.15 (+0.08)</span>,
              regime z <span className="dn-tag bear">+1.86</span>,
              episodic z <span className="dn-tag bear">+2.18</span> —
              RISK-OFF EPISODIC carried (episodic z came off
              06-07&rsquo;s +2.33 by −0.15 as the rolling 30-obs
              window now has the Friday print baked in); USD/JPY{' '}
              <span className="dn-tag bear">160.30 (+0.31)</span>;
              US-JP 10Y spread{' '}
              <span className="dn-tag bear">2.03% (+8.0bp)</span> —
              widened sharply on the US-side move (was 1.95% on
              06-07 — the spread blew out as US rates rose without a
              JGB response, JGB stale at 2.52% +68d); USD/CNY{' '}
              <span className="dn-tag bull">6.7650 (−0.01)</span>.
              JGB 10Y stale 68d at 2.52% (staleness count up +2d from
              06-07).{' '}
              <span className="dn-em">
                Net: the Friday-close 10Y at 4.55% sits AT the
                reclaim-long rates filter boundary — the filter has
                NOT fired (filter is strict 10Y &lt; 4.55%, current
                4.55% is tied), it now reads as &ldquo;at the
                boundary&rdquo; rather than &ldquo;true with 6bp of
                room&rdquo;. The credit gate is 2bp from fire vs 4bp
                on 06-07. The DXY episodic stays EXTREME RISK-OFF.
                The macro side rotated against the reclaim-long
                stance materially since the 06-07 baseline; the
                weekend FRED freeze partial lift has revealed a
                hostile rates / credit re-grow environment, the
                first lineage print where the macro contribution
                is firmly negative-for-BTC on a fresh-data basis
                rather than a carried Friday-close caveat. The
                BTC-vs-TradFi decoupling NARROWED to −8.53pt this
                print (BTC −11.54% vs NQ −3.01%) from −13.26pt on
                06-07 — but this time BECAUSE BTC recovered into
                the rolling 7d window (BTC went from −17.75% to
                −11.54% as the 06-06 wick rolled partially off
                the front edge) while NQ partially recovered too
                (NQ −4.49% → −3.01%, +1.48pt of further TradFi
                relief)
              </span>.
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
                <tr><td>US 10Y nominal</td><td className="num bear">4.55%</td><td className="num bear">+8.0bp</td><td className="num bear">+2.09</td><td className="num bear">+1.01</td><td className="bear">tight · Friday print landed · gate 4.53% FIRED · reclaim filter AT boundary</td></tr>
                <tr><td>10Y TIPS real</td><td className="num bear">2.19%</td><td className="num bear">+8.0bp</td><td className="num bear">+2.42</td><td className="num bear">+1.68</td><td className="bear">EXTREME RISK-OFF episodic deepened</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.23%</td><td className="num bull">−1.0bp</td><td className="num">−0.04</td><td className="num bull">−1.34</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.76%</td><td className="num bear">+2.0bp</td><td className="num bull">−1.00</td><td className="num">−0.31</td><td className="bull">loose · gate 2.78% now 2bp from fire (was 4bp on 06-07)</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.494</td><td className="num">+0.01</td><td className="num">+0.72</td><td className="num">−0.01</td><td className="neut">tight · stale 10d (up +2d)</td></tr>
                <tr><td>MOVE bond vol</td><td className="num bear">77.0</td><td className="num bear">+1.78</td><td className="num">+0.07</td><td className="num">+0.60</td><td className="bear">firmed further past 06-06 lineage jump</td></tr>
                <tr><td>DXY</td><td className="num bear">100.15</td><td className="num bear">+0.08</td><td className="num bear">+1.86</td><td className="num bear">+2.18</td><td className="bear">RISK-OFF EPISODIC · episodic z came off −0.15 vs 06-07 as new data baked in</td></tr>
                <tr><td>Fed net liquidity</td><td className="num bear">$5.834T</td><td className="num bear">−0.038T</td><td className="num">−0.12</td><td className="num bear">−2.29</td><td className="bear">source-panel Δ −0.038T (no fresh weekly print since 06-07 — Δ is source-panel WoW, not note-over-note; per DN-008 audit fix)</td></tr>
                <tr><td>USD/JPY</td><td className="num bear">160.30</td><td className="num bear">+0.31</td><td className="num bear">+1.36</td><td className="num bear">+1.44</td><td className="bear">yen weaker · episodic z above +1.0</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num bear">2.03%</td><td className="num bear">+8.0bp</td><td className="num">−0.63</td><td className="num bear">+1.01</td><td className="bear">widened sharply on US-side move (was 1.95% on 06-07)</td></tr>
                <tr><td>USD/CNY</td><td className="num bull">6.7650</td><td className="num bull">−0.01</td><td className="num bull">−1.84</td><td className="num bull">−1.46</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp (monthly · stale 68d)</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean · staleness up +2d vs 06-07</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary
              00:01Z — <span className="dn-em">a 7-day rolling read,
              not today</span>). Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.232</span> (basically
              flat vs 06-07&rsquo;s 0.233 — the easing direction
              stalled at the threshold; the regime stays IDIOSYNCRATIC
              by a wide margin). BTC&rsquo;s top tie stays SILVER:{' '}
              <span className="dn-tag">SILVER +0.300</span> (was +0.261
              on 06-07 — firmed +0.039), followed by TSLA{' '}
              <span className="dn-tag">+0.272</span> (was +0.220 —
              firmed +0.052), COPPER{' '}
              <span className="dn-tag">+0.258</span> (was +0.178 —
              firmed sharply +0.080), MSFT{' '}
              <span className="dn-tag">+0.253</span> (was +0.189 —
              firmed +0.064), SP500{' '}
              <span className="dn-tag">+0.247</span> (was +0.220 —
              firmed +0.027), GOLD{' '}
              <span className="dn-tag">+0.243</span> (was +0.194),
              META <span className="dn-tag">+0.243</span> (was +0.166
              — firmed +0.077), NVDA{' '}
              <span className="dn-tag">+0.231</span>, NQ{' '}
              <span className="dn-tag">+0.227</span>{' '}
              <span className="dn-em">(was +0.188 on 06-07 — firmed
              +0.039 again, the BTC↔NQ tie has firmed in TWO
              consecutive notes as the rolling 7d window incorporated
              the co-recovery prints of 06-07 / 06-08)</span>, URNM{' '}
              <span className="dn-tag">+0.206</span>, PLAT{' '}
              <span className="dn-tag">+0.193</span>, AMZN{' '}
              <span className="dn-tag">+0.168</span>, PALL{' '}
              <span className="dn-tag">+0.144</span>, NGAS{' '}
              <span className="dn-tag">+0.143</span>, JP225{' '}
              <span className="dn-tag">+0.123</span>. 7d performance:{' '}
              <span className="dn-tag bear">BTC −11.54%</span>{' '}
              <span className="dn-em">(recovered sharply from
              06-07&rsquo;s −17.75% by +6.21pt — the 06-06 wick rolled
              partially off the front edge of the 7d window and the
              06-07 / 06-08 recovery prints rolled in)</span>, NQ{' '}
              <span className="dn-tag bear">−3.01%</span> (was −4.49%
              — recovered +1.48pt), SP500{' '}
              <span className="dn-tag bear">−2.18%</span> (was −2.33%
              — flat-ish), JP225{' '}
              <span className="dn-tag bear">−1.68%</span> (was −3.98%
              — recovered sharply +2.30pt), NVDA{' '}
              <span className="dn-tag bear">−6.19%</span>, META{' '}
              <span className="dn-tag bear">−2.36%</span> (was −6.61%
              — recovered +4.25pt), AAPL{' '}
              <span className="dn-tag bear">−1.54%</span>, MSFT{' '}
              <span className="dn-tag bear">−8.90%</span> (was −8.85%
              — basically flat), AMZN{' '}
              <span className="dn-tag bear">−5.72%</span> (was −9.38%
              — recovered +3.66pt), TSLA{' '}
              <span className="dn-tag bear">−0.75%</span> (was −9.60%
              — recovered sharply +8.85pt). Metals broadly soft but
              recovered some: GOLD{' '}
              <span className="dn-tag bear">−3.72%</span> (was −4.90%
              — eased), SILVER{' '}
              <span className="dn-tag bear">−9.52%</span> (was −9.99%
              — basically flat), PLAT{' '}
              <span className="dn-tag bear">−9.18%</span>, PALL{' '}
              <span className="dn-tag bear">−10.49%</span>, COPPER{' '}
              <span className="dn-tag bear">−3.06%</span> (was −4.21%
              — recovered), URNM{' '}
              <span className="dn-tag bear">−7.67%</span> (was −10.74%
              — recovered). Energy mixed: CL{' '}
              <span className="dn-tag bear">−2.03%</span> (was +4.09%
              — sharp flip negative), BRENT{' '}
              <span className="dn-tag bear">−1.90%</span> (was +2.62%
              — flipped), NGAS{' '}
              <span className="dn-tag bear">−0.85%</span> (was −0.49%
              — basically flat).{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine NARROWED to
                ~−8.53pt (BTC −11.54% vs NQ −3.01%) from −13.26pt on
                06-07 — this time BOTH SIDES recovered (BTC +6.21pt,
                NQ +1.48pt) and the 7d co-recovery prints rolled in,
                with the cross-asset firming on BTC&rsquo;s top ties
                (SILVER +0.039, COPPER +0.080, MSFT +0.064, META
                +0.077, NQ +0.039) reflecting the co-recovery
                directly. The rotation flipped from 06-07&rsquo;s
                BTC-extending-into-a-flat-TradFi shape to a
                BTC-recovering-into-recovering-TradFi shape — but the
                lag still reads ~−8.5pt because BTC fell further in
                the down-leg than TradFi did. With mean |r| at 0.232
                (basically flat at the threshold), BTC&rsquo;s tape
                stays structurally IDIOSYNCRATIC for trading
                prescription
              </span>. JGB monthly 2.52% carries EXTREME RISK-OFF
              monthly tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · runner / put-spread tail / cycle continuation framework statuses unchanged · cover-bounce scout legs 2 + 3 BOTH FADED from 06-07 (gamma +$2.0M vs 06-07 +$14.8M, 4h cover-shape softened to mixed); leg 1 (anchor reclaim) still ~$9.9k overhead (was ~$12.0k on 06-07) · mean-revert long scout: leg-3 trigger walked UP to $64,351 with the rally, the 06-07 $63,538 trigger DID fire post-note multi-hour on 06-08 (max 1h close $63,936.50) but the dealer flip walked up with it; reframed R/R degraded to 1.65:1 (was 2.15:1, still passes 1.5:1 gate) — leg 2 (short-pay regime ≥ 4h) NO LONGER CLEARS after the leverage book deflated, leg 3 not in · 200W cycle floor watch RESOLVED on the bullish side (the in-progress 06-08 weekly close $63,058 printed +$1,039 above the new $62,019 W-SMA200; the watch transitions to &ldquo;held above on first close, no further trade trigger here&rdquo;) · no fresh trades on this snap</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 06-07 watch resolved on the bullish side: the
                in-progress weekly bar (W-MON anchored to 06-08)
                closed at $63,058, +$1,039 / +1.68% ABOVE the
                full-history W-SMA200 $62,019 — the first weekly close
                above the cycle floor since the down-leg broke on
                06-01. But the mean-revert long scout&rsquo;s
                promotion legs degraded across the same ~48h window: leg
                1 (multi-TF TD9 BUY cluster) narrowed from THREE
                concurrent to ONE concurrent + one pending; leg 2
                (cumulative short-pay ≥ 4h) NO LONGER CLEARS the gate
                as the leverage book deflated on the rally; leg 3 (1h
                close above flip) re-priced UP to $64,351 alongside
                the rally and the trigger has NOT printed at the new
                level — even though the 06-07 trigger at $63,538 DID
                fire multi-hour on the 06-08 tape (max 1h close
                $63,936.50 at 2026-06-08 15:00Z)
              </span>. The cover-bounce scout from 05-31 remains
              DROPPED on the price plane — the cycle anchor is still
              ~$9.9k overhead (was ~$12.0k on 06-07, $2.1k closer as
              spot recovered $2,109). The dealer-book repair leg
              FADED vs 06-07 (gamma +$2.0M vs 06-07&rsquo;s lineage-largest
              +$14.8M — small repair, still net-short); the cover-shape
              leg SOFTENED (the 06-07 clean qualifying 4h cover-shape
              window has decayed: 4h futures CVD now flat-ish at +8
              vs 06-07&rsquo;s +306, 4h taker-net mildly negative at
              −4 vs +306, 4h price down −0.53% rather than 06-07&rsquo;s
              +0.60%). The runner and the 29MAY put-spread tail stay
              closed unchanged. The cycle-continuation framework
              remains CLOSED-VINDICATED with no fresh hostile-2
              single-minute signature on today&rsquo;s 24h tape. The
              200W cycle floor watch transitions from active to{' '}
              <em>held above on first close, no further trade trigger
              here</em>: the structural resolution stamped on the
              06-08 weekly close, the trade book carries no fresh
              entry off this resolution because the path through the
              anchor reclaim still requires legs that the leverage
              deflation just made harder to clear.{' '}
              <span className="dn-signal">
                The reframed mean-revert long scout R/R at trigger
                $64,351 / stop $59,154 (06-06 capitulation low) /
                first target $72,937 (cycle anchor) reads $5,197
                risk / $8,586 reward = 1.65:1, degraded modestly from
                06-07&rsquo;s 2.15:1 but still above the desk&rsquo;s
                1.5:1 gate. Spot $63,042 sits $1,309 below the
                reframed trigger (closer than 06-07&rsquo;s $2,605
                gap by $1,296) — but with leg 2 now failing the
                4h gate, the scout requires legs 1 (TD9 cluster) and
                3 (flip reclaim) to BOTH carry, and leg 1 has
                narrowed to one concurrent frame
              </span>. The trade book today is unchanged in terms of
              live size (none); the desk maintains discipline as the
              cycle-floor structural resolution prints on the
              bullish side, the mean-revert scout&rsquo;s promotion
              legs degrade unevenly, the macro tape rotates against
              the reclaim-long stance with the Friday print landed,
              and the dealer book repriced the flip alongside the
              rally rather than holding the prior inflection.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">closed · primary · runner ladder complete · closed on 29MAY 08:00Z expiry settle (unchanged status carried from 06-07)</span>
              <div className="dn-trade-name">
                Flip-extend short — closed on 29MAY 08:00Z expiry settle (unchanged from 06-07)
              </div>
              <div className="dn-thesis">
                Status unchanged. The retrospective read continues to
                vindicate the close: 06-06 lineage low $59,154 (live
                tape) printed mid-window on 06-06 and held; 06-07
                bounced +$2,448 close-to-close to $63,298 (the
                largest single-day close-to-close lift of the
                post-wick window); 06-08 consolidated −$241 to
                $63,058; today&rsquo;s in-progress 06-09 close
                $63,022 is $36 below 06-08. The down-leg has resolved
                into a post-wick recovery + consolidation tape; the
                06-08 weekly close $63,058 printed above the
                full-history 200W $62,019 by +$1,039, the structural
                test from 06-07 cleared on the bullish side.
                Re-entry path remains a fresh structural setup, not
                a roll.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (amplifier settle) · no residual position · unchanged from 06-07</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">do not chase a re-entry short into the resolved 200W cycle-floor reclaim on weekly close; the post-wick bounce shape has held three consecutive daily closes above the floor and the structural test has resolved bullish — re-entering short here would require a fresh setup, not a leftover</span></div>
              </div>
              <div className="dn-gating">
                <b>Trade closed.</b> The audit-cycle discipline holds.
                The 06-08 weekly close above the full-history 200W
                resolved the 06-07 watch on the bullish side; that
                resolution alone is not a long entry, but it
                STRUCTURALLY closes the most aggressive bearish read
                of the down-leg.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">DROPPED · scout · cycle anchor still ~$9.9k overhead (was ~$12.0k on 06-07) · dealer-book repair leg FADED today (+$2.0M to −36.7M; was +$14.8M on 06-07) · cover-shape leg SOFTENED (4h flow mixed vs 06-07&rsquo;s clean qualifying window at the 00:05Z anchor)</span>
              <div className="dn-trade-name">
                Cover-bounce scout — DROPPED carried; both supporting legs (dealer-book repair + cover-shape) FADED vs 06-07&rsquo;s decisive print, anchor reclaim leg unmoved at ~$9.9k overhead
              </div>
              <div className="dn-thesis">
                The cover-bounce path has three legs: (1) anchor
                reclaim (1d close &gt; D-SMA100 $72,937), (2)
                dealer-book repair (aggregate GEX flips back &gt; 0),
                (3) cover-shape flow print (OI shrinking + spot CVD
                bid + SM short_btc bleeds). Today: leg 1 unmoved at
                ~$9.9k overhead (cycle anchor stays the load-bearing
                absent gate, but $2.1k closer as spot recovered), leg
                2 IMPROVED MARGINALLY (+$2.0M to −36.7M — small vs
                the 06-07 lineage-largest +$14.8M; still
                net-short-gamma, no sign flip), leg 3 SOFTENED on the
                4h window (4h: spot CVD +374, fut CVD +8, big-print
                +158 BTC / 99 prints, taker-net −4, OI +405 BTC —
                the spot side bid but the futures side is flat,
                taker-net mildly negative, a softer shape than
                06-07&rsquo;s decisive print across every flow field
                with OI expanding). The 1h slipped on every
                futures-side field with only spot CVD modestly
                positive. The cycle anchor stays the structural gate
                regardless of how clean the engine-frame cover-shape
                gets; legs 2 and 3 both moved BACKWARD vs 06-07.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout status</span><span className="dn-lvl-v">DROPPED on the price plane (cycle anchor stays the load-bearing absent leg at ~$9.9k overhead); legs 2 and 3 FADED vs 06-07</span></div>
                <div><span className="dn-lvl-k">re-entry threshold (carried)</span><span className="dn-lvl-v bull">1d close &gt; D-SMA100 $72,937 AND aggregate GEX flips back &gt; 0 (currently −36.7M, +$2.0M better today — small repair) AND 1h cover-shape print (4h cover-shape softened today: spot CVD bid, futures-side flat, taker-net mildly negative; the 06-07 decisive print has not held)</span></div>
                <div><span className="dn-lvl-k">no long entry here</span><span className="dn-lvl-v bear">do not buy the 200W cycle-floor reclaim as a cover-bounce — this resolution is structural floor support, not a cover-bounce trigger; the cover-bounce path is gated by anchor reclaim and that gate stays ~$9.9k overhead</span></div>
              </div>
              <div className="dn-gating">
                <b>Trade dropped on the price plane.</b> The mean-revert
                long scout below is the separate setup keyed to
                oversold-counter exhaustion + flip reclaim; the
                cover-bounce path is gated by anchor reclaim. The
                200W cycle-floor weekly close resolution above $62,019
                is a structural floor support signal, not a
                cover-bounce trigger — it forecloses the bear-side
                tail rather than triggering a long.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">CLOSED-VINDICATED · short scout · framework watch · no fresh single-minute hostile-2 signature on today&rsquo;s 24h tape (closest pattern was a 60-minute peak-to-peak unwind from BJ 12:31 06-08 / UTC 04:31 06-08 SM net trough −41,676 to BJ 19:31 06-08 / UTC 11:31 06-08 SM net peak −37,475 = +4,201 less short across 60 min, but no single-minute Δnet ≤ −3k) · calendar cadence stays formally retired</span>
              <div className="dn-trade-name">
                Anchor-break short scout — CLOSED-VINDICATED (closure carried from 06-07; today&rsquo;s 24h tape produced no single-minute hostile-2 signature, only a 60-min peak-to-peak unwind shape; the calendar cadence stays formally retired)
              </div>
              <div className="dn-thesis">
                Status unchanged from 06-07. The cycle continuation
                framework was formally retired on the 06-06
                sixth-print failure; today there is no candidate
                calendar minute to evaluate. The framework continues
                as a no-calendar watchlist for fresh re-stack
                hostile-2 signatures (Δshort &gt; 0 + Δlong &lt; 0
                same minute with |Δnet| ≥ 3k); on today&rsquo;s 24h
                tape no single-minute Δnet print cleared the ≥ 3k
                bar. The closest pattern was the BJ 12:31 06-08 /
                UTC 04:31 06-08 SM net trough −41,676 → BJ 19:31 06-08
                / UTC 11:31 06-08 SM net peak −37,475 (a +4,201
                less-short move across 60 min) —
                but that is the inverse direction of a hostile-2
                signature (the book covered, not re-stacked) and
                spread across an hour, not a single minute. The
                trough −41,676 is shallower than the 06-04 lineage
                extreme of −46,686 by +5,010 BTC; the short side has
                not retested its lineage extreme since 06-04.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">no fresh hostile-2 today</span><span className="dn-lvl-v">no single-minute Δnet ≤ −3k print across the 24h tape; closest pattern was the BJ 12:31 06-08 / UTC 04:31 06-08 SM net trough −41,676 → BJ 19:31 06-08 / UTC 11:31 06-08 SM net peak −37,475 (60-min cover shape, inverse of hostile-2 direction)</span></div>
                <div><span className="dn-lvl-k">five-print chain (closed)</span><span className="dn-lvl-v">05-30 06:01Z Δnet −5,569 → 06-01 06:16Z −3,137 → 06-02 06:46Z −6,621 → 06-03 07:41Z −7,177 (lineage extreme) → 06-04 07:41Z −5,591 → 06-05 sixth-print test FAILED · framework closed</span></div>
                <div><span className="dn-lvl-k">disposition</span><span className="dn-lvl-v">CLOSED-VINDICATED carried · the desk will not chase a re-entry short on a tape where the 200W cycle floor has been reclaimed on weekly close, the 7JUN +3.87M front amplifier cleared clean and the 9JUN +2.26M is the next positive front chunk pending the 08:00Z settle (with an intervening 8JUN −2.29M negative inside the inter-note window), the engine RSI has lifted broadly off lineage extremes, and the 48h SM book has covered short by −3,070 BTC</span></div>
                <div><span className="dn-lvl-k">framework next step</span><span className="dn-lvl-v">future re-stack hostile-2 signatures (Δshort &gt; 0 + Δlong &lt; 0 same minute, |Δnet| ≥ 3k) remain meaningful tape reads when they print, but on a no-calendar basis only</span></div>
              </div>
              <div className="dn-gating">
                <b>Status:</b> CLOSED-VINDICATED carried.{' '}
                <b>Hard rule:</b> no re-entry short on a tape where
                the cycle continuation cadence has cleanly failed,
                the 200W cycle floor has resolved bullish on weekly
                close, the 7JUN front amplifier cleared and the 9JUN
                positive front chunk is pending an 08:00Z settle (with
                an intervening 8JUN negative inside the window), the
                leverage book has materially deflated, and the 48h SM
                book has covered short by −3,070 BTC.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">closed · macro tail · closed on 29MAY 08:00Z settle (status carried; macro side rotated against reclaim-long stance — Friday 06-05 FRED print landed at 06-08 22:17Z render, 10Y +8bp to 4.55% / gate FIRED, HY OAS +2bp / gate 2bp from fire, reclaim-long rates filter AT the boundary)</span>
              <div className="dn-trade-name">
                Downside put-spread — closed on 29MAY 08:00Z settle; no roll (Friday FRED print landed, macro rotated against reclaim-long but BTC-internal structural reads do not justify a fresh hedge roll yet)
              </div>
              <div className="dn-thesis">
                Status unchanged on position. The macro tape&rsquo;s
                weekend FRED freeze partially lifted at the 06-08
                22:17Z render as the Friday 06-05 daily print landed:
                the rates side rotated hard against the reclaim-long
                stance with 10Y nominal +8bp to 4.55% (gate at 4.53%
                FIRED on the carried Friday close, was 4.47% on the
                06-07 baseline) and TIPS real +8bp to 2.19% (EXTREME
                RISK-OFF episodic deepened). The credit gate moved
                +2bp closer to fire (HY OAS 2.74% → 2.76%, gate 2.78%
                now 2bp from fire vs 4bp on 06-07). The reclaim-long
                rates filter (10Y &lt; 4.55%) is now AT the boundary
                at exactly 4.55%. NO fresh hedge roll today because
                (a) the BTC-internal 200W cycle floor reclaimed on
                weekly close, (b) the next positive front chunk (9JUN
                +2.26M, after an intervening 8JUN −2.29M negative) is
                still pending the 08:00Z settle 8h ahead,
                (c) the 48h SM book has covered short by −3,070 BTC
                + the funding mean flipped back positive, and (d) the
                rates gate firing alone without credit firing is the
                rates-side moving, not a full credit-led re-grow yet.
                The macro contribution to BTC is now firmly
                negative-for-BTC on a fresh-data basis rather than a
                carried Friday-close caveat — the first lineage print
                of that shape.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (Deribit 29MAY settle) · no residual position · no roll · unchanged from 06-07</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (Friday print landed)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.76%, 2bp to fire — Friday close, was 4bp on 06-07) OR 10Y &gt; 4.53% close (currently 4.55%, gate FIRED — close above the 4.53% bar landed; was 4.47% on 06-07)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v">10Y &lt; 4.55% close — AT the boundary at exactly 4.55% (filter is strict &lt;, current 4.55% reads as &ldquo;at boundary&rdquo; — has NOT fired the long-side disqualifier but no longer holds with 6bp of room as on 06-07)</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the rates re-grow gate FIRED on the
                Friday print, but a single gate firing without the
                credit gate firing (HY OAS still 2bp short) is not
                yet a full credit-led re-grow signal — the rates
                move is also consistent with a non-credit-driven
                supply / term-premium move. The reclaim-long rates
                filter at exactly 4.55% reads as &ldquo;at the
                boundary&rdquo;; one more bp of widening on the next
                fresh print would mechanically disqualify the
                long-side rates filter. No roll today because the
                BTC-internal structural read (200W reclaimed on
                weekly close, 9JUN positive-front-chunk settle still
                pending 08:00Z, leverage book deflated) does not justify
                a fresh hedge yet — but the macro side now requires
                close monitoring of the next Tier-1 print for the
                first time of the post-wick window.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · framework watch · NON-ACTIONABLE · reframed leg-3 trigger walked UP to $64,351 alongside the rally; 06-07 trigger $63,538 DID fire post-note multi-hour on 06-08 (max 1h close $63,936.50 at 2026-06-08 15:00Z) but the dealer flip walked up with it; reframed R/R = 1.65:1 (degraded from 06-07&rsquo;s 2.15:1, still passes 1.5:1 gate); leg 2 (funding short-pay ≥ 4h) NO LONGER CLEARS after the leverage deflation; leg 1 (TD9 cluster) narrowed from three concurrent to one + one pending</span>
              <div className="dn-trade-name">
                Mean-revert long scout — framework watch; leg 1 (multi-TF ⚡ TD9 BUY) NARROWED to ONE concurrent frame (3d) + 1M pending (was three concurrent on 06-07); leg 2 (funding cumulative short-pay ≥ 4h) NO LONGER CLEARS — longest contiguous neg streak fell to 2.42h (vs 4h gate and 06-07&rsquo;s 7.72h), the leverage book deflated; leg 3 inflection walked UP to flip $64,351 — the 06-07 $63,538 trigger printed post-note multi-hour on 06-08 but the dealer flip walked up with the spot rally; recomputed R/R passes the gate at 1.65:1 (degraded from 06-07&rsquo;s 2.15:1)
              </div>
              <div className="dn-thesis">
                The mean-revert long scout&rsquo;s three promotion
                legs are: (1) multi-TF TD9 BUY confirmed on a cycle
                frame — today narrowed to ONE concurrent frame (3d)
                + 1M still TD8 → 9? pending; the 12h and 1d advanced
                past their TD9 prints to Sell 5 / Sell 1 inside the
                post-wick bounce, and the 8h reset to Buy 1; (2)
                funding cumulative short-pay regime ≥ 4h — today
                NO LONGER CLEARS at 2.42h single contiguous neg
                streak (vs the 4h gate and 06-07&rsquo;s 7.72h), the
                24h mean flipped back to +1.46% from −0.13% on
                06-07, the neg-minute share collapsed −44.69pt to
                28.11%, the leverage book has materially deflated
                across the rally — this promotion leg has CLOSED
                on the bullish side, the &ldquo;funding-paid-short&rdquo;
                regime that supported the mean-revert premise is no
                longer in effect; (3) the 1h reclaim above a
                structural inflection. The 06-07 leg-3 trigger at
                flip $63,538 DID FIRE on the 06-08 tape (max 1h
                close $63,936.50 at 2026-06-08 15:00Z; multi-hour
                printed above the $63,538 mark across the day,
                eight separate 1h closes above the level). But the
                dealer book repriced the flip to $64,351 alongside
                the rally — the trigger walked UP +$813 with the
                spot move, the inflection chased the move rather
                than holding the prior price. The reframed R/R at
                trigger $64,351 / stop $59,154 (06-06 capitulation
                low) / first target $72,937 (cycle anchor) reads
                $5,197 risk / $8,586 reward = 1.65:1, degraded
                modestly from 06-07&rsquo;s 2.15:1 but still above
                the desk&rsquo;s 1.5:1 gate. Spot $63,042 sits
                $1,309 below the reframed trigger (closer than
                06-07&rsquo;s $2,605 gap by $1,296). The scout
                stays NON-ACTIONABLE because (a) leg 2 has FAILED
                on the deflated funding regime, (b) leg 1 has
                narrowed to one concurrent + one pending, and (c)
                leg 3 has walked away from the prior trigger
                without a fresh print at the new level.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">promotion gates (1 of 3 cleared, 1 FAILED, 1 walked-and-pending)</span><span className="dn-lvl-v bull">leg 1 multi-TF TD9 BUY — NARROWED to ONE concurrent frame (3d only) + 1M still pending; cluster collapsed from three concurrent on 06-07 as the 12h advanced past TD9 to Sell 5, the 1d advanced to Sell 1 · leg 2 funding cumulative short-pay ≥ 4h — <em>FAILED</em> at 2.42h longest contiguous neg streak (vs 4h gate); 24h mean flipped to +1.46% from −0.13% on 06-07, neg-minute share 28.11% (was 72.80%), the leverage book has materially deflated, this leg no longer clears on the bullish side · leg 3 1h close &gt; flip $64,351 (WALKED UP from $63,538 on 06-07 — the 06-07 trigger fired post-note multi-hour on 06-08 with max 1h close $63,936.50 at 2026-06-08 15:00Z but the dealer flip walked up by roughly the same magnitude as spot recovered) — UNCLEARED at the new level, spot $63,042 sits $1,309 below</span></div>
                <div><span className="dn-lvl-k">$64,351 flip (walked inflection, NOT an entry until the print)</span><span className="dn-lvl-v bull">a 1h close &gt; $64,351 with OI still building (or shrinking) marks the structural inflection at the new level; the recomputed R/R math at trigger $64,351 / stop $59,154 / first target $72,937 reads $5,197 risk / $8,586 reward = 1.65:1, degraded from 06-07&rsquo;s 2.15:1 but still above the desk&rsquo;s 1.5:1 gate. <em>Watch / inflection line until the print; entry only on confirmed 1h close above flip with leg 2 (funding) re-clearing OR leg 1 (TD9) re-stacking</em></span></div>
                <div><span className="dn-lvl-k">leg 2 reactivation condition</span><span className="dn-lvl-v bear">to re-clear leg 2 (funding short-pay ≥ 4h), the funding tape would need to print a fresh contiguous neg streak ≥ 4h or 24h mean below ~−0.5% — currently 2.42h longest streak and +1.46% mean, both well off the gate</span></div>
                <div><span className="dn-lvl-k">stop (if entered)</span><span className="dn-lvl-v bear">1h close &lt; $59,154 (06-06 capitulation low — today&rsquo;s 24h low $62,430 is +$3,277 above that, so the lineage capitulation low remains the stop reference; a fresh capitulation print invalidates the oversold-counter read)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R only · take half at the cycle anchor reclaim $72,937, runner to D-SMA50 cluster ~$75k area</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R framework (recomputed for the walked
                inflection):</b>{' '}
                trigger $64,351 / stop $59,154 = $5,197 risk; first
                target $72,937 = $8,586 reward = 1.65:1 (above the
                desk&rsquo;s 1.5:1 gate but degraded modestly from
                06-07&rsquo;s 2.15:1). <b>Entry permitted on
                confirmed 1h close above the new flip $64,351</b>{' '}
                AND only if leg 2 has re-cleared (a fresh contiguous
                neg streak ≥ 4h on funding OR 24h mean below ~−0.5%)
                OR leg 1 has re-stacked (a fresh TD9 BUY on a second
                cycle frame). The 06-07 trigger at $63,538 DID print
                multi-hour on 06-08 but the dealer flip walked up
                with the rally — the desk did not have a real-time
                execution window at the print under the daily 00:05Z
                automation cadence, and the inflection has walked
                away from the prior level on the snapshot read. The
                scout is NON-ACTIONABLE because leg 2 has failed and
                leg 1 has narrowed; the trigger is $1,309 above spot
                but the surrounding promotion gates have weakened.{' '}
                <b>Hard rule:</b> no TD9-only entry without leg-3
                flip reclaim at the new level; no add on a one-frame
                ⚡ TD9 BUY cluster (vs 06-07&rsquo;s three-frame
                cluster that was the original promotion); no entry
                without leg 2 re-clearing or leg 1 re-stacking even
                if leg 3 fires alone.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 200W cycle floor watch RESOLVED on the bullish side (06-08 weekly close $63,058 printed +$1,039 / +1.68% above the full-history W-SMA200 $62,019) · the watch transitions from active to &ldquo;held above on first close&rdquo; — no further trade trigger at this stop, but the structural support read for the broader cycle stays informational</span>
              <div className="dn-trade-name">
                200W cycle floor watch — RESOLVED on the bullish side; the 06-08 weekly close $63,058 printed above the full-history 200W $62,019 by +$1,039 / +1.68%, the structural test from the 06-07 watch cleared
              </div>
              <div className="dn-thesis">
                The runbook §2 200W-support read flagged the
                full-history W-SMA200 as the cycle floor — a level
                weekly closes below in ~5.19% of weeks (8 / 154
                valid 200W observations on the desk&rsquo;s
                full-history parquet series, W-MON /
                closed=&lsquo;right&rsquo;), clustered at deep cycle
                capitulations. The 06-07 watch asked whether the
                in-progress weekly bar (W-MON anchored to 06-08)
                would recover and close at or above $62,008 by
                week-end to avoid a formal 200W floor break.
                Today&rsquo;s answer: <em>YES</em>. The 06-08 weekly
                close prints at $63,058, +$1,039 / +1.68% ABOVE the
                new full-history W-SMA200 of $62,019 (the level
                itself moved +$11 because the rolling 200-week
                window dropped one low-end week and added the
                in-progress 06-08 weekly bar at a near-similar value).
                This is the first weekly close above the full-history
                200W since the down-leg broke on 06-01, and the
                structural test of the cycle thesis (intact
                mid-cycle drawdown vs cycle-top retrace) has
                resolved on the side of the bulls. The watch
                transitions from active to <em>held above on first
                close</em>; the historical-frequency context stays
                informational — a single weekly close above the
                level is not a long-side entry on its own (clusters
                of consecutive closes are the meaningful pattern),
                but the bear-tail thesis has structurally weakened
                across this resolution. The weekly_200sma.json file
                is still absent on the server (fourth consecutive
                note); per runbook fallback the full-history
                computation continues to be the data source.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W watch source</span><span className="dn-lvl-v">weekly_200sma.json ABSENT (fourth consecutive note; lineage carry) · fallback per runbook §2: formal full-history parquet computation from 2019-09-09, 200 closed weekly bars ending 06-08, W-SMA200 = $62,019 (moved up $11 vs 06-07&rsquo;s $62,008 — the rolling window dropped one low-end week and added the 06-08 close $63,058)</span></div>
                <div><span className="dn-lvl-k">06-08 WEEKLY CLOSE vs 200W (THE RESOLUTION)</span><span className="dn-lvl-v bull">$63,058 vs $62,019 = +$1,039 / +1.68% ABOVE — the first weekly close above the full-history 200W since the down-leg broke on 06-01; the 06-07 watch resolved on the side of the bulls</span></div>
                <div><span className="dn-lvl-k">spot vs 200W (this snap)</span><span className="dn-lvl-v bull">spot $63,042 − 200W $62,019 = +$1,023 / +1.65% above (gap flipped from −1.73% on 06-07 by +3.38pt as spot recovered +$2,109 and 200W moved up only $11)</span></div>
                <div><span className="dn-lvl-k">06-07 daily close vs 200W</span><span className="dn-lvl-v bull">$63,298 vs $62,019 = +$1,279 above (the day rallied +$2,448 close-to-close, the largest single-day lift of the post-wick window)</span></div>
                <div><span className="dn-lvl-k">06-09 in-progress close vs 200W</span><span className="dn-lvl-v bull">parquet anchor row 00:05Z close $63,022 vs $62,019 = +$1,003 above</span></div>
                <div><span className="dn-lvl-k">historical context (informational)</span><span className="dn-lvl-v">8 / 154 valid 200W observations show weekly closes below the level — ~5.19% of weeks, clustered at deep cycle capitulations · per runbook do-not-fabricate, no percentile / break-event claim is asserted off the resolution alone, only the level + the 06-08 close-vs-200W gap is surfaced</span></div>
                <div><span className="dn-lvl-k">watch disposition</span><span className="dn-lvl-v">RESOLVED on the bullish side — the watch transitions from active to &ldquo;held above on first close&rdquo;; no further trade trigger at this stop. The structural support read for the broader cycle stays informational across subsequent notes; a clustered re-test below would re-open the watch</span></div>
              </div>
              <div className="dn-gating">
                <b>Watch RESOLVED.</b> The 06-08 weekly close above
                the full-history 200W is a structural floor support
                signal that closes the most aggressive bearish read
                of the down-leg; but per runbook discipline, a single
                weekly close above the level is not a long-side
                trigger on its own. The mean-revert long scout
                above is the actionable card if its legs re-stack
                (currently 1 of 3 cleared); the 200W reclaim is a
                separate macro-level signal that has now stamped on
                the bullish side. If a future weekly close prints
                below $62,019 the watch re-opens on the bear side
                and the cycle-thesis reassessment from the 06-07
                framing re-applies; absent such a re-test, the
                resolution carries forward.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · 200W cycle floor RECLAIMED on weekly close (06-08 $63,058 vs $62,019 = +$1,039 above) — the 06-07 watch resolved on the bullish side · spot recovered $2,109 since 06-07 to $63,042 (+3.46%, intra-window 06-08 high $64,190) · 7JUN +3.87M and 8JUN −2.29M front chunks BOTH settled inside the inter-note window, today&rsquo;s 9JUN +2.26M is the next positive front chunk after the intervening 8JUN negative, still pending the 08:00Z settle (~8h ahead, NOT yet settled) · mean-revert long scout: leg 3 fired post-note multi-hour on 06-08 but dealer flip walked up to $64,351 with the rally; reframed R/R = 1.65:1; leg 2 (short-pay regime) FAILED on the leverage deflation; leg 1 (TD9 cluster) narrowed from three to one + one pending · macro Friday print landed: 10Y +8bp to 4.55% gate FIRED, HY OAS +2bp gate 2bp from fire, reclaim-long rates filter AT boundary · $60k crash-put wall RE-DEEPENED to −34.00M (was −26.19M on 06-07)</span>
            </h2>

            <p>
              Of the 06-07 decision conditions: the 7JUN26 expiry
              settle FIRED CLEAN (+3.87M cleared at 08:00Z 06-07)
              AND the 8JUN26 settle FIRED CLEAN (−2.29M cleared at
              08:00Z 06-08, both inside the inter-note window); the
              dealer book repaired marginally (+$2.0M to −36.7M,
              small vs 06-07&rsquo;s lineage-largest +$14.8M, still
              net-short); the spot-extension tail DID NOT FIRE (24h
              low $62,430 is +$3,277 above the 06-06 lineage low
              $59,154, the post-wick floor held both inter-note
              days); the weekend-weekly-close tail RESOLVED ON THE
              BULLISH SIDE (06-08 weekly close $63,058 printed
              +$1,039 above the full-history W-SMA200 $62,019, the
              first weekly close above since 06-01); the mean-revert
              long scout leg-3 trigger at $63,538 FIRED post-note
              multi-hour on 06-08 (max 1h close $63,936.50 at
              2026-06-08 15:00Z) but the dealer flip walked UP +$813
              to $64,351 with the rally — the inflection chased the
              move rather than holding the prior level, and the
              scout&rsquo;s leg 2 (funding short-pay ≥ 4h) NOW
              FAILS on the deflated leverage regime; the cycle
              continuation watch stayed CLOSED-VINDICATED with no
              fresh hostile-2 single-minute signature on
              today&rsquo;s tape; the macro Friday FRED print
              landed at the 06-08 22:17Z render and the rates
              re-grow gate at 4.53% FIRED on the carried Friday
              close (10Y +8bp to 4.55%), the HY OAS gate moved to
              2bp from fire (+2bp to 2.76%), and the reclaim-long
              rates filter (10Y &lt; 4.55%) is now AT the boundary.
              The conditions today re-set around a STRUCTURALLY
              RECLAIMED 200W cycle floor on weekly close, a 7JUN-clean
              / 8JUN-negative / 9JUN-pending front-chunk sequence (the
              first positive-front chunk of the down-leg cleared,
              then a negative intervened, then today&rsquo;s positive
              chunk is pending the 8h-ahead settle), a walked dealer
              flip at $64,351, a degraded mean-revert long scout
              (leg 2 failed, leg 1 narrowed), and a macro tape that
              just rotated against the reclaim-long stance:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>9JUN26 expiry settle (today 08:00Z, ~8h ahead)</td><td className="bull">+2.26M POSITIVE front chunk settles at 08:00Z; the next positive front chunk after the intervening 8JUN −2.29M negative (NOT yet settled at this anchor — pending the 8h-ahead print; 7JUN +3.87M / 8JUN −2.29M both settled inside the inter-note window); post-settle ex-9JUN aggregate ≈ −38.96M (slightly worse on residual basis because the positive chunk is what clears, leaving the negative tail; but the FRONT-decay shape itself continues the 06-07 positive-front pattern)</td><td>watch the settle print; no action required if settle prints clean — if a vol event prints, re-evaluate the dealer-book repair leg of the cover-bounce scout and the leg-3 walked-flip dynamic</td></tr>
                <tr><td>200W cycle floor reclaim (RESOLVED bullish; 06-08 weekly close $63,058 vs $62,019 = +$1,039 above)</td><td className="bull">RESOLVED · the 06-07 watch transition: held above on first close · structural floor support stamped on the bullish side</td><td>no further trade trigger at this stop; the resolution carries forward as informational structural-support context · a future weekly close below $62,019 re-opens the watch on the bear side</td></tr>
                <tr><td>Mean-revert long scout (leg 3 walked to $64,351; R/R 1.65:1 reframed)</td><td className="bull">1h close &gt; flip $64,351 with OI still building / not collapsing · trigger $1,309 above spot · recomputed R/R 1.65:1 at trigger $64,351 / stop $59,154 / first target $72,937 — passes the 1.5:1 gate (degraded from 06-07&rsquo;s 2.15:1 because the flip walked up alongside the rally)</td><td><em>scout long 0.2R ONLY on confirmed 1h close above the new flip $64,351 AND only if leg 2 has re-cleared (fresh ≥4h contiguous neg streak OR 24h mean &lt; ~−0.5%) OR leg 1 has re-stacked (fresh TD9 BUY on a second cycle frame)</em> with entry-bar cover-shape check; take half at cycle anchor $72,937, runner to D-SMA50 cluster ~$75k</td></tr>
                <tr><td>Mean-revert leg 2 FAILED (funding short-pay ≥ 4h)</td><td className="bear">longest contiguous neg streak 2.42h (vs 4h gate); 24h mean +1.46% (flipped positive from 06-07&rsquo;s −0.13%); neg-minute share 28.11% (was 72.80%); the leverage book has materially deflated</td><td>this promotion leg no longer clears; the &ldquo;funding-paid-short&rdquo; regime that supported the mean-revert premise is no longer in effect · reactivation requires fresh ≥4h contiguous neg streak OR 24h mean &lt; ~−0.5% on a fresh print</td></tr>
                <tr><td>Mean-revert leg 1 narrowed (TD9 BUY cluster)</td><td className="bear">ONE concurrent frame (3d) + 1M pending (was THREE concurrent on 06-07: 12h / 1d / 3d); the 12h and 1d advanced past TD9 to Sell 5 / Sell 1 inside the post-wick bounce, the 8h reset to Buy 1</td><td>this promotion leg has thinned; reactivation requires a fresh TD9 BUY on a second cycle frame (most likely re-printed candidates would be 8h or 12h on a fresh oversold-counter on a leg-down)</td></tr>
                <tr><td>Cover-bounce scout (long) — DROPPED carried; legs 2 + 3 FADED today</td><td className="bull">requires 1d close &gt; $72,937 AND aggregate GEX flips &gt; 0 AND 1h cover-shape print — leg 2 (dealer-book repair) moved +$2.0M to −36.7M (small vs 06-07&rsquo;s +$14.8M; still net-short); leg 3 (cover-shape flow) SOFTENED on the 4h window (futures-side flat, taker-net mildly negative — was net-buyer across every field on 06-07); leg 1 (anchor reclaim, the structural gate) unmoved at ~$9.9k overhead but $2.1k closer as spot recovered</td><td>no entry · the path FADED on legs 2 + 3 today and stays gated by leg 1 (anchor reclaim); the 200W reclaim on weekly close is structural floor support, not a cover-bounce trigger — the cover-bounce path remains anchor-gated</td></tr>
                <tr><td>Cycle continuation cadence (CLOSED-VINDICATED carried; no fresh hostile-2 today)</td><td className="stale">no single-minute Δnet ≤ −3k print across the 24h tape; closest pattern was the BJ 12:31 06-08 / UTC 04:31 06-08 SM net trough −41,676 → BJ 19:31 06-08 / UTC 11:31 06-08 SM net peak −37,475 (60-min cover-shape, inverse of hostile-2 direction)</td><td>read each fresh Δnet ≤ −3k or Δnet ≥ +3k print as a signal in itself — no time prior · re-stack hostile-2 signatures remain meaningful tape reads when they print, on no-calendar basis only</td></tr>
                <tr><td>HY OAS macro re-grow gate (Friday print landed)</td><td className="bear">2.76% (2bp from fire — was 4bp on 06-07; the Friday close moved +2bp toward the 2.78% gate)</td><td>at 2bp from touch on a landed Friday close, the gate is meaningfully closer · monitor the next Tier-1 daily print for first fire</td></tr>
                <tr><td>10Y rates re-grow gate FIRED (Friday print landed)</td><td className="bear">4.55% (gate 4.53% FIRED — was 4.47% on 06-07; the Friday close moved +8bp through the gate)</td><td>the rates re-grow gate has fired on the Friday close; a single gate firing without the credit gate firing is not yet a full credit-led re-grow signal — the rates move is also consistent with a non-credit-driven supply / term-premium move · monitor the next print for credit confirmation</td></tr>
                <tr><td>Reclaim-long rates filter AT boundary</td><td className="bear">10Y &lt; 4.55% close — AT the boundary at exactly 4.55% (filter is strict &lt;, current 4.55% reads as &ldquo;at boundary&rdquo; — has NOT fired the long-side disqualifier but no longer holds with 6bp of room as on 06-07)</td><td>one more bp of widening on the next print mechanically disqualifies the long-side rates filter; the macro side has rotated against the reclaim-long stance materially</td></tr>
                <tr><td>$60k crash-put wall RE-DEEPENED (dealer book penciled in a fresh destabilizer)</td><td className="bear">−34.00M (was −26.19M on 06-07, −$7.81M heavier — the largest single-strike negative-gamma re-add of the post-wick window; spot $63,042 is +$3,042 above the strike, the wall has flipped role to a downside destabilizer if spot retests the level)</td><td>the wall does not trigger an entry on its own but flags the dealer-side asymmetry of a fresh test of $60k · monitor in tandem with leg-1 / leg-3 of the mean-revert scout</td></tr>
                <tr><td>BTC↔NQ cross-asset rotation (regime IDIOSYNCRATIC, BTC↔NQ tie firmed for second consecutive note)</td><td className="stale">|r| 0.232 (basically flat vs 06-07&rsquo;s 0.233); BTC↔NQ +0.227 (up from +0.188 — firmed +0.039 for the second consecutive note as the rolling 7d window incorporated the co-recovery prints of 06-07 / 06-08); BTC −11.54% vs NQ −3.01% gap −8.53pt (NARROWED from −13.26pt as both sides recovered)</td><td>the BTC tape is now recovering into a partially-recovered TradFi tape (NQ +1.48pt week-on-week vs the 06-07 read) — the rotation flipped from 06-07&rsquo;s BTC-extending-alone shape to a BTC-recovering-into-recovering-TradFi shape · cross-asset still IDIOSYNCRATIC for trading prescription</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the mean-revert long scout&rsquo;s reframed
                leg-3 trigger at the walked flip $64,351 prints a
                confirming 1h close while at least ONE of legs 1
                (TD9 cluster re-stack on a second cycle frame) or 2
                (funding short-pay regime re-clears the 4h gate)
                returns to the cleared list, or whether a fresh
                macro Tier-1 print on Monday US open lifts 10Y
                through the 4.55% reclaim-long filter and / or
                lifts HY OAS through the 2.78% credit re-grow gate
                — disqualifying the long-side rates filter or
                firing a full credit-led re-grow respectively. The
                200W cycle floor is structurally reclaimed on
                weekly close; the down-leg low has held two
                inter-note days; the dealer book repaired
                marginally and the 7JUN front amplifier cleared
                with the 9JUN positive front chunk pending the
                08:00Z settle (an intervening 8JUN negative cleared
                inside the inter-note window). But the dealer flip
                walked UP +$813 with the rally, the macro Friday
                print rotated against the reclaim-long stance, the
                mean-revert scout&rsquo;s leg 2 failed on the
                deflated leverage regime, and the $60k crash-put
                wall RE-DEEPENED by −$7.81M as the dealer book
                penciled in a fresh destabilizer at the strike spot
                most recently held but cleared. The question is now
                whether the structural floor-support resolution
                converts into a clean cycle-thesis recovery via the
                walked leg-3 trigger and a re-cleared promotion
                leg, or whether the macro rates move and the dealer
                $60k re-load drive a re-test of the cycle floor
                that the 06-08 weekly close just stamped above
              </span>. Until then this note runs as written: the
              runner and the put-spread tail are closed, the
              cover-bounce scout is dropped on the price plane
              with legs 2 + 3 faded vs 06-07, the short framework
              watch is CLOSED-VINDICATED with no fresh hostile-2,
              the mean-revert long scout is NON-ACTIONABLE with
              leg 2 FAILED and leg 1 NARROWED and leg 3 walked to
              $64,351, and the 200W cycle floor watch transitions
              to &ldquo;held above on first close&rdquo;. The
              BTC-vs-TradFi decoupling narrowed to −8.53pt as both
              sides recovered into the rolling 7d window; the
              engine MTF frames advanced past their TD9 cluster
              with the 12h golden cross just printing; the dealer
              book improved marginally on aggregate but re-loaded
              negative gamma at and below spot; the leverage book
              materially deflated as funding flipped back positive
              for the first time of the post-wick window. The right
              read for the next 24h is{' '}
              <em>patient — watch the 9JUN settle resolution, the
              Monday US-open macro Tier-1 print for credit
              confirmation or rates lift, and a 1h close above the
              new flip $64,351 — three external prints that
              re-write the call</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit · STAGE B verdict + STAGE C fix-pass summarized)
            </span>
            <b>Status:</b> this is the v2 EN promotion emitted by
            STAGE C of the daily desk-note routine on the btc-fetcher
            server after STAGE B ran the codex hostile-but-fair audit
            on the v1 git diff. The full audit record is at{' '}
            <code>audits/2026-06-09-desk-note.md</code> and is
            authoritative for the v1 → v2 fix pass; STAGE C did not
            re-run the audit and did not modify the audit file.{' '}
            <b>STAGE B verdict:</b> BLOCK-CRITICAL — 1 CRITICAL,
            4 MAJOR, 5 MINOR; build proxy{' '}
            <code>npx --no-install tsc --noEmit</code> exited 0; full{' '}
            <code>next build</code> remained environment-blocked on
            the Node 18.19.1 server vs the Next.js{' '}
            <code>&gt;=20.9.0</code> requirement.{' '}
            <b>STAGE C fix pass:</b> all 10 findings were addressed
            in place on this page. <em>DN-001 (CRITICAL)</em> — the
            &ldquo;second consecutive positive-front-chunk settle&rdquo;
            narrative and any &ldquo;decayed clean&rdquo; framing were
            reframed across the manifest, the lead, the dealer-map
            chapeau / paragraph, the short-scout block, the
            decision-conditions chapeau / table / paragraph, and the
            signature line as &ldquo;next positive front chunk after
            an intervening 8JUN negative, pending the 08:00Z settle
            (NOT yet settled at this anchor)&rdquo;. <em>DN-002
            (MAJOR)</em> — every live_db.<code>t</code> value was
            converted as BJ-local with UTC computed as BJ − 8h, and
            the display shape was standardized to{' '}
            <code>BJ HH:MM MM-DD / UTC HH:MM MM-DD</code> for the
            funding trough / max, neg / pos streak endpoints, OI
            peak / trough, SM long_btc and short_btc peaks /
            troughs, and the SM net trough / peak in the manifest,
            meta band, and prose. <em>DN-003 (MAJOR)</em> — the
            08:04 BJ baseline for headline 24h price / OI / spot
            CVD / futures CVD was explicitly relabeled in the spot
            paragraph, the OI manifest cell, and the windowed-flow
            paragraph as &ldquo;t == &lsquo;06-08 08:04&rsquo;
            BJ-local / UTC 00:04 06-08, one minute before the
            08:05 anchor&rdquo;, with the funding denominator kept
            on the exact 08:05 anchor row. <em>DN-004 (MAJOR)</em>{' '}
            — the windowed-flow lead sentence was rewritten from
            &ldquo;net-sold on spot CVD&rdquo; to &ldquo;bid on
            spot CVD but net-sold on futures CVD and taker-net&rdquo;
            to align with the positive spot CVD Δ +2,601.{' '}
            <em>DN-005 (MAJOR)</em> — every &ldquo;parquet last
            bar 2026-06-09 00:05Z&rdquo; was relabeled to{' '}
            &ldquo;parquet anchor row 2026-06-09 00:05Z&rdquo;
            with an explicit note that the physical last row is
            00:06Z ($63,069.30); the relabel covers the manifest,
            the lead, the MA paragraph, the IV/RV paragraph, and
            the 200W-watch trade block. <em>DN-006 (MINOR)</em>{' '}
            — the retail long-pct trough timestamp was corrected
            from BJ 17:51 06-08 to BJ 01:06 06-09 / UTC 17:06
            06-08 on the source row. <em>DN-007 (MINOR)</em> —
            the funding trough-vs-snap spread was relabeled from{' '}
            <code>$0.015 shallower</code> to{' '}
            <code>0.015pt shallower</code> in both the meta band
            and the funding paragraph. <em>DN-008 (MINOR)</em> —
            the Fed net liquidity Δ column in the macro table was
            corrected from <code>0.000T</code> to{' '}
            <code>−0.038T</code> and labeled as source-panel WoW.{' '}
            <em>DN-009 (MINOR)</em> — the RV side note &ldquo;last
            29 returns / 30 closes reads 39.50%&rdquo; that did not
            reproduce was removed; the main 30-return / 31-close
            39.30% value is source-backed and kept.{' '}
            <em>DN-010 (MINOR)</em> — the macro-render weekday
            descriptor was corrected from &ldquo;Sunday-evening
            UTC render&rdquo; to &ldquo;Monday-evening UTC
            render&rdquo; for the 2026-06-08 22:17Z timestamp.{' '}
            <b>STAGE A discipline carried forward:</b>{' '}
            rolling-source archive policy per runbook §1
            (snapshots/2026-06-09-0008/ holds mtf_div_latest.html /
            btc_gex.html / macro_dashboard.html /
            cross_asset_correlation_summary.md as read), BJ-local{' '}
            <code>t</code> convention per runbook §2 (pin row{' '}
            <code>t == &ldquo;06-09 08:05&rdquo;</code> BJ-local /
            UTC 00:05Z; conversion now applied uniformly per
            DN-002 fix), full MA matrix (Daily AND Weekly, SMA AND
            EMA, n ∈ {`{20, 50, 100, 150, 200}`}) under the
            2024-2026 subset per 06-02 audit DN-005 desk-policy
            carry with full-history references for the 200W
            watch, funding × 1095 annualization (NOT ×1095×100),
            SM cut fraction computed as |Δ|/prior_net against the
            06-07 pin (no 06-08 note — the prior pin is ~48h ago),
            claims ≤ data per runbook §3 (NTT / max-pain /
            strike-IV / BTC-NQ ratio explicitly framework-only),
            requireViewer gating per runbook §4 as the first
            statement of the default export.{' '}
            <b>v2 audit reference: audits/2026-06-09-desk-note.md
            (verdict BLOCK-CRITICAL · 1 CRITICAL / 4 MAJOR / 5
            MINOR · all 10 findings addressed in this v2 fix
            pass).</b>
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for
            discussion among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-06-09 00:05Z,
            BJ 08:05 06-09) with section-level provenance disclosed
            in the manifest band above; the macro Tier-1 panel render
            is 2026-06-08 22:17Z (~1h 48m before snapshot) and the
            Friday 06-05 FRED daily print has now landed (weekend
            FRED freeze from 06-07 partially lifted). The rolling
            MTF / GEX / cross-asset artifacts are archived to
            snapshots/2026-06-09-0008/ before read. Levels, sizes,
            and conditions are illustrative of the desk&rsquo;s
            process, not standing recommendations. Past correlation,
            gamma, and positioning patterns do not bind future tape.
            Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The 200W cycle floor reclaimed on the 06-08 weekly
                close — the 06-07 watch resolved bullish. The 7JUN
                front amplifier cleared (with an intervening 8JUN
                negative inside the window) and today&rsquo;s 9JUN
                +2.26M positive chunk is pending the 08:00Z settle
                ~8h ahead, the leverage book deflated, and spot held
                above the floor on every minute. But the dealer flip
                walked UP +$813 with the rally, the macro Friday
                print rotated rates against the reclaim-long stance,
                the mean-revert scout&rsquo;s leg 2 failed on the
                funding flip and leg 1 narrowed to one concurrent
                frame. Patient — watch the 9JUN settle, the Monday
                macro Tier-1 print, and a 1h close above the walked
                flip $64,351.
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
            v2 · 2026-06-09 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
