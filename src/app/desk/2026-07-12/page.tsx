import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-12 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-12',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-12' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260712() {
  await requireViewer('/desk/2026-07-12');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-12 · v2</span>
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
              <span className="dn-big">$63,896</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.32%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-12 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-12 00:05Z (snapshot pin, tape row t=&ldquo;07-12 08:05&rdquo; BJ)</td>
                  <td className="dn-flag">
                    fresh · 1-min · file tail at snapshot = pin · tape `t` is
                    BJ (UTC+8); 00:05Z = t &ldquo;07-12 08:05&rdquo; · 12JUL 0.3DTE
                    option settle lands 08:00Z (~8h forward of this snap)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-12 00:01Z scan (BJ 08:01)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates hourly) ·
                    archived to snapshots/2026-07-12-0007/ · ~4-min stale vs
                    snapshot anchor · in-progress bars
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-12 00:01Z snapshot</td>
                  <td className="dn-flag">
                    archived to snapshots/2026-07-12-0007/ · 872 instruments ·
                    Deribit idx $64,116 vs live $63,896 ($220 above) · 12JUL
                    0.3DTE +4.32M settles 08:00Z today (~8h forward of this
                    snap) · median IV 41.5% pre-12JUL-settle from this 00:01Z file
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-12 00:01Z
                  </td>
                  <td className="dn-flag">archived to snapshots/2026-07-12-0007/ · 7d 1h bars · 22 assets · 166 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-11 22:17Z render</td>
                  <td className="dn-flag">
                    archived to snapshots/2026-07-12-0007/ · ~1.8h render lag ·
                    FRED Tier-1: 10Y 4.54% (−2bp), TIPS 2.31%, HY OAS 2.70%,
                    MOVE 69.5 (+4.15), DXY 100.97, Fed net liq $5.958T (+0.118T)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-12 00:06Z</td>
                  <td className="dn-flag">
                    ~1-min stale vs snapshot anchor · offsets recomputed vs live
                    spot · weekly on Binance W-MON convention (weekly close
                    settles Mon 00:00Z) · full matrix computable (358 weekly bars)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W-watch JSON</td>
                  <td className="dn-v-cell">weekly_200sma.json · NOT PRESENT this run</td>
                  <td className="dn-flag">
                    200W watch unavailable — file absent; fall back to matrix
                    W-SMA200 $63,071 (no fabricated percentile / last-event)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale · monthly (71d) · do not treat as live</td>
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
              <span className="dn-v">+5.18%</span>
              <span className="dn-src">live · raw 0.004733 × 1095 = +5.18% · came OFF the +10.95% cap · 24h mean +3.80% (was +9.08% on 07-11) · cap occupancy 10 / 1442 sampled rows = 0.7% (was 32.8% on 07-11) · zero negative rows · min +0.18% ann @ 07-11 05:22Z</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+10.95% → +5.18% (−5.77pt off cap)</span>
              <span className="dn-src">range +0.18% / +10.95% · the cap pinned only at the 24h-window open (07-11 00:04Z, the prior anchor) then bled the whole window · the near-cap leverage press of 07-11 has fully unwound</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−2.46% (−2,557 BTC)</span>
              <span className="dn-src">live · 101,347 BTC (−2.46% off the prior 103,904 BTC) · gave back ~73% of yesterday&rsquo;s +3,514.7 build · OI shrank across every window (4h −1,080, 1h −649) — de-grossing, not fresh positioning</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v">55.70 / 44.30</span>
              <span className="dn-src">live_db `mkt_long_pct` · flat vs 55.90 (24h ago) / 55.94 (07-11 note) · retail stopped exiting longs but did not re-crowd — a flat book, not a base</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−1,103 (net short, covered further)</span>
              <span className="dn-src">live · long 12,659 − short 13,763 · short bled −442, long built +531 over 24h — the cover continued (net −2,076 → −1,103), shallowest net-short of the recovery</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 07-11 note</span>
              <span className="dn-v bull">−2,057 → −1,103 (+954 net, cover 46%)</span>
              <span className="dn-src">|Δ|/prior_net = |−1,103 − (−2,057)| / 2,057 = 46.4% · vs the 24h-ago tape base −2,076 the cut is |+973| / 2,076 = 46.9% · SM keeps covering as the squeeze unwinds</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.5% / 30.32%</span>
              <span className="dn-src">GEX median IV · 872 inst. (pre-12JUL-settle from the 00:01Z file) · chain-median across instruments, NOT a tradable spread · richness ~+11.2pt · RV 30 close-to-close returns</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+3.65% (above)</span>
              <span className="dn-src">flip $61,644 (was $61,485 · +$159) · vs live spot $63,896.41 (+3.65%; 63,896.41/61,644 − 1 = 3.654%) / GEX file Deribit idx $64,116 (+4.01%; 64,116/61,644 − 1 = 4.010%, file rounds +4.0%) — both refs positive · aggregate GEX +101.6M net-long-gamma (was +131.8M — shallower)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                Yesterday&rsquo;s covering squeeze deflated the day after it
                printed — the fuel came off, the reclaim held the floor, but no
                spot-demand base replaced it
              </span>. Funding bled off the{' '}
              <span className="dn-tag bear">+10.95% cap → +5.18% ann</span>{' '}
              (24h mean +9.08% → +3.80%, cap occupancy 32.8% → 0.7%), OI shrank{' '}
              <span className="dn-tag bear">−2,557 BTC (−2.46%)</span> — giving
              back roughly 73% of the +3,514.7 build that powered the 07-11
              extension — and smart money kept covering, net{' '}
              <span className="dn-tag bull">−2,076 → −1,103 (a 47% cut, longs
              +531 / shorts −442)</span> to the shallowest net-short of the
              recovery. Spot bought hard on CVD{' '}
              <span className="dn-tag bull">+7,682</span> but the perp book{' '}
              <span className="dn-tag bear">sold it (futCVD −327, taker −327)</span>{' '}
              into a shrinking OI — a spot-bid / perp-unwound de-grossing, not a
              demand base. Price printed{' '}
              <span className="dn-tag bear">$63,896, −0.32% on 24h</span>, and
              the reclaim held on the only basis that counts: spot sits{' '}
              <span className="dn-tag bull">+1.31% above the W-SMA200 floor
              $63,071</span>, the in-progress 07-13 weekly close{' '}
              <span className="dn-tag bull">$63,831.60 is +1.21% above it</span>,
              and the re-confirm-break trigger stays dis-armed but NOT settled
              until the weekly closes Monday 07-13. The dealer book stayed
              deeply net-long-gamma (<span className="dn-tag bull">+101.6M</span>,
              shallower from +131.8M) with the flip $61,644 spot +3.65% below and
              no near-dated negative amplifier; the MTF engine rolled to a{' '}
              <span className="dn-tag">5/9 cycle-reversal &ldquo;mean-reversion /
              bounce-favored&rdquo;</span> read with a persistent 1M ⚡TD9 BUY and
              a fast-frame oversold cluster, offset by fast-frame MACD death
              crosses printing into the pullback. The cover-bounce scout&rsquo;s
              price pre-condition stays TRUE on all four legs but the demand
              block DEFLATED back to de-grossing — so the scout stands down and
              the book stays FLAT: no short into a deep positive-gamma book, no
              scout long into unwinding squeeze fuel, no fresh hedge on a
              single-leg rates fire. Patient — the floor is decided on the
              Monday 07-13 weekly close, and the long is decided when a spot base
              forms, not when the squeeze bleeds sideways.
            </p>

            <p>
              BTC prints <span className="dn-tag">$63,896</span> live,{' '}
              <span className="dn-tag bear">−0.32%</span> on 24h — the first
              down-print after the 07-11 short-covering extension — inside a{' '}
              <span className="dn-tag">$64,479 / $63,810</span> range (high @
              2026-07-11 14:40Z, low @ 2026-07-12 00:00Z, 5 min before the
              snap).{' '}
              <span className="dn-signal">The reclaim held on a close basis
              even as the fuel left</span>: the daily closes read 07-10{' '}
              <span className="dn-tag bull">$64,129.50</span> (the recovery
              high), 07-11 <span className="dn-tag">$63,783.00</span> (a down
              close that broke the up-streak), and 07-12 in-progress at parquet
              last bar <span className="dn-tag">$63,831.60</span> — the last two
              sit +1.13% and +1.21% above the $63,071 floor, and the last
              completed weekly event stays the 07-06 reclaim close{' '}
              <span className="dn-tag bull">$64,023.60</span> above it. The MA
              matrix carries three positive lines and a tight overhead cap:
              spot is <span className="dn-tag bull">+3.28% over D-SMA20
              $61,868</span>, <span className="dn-tag bull">+1.47% over D-EMA20
              $62,968</span>, and <span className="dn-tag bull">+1.31% over the
              W-SMA200 floor $63,071</span>, with the{' '}
              <span className="dn-tag bear">D-SMA50 $64,914 (−1.57%) / D-EMA50
              $65,261 (−2.09%)</span> pair the first overhead resistance ~1.6–2.1%
              up.{' '}
              <span className="dn-em">
                This is post-squeeze digestion above the reclaimed floor — the
                level held, the leverage that reclaimed it unwound, and the
                overhead cap is unchanged. Not a structural turn, not a break;
                a bleed sideways above the floor waiting on the weekly settle.
              </span>{' '}
              The cover-bounce scout&rsquo;s price pre-condition (spot above
              flip AND D-EMA20 AND D-SMA20 AND floor) stays TRUE on all four
              legs — but the demand block that briefly flipped constructive on
              07-11 has deflated back to de-grossing, so the scout stays
              deferred.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · squeeze fuel unwound · SM covered a 2nd straight session from the 07-10 short peak · funding off the cap · OI gave back ~73% of the build · spot-bid / perp-sold de-grossing</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position book let the air out the day after the squeeze
              </span>. SM net is <span className="dn-tag">−1,103</span> vs the
              07-11 note&rsquo;s −2,057 — that is a{' '}
              <span className="dn-em">+954 cover, a 46.4% cut of the prior net</span>{' '}
              (|−1,103 − (−2,057)| / 2,057 = 46.4%); against the 24h-ago tape
              base −2,076 the move is +973 (|+973| / 2,076 = 46.9%). The
              components: long_btc{' '}
              <span className="dn-tag bull">12,128 → 12,659 (+531)</span> and
              short_btc <span className="dn-tag bull">14,205 → 13,763
              (−442)</span> — shorts bled and longs built, the covering shape
              that has run since 07-10, now at the shallowest net-short of the
              recovery.{' '}
              <span className="dn-em">
                (Long and short legs are whole-BTC rounded; the live sm_net
                field is fractional −2,076.3 → −1,103.3, so a whole-BTC
                long−short reconstructs the net to within ±1 BTC — the −2,076 /
                −1,103 nets are the authoritative tape values.)
              </span> SM net traded a tight 24h band: trough{' '}
              <span className="dn-tag bear">−2,320 @ 2026-07-11 07:01Z</span>,
              peak (least short){' '}
              <span className="dn-tag bull">−845 @ 2026-07-11 15:55Z</span> — no
              discrete re-stack step, a slow grind of covering, not an event.{' '}
              <span className="dn-em">
                A two-session cover from the 07-10 short peak (−7,908 → −2,057 → −1,103)
                is a completed squeeze, not an ignition — the short that fueled
                the reclaim is nearly flat now, which removes the fuel for the
                next leg up as much as it removes the pressure for the next leg
                down.
              </span>
            </p>

            <p>
              The leverage side confirms the deflation.{' '}
              <span className="dn-signal">
                Funding came entirely off the Binance cap
              </span>: live <span className="dn-tag">+5.18% ann</span> (raw
              0.004733 × 1095), 24h mean{' '}
              <span className="dn-tag">+3.80%</span> (vs +9.08% on 07-11 — a
              −5.28pt cooling), range{' '}
              <span className="dn-tag">+0.18% / +10.95%</span> with the cap
              touched only at the 24h-window open (07-11 00:04Z, the prior
              anchor) and bleeding the whole window after. Cap occupancy{' '}
              <span className="dn-tag bull">10 / 1442 sampled rows (0.7%)</span>{' '}
              (vs 32.8% on 07-11 — the cap emptied), zero negative rows (still
              no short-pay print), min{' '}
              <span className="dn-tag">+0.18% ann @ 2026-07-11 05:22Z</span>. OI
              Δ <span className="dn-tag bear">−2,557 BTC (−2.46%)</span> over
              24h (−2.46% off the prior 103,904 BTC; live OI 101,347) — the
              first OI shrink since the recovery&rsquo;s build days,
              giving back ~73% of the +3,514.7 BTC that the 07-11 note logged;
              OI fell across every window (4h −1,080, 1h −649), so both the
              covering shorts and the profit-taking longs are leaving the book,
              not restacking. Retail{' '}
              <span className="dn-tag">mkt_long_pct 55.70%</span> is flat vs
              55.90% (24h ago) and 55.94% (07-11 note) — retail stopped exiting
              longs but did not re-crowd, a flat book rather than a fresh base.
              Perp trades a <span className="dn-tag bear">−$47.18 discount</span>{' '}
              to spot at the snap (1h mean −$39.19; 24h mean −$46.18, range
              −$86.56 / +$53.08 — basis briefly ticked premium intraday but sits
              at a discount into the snap).{' '}
              <span className="dn-em">
                Funding off the cap + OI shrinking + SM covered to nearly flat +
                retail flat: every leverage read points the same way — the
                near-cap press of 07-11 has fully unwound and nothing has
                replaced it on the demand side.
              </span>
            </p>

            <p>
              Windowed flow is <em>spot-bid into a perp-sold, shrinking
              book</em> — the classic de-grossing shape. 24h: price{' '}
              <span className="dn-tag bear">−0.32%</span>, OI{' '}
              <span className="dn-tag bear">−2,557 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +7,682</span>{' '}
              <span className="dn-em">(no cb_cvd reset in the window — a genuine
              spot-buy accumulation)</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −327</span>, big-print{' '}
              <span className="dn-tag bear">−12 BTC / 275 prints</span>,
              taker-net <span className="dn-tag bear">−327</span> —{' '}
              <span className="dn-em">
                spot bought steadily while perps net-sold into a −2.46% OI
                unwind; the −0.32% down-print is the leverage book leaving, with
                spot absorbing the flow, not fresh perp longs stacking
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bear">−0.65%</span>, OI{' '}
              <span className="dn-tag bear">−1,080 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +597</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −570</span>, big-print{' '}
              <span className="dn-tag bear">−239 BTC / 64 prints</span>,
              taker-net <span className="dn-tag bear">−570</span> —{' '}
              <em>the same shape sharpened: spot bid, perps sold harder,
              big-prints net-sold as the recent hours drew OI down</em>. 1h:
              price <span className="dn-tag bear">−0.52%</span>, OI{' '}
              <span className="dn-tag bear">−649 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +180</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −396</span>, big-print{' '}
              <span className="dn-tag bear">−101 BTC / 28 prints</span>,
              taker-net <span className="dn-tag bear">−396</span> —{' '}
              <em>spot still bidding into the snap, perps still selling, OI
              still shrinking</em>.{' '}
              <span className="dn-em">
                The 4h and 1h flow windows use the same inclusive sampled-row
                convention as the 24h window (start minute = the prior sampled
                anchor row, inclusive endpoint), not exact 240/60-minute
                intervals; an exact-minute 240/60 window shifts each CVD/OI
                figure by a few BTC without changing the spot-bid / perp-sold
                shape.
              </span>{' '}
              The spot CVD accumulation is the one
              constructive thread — but until it stops leaking into a shrinking
              OI and starts pulling OI up with it, it is spot absorbing a perp
              unwind, not a demand base building.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · engine rolled to 5/9 cycle-reversal (bounce-favored) · 3d water-down golden cross just printed · fast frames rolled to MACD death crosses on the pullback · 1M ⚡TD9 BUY persists</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF engine reads a 5/9 cycle-reversal regime
                (JT&lt;0 · mean-reversion / bounce-favored)
              </span>{' '}
              — a notch different from the 07-11 &ldquo;higher-TF bearish /
              short-term bounce&rdquo; trend-continuation read, the divergence
              tally tilting bottom-heavy (top-div 3: 30m/1h/4h; bottom-div 4:
              15m/30m/1d/3d) with a persistent{' '}
              <span className="dn-tag bull">1M ⚡TD9 BUY $63,839</span> and a{' '}
              <span className="dn-tag bull">15m TD8 Buy one close from a 9</span>.
              But the crosses split hard by speed: the fast frames rolled to
              MACD death crosses into the pullback —{' '}
              <span className="dn-tag bear">15m water-up death 7b</span>,{' '}
              <span className="dn-tag bear">30m water-up death 4b</span>,{' '}
              <span className="dn-tag bear">4h water-up death (just
              printed)</span>, and the{' '}
              <span className="dn-tag bear">1w water-down death 2b</span> — while
              the mid frames lifted:{' '}
              <span className="dn-tag bull">8h water-up golden 5b</span>,{' '}
              <span className="dn-tag bull">1d water-down golden 11b</span>, and
              a fresh <span className="dn-tag bull">3d water-down golden cross
              (just printed)</span>. RSI is oversold on the fast frames (15m 28,
              30m 33, 1h 40) and mid-band above (4h 54, 8h 57, 12h 57, 1d 52),
              cooling to 43/39/44 on 3d/1w/1M.{' '}
              <span className="dn-em">
                Read straight: the pullback rolled the fast frames bearish
                (15m/30m/4h death crosses, fast-frame RSI oversold) while the
                mid frames confirmed the bounce (8h/1d/3d golden crosses) and
                the monthly held its TD9 BUY. The engine&rsquo;s cycle-reversal
                label leans on the bottom-div cluster + 1M TD9 BUY + oversold
                fast frames — a bounce-favored read that a spot base would
                confirm and a floor loss would kill. The 1w water-down death
                cross is the standing slow-frame bear the recovery has not
                cleared.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,833</td><td className="num bull">28</td><td className="bear">death (water-up) 7b</td><td className="bear">below ↑64.1k 3b</td><td>Buy 8→9?</td><td>BULL cont (bottom div)</td></tr>
                <tr><td>30m</td><td className="num">63,840</td><td className="num bull">33</td><td className="bear">death (water-up) 4b</td><td className="bear">below ↑64.1k 2b</td><td>Buy 5</td><td>BULL (bottom div)</td></tr>
                <tr><td>1h</td><td className="num">63,833</td><td className="num">40</td><td className="bear">death (water-up) 34b</td><td className="neut">in cloud 63.2–63.9k 1b</td><td>Buy 3</td><td>BEAR cont (top div)</td></tr>
                <tr><td>4h</td><td className="num">63,833</td><td className="num">54</td><td className="bear">death (water-up) 刚印 (just printed)</td><td className="bull">above ↓63.0k 52b</td><td>Buy 2</td><td>BEAR cont (top div)</td></tr>
                <tr><td>8h</td><td className="num">63,833</td><td className="num">57</td><td className="bull">golden (water-up) 5b</td><td className="bull">above ↓62.4k 9b</td><td>Buy 2</td><td>BULL cont</td></tr>
                <tr><td>12h</td><td className="num">63,840</td><td className="num">57</td><td className="neut">MACDh water-up + (no fresh cross)</td><td className="bull">above ↓62.6k 2b</td><td>Buy 1</td><td>BEAR cont (top div)</td></tr>
                <tr><td>1d</td><td className="num">63,840</td><td className="num">52</td><td className="bull">golden (water-dn) 11b</td><td className="bear">below ↑66.3k 41b</td><td>Sell 3</td><td>BEAR cont</td></tr>
                <tr><td>3d</td><td className="num">63,840</td><td className="num">43</td><td className="bull">golden (water-dn) 刚印 (just printed)</td><td className="bear">below ↑71.7k 13b</td><td>Sell 3</td><td>BULL (bottom div)</td></tr>
                <tr><td>1w</td><td className="num">63,839</td><td className="num">39</td><td className="bear">death (water-dn) 2b</td><td className="bear">below ↑98.7k 23b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">63,839</td><td className="num">44</td><td className="neut">MACDh water-up − · ⚡TD9 BUY</td><td className="bull">above ↓47.0k 29b</td><td>⚡TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (BJ 08:01; rolling
                    latest file, archived verbatim to
                    snapshots/2026-07-12-0007/). Header regime:{' '}
                    <em>5/9 cycle-reversal (JT&lt;0) — mean-reversion / bounce
                    favored, trend-following cautioned</em>; alerts:{' '}
                    <em>1M ⚡TD9 BUY $63,839</em>, <em>3d water-down golden cross
                    (just printed)</em>, <em>4h water-up death cross (just
                    printed)</em>, <em>15m TD8 Buy (one close from 9)</em>. Scan
                    spot $63,840, 24h −0.46% (00:01Z MTF scan; the live-tape
                    header at 00:05Z shows −0.32% on the same 24h window — the
                    4-minute gap and the different 24h reference account for the
                    difference), 24h H/L $64,497 / $63,669, qVol $3.45B. Closes
                    are in-progress bars; treat every value as provisional until
                    each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms digestion above the floor with a tight
              overhead cap. Spot $63,896 sits{' '}
              <span className="dn-tag bull">+3.28% over D-SMA20 $61,868</span>,{' '}
              <span className="dn-tag bull">+1.47% over D-EMA20 $62,968</span>,
              and <span className="dn-tag bull">+1.31% over the W-SMA200 floor
              $63,071</span> — three positive lines, all compressed slightly
              from the 07-11 note (D-SMA20 +3.63%, D-EMA20 +1.96%, floor +1.69%)
              as price pulled back. The first overhead resistance is the{' '}
              <span className="dn-tag bear">D-SMA50 $64,914 (−1.57%)</span> /{' '}
              <span className="dn-tag bear">D-EMA50 $65,261 (−2.09%)</span> pair,
              essentially unchanged ~1.6–2.1% up — the cap the recovery still has
              not cleared. Above that, in order:{' '}
              <span className="dn-tag bear">D-EMA100 $68,763 (−7.08%)</span>,{' '}
              <span className="dn-tag bear">W-SMA200 is below but W-EMA200
              $68,945 (−7.32%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $70,041 (−8.77%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $70,729 (−9.66%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $70,732 (−9.66%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $71,482 (−10.61%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $71,912 (−11.15%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $73,875 (−13.51%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,723 (−14.49%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $74,826 (−14.61%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $76,163 (−16.11%)</span>.
              Far above and disused: W-EMA100 $80,211 (−20.34%), W-EMA50 $80,414
              (−20.54%), W-SMA50 $87,646 (−27.10%), W-SMA100 $88,606 (−27.89%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-12 00:06Z (close
                $63,831.60); offsets recomputed against live spot $63,896.41.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. Weekly MAs use the Binance W-MON convention
                (weekly close settles Mon 00:00Z), matching the lineage&rsquo;s
                floor and the 07-06 / 06-29 weekly-close references; the full
                matrix is computable (358 weekly bars on file). 200W-watch JSON
                is absent this run, so the floor is the matrix W-SMA200 $63,071
                (in-progress-inclusive, +1.31% under spot) — no fabricated
                percentile or last-event. Daily closes: 07-06 $64,023.60, 07-07
                $63,335.40, 07-08 $62,255.30, 07-09 $63,197.00, 07-10
                $64,129.50, 07-11 $63,783.00, 07-12 (in-progress) $63,831.60 —
                the last four (07-09 to 07-12) above the $63,071 floor, with
                07-08 $62,255.30 the one close below it.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book stays net-long-gamma +101.6M (shallower from +131.8M) · flip $61,644 (spot +3.65% above) · no near-dated negative amplifier on the whole strip · $65k–$66k positive wall band caps</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book stayed deeply net-long-gamma but de-gammaed a
                notch as the near expiries thinned
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+101.6M / 1%</span> (was +131.8M on
              07-11 — a −30.2M step shallower, still firmly dampening); the book
              remains long-gamma. The 0-γ flip moved{' '}
              <span className="dn-tag">$61,485 → $61,644 (+$159)</span>, and
              spot $63,896 sits{' '}
              <span className="dn-tag bull">+3.65% above flip</span> on
              spot-denominated math (63,896.41 / 61,644 − 1 = +3.654%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads +4.0% off its
              Deribit-index $64,116 ($220 above live spot), which is{' '}
              <span className="dn-tag bull">+4.01%</span> (64,116 / 61,644 − 1 =
              +4.010%) — both references positive, spot above the flip on both.
              The wall map keeps a positive band capping the overhead and a lone
              negative bidding the fade:{' '}
              <span className="dn-tag bull">$66k +21.17M</span> (heaviest, the
              cap shifted up from 07-11&rsquo;s $65k),{' '}
              <span className="dn-tag bull">$65k +21.11M</span>,{' '}
              <span className="dn-tag bull">$70k +18.11M</span>,{' '}
              <span className="dn-tag bull">$64k +17.35M</span> (support just
              overhead),{' '}
              <span className="dn-tag bull">$68k +16.75M</span>,{' '}
              <span className="dn-tag bear">$60k −12.96M</span> (the lone top-10
              negative, bidding a fade toward the floor),{' '}
              <span className="dn-tag bull">$80k +8.52M</span>,{' '}
              <span className="dn-tag bull">$67k +8.00M</span>,{' '}
              <span className="dn-tag bull">$72k +6.85M</span>,{' '}
              <span className="dn-tag bear">$55k −5.62M</span>.{' '}
              <span className="dn-em">
                The $64k–$68k positive band ($64k +17.35M, $65k +21.11M, $66k
                +21.17M, $67k +8.00M, $68k +16.75M) sums to roughly +84M of overhead
                support-turned-cap; the only meaningful negative gamma is $60k
                −12.96M / $55k −5.62M below spot, so the book is structurally bid
                into a fade toward the floor and offered into a squeeze back
                toward $66k. Nothing about the pullback threatened the dampening
                regime
              </span>. The expiry strip is entirely positive with no near-dated
              amplifier: 12JUL 0.3DTE +4.32M (settles 08:00Z today, ~8h forward
              of this snap), 13JUL 1.3 +1.57M, 14JUL 2.3 +0.90M, 15JUL 3.3
              +0.18M, then the forward chunks{' '}
              <span className="dn-tag bull">17JUL 5.3 +38.79M</span>,{' '}
              <span className="dn-tag bull">24JUL 12.3 +11.25M</span> and{' '}
              <span className="dn-tag bull">31JUL 19.3 +43.02M</span> (all
              positive), 28AUG 47.3 +8.18M, 25SEP 75.3 +0.34M, 25DEC 166.3
              +2.46M, 26MAR27 257.3 +1.00M, 25JUN27 348.3 +0.55M. No single
              expiry carries a negative amplifier weight anywhere on the strip —
              the dampening backdrop has no calendar catalyst to flip it near-term.
            </p>

            <p>
              IV median across 872 instruments is{' '}
              <span className="dn-tag">41.5%</span> against 30D close-to-close
              RV of <span className="dn-tag">30.32%</span> — chain-level
              richness <span className="dn-tag">~+11.2pt</span>.{' '}
              <span className="dn-em">
                Disclosure: 872 instruments and 41.5% IV median are
                pre-12JUL-settle values read from the 00:01Z GEX file; the 12JUL
                0.3DTE +4.32M chunk clears at 08:00Z today (~8h forward of this
                snap) and the post-settle instrument count and IV median are NOT
                recomputed here — the strip carries no negative amplifier either
                way, so the settle is a non-event for the gamma regime.
              </span>{' '}
              A chain-median across N instruments,{' '}
              <span className="dn-em">not</span> a tradable spread;
              expiry-/strike-level vega, skew and term structure remain not
              loaded; the vol read stays framework-only. Put/Call OI ratio 0.55
              (232,538 call OI / 127,068 put OI). RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log
              returns anchored to parquet last bar 2026-07-12 00:06Z (the 29-return
              alternate reads 30.46%; the 30.32% page value uses 30 returns).
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · split rates/dollar risk-off (10Y 4.54%, TIPS 2.31% EXTREME, DXY 100.97 EXTREME) vs credit/liquidity risk-on (HY OAS 2.70%, Fed net liq $5.958T EXTREME) · reclaim-long rates filter TRUE at 4.54%</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape held its split shape — rates and the dollar risk-off,
                credit and Fed liquidity risk-on
              </span>. Dashboard render is 2026-07-11 22:17Z, ~1.8h before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bull">4.54% (−2.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.82</span>, episodic z{' '}
              <span className="dn-tag">+1.21</span> — RISK-OFF tag but{' '}
              <span className="dn-em">below the 4.55% reclaim-long filter line</span>{' '}
              (TRUE at 4.54%) and just above the 4.53% put-spread re-grow leg
              (FIRED by 1bp). 10Y TIPS real{' '}
              <span className="dn-tag bear">2.31% (0.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.77</span>, episodic z{' '}
              <span className="dn-tag">+1.62</span> — EXTREME RISK-OFF, flat on
              the day. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.20% (+2.0bp)</span>. HY OAS{' '}
              <span className="dn-tag">2.70% (0.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.21</span>, episodic z{' '}
              <span className="dn-tag bull">−0.59</span> — RISK-ON, 8bp below the
              2.78% re-grow gate, flat on the day. MOVE bond vol{' '}
              <span className="dn-tag">69.5 (+4.15)</span> — still &ldquo;loose&rdquo;,
              firmer on the day. DXY{' '}
              <span className="dn-tag bear">100.97 (+0.03)</span>, regime z{' '}
              <span className="dn-tag bear">+2.11</span> — EXTREME RISK-OFF, flat.
              Fed net liquidity{' '}
              <span className="dn-tag bull">$5.958T (+0.118T)</span>, episodic z{' '}
              <span className="dn-tag bull">+2.47</span> — EXTREME RISK-ON, the
              +0.118T weekly jump holding. US-JP 10Y spread{' '}
              <span className="dn-tag">1.89% (−2.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag bull">161.67 (−0.69, yen firmer)</span>.
              NFCI −0.515 (stale 8d).{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE
                at 4.54% but only just; the put-spread re-grow gate&rsquo;s 10Y
                leg (&gt; 4.53%) stays FIRED by a single basis point — a
                single-leg watch-event, not an auto-roll, with the HY OAS leg
                (&gt; 2.78%) still 8bp from firing at 2.70%. Rates and dollar
                stay hard risk-off on the extremes, credit and Fed liquidity
                stay decisively risk-on, and nothing in the panel moved enough
                to change the BTC read. JGB monthly 2.65% carries an EXTREME
                RISK-OFF monthly tag (stale 71d) — do not lean on it.
              </span>
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
                <tr><td>US 10Y nominal</td><td className="num">4.54%</td><td className="num bull">−2.0bp</td><td className="num bear">+1.82</td><td className="num">+1.21</td><td className="bear">tight, RISK-OFF (below 4.55% filter)</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.31%</td><td className="num">0.0bp</td><td className="num bear">+2.77</td><td className="num">+1.62</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.20%</td><td className="num bear">+2.0bp</td><td className="num">−0.37</td><td className="num">−0.61</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.70%</td><td className="num">0.0bp</td><td className="num bull">−1.21</td><td className="num bull">−0.59</td><td className="bull">loose · RISK-ON (8bp to gate)</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.515</td><td className="num">−0.01</td><td className="num">−0.06</td><td className="num bull">−2.13</td><td className="stale">stale 8d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">69.5</td><td className="num bear">+4.15</td><td className="num bull">−0.50</td><td className="num">−0.44</td><td className="bull">loose · firmer on day</td></tr>
                <tr><td>DXY</td><td className="num">100.97</td><td className="num bear">+0.03</td><td className="num bear">+2.11</td><td className="num">+0.70</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.958T</td><td className="num bull">+0.118T</td><td className="num bull">+2.42</td><td className="num bull">+2.47</td><td className="bull">EXTREME RISK-ON</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.67</td><td className="num bull">−0.69</td><td className="num bear">+1.40</td><td className="num">+0.55</td><td className="bull">yen firmer</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.89%</td><td className="num">−2.0bp</td><td className="num bull">−0.79</td><td className="num">+1.21</td><td className="bull">tight</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7667</td><td className="num bull">−0.03</td><td className="num bull">−1.48</td><td className="num bull">−0.82</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="num">+1.43</td><td className="stale">monthly (71d) · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 166 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.314</span>{' '}
              (essentially flat from 07-11&rsquo;s 0.315, holding in the NORMAL
              band). BTC&rsquo;s tightest ties are the broad-risk complex:{' '}
              <span className="dn-tag">SP500 +0.441</span>,{' '}
              <span className="dn-tag">NQ +0.439</span>,{' '}
              <span className="dn-tag">SILVER +0.427</span>,{' '}
              <span className="dn-tag">GOLD +0.419</span>,{' '}
              <span className="dn-tag">COPPER +0.418</span>,{' '}
              <span className="dn-tag">TSLA +0.402</span>,{' '}
              <span className="dn-tag">PLAT +0.385</span>, then the energy
              inverse <span className="dn-tag">CL −0.356</span> /{' '}
              <span className="dn-tag">BRENT −0.343</span>, with{' '}
              <span className="dn-tag">NVDA +0.294</span>. 7d performance:{' '}
              <span className="dn-tag bull">BTC +1.42%</span> still leading{' '}
              <span className="dn-tag bull">NQ +0.63%</span> by{' '}
              <span className="dn-tag">+0.79pt</span> (the lead narrowed from
              +1.40pt on 07-11 as the 06-30 low ages out of the window),{' '}
              <span className="dn-tag bull">SP500 +1.02%</span>,{' '}
              <span className="dn-tag bear">JP225 −0.68%</span>,{' '}
              <span className="dn-tag bull">META +13.76%</span> (the 7d complex
              leader), <span className="dn-tag bull">NVDA +5.95%</span>,{' '}
              <span className="dn-tag bull">TSLA +1.93%</span>,{' '}
              <span className="dn-tag bear">MSFT −1.72%</span>. Metals soft:{' '}
              <span className="dn-tag bear">GOLD −1.58%</span>,{' '}
              <span className="dn-tag bear">SILVER −4.80%</span>,{' '}
              <span className="dn-tag bear">PLAT −1.11%</span>. Energy ripped:{' '}
              <span className="dn-tag bull">CL +6.88%</span>,{' '}
              <span className="dn-tag bull">BRENT +8.13%</span>,{' '}
              <span className="dn-tag bear">NGAS −9.97%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lead over the TradFi engine narrowed to +0.79pt
                (BTC +1.42% vs NQ +0.63%) from +1.40pt on 07-11 — the lead is
                closing as BTC&rsquo;s post-low outperformance ages out, not
                because BTC rolled; the correlation band held NORMAL, so BTC is
                neither decoupled nor systemically pinned to the risk complex.
              </span>
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · book FLAT · cover-bounce scout price pre-condition TRUE but demand block DEFLATED to de-grossing · no short into positive gamma · no fresh hedge on a single-leg rates fire</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 07-11 note&rsquo;s call — the gate is lit but confirm the
                demand — printed correct, and the demand did not confirm
              </span>. On 07-11 the demand block briefly flipped constructive
              (SM covered, OI built, perps bought, rates filter lit) but the
              scout stood down because the buyer of record was a covering perp
              short into near-cap funding, not a spot-demand base. Twenty-four
              hours later that read is vindicated: the fuel unwound (funding off
              the cap, OI −2,557, SM covered to nearly flat) and no spot base
              replaced it. The scout&rsquo;s price pre-condition stays TRUE on
              all four legs — spot $63,896 above the flip $61,644, above D-EMA20
              $62,968, above D-SMA20 $61,868, above the floor $63,071 — but the
              demand block has DEFLATED back to de-grossing, so the scout stays
              deferred. The trade book today is: no shorts, no scout entry, no
              fresh hedge — wait for a spot-demand base (spot CVD pulling OI UP,
              not leaking into a shrinking book) with a reclaim of the D-SMA50
              $64,914 / D-EMA50 $65,261 cap before scout-long, and let the
              Monday 07-13 weekly close settle the floor.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · DEFERRED · price pre-condition TRUE (4/4 legs) · demand block DEFLATED to de-grossing</span>
              <div className="dn-trade-name">
                Cover-bounce scout — price legs all TRUE, but the squeeze fuel unwound instead of converting to a spot base; stand down
              </div>
              <div className="dn-thesis">
                The scout&rsquo;s price pre-condition is satisfied on all four
                legs (spot above flip, D-EMA20, D-SMA20, and the W-SMA200 floor)
                and has been for the whole recovery — but a satisfied price
                pre-condition was never the trigger. The trigger is a confirmed
                spot-demand base: the 07-11 note named the buyer of record as a
                covering perp short into near-cap funding, and today that
                covering completed (SM net −2,076 → −1,103, a 47% cut to nearly
                flat) while funding fell off the cap (+10.95% → +5.18%, mean
                +9.08% → +3.80%) and OI shrank −2,557, giving back ~73% of the
                07-11 build. Spot CVD did buy (+7,682 over 24h with no reset) —
                the one constructive thread — but it leaked into a −2.46% OI
                unwind with perps net-selling (futCVD −327, taker −327), which
                is spot absorbing a perp de-gross, not a base building. Entering
                long here buys the exhaustion of a squeeze, not the start of
                demand.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">price pre-condition (TRUE, 4/4)</span><span className="dn-lvl-v bull">spot $63,896 &gt; flip $61,644 AND &gt; D-EMA20 $62,968 AND &gt; D-SMA20 $61,868 AND &gt; W-SMA200 floor $63,071</span></div>
                <div><span className="dn-lvl-k">demand trigger (the real gate — UNMET)</span><span className="dn-lvl-v bear">spot CVD pulling OI UP (not leaking into a shrinking book) AND a 1h/4h close reclaim of D-SMA50 $64,914 / D-EMA50 $65,261 with OI building — a spot base, not covering fuel</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on the demand trigger, scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1h close &lt; $63,071 (W-SMA200 floor — a close below re-arms the re-confirm-break trigger and ends the digestion read)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$68,763 (D-EMA100) is the working first target — the D-SMA50 $64,914 / D-EMA50 $65,261 cap is entry validation (a demand-trigger entry sits at the reclaim), not a take-profit</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · first target $68,763</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> a demand-trigger entry near the D-EMA50 reclaim
                ~$65,261 with the stop at the floor $63,071 = ~$2,190 risk;
                first target back at $64,914 is below entry, so the working
                first target is $68,763 (D-EMA100) = ~$3,502 reward ≈ 1.6:1 —
                acceptable but conditional on the base forming above the cap,
                not on the price pre-condition. <b>Hard rule:</b> a satisfied
                price pre-condition is NOT an entry signal on its own — it has
                been TRUE the whole recovery while the buyer was covering fuel.
                The entry is the spot base (CVD pulling OI up + the D-EMA50 cap
                reclaimed), in that order. No scout long into unwinding squeeze
                fuel.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · dampening regime intact · no near-dated negative amplifier on the whole strip</span>
              <div className="dn-trade-name">
                No short at the floor into a +101.6M net-long-gamma book — the dealer strip has no catalyst to flip dampening near-term
              </div>
              <div className="dn-thesis">
                Aggregate GEX +101.6M (shallower from +131.8M but firmly
                net-long-gamma), flip $61,644 with spot +3.65% above, the
                $64k–$68k positive band capping and the lone $60k −12.96M
                negative bidding a fade toward the floor. The entire expiry
                strip is positive — no 12JUL/13JUL/17JUL/31JUL negative
                amplifier anywhere — so a short pressed here fights a dampening
                book with no calendar catalyst to convert it. The 12JUL 0.3DTE
                +4.32M settles 08:00Z today (~8h forward of this snap) as a
                non-event for the gamma regime. Reopening short requires a fresh
                negative-gamma amplifier on the near strip AND a 1d close below
                the $63,071 floor — neither is present.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · no short into positive gamma</span></div>
                <div><span className="dn-lvl-k">re-arm short trigger</span><span className="dn-lvl-v bear">a fresh near-dated negative-gamma expiry on the strip AND a 1d close &lt; $63,071 (floor loss confirming the re-confirm-break on the weekly)</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no short at the floor into a +101.6M net-long-gamma book with an all-positive expiry strip</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework:</b> the dampening regime has held every day of the
                recovery and the pullback did not threaten it — GEX stayed
                triple-digit positive, the flip stayed well below spot, and no
                negative amplifier printed on the near strip. A short is a
                catalyst trade, and there is no catalyst.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · single-leg rates fire (10Y &gt; 4.53% by 1bp) · HY OAS leg 8bp away · no roll</span>
              <div className="dn-trade-name">
                Downside put-spread — no roll: the put-spread re-grow gate is a single-leg 1bp fire, not the OR-gate both-leg confirmation
              </div>
              <div className="dn-thesis">
                The put-spread re-grow gate is an OR of two legs (HY OAS &gt;
                2.78% OR 10Y &gt; 4.53%). The 10Y leg is FIRED at 4.54% but by a
                single basis point — a watch-event, not a conviction fire — while
                the HY OAS leg sits 8bp away at 2.70% (RISK-ON). The reclaim-long
                rates filter (10Y &lt; 4.55%) stays TRUE at 4.54%, so the same
                4.54% print is simultaneously below the reclaim filter and above
                the re-grow leg — a knife-edge that argues for no action either
                way. No fresh hedge on a single-leg 1bp fire into a dampening
                dealer book with no near-dated negative amplifier.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · no roll on a single-leg 1bp fire</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (both-leg conviction)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.70%, 8bp to fire) confirming the 10Y &gt; 4.53% leg (currently 4.54%, fired by 1bp)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — still TRUE at 4.54%; awaits a BTC-internal spot-demand pivot</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set
                as levels drift, not backtested breakpoints. A hedge leg would
                be a roll to 17JUL26 5.3DTE or 24JUL26 12.3DTE — but both carry
                positive gamma (+38.79M / +11.25M), so a fresh tail would not
                get the amplifier tailwind. The single-leg 10Y fire at 4.54% is
                inside 1bp of the reclaim-long filter; treat it as noise until
                the HY OAS leg confirms.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle · two-session cover from the 07-10 peak completed · no fresh re-stack signature · slow grind, not an event</span>
              <div className="dn-trade-name">
                Squeeze-cycle — the covering completed without a discrete re-stack; SM ground from −7,908 to −1,103 in two sessions off the 07-10 short peak, now nearly flat
              </div>
              <div className="dn-thesis">
                The squeeze that fueled the reclaim has run its course as a slow
                grind, not a cadence. SM net covered −7,908 (07-09) → −2,057
                (07-11) → −1,103 (today), a two-session march off the 07-10 short peak to the shallowest
                net-short of the recovery, but the last 24h printed no discrete
                re-stack step — SM traded a tight −2,320 / −845 band with no
                single-minute Δnet event. The absence of a re-stack signature is
                itself the read: this is exhaustion of a completed cover, not
                the ignition of a new leg. A fresh re-stack-hostile-2 print
                (Δshort &gt; 0 + Δlong &lt; 0 same minute, Δnet ≤ −3k) would
                re-arm the short-side watch, but the base rate for that after a
                completed cover is low.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">two-session cover from the 07-10 peak completed · SM −7,908 → −2,057 → −1,103 · no discrete re-stack in the last 24h</span></div>
                <div><span className="dn-lvl-k">SM 24h band</span><span className="dn-lvl-v">trough −2,320 @ 2026-07-11 07:01Z · peak (least short) −845 @ 2026-07-11 15:55Z · slow grind, max |Δnet| sub-threshold</span></div>
                <div><span className="dn-lvl-k">forward gating</span><span className="dn-lvl-v">a fresh Δnet ≤ −3k re-stack re-arms the short watch; a spot base (CVD pulls OI up) is the affirmative long read — neither present this snap</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a completed cover removes fuel in
                both directions — the short that powered the reclaim is nearly
                flat, so there is neither a short-squeeze tailwind left for the
                bulls nor a fresh short build for the bears. Read the next
                discrete SM step, in either direction, as a signal in itself;
                there is no calendar prior.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · squeeze fuel unwound · reclaim held the floor · demand block deflated · scout deferred on the demand trigger · floor decided on the Monday 07-13 weekly close</span>
            </h2>

            <p>
              Of the 07-11 decision conditions: the demand-confirm gate DID NOT
              FIRE (the demand block deflated back to de-grossing rather than
              confirming — the fuel unwound); the cover-bounce scout DID NOT
              TRIGGER (price pre-condition stays TRUE but the demand trigger is
              unmet); the floor held (spot +1.31% above $63,071, in-progress
              07-13 close $63,831.60 +1.21% above, re-confirm-break trigger
              dis-armed but not settled until Monday 07-13); the dampening
              regime held (GEX +101.6M, no near-dated negative amplifier); the
              rates filter stayed TRUE (10Y 4.54% &lt; 4.55%). <em>The single
              constructive read of 07-11 — the narrowest demand gate of the
              recovery — resolved to the bearish side: the fuel was covering, it
              unwound, and no spot base replaced it.</em> The conditions today
              re-set around a held floor, a deflated demand block, a completed
              cover, and a scout gated on the demand trigger:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Weekly close settles the floor (Monday 07-13)</td><td className="bull">in-progress 07-13 close $63,831.60 is +1.21% above the $63,071 W-SMA200 floor; the week settles Mon 00:00Z</td><td>a weekly close above the floor confirms the reclaim held; a close below re-arms the re-confirm-break — the decisive event, not the intra-week wick</td></tr>
                <tr><td>Cover-bounce scout (long) — demand trigger</td><td className="bull">spot CVD pulling OI UP AND a 1h/4h reclaim of D-SMA50 $64,914 / D-EMA50 $65,261 with OI building</td><td>scout long 0.2R, target $68,763 (D-EMA100); the price pre-condition is already TRUE and is NOT the trigger</td></tr>
                <tr><td>Floor lost (re-confirm-break)</td><td className="bear">1d close &lt; $63,071 (W-SMA200) confirmed on the Mon 07-13 weekly close</td><td>the reclaim is handed back; the digestion-above-floor read ends and the short-side watch re-arms — but only with a fresh near-dated negative-gamma amplifier</td></tr>
                <tr><td>Dampening regime intact</td><td className="bull">GEX stays net-long-gamma AND no near-dated negative amplifier prints on the near strip (12JUL/13JUL/17JUL/31JUL all positive)</td><td>no short at the floor into positive gamma; the fade toward the floor is dealer-bid ($60k −12.96M), the squeeze toward $66k is dealer-offered</td></tr>
                <tr><td>Fresh re-stack (short re-arm)</td><td className="bear">Δnet ≤ −3k re-stack-hostile-2 (Δshort &gt; 0 + Δlong &lt; 0 same minute) pushing SM back below −4k</td><td>re-arm the short watch — base rate low after a completed two-session cover; read as a standalone signal, no calendar prior</td></tr>
                <tr><td>Macro tail re-grow (single-leg fire)</td><td className="bear">10Y &gt; 4.53% FIRED at 4.54% by 1bp; HY OAS &gt; 2.78% still 8bp away at 2.70%</td><td>no roll on a single-leg 1bp fire; wait for the HY OAS leg to confirm before any hedge roll</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.54% (by 1bp); awaits a BTC-internal spot-demand pivot</td><td>standalone filter TRUE; needs the demand trigger to translate to scout long</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the spot-CVD accumulation (+7,682 over 24h, leaking into
                a shrinking OI today) stops leaking and starts pulling OI up — a
                real spot base reclaiming the D-SMA50 $64,914 / D-EMA50 $65,261
                cap — or whether the deflating squeeze bleeds the reclaim back
                below the $63,071 floor on the Monday 07-13 weekly close. The
                fuel that reclaimed the floor has unwound; the question is now
                whether spot demand takes the baton or whether the reclaim was
                a covering event that fades once the covering finishes
              </span>. Until then this note runs as written: the book is FLAT —
              no short into a deep positive-gamma book, no scout long into
              unwinding squeeze fuel, no fresh hedge on a single-leg 1bp rates
              fire. The reclaim held the floor on the close, the demand block
              deflated, the cover completed, and the dealer book stayed
              dampening. The right read for the next 24h is{' '}
              <em>patient — the floor is decided on the Monday 07-13 weekly
              close, and the long is decided when spot demand replaces the
              covering fuel, not when the price pre-condition stays lit</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> STAGE B codex hostile audit returned{' '}
            <b>PASS-WITH-NOTES</b> — no CRITICAL publish blocker, 1 MAJOR
            lineage defect + 4 MINOR precision issues (see{' '}
            <code>audits/2026-07-12-desk-note.md</code>), plus an ask-deepseek
            supplementary numeric second-audit (adjudicated, not auto-applied)
            that flagged one CRITICAL false-count and three lower-severity
            items. STAGE C applied every finding across the full EN file with a
            grep-closure loop (pattern searched · hits before · hits after) to
            catch semantically-equivalent claims beyond the cited lines:
            <br />
            <b>DN-001 (MAJOR)</b> — cover-lineage overstated as
            &ldquo;four/4th session&rdquo;. Patterns:{' '}
            <code>4th step</code>, <code>four straight</code>,{' '}
            <code>four-session</code>, <code>over four sessions</code>,{' '}
            <code>four-session march</code>. Hits before 7 · hits after 0 —
            reframed to &ldquo;two-session cover from the 07-10 short peak&rdquo;
            everywhere (header, prose, squeeze-cycle trade, decision table);
            remaining &ldquo;four&rdquo; are only &ldquo;all four legs&rdquo; /
            &ldquo;the last four closes&rdquo; / &ldquo;Twenty-four hours&rdquo;.
            RESOLVED.
            <br />
            <b>DS-CRITICAL</b> — &ldquo;the last five all above the $63,071
            floor&rdquo; is false (07-08 $62,255.30 closed below). Pattern:{' '}
            <code>last five all above</code>. Hits before 1 · hits after 0 —
            corrected to &ldquo;the last four (07-09 to 07-12) above the floor,
            with 07-08 the one close below&rdquo;. RESOLVED.
            <br />
            <b>DN-003 (MINOR)</b> — MTF close column flattened to 63,840 for
            every TF. Pattern: <code>63,840</code> in per-TF rows. Restored
            source per-TF closes (15m/1h/4h/8h → 63,833; 1w/1M → 63,839;
            30m/12h/1d/3d stay 63,840); the four legitimate 63,840 rows + the
            footnote scan-spot remain. RESOLVED.
            <br />
            <b>DN-004 (MINOR)</b> — expiry strip omitted 24JUL26. Pattern:{' '}
            <code>24JUL 12.3</code> in strip. Hits before 0 · hits after 1 —
            inserted <code>24JUL 12.3 +11.25M</code> between 17JUL and 31JUL and
            re-worded &ldquo;two forward chunks&rdquo; → &ldquo;forward
            chunks&rdquo; / &ldquo;all positive&rdquo;. RESOLVED.
            <br />
            <b>DN-005 (MINOR)</b> — scout target grid inconsistent with R/R.
            Pattern: <code>take half at</code>, <code>targets $64,914 /
            $65,261 … then</code>. Hits before 1 · hits after 0 — levels grid
            now names $68,763 (D-EMA100) as the working first target and the
            D-SMA50/D-EMA50 cap as entry validation, matching the R/R section
            and the decision table. RESOLVED.
            <br />
            <b>DN-002 (MINOR)</b> — 4h/1h windowed-flow labels lacked the
            sampled-row convention disclosure. Added an explicit note that the
            4h/1h windows use the same inclusive sampled-anchor convention as
            the 24h window (not exact 240/60-minute intervals). RESOLVED.
            <br />
            <b>DS-MAJOR (adjudicated)</b> — SM long/short legs reconstruct the
            net to −2,077 / −1,104 vs the stated −2,076 / −1,103. Recompute
            confirms the live sm_net field is fractional (−2,076.3 → −1,103.3),
            so this is a whole-BTC rounding artifact, not a numeric error;
            disclosed the rounding and named the −2,076 / −1,103 nets as the
            authoritative tape values. RESOLVED (disclosure).
            <br />
            <b>DS-MINOR (OI denominator)</b> — the −2.46% denominator was
            implicit. Stated the prior OI 103,904 BTC explicitly at both the
            meta tile and the prose. <b>DS-MINOR (band sum)</b> — &ldquo;roughly
            +80M&rdquo; undershot the $64k–$68k band (17.35+21.11+21.17+8.00+16.75
            = 84.38M); corrected to &ldquo;roughly +84M&rdquo; with the
            per-strike components shown. Both RESOLVED.
            <br />
            <b>Codex-confirmed clean (unchanged):</b> requireViewer gating,
            JSX/markup integrity, funding × 1095 (+5.18% ann, mean +3.80%, cap
            occupancy 10/1442), OI −2,557/−2.46%, spot CVD +7,682 / futCVD −327,
            SM Δ (long +531 / short −442 / net +973, cut 46.4% / 46.9%), the
            full MA matrix off parquet 00:06Z close $63,831.60 (W-MON,
            W-SMA200 floor $63,071 +1.31%), GEX dual-reference sign (flip
            $61,644, spot +3.65% / idx +4.01%), all-positive expiry strip, RV
            30.32% (30 returns), cross-asset |r| 0.314 / BTC +1.42% vs NQ +0.63%
            = +0.79pt, macro Tier-1, and claims-vs-loaded-data discipline (NTT /
            max-pain / strike-IV / BTC-NQ framework-only; 200W-watch JSON absent,
            floor from matrix W-SMA200 not fabricated). All CRITICAL + MAJOR +
            MINOR findings verified grep-clean (hits-after = 0) before this v2
            promotion. <b>post codex hostile audit.</b>
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-07-12 00:07Z, live
            tape row pinned 00:05Z) with section-level provenance disclosed in
            the manifest band above; the macro Tier-1 panel render is 2026-07-11
            22:17Z (~1.8h before snapshot) and some inputs are explicitly stale
            or pending and flagged as such. Levels, sizes, and conditions are
            illustrative of the desk&rsquo;s process, not standing
            recommendations. Past correlation, gamma, and positioning patterns
            do not bind future tape. Derivatives carry the risk of total loss
            and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The squeeze reclaimed the floor and then unwound. The level
                held on the close; the fuel did not. The scout&rsquo;s gate is
                the demand base, not the price pre-condition. Patient — the
                weekly settles Monday.
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
            v2 · 2026-07-12 00:07Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
