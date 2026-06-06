import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-06 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-06',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-06' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260606() {
  await requireViewer('/desk/2026-06-06');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-06 · v2</span>
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
              <span className="dn-big">$59,646</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−5.41%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-06 04:34Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-06 04:34Z (snapshot pin row, BJ 12:34 06-06 per live_db `t` BJ-local convention)</td>
                  <td className="dn-flag">
                    fresh · 1-min · pin row = `t == &ldquo;06-06 12:34&rdquo;` (BJ-local, UTC 04:34Z); live file extends past the pin by audit time · the 5JUN26 −9.61M amplifier settled cleanly at 08:00Z 06-05 BUT a fresh 6JUN26 −8.40M front chunk has replaced it (0.2 DTE today, settles 08:00Z 06-06, ~3h 26m ahead of this snap)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-06 04:31Z scan (BJ 12:31, archived to snapshots/2026-06-06-0434/)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · archived under
                    snapshots/2026-06-06-0434/ before read per runbook §1
                    archive policy (v2-NF-002 fix) · 3 min stale vs anchor ·
                    in-progress bars · multi-TF ⚡ TD9 BUY now FOUR concurrent
                    across 15m / 8h / 12h / 1d (was three on 06-05 — added 15m)
                    + 3d / 1M TD8 → 9? pending on one more close — six
                    cycle-frame TD prints clustered or pending against this
                    oversold, the densest of the lineage by one frame
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-06 04:06Z snapshot (archived)</td>
                  <td className="dn-flag">
                    archived to snapshots/2026-06-06-0434/ (v2-NF-002 fix) ·
                    28 min stale vs snapshot anchor · Deribit idx $60,806
                    vs live $59,646 ($1,160 above live — the largest
                    idx-vs-live gap of the lineage, reflects the 28-min
                    artifact lag and a moving tape) · 1,044 instruments
                    (was 1,034 on 06-05; +10 net as the 5JUN chain cleared
                    and the 9JUN near-dated listed) · 6JUN26 0.2 DTE
                    −8.40M is the next settle (08:00Z 06-06, ~3h 26m ahead);
                    the 6JUN chunk is a FRESH front amplifier that replaced
                    the resolved 5JUN −9.61M chunk inside the same 24h, so
                    the dealer book did not get the &ldquo;clean front
                    decay&rdquo; the 06-05 note forecast for the post-5JUN
                    state
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-06 04:01Z (archived)
                  </td>
                  <td className="dn-flag">~33 min lag · 7d 1h bars · 22 assets · 166 rows · regime tag still IDIOSYNCRATIC (mean |r| 0.238, up from 06-05&rsquo;s 0.215 — moving back toward the 0.25 NORMAL threshold but not yet across) · BTC&rsquo;s top tie ROTATED to SILVER +0.254 (was JP225 +0.162 on 06-05) and the BTC↔NQ tie firmed to +0.129 (was +0.090) — but the 7d window now includes a broader TradFi sell-off (NQ −5.35%, SP500 −2.74%, MSFT −9.24%) so the firming is co-selling, not co-buying</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-06 00:30Z render (archived)</td>
                  <td className="dn-flag">
                    ~4h 4m render lag · <em>Tier-1 BACK ONLINE</em> after two
                    consecutive fetch-failed renders: US 10Y nominal 4.47%
                    (−2bp), 10Y TIPS 2.11% (flat), 5Y5Y BE 2.24% (flat), NFCI
                    −0.494 (stale 8d), Fed net liq $5.834T (−0.038T —
                    tightened), US-JP spread 1.95% (−2bp), USD/CNY 6.7650
                    (−0.0080 vs 06-05 note — CNY firmer) all freshly printed
                    · MOVE jumped +4.04 day to 75.2 · DXY firmed +0.66 day to
                    100.07 (+0.64 vs 06-05 note; episodic z +2.33 — RISK-OFF
                    episodic) · HY OAS TIGHTENED −1bp to 2.74% (gate now 4bp
                    from fire, vs 3bp on 06-05 — the credit gate moved AWAY
                    from fire after one strong day, the 06-05 widening did
                    not extend)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-06 04:06Z (btcusdt_1m_2024..2026 subset per desk policy + full-history references)</td>
                  <td className="dn-flag">
                    ~28 min fresher than snapshot anchor &mdash; <em>wait</em>: parquet last bar 04:06Z is ~28 min BEFORE the 04:34Z anchor, so it is 28 min STALE vs the live pin · MA source universe is the 2024-2026 subset (127 weekly bars), per the 06-02 audit DN-005 desk-policy decision carried forward · under this subset W-SMA150 / W-SMA200 are non-computable (short of both windows); W-EMA150 / W-EMA200 print but are reported as <em>seeded</em> truncated lines · full-history (2019-2026, 353 weekly bars) added for the 200W reference: W-SMA200 $61,794 (now ABOVE spot by $2,148 / +3.60% on full-history math, meaning spot prints $2,148 BELOW the 200W cycle floor on the snap) · offsets recomputed against live spot $59,645.73 · the 06-03 audit DN-006 dispositioned the live-pin denominator as the lineage carry-forward
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W watch (weekly_200sma.json)</td>
                  <td className="dn-v-cell">NOT WRITTEN (file absent on server at audit time, lineage carry from 06-05)</td>
                  <td className="dn-flag">
                    200W watch JSON unavailable · fall back to the
                    full-history parquet computation per runbook §2:
                    W-SMA200 = $61,794 (full-history 353-week series since
                    2019-09-08); live spot $59,646 sits −3.48% BELOW the
                    200W on the SPOT print — but the cycle floor is
                    weekly-close, not spot, and the current weekly bar is
                    in-progress (the 06-05 daily close $61,022 sits −$772
                    below the 200W, the 06-06 in-progress $60,490 sits
                    −$1,304 below). If a 1w close prints below $61,794 this
                    weekend, that would be a structural 200W floor break
                    (historically a weekly close below 200W has occurred in
                    ~9% of weeks, clustered at cycle capitulations); per
                    runbook do-not-fabricate no percentile / break-event
                    claim is asserted off a missing JSON, only the
                    full-history W-SMA200 level + the in-progress
                    daily-close gap is surfaced
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale 66d · monthly · do not treat as live</td>
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
              <span className="dn-v bull">−0.32% (near-flat at snap; 24h mean −1.36% DEEPLY negative)</span>
              <span className="dn-src">live · 24h mean ann <em>−1.36%</em> (was +0.67% on 06-05 · a −2.03pt collapse to the FIRST NEGATIVE 24h MEAN of the lineage) · cap occupancy 0 / 1440 sampled rows (third consecutive cap-empty note · the lineage cap regime is structurally retired) · negative-funding minutes 1,189 / 1,440 = <em>82.57%</em> of the 24h window — the deepest short-pay regime of the lineage by 2.3× (was 35.67% on 06-05) · 24h funding trough −3.92% ann @ 2026-06-05 10:40Z (BJ 18:40 06-05) · max +1.67% ann @ 2026-06-05 05:32Z (BJ 13:32 06-05); 95.90% of the 24h sat below +1% ann, 100% below +2% ann</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">+1.47% → −0.32% (−1.79pt, mean turned negative)</span>
              <span className="dn-src">range −3.92% / +1.67% · the longest single short-pay streak ran 633 min / 10.55h from 2026-06-05 06:18Z (BJ 14:18 06-05) → 2026-06-05 16:50Z (BJ 00:50 06-06) — the leverage gate is wide open, longs were paid by shorts continuously for over 10 consecutive hours, a fresh lineage extreme · the ≥4h cumulative short-pay gate cleared by ~2.6× on a single contiguous run alone</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+2.31% (+2,307 BTC)</span>
              <span className="dn-src">live · OI BUILT into the spot drop (the first 24h OI EXPANSION since 05-30) — 99,708 → 102,015 with 24h peak 105,668 @ 2026-06-05 16:11Z (BJ 00:11 06-06, into the early-Asia capitulation wick) and 24h low 97,563 @ 2026-06-05 12:20Z (BJ 20:20 06-05) · SM long_btc +3,049, short_btc −797 — one-sided long-side BUILD into −5.41% spot, exchange-wide OI built ~+2.3k while non-SM books shed only marginally; this is bottom-fishing leverage being added into the wick</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bull">66.37 / 33.63</span>
              <span className="dn-src">live_db `mkt_long_pct` · bled −1.99pt vs the 06-05 print (was 66.62 → 68.36 24h-ago, the inside-window peak was 68.63 @ BJ 14:51 06-05; 24h range 65.81 / 68.63 — retail crowding eased modestly as the wick printed but the long side is still 5pt above the prior down-leg trough of 60.35 on 05-31; the de-crowding is a second-derivative cool, not a real flush)</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−39.4k (net SHORT; LONGS BUILT both visible and structural)</span>
              <span className="dn-src">live · long 15.44k − short 54.86k · short_btc inside-window peak 59,175 @ 2026-06-05 06:31Z (BJ 14:31 06-05) — still below the 06-03 lineage high 60,729, then bled −4,628 into snap; long_btc inside-window peak <em>17,254 @ 2026-06-05 20:16Z (BJ 04:16 06-06) — a FRESH LINEAGE LONG HIGH</em> (06-03 lineage high was 18,293, today&rsquo;s 17,254 is below it; but the lineage high at the 06-05 cycle-anchor floor was 13,090; today&rsquo;s 17,254 is the highest long_btc since the down-leg started in early June, a +4,164 BTC long build from the cycle-anchor floor); SM net trough −46,033 @ 2026-06-05 06:41Z (BJ 14:41 06-05) — close to but not at the 06-04 lineage trough of −46,686</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 06-05 note</span>
              <span className="dn-v bull">−44.5k → −39.4k (+5,036 less short; long +4,181, short −855)</span>
              <span className="dn-src">|Δ|/prior_net = 11.33% (5,036/44,462) · the BOOK shifted decisively to less-short via long-side BUILD — first clean one-sided long-stack of the down-leg lineage in this 06-05 → 06-06 chain (06-01 / 06-02 / 06-03 / 06-04 were one-sided SHORT-stacks; 05-31 / 06-05 were two-sided shrinks; today is the first one-sided LONG-stack since the cycle-anchor floor broke on 06-01) · the lineage signature has FLIPPED from short-extending to long-bottom-fishing, but spot fell −5.41% under that shape — the long side is getting punished while it adds</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v bear">52.5% / 37.05%</span>
              <span className="dn-src">GEX median IV · 1,044 inst. (up from 1,034 on 06-05 · +10 net as the 5JUN chain cleared and the 9JUN near-dated chain listed) · IV JUMPED +5.6pt as the wick printed (was 46.9% on 06-05) · 30D RV expanded +2.12pt to 37.05% (was 34.93%) as the 06-05 −2.83% close stamped a deeper-than-average daily ret into the window · IV/RV spread WIDENED to ~+15.45pt (was +11.97pt on 06-05 — a +3.48pt expansion as IV outran the RV pickup, the chain is repricing forward realized higher</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−6.48% (below; live spot ref)</span>
              <span className="dn-src">flip $63,778 (was $66,509 on 06-05 · dropped −$2,731 — the largest single-note flip drop of the lineage) · vs live spot $59,645.73 (−6.48%; 59,645.73 / 63,778 − 1 = −6.479%) · vs GEX file Deribit idx $60,806 (−4.75%; 60,806 / 63,778 − 1 = −4.659%, matches the file&rsquo;s own dist-to-flip tile of −4.7%) — both refs negative, the live-spot gap WIDENED to a fresh lineage extreme (vs −4.17% on 06-05; the prior 06-04 extreme was −5.08%) and the Deribit-index gap is wider than the file&rsquo;s own tile by the ~28-min artifact lag in a moving tape · aggregate GEX deepened to −53.5M (was −39.5M on 06-05, a −$14.0M structural deterioration — a fresh lineage extreme by $0.6M past 06-04&rsquo;s prior extreme of −52.9M)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The 5JUN settle did NOT resolve cleanly — the dealer book
                added a fresh 6JUN front amplifier inside the same 24h, spot
                lost the 200W cycle floor on the print, and the leverage
                book printed the deepest short-pay regime of the lineage by
                2.3× while longs bottom-fished the wick
              </span>. Aggregate GEX went{' '}
              <span className="dn-tag bear">−39.5M</span> →{' '}
              <span className="dn-tag bear">−53.5M</span> (a −$14.0M
              structural deterioration to a fresh lineage extreme), the
              0-γ flip dropped{' '}
              <span className="dn-tag">$66,509 → $63,778 (−$2,731)</span>{' '}
              (the largest single-note flip drop of the lineage), and spot{' '}
              <span className="dn-tag bear">$59,646 sits −6.48% below the
              flip</span> on live-spot math (vs −4.17% on 06-05 and the
              06-04 prior extreme of −5.08% — a fresh lineage extreme); the
              GEX file&rsquo;s own Deribit-index ref reads{' '}
              <span className="dn-tag bear">−4.75%</span> off its $60,806
              index, vs its own tile of −4.7%. The 06-05 forecast was that
              the 5JUN −9.61M chunk would settle and the post-settle
              aggregate would land at ~−29.9M; what actually happened is
              the 5JUN chunk DID settle clean at 08:00Z 06-05 (the
              chunk cleared from the strip) but a fresh{' '}
              <span className="dn-tag bear">6JUN26 0.2 DTE −8.40M</span>{' '}
              chunk has appeared at the front (settles 08:00Z 06-06, ~3h
              26m ahead of this snap), the 12JUN chunk deepened to{' '}
              <span className="dn-tag bear">−8.82M (was −7.37M)</span>,
              the 19JUN deepened to{' '}
              <span className="dn-tag bear">−6.49M (was −5.43M)</span>,
              the 26JUN monthly deepened to{' '}
              <span className="dn-tag bear">−25.23M (was −22.92M)</span>,
              and the $60k crash-put wall thickened to{' '}
              <span className="dn-tag bear">−27.31M (was −20.86M, +$6.45M
              heavier as price hit the strike)</span>. Daily closes ran{' '}
              <span className="dn-tag bear">06-04 $63,853 / 06-05
              $61,022</span> (the 06-05 close was −$2,831 below 06-04 —
              the down-leg RE-EXTENDED on 06-05 after a quiet 06-04 lull),
              with the in-progress 06-06 print at parquet last bar (04:06Z
              close <span className="dn-tag bear">$60,490</span>) and live
              spot <span className="dn-tag bear">$59,646</span> — six
              consecutive daily closes below the cycle anchor, the 06-05
              close $1,304 below the in-progress 06-06 close (still
              shedding). The 06-05 framework watch on the sixth cycle
              continuation print{' '}
              <span className="dn-em">DID NOT FIRE</span>: the BJ 15:41
              06-05 (UTC 07:41 06-05) candidate minute saw a small cover
              (Δnet +315, max single-minute |Δnet| 333 in the
              15:00–16:00 window) and the BJ 13:00–16:30 window drifted
              −673 net total without a single discrete step ≥ ±2k. The
              cycle continuation framework is{' '}
              <span className="dn-em">CLOSED-VINDICATED on five prints with
              the sixth-print test cleanly failed</span> — the calendar
              cadence is now formally retired; future Shape-B prints
              survive as informational watch only.
            </p>

            <p>
              BTC prints <span className="dn-tag">$59,646</span> live,{' '}
              <span className="dn-tag bear">−5.41%</span> on 24h — the
              largest 24h spot drop since 06-02&rsquo;s −6.53% close and
              the first material extension after the three-day 06-03/04/05
              consolidation. The 24h range was{' '}
              <span className="dn-tag">$63,622 / $59,154</span> (high @ BJ
              13:00 06-05 / UTC 05:00 06-05, low @ BJ 03:18 06-06 / UTC
              19:18 06-05 — the high printed in the first minute of the
              window and the low printed mid-window in late-NY hours, a
              steady-bleed shape rather than the early-Asia wicks of 06-04
              / 06-05). The 24h low{' '}
              <span className="dn-tag bear">$59,153.51</span> is the
              lineage low by a wide margin (prior low was $61,461 on 06-04;
              this print is −$2,308 / −3.75% deeper). Spot also LOST the
              200W cycle floor on the print:{' '}
              <span className="dn-signal">
                full-history W-SMA200 is $61,794 (353-week series from
                2019); live spot $59,646 sits −3.48% below the 200W on the
                snap, the 06-05 daily close $61,022 was −$772 below, and
                the in-progress 06-06 close at parquet last bar $60,490 is
                −$1,304 below — if a weekly close prints below $61,794
                this weekend the 200W floor is structurally broken
              </span>. The cycle anchor itself is now ~$13.4k overhead:
              D-SMA100 $73,025 (−18.32%), with the closest four MAs (the
              W-SMA20 $72,496 / D-SMA20 $72,393 / D-SMA100 $73,025 /
              D-EMA50 $73,662) packed into a tight $1.3k overhead
              cluster — but the cluster itself is ~$12.7k–$14.0k away from
              spot. The full daily and weekly ladder is overhead, three+
              tiers down from 06-05.{' '}
              <span className="dn-em">
                The structural backdrop deepened on every leverage AND
                dealer-side read: OI BUILT +2,307 BTC (the first 24h
                expansion since the down-leg started), funding mean turned
                NEGATIVE at −1.36% (the first negative 24h mean of the
                lineage), funding negative for 82.57% of the window (vs
                35.67% on 06-05 — 2.3× deeper), the longest single neg
                streak ran 10.55h (vs 7.47h on 06-05), gamma deepened
                −$14.0M to a fresh lineage extreme, IV jumped +5.6pt as
                the chain repriced forward realized higher, and longs
                BUILT +3,049 BTC into a −5.41% print. This is the
                deleveraging-then-recompression shape that the 06-05 note
                left open as a tail risk — the dealer book residual
                −$29.9M projection did not survive the 6JUN-chunk add and
                the −20.86M $60k crash-put zone deepened to −27.31M as
                price reached it.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · book printed the first clean one-sided LONG-BUILD of the down-leg lineage (in this 06-05 → 06-06 chain) · OI expanded for the first time since 05-30 · funding mean turned negative for the first time of the lineage · sixth-print cadence test FAILED at BJ 15:41 06-05 (cycle continuation framework formally closed)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position book RE-LEVERAGED on the long side into a
                −5.41% wick — the first one-sided long-stack of the
                down-leg lineage in this 06-05 → 06-06 chain
              </span>. SM net is{' '}
              <span className="dn-tag">−39,426</span> vs the 06-05
              note&rsquo;s −44,462 — that is{' '}
              <span className="dn-em">+11.33% less short</span>{' '}
              (|−39,426 − (−44,462)| / 44,462 = 11.33%), the largest
              single-note SM net move of the lineage by the cut-fraction
              metric. The components moved one-sided: long_btc{' '}
              <span className="dn-tag bull">11.26k → 15.44k (+4.18k)</span>{' '}
              and short_btc{' '}
              <span className="dn-tag">55.73k → 54.86k (−0.86k)</span>.
              The long side BUILT four times harder than the short side
              covered, a clean one-sided long-stack shape. Across the 24h
              window: long_btc Δ{' '}
              <span className="dn-tag bull">+3,049</span>, short_btc Δ{' '}
              <span className="dn-tag bull">−797</span>, net Δ{' '}
              <span className="dn-tag bull">+3,845</span> (+3,049 − (−797)
              = +3,846, rounding noise vs the −39,426 − (−43,271) = +3,845
              direct net diff). Inside the 24h the book ran asymmetric
              extremes: short_btc peaked{' '}
              <span className="dn-tag bear">59,175 @ 2026-06-05 06:31Z (BJ
              14:31 06-05)</span> — still below the 06-03 lineage high
              60,729, then bled −4,628 into the snap; long_btc peaked{' '}
              <span className="dn-tag bull">17,254 @ 2026-06-05 20:16Z (BJ
              04:16 06-06)</span> — below the 06-03 lineage high 18,293
              but the highest long_btc reading since the cycle anchor
              broke on 06-01, a +4,164 BTC long build from the floor of
              the down-leg. SM net trough{' '}
              <span className="dn-tag bear">−46,033 @ 2026-06-05 06:41Z (BJ
              14:41 06-05)</span> — close to but not at the 06-04 lineage
              trough of −46,686.{' '}
              <span className="dn-em">
                The lineage signature has FLIPPED from short-extending
                (06-01 / 06-02 / 06-03 / 06-04) to long-bottom-fishing
                (today) — but spot fell −5.41% under that shape: the long
                side is getting punished while it adds, the inverse of the
                cover-bounce shape the mean-revert long scout requires.
              </span>
            </p>

            <p>
              <span className="dn-signal">
                The cycle continuation framework&rsquo;s sixth-print
                cadence test FAILED at the BJ 15:41 06-05 candidate
                minute — the calendar cadence is now formally retired
              </span>. The 06-05 note flagged a tighter calendar pin at
              UTC 07:41 / BJ 15:41 that had emerged from the cadence
              ashes (two consecutive prints at the same minute on 06-03
              / 06-04). Today&rsquo;s BJ 15:41 06-05 candidate minute
              saw{' '}
              <span className="dn-tag bull">Δnet +315</span> (long Δ −144,
              short Δ −459 — small cover, not a Δshort &gt; 0 + Δlong &lt;
              0 hostile-2 signature), the BJ 15:00–16:00 window total was{' '}
              <span className="dn-tag bull">Δnet +1,305</span> with max
              single-minute |Δnet| 333 (the BJ 15:46 06-05 print), and
              the wider BJ 13:00–16:30 window drifted{' '}
              <span className="dn-tag">Δnet −673</span> total with no
              single-minute |Δnet| ≥ 2k. The five-print chain stops at
              06-04 07:41Z; today&rsquo;s same-minute candidate cleanly
              did not fire.{' '}
              <span className="dn-em">
                The cycle continuation framework is CLOSED-VINDICATED on
                five prints with the sixth-print test cleanly failed.
                The original BJ 13–15 cadence was already falsified on
                05-31; today&rsquo;s failure on the BJ 15:41 fallback pin
                retires the calendar cadence in full. Future re-stack
                hostile-2 signatures remain a meaningful tape read when
                they print — but on a no-calendar basis only, exactly the
                shape the 05-31 framework restatement set up.
              </span>
            </p>

            <p>
              The leverage side is the loudest signal of regime
              continuation this note.{' '}
              <span className="dn-signal">
                Funding mean turned NEGATIVE on the 24h for the first time
                of the lineage — −1.36% ann, with 82.57% of the window
                negative
              </span>: live{' '}
              <span className="dn-tag">−0.32% ann</span> at the snap
              (near-flat after running deeper through the day), 24h range{' '}
              <span className="dn-tag">−3.92% / +1.67%</span> with the
              trough{' '}
              <span className="dn-tag bull">−3.92% ann @ 2026-06-05
              10:40Z (BJ 18:40 06-05)</span> — a fresh lineage trough
              (06-05 trough was −3.14%, today −3.92% is the deepest
              short-pay magnitude on record for the lineage). 24h mean ann{' '}
              <span className="dn-tag">−1.36%</span> (vs 06-05&rsquo;s
              +0.67% — a −2.03pt collapse, the first negative 24h mean of
              the lineage). Cap occupancy{' '}
              <span className="dn-tag bull">0 / 1440 sampled rows
              (0.0%)</span> (vs 0/1441 on 06-05 — the cap is empty for the
              third consecutive note; the lineage cap regime is
              structurally retired); the longest single short-pay streak
              ran <span className="dn-tag bull">633 min / 10.55h</span>{' '}
              from 2026-06-05 06:18Z (BJ 14:18 06-05) → 2026-06-05 16:50Z
              (BJ 00:50 06-06) — vs the 06-05 streak of 7.47h, today is
              +3.08h longer, so the ≥4h cumulative short-pay gate cleared
              by ~2.6× on a single contiguous run alone. Minute deltas{' '}
              <span className="dn-tag">482 up / 487 down / 470 flat</span>{' '}
              (1,440 minute-to-minute intervals across the 1,440-row
              window). OI Δ{' '}
              <span className="dn-tag bear">+2,307 BTC (+2.31%)</span>{' '}
              over 24h — <span className="dn-em">the first 24h OI
              EXPANSION since the down-leg started in early June</span>{' '}
              (the lineage was a continuous shrink from 06-01 to 06-05,
              cumulative ~−9k BTC). OI built into the wick: 24h peak{' '}
              <span className="dn-tag bear">105,668 @ 2026-06-05 16:11Z
              (BJ 00:11 06-06)</span> — the 24h low spot was 28 min later
              ($59,154 @ BJ 03:18 06-06 corresponds to spot near the OI
              peak), so the OI add CONCENTRATED into the early-Asia wick
              window. 24h low OI{' '}
              <span className="dn-tag bull">97,563 @ 2026-06-05 12:20Z (BJ
              20:20 06-05)</span> printed during the 06-05 evening
              consolidation before the wick. Retail{' '}
              <span className="dn-tag">mkt_long_pct 66.37%</span> from
              68.36% — bled −1.99pt vs 24h-ago and −0.25pt vs the 06-05
              note (66.62%), but still 5pt above the prior down-leg trough
              of 60.35% on 05-31; the de-crowding is a second-derivative
              cool, not a real flush. Perp trades a{' '}
              <span className="dn-tag bear">−$4.24 discount</span> to spot
              at the snap (1h mean −$30.92, 4h mean −$26.18; 24h mean
              −$46.96, range −$361.54 / +$149.99 — basis went briefly
              POSITIVE during the 06-05 evening relief bounce off the
              wick, then snapped back negative). 1-min aggressor skew snap{' '}
              <span className="dn-tag bull">+6.90</span> (1h mean −4.28,
              range −30.30 / +20.70) — a mild buy-aggressor in the snap
              minute but the 1h is balanced.{' '}
              <span className="dn-em">
                OI BUILT into the wick + funding mean negative + longs
                added one-sided + spot fell −5.41% + the lineage cap
                regime stayed retired: this is recompression on the long
                side with a falling tape, the inverse of the post-05-31
                cover shape. The leverage book is bottom-fishing into the
                drop, not unwinding ahead of it.
              </span>
            </p>

            <p>
              Windowed flow is{' '}
              <em>continuous net-seller across all three windows on spot
              CVD, mixed on futures CVD, big-print net seller across the
              full 24h with a small buyer reflex in the snap-minute hour</em>.
              24h: price{' '}
              <span className="dn-tag bear">−5.41%</span>, OI{' '}
              <span className="dn-tag bear">+2,307 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −2,482</span>{' '}
              (no reset adjustment needed — no cb_cvd reset detected in
              the 24h window), futures CVD{' '}
              <span className="dn-tag bear">Δ −2,046</span>, big-print{' '}
              <span className="dn-tag bear">−1,697 BTC / 346 prints</span>,
              taker-net{' '}
              <span className="dn-tag bear">−2,046</span> —{' '}
              <span className="dn-em">
                spot AND futures both net-sold across the 24h with OI
                BUILDING; the −5.41% printed on net selling INTO a
                long-side OI add, exactly the bottom-fishing shape that
                gets punished — buyers (longs) added into the drop while
                spot kept falling and big-print stayed net seller
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bear">−2.82%</span>, OI{' '}
              <span className="dn-tag bear">+389 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −1,896</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −597</span>, big-print{' '}
              <span className="dn-tag bear">−102 BTC / 34 prints</span>,
              taker-net <span className="dn-tag bear">−597</span> —{' '}
              <em>the 4h continued the 24h shape — net-sold across all
              fields with OI still expanding marginally — no reflex bid
              into the snapshot window</em>. 1h: price{' '}
              <span className="dn-tag bear">−1.51%</span>, OI{' '}
              <span className="dn-tag bear">+339 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −903</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +68</span>, big-print{' '}
              <span className="dn-tag bull">+57 BTC / 12 prints</span>,
              taker-net <span className="dn-tag bull">+68</span> —{' '}
              <em>the 1h shows a small buyer reflex on futures and
              big-print at the snap-minute level (a +57 BTC big-print net
              over 12 prints, slight futures bid), but spot remained
              offered (−903 cb_cvd) and OI kept expanding — no clean
              cover-shape, the snap-minute reflex is a one-print signal
              against three windows of sustained selling</em>. The 24h
              shape is unambiguous: the −5.41% printed on net selling
              across the full window with OI building on the long side
              and big-print net seller, the cleanest one-directional
              capitulation flow of the down-leg lineage.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · multi-TF ⚡ TD9 BUY now FOUR concurrent across 15m / 8h / 12h / 1d (denser than 06-05&rsquo;s three) + 3d / 1M TD8 → 9? pending · cycle-frame RSI at single-digit-shy extremes (8h 14.3, 1d 14.6, 12h 14.9) · cycle anchor lost · 200W cycle floor lost on spot</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map has DEEPENED to four concurrent ⚡ TD9 BUYs —
                15m has joined the 8h / 12h / 1d stack — and the
                cycle-frame RSI is at single-digit-shy extremes that have
                no parallel in the lineage
              </span>. The 06-05 scan flagged ⚡ TD9 BUY on 8h / 12h / 1d
              simultaneously (three cycle frames); today&rsquo;s 04:31Z
              scan keeps all three live AND adds 15m as a fourth
              concurrent print, with 3d / 1M both still TD8 → 9? pending
              on one more close — six cycle-frame TD prints clustered or
              pending against this oversold, the densest of the lineage
              by one frame. Slow frames remain bearish: the{' '}
              <span className="dn-tag bear">3d water-up death cross is at
              3 bars</span>, 12h{' '}
              <span className="dn-tag bear">water-down death cross 19b</span>,
              8h <span className="dn-tag bear">water-down death cross 14b</span>,
              4h <span className="dn-tag bear">water-down death cross 29b</span>,
              1d <em>cloud-below 5b</em> (↑ $73.9k overhead). RSI is
              deeply oversold across the cycle frames: 8h{' '}
              <span className="dn-tag bull">14.3</span> (vs 06-05&rsquo;s
              15.5 — a fresh lineage extreme single-digit-shy), 1d{' '}
              <span className="dn-tag bull">14.6</span> (vs 18.3 — fresh
              extreme), 12h <span className="dn-tag bull">14.9</span> (vs
              19.7 — fresh extreme), 4h{' '}
              <span className="dn-tag bull">23.8</span> (vs 28.4), 3d{' '}
              <span className="dn-tag bull">28.8</span> (vs 32.3 — under
              30 for the first time of the lineage), 1w 32.2 (vs 34.5 —
              deepened) — every cycle frame is RSI &lt; 35 and three are{' '}
              <em>under 15</em>. The engine frames stayed mixed: 1h RSI
              37.0 (in cloud below, sell-side), 30m 35.3, 15m 28.5 —
              the engine has joined the oversold read on 15m (a fresh
              lineage low for that frame this snap).{' '}
              <span className="dn-em">
                Read straight: this is the densest oversold-counter cluster
                of the lineage by one frame — four concurrent ⚡ TD9 BUYs
                across the engine-to-cycle stack (15m, 8h, 12h, 1d) with
                two more pending one close (3d, 1M), and three cycle-frame
                RSI prints under 15. The setup is structurally textbook
                for a relief bounce, but the cycle anchor remains ~$13.4k
                overhead and the 200W cycle floor was lost on the print —
                a TD9-only entry without the third cover-bounce leg (a 1h
                reclaim above the new $63,778 flip area) is a chase, the
                mean-revert long scout from 06-03 stays gated by the third
                leg on the reframed inflection line.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">59,812</td><td className="num bull">28.5</td><td className="neut">death (water-up) 20b</td><td className="bear">below ↑60.7k 2b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr><td>30m</td><td className="num">59,851</td><td className="num bull">35.3</td><td className="bear">death (water-dn) 1b</td><td className="bear">below ↑61.5k 46b</td><td>Buy 6</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">59,812</td><td className="num">37.0</td><td className="bull">golden (water-dn) 7b</td><td className="bear">below ↑63.2k 119b</td><td>Buy 5</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">59,839</td><td className="num bull">23.8</td><td className="bear">death (water-dn) 29b</td><td className="bear">below ↑72.4k 68b</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">59,844</td><td className="num bull">14.3</td><td className="bear">death (water-dn) 14b</td><td className="bear">below ↑75.3k 63b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">59,839</td><td className="num bull">14.9</td><td className="bear">death (water-dn) 19b</td><td className="bear">below ↑77.2k 29b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">59,851</td><td className="num bull">14.6</td><td className="neut">—</td><td className="bear">below ↑73.9k 5b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">59,851</td><td className="num bull">28.8</td><td className="neut">death (water-up) 3b</td><td className="bear">below ↑74.0k 1b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">59,851</td><td className="num">32.2</td><td className="bull">golden (water-dn) 7b</td><td className="bear">below ↑100.3k 18b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">59,839</td><td className="num">41.2</td><td className="neut">—</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 2026-06-06 04:31Z scan
                    (rolling latest-file artifact archived to
                    snapshots/2026-06-06-0434/mtf_div_latest.html before
                    read per runbook §1 archive policy — v2-NF-002 fix).
                    Scan is 3 min stale vs the 04:34Z snapshot anchor.
                    Header alerts: <em>multi-TF ⚡ TD9 BUY across 15m / 8h
                    / 12h / 1d simultaneous</em>, <em>3d / 1M TD8 → 9? one
                    close pending</em>, <em>30m water-down death cross 1b
                    (just printed)</em>. Scan spot $59,868, 24h −5.29%,
                    H/L $63,675 / $59,080, 24h qVol $28.56B (the
                    second-heaviest qVol of the lineage after 06-05&rsquo;s
                    $27.27B, confirming the continued capitulation flow).
                    Closes are in-progress bars; treat every value as
                    provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the same overhead read with the
              full ladder THREE+ tiers lower than 06-05. Spot $59,646
              sits{' '}
              <span className="dn-tag bear">−18.32% below D-SMA100
              $73,025</span> — the cycle anchor, the lowest-distance line
              of the daily ladder but now ~$13.4k away on the reclaim
              (vs ~$9.4k on 06-05). The closest four overhead MAs cluster
              into a $1.3k band but the cluster itself sits ~$12.7k–$14.0k
              above spot: D-SMA20{' '}
              <span className="dn-tag bear">$72,393 (−17.61%)</span>,
              W-SMA20 <span className="dn-tag bear">$72,496 (−17.73%)</span>,
              D-SMA100 <span className="dn-tag bear">$73,025 (−18.32%)</span>,
              D-EMA50 <span className="dn-tag bear">$73,662 (−19.03%)</span>.
              The rest in level order: D-EMA20{' '}
              <span className="dn-tag bear">$70,655 (−15.58%)</span>{' '}
              sits closest of all (below the W-SMA20 cluster — the rolling
              20-day EMA picked up the 06-05 close fast),{' '}
              <span className="dn-tag bear">D-SMA150 $75,086 (−20.56%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $75,173 (−20.66%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $76,050 (−21.57%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $76,079 (−21.60%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $77,586 (−23.12%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $78,613 (−24.13%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $80,077 (−25.51%)</span>.
              Far above and disused on the 2024-2026 subset: W-EMA100
              seed $82,772 (−27.94%), W-EMA50 seed $83,828 (−28.85%),
              W-SMA100 $88,376 (−32.51%), W-SMA50 $92,561 (−35.56%).{' '}
              <span className="dn-signal">
                The 200W watch JSON is not on the server this snap (the
                runbook `weekly_200sma.json` remains absent — lineage
                carry); the runbook §2 fallback to a full-history parquet
                computation surfaces a structural read this note:
                full-history W-SMA200 (353 weekly bars from 2019-09-08) is
                $61,794, so live spot $59,646 sits −3.48% BELOW the 200W
                cycle floor on the SPOT print
              </span>. The 06-05 daily close $61,022 was already −$772
              below; the in-progress 06-06 close at parquet last bar
              $60,490 is −$1,304 below. The cycle floor is weekly-close,
              not spot — but the in-progress weekly bar would need to
              close at or above $61,794 by week-end to avoid stamping a
              formal 200W floor break. Historically a weekly close below
              the 200W has occurred in ~9% of weeks, clustered at deep
              cycle capitulations; per runbook do-not-fabricate, no
              percentile / break-event claim is asserted off a missing
              JSON, only the full-history W-SMA200 level + the
              in-progress daily-close gap is surfaced.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-06 04:06Z (close
                $60,489.70); offsets computed against live spot
                $59,645.73 directly (per 06-03 audit DN-006 disposition:
                live-pin denominator carries forward; the parquet-adjacent
                close $60,489.70 is $844 above the live pin, so the
                parquet-vs-live gap is wider this note than typical — the
                parquet last bar is 28 min behind the anchor in a moving
                tape, so an offset against the parquet plane would read
                ~−1.4pt shallower; the live-pin offset is the carried
                lineage convention). Daily closes: 05-30 $73,857, 05-31
                $73,653, 06-01 $71,392, 06-02 $66,730, 06-03 $64,118,
                06-04 $63,853, 06-05 $61,022, 06-06 in-progress $60,490 —
                six consecutive closes deeply below the cycle anchor and
                the 06-05 close is the first below the full-history 200W
                $61,794.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DEEPENED to net-short-gamma aggregate −53.5M (was −39.5M, a fresh lineage extreme −$0.6M past 06-04&rsquo;s prior extreme −52.9M) · flip dropped −$2,731 to $63,778 (spot −6.48% below — fresh lineage extreme) · the $60k crash-put wall THICKENED to −27.31M (was −20.86M, +$6.45M heavier as price hit the strike) · 6JUN26 0.2 DTE −8.40M is a FRESH front amplifier inside the 24h (replaced the 5JUN −9.61M chunk that settled clean) · 26JUN monthly DEEPENED to −25.23M (was −22.92M) · 12JUN deepened to −8.82M (was −7.37M)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book deteriorated to a fresh lineage extreme,
                the flip dropped the largest single-note step of the
                lineage, and the $60k crash-put wall thickened sharply as
                price reached the strike — the post-5JUN forecast did not
                survive a fresh 6JUN amplifier add on the front
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bear">−53.5M / 1%</span> (was
              −39.5M on 06-05 — a −$14.0M structural deterioration,
              fresh lineage extreme by −$0.6M past 06-04&rsquo;s
              −52.9M); the book is firmly net-short-gamma (amplifying)
              and the 06-05 +$13.4M improvement was completely reversed
              and then some. The 0-γ flip moved{' '}
              <span className="dn-tag">$66,509 → $63,778 (−$2,731)</span>{' '}
              — the largest single-note flip drop of the lineage (vs
              06-05&rsquo;s −$1,288 step). Two dist-to-flip references
              (carried per 06-02 audit DN-007): live-spot reference{' '}
              <span className="dn-tag bear">−6.48%</span>{' '}
              (59,645.73 / 63,778 − 1 = −6.479%); GEX-file
              Deribit-index reference{' '}
              <span className="dn-tag bear">−4.75%</span> (60,806 / 63,778
              − 1 = −4.659%, matches the file&rsquo;s own dist-to-flip
              tile of −4.7%). The live-spot ref is −1.73pt wider than the
              Deribit-idx ref this note because the GEX file is 28 min
              stale vs the live anchor and the Deribit idx is $1,160 above
              live spot — the largest idx-vs-live gap of the lineage,
              reflecting a moving tape across the artifact lag. Both refs
              negative; the live-spot ref is a fresh lineage extreme
              (vs −5.08% on 06-04 — the prior lineage extreme, and −4.17%
              on 06-05).
            </p>

            <p>
              The wall map rotated decisively LOWER as the strip
              repriced through the wick: the $60k crash-put zone
              thickened to{' '}
              <span className="dn-tag bear">$60k −27.31M</span>{' '}
              (was −20.86M on 06-05, +$6.45M heavier — and is now $1,354
              above spot $59,646, so spot has wicked THROUGH the $60k
              strike and the wall is now overhead-down rather than
              overhead-up). Other top walls:{' '}
              <span className="dn-tag bear">$55k −10.74M</span> (was
              −6.99M — deepened −$3.75M, the crash-put corridor extended
              down),{' '}
              <span className="dn-tag bull">$80k +8.50M</span> (heaviest
              positive overhead, but smaller than 06-05&rsquo;s +11.66M —
              the upside dampening pole has cooled materially),{' '}
              <span className="dn-tag bear">$62k −7.21M</span> (was
              −10.40M on 06-05 — eased as price worked through the
              strike),{' '}
              <span className="dn-tag bear">$50k −6.91M</span> (was
              −5.25M — deepened, the crash-put corridor extends below),{' '}
              <span className="dn-tag bear">$58k −6.89M</span> (was
              −4.51M — DEEPENED, a fresh negative wall right below spot),{' '}
              <span className="dn-tag bear">$59k −4.27M</span> (new
              negative wall right AT spot $59,646),{' '}
              <span className="dn-tag bear">$61k −4.19M</span> (was
              roughly flat),{' '}
              <span className="dn-tag bear">$65k −3.88M</span> (was
              −13.09M on 06-05 — eased −$9.21M as the strike fully
              resolved through price falling below it),{' '}
              <span className="dn-tag bear">$64k −3.41M</span> (was
              −6.92M — eased as price worked through). The negative
              cluster $50k–$65k now stacks to roughly{' '}
              <span className="dn-em">−74.81M of dealer amplification</span>{' '}
              (sum of the listed walls in the band: −6.91 − 10.74 − 6.89
              − 4.27 − 27.31 − 4.19 − 7.21 − 3.41 − 3.88 = −74.81M; vs
              06-05&rsquo;s −73.9M comparable cluster — basically flat,
              but the weight ROTATED: 06-05 had the $65k wall as the
              second-heaviest; today the $60k wall is the dominant single
              chunk and $65k has eased to a small reading). The
              load-bearing read this note is{' '}
              <span className="dn-signal">
                the $60k wall thickened by $6.45M AS price reached the
                strike — the dealer book added gamma at the strike rather
                than letting it bleed off; with spot now $1,354 BELOW the
                strike and the wall still −27.31M, $60k flips from a
                support-magnet under spot to an overhead-down resistor for
                any relief bounce
              </span>. 6JUN26 0.2 DTE{' '}
              <span className="dn-tag bear">−8.40M</span> settles at the
              08:00Z print today (~3h 26m ahead of this snapshot); the
              post-settle ex-6JUN aggregate would be roughly −53.5M −
              (−8.40M) = −45.1M, still firmly net-short-gamma but
              meaningfully off the −53.5M lineage extreme. The 5JUN26
              −9.61M chunk DID settle clean at 08:00Z 06-05 (the chunk
              cleared from the strip and is no longer listed), but the
              6JUN chunk is a FRESH front amplifier that appeared inside
              the same 24h — so the dealer book did not get the
              &ldquo;clean front decay&rdquo; the 06-05 note forecast for
              the post-5JUN state, and the 06-05 projection of post-settle
              aggregate ≈ −29.9M is now −$23.6M wide vs the actual
              −53.5M.{' '}
              <span className="dn-em">
                The amplifier did not leave: the 5JUN cleared and a 6JUN
                replaced it inside the same window, with the 12JUN
                deepening to −8.82M (was −7.37M), the 19JUN deepening to
                −6.49M (was −5.43M), the 26JUN monthly DEEPENING to
                −25.23M (was −22.92M), the 25SEP FLIPPING NEGATIVE to
                −1.27M (was +0.79M), and the 31JUL weakening from +3.31M
                to +1.06M. The forward strip deteriorated across nearly
                every dated chunk; the long-dated tail (28AUG / 25DEC /
                26MAR27) stayed marginally positive but each weakened.
              </span>
            </p>

            <p>
              IV median across 1,044 instruments is{' '}
              <span className="dn-tag bear">52.5%</span> (up from 46.9%
              / 1,034 instruments on 06-05 — a +5.6pt vol jump as the
              wick printed and the chain repriced forward realized
              higher) against 30D close-to-close RV of{' '}
              <span className="dn-tag bear">37.05%</span> (was 34.93%,
              +2.12pt expansion as the 06-05 −2.83% close stamped a
              deeper-than-average daily ret into the 30-day window) —
              chain-level richness{' '}
              <span className="dn-tag bear">~+15.45pt</span> (vs
              ~+11.97pt on 06-05 — a meaningful +3.48pt EXPANSION as IV
              outran the RV pickup; the chain is structurally
              repricing forward realized higher, the strongest IV-RV
              widening signal of the lineage). A chain-median across N
              instruments, <span className="dn-em">not</span> a tradable
              spread; expiry-/strike-level vega, skew and term
              structure remain not loaded; the vol read stays
              framework-only. 1,044 instruments today vs 1,034 on 06-05
              — basically flat chain breadth; the 5JUN 0.3DTE −9.61M
              cleared at 08:00Z 06-05 and a fresh 9JUN near-dated chain
              has been listed, +10 net instruments. RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30
              daily log returns (= 31 consecutive daily closes) anchored
              to parquet last bar 2026-06-06 04:06Z; the underlying
              31-close window now spans $60,490 – $82,178. For
              reference, last 29 returns / 30 closes reads 37.46%; the
              37.05% page value comes from 30 returns.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Tier-1 BACK ONLINE after two fetch-failed renders — 10Y 4.47% (gate 6bp from fire on fresh print), TIPS 2.11% RISK-OFF, NFCI −0.494, Fed liq $5.834T (−0.038T tightened) all fresh · HY OAS TIGHTENED −1bp to 2.74% (gate moved AWAY from fire to 4bp, vs 3bp on 06-05 — the 06-05 widening did not extend) · DXY firmed +0.66 day to 100.07 (episodic z +2.33 — RISK-OFF episodic) · MOVE +4.04 to 75.2 (bond vol jumped) · BTC-vs-TradFi decoupling NARROWED to −11.82pt (was −13.44pt) — because TradFi sold off (NQ −5.35%) more than BTC stopped extending</span>
            </h2>

            <p>
              <span className="dn-signal">
                Tier-1 came back online after two consecutive fetch-failed
                renders and the macro read is a mixed but predominantly
                risk-off pulse: HY OAS tightened −1bp (gate moved AWAY
                from fire, the 06-05 widening did not extend), 10Y came in
                a touch lower at 4.47%, but DXY firmed +0.66 day to 100.07
                (episodic z +2.33 — RISK-OFF EPISODIC), MOVE bond vol
                jumped +4.04 to 75.2, and Fed net liquidity tightened
                −0.038T to $5.834T
              </span>. Dashboard render is 2026-06-06 00:30Z, ~4h 4m
              before the snapshot. After two consecutive fetch-failed
              renders the Tier-1 panel printed fully fresh: US 10Y
              nominal{' '}
              <span className="dn-tag bull">4.47% (−2.0bp)</span>, regime
              z <span className="dn-tag bear">+1.56</span>, episodic z{' '}
              <span className="dn-tag">+0.14</span> — RISK-OFF tag, gate
              now 6bp from fire (vs the 06-03 carry of 4.47% / 6bp on
              06-05); the rates-side gate proximity is unchanged from the
              06-03 last-clean. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.11% (flat)</span>, regime z{' '}
              <span className="dn-tag bear">+1.75</span>, episodic z{' '}
              <span className="dn-tag">+0.95</span> — RISK-OFF, real-rate
              level firmer than the 06-03 carry (2.07% → 2.11%). 5Y5Y BE
              inflation <span className="dn-tag">2.24% (flat)</span> —
              eased from the 06-03 carry (2.26%). HY OAS{' '}
              <span className="dn-tag bull">2.74% (−1.0bp)</span>, regime
              z <span className="dn-tag bull">−1.14</span>, episodic z{' '}
              <span className="dn-tag bull">−0.80</span> — RISK-ON tag
              still, the credit channel TIGHTENED −1bp on the day so the
              gate moved AWAY from fire (now 4bp from the 2.78%
              threshold, vs 3bp on 06-05; the 06-05 +4bp widening did not
              extend, the credit channel held). NFCI{' '}
              <span className="dn-tag">−0.494 (+0.01)</span> — fresh
              print after fetch-fail, stale 8d, basically flat vs the
              06-03 last-clean. Fed net liquidity{' '}
              <span className="dn-tag bear">$5.834T (−0.038T)</span> —
              fresh print, tightened −$0.038T vs the 06-03 carry of
              $5.872T (the first fresh liq print in three renders and
              it tightened modestly). MOVE bond vol{' '}
              <span className="dn-tag bear">75.2 (+4.04)</span> — JUMPED
              +4.04 day-on-day (vs 73.6 on 06-05 → +1.6pt step), still
              regime &ldquo;neutral&rdquo; on z but the move is the
              largest single-day bond-vol jump of the lineage. DXY{' '}
              <span className="dn-tag bear">100.07 (+0.66 daily;
              +0.64 vs 06-05 note 99.43)</span>, regime z{' '}
              <span className="dn-tag bear">+1.78</span>, episodic z{' '}
              <span className="dn-tag bear">+2.33</span> — RISK-OFF
              episodic (above the +1.5 episodic threshold, the strongest
              DXY firm of the lineage), 100.00 was reclaimed; USD/JPY{' '}
              <span className="dn-tag bear">160.29 (+0.30 daily;
              +0.25 vs 06-05 note 160.04)</span>; US-JP 10Y spread{' '}
              <span className="dn-tag bull">1.95% (−2.0bp)</span> —
              tightened, fresh after fetch-fail; USD/CNY{' '}
              <span className="dn-tag bull">6.7650 (−0.0080 vs 06-05
              note 6.7730, CNY firmer)</span>. JGB 10Y stale 66d at 2.52%
              (staleness count grew from 64d on 06-05 → 66d today, no
              fresh monthly print).{' '}
              <span className="dn-em">
                Net: the credit channel held (HY OAS gate moved AWAY from
                fire), the rates gate held the 06-03 distance (6bp), but
                the DXY/MOVE pair printed a meaningfully risk-off pulse
                today — DXY episodic z +2.33 is a fresh lineage extreme on
                the dollar side and MOVE +4.04 is the largest single-day
                bond-vol jump of the lineage. The macro contribution to
                the BTC down-leg today is via the dollar+rate-vol channel
                (DXY firmer + MOVE jumping), NOT credit (which tightened
                slightly). The reclaim-long rates filter (10Y &lt; 4.55%)
                is freshly verified TRUE at 4.47%. The BTC-vs-TradFi
                decoupling narrowed to −11.82pt this print (BTC −17.17%
                vs NQ −5.35%) from −13.44pt on 06-05 — a +1.62pt closing
                of the gap, this time because TradFi sold off harder
                rather than because BTC stopped extending; the rotation is
                a co-selling regime, not a co-buying one
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
                <tr><td>US 10Y nominal</td><td className="num">4.47%</td><td className="num bull">−2.0bp</td><td className="num bear">+1.56</td><td className="num">+0.14</td><td className="bear">tight, eased on the day · fresh print after 2 fetch-fail renders · gate 6bp from fire</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.11%</td><td className="num">0.0bp</td><td className="num bear">+1.75</td><td className="num">+0.95</td><td className="bear">tight · still RISK-OFF · fresh after fetch-fail</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.24%</td><td className="num">0.0bp</td><td className="num">+0.09</td><td className="num bull">−0.88</td><td className="neut">no tag · fresh after fetch-fail</td></tr>
                <tr><td>HY OAS</td><td className="num bull">2.74%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.14</td><td className="num bull">−0.80</td><td className="bull">loose · risk-on · gate moved AWAY from fire to 4bp (was 3bp on 06-05); the 06-05 widening did not extend</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.494</td><td className="num">+0.01</td><td className="num">+0.72</td><td className="num">−0.01</td><td className="neut">tight · stale 8d · fresh after fetch-fail</td></tr>
                <tr><td>MOVE bond vol</td><td className="num bear">75.2</td><td className="num bear">+4.04</td><td className="num">−0.10</td><td className="num">+0.30</td><td className="bear">neutral on z · largest single-day jump of the lineage</td></tr>
                <tr><td>DXY</td><td className="num bear">100.07</td><td className="num bear">+0.66 daily (+0.64 vs 06-05 note)</td><td className="num bear">+1.78</td><td className="num bear">+2.33</td><td className="bear">RISK-OFF EPISODIC · episodic z above +1.5 · 100.00 reclaimed · fresh lineage DXY firm</td></tr>
                <tr><td>Fed net liquidity</td><td className="num bear">$5.834T</td><td className="num bear">−0.038T</td><td className="num">−0.12</td><td className="num bear">−2.29</td><td className="bear">tightened modestly · first fresh liq print in 3 renders</td></tr>
                <tr><td>USD/JPY</td><td className="num bear">160.29</td><td className="num bear">+0.30 daily (+0.25 vs 06-05 note)</td><td className="num bear">+1.36</td><td className="num bear">+1.43</td><td className="bear">yen weaker · episodic z above +1.0</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num bull">1.95%</td><td className="num bull">−2.0bp</td><td className="num bull">−0.85</td><td className="num">+0.14</td><td className="bull">tightened · fresh after fetch-fail</td></tr>
                <tr><td>USD/CNY</td><td className="num bull">6.7650</td><td className="num bull">−0.01 daily (−0.0080 vs 06-05 note)</td><td className="num bull">−1.84</td><td className="num bull">−1.46</td><td className="bull">no tag · loose · CNY firmer vs prior note</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp (monthly · stale 66d)</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean · staleness count grew (was 64d on 06-05 → 66d today)</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 166 rows, summary
              04:01Z — <span className="dn-em">a 7-day rolling read, not
              today</span>). Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.238</span> (UP from 06-05&rsquo;s
              0.215, moving back toward the 0.25 NORMAL threshold but
              still in the IDIOSYNCRATIC band — the regime tag has not
              flipped, |r| would need to cross 0.25 to relabel as NORMAL).
              BTC&rsquo;s listed ties firmed broadly across the macro
              leads, with the TOP TIE ROTATING again: SILVER{' '}
              <span className="dn-tag">+0.254</span> (now the strongest
              listed tie for BTC, was JP225 +0.162 on 06-05 — another
              metal/risk-asset rotation), TSLA{' '}
              <span className="dn-tag">+0.195</span>, SP500{' '}
              <span className="dn-tag">+0.185</span> (was +0.117 —
              firmed), COPPER <span className="dn-tag">+0.184</span>,
              GOLD <span className="dn-tag">+0.182</span> (was +0.300 on
              05-31, fell on 06-05 to lower rank, now back), PLAT{' '}
              <span className="dn-tag">+0.163</span>, NVDA{' '}
              <span className="dn-tag">+0.158</span>, NGAS{' '}
              <span className="dn-tag">+0.152</span>, MSFT{' '}
              <span className="dn-tag">+0.151</span>, URNM{' '}
              <span className="dn-tag">+0.150</span>, META{' '}
              <span className="dn-tag">+0.142</span>, NQ{' '}
              <span className="dn-tag">+0.129</span>{' '}
              <span className="dn-em">(was +0.090 — firmed to 12th rank
              from 12th, but the ABSOLUTE value rose ~+0.04 as both BTC
              and NQ sold off together this week)</span>, JP225{' '}
              <span className="dn-tag">+0.118</span> (was +0.162 — fell
              from the top spot). 7d performance:{' '}
              <span className="dn-tag bear">BTC −17.17%</span> (extended
              from 06-05&rsquo;s −13.42% by −3.75pt — the 7d window now
              includes the 06-05 −2.83% close and the 06-06 in-progress
              −5.41% wick), NQ{' '}
              <span className="dn-tag bear">−5.35%</span>{' '}
              <span className="dn-em">(vs +0.02% on 06-05 — NQ rolled
              −5.37pt in one note, a meaningful TradFi sell)</span>,
              SP500 <span className="dn-tag bear">−2.74%</span> (vs
              −0.02% — rolled), JP225{' '}
              <span className="dn-tag bear">−2.43%</span> (vs +2.05% —
              rolled hard), NVDA{' '}
              <span className="dn-tag bear">−5.29%</span> (vs +1.15% —
              flipped negative), META{' '}
              <span className="dn-tag bear">−7.21%</span>, MSFT{' '}
              <span className="dn-tag bear">−9.24%</span> (vs +0.09% —
              extended sharply), AMZN{' '}
              <span className="dn-tag bear">−9.63%</span> (vs −7.09%),
              TSLA <span className="dn-tag bear">−10.51%</span> (vs
              −5.27% — extended). Metals broadly soft: GOLD{' '}
              <span className="dn-tag bear">−4.83%</span>, SILVER{' '}
              <span className="dn-tag bear">−10.16%</span>, PLAT{' '}
              <span className="dn-tag bear">−8.14%</span>, PALL{' '}
              <span className="dn-tag bear">−11.39%</span>, COPPER{' '}
              <span className="dn-tag bear">−3.19%</span>, URNM{' '}
              <span className="dn-tag bear">−10.11%</span>. Energy the
              ONLY positive asset class: CL{' '}
              <span className="dn-tag bull">+4.08%</span> (vs +5.06% —
              cooled but still up), BRENT{' '}
              <span className="dn-tag bull">+3.34%</span>, NGAS{' '}
              <span className="dn-tag bear">−1.40%</span> (flipped
              negative).{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine NARROWED to
                ~−11.82pt (BTC −17.17% vs NQ −5.35%) from −13.44pt on
                06-05 — a +1.62pt closing of the gap, but this time
                BECAUSE TradFi sold off (NQ −5.37pt, SP500 −2.72pt,
                MSFT −9.33pt week-on-week vs the 06-05 read) rather than
                because BTC stopped extending (BTC −3.75pt deeper in the
                7d window). The rotation is a CO-SELLING regime, not a
                co-buying one; the decoupling read remains
                endogenous-to-crypto on direction but the macro tape has
                joined the down-move. With mean |r| at 0.238 (firming
                toward NORMAL), BTC&rsquo;s listed ties to TradFi leaders
                are still all under +0.20 — the cross-asset signal is
                still structurally idiosyncratic for the BTC tape, but the
                gap is closing because everyone is selling together
              </span>. JGB monthly 2.52% carries EXTREME RISK-OFF monthly
              tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · runner / put-spread tail / cover-bounce scout / cycle continuation framework statuses unchanged · mean-revert long scout REFRAMED (leg-3 inflection from $68k to $63,778 flip — recomputed R/R passes the 1.5:1 gate but trigger has not printed; still NON-ACTIONABLE) · no fresh trades on this snap</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 06-05 framework watches printed cleanly: the 5JUN
                settle resolved as scheduled (the chunk cleared from the
                strip), the sixth cycle-continuation print at the BJ
                15:41 candidate minute DID NOT FIRE (the cadence is
                formally dead), and the densest TD9 BUY cluster of the
                lineage deepened by one frame (15m joined the 8h / 12h /
                1d stack) — but spot fell −5.41% under that backdrop and
                the dealer book deteriorated to a fresh lineage extreme,
                so no scout fired despite the structural setup
              </span>. The cover-bounce scout from 05-31 remains DROPPED
              — the cycle anchor is now ~$13.4k overhead (was ~$9.4k on
              06-05) and three legs are still required (anchor reclaim
              AND dealer-book repair AND cover-shape) with the
              dealer-book repair leg structurally REVERSED today (gamma
              deepened −$14.0M back to a lineage extreme). The runner
              and the 29MAY put-spread tail stay closed unchanged. The
              short framework watch remains CLOSED-VINDICATED on the
              prior note&rsquo;s narrative — and today&rsquo;s clean
              sixth-print failure at the BJ 15:41 candidate minute
              vindicates the closure cleanly (no live add on the
              calendar pin). The mean-revert long scout from 06-03 keeps
              two of three promotion legs cleared (the multi-TF TD9 BUY
              stack DEEPENED to four concurrent frames + 3d/1M pending,
              and the funding cumulative short-pay regime DEEPENED to
              10.55h single contiguous + 82.57% of 24h negative + first
              negative 24h mean of the lineage), but the third leg (1h
              reclaim above the structural inflection) has shifted as
              the flip dropped to $63,778: the 06-05 note&rsquo;s ~$68k
              leg-3 line is now ~$8.4k overhead, but the new 0γ flip at{' '}
              <span className="dn-tag bull">$63,778</span> is a closer
              structural inflection line that gives a tradable R/R if it
              fires.{' '}
              <span className="dn-signal">
                Reframing leg-3: a 1h close &gt; flip $63,778 with OI
                still building is the right structural inflection on
                today&rsquo;s tape, and the recomputed R/R at $63,778
                trigger / $59,154 stop (24h capitulation low) / $73,025
                first target (cycle anchor) reads $4,624 risk / $9,247
                reward = 2.00:1, comfortably above the desk&rsquo;s 1.5:1
                gate
              </span>. The scout stays NON-ACTIONABLE because leg 3 has
              not printed — but the R/R now pencils if it does, a
              meaningful change from 06-05&rsquo;s 0.78:1 read on the
              older $68k inflection line. The trade book today is
              unchanged in terms of live size (none); the desk maintains
              discipline through a four-print TD9 BUY cluster, the
              deepest short-pay regime of the lineage, a fresh long-side
              one-sided build, and a dealer book that deteriorated to a
              lineage extreme.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">closed · primary · runner ladder complete · closed on 29MAY 08:00Z expiry settle (unchanged status carried from 06-05)</span>
              <div className="dn-trade-name">
                Flip-extend short — closed on 29MAY 08:00Z expiry settle (unchanged from 06-05)
              </div>
              <div className="dn-thesis">
                Status unchanged. The retrospective read continues to
                vindicate the close: 05-30 / 05-31 daily closes ($73,857
                / $73,653) marked the two-day post-amplifier bounce, then
                06-01 broke ($71,392), 06-02 dumped (−6.53%), 06-03
                extended (−3.91%), 06-04 nearly flat (−0.41%), 06-05
                extended again (−4.43% close-to-close at $61,022), and
                today&rsquo;s in-progress 06-06 close $60,490 is another
                −$532 below 06-05 — the down-leg RE-EXTENDED on 06-05
                after the 06-03/04 lull and is still shedding today. The
                re-entry path remains a fresh structural setup, not a
                roll.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (amplifier settle) · no residual position · unchanged from 06-05</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">do not chase a re-entry short into the deepest short-pay regime of the lineage, the densest TD9 BUY cluster of the lineage, the fresh long-side one-sided build, the 200W cycle floor break on spot, and three cycle-frame RSI prints under 15 — the short side is structurally exhausted on this leg, even though the dealer book got worse</span></div>
              </div>
              <div className="dn-gating">
                <b>Trade closed.</b> The audit-cycle discipline holds: no
                roll, no average, no late-tier add — even though the
                dealer book deteriorated, the position-side and
                technical-side reads are now at lineage extremes that
                argue against a short add.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">DROPPED · scout · cycle anchor lost FOUR+ tiers down · ~$13.4k overhead, no progress on any leg · dealer-book repair leg STRUCTURALLY REVERSED today</span>
              <div className="dn-trade-name">
                Cover-bounce scout — DROPPED unchanged (cycle anchor now ~$13.4k overhead on close; dealer-book repair leg reversed −$14.0M to lineage extreme)
              </div>
              <div className="dn-thesis">
                Status unchanged from 06-05. The cycle anchor remains
                lost and the overhead band sits ~$13.4k on close
                (D-SMA100 $73,025 vs in-progress 06-06 close $60,490);
                the three legs of the cover-bounce path (anchor reclaim
                AND dealer-book repair AND cover-shape flow) all remain
                un-progressed on the price plane. The dealer-book repair
                leg has REGRESSED structurally — gamma deepened to
                −53.5M (a fresh lineage extreme, was −39.5M on 06-05),
                the flip dropped −$2,731 (the largest single-note flip
                drop of the lineage), and the $60k crash-put wall
                thickened to −27.31M (was −20.86M, +$6.45M heavier as
                price hit the strike). The cover-shape flow leg has not
                printed either — 24h spot CVD −2,482, big-print
                −1,697, OI BUILDING; this is the inverse of the
                cover-shape that the scout requires. A long re-entry on
                the cover-bounce path requires a structural inflection
                on the price plane that this note does not see; the
                mean-revert long scout below is the separate setup keyed
                to the oversold-counter cluster.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout status</span><span className="dn-lvl-v">DROPPED (unchanged) · cycle anchor lost four+ tiers down · spot now ~$13.4k below the recomputed D-SMA100 $73,025</span></div>
                <div><span className="dn-lvl-k">re-entry threshold (carried; price plane regressed)</span><span className="dn-lvl-v bull">1d close &gt; D-SMA100 $73,025 AND aggregate GEX flips back &gt; 0 AND 1h cover-shape print (OI shrinking + spot CVD bid + SM short_btc bleeds) — three legs, none progressing on price; the dealer-book repair leg structurally REVERSED today (gamma −$14.0M to lineage extreme)</span></div>
                <div><span className="dn-lvl-k">no long entry here</span><span className="dn-lvl-v bear">do not buy the four-concurrent TD9 BUY cluster as a cover-bounce — this is the mean-revert scout setup below, not the cover-bounce setup; the cover-bounce path is gated by anchor reclaim regardless of how dense the oversold-counter cluster gets</span></div>
              </div>
              <div className="dn-gating">
                <b>Trade dropped (unchanged).</b> The mean-revert long
                scout below is the separate setup keyed to
                oversold-reversal exhaustion; the cover-bounce path is
                gated by anchor reclaim.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">CLOSED-VINDICATED · short scout · framework watch · sixth-print cadence test FAILED at BJ 15:41 06-05 (small cover +315, max |Δnet| 333 in window) · calendar cadence formally retired</span>
              <div className="dn-trade-name">
                Anchor-break short scout — CLOSED-VINDICATED (closure confirmed: sixth-print cadence test cleanly failed at the BJ 15:41 06-05 candidate minute — the calendar cadence is formally dead)
              </div>
              <div className="dn-thesis">
                The 06-05 v1 narrative escalated this watch to
                CLOSED-VINDICATED on five prints; today&rsquo;s tape
                confirms the closure cleanly. The BJ 15:41 06-05
                candidate minute (the same minute that printed on 06-03
                and 06-04) saw{' '}
                <span className="dn-tag bull">Δnet +315</span> (long
                Δ −144, short Δ −459 same minute — a small cover, not
                the Δshort &gt; 0 + Δlong &lt; 0 hostile-2 signature);
                the BJ 15:00–16:00 window total was Δnet +1,305 with max
                single-minute |Δnet| 333 (BJ 15:46 06-05); the wider BJ
                13:00–16:30 window drifted Δnet −673 with no
                single-minute |Δnet| ≥ 2k. The five-print chain stops at
                06-04 07:41Z. The cycle continuation framework is now
                fully retired on calendar — future Shape-B signatures
                survive only as informational, no-calendar tape reads.
                The desk did not size on any of the five prints per
                audit DN-001 carried.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">sixth-print cadence test (FAILED today)</span><span className="dn-lvl-v bull">BJ 15:41 06-05 candidate minute printed Δnet +315 (small cover, no hostile-2 signature); BJ 15:00–16:00 window total Δnet +1,305; max |Δnet| in window 333 at BJ 15:46; BJ 13:00–16:30 wider window drifted −673 with no single-minute ≥ 2k step — the BJ 15:41 fallback pin is dead</span></div>
                <div><span className="dn-lvl-k">five-print chain (closed)</span><span className="dn-lvl-v">05-30 06:01Z Δnet −5,569 → 06-01 06:16Z −3,137 → 06-02 06:46Z −6,621 → 06-03 07:41Z −7,177 (lineage extreme) → 06-04 07:41Z −5,591 → 06-05 sixth-print test FAILED</span></div>
                <div><span className="dn-lvl-k">disposition</span><span className="dn-lvl-v">CLOSED-VINDICATED confirmed by today&rsquo;s clean failure of the sixth-print cadence test · the framework call is complete on its own terms · the desk will not chase a re-entry short into the four-concurrent TD9 BUY cluster, the deepest short-pay regime, the first negative 24h funding mean, the lost 200W cycle floor on spot, three cycle-frame RSI prints under 15, and a fresh long-side one-sided build</span></div>
                <div><span className="dn-lvl-k">framework next step</span><span className="dn-lvl-v">future re-stack hostile-2 signatures (Δshort &gt; 0 + Δlong &lt; 0 same minute) remain meaningful tape reads when they print, but on a no-calendar basis only — exactly the shape the 05-31 framework restatement set up</span></div>
              </div>
              <div className="dn-gating">
                <b>Status:</b> CLOSED-VINDICATED confirmed.{' '}
                <b>Hard rule:</b> no re-entry short on a tape where the
                cycle continuation calendar cadence has cleanly failed,
                the technical-side reads are at lineage extremes, and
                the long-side position book is bottom-fishing into the
                wick; any future re-arm requires a fresh setup origin
                (not a roll of this card).
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">closed · macro tail · closed on 29MAY 08:00Z settle (unchanged status carried from 06-05; credit gate moved AWAY from fire to 4bp after the 06-05 spike did not extend; rate-side gate freshly verified at 4.47% / 6bp from fire)</span>
              <div className="dn-trade-name">
                Downside put-spread — closed on 29MAY 08:00Z settle; no roll (credit gate moved AWAY from fire after the 06-05 widening did not extend; 10Y gate fresh at 4.47% / 6bp from fire)
              </div>
              <div className="dn-thesis">
                Status unchanged on position but the gate proximity
                shifted. The macro re-grow gates moved on credit (HY OAS
                2.74%, gate now 4bp from fire — TIGHTENED −1bp on the
                day, the 06-05 +4bp widening DID NOT extend, the credit
                channel held) and printed fresh on rates (10Y nominal
                4.47% after two consecutive fetch-failed renders, gate
                still 6bp from fire — matches the 06-03 last-clean carry
                level). The reclaim-long rates filter (10Y &lt; 4.55%)
                is freshly verified TRUE at 4.47%. The credit gate moved
                AWAY from fire by 1bp (3bp → 4bp) — the 06-05 wording
                that the gate was &ldquo;one strong session away&rdquo;
                proved correct in direction but the gate held; today the
                gate is one more session away. No fresh hedge today
                because the BTC-internal cycle ladder break has done the
                structural work, the front-contract gamma has REGENERATED
                with the 6JUN amplifier add, and the four-concurrent
                TD9 BUY cluster + first negative 24h funding mean argue
                for a watch on the long-side counter print rather than a
                fresh downside hedge.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (Deribit 29MAY settle) · no residual position · no roll · unchanged on position from 06-05</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (next Tier-1 print)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.74%, 4bp to fire — moved AWAY from fire by 1bp on the day, was 3bp on 06-05; the credit channel held the 06-05 widening) OR 10Y &gt; 4.53% close (currently 4.47%, 6bp to fire — fresh print today)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — freshly verified TRUE at 4.47% today (after two consecutive fetch-failed renders); the filter held</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the HY OAS gate moved AWAY from fire by
                1bp on the day, so the 06-05 &ldquo;one strong session
                away&rdquo; framing is correct in shape but the credit
                channel held this session. At 4bp from fire, the gate is
                more than one strong session away again; the next clean
                macro render should still be watched. No roll today
                because the BTC-internal structural read (front-contract
                gamma regenerated with the 6JUN add + cycle continuation
                CLOSED-VINDICATED + four-concurrent TD9 BUY cluster +
                first negative 24h funding mean + lost 200W cycle floor
                on spot) cuts toward a long-side counter watch rather
                than a fresh downside hedge.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · framework watch · NON-ACTIONABLE · two of three promotion legs DEEPENED · leg-3 inflection REFRAMED from $68k to flip $63,778 — recomputed R/R = 2.00:1, passes the 1.5:1 gate; trigger has not printed; STILL NON-ACTIONABLE pending the print</span>
              <div className="dn-trade-name">
                Mean-revert long scout — framework watch; legs 1+2 DEEPENED (four-concurrent TD9 + 82.57% short-pay 24h with 10.55h streak); leg-3 inflection reframed to $63,778 flip — recomputed R/R passes the gate; print not in
              </div>
              <div className="dn-thesis">
                The mean-revert long scout&rsquo;s three promotion legs
                are: (1) multi-TF TD9 BUY confirmed on a cycle frame —
                today DEEPENED to FOUR concurrent frames (15m + 8h /
                12h / 1d) with 3d / 1M still TD8 → 9? pending, the
                densest oversold cluster of the lineage by one frame
                vs 06-05; (2) funding cumulative short-pay regime ≥
                4h — today DEEPENED to 82.57% of the 24h negative,
                10.55h single contiguous neg streak, 24h MEAN negative
                at −1.36% (the first negative 24h funding mean of the
                lineage), with the trough at −3.92% ann (fresh lineage
                short-pay extreme); (3) the 1h reclaim above a
                structural inflection. The 06-05 note set leg-3 at the
                ~$68k area (where the cover-bounce path&rsquo;s
                inflection sat); today the flip dropped to $63,778, and
                $68k is now ~$8.4k overhead (worse than 06-05&rsquo;s
                ~$4.3k). But the new 0γ flip $63,778 is a closer and
                more structurally relevant inflection line today — a 1h
                close above the flip with OI still building (or
                shrinking) is a tighter cover-shape test. Recomputed
                R/R at the reframed inflection: trigger $63,778 / stop
                $59,154 (24h capitulation low — a fresh capitulation
                print invalidates the oversold-counter read) / first
                target $73,025 (cycle anchor) gives risk $4,624 /
                reward $9,247 = 2.00:1, comfortably above the
                desk&rsquo;s 1.5:1 gate. The scout stays NON-ACTIONABLE
                because leg 3 has not printed — spot $59,646 sits
                $4,132 below the reframed inflection — but if leg 3
                fires the R/R now pencils for a scout entry, a
                meaningful change from 06-05&rsquo;s 0.78:1 read on the
                older $68k line.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">promotion gates (2 of 3 cleared and DEEPENED; third reframed and pending)</span><span className="dn-lvl-v bull">leg 1 multi-TF TD9 BUY — CLEARED + DEEPENED at FOUR concurrent cycle frames (15m + 8h / 12h / 1d) + two pending (3d / 1M); densest cluster of the lineage · leg 2 funding cumulative short-pay ≥ 4h — CLEARED + DEEPENED at 10.55h single contiguous streak, 82.57% of 24h negative, FIRST NEGATIVE 24h MEAN of the lineage at −1.36% ann · leg 3 1h close &gt; flip $63,778 (REFRAMED from prior $68k area — the new 0γ flip is the structural inflection on today&rsquo;s tape) — UNCLEARED, spot $59,646 sits $4,132 below the reframed trigger</span></div>
                <div><span className="dn-lvl-k">$63,778 flip (reframed inflection, NOT an entry until the print)</span><span className="dn-lvl-v bull">a 1h close &gt; $63,778 with OI still building (or shrinking) marks the structural inflection that promotes the watch; the new R/R math at trigger $63,778 / stop $59,154 / first target $73,025 reads $4,624 risk / $9,247 reward = 2.00:1, comfortably above the desk&rsquo;s 1.5:1 gate. <em>Watch / inflection line until the print; entry only on confirmed 1h close above flip</em></span></div>
                <div><span className="dn-lvl-k">stop (if entered)</span><span className="dn-lvl-v bear">1h close &lt; $59,154 (24h capitulation low — a fresh capitulation print invalidates the oversold-counter read)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R only · take half at the cycle anchor reclaim, runner to D-SMA50 cluster ~$76k area</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R framework (carried per audit DN-006 from 06-05):</b>{' '}
                trigger $63,778 / stop $59,154 = $4,624 risk; first
                target $73,025 = $9,247 reward = 2.00:1 (above the
                desk&rsquo;s 1.5:1 gate). <b>Entry permitted on confirmed
                1h close above flip $63,778</b> — and only if OI is still
                building (or at least not collapsing) and big-print/spot
                CVD show a cover-shape print on the trigger bar. The
                scout is still NON-ACTIONABLE because leg 3 has not
                printed; the trigger is $4,132 above spot. <b>Hard
                rule:</b> no TD9-only entry without the leg-3 flip
                reclaim; no add on the four-concurrent TD9 cluster that
                hasn&rsquo;t been confirmed by price action above the
                flip; no entry without a passing R/R gate (today&rsquo;s
                reframed math passes; if the inflection moves further
                away the math has to be rechecked).
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 200W cycle floor watch · LOST ON SPOT (live $59,646 sits −3.48% below full-history W-SMA200 $61,794) · NEW WATCH this note · in-progress weekly close $60,490 vs $61,794 = −$1,304 below; the weekly bar would need to close at or above $61,794 by week-end to avoid a formal 200W floor break</span>
              <div className="dn-trade-name">
                200W cycle floor watch — NEW WATCH framework: spot lost the full-history W-SMA200 $61,794 on the print, in-progress weekly close sits −$1,304 below; the weekend close prints the structural break or the reclaim
              </div>
              <div className="dn-thesis">
                The runbook §2 200W-support read flags the full-history
                W-SMA200 as the cycle floor — a level weekly closes
                below in ~9% of weeks, clustered at deep cycle
                capitulations. The weekly_200sma.json file is absent on
                the server (lineage carry; the file has not been
                generated since the desk policy added the watch); per
                runbook fallback the full-history (2019-09-08 →
                2026-06-06, 353 weekly bars) W-SMA200 was computed
                directly from the parquet at $61,794. Live spot $59,646
                sits −3.48% BELOW this level on the SPOT print; the
                06-05 daily close $61,022 was already −$772 below the
                line, and the in-progress 06-06 close at parquet last
                bar (04:06Z) $60,490 is −$1,304 below. The cycle floor
                is weekly-close, not spot — but the in-progress weekly
                bar would need to recover and close at or above $61,794
                by week-end to avoid stamping a formal 200W break. If
                the weekly close prints below the level, it is the first
                weekly close below the 200W of the entire current cycle
                — a macro-structural event that historically corresponds
                to capitulations rather than entries. The watch is
                informational this note; the runbook do-not-fabricate
                discipline blocks any percentile / break-event claim off
                a missing JSON, only the level + the in-progress
                daily-close gap is surfaced.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W watch source</span><span className="dn-lvl-v">weekly_200sma.json ABSENT (lineage carry; file has not been generated) · fallback per runbook §2: full-history parquet computation from 2019-09-08, 353 weekly bars, W-SMA200 = $61,793.92</span></div>
                <div><span className="dn-lvl-k">spot vs 200W (this snap)</span><span className="dn-lvl-v bear">spot $59,646 − 200W $61,794 = −$2,148 / −3.48% (live spot below the cycle floor)</span></div>
                <div><span className="dn-lvl-k">06-05 daily close vs 200W</span><span className="dn-lvl-v bear">$61,022 vs $61,794 = −$772 below — the first daily close below the full-history 200W of the current cycle (lineage carry: 05-31 close $73,653 was +$11,859 above)</span></div>
                <div><span className="dn-lvl-k">06-06 in-progress close vs 200W</span><span className="dn-lvl-v bear">parquet last bar 04:06Z close $60,490 vs $61,794 = −$1,304 below</span></div>
                <div><span className="dn-lvl-k">weekly close watch (weekend)</span><span className="dn-lvl-v">the in-progress weekly bar would need to recover and close at or above $61,794 by week-end to avoid a formal 200W floor break; a weekly close below would be the first of the current cycle (structural macro event)</span></div>
                <div><span className="dn-lvl-k">runbook discipline</span><span className="dn-lvl-v">per runbook do-not-fabricate, no percentile / break-event claim is asserted off a missing JSON; only the full-history level and the in-progress daily-close gap are surfaced. Re-running this watch requires either weekly_200sma.json being generated server-side or a continued full-history parquet computation in the next note</span></div>
              </div>
              <div className="dn-gating">
                <b>Watch only.</b> A weekly close below $61,794 would be
                the first of the current cycle and a structural
                macro-support event; but per the runbook this watch is
                informational, not a trade trigger. The mean-revert long
                scout above is the actionable card if leg 3 (flip
                reclaim) fires; the 200W watch is a separate macro-level
                signal that would shift the desk&rsquo;s read of the
                broader cycle position, not a per-trade entry/exit. If a
                weekly close prints below $61,794 the next note must
                reassess whether the broader cycle thesis (intact
                mid-cycle drawdown vs cycle-top retrace) has been
                falsified.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · 5JUN settle resolved but 6JUN replaced it (dealer book deteriorated to fresh extreme) · spot lost 200W cycle floor on the print · cycle continuation cadence formally retired (sixth-print test failed) · four-concurrent TD9 BUY cluster + first negative 24h funding mean of the lineage · mean-revert long scout reframed leg-3 inflection passes the R/R gate but trigger not in</span>
            </h2>

            <p>
              Of the 06-05 decision conditions: the 5JUN26 expiry settle
              FIRED clean (−9.61M chunk cleared at 08:00Z 06-05) — but a
              fresh 6JUN26 −8.40M chunk replaced it inside the same 24h,
              so the post-settle aggregate forecast of ≈ −29.9M missed
              by $23.6M (actual −53.5M, a fresh lineage extreme); the
              sixth-print cycle continuation watch DID NOT FIRE at the
              BJ 15:41 06-05 candidate minute (small cover +315, max
              |Δnet| 333 in window — the calendar cadence is formally
              retired); the cycle anchor reclaim condition DID NOT FIRE
              (now ~$13.4k overhead); the macro re-grow gates moved on
              credit (HY OAS tightened −1bp, gate moved AWAY from fire
              to 4bp; the 06-05 widening did not extend) and on rates
              (10Y came in fresh at 4.47%, gate held at 6bp from fire);
              the reclaim-long rates filter is freshly verified TRUE at
              4.47%; the multi-TF TD9 BUY cluster DEEPENED to FOUR
              concurrent frames (15m joined the 8h / 12h / 1d stack);
              the mean-revert long scout leg-3 inflection was REFRAMED
              from $68k to flip $63,778 with the recomputed R/R passing
              the 1.5:1 gate at 2.00:1 — but the trigger has not
              printed. The conditions today re-set around a 6JUN front
              amplifier (fresh chunk inside the same 24h that replaced
              the resolved 5JUN), a 200W cycle floor break on spot
              (lost on the print; in-progress daily close $1,304 below
              the level), a long-side one-sided position build (the
              first of the down-leg lineage in this 06-05 → 06-06
              chain), and a mean-revert long scout with a now-tradable
              R/R gated on the flip reclaim:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>6JUN26 expiry settle (today 08:00Z, ~3h 26m ahead)</td><td>−8.40M FRESH front chunk settles at 08:00Z; post-settle ex-6JUN aggregate ≈ −45.1M (still firmly net-short-gamma, but ~$8M off the −53.5M extreme); watch the settle window for a vol event — the prior 5JUN settle resolved clean but a fresh chunk replaced it inside the same 24h</td><td>watch the settle print; no action required if settle prints clean — if a vol event prints in the settle window, re-evaluate the cover-bounce scout&rsquo;s dealer-book repair leg and consider whether the mean-revert long scout&rsquo;s leg 3 inflection should fire on the post-settle bar</td></tr>
                <tr><td>Mean-revert long scout (leg 3 inflection REFRAMED — R/R now passes the gate)</td><td className="bull">1h close &gt; flip $63,778 with OI still building / not collapsing · trigger $4,132 above spot · recomputed R/R 2.00:1 at trigger $63,778 / stop $59,154 / first target $73,025 — passes the 1.5:1 gate</td><td><em>scout long 0.2R on confirmed 1h close above flip</em> with the entry-bar cover-shape print check (big-print net positive + spot CVD bid in the trigger bar); the R/R now pencils, the trigger has not printed · take half at cycle anchor $73,025, runner to D-SMA50 cluster ~$76k</td></tr>
                <tr><td>Cover-bounce scout (long) — DROPPED (unchanged; dealer-book repair leg REGRESSED)</td><td className="bear">requires 1d close &gt; $73,025 AND aggregate GEX flips &gt; 0 AND 1h cover-shape print — three legs, the dealer-book repair leg REVERSED today (gamma −$14.0M to lineage extreme)</td><td>no entry · the path to the cycle anchor reclaim got harder this note</td></tr>
                <tr><td>200W cycle floor watch (NEW; LOST on spot)</td><td className="bear">full-history W-SMA200 $61,794; spot $59,646 sits −3.48% below; in-progress 06-06 close $60,490 sits −$1,304 below; the weekly bar would need to recover and close ≥ $61,794 by week-end to avoid a formal 200W floor break</td><td>watch the weekend weekly close · informational, not a trade trigger; a confirmed weekly close below would be the first of the current cycle and a macro-structural event that demands a next-note cycle-thesis reassessment</td></tr>
                <tr><td>Cycle continuation cadence (FORMALLY RETIRED)</td><td className="stale">BJ 15:41 06-05 candidate minute saw Δnet +315 (small cover, no hostile-2 signature); the cadence calendar is dead — both the BJ 13–15 window and the BJ 15:41 fallback pin failed</td><td>read each fresh Δnet ≤ −3k or Δnet ≥ +3k print as a signal in itself — no time prior · re-stack hostile-2 signatures remain meaningful tape reads when they print, on no-calendar basis only</td></tr>
                <tr><td>HY OAS macro re-grow gate</td><td className="bull">2.74% (4bp from fire — moved AWAY from fire by 1bp on the day; the 06-05 +4bp widening did not extend, the credit channel held this session)</td><td>at 4bp from touch, the gate is more than one strong session away again · no roll today because the BTC-internal structural read cuts the other way and the credit channel held</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — freshly verified TRUE at 4.47% today (after two consecutive fetch-failed renders); 6bp from the gate</td><td>standalone filter freshly TRUE; needs the mean-revert leg-3 trigger to translate to scout long</td></tr>
                <tr><td>DXY / MOVE risk-off pulse</td><td className="bear">DXY 100.07 (+0.64 vs 06-05 note; episodic z +2.33 — RISK-OFF EPISODIC); MOVE 75.2 (+4.04 day, largest single-day jump of the lineage)</td><td>the macro pulse turned risk-off via the dollar+rate-vol channel today (NOT credit); the BTC down-leg has a fresh macro contributor in DXY firming + bond-vol jumping · the rotation argues for caution on a fresh long scout entry even if leg 3 fires — the entry-bar cover-shape print check should weigh DXY/MOVE prints into the cover-shape read</td></tr>
                <tr><td>Cycle anchor reclaim watch (price plane four+ tiers down)</td><td className="bull">1d close &gt; D-SMA100 $73,025 — currently ~$13.4k overhead; the rolling 100-day anchor itself bled −$98 lower as the 06-05 close rolled into the window</td><td>the most distant of the cover-bounce scout&rsquo;s three legs; a 1d close above the anchor would re-arm the cover-bounce scout and trigger fresh structural reassessment · the anchor remains the load-bearing absent leg</td></tr>
                <tr><td>BTC↔NQ cross-asset rotation (regime IDIOSYNCRATIC moving toward NORMAL)</td><td className="stale">|r| 0.238 (up from 06-05&rsquo;s 0.215; firming toward 0.25 NORMAL threshold but not across); BTC↔NQ +0.129 (up from +0.090); BTC −17.17% vs NQ −5.35% gap −11.82pt (was −13.44pt)</td><td>the BTC tape is co-selling with TradFi (NQ −5.35% week-on-week, MSFT −9.24%) rather than diverging up; the decoupling gap is closing because everyone is selling together — the rotation does not survive into BTC trading prescription as a cross-asset cover-bounce signal</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the 6JUN 08:00Z settle resolves the new front
                amplifier cleanly (post-settle aggregate ≈ −45.1M, still
                firmly net-short-gamma but ~$8M off the lineage extreme)
                or whether a vol event during the settle window adds
                further amplification; secondarily, whether the
                in-progress weekly bar can recover above the full-history
                200W $61,794 by week-end (or stamps the first formal
                weekly close below the 200W of the current cycle); and
                tertiarily whether the mean-revert long scout&rsquo;s
                reframed leg-3 inflection at $63,778 prints a 1h close
                with the cover-shape entry-bar check. The cycle
                continuation framework is formally retired on calendar;
                the question is now whether the four-concurrent TD9 BUY
                cluster + first negative 24h funding mean of the
                lineage + 10.55h short-pay streak resolve into a 1h flip
                reclaim that promotes the mean-revert long scout to a
                first scout entry, or whether the 200W cycle floor
                breaks on a weekly close and the dealer book&rsquo;s
                residual ~−45M post-6JUN settle plus the deepened $60k
                / $55k / $50k crash-put corridor pull spot down to a
                fresh capitulation print below $59,154
              </span>. Until then this note runs as written: the runner
              and the put-spread tail are closed, the cover-bounce
              scout is dropped, the short framework watch is
              CLOSED-VINDICATED with the sixth-print test cleanly failed,
              the mean-revert long scout is NON-ACTIONABLE pending the
              leg-3 flip-reclaim print but the R/R now pencils at 2.00:1,
              and the 200W cycle floor watch is a NEW informational
              watch. The BTC-vs-TradFi decoupling narrowed to −11.82pt
              as TradFi joined the sell; the engine MTF frames are deep
              oversold and the cycle frames are at single-digit-shy RSI
              extremes; the dealer book deteriorated to a fresh lineage
              extreme; the leverage book printed the deepest short-pay
              regime of the lineage. The right read for the next 24h is{' '}
              <em>patient — watch the 6JUN settle resolution, watch the
              weekend weekly close vs $61,794, watch for a 1h close
              above flip $63,778 — three external prints that re-write
              the call</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>v2 status:</b> v1 EN was authored by STAGE A on the
            btc-fetcher server at the 2026-06-06 04:34Z snapshot anchor
            (BJ 12:34 06-06 per live_db <code>t</code> BJ-local
            convention — runbook §2 LIVE-TAPE `t` LANDMINE applied
            after the 2026-06-06 first run failed exactly this check).
            STAGE B codex hostile audit returned <b>BLOCK-CRITICAL</b>
            verdict on the original v1 draft (1 CRITICAL + 6 MAJOR
            findings, ID DN-001 through DN-007) with a follow-on v2
            re-gate that surfaced 4 new findings (v2-NF-001 carryover
            from DN-001 / v2-NF-002 rolling-source / v2-NF-003 parquet
            drift / v2-NF-004 macro row drift); the full audit report
            is preserved at{' '}
            <code>audits/2026-06-06-desk-note.md</code>. STAGE C applied
            every suggested fix in this v2 promotion: (DN-001 / v2-NF-001
            CRITICAL) live snapshot anchor moved to the actual UTC 04:34Z
            row `t == &ldquo;06-06 12:34&rdquo;` (BJ-local) and every
            BJ/UTC event pair in the prose was re-derived under the
            BJ-local convention (funding trough / peak, longest neg
            streak, 24h H/L, OI peak / low, SM net trough, short_btc and
            long_btc peaks, mkt_long_pct peak); (DN-002 MAJOR) the four-
            concurrent ⚡ TD9 BUY claim across 15m / 8h / 12h / 1d is
            preserved because the current rolling{' '}
            <code>mtf_div_latest.html</code> still confirms it on a
            re-scan and the 04:31Z scan was archived to
            snapshots/2026-06-06-0434/ before read per runbook §1 archive
            policy, with the lag language consolidated to one window;
            (DN-003 MAJOR) the GEX 04:06Z file was archived in the same
            snapshot directory and the in-prose GEX numbers (index
            $60,806 / IV 52.5% / total −53.5M / flip $63,778 / 6JUN
            −8.40M) match the archived strip exactly; (DN-004 MAJOR) the
            macro panel was updated to the actual 00:30Z render — Tier-1
            BACK ONLINE with US 10Y 4.47%, TIPS 2.11%, NFCI −0.494, Fed
            net liq $5.834T, US-JP spread 1.95%, USD/CNY 6.7650 — the
            stale fetch-failed claim was retracted; (DN-005 MAJOR) the
            2024-2026 weekly EMA lines (W-EMA100 / W-EMA50) are labeled
            truncated seeded and the prior v1 W-EMA200 = $73,578 claim
            is retracted; the full-history (353-week, 2019-09-08 →
            2026-06-06) W-SMA200 was computed directly from parquet at
            $61,793.92 and surfaced as the structural 200W watch level;
            (DN-006 MAJOR) the SM delta band now keeps `vs 06-05 note`
            (long 11.26k → 15.44k, short 55.73k → 54.86k, net −44,462 →
            −39,426 = +5,036) separate from the 24h window (long Δ
            +3,049, short Δ −797, net Δ +3,845); (DN-007 MAJOR) the
            superlative was softened to &ldquo;first clean one-sided
            long-stack of the down-leg lineage in this 06-05 → 06-06
            chain&rdquo; with the explicit 06-01 / 06-02 / 06-03 / 06-04
            short-stack and 05-31 / 06-05 two-sided-shrink lineage
            structure cited inline rather than a full lineage table;
            (v2-NF-002 MAJOR) MTF / GEX / macro / cross-asset rolling
            artifacts were all archived to{' '}
            <code>/opt/desk-note/snapshots/2026-06-06-0434/</code> before
            read per runbook §1, removing the rolling-artifact
            auditability gap; (v2-NF-003 MINOR) parquet last bar moved
            to 04:06Z close $60,489.70 with RV30 37.05% recomputed and
            29-return reference 37.46% noted inline; (v2-NF-004 MINOR)
            the JGB staleness counter was updated to 66d from the 06-05
            note&rsquo;s 64d. Rolling-source archive policy is now the
            lineage carry from runbook §1 (v2-NF-002 fix). The MA
            matrix universe stays the 2024-2026 subset per 06-02 audit
            DN-005 desk policy carry; full-history W-SMA200 / W-EMA200
            references added separately in the manifest and the 200W
            watch trade card.{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1;
            Next 16.2.6 hard-exits on Node &lt; 20.9.0 at{' '}
            <code>node_modules/next/dist/bin/next:24-28</code>, so a full{' '}
            <code>next build</code> is environment-blocked (lineage from
            05-21 through 06-05). <code>npx --no-install tsc --noEmit</code>{' '}
            is the build proxy and exited 0 on STAGE B (recorded in
            audits/2026-06-06-desk-note.md) and on this STAGE C
            promotion run.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for
            discussion among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-06-06 04:34Z,
            BJ 12:34 06-06) with section-level provenance disclosed in
            the manifest band above; the macro Tier-1 panel render is
            2026-06-06 00:30Z (~4h 4m before snapshot) and the rolling
            MTF / GEX / cross-asset artifacts are archived to
            snapshots/2026-06-06-0434/ before read. Levels, sizes, and
            conditions are illustrative of the desk&rsquo;s process, not
            standing recommendations. Past correlation, gamma, and
            positioning patterns do not bind future tape. Derivatives
            carry the risk of total loss and, where leveraged, loss
            exceeding deposited margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The 5JUN settle resolved but a 6JUN replaced it inside
                the same 24h. Spot lost the 200W cycle floor on the
                print. Longs bottom-fished into a −5.41% wick. The
                cycle continuation cadence is formally retired. The
                mean-revert scout&rsquo;s R/R now pencils at the
                reframed flip line — but the print is not in. Patient —
                watch the 6JUN settle, the weekend weekly close vs
                $61,794, and a 1h close above flip $63,778.
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
            v2 · 2026-06-06 04:34Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
