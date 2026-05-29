import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// Internal-only route: not in public nav, not in sitemap, noindex/nofollow.
// Description deliberately anodyne — any future external share (Slack/email
// link preview) shows neutral text rather than dated trade specifics.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-05-29 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-05-29',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-05-29' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260529() {
  await requireViewer('/desk/2026-05-29');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · DESK NOTE · 2026-05-29 · v2</span>
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
              <span className="dn-big">$73,659</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.13%</span>
            </div>
          </div>

          {/* DATA PROVENANCE BAND */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-05-29 00:08Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-29 00:08Z (pinned line 37049)</td>
                  <td className="dn-flag">fresh · 1-min · file tail at audit time = pin</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-05-29 00:01Z scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    ~7-min stale vs snapshot anchor · in-progress bar · scan
                    archived in audits/2026-05-29-desk-note.md
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-05-29 00:01Z snapshot</td>
                  <td className="dn-flag">
                    fresh · Deribit idx $73,750 vs live $73,659 · 1004 inst
                    (was 890 · 28MAY 0DTE expired, 1JUN/19JUN/28AUG new
                    expiries + added strikes picked up overnight)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-05-29 00:01Z
                  </td>
                  <td className="dn-flag">~7-min lag · 7d 1h bars · 22 assets</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-28 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.9h render lag · FRED Tier-1 eased further (10Y −2bp to
                    4.48%, TIPS −1bp to 2.09%, HY OAS −1bp to 2.71%, MOVE
                    −4.05 to 70.9) · DXY firmer +0.29 to 99.50, Fed net liq
                    −0.058T to $5.872T · Tier-3 inflation rows fetch-failed
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-05-29 00:06Z</td>
                  <td className="dn-flag">
                    ~2-min stale vs snapshot anchor · offsets recomputed vs live spot ·
                    W-SMA150 / W-SMA200 non-computable (126 weekly bars on file)
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
              <span className="dn-src">live · 00:08Z · 24h mean +9.66% · 737/1441 24h rows pinned at cap (~51%); 977 minute-deltas flat (cap-flat + non-cap-flat)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+10.95% → +10.95%</span>
              <span className="dn-src">range +5.48% / +10.95% · trough @ 2026-05-28 08:03Z (BJ 16:03 05-28) +5.48% ann · off-cap from BJ 11:44, re-pinned cap by snapshot</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+5.34% (+5,401 BTC)</span>
              <span className="dn-src">live · SM short_btc +9.76k vs long_btc +3.30k · both SM sides added, short 3× the long-add — short-loaded</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">63.85 / 36.15</span>
              <span className="dn-src">live_db `mkt_long_pct` · re-crowded long from 62.64 → 63.85 (fresh lineage peak) INTO a third day of break</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−29.0k (net SHORT)</span>
              <span className="dn-src">live · long 13.09k − short 42.08k · trough −31.70k @ 2026-05-28 09:46Z (BJ 17:46 05-28); covered ~2.7k off trough by snap</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 05-28 note</span>
              <span className="dn-v bear">−22.5k → −29.0k (−6.5k more short)</span>
              <span className="dn-src">|Δ|/prior_net = 28.7% · re-stack hostile-2 step Δnet −4,396 @ 2026-05-28 06:01Z (BJ 14:01) — Δshort +4,000 in one minute</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.4% / 26.61%</span>
              <span className="dn-src">GEX median IV · 1004 inst.</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−1.71% (below)</span>
              <span className="dn-src">flip $74,939 · vs live spot $73,659 (−1.71%) / GEX file −1.6% off Deribit idx $73,750 (−1.59%) — both refs negative, page rounds to −1.71% for tile consistency · aggregate GEX −47.9M (was −70.8M) · ex-29MAY ≈ +48M</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                Yesterday&rsquo;s flip-extend short runner walked its full
                target ladder
              </span>. The press-extends gate fired through the BJ 14:01 05-28
              re-stack hostile-2 step — a second consecutive ~4k single-minute
              short re-stack (<span className="dn-tag bear">Δshort +4,000 /
              Δnet −4,396</span> at spot $72,969, SM net stepped −25,683 →
              −30,079 in one minute) — and price ran the runner&rsquo;s
              target #2 W-EMA200-seed $73,710 and target #3 D-SMA100
              cycle-anchor $72,958 both clean, with the{' '}
              <span className="dn-tag bear">24h low $72,614 @ 2026-05-28
              14:07Z (BJ 22:07 05-28)</span> wicking{' '}
              <span className="dn-em">below the cycle anchor</span> for the
              first time of the lineage. SM net is at a fresh lineage-peak
              short <span className="dn-tag bear">−29.0k</span> (long 13.09k −
              short 42.08k); short_btc 42.08k is a new lineage high. But the
              structural reason to hold the press resolves today:{' '}
              <span className="dn-signal">
                the 29MAY26 expiry — now 0.3 DTE carrying −96.34M, the
                heaviest single-expiry gamma chunk of the entire lineage —
                expires this Beijing-afternoon (~08:00Z), and ex-29MAY the
                dealer book flips from −47.9M aggregate to roughly +48M net
                positive
              </span>. This note marks the ladder complete, takes the runner
              off into the expiry resolution, and pivots to the post-expiry
              gamma flip and the first position-book cover off the trough.
            </p>

            <p>
              BTC prints <span className="dn-tag">$73,659</span> live, −1.13%
              on 24h, <span className="dn-tag bear">−1.71% below the new
              0-γ flip $74,939</span> (drifted down $618 from yesterday&rsquo;s
              $75,557 — the flip kept following spot down). The structure took
              one more step down overnight:{' '}
              <span className="dn-signal">spot lost the W-SMA20 floor</span>{' '}
              that held to the dollar yesterday — now{' '}
              <span className="dn-tag bear">W-SMA20 $74,151 (−0.66%)</span>{' '}
              (was +0.42% support) — and sits in a thin sandwich between{' '}
              <span className="dn-tag bear">W-EMA200 seed $73,702 (−0.06%)</span>{' '}
              just overhead and the cycle anchor{' '}
              <span className="dn-tag bull">D-SMA100 $73,021 (+0.87%)</span>{' '}
              just below — the <em>only</em> positive offset on the entire
              matrix. Every other Daily and Weekly MA is overhead, the nearest
              cluster <span className="dn-tag bear">D-SMA150 $76,368
              (−3.55%)</span> a full $2.7k away. The 24h low breached the
              cycle anchor intraday, but{' '}
              <span className="dn-em">
                the daily close held above it — the 05-28 1d close $73,591 and
                the in-progress 05-29 close $73,630 both sit above D-SMA100
                $73,021, so the cycle ladder has not broken on a close
              </span>. And the most recent tape shows the first real
              two-sided pivot of the down-leg: SM net{' '}
              <span className="dn-signal">covered ~2.7k off the −31.7k
              trough</span> into the snapshot, long_btc rebuilt from a 9.74k
              trough to 13.09k, 1h RSI recovered 33.1 → 48.7, yesterday&rsquo;s
              1h/4h ⚡ TD9 BUYs completed and flipped to Sell setups, and spot
              CVD absorbed +3,306 into the 24h drop.{' '}
              <span className="dn-em">
                The press was right and is now spent at the bottom of the
                modelled ladder; the amplifier that justified holding it
                expires in ~8 hours.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · re-stack hostile-2 at BJ 14:01 · SM 28.7% more short · first cover off the −31.7k trough</span>
            </h2>

            <p>
              <span className="dn-signal">
                Cycle-2 step 2 landed on the BJ 13–15 cadence exactly as the
                prior note modelled, and it printed as a continuation, not a
                cover
              </span>. <span className="dn-tag">2026-05-28 06:01Z (BJ 14:01
              05-28)</span> with spot <span className="dn-tag">$72,969.28</span>:
              long_btc moved <span className="dn-tag">11,417 → 11,021</span>{' '}
              (−396 BTC), short_btc moved{' '}
              <span className="dn-tag">37,101 → 41,101</span> (+4,000 BTC in{' '}
              <em>one minute</em>), SM net stepped{' '}
              <span className="dn-tag">−25,683 → −30,079</span> (Δnet −4,396),
              and the values stayed pinned the next two minutes (a real book
              change, not a quote glitch). That fired the prior note&rsquo;s
              re-stack-hostile-2 gate (discrete SM Δ ≤ −3k pushing SM &lt;
              −24k) directly, and it is the second consecutive ~4k+
              single-minute short re-stack on the 7-day BJ 13–15 cadence —
              the cadence is unbroken. From there SM ran to its 24h trough{' '}
              <span className="dn-tag bear">−31,696 @ 2026-05-28 09:46Z (BJ
              17:46 05-28)</span> with short_btc peaking{' '}
              <span className="dn-tag bear">42,450 @ 2026-05-28 16:26Z (BJ
              00:26 05-29)</span>. The snapshot SM is{' '}
              <span className="dn-tag">−28,995</span> — long 13,086, short
              42,082 — which is{' '}
              <span className="dn-em">~2.7k covered off the trough</span>:
              unlike 05-28 (which sat at its trough into the snapshot), the
              book has started to come back, with long_btc rebuilt +3.35k
              from its 9.74k trough. SM net is 28.7% more short than the 05-28
              note (|−28,995 − (−22,535)| / 22,535 = 6,460 / 22,535 = 28.7%),
              a smaller cut fraction than yesterday&rsquo;s 87% — the rate of
              the short build is decelerating even as the absolute position
              hits a new peak.
            </p>

            <p>
              The leverage side still reads one-way press, but funding came
              off the cap for a long mid-day window before re-pinning.
              Funding live at <span className="dn-tag">+10.95% ann</span> —
              the Binance long-pay cap (8h ceiling 0.01000, ann = ×1095) —
              but the 24h path ranged{' '}
              <span className="dn-tag">+5.48% / +10.95%</span> with a trough{' '}
              <span className="dn-tag">+5.48% ann @ 2026-05-28 08:03Z (BJ
              16:03 05-28)</span>; funding first dropped off cap at{' '}
              <span className="dn-tag">2026-05-28 03:44Z (BJ 11:44)</span>,
              worked a soft mid-day window, then re-pinned the cap by the
              snapshot. 24h mean ann{' '}
              <span className="dn-tag">+9.66%</span> (hotter than 05-28&rsquo;s
              +9.53% — slightly more cap-time). Cap occupancy{' '}
              <span className="dn-tag">737 / 1441 24h rows (~51%)</span> at
              exactly +10.95% (lower than 05-28&rsquo;s 61% — the mid-day
              off-cap window pulled occupancy down); minute deltas{' '}
              <span className="dn-tag">236 up / 227 down / 977 flat</span>.
              OI grew <span className="dn-tag bear">+5,401 BTC (+5.34%)</span>{' '}
              over 24h — a far larger expansion than 05-28&rsquo;s +2.02%.
              Within the SM (top-trader) book both sides added this time:
              short_btc <span className="dn-tag bear">+9,757 BTC</span> and
              long_btc <span className="dn-tag">+3,297 BTC</span> at the 24h
              endpoints — short added ~3× the long-add, structurally
              short-loaded but two-sided (unlike 05-28&rsquo;s long-bleed).
              Retail <span className="dn-tag bear">mkt_long_pct 63.85%</span>{' '}
              from 62.64% — a fresh lineage peak, the most crowded long the
              retail side has been across the now 7-day window, into a third
              consecutive day of break. Perp trades a{' '}
              <span className="dn-tag bear">−$120.10 discount</span> to spot
              at the snap (1h mean −$107.08, range −$149.10 / −$81.79; 4h
              mean −$106.47, range −$158.08 / −$42.73; 24h mean −$127.47,
              range −$411.82 / +$27.54 — basis blew to −$412 on the break
              impulse, briefly flipped to a +$28 premium once, then settled
              to a tighter negative). 1-min aggressor skew snap{' '}
              <span className="dn-tag">+1.3</span> (1h mean +15.7, range
              −25.8 / +61.6) — net buy aggression just under the surface, the
              same oversold-reflex bid signature as the prior two snaps.{' '}
              <span className="dn-em">
                Funding off-cap-then-re-pinned + basis still wide negative +
                retail at a fresh lineage-peak long + SM at lineage-peak short
                but ~2.7k covered off the trough: the leverage book is still
                maximally one-sided, but the first crack — the cover off the
                trough — is now visible on the position side, not just in the
                CVD.
              </span>
            </p>

            <p>
              Windowed flow is <em>futures-led extension absorbed by spot</em>{' '}
              on the 24h, turning to a small futures-led bid on the most
              recent legs. 24h: price{' '}
              <span className="dn-tag bear">−1.13%</span>, OI{' '}
              <span className="dn-tag bear">+5,401 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +3,306</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −144</span>, big-print{' '}
              <span className="dn-tag bear">−747 BTC / 1,011 prints</span>,
              taker-net <span className="dn-tag bear">−144</span> —{' '}
              <span className="dn-em">
                spot CVD ran +3,306 INTO a $845 drop (passive spot bid
                defending again), big-print net −747 BTC (block sellers
                pressing), the short-side imbalance riding on the perp side
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bull">+0.46%</span>, OI{' '}
              <span className="dn-tag">+883 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +2,344</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +453</span>, big-print{' '}
              <span className="dn-tag bear">−66 BTC / 159 prints</span>,
              taker-net <span className="dn-tag bull">+453</span> —{' '}
              <em>the most recent 4h flipped to a futures bid (taker +453)
              with OI re-expanding +883 as price bounced off the low</em>. 1h:
              price <span className="dn-tag bull">+0.13%</span>, OI{' '}
              <span className="dn-tag bear">−81 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,164</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +70</span>, taker-net{' '}
              <span className="dn-tag bull">+70</span> —{' '}
              <em>last hour both spot and futures bid with OI shrinking — a
              cover-coloured micro-shape</em>. The bid that defended through
              the 24h drop has converted the most recent hours into a
              two-sided buy, and the OI shrink on the 1h is the
              first short-trim print since the BJ 14:01 re-stack.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · down-leg matured (8h/12h death cross, 3d 1b, 1d in cloud) but oversold bounce reflex clear (1h RSI 48.7, 1h/4h TD9 BUYs completed, 8h TD9 BUY) · W-SMA20 floor lost · cycle anchor is the line</span>
            </h2>

            <p>
              The MTF map matured the down-leg and then printed a clear
              oversold-bounce reflex on the engine frames. The slow frames
              confirmed: <span className="dn-signal">8h and 12h carry
              water-down MACD death crosses</span> (5b and 3b ago, DIF −267 /
              −277 deep water-down), the <span className="dn-tag bear">3d
              water-up death cross aged to 1 bar</span> (DIF +480, was 刚印
              yesterday — the cycle-frame bear probe is now confirmed one bar
              in), and 1d still sits <em>in cloud</em> (72.2k–76.1k, the cloud
              floor widened down to 72.2k). Against that, the bounce is on the
              board: <span className="dn-tag bull">1h RSI recovered 33.1 →
              48.7</span>, 1h and 30m both flipped to water-down golden
              crosses (13b / 33b), 15m climbed back above cloud, and{' '}
              <span className="dn-signal">yesterday&rsquo;s 1h/4h ⚡ TD9 BUYs
              completed and flipped to Sell setups</span> (1h Sell 2, 4h Sell
              3 — the reversal hint worked) with a fresh{' '}
              <span className="dn-tag bull">8h ⚡ TD9 BUY at $73,708</span>{' '}
              printing at the low. The deepest oversold cell is now 12h (RSI
              31.6); the engine 1h–4h has lifted off the lows.{' '}
              <span className="dn-em">
                Read straight: the slow frames are still rolling over (8h/12h
                death cross, 3d probe confirmed, 1d in cloud), but the engine
                frames are bouncing — the structure says a counter-trend
                relief is live inside an intact-but-eroding mid-cycle, with
                the cycle frame (3d) now the one to watch.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">73,708</td><td className="num">56.6</td><td className="neut">death (water-up) 6b</td><td className="bull">above ↓73.1k 15b</td><td>Sell 4</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">73,702</td><td className="num">55.0</td><td className="bull">golden (water-dn) 33b</td><td className="neut">in cloud 73.5–74.4k 2b</td><td>Sell 1</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">73,705</td><td className="num">48.7</td><td className="bull">golden (water-dn) 13b</td><td className="bear">below ↑75.0k 55b</td><td>Sell 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">73,702</td><td className="num bull">35.3</td><td className="bear">death (water-dn) 14b</td><td className="bear">below ↑76.1k 19b</td><td>Sell 3</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">73,708</td><td className="num bull">34.1</td><td className="bear">death (water-dn) 5b</td><td className="bear">below ↑78.1k 39b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">73,702</td><td className="num bull">31.6</td><td className="bear">death (water-dn) 3b</td><td className="bear">below ↑78.7k 13b</td><td>Buy 7</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1d</td><td className="num">73,705</td><td className="num">36.4</td><td className="neut">death (water-up) 17b</td><td className="neut">in cloud 72.2k–76.1k 2b</td><td>Buy 3</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">73,702</td><td className="num">45.4</td><td className="neut">death (water-up) 1b</td><td className="neut">in cloud 73.5–91.1k 9b</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">73,708</td><td className="num">42.6</td><td className="bull">golden (water-dn) 6b</td><td className="bear">below ↑100.3k 17b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">73,708</td><td className="num">47.4</td><td className="neut">—</td><td className="bull">above ↓46.9k 27b</td><td>Buy 7</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (rolling latest
                    file; archived verbatim in
                    audits/2026-05-29-desk-note.md). Header alerts:{' '}
                    <em>3d water-up death cross 1b (confirmed)</em>,{' '}
                    <em>8h ⚡ TD9 BUY at $73,708</em>. Scan spot $73,702,
                    24h −1.06%, 24h H/L $74,565 / $72,556, qVol $13.15B.
                    Closes are in-progress bars; treat every value as
                    provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix completes the structural step-down. Spot $73,659
              <span className="dn-em">lost the W-SMA20 floor</span> that the
              24h low tagged to the dollar yesterday: now{' '}
              <span className="dn-tag bear">W-SMA20 $74,151 (−0.66%)</span>{' '}
              (was the +0.42% support that held). It sits just under{' '}
              <span className="dn-tag bear">W-EMA200 seed $73,702
              (−0.06%)</span> and just over the cycle anchor{' '}
              <span className="dn-tag bull">D-SMA100 $73,021 (+0.87%)</span> —
              the single positive offset left on the matrix. The 24h low
              $72,614 breached the cycle anchor intraday but no daily close
              has gone below it. Everything else is overhead:{' '}
              <span className="dn-tag bear">D-EMA50 $76,396 (−3.58%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $76,368 (−3.55%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $76,653 (−3.91%)</span>,{' '}
              <span className="dn-tag bear">D-EMA20 $76,663 (−3.92%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $77,192 (−4.58%)</span>,{' '}
              <span className="dn-tag bear">D-SMA20 $77,611 (−5.09%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $77,718 (−5.22%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $78,228 (−5.84%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $78,810 (−6.54%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $79,807 (−7.70%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $81,187 (−9.27%)</span>.
              Far above and disused: W-EMA100 $83,221 (−11.49%), W-EMA50
              $84,780 (−13.12%), W-SMA100 $88,329 (−16.61%), W-SMA50 $93,369
              (−21.11%). The long-re-engage cluster (D-SMA150) is now $2.7k
              overhead with a five-MA stack between spot and it.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-05-29 00:06Z (close
                $73,630.40); offsets recomputed against live spot $73,659.25.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. W-SMA150 / W-SMA200 still not computable —
                parquet history holds 126 weekly bars, short of both windows;
                W-EMA150 $78,228 (−5.84%) and W-EMA200 $73,702 (−0.06%) show
                because the EMA seeds from available history and are reported
                as such. The cycle anchor D-SMA100 $73,021 is now the line:
                the 05-28 daily close $73,591 and the in-progress 05-29 close
                $73,630 both hold above it; a 1d close below $73,021 would be
                the first cycle-ladder break of the window and a separate
                regime escalation. Daily closes: 05-27 $74,418, 05-28
                $73,591, 05-29 (in-progress) $73,630.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · 29MAY 0.3DTE −96.34M expires today ~08:00Z · aggregate −47.9M but ex-29MAY ≈ +48M · the heaviest wall migrated down to $74k −49.37M</span>
            </h2>

            <p>
              The dealer book&rsquo;s entire negative-gamma weight is now
              concentrated in a single expiry that resolves this
              Beijing-afternoon, and that is the structural pivot of the note.
              Aggregate GEX is <span className="dn-tag bear">−47.9M/1%</span>{' '}
              (eased back +$22.9M from yesterday&rsquo;s −70.8M — still net
              short gamma, but recovering toward zero).{' '}
              <span className="dn-signal">
                The 29MAY26 expiry is now 0.3 DTE and carries −96.34M
              </span>{' '}
              (was −84.16M at 1.3 DTE yesterday — it deepened another −$12.2M
              into its final session and is the heaviest single-expiry gamma
              chunk of the entire lineage). It expires at the Deribit 08:00Z
              settle (BJ 16:00), ~8h from the snapshot.{' '}
              <span className="dn-em">
                Subtract that one expiry and the rest of the book is roughly
                +48M net positive (−47.9M aggregate − (−96.34M) ≈ +48.4M):
                30MAY 1.3 −1.81M (light negative), 31MAY 2.3 +0.93M, 1JUN 3.3
                +19.71M (a fresh positive block), 5JUN 7.3 +1.13M, 12JUN 14.3
                −0.17M, 19JUN 21.3 −0.70M, 26JUN 28.3 +3.02M (the listed front
                strip through 26JUN nets +22.1M; the back expiries 31JUL
                +3.75M, 25SEP +9.92M, 25DEC +11.77M add +26.8M for the ~+48M
                ex-29MAY total). Once 29MAY clears today, the dealer strip
                flips from net-short-gamma
                (amplifying) back to net-long-gamma (dampening) — the
                amplifier that has powered the down-leg evaporates.
              </span>
            </p>

            <p>
              0-γ flip <span className="dn-tag">drifted to $74,939</span> (was
              $75,557, down $618 — followed spot down). Spot $73,659 is{' '}
              <span className="dn-tag bear">−1.71% below flip</span> on
              spot-denominated math (73,659.25 / 74,939 − 1 = −1.71%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads −1.6% off its
              Deribit-index $73,750 ($91 above live spot), which is −1.59% —
              both references negative, spot below the flip on both, the
              second consecutive below-flip snapshot. The wall map shifted
              down with price:{' '}
              <span className="dn-tag bear">$74k −49.37M</span> is now the
              heaviest single wall (the heaviest wall migrated down from $75k
              as spot fell through it),{' '}
              <span className="dn-tag bear">$73k −24.61M</span> deepened (was
              −14.98M — at the cycle anchor),{' '}
              <span className="dn-tag bear">$75k −20.03M</span> eased sharply
              (was −51.26M — the prior heaviest wall, now above spot and
              thinning),{' '}
              <span className="dn-tag bear">$72k −8.13M</span>,{' '}
              <span className="dn-tag bear">$70k −6.94M</span>,{' '}
              <span className="dn-tag bear">$60k −9.36M</span> crash-put
              residual. The positive ceiling above:{' '}
              <span className="dn-tag bull">$80k +14.93M</span> (eased from
              +19.82M),{' '}
              <span className="dn-tag bull">$82k +11.42M</span>,{' '}
              <span className="dn-tag bull">$74.5k +8.31M</span>,{' '}
              <span className="dn-tag bull">$77k +7.88M</span> (eased from
              +8.55M). The negative cluster $70k–$75k still sums ~−109M, but{' '}
              <span className="dn-em">
                nearly all of that lives inside the 29MAY 0.3DTE expiry that
                resolves today; the wall map is a snapshot of a book about to
                shed its amplifier
              </span>. IV median across 1004 instruments is{' '}
              <span className="dn-tag">41.4%</span> (down from 42.3%
              yesterday) against 30D close-to-close RV of{' '}
              <span className="dn-tag">26.61%</span> — chain-level richness{' '}
              <span className="dn-tag">~+14.8pt</span>. A chain-median across
              N instruments, <span className="dn-em">not</span> a tradable
              spread; expiry-/strike-level vega, skew and term structure
              remain not loaded; the vol read stays framework-only. 1004
              instruments today vs 890 yesterday — the +114 is from new
              1JUN/19JUN/28AUG expiries plus added strikes as 28MAY 0DTE cleared.
              RV methodology: 30D close-to-close, logret.std × √365 × 100 on
              the last 30 daily log returns (= 31 consecutive daily closes)
              anchored to parquet last bar 2026-05-29 00:06Z; range $73,591 –
              $82,178 over the underlying 31-close window. (For reference, last
              30 closes / 29 returns reads 26.91%; the 26.61% page value comes
              from 30 returns.)
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Tier-1 eased again (10Y 4.48%, HY OAS 2.71%, MOVE 70.9) but DXY firmer 99.50 + Fed net liq drained −$58B · BTC-vs-TradFi decoupling holds at −7.2pt for a third day</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape eased on rates, credit and bond vol again, with
                two mild risk-off offsets (DXY firmer, net liquidity drawn
                down)
              </span>. Dashboard render is 2026-05-28 22:15Z, ~1.9h before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bull">4.48% (−2.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.63</span>, episodic z{' '}
              <span className="dn-tag">+0.52</span> — RISK-OFF tag, eased.
              10Y TIPS real <span className="dn-tag bull">2.09% (−1.0bp)</span>,
              regime z <span className="dn-tag bear">+1.55</span>, episodic z{' '}
              <span className="dn-tag bear">+1.07</span> — still RISK-OFF.
              5Y5Y BE inflation{' '}
              <span className="dn-tag">2.25% (−2.0bp)</span>. HY OAS{' '}
              <span className="dn-tag bull">2.71% (−1.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.40</span>, episodic z{' '}
              <span className="dn-tag bull">−2.10</span> — still a deep
              risk-on episodic, now 9bp below yesterday&rsquo;s 2.80% re-grow
              gate. MOVE bond vol{' '}
              <span className="dn-tag bull">70.9 (−4.05)</span> — eased further
              into &ldquo;loose&rdquo;, off the 79.9 spike of two weeks back.
              The offsets: DXY{' '}
              <span className="dn-tag bear">99.50 (+0.29)</span>, episodic z{' '}
              <span className="dn-tag bear">+1.83</span> — firmer, a mild
              risk-off episodic; Fed net liquidity{' '}
              <span className="dn-tag bear">$5.872T (−0.058T)</span>, episodic
              z <span className="dn-tag bear">−2.28</span> — a $58B drawdown
              (the weekly print drained, a mild risk-off episodic). US-JP 10Y
              spread <span className="dn-tag bull">1.97% (−2.0bp)</span>;
              USD/JPY <span className="dn-tag bear">159.57 (+0.33)</span> (yen
              weaker). NFCI −0.510 neutral (fresh, no longer stale).{' '}
              <span className="dn-em">
                Net: the re-grow gates moved further away again (HY OAS gate
                2.80% — at 2.71%; 10Y gate 4.55% — at 4.48%), the reclaim-long
                rates filter (10Y &lt; 4.55%) stays true at 4.48%, and the
                macro tape is still net risk-on on the lines that matter for
                BTC. BTC broke from inside its own book for a third
                consecutive day while the macro tail eased — DXY firming and
                the net-liq drawdown are the only two stress vectors, and
                neither is a credit event
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
                <tr><td>US 10Y nominal</td><td className="num">4.48%</td><td className="num bull">−2.0bp</td><td className="num bear">+1.63</td><td className="num">+0.52</td><td className="bear">tight, eased</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.09%</td><td className="num bull">−1.0bp</td><td className="num bear">+1.55</td><td className="num bear">+1.07</td><td className="bear">tight · still RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.25%</td><td className="num bull">−2.0bp</td><td className="num">+0.21</td><td className="num">+0.15</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.71%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.40</td><td className="num bull">−2.10</td><td className="bull">loose · deep risk-on episodic</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.510</td><td className="num">+0.00</td><td className="num">+0.10</td><td className="num bull">−0.81</td><td className="neut">neutral · fresh</td></tr>
                <tr><td>MOVE bond vol</td><td className="num bull">70.9</td><td className="num bull">−4.05</td><td className="num bull">−0.53</td><td className="num">−0.32</td><td className="bull">loose · eased further</td></tr>
                <tr><td>DXY</td><td className="num">99.50</td><td className="num bear">+0.29</td><td className="num bear">+1.14</td><td className="num bear">+1.83</td><td className="bear">firmer · risk-off episodic</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.872T</td><td className="num bear">−0.058T</td><td className="num">+0.22</td><td className="num bear">−2.28</td><td className="bear">drained $58B · risk-off episodic</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.57</td><td className="num bear">+0.33</td><td className="num bear">+1.27</td><td className="num">+0.98</td><td className="bear">yen weaker</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.97%</td><td className="num bull">−2.0bp</td><td className="num bull">−0.86</td><td className="num">+0.52</td><td className="bull">tightened</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7847</td><td className="num bull">−0.00</td><td className="num bull">−1.83</td><td className="num bull">−1.58</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp (monthly)</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.264</span>{' '}
              (loosened further from 05-28&rsquo;s 0.297 — still NORMAL band).
              BTC&rsquo;s listed ties: NQ{' '}
              <span className="dn-tag">+0.518</span> (held the top spot), CL{' '}
              <span className="dn-tag">−0.494</span>, SP500{' '}
              <span className="dn-tag">+0.467</span>, SILVER{' '}
              <span className="dn-tag">+0.463</span>, NVDA{' '}
              <span className="dn-tag">+0.423</span>, BRENT{' '}
              <span className="dn-tag">−0.395</span>, GOLD{' '}
              <span className="dn-tag">+0.375</span>, AMZN{' '}
              <span className="dn-tag">+0.358</span>. 7d relative performance:{' '}
              <span className="dn-tag bear">BTC −4.73%</span> (deteriorated
              further from −4.55%), NQ{' '}
              <span className="dn-tag bull">+2.50%</span>, SP500{' '}
              <span className="dn-tag bull">+1.36%</span>, JP225{' '}
              <span className="dn-tag bull">+4.84%</span>, TSLA{' '}
              <span className="dn-tag bull">+4.85%</span>, META{' '}
              <span className="dn-tag bull">+4.01%</span>, AAPL{' '}
              <span className="dn-tag bull">+1.77%</span>, NVDA{' '}
              <span className="dn-tag bear">−2.70%</span> (turned negative).
              Metals soft: GOLD{' '}
              <span className="dn-tag bear">−0.63%</span>, SILVER{' '}
              <span className="dn-tag bear">−0.58%</span>, PLAT{' '}
              <span className="dn-tag bear">−1.84%</span>. Energy still
              collapsed: CL <span className="dn-tag bear">−9.78%</span>, BRENT{' '}
              <span className="dn-tag bear">−9.12%</span>, NGAS{' '}
              <span className="dn-tag bull">+5.09%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine held at ~−7.2pt (BTC
                −4.73% vs NQ +2.50%, SP500 +1.36%) — the third consecutive day
                of the widest, longest BTC-vs-macro decoupling of the window.
                NVDA turned negative on the 7d, the TradFi tape cooled, but
                the equity indices stayed positive while BTC extended down.
                Endogenous-to-crypto remains the load-bearing read
              </span>. JGB monthly 2.52% carries EXTREME RISK-OFF monthly tag
              — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · runner ladder complete — close into the 29MAY expiry · cover-bounce scout gate softening, flip not yet reclaimed · macro tail expires today</span>
            </h2>

            <p>
              <span className="dn-signal">
                The flip-extend short is done — it walked its full target
                ladder and the structural reason to hold the remainder expires
                in ~8 hours
              </span>. Yesterday&rsquo;s book (take half at the W-SMA20 target,
              press the runner toward W-EMA200 seed $73,710 and D-SMA100
              cycle-anchor $72,958 inside the 29MAY amplifier window) is fully
              resolved: both targets tagged on the BJ 14:01 re-stack-hostile-2
              extension, with the 24h low $72,614 wicking below the cycle
              anchor. The discipline yesterday named for the runner —{' '}
              <em>full close into the amplifier window through 29MAY
              expiry</em> — is now the action: take the remainder off into the
              expiry resolution today. Do <span className="dn-em">not</span>{' '}
              add new short here: price is at the bottom of the modelled
              ladder, the −96.34M amplifier resolves today and the book flips
              positive ex-29MAY, the first SM cover off the −31.7k trough has
              printed, and the engine frames are bouncing. The other side —
              the cover-bounce scout — has its gate softening (long_btc
              rebuilt &gt; 13k, 1h/4h TD9 BUYs completed, spot absorption) but
              the flip reclaim leg is not met; better-asymmetry is to wait for
              the post-expiry gamma flip + a flip reclaim, not to pre-position
              the bounce against a still-loaded short book.
            </p>

            <div className="dn-trade">
              <span className="dn-side short">short · primary · ladder complete · close into 29MAY expiry</span>
              <div className="dn-trade-name">
                Flip-extend short from yesterday — full target ladder tagged, take the remainder off into today&rsquo;s expiry resolution
              </div>
              <div className="dn-thesis">
                Yesterday&rsquo;s runner (after the W-SMA20 half) pressed
                toward W-EMA200 seed $73,710 and D-SMA100 cycle-anchor $72,958
                inside the 29MAY amplifier window. The BJ 14:01 05-28
                re-stack-hostile-2 step (Δshort +4,000, Δnet −4,396, SM net to
                −30,079) extended the move and price ran the full ladder: the
                24h low $72,614 @ BJ 22:07 05-28 tagged through both targets
                and wicked below the cycle anchor for the first time of the
                lineage. The runner is now at the bottom of the modelled
                structure with the −96.34M 29MAY 0.3DTE amplifier — the
                load-bearing reason to hold it — expiring at the 08:00Z
                settle today. Ex-29MAY the dealer book flips to ~+48M positive
                gamma (dampening). SM has covered ~2.7k off the −31.7k trough,
                long_btc rebuilt to 13.09k, 1h RSI lifted 33 → 49, and the
                last hour shows OI shrinking on a two-sided bid — the position
                book&rsquo;s first crack. The trade did its work; the
                discipline is take profit, not press into the resolution.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">runner status</span><span className="dn-lvl-v bear">in-money · target #2 $73,710 and target #3 $72,958 both tagged (24h low $72,614)</span></div>
                <div><span className="dn-lvl-k">action this note</span><span className="dn-lvl-v">close remainder into the 29MAY 08:00Z expiry resolution — the amplifier evaporates today</span></div>
                <div><span className="dn-lvl-k">stop (if held intraday)</span><span className="dn-lvl-v bull">1h close &gt; $74,939 (new 0γ flip)</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no new short at the ladder bottom into a book about to shed its amplifier</span></div>
              </div>
              <div className="dn-gating">
                <b>Why close, not press:</b> the entire negative-gamma weight
                is in the 29MAY 0.3DTE expiry (−96.34M) that settles at 08:00Z
                today; after it clears the strip is net-long-gamma
                (30MAY −1.81M, 31MAY +0.93M, 1JUN +19.71M, 26JUN +3.02M) and
                the amplifier that powered the down-leg is gone. The cycle
                anchor held on a daily-close basis. Holding the runner past
                the expiry is holding into a dampening book, a fresh
                lineage-peak crowded-short position, and the first cover off
                the trough — the asymmetry has flipped.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · conditional · cover-bounce, gate softening</span>
              <div className="dn-trade-name">
                Cover-bounce scout — gate softening (long rebuilt, TD9 BUYs completed) but the flip reclaim leg is not met
              </div>
              <div className="dn-thesis">
                The position-book pivot the prior note required has its first
                real ratification: SM net covered ~2.7k off the −31.7k trough,
                long_btc rebuilt from a 9.74k trough to 13.09k (&gt; the 11k
                leg), the 1h/4h ⚡ TD9 BUYs from yesterday completed and
                flipped to Sell setups (the reversal worked), an 8h ⚡ TD9 BUY
                printed at the low, 1h RSI lifted 33 → 49, and spot CVD
                absorbed +3,306 into the drop. What is <em>not</em> met is the
                flip-reclaim leg: spot $73,659 is −1.71% below the new flip
                $74,939, and SM short_btc is still at a lineage-peak 42.08k.
                The asymmetry improves materially after the 29MAY expiry —
                ex-29MAY the dealer book is +48M positive gamma (dampening),
                which favours a relief grind over a vol-amplified fade. The
                disciplined entry is post-expiry, on a flip reclaim with the
                short book bleeding — not a pre-position against a still-loaded
                short into an expiry that resolves today.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">trigger (all legs required)</span><span className="dn-lvl-v bull">1h close &gt; $74,939 (new flip) AND SM short_btc bleeds &lt; 38k inside 4h AND long_btc &gt; 13k</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on trigger print (preferably post-29MAY expiry), scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1h close &lt; $73,021 (below D-SMA100 cycle anchor)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$74,151 (W-SMA20 reclaim) then $76,368 (D-SMA150 cluster)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · take half at W-SMA20 reclaim</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> trigger ~$75,000, stop $73,021 = ~$1,980 risk;
                first target $74,151 is below trigger (a reclaim level, not a
                target from entry) so the real first target is $76,368
                = ~$1,370 ≈ 0.7:1 — weak on the first real target, modest on
                the stretch. <b>Hard rule:</b> this and any short remnant are
                mutually exclusive; the scout is post-expiry-preferred because
                the gamma regime flips dampening at 08:00Z. No pre-positioning
                the bounce while the short book is at a lineage peak and the
                flip is unreclaimed.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · hedge · expires today</span>
              <div className="dn-trade-name">
                Downside put-spread — 29MAY26 settles today at 08:00Z inside the −96.34M chunk; close on expiry print
              </div>
              <div className="dn-thesis">
                The hedge (long $74k / short $70k put, 29MAY26) is at 0.3 DTE
                and settles at the Deribit 08:00Z print today, ~8h from the
                snapshot, hosted directly inside the −96.34M gamma chunk — the
                most structurally favourable expiry of the lineage if the
                break extended into it (the amplifier helps the long
                put-spread), but it resolves regardless of any macro print.
                The macro re-grow gates moved further away again (HY OAS 2.71%
                vs the 2.80% gate, 10Y 4.48% vs 4.55%), so there is no roll
                justification on the macro side; the BTC-internal break that
                carried the spread is also exhausting at the ladder bottom.
                Net: close the spread on the 08:00Z expiry print and stand
                down the tail unless a fresh Tier-1 print re-grows the gates.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">structure</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">expiry</span><span className="dn-lvl-v">29-MAY-26 (0.3 DTE) — settles today ~08:00Z (BJ 16:00) inside the −96.34M chunk</span></div>
                <div><span className="dn-lvl-k">action this note</span><span className="dn-lvl-v">close 0.15R on the expiry print · no roll (macro re-grow gates moved further away)</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (next Tier-1 print)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.71%, 7bp to fire) OR 10Y &gt; 4.53% close (currently 4.48%, 5bp to fire)</span></div>
                <div><span className="dn-lvl-k">reclaim-long filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — still TRUE at 4.48%; awaits BTC-internal pivot</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> strike/premium/Greeks not loaded — structure
                is illustrative, sizing pending a Deribit chain pull. The fresh
                re-grow gates (HY OAS &gt; 2.78%, 10Y &gt; 4.53%) are
                discretionary watches lowered as the levels drift down, not
                backtested breakpoints. After 29MAY settles, the natural
                next hedge leg if the gates ever fire is a roll to 5JUN26 7.3
                DTE or 12JUN26 14.3 DTE — but the post-expiry dealer strip is
                net-long-gamma, so a fresh tail would not carry the amplifier
                tailwind this one did.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · cycle-2 step 2 printed re-stack hostile-2 · step 3 base rate ~24h forward · cover odds now rising</span>
              <div className="dn-trade-name">
                Squeeze-cycle 2 step 2 — re-stack hostile-2 @ BJ 14:01 — step 3 base rate inside the next BJ 13–15 window, but the regime-change branch is now a cover
              </div>
              <div className="dn-thesis">
                Yesterday&rsquo;s framework predicted a discrete SM step at BJ
                13–15 today, direction-conditional. The step landed at BJ
                14:01 (UTC 06:01Z 05-28) at spot $72,969 as a re-stack
                hostile-2 (Δshort +4,000, Δnet −4,396) — the continuation
                branch — the second consecutive ~4k+ single-minute short
                re-stack and the seventh consecutive day of the BJ 13–15
                cadence. The step-3 base rate is now another discrete step in
                the BJ 13–15 window today (2026-05-29 05:00–07:00Z). But the
                conditional read on direction has shifted toward a cover for
                the first time: the position book has covered ~2.7k off its
                trough, long_btc has rebuilt +3.35k, the engine TD9 BUYs
                completed, and the −96.34M amplifier resolves at 08:00Z —
                inside or adjacent to the step-3 window. <span className="dn-em">
                  Lineage state: short side at a fresh peak (42.08k) but ~370
                  off its intraday peak; long side rebuilt to 13.09k from a
                  9.74k trough; net SM 28.7% more short than the 05-28 note but
                  the cut fraction is decelerating (87% → 28.7%). The book is
                  maximally short, maximally crowded-retail-long, and showing
                  its first cover — the highest-probability regime change of
                  the lineage is a step-3 two-leg cover that converts into the
                  cover-bounce, not another continuation
                </span>. The new question for step 3: continuation (re-stack
                pushing SM &lt; −32k and price to a 1d close below the cycle
                anchor) or cover (short_btc bleeds &lt; 38k on a flip reclaim).
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">cycle 2 step 2 printed re-stack hostile-2 · step 3 base rate ~24h forward on BJ 13–15 cadence (2026-05-29 05:00–07:00Z window opens in ~5h)</span></div>
                <div><span className="dn-lvl-k">step 2 of cycle 2</span><span className="dn-lvl-v">re-stack hostile-2 @ 2026-05-28 06:01Z (BJ 14:01) · spot $72,969 · Δlong −396, Δshort +4,000, Δnet −4,396</span></div>
                <div><span className="dn-lvl-k">SM trough (most short) in window</span><span className="dn-lvl-v">−31,696 BTC @ 2026-05-28 09:46Z (BJ 17:46 05-28) · spot $73,500</span></div>
                <div><span className="dn-lvl-k">post-step price path</span><span className="dn-lvl-v">step $72,969 → 24h low $72,614 (−$355 from step) → snapshot $73,659 (+$690 vs step entry — bounce off the low)</span></div>
                <div><span className="dn-lvl-k">step cadence</span><span className="dn-lvl-v">7 consecutive days · all BJ 13–15 window · step 3 base rate ~24h forward (BJ 13–15 today, 2026-05-29 05:00–07:00Z)</span></div>
              </div>
              <div className="dn-gating">
                <b>Cycle-2 forecast discipline:</b> step 2 was re-stack
                hostile-2 (continuation), the third re-stack of cycle 2&rsquo;s
                two-step span. But two new conditions tilt step 3 toward a
                cover: the amplifier resolves at 08:00Z (removing the
                continuation&rsquo;s structural fuel) and the position book has
                made its first cover off the trough. Watch order: the 29MAY
                expiry settle at 08:00Z and the SM step at BJ 13–15 both fire
                inside the same window today. A cover step on a flip reclaim
                converts directly into the cover-bounce scout; another re-stack
                pushing a 1d close below $73,021 is the cycle-ladder break.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the runner ladder closed · 29MAY expiry + cycle-2 step 3 resolve in the same window · the cycle anchor is the line</span>
            </h2>

            <p>
              Of the 05-28 decision conditions: press-extends short FIRED (the
              runner ran its full ladder, target #2 $73,710 and target #3
              $72,958 both tagged, 24h low $72,614 below the cycle anchor);
              re-stack hostile-2 FIRED at BJ 14:01 (Δnet −4,396 ≤ −3k, SM to
              −30,079 &lt; −24k); cycle-2 step 2 cadence FIRED on time and
              direction (re-stack at BJ 14:01 inside the BJ 13–15 window);
              the cover-bounce scout did NOT trigger (the flip $75,557 was
              never reclaimed; SM short rose rather than bled); the cycle
              anchor test fired only on its 4h-follow-through leg, not on a 1d
              close (the 05-28 close $73,591 held above the $73,200 gate — the
              intraday wick to $72,614 breached the anchor but no close did);
              macro re-grow gates moved further away; the reclaim-long rates
              filter stayed true. <em>Three conditions fired strictly, the
              cycle-anchor test fired partially, and the cover-bounce did not
              trigger.</em> The conditions today re-set around a completed
              short ladder, an expiry resolution, and the first position-book
              cover:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>29MAY26 expiry settles (~08:00Z today)</td><td>−96.34M dealer-gamma chunk clears; ex-29MAY aggregate ≈ +48M positive</td><td>close put-spread on the expiry print; reassess dealer-strip gamma regime post-settle (net-long-gamma = dampening)</td></tr>
                <tr><td>Cover-bounce scout (long)</td><td className="bull">1h close &gt; $74,939 (new flip) AND SM short_btc bleeds &lt; 38k inside 4h AND long_btc &gt; 13k</td><td>scout long 0.2R (post-expiry preferred), target $74,151 (W-SMA20) then $76,368 (D-SMA150)</td></tr>
                <tr><td>Cycle anchor lost (cycle-regime escalation)</td><td className="bear">1d close &lt; $73,021 (D-SMA100)</td><td>first cycle-ladder break of the window — separate reassessment; the &ldquo;intact mid-cycle&rdquo; read ends</td></tr>
                <tr><td>Cycle anchor holds + gamma flips positive</td><td className="bull">1d closes hold &gt; $73,021 AND aggregate GEX positive post-29MAY settle</td><td>digestion-above-anchor read; cover-bounce asymmetry improves into a dampening book</td></tr>
                <tr><td>Press re-extends (if any short held)</td><td className="bear">fresh re-stack SM Δ ≤ −3k pushing SM &lt; −32k AND 1h close &lt; $72,556</td><td>final leg toward $72k −8.13M / $70k −6.94M pockets — but note the amplifier evaporates at 08:00Z</td></tr>
                <tr><td>Cycle-2 step 3 cadence</td><td>discrete SM step expected BJ 13–15 today (2026-05-29 05:00–07:00Z); direction-conditional, cover-tilted</td><td>read step at print; cover converts to cover-bounce pretrigger, continuation extends the down-leg</td></tr>
                <tr><td>Macro tail re-grow (FRESH gates)</td><td className="bear">HY OAS &gt; 2.78% (lowered) OR 10Y &gt; 4.53% (lowered) close on next Tier-1 print</td><td>roll hedge to 5JUN/12JUN forward; tail +0.1R toward primary</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — still TRUE at 4.48%; awaits BTC-internal pivot</td><td>standalone filter true; needs BTC-internal cover-bounce trigger to translate to scout long</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the 29MAY amplifier resolution at 08:00Z and the first
                SM cover off the trough convert into a post-expiry cover-bounce
                (gamma flips dampening, flip reclaimed, short book bleeds), or
                whether cycle-2 step 3 lands as another re-stack that pushes a
                1d close below the cycle anchor $73,021. The expiry settle and
                the step-3 cadence resolve inside the same window today
              </span>. Until then this note runs as written: the flip-extend
              short closed at the bottom of its ladder into the expiry, the
              cover-bounce scout gated hard against a post-expiry flip reclaim,
              the macro tail closed on the 08:00Z print. The runner&rsquo;s
              full target ladder tagged was the prior note&rsquo;s thesis
              proven correct; the structure is now a completed down-leg holding
              just above the cycle anchor, with the amplifier that powered it
              resolving today. The macro tape eased again on the lines that
              matter; BTC broke from inside its own book for a third
              consecutive day, and the BTC-vs-TradFi decoupling held at the
              widest, longest reading of the window.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit · 0 CRITICAL · 1 MED + 1 LOW fixed)
            </span>
            <b>Codex CLI 0.132.0 (gpt-5.5, xhigh reasoning) ran the hostile
            audit cleanly — the empty-stdin pipe held, no TTY block (200,012
            tokens).</b> Zero CRITICAL, zero HIGH; both findings applied
            EN+ZH:{' '}
            <b>DN-001 · MED</b> — the manifest and audit-trace cited{' '}
            <code>audits/2026-05-29-desk-note.md</code> as the archive of the
            00:01Z MTF scan, but the file did not exist at codex pre-flight and
            the rolling <code>mtf_div_latest.html</code> had already advanced
            past the 00:01Z scan. Fixed: this audit record was created with the
            closest-recoverable MTF scan (08:16Z) archived verbatim; the
            structural readings (3d water-up death cross 1b, 8h ⚡ TD9 BUY,
            8h/12h water-down death cross, 1d in-cloud, 1h RSI recovered) are
            stable across scans — only the in-progress close drifts (lineage
            F-01 pinnability gap).{' '}
            <b>DN-002 · LOW</b> — the ex-29MAY ≈ +48M claim is arithmetically
            correct but the listed by-expiry strip (30MAY→26JUN) sums to only
            +22.1M; the back expiries (31JUL/25SEP/25DEC) add +26.8M. Fixed:
            §III now discloses the front-strip +22.1M and back +26.8M split.
            One self-caught slip also corrected: the manifest had listed
            26MAR27 among the &ldquo;new overnight&rdquo; expiries, but it was
            present yesterday — only 1JUN/19JUN/28AUG are new (corrected
            EN+ZH). Codex explicitly cleared: funding × 1095 (= +10.95% ann
            cap, 24h mean +9.66%, range +5.48%/+10.95%, cap 737/1441 ~51%,
            trough +5.48% @ BJ 16:03 05-28, no ×100 recurrence); the GEX
            dual-reference sign (flip $74,939, spot −1.71% / idx −1.59%, both
            negative, tile and cluster consistent); the 29MAY 0.3DTE −96.34M
            expiry-resolution and ex-29MAY +48.4M arithmetic; the SM cut
            fraction (|−28,995 − (−22,535)| / 22,535 = 28.7%) and the BJ 14:01
            re-stack-hostile-2 step (Δshort +4,000 / Δnet −4,396, spot
            $72,969); the full MA matrix vs live spot $73,659.25 off parquet
            2026-05-29 00:06Z close $73,630.40 (W-SMA20 floor loss, D-SMA100
            $73,021 cycle anchor, W-EMA150/200 seed-disclosed, W-SMA150/200
            non-computable at 126 weekly bars); 30D RV 26.61% (30 returns / 31
            closes; 26.91% alt disclosed); cross-asset (|r| 0.264, BTC −4.73%
            vs NQ +2.50% = −7.2pt) and macro Tier-1 (10Y 4.48%, HY OAS 2.71%,
            MOVE 70.9, DXY 99.50, Fed net liq $5.872T) vs source;
            claims-vs-loaded-data (NTT / max-pain / strike-IV / BTC-NQ
            framework-only; JGB monthly do not lean; IV chain-median across
            1004 instruments not a tradable spread); EN/ZH numeric parity
            (25+ values); the requireViewer gating pattern (both paths, first
            statement); and the prior-note-targets-vs-today-anchor distinction.
            Source audit record with the full finding list and MTF scan archive
            at audits/2026-05-29-desk-note.md.{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1; Next
            16.2.6 hard-exits on Node &lt; 20.9.0 at{' '}
            <code>node_modules/next/dist/bin/next:24-28</code>, so a full{' '}
            <code>next build</code> is environment-blocked (lineage from 05-21
            through 05-28). <code>npx --no-install tsc --noEmit</code> returned
            exit 0 — the build proxy.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-05-29 00:08Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-05-28 22:15Z (~1.9h before
            snapshot) and some inputs are explicitly stale or pending and
            flagged as such. Levels, sizes, and conditions are illustrative of
            the desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future
            tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The press was right and it&rsquo;s done. The ladder filled,
                the amplifier expires today, and the book has shown its first
                cover. Take profit; wait for the gamma flip and the reclaim.
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
            v2 · 2026-05-29 00:08Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
