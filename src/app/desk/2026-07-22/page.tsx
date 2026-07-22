import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-22 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-22',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-22' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260722() {
  await requireViewer('/desk/2026-07-22');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-22 · v2</span>
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
              <span className="dn-big">$65,930</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.70%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-22 21:14Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-22 21:14Z (snapshot pin · row t=&ldquo;07-23 05:14&rdquo; BJ)</td>
                  <td className="dn-flag">
                    fresh · 1-min · file tail at read time = pin · OFF-CADENCE run
                    — this snapshot lands 21:14Z, not the usual 00:05Z daily anchor
                    (the note is authored ~21h into the UTC day) · `t` field is
                    BJ-local (UTC+8); the 21:14Z anchor is BJ 05:14 07-23 · the live
                    tape keeps appending under-foot, so all windows are frozen to
                    this pinned row
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · Beijing-header scan (in-progress bars)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · archived verbatim to
                    /opt/desk-note/snapshots/2026-07-22-2114/ · scan spot $65,895,
                    24h −0.65%, H/L $66,711 / $65,505, qVol $7.81B (candle-based, an
                    independent source from the live tape) · all closes provisional
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-22 21:01Z snapshot</td>
                  <td className="dn-flag">
                    archived to the 2026-07-22-2114 snapshot dir · 842 instruments ·
                    Deribit idx $66,185 vs live spot $65,930 ($255 above) · 23JUL
                    0.5DTE +9.20M settles at 08:00Z tomorrow (~11h after snapshot) ·
                    aggregate read from the HTML total (+294.6M / 1% move), the
                    deepest net-long-gamma of the recovery
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-22 21:01Z
                  </td>
                  <td className="dn-flag">archived to 2026-07-22-2114 · 7d 1h bars · 22 assets · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-21 22:16Z render</td>
                  <td className="dn-flag">
                    archived to 2026-07-22-2114 · ~23h render lag (notably stale vs
                    the 21:14Z anchor — no fresher FRED render on file) · FRED Tier-1:
                    10Y nominal 4.60% (+5bp), TIPS 2.35% EXTREME, HY OAS 2.69%
                    (−4bp), DXY 101.19, MOVE 72.7, Fed net liq $5.987T · Tier-3 CPI
                    rows monthly/stale
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-22 20:06Z</td>
                  <td className="dn-flag">
                    ~1.1h stale vs snapshot anchor (close $65,790.90) · offsets
                    recomputed vs live spot · matrix intentionally computed from the
                    btcusdt_1m_&#123;2024,2025,2026&#125;.parquet subset (1,344,727 min
                    / 934 daily / 134 weekly bars), distinct from the full 2019–2026
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
              <span className="dn-v">+2.76%</span>
              <span className="dn-src">live · raw 0.002524 × 1095 = +2.76% ann · 24h mean +3.31% · cap occupancy 0 / 1442 sampled rows = 0.0% (no row within reach of the +10.95% Binance cap; 24h max +5.98% ann) · 0 negative rows — funding stayed mildly positive all 24h</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">off the cap · range +1.24% / +5.98%</span>
              <span className="dn-src">the +10.95% cap has been empty since 07-19 · 24h mean +3.31% ann, a shallow, one-sided-but-mild positive · the leverage gate is fully open, no crowded-long tax being paid</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−2.16% (−2,260.8 BTC)</span>
              <span className="dn-src">live · 104,758.5 → 102,497.7 BTC · OI CONTRACTED on the −0.70% pullback — a deleveraging drawdown (SM short_btc fell −1,058.5, perp shorts bought to close), NOT fresh demand lifting OI (contrast 07-19&rsquo;s +1,262 demand-up leg)</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">54.72 / 45.28</span>
              <span className="dn-src">live_db `mkt_long_pct` · rose from 50.45 → 54.72 (+4.27pt) over 24h · 24h range 50.37 / 54.78 — retail re-crowded the long into the reclaim (the opposite of 07-19&rsquo;s −1.70pt bleed)</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+6.66k (net LONG)</span>
              <span className="dn-src">live · long 15.07k − short 8.42k · SM flipped net-long @ 2026-07-21 06:36Z (BJ 14:36) and has extended since — a ~+13.3k swing off the 07-19 note&rsquo;s −6.66k short · the leg the whole recovery waited for: smart money joined the bid</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · 24h</span>
              <span className="dn-v bull">+4,703.5 → +6,655.1 (Δnet +1,951.6, build 41.5%)</span>
              <span className="dn-src">|Δ|/prior_net = 1,951.6 / 4,703.5 = 41.5% · Δlong +893.1 / Δshort −1,058.5 — longs added AND shorts covered, a two-sided net-long build · bullish re-stack @ 2026-07-22 06:01Z (BJ 14:01): Δnet +2,273.6 (Δlong +723.2, Δshort −1,550.4)</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.6% / 32.45%</span>
              <span className="dn-src">GEX median IV · 842 inst · P/C 0.44 (put/call OI 133,816 / 304,057) · chain-median across N instruments, not a tradable spread · 30D close-to-close RV 32.45% (logret.std×√365×100, 30 returns, parquet last bar 20:06Z)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+6.74% (above)</span>
              <span className="dn-src">flip $61,765 · vs live spot $65,930.01 (+6.74%; 65,930.01/61,765 − 1 = 6.743%) / GEX file Deribit idx $66,185 (+7.16%; 66,185/61,765 − 1 = 7.156%) — both refs positive · aggregate +294.6M net-long-gamma, the deepest of the recovery (was +194.2M on 07-19)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                Smart money joined the bid — the single leg the whole recovery
                lineage was waiting for
              </span>. SM net flipped from the 07-19 note&rsquo;s{' '}
              <span className="dn-tag bear">−6,657 short</span> to{' '}
              <span className="dn-tag bull">+6,655 long</span> — a ~+13.3k swing —
              crossing net-long at{' '}
              <span className="dn-tag">2026-07-21 06:36Z (BJ 14:36)</span> and
              extending since; over the last 24h alone SM built{' '}
              <span className="dn-tag bull">+1,951.6 net (Δlong +893.1 / Δshort
              −1,058.5, build 41.5%)</span> with a bullish re-stack at BJ 14:01
              (Δnet +2,273.6: cover −1,550.4 short + add +723.2 long). Price has
              reclaimed the entry-validation cap: spot{' '}
              <span className="dn-tag bull">$65,930 sits +1.28% above the D-EMA50
              $65,099</span>, two completed daily closes above it (07-20
              $65,225, 07-21 $66,522) plus the in-progress 07-22 bar ($65,791).{' '}
              <span className="dn-signal">
                But this print is a pullback, and the scout&rsquo;s trigger is not
                clean on it
              </span>: the 24h is a <span className="dn-tag bear">−0.70%</span>{' '}
              down-close, OI <span className="dn-tag bear">contracted −2.16%
              (−2,261 BTC)</span> rather than expanding, and the reclaim-long rates
              filter is still <span className="dn-tag bear">FALSE</span> — the 10Y
              refreshed to <span className="dn-tag bear">4.60%</span> (from 4.57% on
              07-19), above the 4.55% gate. So the scout does not go live this
              print: it moves from <span className="dn-em">DEFERRED</span> (07-19,
              waiting on SM) to <span className="dn-em">ARMED</span> — the hard leg
              (SM joining the bid) has finally fired, and the desk goes long on the
              first confirming up-close that holds the D-EMA50 with OI stabilizing.
              Against a chase: the dealer book is the{' '}
              <span className="dn-tag bull">deepest net-long-gamma of the recovery
              (+294.6M)</span> with heavy call walls at{' '}
              <span className="dn-tag">$70k +95.4M / $72k +63.5M</span> capping
              overhead, so a rip is sold and a dip is bought — patience costs
              little here. This note marks the turn in the buyer of record: the
              covering short of 07-16 and the deferred demand of 07-19 have become
              a smart-money net long, and the trade book arms the first long of the
              recovery without yet pulling the trigger.
            </p>

            <p>
              BTC prints <span className="dn-tag">$65,930</span> live,{' '}
              <span className="dn-tag bear">−0.70%</span> on 24h — a pullback
              inside a rising three-day arc (spot is{' '}
              <span className="dn-tag bull">+1.68% above the 07-19 note&rsquo;s
              $64,839</span>), within a <span className="dn-tag">$66,723 /
              $65,567</span> range (high @ BJ 08:22 07-22 / UTC 00:22 07-22, low @
              BJ 21:25 07-22 / UTC 13:25 07-22). The push topped at{' '}
              <span className="dn-tag">$66,723</span> early in the window, faded to
              the <span className="dn-tag">$65,567</span> low, and recovered into
              the snap.{' '}
              <span className="dn-signal">The cycle floor is settled and holding on
              the weekly closes that count</span>: the trap-watch W-SMA200 floor is{' '}
              <span className="dn-tag bull">$63,078</span>, the last completed weekly
              close (2026-07-19 $64,694.70) is the third consecutive weekly close
              above it (streak start 07-05), and spot sits{' '}
              <span className="dn-tag bull">+4.52% above the floor</span>. The MA
              matrix holds <span className="dn-em">four positive daily lines</span>{' '}
              — D-EMA50 $65,099 (+1.28%), D-SMA20 $64,028 (+2.97%), D-EMA20 $64,198
              (+2.70%), D-SMA50 $63,102 (+4.48%) — with the D-SMA50 shelf sitting
              almost exactly on the floor ($63,102 vs $63,078, a ~$24 support
              band). The first overhead line is{' '}
              <span className="dn-tag bear">D-EMA100 $68,030 (−3.09%)</span>, the
              working first target.{' '}
              <span className="dn-em">
                Read straight: price has reclaimed the cap and holds it on a close
                basis, the floor is settled, and smart money is finally net long —
                the structure that was missing on 07-19 is in. The only thing the
                trigger lacks is a clean confirming print: an up-close with OI
                stabilizing, not a down-print pullback with OI bleeding.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · SM flipped net-long (buyer of record turned) · retail re-crowded the long · funding mild off the cap · OI contracting on the pullback · perp covered, spot turned bid into the snap</span>
            </h2>

            <p>
              <span className="dn-signal">
                The buyer of record has turned — smart money is net long for the
                first time of the recovery
              </span>. SM net is <span className="dn-tag bull">+6,655</span> (long
              15,072 − short 8,417) vs the 07-19 note&rsquo;s −6,657: the daily
              arc ran <span className="dn-tag">−6,657 (07-19) → −8,592 (07-20, a
              deeper short into weakness) → −891 (07-21, a ~7,260 short cover) →
              +3,998 (07-22, flipped long) → +6,655 (now)</span>. The net-long
              crossing printed <span className="dn-tag">2026-07-21 06:36Z (BJ
              14:36)</span> and has held and extended for a day and a half. Over
              the pinned 24h window: Δnet{' '}
              <span className="dn-tag bull">+1,951.6</span> on Δlong{' '}
              <span className="dn-tag bull">+893.1</span> and Δshort{' '}
              <span className="dn-tag bull">−1,058.5</span> — longs added AND shorts
              covered, a two-sided net-long build (build fraction 41.5% =
              1,951.6 / 4,703.5). The discrete signature was a{' '}
              <span className="dn-tag bull">re-stack at 2026-07-22 06:01Z (BJ
              14:01)</span>: Δnet +2,273.6 (Δlong +723.2, Δshort −1,550.4 same
              minute) at spot $66,016 — a bull-stack (cover + add) mirror of the
              hostile re-stacks that marked the down-leg. SM net 24h high{' '}
              <span className="dn-tag bull">+6,762.7 @ 2026-07-22 11:00Z (BJ
              19:00)</span>, low +3,208.6 @ 2026-07-22 05:36Z (BJ 13:36); short_btc
              bled to a 24h low <span className="dn-tag bull">8,121.8 @ 2026-07-22
              06:26Z (BJ 14:26)</span>. This is not a cover that pulled OI down (07-16) or a
              demand leg SM faded (07-19) — it is smart money carrying a net long.
            </p>

            <p>
              The leverage side is loose and quiet.{' '}
              <span className="dn-signal">
                Funding sits mild-positive well off the cap
              </span>: live <span className="dn-tag">+2.76% ann</span> (raw
              0.002524 × 1095), 24h range{' '}
              <span className="dn-tag">+1.24% / +5.98%</span>, 24h mean{' '}
              <span className="dn-tag">+3.31%</span>, cap occupancy{' '}
              <span className="dn-tag bull">0 / 1442 sampled rows (0.0%)</span> and{' '}
              <span className="dn-tag">0 negative rows</span> — a shallow, one-sided
              but un-taxing positive, the leverage gate fully open. But the demand
              quality is weaker than 07-19: OI Δ{' '}
              <span className="dn-tag bear">−2,260.8 BTC (−2.16%)</span> over 24h —{' '}
              <span className="dn-em">OI contracted on the pullback</span>{' '}
              (104,758 → 102,498), the opposite of the 07-19 demand-up leg
              (+1,262 BTC). The contraction is deleveraging, not distribution: SM
              covered −1,058 short and the perp book bought to close (see windowed
              flow). Retail <span className="dn-tag bear">mkt_long_pct 54.72%</span>{' '}
              re-crowded up from 50.45% (+4.27pt, 24h range 50.37 / 54.78) — retail
              is chasing the reclaim, the crowded-long side that funding is
              <em> not</em> yet taxing. Perp trades a{' '}
              <span className="dn-tag bear">−$39.66 discount</span> to spot at the
              snap (24h mean −$38.8, range −$100.5 / +$38.3 — basis dipped premium
              only briefly). 1-min aggressor skew snap{' '}
              <span className="dn-tag">−1.3</span> (1h mean +2.0, range −21.1 /
              +28.7) — balanced, no one-way pressure.{' '}
              <span className="dn-em">
                Funding off the cap + OI contracting + retail re-crowding: the
                leverage book let air out on the pullback while retail added — the
                clean tell would be OI turning back up on the next up-close, which
                is the sub-leg the scout still wants.
              </span>
            </p>

            <p>
              Windowed flow is <em>a 24h short-covering pullback with spot turning
              bid into the snap</em>. 24h: price{' '}
              <span className="dn-tag bear">−0.70%</span>, OI{' '}
              <span className="dn-tag bear">−2,261 BTC</span>, spot CVD{' '}
              <span className="dn-tag">Δ −26</span>{' '}
              <span className="dn-em">(reset-adjusted across the 2026-07-22 06:33Z
              cb_cvd reset 19,385.5 → 45.0)</span> — essentially flat spot — futures
              CVD <span className="dn-tag bull">Δ +2,887</span>, big-print{' '}
              <span className="dn-tag bull">+1,525 BTC / 956 prints</span>,
              taker-net <span className="dn-tag bull">+2,147</span> —{' '}
              <span className="dn-em">
                the perp/taker side bought over 24h while OI fell and spot stayed
                flat: that is short-covering (buy-to-close, OI down), consistent
                with SM covering −1,058 and flipping long, not fresh spot demand
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bear">−0.41%</span>, OI{' '}
              <span className="dn-tag bear">−595 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +387</span>, futures CVD{' '}
              <span className="dn-tag">Δ −68</span>, big-print{' '}
              <span className="dn-tag bear">−338 BTC / 107 prints</span>,
              taker-net <span className="dn-tag bear">−68</span> — a quiet offer,
              big prints leaning seller. 1h: price{' '}
              <span className="dn-tag bull">+0.09%</span>, OI{' '}
              <span className="dn-tag bear">−36 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +530</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +28</span>, big-print{' '}
              <span className="dn-tag bear">−63 BTC / 15 prints</span>,
              taker-net <span className="dn-tag bull">+28</span> —{' '}
              <em>spot turned bid into the snap (+530 spot CVD) with OI still
              slightly shrinking</em>. The most recent hour is the constructive
              tell — spot demand stepping in at the bottom of the pullback — but it
              is one hour, not a session.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · mid-frames hold golden crosses (8h/12h above cloud) · 3d/1w bottom-div cluster + 1M ⚡TD9 BUY vs a 12h ⚡TD9 SELL and fast-frame death crosses · fast frames cooled from the 07-19 RSI-79 exhaustion</span>
            </h2>

            <p>
              <span className="dn-signal">
                The mid-frames hold their golden crosses above cloud and the
                higher-TF bottom-div cluster persists
              </span>. The 8h carries a{' '}
              <span className="dn-tag bull">water-up golden cross 11b</span> (RSI
              58.3, above cloud 41b), the 12h a{' '}
              <span className="dn-tag bull">water-up golden cross 7b</span> (RSI
              61.4, above cloud 17b), and the 1w just printed a{' '}
              <span className="dn-tag bull">water-down golden cross (刚印 / just
              printed)</span> alongside a 3d water-down golden cross 4b — the
              higher-TF <span className="dn-tag bull">bottom-div cluster (3d / 1w
              BULL reg)</span> is intact and the 1M holds a persistent{' '}
              <span className="dn-tag bull">⚡ TD9 BUY</span> (RSI 44.8, above cloud
              29b). Against that, the near frames flash caution: a fresh{' '}
              <span className="dn-tag bear">12h ⚡ TD9 SELL</span> (but at RSI 61.4,
              nowhere near the 07-19 exhaustion), and water-up death crosses on
              15m (11b), 1h (28b) and 4h (fresh, 2b). The important contrast with
              07-19 is that the fast frames have{' '}
              <span className="dn-em">cooled</span>: 15m RSI 49.1, 30m 47.9, 1h 47.6
              (vs the 79.2 / 78.8 prints that flagged exhaustion on 07-19) — the
              overbought has fully unwound into this pullback, so the down-tilt on
              the fast frames is consolidation, not a blow-off rolling over. Net
              read from the scan: <span className="dn-em">higher-TF bearish · short
              bounce · bottom-div cluster 3d/1w</span>, a 5/9 trend-continuation
              regime (JT≥0).{' '}
              <span className="dn-em">
                The engine and mid-frames confirm the recovery; the slow frames
                are still below their heavy MAs (3d / 1w below cloud); the 12h
                TD9 SELL and fast-frame death crosses argue this pullback has room
                before the next up-leg. Constructive but consolidating.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">65,895</td><td className="num">49.1</td><td className="bear">death (water-up) 11b</td><td className="neut">in cloud 65.8–66.0k 7b</td><td>Buy 2</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">65,895</td><td className="num">47.9</td><td className="bull">golden (water-dn) 12b</td><td className="bear">below ↑66.1k 8b</td><td>Sell 3</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">65,895</td><td className="num">47.6</td><td className="bear">death (water-up) 28b</td><td className="neut">in cloud 65.3–66.2k 3b</td><td>Buy 3</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">65,898</td><td className="num">57.0</td><td className="bear">death (water-up) 2b</td><td className="bull">above ↓63.7k 32b</td><td>Sell 1</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">65,895</td><td className="num bull">58.3</td><td className="bull">golden (water-up) 11b</td><td className="bull">above ↓63.1k 41b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">65,895</td><td className="num bull">61.4</td><td className="bull">golden (water-up) 7b</td><td className="bull">above ↓62.5k 17b</td><td>⚡ TD9 SELL</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>1d</td><td className="num">65,895</td><td className="num bull">58.2</td><td className="neut">—</td><td className="neut">in cloud 63.9–70.4k 2b</td><td>Sell 3</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">65,895</td><td className="num">47.9</td><td className="bull">golden (water-dn) 4b</td><td className="bear">below ↑74.6k 17b</td><td>Sell 7</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">65,895</td><td className="num">41.4</td><td className="bull">golden (water-dn) 刚印 (just printed)</td><td className="bear">below ↑97.1k 25b</td><td>Sell 2</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">65,895</td><td className="num">44.8</td><td className="neut">—</td><td className="bull">above ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html Beijing-header scan (rolling latest
                    file; archived verbatim to
                    /opt/desk-note/snapshots/2026-07-22-2114/). Header alerts:{' '}
                    <em>higher-TF bottom-div cluster (3d/1w)</em>,{' '}
                    <em>⚡ TD9 SELL 12h · ⚡ TD9 BUY 1M</em>, overall 3 long / 2 short
                    / 5 neutral across 10 TFs, net read higher-TF bearish · short
                    bounce. Scan spot $65,895, 24h −0.65%, H/L $66,711 / $65,505,
                    qVol $7.81B (candle-based; the live tape at 21:14Z reads spot
                    $65,930, 24h −0.70%, H/L $66,723 / $65,567 — an independent
                    source, not a conflict). Closes are in-progress bars; treat
                    every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the cap reclaim. Spot $65,930 holds{' '}
              <span className="dn-em">four positive daily lines</span> in order of
              proximity: <span className="dn-tag bull">D-EMA50 $65,099
              (+1.28%)</span> — the reclaimed entry-validation cap, now nearest
              support — <span className="dn-tag bull">D-SMA20 $64,028
              (+2.97%)</span>, <span className="dn-tag bull">D-EMA20 $64,198
              (+2.70%)</span>, and <span className="dn-tag bull">D-SMA50 $63,102
              (+4.48%)</span>, which sits almost exactly on the{' '}
              <span className="dn-tag bull">W-SMA200 floor $63,078 (+4.52%)</span> —
              a ~$24 support shelf near $63,100. Overhead in order:{' '}
              <span className="dn-tag bear">D-EMA100 $68,030 (−3.09%)</span> (the
              working first target), <span className="dn-tag bear">D-SMA150 $69,814
              (−5.56%)</span>, <span className="dn-tag bear">W-SMA20 $69,859
              (−5.62%)</span>, <span className="dn-tag bear">W-EMA20 $70,075
              (−5.92%)</span>, <span className="dn-tag bear">D-SMA100 $70,091
              (−5.94%)</span>, <span className="dn-tag bear">D-EMA150 $71,012
              (−7.16%)</span>, <span className="dn-tag bear">D-SMA200 $72,694
              (−9.30%)</span>, <span className="dn-tag bear">W-EMA200 $72,935
              (−9.60%; seed)</span>, <span className="dn-tag bear">D-EMA200 $73,863
              (−10.74%)</span>. Far above and disused: W-EMA150 $76,761 (−14.11%;
              seed), W-EMA50 $79,024 (−16.57%), W-EMA100 $80,340 (−17.94%), W-SMA50
              $85,414 (−22.81%), W-SMA100 $88,503 (−25.51%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-22 20:06Z (close
                $65,790.90); offsets recomputed against live spot $65,930.01.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. The matrix is intentionally computed from the
                btcusdt_1m_&#123;2024,2025,2026&#125;.parquet subset (1,344,727 minutes
                / 934 daily / 134 weekly bars), distinct from the full 2019–2026
                wildcard history that the footer&rsquo;s glob would otherwise imply;
                the 200W cycle floor is a separate lineage from
                ma200w_trap_watch_state.json. W-SMA150 / W-SMA200 not computable —
                this subset holds 134 weekly bars, short of both windows; W-EMA150 and
                W-EMA200 seed from available history and are reported as such. Daily closes:
                07-18 $64,806.70, 07-19 $64,694.70, 07-20 $65,224.80, 07-21
                $66,522.40, 07-22 (in-progress) $65,790.90 — two completed
                closes (07-20, 07-21) plus the in-progress 07-22 bar above the
                D-EMA50 cap $65,099.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DEEPENED to +294.6M net-long-gamma (deepest of the recovery) · flip $61,765, spot +6.74% above · $70k/$72k call walls cap overhead · no near-dated negative amplifier · 31JUL +175.4M dominates an effectively-positive strip (only a negligible 26JUL −$0.18M)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book deepened its net-long-gamma to the richest of the
                recovery
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+294.6M / 1% move</span> (from +194.2M
              on 07-19 — a +$100M deepening); the book is deeply net-long-gamma
              (dampening — dealers buy dips, sell rips). The 0-γ flip is{' '}
              <span className="dn-tag">$61,765</span>, and spot $65,930 sits{' '}
              <span className="dn-tag bull">+6.74% above flip</span> on
              spot-denominated math (65,930.01 / 61,765 − 1 = +6.743%); the GEX
              file&rsquo;s Deribit-index reference $66,185 ($255 above live spot)
              reads <span className="dn-tag bull">+7.16%</span> above the flip
              (66,185 / 61,765 − 1 = +7.156%) — both references positive, spot well
              inside the positive-gamma field. The top gamma walls:{' '}
              <span className="dn-tag bull">$70k +95.38M</span> (heaviest, the
              overhead magnet/cap; 38,892 call OI),{' '}
              <span className="dn-tag bull">$72k +63.47M</span>,{' '}
              <span className="dn-tag bull">$66k +34.63M</span> (just overhead),{' '}
              <span className="dn-tag bull">$67k +30.71M</span>,{' '}
              <span className="dn-tag bull">$68k +29.19M</span>,{' '}
              <span className="dn-tag bull">$65k +13.97M</span> (just below spot),{' '}
              <span className="dn-tag bear">$60k −13.76M</span> (the lone negative
              wall — crash-put residual, 18,004 put OI),{' '}
              <span className="dn-tag bull">$69k +11.54M</span>,{' '}
              <span className="dn-tag bull">$80k +11.26M</span>.{' '}
              <span className="dn-em">
                Spot is bracketed by the $65k support wall below and the $66k–$68k
                positive band above, with the $70k/$72k calls the heavy overhead
                cap; the only negative gamma is the $60k crash-put residual, far
                below. This is a book that dampens both ways — it will fade a chase
                into the $70k call wall and bid a dip toward $65k / the flip
              </span>. The expiry strip carries{' '}
              <span className="dn-em">no near-dated negative amplifier</span>:
              23JUL 0.5DTE +9.20M (settles 08:00Z tomorrow), 24JUL 1.5 +52.81M,
              25JUL 2.5 +2.04M, 26JUL 3.5 −0.18M (negligible), 31JUL 8.5{' '}
              <span className="dn-tag bull">+175.44M</span> (dominant), 7AUG 15.5
              +35.20M, 28AUG 36.5 +23.83M, 25SEP 64.5 +7.58M, 25DEC 155.5 +5.86M,
              26MAR27 246.5 +1.29M, 25JUN27 337.5 +0.56M — an effectively-positive
              strip (no material negative bucket except a negligible 26JUL −$0.18M)
              dominated by 31JUL. No amplifier exists to fuel a fresh short.
            </p>

            <p>
              IV median across 842 instruments is{' '}
              <span className="dn-tag">42.6%</span> against 30D close-to-close RV of{' '}
              <span className="dn-tag">32.45%</span> — chain-level richness{' '}
              <span className="dn-tag">~+10.1pt</span>, put/call OI ratio{' '}
              <span className="dn-tag">0.44</span> (133,816 / 304,057 — call-heavy).
              A chain-median across N instruments,{' '}
              <span className="dn-em">not</span> a tradable spread;
              expiry-/strike-level vega, skew and term structure remain not loaded;
              the vol read stays framework-only. 842 instruments today (was 874 on
              07-19). RV methodology: 30D close-to-close, logret.std × √365 × 100
              on the last 30 daily log returns (= 31 consecutive daily closes)
              anchored to parquet last bar 2026-07-22 20:06Z; the 31-return read is
              32.09%, the 30-return page value 32.45%.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · rates/dollar tight (10Y 4.60%, TIPS 2.35% EXTREME, DXY 101.19) vs credit/liquidity loose (HY OAS 2.69% RISK-ON, Fed net liq $5.987T EXTREME) · reclaim-long rates filter FALSE (10Y &gt; 4.55%) · cross-asset IDIOSYNCRATIC |r| 0.200 · BTC the RS leader (+1.70% 7d vs a red TradFi tape)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape stays split — rates and the dollar tight, credit and
                liquidity loose — with the rates leg tightening a touch against the
                scout
              </span>. Dashboard render is 2026-07-21 22:16Z, ~23h before the
              snapshot (notably stale — no fresher FRED render on file; slow FRED
              series, but disclose). US 10Y nominal{' '}
              <span className="dn-tag bear">4.60% (+5.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.09</span>, episodic z{' '}
              <span className="dn-tag">+1.47</span> — EXTREME RISK-OFF,{' '}
              <span className="dn-em">above the 4.55% reclaim-long gate</span> (was
              4.57% on 07-19 — 3bp tighter). 10Y TIPS real{' '}
              <span className="dn-tag bear">2.35% (+4.0bp)</span>, z{' '}
              <span className="dn-tag bear">+2.72</span> — EXTREME RISK-OFF. 5Y5Y BE
              inflation <span className="dn-tag">2.22% (+1.0bp)</span>. HY OAS{' '}
              <span className="dn-tag bull">2.69% (−4.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.21</span>, episodic z{' '}
              <span className="dn-tag bull">−0.63</span> — RISK-ON, eased 2bp from
              07-19 (2.71%) and now <span className="dn-em">9bp shy</span> of its
              2.78% put-spread re-grow gate. MOVE bond vol{' '}
              <span className="dn-tag">72.7 (+1.78)</span> — neutral. DXY{' '}
              <span className="dn-tag bear">101.19 (+0.20)</span>, regime z{' '}
              <span className="dn-tag bear">+2.14</span> — EXTREME RISK-OFF, firmer.
              Fed net liquidity{' '}
              <span className="dn-tag bull">$5.987T (+0.025T)</span>, regime z{' '}
              <span className="dn-tag bull">+2.34</span> — EXTREME RISK-ON. USD/JPY{' '}
              <span className="dn-tag">163.19 (+0.70)</span>; US-JP 10Y spread{' '}
              <span className="dn-tag">1.93% (+5.0bp)</span> — tight. NFCI −0.538
              (stale 11d).{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) is FALSE at
                4.60% and tightened 3bp — a live scout headwind, but the desk&rsquo;s
                07-19 read stands: with SM now confirming, the rates filter is a
                caveat, not the gate. The put-spread re-grow gate is two legs, BOTH
                required — the 10Y leg fires (4.60% &gt; 4.53%) but HY OAS 2.69% is
                9bp shy of 2.78%, so the single rates leg is not a hedge trigger.
                Rates/dollar tight, credit/liquidity loose: the macro cross-current
                that has framed the whole recovery.
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
                <tr><td>US 10Y nominal</td><td className="num">4.60%</td><td className="num bear">+5.0bp</td><td className="num bear">+2.09</td><td className="num">+1.47</td><td className="bear">tight · EXTREME RISK-OFF</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.35%</td><td className="num bear">+4.0bp</td><td className="num bear">+2.72</td><td className="num">+1.53</td><td className="bear">tight · EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.22%</td><td className="num">+1.0bp</td><td className="num">−0.07</td><td className="num">+0.57</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.69%</td><td className="num bull">−4.0bp</td><td className="num bull">−1.21</td><td className="num bull">−0.63</td><td className="bull">loose · RISK-ON · 9bp from gate</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.538</td><td className="num">−0.01</td><td className="num">−1.03</td><td className="num bull">−1.92</td><td className="stale">stale 11d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">72.7</td><td className="num bear">+1.78</td><td className="num">−0.13</td><td className="num">+0.67</td><td className="neut">neutral</td></tr>
                <tr><td>DXY</td><td className="num">101.19</td><td className="num bear">+0.20</td><td className="num bear">+2.14</td><td className="num">+0.74</td><td className="bear">firmer · EXTREME RISK-OFF</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.987T</td><td className="num bull">+0.025T</td><td className="num bull">+2.34</td><td className="num bull">+2.42</td><td className="bull">EXTREME RISK-ON</td></tr>
                <tr><td>USD/JPY</td><td className="num">163.19</td><td className="num">+0.70</td><td className="num bear">+1.65</td><td className="num">+1.74</td><td className="neut">yen softer</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.93%</td><td className="num bear">+5.0bp</td><td className="num">−0.62</td><td className="num">+1.47</td><td className="bear">tight</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 21:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.200</span>{' '}
              (loosened from 0.315 on 07-19 — now well into the{' '}
              <span className="dn-em">IDIOSYNCRATIC</span> band, below the 0.25
              threshold). BTC&rsquo;s listed ties: NQ{' '}
              <span className="dn-tag">+0.531</span> (top), SP500{' '}
              <span className="dn-tag">+0.440</span>, SILVER{' '}
              <span className="dn-tag">+0.370</span>, PLAT{' '}
              <span className="dn-tag">+0.358</span>, COPPER{' '}
              <span className="dn-tag">+0.354</span>, TSLA{' '}
              <span className="dn-tag">+0.353</span>, NVDA{' '}
              <span className="dn-tag">+0.348</span>, GOLD{' '}
              <span className="dn-tag">+0.310</span>, JP225{' '}
              <span className="dn-tag">+0.306</span>. 7d performance is the loud
              line: <span className="dn-tag bull">BTC +1.70%</span> leads a broadly{' '}
              <span className="dn-em">red</span> TradFi tape — NQ{' '}
              <span className="dn-tag bear">−1.56%</span>, SP500{' '}
              <span className="dn-tag bear">−0.85%</span>, JP225{' '}
              <span className="dn-tag bear">−2.00%</span>, and the megacaps hard
              down (GOOGL <span className="dn-tag bear">−10.10%</span>, META{' '}
              <span className="dn-tag bear">−8.66%</span>, TSLA{' '}
              <span className="dn-tag bear">−7.66%</span>, AMZN{' '}
              <span className="dn-tag bear">−4.11%</span>, MSFT{' '}
              <span className="dn-tag bear">−1.79%</span>), NVDA{' '}
              <span className="dn-tag bull">+0.64%</span> the lone green big-tech.
              Metals mixed (SILVER{' '}
              <span className="dn-tag bull">+3.20%</span>, GOLD{' '}
              <span className="dn-tag bull">+1.62%</span>, COPPER{' '}
              <span className="dn-tag bull">+1.38%</span>, PLAT{' '}
              <span className="dn-tag bear">−1.84%</span>); energy strong (CL{' '}
              <span className="dn-tag bull">+8.77%</span>, BRENT{' '}
              <span className="dn-tag bull">+7.28%</span>).{' '}
              <span className="dn-em">
                BTC is the relative-strength leader by a wide margin (+1.70% 7d vs
                NQ −1.56% = a +3.26pt lead) against a TradFi equity complex that is
                broadly selling off — the endogenous-to-crypto read that has powered
                the recovery is intact, and BTC is now outrunning the macro tape,
                not lagging it. Correlations loosened to idiosyncratic, so the macro
                cross-current bites less on price than on the trade framework&rsquo;s
                gates
              </span>. JGB monthly 2.67% carries an EXTREME RISK-OFF monthly tag —
              do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · scout ARMED (upgraded from DEFERRED — SM joined the bid, price reclaimed the D-EMA50 cap) · short STOOD DOWN (deepest positive-gamma, no amplifier) · put-spread not re-grown (single 10Y leg) · book FLAT for the confirming up-close</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 07-19 note ended &ldquo;the long is decided when smart money
                joins the bid, not when it fades it&rdquo; — smart money has now
                joined the bid
              </span>. That is the leg the recovery lineage waited for: SM net long
              +6,655 (flipped 2026-07-21 06:36Z / BJ 14:36), price above the D-EMA50 cap, the floor
              settled on the weekly close, the dealer book deeply positive-gamma
              with no amplifier. The scout upgrades from{' '}
              <span className="dn-em">DEFERRED</span> to{' '}
              <span className="dn-em">ARMED</span>. But the trigger does not fire on{' '}
              <em>this</em> print: the 24h is a −0.70% down-close, OI contracted
              −2.16% rather than expanding, and the reclaim-long rates filter is
              FALSE (10Y 4.60%). The desk does not chase a pullback into the
              $70k/$72k call-wall cap with the confirming sub-legs (OI turning up,
              an up-close) not yet in. The book today is: no shorts, scout ARMED
              but not live, no fresh hedge — go long 0.2R on the first confirming
              up-close that holds the D-EMA50 $65,099 with OI stabilizing (Δ24h OI
              ≥ 0), stop the settled floor $63,078.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · ARMED · SM-confirmation leg FIRED · awaiting a confirming up-close</span>
              <div className="dn-trade-name">
                Reclaim-long scout — armed at last: SM flipped net long (+6,655) and price reclaimed the D-EMA50 cap; the trigger waits only on a confirming up-close with OI stabilizing
              </div>
              <div className="dn-thesis">
                The 07-19 scout was gated on two hard legs plus sub-conditions: (1)
                a 1h/daily close above the D-EMA50 entry-validation cap, and (2) SM
                confirming (flat-to-covering, ideally net long) with OI expanding,
                while the 10Y rates filter was a headwind not a block. Leg 1 is in
                — two completed daily closes above the D-EMA50 (07-20 $65,225,
                07-21 $66,522) plus the in-progress 07-22 bar ($65,791), spot
                +1.28% above the cap. Leg 2 is
                emphatically in — SM did not merely cover, it flipped net long
                (−6,657 on 07-19 → +6,655 now, crossed 2026-07-21 06:36Z / BJ 14:36) and built
                +1,952 over the pinned 24h. What is missing is the confirming print:
                the 24h is a −0.70% pullback with OI contracting −2.16%, so the
                &ldquo;OI expanding&rdquo; sub-leg inverted on the drawdown, and the
                10Y at 4.60% keeps the rates filter false. The scout is therefore
                ARMED, not live — the desk goes long on the first up-close that
                reclaims the pullback with OI stabilizing, sizing small into a
                deeply positive-gamma book that caps the upside at the $70k call
                wall. This is the closest the recovery has come to a live long.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">trigger (go-live)</span><span className="dn-lvl-v bull">next daily close &gt; D-EMA50 $65,099 that is an UP-close (24h ≥ 0) AND OI stabilizing (Δ24h OI ≥ 0) — the SM-confirmation and cap-reclaim legs are already TRUE; the remaining gate is a confirming print, not a fresh structural condition</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on trigger print, scout long 0.2R · SM is net long, the floor is settled, the dealer book dampens the downside toward the flip</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1h close &lt; $63,078 (W-SMA200 settled cycle floor / D-SMA50 $63,102 shelf — a close below ends the reclaim read)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$68,030 (D-EMA100, first target) then $69,814 / $70,091 (D-SMA150 / D-SMA100) into the $70k +95.4M call wall</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · take half at D-EMA100; the $70k call wall is the structural cap on the runner</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> trigger ~$65,099 (D-EMA50), stop $63,078 (floor) =
                ~$2,021 risk; first target $68,030 = ~$2,931 reward ≈ 1.45:1 —
                in line with the 07-19 scout&rsquo;s 1.47:1. <b>Hard rule:</b> do
                NOT go live on this pullback print — the SM leg firing is the
                decisive upgrade, but the framework wants OI to stop contracting and
                an up-close to confirm the demand is stepping back in, not just
                shorts covering (the 24h was perp buy-to-close on falling OI, spot
                CVD flat). The rates filter at 4.60% is a noted headwind that argues
                for the smaller 0.2R size, not for standing down now that SM has
                joined.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · STOOD DOWN · deepest positive-gamma of the recovery (+294.6M) · no amplifier · BTC the RS leader · SM net long</span>
              <div className="dn-trade-name">
                Chase-short — stays stood down: shorting into a +294.6M positive-gamma book with SM net long, BTC leading a red TradFi tape, and no negative amplifier is fighting every structural line
              </div>
              <div className="dn-thesis">
                The chase-short has been stood down across the recovery and is more
                offside now than on 07-19. The dealer book deepened to the richest
                net-long-gamma of the recovery (+294.6M vs +194.2M), the flip sits
                $4,165 below spot, the expiry strip is effectively positive (only a
                negligible 26JUL −$0.18M) with no near-dated negative amplifier (the
                down-leg&rsquo;s fuel), SM is net
                long for the first time of the recovery, and BTC is the
                relative-strength leader (+1.70% 7d vs a red equity complex). A
                short here fights the dealer dampening, the SM long, and BTC&rsquo;s
                own RS. The only re-arm is a structural break, not a fade.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">stood down · no position · positive-gamma book + SM long + no amplifier all argue against a fade</span></div>
                <div><span className="dn-lvl-k">re-arm trigger (not active)</span><span className="dn-lvl-v bear">1d close &lt; $63,078 (W-SMA200 floor) AND a fresh near-dated NEGATIVE gamma chunk appearing on the strip — neither present (the strip is effectively positive bar a negligible 26JUL −$0.18M, dominated by 31JUL +175.4M)</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v bear">no short into the deepest positive-gamma book of the recovery with SM net long and BTC leading its risk cluster</span></div>
              </div>
              <div className="dn-gating">
                <b>Gating:</b> the down-leg shorts worked because a large near-dated
                NEGATIVE gamma chunk amplified the move into expiry. No such chunk
                exists on this strip. Re-arming short requires the cycle floor to
                break outright ($63,078 on a daily close) AND a fresh negative
                amplifier to appear — a structural regime change, not a
                pullback-fade inside a positive-gamma field.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — SINGLE leg fired (10Y), no fresh hedge</span>
              <div className="dn-trade-name">
                Downside put-spread — not re-grown: the 10Y leg fires (4.60% &gt; 4.53%) but HY OAS 2.69% is 9bp shy of its 2.78% gate; a single-leg fire is not the both-legs confirmation a fresh hedge needs
              </div>
              <div className="dn-thesis">
                The put-spread re-grow gate is two legs, BOTH required: HY OAS &gt;
                2.78% AND 10Y &gt; 4.53%. This render fires only the 10Y leg (4.60%,
                tightened 3bp from 07-19&rsquo;s 4.57%) — but the HY OAS leg sits
                9bp shy at 2.69% (RISK-ON, eased 2bp), further from the gate than on
                07-19. Credit is not confirming the rates stress. The desk does not
                pay premium to re-grow a downside tail into a +294.6M positive-gamma
                book with SM net long and BTC the RS leader — a fresh put-spread
                would fight BTC&rsquo;s own relative strength and the dealer
                dampening. The reclaim-long rates filter being FALSE at 4.60% is
                noted as a scout headwind above, not as a hedge trigger here. No
                fresh hedge.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · not re-grown · single 10Y leg fired, HY OAS leg 9bp shy</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (both-legs required)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.69%, 9bp to fire) to JOIN the already-fired 10Y &gt; 4.53% (4.60%) — a both-legs confirmation, not a single rates leg</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bear">10Y &lt; 4.55% close — FALSE at 4.60% (tightened 3bp from 4.57%); a scout-long headwind, not a hard block now that SM has confirmed</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as
                levels drift, not backtested breakpoints. A fresh hedge on the
                single rates leg would be a put-spread rolled to 24JUL 1.5 DTE or
                31JUL 8.5 DTE — but both strips are net-long-gamma, so a fresh tail
                would carry no amplifier tailwind and would fight the recovery
                rather than ride it. The desk waits for the HY OAS leg to join
                before re-growing, or for the cycle floor to break outright.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · SM joined the bid (the scout&rsquo;s hard leg FIRED) · price reclaimed the D-EMA50 cap · book FLAT for the confirming up-close · floor settled, dealer book deeply positive-gamma, rates filter the lone headwind</span>
            </h2>

            <p>
              Of the 07-19 decision conditions: the demand-quality/reclaim scout&rsquo;s
              SM-confirmation leg <span className="dn-em">FIRED decisively</span> —
              SM did not merely go flat-to-covering, it flipped net long (+6,655,
              crossed 2026-07-21 06:36Z / BJ 14:36), the single line the 07-19 note said would
              rewrite the trade; the D-EMA50 cap-reclaim leg{' '}
              <span className="dn-em">FIRED</span> (two completed daily closes
              above $65,099 plus the in-progress 07-22 bar); the &ldquo;OI still expanding&rdquo; sub-leg{' '}
              <span className="dn-em">did NOT hold</span> on this pullback (OI
              −2.16%); the reclaim-long rates filter stayed{' '}
              <span className="dn-em">FALSE</span> (10Y 4.60%, tightened 3bp); the
              macro re-grow gate still fires ONE leg (10Y) with HY OAS 9bp shy; the
              chase-short re-arm <span className="dn-em">did NOT fire</span> (no
              floor break, no negative amplifier). <em>The hard leg the recovery
              waited on — smart money joining the bid — is finally in, so the scout
              upgrades from deferred to armed; the remaining gate is a confirming
              up-close with OI stabilizing, not a fresh structural condition.</em>{' '}
              The conditions today re-set around an armed scout, a settled floor, a
              deeply positive-gamma dealer book, and a lone rates-filter headwind:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Reclaim-long scout (long) — ARMED, SM leg FIRED</td><td className="bull">next UP-close &gt; D-EMA50 $65,099 (24h ≥ 0) AND OI stabilizing (Δ24h OI ≥ 0) — SM net long +6,655 and cap-reclaim already TRUE</td><td>scout long 0.2R, target $68,030 (D-EMA100) then $69,814 / $70,091; stop $63,078</td></tr>
                <tr><td>OI-turns-up confirmation (the missing sub-leg)</td><td className="bear">Δ24h OI ≥ 0 with an up-close — currently OI −2.16% on the pullback</td><td>this is the trigger&rsquo;s remaining gate; a covering-only pullback (perp buy-to-close on falling OI) is not the fresh-demand confirmation the scout wants</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">10Y &lt; 4.55% close — FALSE at 4.60% (tightened 3bp from 4.57%)</td><td>scout headwind, not a hard block now SM has confirmed; argues for the smaller 0.2R size</td></tr>
                <tr><td>Cycle floor lost (reclaim read ends)</td><td className="bear">1d close &lt; $63,078 (W-SMA200 / D-SMA50 $63,102 shelf)</td><td>ends the reclaim thesis; separate reassessment — the settled weekly-close floor breaks</td></tr>
                <tr><td>Chase-short re-arm (not active)</td><td className="bear">1d close &lt; $63,078 AND a fresh near-dated NEGATIVE gamma chunk on the strip — neither present</td><td>the strip is effectively positive bar a negligible 26JUL −$0.18M (31JUL +175.4M dominant); no fade into a +294.6M positive-gamma book with SM long</td></tr>
                <tr><td>Macro tail re-grow (single leg fired)</td><td className="bear">HY OAS &gt; 2.78% (9bp to fire) to JOIN 10Y &gt; 4.53% (4.60%, already fired)</td><td>re-grow only on the both-legs confirmation; a single rates leg into a positive-gamma strip is not a hedge trigger</td></tr>
                <tr><td>Dealer book stays positive-gamma</td><td className="bull">aggregate GEX stays positive (no fresh near-dated negative chunk added inside the 23JUL/24JUL/31JUL strip)</td><td>the downside stays dampened toward the flip $61,765; the $70k/$72k call walls cap a chase — favors the small scout over a runner</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the pullback resolves into a confirming up-close that holds
                the D-EMA50 $65,099 with OI turning back up — which triggers the
                first live long of the recovery — or whether a fresh down-print
                pushes a daily close below the settled floor $63,078 and ends the
                reclaim read. Smart money has joined the bid, the floor is settled,
                and the dealer book dampens the downside; what is missing is one
                clean confirming print, not another structural condition
              </span>. Until then this note runs as written: the scout is ARMED (SM
              leg fired, cap reclaimed) but not live, the chase-short is stood down
              into the deepest positive-gamma book of the recovery, and the
              put-spread is not re-grown on a single-leg rates fire. The macro tape
              stays split (rates/dollar tight, credit/liquidity loose), BTC leads a
              red TradFi tape by +3.26pt on 7d, and the mid-frames hold their golden
              crosses above cloud. The right read for the next print is{' '}
              <em>armed and patient — the buyer of record has turned; the long
              triggers on the confirming close, not on the pullback</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> v2 EN, authored from the pinned 2026-07-22 21:14Z atomic
            snapshot (STAGE A) and reconciled against the STAGE B codex hostile
            cross-model audit (verdict BLOCK-CRITICAL on the v1 draft: 1 CRITICAL,
            2 MAJOR, 3 MINOR). Record: audits/2026-07-22-desk-note.md. Every
            finding was fixed in place and closed by grep — for each, the wrong-claim
            pattern was searched across the full file and re-searched after the fix
            until zero stale matches remained (hits-before → hits-after):{' '}
            <b>DN-001 (CRITICAL)</b> — in-progress 07-22 bar promoted to a completed
            daily close; searched <em>&ldquo;three consecutive&rdquo;</em> +
            variants (<em>three/3 consecutive daily closes/closes above</em>): 4 → 0,
            reframed everywhere to &ldquo;two completed daily closes (07-20, 07-21)
            plus the in-progress 07-22 bar&rdquo;; the D-EMA50 cap-reclaim leg stays
            FIRED on the two completed closes — RESOLVED.{' '}
            <b>DN-002 (MAJOR)</b> — SM flip mislabeled UTC; searched{' '}
            <em>&ldquo;14:36Z&rdquo;</em> (bare): 3 → 0, all now
            &ldquo;2026-07-21 06:36Z / BJ 14:36&rdquo; matching the clean internal
            refs — RESOLVED.{' '}
            <b>DN-003 (MAJOR)</b> — +35.20M expiry mislabeled 15AUG; searched{' '}
            <em>&ldquo;15AUG&rdquo;</em>: 1 → 0, corrected to 7AUG (source
            btc_gex.html lists 7AUG26 15.5DTE +35.20M) — RESOLVED.{' '}
            <b>DN-004 (MINOR)</b> — &ldquo;wholly-positive strip&rdquo; contradicts
            the disclosed 26JUL −$0.18M row; searched <em>&ldquo;wholly&rdquo;</em>:
            5 → 0, reworded to &ldquo;effectively positive&rdquo; with the negligible
            26JUL −$0.18M row disclosed at each site — RESOLVED.{' '}
            <b>DN-005 (MINOR)</b> — MA-matrix source scope ambiguous vs the wildcard
            glob; searched <em>&ldquo;1m_*.parquet&rdquo;</em>: 1 → 0, the matrix is
            now disclosed as the intentional btcusdt_1m_&#123;2024,2025,2026&#125;.parquet
            subset (1,344,727 min / 934 daily / 134 weekly bars) in the manifest,
            prose, and footer, with the 200W floor separated as its own trap-watch
            lineage — RESOLVED.{' '}
            <b>DN-006 (MINOR)</b> — short_btc 24h low missing its UTC companion;
            searched <em>&ldquo;14:26&rdquo;</em>: now carries 06:26Z (BJ 14:26) —
            RESOLVED. The supplementary ask-deepseek numeric recompute (runbook §5,
            adjudicated here — GLM/deepseek is not an auditor) was reconciled item by
            item: its three MINOR offset flags (D-SMA50 +4.48%, W-EMA20 −5.92%,
            W-EMA200 −9.60%) were recomputed against live spot $65,930.01 and the
            page values are correct (the deepseek figures were the miscalculations);
            its strip-sum &ldquo;CRITICAL&rdquo; (buckets 313.63M ≠ aggregate
            294.6M) is a source property — both the per-expiry buckets and the
            +294.6M net are verbatim from btc_gex.html, which the note already
            discloses it reads as the HTML total, so no change; the +6.66k SM header
            is valid rounding of +6,655.1; and the +5.0bp/−4.0bp macro Δ columns are
            the dashboard&rsquo;s own daily deltas, distinct from the note-over-note
            3bp/2bp moves the prose cites — both frames retained. Codex-cleared and
            unchanged: manifest-vs-prose tiles, the 21:14Z live-tape arithmetic
            (24h −0.70%, OI −2,260.8/−2.16%, SM +4,703.5→+6,655.1/+41.5%, retail
            50.45→54.72, funding +2.76% live / +3.31% 24h mean, 0/1442 cap &amp;
            negative rows), CVD/flow windows, GEX dual-reference sign, R/R 1.45:1,
            requireViewer gating, and EN/ZH parity. Build proxy{' '}
            <em>npx --no-install tsc --noEmit</em> returns clean.{' '}
            <b>Post codex hostile audit — all findings RESOLVED (grep hits-after = 0).</b>
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-07-22 21:14Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-07-21 22:16Z (~23h before
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
                Smart money joined the bid and price reclaimed the cap — the leg
                the recovery waited for is in. But the trigger wants a confirming
                up-close, not a pullback. Scout armed. Patient.
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
            v2 · 2026-07-22 21:14Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_&#123;2024,2025,2026&#125;.parquet
            (MA matrix subset) · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
