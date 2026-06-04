import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-04 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-04',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-04' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260604() {
  await requireViewer('/desk/2026-06-04');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-04 · v2</span>
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
              <span className="dn-big">$64,353</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−3.59%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-04 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-04 00:05Z (snapshot pin row)</td>
                  <td className="dn-flag">
                    fresh · 1-min · snapshot pin row = 00:05Z; live file has
                    advanced past the pin by audit time · 4JUN26 0.3DTE −6.82M
                    settles at 08:00Z today (~7h 55m ahead of this snap)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-04 00:01Z scan (cited)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    cited 00:01Z scan is <em>~4 min stale</em> vs the 00:05Z
                    snapshot anchor (correcting v1&rsquo;s &ldquo;fresher&rdquo;
                    direction per audit DN-003) · in-progress bars · audit
                    note: the exact 00:01Z scan was not recoverable from the
                    rolling file at audit time (only the later 00:16Z scan
                    survived in the rolling artifact); MTF archival convention
                    remains an open lineage item
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-04 00:00Z snapshot</td>
                  <td className="dn-flag">
                    ~5 min stale vs snapshot anchor · Deribit idx $64,410 vs
                    live $64,353 ($57 above live) · 1,000 instruments (was 998
                    on 06-03; the 3JUN 0.3DTE −4.30M settled at 08:00Z 06-03
                    inside the down-leg and a fresh near-dated chain has been
                    listed) · 4JUN26 0.3DTE −6.82M is the next settle (08:00Z
                    06-04, ~7h 55m ahead)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-04 00:00Z
                  </td>
                  <td className="dn-flag">~5 min lag · 7d 1h bars · 22 assets · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-03 22:19Z render</td>
                  <td className="dn-flag">
                    ~1.78h render lag · <em>data-integrity FLAG</em>: FRED
                    Tier-1 mostly <em>fetch-failed</em> today — 10Y nominal,
                    10Y TIPS, 5Y5Y BE, NFCI, Fed net liquidity, US-JP 10Y
                    spread, all Tier-3 inflation rows unavailable on this
                    render · only HY OAS 2.71% (−1bp), MOVE 73.6 (+0.15), DXY
                    99.22 (+0.02 day), USD/JPY 160.04 (+0.07 day, yen softer),
                    USD/CNY 6.7617 (~flat) carried clean · the macro
                    cross-reference is therefore <em>partial</em>; treat the
                    rates / real-rates / liquidity reads as STALE-FROM-06-03
                    and lean only on HY OAS + DXY + MOVE for today&rsquo;s
                    delta read
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-04 00:06Z (btcusdt_1m_2024..2026 subset by desk policy)</td>
                  <td className="dn-flag">
                    ~1 min fresher than snapshot anchor · MA source universe is
                    the 2024-2026 parquet subset (127 weekly bars), per the
                    06-02 audit DN-005 desk-policy decision carried forward ·
                    under this subset W-SMA150 / W-SMA200 are non-computable
                    (short of both windows); W-EMA150 / W-EMA200 print because
                    EMA seeds from available history and are reported as
                    seeded · offsets recomputed against live spot $64,353.22 ·
                    the 06-03 audit DN-006 dispositioned the live-pin
                    denominator as the lineage carry-forward; this note uses
                    the live pin
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale 63d · monthly · do not treat as live</td>
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
              <span className="dn-v bull">+3.25% (off cap)</span>
              <span className="dn-src">live · current off-cap streak 375 min / 6.25h since 2026-06-03 17:51Z (BJ 01:51 06-04) · the 24h window contains FOUR discrete off-cap runs — earlier 06-03 00:05Z–15:26Z (922 min / ~15.37h, the long mid-day relief into the dump), then two short ribbons (16:46Z–16:47Z 2 min and 16:52Z–17:21Z 30 min), then the current streak from 17:51Z — for ~1,329 min / ~22.15h cumulative off-cap inside the 24h window (~92% of the 24h was off-cap) · 24h mean +7.00% (was +9.33% on 06-03 · −2.33pt cooler day-on-day) · cap occupancy 112 / 1441 sampled rows = 7.77% (was 48.92% on 06-03 · collapsed −41.15pt) · 24h funding trough +2.86% @ 06-03 09:50Z (BJ 17:50 06-03) inside the long earlier off-cap run · still positive throughout (no short-pay print this window)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">+7.65% → +3.25% (−4.40pt, off cap)</span>
              <span className="dn-src">range +2.86% / +10.95% · the leverage gate broke wide open in this 24h · trough +2.86% the deepest off-cap of the lineage but still no cross-positive into short-pay (vs the 05-31 trough −0.21% short-pay regime); ≥4h cumulative gate cleared by ~5.5×</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−2.13% (−2,283 BTC)</span>
              <span className="dn-src">live · first 24h OI shrink since 06-01 (was +1,702 BTC / +1.62% on 06-03 · the down-leg has now turned to net de-grossing on the 24h) · SM long_btc +102 (flat), short_btc +4,209 (short add) — the gross book is up ~4.3k BTC but exchange-wide OI shrank ~2.3k, so non-SM books shed ~6.6k BTC across the 24h</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">68.99 / 31.01</span>
              <span className="dn-src">live_db `mkt_long_pct` · marginally off the lineage peak (was 69.35 on 06-03 · −0.36pt) · 24h range 68.26 / 69.84 (new intraday percentage peak 69.84% at BJ 14:42–14:47 06-03 / UTC 06:42–06:47Z — NOT BJ 22:21 06-03; the BJ 22:21 row read mkt_long_pct 68.64% and is the long_btc-size peak, distinct from the retail-percentage peak per audit DN-004; since bled −0.85pt into snap) — retail still crowded heavy long across a −3.59% 24h, the trap shape persists</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−44.9k (deeper net SHORT than 06-03, both sides bigger)</span>
              <span className="dn-src">live · long 12.75k − short 57.68k · short peaked 60,729 @ 2026-06-03 15:16Z (BJ 23:16 06-03 — new lineage peak by +4,693 vs 06-03&rsquo;s 56,036), long_btc peaked 18,293 @ 2026-06-03 14:21Z (BJ 22:21 06-03 — new lineage long peak); SM net trough −46,686 @ 2026-06-03 20:26Z (BJ 04:26 06-04) — new lineage trough, deeper by −2,248 than 06-03&rsquo;s −44,438</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 06-03 note</span>
              <span className="dn-v bear">−40.8k → −44.9k (−4,107 net; long +102, short +4,209)</span>
              <span className="dn-src">|Δ|/prior_net = 10.06% (4,107/40,822) · short stacked another +4,209 while long was effectively flat — one-sided short re-stacking continues for a second consecutive note, with the long-side rebuild from 06-03 (+3,813) not extending today</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v bear">48.9% / 35.33%</span>
              <span className="dn-src">GEX median IV · 1,000 inst. (up from 998 on 06-03 · +2 instruments, basically flat chain) · IV bid +1.3pt as price extended through $65k (was 47.6% on 06-03) · 30D RV bumped to 35.33% (was 34.03% on 06-03, +1.30pt) on the 06-03 −3.91% daily close · the IV/RV spread compressed to ~+13.6pt (same as 06-03)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−5.08% (below; live spot ref)</span>
              <span className="dn-src">flip $67,797 (was $69,335 · dropped −$1,538) · vs live spot $64,353.22 (−5.08%; 64,353.22/67,797 − 1 = −5.080%) · vs GEX file Deribit idx $64,410 (−5.00%; 64,410/67,797 − 1 = −4.996%, matches the file&rsquo;s own dist-to-flip tile of −5.0%) — both refs negative, spot deeper below the flip on both, aggregate GEX deepened to −52.9M (was −38.8M on 06-03, a further −$14.1M amplification step · widest below-flip print of the lineage on either reference)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The cycle-ladder break extended a third tier down — the 06-03
                daily close $64,118 dropped −3.91% on the day, the new $65k
                wall cited in the 06-03 note as the next reference rung was
                pressed through cleanly, and spot now sits −12.05% below the
                cycle anchor with the dealer book yet deeper net-short-gamma
              </span>. Aggregate GEX went{' '}
              <span className="dn-tag bear">−38.8M</span> →{' '}
              <span className="dn-tag bear">−52.9M</span> (a further −$14.1M
              amplification step), the 0-γ flip dropped{' '}
              <span className="dn-tag">$69,335 → $67,797 (−$1,538)</span>, and
              spot{' '}
              <span className="dn-tag bear">$64,353 sits −5.08% below the
              flip</span> (live-spot ref; the GEX file&rsquo;s own
              Deribit-index dist-to-flip tile prints −5.0% off its $64,410
              index — both refs negative, the deepest below-flip print of the
              lineage on either reference). Daily closes ran{' '}
              <span className="dn-tag bear">06-02 $66,730 / 06-03 $64,118</span>{' '}
              (three consecutive closes below the D-SMA100 cycle anchor
              $73,166, the −$2,612 06-03 step compounding the 06-02 −$4,662
              dump), with the in-progress 06-04 print at{' '}
              <span className="dn-tag bear">$64,146 (+$28 inside the 06-03
              close)</span> — a flat hold at the lows, no recovery candle
              in-progress yet. The 06-03 note&rsquo;s framework watch on the
              cycle 3 step 3 cadence{' '}
              <span className="dn-em">weakened off-window but the step itself
              fired</span>: the 06-03 BJ 13–15 window (UTC 05:00–07:00 06-03)
              printed sub-threshold{' '}
              (<span className="dn-tag">window Δ −1,098, max |Δnet| 866</span>),
              but a clean re-stack hostile-2 step printed at{' '}
              <span className="dn-tag bear">2026-06-03 07:41Z (BJ 15:41 06-03,
              41 min AFTER the window closed)</span> with Δnet{' '}
              <span className="dn-tag bear">−7,177</span> (Δlong +2,659,
              Δshort +9,837 same minute, SM net stepped{' '}
              <span className="dn-tag">−35,956 → −43,133</span> at spot{' '}
              <span className="dn-tag">$67,192</span>) — the{' '}
              <span className="dn-em">new largest single-minute Δnet of the
              lineage</span>, eclipsing the 06-02 06:46Z −6,621 step by +8.4%.
              The cadence time-pin loosened on the latest print only
              (off-window by 41 min) — the prior three landed inside the BJ
              13–15 band, the 06-03 print sat 41 min past window close — but
              the cycle continuation itself confirmed on a fourth consecutive
              print: 05-30 14:01 BJ −5,569 → 06-01 14:16 BJ −3,137 → 06-02
              14:46 BJ −6,621 → 06-03 15:41 BJ −7,177 (audit DN-001 corrected
              the 05-30 timestamp from v1&rsquo;s 22:01 BJ to 14:01 BJ /
              06:01Z, which puts the 05-30 print inside the BJ 13–15 band
              rather than seven hours outside it). The chain is a four-print
              cadence with the latest two larger than prior (the 5,569 →
              3,137 step contracted before the chain re-expanded) and the
              06-03 step the lineage extreme — <em>not</em> a monotonically
              growing chain (audit DN-002). Funding came{' '}
              <span className="dn-tag bull">fully off the Binance cap inside
              the 24h window</span>: cumulative ~22.15h off-cap across four
              discrete runs (long 15.37h earlier-day run + two short ribbons +
              current 6.25h streak), 24h mean{' '}
              <span className="dn-tag">+7.00% ann</span> (was +9.33% on 06-03,
              −2.33pt cooler), cap occupancy{' '}
              <span className="dn-tag bull">112 / 1441 sampled rows (7.77%)</span>{' '}
              (was 48.92% — collapsed −41.15pt), trough{' '}
              <span className="dn-tag bull">+2.86% ann @ BJ 17:50 06-03</span>{' '}
              still positive (no short-pay print this window). Retail bled
              marginally off the prior lineage peak{' '}
              <span className="dn-tag bear">69.35% → 68.99% (−0.36pt)</span>{' '}
              with an intraday percentage peak at 69.84% @ BJ 14:42–14:47
              06-03 (the retail-percentage peak; the long_btc-size peak
              printed separately at BJ 22:21 06-03 — see Positioning below)
              — still heavily crowded long, trap shape persists. OI shrank{' '}
              <span className="dn-tag bull">−2,283 BTC</span> over 24h (first
              24h shrink since 06-01); short_btc made a fresh lineage peak{' '}
              <span className="dn-tag bear">60,729 @ BJ 23:16 06-03</span>; SM
              net touched a fresh lineage trough{' '}
              <span className="dn-tag bear">−46,686 @ BJ 04:26 06-04</span>;
              long_btc also peaked{' '}
              <span className="dn-tag">18,293 @ BJ 22:21 06-03</span> — a new
              lineage long peak that retraced into snap. The structure scan is
              the loudest tell of the lineage:{' '}
              <span className="dn-tag bull">⚡ TD9 BUYs printed simultaneously
              on 15m, 1h, 4h, 8h AND 1d</span> at $64,307–$64,338, with{' '}
              <span className="dn-tag bull">3d / 1M Buy 8 → 9?</span> one bar
              away from confirming on top — the heaviest oversold-reversal
              counter-stack of the entire lineage by every metric. The regime
              is now a three-tier confirmed cycle ladder break, deeper
              negative-gamma dealer book, position book deepening net-short
              with both sides at fresh lineage extremes, full leverage-gate
              relief (~22.15h cumulative off-cap), and a multi-TF TD9 BUY
              stack confirmed across five frames simultaneously.
            </p>

            <p>
              BTC prints <span className="dn-tag">$64,353</span> live,{' '}
              <span className="dn-tag bear">−3.59%</span> on 24h, inside a
              wide <span className="dn-tag">$67,484 / $64,109</span> range
              (high @ 2026-06-03 06:40Z / BJ 14:40 06-03, low @ 2026-06-03
              23:59Z / BJ 07:59 06-04 — the low printed{' '}
              <span className="dn-em">6 minutes before this snap</span> and
              the snap-row is the first desk pin after that low). The 06-03
              note&rsquo;s active gates all extended or fired:
              the cycle ladder broke a third tier (06-03 close $64,118
              vs prior $66,730 — extended by −$2,612 / −3.91%); the cover-rally
              shape A trigger stayed STALE (spot never approached the
              $73,035–$73,216 reclaim band — that band is now $9,043 overhead
              on close); the breakdown shape B trigger fired AGAIN inside the
              06-03 07:41Z step (Δnet −7,177, the new lineage-largest single
              minute Δ); the funding cap relief cleared the ≥4h cumulative
              gate by ~5.5× (~22.15h cumulative vs ~12.2h on 06-03); the
              06-03 BJ 13–15 cadence window passed sub-threshold but the
              cycle continuation step itself fired 41 min off-window with the
              largest single-minute Δnet of the lineage; the macro re-grow
              gates moved on credit (HY OAS −1bp to 2.71%, gate now 7bp
              away — re-opened by 1bp).{' '}
              <span className="dn-signal">Every overhead MA is now deeply
              negative</span>: from the closest line W-SMA20{' '}
              <span className="dn-tag bear">$72,679 (−11.46%)</span> (was
              −8.32% on 06-03 — overhead band stretched another ~3.1pt
              further) through D-EMA20{' '}
              <span className="dn-tag bear">$72,879 (−11.70%)</span>, the
              cycle anchor D-SMA100{' '}
              <span className="dn-tag bear">$73,166 (−12.05%)</span> (was
              −8.80% on 06-03), W-EMA200 seed{' '}
              <span className="dn-tag bear">$73,607 (−12.57%)</span>, D-SMA20{' '}
              <span className="dn-tag bear">$74,109 (−13.16%)</span>, D-EMA50{' '}
              <span className="dn-tag bear">$74,749 (−13.91%)</span>, D-SMA150{' '}
              <span className="dn-tag bear">$75,511 (−14.78%)</span>, D-EMA100{' '}
              <span className="dn-tag bear">$75,767 (−15.06%)</span>, W-EMA20{' '}
              <span className="dn-tag bear">$76,427 (−15.80%)</span>, D-SMA50{' '}
              <span className="dn-tag bear">$76,668 (−16.06%)</span>, W-EMA150
              seed <span className="dn-tag bear">$78,042 (−17.54%)</span>,
              D-EMA150 <span className="dn-tag bear">$78,045 (−17.54%)</span>,
              D-SMA200 <span className="dn-tag bear">$78,932 (−18.47%)</span>,
              D-EMA200 <span className="dn-tag bear">$80,470 (−20.03%)</span>.
              The 06-03 &ldquo;~$6.5k overhead band to the cycle anchor /
              ~$13k overhead band to the deep MA cluster&rdquo; read has
              extended to a{' '}
              <span className="dn-em">~$8.8k overhead band to the cycle anchor
              </span> and a ~$16k overhead band to the deep MA cluster — the
              reclaim ladder still intact in order, but each rung now sits a
              full +13% to +17% above spot.{' '}
              <span className="dn-em">
                The structural backdrop is a three-tier confirmed cycle ladder
                break: digestion above anchor → first close below → two
                consecutive closes well below → three consecutive closes
                deeply below, dealer book at the deepest net-short-gamma of
                the lineage, position book deepening net-short with both
                sides at fresh lineage extremes (short_btc peak 60,729 BTC @
                BJ 23:16 06-03 / long_btc peak 18,293 BTC @ BJ 22:21 06-03,
                both LINEAGE peaks). The pin reads long_btc 12,755 / short_btc
                57,684 — both off their intraday peaks but the short side
                still well above prior lineage extremes.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · 24h book gross-grew the short side with the long side flat-to-mild while net stepped deeper short again · cadence WEAKENED off-window (BJ 13–15 sub-threshold) but the cycle continuation step itself fired 41 min after window close with the largest single-minute Δnet of the lineage (−7,177) · funding cumulative ~22.15h off-cap inside the 24h window (~92%) — leverage gate fully released</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position book grew on the short side with the long side
                flat-to-mild while net stepped deeper short — one-sided short
                re-stacking continues for a second consecutive note
              </span>. SM net is{' '}
              <span className="dn-tag bear">−44,929</span> vs the 06-03
              note&rsquo;s −40,822 — that is{' '}
              <span className="dn-em">+10.06% more short</span>{' '}
              (|−44,929 − (−40,822)| / 40,822 = 10.06%). Components: long_btc{' '}
              <span className="dn-tag">12.65k → 12.75k (+0.10k)</span> and
              short_btc{' '}
              <span className="dn-tag bear">53.47k → 57.68k (+4.21k)</span> —
              the long side basically flat at the snap (though it intraday
              peaked 18.29k at BJ 22:21 06-03 — a real long-side rebuild
              attempt that retraced) while the short side stacked another
              +4.21k on top of yesterday&rsquo;s +7.60k.{' '}
              <span className="dn-em">Across two consecutive notes the short
              side has added +11.81k BTC; the long side has cycled (rebuilt
              and partially retraced) but the snap-net is now back near
              06-03&rsquo;s flat-long shape with shorts deeper still.</span>{' '}
              Across the 24h window: long_btc Δ{' '}
              <span className="dn-tag">+102</span>, short_btc Δ{' '}
              <span className="dn-tag bear">+4,209</span>, net Δ{' '}
              <span className="dn-tag bear">−4,107</span> (102 − 4,209 =
              −4,107) — gross +4.3k BTC, net −4.1k BTC. short_btc peaked at{' '}
              <span className="dn-tag bear">60,729 @ 2026-06-03 15:16Z (BJ
              23:16 06-03)</span> — a fresh lineage peak: the intraday peak
              was +4,693 BTC over the prior 56,036 lineage peak; after the
              −3.0k bleed the 00:05Z snapshot reads 57,684 BTC, which is
              +1,648 BTC above the prior 56,036 peak (per audit DN-005, the
              two facts are split — intraday +4.7k, post-bleed snapshot
              +1.65k). long_btc peaked at{' '}
              <span className="dn-tag">18,293 @ 2026-06-03 14:21Z (BJ 22:21
              06-03)</span> — a fresh lineage long peak (was 15,358 on 05-29
              17:21Z), since bled −5.5k into snap. SM net trough{' '}
              <span className="dn-tag bear">−46,686 @ 2026-06-03 20:26Z (BJ
              04:26 06-04)</span>, the deepest net-short of the lineage by
              −2.25k vs the 06-03 note&rsquo;s −44,438. The book is bigger
              both sides AND deeper short on net AND deeper at the intraday
              extremes — the press has not exhausted on positioning even as
              the leverage gate fully released.
            </p>

            <p>
              <span className="dn-signal">
                The framework&rsquo;s BJ 13–15 cadence window passed
                sub-threshold but the cycle continuation step itself fired
                41 minutes after the window closed with the largest
                single-minute Δnet of the entire lineage
              </span>. The 06-03 BJ 13–15 window (UTC 05:00–07:00 06-03)
              opened at SM net −34,526 and closed at −35,625 — a window Δ
              of <span className="dn-tag">−1,098</span> across the 2h, max
              |Δnet| <span className="dn-tag">866</span>: a quiet drift, the
              cadence prediction did <span className="dn-em">not</span>{' '}
              fire on time. But 41 min after window close, at{' '}
              <span className="dn-tag bear">2026-06-03 07:41Z (BJ 15:41
              06-03)</span> with spot <span className="dn-tag">$67,192</span>,
              long_btc moved <span className="dn-tag">13,999 → 16,658</span>{' '}
              (+2,659 BTC), short_btc moved{' '}
              <span className="dn-tag">49,955 → 59,792</span> (+9,837 BTC in{' '}
              <em>one minute</em>; 59,792 − 49,955 = 9,837 — the largest
              single-minute short add of the lineage), SM net stepped{' '}
              <span className="dn-tag">−35,956 → −43,133</span> (Δnet
              −7,177 — the largest single-minute Δnet of the lineage,
              eclipsing the 06-02 06:46Z −6,621 step by +8.4%). That step
              is a re-stack hostile-2 plus shape (Δshort &gt; 0 alongside a
              long-side add same minute — a re-stack on a both-sides
              expansion rather than a pure long-flush) printed{' '}
              <span className="dn-em">just outside</span> the BJ 13–15
              window — the cadence time-pin loosened by 41 min, but the
              cycle continuation step itself confirmed on a fourth
              consecutive print and at the largest single-minute Δ of the
              lineage. The 06-03 BJ 22 secondary window (UTC 14:00 06-03)
              printed only a small drift (window Δ{' '}
              <span className="dn-tag">−355</span>, max |Δnet|{' '}
              <span className="dn-tag">231</span>) — the secondary did NOT
              fire today. The price consequence: the 07:41Z BJ step at
              $67,192 led the follow-through dump to the 24h low{' '}
              <span className="dn-tag bear">$64,109 @ BJ 07:59 06-04 (16h
              18m later)</span> — −$3,083 / −4.59% follow-through from the
              step entry.{' '}
              <span className="dn-em">
                The cadence framework reads: time-pin weakened (off-window
                by 41 min) but the cycle continuation itself fired on a
                fourth consecutive print and at the lineage extreme. The
                framework is no longer cleanly BJ 13–15-pinned — treat the
                cycle as alive on the day but expect the time-pin to
                continue loosening; the cycle is producing a continuation
                step roughly daily, with the BJ 13–15 window now a
                weakening prior rather than a hard pin
              </span>.
            </p>

            <p>
              The leverage side has fully released the cap on the day.{' '}
              <span className="dn-signal">
                Funding came off the Binance cap on FOUR discrete runs
                inside the 24h window for ~22.15h cumulative (~92% of the
                window) — the most extensive leverage-gate relief of the
                lineage
              </span>: live <span className="dn-tag">+3.25% ann</span> (was
              +7.65% on 06-03), 24h range{' '}
              <span className="dn-tag">+2.86% / +10.95%</span> with the
              trough{' '}
              <span className="dn-tag bull">+2.86% ann @ 2026-06-03 09:50Z
              (BJ 17:50 06-03)</span> — the deepest off-cap of the lineage
              but still no short-pay cross (vs the 05-31 trough −0.21%
              short-pay regime, this print held positive throughout). 24h
              mean ann <span className="dn-tag bull">+7.00%</span> (vs
              06-03&rsquo;s +9.33% — a −2.33pt cooling). Cap occupancy{' '}
              <span className="dn-tag bull">112 / 1441 sampled rows
              (7.77%)</span> — collapsed from 06-03&rsquo;s 48.92%
              (−41.15pt); the other ~1,329 min (~22.15h cumulative) was
              off-cap, split across four runs (earlier 922 min / 15.37h,
              plus two ribbons 2 min and 30 min, plus current streak 375
              min / 6.25h). Cumulative off-cap time inside the 24h window
              has cleared the 06-02 framework&rsquo;s{' '}
              <span className="dn-em">≥ 4h cumulative</span> first-leg
              long-re-entry threshold by ~5.5×, and the ≥ 30 consecutive
              minute watch fired on three of the four runs —{' '}
              <span className="dn-em">leg one of the would-be mean-revert
              promotion trigger is therefore CLEARED by a wide margin on
              the cumulative interpretation</span>. OI Δ{' '}
              <span className="dn-tag bull">−2,283 BTC (−2.13%)</span> over
              24h — the first 24h OI shrink since 06-01, a sharp turn from
              06-03&rsquo;s +1,702 expansion; non-SM books shed ~6.6k BTC
              across the 24h (gross SM book +4.3k vs total OI −2.3k →
              non-SM −6.6k BTC). Retail{' '}
              <span className="dn-tag bear">mkt_long_pct 68.99%</span>{' '}
              from 69.35% — a −0.36pt bleed off the prior lineage peak,
              with an intraday percentage peak at 69.84% @ BJ 14:42–14:47
              06-03 (UTC 06:42–06:47Z); the long_btc-size intraday peak
              (18,293 BTC @ BJ 22:21 06-03) printed on a separate row that
              read mkt_long_pct 68.64% — the two are distinct peaks (per
              audit DN-004). Perp trades a{' '}
              <span className="dn-tag bear">−$103.97 discount</span> to
              spot at the snap (1h mean −$101.38, range −$209.09 / −$14.43;
              4h mean −$95.55; 24h mean −$100.02, range{' '}
              <span className="dn-tag">−$270.90 / +$164.95</span> — basis
              touched +$165 inside the 24h window briefly in the early
              earlier-day relief leg, but no sustained cross-positive
              regime). 1-min aggressor skew snap{' '}
              <span className="dn-tag">+5.0</span> (1h mean −8.77, range
              −40.9 / +28.7) — a flat-to-slightly-buy tilt this hour,
              consistent with the reflex consolidation off the 23:59Z
              $64,109 low.{' '}
              <span className="dn-em">
                Funding ~22.15h cumulative off-cap (~92% of the 24h, the
                most extensive lineage release) + retail bled marginally
                off lineage peak + OI shrinking + SM gross-growing only on
                the short side: the leverage book has fully released the
                cap pressure, but the SM short re-stack has not exhausted.
                The funding gate is open; the position book is not yet
                covering
              </span>.
            </p>

            <p>
              Windowed flow is{' '}
              <em>spot-led offered 24h with a mild big-print bid 4h and a
              long-add 1h on a flat-to-up bounce</em>. 24h: price{' '}
              <span className="dn-tag bear">−3.59%</span>, OI{' '}
              <span className="dn-tag bull">−2,283 BTC</span> (de-grossing),
              spot CVD <span className="dn-tag bear">Δ −6,840</span>{' '}
              (no resets in window — clean delta, the heaviest 24h spot
              CVD offer of the lineage), futures CVD{' '}
              <span className="dn-tag bear">Δ −4,076</span> (no resets in
              window — clean delta), big-print{' '}
              <span className="dn-tag bear">−3,065 BTC / 901 prints</span>,
              taker-net{' '}
              <span className="dn-tag bear">−4,089</span> —{' '}
              <span className="dn-em">
                spot offered heavily on the 24h (−6.84k clean cb_cvd, the
                heaviest 24h offer print of the lineage), futures sold in
                aggregate on a clean delta, big-prints net seller, OI
                shrinking into the down move: a spot-led dump with futures
                piling on, but the OI de-grossing is new and important
              </span>. 4h (exact endpoint window, 2026-06-03 20:05Z →
              2026-06-04 00:05Z): price{' '}
              <span className="dn-tag bear">−1.48%</span>, OI{' '}
              <span className="dn-tag bull">−420 BTC</span> (continuing
              de-grossing), spot CVD{' '}
              <span className="dn-tag bear">Δ −1,073</span> (spot still
              offered), futures CVD{' '}
              <span className="dn-tag bull">Δ +200</span> (mild futures
              bid), big-print{' '}
              <span className="dn-tag bull">+364 BTC / 121 prints</span>,
              taker-net <span className="dn-tag bull">+191</span> — a
              shape with spot still offered but futures mildly bid and
              big-prints net buyer; the OI shrink continues and big-prints
              positive is the first 4h positive big-print read of the
              recent down-leg. 1h (exact endpoint window, 2026-06-03
              23:05Z → 2026-06-04 00:05Z): price{' '}
              <span className="dn-tag bear">−0.52%</span>, OI{' '}
              <span className="dn-tag bear">+715 BTC</span> (re-grossing
              inside the snap-hour after the broader de-gross), spot CVD{' '}
              <span className="dn-tag bear">Δ −730</span>, futures CVD{' '}
              <span className="dn-tag">Δ −93</span> (basically flat), big
              print <span className="dn-tag">+13 BTC / 37 prints</span>{' '}
              (flat), taker-net <span className="dn-tag">−85</span> — the
              snap-hour reads a small offer with OI re-grossing while the
              broader 4h was de-grossing; a long add inside the snap-hour
              chasing the $64.1k low is consistent with the 24h OI shrink
              giving way to small-position-add bottom-fishing at the snap.{' '}
              <em>No CVD resets in the 24h window (clean cb_cvd and
              fut_cvd deltas at all three horizons — distinct from the
              06-03 two-reset 24h read); spot CVD remains the cleanest
              load-bearing flow read.</em>
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map (00:01Z scan) · ⚡ TD9 BUYs printed SIMULTANEOUSLY on 15m/1h/4h/8h/1d at $64,307–$64,338 · 3d/1M Buy 8 → 9? one bar away · RSIs at lineage-deep oversold across 4h–12h (19.7/15.4/14.3) · the heaviest oversold-reversal counter-stack of the entire lineage</span>
            </h2>

            <p>
              <span className="dn-signal">
                The structure scan prints the heaviest oversold-reversal
                counter-stack of the entire lineage: 5 frames simultaneously
                printed ⚡ TD9 BUY across the 00:01Z scan
              </span>. The 8h water-down death cross has aged from the 06-03
              5-bar print to <span className="dn-tag bear">8 bar</span> — the
              engine bear is now well-confirmed. Slow frames are joined:{' '}
              <span className="dn-tag bear">3d water-up death cross 3 bar</span>{' '}
              (was 2 bar — confirmed), 1d{' '}
              <span className="dn-tag bear">below cloud 3 bar</span> (was 2
              bar — confirmed), 3d{' '}
              <span className="dn-tag bear">below cloud 1 bar</span> (was 刚穿
              on 06-03 — confirmed today). RSIs printed at{' '}
              <span className="dn-em">lineage-deep oversold</span> across the
              engine and mid frames again: 1h{' '}
              <span className="dn-tag bear">29.8</span> (was 25.0 — slightly
              off the 06-03 washout), 4h{' '}
              <span className="dn-tag bear">19.7</span> (was 13.4 — off the
              extreme but still deep), 8h{' '}
              <span className="dn-tag bear">15.4</span> (was 15.5 — same
              level, deepest 8h RSI of the lineage), 12h{' '}
              <span className="dn-tag bear">14.3</span> (was 14.6 — same
              level, deepest 12h RSI of the lineage), 1d{' '}
              <span className="dn-tag bear">19.6</span> (was 22.2 — deeper,
              new daily lineage low). The single-frame counter-signal stack
              has stacked into a multi-frame simultaneous confirm:{' '}
              <span className="dn-tag bull">⚡ 15m TD9 BUY at $64,336</span>,{' '}
              <span className="dn-tag bull">⚡ 1h TD9 BUY at $64,338</span>,{' '}
              <span className="dn-tag bull">⚡ 4h TD9 BUY at $64,336</span>{' '}
              (third consecutive 4h TD9 BUY across the down-leg — was at
              $66,835 on 06-03 and $71,226 on 06-02; this is $2,499 lower
              than the prior),{' '}
              <span className="dn-tag bull">⚡ 8h TD9 BUY at $64,307</span>{' '}
              (the 06-03 8h Buy 8 → 9? CONFIRMED on the 08:00Z 06-03 close),{' '}
              <span className="dn-tag bull">⚡ 1d TD9 BUY at $64,307</span>{' '}
              (the 06-03 1d Buy 8 → 9? CONFIRMED on the 00:00Z 06-04 daily
              close — the cycle-frame TD9 BUY is the first of the down-leg).
              On top: <span className="dn-tag bull">3d Buy 8 → 9?</span> one
              bar away from confirming AND{' '}
              <span className="dn-tag bull">1M Buy 8 → 9?</span> one bar
              away from confirming.{' '}
              <span className="dn-em">
                Read straight: the engine and slow frames continue to
                confirm bear (8h death cross 8b + 3d death cross 3b + 1d
                below cloud 3b + 3d below cloud confirmed), the RSIs
                printed slightly off the 06-03 extremes but the 1d
                printed a new lineage-low at 19.6, and the
                oversold-reversal counter-stack has resolved into a
                multi-frame simultaneous ⚡ TD9 BUY on 15m/1h/4h/8h/1d
                AND the 3d/1M one bar away. This is the heaviest
                multi-frame TD9 BUY simultaneous print of the entire
                lineage. The structural bear is confirmed; the counter is
                now structurally heavier than the 06-03 setup by a clean
                margin
              </span>.
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,336</td><td className="num bear">31.6</td><td className="bear">death (water-dn) 6b</td><td className="bear">below ↑66.3k 36b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">64,308</td><td className="num bear">31.2</td><td className="bear">death (water-dn) 19b</td><td className="bear">below ↑66.7k 137b</td><td>Buy 5</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">64,338</td><td className="num bear">29.8</td><td className="bear">death (water-dn) 5b</td><td className="bear">below ↑68.2k 67b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">64,336</td><td className="num bear">19.7</td><td className="bear">death (water-dn) 16b</td><td className="bear">below ↑74.3k 55b</td><td>⚡ TD9 BUY</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">64,307</td><td className="num bear">15.4</td><td className="bear">death (water-dn) 8b</td><td className="bear">below ↑76.4k 57b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr><td>12h</td><td className="num">64,329</td><td className="num bear">14.3</td><td className="bear">death (water-dn) 15b</td><td className="bear">below ↑78.2k 25b</td><td>Buy 7</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">64,307</td><td className="num bear">19.6</td><td className="neut">—</td><td className="bear">below ↑73.9k 3b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">64,338</td><td className="num">33.1</td><td className="bear">death (water-up) 3b</td><td className="bear">below ↑74.0k 1b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">64,338</td><td className="num">34.9</td><td className="neut">golden (water-dn) 7b</td><td className="bear">below ↑100.3k 18b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">64,336</td><td className="num">43.0</td><td className="neut">—</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (rolling latest
                    file; to be archived to audits/2026-06-04-desk-note.md by
                    STAGE B). Header alerts: <em>15m ⚡ TD9 BUY at $64,336</em>,{' '}
                    <em>1h ⚡ TD9 BUY at $64,338</em>,{' '}
                    <em>4h ⚡ TD9 BUY at $64,336</em>,{' '}
                    <em>8h ⚡ TD9 BUY at $64,307</em>,{' '}
                    <em>1d ⚡ TD9 BUY at $64,307</em>,{' '}
                    <em>3d TD8 Buy → 9? (再 1 根 close)</em>,{' '}
                    <em>1M TD8 Buy → 9? (再 1 根 close)</em>.
                    Scan spot $64,308, 24h −3.63% (00:01Z MTF scan; the
                    live-tape header at 00:05Z shows −3.59% on the same 24h
                    window — the 4-min gap accounts for the 0.04pt difference,
                    well within sampling noise), 24h H/L $67,494 / $64,051,
                    qVol $20.64B. Closes are in-progress bars; treat every
                    value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms a fully-overhead structural read,
              extended a third tier. Spot $64,353 sits{' '}
              <span className="dn-tag bear">−11.46% below W-SMA20 $72,679</span>{' '}
              (the closest overhead line, was −8.32% on 06-03 — overhead band
              stretched ~3.1pt further), and{' '}
              <span className="dn-tag bear">−12.05% below D-SMA100
              $73,166</span> (the lost cycle anchor — the 06-03 UTC close
              $64,118 broke it by $9,048; the in-progress 06-04 $64,146 sits
              $28 inside that close and ~$9,020 below the anchor). Then in
              order: <span className="dn-tag bear">D-EMA20 $72,879 (−11.70%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $73,607 (−12.57%;
              seed)</span>,{' '}
              <span className="dn-tag bear">D-SMA20 $74,109 (−13.16%)</span>,{' '}
              <span className="dn-tag bear">D-EMA50 $74,749 (−13.91%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $75,511 (−14.78%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $75,767 (−15.06%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $76,427 (−15.80%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $76,668 (−16.06%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $78,042 (−17.54%;
              seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $78,045 (−17.54%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $78,932 (−18.47%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $80,470 (−20.03%)</span>.
              Far above and disused: W-EMA100 $82,844 (−22.32%), W-EMA50
              $83,972 (−23.36%), W-SMA100 $88,413 (−27.21%), W-SMA50 $92,634
              (−30.53%).{' '}
              <span className="dn-signal">There is ZERO positive offset on
              the matrix against live spot</span> — every single MA on the
              daily and weekly ladder is overhead, the same read as 06-03
              but stretched another tier; the closest line W-SMA20 has moved
              from −2.34% on 06-02 to −8.32% on 06-03 to −11.46% today (an
              expanding overhead band, three consecutive notes). The
              structural near-line set is: W-SMA20 overhead (−11.46%), D-EMA20
              overhead (−11.70%), cycle anchor D-SMA100 overhead (−12.05%),
              W-EMA200 seed overhead (−12.57%) — a ~$0.9k-wide reclaim band
              sitting ~$8–9k above spot.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-04 00:06Z (close
                $64,145.80). MA source universe is the 2024-2026 parquet
                subset (127 weekly bars) by desk policy — carried forward
                from the 06-02 audit DN-005 decision. Under this subset
                W-SMA150 / W-SMA200 remain non-computable (short of both
                windows); W-EMA150 $78,042 (−17.54%) and W-EMA200 $73,607
                (−12.57%) show because the EMA seeds from available history
                and are reported as seeded. Offsets above computed against
                live spot $64,353.22 directly (per 06-03 audit DN-006
                disposition: live-pin denominator carries forward; the
                parquet-adjacent close $64,145.80 is $207.42 below the live
                pin, so an offset against the parquet plane reads ~+0.32pt
                deeper). Displayed MA levels are $-rounded; offsets computed
                from exact series values. Daily closes: 05-29 $73,428, 05-30
                $73,857, 05-31 $73,653, 06-01 $71,392 (first close below the
                cycle anchor), 06-02 $66,730 (deepest single-day
                close-to-close drop of the lineage at −$4,662 / −6.53%),
                06-03 $64,118 (a further −$2,612 / −3.91% — the deepest
                close of the lineage), 06-04 in-progress $64,146 — three
                consecutive closes deeply below the cycle anchor.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DEEPER net-short-gamma aggregate −52.9M (was −38.8M, a further −$14.1M amplification step) · flip dropped to $67,797 (spot −5.08% below the flip; widest dist-to-flip of the lineage) · the 06-03 $65k −15.48M wall was pressed through (now $65k −19.25M — deeper still) · 5JUN −15.89M (1.3 DTE) the amplifier on the strip — DEEPENED +$1.0M vs the 06-03 reading rather than resolving through the press · 4JUN −6.82M settles in 7h 55m</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book stepped deeper into net-short-gamma again and
                the wall map at $65k DEEPENED rather than resolved as price
                tested through it
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bear">−52.9M / 1%</span> (was −38.8M
              on 06-03 — a further −$14.1M amplification step); the book is
              now at the deepest net-short-gamma of the lineage. The 0-γ
              flip moved{' '}
              <span className="dn-tag">$69,335 → $67,797 (−$1,538)</span>.
              Two dist-to-flip references (carried per 06-02 audit DN-007):
              live-spot reference{' '}
              <span className="dn-tag bear">−5.08%</span>{' '}
              (64,353.22 / 67,797 − 1 = −5.080%); GEX-file Deribit-index
              reference{' '}
              <span className="dn-tag bear">−5.00%</span> (64,410 / 67,797
              − 1 = −4.996%, matches the file&rsquo;s own dist-to-flip tile
              of −5.0%). Both refs negative, spot deeper below the flip on
              both — the widest below-flip print of the lineage on either
              reference. The wall map rotated through $65k:{' '}
              <span className="dn-tag bear">$65k −19.25M</span> (was
              −15.48M on 06-03 — the 06-03 &ldquo;new heaviest near
              wall&rdquo; DEEPENED by −$3.77M as the press tested the strike
              from above rather than resolving it),{' '}
              <span className="dn-tag bear">$60k −19.85M</span> (was
              −15.12M — the new heaviest overall wall, $4k under live spot
              — the crash-put zone has thickened as price approached),{' '}
              <span className="dn-tag bull">$80k +11.72M</span> (heaviest
              positive, was +14.64M — eased as it sits ~$15.6k out of the
              money),{' '}
              <span className="dn-tag bear">$64k −11.63M</span> (essentially
              at spot — a fresh near-spot wall has emerged at the strike
              that spot is sitting on),{' '}
              <span className="dn-tag bear">$62k −7.92M</span>,{' '}
              <span className="dn-tag bear">$66k −5.87M</span> (was −7.87M
              — eased),{' '}
              <span className="dn-tag bear">$55k −5.46M</span>,{' '}
              <span className="dn-tag bear">$63k −5.44M</span>,{' '}
              <span className="dn-tag bear">$68k −4.77M</span> (was −10.98M
              — eased materially as price moved away from the 06-03
              cluster),{' '}
              <span className="dn-tag bear">$50k −4.48M</span>.
              The negative cluster $50k–$68k stacks to roughly{' '}
              <span className="dn-em">−84.7M of dealer amplification</span>{' '}
              from spot down through the crash-put residual zone (sum of
              the listed walls: −4.48 − 5.46 − 7.92 − 5.44 − 11.63 − 19.25
              − 5.87 − 4.77 − 19.85 = −84.67M; audit DN-006 corrected
              v1&rsquo;s −83.7M summary to the actual −84.7M).{' '}
              <span className="dn-em">
                The dealer book is structurally offered into a fade with
                the $64k near-spot wall and the $60k crash-put zone right
                under live spot. The amplification regime is deeper than
                06-03 and the structural floor in the near-strike negative
                cluster has rotated down to $60k–$65k. The squeeze-side
                positive overhead at $80k is ~$15.6k overhead — a full
                +24% climb to reach the dampening regime
              </span>. 4JUN26 0.3DTE{' '}
              <span className="dn-tag bear">−6.82M</span> settles at the
              08:00Z print today (~7h 55m ahead of this snapshot); the
              post-settle ex-4JUN aggregate would be roughly −52.9M −
              (−6.82M) = −46.1M, still net negative. Forward expiries:{' '}
              <span className="dn-tag bear">5JUN 1.3 −15.89M</span>{' '}
              <span className="dn-em">(the dominant amplifier on the strip
              — DEEPENED from yesterday&rsquo;s −14.89M reading by an
              additional −$1.0M rather than resolving through the press;
              the chunk has not been pressed off the book as the previous
              note projected)</span>,{' '}
              <span className="dn-tag bear">6JUN 2.3 −1.67M</span>,{' '}
              <span className="dn-tag bear">7JUN 3.3 −0.03M</span>,{' '}
              <span className="dn-tag bear">12JUN 8.3 −8.01M</span>,{' '}
              <span className="dn-tag bear">19JUN 15.3 −5.38M</span>,{' '}
              <span className="dn-tag bear">26JUN 22.3 −23.59M</span>{' '}
              (the monthly expiry, heaviest forward by total weight),{' '}
              <span className="dn-tag bull">31JUL 57.3 +2.78M</span> (was
              +4.53M — eased),{' '}
              <span className="dn-tag bull">28AUG 85.3 +0.74M</span>,{' '}
              <span className="dn-tag bull">25SEP 113.3 +0.51M</span> (was
              +2.86M — eased materially),{' '}
              <span className="dn-tag bull">25DEC 204.3 +3.29M</span> (was
              +5.03M — eased),{' '}
              <span className="dn-tag bull">26MAR27 295.3 +0.30M</span>.
              The 5JUN −15.89M chunk remains the dominant near-dated
              negative weight, and it deepened rather than resolving —
              the press has NOT taken the gamma off the strip ahead of
              tomorrow&rsquo;s 08:00Z settle; ex-5JUN forward aggregate
              (post-4JUN settle) ≈ −46.1M − (−15.89M) = −30.2M, still net
              negative. The ladder past 5JUN does NOT carry a fresh
              amplifier of similar weight, but the 26JUN monthly carries
              structural weight at 22.3 DTE.
            </p>

            <p>
              IV median across 1,000 instruments is{' '}
              <span className="dn-tag bear">48.9%</span> (up from 47.6% /
              998 instruments on 06-03 — a +1.3pt vol bid as price
              extended through $65k) against 30D close-to-close RV of{' '}
              <span className="dn-tag">35.33%</span> — chain-level
              richness <span className="dn-tag">~+13.6pt</span> (vs ~+13.6pt
              on 06-03, unchanged — IV and RV moved up together, IV by
              +1.3pt and RV by +1.30pt, the spread held). A chain-median
              across N instruments, <span className="dn-em">not</span> a
              tradable spread; expiry-/strike-level vega, skew and term
              structure remain not loaded; the vol read stays
              framework-only. 1,000 instruments today vs 998 on 06-03 —
              basically flat chain; the 3JUN 0.3DTE −4.30M cleared at
              08:00Z 06-03 and the 4JUN 0.3DTE −6.82M was listed for the
              next day; ~no net change in chain breadth. RV methodology:
              30D close-to-close, logret.std × √365 × 100 on the last 30
              daily log returns (= 31 consecutive daily closes) anchored
              to parquet last bar 2026-06-04 00:06Z; the underlying
              31-close window now includes the 06-03 −3.91% close, pushing
              30D RV from 34.03% (06-03 note) to 35.33% (+1.30pt vol
              expansion). For reference, last 29 returns / 30 closes
              reads 35.57%; the 35.33% page value comes from 30 returns.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Tier-1 mostly FETCH-FAILED on this render (10Y / TIPS / 5Y5Y BE / NFCI / Fed liq / US-JP spread all unavailable) — only HY OAS −1bp to 2.71%, DXY +0.02 to 99.22, MOVE 73.6 (+0.15), USD/JPY 160.04 (+0.07) carried · BTC-vs-TradFi decoupling extended further to −15.02pt (was −14.18pt) — BTC −13.85% vs NQ +1.17%</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape is largely unavailable today — most Tier-1
                fetches failed — and the partial reads that landed barely
                moved while BTC dumped another −3.59%
              </span>. Dashboard render is 2026-06-03 22:19Z, ~1.78h before
              the snapshot. <em>Data-integrity flag</em>: US 10Y nominal,
              10Y TIPS real, 5Y5Y BE inflation, Chicago Fed NFCI, Fed net
              liquidity, US-JP 10Y spread, and all Tier-3 inflation rows
              are <em>fetch-failed</em> on this render — the rates panel
              that has anchored the macro read across the lineage is
              partially blind today. The cross-reference for re-grow gates,
              real-rates risk-off, and liquidity is{' '}
              <span className="dn-em">stale-from-06-03</span> on those lines.
              What DID carry: HY OAS{' '}
              <span className="dn-tag bull">2.71% (−1.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.35</span>, episodic z{' '}
              <span className="dn-tag bull">−1.50</span> — still a deep
              risk-on episodic (RISK-ON tag), eased 1bp on the day so the
              re-grow gate (2.78%) is now 7bp away (was 6bp on 06-03 —
              re-opened by 1bp); MOVE bond vol{' '}
              <span className="dn-tag">73.6 (+0.15)</span> — basically flat
              on the day, still loose; DXY{' '}
              <span className="dn-tag bear">99.22 (+0.02 day)</span>,
              episodic z <span className="dn-tag bear">+1.15</span> — flat
              on the day, episodic still above the +1.0 threshold; USD/JPY{' '}
              <span className="dn-tag">160.04 (+0.07 day; +0.42 since
              05-31)</span> (yen softer); USD/CNY{' '}
              <span className="dn-tag bull">6.7617 (~flat)</span>, episodic
              z <span className="dn-tag bull">−1.91</span> — still episodic
              loose. JGB 10Y stale 63d at 2.52% (the staleness count grew
              from 60d on 06-03 — the monthly print has not refreshed).{' '}
              <span className="dn-em">
                Net: HY OAS re-opened the credit gate by 1bp (now 7bp from
                fire vs 6bp on 06-03); the rate-side gate, the
                reclaim-long rates filter, and the real-rates risk-off read
                are all FETCH-FAILED today and CANNOT be advanced or
                falsified from this render — they carry from 06-03 as
                last-known values pending the next clean render. The macro
                tape stays net risk-on on the line that worked (HY OAS) and
                blind elsewhere; BTC&rsquo;s −3.59% extension on the day
                still came on its own catalyst (cycle ladder break +
                deeper dealer amplification + cadence step), not on macro.
                The BTC-vs-TradFi decoupling extended to −15.02pt this
                print (BTC −13.85% vs NQ +1.17%) from −14.18pt on 06-03 —
                a further −0.84pt of decoupling, mostly because BTC dumped
                another tier on its own while NQ eased −0.84pt; the
                decoupling read remains endogenous-to-crypto
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
                <tr><td>US 10Y nominal</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">FETCH FAILED · carry from 06-03 (4.47%, +2.0bp · gate 6bp from fire)</td></tr>
                <tr><td>10Y TIPS real</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">FETCH FAILED · carry from 06-03 (2.07%)</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">FETCH FAILED · carry from 06-03 (2.26%)</td></tr>
                <tr><td>HY OAS</td><td className="num">2.71%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.35</td><td className="num bull">−1.50</td><td className="bull">loose · risk-on episodic · 7bp from re-grow gate (eased 1bp vs 06-03)</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">FETCH FAILED · carry from 06-03 (−0.510, stale 11d)</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">73.6</td><td className="num">+0.15</td><td className="num">−0.26</td><td className="num">+0.03</td><td className="neut">loose · basically flat on the day</td></tr>
                <tr><td>DXY</td><td className="num">99.22</td><td className="num">+0.02</td><td className="num">+0.83</td><td className="num bear">+1.15</td><td className="bear">firmer · episodic above +1.0</td></tr>
                <tr><td>Fed net liquidity</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">FETCH FAILED · carry from 06-03 ($5.872T, level unchanged)</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.04</td><td className="num bear">+0.07</td><td className="num bear">+1.33</td><td className="num bear">+1.28</td><td className="bear">yen softer · +0.42 since 05-31</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">FETCH FAILED · carry from 06-03 (1.95%)</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7617</td><td className="num">~flat</td><td className="num bull">−1.92</td><td className="num bull">−1.91</td><td className="bull">no tag · loose · ~flat vs 06-03</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp (monthly · stale 63d)</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean · staleness count grew</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary
              00:00Z — <span className="dn-em">a 7-day rolling read, not
              today</span>). Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.251</span> (eased from
              06-03&rsquo;s 0.258, right at the NORMAL / IDIOSYNCRATIC
              boundary — and the regime tag stays NORMAL). BTC&rsquo;s
              listed ties ranked by |r| have weakened materially across
              every macro lead: CL{' '}
              <span className="dn-tag">−0.264</span> (was −0.314), BRENT{' '}
              <span className="dn-tag">−0.248</span> (was −0.302), JP225{' '}
              <span className="dn-tag">+0.189</span>, SILVER{' '}
              <span className="dn-tag">+0.174</span>, NQ{' '}
              <span className="dn-tag">+0.172</span> (was +0.220 — fell
              further, the BTC↔NQ tie continues to loosen), TSLA{' '}
              <span className="dn-tag">+0.170</span>, GOLD{' '}
              <span className="dn-tag">+0.152</span>, SP500{' '}
              <span className="dn-tag">+0.143</span>, PLAT{' '}
              <span className="dn-tag">+0.138</span>, JPY{' '}
              <span className="dn-tag">−0.127</span>, GOOGL{' '}
              <span className="dn-tag">+0.126</span>, EUR{' '}
              <span className="dn-tag">+0.121</span>, COPPER{' '}
              <span className="dn-tag">+0.106</span>. 7d performance:{' '}
              <span className="dn-tag bear">BTC −13.85%</span> (extended
              from 06-03&rsquo;s −12.17% — the 7d window now extends through
              the 06-03 close), NQ{' '}
              <span className="dn-tag bull">+1.17%</span> (vs +2.01% — eased
              ~−0.84pt), SP500{' '}
              <span className="dn-tag bear">−0.12%</span> (vs +1.05% — flipped
              to a small loss), JP225{' '}
              <span className="dn-tag bull">+3.61%</span>, MSFT{' '}
              <span className="dn-tag bull">+2.89%</span> (eased from +5.69%),
              NVDA <span className="dn-tag bull">+0.87%</span> (eased from
              +3.76%), META <span className="dn-tag bear">−2.35%</span>{' '}
              (extended from −1.68%), AAPL{' '}
              <span className="dn-tag bull">+0.55%</span>, GOOGL{' '}
              <span className="dn-tag bear">−8.20%</span>{' '}
              (a new 7d single-name weak read), AMZN{' '}
              <span className="dn-tag bear">−8.02%</span>, TSLA{' '}
              <span className="dn-tag bear">−4.13%</span>{' '}
              (extended). Metals soft: GOLD{' '}
              <span className="dn-tag bull">+0.01%</span> (basically flat),
              SILVER <span className="dn-tag bear">−2.27%</span>, PLAT{' '}
              <span className="dn-tag bear">−3.35%</span>, PALL{' '}
              <span className="dn-tag bear">−5.73%</span>.
              Energy firmed: CL{' '}
              <span className="dn-tag bull">+5.33%</span>, BRENT{' '}
              <span className="dn-tag bull">+3.34%</span>, NGAS{' '}
              <span className="dn-tag bull">+5.22%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine extended to
                ~−15.02pt (BTC −13.85% vs NQ +1.17%) from −9.18pt on 06-02
                and −14.18pt on 06-03 — the gap widened another ~−0.84pt
                day-on-day, almost entirely because BTC extended its
                BTC-internal down-leg another tier while NQ gave back a
                small amount. The decoupling read remains
                endogenous-to-crypto; BTC&rsquo;s listed ties to NQ, CL,
                BRENT all weakened further toward the IDIOSYNCRATIC band.
                Mean |r| at 0.251 sits a hair above the IDIOSYNCRATIC
                threshold — the next print could shift the regime label
              </span>. JGB monthly 2.52% carries EXTREME RISK-OFF monthly
              tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · cover-bounce scout DROPPED unchanged (anchor lost ~$8.8k overhead) · runner / put-spread tail remain closed · short framework watch remains NON-ACTIONABLE but structurally vindicated TWICE — codex hostile audit should dispose to CLOSED-VINDICATED on this pass · mean-revert long scout (framework watch) advanced: TWO of three promotion legs now CLEARED (8h/1d TD9 BUY confirmed + funding cumulative ≥ 4h cleared by ~5.5×); 1h reclaim leg at $68k area still ~$4k overhead · no fresh trades on this snap</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 06-03 framework watches printed cleanly again — Shape B
                fired (Δnet −7,177 step 41 min after the BJ 13–15 window),
                the multi-TF TD9 BUY stack confirmed two cycle frames at
                once (8h AND 1d TD9 BUY printed today), and funding
                cumulative cleared the long-side gate by ~5.5× — but per
                audit DN-001 discipline carried, the desk did not size on
                any of these signals
              </span>. The cover-bounce scout from 05-31 remains DROPPED —
              the cycle anchor is now ~$8.8k overhead and three legs are
              still required (anchor reclaim AND dealer-book repair AND
              cover-shape) with none progressing. The runner and the 29MAY
              put-spread tail stay closed unchanged. The short framework
              watch has now been structurally vindicated TWICE (06-02
              −6,621 step on cadence + 06-03 −7,177 step off-window with
              the new lineage extreme); the next audit pass should dispose
              this card to CLOSED-VINDICATED on this audit cycle. The new
              mean-revert long scout from 06-03 advanced two of three
              promotion legs in 24h (8h/1d TD9 BUY confirmed + funding
              cumulative ≥ 4h cleared by a wide margin); the third leg
              (1h reclaim above $68k area) remains ~$4k overhead so the
              card stays NON-ACTIONABLE for one more note. The trade book
              today is unchanged from 06-03 in terms of live size (none);
              the desk maintains discipline through a three-tier confirmed
              cycle ladder break with the deepest oversold counter-stack
              of the lineage now built.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">closed · primary · runner ladder complete · closed on 29MAY 08:00Z expiry settle (unchanged status carried from 06-03)</span>
              <div className="dn-trade-name">
                Flip-extend short — closed on 29MAY 08:00Z expiry settle (unchanged from 06-03)
              </div>
              <div className="dn-thesis">
                Status unchanged. The retrospective read continues to
                vindicate the close: 05-30 / 05-31 daily closes ($73,857 /
                $73,653) marked the two-day post-amplifier bounce, then
                06-01 broke ($71,392), 06-02 dumped (−6.53%), 06-03
                extended (−3.91%), and the 06-03 close at $64,118 sits a
                further $2,612 below 06-02&rsquo;s structural break. The
                re-entry path remains a fresh structural setup, not a
                roll.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (amplifier settle) · no residual position · unchanged from 06-03</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">do not chase a re-entry into a multi-TF TD9 BUY simultaneous print with funding off cap and OI shrinking — a chase short here would invert the lineage discipline · do not re-add on the framework-watch short scout&rsquo;s vindication (it remains NON-ACTIONABLE)</span></div>
              </div>
              <div className="dn-gating">
                <b>Trade closed.</b> The audit-cycle discipline holds: no
                roll, no average, no late-tier add.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">DROPPED · scout · cycle anchor lost three tiers down · ~$8.8k overhead, no progress on any leg</span>
              <div className="dn-trade-name">
                Cover-bounce scout — DROPPED unchanged (anchor reclaim is now ~$8.8k overhead on close)
              </div>
              <div className="dn-thesis">
                Status unchanged from 06-03. The cycle anchor remains lost
                and the overhead band has grown to ~$8.8k on close; the
                three legs of the cover-bounce path (anchor reclaim AND
                dealer-book repair AND cover-shape flow) are all
                un-progressed — gamma is deeper short, the wall map is
                rotated below spot, and the position book is gross-grown
                on the short side. A long re-entry on the cover-bounce
                path requires a structural inflection that this note does
                not see.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout status</span><span className="dn-lvl-v">DROPPED (unchanged) · cycle anchor lost three tiers down · spot now ~$8.8k below the recomputed D-SMA100 $73,166</span></div>
                <div><span className="dn-lvl-k">re-entry threshold (carried; not progressing)</span><span className="dn-lvl-v bull">1d close &gt; D-SMA100 $73,166 AND aggregate GEX flips back &gt; 0 AND 1h cover-shape print (OI shrinking + spot CVD bid + SM short_btc bleeds) — three legs, all required; none are progressing</span></div>
                <div><span className="dn-lvl-k">no long entry here</span><span className="dn-lvl-v bear">do not buy the 06-03 / 06-04 dump on the multi-TF TD9 BUY simultaneous print as a cover-bounce — this is a different setup than the mean-revert scout below, and the cover-bounce path requires anchor reclaim</span></div>
              </div>
              <div className="dn-gating">
                <b>Trade dropped (unchanged).</b> The mean-revert long
                scout below is the separate setup keyed to
                oversold-reversal exhaustion; the cover-bounce path is
                gated by anchor reclaim.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · short scout · NON-ACTIONABLE · structurally vindicated TWICE (06-02 Δnet −6,621 on cadence + 06-03 Δnet −7,177 off-window with the new lineage extreme) · awaiting codex dispose to CLOSED-VINDICATED on this audit pass</span>
              <div className="dn-trade-name">
                Anchor-break short scout — framework watch only, structurally vindicated TWICE; codex should dispose CLOSED-VINDICATED
              </div>
              <div className="dn-thesis">
                Shape B fired again at the 06-03 07:41Z step (Δnet
                −7,177 — the new lineage-largest single-minute Δ),
                41 min after the BJ 13–15 window closed. The structural
                vindication chain is now two consecutive prints: 06-02
                06:46Z / 14:46 BJ Δnet −6,621 on cadence (inside the
                window — per audit DN-007 the UTC suffix is 06:46Z, not
                v1&rsquo;s 14:46Z typo), 06-03 07:41Z Δnet −7,177
                off-window by 41 min but at the
                lineage-largest single minute. The desk did not size on
                either signal per audit DN-001 carried. Going forward,
                the structural setup is materially exhausted on the
                short side: the multi-TF TD9 BUY stack confirmed across
                five frames simultaneously, funding cumulative ~22.15h
                off-cap inside the 24h window, OI shrinking on the 24h,
                and the 5JUN amplifier is now ~32h ahead at the 08:00Z
                5JUN settle. A chase-add short into this setup after
                two structural vindications already complete and a
                ~22.15h funding cap-relief print would not pass the
                audit. The card should be disposed CLOSED-VINDICATED on
                this audit pass — the codex hostile audit will
                determine the formal status.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">06-03 Shape B trigger (FIRED, off-window by 41 min)</span><span className="dn-lvl-v bear">1h close &lt; $70,718 AND fresh Δnet ≤ −3k re-stack — both legs FIRED at 06-03 07:41Z (BJ 15:41 06-03) with Δnet −7,177 at spot $67,192; 41 min after the BJ 13–15 window closed (cadence time-pin weakened, but the cycle continuation itself confirmed on a fourth consecutive print and at the lineage extreme)</span></div>
                <div><span className="dn-lvl-k">structural ladder progress (06-03 reference levels)</span><span className="dn-lvl-v">$70k wall fully resolved through (06-02 reference: $70k −28.64M → 06-03: −7.39M → today: not in top 10, &lt; −5M) · $65k wall PRESSED THROUGH (06-03 reference $65k −15.48M → today $65k −19.25M — DEEPENED rather than resolved, the strike sits ~$0.4k under spot) · $60k crash-put wall is now the heaviest overall at −19.85M (was −15.12M — deepened as price approached) · the original 06-03 ladder rung $65k → $60k is partially complete · the 5JUN amplifier itself DEEPENED to −15.89M (was −14.89M) — the press has not taken the gamma off the strip</span></div>
                <div><span className="dn-lvl-k">recommended audit disposition</span><span className="dn-lvl-v">CLOSED-VINDICATED · two consecutive structural vindications (06-02 −6,621 on cadence + 06-03 −7,177 off-window with the lineage extreme) without a live entry · the framework-watch language has carried as long as the audit should allow; this is the audit pass that should dispose it</span></div>
                <div><span className="dn-lvl-k">amplifier window status</span><span className="dn-lvl-v">5JUN26 08:00Z settle (1.3 DTE today) · −15.89M today vs −14.89M on 06-03 (+$1.0M deepening) · the chunk DEEPENED rather than resolving — the press has not removed the gamma; the chunk settles at the 08:00Z print ~32h ahead of this snap</span></div>
              </div>
              <div className="dn-gating">
                <b>Status:</b> NON-ACTIONABLE (framework watch only,
                carried) pending codex audit disposition. After two
                consecutive structural vindications and the largest
                single-minute Δnet of the lineage already printed without
                a live entry, the card should be disposed
                CLOSED-VINDICATED on this audit pass.{' '}
                <b>Hard rule:</b> no entry on a press-already-completed
                tape; no amplifier-fade entries inside the last 24h of
                resolution (5JUN 1.3 DTE is inside that window today).
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">closed · macro tail · closed on 29MAY 08:00Z settle (unchanged status carried from 06-03; re-grow gates re-opened by 1bp on credit; rate-side gate FETCH-FAILED today)</span>
              <div className="dn-trade-name">
                Downside put-spread — closed on 29MAY 08:00Z settle; no roll (HY OAS gate 7bp from fire; 10Y gate FETCH-FAILED today, carry from 06-03)
              </div>
              <div className="dn-thesis">
                Status unchanged. The macro re-grow gates moved on credit
                (HY OAS 2.71%, gate 7bp from fire — eased 1bp vs 06-03)
                while the rate-side gate (10Y &gt; 4.53%) is FETCH-FAILED
                today and carries from 06-03&rsquo;s 4.47% (6bp from fire)
                as a stale-as-of value. The reclaim-long rates filter (10Y
                &lt; 4.55%) carries from 06-03 as TRUE (last clean read
                4.47%) — but it is not freshly verified today. No fresh
                hedge: the BTC-internal cycle ladder break has done
                structurally more than a macro tail at current gate
                distances would, the 5JUN amplifier still has 1.3 DTE
                ahead, and rolling a fresh tail at 12JUN −8.01M or 26JUN
                −23.59M scale would enter vol after a +1.3pt IV bid
                already.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (Deribit 29MAY settle) · no residual position · no roll · HY OAS gate eased 1bp vs 06-03 (7bp from fire); 10Y gate FETCH-FAILED, carry from 06-03 (6bp from fire)</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (fires roll to 12JUN/26JUN)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.71%, 7bp to fire — re-opened by 1bp vs 06-03) OR 10Y &gt; 4.53% close (FETCH-FAILED today; carry from 06-03 at 4.47%, 6bp from fire)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — FETCH-FAILED today, carry from 06-03 as TRUE at 4.47%; the freshly verified-as-of date for this filter is now 06-03</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates remain discretionary
                watches. The macro Tier-1 fetch failure across most
                rate-side indicators today means the 10Y / TIPS / 5Y5Y BE
                / NFCI / Fed liquidity reads cannot be advanced or
                falsified from this render and carry stale. A fresh
                hedge should re-open only on a fresh clean macro-side
                fire, not on BTC-internal exhaustion or stale-carry.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · mean-revert long scout · NON-ACTIONABLE (carried · 2 of 3 promotion legs CLEARED — 8h/1d TD9 BUY confirmed + funding cumulative ≥ 4h cleared by ~5.5×; 1h reclaim above $68k area is the final leg, ~$4k overhead) · the heaviest multi-TF TD9 BUY simultaneous print of the lineage built today</span>
              <div className="dn-trade-name">
                Mean-revert long scout — NON-ACTIONABLE; two of three promotion legs CLEARED, 1h reclaim leg remains ~$4k overhead
              </div>
              <div className="dn-thesis">
                The 06-03 promotion trigger had three legs: (1) 8h OR 1d
                TD9 BUY confirms on next bar close — CLEARED, both
                printed on this scan (8h ⚡ TD9 BUY at $64,307; 1d ⚡ TD9
                BUY at $64,307 — the first cycle-frame TD9 BUY of the
                down-leg). On top, 4h ⚡ TD9 BUY printed at $64,336 (the
                third consecutive 4h TD9 BUY), 15m and 1h ⚡ TD9 BUYs
                printed simultaneously, and 3d/1M are one bar from
                confirming. (2) Funding cumulative ≥ 4h off-cap inside
                the 24h window — CLEARED by a wide margin (~22.15h
                cumulative, ~5.5× the threshold). (3) 1h close above a
                leading-edge reclaim level (framework reference: $68k
                area, with the deeper rung at D-EMA20 $72,879) — NOT
                CLEARED, spot is $64.3k and the 1h close $64,338 is
                ~$3.7k below the $68k leading-edge.{' '}
                <span className="dn-em">
                  Two of three promotion legs cleared inside 24h. The
                  card stays NON-ACTIONABLE per audit DN-001 carried for
                  one more note. A future audited note can promote to
                  0.2R scout if the 1h close prints &gt; $68k with the
                  TD9 BUY stack intact and funding remaining off cap. A
                  single 4h TD9 BUY across this down-leg has now printed
                  three consecutive times ($71,226 on 06-02 → $66,835 on
                  06-03 → $64,336 today); the prior two failed; only the
                  simultaneous multi-TF print + 1h reclaim leg confirms a
                  promotion-grade trigger
                </span>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">structural setup (NOT a live entry)</span><span className="dn-lvl-v">multi-TF ⚡ TD9 BUY stack (15m/1h/4h/8h/1d printed simultaneously at $64,307–$64,338; 3d/1M one bar away) + RSIs at lineage-deep oversold (4h 19.7 / 8h 15.4 / 12h 14.3 / 1d 19.6 new lineage low) + funding cumulative ~22.15h off-cap inside the 24h window (~92% of the window, current streak 6.25h, four discrete runs) + small big-print bid in the 4h window (+364 BTC / 121 prints) — the most exhausted oversold print of the lineage by every metric</span></div>
                <div><span className="dn-lvl-k">would-be promotion trigger (NON-ACTIONABLE from this note · 2 of 3 CLEARED)</span><span className="dn-lvl-v bull">(1) 8h OR 1d TD9 BUY confirms — CLEARED (both printed today, simultaneous with 15m/1h/4h); (2) funding cumulative ≥ 4h off-cap — CLEARED by ~5.5× (~22.15h cumulative); (3) 1h close above leading-edge reclaim — NOT CLEARED (1h close $64,338, leading-edge $68k area is ~$3.7k overhead; framework reference reclaim rung is D-EMA20 $72,879). Promotion requires all three; a future audited note can promote if the 1h reclaim leg clears with the TD9 stack and funding state still intact</span></div>
                <div><span className="dn-lvl-k">structural reference ladder rungs (not order targets)</span><span className="dn-lvl-v">first-bounce target $66k–$66.5k (the $66k −5.87M cluster + 06-03 close zone) · then $68k area (the $68k −4.77M strike, eased materially as price moved through) · second-bounce target W-SMA20 $72,679 / D-EMA20 $72,879 / D-SMA100 $73,166 (the ~$0.5k reclaim band, a full +13% from spot) · invalidation: 1h close &lt; $64,000 with fresh Δnet ≤ −3k re-stack hostile-2 inside the 06-04 BJ 13–15 window OR a clean 5JUN −15.89M settle vol event</span></div>
                <div><span className="dn-lvl-k">size cap if ever promoted</span><span className="dn-lvl-v">0.2R total (scout ceiling) on the cumulative trigger · no stacking on the simultaneous multi-TF TD9 BUY alone (the prior two 4h TD9 BUYs at $71,226 and $66,835 both failed; the cumulative trigger requires the 1h reclaim leg)</span></div>
                <div><span className="dn-lvl-k">amplifier window risk</span><span className="dn-lvl-v">5JUN26 08:00Z settle (1.3 DTE today) · −15.89M today (deepened from −14.89M) · the chunk has NOT been pressed off the strip and could still print a press leg in the next 32h before settle; a fresh re-stack hostile-2 inside the 06-04 BJ 13–15 window OR a 5JUN settle vol event would invalidate the mean-revert read</span></div>
              </div>
              <div className="dn-gating">
                <b>Status:</b> NON-ACTIONABLE (framework watch only,
                carried). Two of three promotion legs CLEARED. The
                final leg (1h reclaim) is ~$3.7k overhead — a real
                reclaim leg, not a snap-distance reclaim. <b>Hard
                rule:</b> no entry while the 5JUN amplifier is inside
                its 0DTE settle window (1.3 DTE today) without the 1h
                reclaim leg cleared; the 5JUN chunk deepened
                rather than resolved on this pass and could still
                print a press leg before tomorrow&rsquo;s 08:00Z
                settle.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · cycle cadence WEAKENED off-window but the step itself fired on a fourth consecutive print at the lineage-largest single-minute Δ · 06-03 BJ 13–15 window sub-threshold (Δ −1,098, max |Δ| 866) · the cycle continuation step printed at 06-03 07:41Z (BJ 15:41, 41 min AFTER window close) at Δnet −7,177</span>
              <div className="dn-trade-name">
                Squeeze-cycle — cadence time-pin WEAKENED (off-window by 41 min) but cycle continuation step itself fired at the lineage extreme (Δnet −7,177, the largest single-minute Δ of the entire lineage)
              </div>
              <div className="dn-thesis">
                The 05-31 note called the cadence falsified; the 06-02
                note re-armed; the 06-03 note declared CONFIRMED on
                three consecutive prints (the 06-02 BJ 14:46 step the
                third); today the cadence weakened but the step
                continued: the 06-03 BJ 13–15 window passed
                sub-threshold (window Δ <span className="dn-tag">−1,098</span>,
                max |Δnet| <span className="dn-tag">866</span>), but the
                cycle continuation step itself printed 41 min after
                window close at 06-03 07:41Z with Δnet{' '}
                <span className="dn-tag bear">−7,177</span> — the new
                lineage-largest single-minute Δ, eclipsing the 06-02
                06:46Z −6,621 step by +8.4%. The framework now reads:
                <em> cycle alive on a fourth consecutive daily print</em>,
                but the BJ 13–15 time-pin has loosened on the latest
                print only (this 06-03 print sat 41 min off-window; the
                prior three were inside the band per audit DN-001&rsquo;s
                05-30 timestamp correction). The cadence remains a strong
                prior for the first three of four prints and a loosened
                prior for the latest; the cycle itself is alive
                with a four-print chain (05-30 14:01 BJ −5,569 → 06-01
                14:16 BJ −3,137 → 06-02 14:46 BJ −6,621 → 06-03 15:41 BJ
                −7,177; per audit DN-001 the 05-30 timestamp was corrected
                from v1&rsquo;s 22:01 BJ to 14:01 BJ / 06:01Z, which puts
                the print inside the BJ 13–15 band rather than seven hours
                outside it). This is a four-print cadence with the latest
                two larger than prior (the 5,569 → 3,137 step contracted
                before the chain re-expanded; per audit DN-002,{' '}
                <em>not</em> monotonically growing).
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">cadence WEAKENED off-window (06-03 BJ 13–15 window sub-threshold) but step itself fired on a fourth consecutive print (06-03 07:41Z Δnet −7,177, 41 min after window close); secondary BJ 22 did NOT fire today (window Δ −355, max |Δ| 231); the time-pin is loosening but the cycle is alive</span></div>
                <div><span className="dn-lvl-k">primary extension event (06-03, off-window)</span><span className="dn-lvl-v">re-stack hostile-2 + long-side add @ 2026-06-03 07:41Z (BJ 15:41 06-03) · spot $67,192 · Δlong +2,659, Δshort +9,837 (59,792 − 49,955), Δnet −7,177 (largest single-minute Δ of the entire lineage, +8.4% over the 06-02 −6,621 step)</span></div>
                <div><span className="dn-lvl-k">06-03 BJ 13–15 window read</span><span className="dn-lvl-v">window Δ −1,098, max |Δnet| 866 — sub-threshold for the cadence prediction; the cycle continuation step printed 41 min AFTER the window closed (07:00Z), at the lineage-largest single-minute Δ; the time-pin weakened</span></div>
                <div><span className="dn-lvl-k">SM trough (most short) in 24h</span><span className="dn-lvl-v">−46,686 BTC @ 2026-06-03 20:26Z (BJ 04:26 06-04) · the deepest net-short of the lineage; the trough printed ~12h 45m after the 06-03 07:41Z step entry (the extension trough lag has GROWN from ~7h on 06-02 to ~12.7h on 06-03 — the trough is moving away from the step)</span></div>
                <div><span className="dn-lvl-k">post-step price path</span><span className="dn-lvl-v">primary step $67,192 → 24h low $64,109 @ BJ 07:59 06-04 (−$3,083 / −4.59% from step entry over ~16h 18m) → snapshot $64,353 (+$244 / +0.38% reflex bid into the snap, 6 min after the low)</span></div>
                <div><span className="dn-lvl-k">forward gating</span><span className="dn-lvl-v">watch BJ 13–15 window of 06-04 (UTC 05:00–07:00 06-04, ~5h ahead of this snap) for cycle 3 step 4; the time-pin is now weakening and a fresh Δnet ≤ −3k anywhere inside an 8–12h band around the BJ 13–15 window confirms the cycle alive; a sub-threshold-everywhere-in-band print weakens the cadence further but does not falsify (the four-print cadence has the latest two larger than prior — not monotonic — but the chain extends, so a single quiet 24h is needed before falsification; audit DN-002)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the cycle chain extended on
                a fourth consecutive print with the lineage extreme; the
                time-pin loosened off-window by 41 min. The 06-04 BJ
                13–15 window remains the next gating event but the
                surrounding 8–12h band must also be watched given the
                widening time-pin loose.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · cycle anchor lost three tiers (06-03 close $64,118 = deepest close of lineage) · gamma deeper net-short (−52.9M) · funding ~22.15h cumulative off-cap (~92% of 24h, ≥ 4h gate CLEARED by ~5.5×) · multi-TF ⚡ TD9 BUY simultaneous print across 5 frames · short scout NON-ACTIONABLE but vindicated TWICE — codex should dispose CLOSED-VINDICATED · mean-revert long scout 2 of 3 promotion legs CLEARED · cadence WEAKENED off-window but step itself fired at the lineage extreme · macro Tier-1 mostly FETCH-FAILED today (rates / TIPS / Fed liq / NFCI / 5Y5Y BE all unavailable)</span>
            </h2>

            <p>
              Of the 06-03 decision conditions: the 3JUN26 expiry settle
              FIRED clean (−4.30M cleared at 08:00Z 06-03 without a vol
              event of its own — the dump came on the 06-03 07:41Z step,
              19 min before the settle); the 5JUN26 amplifier DEEPENED
              rather than resolving (−14.89M → −15.89M, +$1.0M deeper —
              the press has NOT taken the gamma off the strip as the
              06-03 note projected); the cycle 3 step 3 cadence WEAKENED
              off-window but the step itself fired at the lineage extreme
              (Δnet −7,177 at 06-03 07:41Z, 41 min after window close);
              the anchor reclaim re-entry threshold DID NOT PROGRESS
              (spot now ~$8.8k below anchor); the mean-revert long scout
              promotion trigger advanced 2 of 3 legs (8h/1d TD9 BUY
              CLEARED + funding cumulative ≥ 4h CLEARED by ~5.5×; 1h
              reclaim leg ~$4k overhead); the funding cap relief watch
              FIRED with the most extensive release of the lineage
              (~22.15h cumulative, ~92% of 24h); the cycle continuation
              extension condition FIRED (fresh Δnet ≤ −3k pushed SM
              through −45k at the 06-03 20:26Z trough −46,686); the
              macro re-grow gates moved on credit (HY OAS gate eased 1bp,
              now 7bp from fire) and the rate-side gate is FETCH-FAILED
              today; the reclaim-long rates filter is FETCH-FAILED today
              and carries from 06-03 as TRUE.{' '}
              <em>Six structural conditions fired (3JUN settle clean,
              cadence weakened-but-stepped, funding cap relief at
              lineage extreme, OI shrink, cycle continuation extension,
              two of three mean-revert legs cleared), one structurally
              regressed against the framework prediction (5JUN amplifier
              DEEPENED instead of resolving), one stayed un-progressed
              (anchor reclaim), and a substantial portion of the macro
              tape is unavailable today.</em>{' '}
              The conditions today re-set around a deeper cycle ladder
              break, deeper negative-gamma dealer book, the $60k–$65k
              new structural wall pair, funding fully off cap, the
              heaviest multi-TF TD9 BUY simultaneous print of the
              lineage, and a live cadence-step pattern that has
              loosened its time-pin:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>4JUN26 expiry settles today (08:00Z, ~7h 55m ahead of this snap)</td><td>−6.82M negative chunk clears; ex-4JUN aggregate ≈ −46.1M still net negative — small amplification reduction inside the day</td><td>monitor — a clean settle without a vol event keeps the gating event on the 5JUN −15.89M chunk (1.3 DTE); a vol event at the 08:00Z print would extend the dump</td></tr>
                <tr><td>5JUN26 amplifier window (1.3 DTE today, 08:00Z 5JUN)</td><td className="bear">heaviest negative single-expiry weight at −15.89M (was −14.89M on 06-03, +$1.0M DEEPENED — the press has NOT taken the gamma off the strip · the chunk has 1.3 DTE before settle and could still print a press leg of its own before 08:00Z 5JUN)</td><td>monitor — this is the dominant structural reference window in the next 32h; no live position to carry, but a fresh Δnet ≤ −3k re-stack inside the 06-04 BJ 13–15 window or anywhere in an 8–12h band would flag continuation toward the 5JUN settle</td></tr>
                <tr><td>Cycle 3 step 4 cadence (BJ 13–15 on 06-04, ~5h ahead — time-pin LOOSENING)</td><td className="bear">next BJ 13–15 window = 2026-06-04 05:00–07:00 UTC (~5h from snap); a fresh Δnet ≤ −3k anywhere in an 8–12h band around the window (widened cadence read after the 06-03 41-min off-window print) confirms the cycle alive on a fifth consecutive print; a sub-threshold-everywhere print weakens but does not falsify (the four-print cadence has the latest two larger than prior — not monotonic — but the chain extends, so a quiet 24h is needed before falsification; audit DN-002)</td><td>watch as the dominant pre-snap framework event of the next 24h; if cadence step fires anywhere in band, the mean-revert long scout stays NON-ACTIONABLE for another note (and the short scout&rsquo;s &ldquo;CLOSED-VINDICATED&rdquo; disposition needs another look); if the band passes sub-threshold, the mean-revert long scout&rsquo;s structural setup advances</td></tr>
                <tr><td>Anchor reclaim (long re-entry threshold, cover-bounce path)</td><td className="bull">1d close &gt; D-SMA100 $73,166 AND aggregate GEX flips back &gt; 0 AND 1h cover-shape print — three legs required; ~$8.8k overhead, none progressing</td><td>no action — the cover-bounce scout remains DROPPED unchanged</td></tr>
                <tr><td>Mean-revert long scout promotion trigger (2 of 3 CLEARED)</td><td className="bull">(1) 8h OR 1d TD9 BUY confirms — CLEARED (both printed today simultaneously); (2) funding cumulative ≥ 4h off-cap — CLEARED by ~5.5× (~22.15h); (3) 1h close above leading-edge ($68k area) — NOT CLEARED (1h close $64,338, ~$3.7k overhead); promotion requires all three</td><td>monitor — a future audited note can promote to 0.2R scout if the 1h reclaim leg clears with TD9 stack and funding state intact; non-actionable from this note · a single multi-TF TD9 BUY simultaneous print without the reclaim leg is not promotion-grade (the prior 4h TD9 BUYs at $71,226 and $66,835 both failed)</td></tr>
                <tr><td>Funding cap relief (leverage gate signal — FIRED at lineage extreme)</td><td className="bull">cumulative off-cap inside the 24h window ~22.15h across four discrete runs (long 15.37h earlier-day run + 2 min + 30 min ribbons + current 6.25h streak); ≥30-consecutive-minute watch satisfied on 3 of 4 runs and the ≥4h cumulative gate CLEARED by ~5.5×; the most extensive lineage release</td><td>monitor — sustaining or extending the current 6.25h streak through the 06-04 BJ 13–15 window keeps the leg cleared; a fresh re-pin to cap inside that window would re-arm a residual short framework watch even though the cumulative count remains cleared</td></tr>
                <tr><td>Cycle continuation (alive on a four-print chain · time-pin loosening)</td><td className="bear">fresh re-stack SM Δ ≤ −3k pushing SM &lt; −47k AND 1h close &lt; $64,000 anywhere in the 8–12h band around the 06-04 BJ 13–15 window — cycle 3 step 4 extension signature; if it fires, ladder rung $60k −19.85M (the crash-put zone) is the next price target, then $55k −5.46M</td><td>no live short position; the four-print chain has the latest two larger than prior — not monotonic but with the 06-03 print the lineage extreme (audit DN-002) — so each fresh print elevates the base-rate prior of the next; if it fires, the mean-revert long scout&rsquo;s setup is invalidated for at least one more cycle</td></tr>
                <tr><td>Macro tail re-grow (rate-side gate FETCH-FAILED today)</td><td className="bear">HY OAS &gt; 2.78% (7bp to fire, was 6bp on 06-03 — re-opened by 1bp) OR 10Y &gt; 4.53% (FETCH-FAILED today, carry from 06-03 at 4.47% / 6bp to fire)</td><td>roll hedge to 12JUN/26JUN forward only if the macro side fires on a freshly clean render; the macro Tier-1 fetch failure today blocks fresh rate-side reads</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — FETCH-FAILED today, carry from 06-03 as TRUE at 4.47%; the filter is freshly verified-as-of 06-03 only</td><td>standalone filter carries TRUE on stale-from-06-03 last read; the mean-revert long scout&rsquo;s setup matches the filter, but the scout itself is NON-ACTIONABLE</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the 06-04 BJ 13–15 window (or anywhere in an
                8–12h band around it given the time-pin loosening)
                prints a fifth-consecutive re-stack hostile-2 inside
                the cadence (Δnet ≤ −3k pushing SM net through −47k
                with 1h close &lt; $64k — cycle 3 step 4 continuation
                toward the $60k crash-put zone and the 5JUN 08:00Z
                amplifier settle), or whether the band passes
                sub-threshold and the mean-revert long scout&rsquo;s
                1h reclaim leg fires (1h close above $68k area with
                the multi-TF TD9 BUY stack and the cumulative funding
                relief intact). The structural backdrop today is the
                deepest cycle ladder break (three tiers) + the
                deepest negative-gamma + the largest single-minute SM
                re-stack of the lineage + the heaviest multi-TF TD9
                BUY simultaneous print of the lineage — every metric
                is stretched further than 06-03. The question for the
                next 24h is whether the cycle continues a fifth print
                (continuation press toward the $60k–$65k crash-put
                zone into the 5JUN settle) or whether the multi-TF
                TD9 BUY stack pulls a 1h reclaim leg through and the
                mean-revert long scout&rsquo;s third leg clears
              </span>. Until then this note runs as written: the
              runner and the put-spread tail stay closed, the
              cover-bounce scout is DROPPED unchanged (no anchor
              reclaim progress), the framework-watch short scout has
              been vindicated twice and the codex audit should
              dispose it CLOSED-VINDICATED on this pass, the
              mean-revert long scout&rsquo;s promotion trigger has
              cleared two of three legs (waiting on the 1h reclaim),
              the cycle cadence framework continues with a loosened
              time-pin and a four-print chain at the lineage extreme,
              and the macro re-grow gates eased on credit while the
              rate-side gate is FETCH-FAILED today (carry from 06-03
              with the freshly verified-as-of date now 06-03 for the
              rates filter). The BTC-vs-TradFi decoupling extended to
              −15.02pt as BTC dumped further on its own; the engine
              MTF frames printed a simultaneous multi-frame ⚡ TD9 BUY
              stack — the heaviest of the lineage; the 5JUN amplifier
              DEEPENED instead of resolving. The right read for the
              next 24h is{' '}
              <em>watch the 06-04 BJ 13–15 band — it is the next
              gating event; and watch the 1h close vs $68k as the
              final promotion leg of the mean-revert scout</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit · verdict
              BLOCK-CRITICAL on v1 · 7 findings (1 CRITICAL + 2 MAJOR
              + 4 MINOR) · all applied · record:{' '}
              <code>audits/2026-06-04-desk-note.md</code>
            </span>
            This page was authored as v1 from the 2026-06-04 00:05Z atomic
            snapshot per STAGE A of the daily desk-note runbook and
            submitted to STAGE B for codex hostile-but-fair audit
            (xhigh effort, arithmetic recomputed against{' '}
            <code>/opt/btc-monitor/live_db.json</code> +{' '}
            <code>/opt/btc-data/data/btcusdt_1m_*.parquet</code> via{' '}
            <code>/opt/btc-data/.venv/bin/python3</code>; GEX, MTF,
            macro, and cross-asset artifacts cross-referenced).{' '}
            <b>Codex verdict on v1:</b> <em>BLOCK-CRITICAL</em> — a
            lineage timestamp on the 05-30 inherited step was eight
            hours late, which inverted the BJ 13–15 cadence claim for
            that print; two MAJOR findings (a non-monotonic four-print
            chain described as monotonically larger, and an MTF
            provenance / freshness misstatement) and four MINOR
            findings (retail percentage peak conflated with long-BTC
            peak timestamp, short-BTC post-bleed excess overstated,
            negative wall cluster sum off by ~$1.0M, and a UTC suffix
            typo on the 06-02 cadence step) accompanied it.{' '}
            <b>Codex-confirmed clean on v1:</b> requireViewer gating
            (first statement of the default export, route matches),
            metadata canonical path, JSX integrity (one main / one
            article, balanced tags, <code>tsc --noEmit</code>=0),
            forward-looking scope discipline (scout deferred /
            framework-only framing), loaded-data boundaries (NTT,
            max-pain, strike-IV, BTC/NQ ratio NOT LOADED honored),
            GEX wall map + flip + Deribit-index 1,000-instrument check
            ($64,410), IV / 30D RV arithmetic (48.9% − 35.33% =
            +13.57pt; parquet 30D RV 35.33% via{' '}
            <code>logret.std × √365 × 100</code>), live-tape pin and
            24h deltas at line 45687 (spot $64,353.22, perp $64,321.0,
            premium −$103.97, funding +3.252% ann, OI 104,786 BTC, SM
            net −44,929), funding cap arithmetic (1,441 rows, 112 at
            cap = 7.77%, 1,329 off-cap rows = ~22.15h cumulative, 375
            min current streak from 06-03 17:51Z), the 06-03 07:41Z
            cadence step (Δlong +2,659 / Δshort +9,837 / Δnet −7,177,
            largest single-minute Δ of the lineage, +8.4% over the
            06-02 −6,621 step), the BJ 13–15 quiet-window read on
            06-03 (window Δ −1,098, max |Δ| 866), MA matrix and
            W-SMA150/W-SMA200 non-computability + W-EMA150/W-EMA200
            seeded disclosure under the 127-weekly-bar 2024-2026
            parquet subset, macro Tier-1 fetch-failure carry-forward
            (HY OAS 2.71%, MOVE 73.6, DXY 99.22, USD/JPY 160.04,
            USD/CNY 6.7617), and the cross-asset 7d arithmetic (mean
            |r| 0.251, BTC −13.85% vs NQ +1.17% = −15.02pt decoupling).
            <b>v2 applies all 7 findings:</b>{' '}
            <em>DN-001 (CRITICAL):</em> the 05-30 inherited
            smart-money step timestamp corrected from v1&rsquo;s
            22:01 BJ / 14:01Z to 14:01 BJ / 06:01Z, which puts the
            print INSIDE the BJ 13–15 band (the source row at line
            38842 in <code>/opt/btc-monitor/live_db.json</code> shows
            net −25,189 → −30,758, Δnet −5,569.674, spot $73,616.99
            at 2026-05-30 06:01Z; the row at 2026-05-30 14:01Z only
            changes net by −38.18, not −5,569);
            cadence lineage in the lead and the squeeze-cycle trade
            card restated — the prior three prints (05-30 14:01 BJ,
            06-01 14:16 BJ, 06-02 14:46 BJ) all landed inside the BJ
            13–15 band; only the latest 06-03 15:41 BJ / 07:41Z print
            sat 41 min off-window. The cadence time-pin is therefore
            STRONGER than v1 claimed, with loosening confined to the
            latest print rather than the chain;{' '}
            <em>DN-002 (MAJOR):</em> the four-print sequence
            (−5,569 → −3,137 → −6,621 → −7,177) is NOT monotonically
            larger — the 5,569 → 3,137 step contracted before the
            chain re-expanded. All four &ldquo;monotonically growing /
            monotonically larger&rdquo; assertions in the lead, the
            squeeze-cycle dn-thesis, the forward-gating row, and the
            decision-conditions table rewritten as &ldquo;four-print
            cadence with the latest two larger than prior, the 06-03
            step the lineage extreme&rdquo;; the +8.4% claim
            (7,177 vs 6,621) was already constrained to the latest
            pair and stands;{' '}
            <em>DN-003 (MAJOR):</em> MTF provenance — &ldquo;~4 min
            fresher than snapshot anchor&rdquo; was directionally
            wrong; 00:01Z is 4 min OLDER than the 00:05Z snapshot
            anchor. The manifest cell now reads &ldquo;~4 min stale
            vs snapshot anchor&rdquo;, and a disclosure is added that
            the exact 00:01Z scan was not recoverable from the
            rolling <code>mtf_div_latest.html</code> at audit time
            (only the later 00:16Z scan survived in the rolling file;
            MTF archival convention remains an open lineage item);{' '}
            <em>DN-004 (MINOR):</em> the 69.84% market-long peak
            timestamp was conflated with the long-BTC peak. Split
            into two facts in the manifest, lead, and Positioning §:
            retail percentage peaked 69.84% at BJ 14:42–14:47 06-03 /
            UTC 06:42–06:47Z; long-BTC size peaked 18,293 BTC at BJ
            22:21 06-03 / UTC 14:21Z on a row that read mkt_long_pct
            68.64%;{' '}
            <em>DN-005 (MINOR):</em> the post-bleed short-BTC
            comparison rewritten as two facts: 24h short-BTC intraday
            peak 60,729 BTC = +4,693 over the prior 56,036 peak;
            00:05Z snapshot 57,684 BTC = +1,648 above the prior
            56,036 peak after the −3.0k bleed (v1&rsquo;s
            &ldquo;4.7k above&rdquo; at the snapshot overstated);{' '}
            <em>DN-006 (MINOR):</em> the negative-wall cluster summary
            corrected from −83.7M to −84.7M to match the audited sum
            of the listed walls (−4.48 − 5.46 − 7.92 − 5.44 − 11.63
            − 19.25 − 5.87 − 4.77 − 19.85 = −84.67M);{' '}
            <em>DN-007 (MINOR):</em> the trade-card lineage UTC suffix
            typo corrected from &ldquo;06-02 14:46Z&rdquo; to
            &ldquo;06-02 06:46Z / 14:46 BJ&rdquo; (the BJ time is
            14:46; the UTC time is 06:46Z, matching the rest of the
            page and the source tape).{' '}
            <b>Open issues (audit-tracked, not in this note):</b> the
            exact 00:01Z MTF scan is not recoverable from the rolling
            artifact at audit time (only the 00:16Z scan survived;
            the in-page 15m $64,336, 1h $64,338, 4h $64,336, 8h
            $64,307, 1d $64,307 values come from the cited 00:01Z
            scan, while the recoverable 00:16Z scan reads
            $64,303 / $64,266 / $64,289 / $64,266 / $64,259); the
            secondary BJ 22 quiet-window delta of −355 BTC reported
            in v1 was not reproduced under a simple 22:00–23:00 BJ
            window during audit (audit got ~+113 BTC net, max |Δ|
            ~231) — author-method clarification needed before this
            figure is reused; both items tracked verbatim in{' '}
            <code>audits/2026-06-04-desk-note.md</code>.{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1;
            Next 16.x hard-exits in{' '}
            <code>node_modules/next/dist/bin/next:24-28</code> for
            Node &lt; 20.9.0, so a full <code>next build</code> is
            environment-blocked here (lineage carried since 05-21).{' '}
            <code>npx --no-install tsc --noEmit</code> is the build
            proxy; STAGE C re-ran it after the v2 corrections.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-06-04 00:05Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-06-03 22:19Z (~1.78h
            before snapshot) and most rate-side rows are explicitly
            <em> fetch-failed</em> on this render. Levels, sizes, and
            conditions are illustrative of the desk&rsquo;s process, not
            standing recommendations. Past correlation, gamma, and
            positioning patterns do not bind future tape. Derivatives carry
            the risk of total loss and, where leveraged, loss exceeding
            deposited margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The cycle ladder extended a third tier. The dealer book
                deepened net-short-gamma. The leverage gate fully released
                (~22.15h off-cap). The multi-TF TD9 BUY stack printed
                across five frames simultaneously. The cadence step itself
                fired off-window at the lineage extreme. Watch the 06-04
                BJ 13–15 band and the 1h close vs $68k.
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
            v2 · 2026-06-04 00:05Z snapshot · post codex hostile audit ·
            sources: live_db.json · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet (2024-2026 subset) · FRED · Yahoo ·
            Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
