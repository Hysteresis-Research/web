import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-07 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-07',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-07' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260807() {
  await requireViewer('/desk/2026-08-07');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-07 · v2</span>
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
              <span className="dn-big">$64,360</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.41%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-07 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-07 00:05Z (row t=&ldquo;08-07 08:05&rdquo; BJ, the 00:05Z daily anchor)</td>
                  <td className="dn-flag">
                    fresh · 1-min · pinned to the 00:05Z anchor row for
                    reproducibility (file tail had already advanced to 00:06Z at
                    read time) · live-tape <code> t</code> is BJ-local (UTC+8): the
                    00:05Z pin = t &ldquo;08-07 08:05&rdquo;, all downstream BJ
                    timestamps converted to UTC in the prose · one bad partial-write
                    line skipped on parse (1 of 111,938) · the 24h / 4h / 1h flow +
                    funding windows run from the 08:04 / 04:04 / 07:04 BJ open (one row
                    longer than the exact same-clock window: 1,442 rows on 24h), a
                    disclosed row-offset carried on every cumulative-delta window; the
                    same-clock point comparisons (SM net vs the 08-06 08:05 baseline)
                    use the exact clock
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-07 08:01 BJ (00:01Z) scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (can advance intrahour) · the
                    archived copy at /opt/desk-note/snapshots/2026-08-07-0005/ is the
                    pinned source · ~4-min stale vs snapshot anchor · in-progress
                    bars · scan spot $64,291, 24h −0.52%
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-07 00:01Z snapshot</td>
                  <td className="dn-flag">
                    ~4-min stale vs anchor · Deribit idx $64,645 vs live $64,360
                    ($285 above live) · 834 instruments · 7AUG26 0.3DTE +22.79M still
                    on the book (settles 08:00Z today, ~8h after this snap) · archived
                    at /opt/desk-note/snapshots/2026-08-07-0005/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-07 00:01Z
                  </td>
                  <td className="dn-flag">~4-min lag · 7d 1h bars · 22 assets · 167 rows · archived in snapshot dir</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-06 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.8h render lag · FRED Tier-1: 10Y 0.0bp at 4.63% (easing
                    paused), TIPS +1bp to 2.41%, HY OAS +2bp to 2.75%, DXY +0.27 to
                    99.96, Fed net liq +0.014T to $5.840T · MOVE fetch-failed (dark,
                    3rd render) · NFCI stale · archived in snapshot dir
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-08-07 00:06Z</td>
                  <td className="dn-flag">
                    close $64,355.20 (in-progress 08-07 bar) · offsets recomputed vs
                    live spot $64,359.99 · weekly ladder off the full 2019–2026
                    wildcard (362 weekly bars) · W-SMA200 $63,758.15 in-progress /
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
                    trap-watch state used as the live substitute · next weekly close
                    2026-08-09
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale · monthly (66d) · do not treat as live</td>
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
              <span className="dn-v">+0.90%</span>
              <span className="dn-src">live · funding field 0.000826/8h × 1095 = +0.90% ann · 24h mean +3.83% (was +3.06% on 08-06 — re-firmed +0.77pt) · 6 / 1442 sampled rows negative (was 58 / 1441 on 08-06 — the negatives thinned back out) · max +8.20% ann @ 08-06 10:21 BJ (02:21Z 08-06), min −0.06% ann @ 08-06 19:08 BJ (11:08Z 08-06)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h mean</span>
              <span className="dn-v bear">+3.06% → +3.83% (re-firmed +0.77pt)</span>
              <span className="dn-src">the 08-06 cool-off partly REVERSED — 58 negative rows thinned to 6, the long carry re-firmed off the flush; not the runaway re-heat of 08-05 (mean well under half the +6.00% cap), but the leverage-off tailwind the scout leaned on has stopped bleeding and turned back up</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−1.28% (−1,369.6 BTC)</span>
              <span className="dn-src">live · a FOURTH straight contraction, and the biggest yet (−628.7 on 08-04, −326.9 on 08-05, −1,112.5 on 08-06, now −1,369.6) · 105,752 BTC now vs 107,122 24h ago · positions kept coming off through the fade back under the cap — four days of a shrinking book, no fresh demand stacking</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">54.84 / 45.16</span>
              <span className="dn-src">live_db `mkt_long_pct` · re-crowded +1.42pt from 53.42 (24h ago) to 54.84 · 24h range 52.56 / 54.96 — retail leaned back onto the long side into the fade, the opposite of the de-crowd the scout wanted alongside</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v stale">−16.44k RAW / ≈ −7.13k ex-artifact (DATA-IMPAIRED)</span>
              <span className="dn-src">live · RAW long 13.88k − short 30.32k = −16.44k, but a single-minute step @ 08-06 11:06 BJ (03:06Z 08-06) — Δlong +456.7, Δshort +9,765.1 — is the recurring BJ re-sync artifact and level-shifts short 21.4k → 31.1k · treating 11:06 as a full feed re-sync (drop both legs) gives ex-artifact long ≈ 13.42k / short ≈ 20.55k → net ≈ −7.13k · net trough (most short) −18,990 @ 08-06 11:06 BJ (the artifact minute); peak (least short) −9,021 @ 08-06 10:15 BJ — the raw re-short is a feed step, not a real roll</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs same-clock 24h base</span>
              <span className="dn-v stale">−9,038 → −16,439 RAW (−7,400) / ex-artifact +1,909 COVER — IMPAIRED</span>
              <span className="dn-src">RAW ΔNet −7,399.6 (Δlong +802.0, Δshort +8,201.6); the +9,765.1 single-minute short step @ 08-06 11:06 BJ = −9,308.4 of ΔNet, ~126% of the raw move · ex-artifact ΔNet +1,908.8 (a COVER) · RAW cut fraction |−7,400|/9,038 = 81.9%; ex-artifact +1,909/9,038 = 21.1% cover · same failure mode as 08-02 / 08-04 — the SM tell CANNOT be certified this run</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.5% / 28.47%</span>
              <span className="dn-src">GEX median IV vs 30D close-to-close RV (30 returns / 31 closes, logret.std × √365 × 100) · chain richness ~+12.0pt · IV median is a chain-median across instruments, NOT a tradable spread · P/C OI 0.53 (call 225,906 / put 119,163) · 31-close range $62,255 – $66,522 · (29 returns reads 28.52%, marginally HIGHER — RV essentially flat under the cap)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+1.88% (above)</span>
              <span className="dn-src">flip $63,174 (dropped −$17 from $63,191 on 08-06) · vs live spot $64,359.99 (+1.88%; 64,359.99/63,174 − 1 = 1.877%) / GEX file Deribit idx $64,645 (+2.33%; 64,645/63,174 − 1 = 2.329%, file rounds +2.3%) — both refs positive · headline GEX +78.7M, by-expiry rollup +88.06M (DOWN from +108.0M / +121.04M on 08-06 — the book lightened but stayed positive)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The armed scout FADED at the cap. The 08-06 daily closed back UNDER
                the D-EMA50 the 08-06 note required it to clear — the kiss-the-cap
                did not hold — while the SM re-short that would have forced a cut is
                the recurring feed artifact again, so the book HOLDS the minimum-size
                starter but does not add
              </span>. Spot is{' '}
              <span className="dn-tag bear">$64,360, −0.41% on 24h</span>; the 08-06
              daily closed <span className="dn-tag bear">$64,300.00</span> — a down
              day of −$334 that landed back{' '}
              <span className="dn-tag bear">below the D-EMA50 cap $64,611</span>, so
              the single decisive-break the scout needed to add did NOT print. The
              demand side stayed absent:{' '}
              <span className="dn-tag bear">OI contracted a fourth straight day
              −1.28% (−1,369.6 BTC), the biggest of the run</span>, and every 24h
              flow read is offered. But the hard cut did NOT cleanly fire either —
              spot held{' '}
              <span className="dn-tag bull">+1.88% above the $63,174 flip</span> and
              +1.30% above the $63,533 200W floor, and the SM &ldquo;rolling back
              short&rdquo; cut-leg is{' '}
              <span className="dn-tag stale">DATA-IMPAIRED</span>: the raw re-short
              −9,038 → −16,439 is entirely a single +9,765 short step at 08-06 11:06
              BJ (the recurring BJ re-sync artifact); ex-artifact ΔNet is{' '}
              <span className="dn-tag bull">+1,909, a COVER</span>, so the tell cannot
              be certified either way — same failure mode as 08-02 / 08-04. Around
              the dark spot the mixed signals stack:{' '}
              <span className="dn-tag bear">funding re-firmed (24h mean +3.06% →
              +3.83%, negatives 58 → 6)</span> and retail re-crowded (+1.42pt to
              54.84) — the leverage-off tailwind stopped and turned back up — while
              the dealer book{' '}
              <span className="dn-tag bull">lightened to +78.7M / +88.06M rollup</span>{' '}
              (from +108.0M / +121.04M, still positive, no negative chunk), and the
              MTF regime{' '}
              <span className="dn-tag bear">flipped back to 6/9 cycle-reversal</span>{' '}
              with a fresh 4h death cross. Book:{' '}
              <span className="dn-tag">HOLD the 0.2R scout starter</span> (no clean
              stop, SM cut un-certifiable), NO add (demand unconfirmed, cap re-lost),
              cut on a hair-trigger (a certified 1d close below the flip/floor, or a
              certified SM re-short once the feed is clean); the chase-short stays
              STOOD DOWN (floor held, gamma +78.7M positive, spot +1.88% above flip).
            </p>

            <p>
              BTC prints <span className="dn-tag">$64,360</span> live,{' '}
              <span className="dn-tag bear">−0.41%</span> on 24h (the live-tape
              window; the 08:01 BJ MTF scan reads −0.52% on its own 24h base — the
              ~4-min offset and different window open account for the small gap),
              inside a <span className="dn-tag">$64,982 / $64,178</span> range (24h
              high @ 13:09Z 08-06 / 21:09 BJ, low @ 13:33Z 08-06 / 21:33 BJ).{' '}
              <span className="dn-signal">The reclaim stalled and the cap was
              re-lost</span>: 08-04 closed $64,075.50, 08-05 closed $64,633.90 (the
              cap-clearing close that armed the scout), and 08-06 closed{' '}
              <span className="dn-tag bear">$64,300.00</span> — a $334 down-day that
              gave back the clear and settled below the D-EMA50 cap again. Two daily
              offsets still sit below spot:{' '}
              <span className="dn-tag bull">D-SMA50 $63,294.50 (+1.68%)</span> and{' '}
              <span className="dn-tag bull">D-EMA20 $64,076.80 (+0.44%)</span> — but
              the count dropped from three on 08-06 because{' '}
              <span className="dn-tag bear">D-SMA20 $64,391.03 (−0.05%)</span> flipped
              just overhead as spot slipped under it. The load-bearing cap is right
              above and un-cleared:{' '}
              <span className="dn-tag bear">D-EMA50 $64,611.49 (−0.39%)</span> — spot
              sits back under it after the 08-06 fade — then a gap to{' '}
              <span className="dn-tag bear">D-EMA100 $66,948.71 (−3.87%)</span>.{' '}
              <span className="dn-em">
                The single close the 08-06 note demanded to ADD — a decisive 1d close
                clear of the risen cap (&gt; ~$64,900) with OI building and SM &gt;
                −9,000 — did NOT print. Instead the 08-06 daily closed $64,300, back
                UNDER the cap, on a fourth-day OI contraction. The scout&rsquo;s add
                trigger is un-armed; the question is now whether the starter survives
                or gets cut.
              </span>{' '}
              The 08-06 fork resolved back down: the cap the tape cleared on 08-05
              was given back on 08-06, and the book stalled below it into a fourth
              day of a shrinking OI base.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · the SM re-short is the BJ re-sync artifact again (ex-artifact +1,909, a cover) — the tell is DATA-IMPAIRED · funding re-firmed and retail re-crowded (leverage-off tailwind reversed) · OI contracted a fourth straight day — still no fresh demand</span>
            </h2>

            <p>
              <span className="dn-signal">
                The SM tape reads a big re-short — but it is the recurring feed
                artifact, so the tell cannot be certified
              </span>. RAW SM net is{' '}
              <span className="dn-tag bear">−16,439</span> vs the same-clock 24h
              baseline −9,038 — a raw ΔNet of{' '}
              <span className="dn-tag bear">−7,400</span> (Δlong +802, Δshort +8,202)
              that looks like an 81.9% re-short. But{' '}
              <span className="dn-em">a single +9,765.1 short step at 08-06 11:06 BJ
              (03:06Z 08-06) — the recurring BJ re-sync artifact — level-shifts short
              from 21.4k to 31.1k and accounts for −9,308 of the ΔNet, ~126% of the
              raw move</span>. Ex-artifact — dropping the full 11:06 re-sync step (both
              the +457 long and +9,765 short leg) — long runs ~13.42k, short ~20.55k
              and net ~−7.13k, so ΔNet is{' '}
              <span className="dn-tag bull">+1,909, a COVER</span> (21.1% of the −9,038
              base), not a re-short at all. This is the exact failure mode that impaired the
              08-02 and 08-04 tells: the raw print says one thing, the artifact-cleaned
              series says the opposite, so the SM-positioning read is{' '}
              <span className="dn-tag stale">DATA-IMPAIRED</span> and cannot arm the
              chase-short&rsquo;s SM-short leg or force the scout&rsquo;s cut. SM net
              trough (most short){' '}
              <span className="dn-tag bear">−18,990 @ 08-06 11:06 BJ</span> is the
              artifact minute itself; net peak (least short){' '}
              <span className="dn-tag bull">−9,021 @ 08-06 10:15 BJ</span> sits right
              before it — the discontinuity is a feed re-sync, not a real roll of the
              book.
            </p>

            <p>
              The leverage side re-firmed rather than kept flushing — a reversal of
              the 08-06 cool-off, and not the de-crowd the scout wanted alongside.{' '}
              <span className="dn-signal">
                Funding turned back up and the negatives thinned out
              </span>: live <span className="dn-tag">+0.90% ann</span> (field
              0.000826/8h × 1095), and the 24h mean{' '}
              <span className="dn-tag bear">+3.83% ann</span> (vs +3.06% on 08-06 — a
              +0.77pt re-firm), with the window carrying only{' '}
              <span className="dn-tag bear">6 / 1442 negative rows</span> (vs 58 /
              1441 on 08-06 — the negatives thinned back out). It is not the runaway
              re-heat of 08-05 (the mean is well under half the +6.00% cap), but the
              carry has stopped bleeding and turned back up. Range{' '}
              <span className="dn-tag">−0.06% / +8.20% ann</span> (max @ 08-06 10:21
              BJ / 02:21Z 08-06, min @ 08-06 19:08 BJ / 11:08Z 08-06); not cap-pinned.
              OI Δ{' '}
              <span className="dn-tag bear">−1,369.6 BTC (−1.28%)</span> over 24h — a
              FOURTH straight contraction and the biggest of the run (−628.7 on 08-04,
              −326.9 on 08-05, −1,112.5 on 08-06, now −1,369.6; 107,122 → 105,752),
              so positions kept coming off through the fade.{' '}
              <span className="dn-em">This is the tension that broke the bull read</span>:
              the scout needed OI to start building behind price to confirm demand;
              instead it contracted a fourth day, so the reclaim remains a covering /
              de-gearing grind with no fresh long stacking. Retail{' '}
              <span className="dn-tag bear">mkt_long_pct 54.84%</span> from 53.42% — a
              +1.42pt re-crowd (24h range 52.56 / 54.96), leaning back long into the
              fade. Perp trades a{' '}
              <span className="dn-tag bear">−$58.07 discount</span> to spot at the
              snap (1h mean −$55.91, range −$87.30 / −$36.12; 4h mean −$54.65; 24h
              mean −$63.34, range −$169.82 / −$14.82 — a persistent discount all
              window). 1-min aggressor skew snap{' '}
              <span className="dn-tag bull">+7.1</span> (1h mean −4.93, range −29.3 /
              +19.0) — a marginal buy tilt at the snap inside a two-way hour.{' '}
              <span className="dn-em">
                Funding re-firmed + retail re-crowded + OI contracting a fourth day:
                the leverage-off legs the scout leaned on all reversed or failed to
                confirm. The SM cover/re-short tell that would settle it is impaired
                by the feed artifact. So the positioning book is no longer additive to
                the long — it is neutral-to-negative and un-certifiable, which is why
                the scout holds at minimum size and adds nothing.
              </span>
            </p>

            <p>
              Windowed flow says the fade was offered across the board with the
              freshest hour split.{' '}
              <span className="dn-em">The 24h reads (row window 08-06 08:04 → 08-07
              08:05 BJ, 1,442 rows — one row longer than the exact same-clock window,
              the same disclosed offset the 4h/1h windows carry) are all offered
              against a negative price</span>: 24h price{' '}
              <span className="dn-tag bear">−0.41%</span>, OI{' '}
              <span className="dn-tag bear">−1,369.6 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −1,514.3</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −333.7</span>, big-print{' '}
              <span className="dn-tag bear">−718.3 BTC / 729 prints</span>,
              taker-net <span className="dn-tag bear">−333.7</span> —{' '}
              <span className="dn-em">
                spot aggressor flow, futures aggressor flow, big prints and takers all
                sold while OI shrank: a clean offered fade, no side of the tape
                bidding over the full window (no CVD resets in the window this run, so
                the 24h deltas are clean)
              </span>. ~4h (row window 04:04 → 08:05 BJ, one row longer than the exact
              clock): price{' '}
              <span className="dn-tag bear">−0.24%</span>, OI{' '}
              <span className="dn-tag bull">+20.0 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −851.6</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −782.8</span>, big-print{' '}
              <span className="dn-tag bear">−384.4 BTC / 63 prints</span>,
              taker-net <span className="dn-tag bear">−782.8</span> —{' '}
              <em>offered on both spot and futures with OI essentially flat — a
              grind-lower, positions neither building nor cascading</em>. ~1h (row
              window 07:04 → 08:05 BJ, one row longer than the exact clock): price{' '}
              <span className="dn-tag">+0.01%</span>, OI{' '}
              <span className="dn-tag bull">+207.8 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +188.5</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −328.3</span>, big-print{' '}
              <span className="dn-tag bear">−296.2 BTC / 22 prints</span>,
              taker-net <span className="dn-tag bear">−328.3</span> —{' '}
              <em>the freshest hour is split: spot bid (+188) while futures / takers
              sold (−328) and OI ticked up — a spot-led stabilization at the lows, but
              still fought by futures selling</em>. The 24h fade was cleanly offered;
              the 4h ground lower two-sided; the 1h shows spot trying to base against
              persistent futures selling.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · regime FLIPPED BACK to 6/9 cycle-reversal (JT&lt;0) · overall HTF lean-short · short-term bounce · a fresh 4h water-up death cross joins the 1h · but the 8h TD9 SELL is GONE and a 4-frame water-down golden cluster + HTF bottom-div (8h/12h/1w) still say the slow book leans up</span>
            </h2>

            <p>
              <span className="dn-signal">
                The regime flipped back to cycle-reversal and the net read hardened to
                HTF lean-short with a short-term bounce — the fast frames rolled over
                at the cap while the slow cluster still leans up
              </span>. The regime tag is now{' '}
              <span className="dn-tag bear">6/9 周期反转体制 (JT&lt;0) —
              cycle-reversal / mean-reversion</span> (flipped back from 08-06&rsquo;s
              5/9 trend-continuation JT≥0), and the header net-read is{' '}
              <span className="dn-tag bear">高级别偏空 · 短线反弹 (HTF lean-short,
              short-term bounce)</span>. The fast frames rolled: a{' '}
              <span className="dn-tag bear">fresh 4h water-up death cross (刚印 just
              printed)</span> now joins the{' '}
              <span className="dn-tag bear">1h water-up death cross (15b)</span>, and
              the top-divergence cluster spans 15m/30m/1h/4h/1d (5 frames). But the
              slow book still leans up: the water-down golden-cross cluster holds on{' '}
              <span className="dn-tag bull">8h (11b) / 12h (5b) / 3d (9b) / 1w (2b)</span>
              — four frames — the bottom-divergence cluster holds on{' '}
              <span className="dn-tag bull">1h / 8h / 12h / 1w</span> (four frames,
              HTF-heavy), and crucially the{' '}
              <span className="dn-tag bull">8h ⚡TD9 SELL from 08-06 is GONE</span>{' '}
              (now 8h Buy 2, water-down golden 11b) — the overbought-at-the-cap warning
              that flagged the fade has already reset. The 15m and 1M both carry{' '}
              <span className="dn-tag bull">⚡TD9 BUY</span> (oversold hints at the top
              and bottom of the frame stack); the 12h is Sell 8 (→9?).{' '}
              <span className="dn-em">
                Read straight: the immediate momentum rolled over (regime back to
                cycle-reversal, fresh 4h death cross joining the 1h, top-div on five
                fast frames), which is the fade the scout is holding through. But the
                slow structure still leans up (4-frame golden cluster, HTF bottom-div
                on 8h/12h/1w, the 8h TD9 sell reset to a buy), so the slow turn that
                supported the scout has not broken — it is the fast frames, not the
                slow, that soured. That split is why the book holds rather than cuts.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>read</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,291</td><td className="num">40.6</td><td className="neut">death (water-dn) 7b</td><td className="bear">below 15b</td><td>⚡ TD9 BUY</td><td>lean-short · TD9 buy</td></tr>
                <tr><td>30m</td><td className="num">64,291</td><td className="num">40.5</td><td className="neut">death (water-dn) 12b</td><td className="bear">below 7b</td><td>Buy 6</td><td>lean-short · bot-div hid</td></tr>
                <tr><td>1h</td><td className="num">64,291</td><td className="num">41.6</td><td className="bear">death (water-up) 15b</td><td className="neut">in cloud 64.2–64.5k</td><td>Buy 7</td><td>lean-short · top-div · bot-div</td></tr>
                <tr><td>4h</td><td className="num">64,291</td><td className="num">53.3</td><td className="bear">death (water-up) 刚印 (just printed)</td><td className="bull">above 9b</td><td>Buy 5</td><td>caution · top-div</td></tr>
                <tr><td>8h</td><td className="num">64,291</td><td className="num bull">53.1</td><td className="bull">golden (water-dn) 11b</td><td className="bear">below 1b</td><td>Buy 2</td><td>lean-up · bot-div (TD9 sell GONE)</td></tr>
                <tr><td>12h</td><td className="num">64,291</td><td className="num bull">52.4</td><td className="bull">golden (water-dn) 5b</td><td className="neut">in cloud 62.3–64.8k</td><td>Sell 8→9?</td><td>caution · bot-div</td></tr>
                <tr><td>1d</td><td className="num">64,291</td><td className="num">51.3</td><td className="bear">death (water-up) 11b</td><td className="neut">in cloud 62.5–67.9k</td><td>Sell 4</td><td>lean-short · top-div</td></tr>
                <tr><td>3d</td><td className="num">64,288</td><td className="num">45.8</td><td className="bull">golden (water-dn) 9b</td><td className="bear">below 22b</td><td>Sell 2</td><td>lean-short · trend</td></tr>
                <tr><td>1w</td><td className="num">64,288</td><td className="num">40.0</td><td className="bull">golden (water-dn) 2b</td><td className="bear">below 27b</td><td>Sell 1</td><td>caution · bot-div · SMA200 +0.83%</td></tr>
                <tr><td>1M</td><td className="num">64,288</td><td className="num">44.0</td><td className="neut">—</td><td className="bull">above 30b</td><td>⚡ TD9 BUY</td><td>lean-long · trend</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 08:01 BJ (00:01Z) scan (rolling
                    latest file; archived verbatim at
                    /opt/desk-note/snapshots/2026-08-07-0005/). Header alerts:{' '}
                    <em>4h water-up death cross (just printed), 1h water-up death cross
                    (15b), 15m ⚡TD9 BUY, 1M ⚡TD9 BUY; the 08-06 8h ⚡TD9 SELL is GONE
                    (reset to 8h Buy 2)</em>; 4-frame water-down golden cluster
                    8h/12h/3d/1w. Top-div 5: 15m/30m/1h/4h/1d · bottom-div 4:
                    1h/8h/12h/1w. Regime 6/9 cycle-reversal (JT&lt;0); overall HTF
                    lean-short, short-term bounce. Scan spot $64,291, 24h −0.52%, H/L
                    $64,972 / $64,111, qVol $6.41B, net tally 2 long / 4 short / 4
                    neutral. Closes are in-progress bars; treat every value as
                    provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix reads a reclaim that reached its cap and stalled below it.
              Spot $64,360 sits{' '}
              <span className="dn-tag bull">+1.68% above D-SMA50 $63,294.50</span> and{' '}
              <span className="dn-tag bull">+0.44% above D-EMA20 $64,076.80</span> —
              two positive daily offsets (down from three on 08-06) — with the
              in-progress <span className="dn-tag bull">W-SMA200 $63,758.15
              (+0.94%)</span> and the settled 200W cycle floor{' '}
              <span className="dn-tag bull">$63,533.52 (+1.30%)</span> below.
              Immediately overhead, spot slipped back under two levels it held on
              08-06:{' '}
              <span className="dn-tag bear">D-SMA20 $64,391.03 (−0.05%)</span> (just
              flipped overhead) and the load-bearing{' '}
              <span className="dn-tag bear">D-EMA50 cap $64,611.49 (−0.39%)</span> —
              the cap the 08-05 close cleared and the 08-06 fade gave back — then a gap
              to{' '}
              <span className="dn-tag bear">D-EMA100 $66,948.71 (−3.87%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $68,128.70 (−5.53%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $68,569.69 (−6.14%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,202.97 (−7.00%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,433.46 (−7.31%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $69,681.58 (−7.64%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $70,375.23 (−8.55%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $72,417.24 (−11.13%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $73,973.33 (−13.00%)</span>.
              Far above and disused: W-SMA150 $76,878 (−16.28%), W-EMA50 $77,795
              (−17.27%), W-EMA100 $78,766 (−18.29%), W-SMA50 $83,348 (−22.78%),
              W-SMA100 $88,657 (−27.41%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-08-07 00:06Z (close $64,355.20);
                offsets recomputed against live spot $64,359.99. Displayed MA levels
                are $-rounded; offsets computed from exact series values. The weekly
                ladder is computed off the full 2019–2026 wildcard (362 right-labeled
                weekly bars), so W-SMA200 IS computable: $63,758.15 in-progress
                (+0.94%) and $63,533.52 settled — the settled value being the
                trap-watch weekly-close 200-SMA (recomputed 08-03 00:11Z, the floor
                used for closes throughout). W-EMA200 $68,569.69 (−6.14%) and W-EMA150
                $73,973.33 (−13.00%) are full-history EMAs. Daily closes: 08-02
                $63,550.00, 08-03 $63,497.20, 08-04 $64,075.50, 08-05 $64,633.90,
                08-06 $64,300.00 — the 08-06 close is $334 below the 08-05 close and
                $311 below the D-EMA50 cap $64,611: the cap the tape cleared on 08-05
                was given back on 08-06, so the reclaim stalled rather than extended.
                The 08-07 bar is in progress at $64,355.20.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book lightened but stayed positive · headline +78.7M / rollup +88.06M (was +108.0M / +121.04M) · flip eased to $63,174, spot +1.88% above · the $65k wall eased to +16.47M and the crash-put $60k eased to −17.57M — a lighter two-sided dampener, still no negative-gamma chunk</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book shed positive gamma day-over-day for the first time in
                the run (headline lineage +6.3M → +38.1M → +68.6M → +106.0M → +108.0M →
                +78.7M across 08-02 → 08-07), but stayed net positive — the dampener
                lightened, it did not flip
              </span>. Headline GEX is{' '}
              <span className="dn-tag bull">+78.7M / 1%</span> (was +108.0M on 08-06)
              and the by-expiry rollup is{' '}
              <span className="dn-tag bull">+88.06M</span> (was +121.04M; the
              by-expiry strip sums to the gex_summary net_gex $88.06M). The 0-γ flip
              eased <span className="dn-tag">$63,191 → $63,174 (−$17)</span>, and spot
              $64,360 sits <span className="dn-tag bull">+1.88% above flip</span> on
              spot-denominated math (64,359.99 / 63,174 − 1 = +1.877%); the GEX
              file&rsquo;s Deribit index $64,645 ($285 above live spot) reads{' '}
              <span className="dn-tag bull">+2.33%</span> (64,645 / 63,174 − 1 =
              +2.329%, file rounds +2.3%) — both references positive, spot well above
              the flip on both. The wall map is a lighter positive band over spot with
              the crash-put shelf below:{' '}
              <span className="dn-tag bull">$70k +18.24M</span> (heaviest wall now),{' '}
              <span className="dn-tag bull">$65k +16.47M</span> (at spot, eased from
              +26.35M on 08-06),{' '}
              <span className="dn-tag bull">$66k +15.35M</span>,{' '}
              <span className="dn-tag bull">$68k +14.94M</span>,{' '}
              <span className="dn-tag bull">$67k +12.72M</span>,{' '}
              <span className="dn-tag bull">$72k +9.50M</span>,{' '}
              <span className="dn-tag bull">$80k +8.43M</span>,{' '}
              <span className="dn-tag bull">$64.5k +6.34M</span>, with the negatives
              the crash-put shelf below:{' '}
              <span className="dn-tag bear">$60k −17.57M</span> (heaviest negative,
              the crash-put, eased from −17.88M on 08-06) and{' '}
              <span className="dn-tag bear">$58k −5.37M</span>.{' '}
              <span className="dn-em">
                The five large strikes across the +$64.5k–$68k positive band total
                +65.82M (+6.34M / +16.47M / +15.35M / +12.72M / +14.94M stacked) —
                lighter than 08-06&rsquo;s +87.82M, with the $65k wall no longer the
                dominant single strike (it eased from +26.35M to +16.47M as the $70k
                took the lead). Dealers still bid into a fade and offer into a squeeze
                across the reclaim zone, but the clamp is looser — the dampener that
                capped the 08-05 break has thinned, which cuts both ways: less ceiling
                pressure on any bounce, but also a lighter floor cushion under a fade
              </span>. Near-dated: 7AUG26 0.3DTE{' '}
              <span className="dn-tag bull">+22.79M</span> is still on the book
              (settles 08:00Z today, ~8h after this snap) — a positive front, no
              near-dated negative amplifier. Forward strip: 8AUG 1.3 +3.18M, 9AUG 2.3
              +3.53M, 10AUG 3.3 +0.54M, 14AUG 7.3 +9.03M, 21AUG 14.3 +12.23M, 28AUG
              21.3 +19.17M, 25SEP 49.3 +9.99M, 30OCT 84.3 +1.16M, 25DEC 140.3 +4.52M,
              26MAR27 231.3 +1.21M, 25JUN27 322.3 +0.71M — the entire forward strip is
              positive; there is no negative-gamma chunk to flip the book bear.
            </p>

            <p>
              IV median across the chain is{' '}
              <span className="dn-tag">40.5%</span> against 30D close-to-close RV of{' '}
              <span className="dn-tag">28.47%</span> — chain-level richness{' '}
              <span className="dn-tag">~+12.0pt</span>.{' '}
              <span className="dn-em">
                A chain-median across instruments, not a tradable spread; the
                instrument count on the chain is 834, but expiry-/strike-level vega,
                skew and term structure remain not loaded, so the vol read stays
                framework-only.
              </span>{' '}
              Put/Call OI ratio 0.53 (call OI 225,906 vs put OI 119,163 — a call-heavy
              book, consistent with the positive-gamma dampener). RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log returns
              (= 31 consecutive daily closes) anchored to parquet last bar 2026-08-07
              00:06Z; range $62,255 – $66,522 over the underlying 31-close window. (For
              reference, last 29 returns / 30 closes reads 28.52%, marginally HIGHER
              than the 30-return 28.47% — RV is essentially flat as the tape chops
              under the cap.)
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Tier-1 easing PAUSED (10Y flat at 4.63%, TIPS +1bp to 2.41%, HY OAS +2bp to 2.75%) · rates filter still FALSE at 8bp (unchanged) · MOVE dark a 3rd render · cross-asset regime IDIOSYNCRATIC · BTC turned RED on 7d and lags a still-strong risk tape</span>
            </h2>

            <p>
              <span className="dn-signal">
                The three-day macro easing stalled — 10Y flat, real-rates and credit
                ticked back up — so the reclaim-long rates filter holds FALSE at 8bp,
                no closer to the gate
              </span>. Dashboard render is 2026-08-06 22:15Z, ~1.8h before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag">4.63% (0.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.95</span> — RISK-OFF tag, flat after
              three days of easing. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.41% (+1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.47</span> — still EXTREME RISK-OFF,
              ticked up. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.26% (−1.0bp)</span>. HY OAS{' '}
              <span className="dn-tag bear">2.75% (+2.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−0.79</span> — still loose, ticked wider.
              MOVE bond vol{' '}
              <span className="dn-tag stale">unavailable (fetch failed)</span> — dark a
              third render. DXY{' '}
              <span className="dn-tag bear">99.96 (+0.27)</span> — firmer. Fed net
              liquidity{' '}
              <span className="dn-tag bull">$5.840T (+0.014T)</span>, ticked up on the
              day. US-JP 10Y spread{' '}
              <span className="dn-tag">1.96% (0.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag">157.70 (+0.00)</span>. NFCI −0.529 (loose,
              stale).{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) stays FALSE at
                4.63%, still 8bp from the gate but no longer narrowing — the three-day
                easing (4.75% → 4.70% → 4.63%) paused flat here, and TIPS / HY OAS
                actually ticked back up. 10Y and TIPS still carry RISK-OFF / EXTREME
                RISK-OFF regime z (+1.95 / +2.47); the paused day does not change the
                regime read. MOVE is dark a third render, so bond-vol confirmation is
                unavailable.
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
                <tr><td>US 10Y nominal</td><td className="num">4.63%</td><td className="num">0.0bp</td><td className="num bear">+1.95</td><td className="bear">risk-off · easing paused</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.41%</td><td className="num bear">+1.0bp</td><td className="num bear">+2.47</td><td className="bear">EXTREME risk-off · ticked up</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.26%</td><td className="num bull">−1.0bp</td><td className="num">—</td><td className="neut">easing</td></tr>
                <tr><td>HY OAS</td><td className="num">2.75%</td><td className="num bear">+2.0bp</td><td className="num bull">−0.79</td><td className="bull">loose · ticked wider</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.529</td><td className="num">—</td><td className="num bull">—</td><td className="stale">loose · stale</td></tr>
                <tr><td>MOVE bond vol</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">unavailable · fetch failed (3rd render)</td></tr>
                <tr><td>DXY</td><td className="num">99.96</td><td className="num bear">+0.27</td><td className="num">—</td><td className="bear">firmer</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.840T</td><td className="num bull">+0.014T</td><td className="num">—</td><td className="neut">ticked up on the day</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.70</td><td className="num">+0.00</td><td className="num">—</td><td className="neut">flat</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.96%</td><td className="num">0.0bp</td><td className="num">—</td><td className="neut">flat</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7402</td><td className="num bull">−0.01</td><td className="num">—</td><td className="bull">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">(monthly, 66d)</td><td className="num bear">—</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.212</span>{' '}
              (below the 0.25 NORMAL floor, essentially flat vs 08-06&rsquo;s 0.214 —{' '}
              <span className="dn-tag">IDIOSYNCRATIC regime</span>, assets moving on
              their own drivers). BTC&rsquo;s ties to the risk complex: NQ{' '}
              <span className="dn-tag">+0.456</span> (top), TSLA{' '}
              <span className="dn-tag">+0.430</span>, URNM{' '}
              <span className="dn-tag">+0.339</span>, SP500{' '}
              <span className="dn-tag">+0.330</span>, JP225 +0.286, NVDA +0.284,
              SILVER +0.203, COPPER +0.195, GOLD +0.193, PALL +0.183, PLAT +0.173. 7d
              performance is the loud line, and BTC turned red:{' '}
              <span className="dn-tag bear">BTC −0.63%</span> — the lone red in the
              risk complex (was +1.43% on 08-06), while the tape stayed strong: NQ{' '}
              <span className="dn-tag bull">+3.85%</span>, SP500{' '}
              <span className="dn-tag bull">+3.37%</span>, JP225{' '}
              <span className="dn-tag bull">+0.75%</span>, and the mega-caps held the
              bid — MSFT{' '}
              <span className="dn-tag bull">+11.68%</span>, NVDA{' '}
              <span className="dn-tag bull">+10.88%</span>, META{' '}
              <span className="dn-tag bull">+7.87%</span>, URNM{' '}
              <span className="dn-tag bull">+7.06%</span>, GOOGL{' '}
              <span className="dn-tag bull">+6.16%</span>, AMZN{' '}
              <span className="dn-tag bull">+5.92%</span>, TSLA{' '}
              <span className="dn-tag bull">+2.84%</span>. Metals firm: SILVER +4.72%,
              PALL +4.85%, PLAT +4.66%, COPPER +3.73%, GOLD +3.70%. Energy soft: CL{' '}
              <span className="dn-tag bear">−6.68%</span>, BRENT{' '}
              <span className="dn-tag bear">−4.30%</span>, NGAS{' '}
              <span className="dn-tag bear">−4.68%</span>; AAPL −0.30% and JPY −1.31%
              the other reds.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine widened back to ~−4.48pt (BTC
                −0.63% vs NQ +3.85%, from −5.98pt on 08-06 but now with BTC outright
                red rather than merely lagging a green) — BTC gave back its
                participation and is the single red name in a still-green risk week.
                The regime is IDIOSYNCRATIC (|r| 0.212), so the tape is not driving
                BTC either way; the fade is BTC-internal, and the scout stands on its
                own (impaired) positioning legs, not a macro tailwind
              </span>. JGB monthly 2.67% is stale — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · book HOLDS the SCOUT LONG STARTER 0.2R · the add did not fire (cap re-lost, OI 4th contraction, demand unconfirmed) · the hard cut did not cleanly fire (floor held, SM re-short is the feed artifact) · chase-short STOOD DOWN</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 08-06 note armed a 0.2R scout starter and named two forward paths —
                add on a demand-confirmed cap-clear, cut on a close below the flip/floor
                or an SM roll-back-short. Neither fired cleanly, so the book holds the
                starter untouched
              </span>. The ADD did not arm: the 08-06 daily closed $64,300 — back UNDER
              the D-EMA50 cap, not decisively clear of it — OI contracted a fourth
              straight day (−1,369.6 BTC), and every 24h flow read is offered, so
              demand is unconfirmed. The hard CUT did not cleanly fire either: spot held
              +1.88% above the $63,174 flip and +1.30% above the $63,533 200W floor (no
              close below either), and the SM &ldquo;rolling back short&rdquo; cut-leg
              is DATA-IMPAIRED — the raw re-short is the 08-06 11:06 BJ feed artifact,
              ex-artifact ΔNet is +1,909 (a cover). So neither trigger resolved, and the
              book holds the minimum starter into an un-confirmed, un-certifiable tape.
              The chase-short stays STOOD DOWN — the floor held, gamma is +78.7M
              positive, and spot is +1.88% above the flip. Book:{' '}
              <span className="dn-em">hold scout long 0.2R, no add, cut on a
              hair-trigger</span>, defined below.
            </p>

            <div className="dn-trade">
              <span className="dn-side bull">scout · LONG · HELD (starter 0.2R) · add un-armed (cap re-lost, OI 4th contraction) · cut un-triggered (floor held, SM impaired)</span>
              <div className="dn-trade-name">
                Cover-bounce scout — held: the cap was re-lost and demand stayed absent, but the floor held and the SM cut-tell is impaired, so the starter survives on a hair-trigger
              </div>
              <div className="dn-thesis">
                The 08-06 note armed this starter when the 08-05 daily cleared the
                D-EMA50 cap and SM covered. This run neither confirmed nor cleanly
                invalidated it. The ADD is un-armed: the 08-06 daily closed $64,300
                (back under the $64,611 cap, not clear of it), OI contracted a fourth
                straight day (−1,369.6 BTC — still no fresh demand), and the 24h flow
                is all offered. The CUT is un-triggered: spot held above the $63,174
                flip and the $63,533 200W floor (no close below), and the SM roll-back
                that would force the cut is the recurring 08-06 11:06 BJ feed artifact
                — ex-artifact ΔNet +1,909, a cover, so the re-short cannot be certified.
                Mixed underneath: funding re-firmed (24h mean +3.06% → +3.83%,
                negatives 58 → 6) and retail re-crowded (+1.42pt to 54.84) — the
                leverage-off tailwind reversed — while the dealer book lightened to
                +78.7M (still positive) and the MTF regime flipped back to
                cycle-reversal with a fresh 4h death cross, though the 8h TD9 sell reset
                to a buy and the slow golden/bottom-div clusters still lean up. Hold the
                0.2R starter; do not add without a demand-confirmed cap break; cut on
                the first certified stop.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">position (held)</span><span className="dn-lvl-v">scout long 0.2R from ~$64,620 (08-06 arming) — held at minimum size, no add this run</span></div>
                <div><span className="dn-lvl-k">add trigger</span><span className="dn-lvl-v bull">a 1d close decisively clear of the D-EMA50 cap (&gt; ~$64,900) WITH OI building (the 4-day contraction reverses) AND a CERTIFIED SM net &gt; −9,000 (clean feed, no artifact) — add 0.2R</span></div>
                <div><span className="dn-lvl-k">stop (hair-trigger)</span><span className="dn-lvl-v bear">1d close &lt; $63,174 flip (working) or &lt; $63,533 200W floor (hard) — OR a CERTIFIED SM roll-back-short once the feed is clean (ex-artifact turns net-seller)</span></div>
                <div><span className="dn-lvl-k">targets (on add only)</span><span className="dn-lvl-v">$66,949 (D-EMA100) then $68,129 (D-SMA100) — into the +$64.5k–$68k / +65.82M positive-gamma band; treat as a grind, not an impulse</span></div>
                <div><span className="dn-lvl-k">R/R</span><span className="dn-lvl-v">starter ~$64,620, stop $63,533 = ~$1,087 risk; a re-cleared cap toward $66,949 = ~$2,329 ≈ 2.14:1 — but the add waits on demand confirmation, so the standing starter carries the risk without the confirmed upside yet</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> the starter survives ONLY because no clean stop fired
                and the SM cut-tell is impaired — it is not a conviction hold. Do NOT
                add: the cap was re-lost, OI contracted a fourth day, and demand is
                unconfirmed. Cut immediately on the FIRST clean signal — a 1d close
                below the flip/floor, or a certified SM re-short once the feed clears
                the artifact. The kiss-the-cap failed on 08-06; a second failed test or
                a certified positioning roll ends the read.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">flat · chase-short · STOOD DOWN · floor held, gamma +78.7M positive, spot +1.88% above flip</span>
              <div className="dn-trade-name">
                Chase-short — stood down: the fade re-lost the cap but the floor held, the book stayed net-positive gamma, and the SM re-short is un-certifiable
              </div>
              <div className="dn-thesis">
                The chase-short is gated on a flip/old-floor break ($63,174 flip /
                $63,311 old floor) with SM short AND aggregate GEX flipping negative.
                All three point the wrong way: spot is +1.88% above the flip (the fade
                stalled well above it, not through), the dealer book is +78.7M headline
                / +88.06M rollup — lighter than 08-06 but still a positive dampener with
                no negative-gamma chunk anywhere on the forward strip — and the SM-short
                leg is DATA-IMPAIRED (raw re-short is the feed artifact; ex-artifact is a
                cover). With no leg cleanly armed, the short stands down; the crash-put
                shelf at $60k has also eased to −17.57M (from −17.88M), leaving marginally
                less cascade target.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm trigger</span><span className="dn-lvl-v bear">1d close &lt; $63,174 flip / $63,311 old floor AND aggregate GEX flipping negative (a fresh negative-gamma chunk inside the front expiries) AND a CERTIFIED SM short (clean feed)</span></div>
                <div><span className="dn-lvl-k">SM leg (impaired)</span><span className="dn-lvl-v stale">RAW SM net −16,439 looks deeply short, but it is the 08-06 11:06 BJ feed artifact — ex-artifact ≈ −7,129 and ΔNet +1,909 (a cover); the leg cannot be certified</span></div>
                <div><span className="dn-lvl-k">targets on re-arm</span><span className="dn-lvl-v">$60k (−17.57M crash-put shelf), with $58k (−5.37M) beyond — both eased vs 08-06</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no short into a +78.7M positive-gamma book with the 200W floor holding, price +1.88% above the flip, and the SM tell impaired</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the entire forward GEX strip is positive (no
                negative-gamma chunk out to 25JUN27); a gamma flip would require a fresh
                negative chunk to build, not just spot drifting down. The book lightened
                (+108.0M → +78.7M), which thins the dampener both ways — a fade would
                meet less cushion — but until a negative chunk actually prints and the SM
                feed clears, the short has no certified leg.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · the reclaim stalled at the cap · watch for a demand-confirmed re-clear or a certified stop</span>
              <div className="dn-trade-name">
                Reclaim watch — STALLED: the cap cleared on 08-05 was given back on 08-06, and the book chops below it on a shrinking OI base
              </div>
              <div className="dn-thesis">
                The 08-06 note framed the divergence as resolved bull and armed a scout,
                turning on whether demand would confirm (OI builds, cap breaks clear) or
                the fast-frame fade pulls spot back below the flip. It did neither
                cleanly: the fast-frame fade won at the cap (08-06 closed $64,300, back
                under the D-EMA50; regime flipped back to cycle-reversal; fresh 4h death
                cross), but the fade stalled well above the flip and floor, so no cut
                triggered. Demand never confirmed — OI contracted a fourth straight day
                and flow stayed offered. The scout is now a held starter waiting on a
                clean resolution, not a confirmed long. The next watch is whether spot
                re-clears the cap on building OI (arms the add) or a certified stop
                prints — a close below the flip/floor, or a clean SM re-short once the
                feed artifact clears.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">bull re-confirmation</span><span className="dn-lvl-v bull">1d close clear of the D-EMA50 cap (&gt; ~$64,900) with OI building (4-day contraction reverses) and a certified SM net &gt; −9,000 — add the scout</span></div>
                <div><span className="dn-lvl-k">bear resolution</span><span className="dn-lvl-v bear">1d close &lt; $63,174 flip with a certified SM roll-back-short — cut the scout, watch the chase-short re-arm if gamma also flips negative</span></div>
                <div><span className="dn-lvl-k">data caveat</span><span className="dn-lvl-v stale">the SM tell is impaired by the 08-06 11:06 BJ feed artifact (3rd occurrence after 08-02 / 08-04) — do not act on the raw re-short; wait for a clean-feed read</span></div>
                <div><span className="dn-lvl-k">slow-frame tell</span><span className="dn-lvl-v bull">4-frame water-down golden cluster (8h/12h/3d/1w) + HTF bottom-div (8h/12h/1w) + the 8h TD9 sell reset to a buy — the slow book still leans up under the fast-frame fade</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a stalled reclaim on an impaired
                positioning tell is a hold-and-wait, not a fresh entry either way. The
                scout holds because no clean stop fired; it does not add because no
                demand confirmed. Resolve on data: a certified SM read (clean feed) plus
                a decisive close on either side of the cap/flip settles it. Until then,
                do not chase the chop.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the armed scout faded at the cap but did not stop out · the note turns on whether spot re-clears the cap on building OI (add) or a certified stop prints — a close below the flip/floor, or a clean SM re-short once the feed artifact clears</span>
            </h2>

            <p>
              Of the 08-06 decision conditions: the scout-ADD path DID NOT FIRE — the
              08-06 daily closed $64,300 (back under, not clear of, the $64,611 cap),
              OI contracted a fourth day, and SM is un-certifiable; the scout-CUT path
              DID NOT CLEANLY FIRE — spot held above the flip and floor (no close
              below) and the SM roll-back-short is the feed artifact; the chase-short
              re-arm DID NOT FIRE — spot sits +1.88% above the $63,174 flip and gamma
              stayed positive (+78.7M); the 200W-cycle-floor-lost condition DID NOT
              FIRE — the floor held with spot +1.30% above it. <em>The armed scout
              faded at the cap but did not stop out; the resolution is still pending.</em>{' '}
              The conditions today re-set around a held-but-unconfirmed starter on an
              impaired SM tell:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Cover-bounce scout (long) — HELD, add trigger</td><td className="bull">1d close decisively clear of the D-EMA50 cap (&gt; ~$64,900) AND OI building (4-day contraction reverses) AND a CERTIFIED SM net &gt; −9,000</td><td>hold the 0.2R starter; add 0.2R only on the demand-confirmed break, target $66,949 (D-EMA100) then $68,129 (D-SMA100)</td></tr>
                <tr><td>Scout stop / cut (hair-trigger)</td><td className="bear">1d close &lt; $63,174 flip (working) or &lt; $63,533 200W floor (hard) — OR a CERTIFIED SM roll-back-short once the feed is clean</td><td>cut the starter on the first clean signal — the kiss-the-cap already failed once on 08-06</td></tr>
                <tr><td>Chase-short (short) — re-arm</td><td className="bear">1d close &lt; $63,174 flip / $63,311 old floor AND aggregate GEX flipping negative AND a certified SM short</td><td>reassess chase-short only after a fresh audited trigger — no standing size; framework target $60k (−17.57M crash-put)</td></tr>
                <tr><td>200W cycle floor lost</td><td className="bear">weekly close &lt; $63,533.52 (200W) — would end the 5-week above-floor streak (next weekly close 08-09)</td><td>cycle-support break — separate reassessment; the reclaim read ends</td></tr>
                <tr><td>SM feed artifact (data)</td><td className="stale">3rd occurrence (08-02 / 08-04 / 08-06 11:06 BJ) — the raw re-short is a single-minute +9,765 feed step; ex-artifact is a cover</td><td>do NOT act on the raw SM print; require a clean-feed read before certifying any cover or re-short</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">10Y &lt; 4.55% close — FALSE at 4.63% (8bp to fire, no longer narrowing — easing paused)</td><td>standalone filter FALSE; the three-day easing stalled flat, so the rates tailwind toward the gate has paused</td></tr>
                <tr><td>BTC-vs-TradFi lag</td><td className="bear">BTC −0.63% vs NQ +3.85% 7d = −4.48pt lag · |r| 0.212 IDIOSYNCRATIC</td><td>BTC turned outright red in a green risk week; regime below NORMAL so the tape is not driving BTC — the fade is BTC-internal</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether demand finally confirms the held scout — a decisive close
                re-clearing the D-EMA50 cap with OI building and a CERTIFIED SM read
                (add the starter, target the $67k–$68k cluster) — or whether a clean
                stop prints: a 1d close below the $63,174 flip / $63,533 floor, or a
                certified SM roll-back-short once the feed artifact clears (cut the
                starter, and if gamma also flips negative watch the chase-short re-arm
                toward the $60k −17.57M crash-put, though the positive strip and the
                200W floor leave a dampened path)
              </span>. Until one of those prints, this note runs as written: the armed
              scout faded at the cap — the 08-06 daily gave back the clear and closed
              $64,300, OI contracted a fourth straight day, funding re-firmed and retail
              re-crowded, and the regime flipped back to cycle-reversal — but no clean
              stop fired and the SM cut-tell is impaired by the feed artifact, so the
              book holds the minimum-size scout long 0.2R and adds nothing. The right
              read for the next 24h is <em>hold the starter on a hair-trigger, add only
              on a demand-confirmed cap re-clear, and cut on the first certified stop —
              do not chase the chop under the cap</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit
            </span>
            <b>Status:</b> post codex hostile audit (STAGE B, hostile-but-fair). Verdict
            PASS-WITH-NOTES — 0 CRITICAL / 2 MAJOR / 1 MINOR / 0 NIT; no CRITICAL publish
            gate found. All three findings applied in v2; see
            audits/2026-08-07-desk-note.md. Grep-closure was run over the full EN file
            for each finding (patterns / hits-before / hits-after recorded below); zero
            stale matches remain.{' '}
            <b>DN-001</b> (MAJOR — the 24h headline flow/OI/funding block reconstructs
            from the 08-06 08:04 BJ open, one row past the declared same-clock 08:05
            anchor, so the window was undisclosed-offset): resolved via the
            relabel/disclose option (numbers are the correct 1,442-row-window values and
            are unchanged). Searched <code>&quot;24h reads&quot;</code>,{' '}
            <code>&quot;1442&quot;</code> and <code>&quot;same-clock&quot;</code> across
            the file — the 24h flow paragraph now discloses the{' '}
            <code>08-06 08:04 → 08-07 08:05 BJ</code> row window (1,442 rows, one row
            longer than the exact clock, matching the 4h/1h treatment) at :360, and the
            manifest live-tape flag documents the offset convention vs the same-clock
            point comparisons at :77–:81; the two remaining <code>same-clock</code> hits
            (:186/:290) correctly denote the SM net baseline (08-06 08:05), which is
            genuinely same-clock. Residual undisclosed-offset 24h claims: hits-before 1,
            hits-after 0. RESOLVED (hits-after = 0).{' '}
            <b>DN-002</b> (MAJOR — the SM ex-artifact net level used the short-only
            adjustment (−6.67k) while the DeltaNet/cover used the full-step adjustment
            (+1,909 / 21.1%), so the fields did not foot): standardized on the full
            11:06 re-sync convention (drop both the +456.7 long and +9,765.1 short legs)
            → adjusted long ≈ 13.42k, short ≈ 20.55k, ex-artifact net ≈ −7.13k, DeltaNet
            +1,909, cover 21.1%. Searched <code>&quot;6.67&quot;</code>,{' '}
            <code>&quot;6,673&quot;</code> and the −6,672/−6,673 variants — hits-before
            3 (:177/:178/:784 in v1), hits-after 0; the corrected −7.13k / −7,129 net now
            appears at :182/:298/:795 with adjusted long ~13.42k surfaced at :182/:298.
            RESOLVED (hits-after = 0).{' '}
            <b>DN-003</b> (MINOR — &ldquo;shed positive gamma for the first time in the
            run&rdquo; was not reconstructable from the file&rsquo;s own quoted history,
            which showed only the prior day): resolved via the inline-history option —
            the headline lineage +6.3M → +38.1M → +68.6M → +106.0M → +108.0M → +78.7M
            (08-02 → 08-07) is now inlined behind the claim at :528, so the phrase is
            self-supporting. Searched <code>&quot;first time in the run&quot;</code> —
            hits-before 1, hits-after 1 (retained by design, now backed by the inlined
            run history). RESOLVED (unsupported-claim meaning eliminated).{' '}
            Overall: post codex hostile audit; all findings RESOLVED, promoted v1 → v2.
            Formula discipline per runbook: funding annualized × 1095 (field already in
            percent); SM cut fraction = |Δnet| / prior_net; live-tape <code> t</code>{' '}
            read as BJ-local (UTC+8) with all BJ timestamps converted to UTC in the
            prose; MA matrix carries the full Daily AND Weekly × SMA AND EMA ladder (n ∈
            20, 50, 100, 150, 200); NTT / max-pain / strike-level IV / BTC-NQ ratio held
            framework-only (not loaded). The SM positioning tell remains flagged
            DATA-IMPAIRED this run (the recurring BJ re-sync feed artifact at 08-06 11:06
            BJ, 3rd occurrence after 08-02 / 08-04). <b>Build note (INFO):</b> this
            server runs Node 18.19.1; Next 16.2.6 hard-exits on Node &lt; 20.9.0, so a
            full <code>next build</code> is environment-blocked;{' '}
            <code>npx --no-install tsc --noEmit</code> is the build proxy.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-08-07 00:05Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-08-06 22:15Z (~1.8h before
            snapshot) and some inputs are explicitly stale, dark, or pending and
            flagged as such — notably the SM positioning tell, impaired by the
            recurring feed artifact. Levels, sizes, and conditions are illustrative
            of the desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future
            tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The armed scout faded at the cap — the 08-06 daily gave back the clear
                on a fourth-day OI contraction. But the floor held and the SM cut-tell
                is impaired by the feed artifact, so the starter survives on a
                hair-trigger. Hold minimum size. Add on demand, cut on the first clean
                stop — do not chase the chop.
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
            v2 · 2026-08-07 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
