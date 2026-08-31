import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-31 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-31',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-31' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260831() {
  await requireViewer('/desk/2026-08-31');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-31 · v2</span>
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
              <span className="dn-big">$77,792</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.53%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-31 00:05Z · WEEKLY note (Monday cadence rule, not the event rule)
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">publish trigger</td>
                  <td className="dn-v-cell">Monday weekly rule</td>
                  <td className="dn-flag">
                    this note publishes on the <b>Monday weekly rule</b>, anchored to the
                    W-SUN close that settled at 2026-08-31 00:00Z — five minutes before the
                    snapshot. It is <b>not</b> event-triggered: 24h −0.53% against a 6% gate,
                    7d <b>+0.22%</b> against a 12% gate, and <b>zero</b> negative funding rows
                    in 10,080 so no sign-flip. Both return gates are computed on the same
                    <b> live-spot</b> basis off the pinned rows — 24h $78,204.40 → $77,792.01
                    = −0.5273%, 7d $77,624.49 → $77,792.01 = +0.2158% → +0.22%; the
                    monitor-perp basis would give +0.23% and is not used. The prior note is{' '}
                    <b>2026-08-27</b>; 08-28, 08-29 and 08-30 did not fire and were not
                    published, so every &ldquo;since the prior note&rdquo; figure here spans a{' '}
                    <b>four-calendar-session interval with only two archived endpoints</b>
                    (08-27 and 08-31) — the intraweek path is <b>NOT LOADED</b> and nothing
                    here is certified session by session
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · row <code>t = &ldquo;08-31 08:05&rdquo;</code> (BJ) = 2026-08-31 00:05Z</td>
                  <td className="dn-flag">
                    fresh · 1-min · anchor pinned by BJ label, per the UTC+8 landmine · all
                    horizons endpointed on this row: 24h = 1,441 rows to <code>08-30 08:05</code>,
                    7d = 10,081 unique labels (the file carries one duplicate label,
                    <code>08-27 14:53</code>, so the 7d slice is 10,082 rows over 10,080 minutes —
                    windowed means use the interval count, never the row count)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-31 00:01Z scan</td>
                  <td className="dn-flag">
                    rolling hourly artifact · <b>read from the dated archive
                    /opt/desk-note/snapshots/2026-08-31-0006/, not the live path</b>
                    (sha256 c2f9caa4…d99494) · in-progress bars on every TF · scan header prints
                    Beijing time (08:01) and its own spot $77,548 / 24h −0.82%, both of which
                    differ from the pinned tape anchor $77,792.01 / −0.53% — different venue and
                    clock, see §II
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-31 00:01Z (sha256 3420628a…41ff68)</td>
                  <td className="dn-flag">
                    4 min before the anchor · 1,026 instruments · Deribit index $78,196 vs live
                    $77,792.01 · <b>gex_summary.json copied byte-identical into the same dated
                    archive</b> (sha256 8e456831…c9aac0) before the rolling path&rsquo;s next
                    hourly overwrite, pinning net_gex $184,300,674.64 · 31AUG26 is
                    <b>UNSETTLED</b> at this anchor and settles 08:00Z today, 7h59m later
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">cross_asset_correlation_summary.md · 2026-08-31 00:01Z</td>
                  <td className="dn-flag">4 min before the anchor · 7d 1h bars · 22 assets · 168 rows · archived copy read</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-30 22:17Z render</td>
                  <td className="dn-flag">
                    1h48m render lag · <b>the daily FRED rows carry Friday 2026-08-28 closes</b>,
                    so they are ~2 calendar days stale at a Monday anchor — normal for a weekend
                    note, but it means nothing here reflects the 08-30 23:47Z crypto flush ·
                    NFCI flagged stale 9d at source
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix + RV</td>
                  <td className="dn-v-cell">parquet last bar 2026-08-31 00:05Z close $77,709.30</td>
                  <td className="dn-flag">
                    daily and weekly series computed on <b>settled</b> bars only — the last
                    completed daily and the last completed weekly are both the 2026-08-30 close
                    $77,634.60; the in-progress 08-31 bar is excluded from every MA and from RV ·
                    offsets recomputed vs live spot $77,792.01 · no lookahead
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle-floor watch</td>
                  <td className="dn-v-cell">weekly_200sma.json <b>ABSENT</b> — parquet fallback</td>
                  <td className="dn-flag">
                    the watch JSON is missing for a fourth note running · the floor, ratio and
                    percentile below are a <b>disclosed parquet recomputation</b>, not the
                    watch artifact · <b>no watch-state artifact is pinned in this cut</b>:
                    ma200w_trap_watch_state.json was not archived with the dated bundle and
                    the rolling copy has since been overwritten, so no cross-check against it
                    is claimed here · the only internal check is that the same parquet method
                    reproduces the prior-week value $64,269.62 for the week ended 08-23 from
                    the settled series itself
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale · monthly · flagged stale 90d at source · do not lean</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    order blotter / execution feed / position reconciliation
                  </td>
                  <td className="dn-v-cell">NOT LOADED in this cut</td>
                  <td className="dn-flag">
                    <b>material to this note</b> — §V records the <b>modeled/paper</b> resolution
                    of a desk instruction, inferred entirely from the price path. No submission
                    ID, working/cancelled flag, partial-fill record, average price, account
                    attribution or execution feed exists in this run, so order existence,
                    routing, status, quantity and ownership remain unverifiable and every R
                    figure below inherits the modeled label
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT · max-pain · per-strike IV · BTC/NQ ratio
                  </td>
                  <td className="dn-v-cell">NOT LOADED in this cut</td>
                  <td className="dn-flag">btc_ntt_analysis.html is JS-rendered and not extractable · claims explicitly framework-only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div className="dn-kv">
              <span className="dn-k">funding · 8h ann.</span>
              <span className="dn-v bull">+7.82%</span>
              <span className="dn-src">live raw 0.007143 × 1095 · 24h mean +9.180% ann, range +4.473% / +10.950% · <b>off the cap</b>: last capped row 2026-08-30 13:11Z, first below-cap 13:12Z → 654 rows / <b>653 elapsed minutes = 10h53m</b> = 1.505× the 434-minute gate · 0 negative rows in 1,441 and 0 in 10,080 — see §I for why the gate is being retired</span>
            </div>
            <div className="dn-kv">
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+9.10% → +7.82% · cap occupancy 527 / 1,441 (36.6%)</span>
              <span className="dn-src"><b>classifier, stated once and used everywhere:</b> capped = raw funding <b>exactly 0.010000</b> as printed (no tolerance band); an episode is a maximal run of consecutive one-minute intervals on one side, no merging and no minimum duration; the duplicate label <code>08-27 14:53</code> is de-duplicated to its first occurrence, giving 10,080 intervals; elapsed minutes = rows − 1 · on that convention 7d occupancy is <b>4,593 / 10,080 = 45.6%</b>, down from a welded 100% two weeks ago · <b>20 capped runs (19 beginning inside the window) and 7 below-cap runs ≥ 200 rows</b>, longest release 34h55m (08-26 04:00 → 08-27 14:55 BJ) · five completed releases <b>met or exceeded</b> 434 elapsed minutes and <b>all five re-pinned</b></span>
            </div>
            <div className="dn-kv">
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−1.19% (−1,286.3 BTC) → 106,412.2</span>
              <span className="dn-src">live · contracted into a −0.53% session · 7d <b>+866.3 / +0.82%</b> net, but the weekly peak 110,024.0 @08-28 05:28Z is <b>−3,611.8 / −3.28%</b> above here and the trough 104,972.3 @08-27 08:44Z is below — gross opens, closes and account-level turnover are NOT observable in this feed</span>
            </div>
            <div className="dn-kv">
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bull">51.95 / 48.05</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · <b>de-crowded −2.34pt</b> off 54.29% at the 24h endpoint · 7d +0.26pt (51.69% → 51.95%), so flat across the week and lower only across the day · 7d peak 54.77% @08-29 19:12Z, 7d trough <b>45.96%</b> @08-25 04:11Z</span>
            </div>
            <div className="dn-kv">
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">+26,563.9 (net LONG)</span>
              <span className="dn-src">live · long 35,658.2 − short 9,094.3 · long_traders 4,870 / short_traders 1,420 · the <b>step-free</b> 17h24m window from 08-30 06:41Z shows SM <b>trimming −128.5 / −0.48%</b> into a −0.63% price leg — the only clean read available</span>
            </div>
            <div className="dn-kv">
              <span className="dn-k">SM Δ · 24h</span>
              <span className="dn-v bear">+1,615.3 · <b>NOT CERTIFIABLE</b></span>
              <span className="dn-src">|Δ| / prior_net = 1,615.3 / 24,948.6 = <b>6.47%</b> · but the single 08-30 06:41Z minute supplies <b>+1,441.3 = 89.23% of |Δnet|</b> with long_traders 4,251 → 4,931 (+680) and short_traders 1,372 → 1,480 in one row — the recurring roster re-sync, cause NOT LOADED, no mechanism named · certifiable on 08-27 at 16.34%, uncertifiable again today</span>
            </div>
            <div className="dn-kv">
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v bear">42.0% / 42.18% · spread <b>−0.18pt</b></span>
              <span className="dn-src">GEX chain-median across 1,026 instruments — <b>a median across a chain, NOT a tradable spread</b> · RV close-to-close on daily closes through the settled 08-30 close, no lookahead · the vol risk premium has gone <b>NEGATIVE</b>: from +3.30pt at the 08-27 anchor to −0.18pt, of which IV supplies 89.1% and RV 10.9% · IV card rounds to 0.1pt = ±5 volatility bp, so the spread is −0.13 to −0.23pt: sign resolvable, magnitude small</span>
            </div>
            <div className="dn-kv">
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+17.59% above (spot basis)</span>
              <span className="dn-src">flip $66,152.87, up +$1,571.80 from $64,581.07 on 08-27 · <b>both references agree in sign</b>: vs live spot $77,792.01 spot is +17.59% above and a <b>14.96%</b> decline reaches it; vs the file&rsquo;s own Deribit index $78,196 it is +18.21%, which is the +18.2% the card prints · footed aggregate +184.30M, still deeply positive</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The framework did everything it was written to do, and the week still
                closed flat.
              </span>{' '}
              Eight hours and three minutes after the <b>00:05Z analytical anchor</b> the
              08-27 note&rsquo;s partial-target rule was written against — <b>not</b> after
              publication, for which no deployment or availability record is loaded in this
              run — the tape traded{' '}
              <span className="dn-tag bull">$79,600 @2026-08-27 08:08Z</span>; seventy-two
              minutes after that it took the{' '}
              <span className="dn-tag bull">$80,000 first target @09:20Z</span>; the run
              topped at <span className="dn-tag bull">$81,500.00 @2026-08-28 01:33Z</span>,
              a <span className="dn-tag">+3.468R gross</span> modeled excursion. Then it
              gave all of it back. The W-SUN week that contained the whole thing closed{' '}
              <span className="dn-tag bear">$77,634.60</span> against the prior week&rsquo;s{' '}
              <span className="dn-tag">$77,719.10</span> —{' '}
              <span className="dn-tag bear">−$84.50 / −0.11%</span> week over week, after a{' '}
              <span className="dn-tag">+23.61%</span> week before it. Inside that flat
              print the tape covered{' '}
              <span className="dn-tag">$81,500.00 / $76,649.00, a 6.33% range</span>. The
              rule the desk wrote on 08-27 was written <em>before</em> the approach and it
              banked the half it was designed to bank — but it never said what the
              remainder does, and on the three defensible readings of its own text the
              same tape resolves to{' '}
              <span className="dn-tag">+0.53R, +0.74R or +1.68R gross</span>, a{' '}
              <span className="dn-tag bear">3.18× spread</span>. That is the finding of
              this note, and it is a bigger one than the P&amp;L. Underneath it the map
              deteriorated: the dealer clamp eased{' '}
              <span className="dn-tag">+287.90M → +184.30M footed</span> across a
              four-session interval whose three middle panels were never archived, and the
              strikes <em>beneath</em> the market — the ones the 08-27
              note recorded as having repaired — collapsed, with the 22 common sub-spot
              strikes going <span className="dn-tag bear">+21.485M → −26.608M</span> and{' '}
              <span className="dn-tag bear">$77,000 falling −0.36M → −10.63M</span> to
              become the largest negative wall on the board,{' '}
              <span className="dn-tag">$792.01 under spot</span>. Twelve minutes before the
              weekly settle the tape printed{' '}
              <span className="dn-tag bear">$76,947.20 @08-30 23:47Z</span> — through the
              stop level by $301.22 on a print basis (the deeper 08-28 low $76,853.10 went
              $395.32 through), never once on the 1d-close basis the stop was actually
              written on — and recovered $687.40 into the close. Funding
              is off the cap for the sixth time this week on the 434-minute reading; the
              first five all re-pinned.
            </p>

            <h2 className="dn-sec">
              Positioning{' '}
              <span className="dn-roman">I</span> · funding is off the cap and the
              434-minute gate is being RETIRED, 0-for-5 on the week · SM uncertifiable
              again on a one-minute roster step · OI contracted into a down-session ·
              retail flat on the week, lower on the day
            </h2>
            <p>
              Funding prints <span className="dn-tag bull">+7.8216% ann</span> at the
              anchor (raw 0.007143 × 1095), 24h mean{' '}
              <span className="dn-tag">+9.180%</span> across a{' '}
              <span className="dn-tag">+4.473% / +10.950%</span> range. The +10.95% weld
              that defined 08-21 through 08-24 is gone: cap occupancy is{' '}
              <span className="dn-tag">527 / 1,441 rows (36.6%)</span> on the day and{' '}
              <span className="dn-tag">4,593 / 10,080 (45.6%)</span> on the week. Both
              counts use one stated classifier — <b>capped = raw funding exactly 0.010000
              as printed</b>, no tolerance band, episodes are maximal same-side runs with no
              merge rule and no minimum duration, the duplicate <code>08-27 14:53</code>
              label de-duplicated to its first occurrence, elapsed minutes = rows − 1. A
              looser <code>≥ 0.00999</code> classifier would print 4,617 / 45.8% instead;
              that convention is <b>not</b> used here, and every occupancy, episode count and
              release duration below is on the exact-cap convention. Not one row of either
              window is negative, so there is no sign-flip and no event-trigger from this
              side.
            </p>
            <p>
              <span className="dn-signal">
                The de-crowding gate has to be retired, and the reason is arithmetic rather
                than judgement.
              </span>{' '}
              The 08-26 note re-specified it at{' '}
              <span className="dn-tag">434 elapsed minutes</span> off the cap, taking the
              length of the then-completed release as the threshold. This week the tape ran{' '}
              <span className="dn-tag">20 capped runs — 19 of them beginning inside the
              window — and 7 below-cap runs of ≥ 200 rows</span>. Five of those releases{' '}
              <b>met or exceeded</b> 434 elapsed minutes — the first is exactly 434, so
              &ldquo;past&rdquo; would exclude it —{' '}
              <span className="dn-tag">434m, 2,095m, 437m, 626m, 471m</span> — and{' '}
              <span className="dn-tag bear">every single one re-pinned to the cap</span>.
              The current run is the sixth: last capped row{' '}
              <span className="dn-tag">2026-08-30 13:11Z</span>, first below-cap{' '}
              <span className="dn-tag">13:12Z</span>, 654 rows /{' '}
              <span className="dn-tag">653 elapsed minutes = 10h53m</span> = 1.505× the
              gate. A threshold crossed five times and reversed five times inside seven days
              is not a regime marker; it is a sampling artifact of an intermittent series,
              and the 08-27 note&rsquo;s &ldquo;28h06m off the cap = 3.88× the gate&rdquo;
              was a description of one long run, not evidence of a regime. It is recorded
              here as a <b>new open design defect</b> and the gate does not gate anything in
              §VI.
            </p>
            <p>
              <span className="dn-signal">The SM tape is NOT CERTIFIABLE again.</span> Net
              reads <span className="dn-tag">+26,563.9 BTC</span> (long 35,658.2 − short
              9,094.3) against <span className="dn-tag">+24,948.6</span> at the 24h
              endpoint, a Δ of <span className="dn-tag">+1,615.3</span> and a cut fraction
              of <span className="dn-tag">1,615.3 / 24,948.6 = 6.47%</span>. But a single
              minute, <span className="dn-tag bear">2026-08-30 06:41Z</span>, supplies{' '}
              <span className="dn-tag bear">+1,441.3 = 89.23% of |Δnet|</span>, with
              long_traders stepping <span className="dn-tag">4,251 → 4,931</span> and
              short_traders <span className="dn-tag">1,372 → 1,480</span> in one row. That
              is the same shape as the 08-23, 08-24, 08-25 and 08-26 discontinuities and it
              lands in the same 06:21Z–07:06Z band. The upstream cause is{' '}
              <b>NOT LOADED</b> and no mechanism is named here. The 08-27 note certified the
              tape at 16.34% concentration; one clean session does not make the feed sound,
              and this row proves it. The only honest read is the{' '}
              <span className="dn-tag">step-free 17h24m window</span> from that minute to
              the anchor, in which SM <span className="dn-tag bear">TRIMMED −128.5 /
              −0.48%</span> while price fell −0.63% — small, and in the direction of the
              tape rather than against it.
            </p>
            <p>
              OI ends at <span className="dn-tag">106,412.2 BTC</span>,{' '}
              <span className="dn-tag bull">−1,286.3 / −1.19%</span> on the day into a
              −0.53% session, and <span className="dn-tag">+866.3 / +0.82%</span> on the
              week. The weekly net understates the path: OI peaked{' '}
              <span className="dn-tag">110,024.0 @08-28 05:28Z</span> — four hours after the
              $81,500 high — and has bled{' '}
              <span className="dn-tag">−3,611.8 / −3.28%</span> off that peak, with the
              weekly trough <span className="dn-tag">104,972.3 @08-27 08:44Z</span> sitting
              <em> below</em> where it ends. Gross opens, closes and account-level turnover
              are not observable in this feed, so deleveraging offset by replacement
              leverage prints identically to a quiet book. Retail sits{' '}
              <span className="dn-tag">51.95%</span>: de-crowded{' '}
              <span className="dn-tag bull">−2.34pt</span> off 54.29% at the 24h endpoint,
              but <span className="dn-tag">+0.26pt</span> across the week from 51.69% — flat
              on the week, lower on the day only. The 7d peak was{' '}
              <span className="dn-tag">54.77% @08-29 19:12Z</span> and the trough{' '}
              <span className="dn-tag">45.96% @08-25 04:11Z</span>, the lowest reading of
              the run. Spot CVD ran <span className="dn-tag bear">−547.2</span> and futures
              CVD <span className="dn-tag bear">−1,554.9</span> on the day against a big-net
              sum of <span className="dn-tag">+87.18 across 570 prints</span> — selling in
              the aggregate flow, mild buying in the size prints.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II</span> · the first SHORT reading in the MTF
              sequence · six bearish divergences clustered on 15m–12h · the weekly close
              FAILED W-SMA150 by $148.26 while spot sits $9.15 over it · 17-of-20 MA cells,
              down from 18 · the 1d TD9 SELL has reset
            </h2>
            <p>
              Spot is <span className="dn-tag">$77,792.01</span>,{' '}
              <span className="dn-tag bear">−0.5273%</span> on the exact 1,441-row window,
              sitting at <span className="dn-tag">27.83%</span> of the 24h range. Both bases
              are printed because they differ by a minute and by venue: exchange bars give a
              24h high <span className="dn-tag">$79,384.40 @2026-08-30 16:57Z</span> and low{' '}
              <span className="dn-tag">$76,947.20 @23:47Z</span>; the monitor tape gives{' '}
              <span className="dn-tag">$79,346.00 @16:58Z</span> and{' '}
              <span className="dn-tag">$77,192.77 @23:48Z</span>. The MTF scan header
              carries its own third pair, $77,548 spot and −0.82% on 24h, which is a
              different clock and venue and is not reconciled to the anchor.
            </p>
            <p>
              <span className="dn-signal">
                The MTF aggregate prints a short for the first time in this sequence.
              </span>{' '}
              The file&rsquo;s own header reads{' '}
              <span className="dn-tag">5 long / 1 short / 4 neutral</span> across ten
              timeframes; summing the per-TF bias column gives{' '}
              <span className="dn-tag">3 长 / 1 空 / 4 警示 / 2 震荡</span>. Both conventions
              are printed and both produce <b>exactly one short — the 15m</b>. That matters
              only because 08-23 (6/0/4), 08-24 (8/0/2), 08-25 (9/0/1) and 08-27 (8/0/2) all
              produced <em>zero</em> shorts on either count. The net reading is{' '}
              <span className="dn-tag">higher-TF long, short-TF pullback</span>, with an
              explicit warning flag for a{' '}
              <span className="dn-tag bear">higher-TF bearish-divergence cluster on
              8h/12h</span>. Six bearish divergences are active —{' '}
              <span className="dn-tag bear">15m / 30m / 1h / 4h / 8h / 12h</span> — against
              three bullish on 30m/1h/4h. A <span className="dn-tag bear">1h above-water
              death cross</span> printed two bars ago at close $77,562 with DIF +158.6, and
              the momentum regime holds at <span className="dn-tag">7 of 9 TFs JT ≥ 0</span>.
              Cutting the other way, the short end is washed out and turning: RSI reads{' '}
              <span className="dn-tag">27.6 / 26.1 / 34.0</span> on 15m/30m/1h, a{' '}
              <span className="dn-tag bull">30m TD9 BUY</span> has printed at $77,562, and
              15m is one bar from its own. The <span className="dn-tag bull">1d TD9 SELL that
              stood as a standing objection on 08-25 and 08-27 has reset</span> — the daily
              now carries a Buy-4 setup, with Sell-5 on 3d, Sell-3 on 1w and Sell-1 on 1M.
            </p>
            <p>
              The full matrix, Daily and Weekly × SMA and EMA × n ∈ {'{'}20, 50, 100, 150,
              200{'}'}, computed on settled bars only (the last completed daily bar and the
              last completed weekly bar are the same print, the 2026-08-30 close
              $77,634.60) and offset against live spot $77,792.01. <b>Daily is 10-of-10
              above</b>: SMA20 $71,717.29 (+8.47%), SMA50 $67,294.85 (+15.60%), SMA100
              $66,233.09 (+17.45%), SMA150 $69,606.96 (+11.76%), SMA200 $69,366.34
              (+12.15%), EMA20 $73,537.33 (+5.79%), EMA50 $69,316.75 (+12.23%), EMA100
              $68,674.04 (+13.28%), EMA150 $70,123.63 (+10.94%), EMA200 $72,171.00 (+7.79%).{' '}
              <b>Weekly is 7-of-10</b>: SMA20 $69,855.74 (+11.36%), SMA50 $81,033.20{' '}
              <b>(−4.00%)</b>, SMA100 $88,961.88 <b>(−12.56%)</b>, SMA150 $77,782.86
              (+0.01%), SMA200 $64,554.72 (+20.51%), EMA20 $70,084.86 (+11.00%), EMA50
              $77,263.56 (+0.68%), EMA100 $78,430.85 <b>(−0.81%)</b>, EMA150 $73,934.18
              (+5.22%), EMA200 $68,699.44 (+13.24%). Total{' '}
              <span className="dn-tag">17 of 20 cells positive</span>, down from the 18-of-20
              the 08-25 note recorded — and the cell that flipped back is{' '}
              <span className="dn-tag bear">W-EMA100</span>, the exact level whose clearance
              on the 08-24 daily close fired the 08-25 disposal rule. That clearance has been
              given back.
            </p>
            <p>
              <span className="dn-signal">
                The weekly settle failed W-SMA150 and spot has crept nine dollars back over
                it.
              </span>{' '}
              This is a knife-edge that has to be stated on both bases or not at all. The
              W-SUN close <span className="dn-tag">$77,634.60</span> is{' '}
              <span className="dn-tag bear">$148.26 BELOW</span> W-SMA150 $77,782.86
              (−0.19%); live spot <span className="dn-tag">$77,792.01</span> is{' '}
              <span className="dn-tag bull">$9.15 ABOVE</span> it (+0.0118%). Five minutes
              of tape separate the two readings and they disagree in sign. Nothing should be
              built on a $9.15 margin, and nothing is. Above it sits a lid three deep and
              cheap to reach: D-EMA400 <span className="dn-tag">$78,241.52 (−0.57%)</span>,
              W-EMA100 <span className="dn-tag">$78,430.85 (−0.81%)</span>, then a gap to
              W-SMA50 <span className="dn-tag">$81,033.20 (−4.00%)</span>.
            </p>
            <p>
              <span className="dn-signal">The cycle floor, on the parquet fallback.</span>{' '}
              weekly_200sma.json is absent for a fourth note running, so this is a
              recomputation and is labelled as one. W-SMA200 stands at{' '}
              <span className="dn-tag">$64,554.72</span>, advancing{' '}
              <span className="dn-tag">+$285.10/wk</span> from $64,269.62 for the week ended
              08-23 — that prior value is recomputed from the same settled parquet series and
              is the only internal check available, because no watch-state artifact was
              archived with this bundle and the rolling copy has since been overwritten. No
              claim is made against a server file here. The settled ratio is{' '}
              <span className="dn-tag">1.202617</span>; spot sits{' '}
              <span className="dn-tag">+20.51%</span> over the floor and a{' '}
              <span className="dn-tag">17.02%</span> decline reaches it. The percentile is
              published with its convention named, because the denominators differ:{' '}
              <span className="dn-tag">37 of 166 settled weekly ratios are strictly
              lower = 22.3%</span> (against prior observations only, 37/165 = 22.4%), and
              the insertion rank is <span className="dn-tag">38 / 166 = 22.9th</span> — 166
              is the count of settled weekly ratios <em>including</em> current, so current is
              inserted once, not twice.{' '}
              <span className="dn-tag">10 of 166 = 6.0%</span> of weekly closes have ever
              settled below the floor. The 08-30 close is the{' '}
              <span className="dn-tag bull">second consecutive weekly close above</span> it,
              streak starting 2026-08-23.
            </p>

            <h2 className="dn-sec">
              Dealer map{' '}
              <span className="dn-roman">III</span> · the clamp EASED −103.60M to +184.30M
              footed across a four-session interval with only two archived endpoints —
              lowest since the 08-19 panel, NOT a lineage low ·
              the sub-spot floor the 08-27 note called repaired has COLLAPSED · $77,000 is
              now the largest negative wall, $792.01 under spot · the front strip is
              negative
            </h2>
            <p>
              Three bases, none of them equal, all three printed. The{' '}
              <b>footed by-expiry strip</b> is <span className="dn-tag">+184.3007M</span>,
              which reconciles to the penny with the pinned{' '}
              <code>net_gex $184,300,674.64</code>. The <b>1D strike profile</b> sums to{' '}
              <span className="dn-tag">+179.4597M</span> and the <b>headline card</b> reads{' '}
              <span className="dn-tag">+171.1M</span>. The footed strip is{' '}
              <span className="dn-tag">+$4.8410M above the profile</span> and{' '}
              <span className="dn-tag">+$13.2007M above the headline</span> — not
              equidistant, and the footed basis is used throughout for lineage comparability.
            </p>
            <p>
              <span className="dn-signal">The clamp eased hard, but the ordinal is narrower
              than the number looks.</span>{' '}
              Footed, it moved <span className="dn-tag">+287.8980M (08-27) → +184.3007M</span>,
              a change of <span className="dn-tag bear">−103.5973M</span>. That is an{' '}
              <b>interval change across four sessions, not a single-session step</b> —
              08-28, 08-29 and 08-30 produced no note and no archive, so the intraweek path
              is <b>NOT LOADED</b> and no claim is made about how it got here. On level, the
              reading is the <b>lowest since the 08-19 panel</b> and{' '}
              <b>NOT a lineage low</b>: the archived August ledger holds 08-17 <b>+28.06M</b>,
              08-18 <b>+128.85M</b> and 08-19 <b>+128.94M</b> below it, against 08-20
              +254.15M, 08-22 +249.91M, 08-23 +242.37M, 08-24 +247.69M, 08-25 +256.84M,
              08-26 +252.35M and 08-27 +287.90M above — <b>ten prior comparison panels</b>
              (three below, seven above), not the lineage.
            </p>
            <p>
              <span className="dn-signal">
                The floor under the market did not just fail to hold — it inverted, and the
                08-27 note said the opposite.
              </span>{' '}
              That note recorded the strikes beneath the stop as having{' '}
              <em>repaired</em>, and called the R/R &ldquo;computed against a floor that is
              better defended than when it was set.&rdquo; On this panel that is simply no
              longer true and it is not defended here. The two profiles carry 49 points each
              but not the same 49 — 73,500 and 102,000 dropped out, 59,000 and 93,000 came
              in — so every comparison below is restricted to the <b>47 common strikes</b>.
              Below spot, 22 common strikes went{' '}
              <span className="dn-tag bear">+21.485M → −26.608M, a −48.093M swing, with 19 of
              22 lighter</span>. Named:{' '}
              <span className="dn-tag bear">$77,000 −0.3640M → −10.6281M</span> (now the
              largest negative wall on the board, sitting{' '}
              <span className="dn-tag">$792.01 under spot</span>),{' '}
              <span className="dn-tag bear">$77,500 −1.1818M → −6.1786M</span>,{' '}
              <span className="dn-tag bear">$75,000 +3.7781M → −8.1110M</span> and{' '}
              <span className="dn-tag bear">$73,000 +1.5349M → −4.1417M</span>, the last two
              flipping sign outright. The <b>$78,000 shelf the retest-hold long was anchored
              to more than halved</b>,{' '}
              <span className="dn-tag bear">+29.7154M → +13.0045M</span>. Above spot the
              picture is softer but not the reverse image: 25 common strikes went{' '}
              <span className="dn-tag">+259.019M → +206.099M (−52.921M)</span> on an{' '}
              <b>11-heavier / 14-lighter</b> split, so it is an aggregate and not a
              universal — $82,000 added <span className="dn-tag bull">+5.5600M</span> to
              become the new top wall and $84,000 added +1.7019M, while $80,000 shed −19.2456M
              and $79,000 shed −15.1869M.
            </p>
            <p>
              The top ten now foot <span className="dn-tag">+151.4736M = 84.41% of the
              profile</span> and, for the first time in this sequence,{' '}
              <b>two of them are negative</b>: $82,000 +46.60M, $80,000 +32.82M, $85,000
              +26.80M, $84,000 +16.79M, $90,000 +16.67M, $78,000 +13.00M,{' '}
              <b>$77,000 −10.63M</b>, $100,000 +9.04M, $81,000 +8.49M,{' '}
              <b>$75,000 −8.11M</b>. On 08-27 all ten were positive. Across the whole
              profile 30 strikes sum +224.999M against 19 summing −45.540M. The 0-gamma flip
              lifted to <span className="dn-tag">$66,152.87</span> from $64,581.07, and both
              references agree in sign: spot is{' '}
              <span className="dn-tag">+17.59%</span> above it on the live basis, requiring
              a <span className="dn-tag">14.96%</span> decline to reach, and{' '}
              <span className="dn-tag">+18.21%</span> above on the file&rsquo;s own Deribit
              index $78,196 — the +18.2% its card prints.
            </p>
            <p>
              <span className="dn-signal">The front strip is negative, which is not a
              first.</span>{' '}
              <span className="dn-tag bear">31AUG26 reads −12.28M at 0.3 DTE</span> and{' '}
              <span className="dn-tag bear">1SEP26 −4.53M at 1.3 DTE</span>; the front four
              foot <span className="dn-tag bear">−16.68M</span> against a single positive
              +14.14M front on 08-27. Two consecutive negative fronts have printed before in
              this same archive — 1AUG/2AUG at −5.20M/−3.40M on the 08-01 panel, and
              11AUG/12AUG at −11.62M/−2.83M on the 08-11 panel — so the <em>pattern</em> is
              not new. What is new is the depth: <b>−12.28M is the most negative front of
              all 27 archived August panels</b>, beating 08-11&rsquo;s −11.62M by 0.66M. And
              31AUG26 is <b>UNSETTLED at this anchor</b>, settling 08:00Z today, 7h59m after
              the snapshot — a short-dated negative-gamma pocket that clears within the
              session. Behind it the strip is carried by{' '}
              <span className="dn-tag">25SEP26 +99.19M = 53.8% of the footed total</span> at
              25.3 DTE, then 25DEC26 +35.87M and 4SEP26 +30.42M. Those are snapshots at
              current IV, not guaranteed roll-offs. Call OI 253,212 against put OI 143,395
              gives a put/call of <span className="dn-tag">0.57</span>, down from 0.59.
            </p>
            <p>
              Chain-median IV has fallen to{' '}
              <span className="dn-tag">42.0% across 1,026 instruments</span> — a median
              across a chain, not a tradable spread — against 30D close-to-close RV of{' '}
              <span className="dn-tag">42.1772%</span> computed on daily closes through the
              settled 08-30 close.{' '}
              <span className="dn-signal">The vol risk premium has gone negative.</span> On
              aligned as-of times with no lookahead, the 08-27 anchor carried IV 45.1%
              against RV 41.7978% for <span className="dn-tag">+3.3022pt</span>; today the
              spread is <span className="dn-tag bear">−0.1772pt</span>, a −3.4794pt
              compression of which <b>IV supplies 89.1%</b> (−3.10pt) and RV 10.9%
              (+0.3794pt). The IV card rounds to a tenth, so it carries ±5 volatility basis
              points: the true spread lies in −0.13 to −0.23pt. The <em>sign</em> is
              resolvable at that precision; the magnitude is small enough that it should be
              read as &ldquo;implied has converged to realized,&rdquo; not as a rich short-vol
              signal.
            </p>

            <h2 className="dn-sec">
              Macro &amp; cross-asset{' '}
              <span className="dn-roman">IV</span> · the rates episode has fully unwound and
              ONE NEW episodic flag now sits alongside ONE CARRIED one, pointing in OPPOSITE
              directions · the dollar regime flipped
              to TIGHT · the BTC-over-equities gap collapsed from 13.86pt to 0.20pt as the
              vertical week rolled out
            </h2>
            <p>
              The panel renders 2026-08-30 22:17Z and its daily FRED rows carry Friday
              2026-08-28 closes, so nothing in it has seen the 08-30 23:47Z flush. Tier 1:
              10Y nominal <span className="dn-tag">4.67%, +1.0bp, regime z +1.78, episodic
              +0.00</span> — the 08-25 spike (z +2.19, episodic) is now{' '}
              <b>completely unwound</b>, and +1.78 is the highest <em>fresh daily</em> Tier-1
              regime z on the board. TIPS real{' '}
              <span className="dn-tag">2.34%, 0.0bp, z +1.68</span> has{' '}
              <b>EXITED episodic</b> (−1.91 → −1.44). 5Y5Y breakeven 2.32%, −3.0bp, z +1.46.
              Both rates rows still classify RISK-OFF on regime, but neither is episodic any
              more.
            </p>
            <p>
              <span className="dn-signal">
                One new episodic flag plus one carried episodic flag, and they disagree with
                each other.
              </span>{' '}
              Only HY is new. HY credit spread compressed to{' '}
              <span className="dn-tag bull">2.63%, −4.0bp, z −1.44, episodic −1.77</span> —
              <b> newly episodic</b> and RISK-ON, against a non-episodic −0.71 on 08-27. Fed
              net liquidity is <span className="dn-tag bear">$5.779T, −0.012T, z −1.23,
              episodic −2.47</span> — <b>carried, not new</b>: it was already episodic at
              −2.45 on the dated 08-27 panel and is still draining, still episodic, RISK-OFF. Credit is easing while
              the Fed&rsquo;s balance sheet drains. These are separated rather than netted
              into a single regime word, because they are not the same signal. Alongside
              them the dollar regime <b>flipped</b>: DXY{' '}
              <span className="dn-tag">98.90 → 99.70 (+0.80), z −0.09 → +0.60</span>,
              reclassified from <em>neutral</em> to <b>tight</b>, and USD/JPY pushed through
              160 to <span className="dn-tag">160.12 (+0.91)</span>. NFCI holds −0.566
              (RISK-ON, flagged stale 9d), MOVE 69.9 neutral, USD/CNY 6.7208 has itself
              exited episodic. JGB 10Y reads 2.67% at z +2.42 EXTREME RISK-OFF and is{' '}
              <b>stale monthly, flagged 90d at source — do not lean on it</b>.
            </p>
            <p>
              The correlation regime stays <span className="dn-tag">IDIOSYNCRATIC at mean
              |r| 0.204</span> off-diagonal, loosening from the 08-27 note&rsquo;s 0.182 but
              still far under the 0.25 threshold.{' '}
              <span className="dn-signal">
                What changed is the ordering: the equity block has climbed back above the
                metals block.
              </span>{' '}
              BTC now ranks <span className="dn-tag">TSLA +0.450, NQ +0.405, SP500
              +0.383</span>, all three above <span className="dn-tag">GOLD +0.357</span>,
              with NVDA +0.346, SILVER +0.329, PLAT +0.323 and JP225 +0.319 behind. Prior
              notes in this run recorded the opposite — metals outranking the equity indices
              — and that has reversed. It remains{' '}
              <b>co-movement only: it identifies neither a driver nor hedge effectiveness</b>,
              and the BTC/NQ ratio series is NOT LOADED. Most consequentially, the
              outperformance gap is gone: over the 7d window BTC returns{' '}
              <span className="dn-tag">−0.21%</span> against NQ{' '}
              <span className="dn-tag">−0.41%</span>, a spread of{' '}
              <span className="dn-tag">0.20pt</span> where the 08-27 note carried 13.86pt and
              the 08-24 note 26.09pt. Nothing converged; the +23.61% week simply rolled out
              of the trailing window.
            </p>

            <h2 className="dn-sec">
              The book{' '}
              <span className="dn-roman">V</span> · the modeled long RESOLVED — $79,600
              partial and $80,000 target both traded 8h03m and 9h15m after the 08-27 note&rsquo;s
              00:05Z ANALYTICAL ANCHOR, not after publication (no deploy record is loaded) ·
              MODELED/PAPER throughout, no blotter · the framework still does not
              say what the remainder does, and the same tape resolves three ways across a
              3.18× spread
            </h2>
            <p>
              The 08-27 note carried a <b>modeled/paper</b> 0.2R long at an instructed limit
              of <span className="dn-tag">$78,200</span>, stop{' '}
              <span className="dn-tag">1d close &lt; $77,248.42</span> for{' '}
              <span className="dn-tag">$951.58 of risk</span>, first target{' '}
              <span className="dn-tag">$80,000</span> then W-SMA50, and it added a new rule
              at the point of writing: <em>&ldquo;take half at $79,600 and trail the
              remainder to breakeven $78,200.&rdquo;</em> That rule was written{' '}
              <b>before</b> the approach and it was tested{' '}
              <span className="dn-tag">8 hours 3 minutes after that note&rsquo;s 00:05Z
              analytical anchor</span>. Every elapsed-time figure in this section is measured
              from that anchor, which is the timestamp the rule was written against — it is{' '}
              <b>not</b> a publication or deployment time. No deploy record, availability log
              or publish timestamp is loaded in this run, and file and commit times for the
              08-27 note fall <em>after</em> 00:05Z, so the anchor must not be read as the
              moment the note became public. Everything about the price path is now closed
              history, and none of it is broker-confirmed.
            </p>
            <p>
              <span className="dn-signal">The path, on the exchange-bar basis.</span>{' '}
              $79,600 first traded on the{' '}
              <span className="dn-tag bull">2026-08-27 08:08Z bar (high $79,653.40)</span>,
              72 minutes before <span className="dn-tag bull">$80,000 on the 09:20Z bar
              (high $80,096.00)</span>. The run extended to{' '}
              <span className="dn-tag bull">$81,500.00 at 2026-08-28 01:33Z</span> —{' '}
              <span className="dn-tag">+$3,300.00 = +3.4679R gross</span>, or +0.6936R at
              0.2R sizing had the whole position been carried to the tick, which no rule
              instructed. It then reversed: breakeven $78,200 was re-touched at{' '}
              <span className="dn-tag bear">2026-08-28 16:01Z</span> and the stop{' '}
              <em>level</em> $77,248.42 was traded through 23 minutes later, with the
              deepest print <span className="dn-tag bear">$76,853.10 @16:25Z</span>,{' '}
              <span className="dn-tag">$395.32 below it</span>. Eleven one-minute bars
              printed at or under that level across 08-28 16:24Z → 08-30 23:49Z.{' '}
              <b>The stop never fired</b>, because it was written on a 1d-close basis and
              every daily close cleared it: 08-27 $80,208.90 (+$2,960.48), 08-28 $77,805.90
              (+$557.48), 08-29 $78,200.70 (+$952.28), 08-30 $77,634.60 (+$386.18). That the
              price basis saved the position is a fact about the basis, not a vindication of
              the level — a touch-basis stop would have taken it. Two prints are worth
              recording for the ledger: the{' '}
              <span className="dn-tag">08-29 daily close $78,200.70 cleared breakeven by
              $0.70</span>, and{' '}
              <span className="dn-tag bear">twelve minutes before the weekly settle the tape
              printed $76,947.20 @08-30 23:47Z</span>, $301.22 under the stop level, then
              recovered $687.40 to close the week at $77,634.60 on a final-hour range of
              $78,429.10 / $76,947.20 = $1,481.90.
            </p>
            <p>
              <span className="dn-signal">
                And here is the defect the 08-27 note believed it had closed.
              </span>{' '}
              That note declared the &ldquo;no instruction between entry and target&rdquo;
              gap closed by the partial rule. It is only <b>half</b> closed. The rule fixed
              the first half-lot and the stop placement; it never said what the{' '}
              <em>remainder</em> exits on, and it never gave the breakeven trail a price
              basis — the exact omission the desk recorded as defect (b) and declared closed
              on 08-25/08-26. Three readings of the desk&rsquo;s own written text are
              defensible, and they do not agree:
            </p>
            <div className="dn-lvls">
              <div>
                <span className="dn-lvl-k">(A) BE trail read on a TOUCH basis</span>
                <span className="dn-lvl-v">half at $79,600 (+$1,400) + remainder flat at $78,200, exit 08-28 16:01Z = <b>+0.7356R gross</b> = +0.1471R at 0.2R</span>
              </div>
              <div>
                <span className="dn-lvl-k">(B) BE trail inherits the stop&rsquo;s 1d-CLOSE basis</span>
                <span className="dn-lvl-v bear">half at $79,600 + remainder out on the 08-28 close $77,805.90 (−$394.10) = <b>+0.5285R gross</b> = +0.1057R at 0.2R</span>
              </div>
              <div>
                <span className="dn-lvl-k">(C) ADOPTED — remainder takes the standing first target</span>
                <span className="dn-lvl-v bull">half at $79,600 + remainder at $80,000 (+$1,800), exit 2026-08-27 09:20Z = <b>+1.6814R gross</b> = +0.3363R at 0.2R</span>
              </div>
              <div>
                <span className="dn-lvl-k">spread across the three</span>
                <span className="dn-lvl-v bear">+0.53R to +1.68R gross on identical tape = <b>3.18×</b> — this is the finding, not the P&amp;L</span>
              </div>
            </div>
            <p>
              <b>(C) is adopted</b>, on the narrow ground that the $80,000 first target was a
              standing written instruction that the partial rule never cancelled: that rule
              addressed a half-lot and a stop, not target cancellation. On the adopted
              reading the modeled position is <b>FLAT as of 2026-08-27 09:20Z</b> and the
              +3.468R peak two days later was never the desk&rsquo;s to claim. (A) and (B)
              are printed rather than suppressed because the text genuinely supports them,
              and a note that publishes only the flattering branch of its own ambiguity is
              not a record. Every figure above is <b>MODELED and unreconciled</b> — computed
              off the instructed $78,200 because no average price exists, from a run in which
              no order blotter, submission ID, working/cancelled flag, partial-fill record or
              execution feed has ever been loaded.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · retest-hold · <b>MODELED / PAPER · RESOLVED AND CLOSED</b> · 0.2R · unreconciled · both written price targets traded; no broker confirmation, order state or position reconciliation is loaded · book returns to FLAT on the adopted reading</span>
              <div className="dn-trade-name">
                Retest-hold long — the $79,600 partial and the $80,000 first target both traded within 9h15m of the 08-27 note&rsquo;s 00:05Z analytical anchor (not of publication; no deploy record is loaded), and the modeled book closes at +1.6814R gross
              </div>
              <div className="dn-thesis">
                The 08-27 note wrote the partial rule specifically because its absence had
                &ldquo;converted a +0.986R modeled excursion into nothing,&rdquo; and it
                insisted the rule apply to the next approach and not retroactively. That
                condition was honoured: the rule was written against the 00:05Z anchor and the
                tape did not reach $79,600 until 08:08Z — an anchor-to-touch gap, not a
                publication-to-touch gap, since no publish timestamp exists in this run. The
                method worked exactly as designed on
                the half it specified. It failed on the half it did not — the remainder had a
                stop with a basis, a trail without one, and a target that the trail may or
                may not have superseded. On the adopted reading the book is flat and the
                week&rsquo;s modeled result is <b>+1.6814R gross / +0.3363R at 0.2R
                sizing</b>. On the most conservative defensible reading it is +0.5285R gross.
                The desk does not get to pick after the fact, which is why the rule needed a
                remainder clause before the approach, not this paragraph after it.
              </div>
              <div className="dn-lvls">
                <div>
                  <span className="dn-lvl-k">status (desk instruction · MODELED, NOT broker-verified)</span>
                  <span className="dn-lvl-v">MODELED / PAPER · <b>CLOSED FLAT</b> at 2026-08-27 09:20Z on the adopted reading · no blotter, submission ID, working/cancelled flag, partial-fill record, average price, account attribution or execution feed is loaded in this cut — the tape trading through two written price levels proves marketability and proves nothing about order existence, routing, status, quantity or ownership</span>
                </div>
                <div>
                  <span className="dn-lvl-k">marketability evidence (NOT execution evidence)</span>
                  <span className="dn-lvl-v">1,320 exchange one-minute bars at or above $79,600 and 677 at or above $80,000 across the 08-27 00:05Z → 08-31 00:05Z window · first touches $79,600 @08-27 08:08Z (bar high $79,653.40) and $80,000 @09:20Z (bar high $80,096.00) · window high $81,500.00 @08-28 01:33Z · every one of these is a price-path fact</span>
                </div>
                <div>
                  <span className="dn-lvl-k">stop (never fired · basis-dependent)</span>
                  <span className="dn-lvl-v bear">1d close &lt; $77,248.42 — <b>never fired on its written basis</b>, lowest qualifying close 08-30 $77,634.60 = $386.18 clear · but <b>traded through on a print basis</b>: 11 bars at or under it, deepest $76,853.10 @08-28 16:25Z = $395.32 below, and again $76,947.20 @08-30 23:47Z twelve minutes before the weekly settle</span>
                </div>
                <div>
                  <span className="dn-lvl-k">modeled excursion</span>
                  <span className="dn-lvl-v">MFE $81,500.00 @08-28 01:33Z = +$3,300.00 = <b>+3.4679R gross</b> (unclaimable — no rule held the position there) · post-anchor MAE $76,853.10 @08-28 16:25Z = −$1,346.90 = −1.4154R gross · adopted realized <b>+1.6814R gross / +0.3363R at 0.2R</b> · all computed off the instructed $78,200, since no average price exists</span>
                </div>
                <div>
                  <span className="dn-lvl-k">the moving-MA target (defect (d) — moot, not closed)</span>
                  <span className="dn-lvl-v">the second target was W-SMA50, quoted at $81,784.71 on 08-25, $81,049.16 on 08-26 and $81,058.11 on 08-27; it now recomputes to <b>$81,033.20</b>. The position resolved on the fixed first target before this mattered, so the defect is <b>moot for this trade and still open as a method defect</b> — it was not fixed, it was outrun</span>
                </div>
                <div>
                  <span className="dn-lvl-k">gamma shelf under the old entry (08-27 watch · RESOLVED ADVERSELY)</span>
                  <span className="dn-lvl-v bear">$78,000 +29.7154M → <b>+13.0045M</b> · $77,500 −1.1818M → <b>−6.1786M</b> · $77,000 −0.3640M → <b>−10.6281M</b> · $75,000 +3.7781M → <b>−8.1110M</b>. The 08-27 note recorded this zone as repaired and called the R/R &ldquo;computed against a floor better defended than when it was set.&rdquo; <b>That read is now wrong and is withdrawn, not defended</b></span>
                </div>
                <div>
                  <span className="dn-lvl-k">do-not</span>
                  <span className="dn-lvl-v">do not re-enter on the fact that the framework paid; do not treat the unclaimed +3.468R peak as a sizing argument; do not read the −103.60M clamp easing as a short signal on its own — it is a dealer-book fact across four unarchived sessions, not a position input</span>
                </div>
              </div>
            </div>
            <p>
              <span className="dn-signal">
                Ledger · near-miss / disposal record · SIXTH EVENT ADDED, and the first
                modeled resolution to close.
              </span>{' '}
              The 08-27 note closed this ledger at{' '}
              <span className="dn-tag">5 events / 3 near-misses / 1 disposal / 1 modeled
              fill</span>. Today appends row 6 and changes nothing above it — rows 1–5 are
              dated history and are not reclassified, on the discipline the ledger exists
              for. The counts are now{' '}
              <span className="dn-tag">6 events / 3 near-misses / 1 disposal / 1 modeled
              fill / 1 modeled close</span>.
            </p>
            <div className="dn-lvls">
              <div><span className="dn-lvl-k">row 1 · 2026-08-23 (near-miss #1)</span><span className="dn-lvl-v">pullback long leg 2 — lowest exchange 1h close $76,020.30, $20.30 above the $76,000 band top</span></div>
              <div><span className="dn-lvl-k">row 2 · 2026-08-24 (near-miss #2)</span><span className="dn-lvl-v">pullback long first target $80,000 — 24h high $79,991.00, $9.00 short, on a framework that had never armed</span></div>
              <div><span className="dn-lvl-k">row 3 · 2026-08-25 (disposal)</span><span className="dn-lvl-v">pullback long RETIRED UNFILLED on the pre-committed disposal rule — no fill price exists, so no R figure is computed</span></div>
              <div><span className="dn-lvl-k">row 4 · 2026-08-26 (near-miss #3 · UNCHANGED)</span><span className="dn-lvl-v">retest-hold long ARMED and not filled by that note&rsquo;s anchor — post-arm low $78,351.00 vs the ≈$78,200 limit = $151.00. Keeps its near-miss classification permanently</span></div>
              <div><span className="dn-lvl-k">row 5 · 2026-08-27 (modeled fill)</span><span className="dn-lvl-v">row 4&rsquo;s framework resolved — the ≈$78,200 limit price traded on 08-26 at 12:30Z and swept $600.00 through, recorded as a modeled/paper fill of a desk instruction</span></div>
              <div><span className="dn-lvl-k">row 6 · 2026-08-31 (NEW · modeled close, first full resolution)</span><span className="dn-lvl-v bull">row 5&rsquo;s position resolved on its own written levels: $79,600 partial @08-27 08:08Z and $80,000 first target @09:20Z, modeled <b>+1.6814R gross / +0.3363R at 0.2R</b> on the adopted reading, +0.5285R on the most conservative. Stop never fired on its written 1d-close basis despite an 11-bar print-basis breach. <b>Unreconciled — no broker feed has ever been loaded into this run</b></span></div>
              <div><span className="dn-lvl-k">carried, unchanged</span><span className="dn-lvl-v">the 08-19 scout stays <b>EXPIRED UNFILLED</b> at 10.03R gross / ≈2.01R at stated 0.2R sizing, not re-litigated</span></div>
            </div>
            <p>
              <b>Open design defects, honestly scored.</b>{' '}
              <b>(a)</b> the net_btc gate remains unsound while the SM feed produces roster
              discontinuities — <b>re-confirmed today</b> at 89.23% single-minute
              concentration, one <em>checked note</em> after being certified — four calendar
              sessions, since 08-28/29/30 produced no note.{' '}
              <b>(b)</b> price basis on every gate — declared closed 08-25/08-26,{' '}
              <b>RECURS</b>: the breakeven trail &ldquo;$78,200&rdquo; carries no basis, and
              touch versus close is worth 0.21R gross here.{' '}
              <b>(c)</b> no instruction between entry and target — declared closed 08-27,{' '}
              <b>only half closed</b>: the partial rule specified a half-lot but not the
              remainder&rsquo;s exit, producing the 3.18× spread above.{' '}
              <b>(d)</b> a target quoted as a moving MA — <b>still open</b>, outrun rather
              than fixed.{' '}
              <b>(e)</b> execution state cannot be asserted from price-path data — applied
              throughout this note.{' '}
              <b>(f) NEW</b> — the 434-minute funding de-crowding gate went{' '}
              <b>0-for-5 this week</b>; it is retired as a gate rather than carried as a
              satisfied condition.
            </p>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI</span> · book FLAT on the adopted reading · a
              new framework is DEFINED and NOT ARMED with its basis, duration and remainder
              clause named in advance · chase-short stood down a seventh checked note, and
              this is the THIRD documented two-leg improvement — 08-23 first, 08-26 second —
              largest on the price leg
            </h2>
            <p>
              The book is <b>FLAT</b>, and it is flat because the framework closed on its own
              written levels rather than because the desk chose to stand aside. What is in
              front of it is genuinely two-sided and should be said that way. Against: the
              weekly settle <b>failed</b> W-SMA150 by $148.26, W-EMA100 has flipped back to a
              lid and taken the matrix from 18-of-20 to 17-of-20, six bearish divergences are
              clustered across 15m–12h with an explicit higher-TF warning on 8h/12h, the
              sub-spot gamma floor has inverted with the largest negative wall now $792.01
              under the market, and the front expiry is the most negative of 27 archived
              August panels. For: daily is still 10-of-10, spot is +20.51% over a cycle floor
              it has now closed above two weeks running, the 1d TD9 SELL objection has reset,
              short-TF RSI is washed out at 26–34 with a 30m TD9 BUY printed, funding is off
              the cap and retail de-crowded −2.34pt on the day, and implied has converged to
              realized rather than staying rich.
            </p>
            <p>
              <span className="dn-signal">
                A new framework is DEFINED and NOT ARMED, and this time the remainder clause
                is written before the approach.
              </span>{' '}
              <b>Long, reclaim-and-hold.</b> Arms only on{' '}
              <b>two consecutive settled exchange 1h closes ≥ $78,431</b> — above W-EMA100
              $78,430.85, the level whose loss is the actual structural change this week, on
              the exchange-bar basis, closes only, no wicks. Entry{' '}
              <b>≈$78,500 at 0.2R, no chase</b>. Stop{' '}
              <b>1d close &lt; $77,180</b> for ≈$1,320 of risk. <b>The stop does NOT sit
              below the recent print lows and that is stated plainly, not implied away:</b>{' '}
              it is <span className="dn-tag bear">$326.90 ABOVE the 08-28 low $76,853.10</span>{' '}
              and <span className="dn-tag bear">$232.80 ABOVE the 08-30 low $76,947.20</span>,
              so both of the last week&rsquo;s deepest paths would have crossed it on a print
              basis. The rule is written on a <b>1d-close basis</b> and neither of those days
              closed below it (08-28 $77,805.90, 08-30 $77,634.60), so the level survives on
              its own written basis only — a touch-basis reading would have taken it twice,
              and that is the risk being accepted, not a geometry claim. <b>Remainder clause,
              written now:</b>{' '}
              take half at <b>$79,600</b>, the remainder exits at{' '}
              <b>$81,000 fixed</b> — a fixed number, not an MA — and the trailing stop after
              the partial is <b>$78,500 on a 1d-close basis</b>, the basis named explicitly
              so touch-versus-close cannot be adjudicated after the fact. R/R on the
              remainder ≈1.89:1, arithmetic on chosen levels and not evidence.{' '}
              <b>Duration:</b> the instruction is held until the{' '}
              <b>2026-09-01 00:00Z daily close</b> and then lapses.{' '}
              <b>Disposal, pre-committed:</b> a 1d close below $77,180 retires it, and a 1d
              close above $81,000 without an arm retires it unfilled. It is <b>not armed</b>{' '}
              at this anchor — spot $77,792.01 is <b>$638.99 below the rounded trigger
              $78,431</b> ($638.84 below the underlying W-EMA100 $78,430.85) and no qualifying
              close exists.
            </p>
            <p>
              <span className="dn-signal">
                The chase-short is stood down for a seventh checked note — and both legs
                improved, which is the third documented time, not the first.
              </span>{' '}
              The superlative the desk reached for is <b>withdrawn</b>: this repository&rsquo;s
              own 08-26 note records that session as the <b>second</b> two-leg improvement and
              names <b>08-23 as the first</b> (price leg 18.84% → 17.48%, clamp +249.91M →
              +242.37M). The dated sequence is therefore <span className="dn-tag">08-23 first,
              08-26 second, 08-27 opposite-direction, 08-31 third</span>. What today can claim
              — and the basis is stated with it — is the <b>largest price-leg improvement of
              the documented run</b>: the price leg needs a{' '}
              <span className="dn-tag">14.96%</span> decline to reach the flip $66,152.87,
              against 18.10% on 08-27 — an improvement of{' '}
              <span className="dn-tag">3.14 percentage points</span>, against 08-23&rsquo;s
              1.36pt (18.84% → 17.48%) and 08-26&rsquo;s 0.62pt (18.92% → 18.30%). The gamma
              leg, which requires the footed
              aggregate to turn negative or collapse toward zero, moved{' '}
              <span className="dn-tag">−103.60M to +184.30M</span> across the four-session
              interval. On 08-27 the two legs moved in opposite directions; today they move
              together, toward the trade. It stays <b>stood down</b> anyway, and the reason is
              not stubbornness: <b>+184.30M is still deeply positive clamp</b>, 14.96% is
              still a very long way, and the improvement is measured across an interval whose
              intraweek path was never archived — three of its four sessions have no panel, so
              nothing here is certified session by session. Two legs moving the right way for
              one archived observation is a reason to keep watching, not a reason to be short.
            </p>
            <p>
              The right read for the week ahead is{' '}
              <em>the method is sound and the specification is not</em>. The framework
              written on 08-27 called its shot and the tape paid it inside nine hours of that
              note&rsquo;s 00:05Z anchor; the
              same framework then left a 3.18× ambiguity about what it had actually earned.
              Fix the specification, not the thesis.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · <b>post codex hostile audit</b> ·{' '}
              <code>audits/2026-08-31-desk-note.md</code> — verdict BLOCK-CRITICAL on v1,
              2 CRITICAL + 3 MAJOR + 7 MINOR
            </span>
            All twelve findings were applied to the full EN file, not only to the cited
            lines. For each, the wrong-claim pattern and its semantic variants were grepped
            across the whole file before and after the fix; the counts below are those greps.
            <b> Every finding is RESOLVED at hits-after = 0</b>, with two deliberate residues
            named explicitly at the end.
            <br /><br />
            <div className="dn-lvls">
              <div><span className="dn-lvl-k">DN-001 · CRITICAL · stop wrongly claimed below both print lows</span><span className="dn-lvl-v">patterns: <code>below both</code>, <code>sits below both</code>, <code>print-basis lows</code> · hits before <b>1</b> (§VI framework definition) · hits after <b>0</b> · the claim is withdrawn and inverted to the true geometry: $77,180 is <b>$326.90 ABOVE</b> the 08-28 low $76,853.10 and <b>$232.80 ABOVE</b> the 08-30 low $76,947.20, both paths would have crossed it on a print basis, and the level is defended only on its written 1d-close basis (08-28 closed $77,805.90, 08-30 $77,634.60). The level, the ≈$1,320 risk and the ≈1.89:1 remainder R/R are unchanged — nothing was silently moved · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-002 · CRITICAL · false &ldquo;first time BOTH legs improved&rdquo; superlative</span><span className="dn-lvl-v">patterns: <code>first time BOTH</code>, <code>both legs improved</code>, <code>for the first time in the sequence</code>, <code>first two-leg</code> · hits before <b>2</b> (§VI section header, chase-short paragraph) · hits after <b>0</b> · replaced by the dated sequence from this repository&rsquo;s own 08-26 note — <b>08-23 first</b> (price leg 18.84% → 17.48%, clamp +249.91M → +242.37M), <b>08-26 second</b> (18.92% → 18.30%), <b>08-27 opposite-direction</b>, <b>08-31 third</b>. The only superlative retained is <em>largest price-leg improvement</em> with its basis printed inline: 3.14pt today against 1.36pt and 0.62pt · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-003 · MAJOR · elapsed clock conflated the 08-27 analytical anchor with publication</span><span className="dn-lvl-v">patterns: <code>rule was published</code>, <code>rule being published</code>, <code>note published</code>, <code>rule published at</code>, <code>after publication</code> · hits before <b>4</b> (lead, §V header, trade name, trade thesis) · hits after <b>0</b> · every 8h03m / 9h15m / &ldquo;inside nine hours&rdquo; figure is now measured from the <b>00:05Z analytical anchor</b> and each site says so; the note states that <b>no deploy, availability or publish timestamp is loaded</b> and that the 08-27 file and commit times fall after 00:05Z, so the anchor must not be read as a publication time · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-004 · MAJOR · &ldquo;seventh consecutive session&rdquo; overstates the evidence across three missing panels</span><span className="dn-lvl-v">patterns: <code>seventh session</code>, <code>seventh consecutive session</code>, <code>consecutive session</code>, plus a full sweep of every <code>session</code> occurrence · hits before <b>2</b> on the chase-short claim · hits after <b>0</b> · relabelled <b>seventh checked note</b>; the SM defect line is re-scoped from &ldquo;one session after&rdquo; to &ldquo;one <em>checked note</em> after (four calendar sessions)&rdquo;; the §III header, the lead and the chase-short paragraph now all read <b>four-session interval with only two archived endpoints</b>, and the manifest states that nothing is certified session by session. Remaining <code>session</code> hits are calendar-interval uses that carry the disclosure with them · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-005 · MAJOR · &ldquo;two NEW episodic flags&rdquo; self-refuted by its own body</span><span className="dn-lvl-v">patterns: <code>two NEW episodic</code>, <code>Two new episodic</code>, <code>two new episodic</code> · hits before <b>2</b> (§IV header, §IV signal sentence) · hits after <b>0</b> · rewritten as <b>one new episodic flag plus one carried episodic flag pointing in opposite directions</b>; HY is marked <b>newly episodic</b> at −1.77 and Fed net liquidity <b>carried, not new</b> — already episodic at −2.45 on the dated 08-27 panel · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-006 · MINOR · wrong stop-breach delta on the 08-30 print in the lead</span><span className="dn-lvl-v">pattern: <code>by $395.32 on a print basis</code> (the lead&rsquo;s 08-30-anchored form) · hits before <b>1</b> · hits after <b>0</b> · corrected to <b>$301.22</b> ($77,248.42 − $76,947.20) with the $395.32 figure re-attached in the same sentence to the deeper 08-28 low $76,853.10. The two later uses of $395.32 in §V were already correctly 08-28-anchored and are unchanged · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-007 · MINOR · 7d event-gate return inconsistent with the pinned endpoint</span><span className="dn-lvl-v">pattern: <code>+0.25%</code> · hits before <b>1</b> · hits after <b>0</b> · corrected to <b>+0.22%</b> on the live-spot basis ($77,624.49 → $77,792.01 = +0.2158%), independently recomputed here off the pinned <code>08-24 08:05</code> and <code>08-31 08:05</code> rows; the manifest now names the basis for both gates and prints the rejected monitor-perp alternative (+0.23%) · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-008 · MINOR · funding-cap numerator and episode counts not reproducible under the stated convention</span><span className="dn-lvl-v">patterns: <code>4,617 / 10,080</code>, <code>(45.8%)</code>, <code>12 capped</code>, <code>ran past 434</code>, <code>624m</code> · hits before <b>7</b> across the funding tile and §I · hits after <b>0</b> · one classifier is now defined inline and used everywhere — <b>capped = raw funding exactly 0.010000</b>, episodes are maximal same-side runs with no merge rule and no minimum duration, the duplicate <code>08-27 14:53</code> label de-duplicated to 10,080 intervals, elapsed = rows − 1. On that convention, independently recomputed: 7d occupancy <b>4,593 / 10,080 = 45.6%</b>, <b>20 capped runs (19 beginning inside the window)</b>, 7 below-cap runs ≥ 200 rows, and the fourth qualifying release is <b>626m</b> not 624m. &ldquo;ran past 434 minutes&rdquo; became <b>&ldquo;met or exceeded&rdquo;</b> because the first is exactly 434 · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-009 · MINOR · 200W insertion rank double-inserted the current observation</span><span className="dn-lvl-v">patterns: <code>38 / 167</code>, <code>38/167</code>, <code>22.8th</code> · hits before <b>3</b> across 2 lines (§II percentile sentence, prior audit-trace block) · hits after <b>0</b> · corrected to <b>38 / 166 = 22.9th</b>, with the reason printed inline: 166 settled weekly ratios already include current, so current is inserted once. The separately-published 37/166 = 22.3% and 37/165 = 22.4% strict conventions are unchanged and remain reproducible · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-010 · MINOR · &ldquo;Nine panels&rdquo; after enumerating ten</span><span className="dn-lvl-v">pattern: <code>Nine panels</code>, <code>nine panel</code> · hits before <b>1</b> · hits after <b>0</b> · corrected to <b>ten prior comparison panels (three below, seven above)</b>, matching the enumeration 08-17/08-18/08-19 below and 08-20/08-22/08-23/08-24/08-25/08-26/08-27 above. The &ldquo;lowest since the 08-19 panel, NOT a lineage low&rdquo; ordinal itself is unchanged and still scoped to the archive · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-011 · MINOR · arming distance mixed the rounded trigger with the underlying MA</span><span className="dn-lvl-v">pattern: <code>$638.84 below the arming level</code> · hits before <b>1</b> · hits after <b>0</b> · both distances are now printed with their referents: <b>$638.99 below the rounded trigger $78,431</b>, $638.84 below the underlying W-EMA100 $78,430.85 · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-012 · MINOR · unpinned and already-overwritten watch-state cross-check</span><span className="dn-lvl-v">patterns: <code>00:11:40</code>, <code>carries for the week ended</code>, <code>ma200w_trap_watch_state.json</code> used as a cross-check · hits before <b>3</b> across 2 sites (manifest 200W row, §II cycle-floor paragraph) · hits after <b>0</b> on every assertion form · the artifact/timestamp claim is withdrawn at both sites: no watch-state file was archived with the dated bundle, the rolling copy has since been overwritten, and the prior-week $64,269.62 is cited only as a <b>parquet recomputation from the same settled series</b> · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">deliberate residues, named so the grep record is honest</span><span className="dn-lvl-v">two strings survive on purpose and neither carries its pre-fix meaning. (1) <code>4,617</code> appears once in §I, inside the sentence that <em>rejects</em> the <code>≥ 0.00999</code> classifier — DN-008&rsquo;s fix asks for the convention to be defined inline, which requires naming the alternative. (2) <code>ma200w_trap_watch_state.json</code> appears once in the manifest, inside the sentence stating it was <b>not archived and is no longer recoverable</b>. Assertion-form greps for both (<code>4,617 / 10,080</code>, <code>00:11:40</code>) return <b>0</b></span></div>
            </div>
            <b>Carried forward from v1, unchanged and re-verified by the audit:</b> the
            adopted reading (C) in §V remains a <em>judgement call on ambiguous prior text</em>
            with both rejected branches printed; the &ldquo;lowest since the 08-19 panel&rdquo;
            ordinal is scoped to 27 archived August panels and is explicitly <b>not</b> a
            lineage low; the two-consecutive-negative-fronts pattern is explicitly <b>not</b> a
            first (08-01 and 08-11 both did it) while the −12.28M <em>depth</em> is claimed
            only against the August archive; the W-SMA150 knife-edge disagrees in sign between
            the weekly close and live spot and both are printed; the IV−RV spread of −0.1772pt
            carries its ±5 volatility-bp rounding band inline; the SM 24h Δ is arithmetically
            6.47% of prior_net but is declared <b>NOT CERTIFIABLE</b> because 89.23% of it is
            one row; and every R figure in §V is <b>MODELED</b> off an instructed price with no
            blotter, no average price and no execution feed loaded anywhere in this run.
            Funding is <code>raw × 1095</code> throughout (0.007143 × 1095 = 7.8216%), never
            ×1095×100. The GEX flip is dual-referenced with both references agreeing in sign.
            NTT, max-pain, per-strike IV and the BTC/NQ ratio are framework-only and listed
            NOT LOADED in the manifest.
            <br /><br />
            <b>Open items the audit records and this note does not close:</b> no order
            blotter, submission record, execution feed, average price or account
            reconciliation exists in this run; no publication timestamp exists for the 08-27
            note; the 08-28/29/30 GEX path is absent so no session-by-session continuity is
            certified; and the pre-anchor watch-state JSON is unrecoverable.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among principals
            of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a single
            atomic snapshot (2026-08-31 00:05Z) with section-level provenance disclosed in
            the manifest band above; the macro Tier-1 panel renders 2026-08-30 22:17Z and its
            daily rows carry Friday 2026-08-28 closes, the 200W watch artifact is absent and
            replaced by a disclosed parquet recomputation, and the JGB row is stale monthly.
            The position record in §V is a <b>modeled/paper</b> reconstruction from price-path
            data alone: no order blotter, execution feed or position reconciliation has been
            loaded, so it is not a statement about any account. Levels, sizes, and conditions
            are illustrative of the desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future tape. Derivatives
            carry the risk of total loss and, where leveraged, loss exceeding deposited
            margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The rule fired on time and the tape paid it inside nine hours of the anchor
                it was written against. Then it left
                us arguing with our own sentence about what we had earned. Fix the
                specification, not the thesis.
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
            v2 · 2026-08-31 00:05Z snapshot · archive
            /opt/desk-note/snapshots/2026-08-31-0006/ · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · gex_summary.json ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · FRED · Yahoo · Deribit
          </span>
        </footer>
      </article>
    </main>
  );
}
