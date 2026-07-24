import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-24 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-24',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-24' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260724() {
  await requireViewer('/desk/2026-07-24');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-24 · v2</span>
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
              <span className="dn-big">$65,015</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.78%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-24 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-24 00:07Z (snapshot pin · row t=&ldquo;07-24 08:07&rdquo; BJ)</td>
                  <td className="dn-flag">
                    fresh · 1-min · file tail at read time = pin · `t` field is
                    BJ-local (UTC+8); the 00:07Z anchor is BJ 08:07 07-24 · the live
                    tape keeps appending under-foot, so all windows are frozen to this
                    pinned row · 24h deltas use a 1,440 one-minute-interval / 1,441
                    sampled-row-inclusive window (baseline t=&ldquo;07-23 08:07&rdquo;
                    through pin t=&ldquo;07-24 08:07&rdquo;), giving spot
                    −1.78% and OI +2.20% / +2,244.3 BTC · NO cb_cvd / fut_cvd reset prints
                    inside the 24h window, so the raw endpoint CVD deltas are valid as read
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · header scan 2026-07-24 08:01 BJ / 00:01Z (~6 min stale vs 00:07Z anchor · in-progress bars)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · archived verbatim to
                    /opt/desk-note/snapshots/2026-07-24-0007/ · scan spot $65,060,
                    24h −1.55%, H/L $66,284 / $64,636, qVol $8.14B (candle-based, an
                    independent source from the live tape) · all closes provisional
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-24 00:00Z snapshot</td>
                  <td className="dn-flag">
                    archived to the 2026-07-24-0007 snapshot dir · ~7-min stale vs the
                    00:07Z anchor · 872 instruments · Deribit idx $65,296 vs live spot
                    $65,015 ($281 above) · 24JUL 0.3DTE +31.67M settles at 08:00Z today
                    (~8h after snapshot) · aggregate read from the HTML headline total
                    (+262.1M / 1% move) · NOTE non-reconciling panel: the by-expiry rollup
                    sums to +235.94M (= gex_summary.json net_gex $235,937,990), ~+26.16M
                    BELOW the headline (the headline is the higher figure this run — the
                    opposite sign of the 07-23 gap where the rollup was higher) — disclosed
                    not resolved · essentially flat vs +261.9M on 07-23, still deeply
                    net-long-gamma
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-24 00:00Z
                  </td>
                  <td className="dn-flag">archived to 2026-07-24-0007 · 7d 1h bars · 22 assets · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-23 22:16Z render</td>
                  <td className="dn-flag">
                    archived to 2026-07-24-0007 · ~1.9h render lag vs the 00:07Z anchor
                    (the freshest macro read of the recovery) · FRED Tier-1: 10Y nominal
                    4.67% (+4bp), TIPS 2.39% EXTREME, HY OAS 2.68% (−1bp), DXY 101.44,
                    MOVE 76.3 (+5.43), Fed net liq $5.917T (drained $69B) · Tier-3 CPI
                    rows monthly/stale
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-24 00:06Z</td>
                  <td className="dn-flag">
                    ~1-min stale vs snapshot anchor (close $64,955.60) · offsets
                    recomputed vs live spot · matrix intentionally computed from the
                    btcusdt_1m_&#123;2024,2025,2026&#125;.parquet subset (936 daily bars
                    including the in-progress 07-24 bar / 935 completed daily · 134
                    weekly bars), distinct from the full 2019–2026 wildcard history · so
                    W-SMA150 / W-SMA200 non-computable (134 weekly bars on file); the 200W
                    cycle floor is a separate lineage from ma200w_trap_watch_state.json,
                    not this matrix
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle floor (weekly 200-SMA)</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · recomputed 2026-07-20 00:11Z</td>
                  <td className="dn-flag">
                    runbook&rsquo;s weekly_200sma.json is ABSENT this run · floor read
                    from the maintained trap-watch state = $63,078.14 (last completed
                    week 2026-07-19 close $64,694.70, 3 consecutive weekly closes above,
                    streak start 07-05) · ratio_pctile / last-event NOT available
                    (weekly_200sma.json is where those live) — not fabricated · slow
                    weekly level (a few-days-stale recompute is fine for a weekly floor)
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
              <span className="dn-v bull">+8.11%</span>
              <span className="dn-src">live · raw 0.007407 × 1095 = +8.11% ann (long-pay) · 24h mean +3.98% · 375 rows pinned at the +10.95% Binance cap (window 16:38Z–22:52Z 07-23) AND 466 negative rows (between first 00:07Z and last 12:41Z 07-23, in discontinuous blocks, the short-pay flush the 07-23 note logged) — the 24h did a full round trip: short-pay flush → long-crowd cap → +8.11% into the snap</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">round trip · range −2.08% / +10.95%</span>
              <span className="dn-src">funding opened short-pay (the 07-23 flush), crossed positive mid-window, pinned the +10.95% cap for 375 rows in the back half, then eased to +8.11% · 24h mean +3.98% · the leverage book flushed the crowded long and then re-crowded it right back to the cap — a long-crowded expansion, not a clean-out</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+2.20% (+2,244.3 BTC)</span>
              <span className="dn-src">live · 102,251.2 → 104,495.5 BTC · first expansion after two contractions (07-22 −2.16%, 07-23 −1.40%) — but on a −1.78% 24h down-print with taker/big-print net SELLING, SM adding shorts and retail crowding longs · this is a distribution / crowded-long expansion, NOT fresh demand lifting OI</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">60.30 / 39.70</span>
              <span className="dn-src">live_db `mkt_long_pct` · rose from 54.64 → 60.30 (+5.66pt) over 24h · 24h range 54.25 / 61.15 — retail is now the most crowded-long of the recovery, chasing the reclaim into a third pullback print while funding pays that long at the cap · the crowded side is the long</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+5.70k (net LONG)</span>
              <span className="dn-src">live · long 15.28k − short 9.58k · SM has held net-long continuously since the 2026-07-21 06:36Z (BJ 14:36) cross · vs the 07-23 note&rsquo;s +6,528 that is −830 — the buyer of record stayed net long through a third pullback print but TRIMMED the position and added shorts</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · 24h</span>
              <span className="dn-v bear">+6,626.6 → +5,698.0 (Δnet −928.6, cut 14.0%)</span>
              <span className="dn-src">|Δ|/prior_net = 928.6 / 6,626.6 = 14.0% · Δlong +263.8 / Δshort +1,192.4 — longs barely added while shorts grew nearly 5× as fast, a net trim from the long side · no discrete step |Δnet| &gt; 700 BTC in the window (a gradual bleed, not a flip) · SM net 24h hi +7,582 @ BJ 19:56, lo +5,255 @ BJ 23:11</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.8% / 30.32%</span>
              <span className="dn-src">GEX median IV · 872 inst · P/C 0.44 (put/call OI 136,396 / 309,600) · chain-median across N instruments, not a tradable spread · 30D close-to-close RV 30.32% (logret.std×√365×100, 30 returns, parquet last bar 00:06Z)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+5.11% (above)</span>
              <span className="dn-src">flip $61,853 · vs live spot $65,015.45 (+5.11%; 65,015.45/61,853.45 − 1 = 5.113%) / GEX file Deribit idx $65,295.9 (+5.57%; 65,295.9/61,853.45 − 1 = 5.566%) — both refs positive · aggregate +262.1M net-long-gamma (essentially flat vs +261.9M on 07-23, still the deepest band of the recovery)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The reclaim&rsquo;s first real test failed — 07-23 closed below the
                D-EMA50 cap, and the cap has flipped from support to overhead
                resistance
              </span>. BTC prints <span className="dn-tag bear">$65,015</span> live,{' '}
              <span className="dn-tag bear">−1.78%</span> on 24h — a third consecutive
              negative 24h print (07-24 in-progress) — and the completed 07-23 daily close{' '}
              <span className="dn-tag bear">$65,069.60 printed BELOW the D-EMA50
              $65,103</span>, the first daily close beneath the entry-validation cap
              since the reclaim began, breaking the leg-1 cap-hold the scout was armed
              on. Spot now sits <span className="dn-tag bear">−0.13% below the D-EMA50
              $65,103</span> — the level that was +0.77% of support cushion on 07-23 is
              now overhead resistance.{' '}
              <span className="dn-signal">
                And the OI expansion is the wrong kind
              </span>: OI <span className="dn-tag bear">EXPANDED +2.20% (+2,244 BTC)</span>{' '}
              — the first expansion after two contractions — but on a down-print with
              taker/big-print <span className="dn-tag bear">net SELLING</span> (24h
              taker-net −1,979, big-net −2,200), SM <span className="dn-tag bear">adding
              +1,192 short</span> and retail crowding to{' '}
              <span className="dn-tag bear">60.30% long</span> (the most crowded of the
              recovery). That is distribution / crowded-long expansion, not the
              demand-fuelled OI-up the scout wanted. The leverage book did a{' '}
              <span className="dn-em">full round trip</span> — funding flushed short-pay
              (466 negative rows) then pinned the +10.95% Binance cap for 375 rows then
              eased to <span className="dn-tag bull">+8.11%</span> into the snap.{' '}
              <span className="dn-signal">
                So the scout moves ARMED → DEFERRED on the cap loss
              </span>. Smart money is still net long (<span className="dn-tag bull">+5,698</span>,
              continuous since the 07-21 cross) — the buyer-of-record leg is still TRUE
              — but it TRIMMED (Δnet −928.6, cut 14.0%, +1,192 short) into the break.
              The floor holds: W-SMA200 <span className="dn-tag bull">$63,078</span>, spot
              +3.07% above, three weekly closes above. And the dealer book stays deeply
              positive-gamma (<span className="dn-tag bull">+262.1M</span>, flip $61,853
              spot +5.11% above), so the chase-short stays{' '}
              <span className="dn-em">stood down</span>. This note marks the recovery&rsquo;s
              first failed test: the cap that gated the long is lost, the OI grew on
              distribution not demand, and the buyer of record is trimming — armed
              patience becomes deferred patience, but nothing has broken the floor.
            </p>

            <p>
              BTC prints <span className="dn-tag">$65,015</span> live,{' '}
              <span className="dn-tag bear">−1.78%</span> on 24h — the third pullback
              print in a row (spot is <span className="dn-tag bear">−0.94% below the 07-23
              note&rsquo;s $65,634</span>), within a{' '}
              <span className="dn-tag">$66,299 / $64,684</span> range (high @ BJ 08:27
              07-23 / UTC 00:27 07-23 — effectively the prior session&rsquo;s top — low @
              BJ 02:00 07-24 / UTC 18:00 07-23). The tape has bled steadily lower off the
              $66,299 high toward the $64,684 low and chopped just above it into the
              snap.{' '}
              <span className="dn-signal">The cycle floor is settled and still holds on
              the weekly closes that count</span>: the trap-watch W-SMA200 floor is{' '}
              <span className="dn-tag bull">$63,078</span>, the last completed weekly
              close (2026-07-19 $64,694.70) is the third consecutive weekly close above
              it (streak start 07-05), and spot sits{' '}
              <span className="dn-tag bull">+3.07% above the floor</span>. But the MA
              matrix now holds only <span className="dn-em">three positive daily
              lines</span> — the D-EMA50 flipped overhead: D-EMA20 $64,368 (+1.01%),
              D-SMA20 $64,260 (+1.18%), D-SMA50 $63,149 (+2.96%), the D-SMA50 shelf again
              almost exactly on the floor ($63,149 vs $63,078, a ~$70 support band). The
              first overhead line is now the lost cap itself —{' '}
              <span className="dn-tag bear">D-EMA50 $65,103 (−0.13%)</span> — then{' '}
              <span className="dn-tag bear">D-EMA100 $67,917 (−4.27%)</span>, the working
              first target on any re-arm.{' '}
              <span className="dn-em">
                Read straight: the floor held but the cap did not. Price lost the D-EMA50
                on a completed close for the first time in the recovery, OI grew on
                distribution rather than demand, and smart money — still net long — is
                trimming into the down-leg. The scout&rsquo;s hard SM leg is intact but
                its cap-hold leg is now FALSE; the desk steps the scout back to deferred
                and waits for the cap to be reclaimed on an up-close.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · SM stayed net-long but TRIMMED into the third pullback print (cut 14.0%, added +1,192 short) · funding round-tripped short-pay → +10.95% cap → +8.11% · OI EXPANDED but on distribution (taker/big net selling, retail crowded 60.30% long) · perp/spot both offered on 24h</span>
            </h2>

            <p>
              <span className="dn-signal">
                The buyer of record is still net long but stepped back — smart money
                trimmed its position and added shorts into the third pullback rather
                than defending it
              </span>. SM net is <span className="dn-tag bull">+5,698</span> (long
              15,277 − short 9,579) vs the 07-23 note&rsquo;s +6,528 — down −830
              note-to-note. Over the pinned 24h window Δnet is{' '}
              <span className="dn-tag bear">−928.6</span> on Δlong{' '}
              <span className="dn-tag">+263.8</span> and Δshort{' '}
              <span className="dn-tag bear">+1,192.4</span> — longs barely added while
              shorts grew nearly five times as fast, a net trim driven from the short
              side (cut fraction 14.0% = 928.6 / 6,626.6, off the 24h-open net of
              +6,626.6). There was <span className="dn-em">no discrete step |Δnet| &gt;
              700 BTC</span> in the window — this is a gradual bleed, not a flip: SM net
              24h high <span className="dn-tag bull">+7,582 @ BJ 19:56 07-23 /
              UTC 11:56 07-23</span>, low +5,255 @ BJ 23:11 07-23 / UTC 15:11 07-23, and
              short_btc built to a 24h high <span className="dn-tag bear">9,819.8 @
              BJ 06:46 07-24 / UTC 22:46 07-23</span> from a low of 7,668.4 @ BJ
              19:56, easing to 9,579 into the snap. The net-long has held continuously
              since the <span className="dn-tag">2026-07-21 06:36Z (BJ 14:36)</span> cross
              (no net-short row since), so the buyer-of-record leg is still TRUE — but it
              is a trimming buyer, not a defending one.
            </p>

            <p>
              The leverage side round-tripped and re-crowded the long.{' '}
              <span className="dn-signal">
                Funding did a full round trip over the 24h — short-pay flush, then a long
                pin at the +10.95% Binance cap, then an ease to +8.11%
              </span>: live <span className="dn-tag bull">+8.11% ann</span> (raw 0.007407
              × 1095), 24h range <span className="dn-tag">−2.08% / +10.95%</span>, 24h mean{' '}
              <span className="dn-tag">+3.98%</span>, with{' '}
              <span className="dn-tag bear">466 negative rows</span> (the 07-23 short-pay
              flush, discontinuous blocks between first 00:07Z and last 12:41Z 07-23) AND{' '}
              <span className="dn-tag bear">375 rows pinned at the +10.95% cap</span>
              {' '}(window 16:38Z–22:52Z 07-23). The book flushed the crowded long the
              07-23 note flagged and then re-crowded it right back to the cap — funding is
              taxing the long again, not subsidizing it, the opposite of yesterday&rsquo;s
              read. OI Δ <span className="dn-tag bear">+2,244.3 BTC (+2.20%)</span> over
              24h — <span className="dn-em">OI EXPANDED for the first time in three
              days</span> (102,251 → 104,495; 07-22 −2.16%, 07-23 −1.40%) — but the
              expansion is distribution, not demand: it prints on a −1.78% 24h down-print with
              taker/big-print net selling, SM adding +1,192 short, and retail crowding to
              60.30% long (see windowed flow). Retail{' '}
              <span className="dn-tag bear">mkt_long_pct 60.30%</span> re-crowded up from
              54.64% (+5.66pt, 24h range 54.25 / 61.15) — the most crowded-long of the
              recovery, chasing the reclaim into the third pullback print. Perp trades a{' '}
              <span className="dn-tag bear">−$49.56 discount</span> to spot at the snap
              (1h mean −$50.09, 4h −$50.92, 24h −$44.05, range −$122.21 / +$33.23 —
              deeply and persistently offered, only briefly premium). 1-min aggressor
              skew snap <span className="dn-tag bear">−10.6</span> (1h mean −9.98, 24h
              −2.75, range −49.60 / +41.60) — leaning seller into the snap.{' '}
              <span className="dn-em">
                OI expanding + funding re-crowded to the cap + retail at 60.30% long + SM
                adding shorts: this is a crowded-long distribution, the exact opposite of
                the fresh-demand OI-up the scout wanted. The clean tell the scout still
                needs is an up-close that reclaims the D-EMA50 with OI expanding on
                buyers, not on a crowded long being distributed into.
              </span>
            </p>

            <p>
              Windowed flow is <em>a distribution day — OI grew while the aggressor and
              big-print sides sold and spot stayed roughly flat only in the last
              hours</em>. 24h: price <span className="dn-tag bear">−1.78%</span>, OI{' '}
              <span className="dn-tag bear">+2,244 BTC</span>, spot CVD{' '}
              <span className="dn-tag">Δ −20.4</span> (roughly flat spot), futures CVD{' '}
              <span className="dn-tag bear">Δ −1,979</span>, big-print{' '}
              <span className="dn-tag bear">−2,200 BTC / 879 prints</span>, taker-net{' '}
              <span className="dn-tag bear">−1,979</span> —{' '}
              <span className="dn-em">
                the perp/taker and big-print sides sold hard over 24h while OI rose and
                spot fell: rising OI on net aggressor selling into a down-print is fresh
                short supply / distribution, consistent with SM adding +1,192 short, not
                demand
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag">−0.01%</span>, OI{' '}
              <span className="dn-tag bull">−557 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +454</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +106</span>, big-print{' '}
              <span className="dn-tag bull">+340 BTC / 138 prints</span>, taker-net{' '}
              <span className="dn-tag bull">+106</span> — a late bid steadied spot flat as
              OI came off (some covering into the base). 1h: price{' '}
              <span className="dn-tag bear">−0.30%</span>, OI{' '}
              <span className="dn-tag bull">−177 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −579</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −195</span>, big-print{' '}
              <span className="dn-tag bull">+58 BTC / 35 prints</span>, taker-net{' '}
              <span className="dn-tag bear">−195</span> —{' '}
              <em>spot offered again into the snap (−579 spot CVD) with OI still coming
              off</em>. The 4h base showed a bid but the last hour turned spot-heavy — the
              confirming demand step-in the scout wants did not print into this close, and
              the day&rsquo;s dominant flow was a 24h aggressor-sell distribution that
              grew OI.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · the mid-frames FLIPPED — 8h and 12h golden → death crosses (both above cloud, the 12h just printed) · net read multi-TF bearish resonance / sell-the-bounce (1 long / 3 short / 6 neutral) · 3d/1w bottom-div cluster + 1M ⚡TD9 BUY the lone bull offsets · fast frames sub-47 RSI (30m 46.9, 1h 42.7)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The mid-frames rolled — the 8h and 12h golden crosses the 07-23 scan
                carried both flipped to death crosses this scan, and the engine&rsquo;s
                net read turned to sell-the-bounce
              </span>. The 8h <span className="dn-tag bear">flipped golden → death
              (water-up death cross 2b)</span> though it stays above cloud (RSI 51.0,
              above cloud 45b), and the 12h <span className="dn-tag bear">flipped golden →
              death (water-up death cross just printed / 刚印)</span>, also still above
              cloud (RSI 53.7, above cloud 20b) — the near-frame trend engine rolled over
              even as price holds above the mid-frame clouds. The net read is now{' '}
              <span className="dn-tag bear">多周期共振偏空 · 反弹偏卖 (multi-TF bearish
              resonance / sell-the-bounce)</span>, overall{' '}
              <span className="dn-tag bear">1 long / 3 short / 6 neutral</span> across 10
              TFs (vs 07-23&rsquo;s 2 long / 2 short / 6 neutral). The bull offsets that
              remain are the higher-TF{' '}
              <span className="dn-tag bull">bottom-div cluster (3d / 1w BULL reg)</span> —
              3d water-down golden cross 4b, 1w water-down golden cross just printed — and
              the persistent <span className="dn-tag bull">1M ⚡ TD9 BUY</span> (the 30m
              TD9 BUY of 07-23 has rolled off; 1M is now the lone TD9 BUY). The fast
              frames cooled below 07-23 — 15m RSI 50.6, 30m 46.9, 1h 42.7 — with 15m/30m/1h
              still carrying water-down golden crosses (a fast-frame bounce structure
              underneath a rolling mid-frame). Net regime from the scan:{' '}
              <span className="dn-em">5/9 cycle-reversal (JT&lt;0), mean-reversion /
              bounce-favored on the very slow frames, but the mid-frame trend flipped
              short</span>.{' '}
              <span className="dn-em">
                The mid-frame golden crosses that helped confirm the recovery are gone;
                the 3d/1w bottom-div and 1M TD9 BUY are the only structural bull tells
                left, and the header verdict is sell-the-bounce. One clear notch more
                bearish than 07-23 — the structure now agrees with the failed cap test.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">65,060</td><td className="num">50.6</td><td className="bull">golden (water-dn) 27b</td><td className="neut">in cloud 65.0–65.2k 7b</td><td>Buy 3</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">65,050</td><td className="num">46.9</td><td className="bull">golden (water-dn) 10b</td><td className="bear">below ↑65.7k 47b</td><td>Buy 2</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>1h</td><td className="num">65,060</td><td className="num">42.7</td><td className="bull">golden (water-dn) 3b</td><td className="bear">below ↑66.0k 12b</td><td>Buy 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">65,060</td><td className="num">45.7</td><td className="bear">death (water-up) 9b</td><td className="bull">above ↓64.2k 39b</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">65,060</td><td className="num">51.0</td><td className="bear">death (water-up) 2b</td><td className="bull">above ↓63.6k 45b</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">65,050</td><td className="num bull">53.7</td><td className="bear">death (water-up) 刚印 (just printed)</td><td className="bull">above ↓62.5k 20b</td><td>Buy 3</td><td>BEAR reg</td></tr>
                <tr><td>1d</td><td className="num">65,040</td><td className="num bull">53.8</td><td className="neut">—</td><td className="neut">in cloud 62.3–70.2k 4b</td><td>Buy 1</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">65,040</td><td className="num">46.2</td><td className="bull">golden (water-dn) 4b</td><td className="bear">below ↑74.6k 17b</td><td>Sell 7</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">65,040</td><td className="num">40.2</td><td className="bull">golden (water-dn) 刚印 (just printed)</td><td className="bear">below ↑97.1k 25b</td><td>Sell 2</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">65,040</td><td className="num">44.3</td><td className="neut">—</td><td className="bull">above ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html header scan 2026-07-24 08:01 BJ /
                    00:01Z (~6 min stale vs the 00:07Z anchor; rolling latest
                    file; archived verbatim to
                    /opt/desk-note/snapshots/2026-07-24-0007/). Header alerts:{' '}
                    <em>higher-TF bottom-div cluster (3d/1w)</em>,{' '}
                    <em>⚡ TD9 BUY 1M</em>, overall 1 long / 3 short / 6 neutral across 10
                    TFs, net read 多周期共振偏空 · 反弹偏卖 (multi-TF bearish resonance /
                    sell-the-bounce), 5/9 cycle-reversal regime (JT&lt;0). KEY SHIFT vs
                    07-23: the 8h and 12h both flipped golden → death crosses (the 12h
                    just printed). Scan spot $65,060, 24h −1.55%, H/L $66,284 / $64,636,
                    qVol $8.14B (candle-based; the live tape at 00:07Z reads spot $65,015,
                    24h −1.78%, H/L $66,299 / $64,684 — an independent source, not a
                    conflict). Closes are in-progress bars; treat every value as
                    provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the cap is now lost and flipped overhead. Spot
              $65,015 holds only <span className="dn-em">three positive daily
              lines</span> in order of proximity:{' '}
              <span className="dn-tag bull">D-EMA20 $64,368 (+1.01%)</span> — nearest
              support now — <span className="dn-tag bull">D-SMA20 $64,260 (+1.18%)</span>,
              and <span className="dn-tag bull">D-SMA50 $63,149 (+2.96%)</span>, which
              sits almost exactly on the{' '}
              <span className="dn-tag bull">W-SMA200 floor $63,078 (+3.07%)</span> — a
              ~$70 support shelf near $63,100. The first overhead line is now the lost cap:{' '}
              <span className="dn-tag bear">D-EMA50 $65,103 (−0.13%)</span> — the
              entry-validation level that was +0.77% of cushion below spot on 07-23 is
              now overhead resistance, spot −0.13% beneath it. Then in order:{' '}
              <span className="dn-tag bear">D-EMA100 $67,917 (−4.27%)</span> (the working
              first target on any re-arm),{' '}
              <span className="dn-tag bear">W-SMA20 $69,817 (−6.88%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,825 (−6.89%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $69,906 (−7.00%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $69,996 (−7.12%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $70,858 (−8.25%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $72,419 (−10.22%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $72,926 (−10.85%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $73,691 (−11.77%)</span>. Far above
              and disused: W-EMA150 $76,750 (−15.29%; seed), W-EMA50 $78,991 (−17.69%),
              W-EMA100 $80,324 (−19.06%), W-SMA50 $85,398 (−23.87%), W-SMA100 $88,495
              (−26.53%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-24 00:06Z (close $64,955.60);
                offsets recomputed against live spot $65,015.45. Displayed MA levels are
                $-rounded; offsets computed from exact series values. The matrix is
                intentionally computed from the
                btcusdt_1m_&#123;2024,2025,2026&#125;.parquet subset (936 daily bars
                including the in-progress 07-24 bar / 935 completed daily · 134
                weekly bars), distinct from the full 2019–2026 wildcard history the
                footer&rsquo;s glob would otherwise imply; the 200W cycle floor is a
                separate lineage from ma200w_trap_watch_state.json. W-SMA150 / W-SMA200
                not computable — this subset holds 134 weekly bars, short of both windows;
                W-EMA150 and W-EMA200 seed from available history and are reported as such.
                Daily closes: 07-19 $64,694.70, 07-20 $65,224.80, 07-21 $66,522.40, 07-22
                $66,082.00, 07-23 $65,069.60 (the FIRST close below the D-EMA50 cap), 07-24
                (in-progress) $64,955.60 — the cap-hold that gated the scout is now broken
                on a completed close.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book essentially FLAT at +262.1M net-long-gamma (vs +261.9M, still the deepest band of the recovery) · flip $61,853, spot +5.11% above · $70k/$72k call walls cap overhead · strip NOT wholly positive (27JUL −1.43M + $60k wall) but NO near-dated negative amplifier · 31JUL +135.74M dominates</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book barely moved and stays deeply net-long — the failed cap
                test did not change the gamma regime
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+262.1M / 1% move</span> (the GEX panel&rsquo;s
              headline total; essentially flat vs +261.9M on 07-23 — a +$0.2M drift, still
              the deepest net-long-gamma band of the recovery, dampening — dealers buy
              dips, sell rips){' '}
              <span className="dn-em">
                — source caveat: the panel&rsquo;s by-expiry rollup sums to +235.94M
                (= gex_summary.json net_gex $235,937,990), ~+26.16M BELOW this headline
                (see the strip below), a non-reconciling source panel; note the sign of
                the gap flipped vs 07-23 (there the rollup was ~+21.56M above the
                headline, here it is ~+26.16M below) — the aggregate is reported as the
                HTML headline +262.1M
              </span>. The 0-γ flip is{' '}
              <span className="dn-tag">$61,853</span>, and spot $65,015 sits{' '}
              <span className="dn-tag bull">+5.11% above flip</span> on
              spot-denominated math (65,015.45 / 61,853.45 − 1 = +5.113%); the GEX
              file&rsquo;s Deribit-index reference $65,296 ($281 above live spot) reads{' '}
              <span className="dn-tag bull">+5.57%</span> above the flip (65,295.9 /
              61,853.45 − 1 = +5.566%) — both references positive, spot well inside the
              positive-gamma field (the cushion to flip narrowed from +6.19% on 07-23 as
              spot bled, but stays deep). The top gamma walls:{' '}
              <span className="dn-tag bull">$70k +73.71M</span> (heaviest, the overhead
              magnet/cap; 39,477 call OI),{' '}
              <span className="dn-tag bull">$72k +48.95M</span>,{' '}
              <span className="dn-tag bull">$66k +33.47M</span> (just overhead),{' '}
              <span className="dn-tag bull">$68k +20.02M</span>,{' '}
              <span className="dn-tag bull">$67k +18.69M</span>,{' '}
              <span className="dn-tag bull">$65k +18.35M</span> (right at spot),{' '}
              <span className="dn-tag bear">$60k −14.70M</span> (the lone negative wall —
              crash-put residual, 18,210 put OI),{' '}
              <span className="dn-tag bull">$80k +10.42M</span>,{' '}
              <span className="dn-tag bull">$69k +10.09M</span>,{' '}
              <span className="dn-tag bull">$71k +7.75M</span>.{' '}
              <span className="dn-em">
                Spot is pinned at the $65k support wall with the $66k–$68k positive band
                above and the $70k/$72k calls the heavy overhead cap; the only negative
                gamma is the $60k crash-put residual, far below. A book that dampens both
                ways — it will fade a chase into the $70k call wall and bid a dip toward
                $65k / the flip
              </span>. The expiry strip is <span className="dn-em">not</span> wholly
              positive this run — there is a small 27JUL −1.43M and the $60k wall — but
              there is <span className="dn-em">no near-dated NEGATIVE amplifier</span>:
              24JUL 0.3DTE +31.67M (settles 08:00Z today, ~8h after snapshot), 25JUL 1.3
              +1.82M, 26JUL 2.3 +2.43M, 27JUL 3.3{' '}
              <span className="dn-tag bear">−1.43M</span> (small negative, not an
              amplifier), 31JUL 7.3{' '}
              <span className="dn-tag bull">+135.74M</span> (dominant), 7AUG 14.3 +30.57M,
              14AUG 21.3 +1.47M, 28AUG 35.3 +21.82M, 25SEP 63.3 +5.62M, 25DEC 154.3
              +4.62M, 26MAR27 245.3 +1.09M, 25JUN27 336.3 +0.53M — the small 27JUL negative
              is nowhere near large enough to fuel a down-leg. No amplifier exists to feed
              a fresh short.{' '}
              <span className="dn-em">
                Source-panel caveat: these by-expiry buckets sum to +235.94M (matching
                gex_summary.json net_gex $235,937,990), ~+26.16M / −10.0% BELOW the GEX
                panel&rsquo;s +262.1M headline aggregate that this note reports. The
                headline total and the by-expiry rollup do NOT reconcile in the source
                panel — the divergence is disclosed, not resolved upstream (and the sign
                of the gap flipped vs 07-23); the note uses the HTML headline +262.1M as
                the aggregate and does not treat the strip composition as a self-contained
                reconciliation of it. Either figure is deeply net-long-gamma; the sign and
                dampening read are unchanged by the gap.
              </span>
            </p>

            <p>
              IV median across 872 instruments is{' '}
              <span className="dn-tag">42.8%</span> against 30D close-to-close RV of{' '}
              <span className="dn-tag">30.32%</span> — chain-level richness{' '}
              <span className="dn-tag">~+12.5pt</span>, put/call OI ratio{' '}
              <span className="dn-tag">0.44</span> (136,396 / 309,600 — call-heavy).
              A chain-median across N instruments,{' '}
              <span className="dn-em">not</span> a tradable spread;
              expiry-/strike-level vega, skew and term structure remain not loaded; the
              vol read stays framework-only. 872 instruments today (up from 842 on 07-23).
              RV methodology: 30D close-to-close, logret.std × √365 × 100 on the last 30
              daily log returns (= 31 consecutive daily closes) anchored to parquet last
              bar 2026-07-24 00:06Z; the 31-return read is 31.39%, the 30-return page
              value 30.32%.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · rates/dollar tighter (10Y 4.67% +4bp, TIPS 2.39% EXTREME, DXY 101.44) vs credit/liquidity loose (HY OAS 2.68% RISK-ON, Fed net liq $5.917T loose — drained $69B) · reclaim-long rates filter FALSE (10Y &gt; 4.55%, tightened to 4.67%) · MOVE +5.43 to 76.3 · cross-asset IDIOSYNCRATIC |r| 0.216 · BTC leads the equity/megacap cluster (+1.89% 7d vs NQ −1.17%, +3.06pt) but energy/metals outrun it (CL +16.40%, BRENT +12.13%, URNM +5.05%, SILVER +3.18%)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape stays split — rates and the dollar tighter, credit and
                liquidity loose — with the rates leg tightening a further 4bp against the
                scout and Fed liquidity draining $69B
              </span>. Dashboard render is 2026-07-23 22:16Z, ~1.9h before the snapshot
              (the freshest macro read of the recovery). US 10Y nominal{' '}
              <span className="dn-tag bear">4.67% (+4.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.46</span>, episodic z{' '}
              <span className="dn-tag">+2.15</span> — EXTREME RISK-OFF,{' '}
              <span className="dn-em">above the 4.55% reclaim-long gate</span> (was 4.63%
              on 07-23 — a further 4bp tighter). 10Y TIPS real{' '}
              <span className="dn-tag bear">2.39% (+2.0bp)</span>, z{' '}
              <span className="dn-tag bear">+2.87</span> — EXTREME RISK-OFF. 5Y5Y BE
              inflation <span className="dn-tag">2.26% (+2.0bp)</span>. HY OAS{' '}
              <span className="dn-tag bull">2.68% (−1.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.26</span>, episodic z{' '}
              <span className="dn-tag bull">−0.74</span> — RISK-ON, tighter on the day and
              still <span className="dn-em">10bp shy</span> of its 2.78% put-spread
              re-grow gate (moved a bp further from the gate). MOVE bond vol{' '}
              <span className="dn-tag bear">76.3 (+5.43)</span> — elevated, still in the
              neutral band. DXY{' '}
              <span className="dn-tag bear">101.44 (+0.30)</span>, regime z{' '}
              <span className="dn-tag bear">+2.30</span> — EXTREME RISK-OFF. Fed net
              liquidity{' '}
              <span className="dn-tag bear">$5.917T (−0.069T)</span>, regime z{' '}
              <span className="dn-tag">+0.56</span> — drained $69B, the tag downgraded from
              EXTREME RISK-ON to loose. USD/JPY{' '}
              <span className="dn-tag">163.83 (+0.75)</span>; US-JP 10Y spread{' '}
              <span className="dn-tag">2.00% (+4.0bp)</span> — neutral. NFCI −0.552
              (−0.01, RISK-ON).{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) is FALSE at 4.67% and
                tightened a further 4bp — a live scout headwind, now compounded with the
                cap being lost and Fed liquidity draining. The put-spread re-grow gate is
                two legs, BOTH required — the 10Y leg fires (4.67% &gt; 4.53%) but HY OAS
                2.68% is 10bp shy of 2.78%, so the single rates leg is not a hedge trigger.
                Rates/dollar tight, credit/liquidity loose: the macro cross-current that
                has framed the whole recovery, now leaning a notch more risk-off (rates up,
                liquidity draining).
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
                <tr><td>US 10Y nominal</td><td className="num">4.67%</td><td className="num bear">+4.0bp</td><td className="num bear">+2.46</td><td className="num">+2.15</td><td className="bear">tight · EXTREME RISK-OFF</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.39%</td><td className="num bear">+2.0bp</td><td className="num bear">+2.87</td><td className="num">+1.77</td><td className="bear">tight · EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.26%</td><td className="num">+2.0bp</td><td className="num">+0.49</td><td className="num">+2.33</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.68%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.26</td><td className="num bull">−0.74</td><td className="bull">loose · RISK-ON · 10bp from gate</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.552</td><td className="num">−0.01</td><td className="num bull">−1.51</td><td className="num bull">−1.71</td><td className="bull">loose · RISK-ON</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">76.3</td><td className="num bear">+5.43</td><td className="num">+0.24</td><td className="num">+1.63</td><td className="neut">neutral · elevated</td></tr>
                <tr><td>DXY</td><td className="num">101.44</td><td className="num bear">+0.30</td><td className="num bear">+2.30</td><td className="num">+1.04</td><td className="bear">firm · EXTREME RISK-OFF</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.917T</td><td className="num bear">−0.069T</td><td className="num">+0.56</td><td className="num bear">−2.47</td><td className="neut">loose · drained $69B · tag downgraded</td></tr>
                <tr><td>USD/JPY</td><td className="num">163.83</td><td className="num">+0.75</td><td className="num bear">+1.76</td><td className="num">+2.21</td><td className="neut">yen softer</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.00%</td><td className="num bear">+4.0bp</td><td className="num">−0.39</td><td className="num">+2.15</td><td className="neut">neutral</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.216</span>{' '}
              (up from 0.202 on 07-23 but still in the{' '}
              <span className="dn-em">IDIOSYNCRATIC</span> band, below the 0.25
              threshold). BTC&rsquo;s listed ties: NQ{' '}
              <span className="dn-tag">+0.532</span> (top), SP500{' '}
              <span className="dn-tag">+0.449</span>, COPPER{' '}
              <span className="dn-tag">+0.388</span>, SILVER{' '}
              <span className="dn-tag">+0.382</span>, PLAT{' '}
              <span className="dn-tag">+0.356</span>, GOLD{' '}
              <span className="dn-tag">+0.355</span>, TSLA{' '}
              <span className="dn-tag">+0.351</span>, NVDA{' '}
              <span className="dn-tag">+0.317</span>, JP225{' '}
              <span className="dn-tag">+0.303</span>. 7d performance is again the loud
              line, but the ranking stays narrower than an unqualified &ldquo;RS
              leader&rdquo; call: <span className="dn-tag bull">BTC +1.89%</span> leads
              the <span className="dn-em">equity / megacap risk cluster</span> — NQ{' '}
              <span className="dn-tag bear">−1.17%</span>, SP500{' '}
              <span className="dn-tag bear">−1.27%</span>, JP225{' '}
              <span className="dn-tag bull">+1.09%</span>, and the megacaps hard down
              (TSLA <span className="dn-tag bear">−16.49%</span>, GOOGL{' '}
              <span className="dn-tag bear">−10.12%</span>, META{' '}
              <span className="dn-tag bear">−8.56%</span>, AMZN{' '}
              <span className="dn-tag bear">−6.46%</span>, MSFT{' '}
              <span className="dn-tag bear">−4.39%</span>, AAPL{' '}
              <span className="dn-tag bear">−3.95%</span>), NVDA{' '}
              <span className="dn-tag bull">+1.09%</span> the lone green big-tech —{' '}
              <span className="dn-em">
                but it is NOT the top of the 22-asset strip
              </span>: energy and most metals outran BTC on 7d (CL{' '}
              <span className="dn-tag bull">+16.40%</span>, BRENT{' '}
              <span className="dn-tag bull">+12.13%</span>, URNM{' '}
              <span className="dn-tag bull">+5.05%</span>, SILVER{' '}
              <span className="dn-tag bull">+3.18%</span>, NGAS{' '}
              <span className="dn-tag bull">+1.88%</span>, GOLD{' '}
              <span className="dn-tag bull">+1.36%</span>, COPPER{' '}
              <span className="dn-tag bull">+0.63%</span>), PLAT{' '}
              <span className="dn-tag bear">−1.39%</span> and PALL{' '}
              <span className="dn-tag bear">−0.37%</span> the red metals.{' '}
              <span className="dn-em">
                So the defensible claim is narrow: BTC leads the equity/megacap risk
                cluster by +3.06pt vs NQ (+1.89% vs −1.17%) against a TradFi equity
                complex that is broadly selling off — the endogenous-to-crypto read that
                framed the recovery is intact vs stocks — but BTC is NOT the
                relative-strength leader of the full cross-asset strip; the energy and
                metals complexes outperformed it. This is a stocks-relative tell, not an
                unqualified RS input, and is not used as a stand-alone trade-book reason.
                Correlations sit idiosyncratic, so the macro cross-current bites less on
                price than on the trade framework&rsquo;s rates gate
              </span>. JGB monthly 2.67% carries an EXTREME RISK-OFF monthly tag — do not
              lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · scout moves ARMED → DEFERRED (cap lost on a completed close, OI grew on distribution, SM trimming) · short STOOD DOWN (deepest positive-gamma, no near-dated negative amplifier) · put-spread not re-grown (single 10Y leg) · book FLAT for a D-EMA50 reclaim on an up-close</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 07-23 note armed the scout on smart money holding the bid and said
                the go-live gate was a confirming up-close that holds the D-EMA50 with OI
                stabilizing — and set a disarm watch that the next pullback close below
                the D-EMA50 would move the scout back toward deferred. That disarm fired
              </span>. The 07-23 daily close $65,069.60 printed below the D-EMA50 cap
              $65,103 — the first completed daily close below the cap in the recovery —
              breaking the cap-reclaim leg the scout was armed on, and the 07-24 tape is a
              third pullback print with spot now −0.13% beneath the cap. The
              buyer-of-record leg is still TRUE — SM held net long (+5,698) — but it
              trimmed 14.0% and added +1,192 short into the break, so even the surviving
              leg weakened. The scout moves <span className="dn-em">ARMED →
              DEFERRED</span>. The trigger cannot fire: the cap is lost, OI expanded on
              distribution (taker/big net selling, retail 60.30% long) rather than
              demand, funding round-tripped back to the +10.95% cap, and the reclaim-long
              rates filter is FALSE (10Y 4.67%). The book today is: no shorts, scout
              DEFERRED (re-arm needs the D-EMA50 reclaimed on an up-close with OI turning
              up on buyers), no fresh hedge — FLAT. The floor holds (+3.07% above $63,078)
              and the dealer book stays deeply positive-gamma, so this is a failed cap
              test above a settled floor, not a break.
            </p>

            <div className="dn-trade">
              <span className="dn-side short">long · scout · DEFERRED · cap-reclaim leg now FALSE (07-23 closed below D-EMA50) · SM leg still TRUE but trimming · re-arm needs a D-EMA50 reclaim on an up-close</span>
              <div className="dn-trade-name">
                Reclaim-long scout — steps back to deferred: the recovery&rsquo;s first real test of the D-EMA50 cap failed on a completed close, OI grew on distribution not demand, and the buyer of record is trimming
              </div>
              <div className="dn-thesis">
                The scout is gated on two hard legs plus a confirming print: (1) price
                holding the D-EMA50 entry-validation cap on a close basis, and (2) SM
                confirming as the buyer of record, ideally net long. Leg 1 is now{' '}
                <em>FALSE</em> — 07-23 closed $65,069.60, below the D-EMA50 $65,103, the
                first completed close beneath the cap in the recovery, and the 07-24 tape
                extends a third pullback print with spot −0.13% under it. Leg 2 is still TRUE
                but weakened — SM held net long (+5,698) yet trimmed 14.0% (Δnet −928.6)
                and added +1,192 short into the break. The confirming print never came:
                across the whole armed stretch OI never expanded on demand — this print it
                finally expanded (+2.20%), but on distribution (24h taker-net −1,979,
                big-net −2,200, retail crowded to 60.30% long, funding round-tripped back
                to the +10.95% cap), the opposite of the buyers-stepping-in signal the
                scout wanted. With the cap lost, the scout can no longer be armed on a
                held cap; it steps back to DEFERRED. The re-arm is structural, not a
                confirming print: the D-EMA50 $65,103 must be reclaimed on an UP-close with
                OI expanding on buyers (not on a crowded long). The floor holds and the
                dealer book dampens the downside, so this is a deferral above a settled
                floor — patient, not defensive.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">DEFERRED · the cap-reclaim leg broke on the 07-23 close below the D-EMA50 · no position, no live trigger</span></div>
                <div><span className="dn-lvl-k">re-arm trigger</span><span className="dn-lvl-v bull">a daily close back &gt; D-EMA50 $65,103 that is an UP-close (24h ≥ 0) AND OI expanding on buyers (Δ24h OI ≥ 0 with taker/big-print net BUYING, not a crowded-long distribution) — rebuilds leg-1; SM must stay net long to keep leg-2</span></div>
                <div><span className="dn-lvl-k">go-live (after re-arm)</span><span className="dn-lvl-v">on the re-arm print, scout long 0.2R · target $67,917 (D-EMA100), stop $63,078</span></div>
                <div><span className="dn-lvl-k">stop (reference)</span><span className="dn-lvl-v bear">1h close &lt; $63,078 (W-SMA200 settled cycle floor / D-SMA50 $63,149 shelf — a close below ends the reclaim read entirely)</span></div>
                <div><span className="dn-lvl-k">targets (on re-arm)</span><span className="dn-lvl-v">$67,917 (D-EMA100, first target) then $69,817 / $69,825 (W-SMA20 / D-SMA150) into the $70k +73.7M call wall</span></div>
                <div><span className="dn-lvl-k">size (on re-arm)</span><span className="dn-lvl-v">0.2R · take half at D-EMA100; the $70k call wall is the structural cap on the runner</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R (reference, on re-arm):</b> trigger ~$65,103 (D-EMA50), stop
                $63,078 (floor) = ~$2,025 risk; first target $67,917 = ~$2,814 reward ≈
                1.39:1 — unchanged from the 07-23 scout&rsquo;s R/R. <b>Hard rule:</b> do
                NOT re-arm or go live on a down-close, on an OI expansion driven by
                aggressor selling / crowded-long distribution, or below the D-EMA50 — the
                cap must be reclaimed on an up-close with buyers behind the OI, not a
                crowded long. The rates filter at 4.67% (tightened a further 4bp) and Fed
                liquidity draining $69B are noted headwinds; the fresh risk below is the
                floor $63,078, a break of which ends the reclaim thesis outright.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · STOOD DOWN · deepest positive-gamma band of the recovery (+262.1M) · no near-dated negative amplifier · SM still net long · floor holding</span>
              <div className="dn-trade-name">
                Chase-short — stays stood down: shorting into a +262.1M positive-gamma book with SM still net long, no near-dated negative amplifier, and the floor holding is fighting the dealer dampening even on a failed cap test
              </div>
              <div className="dn-thesis">
                The chase-short has been stood down across the recovery and stays offside
                even on a failed cap test. The dealer book is essentially flat at +262.1M
                (vs +261.9M), the deepest net-long-gamma band of the recovery, the flip
                sits $3,162 below spot (+5.11%), and while the strip is not wholly positive
                (a small 27JUL −1.43M and the $60k crash-put wall) there is no near-dated
                NEGATIVE amplifier — the down-leg&rsquo;s fuel. SM is still net long, the
                W-SMA200 floor holds +3.07% below, and BTC still leads the equity/megacap
                cluster on 7d (though energy/metals outran it). A short here fights the
                dealer dampening and would need the floor to break AND a fresh negative
                amplifier to appear — neither is present. The failed cap test is a reason
                to defer the long, not to chase a short into a positive-gamma book.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">stood down · no position · positive-gamma book + SM long + floor holding + no negative amplifier all argue against a fade</span></div>
                <div><span className="dn-lvl-k">re-arm trigger (not active)</span><span className="dn-lvl-v bear">1d close &lt; $63,078 (W-SMA200 floor) AND a fresh near-dated NEGATIVE gamma chunk appearing on the strip — neither present (strip dominated by 31JUL +135.7M; only a small 27JUL −1.43M)</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v bear">no short into the deepest positive-gamma band of the recovery with SM net long and the floor holding — a lost cap above a held floor is not a short signal</span></div>
              </div>
              <div className="dn-gating">
                <b>Gating:</b> the down-leg shorts worked because a large near-dated
                NEGATIVE gamma chunk amplified the move into expiry. No such chunk exists
                on this strip — the only near-dated negative is a small 27JUL −1.43M, an
                order of magnitude too small to amplify. Re-arming short requires the cycle
                floor to break outright ($63,078 on a daily close) AND a fresh negative
                amplifier to appear — a structural regime change, not a fade of a failed
                cap test inside a positive-gamma field. OI expanding on distribution is a
                warning for the long, not a green light for the short.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — SINGLE leg fired (10Y), no fresh hedge</span>
              <div className="dn-trade-name">
                Downside put-spread — not re-grown: the 10Y leg fires (4.67% &gt; 4.53%) but HY OAS 2.68% is 10bp shy of its 2.78% gate; a single-leg fire is not the both-legs confirmation a fresh hedge needs
              </div>
              <div className="dn-thesis">
                The put-spread re-grow gate is two legs, BOTH required: HY OAS &gt; 2.78%
                AND 10Y &gt; 4.53%. This render fires only the 10Y leg (4.67%, tightened a
                further 4bp from 07-23&rsquo;s 4.63%) — but the HY OAS leg sits 10bp shy at
                2.68% (RISK-ON, a bp tighter on the day), a bp further from the gate than
                07-23. Credit is not confirming the rates stress. The desk does not pay
                premium to re-grow a downside tail into a +262.1M positive-gamma book with
                SM still net long and the floor holding — a fresh put-spread would fight
                the dealer dampening with no near-dated negative amplifier to ride. The
                reclaim-long rates filter being FALSE at 4.67% is noted as a scout headwind
                above, not as a hedge trigger here. No fresh hedge.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · not re-grown · single 10Y leg fired, HY OAS leg 10bp shy</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (both-legs required)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.68%, 10bp to fire) to JOIN the already-fired 10Y &gt; 4.53% (4.67%) — a both-legs confirmation, not a single rates leg</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bear">10Y &lt; 4.55% close — FALSE at 4.67% (tightened a further 4bp from 4.63%); a scout-long headwind that compounds the lost cap</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as levels
                drift, not backtested breakpoints. A fresh hedge on the single rates leg
                would be a put-spread rolled to 24JUL 0.3 DTE or 31JUL 7.3 DTE — but both
                strips are net-long-gamma, so a fresh tail would carry no amplifier
                tailwind and would fight the recovery rather than ride it. The desk waits
                for the HY OAS leg to join before re-growing, or for the cycle floor to
                break outright.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the cap failed its first real test (07-23 closed below the D-EMA50, scout DEFERRED) · SM still net long but trimming · OI expanded on distribution not demand · funding round-tripped to the cap · floor settled +3.07% above · dealer book deeply positive-gamma · rates filter FALSE and tighter · book FLAT for a D-EMA50 reclaim</span>
            </h2>

            <p>
              Of the 07-23 decision conditions: the reclaim scout&rsquo;s D-EMA50
              cap-reclaim leg <span className="dn-em">went FALSE</span> — the 07-23 close
              $65,069.60 printed below the cap $65,103 — the first completed daily close
              below the D-EMA50 cap in the recovery, the pullback close the 07-23
              note&rsquo;s disarm watch flagged; the SM-confirmation leg{' '}
              <span className="dn-em">stayed TRUE but weakened</span> — SM held net long
              (+5,698) yet trimmed 14.0% and added shorts; the &ldquo;OI turns up on an
              up-close&rdquo; confirmation <span className="dn-em">inverted</span> — OI
              finally expanded (+2.20%) but on a down-print driven by aggressor selling and
              crowded-long distribution, not demand; the reclaim-long rates filter stayed{' '}
              <span className="dn-em">FALSE</span> and tightened (10Y 4.67%, +4bp); the
              macro re-grow gate still fires ONE leg (10Y) with HY OAS 10bp shy; the
              chase-short re-arm <span className="dn-em">did NOT fire</span> (no floor
              break, no near-dated negative amplifier).{' '}
              <em>The hard leg the recovery waited on — smart money as the buyer of
              record — is still net long but trimming, and the cap that gated the long is
              now lost on a completed close, so the scout steps back from armed to
              deferred; the re-arm is a D-EMA50 reclaim on an up-close with buyers behind
              the OI, and the floor still holds beneath it all.</em>{' '}
              The conditions today re-set around a deferred scout below a lost cap, a
              settled floor, a deeply positive-gamma dealer book, a re-crowded leverage
              book, and a tighter rates-filter headwind:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Reclaim-long scout (long) — DEFERRED, cap-reclaim leg FALSE</td><td className="bear">re-arm needs a daily close back &gt; D-EMA50 $65,103 that is an UP-close (24h ≥ 0) with OI expanding on BUYERS — currently spot −0.13% below the cap after the 07-23 close beneath it</td><td>no position · re-arm on a D-EMA50 reclaim; on go-live scout long 0.2R, target $67,917 (D-EMA100), stop $63,078</td></tr>
                <tr><td>OI expansion quality (the inverted sub-leg)</td><td className="bear">Δ24h OI +2.20% but on a down-print with taker/big net selling and retail 60.30% long — distribution, not demand</td><td>the re-arm needs OI to expand on buyers stepping in, not a crowded long being distributed into; this print is the wrong kind of OI-up</td></tr>
                <tr><td>D-EMA50 cap (lost — the failed test)</td><td className="bear">07-23 closed $65,069.60 &lt; D-EMA50 $65,103; spot −0.13% below the cap</td><td>the cap that gated the long flipped to overhead resistance — reclaim it on an up-close to re-arm the scout</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">10Y &lt; 4.55% close — FALSE at 4.67% (tightened a further 4bp from 4.63%)</td><td>scout headwind, now compounding the lost cap and $69B of Fed-liquidity drain; argues for the smaller 0.2R size on any re-arm</td></tr>
                <tr><td>Cycle floor holds (reclaim read alive)</td><td className="bull">last weekly close 07-19 $64,694.70 &gt; W-SMA200 $63,078 (3 consecutive weekly closes above); spot +3.07% above</td><td>the floor is the line that keeps the reclaim thesis alive; a 1d close &lt; $63,078 ends it and triggers a separate reassessment</td></tr>
                <tr><td>Chase-short re-arm (not active)</td><td className="bear">1d close &lt; $63,078 AND a fresh near-dated NEGATIVE gamma chunk on the strip — neither present</td><td>the only near-dated negative is a small 27JUL −1.43M; no fade into a +262.1M positive-gamma book with SM long and the floor holding</td></tr>
                <tr><td>Macro tail re-grow (single leg fired)</td><td className="bear">HY OAS &gt; 2.78% (10bp to fire) to JOIN 10Y &gt; 4.53% (4.67%, already fired)</td><td>re-grow only on the both-legs confirmation; a single rates leg into a positive-gamma strip is not a hedge trigger</td></tr>
                <tr><td>Dealer book stays positive-gamma</td><td className="bull">aggregate GEX stays positive (+262.1M; no fresh near-dated negative chunk added inside the 24JUL/31JUL strip)</td><td>the downside stays dampened toward the flip $61,853; the $70k/$72k call walls cap a chase — supports the deferral over either a chase-long or a fade-short</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the tape reclaims the D-EMA50 $65,103 on an up-close with OI
                expanding on buyers — which re-arms the scout toward the first live long of
                the recovery — or whether it keeps closing below the cap and grinds toward
                the settled floor $63,078, a break of which ends the reclaim read entirely.
                Smart money is still net long but trimming, the floor holds +3.07% below,
                and the dealer book dampens the downside; what changed is that the cap
                gating the long failed its first real test and the OI finally grew — but on
                distribution, not demand
              </span>. Until then this note runs as written: the scout is DEFERRED (cap
              lost, SM leg intact but weakening), the chase-short is stood down into the
              deepest positive-gamma band of the recovery, and the put-spread is not
              re-grown on a single-leg rates fire. The macro tape stays split (rates/dollar
              tight and tightening, credit/liquidity loose but Fed liquidity draining), BTC
              leads the equity/megacap cluster by +3.06pt on 7d (vs NQ, though energy/metals
              outrun it), and the mid-frames rolled — the 8h/12h golden crosses flipped to
              death crosses and the engine reads sell-the-bounce. The right read for the
              next print is <em>deferred and patient — the buyer of record still holds but
              is trimming; the long re-arms on a D-EMA50 reclaim, and the floor is the line
              that keeps the whole reclaim thesis alive</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit
            </span>
            <b>Status:</b> v2 EN, promoted from v1 after the STAGE B codex
            hostile-but-fair cross-model audit (verdict PASS-WITH-NOTES: 0 CRITICAL + 2
            MAJOR + 5 MINOR). Findings folded in per STAGE C; audit record at
            audits/2026-07-24-desk-note.md. Each finding was closed with a grep sweep of
            the full EN file for the wrong-claim pattern and all semantic variants —
            pattern searched · hits-before (carrying the pre-fix meaning) · hits-after ·
            resolution:{' '}
            <b>DN-001 (MAJOR, BJ↔UTC eight-hour shift on extrema timestamps):</b> patterns
            &ldquo;BJ 00:27 / UTC 16:27 / BJ 18:00 07-23 / UTC 10:00 07-23 / BJ 11:56 /
            UTC 03:56 / BJ 15:11 / UTC 07:11 / BJ 22:46 / UTC 06:46&rdquo; — hits-before 9
            (range high/low prose, SM-Δ meta hi/lo, SM net hi/lo prose, short-btc hi/lo
            prose) — hits-after 0 (all recomputed from live_db.json.t read as BJ-local
            then −8h once: range high BJ 08:27 07-23 / UTC 00:27 07-23, low BJ 02:00 07-24
            / UTC 18:00 07-23; SM net hi BJ 19:56 07-23 / UTC 11:56 07-23, lo BJ 23:11
            07-23 / UTC 15:11 07-23; short hi BJ 06:46 07-24 / UTC 22:46 07-23; the meta
            hi/lo BJ chips repaired to 19:56 / 23:11) — RESOLVED.{' '}
            <b>DN-002 (MAJOR, completed-close lineage over-stated / muddled):</b> patterns
            &ldquo;third down-close / third down-day / third down-print / third close below
            the D-EMA50&rdquo; — hits-before 8 (lead, meta ×2, roman, OI prose ×2,
            trade-book prose ×2, decision prose) — hits-after 0 stale (every reference to
            the 07-24 in-progress print reframed to &ldquo;third pullback print / third
            consecutive negative 24h print (07-24 in-progress)&rdquo;, and both
            prior-disarm-watch mentions rewritten so 07-23 is stated as the FIRST completed
            daily close below the D-EMA50 cap — the muddled &ldquo;a third close below the
            D-EMA50&rdquo; disarm framing is gone; the only surviving &ldquo;down-close&rdquo;
            is the forward-looking hard rule &ldquo;do NOT re-arm or go live on a
            down-close&rdquo;, which correctly refers to a future re-arm daily close) —
            RESOLVED.{' '}
            <b>DN-003 (MINOR, 1,440-row vs 1,441-inclusive window):</b> pattern
            &ldquo;1,440-row window&rdquo; — hits-before 1 — hits-after 0 (manifest reworded
            to &ldquo;1,440 one-minute-interval / 1,441 sampled-row-inclusive window,
            baseline t=07-23 08:07 through pin t=07-24 08:07&rdquo;) — RESOLVED.{' '}
            <b>DN-004 (MINOR, funding cap-row count 380 vs exact 375):</b> patterns
            &ldquo;380 rows / window 16:36Z–22:55Z&rdquo; — hits-before 4 (funding meta ×2,
            Δ-funding meta, OI prose) plus 2 window strings — hits-after 0 (all changed to
            the exact-cap set 375 rows, window 16:38Z–22:52Z 07-23) — RESOLVED.{' '}
            <b>DN-005 (MINOR, 935 vs 936 daily-bar count):</b> pattern &ldquo;935 daily /
            134 weekly bars&rdquo; — hits-before 2 (manifest MA row, MA em-block) —
            hits-after 0 (both restated as &ldquo;936 daily bars including the in-progress
            07-24 bar / 935 completed daily · 134 weekly bars&rdquo;) — RESOLVED.{' '}
            <b>DN-006 (MINOR, MTF header staleness under-disclosed):</b> pattern
            &ldquo;Beijing-header scan&rdquo; with no header time — hits-before 2 (manifest
            MTF row, table source note) — hits-after 0 (both now state &ldquo;header scan
            2026-07-24 08:01 BJ / 00:01Z, ~6 min stale vs the 00:07Z anchor&rdquo;) —
            RESOLVED.{' '}
            <b>DN-007 (MINOR, negative-row window compressed into one block):</b> pattern
            &ldquo;window 00:07Z–12:41Z&rdquo; — hits-before 2 (funding meta, OI prose) —
            hits-after 0 (both reworded to &ldquo;466 negative rows between first 00:07Z and
            last 12:41Z 07-23, in discontinuous blocks&rdquo;) — RESOLVED.{' '}
            <b>ask-deepseek second-audit adjudicated (not auto-applied, per runbook):</b>{' '}
            the flagged SM-net cross-block &ldquo;+5.70k / 15.28k / 9.58k&rdquo; vs detailed
            &ldquo;+5,698 / 15,277 / 9,579&rdquo; is a correct k-rounding of the same
            codex-verified tape values (15.277k→15.28k, 9.579k→9.58k, 5.698k→5.70k; and
            15.28 − 9.58 = 5.70 is internally consistent), not the +2/+3/+1 discrepancy the
            secondary auditor read from rounding the k-figures back up — no change
            warranted. Overall: <b>post codex hostile audit</b> — every MAJOR and MINOR
            finding grep-verified hits-after = 0; <code>tsc --noEmit</code> exits 0.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-07-24 00:07Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-07-23 22:16Z (~1.9h before
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
                The reclaim&rsquo;s first real test failed — 07-23 closed below the
                D-EMA50 cap, OI grew on distribution not demand, and smart money is
                trimming. Scout steps back to deferred. Floor holds. Patient.
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
            v2 · 2026-07-24 00:07Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_&#123;2024,2025,2026&#125;.parquet
            (MA matrix subset) · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
