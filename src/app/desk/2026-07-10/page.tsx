import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-10 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-10',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-10' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260710() {
  await requireViewer('/desk/2026-07-10');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-10 · v2</span>
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
              <span className="dn-big">$63,222</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.65%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-10 00:06Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-10 00:06Z (snapshot pin · BJ 08:06 row)</td>
                  <td className="dn-flag">
                    fresh · 1-min · anchor pinned to t=&ldquo;07-10 08:06&rdquo;
                    (BJ) = 00:06Z; the file tail keeps appending, so all windows
                    are frozen to this pinned index. Snapshot &ldquo;now&rdquo;
                    values (spot, retail, SM net, funding) use the exact BJ 08:06
                    pin; 24h deltas span the last 1440 sampled minutes ending at
                    the pin (24h-ago = the BJ 08:06 07-09 sampled row). No cb_cvd
                    / fut_cvd counter reset inside the 24h window this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-10 00:01Z scan (BJ 08:01)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · ~5-min stale vs snapshot
                    anchor · in-progress bars · scan archived in
                    /opt/desk-note/snapshots/2026-07-10-0006/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-10 00:01Z snapshot</td>
                  <td className="dn-flag">
                    ~5-min stale vs anchor · Deribit idx $63,443 vs live spot
                    $63,221.72 (idx $221 above) · 878 instruments · 10JUL26
                    0.3DTE +47.18M settles 08:00Z today (post-snapshot); no
                    near-dated negative amplifier on the strip
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-10 00:01Z
                  </td>
                  <td className="dn-flag">~5-min lag · 7d 1h bars · 22 assets · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-09 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.85h render lag · FRED Tier-1: 10Y 4.56% (+1.0bp,
                    RISK-OFF), TIPS 2.31% (+1.0bp, EXTREME), HY OAS 2.70%
                    (+3.0bp, RISK-ON), MOVE 72.4 (+7.0), DXY 100.94 (−0.11,
                    EXTREME), Fed net liq $5.958T (+0.118T, EXTREME RISK-ON) ·
                    Tier-3 inflation rows stale (69d monthly)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-10 00:05Z (close $63,199.90)</td>
                  <td className="dn-flag">
                    offsets recomputed vs live spot $63,221.72 · full 2019→ glob
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
                    ($63,068.05) per the runbook fallback
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale · monthly (69d) · do not treat as live</td>
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
              <span className="dn-v">+9.93%</span>
              <span className="dn-src">live · raw 0.009071%/8h × 1095 · 24h mean +6.96% ann · cap occupancy 229 / 1440 sampled rows = 15.9% · 0 negative rows · max +10.95% @ 07-09 19:35Z (BJ 03:35 07-10) · trough +3.13% @ 07-09 03:52Z (BJ 11:52 07-09) — never went negative</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">+6.39% → +9.93% (+3.54pt, firmed hard)</span>
              <span className="dn-src">tape-internal 24h: 24h-ago row +6.39% ann → now +9.93% · 24h mean firmed to +6.96% (was +4.97% on 07-09) · zero negative rows (was 96) — the leverage book re-firmed through the bounce, longs paying to hold</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v">−0.11% (−109.5 BTC)</span>
              <span className="dn-src">live · essentially flat (was +995 BTC build on 07-09) · SM long_btc −1,792 / short_btc +3,004 — a fresh short stack absorbed by a long flush, total OI net flat</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bull">59.40 / 40.60</span>
              <span className="dn-src">live_db `mkt_long_pct` · BJ 08:06 pin · bled from 63.93 → 59.40 (−4.53pt) as price ROSE +1.65% · 24h range 59.23 / 64.29 — retail EXITED longs into the bounce, the mirror of 07-09&rsquo;s pile-in</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−7,908.2 (net SHORT, deepened)</span>
              <span className="dn-src">live · long 8,387.9 − short 16,296.1 · 24h-ago net −3,112.4 · 24h net min −8,082.7 @ 07-09 20:51Z (BJ 04:51 07-10), max −2,880.5 @ 07-09 02:56Z (BJ 10:56 07-09); short_btc 24h max 16,599.7 @ 07-09 19:51Z (BJ 03:51 07-10)</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · 24h step</span>
              <span className="dn-v bear">−3,112 → −7,908 (deepened, cut fraction 154%)</span>
              <span className="dn-src">net stepped −4,796 deeper on a long flush (−1,792) + short add (+3,004); |Δ|/prior_net = 4,796 / 3,112 = 154% — net MORE THAN DOUBLED in the short direction (the −3,112 base is real, unlike 07-09&rsquo;s flat base) · SM shorting INTO the +1.65% bounce</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.7% / 32.09%</span>
              <span className="dn-src">GEX median IV · 878 inst · 30D close-to-close RV (30 returns / 31 closes; 29-ret alt 30.34%) · chain richness ~+9.6pt · P/C OI ratio 0.55</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+3.28% (above)</span>
              <span className="dn-src">flip $61,215 (was $61,094 on 07-09) · vs live spot $63,221.72 (+3.28%; 63,221.72/61,215 − 1 = 3.278%) / GEX file Deribit idx $63,443 (+3.64%; 63,443/61,215 − 1 = 3.640%) — both refs positive · aggregate GEX +125.6M net-long-gamma (was +80.6M on 07-09 — DEEPENED)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The reclaim that was handed back intra-week yesterday has been
                taken back again — spot bounced off the $61,705 low back above
                the 200W floor, the 07-09 daily CLOSED above it, and the
                in-progress weekly is back over the line
              </span>. Spot <span className="dn-tag bull">$63,222</span> sits{' '}
              <span className="dn-tag bull">+0.24% above the $63,068.05 W-SMA200
              cycle floor</span>; the in-progress 07-13 weekly close{' '}
              <span className="dn-tag bull">$63,199.90 prints +0.21% over
              it</span> (was −1.45% under on the 07-09 note), and the completed
              07-09 daily close <span className="dn-tag bull">$63,197.00</span>{' '}
              settled back above the floor after 07-08&rsquo;s single close
              beneath. The prior note&rsquo;s{' '}
              <span className="dn-em">
                re-confirm-break trigger, armed intra-week, is dis-armed
                intra-week
              </span>{' '}
              — but this is still not a settled weekly event either way: the week
              does not close until Mon 07-13, and the last completed weekly
              event remains the 07-06 reclaim ($64,023.60 above). The bounce is
              structurally suspect, though. It ran on{' '}
              <span className="dn-tag bear">smart money shorting INTO it</span> —
              short_btc +3,004, SM net deepened −4,796 to{' '}
              <span className="dn-tag bear">−7,908</span> (cut fraction 154%,
              net more than doubled short) — with{' '}
              <span className="dn-tag bull">retail EXITING longs −4.53pt to
              59.40%</span> (the mirror of 07-09&rsquo;s pile-in), OI flat
              (−0.11%), and funding{' '}
              <span className="dn-tag bear">firming hard to +9.93% ann</span>{' '}
              (24h mean +6.96%, zero negative rows, 15.9% cap occupancy). That
              is a spot-led squeeze back over the floor that SM is leaning
              against, not a demand-confirmed reclaim. The dealer book DEEPENED
              to <span className="dn-tag bull">+125.6M net-long-gamma</span> (from
              +80.6M) with the $63k–$66k positive wall band capping and the flip
              $61,215 spot +3.28% below — a dampening profile that pins price.
              The MTF engine rolled a notch LESS bearish (6/9, 4 long / 3 short /
              3 neutral, &ldquo;higher-TF bearish, short-term bounce&rdquo;) as
              the bounce lifted the fast frames. Book stays{' '}
              <span className="dn-em">FLAT</span>: the cover-bounce scout&rsquo;s
              price pre-condition is now RESTORED (spot back above the flip,
              D-EMA20, D-SMA20 AND the floor) but the DEMAND block is more
              bearish than ever (SM shorting, retail fleeing) — so the scout
              stays stood down on demand; no short into a deep positive-gamma
              book; no fresh hedge on a single-leg rates fire. The single line
              is still the Mon 07-13 weekly close vs the $63,068 floor.
            </p>

            <p>
              BTC prints <span className="dn-tag">$63,222</span> live,{' '}
              <span className="dn-tag bull">+1.65%</span> on 24h (24h-ago
              $62,198), inside a{' '}
              <span className="dn-tag">$63,454 / $61,705</span> range (high @
              07-09 18:12Z / BJ 02:12 07-10, low @ 07-09 02:52Z / BJ 10:52
              07-09).{' '}
              <span className="dn-signal">
                The three-down-close slide off the 07-06 peak has reversed into
                a recovery close above the floor
              </span>: daily closes 07-06{' '}
              <span className="dn-tag bull">$64,023.60</span> (the reclaim top),
              07-07 <span className="dn-tag bear">$63,335.40</span>, 07-08{' '}
              <span className="dn-tag bear">$62,255.30</span> (the one close
              below the floor), 07-09{' '}
              <span className="dn-tag bull">$63,197.00</span> (back above), 07-10
              in-progress <span className="dn-tag bull">$63,199.90</span> — a
              +$942 07-09 up-day that carried price from an intraday $61,705 wick
              back over the cycle floor. The MA matrix has re-widened to three
              positive offsets: spot sits{' '}
              <span className="dn-tag bull">+2.29% above D-SMA20
              $61,804.93</span>,{' '}
              <span className="dn-tag bull">+0.84% above D-EMA20
              $62,693.70</span>, and{' '}
              <span className="dn-tag bull">+0.24% above the 200W floor W-SMA200
              $63,068.05</span> — the floor is once again support beneath rather
              than resistance overhead.{' '}
              <span className="dn-em">
                The reclaimed floor has flipped from a level we sat under back
                to a level we sit on — spot is riding the $61.8k–$63.1k support
                band, only $154 above the floor itself.
              </span>{' '}
              Everything else on the ladder is deep overhead in order: D-EMA50
              $65,346 (−3.25%), D-SMA50 $65,387 (−3.31%), then the gap up to
              W-EMA200 $68,938 (−8.29%) / D-EMA100 $68,947 (−8.30%), D-SMA150
              $70,072 (−9.78%), D-SMA100 $70,785 (−10.68%) and the weekly cluster
              above. The cover-bounce scout&rsquo;s price pre-condition — spot
              above the flip AND above D-EMA20/D-SMA20 AND above the floor — has
              flipped back to TRUE this cut (all four legs positive), inverting
              the two-of-three failure of the 07-09 note; the scout is now gated
              on demand, with the rates filter a second gate still FALSE.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · SM SHORTED into the bounce (short_btc +3,004, net −4,796 deeper to −7,908, cut fraction 154%) · retail EXITED longs −4.53pt · OI flat · funding firmed hard, zero negative rows · a re-stack-hostile-2 step printed BJ 15:11</span>
            </h2>

            <p>
              <span className="dn-signal">
                Smart money pressed the short side into a rising tape — the
                cleanest &ldquo;fade the bounce&rdquo; positioning shape of the
                pullback
              </span>. Over the 24h window SM net stepped from{' '}
              <span className="dn-tag">−3,112.4</span> to{' '}
              <span className="dn-tag bear">−7,908.2</span>, a −4,796 deepening
              built from long_btc{' '}
              <span className="dn-tag bear">10,180.1 → 8,387.9 (−1,792)</span> and
              short_btc{' '}
              <span className="dn-tag bear">13,292.5 → 16,296.1 (+3,004)</span>.
              The short side added more than the long side flushed, so net more
              than doubled short:{' '}
              <span className="dn-em">
                cut fraction |Δ|/prior_net = 4,796 / 3,112 = 154%
              </span>{' '}
              (a valid ratio this cut — the −3,112 base is real, not the flat
              base that made 07-09&rsquo;s ratio undefined). SM net troughed{' '}
              <span className="dn-tag bear">−8,082.7 @ 07-09 20:51Z (BJ 04:51
              07-10)</span> and covered fractionally to −7,908 into the snapshot;
              short_btc peaked{' '}
              <span className="dn-tag bear">16,599.7 @ 07-09 19:51Z (BJ 03:51
              07-10)</span> then bled ~300 into the pin, and long_btc bottomed{' '}
              <span className="dn-tag bear">8,318.9 @ 07-09 21:46Z (BJ 05:46
              07-10)</span>. OI over the same window was{' '}
              <span className="dn-tag">−109.5 BTC (−0.11%)</span> — essentially
              flat, the +995 build of the 07-09 note absorbed by the long
              unwind, so the short stack is a{' '}
              <span className="dn-em">rotation into net-short at flat gross</span>,
              not a fresh leverage expansion.
            </p>

            <p>
              <span className="dn-signal">
                Retail exited longs as price rose — the exact inverse of the
                07-09 pile-in
              </span>. `mkt_long_pct` bled{' '}
              <span className="dn-tag bull">63.93% → 59.40% (−4.53pt)</span>{' '}
              across the 24h, range 59.23 / 64.29 — the crowd shed longs into a
              +1.65% up-print, de-crowding as smart money stacked shorts. The
              leverage side, by contrast, firmed hard: funding held{' '}
              <span className="dn-tag bear">+9.93% ann live</span> (raw
              0.009071%/8h × 1095), 24h mean{' '}
              <span className="dn-tag bear">+6.96% ann</span> (firmed from the
              07-09 note&rsquo;s +4.97%), range{' '}
              <span className="dn-tag">+3.13% / +10.95%</span> with the max @
              07-09 19:35Z (BJ 03:35 07-10) and the trough{' '}
              <span className="dn-tag">+3.13% @ 07-09 03:52Z (BJ 11:52
              07-09)</span> — the path{' '}
              <span className="dn-em">never went negative</span> (zero negative
              rows vs 96 on 07-09), and cap occupancy climbed to{' '}
              <span className="dn-tag">229 / 1440 sampled rows (15.9%)</span> from
              6.0%. Perp trades a{' '}
              <span className="dn-tag bear">−$48.65 discount</span> to spot at
              the snap (24h mean −$56.68, range −$137.18 / +$73.18 — basis
              touched premium intraday but sat discount on the mean). 1-min
              aggregate skew snap{' '}
              <span className="dn-tag bear">−2.7</span> (24h mean +0.39) — a mild
              sell tilt into the pin.{' '}
              <span className="dn-em">
                Funding firming to a persistently positive, near-cap regime while
                retail sheds longs and SM stacks shorts is the signature of a
                short-fueled squeeze back above the floor: leveraged longs are
                paying up to hold the bounce, and the smart-money short is the
                fuel that squeezed it — not a demand base that confirms it.
              </span>
            </p>

            <p>
              Windowed flow is <em>spot bid into the 24h bounce, with the last
              four hours flat as the buyer rested</em>. 24h: price{' '}
              <span className="dn-tag bull">+1.65%</span>, OI{' '}
              <span className="dn-tag">−109.5 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,729</span> (clean, no reset in
              the window), futures CVD{' '}
              <span className="dn-tag">Δ +52</span>, taker-net{' '}
              <span className="dn-tag">+52</span>, big-print{' '}
              <span className="dn-tag bear">−703 BTC</span> —{' '}
              <span className="dn-em">
                spot bought the bounce hard (+1,729 CVD) while futures and takers
                were roughly flat and big prints net-sold — a spot-led recovery
                that the perp book did not chase, consistent with SM leaning
                short into it
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag">+0.06%</span>, OI{' '}
              <span className="dn-tag">+26 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −612</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −139</span>, taker-net{' '}
              <span className="dn-tag bear">−139</span>, big-print{' '}
              <span className="dn-tag bull">+228 BTC</span> — <em>flat and quiet,
              spot offered slightly as the bounce stalled at the floor</em>. 1h:
              price <span className="dn-tag bear">−0.05%</span>, OI{' '}
              <span className="dn-tag">+39 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −111</span>, futures CVD{' '}
              <span className="dn-tag">Δ +3</span>, taker-net{' '}
              <span className="dn-tag">+3</span>, big-print{' '}
              <span className="dn-tag bull">+58 BTC</span> — <em>quiet, offered
              into the pin</em>. The read: the 24h bounce was spot-bid and
              perp-passive, but the most recent 4h shows the bid resting right at
              the floor — the squeeze has stalled, not extended.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF rolled a notch LESS bearish · 6/9 trend-continuation, &ldquo;higher-TF bearish / short-term bounce&rdquo; · fast frames flipped long, fresh 4h + 3d golden crosses · bottom-div cluster DEEPENED to 4h/12h/1d/3d · 1w water-down death cross persists · 1M ⚡ TD9 BUY re-printed · MA matrix back to three positive lines</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF engine rolled a notch less bearish as the bounce lifted
                the fast frames
              </span>. The scan is 4 long / 3 short / 3 neutral across 10 frames
              (15m/30m/1h long, 4h/8h neutral, 12h/1d/3d short, 1w neutral, 1M
              long), a{' '}
              <span className="dn-tag">6/9 cycle-momentum regime (JT ≥ 0) —
              trend-continuation primary</span>, net &ldquo;higher-TF bearish,
              short-term bounce&rdquo; (was 5/9, 1 long / 7 short / 2 neutral,
              &ldquo;sell the bounce&rdquo; on 07-09). Two fresh golden crosses
              printed on the bounce: a{' '}
              <span className="dn-tag bull">4h water-up golden cross (1 bar back,
              DIF +76.1)</span> — a strong above-water golden cross, bullish
              continuation — and a{' '}
              <span className="dn-tag">3d water-down golden cross (just printed,
              DIF −3,243.3)</span> — an early below-water long probe. Against
              that, the higher-TF bearish anchor held: the{' '}
              <span className="dn-tag bear">1w water-down death cross (2 bars
              back, DIF −5,878.7)</span> persists unchanged from 07-09, and the
              counter-signal cluster DEEPENED — a{' '}
              <span className="dn-tag bull">bottom-div cluster now on
              4h/12h/1d/3d</span> (added the 3d frame vs 07-09&rsquo;s 12h/1d)
              plus a re-printed{' '}
              <span className="dn-tag bull">1M ⚡ TD9 BUY at $63,184</span>{' '}
              (oversold reversal hint, higher than the 07-09 print $62,258). The
              1h ran up to a Buy 3 setup and the 8h/4h flipped their crosses on
              the bounce.{' '}
              <span className="dn-em">
                Read straight: the down-leg&rsquo;s trend frames are still
                bearish (1w death cross, 12h/1d/3d short), but the bounce lifted
                the sub-daily frames to long and stacked a four-frame bottom-div
                cluster with the 1M TD9 BUY — a bearish-continuation regime
                carrying a stretched-and-bouncing oversold reflex, one notch back
                toward the 07-08 posture, not a clean turn.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,179</td><td className="num">50.4</td><td className="neut">death (water-up) 11b</td><td className="bull">above ↓62.8k 27b</td><td>Sell 2</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">63,184</td><td className="num bull">56.5</td><td className="neut">death (water-up) 3b</td><td className="bull">above ↓62.7k 22b</td><td>Buy 4</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">63,184</td><td className="num bull">59.3</td><td className="bull">golden (water-dn) 29b</td><td className="bull">above ↓63.1k 7b</td><td>Buy 3</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">63,184</td><td className="num bull">54.7</td><td className="bull">golden (water-up) 1b (just printed)</td><td className="bull">above ↓61.9k 40b</td><td>Sell 6</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">63,184</td><td className="num bull">55.3</td><td className="bear">death (water-up) 5b</td><td className="bull">above ↓62.5k 3b</td><td>Sell 2</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">63,184</td><td className="num bull">55.4</td><td className="neut">golden (water-dn) 17b</td><td className="neut">in cloud 61.9–65.3k 3b</td><td>Sell 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1d</td><td className="num">63,179</td><td className="num">50.0</td><td className="neut">golden (water-dn) 9b</td><td className="bear">below ↑65.6k 39b</td><td>Buy 3</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">63,184</td><td className="num bear">42.0</td><td className="neut">golden (water-dn) 刚印 (just printed)</td><td className="bear">below ↑71.7k 13b</td><td>Sell 3</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">63,183</td><td className="num bear">37.9</td><td className="bear">death (water-dn) 2b</td><td className="bear">below ↑98.7k 23b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">63,184</td><td className="num">43.3</td><td className="neut">—</td><td className="bull">above ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (BJ 08:01; rolling
                    latest file, archived verbatim in
                    /opt/desk-note/snapshots/2026-07-10-0006/). Header alerts:{' '}
                    <em>4h water-up golden cross 1b (DIF +76.1)</em>,{' '}
                    <em>1w water-down death cross 2b (DIF −5,878.7)</em>,{' '}
                    <em>3d water-down golden cross just printed (DIF −3,243.3)</em>,{' '}
                    <em>1M ⚡ TD9 BUY $63,184</em>. Net read{' '}
                    <em>4 long / 3 short / 3 neutral · higher-TF bearish,
                    short-term bounce · ⚠ higher-TF bottom-div cluster
                    (12h/1d/3d)</em>. Scan spot $63,179, 24h +1.49% (Binance perp
                    kline window; the live-tape 24h reads +1.65% off spot
                    −1440min, a different reference and window), H/L $63,485 /
                    $61,666, qVol $9.48B. Closes are in-progress bars; treat
                    every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the floor re-reclaim on the daily. Spot
              $63,222 now holds three positive offsets —{' '}
              <span className="dn-tag bull">+2.29% above D-SMA20
              $61,804.93</span>,{' '}
              <span className="dn-tag bull">+0.84% above D-EMA20
              $62,693.70</span>, and{' '}
              <span className="dn-tag bull">+0.24% above the 200W floor W-SMA200
              $63,068.05</span> — and sits below every line above:{' '}
              <span className="dn-tag bear">D-EMA50 $65,345.98 (−3.25%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $65,387.33 (−3.31%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $68,938.40 (−8.29%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $68,946.60 (−8.30%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $70,072.45 (−9.78%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $70,697.02 (−10.57%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $70,784.58 (−10.68%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $71,421.48 (−11.48%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $72,118.36 (−12.34%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $74,107.65 (−14.69%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,714.79 (−15.38%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $75,039.50 (−15.75%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $76,158.79 (−16.99%)</span>,{' '}
              then the disused deep weeklies W-EMA100 $80,198.95 (−21.17%),
              W-EMA50 $80,389.06 (−21.36%), W-SMA50 $87,633.60 (−27.86%),
              W-SMA100 $88,600.04 (−28.64%). The near-line set is the tight
              $61.8k–$63.1k support band directly beneath spot, then a clean
              ~3.3% gap up to the D-EMA50/D-SMA50 pair — the first overhead
              resistance the bounce has to clear.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-10 00:05Z (close
                $63,199.90); offsets recomputed against live spot $63,221.72.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. Full 2019→ parquet glob loaded (358 weekly bars),
                so W-SMA150 / W-SMA200 are computable this cut — no seed-only
                disclosure needed. Daily closes: 07-05 $63,617.10, 07-06
                $64,023.60, 07-07 $63,335.40, 07-08 $62,255.30, 07-09
                $63,197.00, 07-10 (in-progress) $63,199.90 — the 07-09 recovery
                close settled back above the $63,068.05 floor. 30D
                close-to-close RV 32.09% (logret.std × √365 × 100 on 30 returns /
                31 closes; 29-return alt 30.34%).
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DEEPENED net-long-gamma to +125.6M (was +80.6M) · flip $61,215 spot +3.28% above · $64k +29.65M heaviest wall, $63k/$63.5k straddle spot · $60k −13.78M the lone negative in the top-10 bids the fade · no near-dated negative amplifier (10JUL +47.18M settles 08:00Z)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book deepened its long-gamma dampening as the bounce
                lifted spot back into the positive wall band
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+125.6M / 1%</span> (was +80.6M on
              07-09, +114.2M on 07-08 — re-deepened past the whole recovery
              range), firmly dampening. The 0-γ flip is{' '}
              <span className="dn-tag">$61,215</span> (was $61,094) and spot
              $63,222 sits{' '}
              <span className="dn-tag bull">+3.28% above</span> on spot math
              (63,221.72 / 61,215 − 1 = +3.278%); the GEX file&rsquo;s own
              &ldquo;dist to flip&rdquo; reads{' '}
              <span className="dn-tag bull">+3.6%</span> off its Deribit-index
              $63,443 ($221 above live spot), which is{' '}
              <span className="dn-tag bull">+3.64%</span> (63,443 / 61,215 − 1 =
              +3.640%) — both references positive, spot above the flip on both,
              the cushion re-widened from the 07-09 note&rsquo;s +1.80% as price
              bounced away from the flip. The wall map straddles spot with the
              heaviest positive wall just overhead:{' '}
              <span className="dn-tag bull">$64k +29.65M</span> (~+1.2%), backed
              by <span className="dn-tag bull">$63k +23.53M</span> (right at
              spot), <span className="dn-tag bull">$65k +20.25M</span>,{' '}
              <span className="dn-tag bull">$63.5k +18.33M</span>,{' '}
              <span className="dn-tag bull">$66k +16.31M</span>,{' '}
              <span className="dn-tag bull">$70k +14.54M</span>,{' '}
              <span className="dn-tag bull">$68k +13.06M</span>,{' '}
              <span className="dn-tag bull">$80k +8.08M</span>,{' '}
              <span className="dn-tag bull">$72k +5.93M</span>; the only negative
              in the top-10 is{' '}
              <span className="dn-tag bear">$60k −13.78M</span>, sitting below as
              the fade magnet.{' '}
              <span className="dn-em">
                The book caps a squeeze into the dense $63k–$66k positive band
                (the +29.65M / +23.53M / +20.25M cluster is a heavy overhead lid)
                and bids a fade toward $60k (where the −13.78M cluster amplifies a
                break of the floor) — a dampening profile that keeps price pinned
                to the floor band between the flip and $64k until an expiry or a
                spot flow breaks it.
              </span>{' '}
              By expiry there is no meaningful near-dated negative amplifier:
              10JUL 0.3DTE{' '}
              <span className="dn-tag">+47.18M</span> (settles 08:00Z today,
              post-snapshot, positive), 11JUL 1.3 +4.72M, 12JUL 2.3 +3.41M, 13JUL
              3.3 +4.76M, 17JUL 7.3 +27.81M, 24JUL 14.3 +7.69M, 31JUL 21.3
              +33.52M (the heaviest forward chunk, positive), 28AUG 49.3 +6.47M,
              25SEP 77.3 <span className="dn-tag bear">−0.93M</span> (the lone
              forward negative, tiny), 25DEC 168.3 +1.75M, 26MAR27 259.3 +0.91M,
              25JUN27 350.3 +0.54M. The entire near strip is positive; the
              amplifier that powered the 06-29 break is nowhere on it, so the
              bounce ran without a gamma tailwind and the fade would run without a
              gamma accelerant until price loses the flip.
            </p>

            <p>
              IV median across 878 instruments is{' '}
              <span className="dn-tag">41.7%</span> against 30D close-to-close RV
              of <span className="dn-tag">32.09%</span> — chain-level richness{' '}
              <span className="dn-tag">~+9.6pt</span> (narrowed from the 07-09
              note&rsquo;s +11.0pt as realized rose into the bounce). Put/Call OI
              ratio <span className="dn-tag">0.55</span> (call OI 239,352 / put OI
              132,718 BTC) — call-heavy open interest, consistent with the
              positive-gamma wall band overhead.{' '}
              <span className="dn-em">
                A chain-median across N instruments, <em>not</em> a tradable
                spread; expiry-/strike-level vega, skew and term structure remain
                not loaded, so the vol read stays framework-only.
              </span>{' '}
              RV methodology: 30D close-to-close, logret.std × √365 × 100 on the
              last 30 daily log returns (= 31 consecutive daily closes) anchored
              to parquet last bar 2026-07-10 00:05Z; the 29-return alt reads
              30.34%. IV at 41.7% is a touch below the 07-09 note&rsquo;s 42.7% —
              the chain eased marginally as the bounce printed, but the +9.6pt
              richness says implied still leads realized.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · rates HELD firm (10Y 4.56%, TIPS 2.31% EXTREME) — the 10Y re-grow gate stays FIRED (&gt;4.53%) and the reclaim-long rates filter is now FALSE (10Y ≥ 4.55%) · DXY softened −0.11 to 100.94 but stays EXTREME · Fed net liquidity jumped +0.118T to $5.958T (EXTREME RISK-ON) · HY credit RISK-ON 2.70% · cross-asset re-coupled further to |r| 0.320 NORMAL</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape stayed split: rates and the dollar firm risk-off,
                credit and a fresh liquidity print loosening
              </span>. Dashboard render is 2026-07-09 22:15Z, ~1.85h before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bear">4.56% (+1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.96</span>, episodic z{' '}
              <span className="dn-tag">+1.67</span> — RISK-OFF, held firm. 10Y
              TIPS real <span className="dn-tag bear">2.31% (+1.0bp)</span>,
              regime z <span className="dn-tag bear">+2.82</span>, episodic z{' '}
              <span className="dn-tag bear">+1.76</span> — EXTREME RISK-OFF. 5Y5Y
              BE inflation{' '}
              <span className="dn-tag">2.19% (−3.0bp)</span> — no tag. HY OAS{' '}
              <span className="dn-tag bull">2.70% (+3.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.21</span>, episodic z{' '}
              <span className="dn-tag bull">−0.60</span> — RISK-ON, a touch
              firmer but still loose. MOVE bond vol{' '}
              <span className="dn-tag">72.4 (+7.0)</span> — neutral. DXY{' '}
              <span className="dn-tag bear">100.94 (−0.11)</span>, regime z{' '}
              <span className="dn-tag bear">+2.10</span> — EXTREME RISK-OFF,
              softened a touch; Fed net liquidity{' '}
              <span className="dn-tag bull">$5.958T (+0.118T)</span>, episodic z{' '}
              <span className="dn-tag bull">+2.47</span> — EXTREME RISK-ON on a
              fresh weekly print. US-JP 10Y spread{' '}
              <span className="dn-tag">1.91% (+1.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag">162.36 (−0.18)</span>; USD/CNY 6.7969.{' '}
              <span className="dn-em">
                Net: the put-spread re-grow gate&rsquo;s 10Y leg stays FIRED —
                10Y 4.56% is above the 4.53% gate — and the reclaim-long rates
                filter (10Y &lt; 4.55%) is now cleanly FALSE at 4.56% (was at the
                boundary on 07-09). The HY OAS leg stays un-fired — 2.70% is 8bp
                below the 2.78% trigger (was 11bp). The OR-gate is tripped on
                rates and credit is loose, but the book carries no held hedge, so
                the fire is a watch-event, not an auto-roll — and BTC is trading
                its own floor band, not rates, this cut. The one fresh macro
                positive is the liquidity jump: Fed net liq +0.118T to $5.958T,
                a genuine risk-on episodic.
              </span>{' '}
              JGB monthly 2.65% (stale 69d) carries EXTREME RISK-OFF — do not
              lean on it.
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
                <tr><td>US 10Y nominal</td><td className="num">4.56%</td><td className="num bear">+1.0bp</td><td className="num bear">+1.96</td><td className="num">+1.67</td><td className="bear">tight · RISK-OFF · held</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.31%</td><td className="num bear">+1.0bp</td><td className="num bear">+2.82</td><td className="num bear">+1.76</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.19%</td><td className="num bull">−3.0bp</td><td className="num">−0.52</td><td className="num">−1.13</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.70%</td><td className="num bear">+3.0bp</td><td className="num bull">−1.21</td><td className="num bull">−0.60</td><td className="bull">loose · RISK-ON</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.515</td><td className="num">−0.01</td><td className="num">−0.06</td><td className="num bull">−2.13</td><td className="neut">neutral · episodic</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">72.4</td><td className="num bear">+7.0</td><td className="num">−0.21</td><td className="num">+0.30</td><td className="neut">neutral · firmer</td></tr>
                <tr><td>DXY</td><td className="num">100.94</td><td className="num bull">−0.11</td><td className="num bear">+2.10</td><td className="num">+0.72</td><td className="bear">EXTREME RISK-OFF · softer</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.958T</td><td className="num bull">+0.118T</td><td className="num">+2.42</td><td className="num bull">+2.47</td><td className="bull">EXTREME RISK-ON · fresh print</td></tr>
                <tr><td>USD/JPY</td><td className="num">162.36</td><td className="num">−0.18</td><td className="num bear">+1.56</td><td className="num">+1.30</td><td className="neut">no tag</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.91%</td><td className="num bear">+1.0bp</td><td className="num bull">−0.74</td><td className="num">+1.67</td><td className="bull">tight</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7969</td><td className="num">+0.00</td><td className="num bull">−1.29</td><td className="num">+1.41</td><td className="neut">no tag</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="num">+1.43</td><td className="stale">monthly (69d) · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.320</span> —{' '}
              <span className="dn-signal">
                the re-coupling firmed further into the NORMAL band
              </span>{' '}
              from the 07-09 note&rsquo;s 0.295 (0.201 IDIOSYNCRATIC two cuts
              back). BTC&rsquo;s listed ties are now led by the metals + broad
              equity complex: GOLD{' '}
              <span className="dn-tag">+0.437</span>, SILVER{' '}
              <span className="dn-tag">+0.437</span>, SP500{' '}
              <span className="dn-tag">+0.422</span>, NQ{' '}
              <span className="dn-tag">+0.412</span>, COPPER{' '}
              <span className="dn-tag">+0.388</span>, PLAT{' '}
              <span className="dn-tag">+0.381</span>, TSLA{' '}
              <span className="dn-tag">+0.378</span>, CL{' '}
              <span className="dn-tag">−0.347</span>, BRENT{' '}
              <span className="dn-tag">−0.332</span>, JP225{' '}
              <span className="dn-tag">+0.312</span>, NVDA{' '}
              <span className="dn-tag">+0.287</span>. 7d performance:{' '}
              <span className="dn-tag bull">BTC +3.06%</span> (still the complex
              leader over the trailing week, but the lead is narrowing as the
              06-30 low rolls out of the window), NQ{' '}
              <span className="dn-tag bull">+1.40%</span>, SP500{' '}
              <span className="dn-tag bull">+0.83%</span>, JP225{' '}
              <span className="dn-tag bull">+1.29%</span>, NVDA{' '}
              <span className="dn-tag bull">+4.04%</span>, META{' '}
              <span className="dn-tag bull">+9.80%</span> (the complex leader),
              AAPL <span className="dn-tag bull">+2.72%</span>, TSLA{' '}
              <span className="dn-tag bull">+2.73%</span>, MSFT{' '}
              <span className="dn-tag bear">−1.58%</span>. Metals soft: GOLD{' '}
              <span className="dn-tag bear">−0.67%</span>, SILVER{' '}
              <span className="dn-tag bear">−2.43%</span>, PLAT{' '}
              <span className="dn-tag bear">−1.33%</span>. Energy ripped
              (negatively correlated to BTC): CL{' '}
              <span className="dn-tag bull">+4.98%</span>, BRENT{' '}
              <span className="dn-tag bull">+6.27%</span>, NGAS{' '}
              <span className="dn-tag bear">−6.74%</span>.{' '}
              <span className="dn-em">
                BTC still leads the equity engine on the trailing 7d (+3.06% vs
                NQ +1.40% = +1.66pt, narrowed from +6.11pt on 07-09) because the
                window still opens near the 06-30 low, but the gap is closing as
                that low ages out; the re-coupling is now the load-bearing macro
                read, with GOLD/SILVER (+0.437 each) BTC&rsquo;s tightest ties and
                the risk-off metals + equity complex the frame to watch now that
                the idiosyncratic window has closed.
              </span>
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 200W reclaim watch — in-progress week BACK ABOVE the floor, the re-confirm-break trigger DIS-armed intra-week (still unsettled until Mon 07-13) · cover-bounce scout — price pre-condition RESTORED (all four legs above) but DEMAND block more bearish than ever (SM shorting, retail fleeing); stood down on demand · macro tail — rates leg of the OR-gate still fired, credit loose, no held hedge · squeeze-cycle — a re-stack-hostile-2 step printed BJ 15:11 · no fresh trades</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book stays flat and the primary watch has inverted back
                toward the reclaim
              </span>. The reclaim that the 07-09 note flagged as handed back
              intra-week is re-established on the in-progress weekly: spot above
              the floor, the 07-13 in-progress close above the floor, the 07-09
              daily close back above. The re-confirm-break trigger — a completed
              07-13 weekly close under the floor — is now dis-armed intra-week,
              but it is <span className="dn-em">not</span> resolved either way
              (the week settles Mon 07-13). The cover-bounce scout&rsquo;s price
              pre-condition, which failed on two legs on 07-09, is restored on all
              four this cut — but the demand block deteriorated further (SM
              deepened short, retail fled longs), so the scout stays stood down on
              demand. The macro tail&rsquo;s rates leg stays tripped but credit is
              loose and there is no hedge to roll. The trade book today is: no
              shorts, no scout entry, no fresh hedge — wait for the weekly close
              to settle the floor and for the position book to show whether the
              SM short is a press or a squeeze that gets covered.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle-floor watch — reclaim RE-ESTABLISHED on the in-progress weekly: spot $63,222 +0.24% above the $63,068.05 floor, the in-progress 07-13 week $63,199.90 prints +0.21% over it (was −1.45% under on 07-09), the 07-09 daily close $63,197.00 back above; the last COMPLETED weekly event stays the 07-06 reclaim ($64,023.60 above); the 06-15 reclaim thesis stays FALSIFIED, the 06-29 break stays CONFIRMED</span>
              <div className="dn-trade-name">
                200W floor — reclaim retaken intra-week; the re-confirm-break trigger is dis-armed but the week is still unsettled until the Mon 07-13 weekly close
              </div>
              <div className="dn-thesis">
                The stepped W-MON W-SMA200 floor sits at $63,068.05 (from the
                07-09 note&rsquo;s $63,062.79 — the floor rises ~$200/wk). The
                07-06 weekly close $64,023.60 reclaimed it and was the first
                weekly close above since the 06-29 break; the 07-09 note showed
                the in-progress week dragged −1.45% under it. This cut the bounce
                dragged the in-progress week back over: the 07-13 in-progress
                close $63,199.90 is +0.21% above the floor, spot $63,222 is +0.24%
                above, and the 07-09 daily close $63,197.00 settled back above
                after 07-08&rsquo;s single close beneath. That re-establishes the
                reclaim intra-week, but it is <em>not</em> a confirmed weekly
                close — the week settles Mon 07-13, and until then the last
                completed weekly event is the 07-06 reclaim. Status:{' '}
                <em>reclaim intact on the last completed weekly close AND on the
                in-progress week; re-confirm-break trigger dis-armed, unsettled</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor</span><span className="dn-lvl-v">$63,068.05 = full-history W-MON W-SMA200, recomputed this cut from the 2019→ parquet glob (358 weekly bars, last completed 07-06 week $64,023.60 close / floor $62,863.98 at that settle, in-progress 07-13 week close $63,199.90). Canonical weekly_200sma.json ABSENT, so ratio percentile / last-event stay unsourced (not fabricated)</span></div>
                <div><span className="dn-lvl-k">break — CONFIRMED (prior)</span><span className="dn-lvl-v bear">06-29 weekly close $60,224.70 settled below the then-floor; 06-30 daily close $58,605.40 the deepest of the leg</span></div>
                <div><span className="dn-lvl-k">reclaim — last completed weekly close</span><span className="dn-lvl-v bull">07-06 weekly close $64,023.60 (above the floor) — the first weekly close above since the break; still the last SETTLED weekly event</span></div>
                <div><span className="dn-lvl-k">in-progress week — BACK ABOVE</span><span className="dn-lvl-v bull">07-13 in-progress close $63,199.90 (+0.21% above the $63,068.05 floor); spot +0.24% above; 07-09 daily close $63,197.00 back above the floor</span></div>
                <div><span className="dn-lvl-k">re-confirm-break trigger (dis-armed, unsettled)</span><span className="dn-lvl-v bear">a completed 07-13 (or later) weekly close &lt; $63,068.05 would re-confirm the break and re-falsify the recovery — currently dis-armed with the in-progress week above; the week settles Mon 07-13</span></div>
                <div><span className="dn-lvl-k">re-reclaim (confirmation of the recovery)</span><span className="dn-lvl-v bull">a completed 07-13 weekly close &gt; $63,068.05 confirms the reclaim held through the pullback — spot needs to hold +0.24% into the settle</span></div>
              </div>
              <div className="dn-gating">
                <b>Watch discipline:</b> the 200W is a weekly-close level, and the
                desk reads it on completed weekly closes — an intra-week
                excursion above (like an intra-week excursion below) is a warning,
                not a confirmation. The 06-29 break required a completed weekly
                close below; the 07-06 reclaim required one above; the
                re-confirm-break requires the same. This note flags the
                in-progress week back over the floor and dis-arms the trigger, but
                does not treat the recovery as re-confirmed until the Mon 07-13
                settle prints above. No positioning is taken on the intra-week
                excursion alone — least of all a long into an SM short build.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STOOD DOWN on demand · the price pre-condition is RESTORED this cut (spot back above the flip, D-EMA20, D-SMA20 AND the floor — all four legs positive) but the demand block is more bearish than ever (SM deepened short −7,908, retail fled longs to 59.40%); entry deferred until demand confirms AND the rates filter re-clears (10Y &lt; 4.55%, FALSE at 4.56%)</span>
              <div className="dn-trade-name">
                Cover-bounce scout — price legs flipped back to TRUE on the floor re-reclaim; demand net-selling harder; stood down on demand, with the rates filter a second gate
              </div>
              <div className="dn-thesis">
                The scout&rsquo;s price pre-condition (spot above the flip, above
                D-EMA20/D-SMA20, above the floor) failed on two legs on 07-09 when
                price sat below D-EMA20 and below the floor. This cut all four
                legs flipped back positive: spot $63,222 is +3.28% above the flip,
                +0.84% above D-EMA20, +2.29% above D-SMA20, and +0.24% above the
                floor. But the demand block — the leg the scout was already stood
                down on — deteriorated further: SM net deepened from −3,112 to
                −7,908 (short_btc +3,004), retail fled longs −4.53pt to 59.40%,
                and the 24h bounce was spot-bid on a big-print net-sell with the
                perp book passive. A demand-confirmed cover-bounce needs SM to{' '}
                <em>cover</em> the short (short_btc bleeding, net rising toward
                flat) with OI shrinking — the exact opposite of the tape this cut,
                where SM stacked the short into the bounce. The scout stays
                deferred: price is now a green light, demand is a hard red.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">price pre-condition (RESTORED — all four legs true)</span><span className="dn-lvl-v bull">spot $63,222 &gt; flip $61,215 (+3.28%) AND &gt; D-EMA20 $62,694 (+0.84%) AND &gt; D-SMA20 $61,805 (+2.29%) AND &gt; 200W floor $63,068 (+0.24%)</span></div>
                <div><span className="dn-lvl-k">demand trigger (UNMET — the gating leg)</span><span className="dn-lvl-v bear">SM short_btc bleeds &lt; 14k with SM net rising toward flat AND OI shrinking inside 4h — currently short_btc 16,296 rising, net −7,908 deepening: the opposite</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on a demand-confirming print AND with the rates filter re-cleared (10Y &lt; 4.55%), scout long 0.2R — the structural backdrop (floor reclaimed, gamma +125.6M dampening, 1M TD9 BUY) supports it once demand turns and rates re-clear</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1d close &lt; $63,068 (200W floor) — a close back below re-arms the break watch and ends the reclaim read</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$65,346 (D-EMA50) then $65,387 (D-SMA50) — the first overhead resistance ~3.3% up</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · take half at the D-EMA50/D-SMA50 pair</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R (illustrative, on a demand-confirmed entry near spot):</b>{' '}
                entry ~$63,222, stop $63,068 = ~$154 risk on a tight floor stop;
                first target $65,346 = ~$2,124 reward ≈ 13.8:1 nominal — but the
                tight-stop geometry is deceptive: a $154 stop directly on the
                floor will be run by noise, so a real scout would size the stop
                below the D-EMA20 $62,694 (~$528 risk, ~4.0:1 to $65,346) rather
                than pin it to the floor. <b>Hard rule:</b> no scout long while SM
                is stacking the short into the bounce — the demand leg is the
                gate, and a price-only trigger into an SM short build is the false
                signal this framework exists to refuse. The bounce is being sold
                by smart money; do not buy what they are selling until they cover.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail — rates leg of the OR-gate still FIRED (10Y 4.56% &gt; 4.53%), credit leg un-fired (HY OAS 2.70%, 8bp below the 2.78% gate), reclaim-long rates filter now FALSE (10Y ≥ 4.55%); no held hedge to roll — a watch-event, not an auto-roll</span>
              <div className="dn-trade-name">
                Downside put-spread — no position; the OR-gate&rsquo;s rates leg stays tripped but credit is loose and BTC trades its own floor band, not rates
              </div>
              <div className="dn-thesis">
                The 29MAY put-spread tail closed on its 08:00Z settle back in the
                May lineage; there is no held hedge. The re-grow OR-gate (HY OAS
                &gt; 2.78% OR 10Y &gt; 4.53%) has its rates leg tripped — 10Y 4.56%
                is above the 4.53% gate — while the credit leg stays un-fired at
                2.70% (8bp below the 2.78% trigger, tightened 3bp on the day but
                still loose). The reclaim-long rates filter (10Y &lt; 4.55%) is now
                cleanly FALSE at 4.56%, having sat at the boundary on 07-09. With
                no hedge to roll and credit decisively loose, the rates fire is a
                watch-event: a single-leg OR-gate trip does not auto-open a tail,
                and BTC is trading its own floor band this cut, not the rates
                complex. The fresh liquidity print (Fed net liq +0.118T to
                $5.958T, EXTREME RISK-ON) cuts the other way — a risk-on episodic
                that argues against re-growing a downside tail here.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · no roll · watch-only</span></div>
                <div><span className="dn-lvl-k">re-grow OR-gate</span><span className="dn-lvl-v bear">10Y &gt; 4.53% FIRED (at 4.56%) · HY OAS &gt; 2.78% un-fired (at 2.70%, 8bp to fire) — a single leg tripped is a watch, both legs would be a stronger signal</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bear">10Y &lt; 4.55% now FALSE at 4.56% — the rates filter no longer clears a scout long even if demand turned</span></div>
                <div><span className="dn-lvl-k">counter-signal</span><span className="dn-lvl-v bull">Fed net liquidity +0.118T to $5.958T (EXTREME RISK-ON episodic) — the fresh weekly print argues against a downside tail</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as
                the levels drift, not backtested breakpoints. A new hedge leg on
                a both-legs fire would roll to a 13JUL/17JUL forward — but the
                near dealer strip is entirely positive (net-long-gamma, no
                near-dated negative amplifier), so a fresh tail would carry no
                gamma tailwind, exactly as the 07-09 note flagged. No hedge is
                opened on a single-leg rates trip into a loose-credit, rising-
                liquidity backdrop.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle — a re-stack-hostile-2 step printed BJ 15:11 07-09 (Δshort +1,464, Δlong −504, Δnet −1,968 at spot $62,860 — the loudest single-minute short add of the 24h), but it is a lone one-off inside the bounce&rsquo;s early leg, not a re-established cadence</span>
              <div className="dn-trade-name">
                Squeeze-cycle — a discrete short-stack step printed BJ 15:11, but the 7-day BJ 13–15 cadence stays FALSIFIED; read it as a one-off signature, not a base rate
              </div>
              <div className="dn-thesis">
                The 05-31 note falsified the 7-day BJ 13–15 cadence and the
                framework has run as a watchlist since. This cut a{' '}
                <span className="dn-tag bear">re-stack-hostile-2 signature</span>{' '}
                (Δshort &gt; 0 + Δlong &lt; 0 same minute) printed at{' '}
                <span className="dn-tag bear">2026-07-09 07:11Z (BJ 15:11
                07-09)</span> with spot $62,860: short_btc +1,464, long_btc −504,
                SM net stepped −1,968 in one minute — the largest single-minute
                short add of the 24h, and it happened to land inside the old BJ
                13–15 window. But it is a{' '}
                <em>lone print</em>, not a re-established cadence: the rest of the
                24h short build was gradual (net drifting from −3,112 to the
                −8,083 trough over ~13h), and no second discrete step followed. The
                framework reads it as a meaningful tape signature — SM stacking
                the short into the bounce&rsquo;s early leg — but assigns it no
                calendar prior. Treat the next Δnet ≤ −1.5k print as a signal in
                itself, not as the start of a new cycle.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">cadence FALSIFIED (since 05-31); re-stack-hostile-2 signatures remain meaningful when they print but carry no time-of-day prior</span></div>
                <div><span className="dn-lvl-k">surrogate step this cut</span><span className="dn-lvl-v bear">re-stack-hostile-2 @ 2026-07-09 07:11Z (BJ 15:11 07-09) · spot $62,860 · Δshort +1,464, Δlong −504, Δnet −1,968 (largest single-minute Δ of the 24h)</span></div>
                <div><span className="dn-lvl-k">SM trough (most short) in 24h</span><span className="dn-lvl-v bear">−8,082.7 BTC @ 2026-07-09 20:51Z (BJ 04:51 07-10) · ~13.7h after the BJ 15:11 step, reached on a gradual build not a second discrete step</span></div>
                <div><span className="dn-lvl-k">forward gating</span><span className="dn-lvl-v">watch any fresh Δnet ≤ −1.5k as a one-off signature; an SM short that starts to COVER (short_btc bleeding, net rising) inside a held-floor bounce is the affirmative cover-bounce read the scout waits for</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a falsified base rate still leaves the
                signature meaningful — the BJ 15:11 step is a real short-stack
                tell, but a single print inside the old window is coincidence, not
                a re-established cadence. Re-stack-hostile-2 signatures are read as
                tape signals when they print; they no longer predict the next step
                by clock. The tell that matters for the book is the inverse: the
                first sign SM is covering the short rather than adding to it.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the floor was re-reclaimed intra-week · the bounce ran on an SM short stack + retail exit, not demand · the scout&rsquo;s price legs flipped green but demand is a hard red · the single line is the Mon 07-13 weekly close</span>
            </h2>

            <p>
              Of the 07-09 decision conditions: the re-confirm-break trigger (a
              completed weekly close below the floor) DID NOT FIRE and is now
              dis-armed intra-week (the in-progress week closed back above); the
              cover-bounce scout&rsquo;s price pre-condition, FAILED on two legs
              on 07-09, FLIPPED BACK to true on all four this cut; the demand
              block DID NOT confirm — it deteriorated (SM deepened short, retail
              fled); the macro rates leg of the OR-gate STAYED fired and the
              reclaim-long rates filter dropped from its boundary to cleanly
              FALSE; no held short or hedge needed to fire. <em>The floor was
              re-reclaimed on price, the scout&rsquo;s price gate re-opened, and
              the demand gate slammed harder shut — the bounce is being sold by
              smart money, so the book takes nothing.</em>{' '}
              The conditions today re-set around a re-reclaimed floor, an SM short
              stacked into the bounce, a restored-but-demand-gated scout, and an
              unsettled weekly:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>200W weekly close (PRIMARY, unsettled)</td><td>in-progress 07-13 week $63,199.90 = +0.21% above the $63,068.05 floor; settles Mon 07-13</td><td>read on the completed weekly close only — a close above confirms the reclaim held; a close below re-confirms the break. No positioning on the intra-week excursion</td></tr>
                <tr><td>Cover-bounce scout (long) — price RESTORED, demand GATED</td><td className="bear">price legs all true (above flip / D-EMA20 / D-SMA20 / floor); demand UNMET — SM short_btc must bleed &lt; 14k with net rising toward flat AND OI shrinking inside 4h</td><td>scout long 0.2R ONLY on the demand-confirming print AND with the rates filter re-cleared (10Y &lt; 4.55%); stop below D-EMA20 $62,694, targets $65,346 / $65,387 — no entry while SM stacks the short</td></tr>
                <tr><td>Floor lost again (break re-confirmation)</td><td className="bear">1d close &lt; $63,068 (200W floor) then a completed 07-13 weekly close below</td><td>re-arms the confirmed-break read; the reclaim is re-falsified and the digestion-above-floor thesis ends — reassess toward the $60k negative-gamma cluster</td></tr>
                <tr><td>Floor holds + gamma stays positive</td><td className="bull">1d closes hold &gt; $63,068 AND aggregate GEX stays positive (no fresh negative chunk added on the near strip)</td><td>digestion-above-floor read holds; scout asymmetry improves only if/when SM begins to cover the short</td></tr>
                <tr><td>SM short covers (the demand tell)</td><td className="bull">short_btc bleeds with SM net rising toward flat AND OI shrinking inside a held-floor bounce</td><td>the affirmative cover-bounce read — arms the scout&rsquo;s demand leg; a Δnet ≥ +1.5k cover step is the trigger to watch</td></tr>
                <tr><td>Macro tail re-grow (single leg fired)</td><td className="bear">10Y &gt; 4.53% FIRED (at 4.56%) · HY OAS &gt; 2.78% un-fired (at 2.70%, 8bp to fire)</td><td>watch-only — a single-leg trip does not auto-open a tail; both legs + a BTC-internal break would; Fed net liq +0.118T argues against</td></tr>
                <tr><td>Reclaim-long rates filter (now FALSE)</td><td className="bear">10Y &lt; 4.55% — FALSE at 4.56%</td><td>the rates filter no longer clears a scout long even on a demand-confirmed print; a rates leg to re-clear is a second gate</td></tr>
                <tr><td>Squeeze-cycle cadence (FALSIFIED)</td><td className="stale">7-day BJ 13–15 base rate is dead; the BJ 15:11 step is a one-off signature</td><td>read each fresh Δnet ≤ −1.5k (short add) or ≥ +1.5k (short cover) print as a signal in itself — no time prior</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the Mon 07-13 weekly close settles above the $63,068 floor
                (confirming the reclaim held through the pullback) or below it
                (re-confirming the break), and whether the SM short stacked into
                this bounce starts to COVER — short_btc bleeding, net rising toward
                flat — which would arm the scout&rsquo;s demand leg, or presses
                further, which would fade price back to the flip and the $60k
                negative cluster
              </span>. Until then this note runs as written: the floor is
              re-reclaimed intra-week but unsettled, the cover-bounce scout&rsquo;s
              price gate is green while its demand gate is a hard red, the macro
              rates leg is a single-leg watch, and the dealer book&rsquo;s deep
              +125.6M long-gamma pins price to the floor band. The bounce is
              spot-bid and being sold by smart money; the right read for the next
              24h is <em>patient — the floor is decided on the Mon 07-13 close,
              and the long is decided when SM covers, not when price ticks up</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit
            </span>
            <b>Status:</b> this is the v2 EN note, promoted by STAGE C after the
            STAGE B codex hostile audit (verdict <em>PASS-WITH-NOTES · 0 CRITICAL
            / 2 MAJOR / 2 MINOR</em>, recorded in{' '}
            <code>audits/2026-07-10-desk-note.md</code>). Every finding was applied
            in place and closed by grep across the full EN file (pattern searched ·
            hits before · hits after); the cited lines were treated as examples of
            each wrong claim, not an exhaustive list.{' '}
            <b>DN-001 (MAJOR · scout-entry gate internally inconsistent):</b>{' '}
            the scout rows armed the long &ldquo;on a demand-confirming print&rdquo;
            while the rates row called the rates filter a second gate. Patterns
            searched <code>on demand alone</code>, <code>until demand confirms</code>,{' '}
            <code>demand-confirming print, scout long</code>,{' '}
            <code>stood down on demand alone</code> — 5 demand-only assertions
            before, 0 after. Resolved by making the rates re-clear (10Y &lt; 4.55%)
            an explicit second gate on the scout-entry row (816), the decision-table
            action (943), the scout dn-side (793), the gated-on-demand line (284) and
            the scout name (795) — RESOLVED (hits-after 0).{' '}
            <b>DN-002 (MAJOR · unsupported lineage superlative):</b> pattern{' '}
            <code>largest weekly add of the lineage</code> — 1 before, 0 after. The
            file quotes the current Fed net-liq move (+0.118T to $5.958T) but no
            prior weekly deltas, so the superlative was unproven; deleted, keeping
            &ldquo;a genuine risk-on episodic&rdquo; — RESOLVED (hits-after 0).{' '}
            <b>DN-003 (MINOR · macro-header DXY delta):</b> pattern{' '}
            <code>DXY softened −0.18</code> — 1 before, 0 after. Header now reads{' '}
            <code>DXY softened −0.11 to 100.94</code>, matching body (622), table
            (664) and macro source; the −0.18 belongs to USD/JPY (629 / 666, left
            intact) — RESOLVED (hits-after 0).{' '}
            <b>DN-004 (MINOR · D-SMA50 target misstated):</b> pattern{' '}
            <code>65,654</code> — 2 before (818, 943), 0 after. Both scout targets
            now read D-SMA50 $65,387, matching the MA prose/matrix D-SMA50
            $65,387.33 (276-277 / 484-485) and the parquet recompute — RESOLVED
            (hits-after 0). Overall: <b>post codex hostile audit</b>, all 4
            findings RESOLVED with zero stale grep residue. Principal self-computed
            checks re-verified clean at audit: funding × 1095 (+9.93% ann, 24h mean
            +6.96%, cap occupancy 229 / 1440 = 15.9%, zero negative rows); SM cut
            fraction 4,795.8 / 3,112.4 = 154%; GEX dual-reference sign (flip
            $61,215, spot +3.28% / idx +3.64%, both positive); MA matrix off parquet
            2026-07-10 00:05Z close $63,199.90 vs live spot $63,221.72 (358 weekly
            bars); 200W floor recompute $63,068.05 (weekly_200sma.json ABSENT,
            percentile / last-event left unsourced); cross-asset |r| 0.320 NORMAL;
            macro Tier-1 (10Y 4.56%, TIPS 2.31%, HY OAS 2.70%, DXY 100.94, Fed net
            liq $5.958T); requireViewer path <code>/desk/2026-07-10</code>. EN/ZH
            numeric parity enforced at STAGE C against this v2.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among
            principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and
            not personalized to any recipient&rsquo;s circumstances. Numbers
            reflect a single atomic snapshot (2026-07-10 00:06Z) with section-level
            provenance disclosed in the manifest band above; the macro Tier-1
            panel render is 2026-07-09 22:15Z (~1.85h before snapshot) and some
            inputs are explicitly stale or pending and flagged as such. Levels,
            sizes, and conditions are illustrative of the desk&rsquo;s process, not
            standing recommendations. Past correlation, gamma, and positioning
            patterns do not bind future tape. Derivatives carry the risk of total
            loss and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The floor came back on the print, but the bounce is being sold —
                smart money stacked the short, retail fled the long. Price is a
                green light; demand is a hard red. The floor is decided Mon; the
                long is decided when they cover. Patient.
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
            v2 · 2026-07-10 00:06Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
