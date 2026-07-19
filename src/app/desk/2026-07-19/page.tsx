import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-19 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-19',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-19' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260719() {
  await requireViewer('/desk/2026-07-19');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-19 · v2</span>
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
              <span className="dn-big">$64,839</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.46%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-19 00:08Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-19 00:08Z (snapshot pin · row t=&ldquo;07-19 08:08&rdquo; BJ)</td>
                  <td className="dn-flag">
                    fresh · 1-min · file tail at read time = pin · daily-update.timer
                    ran 00:00Z, snapshot taken 8 min later · `t` field is BJ-local
                    (UTC+8); the 00:08Z anchor is BJ 08:08
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-19 00:01Z scan (BJ 08:01 header)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · archived verbatim to
                    /opt/desk-note/snapshots/2026-07-19-0008/ · ~7-min stale vs
                    snapshot anchor · in-progress bars · all closes provisional
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-19 00:00Z snapshot</td>
                  <td className="dn-flag">
                    archived to the 2026-07-19-0008 snapshot dir · 874 instruments ·
                    Deribit idx $65,082 vs live spot $64,839 ($243 above) · 19JUL
                    0.3DTE +10.17M settles at 08:00Z today (~8h after snapshot) ·
                    aggregate read from the HTML total (+194.2M); gex_summary.json
                    same-minute reads +206.5M (methodology diff, both deeply positive)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-19 00:00Z
                  </td>
                  <td className="dn-flag">archived to 2026-07-19-0008 · 7d 1h bars · 22 assets · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-18 22:16Z render</td>
                  <td className="dn-flag">
                    archived to 2026-07-19-0008 · ~1.9h render lag · FRED Tier-1
                    REFRESHED this render (10Y nominal now 4.57%, a live print — the
                    07-16 note carried it fetch-failed at 4.56%) · TIPS 2.35% EXTREME ·
                    HY OAS 2.71% · DXY 100.75 · Fed net liq $5.987T · Tier-3 CPI rows
                    monthly/stale
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-19 00:06Z</td>
                  <td className="dn-flag">
                    ~2-min stale vs snapshot anchor · offsets recomputed vs live spot ·
                    W-SMA150 / W-SMA200 non-computable (133 weekly bars on file)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle floor (weekly 200-SMA)</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · recomputed 2026-07-13 00:11Z</td>
                  <td className="dn-flag">
                    runbook&rsquo;s weekly_200sma.json is ABSENT this run · floor read
                    from the maintained trap-watch state = $62,851.69 (last completed
                    week 2026-07-12 close $63,750, 2 consecutive weekly closes above,
                    streak start 07-05) · ratio_pctile / last-event NOT available
                    (weekly_200sma.json is where those live) — not fabricated ·
                    last weekly recompute 2026-07-13T00:11:10Z (internal
                    recomputed_at); slow weekly level
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
              <span className="dn-v">+0.58%</span>
              <span className="dn-src">live · raw 0.000533 × 1095 = +0.58% ann · 24h mean +5.52% · cap occupancy 0 / 1441 sampled rows = 0.0% (no row within reach of the +10.95% Binance cap; 24h max +9.85% ann @ raw 0.008997) · 41 negative rows, trough −0.19% ann</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">off the cap · range −0.19% / +9.85%</span>
              <span className="dn-src">the 07-16 note opened pinned at the +10.95% cap then bled; this 24h window never re-touched it · 24h mean +5.52% ann bleeding toward zero into the snap (+0.58%) · leverage gate fully open</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">+1.26% (+1,261.7 BTC)</span>
              <span className="dn-src">live · 100,228 → 101,490 BTC · OI EXPANDED with spot CVD pulling it up (+14,756 reset-adj) — the demand-quality tell that was ABSENT on 07-16 (where the cover pulled OI DOWN −2,559)</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bull">59.15 / 40.85</span>
              <span className="dn-src">live_db `mkt_long_pct` · bled from 60.85 → 59.15 (−1.70pt) into the up-print · 24h range 59.10 / 61.32 — retail long crowding easing, not chasing</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−6.66k (net short, shallow)</span>
              <span className="dn-src">live · long 14.16k − short 20.82k · far shallower than the recovery&rsquo;s deep short (−22.8k on 07-15) which covered to −5.76k on 07-16; SM re-added a modest short into this print (short_btc peak 21,284.5 @ 2026-07-18 17:21Z / BJ 01:21 07-19)</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · 24h</span>
              <span className="dn-v bear">−6,177.9 → −6,657.2 (Δnet −479.3, cut 7.8%)</span>
              <span className="dn-src">|Δ|/prior_net = 479.3 / 6,177.9 = 7.8% · Δlong +4.8 / Δshort +484.2 — a marginal short-add, NOT a cover · no discrete SM step &gt;800 BTC in 24h (drift, not a re-stack) · vs the 07-16 note&rsquo;s −5,756 the book is ~901 deeper short</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.3% / 32.32%</span>
              <span className="dn-src">GEX median IV · 874 inst · P/C 0.46 · chain-median across N instruments, not a tradable spread · 30D close-to-close RV 32.32% (logret.std×√365×100, 30 returns, parquet last bar 00:06Z)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+4.95% (above)</span>
              <span className="dn-src">flip $61,782 · vs live spot $64,838.85 (+4.95%; 64,838.85/61,782 − 1 = 4.948%) / GEX file Deribit idx $65,082 (+5.34%; the file prints +5.3%) — both refs positive · aggregate +194.2M net-long-gamma, the deepest of the recovery (was +175.1M on 07-16)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The demand-quality leg the 07-16 note was waiting for finally
                printed — spot bought and pulled OI UP
              </span>. Over 24h spot CVD ran{' '}
              <span className="dn-tag bull">+14,756 (reset-adjusted)</span> and
              OI expanded <span className="dn-tag bull">+1,261.7 BTC
              (+1.26%)</span> on a <span className="dn-tag bull">+1.46%</span>{' '}
              print — the first up-move of the recovery fuelled by demand
              lifting open interest rather than a covering short pulling it
              down (07-16 covered −10,651 short and OI fell −2,559). But the
              gate is not clean on the other legs.{' '}
              <span className="dn-signal">
                Smart money did not stay flat-to-covering — it leaned marginally
                short into the strength
              </span>: SM net went{' '}
              <span className="dn-tag bear">−6,177.9 → −6,657.2 (Δnet
              −479.3)</span> on Δshort <span className="dn-tag bear">+484.2</span>{' '}
              / Δlong <span className="dn-tag">+4.8</span> (cut fraction 7.8%, no
              discrete step). The fast frames flashed exhaustion (30m/1h ⚡ TD9
              SELL, RSI 79.2 / 78.8, a top-div cluster 15m/8h/12h/1d). And the
              reclaim-long rates filter just went{' '}
              <span className="dn-tag bear">FALSE</span> — the 10Y refreshed to{' '}
              <span className="dn-tag bear">4.57%</span> this render (the leg the
              07-16 note could not refresh, carried fetch-failed at 4.56%),
              above the 4.55% gate. Against a short: the dealer book is{' '}
              <span className="dn-tag bull">+194.2M</span> net-long-gamma, the
              deepest of the recovery, flip $61,782 spot{' '}
              <span className="dn-tag bull">+4.95%</span> above with{' '}
              <span className="dn-em">no near-dated negative amplifier</span>{' '}
              (31JUL +124.86M dominates the strip), and BTC is the relative-
              strength leader — <span className="dn-tag bull">+1.57% 7d</span>{' '}
              while NQ fell −4.47% (a +6.04pt lead). Book stays FLAT: the bid
              showed in the OI at last, but the rates gate closed and SM leaned
              short into it; a chase-short into the deepest positive-gamma book
              of the recovery with BTC leading TradFi is late.
            </p>

            <p>
              BTC prints <span className="dn-tag">$64,839</span> live,{' '}
              <span className="dn-tag bull">+1.46%</span> on 24h, inside a{' '}
              <span className="dn-tag">$64,856 / $63,887</span> live-tape range
              (high @ 2026-07-18 22:12Z / BJ 06:12 07-19, low @ 2026-07-18
              01:04Z / BJ 09:04 07-18 — the MTF scan&rsquo;s own candle-based 24h
              reads $64,837 / $63,860, a different source, not a conflict).{' '}
              <span className="dn-signal">The cycle floor held on the closes
              that count</span>: the completed 2026-07-12 weekly close{' '}
              <span className="dn-tag bull">$63,750</span> sits +1.43% above the{' '}
              <span className="dn-tag">$62,851.69 W-SMA200</span> floor (two
              consecutive weekly closes above, streak from 07-05), and the daily
              closes have printed above it six sessions running — 07-14{' '}
              <span className="dn-tag">$65,014.70</span>, 07-15{' '}
              <span className="dn-tag">$64,721.40</span>, 07-16{' '}
              <span className="dn-tag">$63,801.00</span>, 07-17{' '}
              <span className="dn-tag">$63,909.90</span>, 07-18{' '}
              <span className="dn-tag">$64,806.70</span>, and the in-progress
              07-19 close <span className="dn-tag">$64,818.10</span> — the only
              recent close beneath the floor was 07-13 $62,307. The MA matrix
              holds four positive lines below spot (D-SMA20 $63,165 +2.65%,
              D-SMA50 $63,389 +2.29%, D-EMA20 $63,627 +1.91%, and the floor
              $62,852 +3.16%), with the <span className="dn-tag bear">D-EMA50
              $65,008 (−0.26%)</span> cap just $169 overhead as the
              entry-validation line and D-EMA100 $68,167 (−4.88%) the working
              first target.{' '}
              <span className="dn-em">
                The floor is not the question any more — it is reclaimed and
                settled on the weekly close, and the price pre-condition
                (spot above flip, D-EMA20, D-SMA20, floor) has been rebuilt for
                days. The question this note turns on is whether the buyer that
                finally showed in the OI is the buyer of record, or whether SM
                leaning short + the rates gate closing + fast-frame exhaustion
                keep the scout deferred one more session.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · demand pulled OI UP (+1,262 BTC) on spot CVD +14,756 · SM leaned marginally short (Δnet −479) · funding fully off the cap · no discrete SM step</span>
            </h2>

            <p>
              <span className="dn-signal">
                For the first time in the recovery the up-print is demand-fuelled,
                not cover-fuelled
              </span>. Over the 24h window (reset-adjusted across the 2026-07-18
              06:05Z / BJ 14:05 07-18 cb_cvd + fut_cvd reset): price{' '}
              <span className="dn-tag bull">+1.46%</span>, OI{' '}
              <span className="dn-tag bull">+1,262 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +14,756</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +1,062</span>, big-print{' '}
              <span className="dn-tag bull">+516 BTC / 508 prints</span>,
              taker-net <span className="dn-tag bull">+1,057</span> —{' '}
              <span className="dn-em">spot led hard, perps followed modestly,
              and OI expanded into it</span>. That is the exact shape the 07-16
              note named as the missing leg: on 07-16 the cover pulled OI DOWN
              −2,559 BTC (the buyer of record was a short buying itself back);
              here spot CVD pulls OI UP, so a real bid is stepping in and
              carrying open interest with it. The near frames cooled into the
              snap: 4h price <span className="dn-tag bull">+0.47%</span>, OI{' '}
              <span className="dn-tag bear">−106 BTC</span>, spot CVD{' '}
              <span className="dn-tag">Δ +290</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −695</span>, taker-net{' '}
              <span className="dn-tag bear">−695</span>; 1h price{' '}
              <span className="dn-tag bull">+0.15%</span>, OI{' '}
              <span className="dn-tag bull">+353 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +325</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −131</span>, taker-net{' '}
              <span className="dn-tag bear">−131</span> —{' '}
              <em>spot still bidding and OI still building in the last hour
              while perps take small profit; the bid has not rolled off, it has
              rotated to spot</em>.
            </p>

            <p>
              <span className="dn-signal">
                But smart money did not confirm the demand — it leaned
                marginally short into the strength
              </span>. SM net moved{' '}
              <span className="dn-tag bear">−6,177.9 → −6,657.2</span> over 24h
              (Δnet −479.3), and the components say Δlong{' '}
              <span className="dn-tag">+4.8</span> / Δshort{' '}
              <span className="dn-tag bear">+484.2</span> — a small short-add on
              a flat long, cut fraction |−479.3| / 6,177.9 ={' '}
              <span className="dn-tag">7.8%</span>. This is not the deep
              re-short of 07-14/07-15 (the SM short ran to −22,817 then) nor is
              it a cover; it is a shallow lean. There was{' '}
              <span className="dn-em">no discrete SM step &gt; 800 BTC in the
              whole 24h</span> — the book drifted rather than stepped, with the
              SM net trough at{' '}
              <span className="dn-tag bear">−6,916.4 @ 2026-07-18 17:51Z (BJ
              01:51 07-19)</span> and short_btc peaking{' '}
              <span className="dn-tag bear">21,284.5 @ 2026-07-18 17:21Z (BJ
              01:21 07-19)</span>, both roughly overnight and both since bled a
              touch into the snap. Relative to the 07-16 note (SM covered to
              −5,756), the book is ~901 deeper short. So the demand-quality
              gate&rsquo;s two halves split:{' '}
              <span className="dn-em">spot CVD pulling OI UP is now TRUE; SM
              flat-to-covering is marginally FALSE (a +484 short-add)</span>.
              The buyer is real on the tape, but SM is fading it, not joining
              it.
            </p>

            <p>
              The leverage side backs the demand read without a squeeze
              signature.{' '}
              <span className="dn-signal">Funding is fully off the cap</span>:
              live <span className="dn-tag">+0.58% ann</span> (raw 0.000533 ×
              1095), 24h mean{' '}
              <span className="dn-tag">+5.52%</span>, 24h range{' '}
              <span className="dn-tag">−0.19% / +9.85%</span> with{' '}
              <span className="dn-tag bull">0 / 1441 sampled rows at the +10.95%
              Binance cap (0.0%)</span> — the 24h max +9.85% ann (raw 0.008997)
              never reached the cap the 07-16 note opened pinned to, and{' '}
              <span className="dn-tag bull">41 rows printed negative</span>
              (trough −0.19% ann). Perp basis holds a persistent modest discount:
              snap <span className="dn-tag bear">−$30.38</span> to spot, 24h mean{' '}
              −$44.44, and the basis never held a sustained premium across the
              window (24h max +$8.42). OI Δ{' '}
              <span className="dn-tag bull">+1,261.7 BTC (+1.26%)</span> — an
              EXPANSION, the constructive read when it comes with spot CVD up.
              Retail <span className="dn-tag">mkt_long_pct 59.15%</span> from
              60.85% — a −1.70pt bleed into the up-print (24h range 59.10 /
              61.32), which is the healthy shape: retail de-crowding while spot
              lifts, not retail chasing.{' '}
              <span className="dn-em">
                Funding off the cap and dipping negative + OI expanding on spot
                demand + retail bleeding off the crowded long + SM leaning only
                a shallow short: the leverage book is not pressing and not
                squeezing — it is a spot-led lift that SM is fading at the
                margin.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · 4h/8h/12h all just golden-crossed water-up · fast frames flashing ⚡ TD9 SELL overbought · higher-TF bottom-div cluster (1d/3d/1w) + persistent 1M ⚡ TD9 BUY · regime 6/9 trend-continuation</span>
            </h2>

            <p>
              <span className="dn-signal">
                The engine frames all confirmed the bounce in the same scan
              </span>: 4h printed a water-up golden cross 2 bars back, and 8h and
              12h both printed water-up golden crosses <em>just now</em> (DIF
              +287.3 on 8h, +458.9 on 12h — strong crosses above the water line,
              continuation-typed). That is a deeper confirmation than the 07-16
              scan (which carried 12h/3d golden crosses and a 1h/1M ⚡ TD9 BUY).
              The MTF engine reads{' '}
              <span className="dn-tag">4 long / 2 short / 4 neutral</span> across
              10 TFs, net &ldquo;higher-TF bearish · short-term bounce&rdquo;,
              regime <span className="dn-tag">6/9 cycle-momentum (JT ≥ 0),
              trend-continuation favoured</span>. But the fast frames are
              flashing exhaustion into the same lift:{' '}
              <span className="dn-tag bear">⚡ TD9 SELL on 30m and 1h</span>{' '}
              (overbought reversal hint), RSI stretched to{' '}
              <span className="dn-tag bear">79.2 (30m) / 78.8 (1h)</span>, and a
              top-div cluster on 15m/8h/12h/1d. Under it sits the constructive
              higher-frame set: a{' '}
              <span className="dn-tag bull">bottom-div cluster on 1d/3d/1w</span>{' '}
              and a persistent{' '}
              <span className="dn-tag bull">1M ⚡ TD9 BUY $64,817</span>.{' '}
              <span className="dn-em">
                Read straight: the engine has confirmed the bounce three frames
                deep (4h/8h/12h golden crosses) and the higher frames carry
                bottom-div + the monthly buy setup, but the fast frames are
                overbought right here — the structure favours the bounce
                continuing after a fast-frame cool, not chasing the 79-RSI
                print.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,817</td><td className="num bull">66.4</td><td className="neut">death (water-up) 4b</td><td className="bull">above ↓64.2k 33b</td><td>Sell 4</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">64,813</td><td className="num bear">79.2</td><td className="bull">golden (water-up) 15b</td><td className="bull">above ↓63.9k 59b</td><td>⚡ Sell 9</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">64,817</td><td className="num bear">78.8</td><td className="bull">golden (water-dn) 35b</td><td className="bull">above ↓63.8k 9b</td><td>⚡ Sell 9</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">64,817</td><td className="num">60.1</td><td className="bull">golden (water-up) 2b</td><td className="bull">above ↓63.4k 9b</td><td>Sell 4</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">64,817</td><td className="num">57.4</td><td className="bull">golden (water-up) 刚印 (just printed)</td><td className="bull">above ↓62.6k 30b</td><td>Sell 4</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>12h</td><td className="num">64,817</td><td className="num">58.7</td><td className="bull">golden (water-up) 刚印 (just printed)</td><td className="bull">above ↓62.5k 10b</td><td>Sell 2</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>1d</td><td className="num">64,817</td><td className="num">55.2</td><td className="bull">golden (water-dn) 18b</td><td className="bear">below ↑65.6k 48b</td><td>Sell 1</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">64,813</td><td className="num">45.4</td><td className="bull">golden (water-dn) 3b</td><td className="bear">below ↑73.6k 16b</td><td>Sell 6</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">64,817</td><td className="num">39.9</td><td className="bear">death (water-dn) 3b</td><td className="bear">below ↑96.3k 24b</td><td>Sell 1</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">64,817</td><td className="num">44.2</td><td className="neut">—</td><td className="bull">above ↓47.0k 29b</td><td>⚡ Buy 9</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (BJ 08:01 header;
                    rolling latest file, archived verbatim to
                    /opt/desk-note/snapshots/2026-07-19-0008/). Header alerts:{' '}
                    <em>4h water-up golden cross (2b), 8h water-up golden cross
                    (just printed), 12h water-up golden cross (just printed)</em>;{' '}
                    <em>⚡ TD9 SELL 30m/1h, ⚡ TD9 BUY 1M</em>. Scan spot $64,817,
                    24h +1.40% (00:01Z MTF scan; the live-tape header at 00:08Z
                    shows +1.46% on the same 24h window — the 7-minute gap
                    accounts for the 0.06pt difference), 24h H/L $64,837 /
                    $63,860, qVol $3.16B. Closes are in-progress bars; treat
                    every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix reads cycle-floor reclaim, capped one line overhead.
              Spot $64,838.85 sits above four positive lines —{' '}
              <span className="dn-tag bull">D-SMA20 $63,165 (+2.65%)</span>,{' '}
              <span className="dn-tag bull">D-SMA50 $63,389 (+2.29%)</span>,{' '}
              <span className="dn-tag bull">D-EMA20 $63,627 (+1.91%)</span>, and
              the <span className="dn-tag bull">W-SMA200 floor $62,852
              (+3.16%)</span> — with the first overhead cap immediately above:{' '}
              <span className="dn-tag bear">D-EMA50 $65,008 (−0.26%)</span>, just
              $169 up. That D-EMA50 is the entry-validation line — a daily close
              back above it is the difference between digestion-under-the-cap and
              a real reclaim leg toward{' '}
              <span className="dn-tag bear">D-EMA100 $68,167 (−4.88%)</span>, the
              working first target. Everything else overhead in order:{' '}
              <span className="dn-tag bear">D-SMA150 $69,855 (−7.18%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,872 (−7.20%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $70,298 (−7.77%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $70,538 (−8.08%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $71,224 (−8.97%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 seed $73,008 (−11.19%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $73,054 (−11.25%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $74,108 (−12.51%)</span>.
              Far above and disused: W-EMA150 seed $76,910 (−15.70%), W-EMA50
              $79,569 (−18.51%), W-EMA100 $80,637 (−19.59%), W-SMA50 $86,486
              (−25.03%), W-SMA100 $88,488 (−26.73%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-19 00:06Z (close
                $64,818.10); offsets recomputed against live spot $64,838.85.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. W-SMA150 / W-SMA200 are non-computable from
                parquet (133 weekly bars on file, short of both windows) — the
                cycle floor $62,851.69 is read from the maintained
                ma200w_trap_watch_state.json (recomputed 2026-07-13 00:11Z), not
                fabricated; W-EMA150 $76,910 and W-EMA200 $73,008 show because
                the EMA seeds from available history and are reported as seed.
                Daily closes: 07-13 $62,307, 07-14 $65,015, 07-15 $64,721, 07-16
                $63,801, 07-17 $63,910, 07-18 $64,807, 07-19 (in-progress)
                $64,818 — six consecutive closes above the $62,852 floor.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DEEPENED to +194.2M net-long-gamma (deepest of the recovery) · flip $61,782, spot +4.95% above · 31JUL +124.86M dominates a wholly positive strip · NO near-dated negative amplifier</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book is deep net-long-gamma and got deeper
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+194.2M / 1%</span> off the btc_gex
              HTML (the same-minute gex_summary.json reads +206.5M — a
              methodology difference, both deeply positive and dampening), up
              from +175.1M on 07-16 — the deepest net-long-gamma of the
              recovery. The 0-γ flip is{' '}
              <span className="dn-tag">$61,782</span> and spot $64,839 sits{' '}
              <span className="dn-tag bull">+4.95% above</span> on
              spot-denominated math (64,838.85 / 61,782 − 1 = +4.948%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads +5.3% off its
              Deribit-index $65,082 ($243 above live spot), which is{' '}
              <span className="dn-tag bull">+5.34%</span> (65,082 / 61,782 − 1 =
              +5.342%) — both references positive, spot well above the flip. The
              wall map is a stack of positive strikes overhead:{' '}
              <span className="dn-tag bull">$70k +65.47M</span> (heaviest wall),{' '}
              <span className="dn-tag bull">$72k +33.43M</span>,{' '}
              <span className="dn-tag bull">$66k +23.45M</span>,{' '}
              <span className="dn-tag bull">$68k +21.49M</span>,{' '}
              <span className="dn-tag bull">$65k +19.42M</span> (the wall
              straddling spot),{' '}
              <span className="dn-tag bull">$67k +16.42M</span>,{' '}
              <span className="dn-tag bear">$60k −13.81M</span> (the lone
              top-10 negative, a crash-put residual bidding the fade),{' '}
              <span className="dn-tag bull">$80k +9.88M</span>,{' '}
              <span className="dn-tag bull">$69k +6.60M</span>,{' '}
              <span className="dn-tag bull">$75k +5.94M</span>.{' '}
              <span className="dn-em">
                The $65k–$72k positive band sums to roughly +180M of dampening
                gamma directly overhead — the book is structurally offered into
                a squeeze and bid into a fade, which is exactly why a chase-short
                here is late and a chase-long into the 79-RSI print gets sold by
                the $65k/$66k walls
              </span>. By expiry the strip is wholly positive: 19JUL 0.3DTE{' '}
              +10.17M settles at 08:00Z today (~8h after the snapshot), 24JUL 5.3
              +31.89M, and <span className="dn-tag bull">31JUL 12.3
              +124.86M</span> dominates everything forward, then 7AUG +5.40M,
              28AUG +18.13M, 25SEP +4.32M, 25DEC +3.91M, 26MAR27 +0.99M, 25JUN27
              +0.57M. <span className="dn-em">No single forward expiry carries a
              negative amplifier</span> — there is nothing on the strip to fuel a
              down-leg; the 31JUL +124.86M chunk is a positive-gamma magnet, not
              a down-amplifier. The amplifier era of the down-leg remains
              structurally over.
            </p>

            <p>
              IV median across 874 instruments is{' '}
              <span className="dn-tag">41.3%</span> against 30D close-to-close
              RV of <span className="dn-tag">32.32%</span> — chain-level richness{' '}
              <span className="dn-tag">~+9.0pt</span>, richer RV than the recovery
              lows as the two-week range widened. Put/Call OI ratio{' '}
              <span className="dn-tag">0.46</span> (128,394 put OI / 279,697 call
              OI) — call-heavy, consistent with the positive-gamma wall stack.{' '}
              <span className="dn-em">
                A chain-median across N instruments, not a tradable spread;
                expiry-/strike-level vega, skew and term structure remain not
                loaded; the vol read stays framework-only
              </span>. RV methodology: 30D close-to-close, logret.std × √365 ×
              100 on the last 30 daily log returns anchored to parquet last bar
              2026-07-19 00:06Z.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · 10Y REFRESHED to 4.57% (reclaim-long rates filter now FALSE) · TIPS 2.35% EXTREME · HY OAS 2.71% (7bp shy of the re-grow gate) · Fed net liq $5.987T EXTREME RISK-ON · BTC decoupled UP, leading NQ +6.04pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape is split — rates and the dollar tight / risk-off,
                credit and liquidity loose — and the rates leg the 07-16 note
                could not refresh came back live and unfriendly
              </span>. Dashboard render is 2026-07-18 22:16Z, ~1.9h before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bear">4.57% (+2.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.93</span> — RISK-OFF, and{' '}
              <span className="dn-em">above the 4.55% reclaim-long rates filter
              gate</span>: the 07-16 note carried the 10Y fetch-failed at 4.56%
              and told readers not to lean; this render prints it live at 4.57%,
              so the rates filter is now FALSE and the put-spread re-grow 10Y leg
              (&gt; 4.53%) is FIRED. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.35% (+3.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.80</span> — EXTREME RISK-OFF,
              episodic z +1.65. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.21% (+1.0bp)</span> — no tag. HY OAS{' '}
              <span className="dn-tag bull">2.71% (0.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.11</span> — RISK-ON, sitting 7bp
              shy of its 2.78% re-grow gate. MOVE bond vol{' '}
              <span className="dn-tag">70.9 (+1.33)</span> — neutral. DXY{' '}
              <span className="dn-tag bear">100.75 (+0.02)</span>, regime z{' '}
              <span className="dn-tag bear">+1.79</span> — RISK-OFF, firm. Fed
              net liquidity{' '}
              <span className="dn-tag bull">$5.987T (+0.025T)</span>, episodic z{' '}
              <span className="dn-tag bull">+2.42</span> — EXTREME RISK-ON, a
              fresh weekly build. NFCI −0.538 RISK-ON (stale 8d).{' '}
              <span className="dn-em">
                Net: the put-spread re-grow gate now has ONE leg fired (10Y 4.57%
                &gt; 4.53%) while the HY OAS leg stays 7bp shy at 2.71% — a
                single-leg fire, not the both-legs confirmation a fresh hedge
                needs; and the reclaim-long rates filter has flipped FALSE, which
                is a real headwind for the scout long. The offsetting read is
                liquidity: Fed net liq at an EXTREME RISK-ON +2.42 episodic.
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
                <tr><td>US 10Y nominal</td><td className="num">4.57%</td><td className="num bear">+2.0bp</td><td className="num bear">+1.93</td><td className="num">+1.17</td><td className="bear">tight · RISK-OFF · filter now FALSE</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.35%</td><td className="num bear">+3.0bp</td><td className="num bear">+2.80</td><td className="num bear">+1.65</td><td className="bear">EXTREME RISK-OFF (episodic)</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.21%</td><td className="num">+1.0bp</td><td className="num">−0.21</td><td className="num">+0.03</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.71%</td><td className="num">0.0bp</td><td className="num bull">−1.11</td><td className="num">−0.28</td><td className="bull">loose · RISK-ON · 7bp to gate</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.538</td><td className="num">−0.01</td><td className="num bull">−1.03</td><td className="num bull">−1.92</td><td className="stale">RISK-ON · stale 8d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">70.9</td><td className="num bear">+1.33</td><td className="num">−0.33</td><td className="num">+0.18</td><td className="neut">neutral</td></tr>
                <tr><td>DXY</td><td className="num">100.75</td><td className="num bear">+0.02</td><td className="num bear">+1.79</td><td className="num">+0.15</td><td className="bear">firm · RISK-OFF</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.987T</td><td className="num bull">+0.025T</td><td className="num bull">+2.34</td><td className="num bull">+2.42</td><td className="bull">EXTREME RISK-ON · fresh build</td></tr>
                <tr><td>USD/JPY</td><td className="num">162.35</td><td className="num">−0.02</td><td className="num bear">+1.50</td><td className="num">+0.96</td><td className="neut">no tag</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.90%</td><td className="num">+2.0bp</td><td className="num bull">−0.73</td><td className="num">+1.17</td><td className="neut">tight</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7677</td><td className="num">−0.00</td><td className="num bull">−1.42</td><td className="num bull">−0.86</td><td className="neut">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.217</span> —
              IDIOSYNCRATIC (below the 0.25 threshold), the crypto-internal
              regime holding. BTC&rsquo;s listed ties: NQ{' '}
              <span className="dn-tag">+0.427</span> (top), SILVER{' '}
              <span className="dn-tag">+0.377</span>, SP500{' '}
              <span className="dn-tag">+0.350</span>, GOLD{' '}
              <span className="dn-tag">+0.341</span>, PALL{' '}
              <span className="dn-tag">+0.287</span>, TSLA{' '}
              <span className="dn-tag">+0.284</span>, JP225{' '}
              <span className="dn-tag">+0.272</span>, NVDA{' '}
              <span className="dn-tag">+0.265</span>, PLAT{' '}
              <span className="dn-tag">+0.263</span>. 7d performance is the story:{' '}
              <span className="dn-tag bull">BTC +1.57%</span> while the TradFi
              engine sold off — NQ{' '}
              <span className="dn-tag bear">−4.47%</span>, SP500{' '}
              <span className="dn-tag bear">−1.58%</span>, JP225{' '}
              <span className="dn-tag bear">−3.49%</span>, NVDA{' '}
              <span className="dn-tag bear">−3.03%</span>, META{' '}
              <span className="dn-tag bear">−4.23%</span>, TSLA{' '}
              <span className="dn-tag bear">−6.44%</span>; only AAPL{' '}
              <span className="dn-tag bull">+6.34%</span> and MSFT{' '}
              <span className="dn-tag bull">+3.27%</span> held up in the index.
              Metals soft (GOLD −2.22%, SILVER −6.25%, PLAT −1.91%), energy ran
              (CL <span className="dn-tag bull">+13.16%</span>, BRENT{' '}
              <span className="dn-tag bull">+12.42%</span>).{' '}
              <span className="dn-em">
                BTC is the relative-strength leader of its own risk cluster this
                7d — +1.57% while NQ fell −4.47%, a +6.04pt lead (the 07-16 note
                had this lead collapsed to +0.01pt). BTC decoupled UP: it lifted
                on its own demand while the macro engine rolled over. That is a
                second, independent reason not to chase-short — you would be
                shorting the strongest asset in the complex into a positive-gamma
                dealer book
              </span>. JGB monthly 2.67% carries EXTREME RISK-OFF monthly tag —
              do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · demand-quality scout LONG deferred (OI-up leg TRUE, SM-cover leg FALSE, rates filter FALSE, fast frames overbought) · chase-short STOOD DOWN (deepest positive-gamma of the recovery, BTC the RS leader) · macro tail single-leg fire, no fresh hedge · book FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                The missing leg finally printed and the book still stays flat —
                for three specific reasons, not one
              </span>. The 07-16 scout was gated on a demand-quality trigger:
              spot CVD pulling OI UP with SM flat-to-covering. Half of that is
              now TRUE (spot CVD +14,756 pulled OI +1,262 BTC), but the SM half
              is marginally FALSE (SM added +484 short, net −479 deeper), the
              reclaim-long rates filter flipped FALSE at 10Y 4.57%, and the fast
              frames are printing ⚡ TD9 SELL at 79-RSI. So the scout does not
              trigger — but it is closer than it has been, and the reason it is
              deferred has shifted from &ldquo;no bid in the OI&rdquo; to
              &ldquo;the bid showed but SM is fading it, the rates gate closed,
              and the near-term tape is overbought.&rdquo; On the other side, a
              chase-short is late into the deepest positive-gamma book of the
              recovery (+194.2M, no near-dated negative amplifier) with BTC the
              relative-strength leader of its risk cluster. The book today is: no
              scout long yet, no chase-short, no fresh hedge on a single-leg
              rates fire — patient for the confirming print.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · DEFERRED · demand-quality OI-up leg TRUE, SM-cover leg + rates filter FALSE, fast frames overbought</span>
              <div className="dn-trade-name">
                Demand-quality scout — the OI-up leg finally fired (spot CVD +14,756 pulled OI +1,262 BTC), but SM leaned short (+484), the rates filter flipped FALSE (10Y 4.57%), and 30m/1h are at 79-RSI ⚡ TD9 SELL
              </div>
              <div className="dn-thesis">
                The demand-quality trigger the 07-16 note set — spot CVD pulling
                OI UP with SM flat-to-covering — is the first time in the
                recovery its OI-up half is satisfied: this 24h up-print is
                spot-led (spot CVD +14,756) and OI EXPANDED +1,262 BTC into it,
                not the covering short that pulled OI down −2,559 on 07-16. The
                price pre-condition is well-built (spot above flip, D-EMA20,
                D-SMA20, floor — all four for days). But the confirmation legs
                are not all green: (1) SM did not stay flat-to-covering, it added
                a shallow +484 short (net −479 deeper, cut 7.8%); (2) the
                reclaim-long rates filter (10Y &lt; 4.55%) went FALSE at a
                refreshed 4.57%; (3) fast frames flashed ⚡ TD9 SELL at RSI
                79.2 / 78.8. The disciplined entry waits for either the rates
                filter back under 4.55% OR SM to flip flat-to-covering with OI
                still expanding, ideally on a daily close back above the D-EMA50
                $65,008 cap. Status: <em>deferred, closer than 07-16</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">trigger (both legs required)</span><span className="dn-lvl-v bull">1h close &gt; $65,008 (D-EMA50 reclaim, the entry-validation cap) AND SM flat-to-covering (Δshort ≤ 0 over 4h) with OI still expanding — while 10Y &lt; 4.55% OR the up-close comes with SM covering</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on trigger print, scout long 0.2R · the demand base is now real, the gate is the cap reclaim + SM confirmation</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1h close &lt; $62,852 (W-SMA200 cycle floor — a close below ends the reclaim read)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$68,167 (D-EMA100 first target) then $69,855 / $69,872 (D-SMA150 / W-SMA20 cluster)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · take half at D-EMA100</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> trigger ~$65,008 (D-EMA50), stop $62,852 (floor) =
                ~$2,156 risk; first target $68,167 = ~$3,159 reward ≈ 1.47:1.
                <b> Hard rule:</b> do NOT scout-long on the demand leg alone — a
                spot-led OI expansion that SM is short-fading, at a 79-RSI fast
                frame, into the $65k/$66k positive walls, gets sold. The two-leg
                trigger (D-EMA50 reclaim + SM confirmation) is what separates a
                real reclaim from a fade into the walls. The rates filter being
                FALSE at 4.57% is a discretionary headwind, not a hard block —
                but it argues for the SM-cover leg as the non-negotiable
                confirmation.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · STOOD DOWN · deepest positive-gamma of the recovery · no amplifier · BTC the RS leader</span>
              <div className="dn-trade-name">
                Chase-short — stood down: +194.2M net-long-gamma (deepest of the recovery), a wholly positive expiry strip, and BTC leading NQ +6.04pt
              </div>
              <div className="dn-thesis">
                A short here would be fighting three structural facts at once. The
                dealer book is +194.2M net-long-gamma (dampening), the deepest of
                the recovery, with flip $61,782 and spot +4.95% above it — a
                positive-gamma book is offered into a squeeze but there is no
                negative-gamma chunk anywhere on the strip to fuel a down-leg
                (31JUL +124.86M is a positive magnet, 19JUL 0.3DTE +10.17M
                settles harmless at 08:00Z today). BTC is the relative-strength
                leader of its risk cluster (+1.57% 7d while NQ fell −4.47%), so a
                short is fading the strongest asset in the complex. And SM&rsquo;s
                short is shallow (−6,657 net, far off the −22,817 recovery deep) —
                there is no deep-short unwind to ride down. Status:{' '}
                <em>stood down</em>. The only short that re-arms is a structural
                break, not a fade.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm trigger (not active)</span><span className="dn-lvl-v bear">1d close &lt; $62,852 (W-SMA200 floor) AND a fresh near-dated NEGATIVE gamma chunk appearing on the strip — neither present</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v bear">no chase-short into a +194.2M positive-gamma book with BTC leading TradFi and SM already shallow-short</span></div>
              </div>
              <div className="dn-gating">
                <b>Stood down.</b> The amplifier era of the down-leg is over —
                the strip has carried no near-dated negative amplifier for the
                whole recovery, and the dealer book has only deepened its
                positive gamma. A short requires the cycle floor to break on a
                daily close AND a negative-gamma chunk to appear; a fade of a
                positive-gamma, RS-leading tape is not a trade.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — SINGLE leg fired (10Y), no fresh hedge</span>
              <div className="dn-trade-name">
                Downside put-spread — not re-grown: the 10Y leg fired (4.57% &gt; 4.53%) but the HY OAS leg is 7bp shy; a single-leg fire is not the both-legs confirmation a fresh hedge needs
              </div>
              <div className="dn-thesis">
                The put-spread re-grow gate is two legs, BOTH required: HY OAS
                &gt; 2.78% AND 10Y &gt; 4.53%. This render fires only the 10Y leg — refreshed to 4.57%
                (the 07-16 note carried it fetch-failed at 4.56%, unrefreshable)
                — but the HY OAS leg sits 7bp shy at 2.71% (RISK-ON). The desk
                treats a single-leg fire on the rates side, with credit still
                loose and BTC decoupled UP from the macro engine, as insufficient
                to re-grow a downside tail: a fresh put-spread into a +194.2M
                positive-gamma book would carry no amplifier tailwind and would
                fight BTC&rsquo;s own relative strength. The reclaim-long rates
                filter flipping FALSE at 4.57% is noted as a scout headwind
                above, not as a hedge trigger here. No fresh hedge.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-grow trigger (both-legs preferred)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.71%, 7bp to fire) to JOIN the already-fired 10Y &gt; 4.53% (4.57%) — a both-legs confirmation, not a single rates leg</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bear">10Y &lt; 4.55% close — now FALSE at 4.57% (refreshed); a scout-long headwind until it eases back under</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set
                as levels drift, not backtested breakpoints. A fresh hedge on the
                single rates leg would be a put-spread rolled to 24JUL 5.3 DTE or
                31JUL 12.3 DTE — but both of those expiries are positive-gamma
                (+31.89M / +124.86M), so a tail there fights the dealer book
                rather than riding it. The desk waits for the HY OAS leg to join
                before re-growing, or for the cycle floor to break outright.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · demand pulled OI up (leg 1 of the scout gate TRUE) · SM leaned short + rates filter FALSE (legs 2/3 FALSE) · dealer book deepened positive-gamma · book FLAT for the confirming print</span>
            </h2>

            <p>
              Of the 07-16 decision conditions: the demand-quality scout&rsquo;s
              OI-up leg FIRED (spot CVD +14,756 pulled OI +1,262 BTC — the leg
              that had stayed UNMET while the cover pulled OI down); the
              floor-hold condition FIRED again (07-12 weekly close $63,750 above
              $62,852, six daily closes above); the SM-cover leg DID NOT FIRE (SM
              leaned +484 short, net −479 deeper — a fade, not a join); the
              reclaim-long rates filter FLIPPED FALSE (10Y refreshed to 4.57%,
              above 4.55%); the chase-short condition DID NOT FIRE (dealer book
              deepened to +194.2M positive-gamma, no amplifier, BTC the RS
              leader); the macro re-grow gate fired ONE leg (10Y 4.57% &gt;
              4.53%) with the HY OAS leg 7bp shy. <em>The demand base the prior
              note was waiting for arrived, but the confirmation legs (SM
              flat-to-covering, rates filter true) did not — so the scout stays
              deferred and the book stays flat, closer to a long than at any
              point in the recovery but not yet triggered.</em> The conditions
              re-set around a real spot bid, an SM short-fade, a closed rates
              gate, and the deepest positive-gamma book of the recovery:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Demand-quality scout (long) — OI-up leg TRUE</td><td className="bull">1h close &gt; $65,008 (D-EMA50) AND SM flat-to-covering (Δshort ≤ 0 / 4h) with OI still expanding</td><td>scout long 0.2R, target $68,167 (D-EMA100) then $69,855 / $69,872 cluster; stop $62,852</td></tr>
                <tr><td>SM confirmation (the non-negotiable leg)</td><td className="bear">currently FALSE — SM added +484 short over 24h (net −479 deeper, cut 7.8%)</td><td>wait for SM to flip flat-to-covering into the up-move; a spot-led lift that SM short-fades gets sold into the $65k/$66k walls</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">10Y &lt; 4.55% close — now FALSE at 4.57% (refreshed from the 07-16 fetch-failed 4.56%)</td><td>scout headwind until 10Y eases back under 4.55%; not a hard block but argues for SM confirmation as the gate</td></tr>
                <tr><td>Cycle floor lost (regime escalation)</td><td className="bear">1d close &lt; $62,852 (W-SMA200)</td><td>ends the reclaim read; separate reassessment — the digestion-above-floor thesis is falsified and a short can re-arm only with a fresh negative-gamma chunk</td></tr>
                <tr><td>Chase-short (STOOD DOWN)</td><td className="bear">1d close &lt; $62,852 AND a fresh near-dated NEGATIVE gamma chunk on the strip — neither present</td><td>no chase-short into +194.2M positive-gamma with BTC leading NQ +6.04pt and SM already shallow-short</td></tr>
                <tr><td>Macro tail re-grow (single leg fired)</td><td className="bear">HY OAS &gt; 2.78% (7bp to fire) to JOIN 10Y &gt; 4.53% (4.57%, already fired)</td><td>re-grow only on the both-legs confirmation; a single rates-leg fire into a positive-gamma strip is not a hedge trigger</td></tr>
                <tr><td>Fast-frame exhaustion (near-term)</td><td className="stale">30m/1h ⚡ TD9 SELL at RSI 79.2 / 78.8, top-div cluster 15m/8h/12h/1d</td><td>do not chase the 79-RSI print; the structure favours the bounce continuing after a fast-frame cool, not into it</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the spot bid that finally pulled OI up converts SM from
                short-fade to flat-to-covering on a daily close back above the
                D-EMA50 $65,008 cap (which triggers the scout long), or whether
                SM presses its short and a fast-frame roll-over drops price back
                under the four positive MA lines toward the $62,852 floor. The
                demand base is real for the first time in the recovery; the
                question is now whether smart money joins the bid or keeps fading
                it while the rates gate stays shut
              </span>. Until then this note runs as written: the demand-quality
              scout is deferred (OI-up leg TRUE, SM-cover leg and rates filter
              FALSE), the chase-short is stood down into the deepest
              positive-gamma book of the recovery, the macro tail is not
              re-grown on a single-leg fire, and BTC leads its risk cluster
              higher while the TradFi engine rolls over. The right read for the
              next 24h is <em>patient — the bid showed, now wait for SM to
              join it, not to fade it</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Verdict:</b> codex STAGE B returned PASS-WITH-NOTES — 0 CRITICAL,
            2 MAJOR, 2 MINOR — recorded in{' '}
            <code>audits/2026-07-19-desk-note.md</code>. No publish-gating factual
            break; v2 applies every finding, each grep-verified to zero stale
            matches across the full file before promotion.{' '}
            <b>DN-001 (MAJOR — live-flow window):</b> the 24h/4h/1h flow deltas
            now use the exact BJ 08:08→08:08 pin (live_db line 83139→84579).
            Patterns searched: <code>14,695</code> (24h spot CVD, 8 hits before /
            0 after → 14,756), <code>+1,251</code> (24h OI, 1/0 → +1,262 BTC),
            <code>1,024</code> (24h futures CVD, 1/0 → +1,062), <code>1,012</code>{' '}
            (24h taker-net, 1/0 → +1,057), 4h set{' '}
            <code>+0.39% / −117 / +227 / −726 / −740</code> (1/0 each →
            +0.47% / −106 / +290 / −695 / −695), 1h set{' '}
            <code>+0.11% / +351 / +340 / −166 / −176</code> (1/0 each →
            +0.15% / +353 / +325 / −131 / −131). RESOLVED. <b>DN-002 (MAJOR —
            macro gate OR/AND):</b> pattern <code>2.78% OR 10Y</code> /{' '}
            <code>OR 10Y</code> (1/0) — the put-spread re-grow gate is now stated
            as BOTH-legs-required (HY OAS &gt; 2.78% AND 10Y &gt; 4.53%),
            consistent with the &ldquo;both-legs confirmation&rdquo; level row and
            decision table. RESOLVED. <b>DN-003 (MINOR — P/C denominator):</b>{' '}
            pattern <code>279,697 call OI / 128,394 put</code> (1/0) → corrected
            to 128,394 put OI / 279,697 call OI (= 0.46). RESOLVED. <b>DN-004
            (MINOR — floor staleness):</b> pattern <code>hours-stale</code> (1/0)
            → replaced with &ldquo;last weekly recompute 2026-07-13T00:11:10Z;
            slow weekly level.&rdquo; RESOLVED. The ask-deepseek supplement
            (advisory, non-gating) was adjudicated: its OI-delta item duplicates
            DN-001 (fixed); its expiry-strip-sum item is not a defect — codex
            primary cleared the aggregate as the btc_gex HTML total (+194.2M), and
            the note never claims the listed strip sums to it; its $0.15 spot
            item is intentional rounding (header $64,839 rounds exact
            $64,838.85), disclosed. Snapshot provenance is in the manifest band;
            rolling-source artifacts (MTF, GEX, macro, cross-asset) are archived
            verbatim to{' '}
            <code>/opt/desk-note/snapshots/2026-07-19-0008/</code>. Overall: post
            codex hostile audit.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-07-19 00:08Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-07-18 22:16Z (~1.9h before
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
                The bid finally showed in the OI. But smart money is fading it,
                the rates gate closed, and the fast frames are overbought — so
                the scout waits for SM to join, not to fade. Patient.
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
            v2 · 2026-07-19 00:08Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
