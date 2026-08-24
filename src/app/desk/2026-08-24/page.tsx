import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-24 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-24',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-24' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260824() {
  await requireViewer('/desk/2026-08-24');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-24 · v2</span>
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
              <span className="dn-big">$77,624</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.63%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-24 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">
                    live_db.json · tape anchor <b>2026-08-24 00:05Z</b> (BJ row{' '}
                    <code>08-24 08:05</code>)
                  </td>
                  <td className="dn-flag">
                    fresh · 1-min · <b>PINNED</b>: the 20,200-row tail through the
                    anchor row is archived at{' '}
                    <code>snapshots/2026-08-24-0007/live_db_pin_2026-08-24T0005Z.jsonl</code>{' '}
                    and every tape figure in this note is computed from that file,
                    not from the live tail (the live file grew four rows between the
                    first and last read of this session) · window rule is inclusive
                    [anchor − duration, anchor]: 24h = 1,441 rows, 48h = 2,881, 72h =
                    4,321, 7d = 10,081 — a row count of N spans N−1 minute-to-minute
                    intervals · <b>endpoint assertion</b>: every horizon printed in
                    this note starts on <code>rows[−(N·60+1)]</code> and terminates
                    on the pinned anchor row itself; the 08-23 v1 draft failed that
                    assertion on two OI figures computed off a rolled live row, so
                    this draft reads only from the pin and every horizon was
                    recomputed against it before any prose was written
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-24 00:01Z scan (BJ 08:01)</td>
                  <td className="dn-flag">
                    rolling hourly artifact · archived at{' '}
                    <code>snapshots/2026-08-24-0007/</code> · ~4 min before the tape
                    anchor · scan spot $77,706 / 24h +0.74% vs tape $77,624.49 /
                    +0.63% (different 24h origins, see §II) · all closes are
                    in-progress bars
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-24 00:00Z bake</td>
                  <td className="dn-flag">
                    archived at <code>snapshots/2026-08-24-0007/</code> · ~5 min
                    before the anchor · Deribit idx $78,168 vs live spot $77,624.49
                    (idx <b>+$543.51</b> — the widest index-to-spot gap of the recent
                    lineage; every dual-reference figure below prints both sides) ·
                    998 instruments (was 1,038 on 08-23 — the 23AUG26 +5.76M line
                    settled 08-23 08:00Z) · <b>headline total +245.7M vs by-expiry
                    footed +247.69M</b>; this note carries the footed basis
                    throughout for comparability with the 08-22 and 08-23 notes and
                    discloses the headline separately ·{' '}
                    <code>gex_summary.json</code> was <b>NOT</b> read this session
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · generated 2026-08-24 00:00Z
                  </td>
                  <td className="dn-flag">
                    archived at <code>snapshots/2026-08-24-0007/</code> · 22 assets ·
                    168 hourly rows · a 7-day rolling window, not a same-day read ·
                    co-movement only — no hedge ratio, stability or out-of-sample
                    work is loaded
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-23 22:16Z render</td>
                  <td className="dn-flag">
                    archived at <code>snapshots/2026-08-24-0007/</code> · ~1.8h before
                    the anchor · <b>SECOND consecutive weekend re-render</b>: every
                    FRED-sourced row is bit-identical to the 08-23 note&rsquo;s panel;
                    the only two rows that moved are the Yahoo FX pair (DXY
                    98.80→98.85, USD/JPY 158.86→158.91) · JGB is FRED monthly and{' '}
                    <b>stale 83d — do not lean</b> · NFCI stale 9d · WTI stale 5d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix + 30D RV</td>
                  <td className="dn-v-cell">
                    btcusdt_1m_2019…2026.parquet · all 8 yearly files · last 1m bar
                    2026-08-24 00:06Z @ $77,544.10
                  </td>
                  <td className="dn-flag">
                    <b>MA anchor convention</b>: the full 20-cell matrix is computed
                    on <em>settled</em> bars only — dailies through the 2026-08-23
                    close $77,719.10, weeklies through the <b>2026-08-23 W-SUN close
                    $77,719.10</b>. The in-progress 08-24 daily bar and the 6-minute
                    08-30 W-SUN bar are excluded so no level is contaminated by a
                    partial bar; offsets are stated against live tape spot
                    $77,624.49. 30D RV = 30 log returns off 31 settled daily closes
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W watch state</td>
                  <td className="dn-v-cell">
                    weekly_200sma.json <b>ABSENT</b> · ma200w_trap_watch_state.json
                    recomputed 2026-08-24 00:11:40Z
                  </td>
                  <td className="dn-flag">
                    the runbook&rsquo;s named artifact is still absent, and{' '}
                    <code>weekly_200sma_state.json</code> is 49 days stale (asof
                    2026-07-06). What <em>is</em> available is{' '}
                    <code>ma200w_trap_watch_state.json</code>, which recomputed{' '}
                    <b>6m40s AFTER this note&rsquo;s tape anchor</b> (00:05:00Z →
                    00:11:40Z) and independently
                    prints <code>last_completed_week 2026-08-23</code>,{' '}
                    <code>close 77719.1</code>, <code>sma200 64269.62</code>,{' '}
                    <code>consecutive_above 1</code>,{' '}
                    <code>invalidated_streak 2026-08-23</code> — matching the
                    desk&rsquo;s own parquet recompute of W-SMA200 to the cent. It is
                    disclosed as a post-anchor corroboration, not as the source; the
                    percentile and below-floor frequency remain the desk&rsquo;s
                    parquet recompute
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT pivots · max-pain · strike-level IV · BTC/NQ ratio
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
              <span className="dn-v bear">+10.95% (at cap)</span>
              <span className="dn-src">live · raw field +0.0100%/8h × 1095 · 24h mean +10.95% — the mean IS the cap because every one of the 1,441 sampled rows printed it, for the second consecutive note · <b>3,798 consecutive sampled rows at cap since 2026-08-21 08:48Z</b>, i.e. 3,797 elapsed minutes (last non-cap row 08:47Z at +10.77%) · &ldquo;cap&rdquo; = the +10.95% ann. ceiling the feed has not exceeded once in the 10,081-row 7d window</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+10.95% → +10.95% (welded)</span>
              <span className="dn-src">range +10.95% / +10.95%, 1,441 / 1,441 at cap (100.0%), 0 / 1,441 negative — identical occupancy to 08-23, but the streak behind it is 1,438 rows longer · 72h mean +10.55%, 3,798 / 4,321 at cap (87.9%), 0 negative; 7d mean +8.27%, 5,027 / 10,081 at cap, <b>0 / 10,081 negative</b> — the 158 negative rows the 08-23 note carried have rolled out of the 7d window</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−0.29% (−306.8 BTC)</span>
              <span className="dn-src">live · 105,852.669 → 105,545.878 BTC · the base resumed contracting after the flat 08-23 print, but only marginally and on a <em>net</em> basis (gross opens, closes and account-level turnover are NOT observable in this feed) · 48h −568.0 / −0.54%, 72h −2,029.7 / −1.89%, 7d −5,442.4 / −4.90%, and −5,506.4 / −4.96% off the 3d peak 111,052.236 @ 08-21 08:50Z — every horizon endpointed on the pinned 00:05Z anchor row</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v">51.69 / 48.31</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · 24h range 48.79 / 51.95 · 7d ago 68.96%, 7d-window peak <b>a fresh 69.00% plateau @ 08-17 00:06–00:11Z</b> (the 08-23 note&rsquo;s 08-16 23:12Z plateau printed the same VALUE but is a different set of rows and has now rolled outside this note&rsquo;s 7d window), 7d trough 48.52% @ 08-20 23:18Z — retail is −17.31pt off the peak through a +23.39% week, but has now re-crowded <b>+1.51pt in 24h and +3.17pt off the 08-20 trough</b>; still the cleanest line on the page, and this is the <b>SECOND re-crowding endpoint in three sessions, not the first</b> — exact 00:05Z daily endpoints run 48.86% (08-21) → 50.95% (08-22, <b>+2.09pt</b>) → 50.18% (08-23, −0.77pt) → 51.69% today (+1.51pt), so 08-22 was the larger adverse move</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">+19.66k (net long · NOT CERTIFIABLE)</span>
              <span className="dn-src">live · long 28,301.6 − short 8,641.5 · the level is real as a feed reading but is NOT an auditable position series: the tracked trader counts stepped again at 08-23 07:06Z (<code>long_traders</code> 5,111 → 4,610 in one minute — the first DOWNWARD step of the run) — the <b>fourth</b> such discontinuity in four days · <b>consistent with a recurrent roster re-sampling or feed-universe change; the upstream cause is NOT loaded</b> and no roster membership, scheduler, account-continuity or ingestion log is in this cut</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · exact 24h</span>
              <span className="dn-v">+32.23k → +19.66k (Δnet −12,573.1)</span>
              <span className="dn-src">baseline is the exact T−24h row 2026-08-24 00:05Z − 24h = 2026-08-23 00:05Z (+32,233.2) · |Δ| / prior_net = 12,573.1 / 32,233.2 = <b>39.01%</b> · but 10,279.5 of that Δ (<b>81.76%</b>) printed in the single 08-23 07:06Z count-step minute (cause NOT loaded) · on the clean 16h59m since, SM still TRIMMED: Δnet −1,784.9 = −8.32% of post-step net, Δlong −2,047.2, Δshort −262.2, into a +1.88% price push</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">49.8% / 43.15%</span>
              <span className="dn-src">GEX chain-median across 998 instruments (was 46.7% / 1,038 on 08-23 — a +3.1pt vol re-firm alongside −40 instruments as 23AUG26 settled) vs 30D close-to-close RV 43.15% · richness ≈ <b>+6.65pt</b> (49.8 − 43.1467) — <b>+3.13pt vs 08-23&rsquo;s +3.52pt and +0.80pt above 08-22&rsquo;s +5.85pt</b>; no ordinal is claimed, no &ldquo;meaningful&rdquo; threshold is defined and no run-length richness ledger is loaded · a chain median, NOT a tradable spread</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+22.14% (above)</span>
              <span className="dn-src">flip $63,552 (was $63,653 — down $101) · vs live spot $77,624.49 = +22.14% (77,624.49 / 63,552 − 1 = 22.1433%) / vs the GEX file&rsquo;s own Deribit idx $78,168 = +23.00% (file prints +23.0%) — both refs positive, tile carries the spot side · inverted: the flip sits <b>18.13%</b> below spot, so an 18.13% decline reaches it · footed aggregate +247.69M (headline +245.7M)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The settle came, and it fired one leg of a two-leg trade
              </span>
              . The 2026-08-23 W-SUN bar closed at{' '}
              <span className="dn-tag bull">$77,719.10</span> against W-SMA200{' '}
              <span className="dn-tag">$64,269.62</span> —{' '}
              <span className="dn-tag bull">+20.93% above the cycle floor</span> —
              which converts the 08-16 break from a standing conditional into a{' '}
              <span className="dn-em">recorded one-week false break</span>. That was
              leg 1 of the pullback long, and it is now a settled historical fact
              that cannot un-settle.{' '}
              <span className="dn-signal">
                Leg 2 missed by $20.30
              </span>
              . The desk required a held 1h close inside $75,000–$76,000. Price
              wicked to <span className="dn-tag">$75,588.00 @ 08-23 05:17Z</span> —{' '}
              <span className="dn-tag">$412.00 inside the band</span> — and the
              lowest exchange 1h close of the whole window was{' '}
              <span className="dn-tag bear">$76,020.30 on the 07:00Z bar</span>, i.e.{' '}
              <span className="dn-em">$20.30 above the band top</span>. Fourteen of
              1,440 one-minute bars closed at or under $76,000; not one hour did. The
              book therefore stays <span className="dn-tag">FLAT</span>, because
              half-armed is not armed, and the desk does not round $20.30 in its own
              favour.
              <br /><br />
              Everything else this session is second-order and mostly better. Spot{' '}
              <span className="dn-tag">$77,624.49</span>,{' '}
              <span className="dn-tag bull">+0.63%</span> on the exact 24h window,{' '}
              <span className="dn-tag bull">reclaimed the weekly shelf it lost on
              08-23</span> — W-EMA50 $77,248.42 (+0.49%) and W-SMA150 $77,446.22
              (+0.23%) — but by only $376.07 and $178.27 respectively, which is a
              reclaim you can lose back in one hour. The{' '}
              <span className="dn-tag bull">daily ladder is 10-of-10 positive</span>{' '}
              and the full 20-cell matrix is{' '}
              <span className="dn-tag bull">17-of-20</span>; the three misses are all
              weekly and all above: W-SMA50, W-EMA100, W-SMA100. MTF{' '}
              <span className="dn-tag bull">re-inverted to 8 long / 0 short / 2
              neutral</span> on the file&rsquo;s aggregate convention, RSI cooled hard
              on the fast frames (4h 89.8 → 72.2), and the momentum regime flipped
              back to <span className="dn-tag bull">6/9 trend (JT≥0)</span> from
              08-23&rsquo;s 5/9 reversal read.{' '}
              <span className="dn-em">
                The dealer clamp deepened again to +247.69M footed and all ten top
                walls are positive; funding is still welded to the +10.95% cap, now
                for 3,798 consecutive sampled rows; and the SM trader counts stepped
                discontinuously for a fourth straight day, so 81.76% of its 24h Δnet
                sits in one minute whose upstream cause is not loaded.
              </span>{' '}
              Two things got worse and both are crowding, not structure: retail
              re-crowded <span className="dn-tag bear">+1.51pt to 51.69%</span> — the{' '}
              <span className="dn-em">
                second re-crowding endpoint in three sessions, not the first: on exact
                00:05Z daily endpoints the run is 48.86% → 50.95% (+2.09pt) → 50.18%
                (−0.77pt) → 51.69% (+1.51pt), so 08-22 already moved further the wrong
                way than today did
              </span>{' '}
              — and the 1d frame is{' '}
              <span className="dn-tag bear">one bar from a TD9 SELL</span>. The
              through-line has not changed since 08-22:{' '}
              <span className="dn-em">
                a bullish structure at a price the desk still would not pay
              </span>
              . What changed is that the entry the desk <em>would</em> pay came
              within $20.30 of existing and then left.
            </p>

            <p>
              Range discipline first. Over the pinned 1,441-row window the tape ran{' '}
              <span className="dn-tag">high $78,024.19 @ 2026-08-23 21:30Z (BJ 08-24
              05:30)</span> and{' '}
              <span className="dn-tag">low $75,739.99 @ 2026-08-23 05:18Z (BJ 08-23
              13:18)</span> — $2,284.20 of range, 3.02% off the low. Spot sits{' '}
              <span className="dn-tag bear">−0.51% off the high</span> and{' '}
              <span className="dn-tag bull">+2.49% off the low</span>, i.e. 82.5% of
              the way up its own 24h range, which is precisely why nothing armed.{' '}
              <span className="dn-signal">
                The 24h high is the number to hold on to: $78,024.19 poked $24.19
                through the $78,000 wall and failed inside the same hour
              </span>{' '}
              — the second consecutive session in which the tape traded above
              $78,000 and closed the day below it, after the 48h high{' '}
              <span className="dn-tag">$78,810.00</span> tested the entire lid on
              08-22 and failed. The last daily close above $78,000 was 08-21 at
              $78,309.10. Overhead the lid is unchanged and tight: the{' '}
              <span className="dn-tag">$78,000 wall (+32.48M)</span> at +0.48%, the{' '}
              <span className="dn-tag">D-EMA400 $78,228.40</span> at +0.78%, and{' '}
              <span className="dn-tag">W-EMA100 $78,446.94</span> at +1.06% — three
              levels inside <span className="dn-em">$446.94</span> of each other.
              Below, the reclaimed W-EMA50 / W-SMA150 pair is the first support at
              −0.23% / −0.48%, and then nothing structural until the{' '}
              <span className="dn-tag">$76,000 +11.21M</span> and{' '}
              <span className="dn-tag">$75,000 +13.08M</span> walls that bracket the
              band the tape just refused to close in.
            </p>

            <h2 className="dn-sec">
              Tape{' '}
              <span className="dn-roman">I · funding welded to the cap on 1,441 / 1,441 rows for the second straight note, streak now 3,798 rows · OI resumed contracting but only −0.29% on net — gross turnover not observable in this feed · the SM trader counts stepped for the FOURTH consecutive day and DOWNWARD this time; 81.76% of the 24h Δnet is that single step, whose upstream cause is NOT loaded · retail re-crowded +1.51pt to 51.69% — the SECOND re-crowding endpoint in three sessions (48.86 → 50.95 → 50.18 → 51.69), NOT the first</span>
            </h2>

            <p>
              <span className="dn-signal">
                The funding pin is now the longest-running fact in the book and it
                did not soften on an up-day
              </span>
              . The raw field prints <span className="dn-tag">+0.0100%/8h</span>,
              which is{' '}
              <span className="dn-tag bear">+10.95% ann. on every one of the 1,441
              sampled rows in the window</span> (× 1095 = 3 funding periods/day ×
              365). The 24h mean is +10.95% because the mean of a constant is the
              constant; min and max are both +10.95%; zero rows printed negative.
              That is identical occupancy to the 08-23 note, but the streak behind it
              has extended to{' '}
              <span className="dn-tag bear">3,798 consecutive sampled rows from
              2026-08-21 08:48Z</span> — 3,797 elapsed minutes, or 2 days 15h 17m —
              against 2,360 rows a session ago. The last row that was not at cap is{' '}
              <span className="dn-tag">08-21 08:47Z at +10.77% ann.</span> On 72h the
              mean is +10.55% with 3,798 / 4,321 rows capped; on 7d the mean is
              +8.27% with 5,027 / 10,081 capped and{' '}
              <span className="dn-em">0 / 10,081 negative — the 158 negative rows the
              08-23 note carried have rolled out of the window entirely</span>.
              Longs have now paid maximum carry, uninterrupted, through an up-day, a
              down-day and a weekend.{' '}
              <span className="dn-em">
                This is a fragility statement, not a directional one. A book paying
                the ceiling for 63 hours has no cushion left to absorb a shock; it
                says nothing about when the shock arrives, and a cap-pinned tape has
                stayed cap-pinned for far longer than this on prior runs.
              </span>
            </p>

            <p>
              Open interest resumed contracting, but the word to hold is{' '}
              <em>marginally</em>. Aggregate OI ran{' '}
              <span className="dn-tag">105,852.669 → 105,545.878 BTC, −306.8 BTC,
              −0.29%</span> across the pinned window. That reverses the flat +4.8 BTC
              print the 08-23 note flagged, but −0.29% is inside the noise of a base
              this size, and the direction of travel over longer horizons is where
              the signal is:{' '}
              <span className="dn-tag bull">−568.0 BTC / −0.54% on 48h</span>,{' '}
              <span className="dn-tag bull">−2,029.7 / −1.89% on 72h</span>,{' '}
              <span className="dn-tag bull">−5,442.4 / −4.90% on 7d</span>, and{' '}
              <span className="dn-tag bull">−5,506.4 / −4.96% off the 3d peak
              111,052.236 @ 08-21 08:50Z</span> — every horizon endpointed on the
              pinned 00:05Z anchor row itself.{' '}
              <span className="dn-em">
                What the feed proves is a net path, nothing more. Gross opens, gross
                closes and account-level turnover are not exposed by this series, so
                a session in which leveraged longs de-risked and were replaced
                one-for-one by fresh leverage would print exactly this same −306.8.
                The honest read, on matched endpoints: over the exact 72h window
                price rose <b>+6.19%</b> ($73,098.00 → $77,624.49) while OI fell{' '}
                <b>−1.89%</b> (107,575.537 → 105,545.878) — the base did not expand
                into that move, which is consistent with a squeeze that has not yet
                been re-levered and is not proof of who did what.{' '}
                <b>
                  Stated separately because it is a different measurement: OI is
                  −4.96% below its intrawindow peak of 111,052.236 at 08-21 08:50Z,
                  8h45m AFTER the 72h price baseline
                </b>
                . The −4.96% and the +6.19% are not a matched pair and this note does
                not present them as one.
              </span>
            </p>

            <p>
              <span className="dn-signal">
                The smart-money trader counts stepped discontinuously for the fourth
                consecutive day, and this time they stepped downward
              </span>
              . Nominal SM net reads{' '}
              <span className="dn-tag">+19,660.1 BTC</span> (long 28,301.6 − short
              8,641.5) against{' '}
              <span className="dn-tag">+32,233.2 BTC</span> at the exact T−24h row,
              a Δnet of <span className="dn-tag bear">−12,573.1</span>, which is{' '}
              <span className="dn-em">|Δ| / prior_net = 12,573.1 / 32,233.2 =
              39.01%</span> — a very large apparent cut.{' '}
              <span className="dn-tag bear">10,279.5 of that 12,573.1 — 81.76% —
              printed in a single minute at 2026-08-23 07:06Z</span>, where{' '}
              <code>long_traders</code> stepped{' '}
              <span className="dn-tag">5,111 → 4,610</span> and{' '}
              <code>short_traders</code> stepped{' '}
              <span className="dn-tag">1,217 → 1,073</span>.{' '}
              <span className="dn-em">
                A one-minute fall in the tracked <code>long_traders</code> /{' '}
                <code>short_traders</code> counts is consistent with the tracked
                population shrinking rather than with positions closing, but this feed
                does not carry the evidence that would settle it: no roster
                membership, no scheduler, no account-continuity mapping and no gross
                open/close events are exposed. The desk therefore records the
                discontinuity as fact and the mechanism as unverified
              </span>
              . The full sequence is now four days deep and it is no longer
              describable as an anomaly:{' '}
              <span className="dn-tag">2026-08-20 07:06Z (long_traders 587 →
              1,388)</span>,{' '}
              <span className="dn-tag">2026-08-21 06:21Z (1,336 → 2,497)</span>,{' '}
              <span className="dn-tag">2026-08-22 06:41Z (2,260 → 4,976)</span>,{' '}
              <span className="dn-tag">2026-08-23 07:06Z (5,111 → 4,610)</span>.{' '}
              <span className="dn-em">
                Three expansions and now a contraction, all within a 45-minute
                window of the same UTC hour on four consecutive days. That timing
                regularity is <em>consistent with</em> a recurrent roster re-sampling
                or feed-universe change on a schedule — it does not prove one, and
                the page does not promote it to a cause: the upstream process is NOT
                loaded in this cut.{' '}
                <b>
                  What the tape does establish is sufficient for the decision that
                  matters: the series carries recurrent same-hour discontinuities
                  large enough to dominate a 24h delta, so a gate written against{' '}
                  <code>net_btc</code> as a level or a delta is unsound on this
                  evidence alone, whatever the mechanism turns out to be.
                </b>{' '}
                The finding is carried forward from 08-23 unchanged in substance and
                strengthened in evidence; the causal label is not.
              </span>
            </p>

            <p>
              The one SM window that contains no discontinuity is the{' '}
              <span className="dn-tag">16h59m from 08-23 07:06Z to the anchor</span>,
              and it says the same thing it said yesterday. Net went{' '}
              <span className="dn-tag bear">−1,784.9 (−8.32% of post-step
              net)</span>, longs{' '}
              <span className="dn-tag bear">−2,047.2</span> and shorts{' '}
              <span className="dn-tag">−262.2</span>, into a{' '}
              <span className="dn-tag bull">+1.88% price push</span>.{' '}
              <span className="dn-em">
                Tracked smart money reduced long exposure into strength for the
                second consecutive clean window, and reduced it harder than last
                session (−8.32% vs −1.94%). That is descriptive and it is one
                17-hour window on a series that has stepped discontinuously four days
                running — it is not a signal and nothing in this note is gated on it.
              </span>
            </p>

            <p>
              Retail moved the wrong way again — the{' '}
              <span className="dn-em">
                second re-crowding endpoint in three sessions, not the first
              </span>{' '}
              — and the sequence needs printing rather than characterising. On exact
              00:05Z daily endpoints the tape reads{' '}
              <span className="dn-tag">48.86% (08-21) → 50.95% (08-22, +2.09pt) →
              50.18% (08-23, −0.77pt) → 51.69% (08-24, +1.51pt)</span>: 08-22 was a
              larger adverse move than today.{' '}
              <span className="dn-tag bear">mkt_long_pct 51.69%</span>{' '}
              against 50.18% at T−24h — a{' '}
              <span className="dn-tag bear">+1.51pt re-crowd</span> — with a 24h range
              of <span className="dn-tag">48.79% / 51.95%</span>. Seven days ago it
              read <span className="dn-tag">68.96%</span>; the 7d-window peak is{' '}
              <span className="dn-tag">a fresh 69.00% plateau spanning 2026-08-17
              00:06Z–00:11Z</span> —{' '}
              <span className="dn-em">
                which is <em>not</em> the same print the 08-23 note cited: that
                plateau began 2026-08-16 23:12Z and has rolled outside this
                note&rsquo;s inclusive window, which starts 2026-08-17 00:05Z. The
                value repeats at 69.00%; the timestamped rows do not
              </span>{' '}
              — and the trough is{' '}
              <span className="dn-tag">48.52% @ 2026-08-20 23:18Z</span>.{' '}
              <span className="dn-em">
                So the headline is still excellent — retail is −17.31pt off the peak
                through a +23.39% week, which is the de-crowding that made the
                structural case in the first place — but the derivative has turned.
                Retail is +3.17pt off its trough and has added on two of the last
                three sessions — which is exactly why today is the second such
                endpoint and not a first. That is not a top signal at 51.69%; it is
                continued erosion of the single cleanest argument the bull case had.
              </span>
            </p>

            <p>
              Windowed flow, all endpointed on the anchor. <b>24h</b>: price{' '}
              <span className="dn-tag bull">+0.63%</span>, OI{' '}
              <span className="dn-tag bull">−306.8 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +199.7</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −390.8</span>, big prints{' '}
              <span className="dn-tag bull">+240.9 BTC net / 578 prints</span>,
              taker-net <span className="dn-tag bear">−389.3</span> —{' '}
              <span className="dn-em">
                a genuinely split session: spot bid and block bid, perp taker-flow
                offered. Price rose 0.63% while futures takers sold 389 BTC net and
                OI fell. That is the shape of spot absorbing perp supply, which is
                the constructive version of an up-day, but it is one window.
              </span>{' '}
              <b>4h</b>: price <span className="dn-tag bull">+0.55%</span>, OI{' '}
              <span className="dn-tag bull">−357.7 BTC (−0.34%)</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +315.9</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +587.8</span>, big prints{' '}
              <span className="dn-tag bull">+490.8 BTC / 59 prints</span>, taker-net{' '}
              <span className="dn-tag bull">+585.7</span> — the strongest four hours
              of the window on every flow measure, and the only stretch where OI fell
              while price and both CVDs rose. <b>1h</b>: price{' '}
              <span className="dn-tag bull">+0.23%</span>, OI{' '}
              <span className="dn-tag bear">+344.0 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −27.8</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +60.1</span>, big prints{' '}
              <span className="dn-tag bull">+46.2 BTC / 9 prints</span>, taker-net{' '}
              <span className="dn-tag bull">+68.4</span> — thin, and{' '}
              <span className="dn-em">the only window where OI expanded</span>, which
              is the one flow line that argues fresh leverage rather than short
              cover. Perp basis at the anchor is a{' '}
              <span className="dn-tag bear">−$9.73 discount</span> to spot against a
              24h mean of{' '}
              <span className="dn-tag bear">−$11.78</span> (range −$152.00 / +$146.18)
              and a 1h mean of{' '}
              <span className="dn-tag bear">−$6.80</span>. Aggregate skew ran a 24h
              mean of <span className="dn-tag bear">−10.2</span> (range −55.8 /
              +39.5).
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · the 08-23 W-SUN bar SETTLED at $77,719.10 vs W-SMA200 $64,269.62 — the 08-16 break is now a RECORDED one-week false break · daily ladder 10 / 10 positive, full matrix 17 / 20, the three misses all weekly and all overhead · the W-EMA50 / W-SMA150 shelf RECLAIMED but by only $178–$376 · MTF re-inverted to 8 long / 0 short / 2 neutral, RSI cooled 4h 89.8 → 72.2, and the 1d frame is ONE BAR from a TD9 SELL</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dated print the 08-23 note was waiting on has happened, and it
                resolved in favour of the bull case
              </span>
              . The 2026-08-23 W-SUN bar settled at 23:59Z with{' '}
              <span className="dn-tag bull">close $77,719.10</span> against W-SMA200{' '}
              <span className="dn-tag">$64,269.62</span> — a ratio of{' '}
              <span className="dn-tag bull">1.2093, or +20.93% above the cycle
              floor</span>. The prior week&rsquo;s bar closed{' '}
              <span className="dn-tag bear">$62,876.00 against $63,978.83, −1.72%
              below</span>. One week below, one week back above:{' '}
              <span className="dn-em">
                the 08-16 break is now recorded as a one-week false break, and every
                conditional false-break statement carried in the 08-22 and 08-23
                notes is discharged. This is no longer &ldquo;on track&rdquo;; it is
                in the record.
              </span>{' '}
              The bar itself was violent — O $62,876.00, H $79,555.50, L $62,723.90,
              C $77,719.10, a{' '}
              <span className="dn-tag bull">+23.61% weekly close-to-close</span> on a
              26.83% high-to-low range.{' '}
              <code>ma200w_trap_watch_state.json</code>, recomputed independently at
              00:11:40Z, prints the same close and the same $64,269.62 to the cent
              and flags <code>consecutive_above 1</code> with{' '}
              <code>invalidated_streak 2026-08-23</code>. On the desk&rsquo;s own
              parquet history the current ratio sits at the{' '}
              <span className="dn-tag">23.0th percentile</span> of 165 completed
              weekly observations (200-week warm-up off a 2019 parquet start, so the
              series begins 2023-07-02 — <em>not</em> full BTC history), and{' '}
              <span className="dn-tag">6.06%</span> of those closes printed below the
              floor.{' '}
              <span className="dn-em">
                Read that carefully: a 23rd-percentile ratio means the tape is
                historically <em>close</em> to its floor by this measure even at
                +20.93% above it, because the sample is dominated by a bull market
                that traded much further above. The percentile is a statement about
                this 165-week window, not a valuation.
              </span>
            </p>

            <p>
              The MA matrix on settled bars, offsets against live spot $77,624.49.
              The daily ladder is{' '}
              <span className="dn-tag bull">10 of 10 positive</span> and the ordering
              is unchanged:{' '}
              <span className="dn-tag bull">D-SMA50 $65,175.71 (+19.10%)</span>,{' '}
              <span className="dn-tag bull">D-SMA100 $66,129.18 (+17.38%)</span>,{' '}
              <span className="dn-tag bull">D-EMA50 $66,322.98 (+17.04%)</span>,{' '}
              <span className="dn-tag bull">D-SMA20 $66,783.91 (+16.23%)</span>,{' '}
              <span className="dn-tag bull">D-EMA100 $67,182.78 (+15.54%)</span>,{' '}
              <span className="dn-tag bull">D-EMA20 $68,473.52 (+13.36%)</span>,{' '}
              <span className="dn-tag bull">D-SMA200 $69,009.48 (+12.48%)</span>,{' '}
              <span className="dn-tag bull">D-SMA150 $69,062.56 (+12.40%)</span>,{' '}
              <span className="dn-tag bull">D-EMA150 $69,294.11 (+12.02%)</span>,{' '}
              <span className="dn-tag bull">D-EMA200 $71,704.43 (+8.26%)</span>. On
              the weekly, seven of ten are positive:{' '}
              <span className="dn-tag bull">W-SMA200 $64,269.62 (+20.78%)</span>,{' '}
              <span className="dn-tag bull">W-EMA200 $68,609.64 (+13.14%)</span>,{' '}
              <span className="dn-tag bull">W-EMA20 $69,290.15 (+12.03%)</span>,{' '}
              <span className="dn-tag bull">W-SMA20 $69,509.56 (+11.67%)</span>,{' '}
              <span className="dn-tag bull">W-EMA150 $73,884.51 (+5.06%)</span>,{' '}
              <span className="dn-tag bull">W-EMA50 $77,248.42 (+0.49%)</span>,{' '}
              <span className="dn-tag bull">W-SMA150 $77,446.22 (+0.23%)</span>.{' '}
              <span className="dn-signal">
                The three misses are all weekly and all overhead
              </span>
              :{' '}
              <span className="dn-tag bear">W-EMA100 $78,446.94 (−1.05%)</span>,{' '}
              <span className="dn-tag bear">W-SMA50 $81,784.71 (−5.09%)</span>,{' '}
              <span className="dn-tag bear">W-SMA100 $88,841.22 (−12.63%)</span>.
              Outside the 20-cell matrix, the two long-horizon dailies bracket the
              same story:{' '}
              <span className="dn-tag bear">D-EMA400 $78,228.40 (−0.77%)</span> is
              part of the immediate lid and{' '}
              <span className="dn-tag bear">D-SMA400 $86,137.77 (−9.88%)</span> is
              far above.{' '}
              <span className="dn-em">
                The D-EMA400 figure is the desk&rsquo;s own parquet recompute on
                settled dailies; the MTF 1d column independently reads −0.66% off its
                in-progress $77,700 close, implying ≈$78,216 — a $12 difference from
                different anchors, and the note carries the recompute.
              </span>
            </p>

            <p>
              <span className="dn-signal">
                The weekly shelf the 08-23 note recorded as lost has been reclaimed —
                and the margin is the story
              </span>
              . Spot is $178.27 above W-SMA150 and $376.07 above W-EMA50. That is a
              reclaim measured in fractions of a percent on levels that move each
              week; both were <em>also</em> reclaimed on 08-22 and handed back within
              24 hours. Above spot the structure is the same three-deep lid the tape
              has now failed at three times:{' '}
              <span className="dn-tag bear">$78,000 wall +32.48M (+0.48%)</span>,{' '}
              <span className="dn-tag bear">D-EMA400 $78,228.40 (+0.78%)</span>,{' '}
              <span className="dn-tag bear">W-EMA100 $78,446.94 (+1.06%)</span> —
              $446.94 of ceiling. The 24h high $78,024.19 got $24.19 into the first
              of the three and was rejected inside the hour; the 48h high $78,810.00
              cleared all three intraday on 08-22 and could not hold any of them.{' '}
              <span className="dn-em">
                Until a 1d close prints above that band, everything in this note that
                sounds bullish is a description of the tape below a lid, not a
                breakout.
              </span>{' '}
              30D close-to-close realized vol is{' '}
              <span className="dn-tag">43.15%</span> (30 log returns off 31 settled
              daily closes through the 08-23 close), essentially flat on
              08-23&rsquo;s 43.18% despite the week&rsquo;s violence, because the
              trailing window still carries the pre-breakout compression.
            </p>

            <p>
              <span className="dn-signal">
                MTF re-inverted, and the interesting thing is that it did so while
                every reversal print got closer
              </span>
              . The 00:01Z scan reads{' '}
              <span className="dn-tag bull">8 long / 0 short / 2 neutral</span> on the
              file&rsquo;s own aggregate-direction block, recovering 08-23&rsquo;s
              6 / 0 / 4 and matching the 08-22 read.{' '}
              <span className="dn-em">
                As on 08-23, two conventions coexist in the same artifact and both
                are printed here rather than blended: the per-TF 偏向 column shown in
                the table below sums to <b>5 偏多 / 3 警示 / 2 震荡</b>, because the
                aggregate block maps a 警示 row (bullish structure carrying a
                divergence warning) into its long count. 30m, 1h and 12h are the
                three rows where they disagree.{' '}
                <b>Neither convention produces a single short classification</b>, so
                every directional statement below holds on either.
              </span>{' '}
              Momentum regime flipped back to{' '}
              <span className="dn-tag bull">6 / 9 trend-continuation (JT≥0)</span>{' '}
              from 08-23&rsquo;s 5 / 9 reversal read. RSI cooled materially on the
              fast frames — 4h{' '}
              <span className="dn-tag bull">89.8 → 77.1 → 72.2</span> across the three
              notes, 30m 48.1 → 59.9, 15m 50.0 → 56.1 — while the slow frames stayed
              hot: 12h{' '}
              <span className="dn-tag bear">83.5</span>, 1d{' '}
              <span className="dn-tag bear">80.9</span>, 8h{' '}
              <span className="dn-tag bear">78.6</span>.{' '}
              <span className="dn-signal">
                The single dated risk on this panel is the 1d frame: TD setup has
                advanced to Sell 8, and one more close above close[−4 bars] prints a
                daily TD9 SELL
              </span>{' '}
              (the file cites the in-progress $77,700 close). 08-23&rsquo;s 12h TD9
              SELL has reset to Sell 1 and the 4h water-up death cross is now 8 bars
              old rather than fresh, so the fast-frame mean-reversion evidence has
              aged out while the slow-frame version has moved to the daily.
              Structurally, price is above the Ichimoku cloud on eight of ten frames,
              inside it on 3d (1 bar, 70.7k–78.5k), and{' '}
              <span className="dn-tag bear">still below the weekly cloud for a 30th
              bar, with the cloud bottom at ≈$85.9k as overhead resistance</span> —
              the one long-frame item on the page that is unambiguously not bullish.
              Divergences: a 30m top divergence and 30m/1h bottom divergences, with
              BULL hid continuation prints on 15m, 1h and 1d.
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>bias (per-TF)</th><th>close</th><th>RSI(14)</th><th>MACD cross</th><th>Ichimoku</th><th>TD setup</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="bull">long</td><td className="num">77,695</td><td className="num">56.1</td><td className="bear">death (water-up) 4b</td><td className="bull">above ↓77.3k 51b</td><td>Sell 2</td><td>BULL hid</td></tr>
                <tr><td>30m</td><td className="neut">warn*</td><td className="num">77,697</td><td className="num">59.9</td><td className="bull">golden (water-dn) 29b</td><td className="bull">above ↓76.6k 12b</td><td>Sell 1</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="neut">warn*</td><td className="num">77,704</td><td className="num">59.4</td><td className="bull">golden (water-dn) 13b</td><td className="bull">above ↓77.4k 4b</td><td>Sell 4</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="bull">long</td><td className="num">77,697</td><td className="num bear">72.2</td><td className="bear">death (water-up) 8b</td><td className="bull">above ↓66.9k 37b</td><td>Sell 4</td><td>BULL hid</td></tr>
                <tr><td>8h</td><td className="bull">long</td><td className="num">77,697</td><td className="num bear">78.6</td><td className="neut">—</td><td className="bull">above ↓63.9k 14b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>12h</td><td className="neut">warn*</td><td className="num">77,700</td><td className="num bear">83.5</td><td className="bull">golden (water-dn) 13b</td><td className="bull">above ↓64.6k 11b</td><td>Sell 1</td><td>—</td></tr>
                <tr><td>1d</td><td className="neut">ranging</td><td className="num">77,700</td><td className="num bear">80.9</td><td className="bull">golden (water-dn) 6b</td><td className="bull">above ↓64.5k 6b</td><td className="bear">Sell 8 → TD9 next bar?</td><td>BULL hid</td></tr>
                <tr><td>3d</td><td className="bull">long</td><td className="num">77,697</td><td className="num">69.4</td><td className="neut">—</td><td className="neut">in cloud 70.7k–78.5k · 1b</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="neut">ranging</td><td className="num">77,700</td><td className="num">56.6</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑85.9k 30b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1M</td><td className="bull">long</td><td className="num">77,700</td><td className="num">50.7</td><td className="neut">—</td><td className="bull">above ↓47.4k 30b</td><td>Sell 1</td><td>—</td></tr>
                <tr>
                  <td colSpan={8} className="note">
                    Two conventions, both printed. The source&rsquo;s
                    aggregate-direction block reads <b>8 long / 0 short / 2
                    neutral</b>. The per-TF 偏向 column reproduced above sums to{' '}
                    <b>5 long / 3 warn / 2 ranging</b>; rows marked <b>warn*</b> are
                    the 警示 state — bullish structure carrying a divergence warning —
                    which the aggregate block counts as long. <b>Zero short
                    classifications on either convention.</b> All closes are
                    in-progress bars from the 2026-08-24 00:01Z scan and differ from
                    the tape anchor by a few minutes and a few dollars.
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className="dn-sec">
              Dealer gamma{' '}
              <span className="dn-roman">III · clamp DEEPENED +5.32M to +247.69M footed — second-deepest of the post-08-16 lineage, NOT a lineage maximum: on the footed basis THREE whole-lineage reads are deeper (07-22 +313.63M, 07-23 +283.46M, 08-22 +249.91M) and two are lower (07-24 +235.95M, 08-23 +242.37M) · flip $63,552, spot +22.14% above (an 18.13% decline reaches it) · all ten top walls positive, summing 74.09% of the strip · the front expiry flipped back POSITIVE at +9.67M and settles today 08:00Z · 28AUG26 eased to +83.49M / 33.71%</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer clamp deepened rather than eased, and it did so on the
                footed basis this lineage is measured on
              </span>
              . By-expiry contributions foot to{' '}
              <span className="dn-tag bull">+247.69M</span> against the 08-23
              note&rsquo;s +242.37M — a <span className="dn-tag">+5.32M</span>{' '}
              deepening — and against 08-22&rsquo;s{' '}
              <span className="dn-tag">+249.91M</span>, which leaves today{' '}
              <span className="dn-tag">−2.22M</span> short of that print (the 08-22
              note printed +249.90M; the direct sum of its archived expiry table is
              +249.91M and this note carries the recomputed figure). The
              file&rsquo;s own headline total reads{' '}
              <span className="dn-tag">+245.7M</span>; the note carries the footed
              basis throughout because that is the basis the 08-22 and 08-23 notes
              used and the three are only comparable to each other.{' '}
              <span className="dn-em">
                This is the second-deepest positive clamp of the post-08-16 lineage
                and NOT a lineage maximum. The complete whole-lineage ledger on the
                same footed by-expiry basis, direct-summed from the archived expiry
                tables: <b>07-22 +313.63M, 07-23 +283.46M and 08-22 +249.91M are
                deeper than today; 07-24 +235.95M and 08-23 +242.37M are lower</b>.
                Three deeper reads, not two — 08-22 is inside the count, which is
                exactly the same +249.91M print this paragraph already measures today
                as −2.22M short of. 07-24&rsquo;s +262.1M is a headline figure on the
                other basis and is not a comparable deeper print; on the footed basis
                07-24 sits <em>below</em> today.
              </span>{' '}
              The 0-γ flip moved down to{' '}
              <span className="dn-tag">$63,552 (from $63,653, −$101)</span>. Spot
              $77,624.49 sits{' '}
              <span className="dn-tag bull">+22.14% above the flip</span>{' '}
              (77,624.49 / 63,552 − 1 = 22.1433%); the GEX file&rsquo;s own
              &ldquo;dist to flip&rdquo; reads{' '}
              <span className="dn-tag bull">+23.0%</span> off its Deribit index
              $78,168 (78,168 / 63,552 − 1 = 22.9985%) — both references positive,
              both far above.{' '}
              <span className="dn-em">
                Stated in the direction that matters for a short: the flip sits
                18.13% BELOW spot (1 − 63,552 / 77,624.49), so an 18.13% decline —
                not a 22% one — is what reaches it. Off the file&rsquo;s own index
                the same statement is 18.70%.
              </span>{' '}
              Note the index-to-spot gap has widened to{' '}
              <span className="dn-tag">+$543.51</span> from $244.70 on 08-23, which is
              why both references are printed at every site rather than one.
            </p>

            <p>
              All ten top walls are positive, summing{' '}
              <span className="dn-tag bull">+183.52M</span> — {' '}
              <span className="dn-em">74.09% of the entire footed strip sitting in
              ten strikes</span> —{' '}
              <span className="dn-tag bull">$80,000 +40.17M</span> (heaviest, up from
              +38.29M),{' '}
              <span className="dn-tag bull">$78,000 +32.48M</span>,{' '}
              <span className="dn-tag bull">$82,000 +22.00M</span>,{' '}
              <span className="dn-tag bull">$70,000 +18.57M</span>,{' '}
              <span className="dn-tag bull">$75,000 +13.08M</span>,{' '}
              <span className="dn-tag bull">$84,000 +11.65M</span>,{' '}
              <span className="dn-tag bull">$74,000 +11.59M</span>,{' '}
              <span className="dn-tag bull">$72,000 +11.57M</span>,{' '}
              <span className="dn-tag bull">$76,000 +11.21M</span>,{' '}
              <span className="dn-tag bull">$90,000 +11.20M</span>.{' '}
              <span className="dn-signal">
                The shape has shifted upward: $90,000 has entered the top ten,
                displacing 08-23&rsquo;s $85,000 +9.91M, the named positive walls at
                $70k–$76k all eased, and the named $80k+ top walls all strengthened
              </span>{' '}
              — $75,000 eased +15.20M → +13.08M, $76,000 +12.82M → +11.21M, $74,000
              +13.12M → +11.59M, $72,000 +13.49M → +11.57M.{' '}
              <span className="dn-em">
                That claim is scoped to the named walls deliberately and is NOT a
                universal statement about the strike profile, because the full
                profile does not support one: across the 08-23 → 08-24 profile
                arrays $87,000 <em>fell</em> +0.03644M → +0.01162M despite sitting
                above $80k, and $74,500 (−0.58932M → −0.68154M), $68,000 (−0.63133M →
                −0.68904M), $66,000 (−0.57959M → −0.60615M) and $61,000 (−0.31001M →
                −0.34526M) all grew more negative in magnitude despite sitting below
                $76k. Five strikes carried on 08-23 ($62,500 / $63,500 / $64,500 /
                $65,500 / $66,500) are absent from today&rsquo;s 52-point profile
                altogether, so the two profiles are not even a like-for-like universe
              </span>
              .{' '}
              <span className="dn-em">
                Read narrowly, that thins the very shelf the pullback band was drawn
                against. The band is not moved on that basis — it was chosen as a
                price level, not as a gamma level — but it is one degree less
                supported than when it was drawn.
              </span>{' '}
              By expiry the front has flipped back positive as it rolled into
              same-day:{' '}
              <span className="dn-tag bull">24AUG26 0.3 DTE +9.67M</span> — which was{' '}
              <span className="dn-tag bear">−1.21M at 1.3 DTE on 08-23</span> and{' '}
              settles today at 08:00Z, 7h55m after this anchor —{' '}
              <span className="dn-tag">25AUG26 1.3 +0.54M</span>,{' '}
              <span className="dn-tag">26AUG26 2.3 −0.03M</span>,{' '}
              <span className="dn-tag">27AUG26 3.3 −0.03M</span>;{' '}
              <span className="dn-em">the front four foot +10.15M, up from +5.34M on
              08-23</span>. The weight remains concentrated in two lines:{' '}
              <span className="dn-tag bull">28AUG26 4.3 DTE +83.49M</span> —{' '}
              <span className="dn-em">33.71% of the footed strip, eased from +87.66M
              and 36.17% on 08-23, and this is a snapshot contribution at current IV,
              not a guaranteed roll-off</span> — and{' '}
              <span className="dn-tag bull">25SEP26 32.3 DTE +77.50M (31.29%)</span>.{' '}
              <span className="dn-signal">
                Those two expiries alone carry +160.99M, or 65.00% of the strip
              </span>
              . Then 25DEC26 123.3 +33.00M, 4SEP26 11.3 +19.46M, 30OCT26 67.3
              +10.29M, 26MAR27 214.3 +6.84M, 11SEP26 18.3 +4.95M, 25JUN27 305.3
              +2.01M.
            </p>

            <p>
              IV median across{' '}
              <span className="dn-tag">998 instruments is 49.8%</span>, up from 46.7%
              across 1,038 on 08-23 — a{' '}
              <span className="dn-tag bear">+3.1pt vol re-firm</span> alongside a −40
              instrument count as the 23AUG26 line settled 08-23 08:00Z. Against 30D
              close-to-close RV of{' '}
              <span className="dn-tag">43.15%</span>, chain-level richness is{' '}
              <span className="dn-tag">≈ +6.65pt</span> (49.8 − 43.1467 = 6.6533) —{' '}
              <span className="dn-em">
                +3.13pt versus 08-23&rsquo;s +3.52pt and +0.80pt above the 08-22
                note&rsquo;s +5.85pt (49.1% IV vs 43.25% RV). No ordinal is claimed:
                there is no threshold defining a &ldquo;meaningful&rdquo; separation
                and no run-length richness ledger is loaded, so this is a widening,
                not a first
              </span>
              .{' '}
              <span className="dn-em">
                This is a chain median across N instruments, NOT a tradable spread;
                expiry-level and strike-level vega, skew and term structure are not
                loaded, so the vol read stays framework-only and no vol trade is
                contemplated on it. Put/call OI ratio 0.60 (call OI 249,430 BTC vs
                put OI 148,412 BTC) is carried as a raw file reading with no
                positioning inference attached.
              </span>
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · SECOND CONSECUTIVE WEEKEND RE-RENDER — every FRED row is bit-identical to the 08-23 panel; only the two Yahoo FX rows ticked · cross-asset stays IDIOSYNCRATIC at 0.217 with BTC +23.70% 7d leading NQ −2.39% by 26.09pt, co-moving more with metals than with the equity indices over the sample — co-movement only, identifying neither driver nor hedge</span>
            </h2>

            <p>
              <span className="dn-signal">
                There is still no new macro information, for the second note running,
                and the honest thing is to say so before quoting a single number
              </span>
              . The dashboard rendered at 2026-08-23 22:16Z — ~1.8h before this
              anchor — but 08-23 is a Sunday, FRED published nothing across the
              weekend, and{' '}
              <span className="dn-em">
                every FRED-sourced row on the panel is bit-identical to the one the
                08-23 note carried. The only two rows that moved are the Yahoo FX
                pair: DXY 98.80 → 98.85 and USD/JPY 158.86 → 158.91, both marginal,
                with DXY&rsquo;s episodic z softening from −1.81 to −1.61. Read this
                panel as UNCHANGED. A reader comparing the two notes should see
                essentially no macro delta because there is none, not because the
                tape went quiet.
              </span>{' '}
              The levels: US 10Y nominal{' '}
              <span className="dn-tag bear">4.69% (+4.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.98</span>, episodic +0.69 — RISK-OFF
              and the <em>highest fresh daily Tier-1</em> regime z on the board. It is
              not the highest value displayed: JGB 10Y carries +2.42, but on a
              monthly, 83-day-stale series that this note does not lean on. 10Y TIPS
              real{' '}
              <span className="dn-tag bear">2.35% (0.0bp)</span>, regime z +1.82,
              episodic −1.03 — RISK-OFF. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.34% (0.0bp)</span>, regime z +1.76, episodic{' '}
              <span className="dn-tag bear">+1.58</span> — flagged episodic. HY OAS{' '}
              <span className="dn-tag bull">2.75% (+2.0bp)</span>, regime z −0.74 —
              still loose. MOVE bond vol{' '}
              <span className="dn-tag">73.4 (+0.22)</span>, regime z +0.02 — neutral.
              DXY{' '}
              <span className="dn-tag bull">98.85 (+0.05)</span>, regime z −0.12,
              episodic z{' '}
              <span className="dn-tag bull">−1.61</span> — flagged episodic soft. Fed
              net liquidity{' '}
              <span className="dn-tag bear">$5.792T (−0.004T)</span>, regime z −1.22,
              episodic z <span className="dn-tag bear">−2.45</span> — RISK-OFF and
              still draining, the most hostile line for BTC on the panel. NFCI −0.559
              (stale 9d, RISK-ON). USD/JPY 158.91, US-JP 10Y spread 2.02% (+4.0bp),
              USD/CNY 6.7118 with episodic z −2.57. On Tier 3 the one flagged row is
              the 10Y breakeven at 2.34% with episodic z{' '}
              <span className="dn-tag bear">+2.38</span>, alongside sticky core CPI
              3.48%, median CPI 3.11%, Michigan 1Y 4.6% (stale 83d) and WTI $86.5
              (stale 5d).{' '}
              <span className="dn-em">
                Net: rates tight, real yields tight, credit and vol loose, the dollar
                soft, and Fed liquidity draining — the identical split read as 08-22
                and 08-23. It is a hostile backdrop that BTC has now spent eight
                sessions ignoring; that divergence is the point, and the next US
                daily print — the first since Friday — is what tests it.
              </span>{' '}
              JGB 10Y 2.67% carries the EXTREME RISK-OFF tag on a{' '}
              <span className="dn-tag stale">monthly, 83-day-stale</span> series — do
              not lean on it.
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>Macro indicator</th><th>level</th><th>Δ</th><th>regime z</th><th>episodic z</th><th>read</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.69%</td><td className="num bear">+4.0bp</td><td className="num bear">+1.98</td><td className="num">+0.69</td><td className="bear">RISK-OFF · highest fresh daily Tier-1 regime z (stale monthly JGB reads higher at +2.42)</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.35%</td><td className="num">0.0bp</td><td className="num bear">+1.82</td><td className="num bull">−1.03</td><td className="bear">RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.34%</td><td className="num">0.0bp</td><td className="num">+1.76</td><td className="num bear">+1.58</td><td className="neut">no tag · episodic flagged</td></tr>
                <tr><td>HY OAS</td><td className="num">2.75%</td><td className="num bear">+2.0bp</td><td className="num bull">−0.74</td><td className="num">+0.19</td><td className="bull">loose</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.559</td><td className="num">−0.00</td><td className="num bull">−1.46</td><td className="num bull">−1.29</td><td className="stale">RISK-ON · stale 9d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">73.4</td><td className="num bear">+0.22</td><td className="num">+0.02</td><td className="num">−0.36</td><td className="neut">neutral</td></tr>
                <tr><td>USD index (DXY)</td><td className="num">98.85</td><td className="num bear">+0.05</td><td className="num">−0.12</td><td className="num bull">−1.61</td><td className="bull">neutral regime · episodic soft · one of only two rows that moved vs 08-23</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.792T</td><td className="num bear">−0.004T</td><td className="num bear">−1.22</td><td className="num bear">−2.45</td><td className="bear">RISK-OFF · draining · episodic</td></tr>
                <tr><td>USD/JPY</td><td className="num">158.91</td><td className="num bear">+0.03</td><td className="num">+0.55</td><td className="num">−0.73</td><td className="neut">no tag · the other row that moved vs 08-23</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.02%</td><td className="num bear">+4.0bp</td><td className="num">−0.17</td><td className="num">+0.69</td><td className="neut">neutral</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7118</td><td className="num bull">−0.01</td><td className="num bull">−1.56</td><td className="num bull">−2.57</td><td className="bull">no tag · episodic</td></tr>
                <tr><td>10Y breakeven (T3)</td><td className="num">2.34%</td><td className="num">0.0bp</td><td className="num">+0.32</td><td className="num bear">+2.38</td><td className="neut">driver panel · no composite by design</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">monthly · stale 83d · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 168 rows, generated 2026-08-24
              00:00Z — <span className="dn-em">a 7-day rolling read, not a same-day
              read</span>). Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.217</span>, down slightly from
              08-23&rsquo;s 0.220 and comfortably inside the{' '}
              <span className="dn-tag">IDIOSYNCRATIC</span> band (&lt;0.25).
              BTC&rsquo;s correlation ranking is topped by metals with single equities
              mixed into the middle: PLAT{' '}
              <span className="dn-tag">+0.313</span>, SILVER{' '}
              <span className="dn-tag">+0.254</span>, MSFT{' '}
              <span className="dn-tag">+0.243</span>, META{' '}
              <span className="dn-tag">+0.194</span>, GOLD{' '}
              <span className="dn-tag">+0.190</span>, PALL +0.181, JPY −0.154, AMZN
              +0.154, COPPER +0.149, URNM +0.109, EUR +0.108, TSLA +0.097 — with{' '}
              <span className="dn-tag">NQ at +0.072</span> and{' '}
              <span className="dn-tag">SP500 at +0.064</span> near the bottom, but{' '}
              <span className="dn-em">
                &ldquo;equity-last&rdquo; would be wrong: MSFT +0.243 ranks third and
                META +0.194 fourth, both above GOLD +0.190
              </span>
              . 7d performance:{' '}
              <span className="dn-tag bull">BTC +23.70%</span> against{' '}
              <span className="dn-tag bear">NQ −2.39%</span>,{' '}
              <span className="dn-tag bear">SP500 −1.34%</span>,{' '}
              <span className="dn-tag bear">JP225 −3.68%</span>,{' '}
              <span className="dn-tag bear">NVDA −3.69%</span>,{' '}
              <span className="dn-tag bear">META −6.46%</span>,{' '}
              <span className="dn-tag bear">MSFT −2.13%</span>, TSLA{' '}
              <span className="dn-tag bull">+6.93%</span>, AAPL +1.52%. Real assets
              firm: URNM{' '}
              <span className="dn-tag bull">+9.25%</span>, PLAT +6.89%, BRENT +6.28%,
              CL +6.01%, SILVER +5.77%, GOLD +5.04%.{' '}
              <span className="dn-em">
                BTC leads NQ by +26.09pt on 7d, widened from the 08-23 note&rsquo;s
                +24.93pt because BTC added a session while NQ did not trade. What the
                sample supports and nothing more: over these 168 hourly rows BTC
                co-moved more with selected metals than with NQ or SP500. That is a
                statement about contemporaneous co-movement in one 7d window — it
                does <em>not</em> identify what is driving the move, and no
                hedge-ratio, stability or out-of-sample work is loaded here, so it
                establishes nothing about whether the move can or cannot be hedged
                with TradFi instruments. Note also that two of the seven days in this
                window are weekend days and carry no equity prints at all, which
                mechanically damps every BTC-equity correlation in the table.
              </span>{' '}
              BTC/NQ ratio, max-pain and NTT pivots remain NOT LOADED —
              framework-only.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · book FLAT · pullback long HALF-ARMED and still NOT ARMED — leg 1 FIRED on the $77,719.10 settle, leg 2 missed by $20.30 (lowest 1h close $76,020.30 vs a $76,000 band top, after a $75,588.00 wick $412 inside) · chase-short STOOD DOWN, price leg 18.13% away and the gamma leg deepened · the 08-19 scout stays closed EXPIRED UNFILLED · NEW open item: the arming rule&rsquo;s price basis was never specified and the two candidate bases disagreed by $91.90</span>
            </h2>

            <p>
              <span className="dn-signal">
                One leg fired, one leg missed by $20.30, and the book did nothing —
                which is the rule working, not the rule failing
              </span>
              . The 08-22 note framed a pullback long at the $75,000–$76,000 wall
              band, explicitly NOT ARMED, gated on two legs.{' '}
              <b>Leg 1 FIRED</b>: the 08-23 W-SUN bar settled at $77,719.10 against
              W-SMA200 $64,269.62, +20.93% above, and that is permanent — a settled
              weekly close cannot un-settle, so leg 1 is satisfied for as long as this
              framework stands.{' '}
              <b>Leg 2 did not fire.</b> The condition was a held 1h close inside
              $75,000–$76,000. Price worked in and around the band for
              roughly three hours — its 1m lows sat at or below $76,000 between
              05:14Z and 08:04Z — printing a low of{' '}
              <span className="dn-tag">$75,588.00 @ 08-23 05:17Z</span> —{' '}
              <span className="dn-tag">$412.00, or 0.54%, inside the band top</span> —
              and 14 of the day&rsquo;s 1,440 one-minute bars closed at or under
              $76,000, the lowest at $75,743.90. But{' '}
              <span className="dn-em">
                the lowest exchange 1h close in the entire window was $76,020.30 on
                the 07:00Z bar, $20.30 above the band top
              </span>
              , and by the next hour price was $466 higher and climbing.
            </p>

            <p>
              <span className="dn-signal">
                That $20.30 exposed a design defect in the desk&rsquo;s own arming
                rule and it is recorded here before anything else is claimed about it
              </span>
              . The rule said &ldquo;a 1h close held inside $75,000–$76,000&rdquo;
              without specifying a price basis or what &ldquo;held&rdquo; means, and
              the two candidate bases disagree:{' '}
              <span className="dn-em">
                the exchange 1h bar (Binance BTCUSDT perp, parquet) closed the 07:00Z
                hour at $76,020.30 — outside; the live tape&rsquo;s 07:59Z
                minute-resolution sample read $75,928.40 perp / $75,929.08 spot —
                inside. The gap between the two readings is $91.90, and it exists
                because the 07:59 one-minute bar itself opened at $75,932.80 and
                wicked to $76,020.30 in its final seconds. On the exchange-bar basis
                the trade does not arm; on the tape-sample basis a single hour touches
                the band and immediately leaves.
              </span>{' '}
              The desk resolves this against itself: <b>the exchange 1h bar is the
              basis</b>, because that is the object the word &ldquo;close&rdquo;
              refers to and because the tape sample is a snapshot, not a close.
              Under that basis leg 2 is unfired.{' '}
              <em>
                And &ldquo;held&rdquo; was never satisfied under either basis — one
                hour touching a band and reversing is not a hold. The specification
                gap is a real open item and is listed as such; it is not resolved by
                picking whichever basis produces the entry the desk wanted.
              </em>
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · pullback re-entry framework · <b>HALF-ARMED — STILL NOT ARMED</b> · leg 1 FIRED on the settle · leg 2 missed by $20.30 and price is now $1,624.49 above the band top</span>
              <div className="dn-trade-name">
                Pullback long at the $75,000–$76,000 wall band — carried forward at
                unchanged levels; one leg is now permanently satisfied and the other
                is further away than it has ever been
              </div>
              <div className="dn-thesis">
                The structural case strengthened this session and is now backed by a
                settled print rather than a projection: the 08-23 W-SUN close{' '}
                <b>$77,719.10</b> sits +20.93% above W-SMA200 $64,269.62, recording
                the 08-16 break as a one-week false break; the daily MA ladder is
                10-of-10 positive and the full matrix 17-of-20; the dealer book
                deepened to <b>+247.69M footed</b> with all ten top walls positive;
                MTF re-inverted to 8 long / 0 short / 2 neutral with zero shorts on
                either convention; and the lost weekly shelf was reclaimed. The case
                against paying up is unchanged and has two new lines: funding has
                been welded to the +10.95% cap for <b>3,798 consecutive sampled
                rows</b> and 1,441 / 1,441 rows of this window; the base contracted
                only −0.29% on net (gross turnover is not observable in this feed);{' '}
                <b>retail re-crowded +1.51pt to 51.69%</b>, the second re-crowding
                endpoint in three sessions (48.86 → 50.95 → 50.18 → 51.69 on exact
                00:05Z endpoints) and not a first; the 1d frame is{' '}
                <b>one bar from a TD9 SELL</b>; and the
                $75,000/$76,000 walls that bracket the band both got lighter.{' '}
                <b>Leg 1 is FIRED and permanent. Leg 2 is unfired and further away
                than at any point since the band was drawn</b> — spot sits $1,624.49 above the band
                top, so a 2.09% decline reaches it (spot is +2.14% above). The framework is carried forward at the
                same levels. It is not re-drawn upward to meet a price that came
                within $20.30 and left.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">NOT ARMED · leg 1 <b>FIRED</b> (08-23 W-SUN settled $77,719.10 vs W-SMA200 $64,269.62, +20.93%) · leg 2 <b>UNFIRED</b> (lowest 1h close $76,020.30 = $20.30 above the band top; 1m low $75,588.00 = $412.00 inside; no hour held)</span></div>
                <div><span className="dn-lvl-k">arming condition (remaining leg)</span><span className="dn-lvl-v bull">a 1h close on the exchange bar basis held inside $75,000–$76,000 — the band bracketed by the $75,000 +13.08M and $76,000 +11.21M walls · basis now specified explicitly after this session&rsquo;s $91.90 disagreement</span></div>
                <div><span className="dn-lvl-k">entry</span><span className="dn-lvl-v bull">≈$76,000 on the arming print · 0.2R · no chase above the band; a print that never reaches the band is a trade the desk does not take</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1d close &lt; $72,992.40 — the 08-21 daily low and the last pivot before the breakout leg, sitting just above the $72,000 +11.57M wall · the stop is 5.97% below spot — a 5.97% decline reaches it (equivalently, spot is +6.35% above the stop)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$80,000 (the +40.17M heaviest wall · spot +3.06% away) then W-SMA50 $81,784.71 (+5.36%) — W-SMA50 moved from the 08-23 note&rsquo;s $81,773.47 on the settle, exactly as that note said it would</span></div>
                <div><span className="dn-lvl-k">first overhead to clear</span><span className="dn-lvl-v bear">the three-deep lid $78,000 wall +32.48M (+0.48%) / D-EMA400 $78,228.40 (+0.78%) / W-EMA100 $78,446.94 (+1.06%) — $446.94 of ceiling; the 24h high $78,024.19 got $24.19 into the first of the three and failed inside the hour</span></div>
                <div><span className="dn-lvl-k">framework decay (NEW)</span><span className="dn-lvl-v">if a 1d close prints above the $78,000 / $78,228.40 / $78,446.94 lid, this framework is retired as too low rather than carried — the same disposal the 08-19 scout got, taken deliberately instead of by drift</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R (illustrative):</b> entry ≈$76,000, stop $72,992.40 =
                $3,007.60 of risk; first target $80,000 = $4,000 of reward ={' '}
                <b>1.33:1</b> (4,000 / 3,007.60 = 1.3300) — unchanged from 08-23
                because none of the three levels moved. That is thin for a 0.2R scout
                and it is thin <em>by construction</em>. <b>Hard rule:</b> the levels
                do not move because price stalled $20.30 short of the trigger. If the
                tape never returns to the band, the framework expires unfilled and is
                recorded as such — the same discipline that recorded the 08-19 scout
                as expired rather than re-drawing it 20% higher. The difference this
                session is that the miss is now measured in dollars rather than
                thousands, which makes the temptation to re-specify the rule
                stronger, not weaker — and that is exactly why it is not re-specified
                in the direction of the entry.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · chase-short · <b>STOOD DOWN</b> — price leg 18.13% from arming (further than 08-23&rsquo;s 17.48%, only because price rose) · gamma leg DEEPENED +5.32M to +247.69M footed, second-deepest of the post-08-16 lineage with three whole-lineage reads deeper (07-22, 07-23, 08-22)</span>
              <div className="dn-trade-name">
                Chase-short — stood down again; a settled false break above the cycle
                floor is the opposite of a short setup and this note does not
                manufacture one from the reversal prints
              </div>
              <div className="dn-thesis">
                The two conditions that would put a short on the table are a price
                leg (spot within reach of the 0-γ flip, where the dealer book stops
                dampening and starts amplifying) and a gamma leg (the positive clamp
                unwinding). Both moved <em>away</em> this session. The flip sits at{' '}
                <b>$63,552, 18.13% below spot</b> — an 18.13% decline is required to
                reach it, against 17.48% on 08-23; the leg moved further only because
                price rose $487, not because the structure changed. The clamp
                deepened +5.32M to <b>+247.69M footed</b>, which is the
                second-deepest positive print of the post-08-16 lineage and{' '}
                <b>NOT a lineage maximum</b> — on the footed basis carried
                throughout, the complete ledger is{' '}
                <b>
                  07-22 +313.63M, 07-23 +283.46M and 08-22 +249.91M deeper (three
                  deeper reads, with 08-22 sitting just +2.22M above today), against
                  07-24 +235.95M and 08-23 +242.37M lower
                </b>
                . The evidence that might tempt a short — the 1d TD8 one bar
                from TD9, RSI 83.5 on 12h and 80.9 on 1d, the 30m top divergence, the
                thinning $74k–$76k wall shelf, retail re-crowding +1.51pt — is all
                mean-reversion evidence inside an <b>8 long / 0 short / 2 neutral</b>
                {' '}MTF map on the aggregate convention (5 long / 3 warn / 2 ranging
                row-summed) with zero short classifications on either, a 10-of-10
                positive daily ladder, and a weekly bar that just settled +20.93%
                above the cycle floor.{' '}
                <em>
                  Shorting a settled false-break reclaim into a +247.69M
                  positive-gamma book, 22% above the flip, is a trade with no
                  structural backing.
                </em>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">STOOD DOWN — no short contemplated at this snapshot</span></div>
                <div><span className="dn-lvl-k">price leg (unmet)</span><span className="dn-lvl-v bear">spot within reach of the 0-γ flip $63,552 — currently 18.13% below spot; spot is +22.14% above it (18.70% / +23.00% off the file&rsquo;s Deribit index $78,168)</span></div>
                <div><span className="dn-lvl-k">gamma leg (unmet · moved further away)</span><span className="dn-lvl-v bear">footed aggregate GEX turning negative or collapsing toward zero — currently +247.69M (headline +245.7M), DEEPENED +5.32M vs 08-23; the 28AUG26 +83.49M / 33.71% roll-off at 4.3 DTE is the nearest structural catalyst that could move this leg</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">do not read the pending 1d TD9 SELL, the 12h/1d RSI in the 80s, the 30m top divergence or the retail re-crowd as short triggers — they are mean-reversion prints inside an intact and now settlement-confirmed bullish structure</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the gamma leg has a dated candidate and
                the price leg does not. 28AUG26 currently contributes +83.49M —
                33.71% of the footed strip — at current IV, and 25SEP26 another
                +77.50M / 31.29%, so two lines carry 65.00% of the clamp. Absent
                offsetting book, spot or IV changes, the 28AUG26 contribution comes
                off at the 2026-08-28 08:00Z settle and thins the clamp materially.
                That is a <em>watch</em>, not a forecast: the strip re-prices
                continuously and a snapshot share is not a guaranteed roll-off — this
                session it eased from 36.17% to 33.71% while the strip as a whole grew.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">closed · 08-19 cover-bounce scout · EXPIRED UNFILLED — recorded 08-22, unchanged, and not re-litigated here</span>
              <div className="dn-trade-name">
                08-19 scout — closed out as expired; carried in the book only as the
                open design defects it exposed, which now number two
              </div>
              <div className="dn-thesis">
                The 08-19 scout (entry ≈$64,632, stop $63,301, targets $66,343 /
                $66,391) was recorded on 08-22 as <b>EXPIRED UNFILLED</b> at an
                opportunity cost of 10.03R gross / ≈2.01R at the stated 0.2R sizing,
                with both targets tagged 2026-08-19 15:05Z. Nothing this session
                changes that record and the note does not re-argue it. What{' '}
                <em>is</em> live is the defect it exposed: the trade never armed
                because leg 2 required a certifiable SM net long, and the SM feed
                produces its net long inside one-minute trader-count discontinuities.{' '}
                <b>
                  That has now happened four days running — 08-20 07:06Z, 08-21
                  06:21Z, 08-22 06:41Z and 08-23 07:06Z, the last of them downward —
                  which establishes the discontinuities as recurrent rather than
                  one-off. What it does NOT establish is why: no roster membership,
                  scheduler, account-continuity or ingestion evidence is loaded, so
                  the mechanism stays an unverified inference and the desk does not
                  name one.
                </b>{' '}
                The recurrence alone is enough for the design conclusion: a gate
                written against <code>net_btc</code> as a level or a delta is unsound
                on this series regardless of what the mechanism turns out to be.{' '}
                <b>
                  A second defect of the same family entered the book today: the
                  pullback long&rsquo;s leg 2 was written as &ldquo;a 1h close
                  held&rdquo; without specifying a price basis, and the two candidate
                  bases disagreed by $91.90 on the one hour that mattered.
                </b>{' '}
                Both are carried as open items for a later session, not patched
                mid-note beyond the basis being named explicitly in the trade block
                above.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">EXPIRED UNFILLED · closed out 08-22 · NOT re-drawn at a higher price · no further accounting added this session</span></div>
                <div><span className="dn-lvl-k">open design item 1 · SM gate</span><span className="dn-lvl-v bear">SM trader-count discontinuities at 08-20 07:06Z (long_traders 587 → 1,388), 08-21 06:21Z (1,336 → 2,497), 08-22 06:41Z (2,260 → 4,976), 08-23 07:06Z (5,111 → 4,610) — cause NOT loaded, only the steps themselves · a binary decision gate on <code>net_btc</code> is unsound on that evidence alone; replace with a step-free window test or drop the leg</span></div>
                <div><span className="dn-lvl-k">open design item 2 · price basis (NEW)</span><span className="dn-lvl-v bear">&ldquo;a 1h close held inside a band&rdquo; is under-specified: exchange 1h bar $76,020.30 vs live-tape 07:59Z sample $75,928.40 / $75,929.08 — a $91.90 spread on the decisive hour, and &ldquo;held&rdquo; has no bar count attached. Every future band gate must name basis and duration before it is published</span></div>
              </div>
              <div className="dn-gating">
                <b>Accounting note:</b> the opportunity-cost figures are arithmetic
                on a trade that was never entered, recorded for process
                accountability, not as a claim of performance. No lineage MFE ledger
                exists, so the miss is still not ranked against prior misses — that
                ledger remains an open item from the 08-22 audit, and today&rsquo;s
                $20.30 near-miss is a second entry that would belong in it.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the dated print RESOLVED — the 08-16 break is a recorded one-week false break · the new dated risk is a 1d TD9 SELL one bar out; the new dated catalyst is the 28AUG26 roll-off at 4.3 DTE · book FLAT, pullback HALF-ARMED and NOT ARMED, chase-short stood down</span>
            </h2>

            <p>
              Of the 08-23 conditions: the{' '}
              <b>08-23 W-SUN settle HAPPENED and resolved above the floor</b> at
              $77,719.10 vs $64,269.62 (+20.93%), converting the 08-16 break into a
              recorded one-week false break and firing leg 1 of the pullback long;
              the <b>pullback arming condition still DID NOT FIRE</b> because leg 2
              missed by $20.30 on the exchange 1h close; the{' '}
              <b>shelf-reclaim watch FIRED</b> — spot closed back above W-SMA150
              $77,446.22 and W-EMA50 $77,248.42, demoting 08-23&rsquo;s loss toward a
              wick, though by only $178.27; the <b>lid test DID NOT FIRE</b> — the 24h
              high $78,024.19 got $24.19 into the $78,000 wall and was rejected; the{' '}
              <b>chase-short stayed stood down</b> with its price leg moving from
              17.48% to 18.13% purely on price and its gamma leg deepening; the{' '}
              <b>funding un-pin DID NOT FIRE</b> and the streak extended from 2,360 to
              3,798 rows; the <b>28AUG26 clamp did not roll off</b> and its share
              eased from 36.17% to 33.71%; and the <b>08-19 scout stayed closed</b>.{' '}
              <em>
                Two adverse facts moved: retail re-crowded +1.51pt to 51.69% — the
                second re-crowding endpoint in three sessions (48.86 → 50.95 → 50.18
                → 51.69), not a first — and the 1d frame advanced to TD Sell 8, one
                bar from a daily TD9 SELL, which IS new. One new design defect entered: the arming
                rule&rsquo;s price basis was never specified. Net, the structural
                case got a settlement stamp and the entry got worse, which is the
                same trade-off the last three notes have described in different
                words.
              </em>
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td><b>08-23 W-SUN weekly settle</b> (RESOLVED)</td><td className="bull">close $77,719.10 vs W-SMA200 $64,269.62 at 2026-08-23 23:59Z = +20.93% above · <code>consecutive_above 1</code>, <code>invalidated_streak 2026-08-23</code></td><td>RECORDED: the 08-16 break is a one-week false break; leg 1 of the pullback long is permanently satisfied and every conditional false-break statement in the 08-22 / 08-23 notes is discharged</td></tr>
                <tr><td>Pullback long — arming (remaining leg)</td><td className="bull">a 1h close on the exchange bar basis held inside $75,000–$76,000 · spot now sits $1,624.49 above the band top — a 2.09% decline reaches it (spot is +2.14% above)</td><td>scout long 0.2R at ≈$76,000, stop 1d close &lt; $72,992.40, targets $80,000 then W-SMA50 $81,784.71 · no chase above the band</td></tr>
                <tr><td><b>1d TD9 SELL</b> (NEW dated risk · one bar out)</td><td className="bear">1d TD setup at Sell 8; one more close above close[−4 bars] prints TD9 · the file cites the in-progress $77,700 close</td><td>not a short trigger and not treated as one; it is the reason the desk does not chase into $78,000 and the strongest single argument that the band could still be revisited</td></tr>
                <tr><td><b>Lid test</b> (unfired · carried)</td><td className="bear">1d close above the stacked $78,000 wall +32.48M / D-EMA400 $78,228.40 / W-EMA100 $78,446.94 band — $446.94 of ceiling</td><td>the 24h high $78,024.19 got $24.19 in and failed inside the hour. A daily close above the band is the first genuine continuation evidence and <b>retires the pullback framework as too low</b> rather than carrying it</td></tr>
                <tr><td><b>Shelf hold</b> (replaces the 08-23 reclaim watch)</td><td className="bull">1d closes sustained above W-EMA50 $77,248.42 / W-SMA150 $77,446.22 — currently +0.49% / +0.23%, a $178–$376 margin</td><td>the pair was reclaimed on 08-22, lost on 08-23 and reclaimed again today; a third loss inside a week would make the &ldquo;shelf&rdquo; framing itself wrong and the level should then be dropped from the book rather than re-argued</td></tr>
                <tr><td>Structural invalidation</td><td className="bear">1d close &lt; $72,992.40 (08-21 daily low, above the $72,000 +11.57M wall) · 5.97% below spot — a 5.97% decline reaches it (spot is +6.35% above)</td><td>the breakout leg is a failed move; the pullback framework is cancelled rather than armed and the whole bullish structure is reassessed from scratch</td></tr>
                <tr><td>Funding un-pin</td><td className="bull">funding prints below the +10.95% cap for a sustained stretch, ideally with OI falling</td><td>would relieve the single worst line in the book (3,798 consecutive capped rows, 1,441 / 1,441 in this 24h window, 0 / 10,081 negative on 7d) and materially improve the pullback entry; a cap-pinned book paying maximum carry into a base that contracted only −0.29% on net is the fragility, not the price</td></tr>
                <tr><td><b>Retail re-crowd</b> (NEW watch)</td><td className="bear"><code>mkt_long_pct</code> 51.69%, +1.51pt in 24h and +3.17pt off the 08-20 trough of 48.52% · the SECOND re-crowding endpoint in three sessions, not the first: 48.86% (08-21) → 50.95% (08-22, +2.09pt) → 50.18% (08-23) → 51.69% today</td><td>the de-crowding was the cleanest leg of the bull case; watch for a return through ~55% as the point at which the &ldquo;retail is not in this&rdquo; argument stops being available. At 51.69% it is a note, not a signal</td></tr>
                <tr><td>28AUG26 gamma roll-off</td><td className="bear">+83.49M = 33.71% of the footed +247.69M strip, 4.3 DTE, settles 2026-08-28 08:00Z · with 25SEP26 +77.50M / 31.29%, two lines carry 65.00% of the clamp</td><td>a snapshot contribution at current IV, not a guaranteed roll-off; absent offsetting book / spot / IV changes it thins the clamp materially and is the nearest catalyst that could move the chase-short&rsquo;s gamma leg</td></tr>
                <tr><td>SM feed (design defect · NOT a trading condition)</td><td className="stale">trader counts stepped 08-20 07:06Z, 08-21 06:21Z, 08-22 06:41Z, 08-23 07:06Z — four consecutive days, the last downward; 81.76% of this note&rsquo;s 24h Δnet is the 08-23 step · the steps are observed, the upstream cause is NOT loaded and is not asserted</td><td>no gate is written against <code>net_btc</code> in this note; the only SM statement carried is the step-free 16h59m window (Δnet −1,784.9, −8.32%) and it is descriptive, not decisive</td></tr>
                <tr><td>Arming-rule price basis (design defect · NEW)</td><td className="stale">exchange 1h bar $76,020.30 vs live-tape 07:59Z sample $75,928.40 / $75,929.08 — $91.90 apart on the decisive hour; &ldquo;held&rdquo; carries no bar count</td><td>the exchange 1h bar is adopted as the basis and is now stated in the trade block; the specification gap is recorded as an open item and every future band gate must name basis and duration before publication</td></tr>
                <tr><td>Macro re-grow / rates filter</td><td className="stale">panel UNCHANGED for a second note — weekend re-render of the Friday 08-21 FRED print: 10Y 4.69% (z +1.98), TIPS real 2.35%, HY OAS 2.75%, MOVE 73.4, Fed net liq $5.792T draining (episodic z −2.45); only DXY 98.85 and USD/JPY 158.91 ticked</td><td>no macro action available or warranted from a re-render; Monday&rsquo;s US daily prints are the first thing that can move this panel. BTC&rsquo;s r = +0.072 to NQ says only that the two barely co-moved over this 7d sample — it does not identify the driver either way</td></tr>
              </tbody>
            </table>

            <p>
              The line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the tape returns to $75,000–$76,000 to let the desk buy a
                setup that now has one leg permanently satisfied — or closes a day
                above the $78,000 / $78,228.40 / $78,446.94 lid and retires the
                framework as too low
              </span>
              . Everything else is context. The structure is better than it was
              yesterday and it is better on evidence, not on narrative: a settled
              weekly close +20.93% above the cycle floor, a 10-of-10 positive daily
              ladder, a +247.69M footed dealer clamp with every top wall positive, an
              8 long / 0 short MTF map, and the weekly shelf reclaimed. The tape is
              also more hostile to an entry than it was yesterday: funding welded to
              the cap for 3,798 consecutive rows, retail re-crowding for the second
              time in three sessions, a daily TD9 SELL one bar out, IV richness
              widened to +6.65pt, and price sitting in the top fifth of its own 24h range
              $1,624.49 above the band it refused to close in.{' '}
              <em>
                Those two readings are not in conflict — they describe a bullish
                structure at a bad price, for the third consecutive note, with the
                difference that the good price briefly existed this session and the
                desk&rsquo;s own rule, correctly applied, did not let it buy.
              </em>{' '}
              Book stays FLAT, the pullback long stays defined, half-armed and NOT
              ARMED at $75,000–$76,000, the chase-short stays stood down, and the
              desk waits for either the band or the lid.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 — post codex hostile audit
            </span>
            <b>Status: v2 EN note — post codex hostile audit.</b> STAGE B ran a
            hostile-but-fair cross-model pass at xhigh effort against the v1 draft and
            returned <b>BLOCK-CRITICAL — 2 CRITICAL + 3 MAJOR + 4 MINOR</b>. The full
            verdict, evidence and suggested fixes are recorded at{' '}
            <code>audits/2026-08-24-desk-note.md</code> and were not edited by this
            stage. Every finding was corrected in place, then closed by grep across
            the FULL file — not only at the auditor&rsquo;s cited lines, because those
            lines are primary examples of a broken invariant rather than an
            enumeration of it. That distinction is the documented root cause of the
            2026-06-08 / 06-09 pipeline failures. Per-finding closure record, with the
            pattern actually searched:
            <br /><br />
            <b>DN-001 · CRITICAL · retail &ldquo;first adverse move&rdquo; ordinal.</b>{' '}
            Patterns <code>first adverse move</code> / <code>first time in the run</code>{' '}
            / <code>wrong way</code> / <code>first erosion</code> /{' '}
            <code>first session it has moved</code> / <code>re-crowding for the first</code>{' '}
            — <b>7 hits before, 0 after</b>. Corrected at the retail tile, the §
            lead, the §I roman, the §I retail paragraph and its closing sentence, the
            pullback-long thesis, the §VI paragraph, the §VI decision-table retail row
            and the §VI closing paragraph — nine sites against the seven cited.
            Replacement claim is the printed sequence on exact 00:05Z daily endpoints,
            48.86% (08-21) → 50.95% (08-22, +2.09pt) → 50.18% (08-23, −0.77pt) →
            51.69% (08-24, +1.51pt), making today the <b>second re-crowding endpoint
            in three sessions</b> and 08-22 the larger adverse move.{' '}
            <b>RESOLVED.</b>
            <br /><br />
            <b>DN-002 · CRITICAL · incomplete whole-lineage GEX ledger.</b> Patterns{' '}
            <code>deeper reads are 07-22</code> / <code>313.63</code> /{' '}
            <code>283.46</code> / <code>249.90</code> / <code>2.21M</code> — the
            defective two-name ledger had <b>2 hits before, 0 after</b>; the stale{' '}
            <code>+249.90M</code> / <code>−2.21M</code> pair had <b>2 hits before, 0
            after</b> as a live claim (one surviving mention at §III is an explicit
            disclosure that the 08-22 note printed +249.90M while its archived expiry
            table direct-sums to +249.91M). The complete ledger — <b>07-22 +313.63M,
            07-23 +283.46M and 08-22 +249.91M deeper; 07-24 +235.95M and 08-23
            +242.37M lower</b> — now appears at all three sites: the §III roman, the
            §III body and the chase-short gamma-leg block. Today is −2.22M short of
            08-22, and the narrower <em>second-deepest post-08-16</em> claim is
            retained because it is correct. <b>RESOLVED.</b>
            <br /><br />
            <b>DN-003 · MAJOR · mismatched 72h OI/price endpoints.</b> Patterns{' '}
            <code>same 72h</code> / <code>shrunk ~5% off its peak</code> —{' '}
            <b>1 hit before, 0 after</b>. The §I OI paragraph now states the matched
            pair (over the exact 72h window price +6.19%, OI −1.89%) and states the
            peak-referenced −4.96% separately, naming the 8h45m offset between the
            72h baseline and the 08-21 08:50Z intrawindow peak. The tile and the §I
            horizon list already printed −4.96% as an explicitly peak-referenced
            figure and were left as-is because they never coupled it to a return.{' '}
            <b>RESOLVED.</b>
            <br /><br />
            <b>DN-004 · MAJOR · universal strike-profile claim.</b> Pattern{' '}
            <code>every strike</code> — <b>1 hit before, 0 after</b>; secondary sweep
            on <code>heavier</code> / <code>lighter</code> / <code>thinn</code>{' '}
            confirmed the three remaining uses are all scoped to named walls. The
            claim is now scoped to the displayed material walls and the counter-cases
            are printed: $87,000 fell +0.03644M → +0.01162M above $80k, and $74,500,
            $68,000, $66,000 and $61,000 all grew more negative below $76k. Five
            strikes carried on 08-23 are absent from today&rsquo;s 52-point profile
            entirely. <b>RESOLVED.</b>
            <br /><br />
            <b>DN-005 · MAJOR · SM causal attribution stated as fact.</b> Patterns{' '}
            <code>scheduled roster rebuild</code> / <code>not positions closing</code>{' '}
            / <code>will keep producing</code> / <code>how this field behaves</code> /{' '}
            <code>rather than an artifact</code> / <code>re-sync</code> —{' '}
            <b>11 hits before, 0 after</b>. The discontinuities are retained as
            observed fact with their exact minutes and count steps; the mechanism is
            now labelled <em>consistent with a recurrent roster re-sampling or
            feed-universe change, upstream cause NOT loaded</em> at the SM tile, the §
            lead, the §I roman, the §I SM paragraph, the clean-window paragraph, the
            08-19 scout block, both open-design-item rows and the §VI SM row. The
            design conclusion is re-grounded on recurrence alone, which the tape does
            prove, rather than on a named cause it does not. <b>RESOLVED.</b>
            <br /><br />
            <b>DN-006 · MINOR · undefined IV &ldquo;first meaningful&rdquo; ordinal.</b>{' '}
            Patterns <code>first session of the run</code> / <code>first meaningful</code>{' '}
            / <code>richness doubled</code> — <b>2 hits before, 0 after</b>. Both the
            §III body and the IV tile now print the measurable form: +6.65pt, +3.13pt
            versus 08-23&rsquo;s +3.52pt and +0.80pt above 08-22&rsquo;s +5.85pt, with
            an explicit statement that no threshold and no run-length richness ledger
            exist. The §VI closing line was changed from <em>doubled</em> to{' '}
            <em>widened</em> for the same reason. <b>RESOLVED.</b>
            <br /><br />
            <b>DN-007 · MINOR · post-anchor corroboration lag.</b> Pattern{' '}
            <code>6m35s</code> — <b>2 hits before, 0 after</b>. 00:05:00Z → 00:11:40Z
            is 6m40s; both the manifest row and this block now print 6m40s, and the
            manifest row shows the subtraction. <b>RESOLVED.</b>
            <br /><br />
            <b>DN-008 · MINOR · weekend-day denominator.</b> Pattern{' '}
            <code>seven weekend days</code> — <b>1 hit before, 0 after</b>. The
            cross-asset paragraph now reads &ldquo;two of the seven days in this
            window are weekend days&rdquo;. <b>RESOLVED.</b>
            <br /><br />
            <b>DN-009 · MINOR · two distinct 69.00% retail plateaus.</b> Patterns{' '}
            <code>the same 69.00% print</code> / <code>the same print the 08-23 note
            dated</code> — <b>2 hits before, 0 after</b>. The retail tile and the §I
            retail paragraph now record a <em>fresh</em> 69.00% plateau spanning
            08-17 00:06Z–00:11Z and state that the 08-23 note&rsquo;s 08-16 23:12Z
            plateau has rolled outside this note&rsquo;s inclusive window, which starts
            08-17 00:05Z: the value repeats, the rows do not. <b>RESOLVED.</b>
            <br /><br />
            <b>Closure summary: 9 of 9 findings RESOLVED, hits-after = 0 on every
            pattern searched.</b> Nothing was promoted on the strength of the cited
            lines alone. All corrected figures were independently recomputed against
            the pinned artifacts before the edit — the retail endpoint sequence and
            the 72h price/OI pair from{' '}
            <code>snapshots/2026-08-24-0007/live_db_pin_2026-08-24T0005Z.jsonl</code>,
            the six expiry-table sums from the 07-22 / 07-23 / 07-24 / 08-22 / 08-23 /
            08-24 GEX archives, the strike profile from the 08-23 and 08-24 1D-profile
            arrays, and the 6m40s lag from{' '}
            <code>ma200w_trap_watch_state.json</code>. The audit&rsquo;s
            <b> Codex-confirmed clean</b> section — gate and route, JSX integrity,
            pin/live identity, tape range, funding, the remaining OI and SM
            arithmetic, MA/RV/200W, current GEX arithmetic, MTF, macro, cross-asset
            numbers, and the trade arithmetic and scope — is carried unchanged. The
            supplementary <code>ask-deepseek</code> second audit returned HTTP 402
            (insufficient balance) and contributed nothing to adjudicate.{' '}
            <b>Build proxy:</b> <code>npx --no-install tsc --noEmit</code> exits 0;
            full <code>next build</code> remains blocked by Node 18.19.1 against Next
            16.2.6.
            <br /><br />
            <b>Open items the audit recorded and this note does NOT close:</b> the
            pullback rule still does not define how many bars constitute{' '}
            <em>held</em>, and it must be specified prospectively before any later
            trigger evaluation; no upstream roster/scheduler/account-continuity
            evidence exists to adjudicate the SM discontinuities; the canonical{' '}
            <code>weekly_200sma.json</code> artifact should be restored; the ingestion
            writer still emits the NUL-only record; no lineage MFE ledger and no
            sourced expiry-sign ledger exist; and the mechanical pre-draft assertions
            for matched horizon endpoints, lineage ledgers, universal
            every/all/first/deepest claims and timestamp subtraction remain unbuilt.
            <br /><br />
            <b>Known-absent inputs carried into the audit:</b>{' '}
            <code>weekly_200sma.json</code> is absent and{' '}
            <code>weekly_200sma_state.json</code> is 49 days stale, so the 200W read
            is a parquet recompute corroborated post-anchor by{' '}
            <code>ma200w_trap_watch_state.json</code> (recomputed 00:11:40Z, 6m40s
            after the tape anchor); <code>gex_summary.json</code> was not read;
            the live tape still carries one NUL-only invalid JSONL record at physical
            line 65,799, far outside every window used and absent from the clean pin;
            no lineage MFE ledger exists, so neither the 08-19 scout miss nor
            today&rsquo;s $20.30 near-miss is ranked; no sourced expiry-sign ledger
            exists, so no lineage-first ordinal is claimed anywhere in §III; and
            mechanical pre-draft checks for expiry-bucket sums, MTF row-count totals,
            directional percentage denominators and lineage ordinals remain unbuilt.
            NTT pivots, max-pain, strike-level IV and the BTC/NQ ratio are NOT LOADED
            and every claim touching them is framework-only.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among
            principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a
            single atomic snapshot (2026-08-24 00:05Z tape anchor, pinned to the
            session archive) with section-level provenance disclosed in the manifest
            band above. Several inputs are explicitly stale, absent, open or
            unaudited and are flagged as such: <b>this is the v2 note, promoted after
            the codex hostile audit recorded at{' '}
            <code>audits/2026-08-24-desk-note.md</code> — 2 CRITICAL + 3 MAJOR + 4
            MINOR findings, all corrected in place and closed by full-file grep, with
            the per-finding hits-before / hits-after record in the audit trace
            above</b>; the macro Tier-1 panel rendered 2026-08-23
            22:16Z but carries no new FRED data because nothing published over the
            weekend, and only the two Yahoo FX rows moved;{' '}
            <code>weekly_200sma.json</code> is absent, so the 200W state, the 6.06%
            below-floor frequency over 165 completed weekly closes and the
            23.0th-percentile ratio are the desk&rsquo;s own parquet recompute, with{' '}
            <code>ma200w_trap_watch_state.json</code> disclosed as a post-anchor
            corroboration rather than the source;{' '}
            <code>gex_summary.json</code> was not read this session and nothing rests
            on it; the MA matrix is computed on settled bars only and excludes the
            in-progress 08-24 daily and 08-30 weekly bars; the GEX file&rsquo;s
            Deribit index sits $543.51 above live spot, so every distance figure is
            printed on both references; JGB is monthly and 83d stale; and NTT pivots,
            max-pain, strike-level IV and the BTC/NQ ratio are NOT LOADED. Levels,
            sizes, and conditions are illustrative of the desk&rsquo;s process, not
            standing recommendations. Past correlation, gamma, and positioning
            patterns do not bind future tape. Derivatives carry the risk of total
            loss and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The settle fired the leg the desk could not control and the tape
                missed the leg it could — by $20.30. One week below the 200W, one
                week back above: a false break, recorded. Funding still welded to the
                cap, retail crowding back in, a daily TD9 one bar out. The structure
                is better and the entry is worse. Flat, waiting for the band or the
                lid.
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
            v2 · 2026-08-24 00:05Z snapshot · post codex hostile audit
            (audits/2026-08-24-desk-note.md — 2 CRITICAL + 3 MAJOR + 4 MINOR, all
            RESOLVED with grep closure) · sources: live_db.json (pinned) · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · ma200w_trap_watch_state.json · FRED · Yahoo ·
            Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
