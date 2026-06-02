import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-02 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-02',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-02' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260602() {
  await requireViewer('/desk/2026-06-02');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-02 · v2</span>
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
              <span className="dn-big">$71,268</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−3.49%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-02 00:15Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-02 00:15Z (snapshot pin)</td>
                  <td className="dn-flag">
                    fresh · 1-min · snapshot pin row = 00:15Z; live file has
                    advanced after generation (post-audit; do not treat the
                    file tail as the pin) · 2JUN26 0.3DTE −9.08M settles at
                    08:00Z today (~7.75h ahead of this snap)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-02 00:16Z scan (recoverable rolling file)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    ~1 min fresher than snapshot anchor · in-progress bars ·
                    recoverable state archived in audits/2026-06-02-desk-note.md
                    (the v1 draft cited an 00:01Z scan that was not separately
                    archived; corrected post-audit to the audit-time recoverable
                    00:16Z scan)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-02 00:00Z snapshot</td>
                  <td className="dn-flag">
                    ~15 min stale vs snapshot anchor · Deribit idx $71,600 vs
                    live $71,268 ($332 above live) · 904 instruments (was 938
                    on 05-31; 31MAY 0.3DTE +17M settled at 08:00Z 05-31, 1JUN
                    1.3DTE +19.49M settled at 08:00Z 06-01) · 2JUN26 0.3DTE
                    −9.08M is the next settle (08:00Z 06-02, ~7.75h ahead)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-02 00:01Z
                  </td>
                  <td className="dn-flag">~14 min lag · 7d 1h bars · 22 assets · 166 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-01 22:15Z render</td>
                  <td className="dn-flag">
                    ~2.0h render lag · FRED Tier-1 mostly flat (10Y unchanged
                    at 4.45%, TIPS +1bp to 2.07%, 5Y5Y BE +2bp to 2.26%, HY
                    OAS +2bp to 2.74%, MOVE +3.11 to 73.3 · the firmest
                    Tier-1 move on the day) · DXY +0.10 to 99.01 since
                    05-30 22:15Z print, Fed net liq −$0.058T to $5.872T ·
                    Tier-3 inflation rows still fetch-failed
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-02 00:06Z (btcusdt_1m_2024..2026 subset by desk policy)</td>
                  <td className="dn-flag">
                    ~9 min stale vs snapshot anchor · MA source universe is
                    the 2024-2026 parquet subset (127 weekly bars), not the
                    full btcusdt_1m_* glob — desk policy decision, see audit
                    DN-005 · under this subset W-SMA150 / W-SMA200 are
                    non-computable (short of both windows); W-EMA150 /
                    W-EMA200 print because EMA seeds from available history
                    and are reported as seeded · offsets recomputed against
                    the MA-source price plane (parquet-adjacent ≈ $71,326,
                    matching the MTF scan), not the 00:15Z live pin
                    $71,268.01 — see audit DN-006
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
                  <td className="dn-flag">claims explicitly framework-only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h ann.</span>
              <span className="dn-v bear">+10.95% (cap)</span>
              <span className="dn-src">live · re-pinned to the Binance cap · 24h mean +8.90% (was +4.00% on 05-31, +4.90pt cap-side reset) · cap occupancy 758 / 1441 sampled rows = 52.60% (was 0.1% on 05-31) · single continuous cap run 06-01 19:38 BJ → snap (758 sampled rows, 757 minute intervals · 12.6h, still pinned)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+6.60% → +10.95% (re-pinned cap)</span>
              <span className="dn-src">range +4.16% / +10.95% · trough +4.16% @ 06-01 14:48 BJ (06:48 UTC) · funding never went short-pay this window (vs 05-31&rsquo;s −0.21% trough) — the leverage gate slammed shut as price dropped through the cycle anchor</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+0.44% (+469 BTC)</span>
              <span className="dn-src">live · expansion (vs −373 BTC contraction on 05-31) · SM long_btc −2,519 (long flushed harder again), short_btc +3,707 — fresh short stacking, not de-grossing</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">67.66 / 32.34</span>
              <span className="dn-src">live_db `mkt_long_pct` · re-stacked from 60.35 → 67.66 (+7.31pt back above the prior lineage-peak 63.85 of 05-29) · 24h range 60.18 / 67.68 — retail piled INTO longs as price dropped through anchor (classic trap shape)</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−37.0k (deepest net SHORT of the lineage)</span>
              <span className="dn-src">live · long 8.84k − short 45.87k · short peaked 45.87k @ snap (live high), long_btc trough 7.35k @ 2026-06-01 22:16 BJ (14:16 UTC); SM net trough −37.78k @ 2026-06-02 03:41 BJ (06-01 19:41 UTC) — deeper than any 05-29..05-31 trough</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 05-31 note</span>
              <span className="dn-v bear">−29.2k → −37.0k (−7,878 net; long −1.93k, short +5.94k)</span>
              <span className="dn-src">|Δ|/prior_net = 27.0% · the book RE-LEVERAGED one-sided short (long −1.93k, short +5.94k) · the 05-31 &ldquo;two-sided de-grossing&rdquo; reversed into a one-sided short re-stack across this 24h</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v bear">41.4% / 26.72%</span>
              <span className="dn-src">GEX median IV · 904 inst. (down from 938 on 05-31 · 31MAY/1JUN positive chunks cleared) · vol bid back up +1.5pt as price broke anchor (was 39.9% / 938 on 05-31) · 30D RV ticked up to 26.72% (was 24.91% on 05-31, +1.81pt)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−1.14% (below; live spot ref)</span>
              <span className="dn-src">flip $72,086 (was $72,764 · dropped −$678) · vs live spot $71,268.01 (−1.14%; 71,268.01/72,086 − 1 = −1.135%) · vs GEX file Deribit idx $71,600 (−0.67%; 71,600/72,086 − 1 = −0.674%, matches the file&rsquo;s own dist-to-flip tile of −0.7%) — both refs negative, spot back BELOW the flip on both, aggregate GEX flipped −23.3M (was +62.9M on 05-31, a −$86.2M sign-flip back to net-short-gamma)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The cycle anchor lost on the 06-01 close, the dealer book
                flipped back to net-short-gamma, funding re-pinned the
                Binance cap, and the SM book one-sidedly re-stacked short
                into the break
              </span>. Aggregate GEX went{' '}
              <span className="dn-tag bull">+62.9M</span> →{' '}
              <span className="dn-tag bear">−23.3M</span> across the
              31MAY/1JUN expiry pair, the 0-γ flip moved{' '}
              <span className="dn-tag">$72,764 → $72,086 (−$678)</span>, and
              for the first time of the post-amplifier lineage spot{' '}
              <span className="dn-tag bear">$71,268 sits −1.14% below the
              flip</span> (live-spot reference; the GEX file&rsquo;s own
              Deribit-index dist-to-flip tile prints −0.7% off its
              $71,600 index — both refs negative), not above. Daily closes ran{' '}
              <span className="dn-tag">05-30 $73,857 / 05-31 $73,653</span>{' '}
              (both above the D-SMA100 cycle anchor $73,216) into{' '}
              <span className="dn-tag bear">06-01 $71,392 (−2.49% below
              anchor — the first close below the cycle anchor of the
              lineage)</span>, with the in-progress 06-02 print at{' '}
              <span className="dn-tag bear">$71,267 (−2.66% below
              anchor)</span>. The 05-31 prior note&rsquo;s explicit
              cycle-anchor-lost gate{' '}
              <span className="dn-em">fired clean</span>, and its
              digestion-above-anchor thesis is{' '}
              <span className="dn-em">falsified</span>. The framework&rsquo;s
              cycle-cadence (declared broken on 05-31 after three quiet BJ
              13–15 windows) <span className="dn-signal">re-armed today</span>:
              the lineage&rsquo;s next discrete SM step printed at{' '}
              <span className="dn-tag bear">2026-06-01 14:16 BJ (06:16
              UTC)</span> inside the cadence window —{' '}
              <span className="dn-tag bear">Δnet −3,137</span> (Δlong −2,206,
              Δshort +931 same minute, SM net stepped{' '}
              <span className="dn-tag">−31,018 → −34,156</span>), with a
              second supporting re-stack at{' '}
              <span className="dn-tag bear">2026-06-01 22:06 BJ (14:06
              UTC)</span> (Δnet −1,645, Δlong −346, Δshort +1,299) on the
              same BJ-22 timing as the 05-30 22:01 step. Funding pinned cap
              at <span className="dn-tag bear">06-01 19:38 BJ (11:38
              UTC)</span> and has stayed pinned for{' '}
              <span className="dn-tag bear">758 sampled rows / 757 minute
              intervals (12.6h into the snap)</span>; retail crowded back into longs{' '}
              <span className="dn-tag bear">60.35% → 67.66% (+7.31pt above
              the prior lineage peak)</span>; OI expanded{' '}
              <span className="dn-tag bear">+469 BTC</span> on a −3.49% down
              print — fresh shorts stacking, not de-grossing. The
              post-amplifier digestion is over; this is a confirmed cycle
              ladder break with every leverage signature siding bear.
            </p>

            <p>
              BTC prints <span className="dn-tag">$71,268</span> live,{' '}
              <span className="dn-tag bear">−3.49%</span> on 24h, inside a
              wide <span className="dn-tag">$74,001 / $70,718</span> range
              (high @ 2026-06-01 00:47 UTC / BJ 08:47, low @ 2026-06-01
              16:13 UTC / BJ 00:13 06-02). The 05-31 note&rsquo;s explicit
              kill-condition — <span className="dn-em">&ldquo;1d close{' '}
              &lt; $73,146 (D-SMA100) → first cycle-ladder break of the
              lineage&rdquo;</span> — fired on the{' '}
              <span className="dn-tag bear">2026-06-01 UTC close
              $71,392</span>, $1,824 below the cycle anchor (D-SMA100 today{' '}
              $73,216, recomputed at parquet last-bar; the prior note&rsquo;s
              $73,146 anchor moved $70 higher as today&rsquo;s lower closes
              shifted out the oldest bar). The in-progress 06-02 daily{' '}
              <span className="dn-tag bear">$71,267</span> sits another $125
              under that close. <span className="dn-signal">Every overhead
              MA is now negative</span> (offsets against the MA-source
              parquet-adjacent plane ≈ $71,326, per audit DN-006 disclosure;
              against the 00:15Z live pin $71,268.01 each offset reads
              ~+0.08pt deeper): from the closest line W-SMA20{' '}
              <span className="dn-tag bear">$73,035 (−2.34%)</span> through
              D-SMA100 cycle anchor{' '}
              <span className="dn-tag bear">$73,216 (−2.58%)</span>,
              W-EMA200 seed{' '}
              <span className="dn-tag bear">$73,678 (−3.19%)</span>, D-EMA20{' '}
              <span className="dn-tag bear">$75,249 (−5.22%)</span>, D-EMA50{' '}
              <span className="dn-tag bear">$75,812 (−5.92%)</span>,
              D-SMA150 <span className="dn-tag bear">$75,922 (−6.06%)</span>,
              D-SMA20 <span className="dn-tag bear">$75,928 (−6.06%)</span>,
              D-EMA100 <span className="dn-tag bear">$76,332 (−6.56%)</span>,
              D-SMA50 <span className="dn-tag bear">$77,171 (−7.58%)</span>,
              W-EMA20 <span className="dn-tag bear">$77,106 (−7.50%)</span>,
              W-EMA150 seed{' '}
              <span className="dn-tag bear">$78,136 (−8.72%)</span>, D-EMA150{' '}
              <span className="dn-tag bear">$78,481 (−9.12%)</span>,
              D-SMA200 <span className="dn-tag bear">$79,263 (−10.02%)</span>,
              D-EMA200 <span className="dn-tag bear">$80,846 (−11.78%)</span>.
              The 05-31 &ldquo;cycle anchor is the single load-bearing
              positive offset&rdquo; read is gone — the matrix has zero
              positive offsets on the daily/weekly ladder against live spot.{' '}
              <span className="dn-em">
                The structural backdrop has fully flipped: digestion above
                anchor → break below anchor with confirming leverage,
                positioning, and dealer-book signatures all aligned bear.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · 24h book one-sidedly re-stacked short · BJ 13–15 cadence RE-ARMED with a second BJ-22 step on the same day</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position book de-leveraging of 05-31 was a one-print
                head-fake — today it re-stacked one-sided short
              </span>. SM net is{' '}
              <span className="dn-tag bear">−37,036</span> vs the 05-31
              note&rsquo;s −29,158 — that is{' '}
              <span className="dn-em">+27.02% more short</span>{' '}
              (|−37,036 − (−29,158)| / 29,158 = 27.02%). Components: long_btc{' '}
              <span className="dn-tag bear">10.77k → 8.84k (−1.93k)</span>{' '}
              and short_btc{' '}
              <span className="dn-tag bear">39.93k → 45.87k
              (+5.94k)</span> — the long side shrank further while the short
              side <em>grew</em> by nearly six thousand BTC.{' '}
              <span className="dn-em">This is one-sided re-leveraging on
              the short side, not two-sided de-grossing.</span> Across the
              24h window: long_btc Δ{' '}
              <span className="dn-tag bear">−2,519</span>, short_btc Δ{' '}
              <span className="dn-tag bear">+3,707</span>, net Δ{' '}
              <span className="dn-tag bear">−6,225</span> (−2,519 − 3,707 =
              −6,226 ≈ −6,225 with rounding) — the 24h shape was a long
              flush + significant short stack inside the down-move.
              short_btc peaked at the live snap:{' '}
              <span className="dn-tag bear">45,874 @ 2026-06-02 00:15Z (BJ
              08:15)</span> — there has been no short-side bleed; the
              stacking is still active into the audit time. long_btc trough{' '}
              <span className="dn-tag bear">7,354 @ 2026-06-01 14:16Z (BJ
              22:16)</span> — a fresh lineage-low. SM net trough{' '}
              <span className="dn-tag bear">−37,783 @ 2026-06-01 19:41Z (BJ
              03:41 06-02)</span>, the deepest net-short of the lineage.
            </p>

            <p>
              <span className="dn-signal">
                The framework&rsquo;s BJ 13–15 cadence re-armed today after
                three quiet windows
              </span>. The 24h&rsquo;s largest single-minute step printed at{' '}
              <span className="dn-tag bear">2026-06-01 06:16Z (BJ 14:16
              06-01)</span> with spot{' '}
              <span className="dn-tag">$73,322</span>: long_btc moved{' '}
              <span className="dn-tag">11,167 → 8,961</span> (−2,206 BTC in{' '}
              <em>one minute</em>; 11,167 − 8,961 = 2,206), short_btc moved{' '}
              <span className="dn-tag">42,185 → 43,116</span> (+931 BTC same
              minute), SM net stepped{' '}
              <span className="dn-tag">−31,018 → −34,156</span> (Δnet
              −3,137). That step is a re-stack hostile-2 signature (Δshort
              &gt; 0 + Δlong &lt; 0 same minute) printed{' '}
              <span className="dn-em">inside the BJ 13–15 window</span>{' '}
              (the cadence the 05-31 note declared falsified after 05-29 /
              05-30 / 05-31 each printed sub-threshold). The 05-31
              cadence-broken claim is itself{' '}
              <span className="dn-em">refuted by today&rsquo;s print</span>:
              a 4th-day-after re-emergence is consistent with the original
              cadence rather than a permanent break; the three quiet days
              were a noise pocket, not a regime change. A supporting
              re-stack printed at{' '}
              <span className="dn-tag bear">2026-06-01 14:06Z (BJ 22:06
              06-01)</span> with Δnet −1,645 (Δlong −346, Δshort +1,299) —
              same BJ-22 timing as the 05-30 22:01 step, smaller magnitude
              but same signature. <span className="dn-em">Both windows
              (BJ 13–15 and BJ 22) fired on the same day with re-stack
              hostile-2 shapes</span> — the cadence is not just back, it is
              firing on the secondary window as well. The 05-31 note&rsquo;s
              cadence-broken read is dead; treat the framework as a live
              base rate again, not a watchlist.
            </p>

            <p>
              The leverage side is the loudest signal of regime turn.{' '}
              <span className="dn-signal">
                Funding re-pinned the Binance cap and has stayed pinned for
                over twelve hours
              </span>: live <span className="dn-tag bear">+10.95% ann (cap)</span>,
              24h range{' '}
              <span className="dn-tag">+4.16% / +10.95%</span> with the
              trough <span className="dn-tag">+4.16% ann @ 2026-06-01
              06:48Z (BJ 14:48 06-01)</span> — funding{' '}
              <span className="dn-em">never went short-pay this window</span>{' '}
              (vs the 05-31 note&rsquo;s −0.21% trough at BJ 19:39 05-30 —
              that was the regime-loose print, today is the regime-tight
              print). 24h mean ann{' '}
              <span className="dn-tag bear">+8.90%</span> (vs 05-31&rsquo;s
              +4.00% — a +4.90pt re-tightening). Cap occupancy{' '}
              <span className="dn-tag bear">758 / 1441 sampled rows
              (52.60%)</span> at the cap +10.95% (vs 0.1% on 05-31 — back
              to the 05-29 +51% regime); funding pinned cap at{' '}
              <span className="dn-tag bear">06-01 19:38 BJ (11:38 UTC)</span>{' '}
              and has stayed pinned across a single continuous run of{' '}
              <span className="dn-tag bear">758 sampled rows / 757 minute
              intervals (12.6h)</span> into the snap, with no off-cap
              interval since. Minute deltas across the 1,440 minute
              intervals are <em>flat-dominated</em> — the cap run alone
              contributes 757 flat intervals; the up/down/flat breakdown
              was reported on a 24h+1m window in v1 and is not separately
              recomputed here (see audit DN-008). One-way press, not a
              balanced book.
              OI Δ <span className="dn-tag bear">+469 BTC (+0.44%)</span>{' '}
              over 24h — <span className="dn-em">expansion into the down
              print</span> (vs 05-31&rsquo;s −373 BTC contraction). Retail{' '}
              <span className="dn-tag bear">mkt_long_pct 67.66%</span> from
              60.35% — a +7.31pt re-stack above the prior lineage peak of
              63.85% on 05-29, the most crowded retail-long read of the
              lineage. Perp trades a{' '}
              <span className="dn-tag bear">−$117.89 discount</span> to
              spot at the snap (1h mean −$100.16, range −$147.54 / −$67.44;
              4h mean −$98.27; 24h mean −$104.16, range{' '}
              <span className="dn-tag bear">−$264.79 / −$0.52</span> — basis
              never went premium across the 24h, and the deep prints
              touched −$264 inside the dump). 1-min aggressor skew snap{' '}
              <span className="dn-tag">+2.50</span> (1h mean +5.68, range
              −26.10 / +44.80) — a small buy-aggressor tilt this hour but
              no panic bid, consistent with a stalled price into the snap
              rather than a reflex.{' '}
              <span className="dn-em">
                Funding pinned cap + OI expanding + retail crowded harder
                than the prior peak + SM short side stacking through the
                snap: the leverage book is pressing, not deflating. The
                05-31 &ldquo;leverage book deflating&rdquo; read is the
                inverse of today&rsquo;s tape.
              </span>
            </p>

            <p>
              Windowed flow is <em>universally bear-aligned across 24h, 4h,
              and 1h — fresh short stacking with spot selling</em>. 24h:
              price <span className="dn-tag bear">−3.49%</span>, OI{' '}
              <span className="dn-tag bear">+469 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −5,959</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −210</span>, big-print{' '}
              <span className="dn-tag bear">−849 BTC / 1,119 prints</span>,
              taker-net <span className="dn-tag bear">−217</span> —{' '}
              <span className="dn-em">
                spot heavily sold (−5,959 cb_cvd is the deepest 24h spot
                offer of the post-amplifier lineage), futures also offered,
                big prints net seller, OI expanding into the down move: a
                clean short-stacking shape, not de-grossing
              </span>. 4h (exact endpoint window, 2026-06-01 20:15Z →
              2026-06-02 00:15Z): price{' '}
              <span className="dn-tag bear">−0.44%</span>, OI{' '}
              <span className="dn-tag bear">+444 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −1,315</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −458</span>, big-print{' '}
              <span className="dn-tag bear">−304 BTC / 181 prints</span>,
              taker-net <span className="dn-tag bear">−458</span> — the 4h
              window holds the same shape at smaller amplitude; the press
              has not let up into the snap. 1h (exact endpoint window,
              2026-06-01 23:15Z → 2026-06-02 00:15Z): price{' '}
              <span className="dn-tag bear">−0.14%</span>, OI{' '}
              <span className="dn-tag bear">+296 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −544</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −85</span>, big-print{' '}
              <span className="dn-tag bear">−47 BTC / 27 prints</span>,
              taker-net <span className="dn-tag bear">−85</span> — even on
              the last 60 minutes the shape is bear: −544 spot offer with
              fresh OI add. There is no rotation print, no reflex bid, no
              cover signature in any of the three windows. (v1&rsquo;s 1h
              and 4h numbers used inexact endpoint rows; corrected
              post-audit per DN-004.)
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map (00:16Z recoverable scan, corrected post-audit DN-002) · 8h water-down death cross 2 bar (the 05-31 8h golden cross is dead) · 1d just dropped below cloud · 3d cloud just broke · 4h ⚡ TD9 BUY printed but the slow frames are confirming bear</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 8h water-down death cross 2 bar erases the 05-31 8h
                golden cross
              </span>{' '}
              — the engine frame that confirmed the bounce on 05-31 has
              reversed inside 24h. Slow frames have joined the bear side:
              the <span className="dn-tag bear">3d water-up death cross is
              at 2 bar</span> (the 05-31 1-bar print confirmed and aged), 1d
              <span className="dn-tag bear"> dropped below cloud at just 1
              bar</span> (was &ldquo;in cloud 4b&rdquo; on 05-31 — the
              breakdown printed today), 3d{' '}
              <span className="dn-tag bear">cloud just broke (刚穿)</span> —
              the 05-31 &ldquo;in cloud 9b&rdquo; ended this scan. RSIs
              re-collapsed: 1h <span className="dn-tag bear">32.8</span>{' '}
              (was 55.8 on 05-31 — full give-back of the 50 reclaim, now
              deeper than 05-29&rsquo;s 48.7), 4h{' '}
              <span className="dn-tag bear">26.9</span> (was 43.9 — back
              into deep oversold), 8h{' '}
              <span className="dn-tag bear">26.1</span> (was 38.4 — the
              deepest 8h RSI of the lineage), 12h{' '}
              <span className="dn-tag bear">23.3</span> (was 34.6, the
              deepest 12h RSI of the lineage), 1d{' '}
              <span className="dn-tag bear">30.0</span> (was 37.8). 15m
              still <em>in cloud 1b</em> ($71.5k overhead), 30m{' '}
              <span className="dn-tag bear">below cloud 41b</span> (was
              &ldquo;above ↓73.5k 30b&rdquo; on 05-31 — flipped sides). A
              fresh <span className="dn-tag">⚡ TD9 BUY printed on 4h at
              $71,226</span> — the only oversold-reversal hint on the scan;
              it is the same engine-frame TD9 signature that printed on 1h
              and 4h on 05-29 and on 8h on 05-28, and like those it is a
              <em> hint not a confirmation</em>. TD setups elsewhere are
              all engine-side oversold (1h Buy 5, 8h Buy 5, 12h Buy 3, 1d
              Buy 7, 3d Buy 7).{' '}
              <span className="dn-em">
                Read straight: the engine has re-confirmed bear (8h death
                cross + RSI collapse back deep), the slow frames have JOINED
                bear (1d and 3d both dropped below cloud today, 3d death
                cross confirmed), and the only counter-signal is a 4h TD9
                BUY hint. The 05-31 &ldquo;engine confirms bounce, slow
                frames have not joined&rdquo; read is now the inverse: the
                engine has confirmed bear, the slow frames have joined, and
                the TD9 oversold flag is a single-frame counter-signal
                against a full-stack bear confirmation.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">71,226</td><td className="num">45.4</td><td className="neut">golden (water-dn) 6b</td><td className="neut">in cloud 2b · ↑ 71.5k</td><td>Sell 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">71,226</td><td className="num">39.0</td><td className="neut">golden (water-dn) 13b</td><td className="bear">below ↑73.1k 41b</td><td>Buy 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">71,226</td><td className="num bear">32.8</td><td className="bear">death (water-dn) 23b</td><td className="bear">below ↑73.7k 19b</td><td>Buy 5</td><td>BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">71,226</td><td className="num bear">26.9</td><td className="bear">death (water-dn) 4b</td><td className="bear">below ↑74.8k 43b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">71,226</td><td className="num bear">26.1</td><td className="bear">death (water-dn) 2b (just printed)</td><td className="bear">below ↑76.4k 51b</td><td>Buy 5</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">71,226</td><td className="num bear">23.3</td><td className="bear">death (water-dn) 11b</td><td className="bear">below ↑78.4k 21b</td><td>Buy 3</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">71,217</td><td className="num">30.0</td><td className="neut">—</td><td className="bear">below ↑73.9k 1b (just broke)</td><td>Buy 7</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">71,226</td><td className="num">41.2</td><td className="bear">death (water-up) 2b</td><td className="bear">below ↑74.0k 刚穿 (just broke)</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">71,226</td><td className="num">40.2</td><td className="bull">golden (water-dn) 7b</td><td className="bear">below ↑100.3k 18b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">71,218</td><td className="num">46.1</td><td className="neut">—</td><td className="bull">above ↓46.9k 28b</td><td>Sell 1</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:16Z rolling scan
                    (recoverable audit-time state; the v1 draft cited an
                    00:01Z scan that was not separately archived — the
                    00:16Z state is the auditable recoverable file,
                    transcribed into audits/2026-06-02-desk-note.md
                    §MTF audit-time recoverable state). Header alerts:{' '}
                    <em>8h water-down death cross 2 bar</em>,{' '}
                    <em>3d water-up death cross 2 bar (still confirmed)</em>,{' '}
                    <em>4h ⚡ TD9 BUY at $71,226</em>. Scan spot
                    $71,226, 24h −3.47% (00:16Z MTF scan; the live-tape
                    header at 00:15Z shows −3.49% on the exact 24h endpoint
                    — the 1-min gap accounts for the &lt;0.02pt difference).
                    Closes are in-progress bars; treat every value
                    as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms a fully-overhead structural read.
              Spot $71,268 sits{' '}
              <span className="dn-tag bear">−2.34% below W-SMA20
              $73,035</span> (the closest overhead line, the same W-SMA20
              floor that broke on 05-29 and was overhead on 05-31), and{' '}
              <span className="dn-tag bear">−2.58% below D-SMA100
              $73,216</span> (the lost cycle anchor — the 06-01 close
              $71,392 broke it cleanly, in-progress 06-02 $71,267 holding
              the break). Then in order:{' '}
              <span className="dn-tag bear">W-EMA200 $73,678 (−3.19%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA20 $75,249 (−5.22%)</span>,{' '}
              <span className="dn-tag bear">D-EMA50 $75,812 (−5.92%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $75,922 (−6.06%)</span>,{' '}
              <span className="dn-tag bear">D-SMA20 $75,928 (−6.06%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $76,332 (−6.56%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $77,106 (−7.50%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $77,171 (−7.58%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $78,136 (−8.72%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $78,481 (−9.12%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $79,263 (−10.02%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $80,846 (−11.78%)</span>.
              Far above and disused: W-EMA100 $82,985 (−14.05%), W-EMA50
              $84,251 (−15.34%), W-SMA100 $88,484 (−19.39%), W-SMA50
              $92,777 (−23.12%). <span className="dn-signal">There is
              ZERO positive offset on the matrix against live spot</span> —
              every single MA on the daily and weekly ladder is overhead.
              The structural near-line set is now: W-SMA20 overhead
              (−2.34%), cycle anchor D-SMA100 overhead (−2.58%), W-EMA200
              seed overhead (−3.19%) — a tight ~$2.4k overhead band that
              defines the reclaim ladder if and when bear bid prints.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-02 00:06Z (close
                $71,266.90). MA source universe is the 2024-2026 parquet
                subset (127 weekly bars) by desk policy — NOT the full
                btcusdt_1m_* glob, which would yield 353 weekly bars,
                W-SMA150 $74,735 (−4.64% vs live), W-SMA200 $61,848
                (+15.23%), and W-EMA200 $69,101 (+3.14%), and would
                invalidate the &ldquo;zero positive offset&rdquo; read
                above; the subset is the established source from prior
                notes and the desk is keeping it for lineage continuity
                (see audit DN-005). Under this subset W-SMA150 / W-SMA200
                remain non-computable (short of both windows); W-EMA150
                $78,136 (−8.72%) and W-EMA200 $73,678 (−3.19%) show
                because the EMA seeds from available history and are
                reported as seeded. Offsets above are computed against the
                MA-source price plane (parquet-adjacent ≈ $71,326, matching
                the 00:16Z MTF scan spot $71,226 within one minute), NOT
                the 00:15Z live pin $71,268.01 — against the live pin,
                each offset reads ~+0.08pt deeper (e.g. W-SMA20 −2.42%,
                D-SMA100 −2.66%, W-EMA200 −3.27%, D-EMA20 −5.29%); see
                audit DN-006. Displayed MA levels are $-rounded; offsets
                computed from exact series values. Daily closes: 05-27
                $74,418, 05-28 $73,591, 05-29 $73,428, 05-30 $73,857,
                05-31 $73,653, 06-01 $71,392 (FIRST CLOSE BELOW THE CYCLE
                ANCHOR), 06-02 in-progress $71,267 — the lineage&rsquo;s
                three-close-streak above the anchor (05-30/05-31 plus the
                in-progress 05-31 of the prior note) ended on the 06-01
                close.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book FLIPPED BACK net-short-gamma aggregate −23.3M · flip dropped to $72,086 (spot BELOW for the first time since the 05-31 flip) · 2JUN −9.08M settles 08:00Z today · 5JUN −25.58M is the new amplifier on the strip</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book&rsquo;s gamma regime flipped sign back to
                net-short-gamma across the 31MAY/1JUN expiry pair clearing
                their positive chunks
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bear">−23.3M / 1%</span> (was +62.9M
              on 05-31 — a −$86.2M sign-flip back to amplifying); the book
              is now net-short-gamma (amplifies vol) again. The 0-γ flip
              moved <span className="dn-tag">$72,764 → $72,086 (−$678)</span>.
              Two dist-to-flip references (use both, per audit DN-007):
              live-spot reference{' '}
              <span className="dn-tag bear">−1.14%</span> (71,268.01 /
              72,086 − 1 = −1.135%); GEX-file Deribit-index reference{' '}
              <span className="dn-tag bear">−0.67%</span> (71,600 / 72,086
              − 1 = −0.674%, matching the file&rsquo;s own tile of −0.7%).
              Both refs negative, spot below the flip on both — the first
              below-flip snapshot since the 05-31 snapshot put spot above. The wall map flipped sign hard on
              the near-overhead strikes:{' '}
              <span className="dn-tag bear">$70k −28.64M</span> (the new
              heaviest wall; was a $60k −8.82M crash-put residual on 05-31
              with $70k showing −8.44M — $70k tripled in negative
              magnitude),{' '}
              <span className="dn-tag bear">$72k −12.79M</span> (was −8.45M
              on 05-31),{' '}
              <span className="dn-tag bear">$60k −10.80M</span>,{' '}
              <span className="dn-tag bear">$68k −7.89M</span>,{' '}
              <span className="dn-tag bear">$65k −6.34M</span>,{' '}
              <span className="dn-tag bear">$71k −5.74M</span>,{' '}
              <span className="dn-tag bull">$80k +22.31M</span> (heaviest
              positive wall, down from +23.93M on 05-31 but still the wall
              of the strip),{' '}
              <span className="dn-tag bull">$82k +9.46M</span>,{' '}
              <span className="dn-tag bull">$78k +6.61M</span>,{' '}
              <span className="dn-tag bull">$90k +5.07M</span>. The
              negative cluster $60k–$72k stacks to roughly{' '}
              <span className="dn-em">−75M of dealer amplification</span>{' '}
              around spot — the bulk below our feet, with the $72k wall
              ($+804 above live $71,268) sitting just overhead; the positive
              overhead $78k–$90k stacks to roughly +44M and is much further
              away (corrected post-audit DN-009: the v1 &ldquo;wholly below
              current spot&rdquo; phrasing was loose because $72k is above
              spot, and the listed walls sum to −75.30M not the rounded
              −72M).{' '}
              <span className="dn-em">
                The dealer book is now structurally offered into a fade
                (every move down adds to the dealer short-gamma below)
                and bid into a squeeze if it ever gets back up to the $78k+
                overhead cluster — the inverse of the 05-31 dampening
                setup. The amplification regime has returned, with the
                $70k strike at −28.64M sitting essentially on top of spot.
              </span>{' '}
              2JUN26 0.3DTE{' '}
              <span className="dn-tag bear">−9.08M</span> settles at the
              08:00Z print today (~7.75h ahead of this snapshot); the GEX
              file is from 00:00Z and the post-settle aggregate ex-2JUN
              would be roughly −23.3M − (−9.08M) = −14.2M, still net
              negative but less negative. Forward expiries:{' '}
              <span className="dn-tag bear">3JUN 1.3 −0.88M</span>,{' '}
              <span className="dn-tag bear">4JUN 2.3 −0.17M</span>,{' '}
              <span className="dn-tag bear">5JUN 3.3 −25.58M</span>{' '}
              <span className="dn-em">(the new amplifier on the strip —
              the 5JUN 3.3 DTE chunk that the 05-31 note had on the macro
              re-grow hedge-roll watch is now the heaviest negative
              forward by a wide margin)</span>,{' '}
              <span className="dn-tag bear">12JUN 10.3 −7.21M</span>,{' '}
              <span className="dn-tag bull">19JUN 17.3 +1.19M</span>,{' '}
              <span className="dn-tag bear">26JUN 24.3 −5.12M</span>,{' '}
              <span className="dn-tag bull">31JUL 59.3 +10.03M</span>,{' '}
              <span className="dn-tag bull">28AUG 87.3 +0.28M</span>,{' '}
              <span className="dn-tag bull">25SEP 115.3 +8.35M</span>,{' '}
              <span className="dn-tag bull">25DEC 206.3 +9.37M</span>,{' '}
              <span className="dn-tag bull">26MAR27 297.3 +1.11M</span>.
              The 5JUN −25.58M chunk is the largest negative single-expiry
              weight since the 29MAY −96.34M amplifier — smaller (~27% of
              that scale) but the dominant near-dated negative weight on
              the strip. Its 3.3-DTE settle window is 5JUN26 08:00Z; the
              ladder of decision conditions for that settle is below.
            </p>

            <p>
              IV median across 904 instruments is{' '}
              <span className="dn-tag bear">41.4%</span> (up from 39.9% /
              938 instruments on 05-31 — a +1.5pt vol bid as price broke
              anchor) against 30D close-to-close RV of{' '}
              <span className="dn-tag">26.72%</span> — chain-level richness{' '}
              <span className="dn-tag">~+14.7pt</span> (vs ~+15.0pt on
              05-31, basically unchanged — both IV and RV moved up
              together, the spread held). A chain-median across N
              instruments, <span className="dn-em">not</span> a tradable
              spread; expiry-/strike-level vega, skew and term structure
              remain not loaded; the vol read stays framework-only. 904
              instruments today vs 938 on 05-31 — the −34 is the 31MAY
              +17M chunk and the 1JUN +19.49M chunk clearing without
              equal-size near-dated replacements; 2JUN −9.08M clears in 8h.
              RV methodology: 30D close-to-close, logret.std × √365 × 100
              on the last 30 daily log returns (= 31 consecutive daily
              closes) anchored to parquet last bar 2026-06-02 00:06Z; the
              underlying 31-close window now includes the 06-01 dump,
              pushing 30D RV from 24.91% (05-31 note) to 26.72% (+1.81pt
              vol expansion). For reference, last 29 returns / 30 closes
              reads 26.22%; the 26.72% page value comes from 30 returns.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Tier-1 mostly flat (10Y unchanged 4.45%, HY OAS +2bp to 2.74%, MOVE +3.11 to 73.3 — firmest move on the day) · DXY +0.10 to 99.01, Fed net liq −$0.058T to $5.872T · BTC-vs-TradFi decoupling re-widened to −9.18pt (was −5.84pt)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape barely moved while BTC dumped — the
                decoupling re-widened because BTC fell, not because TradFi
                rolled
              </span>. Dashboard render is 2026-06-01 22:15Z, ~2.0h before
              the snapshot (much fresher than the 05-31 note&rsquo;s 9.9h
              lag). US 10Y nominal{' '}
              <span className="dn-tag">4.45% (0.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.43</span>, episodic z{' '}
              <span className="dn-tag">+0.17</span> — RISK-OFF tag,
              unchanged on the day. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.07% (+1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.40</span>, episodic z{' '}
              <span className="dn-tag">+0.76</span> — still RISK-OFF, a
              hair firmer. 5Y5Y BE inflation{' '}
              <span className="dn-tag bear">2.26% (+2.0bp)</span> — a small
              uptick. HY OAS{' '}
              <span className="dn-tag bear">2.74% (+2.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.17</span>, episodic z{' '}
              <span className="dn-tag bull">−1.10</span> — still a deep
              risk-on episodic, 2bp wider on the day (the 05-31 read was
              2.72% / −1.32 / −1.72; the loose-credit episodic is
              compressing a bit but stays loose). MOVE bond vol{' '}
              <span className="dn-tag bear">73.3 (+3.11)</span> — the
              firmest Tier-1 move on the day (was 70.2 on 05-31 — bond vol
              bid up). The offsets continued to drift: DXY{' '}
              <span className="dn-tag bear">99.01 (+0.10 day · +0.10 since
              05-31)</span>, episodic z{' '}
              <span className="dn-tag bear">+0.78</span> — firmed off the
              05-31 softening; Fed net liquidity{' '}
              <span className="dn-tag bear">$5.872T (−0.058T week-on-week
              print posted)</span>, episodic z{' '}
              <span className="dn-tag bear">−2.28</span> — the fresh
              weekly print shows a small contraction. US-JP 10Y spread{' '}
              <span className="dn-tag bear">1.94% (0.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag bear">159.62 (+0.27 day · +0.36
              since 05-31)</span> (yen softer again). NFCI −0.510 (stale
              10d). <span className="dn-em">
                Net: the re-grow gates closed a little (HY OAS gate 2.78%
                — at 2.74%, 4bp to fire, was 6bp on 05-31; 10Y gate 4.53%
                — at 4.45%, 8bp to fire, unchanged), the reclaim-long
                rates filter (10Y &lt; 4.55%) stays true at 4.45%, and the
                macro tape stays net risk-on on the lines that matter for
                BTC — but BTC dumped −3.49% on its own, not on a macro
                catalyst. The BTC-vs-TradFi decoupling re-widened to
                −9.18pt this print (BTC −7.00% vs NQ +2.18%) from
                −5.84pt on 05-31 (per the 05-31 note: BTC −3.84% vs NQ
                +2.00%) — the gap widened because BTC extended down hard,
                not because TradFi rolled over (NQ +0.18pt, SP500
                +0.61pt, MSFT −0.56pt all basically flat day-on-day on the
                7d window)
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
                <tr><td>US 10Y nominal</td><td className="num">4.45%</td><td className="num">0.0bp</td><td className="num bear">+1.43</td><td className="num">+0.17</td><td className="bear">tight · unchanged</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.07%</td><td className="num bear">+1.0bp</td><td className="num bear">+1.40</td><td className="num">+0.76</td><td className="bear">tight · still RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.26%</td><td className="num bear">+2.0bp</td><td className="num">+0.35</td><td className="num">+0.24</td><td className="neut">no tag · small uptick</td></tr>
                <tr><td>HY OAS</td><td className="num">2.74%</td><td className="num bear">+2.0bp</td><td className="num bull">−1.17</td><td className="num bull">−1.10</td><td className="bull">loose · risk-on episodic · 4bp from re-grow gate</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.510</td><td className="num">0.00</td><td className="num">+0.10</td><td className="num bull">−0.81</td><td className="stale">stale 10d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">73.3</td><td className="num bear">+3.11</td><td className="num">−0.29</td><td className="num">+0.04</td><td className="bear">loose · firmed +3.11 day (firmest Tier-1 move)</td></tr>
                <tr><td>DXY</td><td className="num">99.01</td><td className="num bear">+0.10</td><td className="num">+0.58</td><td className="num bear">+0.78</td><td className="bear">firmer · reversed 05-31&rsquo;s softening</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.872T</td><td className="num bear">−0.058T</td><td className="num">+0.22</td><td className="num bear">−2.28</td><td className="bear">fresh weekly print · small contraction</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.62</td><td className="num bear">+0.27</td><td className="num bear">+1.26</td><td className="num">+0.97</td><td className="bear">yen softer (+0.36 since 05-31)</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.94%</td><td className="num">0.0bp</td><td className="num bull">−0.92</td><td className="num">+0.17</td><td className="bull">unchanged</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7657</td><td className="num">−0.01</td><td className="num bull">−1.93</td><td className="num bull">−2.15</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp (monthly)</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 166 rows, summary
              00:01Z — <span className="dn-em">a 7-day rolling read, not
              today</span>). Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.267</span> (tightened from
              05-31&rsquo;s 0.237 — back across the 0.25 threshold from
              IDIOSYNCRATIC into the NORMAL band). BTC&rsquo;s listed ties
              ranked by |r|: CL{' '}
              <span className="dn-tag">−0.341</span>, BRENT{' '}
              <span className="dn-tag">−0.324</span>, NQ{' '}
              <span className="dn-tag">+0.293</span> (was +0.372, eased),
              SP500 <span className="dn-tag">+0.279</span>, EUR{' '}
              <span className="dn-tag">+0.275</span>, TSLA{' '}
              <span className="dn-tag">+0.267</span>, GOLD{' '}
              <span className="dn-tag">+0.259</span>, PLAT{' '}
              <span className="dn-tag">+0.233</span>, AMZN{' '}
              <span className="dn-tag">+0.207</span>, JP225{' '}
              <span className="dn-tag">+0.204</span>, SILVER{' '}
              <span className="dn-tag">+0.204</span>, META{' '}
              <span className="dn-tag">+0.188</span>, COPPER{' '}
              <span className="dn-tag">+0.180</span>, GOOGL{' '}
              <span className="dn-tag">+0.176</span>, URNM{' '}
              <span className="dn-tag">+0.173</span>, PALL{' '}
              <span className="dn-tag">+0.105</span>, NVDA{' '}
              <span className="dn-tag">+0.103</span>. 7d performance:{' '}
              <span className="dn-tag bear">BTC −7.00%</span> (extended
              from 05-31&rsquo;s −3.84% — most of the move came on the
              06-01 candle), NQ{' '}
              <span className="dn-tag bull">+2.18%</span>, SP500{' '}
              <span className="dn-tag bull">+0.74%</span>, JP225{' '}
              <span className="dn-tag bull">+2.86%</span>, MSFT{' '}
              <span className="dn-tag bull">+7.79%</span> (still TradFi
              leader, eased from +8.35%), META{' '}
              <span className="dn-tag bear">−2.01%</span> (flipped from
              +3.10% on 05-31), TSLA{' '}
              <span className="dn-tag bear">−3.60%</span> (flipped from
              +0.24%), AAPL <span className="dn-tag bear">−1.38%</span>,
              NVDA <span className="dn-tag bull">+2.96%</span> (flipped from
              −1.68% — re-emerged). Metals soft: GOLD{' '}
              <span className="dn-tag bear">−1.37%</span>, SILVER{' '}
              <span className="dn-tag bear">−3.22%</span>, PLAT{' '}
              <span className="dn-tag bear">−1.62%</span>, PALL{' '}
              <span className="dn-tag bear">−1.55%</span>. Energy turned
              up: CL <span className="dn-tag bull">+0.47%</span> (vs −2.57%),
              BRENT <span className="dn-tag bear">−0.26%</span> (vs −2.24%),
              NGAS <span className="dn-tag bull">+3.96%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine re-widened to
                ~−9.18pt (BTC −7.00% vs NQ +2.18%) from −5.84pt on
                05-31 — the gap widened because BTC extended down on its
                own. The decoupling read remains: endogenous-to-crypto,
                BTC moving on its own catalyst, not on a macro
                catalyst. Mean |r| crossing back above 0.25 reflects the
                shared-down rotation (META / TSLA / AAPL / metals all
                joined BTC&rsquo;s down side this past week)
              </span>. JGB monthly 2.52% carries EXTREME RISK-OFF monthly
              tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · cover-bounce scout DROPPED (cycle anchor lost) · runner / put-spread tail remain closed · short scout DEFERRED — framework watch only against the 5JUN26 −25.58M amplifier on the strip; non-actionable until a later audited note · no fresh trades on this snap</span>
            </h2>

            <p>
              <span className="dn-signal">
                Yesterday&rsquo;s digestion-above-anchor thesis is dead and
                the cover-bounce scout is dropped, not deferred
              </span>. The 05-31 scout was gated against two-of-three legs
              (W-SMA20 reclaim AND short_btc bleeds &lt; 38k) — none fired,
              and the bottom-of-stack stop (1d close &lt; D-SMA100 cycle
              anchor) was hit on the 06-01 close. The scout exits the book
              entirely; a long entry requires a fresh structural setup
              after the cycle ladder break, not a roll of this one. The
              runner and the 29MAY put-spread tail stay closed from 05-29.
              The trade book today re-pivots to: no long scout, no fresh
              short yet, and a flagged new amplifier on the strip
              (5JUN26 −25.58M, 3.3 DTE) that will gate decisions for the
              next four sessions. The would-be anchor-break short scout
              stays a <em>framework watch only</em> — there is no live
              entry today, no live sizing, no live ladder.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">closed · primary · runner ladder complete · closed on 29MAY 08:00Z expiry settle (unchanged status carried from 05-31)</span>
              <div className="dn-trade-name">
                Flip-extend short — closed on 29MAY 08:00Z expiry settle as the 05-29 ladder required (unchanged from 05-31)
              </div>
              <div className="dn-thesis">
                Status unchanged from the 05-31 note: closed on the 29MAY
                amplifier settle, no residual position, ladder complete.
                The structural read that supported holding this short was
                the −96.34M 29MAY chunk — that chunk cleared, and the
                trade should not be reopened as a roll. Re-entry on
                today&rsquo;s break requires the new short scout below, not
                a continuation of this one.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (amplifier settle) · no residual position · unchanged from 05-31</span></div>
                <div><span className="dn-lvl-k">final ladder</span><span className="dn-lvl-v">target #1 W-SMA20 $74,151 (taken 05-28) · target #2 W-EMA200 seed $73,710 (taken on 05-28 14:01 re-stack) · target #3 D-SMA100 $72,958 (24h low $72,614 wicked through)</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">do not chase this trade re-entry on the 06-01 anchor break — open the new short scout against the 5JUN26 −25.58M amplifier on its own structural setup, not as a roll</span></div>
              </div>
              <div className="dn-gating">
                <b>Trade closed.</b> The lineage discipline still holds:
                no roll, no average, no late-tier add. The post-amplifier
                bounce on 05-30/05-31 lasted exactly two daily closes
                before reverting — closing the runner on the 29MAY settle
                rather than the 30MAY high read correct in hindsight.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">DROPPED · scout · cycle anchor lost on the 06-01 close (the explicit kill-condition from 05-31)</span>
              <div className="dn-trade-name">
                Cover-bounce scout — DROPPED (not deferred): 1d close $71,392 broke the D-SMA100 cycle anchor $73,216, the explicit stop set by the 05-31 note
              </div>
              <div className="dn-thesis">
                The 05-31 scout was gated long against a real cover-bounce
                (1h close &gt; W-SMA20 $74,161 AND SM short_btc bleeds
                &lt; 38k). Neither leg fired. The bottom-of-stack stop
                (1d close &lt; D-SMA100 cycle anchor) fired clean on
                2026-06-01 UTC close $71,392 — below the prior
                note&rsquo;s $73,146 anchor by $1,754 and below today&rsquo;s
                recomputed $73,216 anchor by $1,824. The 05-31 note
                explicitly named this as the falsifying condition:{' '}
                <em>&ldquo;the &lsquo;intact mid-cycle&rsquo; read ends and
                the digestion-above-anchor thesis is falsified&rdquo;</em>.
                Both conditions hold today: the intact mid-cycle read is
                done, and the digestion-above-anchor thesis is falsified.
                The scout is dropped from the book, not deferred — a long
                re-entry requires a fresh structural setup (reclaim of
                the cycle anchor on at least one daily close, with the
                dealer book recovering positive aggregate gamma and the
                cover-bounce shape printing on flow), not a re-tightening
                of the same trigger.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout status</span><span className="dn-lvl-v">DROPPED (not deferred) · cycle anchor lost on 06-01 close · 05-31 stop condition fired clean</span></div>
                <div><span className="dn-lvl-k">re-entry threshold (NEW long thesis if needed)</span><span className="dn-lvl-v bull">1d close &gt; D-SMA100 $73,216 AND aggregate GEX flips back &gt; 0 AND 1h cover-shape print (OI shrinking + spot CVD bid + SM short_btc bleeds) — three legs, all required</span></div>
                <div><span className="dn-lvl-k">no long entry here</span><span className="dn-lvl-v bear">do not buy the cycle-anchor break on funding-cap pressure + retail crowded-long peak + below-flip dealer book</span></div>
              </div>
              <div className="dn-gating">
                <b>Trade dropped.</b> The 05-31 note&rsquo;s &ldquo;wait
                for two of three legs&rdquo; discipline was the right
                call: the legs never came, the anchor broke instead, and
                the patient read avoided a long entry into a confirmed
                cycle-ladder break. The next long thesis is structural
                (anchor reclaim + dealer-book repair + flow cover-shape),
                not technical (single-line break).
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · short scout · DEFERRED · non-actionable until a later audited note (per audit DN-001) · 5JUN26 −25.58M flagged as the new amplifier on the strip</span>
              <div className="dn-trade-name">
                Anchor-break short scout — framework watch only, not an open trade
              </div>
              <div className="dn-thesis">
                The 05-31 note&rsquo;s explicit re-arm condition for the
                press re-extends framework{' '}
                (<em>&ldquo;fresh re-stack SM Δ ≤ −3k pushing SM &lt;
                −32k AND 1h close &lt; $73,130&rdquo;</em>) printed true
                today: the 06-01 14:16 BJ re-stack hostile-2 was Δnet
                −3,137 pushing SM net through −32k to −34,156, and 1h
                closes from 06-01 09:00 UTC onward all printed below
                $73,130 (the 06-01 09:00 1h close was $72,790). The
                dealer-book amplifier carrier has rotated: 29MAY −96.34M
                is settled, but 5JUN26 −25.58M (3.3 DTE today) is the new
                structural carrier on the strip at ~27% of the prior
                chunk&rsquo;s scale. <em>That makes the framework conditions
                for a short scout interesting, not the trade live</em>.
                The codex hostile audit of v1 (DN-001) flagged that the
                draft armed an actionable plan with sizing above the desk
                framework&rsquo;s 0.2R scout ceiling and a take-half
                ladder — outside what this note&rsquo;s mandate permits
                from a single-snapshot read. Per that audit, this card is
                downgraded to a framework watch: no live entry today, no
                live sizing, no live targets, no live stop. The watch
                survives forward as a list of <em>what would have to print
                for a future audited note to promote the scout to live at
                the desk&rsquo;s 0.2R cap</em>. Position discipline holds:
                do not chase into a tape pinned at funding cap with retail
                crowded long at lineage-peak.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">watch shape A (would-be cover-rally setup, NON-ACTIONABLE)</span><span className="dn-lvl-v">stretched cover-rally back into $73,035 (W-SMA20) – $73,216 (lost D-SMA100 anchor) WITH funding bleeding off the cap and SM short_btc not extending — a future audited note could promote this to a 0.2R scout entry; today this is monitoring only, no live size</span></div>
                <div><span className="dn-lvl-k">watch shape B (would-be breakdown setup, NON-ACTIONABLE)</span><span className="dn-lvl-v">fresh re-stack hostile-2 (Δshort &gt; 0 + Δlong &lt; 0 single-minute, Δnet ≤ −3k) AND 1h close &lt; $70,718 (06-01 low) — a future audited note could promote this to a 0.2R scout entry; today this is monitoring only, no live size</span></div>
                <div><span className="dn-lvl-k">reference reclaim level (would invalidate a future scout)</span><span className="dn-lvl-v bull">1h close &gt; $73,678 (W-EMA200 seed) — the deepest near-line reclaim that would invalidate the cycle-ladder-break read on which any future scout would be based</span></div>
                <div><span className="dn-lvl-k">reference ladder rungs (structural levels, not order targets)</span><span className="dn-lvl-v">$70,000 (the $70k −28.64M wall, heaviest negative on the strip — natural magnet under spot) · $68,000 (next negative cluster $68k −7.89M + $65k −6.34M) · $60,000 (crash-put residual $60k −10.80M, structural floor of the bear lineage)</span></div>
                <div><span className="dn-lvl-k">size cap if ever promoted</span><span className="dn-lvl-v">0.2R total (scout ceiling) on whichever shape promotes first · no stacking · no take-half ladder authored from this note</span></div>
                <div><span className="dn-lvl-k">amplifier window</span><span className="dn-lvl-v">5JUN26 08:00Z settle (3.3 DTE today) · the −25.58M chunk should resolve into that window the way the 29MAY −96.34M chunk resolved into 29MAY 08:00Z · post-5JUN aggregate ex-chunk would be roughly +2.3M (−23.3M − (−25.58M)), back near flat</span></div>
              </div>
              <div className="dn-gating">
                <b>Status:</b> framework watch only. No live entry, no
                live sizing, no live stop, no live take-profit — those
                are reference levels for a future audited note, not
                instructions for this one. <b>Hard rule:</b> no entry
                while funding is pinned at cap AND retail is above 65%
                long — both are true right now. The first signs of either
                watch shape progressing toward a live setup would be
                funding bleeding off cap for ≥ 30 consecutive minutes
                (shape A) or a 1h close decisively below $70,718 with a
                fresh Δnet ≤ −3k re-stack hostile-2 (shape B). If those
                fire, the next desk note carries the promotion — this
                note does not.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">closed · macro tail · closed on 29MAY 08:00Z settle (unchanged status carried from 05-31; re-grow gates closed slightly today but did not fire)</span>
              <div className="dn-trade-name">
                Downside put-spread — closed on 29MAY 08:00Z settle; no roll yet (re-grow gates closed slightly, still 4–8 bp from fire)
              </div>
              <div className="dn-thesis">
                Status unchanged from the 05-31 note: closed on the 29MAY
                Deribit settle. The macro re-grow gates closed slightly
                today (HY OAS 2.78% gate — at 2.74%, 4bp to fire, was 6bp
                on 05-31; 10Y gate 4.53% — at 4.45%, 8bp to fire,
                unchanged). The reclaim-long rates filter (10Y &lt;
                4.55%) is still TRUE at 4.45%; this is a standalone
                filter that requires a BTC-internal pivot to translate to
                scout entry (and that filter would currently flag the
                long-side trade, not the short scout above, which is
                BTC-internal). No fresh hedge yet — the BTC-internal short
                scout above is structurally bigger than a macro-tail roll
                would be at these gate distances.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (Deribit 29MAY settle) · no residual position · no roll · re-grow gates 4–8bp from fire</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (fires roll to 5JUN/12JUN)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.74%, 4bp to fire — closer than 05-31&rsquo;s 6bp) OR 10Y &gt; 4.53% close (currently 4.45%, 8bp to fire, unchanged)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — still TRUE at 4.45%; awaits BTC-internal pivot (and currently filters for the long side, not for the short scout above)</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates remain discretionary
                watches set as the levels drift down, not backtested
                breakpoints. A fresh tail at this scale (5JUN26 −25.58M
                or 12JUN26 −7.21M) would no longer carry the 29MAY-style
                amplifier tailwind at full scale — the chunk has rotated
                to a quarter of the original size. The BTC-internal short
                scout above carries the higher-conviction structural
                read; the macro tail should re-open only on a fresh
                macro-side fire (HY OAS &gt; 2.78% or 10Y &gt; 4.53%), not
                on the BTC tape alone.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · cycle cadence RE-ARMED · 06-01 BJ 13–15 step AND 06-01 BJ 22 step both printed re-stack hostile-2 signatures on the same day · the 05-31 cadence-broken claim is refuted</span>
              <div className="dn-trade-name">
                Squeeze-cycle — cadence re-armed: the 4th-day-after print at BJ 14:16 inside the 13–15 window restored the framework; a second BJ-22 step on the same day confirms the secondary window
              </div>
              <div className="dn-thesis">
                The 05-31 note declared the BJ 13–15 cadence falsified
                after three quiet windows (05-29 +768, 05-30 −349, 05-31
                −109, all sub-threshold). Today the cadence printed clean
                inside the window: 06-01 14:16 BJ (06:16 UTC) Δnet −3,137
                with Δlong −2,206 and Δshort +931 same minute, the
                signature re-stack hostile-2 shape from the 05-15..05-28
                lineage. A second supporting step printed at 06-01 22:06
                BJ (14:06 UTC) Δnet −1,645 with Δlong −346 and Δshort
                +1,299 — same BJ-22 timing as the 05-30 22:01 step, same
                signature. <span className="dn-em">
                  Two clean signature prints in one day, both on
                  framework-named time windows, refute the 05-31
                  cadence-broken claim. The 4-quiet-then-fire pattern is
                  consistent with a noise pocket inside the 7-day base
                  rate, not with a regime change. Treat the cadence as
                  live again — predict on the BJ 13–15 window for the
                  next discrete step, and weight any BJ 22 print as a
                  secondary confirmation
                </span>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">cadence RE-ARMED · 05-29/05-30/05-31 quiet was a noise pocket · 06-01 BJ 13–15 fired clean (Δnet −3,137 max-of-window) and BJ 22 fired second confirmation (Δnet −1,645) on the same day</span></div>
                <div><span className="dn-lvl-k">primary extension event (06-01)</span><span className="dn-lvl-v">re-stack hostile-2 @ 2026-06-01 06:16Z (BJ 14:16 06-01) · spot $73,322 · Δlong −2,206, Δshort +931, Δnet −3,137 (largest single-minute Δ inside the 24h window)</span></div>
                <div><span className="dn-lvl-k">secondary extension event (06-01)</span><span className="dn-lvl-v">re-stack hostile-2 @ 2026-06-01 14:06Z (BJ 22:06 06-01) · spot $71,810 · Δlong −346, Δshort +1,299, Δnet −1,645 (smaller magnitude same signature on the secondary window)</span></div>
                <div><span className="dn-lvl-k">SM trough (most short) in 24h</span><span className="dn-lvl-v">−37,783 BTC @ 2026-06-01 19:41Z (BJ 03:41 06-02) · the deepest net-short of the lineage</span></div>
                <div><span className="dn-lvl-k">post-step price path</span><span className="dn-lvl-v">primary step $73,322 → 24h low $70,718 (−$2,604 from the BJ 14:16 step) → snapshot $71,268 (−$2,054 vs primary entry — net continuation, not bounce)</span></div>
                <div><span className="dn-lvl-k">forward gating</span><span className="dn-lvl-v">watch BJ 13–15 window of 06-02 (UTC 05:00–07:00) for cycle-3 step 2 — and the BJ 22 window of 06-02 (UTC 14:00) for secondary; a fresh Δnet ≤ −3k inside either window confirms the cadence; a sub-threshold print would re-test the cadence claim again</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a falsified base rate that
                re-fires on the next observation should be treated as
                noise-and-recovery, not as a permanent regime change. The
                three quiet windows (05-29/05-30/05-31) sat inside the
                no-amplifier digestion regime; today&rsquo;s cadence
                re-fire coincides with the new amplifier&rsquo;s arrival
                on the strip (5JUN26 −25.58M, 3.3 DTE). Re-stack
                hostile-2 signatures are now both a tape read AND a
                calendar-prior again; if the BJ 13–15 window of 06-02
                also prints clean, the cycle-3 read tightens.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · cycle anchor lost · gamma flipped back negative · funding pinned cap · short scout DEFERRED (framework watch only, not armed) · cadence re-armed for cycle-3 step 2 on the 06-02 BJ 13–15 window</span>
            </h2>

            <p>
              Of the 05-31 decision conditions: the cycle anchor lost
              condition FIRED clean (06-01 close $71,392 &lt; $73,146 /
              today recomputed $73,216 — first cycle-ladder break of the
              lineage); the cycle anchor holds + gamma stays positive
              condition DID NOT HOLD (both legs went the other way:
              anchor broke, gamma flipped back to −23.3M); the
              cover-bounce scout DID NOT TRIGGER and is now dropped per
              its stop; the press re-extends condition FIRED on the
              06-01 14:16 re-stack hostile-2 (Δnet −3,137 pushing SM net
              through −32k to −34,156, 1h close &lt; $73,130 the same
              day); the cycle-2 step 4 cadence claim was REFUTED by the
              06-01 BJ 13–15 print; the macro re-grow gates inched
              closer (HY OAS 2.78% gate at 2.74%, 4bp to fire) but
              didn&rsquo;t fire; the reclaim-long rates filter stayed
              true at 4.45%; the 31MAY26 expiry settled clean (positive
              chunk +17.00M cleared at 08:00Z 05-31, the 1JUN +19.49M
              chunk also cleared at 08:00Z 06-01, both removed positive
              dealer support before the 06-01 dump).{' '}
              <em>Three structural conditions fired (cycle anchor lost,
              press re-extends, cadence re-arm refutation), one held
              (rates filter), one inched closer (HY OAS gate), and the
              long-side scout exited on stop.</em>{' '}
              The conditions today re-set around a lost cycle anchor, a
              re-armed negative-gamma dealer book, a new amplifier on
              the strip (5JUN26 −25.58M), funding pinned at cap, and a
              live cadence for cycle-3 step 2 on the next BJ 13–15
              window:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>2JUN26 expiry settles today (08:00Z, ~7.75h ahead of this snap)</td><td>−9.08M negative chunk clears; ex-2JUN aggregate ≈ −14.2M still net negative but less negative — small amplification reduction inside the day</td><td>monitor — a clean settle without a vol event would put the next gating event on the 5JUN −25.58M chunk; a vol event at the 08:00Z print would extend the dump</td></tr>
                <tr><td>5JUN26 amplifier window (3.3 DTE today, 08:00Z 5JUN)</td><td className="bear">heaviest negative single-expiry weight at −25.58M, ~27% of the 29MAY amplifier scale · expected to dominate the dealer book through that window</td><td>monitor — this is the structural reference window the deferred short-scout framework watch is keyed to; no live position to carry</td></tr>
                <tr><td>Cover-rally OR breakdown watch (deferred short scout, framework only)</td><td className="bear">shape A: stretched rally into $73,035–$73,216 WITH funding bleeding off cap; shape B: 1h close &lt; $70,718 AND fresh Δnet ≤ −3k re-stack</td><td>monitor — neither shape is a live entry from this note (audit DN-001 downgrade); a future audited note can promote whichever shape prints first to a 0.2R scout at the desk&rsquo;s scout ceiling, with reference reclaim $73,678 and reference ladder $70,000 → $68,000 → $60,000</td></tr>
                <tr><td>Cycle ladder break confirmation (next gate)</td><td className="bear">1d close &lt; W-EMA200 seed $73,678 (already TRUE at $71,267 in-progress) AND 1d close &lt; cycle anchor $73,216 (already TRUE on the 06-01 close $71,392) — both legs confirmed</td><td>read: the cycle ladder has stepped down a tier; next ladder rung is the $70,000 −28.64M wall, then the $68,000 negative cluster, then the $60,000 crash-put residual</td></tr>
                <tr><td>Anchor reclaim (long re-entry threshold)</td><td className="bull">1d close &gt; D-SMA100 $73,216 AND aggregate GEX flips back &gt; 0 AND 1h cover-shape print (OI shrinking + spot CVD bid + SM short_btc bleeds) — three legs required</td><td>no action until all three; a single-line break reclaim is insufficient — the 05-30/05-31 above-anchor closes are the cautionary tale</td></tr>
                <tr><td>Cycle-3 step 2 cadence (BJ 13–15 on 06-02)</td><td className="bear">next BJ 13–15 window = 2026-06-02 05:00–07:00Z; a fresh Δnet ≤ −3k inside the window confirms cadence; secondary BJ 22 window = 2026-06-02 14:00Z</td><td>watch for cadence print as cycle-3 step 2; a sub-threshold print would re-test the cadence claim and would weaken the press re-extends read</td></tr>
                <tr><td>Funding cap relief (the leverage gate signal)</td><td className="bull">funding bleeds off the +10.95% cap for ≥ 30 consecutive minutes — first leg of any long re-entry, and a sign of the press abating</td><td>monitor — currently 758 sampled rows / 757 minute intervals pinned at cap (12.6h); first off-cap interval will be the leading edge of the next rotation</td></tr>
                <tr><td>Macro tail re-grow (gates closer now)</td><td className="bear">HY OAS &gt; 2.78% (4bp to fire, was 6bp on 05-31) OR 10Y &gt; 4.53% (8bp to fire, unchanged)</td><td>roll hedge to 5JUN/12JUN forward only if the macro side fires; the BTC-internal short scout above takes precedence on a BTC-only fire</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — still TRUE at 4.45%; awaits BTC-internal pivot</td><td>standalone filter true; currently filters for the long side, which has no entry on today&rsquo;s setup — no action until anchor reclaim</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the 5JUN26 −25.58M amplifier window prints a
                resolution analogue to the 29MAY26 −96.34M chunk (a
                ladder-completion press into 5JUN26 08:00Z, with the
                $70k wall and the $68k/$65k cluster taken), or whether
                a stretched cover-rally back into the $73,035–$73,216
                W-SMA20 / cycle-anchor band — driven by funding
                bleeding off the cap and SM short bleeding — sets up
                the short scout&rsquo;s shape-A entry. The cycle anchor
                has lost; the question is now whether the new amplifier
                presses through the $70k wall on schedule, or whether
                the leverage book exhausts on the press first and
                returns spot to the overhead reclaim band before the
                ladder completes
              </span>. Until then this note runs as written: the runner
              and the put-spread tail stay closed, the cover-bounce
              scout is dropped (not deferred — its stop fired), the
              anchor-break short scout is <em>deferred to a future
              audited note</em> (framework watch against the 5JUN
              amplifier; non-actionable from this note per audit
              DN-001), the cycle cadence framework is re-armed for
              cycle-3 step 2 on the 06-02 BJ 13–15 window, and the
              macro re-grow gates inched closer without firing. The
              BTC-vs-TradFi decoupling re-widened to −9.18pt as BTC
              extended down; the engine MTF frames re-collapsed; the
              8h MACD printed a fresh water-down death cross; the
              dealer book flipped from net-long-gamma back to
              net-short-gamma. The right read for the next 24h is{' '}
              <em>structural — wait for the entry shape, do not
              chase</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit
            </span>
            STAGE B codex hostile-but-fair audit (xhigh effort,
            arithmetic recomputed against `/opt/btc-monitor/live_db.json`
            + `/opt/btc-data/data/btcusdt_1m_*.parquet` via
            `/opt/btc-data/.venv/bin/python3`) returned verdict{' '}
            <em>BLOCK-CRITICAL — 1 CRITICAL + 4 MAJOR + 5 MINOR</em>.
            Full record at{' '}
            <code>audits/2026-06-02-desk-note.md</code>.{' '}
            <strong>CRITICAL (1) — DN-001:</strong> the v1 §V short-scout
            armed an actionable plan with concrete entry shapes, a
            $73,678 stop, a $70k → $68k → $60k target ladder, sizing
            above the desk&rsquo;s 0.2R scout ceiling (shape A at 0.3R,
            total cap 0.4R), and a take-half-off-at-$70k instruction —
            outside the framework-only scope this note&rsquo;s mandate
            permits. <em>Resolved:</em> the section is downgraded to a
            framework watch with non-actionable entry shapes, no live
            sizing, no live stop, and a 0.2R ceiling reserved for a
            future audited note to promote; the §VI table row and the
            closing prose were re-keyed to match.{' '}
            <strong>MAJOR (4):</strong> DN-002 — the v1 cited a
            mtf_div_latest.html 00:01Z scan that was not separately
            archived; the recoverable rolling file mtime was 00:16Z, so
            the manifest, §II prose, and the MTF table are re-keyed to
            the audit-time recoverable 00:16Z scan (scan spot $71,226,
            24h −3.47%, 4h TD9 BUY at $71,226, table values per the
            audit&rsquo;s §MTF audit-time recoverable state).
            DN-003 — the live-tape &ldquo;24h&rdquo; block was computed
            on a 24h+1m row window (1442 rows); numbers were
            re-anchored to the exact 00:15Z → 00:15Z endpoint window
            (1441 sampled rows / 1440 intervals): headline spot 24h
            −3.49% (was −3.34%), OI Δ +469 BTC / +0.44% (was +476 / +0.45%),
            funding 24h start +6.60% (was +6.56%), and the up/down/flat
            minute-delta breakdown is no longer claimed in numerical
            form. DN-004 — the 1h and 4h flow blocks were recomputed
            from exact endpoint rows: 1h (23:15Z → 00:15Z) price −0.14%
            / OI +296 BTC / spot CVD −544 / fut CVD −85 / big-print −47
            / 27 / taker-net −85; 4h (20:15Z → 00:15Z) price −0.44% /
            OI +444 BTC / spot CVD −1,315 / fut CVD −458 / big-print
            −304 / 181 / taker-net −458. DN-005 — the MA matrix uses
            the 2024-2026 parquet subset (127 weekly bars), not the
            full btcusdt_1m_* glob (which yields 353 weekly bars,
            W-SMA150 $74,735 / W-SMA200 $61,848 / W-EMA200 $69,101 and
            would invalidate the &ldquo;zero positive offset&rdquo;
            read); the manifest and the MA-disclosure paragraph now
            flag the subset as an explicit desk-policy choice for
            lineage continuity, and explicitly document the alternative
            full-glob values for transparency.{' '}
            <strong>MINOR (5):</strong> DN-006 — displayed MA offsets
            used a denominator near $71,326 (MTF/parquet-adjacent),
            not the declared 00:15Z live pin $71,268.01; the
            MA-disclosure paragraph now states this and gives the
            ~+0.08pt deeper offsets against the live pin (W-SMA20
            −2.42%, D-SMA100 −2.66%, W-EMA200 −3.27%, D-EMA20 −5.29%).
            DN-007 — dist to 0γ flip uses two refs: live-spot −1.14%
            (71,268.01 / 72,086 − 1 = −1.135%); Deribit-index −0.67%
            (71,600 / 72,086 − 1 = −0.674%, matches the file&rsquo;s
            own tile of −0.7%) — the v1 −1.06% was a wrong rounding
            against the tile. DN-008 — funding cap run is 758 sampled
            rows / 757 minute intervals (12.6h), not &ldquo;758
            continuous minutes&rdquo;; the 285 / 186 / 970 up/down/flat
            breakdown was wrong on the v1 1442-row window (285 / 185 /
            971) and is not separately recomputed for the corrected
            1441-row window — disclosed as flat-dominated with the cap
            run contributing 757 flats. DN-009 — the GEX negative
            cluster sum is ~−75M (listed walls sum to −75.30M, not
            ~−72M), and the &ldquo;wholly below current spot&rdquo;
            phrasing was loose because the $72k −12.79M wall sits $804
            above live $71,268; revised to &ldquo;around spot, with the
            $72k wall just overhead&rdquo;. DN-010 — the manifest live-
            tape row replaced &ldquo;file tail at audit time = pin&rdquo;
            with &ldquo;snapshot pin row = 00:15Z; live file has
            advanced after generation&rdquo; (live_db.json had advanced
            to row 42826 / 00:24Z by audit time).{' '}
            <strong>Codex-confirmed clean (carried forward):</strong>{' '}
            requireViewer gating (first statement of the async export),
            JSX integrity, `npm run typecheck` exit 0, GEX core values
            (00:00Z, 904 instruments, Deribit idx $71,600, median IV
            41.4%, total GEX −23.3M, flip $72,086, top strike/expiry
            rows), 30D RV methodology and value (26.722% on 30 returns),
            cross-asset values (mean |r| 0.267, BTC −7.00%, NQ +2.18%,
            gap −9.18pt), macro Tier-1/2 values, BJ↔UTC conversions,
            lineage continuity (06-01 close $71,391.5 first below
            D-SMA100; SM net trough −37,783 deepest of lineage), and
            claims-vs-loaded-data discipline (no NTT pivot, max-pain,
            or strike-level IV claim in the body). The full audit
            record — including the open issues on MTF archive
            durability and live-tape window convention — is filed at
            audits/2026-06-02-desk-note.md.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-06-02 00:15Z)
            with section-level provenance disclosed in the manifest band
            above; the macro Tier-1 panel render is 2026-06-01 22:15Z
            (~2.0h before snapshot) and some inputs are explicitly stale
            or pending and flagged as such. Levels, sizes, and conditions
            are illustrative of the desk&rsquo;s process, not standing
            recommendations. Past correlation, gamma, and positioning
            patterns do not bind future tape. Derivatives carry the risk
            of total loss and, where leveraged, loss exceeding deposited
            margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The amplifier returned and the anchor lost. The book
                flipped back negative-gamma; funding pinned cap; SM
                stacked short one-sided. New amplifier is 5JUN; the
                reference ladder is $70k → $68k → $60k. Short scout is
                deferred (framework watch) — no live entry from this
                note.
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
            v2 · 2026-06-02 00:15Z snapshot · post codex hostile audit ·
            sources: live_db.json · mtf_div_latest.html (00:16Z
            recoverable) · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet (2024-2026 subset) · FRED · Yahoo ·
            Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
