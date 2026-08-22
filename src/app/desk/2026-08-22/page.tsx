import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-22 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-22',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-22' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260822() {
  await requireViewer('/desk/2026-08-22');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-22 · v2</span>
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
              <span className="dn-big">$77,982</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+5.79%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-22 00:39Z (tape anchor 00:39Z; session ~00:38Z) · rolling sources archived to /opt/desk-note/snapshots/2026-08-22-0038/
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-22 00:39Z tape anchor</td>
                  <td className="dn-flag">
                    fresh · 1-min · pinned at <code>t = &ldquo;08-22 08:39&rdquo;</code>{' '}
                    (the <code>t</code> field is BJ-local UTC+8, so BJ 08:39 = the
                    00:39Z anchor) · reconciles with the 00:38Z session start ·{' '}
                    <b>windows are selected by parsed timestamp, inclusive
                    [anchor − duration, anchor]</b> — 61 / 241 / 1,441 rows for
                    1h / 4h / 24h and 4,321 rows for 72h, each spanning exactly
                    60m / 4h / 24h00m / 72h00m (the v1 draft used off-by-one
                    positional slices one row too long, so its declared &ldquo;24h&rdquo;
                    was 24h01m and its &ldquo;72h&rdquo; 72h02m; every propagated
                    figure below is recomputed on the exact timestamp windows)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-22 00:31Z scan (BJ 08:31)</td>
                  <td className="dn-flag">
                    ~8 min stale vs the tape anchor · in-progress bars on every TF ·
                    file&rsquo;s own spot $77,975 vs tape $77,981.99 (−0.01%) ·
                    archived to snapshots/2026-08-22-0038/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-22 00:00Z snapshot · 1,070 instruments</td>
                  <td className="dn-flag">
                    ~39 min stale vs the tape anchor · file&rsquo;s Deribit index
                    reference $78,578 vs live spot $77,981.99 (live is −0.76% BELOW
                    the file&rsquo;s own reference — both refs disclosed everywhere
                    below) · <b>the Total-GEX tile reads +247.5M and is internally
                    inconsistent with its own by-expiry strip, which foots to
                    +249.91M; the note uses that footed basis, carried as
                    ≈+249.90M</b> · <b>PROVENANCE CAVEAT:</b>{' '}
                    <code>gex_summary.json</code> was <b>NOT copied into the
                    snapshot directory</b> — its <code>net_gex</code> was read
                    live at 00:00:48Z (+249,898,548, corroborating the archived
                    strip to the rounded 0.01M) and had already rolled to
                    +250,357,214 by 01:00Z, so <b>the exact JSON figure and its{' '}
                    <code>top_neg</code> are NON-PINNED and not reproducible from
                    this archive</b>; only the archived HTML by-expiry strip is
                    pinned, and every GEX number below rests on it · 22AUG26
                    0.3DTE +7.68M settles 08:00Z today, ~7.4h after this snap ·
                    btc_gex.html archived to snapshots/2026-08-22-0038/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-22 00:00Z
                  </td>
                  <td className="dn-flag">
                    ~39 min lag · 7d 1h bars · 22 assets · 167 rows · a 167-row
                    correlation is a small sample — read as regime texture, not as an
                    estimate with a confidence interval
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-21 22:15Z render</td>
                  <td className="dn-flag">
                    ~2.4h render lag · a FRESH read (the Friday 08-21 US daily prints
                    have posted) · <b>MOVE is BACK</b> at 73.4 after the multi-day
                    fetch-failure run in the prior lineage · NFCI weekly −0.559 ·
                    Tier-3 monthly rows stale 81d · archived to
                    snapshots/2026-08-22-0038/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix + RV</td>
                  <td className="dn-v-cell">parquet last bar 2026-08-22 00:06Z · close $77,950.10</td>
                  <td className="dn-flag">
                    ~33 min stale vs the tape anchor · all 8 yearly files loaded
                    (2019–2026, 364 weekly bars) so the full Weekly ladder including
                    W-SMA150 / W-SMA200 IS computable this session · offsets
                    recomputed vs live spot $77,981.99
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle-floor watch</td>
                  <td className="dn-v-cell">
                    <b>weekly_200sma.json ABSENT</b> · fallback:
                    ma200w_trap_watch_state.json (recomputed 2026-08-17 00:11Z) +
                    desk recompute from parquet
                  </td>
                  <td className="dn-flag">
                    the runbook&rsquo;s 200W-watch JSON is not on disk this session —
                    no <code>ratio_pctile</code> / <code>last_event</code> fields are
                    quoted from it. The trap-watch state file supplies the
                    completed-week facts (08-16 close $62,876.00, sma200 $63,978.83,{' '}
                    <code>consecutive_above: 0</code>,{' '}
                    <code>reclaim_failed_week: 2026-08-16</code>) — but{' '}
                    <b>it too was NOT copied into the snapshot directory and is
                    therefore NON-PINNED</b>; its payload was re-read after
                    drafting and is unchanged (<code>recomputed_at</code>{' '}
                    2026-08-17T00:11:08Z, md5 <code>1c3b2a02…</code>), so the
                    quoted fields are stable, but they are disclosed as
                    live-read rather than archived. The below-floor frequency
                    below is the desk&rsquo;s own recompute from the parquet
                    weekly series over{' '}
                    <b>164 completed weekly closes</b> with a non-NaN W-SMA200
                    (the 165th non-NaN observation is the still-open 08-23 bar
                    and is kept separate), labelled as such, not read from a file
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N · 2.67%</td>
                  <td className="dn-flag">stale · monthly · stale 81d · do not lean</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT pivots, max-pain, strike-level IV surface, BTC/NQ ratio
                  </td>
                  <td className="dn-v-cell">NOT LOADED in this cut</td>
                  <td className="dn-flag">
                    btc_ntt_analysis.html is JS-rendered and not extractable; the
                    BTC/NQ ratio artifact is likewise not parsed here — every claim
                    touching these is framework-only. The BTC-vs-NQ read below uses
                    only the two 7d percentage moves printed in the correlation file,
                    not a ratio series
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h ann.</span>
              <span className="dn-v bear">+10.95% (PINNED AT CAP)</span>
              <span className="dn-src">live · raw 0.01 ×1095 = +10.95% ann — RE-PINNED to the Binance cap and held there <b>952 consecutive minutes</b> into the snapshot (last break 08-21 08:47Z / BJ 16:47 at +10.77%) · 1h-ago +10.95%, 4h-ago +10.95%, 24h-ago +6.20% · 24h mean +9.88%, range +4.70% / +10.95% · 0 / 1,441 sampled rows negative, 952 / 1,441 (66.1%) at the cap · 72h mean +8.34%, 2,181 / 4,321 at cap · all on the exact timestamp windows (24h = 1,441 rows spanning 24h00m; 72h = 4,321 rows spanning 72h00m)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+6.20% → +10.95% (+4.75pt, back onto the cap)</span>
              <span className="dn-src">the mirror image of the 08-19 note, which recorded funding COOLING to +1.71% · the carry has gone from drained to capped in three sessions (08-19 +1.71% → 08-20 +10.57% → 08-21 +5.44% → now +10.95%) · this is the one unambiguously frothy line on an otherwise de-grossing tape</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−2.01% (−2,164.8 BTC)</span>
              <span className="dn-src">live · 105,715.6 BTC · OI CONTRACTED through a +5.79% up-day — and is −6,002.0 BTC (−5.37%) off the 3d peak 111,717.6 @ 08-19 15:14Z (BJ 23:14) · the entire $64.7k → $78.0k leg was built on a SHRINKING open-interest base: a squeeze / spot-led repricing, not a leveraged long build</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bull">50.88 / 49.12</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · 24h mean 50.72%, range 48.71 / 53.20 · 72h max 61.52% · retail was <b>66.87% long at the prior-note reference point BJ 08:00 08-16 / UTC 2026-08-16 00:00Z, spot $63,086</b> — <b>that is the lineage reference, NOT the exact low</b>; the true tape low of the move is $62,716 at UTC 2026-08-16 22:41Z (BJ 06:41 08-17), where retail read <b>68.64% long</b> · either reading gives the same shape: retail was ~67–69% long at the bottom and is 50.88% at $77,982 — the crowd sold this rally rather than chased it, and the long side is NOT crowded here</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">+15.99k as-printed · <b>NOT CERTIFIABLE</b></span>
              <span className="dn-src">live · long 25.67k − short 9.67k · <b>the entire sign flip from net-short to net-long is ONE MINUTE</b>: 08-20 07:06Z (BJ 15:06) stepped −22,527.1 → +16,825.8, Δnet +39,352.9 = 174.7% of the prior net, with <code>long_traders</code> 587 → 1,388 and <code>short_traders</code> 978 → 687 in the same minute — a tracked-cohort ROSTER re-sync, not a trade · a second roster expansion printed 08-21 06:21Z (BJ 14:21, Δnet +10,671.2 = 119.5% of prior, <code>long_traders</code> 1,336 → 2,497)</span>
            </div>
            <div>
              <span className="dn-k">SM · clean-window Δ</span>
              <span className="dn-v bear">−2,116.1 BTC (−11.68%) — TRIMMING into strength</span>
              <span className="dn-src">the only artifact-free window available: 08-21 08:00Z → 08-22 00:39Z (16h39m, 1,000 rows, largest single-minute |Δnet| = 808.4 @ 08-21 14:26Z — no roster jump) · net +18,109.9 → +15,993.8 while spot ran $76,284.46 → $77,981.99 (+2.23%) · the as-printed 24h Δnet +3,293.2 (25.93% of the prior net 12,700.59) spans the 08-21 roster expansion and is NOT a clean read · book: long_entry $71,901.46 (spot +8.46%), short_entry $74,636.55 (spot +4.48%, shorts underwater)</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">49.1% / 43.25%</span>
              <span className="dn-src">GEX chain-median IV across 1,070 instruments — <b>a median across the chain, NOT a tradable spread</b> · IV sits +5.85pt over 30D close-to-close RV 43.25% but −14.44pt UNDER 7D RV 63.54% (90D RV 40.53%) · the chain has repriced vol hard off the ~41% prints of the $63k regime but is still below what the last week actually delivered</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+23.22% (above)</span>
              <span className="dn-src">flip $63,288 · spot is +23.22% ABOVE it (77,981.99 / 63,287.51 − 1 = 23.219%) / +24.16% above it on the GEX file&rsquo;s own Deribit idx $78,578 (78,578 / 63,287.51 − 1 = 24.161%; the file&rsquo;s tile prints &ldquo;+24.2%&rdquo;) — <b>both references positive, same sign, tile rounds the spot side</b> · <b>the inverse is the number that matters for the short: the flip sits 18.84% BELOW spot (63,287.51 / 77,981.99 − 1 = −18.843%), so an 18.84% decline — not a 23% one — is what reaches it</b> · aggregate GEX +249.90M on the footed basis (was +128.92M on 08-19 — the clamp roughly DOUBLED)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The 08-16 weekly break of the 200W cycle floor is ON TRACK to
                become a one-week false break — it is not one yet — and the desk
                was flat for the whole reversal
              </span>. The 08-16 W-SUN bar settled{' '}
              <span className="dn-tag bear">$62,876.00</span> against a W-SMA200 of{' '}
              <span className="dn-tag">$63,978.83</span> — 1.72% below, ending the
              six-week above-floor streak that ran 07-05 through 08-09. Five sessions
              later spot prints{' '}
              <span className="dn-tag bull">$77,981.99</span>, and the in-progress
              weekly bar (settles 08-23 23:59Z, still OPEN) tracks{' '}
              <span className="dn-tag bull">+21.28% ABOVE the $64,270.78 200W</span>{' '}
              — <span className="dn-em">an unsettled bar, so the false-break read
              is in-progress and conditional on the 08-23 close holding above
              W-SMA200, not a completed fact</span>.
              The daily sequence was{' '}
              <span className="dn-tag">08-17 +2.59% · 08-18 +0.29% · 08-19 +7.14% ·
              08-20 +5.32% · 08-21 +7.27%</span>, taking the tape from $62,876 to a{' '}
              <span className="dn-tag bull">$79,555.50</span> high in five days. The
              08-19 note held the book FLAT on a two-leg trigger whose first leg
              (cap reclaim) had fired and whose second leg (a certifiable smart-money
              long) had not. That second leg{' '}
              <span className="dn-em">still has not certified</span> — and the price
              left without it.{' '}
              <span className="dn-signal">
                This note records the miss first and analyses second
              </span>: the deferred 0.2R scout at ~$64,632 with a $63,301 stop
              (risk $1,331) would be{' '}
              <span className="dn-tag bull">+$13,349.99 = 10.03R gross, ≈ 2.01R at
              the stated 0.2R sizing</span>; its two targets $66,343 and $66,391 were
              both tagged at 2026-08-19 15:05Z, roughly fourteen and a half hours
              after that note published. The certification rule that kept the desk out
              of the $63k chop is the same rule that kept it out of the +20.66% move,
              and the rule has now been paid for in full.
            </p>

            <p>
              What the tape looks like at the anchor: BTC{' '}
              <span className="dn-tag">$77,981.99</span> live,{' '}
              <span className="dn-tag bull">+5.79%</span> on 24h, inside a{' '}
              <span className="dn-tag">$79,303.00 / $73,554.01</span> 24h range (high
              @ 08-21 09:00Z / BJ 17:00, low @ 08-21 00:42Z / BJ 08:42). The 08-21
              daily bar was the big one — O $72,998.80, H{' '}
              <span className="dn-tag bull">$79,555.50</span>, L $72,992.40, C{' '}
              <span className="dn-tag bull">$78,309.10</span>, +7.27% — and the
              in-progress 08-22 bar is a{' '}
              <span className="dn-tag">−0.46%</span> inside day (O $78,309.10, H
              $78,486.60, L $77,868.30, C $77,950.10 at the parquet last bar 00:06Z).{' '}
              <span className="dn-signal">
                Spot now sits above the ENTIRE daily MA ladder, all ten of them
              </span>, a complete inversion of the 08-19 matrix on which the D-EMA50
              was a cap being tested from below. On the weekly ladder the tape has
              just cleared{' '}
              <span className="dn-tag bull">W-SMA150 $77,447.76 (+0.69%)</span> and{' '}
              <span className="dn-tag bull">W-EMA50 $77,257.48 (+0.94%)</span> and is
              stalled immediately under{' '}
              <span className="dn-tag bear">W-EMA100 $78,451.51 (−0.60%)</span> and{' '}
              <span className="dn-tag bear">D-EMA400 $78,235.27 (−0.32%)</span> — a
              two-level overhead lid within 0.6% of the print.{' '}
              <span className="dn-em">
                The reclaim is structurally enormous and tactically stalled at the
                first real resistance it has met.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning{' '}
              <span className="dn-roman">I · live tape · OI CONTRACTED −2,164.8 BTC (−2.01%) through a +5.79% up-day and is −5.37% off the 3d peak — the whole $64.7k → $78.0k leg was built on a SHRINKING base · funding RE-PINNED to the +10.95% cap and held it 952 consecutive minutes (24h mean +9.88%, 0/1,441 negative, 952/1,441 at cap) · retail 50.88% and NOT crowded (was 66.87% at the prior-note 08-16 00:00Z reference and 68.64% at the true 08-16 22:41Z tape low) · SM is +15.99k net long as-printed but the sign flip is ONE re-sync minute (08-20 07:06Z, Δnet +39,352.9 = 174.7% of prior, roster 587→1,388 longs) — NOT certifiable; on the only clean 16h39m window SM TRIMMED −2,116.1 (−11.68%) into a +2.23% push</span>
            </h2>

            <p>
              <span className="dn-signal">
                The most important number on the tape is the one that went down
              </span>. Open interest is{' '}
              <span className="dn-tag">105,715.6 BTC</span>, off{' '}
              <span className="dn-tag bull">−2,164.8 BTC (−2.01%)</span> over 24h in
              which price rose 5.79%, and off{' '}
              <span className="dn-tag bull">−6,002.0 BTC (−5.37%)</span> from the 3d
              peak of 111,717.6 printed at 08-19 15:14Z (BJ 23:14), which was the
              hour the breakout began. A move of this size on a contracting OI base
              is a short-squeeze and a spot repricing, not a leveraged long build —
              the positions that financed the rally were closed, not opened. That is
              the highest-quality version of a rally this tape can produce, and it
              is the single strongest bull argument in the note. It also sets a
              ceiling on how much more fuel is left in the same mechanism: you can
              only squeeze a short book once.
            </p>

            <p>
              Against that, the carry has gone completely the other way.{' '}
              <span className="dn-signal">
                Funding re-pinned to the Binance cap and stayed there
              </span>: live{' '}
              <span className="dn-tag bear">+10.95% ann</span> (raw 0.01 × 1095),
              held at the cap for{' '}
              <span className="dn-tag bear">952 consecutive minutes</span> into the
              snapshot, last broken at 08-21 08:47Z (BJ 16:47) at +10.77%. Across
              the 24h window the mean is{' '}
              <span className="dn-tag bear">+9.88% ann</span>, the range{' '}
              <span className="dn-tag">+4.70% / +10.95%</span>,{' '}
              <span className="dn-tag">0 / 1,441</span> sampled rows negative and{' '}
              <span className="dn-tag bear">952 / 1,441 (66.1%)</span> sitting on the
              cap; over 72h the mean is +8.34% with 2,181 / 4,321 rows capped. Set
              that beside the 08-19 note, which recorded funding{' '}
              <span className="dn-em">cooling hard to +1.71%</span> with zero capped
              rows, and the three-session path is{' '}
              <span className="dn-tag">+1.71% → +10.57% → +5.44% → +10.95%</span>.
              The perp book is paying to be long at the maximum the venue allows.{' '}
              <span className="dn-em">
                OI contracting and funding capped at the same time is a specific
                shape: fewer positions, but the ones that remain are one-sided and
                expensive. It is the frothiest line on an otherwise clean tape.
              </span>
            </p>

            <p>
              Retail did not chase.{' '}
              <span className="dn-tag">mkt_long_pct 50.88%</span> at the anchor (24h
              mean 50.72%, range 48.71 / 53.20; 72h max 61.52%) — and the reference
              point the lineage carries is that retail was{' '}
              <span className="dn-tag bear">66.87% long at BJ 08:00 08-16 / UTC
              2026-08-16 00:00Z with spot at $63,086</span>.{' '}
              <span className="dn-em">
                That is the prior note&rsquo;s reference row, not the exact low
              </span>{' '}
              — the true low of the move on this tape came later, at{' '}
              <span className="dn-tag bear">$62,716 on 2026-08-16 22:41Z (BJ 06:41
              08-17), where retail read 68.64% long</span>. The correction moves the
              number the right way for the argument: the crowd was maximally long
              at the bottom and is roughly neutral 24% higher. Whatever else is
              true, the long side is not crowded at these prices by this measure, and
              the classic distribution tell — retail crowding into a high — is
              absent. Aggressor flow is consistent: big-print net{' '}
              <span className="dn-tag bull">+1,513.5 BTC</span> over 24h across 615
              prints (72h +5,571.3), taker net{' '}
              <span className="dn-tag bull">+825.8</span>. The one deterioration
              inside the flow is the split between venues:{' '}
              <span className="dn-signal">
                spot CVD has gone negative while futures CVD keeps buying
              </span>{' '}
              — over 72h spot CVD is{' '}
              <span className="dn-tag bull">+5,581.3</span> and futures CVD{' '}
              <span className="dn-tag bull">+6,242.3</span>, but over the last 24h
              spot CVD is{' '}
              <span className="dn-tag bear">−117.2</span> against futures CVD{' '}
              <span className="dn-tag">+814.1</span>. The spot bid that drove the
              first two-thirds of the leg has stopped; what is holding the tape up in
              the last day is futures. That is a lower-quality mix, and it is the
              same rotation that funding is already screaming about. 1-min aggressor
              skew at the anchor is{' '}
              <span className="dn-tag">−0.3</span> (24h mean +1.87, range −54.9 /
              +46.8), and the perp trades a small{' '}
              <span className="dn-tag">−$16.58</span> discount to spot (24h mean
              −$25.28) — no basis stress in either direction.
            </p>

            <p>
              <span className="dn-signal">
                The smart-money tape reads net long, and the desk cannot certify it
              </span>. As printed, SM net is{' '}
              <span className="dn-tag">+15,993.77 BTC</span> (long 25,668.68, short
              9,674.91) against 12,700.59 twenty-four hours ago — a Δnet of{' '}
              <span className="dn-tag">+3,293.2</span>, which by the desk&rsquo;s
              formula is{' '}
              <span className="dn-tag">|Δ| / prior_net = 3,293.2 / 12,700.59 =
              25.93%</span>. Both figures fail the lineage&rsquo;s own artifact test.
              The crossing from deeply net short to net long did not happen over
              hours of covering; it happened in{' '}
              <span className="dn-tag bear">one minute at 08-20 07:06Z (BJ
              15:06)</span>, where net stepped{' '}
              <span className="dn-tag">−22,527.1 → +16,825.8</span> — a Δnet of{' '}
              <span className="dn-tag bear">+39,352.9, or 174.7% of the prior
              net</span> — while <code>long_traders</code> went 587 → 1,388 (+801),{' '}
              <code>short_traders</code> went 978 → 687 (−291),{' '}
              <code>long_entry</code> jumped $69,688.71 → $67,364.93 and{' '}
              <code>short_entry</code> jumped $65,873.62 → $69,165.50, all in the
              same print. Trader counts do not double and average entry prices do not
              discontinuously re-base because someone traded; that is a{' '}
              <span className="dn-em">tracked-cohort roster re-sync</span>. A second
              one printed at{' '}
              <span className="dn-tag bear">08-21 06:21Z (BJ 14:21)</span>: net
              +8,927.5 → +19,598.8, Δnet +10,671.2 = 119.5% of prior,{' '}
              <code>long_traders</code> 1,336 → 2,497. The consequence is precise and
              limiting: <span className="dn-em">you cannot difference across the
              discontinuity.</span> The +15,994 net long is a measurement of a
              different tracked universe than the −23,000 that preceded it, so
              neither the sign flip nor the 25.93% 24h add is evidence of anything a
              trade can lean on.
            </p>

            <p>
              What the SM feed <em>can</em> support is the artifact-free window.
              From{' '}
              <span className="dn-tag">08-21 08:00Z (BJ 16:00) to the 00:39Z
              anchor</span> — 16h39m, 1,000 rows, largest single-minute |Δnet| just
              808.4 at 08-21 14:26Z and no roster jump — SM net went{' '}
              <span className="dn-tag bear">+18,109.9 → +15,993.8, a trim of
              −2,116.1 BTC (−11.68%)</span>, while spot ran{' '}
              <span className="dn-tag">$76,284.46 → $77,981.99 (+2.23%)</span>.{' '}
              <span className="dn-em">
                On the only clean read available, the tracked book was distributing
                into strength, not accumulating.
              </span>{' '}
              The composition is consistent with a cohort that is well onside and
              taking some off: <code>long_entry</code>{' '}
              <span className="dn-tag">$71,901.46</span> with spot +8.46% above it,{' '}
              <code>short_entry</code>{' '}
              <span className="dn-tag">$74,636.55</span> with spot +4.48% above it
              (the short side is underwater and still there — 878 short traders
              against 2,311 long, <code>long_pct</code> 86.06 / <code>short_pct</code>{' '}
              16.51). A still-populated, still-underwater short book at $78k is
              squeeze fuel that has not yet been spent; a net long book trimming
              11.68% into new highs is not a confirmation signal. Both are true, and
              they point opposite ways.
            </p>

            <h2 className="dn-sec">
              Frames{' '}
              <span className="dn-roman">II · MTF INVERTED to 8 long / 0 short / 2 neutral (the 08-16 note read 1 long / 7 short / 2 neutral; the 08-19 note 4 / 1 / 5) — every short classification has cleared, though 1d and 1w cleared only as far as NEUTRAL, not long · with a bullish multi-TF resonance / trend-follow net read · but the mid frames are at squeeze extremes — RSI 4h 89.8 / 8h 89.5 / 12h 87.9 / 1d 84.3 — carrying a ⚡TD9 SELL on 4h, 8h AND 12h simultaneously · the reversal regime FLIPPED back to 5/9 JT&lt;0 (mean-reversion favoured, trend-follow cautioned) · fresh water-up death crosses on 15m (2 bars) and 30m (1 bar) · 3d only just entered its kumo, 1w still BELOW cloud with resistance $85.9k</span>
            </h2>

            <p>
              <span className="dn-signal">
                Every short classification has cleared — but not all of them
                cleared to long
              </span>. The 00:31Z scan reads{' '}
              <span className="dn-tag bull">8 long / 0 short / 2 neutral</span> across
              ten timeframes with a net read of multi-TF bullish resonance,
              trend-follow — against the{' '}
              <span className="dn-tag bear">1 long / 7 short / 2 neutral</span> the
              08-16 note recorded and the 4 / 1 / 5 the 08-19 note recorded. The
              frame-by-frame accounting matters more than the headline count: of
              the seven frames the 08-16 scan had short, five (1h, 4h, 8h, 12h,
              3d) now read long and{' '}
              <span className="dn-tag">two — 1d and 1w — read NEUTRAL, not
              long</span>; the two that were neutral then (15m, 30m) are long
              now, and 1M was long throughout.{' '}
              <span className="dn-em">
                So the correct statement is that nothing on the board reads short
                any more, not that every short became a long.
              </span>{' '}
              Short (15m–4h), mid (8h–1d) and long (3d–1M) groups all read bullish. The
              slow frames turned last and are turning now: water-down golden crosses
              printed on 8h (15 bars ago), 12h (9 bars), 1d (4 bars) and 1w (4 bars).
              Spot is above the Ichimoku cloud on 15m, 30m, 1h, 4h, 8h, 12h, 1d and
              1M.
            </p>

            <p>
              The caveats sit exactly where a five-day 24% move puts them.{' '}
              <span className="dn-signal">
                The mid frames are at squeeze extremes carrying three simultaneous
                TD9 SELLs
              </span>: RSI(14) reads{' '}
              <span className="dn-tag bear">4h 89.8 · 8h 89.5 · 12h 87.9 · 1d
              84.3</span>, and{' '}
              <span className="dn-tag bear">⚡TD9 SELL</span> setups have completed on
              the 4h, 8h and 12h at $77,985 / $77,966 / $77,966 (the scan flags the
              last bar may be in progress). The reversal regime has flipped back to{' '}
              <span className="dn-tag bear">5/9 timeframes in reversal regime
              (JT&lt;0) — mean-reversion / bounce favoured, trend-follow to be
              treated with caution</span>, the inverse of the JT≥0 trend-follow
              continuation regime the 08-16 note carried into the break. The fast
              frames have already rolled: a{' '}
              <span className="dn-tag bear">15m water-up death cross 2 bars ago (08-22
              00:00, DIF +259.5)</span> and a{' '}
              <span className="dn-tag bear">30m water-up death cross 1 bar ago (DIF
              +462.5)</span>, with the 1h having crossed down 10 bars ago; 15m RSI has
              already bled to 51.8 and 30m to 57.6 while price holds. Divergence
              structure is mixed and thin: one top-div on the 1h, three bottom-divs
              on 15m / 8h / 1w.
            </p>

            <p>
              The structural frames are the honest counterweight to the overbought
              ones.{' '}
              <span className="dn-em">
                The slowest timeframes have not confirmed anything yet
              </span>: the 3d has only just entered its cloud (kumo $70.8k–$78.5k,
              &ldquo;just crossed&rdquo;), and the{' '}
              <span className="dn-tag bear">1w is still BELOW its cloud on its 29th
              bar there, with cloud-base resistance at $85.9k</span>. So a tape that
              looks vertical on the daily is, on the weekly, still inside the
              overhead supply it has been under since the October top — spot is{' '}
              <span className="dn-tag bear">−38.21% from the $126,208.50 ATH (2025-10-06)</span>{' '}
              even after running{' '}
              <span className="dn-tag bull">+35.01% off the 2026 low $57,758.60
              (2026-07-01)</span>. The 1M frame reads long, 30 bars above its cloud,
              RSI 50.8 — unstressed and uninformative at this horizon.
            </p>

            <p>
              The MA matrix, recomputed against live spot $77,981.99 with the parquet
              anchored at the 00:06Z bar (close $77,950.10), makes the same point in
              levels.{' '}
              <span className="dn-signal">Daily, every rung is beneath the tape</span>{' '}
              — D-SMA20{' '}
              <span className="dn-tag bull">$66,116.10 (+17.95%)</span>, D-SMA50{' '}
              <span className="dn-tag bull">$64,900.94 (+20.16%)</span>, D-SMA100{' '}
              <span className="dn-tag bull">$66,151.39 (+17.88%)</span>, D-SMA150{' '}
              <span className="dn-tag bull">$69,008.79 (+13.00%)</span>, D-SMA200{' '}
              <span className="dn-tag bull">$68,990.89 (+13.03%)</span>, D-EMA20{' '}
              <span className="dn-tag bull">$67,582.74 (+15.39%)</span>, D-EMA50{' '}
              <span className="dn-tag bull">$65,891.78 (+18.35%)</span>, D-EMA100{' '}
              <span className="dn-tag bull">$66,987.06 (+16.41%)</span>, D-EMA150{' '}
              <span className="dn-tag bull">$69,192.49 (+12.70%)</span>, D-EMA200{' '}
              <span className="dn-tag bull">$71,652.59 (+8.83%)</span>. The
              D-EMA50 that the 08-19 note carried as a cap at $64,346 has since
              risen with the tape: today&rsquo;s recomputed D-EMA50 is{' '}
              <span className="dn-tag bull">$65,891.78</span>, and spot is 18.35%
              above that level (spot is 21.19% above the old $64,346 print — two
              different levels, one week apart, and the note keeps them
              separate).{' '}
              <span className="dn-signal">Weekly is where the work still is</span> —
              W-SMA200{' '}
              <span className="dn-tag bull">$64,270.78 (+21.33%)</span>, W-EMA200{' '}
              <span className="dn-tag bull">$68,611.93 (+13.66%)</span>, W-SMA20{' '}
              <span className="dn-tag bull">$69,521.12 (+12.17%)</span>, W-EMA20{' '}
              <span className="dn-tag bull">$69,312.15 (+12.51%)</span>, W-EMA150{' '}
              <span className="dn-tag bull">$73,887.57 (+5.54%)</span>, W-EMA50{' '}
              <span className="dn-tag bull">$77,257.48 (+0.94%)</span>, W-SMA150{' '}
              <span className="dn-tag bull">$77,447.76 (+0.69%)</span> — all
              reclaimed — but{' '}
              <span className="dn-tag bear">W-EMA100 $78,451.51 (−0.60%)</span>,{' '}
              <span className="dn-tag bear">W-SMA50 $81,789.33 (−4.66%)</span> and{' '}
              <span className="dn-tag bear">W-SMA100 $88,843.52 (−12.23%)</span> are
              not.{' '}
              <span className="dn-em">
                Spot is wedged inside a ~1.5%-wide band between the W-SMA150 /
                W-EMA50 shelf it just cleared and the W-EMA100 / D-EMA400 lid it has
                not — $77,257–$77,448 below, $78,235–$78,452 above. That band, not
                any round number, is the level the desk is actually watching.
              </span>{' '}
              30D close-to-close realised vol is{' '}
              <span className="dn-tag">43.25%</span>, 7D{' '}
              <span className="dn-tag bear">63.54%</span>, 90D 40.53%.
            </p>

            <h2 className="dn-sec">
              Dealer map{' '}
              <span className="dn-roman">III · aggregate gamma roughly DOUBLED to +249.90M on the footed basis (from +128.92M on 08-19) — the deepest positive-gamma clamp of the POST-08-16 lineage, but NOT a lineage maximum: 07-22 recorded +294.6M, 07-23 +283.46M and 07-24 +262.1M on the same footed basis · the flip is now $63,288, with spot a full +23.22% ABOVE it (+24.16% above on the file&rsquo;s Deribit idx $78,578; the flip is 18.84% below spot) · ALL TEN top walls are positive, led by $80,000 +41.20M with $78,000 +31.41M sitting essentially AT spot · the only negative strike of note is $60,000 −6.36M, ~23% below the tape and much eased · 28AUG26 6.3DTE +82.92M is the heaviest single expiry · IV median 49.1% / 1,070 inst.</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book is now a pin, and the tape has run straight into the
                middle of it
              </span>. Aggregate GEX foots to{' '}
              <span className="dn-tag bull">+249.90M</span> — the file&rsquo;s
              archived by-expiry strip sums to +249.91M, while the
              dashboard&rsquo;s Total-GEX tile prints +247.5M and is internally
              inconsistent with it; the note uses the archived footed basis, as
              the lineage has throughout. (The unarchived{' '}
              <code>gex_summary.json</code> <code>net_gex</code> read +249,898,548
              live at 00:00:48Z and corroborates the strip, but it is{' '}
              <b>NOT pinned in this session&rsquo;s snapshot and had already
              rolled to +250,357,214 by 01:00Z</b> — it is disclosed as
              corroboration, and nothing below rests on it.) That is roughly
              double the +128.92M the 08-19 note recorded, and it is{' '}
              <span className="dn-signal">
                the deepest positive-gamma reading since the 08-16 floor break
              </span>{' '}
              — the post-08-16 sequence runs +41.82M (08-16) → +28.06M (08-17) →
              +128.86M (08-18) → +128.92M (08-19) → +249.90M today.{' '}
              <span className="dn-em">
                It is emphatically not a lineage maximum: on the same footed
                basis 07-22 carried +294.6M, 07-23 +283.46M and 07-24 +262.1M,
                all above today. The clamp is deep by the standards of this
                regime, not by the standards of the record.
              </span>{' '}
              A book this long gamma dampens realised vol by
              construction: dealers sell strength and buy weakness to stay flat.
            </p>

            <p>
              The strike map is one-sided in a way the desk has not seen at any point
              in the $63k regime.{' '}
              <span className="dn-signal">
                All ten of the top walls are positive
              </span>:{' '}
              <span className="dn-tag bull">$80,000 +41.20M</span> (heaviest,
              −2.52% on the note&rsquo;s spot/level convention — i.e. 2.59% above the
              print),{' '}
              <span className="dn-tag bull">$78,000 +31.41M</span> (essentially at
              spot),{' '}
              <span className="dn-tag bull">$82,000 +20.78M</span>,{' '}
              <span className="dn-tag bull">$70,000 +18.75M</span>,{' '}
              <span className="dn-tag bull">$75,000 +13.33M</span>,{' '}
              <span className="dn-tag bull">$76,000 +12.91M</span>,{' '}
              <span className="dn-tag bull">$72,000 +11.99M</span>,{' '}
              <span className="dn-tag bull">$85,000 +11.03M</span>,{' '}
              <span className="dn-tag bull">$90,000 +10.82M</span>,{' '}
              <span className="dn-tag bull">$84,000 +10.71M</span>. The largest
              negative strike anywhere on the surface is{' '}
              <span className="dn-tag">$60,000 −6.36M</span>, some 23% below the tape
              and much eased from the −17.79M the 08-19 note carried and the −22.00M
              of 08-16. The put shelf that used to sit under the market has both
              shrunk and been left far behind.{' '}
              <span className="dn-em">
                The mechanical read is a grind: $78,000 and $80,000 together carry
                +72.61M of positive gamma inside a 2.6% band, so the path of least
                resistance is a pin between them rather than a clean continuation
                through $80k.
              </span>{' '}
              Call OI 249,990 against put OI 148,508 gives a put/call ratio of 0.59 —
              a call-heavy chain, which is exactly how a book gets this long gamma
              after a squeeze.
            </p>

            <p>
              The expiry ladder concentrates that clamp near-dated.{' '}
              <span className="dn-tag">28AUG26 at 6.3 DTE carries +82.92M</span>, the
              heaviest single expiry on the board, with{' '}
              <span className="dn-tag">25SEP26 at 34.3 DTE +77.02M</span> and{' '}
              <span className="dn-tag">25DEC26 +33.00M</span> behind it; the front
              week is small (22AUG26 0.3DTE +7.68M settling at 08:00Z today ~7.4h
              after this snap, 23AUG +5.72M, 24AUG +2.66M, 25AUG +1.25M) and then
              4SEP +16.18M, 11SEP +4.78M, 30OCT +10.14M, 26MAR27 +6.89M, 25JUN27
              +1.67M — so 28AUG26 is <b>33.18% of today&rsquo;s +249.90M</b>
              concentrated into one date six days out.{' '}
              <span className="dn-em">
                State that carefully, because it is a snapshot and not a
                schedule. +82.92M is 28AUG26&rsquo;s contribution as measured in
                the 2026-08-22 00:00Z file at current IV; it is not a quantity
                guaranteed to be on the book the moment before expiry — spot, IV,
                open interest and the other expiries can all move first, and the
                clamp between now and then is not obliged to hold at +249.90M
                either. What can be said is conditional and dated: absent
                offsetting book / spot / IV changes, the 28AUG settle would
                remove roughly a third of the current dampening and leave the same
                tape materially freer to move in either direction. That is a
                dated structural risk to monitor, not a forecast and not a
                certainty.
              </span>{' '}
              On the flip: at $63,288, spot is{' '}
              <span className="dn-tag bull">+23.22% ABOVE it</span> and{' '}
              <span className="dn-tag bull">+24.16% above it on the file&rsquo;s own
              Deribit index reference $78,578</span> (the file&rsquo;s tile prints
              &ldquo;+24.2%&rdquo;); read the other way round, the flip sits{' '}
              <span className="dn-tag bear">18.84% BELOW spot</span>, which is the
              decline actually required to reach it. Both references agree in
              sign, and the spread
              between them is just the 0.76% gap between the file&rsquo;s index and
              the live tape. Chain-median IV is{' '}
              <span className="dn-tag">49.1% across 1,070 instruments</span>, up hard
              from the ~41% of the $63k regime; against 30D RV 43.25% that is a
              +5.85pt premium, but against the 63.54% the last week actually
              delivered it is a −14.44pt discount.{' '}
              <span className="dn-em">
                This is a chain median, not a tradable spread — it says the chain has
                repriced vol upward but has not repriced it to what just happened.
              </span>
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · a FRESH read (render Friday 2026-08-21 22:15Z; the Friday US daily prints have posted) · rates are RISK-OFF and got MORE so — 10Y 4.69% (+4.0bp, z +1.98), TIPS real 2.35% (z +1.82) · Fed net liquidity $5.792T draining (z −1.22, episodic −2.45) · credit LOOSE (HY OAS 2.75%, z −0.74) and NFCI RISK-ON (−0.559, z −1.46) · MOVE is BACK at 73.4 (z +0.02, neutral) after the prior lineage&rsquo;s multi-day fetch-failure run · regime IDIOSYNCRATIC (mean |r| 0.219) with BTC +24.34% on 7d against NQ −2.29% — a +26.63pt LEAD, and BTC&rsquo;s top correlations are metals, not equities</span>
            </h2>

            <p>
              <span className="dn-signal">
                BTC ran 24% in a week in which the macro panel got worse, not better
              </span>. The Tier-1 core prints 10Y nominal{' '}
              <span className="dn-tag bear">4.69% (+4.0bp, regime z +1.98,
              RISK-OFF)</span> and 10Y TIPS real{' '}
              <span className="dn-tag bear">2.35% (0.0bp, z +1.82, RISK-OFF)</span> —
              real yields at the high end of their 252-day distribution — with Fed net
              liquidity{' '}
              <span className="dn-tag bear">$5.792T, −0.004T (z −1.22, RISK-OFF,
              episodic z −2.45)</span> still draining. The offsets are credit and
              financial conditions: HY OAS{' '}
              <span className="dn-tag bull">2.75% (+2.0bp, z −0.74, loose)</span> and
              Chicago Fed NFCI{' '}
              <span className="dn-tag bull">−0.559 (z −1.46, RISK-ON)</span>. Bond
              vol is back on the board and unremarkable —{' '}
              <span className="dn-tag">MOVE 73.4 (+0.22, z +0.02, neutral)</span>,
              which is itself the news after the prior lineage carried it as
              unavailable for more than a week. DXY{' '}
              <span className="dn-tag">98.84 (z −0.13, neutral)</span> with an
              episodic z of −1.93, and USD/CNY{' '}
              <span className="dn-tag">6.7118</span> at episodic z −2.57 — the
              dollar softened at the margin, which is a modest tailwind and the one
              macro line that points the same way as the tape. The Tier-2 JGB 10Y
              prints 2.67% at regime z +2.42 and would read EXTREME RISK-OFF, but it
              is{' '}
              <span className="dn-em">FRED monthly, stale 81 days — do not lean on
              it</span>. Tier-3 is a driver panel with no composite: sticky core CPI
              3.48%, median CPI 3.11%, 10Y breakeven 2.34% (episodic z +2.38),
              Michigan 1Y 4.6% (stale 81d), WTI $86.5.
            </p>

            <p>
              The cross-asset file is where this session&rsquo;s macro read actually
              lives. The 7d 1h regime is{' '}
              <span className="dn-tag">IDIOSYNCRATIC, mean |r| 0.219</span> across 22
              assets on 167 rows, and{' '}
              <span className="dn-signal">
                BTC has gone from the lone laggard to the lone leader
              </span>: BTC{' '}
              <span className="dn-tag bull">+24.34%</span> on the week against NQ{' '}
              <span className="dn-tag bear">−2.29%</span>, SP500 −1.18%, JP225
              −4.25%, NVDA −4.24%, META −6.29%, MSFT −2.40% — a lead over NQ of{' '}
              <span className="dn-tag bull">+26.63pt</span>, where the 08-16 note
              recorded a −3.85pt lag. Equity beta is not the explanation; BTC&rsquo;s
              correlation to NQ is{' '}
              <span className="dn-tag">+0.046</span> and to SP500{' '}
              <span className="dn-tag">+0.008</span>, statistically nothing.{' '}
              <span className="dn-em">
                What BTC is correlated to, on this file, is the hard-asset complex
              </span>: its top five by |r| are PLAT{' '}
              <span className="dn-tag">+0.310</span>, SILVER{' '}
              <span className="dn-tag">+0.239</span>, MSFT{' '}
              <span className="dn-tag">+0.237</span>, META +0.182 and GOLD{' '}
              <span className="dn-tag">+0.180</span>, with PALL +0.179, EUR +0.166 and
              COPPER +0.160 behind — four metals in the top six. And those markets
              moved: GOLD{' '}
              <span className="dn-tag bull">+5.27%</span>, SILVER{' '}
              <span className="dn-tag bull">+6.29%</span>, PLAT{' '}
              <span className="dn-tag bull">+7.54%</span>, PALL +2.07%, URNM +6.77%,
              CL{' '}
              <span className="dn-tag bull">+6.26%</span>, BRENT{' '}
              <span className="dn-tag bull">+6.35%</span> — a broad bid for real
              assets against a soft equity tape and a softening dollar, with BTC as
              the highest-beta expression of it.
            </p>

            <p>
              <span className="dn-em">
                That reading is offered as regime texture and nothing more.
              </span>{' '}
              A mean |r| of 0.219 is by the file&rsquo;s own thresholds an{' '}
              <em>idiosyncratic</em> regime, a +0.310 correlation on 167 hourly rows
              is a weak estimate, and &ldquo;BTC trades with metals&rdquo; is a
              hypothesis this snapshot is consistent with, not a relationship the
              desk has established. The BTC/NQ ratio series is{' '}
              <span className="dn-tag">NOT LOADED</span> this cut, so the BTC-vs-NQ
              line above is built only from the two 7d percentage moves the
              correlation file prints — no ratio, no percentile, no regime call on
              that pair. Same for NTT pivots, max-pain and the strike-level IV
              surface: framework-only, listed in the manifest.{' '}
              <span className="dn-signal">
                The macro line the desk will actually act on is narrower
              </span>: with 10Y at 4.69% and rising, real yields at z +1.82 and Fed
              net liquidity draining, this rally has no rates tailwind at all. It is
              running against the macro panel, which makes its persistence a function
              of flow and positioning — the squeeze, the metals bid, the dollar
              softness — rather than of the discount rate. Flow-driven moves that run
              against the macro can go a long way, and they can also stop without
              warning, because nothing underneath them changed.
            </p>

            <h2 className="dn-sec">
              Book{' '}
              <span className="dn-roman">V · book FLAT and it COST the desk this move — the deferred 0.2R scout would be +10.03R gross / ≈2.01R at stated sizing, and both its targets were tagged 08-19 15:05Z · the scout re-entry is now recorded EXPIRED UNFILLED (the setup died of price, not of invalidation) and is NOT re-drawn 20% higher to chase · a pullback re-entry framework is defined at the $75k–$76k wall band, NOT ARMED · chase-short STOOD DOWN with its PRICE leg at the furthest distance of the lineage (spot +23.22% above the flip; an 18.84% decline is needed to reach it) while its GAMMA leg is merely at a post-08-16 extreme (+249.90M positive, below the lineage&rsquo;s own +294.6M / +283.46M / +262.1M prints of 07-22 / 07-23 / 07-24)</span>
            </h2>

            <p>
              <span className="dn-signal">
                Say the plain thing first: the desk was flat through a +20.66% move
                it had already framed
              </span>. The 08-19 note carried a cover-bounce scout with leg 1 (a 1d
              close above the D-EMA50 cap $64,346) fired and held, and leg 2 (a
              certifiable SM net long above +1k) unmet, and it stood the trade down
              on leg 2. Leg 2 never certified — and, as §I sets out, it{' '}
              <em>still</em> has not, because the only crossing into net-long
              territory is a roster re-sync minute. But the price did not wait for
              the data quality to improve. Both of that trade&rsquo;s targets,{' '}
              <span className="dn-tag">$66,343 (D-EMA100)</span> and{' '}
              <span className="dn-tag">$66,391 (D-SMA100)</span>, were tagged at{' '}
              <span className="dn-tag">2026-08-19 15:05Z</span>, about fourteen and a
              half hours after that note published, and the tape kept going: the
              stated entry ~$64,632 against the stated stop $63,301 is{' '}
              <span className="dn-tag bull">$1,331 of risk against $13,349.99 of
              move = 10.03R gross, ≈2.01R at the stated 0.2R sizing</span>. The
              lineage&rsquo;s discipline was not wrong in construction — the same
              certification rule kept the book out of six weeks of $63k chop — but
              this session it produced a measured opportunity cost of 10.03R gross,
              and the note records that as a fact rather than as a caveat.{' '}
              <span className="dn-em">
                The note does not rank it against prior misses: the lineage keeps
                no consistently measured ledger of deferred setups and their
                maximum favourable excursion, so &ldquo;largest of the
                lineage&rdquo; is a claim this file cannot source and does not
                make. Building that ledger is carried as an open item.
              </span>
            </p>

            <p>
              <span className="dn-signal">
                It is also the reason the desk will not chase here
              </span>. The temptation, having missed a 24% week, is to re-draw the
              trigger at $78,000 and call the fill late. Look at what that entry
              would actually be: a long initiated 20.66% above the framed level,
              directly into the{' '}
              <span className="dn-tag bear">$78,000 +31.41M wall</span> and beneath
              the{' '}
              <span className="dn-tag bear">$80,000 +41.20M</span> heaviest wall on
              the board, under a{' '}
              <span className="dn-tag bear">W-EMA100 $78,451.51 / D-EMA400 $78,235.27
              lid within 0.6%</span>, with{' '}
              <span className="dn-tag bear">RSI 89.8 / 89.5 / 87.9 on the 4h / 8h /
              12h</span> and{' '}
              <span className="dn-tag bear">⚡TD9 SELLs on all three</span>, funding
              pinned at the cap for 952 minutes, 24h spot CVD negative at −117.2,
              and SM trimming
              −11.68% on the only clean window. Every input except the trend itself
              argues that this is the worst geometry the move has offered.{' '}
              <span className="dn-em">
                The correct response to a missed trade is a better next trade, not
                the same trade at a worse price. The scout is recorded as expired
                unfilled and closed out; the re-entry is re-framed from scratch at a
                level the desk would actually want.
              </span>
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · cover-bounce scout re-entry (08-19 lineage) · <b>EXPIRED UNFILLED</b> — the setup died of price, not of invalidation; leg 2 never certified and the tape left without it</span>
              <div className="dn-trade-name">
                The 08-19 scout is closed out as expired, not stopped and not filled: leg 1 (1d close &gt; D-EMA50 cap $64,346) fired and held, leg 2 (certifiable SM net &gt; +1k) never certified and STILL has not, and price ran +20.66% past the framed entry with both targets tagged 08-19 15:05Z
              </div>
              <div className="dn-thesis">
                Status accounting, stated plainly. Entry was framed at ~$64,632 with a
                stop at $63,301 (the then-repriced 0γ flip) — $1,331 of risk — and
                targets $66,343 / $66,391. Both targets were tagged at{' '}
                <b>2026-08-19 15:05Z</b>, ~14.6h after the 08-19 note published. Spot
                is now $77,981.99: <b>+$13,349.99 on the framed geometry = 10.03R
                gross, ≈2.01R at the stated 0.2R sizing</b>, and +17.54% / +17.46%
                beyond the two targets. The trade was never entered because leg 2
                required a certifiable SM net long, and the SM feed&rsquo;s only
                crossing into net-long territory is the 08-20 07:06Z roster re-sync
                (Δnet +39,352.9 = 174.7% of prior, long_traders 587 → 1,388) — which
                fails the same artifact test the lineage wrote. <b>The rule worked as
                specified and cost the desk the move.</b> Both statements are true and
                the note is not going to soften either. What the desk does NOT do is
                retroactively certify the artifact to claim the trade, or re-draw the
                trigger 20% higher to pretend it caught it. Status:{' '}
                <em>expired unfilled / no position / opportunity cost 10.03R gross
                recorded</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">leg 1 (cap reclaim)</span><span className="dn-lvl-v bull">FIRED, held, and long since irrelevant — the 08-19 D-EMA50 &ldquo;cap&rdquo; was $64,346 and spot is now 21.19% above it; today&rsquo;s recomputed D-EMA50 is a different level, $65,891.78, with spot 18.35% above that</span></div>
                <div><span className="dn-lvl-k">leg 2 (certifiable SM long)</span><span className="dn-lvl-v bear">NEVER CERTIFIED and still uncertified — the +15,993.77 as-printed net long traces entirely to the 08-20 07:06Z roster re-sync; no clean crossing exists in the series</span></div>
                <div><span className="dn-lvl-k">targets, in hindsight</span><span className="dn-lvl-v">$66,343 and $66,391 both tagged 2026-08-19 15:05Z; spot is +17.54% / +17.46% beyond them</span></div>
                <div><span className="dn-lvl-k">opportunity cost</span><span className="dn-lvl-v bear">10.03R gross on the framed $64,632 / $63,301 geometry; ≈2.01R at the stated 0.2R sizing · <b>not ranked against prior misses — no lineage MFE ledger exists to rank it against</b></span></div>
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">EXPIRED UNFILLED · closed out · NOT re-drawn at a higher price</span></div>
              </div>
              <div className="dn-gating">
                <b>What this changes about the rule:</b> the artifact test is not
                being relaxed mid-move — that would be a decision made by the P&amp;L
                of a trade the desk did not take, which is the worst possible reason
                to change a rule. But the cost is now measured, and the honest
                observation is that a binary gate on a feed the desk cannot audit will
                keep producing this outcome. <b>The structural fix, to be specified
                in a later session and NOT applied retroactively here, is a trigger
                that does not depend on a single unauditable field</b> — e.g. price
                structure plus OI plus funding, with SM as corroboration rather than
                as a gate. This note flags the design defect; it does not rewrite the
                book in the middle of the move that exposed it.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · pullback re-entry framework · <b>NOT ARMED</b> — needs the 08-23 weekly settle above the 200W AND a held pullback into the $75k–$76k wall band; no chase at $78k</span>
              <div className="dn-trade-name">
                Re-framed from scratch: a two-condition pullback long into the $75,000 +13.33M / $76,000 +12.91M wall band, confirmed by the 08-23 W-SUN settle above W-SMA200 $64,270.78 — neither condition is met at the snapshot, and the trade is explicitly not a chase of the $78k print
              </div>
              <div className="dn-thesis">
                The bull structure is real and worth owning at the right price: the
                200W break of 08-16 is on track to be un-done — the in-progress
                weekly bar tracks +21.28% above the floor but has NOT settled —
                spot is above the entire daily ladder, MTF reads 8 long /
                0 short / 2 neutral, the dealer book is a +249.90M positive-gamma
                clamp with its heaviest wall at $80,000, OI contracted −5.37% off the
                3d peak through the whole leg (squeeze, not leverage), retail is
                uncrowded at 50.88% having been 66.87% at the 08-16 00:00Z
                reference (68.64% at the true 08-16 22:41Z low), and an underwater
                short book (short_entry $74,636.55, 878 traders) is still in place as
                unspent fuel. What is wrong is only the entry price. Spot is wedged
                between the W-SMA150 / W-EMA50 shelf ($77,448 / $77,257) and the
                W-EMA100 / D-EMA400 lid ($78,452 / $78,235), with three simultaneous
                TD9 SELLs and RSI 89.8 / 89.5 / 87.9 on the mid frames, and the
                +249.90M clamp argues for a pin between the $78k and $80k walls rather
                than clean continuation. <b>So the desk waits for the pin to give the
                pullback the gamma structure implies</b> — a tag of the $75k–$76k
                wall band that HOLDS on a daily close — with the 08-23 weekly settle
                as the structural confirmation that the floor break is genuinely
                reversed. Status: <em>not armed / no position</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">arm trigger (both conditions)</span><span className="dn-lvl-v bull">cond 1 — the 08-23 W-SUN bar settles ABOVE W-SMA200 $64,270.78, which is what WOULD confirm 08-16 as a one-week false break (in-progress bar is +21.28% above but UNSETTLED; PENDING, settles 08-23 23:59Z) · cond 2 — price tags the $75,000–$76,000 wall band and then posts a 1d close ≥ $75,000 (UNMET; spot is 2.6% above the band)</span></div>
                <div><span className="dn-lvl-k">entry</span><span className="dn-lvl-v bull">~$76,000 on the held-band close · a single 0.2R starter, no add-leg, no chase above $78,000 under any circumstance</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1d close &lt; $72,992.40 — the 08-21 daily low and the last pivot before the breakout leg, sitting just above the $72,000 +11.99M wall; a close through it means the pullback is a reversal</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$80,000 (the +41.20M heaviest wall), then $81,789 (W-SMA50) — the first two structural levels overhead</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R starter (single, no expansion) · take half at $80,000</span></div>
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">NOT ARMED — cond 1 PENDING (weekly settle 08-23 23:59Z), cond 2 UNMET (no pullback has occurred)</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R (illustrative):</b> entry ~$76,000, stop $72,992.40 = ~$3,008
                risk; first target $80,000 = ~$4,000 reward ≈ 1.33:1; second target
                $81,789 = ~$5,789 ≈ 1.92:1.{' '}
                <b>Hard rule:</b> this framework exists to give the desk a defined
                level to buy, NOT a licence to enter early because it missed the last
                one. If the tape simply continues from $78k without ever tagging
                $76k, <em>the trade does not happen and that is an acceptable
                outcome</em> — a second consecutive miss is cheaper than a chase into
                a triple TD9 SELL at the $80k wall. Equally, a tag of the band that
                does NOT produce a close ≥ $75,000 is not an entry; the band has to
                hold on a close. And note the dated risk in §III, stated
                conditionally: 28AUG26 currently contributes +82.92M of the
                +249.90M aggregate (33.18%) as measured at the 00:00Z snapshot and
                settles in 6.3 days. That contribution is not fixed — spot, IV and
                the rest of the book can all reprice before then — so the honest
                form is that, <em>absent offsetting changes</em>, the 28AUG settle
                would leave the clamp that makes this pullback thesis mechanical
                materially thinner. The framework does not assume the clamp holds
                until then, and it does not assume exactly +82.92M leaves.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · chase-short · <b>STOOD DOWN</b> — the PRICE leg is further from arming than at any point in the lineage (the flip sits 18.84% below spot; spot is +23.22% above it), while the GAMMA leg is at a post-08-16 extreme rather than a lineage one (+249.90M positive, roughly double 08-19, but below 07-22&rsquo;s +294.6M)</span>
              <div className="dn-trade-name">
                Chase-short stays stood down: both hard triggers moved decisively further away — the 0γ flip repriced to $63,288 with spot +23.22% above it (an 18.84% decline away), and aggregate gamma roughly doubled to +249.90M positive, the deepest positive clamp since the 08-16 break though not of the whole lineage
              </div>
              <div className="dn-thesis">
                The press requires two things: price losing the flip on a daily close,
                AND aggregate gamma flipping negative. Neither is remotely close. The
                flip sits $63,288 — a level spot has not seen since 08-19 — putting
                price <b>+23.22% above it vs live spot and +24.16% above it vs the GEX
                file&rsquo;s own Deribit index $78,578</b>, both references positive
                and same-signed; expressed as the move that would actually be
                needed, <b>the flip is 18.84% below spot</b>. Gamma is{' '}
                <b>+249.90M on the footed basis</b>, up from
                +128.92M on 08-19, with all ten top walls positive and the largest
                negative strike anywhere on the surface just $60,000 −6.36M, ~23%
                below the tape and eased from −17.79M.{' '}
                <span className="dn-em">
                  Be precise about which leg is at an extreme. The PRICE leg is at
                  its furthest of the lineage. The GAMMA leg is not: +249.90M is
                  the deepest positive clamp since the 08-16 floor break, but the
                  same footed basis recorded +294.6M on 07-22, +283.46M on 07-23
                  and +262.1M on 07-24 — all deeper than today.
                </span>{' '}
                Either way the book is a heavy vol-dampener, the structural
                opposite of the negative-gamma amplifier a chase-short needs.
                Status:{' '}
                <em>stood down / no position / price leg at its furthest of the
                lineage, gamma leg at a post-08-16 extreme</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">arm condition (unchanged)</span><span className="dn-lvl-v">1d close &lt; $63,288 (repriced 0γ flip) AND aggregate GEX flips negative — currently +249.90M positive</span></div>
                <div><span className="dn-lvl-k">distance to leg 1</span><span className="dn-lvl-v bear">spot +23.22% above the flip (vs +2.10% on 08-19) — but the required move is the inverse: <b>an 18.84% decline</b> (63,287.51 / 77,981.99 − 1) before the price leg even engages · furthest of the lineage on this leg</span></div>
                <div><span className="dn-lvl-k">distance to leg 2</span><span className="dn-lvl-v bear">gamma +249.90M positive and roughly DOUBLED from 08-19&rsquo;s +128.92M; the only negative strike of size is $60,000 −6.36M, itself eased from −17.79M · deepest since 08-16 but NOT a lineage extreme (07-22 +294.6M, 07-23 +283.46M, 07-24 +262.1M were deeper)</span></div>
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">STOOD DOWN — price leg furthest from arming in the lineage, gamma leg furthest since 08-16; no short is contemplated at this snapshot</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> the session&rsquo;s temptation is to fade an
                obviously extended tape — three simultaneous TD9 SELLs, RSI 89.8 /
                89.5 / 87.9, funding capped 952 minutes, fresh 15m and 30m death
                crosses, spot CVD negative over 24h, SM trimming −11.68% on the clean
                window, and a reversal regime flip to 5/9 JT&lt;0. That is a genuinely
                deteriorating set of internals and it is <b>NOT the trigger</b>. The
                trade the desk trades is the flip-close and the gamma sign, and they
                are an 18.84% decline and a 250M sign-change away respectively.
                Shorting into the deepest
                positive-gamma book since the floor break, beneath a +41.20M wall that acts
                as a magnet, is precisely the error the lineage refused all through
                the $63k regime — and refusing it then is why the desk is only out an
                opportunity cost rather than a realised loss. The overbought internals
                are a reason to withhold a chase-long, not a reason to arm a short.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · the regime moves to &ldquo;200W break BEING REVERSED and overshot into a positive-gamma pin, with the confirming weekly settle still PENDING&rdquo; · the 08-16 floor break is on track to be un-done — the in-progress bar is +21.28% above the floor but has NOT settled; the desk owns the structure and not the price</span>
              <div className="dn-trade-name">
                Regime read — the 08-16 weekly break of the 200W cycle floor is on track to be recorded as a ONE-WEEK false break: the in-progress bar tracks $77,950.10 against W-SMA200 $64,270.78 (+21.28%) into the 08-23 23:59Z settle, and the tape has overshot into a +249.90M gamma clamp whose heaviest wall sits 2.59% overhead
              </div>
              <div className="dn-thesis">
                The 08-16 note flagged the weekly cycle-floor settle as the pending
                macro catalyst for the chase-short; it fired, and the market did the
                opposite. The 08-16 W-SUN bar settled $62,876.00 against a W-SMA200 of
                $63,978.83 — 1.72% below, ending the six-week above-floor streak from
                07-05 — and the trap-watch state file recorded{' '}
                <code>consecutive_above: 0</code> and{' '}
                <code>reclaim_failed_week: 2026-08-16</code>. Five daily closes later
                the in-progress weekly bar sits +21.28% above the floor. On the
                desk&rsquo;s own recompute from the parquet weekly series, only{' '}
                <b>10 of 164 completed weekly closes (6.1%) have ever closed below
                the 200W</b> — the still-open 08-23 bar is the 165th non-NaN
                observation and is deliberately excluded from that denominator —
                which is what made the 08-16 break worth flagging.{' '}
                <b>The one-week false break is a projection, not a record.</b> If
                the 08-23 W-SUN bar settles above W-SMA200 it will have lasted
                exactly one week and will be the sharpest bear-trap signature this
                lineage has logged; until that 23:59Z close prints, the correct
                tense is conditional. <b>The 08-23 W-SUN close is the print that
                converts &ldquo;break being reversed&rdquo; from in-progress to
                historical — and a close back below the floor would leave the
                break intact, not false.</b> The
                overshoot is the other half of the read — the reclaim did not stop at
                the floor, it ran 21% past it into the $78k / $80k wall pair, which is
                why the desk owns the structural conclusion and not the current price.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">being reversed (bull, UNSETTLED)</span><span className="dn-lvl-v bull">08-16 close $62,876.00 broke W-SMA200 $63,978.83 (−1.72%); in-progress 08-23 bar $77,950.10 vs W-SMA200 $64,270.78 = +21.28% — <b>OPEN, settles 08-23 23:59Z</b> · spot above ALL TEN daily MAs · MTF 8 long / 0 short / 2 neutral (1d and 1w neutral, not long) · gamma +249.90M with spot 23.22% above the flip / the flip 18.84% below spot · OI −5.37% off the 3d peak (squeeze, not leverage) · retail uncrowded 50.88% (66.87% at the 08-16 00:00Z reference, 68.64% at the true 08-16 22:41Z low) · underwater short book still in place (short_entry $74,636.55, 878 traders)</span></div>
                <div><span className="dn-lvl-k">overshot (caution)</span><span className="dn-lvl-v bear">RSI 4h 89.8 / 8h 89.5 / 12h 87.9 / 1d 84.3 with ⚡TD9 SELL on all three mid frames · reversal regime flipped to 5/9 JT&lt;0 · fresh 15m (2 bars) and 30m (1 bar) water-up death crosses · funding capped 952 consecutive minutes · 24h spot CVD −117.2 (the spot bid stopped and turned) vs futures CVD +814.1 · SM trimmed −11.68% on the clean window · IV 49.1% still −14.44pt under 7D RV 63.54%</span></div>
                <div><span className="dn-lvl-k">still overhead (unresolved)</span><span className="dn-lvl-v">W-EMA100 $78,451.51 (−0.60%) and D-EMA400 $78,235.27 (−0.32%) immediately; then the $80,000 +41.20M wall (−2.59%), W-SMA50 $81,789.33 (−4.66%), the 1w cloud base $85.9k, W-SMA100 $88,843.52 (−12.23%) · spot is still −38.21% from the $126,208.50 ATH</span></div>
                <div><span className="dn-lvl-k">air pocket below (structural risk)</span><span className="dn-lvl-v bear">only 437 of 2,880 minutes (15.2%) on 08-19/08-20 traded in the $65,000–$69,000 band — beneath the $70,000 +18.75M wall there is very little accepted structure until the W-EMA20 / W-SMA20 shelf at $69,312 / $69,521 — 11.1% / 10.9% below the print (spot/level +12.51% / +12.17%)</span></div>
                <div><span className="dn-lvl-k">dated catalysts</span><span className="dn-lvl-v">08-23 23:59Z W-SUN settle (confirms or un-does the false-break read) · 22AUG26 0.3DTE +7.68M settles 08:00Z today · 28AUG26 expiry in 6.3 days, currently contributing +82.92M = 33.18% of the aggregate clamp as measured at the 00:00Z snap — <b>a current contribution, not a guaranteed roll-off; spot / IV / OI can reprice it first</b></span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the regime read moves from
                &ldquo;cap-and-floor reclaimed, base unconfirmed&rdquo; to{' '}
                <b>&ldquo;200W break being reversed and overshot into a
                positive-gamma pin, settle pending&rdquo;</b>, and the note states
                plainly that the desk did not
                participate. Two things follow and they must not be collapsed into
                each other. First, the structural conclusion is bullish on
                evidence — an in-progress reclaim of a level only 10 of 164
                completed weekly closes (6.1%) have ever breached, running 21%
                above it on contracting OI with
                retail uncrowded, is about as strong a bear-trap signature as this
                data produces, <b>and it becomes a one-week false break only if
                the 08-23 bar settles above the floor</b>. Second, the tactical conclusion is that the desk has no
                edge at $77,982: it is 0.6% under a two-level weekly lid, 2.6% under
                the heaviest wall on the board, with three TD9 SELLs and a spot bid
                that stopped. <b>Bullish structure plus terrible entry equals wait,
                not buy.</b> The book stays FLAT with the pullback framework defined
                at the $75k–$76k band and the 08-23 settle as the confirming print.
              </div>
            </div>

            <h2 className="dn-sec">
              Read{' '}
              <span className="dn-roman">VI · the 08-16 200W break is ON TRACK to be recorded as a one-week false break — in-progress weekly +21.28% above the floor, UNSETTLED until 08-23 23:59Z — and the desk was FLAT for all of it · the deferred scout is closed EXPIRED UNFILLED at an opportunity cost of 10.03R gross · the structure is bullish on evidence, the entry at $77,982 is the worst the move has offered · book FLAT · pullback framework <b>defined but NOT ARMED</b> at $75k–$76k, chase-short stood down</span>
            </h2>

            <p>
              <span className="dn-signal">
                Two conclusions, and the discipline is in keeping them separate
              </span>. The first is structural and it is bullish on the evidence: a
              weekly close below the 200W cycle floor — something only{' '}
              <span className="dn-tag">10 of 164 completed weekly closes (6.1%)</span>{' '}
              in the desk&rsquo;s recompute have ever done — printed on 08-16 at{' '}
              <span className="dn-tag bear">$62,876.00</span> against{' '}
              <span className="dn-tag">$63,978.83</span>, and was answered by a{' '}
              <span className="dn-tag bull">+24% five-day reclaim</span> that has the
              in-progress bar{' '}
              <span className="dn-tag bull">+21.28% above the floor</span> heading
              into the 08-23 23:59Z settle — <span className="dn-em">that bar is
              still open, so the reclaim is in progress and the &ldquo;one
              week&rdquo; is a projection the settle has to ratify</span>. It came
              on{' '}
              <span className="dn-tag bull">contracting open interest (−5.37% off the
              3d peak)</span>, with{' '}
              <span className="dn-tag bull">retail uncrowded at 50.88%</span> after
              being 66.87% long at the 08-16 00:00Z reference row (68.64% at the
              true 22:41Z low), and it has taken spot above every rung of
              the daily ladder with MTF at{' '}
              <span className="dn-tag bull">8 long / 0 short / 2 neutral</span> —
              every short classification cleared, though 1d and 1w only as far as
              neutral. That is a bear trap of the highest quality this dataset can
              describe, and the desk records it as such — one week below, and
              apparently gone, subject to the print.
            </p>

            <p>
              The second conclusion is tactical and it is not bullish at all.{' '}
              <span className="dn-signal">
                At $77,982 the desk has no edge and is honest about why
              </span>: spot is{' '}
              <span className="dn-tag bear">−0.60% under W-EMA100 $78,451.51 and
              −0.32% under D-EMA400 $78,235.27</span>, a two-level weekly lid inside
              0.6%; it is{' '}
              <span className="dn-tag bear">−2.52% under the $80,000 +41.20M</span>{' '}
              heaviest wall inside a{' '}
              <span className="dn-tag">+249.90M</span> positive-gamma clamp that
              mechanically argues for a pin rather than continuation; the mid frames
              carry{' '}
              <span className="dn-tag bear">RSI 89.8 / 89.5 / 87.9 with ⚡TD9 SELLs on
              4h, 8h and 12h</span>; funding has been{' '}
              <span className="dn-tag bear">pinned at the +10.95% cap for 952
              consecutive minutes</span>; the{' '}
              <span className="dn-tag bear">24h spot CVD has gone negative
              (−117.2)</span>{' '}
              while futures CVD keeps buying (+814.1); and on the only artifact-free window the
              tracked book{' '}
              <span className="dn-tag bear">trimmed −11.68% into a +2.23%
              push</span>. Below, the structure is thin —{' '}
              <span className="dn-tag bear">only 15.2% of the 08-19/08-20 minutes
              traded in the $65k–$69k band</span> — so an unwind through the $70,000
              wall has little to catch it until $69.3k–$69.5k.
            </p>

            <p>
              And the third thing, which is not a conclusion but an accounting.{' '}
              <span className="dn-signal">
                The rule that protected the book for six weeks cost it this move, and
                the note does not defend the rule
              </span>. Leg 2 asked for a certifiable SM net long; the SM feed produced
              its net long entirely in a single{' '}
              <span className="dn-tag bear">08-20 07:06Z roster re-sync (Δnet
              +39,352.9 = 174.7% of prior)</span>, which is not certification, and so
              the trade stayed deferred while price ran{' '}
              <span className="dn-tag bull">+20.66%</span> past it —{' '}
              <span className="dn-tag bull">10.03R gross, ≈2.01R at the stated
              sizing</span>. The right response is neither to retroactively bless the
              artifact nor to chase at $78k; it is to note that a binary gate on an
              unauditable field will keep producing this outcome, flag the design
              defect for a later session, and re-frame the entry at a price the desk
              would actually want.{' '}
              <span className="dn-em">
                Book FLAT. The pullback long is <b>defined but NOT ARMED</b> at the
                $75,000–$76,000 wall
                band with a $72,992.40 close-basis stop, and needs the 08-23 weekly
                settle above the 200W plus a held-band close to arm — neither of which
                exists yet. The chase-short is stood down with its price leg at the
                furthest distance from arming in the lineage and its gamma leg at a
                post-08-16 extreme. The tape turns on two dated prints: the
                08-23 23:59Z W-SUN settle, which would convert the false-break read
                from in-progress to historical — or, on a close back below the
                floor, leave the break standing — and the 28AUG26 expiry six days
                out, which currently carries +82.92M (33.18%) of the +249.90M clamp
                holding this tape still and would, absent offsetting book / spot /
                IV changes, take that dampening off the board.
              </span>
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit
            </span>
            <b>Status:</b> v2 EN note — <b>post codex hostile audit</b>. STAGE B ran
            a hostile-but-fair cross-model pass and returned{' '}
            <b>BLOCK-CRITICAL — 4 CRITICAL + 2 MAJOR + 8 MINOR</b>, recorded at{' '}
            <code>audits/2026-08-22-desk-note.md</code>. v2 applies all fourteen
            findings. Each was treated as a wrong claim to correct <em>everywhere</em>{' '}
            in the file, not only at the cited lines; the per-finding grep-closure
            loop below records the key patterns searched across the full EN file,
            hits carrying the pre-fix meaning before and after, and the resolution
            state. <b>Every finding is RESOLVED at hits-after = 0.</b>
            <br />
            <br />
            <b>DN-001 (CRITICAL) — false gamma superlative.</b> Patterns:{' '}
            <code>deepest positive</code>, <code>of the lineage</code>,{' '}
            <code>furthest</code>, <code>both triggers</code>. Hits before: 3 / 6 /
            3 / 1 lines carrying the unscoped superlative. Fix: +249.90M is now
            stated as the deepest positive-gamma clamp <em>of the post-08-16
            lineage</em> and explicitly NOT a lineage maximum, with the sourced
            counter-ledger 07-22 +294.6M, 07-23 +283.46M, 07-24 +262.1M added in
            §III, the §III/§V romans and the chase-short card; the chase-short now
            says the PRICE leg is at its lineage furthest while the GAMMA leg is at
            a post-08-16 extreme only. Hits after carrying the pre-fix meaning:{' '}
            <b>0</b> — RESOLVED.
            <br />
            <b>DN-002 (CRITICAL) — unsettled weekly bar promoted to history.</b>{' '}
            Patterns: <code>one-week false break</code>,{' '}
            <code>lasted exactly one week</code>, <code>false break</code>,{' '}
            <code>reversed</code>, <code>un-done</code>. Hits before: 3 / 1 / 5 plus
            the completed-tense lead, regime card and signature. Fix: every
            occurrence is conditional/in-progress — lead (&ldquo;ON TRACK to
            become … it is not one yet&rdquo;), regime card (&ldquo;BEING
            REVERSED&rdquo;, &ldquo;a projection, not a record&rdquo;, and a close
            back below leaves the break intact), §VI roman, closing paragraph and
            signature. Hits after carrying the pre-fix meaning: <b>0</b> — RESOLVED.
            <br />
            <b>DN-003 (CRITICAL) — contradictory ARMED status.</b> Patterns:{' '}
            <code>ARMED</code>, <code>armed</code>. Hits before: 5 lines, of which
            the §VI roman read <code>armed</code> against the card&rsquo;s{' '}
            <code>NOT ARMED</code>. Fix: §VI now reads{' '}
            <b>defined but NOT ARMED</b>, matching the trade card, the status row
            and the closing paragraph. Hits after in a non-negated state:{' '}
            <b>0</b> — RESOLVED; all six surviving occurrences read NOT ARMED / not
            armed.
            <br />
            <b>DN-004 (CRITICAL) — misquoted 08-16 MTF history.</b> Patterns:{' '}
            <code>1 long / 8 short / 1 neutral</code>,{' '}
            <code>Every frame that was short</code>. Hits before: 2 / 1. Fix:
            corrected to the archived 08-16 count <b>1 long / 7 short / 2
            neutral</b> (verified against{' '}
            <code>snapshots/2026-08-16-0007/mtf_div_latest.html</code>, which reads{' '}
            <code>1 多 / 7 空 / 2 中</code>), and the false claim replaced with the
            frame-by-frame truth: all short classifications cleared, five of the
            seven to long and <b>1d and 1w only to NEUTRAL</b>. Hits after:{' '}
            <b>0</b> — RESOLVED.
            <br />
            <b>DN-005 (MAJOR) — unreproducible JSON provenance.</b> Patterns:{' '}
            <code>249,898,548</code>, <code>gex_summary</code>,{' '}
            <code>ma200w_trap_watch_state</code>. Hits before: 2 / 2 / 2 asserted as
            pinned-snapshot facts. Neither JSON is in{' '}
            <code>snapshots/2026-08-22-0038/</code> and the GEX value had already
            rolled, so the honest fix is disclosure, not retroactive archiving of a
            different state. Fix: every GEX number now rests on the{' '}
            <b>archived HTML by-expiry strip (+249.91M, carried as ≈+249.90M)</b>;
            the JSON <code>net_gex</code> is demoted to disclosed non-pinned
            corroboration with its 01:00Z roll to +250,357,214 stated; the
            trap-watch file is labelled NON-PINNED with its re-read payload and md5.
            Hits after asserting an unpinned JSON as pinned: <b>0</b> — RESOLVED.
            <br />
            <b>DN-006 (MAJOR) — snapshot GEX turned into forward certainty.</b>{' '}
            Patterns: <code>Until 28AUG settles</code>, <code>removes +82.92M</code>,{' '}
            <code>82.92M</code>. Hits before: 1 / 1 / 6, with the pullback thesis
            leaning on the certainty. Fix: &ldquo;the clamp holds&rdquo; and
            &ldquo;removes +82.92M&rdquo; are gone; all five surviving mentions read
            as a <em>current contribution at current IV</em> (33.18% of +249.90M at
            the 00:00Z snap) whose effect is stated only{' '}
            <em>absent offsetting book / spot / IV changes</em>. Hits after carrying
            deterministic phrasing: <b>0</b> — RESOLVED.
            <br />
            <b>DN-007 (MINOR) — 24h window was 24h01m.</b> Patterns:{' '}
            <code>6.02%</code>, <code>73,551.83</code>, <code>2,159.1</code>,{' '}
            <code>−2.00%</code>, <code>+6.16%</code>, <code>9.87%</code>,{' '}
            <code>1442</code>, <code>816.5</code>, <code>−35.9</code>,{' '}
            <code>+825.8</code>, <code>−62 / −242</code>, <code>+1.88</code>,{' '}
            <code>−$25.27</code>. Hits before: 5 / 1 / 3 / 3 / 2 / 3 / 5 / 1 / 3 / 4
            / 1 / 1 / 1. Fix: windows re-selected by parsed timestamp, inclusive
            [anchor − duration, anchor]; desk recompute over rows 132132–133572 gives
            return <b>+5.79%</b> (5.7928%), low <b>$73,554.01 @ 00:42Z / BJ
            08:42</b>, OI <b>−2,164.8 BTC / −2.01%</b>, funding start{' '}
            <b>+6.20%</b>, mean <b>+9.88%</b>, <b>0 / 1,441</b> negative,{' '}
            <b>952 / 1,441 (66.1%)</b> at cap, taker net <b>+825.8</b>, spot CVD{' '}
            <b>−117.2</b>, futures CVD <b>+814.1</b>, skew mean <b>+1.87</b>, perp
            mean <b>−$25.28</b>; 72h CVDs re-footed to <b>+5,581.3</b> /{' '}
            <b>+6,242.3</b>. Hits after carrying an off-window value: <b>0</b> —
            RESOLVED. (The manifest now states the exact-window rule and that the v1
            slices ran one row long; it no longer restates the bad row counts.)
            <br />
            <b>DN-008 (MINOR) — unreproducible 72h funding summary.</b> Patterns:{' '}
            <code>+8.35%</code>, <code>2,184</code>, <code>4,323</code>. Hits
            before: 2 / 2 / 2. Fix: recomputed on the exact 4,321-row / 72h00m
            window → <b>+8.34%</b> mean (8.3443%), <b>2,181 / 4,321</b> at cap, in
            both the meta tile and §I. Hits after: <b>0</b> — RESOLVED.
            <br />
            <b>DN-009 (MINOR) — 3d-peak OI delta off by 2.6 BTC.</b> Pattern:{' '}
            <code>6,004.6</code>. Hits before: 2. Fix: endpoints 111,717.553 @{' '}
            <code>live_db.json:130127</code> and 105,715.551 @ <code>:133572</code>{' '}
            subtract to <b>−6,002.0 BTC (−5.37%)</b>; both occurrences replaced.
            Hits after: <b>0</b> — RESOLVED.
            <br />
            <b>DN-010 (MINOR) — retail reference mis-stamped and not the low.</b>{' '}
            Patterns: <code>66.87%</code>, <code>08-16 08:00Z</code>,{' '}
            <code>exact low</code>. Hits before: 6 / 2 / 1. Fix: the quoted row is
            labelled <b>BJ 08:00 08-16 / UTC 2026-08-16 00:00Z</b> and called the
            prior-note reference, not the low; the true tape low{' '}
            <b>$62,716 at 2026-08-16 22:41Z (BJ 06:41 08-17) with retail 68.64%
            long</b> is added at all six sites. Hits after mis-stamped or
            claiming the low: <b>0</b> — RESOLVED.
            <br />
            <b>DN-011 (MINOR) — flip distance inverted.</b> Patterns:{' '}
            <code>23% decline</code>, <code>23.22% below</code>,{' '}
            <code>below live spot</code>. Hits before: 1 / 5 / 1. Fix: spot is{' '}
            <b>+23.22% above</b> the flip; the flip is <b>18.84% below</b> spot
            (63,287.51 / 77,981.99 − 1), so an <b>18.84% decline</b> — not 23% —
            reaches leg 1. Corrected in the flip tile, §III roman, §III prose, §V
            roman and all four chase-short rows. Hits after: <b>0</b> — RESOLVED.
            <br />
            <b>DN-012 (MINOR) — in-progress week counted as a close.</b> Patterns:{' '}
            <code>165 weekly observations</code>, <code>165 non-NaN</code>. Hits
            before: 3. Fix: desk recompute gives <b>10 of 164 completed weekly
            closes = 6.0976% → 6.1%</b>; the 165th non-NaN observation is the still
            open 08-23 bar and is stated separately in the manifest, the regime card
            and §VI. Hits after: <b>0</b> — RESOLVED.
            <br />
            <b>DN-013 (MINOR) — one level given two prices.</b> Pattern:{' '}
            <code>64,346</code> co-located with <code>65,891.78</code>. Hits before:
            2 of the 4 <code>$64,346</code> lines conflated the two. Fix: the 08-19
            cap $64,346 (spot +21.19% above) and today&rsquo;s recomputed D-EMA50
            $65,891.78 (spot +18.35% above) are kept as separate levels in the MA
            paragraph and the leg-1 row; the two remaining $64,346 mentions are
            correct historical references to the 08-19 trigger. Hits after
            conflating: <b>0</b> — RESOLVED.
            <br />
            <b>DN-014 (MINOR) — unevidenced miss superlative.</b> Patterns:{' '}
            <code>largest opportunity cost</code>, <code>largest miss</code>. Hits
            before: 1 / 1. Fix: removed; the note states the measured 10.03R gross
            and says plainly that no lineage MFE ledger exists to rank it against,
            carrying that ledger as an open item. Hits after: <b>0</b> — RESOLVED.
            <br />
            <br />
            <b>Not adopted:</b> the audit&rsquo;s DN-005 remedy of copying both JSONs
            into the timestamped snapshot was <em>not</em> applied — both files had
            already rolled past the drafting state (<code>gex_summary.json</code> at
            01:00Z, <code>ma200w_trap_watch_state.json</code> re-stamped 01:11Z), so
            archiving them now would pin a state the note never read. Disclosure was
            taken instead, and the pre-draft copy step is carried forward as a
            runbook fix for the next session, together with the lineage ledger
            (MTF counts, footed GEX maxima, flip distance, setup status, missed-trade
            MFE) that DN-001 and DN-014 both want.{' '}
            <b>Second-opinion pass:</b> the runbook §5 ask-deepseek arithmetic
            recompute did not run — <code>curl</code> timed out at 300s against the
            DeepSeek endpoint (recorded in the audit file). codex remains the primary
            auditor and owns the publish gate; every numeric correction above was
            independently recomputed by the desk from{' '}
            <code>/opt/btc-monitor/live_db.json</code> and the parquet series before
            being applied, not taken on the auditor&rsquo;s word.{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1; Next 16.2.6
            hard-exits on Node &lt; 20.9.0, so a full <code>next build</code> is
            environment-blocked (lineage); <code>npx --no-install tsc --noEmit</code>{' '}
            is the build proxy and exits 0 on this v2 file.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among
            principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a
            single atomic snapshot (2026-08-22 00:39Z, tape anchor 00:39Z; session
            ~00:38Z) with section-level provenance disclosed in the manifest band
            above; the macro Tier-1 panel render is 2026-08-21 22:15Z (~2.4h before
            snapshot) and is a FRESH read (the Friday 08-21 US daily prints have
            posted), and some inputs are explicitly stale, absent or unavailable
            (<code>weekly_200sma.json</code> absent — the below-floor frequency over
            164 completed weekly closes is the desk&rsquo;s own parquet recompute;{' '}
            <code>gex_summary.json</code> and <code>ma200w_trap_watch_state.json</code>{' '}
            were read live and are NOT pinned in this session&rsquo;s snapshot
            archive, so figures sourced from them are disclosed as non-pinned and
            nothing in the note rests on them; the 08-23 weekly bar is OPEN, so every
            false-break statement is conditional on its 23:59Z settle; JGB monthly stale
            81d; Tier-3 monthly rows stale 81d; NTT pivots, max-pain, strike-level IV
            and the BTC/NQ ratio NOT LOADED) and flagged as such. Levels, sizes, and
            conditions are illustrative of the desk&rsquo;s process, not standing
            recommendations. The opportunity-cost figures on the expired scout are
            arithmetic on a trade that was <em>never entered</em> and are recorded for
            process accountability, not as a claim of performance. Past correlation,
            gamma, and positioning patterns do not bind future tape. Derivatives carry
            the risk of total loss and, where leveraged, loss exceeding deposited
            margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The 08-16 break of the 200W floor is on track to have lasted
                exactly one week — the 08-23 bar has to settle above the floor
                before that is a fact. Price answered it with +24% in five days,
                the in-progress weekly bar tracks
                +21.28% above the floor into that settle, and the desk was flat
                for all of it — the scout expired unfilled at 10.03R gross because a
                feed the desk cannot audit never certified. The structure is bullish
                and the entry at $77,982 is the worst the move has offered. Flat, with
                a level to buy at $75k–$76k and no intention of chasing.
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
            v2 · 2026-08-22 00:39Z snapshot · post codex hostile audit · sources:
            live_db.json · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · gex_summary.json + ma200w_trap_watch_state.json
            (read live, NOT pinned) · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
