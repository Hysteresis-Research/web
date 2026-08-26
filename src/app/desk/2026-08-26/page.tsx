import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-26 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-26',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-26' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260826() {
  await requireViewer('/desk/2026-08-26');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-26 · v2</span>
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
              <span className="dn-big">$78,612</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.42%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-26 00:07Z · live-tape anchor row
              00:05Z · rolling sources archived to
              /opt/desk-note/snapshots/2026-08-26-0007/
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">
                    live_db.json · anchor row <code>t = &ldquo;08-26 08:05&rdquo;</code>{' '}
                    (BJ) = 2026-08-26 00:05Z
                  </td>
                  <td className="dn-flag">
                    fresh · 1-min · every window endpointed on the pinned 00:05Z row ·
                    24h window = exactly 1,441 rows (08-25 00:05Z → 08-26 00:05Z) ·{' '}
                    <b>
                      the <code>t</code> field is Beijing time, not UTC; every UTC
                      stamp in this note is converted, never read off the field
                    </b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">
                    mtf_div_latest.html · scan header 2026-08-26 08:01 Beijing =
                    00:01Z
                  </td>
                  <td className="dn-flag">
                    hourly rolling artifact · ~4 min before the tape anchor · read from
                    the dated archive, not the live path · in-progress bars on every TF
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-26 00:01Z bake</td>
                  <td className="dn-flag">
                    966 instruments · Deribit index $78,713 vs live spot $78,612.26
                    ($100.74 above) · two aggregate bases disclosed below and{' '}
                    <b>not blended</b>: strike-profile sum +245.88M (= the card&rsquo;s
                    +245.9M) vs expiry-strip sum +252.35M (= gex_summary.json{' '}
                    <code>net_gex</code>), a $6.46M gap
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · generated 2026-08-26T00:01Z
                  </td>
                  <td className="dn-flag">
                    7d 1h bars · 22 assets · 168 rows · two of the seven days are
                    weekend days that carry no equity prints
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-25 22:17Z render</td>
                  <td className="dn-flag">
                    ~1.8h before the anchor · <b>fresh weekday FRED print</b> — the
                    second consecutive one; where 08-25 printed 10Y and TIPS real both
                    +5.0bp, this render prints −4.0bp and −2.0bp respectively · NFCI
                    stale 11d, JGB stale 85d, Michigan stale 85d, WTI stale 7d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix + 30D RV</td>
                  <td className="dn-v-cell">
                    btcusdt_1m_*.parquet · last bar 2026-08-26 00:05Z close $78,432.40
                  </td>
                  <td className="dn-flag">
                    all eight yearly files loaded (2019-09-08 → anchor) = 2,545 daily /
                    365 weekly bars, so <b>all 20 matrix cells are computable</b> ·
                    offsets recomputed against live spot $78,612.26 · the newest daily
                    and weekly bars are <b>in progress</b>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle-floor watch</td>
                  <td className="dn-v-cell">
                    weekly_200sma.json <b>ABSENT</b> · parquet fallback used
                  </td>
                  <td className="dn-flag">
                    second consecutive session with no watch JSON · percentile and
                    below-floor frequency recomputed from parquet and explicitly
                    scoped to the 166 weekly observations that have a computable 200W,
                    <b> not to BTC&rsquo;s full history</b> · no <code>last_event</code>{' '}
                    or <code>ratio_pctile</code> is quoted from a file that is not on disk
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale · monthly · 85d · do not lean</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT pivots, max-pain, strike-level IV, BTC/NQ ratio
                  </td>
                  <td className="dn-v-cell">NOT LOADED in this cut</td>
                  <td className="dn-flag">
                    btc_ntt_analysis.html is JS-rendered and not extractable · all four
                    claims are framework-only
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">futures CVD vs taker-net</td>
                  <td className="dn-v-cell">
                    live_db <code>fut_cvd</code> / <code>taker_net</code>
                  </td>
                  <td className="dn-flag">
                    <b>not independent</b> — Δ<code>fut_cvd</code> reproduces the summed{' '}
                    <code>taker_net</code> to within 0.1 BTC on all three windows below,
                    so they are one series and are never counted as two confirmations
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h ann.</span>
              <span className="dn-v">+8.31%</span>
              <span className="dn-src">live · raw 0.007587 × 1095 = +8.3078% ann · 24h mean +10.3746% · 24h range +5.8780% (@08-25 00:34Z) / +10.9500% (cap) · cap occupancy 1,025 / 1,441 sampled rows = 71.13% · 7d mean +9.6283%, 0 / 10,081 rows negative</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">the 08-24 release was REVOKED, then granted again</span>
              <span className="dn-src">the off-cap run the 08-25 note reported mid-flight ended at 435 rows / 434 elapsed minutes = 7h14m (08-24 19:21Z → 08-25 02:35Z) · re-pinned 08-25 02:36Z–16:54Z (859 rows / 858 min), 19 rows below, re-pinned 17:14Z–19:59Z (166 rows / 165 min) · off cap again since 08-25 20:00Z = 246 rows / 245 elapsed minutes = 4h05m, run mean +9.7291% · <b>rows are samples, not intervals: an N-row run spans N−1 minutes</b></span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−0.46% (−495.4 BTC)</span>
              <span className="dn-src">matched 00:05Z endpoints 107,219.3 → 106,723.9 · stated separately: peak 109,073.1 @08-25 07:48Z → trough 106,422.8 @08-25 23:38Z = −2,650.3 BTC / −2.43%, a peak-referenced figure whose baseline sits 7h43m after the 24h window open</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">50.02 / 49.98</span>
              <span className="dn-src">re-crowded +1.44pt from 48.58% · 24h trough 45.96% @08-25 04:11Z is a new 7d minimum (below 08-25&rsquo;s 48.12%) · 24h peak 50.43% @08-25 21:02Z printed six minutes before the $77,808.10 low — retail bought the low, it did not sell it</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+35,156 (net LONG)</span>
              <span className="dn-src">live · long 40,362.0 − short 5,206.3 · short_btc is the smallest of the lineage window (24h trough 5,049.0 @08-25 21:41Z) · long_traders 4,738 / short_traders 1,169</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 08-25 note</span>
              <span className="dn-v">+32,364.7 → +35,155.7 (+2,791.0)</span>
              <span className="dn-src">|Δ| / prior_net = 2,791.0 / 32,364.7 = 8.62% · <b>NOT CERTIFIABLE</b> — 72.50% of it is the single 08-25 02:26Z minute (short_btc 8,388.6 → 6,025.3 with short_traders 1,285 → 1,260) · fifth consecutive session · cause NOT LOADED, no mechanism named</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">47.6% / 41.89%</span>
              <span className="dn-src">GEX chain-median across 966 instruments (not a tradable spread) · RV = 30 close-to-close log returns / 31 daily closes anchored to parquet last bar 00:05Z · richness +5.71pt, wider than 08-25&rsquo;s printed +3.40pt</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+22.40% above (spot ref)</span>
              <span className="dn-src">flip $64,225.19 (was $64,001, +$224) · vs live spot $78,612.26 = +22.4013% · vs the file&rsquo;s own Deribit index $78,713 = +22.5590% (the card prints +22.6%) — both references positive, same sign, neither blended · an 18.30% decline is what actually reaches it</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The framework armed. The fill never came, by $151.00
              </span>. The 08-25 note wrote a retest-hold long with its basis and its
              duration named in advance — two consecutive exchange 1h closes at or
              above <span className="dn-tag">$78,000</span> after a print at or below{' '}
              <span className="dn-tag">$78,000</span> inside 12h — and the tape
              delivered exactly that inside 24 hours. Four one-minute bars printed
              under the line between{' '}
              <span className="dn-tag">08-25 21:07Z and 21:10Z</span>, low{' '}
              <span className="dn-tag bear">$77,808.10</span>; the{' '}
              <span className="dn-tag">21:00-labelled</span> exchange bar closed{' '}
              <span className="dn-tag bull">$78,535.80</span> and the{' '}
              <span className="dn-tag">22:00-labelled</span> bar closed{' '}
              <span className="dn-tag bull">$78,850.10</span>.{' '}
              <span className="dn-em">The arming condition FIRED on the 08-25
              22:00-labelled 1h close — and because exchange hourly bars are
              left-labelled, that close is struck at 23:00Z, which is the actual
              decision time.</span> The entry did not. The framework specified{' '}
              <span className="dn-tag">≈$78,200, 0.2R, no chase</span>, and the lowest
              print after arming was{' '}
              <span className="dn-tag bear">$78,351.00 @ 08-25 23:52Z</span> —{' '}
              <span className="dn-signal">$151.00 above the limit</span>. On the
              stricter reading, where the confirming closes must both follow the bar
              that contained the trigger print, arming completes one bar later on the
              23:00-labelled close $78,505.40 (struck 08-26 00:00Z) and the miss is
              $210.30. Both readings arm. Both miss. The book stays{' '}
              <span className="dn-tag bear">FLAT</span> for a fifth consecutive
              session — a desk assertion, since no order-state or position feed is
              loaded in this cut — and the ledger takes its{' '}
              <span className="dn-tag">fourth event, which is its third near-miss</span>{' '}
              (row 3 was a disposal, not a miss). The
              day also killed a claim the desk was leaning on: funding&rsquo;s
              release from the cap, one of the three &ldquo;wanted conditions&rdquo;
              the 08-25 note counted as arrived, lasted{' '}
              <span className="dn-tag">435 rows / 434 minutes (7h14m)</span> before
              re-pinning for{' '}
              <span className="dn-tag bear">1,025 of the next 1,441 rows</span>; it is
              off the cap again tonight, 246 rows / 245 minutes in, and that is not
              evidence. Under the hood the tape traded{' '}
              <span className="dn-tag bull">$81,270.50</span> at{' '}
              <span className="dn-tag">08-25 02:17Z</span> — through the
              framework&rsquo;s own first target and{' '}
              <span className="dn-tag">$221.34 above today&rsquo;s recomputed W-SMA50
              $81,049.16</span> — then gave back $3,462.40 into the low. That
              excursion happened <span className="dn-em">20h43m before</span> the
              arming close was struck at 23:00Z, so it is not a target tag; it is the
              reason the retest existed at all.
            </p>

            <p>
              BTC prints <span className="dn-tag">$78,612.26</span> live,{' '}
              <span className="dn-tag bear">−0.42%</span> on the exact 1,441-row
              window ($78,945.07 → $78,612.26 = −$332.81) — a dated fact, not a
              first: 08-23 already printed a negative 24h move at −0.89%, and no
              &ldquo;run&rdquo; boundary is asserted here — inside a{' '}
              <span className="dn-tag">$81,181.70 / $77,962.61</span> spot range
              (bar basis <span className="dn-tag">$81,270.50 / $77,808.10</span>),
              which puts spot at{' '}
              <span className="dn-tag">20.18% of the spot range</span> and 23.23% of
              the bar range. The exchange daily closes read{' '}
              <span className="dn-tag">08-23 $77,719.10 · 08-24 $78,953.00 · 08-25
              $78,505.40</span> with 08-26 in progress at $78,432.40 — so 08-25 was a{' '}
              <span className="dn-tag bear">−$447.60 (−0.57%) down-day</span> that
              nonetheless spent part of its session $2,765.10 above its own close.
              Spot still sits above the whole three-line shelf the retest framework
              was anchored to —{' '}
              <span className="dn-tag bull">$78,000 wall (+0.79%)</span>,{' '}
              <span className="dn-tag bull">D-EMA400 $78,234.37 (+0.48%)</span>,{' '}
              <span className="dn-tag bull">W-EMA100 $78,446.65 (+0.21%)</span> — but
              by 21 basis points at the top edge, which is inside a single hour&rsquo;s
              noise. <span className="dn-em">
                The structural picture is unchanged and strong: 18 of 20 matrix cells
                positive, 10-of-10 on the daily ladder, MTF 7 long / 0 short / 3
                neutral with zero shorts on either counting convention, a +252.35M
                footed dealer clamp, a settled weekly close 20.39% above the cycle
                floor. What changed is the price the desk has to pay for it, and the
                one thing that actually deteriorated this session sits directly
                underneath the entry: on the 47 strikes common to both panels the
                gamma shelf below spot thinned by $13.99M, while the 22 common
                strikes above spot added $9.48M in aggregate — 16 of those 22 rose
                and 6 fell ($79,500, $80,000, $80,500, $81,000, $88,000, $92,000),
                so the up-move is an aggregate, not a universal.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning{' '}
              <span className="dn-roman">I · funding&rsquo;s release revoked and re-granted inside one session · retail bought the low · SM NOT CERTIFIABLE a fifth time and the 06:21Z–07:06Z step band BROKE</span>
            </h2>

            <p>
              <span className="dn-signal">
                Start with the claim this session falsified, because the 08-25 note
                leaned on it
              </span>. That note counted funding coming off the +10.95% cap as one of
              three wanted conditions that had arrived, measured mid-flight at 287
              rows. The run finished at{' '}
              <span className="dn-tag">435 rows / 434 elapsed minutes = 7h14m (08-24
              19:21Z → 08-25 02:35Z)</span>{' '}
              and the cap came straight back: pinned{' '}
              <span className="dn-tag bear">08-25 02:36Z → 16:54Z (859 rows / 858 min)</span>,
              nineteen rows below, pinned again{' '}
              <span className="dn-tag bear">17:14Z → 19:59Z (166 rows / 165 min)</span>. Cap
              occupancy across the 24h window is{' '}
              <span className="dn-tag bear">1,025 / 1,441 rows = 71.13%</span>, with a 24h
              mean of <span className="dn-tag">+10.3746% ann</span> — higher than
              the +10.3032% the prior note printed on its window. Funding is off the
              cap again at the anchor, <span className="dn-tag">+8.3078% ann</span>{' '}
              (raw 0.007587 × 1095), 246 rows / 245 elapsed minutes into the release,
              run mean +9.7291%.{' '}
              <span className="dn-em">
                Counting convention, stated once and applied throughout this note: a
                segment of N sampled rows spans N−1 one-minute intervals, so rows and
                minutes are never used interchangeably below. A 245-minute release is
                not evidence when the 434-minute release that
                preceded it reverted. The honest statement is that the leverage gate
                oscillated at the ceiling for a day and is currently open; a
                de-crowding read requires a run that outlives the one that already
                failed, and nothing in this feed has produced one. Across 7d the
                floor is unmoved: 0 of 10,081 rows negative, 7,207 of 10,081 (71.5%)
                capped.
              </span>
            </p>

            <p>
              <span className="dn-signal">The SM tape is NOT CERTIFIABLE for a fifth
              consecutive session, and this time the time-pin broke too</span>. SM net
              moved <span className="dn-tag">+32,364.7 → +35,155.7 (+2,791.0)</span>,
              a cut fraction of{' '}
              <span className="dn-tag">2,791.0 / 32,364.7 = 8.62%</span> — but{' '}
              <span className="dn-tag bear">72.50% of that Δ is one minute</span>. At{' '}
              <span className="dn-tag">08-25 02:26Z</span> short_btc fell{' '}
              <span className="dn-tag">8,388.6 → 6,025.3 (−2,363.3 BTC)</span> and
              long_btc fell 40,934.8 → 40,595.0 (−339.8) for Δnet +2,023.5, while
              short_traders moved 1,285 → 1,260 (−25) and long_traders 4,875 → 4,834
              (−41). A −2,363.3 BTC one-minute change in the short book against a −25
              account change is the same roster-discontinuity signature the desk has
              now logged five sessions running; the upstream cause is{' '}
              <b>NOT LOADED</b> and no mechanism is named here.{' '}
              <span className="dn-em">
                What is new is that the 08-25 note&rsquo;s time-band claim no longer
                holds. Eight consecutive daily steps printed inside 06:21Z–07:06Z
                (08-17 06:46Z −6,170.6 · 08-18 06:21Z +16,380.9 · 08-19 06:46Z −5,610.0
                · 08-20 07:06Z +39,352.8 · 08-21 06:21Z +10,671.2 · 08-22 06:41Z
                +16,071.5 · 08-23 07:06Z −10,279.5 · 08-24 06:26Z +11,639.9). Today&rsquo;s
                step printed at 02:26Z — 3h55m outside the earliest edge — and its
                magnitude collapsed 82.6% versus the 08-24 step. The recurrence claim
                survives; the calendar claim does not. Either way the conclusion for
                the book is unchanged: any gate that reads net_btc directly is
                unsound, and none of this desk&rsquo;s live conditions do.
              </span>
            </p>

            <p>
              On the only step-free window — the{' '}
              <span className="dn-tag">1,299 minutes (21h39m)</span> from the 02:26Z
              step to the anchor — SM added net{' '}
              <span className="dn-tag bull">+586.0 BTC / +1.69%</span> while spot fell{' '}
              <span className="dn-tag bear">$80,875.81 → $78,612.26 (−2.80%)</span>.
              The composition matters more than the sign: long_btc{' '}
              <span className="dn-tag">−233.0</span> and short_btc{' '}
              <span className="dn-tag bull">−819.0</span>, so the net-long drift is{' '}
              <em>short covering into weakness</em>, not long accumulation. Retail
              did the opposite and did it louder: <span className="dn-tag">
              mkt_long_pct 48.58% → 50.02% (+1.44pt)</span>, the third re-crowding
              endpoint in five sessions on the exact 00:05Z daily anchors (48.86 →
              50.95 → 50.18 → 51.69 → 48.58 → 50.02), with the 24h trough{' '}
              <span className="dn-tag bull">45.96% @08-25 04:11Z</span> setting a new
              7d minimum below the 08-25 note&rsquo;s 48.12% — and the 24h{' '}
              <em>peak</em> <span className="dn-tag bear">50.43% @08-25 21:02Z</span>{' '}
              printing six minutes before the $77,808.10 low.{' '}
              <span className="dn-em">
                Retail bought the arming print. That is the crowd the desk was waiting
                to see leave, arriving at the exact level the desk wanted to buy — an
                uncomfortable fact for the framework and one that is recorded rather
                than explained away.
              </span>
            </p>

            <p>
              Open interest tells the failure of the rally cleanly. Matched 00:05Z
              endpoints give <span className="dn-tag bear">−495.4 BTC / −0.46%</span>{' '}
              (107,219.3 → 106,723.9) — a modest contraction, and the first since the
              08-25 note recorded a +1.58% expansion against its own un-pin condition.
              Stated separately because its baseline is not the window open: OI peaked{' '}
              <span className="dn-tag">109,073.1 @08-25 07:48Z</span> and troughed{' '}
              <span className="dn-tag">106,422.8 @08-25 23:38Z</span>, a{' '}
              <span className="dn-tag bear">−2,650.3 BTC / −2.43%</span> unwind whose
              peak sits 7h43m after the window open.{' '}
              <span className="dn-em">
                Gross opens, closes and account-level turnover are not observable in
                this feed, so a build-and-flush and a rotation of the same size print
                identically on net.
              </span>{' '}
              Windowed flow, with the manifest&rsquo;s caveat that Δ<code>fut_cvd</code>{' '}
              and summed <code>taker_net</code> are one series and not two: <b>24h</b>{' '}
              price <span className="dn-tag bear">−0.42%</span>, OI{' '}
              <span className="dn-tag bear">−495.4</span>, spot CVD{' '}
              <span className="dn-tag">−31.3</span> (essentially flat, no reset in the
              window), futures CVD{' '}
              <span className="dn-tag bull">+809.7</span>, big-print{' '}
              <span className="dn-tag bear">−315.3 BTC / 785 prints</span>, taker-net{' '}
              <span className="dn-tag bull">+809.7</span>. <b>4h</b>: price{' '}
              <span className="dn-tag bear">−0.22%</span>, OI{' '}
              <span className="dn-tag bear">−450.8</span>, spot CVD{' '}
              <span className="dn-tag bear">−552.7</span>, futures CVD{' '}
              <span className="dn-tag bull">+688.8</span>, big-print{' '}
              <span className="dn-tag bull">+335.1 / 134</span>, taker-net{' '}
              <span className="dn-tag bull">+688.9</span>. <b>1h</b>: price{' '}
              <span className="dn-tag bear">−0.44%</span>, OI{' '}
              <span className="dn-tag bull">+237.4</span>, spot CVD{' '}
              <span className="dn-tag bear">−357.9</span>, futures CVD{' '}
              <span className="dn-tag bull">+435.9</span>, big-print{' '}
              <span className="dn-tag bull">+431.0 / 40</span>, taker-net{' '}
              <span className="dn-tag bull">+435.9</span>.{' '}
              <span className="dn-em">
                Read straight: spot sellers, futures buyers, on shrinking OI over the
                day and re-expanding OI in the last hour. Big prints were net sellers
                across 24h and net buyers across the last four. That pattern is{' '}
                <b>consistent with rotation, and this feed cannot exclude
                liquidation</b>: separating the two requires gross opens and closes,
                account-level lifecycle data, or a forced-liquidation print stream,
                and none of the three is loaded in this cut. The aggregate series
                available here — net OI, CVD, taker-net, funding, premium, long/short
                exposure — return the same values under either mechanism, so the
                classification is withheld rather than asserted.
              </span>{' '}
              Perp basis: snap <span className="dn-tag bear">−$50.86</span>, 24h mean{' '}
              −$13.27, and 1,024 of 1,441 rows (71.1%) at a discount. The 24h
              minimum <span className="dn-tag">−$759.07 @08-25 02:18Z</span> is a{' '}
              <b>single-minute artifact</b> — spot jumped $79,868.01 → $80,712.79 in
              that minute while the perp lagged, and the next row reads −$6.96 — so
              the ex-outlier mean over the remaining 1,440 rows is −$12.75, range
              −$175.71 / +$129.52. Aggressor skew snap +4.7, 24h mean +0.28 (range
              −47.9 / +70.7), 4h mean +1.94: balanced, no reflex.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · W-SMA50 lid poked and rejected · 18-of-20 matrix intact · fast frames rolled to the 40s while 12h/1d RSI stays in the 80s · fresh 8h water-up death cross</span>
            </h2>

            <p>
              <span className="dn-signal">
                The tape ran into the first weekly moving average above it and
                bounced off the wrong side
              </span>. The only near lid on the entire 20-cell matrix is{' '}
              <span className="dn-tag bear">W-SMA50 $81,049.16 (−3.01%)</span>; the
              08-25 high <span className="dn-tag">$81,270.50</span> printed{' '}
              <span className="dn-tag">$221.34 above it</span> and the day closed
              $2,543.76 below it.{' '}
              <span className="dn-em">
                That statement carries a basis caveat the desk has learned to write
                first: W-SMA50 is a moving level computed on a weekly series whose
                newest bar is in progress. The 08-25 note quoted it at $81,784.71; on
                today&rsquo;s recomputation it reads $81,049.16, $735.55 lower, because
                the in-progress weekly close changed underneath it. The 08-25 high
                sits BETWEEN the two vintages, so whether the lid was &ldquo;tagged&rdquo;
                depends entirely on which vintage you use — which is a fourth
                instance of the same design defect family (a level that moves after
                you write it down), and it is why the framework&rsquo;s stop is a fixed
                number and not an MA.
              </span>{' '}
              Everything else on the matrix is support. Daily ladder, 10-of-10
              positive: D-SMA20 $68,927.98 (+14.05%), D-SMA50 $66,074.01 (+18.98%),
              D-SMA100 $66,163.11 (+18.82%), D-SMA150 $69,310.65 (+13.42%), D-SMA200
              $69,175.60 (+13.64%), D-EMA20 $71,103.41 (+10.56%), D-EMA50 $67,714.08
              (+16.09%), D-EMA100 $67,849.25 (+15.86%), D-EMA150 $69,660.10 (+12.85%),
              D-EMA200 $71,909.07 (+9.32%). Weekly, 8 of 10 positive:{' '}
              <span className="dn-tag bull">W-EMA100 $78,446.65 (+0.21%)</span>,{' '}
              <span className="dn-tag bull">W-SMA150 $77,788.18 (+1.06%)</span>,{' '}
              <span className="dn-tag bull">W-EMA50 $77,294.85 (+1.70%)</span>,{' '}
              <span className="dn-tag bull">W-EMA150 $73,944.75 (+6.31%)</span>,{' '}
              <span className="dn-tag bull">W-SMA20 $69,895.63 (+12.47%)</span>,{' '}
              <span className="dn-tag bull">W-EMA20 $70,160.84 (+12.05%)</span>,{' '}
              <span className="dn-tag bull">W-EMA200 $68,707.37 (+14.42%)</span>,{' '}
              <span className="dn-tag bull">W-SMA200 $64,558.71 (+21.77%)</span>;
              negative:{' '}
              <span className="dn-tag bear">W-SMA50 $81,049.16 (−3.01%)</span> and{' '}
              <span className="dn-tag bear">W-SMA100 $88,969.86 (−11.64%)</span>.{' '}
              <b>18 positive / 2 negative of 20 computable</b> — the same count the
              08-25 note reported, held through a −0.42% day. D-EMA400, the MTF
              file&rsquo;s own reference, reads $78,234.37 (+0.48%), and the MTF panel
              independently prints the 1d frame at +0.31% over its EMA400 off close
              $78,470 — the two agree to two basis points.
            </p>

            <p>
              <span className="dn-em">
                MA anchor and disclosure: all values computed from the full parquet set
                (2019-09-08 17:57Z → 2026-08-26 00:05Z, 2,545 daily / 365 weekly bars,
                last bar close $78,432.40); offsets recomputed against live spot
                $78,612.26; displayed levels are rounded to the cent, offsets computed
                from exact series values. The newest daily bar and the newest weekly
                bar (week ending 08-30) are both IN PROGRESS and will move. All 20
                cells are computable on this history — nothing is seeded and nothing is
                omitted. Exchange daily closes for context: 08-20 $72,998.70, 08-21
                $78,309.10, 08-22 $77,084.50, 08-23 $77,719.10, 08-24 $78,953.00,
                08-25 $78,505.40, 08-26 in-progress $78,432.40.
              </span>
            </p>

            <p>
              <span className="dn-signal">
                The MTF map cooled hard on the fast frames without giving up a single
                short
              </span>. The 00:01Z scan reads{' '}
              <span className="dn-tag bull">7 long / 0 short / 3 neutral</span> on the
              file&rsquo;s aggregate line; summing the per-TF{' '}
              <em>偏向</em> column gives <span className="dn-tag">5 long / 3 warn / 2
              ranging</span> — <b>zero shorts on either convention</b>, the fifth
              session running that both counts agree on the absence. Momentum regime{' '}
              <span className="dn-tag">7 of 9 frames JT ≥ 0</span>. The cooling is
              real and it is concentrated below 4h: 15m RSI{' '}
              <span className="dn-tag bear">42.2</span>, 30m{' '}
              <span className="dn-tag bear">41.5</span>, 1h{' '}
              <span className="dn-tag bear">44.1</span>, 4h 58.8 — against the 08-25
              note&rsquo;s 4h reading of 72.2 — while the slow frames stay hot: 8h{' '}
              <span className="dn-tag">71.3</span>, 12h{' '}
              <span className="dn-tag bear">80.6</span>, 1d{' '}
              <span className="dn-tag bear">80.0</span>, 3d 70.2, 1w 57.3, 1M 51.0. A{' '}
              <span className="dn-tag bear">fresh 8h water-up death cross printed 1
              bar ago (08-25 16:00Z)</span>, joining the 1h (16b) and 4h (20b)
              water-up death crosses, and the{' '}
              <span className="dn-tag bear">1d ⚡ TD9 SELL</span> that fired on 08-24
              is still the active 1d signal. Divergences: three top divergences on
              30m / 1h / 4h against two bottom divergences on 15m / 30m. Cloud
              positions split the map — 15m and 30m below (↑79.0k / ↑79.3k), 1h{' '}
              <em>inside</em> a 1-bar-old $77.8k–$78.8k cloud that straddles spot, 4h
              / 8h / 12h / 1d / 1M above, 3d inside $70.7k–$78.5k, 1w below (↑85.9k).{' '}
              <span className="dn-em">
                This is what a healthy pullback looks like from the inside: the fast
                frames have done their unwinding, the slow frames have not started.
                It is also exactly what the top of a move looks like one scan before
                the slow frames roll. The map does not distinguish between them, and
                this note does not pretend it does.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">78,476</td><td className="num bear">42.2</td><td className="neut">golden (water-dn) 8b</td><td className="bear">below ↑79.0k 59b</td><td>Buy 3</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">78,476</td><td className="num bear">41.5</td><td className="bear">death (water-dn) 9b</td><td className="bear">below ↑79.3k 10b</td><td>Buy 2</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">78,470</td><td className="num bear">44.1</td><td className="bear">death (water-up) 16b</td><td className="neut">in cloud 77.8k–78.8k 1b</td><td>Sell 1</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">78,476</td><td className="num">58.8</td><td className="bear">death (water-up) 20b</td><td className="bull">above ↓73.1k 49b</td><td>Buy 3</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>8h</td><td className="num">78,470</td><td className="num">71.3</td><td className="bear">death (water-up) 1b — fresh</td><td className="bull">above ↓63.9k 20b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">78,465</td><td className="num bear">80.6</td><td className="bull">golden (water-dn) 17b</td><td className="bull">above ↓64.6k 15b</td><td>Sell 5</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">78,470</td><td className="num bear">80.0</td><td className="bull">golden (water-dn) 8b</td><td className="bull">above ↓64.2k 8b</td><td className="bear">⚡ TD9 SELL</td><td>BULL hid</td></tr>
                <tr><td>3d</td><td className="num">78,470</td><td className="num">70.2</td><td className="neut">—</td><td className="neut">in cloud 70.7k–78.5k 1b</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">78,476</td><td className="num">57.3</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑85.9k 30b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">78,475</td><td className="num">51.0</td><td className="neut">—</td><td className="bull">above ↓47.4k 30b</td><td>Sell 1</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html, scan header <em>2026-08-26 08:01
                    Beijing = 00:01Z</em>, read from
                    /opt/desk-note/snapshots/2026-08-26-0007/. Header line:{' '}
                    <em>7 多 / 0 空 / 3 中 · 共 10 周期</em>; per-TF 偏向 column sums to
                    5 长 / 3 警示 / 2 震荡. Header alerts: <em>8h water-up death cross
                    (1 bar ago)</em> and <em>1d ⚡ TD9 SELL printed at $78,470</em>.
                    Scan spot $78,455, 24h −0.60%, 24h H/L $81,270 / $77,808, qVol
                    $19.05B — the scan&rsquo;s −0.60% and the live tape&rsquo;s −0.42%
                    differ because the scan endpoints 4 minutes earlier on a
                    perp-close basis, not because either is wrong. Every close is an
                    in-progress bar.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              <span className="dn-signal">
                The cycle floor read is a disclosed parquet fallback for the second
                straight session
              </span>. <code>weekly_200sma.json</code> is not on disk, so no{' '}
              <code>state</code>, <code>last_event</code> or file{' '}
              <code>ratio_pctile</code> is quoted. Recomputed from the same parquet
              set: W-SMA200 = <span className="dn-tag">$64,558.71</span>, spot{' '}
              <span className="dn-tag bull">+21.77%</span> above it, and the last{' '}
              <em>settled</em> weekly close (08-23 W-SUN $77,719.10) sits{' '}
              <span className="dn-tag bull">+20.39%</span> above it.{' '}
              <span className="dn-em">
                The rank below names its numerator explicitly, because the two
                candidates disagree.
              </span>{' '}
              On the <b>in-progress parquet weekly close $78,432.40</b> over the
              settled W-SMA200 $64,558.707 the ratio is{' '}
              <span className="dn-tag">1.214900</span> and{' '}
              <span className="dn-tag">39 of 166</span> weekly observations with a
              computable 200W are strictly lower (23.5%), inclusive rank 40 / 166 =
              24.1st percentile. On <b>live anchor spot $78,612.26</b> — the number
              used everywhere else in this paragraph — the ratio is{' '}
              <span className="dn-tag">1.217686</span>, 41 of 166 are strictly lower
              (24.7%) and the inclusive rank is 42 / 166 = 25.3rd percentile. Both are
              printed; neither is blended. Independent of numerator,{' '}
              <span className="dn-tag">10 of 166 (6.0%)</span> weekly closes sit below
              the floor.{' '}
              <span className="dn-em">
                That 6.0% is scoped to 166 weekly observations from a Binance-perp
                parquet that begins 2019-09-08 — it is NOT BTC&rsquo;s full history and
                should not be compared to the ~9% long-run figure the framework cites.
                The level is slow (~$250/wk) and nothing about it changed this
                session; it is carried because it is the one line that would reframe
                everything else, not because it is close.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map{' '}
              <span className="dn-roman">III · clamp EASED −4.49M to +252.35M footed (third-deepest of the CHECKED post-08-16 lineage, not a maximum) · the shelf under spot THINNED while the above-spot common strikes added $9.48M on a 16-up / 6-down split · front expiry negative and settles today</span>
            </h2>

            <p>
              <span className="dn-signal">
                The clamp eased, and this time the easing sat underneath the trade
                rather than above it
              </span> — a description of where the change landed, not a first: the
              clamp also eased on 08-23 (−7.54M to +242.37M), and on that session the
              strikes that lightened were the $70k–$76k band the then-live pullback
              long was anchored to, which is the same geometry. Footed across the
              11-line expiry strip the aggregate is{' '}
              <span className="dn-tag bull">+252.35M</span> (which reconciles exactly
              to <code>gex_summary.json</code> <code>net_gex</code> $252,345,490.64),
              against a headline card of <span className="dn-tag">+245.9M</span> that
              reconciles exactly to the 49-point strike-profile sum +245.8805M — two
              bases, a $6.46M gap, neither blended anywhere in this note. On the
              footed basis the clamp is{' '}
              <span className="dn-tag bear">−4.49M vs 08-25&rsquo;s +256.84M</span>.
              Ordinally it is the <b>third-deepest of the CHECKED post-08-16
              lineage</b> — 08-25 +256.84M and 08-20 +254.15M sit above it; 08-22
              +249.91M, 08-24 +247.69M and 08-23 +242.37M sit below — and it is{' '}
              <b>not a lineage maximum</b>, with 07-22 +313.63M and 07-23 +283.46M
              deeper on the same footed basis. The{' '}
              <span className="dn-tag bear">2026-08-21 archive remains absent</span>,
              so the ordinal is over available panels, not over every day. The 0-γ
              flip rose $224 to <span className="dn-tag">$64,225.19</span>; spot is{' '}
              <span className="dn-tag bull">+22.4013%</span> above it and the file&rsquo;s
              own Deribit index $78,713 is <span className="dn-tag bull">+22.5590%</span>{' '}
              above it (the card prints +22.6%) — both references positive, same
              sign as the tile. The decline that actually reaches the flip is{' '}
              <span className="dn-tag">18.30%</span>, not 22%.
            </p>

            <p>
              <span className="dn-signal">
                The strike migration is the finding of this section and it cuts
                against the long
              </span>. Across the <b>47 strikes common to both panels</b>, 21 got
              heavier and 26 lighter — but the split is not random in price. Summed
              over the common strikes, the profile <em>above</em> spot went{' '}
              <span className="dn-tag bull">+180.579M → +190.055M (+9.476M)</span>{' '}
              while the profile <em>below</em> spot went{' '}
              <span className="dn-tag bear">+69.295M → +55.308M (−13.987M)</span>. The
              damage is concentrated exactly where the retest framework lives:{' '}
              <span className="dn-tag bear">$77,000 flipped +0.800 → −0.967</span>,{' '}
              <span className="dn-tag bear">$77,500 deepened −0.246 → −2.790</span>,{' '}
              <span className="dn-tag bear">$78,500 flipped +2.241 → −0.969</span>,
              and the anchor strike itself eased{' '}
              <span className="dn-tag">$78,000 +27.162 → +24.742 (−2.421)</span>.
              Above spot the aggregate ran the other way, and the aggregate is all it
              is: of the <b>22 common strikes above spot, 16 rose and 6 fell</b>,
              netting <span className="dn-tag bull">+$9.476M</span>. The risers carry
              it — $82,000 +33.637 → +35.755, $85,000 +12.717 → +15.842, $90,000
              +13.732 → +16.727, $95,000 +5.050 → +7.251, $100,000 +8.965 → +11.606 —
              with two new strikes appearing ($82,500 +0.503, $91,000 +0.015) and none
              dropping out. The <b>six that fell are named rather than buried</b>:{' '}
              <span className="dn-tag bear">$79,500 +2.133 → +0.868</span>,{' '}
              <span className="dn-tag bear">$80,000 +44.280 → +40.789 (−3.491)</span>,{' '}
              <span className="dn-tag bear">$80,500 +1.721 → +0.334</span>,{' '}
              <span className="dn-tag bear">$81,000 +11.951 → +11.507</span>,{' '}
              <span className="dn-tag bear">$88,000 +7.079 → +6.941</span>,{' '}
              <span className="dn-tag bear">$92,000 +2.059 → +1.975</span> — and{' '}
              $80,000, still the heaviest wall on the board, is the largest single
              decliner anywhere on the common set.{' '}
              <span className="dn-em">
                Read plainly and no further: below spot the shelf thinned $13.99M with
                the damage concentrated in $77,000–$78,500; above spot the common
                strikes added $9.48M in aggregate on a 16-up / 6-down split, so{' '}
                <b>&ldquo;everything above spot got heavier&rdquo; would be false</b>{' '}
                and is not claimed. What survives is the directional statement about
                the shelf under the entry: the retest-hold long is anchored to a zone
                that is structurally weaker today than when it was written — which is
                not a reason to move the levels, and IS a reason to say so out loud
                before the trade fills rather than after.
              </span>{' '}
              The top ten walls are all positive and sum{' '}
              <span className="dn-tag bull">+193.13M = 78.55%</span> of the +245.88M
              profile: $80,000 +40.79, $82,000 +35.76, $78,000 +24.74, $90,000 +16.73,
              $85,000 +15.84, $84,000 +13.68, $100,000 +11.61, $81,000 +11.51, $79,000
              +11.39, $70,000 +11.09. The deepest negative on the whole profile is{' '}
              <span className="dn-tag bear">$60,000 −5.84M</span>, 23.7% below spot.
            </p>

            <p>
              By expiry: the front line{' '}
              <span className="dn-tag bear">26AUG26 at 0.3 DTE is NEGATIVE −2.04M</span>{' '}
              and settles today at 08:00Z — the second negative front of this window
              (the 08-23 note recorded 24AUG26 at −1.21M), so a recurrence rather than
              a first. <span className="dn-tag">28AUG26 +74.12M</span> at 2.3 DTE is{' '}
              <span className="dn-tag">29.37%</span> of the footed strip and settles
              2026-08-28 08:00Z; its share has now fallen four sessions running
              (36.17% → 33.71% → 31.28% → 29.37%){' '}
              <em>while the strip itself moved +14.47M then −4.49M</em>, so the
              declining share is a compositional fact, not a decay.{' '}
              <span className="dn-tag">25SEP26 +84.53M (33.50%)</span> is now the
              single largest line, and the two together carry{' '}
              <span className="dn-tag">62.87%</span> of the clamp. Remainder: 27AUG26
              +3.03M, 29AUG26 +1.08M, 4SEP26 +25.42M, 11SEP26 +7.33M, 30OCT26 +13.93M,
              25DEC26 +35.99M, 26MAR27 +6.90M, 25JUN27 +2.06M.{' '}
              <span className="dn-em">
                The 28AUG26 roll-off remains a watch, not a forecast: the +74.12M is a
                snapshot at current IV and current spot, and it comes off only absent
                offsetting book, spot or IV changes.
              </span>
            </p>

            <p>
              IV median across <span className="dn-tag">966 instruments</span> is{' '}
              <span className="dn-tag">47.6%</span>, up 1.00pt from 08-25&rsquo;s 46.6%,
              against 30D close-to-close RV of{' '}
              <span className="dn-tag">41.89%</span> — chain-level richness{' '}
              <span className="dn-tag">+5.71pt</span>, versus the +3.40pt the 08-25
              note printed, so <b>+2.31pt wider</b>.{' '}
              <span className="dn-em">
                Decomposition on <b>aligned as-of times, with no lookahead</b>: each
                session&rsquo;s RV is measured at that session&rsquo;s own IV snapshot,
                so no future daily bar is allowed into the prior number. As of the
                08-25 anchor (2026-08-25 00:04Z) the like-for-like 30D RV was{' '}
                <span className="dn-tag">43.1981%</span>, which reproduces the 08-25
                note&rsquo;s printed +3.40pt to a rounding tick (46.6 − 43.1981 =
                3.4019pt) — there is no window-construction discrepancy once the
                lookahead is removed. Today at 00:05Z RV is{' '}
                <span className="dn-tag">41.8922%</span> and the spread is 47.6 −
                41.8922 = 5.7078pt, so the widening is{' '}
                <span className="dn-tag">+2.3059pt</span>, of which the RV decline
                (−1.3059pt) supplies <b>56.6%</b> and the IV rise (+1.0000pt) supplies{' '}
                <b>43.4%</b>. For the record, letting the prior RV window run to
                2026-08-25 23:59Z gives 43.3362% and a 59.2 / 40.8 split — that is the
                lookahead convention and it is <b>not</b> the number this note
                publishes. The driver is majority realized vol falling, not implied vol
                bidding — the reverse of the 08-25 session, where 98.4% of the move
                came from IV.
              </span>{' '}
              This is a chain median across{' '}
              <span className="dn-tag">966 instruments</span>, <em>not</em> a tradable
              spread, and <em>not</em> strike-level IV; expiry-level and strike-level
              vega, skew and term structure are{' '}
              <b>NOT LOADED</b> and the vol read stays framework-only. RV method: 30
              close-to-close log returns (= 31 consecutive daily closes) × √365 × 100,
              anchored to parquet last bar 2026-08-26 00:05Z; the 31-close range is
              $62,792.30 – $78,953.00. For reference the 29-return variant reads
              42.61%.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · 10Y EXITED episodic (+1.52 → +0.72) and gave back 80% of the prior +5bp · TIPS real was NEVER episodic (+0.10 → −0.42) and gave back 40% · Fed net liquidity is the only episodic Tier-1 flag left · cross-asset loosened to 0.198 and BTC&rsquo;s top four correlates are three metals and MSFT</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape that turned hostile on 08-25 backed off — partly, and
                the two lines did not back off the same way
              </span>. Dashboard render is 2026-08-25 22:17Z, ~1.8h before the anchor
              — a genuine fresh weekday print, the second consecutive one. The panel
              tags episodic at <b>|z| &gt; 1.5</b>, which is the threshold both
              statements below are measured against. US 10Y
              nominal <span className="dn-tag bull">4.70% (−4.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.98</span> (was +2.19), episodic z{' '}
              <span className="dn-tag">+0.72</span> (was +1.52) — still tagged
              RISK-OFF, and it <b>did exit episodic</b>, having been tagged episodic on
              the prior panel. 10Y TIPS real{' '}
              <span className="dn-tag bull">2.38% (−2.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.92</span> (was +2.03), episodic z{' '}
              <span className="dn-tag bull">−0.42</span> — but its prior episodic z was{' '}
              <span className="dn-tag">+0.10</span>, so{' '}
              <b>TIPS was never episodic and cannot have come off a flag it never
              carried</b>. <span className="dn-em">
                The two lines are therefore separated rather than combined. 10Y: exited
                episodic, and its −4.0bp retraces <b>80%</b> of the prior +5.0bp rise.
                TIPS real: never episodic, and its −2.0bp retraces <b>40%</b> of the
                prior +5.0bp — a minority give-back, not &ldquo;most of the move&rdquo;.
                Both did drop their EXTREME RISK-OFF tag to RISK-OFF. The 08-25 note
                called the pair &ldquo;EXTREME RISK-OFF&rdquo; and one of them
                &ldquo;newly episodic&rdquo;; one print later the accurate statement is
                a partial, uneven reversal. Two daily prints is not a trend in either
                direction, and this note is as careful with the reversal as it should
                have been with the shock.
              </span>{' '}
              The rest of Tier 1 is quiet: 5Y5Y BE{' '}
              <span className="dn-tag">2.32% (−2.0bp)</span>, HY OAS{' '}
              <span className="dn-tag bull">2.69% (−1.0bp)</span> RISK-ON at regime z
              −1.10, NFCI −0.559 RISK-ON (stale 11d), MOVE{' '}
              <span className="dn-tag">74.0 (+0.58)</span> neutral, DXY{' '}
              <span className="dn-tag">98.90 (−0.10)</span> neutral. The one
              genuinely hostile line is{' '}
              <span className="dn-tag bear">Fed net liquidity $5.792T (−0.004T),
              episodic z −2.45</span> — the <em>only</em> episodic Tier-1 flag on the
              board and the same one that has been draining for four sessions. Tier 2:
              USD/JPY 159.21 (+0.07), US-JP 10Y spread 2.03% (−4.0bp) neutral, USD/CNY
              6.7104 (−0.01) episodic at −2.29, and{' '}
              <span className="dn-tag stale">JGB 10Y 2.67% (+2.0bp monthly), regime z
              +2.42, EXTREME RISK-OFF, stale 85d — do not lean</span>. That last line
              matters for the ordinal claim: the highest <b>fresh daily</b> Tier-1
              regime z on the board is 10Y at +1.98; JGB&rsquo;s +2.42 is a stale
              monthly read and is not the board&rsquo;s live maximum in any sense the
              desk trades on. The file&rsquo;s own &ldquo;what changed today&rdquo;
              filter lists exactly three rows: Fed net liquidity −2.45, USD/CNY −2.29,
              10Y breakeven +1.62.
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>Macro indicator</th><th>level</th><th>Δ</th><th>regime z</th><th>episodic z</th><th>read</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.70%</td><td className="num bull">−4.0bp</td><td className="num bear">+1.98</td><td className="num">+0.72 (was +1.52)</td><td className="bear">RISK-OFF · EXITED episodic · −4bp retraces 80% of the prior +5bp</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.38%</td><td className="num bull">−2.0bp</td><td className="num bear">+1.92</td><td className="num bull">−0.42 (was +0.10)</td><td className="bear">RISK-OFF · NEVER episodic · −2bp retraces only 40% of the prior +5bp</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.32%</td><td className="num bull">−2.0bp</td><td className="num">+1.46</td><td className="num">+1.03</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.69%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.10</td><td className="num bull">−0.91</td><td className="bull">RISK-ON · credit calm</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.559</td><td className="num">−0.00</td><td className="num bull">−1.46</td><td className="num bull">−1.29</td><td className="stale">RISK-ON · stale 11d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">74.0</td><td className="num bear">+0.58</td><td className="num">+0.09</td><td className="num">−0.17</td><td className="neut">neutral</td></tr>
                <tr><td>DXY</td><td className="num">98.90</td><td className="num bull">−0.10</td><td className="num">−0.09</td><td className="num bull">−1.46</td><td className="neut">neutral · softening</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.792T</td><td className="num bear">−0.004T</td><td className="num bull">−1.22</td><td className="num bear">−2.45</td><td className="bear">RISK-OFF · episodic · only Tier-1 flag</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.21</td><td className="num bear">+0.07</td><td className="num">+0.61</td><td className="num">−0.51</td><td className="neut">no tag</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.03%</td><td className="num bear">−4.0bp</td><td className="num">−0.12</td><td className="num">+0.72</td><td className="neut">neutral</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7104</td><td className="num bull">−0.01</td><td className="num bull">−1.55</td><td className="num bull">−2.29</td><td className="bull">episodic · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">monthly · stale 85d · do not lean</td></tr>
                <tr><td>10Y breakeven (T3)</td><td className="num">2.32%</td><td className="num bull">−2.0bp</td><td className="num">+0.03</td><td className="num bear">+1.62</td><td className="neut">episodic · driver panel only</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 168 rows, generated 00:01Z —{' '}
              <span className="dn-em">a rolling seven-day read, not today&rsquo;s
              session</span>). Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.198</span>, loosened from 08-25&rsquo;s
              0.205 and comfortably inside the{' '}
              <span className="dn-tag">IDIOSYNCRATIC</span> band (&lt; 0.25).
              BTC&rsquo;s ranking is a metals table with one software name in it: PLAT{' '}
              <span className="dn-tag">+0.326</span>, SILVER{' '}
              <span className="dn-tag">+0.267</span>, GOLD{' '}
              <span className="dn-tag">+0.231</span>, MSFT{' '}
              <span className="dn-tag">+0.228</span>, PALL{' '}
              <span className="dn-tag">+0.219</span>, META +0.201, TSLA +0.162, COPPER
              +0.154, AMZN +0.140, JPY −0.133, URNM +0.119, EUR +0.113, BRENT +0.098,{' '}
              <span className="dn-tag">NQ +0.091 (rank 14)</span>, CL +0.089, SP500
              +0.067, JP225 +0.054, NVDA +0.051, GOOGL +0.041, NGAS +0.034, AAPL
              −0.031. 7d performance:{' '}
              <span className="dn-tag bull">BTC +21.72%</span> against{' '}
              <span className="dn-tag bear">NQ −1.07%</span>, SP500 −0.28%, JP225
              −0.53%, NVDA −2.52%, AAPL −0.45%, GOOGL +0.69%, AMZN +0.16%, MSFT
              +1.63%, META +4.05%, TSLA +4.34%; metals bid — SILVER{' '}
              <span className="dn-tag bull">+9.04%</span>, PLAT +8.18%, GOLD +7.15%,
              PALL +4.36%, COPPER +3.59%; URNM{' '}
              <span className="dn-tag bull">+13.84%</span> is the sample&rsquo;s best
              performer at rank 11 by |r|; energy soft — CL −4.39%, BRENT −4.54%,
              NGAS +1.21%; FX quiet — EUR +0.85%, JPY −0.09%.{' '}
              <span className="dn-em">
                BTC leads NQ by 22.79pt over the window. That is a co-movement
                statistic and nothing more: it identifies neither driver nor hedge
                effectiveness, it does not make BTC &ldquo;equity-last&rdquo; (three
                metals and MSFT all outrank every equity index), and two of the seven
                days carry no equity prints at all. The BTC/NQ ratio series itself is
                NOT LOADED and any claim about it stays framework-only.
              </span>
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · retest-hold long ARMED and the entry never traded — the limit is carried unchanged as a desk instruction and gets the expiry it should have had · from the anchor the fill needs $412.26, not the historical $151.00 · chase-short stood down a fifth session · ledger to four events / three near-misses</span>
            </h2>

            <p>
              <span className="dn-signal">
                A written framework armed exactly as specified, its trigger fired, and
                the entry price it named was never traded
              </span>. That sentence is the whole session — and it is stated as a dated
              fact, not a first. This lineage has recorded armed-and-unpositioned
              states before: <b>2026-07-22</b> upgraded a scout{' '}
              <em>DEFERRED → ARMED</em> and explicitly logged it as &ldquo;ARMED but
              not live&rdquo; with no shorts and no long on the book, and{' '}
              <b>2026-08-06</b> armed a 0.2R starter on two named legs and entered at
              market. What distinguishes 08-26 from both is narrower and is the only
              claim made here: on 07-22 the trigger explicitly did <em>not</em> fire,
              and on 08-06 the arming and the fill happened together at market; today
              is the first dated instance in which a <em>pre-published</em> arming rule
              carrying its own price basis and duration fired as written{' '}
              <em>and</em> the separately-specified limit price was never reached. The
              arming rule was precise, it was published before the event, it named its
              basis (exchange 1h bar) and its duration (two bars) — and it worked: the
              tape printed under $78,000 at 21:07–21:10Z on 08-25 and closed above it
              twice running. What the 08-25 note did <em>not</em> specify is the
              relationship between the arming price and the entry price. Two closes at
              or above $78,000 can complete anywhere above $78,000; the second one
              completed at $78,850.10, which is $650.10 above the stated ≈$78,200
              entry, and the framework&rsquo;s own &ldquo;no chase&rdquo; clause
              forbids paying it. The limit therefore had to wait for a retrace the
              arming rule never required, and that retrace stopped{' '}
              <span className="dn-tag bear">$151.00 short</span> —{' '}
              <b>a historical near-miss, not the distance that matters now</b>: at the
              00:05Z anchor spot is $78,612.26 and the limit sits{' '}
              <span className="dn-tag">$412.26 below it</span>, which is what an actual
              fill would require from here.{' '}
              <span className="dn-em">
                This is design defect number three in the same family as the 08-24
                price-basis defect and the 08-25 duration defect: a rule that is
                internally precise but not jointly satisfiable with its own entry. It
                is closed at the point of writing below, the same way the last one
                was — by naming what was missing, not by moving the price.
              </span>{' '}
              The counterfactual is worth printing because it is the argument for the
              clause that cost the fill: entering at the arming close $78,850.10
              against the unchanged $77,248.42 stop gives $1,601.68 of risk for
              $1,149.90 to the first target — <span className="dn-tag bear">0.72:1</span>,
              versus the 1.89:1 the framework was built on, and it would be{' '}
              <span className="dn-tag bear">−$237.84 (−0.30%)</span> underwater at
              this anchor. <b>The no-chase rule was correct and it cost the trade.
              Both halves of that are true and neither cancels the other.</b>
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · retest-hold framework · <b>ARMED · NOT FILLED</b> · arming condition FIRED on the 08-25 22:00-labelled 1h close (struck 23:00Z) · desk instruction: hold the ≈$78,200 limit unless cancelled · retrace stopped $151.00 short; from the anchor the fill needs $412.26 · no chase, no re-pricing</span>
              <div className="dn-trade-name">
                Retest-hold long at the $78,000 / D-EMA400 / W-EMA100 shelf — the rule
                fired on schedule and the entry price never traded, so the instruction
                is carried unchanged and finally gets an expiry
              </div>
              <div className="dn-thesis">
                The arming condition, quoted from the 08-25 note:{' '}
                <em>
                  &ldquo;two consecutive 1h closes on the exchange bar basis held at or
                  above $78,000 after a print that has traded at or below $78,000
                  within the prior 12h.&rdquo;
                </em>{' '}
                <b>It fired.</b> Four one-minute bars traded at or under $78,000
                between 08-25 21:07Z and 21:10Z (lows $77,844.60 / $77,808.10 /
                $77,932.40 / $77,872.10); the 08-25{' '}
                <b>21:00-labelled</b> exchange bar closed <b>$78,535.80</b> and the{' '}
                <b>22:00-labelled</b> bar closed <b>$78,850.10</b>.{' '}
                <b>Labelling convention, stated because it changes the chronology:</b>{' '}
                exchange hourly bars are left-labelled, so the 22:00-labelled close is
                struck at <b>23:00Z</b> and that is the decision time on the base
                reading. On the stricter reading — both confirming closes must follow
                the bar that contained the trigger print — arming completes one bar
                later on the 23:00-labelled close $78,505.40, struck at{' '}
                <b>08-26 00:00Z</b>, with the 00:00-labelled bar $78,432.40 also above
                the line. <b>The condition is satisfied on either reading and the desk
                does not need to choose.</b> The entry does need a choice, and it
                resolves against the desk: the framework said{' '}
                <em>≈$78,200 · 0.2R · no chase</em>, so the desk holds a limit and does
                not pay the close. Post-arming lows: <b>$78,351.00 @08-25 23:52Z</b> on
                the base reading (<b>$151.00</b> above the limit) and{' '}
                <b>$78,410.30 @08-26 00:05Z</b> on the strict reading (<b>$210.30</b>{' '}
                above). <b>Neither of those is the live distance.</b> Spot at the
                anchor is $78,612.26, so from here a fill requires a further{' '}
                <b>$412.26 (−0.52%)</b> decline to print the limit; the $151.00 and
                $210.30 figures are closed historical near-misses and are not carried
                forward as the condition.{' '}
                <b>Status: ARMED, NOT FILLED, no position — a desk instruction, not a
                verified broker state.</b> No order blotter, submission ID, working /
                cancelled flag or execution feed is loaded in this cut, so
                &ldquo;working order&rdquo; is not asserted; what is asserted is the
                desk&rsquo;s own instruction to hold the ≈$78,200 limit unless
                cancelled. The flat book is likewise a desk statement, not a
                position-feed reconciliation. Two things are recorded
                against the framework rather than for it. First, the 08-25 session
                traded $81,270.50 — through the $80,000 first target and $221.34 above
                today&rsquo;s recomputed W-SMA50 — but that print landed at{' '}
                <b>08-25 02:17Z</b>, <em>20h43m before</em> the 23:00Z arming close was
                struck, so it is not a target tag and is not counted as one. Second,
                the dealer shelf this
                trade is anchored to got structurally worse this session: $77,000
                flipped to −0.967M, $77,500 deepened to −2.790M, $78,500 flipped to
                −0.969M, and $78,000 itself eased −2.421M, with the below-spot common
                strikes shedding $13.99M while the 22 above-spot common strikes added
                $9.48M in aggregate on a 16-up / 6-down split.
                The thesis has weakened. <b>The levels do not move for that either.</b>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status (desk instruction · not broker-verified)</span><span className="dn-lvl-v"><b>ARMED · NOT FILLED</b> · arming leg FIRED on the 08-25 22:00-labelled close struck 23:00Z (or the 23:00-labelled close struck 08-26 00:00Z on the strict reading) · entry leg never traded · no position, no partial · <b>no order-state, blotter or execution feed is loaded</b>, so this line records what the desk instructs, not what a broker confirms</span></div>
                <div><span className="dn-lvl-k">arming evidence</span><span className="dn-lvl-v bull">trigger print 08-25 21:08Z low $77,808.10 (4 one-minute bars ≤ $78,000, 21:07Z–21:10Z) · confirming exchange 1h closes $78,535.80 (21:00-labelled, struck 22:00Z) and $78,850.10 (22:00-labelled, struck 23:00Z) · strict-reading closes $78,850.10 (struck 23:00Z) and $78,505.40 (23:00-labelled, struck 08-26 00:00Z)</span></div>
                <div><span className="dn-lvl-k">entry (unchanged, not re-priced)</span><span className="dn-lvl-v bull">limit ≈$78,200 · 0.2R · <b>no chase</b> — the arming close $78,850.10 is $650.10 above the limit and paying it is exactly what the clause forbids · <b>live distance from the 00:05Z anchor: $412.26 (−0.52%)</b>, not the historical $151.00</span></div>
                <div><span className="dn-lvl-k">NEW — instruction duration (defect closed at the point of writing)</span><span className="dn-lvl-v"><b>the ≈$78,200 limit is held until the 2026-08-27 00:00Z daily close and then lapses if unfilled.</b> The 08-25 framework named a basis and a duration for its <em>arming</em> rule and named neither for its <em>order</em>; an armed limit with no expiry is a standing bid that drifts into a different trade. One daily bar, then it is re-decided in writing or it is dead</span></div>
                <div><span className="dn-lvl-k">stop (unchanged · fixed number, not an MA)</span><span className="dn-lvl-v bear">1d close &lt; <b>$77,248.42</b> · today&rsquo;s recomputed W-EMA50 reads $77,294.85, $46.43 higher — the stop is the number that was written, not the moving line it came from · from the $78,200 entry that is $951.58 of risk; from spot $78,612.26 it is 1.74% below</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$80,000 fixed (+2.30% from the limit) then W-SMA50 — quoted at <b>both vintages</b>: $81,784.71 as written on 08-25, $81,049.16 recomputed today, a $735.55 spread. A moving-MA target is the fourth instance of the same defect family and is flagged rather than quietly re-based</span></div>
                <div><span className="dn-lvl-k">disposal rule (unchanged)</span><span className="dn-lvl-v bear">a 1d close below $77,248.42 retires it and the shelf-hold thesis is simply wrong · a 1d close above $81,784.71 <em>as written</em> without a fill retires it as too low · neither branch fired: the 08-25 close was $78,505.40</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R (illustrative, unchanged):</b> limit $78,200, stop $77,248.42 =
                $951.58 risk; first target $80,000 = $1,800 reward ={' '}
                <b>1.8916:1</b>. The ratio is arithmetic on chosen levels, not
                evidence, and it is <em>flattered</em> by the same shelf whose gamma
                support thinned $13.99M below spot this session — the stop sits under
                a shelf that is measurably less defended than when the ratio was
                computed. <b>Hard rule, restated a third time:</b> the entry is not
                moved up to meet the tape, the stop is not moved down to survive it,
                and the near-miss does not loosen the gate. A gate loosened after a
                miss is a gate set by regret. What the miss <em>does</em> earn is the
                expiry above, because the defect it exposed is real and structural, not
                a matter of luck.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · chase-short · <b>STOOD DOWN</b> — fifth consecutive session · both legs moved marginally TOWARD the trigger, the second such session of the five (08-23 was the first), and both remain nowhere near it</span>
              <div className="dn-trade-name">
                Chase-short — stood down again; the second of the five stood-down
                sessions in which the evidence moved the right way, by an amount that
                changes nothing
              </div>
              <div className="dn-thesis">
                Two legs would put a short on the table: a price leg (spot within reach
                of the 0-γ flip, where the dealer book stops dampening and starts
                amplifying) and a gamma leg (the positive clamp unwinding). Both moved{' '}
                <em>toward</em> this session — and the honest measurement of that
                movement is why the trade is still stood down.{' '}
                <b>Sequence, stated because the draft it replaces called this a
                first:</b> across the five stood-down sessions the gamma leg reads
                08-22 <b>+249.91M</b> → 08-23 <b>+242.37M (−7.54M)</b> → 08-24{' '}
                <b>+247.69M (+5.32M)</b> → 08-25 <b>+256.84M (+9.15M)</b> → 08-26{' '}
                <b>+252.35M (−4.49M)</b>, and the price leg read 18.84% on 08-22 and
                17.48% on 08-23. <b>08-23 already moved both legs toward the trigger,
                with a larger clamp decline than today&rsquo;s</b>, so this is the
                second two-leg improvement of the sequence and the first since 08-23,
                not the first of any kind. The price leg today: the flip rose $224 to{' '}
                <b>$64,225.19</b> while spot fell $320.54, so the required decline
                narrowed from <b>18.92% to 18.30%</b> — 0.62 percentage points, on a
                leg that needs eighteen. The gamma leg today: the footed clamp eased{' '}
                <b>−4.49M to +252.35M</b> — the second decline of the sequence, from a
                level that is still the third-deepest of the
                checked post-08-16 lineage. Alongside that, this session supplies more
                mean-reversion evidence than any so far: a fresh 8h water-up death
                cross one bar old, the 1d TD9 SELL still active, 12h RSI 80.6 and 1d
                80.0, fast-frame RSI collapsed to the 40s, three top divergences, a
                high rejected at the first weekly MA above spot, and a −0.42% 24h
                print. <em>
                  It is still not a short. Shorting into a +252.35M positive-gamma book
                  22.40% above the flip, inside a 7 long / 0 short MTF map and an
                  18-of-20 positive matrix, is a trade with no structural backing. A
                  pile of overbought oscillators plus 0.62 percentage points of leg
                  improvement is not a substitute for one.
                </em>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">STOOD DOWN — no short contemplated at this snapshot</span></div>
                <div><span className="dn-lvl-k">price leg (unmet · closer)</span><span className="dn-lvl-v bear">spot within reach of the 0-γ flip $64,225.19 — an 18.30% decline reaches it (was 18.92%); spot is +22.40% above it, +22.56% off the file&rsquo;s Deribit index $78,713</span></div>
                <div><span className="dn-lvl-k">gamma leg (unmet · closer)</span><span className="dn-lvl-v bear">footed aggregate turning negative or collapsing toward zero — currently +252.35M (headline card +245.9M), EASED −4.49M · 26AUG26 settles today 08:00Z at −2.04M and 28AUG26 (+74.12M / 29.37%) settles 2026-08-28 08:00Z: two dated candidates inside 60 hours</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">do not read the fresh 8h death cross, the live 1d TD9 SELL, the 12h/1d RSI in the 80s, the three top divergences or the W-SMA50 rejection as short triggers — they are reasons not to <em>chase long</em>, which is a different instruction from going short, and the desk is already not chasing long</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the gamma leg now has two dated candidates
                inside 60 hours where it previously had one, and the price leg still
                has none. That asymmetry is the whole reason this framework is a watch
                and not an order. Note also what the 28AUG26 share history actually
                shows: 36.17% → 33.71% → 31.28% → 29.37% across four sessions{' '}
                <em>while the strip moved +14.47M and then −4.49M</em> — the line is
                losing share to a growing-then-easing book, which is a compositional
                fact about where new gamma is being written, not evidence that the
                28AUG26 contribution is decaying.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">ledger · near-miss / disposal record · <b>FOURTH EVENT ADDED — third near-miss</b> · row unit = one dated near-miss or disposal event, per the 08-25 definition</span>
              <div className="dn-trade-name">
                Near-miss ledger — the fourth event in eight days and the third one
                classified as a near-miss, and the first ledger row in which the
                framework actually armed
              </div>
              <div className="dn-thesis">
                The 08-25 note opened this ledger and defined its row unit as{' '}
                <em>one dated near-miss or disposal event</em>, standing at three rows.
                Today adds the fourth <em>event</em> — and, because row 3 is classified
                as a disposal rather than a miss, only the <b>third near-miss</b>. The
                two counts are kept distinct throughout this note: <b>4 ledger events,
                3 near-misses, 1 disposal.</b> The new row is also qualitatively
                different from the first
                three: those recorded a framework that never armed, this one records a
                framework that armed correctly and could not be filled under its own
                rules. <b>That distinction is the point of keeping the ledger.</b> Two
                correct directional calls and zero positions across a +21.72% seven-day
                move was already the desk&rsquo;s open cost; a third framework arming
                on schedule and missing by $151.00 does not change the sign of that
                cost, but it does change its diagnosis — the problem is no longer
                &ldquo;gates set at levels the tape had left,&rdquo; it is now
                &ldquo;an entry price that the arming rule does not deliver you to.&rdquo;
                One of those is fixable by writing the order properly. The 08-19 scout
                (entry ≈$64,632, stop $63,301, targets $66,343 / $66,391) stays{' '}
                <b>EXPIRED UNFILLED</b> at 10.03R gross / ≈2.01R at stated 0.2R sizing,
                both targets tagged 2026-08-19 15:05Z, unchanged and not re-litigated.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">row 1 · 2026-08-23</span><span className="dn-lvl-v">pullback long leg 2 — lowest exchange 1h close $76,020.30, <b>$20.30</b> above the $76,000 band top; 1m low $75,588.00 got $412.00 inside and no hour held</span></div>
                <div><span className="dn-lvl-k">row 2 · 2026-08-24</span><span className="dn-lvl-v">pullback long first target $80,000 — 24h high $79,991.00, <b>$9.00</b> short, on a framework that had never armed</span></div>
                <div><span className="dn-lvl-k">row 3 · 2026-08-25</span><span className="dn-lvl-v">pullback long RETIRED UNFILLED on the pre-committed disposal rule (08-24 daily close $78,953.00 vs the $78,446.94 lid top, +$506.06 / +0.65%) — a disposal, not a near-miss; no fill price exists so no R figure is computed</span></div>
                <div><span className="dn-lvl-k">row 4 · 2026-08-26 (NEW · near-miss #3)</span><span className="dn-lvl-v bear">retest-hold long <b>ARMED</b> on the 08-25 22:00-labelled close struck 23:00Z and never filled — post-arm low $78,351.00 vs the ≈$78,200 limit = <b>$151.00</b>; on the strict reading (23:00-labelled close struck 08-26 00:00Z) low $78,410.30 = $210.30. Both are closed historical distances; the live gap at the 00:05Z anchor is <b>$412.26</b>. First armed-and-missed row in the ledger; no R figure, because there is still no fill price</span></div>
                <div><span className="dn-lvl-k">open design defects carried</span><span className="dn-lvl-v"><b>(a)</b> the <code>net_btc</code> gate is unsound while the SM feed produces one-minute roster discontinuities — five consecutive sessions of evidence · <b>(b)</b> every band gate must name its price basis AND its duration before publication — closed on 08-25 · <b>(c)</b> NEW: an arming rule must be jointly satisfiable with its own entry price, or the instruction must carry an expiry — closed today by giving the ≈$78,200 limit a 08-27 00:00Z lapse · <b>(d)</b> NEW: a target quoted as a moving MA re-bases underneath the framework ($81,784.71 → $81,049.16 in one session) — flagged, not yet closed · <b>(e)</b> NEW: an hourly-bar condition must state whether its label is the bar&rsquo;s open or its close — exchange bars are left-labelled, so the 22:00-labelled arming close was struck at 23:00Z, and the v1 draft mis-dated the excursion interval on that confusion — flagged, and every bar reference in this note now carries both label and strike time</span></div>
              </div>
              <div className="dn-gating">
                <b>Process note:</b> the ledger exists so that the cost of discipline is
                carried openly rather than argued about later. Four events in eight days
                is a lot, and the correct response is still not to widen the gates. It
                is to notice that three of the four events trace to a{' '}
                <em>specification</em> failure rather than a directional one — a
                missing basis, a missing duration, a missing joint-satisfiability check
                — and that specification failures are the only kind a desk can actually
                fix by writing more carefully.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the arming rule fired and the entry never traded · funding&rsquo;s release proved reversible · the shelf under the trade thinned · the book is FLAT (desk statement, no position feed loaded) with one held limit and a 24-hour clock on it</span>
            </h2>

            <p>
              Of the 08-25 conditions: the retest-hold{' '}
              <b>arming condition FIRED</b> exactly as specified (four sub-$78,000
              prints 21:07–21:10Z, confirming closes $78,535.80 and $78,850.10, the
              second struck at 23:00Z on the left-labelled bar convention) and the{' '}
              <b>entry never traded</b>, the retrace stopping $151.00 short under the
              framework&rsquo;s
              own no-chase clause; neither disposal branch fired (08-25 close
              $78,505.40, above $77,248.42 and below $81,784.71); the chase-short&rsquo;s
              two legs <b>both moved toward trigger — the second such session of the
              five, 08-23 being the first</b> and both remain unmet by wide margins;
              the un-pin condition
              was <b>partially satisfied</b> — OI contracted −0.46% on matched
              endpoints after expanding +1.58% last session — while{' '}
              <b>funding&rsquo;s release from the cap was revoked and re-granted inside
              one session</b>, which retires it as a standalone condition until a run
              outlives 434 elapsed minutes (435 rows); retail <b>re-crowded +1.44pt</b>{' '}
              and bought the
              arming print rather than leaving; the 1d TD9 SELL <b>stayed printed</b>{' '}
              and an 8h water-up death cross joined it; and the fresh macro print{' '}
              <b>partially and unevenly reversed the 08-25 hostility</b> — 10Y exited
              episodic and gave back 80% of its +5bp, while TIPS real was never
              episodic and gave back only 40%.{' '}
              <em>
                One condition fired clean, one failed on its own terms after firing,
                two moved the right way by amounts that change nothing, and one — the
                gamma shelf beneath the entry — deteriorated without any condition
                having been written to catch it. That last one is the gap this note
                leaves open rather than papering over.
              </em>{' '}
              The conditions reset around a held limit with a clock on it:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Retest-hold long — <b>ARMED, limit held (desk instruction, not broker-verified)</b></td><td className="bull">limit ≈$78,200, 0.2R, no chase · <b>live gap from the 00:05Z anchor: $412.26 (−0.52%)</b> · the $151.00 post-arm low $78,351.00 is a closed historical distance, not the condition</td><td>hold the limit unchanged; a print at ≈$78,200 = 0.2R long, stop 1d close &lt; $77,248.42, first target $80,000</td></tr>
                <tr><td>Instruction lapse (NEW — closes defect (c))</td><td className="bear">not filled by the 2026-08-27 00:00Z daily close</td><td>the limit is withdrawn and the framework is re-decided in writing or retired; no silent carry</td></tr>
                <tr><td>Retest-hold stop / disposal</td><td className="bear">1d close &lt; $77,248.42 (1.74% below spot)</td><td>framework retired, shelf-hold thesis falsified, bullish structure reassessed from scratch</td></tr>
                <tr><td>Retest-hold &ldquo;too low&rdquo; disposal</td><td className="bull">1d close &gt; $81,784.71 (W-SMA50 <em>as written 08-25</em>) with no fill</td><td>retired as too low, same as its predecessor · note the recomputed W-SMA50 is $81,049.16 — the written number governs</td></tr>
                <tr><td>Funding de-crowding (RE-SPECIFIED)</td><td className="bear">an off-cap run exceeding <b>434 elapsed minutes (435 sampled rows)</b> — the length of the run that already reverted</td><td>only then does &ldquo;funding came off the cap&rdquo; count as evidence; the current 245-minute / 246-row run does not</td></tr>
                <tr><td>Gamma shelf under the entry (NEW watch)</td><td className="bear">$77,000 / $77,500 / $78,500 already negative; $78,000 eased to +24.74M</td><td>if $78,000 itself turns negative the retest-hold loses its structural anchor and is reassessed before the stop is reached</td></tr>
                <tr><td>Chase-short price leg</td><td className="bear">spot within reach of 0-γ flip $64,225.19 — an 18.30% decline</td><td>no action; leg unmet by an order of magnitude</td></tr>
                <tr><td>Chase-short gamma leg</td><td className="bear">footed aggregate toward zero — currently +252.35M · 26AUG26 settles today 08:00Z (−2.04M), 28AUG26 (+74.12M / 29.37%) settles 08-28 08:00Z</td><td>watch both settles; a material thinning is the first thing that would make the short a conversation</td></tr>
                <tr><td>SM certifiability</td><td className="stale">NOT CERTIFIABLE, fifth session · 72.50% of Δnet in one minute · 06:21Z–07:06Z step band BROKEN by today&rsquo;s 02:26Z step</td><td>no condition in this book reads net_btc; keep it that way until the feed is understood</td></tr>
                <tr><td>Macro re-hostility</td><td className="bear">10Y regime z back above +2.10 <em>and</em> episodic z &gt; +1.5 on a fresh daily print</td><td>would re-arm the 08-25 macro caveat; 10Y currently +1.98 / +0.72 having EXITED episodic (was +1.52) · TIPS real +1.92 / −0.42 was never episodic (prior +0.10) and is not part of this gate · Fed net liquidity −2.45 episodic is the only live Tier-1 flag</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the tape prints ≈$78,200 before 2026-08-27 00:00Z — which from
                the 00:05Z anchor spot of $78,612.26 requires a further{' '}
                <b>$412.26 / −0.52%</b> decline, not the $151.00 the tape already
                declined to give back last night. That $151.00 is a settled historical
                near-miss and is not the forward condition. If the limit does print,
                the desk is long 0.2R at ≈$78,200 with a fixed stop at $77,248.42
                and a first target at $80,000 — a framework that armed on its own rule,
                filled at its own price, and finally puts a position against a
                +252.35M positive-gamma book and an 18-of-20 matrix. If $412.26 does
                not arrive, the instruction lapses on the clock this note just gave it,
                the ledger takes a fifth event, and the desk will have written three
                consecutive correct frameworks and traded none of them
              </span>. Neither outcome is improved by moving a level tonight. Until
              then this note runs as written: the retest-hold limit is held at
              ≈$78,200 with a 24-hour lapse — a desk instruction, since no order-state
              feed is loaded to confirm a resting order — the stop is the number that
              was written and not the MA it came from, the chase-short is stood down a
              fifth session with both legs closer and both irrelevant, the SM feed
              stays uncertifiable and ungated, funding&rsquo;s release is downgraded
              from evidence to noise until a run beats 434 elapsed minutes, and the
              newly thinning gamma shelf beneath the entry gets a watch condition of
              its own before it costs anything. The right read for the next 24h is{' '}
              <em>the instruction is the decision — do not re-decide it by hand</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 — post codex hostile audit ·{' '}
              <code>audits/2026-08-26-desk-note.md</code> · verdict BLOCK-CRITICAL on
              v1 (4 CRITICAL · 5 MAJOR · 4 MINOR · 1 NIT) · all 14 findings applied and
              grep-closed
            </span>
            <b>Stage B verdict:</b> the codex hostile-but-fair xhigh audit blocked the
            v1 draft on four chronology / lineage / action-condition failures and five
            major overreach failures. <b>Stage C scope rule applied:</b> each finding
            was treated as a wrong <em>claim class</em> to correct everywhere in the
            file, not as a list of cited lines — the cited <code>file:line</code>{' '}
            references were used as primary examples only. Every CRITICAL and MAJOR
            finding was then closed under an explicit grep loop over the full EN file
            (patterns searched → hits carrying the pre-fix meaning before → hits after),
            repeated until zero stale matches remained. <b>Finding-by-finding record:</b>
            <div className="dn-lvls">
              <div><span className="dn-lvl-k">DN-001 · CRITICAL · false first-ever armed-and-unpositioned claim</span><span className="dn-lvl-v">patterns: <code>for the first time</code>, <code>first time in this</code>, <code>first-ever</code>, <code>first in this lineage</code>, <code>the first session in</code> · hits before 3 (trade-book lead, dealer-map lead, chase-short) · hits after <b>0</b> · replaced with a scoped, dated claim that cites both counterexamples by name (2026-07-22 <em>DEFERRED → ARMED</em>, &ldquo;ARMED but not live&rdquo;; 2026-08-06 0.2R starter armed and filled at market) and states the stable distinguishing definition — a pre-published arming rule carrying its own basis and duration fired as written while the separately-specified limit price never traded · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-002 · CRITICAL · wrong arming timestamp and &ldquo;eight hours&rdquo; interval</span><span className="dn-lvl-v">patterns: <code>eight hours</code>, <code>02:xxZ</code>, <code>22:00Z close</code>, <code>at the 23:00Z close</code>, <code>FIRED 08-25 22:00Z</code> · hits before 7 across lead, trade block, status/evidence rows, ledger row 4 and decision conditions · hits after <b>0</b> · exchange 1h bars are left-labelled, so the 22:00-labelled arming close is struck at <b>23:00Z</b> and the strict-reading 23:00-labelled close is struck at <b>08-26 00:00Z</b>; the session high is dated <b>08-25 02:17Z</b> and the interval to the arming close is <b>20h43m</b>, recomputed from <code>btcusdt_1m_2026.parquet</code>. Every bar reference in the note now carries both label and strike time, and the labelling gap is logged as carried defect (e) · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-003 · CRITICAL · forward condition stated as the stale $151.00 near-miss</span><span className="dn-lvl-v">patterns: <code>gives back</code>, <code>give back</code>, <code>$151.00</code> in forward context · hits before 4 forward-facing uses (trade thesis, decision-conditions table, closing paragraph, signature) · hits after <b>0</b> forward-facing (the remaining <code>$151.00</code> occurrences are explicitly labelled closed historical distances) · the live condition is now stated as spot $78,612.26 − limit $78,200 = <b>$412.26 / −0.52%</b> at the 00:05Z anchor, in the thesis, the entry row, the conditions table, the closing paragraph and the signature · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-004 · CRITICAL · false &ldquo;first two-leg improvement&rdquo; / &ldquo;first positive-GEX decline&rdquo;</span><span className="dn-lvl-v">patterns: <code>for the first time in five</code>, <code>first session in five</code>, <code>first decline</code>, <code>first time in this framework</code> · hits before 5 (side label, trade name, thesis, dealer-map lead, decision-conditions paragraph) · hits after <b>0</b> · the full five-session gamma-leg sequence is now printed inline — 08-22 +249.91M → 08-23 +242.37M (−7.54M) → 08-24 +247.69M (+5.32M) → 08-25 +256.84M (+9.15M) → 08-26 +252.35M (−4.49M) — alongside the price leg 18.84% (08-22) → 17.48% (08-23), and 08-26 is described as the <b>second</b> two-leg improvement and the first since 08-23, with 08-23&rsquo;s clamp decline noted as the larger of the two · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-005 · MAJOR · false universal &ldquo;everything above spot got heavier&rdquo;</span><span className="dn-lvl-v">patterns: <code>everything above</code>, <code>got heavier</code>, <code>above got heavier</code> · hits before 3 (lead paragraph, section III roman, strike-migration paragraph) · hits after <b>0</b> carrying the universal (the one surviving occurrence explicitly states the universal <em>would be false</em>) · recomputed from the frozen 08-25 and 08-26 <code>btc_gex.html</code> strike arrays: 47 common strikes, 22 above spot, of which <b>16 rose and 6 fell</b> for an aggregate <b>+$9.476M</b>; all six decliners are named in the body — $79,500 +2.133 → +0.868, $80,000 +44.280 → +40.789, $80,500 +1.721 → +0.334, $81,000 +11.951 → +11.507, $88,000 +7.079 → +6.941, $92,000 +2.059 → +1.975 · below-spot figure restated as −$13.987M and normalised to $13.99M wherever it is rounded · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-006 · MAJOR · flow classification beyond the loaded tape</span><span className="dn-lvl-v">patterns: <code>rotation, not a liquidation</code>, <code>not a liquidation</code> · hits before 1 · hits after <b>0</b> · downgraded to &ldquo;consistent with rotation, and this feed cannot exclude liquidation&rdquo;, with the distinguishing data named explicitly (gross opens and closes, account-level lifecycle, a forced-liquidation print stream — none loaded) and the point made that the available aggregates return identical values under either mechanism · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-007 · MAJOR · prior-RV lookahead made the IV/RV split non-causal</span><span className="dn-lvl-v">patterns: <code>43.34</code>, <code>59.2%</code>, <code>40.8%</code>, <code>+3.26pt</code>, <code>2.45pt</code> · hits before 6 (IV/RV paragraph and the v1 exposure-surface list) · hits after <b>0</b> carrying the published basis · recomputed on the full parquet set: like-for-like 30D RV as of <b>2026-08-25 00:04Z is 43.1981%</b> (which reproduces the 08-25 note&rsquo;s +3.40pt as 46.6 − 43.1981 = 3.4019pt, so no window-construction discrepancy survives once the lookahead is removed), today at 00:05Z RV is <b>41.8922%</b>, spread 3.4019 → 5.7078pt = <b>+2.3059pt</b>, of which RV supplies <b>56.6%</b> and IV <b>43.4%</b>. The lookahead variant (43.3362% to 2026-08-25 23:59Z, 59.2 / 40.8) is printed once and explicitly marked as not the published number · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-008 · MAJOR · combined &ldquo;both off episodic / both gave back most&rdquo; macro claim</span><span className="dn-lvl-v">patterns: <code>both off episodic</code>, <code>off the episodic</code>, <code>given back most</code>, <code>both reversed</code>, <code>reversed the 08-25</code> · hits before 5 (section IV roman, macro paragraph ×2, macro table ×2, decision-conditions paragraph) · hits after <b>0</b> · read off the frozen panels with the panel&rsquo;s own <b>|z| &gt; 1.5</b> episodic threshold stated inline: 10Y episodic <b>+1.52 → +0.72</b> = exited episodic, −4.0bp retraces <b>80%</b> of the prior +5.0bp; TIPS real episodic <b>+0.10 → −0.42</b> = <b>never episodic</b>, −2.0bp retraces only <b>40%</b>. The two lines are separated in the roman, the prose, the table read-column and the macro re-hostility gate; the manifest flag was rewritten for the same reason · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-009 · MAJOR · &ldquo;order live / working&rdquo; asserted without an order-state source</span><span className="dn-lvl-v">patterns: <code>order live</code>, <code>limit is live</code>, <code>stays working</code>, <code>working order</code>, <code>work the limit</code>, <code>order stays</code>, <code>order dies</code>, <code>live limit</code>, <code>Order expiry</code> · hits before 9 across the section-V roman, side label, trade name, thesis, status row, entry row, duration row, conditions table ×2 and the closing paragraph · hits after <b>0</b> · every instance is relabelled as a <b>desk instruction</b> — &ldquo;hold the ≈$78,200 limit unless cancelled&rdquo;, &ldquo;ARMED · NOT FILLED&rdquo;, &ldquo;instruction lapse&rdquo; — with an explicit disclosure that no blotter, submission ID, working/cancelled flag or execution feed is loaded, and the flat-book claim is likewise marked a desk statement rather than a position-feed reconciliation, in the lead, the trade block and the section-VI roman · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-010 · MINOR · sampled rows equated with elapsed minutes</span><span className="dn-lvl-v">patterns: <code>246 min</code>, <code>246-minute</code>, <code>435 minutes</code>, <code>435-minute</code>, <code>of 1,441 minutes</code>, <code>4h06</code> · hits before 8 · hits after <b>0</b> · the convention <em>an N-row segment spans N−1 one-minute intervals</em> is stated once in the funding paragraph and once in the manifest tile, then applied throughout: the current release reads <b>246 rows / 245 elapsed minutes = 4h05m</b>, the reverted release <b>435 rows / 434 elapsed minutes = 7h14m</b>, the pinned segments 859 rows / 858 min and 166 rows / 165 min, cap occupancy 1,025 / 1,441 <em>rows</em>, and basis discount 1,024 / 1,441 <em>rows</em>. The re-specified funding de-crowding gate now reads &ldquo;exceeding 434 elapsed minutes (435 sampled rows)&rdquo; · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-011 · MINOR · cycle-rank numerator unnamed and inconsistent with the paragraph</span><span className="dn-lvl-v">patterns: <code>39 of 166</code>, <code>40 / 166</code>, <code>1.2149</code> · hits before 3 · hits after <b>0</b> unlabelled · both conventions are now printed and neither is blended: on the in-progress parquet weekly close $78,432.40 over settled W-SMA200 $64,558.707 the ratio is <b>1.214900</b> with 39 / 166 strictly lower and inclusive rank 40 / 166; on live anchor spot $78,612.26 the ratio is <b>1.217686</b> with 41 / 166 strictly lower and inclusive rank 42 / 166. Both recomputed independently from parquet · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-012 · MINOR · &ldquo;first negative 24h print of the run&rdquo; with no run boundary</span><span className="dn-lvl-v">patterns: <code>first negative 24h</code>, <code>of the run</code> · hits before 1 · hits after <b>0</b> · replaced with the dated reproducible fact ($78,945.07 → $78,612.26 = −$332.81 / −0.42% on the exact 1,441-row window) plus the explicit counterexample that 08-23 already printed −0.89%, and no &ldquo;run&rdquo; boundary is asserted · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-013 · MINOR · &ldquo;fourth near-miss&rdquo; contradicts the ledger&rsquo;s own row-3 disposal label</span><span className="dn-lvl-v">patterns: <code>fourth near-miss</code>, <code>FOURTH ROW</code>, <code>four rows</code>, <code>fourth row</code> · hits before 4 · hits after <b>0</b> · the two counts are separated and carried consistently — <b>4 ledger events, 3 near-misses, 1 disposal</b> — in the lead paragraph, the ledger side label, the ledger name, the thesis, row 4&rsquo;s key and the process note; the closing paragraph now says the ledger would take a fifth <em>event</em> · <b>RESOLVED</b></span></div>
              <div><span className="dn-lvl-k">DN-014 · NIT · production placeholder &ldquo;across N instruments&rdquo;</span><span className="dn-lvl-v">patterns: <code>across N instruments</code>, <code>N instruments</code> · hits before 1 · hits after <b>0</b> · replaced with <b>966 instruments</b> from the frozen GEX panel, with the warning retained that this is a chain median and neither a tradable spread nor strike-level IV · <b>RESOLVED</b></span></div>
            </div>
            <b>Closure statement:</b> all 14 findings report grep hits-after = 0, so no
            finding is carried as UNRESOLVED and the note is promoted v1 → v2. The
            arithmetic behind the four newly published corrections was independently
            recomputed at Stage C before publication rather than copied from the audit:
            the 02:17Z high and the 20h43m interval and the 22:00/23:00 left-label
            behaviour from <code>btcusdt_1m_2026.parquet</code>; the 16-up / 6-down
            above-spot split and the +$9.476M / −$13.987M aggregates from the two frozen
            <code> btc_gex.html</code> strike arrays; the 43.1981% / 41.8922% aligned-RV
            pair and the 56.6 / 43.4 decomposition from the full parquet set; and the
            1.214900 vs 1.217686 cycle ratios and their 39 / 41 strict ranks from the
            166-observation weekly series. <b>Codex-confirmed clean and carried
            unchanged into v2:</b> the <code>requireViewer(&apos;/desk/2026-08-26&apos;)</code>{' '}
            gate as the first statement of the default export and exactly matching the
            route; markup integrity; the exact-anchor price / OI / CVD / big-trade
            arithmetic; the smart-money 02:26Z step arithmetic; the price-history
            extrema; the full 20-cell MA matrix and its 2,545-daily / 365-weekly sample
            counts; all GEX arithmetic other than DN-005; the MTF panel states and
            BJ↔UTC conversions; the cross-asset panel; the staleness ledger; the
            NOT-LOADED boundaries (NTT, max pain, strike-level IV, BTC/NQ ratio, JGB not
            used for a directional lean); and the trade math and 0.2R scope.{' '}
            <b>Open issues acknowledged, not closed by this pass:</b> the 2026-08-21 GEX
            archive is still absent, so &ldquo;third-deepest&rdquo; remains scoped to
            available dated panels rather than an uninterrupted archive;{' '}
            <code>weekly_200sma.json</code> is still absent and the cycle read remains a
            disclosed parquet fallback scoped to 166 weekly observations;{' '}
            <code>live_db.json</code> carries one NUL-only physical row at line 65,799
            outside this window and ingestion should be repaired; no order-state source
            exists, which is why DN-009 is closed by relabelling rather than by evidence;
            and the SM feed&rsquo;s upstream cause remains NOT LOADED, which is why no
            condition in this book reads <code>net_btc</code>.{' '}
            <b>Rolling-source archive:</b> mtf_div_latest.html, btc_gex.html,
            macro_dashboard.html and cross_asset_correlation_summary.md were copied to{' '}
            <code>/opt/desk-note/snapshots/2026-08-26-0007/</code> at Stage A start and
            every value in this note is read from that archive, so the Stage B audit
            re-read identical bytes. <b>Build note (INFO):</b> this server runs Node
            18.19.1 and Next 16.2.6 hard-exits below Node 20.9.0, so a full{' '}
            <code>next build</code> remains environment-blocked;{' '}
            <code>npx --no-install tsc --noEmit</code> is the build proxy and passes at
            exit 0 on this v2, as does targeted ESLint on this file.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among
            principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a
            single atomic snapshot (2026-08-26 00:07Z, live-tape anchor row 00:05Z)
            with section-level provenance disclosed in the manifest band above; the
            macro panel render is 2026-08-25 22:17Z and several inputs are explicitly
            stale, missing or framework-only and flagged as such.{' '}
            <b>
              This is a v2 published note: the codex hostile audit was run against v1
              and returned BLOCK-CRITICAL with 4 CRITICAL, 5 MAJOR, 4 MINOR and 1 NIT;
              all fourteen findings are applied here and each was closed under grep
              verification, recorded finding-by-finding in the audit trace above.
            </b>{' '}
            Levels, sizes and conditions are illustrative of the desk&rsquo;s process,
            not standing recommendations. Opportunity-cost, near-miss and
            counterfactual-fill figures describe where the tape went relative to
            written levels and are not statements of realized performance. Past
            correlation, gamma and positioning patterns do not bind future tape.
            Derivatives carry the risk of total loss and, where leveraged, loss
            exceeding deposited margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The rule fired on schedule and last night&rsquo;s retrace stopped
                $151.00 short; from here the same fill costs a further $412.26. We do
                not pay up for a trade whose whole edge was not paying up. The limit
                stays where it was written, and tonight it gets the expiry it should
                have had yesterday.
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
            v2 · 2026-08-26 00:07Z snapshot · post codex hostile audit
            (audits/2026-08-26-desk-note.md) · sources:
            live_db.json · mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · gex_summary.json ·
            FRED · Yahoo · Deribit
          </span>
        </footer>
      </article>
    </main>
  );
}
