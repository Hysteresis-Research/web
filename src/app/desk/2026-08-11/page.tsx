import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-11 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-11',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-11' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260811() {
  await requireViewer('/desk/2026-08-11');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-11 · v2</span>
          <span>internal · for discussion · v2 — post codex hostile audit</span>
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
              <span className="dn-big">$63,944</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.47%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-11 00:08Z (tape anchor 00:05Z)
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-11 00:05Z tape anchor</td>
                  <td className="dn-flag">
                    fresh · 1-min · anchor row t==&ldquo;08-11 08:05&rdquo; (BJ,
                    UTC+8) = 00:05Z daily pin; read at 00:08Z session start ·
                    landmine cleared (00:05Z pin is NOT t==&ldquo;08-11
                    00:05&rdquo;, which would be the 16:05Z 08-10 row)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-11 00:01Z scan (BJ 08:01)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · ~7-min stale vs 00:08Z read ·
                    in-progress bars · archived verbatim in
                    /opt/desk-note/snapshots/2026-08-11-0008
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-11 00:00Z snapshot</td>
                  <td className="dn-flag">
                    ~8-min stale vs snapshot anchor · Deribit idx $64,227 vs live
                    $63,944 ($283 above live) · 794 instruments · median IV 41.2%
                    · 11AUG26 0.3DTE −11.62M (a NEGATIVE front chunk) settles
                    08:00Z today (~8h AFTER this 00:05Z snapshot — still live, no
                    settle-adjustment applied)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-11 00:00Z
                  </td>
                  <td className="dn-flag">~8-min lag · 7d 1h bars · 22 assets · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-10 22:16Z render</td>
                  <td className="dn-flag">
                    ~1.8h render lag · FRED Tier-1: 10Y −4bp to 4.65% (EXTREME
                    RISK-OFF, eased), TIPS −3bp to 2.40%, HY OAS −1bp to 2.70%
                    (RISK-ON), DXY 99.62 (+0.02), Fed net liq $5.840T · MOVE bond
                    vol UNAVAILABLE this render (fetch failed) · several FX /
                    liquidity rows carry unchanged from the 08-09 render (rates
                    rows updated)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-08-11 00:06Z (close $63,910.30)</td>
                  <td className="dn-flag">
                    offsets recomputed vs live spot $63,944.50 · full 2019–2026
                    wildcard parquet = 363 W-SUN weekly bars · W-SMA200 IS
                    computable, prints $63,984 (−0.06%, effectively at spot);
                    every displayed W-SMA level is a full-history mean · W-EMA150/200
                    seed-sensitive, reported from their disclosed seed window
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle-floor watch</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · sma200 $63,760.71</td>
                  <td className="dn-flag">
                    recomputed_at 2026-08-10 00:11:24Z — now ~24h stale, carried
                    from the prior note (no fresh weekly settle since 08-09; next
                    weekly close 08-16) · JSON: sma200 $63,760.71,
                    consecutive_above 6 through the 08-09 weekly settle
                    $64,867.80 · slow level (~$250/wk), an hours-stale JSON is
                    fine per the runbook
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
              <span className="dn-v bull">+2.41%</span>
              <span className="dn-src">live · raw 0.002203 ×1095 = +2.41% ann · 24h mean +7.95% (was +7.36% on 08-10) · range +2.38% / +10.95% · 0 / 1441 sampled rows negative — funding stayed long-pay every minute BUT the live print cooled hard off the +10.95% window high, the first real leverage-off leg of the run</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">+8.12% → +2.41% live (24h mean +7.95%)</span>
              <span className="dn-src">the live rate cooled −5.71pt off the 08-10 note&rsquo;s +8.12% and sits at the low end of the 24h range; the 24h MEAN still rose +0.59pt because most of the window was hot — the cooling is on the last leg, not yet the whole day</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−0.78% (−833.8 BTC)</span>
              <span className="dn-src">live · a second day of net OI shrink — the last 4h shed −658.6 BTC and the last 1h −191.4 BTC as spot faded under $64k; deleveraging INTO the snapshot, not building</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">61.60 / 38.40</span>
              <span className="dn-src">live_db `mkt_long_pct` · from 53.78 24h ago (+7.82pt more crowded) · 24h range 52.40 / 61.60 — retail bought the dip hard, crowding to the top of the range as price fell −1.47%</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+2,947 (net LONG, flipped)</span>
              <span className="dn-src">live · long 14.21k − short 11.26k · flipped from the 08-10 note&rsquo;s −3,405 net short back to net long via a CLEAN zero-cross at BJ 00:41 08-11 (16:41Z 08-10), NOT through the recurring BJ 14–15 feed artifact — the cleanest SM certification of the recent lineage</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 08-10 note</span>
              <span className="dn-v bull">−3,405 → +2,947 (Δnet +6,352)</span>
              <span className="dn-src">long +3,440, short −2,912 · a full flip short→long · |Δ|/prior_net = 6,352 / 3,405 = 1.87 (a reversal larger than the prior net, so a &ldquo;cut fraction&rdquo; is not the right frame — read it directionally) · one +1,365 single-min step at BJ 02:41 (18:41Z 08-10) but the sign change itself was clean; net-long for ~7h, stabilized ~+2.6k–2.95k after BJ 03:05, final print +2,947</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.2% / 28.15%</span>
              <span className="dn-src">GEX median IV · 794 inst. · 30D close-to-close RV (logret.std ×√365 ×100, 30 returns) · chain-level richness ~+13.1pt</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+0.73% (above)</span>
              <span className="dn-src">flip $63,481 · vs live spot $63,944 (+0.73%; 63,944.5/63,481 − 1 = 0.731%) / GEX file Deribit idx $64,227 (+1.18%; 64,227/63,481 − 1 = 1.175%, file rounds +1.2%) — both refs positive, page rounds spot side to +0.73% for tile consistency · aggregate GEX +45.9M (net-long-gamma but HALVED from +111.3M on 08-10; a fresh −13.71M $64k wall now sits at spot)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The 08-10 note&rsquo;s cap-lost escalation fired: the D-EMA50 cap
                broke on the completed 08-10 close
              </span>. That note carried a flat book (the scout was cut 08-09) and
              named the first structural escalation as &ldquo;a 1d close &lt;
              D-EMA50 $64,661.&rdquo; The 08-10 daily close came in at{' '}
              <span className="dn-tag bear">$63,939.30</span> — roughly $722
              under the cap it had held for three sessions — and spot now prints{' '}
              <span className="dn-tag bear">$63,944, −1.01% below the D-EMA50 cap
              $64,597</span>. The digestion-above-cap thesis that ran the note
              from 08-07 is <span className="dn-em">falsified</span>: after the
              08-10 snapshot spot pushed one more probe to{' '}
              <span className="dn-tag">$65,370 @ BJ 15:38 08-10 (07:38Z)</span>,
              got sold the same as the prior day&rsquo;s $65,435, and closed the
              day back under the cap.{' '}
              <span className="dn-signal">
                But the position book did the opposite of the price
              </span>: smart money flipped from the 08-10 note&rsquo;s{' '}
              <span className="dn-tag bear">−3,405 net short</span> back to{' '}
              <span className="dn-tag bull">+2,947 net long</span> (long 14.21k −
              short 11.26k) — and this time through a{' '}
              <span className="dn-em">clean zero-cross at BJ 00:41 08-11 (16:41Z
              08-10), not the recurring BJ 14–15 feed artifact</span>, so the
              long flip is the most certifiable SM reading of the recent
              lineage. That is a genuine divergence: SM turned bullish into a
              close that broke the cap. The rest of the tape leans the bearish
              way — funding cooled hard on the last leg (live{' '}
              <span className="dn-tag bull">+2.41% ann</span> off the +10.95%
              window high, though the 24h mean is still +7.95%), OI shed a
              second day (<span className="dn-tag bear">−834 BTC / 24h</span>,
              −659 in the last 4h), retail bought the dip hard (
              <span className="dn-tag bear">+7.82pt to 61.6%</span>), the dealer
              book&rsquo;s gamma <span className="dn-tag bear">halved to
              +45.9M</span> with a fresh <span className="dn-tag bear">−13.71M
              $64k wall right at spot</span>, and the MTF slow frames rolled over
              (fresh <span className="dn-tag bear">8h / 12h / 1d water-up death
              crosses</span>, regime flipped to 6/9 reversal). What still holds
              is the floor: closes and spot hold above the{' '}
              <span className="dn-tag bull">$63,481 flip (+0.73%)</span> and the{' '}
              <span className="dn-tag bull">$63,761 200W cycle floor
              (+0.29%)</span>, and the 24h low{' '}
              <span className="dn-tag">$63,825 @ BJ 02:43 08-11 (18:43Z
              08-10)</span> held just above the floor. The read: the cap is lost
              and the structure has deteriorated, but the flip/floor band and a
              fresh SM long flip are still under the tape — so the book{' '}
              <span className="dn-em">stays flat</span>, the scout re-entry does
              NOT trigger (its cap-hold leg failed even as the SM leg fired), and
              the chase-short is <span className="dn-em">still stood down but
              closer to arming</span> (gamma halved, a negative wall at spot, a
              negative front 0DTE) — it arms only on a 1d close through the
              flip/floor.
            </p>

            <p>
              BTC prints <span className="dn-tag">$63,944</span> live,{' '}
              <span className="dn-tag bear">−1.47%</span> on 24h (spot 63,944.5
              vs 64,896 at the 08-10 08:05 BJ 24h-ago row) — a genuine down-day,
              not a flat tape. The 24h shape is a rejected probe then a grind
              lower: high <span className="dn-tag">$65,370 @ BJ 15:38 08-10
              (07:38Z)</span>, low <span className="dn-tag">$63,825 @ BJ 02:43
              08-11 (18:43Z 08-10)</span>, closing the 24h back near the lows.
              The load-bearing structural fact is the cap break: daily closes{' '}
              <span className="dn-tag">08-07 $64,885.40</span>,{' '}
              <span className="dn-tag bull">08-08 $64,928.50</span> (the high
              close of the run), <span className="dn-tag">08-09 $64,867.80</span>,
              then <span className="dn-tag bear">08-10 $63,939.30</span> — the
              first completed close below the D-EMA50 cap since the 08-07
              reclaim — and 08-11 in-progress $63,910.30 tracking it.{' '}
              <span className="dn-em">
                Three closes bought a stall; the fourth session lost the cap. The
                reclaim held its floor for three days and then gave back the
                level it reclaimed.
              </span>{' '}
              Spot now sits below the tight D-SMA20 / D-EMA20 / D-EMA50 overhead
              cluster (<span className="dn-tag bear">$64,174 / $64,205 / $64,597,
              −0.36% to −1.01%</span>), right on the W-SMA200{' '}
              <span className="dn-tag bear">$63,984 (−0.06%)</span>, and above a
              thin support shelf — the 200W floor{' '}
              <span className="dn-tag bull">$63,761 (+0.29%)</span>, the
              0γ flip <span className="dn-tag bull">$63,481 (+0.73%)</span>, and
              the D-SMA50 <span className="dn-tag bull">$63,357 (+0.93%)</span>.
              The next real overhead is unchanged and further away now: the
              D-EMA100 <span className="dn-tag bear">$66,763 (−4.22%)</span> /
              W-EMA200 <span className="dn-tag bear">$67,087 (−4.68%)</span>
              confluence, which the grind never tested.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · SM FLIPPED to net long +2,947 via a CLEAN zero-cross (not the BJ 14–15 artifact) — but the cap broke on the 08-10 close · funding cooled hard to +2.41% live · OI shed −834/24h · retail crowded +7.82pt to 61.6% into the fall</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position book flipped bullish while price broke the cap — a
                clean divergence
              </span>. SM net is{' '}
              <span className="dn-tag bull">+2,947</span> (long 14,211 − short
              11,264) vs the 08-10 note&rsquo;s{' '}
              <span className="dn-tag bear">−3,405</span> net short (long 10,771 −
              short 14,176). Both components moved bullish and persisted:
              long_btc <span className="dn-tag bull">10.77k → 14.21k
              (+3,440)</span> and short_btc{' '}
              <span className="dn-tag bull">14.18k → 11.26k (−2,912)</span>, Δnet{' '}
              <span className="dn-tag bull">+6,352</span>.{' '}
              <span className="dn-em">
                Crucially, unlike the 08-10 roll-back-short — which re-synced
                through the recurring BJ 15:01 feed artifact — this flip printed
                a clean sign-change at BJ 00:41 08-11 (16:41Z 08-10), net −17 →
                +37, well outside the BJ 14–15 artifact window. There is one
                +1,365 single-minute step at BJ 02:41 (18:41Z 08-10), net 644 →
                2,009, but the direction was already established by the clean
                cross an hour earlier, and the reading has held net-long for ~7h,
                stabilizing around +2.6k to +2.95k after BJ 03:05, final print
                +2,947 into the snapshot. This is the most certifiable SM state of
                the recent lineage.
              </span>{' '}
              A cut fraction is not the right frame here — |Δ|/prior_net = 6,352 /
              3,405 = 1.87, i.e. the move is larger than the entire prior net; the
              honest read is directional: SM re-longed and covered shorts, a full
              flip to net long. Retail leaned the opposite, dangerous way:
              mkt_long_pct <span className="dn-tag bear">61.60%</span> from 53.78%
              24h ago (+7.82pt), 24h range 52.40 / 61.60 — the crowd bought the
              −1.47% dip aggressively, crowding to the top of the range while
              price fell.
            </p>

            <p>
              The leverage side finally cooled — but only on the last leg.{' '}
              <span className="dn-signal">
                Funding stayed long-pay all 24h yet the live print dropped hard
              </span>: live <span className="dn-tag bull">+2.41% ann</span> (raw
              0.002203 × 1095), 24h mean{' '}
              <span className="dn-tag bear">+7.95%</span> (up +0.59pt from the
              08-10 note&rsquo;s +7.36% because most of the window was still hot),
              range <span className="dn-tag">+2.38% / +10.95%</span>, and{' '}
              <span className="dn-tag bear">0 / 1441 sampled rows negative</span>{' '}
              — longs paid shorts every minute, but the live rate is now at the
              floor of the 24h range, the first genuine leverage-off leg of the
              run. OI Δ <span className="dn-tag bear">−833.8 BTC (−0.78%)</span>{' '}
              over 24h — a second consecutive day of net shrink — with the last
              4h shedding <span className="dn-tag bear">−658.6 BTC</span> and the
              last 1h <span className="dn-tag bear">−191.4 BTC</span> as spot
              faded under $64k. Perp trades a{' '}
              <span className="dn-tag bear">−$70.21 discount</span> to spot at
              the snap (1h mean −$63.60, 4h mean −$62.62, 24h mean −$59.35, range
              −$137.17 / +$32.08 — basis briefly ticked premium at the 24h high
              then widened to a deep discount; the discount widened from the
              08-10 note&rsquo;s −$53.81 snap). 1-min aggressor skew snap{' '}
              <span className="dn-tag bear">−1.0</span> (1h mean −2.83) — a mild
              sell-lean, no oversold reflex bid.{' '}
              <span className="dn-em">
                Funding cooling off the cap + OI shedding a second day + a deep
                perp discount + SM flipping long while retail crowds long: the
                leverage book is deflating and the smart/dumb split is wide open.
                The cooling carry and the SM long flip are the constructive
                threads; the OI shrink and the widening discount say the deflation
                is happening on a break, not a base.
              </span>
            </p>

            <p>
              Windowed flow reads <em>a full-day fade with a heavy absorbed spot
              bid stepping in near the lows, and futures offering throughout</em>.
              24h: price <span className="dn-tag bear">−1.47%</span>, OI{' '}
              <span className="dn-tag bear">−833.8 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +2,112</span> (no cb_cvd reset in
              the window — verified), futures CVD{' '}
              <span className="dn-tag bull">Δ +550</span>, big-print{' '}
              <span className="dn-tag bear">−28 BTC</span>, taker-net{' '}
              <span className="dn-tag bull">+550</span>{' '}
              <span className="dn-em">(taker-net sum equals futures CVD Δ by
              construction — fut_cvd is the running cumsum of taker_net)</span> —{' '}
              <span className="dn-em">
                a modest net spot bid absorbed for a −1.47% down-day, far smaller
                than the 08-10 note&rsquo;s +18.3k spot-CVD flood; the demand that
                was under the tape has thinned as the price broke
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bear">−0.18%</span>, OI{' '}
              <span className="dn-tag bear">−658.6 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +2,428.9</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −586.4</span>, big-print{' '}
              <span className="dn-tag bear">−289.3 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−586.4</span> —{' '}
              <em>a heavy spot bid absorbing near the lows (the whole 24h spot
              CVD prints in this last 4h) while futures and big prints offered and
              OI shed — spot buyers stepped in at $63.8k–$64.0k but did not lift
              price</em>. 1h: price{' '}
              <span className="dn-tag bear">−0.08%</span>, OI{' '}
              <span className="dn-tag bear">−191.4 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −93.2</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −239.4</span>, big-print{' '}
              <span className="dn-tag bear">−102.3 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−239.4</span> —{' '}
              <em>both sides offered into the snap, no reflex bid yet</em>. The
              tell is the split: the 24h spot CVD (+2,112) is entirely a last-4h
              phenomenon (+2,429), so the earlier ~20h sold spot into the fade and
              a bid only stepped in near the floor — real demand at the level, but
              absorbed, and futures never joined.{' '}
              <span className="dn-em">
                (The 4h and 1h blocks are cumulative deltas measured from the
                previous boundary row — BJ 04:05 → 08:05 and 07:05 → 08:05 — the
                running-cumsum convention for these series; the exact-clock windows
                differ by a few BTC of OI and CVD.)
              </span>
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF rolled over — fresh 8h / 12h / 1d water-up death crosses, regime flipped to 6/9 REVERSAL (JT&lt;0) · only the HTF bottom-div cluster (12h/1w) + 1M ⚡TD9 BUY still lean up · cap lost, spot pinned in the thin flip/floor band</span>
            </h2>

            <p>
              <span className="dn-signal">
                The slow book that was constructive on 08-10 has rolled over
              </span>. The 8h / 12h / 1d golden crosses the prior note leaned on
              have all flipped to fresh water-up death crosses: 8h{' '}
              <span className="dn-tag bear">water-up death 2b</span> (DIF +240.8,
              early cross above water), 12h{' '}
              <span className="dn-tag bear">water-up death just printed</span>{' '}
              (DIF +118.7), 1d{' '}
              <span className="dn-tag bear">water-up death just printed</span>{' '}
              (DIF +73.3). The fast frames are already down — 1h water-up death
              15b (RSI 32.5, below cloud), 4h water-up death 13b (RSI 35.8, in
              cloud), 15m / 30m still nominally golden but below cloud with RSI in
              the low 30s — and a <span className="dn-tag bear">top-div cluster at
              30m / 1h / 4h</span> caps the fast side. The header net read is{' '}
              <em>&ldquo;1 long / 9 short · bearish resonance, sell
              rallies&rdquo;</em> with the regime flipped to{' '}
              <span className="dn-tag bear">6/9 reversal (JT&lt;0) —
              mean-reversion / bounce-strong, trend-follow cautious</span> (from
              the 08-10 note&rsquo;s 5/9 trend-continuation). What still leans up
              is thin and higher-TF: the{' '}
              <span className="dn-tag bull">HTF bottom-div cluster at 12h /
              1w</span> survived the crosses, 1w is still a{' '}
              <span className="dn-tag bull">water-down golden 3b</span>, and the{' '}
              <span className="dn-tag bull">1M ⚡TD9 BUY (printed $63,920)</span>{' '}
              holds.{' '}
              <span className="dn-em">
                Read straight: the reclaim&rsquo;s momentum is gone. The mid-book
                (8h/12h/1d) confirmed the cap break by rolling to death crosses,
                the regime tag flipped to reversal, and only the slowest frames
                and a bottom-div cluster keep a bounce case alive. This is the
                structural fingerprint of a failed reclaim testing its floor, not
                of a base building.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,920</td><td className="num">36.5</td><td className="neut">golden (water-dn) 20b</td><td className="bear">below ↑64.3k 47b</td><td>Buy 5</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">63,920</td><td className="num">32.8</td><td className="neut">golden (water-dn) 7b</td><td className="bear">below ↑65.1k 24b</td><td>Buy 6</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">63,920</td><td className="num">32.5</td><td className="bear">death (water-up) 15b</td><td className="bear">below ↑65.1k 11b</td><td>Buy 2</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">63,920</td><td className="num">35.8</td><td className="bear">death (water-up) 13b</td><td className="neut">in cloud 63.8k–64.0k 2b</td><td>Buy 6</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>8h</td><td className="num">63,920</td><td className="num">43.8</td><td className="bear">death (water-up) 2b</td><td className="neut">in cloud 63.9k–64.6k 2b</td><td>Buy 3</td><td>BEAR hid</td></tr>
                <tr><td>12h</td><td className="num">63,920</td><td className="num">45.7</td><td className="bear">death (water-up) 刚印 (just printed)</td><td className="bear">below ↑64.1k 1b</td><td>Buy 2</td><td>BULL reg</td></tr>
                <tr><td>1d</td><td className="num">63,920</td><td className="num">48.3</td><td className="bear">death (water-up) 刚印 (just printed)</td><td className="neut">in cloud 62.6k–67.9k 22b</td><td>Buy 2</td><td>BULL hid</td></tr>
                <tr><td>3d</td><td className="num">63,920</td><td className="num">45.0</td><td className="neut">—</td><td className="bear">below ↑76.2k 23b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,920</td><td className="num">39.9</td><td className="bull">golden (water-dn) 3b</td><td className="bear">below ↑85.9k 28b</td><td>Buy 1</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">63,920</td><td className="num">43.8</td><td className="neut">—</td><td className="bull">above ↓47.4k 30b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (BJ 08:01; rolling
                    latest file; archived verbatim in
                    /opt/desk-note/snapshots/2026-08-11-0008). Header alerts:{' '}
                    <em>8h water-up death cross (2 bars ago), DIF +240.8 — early
                    death cross (DIF above water)</em>; <em>12h water-up death
                    cross (just printed), DIF +118.7</em>; <em>1d water-up death
                    cross (just printed), DIF +73.3</em>; <em>1M ⚡TD9 BUY printed
                    at $63,920</em>; <em>⚠ HTF bottom-div cluster (12h/1w)</em>.
                    Scan spot $63,920, 24h −1.42%, 24h H/L $65,374 / $63,788,
                    qVol $8.31B (00:01Z MTF scan; the live-tape anchor at 00:05Z
                    shows spot $63,944 and 24h −1.47% on the same window — the
                    ~4-min gap accounts for the difference). Closes are
                    in-progress bars; treat every value as provisional until each
                    TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the cap break. Spot $63,944 sits{' '}
              <span className="dn-tag bear">−1.01% below the D-EMA50 cap
              $64,597</span> and below the tight overhead cluster —{' '}
              <span className="dn-tag bear">D-EMA20 $64,205 (−0.41%)</span>,{' '}
              <span className="dn-tag bear">D-SMA20 $64,174 (−0.36%)</span> — but
              sits right on the{' '}
              <span className="dn-tag bear">W-SMA200 $63,984 (−0.06%, effectively
              at spot)</span>, with only a thin support shelf beneath it:{' '}
              <span className="dn-tag bull">200W floor $63,761 (+0.29%)</span>,{' '}
              <span className="dn-tag bull">0γ flip $63,481 (+0.73%)</span>, and{' '}
              <span className="dn-tag bull">D-SMA50 $63,357 (+0.93%)</span>.
              Above the cluster, unchanged and untested:{' '}
              <span className="dn-tag bear">D-EMA100 $66,763 (−4.22%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $67,087 (−4.68%; seed)</span>{' '}
              (the nearest overhead confluence),{' '}
              <span className="dn-tag bear">D-SMA100 $67,594 (−5.40%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $68,501 (−6.65%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,125 (−7.49%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,270 (−7.69%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $69,414 (−7.88%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $69,882 (−8.50%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $72,108 (−11.32%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $72,944 (−12.34%; seed)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $77,121 (−17.09%)</span>,{' '}
              <span className="dn-tag bear">W-EMA50 $77,265 (−17.24%)</span>,{' '}
              <span className="dn-tag bear">W-EMA100 $78,204 (−18.23%)</span>,{' '}
              <span className="dn-tag bear">W-SMA50 $82,473 (−22.47%)</span>,{' '}
              <span className="dn-tag bear">W-SMA100 $88,710 (−27.92%)</span>.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-08-11 00:06Z (close
                $63,910.30); offsets recomputed against live spot $63,944.50.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. The full 2019–2026 wildcard parquet holds 363
                W-SUN weekly bars, so W-SMA200 IS computable — it prints $63,984
                (−0.06%, effectively at spot) and is shown in the near-spot
                cluster above; every displayed W-SMA level is a full-history
                mean. (This parquet W-SMA200 is distinct from the trap-watch
                cycle-floor sma200 $63,761, which is computed on the JSON&rsquo;s
                own weekly basis.) W-EMA150 $72,944 (−12.34%) and W-EMA200 $67,087
                (−4.68%) are seed-sensitive and reported from their disclosed seed
                window, not a full-adjust recompute. Daily closes: 08-06 $64,300.00, 08-07
                $64,885.40, 08-08 $64,928.50, 08-09 $64,867.80, 08-10 $63,939.30
                (the first completed close below the D-EMA50 cap since the 08-07
                reclaim), 08-11 (in-progress) $63,910.30. Separately, the 200W
                cycle floor (sma200 $63,760.71 from the trap-watch JSON,
                recomputed 2026-08-10 00:11:24Z, now ~24h stale, carried — no
                fresh weekly settle since 08-09) holds a 6th above-floor weekly
                close: 08-09 settled $64,867.80, +$1,107 (+1.74%) clear; live spot
                $63,944 is +0.29% above the floor.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · gamma HALVED to +45.9M · flip $63,481 (spot +0.73% above, cushion thinned) · fresh −13.71M $64k wall at spot, −44M negative cluster $60k/$62k/$64k · 11AUG 0DTE −11.62M (negative front chunk) settles 08:00Z · heaviest wall $70k +19.63M</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book is still net-long-gamma but thinning fast, with a
                negative wall now sitting right at spot
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+45.9M / 1%</span> — net-long-gamma
              (dampening) but roughly halved from the 08-10 note&rsquo;s +111.3M.
              The 0-γ flip sits <span className="dn-tag">$63,481</span>, and spot
              $63,944 is{' '}
              <span className="dn-tag bull">+0.73% above flip</span> on
              spot-denominated math (63,944.5 / 63,481 − 1 = +0.731%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads +1.2% off its
              Deribit-index $64,227 ($283 above live spot), which is{' '}
              <span className="dn-tag bull">+1.18%</span> (64,227 / 63,481 − 1 =
              +1.175%) — both references positive, but the cushion has thinned
              from +1.97% / +2.43% on 08-10. The wall map has turned two-sided
              around spot: overhead{' '}
              <span className="dn-tag bull">$70k +19.63M</span> (heaviest wall),{' '}
              <span className="dn-tag bull">$68k +13.69M</span>,{' '}
              <span className="dn-tag bull">$66k +12.18M</span>,{' '}
              <span className="dn-tag bull">$65k +11.79M</span>,{' '}
              <span className="dn-tag bull">$67k +11.31M</span>,{' '}
              <span className="dn-tag bull">$72k +8.42M</span>,{' '}
              <span className="dn-tag bull">$80k +8.16M</span>; but at and below
              spot a negative cluster has built —{' '}
              <span className="dn-tag bear">$64k −13.71M</span> (right at spot),{' '}
              <span className="dn-tag bear">$62k −11.33M</span>, and{' '}
              <span className="dn-tag bear">$60k −18.95M</span> crash-put residual,
              a <span className="dn-tag bear">−44.0M</span> negative shelf under
              the tape.{' '}
              <span className="dn-em">
                The change that matters: dealers are now SHORT gamma right at
                spot (the $64k −13.71M wall), so a move through $64k gets
                accelerated, not damped — the opposite of the clean dampening book
                the 08-10 note leaned on. The $65k–$72k positive band still totals
                ~+77M of overhead supply that caps a squeeze, but the floor cushion
                is now the $60k/$62k negative shelf, and there is negative gamma in
                between at $64k.
              </span>{' '}
              11AUG26 0.3DTE is <span className="dn-tag bear">−11.62M</span> (a
              NEGATIVE front chunk, unlike the +15.35M positive 0DTE the prior
              note carried) and settles at 08:00Z today — ~8h{' '}
              <em>after</em> this 00:05Z snapshot, so it is still live in the book
              (no settle-adjustment); removing it post-settle would lift the
              aggregate to roughly +45.9M − (−11.62M) = +57.5M. Forward expiries
              beyond the front are net positive: 12AUG 1.3 −2.83M, 13AUG 2.3
              +1.04M, 14AUG 3.3 +2.08M, 21AUG 10.3 +9.13M, 28AUG 17.3 +15.29M
              (heaviest), 25SEP 45.3 +12.60M, 30OCT 80.3 +0.78M, 25DEC 136.3
              +3.78M, 26MAR27 227.3 +1.22M, 25JUN27 318.3 +0.71M.{' '}
              <span className="dn-em">
                No large negative amplifier on any forward expiry — the two
                near-dated negatives (11AUG −11.62M, 12AUG −2.83M) are small and
                roll off within two days — but the strip is materially less
                long-gamma than 08-10, and the negative $64k wall is the new
                structural fact.
              </span>
            </p>

            <p>
              IV median across 794 instruments is{' '}
              <span className="dn-tag">41.2%</span> against 30D close-to-close RV
              of <span className="dn-tag">28.15%</span> — chain-level richness{' '}
              <span className="dn-tag">~+13.1pt</span>. A chain-median across N
              instruments, <span className="dn-em">not</span> a tradable spread;
              expiry-/strike-level vega, skew and term structure remain not
              loaded; the vol read stays framework-only. RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log
              returns anchored to parquet last bar 2026-08-11 00:06Z. Put/Call
              ratio 0.57, put OI 119,787 BTC, call OI 209,310 BTC — still a
              call-heavy book, consistent with the net-positive-gamma reading even
              as the aggregate halved.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · rates EASED (10Y −4bp to 4.65% EXTREME RISK-OFF, TIPS −3bp to 2.40%) · credit still RISK-ON (HY OAS 2.70%) · DXY flat 99.62 · MOVE unavailable · reclaim-long rates filter FALSE at 10bp (improving from 14bp) · BTC-vs-TradFi lag widened to −2.05pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                Rates eased and credit stayed calm — the macro tape is not the
                thing forcing the break
              </span>. Dashboard render is 2026-08-10 22:16Z, ~1.8h before the
              snapshot (rates rows updated; several FX / liquidity rows carry
              unchanged from the prior render). US 10Y nominal{' '}
              <span className="dn-tag bull">4.65% (−4.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.00</span>, episodic z{' '}
              <span className="dn-tag">+0.64</span> — EXTREME RISK-OFF, eased 4bp
              off the 08-10 note&rsquo;s 4.69%. 10Y TIPS real{' '}
              <span className="dn-tag bull">2.40% (−3.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.34</span> — EXTREME RISK-OFF,
              eased. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.33% (+5.0bp)</span>, episodic z{' '}
              <span className="dn-tag bear">+2.16</span> — firmer. HY OAS{' '}
              <span className="dn-tag bull">2.70% (−1.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.09</span>, episodic z{' '}
              <span className="dn-tag bull">−0.79</span> — RISK-ON, credit still
              calm. MOVE bond vol{' '}
              <span className="dn-tag stale">UNAVAILABLE</span> this render (fetch
              failed, second day). DXY{' '}
              <span className="dn-tag">99.62 (+0.02)</span>, episodic z{' '}
              <span className="dn-tag bull">−1.82</span> — flat. Fed net liquidity{' '}
              <span className="dn-tag">$5.840T (+0.014T)</span>, episodic z{' '}
              <span className="dn-tag">+2.47</span>. US-JP 10Y spread{' '}
              <span className="dn-tag bull">1.98% (−4.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag bull">157.84 (−0.57)</span> (yen firmer).
              NFCI −0.529 (loose, stale 10d).{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) is still FALSE
                at 4.65% — 10bp on the wrong side, but improving from the 08-10
                note&rsquo;s 14bp as 10Y eased. Rates are still the structural
                headwind (10Y and TIPS both EXTREME RISK-OFF), but they eased on
                the day and credit is RISK-ON, so the macro tape is NOT what broke
                the cap — the break is positioning-and-structure-driven. The
                BTC-vs-TradFi decoupling widened to −2.05pt this print (BTC +0.94%
                vs NQ +2.99% on 7d) from −1.92pt on 08-10 — BTC gave back ground
                while the risk engine kept running, so the lag re-opened.
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
                <tr><td>US 10Y nominal</td><td className="num">4.65%</td><td className="num bull">−4.0bp</td><td className="num bear">+2.00</td><td className="num">+0.64</td><td className="bear">EXTREME RISK-OFF · eased</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.40%</td><td className="num bull">−3.0bp</td><td className="num bear">+2.34</td><td className="num">+0.66</td><td className="bear">EXTREME RISK-OFF · eased</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.33%</td><td className="num bear">+5.0bp</td><td className="num">+1.58</td><td className="num bear">+2.16</td><td className="neut">no tag · episodic</td></tr>
                <tr><td>HY OAS</td><td className="num">2.70%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.09</td><td className="num bull">−0.79</td><td className="bull">RISK-ON · credit calm</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.529</td><td className="num">+0.00</td><td className="num">−0.65</td><td className="num bull">−1.00</td><td className="stale">loose · stale 10d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">unavailable this render</td></tr>
                <tr><td>DXY</td><td className="num">99.62</td><td className="num">+0.02</td><td className="num">+0.58</td><td className="num bull">−1.82</td><td className="neut">flat · tight regime</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.840T</td><td className="num">+0.014T</td><td className="num">−0.70</td><td className="num bear">+2.47</td><td className="neut">small weekly build</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.84</td><td className="num bull">−0.57</td><td className="num">+0.36</td><td className="num bull">−1.80</td><td className="bull">yen firmer</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.98%</td><td className="num bull">−4.0bp</td><td className="num">−0.38</td><td className="num">+0.64</td><td className="neut">neutral</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7467</td><td className="num">−0.00</td><td className="num bull">−1.41</td><td className="num bull">−1.63</td><td className="neut">no tag · loose</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.29%</td><td className="num bear">+4.0bp</td><td className="num bull">−0.45</td><td className="num bear">+1.94</td><td className="neut">no tag · episodic</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">monthly · stale 70d · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.211</span>{' '}
              (IDIOSYNCRATIC band, &lt; 0.25 — essentially flat vs the 08-10
              note&rsquo;s 0.207). BTC&rsquo;s listed ties: COPPER{' '}
              <span className="dn-tag">+0.340</span> (top), NQ{' '}
              <span className="dn-tag">+0.331</span>, GOLD{' '}
              <span className="dn-tag">+0.319</span>, TSLA{' '}
              <span className="dn-tag">+0.306</span>, SILVER{' '}
              <span className="dn-tag">+0.283</span>, SP500{' '}
              <span className="dn-tag">+0.274</span>, PLAT{' '}
              <span className="dn-tag">+0.269</span>, JP225{' '}
              <span className="dn-tag">+0.218</span>, EUR{' '}
              <span className="dn-tag">+0.186</span>, NVDA{' '}
              <span className="dn-tag">+0.183</span>. 7d performance:{' '}
              <span className="dn-tag bull">BTC +0.94%</span>, NQ{' '}
              <span className="dn-tag bull">+2.99%</span>, SP500{' '}
              <span className="dn-tag bull">+1.89%</span>, JP225{' '}
              <span className="dn-tag bull">+5.16%</span>, NVDA{' '}
              <span className="dn-tag bull">+6.04%</span>, MSFT{' '}
              <span className="dn-tag bull">+4.22%</span>, TSLA{' '}
              <span className="dn-tag bull">+2.82%</span>, SILVER{' '}
              <span className="dn-tag bull">+13.29%</span> (leader), PALL{' '}
              <span className="dn-tag bull">+9.44%</span>, GOLD{' '}
              <span className="dn-tag bull">+8.75%</span>, PLAT{' '}
              <span className="dn-tag bull">+7.67%</span>, URNM{' '}
              <span className="dn-tag bull">+7.16%</span>, COPPER{' '}
              <span className="dn-tag bull">+1.80%</span>; laggards GOOGL{' '}
              <span className="dn-tag bear">−4.31%</span>, AMZN{' '}
              <span className="dn-tag bear">−1.43%</span>. Energy: CL{' '}
              <span className="dn-tag bull">+0.70%</span>, BRENT{' '}
              <span className="dn-tag bull">+2.66%</span>, NGAS{' '}
              <span className="dn-tag bull">+0.75%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine widened to ~−2.05pt (BTC
                +0.94% vs NQ +2.99%) from −1.92pt on 08-10 — the gap re-opened
                because BTC gave back ground while risk kept climbing, the
                mirror-image of the prior note&rsquo;s &ldquo;narrowing because BTC
                held.&rdquo; Idiosyncratic-to-crypto stays the load-bearing read:
                at |r| 0.211 the tape is not moving BTC, positioning and structure
                are.
              </span>{' '}
              JGB monthly 2.67% carries an EXTREME RISK-OFF monthly tag (stale
              70d) — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · book FLAT (scout cut 08-09, no fresh trade) · scout re-entry NOT triggered — SM leg fired (flip to net long) but the cap-hold leg FAILED (cap lost on the 08-10 close) · chase-short STILL stood down but the case firmed (gamma halved, −13.71M $64k wall at spot, front 0DTE negative) — arms only on a flip/floor loss</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — the scout re-entry&rsquo;s two
                legs split
              </span>. The 08-10 note gated re-entry on both{' '}
              <em>SM net re-flattens ≥ −1k</em> AND{' '}
              <em>a 1d close holds &gt; D-EMA50 $64,661</em>, with an explicit
              hard rule: &ldquo;do not re-enter on price alone… the position book
              must re-flatten first.&rdquo; Today the two legs split the wrong
              way: the SM leg <em>fired</em> — and more than fired, SM flipped all
              the way to <span className="dn-tag bull">+2,947 net long</span> via a
              clean cross — but the cap-hold leg <em>failed</em>, the 08-10 close
              $63,939.30 lost the D-EMA50 cap. A re-entry now would be entering on
              a bullish position book into a <em>broken</em> cap, which is the
              inverse of the prior note&rsquo;s warned false-start (price up, SM
              still short). Same discipline applies: don&rsquo;t chase on one leg.{' '}
              <span className="dn-em">
                So the scout stays deferred, and the bar is now higher: the
                re-entry needs a genuine RECLAIM of the cap (a 1d close back &gt;
                D-EMA50 $64,597) with SM still long — not just the SM flip it
                already has.
              </span>{' '}
              The chase-short is <em>still</em> stood down — spot holds above the
              $63,481 flip and the $63,761 200W floor, and aggregate gamma is
              still net positive (+45.9M) — but the down-side case firmed
              materially: gamma halved, a{' '}
              <span className="dn-tag bear">−13.71M $64k wall</span> now sits at
              spot (dealers short gamma into a move through $64k), the front
              11AUG 0DTE is <span className="dn-tag bear">−11.62M</span>, and the
              MTF regime flipped to reversal with 8h/12h/1d death crosses. It is
              not armed, but it is one 1d close (through the flip/floor) from
              being a real question.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · scout re-entry · DEFERRED · SM leg fired (net-long flip) but cap-hold leg FAILED (cap lost) — bar raised to a cap RECLAIM</span>
              <div className="dn-trade-name">
                Cover-bounce scout re-entry — deferred; the position book turned bullish (SM +2,947) but price broke the D-EMA50 cap on the 08-10 close, so the re-entry now needs a cap reclaim, not just the SM flip
              </div>
              <div className="dn-thesis">
                The bullish thread is real but incomplete. SM flipped from −3,405
                to +2,947 through a clean zero-cross (not the BJ 15:01 artifact
                that muddied the 08-10 roll-back), a heavy spot bid absorbed near
                the $63.8k–$64.0k lows in the last 4h, funding cooled hard on the
                live print, the HTF bottom-div cluster (12h/1w) survived, and the
                1M ⚡TD9 BUY holds. What is missing is the level: the 08-10 close
                $63,939.30 lost the D-EMA50 cap, the mid-book (8h/12h/1d) rolled
                to death crosses, and dealers went short gamma at $64k. The prior
                note&rsquo;s discipline — re-enter only when BOTH the position book
                and the cap agree — now cuts against a re-entry, because the cap
                leg flipped from pass to fail even as the SM leg went from fail to
                pass. Status: <em>deferred / no position</em>. The scout waits for
                the cap to be RECLAIMED with SM still long.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm trigger (both legs)</span><span className="dn-lvl-v bull">1d close back &gt; D-EMA50 cap $64,597 (a genuine reclaim, not just an intraday tag) AND SM net still &gt; +1k → scout long 0.2R starter</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on the two-leg print, scout long 0.2R starter · add 0.2R only on a 1d close extending &gt; the stalled $65,370 high with OI rebuilding</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1d close &lt; $63,481 (0γ flip) / $63,761 (200W floor) — a close below ends the digestion read and re-opens the chase-short</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$66,763 (D-EMA100) / $67,087 (W-EMA200) confluence, then $67,594 (D-SMA100)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R starter · 0.4R max · take half at the $66.8k–$67.1k confluence</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R (illustrative):</b> re-arm entry ~$64,597 (cap reclaim),
                stop $63,481 (flip) = ~$1,116 risk; first target $66,763
                (D-EMA100) = ~$2,166 reward ≈ 1.9:1. <b>Hard rule:</b> do not
                re-enter on the SM flip alone — a bullish position book under a
                broken cap is the mirror of the false start the prior note warned
                about (price up, book short). The cap must be reclaimed on a close
                first; a spot bounce to $64.6k intraday with the cap still lost on
                the daily is a false start (it can spike on a short-cover before
                the level is actually retaken).
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · chase-short · STILL stood down — spot above flip/floor, gamma net positive — but the case FIRMED (gamma halved, $64k negative wall, front 0DTE negative)</span>
              <div className="dn-trade-name">
                Chase-short — not armed, but closer than 08-10: the dampening book thinned (gamma +111.3M → +45.9M), a −13.71M $64k wall sits at spot, and the front 11AUG 0DTE is −11.62M; arms on a 1d close through the flip/floor
              </div>
              <div className="dn-thesis">
                A short-side press requires the dealer book to lose its net-long
                gamma and price to lose the flip / floor. Both are closer than the
                08-10 note but neither has cleared: aggregate GEX is +45.9M (still
                net positive, but halved and with a negative $64k wall at spot),
                the flip sits $63,481 with spot +0.73% above, and the 200W cycle
                floor ($63,761) is +0.29% above spot. The SM long flip actually
                cuts against a short here — the position book turned bullish — but
                the structural deterioration (halved gamma, negative wall at spot,
                negative front 0DTE, MTF reversal regime, cap lost) means a 1d
                close through the flip/floor would arm the press quickly, toward
                the $60k −18.95M crash-put shelf.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">arm condition</span><span className="dn-lvl-v bear">1d close &lt; $63,481 flip / $63,761 200W floor AND aggregate GEX flips negative (the $64k / $62k / $60k negative shelf pulling the aggregate under zero) → arm short toward the $60k −18.95M crash-put</span></div>
                <div><span className="dn-lvl-k">floor watch</span><span className="dn-lvl-v bull">200W sma200 $63,761 (JSON recomputed 08-10 00:11Z, ~24h stale, carried) — a weekly close below ends the cycle-floor read; currently +0.29% clear, next weekly settle 08-16</span></div>
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">stood down · no short while spot holds above the flip/floor and aggregate gamma is net positive — but the −13.71M $64k wall means a break of $64k gets dealer-accelerated, not damped</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> the book is no longer the clean dampening clamp
                of 08-10 — with dealers short gamma at $64k, a move down through
                the flip/floor would be amplified rather than bid. But shorting a
                stall that still sits above the flip AND the cycle floor, with SM
                freshly flipped long, is premature; wait for the level to break on
                a close. The tell is the $64k wall: if spot loses it on a daily
                and the aggregate flips negative, the chase-short is live.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · the reclaim is falsified · regime shifted from digestion-above-cap to failed-reclaim testing the floor</span>
              <div className="dn-trade-name">
                Reclaim lifecycle — the 08-07 D-EMA50 reclaim ran its course: three closes of stall, then the 08-10 close lost the cap; the read is now a failed reclaim on its floor, with an SM long flip as the lone divergence
              </div>
              <div className="dn-thesis">
                The reclaim that the lineage tracked from 08-07 — three completed
                closes above the D-EMA50 cap — is now falsified: 08-10 closed
                $63,939.30, under the cap, and the mid-book confirmed with fresh
                8h/12h/1d death crosses and a regime flip to 6/9 reversal. This is
                the same shape the 08-10 note flagged as the escalation path (&ldquo;a
                1d close &lt; D-EMA50, then &lt; flip / floor&rdquo;): the first leg
                fired, the second has not. The one genuine counter-signal is the SM
                flip to net long +2,947 on a clean cross, alongside the absorbed
                spot bid at the lows and the surviving HTF bottom-div — a book that
                is buying the break even as the structure rolls.{' '}
                <span className="dn-em">
                  The regime read has shifted from digestion-above-cap to
                  failed-reclaim-on-its-floor. The framework watches which resolves:
                  the SM long flip + absorbed bid dragging price back above the cap,
                  or the halved gamma + negative $64k wall + rolled MTF dragging a
                  close through the flip/floor.
                </span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">falsified</span><span className="dn-lvl-v bear">the 08-07 D-EMA50 reclaim — 08-10 closed $63,939.30 below the cap $64,597; digestion-above-cap thesis ended</span></div>
                <div><span className="dn-lvl-k">counter-signal (lone divergence)</span><span className="dn-lvl-v bull">SM flipped −3,405 → +2,947 net long via a clean BJ 00:41 cross; 4h absorbed spot bid +2,429 CVD at the $63.8k–$64.0k lows; HTF bottom-div 12h/1w survived; 1M ⚡TD9 BUY holds</span></div>
                <div><span className="dn-lvl-k">structural deterioration</span><span className="dn-lvl-v bear">gamma +111.3M → +45.9M, −13.71M $64k wall at spot, 11AUG 0DTE −11.62M; MTF 8h/12h/1d death crosses, regime 6/9 reversal; OI −834/24h; perp discount −$70</span></div>
                <div><span className="dn-lvl-k">resolution levels</span><span className="dn-lvl-v">up: 1d close &gt; D-EMA50 $64,597 (reclaim, re-arms scout) · down: 1d close &lt; $63,481 flip / $63,761 floor (break, arms chase-short toward $60k)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a falsified thesis is a signal, not a
                thing to defend — the reclaim is done and the note says so plainly.
                But a failed reclaim that holds its floor with the position book
                flipping long is not the same as a breakdown; the flip/floor band
                ($63,761 / $63,481) is the line that separates &ldquo;stall that
                re-bases&rdquo; from &ldquo;first structural break.&rdquo; Trade
                neither side until that line resolves on a close.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the cap broke on the 08-10 close (thesis falsified) but the flip/floor band held · SM flipped net long into the break (divergence) · scout re-entry needs a cap RECLAIM now · chase-short arms only on a flip/floor loss</span>
            </h2>

            <p>
              Of the 08-10 decision conditions: the certified SM roll-back-short
              REVERSED — SM flipped back to net long +2,947 on a clean cross (the
              08-10 short was itself artifact-crossed; today&rsquo;s long is not);
              the scout re-entry DID NOT TRIGGER (the SM re-flatten leg fired but
              the cap-hold leg failed — the 08-10 close lost the cap); the
              cap-lost escalation FIRED (1d close $63,939.30 &lt; D-EMA50 cap, the
              first structural break of the reclaim); the deeper flip/floor cut
              DID NOT FIRE (closes and spot hold above the $63,481 flip and the
              $63,761 200W floor); the chase-short re-arm DID NOT FIRE (gamma
              still +45.9M net positive, spot above the flip) though the case
              firmed; the funding re-heat REVERSED (live cooled to +2.41% off the
              window high, first leverage-off leg). <em>The cap-lost condition
              fired clean and falsified the digestion-above-cap thesis; the SM
              rolled the opposite way (net long) as a divergence; the deeper
              flip/floor break has not fired; and the structural backdrop — gamma,
              MTF, the $64k wall — deteriorated across the board.</em> The
              conditions re-set around a flat book, a lost cap, a held flip/floor,
              and a bullish-but-diverging position book:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Cap lost (FIRED — first structural break)</td><td className="bear">1d close $63,939.30 &lt; D-EMA50 cap (~$64,660 at the 08-10 close); spot now −1.01% below the cap $64,597</td><td>digestion-above-cap thesis falsified; the reclaim lifecycle is over — the note leads with the break, does not defend the reclaim</td></tr>
                <tr><td>SM flipped net long (divergence)</td><td className="bull">SM net −3,405 → +2,947 (long +3,440, short −2,912) via a CLEAN BJ 00:41 zero-cross (not the BJ 14–15 artifact), net-long ~7h (stabilized ~+2.6k–2.95k after BJ 03:05)</td><td>the lone bullish structural counter-signal; it raises the scout re-entry&rsquo;s SM leg to met, but does NOT trigger entry on its own</td></tr>
                <tr><td>Scout re-entry (long) — deferred, bar raised</td><td className="bull">1d close back &gt; D-EMA50 cap $64,597 (reclaim) AND SM net still &gt; +1k</td><td>scout long 0.2R starter; add 0.2R only on a 1d close &gt; $65,370 with OI rebuilding; target $66,763 / $67,087</td></tr>
                <tr><td>Flip / floor break (structural escalation)</td><td className="bear">1d close &lt; $63,481 (0γ flip) / $63,761 (200W floor)</td><td>the first real breakdown below the reclaim base; ends the &ldquo;failed-reclaim-on-its-floor&rdquo; read and arms the chase-short question toward the $60k −18.95M crash-put</td></tr>
                <tr><td>Chase-short re-arm (case firmed, not armed)</td><td className="bear">1d close &lt; flip/floor AND aggregate GEX flips negative (the $64k/$62k/$60k shelf pulling it under zero)</td><td>arm short toward the $60k crash-put; the −13.71M $64k wall means a break of $64k gets dealer-accelerated — the base rate rose vs 08-10 but the trigger has not fired</td></tr>
                <tr><td>Funding cooled / retail crowded (watch)</td><td className="bear">live funding +2.41% (24h mean +7.95%, 0/1441 negative); mkt_long 61.60% (+7.82pt)</td><td>no action — the live cooling is the constructive thread, but retail crowding the dip into a break is the contrarian caution; a funding negative print + retail de-crowd would strengthen the scout case if it comes with the cap reclaim</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">10Y &lt; 4.55% close — FALSE at 4.65% (10bp on the wrong side, improving from 14bp)</td><td>standalone filter still false but easing; a macro tailwind for the scout would need 10Y back under 4.55%</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the failed reclaim re-bases off the flip/floor (the SM
                long flip + the absorbed spot bid + the surviving HTF bottom-div
                dragging a 1d close back above the D-EMA50 cap $64,597), or whether
                the structural deterioration resolves lower — a 1d close losing the
                $63,481 flip / $63,761 200W floor, which arms the chase-short
                toward the $60k −18.95M crash-put with dealers short gamma at $64k
                accelerating the move
              </span>. The book is flat and stays flat; the scout re-entry is
              deferred with the bar raised to a cap reclaim (the SM flip alone is
              not enough); the chase-short is stood down but one close from a real
              question. The reclaim that ran from 08-07 is falsified — three closes
              of stall then a close under the cap — and the structure has
              deteriorated (gamma halved, a negative $64k wall at spot, the mid-MTF
              rolled to death crosses, a widening perp discount). What holds it
              together is thin but real: spot is still above the flip and the cycle
              floor, SM flipped net long on the cleanest cross of the lineage, and
              a spot bid absorbed at the lows. The right read for the next 24h is{' '}
              <em>flat and patient — do not re-enter the long on the SM flip until
              the cap is reclaimed on a close, and do not short until the flip/floor
              breaks on a close</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit ·
              audits/2026-08-11-desk-note.md)
            </span>
            <b>Status:</b> v1 → v2 promoted after the STAGE B codex hostile-but-fair
            pass. Verdict PASS-WITH-NOTES — 0 CRITICAL, 1 MAJOR, 1 MINOR; both
            findings applied in EN+ZH and grep-closed to zero stale matches before
            promotion. Findings, with the grep-closure record (patterns searched ·
            hits before → after):{' '}
            <b>DN-001 (MAJOR — weekly MA source scope overstated).</b> The draft
            claimed the parquet source held only 190 weekly bars and that W-SMA200
            was non-computable; the declared full 2019–2026 wildcard parquet
            resamples to 363 W-SUN weekly bars, so W-SMA200 IS computable and
            prints $63,984 (−0.06% vs live spot $63,944.50, effectively at spot) —
            adjudicated by direct recompute, and every displayed W-SMA level
            (SMA20/50/100/150) already matches the full-history mean exactly.
            Fix: removed the &ldquo;190 bars / non-computable&rdquo; claim
            everywhere, added W-SMA200 $63,984 (−0.06%) to the near-spot cluster
            in the lead, the structure ladder, the manifest and this trace, and
            noted it is distinct from the trap-watch cycle-floor sma200 $63,761
            (different weekly basis). Patterns searched: &ldquo;190 weekly
            bars&rdquo;, &ldquo;190 bars&rdquo;, &ldquo;non-computable&rdquo;,
            &ldquo;needs 200&rdquo;, &ldquo;computes at 190&rdquo;; hits before 5 →
            after 0. <b>RESOLVED.</b>{' '}
            <b>DN-002 (MINOR — SM stability wording overstated duration + range).</b>{' '}
            The tape supports net-long for ~7h off the clean BJ 00:41 zero-cross,
            not &ldquo;stable ~+2,900–2,965 for ~7h&rdquo; — checkpoints were
            +190.9 (BJ 01:05), +738.0 (02:05), +2,646.1 (03:05), +2,603.2 (05:05),
            +2,712.8 (07:05), +2,946.85 (08:05). Fix: rephrased every instance to
            &ldquo;net-long for ~7h; stabilized ~+2.6k–2.95k after BJ 03:05; final
            print +2,947&rdquo; (dn-meta, section I prose, decision table). Patterns
            searched: &ldquo;stable ~+2,900&rdquo;, &ldquo;+2,965&rdquo;,
            &ldquo;stable ~7h&rdquo;, &ldquo;stable&rdquo;; hits before 3 → after 0.
            <b>RESOLVED.</b> Both findings RESOLVED (hits-after = 0); no UNRESOLVED
            residue, so v2 promotion proceeded. The self-contained arithmetic a
            reviewer should re-attack: funding × 1095 (live +2.41% ann from raw
            0.002203, 24h mean +7.95%, range +2.38% / +10.95%, 0/1441 negative); the
            GEX dual-reference sign (flip $63,481, spot +0.73% / Deribit idx +1.18%,
            both positive, tile rounds spot side to +0.73%); the SM flip (−3,405 →
            +2,947, long +3,440, short −2,912, Δnet +6,352) via the clean BJ 00:41
            08-11 (16:41Z 08-10) zero-cross — NOT the BJ 14–15 artifact — net-long
            ~7h with the +1,365 single-min step at BJ 02:41 disclosed and
            |Δ|/prior_net = 1.87 noted as a full flip rather than a cut fraction;
            the MA matrix vs live spot $63,944.50 off parquet 2026-08-11 00:06Z
            close $63,910.30 (D-EMA50 cap $64,597, spot −1.01% below; the 08-10
            completed close $63,939.30 below the cap = cap lost; W-SMA200 computes
            $63,984 (−0.06%) off the full 363-bar wildcard source; W-EMA150/200
            seed-disclosed); the 200W floor 6th above-floor weekly close (08-09
            $64,867.80 vs sma200 $63,760.71, +1.74%; JSON recomputed 08-10
            00:11:24Z, now ~24h stale, carried, no fresh weekly settle); 30D RV
            28.15% (30 returns); the GEX aggregate halving (+111.3M → +45.9M) and
            the negative cluster $60k/$62k/$64k = −44.0M with the $65k–$72k positive
            band ~+77M; the 11AUG 0DTE −11.62M front chunk (settles 08:00Z, ~8h
            after snapshot, ex-11AUG ≈ +57.5M); cross-asset (|r| 0.211, BTC +0.94%
            vs NQ +2.99% = −2.05pt); macro Tier-1 (10Y 4.65% −4bp, TIPS 2.40%, HY
            OAS 2.70% −1bp, DXY 99.62, Fed net liq $5.840T, MOVE unavailable); the
            reclaim-long rates filter FALSE at 10bp; claims-vs-loaded-data (NTT /
            max-pain / strike-IV / BTC-NQ framework-only; JGB monthly do not lean;
            IV chain-median across 794 instruments not a tradable spread); EN/ZH
            parity (ZH authored forward in STAGE C, native CN voice, same numbers +
            caveats); and the requireViewer gating pattern (first statement of the
            default export). <b>Build note (INFO):</b> the lineage runs{' '}
            <code>npx --no-install next build</code> as the publish gate in STAGE
            E; STAGE A/C validate with{' '}
            <code>npx --no-install tsc --noEmit</code>.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-08-11 00:08Z, tape
            anchor 00:05Z) with section-level provenance disclosed in the
            manifest band above; the macro Tier-1 panel render is 2026-08-10
            22:16Z (~1.8h before snapshot) and some inputs are explicitly stale
            or unavailable (MOVE) and flagged as such. Levels, sizes, and
            conditions are illustrative of the desk&rsquo;s process, not standing
            recommendations. Past correlation, gamma, and positioning patterns
            do not bind future tape. Derivatives carry the risk of total loss
            and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The reclaim lost its cap on the 08-10 close, and the structure
                rolled with it. Smart money flipped long into the break — the lone
                divergence. Flip and floor still hold. Flat and patient: no long
                until the cap is reclaimed, no short until the floor breaks.
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
            v2 · 2026-08-11 00:08Z snapshot · post codex hostile audit
            (audits/2026-08-11-desk-note.md) · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · ma200w_trap_watch_state.json · FRED · Yahoo ·
            Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
