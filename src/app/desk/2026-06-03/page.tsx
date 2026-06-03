import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-03 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-03',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-03' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260603() {
  await requireViewer('/desk/2026-06-03');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-03 · v2</span>
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
              <span className="dn-big">$66,752</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−6.41%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-03 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-03 00:05Z (snapshot pin row)</td>
                  <td className="dn-flag">
                    fresh · 1-min · snapshot pin row = 00:05Z; live file has
                    advanced past the pin by audit time · 3JUN26 0.3DTE −4.30M
                    settles at 08:00Z today (~8h ahead of this snap)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-03 00:16Z scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    ~11 min fresher than snapshot anchor · in-progress bars ·
                    scan archived to audits/2026-06-03-desk-note.md by STAGE B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-03 00:01Z snapshot</td>
                  <td className="dn-flag">
                    ~4 min stale vs snapshot anchor · Deribit idx $67,006 vs
                    live $66,752 ($254 above live) · 998 instruments (was 904
                    on 06-02; the 2JUN 0.3DTE −9.08M settled at 08:00Z 06-02
                    and a fresh near-dated chain has been listed) · 3JUN26
                    0.3DTE −4.30M is the next settle (08:00Z 06-03, ~8h ahead)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-03 00:01Z
                  </td>
                  <td className="dn-flag">~4 min lag · 7d 1h bars · 22 assets · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-02 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.8h render lag · FRED Tier-1 mostly steady (10Y +2bp to
                    4.47%, TIPS unchanged 2.07%, 5Y5Y BE +2bp to 2.26%, HY OAS
                    −2bp to 2.72% — back to the 05-31 level, MOVE 73.3 print
                    unchanged on the day) · DXY +0.02 to 99.22 on the day
                    (+0.22 since 06-01 22:15Z print), Fed net liq $5.872T
                    (level unchanged vs prior desk note; source weekly Δ
                    −0.058T) · Tier-3 inflation rows still fetch-failed
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-03 00:06Z (btcusdt_1m_2024..2026 subset by desk policy)</td>
                  <td className="dn-flag">
                    ~1 min fresher than snapshot anchor · MA source universe is
                    the 2024-2026 parquet subset (127 weekly bars), not the
                    full btcusdt_1m_* glob — carried forward from the 06-02
                    audit DN-005 desk-policy decision · under this subset
                    W-SMA150 / W-SMA200 are non-computable (short of both
                    windows); W-EMA150 / W-EMA200 print because EMA seeds from
                    available history and are reported as seeded · offsets
                    recomputed against live spot $66,751.51
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
              <span className="dn-v">+7.65% (off cap)</span>
              <span className="dn-src">live · current off-cap streak 113 min / 1.88h since 2026-06-02 22:13Z (BJ 06:13 06-03) · the 24h window contains TWO discrete off-cap runs — earlier 06-02 06:27Z–16:49Z (622 elapsed min / ~10.4h, inside the dump's middle leg) and this current streak from 06-02 22:13Z — for ~734 min / ~12.2h cumulative off-cap inside the 24h window · 24h mean +9.33% (was +8.90% on 06-02, hotter on the day driven by long cap-pin stretches between the two off-cap runs) · cap occupancy 705 / 1441 sampled rows = 48.92% (was 52.60% on 06-02) · 24h funding trough +5.68% @ 06-02 09:07Z (BJ 17:07 06-02) inside the earlier off-cap run</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+10.95% → +7.65% (−3.30pt, off cap)</span>
              <span className="dn-src">range +5.68% / +10.95% · the leverage gate held the cap for ~half the 24h window then released into the snap · trough +5.68% still positive (no short-pay print this window, vs the 05-31 trough −0.21% short-pay regime) — pressure abating but not flipped</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+1.62% (+1,702 BTC)</span>
              <span className="dn-src">live · expansion (was +469 BTC / +0.44% on 06-02 · ~3.6× larger expansion this 24h) · SM long_btc +3,928 (long REBUILT off lineage trough), short_btc +7,681 — short side added two-for-one against the long add</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">69.35 / 30.65</span>
              <span className="dn-src">live_db `mkt_long_pct` · re-stacked from 67.66 → 69.35 (+1.69pt above the 06-02 lineage peak · new lineage peak) · 24h range 66.53 / 69.36 — retail piled HARDER into longs across a 24h that closed −6.41% lower; the classic trap shape extended</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−40.8k (deeper net SHORT than 06-02, both sides bigger)</span>
              <span className="dn-src">live · long 12.65k − short 53.47k · short peaked 56.04k @ 2026-06-02 19:26Z (BJ 03:26 06-03 — new lineage peak), long_btc trough 8.40k @ 2026-06-02 08:36Z (BJ 16:36 06-02); SM net trough −44.44k @ 2026-06-02 14:01Z (BJ 22:01 06-02) — new lineage trough, deeper than 06-02&rsquo;s −37.78k</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 06-02 note</span>
              <span className="dn-v bear">−37.0k → −40.8k (−3,786 net; long +3,813, short +7,600)</span>
              <span className="dn-src">|Δ|/prior_net = 10.22% (3,786/37,036) · the book re-stacked further short-net while BOTH sides grew — short added +7.6k, long rebuilt +3.8k off the prior lineage trough · gross book up ~+11k BTC across the 24h, net more short by 10%</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v bear">47.6% / 34.03%</span>
              <span className="dn-src">GEX median IV · 998 inst. (up from 904 on 06-02 · fresh near-dated chain after 2JUN settled) · IV bid +6.2pt as price broke through $70k (was 41.4% on 06-02) · 30D RV jumped to 34.03% (was 26.72% on 06-02, +7.31pt) on the 06-02 −6.53% daily close — biggest single-day RV expansion of the lineage</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−3.73% (below; live spot ref)</span>
              <span className="dn-src">flip $69,335 (was $72,086 · dropped −$2,751) · vs live spot $66,751.51 (−3.73%; 66,751.51/69,335 − 1 = −3.728%) · vs GEX file Deribit idx $67,006 (−3.36%; 67,006/69,335 − 1 = −3.359%, matches the file&rsquo;s own dist-to-flip tile of −3.4%) — both refs negative, spot far below the flip on both, aggregate GEX deepened to −38.8M (was −23.3M on 06-02, a −$15.5M further amplification step)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The cycle-ladder break extended hard — the 06-02 daily close
                $66,730 dropped −6.53% on the day, the $70k −28.64M wall
                cited in the 06-02 note as the next reference rung was
                pressed through cleanly inside the BJ 13–15 cadence window,
                and spot now sits −8.80% below the cycle anchor with the
                dealer book deeper into net-short-gamma
              </span>. Aggregate GEX went{' '}
              <span className="dn-tag bear">−23.3M</span> →{' '}
              <span className="dn-tag bear">−38.8M</span> (a further −$15.5M
              amplification step), the 0-γ flip dropped{' '}
              <span className="dn-tag">$72,086 → $69,335 (−$2,751)</span>,
              and spot{' '}
              <span className="dn-tag bear">$66,752 sits −3.73% below the
              flip</span> (live-spot ref; the GEX file&rsquo;s own
              Deribit-index dist-to-flip tile prints −3.4% off its $67,006
              index — both refs negative, the deepest below-flip print of
              the lineage). Daily closes ran{' '}
              <span className="dn-tag bear">06-01 $71,392 / 06-02
              $66,730</span> (two consecutive closes below the D-SMA100
              cycle anchor $73,191, the −$4,662 06-02 step is the deepest
              single-day decline of the lineage), with the in-progress
              06-03 print at{' '}
              <span className="dn-tag bear">$66,701 (−$29 inside the 06-02
              close)</span>. The 06-02 note&rsquo;s framework watch on{' '}
              <span className="dn-em">Shape B</span> (1h close &lt; $70,718
              AND fresh Δnet ≤ −3k re-stack hostile-2) fired clean inside
              the next BJ 13–15 window:{' '}
              <span className="dn-tag bear">2026-06-02 06:46Z (BJ 14:46
              06-02)</span> printed Δnet{' '}
              <span className="dn-tag bear">−6,621</span> (Δlong −742,
              Δshort +5,879 same minute, SM net stepped{' '}
              <span className="dn-tag">−39,581 → −46,202</span> at spot{' '}
              <span className="dn-tag">$70,298</span>) — the{' '}
              <span className="dn-em">largest single-minute Δnet of the
              entire lineage</span>, eclipsing the 05-30 22:01 −5,569 step
              and confirming the cadence on a third consecutive print.
              Framework discipline carried through from the 06-02 audit
              DN-001: Shape B was a framework watch only, not a live
              entry — so the structural signal was right, but no live size
              rode it. Funding pinned the Binance cap for ~half the 24h
              window and the leverage gate released on TWO discrete runs
              inside that window — earlier{' '}
              <span className="dn-tag bull">06-02 06:27Z–16:49Z (622 min /
              ~10.4h, inside the dump's middle leg)</span> and the current
              streak from{' '}
              <span className="dn-tag bull">06-02 22:13Z (BJ 06:13 06-03)
              </span>, 113 min / 1.88h into the snap at{' '}
              <span className="dn-tag">+7.65% ann</span>{' '}
              — cumulative ~12.2h off-cap inside the 24h window. Retail
              crowded{' '}
              <span className="dn-tag bear">67.66% → 69.35% (+1.69pt above
              the prior lineage peak)</span> across a −6.41% 24h — the
              long-trap shape is at its widest of the lineage. OI expanded{' '}
              <span className="dn-tag bear">+1,702 BTC</span> over 24h (~3.6×
              the prior day&rsquo;s +469 BTC expansion); short_btc made a
              fresh lineage peak{' '}
              <span className="dn-tag bear">56,036 @ BJ 03:26 06-03</span>;
              SM net touched a fresh lineage trough{' '}
              <span className="dn-tag bear">−44,438 @ BJ 22:01 06-02</span>.
              The 4h TD9 BUY re-printed at $66,835 (was at $71,226 on the
              06-02 scan, −$4,391 lower) and the 8h/1d/1M frames are all{' '}
              <span className="dn-tag bull">TD8 Buy → 9?</span> one bar
              away from confirming — multi-frame oversold building. The
              regime is now a confirmed cycle ladder break, dealer book
              deeper short-gamma, position book one-sidedly stacked short,
              with material leverage-gate relief — ~12.2h cumulative
              off-cap across the 24h window on two discrete runs, current
              streak 113 min and building.
            </p>

            <p>
              BTC prints <span className="dn-tag">$66,752</span> live,{' '}
              <span className="dn-tag bear">−6.41%</span> on 24h, inside a
              wide <span className="dn-tag">$71,370 / $66,229</span> range
              (high @ 2026-06-02 01:15Z / BJ 09:15 06-02, low @ 2026-06-02
              23:04Z / BJ 07:04 06-03 — the low printed 61 min before this
              snap; this is the first desk snapshot after that low, with
              60 intervening one-minute tape rows between the low row and
              the pin).
              The 06-02 note&rsquo;s active gate{' '}
              <span className="dn-em">&ldquo;1d close &lt; W-EMA200 seed
              $73,678 AND 1d close &lt; cycle anchor $73,216 — both legs
              already TRUE in-progress&rdquo;</span> confirmed and extended
              on the actual{' '}
              <span className="dn-tag bear">2026-06-02 UTC close
              $66,730</span>, $6,461 below the cycle anchor (D-SMA100
              today $73,191, recomputed at parquet last-bar; the prior
              note&rsquo;s $73,216 anchor eased $25 lower as the 06-02
              dump candle pulled the rolling window down).
              The in-progress 06-03 daily{' '}
              <span className="dn-tag bear">$66,701</span> sits another
              $29 under that close — no recovery candle in-progress yet,
              just consolidation at the lows.{' '}
              <span className="dn-signal">Every overhead MA is now deeply
              negative</span>: from the closest line W-SMA20{' '}
              <span className="dn-tag bear">$72,807 (−8.32%)</span>{' '}
              through D-SMA100 cycle anchor{' '}
              <span className="dn-tag bear">$73,191 (−8.80%)</span>,
              W-EMA200 seed{' '}
              <span className="dn-tag bear">$73,632 (−9.34%)</span>,
              D-EMA20 <span className="dn-tag bear">$74,044 (−9.85%)</span>,
              D-SMA20 <span className="dn-tag bear">$74,984 (−10.98%)</span>,
              D-EMA50 <span className="dn-tag bear">$75,284 (−11.33%)</span>,
              D-SMA150 <span className="dn-tag bear">$75,726 (−11.85%)</span>,
              D-EMA100 <span className="dn-tag bear">$76,053 (−12.23%)</span>,
              W-EMA20 <span className="dn-tag bear">$76,671 (−12.94%)</span>,
              D-SMA50 <span className="dn-tag bear">$76,932 (−13.23%)</span>,
              W-EMA150 seed{' '}
              <span className="dn-tag bear">$78,076 (−14.50%)</span>,
              D-EMA150 <span className="dn-tag bear">$78,265 (−14.71%)</span>,
              D-SMA200 <span className="dn-tag bear">$79,096 (−15.61%)</span>,
              D-EMA200 <span className="dn-tag bear">$80,660 (−17.24%)</span>.
              The 06-02 &ldquo;zero positive offset · ~$2.4k overhead
              band&rdquo; read has stretched to a{' '}
              <span className="dn-em">~$6.5k overhead band to the cycle
              anchor</span> and a ~$13k overhead band to the deep MA
              cluster — the reclaim ladder is intact in order, but each
              rung now sits a full 24h candle of average range above the
              spot, not a snap reclaim distance.{' '}
              <span className="dn-em">
                The structural backdrop is a confirmed cycle ladder
                break, extended one tier further down: digestion above
                anchor → first close below → two consecutive closes well
                below, dealer book deeper short-gamma, position book
                one-sidedly short-crowded — short_btc at a fresh
                lineage peak 56,036 @ BJ 03:26 06-03 (since bled to
                53,474 at the pin), while long_btc 12,653 at the pin
                sits BELOW the prior lineage long peaks (15,358 on
                05-29 17:21Z and 12,852 on 06-02 19:46Z); SM net at
                a fresh lineage trough.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · 24h book gross-grew BOTH sides while net got deeper short · BJ 13–15 cadence FIRED with the largest single-minute Δnet of the lineage · funding cumulative ~12.2h off-cap inside the 24h window (two discrete runs; current streak 1.88h) — the ≥ 4h cumulative gate CLEARED</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position book gross-grew on BOTH sides across the
                dump candle while net stepped deeper short — short
                stacking harder than long rebuild
              </span>. SM net is{' '}
              <span className="dn-tag bear">−40,822</span> vs the 06-02
              note&rsquo;s −37,036 — that is{' '}
              <span className="dn-em">+10.22% more short</span>{' '}
              (|−40,822 − (−37,036)| / 37,036 = 10.22%). Components:
              long_btc <span className="dn-tag bull">8.84k → 12.65k
              (+3.81k)</span> and short_btc{' '}
              <span className="dn-tag bear">45.87k → 53.47k
              (+7.60k)</span> — the long side rebuilt off its prior
              lineage trough by ~43% while the short side stacked
              another two-for-one on top. Gross book is up ~+11k BTC
              across the 24h, net more short by 10%.{' '}
              <span className="dn-em">This is one-sided short
              re-stacking on top of long rebuild — not long-side
              capitulation.</span> Across the 24h window: long_btc Δ{' '}
              <span className="dn-tag bull">+3,928</span>, short_btc Δ{' '}
              <span className="dn-tag bear">+7,681</span>, net Δ{' '}
              <span className="dn-tag bear">−3,754</span> (+3,928 −
              7,681 = −3,753 ≈ −3,754 rounding) — gross +11.6k BTC,
              net −3.75k BTC. short_btc peaked{' '}
              <span className="dn-tag bear">56,036 @ 2026-06-02 19:26Z
              (BJ 03:26 06-03)</span> — a fresh lineage peak (was
              45,874 on the 06-02 snap), since bled −2.56k into the
              00:05Z pin but still elevated. long_btc made its 24h
              window trough{' '}
              <span className="dn-tag">8,395 @ 2026-06-02 08:36Z (BJ
              16:36 06-02)</span> then rebuilt to 12.65k into the snap;
              the broader lineage long_btc trough remains the 06-02
              note&rsquo;s 7,354 @ 06-01 22:16Z. SM net trough{' '}
              <span className="dn-tag bear">−44,438 @ 2026-06-02
              14:01Z (BJ 22:01 06-02)</span>, the deepest net-short of
              the lineage by −6.65k vs the 06-02 note&rsquo;s
              −37,783. The book is bigger on both sides AND deeper
              short on net — the press has not yet broken the position
              accumulation.
            </p>

            <p>
              <span className="dn-signal">
                The framework&rsquo;s BJ 13–15 cadence fired on a third
                consecutive print with the largest single-minute Δnet
                of the entire lineage
              </span>. The 24h&rsquo;s largest single-minute step
              printed at{' '}
              <span className="dn-tag bear">2026-06-02 06:46Z (BJ
              14:46 06-02)</span> with spot{' '}
              <span className="dn-tag">$70,298</span>: long_btc moved{' '}
              <span className="dn-tag">9,306 → 8,565</span> (−742
              BTC), short_btc moved{' '}
              <span className="dn-tag">46,642 → 52,521</span> (+5,879
              BTC in <em>one minute</em>; 52,521 − 46,642 = 5,879), SM
              net stepped{' '}
              <span className="dn-tag">−37,335 → −43,956</span> (Δnet
              −6,621 — the largest single-minute Δ of the lineage,
              eclipsing the 05-30 22:01 −5,569 step). That step is a
              re-stack hostile-2 signature (Δshort &gt; 0 + Δlong &lt;
              0 same minute) printed{' '}
              <span className="dn-em">inside the BJ 13–15 window</span>{' '}
              — the cadence the 06-02 note re-armed after the 06-01
              14:16 −3,137 print, and now confirmed on the third
              consecutive observation (06-01 −3,137 → 06-02 −6,621).
              The full 06-02 BJ 13–15 window opened at SM net −36,194
              and closed at −44,002 — a window Δ of −7,809 across the
              2h, dominated by the single 14:46 step. The 06-02 BJ 22
              secondary window (UTC 14:00 06-02) printed a small
              cover (max |Δnet| = +813 @ 14:16Z, Δlong +693, Δshort
              −120) — the secondary window did NOT fire today; only
              the primary BJ 13–15 window confirmed. The price
              consequence: the 14:46 BJ step at $70,298 led the
              follow-through dump to the 24h low{' '}
              <span className="dn-tag bear">$66,229 @ BJ 07:04 06-03
              (8h 18m later)</span> — −$4,069 / −5.79% follow-through
              from the step entry.{' '}
              <span className="dn-em">
                The cadence is no longer just a base rate; it is a
                live cycle 3 step 2 confirmation with the largest
                single-minute signature of the lineage and a clean
                price follow-through. Cycle 3 step 3 next gate is the
                06-03 BJ 13–15 window (UTC 05:00–07:00 06-03), now
                ~5h ahead of this snap.
              </span>
            </p>

            <p>
              The leverage side has printed material off-cap relief
              twice in the down-leg.{' '}
              <span className="dn-signal">
                Funding came off the Binance cap on TWO discrete runs
                inside the 24h window — earlier 06-02 06:27Z–16:49Z
                (622 min / ~10.4h, inside the dump's middle leg)
                then the current streak from 06-02 22:13Z, now 113
                min / 1.88h into the snap
              </span>: live <span className="dn-tag">+7.65% ann</span>{' '}
              (was capped at +10.95% as recently as 06-02 22:12Z / BJ
              06:12 06-03), 24h range{' '}
              <span className="dn-tag">+5.68% / +10.95%</span> with
              the trough <span className="dn-tag">+5.68% ann @
              2026-06-02 09:07Z (BJ 17:07 06-02)</span> — that trough
              prints inside the earlier 622-min off-cap run, a deeper
              relief than 06-02&rsquo;s +4.16% but still positive (no
              short-pay print this window, vs the 05-31 trough
              −0.21% short-pay regime). 24h mean ann{' '}
              <span className="dn-tag bear">+9.33%</span> (vs
              06-02&rsquo;s +8.90% — a +0.43pt firmer 24h mean,
              dominated by the long cap-pinned segments between the
              two off-cap runs). Cap occupancy{' '}
              <span className="dn-tag">705 / 1441 sampled rows
              (48.92%)</span> — down from 06-02&rsquo;s 52.60%; the
              other ~734 min (~12.2h cumulative) was off-cap, split
              between the two runs. Cumulative off-cap time inside
              the 24h window has already cleared the 06-02
              framework&rsquo;s{' '}
              <span className="dn-em">≥ 4h cumulative</span> first-leg
              long-re-entry threshold by ~3×, and the ≥ 30 consecutive
              minute watch fired on both runs —{' '}
              <span className="dn-em">leg one of the would-be
              mean-revert promotion trigger is therefore CLEARED on
              the cumulative interpretation</span>. OI Δ{' '}
              <span className="dn-tag bear">+1,702 BTC (+1.62%)</span>{' '}
              over 24h — ~3.6× the prior day&rsquo;s +469 BTC
              expansion (the dump expanded gross book hard, then
              the 4h window into the snap shrank it materially —
              see windowed flow below). Retail{' '}
              <span className="dn-tag bear">mkt_long_pct 69.35%</span>{' '}
              from 67.66% — a +1.69pt re-stack above the prior
              lineage peak of 67.66% on 06-02, the most crowded
              retail-long read of the lineage (24h peak 69.36%
              into the snap). Perp trades a{' '}
              <span className="dn-tag bear">−$111.42 discount</span>{' '}
              to spot at the snap (1h mean −$105.69, range
              −$238.13 / −$14.83 — the −$238 print sits inside the
              snap-hour at the 06-02 23:04Z low minute; 4h mean
              −$109.08; 24h mean −$113.18, range{' '}
              <span className="dn-tag bear">−$238.13 / +$158.08</span>{' '}
              — basis touched +$158 inside the 24h window — the
              first cross-positive print since the 05-31 above-flip
              regime — but quickly reverted as the dump took hold).
              1-min aggressor skew snap{' '}
              <span className="dn-tag">+12.2</span> (1h mean +5.55,
              range −34.2 / +39.1) — a mild buy-aggressor tilt this
              hour, consistent with the reflex bid off the 23:04Z
              low.{' '}
              <span className="dn-em">
                Funding ~12.2h cumulative off-cap (two runs) +
                retail crowded harder than the prior peak + SM
                gross-growing both sides + 24h OI expansion
                overlaid with 4h OI shrink: the leverage book has
                already printed material exhaustion across the 24h
                window, but retail and SM short are still stacked
                heavy. The 06-02 &ldquo;leverage book pressing,
                not deflating&rdquo; read holds only as a pin-time
                average — the off-cap relief is no longer just an
                edge, it has cleared the cumulative gate.
              </span>
            </p>

            <p>
              Windowed flow shows a heavy bear 24h, an offsetting
              de-grossing 4h, and a mixed 1h with{' '}
              <em>spot bidding off the low while futures still
              offered</em>. 24h: price{' '}
              <span className="dn-tag bear">−6.41%</span>, OI{' '}
              <span className="dn-tag bear">+1,702 BTC</span>, spot
              CVD <span className="dn-tag bear">Δ −2,552</span>{' '}
              (clean delta, no resets in window), futures CVD raw{' '}
              <span className="dn-tag bear">Δ −1,323</span>{' '}
              <em>but fut_cvd had two technical resets in the 24h
              window (16:37Z and 23:32Z) so the cumulative delta is
              not a clean read — reset-adjusted Δ ≈ +1,366 (i.e.
              futures cover bid in aggregate)</em>, big-print{' '}
              <span className="dn-tag bear">−1,966 BTC / 1,064
              prints</span>, taker-net{' '}
              <span className="dn-tag bear">−1,323</span> —{' '}
              <span className="dn-em">
                spot offered heavily on the down-leg (−2.55k clean
                cb_cvd), futures shape obscured by reset
                artifacts (raw delta bear, reset-adjusted delta
                bull), big prints net seller, OI expanding into
                the down move: a directional spot-led dump with
                ambiguous futures aggregate after reset
                adjustment; lead with spot CVD as the cleanest
                read of the 24h
              </span>. 4h (exact endpoint window, 2026-06-02
              20:05Z → 2026-06-03 00:05Z): price{' '}
              <span className="dn-tag bear">−0.87%</span>, OI{' '}
              <span className="dn-tag bull">−1,341 BTC</span>{' '}
              (<em>de-grossing!</em> — the first material 4h OI
              shrink since the cycle break began), spot CVD{' '}
              <span className="dn-tag bull">Δ +208</span> (mild
              spot bid), futures CVD raw{' '}
              <span className="dn-tag">Δ +75</span> (one reset
              inside the window at 23:32Z; reset-adjusted Δ ≈
              +1,081), big-print{' '}
              <span className="dn-tag bear">−495 BTC / 195
              prints</span>, taker-net{' '}
              <span className="dn-tag">+75</span> — a mixed shape
              with the bearish big-print read offsetting the
              mild bid in cvd; the OI shrink suggests
              short cover into the 4h dump leg, even as big
              prints printed net seller. 1h (exact endpoint
              window, 2026-06-02 23:05Z → 2026-06-03 00:05Z):
              price <span className="dn-tag bull">+0.61%</span>,
              OI <span className="dn-tag bear">+395 BTC</span>,
              spot CVD <span className="dn-tag bull">Δ +455</span>,
              futures CVD raw{' '}
              <span className="dn-tag bear">Δ −798</span> (no
              reset inside the 1h window; clean delta), big-print{' '}
              <span className="dn-tag bear">−856 BTC / 77
              prints</span>, taker-net{' '}
              <span className="dn-tag bear">−798</span> — the
              snap-hour reads a reflex bid off the 23:04Z $66,229
              low (price +0.61%) led by spot bid (+455 cb_cvd)
              with futures sellers still pressing (−798 fut_cvd
              clean, −856 big-print); a spot-vs-futures
              divergence shape consistent with a tactical bounce
              attempt that has not yet pulled futures with it.
              <em> Two resets in fut_cvd across the 24h window (a
              two-strike technical signal in the file itself)
              limit how cleanly the futures aggregator delta can
              be read at all three horizons; spot CVD is the
              load-bearing flow read.</em>
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map (00:16Z scan) · 4h ⚡ TD9 BUY re-printed at $66,835 (−$4,391 lower than 06-02 print) · 8h/1d/1M Buy 8 → 9? imminent · RSIs at lineage-deep oversold across 4h–12h (13.4/15.5/14.6)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The structure scan confirms a full-stack bear
                regime with the first material oversold-reversal
                hints stacking
              </span>. The 8h water-down death cross has aged from
              the 06-02 fresh 2-bar print to{' '}
              <span className="dn-tag bear">5 bar</span> — the
              engine frame is fully confirmed bear and the 06-02
              &ldquo;death cross just printed&rdquo; signal has
              had time to extend. Slow frames are joined: the{' '}
              <span className="dn-tag bear">3d water-up death
              cross is at 2 bar (still confirmed)</span>, 1d{' '}
              <span className="dn-tag bear">below cloud at 2
              bar</span> (the 06-02 1-bar breakdown confirmed and
              aged), 3d{' '}
              <span className="dn-tag bear">below cloud 刚穿
              (just broke through, confirmed today)</span> — the
              06-02 &ldquo;just broke&rdquo; read fully resolved.
              RSIs have collapsed into{' '}
              <span className="dn-em">lineage-deep oversold</span>{' '}
              across the engine and mid frames: 1h{' '}
              <span className="dn-tag bear">25.0</span> (was 32.8
              on 06-02 — deeper, washout territory), 4h{' '}
              <span className="dn-tag bear">13.4</span> (was 26.9
              — exhaustion territory, deepest 4h RSI of the
              lineage), 8h <span className="dn-tag bear">15.5</span>{' '}
              (was 26.1 — deepest 8h RSI of the lineage), 12h{' '}
              <span className="dn-tag bear">14.6</span> (was 23.3,
              deepest 12h RSI of the lineage), 1d{' '}
              <span className="dn-tag bear">22.2</span> (was 30.0
              — collapsing). The single-frame counter-signal stack
              has grown: <span className="dn-tag">⚡ 4h TD9 BUY
              printed at $66,835</span> — the second consecutive
              4h TD9 BUY across the down-leg (was $71,226 on the
              06-02 scan, −$4,391 lower today), AND the{' '}
              <span className="dn-tag bull">8h Buy 8 → 9?</span>{' '}
              one-bar-away from confirming, AND the{' '}
              <span className="dn-tag bull">1d Buy 8 → 9?</span>{' '}
              one-bar-away from confirming, AND the{' '}
              <span className="dn-tag bull">1M Buy 8 → 9?</span>{' '}
              one-bar-away from confirming. If even the 8h and 1d
              fire as confirmed TD9 BUYs on the next bar close,
              the TF-stack of oversold reversal signals will be
              the deepest of the lineage.{' '}
              <span className="dn-em">
                Read straight: the engine and slow frames have
                fully confirmed bear (8h death cross 5b + 3d
                death cross 2b + 1d below cloud 2b + 3d below
                cloud just broke), the RSIs are at lineage-deep
                oversold across 4 frames, and the
                oversold-reversal counter-signal stack is the
                heaviest of the lineage with a 4h TD9 BUY
                already printed and 8h/1d/1M all one bar away.
                The 06-02 &ldquo;engine re-confirmed bear, slow
                frames joined, 4h TD9 BUY counter-signal&rdquo;
                read is now the same shape with deeper bear
                confirmation AND a stronger oversold-reversal
                counter — not the inverse, but the same shape
                stretched further on both axes.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">66,824</td><td className="num">42.9</td><td className="bear">death (water-dn) 5b</td><td className="bear">below ↑67.9k 97b</td><td>Sell 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">66,824</td><td className="num">37.9</td><td className="neut">golden (water-dn) 7b</td><td className="bear">below ↑70.1k 89b</td><td>Buy 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">66,824</td><td className="num bear">25.0</td><td className="bear">death (water-dn) 47b</td><td className="bear">below ↑71.8k 43b</td><td>Buy 3</td><td>BULL reg</td></tr>
                <tr><td>4h</td><td className="num">66,835</td><td className="num bear">13.4</td><td className="bear">death (water-dn) 10b</td><td className="bear">below ↑74.3k 49b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">66,824</td><td className="num bear">15.5</td><td className="bear">death (water-dn) 5b</td><td className="bear">below ↑76.2k 54b</td><td>Buy 8 → 9?</td><td>BULL reg</td></tr>
                <tr><td>12h</td><td className="num">66,824</td><td className="num bear">14.6</td><td className="bear">death (water-dn) 13b</td><td className="bear">below ↑78.3k 23b</td><td>Buy 5</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">66,824</td><td className="num bear">22.2</td><td className="neut">—</td><td className="bear">below ↑73.9k 2b</td><td>Buy 8 → 9?</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">66,824</td><td className="num">35.4</td><td className="bear">death (water-up) 2b</td><td className="bear">below ↑74.0k 刚穿 (just broke)</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">66,824</td><td className="num">36.7</td><td className="neut">golden (water-dn) 7b</td><td className="bear">below ↑100.3k 18b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">66,824</td><td className="num">44.1</td><td className="neut">—</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:16Z scan
                    (rolling latest file; archived verbatim in
                    audits/2026-06-03-desk-note.md by STAGE B).
                    Header alerts:{' '}
                    <em>3d water-up death cross 2b (still
                    confirmed)</em>,{' '}
                    <em>4h ⚡ TD9 BUY at $66,835</em>,{' '}
                    <em>8h TD8 Buy → 9? (再 1 根 close)</em>,{' '}
                    <em>1d TD8 Buy → 9? (再 1 根 close)</em>,{' '}
                    <em>1M TD8 Buy → 9? (再 1 根 close)</em>.
                    Scan spot $66,824, 24h −6.21% (00:16Z MTF
                    scan; the live-tape header at 00:05Z shows
                    −6.41% on the same 24h window — the 11-min
                    gap accounts for the 0.20pt difference as
                    the 1h reflex bid extended into the MTF
                    scan window), 24h H/L $71,371 / $66,151,
                    qVol $24.03B.
                    Closes are in-progress bars; treat every
                    value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms a fully-overhead structural
              read, now stretched. Spot $66,752 sits{' '}
              <span className="dn-tag bear">−8.32% below W-SMA20
              $72,807</span> (the closest overhead line, was
              −2.34% on 06-02 — overhead band stretched ~6pt
              further), and{' '}
              <span className="dn-tag bear">−8.80% below D-SMA100
              $73,191</span> (the lost cycle anchor — the 06-02
              UTC close $66,730 broke it cleanly by $6,461; the
              in-progress 06-03 $66,701 sits another $29 under
              and ~$6,490 below the anchor). Then in order:{' '}
              <span className="dn-tag bear">W-EMA200 $73,632 (−9.34%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA20 $74,044 (−9.85%)</span>,{' '}
              <span className="dn-tag bear">D-SMA20 $74,984 (−10.98%)</span>,{' '}
              <span className="dn-tag bear">D-EMA50 $75,284 (−11.33%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $75,726 (−11.85%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $76,053 (−12.23%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $76,671 (−12.94%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $76,932 (−13.23%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $78,076 (−14.50%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $78,265 (−14.71%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $79,096 (−15.61%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $80,660 (−17.24%)</span>.
              Far above and disused: W-EMA100 $82,895 (−19.47%),
              W-EMA50 $84,072 (−20.60%), W-SMA100 $88,438
              (−24.52%), W-SMA50 $92,685 (−27.98%).{' '}
              <span className="dn-signal">There is ZERO positive
              offset on the matrix against live spot</span> —
              every single MA on the daily and weekly ladder is
              overhead, the same read as 06-02 but now with the
              closest line W-SMA20 sitting nearly 4× further away
              (−8.32% vs −2.34%). The structural near-line set
              is: W-SMA20 overhead (−8.32%), cycle anchor D-SMA100
              overhead (−8.80%), W-EMA200 seed overhead (−9.34%)
              — a ~$0.8k-wide reclaim band sitting ~$6–7k above
              spot.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-03
                00:06Z (close $66,701.00). MA source universe is
                the 2024-2026 parquet subset (127 weekly bars)
                by desk policy — carried forward from the 06-02
                audit DN-005 decision (the full btcusdt_1m_*
                glob yields 353 weekly bars and would surface
                W-SMA150 / W-SMA200 prints; the subset is kept
                for lineage continuity, full-glob alternative
                disclosed in the 06-02 note). Under this subset
                W-SMA150 / W-SMA200 remain non-computable (short
                of both windows); W-EMA150 $78,076 (−14.50%)
                and W-EMA200 $73,632 (−9.34%) show because the
                EMA seeds from available history and are
                reported as seeded. Offsets above computed
                against live spot $66,751.51 directly (the
                parquet-adjacent close $66,701.00 is $50.51
                below the live pin; an offset against the
                parquet plane reads ~+0.08pt deeper, e.g.
                W-SMA20 −8.39%, D-SMA100 −8.87%, W-EMA200
                −9.41%, D-EMA20 −9.92%) — this snap uses the
                live pin as the offset denominator (a return to
                the pre-06-02 convention, distinct from the
                06-02 note&rsquo;s parquet-adjacent denominator
                introduced by audit DN-006; the codex audit
                should disposition which denominator the
                lineage carries forward). Displayed MA levels
                are $-rounded; offsets computed from exact
                series values. Daily closes: 05-28 $73,591,
                05-29 $73,428, 05-30 $73,857, 05-31 $73,653,
                06-01 $71,392 (first close below the cycle
                anchor), 06-02 $66,730 (deepest single-day
                close-to-close drop of the lineage at
                −$4,662 / −6.53%), 06-03 in-progress $66,701 —
                two consecutive closes well below anchor.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DEEPER net-short-gamma aggregate −38.8M · flip dropped to $69,335 (spot −3.73% below the flip; widest dist-to-flip of the lineage) · the 06-02 $70k −28.64M wall was pressed through; new heaviest wall $65k −15.48M sits ~$1.7k under spot · 5JUN −14.89M (2.3 DTE) the amplifier on the strip — reduced from yesterday&rsquo;s −25.58M reading as the chunk has resolved through the press</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book stepped deeper into net-short-gamma
                across the 2JUN settle clearing − and the wall map
                rotated through the $70k strike entirely
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bear">−38.8M / 1%</span> (was
              −23.3M on 06-02 — a further −$15.5M amplification
              step); the book is now deeper net-short-gamma
              (amplifies vol). The 0-γ flip moved{' '}
              <span className="dn-tag">$72,086 → $69,335 (−$2,751)</span>.
              Two dist-to-flip references (carried per 06-02 audit
              DN-007): live-spot reference{' '}
              <span className="dn-tag bear">−3.73%</span>{' '}
              (66,751.51 / 69,335 − 1 = −3.728%); GEX-file
              Deribit-index reference{' '}
              <span className="dn-tag bear">−3.36%</span> (67,006 /
              69,335 − 1 = −3.359%, matches the file&rsquo;s own
              dist-to-flip tile of −3.4%). Both refs negative,
              spot far below the flip on both — the widest below-flip
              print of the lineage. The wall map rotated
              materially: the 06-02 $70k −28.64M wall (the
              heaviest wall then, sitting just under spot) is now{' '}
              <span className="dn-tag bear">$70k −7.39M</span> —
              a −$21.25M collapse in negative magnitude as the
              press took price through the strike and gamma
              resolved. The new heaviest wall is{' '}
              <span className="dn-tag bear">$65k −15.48M</span>{' '}
              (~$1.7k under live spot — the new structural
              magnet),{' '}
              <span className="dn-tag bear">$60k −15.12M</span>{' '}
              (was −10.80M),{' '}
              <span className="dn-tag bull">$80k +14.64M</span>{' '}
              (heaviest positive, was +22.31M — eased as it sits
              further out of the money),{' '}
              <span className="dn-tag bear">$68k −10.98M</span>,{' '}
              <span className="dn-tag bear">$66k −7.87M</span>,{' '}
              <span className="dn-tag bear">$70k −7.39M</span>{' '}
              (the resolved former wall),{' '}
              <span className="dn-tag bear">$64k −6.34M</span>,{' '}
              <span className="dn-tag bear">$62k −5.57M</span>,{' '}
              <span className="dn-tag bull">$82k +5.12M</span>,{' '}
              <span className="dn-tag bear">$55k −4.52M</span>.
              The negative cluster $55k–$70k stacks to roughly{' '}
              <span className="dn-em">−73.3M of dealer
              amplification</span> from spot down through the
              crash-put residual zone (sum of the listed walls:
              −4.52 − 15.12 − 5.57 − 6.34 − 15.48 − 7.87 − 10.98
              − 7.39 = −73.27M); the positive overhead $80k–$82k
              stacks to roughly +19.76M and is now far above
              spot (the 06-02 $80k +22.31M wall has eased to
              +14.64M as it has moved further out of the money).
              <span className="dn-em">
                The dealer book is now structurally offered into
                a fade (the $65k wall is essentially below our
                feet, with $60k and $68k bracketing it) and bid
                into a squeeze only if it gets back through to
                the $80k overhead — a ~$13k climb. The
                amplification regime is deeper than 06-02 and
                the structural floor in the near-strike negative
                cluster has rotated down to the $65k zone.
              </span>{' '}
              3JUN26 0.3DTE{' '}
              <span className="dn-tag bear">−4.30M</span> settles
              at the 08:00Z print today (~8h ahead of this
              snapshot); the post-settle ex-3JUN aggregate would
              be roughly −38.8M − (−4.30M) = −34.5M, still net
              negative. Forward expiries:{' '}
              <span className="dn-tag bull">4JUN 1.3 +0.01M</span>{' '}
              (essentially flat),{' '}
              <span className="dn-tag bear">5JUN 2.3 −14.89M</span>{' '}
              <span className="dn-em">(the new amplifier on the
              strip — reduced from yesterday&rsquo;s −25.58M
              reading by −$10.69M as the chunk has resolved
              through the down-leg, but still the heaviest
              negative near-dated weight by an order of
              magnitude)</span>,{' '}
              <span className="dn-tag bear">6JUN 3.3 −0.58M</span>,{' '}
              <span className="dn-tag bear">12JUN 9.3 −9.11M</span>,{' '}
              <span className="dn-tag bear">19JUN 16.3 −4.10M</span>,{' '}
              <span className="dn-tag bear">26JUN 23.3 −16.65M</span>{' '}
              (the monthly expiry, the heaviest forward by total
              weight),{' '}
              <span className="dn-tag bull">31JUL 58.3 +4.53M</span>{' '}
              (was +10.03M — positive support compressing),{' '}
              <span className="dn-tag bull">28AUG 86.3 +0.71M</span>,{' '}
              <span className="dn-tag bull">25SEP 114.3 +2.86M</span>{' '}
              (was +8.35M),{' '}
              <span className="dn-tag bull">25DEC 205.3 +5.03M</span>{' '}
              (was +9.37M),{' '}
              <span className="dn-tag bull">26MAR27 296.3 +0.56M</span>.
              The 5JUN −14.89M chunk remains the dominant
              near-dated negative weight but its scale has been
              cut nearly in half by the press already; ex-5JUN
              forward aggregate (post-3JUN settle) ≈ −34.5M −
              (−14.89M) = −19.6M, still net negative — the
              ladder past 5JUN does NOT carry a fresh
              amplifier. The 26JUN monthly carries structural
              weight at 23.3 DTE but no 0DTE-style settle
              window.
            </p>

            <p>
              IV median across 998 instruments is{' '}
              <span className="dn-tag bear">47.6%</span> (up from
              41.4% / 904 instruments on 06-02 — a +6.2pt vol bid
              as price broke through $70k and made a fresh
              lineage low) against 30D close-to-close RV of{' '}
              <span className="dn-tag">34.03%</span> —
              chain-level richness{' '}
              <span className="dn-tag">~+13.6pt</span> (vs ~+14.7pt
              on 06-02, basically unchanged — both IV and RV
              moved up together, IV by +6.2pt and RV by +7.3pt,
              the spread compressed slightly). A chain-median
              across N instruments, <span className="dn-em">not</span>{' '}
              a tradable spread; expiry-/strike-level vega, skew
              and term structure remain not loaded; the vol read
              stays framework-only. 998 instruments today vs 904
              on 06-02 — the +94 includes the fresh near-dated
              chain listed after the 2JUN 0.3DTE −9.08M cleared
              at 08:00Z 06-02 and additional further-dated
              listings as the chain extended around the dump. RV
              methodology: 30D close-to-close, logret.std × √365
              × 100 on the last 30 daily log returns (= 31
              consecutive daily closes) anchored to parquet last
              bar 2026-06-03 00:06Z; the underlying 31-close
              window now includes the 06-02 −6.53% dump candle,
              pushing 30D RV from 26.72% (06-02 note) to 34.03%
              (+7.31pt vol expansion — the biggest single-day RV
              expansion of the lineage). For reference, last 29
              returns / 30 closes reads 33.93%; the 34.03% page
              value comes from 30 returns.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Tier-1 mostly steady (10Y +2bp to 4.47%, HY OAS −2bp to 2.72% — back to 05-31 level, MOVE 73.3 unchanged on the day) · DXY +0.02 to 99.22 (+0.22 since 06-01 print) · BTC-vs-TradFi decoupling extended further to −14.18pt (was −9.18pt)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape barely moved while BTC dumped
                another −6.41% — the decoupling extended hard
                because BTC fell, not because TradFi rolled
              </span>. Dashboard render is 2026-06-02 22:15Z,
              ~1.8h before the snapshot. US 10Y nominal{' '}
              <span className="dn-tag bear">4.47% (+2.0bp)</span>,
              regime z <span className="dn-tag bear">+1.57</span>,
              episodic z <span className="dn-tag">+0.30</span> —
              RISK-OFF tag, firmer on the day. 10Y TIPS real{' '}
              <span className="dn-tag">2.07% (0.0bp)</span>,
              regime z <span className="dn-tag bear">+1.41</span>,
              episodic z <span className="dn-tag">+0.70</span> —
              still RISK-OFF, flat. 5Y5Y BE inflation{' '}
              <span className="dn-tag bear">2.26% (+2.0bp)</span>{' '}
              — small uptick reprint. HY OAS{' '}
              <span className="dn-tag bull">2.72% (−2.0bp)</span>,
              regime z <span className="dn-tag bull">−1.30</span>,
              episodic z <span className="dn-tag bull">−1.42</span>{' '}
              — back to the 05-31 level (2.72%) after 06-02&rsquo;s
              2.74% widen, still a deep risk-on episodic; the
              re-grow gate has re-opened by 2bp. MOVE bond vol{' '}
              <span className="dn-tag">73.3 (+3.11)</span> — same
              level same Δ as the 06-02 print, treat as unchanged
              on the day (Yahoo daily print may not have refreshed
              between renders). The offsets continued to drift:
              DXY <span className="dn-tag bear">99.22 (+0.02 day ·
              +0.21 since 06-01 22:15Z print)</span>, episodic z{' '}
              <span className="dn-tag bear">+1.15</span> — firmer
              again, episodic now above the +1.0 threshold; Fed
              net liquidity{' '}
              <span className="dn-tag bear">$5.872T (level
              unchanged vs prior desk note; source weekly Δ
              −0.058T)</span>, episodic z{' '}
              <span className="dn-tag bear">−2.28</span>. US-JP
              10Y spread{' '}
              <span className="dn-tag bear">1.95% (+2.0bp)</span>;
              USD/JPY{' '}
              <span className="dn-tag">159.62 (0.0 day · +0.36
              since 05-31)</span> (yen flat on the day after
              softening prior). NFCI −0.510 (stale 11d).{' '}
              <span className="dn-em">
                Net: the re-grow gates moved further apart
                again on the credit side (HY OAS gate 2.78% —
                at 2.72%, 6bp to fire, was 4bp on 06-02 — gate
                re-opened by 2bp) and inched closer on the rate
                side (10Y gate 4.53% — at 4.47%, 6bp to fire,
                was 8bp on 06-02), the reclaim-long rates
                filter (10Y &lt; 4.55%) stays true at 4.47%,
                and the macro tape stays net risk-on on the
                lines that matter for BTC — but BTC extended
                down −6.41% on its own, not on a macro
                catalyst. The BTC-vs-TradFi decoupling
                re-widened to −14.18pt this print (BTC −12.17%
                vs NQ +2.01%) from −9.18pt on 06-02 (per the
                06-02 note: BTC −7.00% vs NQ +2.18%) — the gap
                widened because BTC dumped on its own, NQ
                +0.18pt eased (actually NQ -0.17pt flat
                day-on-day on the 7d window: +2.18% → +2.01%),
                and BTC −5.17pt extended the BTC-internal
                catalyst dominance
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
                <tr><td>US 10Y nominal</td><td className="num">4.47%</td><td className="num bear">+2.0bp</td><td className="num bear">+1.57</td><td className="num">+0.30</td><td className="bear">tight · firmer</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.07%</td><td className="num">0.0bp</td><td className="num bear">+1.41</td><td className="num">+0.70</td><td className="bear">tight · still RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.26%</td><td className="num bear">+2.0bp</td><td className="num">+0.35</td><td className="num">+0.24</td><td className="neut">no tag · small uptick</td></tr>
                <tr><td>HY OAS</td><td className="num">2.72%</td><td className="num bull">−2.0bp</td><td className="num bull">−1.30</td><td className="num bull">−1.42</td><td className="bull">loose · risk-on episodic · 6bp from re-grow gate (re-opened by 2bp)</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.510</td><td className="num">0.00</td><td className="num">+0.10</td><td className="num bull">−0.81</td><td className="stale">stale 11d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">73.3</td><td className="num">+3.11 (prior print Δ; treat unchanged on the day)</td><td className="num">−0.29</td><td className="num">+0.04</td><td className="neut">loose · daily print unchanged from 06-01 render</td></tr>
                <tr><td>DXY</td><td className="num">99.22</td><td className="num bear">+0.02</td><td className="num">+0.83</td><td className="num bear">+1.15</td><td className="bear">firmer · +0.22 since 06-01 print</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.872T</td><td className="num bear">−0.058T (source weekly Δ; level unchanged note-to-note)</td><td className="num">+0.22</td><td className="num bear">−2.28</td><td className="neut">loose · source weekly Δ −0.058T; level unchanged vs prior desk note</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.62</td><td className="num">+0.27 (prior print Δ; treat unchanged on the day)</td><td className="num bear">+1.26</td><td className="num">+0.97</td><td className="neut">yen flat on the day</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.95%</td><td className="num bear">+2.0bp</td><td className="num bull">−0.87</td><td className="num">+0.30</td><td className="bear">widened by 1bp from 06-02&rsquo;s 1.94%</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7617</td><td className="num bull">−0.0040</td><td className="num bull">−1.92</td><td className="num bull">−1.91</td><td className="bull">no tag · loose · −0.0040 since 06-02</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp (monthly)</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows,
              summary 00:01Z — <span className="dn-em">a 7-day
              rolling read, not today</span>). Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.258</span> (eased
              from 06-02&rsquo;s 0.267 but still above the 0.25
              IDIOSYNCRATIC threshold; still in the NORMAL
              band). BTC&rsquo;s listed ties ranked by |r|: CL{' '}
              <span className="dn-tag">−0.314</span>, BRENT{' '}
              <span className="dn-tag">−0.302</span>, NQ{' '}
              <span className="dn-tag">+0.220</span> (was +0.293
              — weakened, the BTC ↔ NQ tie has loosened materially
              as BTC has decoupled hard), GOLD{' '}
              <span className="dn-tag">+0.193</span>, EUR{' '}
              <span className="dn-tag">+0.179</span>, SP500{' '}
              <span className="dn-tag">+0.173</span>, SILVER{' '}
              <span className="dn-tag">+0.166</span>, JP225{' '}
              <span className="dn-tag">+0.165</span>, PLAT{' '}
              <span className="dn-tag">+0.163</span>, META{' '}
              <span className="dn-tag">+0.135</span>, AAPL{' '}
              <span className="dn-tag">−0.129</span>, TSLA{' '}
              <span className="dn-tag">+0.128</span>, NVDA{' '}
              <span className="dn-tag">+0.121</span>. 7d
              performance:{' '}
              <span className="dn-tag bear">BTC −12.17%</span>{' '}
              (extended from 06-02&rsquo;s −7.00% — the 7d
              window now includes the 06-02 −6.53% dump
              candle), NQ{' '}
              <span className="dn-tag bull">+2.01%</span> (vs
              +2.18% — basically flat), SP500{' '}
              <span className="dn-tag bull">+1.05%</span> (vs
              +0.74%), JP225{' '}
              <span className="dn-tag bull">+2.83%</span>, MSFT{' '}
              <span className="dn-tag bull">+5.69%</span> (still
              TradFi leader, eased from +7.79%), META{' '}
              <span className="dn-tag bear">−1.68%</span> (was
              −2.01%, recovered slightly), TSLA{' '}
              <span className="dn-tag bear">−3.02%</span> (was
              −3.60%), AAPL{' '}
              <span className="dn-tag bull">+2.20%</span>{' '}
              (flipped from −1.38%), NVDA{' '}
              <span className="dn-tag bull">+3.76%</span>{' '}
              (extended from +2.96%). Metals soft: GOLD{' '}
              <span className="dn-tag bear">−0.85%</span>, SILVER{' '}
              <span className="dn-tag bear">−2.93%</span>, PLAT{' '}
              <span className="dn-tag bear">−1.24%</span>, PALL{' '}
              <span className="dn-tag bear">−1.67%</span>.
              Energy firmed: CL{' '}
              <span className="dn-tag bull">+1.54%</span> (vs
              +0.47%), BRENT{' '}
              <span className="dn-tag bull">+0.71%</span> (vs
              −0.26%), NGAS{' '}
              <span className="dn-tag bull">+5.15%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine
                extended to ~−14.18pt (BTC −12.17% vs NQ
                +2.01%) from −9.18pt on 06-02 — the gap
                widened −5.0pt because BTC dumped further on
                its own. The decoupling read remains
                endogenous-to-crypto, with BTC moving on its
                own catalyst (cycle ladder break + dealer
                book amplification + position book stacking)
                while TradFi held steady. Mean |r| easing
                back toward IDIOSYNCRATIC reflects BTC
                pulling away from the shared-price action
                pattern (it dumped while TradFi flat/up)
              </span>. JGB monthly 2.52% carries EXTREME
              RISK-OFF monthly tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · cover-bounce scout DROPPED unchanged (anchor still lost) · runner / put-spread tail remain closed · deferred short scout — framework watch shape B FIRED structurally inside the 06-02 BJ 13–15 window (Δnet −6,621 / largest of lineage) but was NON-ACTIONABLE per 06-02 audit DN-001; ladder reference $65k wall is now the structural magnet · NEW: mean-revert long scout (framework watch only, NON-ACTIONABLE) keyed to the 4h TD9 BUY + 8h/1d TD9 BUY imminence + funding off-cap streak · no fresh trades on this snap</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 06-02 framework watch on the short side
                printed exactly the predicted shape — but per
                that note&rsquo;s audit DN-001 the scout was
                NON-ACTIONABLE, so no live position rode the
                signal
              </span>. The 06-02 Shape B conditions{' '}
              (<em>&ldquo;1h close &lt; $70,718 AND fresh Δnet ≤
              −3k re-stack hostile-2&rdquo;</em>) fired inside
              the next BJ 13–15 window: the 06-02 14:46 BJ step
              printed Δnet −6,621 (the largest single-minute Δ
              of the lineage, eclipsing 05-30 22:01&rsquo;s
              −5,569), spot $70,298 at the step entry led the
              follow-through to the 24h low $66,229 — −$4,069 /
              −5.79% follow-through. The framework was right;
              the discipline (audit DN-001 downgrade) means the
              desk did not size on it. The cover-bounce scout
              from 05-31 remains DROPPED — its 06-01 stop fired
              and the anchor reclaim threshold ($73,191
              D-SMA100 + dealer-book repair + cover-shape) is
              ~$6.5k overhead. The runner and the 29MAY
              put-spread tail stay closed unchanged. NEW
              today: the mean-revert long scout is recognized
              as a framework watch ONLY — non-actionable —
              against the 4h TD9 BUY printing + 8h/1d/1M
              TD9 BUYs imminent + funding off-cap streak
              building. The trade book today is unchanged from
              06-02 in terms of live size (none); the desk
              maintains discipline through a confirmed cycle
              ladder break and the largest single-minute SM
              re-stack of the lineage.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">closed · primary · runner ladder complete · closed on 29MAY 08:00Z expiry settle (unchanged status carried from 06-02)</span>
              <div className="dn-trade-name">
                Flip-extend short — closed on 29MAY 08:00Z expiry settle as the 05-29 ladder required (unchanged from 06-02)
              </div>
              <div className="dn-thesis">
                Status unchanged from the 06-02 note: closed on
                the 29MAY amplifier settle, no residual
                position, ladder complete. The retrospective
                read carries forward: closing on the 29MAY
                settle rather than holding through the
                post-amplifier bounce was correct in hindsight
                — the bounce lasted exactly two daily closes
                (05-30 $73,857 / 05-31 $73,653) before the
                06-01 break and 06-02 −6.53% extension.
                Re-entry on this 06-02 → 06-03 down-leg
                requires a fresh structural setup, not a roll
                of this one.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (amplifier settle) · no residual position · unchanged from 06-02</span></div>
                <div><span className="dn-lvl-k">final ladder</span><span className="dn-lvl-v">target #1 W-SMA20 $74,151 (taken 05-28) · target #2 W-EMA200 seed $73,710 (taken on 05-28 14:01 re-stack) · target #3 D-SMA100 $72,958 (24h low $72,614 wicked through)</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">do not chase this trade re-entry on the 06-02 −6.53% extension — open the framework-watch short scout below on its own structural setup, not as a roll · do not re-add on a stretched cover-rally back into anchor</span></div>
              </div>
              <div className="dn-gating">
                <b>Trade closed.</b> The lineage discipline
                still holds: no roll, no average, no late-tier
                add. The framework-watch short scout printed
                its predicted signal inside the 06-02 BJ 13–15
                window with the largest single-minute Δnet of
                the lineage — vindicating the closed runner
                discipline; a re-armed runner would have
                been bigger than the scout ceiling allows.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">DROPPED · scout · cycle anchor lost on 06-01 close, extended on 06-02 close (unchanged dropped status carried from 06-02)</span>
              <div className="dn-trade-name">
                Cover-bounce scout — DROPPED (unchanged from 06-02): the cycle anchor remains lost by ~$6.5k after the 06-02 −6.53% close
              </div>
              <div className="dn-thesis">
                Status unchanged from the 06-02 note: the 05-31
                scout was gated long against a real cover-bounce
                and its bottom-of-stack stop (1d close &lt;
                D-SMA100) fired on the 06-01 UTC close. The
                06-02 UTC close $66,730 has extended the break
                by another −$4,662 / −6.53%, putting spot
                $6,461 below the recomputed cycle anchor
                $73,191. A long re-entry requires a fresh
                structural setup: anchor reclaim AND
                dealer-book repair AND cover-shape flow — three
                legs, all required, none currently progressing.
                The mean-revert long scout below addresses a
                different setup (oversold-reversal rebound,
                not anchor-reclaim continuation) and is
                separately keyed.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout status</span><span className="dn-lvl-v">DROPPED (unchanged) · cycle anchor lost 06-01 close $71,392, extended on 06-02 close $66,730 · spot now ~$6,461 below the recomputed D-SMA100 $73,191</span></div>
                <div><span className="dn-lvl-k">re-entry threshold (carried from 06-02; not progressing)</span><span className="dn-lvl-v bull">1d close &gt; D-SMA100 $73,191 AND aggregate GEX flips back &gt; 0 AND 1h cover-shape print (OI shrinking + spot CVD bid + SM short_btc bleeds) — three legs, all required; none are progressing</span></div>
                <div><span className="dn-lvl-k">no long entry here</span><span className="dn-lvl-v bear">do not buy the 06-02 dump on a 1h reflex bid — this is a different setup than the cover-bounce scout, and the mean-revert long scout below is itself a framework watch only</span></div>
              </div>
              <div className="dn-gating">
                <b>Trade dropped (unchanged).</b> The 06-02
                discipline carries: anchor reclaim requires
                three legs, not one. The mean-revert long
                scout below is a separate setup keyed to
                oversold-reversal exhaustion, not to
                anchor-reclaim continuation.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · short scout · NON-ACTIONABLE · 06-02 audit DN-001 downgrade carried forward · the 06-02 framework-watch Shape B FIRED inside the 06-02 BJ 13–15 window (Δnet −6,621 / largest of lineage) — structurally vindicated, not actionable</span>
              <div className="dn-trade-name">
                Anchor-break short scout — framework watch only, structurally vindicated but NON-ACTIONABLE (Shape B fired clean)
              </div>
              <div className="dn-thesis">
                The 06-02 note&rsquo;s framework-watch Shape B
                conditions{' '}
                (<em>&ldquo;1h close &lt; $70,718 AND fresh
                Δnet ≤ −3k re-stack hostile-2&rdquo;</em>) fired
                inside the next BJ 13–15 window:{' '}
                <span className="dn-em">2026-06-02 14:46 BJ
                (06:46 UTC), Δnet −6,621 (Δlong −742, Δshort
                +5,879 same minute, SM net stepped −37,335 →
                −43,956 at spot $70,298)</span> — the largest
                single-minute Δnet of the entire lineage,
                eclipsing the 05-30 22:01 −5,569 step by 19%.
                The price consequence: spot bled from the
                $70,298 step entry to the 24h low $66,229 @
                BJ 07:04 06-03 (−$4,069 / −5.79%
                follow-through over 8h 18m). Per the 06-02
                audit DN-001 downgrade, this scout is
                NON-ACTIONABLE from a single-snapshot read:
                framework-only, no live entry, no live sizing,
                no live stop, no live ladder. The structural
                vindication carries the read forward: the
                framework predicted a press of the $70k wall
                inside the next cadence window, the press came
                inside the window at the largest single-minute
                signature of the lineage, and the
                follow-through took price to the new heaviest
                wall zone ($65k −15.48M, ~$1.7k under live
                spot). Going forward, the structural setup is
                materially exhausted: the 5JUN amplifier has
                resolved from −25.58M to −14.89M (−$10.69M
                reduction), the $70k wall has rolled from
                −28.64M to −7.39M (−$21.25M resolution),
                funding has come off cap on two discrete 24h
                runs (~12.2h cumulative, current streak 1.88h), and
                the multi-TF TD9 BUY stack is forming. A
                future audited note may carry this card as
                CLOSED-VINDICATED rather than continuing as a
                framework watch.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">06-02 Shape B trigger (FIRED)</span><span className="dn-lvl-v bear">1h close &lt; $70,718 AND fresh Δnet ≤ −3k re-stack — both legs FIRED inside the 06-02 06:46Z (BJ 14:46) step with Δnet −6,621 at spot $70,298; 1h closes after BJ 14:00 06-02 all printed sub-$70,718</span></div>
                <div><span className="dn-lvl-k">06-02 Shape A trigger (NOT FIRED · STALE)</span><span className="dn-lvl-v">stretched cover-rally into $73,035–$73,216 — spot never approached the band; STALE on the down-extension</span></div>
                <div><span className="dn-lvl-k">structural ladder progress (06-02 reference levels)</span><span className="dn-lvl-v">$70k wall PRESSED THROUGH (06-02 reference: $70k −28.64M; today: $70k −7.39M — resolved through the press) · $68k cluster ENGAGED (still −10.98M today vs −7.89M on 06-02) · $65k EMERGED as the new heaviest near wall at −15.48M (~$1.7k under spot) · $60k wall reference rung now $5.1k below spot ($60k −15.12M today vs −10.80M on 06-02 · +$4.32M deepening as more crash-put residual concentrated at the strike) · the original 06-02 ladder rung $70k → $68k → $60k is partially complete</span></div>
                <div><span className="dn-lvl-k">deferred status carried forward</span><span className="dn-lvl-v">NON-ACTIONABLE from this note (audit DN-001 carried) · no live entry, no live size, no live stop, no live ladder · the codex audit may dispose this card to CLOSED-VINDICATED on its next pass</span></div>
                <div><span className="dn-lvl-k">amplifier window status</span><span className="dn-lvl-v">5JUN26 08:00Z settle (2.3 DTE today) · −14.89M today vs −25.58M on 06-02 (−$10.69M reduction) · the press has already taken half the chunk&rsquo;s gamma off the strip; what remains is more dispersed and less amplifying than the original setup</span></div>
              </div>
              <div className="dn-gating">
                <b>Status:</b> NON-ACTIONABLE (framework watch
                only, carried). The structural prediction was
                accurate and the press came inside the
                framework&rsquo;s named window — but the desk did
                not size, and a chase-add into the post-press
                tape (after −$4k of follow-through, funding off
                cap, multi-TF TD9 BUYs printing) would not pass
                the audit again. <b>Hard rule:</b> no entry on
                a press-already-completed tape; no
                amplifier-fade entries inside the last 24h of
                resolution (5JUN 2.3 DTE is inside that window
                today). The framework-watch language carries
                until the codex audit explicitly closes the
                card.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">closed · macro tail · closed on 29MAY 08:00Z settle (unchanged status carried from 06-02; re-grow gates moved apart on credit side, closer on rates)</span>
              <div className="dn-trade-name">
                Downside put-spread — closed on 29MAY 08:00Z settle; no roll (re-grow gates 6bp from fire on both sides)
              </div>
              <div className="dn-thesis">
                Status unchanged from the 06-02 note: closed on
                the 29MAY Deribit settle. The macro re-grow
                gates moved apart on the credit side and
                closer on the rate side today (HY OAS 2.78%
                gate — at 2.72%, 6bp to fire, was 4bp on 06-02
                — re-opened by 2bp; 10Y gate 4.53% — at 4.47%,
                6bp to fire, was 8bp on 06-02 — closer by
                2bp). The reclaim-long rates filter (10Y &lt;
                4.55%) is still TRUE at 4.47%; this is a
                standalone filter that currently filters for
                the long side. No fresh hedge: the
                BTC-internal down-leg has done structurally
                more than a macro tail at current gate
                distances would; rolling a fresh tail at
                12JUN −9.11M or 26JUN −16.65M scale would not
                carry the 29MAY-style amplifier tailwind at
                full scale.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (Deribit 29MAY settle) · no residual position · no roll · re-grow gates 6bp from fire on both sides</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (fires roll to 12JUN/26JUN)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.72%, 6bp to fire — re-opened by 2bp vs 06-02) OR 10Y &gt; 4.53% close (currently 4.47%, 6bp to fire — closer by 2bp vs 06-02)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — still TRUE at 4.47%; awaits BTC-internal pivot (and currently filters for the long side, which has no live entry on today&rsquo;s setup)</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates remain
                discretionary watches, not backtested
                breakpoints. The BTC-internal down-leg has
                already resolved most of the 5JUN amplifier
                without a macro catalyst — a fresh tail
                purchase today would be entering vol post-bid
                (IV +6.2pt to 47.6%) and post-press; the macro
                tail should re-open only on a fresh macro-side
                fire, not on BTC-internal exhaustion.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">NEW · framework · mean-revert long scout · NON-ACTIONABLE (framework watch only; not promoted to live from this note) · keyed to the 4h TD9 BUY print + 8h/1d/1M TD9 BUYs imminent + funding off-cap streak + multi-TF lineage-deep RSIs (13.4 / 15.5 / 14.6 on 4h / 8h / 12h)</span>
              <div className="dn-trade-name">
                Mean-revert long scout — NEW framework watch, NON-ACTIONABLE: the oversold-reversal signature stack is building but no live entry from this note
              </div>
              <div className="dn-thesis">
                A fresh setup has emerged on the long side
                that is distinct from the cover-bounce scout
                (which requires anchor reclaim — three legs):
                a mean-revert long scout against deep
                multi-TF oversold AND a building TD9 BUY
                stack AND a leverage-gate relief signature
                (funding off cap). The conditions building:
                (1) 4h ⚡ TD9 BUY printed at $66,835 — the
                second consecutive 4h TD9 BUY across the
                down-leg (was at $71,226 on the 06-02 scan,
                −$4,391 lower today; the previous TD9 BUY at
                $71,226 did NOT print a confirmed bounce,
                instead the down-leg extended through it).
                (2) 8h Buy 8 → 9? — one bar close away from
                confirming TD9 BUY on the engine slow-frame.
                (3) 1d Buy 8 → 9? — one bar close away from
                confirming TD9 BUY on the cycle frame. (4)
                1M Buy 8 → 9? — one bar close away from
                confirming TD9 BUY on the macro frame. (5)
                Funding cumulative ~12.2h off-cap inside the 24h
                window across two discrete runs (earlier 06-02
                06:27Z–16:49Z at ~10.4h, plus current streak from
                06-02 22:13Z at ~1.88h); the 06-02 note&rsquo;s
                explicit{' '}
                <em>&ldquo;funding bleeds off cap for ≥ 30
                consecutive minutes&rdquo;</em> first-leg
                long-re-entry condition has fired on both runs,
                and the framework&rsquo;s deeper ≥ 4h cumulative
                gate has CLEARED at ~12.2h cumulative). (6) 1h
                reflex bid off the 06-02 23:04Z $66,229 low
                — price +0.61% with spot CVD bid (+455) into
                the snap-hour, even with futures still
                offered (−798 fut_cvd, −856 big-print).{' '}
                <span className="dn-em">
                  Per audit DN-001 discipline carried from
                  06-02, this is NON-ACTIONABLE from this
                  note. No live entry, no live size, no live
                  stop, no live ladder. A future audited
                  note can promote this to a 0.2R scout at
                  the desk&rsquo;s scout ceiling IF the
                  cumulative trigger fires
                </span>: 8h OR 1d TD9 BUY confirms on the
                next bar close AND funding cumulative ≥ 4h
                off-cap (already CLEARED at ~12.2h cumulative
                in this window) AND a 1h close prints
                above the prior 1h death-cross failure level
                (intrabar TBD; framework reference is the
                D-EMA20 $74,044 ladder rung, but a
                preliminary 1h reclaim above $68k area
                serves as the leading edge).
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">structural setup (NOT a live entry)</span><span className="dn-lvl-v">multi-TF TD9 BUY stack (4h printed, 8h/1d/1M one bar away) + RSIs at lineage-deep oversold (4h 13.4 / 8h 15.5 / 12h 14.6) + funding cumulative ~12.2h off-cap inside the 24h window (current streak 1.88h, two discrete runs) + 1h reflex bid off the 24h low — the setup is the most exhausted oversold print of the lineage by every metric</span></div>
                <div><span className="dn-lvl-k">would-be promotion trigger (NON-ACTIONABLE from this note)</span><span className="dn-lvl-v bull">a future audited note can promote IF: 8h OR 1d TD9 BUY confirms on next bar close (i.e. the 8h or 1d Buy 9 close prints) AND funding cumulative ≥ 4h off-cap (CLEARED — ~12.2h cumulative in the snap&rsquo;s 24h window across two discrete runs) AND 1h close prints above a leading-edge reclaim level (preliminary $68k area; the framework reference reclaim rung is D-EMA20 $74,044)</span></div>
                <div><span className="dn-lvl-k">structural reference ladder rungs (not order targets)</span><span className="dn-lvl-v">first-bounce target $68k–$68.5k (the $68k −10.98M cluster fill area) · second-bounce target W-SMA20 $72,807 / D-SMA100 $73,191 / W-EMA200 $73,632 (the ~$0.8k reclaim band, a full +9–10% from spot) · invalidation: 1h close &lt; $66,000 with fresh Δnet ≤ −3k re-stack hostile-2 inside the BJ 13–15 window of 06-03</span></div>
                <div><span className="dn-lvl-k">size cap if ever promoted</span><span className="dn-lvl-v">0.2R total (scout ceiling) on the cumulative trigger · no stacking on the 4h TD9 BUY alone (the prior 4h TD9 BUY at $71,226 failed and the down-leg extended through it; a single 4h TD9 BUY is not a promotion-grade trigger)</span></div>
                <div><span className="dn-lvl-k">amplifier window risk</span><span className="dn-lvl-v">5JUN26 08:00Z settle (2.3 DTE today) · −14.89M today · the remaining chunk could still print a press leg in the next 48h before settle; a fresh re-stack hostile-2 inside the 06-03 BJ 13–15 window would invalidate the mean-revert read</span></div>
              </div>
              <div className="dn-gating">
                <b>Status:</b> NON-ACTIONABLE (framework watch
                only, NEW). The setup is structurally the
                most exhausted of the lineage but the desk
                discipline says: a single 4h TD9 BUY across a
                down-leg is not a promotion-grade trigger
                (the prior one at $71,226 failed); the
                cumulative trigger requires slow-frame
                confirmation AND leverage-gate sustained
                relief AND a 1h reclaim leg. <b>Hard rule:</b>{' '}
                no entry while the 5JUN amplifier is inside
                its 0DTE settle window (i.e. inside the
                approach to 2026-06-05 08:00Z) without slow-
                frame TD9 BUY confirmation; the 5JUN chunk
                can still print a press leg even at its
                reduced −14.89M scale.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · cycle cadence CONFIRMED on a third consecutive print with the largest single-minute Δnet of the lineage · 06-02 BJ 13–15 fired clean (Δnet −6,621 inside the window) · BJ 22 secondary did NOT fire today (window max +813 cover only)</span>
              <div className="dn-trade-name">
                Squeeze-cycle — cadence CONFIRMED: 06-02 14:46 BJ window step (Δnet −6,621) is the largest single-minute Δ of the lineage and the third consecutive primary-window print
              </div>
              <div className="dn-thesis">
                The 05-31 note declared the BJ 13–15 cadence
                falsified after three quiet windows; the
                06-02 note re-armed the cadence on the 06-01
                BJ 14:16 print (Δnet −3,137); today the
                cadence fired again on the 06-02 BJ 14:46
                print (Δnet −6,621) — three consecutive
                primary-window prints with the third
                printing the LARGEST single-minute Δ of the
                lineage. The cadence is no longer a base
                rate that needs defending; it is a live
                cycle 3 step 2 confirmation. The 06-02 BJ 22
                secondary window (UTC 14:00 06-02) printed
                only a small cover (window max +813,
                Δlong +693, Δshort −120) — secondary did NOT
                fire today; only the primary BJ 13–15 window
                confirmed. The framework treats the primary
                window as the highest base-rate prediction
                for the next discrete step.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">cadence CONFIRMED on three consecutive primary-window prints: 06-01 BJ 14:16 (Δnet −3,137) → 06-02 BJ 14:46 (Δnet −6,621 — largest of lineage); secondary BJ 22 did NOT fire today (window max +813); primary is the live prediction window</span></div>
                <div><span className="dn-lvl-k">primary extension event (06-02)</span><span className="dn-lvl-v">re-stack hostile-2 @ 2026-06-02 06:46Z (BJ 14:46 06-02) · spot $70,298 · Δlong −742, Δshort +5,879 (52,521 − 46,642), Δnet −6,621 (largest single-minute Δ of the entire lineage)</span></div>
                <div><span className="dn-lvl-k">secondary BJ 22 (06-02) — DID NOT FIRE</span><span className="dn-lvl-v">window max |Δnet| = +813 @ 2026-06-02 14:16Z (BJ 22:16 06-02) · Δlong +693, Δshort −120 — a small cover, not an extension; secondary window did not confirm today</span></div>
                <div><span className="dn-lvl-k">SM trough (most short) in 24h</span><span className="dn-lvl-v">−44,438 BTC @ 2026-06-02 14:01Z (BJ 22:01 06-02) · the deepest net-short of the lineage; the trough printed ~7h 15m after the BJ 14:46 step entry (extension trough lagging the step by ~7h, smaller than the 05-30 cycle but consistent with the lineage post-step pattern)</span></div>
                <div><span className="dn-lvl-k">post-step price path</span><span className="dn-lvl-v">primary step $70,298 → 24h low $66,229 @ BJ 07:04 06-03 (−$4,069 / −5.79% from step entry over ~8h 18m) → snapshot $66,752 (+$523 / +0.79% reflex bid into the snap, 1h after the low)</span></div>
                <div><span className="dn-lvl-k">forward gating</span><span className="dn-lvl-v">watch BJ 13–15 window of 06-03 (UTC 05:00–07:00 06-03, ~5h ahead of this snap) for cycle 3 step 3; a fresh Δnet ≤ −3k inside the window confirms the cadence on a fourth consecutive print and invalidates the mean-revert long scout&rsquo;s setup; a sub-threshold print weakens the cadence but does not falsify it (the cadence has now demonstrated re-emergence on a 4-day delay, so a single quiet window is no longer a falsification signal)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> three consecutive
                primary-window prints, the latest at the
                largest single-minute Δnet of the lineage, with
                a clean follow-through price leg, confirms the
                cadence is alive and well-tuned. The 06-03 BJ
                13–15 window is the next gating event —
                pre-snap, ~5h ahead.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · cycle anchor lost and extended (06-02 close −$4,662 = deepest single-day drop of lineage) · gamma deeper net-short (−38.8M) · funding came OFF cap on TWO discrete 24h runs (cumulative ~12.2h off-cap, ≥ 4h cumulative gate CLEARED) · multi-TF TD9 BUY stack forming · short scout NON-ACTIONABLE but Shape B vindicated structurally · NEW mean-revert long scout (framework watch only, NON-ACTIONABLE) · cadence CONFIRMED on third consecutive primary-window print with the largest single-minute Δnet of the lineage</span>
            </h2>

            <p>
              Of the 06-02 decision conditions: the
              cycle-ladder break confirmation FIRED clean and
              extended (06-01 close $71,392, 06-02 close
              $66,730 — deepest single-day drop of the lineage
              at −$4,662 / −6.53%; both daily-close legs
              already TRUE were extended hard); the cover-rally
              shape A trigger DID NOT FIRE (spot never
              approached the $73,035–$73,216 band; STALE on the
              down-extension); the breakdown shape B trigger
              FIRED clean inside the next BJ 13–15 window (Δnet
              −6,621 inside the 06-02 06:46Z step at spot
              $70,298 — the largest single-minute Δnet of the
              entire lineage); the funding cap relief watch
              FIRED twice today (earlier 06-02 06:27Z–16:49Z
              off-cap run 622 min / ~10.4h, then current streak
              from 06-02 22:13Z at 113 min / ~1.88h — cumulative
              ~12.2h off-cap inside the 24h window, the &ge; 4h
              cumulative gate CLEARED by ~3×); the anchor
              reclaim re-entry threshold DID
              NOT PROGRESS (spot now $6,461 below anchor); the
              cycle 3 step 2 cadence CONFIRMED (the 06-02 BJ
              13–15 print is the third consecutive primary-
              window print and the largest single-minute Δnet
              of the lineage); the macro re-grow gates moved
              apart on credit (HY OAS gate +2bp open) and
              closer on rates (10Y gate −2bp closer); the
              reclaim-long rates filter stayed true at 4.47%;
              the 2JUN26 expiry settled clean (−9.08M cleared
              at 08:00Z 06-02 inside the dump leg without a
              vol event of its own — the dump came on the
              cadence step at 06:46Z 06-02, 1h 14m before the
              settle).{' '}
              <em>Four structural conditions fired (cycle break
              extended, shape B vindicated, funding cap
              relief, cadence confirmed), two held (rates
              filter, anchor reclaim still un-progressed), and
              the long-side scouts each carry their respective
              status: cover-bounce DROPPED unchanged,
              mean-revert NEW framework watch (NON-ACTIONABLE).</em>{' '}
              The conditions today re-set around an extended
              cycle ladder break, a deeper negative-gamma
              dealer book, the new $65k structural wall, funding
              off cap, multi-TF TD9 BUY stack building, and a
              live cadence for cycle 3 step 3 on the 06-03 BJ
              13–15 window (~5h ahead of this snap):
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>3JUN26 expiry settles today (08:00Z, ~8h ahead of this snap)</td><td>−4.30M negative chunk clears; ex-3JUN aggregate ≈ −34.5M still net negative — small amplification reduction inside the day</td><td>monitor — a clean settle without a vol event keeps the gating event on the 5JUN −14.89M chunk (2.3 DTE); a vol event at the 08:00Z print would extend the dump</td></tr>
                <tr><td>5JUN26 amplifier window (2.3 DTE today, 08:00Z 5JUN)</td><td className="bear">heaviest negative single-expiry weight at −14.89M (was −25.58M on 06-02, −$10.69M reduction) · scale roughly 16% of the 29MAY amplifier · expected to dominate the dealer book through 5JUN26 08:00Z but at smaller amplitude than originally</td><td>monitor — this is the structural reference window the framework-watch short-scout was keyed to; no live position to carry, but a fresh Δnet ≤ −3k re-stack inside the 06-03 BJ 13–15 window would still flag a continuation press in the run-up to the 5JUN settle</td></tr>
                <tr><td>Cycle 3 step 3 cadence (BJ 13–15 on 06-03, ~5h ahead)</td><td className="bear">next BJ 13–15 window = 2026-06-03 05:00–07:00 UTC (~5h from snap); a fresh Δnet ≤ −3k inside the window confirms the cadence on a fourth consecutive print AND invalidates the mean-revert long scout&rsquo;s setup; a sub-threshold print weakens the cadence but does not falsify (re-emergence pattern allows it)</td><td>watch as the dominant pre-snap framework event of the next 24h; if cadence fires, mean-revert long scout stays NON-ACTIONABLE for another note; if cadence does NOT fire, mean-revert long scout&rsquo;s structural setup advances</td></tr>
                <tr><td>Anchor reclaim (long re-entry threshold, cover-bounce path)</td><td className="bull">1d close &gt; D-SMA100 $73,191 AND aggregate GEX flips back &gt; 0 AND 1h cover-shape print (OI shrinking + spot CVD bid + SM short_btc bleeds) — three legs required; ~$6.5k overhead on spot, none progressing</td><td>no action — the cover-bounce scout remains DROPPED unchanged; this is the structural re-entry path, not the mean-revert path</td></tr>
                <tr><td>Mean-revert long scout promotion trigger (NEW path, NON-ACTIONABLE from this note)</td><td className="bull">8h OR 1d TD9 BUY confirms on next bar close AND funding cumulative ≥ 4h off-cap (CLEARED — ~12.2h cumulative in the snap&rsquo;s 24h window across two discrete runs) AND 1h close prints above a leading-edge reclaim level (preliminary $68k area; framework reference reclaim rung is D-EMA20 $74,044) — three legs required; the funding leg is CLEARED, the 8h/1d TD9 BUY confirm leg and the 1h reclaim leg remain</td><td>monitor — a future audited note can promote to 0.2R scout if all three legs fire; non-actionable from this single-snapshot read; a single 4h TD9 BUY is not a promotion-grade trigger (the prior one at $71,226 failed)</td></tr>
                <tr><td>Funding cap relief (leverage gate signal — FIRED twice)</td><td className="bull">cumulative off-cap inside the 24h window ~12.2h across two discrete runs (earlier 06-02 06:27Z–16:49Z at 622 min / 10.4h, plus current streak from 06-02 22:13Z at 113 min / 1.88h); &ge; 30 consecutive minute watch satisfied on both runs and the &ge; 4h cumulative gate CLEARED by ~3×; first leg of the mean-revert long scout&rsquo;s cumulative trigger is CLEARED</td><td>monitor — sustaining or extending the current 1.88h streak through the 06-03 BJ 13–15 window keeps the leg cleared; a fresh re-pin to cap inside that window would still re-arm the short framework watch (the cumulative count would already have cleared, but the trade-state read would shift)</td></tr>
                <tr><td>Cycle continuation (low base rate but still alive)</td><td className="bear">fresh re-stack SM Δ ≤ −3k pushing SM &lt; −45k AND 1h close &lt; $66,000 inside the 06-03 BJ 13–15 window — cycle 3 step 3 extension signature; if it fires, ladder rung $65k −15.48M (the new heaviest wall) is the next price target, then $60k −15.12M crash-put residual</td><td>no live short position; the cadence framework treats this as the highest-base-rate continuation prediction · if it fires, the mean-revert long scout&rsquo;s setup is invalidated for at least one more cycle</td></tr>
                <tr><td>Macro tail re-grow (gates apart on credit, closer on rates)</td><td className="bear">HY OAS &gt; 2.78% (6bp to fire, was 4bp on 06-02 — re-opened by 2bp) OR 10Y &gt; 4.53% (6bp to fire, was 8bp — closer by 2bp)</td><td>roll hedge to 12JUN/26JUN forward only if the macro side fires; the BTC-internal mean-revert long scout takes precedence on a BTC-only fire</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — still TRUE at 4.47%; awaits BTC-internal pivot (filters for the long side; the mean-revert long scout&rsquo;s setup matches the filter, but the scout itself is NON-ACTIONABLE)</td><td>standalone filter true; no live entry on either long path</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the 06-03 BJ 13–15 window prints a
                fourth-consecutive re-stack hostile-2 inside
                the cadence (Δnet ≤ −3k pushing SM net through
                −45k with 1h close &lt; $66k — cycle 3 step 3
                continuation toward the $65k wall and the
                $60k crash-put residual), or whether the
                window passes sub-threshold and the
                mean-revert long scout&rsquo;s setup advances
                a leg (funding off-cap sustained, 8h/1d TD9
                BUY confirms, 1h reclaims a leading-edge
                level). The structural backdrop today is the
                deepest oversold + the deepest negative-gamma
                + the largest single-minute SM re-stack of
                the lineage — every metric is stretched. The
                question for the next 24h is whether the
                cadence breaks on a fourth print (continuation
                press toward the new $65k structural wall) or
                whether the position book exhausts and the
                multi-TF TD9 BUY stack confirms (mean-revert
                rebound toward the $68k cluster fill area)
              </span>. Until then this note runs as written:
              the runner and the put-spread tail stay closed,
              the cover-bounce scout is DROPPED unchanged
              (no anchor reclaim progress), the framework-
              watch short scout is structurally vindicated
              but remains NON-ACTIONABLE per audit DN-001
              carried, the NEW mean-revert long scout is a
              framework watch ONLY (NON-ACTIONABLE; one of
              three legs progressing — funding off cap),
              the cycle cadence framework is CONFIRMED on a
              third consecutive primary-window print with
              the largest single-minute Δnet of the lineage,
              and the macro re-grow gates inched apart on
              credit and closer on rates without firing. The
              BTC-vs-TradFi decoupling extended to −14.18pt
              as BTC dumped further on its own; the engine
              MTF frames collapsed into lineage-deep
              oversold; the multi-TF TD9 BUY stack is one
              bar away from confirming on three frames. The
              right read for the next 24h is{' '}
              <em>watch the 06-03 BJ 13–15 window — it is
              the next gating event, and it tells us which
              of the two structural setups (continuation or
              mean-revert) advances</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit · verdict
              BLOCK-CRITICAL on v1 · 6 findings (1 CRITICAL + 3
              MAJOR + 2 MINOR) · all applied · record:{' '}
              <code>audits/2026-06-03-desk-note.md</code>
            </span>
            This page was authored as v1 from the 2026-06-03
            00:05Z atomic snapshot and submitted to STAGE B for
            codex hostile-but-fair audit (xhigh effort,
            arithmetic recomputed against{' '}
            <code>/opt/btc-monitor/live_db.json</code> +{' '}
            <code>/opt/btc-data/data/btcusdt_1m_*.parquet</code>{' '}
            via <code>/opt/btc-data/.venv/bin/python3</code>).{' '}
            <b>Codex verdict on v1:</b>{' '}
            <em>BLOCK-CRITICAL</em> — the funding off-cap
            chronology and trigger state were materially wrong;
            three other major issues (MTF scan timestamp / values,
            an expiry-cadence arithmetic error, and an unsupported
            both-sides lineage-peak claim) and two minors (low-bar
            timing wording and macro source-copy drift on DXY /
            Fed liquidity / US-JP spread direction) were flagged.
            Codex-confirmed clean on v1: requireViewer gating
            (both routes, first statement), JSX structure /{' '}
            <code>tsc --noEmit</code>, the 24h headline arithmetic
            (spot −6.41%, OI +1,702 BTC, funding cap count
            705 / 1441, mean +9.33%, trough +5.68% @ 06-02 09:07Z),
            the exact 4h/1h flow windows, GEX wall map + 0γ flip,
            MA matrix + 30D RV vs the 2024-2026 parquet subset,
            cross-asset / BTC-NQ decoupling math, and the
            framework-only treatment of NTT / max-pain /
            strike-IV / BTC-NQ ratio.{' '}
            <b>v2 applies all 6 findings:</b>{' '}
            <em>DN-001 (CRITICAL):</em> funding chronology
            rewritten — the 24h window holds TWO discrete off-cap
            runs (earlier 06-02 06:27Z–16:49Z at 622 min / ~10.4h,
            plus current streak from 06-02 22:13Z at 113 min /
            ~1.88h) for ~12.2h cumulative off-cap inside the 24h
            window; cumulative trigger framework retained, the
            ≥ 4h cumulative gate marked CLEARED across manifest,
            prose, scout cards, and the decision table — the
            mean-revert long scout&rsquo;s funding leg is now
            cleared (still NON-ACTIONABLE on the cumulative
            interpretation; promotion still requires the 8h/1d
            TD9 BUY confirm leg and the 1h reclaim leg);{' '}
            <em>DN-002 (MAJOR):</em> MTF scan timestamp moved
            from 00:01Z to 00:16Z (the actually loaded artifact
            mtime; file is rolling, ~11 min fresher than the
            00:05Z snapshot anchor); MTF scan values updated to
            the loaded 00:16Z source (spot $66,824, 24h −6.21%,
            qVol $24.03B, 4h TD9 BUY at $66,835 — down −$4,391 vs
            the 06-02 $71,226 print), and the in-progress TF
            close cells aligned to the 00:16Z spot $66,824 except
            the 4h cell which uses the audit-anchored $66,835
            TD9 BUY level;{' '}
            <em>DN-003 (MAJOR):</em> cadence-to-2JUN-settle delta
            corrected from <em>7h 14m</em> to{' '}
            <em>1h 14m</em> (2026-06-02T08:00Z − 2026-06-02T06:46Z
            = 1h 14m, not 7h 14m);{' '}
            <em>DN-004 (MAJOR):</em> the &ldquo;position book at
            lineage peak both sides&rdquo; claim narrowed to a
            one-sided short-crowding read — short_btc 56,036
            @ 06-02 19:26Z is a fresh lineage peak (since bled to
            53,474 at the pin), while long_btc 12,653 at the pin
            sits BELOW the prior lineage long peaks (15,358 BTC
            on 05-29 17:21Z and 12,852 BTC on 06-02 19:46Z), so
            both sides were NOT at lineage peak at the snap;{' '}
            <em>DN-005 (MINOR):</em> the &ldquo;first sample
            after the low&rdquo; line rewritten to &ldquo;the low
            printed 61 min before this snap; this is the first
            desk snapshot after that low, with 60 intervening
            one-minute tape rows between the low row and the
            pin&rdquo;;{' '}
            <em>DN-006 (MINOR):</em> macro source-copy
            reconciled — DXY manifest level corrected 99.21 →
            99.22 to match body + source, &ldquo;+0.21 since
            06-01 22:15Z print&rdquo; updated to{' '}
            <em>+0.22</em> in both manifest and macro h2;
            Fed net liquidity Δ relabeled in manifest, prose,
            and table — level $5.872T unchanged vs prior desk
            note BUT source weekly Δ −0.058T disclosed
            explicitly (table now shows −0.058T with the
            denominator labeled); US-JP 10Y spread direction
            corrected — &ldquo;narrowed by 1bp from 06-02&rsquo;s
            1.94%&rdquo; → &ldquo;widened by 1bp from 06-02&rsquo;s
            1.94%&rdquo; (1.95% vs 1.94% is a 1bp increase, not a
            decrease). <b>Build note (INFO):</b> this server runs
            Node 18.19.1; Next 16.2.6 hard-exits in{' '}
            <code>node_modules/next/dist/bin/next:24-28</code> for
            Node &lt; 20.9.0, so a full{' '}
            <code>next build</code> is environment-blocked here
            (lineage carried since 05-21).{' '}
            <code>npx --no-install tsc --noEmit</code> is the
            build proxy; STAGE C re-ran it after v2 corrections.
            The audit&rsquo;s Open Issues — MTF archival convention
            (rolling latest-file artifact, no immutable per-scan
            path), funding trigger-definition convention
            (cumulative vs continuous; this note carries
            cumulative), and macro delta-denominator convention
            (source-provided vs prior-note) — are deferred for a
            future lineage decision and tracked verbatim in
            <code>audits/2026-06-03-desk-note.md</code>.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for
            discussion among principals of Hysteresis Research
            and is{' '}
            <em>not investment advice, not a solicitation, not
            an offer</em>, and not personalized to any
            recipient&rsquo;s circumstances. Numbers reflect a
            single atomic snapshot (2026-06-03 00:05Z) with
            section-level provenance disclosed in the manifest
            band above; the macro Tier-1 panel render is
            2026-06-02 22:15Z (~1.8h before snapshot) and some
            inputs are explicitly stale or pending and flagged
            as such. Levels, sizes, and conditions are
            illustrative of the desk&rsquo;s process, not
            standing recommendations. Past correlation, gamma,
            and positioning patterns do not bind future tape.
            Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The break extended hard and the cadence fired
                its biggest single-minute Δ of the lineage. The
                $70k wall pressed clean to a new $65k structural
                magnet. Funding came off cap; multi-TF TD9 BUY
                stack is one bar away on three frames. Two
                framework watches alive — continuation (cycle
                3 step 3 on the 06-03 BJ 13–15 window) and
                mean-revert (long scout, one of three legs
                progressing). Both NON-ACTIONABLE. Watch the
                next cadence window.
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
            v2 · 2026-06-03 00:05Z snapshot · post codex hostile
            audit · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet (2024-2026 subset) · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
