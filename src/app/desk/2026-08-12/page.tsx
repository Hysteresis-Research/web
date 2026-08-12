import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-12 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-12',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-12' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260812() {
  await requireViewer('/desk/2026-08-12');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-12 · v2</span>
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
              <span className="dn-big">$63,564</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.60%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-12 00:07Z (tape anchor 00:05Z)
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-12 00:05Z tape anchor</td>
                  <td className="dn-flag">
                    fresh · 1-min · anchor row t==&ldquo;08-12 08:05&rdquo; (BJ,
                    UTC+8) = 00:05Z daily pin; read at 00:07Z session start ·
                    landmine cleared (00:05Z pin is NOT t==&ldquo;08-12
                    00:05&rdquo;, which would be the 16:05Z 08-11 row)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-12 00:01Z scan (BJ 08:01)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · ~6-min stale vs 00:07Z read ·
                    in-progress bars · archived verbatim in
                    /opt/desk-note/snapshots/2026-08-12-0006
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-12 00:00Z snapshot</td>
                  <td className="dn-flag">
                    ~7-min stale vs snapshot anchor · Deribit idx $63,842 vs live
                    $63,564 ($278 above live) · 794 instruments · median IV 41.2%
                    · 12AUG26 0.3DTE −2.13M (a NEGATIVE front chunk) settles
                    08:00Z today (~8h AFTER this 00:05Z snapshot — still live, no
                    settle-adjustment applied)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-12 00:00Z
                  </td>
                  <td className="dn-flag">~7-min lag · 7d 1h bars · 22 assets · 166 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-11 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.9h render lag · FRED Tier-1: 10Y +7bp to 4.72% (EXTREME
                    RISK-OFF, RE-TIGHTENED), TIPS +3bp to 2.43%, HY OAS flat 2.70%
                    (RISK-ON), DXY 99.81 (+0.19 since 08-11), Fed net liq $5.840T
                    · MOVE bond vol UNAVAILABLE this render (fetch failed, 3rd
                    day) · several FX / liquidity rows carry from the prior render
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-08-12 00:05Z (close $63,540.30)</td>
                  <td className="dn-flag">
                    offsets recomputed vs live spot $63,564.01 · full 2019–2026
                    wildcard parquet = 363 W-SUN weekly bars · W-SMA200 IS
                    computable, prints $63,982 (−0.65%, just overhead); every
                    displayed W-SMA level is a full-history mean · W-EMA150/200
                    seed-sensitive, reported from their disclosed seed window
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle-floor watch</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · sma200 $63,760.71</td>
                  <td className="dn-flag">
                    recomputed_at 2026-08-10 00:11:24Z — now ~48h stale, carried
                    (no fresh weekly settle since 08-09; next weekly close 08-16) ·
                    JSON: sma200 $63,760.71, consecutive_above 6 through the 08-09
                    weekly settle $64,867.80 · slow level (~$250/wk), an
                    hours-stale JSON is fine per the runbook · NOTE live spot
                    $63,564 sits −0.31% BELOW this floor on a daily/intraday
                    basis, but the 6-week above-floor streak is a WEEKLY-CLOSE
                    read and is intact until the 08-16 settle
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
              <span className="dn-v bear">+10.95%</span>
              <span className="dn-src">live · raw 0.01 ×1095 = +10.95% ann, RIGHT AT the Binance cap · 24h mean +6.56% (was +7.95% on 08-11) · range +1.29% / +10.95% · 0 / 1441 sampled rows negative — the live print RE-HEATED to the cap off a cooled +1.3% trough, reversing the 08-11 leverage-off leg; the 24h mean cooled only because the overnight leg was soft, the last leg re-heated</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+2.41% → +10.95% live (24h mean +6.56%)</span>
              <span className="dn-src">the live rate re-heated +8.54pt off the 08-11 note&rsquo;s +2.41% and pinned the cap again; the cooling the prior note called &ldquo;the first leverage-off leg&rdquo; did not extend — carry is back on the cap into a fresh OI build</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+2.93% (+3,113 BTC)</span>
              <span className="dn-src">live · OI EXPANDED, reversing two days of net shrink — the last 4h added +362.3 BTC and the last 1h +66.6 BTC · leverage rebuilt on a −0.60% down-day, futures did the building (futCVD −2,128, bigNet −1,537) — a fresh short-stack, not a bid</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">64.34 / 35.66</span>
              <span className="dn-src">live_db `mkt_long_pct` · from 61.60 on 08-11 (+2.74pt more crowded) · 24h range 60.32 / 64.51 — retail kept buying the fade, crowding to the top of the range at a fresh lineage high</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−7,882 (net SHORT — but via the BJ 15:16 feed artifact)</span>
              <span className="dn-src">live · long 14.13k − short 22.01k · flipped from the 08-11 note&rsquo;s +2,947 net long, BUT the flip is a short_btc +11,735 ONE-MINUTE jump at BJ 15:16 08-11 (07:16Z) — the recurring feed re-sync artifact (that minute: long +376 / short +11,735 / net −11,358); over the full 24h longs were essentially flat (−79) while short added +10,751 (24h net Δ −10,830) — so this is NOT a clean certification, the mirror of the 08-10 artifact-crossed roll-back; post-artifact the net-short held ~17h, eased from a −10,596 trough (BJ 02:21) to −7,882</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 08-11 note</span>
              <span className="dn-v bear">+2,947 → −7,882 (Δnet −10,829)</span>
              <span className="dn-src">24h aggregate long −79, short +10,751, net −10,830 · a full flip long→short, but +11,735 of the short built in the single BJ 15:16 artifact minute (that minute long +376 / short +11,735 / net −11,358 — distinct from the 24h long −79) — |Δ|/prior_net = 10,829 / 2,947 = 3.67, larger than the prior net, so a &ldquo;cut fraction&rdquo; is the wrong frame; read directionally AND discount the SM short as artifact-contaminated, not a clean smart-money press</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.2% / 27.01%</span>
              <span className="dn-src">GEX median IV · 794 inst. · 30D close-to-close RV (logret.std ×√365 ×100, 30 returns) · chain-level richness ~+14.2pt</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+0.37% (above)</span>
              <span className="dn-src">flip $63,331 · vs live spot $63,564 (+0.37%; 63,564.01/63,331 − 1 = 0.368%) / GEX file Deribit idx $63,842 (+0.81%; 63,842/63,331 − 1 = 0.807%, file rounds +0.8%) — both refs positive, page rounds spot side to +0.37% for tile consistency · aggregate GEX +38.66M (expiry-strip / gex_summary.json net_gex basis; the GEX file&rsquo;s &ldquo;Total GEX / 1% move&rdquo; tile reads +22.0M but is internally inconsistent with its own by-expiry strip and gex_summary.json net_gex, both of which foot to +38.66M — the note uses the footed basis) — net-long-gamma, eased ~16% from +45.9M on 08-11 (NOT halved); a −11.00M $62k / −19.68M $60k shelf sits below the flip</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The 08-11 note&rsquo;s bearish path won on almost every leg but the
                two hard triggers, and the leverage book turned back on
              </span>. The failed reclaim did not re-base off the flip/floor — it
              resolved lower: the <span className="dn-tag bear">08-11 completed
              close $63,572.00</span> was a second consecutive close below the
              D-EMA50 cap (now <span className="dn-tag bear">$64,543</span>), and
              it slipped under both the daily-basis 200W floor{' '}
              <span className="dn-tag bear">$63,761</span> and the W-SMA200{' '}
              <span className="dn-tag bear">$63,982</span> while still holding
              above the 0-γ flip. The tape re-leveraged into the fade:{' '}
              <span className="dn-signal">
                OI EXPANDED +3,113 BTC (+2.93%), reversing two days of shrink
              </span>, funding <span className="dn-tag bear">RE-HEATED to the
              +10.95% Binance cap</span> (live, off a cooled +1.3% trough — the
              08-11 leverage-off leg did not extend), and retail crowded further
              to <span className="dn-tag bear">64.34% (+2.74pt)</span>, a fresh
              lineage high, buying the fall. The dealer book kept thinning —
              aggregate gamma <span className="dn-tag">eased ~16% to
              +38.66M</span> (from +45.9M on 08-11 — a modest trim, not a
              halving; still deeply net-long-gamma), the flip cushion is down to{' '}
              <span className="dn-tag bull">+0.37%</span> with a{' '}
              <span className="dn-tag bear">−11.00M $62k / −19.68M $60k</span>{' '}
              negative shelf beneath. The one bullish reading is compromised:{' '}
              <span className="dn-em">SM &ldquo;flipped&rdquo; back to net short
              −7,882, but that is a short_btc +11,735 one-minute jump through the
              recurring BJ 15:16 feed artifact (that minute: long +376 / short
              +11,735 / net −11,358) — over the full 24h longs are essentially
              flat (−79) while the short re-synced +10,751, so
              the SM short is artifact-contaminated (the mirror of the clean
              long-cross on 08-11) and is NOT weighted as a genuine smart-money
              press.</span>{' '}
              <span className="dn-signal">
                What still holds the line is thin
              </span>: spot $63,564 sits{' '}
              <span className="dn-tag bull">+0.37% above the $63,331 flip</span>{' '}
              and just above the D-SMA50{' '}
              <span className="dn-tag bull">$63,367 (+0.31%)</span>, aggregate
              gamma is still net positive (+38.66M, has not flipped), and the
              weekly-close cycle-floor streak (6 above through 08-09) is intact
              until the 08-16 settle. So the book{' '}
              <span className="dn-em">stays flat one more session</span>: the
              scout re-entry is further away (needs a cap RECLAIM with SM long —
              both legs now fail), and the chase-short is{' '}
              <span className="dn-em">firmer on the leverage/structure side but
              still stood down</span> — it
              arms on a 1d close through the $63,331 flip WITH aggregate gamma
              flipping negative, toward the $60k −19.68M crash-put.
            </p>

            <p>
              BTC prints <span className="dn-tag">$63,564</span> live,{' '}
              <span className="dn-tag bear">−0.60%</span> on 24h (spot 63,564.01
              vs 63,944.50 at the 08-11 08:05 BJ 24h-ago row) — a third straight
              soft print, shallower than the −1.47% of 08-11. The 24h shape is a
              probe of the cap then a slide under the floor: high{' '}
              <span className="dn-tag">$64,475.59 @ BJ 20:14 08-11 (12:14Z)</span>{' '}
              — which approached but did NOT reclaim the D-EMA50 cap $64,543 —
              then a fade to a low{' '}
              <span className="dn-tag">$63,248.53 @ BJ 03:15 08-12 (19:15Z
              08-11)</span> that pierced the $63,331 flip intraday before
              recovering. The load-bearing structural fact is the extended cap
              loss: daily closes{' '}
              <span className="dn-tag">08-08 $64,928.50</span>,{' '}
              <span className="dn-tag">08-09 $64,867.80</span>,{' '}
              <span className="dn-tag bear">08-10 $63,939.30</span> (first close
              below the cap), <span className="dn-tag bear">08-11 $63,572.00</span>{' '}
              (second close below, and below the 200W floor / W-SMA200 on a daily
              basis), and 08-12 in-progress $63,540.30 tracking it.{' '}
              <span className="dn-em">
                Two closes lost the cap and the second one slid under the floor
                band; the reclaim that ran from 08-07 is not just stalled, it is
                bleeding lower.
              </span>{' '}
              Spot now sits in a thin ~$230 support shelf — the D-SMA50{' '}
              <span className="dn-tag bull">$63,367 (+0.31%)</span> and the 0-γ
              flip <span className="dn-tag bull">$63,331 (+0.37%)</span> just
              below — with the reclaimed levels now overhead: the 200W floor{' '}
              <span className="dn-tag bear">$63,761 (−0.31%)</span>, W-SMA200{' '}
              <span className="dn-tag bear">$63,982 (−0.65%)</span>, D-SMA20{' '}
              <span className="dn-tag bear">$64,080 (−0.81%)</span>, D-EMA20{' '}
              <span className="dn-tag bear">$64,112 (−0.86%)</span>, and the
              D-EMA50 cap <span className="dn-tag bear">$64,543 (−1.52%)</span>.
              The next real overhead is unchanged and far above: the D-EMA100{' '}
              <span className="dn-tag bear">$66,692 (−4.69%)</span> confluence,
              never tested through this slide.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · OI EXPANDED +3,113 BTC (leverage back ON) · funding RE-HEATED to the +10.95% cap · retail crowded +2.74pt to 64.34% · SM &ldquo;flipped&rdquo; net short −7,882 but via the BJ 15:16 feed artifact (that minute short +11,735 / long +376; 24h longs flat −79) — discount it</span>
            </h2>

            <p>
              <span className="dn-signal">
                The leverage book turned back on into the fade — a re-leveraging
                short, not a base
              </span>. OI expanded{' '}
              <span className="dn-tag bear">+3,113 BTC (+2.93%)</span> over 24h,
              reversing the two-day shrink the 08-11 note tracked, and it built
              INTO the snapshot (last 4h +362.3, last 1h +66.6). The build was a
              futures phenomenon: over the 24h window futures CVD ran{' '}
              <span className="dn-tag bear">Δ −2,128.2</span> and big prints{' '}
              <span className="dn-tag bear">−1,537 BTC across 890 prints</span>{' '}
              against a mild spot bid — so the fresh open interest is aggressor
              selling in the perp, i.e. a short-stack being laid on as price
              faded, not demand. Retail leaned the crowded, dangerous way:
              mkt_long_pct <span className="dn-tag bear">64.34%</span> from 61.60%
              on 08-11 (+2.74pt), 24h range 60.32 / 64.51 — the crowd kept buying
              the dip to a fresh lineage-high crowding while price slid.{' '}
              <span className="dn-em">
                The SM &ldquo;flip&rdquo; back to net short must be read with the
                same skepticism the 08-11 note applied to its clean long-cross,
                inverted: SM net is −7,882 (long 14,132 − short 22,015) vs the
                08-11 note&rsquo;s +2,947, a Δnet of −10,829, but +11,735 of the
                short build printed in the single minute at BJ 15:16 08-11
                (07:16Z) — the recurring feed re-sync artifact (that minute
                long went +376, short +11,735, net −11,358) — while over the full
                24h long_btc was essentially unchanged (14,211 → 14,132, −79) and
                short added +10,751. A cut fraction is
                the wrong frame (|Δ|/prior_net = 3.67, larger than the entire
                prior net); the honest read is that the short_btc series
                re-synced upward and the net went short mechanically, NOT that
                smart money laid on a genuine short. Post-artifact the reading
                held net-short for ~17h, drifting from a −10,596 trough (BJ 02:21
                08-12, 18:21Z 08-11) back up to −7,882 as shorts came off ~1.1k
                and longs rebuilt into the snap.
              </span>{' '}
              So the desk does NOT lean on the SM short as a bearish signal — the
              genuine bearish threads are OI, funding, flow, retail and the
              dealer book.
            </p>

            <p>
              The leverage side is the loud tell.{' '}
              <span className="dn-signal">
                Funding re-heated all the way back to the Binance cap
              </span>: live <span className="dn-tag bear">+10.95% ann</span> (raw
              0.01 × 1095, the hard cap), 24h mean{' '}
              <span className="dn-tag">+6.56%</span> (down from the 08-11
              note&rsquo;s +7.95% because the overnight leg was soft), range{' '}
              <span className="dn-tag">+1.29% / +10.95%</span>, and{' '}
              <span className="dn-tag bear">0 / 1441 sampled rows negative</span>{' '}
              — longs paid shorts every minute, and the live print pinned the cap
              again off a cooled +1.3% trough. The 08-11 note&rsquo;s &ldquo;first
              genuine leverage-off leg&rdquo; did not extend; carry is back on the
              ceiling into a fresh OI build, the classic crowded-long-paying-to-hold
              setup. OI Δ <span className="dn-tag bear">+3,113 BTC (+2.93%)</span>{' '}
              — leverage rebuilding, not deflating. Perp trades a{' '}
              <span className="dn-tag bear">−$64.98 discount</span> to spot at the
              snap (1h mean −$59.81, 4h mean −$60.93, 24h mean −$64.17, range
              −$117.89 / −$14.11 — a persistent deep discount, basis never went
              premium across the 24h). 1-min aggressor skew snap{' '}
              <span className="dn-tag bear">−7.5</span> (1h mean −9.30, range
              −25.5 / +7.3) — a mild sell-lean, no oversold reflex bid.{' '}
              <span className="dn-em">
                Funding pinned to the cap + OI expanding on a down-day + a deep
                persistent perp discount + retail crowding a fresh high while
                futures sell the build: the leverage book is re-inflating on the
                short side into the break, the opposite of the deflation the 08-11
                note read. The only constructive thread — the SM long flip — has
                been re-consumed by the feed artifact.
              </span>
            </p>

            <p>
              Windowed flow reads <em>a re-leveraged fade — OI building on
              futures selling, a thin spot bid that never lifts price</em>. 24h:
              price <span className="dn-tag bear">−0.60%</span>, OI{' '}
              <span className="dn-tag bear">+3,113.1 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,106.5</span> (no cb_cvd reset in
              the window — verified), futures CVD{' '}
              <span className="dn-tag bear">Δ −2,128.2</span>, big-print{' '}
              <span className="dn-tag bear">−1,537 BTC / 890 prints</span>,
              taker-net <span className="dn-tag bear">−2,128.2</span>{' '}
              <span className="dn-em">(taker-net sum equals futures CVD Δ by
              construction — fut_cvd is the running cumsum of taker_net)</span> —{' '}
              <span className="dn-em">
                a small absorbed spot bid against heavy futures and big-print
                selling as OI expanded; the open interest is fresh shorts, not a
                demand build
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bear">−0.13%</span>, OI{' '}
              <span className="dn-tag bear">+362.3 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −297.6</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −617.9</span>, big-print{' '}
              <span className="dn-tag bear">−197.6 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−617.9</span> —{' '}
              <em>both spot and futures offered while OI still grew — shorts
              adding into the snap</em>. 1h: price{' '}
              <span className="dn-tag bear">−0.00%</span>, OI{' '}
              <span className="dn-tag bear">+66.6 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −219.6</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +10.2</span>, big-print{' '}
              <span className="dn-tag bear">−19.5 BTC</span>, taker-net{' '}
              <span className="dn-tag bull">+10.2</span> —{' '}
              <em>flat price, spot offered, futures a hair bid — a quiet balance
              into the snap with OI still ticking up</em>. The tell is the shape:
              unlike the 08-11 absorbed-spot-bid-at-the-lows, today OI grew every
              window on futures selling — the position book is adding short
              exposure into the fade, and the spot bid is thin and losing.{' '}
              <span className="dn-em">
                (The 4h and 1h blocks are cumulative deltas measured from the
                previous boundary row — BJ 04:05 → 08:05 and 07:05 → 08:05 — the
                running-cumsum convention for these series; the exact-clock windows
                differ by a few BTC of OI and CVD.)
              </span>
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF stays bearish — 12h / 1d water-up death crosses now CONFIRMED (1 bar in), 8h death 5b, regime 5/9 cycle-reversal · only the HTF bottom-div cluster (12h/1w) + 1M ⚡TD9 BUY lean up · cap lost a 2nd close, spot slid under the floor band</span>
            </h2>

            <p>
              <span className="dn-signal">
                The mid-book death crosses the 08-11 note flagged as fresh have
                confirmed a bar in
              </span>. The 12h and 1d water-up death crosses that &ldquo;just
              printed&rdquo; on 08-11 are now{' '}
              <span className="dn-tag bear">1 bar ago</span> (12h DIF +66.6, 1d
              DIF +45.6 — still early crosses above water), the 8h carries a{' '}
              <span className="dn-tag bear">water-up death 5b</span>, and the fast
              frames stay down — 1h water-down death 9b (RSI 38.7, below cloud),
              4h water-up death 19b (RSI 35.7, below cloud), 15m / 30m nominally
              water-down golden but below cloud with RSI in the low 40s. The
              header net read is{' '}
              <em>&ldquo;1 long / 9 short · bearish resonance, sell
              rallies&rdquo;</em> with the regime{' '}
              <span className="dn-tag bear">5/9 cycle-reversal (JT&lt;0) —
              mean-reversion / bounce-strong, trend-follow cautious</span> (from
              the 08-11 note&rsquo;s 6/9). What still leans up is the same thin,
              higher-TF set: the{' '}
              <span className="dn-tag bull">HTF bottom-div cluster at 12h /
              1w</span> survives (now part of a 4-frame bottom-div 15m/30m/12h/1w),
              1w is still a <span className="dn-tag bull">water-down golden
              3b</span>, and the <span className="dn-tag bull">1M ⚡TD9 BUY
              (printed $63,554)</span> holds; against it a top-div cluster caps
              the mid frames at <span className="dn-tag bear">1h / 4h /
              8h</span>.{' '}
              <span className="dn-em">
                Read straight: the structure confirmed the cap break a bar
                deeper. The mid-book (8h/12h/1d) is now death-crossed with
                confirmation, the regime tag stays reversal, and only the slowest
                frames and a bottom-div cluster keep a bounce case alive. This is
                still the fingerprint of a failed reclaim grinding its floor, not
                a base building.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,557</td><td className="num">44.7</td><td className="neut">golden (water-dn) 17b</td><td className="bear">below ↑63.8k 38b</td><td>Sell 1</td><td>BULL reg</td></tr>
                <tr><td>30m</td><td className="num">63,557</td><td className="num">41.1</td><td className="neut">golden (water-dn) 6b</td><td className="bear">below ↑64.1k 22b</td><td>Buy 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">63,554</td><td className="num">38.7</td><td className="bear">death (water-dn) 9b</td><td className="bear">below ↑64.5k 35b</td><td>Buy 1</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">63,554</td><td className="num">35.7</td><td className="bear">death (water-up) 19b</td><td className="bear">below ↑63.8k 3b</td><td>Buy 4</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>8h</td><td className="num">63,554</td><td className="num">40.4</td><td className="bear">death (water-up) 5b</td><td className="neut">in cloud 63.5k–64.6k 1b</td><td>Buy 6</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>12h</td><td className="num">63,554</td><td className="num">43.1</td><td className="bear">death (water-up) 1b</td><td className="bear">below ↑64.1k 1b</td><td>Buy 4</td><td>BULL reg</td></tr>
                <tr><td>1d</td><td className="num">63,554</td><td className="num">46.2</td><td className="bear">death (water-up) 1b</td><td className="neut">in cloud 62.7k–67.0k 23b</td><td>Buy 3</td><td>BULL hid</td></tr>
                <tr><td>3d</td><td className="num">63,554</td><td className="num">44.2</td><td className="neut">—</td><td className="bear">below ↑75.8k 24b</td><td>Sell 1</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,554</td><td className="num">39.5</td><td className="bull">golden (water-dn) 3b</td><td className="bear">below ↑85.9k 28b</td><td>Buy 1</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">63,554</td><td className="num">43.6</td><td className="neut">—</td><td className="bull">above ↓47.4k 30b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (BJ 08:01; rolling
                    latest file; archived verbatim in
                    /opt/desk-note/snapshots/2026-08-12-0006). Header alerts:{' '}
                    <em>12h water-up death cross (1 bar ago), DIF +66.6 — early
                    death cross</em>; <em>1d water-up death cross (1 bar ago), DIF
                    +45.6</em>; <em>1M ⚡TD9 BUY printed at $63,554</em>;{' '}
                    <em>⚠ HTF bottom-div cluster (12h/1w)</em>. Scan spot $63,554,
                    24h −0.57%, 24h H/L $64,470 / $63,212, qVol $6.77B (00:01Z MTF
                    scan; the live-tape anchor at 00:05Z shows spot $63,564 and
                    24h −0.60% on the same window — the ~4-min gap accounts for
                    the difference). Closes are in-progress bars; treat every
                    value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the extended cap loss and the thinning
              support shelf. Spot $63,564 sits{' '}
              <span className="dn-tag bear">−1.52% below the D-EMA50 cap
              $64,543</span> and below the whole reclaimed cluster —{' '}
              <span className="dn-tag bear">D-EMA20 $64,112 (−0.86%)</span>,{' '}
              <span className="dn-tag bear">D-SMA20 $64,080 (−0.81%)</span>,{' '}
              <span className="dn-tag bear">W-SMA200 $63,982 (−0.65%)</span>,{' '}
              <span className="dn-tag bear">200W floor $63,761 (−0.31%,
              daily basis)</span> — with only a thin shelf beneath it:{' '}
              <span className="dn-tag bull">D-SMA50 $63,367 (+0.31%)</span> and{' '}
              <span className="dn-tag bull">0γ flip $63,331 (+0.37%)</span>,
              roughly $200 of support before the flip. Above the cluster,
              unchanged and far off:{' '}
              <span className="dn-tag bear">D-EMA100 $66,692 (−4.69%)</span>{' '}
              (the nearest real overhead confluence),{' '}
              <span className="dn-tag bear">D-SMA100 $67,427 (−5.73%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $68,525 (−7.24%; seed)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $68,466 (−7.16%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,107 (−8.02%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,206 (−8.15%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $69,332 (−8.32%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $69,752 (−8.87%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $72,020 (−11.74%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $73,842 (−13.92%; seed)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $77,119 (−17.58%)</span>,{' '}
              <span className="dn-tag bear">W-EMA50 $77,255 (−17.72%)</span>,{' '}
              <span className="dn-tag bear">W-EMA100 $78,475 (−19.00%)</span>,{' '}
              <span className="dn-tag bear">W-SMA50 $82,465 (−22.92%)</span>,{' '}
              <span className="dn-tag bear">W-SMA100 $88,706 (−28.34%)</span>.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-08-12 00:05Z (close
                $63,540.30); offsets recomputed against live spot $63,564.01.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. The full 2019–2026 wildcard parquet holds 363
                W-SUN weekly bars, so W-SMA200 IS computable — it prints $63,982
                (−0.65%, just overhead) and every displayed W-SMA level is a
                full-history mean. (This parquet W-SMA200 is distinct from the
                trap-watch cycle-floor sma200 $63,761, computed on the
                JSON&rsquo;s own weekly basis.) W-EMA150 $73,842 (−13.92%) and
                W-EMA200 $68,525 (−7.24%) are seed-sensitive and reported from
                their disclosed seed window, not a full-adjust recompute. Daily
                closes: 08-07 $64,885.40, 08-08 $64,928.50, 08-09 $64,867.80,
                08-10 $63,939.30, 08-11 $63,572.00 (the second completed close
                below the D-EMA50 cap, and below the daily-basis 200W floor /
                W-SMA200), 08-12 (in-progress) $63,540.30. Separately, the 200W
                cycle floor (sma200 $63,760.71 from the trap-watch JSON,
                recomputed 2026-08-10 00:11:24Z, now ~48h stale, carried — no
                fresh weekly settle since 08-09) still shows 6 above-floor weekly
                closes through the 08-09 settle $64,867.80 (+1.74% clear); the
                streak is a WEEKLY-CLOSE read and is intact until the 08-16
                settle even though live spot $63,564 is −0.31% below the floor on
                a daily basis.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · gamma eased ~16% to +38.66M (still deeply net-long) · flip $63,331 (spot +0.37% above) · $64.5k +14.42M wall overhead, −11.00M $62k / −19.68M $60k shelf below · 12AUG 0DTE −2.13M (negative front) settles 08:00Z · heaviest wall $70k +17.80M</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book stays deeply net-long-gamma; the buffer eased
                modestly, it is not collapsing toward the flip
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+38.66M / 1%</span> (expiry-strip /
              gex_summary.json net_gex basis; the GEX file&rsquo;s
              &ldquo;Total GEX / 1% move&rdquo; tile reads +22.0M but conflicts
              with its own by-expiry strip and gex_summary.json, both of which
              foot to +38.66M — the note uses the footed basis) — net-long-gamma
              (dampening), eased ~16% from the 08-11 note&rsquo;s +45.9M; the
              sharp drop was 08-10&rsquo;s +111.3M → 08-11&rsquo;s +45.9M (roughly
              a halving), while 08-11 → 08-12 is only a modest trim, NOT a second
              collapse — the book remains a substantial positive-gamma dampener. The
              0-γ flip sits <span className="dn-tag">$63,331</span>, and spot
              $63,564 is{' '}
              <span className="dn-tag bull">+0.37% above flip</span> on
              spot-denominated math (63,564.01 / 63,331 − 1 = +0.368%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads +0.8% off its
              Deribit-index $63,842 ($278 above live spot), which is{' '}
              <span className="dn-tag bull">+0.81%</span> (63,842 / 63,331 − 1 =
              +0.807%) — both references positive, but the cushion thinned again
              from +0.73% / +1.18% on 08-11, and the 24h low $63,248 already
              pierced the flip intraday. The wall map is two-sided around a spot
              that sits below the positive overhead band: overhead{' '}
              <span className="dn-tag bull">$70k +17.80M</span> (heaviest wall),{' '}
              <span className="dn-tag bull">$64.5k +14.42M</span> (a positive wall
              right above spot),{' '}
              <span className="dn-tag bull">$65k +11.75M</span>,{' '}
              <span className="dn-tag bull">$66k +10.90M</span>,{' '}
              <span className="dn-tag bull">$68k +10.75M</span>,{' '}
              <span className="dn-tag bull">$67k +10.29M</span>,{' '}
              <span className="dn-tag bull">$80k +7.77M</span>,{' '}
              <span className="dn-tag bull">$72k +7.34M</span>; and at/below spot
              the negative shelf —{' '}
              <span className="dn-tag bear">$62k −11.00M</span> and{' '}
              <span className="dn-tag bear">$60k −19.68M</span> crash-put residual,
              a <span className="dn-tag bear">−30.68M</span> negative shelf under
              the tape.{' '}
              <span className="dn-em">
                The structure that matters: the $64k negative wall the 08-11 note
                flagged has repriced — a $64.5k +14.42M positive wall now caps
                just overhead while the negatives concentrated into the $60k/$62k
                shelf below. So dealers are long gamma just above spot (damping a
                bounce into the cap) and short gamma at $60k–$62k (accelerating a
                break of the flip). The $64.5k–$72k positive band (inclusive of
                the $70k +17.80M wall) still totals
                ~+83.3M of overhead supply that caps a squeeze; the floor cushion is
                now the $60k/$62k negative shelf, so a loss of the $63,331 flip
                gets dealer-accelerated toward $60k.
              </span>{' '}
              12AUG26 0.3DTE is <span className="dn-tag bear">−2.13M</span> (a
              small NEGATIVE front chunk) and settles at 08:00Z today — ~8h{' '}
              <em>after</em> this 00:05Z snapshot, so it is still live in the book
              (no settle-adjustment); removing it post-settle would lift the
              aggregate to roughly +38.66M − (−2.13M) = +40.79M. Forward expiries
              beyond the front: 13AUG 1.3 +3.79M, 14AUG 2.3 −2.83M, 15AUG 3.3
              +1.63M, 21AUG 9.3 +7.73M, 28AUG 16.3 +14.14M (heaviest), 25SEP 44.3
              +10.59M, 30OCT 79.3 +0.66M, 25DEC 135.3 +3.29M, 26MAR27 226.3
              +1.11M, 25JUN27 317.3 +0.68M.{' '}
              <span className="dn-em">
                No large negative amplifier on any forward expiry — the two
                near-dated negatives (12AUG −2.13M, 14AUG −2.83M) are small — but
                the strip is modestly less long-gamma than 08-11, though it
                remains deeply net-long-gamma — the cushion eased ~16%, it did
                not collapse.
              </span>
            </p>

            <p>
              IV median across 794 instruments is{' '}
              <span className="dn-tag">41.2%</span> against 30D close-to-close RV
              of <span className="dn-tag">27.01%</span> — chain-level richness{' '}
              <span className="dn-tag">~+14.2pt</span>. A chain-median across N
              instruments, <span className="dn-em">not</span> a tradable spread;
              expiry-/strike-level vega, skew and term structure remain not
              loaded; the vol read stays framework-only. RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log
              returns anchored to parquet last bar 2026-08-12 00:05Z (30-return
              value 27.01%; the 29-return alt reads 22.78%). Put/Call ratio 0.57,
              put OI 120,618 BTC, call OI 213,010 BTC — still a call-heavy book,
              consistent with the net-positive-gamma reading even as the aggregate
              eased ~16%.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · rates RE-TIGHTENED — 10Y +7bp to 4.72% (EXTREME RISK-OFF), TIPS +3bp to 2.43% · credit still RISK-ON (HY OAS flat 2.70%) · DXY firmer 99.81 · MOVE unavailable (3rd day) · reclaim-long rates filter FALSE at 17bp (worse) · BTC-vs-TradFi lag essentially closed to −0.09pt as the whole risk tape softened</span>
            </h2>

            <p>
              <span className="dn-signal">
                Rates backed up again — the macro headwind re-tightened after a
                one-day ease
              </span>. Dashboard render is 2026-08-11 22:15Z, ~1.9h before the
              snapshot (rates rows updated; several FX / liquidity rows carry from
              the prior render). US 10Y nominal{' '}
              <span className="dn-tag bear">4.72% (+7.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.34</span>, episodic z{' '}
              <span className="dn-tag">+1.34</span> — EXTREME RISK-OFF,
              re-tightened +7bp off the 08-11 note&rsquo;s 4.65% (giving back the
              ease). 10Y TIPS real{' '}
              <span className="dn-tag bear">2.43% (+3.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.45</span> — still EXTREME RISK-OFF,
              firmer. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.33% (+5.0bp)</span>, episodic z{' '}
              <span className="dn-tag bear">+2.16</span> — firmer. HY OAS{' '}
              <span className="dn-tag bull">2.70% (0.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.09</span>, episodic z{' '}
              <span className="dn-tag bull">−0.74</span> — RISK-ON, credit still
              calm and flat on the day. MOVE bond vol{' '}
              <span className="dn-tag stale">UNAVAILABLE</span> this render (fetch
              failed, third day). DXY{' '}
              <span className="dn-tag bear">99.81 (+0.19 since 08-11)</span>,
              episodic z <span className="dn-tag bull">−1.43</span> — firmer.
              Fed net liquidity{' '}
              <span className="dn-tag">$5.840T (+0.014T)</span>, episodic z{' '}
              <span className="dn-tag bear">+2.47</span>. US-JP 10Y spread{' '}
              <span className="dn-tag bear">2.05% (+7.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag bear">159.29 (+0.14)</span> (yen weaker).
              NFCI −0.529 (loose, stale 11d).{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) is FALSE at
                4.72% — 17bp on the wrong side, WORSE than the 08-11 note&rsquo;s
                10bp as 10Y re-tightened. Rates are back to being the structural
                headwind (10Y and TIPS both EXTREME RISK-OFF, firmer), but credit
                is still RISK-ON, so the macro tape is a headwind, not the acute
                driver of the break — the break stays positioning-and-structure
                driven. The BTC-vs-TradFi decoupling essentially closed to
                −0.09pt this print (BTC −0.66% vs NQ −0.57% on 7d) from −2.05pt on
                08-11 — but it closed the wrong way, because the whole risk tape
                softened on this rolling window (NQ went 7d-negative) and BTC
                simply matched it lower, not because BTC outperformed.
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
                <tr><td>US 10Y nominal</td><td className="num">4.72%</td><td className="num bear">+7.0bp</td><td className="num bear">+2.34</td><td className="num">+1.34</td><td className="bear">EXTREME RISK-OFF · re-tightened</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.43%</td><td className="num bear">+3.0bp</td><td className="num bear">+2.45</td><td className="num">+0.98</td><td className="bear">EXTREME RISK-OFF · firmer</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.33%</td><td className="num bear">+5.0bp</td><td className="num">+1.58</td><td className="num bear">+2.16</td><td className="neut">no tag · episodic</td></tr>
                <tr><td>HY OAS</td><td className="num">2.70%</td><td className="num">0.0bp</td><td className="num bull">−1.09</td><td className="num bull">−0.74</td><td className="bull">RISK-ON · credit calm</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.529</td><td className="num">+0.00</td><td className="num">−0.65</td><td className="num bull">−1.00</td><td className="stale">loose · stale 11d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">unavailable this render (3rd day)</td></tr>
                <tr><td>DXY</td><td className="num">99.81</td><td className="num bear">+0.19*</td><td className="num">+0.74</td><td className="num bull">−1.43</td><td className="bear">firmer · tight regime (*vs 08-11)</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.840T</td><td className="num">+0.014T</td><td className="num">−0.70</td><td className="num bear">+2.47</td><td className="neut">small weekly build</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.29</td><td className="num bear">+0.14</td><td className="num">+0.68</td><td className="num bull">−0.97</td><td className="bear">yen weaker</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.05%</td><td className="num bear">+7.0bp</td><td className="num">−0.13</td><td className="num">+1.34</td><td className="neut">neutral</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7365</td><td className="num">−0.01</td><td className="num bull">−1.41</td><td className="num bull">−1.63</td><td className="neut">no tag · loose</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.29%</td><td className="num bear">+4.0bp</td><td className="num bull">−0.45</td><td className="num bear">+1.94</td><td className="neut">no tag · episodic</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">monthly · stale 71d · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 166 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.207</span>{' '}
              (IDIOSYNCRATIC band, &lt; 0.25 — essentially flat vs the 08-11
              note&rsquo;s 0.211). BTC&rsquo;s listed ties: NQ{' '}
              <span className="dn-tag">+0.360</span> (top), GOLD{' '}
              <span className="dn-tag">+0.312</span>, COPPER{' '}
              <span className="dn-tag">+0.294</span>, SP500{' '}
              <span className="dn-tag">+0.290</span>, BRENT{' '}
              <span className="dn-tag">−0.279</span>, PLAT{' '}
              <span className="dn-tag">+0.263</span>, SILVER{' '}
              <span className="dn-tag">+0.251</span>, CL{' '}
              <span className="dn-tag">−0.224</span>, JP225{' '}
              <span className="dn-tag">+0.214</span>, PALL{' '}
              <span className="dn-tag">+0.203</span>, AAPL{' '}
              <span className="dn-tag">+0.192</span>, NVDA{' '}
              <span className="dn-tag">+0.167</span>, TSLA{' '}
              <span className="dn-tag">+0.165</span>. 7d performance:{' '}
              <span className="dn-tag bear">BTC −0.66%</span>, NQ{' '}
              <span className="dn-tag bear">−0.57%</span>, SP500{' '}
              <span className="dn-tag bear">−0.31%</span>, JP225{' '}
              <span className="dn-tag bull">+1.65%</span>, NVDA{' '}
              <span className="dn-tag bull">+0.73%</span>, META{' '}
              <span className="dn-tag bull">+1.72%</span>, MSFT{' '}
              <span className="dn-tag bull">+2.42%</span>, TSLA{' '}
              <span className="dn-tag bull">+2.23%</span>, GOOGL{' '}
              <span className="dn-tag bear">−8.68%</span> (big laggard), AMZN{' '}
              <span className="dn-tag bear">−2.15%</span>, AAPL{' '}
              <span className="dn-tag bear">−1.69%</span>. Metals / energy led:
              SILVER <span className="dn-tag bull">+8.37%</span> (leader), GOLD{' '}
              <span className="dn-tag bull">+7.05%</span>, URNM{' '}
              <span className="dn-tag bull">+5.05%</span>, PALL{' '}
              <span className="dn-tag bull">+1.60%</span>, PLAT{' '}
              <span className="dn-tag bull">+0.65%</span>, COPPER{' '}
              <span className="dn-tag bull">+0.71%</span>; energy{' '}
              BRENT <span className="dn-tag bull">+10.65%</span>, CL{' '}
              <span className="dn-tag bull">+9.46%</span>, NGAS{' '}
              <span className="dn-tag bull">+3.56%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine essentially closed to
                ~−0.09pt (BTC −0.66% vs NQ −0.57%) from −2.05pt on 08-11 — but it
                closed the wrong way: NQ rolled negative on this rolling window
                and BTC merely matched it lower, so the &ldquo;convergence&rdquo;
                is a softening risk tape, not BTC strength. Precious metals and
                energy are the only 7d leaders. Idiosyncratic-to-crypto stays the
                load-bearing read: at |r| 0.207 the tape is not moving BTC,
                positioning and structure are.
              </span>{' '}
              JGB monthly 2.67% carries an EXTREME RISK-OFF monthly tag (stale
              71d) — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · book FLAT (stays flat) · scout re-entry FURTHER away — both legs now fail (cap lost a 2nd close, SM &ldquo;short&rdquo; is artifact) · chase-short firmer on the leverage side but STILL stood down (dealer book stays a substantial +38.66M positive-gamma dampener) — arms only on a 1d close through the $63,331 flip WITH aggregate gamma flipping negative</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — but the balance shifted toward
                the short side of the ledger
              </span>. The 08-11 note gated the scout re-entry on a cap RECLAIM (1d
              close back &gt; D-EMA50) WITH SM still net long, and gated the
              chase-short on a 1d close through the flip/floor WITH aggregate gamma
              flipping negative. Today both scout legs moved the wrong way: the cap
              is lost on a second close ($63,572), and the SM &ldquo;long&rdquo;
              re-consumed itself into the BJ 15:16 feed artifact (net −7,882, but
              artifact-driven; that minute long +376 / short +11,735, 24h longs
              flat −79). So a scout re-entry is{' '}
              <em>further</em> away, not closer. The chase-short is the trade that
              firmed: the 08-11 close slid under the
              daily-basis 200W floor and W-SMA200, OI is expanding on futures
              selling, funding pinned the cap, and retail crowded a fresh high —
              though the dealer book stays a substantial +38.66M positive-gamma
              dampener, so the gamma-flip trigger is not close.{' '}
              <span className="dn-em">
                But the two hard triggers have STILL not fired: the 08-11 close
                $63,572 held above the $63,481/$63,331 flip on a close basis (the
                24h low pierced it only intraday), and aggregate gamma is +38.66M —
                positive, not yet flipped. Shorting a tape that still holds the
                flip on a close, with a still-substantial positive dealer book, is
                premature by the same discipline the 08-11 note applied to the
                long. So the chase-short is armed-and-waiting, not live.
              </span>{' '}
              No new position on this snap; the desk waits for the $63,331 flip to
              break on a close AND the aggregate to flip negative before pressing
              short.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · scout re-entry · DEFERRED · FURTHER away — cap lost a 2nd close AND the SM long re-consumed into the feed artifact</span>
              <div className="dn-trade-name">
                Cover-bounce scout re-entry — deferred and moving away; the cap is lost on a second close and the SM &ldquo;long&rdquo; that was the one constructive leg on 08-11 has re-crossed short through the BJ 15:16 artifact
              </div>
              <div className="dn-thesis">
                The 08-11 re-entry needed a cap RECLAIM with SM still long. Neither
                holds now. The reclaim did not happen — the 24h high $64,475
                probed but did not retake the D-EMA50 cap $64,543, and the 08-11
                close $63,572 is a second close below it. The SM leg that fired on
                08-11 (a clean net-long cross) has reversed into the recurring BJ
                15:16 feed artifact (net −7,882, but +11,735 of the short built in
                one artifact minute — that minute long +376 / short +11,735 / net
                −11,358, with 24h longs flat −79), so there is no certifiable
                SM long to lean on. The only surviving bullish threads are the HTF
                bottom-div cluster (12h/1w), the 1M ⚡TD9 BUY, and a thin absorbed
                spot bid — not enough to trigger. Status:{' '}
                <em>deferred / no position</em>. The scout needs the cap
                RECLAIMED on a close AND a certifiable (non-artifact) SM long
                before it re-arms.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm trigger (both legs)</span><span className="dn-lvl-v bull">1d close back &gt; D-EMA50 cap $64,543 (a genuine reclaim) AND a certifiable SM net &gt; +1k (NOT an artifact cross) → scout long 0.2R starter</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on the two-leg print, scout long 0.2R starter — a single bounded starter, no add-leg</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1d close &lt; $63,331 (0γ flip) — a close below ends the digestion read and hands the tape to the chase-short</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$66,692 (D-EMA100) confluence, then $67,427 (D-SMA100)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R starter (single, no expansion) · take half at the $66.7k confluence</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R (illustrative):</b> re-arm entry ~$64,543 (cap reclaim),
                stop $63,331 (flip) = ~$1,212 risk; first target $66,692
                (D-EMA100) = ~$2,149 reward ≈ 1.8:1. <b>Hard rule:</b> do not
                re-enter on any SM signal that crosses through the BJ 14–15 /
                15:16 feed artifact window — the 08-10 and 08-12 short reads and
                the risk of a mirror false-long all trace to that re-sync. The cap
                must be reclaimed on a close first; a spot bounce to $64.5k
                intraday with the cap still lost on the daily is a false start.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · chase-short · firmer but STILL stood down (flip held on a close, gamma still +38.66M positive) — arms on a 1d close through the flip WITH gamma negative</span>
              <div className="dn-trade-name">
                Chase-short — armed-and-waiting: the 08-11 close slid under the daily 200W floor / W-SMA200, OI is building shorts and funding re-heated to the cap (gamma eased only ~16% to +38.66M and stays a substantial dampener, so the gamma-flip trigger is not close); it goes live on a 1d close through the $63,331 flip WITH the aggregate flipping negative
              </div>
              <div className="dn-thesis">
                A short-side press requires the dealer book to lose its net-long
                gamma AND price to lose the flip on a close. Both are closer than
                the 08-11 note but neither has cleared: aggregate GEX is +38.66M
                (still deeply net positive, eased ~16%, with the $62k/$60k negative
                shelf building beneath), the flip sits $63,331 with spot +0.37%
                above, and the 08-11 close $63,572 held above it (the 24h low
                pierced it only intraday). The re-leveraging tape — OI expanding on
                futures selling, funding pinned to the cap, retail crowding a fresh
                high, MTF reversal regime — is
                the strongest bear setup of the lineage on the leverage/structure
                legs, but the dealer book stays a substantial +38.66M
                positive-gamma dampener (the gamma-flip trigger is not close) and
                the SM &ldquo;short&rdquo;
                is artifact-contaminated, so neither adds to it. A 1d close through
                the flip with the aggregate negative arms the press quickly, toward
                the $60k −19.68M crash-put.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">arm condition</span><span className="dn-lvl-v bear">1d close &lt; $63,331 flip AND aggregate GEX flips negative (the $62k −11.00M / $60k −19.68M shelf pulling it under zero) → arm short toward the $60k −19.68M crash-put</span></div>
                <div><span className="dn-lvl-k">floor watch</span><span className="dn-lvl-v bull">200W sma200 $63,760.71 (JSON recomputed 08-10 00:11Z, ~48h stale, carried) — a WEEKLY close below ends the cycle-floor read; live spot is −0.31% below on a daily basis but the 6-week streak holds until the 08-16 settle</span></div>
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">stood down · no short while the flip holds on a close and aggregate gamma is net positive — but the $62k/$60k negative shelf means a break of the flip gets dealer-accelerated toward $60k</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> the book is a thinner but still substantial
                dampening clamp — gamma eased from +111.3M (08-10) to +38.66M over
                two days (the sharp step was 08-10 → 08-11; 08-11 → 08-12 only a
                modest trim) and the negatives concentrated at $60k–$62k, so a
                loss of the flip would be amplified rather than bid. But shorting a tape that still
                holds the flip on a close, with the aggregate still positive and
                the SM &ldquo;short&rdquo; an artifact, is premature; wait for the
                level to break on a close AND the aggregate to flip. The tell is
                the flip: if a daily closes below $63,331 and the aggregate goes
                negative, the chase-short is live.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · the failed reclaim is resolving LOWER · regime shifted from failed-reclaim-testing-the-floor to failed-reclaim-losing-the-floor-band, flip is the last line</span>
              <div className="dn-trade-name">
                Reclaim lifecycle — resolving lower: the 08-07 D-EMA50 reclaim lost the cap on 08-10, slid under the daily 200W floor / W-SMA200 on the 08-11 close, and now sits on the $63,331 flip as the last line, with the lone SM counter-signal re-consumed by the feed artifact
              </div>
              <div className="dn-thesis">
                The 08-11 note framed the question as &ldquo;re-base off the
                flip/floor, or resolve lower.&rdquo; It is resolving lower. The
                08-11 close $63,572 slid under both the daily-basis 200W floor
                $63,761 and the W-SMA200 $63,982, the gamma cushion eased ~16%
                (to +38.66M, still substantial),
                OI re-expanded on futures selling, and funding re-heated to the
                cap. The one bullish counter-signal from 08-11 — the clean SM long
                flip — has re-crossed short through the BJ 15:16 artifact and is no
                longer certifiable. What is NOT yet lost is the flip: closes still
                hold above $63,331, aggregate gamma is still positive, and the
                weekly-close cycle-floor streak (6 above through 08-09) is intact
                until 08-16.{' '}
                <span className="dn-em">
                  The regime read has shifted from failed-reclaim-testing-the-floor
                  to failed-reclaim-losing-the-floor-band, with the $63,331 flip as
                  the last line before the chase-short goes live. The framework
                  watches the flip on a close and the aggregate gamma sign — those
                  two, together, decide whether this is a base on the flip or the
                  first structural breakdown toward $60k.
                </span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">resolving lower</span><span className="dn-lvl-v bear">08-11 close $63,572 below the daily 200W floor $63,761 / W-SMA200 $63,982; gamma +45.9M → +38.66M (eased ~16%, still deeply positive); OI +3,113 on futures selling; funding re-heated to the +10.95% cap; retail 64.34%</span></div>
                <div><span className="dn-lvl-k">counter-signal (weakened)</span><span className="dn-lvl-v bull">HTF bottom-div 12h/1w survives, 1M ⚡TD9 BUY holds, a thin +1,107 spot CVD bid — but the SM long flip has re-crossed short via the BJ 15:16 artifact and is no longer certifiable</span></div>
                <div><span className="dn-lvl-k">last line</span><span className="dn-lvl-v">the $63,331 0γ flip on a CLOSE basis (24h low $63,248 pierced it intraday and recovered) + the weekly-close cycle-floor streak intact until 08-16</span></div>
                <div><span className="dn-lvl-k">resolution levels</span><span className="dn-lvl-v">up: 1d close &gt; D-EMA50 $64,543 (reclaim, re-arms scout) · down: 1d close &lt; $63,331 flip WITH gamma negative (arms chase-short toward $60k)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a thesis resolving against the
                bullish case is a signal, not a thing to defend — the reclaim is
                bleeding lower and the note says so. But a failed reclaim that
                still holds the flip on a close, with a still-substantial positive
                dealer book (+38.66M) and the weekly cycle-floor streak intact, is not yet a
                breakdown; the $63,331 flip is the line that separates &ldquo;base
                on the flip&rdquo; from &ldquo;first structural break toward
                $60k.&rdquo; Trade neither side until that line resolves on a close.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · cap loss EXTENDED to a 2nd close and slid under the daily floor band · leverage turned back ON (OI +3,113, funding to the cap, retail +2.74pt) · SM &ldquo;short&rdquo; is a feed artifact · scout re-entry further away · chase-short firmer but arms only on a flip loss + gamma negative (gamma still +38.66M positive)</span>
            </h2>

            <p>
              Of the 08-11 decision conditions: the cap-lost escalation EXTENDED
              (a second close $63,572 below the cap, and below the daily 200W
              floor / W-SMA200); the SM flip REVERSED back to net short but through
              the BJ 15:16 feed artifact (that minute short +11,735 / long +376;
              24h longs flat −79) — so it is NOT a certifiable smart-money press; the scout re-entry
              DID NOT TRIGGER and moved further away (both legs now fail); the
              flip/floor break PARTIALLY fired (the 08-11 close slid under the
              daily-basis 200W floor $63,761 and W-SMA200 $63,982 but held above
              the $63,481/$63,331 flip; the weekly-close cycle-floor streak is
              intact); the chase-short re-arm DID NOT FIRE (aggregate gamma still
              +38.66M positive, spot above the flip) though the case firmed
              materially; and the funding cooling REVERSED (live re-heated to the
              +10.95% cap, OI re-expanded +3,113). <em>The bearish path won on
              every soft leg — OI, funding, gamma, retail, MTF, macro — but the two
              hard triggers (a flip loss on a close AND aggregate gamma flipping
              negative) have still not fired, and the lone bullish counter-signal
              re-consumed itself into the feed artifact.</em> The conditions re-set
              around a flat book, an extended cap loss, an eased-but-still-substantial
              positive dealer book (+38.66M), and a flip that is now the last line:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Cap loss EXTENDED (2nd close, under the daily floor band)</td><td className="bear">1d close $63,572.00 &lt; D-EMA50 cap $64,543 (second consecutive), and below the daily-basis 200W floor $63,761 / W-SMA200 $63,982</td><td>the failed-reclaim read deepens; the note leads with the bleed-lower, does not defend the reclaim</td></tr>
                <tr><td>Leverage turned back ON (re-inflation)</td><td className="bear">OI +3,113 BTC (+2.93%) on futures selling; funding re-heated to the +10.95% cap; retail 64.34% (+2.74pt)</td><td>the 08-11 leverage-off leg did not extend; a re-leveraging short-into-the-fade — bearish weight, no action (not a trigger on its own)</td></tr>
                <tr><td>SM &ldquo;flipped&rdquo; net short — ARTIFACT</td><td className="stale">SM net +2,947 → −7,882, but +11,735 of the short built in the single BJ 15:16 08-11 artifact minute (that minute long +376 / short +11,735 / net −11,358; 24h longs flat −79); |Δ|/prior_net 3.67</td><td>DISCOUNT — not a certifiable smart-money press; do not weight the SM short as a bear signal, and do not weight a future artifact cross as a bull signal</td></tr>
                <tr><td>Scout re-entry (long) — deferred, further away</td><td className="bull">1d close back &gt; D-EMA50 cap $64,543 (reclaim) AND a certifiable (non-artifact) SM net &gt; +1k</td><td>scout long 0.2R starter (single bounded starter, no add-leg); target $66,692 / $67,427</td></tr>
                <tr><td>Flip loss (structural escalation) — the last line</td><td className="bear">1d close &lt; $63,331 (0γ flip) on a CLOSE basis (24h low $63,248 pierced it intraday only)</td><td>the first real breakdown below the reclaim base; ends the &ldquo;base-on-the-flip&rdquo; read and hands the tape to the chase-short toward the $60k −19.68M crash-put</td></tr>
                <tr><td>Chase-short re-arm (firmer, not armed)</td><td className="bear">1d close &lt; $63,331 flip AND aggregate GEX flips negative (currently +38.66M positive — the $62k/$60k shelf would have to pull it under zero)</td><td>arm short toward the $60k crash-put; the $62k −11.00M / $60k −19.68M shelf means a break of the flip gets dealer-accelerated — the base rate rose on the leverage/structure legs but the gamma trigger is not close and has not fired</td></tr>
                <tr><td>Weekly cycle-floor watch</td><td className="bull">200W sma200 $63,760.71 (JSON, ~48h stale, carried) — 6 above-floor weekly closes through 08-09; next settle 08-16</td><td>a weekly close below $63,761 on 08-16 would end the 6-week cycle-floor streak and strengthen the chase-short; live spot below it on a daily basis is a caution, not the break</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bear">10Y &lt; 4.55% close — FALSE at 4.72% (17bp on the wrong side, WORSE, re-tightened +7bp)</td><td>standalone macro filter false and deteriorating; a macro tailwind for a scout would need 10Y back under 4.55%</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the failed reclaim bases on the $63,331 flip (a thin spot
                bid + the surviving HTF bottom-div holding closes above the flip
                while the weekly cycle-floor streak survives the 08-16 settle), or
                whether the re-leveraging short resolves it lower — a 1d close
                losing the $63,331 flip WITH aggregate gamma flipping negative,
                which arms the chase-short toward the $60k −19.68M crash-put with
                the $60k/$62k negative shelf accelerating the move
              </span>. The book is flat and stays flat; the scout re-entry is
              deferred and further away (the cap lost a second close and the SM
              long re-consumed into the feed artifact); the chase-short is the
              closest it has been but is one close from live (the flip held, the
              aggregate is still positive). The reclaim that ran from 08-07 is
              resolving lower — two closes below the cap, the second under the
              daily floor band — and the leverage book turned back on into the
              fade (OI expanding on futures selling, funding pinned to the cap,
              retail crowding a fresh high). What holds it together is thin but
              real: closes still hold the flip, aggregate gamma is still positive,
              the weekly cycle-floor streak is intact, and the 1M ⚡TD9 BUY / HTF
              bottom-div survive. The right read for the next 24h is{' '}
              <em>flat and patient — do not re-enter the long without a cap reclaim
              and a clean SM long, and do not short until the $63,331 flip breaks
              on a close with gamma negative</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> v2, promoted from v1 at the 2026-08-12 00:07Z snapshot
            (tape anchor 00:05Z) after the STAGE B codex hostile-but-fair audit
            (verdict BLOCK-CRITICAL). Findings and evidence recorded in{' '}
            audits/2026-08-12-desk-note.md; every finding below was applied
            file-wide with a grep-closure loop (pattern searched · hits carrying
            the pre-fix meaning before · after), not just at the cited lines.{' '}
            <b>DN-001 (CRITICAL — GEX aggregate basis conflict):</b> the note
            treated the GEX HTML &ldquo;Total GEX / 1% move&rdquo; tile
            (+22.0M) as the aggregate and built a gamma-collapse narrative on it,
            but that tile is internally inconsistent with its own by-expiry strip
            and gex_summary.json net_gex, both of which foot to +38.66M
            (net_gex=38665992.99). v2 adopts the footed +38.66M expiry-strip /
            gex_summary basis, discloses the +22.0M tile discrepancy, and
            corrects the day-over-day move to a ~16% ease from +45.9M (NOT a
            halving; the halving step was 08-10 +111.3M → 08-11 +45.9M),
            ex-12AUG to +40.79M (was +24.1M), and removes the &ldquo;collapse /
            nearly gone / closest yet&rdquo; framing. Patterns searched:
            &ldquo;+22.0M&rdquo; (aggregate use), &ldquo;halved/HALVED/halving&rdquo;,
            &ldquo;closest yet/CLOSEST&rdquo;, &ldquo;+24.1M&rdquo;,
            &ldquo;nearly gone&rdquo;, &ldquo;collapse/collapsing&rdquo; · before
            14 aggregate-+22.0M / 8 halved / 5 closest-yet / 1 +24.1M / 1
            nearly-gone / 4 collapse · after 0 stale (remaining +22.0M tokens are
            the labeled tile-discrepancy disclosures; remaining halving/collapse
            tokens are explicit negations — &ldquo;not a halving&rdquo;, &ldquo;NOT
            a second collapse&rdquo;, &ldquo;it did not collapse&rdquo;, &ldquo;not
            collapsing&rdquo;) — RESOLVED. <b>DN-002 (MAJOR — trade scope beyond
            the deferred 0.2R scout):</b> removed the add-0.2R expansion leg and
            the 0.4R-max ceiling; v2 keeps only the single deferred 0.2R starter.
            Patterns: &ldquo;0.4R&rdquo;, &ldquo;add 0.2R&rdquo;, &ldquo;add-leg&rdquo;
            · before 1 / 2 / 0 · after 0 — RESOLVED. <b>DN-003 (MINOR — positive
            band sum):</b> the $64.5k–$72k band (14.42+11.75+10.90+10.29+10.75+17.80+7.34)
            foots to +83.25M, corrected from &ldquo;~+73M&rdquo; to
            &ldquo;~+83.3M&rdquo; (inclusive of the $70k wall). Pattern
            &ldquo;~+73M&rdquo; · before 2 · after 0 — RESOLVED. <b>DN-004 (MINOR —
            SM artifact-minute vs 24h conflation):</b> the BJ 15:16 artifact
            minute was long +376 / short +11,735 / net −11,358 (rows 118128→118129);
            the &ldquo;longs flat −79&rdquo; figure is the 24h aggregate delta
            (long −79 / short +10,751 / net −10,830), NOT the artifact minute. v2
            splits the two everywhere. Patterns &ldquo;longs flat&rdquo; /
            &ldquo;in one minute (…longs flat)&rdquo; · before 7 conflated · after
            0 (each now states the minute long +376 explicitly and the 24h long
            −79 separately) — RESOLVED. <b>DN-005 (MINOR — truncated forward
            strip):</b> added the omitted 25JUN27 317.3DTE +0.68M row. Pattern
            &ldquo;25JUN27&rdquo; · before 0 · after 1 — RESOLVED.{' '}
            <b>Self-contained arithmetic (v2 canonical):</b> funding × 1095 (live
            +10.95% ann from raw 0.01 at the Binance cap, 24h mean +6.56%, range
            +1.29% / +10.95%, 0/1441 negative); the GEX dual-reference sign (flip
            $63,331, spot +0.37% / Deribit idx +0.81%, both positive); aggregate
            GEX +38.66M (expiry-strip / gex_summary net_gex; the +22.0M
            &ldquo;Total GEX / 1% move&rdquo; tile is the disclosed inconsistent
            reading), eased ~16% from +45.9M (08-11) — still deeply net-long,
            with the $62k −11.00M / $60k −19.68M = −30.68M negative shelf and the
            $64.5k–$72k positive band ~+83.3M; 12AUG 0DTE −2.13M front chunk
            (settles 08:00Z, ~8h after snapshot, ex-12AUG ≈ +40.79M); the SM
            &ldquo;flip&rdquo; (+2,947 → −7,882, 24h long −79 / short +10,751 /
            Δnet −10,830) as a feed artifact — the BJ 15:16 08-11 (07:16Z) minute
            alone ran long +376 / short +11,735 / net −11,358, |Δ|/prior_net =
            3.67, NOT a certifiable press; the MA matrix vs live spot $63,564.01
            off parquet 2026-08-12 00:05Z close $63,540.30 (D-EMA50 cap $64,543,
            spot −1.52% below; the 08-11 completed close $63,572.00 below the cap =
            second close lost, and below the daily-basis 200W floor $63,761 /
            W-SMA200 $63,982; D-SMA50 $63,367 and 0γ flip $63,331 the last support
            shelf; W-SMA200 computes $63,982 (−0.65%) off the full 363-bar
            wildcard source; W-EMA150/200 seed-disclosed); the 200W cycle-floor
            streak (6 above-floor weekly closes through the 08-09 settle
            $64,867.80 vs sma200 $63,760.71, +1.74%; JSON recomputed 08-10
            00:11:24Z, ~48h stale, carried; live spot −0.31% below on a daily
            basis but the weekly streak intact to 08-16); 30D RV 27.01% (30
            returns; 29-return alt 22.78%); the windowed flow (24h OI +3,113 on
            futCVD −2,128 / bigNet −1,537, no cb_cvd reset in the window);
            cross-asset (|r| 0.207, BTC −0.66% vs NQ −0.57% = −0.09pt, a
            wrong-way convergence on a softening tape); macro Tier-1 (10Y 4.72%
            +7bp, TIPS 2.43%, HY OAS 2.70% flat, DXY 99.81, Fed net liq $5.840T,
            MOVE unavailable 3rd day); the reclaim-long rates filter FALSE at 17bp;
            claims-vs-loaded-data (NTT / max-pain / strike-IV / BTC-NQ
            framework-only; JGB monthly do not lean; IV chain-median across 794
            instruments not a tradable spread); EN/ZH parity (ZH authored forward
            in STAGE C, native CN voice, same numbers + caveats); and the
            requireViewer gating pattern (first statement of the default export,
            path /desk/2026-08-12).{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1; Next hard-exits
            on Node &lt; 20.9.0, so a full <code>next build</code> is
            environment-blocked (lineage-documented).{' '}
            <code>npx --no-install tsc --noEmit</code> is the build proxy for the
            audit stage.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-08-12 00:07Z, tape
            anchor 00:05Z) with section-level provenance disclosed in the
            manifest band above; the macro Tier-1 panel render is 2026-08-11
            22:15Z (~1.9h before snapshot) and some inputs are explicitly stale
            or unavailable and flagged as such. Levels, sizes, and conditions are
            illustrative of the desk&rsquo;s process, not standing
            recommendations. Past correlation, gamma, and positioning patterns do
            not bind future tape. Derivatives carry the risk of total loss and,
            where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The reclaim is bleeding lower — two closes under the cap, the
                second under the floor band. Leverage turned back on and the
                gamma cushion eased. But the flip holds on a close and the
                book is still positive. Flat. The $63,331 flip is the last line.
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
            v2 · 2026-08-12 00:07Z snapshot · post codex hostile audit ·
            sources: live_db.json · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · ma200w_trap_watch_state.json · FRED · Yahoo ·
            Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
