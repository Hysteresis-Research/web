import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-14 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-14',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-14' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260814() {
  await requireViewer('/desk/2026-08-14');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-14 · v2</span>
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
              <span className="dn-big">$63,484</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.03%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-14 00:06Z (tape anchor 00:05Z)
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-14 00:05Z tape anchor</td>
                  <td className="dn-flag">
                    fresh · 1-min · anchor row t==&ldquo;08-14 08:05&rdquo; (BJ,
                    UTC+8) = 00:05Z daily pin; read at 00:06Z session start ·
                    landmine cleared (00:05Z pin is NOT t==&ldquo;08-14
                    00:05&rdquo;, which would be the 16:05Z 08-13 row)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-14 00:01Z scan (BJ 08:01)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · ~5-min stale vs 00:06Z read ·
                    in-progress bars · archived verbatim in
                    /opt/desk-note/snapshots/2026-08-14-0006
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-14 00:00Z snapshot</td>
                  <td className="dn-flag">
                    ~6-min stale vs snapshot anchor · Deribit idx $63,826 vs live
                    $63,484 ($342 above live) · 820 instruments · median IV 40.9%
                    · 14AUG26 0.3DTE +6.08M (a small POSITIVE front chunk) settles
                    08:00Z today (~8h AFTER this 00:05Z snapshot — still live, no
                    settle-adjustment applied) · aggregate footed off the by-expiry
                    strip / gex_summary.json net_gex (see dealer map)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-14 00:00Z
                  </td>
                  <td className="dn-flag">~6-min lag · 7d 1h bars · 22 assets · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-13 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.9h render lag · FRED Tier-1: 10Y −2bp to 4.68% (EXTREME
                    RISK-OFF, eased slightly), TIPS −1bp to 2.42%, HY OAS −1bp to
                    2.71% (RISK-ON), DXY 99.95 (+0.14 vs 08-13), Fed net liq
                    $5.795T (episodic RISK-OFF, z −2.47, the only |episodic z| &gt;
                    1.5 mover) · MOVE bond vol UNAVAILABLE this render (fetch
                    failed, 5th day) · several FX / liquidity rows carry from the
                    prior render
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-08-14 00:05Z (close $63,482.90)</td>
                  <td className="dn-flag">
                    offsets recomputed vs live spot $63,484.00 · full 2019–2026
                    wildcard parquet = 363 W-SUN weekly bars · W-SMA200 IS
                    computable, prints $63,982 (−0.78%, just overhead); every
                    displayed W-SMA level is a full-history mean · W-EMA150/200
                    seed-sensitive, reported from their disclosed seed window
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle-floor watch</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · sma200 $63,760.71</td>
                  <td className="dn-flag">
                    recomputed_at 2026-08-10 00:11:24Z — now ~96h stale, carried
                    (no fresh weekly settle since 08-09; next weekly close 08-16,
                    two days out) · JSON: sma200 $63,760.71, consecutive_above 6
                    through the 08-09 weekly settle $64,867.80 · slow level
                    (~$250/wk), an hours-stale JSON is fine per the runbook · NOTE
                    live spot $63,484 sits −0.43% BELOW this floor on a
                    daily/intraday basis, and the in-progress weekly bar would
                    close below it — the 6-week above-floor streak is a
                    WEEKLY-CLOSE read and is intact ONLY until the 08-16 settle
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale · monthly (73d) · do not treat as live</td>
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
              <span className="dn-v">+9.58%</span>
              <span className="dn-src">live · raw 0.008751 ×1095 = +9.58% ann — RE-HEATED back toward the +10.95% Binance cap (from +7.16% on 08-13) · 24h mean +8.02% (down from 08-13&rsquo;s +8.98% because the earlier part of the window sat lower) · range +5.20% / +10.95% · 0 / 1442 sampled rows negative, 49/1442 rounded to the +10.95% display (47/1442 exactly at raw 0.010000) · the carry firmed at the margin — 4h-ago +10.88% near the cap, 1h-ago +10.20%</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+7.16% (24h-ago) → +9.58% live (24h mean +8.02%)</span>
              <span className="dn-src">the live rate RE-HEATED +2.42pt off 08-13&rsquo;s cooled print; 1h-ago +10.20%, 4h-ago +10.88% (near cap), 24h-ago +7.16% — the 08-13 cooling did NOT continue, carry firmed back toward the cap over the last leg; still not the deep leverage-off the 08-11 note called, and 0/1442 negative all window</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−1.32% (−1,470 BTC)</span>
              <span className="dn-src">live · OI CONTRACTED over 24h — a REVERSAL of the 08-13 note&rsquo;s +1,822 BTC (+1.67%) build · last 4h −463 BTC, last 1h +121 BTC (a small late re-tick) · the re-leveraging leg that ran through 08-12/08-13 rolled over: leverage came off, it did not merely decelerate</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">65.14 / 34.86</span>
              <span className="dn-src">live_db `mkt_long_pct` · from 64.95 on 08-13 (+0.19pt more crowded) · 24h range 62.10 / 65.40 — retail crowded to yet another FRESH lineage high, still buying the fade near the top of the 24h range</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−28,076 (apparent net SHORT — artifact-contaminated, NOT certifiable)</span>
              <span className="dn-src">live · long 12,875 − short 40,951 · from the 08-13 note&rsquo;s −3,457; apparent 24h short-STACK of −24,619, BUT +23,187 of the short build is a SINGLE minute at BJ 14:51 08-13 (06:51Z) — the recurring BJ 14–15 feed re-sync window the lineage keeps flagging (that minute short +23,187 / long −2,358) · ex-artifact the SM book sat ~−1,569 pre-spike (08-13 14:50: long 15,840 − short 17,409) and has drifted only modestly since; the −28k is a false short-press, NOT a certifiable smart-money short</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 08-13 note</span>
              <span className="dn-v">−3,457 → −28,076 (Δnet −24,619, apparent short-stack)</span>
              <span className="dn-src">24h aggregate long −2,099, short +22,520, net −24,619 (components rounded independently) · |Δ|/prior_net = 24,619 / 3,457 = 7.12× (a nonsense multiple ON THE ARITHMETIC) — because the frame is contaminated: +23,187 of the +22,520 net short move is the lone BJ 14:51 re-sync minute; ex-artifact the SM book is roughly flat-to-slightly-more-short, read the &ldquo;short&rdquo; as a mechanical feed spike, NOT a certifiable press either way</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.9% / 22.35%</span>
              <span className="dn-src">GEX median IV · 820 inst. · 30D close-to-close RV (logret.std ×√365 ×100, 30 returns; 29-return alt 22.18%) · chain-level richness ~+18.6pt — richness held near 08-13&rsquo;s +19.1pt as both IV (41.5% → 40.9%) and RV (22.39% → 22.35%) eased marginally</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+0.68% (above)</span>
              <span className="dn-src">flip $63,057 (dropped from $63,149 on 08-13) · vs live spot $63,484 (+0.68%; 63,484.00/63,057.01 − 1 = 0.677%) / GEX file Deribit idx $63,826 (+1.2%; 63,826.09/63,057.01 − 1 = 1.220%) — both refs positive, page rounds spot side to +0.68% for tile consistency · aggregate GEX +84.96M (expiry-strip / gex_summary.json net_gex basis; the GEX file&rsquo;s &ldquo;Total GEX / 1% move&rdquo; tile reads +66.8M but is internally inconsistent with its own by-expiry strip and net_gex, both of which foot to +84.96M — the note uses the footed basis) — RE-EXPANDED AGAIN from +72.90M on 08-13, driven by the 15AUG26 +32.85M chunk; a −17.02M $60k crash-put shelf sits below the flip</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The 08-13 note leaned &ldquo;basing on the flip&rdquo; — and the
                tape held that base, but the mix underneath it turned heavier
                while the dealer clamp got thicker still
              </span>. The 08-13 completed close{' '}
              <span className="dn-tag">$63,456.70</span> was a FOURTH consecutive
              close below the D-EMA50 cap (now{' '}
              <span className="dn-tag bear">$64,457</span>) and stayed below the
              daily-basis 200W floor{' '}
              <span className="dn-tag bear">$63,761</span> and W-SMA200{' '}
              <span className="dn-tag bear">$63,982</span>, but it{' '}
              <span className="dn-em">held above the $63,057 0-γ flip on a close
              basis</span> — the last line is intact a fourth day, and spot is
              essentially flat 24h at <span className="dn-tag">$63,484</span>{' '}
              (+0.03%). But the internals rotated heavier inside the base:{' '}
              <span className="dn-signal">
                OI CONTRACTED −1,470 BTC
              </span>{' '}
              (a reversal of the 08-13 +1,822 build), funding{' '}
              <span className="dn-signal">RE-HEATED back toward the cap</span>{' '}
              (live <span className="dn-tag">+9.58% ann</span>, 4h-ago{' '}
              <span className="dn-tag">+10.88%</span> near it), retail crowded{' '}
              <span className="dn-tag bear">65.14%</span> — yet another fresh
              lineage high — and for a SECOND time in the lineage (deeper than
              08-12) the intraday low pierced the flip:{' '}
              <span className="dn-tag bear">$62,890 @ 08-13 16:44Z</span>{' '}
              printed below $63,057 (though the daily close recovered above it).
              Against that heavier tape, the base got a thicker defense:{' '}
              <span className="dn-signal">
                aggregate gamma RE-EXPANDED again to +84.96M
              </span>{' '}
              (from +72.90M on 08-13, on the fresh 15AUG26 +32.85M chunk), the
              0-γ flip crept down to{' '}
              <span className="dn-tag">$63,149 → $63,057</span>, and a fresh{' '}
              <span className="dn-tag bull">1h water-down golden cross</span>{' '}
              printed alongside the persisting 1M ⚡TD9 BUY. The SM tape shows a{' '}
              <span className="dn-tag">−28,076 net short</span>, but{' '}
              <span className="dn-em">+23,187 of that is a single BJ 14:51 08-13
              feed-resync minute</span> — the recurring artifact — so it is NOT a
              certifiable smart-money short. This note marks the base holding the
              flip a fourth close while the leverage mix turned heavier
              underneath — the book stays FLAT, neither trigger fires, and the
              pending 08-16 weekly cycle-floor settle becomes the line that
              resolves it.
            </p>

            <p>
              BTC prints <span className="dn-tag">$63,484</span> live,{' '}
              <span className="dn-tag bull">+0.03%</span> on 24h — effectively
              flat, the tape&rsquo;s fourth session hugging the $63.1k–$64.0k
              band — within a <span className="dn-tag">$64,010 / $62,890</span>{' '}
              range (high @ BJ 13:16 08-13 / UTC 05:16 08-13, low @ BJ 00:44
              08-14 / UTC 16:44 08-13).{' '}
              <span className="dn-signal">The flip held on the close but was
              pierced intraday a second time in the lineage</span>: the 08-13
              close <span className="dn-tag">$63,456.70</span> sits above the{' '}
              <span className="dn-tag bull">$63,057 0-γ flip</span>, but the 24h
              low <span className="dn-tag bear">$62,890</span> traded below it in
              16 of the last 1,442 candle-low minutes (7 on the spot field) — a
              deeper pierce than the 08-12 low, even as the close recovered. The daily-close ladder is
              near-flat and shallowing: 08-10{' '}
              <span className="dn-tag">$63,939.30</span>, 08-11{' '}
              <span className="dn-tag">$63,572.00</span>, 08-12{' '}
              <span className="dn-tag">$63,454.70</span>, 08-13{' '}
              <span className="dn-tag">$63,456.70</span> (+$2 on the day) — four
              consecutive closes below the D-EMA50 cap, each holding the flip.
              The MA matrix is unchanged in shape: spot sits essentially{' '}
              <span className="dn-tag">at D-SMA50 $63,488 (−0.01%)</span>, just
              under <span className="dn-tag bear">D-SMA20 $64,000 (−0.81%)</span>{' '}
              / <span className="dn-tag bear">D-EMA20 $63,989 (−0.79%)</span>,
              below the <span className="dn-tag bear">D-EMA50 cap $64,457
              (−1.51%)</span>, and below the weekly floor band{' '}
              <span className="dn-tag bear">W-SMA200 $63,982 (−0.78%)</span> and
              the 200W trap-watch floor{' '}
              <span className="dn-tag bear">$63,761 (−0.43%)</span>.{' '}
              <span className="dn-em">
                The tape is basing on the flip a fourth day, but the intraday
                pierce, the OI contraction, the funding re-heat, and the fresh
                retail high are the first cracks in the base — the close held,
                the intraday did not.
              </span>{' '}
              The 08-13 scout-re-entry trigger (a 1d close back above the D-EMA50
              cap $64,457 WITH a certifiable SM long) is unmet — the cap is lost
              on four closes and the SM &ldquo;print&rdquo; is an artifact — so
              the scout stays deferred; the chase-short trigger (a 1d close
              through the flip WITH aggregate gamma negative) is also unmet —
              the close held and gamma re-expanded — so it stays stood down.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · OI CONTRACTED −1,470 BTC (a reversal of the 08-13 +1,822 build, last 4h −463) · funding RE-HEATED toward the +10.95% cap (live +9.58%, 4h-ago +10.88%, 24h mean +8.02%, 0/1442 negative) · retail crowded a fresh high 65.14% · SM apparent net-short −28,076 but the +23,187 short build is the lone BJ 14:51 feed artifact — not certifiable · 24h spot bid +5,471 vs futures net selling −1,543</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position tape rotated heavier inside the base — leverage came
                off on OI even as funding re-heated
              </span>. OI Δ <span className="dn-tag bear">−1,470 BTC (−1.32%)</span>{' '}
              over 24h — a reversal of the 08-13 note&rsquo;s +1,822 BTC (+1.67%)
              build; the last 4h ran <span className="dn-tag bear">−463 BTC</span>{' '}
              and only the last 1h ticked <span className="dn-tag">+121 BTC</span>{' '}
              back. The re-leveraging leg that carried through 08-12/08-13 rolled
              over — this is the first OI contraction since the 08-12 note. Yet
              funding <span className="dn-em">re-heated</span> in the same window:
              live <span className="dn-tag">+9.58% ann</span> (raw 0.008751 ×
              1095), 4h-ago <span className="dn-tag">+10.88%</span> near the
              cap, 1h-ago <span className="dn-tag">+10.20%</span>, 24h mean{' '}
              <span className="dn-tag">+8.02%</span>, range{' '}
              <span className="dn-tag">+5.20% / +10.95%</span>, cap occupancy{' '}
              <span className="dn-tag bear">49/1442 rounded to +10.95% (47/1442 exactly raw 0.010000)</span>, and{' '}
              <span className="dn-tag">0 / 1442 negative</span> across the whole
              window. <span className="dn-em">OI shrinking while funding firms
              back toward the cap is a book that trimmed size but kept its long
              tilt — longs paying up on a smaller base</span>, consistent with
              retail <span className="dn-tag bear">mkt_long_pct 65.14%</span>
              {' '}(+0.19pt to a fresh lineage high, 24h range 62.10 / 65.40),
              still crowded at the top of the range buying the fade.
            </p>

            <p>
              <span className="dn-signal">
                The SM &ldquo;net short&rdquo; is the recurring feed artifact, not
                a certifiable press
              </span>. The tape reads SM net{' '}
              <span className="dn-tag">−28,076</span> (long 12,875 − short
              40,951) vs the 08-13 note&rsquo;s −3,457 — an apparent 24h
              short-stack of −24,619. But{' '}
              <span className="dn-em">+23,187 of the +22,520 net short move is a
              SINGLE minute</span> at <span className="dn-tag bear">BJ 14:51
              08-13 (06:51Z)</span>: that minute short jumped 17,409 → 40,596
              (+23,187) and long stepped 15,840 → 13,482 (−2,358) — the same
              BJ 14–15 / 15:16 feed re-sync window that produced the 08-10,
              08-11, 08-12 and 08-13 reads. Pre-spike (BJ 14:50 08-13) the SM
              book sat <span className="dn-tag">−1,569</span> (long 15,840 −
              short 17,409); it has drifted only modestly since and printed the
              24h trough <span className="dn-tag bear">−29,856 @ BJ 23:41
              08-13</span> (short peak 41,913 same minute). The{' '}
              <span className="dn-em">|Δ|/prior_net multiple is 24,619 / 3,457 =
              7.12× — a nonsense number that flags the contamination rather than
              measuring a real position change</span>. Read the −28k as a
              mechanical feed spike, not a certifiable smart-money short; the
              certifiable state is roughly flat-to-slightly-short, unchanged in
              substance from 08-13.
            </p>

            <p>
              Windowed flow is <em>a two-sided-to-heavy tape: spot bought the
              24h, futures and takers sold it, and OI leaked</em>. 24h: price{' '}
              <span className="dn-tag bull">+0.03%</span>, OI{' '}
              <span className="dn-tag bear">−1,470 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +5,471</span> (no cb_cvd reset in
              the window), futures CVD{' '}
              <span className="dn-tag bear">Δ −1,543</span>, big-print{' '}
              <span className="dn-tag bull">+429 BTC / 868 prints</span>,
              taker-net <span className="dn-tag bear">−1,545</span> —{' '}
              <span className="dn-em">spot bid absorbed by futures/taker selling
              with OI leaking; a heavy-ish balance that kept price flat, not a
              directional press</span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bull">+0.14%</span>, OI{' '}
              <span className="dn-tag bear">−463 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,297</span>, futures CVD{' '}
              <span className="dn-tag">Δ −3</span>, big-print{' '}
              <span className="dn-tag bull">+14 BTC / 120 prints</span>,
              taker-net <span className="dn-tag bull">+4</span> —{' '}
              <em>a small spot-led lift with OI still leaking</em>. 1h: price{' '}
              <span className="dn-tag bear">−0.01%</span>, OI{' '}
              <span className="dn-tag bull">+121 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −347</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −19</span>, big-print{' '}
              <span className="dn-tag bear">−70 BTC / 35 prints</span>,
              taker-net <span className="dn-tag bear">−71</span> —{' '}
              <em>a soft last hour, spot offered as OI ticked back</em>. Perp
              trades a <span className="dn-tag bear">−$72.07 discount</span> to
              spot at the snap (1h mean −$64.42, range −$77.12 / −$40.09; 4h mean
              −$64.30; 24h mean −$67.15, range −$118.91 / −$0.26 — basis never
              went premium across the 24h). 1-min aggressor skew snap{' '}
              <span className="dn-tag bear">−4.1</span> (1h mean −8.39, range
              −32.0 / +10.9) — a mild sell tilt, no oversold reflex bid this
              snap.{' '}
              <span className="dn-em">
                OI contracting + funding re-heating toward the cap + retail a
                fresh high + a persistent perp discount + spot bought while
                futures/takers sold: the book let size out but kept its long
                lean, and the flat price is the balance between a real spot bid
                and heavier futures selling.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF stays 1 long / 8 short / 1 neutral — a fresh 1h water-down golden cross (just printed, $63,471) joined the 1M ⚡TD9 BUY + 30m/1h/1w bottom-div; 12h nearing TD9 Buy (Buy 8→9?) · the 08-13 8h ⚡TD9 BUY aged out to Sell 2 · 4th close below the cap held the flip; the 08-13 intraday low $62,890 pierced the flip a second time in the lineage (deeper than 08-12) · spot at D-SMA50, under the daily floor band</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map stays bearish-resonant but grew a fresh engine-frame
                bounce hint
              </span> — <span className="dn-tag bear">1 long / 8 short / 1
              neutral</span> across 10 frames (net read: multi-TF resonance
              bearish, sell rallies), essentially the 08-13 1-long / 9-short map
              with 15m flipping to neutral as it pushed above cloud. The new
              signal is a <span className="dn-tag bull">1h water-down golden
              cross, just printed (1 bar, DIF −69.4, below water)</span> — an
              early short→long probe on the engine frame — joining the persisting{' '}
              <span className="dn-tag bull">1M ⚡TD9 BUY</span> and the bottom-div
              cluster (<span className="dn-tag bull">30m / 1h / 1w bottom-div</span>),
              with <span className="dn-tag bull">12h at TD Buy 8→9?</span> (one
              bar from a TD9 Buy). Against those, the top-div cluster is heavier
              (<span className="dn-tag bear">15m / 4h / 8h / 12h top-div</span>),
              and the 08-13 8h ⚡TD9 BUY aged out — 8h now carries a{' '}
              <span className="dn-tag bear">water-up death cross 11b, Sell 2</span>.
              Mid-book death crosses stayed confirmed a bar deeper (12h death 5b,
              1d death 3b). The reversal regime reads{' '}
              <span className="dn-tag">5/9 (JT&lt;0) — mean-reversion / bounce
              leaning, trend-follow cautious</span>.{' '}
              <span className="dn-em">
                Read straight: the slow and mid frames are still short (8 of 10),
                but the engine grew a fresh 1h golden cross and the 1M ⚡TD9 BUY /
                12h-near-TD9 / triple bottom-div cluster is a bounce-hint stack —
                the same &ldquo;heavy structure with a bounce probe underneath&rdquo;
                shape as 08-13, one 1h cross firmer.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,471</td><td className="num">52.5</td><td className="bull">golden (water-dn) 20b</td><td className="bull">above ↓63.4k 4b</td><td>Sell 1</td><td>BEAR reg</td></tr>
                <tr><td>30m</td><td className="num">63,471</td><td className="num">50.4</td><td className="bull">golden (water-dn) 7b</td><td className="bear">below ↑63.7k 17b</td><td>Buy 1</td><td>BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">63,471</td><td className="num">48.1</td><td className="bull">golden (water-dn) 1b · just printed</td><td className="bear">below ↑63.7k 16b</td><td>Sell 6</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">63,471</td><td className="num">41.8</td><td className="neut">—</td><td className="bear">below ↑63.8k 4b</td><td>Sell 1</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">63,478</td><td className="num">42.5</td><td className="bear">death (water-up) 11b</td><td className="bear">below ↑63.7k 2b</td><td>Sell 2</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>12h</td><td className="num">63,471</td><td className="num">43.6</td><td className="bear">death (water-up) 5b</td><td className="bear">below ↑64.1k 3b</td><td>Buy 8 → 9?</td><td>BEAR reg</td></tr>
                <tr><td>1d</td><td className="num">63,471</td><td className="num">45.7</td><td className="bear">death (water-up) 3b</td><td className="neut">in cloud 62.7k–66.0k 25b</td><td>Buy 5</td><td>BULL hid</td></tr>
                <tr><td>3d</td><td className="num">63,471</td><td className="num">44.0</td><td className="bear">—</td><td className="bear">below ↑75.8k 24b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,471</td><td className="num">39.4</td><td className="bull">golden (water-dn) 3b</td><td className="bear">below ↑85.9k 28b</td><td>Buy 1</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">63,471</td><td className="num">43.5</td><td className="neut">—</td><td className="bull">above ↓47.4k 30b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (BJ 08:01; rolling
                    latest file; archived verbatim in
                    /opt/desk-note/snapshots/2026-08-14-0006). Header:{' '}
                    <em>1 长 / 8 空 / 1 中</em>, net{' '}
                    <em>multi-TF resonance bearish, sell rallies</em>; reversal:{' '}
                    <em>top-div 4 (15m/4h/8h/12h), bottom-div 3 (30m/1h/1w), ⚡ 1M
                    TD9 BUY, 5/9 reversal regime (JT&lt;0)</em>; alerts:{' '}
                    <em>1h water-down golden cross just printed ($63,471, DIF
                    −69.4), 12h TD8 Buy (one bar to TD9)</em>. Scan spot $63,483,
                    24h +0.01% (00:01Z MTF scan; the live-tape header at 00:06Z
                    shows +0.03% on the same 24h window), 24h H/L $63,991 /
                    $62,800 — the scan tool&rsquo;s own feed, distinct from the
                    live-tape range $64,010 / $62,890 (different source, ~5-min
                    earlier scan); every prose and decision-table 24h H/L uses the
                    live-tape values, qVol $7.78B. Closes are in-progress bars;
                    treat every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix pins spot at the D-SMA50 hinge, under the daily floor
              band. Spot $63,484 sits{' '}
              <span className="dn-tag">−0.01% at D-SMA50 $63,488</span> — the
              single near-flat daily line — just under{' '}
              <span className="dn-tag bear">D-SMA20 $64,000 (−0.81%)</span> and{' '}
              <span className="dn-tag bear">D-EMA20 $63,989 (−0.79%)</span>, below
              the <span className="dn-tag bear">D-EMA50 cap $64,457 (−1.51%)</span>,
              and below the weekly floor band —{' '}
              <span className="dn-tag bear">W-SMA200 $63,982 (−0.78%)</span> and
              the 200W trap-watch floor{' '}
              <span className="dn-tag bear">$63,760.71 (−0.43%)</span>. Everything
              else overhead in order:{' '}
              <span className="dn-tag bear">D-EMA100 $66,564 (−4.63%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $67,073 (−5.35%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,060 (−8.07%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $69,177 (−8.23%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $69,511 (−8.67%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $71,850 (−11.64%)</span>.
              Weekly overhead:{' '}
              <span className="dn-tag bear">W-EMA20 $68,461 (−7.27%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $68,524 (−7.36%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,104 (−8.13%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $73,841 (−14.03%; seed)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $77,118 (−17.68%)</span>,{' '}
              <span className="dn-tag bear">W-EMA50 $77,253 (−17.82%)</span>,{' '}
              <span className="dn-tag bear">W-EMA100 $78,474 (−19.10%)</span>,{' '}
              <span className="dn-tag bear">W-SMA50 $82,464 (−23.02%)</span>,{' '}
              <span className="dn-tag bear">W-SMA100 $88,706 (−28.43%)</span>.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-08-14 00:05Z (close
                $63,482.90); offsets recomputed against live spot $63,484.00.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. The full 2019–2026 wildcard parquet holds 363
                W-SUN weekly bars, so W-SMA200 IS computable ($63,982, −0.78%,
                distinct from the trap-watch cycle-floor $63,761); W-EMA150/200
                seed from available history and are reported as such. The
                near-line set is a tight overhead cluster: D-SMA50 at spot, the
                W-SMA200 / 200W floor band $63,761–$63,982 just above, and the
                D-EMA50 cap $64,457 capping — spot pinned in a ~$1k band on the
                floor band&rsquo;s underside.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · gamma RE-EXPANDED AGAIN to +84.96M (from +72.90M, a +12.06M net step; the strip&rsquo;s heaviest positive chunks are 15AUG26 +32.85M front + 28AUG +15.13M, partly offset by other expiries) · flip $63,057 (spot +0.68% above) · $65.5k +29.97M heaviest wall, a deep +100M+ positive band caps a squeeze · $60k −17.02M crash-put (eased from −18.91M) below · 14AUG 0.3DTE +6.08M (positive front) settles 08:00Z · IV median 40.9% / 820 inst.</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book got thicker still — aggregate gamma re-expanded a
                second day to +84.96M
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+84.96M / 1%</span> (was +72.90M on
              08-13 — a further +12.06M positive step); the book is a HEAVIER
              net-long-gamma dampener. The 0-γ flip crept down{' '}
              <span className="dn-tag">$63,149 → $63,057 (−$92)</span>, and spot
              $63,484 sits <span className="dn-tag bull">+0.68% above flip</span>{' '}
              on spot-denominated math (63,484.00 / 63,057.01 − 1 = +0.677%); the
              GEX file&rsquo;s own &ldquo;dist to flip&rdquo; reads +1.2% off its
              Deribit-index $63,826 ($342 above live spot), which is{' '}
              <span className="dn-tag bull">+1.22%</span> (63,826.09 / 63,057.01
              − 1 = +1.220%) — both references positive, spot above the flip on
              both. <span className="dn-em">Aggregate-basis note: the GEX
              file&rsquo;s &ldquo;Total GEX / 1% move&rdquo; tile prints +66.8M,
              but that figure is internally inconsistent with the file&rsquo;s own
              by-expiry strip and gex_summary.json net_gex, both of which foot to
              +84.96M (6.08 + 32.85 + 4.12 − 0.03 + 8.58 + 15.13 + 0.42 + 12.22 +
              0.39 + 3.34 + 1.15 + 0.71 = 84.96); the note uses the footed
              +84.96M basis, as the lineage has since 08-12.</span> The wall map
              is a deep two-sided clamp:{' '}
              <span className="dn-tag bull">$65.5k +29.97M</span> (heaviest wall),{' '}
              <span className="dn-tag bull">$70k +19.29M</span>,{' '}
              <span className="dn-tag bear">$60k −17.02M</span> (crash-put, eased
              from −18.91M on 08-13),{' '}
              <span className="dn-tag bull">$67k +10.71M</span>,{' '}
              <span className="dn-tag bull">$63.5k +10.04M</span> (the nearest
              overhead support, just above spot),{' '}
              <span className="dn-tag bull">$65k +9.83M</span>,{' '}
              <span className="dn-tag bull">$66k +9.59M</span>,{' '}
              <span className="dn-tag bull">$68k +8.39M</span>,{' '}
              <span className="dn-tag bull">$72k +7.84M</span>,{' '}
              <span className="dn-tag bull">$80k +7.75M</span>.{' '}
              <span className="dn-em">
                The $63.5k–$72k positive band totals well north of +100M and caps
                any squeeze while dampening the fade; the only material negative
                is the $60k −17.02M crash-put, which sits a full $3.5k below spot
                and only bites if the flip breaks. The book is structurally bid
                into a fade above the flip and offered into a squeeze
              </span>. Forward expiries: 14AUG 0.3 +6.08M (a positive front chunk
              settling 08:00Z today, ~8h after the snapshot), 15AUG 1.3{' '}
              <span className="dn-tag bull">+32.85M</span> (the heaviest front,
              the driver of the re-expansion), 16AUG 2.3 +4.12M, 17AUG 3.3
              −0.03M, 21AUG 7.3 +8.58M, 28AUG 14.3{' '}
              <span className="dn-tag bull">+15.13M</span>, 4SEP 21.3 +0.42M,
              25SEP 42.3 <span className="dn-tag bull">+12.22M</span>, 30OCT 77.3
              +0.39M, 25DEC 133.3 +3.34M, 26MAR27 224.3 +1.15M, 25JUN27 315.3
              +0.71M. Every forward chunk is positive except the negligible 17AUG
              −0.03M — the dampening dealer regime has no negative amplifier on
              the strip.
            </p>

            <p>
              IV median across 820 instruments is{' '}
              <span className="dn-tag">40.9%</span> (down from 41.5% / 794
              instruments on 08-13 — a marginal vol cool as the count grew +26)
              against 30D close-to-close RV of{' '}
              <span className="dn-tag">22.35%</span> — chain-level richness{' '}
              <span className="dn-tag">~+18.6pt</span>, held near 08-13&rsquo;s
              +19.1pt.{' '}
              <span className="dn-em">
                A chain-median across N instruments, not a tradable spread;
                expiry-/strike-level vega, skew and term structure remain not
                loaded; the vol read stays framework-only.
              </span>{' '}
              RV methodology: 30D close-to-close, logret.std × √365 × 100 on the
              last 30 daily log returns (= 31 consecutive daily closes) anchored
              to parquet last bar 2026-08-14 00:05Z; the 29-return alt reads
              22.18%, the 30-return page value 22.35%. RV has compressed steadily
              through the base — the tape&rsquo;s realized range is narrow while
              the chain holds ~41% implied, a ~+18.6pt richness that is the
              dampening regime priced in options.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · rates eased 2bp — 10Y 4.68% (still EXTREME RISK-OFF), TIPS 2.42% · credit still RISK-ON (HY OAS 2.71%) · DXY 99.95 · Fed net liq $5.795T (episodic RISK-OFF, the only |z|&gt;1.5 mover) · MOVE unavailable (5th day) · reclaim-long rates filter FALSE at 13bp (improved 2bp) · BTC-vs-TradFi lag RE-WIDENED to −3.48pt as NQ ran +2.25%</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape eased marginally on rates and held its risk-on
                credit / tight-dollar mix
              </span>. Dashboard render is 2026-08-13 22:15Z, ~1.9h before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bull">4.68% (−2.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.07</span>, episodic z{' '}
              <span className="dn-tag">+0.81</span> — EXTREME RISK-OFF, eased 2bp
              from 08-13&rsquo;s 4.70%. 10Y TIPS real{' '}
              <span className="dn-tag bull">2.42% (−1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.33</span> — still EXTREME RISK-OFF.
              5Y5Y BE inflation{' '}
              <span className="dn-tag">2.28% (−3.0bp)</span>. HY OAS{' '}
              <span className="dn-tag">2.71% (−1.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.02</span> — still RISK-ON credit,
              basically flat. Chicago Fed NFCI{' '}
              <span className="dn-tag bull">−0.549 (weekly)</span> — RISK-ON.
              MOVE bond vol <span className="dn-tag stale">unavailable</span> — a
              5th consecutive fetch-failed render, so no bond-vol read. DXY{' '}
              <span className="dn-tag bear">99.95 (−0.06 day · +0.14 vs
              08-13)</span>, regime z <span className="dn-tag">+0.85</span> —
              tight, edged firmer over 24h. Fed net liquidity{' '}
              <span className="dn-tag bear">$5.795T (−0.045T)</span>, episodic z{' '}
              <span className="dn-tag bear">−2.47</span> — a fresh weekly draw and
              the ONLY |episodic z| &gt; 1.5 mover on the panel (RISK-OFF
              episodic). US-JP 10Y spread{' '}
              <span className="dn-tag">2.01% (−2.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag bear">159.49 (+0.16)</span> (yen softer);
              USD/CNY <span className="dn-tag bull">6.7423</span>.{' '}
              <span className="dn-em">
                Net: the reclaim-long rates filter (10Y &lt; 4.55%) stays FALSE
                at 4.68% — 13bp above the line, improved 2bp from 08-13&rsquo;s
                15bp but not fired; credit stays risk-on, the dollar stays tight,
                and the one episodic mover is a Fed-liquidity draw (risk-off). The
                macro tape does not gate BTC either way this print — it is neither
                a re-grow trigger nor a reclaim green light.
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
                <tr><td>US 10Y nominal</td><td className="num">4.68%</td><td className="num bull">−2.0bp</td><td className="num bear">+2.07</td><td className="num">+0.81</td><td className="bear">EXTREME RISK-OFF, eased</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.42%</td><td className="num bull">−1.0bp</td><td className="num bear">+2.33</td><td className="num">+0.79</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.28%</td><td className="num bull">−3.0bp</td><td className="num">+0.86</td><td className="num">+0.77</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.71%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.02</td><td className="num bull">−0.52</td><td className="bull">RISK-ON</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.549</td><td className="num">−0.00</td><td className="num bull">−1.14</td><td className="num bull">−1.20</td><td className="bull">RISK-ON</td></tr>
                <tr><td>MOVE bond vol</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">unavailable · fetch failed (5th day)</td></tr>
                <tr><td>DXY</td><td className="num">99.95</td><td className="num bear">−0.06</td><td className="num">+0.85</td><td className="num bull">−1.06</td><td className="bear">tight · +0.14 vs 08-13</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.795T</td><td className="num bear">−0.045T</td><td className="num bull">−1.28</td><td className="num bear">−2.47</td><td className="bear">RISK-OFF episodic · only |z|&gt;1.5 mover</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.49</td><td className="num bear">+0.16</td><td className="num">+0.72</td><td className="num">−0.78</td><td className="bear">yen softer</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.01%</td><td className="num bull">−2.0bp</td><td className="num">−0.26</td><td className="num">+0.81</td><td className="neut">neutral</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7423</td><td className="num bull">−0.00</td><td className="num bull">−1.41</td><td className="num bull">−1.46</td><td className="bull">no tag · loose</td></tr>
                <tr><td>WTI crude</td><td className="num">$84.8</td><td className="num bear">+1.0</td><td className="num">+0.60</td><td className="num">+0.71</td><td className="neut">no tag (Tier-3 driver)</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">monthly · stale 73d · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.205</span> — deep
              in the IDIOSYNCRATIC band (&lt;0.25), essentially unchanged from the
              08-12 note&rsquo;s 0.207. BTC&rsquo;s listed ties are weak and
              re-ordered: SP500 <span className="dn-tag">+0.353</span> (top),
              BRENT <span className="dn-tag">−0.326</span>, AAPL{' '}
              <span className="dn-tag">+0.300</span>, NQ{' '}
              <span className="dn-tag">+0.286</span>, EUR{' '}
              <span className="dn-tag">+0.273</span>, PLAT{' '}
              <span className="dn-tag">+0.267</span>, CL{' '}
              <span className="dn-tag">−0.257</span>, META{' '}
              <span className="dn-tag">+0.248</span>, GOOGL{' '}
              <span className="dn-tag">+0.244</span>, COPPER{' '}
              <span className="dn-tag">+0.243</span>, GOLD{' '}
              <span className="dn-tag">+0.236</span>. 7d performance:{' '}
              <span className="dn-tag bear">BTC −1.23%</span>, NQ{' '}
              <span className="dn-tag bull">+2.25%</span>, SP500{' '}
              <span className="dn-tag bull">+1.23%</span>, JP225{' '}
              <span className="dn-tag bull">+6.16%</span>, TSLA{' '}
              <span className="dn-tag bull">+6.43%</span>, NVDA{' '}
              <span className="dn-tag bull">+2.69%</span>, META{' '}
              <span className="dn-tag bull">+0.62%</span>, AAPL{' '}
              <span className="dn-tag bear">−2.45%</span>, GOOGL{' '}
              <span className="dn-tag bear">−3.56%</span>, AMZN{' '}
              <span className="dn-tag bear">−2.58%</span>. Metals firm: GOLD{' '}
              <span className="dn-tag bull">+3.02%</span>, SILVER{' '}
              <span className="dn-tag bull">+5.56%</span>, PALL{' '}
              <span className="dn-tag bear">−3.73%</span>. Energy up: CL{' '}
              <span className="dn-tag bull">+3.46%</span>, BRENT{' '}
              <span className="dn-tag bull">+2.66%</span>, NGAS{' '}
              <span className="dn-tag bull">+6.40%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine RE-WIDENED to ~−3.48pt
                (BTC −1.23% vs NQ +2.25%) from −2.77pt on 08-13 — the gap widened
                as NQ / SP500 / JP225 ran while BTC bled; BTC is the lone risk
                laggard, not tracking the equity bid. Endogenous-to-crypto remains
                the load-bearing read: the macro pulse is quiet (rates eased 2bp,
                credit risk-on, dollar tight, one Fed-liquidity episodic draw),
                and BTC&rsquo;s tape is being set by its own dealer / leverage
                structure, not the cross-asset backdrop
              </span>. JGB monthly 2.67% carries EXTREME RISK-OFF monthly tag,
              stale 73d — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · book FLAT (stays flat) · scout re-entry still DEFERRED (cap lost 4th close; SM &ldquo;short&rdquo; is a feed artifact, not a certifiable long) · chase-short STOOD DOWN — gamma RE-EXPANDED to +84.96M (the gamma-flip trigger moved further away) BUT the first cracks printed (intraday flip pierce, OI contraction, funding re-heat, pending 08-16 floor settle)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — the base held the flip a fourth
                close, but the mix underneath turned heavier and the first cracks
                appeared
              </span>. The 08-13 note gated the scout re-entry on a cap RECLAIM
              (1d close back &gt; D-EMA50) WITH a certifiable SM long, and gated
              the chase-short on a 1d close through the flip WITH aggregate gamma
              flipping negative. Neither fired. The scout legs are still unmet:
              the cap is lost on a fourth close ($63,456.70 &lt; $64,457), and the
              SM move to −28,076 is the BJ 14:51 08-13 feed artifact, not a
              certifiable long. The chase-short is also unmet — the 08-13 close
              held $63,057 and aggregate gamma RE-EXPANDED to +84.96M (from
              +72.90M), so the gamma-flip trigger stepped further from firing.{' '}
              <span className="dn-em">
                But the internals cracked toward the bear side within the base:
                OI contracted −1,470 (the build reversed), funding re-heated back
                toward the cap, retail crowded a fresh high, and — the second
                such pierce in the lineage, deeper than 08-12 — the intraday low
                $62,890 pierced the flip (though the close recovered). None of those is a trigger on its own, and the
                thicker +84.96M clamp still defends the base, but the balance
                shifted back toward the short watch after 08-13 moved away from
                it. The pending 08-16 weekly cycle-floor settle is now the line.
              </span>{' '}
              No new position on this snap; the desk stays flat while the flip
              holds on a close and the dealer clamp is +84.96M positive.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · scout re-entry · DEFERRED · unchanged distance — cap lost on a 4th close, SM &ldquo;short&rdquo; is a feed artifact not a certifiable long</span>
              <div className="dn-trade-name">
                Cover-bounce scout re-entry — still deferred; the cap is not reclaimed (4th close below it) and the SM print to −28,076 is the BJ 14:51 feed re-sync, not a certifiable smart-money long
              </div>
              <div className="dn-thesis">
                The 08-13 re-entry needed a cap RECLAIM with a certifiable SM
                long. Neither holds. The reclaim did not happen — the 24h high
                $64,010 stalled well under the D-EMA50 cap $64,457, and the 08-13
                close $63,456.70 is a fourth close below it. The SM number moved
                from −3,457 to −28,076, but that is an apparent SHORT-stack (the
                wrong direction for a scout long anyway), and +23,187 of it is the
                lone BJ 14:51 08-13 feed re-sync minute — a mechanical spike, not
                a certifiable move in either direction. The surviving bullish
                threads persist and grew one (the fresh 1h water-down golden
                cross joined the 1M ⚡TD9 BUY, the 12h-near-TD9-Buy, the 30m/1h/1w
                bottom-div, and a 24h spot bid) — but the trigger is a cap
                reclaim on a close, and that has not printed. Status:{' '}
                <em>deferred / no position</em>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-arm trigger (both legs)</span><span className="dn-lvl-v bull">1d close back &gt; D-EMA50 cap $64,457 (a genuine reclaim) AND a certifiable SM net &gt; +1k (NOT an artifact cross) → scout long 0.2R starter</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on the two-leg print, scout long 0.2R starter — a single bounded starter, no add-leg</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1d close &lt; $63,057 (0γ flip) — a close below ends the digestion read and hands the tape to the chase-short</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$66,564 (D-EMA100) confluence, then $67,073 (D-SMA100)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R starter (single, no expansion) · take half at the $66.6k confluence</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R (illustrative):</b> re-arm entry ~$64,457 (cap reclaim),
                stop $63,057 (flip) = ~$1,400 risk; first target $66,564
                (D-EMA100) = ~$2,107 reward ≈ 1.5:1. <b>Hard rule:</b> do not
                re-enter on any SM signal that crosses through the BJ 14–15 /
                15:16 feed re-sync window — the 08-10, 08-11, 08-12, 08-13 and
                today&rsquo;s reads all trace to that artifact, and today&rsquo;s
                &ldquo;short&rdquo; is the mirror of the earlier false prints. The
                cap must be reclaimed on a close first; a spot bounce to $64.5k
                intraday with the cap still lost on the daily is a false start.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · chase-short · STOOD DOWN — gamma RE-EXPANDED to +84.96M (the gamma-flip trigger moved further away) BUT the first cracks printed (intraday flip pierce, OI contraction, funding re-heat, pending 08-16 floor settle)</span>
              <div className="dn-trade-name">
                Chase-short — stood down but re-watching: gamma re-expanded to +84.96M (the trigger stepped further away), yet the 08-13 intraday low pierced the flip, OI contracted, and the 08-16 weekly floor settle is two days out; it still goes live only on a 1d close through the flip WITH the aggregate flipping negative
              </div>
              <div className="dn-thesis">
                A short-side press requires the dealer book to lose its net-long
                gamma AND price to lose the flip on a close. On the gamma leg the
                setup moved <em>further away</em>: aggregate GEX re-expanded to
                +84.96M (from +72.90M, a +12.06M net step; the strip&rsquo;s
                heaviest positive chunks are the 15AUG26 +32.85M chunk and the
                28AUG +15.13M, partly offset by other expiries), so the book is a
                HEAVIER positive-gamma dampener, not a thinning one. But on the
                price leg the first cracks printed: the 24h low $62,890 pierced
                the $63,057 flip intraday (16 candle-low minutes below, 7 on spot)
                a second time in the lineage, deeper than 08-12 — though the daily
                close $63,456.70 recovered above it — and OI contracted −1,470 while
                funding re-heated toward the cap. The hard triggers still have not
                fired (the close held the flip; gamma is +84.96M positive), so the
                press stays stood down; a 1d close through the flip with the
                aggregate negative would arm it toward the $60k −17.02M crash-put.
                The nearest catalyst is the 08-16 weekly settle: if the week
                closes below the $63,761 200W floor, the 6-week cycle-floor streak
                ends and the chase-short&rsquo;s macro backdrop strengthens.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">arm condition</span><span className="dn-lvl-v bear">1d close &lt; $63,057 flip AND aggregate GEX flips negative (currently +84.96M positive, RE-EXPANDED — the $60k −17.02M shelf would have to pull it far under zero) → arm short toward the $60k crash-put</span></div>
                <div><span className="dn-lvl-k">first cracks (watch, not triggers)</span><span className="dn-lvl-v bear">24h low $62,890 pierced the flip intraday (16 candle-low min below, 7 on spot; second of the lineage, deeper than 08-12); OI −1,470 (build reversed); funding re-heated to +9.58% (4h-ago +10.88%); retail 65.14% fresh high</span></div>
                <div><span className="dn-lvl-k">pending catalyst</span><span className="dn-lvl-v bear">08-16 weekly settle vs 200W $63,760.71 — a weekly close below it ends the 6-week cycle-floor streak (live spot is −0.43% below on a daily basis; the in-progress weekly bar would close under it)</span></div>
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">stood down — no short while the flip holds on a close and gamma is +84.96M positive; the intraday pierce + OI contraction + funding re-heat put the short watch back in play after 08-13 moved it away, but the two hard triggers are still unfired</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> the book re-thickened into a heavier dampening
                clamp — gamma went +72.90M (08-13) → +84.96M (08-14) as the 15AUG
                +32.85M chunk grew — so a loss of the flip is now deeper underwater
                on gamma than it was. Shorting a tape that holds the flip on a
                close, into a re-expanded +84.96M positive book, with the SM
                &ldquo;short&rdquo; an artifact, is premature by the same
                discipline the 08-13 note applied. The change since 08-13 is on
                the price/leverage side, not the gamma side: the intraday flip
                pierce and the OI contraction are the first genuine cracks. Wait
                for the level to break on a CLOSE (not just intraday) AND the
                aggregate to flip; the 08-16 weekly floor settle is the nearest
                thing that could tip it.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · the failed reclaim is still BASING on the flip, but the base cracked at the intraday low a second time in the lineage (deeper than 08-12) · regime holds failed-reclaim-basing-on-the-flip, with the 08-16 cycle-floor settle as the pending resolver</span>
              <div className="dn-trade-name">
                Reclaim lifecycle — basing on the flip, cracked intraday: the 08-07 reclaim lost the cap on four closes and slid under the daily floor band, but each close still holds the $63,057 flip and the dealer clamp re-expanded to +84.96M — the base held on the close a fourth day even as the intraday low pierced the flip
              </div>
              <div className="dn-thesis">
                The 08-13 note framed the regime as &ldquo;failed-reclaim-basing-on-the-flip&rdquo;
                and it held: the 08-13 close $63,456.70 held the $63,057 flip a
                fourth day, the gamma cushion re-expanded to +84.96M, and a fresh
                1h golden cross joined the 1M ⚡TD9 BUY and the bottom-div cluster.
                What changed is that the base cracked at the intraday low a
                second time in the lineage — $62,890 traded below the flip in 16
                candle-low minutes (7 on spot), deeper than 08-12, before the
                close recovered — while OI contracted and funding re-heated.
                What is still NOT reclaimed is the cap: four closes below it, spot
                under the daily floor band, retail crowded a fresh high, MTF 1
                long / 8 short.{' '}
                <span className="dn-em">
                  The regime read holds failed-reclaim-basing-on-the-flip, with
                  the $63,057 flip as the line on a close basis and a re-thickened
                  +84.96M dealer clamp defending it — but the intraday pierce and
                  the OI contraction are fresh evidence the base is being
                  tested from below, not just grinding. The framework watches the
                  flip on a CLOSE and the aggregate gamma sign; the 08-16 weekly
                  cycle-floor settle is the pending event that could convert the
                  intraday crack into a structural break
                </span>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">basing on the flip (held)</span><span className="dn-lvl-v bull">08-13 close $63,456.70 held the $63,057 flip a 4th day; gamma +72.90M → +84.96M (re-expanded); fresh 1h water-down golden cross; 1M ⚡TD9 BUY + 12h-near-TD9 + 30m/1h/1w bottom-div; 24h spot CVD +5,471</span></div>
                <div><span className="dn-lvl-k">first cracks (new)</span><span className="dn-lvl-v bear">24h low $62,890 pierced the flip intraday (16 candle-low min below, 7 on spot; second of the lineage, deeper than 08-12); OI −1,470 (build reversed); funding re-heated to +9.58%; retail 65.14% fresh high; futures/taker net selling −1,543 / −1,545</span></div>
                <div><span className="dn-lvl-k">still heavy (unresolved)</span><span className="dn-lvl-v bear">4th close below the D-EMA50 cap $64,457; spot −0.43% under the daily 200W floor / −0.78% under W-SMA200; retail fresh high; MTF 1 long / 8 short, mid-book death crosses confirmed a bar deeper</span></div>
                <div><span className="dn-lvl-k">last line + pending resolver</span><span className="dn-lvl-v">the $63,057 0γ flip on a CLOSE basis (held on 08-13; intraday pierced) + the 08-16 weekly cycle-floor settle vs $63,761 (a weekly close below ends the 6-week streak)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a base that holds on the close but
                cracks intraday is a warning, not a break — the note records this
                flip pierce plainly rather than burying it, but a single
                intraday wick that the daily close recovered is not a resolution.
                A failed reclaim basing on the flip, with a re-thickened positive
                dealer book (+84.96M) and the weekly cycle-floor streak intact
                until 08-16, is still not a turn either — the cap is lost on four
                closes and the structure is heavy. The $63,057 flip on a CLOSE
                basis is the line that separates &ldquo;base on the flip&rdquo;
                from &ldquo;first structural break toward $60k,&rdquo; and the
                08-16 settle is the nearest catalyst. Trade neither side until the
                line resolves on a close.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the base held the flip on the close a 4th day · but the mix turned heavier underneath (OI contracted, funding re-heated, retail fresh high, intraday flip pierce a second time deeper than 08-12) while gamma RE-EXPANDED to +84.96M · SM &ldquo;short&rdquo; is a feed artifact · book FLAT, both hard triggers still unfired · the 08-16 weekly cycle-floor settle is the pending resolver</span>
            </h2>

            <p>
              Of the 08-13 decision conditions: the cap-lost escalation EXTENDED
              again (a fourth close $63,456.70 below the cap, still under the
              daily floor band) but each close still holds the flip; the SM read
              REVERSED to an apparent net-short −28,076 through the same BJ 14–15
              feed re-sync (the +23,187 minute at BJ 14:51 08-13) — so it is NOT a
              certifiable smart-money move; the scout re-entry DID NOT TRIGGER
              (cap not reclaimed, no clean SM long); the flip loss DID NOT FIRE on
              a close (the 08-13 close held $63,057) though the intraday low
              pierced it a second time in the lineage (deeper than 08-12); and the chase-short re-arm moved
              FURTHER AWAY on gamma (aggregate RE-EXPANDED to +84.96M from
              +72.90M) even as the leverage legs cracked toward the bear side
              (OI contracted, funding re-heated).{' '}
              <em>The base held the flip on the close a fourth day, but the mix
              underneath turned heavier: OI contraction, funding re-heat, a fresh
              retail high, and the second intraday flip pierce of the lineage (deeper than 08-12) — set
              against a thicker +84.96M dealer clamp and a fresh 1h golden cross.
              The structure is still heavy and the hard triggers still unfired,
              but the balance tilted back toward the short watch after 08-13
              moved away from it.</em> The conditions re-set around a flat book, an
              extended-but-flip-holding cap loss, a re-thickened positive dealer
              book (+84.96M), and a pending weekly cycle-floor settle:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Cap loss EXTENDED (4th close) but STILL HOLDING the flip</td><td className="bear">1d close $63,456.70 &lt; D-EMA50 cap $64,457 (fourth consecutive), under the daily 200W floor $63,761 / W-SMA200 $63,982 — but +$2 on the day and above the $63,057 flip on a close</td><td>the failed-reclaim read deepens on the cap but bases on the flip a 4th day; the note leads with the base-held-but-cracked-intraday, does not over-read the flat close</td></tr>
                <tr><td>Leverage mix turned HEAVIER (OI reversed, funding re-heated)</td><td className="bear">OI −1,470 BTC (−1.32%, the 08-13 +1,822 build REVERSED); funding RE-HEATED to +9.58% (4h-ago +10.88%, 24h mean +8.02%, 0/1442 negative); retail 65.14% (+0.19pt, fresh high)</td><td>the re-inflation rolled over on OI while carry firmed — a book that trimmed size but kept its long tilt; bearish weight heavier, no action (not a trigger on its own)</td></tr>
                <tr><td>SM &ldquo;net short&rdquo; −28,076 — ARTIFACT</td><td className="stale">SM net −3,457 → −28,076, but +23,187 of the short build is the single BJ 14:51 08-13 re-sync minute (short +23,187 / long −2,358); pre-spike SM sat −1,569; |Δ|/prior_net 7.12× (a nonsense multiple)</td><td>DISCOUNT — a mechanical feed spike, not a certifiable smart-money press; do not weight the &ldquo;short&rdquo; as a bear signal or read a real position change</td></tr>
                <tr><td>Scout re-entry (long) — deferred, unchanged distance</td><td className="bull">1d close back &gt; D-EMA50 cap $64,457 (reclaim) AND a certifiable (non-artifact) SM net &gt; +1k</td><td>scout long 0.2R starter (single bounded starter, no add-leg); target $66,564 / $67,073</td></tr>
                <tr><td>Flip HELD on the close, but PIERCED intraday (second of the lineage, deeper than 08-12)</td><td className="bear">1d close $63,456.70 &gt; $63,057 (0γ flip) held; BUT 24h low $62,890 traded below the flip in 16 candle-low min (7 on spot) @ 08-13 16:44Z — the second intraday pierce, deeper than 08-12</td><td>the base-on-the-flip read holds on a close, but the intraday crack is fresh evidence the base is tested from below; watch a CLOSE below $63,057</td></tr>
                <tr><td>Chase-short re-arm — MOVED FURTHER AWAY on gamma, but price cracks</td><td className="bear">1d close &lt; $63,057 flip AND aggregate GEX flips negative — currently +84.96M positive, RE-EXPANDED from +72.90M (the 15AUG26 +32.85M chunk); the $60k −17.02M shelf would have to pull it far under zero</td><td>stood down and less armed on gamma; but the intraday flip pierce + OI contraction + funding re-heat put the short watch back in play — a break of the flip on a close with gamma negative arms it toward $60k</td></tr>
                <tr><td>Weekly cycle-floor watch — the PENDING resolver</td><td className="bear">200W sma200 $63,760.71 (JSON, ~96h stale, carried) — 6 above-floor weekly closes through 08-09; next settle 08-16, two days out · live spot −0.43% below on a daily basis, and the in-progress weekly bar would close under it</td><td>a weekly close below $63,761 on 08-16 ENDS the 6-week cycle-floor streak and strengthens the chase-short; this is the nearest catalyst that could convert the intraday crack into a structural break</td></tr>
                <tr><td>Reclaim-long rates filter — still FALSE (improved)</td><td className="bear">10Y &lt; 4.55% close — currently 4.68% (FALSE by 13bp, improved 2bp from 08-13&rsquo;s 15bp)</td><td>standalone macro filter still false; needs both a rates drop under 4.55% AND a BTC-internal cap reclaim to translate to scout long</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the 08-16 weekly settle closes below the $63,761 200W
                cycle floor (ending the 6-week streak) and price loses the $63,057
                flip on a close WITH aggregate gamma flipping negative — which arms
                the chase-short toward the $60k −17.02M crash-put — or whether the
                re-thickened +84.96M dealer clamp and the held flip keep the base
                intact and a cap reclaim above $64,457 finally re-arms the scout
                long
              </span>. Until then this note runs as written: the book is flat, the
              cap loss extended to a fourth close but still holds the flip, the
              dealer book re-expanded to a heavier +84.96M positive clamp, and the
              first cracks — the intraday flip pierce, the OI contraction, the
              funding re-heat — put the short watch back in play without firing its
              hard triggers. The SM &ldquo;short&rdquo; is a feed artifact and is
              discounted; MTF stays 1 long / 8 short with a fresh 1h golden cross
              and the 1M ⚡TD9 BUY as the bounce probes; the BTC-vs-TradFi lag
              re-widened to −3.48pt as BTC bled while equities ran. The right read
              for the next 24–48h is <em>patient — the base held the close but
              cracked intraday, and the 08-16 settle is the resolver</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 — post codex hostile audit
            </span>
            <b>Status:</b> this is the v2 EN note, promoted from the v1 draft
            after the STAGE B codex hostile audit
            (audits/2026-08-14-desk-note.md, verdict BLOCK-CRITICAL — 1 CRITICAL,
            1 MAJOR, 2 MINOR, plus an ask-deepseek supplementary recompute).
            STAGE C applied every finding to the EN file in place and ran a
            grep-closure loop (key wrong-claim pattern searched, hits-before,
            hits-after) for each. <b>post codex hostile audit.</b>{' '}
            <b>DN-001 (CRITICAL — false &ldquo;first intraday flip pierce of the
            lineage&rdquo;):</b> patterns <code>first time</code> /{' '}
            <code>first of the lineage</code> / <code>first intraday</code> /{' '}
            <code>first of its kind</code> / <code>deepest test</code> near
            pierce — hits-before 13, hits-after 0. Every instance rewritten to
            &ldquo;second intraday flip pierce of the lineage (deeper than
            08-12)&rdquo; (08-12 already pierced its flip intraday: low
            $63,211.6 &lt; flip $63,331; today $62,890 &lt; flip $63,057 is
            deeper). RESOLVED. <b>DN-002 (MAJOR — unsupported &ldquo;49 minutes
            below the flip&rdquo;):</b> patterns <code>49 min</code> /{' '}
            <code>49 of the</code> / <code>49 minutes</code> below the flip —
            hits-before 6, hits-after 0. Replaced with the verified field-stated
            count: 16 candle-low minutes below the flip (7 on the spot field) of
            1,442 sampled. RESOLVED (the surviving <code>49</code> is only the
            funding tile, DN-003). <b>DN-003 (MINOR — funding cap
            overstatement):</b> patterns <code>touched the cap</code> /{' '}
            <code>touched it</code> / <code>49/1442 pinned</code> — hits-before 3
            (touched) + 2 (49 pinned), hits-after 0. &ldquo;touched&rdquo; →
            &ldquo;near&rdquo; (4h-ago +10.88% &lt; +10.95% cap); cap occupancy
            re-stated as 49/1442 rounded to the +10.95% display (47/1442 exactly
            at raw 0.010000). RESOLVED. <b>DN-004 (MINOR — omitted W-SMA20):</b>{' '}
            pattern <code>W-SMA20</code> in the weekly matrix — hits-before 0,
            hits-after 1. Inserted W-SMA20 $69,104 (−8.13%) between W-EMA200 and
            W-EMA150. RESOLVED. <b>Supplementary (ask-deepseek, adjudicated, not
            auto-applied):</b> SM 24h components made self-consistent (long
            −2,099 / short +22,520 / net −24,619), minute long delta −2,359 →
            −2,358, pre-spike −1,568 → −1,569; GEX re-expansion parenthetical
            clarified as a +12.06M net step vs the strip&rsquo;s heaviest positive
            chunks; the MTF-scan 24h H/L $63,991/$62,800 reconciled as the scan
            tool&rsquo;s own feed, distinct from the live-tape range
            $64,010/$62,890 used everywhere else. <b>Build note (INFO):</b> this
            server runs Node 18.19.1; Next 16.2.6 hard-exits on Node &lt; 20.9.0,
            so a full <code>next build</code> is environment-blocked (lineage);{' '}
            <code>npx --no-install tsc --noEmit</code> is the STAGE C/E build
            proxy and returns exit 0 on this v2.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-08-14 00:06Z, tape
            anchor 00:05Z) with section-level provenance disclosed in the
            manifest band above; the macro Tier-1 panel render is 2026-08-13
            22:15Z (~1.9h before snapshot) and some inputs are explicitly stale
            or unavailable (MOVE fetch-failed a 5th day; JGB monthly stale 73d)
            and flagged as such. Levels, sizes, and conditions are illustrative
            of the desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future
            tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The base held the flip on the close a fourth day, but the mix
                turned heavier underneath — OI off, funding re-heated, the
                intraday low pierced the flip. The clamp re-thickened to +84.96M.
                The SM &ldquo;short&rdquo; is a feed artifact. Flat. The 08-16
                floor settle is the line.
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
            v2 · 2026-08-14 00:06Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
