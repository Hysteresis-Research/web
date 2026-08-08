import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-08 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-08',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-08' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260808() {
  await requireViewer('/desk/2026-08-08');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-08 · v2</span>
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
              <span className="dn-big">$64,920</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.89%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-08 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-08 00:05Z (row t=&ldquo;08-08 08:05&rdquo; BJ, the 00:05Z daily anchor)</td>
                  <td className="dn-flag">
                    fresh · 1-min · pinned to the 00:05Z anchor row for reproducibility
                    (file tail had already advanced to 00:07Z at read time) · live-tape{' '}
                    <code> t</code> is BJ-local (UTC+8): the 00:05Z pin = t &ldquo;08-08
                    08:05&rdquo;, all downstream BJ timestamps converted to UTC in the
                    prose · the 24h / 4h / 1h flow + funding windows run from the 08:04 /
                    04:04 / 07:04 BJ open (one row longer than the exact same-clock
                    window: 1,442 rows on 24h), a disclosed row-offset carried on every
                    cumulative-delta window; the same-clock point comparison (SM net vs
                    the 08-07 08:05 baseline) uses the exact clock
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-08 08:01 BJ (00:01Z) scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (can advance intrahour) · the archived
                    copy at /opt/desk-note/snapshots/2026-08-08-0007/ is the pinned
                    source · ~4-min stale vs snapshot anchor · in-progress bars · scan
                    spot $64,874, 24h +0.91%
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-08 00:00Z snapshot</td>
                  <td className="dn-flag">
                    ~5-min stale vs anchor · Deribit idx $65,227 vs live $64,920 ($307
                    above live) · 830 instruments · 8AUG26 0.3DTE +12.45M still on the
                    book (settles 08:00Z today, ~8h after this snap) · archived at
                    /opt/desk-note/snapshots/2026-08-08-0007/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-08 00:00Z
                  </td>
                  <td className="dn-flag">~5-min lag · 7d 1h bars · 22 assets · 167 rows · archived in snapshot dir</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-07 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.9h render lag · FRED Tier-1: 10Y +6bp to 4.69% (easing REVERSED),
                    TIPS +2bp to 2.43%, HY OAS −4bp to 2.71%, DXY +0.27 to 99.96, Fed net
                    liq flat at $5.840T · MOVE fetch-failed (dark, 4th render) · NFCI
                    stale · archived in snapshot dir
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-08-08 00:06Z</td>
                  <td className="dn-flag">
                    close $64,900.00 (in-progress 08-08 bar) · offsets recomputed vs live
                    spot $64,920.42 · weekly ladder off the full 2019–2026 wildcard (362
                    weekly bars) · W-SMA200 $63,760.87 in-progress / $63,533.52 settled
                    (the trap-watch floor); W-EMAs full-history
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle floor watch</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · recomputed 2026-08-03 00:11Z</td>
                  <td className="dn-flag">
                    weekly-close 200-SMA $63,533.52, last completed week 2026-08-02 close
                    $63,550.00, state ABOVE, 5 consecutive weekly closes above (streak
                    from 2026-07-05) · slow level (~$250/wk), hours-stale is fine · the
                    dedicated weekly_200sma.json runbook path is absent; trap-watch state
                    used as the live substitute · next weekly close 2026-08-09 (tomorrow)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale · monthly (67d) · do not treat as live</td>
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
              <span className="dn-v">+5.86%</span>
              <span className="dn-src">live · funding field 0.005351/8h × 1095 = +5.86% ann · 24h mean +5.43% (was +3.83% on 08-07 — re-heated +1.60pt) · 0 / 1442 sampled rows negative (was 6 / 1442 on 08-07 — the negatives vanished again) · max +7.97% ann @ 08-08 03:47 BJ (08-07 19:47Z), min +0.74% ann @ 08-07 08:22 BJ (00:22Z 08-07) · not cap-pinned (well under the +10.95% Binance cap)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h mean</span>
              <span className="dn-v bear">+3.83% → +5.43% (re-heated +1.60pt)</span>
              <span className="dn-src">the 08-07 re-firm accelerated — negatives 6 → 0, the long carry crowded back up a second day; still well under half the cap, but the leverage-off tailwind the scout leaned on has now fully reversed to a firming carry</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">+1.16% (+1,230.0 BTC)</span>
              <span className="dn-src">live · the FIRST expansion after four straight contractions (−628.7 / −326.9 / −1,112.5 / −1,369.6 on 08-04→08-07) · 106,979.5 BTC now vs 105,749.6 24h ago · positions finally building behind price — the demand-confirmation the scout was waiting on</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bull">52.44 / 47.56</span>
              <span className="dn-src">live_db `mkt_long_pct` · de-crowded −2.40pt from 54.84 (24h ago) to 52.44 · 24h range 51.36 / 55.65 — retail leaned back OFF the long side into the up-move, the de-crowd the scout wanted alongside (the opposite of the 08-07 re-crowd)</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">−1.51k (near-FLAT · feed re-synced, artifact CLEARED)</span>
              <span className="dn-src">live · long 12.34k − short 13.85k = −1.51k · the recurring 08-06 11:06 BJ +9,765 short artifact was CLEARED by a feed re-sync at 08-07 14:51 BJ (Δshort −16,234, Δlong −3,299) · post-re-sync the book has held clean and stable ~17h (net range −1,157 / −2,456), so the CURRENT state is certifiable near-flat · short 13.85k sits ~7.5k below the pre-artifact ~21.37k (08-06 11:05 BJ, the last clean read before the 11:06 artifact) — a genuine cover, not just the artifact unwinding</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs same-clock 24h base</span>
              <span className="dn-v bull">−16,438 → −1,512 · CERTIFIED near-flat (&gt; −9,000)</span>
              <span className="dn-src">RAW same-clock ΔNet +14,926 crosses the 08-07 14:51 BJ feed re-sync (a −16,234 short drop) so the raw 24h delta is not a clean single-book move · but vs the 08-07 note&rsquo;s ex-artifact estimate (≈ −7,129) the clean ΔNet ≈ +5,617 (a 78.8% cover); either way the CURRENT certifiable SM net −1,512 clears the scout&rsquo;s &ldquo;certified SM &gt; −9,000&rdquo; add-leg — first clean SM read since 08-05</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.4% / 28.18%</span>
              <span className="dn-src">GEX median IV vs 30D close-to-close RV (30 returns / 31 closes, logret.std × √365 × 100) · chain richness ~+12.2pt · IV median is a chain-median across instruments, NOT a tradable spread · P/C OI 0.58 (call 206,034 / put 119,056) · 31-close range $62,307 – $66,522 · (29 returns reads 28.23%, marginally higher — RV essentially flat under the reclaim)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+1.70% (above)</span>
              <span className="dn-src">flip $63,833 (ROSE +$659 from $63,174 on 08-06→08-08) · vs live spot $64,920.42 (+1.70%; 64,920.42/63,833 − 1 = 1.704%) / GEX file Deribit idx $65,227 (+2.18%; 65,227/63,833 − 1 = 2.184%, file rounds +2.2%) — both refs positive · headline GEX +100.3M, by-expiry rollup +113.76M (UP from +78.7M / +88.06M on 08-07 — the book RE-GAMMAED positive)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                Demand confirmed and the held scout&rsquo;s add-leg FIRES under the framework. The 08-07 daily closed clear of
                the D-EMA50 cap on the first OI expansion in five days, the SM feed
                re-synced and cleared the recurring artifact to a certifiable near-flat
                book, and every 24h flow read is bid — the three legs the 08-07 note
                required to add the starter all printed
              </span>. Spot is{' '}
              <span className="dn-tag bull">$64,920, +0.89% on 24h</span>; the 08-07 daily
              closed <span className="dn-tag bull">$64,885.40</span> — the highest close
              of the lineage, clearing the{' '}
              <span className="dn-tag bull">D-EMA50 cap $64,642.78 by $243</span> (it
              landed $14.60 under the round ~$64,900 the note named, but decisively above
              the cap, and the in-progress 08-08 bar $64,900.00 and live spot $64,920 both
              sit above $64,900). The demand side finally showed:{' '}
              <span className="dn-tag bull">OI expanded +1.16% (+1,230.0 BTC)</span>, the
              first build after four straight contractions, and the 24h flow is bid across
              the board (spot CVD{' '}
              <span className="dn-tag bull">+2,221.6</span>, futures CVD{' '}
              <span className="dn-tag bull">+423.9</span>, big-print{' '}
              <span className="dn-tag bull">+1,018.9</span>, taker{' '}
              <span className="dn-tag bull">+437.2</span>). The SM tell, impaired three
              runs, RESOLVED clean:{' '}
              <span className="dn-tag bull">the 08-06 11:06 BJ +9,765 short artifact was
              cleared by a feed re-sync at 08-07 14:51 BJ</span>, and the book has held
              stable ~17h at a certifiable{' '}
              <span className="dn-tag bull">net −1,512 (near-flat, &gt; −9,000)</span> —
              short 13.85k is ~7.5k below the pre-artifact ~21.37k (08-06 11:05 BJ), a genuine cover. The
              dealer book RE-GAMMAED more positive (headline{' '}
              <span className="dn-tag bull">+100.3M</span>, rollup{' '}
              <span className="dn-tag bull">+113.76M</span>, flip risen to $63,833, spot
              +1.70% above), and the MTF printed a{' '}
              <span className="dn-tag bull">fresh 1d water-up strong golden cross</span>{' '}
              with the 4h back to golden. But the confirmation is a grind, not an impulse,
              and the caveats stack:{' '}
              <span className="dn-tag bear">funding re-heated a second day (24h mean
              +3.83% → +5.43%, negatives 6 → 0)</span> so the long carry crowded back up,{' '}
              <span className="dn-tag bear">the macro easing reversed (10Y +6bp to 4.69%,
              rates filter FALSE and widened to 14bp)</span>, a{' '}
              <span className="dn-tag bear">fresh 12h ⚡TD9 SELL + a 1h water-up death
              cross</span> flash overbought at the cap, and the +$65k–$68k / +92.56M
              positive-gamma band is a two-sided dampener that caps the upside as much as
              it cushions a fade. Book:{' '}
              <span className="dn-tag">the 0.2R add-leg the 08-07 note pre-authorized FIRES under the framework (0.2R → 0.4R, executed at minimum size)</span>{' '}
              on the demand-confirmed cap re-clear, targeting the $67k–$68k cluster as a
              grind; the chase-short stays STOOD DOWN (floor held, gamma more positive,
              spot +1.70% above flip); and the note turns on whether the reclaim extends
              (a second decisive close above the cap with OI still building) or the
              overbought fast frames + re-heated carry pull spot back under the cap/flip.
            </p>

            <p>
              BTC prints <span className="dn-tag">$64,920</span> live,{' '}
              <span className="dn-tag bull">+0.89%</span> on 24h (the live-tape window; the
              08:01 BJ MTF scan reads +0.91% on its own 24h base — the ~4-min offset and
              different window open account for the small gap), inside a{' '}
              <span className="dn-tag">$65,350 / $64,177.62</span> range (24h high @
              12:55Z 08-07 / 20:55 BJ, low @ 05:24Z 08-07 / 13:24 BJ).{' '}
              <span className="dn-signal">The reclaim resumed and the same-day cap was
              decisively re-cleared</span>: 08-05 closed $64,633.90 (first above the prior
              note&rsquo;s named $64,612 cap, but $1.19 UNDER the risen same-day D-EMA50
              $64,635.09 — a clear of the old level, a kiss of the moving one),
              08-06 gave it back at $64,300.00, and 08-07 closed{' '}
              <span className="dn-tag bull">$64,885.40</span> — a $585 up-day that is the
              decisive same-day cap re-clear and printed the highest close of the lineage. Four daily
              offsets now sit below spot, up from two on 08-07 as the tape reclaimed the
              overhead cluster:{' '}
              <span className="dn-tag bull">D-SMA50 $63,332.85 (+2.51%)</span>,{' '}
              <span className="dn-tag bull">D-EMA20 $64,200.89 (+1.12%)</span>,{' '}
              <span className="dn-tag bull">D-SMA20 $64,427.80 (+0.76%)</span>, and the
              load-bearing{' '}
              <span className="dn-tag bull">D-EMA50 cap $64,642.78 (+0.43%)</span> — the
              cap the 08-06 fade re-lost is back below spot, support-flipped — then a gap
              to{' '}
              <span className="dn-tag bear">D-EMA100 $66,918.43 (−2.99%)</span> and{' '}
              <span className="dn-tag bear">D-SMA100 $68,019.95 (−4.56%)</span>.{' '}
              <span className="dn-em">
                The single close the 08-07 note demanded to ADD — a decisive 1d close
                clear of the cap with OI building and a certified SM net &gt; −9,000 — all
                three printed: 08-07 closed $64,885 above the $64,643 cap, OI expanded
                +1,230, and the re-synced SM book is a certifiable −1,512. The add is
                armed; the question is now whether the reclaim extends toward the $67k–$68k
                cluster or the overbought fast frames pull it back to the cap.
              </span>{' '}
              The 08-06 fork resolved back up: the fade that re-lost the cap on 08-06 was
              itself reclaimed on 08-07, and the book now sits above the cap on a building
              OI base for the first time in the run.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · the SM feed RE-SYNCED (08-07 14:51 BJ) and CLEARED the 08-06 artifact — the current book is a certifiable near-flat −1,512, a genuine cover · OI expanded a first day (+1,230) — demand finally behind price · but funding re-heated and retail de-crowded — a mixed leverage backdrop</span>
            </h2>

            <p>
              <span className="dn-signal">
                The SM tell that was DATA-IMPAIRED for three runs finally cleared — the
                feed re-synced and the current book is certifiable near-flat
              </span>. RAW SM net is{' '}
              <span className="dn-tag bull">−1,512</span> (long 12.34k − short 13.85k) vs
              the same-clock 24h baseline −16,438 — a raw ΔNet of{' '}
              <span className="dn-tag">+14,926</span> that looks like a massive cover. But{' '}
              <span className="dn-em">that raw delta crosses the 08-07 14:51 BJ feed
              re-sync — a single-minute Δshort −16,234 / Δlong −3,299 that dropped short
              from 30.6k to 14.4k in one minute — which is the mirror-image of the 08-06
              11:06 BJ +9,765 artifact clearing</span>. So the raw 24h delta is not a clean
              single-book move. The right read is the CURRENT state: post-re-sync, the book
              has held clean and stable for ~17h (14:51 BJ 08-07 → 08:05 BJ 08-08, net
              range <span className="dn-tag">−1,157 / −2,456</span>), so the snapshot{' '}
              <span className="dn-tag bull">net −1,512 is certifiable</span>. And it is a
              genuine cover, not just the artifact unwinding: short_btc 13.85k sits{' '}
              <span className="dn-em">~7.5k below the pre-artifact ~21.37k level (08-06
              11:05 BJ, the last clean read before the 11:06 artifact)</span>, and vs the 08-07
              note&rsquo;s ex-artifact estimate (≈ −7,129) the clean ΔNet is ≈{' '}
              <span className="dn-tag bull">+5,617, a 78.8% cover</span>. Either framing,
              the certifiable current net −1,512 clears the scout&rsquo;s &ldquo;certified
              SM &gt; −9,000&rdquo; add-leg — the first clean SM read since 08-05, and it
              reads a near-flat book, the deep short gone. SM net trough (most short){' '}
              <span className="dn-tag bear">−16,675 @ 08-07 09:41 BJ</span> is a pre-re-sync
              (still artifact-contaminated) print; net peak (least short){' '}
              <span className="dn-tag bull">−1,157 @ 08-08 01:36 BJ</span> is inside the
              clean post-re-sync window.
            </p>

            <p>
              The leverage side is the mixed part of the tape — the cover-bounce got its
              OI build but not its leverage-off backdrop.{' '}
              <span className="dn-signal">
                Funding re-heated a second straight day and the negatives vanished
              </span>: live <span className="dn-tag">+5.86% ann</span> (field 0.005351/8h ×
              1095), and the 24h mean{' '}
              <span className="dn-tag bear">+5.43% ann</span> (vs +3.83% on 08-07 — a
              +1.60pt re-heat), with the window carrying{' '}
              <span className="dn-tag bear">0 / 1442 negative rows</span> (vs 6 / 1442 on
              08-07 — the negatives are gone again). It is not the runaway cap-press of the
              early lineage (the mean is well under half the +10.95% cap; range{' '}
              <span className="dn-tag">+0.74% / +7.97% ann</span>, max @ 08-08 03:47 BJ /
              08-07 19:47Z, min @ 08-07 08:22 BJ / 00:22Z), but the long carry has crowded
              back up two days running — the leverage-off tailwind the scout leaned on has
              fully reversed. OI Δ{' '}
              <span className="dn-tag bull">+1,230.0 BTC (+1.16%)</span> over 24h — the{' '}
              <span className="dn-em">FIRST expansion after four straight contractions</span>{' '}
              (−628.7 / −326.9 / −1,112.5 / −1,369.6 on 08-04→08-07; 105,749.6 → 106,979.5),
              so positions are finally building behind price. This is the demand
              confirmation the 08-07 note required, and it flips the read: for four days
              the reclaim was a covering / de-gearing grind with no fresh stacking; today
              price is up, OI is up, and the flow is bid — fresh demand, not just covering.
              Retail{' '}
              <span className="dn-tag bull">mkt_long_pct 52.44%</span> from 54.84% — a
              −2.40pt DE-crowd (24h range 51.36 / 55.65), leaning back off the long side
              into the up-move (the opposite of the 08-07 re-crowd). Perp trades a{' '}
              <span className="dn-tag bear">−$30.31 discount</span> to spot at the snap (1h
              mean −$32.18, range −$40.61 / −$20.67; 4h mean −$34.47; 24h mean −$49.57,
              range −$216.09 / +$25.49 — a persistent discount, briefly premium only at the
              highs). 1-min aggressor skew snap{' '}
              <span className="dn-tag bear">−6.0</span> (1h mean −21.59, range −39.2 /
              +14.0) — a sell-aggressor tilt at the snap despite the up-move.{' '}
              <span className="dn-em">
                OI building + SM covered clean + retail de-crowding: three legs turned
                additive to the long. But funding re-heated and the perp holds a discount:
                the demand is spot-led, and the leverage backdrop is crowding the long
                carry back up rather than flushing — a grind-up with a firming carry, not a
                clean leverage-off reclaim.
              </span>
            </p>

            <p>
              Windowed flow says the 24h up-move was bid across the board, with the freshest
              hours flat-to-mixed at the highs.{' '}
              <span className="dn-em">The 24h reads (row window 08-07 08:04 → 08-08 08:05
              BJ, 1,442 rows — one row longer than the exact same-clock window, the same
              disclosed offset the 4h/1h windows carry) are all bid against a positive
              price</span>: 24h price{' '}
              <span className="dn-tag bull">+0.89%</span>, OI{' '}
              <span className="dn-tag bull">+1,230.0 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +2,221.6</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +423.9</span>, big-print{' '}
              <span className="dn-tag bull">+1,018.9 BTC / 522 big-print minutes</span>,
              taker-net <span className="dn-tag bull">+437.2</span> —{' '}
              <span className="dn-em">
                spot aggressor flow, futures aggressor flow, big prints and takers all
                bought while OI built: a clean bid-and-build up-move, demand behind price
                (no CVD resets in the window this run, so the 24h deltas are clean)
              </span>. ~4h (row window 04:04 → 08:05 BJ, one row longer than the exact
              clock): price{' '}
              <span className="dn-tag bear">−0.10%</span>, OI{' '}
              <span className="dn-tag bull">+24.1 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,092.4</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −272.3</span>, big-print{' '}
              <span className="dn-tag bear">−87.6 BTC / 53 prints</span>,
              taker-net <span className="dn-tag bear">−228.5</span> —{' '}
              <em>spot bid but futures / takers offered into a flat price at the highs —
              spot leading, futures fading the top</em>. ~1h (row window 07:04 → 08:05 BJ,
              one row longer than the exact clock): price{' '}
              <span className="dn-tag">+0.06%</span>, OI{' '}
              <span className="dn-tag bear">−37.6 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +420.5</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +48.3</span>, big-print{' '}
              <span className="dn-tag bull">+22.6 BTC / 8 prints</span>,
              taker-net <span className="dn-tag bull">+43.6</span> —{' '}
              <em>a quiet, modestly-bid hour with OI ticking off — a pause at the highs</em>.
              The 24h was cleanly bid-and-build; the 4h shows spot leading while futures
              fade the top; the 1h is a quiet pause. The demand is real but spot-led, and
              the freshest hours are resting rather than extending.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · regime eased to 5/9 cycle-reversal (JT&lt;0) · a fresh 1d water-up STRONG golden cross (刚印, DIF&gt;0) joins the 4h back to golden — a six-frame golden cluster + HTF bottom-div (8h/12h/1w) say the slow book leans up · but a fresh 12h ⚡TD9 SELL + a 1h water-up death cross + a 4-frame top-div flash overbought at the cap</span>
            </h2>

            <p>
              <span className="dn-signal">
                The slow structure firmed — a fresh 1d water-up strong golden cross and the
                4h back to golden lift a six-frame golden cluster, while the fast frames
                flash overbought at the cap
              </span>. The regime tag eased to{' '}
              <span className="dn-tag">5/9 周期反转体制 (JT&lt;0) —
              cycle-reversal / mean-reversion</span> (from 08-07&rsquo;s 6/9 — one fewer
              reversal frame, still JT&lt;0), and the header net-read is unchanged at{' '}
              <span className="dn-tag bear">高级别偏空 · 短线反弹 (HTF lean-short,
              short-term bounce)</span> with the ⚠ HTF bottom-divergence cluster now called
              on 8h/12h/1w. The bull tell is fresh:{' '}
              <span className="dn-tag bull">1d water-up STRONG golden cross (刚印 just
              printed, 1 bar, DIF +69.2 above water)</span> — a bull-continuation cross on
              the daily — and the 08-07 fresh 4h death cross is GONE, replaced by a{' '}
              <span className="dn-tag bull">4h water-up golden cross (4b)</span>. The
              water-down/up golden cluster now spans{' '}
              <span className="dn-tag bull">4h (4b) / 8h (14b) / 12h (7b) / 1d (1b) / 3d
              (9b) / 1w (2b)</span> — six frames — and the bottom-divergence cluster holds
              on <span className="dn-tag bull">30m / 1h / 8h / 12h / 1w</span> (five frames,
              HTF-heavy). Against that, the fast frames warn overbought: a{' '}
              <span className="dn-tag bear">fresh 12h ⚡TD9 SELL (刚印)</span> — the
              overbought-at-the-cap flag moved up from the 8h — plus a{' '}
              <span className="dn-tag bear">1h water-up death cross (刚印, 1 bar, DIF
              +98.8)</span>, and the top-divergence cluster spans 15m/1h/4h/1d (four
              frames). The 15m and 1M both carry{' '}
              <span className="dn-tag bull">⚡TD9 BUY</span> (oversold hints at the frame
              extremes).{' '}
              <span className="dn-em">
                Read straight: the slow book turned up (fresh 1d strong golden, 4h back to
                golden, six-frame golden cluster, HTF bottom-div), which is the structural
                confirmation the scout add wanted. But the fast frames are overbought right
                at the cap (fresh 12h TD9 sell, 1h death cross, four-frame top-div), which
                is why the add is a grind toward the cluster, not a chase — expect the cap
                zone to be defended two-sided before it clears.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>read</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,874</td><td className="num">49.1</td><td className="neut">death (water-up) 6b</td><td className="bull">above (just crossed)</td><td>Sell 3</td><td>caution · top-div hid</td></tr>
                <tr><td>30m</td><td className="num">64,874</td><td className="num">51.9</td><td className="neut">death (water-up) 17b</td><td className="bull">above 31b</td><td>Buy 6</td><td>lean-long · bot-div</td></tr>
                <tr><td>1h</td><td className="num">64,874</td><td className="num bull">55.9</td><td className="bear">death (water-up) 刚印 (just printed)</td><td className="bull">above 16b</td><td>Buy 2</td><td>caution · top-div · bot-div</td></tr>
                <tr><td>4h</td><td className="num">64,874</td><td className="num bull">60.7</td><td className="bull">golden (water-up) 4b</td><td className="bull">above 15b</td><td>Buy 1</td><td>chop · top-div</td></tr>
                <tr><td>8h</td><td className="num">64,874</td><td className="num bull">58.9</td><td className="bull">golden (water-dn) 14b</td><td className="bull">above 2b</td><td>Sell 3</td><td>lean-up · bot-div</td></tr>
                <tr><td>12h</td><td className="num">64,874</td><td className="num bull">56.4</td><td className="bull">golden (water-dn) 7b</td><td className="bull">above 2b</td><td>⚡ TD9 SELL</td><td>caution · bot-div</td></tr>
                <tr><td>1d</td><td className="num">64,874</td><td className="num">54.3</td><td className="bull">golden (water-up) 刚印 (just printed)</td><td className="neut">in cloud 62.3–67.9k 19b</td><td>Sell 5</td><td>lean-short · top-div (fresh golden)</td></tr>
                <tr><td>3d</td><td className="num">64,874</td><td className="num">47.2</td><td className="bull">golden (water-dn) 9b</td><td className="bear">below 22b</td><td>Sell 2</td><td>lean-short · trend</td></tr>
                <tr><td>1w</td><td className="num">64,874</td><td className="num">40.9</td><td className="bull">golden (water-dn) 2b</td><td className="bear">below 27b</td><td>Sell 1</td><td>caution · bot-div · SMA200 +1.75%</td></tr>
                <tr><td>1M</td><td className="num">64,874</td><td className="num">44.3</td><td className="neut">—</td><td className="bull">above 30b</td><td>⚡ TD9 BUY</td><td>lean-long · trend</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 08:01 BJ (00:01Z) scan (rolling latest
                    file; archived verbatim at
                    /opt/desk-note/snapshots/2026-08-08-0007/). Header alerts:{' '}
                    <em>1d water-up strong golden cross (just printed, DIF +69.2), 1w
                    water-down golden cross (2b), 1h water-up death cross (just printed,
                    DIF +98.8); 12h ⚡TD9 SELL and 1M ⚡TD9 BUY (fresh)</em>; six-frame
                    golden cluster 4h/8h/12h/1d/3d/1w. Top-div 4: 15m/1h/4h/1d ·
                    bottom-div 5: 30m/1h/8h/12h/1w. Regime 5/9 cycle-reversal (JT&lt;0);
                    overall HTF lean-short, short-term bounce. Scan spot $64,874, 24h
                    +0.91%, H/L $65,358 / $64,128, qVol $8.06B, net tally 4 long / 2 short
                    / 4 neutral. Closes are in-progress bars; treat every value as
                    provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix reads a reclaim that has re-cleared its cap and flipped it to
              support. Spot $64,920 sits above four daily offsets (up from two on 08-07):{' '}
              <span className="dn-tag bull">D-SMA50 $63,332.85 (+2.51%)</span>,{' '}
              <span className="dn-tag bull">D-EMA20 $64,200.89 (+1.12%)</span>,{' '}
              <span className="dn-tag bull">D-SMA20 $64,427.80 (+0.76%)</span>, and the
              load-bearing{' '}
              <span className="dn-tag bull">D-EMA50 cap $64,642.78 (+0.43%)</span> — the cap
              the 08-06 fade re-lost is back below spot — with the in-progress{' '}
              <span className="dn-tag bull">W-SMA200 $63,760.87 (+1.82%)</span> and the
              settled 200W cycle floor{' '}
              <span className="dn-tag bull">$63,533.52 (+2.18%)</span> below. Immediately
              overhead the gap opens up:{' '}
              <span className="dn-tag bear">D-EMA100 $66,918.43 (−2.99%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $68,019.95 (−4.56%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,230.21 (−6.23%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,401.99 (−6.46%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $69,625.17 (−6.76%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $68,987.73 (−5.90%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $68,575.11 (−5.33%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $70,260.43 (−7.60%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $72,347.66 (−10.27%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $73,980.54 (−12.25%)</span>.
              Far above and disused: W-SMA150 $76,881.69 (−15.56%), W-EMA50 $77,816.31
              (−16.57%), W-EMA100 $78,777.14 (−17.59%), W-SMA50 $83,359.14 (−22.12%),
              W-SMA100 $88,662.18 (−26.78%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-08-08 00:06Z (close $64,900.00);
                offsets recomputed against live spot $64,920.42. Displayed MA levels are
                $-rounded; offsets computed from exact series values. The weekly ladder is
                computed off the full 2019–2026 wildcard (362 right-labeled weekly bars),
                so W-SMA200 IS computable: $63,760.87 in-progress (+1.82%) and $63,533.52
                settled — the settled value being the trap-watch weekly-close 200-SMA
                (recomputed 08-03 00:11Z, the floor used for closes throughout). W-EMA200
                $68,575.11 (−5.33%) and W-EMA150 $73,980.54 (−12.25%) are full-history
                EMAs. Daily closes: 08-03 $63,497.20, 08-04 $64,075.50, 08-05 $64,633.90,
                08-06 $64,300.00, 08-07 $64,885.40 — the 08-07 close is $585 above the
                08-06 close and $243 above the D-EMA50 cap $64,642.78: the D-EMA50 cap —
                first cleared only vs the prior note&rsquo;s named $64,612 level on 08-05
                (08-05 closed $64,633.90, $1.19 UNDER that day&rsquo;s D-EMA50 $64,635.09,
                so not yet a same-day clear) and given back on 08-06 — is now decisively
                re-cleared same-day and flipped to support, the highest close of the
                lineage. The 08-08 bar is in progress at $64,900.00.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book RE-GAMMAED positive · headline +100.3M / rollup +113.76M (was +78.7M / +88.06M) · flip risen to $63,833, spot +1.70% above · the $65k wall re-thickened to +23.49M at spot and the +$65k–$68k band totals +92.56M — a heavier two-sided dampener, crash-put $60k eased to −16.15M, no negative-gamma chunk anywhere on the strip</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book re-gammaed positive after 08-07&rsquo;s single-day dip —
                headline +6.3M → +38.1M → +68.6M → +106.0M → +108.0M → +78.7M → +100.3M
                across 08-02 → 08-08 — deepening the dampener into the reclaim
              </span>. Headline GEX is{' '}
              <span className="dn-tag bull">+100.3M / 1%</span> (was +78.7M on 08-07) and
              the by-expiry rollup is{' '}
              <span className="dn-tag bull">+113.76M</span> (was +88.06M; the by-expiry
              strip sums to the gex_summary net_gex). The 0-γ flip rose{' '}
              <span className="dn-tag">$63,174 → $63,833 (+$659)</span>, and spot $64,920
              sits <span className="dn-tag bull">+1.70% above flip</span> on
              spot-denominated math (64,920.42 / 63,833 − 1 = +1.704%); the GEX file&rsquo;s
              Deribit index $65,227 ($307 above live spot) reads{' '}
              <span className="dn-tag bull">+2.18%</span> (65,227 / 63,833 − 1 = +2.184%,
              file rounds +2.2%) — both references positive, spot well above the flip on
              both. The wall map is a heavier positive band right over spot with the
              crash-put shelf below:{' '}
              <span className="dn-tag bull">$65k +23.49M</span> (heaviest wall, at spot,
              re-thickened from +16.47M on 08-07),{' '}
              <span className="dn-tag bull">$68k +20.61M</span>,{' '}
              <span className="dn-tag bull">$70k +20.03M</span>,{' '}
              <span className="dn-tag bull">$66k +19.64M</span>,{' '}
              <span className="dn-tag bull">$67k +16.72M</span>,{' '}
              <span className="dn-tag bull">$65.5k +12.10M</span>,{' '}
              <span className="dn-tag bull">$72k +10.12M</span>,{' '}
              <span className="dn-tag bull">$80k +8.82M</span>, with the negatives the
              crash-put shelf below:{' '}
              <span className="dn-tag bear">$60k −16.15M</span> (heaviest negative, the
              crash-put, eased from −17.57M on 08-07) and{' '}
              <span className="dn-tag bear">$62k −7.68M</span>.{' '}
              <span className="dn-em">
                The five large strikes across the +$65k–$68k positive band total +92.56M
                (+23.49M / +12.10M / +19.64M / +16.72M / +20.61M stacked) — heavier than
                08-07&rsquo;s +65.82M, with the $65k wall re-taking the lead as the
                dominant single strike right at spot. Dealers are bid into a fade and offer
                into a squeeze across the reclaim zone, and the clamp re-tightened — the
                dampener that thinned on 08-07 is back on, which cuts both ways: a heavier
                cushion under a fade, but also heavier ceiling pressure on the bounce, so
                the add is a grind through the band, not an impulse
              </span>. Near-dated: 8AUG26 0.3DTE{' '}
              <span className="dn-tag bull">+12.45M</span> is still on the book (settles
              08:00Z today, ~8h after this snap) — a positive front, no near-dated negative
              amplifier. Forward strip: 9AUG 1.3 +14.91M, 10AUG 2.3 +6.87M, 11AUG 3.3
              +2.40M, 14AUG 6.3 +15.89M, 21AUG 13.3 +15.72M, 28AUG 20.3 +23.72M, 25SEP 48.3
              +13.00M, 30OCT 83.3 +1.45M, 25DEC 139.3 +5.21M, 26MAR27 230.3 +1.42M, 25JUN27
              321.3 +0.72M — the entire forward strip is positive; there is no
              negative-gamma chunk to flip the book bear.
            </p>

            <p>
              IV median across the chain is{' '}
              <span className="dn-tag">40.4%</span> against 30D close-to-close RV of{' '}
              <span className="dn-tag">28.18%</span> — chain-level richness{' '}
              <span className="dn-tag">~+12.2pt</span>.{' '}
              <span className="dn-em">
                A chain-median across instruments, not a tradable spread; the instrument
                count on the chain is 830, but expiry-/strike-level vega, skew and term
                structure remain not loaded, so the vol read stays framework-only.
              </span>{' '}
              Put/Call OI ratio 0.58 (call OI 206,034 vs put OI 119,056 — a call-heavy
              book, consistent with the positive-gamma dampener). RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log returns (= 31
              consecutive daily closes) anchored to parquet last bar 2026-08-08 00:06Z;
              range $62,307 – $66,522 over the underlying 31-close window. (For reference,
              last 29 returns / 30 closes reads 28.23%, marginally higher than the
              30-return 28.18% — RV is essentially flat as the tape reclaims under the
              cluster.)
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Tier-1 easing REVERSED (10Y +6bp to 4.69%, TIPS +2bp to 2.43%) · rates filter FALSE and WIDENED to 14bp · HY OAS eased −4bp to 2.71% (risk-on) · MOVE dark a 4th render · cross-asset IDIOSYNCRATIC but BTC turned GREEN on 7d and its NQ lag narrowed to −2.47pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro easing reversed — 10Y jumped +6bp and real-rates ticked up — so
                the reclaim-long rates filter holds FALSE and WIDENED to 14bp, further from
                the gate
              </span>. Dashboard render is 2026-08-07 22:15Z, ~1.9h before the snapshot. US
              10Y nominal{' '}
              <span className="dn-tag bear">4.69% (+6.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.24</span> — EXTREME RISK-OFF tag, rose after
              a flat 08-07. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.43% (+2.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.53</span> — still EXTREME RISK-OFF, ticked
              up. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.28% (−1.0bp)</span>. HY OAS{' '}
              <span className="dn-tag bull">2.71% (−4.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.03</span> — still loose, tightened back in
              (risk-on). MOVE bond vol{' '}
              <span className="dn-tag stale">unavailable (fetch failed)</span> — dark a
              fourth render. DXY{' '}
              <span className="dn-tag bear">99.96 (+0.27)</span> — firmer, flat vs 08-07.
              Fed net liquidity{' '}
              <span className="dn-tag">$5.840T (flat)</span>, no fresh weekly print. US-JP
              10Y spread{' '}
              <span className="dn-tag bear">2.02% (+6.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag bull">157.74 (−0.66)</span> (yen firmer). NFCI −0.529
              (loose, stale).{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) stays FALSE at 4.69%
                and widened to 14bp from the gate (was 8bp on 08-07) — the three-day easing
                (4.75% → 4.70% → 4.63%) that paused on 08-07 has now reversed up. 10Y and
                TIPS carry EXTREME RISK-OFF regime z (+2.24 / +2.53); the credit side eased
                (HY OAS −4bp, risk-on) but the rates side moved the wrong way for the
                reclaim. MOVE is dark a fourth render, so bond-vol confirmation is
                unavailable. The macro is a headwind, not a tailwind, for the reclaim — the
                scout stands on its BTC-internal legs.
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
                <tr><td>US 10Y nominal</td><td className="num">4.69%</td><td className="num bear">+6.0bp</td><td className="num bear">+2.24</td><td className="bear">EXTREME risk-off · easing reversed</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.43%</td><td className="num bear">+2.0bp</td><td className="num bear">+2.53</td><td className="bear">EXTREME risk-off · ticked up</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.28%</td><td className="num bull">−1.0bp</td><td className="num">—</td><td className="neut">easing</td></tr>
                <tr><td>HY OAS</td><td className="num">2.71%</td><td className="num bull">−4.0bp</td><td className="num bull">−1.03</td><td className="bull">loose · tightened in (risk-on)</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.529</td><td className="num">+0.00</td><td className="num bull">—</td><td className="stale">loose · stale</td></tr>
                <tr><td>MOVE bond vol</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">unavailable · fetch failed (4th render)</td></tr>
                <tr><td>DXY</td><td className="num">99.96</td><td className="num bear">+0.27</td><td className="num">+0.89</td><td className="bear">firmer</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.840T</td><td className="num">flat</td><td className="num bear">−0.70</td><td className="neut">no fresh weekly print</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.74</td><td className="num bull">−0.66</td><td className="num">+0.34</td><td className="bull">yen firmer</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.02%</td><td className="num bear">+6.0bp</td><td className="num">−0.25</td><td className="neut">widened</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7372</td><td className="num bull">−0.01</td><td className="num bull">−1.48</td><td className="bull">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly, 67d)</td><td className="num bear">+2.42</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.204</span>{' '}
              (below the 0.25 NORMAL floor, eased slightly from 08-07&rsquo;s 0.212 —{' '}
              <span className="dn-tag">IDIOSYNCRATIC regime</span>, assets moving on their
              own drivers). BTC&rsquo;s ties to the risk complex: TSLA{' '}
              <span className="dn-tag">+0.473</span> (top), NQ{' '}
              <span className="dn-tag">+0.471</span>, SP500{' '}
              <span className="dn-tag">+0.378</span>, NVDA{' '}
              <span className="dn-tag">+0.327</span>, JP225 +0.283, COPPER +0.250, GOLD
              +0.247, SILVER +0.234, PLAT +0.226, AMZN +0.214, URNM +0.183. 7d performance
              is the loud line, and BTC turned green and re-joined the tape:{' '}
              <span className="dn-tag bull">BTC +3.12%</span> — back in the green (was
              −0.63% on 08-07, the lone red), while the tape stayed strong: NQ{' '}
              <span className="dn-tag bull">+5.59%</span>, SP500{' '}
              <span className="dn-tag bull">+3.78%</span>, JP225{' '}
              <span className="dn-tag bull">+4.06%</span>, and the mega-caps and metals led
              — NVDA{' '}
              <span className="dn-tag bull">+12.40%</span>, URNM{' '}
              <span className="dn-tag bull">+11.36%</span>, SILVER{' '}
              <span className="dn-tag bull">+10.58%</span>, MSFT{' '}
              <span className="dn-tag bull">+8.29%</span>, PALL{' '}
              <span className="dn-tag bull">+8.17%</span>, GOLD{' '}
              <span className="dn-tag bull">+7.55%</span>, PLAT{' '}
              <span className="dn-tag bull">+6.89%</span>, META{' '}
              <span className="dn-tag bull">+6.76%</span>, TSLA{' '}
              <span className="dn-tag bull">+6.14%</span>. Energy soft: CL{' '}
              <span className="dn-tag bear">−11.82%</span>, BRENT{' '}
              <span className="dn-tag bear">−9.80%</span>, NGAS{' '}
              <span className="dn-tag bear">−4.00%</span>; JPY −0.21% the other red.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine narrowed to ~−2.47pt (BTC +3.12% vs
                NQ +5.59%, from −4.48pt on 08-07) — BTC turned green and re-participated,
                closing the gap from a red-in-a-green-week to merely lagging a strong week.
                The regime is IDIOSYNCRATIC (|r| 0.204), so the tape is not driving BTC
                either way; the reclaim is BTC-internal, and the scout stands on its
                (now-clean) positioning legs, not a macro tailwind
              </span>. JGB monthly 2.67% is stale — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · book FIRES the 08-07-pre-authorized SCOUT LONG add-leg (0.2R → 0.4R, minimum size) · the add trigger fired — cap re-cleared on the 08-07 close, OI expanded first day, SM certified near-flat after the feed re-synced · chase-short STOOD DOWN · the reclaim is a grind through the positive-gamma band, not an impulse</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 08-07 note held a 0.2R scout starter and named one add path — a
                demand-confirmed cap re-clear with OI building and a certified SM read.
                All three legs fired, so the book adds
              </span>. The ADD armed clean: the 08-07 daily closed{' '}
              <span className="dn-tag bull">$64,885.40</span> — $243 above the D-EMA50 cap
              $64,642.78, the highest close of the lineage ($14.60 under the round ~$64,900
              the note named, but decisively above the cap, with the in-progress 08-08 bar
              and spot both above $64,900) — OI expanded{' '}
              <span className="dn-tag bull">+1,230.0 BTC (+1.16%)</span> for the first time
              in five days, and the SM tell, impaired three runs, resolved to a{' '}
              <span className="dn-tag bull">certifiable near-flat −1,512</span> after the
              08-07 14:51 BJ feed re-sync cleared the 08-06 artifact — clearing the
              &ldquo;certified SM &gt; −9,000&rdquo; leg. The 24h flow is bid across the
              board (spot CVD +2,221.6, futures CVD +423.9, big +1,018.9, taker +437.2),
              and the MTF printed a fresh 1d water-up strong golden cross with the 4h back
              to golden. So the book{' '}
              <span className="dn-em">fires the 0.2R add-leg the 08-07 note pre-authorized, carrying the scout to its framework-permitted 0.2R → 0.4R at minimum size</span>,
              targeting the $67k–$68k cluster as a grind through the +92.56M positive-gamma
              band. The chase-short stays STOOD DOWN — the floor held, gamma re-gammaed
              more positive (+100.3M), and spot is +1.70% above the flip. The caveats keep
              the add measured, not aggressive: funding re-heated a second day, the macro
              rates filter widened, and the fast frames flash overbought at the cap.
            </p>

            <div className="dn-trade">
              <span className="dn-side bull">scout · LONG · framework add-leg FIRED (0.2R → 0.4R, the 08-07 pre-authorized path, minimum size) · add trigger met (cap re-cleared, OI +1,230, SM certified near-flat) · grind through the +92.56M gamma band</span>
              <div className="dn-trade-name">
                Cover-bounce scout — added: the demand-confirmed cap re-clear finally printed, the SM feed cleared its artifact to a certifiable cover, and OI built behind price for the first time in the run
              </div>
              <div className="dn-thesis">
                The 08-06 note armed this starter and the 08-07 note held it through a
                failed cap-kiss on a hair-trigger. This run confirmed it. The ADD trigger
                fired on all three legs: the 08-07 daily closed $64,885 ($243 clear of the
                $64,643 D-EMA50 cap, the highest close of the lineage), OI expanded +1,230
                (the first build after four contractions), and the SM feed re-synced at
                08-07 14:51 BJ — clearing the recurring 08-06 artifact — to a certifiable
                near-flat −1,512 (a genuine cover, short ~7.5k below the pre-artifact
                level). The dealer book re-gammaed more positive (+100.3M / +113.76M
                rollup, flip risen to $63,833, spot +1.70% above), the 24h flow is bid, and
                the MTF turned up (fresh 1d strong golden cross, 4h back to golden,
                six-frame golden cluster, HTF bottom-div). Caveats keep it a grind: funding
                re-heated (24h mean +3.83% → +5.43%, negatives 6 → 0), the macro rates
                filter widened to 14bp FALSE, and the fast frames are overbought at the cap
                (fresh 12h TD9 SELL, 1h death cross, 4-frame top-div). Fire the 0.2R add-leg
                (framework path 0.2R → 0.4R) at minimum size; target the cluster as a grind,
                not a chase.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">position (framework add-leg fired)</span><span className="dn-lvl-v bull">framework-permitted 0.4R total — 0.2R starter from ~$64,620 (08-06 arming) + 0.2R add-leg at ~$64,900 (08-08 cap re-clear, the 08-07 pre-authorized add path); blended entry ~$64,760, held at minimum size</span></div>
                <div><span className="dn-lvl-k">add trigger (FIRED)</span><span className="dn-lvl-v bull">1d close clear of the D-EMA50 cap ($64,885 &gt; $64,643, +$243) AND OI building (+1,230, 4-day contraction reversed) AND a CERTIFIED SM net &gt; −9,000 (−1,512, feed re-synced) — all three met</span></div>
                <div><span className="dn-lvl-k">stop (hair-trigger)</span><span className="dn-lvl-v bear">1d close &lt; $63,833 flip (working, risen from $63,174) or &lt; $63,533 200W floor (hard) — OR a CERTIFIED SM roll-back-short (clean feed, ex-artifact turns net-seller)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$66,918 (D-EMA100) then $68,020 (D-SMA100) — through the +$65k–$68k / +92.56M positive-gamma band; treat as a grind, expect the cap zone defended two-sided</span></div>
                <div><span className="dn-lvl-k">R/R (add leg)</span><span className="dn-lvl-v">add ~$64,900, stop $63,833 flip = ~$1,067 risk; first target $66,918 = ~$2,018 ≈ 1.89:1; second target $68,020 = ~$3,120 ≈ 2.92:1 — take half at the D-EMA100</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> the add is measured, not aggressive — the demand
                confirmed but the leverage backdrop did not (funding re-heated, retail the
                only leverage-off leg), and the fast frames are overbought at the cap into
                a heavier positive-gamma dampener. Take half at the D-EMA100 $66,918; do
                NOT chase into the cluster. Cut the whole position on the first certified
                stop — a 1d close below the $63,833 flip / $63,533 floor, or a certified SM
                roll-back-short. A second failed test of the cap (a 1d close back under
                $64,643 with OI rolling back over) trims the add back to the starter.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">flat · chase-short · STOOD DOWN · floor held, gamma re-gammaed +100.3M, spot +1.70% above flip, SM covered clean</span>
              <div className="dn-trade-name">
                Chase-short — stood down: the reclaim re-cleared the cap, the book re-gammaed more positive, and the SM feed cleared to a cover — every leg points the wrong way
              </div>
              <div className="dn-thesis">
                The chase-short is gated on a flip/old-floor break ($63,833 flip / $63,311
                old floor) with SM short AND aggregate GEX flipping negative. All three
                point the wrong way and further wrong than 08-07: spot is +1.70% above the
                risen flip (the tape reclaimed the cap, not broke the flip), the dealer
                book re-gammaed to +100.3M headline / +113.76M rollup — heavier than 08-07,
                a positive dampener with no negative-gamma chunk anywhere on the forward
                strip out to 25JUN27 — and the SM feed cleared its artifact to a certifiable
                cover (net −1,512), not a re-short. With no leg armed, the short stands down;
                the crash-put shelf at $60k has eased to −16.15M (from −17.57M), leaving
                marginally less cascade target.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm trigger</span><span className="dn-lvl-v bear">1d close &lt; $63,833 flip / $63,311 old floor AND aggregate GEX flipping negative (a fresh negative-gamma chunk inside the front expiries) AND a CERTIFIED SM short (clean feed)</span></div>
                <div><span className="dn-lvl-k">SM leg (now clean)</span><span className="dn-lvl-v bull">the 08-06 feed artifact CLEARED at 08-07 14:51 BJ; SM is a certifiable near-flat −1,512 (a cover), so the SM-short leg is not armed — it would need a fresh certified roll-back-short</span></div>
                <div><span className="dn-lvl-k">targets on re-arm</span><span className="dn-lvl-v">$60k (−16.15M crash-put shelf), with $62k (−7.68M) between — both eased vs 08-06</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no short into a +100.3M positive-gamma book with the 200W floor holding, price +1.70% above the risen flip, and SM covered clean</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the entire forward GEX strip is positive (no negative-gamma
                chunk out to 25JUN27); a gamma flip would require a fresh negative chunk to
                build, not just spot drifting down. The book re-gammaed heavier (+78.7M →
                +100.3M), which thickens the dampener both ways — a fade would meet more
                cushion. Until a negative chunk actually prints and a certified SM re-short
                appears, the short has no leg.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · the reclaim RESUMED and re-cleared the cap on building OI · watch for the extension or a failed second test</span>
              <div className="dn-trade-name">
                Reclaim watch — RESUMED: the cap re-lost on 08-06 was re-cleared on 08-07, this time on an expanding OI base with SM covered clean
              </div>
              <div className="dn-thesis">
                The 08-07 note framed a stalled reclaim on an impaired SM tell as a
                hold-and-wait, turning on whether spot re-cleared the cap on building OI
                (arms the add) or a certified stop printed. It re-cleared: the 08-07 daily
                closed $64,885 above the $64,643 cap, OI expanded +1,230 (the 4-day
                contraction reversed), the SM feed re-synced to a certifiable cover, and the
                24h flow is bid — the demand confirmation that never showed for four days
                finally printed. The 08-07 note&rsquo;s pre-authorized 0.2R add-leg has fired,
                so the scout carries its framework-permitted 0.4R total at minimum size,
                not a fresh directional press. The next watch is whether the reclaim extends (a second decisive
                close above the cap toward the $67k–$68k cluster with OI still building) or
                the fast-frame overbought + re-heated carry pull spot back under the cap on
                a failed second test.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">bull extension</span><span className="dn-lvl-v bull">a second 1d close above the D-EMA50 cap $64,643 with OI continuing to build and funding NOT running to the cap — carries the add toward $66,918 (D-EMA100) then $68,020 (D-SMA100)</span></div>
                <div><span className="dn-lvl-k">bear resolution</span><span className="dn-lvl-v bear">1d close &lt; $63,833 flip with a certified SM roll-back-short — cut the scout, watch the chase-short re-arm if gamma also flips negative</span></div>
                <div><span className="dn-lvl-k">failed second test</span><span className="dn-lvl-v bear">a 1d close back under the $64,643 cap with OI rolling back over — trim the add back to the 0.2R starter; the reclaim stalled a second time</span></div>
                <div><span className="dn-lvl-k">slow-frame tell</span><span className="dn-lvl-v bull">fresh 1d water-up strong golden cross + 4h back to golden + six-frame golden cluster (4h/8h/12h/1d/3d/1w) + HTF bottom-div (8h/12h/1w) — the slow book turned up, confirming the reclaim</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a confirmed reclaim on a now-clean positioning
                tell is an add, but a measured one — the demand confirmed while the leverage
                backdrop (re-heated funding) and the macro (rates filter widened) did not,
                and the fast frames are overbought at the cap into a heavier positive-gamma
                dampener. Add at minimum size, take half at the first target, and resolve
                on data: a second decisive close above the cap extends; a failed second test
                or a certified SM roll-back-short trims or cuts.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the add trigger fired on all three legs (cap re-cleared, OI built, SM certified) so the framework add-leg fires (0.2R → 0.4R, minimum size) · the note turns on whether the reclaim extends toward the $67k–$68k cluster or the overbought fast frames + re-heated carry pull spot back under the cap on a failed second test</span>
            </h2>

            <p>
              Of the 08-07 decision conditions: the scout-ADD path FIRED — the 08-07 daily
              closed $64,885 (clear of the $64,643 cap), OI expanded +1,230 (the 4-day
              contraction reversed), and SM is now a certified near-flat −1,512 (&gt;
              −9,000) after the feed re-synced; the scout-CUT path DID NOT FIRE — spot held
              well above the flip and floor and the SM tell certified a cover, not a
              re-short; the chase-short re-arm DID NOT FIRE — spot sits +1.70% above the
              risen $63,833 flip and gamma re-gammaed more positive (+100.3M); the SM feed
              artifact RESOLVED — the 08-06 11:06 BJ step was cleared by the 08-07 14:51 BJ
              re-sync, and the current book is certifiable. <em>The held scout&rsquo;s add
              trigger fired clean; the book adds and the resolution turns to whether the
              reclaim extends or fails a second test.</em>{' '}
              The conditions today re-set around a framework-permitted 0.4R scout (the 08-07
              note&rsquo;s pre-authorized 0.2R add-leg, fired at minimum size) on
              a now-clean SM tell:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Cover-bounce scout (long) — ADDED, extension trigger</td><td className="bull">a second 1d close above the D-EMA50 cap $64,643 with OI continuing to build AND funding not running to the cap</td><td>carry the scout at its framework-permitted size (0.2R starter + fired 0.2R add-leg, minimum size); scale toward $66,918 (D-EMA100) then $68,020 (D-SMA100), take half at the first target</td></tr>
                <tr><td>Scout stop / cut (hair-trigger)</td><td className="bear">1d close &lt; $63,833 flip (working) or &lt; $63,533 200W floor (hard) — OR a CERTIFIED SM roll-back-short once confirmed on a clean feed</td><td>cut the whole scout position on the first certified stop</td></tr>
                <tr><td>Failed second test of the cap</td><td className="bear">1d close back under $64,643 (D-EMA50) with OI rolling back over</td><td>trim the add back to the 0.2R starter — the reclaim stalled a second time</td></tr>
                <tr><td>Chase-short (short) — re-arm</td><td className="bear">1d close &lt; $63,833 flip / $63,311 old floor AND aggregate GEX flipping negative AND a certified SM short</td><td>reassess chase-short only after a fresh audited trigger — no standing size; framework target $60k (−16.15M crash-put)</td></tr>
                <tr><td>200W cycle floor lost</td><td className="bear">weekly close &lt; $63,533.52 (200W) — would end the 5-week above-floor streak (next weekly close 08-09, tomorrow)</td><td>cycle-support break — separate reassessment; the reclaim read ends</td></tr>
                <tr><td>SM feed artifact (RESOLVED)</td><td className="bull">the 08-06 11:06 BJ +9,765 step cleared by the 08-07 14:51 BJ re-sync; ~17h clean stable book since</td><td>the SM tell is certifiable again — act on the clean read (−1,512, a cover); re-flag only if a fresh single-minute step appears</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">10Y &lt; 4.55% close — FALSE at 4.69% (14bp to fire, WIDENED from 8bp — easing reversed)</td><td>standalone filter FALSE and moving the wrong way; the macro is a headwind, the reclaim is BTC-internal</td></tr>
                <tr><td>BTC-vs-TradFi lag</td><td className="bull">BTC +3.12% vs NQ +5.59% 7d = −2.47pt lag · |r| 0.204 IDIOSYNCRATIC</td><td>BTC turned green and re-participated (was the lone red); regime below NORMAL so the tape is not driving BTC — the reclaim is BTC-internal</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the reclaim extends — a second decisive 1d close above the D-EMA50
                cap $64,643 with OI continuing to build and funding not running to the cap,
                carrying the scout (framework-permitted full size) toward the $67k–$68k cluster — or whether the
                overbought fast frames (fresh 12h TD9 SELL, 1h death cross, 4-frame
                top-div) and the re-heated carry pull spot back under the cap on a failed
                second test (trim the add back to the starter), or a clean stop prints (a
                1d close below the $63,833 flip / $63,533 floor, or a certified SM
                roll-back-short — cut the whole position, and if gamma also flips negative
                watch the chase-short re-arm toward the $60k −16.15M crash-put, though the
                +113.76M positive strip and the 200W floor leave a dampened path)
              </span>. Until one of those prints, this note runs as written: the held scout
              added on a demand-confirmed cap re-clear — the 08-07 daily closed $64,885
              above the cap, OI expanded a first day, the SM feed cleared its artifact to a
              certifiable cover, and the MTF turned up on a fresh 1d strong golden cross —
              but the leverage backdrop re-heated, the macro rates filter widened, and the
              fast frames are overbought at the cap into a heavier positive-gamma dampener,
              so the add is measured, not a chase. The right read for the next 24h is{' '}
              <em>carry the scout at its framework-permitted size, take half at the D-EMA100, let the extension confirm
              a second close above the cap, and cut the whole on the first certified stop —
              grind through the band, do not chase into the cluster</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit
            </span>
            <b>Status:</b> v2 — STAGE B codex hostile audit complete
            (audits/2026-08-08-desk-note.md, verdict PASS-WITH-NOTES: 0 CRITICAL, 2 MAJOR +
            3 MINOR). STAGE C applied every finding in place and ran the mandatory
            grep-closure loop (key wrong-claim pattern searched across the full EN file,
            fixed to zero stale matches before promotion). Per-finding record:{' '}
            <b>DN-001 (MAJOR, 08-05 &ldquo;first cap-clearing close&rdquo; overstated):</b>{' '}
            patterns <code>first cap-clearing</code> / <code>cleared on 08-05</code> /{' '}
            <code>re-took the clear</code> — 3 hits before (lead + MA daily-closes block),
            0 after; rephrased to &ldquo;08-05 first cleared the prior note&rsquo;s named
            $64,612 cap but closed $64,633.90, $1.19 UNDER the same-day D-EMA50 $64,635.09;
            08-07 is the decisive same-day cap re-clear&rdquo; — RESOLVED.{' '}
            <b>DN-002 (MAJOR, forward language exceeded the 0.2R scout scope):</b> patterns{' '}
            <code>confirmed 0.4R long</code> / <code>hold the 0.4R</code> /{' '}
            <code>Hold 0.4R</code> / <code>scout · LONG · ADDED</code> /{' '}
            <code>let it run</code> — 9 imperative-standing-long hits before, 0 after;
            resolved via the audit&rsquo;s option (b) — the 0.2R add-leg was pre-authorized
            by the 08-07 note (desk-process provenance), so every remaining 0.4R mention is
            explicitly tagged &ldquo;framework-permitted / 08-07 pre-authorized / minimum
            size&rdquo; and the imperative standing-long directives were removed — RESOLVED.{' '}
            <b>DN-003 (MINOR, big-print label):</b> pattern <code>522 prints</code> — 1 hit
            before, 0 after; changed to <code>522 big-print minutes</code> (source
            sum(big_count) is 813; 522 = minutes with any nonzero big_count) — RESOLVED.{' '}
            <b>DN-004 (MINOR, post-re-sync SM net range too tight):</b> pattern{' '}
            <code>−2,398</code> — 2 hits before, 0 after; corrected to{' '}
            <code>−1,157 / −2,456</code> (most-short −2,456.231 @ 08-07 15:16 BJ, inside the
            clean post-re-sync window) — RESOLVED. <b>DN-005 (MINOR, pre-artifact short
            timestamp/value mismatch):</b> patterns <code>21.4k</code> / <code>10:15</code>{' '}
            — 3 hits before, 0 after; the ~7.5k delta pairs with 08-06 11:05 BJ short
            ~21.37k (one minute before the 11:06 artifact), not 10:15 (~21.99k) — corrected
            to <code>~21.37k (08-06 11:05 BJ)</code> — RESOLVED. All 5 findings RESOLVED
            (hits-after = 0); no UNRESOLVED residue, so promotion to v2 proceeds.
            Formula discipline per runbook: funding annualized × 1095 (live +5.86% from
            0.005351, 24h mean +5.43%, 0/1442 negative); live-tape <code> t</code> read as
            BJ-local (UTC+8) with all BJ timestamps converted to UTC in the prose; MA matrix
            carries the full Daily AND Weekly × SMA AND EMA ladder (n ∈ 20, 50, 100, 150,
            200); GEX flip dual-referenced (spot +1.70% / Deribit idx +2.18%, both positive);
            NTT / max-pain / strike-level IV / BTC-NQ ratio held framework-only (not loaded).
            The recurring BJ re-sync feed artifact (08-06 11:06 BJ) CLEARED via a counter
            re-sync at 08-07 14:51 BJ (Δshort −16,234), so the 24h SM delta crosses a
            discontinuity and is read off the certifiable post-re-sync current state (net
            −1,512, ~17h stable) rather than the raw same-clock delta. <b>Build note
            (INFO):</b> this server runs Node 18.19.1; Next 16.2.6 hard-exits on Node &lt;
            20.9.0, so a full <code>next build</code> is environment-blocked;{' '}
            <code>npx --no-install tsc --noEmit</code> is the build proxy (exit 0).
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-08-08 00:05Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-08-07 22:15Z (~1.9h before
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
                The held scout added — the 08-07 daily re-cleared the cap on the first OI
                build in five days, and the SM feed finally cleared its artifact to a
                certifiable cover. But the carry re-heated and the fast frames are
                overbought at the cap, so the add is a grind through the gamma band, not a
                chase. Carry the framework add-leg at minimum size, take half at the D-EMA100, cut on the first certified
                stop.
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
            v2 · 2026-08-08 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
