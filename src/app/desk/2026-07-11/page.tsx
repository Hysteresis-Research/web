import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-11 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-11',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-11' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260711() {
  await requireViewer('/desk/2026-07-11');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-11 · v2</span>
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
              <span className="dn-big">$64,138</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.43%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-11 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-11 00:07Z (snapshot pin · BJ 08:07 row)</td>
                  <td className="dn-flag">
                    fresh · 1-min · anchor pinned to t=&ldquo;07-11 08:07&rdquo;
                    (BJ) = 00:07Z; the file tail keeps appending, so all windows
                    are frozen to this pinned index. Snapshot &ldquo;now&rdquo;
                    values (spot, retail, SM net, funding) use the exact BJ 08:07
                    pin; 24h deltas span 1,440 one-minute intervals / 1,441
                    sampled rows inclusive, ending at the pin (24h-ago = the BJ
                    08:07 07-10 sampled row). No cb_cvd
                    / fut_cvd counter reset inside the 24h window this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-11 00:01Z scan (BJ 08:01)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · ~6-min stale vs snapshot
                    anchor · in-progress bars · scan archived in
                    /opt/desk-note/snapshots/2026-07-11-0007/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-11 00:00Z snapshot</td>
                  <td className="dn-flag">
                    ~7-min stale vs anchor · Deribit idx $64,431 vs live spot
                    $64,137.88 (idx $293 above) · 876 instruments · 11JUL26
                    0.3DTE +15.54M settles 08:00Z today (post-snapshot); the
                    entire near strip is positive — no near-dated negative
                    amplifier
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-11 00:00Z
                  </td>
                  <td className="dn-flag">~7-min lag · 7d 1h bars · 22 assets · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-10 22:16Z render</td>
                  <td className="dn-flag">
                    ~1.85h render lag · FRED Tier-1: 10Y 4.54% (−2.0bp,
                    RISK-OFF, eased below the 4.55% reclaim-long filter), TIPS
                    2.31% (0.0bp, EXTREME), HY OAS 2.70% (0.0bp, RISK-ON), MOVE
                    69.5 (eased), DXY 100.94 (−0.11, EXTREME), Fed net liq
                    $5.958T (+0.118T, EXTREME RISK-ON) · Tier-3 inflation rows
                    stale (70d monthly)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-11 00:06Z (close $64,090.00)</td>
                  <td className="dn-flag">
                    offsets recomputed vs live spot $64,137.88 · full 2019→ glob
                    loaded (358 weekly bars) so the entire W-matrix incl
                    W-SMA150 / W-SMA200 is computable this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle-floor watch JSON</td>
                  <td className="dn-v-cell">weekly_200sma.json · ABSENT this cut</td>
                  <td className="dn-flag">
                    canonical watch JSON not present on the server → ratio
                    percentile / last-event stay unsourced (not fabricated);
                    floor recomputed directly from the parquet W-MON W-SMA200
                    ($63,072.50) per the runbook fallback
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale · monthly (70d) · do not treat as live</td>
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
              <span className="dn-v">+10.95% (at cap)</span>
              <span className="dn-src">live · raw 0.01%/8h = the Binance cap × 1095 · 24h mean +9.08% ann (was +6.96% on 07-10) · cap occupancy 472 / 1441 sampled rows = 32.8% (was 15.9%) · 0 negative rows · max +10.95% (cap) @ 07-10 16:16Z (BJ 00:16 07-11) · trough +4.85% @ 07-10 05:11Z (BJ 13:11 07-10) — never went negative</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+9.97% → +10.95% (+0.98pt, pinned to the cap)</span>
              <span className="dn-src">tape-internal 24h · 24h-ago +9.97% ann → now at the +10.95% cap · 24h mean firmed to +9.08% (from +6.96%) · zero negative rows two cuts running — leverage longs paying the cap to hold the squeeze</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">+3.50% (+3,514.7 BTC)</span>
              <span className="dn-src">live · a real gross build (was −0.11% flat on 07-10) · SM long_btc +3,737 / short_btc −2,114 — a long rebuild plus a short cover expanded gross into the bounce</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bull">55.94 / 44.06</span>
              <span className="dn-src">live_db `mkt_long_pct` · BJ 08:07 pin · bled 59.39 → 55.94 (−3.45pt) as price ROSE +1.43% — retail kept EXITING longs into the up-move, a second straight day of de-crowding</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−2,057.1 (net SHORT, covered hard)</span>
              <span className="dn-src">live · long 12,124.9 − short 14,182.0 · 24h-ago net −7,908.2 · 24h net max −1,239.7 @ 07-10 20:31Z (BJ 04:31 07-11), min −7,942.2 @ 07-10 00:26Z (BJ 08:26 07-10); short_btc 24h max 16,394.0 @ 07-10 05:01Z (BJ 13:01 07-10), long_btc 24h max 12,801.5 @ 07-10 20:31Z</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · 24h step</span>
              <span className="dn-v bull">−7,908 → −2,057 (covered +5,851, cut fraction 74%)</span>
              <span className="dn-src">net covered +5,851 on a long rebuild (+3,737) plus a short cover (−2,114); |Δ|/prior_net = 5,851 / 7,908 = 74% — SM unwound three-quarters of its net short INTO the +1.43% extension, the exact mirror of 07-10&rsquo;s short build</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.1% / 30.26%</span>
              <span className="dn-src">GEX median IV · 876 inst · 30D close-to-close RV (30 returns / 31 closes; 29-ret alt 30.79%) · chain richness ~+10.8pt · P/C OI ratio 0.54 (call OI 232,462)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+4.31% (above)</span>
              <span className="dn-src">flip $61,485 (was $61,215 on 07-10) · vs live spot $64,137.88 (+4.31%; 64,137.88/61,485 − 1 = 4.315%) / GEX file Deribit idx $64,431 (+4.79%; 64,431/61,485 − 1 = 4.792%, file rounds +4.8%) — both refs positive · aggregate GEX +131.8M net-long-gamma (was +125.6M on 07-10 — DEEPENED)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The short-fueled squeeze the 07-10 note called structurally
                suspect has converted — smart money covered the short hard,
                open interest built, and the perp book bought
              </span>. Over 24h SM net covered from{' '}
              <span className="dn-tag bear">−7,908</span> to{' '}
              <span className="dn-tag">−2,057</span> — a +5,851 unwind (long
              rebuild +3,737, short cover −2,114,{' '}
              <span className="dn-tag bull">cut fraction 74%</span>) that took back
              three-quarters of the net short INTO a{' '}
              <span className="dn-tag bull">+1.43%</span> up-print, the exact
              mirror of yesterday&rsquo;s short build. OI expanded{' '}
              <span className="dn-tag bull">+3,514.7 BTC (+3.50%)</span> — a real
              gross build, not the flat tape of 07-10 — and the perp side did the
              buying (futures CVD +749, taker +788, big-print +1,068) while spot
              CVD was flat-to-offered (−193). Price extended to{' '}
              <span className="dn-tag bull">$64,138</span>, the 07-10 daily{' '}
              <span className="dn-tag bull">CLOSED $64,129.50</span> — the highest
              close of the recovery, above even the 07-06 reclaim top $64,023.60 —
              and the in-progress 07-13 weekly close{' '}
              <span className="dn-tag bull">$64,090.00 sits +1.61% above the
              $63,072.50 W-SMA200 floor</span>, with the floor cushion widened from
              +0.24% to <span className="dn-tag bull">+1.69%</span>.{' '}
              <span className="dn-em">
                But the fuel is short-covering, not a fresh spot-demand base:
                retail kept bleeding longs (−3.45pt to 55.94%), funding pinned to
                the +10.95% cap (24h mean +9.08%, zero negative rows, 32.8% cap
                occupancy), and the MTF fast frames printed a top-div cluster
                (15m/30m/1h/4h) plus a 15m ⚡ TD9 SELL — the squeeze is stretched,
                not confirmed.
              </span>{' '}
              The dealer book DEEPENED to{' '}
              <span className="dn-tag bull">+131.8M net-long-gamma</span> (from
              +125.6M) with the $64k–$66k positive wall band capping and the flip
              $61,485 spot +4.31% below. Book stays{' '}
              <span className="dn-em">FLAT</span>, but the cover-bounce scout&rsquo;s
              demand gate has FLIPPED constructive for the first time of the
              recovery — the SM short that leaned against the bounce is being
              unwound, OI is building, the perp bid showed up, and the rates filter
              flipped back TRUE (10Y eased to 4.54%, under the 4.55% gate). The
              single line remains the Mon 07-13 weekly close vs the $63,072 floor,
              now printing +1.61% clear.
            </p>

            <p>
              BTC prints <span className="dn-tag">$64,138</span> live,{' '}
              <span className="dn-tag bull">+1.43%</span> on 24h (24h-ago
              $63,232), inside a{' '}
              <span className="dn-tag">$64,666 / $62,954</span> range (high @
              07-10 13:52Z / BJ 21:52 07-10, low @ 07-10 00:35Z / BJ 08:35
              07-10).{' '}
              <span className="dn-signal">
                The recovery printed its highest daily close yet and pushed the
                in-progress week clear of the floor
              </span>: daily closes 07-06{' '}
              <span className="dn-tag bull">$64,023.60</span> (the prior reclaim
              top), 07-07 <span className="dn-tag bear">$63,335.40</span>, 07-08{' '}
              <span className="dn-tag bear">$62,255.30</span> (the one close below
              the floor), 07-09 <span className="dn-tag bull">$63,197.00</span>{' '}
              (back above), 07-10{' '}
              <span className="dn-tag bull">$64,129.50</span> (a +$932.50 up-day,
              the highest close of the recovery), 07-11 in-progress{' '}
              <span className="dn-tag bull">$64,090.00</span>. The MA matrix holds
              three positive offsets, all widened from 07-10: spot sits{' '}
              <span className="dn-tag bull">+3.63% above D-SMA20 $61,891.55</span>,{' '}
              <span className="dn-tag bull">+1.96% above D-EMA20 $62,906.78</span>,
              and{' '}
              <span className="dn-tag bull">+1.69% above the 200W floor W-SMA200
              $63,072.50</span> — the floor cushion more than sextupled from the
              +0.24% sliver of yesterday.{' '}
              <span className="dn-em">
                The reclaimed floor is now clean support beneath price rather than
                a level spot is riding — the $61.9k–$63.1k band sits ~1–4% under
                spot, and the first overhead resistance is the D-SMA50/D-EMA50
                pair, which the extension has pulled up to within ~1.6–1.8%.
              </span>{' '}
              Above the D-SMA50 the ladder is deep and in order: D-EMA50 $65,331.75
              (−1.83%), then the gap up to D-EMA100 $68,868.47 (−6.87%) / W-EMA200
              $68,947.26 (−6.98%), D-SMA150 $70,058.88 (−8.45%), D-SMA100
              $70,766.09 (−9.37%) and the weekly cluster above. The cover-bounce
              scout&rsquo;s price pre-condition stays TRUE on all four legs (spot
              above the flip AND D-EMA20 AND D-SMA20 AND the floor); this cut the
              demand block joins it, with the rates filter — a second gate that was
              FALSE on 07-10 — flipped back TRUE at 10Y 4.54%.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · SM COVERED the short hard (long +3,737, short −2,114, net −7,908→−2,057, covered +5,851, cut fraction 74%) · retail kept EXITING longs −3.45pt · OI BUILT +3.50% · funding pinned to the cap, zero negative rows · the fade thesis unwound INTO the extension</span>
            </h2>

            <p>
              <span className="dn-signal">
                Smart money covered the short into a rising tape — the fade
                thesis of 07-10 unwound in a single session
              </span>. Over the 24h window SM net covered from{' '}
              <span className="dn-tag bear">−7,908.2</span> to{' '}
              <span className="dn-tag">−2,057.1</span>, a +5,851 unwind built from
              long_btc{' '}
              <span className="dn-tag bull">8,387.9 → 12,124.9 (+3,737)</span> and
              short_btc{' '}
              <span className="dn-tag bull">16,296.1 → 14,182.0 (−2,114)</span>.
              The long side rebuilt harder than the short side covered, so net
              retraced three-quarters of the way to flat:{' '}
              <span className="dn-em">
                cut fraction |Δ|/prior_net = 5,851 / 7,908 = 74%
              </span>{' '}
              (a valid ratio — the −7,908 base is real, the largest net short of
              the pullback). The window opened at net −7,908.2 @ 07-10 00:07Z and
              SM net troughed{' '}
              <span className="dn-tag bear">−7,942.2 @ 07-10 00:26Z (BJ 08:26
              07-10)</span> 19 minutes later, then covered steadily to{' '}
              <span className="dn-tag">−1,239.7 @ 07-10 20:31Z (BJ 04:31
              07-11)</span> — the least short of the window — before drifting back
              to −2,057 into the pin; short_btc peaked{' '}
              <span className="dn-tag bear">16,394.0 @ 07-10 05:01Z (BJ 13:01
              07-10)</span> then bled ~2,200, and long_btc topped{' '}
              <span className="dn-tag bull">12,801.5 @ 07-10 20:31Z</span>. OI over
              the same window BUILT{' '}
              <span className="dn-tag bull">+3,514.7 BTC (+3.50%)</span> — a real
              gross expansion (vs the −0.11% flat tape of 07-10), so the short
              cover was <em>not</em> a de-grossing; both books grew and the net
              rotated toward flat.{' '}
              <span className="dn-em">
                A short cover + long rebuild + gross build into a +1.43% up-print
                is the positioning shape of a squeeze that got covered — the SM
                short that fueled the bounce is being unwound, which is
                constructive, but the buyer of record is the perp book covering,
                not a fresh spot-demand base.
              </span>
            </p>

            <p>
              <span className="dn-signal">
                Retail kept exiting longs as price rose — a second straight day
                of de-crowding, not a chase
              </span>. `mkt_long_pct` bled{' '}
              <span className="dn-tag bull">59.39% → 55.94% (−3.45pt)</span> across
              the 24h as spot printed +1.43% — the crowd shed longs into the
              extension for the second cut running, the opposite of a euphoric
              top-chase. The leverage side, by contrast, firmed to the ceiling:
              funding sits{' '}
              <span className="dn-tag bear">+10.95% ann live — at the Binance
              cap</span> (raw 0.01%/8h × 1095), 24h mean{' '}
              <span className="dn-tag bear">+9.08% ann</span> (firmed from the
              07-10 note&rsquo;s +6.96%), range{' '}
              <span className="dn-tag">+4.85% / +10.95%</span> with the trough @
              07-10 05:11Z (BJ 13:11 07-10) and the path{' '}
              <span className="dn-em">never negative</span> (zero negative rows for
              a second cut), cap occupancy climbing to{' '}
              <span className="dn-tag">472 / 1441 sampled rows (32.8%)</span> from
              15.9%. Perp trades a{' '}
              <span className="dn-tag bear">−$37.88 discount</span> to spot at the
              snap (24h mean −$47.04, range −$129.12 / +$160.50 — basis touched a
              wide premium intraday but sat discount on the mean). 1-min aggregate
              skew snap <span className="dn-tag bull">+19.1</span> (24h mean −5.83)
              — a buy tilt into the pin.{' '}
              <span className="dn-em">
                Funding pinned to the cap while retail sheds longs and SM covers
                shorts is the signature of a crowded, leveraged squeeze: the
                marginal long is a perp buyer paying the cap to hold, funded by
                the SM short covering — a re-rating of the short, not a demand base
                that would show up as spot-CVD absorption. The tape has improved
                but the fuel is still short-side, and the near-cap funding says the
                long side is stretched.
              </span>
            </p>

            <p>
              Windowed flow is <em>perp-led into the 24h build, with spot
              carrying the last four hours</em>. 24h: price{' '}
              <span className="dn-tag bull">+1.43%</span>, OI{' '}
              <span className="dn-tag bull">+3,514.7 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −193.1</span> (clean, no reset in the
              window), futures CVD{' '}
              <span className="dn-tag bull">Δ +748.8</span>, taker-net{' '}
              <span className="dn-tag bull">+788.3</span>, big-print{' '}
              <span className="dn-tag bull">+1,068.1 BTC</span> —{' '}
              <span className="dn-em">
                the perp book and takers bought the build while spot CVD leaked
                slightly negative; a futures-led expansion with SM covering, the
                inverse of 07-10&rsquo;s spot-bid / perp-passive squeeze — demand
                showed up in the perp this cut, but not yet in spot
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bull">+0.44%</span>, OI{' '}
              <span className="dn-tag bull">+446.2 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,214.6</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −761.4</span>, taker-net{' '}
              <span className="dn-tag bear">−757.6</span>, big-print{' '}
              <span className="dn-tag bear">−659.0 BTC</span> — <em>spot bid,
              futures and big prints offered as the perp leg took profit into the
              print</em>. 1h: price{' '}
              <span className="dn-tag bull">+0.15%</span>, OI{' '}
              <span className="dn-tag bear">−193.9 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +442.4</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +105.0</span>, taker-net{' '}
              <span className="dn-tag bull">+113.3</span>, big-print{' '}
              <span className="dn-tag bull">+130.0 BTC</span> — <em>a mild
              two-sided bid with OI ticking down as some perp longs de-grossed near
              the highs</em>. The read: the 24h build was perp-led with SM
              covering, and the most recent 4h shows spot finally taking the bid as
              futures rotated out — the demand is broadening from perp toward spot,
              but the 1h OI tick-down says the long side is starting to lock in near
              the top of the range.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF frame tally rolled a hair LESS bearish (4 long / 2 short / 4 neutral, regime 5/9) but the fast frames printed a top-div cluster (15m/30m/1h/4h) + 15m ⚡ TD9 SELL · 8h flipped to a water-up golden cross, 3d water-down golden cross just printed · higher-TF bottom-div cluster narrowed to 1d/3d · 1w water-down death cross persists · 1M ⚡ TD9 BUY persists · MA matrix three positive lines, all widened</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF engine lifted its mid frames but stacked a fresh
                exhaustion warning on the fast ones
              </span>. The scan reads 4 long / 2 short / 4 neutral across 10 frames
              (15m/30m/1h long, 4h/8h/12h neutral, 1d/3d short, 1w neutral, 1M
              long), a{' '}
              <span className="dn-tag">5/9 cycle-momentum regime (JT ≥ 0) —
              trend-continuation primary</span>, net &ldquo;higher-TF bearish,
              short-term bounce&rdquo; (was 4 long / 3 short / 3 neutral, 6/9 on
              07-10 — the frame tally shed a short but the regime score ticked one
              notch toward the middle). The mid frames flipped up on the
              extension: the{' '}
              <span className="dn-tag bull">8h printed a water-up golden cross (2
              bars back)</span> — a strong above-water cross joining the 4h water-up
              golden cross (now 7b) — and the{' '}
              <span className="dn-tag">3d water-down golden cross just printed</span>{' '}
              (an early below-water long probe on the cycle frame). Against that, two
              warnings hardened: a{' '}
              <span className="dn-tag bear">fast-frame top-div cluster on
              15m/30m/1h/4h</span> (four top divergences at the highs) plus a{' '}
              <span className="dn-tag bear">15m ⚡ TD9 SELL</span> — the classic
              stretched-bounce signature on the sub-hour frames — while the{' '}
              <span className="dn-tag bear">1w water-down death cross (2 bars back)</span>{' '}
              persists unchanged from 07-10. The counter-signal side still carries a{' '}
              <span className="dn-tag bull">higher-TF bottom-div cluster (1d/3d)</span>{' '}
              (narrowed from 07-10&rsquo;s 4h/12h/1d/3d as the fast frames rolled to
              top-divs) and the persistent{' '}
              <span className="dn-tag bull">1M ⚡ TD9 BUY</span>.{' '}
              <span className="dn-em">
                Read straight: the extension lifted the engine and mid frames
                (8h/4h golden crosses, RSI 55–61 across the sub-daily) and probed a
                3d golden cross, but the fast frames are now flashing exhaustion
                (top-div cluster + 15m TD9 SELL) into near-cap funding — a
                bearish-trend regime carrying a stretched short-term bounce that has
                started to print reversal warnings, not a clean turn.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,137</td><td className="num bull">57.9</td><td className="neut">golden (water-dn) 14b</td><td className="neut">in cloud 64.1–64.2k 3b</td><td>⚡ TD9 SELL</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">64,137</td><td className="num bull">55.2</td><td className="bull">golden (water-up) 3b</td><td className="bull">above ↓63.9k 7b</td><td>Sell 8→9</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">64,137</td><td className="num bull">58.2</td><td className="bear">death (water-up) 10b</td><td className="bull">above ↓62.8k 23b</td><td>Sell 4</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">64,137</td><td className="num bull">60.4</td><td className="bull">golden (water-up) 7b</td><td className="bull">above ↓62.6k 46b</td><td>Buy 1</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">64,137</td><td className="num bull">60.8</td><td className="bull">golden (water-up) 2b (just printed)</td><td className="bull">above ↓62.5k 6b</td><td>Sell 5</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">64,137</td><td className="num bull">59.5</td><td className="neut">golden (water-dn) 19b</td><td className="bull">above ↓63.8k 刚穿 (just crossed)</td><td>Sell 3</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">64,137</td><td className="num">53.7</td><td className="neut">golden (water-dn) 10b</td><td className="bear">below ↑66.3k 40b</td><td>Sell 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">64,137</td><td className="num bear">44.0</td><td className="neut">golden (water-dn) 刚印 (just printed)</td><td className="bear">below ↑71.7k 13b</td><td>Sell 3</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">64,137</td><td className="num bear">38.9</td><td className="bear">death (water-dn) 2b</td><td className="bear">below ↑98.7k 23b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">64,137</td><td className="num">43.9</td><td className="neut">—</td><td className="bull">above ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (BJ 08:01; rolling
                    latest file, archived verbatim in
                    /opt/desk-note/snapshots/2026-07-11-0007/). Header alerts:{' '}
                    <em>8h water-up golden cross 2b</em>,{' '}
                    <em>3d water-down golden cross just printed</em>,{' '}
                    <em>1w water-down death cross 2b</em>,{' '}
                    <em>15m ⚡ TD9 SELL</em>, <em>1M ⚡ TD9 BUY</em>. Net read{' '}
                    <em>4 long / 2 short / 4 neutral · higher-TF bearish,
                    short-term bounce · ⚠ higher-TF bottom-div cluster (1d/3d) +
                    fast-frame top-div cluster (15m/30m/1h/4h)</em>. Regime 5/9
                    cycle-momentum (JT ≥ 0), trend-continuation primary. Scan spot
                    $64,137, 24h +1.49% (Binance perp kline window; the live-tape
                    24h reads +1.43% off spot −1440min, a different reference and
                    window), H/L $64,680 / $62,897, qVol $8.89B. Closes are
                    in-progress bars; treat every value as provisional until each
                    TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the floor reclaim strengthening on the daily.
              Spot $64,138 holds three positive offsets, all widened from 07-10 —{' '}
              <span className="dn-tag bull">+3.63% above D-SMA20 $61,891.55</span>,{' '}
              <span className="dn-tag bull">+1.96% above D-EMA20 $62,906.78</span>,
              and{' '}
              <span className="dn-tag bull">+1.69% above the 200W floor W-SMA200
              $63,072.50</span> — and sits below every line above:{' '}
              <span className="dn-tag bear">D-SMA50 $65,177.46 (−1.60%)</span>,{' '}
              <span className="dn-tag bear">D-EMA50 $65,331.75 (−1.83%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $68,868.47 (−6.87%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $68,947.26 (−6.98%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $70,058.88 (−8.45%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $70,741.52 (−9.33%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $70,766.09 (−9.37%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $71,506.26 (−10.30%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $72,024.18 (−10.95%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $73,995.43 (−13.32%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,726.58 (−14.17%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $74,939.71 (−14.41%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $76,164.73 (−15.79%)</span>,{' '}
              then the disused deep weeklies W-EMA100 $80,216.57 (−20.04%), W-EMA50
              $80,423.97 (−20.25%), W-SMA50 $87,651.40 (−26.83%), W-SMA100
              $88,608.94 (−27.62%). The near-line set is now a widened $61.9k–$63.1k
              support band ~1–4% beneath spot, then the D-SMA50/D-EMA50 pair pulled
              up to within ~1.6–1.8% — the first overhead resistance the extension
              has to clear.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-11 00:06Z (close
                $64,090.00); offsets recomputed against live spot $64,137.88.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. Full 2019→ parquet glob loaded (358 weekly bars), so
                W-SMA150 / W-SMA200 are computable this cut — no seed-only
                disclosure needed. Daily closes: 07-06 $64,023.60, 07-07
                $63,335.40, 07-08 $62,255.30, 07-09 $63,197.00, 07-10 $64,129.50,
                07-11 (in-progress) $64,090.00 — the 07-10 close is the highest of
                the recovery and sits above both the $63,072.50 floor and the
                07-06 reclaim top. 30D close-to-close RV 30.26% (logret.std × √365 ×
                100 on 30 returns / 31 closes; 29-return alt 30.79%).
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DEEPENED net-long-gamma to +131.8M (was +125.6M) · flip $61,485 spot +4.31% above · $65k +25.11M heaviest wall, the $64k–$66k band caps · $60k −12.55M the lone negative in the top-10 bids the fade · entire strip positive — 25SEP flipped to +1.10M, no near-dated negative amplifier (11JUL +15.54M settles 08:00Z)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book deepened its long-gamma dampening as the
                extension carried spot deeper into the positive wall band
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+131.8M / 1%</span> (was +125.6M on
              07-10 — re-deepened to a fresh recovery high), firmly dampening. The
              0-γ flip is <span className="dn-tag">$61,485</span> (was $61,215) and
              spot $64,138 sits{' '}
              <span className="dn-tag bull">+4.31% above</span> on spot math
              (64,137.88 / 61,485 − 1 = +4.315%); the GEX file&rsquo;s own
              &ldquo;dist to flip&rdquo; reads{' '}
              <span className="dn-tag bull">+4.8%</span> off its Deribit-index
              $64,431 ($293 above live spot), which is{' '}
              <span className="dn-tag bull">+4.79%</span> (64,431 / 61,485 − 1 =
              +4.792%) — both references positive, spot above the flip on both, the
              cushion re-widened from the 07-10 note&rsquo;s +3.28% as price
              extended away from the flip. The wall map straddles spot with the
              heaviest positive walls just overhead:{' '}
              <span className="dn-tag bull">$65k +25.11M</span> (~+1.3%),{' '}
              <span className="dn-tag bull">$66k +22.57M</span>,{' '}
              <span className="dn-tag bull">$64k +21.28M</span> (right at spot),{' '}
              <span className="dn-tag bull">$70k +19.44M</span>,{' '}
              <span className="dn-tag bull">$68k +18.13M</span>,{' '}
              <span className="dn-tag bull">$64.5k +11.03M</span>,{' '}
              <span className="dn-tag bull">$80k +8.84M</span>,{' '}
              <span className="dn-tag bull">$67k +8.08M</span>,{' '}
              <span className="dn-tag bull">$72k +6.88M</span>; the only negative in
              the top-10 is{' '}
              <span className="dn-tag bear">$60k −12.55M</span>, sitting below as the
              fade magnet.{' '}
              <span className="dn-em">
                The book caps a squeeze into the dense $64k–$66k positive band (the
                +25.11M / +22.57M / +21.28M cluster is a heavy overhead lid right
                where price is) and bids a fade toward $60k (where the −12.55M
                cluster amplifies a break of the floor) — a dampening profile that
                keeps price pinned between the flip and $66k until an expiry or a
                spot flow breaks it.
              </span>{' '}
              By expiry there is no near-dated negative amplifier anywhere: 11JUL
              0.3DTE <span className="dn-tag">+15.54M</span> (settles 08:00Z today,
              post-snapshot, positive), 12JUL 1.3 +6.48M, 13JUL 2.3 +5.91M, 14JUL
              3.3 +0.10M, 17JUL 6.3 +40.15M, 24JUL 13.3 +11.91M, 31JUL 20.3
              +46.41M (the heaviest forward chunk, positive), 28AUG 48.3 +8.30M,
              25SEP 76.3 <span className="dn-tag bull">+1.10M</span> (flipped
              positive from the −0.93M lone negative of 07-10), 25DEC 167.3 +2.88M,
              26MAR27 258.3 +1.08M, 25JUN27 349.3 +0.56M. The entire strip is
              positive — even the 25SEP forward flipped green — so the bounce ran
              with no gamma tailwind and a fade would run with no gamma accelerant
              until price loses the flip.
            </p>

            <p>
              IV median across 876 instruments is{' '}
              <span className="dn-tag">41.1%</span> against 30D close-to-close RV
              of <span className="dn-tag">30.26%</span> — chain-level richness{' '}
              <span className="dn-tag">~+10.8pt</span> (a touch wider than the
              07-10 note&rsquo;s +9.6pt as realized eased into the range). Put/Call
              OI ratio <span className="dn-tag">0.54</span> (call OI 232,462 BTC) —
              call-heavy open interest, consistent with the positive-gamma wall band
              overhead.{' '}
              <span className="dn-em">
                A chain-median across N instruments, <em>not</em> a tradable
                spread; expiry-/strike-level vega, skew and term structure remain
                not loaded, so the vol read stays framework-only.
              </span>{' '}
              RV methodology: 30D close-to-close, logret.std × √365 × 100 on the
              last 30 daily log returns (= 31 consecutive daily closes) anchored to
              parquet last bar 2026-07-11 00:06Z; the 29-return alt reads 30.79%. IV
              at 41.1% is a hair below the 07-10 note&rsquo;s 41.7% — the chain
              eased marginally as the extension printed, but the +10.8pt richness
              says implied still leads realized.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · rates EASED (10Y 4.54%, −2bp) — the reclaim-long rates filter (10Y &lt; 4.55%) flips back TRUE, the 10Y re-grow gate (&gt;4.53%) stays fired but barely · TIPS 2.31% EXTREME · DXY 100.94 EXTREME unchanged · Fed net liq $5.958T EXTREME RISK-ON · HY credit RISK-ON 2.70% · cross-asset flat at |r| 0.315 NORMAL, BTC +2.22% still leading NQ +0.82% by +1.40pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape stayed split but the rates leg eased just enough to
                flip the reclaim-long filter back on
              </span>. Dashboard render is 2026-07-10 22:16Z, ~1.85h before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bull">4.54% (−2.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.82</span>, episodic z{' '}
              <span className="dn-tag">+1.21</span> — RISK-OFF, but eased below the
              4.55% reclaim-long threshold. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.31% (0.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.77</span>, episodic z{' '}
              <span className="dn-tag bear">+1.62</span> — EXTREME RISK-OFF. 5Y5Y BE
              inflation <span className="dn-tag">2.20% (+2.0bp)</span> — no tag. HY
              OAS <span className="dn-tag bull">2.70% (0.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.21</span>, episodic z{' '}
              <span className="dn-tag bull">−0.59</span> — RISK-ON, unchanged and
              still loose. MOVE bond vol{' '}
              <span className="dn-tag">69.5</span> — neutral, eased from the 07-10
              note&rsquo;s 72.4. DXY{' '}
              <span className="dn-tag bear">100.94 (−0.11)</span>, regime z{' '}
              <span className="dn-tag bear">+2.10</span> — EXTREME RISK-OFF,
              unchanged; Fed net liquidity{' '}
              <span className="dn-tag bull">$5.958T (+0.118T)</span>, episodic z{' '}
              <span className="dn-tag bull">+2.47</span> — EXTREME RISK-ON, carrying
              the same fresh weekly print. US-JP 10Y spread{' '}
              <span className="dn-tag">1.89% (−2.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag">162.36 (−0.18)</span>; USD/CNY 6.7667.{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) flips back to
                TRUE at 4.54% (it was cleanly FALSE at 4.56% on 07-10) — the second
                scout gate, dark yesterday, is lit again. The put-spread re-grow
                gate&rsquo;s 10Y leg stays FIRED but barely — 4.54% is 1bp above the
                4.53% trigger — and the HY OAS leg stays un-fired, 8bp below the
                2.78% trigger. The OR-gate is still tripped on rates and credit is
                loose, but the book carries no held hedge, so the fire remains a
                watch-event, not an auto-roll. The macro pulse eased at the margin
                (rates −2bp, MOVE lower) while the dollar and liquidity held.
              </span>{' '}
              JGB monthly 2.65% (stale 70d) carries EXTREME RISK-OFF — do not lean
              on it.
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
                <tr><td>US 10Y nominal</td><td className="num">4.54%</td><td className="num bull">−2.0bp</td><td className="num bear">+1.82</td><td className="num">+1.21</td><td className="bear">tight · RISK-OFF · eased under 4.55%</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.31%</td><td className="num">0.0bp</td><td className="num bear">+2.77</td><td className="num bear">+1.62</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.20%</td><td className="num bear">+2.0bp</td><td className="num">−0.37</td><td className="num">−0.61</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.70%</td><td className="num">0.0bp</td><td className="num bull">−1.21</td><td className="num bull">−0.59</td><td className="bull">loose · RISK-ON</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.515</td><td className="num">−0.01</td><td className="num">−0.06</td><td className="num bull">−2.13</td><td className="neut">neutral · episodic</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">69.5</td><td className="num bull">eased</td><td className="num bull">−0.50</td><td className="num">−0.44</td><td className="neut">neutral · off 72.4</td></tr>
                <tr><td>DXY</td><td className="num">100.94</td><td className="num">−0.11</td><td className="num bear">+2.10</td><td className="num">+0.72</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.958T</td><td className="num bull">+0.118T</td><td className="num">+2.42</td><td className="num bull">+2.47</td><td className="bull">EXTREME RISK-ON</td></tr>
                <tr><td>USD/JPY</td><td className="num">162.36</td><td className="num">−0.18</td><td className="num bear">+1.56</td><td className="num">+1.30</td><td className="neut">no tag</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.89%</td><td className="num bull">−2.0bp</td><td className="num bull">−0.79</td><td className="num">+1.21</td><td className="bull">tight</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7667</td><td className="num">−0.03</td><td className="num bull">−1.48</td><td className="num">−0.82</td><td className="neut">no tag</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.24%</td><td className="num bear">+1.0bp</td><td className="num bull">−1.36</td><td className="num">−0.67</td><td className="neut">no tag</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="num">+1.43</td><td className="stale">monthly (70d) · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.315</span> —{' '}
              <span className="dn-signal">
                the coupling held flat in the NORMAL band
              </span>{' '}
              (was 0.320 on 07-10, 0.295 IDIOSYNCRATIC two cuts back). BTC&rsquo;s
              listed ties are led by the equity + metals complex: SP500{' '}
              <span className="dn-tag">+0.427</span>, SILVER{' '}
              <span className="dn-tag">+0.424</span>, NQ{' '}
              <span className="dn-tag">+0.421</span>, GOLD{' '}
              <span className="dn-tag">+0.412</span>, COPPER{' '}
              <span className="dn-tag">+0.402</span>, TSLA{' '}
              <span className="dn-tag">+0.394</span>, PLAT{' '}
              <span className="dn-tag">+0.387</span>, CL{' '}
              <span className="dn-tag">−0.339</span>, BRENT{' '}
              <span className="dn-tag">−0.326</span>, GOOGL{' '}
              <span className="dn-tag">+0.289</span>, MSFT{' '}
              <span className="dn-tag">+0.287</span>, NVDA{' '}
              <span className="dn-tag">+0.283</span>. 7d performance:{' '}
              <span className="dn-tag bull">BTC +2.22%</span> (still the complex
              leader over the trailing week, but the lead is narrowing as the 06-30
              low rolls out of the window), NQ{' '}
              <span className="dn-tag bull">+0.82%</span>, SP500{' '}
              <span className="dn-tag bull">+1.28%</span>, JP225{' '}
              <span className="dn-tag bear">−0.07%</span>, NVDA{' '}
              <span className="dn-tag bull">+7.36%</span>, META{' '}
              <span className="dn-tag bull">+13.48%</span> (the complex leader),
              AAPL <span className="dn-tag bull">+2.29%</span>, TSLA{' '}
              <span className="dn-tag bull">+2.18%</span>, MSFT{' '}
              <span className="dn-tag bear">−1.55%</span>. Metals soft: GOLD{' '}
              <span className="dn-tag bear">−1.30%</span>, SILVER{' '}
              <span className="dn-tag bear">−4.08%</span>, PLAT{' '}
              <span className="dn-tag bear">−0.84%</span>. Energy ripped
              (negatively correlated to BTC): CL{' '}
              <span className="dn-tag bull">+3.82%</span>, BRENT{' '}
              <span className="dn-tag bull">+5.23%</span>, NGAS{' '}
              <span className="dn-tag bear">−9.89%</span>.{' '}
              <span className="dn-em">
                BTC still leads the equity engine on the trailing 7d (+2.22% vs NQ
                +0.82% = +1.40pt, unchanged from 07-10&rsquo;s +1.66pt read to
                within the window roll) because the window still opens near the
                06-30 low, but the gap keeps closing as that low ages out; the
                coupling is the load-bearing macro read, with SP500/SILVER/NQ/GOLD
                (all ~+0.41–0.43) BTC&rsquo;s tightest ties and the risk-off metals
                + equity complex the frame to watch.
              </span>
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 200W reclaim watch — in-progress week +1.61% clear of the floor, the highest recovery close printed, the re-confirm-break trigger firmly dis-armed (still unsettled until Mon 07-13) · cover-bounce scout — price pre-condition TRUE and DEMAND block FLIPPED constructive (SM covered, OI built, perp bought), rates filter back TRUE; the narrowest gate of the recovery, deferred on covering-fuel + stretched fast frames · macro tail — rates leg still fired, credit loose, no held hedge · squeeze-cycle — SM COVERED (no re-stack) · no fresh trades</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book stays flat, but the primary watch strengthened and the
                scout&rsquo;s demand gate finally lit
              </span>. The reclaim that was handed back intra-week on 07-09 and
              retaken on 07-10 is now printing its strongest reading of the
              recovery: the in-progress 07-13 weekly close $64,090.00 is +1.61%
              above the floor, spot is +1.69% above, and the 07-10 daily close
              $64,129.50 is the highest of the recovery, above both the floor and
              the 07-06 reclaim top. The re-confirm-break trigger — a completed
              07-13 weekly close under the floor — is firmly dis-armed, but it is{' '}
              <span className="dn-em">not</span> resolved either way (the week
              settles Mon 07-13). The cover-bounce scout&rsquo;s price pre-condition
              stays TRUE on all four legs, and this cut the demand block — bearish
              on 07-10 (SM shorting, retail fleeing) — FLIPPED constructive: SM
              covered three-quarters of its net short, OI built, the perp book
              bought, and the rates filter flipped back TRUE. That is the narrowest
              the scout gate has been all recovery. The reason to still defer is the
              fuel: the buyer of record is a covering perp short into near-cap
              funding, with a fast-frame top-div cluster and a 15m TD9 SELL flashing
              exhaustion — a squeeze that got covered, not yet a spot-demand base.
              The trade book today is: no shorts, no scout entry yet, no fresh hedge
              — hold for either the Mon 07-13 weekly close or a spot-CVD demand
              print that says the covering-squeeze converted to a demand base, and
              take the scout on a shallow pullback that holds the floor band rather
              than chasing the stretched high.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle-floor watch — reclaim STRENGTHENED on the in-progress weekly: spot $64,138 +1.69% above the $63,072.50 floor, the in-progress 07-13 week $64,090.00 prints +1.61% over it, the 07-10 daily close $64,129.50 is the highest of the recovery (above the 07-06 reclaim top); the last COMPLETED weekly event stays the 07-06 reclaim ($64,023.60 above); the 06-15 reclaim thesis stays FALSIFIED, the 06-29 break stays CONFIRMED</span>
              <div className="dn-trade-name">
                200W floor — reclaim strengthening, the re-confirm-break trigger firmly dis-armed; still unsettled until the Mon 07-13 weekly close
              </div>
              <div className="dn-thesis">
                The stepped W-MON W-SMA200 floor sits at $63,072.50 (from the 07-10
                note&rsquo;s $63,068.05 — the floor rises ~$200/wk, essentially flat
                within-week). The 07-06 weekly close $64,023.60 reclaimed it and was
                the first weekly close above since the 06-29 break; the 07-09 note
                showed the in-progress week dragged −1.45% under, and the 07-10 note
                dragged it back over. This cut the extension pushed the in-progress
                week clearly clear: the 07-13 in-progress close $64,090.00 is +1.61%
                above the floor, spot $64,138 is +1.69% above, and the 07-10 daily
                close $64,129.50 settled as the highest close of the recovery, above
                the 07-06 reclaim top. That is a strengthening reclaim, but it is
                still <em>not</em> a confirmed weekly event — the week does not
                settle until Mon 07-13, and the last COMPLETED weekly event remains
                the 07-06 reclaim. The re-confirm-break trigger (a completed 07-13
                close under the floor) is firmly dis-armed intra-week; the floor is
                decided on the settle, not the wick.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">state</span><span className="dn-lvl-v bull">reclaim STRENGTHENED intra-week · in-progress 07-13 weekly close $64,090.00 = +1.61% above the $63,072.50 floor · spot +1.69% above · 07-10 daily close $64,129.50 the highest of the recovery</span></div>
                <div><span className="dn-lvl-k">last completed weekly event</span><span className="dn-lvl-v bull">07-06 weekly close $64,023.60 (reclaim, +1.84% above the then-floor) — unchanged; the 06-29 break stays CONFIRMED, the 06-15 reclaim stays FALSIFIED</span></div>
                <div><span className="dn-lvl-k">re-confirm-break trigger (dis-armed)</span><span className="dn-lvl-v bear">a COMPLETED Mon 07-13 weekly close &lt; $63,072.50 would re-confirm the break — currently dis-armed at +1.61% above, but only the settle resolves it</span></div>
                <div><span className="dn-lvl-k">watch JSON</span><span className="dn-lvl-v">weekly_200sma.json ABSENT — ratio percentile / last-event unsourced (not fabricated); floor recomputed from parquet W-MON W-SMA200 per the runbook fallback</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the floor is a weekly-close level, not
                an intraday one. The in-progress week is +1.61% clear and
                strengthening, but the desk does not upgrade the reclaim from
                &ldquo;intra-week&rdquo; to &ldquo;confirmed&rdquo; until the Mon
                07-13 settle prints. A confirmed second weekly close above (07-06
                was the first) would be the affirmative re-reclaim; a settle back
                under re-arms the break. Everything between now and Monday is
                provisional.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · DEFERRED · demand gate FLIPPED constructive (narrowest of the recovery) · deferred on covering-fuel + stretched fast frames</span>
              <div className="dn-trade-name">
                Cover-bounce scout — price pre-condition TRUE, demand block flipped constructive (SM covered, OI built, perp bought), rates filter back TRUE; deferred because the fuel is short-covering into near-cap funding with a fast-frame top-div cluster
              </div>
              <div className="dn-thesis">
                The scout&rsquo;s two-part gate — price pre-condition AND a
                confirming demand block — is closer to firing than at any point of
                the recovery. Price: spot holds above the flip, D-EMA20, D-SMA20 and
                the floor (all four legs TRUE, unchanged from 07-10). Demand: the
                block that was bearish on 07-10 (SM shorting into the bounce, retail
                fleeing) flipped — SM covered +5,851 (74% of its net short), OI built
                +3,514.7 BTC, and the perp book bought (futures CVD +749, taker +788,
                big-print +1,068). The second gate, the reclaim-long rates filter
                (10Y &lt; 4.55%), flipped back TRUE at 4.54%. What still defers the
                entry is the <em>quality</em> of the demand: the buyer of record is a
                covering perp short, not a spot-demand base (24h spot CVD was −193
                even as the perp bought), funding is pinned to the +10.95% cap
                (crowded, leveraged longs), and the MTF fast frames printed a
                top-div cluster (15m/30m/1h/4h) plus a 15m TD9 SELL — the squeeze is
                stretched short-term. The disciplined entry waits for the covering to
                convert into spot-demand absorption, or for a shallow pullback that
                holds the floor band and offers a better entry than chasing the
                stretched high.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">price pre-condition</span><span className="dn-lvl-v bull">TRUE on all four legs — spot $64,138 above flip $61,485, D-EMA20 $62,906.78, D-SMA20 $61,891.55 and the $63,072.50 floor</span></div>
                <div><span className="dn-lvl-k">demand gate (now constructive)</span><span className="dn-lvl-v bull">SM covered +5,851 (74% of net short) · OI +3,514.7 BTC · perp bought (futCVD +749, taker +788, big +1,068) · rates filter 10Y 4.54% &lt; 4.55% TRUE</span></div>
                <div><span className="dn-lvl-k">deferral (why not yet)</span><span className="dn-lvl-v bear">fuel is short-covering not spot demand (24h spot CVD −193) · funding pinned to the +10.95% cap · fast-frame top-div cluster (15m/30m/1h/4h) + 15m ⚡ TD9 SELL — stretched short-term</span></div>
                <div><span className="dn-lvl-k">scout trigger</span><span className="dn-lvl-v bull">a 24h spot-CVD demand print (spot bids the build, not just the perp) OR a shallow pullback that holds the $63,072–$62,900 floor band, THEN scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">stop / first target</span><span className="dn-lvl-v">stop 1d close &lt; $63,072.50 (a settle back under the floor ends the reclaim read) · first target D-SMA50/D-EMA50 $65,177–$65,332, then D-EMA100/W-EMA200 $68,868–$68,947</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R (framework, on a pullback entry):</b> a scout entered on a
                floor-band hold ~$63,300 with stop $63,072 (1d close) = ~$228 risk;
                first target D-SMA50 $65,177 = ~$1,877 reward ≈ 8.2:1 on the
                pullback structure — the asymmetry is why the desk prefers the
                pullback entry over chasing spot at $64,138 (chase entry: risk
                ~$1,066 to the same stop, ~1.0:1 to the D-SMA50). <b>Hard rule:</b>
                do not chase the stretched high into near-cap funding and a
                fast-frame top-div cluster. The demand gate is lit; the entry
                discipline is a spot-demand confirmation or a better price, not a
                market buy at the top of the range.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail — the OR-gate&rsquo;s 10Y leg stays FIRED (4.54% &gt; 4.53%, barely), HY OAS leg un-fired (2.70%, 8bp below 2.78%); no held hedge to roll · the reclaim-long rates filter flipped back TRUE (10Y &lt; 4.55%)</span>
              <div className="dn-trade-name">
                Downside put-spread — no position; the re-grow gate is tripped on rates but credit is loose and there is no hedge to roll, so the fire is a watch-event
              </div>
              <div className="dn-thesis">
                There is no held hedge. The put-spread re-grow gate (HY OAS &gt;
                2.78% OR 10Y &gt; 4.53%) is tripped on its 10Y leg — 4.54% is 1bp
                above the trigger — but the HY OAS leg stays un-fired at 2.70% (8bp
                below), and credit remains decisively loose (RISK-ON, regime z
                −1.21). With no position on, the single-leg rates fire is a
                watch-event, not an auto-roll. Separately, the reclaim-long rates
                filter (10Y &lt; 4.55%) flipped back TRUE at 4.54% after being FALSE
                at 4.56% on 07-10 — a tailwind for the scout, not a hedge signal.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · no roll · single-leg rates fire is a watch-event only</span></div>
                <div><span className="dn-lvl-k">re-grow gate (OR)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% (currently 2.70%, 8bp to fire) OR 10Y &gt; 4.53% (currently 4.54% — FIRED by 1bp)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — flipped back TRUE at 4.54% (was FALSE at 4.56% on 07-10); a scout tailwind, awaits the BTC-internal demand trigger</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as
                the levels drift, not backtested breakpoints. A fresh hedge leg
                would only make sense if BOTH the credit leg joined the rates leg
                AND a BTC-internal structural setup argued for downside — neither
                holds today (credit loose, BTC strengthening off the floor). No
                fresh hedge into a deep positive-gamma dealer book.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle — SM COVERED this cut (long rebuild +3,737, short cover −2,114, net +5,851 to −2,057); no re-stack-hostile-2 signature printed · the 07-10 BJ-15:11 re-stack was a one-off, and the 24h flow this cut was the opposite: a steady cover from the 24h open</span>
              <div className="dn-trade-name">
                Squeeze-cycle — the fade unwound: SM covered three-quarters of its net short across the 24h, no fresh re-stack step
              </div>
              <div className="dn-thesis">
                The framework watches for re-stack-hostile-2 signatures (Δshort &gt;
                0 + Δlong &lt; 0 same minute) as fade-continuation tells. This cut
                the tape did the opposite: SM net covered steadily from the
                −7,908.2 open @ 07-10 00:07Z through the −7,942.2 trough @ 07-10
                00:26Z to −1,239.7 @ 07-10 20:31Z (the least short) before drifting
                to −2,057 into the pin, built from a
                long rebuild (+3,737) and a short cover (−2,114). No discrete
                re-stack step printed — the 07-10 note&rsquo;s BJ-15:11 re-stack was
                a one-off, and the dominant 24h signature this cut is a cover, not a
                press.{' '}
                <span className="dn-em">
                  The fade thesis that the SM short expressed on 07-10 has been
                  unwound into the extension — a constructive positioning shift, but
                  the covering itself is the squeeze fuel, so a fresh re-stack print
                  would be the tell that the fade is being re-armed.
                </span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">24h SM signature</span><span className="dn-lvl-v bull">steady COVER · net −7,908.2 (open @ 00:07Z) → −7,942.2 (trough @ 00:26Z) → −1,239.7 (least short @ 07-10 20:31Z) → −2,057 (pin) · long +3,737, short −2,114 · cut fraction 74%</span></div>
                <div><span className="dn-lvl-k">re-stack watch</span><span className="dn-lvl-v">no re-stack-hostile-2 step this cut · watch any fresh Δnet ≤ −3k with Δshort &gt; 0 + Δlong &lt; 0 same minute as a fade re-arm</span></div>
                <div><span className="dn-lvl-k">forward gating</span><span className="dn-lvl-v bull">a 24h spot-CVD demand print with SM holding &gt; −3k is the affirmative cover-bounce confirmation; a fresh re-stack pushing SM &lt; −6k is the fade re-arm</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a 74% cover into a rising tape is the
                cleanest constructive positioning shift of the recovery, but it is
                still a cover of a short, not a fresh long base — the perp bought,
                spot did not. Treat the covering as necessary-not-sufficient: it
                removes the fade&rsquo;s fuel, but the demand base confirms only when
                spot bids the build. Read any fresh re-stack step as a signal that
                the fade is being re-armed.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the fade unwound and the reclaim strengthened · the scout&rsquo;s demand gate flipped constructive for the first time · the fuel is covering not spot demand · the floor is decided on the Mon 07-13 weekly close</span>
            </h2>

            <p>
              Of the 07-10 decision conditions: the 200W reclaim STRENGTHENED (the
              in-progress week ran from +0.21% to +1.61% above the floor, the 07-10
              daily close the highest of the recovery); the cover-bounce scout&rsquo;s
              DEMAND block, bearish on 07-10, FLIPPED constructive (SM covered 74%,
              OI built, perp bought); the reclaim-long rates filter, FALSE on 07-10,
              flipped back TRUE (10Y eased to 4.54%); the squeeze-cycle re-stack
              watch printed NO fresh step (SM covered instead); the macro re-grow
              gate stayed single-leg fired on rates with no held hedge. <em>The tape
              improved on every positioning read the 07-10 note flagged as bearish —
              the fade unwound, OI built, the rates gate lit — but the buyer of
              record is a covering perp short into near-cap funding, not a
              spot-demand base, and the fast frames turned to top-divs.</em> The
              conditions today re-set around a strengthening reclaim, a constructive
              but covering-fueled demand block, and a scout on its narrowest gate,
              deferred for a demand confirmation:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>200W weekly close (PRIMARY — settles Mon 07-13)</td><td className="bull">in-progress 07-13 close $64,090.00 = +1.61% above the $63,072.50 floor; 07-10 daily close $64,129.50 the highest of the recovery</td><td>reclaim strengthening but NOT settled; hold the read as intra-week until the Monday close prints</td></tr>
                <tr><td>Re-confirm-break trigger (dis-armed)</td><td className="bear">a COMPLETED Mon 07-13 weekly close &lt; $63,072.50</td><td>currently dis-armed at +1.61% above; a settle back under re-arms the 06-29 break — only the settle resolves it</td></tr>
                <tr><td>Cover-bounce scout (long) — demand gate now constructive</td><td className="bull">price pre-condition TRUE (4 legs) AND demand block constructive (SM covered 74%, OI +3,514.7, perp bought) AND rates filter 10Y 4.54% &lt; 4.55% TRUE</td><td>deferred on covering-fuel + stretched fast frames; scout long 0.2R on a 24h spot-CVD demand print OR a floor-band pullback hold, target D-SMA50 $65,177</td></tr>
                <tr><td>Fade re-arm (squeeze-cycle)</td><td className="bear">a fresh re-stack-hostile-2 step (Δshort &gt; 0 + Δlong &lt; 0 same minute) pushing SM &lt; −6k AND 1h close &lt; the floor band</td><td>the SM short re-expresses the fade — stand the scout down and re-open the fade watch; base rate low after a 74% cover</td></tr>
                <tr><td>Cycle floor lost (escalation)</td><td className="bear">1d close &lt; $63,072.50 (the 200W floor)</td><td>ends the intra-week reclaim read; the digestion-above-floor thesis is falsified and the fade watch re-opens</td></tr>
                <tr><td>Macro tail re-grow (single-leg fired)</td><td className="bear">HY OAS &gt; 2.78% (8bp to fire) OR 10Y &gt; 4.53% (FIRED at 4.54% by 1bp)</td><td>no held hedge to roll; the single-leg rates fire is a watch-event, not an auto-roll — the credit leg must join for a fresh hedge</td></tr>
                <tr><td>Reclaim-long rates filter (flipped TRUE)</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.54% (was FALSE at 4.56% on 07-10)</td><td>a scout tailwind; awaits the BTC-internal demand trigger to translate to scout long</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the covering-fueled squeeze converts into a spot-demand
                base — a 24h spot-CVD demand print with SM holding above −3k and the
                Mon 07-13 week settling above the $63,072 floor — or whether the
                near-cap funding and the fast-frame top-div cluster mark a stretched
                high that fades back toward the flip, re-arming the SM short. The
                fade thesis of 07-10 has unwound; the question is now whether the
                perp-led cover broadens into a demand base or exhausts as a squeeze
              </span>. Until then this note runs as written: the book is flat, the
              200W reclaim is strengthening but unsettled until Monday, the
              cover-bounce scout is on its narrowest gate — demand block
              constructive, price pre-condition TRUE, rates filter lit — but
              deferred for a spot-demand confirmation or a better pullback entry, and
              the macro tape eased at the margin without firing a fresh hedge. The
              right read for the next 24h is{' '}
              <em>patient — the gate is lit, but confirm the demand and let the
              weekly close settle the floor</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> v2 promoted after the STAGE B codex hostile cross-model
            audit (verdict PASS-WITH-NOTES — 0 CRITICAL, 2 MAJOR, 3 MINOR; no
            publish-gating structural break), recorded at{' '}
            <code>audits/2026-07-11-desk-note.md</code>. Every finding was applied
            in place and grep-closed across the full EN file (pattern searched,
            hits before, hits after):{' '}
            <b>DN-001 (MAJOR)</b> — stale positioning heading{' '}
            <code>net −4,796→…</code>: searched <code>4,796</code>, 1 → 0 (heading
            now <code>net −7,908→−2,057</code>) — RESOLVED.{' '}
            <b>DN-002 (MAJOR)</b> — chase-entry R/R overstated: searched{' '}
            <code>1.8:1</code>, 1 → 0 (chase R/R corrected to{' '}
            <code>~1.0:1 to the D-SMA50</code>: reward $1,039 / risk $1,066) —
            RESOLVED.{' '}
            <b>DN-003 (MINOR)</b> — 24h funding annualization + point delta:
            searched <code>+9.93%</code> / <code>+1.02pt</code>, 2 / 1 → 0 / 0
            (now <code>+9.97% → +10.95% (+0.98pt)</code>) — RESOLVED.{' '}
            <b>DN-004 (MINOR)</b> — 24h window wording: searched{' '}
            <code>1440 sampled</code>, 1 → 0 (manifest now{' '}
            <code>1,440 one-minute intervals / 1,441 sampled rows inclusive</code>) —
            RESOLVED.{' '}
            <b>DN-005 (MINOR)</b> — <code>−7,942.2</code> mislabeled as the 24h
            open (it is the trough @ 00:26Z, 19 min after the −7,908.2 open @
            00:07Z): searched <code>right at the 24h open</code> /{' '}
            <code>(open)</code> / <code>open trough</code>, 3 → 0 (all three
            passages now state open @ 00:07Z → trough @ 00:26Z; the surviving
            <code>−7,942.2</code> instances carry min/trough labels) — RESOLVED.
            All five findings hits-after = 0. Snapshot pin 2026-07-11 00:07Z (BJ
            08:07 live-tape row); rolling sources archived at
            /opt/desk-note/snapshots/2026-07-11-0007/ for byte-identical re-audit.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among
            principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a
            single atomic snapshot (2026-07-11 00:07Z) with section-level provenance
            disclosed in the manifest band above; the macro Tier-1 panel render is
            2026-07-10 22:16Z (~1.85h before snapshot) and some inputs are explicitly
            stale or pending and flagged as such. Levels, sizes, and conditions are
            illustrative of the desk&rsquo;s process, not standing recommendations.
            Past correlation, gamma, and positioning patterns do not bind future
            tape. Derivatives carry the risk of total loss and, where leveraged, loss
            exceeding deposited margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The fade unwound — SM covered three-quarters of its short into the
                extension. The reclaim strengthened, the scout&rsquo;s demand gate
                finally lit. But the fuel is covering, not spot demand, and funding
                is pinned to the cap. Patient — confirm the demand, let the weekly
                close settle the floor.
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
            v2 · 2026-07-11 00:07Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
