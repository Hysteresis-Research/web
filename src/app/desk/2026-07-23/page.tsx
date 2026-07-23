import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-23 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-23',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-23' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260723() {
  await requireViewer('/desk/2026-07-23');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-23 · v2</span>
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
              <span className="dn-big">$65,634</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.81%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-23 05:18Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-23 05:18Z (snapshot pin · row t=&ldquo;07-23 13:18&rdquo; BJ)</td>
                  <td className="dn-flag">
                    fresh · 1-min · file tail at read time = pin · `t` field is
                    BJ-local (UTC+8); the 05:18Z anchor is BJ 13:18 07-23 · the live
                    tape keeps appending under-foot, so all windows are frozen to this
                    pinned row · 24h-window convention: headline 24h deltas use a
                    row-count window (baseline line 89210 t=&ldquo;07-22 13:19&rdquo;
                    through pin line 90650 t=&ldquo;07-23 13:18&rdquo;, 1,441 rows —
                    one extra because a duplicate CVD-reset row prints at 07-22 14:33),
                    giving spot −0.81% and OI −1.40% / −1,454.5 BTC · the exact
                    same-minute comparison (line 89209 t=&ldquo;07-22 13:18&rdquo; →
                    pin) would read spot −0.83% and OI −1.42% / −1,475.7 BTC — a
                    ~one-minute-baseline difference, disclosed
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · Beijing-header scan (in-progress bars)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · archived verbatim to
                    /opt/desk-note/snapshots/2026-07-23-0518/ · scan spot $65,608,
                    24h −0.95%, H/L $66,364 / $65,505, qVol $7.94B (candle-based, an
                    independent source from the live tape) · all closes provisional
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-23 05:00Z snapshot</td>
                  <td className="dn-flag">
                    archived to the 2026-07-23-0518 snapshot dir · ~18-min stale vs
                    the 05:18Z anchor · 842 instruments · Deribit idx $65,824 vs live
                    spot $65,634 ($190 above) · 23JUL 0.1DTE +4.17M settles at 08:00Z
                    today (~2.7h after snapshot) · aggregate read from the HTML
                    headline total (+261.9M / 1% move) · NOTE non-reconciling panel:
                    the by-expiry rollup sums to +283.46M (= gex_summary.json net_gex),
                    ~+21.56M above the headline — disclosed not resolved ·
                    de-gammaed from +294.6M on 07-22 but still the deepest
                    net-long-gamma band of the recovery
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-23 05:00Z
                  </td>
                  <td className="dn-flag">archived to 2026-07-23-0518 · 7d 1h bars · 22 assets · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-22 22:15Z render</td>
                  <td className="dn-flag">
                    archived to 2026-07-23-0518 · ~7h render lag vs the 05:18Z anchor
                    (fresher than the 07-22 note&rsquo;s 23h) · FRED Tier-1: 10Y
                    nominal 4.63% (+3bp), TIPS 2.37% EXTREME, HY OAS 2.69% (0bp), DXY
                    101.19, MOVE 76.3 (+5.43), Fed net liq $5.987T · Tier-3 CPI rows
                    monthly/stale
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-23 04:07Z</td>
                  <td className="dn-flag">
                    ~1.2h stale vs snapshot anchor (close $65,604.60) · offsets
                    recomputed vs live spot · matrix intentionally computed from the
                    btcusdt_1m_&#123;2024,2025,2026&#125;.parquet subset (1,345,208 min
                    / 935 daily / 134 weekly bars), distinct from the full 2019–2026
                    wildcard history · so W-SMA150 / W-SMA200 non-computable (134
                    weekly bars on file); the 200W cycle floor is a separate lineage
                    from ma200w_trap_watch_state.json, not this matrix
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle floor (weekly 200-SMA)</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · recomputed 2026-07-20 00:11Z</td>
                  <td className="dn-flag">
                    runbook&rsquo;s weekly_200sma.json is ABSENT this run · floor read
                    from the maintained trap-watch state = $63,078.14 (last completed
                    week 2026-07-19 close $64,694.70, 3 consecutive weekly closes
                    above, streak start 07-05) · ratio_pctile / last-event NOT
                    available (weekly_200sma.json is where those live) — not
                    fabricated · slow weekly level (an hours-stale read is fine)
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
              <span className="dn-v bear">−0.77%</span>
              <span className="dn-src">live · raw −0.000699 × 1095 = −0.77% ann (short-pay) · 24h mean +1.92% · cap occupancy 0 / 1441 sampled rows = 0.0% (no row within reach of the +10.95% Binance cap; 24h max +5.98%) · 368 negative rows (was 0 on 07-22, 41 on 07-19) — funding turned short-pay again in the back half of the 24h (first negative stretch since 07-19, not a first-ever) and held into the snap</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">flipped negative · range −2.08% / +5.98%</span>
              <span className="dn-src">the +10.95% cap has been empty since 07-19 · funding turned negative @ 2026-07-22 23:11Z and stayed short-pay through the pin · 24h mean +1.92% · the leverage book is flushing longs on the pullback, not crowding them</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−1.40% (−1,454.5 BTC)</span>
              <span className="dn-src">live · 103,956.6 → 102,502.0 BTC · second consecutive contraction (07-22 was −2.16%) — a deleveraging drawdown (SM covered −1,395.8 short, perp bought to close), NOT fresh demand lifting OI</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">55.79 / 44.21</span>
              <span className="dn-src">live_db `mkt_long_pct` · rose from 51.36 → 55.79 (+4.43pt) over 24h · 24h range 51.01 / 55.81 — near the 24h high (two bp off the 55.81 high), retail keeps chasing the reclaim into the pullback, and funding is now paying that crowded long rather than taxing it</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+6.53k (net LONG)</span>
              <span className="dn-src">live · long 14.99k − short 8.47k · SM has held net-long continuously since the 2026-07-21 06:36Z (BJ 14:36) cross · vs the 07-22 note&rsquo;s +6,655 that is Δ −127 (essentially flat) — the buyer of record stayed net long through a second down-print</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · 24h</span>
              <span className="dn-v bull">+3,480.9 → +6,528.2 (Δnet +3,047.4, build 87.5%)</span>
              <span className="dn-src">|Δ|/prior_net = 3,047.4 / 3,480.9 = 87.5% · Δlong +1,651.6 / Δshort −1,395.8 — longs added AND shorts covered, a two-sided net-long build off the 24h-open dip · bull re-stacks @ 2026-07-22 06:01Z (Δnet +2,273.6) and 10:51Z (Δnet +1,256.4)</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.9% / 31.50%</span>
              <span className="dn-src">GEX median IV · 842 inst · P/C 0.44 (put/call OI 134,062 / 304,617) · chain-median across N instruments, not a tradable spread · 30D close-to-close RV 31.50% (logret.std×√365×100, 30 returns, parquet last bar 04:07Z)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+6.19% (above)</span>
              <span className="dn-src">flip $61,808 · vs live spot $65,634.18 (+6.19%; 65,634.18/61,808 − 1 = 6.190%) / GEX file Deribit idx $65,824 (+6.50%; 65,824/61,808 − 1 = 6.497%) — both refs positive · aggregate +261.9M net-long-gamma (de-gammaed from +294.6M on 07-22, still the deepest band of the recovery)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                Second pullback, and the buyer of record held — smart money stayed
                net long through another down-print
              </span>. SM net is{' '}
              <span className="dn-tag bull">+6,528</span> (long 14,994 − short
              8,466), essentially flat on the 07-22 note&rsquo;s +6,655 (Δ −127) and
              still net long continuously since the{' '}
              <span className="dn-tag">2026-07-21 06:36Z (BJ 14:36)</span> cross; over
              the pinned 24h it built <span className="dn-tag bull">+3,047 net
              (Δlong +1,652 / Δshort −1,396, build 87.5%)</span> off the 24h-open dip
              with two bull re-stacks (BJ 14:01 Δnet +2,274, BJ 18:51 Δnet +1,256).{' '}
              <span className="dn-signal">
                But the confirming print the scout wants still has not come
              </span>: the 24h is a <span className="dn-tag bear">−0.81%</span>{' '}
              down-close (the second in a row), OI{' '}
              <span className="dn-tag bear">contracted −1.40% (−1,455 BTC)</span> for
              a second day rather than expanding, and — new vs 07-22 — funding{' '}
              <span className="dn-tag bear">turned short-pay again</span> (live −0.77%
              ann, 368 negative rows vs zero on 07-22 but 41 on 07-19, so a re-turn
              short-pay not a first-ever, from BJ 07:11 into the snap). The reclaim-long rates filter is still{' '}
              <span className="dn-tag bear">FALSE</span> — the 10Y refreshed to{' '}
              <span className="dn-tag bear">4.63%</span> (from 4.60% on 07-22), above
              the 4.55% gate. Price still holds the entry-validation cap, but the
              cushion thinned: spot{' '}
              <span className="dn-tag bull">$65,634 sits +0.77% above the D-EMA50
              $65,130</span> (was +1.28% on 07-22), on three completed daily closes
              above it (07-20 $65,225, 07-21 $66,522, 07-22 $66,082) plus the
              in-progress 07-23 bar ($65,605).{' '}
              <span className="dn-signal">
                So the scout stays ARMED but not live for a second print
              </span>: the hard leg (SM as the buyer of record) is in and holding, but
              the desk still needs a confirming up-close that holds the D-EMA50 with
              OI stabilizing — and a second down-close with OI bleeding and funding
              gone short-pay is the opposite of that. Against a chase: the dealer book
              de-gammaed to <span className="dn-tag bull">+261.9M</span> but is still
              deeply net-long-gamma with the expiry strip now{' '}
              <span className="dn-tag bull">wholly positive</span> (26JUL flipped to
              +0.28M) and heavy call walls at{' '}
              <span className="dn-tag">$70k +85.3M / $72k +57.5M</span> capping
              overhead. This note marks a leverage reset above a held floor: funding
              short-pay and OI bleeding are flushing the crowded long while SM carries
              the position — constructive housekeeping if the up-close follows, a
              warning if the D-EMA50 gives way first.
            </p>

            <p>
              BTC prints <span className="dn-tag">$65,634</span> live,{' '}
              <span className="dn-tag bear">−0.81%</span> on 24h — a second pullback
              day inside the recovery arc (spot is{' '}
              <span className="dn-tag bear">−0.45% below the 07-22 note&rsquo;s
              $65,930</span>), within a <span className="dn-tag">$66,358 /
              $65,567</span> range (high @ BJ 00:40 07-23 / UTC 16:40 07-22, low @ BJ
              21:25 07-22 / UTC 13:25 07-22). The tape topped early, faded to the
              $65,567 low, and chopped sideways into the snap.{' '}
              <span className="dn-signal">The cycle floor is settled and holding on
              the weekly closes that count</span>: the trap-watch W-SMA200 floor is{' '}
              <span className="dn-tag bull">$63,078</span>, the last completed weekly
              close (2026-07-19 $64,694.70) is the third consecutive weekly close
              above it (streak start 07-05), and spot sits{' '}
              <span className="dn-tag bull">+4.05% above the floor</span>. The MA
              matrix holds <span className="dn-em">four positive daily lines</span>{' '}
              — D-EMA50 $65,130 (+0.77%), D-EMA20 $64,357 (+1.98%), D-SMA20 $64,195
              (+2.24%), D-SMA50 $63,138 (+3.95%) — with the D-SMA50 shelf sitting
              almost exactly on the floor ($63,138 vs $63,078, a ~$60 support band).
              The first overhead line is{' '}
              <span className="dn-tag bear">D-EMA100 $67,988 (−3.46%)</span>, the
              working first target.{' '}
              <span className="dn-em">
                Read straight: nothing broke and nothing confirmed. Price still holds
                the cap and the settled floor, smart money is still the buyer of
                record, but the D-EMA50 cushion halved on a second down-close and the
                leverage book is venting (funding short-pay, OI −1.40%). The scout
                still lacks its one clean confirming print — an up-close with OI
                turning back up.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · SM held net-long through a second down-print (buyer of record stayed) · funding FLIPPED negative (short-pay) · OI contracting a second day · retail re-crowded near a 24h high · perp covered, spot offered into the snap</span>
            </h2>

            <p>
              <span className="dn-signal">
                The buyer of record stayed — smart money carried its net long through
                a second pullback rather than flipping back short
              </span>. SM net is <span className="dn-tag bull">+6,528</span> (long
              14,994 − short 8,466) vs the 07-22 note&rsquo;s +6,655 — Δ −127, a
              rounding-flat hold, not a fade. The net-long has been continuous since
              the <span className="dn-tag">2026-07-21 06:36Z (BJ 14:36)</span> cross
              (no row has printed net-short in the loaded window since). Over the
              pinned 24h window: Δnet{' '}
              <span className="dn-tag bull">+3,047.4</span> on Δlong{' '}
              <span className="dn-tag bull">+1,651.6</span> and Δshort{' '}
              <span className="dn-tag bull">−1,395.8</span> — longs added AND shorts
              covered, a two-sided net-long build (build fraction 87.5% =
              3,047.4 / 3,480.9, computed off the 24h-open dip of +3,480.9, not off
              yesterday&rsquo;s note pin). The discrete signatures were both{' '}
              <span className="dn-tag bull">bull re-stacks</span>: 2026-07-22 06:01Z
              (BJ 14:01) Δnet +2,273.6 (Δlong +723.2, Δshort −1,550.4 same minute, the
              same step the 07-22 note flagged) at spot $66,016, and 2026-07-22 10:51Z
              (BJ 18:51) Δnet +1,256.4 (Δlong +1,151.7, Δshort −104.7, a near-pure
              long-add) at spot $66,088. SM net 24h high{' '}
              <span className="dn-tag bull">+6,997.5 @ 2026-07-23 01:45Z (BJ
              09:45)</span>, low +3,208.6 @ 2026-07-22 05:36Z (BJ 13:36); short_btc
              bled to a 24h low <span className="dn-tag bull">8,121.8 @ 2026-07-22
              06:26Z (BJ 14:26)</span> and has ticked back to 8,466 into the snap. The
              position book is the one leg that keeps confirming — SM is long and
              holding.
            </p>

            <p>
              The leverage side is where the print turned.{' '}
              <span className="dn-signal">
                Funding turned short-pay again — the first sustained negative-funding
                stretch since the 07-19 print (the 07-19 note logged 41 negative rows;
                07-22 printed zero), not a first-ever of the recovery
              </span>: live <span className="dn-tag bear">−0.77% ann</span> (raw
              −0.000699 × 1095), 24h range{' '}
              <span className="dn-tag">−2.08% / +5.98%</span>, 24h mean{' '}
              <span className="dn-tag">+1.92%</span>, cap occupancy{' '}
              <span className="dn-tag bull">0 / 1441 sampled rows (0.0%)</span> but{' '}
              <span className="dn-tag bear">368 negative rows</span> (was 0 on 07-22,
              41 on 07-19) — funding crossed short-pay at 2026-07-22 23:11Z (BJ 07:11)
              and stayed negative into the pin. Shorts are now paying longs on the pullback: the
              crowded long that funding taxed at the cap two weeks ago is being{' '}
              <em>subsidized</em> here, a leverage-book flush rather than a crowd. OI
              Δ <span className="dn-tag bear">−1,454.5 BTC (−1.40%)</span> over 24h —{' '}
              <span className="dn-em">OI contracted for a second consecutive day</span>{' '}
              (103,957 → 102,502; 07-22 was −2.16%), deleveraging, not distribution:
              SM covered −1,396 short and the perp book bought to close (see windowed
              flow). Retail <span className="dn-tag bear">mkt_long_pct 55.79%</span>{' '}
              re-crowded up from 51.36% (+4.43pt, 24h range 51.01 / 55.81) —
              near the 24h high (two bp off the 55.81 high), retail keeps chasing the reclaim into the
              drawdown. Perp trades a{' '}
              <span className="dn-tag bear">−$49.17 discount</span> to spot at the snap
              (24h mean −$36.0, range −$100.5 / +$38.3 — basis dipped premium only
              briefly). 1-min aggressor skew snap{' '}
              <span className="dn-tag">+12.1</span> (1h mean −0.8, range −22.0 /
              +20.9) — balanced, no one-way pressure.{' '}
              <span className="dn-em">
                Funding short-pay + OI contracting a second day + retail crowded near a
                24h high: the leverage book is venting longs while retail adds and SM
                holds — the clean tell is still OI turning back up on an up-close, the
                sub-leg the scout has now waited two prints for.
              </span>
            </p>

            <p>
              Windowed flow is <em>a second short-covering pullback with spot now
              offered into the snap</em>. 24h: price{' '}
              <span className="dn-tag bear">−0.81%</span>, OI{' '}
              <span className="dn-tag bear">−1,455 BTC</span>, spot CVD{' '}
              <span className="dn-tag">Δ +2.9</span>{' '}
              <span className="dn-em">(reset-adjusted across the 2026-07-22 06:33Z /
              BJ 14:33 cb_cvd reset: pre-reset segment baseline 19,638.1 → 19,385.5 =
              −252.6, post-reset segment −0.2 → 255.3 = +255.5, sum +2.9; the
              post-reset baseline is the next full row after the discarded partial
              reset-row value 45.0, matching the duplicate-row handling in the
              manifest)</span> — flat spot — futures CVD{' '}
              <span className="dn-tag bull">Δ +1,852</span>, big-print{' '}
              <span className="dn-tag bull">+1,017 BTC / 921 prints</span>,
              taker-net <span className="dn-tag bull">+1,112</span> —{' '}
              <span className="dn-em">
                the perp/taker side bought over 24h while OI fell and spot stayed
                flat: that is short-covering (buy-to-close, OI down), consistent with
                SM covering −1,396 short, not fresh spot demand lifting price
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bear">−0.44%</span>, OI{' '}
              <span className="dn-tag bear">−461 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −424</span>, futures CVD{' '}
              <span className="dn-tag">Δ +32</span>, big-print{' '}
              <span className="dn-tag bear">−406 BTC / 111 prints</span>,
              taker-net <span className="dn-tag">+32</span> — spot offered, big prints
              leaning seller. 1h: price{' '}
              <span className="dn-tag bear">−0.03%</span>, OI{' '}
              <span className="dn-tag bear">−41 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −151</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −101</span>, big-print{' '}
              <span className="dn-tag bear">−119 BTC / 19 prints</span>,
              taker-net <span className="dn-tag bear">−101</span> —{' '}
              <em>spot offered into the snap (−151 spot CVD) with OI still
              shrinking</em>. This is the mirror of the 07-22 last hour, which turned
              bid (+530 spot CVD); today&rsquo;s last hour is heavy on spot — the
              demand step-in the scout wants did not repeat into this print.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · mid-frames hold golden crosses (8h/12h above cloud) · the 12h ⚡TD9 SELL cleared to Buy 1 · 3d/1w bottom-div cluster + 30m/1M ⚡TD9 BUY vs fast-frame death crosses · fast frames cooled deeper into the pullback (15m/30m/1h RSI ~39–40)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The mid-frames hold their golden crosses above cloud and the
                higher-TF bottom-div cluster persists, while the 12h exhaustion
                unwound
              </span>. The 8h carries a{' '}
              <span className="dn-tag bull">water-up golden cross 12b</span> (RSI
              55.5, above cloud 42b), the 12h a{' '}
              <span className="dn-tag bull">water-up golden cross 8b</span> (RSI 58.4,
              above cloud 18b) — and the 12h{' '}
              <span className="dn-tag bull">⚡ TD9 SELL from 07-22 has cleared to a TD
              Buy 1</span>, the near-frame exhaustion signal unwinding into the
              pullback. The higher-TF{' '}
              <span className="dn-tag bull">bottom-div cluster (3d / 1w BULL reg)</span>{' '}
              is intact with 3d and 1w both carrying water-down golden crosses (3d 4b,
              1w just printed), and the TD9 BUY count grew: both the{' '}
              <span className="dn-tag bull">30m and 1M print ⚡ TD9 BUY</span> this
              scan (30m is new alongside the persistent 1M). Against that, the fast
              frames cooled further into the drawdown — 15m RSI 39.2, 30m 39.8, 1h
              40.4 (below the 47–49 of 07-22, well below the 79 exhaustion of 07-19) —
              with water-up/-down death crosses on 15m (16b), 30m (7b), 1h (4b) and 4h
              (4b), and 15m/30m below cloud, 1h in cloud. Net read from the scan:{' '}
              <span className="dn-em">5/9 cycle-reversal regime (JT&lt;0),
              mean-reversion / bounce-favored</span>, overall 2 long / 2 short / 6
              neutral across 10 TFs.{' '}
              <span className="dn-em">
                The engine and mid-frames still confirm the recovery and the 12h
                exhaustion cleared; the slow frames remain below their heavy MAs (3d /
                1w below cloud); the fast-frame death crosses and sub-40 RSIs say this
                pullback still has room. Constructive but consolidating, one notch
                deeper than 07-22.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">65,608</td><td className="num">39.2</td><td className="neut">death (water-up) 16b</td><td className="bear">below ↑65.9k 16b</td><td>Buy 4</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">65,608</td><td className="num">39.8</td><td className="bear">death (water-dn) 7b</td><td className="bear">below ↑65.9k 9b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">65,608</td><td className="num">40.4</td><td className="bear">death (water-dn) 4b</td><td className="neut">in cloud 65.3–66.2k 11b</td><td>Buy 5</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">65,608</td><td className="num">51.9</td><td className="neut">death (water-up) 4b</td><td className="bull">above ↓63.9k 34b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">65,608</td><td className="num bull">55.5</td><td className="bull">golden (water-up) 12b</td><td className="bull">above ↓63.3k 42b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">65,608</td><td className="num bull">58.4</td><td className="bull">golden (water-up) 8b</td><td className="bull">above ↓62.5k 18b</td><td>Buy 1</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>1d</td><td className="num">65,608</td><td className="num bull">56.6</td><td className="neut">—</td><td className="neut">in cloud 63.3–70.2k 3b</td><td>Sell 4</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">65,608</td><td className="num">47.3</td><td className="bull">golden (water-dn) 4b</td><td className="bear">below ↑74.6k 17b</td><td>Sell 7</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">65,608</td><td className="num">41.0</td><td className="bull">golden (water-dn) 刚印 (just printed)</td><td className="bear">below ↑97.1k 25b</td><td>Sell 2</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">65,608</td><td className="num">44.6</td><td className="neut">—</td><td className="bull">above ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html Beijing-header scan (rolling latest
                    file; archived verbatim to
                    /opt/desk-note/snapshots/2026-07-23-0518/). Header alerts:{' '}
                    <em>higher-TF bottom-div cluster (3d/1w)</em>,{' '}
                    <em>⚡ TD9 BUY 30m · ⚡ TD9 BUY 1M</em>, overall 2 long / 2 short
                    / 6 neutral across 10 TFs, net read 5/9 cycle-reversal regime
                    (JT&lt;0) — mean-reversion / bounce-favored. Scan spot $65,608,
                    24h −0.95%, H/L $66,364 / $65,505, qVol $7.94B (candle-based; the
                    live tape at 05:18Z reads spot $65,634, 24h −0.81%, H/L $66,358 /
                    $65,567 — an independent source, not a conflict). Closes are
                    in-progress bars; treat every value as provisional until each TF
                    closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the cap is still held, with a thinner cushion.
              Spot $65,634 holds{' '}
              <span className="dn-em">four positive daily lines</span> in order of
              proximity: <span className="dn-tag bull">D-EMA50 $65,130
              (+0.77%)</span> — the reclaimed entry-validation cap, now nearest
              support and only +0.77% of cushion below spot (was +1.28% on 07-22) —{' '}
              <span className="dn-tag bull">D-EMA20 $64,357 (+1.98%)</span>,{' '}
              <span className="dn-tag bull">D-SMA20 $64,195 (+2.24%)</span>, and{' '}
              <span className="dn-tag bull">D-SMA50 $63,138 (+3.95%)</span>, which
              sits almost exactly on the{' '}
              <span className="dn-tag bull">W-SMA200 floor $63,078 (+4.05%)</span> — a
              ~$60 support shelf near $63,100. Overhead in order:{' '}
              <span className="dn-tag bear">D-EMA100 $67,988 (−3.46%)</span> (the
              working first target), <span className="dn-tag bear">D-SMA150 $69,823
              (−6.00%)</span>, <span className="dn-tag bear">W-SMA20 $69,850
              (−6.04%)</span>, <span className="dn-tag bear">D-SMA100 $70,009
              (−6.25%)</span>, <span className="dn-tag bear">W-EMA20 $70,058
              (−6.31%)</span>, <span className="dn-tag bear">D-EMA150 $70,944
              (−7.48%)</span>, <span className="dn-tag bear">D-SMA200 $72,566
              (−9.55%)</span>, <span className="dn-tag bear">W-EMA200 $72,933
              (−10.01%; seed)</span>, <span className="dn-tag bear">D-EMA200 $73,784
              (−11.05%)</span>. Far above and disused: W-EMA150 $76,759 (−14.49%;
              seed), W-EMA50 $79,016 (−16.94%), W-EMA100 $80,337 (−18.30%), W-SMA50
              $85,411 (−23.15%), W-SMA100 $88,501 (−25.84%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-23 04:07Z (close
                $65,604.60); offsets recomputed against live spot $65,634.18.
                Displayed MA levels are $-rounded; offsets computed from exact series
                values. The matrix is intentionally computed from the
                btcusdt_1m_&#123;2024,2025,2026&#125;.parquet subset (1,345,208 minutes
                / 935 daily / 134 weekly bars), distinct from the full 2019–2026
                wildcard history that the footer&rsquo;s glob would otherwise imply;
                the 200W cycle floor is a separate lineage from
                ma200w_trap_watch_state.json. W-SMA150 / W-SMA200 not computable —
                this subset holds 134 weekly bars, short of both windows; W-EMA150 and
                W-EMA200 seed from available history and are reported as such. Daily
                closes: 07-19 $64,694.70, 07-20 $65,224.80, 07-21 $66,522.40, 07-22
                $66,082.00, 07-23 (in-progress) $65,604.60 — three completed closes
                (07-20, 07-21, 07-22) plus the in-progress 07-23 bar above the D-EMA50
                cap $65,130, but the last two (07-22, 07-23) are down-closes.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DE-GAMMAed to +261.9M net-long-gamma (from +294.6M, still the deepest band of the recovery) · flip $61,808, spot +6.19% above · $70k/$72k call walls cap overhead · expiry strip now WHOLLY positive (26JUL flipped +0.28M) · 31JUL +158.35M dominates</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book eased a notch off its richest gamma but stays deeply
                net-long
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+261.9M / 1% move</span> (the GEX panel&rsquo;s
              headline total; from +294.6M on 07-22 — a −$32.7M de-gamma as spot bled
              toward the walls, still deeply net-long-gamma, dampening — dealers buy
              dips, sell rips){' '}
              <span className="dn-em">
                — source caveat: the panel&rsquo;s by-expiry rollup sums to +283.46M,
                ~+21.56M above this headline (see the strip below), a non-reconciling
                source panel; the aggregate is reported as the HTML headline
                +261.9M
              </span>. The 0-γ flip is{' '}
              <span className="dn-tag">$61,808</span>, and spot $65,634 sits{' '}
              <span className="dn-tag bull">+6.19% above flip</span> on
              spot-denominated math (65,634.18 / 61,808 − 1 = +6.190%); the GEX
              file&rsquo;s Deribit-index reference $65,824 ($190 above live spot) reads{' '}
              <span className="dn-tag bull">+6.50%</span> above the flip (65,824 /
              61,808 − 1 = +6.497%) — both references positive, spot well inside the
              positive-gamma field. The top gamma walls:{' '}
              <span className="dn-tag bull">$70k +85.30M</span> (heaviest, the
              overhead magnet/cap; 38,707 call OI),{' '}
              <span className="dn-tag bull">$72k +57.50M</span>,{' '}
              <span className="dn-tag bull">$66k +37.98M</span> (just overhead),{' '}
              <span className="dn-tag bull">$68k +25.11M</span>,{' '}
              <span className="dn-tag bull">$67k +24.94M</span>,{' '}
              <span className="dn-tag bull">$65k +16.66M</span> (just below spot),{' '}
              <span className="dn-tag bear">$60k −14.25M</span> (the lone negative
              wall — crash-put residual, 18,024 put OI),{' '}
              <span className="dn-tag bull">$80k +10.91M</span>,{' '}
              <span className="dn-tag bull">$69k +10.63M</span>,{' '}
              <span className="dn-tag bull">$71k +8.95M</span>.{' '}
              <span className="dn-em">
                Spot is bracketed by the $65k support wall below and the $66k–$68k
                positive band above, with the $70k/$72k calls the heavy overhead cap;
                the only negative gamma is the $60k crash-put residual, far below. This
                is a book that dampens both ways — it will fade a chase into the $70k
                call wall and bid a dip toward $65k / the flip
              </span>. The expiry strip is now{' '}
              <span className="dn-em">wholly positive</span> (the 26JUL −$0.18M
              negligible negative of 07-22 flipped to +0.28M): 23JUL 0.1DTE +4.17M
              (settles 08:00Z today), 24JUL 1.1 +48.99M, 25JUL 2.1 +1.84M, 26JUL 3.1
              +0.28M, 31JUL 8.1{' '}
              <span className="dn-tag bull">+158.35M</span> (dominant), 7AUG 15.1
              +32.82M, 28AUG 36.1 +23.21M, 25SEP 64.1 +6.72M, 25DEC 155.1 +5.31M,
              26MAR27 246.1 +1.21M, 25JUN27 337.1 +0.56M — no near-dated negative
              amplifier anywhere on the strip. No amplifier exists to fuel a fresh
              short.{' '}
              <span className="dn-em">
                Source-panel caveat: these by-expiry buckets sum to +283.46M (matching
                gex_summary.json net_gex $283,463,077), ~+21.56M / +8.2% above the GEX
                panel&rsquo;s +261.9M headline aggregate that this note reports. The
                headline total and the by-expiry rollup do NOT reconcile in the source
                panel — the divergence is disclosed, not resolved upstream; the note
                uses the HTML headline +261.9M as the aggregate and does not treat the
                strip composition as a self-contained reconciliation of it. Either
                figure is deeply net-long-gamma; the sign and dampening read are
                unchanged by the gap.
              </span>
            </p>

            <p>
              IV median across 842 instruments is{' '}
              <span className="dn-tag">42.9%</span> against 30D close-to-close RV of{' '}
              <span className="dn-tag">31.50%</span> — chain-level richness{' '}
              <span className="dn-tag">~+11.4pt</span>, put/call OI ratio{' '}
              <span className="dn-tag">0.44</span> (134,062 / 304,617 — call-heavy).
              A chain-median across N instruments,{' '}
              <span className="dn-em">not</span> a tradable spread;
              expiry-/strike-level vega, skew and term structure remain not loaded;
              the vol read stays framework-only. 842 instruments today (unchanged
              from 07-22). RV methodology: 30D close-to-close, logret.std × √365 × 100
              on the last 30 daily log returns (= 31 consecutive daily closes)
              anchored to parquet last bar 2026-07-23 04:07Z; the 31-return read is
              31.87%, the 30-return page value 31.50%.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · rates/dollar tight (10Y 4.63%, TIPS 2.37% EXTREME, DXY 101.19) vs credit/liquidity loose (HY OAS 2.69% RISK-ON, Fed net liq $5.987T EXTREME) · reclaim-long rates filter FALSE (10Y &gt; 4.55%, tightened to 4.63%) · MOVE +5.43 to 76.3 · cross-asset IDIOSYNCRATIC |r| 0.202 · BTC leads the equity/megacap cluster (+1.02% 7d vs NQ −1.87%, +2.89pt) but energy/metals outrun it (CL +11.61%, BRENT +9.99%, SILVER +4.29%)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape stays split — rates and the dollar tight, credit and
                liquidity loose — with the rates leg tightening a further 3bp against
                the scout and bond vol jumping
              </span>. Dashboard render is 2026-07-22 22:15Z, ~7h before the snapshot
              (fresher than the 07-22 note&rsquo;s 23h lag). US 10Y nominal{' '}
              <span className="dn-tag bear">4.63% (+3.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.25</span>, episodic z{' '}
              <span className="dn-tag">+1.80</span> — EXTREME RISK-OFF,{' '}
              <span className="dn-em">above the 4.55% reclaim-long gate</span> (was
              4.60% on 07-22 — a further 3bp tighter). 10Y TIPS real{' '}
              <span className="dn-tag bear">2.37% (+2.0bp)</span>, z{' '}
              <span className="dn-tag bear">+2.80</span> — EXTREME RISK-OFF. 5Y5Y BE
              inflation <span className="dn-tag">2.26% (+2.0bp)</span>. HY OAS{' '}
              <span className="dn-tag bull">2.69% (0.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.20</span>, episodic z{' '}
              <span className="dn-tag bull">−0.58</span> — RISK-ON, flat on the day
              and still <span className="dn-em">9bp shy</span> of its 2.78%
              put-spread re-grow gate. MOVE bond vol{' '}
              <span className="dn-tag bear">76.3 (+5.43)</span> — jumped, but still in
              the neutral band. DXY{' '}
              <span className="dn-tag bear">101.19 (+0.20)</span>, regime z{' '}
              <span className="dn-tag bear">+2.14</span> — EXTREME RISK-OFF. Fed net
              liquidity{' '}
              <span className="dn-tag bull">$5.987T (+0.025T)</span>, regime z{' '}
              <span className="dn-tag bull">+2.34</span> — EXTREME RISK-ON. USD/JPY{' '}
              <span className="dn-tag">163.19 (+0.70)</span>; US-JP 10Y spread{' '}
              <span className="dn-tag">1.96% (+3.0bp)</span> — tight. NFCI −0.552
              (RISK-ON, fresher weekly print).{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) is FALSE at 4.63%
                and tightened a further 3bp — a live scout headwind, but with SM still
                the buyer of record the desk&rsquo;s read stands: the rates filter is a
                caveat that argues for small size, not a hard block. The put-spread
                re-grow gate is two legs, BOTH required — the 10Y leg fires (4.63% &gt;
                4.53%) but HY OAS 2.69% is 9bp shy of 2.78%, so the single rates leg is
                not a hedge trigger. Rates/dollar tight, credit/liquidity loose: the
                macro cross-current that has framed the whole recovery.
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
                <tr><td>US 10Y nominal</td><td className="num">4.63%</td><td className="num bear">+3.0bp</td><td className="num bear">+2.25</td><td className="num">+1.80</td><td className="bear">tight · EXTREME RISK-OFF</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.37%</td><td className="num bear">+2.0bp</td><td className="num bear">+2.80</td><td className="num">+1.67</td><td className="bear">tight · EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.26%</td><td className="num">+2.0bp</td><td className="num">+0.49</td><td className="num">+2.33</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.69%</td><td className="num">0.0bp</td><td className="num bull">−1.20</td><td className="num bull">−0.58</td><td className="bull">loose · RISK-ON · 9bp from gate</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.552</td><td className="num">−0.01</td><td className="num bull">−1.51</td><td className="num bull">−1.71</td><td className="bull">loose · RISK-ON</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">76.3</td><td className="num bear">+5.43</td><td className="num">+0.24</td><td className="num">+1.63</td><td className="neut">neutral · jumped</td></tr>
                <tr><td>DXY</td><td className="num">101.19</td><td className="num bear">+0.20</td><td className="num bear">+2.14</td><td className="num">+0.74</td><td className="bear">firm · EXTREME RISK-OFF</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.987T</td><td className="num bull">+0.025T</td><td className="num bull">+2.34</td><td className="num bull">+2.42</td><td className="bull">EXTREME RISK-ON</td></tr>
                <tr><td>USD/JPY</td><td className="num">163.19</td><td className="num">+0.70</td><td className="num bear">+1.65</td><td className="num">+1.74</td><td className="neut">yen softer</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.96%</td><td className="num bear">+3.0bp</td><td className="num">−0.53</td><td className="num">+1.80</td><td className="bear">tight</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 05:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.202</span>{' '}
              (basically unchanged from 0.200 on 07-22 — still deep in the{' '}
              <span className="dn-em">IDIOSYNCRATIC</span> band, below the 0.25
              threshold). BTC&rsquo;s listed ties: NQ{' '}
              <span className="dn-tag">+0.521</span> (top), SP500{' '}
              <span className="dn-tag">+0.437</span>, SILVER{' '}
              <span className="dn-tag">+0.379</span>, COPPER{' '}
              <span className="dn-tag">+0.363</span>, PLAT{' '}
              <span className="dn-tag">+0.357</span>, NVDA{' '}
              <span className="dn-tag">+0.324</span>, GOLD{' '}
              <span className="dn-tag">+0.324</span>, TSLA{' '}
              <span className="dn-tag">+0.321</span>, JP225{' '}
              <span className="dn-tag">+0.300</span>. 7d performance is again the loud
              line, but the ranking is narrower than an unqualified &ldquo;RS
              leader&rdquo; call: <span className="dn-tag bull">BTC +1.02%</span> leads
              the <span className="dn-em">equity / megacap risk cluster</span> — NQ{' '}
              <span className="dn-tag bear">−1.87%</span>, SP500{' '}
              <span className="dn-tag bear">−1.09%</span>, JP225{' '}
              <span className="dn-tag bear">−0.29%</span>, and the megacaps hard down
              (GOOGL <span className="dn-tag bear">−10.87%</span>, TSLA{' '}
              <span className="dn-tag bear">−9.49%</span>, META{' '}
              <span className="dn-tag bear">−8.81%</span>, AMZN{' '}
              <span className="dn-tag bear">−5.48%</span>, MSFT{' '}
              <span className="dn-tag bear">−2.13%</span>, AAPL{' '}
              <span className="dn-tag bear">−0.59%</span>), NVDA{' '}
              <span className="dn-tag bull">+0.34%</span> the lone green big-tech —{' '}
              <span className="dn-em">
                but it is NOT the top of the 22-asset strip
              </span>: energy and most metals outran BTC on 7d (CL{' '}
              <span className="dn-tag bull">+11.61%</span>, BRENT{' '}
              <span className="dn-tag bull">+9.99%</span>, SILVER{' '}
              <span className="dn-tag bull">+4.29%</span>, GOLD{' '}
              <span className="dn-tag bull">+2.28%</span>, NGAS{' '}
              <span className="dn-tag bull">+2.25%</span>, COPPER{' '}
              <span className="dn-tag bull">+1.98%</span>, URNM{' '}
              <span className="dn-tag bull">+1.35%</span>), PLAT{' '}
              <span className="dn-tag bear">−0.56%</span> the lone red metal.{' '}
              <span className="dn-em">
                So the defensible claim is narrow: BTC leads the equity/megacap risk
                cluster by +2.89pt vs NQ (+1.02% vs −1.87%) against a TradFi equity
                complex that is broadly selling off — the endogenous-to-crypto read
                that has powered the recovery is intact vs stocks — but BTC is NOT the
                relative-strength leader of the full cross-asset strip; the energy and
                metals complexes outperformed it. This is a stocks-relative tell, not
                an unqualified RS input, and is not used as a stand-alone trade-book
                reason. Correlations sit idiosyncratic, so the macro cross-current
                bites less on price than on the trade framework&rsquo;s rates gate
              </span>. JGB monthly 2.67% carries an EXTREME RISK-OFF monthly tag — do
              not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · scout stays ARMED (SM held net-long, cap still held, but the confirming up-close still missing on a second down-print) · short STOOD DOWN (deepest positive-gamma, wholly-positive strip, no amplifier) · put-spread not re-grown (single 10Y leg) · book FLAT for the confirming up-close</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 07-22 note armed the scout on smart money joining the bid and said
                the long triggers &ldquo;on the confirming close, not on the
                pullback&rdquo; — the confirming close still has not come
              </span>. Smart money held its net long (+6,528 vs +6,655), price still
              holds the D-EMA50 cap, the floor is settled on the weekly close, the
              dealer book is deeply positive-gamma with a wholly-positive strip. The
              scout stays <span className="dn-em">ARMED</span>. But the trigger does
              not fire on <em>this</em> print either: the 24h is a second −0.81%
              down-close, OI contracted −1.40% for a second day, funding flipped
              negative (short-pay), and the reclaim-long rates filter is FALSE (10Y
              4.63%). The desk does not chase a second pullback into the $70k/$72k
              call-wall cap with the confirming sub-legs (OI turning up, an up-close)
              still not in — and now with the D-EMA50 cushion halved to +0.77%. The
              book today is: no shorts, scout ARMED but not live, no fresh hedge — go
              long 0.2R on the first confirming up-close that holds the D-EMA50
              $65,130 with OI stabilizing (Δ24h OI ≥ 0), stop the settled floor
              $63,078.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · ARMED · SM-confirmation leg still TRUE · awaiting a confirming up-close (second print without it)</span>
              <div className="dn-trade-name">
                Reclaim-long scout — stays armed: SM held net long (+6,528) and price still holds the D-EMA50 cap, but a second down-close with OI contracting and funding gone short-pay is the opposite of the confirming print the trigger needs
              </div>
              <div className="dn-thesis">
                The scout is gated on two hard legs plus a confirming print: (1) price
                holding the D-EMA50 entry-validation cap on a close basis, and (2) SM
                confirming as the buyer of record, ideally net long — both TRUE and
                holding — with the go-live gate a confirming UP-close that keeps OI
                stabilizing, and the 10Y rates filter a headwind not a block. Leg 1 is
                in but thinning — three completed daily closes above the D-EMA50 (07-20
                $65,225, 07-21 $66,522, 07-22 $66,082) yet the last two are
                down-closes and spot is now only +0.77% above the cap (was +1.28% on
                07-22). Leg 2 is in and holding — SM stayed net long (+6,528, Δ −127
                vs the 07-22 note) rather than fading. What is still missing, for a
                second print, is the confirming close: the 24h is a −0.81% pullback
                with OI contracting −1.40%, funding is short-pay, and the last hour
                turned spot-offered (−151 spot CVD), so the &ldquo;OI expanding on an
                up-close&rdquo; sub-leg has now failed to print twice. The scout is
                therefore ARMED, not live — the desk goes long on the first up-close
                that reclaims the pullback with OI stabilizing, sizing small into a
                deeply positive-gamma book that caps the upside at the $70k call wall.
                The funding flush and OI vent are constructive housekeeping <em>if</em>{' '}
                the up-close follows; the fresh watch is the D-EMA50 itself.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">trigger (go-live)</span><span className="dn-lvl-v bull">next daily close &gt; D-EMA50 $65,130 that is an UP-close (24h ≥ 0) AND OI stabilizing (Δ24h OI ≥ 0) — the SM-confirmation and cap-reclaim legs are already TRUE; the remaining gate is a confirming print, not a fresh structural condition</span></div>
                <div><span className="dn-lvl-k">disarm watch (new)</span><span className="dn-lvl-v bear">a third daily close BELOW the D-EMA50 $65,130 would break the cap-reclaim leg and move the scout back toward DEFERRED — the cushion has halved to +0.77% on two down-closes</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on trigger print, scout long 0.2R · SM is net long, the floor is settled, the dealer book dampens the downside toward the flip</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1h close &lt; $63,078 (W-SMA200 settled cycle floor / D-SMA50 $63,138 shelf — a close below ends the reclaim read)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$67,988 (D-EMA100, first target) then $69,823 / $70,009 (D-SMA150 / D-SMA100) into the $70k +85.3M call wall</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · take half at D-EMA100; the $70k call wall is the structural cap on the runner</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> trigger ~$65,130 (D-EMA50), stop $63,078 (floor) =
                ~$2,052 risk; first target $67,988 = ~$2,858 reward ≈ 1.39:1 — in line
                with the 07-22 scout&rsquo;s 1.45:1 (slightly lower as the D-EMA50
                lifted toward spot). <b>Hard rule:</b> do NOT go live on this second
                pullback print — the SM leg holding is the reason the scout stays
                armed, but the framework wants OI to stop contracting and an up-close
                to confirm demand is stepping back in, not just shorts covering (the
                24h was perp buy-to-close on falling OI, spot CVD flat, last hour
                offered). The rates filter at 4.63% is a noted headwind that argues for
                the smaller 0.2R size; the fresh risk is the thinning D-EMA50 cushion,
                not the floor.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · STOOD DOWN · deepest positive-gamma band of the recovery (+261.9M) · wholly-positive strip · BTC leads the equity cluster · SM net long</span>
              <div className="dn-trade-name">
                Chase-short — stays stood down: shorting into a +261.9M positive-gamma book with SM net long and a wholly-positive expiry strip is fighting every structural line (BTC also leads the equity/megacap cluster, though energy/metals outrun it)
              </div>
              <div className="dn-thesis">
                The chase-short has been stood down across the recovery and is no less
                offside now. The dealer book eased a notch to +261.9M (from +294.6M)
                but stays the deepest net-long-gamma band of the recovery, the flip
                sits $3,826 below spot, the expiry strip is now wholly positive (the
                26JUL −$0.18M of 07-22 flipped to +0.28M) with no near-dated negative
                amplifier — the down-leg&rsquo;s fuel — SM is net long for a second
                print, and BTC leads the equity/megacap cluster (+1.02% 7d vs NQ
                −1.87%, though energy/metals outran it). A short here fights the dealer
                dampening and the SM long; BTC&rsquo;s stocks-relative strength is a
                secondary tell, not the core reason. The only re-arm is a structural
                break, not a fade of a funding-flush pullback.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">stood down · no position · positive-gamma book + SM long + wholly-positive strip all argue against a fade</span></div>
                <div><span className="dn-lvl-k">re-arm trigger (not active)</span><span className="dn-lvl-v bear">1d close &lt; $63,078 (W-SMA200 floor) AND a fresh near-dated NEGATIVE gamma chunk appearing on the strip — neither present (the strip is wholly positive, dominated by 31JUL +158.4M)</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v bear">no short into the deepest positive-gamma band of the recovery with SM net long and BTC leading its equity risk cluster (a stocks-relative tell, not full-strip RS)</span></div>
              </div>
              <div className="dn-gating">
                <b>Gating:</b> the down-leg shorts worked because a large near-dated
                NEGATIVE gamma chunk amplified the move into expiry. No such chunk
                exists on this strip — it is wholly positive. Re-arming short requires
                the cycle floor to break outright ($63,078 on a daily close) AND a
                fresh negative amplifier to appear — a structural regime change, not a
                pullback-fade inside a positive-gamma field. Funding turning short-pay
                is a leverage flush, not a short signal.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — SINGLE leg fired (10Y), no fresh hedge</span>
              <div className="dn-trade-name">
                Downside put-spread — not re-grown: the 10Y leg fires (4.63% &gt; 4.53%) but HY OAS 2.69% is 9bp shy of its 2.78% gate; a single-leg fire is not the both-legs confirmation a fresh hedge needs
              </div>
              <div className="dn-thesis">
                The put-spread re-grow gate is two legs, BOTH required: HY OAS &gt;
                2.78% AND 10Y &gt; 4.53%. This render fires only the 10Y leg (4.63%,
                tightened a further 3bp from 07-22&rsquo;s 4.60%) — but the HY OAS leg
                sits 9bp shy at 2.69% (RISK-ON, flat on the day), no closer to the gate
                than on 07-22. Credit is not confirming the rates stress. The desk does
                not pay premium to re-grow a downside tail into a +261.9M
                positive-gamma book with SM net long and BTC leading the equity/megacap
                cluster — a fresh put-spread would fight the dealer dampening (BTC&rsquo;s
                stocks-relative strength is a secondary tell here, not the driver). The reclaim-long rates filter being FALSE at 4.63% is noted
                as a scout headwind above, not as a hedge trigger here. No fresh hedge.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · not re-grown · single 10Y leg fired, HY OAS leg 9bp shy</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (both-legs required)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.69%, 9bp to fire) to JOIN the already-fired 10Y &gt; 4.53% (4.63%) — a both-legs confirmation, not a single rates leg</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bear">10Y &lt; 4.55% close — FALSE at 4.63% (tightened a further 3bp from 4.60%); a scout-long headwind, not a hard block while SM holds the bid</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as
                levels drift, not backtested breakpoints. A fresh hedge on the single
                rates leg would be a put-spread rolled to 24JUL 1.1 DTE or 31JUL 8.1
                DTE — but both strips are net-long-gamma, so a fresh tail would carry
                no amplifier tailwind and would fight the recovery rather than ride it.
                The desk waits for the HY OAS leg to join before re-growing, or for the
                cycle floor to break outright.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · SM held the bid (the scout&rsquo;s hard leg stays TRUE) · price still holds the D-EMA50 cap but the cushion halved · funding flipped short-pay, OI contracting a second day · book FLAT for the confirming up-close · floor settled, dealer book deeply positive-gamma, rates filter the lone hard headwind</span>
            </h2>

            <p>
              Of the 07-22 decision conditions: the reclaim scout&rsquo;s
              SM-confirmation leg <span className="dn-em">stayed TRUE</span> — SM held
              net long (+6,528, Δ −127), the buyer of record did not fade; the D-EMA50
              cap-reclaim leg <span className="dn-em">stayed TRUE but thinned</span>{' '}
              (three completed closes above $65,130, cushion halved to +0.77% on two
              down-closes); the &ldquo;OI turns up on an up-close&rdquo; confirmation{' '}
              <span className="dn-em">did NOT fire</span> for a second print (OI
              −1.40%, funding short-pay); the reclaim-long rates filter stayed{' '}
              <span className="dn-em">FALSE</span> (10Y 4.63%, tightened a further
              3bp); the macro re-grow gate still fires ONE leg (10Y) with HY OAS 9bp
              shy; the chase-short re-arm <span className="dn-em">did NOT fire</span>{' '}
              (no floor break, no negative amplifier — the strip went wholly positive).{' '}
              <em>The hard leg the recovery waited on — smart money as the buyer of
              record — remains in and holding, so the scout stays armed; the remaining
              gate is still a confirming up-close with OI stabilizing, and a second
              down-close with a venting leverage book is the opposite of it.</em>{' '}
              The conditions today re-set around an armed scout with a thinning cap
              cushion, a settled floor, a deeply positive-gamma dealer book, a
              venting leverage book, and a lone rates-filter headwind:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Reclaim-long scout (long) — ARMED, SM leg holding</td><td className="bull">next UP-close &gt; D-EMA50 $65,130 (24h ≥ 0) AND OI stabilizing (Δ24h OI ≥ 0) — SM net long +6,528 and cap-reclaim already TRUE</td><td>scout long 0.2R, target $67,988 (D-EMA100) then $69,823 / $70,009; stop $63,078</td></tr>
                <tr><td>OI-turns-up confirmation (the missing sub-leg, 2nd print)</td><td className="bear">Δ24h OI ≥ 0 with an up-close — currently OI −1.40% on a second pullback, funding short-pay</td><td>this is the trigger&rsquo;s remaining gate; a covering-only pullback (perp buy-to-close on falling OI, funding negative) is not the fresh-demand confirmation the scout wants</td></tr>
                <tr><td>D-EMA50 cap-reclaim (thinning — new disarm watch)</td><td className="bear">a third daily close &lt; D-EMA50 $65,130 (cushion halved to +0.77% on two down-closes)</td><td>breaks the cap-reclaim leg and moves the scout back toward DEFERRED — the fresh risk above the floor</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">10Y &lt; 4.55% close — FALSE at 4.63% (tightened a further 3bp from 4.60%)</td><td>scout headwind, not a hard block while SM holds the bid; argues for the smaller 0.2R size</td></tr>
                <tr><td>Cycle floor lost (reclaim read ends)</td><td className="bear">1d close &lt; $63,078 (W-SMA200 / D-SMA50 $63,138 shelf)</td><td>ends the reclaim thesis; separate reassessment — the settled weekly-close floor breaks</td></tr>
                <tr><td>Chase-short re-arm (not active)</td><td className="bear">1d close &lt; $63,078 AND a fresh near-dated NEGATIVE gamma chunk on the strip — neither present</td><td>the strip is wholly positive (31JUL +158.4M dominant); no fade into a +261.9M positive-gamma book with SM long</td></tr>
                <tr><td>Macro tail re-grow (single leg fired)</td><td className="bear">HY OAS &gt; 2.78% (9bp to fire) to JOIN 10Y &gt; 4.53% (4.63%, already fired)</td><td>re-grow only on the both-legs confirmation; a single rates leg into a positive-gamma strip is not a hedge trigger</td></tr>
                <tr><td>Dealer book stays positive-gamma</td><td className="bull">aggregate GEX stays positive (no fresh near-dated negative chunk added inside the 23JUL/24JUL/31JUL strip)</td><td>the downside stays dampened toward the flip $61,808; the $70k/$72k call walls cap a chase — favors the small scout over a runner</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the second pullback resolves into a confirming up-close that
                holds the D-EMA50 $65,130 with OI turning back up — which triggers the
                first live long of the recovery — or whether a third down-print closes
                below the D-EMA50 and moves the scout back toward deferred, or below
                the settled floor $63,078 and ends the reclaim read. Smart money has
                held the bid through two down-closes, the floor is settled, and the
                dealer book dampens the downside; what is missing is still one clean
                confirming print, not another structural condition
              </span>. Until then this note runs as written: the scout is ARMED (SM leg
              holding, cap still held) but not live for a second print, the chase-short
              is stood down into the deepest positive-gamma band of the recovery, and
              the put-spread is not re-grown on a single-leg rates fire. The macro tape
              stays split (rates/dollar tight, credit/liquidity loose), BTC leads the
              equity/megacap cluster by +2.89pt on 7d (vs NQ, though energy/metals
              outrun it), and the mid-frames hold their golden
              crosses above cloud with the 12h exhaustion cleared. The right read for
              the next print is <em>armed and patient — the buyer of record is still
              holding; the long triggers on the confirming close, and the fresh watch
              is the D-EMA50 the leverage flush is testing</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit
            </span>
            <b>Status:</b> v2 EN, promoted from v1 after the STAGE B codex
            hostile-but-fair cross-model audit (verdict BLOCK-CRITICAL: 2 CRITICAL + 1
            MAJOR + 4 MINOR + 1 NIT). Findings folded in per STAGE C; audit record at
            audits/2026-07-23-desk-note.md. Each finding was closed with a grep sweep
            of the full EN file for the wrong-claim pattern and all semantic variants —
            pattern searched · hits-before · hits-after (carrying the pre-fix meaning) ·
            resolution:{' '}
            <b>DN-001 (CRITICAL, RS-leader overclaim):</b> patterns &ldquo;RS leader /
            relative-strength leader / leads a red TradFi tape / outrunning the macro
            tape / own RS&rdquo; — hits-before 8 (roman, cross-asset prose ×3, short
            chip/name/thesis, put-spread thesis, decision prose) — hits-after 0 (every
            instance narrowed to &ldquo;BTC leads the equity/megacap cluster by +2.89pt
            vs NQ, but energy/metals — CL +11.61%, BRENT +9.99%, SILVER +4.29% —
            outran it; not full-strip RS, not a stand-alone trade input&rdquo;; the one
            residual match at the cross-asset em-block is the corrected negated claim
            &ldquo;NOT the relative-strength leader of the full strip&rdquo;) —
            RESOLVED.{' '}
            <b>DN-002 (CRITICAL, funding &ldquo;first-ever&rdquo; false):</b> patterns
            &ldquo;first time of the recovery lineage / flipped negative for the first /
            first-ever&rdquo; — hits-before 1 superlative (+ 3 plain &ldquo;flipped
            negative&rdquo; framings) — hits-after 0 stale (reframed to &ldquo;first
            sustained negative-funding stretch since 07-19&rdquo;, citing the 07-19 note&rsquo;s
            41 negative rows vs 07-22&rsquo;s zero; all remaining mentions carry &ldquo;not a
            first-ever&rdquo;) — RESOLVED.{' '}
            <b>DN-003 (MAJOR, GEX aggregate vs strip non-reconciling):</b> pattern
            &ldquo;+261.9M / strip self-contained&rdquo; — the panel headline +261.9M
            and the by-expiry rollup +283.46M (= gex_summary.json net_gex
            $283,463,077, ~+21.56M / +8.2% apart) now carry an explicit
            non-reconciling-source caveat at all three loci (manifest GEX row,
            dealer-map aggregate statement, strip paragraph); the strip is no longer
            called a self-contained reconciliation — hits-after 0 uncaveated —
            RESOLVED.{' '}
            <b>DN-004 (MINOR, stale macro z-cells):</b> pattern &ldquo;TIPS episodic
            +1.53 / 5Y5Y episodic +2.00 / US-JP −0.62 / +1.47&rdquo; — corrected to the
            render values TIPS +1.67, 5Y5Y +2.33, US-JP −0.53 / +1.80; all other macro
            z-cells re-checked against macro_dashboard.html and match — hits-after 0 —
            RESOLVED.{' '}
            <b>DN-005 (MINOR, retail delta residue / 24h-high overstatement):</b>
            patterns &ldquo;+4.27 / sitting at the 24h high / re-crowded to a 24h
            high&rdquo; — the +4.27 residue deleted (delta is +4.43pt), and every
            &ldquo;at the 24h high&rdquo; changed to &ldquo;near the 24h high (two bp
            off the 55.81 high)&rdquo; across meta, prose, roman and the em-block —
            hits-after 0 — RESOLVED.{' '}
            <b>DN-006 (MINOR, undisclosed 24h window convention):</b> the manifest
            live-tape row now states the row-count baseline (line 89210 &rarr; pin
            90650, 1,441 rows, duplicate 07-22 14:33 reset row) giving −0.81% / −1.40%,
            and the exact same-minute read (−0.83% / −1.42%) — RESOLVED.{' '}
            <b>DN-007 (MINOR, spot-CVD reset arithmetic):</b> the reset-adjusted spot
            CVD now shows the explicit segment formula (pre-reset 19,638.1 &rarr;
            19,385.5 = −252.6; post-reset −0.2 &rarr; 255.3 = +255.5; sum +2.9) with
            the post-reset baseline = the next full row after the discarded partial
            reset-row 45.0; displayed value corrected +2.7 &rarr; +2.9 — RESOLVED.{' '}
            <b>DN-008 (NIT, &ldquo;overhead&rdquo; for a below-spot line):</b> D-EMA50
            &ldquo;+0.77% overhead&rdquo; changed to &ldquo;+0.77% of cushion below
            spot&rdquo; — RESOLVED.{' '}
            <b>ask-deepseek second-audit adjudicated (not auto-applied, per runbook):</b>{' '}
            SM Δnet +3,047.4 and build fraction 87.5% recompute correct from precise
            tape values (3,047.374 / 3,480.853 = 0.87547 &rarr; 87.5% at one decimal;
            deepseek&rsquo;s 87.55% / 3,047.3 use rounded intermediates), D-SMA50 +3.95%
            matches the exact series (the $63,138 level is $-rounded), and the SM-net /
            OI cross-block figures (+6.53k vs +6,528; −1,454.5 vs −1,455) are
            rounding-granularity displays of the same codex-verified values (long
            14,994.5, short 8,466.3, net 6,528.2, OI Δ −1,454.5) — no change warranted.
            Overall: <b>post codex hostile audit</b> — every CRITICAL, MAJOR and MINOR
            finding grep-verified hits-after = 0; <code>tsc --noEmit</code> exits 0.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-07-23 05:18Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-07-22 22:15Z (~7h before
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
                Second pullback, and smart money held the bid — but the confirming
                up-close still hasn&rsquo;t come, funding flipped short-pay, and the
                cap cushion halved. Scout stays armed. Patient.
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
            v2 · 2026-07-23 05:55Z · 05:18Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_&#123;2024,2025,2026&#125;.parquet
            (MA matrix subset) · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
