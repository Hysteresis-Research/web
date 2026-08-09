import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-09 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-09',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-09' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260809() {
  await requireViewer('/desk/2026-08-09');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-09 · v2</span>
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
              <span className="dn-big">$64,964</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.07%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-09 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-09 00:05Z (row t=&ldquo;08-09 08:05&rdquo; BJ, the 00:05Z daily anchor)</td>
                  <td className="dn-flag">
                    fresh · 1-min · pinned to the 00:05Z anchor row for reproducibility
                    (file tail had already advanced to 00:07Z at read time) · live-tape{' '}
                    <code> t</code> is BJ-local (UTC+8): the 00:05Z pin = t &ldquo;08-09
                    08:05&rdquo;, all downstream BJ timestamps converted to UTC in the
                    prose · the 24h / 4h / 1h flow + funding windows run from the 08:05 /
                    04:05 / 07:05 BJ open; the same-clock point comparison (SM net vs the
                    08-08 08:05 baseline) uses the exact clock
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-09 08:01 BJ (00:01Z) scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (can advance intrahour) · the archived
                    copy at /opt/desk-note/snapshots/2026-08-09-0007/ is the pinned
                    source · ~4-min stale vs snapshot anchor · in-progress bars · scan
                    spot $64,928, 24h +0.08%
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-09 00:01Z snapshot</td>
                  <td className="dn-flag">
                    ~4-min stale vs anchor · Deribit idx $65,269 vs live $64,964 ($305
                    above live) · 828 instruments · 9AUG26 0.3DTE +22.09M on the book
                    (settles 08:00Z today, ~8h after this snap) · archived at
                    /opt/desk-note/snapshots/2026-08-09-0007/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-09 00:01Z
                  </td>
                  <td className="dn-flag">~4-min lag · 7d 1h bars · 22 assets · 167 rows · archived in snapshot dir</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-08 22:16Z render</td>
                  <td className="dn-flag">
                    ~1.8h render lag · WEEKEND carry (Sat 08-08, cash/rates markets closed):
                    Tier-1 rate LEVELS unchanged vs the 08-08 NOTE — 10Y 4.69%, TIPS 2.43%, HY
                    OAS 2.71%, USD/JPY 157.74 flat note-to-note · BUT the source dashboard&rsquo;s
                    own Δ column still prints small deltas on its own base (10Y +6.0bp, TIPS
                    +2.0bp, USD/JPY −0.66, US-JP spread +6.0bp) — disclosed, not leaned on with
                    cash markets closed · DXY −0.37 to 99.60 and Fed net liq +0.014T to $5.840T
                    are carried STRAIGHT from that source Δ column (source-delta basis) · MOVE
                    fetch-failed (dark, 5th render) · NFCI stale · archived in snapshot dir
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-08-09 00:05Z</td>
                  <td className="dn-flag">
                    close $64,930.40 (in-progress 08-09 bar) · offsets recomputed vs live
                    spot $64,964.00 · weekly ladder off the full 2019–2026 wildcard (362
                    weekly bars) · W-SMA200 $63,761.02 in-progress / $63,533.52 settled
                    (the cycle floor); W-EMAs full-history
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle floor watch</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · recomputed_at 2026-08-03 00:11Z (STALE weekly state)</td>
                  <td className="dn-flag">
                    weekly-close 200-SMA $63,533.52, last completed week 2026-08-02 close
                    $63,550.00, state ABOVE, 5 consecutive weekly closes above (streak from
                    2026-07-05) · the JSON&rsquo;s own recomputed_at is 2026-08-03 00:11:39Z (6
                    days stale; the file mtime was touched 2026-08-09 00:11Z but the JSON is NOT
                    part of the pinned snapshot dir, so mtime is not a recompute time) · the
                    current week (08-03→08-09) closes tonight 00:00Z 08-10 with the in-progress
                    weekly bar at $64,930.40 — a 6th above-floor close forming, +$1,397 clear of
                    the settled floor, attributed to the PARQUET recompute (last bar 00:05Z), NOT
                    a fresh trap-watch run · slow level (~$250/wk), the settled-floor value is the
                    load-bearing number and does not change intra-week so the 6-day-stale JSON is
                    fine as the settled-floor source · the dedicated weekly_200sma.json runbook
                    path is absent; trap-watch state used as the live substitute for the settled floor
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale · monthly (68d) · do not treat as live</td>
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
              <span className="dn-v">+4.77%</span>
              <span className="dn-src">live · funding field 0.004357/8h × 1095 = +4.77% ann · 24h mean +5.92% (was +5.43% on 08-08 — re-heated a further +0.49pt, a third effective day of firming carry) · 0 / 1441 sampled rows negative (still zero) · max +7.89% ann @ 08-08 20:19Z (04:19 BJ 08-09), min +2.75% ann @ 08-08 04:27Z (12:27 BJ 08-08) · not cap-pinned (well under the +10.95% Binance cap)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h mean</span>
              <span className="dn-v bear">+5.43% → +5.92% (re-heated +0.49pt)</span>
              <span className="dn-src">the carry firmed a third effective day — the long side keeps crowding rather than flushing; still well under half the cap, but the leverage-off tailwind the scout leaned on early in the lineage remains fully reversed to a firming carry</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">+0.23% (+247.9 BTC)</span>
              <span className="dn-src">live · a SECOND straight expansion (after +1,230.0 on 08-08) but decelerated hard — +248 vs +1,230 · 106,979.5 → 107,227.5 BTC · positions still building behind price, but the build is thinning fast, and the 4h / 1h are ticking OFF (−168.2 / −67.5) — the demand pulse is fading at the cap</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">53.40 / 46.60</span>
              <span className="dn-src">live_db `mkt_long_pct` · re-crowded +0.96pt from 52.44 (24h ago) to 53.40 · 24h range 52.44 / 53.40 — retail leaned BACK onto the long side (the opposite of the 08-08 de-crowd), a mild re-crowd into the stall</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+155 (near-FLAT, marginally LONG · deep short GONE)</span>
              <span className="dn-src">live · long 13.18k − short 13.03k = +155 · the first non-negative SM net at a daily desk anchor of the lineage (SM had already crossed non-negative INTRADAY on 08-08 — see the +626 / +1,235 artifact peak / +740 clean high below — but every prior 00:05Z daily anchor 08-02→08-08 read negative; this 00:05Z snapshot is the first stable daily anchor above zero) · the transition from 08-08&rsquo;s −1,512 crosses a single-minute long spike @ 08-08 15:11 BJ (Δlong +2,950 to 15,221, reverting next minute) and a 15:16 BJ re-sync that re-levelled net −1,510 → +626 — the recurring BJ ~14:00–15:00 feed artifact, so the step is NOT a certifiable single-book cover · but the current book has held clean and drifted normally ~17h since (15:16 BJ 08-08 → 08:05 BJ 08-09, net +626 → +155), so the CURRENT state net +155 is certifiable near-flat</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs same-clock 24h base</span>
              <span className="dn-v bull">−1,512 → +155 · CERTIFIED non-negative (&gt; −9,000)</span>
              <span className="dn-src">RAW same-clock ΔNet +1,667 crosses the 08-08 15:11/15:16 BJ artifact+re-sync (a Δlong +2,950 spike then a −1,510 → +626 re-level), so the raw 24h delta is not a clean single-book move · but the CURRENT certifiable SM net +155 clears the scout&rsquo;s &ldquo;certified SM &gt; −9,000&rdquo; leg handily and is now flat-to-slightly-long — the deep short is fully gone, the SM-short leg of the chase-short stays unarmed</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.3% / 27.74%</span>
              <span className="dn-src">GEX median IV vs 30D close-to-close RV (30 returns / 31 closes, logret.std × √365 × 100) · chain richness ~+12.6pt · IV median is a chain-median across instruments, NOT a tradable spread · P/C OI 0.58 (call 205,377 / put 118,508) · 31-close range $62,307 – $66,522 · (29 returns reads 28.15%, marginally higher — RV essentially flat under the stall)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+2.02% (above)</span>
              <span className="dn-src">flip $63,676 (DROPPED −$157 from $63,833 on 08-08) · vs live spot $64,964.00 (+2.02%; 64,964/63,676 − 1 = 2.023%) / GEX file Deribit idx $65,269 (+2.50%; 65,269/63,676 − 1 = 2.502%, file rounds +2.5%) — both refs positive · headline GEX +100.5M, by-expiry rollup +113.82M (essentially flat vs +100.3M / +113.76M on 08-08 — the book held its deep positive gamma)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The reclaim held the cap a second close but STALLED — the extension the
                08-07/08-08 book wanted printed on price only (a second 1d close above the
                cap) while every quality leg came in weak: flat tape, decelerating OI, a
                heavy spot bid absorbed with zero price gain, and a carry that re-heated a
                third effective day
              </span>. Spot is{' '}
              <span className="dn-tag">$64,964, +0.07% on 24h</span> — a flat digestion day.
              The 08-08 daily closed{' '}
              <span className="dn-tag bull">$64,928.50</span> (a $43 up-day, the second
              close above the D-EMA50 cap and the highest close of the lineage), and the
              in-progress 08-09 bar sits $64,930.40 — both still above the cap{' '}
              <span className="dn-tag bull">D-EMA50 $64,655.13 (+0.48%)</span>, which held
              as support a second day. The single genuinely bullish shift is the SM tell:{' '}
              <span className="dn-tag bull">SM net flipped to +155</span> (long 13.18k −
              short 13.03k), the first non-negative daily-anchor read of the lineage (SM crossed
              non-negative intraday on 08-08; this is the first 00:05Z daily anchor above zero) —
              the deep short is
              fully gone (though the step from −1,512 crosses the recurring BJ ~14:00–15:00
              feed artifact, so it is the current stable state, not the transition, that is
              certifiable). The 200W cycle floor holds:{' '}
              <span className="dn-tag bull">a 6th above-floor weekly close is forming</span>{' '}
              tonight at $64,930 vs the $63,534 settled floor. But the demand pulse is
              fading:{' '}
              <span className="dn-tag bear">OI expanded only +247.9 BTC (+0.23%)</span> vs
              08-08&rsquo;s +1,230, and the 4h/1h OI already ticked off (−168 / −68); the
              24h spot CVD was heavy (<span className="dn-tag">+11,152</span>) yet price went
              nowhere — a spot bid fully absorbed at the cap — while the perp discount
              widened to a 24h mean{' '}
              <span className="dn-tag bear">−$42</span> (deeper than 08-08&rsquo;s −$30),{' '}
              <span className="dn-tag bear">funding re-heated (24h mean +5.43% → +5.92%)</span>,
              and{' '}
              <span className="dn-tag bear">retail re-crowded +0.96pt</span>. The dealer book
              stayed deeply positive-gamma (headline{' '}
              <span className="dn-tag bull">+100.5M</span>, rollup{' '}
              <span className="dn-tag bull">+113.82M</span>, flip dropped to $63,676, spot
              +2.02% above), and the +$65k–$68k / +90.19M band is a two-sided clamp right
              over spot that caps the grind as much as it cushions a fade. MTF split cleanly:
              the slow book still leans up (1d strong golden cross 2b, 8h/12h/1w golden,
              HTF bottom-div, the 08-08 12h ⚡TD9 SELL flag CLEARED) but the fast frames
              rolled over (a fresh 4h water-up death cross, 1h death 6b, RSIs cooled) —
              consistent with the stall. Book:{' '}
              <span className="dn-tag">CARRY the 0.4R scout as-is — no fresh add</span> (the
              extension is too weak to press: flat price, decelerating OI, absorbed spot bid,
              re-heating carry); the take-half at the D-EMA100 $66,880 stands but price never
              approached it; the chase-short stays STOOD DOWN (floor holding, gamma +100.5M,
              spot +2.02% above the flip, SM flat-not-short); and the note turns on whether
              demand RE-ACCELERATES off the cap or the absorbed spot bid + widening perp
              discount + re-heated carry resolve the stall back under the cap.
            </p>

            <p>
              BTC prints <span className="dn-tag">$64,964</span> live,{' '}
              <span className="dn-tag">+0.07%</span> on 24h (the live-tape window; the 08:01
              BJ MTF scan reads +0.08% on its own 24h base — the ~4-min offset accounts for
              the rounding), inside a tight{' '}
              <span className="dn-tag">$65,187.43 / $64,828.81</span> range (24h high @
              14:38Z 08-08 / 22:38 BJ, low @ 00:20Z 08-08 / 08:20 BJ) — a $359 band, the
              tightest of the run.{' '}
              <span className="dn-signal">The cap held on a second close, but the tape went
              flat</span>: 08-05 closed $64,633.90, 08-06 gave it back at $64,300.00, 08-07
              re-cleared at $64,885.40 (the decisive same-day re-clear), and 08-08 closed{' '}
              <span className="dn-tag bull">$64,928.50</span> — a $43 up-day that is the
              second close above the cap and the highest of the lineage, but a nearly-flat
              one. Four daily offsets sit below spot, unchanged from 08-08:{' '}
              <span className="dn-tag bull">D-SMA50 $63,346.63 (+2.55%)</span>,{' '}
              <span className="dn-tag bull">D-EMA20 $64,272.82 (+1.08%)</span>,{' '}
              <span className="dn-tag bull">D-SMA20 $64,414.50 (+0.85%)</span>, and the
              load-bearing{' '}
              <span className="dn-tag bull">D-EMA50 cap $64,655.13 (+0.48%)</span> — the cap
              held as support a second day — then a gap to{' '}
              <span className="dn-tag bear">D-EMA100 $66,879.62 (−2.86%)</span> and{' '}
              <span className="dn-tag bear">D-SMA100 $67,887.61 (−4.31%)</span>.{' '}
              <span className="dn-em">
                The 08-08 note framed the extension as &ldquo;a second decisive 1d close
                above the D-EMA50 cap with OI continuing to build and funding not running to
                the cap.&rdquo; The price leg fired — 08-08 closed $64,928, $273 above the
                cap — but the quality legs did not: OI decelerated to +248 from +1,230,
                funding re-heated a further +0.49pt, and the tape went flat as a heavy spot
                bid was absorbed at the cap. So the extension is met on price and failed on
                quality: the book carries the scout, but the weak follow-through is not an
                add.
              </span>{' '}
              The reclaim held its ground above the cap; it did not extend toward the
              $67k–$68k cluster.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · SM net flipped to +155 (first non-negative DAILY ANCHOR of the lineage — crossed non-negative intraday on 08-08 · deep short GONE) — but the transition crosses the recurring BJ ~14:00–15:00 feed artifact, so it is the certifiable CURRENT state that reads flat-to-long · OI expanded a thin second day (+248 vs +1,230), 4h/1h ticking off · funding re-heated, retail re-crowded — the leverage backdrop firmed, not flushed</span>
            </h2>

            <p>
              <span className="dn-signal">
                The SM tell moved past flat — the 00:05Z daily anchor is marginally LONG for
                the first time of the lineage (SM had already ticked non-negative intraday on
                08-08) — but the transition rode the recurring feed artifact, so the
                clean read is the current stable state
              </span>. RAW SM net is{' '}
              <span className="dn-tag bull">+155</span> (long 13.18k − short 13.03k) vs the
              same-clock 24h baseline −1,512 — a raw ΔNet of{' '}
              <span className="dn-tag">+1,667</span> that reads as a further cover-to-long.
              But{' '}
              <span className="dn-em">that raw delta crosses a single-minute long spike @
              08-08 15:11 BJ (Δlong +2,950 to 15,221, reverting the very next minute) and a
              15:16 BJ re-sync that re-levelled net −1,510 → +626 — the same recurring BJ
              ~14:00–15:00 re-sync signature that contaminated the 08-06 and 08-07 tapes</span>,
              so the step from short to long is NOT a certifiable single-book move. The right
              read is the CURRENT state: post-re-sync, the book held clean and drifted
              normally for ~17h (15:16 BJ 08-08 → 08:05 BJ 08-09, net{' '}
              <span className="dn-tag">+626 → +155</span> as longs bled ~313 and shorts added
              ~158 into the stall), so the snapshot{' '}
              <span className="dn-tag bull">net +155 is certifiable near-flat</span>. Whether
              the −1,510 → +626 step was a genuine cover or a feed re-level, the conclusion is
              the same and clears the scout&rsquo;s &ldquo;certified SM &gt; −9,000&rdquo;
              leg by a wide margin: the deep short that defined the down-leg is fully gone,
              and SM now sits flat-to-slightly-long. SM net trough (most short){' '}
              <span className="dn-tag bear">−1,580 @ 08-08 02:41Z (10:41 BJ 08-08)</span> is
              a pre-re-sync print; net peak (most long){' '}
              <span className="dn-tag bull">+1,235 @ 08-08 07:11Z (15:11 BJ)</span> is the
              artifact spike itself — the clean post-re-sync high is +740 @ 08-08 08:16Z
              (16:16 BJ).
            </p>

            <p>
              The leverage side firmed rather than flushed — the stall came with a crowding
              carry, not a leverage-off.{' '}
              <span className="dn-signal">
                Funding re-heated a third effective day and the negatives stayed gone
              </span>: live <span className="dn-tag">+4.77% ann</span> (field 0.004357/8h ×
              1095), and the 24h mean{' '}
              <span className="dn-tag bear">+5.92% ann</span> (vs +5.43% on 08-08 — a further
              +0.49pt re-heat), with the window carrying{' '}
              <span className="dn-tag bear">0 / 1441 negative rows</span> (still zero). It is
              not a cap-press (the mean is well under half the +10.95% cap; range{' '}
              <span className="dn-tag">+2.75% / +7.89% ann</span>, max @ 08-08 20:19Z / 04:19
              BJ 08-09, min @ 08-08 04:27Z / 12:27 BJ), but the long carry has now crowded up
              three effective days — the leverage-off tailwind the scout leaned on early is
              long gone. OI Δ{' '}
              <span className="dn-tag bull">+247.9 BTC (+0.23%)</span> over 24h — a{' '}
              <span className="dn-em">second straight expansion, but decelerated hard</span>{' '}
              from 08-08&rsquo;s +1,230 (106,979.5 → 107,227.5), and the 4h/1h already tick
              off (−168.2 / −67.5 BTC): positions built behind price for a second day but the
              build is thinning and rolling over at the cap. Retail{' '}
              <span className="dn-tag bear">mkt_long_pct 53.40%</span> from 52.44% — a +0.96pt
              RE-crowd (24h range 52.44 / 53.40), leaning back onto the long side into the
              stall (the opposite of the 08-08 de-crowd). Perp trades a{' '}
              <span className="dn-tag bear">−$48.90 discount</span> to spot at the snap (1h
              mean −$54.91, range −$63.74 / −$41.78; 4h mean −$51.22; 24h mean −$42.22, range
              −$77.08 / −$12.01 — a persistent and WIDENING discount, deeper than
              08-08&rsquo;s −$30 mean). 1-min aggressor skew snap{' '}
              <span className="dn-tag bear">−5.2</span> (1h mean −9.31, range −28.5 / +14.6) —
              a mild sell-aggressor tilt at the snap.{' '}
              <span className="dn-em">
                OI decelerating + funding re-heating + retail re-crowding + a widening perp
                discount: the leverage backdrop firmed into the stall rather than flushing.
                The one additive leg is SM (flat-to-long, deep short gone). The picture is a
                spot-led grind that stalled at the cap — heavy spot buying absorbed by perp
                supply and dealer gamma, with the leverage book crowding the long carry back
                up rather than confirming a clean reclaim.
              </span>
            </p>

            <p>
              Windowed flow is the tell of the stall: a heavy 24h spot bid that price would
              not follow.{' '}
              <span className="dn-em">The 24h reads (row window 08-08 08:05 → 08-09 08:05 BJ)
              are spot-bid but price-flat</span>: 24h price{' '}
              <span className="dn-tag">+0.07%</span>, OI{' '}
              <span className="dn-tag bull">+247.9 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +11,151.6</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +558.5</span>, big-print{' '}
              <span className="dn-tag bear">−50.4 BTC / 244 big-print minutes</span>,
              taker-net <span className="dn-tag bull">+558.5</span> (fut_cvd tracks the taker
              cumsum this window; no CVD resets, so the deltas are clean) —{' '}
              <span className="dn-em">
                a very heavy spot aggressor bid (+11,152, five times 08-08&rsquo;s +2,222)
                that lifted price only +0.07% — the spot demand was fully absorbed at the cap
                by perp supply (the discount widened) and the +90M positive-gamma dampener.
                Big prints net offered −50, the one non-bid leg
              </span>. ~4h (row window 04:05 → 08:05 BJ): price{' '}
              <span className="dn-tag bear">−0.17%</span>, OI{' '}
              <span className="dn-tag bear">−168.2 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,531.9</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −280.7</span>, big-print{' '}
              <span className="dn-tag bull">+65.3 BTC / 38 prints</span>,
              taker-net <span className="dn-tag bear">−280.7</span> —{' '}
              <em>spot still bid but futures/takers offered into a fading price with OI
              coming off — spot leading, futures fading the top</em>. ~1h (row window 07:05 →
              08:05 BJ): price{' '}
              <span className="dn-tag">+0.03%</span>, OI{' '}
              <span className="dn-tag bear">−67.5 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +834.5</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +54.5</span>, big-print{' '}
              <span className="dn-tag bull">+4.4 BTC / 11 prints</span>,
              taker-net <span className="dn-tag bull">+54.5</span> —{' '}
              <em>a quiet, spot-bid hour with OI ticking off — a pause at the highs</em>. The
              24h was heavily spot-bid but price-inert; the 4h shows spot leading while
              futures fade and OI comes off; the 1h is a quiet pause. The demand is real but
              spot-only, and it is being absorbed at the cap rather than pushing through it.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · regime holds 5/9 cycle-reversal (JT&lt;0) · the slow book still leans up — 1d water-up STRONG golden cross now 2b (DIF&gt;0), 8h/12h/1w golden, HTF bottom-div (8h/12h/1w) — and the 08-08 12h ⚡TD9 SELL flag CLEARED · but the fast frames rolled over: a fresh 4h water-up death cross (1b) joins the 1h death (6b), RSIs cooled — the stall shows in the fast frames</span>
            </h2>

            <p>
              <span className="dn-signal">
                The slow structure held its lean-up while the fast frames rolled over — the
                overbought flag cleared, but so did the fast-frame bounce, leaving a stall
                inside a slow uptrend
              </span>. The regime tag holds{' '}
              <span className="dn-tag">5/9 周期反转体制 (JT&lt;0) —
              cycle-reversal / mean-reversion</span> (unchanged from 08-08), and the header
              net-read is unchanged at{' '}
              <span className="dn-tag bear">高级别偏空 · 短线反弹 (HTF lean-short,
              short-term bounce)</span> with the ⚠ HTF bottom-divergence cluster still on
              8h/12h/1w. The bull tells held:{' '}
              <span className="dn-tag bull">1d water-up STRONG golden cross (2b, DIF +69.2
              above water)</span> — the 08-08 fresh cross matured a bar without failing — the{' '}
              <span className="dn-tag bull">1w water-down golden cross (2b)</span> held, and
              8h/12h stayed golden (17b / 9b). Critically, the{' '}
              <span className="dn-tag bull">08-08 12h ⚡TD9 SELL overbought flag CLEARED —
              reset to Buy 1</span>, so the fast-frame overbought warning that flashed at the
              cap on 08-08 is gone. But the fast frames rolled with the stall: a{' '}
              <span className="dn-tag bear">fresh 4h water-up death cross (1b, DIF +268.2)</span>{' '}
              — the 08-08 4h golden flipped back to death — the{' '}
              <span className="dn-tag bear">1h water-up death cross advanced to 6b</span>, and
              the fast RSIs cooled (15m 37.8, 30m 40.9, 1h 48.3, all off the 08-08 highs).
              The golden cluster is now{' '}
              <span className="dn-tag bull">8h/12h/1d/1w</span> (four frames, the fast side
              dropped out), the top-divergence cluster is 1h/4h/1d (three frames) and the
              bottom-div cluster 1h/8h/12h/1w (four frames). The 15m carries a{' '}
              <span className="dn-tag bull">⚡TD9 BUY</span> and 1M a fresh{' '}
              <span className="dn-tag bull">⚡TD9 BUY</span> (oversold hints at the frame
              extremes).{' '}
              <span className="dn-em">
                Read straight: the slow book still leans up (1d strong golden matured, 8h/12h/1w
                golden, HTF bottom-div, the 12h overbought flag cleared), which keeps the
                scout&rsquo;s structural backing intact. But the fast frames rolled over with
                the flat tape (fresh 4h death cross, 1h death 6b, RSIs cooled) — the stall is
                visible in the fast frames. Not overbought flashing sell any more, just a
                fast-frame pause within a slow uptrend: consistent with carry-the-scout, not
                add.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>read</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,928</td><td className="num">37.8</td><td className="neut">death (water-up) 23b</td><td className="bear">below 9b · ↑65.0k</td><td>Sell 2</td><td>chop · bull-div hid</td></tr>
                <tr><td>30m</td><td className="num">64,928</td><td className="num">40.9</td><td className="neut">death (water-up) 12b</td><td className="neut">in cloud 3b</td><td>Buy 6</td><td>caution · bull-div hid</td></tr>
                <tr><td>1h</td><td className="num">64,928</td><td className="num">48.3</td><td className="bear">death (water-up) 6b</td><td className="bull">above 40b</td><td>Buy 7</td><td>caution · top-div · bot-div</td></tr>
                <tr><td>4h</td><td className="num">64,928</td><td className="num bull">59.4</td><td className="bear">death (water-up) 刚印 (just printed, 1b)</td><td className="bull">above 21b</td><td>Buy 2</td><td>caution · top-div</td></tr>
                <tr><td>8h</td><td className="num">64,928</td><td className="num bull">58.8</td><td className="bull">golden (water-dn) 17b</td><td className="bull">above 5b</td><td>Sell 6</td><td>chop · bot-div</td></tr>
                <tr><td>12h</td><td className="num">64,928</td><td className="num bull">56.8</td><td className="bull">golden (water-dn) 9b</td><td className="bull">above 4b</td><td>Buy 1</td><td>caution · bot-div (TD9 SELL cleared)</td></tr>
                <tr><td>1d</td><td className="num">64,928</td><td className="num">54.6</td><td className="bull">golden (water-up) 2b</td><td className="neut">in cloud 62.4–67.9k 20b</td><td>Sell 6</td><td>lean-short · top-div (strong golden)</td></tr>
                <tr><td>3d</td><td className="num">64,928</td><td className="num">47.3</td><td className="neut">— (DIF water-dn)</td><td className="bear">below 23b · ↑76.2k</td><td>Sell 3</td><td>lean-short · trend</td></tr>
                <tr><td>1w</td><td className="num">64,928</td><td className="num">41.0</td><td className="bull">golden (water-dn) 2b</td><td className="bear">below 27b · ↑85.9k</td><td>Sell 1</td><td>caution · bull-div · SMA200 +1.83%</td></tr>
                <tr><td>1M</td><td className="num">64,928</td><td className="num">44.4</td><td className="neut">—</td><td className="bull">above 30b</td><td>⚡ TD9 BUY</td><td>lean-long · trend</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 08:01 BJ (00:01Z) scan (rolling latest
                    file; archived verbatim at
                    /opt/desk-note/snapshots/2026-08-09-0007/). Header alerts:{' '}
                    <em>1d water-up strong golden cross (2b, DIF +69.2), 1w water-down golden
                    cross (2b, DIF −5388.6), 4h water-up death cross (just printed, DIF
                    +268.2); 1M ⚡TD9 BUY</em>; golden cluster 8h/12h/1d/1w. Top-div 3:
                    1h/4h/1d · bottom-div 4: 1h/8h/12h/1w. Regime 5/9 cycle-reversal
                    (JT&lt;0); overall HTF lean-short, short-term bounce. Scan spot $64,928,
                    24h +0.08%, H/L $65,163 / $64,784, qVol $1.71B, net tally 3 long / 2
                    short / 5 neutral. Closes are in-progress bars; treat every value as
                    provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix reads a reclaim that held its cap-flip but did not advance. Spot
              $64,964 sits above four daily offsets (unchanged from 08-08):{' '}
              <span className="dn-tag bull">D-SMA50 $63,346.63 (+2.55%)</span>,{' '}
              <span className="dn-tag bull">D-EMA20 $64,272.82 (+1.08%)</span>,{' '}
              <span className="dn-tag bull">D-SMA20 $64,414.50 (+0.85%)</span>, and the
              load-bearing{' '}
              <span className="dn-tag bull">D-EMA50 cap $64,655.13 (+0.48%)</span> — the cap
              held as support a second day — with the in-progress{' '}
              <span className="dn-tag bull">W-SMA200 $63,761.02 (+1.89%)</span> and the
              settled 200W cycle floor{' '}
              <span className="dn-tag bull">$63,533.52 (+2.25%)</span> below. Immediately
              overhead the gap is the same wall that has capped the run:{' '}
              <span className="dn-tag bear">D-EMA100 $66,879.62 (−2.86%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $67,887.61 (−4.31%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $68,575.41 (−5.27%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $68,990.63 (−5.84%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,231.73 (−6.16%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,365.18 (−6.34%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $69,563.36 (−6.61%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $70,138.17 (−7.38%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $72,274.15 (−10.11%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $73,980.95 (−12.19%)</span>.
              Far above and disused: W-SMA150 $76,881.89 (−15.50%), W-EMA50 $77,817.51
              (−16.52%), W-EMA100 $78,777.74 (−17.54%), W-SMA50 $83,359.75 (−22.07%),
              W-SMA100 $88,662.48 (−26.73%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-08-09 00:05Z (close $64,930.40);
                offsets recomputed against live spot $64,964.00. Displayed MA levels are
                $-rounded; offsets computed from exact series values. The weekly ladder is
                computed off the full 2019–2026 wildcard (362 right-labeled weekly bars), so
                W-SMA200 IS computable: $63,761.02 in-progress (+1.89%) and $63,533.52
                settled — the settled value being the trap-watch weekly-close 200-SMA (the
                cycle floor used for closes throughout). W-EMA200 $68,575.41 (−5.27%) and
                W-EMA150 $73,980.95 (−12.19%) are full-history EMAs. Daily closes: 08-05
                $64,633.90, 08-06 $64,300.00, 08-07 $64,885.40, 08-08 $64,928.50 — the 08-08
                close is $43 above the 08-07 close and $273 above the D-EMA50 cap $64,655.13:
                the cap, decisively re-cleared same-day on 08-07 and support-flipped, held a
                second close but the up-day was nearly flat. The 08-09 bar is in progress at
                $64,930.40; the current week&rsquo;s 200W-floor close forms tonight at that
                level, +$1,397 clear of the settled floor — a 6th above-floor weekly close.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book held its deep positive gamma · headline +100.5M / rollup +113.82M (was +100.3M / +113.76M) · flip dropped to $63,676, spot +2.02% above · the +$65k–$68k band totals +90.19M with the $68k wall (+21.06M) now leading the $65k wall (+20.46M) at spot — a heavy two-sided clamp, crash-put $60k eased to −15.87M, no negative-gamma chunk anywhere on the strip</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book held its deep positive gamma into the stall — headline
                +6.3M → +38.1M → +68.6M → +106.0M → +108.0M → +78.7M → +100.3M → +100.5M
                across 08-02 → 08-09 — a two-sided dampener parked right over spot
              </span>. Headline GEX is{' '}
              <span className="dn-tag bull">+100.5M / 1%</span> (was +100.3M on 08-08 —
              essentially flat) and the by-expiry rollup is{' '}
              <span className="dn-tag bull">+113.82M</span> (was +113.76M; the strip sums to
              the gex_summary net_gex). The 0-γ flip dropped{' '}
              <span className="dn-tag">$63,833 → $63,676 (−$157)</span>, and spot $64,964
              sits <span className="dn-tag bull">+2.02% above flip</span> on spot-denominated
              math (64,964 / 63,676 − 1 = +2.023%); the GEX file&rsquo;s Deribit index
              $65,269 ($305 above live spot) reads{' '}
              <span className="dn-tag bull">+2.50%</span> (65,269 / 63,676 − 1 = +2.502%, file
              rounds +2.5%) — both references positive, spot well above the flip on both. The
              wall map is a heavy positive band right over spot with the crash-put shelf
              below, the internal order slightly reshuffled:{' '}
              <span className="dn-tag bull">$68k +21.06M</span> (now the heaviest wall, up
              from +20.61M),{' '}
              <span className="dn-tag bull">$70k +20.54M</span>,{' '}
              <span className="dn-tag bull">$65k +20.46M</span> (at spot, eased from +23.49M
              — the $65k wall ceded the lead to $68k),{' '}
              <span className="dn-tag bull">$66k +18.64M</span>,{' '}
              <span className="dn-tag bull">$67k +17.33M</span>,{' '}
              <span className="dn-tag bull">$65.5k +12.70M</span>,{' '}
              <span className="dn-tag bull">$72k +10.25M</span>,{' '}
              <span className="dn-tag bull">$80k +8.82M</span>, with the negatives the
              crash-put shelf below:{' '}
              <span className="dn-tag bear">$60k −15.87M</span> (heaviest negative, the
              crash-put, eased from −16.15M) and{' '}
              <span className="dn-tag bear">$62k −7.47M</span> (eased from −7.68M).{' '}
              <span className="dn-em">
                The five large strikes across the +$65k–$68k positive band total +90.19M
                (+20.46M / +12.70M / +18.64M / +17.33M / +21.06M stacked) — a touch lighter
                than 08-08&rsquo;s +92.56M, with the $68k wall taking the lead from $65k as
                the dominant single strike. Dealers are still bid into a fade and offer into
                a squeeze across the reclaim zone — the same clamp that absorbed today&rsquo;s
                heavy spot bid without letting price advance. The dampener cuts both ways: a
                cushion under a fade, but heavy ceiling pressure on the grind, which is why
                the spot demand stalled at the cap rather than pushing to the cluster
              </span>. Near-dated: 9AUG26 0.3DTE{' '}
              <span className="dn-tag bull">+22.09M</span> is on the book (settles 08:00Z
              today, ~8h after this snap) — a positive front, no near-dated negative
              amplifier. Forward strip: 10AUG 1.3 +8.92M, 11AUG 2.3 +2.41M, 12AUG 3.3
              +0.78M, 14AUG 5.3 +17.21M, 21AUG 12.3 +15.86M, 28AUG 19.3 +24.33M, 25SEP 47.3
              +13.30M, 30OCT 82.3 +1.46M, 25DEC 138.3 +5.29M, 26MAR27 229.3 +1.44M, 25JUN27
              320.3 +0.73M — the entire forward strip is positive; there is no negative-gamma
              chunk to flip the book bear.
            </p>

            <p>
              IV median across the chain is{' '}
              <span className="dn-tag">40.3%</span> against 30D close-to-close RV of{' '}
              <span className="dn-tag">27.74%</span> — chain-level richness{' '}
              <span className="dn-tag">~+12.6pt</span>.{' '}
              <span className="dn-em">
                A chain-median across instruments, not a tradable spread; the instrument
                count on the chain is 828, but expiry-/strike-level vega, skew and term
                structure remain not loaded, so the vol read stays framework-only.
              </span>{' '}
              Put/Call OI ratio 0.58 (call OI 205,377 vs put OI 118,508 — a call-heavy book,
              consistent with the positive-gamma dampener). RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log returns (= 31
              consecutive daily closes) anchored to parquet last bar 2026-08-09 00:05Z; range
              $62,307 – $66,522 over the underlying 31-close window. (For reference, last 29
              returns / 30 closes reads 28.15%, marginally higher than the 30-return 27.74% —
              RV is essentially flat as the tape stalls under the cluster.)
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · WEEKEND carry (Sat 08-08 render, cash/rates markets closed) — Tier-1 LEVELS unchanged vs the 08-08 NOTE: 10Y 4.69%, TIPS 2.43%, HY OAS 2.71%, USD/JPY 157.74 flat note-to-note (the source dashboard Δ column still prints 10Y +6.0bp / TIPS +2.0bp / USD-JPY −0.66 / US-JP +6.0bp on its own base) · rates filter FALSE at 14bp (unchanged) · DXY −0.37 to 99.60 and Fed net liq +0.014T carried from the source Δ column · MOVE dark a 5th render · cross-asset IDIOSYNCRATIC (|r| 0.205), BTC +3.38% 7d, NQ lag narrowed to −2.24pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro is a weekend carry — the dashboard render is Saturday 08-08 22:16Z,
                cash and rates markets closed, so Tier-1 is essentially the 08-08 print held
                flat
              </span>. Delta basis, disclosed up front: rate/FX LEVELS are compared
              note-to-note (vs the 08-08 desk note) and read flat with cash markets closed,
              while the pinned source dashboard&rsquo;s own Δ column still prints small deltas
              on its own base — both are shown so the denominator is never ambiguous. US 10Y
              nominal{' '}
              <span className="dn-tag bear">4.69% (level flat vs 08-08 note; source Δ +6.0bp)</span>,
              regime z{' '}
              <span className="dn-tag bear">+2.24</span> — EXTREME RISK-OFF tag, flat over the
              weekend. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.43% (level flat vs 08-08 note; source Δ +2.0bp)</span>,
              regime z{' '}
              <span className="dn-tag bear">+2.53</span> — still EXTREME RISK-OFF. 5Y5Y BE
              inflation{' '}
              <span className="dn-tag">2.28% (source Δ −1.0bp)</span>. HY OAS{' '}
              <span className="dn-tag bull">2.71% (source Δ −4.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.03</span> — still loose (risk-on). MOVE bond
              vol{' '}
              <span className="dn-tag stale">unavailable (fetch failed)</span> — dark a fifth
              render. DXY{' '}
              <span className="dn-tag bull">99.60 (source Δ −0.37)</span> — softened, the one
              Tier-1 LEVEL that moved note-to-note. Fed net liquidity{' '}
              <span className="dn-tag">$5.840T (source Δ +0.014T)</span>, a small fresh weekly nudge.
              US-JP 10Y spread{' '}
              <span className="dn-tag bear">2.02% (level flat vs 08-08 note; source Δ +6.0bp)</span>;
              USD/JPY{' '}
              <span className="dn-tag">157.74 (level flat vs 08-08 note; source Δ −0.66)</span>.
              NFCI −0.529 (loose, stale).{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) stays FALSE at 4.69% and
                14bp from the gate (unchanged over the weekend). 10Y and TIPS carry EXTREME
                RISK-OFF regime z (+2.24 / +2.53); the credit side stays loose (HY OAS 2.71%,
                risk-on) but the rates side has not moved back toward the gate. MOVE is dark a
                fifth render, so bond-vol confirmation is unavailable. The macro remains a
                headwind, not a tailwind, for the reclaim — the scout stands on its
                BTC-internal legs, and the next real macro read is Monday&rsquo;s cash-market
                reopen.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>Macro indicator</th>
                  <th>level</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>read</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.69%</td><td className="num">flat/08-08 note · src +6.0bp</td><td className="num bear">+2.24</td><td className="bear">EXTREME risk-off · weekend carry</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.43%</td><td className="num">flat/08-08 note · src +2.0bp</td><td className="num bear">+2.53</td><td className="bear">EXTREME risk-off · weekend carry</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.28%</td><td className="num bull">src −1.0bp</td><td className="num">+0.86</td><td className="neut">easing</td></tr>
                <tr><td>HY OAS</td><td className="num">2.71%</td><td className="num bull">src −4.0bp</td><td className="num bull">−1.03</td><td className="bull">loose · risk-on</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.529</td><td className="num">+0.00</td><td className="num bull">−0.65</td><td className="stale">loose · stale 8d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">unavailable · fetch failed (5th render)</td></tr>
                <tr><td>DXY</td><td className="num">99.60</td><td className="num bull">src −0.37</td><td className="num">+0.57</td><td className="bull">softened</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.840T</td><td className="num">src +0.014T</td><td className="num bear">−0.70</td><td className="neut">small fresh weekly nudge</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.74</td><td className="num">flat/08-08 note · src −0.66</td><td className="num">+0.34</td><td className="neut">weekend carry</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.02%</td><td className="num">flat/08-08 note · src +6.0bp</td><td className="num">−0.25</td><td className="neut">weekend carry</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7372</td><td className="num bull">−0.01</td><td className="num bull">−1.48</td><td className="bull">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly, 68d)</td><td className="num bear">+2.42</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.205</span>{' '}
              (below the 0.25 NORMAL floor, essentially flat vs 08-07&rsquo;s 0.204 —{' '}
              <span className="dn-tag">IDIOSYNCRATIC regime</span>, assets moving on their own
              drivers). BTC&rsquo;s ties to the risk complex: TSLA{' '}
              <span className="dn-tag">+0.467</span> (top), NQ{' '}
              <span className="dn-tag">+0.461</span>, SP500{' '}
              <span className="dn-tag">+0.362</span>, NVDA{' '}
              <span className="dn-tag">+0.326</span>, JP225 +0.292, COPPER +0.275, GOLD
              +0.249, SILVER +0.234, PLAT +0.223, AMZN +0.213, URNM +0.182. 7d performance,
              BTC held its green and the tape stayed strong:{' '}
              <span className="dn-tag bull">BTC +3.38%</span> (up from +3.12% on 08-08), NQ{' '}
              <span className="dn-tag bull">+5.62%</span>, SP500{' '}
              <span className="dn-tag bull">+4.01%</span>, JP225{' '}
              <span className="dn-tag bull">+4.85%</span>, and the mega-caps and metals led —
              URNM{' '}
              <span className="dn-tag bull">+14.93%</span>, NVDA{' '}
              <span className="dn-tag bull">+12.90%</span>, SILVER{' '}
              <span className="dn-tag bull">+10.33%</span>, MSFT{' '}
              <span className="dn-tag bull">+8.44%</span>, PALL{' '}
              <span className="dn-tag bull">+7.63%</span>, TSLA{' '}
              <span className="dn-tag bull">+7.46%</span>, PLAT{' '}
              <span className="dn-tag bull">+7.41%</span>, META{' '}
              <span className="dn-tag bull">+7.31%</span>, GOLD{' '}
              <span className="dn-tag bull">+7.22%</span>. Energy soft: CL{' '}
              <span className="dn-tag bear">−10.40%</span>, BRENT{' '}
              <span className="dn-tag bear">−8.08%</span>, NGAS{' '}
              <span className="dn-tag bear">−3.03%</span>; JPY +0.02% flat.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine narrowed to ~−2.24pt (BTC +3.38% vs
                NQ +5.62%, from −2.47pt on 08-08) — BTC held its green and inched its gap
                closed, still lagging a strong week rather than diverging from it. The regime
                is IDIOSYNCRATIC (|r| 0.205), so the tape is not driving BTC either way; the
                reclaim is BTC-internal, and the scout stands on its (now flat-to-long)
                positioning legs, not a macro tailwind
              </span>. JGB monthly 2.67% is stale — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · book CARRIES the 0.4R scout as-is — no fresh add · the extension met on price (2nd close above the cap) but failed on quality (OI decelerated, carry re-heated, spot bid absorbed, tape flat) · chase-short STOOD DOWN · the reclaim stalled at the cap inside the positive-gamma band</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 08-08 note added the scout to a framework-permitted 0.4R on a
                demand-confirmed cap re-clear and named the extension trigger. The price leg
                fired; the quality legs did not — so the book carries, it does not add
              </span>. The extension trigger was &ldquo;a second decisive 1d close above the
              D-EMA50 cap with OI continuing to build and funding not running to the
              cap.&rdquo; The 08-08 daily closed{' '}
              <span className="dn-tag bull">$64,928.50</span> — $273 above the cap, the second
              close above it — so the price leg fired. But{' '}
              <span className="dn-em">the quality legs came in weak: OI decelerated to +248
              from +1,230 (and the 4h/1h ticked off), funding re-heated a further +0.49pt to
              a 24h mean +5.92%, retail re-crowded +0.96pt, and the tape went flat (+0.07%) as
              a heavy 24h spot bid (+11,152 CVD) was absorbed at the cap with no price
              gain</span>. The one additive shift is SM: net flipped to a certifiable near-flat{' '}
              <span className="dn-tag bull">+155</span> (deep short gone), and the 200W floor
              holds a 6th weekly close. So the book{' '}
              <span className="dn-em">carries the 0.4R scout at its framework-permitted size —
              no fresh add</span>; the demand is too weak to press further into the +90M
              positive-gamma clamp. The chase-short stays STOOD DOWN — the floor holds, gamma
              held +100.5M, spot is +2.02% above the flip, and SM is flat-not-short. The
              stall keeps the book measured: carry, take-half discipline intact, cut on the
              first certified stop.
            </p>

            <div className="dn-trade">
              <span className="dn-side bull">scout · LONG · CARRY 0.4R as-is (framework-permitted, minimum size) · no fresh add — extension met on price, failed on quality · take-half at D-EMA100 stands</span>
              <div className="dn-trade-name">
                Cover-bounce scout — carried, not added: the reclaim held the cap a second close but stalled, with demand decelerating and the carry re-heating into a heavy positive-gamma clamp
              </div>
              <div className="dn-thesis">
                The 08-06 note armed this starter, the 08-07 note held it on a hair-trigger,
                and the 08-08 note added it to a framework-permitted 0.4R on the
                demand-confirmed cap re-clear. This run the reclaim held — the 08-08 daily
                closed $64,928 ($273 above the $64,655 D-EMA50 cap, the second close above it)
                and SM flipped to a certifiable near-flat +155 (deep short gone) — but it did
                not extend: OI decelerated to +248 from +1,230, the tape went flat (+0.07%) as
                a heavy spot bid (+11,152 CVD) was absorbed at the cap, funding re-heated a
                third effective day (24h mean +5.92%), retail re-crowded +0.96pt, and the perp
                discount widened to −$42. The dealer book held +100.5M / +113.82M positive
                gamma (flip $63,676, spot +2.02% above), and the MTF slow book still leans up
                (1d strong golden 2b, 8h/12h/1w golden, the 12h TD9 SELL flag cleared) while
                the fast frames rolled over (fresh 4h death cross, 1h death 6b, RSIs cooled).
                Carry the 0.4R scout at minimum size — no fresh add — take half at the
                D-EMA100 $66,880 if the demand re-accelerates, and cut the whole on the first
                certified stop.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">position (carried, no add)</span><span className="dn-lvl-v bull">framework-permitted 0.4R total — 0.2R starter from ~$64,620 (08-06 arming) + 0.2R add-leg at ~$64,900 (08-08 cap re-clear); blended entry ~$64,760, held at minimum size; NO fresh add this run</span></div>
                <div><span className="dn-lvl-k">extension trigger (price-only fill)</span><span className="dn-lvl-v">2nd 1d close above the D-EMA50 cap FIRED ($64,928 &gt; $64,655) but the quality legs failed — OI decelerated (+248 vs +1,230), funding re-heated (24h mean +5.92%), tape flat (+0.07%) — so no add; needs demand re-acceleration off the cap to press</span></div>
                <div><span className="dn-lvl-k">stop (hair-trigger)</span><span className="dn-lvl-v bear">1d close &lt; $63,676 flip (working, dropped from $63,833) or &lt; $63,533 200W floor (hard) — OR a CERTIFIED SM roll-back-short (clean feed, ex-artifact turns net-seller)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$66,880 (D-EMA100) then $67,888 (D-SMA100) — through the +$65k–$68k / +90.19M positive-gamma band; treat as a grind, expect the cap zone defended two-sided (today it absorbed a heavy spot bid without advancing)</span></div>
                <div><span className="dn-lvl-k">R/R (carried, off blended ~$64,760)</span><span className="dn-lvl-v">stop $63,676 = ~$1,084 risk; first target $66,880 = ~$2,120 ≈ 1.96:1; second target $67,888 = ~$3,128 ≈ 2.89:1 — take half at the D-EMA100</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> the extension is met on price but failed on quality, so the
                book carries — it does not add. The demand decelerated, the carry re-heated,
                and a heavy spot bid was absorbed at the cap into a heavier positive-gamma
                dampener. Take half at the D-EMA100 $66,880 if the demand re-accelerates; do
                NOT chase into the cluster. Cut the whole position on the first certified stop
                — a 1d close below the $63,676 flip / $63,533 floor, or a certified SM
                roll-back-short. A failed test of the cap (a 1d close back under $64,655 with
                OI rolling back over) trims the add back to the 0.2R starter.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">flat · chase-short · STOOD DOWN · floor held, gamma held +100.5M, spot +2.02% above flip, SM flat-not-short</span>
              <div className="dn-trade-name">
                Chase-short — stood down: the reclaim held the cap, the book held its deep positive gamma, and SM flipped flat-to-long — every leg still points the wrong way
              </div>
              <div className="dn-thesis">
                The chase-short is gated on a flip/old-floor break ($63,676 flip / $63,311 old
                floor) with SM short AND aggregate GEX flipping negative. All three point the
                wrong way: spot is +2.02% above the flip (the tape held the cap, not broke the
                flip), the dealer book held +100.5M headline / +113.82M rollup — a positive
                dampener with no negative-gamma chunk anywhere on the forward strip out to
                25JUN27 — and SM flipped to a certifiable flat-to-long (net +155), not a
                re-short. With no leg armed, the short stands down; the crash-put shelf at
                $60k has eased to −15.87M (from −16.15M), leaving marginally less cascade
                target.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm trigger</span><span className="dn-lvl-v bear">1d close &lt; $63,676 flip / $63,311 old floor AND aggregate GEX flipping negative (a fresh negative-gamma chunk inside the front expiries) AND a CERTIFIED SM short (clean feed)</span></div>
                <div><span className="dn-lvl-k">SM leg (points wrong way)</span><span className="dn-lvl-v bull">SM flipped to a certifiable near-flat +155 (deep short gone), so the SM-short leg is not armed — it would need a fresh certified roll-back-short</span></div>
                <div><span className="dn-lvl-k">targets on re-arm</span><span className="dn-lvl-v">$60k (−15.87M crash-put shelf), with $62k (−7.47M) between — both eased vs 08-08</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no short into a +100.5M positive-gamma book with the 200W floor holding a 6th weekly close, price +2.02% above the flip, and SM flat-to-long</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the entire forward GEX strip is positive (no negative-gamma
                chunk out to 25JUN27); a gamma flip would require a fresh negative chunk to
                build, not just spot drifting down. The book held its heavy positive gamma
                (+100.3M → +100.5M), which thickens the dampener both ways — a fade would meet
                the same cushion that absorbed today&rsquo;s spot bid. Until a negative chunk
                actually prints and a certified SM re-short appears, the short has no leg.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · the reclaim STALLED at the cap — held a second close but the demand pulse faded · watch for a re-acceleration or a failed test</span>
              <div className="dn-trade-name">
                Reclaim watch — STALLED: the cap held a second close ($64,928) but the tape went flat as a heavy spot bid was absorbed at the cap on decelerating OI
              </div>
              <div className="dn-thesis">
                The 08-08 note framed the resumed reclaim as an add and named the extension:
                a second decisive close above the cap with OI continuing to build and funding
                not running to the cap. The price leg fired — 08-08 closed $64,928, $273 above
                the cap — but the reclaim stalled: OI decelerated to +248 from +1,230, the
                tape went flat (+0.07%) as a heavy 24h spot bid (+11,152 CVD) was absorbed at
                the cap by perp supply (the discount widened to −$42) and the +90M
                positive-gamma clamp, funding re-heated a third effective day, and retail
                re-crowded. The SM tell turned additive (flat-to-long, deep short gone) and
                the 200W floor holds a 6th weekly close, but the demand pulse faded at the
                cap. The next watch is whether the demand RE-ACCELERATES off the cap (OI
                rebuilding, the spot bid finally translating to price toward the $67k–$68k
                cluster) or the stall resolves back under the cap on a failed test.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">bull re-acceleration</span><span className="dn-lvl-v bull">a decisive push off the cap toward $66,880 (D-EMA100) with OI rebuilding and the heavy spot bid finally translating to price — carries the scout, take half at the D-EMA100</span></div>
                <div><span className="dn-lvl-k">bear resolution</span><span className="dn-lvl-v bear">1d close &lt; $63,676 flip with a certified SM roll-back-short — cut the scout, watch the chase-short re-arm if gamma also flips negative</span></div>
                <div><span className="dn-lvl-k">failed test of the cap</span><span className="dn-lvl-v bear">a 1d close back under the $64,655 cap with OI rolling back over — trim the add back to the 0.2R starter; the reclaim stalled and gave the cap back</span></div>
                <div><span className="dn-lvl-k">slow-frame tell</span><span className="dn-lvl-v bull">1d water-up strong golden cross (2b) + 8h/12h/1w golden + HTF bottom-div (8h/12h/1w) + the 12h TD9 SELL flag cleared — the slow book still leans up, backing the carry</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a reclaim that holds its cap but stalls on
                decelerating demand is a carry, not an add — the price leg fired while the
                quality legs (OI, carry, price follow-through) did not, and a heavy spot bid
                was absorbed at the cap into a heavier positive-gamma dampener. Carry at
                minimum size, take half at the first target only on a re-acceleration, and
                resolve on data: a decisive push off the cap on rebuilding OI extends; a
                failed test or a certified SM roll-back-short trims or cuts.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the extension fired on price (2nd close above the cap) but failed on quality (OI decelerated, carry re-heated, spot bid absorbed, tape flat), so the book CARRIES the 0.4R scout — no fresh add · SM flipped flat-to-long (deep short gone), the 200W floor holds a 6th weekly close · the note turns on whether demand re-accelerates off the cap or the stall resolves back under it</span>
            </h2>

            <p>
              Of the 08-08 decision conditions: the scout-EXTENSION path FIRED ON PRICE — the
              08-08 daily closed $64,928, the second close above the $64,655 cap — but FAILED
              ON QUALITY (OI decelerated to +248, funding re-heated to a 24h mean +5.92%, the
              tape went flat as a heavy spot bid was absorbed at the cap), so the book carries
              rather than adds; the scout-CUT path DID NOT FIRE — spot held well above the
              flip and floor and SM certified flat-to-long, not a re-short; the failed-second-test
              path DID NOT FIRE — the cap held as support a second close; the chase-short
              re-arm DID NOT FIRE — spot sits +2.02% above the $63,676 flip and gamma held
              +100.5M; the SM feed crossed the recurring BJ ~14:00–15:00 artifact again but
              the current book is certifiable (+155). <em>The reclaim held its cap but
              stalled; the book carries the scout at framework size and the resolution turns
              to whether demand re-accelerates or the stall resolves down.</em>{' '}
              The conditions today re-set around a carried 0.4R scout on a now-flat-to-long SM
              tell, a stalling reclaim, and a held positive-gamma book:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Cover-bounce scout (long) — CARRIED, re-acceleration trigger</td><td className="bull">a decisive push off the D-EMA50 cap $64,655 toward $66,880 with OI rebuilding and the heavy spot bid translating to price</td><td>carry the scout at its framework-permitted 0.4R (minimum size); take half at $66,880 (D-EMA100) then $67,888 (D-SMA100) on a re-acceleration — no fresh add on the stall</td></tr>
                <tr><td>Scout stop / cut (hair-trigger)</td><td className="bear">1d close &lt; $63,676 flip (working) or &lt; $63,533 200W floor (hard) — OR a CERTIFIED SM roll-back-short once confirmed on a clean feed</td><td>cut the whole scout position on the first certified stop</td></tr>
                <tr><td>Failed test of the cap</td><td className="bear">1d close back under $64,655 (D-EMA50) with OI rolling back over</td><td>trim the add back to the 0.2R starter — the reclaim stalled and gave the cap back</td></tr>
                <tr><td>Chase-short (short) — re-arm</td><td className="bear">1d close &lt; $63,676 flip / $63,311 old floor AND aggregate GEX flipping negative AND a certified SM short</td><td>reassess chase-short only after a fresh audited trigger — no standing size; framework target $60k (−15.87M crash-put)</td></tr>
                <tr><td>200W cycle floor (6th close forming)</td><td className="bull">current week (08-03→08-09) closes tonight 00:00Z 08-10 at ~$64,930 vs $63,533.52 floor — a 6th above-floor weekly close, +$1,397 clear</td><td>cycle support intact and extending; a weekly close &lt; $63,533.52 would end the streak — separate reassessment, but far from spot</td></tr>
                <tr><td>SM feed artifact (recurred, current state clean)</td><td className="bull">the short→long transition crosses the 08-08 15:11/15:16 BJ artifact+re-sync; current book +155 held ~17h clean</td><td>read the certifiable current state (+155, flat-to-long); re-flag only if a fresh single-minute step appears — do not certify the transition itself</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">10Y &lt; 4.55% close — FALSE at 4.69% (14bp to fire, unchanged over the weekend)</td><td>standalone filter FALSE; the macro is a headwind, the reclaim is BTC-internal; next real read is Monday&rsquo;s cash reopen</td></tr>
                <tr><td>BTC-vs-TradFi lag</td><td className="bull">BTC +3.38% vs NQ +5.62% 7d = −2.24pt lag · |r| 0.205 IDIOSYNCRATIC</td><td>BTC held its green and inched the gap closed; regime below NORMAL so the tape is not driving BTC — the reclaim is BTC-internal</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the demand re-accelerates — a decisive push off the D-EMA50 cap
                $64,655 with OI rebuilding and the heavy spot bid finally translating to price
                toward the $67k–$68k cluster — or whether the stall resolves down: the
                absorbed spot bid, widening perp discount, re-heated carry, and fast-frame
                rollover (fresh 4h death cross, 1h death 6b) pull spot back under the cap on a
                failed test (trim the add back to the starter), or a clean stop prints (a 1d
                close below the $63,676 flip / $63,533 floor, or a certified SM roll-back-short
                — cut the whole position, and if gamma also flips negative watch the
                chase-short re-arm toward the $60k −15.87M crash-put, though the +113.82M
                positive strip and the 200W floor leave a dampened path)
              </span>. Until one of those prints, this note runs as written: the held scout is
              carried at its framework-permitted 0.4R — the reclaim held the cap a second
              close, SM flipped flat-to-long, and the 200W floor holds a 6th weekly close, but
              the extension met on price and failed on quality (OI decelerated, the carry
              re-heated, a heavy spot bid was absorbed at the cap, the tape went flat), so the
              book carries rather than adds. The right read for the next 24h is{' '}
              <em>carry the scout at framework size, no fresh add into the stall, take half at
              the D-EMA100 only on a re-acceleration, and cut the whole on the first certified
              stop — the reclaim stalled at the cap, and it must re-accelerate to press</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit
            </span>
            <b>Status:</b> v2 — post codex hostile audit. STAGE B verdict:
            PASS-WITH-NOTES (no CRITICAL publish gate; 2 MAJOR + 2 MINOR to address before
            promotion). Reference: audits/2026-08-09-desk-note.md. STAGE C applied every
            finding in place, then ran the mandatory grep-closure loop (key wrong-claim
            pattern → hits before → hits after) on the full EN file; all four resolved to
            zero stale hits before promotion. <b>DN-001 (MAJOR — SM &ldquo;first non-negative
            of the lineage&rdquo; overbroad/self-refuted):</b> patterns searched{' '}
            <code>first NON-NEGATIVE SM net of the lineage</code>,{' '}
            <code>first non-negative read of the lineage</code>,{' '}
            <code>first non-negative of the lineage</code>,{' '}
            <code>marginally LONG for the first time … of the lineage</code> — hits before 4,
            hits after 0 — RESOLVED. Every claim narrowed to the DAILY-ANCHOR basis (SM
            crossed non-negative intraday on 08-08 via the +626 / +1,235 artifact peak / +740
            clean high; +155 is the first non-negative 00:05Z daily anchor of the lineage).{' '}
            <b>DN-002 (MAJOR — false 200W trap-watch recompute timestamp):</b> patterns
            searched <code>recomputed 2026-08-08 23:11Z</code>, <code>23:11Z</code>,{' '}
            <code>hours-stale is fine</code> — hits before 2, hits after 0 — RESOLVED. Manifest
            now discloses the JSON&rsquo;s own <code>recomputed_at 2026-08-03 00:11:39Z</code>{' '}
            (6-day-stale weekly state; file mtime 2026-08-09 00:11Z is a touch, not a recompute,
            and the JSON is not in the pinned snapshot); the forming 6th above-floor weekly
            close is attributed to the PARQUET recompute (last bar 00:05Z), not a fresh
            trap-watch run. <b>DN-003 (MINOR — mixed macro delta basis):</b> patterns searched{' '}
            <code>flat (wknd)</code>, <code>(unchanged)</code>, <code>the only movers</code>,{' '}
            <code>one Tier-1 mover</code> — the 4 level-delta cells (10Y / TIPS / USD-JPY /
            US-JP spread) now carry an explicit dual basis (level flat vs the 08-08 NOTE; source
            dashboard Δ +6.0bp / +2.0bp / −0.66 / +6.0bp on its own base), and every table Δ
            cell is prefixed <code>flat/08-08 note</code> or <code>src</code> — the one residual{' '}
            <code>(unchanged)</code> is the 14bp rates-filter gap (a legitimate note-to-note read,
            not a macro level delta) — RESOLVED. <b>DN-004 (MINOR — clean post-re-sync SM high
            off ~5 BTC):</b> pattern searched <code>+735 @ 08-08 08:16Z</code> — hits before 1,
            hits after 0 — RESOLVED; corrected to <code>+740 @ 08-08 08:16Z</code> (live tape
            +739.9256 rounds to +740). Formula discipline per runbook §2: funding annualized ×
            1095 (live +4.77% from field 0.004357/8h; 24h mean +5.92%; 0 / 1441 negative rows);
            live-tape <code> t</code> read as BJ-local (UTC+8), all BJ timestamps converted to
            UTC in the prose; MA matrix carries the full Daily AND Weekly × SMA AND EMA ladder
            (n ∈ 20, 50, 100, 150, 200) with offsets vs live spot $64,964.00 off parquet last
            bar 2026-08-09 00:05Z (close $64,930.40); GEX flip dual-referenced (spot +2.02% /
            Deribit idx +2.50%, both positive); SM transition reads the certifiable current
            state (+155) because the raw same-clock ΔNet +1,667 crosses the recurring 08-08
            15:11/15:16 BJ feed artifact+re-sync; NTT / max-pain / strike-level IV / BTC-NQ
            ratio held framework-only (not loaded). Snapshot pinned to the archive
            /opt/desk-note/snapshots/2026-08-09-0007/ for the rolling sources. <b>Build note
            (INFO):</b> this server runs Node 18.19.1; Next 16.2.6 hard-exits on Node &lt;
            20.9.0, so a full <code>next build</code> is environment-blocked;{' '}
            <code>npx --no-install tsc --noEmit</code> is the build proxy.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-08-09 00:05Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-08-08 22:16Z (~1.8h before
            snapshot) and is a weekend carry with cash/rates markets closed, and some
            inputs are explicitly stale, dark, or pending and flagged as such. Levels,
            sizes, and conditions are illustrative of the desk&rsquo;s process, not standing
            recommendations. Past correlation, gamma, and positioning patterns do not bind
            future tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The reclaim held the cap a second close but stalled — SM flipped flat-to-long
                and the 200W floor holds a 6th weekly close, but the demand decelerated, the
                carry re-heated, and a heavy spot bid was absorbed at the cap. So the book
                carries the framework scout, no fresh add into the stall. Take half at the
                D-EMA100 only on a re-acceleration, cut on the first certified stop.
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
            v2 · 2026-08-09 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
