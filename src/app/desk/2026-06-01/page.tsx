import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-01 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-01',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-01' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260601() {
  await requireViewer('/desk/2026-06-01');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-01 · v2</span>
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
              <span className="dn-big">$73,493</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.87%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-01 02:25Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-01 02:25Z (snapshot pin)</td>
                  <td className="dn-flag">
                    fresh · 1-min · snapshot pinned to live_db.json line
                    41507 (`t == "06-01 10:25"` BJ = 02:25Z); source tail
                    is rolling and had already advanced past the pin at
                    audit time (audit-time tail line 41519 / 02:37Z, file
                    stat mtime 2026-06-01 02:36:07Z) — the v1 draft&rsquo;s
                    &ldquo;file tail at audit time = pin&rdquo; was wrong ·
                    this snapshot lands ~5h35m before the 01JUN26 0.2DTE
                    08:00Z option settle
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-01 02:16Z scan as authored (10:16 BJ)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15
                    min) · the 02:16Z scan behind the v1 table was
                    overwritten on the rolling source before the audit
                    pinned it (closest recoverable artifact at audit time
                    was 02:31Z, mtime 2026-06-01 02:31:34Z, which differs
                    from the v1 table in several cells: 15m water-up death
                    6b vs 5b, 30m water-down death 2b vs 1b, scan spot
                    $73,460 vs $73,470) · the v1 table values are kept as
                    authored but flagged unauditable rolling-artifact
                    residue; the desk pipeline needs timestamped MTF
                    archives to close this gap
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-01 02:22Z snapshot</td>
                  <td className="dn-flag">
                    fresh · ~3-min stale vs snapshot anchor · Deribit idx
                    $73,757 vs live $73,493 ($264 above live) · 928 instruments
                    (was 938 on 05-31 · 31MAY 0DTE chunk cleared 05-31 08:00Z)
                    · 1JUN26 0.2DTE +22.40M settles at 08:00Z today (~5h35m
                    after snap); aggregate +41.6M (down from +62.9M on 05-31);
                    post-1JUN-settle ex-1JUN per aggregate shortcut ≈ +19.2M
                    (NOT reconciled against the by-expiry strip sum of
                    +32.77M; see GEX paragraph for the disclosure — the
                    source builder&rsquo;s aggregate and per-expiry strip do
                    not currently add)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-01 02:00Z
                  </td>
                  <td className="dn-flag">~25-min lag · 7d 1h bars · 22 assets · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-31 22:15Z render</td>
                  <td className="dn-flag">
                    fresh render today (2026-05-31 22:15Z, ~4.17h before
                    snap; the 05-31 page read 2026-05-30 22:15Z, so this is
                    a new daily render) · Tier-1 levels happen to be
                    unchanged across the two renders (10Y 4.45%, TIPS 2.06%,
                    HY OAS 2.72%, MOVE 70.2); DXY firmed to 99.01 (+0.10 vs
                    the 05-31 page&rsquo;s 98.91), Fed net liq $5.872T with a
                    fresh −$0.058T weekly print marked on this panel; NFCI
                    stale 9d · Tier-3 inflation rows fetch-failed
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-01 02:18Z</td>
                  <td className="dn-flag">
                    ~7-min stale vs snapshot anchor · offsets recomputed vs
                    live spot $73,493 · <em>MA matrix intentionally uses the
                    2024-2026 1m parquet window only</em> · on that window 127
                    weekly bars are on file and W-SMA150 / W-SMA200 stay
                    non-computable (the user-stated wildcard
                    btcusdt_1m_*.parquet does include 2019-2026 and would
                    compute W-SMA150 ~$74,750 / W-SMA200 ~$61,859 ·
                    W-EMA150/200 also reframe under that scope; the page
                    chose the cycle-window scope for consistency with the
                    last 60 sessions' lineage) · W-SMA20 caught down to
                    $73,146 from $74,161 — now sitting in the same
                    cycle-anchor confluence band as D-SMA100 $73,200 (a $54
                    spread, not equal-to-the-dollar)
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
              <span className="dn-v bear">+6.60%</span>
              <span className="dn-src">live · raw 0.006028 × 1095 · 24h mean +6.80% (was +4.00% on 05-31) · cap occupancy 79 / 1441 sampled rows = 5.48% pinned at 10.95% ann cap (was 0.1% on 05-31) · trough +3.12% ann @ 2026-05-31 18:54Z (BJ 02:54 06-01) · peak +10.95% ann @ 2026-05-31 12:58Z (BJ 20:58 05-31, cap pin)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · vs 05-31 note (snap-to-snap)</span>
              <span className="dn-v bear">+4.90% → +6.60% (+1.70pt firmer · cap re-engaged · note-to-note, NOT 24h baseline)</span>
              <span className="dn-src">range +3.12% / +10.95% · the true 24h-baseline funding delta is smaller: 24h baseline live raw 0.005615 × 1095 = +6.15% ann → +6.60% ann = <em>+0.45pt</em> on a strict 24h-window-open comparison · cap pinned 79 / 1441 sampled rows (was 1 / 1441 on 05-31 — <em>79× by row count</em>; ~55× if dividing the displayed/rounded percentages 5.48% / 0.1%) · either way the leverage gate re-firmed in this 24h, exactly the watch from yesterday&rsquo;s &ldquo;deflating book&rdquo; read</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+0.88% (+915 BTC)</span>
              <span className="dn-src">live · OI re-grew after 05-31&rsquo;s first lineage shrink (−373) · SM long_btc +228 (flat), short_btc +1,891 (one-sided add) — fresh leverage is short-side stacking, not two-sided rebuild</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">61.01 / 38.99</span>
              <span className="dn-src">live_db `mkt_long_pct` · re-crowded 60.35 → 61.01 (+0.66pt) after 05-31&rsquo;s −3.50pt cool · 24h range 59.65 / 61.01 — the long-side de-crowding partially walked back</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−30.9k (net SHORT, short side stacking)</span>
              <span className="dn-src">live · long 11.14k − short 42.06k · short peaked 42.28k @ 2026-06-01 00:26Z (BJ 08:26 06-01) and held above 42k into snap; long_btc held a tight 10.89k / 12.41k range across 24h</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 05-31 note</span>
              <span className="dn-v bear">−29.2k → −30.9k (−1,764 net, long +228 / short +1,891)</span>
              <span className="dn-src">|Δ|/prior_net = 1,764 / 29,158 = 6.05% · long side essentially flat while short side added 1.9k — one-sided short stacking, NOT a re-stack hostile-2 signature (which requires Δshort &gt; 0 AND Δlong &lt; 0 same minute; the largest single-minute Δnet over 24h was only −1,300)</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.7% / 24.75%</span>
              <span className="dn-src">GEX median IV · 928 inst. (was 39.9% / 938 on 05-31 — IV firmed +0.8pt as 31MAY 0DTE cleared and 1JUN 0.2DTE moved into the front) · 30D RV 24.75% (30 returns / 31 closes)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+1.00% (above)</span>
              <span className="dn-src">flip $72,766 (was $72,764 · essentially unchanged) · vs live spot $73,493 (+1.00%; 73,493 / 72,766 − 1 = +0.9991%) / GEX file Deribit idx $73,757 (+1.36%; 73,757 / 72,766 − 1 = +1.3618%) — both refs positive, page rounds spot side to +1.00% for tile consistency · aggregate GEX +41.6M (was +62.9M, trimmed −21.3M) · ex-1JUN ≈ +19.2M post-08:00Z settle</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The dampening regime held on close but the position book
                rebuilt leverage overnight — funding came back to the cap, OI
                re-grew, and the short side stacked one-sided into a price
                fade
              </span>. Spot{' '}
              <span className="dn-tag bear">$73,493 −0.87% on 24h</span> took
              out yesterday&rsquo;s in-progress close and printed a fresh 24h
              low{' '}
              <span className="dn-tag bear">$73,278 @ BJ 10:00 06-01 (UTC
              02:00)</span> — inside the last 30 min before snap. The cycle
              anchor still holds on a close basis (the 05-31 daily close ran{' '}
              <span className="dn-tag bull">$73,653</span>, fourth consecutive
              UTC close above the{' '}
              <span className="dn-tag bull">D-SMA100 $73,200</span> cycle
              anchor; 06-01 in-progress close{' '}
              <span className="dn-tag">$73,491</span> sits +0.40% above), but
              the W-SMA20 floor that was overhead at $74,161 on 05-31 caught
              down on the new weekly bar to{' '}
              <span className="dn-tag">$73,146 — into the same cycle-anchor
              confluence band as D-SMA100 $73,200 (a $54 spread)</span>,
              breaking the scout&rsquo;s W-SMA20-reclaim leg mechanically. Funding now lives at{' '}
              <span className="dn-tag bear">+6.60% ann live / +6.80% mean /
              5.48% cap occupancy (79 / 1441 rows) at the +10.95% Binance
              cap</span> (vs +4.90% / +4.00% / 0.1% (1 / 1441 rows) on the
              05-31 note — every gauge firmer on a note-to-note basis; the
              true 24h-baseline live tick is the smaller +6.15% → +6.60%
              = +0.45pt, the +1.70pt firming is measured against the prior
              note&rsquo;s snap, not the rolling 24h open), OI re-grew
              <span className="dn-tag bear"> +915 BTC (+0.88%)</span> after
              yesterday&rsquo;s first lineage shrink, and the short side
              stacked{' '}
              <span className="dn-tag bear">+1,891 (long flat at +228)</span>{' '}
              across the same 24h. The dealer book stays net-long-gamma{' '}
              <span className="dn-tag bull">+41.6M (was +62.9M, trimmed
              −21.3M)</span> with the flip basically static at $72,766 — the
              dampening regime is intact but the post-amplifier &ldquo;book is
              deflating&rdquo; read is partially walked back. The scout stays
              deferred with a re-tightened trigger; no fresh short into a
              positive-gamma book at the cycle anchor.
            </p>

            <p>
              BTC prints <span className="dn-tag">$73,493</span> live,{' '}
              <span className="dn-tag bear">−0.87%</span> on 24h — the first
              24h down-print since the post-amplifier session opened — within
              a <span className="dn-tag">$74,223 / $73,278</span> range (high
              @ BJ 11:35 05-31 / UTC 03:35 05-31, low @ BJ 10:00 06-01 / UTC
              02:00 06-01 — 25 min before snap). The 05-31 UTC daily close{' '}
              <span className="dn-tag bear">$73,653</span> printed{' '}
              <em>lower</em> than the 05-30 close{' '}
              <span className="dn-tag">$73,857</span> — the first down-close
              of the post-amplifier session (the 05-31 v2 note&rsquo;s
              in-progress 08:09Z mark of $73,828 ran $175 above what the day
              actually closed at). Still, all four post-down-leg UTC closes
              sit above the cycle anchor: 05-28{' '}
              <span className="dn-tag bull">$73,591</span>, 05-29{' '}
              <span className="dn-tag bull">$73,428</span>, 05-30{' '}
              <span className="dn-tag bull">$73,857</span>, 05-31{' '}
              <span className="dn-tag bull">$73,653</span>, with 06-01
              in-progress at{' '}
              <span className="dn-tag bull">$73,491 (+0.40% above
              D-SMA100)</span>.{' '}
              <span className="dn-signal">
                The cycle anchor read is intact on close basis but the W-SMA20
                trigger is mechanically broken
              </span>: the W-SMA20 floor that broke on 05-29 caught down on
              the fresh weekly bar to{' '}
              <span className="dn-tag">$73,146</span> — sitting in the same
              cycle-anchor confluence band as D-SMA100 $73,200 (a $54 spread,
              not equal-to-the-dollar; the v1 draft and the 05-31 page both
              garbled this — the two MAs share a band, they are not the same
              number). The 05-31 scout
              read &ldquo;1h close &gt; $74,161&rdquo; required a real $1,000+
              reclaim leg; the new trigger sits only a few dollars from spot,
              which means a 1h close above the W-SMA20 is structurally
              meaningless as a long signal — the rule fires on a sideways tick. The
              overhead MA cluster also re-stacked tighter: D-EMA20{' '}
              <span className="dn-tag bear">$75,869 (−3.13%)</span>, D-SMA150{' '}
              <span className="dn-tag bear">$76,065 (−3.38%)</span>, D-EMA50{' '}
              <span className="dn-tag bear">$76,080 (−3.40%)</span>, D-SMA20{' '}
              <span className="dn-tag bear">$76,434 (−3.85%)</span>, D-EMA100{' '}
              <span className="dn-tag bear">$76,476 (−3.90%)</span>. The first
              real overhead reclaim leg now sits at the D-EMA20 / D-SMA150
              cluster ($75.9k–$76.1k), not at the dead W-SMA20.{' '}
              <span className="dn-em">
                The scout&rsquo;s trigger geometry must reset against the
                D-EMA20 cluster, not the W-SMA20 anchor band; we re-tighten
                below.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · 24h OI re-grew +915 BTC (first add since 05-31&rsquo;s lineage-first shrink) · short side stacked +1,891 (long flat) · NO re-stack hostile-2 signature (largest single-min Δnet only −1,300)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position book has rebuilt leverage one-sidedly into the
                price fade — short stacking, not flushing
              </span>. SM net is{' '}
              <span className="dn-tag bear">−30,922</span> vs the 05-31
              note&rsquo;s −29,158 — that is{' '}
              <span className="dn-em">−1,764 deeper short</span> (|Δ| /
              prior_net = 1,764 / 29,158 = 6.05% — modest absolute, decisive
              in direction). But the components moved asymmetrically: long_btc{' '}
              <span className="dn-tag">10.77k → 11.14k (+0.37k)</span> stayed
              near the lineage-low (24h range 10.89k / 12.41k) and short_btc{' '}
              <span className="dn-tag bear">39.93k → 42.06k (+2.13k)</span>
              stacked. Across the 24h window: long_btc Δ{' '}
              <span className="dn-tag">+228</span> (essentially flat),
              short_btc Δ <span className="dn-tag bear">+1,891</span>, net Δ{' '}
              <span className="dn-tag bear">−1,663</span> (228 − 1,891 =
              −1,663) — the 24h shape was a one-sided short add with a long
              side that did not rebuild, did not flush. Short_btc peaked at{' '}
              <span className="dn-tag bear">42,275 @ 2026-06-01 00:26Z (BJ
              08:26 06-01)</span>, then bled −214 into snap. SM net trough{' '}
              <span className="dn-tag bear">−30,979 @ 2026-06-01 01:46Z (BJ
              09:46 06-01)</span> — printed within the last hour of the
              snapshot. Long_btc peak{' '}
              <span className="dn-tag bull">12,410 @ 2026-05-31 06:31Z (BJ
              14:31 05-31)</span>; long_btc trough{' '}
              <span className="dn-tag bear">10,892 @ 2026-05-31 02:26Z (BJ
              10:26 05-31)</span>. <span className="dn-em">No re-stack
              hostile-2 signature</span> (Δshort &gt; +500 AND Δlong &lt; −500
              same minute) printed across the 24h window — the largest
              single-minute Δnet was only{' '}
              <span className="dn-tag">−1,300 @ 2026-05-31 14:26Z (BJ 22:26
              05-31)</span> with Δlong −891, Δshort +409 (a softer version of
              the 05-30 BJ 22:01 signature). The cycle cadence (now formally
              falsified per 05-31) did not produce a discrete extension event;
              the short stacking happened as a slow drift, not a step.
            </p>

            <p>
              <span className="dn-signal">
                The leverage gauges all firmed
              </span>. Funding live{' '}
              <span className="dn-tag bear">+6.60% ann</span> (raw 0.006028 ×
              1095), 24h range{' '}
              <span className="dn-tag bear">+3.12% / +10.95% ann</span> with
              the peak <span className="dn-tag bear">+10.95% ann pinned at
              the Binance 0.01 cap @ 2026-05-31 12:58Z (BJ 20:58 05-31)</span>{' '}
              — the cap re-engaged. 24h mean ann{' '}
              <span className="dn-tag bear">+6.80%</span> (vs the 05-31
              note&rsquo;s 24h-mean +4.00% — a +2.80pt firming on the
              note-to-note read). Cap occupancy{' '}
              <span className="dn-tag bear">79 / 1441 sampled rows
              (5.48%)</span> (vs 1 / 1441 = 0.07% on 05-31 —{' '}
              <em>79× more cap activity by raw row count</em>; ~55× if
              dividing the rounded displayed percents 5.48% / 0.1%; the v1
              draft&rsquo;s &ldquo;54×&rdquo; came from the rounded-percent
              division and is corrected to 79× by row count here). The
              strict 24h-baseline funding delta (24h-window-open raw vs live
              raw) is the smaller +6.15% ann → +6.60% ann = <em>+0.45pt</em>;
              the +1.70pt firming compares to the 05-31 note&rsquo;s
              +4.90% snap, not the rolling 24h baseline. Trough{' '}
              <span className="dn-tag bull">+3.12% ann @ 2026-05-31 18:54Z
              (BJ 02:54 06-01)</span> — funding never went negative in the
              24h window (the 05-31 note&rsquo;s −0.21% short-pay trough did
              not repeat). OI Δ{' '}
              <span className="dn-tag bear">+915 BTC (+0.88%)</span> over 24h —{' '}
              <span className="dn-em">the first OI re-grow since 05-31&rsquo;s
              lineage-first shrink (−373)</span>; combined with the short-side
              stacking, the OI add reads as fresh short positioning, not
              long rebuild. Retail{' '}
              <span className="dn-tag bear">mkt_long_pct 61.01%</span> from
              60.35% — a +0.66pt re-crowding off yesterday&rsquo;s lineage
              cool. Perp trades a{' '}
              <span className="dn-tag bear">−$110.34 discount</span> to spot
              at snap (1h mean −$103.89, range −$170.57 / −$53.21; 4h mean
              −$106.37, range −$171.01 / −$35.99; 24h mean −$109.43, range
              −$198.16 / −$35.99 — basis never went premium across the 24h,
              the discount widened over the lineage). 1-min aggressor skew
              snap <span className="dn-tag bear">−10.2</span> (1h range
              broader, no clean sign on the snap). big-print 24h{' '}
              <span className="dn-tag">−12 BTC / 538 prints</span>{' '}
              (essentially flat block flow), taker-net 24h{' '}
              <span className="dn-tag bear">−336</span>.{' '}
              <span className="dn-em">
                Funding back at cap + OI re-growing + retail re-crowded +
                short side stacked + long side flat at the lineage-low: the
                leverage book has rebuilt, and it has rebuilt one-sidedly on
                the short side. The 05-31 &ldquo;deflating&rdquo; read held
                for one snap and partially walked back overnight.
              </span>
            </p>

            <p>
              Windowed flow is{' '}
              <em>two-sided across 24h with a divergence: spot bid into the
              fade, futures sold</em>. 24h: price{' '}
              <span className="dn-tag bear">−0.87%</span>, OI{' '}
              <span className="dn-tag bear">+915 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +5,142</span>{' '}
              (no cb_cvd reset across the 24h window), futures CVD{' '}
              <span className="dn-tag bear">Δ −336</span>, big-print{' '}
              <span className="dn-tag">−12 BTC / 538 prints</span>,
              taker-net <span className="dn-tag bear">−336</span> —{' '}
              <span className="dn-em">
                spot bid the −0.87% (a +5.1k cb_cvd accumulation in a
                down-tape), futures sold (a small −336 fut_cvd), big-print
                flat, taker-net mildly heavy. The shape is: spot
                accumulators bought the fade while futures pressed the short
                stack — a classic spot-vs-perp divergence where spot
                absorption hasn&rsquo;t yet outweighed perp pressure on price
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bear">−0.50%</span>, OI{' '}
              <span className="dn-tag bull">−132 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −238</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −61</span>, big-print{' '}
              <span className="dn-tag bull">+101 BTC / 126 prints</span>,
              taker-net <span className="dn-tag bear">−60</span> —{' '}
              <em>the 4h leg printed lower on light selling and a small OI
              shed; big-print actually bid +101 against the drift</em>. 1h:
              price <span className="dn-tag bear">−0.15%</span>, OI{' '}
              <span className="dn-tag bull">−80 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −1,188</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −189</span>, big-print{' '}
              <span className="dn-tag bear">−82 BTC / 35 prints</span>,
              taker-net <span className="dn-tag bear">−183</span> —{' '}
              <em>the most recent hour turned heavy on every flow gauge, the
              cb_cvd dropped −1.2k into the 24h low; the snap caught the
              end of an offered hour</em>. The divergence to watch: 24h
              cb_cvd +5.1k says spot absorbers buying the fade, but the 1h
              cb_cvd −1.2k says they backed off into the most recent print —
              the absorption is intermittent, not continuous.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · 1h flipped fresh water-down death cross 1b · 1d dropped below cloud (was &ldquo;in cloud 4b&rdquo;) · 3d water-up death cross still confirmed at 2b · 8h water-down golden cross advanced to 3b · W-SMA20 caught down to the cycle anchor</span>
            </h2>

            <p>
              <span className="dn-signal">
                Engine frames turned heavier overnight while slow frames
                continued to deteriorate
              </span>. The 1h MACD flipped to a fresh water-down death cross
              1 bar ago at the 06-01 01:00Z close — a whipsaw inside an in-
              cloud frame (the 1h Ichimoku just entered the cloud
              $73.4k–$73.8k 2b ago, exactly straddling spot). The 30m
              also printed a fresh water-down death cross 1 bar ago. Engine
              RSI cooled: 1h RSI{' '}
              <span className="dn-tag">43.8</span> (was 55.8 on 05-31 — full
              mid-line reclaim walked back), 4h RSI 39.9 (was 43.9), 8h RSI
              35.4 (was 38.4 — deepest oversold of the engine), 12h RSI 32.4
              (was 34.6 — deepest oversold of the matrix). The 8h water-down
              golden cross from 05-31 advanced to{' '}
              <span className="dn-tag">3 bars</span> (still confirmed but
              not extended); 4h golden cross advanced to{' '}
              <span className="dn-tag">14 bars</span> (still confirmed). Slow
              frames: 1d dropped{' '}
              <span className="dn-tag bear">below the cloud (just
              printed)</span> — was &ldquo;in cloud 4b&rdquo; on 05-31, the
              1d frame walked out below; 3d water-up death cross is at{' '}
              <span className="dn-tag bear">2 bars (still confirmed)</span>;
              12h water-down death cross is at{' '}
              <span className="dn-tag bear">9 bars</span> (was 7b — extended);
              1w water-down golden cross is at{' '}
              <span className="dn-tag">7 bars</span> (was 6b — held); 1M{' '}
              <span className="dn-tag bull">above cloud 28b, Sell 1</span>{' '}
              (regime frame still constructive). New entrants to the bear
              list since 05-31: 30m water-down death cross 1b, 1h water-down
              death cross 1b, 1d below-cloud just-printed.{' '}
              <span className="dn-em">
                Read straight: the engine frames whipsawed bear, the slow
                frames added the 1d below-cloud to the existing 3d / 12h
                bearish prints, and only the 8h / 4h golden crosses and the
                1w / 1M regime constructive prints push the other way. The
                MTF map has tilted heavier in the 24h, consistent with the
                position-book short-side stack.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">73,470</td><td className="num">43.2</td><td className="neut">water-up death 5b</td><td className="bear">below ↑73.6k 5b</td><td>Buy 6</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">73,470</td><td className="num">43.6</td><td className="bear">water-down death 1b (fresh)</td><td className="bear">below ↑73.9k 3b</td><td>Buy 4</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">73,470</td><td className="num">43.8</td><td className="bear">water-down death 1b (fresh, whipsaw)</td><td className="neut">in cloud 73.4–73.8k 2b</td><td>Buy 2</td><td>BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">73,470</td><td className="num">39.9</td><td className="bull">water-dn golden 14b</td><td className="bear">below ↑76.2k 37b</td><td>Buy 6</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">73,470</td><td className="num">35.4</td><td className="bull">water-dn golden 3b</td><td className="bear">below ↑77.1k 48b</td><td>Buy 2</td><td>BULL reg</td></tr>
                <tr><td>12h</td><td className="num">73,470</td><td className="num bear">32.4</td><td className="bear">water-down death 9b</td><td className="bear">below ↑78.8k 19b</td><td>Buy 1</td><td>BULL reg</td></tr>
                <tr><td>1d</td><td className="num">73,470</td><td className="num">36.3</td><td className="neut">—</td><td className="bear">below ↑73.9k (just printed)</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>3d</td><td className="num">73,470</td><td className="num">45.0</td><td className="bear">water-up death 2b (still confirmed)</td><td className="bear">below ↑74.0k (just printed)</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">73,470</td><td className="num">42.3</td><td className="bull">water-dn golden 7b</td><td className="bear">below ↑100.3k 18b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">73,470</td><td className="num">47.2</td><td className="neut">—</td><td className="bull">above ↓46.9k 28b</td><td>Sell 1</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html as authored from the 02:16Z
                    scan (10:16 BJ). The rolling latest-file artifact
                    overwrote that scan before STAGE B could pin it; the
                    closest audit-time recoverable source was 02:31Z (mtime
                    2026-06-01 02:31:34Z), which prints 15m water-up death
                    6b (vs 5b here), 30m water-down death 2b (vs 1b here),
                    and scan spot $73,460 (vs $73,470 here). The v1 numbers
                    in this table are kept as authored but are{' '}
                    <em>unauditable rolling-artifact residue</em> — treat
                    every cell as a single read with no verifiable archive
                    behind it until the pipeline ships timestamped MTF
                    snapshots. Header alerts as authored: 30m water-down
                    death cross 1b (fresh), 1h water-down death cross 1b
                    (fresh) AND 1h water-down golden cross 2b (whipsaw
                    inside in-cloud frame), 3d water-up death cross 2b
                    (still confirmed). Scan spot $73,470 vs live tape
                    $73,493 — a ~9-min gap and a $23 scan-vs-live drift; 24h
                    H/L $74,211 / $73,171 on the scan (live tape window:
                    $74,223 / $73,278). Closes are in-progress bars; treat
                    every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms a tightened cycle-anchor sandwich. Spot
              $73,493 sits{' '}
              <span className="dn-tag bull">+0.40% above D-SMA100
              $73,200</span> (cycle anchor; D-SMA100 moved up $54 from
              $73,146 on 05-31 — the rolling window absorbed a higher floor
              and shed an older low) AND{' '}
              <span className="dn-tag bull">+0.47% above W-SMA20
              $73,146</span>{' '}
              <em>which caught down by $1,015 from $74,161 on 05-31</em> as
              the 05-31 weekly close $73,653 rolled into the 20-week window.{' '}
              <span className="dn-signal">
                The W-SMA20 and D-SMA100 now sit at $73,146 / $73,200
                — a $54 spread, the same cycle-anchor confluence band (NOT
                equal to the dollar — the $54 spread is the load-bearing
                number, the &ldquo;to the dollar&rdquo; framing earlier
                in the lineage was wrong)
              </span> — so spot is in a +0.40% / +0.47% sandwich on dual
              support, with the very first overhead reclaim leg now at{' '}
              <span className="dn-tag bear">D-EMA20 $75,869 (−3.13%)</span> /{' '}
              <span className="dn-tag bear">D-SMA150 $76,065 (−3.38%)</span> /{' '}
              <span className="dn-tag bear">D-EMA50 $76,080 (−3.40%)</span>{' '}
              — a $2,300 air-pocket above before any overhead MA pushes
              back. Then {' '}
              <span className="dn-tag bear">D-SMA20 $76,434 (−3.85%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $76,476 (−3.90%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $77,275 (−4.89%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $77,317 (−4.95%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $78,166 (−5.98%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $78,605 (−6.50%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $79,389 (−7.43%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $80,963 (−9.23%)</span>.
              Far above and disused: W-EMA100 seed $83,029 (−11.49%), W-EMA50
              seed $84,338 (−12.86%), W-SMA100 $88,506 (−16.96%), W-SMA50
              $92,821 (−20.82%). The single line of weekly seed-disclosed
              positives just turned: W-EMA200 seed is now $73,700 with spot{' '}
              <span className="dn-tag bear">−0.28% BELOW</span> (was +0.24%
              above on 05-31), a $206 sign flip on a low-confidence
              seed-from-available-history line.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-01 02:18Z (close
                $73,491.00); offsets recomputed against live spot $73,493.00.
                Displayed MA levels are $-rounded; offsets computed from
                exact series values. <b>Scope disclosure:</b> the MA matrix is
                intentionally computed against the 2024-2026 1m parquet window
                (the same cycle window the lineage has used). On that scope
                parquet history holds 127 weekly bars (was 126 on 05-31), short
                of both 150w and 200w windows, so W-SMA150 / W-SMA200 read
                non-computable and W-EMA150 $78,166 (−5.98%) / W-EMA200 $73,700
                (−0.28%) show as EMA-seed-from-available-history. The
                user-stated source wildcard btcusdt_1m_*.parquet actually
                includes 2019-2026 and would compute W-SMA150 ~$74,750 (−1.7%),
                W-SMA200 ~$61,859 (+18.8%), W-EMA150 ~$75,408 (−2.5%), W-EMA200
                ~$69,123 (+6.3%); we are not switching scope mid-lineage but
                want the reader to know the full-history numbers exist and
                differ. Daily closes: 05-26 $75,906, 05-27 $74,418, 05-28
                $73,591, 05-29 $73,428, 05-30 $73,857, 05-31 $73,653, 06-01
                (in-progress) $73,491 — four consecutive completed closes
                above the cycle anchor.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book stays net-long-gamma aggregate +41.6M (trimmed −21.3M from 05-31&rsquo;s +62.9M) · flip basically static $72,766 · 1JUN26 +22.40M settles at 08:00Z (≈5h35m after snap) · ex-1JUN aggregate ≈ +19.2M still positive</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book stays net-long-gamma but the cushion trimmed
                materially
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+41.6M / 1%</span> (was +62.9M on
              05-31 — a −21.3M trim, of which −17M was the 31MAY 0.3DTE
              clearing at 08:00Z 05-31 and the residual ~−4M is wall
              redistribution); the book is still dampening, just with less
              insulation. The 0-γ flip moved{' '}
              <span className="dn-tag">$72,764 → $72,766 (+$2, static)</span>,
              and spot $73,493 sits{' '}
              <span className="dn-tag bull">+1.00% above flip</span> on
              spot-denominated math (73,493 / 72,766 − 1 = +0.9991%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads +1.4% off its
              Deribit-index $73,757 ($264 above live spot), which is{' '}
              <span className="dn-tag bull">+1.36%</span> (73,757 / 72,766 −
              1 = +1.3618%) — both references positive, spot above the flip
              on both, the second above-flip snapshot of the lineage (vs
              05-31&rsquo;s first). The wall map redistributed:{' '}
              <span className="dn-tag bull">$80k +23.76M</span> (heaviest
              wall, basically stable from +23.93M),{' '}
              <span className="dn-tag bull">$82k +11.05M</span> (was +11.14M),{' '}
              <span className="dn-tag bear">$70k −12.05M</span> (was −8.44M
              — grew −3.6M, the heaviest negative wall),{' '}
              <span className="dn-tag bear">$72k −9.47M</span> (was −8.45M
              — grew slightly),{' '}
              <span className="dn-tag bear">$60k −9.08M</span> crash-put
              residual,{' '}
              <span className="dn-tag bull">$74k +7.20M</span> (was +12.26M
              — trimmed −5.1M; still net positive),{' '}
              <span className="dn-tag bull">$75k +6.77M</span> (was +13.60M —
              trimmed −6.8M),{' '}
              <span className="dn-tag bull">$78k +6.50M</span>,{' '}
              <span className="dn-tag bull">$90k +6.13M</span>,{' '}
              <span className="dn-tag bull">$73.5k +5.35M</span> (new wall
              right at spot — call/put OI 279 / 135 small but tight to the
              cycle anchor).{' '}
              <span className="dn-em">
                The $70k–$72k negative cluster grew to −21.52M (vs −16.89M
                on 05-31), and the $74k / $75k positive walls trimmed
                −11.9M combined — the post-31MAY-settle redistribution
                concentrated negative gamma deeper below and trimmed
                positive support just above. The dealer book is still bid
                into a fade and offered into a squeeze, but the bid sits
                further away if spot drops below $72k
              </span>. 1JUN26 0.2DTE{' '}
              <span className="dn-tag bull">+22.40M</span> settles at 08:00Z
              today (~5h35m after our snapshot anchor); the GEX file is
              03-min stale at 02:22Z and includes the 1JUN chunk, so the
              aggregate-shortcut for ex-1JUN reads +41.6M − 22.4M ≈{' '}
              <span className="dn-tag bull">+19.2M</span>, still net positive.
              Forward expiries individually: 2JUN 1.2 −0.50M, 3JUN 2.2 +0.33M,
              4JUN 3.2 +0.09M, 5JUN 4.2 −4.47M (new near-term negative chunk),
              12JUN 11.2 +0.18M, 19JUN 18.2 −1.71M, 26JUN 25.2 +1.59M, 31JUL
              60.2 +13.72M, 28AUG 88.2 +0.18M, 25SEP 116.2 +10.16M, 25DEC
              207.2 +11.82M, 26MAR27 298.2 +1.38M.{' '}
              <span className="dn-em">
                Reconciliation disclosure: the forward-expiry strip listed
                above sums to{' '}
                <span className="dn-tag">+32.77M</span>, NOT the +19.2M the
                aggregate shortcut gives. The source builder
                (btc_gex.html&rsquo;s aggregate +41.6M at lines 155-156 and
                its by-expiry strip at lines 263-339) does not currently add;
                the discrepancy is ~$13.6M. We carry the +19.2M figure for
                continuity with the trade-book and decision-conditions
                language because the shortcut is the cleaner desk read, but
                the reader should treat any ex-1JUN claim as bounded between
                +19.2M (aggregate-minus-1JUN) and +32.77M (sum of the listed
                forward strip) until the GEX builder is reconciled. We are
                NOT presenting the listed strip as reconstructing the
                shortcut
              </span>. No single forward expiry carries amplifier-grade
              negative gamma; the heaviest near-term negative on the strip is
              5JUN26 4.2 DTE at −4.47M (small) and the heaviest near-term
              positive is 1JUN26 0.2 DTE at +22.40M (settling today). The
              dampening regime stays intact after today&rsquo;s settle on
              either reconciliation.
            </p>

            <p>
              IV median across 928 instruments is{' '}
              <span className="dn-tag">40.7%</span> (was 39.9% / 938
              instruments on 05-31 — a +0.8pt vol firm as the 31MAY 0DTE
              cleared and 1JUN 0.2DTE moved into the front of the curve)
              against 30D close-to-close RV of{' '}
              <span className="dn-tag">24.75%</span> — chain-level richness
              <span className="dn-tag">~+16.0pt</span>. 928 instruments today
              vs 938 on 05-31 — the −10 is the 31MAY 0DTE chunk clearing
              without a near-dated replacement. RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily
              log returns (= 31 consecutive daily closes) anchored to
              parquet last bar 2026-06-01 02:18Z; range $73,428 – $79,389
              over the underlying 31-close window. (For reference, last 29
              returns / 30 closes reads 25.18%; the 24.75% page value comes
              from 30 returns.) A chain-median across N instruments,{' '}
              <span className="dn-em">not</span> a tradable spread;
              expiry-/strike-level vega, skew and term structure remain not
              loaded; the vol read stays framework-only.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · panel render 05-31 22:15Z is ~4.2h stale (Tier-1 unchanged from 05-31 v2) · DXY firmed to 99.01 (+0.10 vs 05-31&rsquo;s 98.91) · Fed net liq ticked −$0.058T weekly · BTC-vs-TradFi decoupling re-widened to −6.98pt (was −5.84pt) as BTC slipped while NQ held</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro panel refreshed once overnight but Tier-1 lines
                printed the same values; today reads a fresh render whose
                level numbers happen to match yesterday&rsquo;s page
              </span>. Dashboard render is 2026-05-31 22:15Z, ~4.17h before
              the 06-01 02:25Z snapshot — this <em>is</em> a fresh render
              relative to the 05-31 v2 note (which read the 05-30 22:15Z
              render); the Tier-1 levels happen to be unchanged but the
              render itself is new. US 10Y nominal{' '}
              <span className="dn-tag bull">4.45%</span>, regime z{' '}
              <span className="dn-tag bear">+1.43</span>, episodic z{' '}
              <span className="dn-tag">+0.20</span> — RISK-OFF tag,
              unchanged. 10Y TIPS real{' '}
              <span className="dn-tag bull">2.06%</span>, still RISK-OFF.
              5Y5Y BE inflation{' '}
              <span className="dn-tag">2.24%</span> — flat. HY OAS{' '}
              <span className="dn-tag">2.72%</span>, regime z{' '}
              <span className="dn-tag bull">−1.32</span>, episodic z{' '}
              <span className="dn-tag bull">−1.72</span> — still a deep
              risk-on episodic, unchanged. MOVE bond vol{' '}
              <span className="dn-tag">70.2</span> — still &ldquo;loose&rdquo;.
              The two lines that moved: DXY{' '}
              <span className="dn-tag bear">99.01 (+0.10 day)</span>, episodic
              z <span className="dn-tag">+0.78</span> — firmed back ~one tick
              after the 05-31 ease (98.91); Fed net liquidity{' '}
              <span className="dn-tag bear">$5.872T (−$0.058T fresh weekly
              print)</span>, episodic z{' '}
              <span className="dn-tag bear">−2.28</span> — a small weekly
              tick out of the panel. USD/JPY{' '}
              <span className="dn-tag bull">159.26</span> unchanged; USD/CNY{' '}
              <span className="dn-tag bull">6.7657</span> unchanged; US-JP
              10Y spread{' '}
              <span className="dn-tag bull">1.94%</span> unchanged.{' '}
              <span className="dn-em">
                Net: the re-grow gates (HY OAS &gt; 2.78%, 10Y &gt; 4.53%)
                are still 6bp / 8bp from firing — unchanged from 05-31. The
                reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE at
                4.45%. The macro tape stays net risk-on on the lines that
                matter for BTC, with DXY firming a touch and Fed net liq
                ticking down a hair. The BTC-vs-TradFi decoupling re-widened
                to −6.98pt this print (BTC −4.94% vs NQ +2.04%) from
                −5.84pt on 05-31 — yesterday&rsquo;s narrowing reversed
                because BTC re-extended down (−1.10pt deeper drawdown over
                7d) while NQ held flat
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
                <tr><td>US 10Y nominal</td><td className="num">4.45%</td><td className="num">−3.0bp</td><td className="num bear">+1.43</td><td className="num">+0.20</td><td className="bear">tight (panel-flat 24h)</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.06%</td><td className="num">−3.0bp</td><td className="num bear">+1.31</td><td className="num">+0.70</td><td className="bear">tight · still RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.24%</td><td className="num">0.0bp</td><td className="num">+0.08</td><td className="num">−0.16</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.72%</td><td className="num">+1.0bp</td><td className="num bull">−1.32</td><td className="num bull">−1.72</td><td className="bull">loose · risk-on episodic</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.510</td><td className="num">0.00</td><td className="num">+0.10</td><td className="num bull">−0.81</td><td className="stale">stale 9d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">70.2</td><td className="num">+0.48</td><td className="num bull">−0.57</td><td className="num">−0.49</td><td className="bull">loose · unchanged</td></tr>
                <tr><td>DXY</td><td className="num">99.01</td><td className="num bear">+0.10</td><td className="num">+0.58</td><td className="num">+0.78</td><td className="bear">firmed · +0.10 vs 05-31 page</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.872T</td><td className="num bear">−0.058T</td><td className="num">+0.22</td><td className="num bear">−2.28</td><td className="bear">fresh weekly print, small tick down</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.26</td><td className="num">−0.01</td><td className="num bear">+1.19</td><td className="num">+0.68</td><td className="bull">unchanged</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.94%</td><td className="num">−3.0bp</td><td className="num bull">−0.93</td><td className="num">+0.20</td><td className="bull">unchanged</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7657</td><td className="num">−0.01</td><td className="num bull">−1.93</td><td className="num bull">−2.15</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp (monthly)</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 02:00Z
              — <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.231</span>{' '}
              (loosened further from 05-29&rsquo;s 0.264 and 05-31&rsquo;s
              0.237 — now sits well inside the IDIOSYNCRATIC band). BTC&rsquo;s
              listed ties weakened further: CL{' '}
              <span className="dn-tag">−0.327</span> (top |r|, was −0.375),
              TSLA <span className="dn-tag">+0.304</span> (was +0.333), NQ{' '}
              <span className="dn-tag">+0.302</span> (was +0.372 — dropped to
              third by |r| as BTC re-decoupled), BRENT{' '}
              <span className="dn-tag">−0.289</span>, EUR{' '}
              <span className="dn-tag">+0.274</span> (new high entry — FX
              cluster firming as a BTC tie), SP500{' '}
              <span className="dn-tag">+0.271</span> (was +0.328), GOLD{' '}
              <span className="dn-tag">+0.252</span> (was +0.300), PLAT{' '}
              <span className="dn-tag">+0.252</span>, AMZN{' '}
              <span className="dn-tag">+0.227</span>, META{' '}
              <span className="dn-tag">+0.211</span>, SILVER{' '}
              <span className="dn-tag">+0.211</span> (was +0.324), NVDA{' '}
              <span className="dn-tag">+0.185</span> (was +0.239). 7d
              performance:{' '}
              <span className="dn-tag bear">BTC −4.94%</span> (worse than
              05-31&rsquo;s −3.84% — BTC re-extended down by 1.10pt over
              7d), NQ <span className="dn-tag bull">+2.04%</span> (held),
              SP500 <span className="dn-tag bull">+0.88%</span> (improved
              from +0.13%), JP225{' '}
              <span className="dn-tag bull">+2.99%</span> (cooled from +4.49%),
              MSFT <span className="dn-tag bull">+9.28%</span> (TradFi leader,
              was +8.35%), META{' '}
              <span className="dn-tag bull">+3.56%</span>, TSLA{' '}
              <span className="dn-tag bull">+0.11%</span>, AAPL{' '}
              <span className="dn-tag bear">−0.47%</span>, NVDA{' '}
              <span className="dn-tag bear">−2.19%</span>. Metals soft: GOLD{' '}
              <span className="dn-tag bear">−0.81%</span>, SILVER{' '}
              <span className="dn-tag bear">−2.67%</span>. Energy still soft:
              CL <span className="dn-tag bear">−2.00%</span>, BRENT{' '}
              <span className="dn-tag bear">−2.29%</span>, NGAS{' '}
              <span className="dn-tag bull">+11.80%</span> (gas re-firmed).{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine re-widened to ~−6.98pt
                (BTC −4.94% vs NQ +2.04%) from −5.84pt on 05-31 — the gap
                opened back up by 1.14pt because BTC slipped while NQ held;
                the 05-31 read of &ldquo;BTC stopped extending&rdquo; did not
                survive the 05-31 → 06-01 print. Endogenous-to-crypto remains
                the load-bearing read; macro pulse continues to ease but BTC
                is not catching up
              </span>. JGB monthly 2.52% carries EXTREME RISK-OFF monthly tag
              — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · runner closed 29MAY (status carried) · cover-bounce scout re-tightened to a NEW trigger geometry (W-SMA20 dead, D-EMA20 cluster now the line) · macro tail closed on 29MAY settle · no fresh trades on this snap</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 05-31 trade book carries cleanly into today, but the
                scout&rsquo;s W-SMA20 trigger is mechanically dead and must
                be re-anchored
              </span>. The 05-29 runner short stays closed (no roll, no
              add). The 29MAY put-spread tail stays closed (no roll; the
                macro re-grow gates moved 1bp further away on HY OAS).
              The cover-bounce scout from 05-31 had two unmet legs (W-SMA20
              reclaim, short_btc bleeds &lt; 38k); the W-SMA20 leg is now{' '}
              <em>structurally meaningless</em> because the W-SMA20 caught
              down to $73,146, sitting at the cycle-anchor band. A 1h close
              above the W-SMA20 now just means &ldquo;spot ticked sideways&rdquo;
              — it carries no information about an overhead reclaim. We
              re-tighten the trigger to the next genuine overhead band: the{' '}
              <span className="dn-tag bear">D-EMA20 / D-SMA150 / D-EMA50
              cluster at $75,869 / $76,065 / $76,080</span> (a $200 tight
              triple-MA wall). The short_btc leg stays as is but tightens to{' '}
              &lt; 39k (less aggressive than the 38k from 05-31, given the
              short side stacked to 42k and is now bleeding from there).
              Today&rsquo;s trade book is: no shorts, no scout entry, no
              fresh hedge — wait for two legs (a real D-EMA20 cluster
              reclaim AND a short_btc &lt; 39k bleed) before scout-long. No
              new short at the cycle anchor into a positive-gamma dealer
              book even though the leverage book re-firmed: a fresh short
              here needs a fresh structural fuel source (a re-stack
              hostile-2 print, a 1d close below the cycle anchor, or a fresh
              negative GEX chunk added to the front strip), and none have
              arrived.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">closed · primary · status carried from 05-31 · closed on 29MAY 08:00Z expiry settle</span>
              <div className="dn-trade-name">
                Flip-extend short — closed on 29MAY 08:00Z expiry settle (status carried from 05-31; no re-open)
              </div>
              <div className="dn-thesis">
                The 05-29 runner pressed inside the −96.34M 29MAY amplifier
                window, ran its full ladder (W-EMA200 seed $73,710, D-SMA100
                $72,958), and closed on the 29MAY 08:00Z settle. Today&rsquo;s
                tape did not re-arm this trade: there was no re-stack
                hostile-2 signature, no 1d close below the cycle anchor, no
                fresh negative GEX chunk added to the front strip. The
                short side did stack +1,891 over 24h but slow-drift not
                step. Reopening short here requires a fresh structural
                setup — not a roll of this one.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (amplifier settle) · no residual position · no re-open this snap</span></div>
                <div><span className="dn-lvl-k">re-open gating</span><span className="dn-lvl-v">fresh re-stack hostile-2 signature (Δshort &gt; +500 AND Δlong &lt; −500 same minute, ideally Δnet ≤ −3k) AND 1h close &lt; $73,130 — the absent piece today</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no new short at the cycle anchor into a positive-gamma dealer book on slow-drift short-side stacking alone</span></div>
              </div>
              <div className="dn-gating">
                <b>Trade closed; not re-armed.</b> The leverage book firmed
                back overnight (funding cap re-engaged, OI +915, short
                stacked +1.9k) but the structural fuel that would justify a
                fresh short entry is absent: dealer book is net-long-gamma
                +41.6M (post-1JUN-settle ex-1JUN ≈ +19.2M), flip is static,
                and the discrete-extension signature has not printed. The
                framework discipline says wait for the signature, do not
                anticipate it.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · DEFERRED · trigger geometry RE-ANCHORED (W-SMA20 dead) · 2 legs required (D-EMA20 cluster AND short_btc bleed)</span>
              <div className="dn-trade-name">
                Cover-bounce scout — DEFERRED, trigger re-anchored from W-SMA20 (dead) to the D-EMA20 / D-SMA150 / D-EMA50 cluster
              </div>
              <div className="dn-thesis">
                The 05-31 scout&rsquo;s two-leg trigger was &ldquo;1h close
                &gt; $74,161 W-SMA20 AND short_btc bleeds &lt; 38k inside
                4h&rdquo;. The W-SMA20 caught down to $73,146 on the fresh
                weekly bar — sitting in the same cycle-anchor confluence band
                as D-SMA100 $73,200 (a $54 spread, not equal-to-the-dollar) —
                so a 1h close above $73,146 fires on the next sideways tick
                and carries zero information about an overhead reclaim. The
                W-SMA20 leg is{' '}
                <em>mechanically dead</em>; the trigger must re-anchor
                against the next genuine overhead band. That band is the
                D-EMA20 / D-SMA150 / D-EMA50 triple-MA cluster at
                $75,869 / $76,065 / $76,080 — a tight $211 wall. We
                also tighten the short_btc leg to{' '}
                <em>&lt; 39k</em> (vs 38k on 05-31) given the short side
                stacked to 42.28k and is now bleeding off that peak — a
                bleed back below 39k inside 4h would be a meaningful
                short-cover read. The flip side: the structural backdrop
                actually walked back slightly (funding back at cap, OI
                re-grew, short stacked, BTC-vs-TradFi decoupling re-widened
                by 1.14pt), so the asymmetry is no longer obviously
                improving — the scout stays deferred until both legs print.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-anchored trigger (2 of 2 legs required)</span><span className="dn-lvl-v bull">1h close &gt; $75,869 (D-EMA20 cluster reclaim, a real overhead reclaim — the prior W-SMA20 $74,161 leg is dead) AND SM short_btc bleeds &lt; 39k inside 4h</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on trigger print, scout long 0.2R · the structural backdrop is mixed (gamma still +41.6M, but funding back at cap, OI +915, short stacked +1.9k)</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1d close &lt; $73,146 (W-SMA20 / lower edge of the cycle-anchor confluence band — D-SMA100 sits $54 above at $73,200; a daily close below the lower edge of the band ends the digestion read; tightened from 1h close given the dual-MA confluence raises false-break risk on a 1h basis)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$77,275 (D-SMA50) then $77,317 (W-EMA20)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · take half at D-SMA50 then trail to entry</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> trigger ~$75,869, stop $73,146 (1d close basis)
                = ~$2,723 risk; first target $77,275 = ~$1,406 reward —{' '}
                <em>that is 0.52:1, worse than 05-29&rsquo;s 0.64:1</em>; the
                higher trigger eats reward AND the 1d-close stop widens
                risk. The R/R is unfavorable on a single-target basis;
                this trade only works if the scout can ride a meaningful
                reclaim into the second target (W-EMA20 $77,317 → 0.53:1) or
                further. <b>Hard rule:</b> do NOT enter scout long until
                both legs print — the W-SMA20-reclaim shortcut from 05-31
                is dead, and a single-leg entry on either leg alone reads
                as a false signal. If the asymmetry stays this thin and
                neither leg fires inside the next 24h, the scout is
                stand-down material, not entry material.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">closed · macro tail · status carried from 05-31</span>
              <div className="dn-trade-name">
                Downside put-spread — closed on 29MAY 08:00Z settle; no roll (re-grow gates unchanged 6bp / 8bp from fire)
              </div>
              <div className="dn-thesis">
                The 29MAY put-spread tail (long $74k / short $70k put)
                settled at the Deribit 08:00Z print on 05-29 inside the
                −96.34M dealer gamma chunk. No roll today: the macro
                re-grow gates are unchanged from 05-31 (HY OAS at 2.72%,
                6bp from the 2.78% gate; 10Y at 4.45%, 8bp from the 4.53%
                gate). The reclaim-long rates filter (10Y &lt; 4.55%) is
                still TRUE at 4.45%. No fresh hedge needed at the cycle
                anchor inside a positive-gamma book.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (Deribit 29MAY settle) · no residual position · no roll</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (next Tier-1 print)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.72%, 6bp to fire) OR 10Y &gt; 4.53% close (currently 4.45%, 8bp to fire)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — still TRUE at 4.45%; awaits BTC-internal pivot</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates (HY OAS &gt; 2.78%, 10Y &gt;
                4.53%) are discretionary watches set as the levels drift
                down, not backtested breakpoints. The macro panel <em>did</em>
                refresh overnight (today reads 2026-05-31 22:15Z, ~4.17h
                before the snap; the 05-31 page read the 2026-05-30 22:15Z
                render — so today&rsquo;s is a fresh render relative to
                yesterday&rsquo;s), and the Tier-1 levels happen to be
                unchanged at the new render — that is &ldquo;values unchanged
                across two daily renders&rdquo;, not the v1 draft&rsquo;s
                miswording of &ldquo;same render reused&rdquo; or &ldquo;28h
                lag&rdquo;. The 1JUN26
                0.2DTE +22.40M settles at 08:00Z today, ~5h35m after the
                snap; this is a positive chunk clearing inside a
                net-long-gamma book and is consistent with the dampening
                regime continuing post-settle.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · short-side stacking signature WITHOUT re-stack hostile-2 · slow-drift add on a flat long side · one-sided risk-build watch</span>
              <div className="dn-trade-name">
                Short-side stacking — slow-drift add (+1,891 short / +228 long over 24h) with NO discrete-extension signature; the position book is one-sidedly heavier without a step
              </div>
              <div className="dn-thesis">
                The 05-31 framework expected re-stack hostile-2 signatures
                (Δshort &gt; 0 AND Δlong &lt; 0 same minute, with magnitude)
                to remain &ldquo;a meaningful tape read when they
                print&rdquo;, no calendar prior. Across this 24h window, no
                re-stack hostile-2 signature fired. The largest single-
                minute Δnet was{' '}
                <span className="dn-tag">−1,300 @ 2026-05-31 14:26Z (BJ
                22:26 05-31)</span>{' '}
                with Δlong −891 and Δshort +409 — a soft echo of the
                05-30 BJ 22:01 step (Δnet −5,569 with Δshort +2,446 same
                minute), well below the −3k / hostile-2 magnitude
                threshold. Instead the short side stacked +1,891 BTC by
                slow drift across the full window while the long side
                stayed pinned near the lineage-low (range 10.89k / 12.41k).{' '}
                <span className="dn-em">
                  This is a new failure mode of the discrete-step framework:
                  one-sided risk build on a flat counter-side, without a
                  step. The book is heavier short without a marker; the
                  cadence framework has nothing to gate on. Watchlist
                  expanded: a sustained 4h short_btc add &gt; +1k with
                  long_btc Δ in [−250, +250] counts as a slow-drift stack
                  signature in its own right
                </span>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">cadence broken (per 05-31) AND now one-sided slow-drift stacking emerged as a separate signature — re-stack hostile-2 still gates, but is not the only meaningful tape read</span></div>
                <div><span className="dn-lvl-k">slow-drift stack threshold</span><span className="dn-lvl-v">4h Δshort_btc &gt; +1k AND |Δlong_btc| ≤ 250 AND |Δnet/h| ≤ 1k (no discrete step) — re-read each 4h close</span></div>
                <div><span className="dn-lvl-k">today&rsquo;s reading</span><span className="dn-lvl-v">24h Δshort +1,891 / Δlong +228 / net Δ −1,663 / max |Δnet/min| −1,300 — the slow-drift threshold is met on the 24h aggregate; the 4h aggregate recomputed against the 02:25Z live pin (baseline live_db line 41267 / 06-01 06:25 BJ to anchor line 41507) is short +243, long +44, net −199 (this replaces the v1 draft&rsquo;s short +132 / long −62 / net −195, which used the wrong baseline; the qualitative threshold result is unchanged but the components match the actual pin now) — the stack signature is a 24h signal here, not a 4h signal</span></div>
                <div><span className="dn-lvl-k">forward gating</span><span className="dn-lvl-v">if next 24h adds a fresh +1k short on a flat long without a 1d close &lt; cycle anchor, treat as a continuing slow-drift stack; if it pairs with a 1d close &lt; $73,146, that combination escalates to cycle-ladder break + short concentration (re-open short watch fires)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the 05-31 falsification of the
                BJ 13–15 cadence was correct, and the 06-01 tape
                introduces a fresh signature class that the cadence
                framework did not anticipate — slow-drift one-sided
                stacking without a step. Treat it as a separate watch:
                step-based hostile-2 readings still gate the high-
                conviction re-arm, but slow-drift stacks now gate a
                continuation-watch when paired with a cycle-anchor
                close-basis break. The framework expands; it does not
                replace.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the dampening regime held on close but the leverage book rebuilt one-sided short · cycle anchor still holds · W-SMA20 caught down to the anchor band (scout trigger re-anchored) · 1JUN +22.40M settles in 5h35m</span>
            </h2>

            <p>
              Of the 05-31 decision conditions: the 31MAY26 expiry settle
              FIRED clean (+17.00M cleared, aggregate trimmed −21.3M from
              +62.9M to +41.6M; the 05-31 page&rsquo;s ex-31MAY ~+45.9M sat
              above today&rsquo;s ex-1JUN forward ~+19.2M per the aggregate
              shortcut, with the by-expiry-strip reconciliation caveat noted
              in §III — both readings still positive); the cover-bounce
              scout DID NOT TRIGGER (W-SMA20 leg never closed above $74,161
              — 1h close peak $74,144 on 05-31 04:00Z came within $17 but
              did not clear; short_btc never bled below 38k, it actually
              stacked back to 42.28k); the cycle anchor lost test DID NOT
              FIRE (05-31 close $73,653, 06-01 in-progress $73,491 — both
              above $73,146); the cycle anchor holds + gamma stays positive
              FIRED (both legs true on close basis); the press re-extends
              condition DID NOT FIRE (largest single-minute Δnet was
              −1,300, well above the −3k threshold; SM net at −30,922 sits
              above the −32k threshold); the cycle-cadence-falsified
              framework held (no calendar-tied step; the short-side stack
              came on slow drift, not a step). The macro re-grow gates
              moved 1bp on HY OAS and stayed put on 10Y. The reclaim-long
              rates filter stayed TRUE at 4.45%.{' '}
              <em>Three structural conditions fired clean (31MAY settle,
              cycle anchor holds + gamma positive, macro filter true), one
              did not trigger (the scout), and the framework signal class
              expanded (slow-drift stacking emerged as a separate watch).</em>{' '}
              The conditions today re-set around a re-anchored scout
              trigger, an unchanged but trimmed dealer cushion, and a new
              slow-drift stack watch:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>01JUN26 expiry settles (today 08:00Z, ~5h35m after snap)</td><td>+22.40M positive chunk clearing; aggregate goes +41.6M → ex-1JUN ≈ +19.2M per the aggregate shortcut (the by-expiry strip sums to +32.77M instead; source aggregate-vs-strip do not currently add, see GEX paragraph), still net positive on either reconciliation (no vol-event expected)</td><td>no action required — the dampening regime carries post-settle, just with a thinner cushion</td></tr>
                <tr><td>Cover-bounce scout (long) — RE-ANCHORED</td><td className="bull">1h close &gt; $75,869 (D-EMA20 cluster reclaim — W-SMA20 leg is DEAD because it caught down to the cycle anchor) AND SM short_btc bleeds &lt; 39k inside 4h</td><td>scout long 0.2R, target $77,275 (D-SMA50) then $77,317 (W-EMA20) — R/R is poor on the single target (0.52:1), only works if it rides to the second</td></tr>
                <tr><td>Cycle anchor lost (cycle-regime escalation)</td><td className="bear">1d close &lt; $73,146 (W-SMA20 / lower edge of cycle-anchor confluence band; D-SMA100 sits $54 above at $73,200)</td><td>first cycle-ladder break of the lineage — separate reassessment; the &ldquo;digestion-above-anchor&rdquo; thesis is falsified; pairs with short-stack signature to re-open short watch</td></tr>
                <tr><td>Cycle anchor holds + gamma stays positive</td><td className="bull">1d closes hold &gt; $73,146 (W-SMA20 lower edge; D-SMA100 $73,200 sits above) AND aggregate GEX stays positive (no fresh negative chunk added inside the 5JUN/12JUN expiry pair)</td><td>digestion-above-anchor read holds with thinner cushion; scout asymmetry tracks the D-EMA20 cluster reclaim, not the dead W-SMA20</td></tr>
                <tr><td>Press re-extends (low base rate, threshold strict)</td><td className="bear">fresh re-stack hostile-2 (Δshort &gt; +500 AND Δlong &lt; −500 same minute with Δnet ≤ −3k) AND 1h close &lt; $73,130 AND SM net pushes &lt; −32k</td><td>cycle-3 ignition signal — would re-arm short with stop at D-EMA20 $75,869 reclaim; base rate is low because the cadence is broken and the slow-drift stacking is filling some of the short build without a step</td></tr>
                <tr><td>Slow-drift stack (NEW · expanded framework)</td><td className="bear">4h Δshort_btc &gt; +1k AND |Δlong_btc| ≤ 250 AND |Δnet/min| ≤ 1k across the window</td><td>watchlist signal; alone is informational only; paired with a 1d close &lt; $73,146 escalates to re-open short watch</td></tr>
                <tr><td>Macro tail re-grow (gates unchanged)</td><td className="bear">HY OAS &gt; 2.78% (6bp to fire) OR 10Y &gt; 4.53% (8bp to fire)</td><td>roll hedge to 5JUN/12JUN forward; tail +0.1R toward primary</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — still TRUE at 4.45%; awaits BTC-internal pivot</td><td>standalone filter true; needs BTC-internal cover-bounce trigger to translate to scout long</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the cycle-anchor confluence band (D-SMA100 $73,200
                / W-SMA20 $73,146 — a $54 spread, not the &ldquo;to the
                dollar&rdquo; framing the v1 garbled) holds on the next 1d
                close as the 1JUN +22.40M settles and the leverage book
                stays one-sided. A 1d close below the lower edge of the band
                ($73,146 W-SMA20) paired with continuing slow-drift short
                stacks re-arms the short watch without needing a step; a
                clean reclaim of the D-EMA20 $75,869 cluster on a 1h close
                basis with the short side bleeding back below 39k inside 4h
                fires the re-anchored scout. Either outcome is structurally cleaner than the
                in-between
              </span>. Until then this note runs as written: the runner and
              the put-spread tail are closed, the cover-bounce scout is
              re-anchored to the D-EMA20 cluster (the W-SMA20 trigger died
              of price-mean catchdown), the cycle-cadence framework is
              expanded to include slow-drift stacking as a separate
              watchlist signature, and the macro tape continues to ease
              without firing the re-grow gates. The BTC-vs-TradFi
              decoupling re-widened to −6.98pt as BTC re-extended; the
              engine MTF frames whipsawed bear; the 1d dropped below the
              cloud; the dealer book trimmed cushion but stayed
              net-long-gamma. The right read for the next 24h is{' '}
              <em>patient — confirm with two legs, not one; and watch the
              cycle anchor for a close-basis break</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit · findings recorded in audits/2026-06-01-desk-note.md)
            </span>
            <b>Status:</b> v2 — post STAGE B codex hostile audit. STAGE B
            ran Codex CLI at <code>xhigh</code> reasoning effort against the
            v1 draft authored from the 2026-06-01 02:25Z atomic snapshot,
            with arithmetic and parquet reads via{' '}
            <code>/opt/btc-data/.venv/bin/python3</code>. The v1 verdict was{' '}
            <b>BLOCK-CRITICAL — 1 CRITICAL + 5 MAJOR + 3 MINOR findings</b>;
            do-not-publish v1 until the D-SMA100/W-SMA20 break and the
            source-scope/staleness disclosures are fixed. STAGE C applied
            every finding&rsquo;s suggested fix in place; v2 is the
            audited file.{' '}
            <b>Findings applied (all 9):</b>{' '}
            <em>DN-001 (CRITICAL) D-SMA100 / W-SMA20 confluence</em> — the
            v1 repeatedly called the two MAs &ldquo;equal to the dollar&rdquo;
            while the draft itself printed a $54 spread; the stop label also
            crossed the two. v2 rewrites every reference (manifest band,
            lead, §I, §II MA paragraph, trade-book stop, decision-conditions
            rows, signal-line closing paragraph) to state &ldquo;same
            cycle-anchor confluence band, $54 spread&rdquo;, keeps stop at
            $73,146 and labels it as the W-SMA20 / lower edge of the band
            (D-SMA100 $73,200 sits $54 above), and explicitly retracts the
            v1 &ldquo;to the dollar&rdquo; framing.{' '}
            <em>DN-002 (MAJOR) MA matrix source-scope</em> — the page uses
            the 2024-2026 1m parquet window for the MA matrix; the
            user-stated wildcard btcusdt_1m_*.parquet actually includes
            2019-2026 and would compute W-SMA150 ~$74,750 / W-SMA200
            ~$61,859 / W-EMA150 ~$75,408 / W-EMA200 ~$69,123. v2 adds an
            explicit scope disclosure in the manifest band, the §II MA
            paragraph, this audit-trace block, and the footer — the cycle
            window stays for lineage continuity, the full-history numbers
            are disclosed for the reader.{' '}
            <em>DN-003 (MAJOR) macro staleness</em> — the v1 carried two
            contradictory stories (manifest said 4.2h stale vs 05-31
            22:15Z; the trade caveat said 28h lag from 05-30 22:15Z). v2
            normalizes to: today reads a fresh 2026-05-31 22:15Z render
            (~4.17h before the 02:25Z snap; the 05-31 page read the
            05-30 22:15Z render, so this is a new daily render with Tier-1
            levels happening to print unchanged across the two renders).
            The 28h claim is removed.{' '}
            <em>DN-004 (MAJOR) MTF provenance</em> — the v1&rsquo;s 02:16Z
            MTF scan was overwritten on the rolling latest file before the
            audit could pin it; the closest recoverable artifact at audit
            time was 02:31Z and disagreed in several cells (15m water-up
            death 6b vs v1 5b; 30m water-down death 2b vs v1 1b; scan spot
            $73,460 vs v1 $73,470). v2 keeps the v1 table values as
            authored but flags them <em>unauditable rolling-artifact
            residue</em> in the manifest band and the §II table note; the
            pipeline follow-up is to ship timestamped MTF archives.{' '}
            <em>DN-005 (MAJOR) funding Δ24h tile</em> — the v1
            &ldquo;+4.90% → +6.60% (+1.70pt)&rdquo; was a snap-to-snap
            comparison against the 05-31 note, not the rolling 24h baseline
            (true 24h-window-open raw 0.005615 × 1095 = +6.15% ann; live
            +6.60% = +0.45pt). Cap re-engagement is 79× by raw row count
            (79 / 1), ~55× if dividing the displayed/rounded percents 5.48%
            / 0.1% — v1 read 54× from the rounded ratio. v2 relabels the
            tile as &ldquo;vs 05-31 note (snap-to-snap)&rdquo;, discloses
            the +0.45pt 24h-baseline reading, and corrects 54× → 79× by
            row count.{' '}
            <em>DN-006 (MAJOR) GEX ex-1JUN reconciliation</em> — the
            aggregate-shortcut (+41.6M − 22.4M = +19.2M) and the by-expiry
            forward strip (which sums to +32.77M from 2JUN through 26MAR27)
            do not currently add in the source builder (btc_gex.html
            aggregate lines 155-156 vs strip lines 263-339). v2 carries the
            +19.2M shortcut for desk-book continuity but discloses the
            $13.6M reconciliation gap in the manifest band, the §III dealer
            paragraph, the decision-conditions row, and (here) the audit
            trace, and explicitly does not present the listed strip as
            reconstructing the shortcut.{' '}
            <em>DN-007 (MINOR) 4h slow-drift</em> — v1 said short +132 /
            long −62 / net −195; recomputed against the 02:25Z live pin
            (4h baseline live_db line 41267 to anchor line 41507) the true
            components are short +243 / long +44 / net −199. v2 prints the
            corrected components in the trade-book row; the qualitative
            threshold result is unchanged.{' '}
            <em>DN-008 (MINOR) live tail</em> — v1 said &ldquo;file tail
            at audit time = pin&rdquo;; the rolling live file had already
            advanced to line 41519 / 02:37Z by audit time. v2 rewrites
            the manifest row as &ldquo;snapshot pinned to live_db.json
            line 41507; source tail is rolling&rdquo;.{' '}
            <em>DN-009 (MINOR) ex-31MAY → ex-1JUN typo</em> — v1 said
            &ldquo;ex-31MAY ~+45.9M sat above ex-31MAY +19.2M ex-1JUN
            forward&rdquo;; v2 rewrites as &ldquo;the 05-31 page&rsquo;s
            ex-31MAY ~+45.9M sat above today&rsquo;s ex-1JUN forward
            ~+19.2M&rdquo; with the strip-vs-aggregate reconciliation
            cross-reference.{' '}
            <b>Codex-confirmed clean (carried as-is in v2):</b> requireViewer
            gating structure (import :3; first statement of async default
            export :24-25; route argument matches the page path); JSX/markup
            integrity (single &lt;main&gt;, single &lt;article&gt;, both
            closed; <code>colSpan=&#123;7&#125;</code> matches the 7-col MTF table; <code>tsc --noEmit</code>
            exit 0); live-tape core at pin (spot $73,493, 24h −0.869%, H/L
            $74,223.03 / $73,278.01, OI +915.36 BTC / +0.8806%, SM long
            +227.5, short +1,890.9, net −1,663.4, no re-stack hostile-2
            signature in 24h, largest single-minute Δnet −1,300 @ BJ 22:26
            05-31); funding raw arithmetic (0.006028 × 1095 = +6.6007%; 24h
            mean +6.7976%; range +3.1229% / +10.95%; cap rows 79 / 1441 =
            5.4823%; BJ/UTC trough and peak conversions correct); flow
            windows (24h spot CVD +5,142.1, futures CVD −336.0, big-print
            −12.28 BTC / 538 prints; 4h price −0.501%, OI −131.9 BTC, spot
            CVD −238.3, futures CVD −60.5; 1h price −0.148%, OI −80.3 BTC,
            spot CVD −1,187.6, futures CVD −189.4); GEX headlines (Deribit
            idx $73,757, median IV 40.7%, total GEX +41.6M, flip $72,766,
            spot distance +0.999%, idx distance +1.362%, top walls $80k
            +23.76M / $70k −12.05M / $82k +11.05M / $72k −9.47M / $73.5k
            +5.35M); IV/RV (30D RV recompute from 31 daily closes is
            24.7457%; 40.7% − 24.7457% = 15.95pt; the 29-return alt is
            25.1824%); cross-asset (generated 2026-06-01T02:00+00:00, 22
            assets, 167 rows, mean |r| 0.231, BTC −4.94%, NQ +2.04%, gap
            −6.98pt); macro Tier-1 values match the 05-31 22:15Z source
            (10Y 4.45%, TIPS 2.06%, HY OAS 2.72%, MOVE 70.2, DXY 99.01,
            Fed net liq $5.872T, USD/JPY 159.26, USD/CNY 6.7657, JGB
            monthly 2.52%); claims-vs-loaded-data discipline (NTT / max-pain
            / strike-level IV / BTC-NQ ratio NOT LOADED; cross-asset uses
            loaded returns/correlations not a BTC/NQ ratio series; IV is
            chain-median not a tradable spread); forward-looking immediate
            trade posture (no fresh short, scout long deferred and re-anchored
            to D-EMA20 cluster, size 0.2R only on two-leg trigger).{' '}
            <b>Open issues left for the pipeline (not blocking publish):</b>{' '}
            MTF pinnability (rolling latest-only files keep forcing
            unverifiable audit gaps — needs timestamped MTF archives); GEX
            aggregate-vs-expiry additivity (a possible builder artifact, v2
            discloses but does not fix the source); MA matrix scope is a
            choice not a defect (cycle window vs full wildcard — disclosed,
            not switched); live-tape rolling beyond the snapshot pin (v2
            wording corrected, pipeline still produces rolling-only live
            files).{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1; Next
            16.2.6 hard-exits on Node &lt; 20.9.0 at{' '}
            <code>node_modules/next/dist/bin/next:24-28</code>, so a full{' '}
            <code>next build</code> is environment-blocked (lineage from
            05-21 through 05-31). <code>npx --no-install tsc --noEmit</code>{' '}
            remains the build proxy; STAGE C re-ran it after applying every
            v2 fix and exit was 0.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-06-01 02:25Z)
            with section-level provenance disclosed in the manifest band
            above; the macro Tier-1 panel render is 2026-05-31 22:15Z
            (~4.17h before snapshot; a fresh daily render relative to the
            05-31 page&rsquo;s 05-30 22:15Z render, with Tier-1 levels
            happening to print unchanged across the two renders) and some inputs are explicitly stale
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
                The amplifier era stays over, the dampening regime stays
                intact on close. But the leverage book rebuilt one-sided
                short overnight, the W-SMA20 trigger died of price-mean
                catchdown, and the scout re-anchors against the D-EMA20
                cluster. Patient — two legs, not one.
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
            v2 · 2026-06-01 02:25Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet
            (2024-2026 cycle window — full wildcard includes 2019-2026, see
            §II MA-scope disclosure) · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
