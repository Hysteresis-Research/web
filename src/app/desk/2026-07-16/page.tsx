import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-16 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-16',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-16' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260716() {
  await requireViewer('/desk/2026-07-16');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-16 · v2</span>
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
              <span className="dn-big">$64,823</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.31%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-16 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-16 00:05Z (snapshot pin, tape row t=&ldquo;07-16 08:05&rdquo; BJ)</td>
                  <td className="dn-flag">
                    fresh · 1-min · file tail at snapshot = pin · tape `t` is
                    BJ (UTC+8); 00:05Z = t &ldquo;07-16 08:05&rdquo; · this snap
                    lands 3 days after the Mon 07-13 00:00Z weekly settle · 16JUL
                    0.3DTE option settle lands 08:00Z (~8h forward of this snap)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-16 00:01Z scan (BJ 08:01)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates hourly) ·
                    archived to snapshots/2026-07-16-0006/ · ~4-min stale vs
                    snapshot anchor · in-progress bars
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-16 00:01Z snapshot</td>
                  <td className="dn-flag">
                    archived to snapshots/2026-07-16-0006/ · 852 instruments ·
                    Deribit idx $65,025 vs live $64,823 ($202 above) · 16JUL
                    0.3DTE +0.75M settles 08:00Z today (~8h forward of this
                    snap) · median IV 41.8% pre-16JUL-settle from this 00:01Z file
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-16 00:01Z
                  </td>
                  <td className="dn-flag">archived to snapshots/2026-07-16-0006/ · 7d 1h bars · 22 assets · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-15 22:18Z render</td>
                  <td className="dn-flag">
                    archived to snapshots/2026-07-16-0006/ · ~1.8h render lag ·
                    FRED Tier-1: 10Y nominal FETCH-FAILED this render (rates
                    filter/gate cannot be refreshed — carry prior 4.56%, do not
                    lean), TIPS 2.33%, HY OAS 2.72%, MOVE 68.5 (−9.3 vs 07-14),
                    DXY 100.50, Fed net liq $5.958T · 5Y5Y BE + US-JP spread also
                    fetch-failed
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-16 00:06Z</td>
                  <td className="dn-flag">
                    ~1-min post-anchor vs snapshot anchor (parquet 00:06Z bar
                    is one minute AFTER the 00:05Z live pin, intentionally used
                    for the freshest MA/RV cut) · offsets recomputed vs live
                    spot · weekly on Binance W-MON convention (weekly close
                    settles Mon 00:00Z) · full matrix computable (359 weekly bars
                    across 8 yearly parquet files 2019–2026)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W-watch JSON</td>
                  <td className="dn-v-cell">weekly_200sma.json · NOT PRESENT this run</td>
                  <td className="dn-flag">
                    200W watch unavailable — file absent; fall back to matrix
                    W-SMA200 $63,078 (no fabricated percentile / last-event)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale · monthly (75d) · do not treat as live</td>
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
              <span className="dn-v">+2.80%</span>
              <span className="dn-src">live · raw 0.002553 × 1095 = +2.80% · UNWOUND off the cap · 24h mean +7.69% · cap occupancy 664 / 1442 sampled rows = 46.0% (24h+1m event window: 1,442 rows from 2026-07-15 08:04 BJ / 00:04Z, one minute before the exact 24h baseline; the window OPENED pinned at the +10.95% cap and bled off it) · zero negative rows · min +2.31% ann @ 2026-07-15 18:05Z / BJ 07-16 02:05</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">+10.95% → +2.80% (−8.15pt off the cap)</span>
              <span className="dn-src">24h range +2.31% / +10.95% · funding sat at the +10.95% cap through the window open (the trapped-long press of 07-14/07-15) then bled to +2.31% as smart money covered and the crowded long paid down — the leverage press deflated</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−2.42% (−2,559 BTC)</span>
              <span className="dn-src">live · 103,013 BTC (−2,559 off the prior 105,572 BTC) · OI SHRANK across the window — the short cover pulled gross DOWN, not a fresh-demand build; the mirror of the 07-14 +6,531 short-stack expansion</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v">54.15 / 45.85</span>
              <span className="dn-src">live_db `mkt_long_pct` · de-crowded −10.69pt from the 64.84% 07-14 peak (24h range 53.40 / 55.57) — retail unwound the max-long as the squeeze covered; back to a lightly-crowded read, not the trapped extreme</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−5,756 (net SHORT, COVERED 74.8% of the 24h short)</span>
              <span className="dn-src">live · long 12,466 − short 18,222 · short flushed −13,910, long +3,151 over 24h — the deepest short of the recovery (−22,817 @ the window open) got run over; net back toward flat but re-adding into the snap</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 07-14 note</span>
              <span className="dn-v bull">−13,426 → −5,756 (+7,670 covered, 57.1% of prior)</span>
              <span className="dn-src">|Δ|/prior_net = |−5,756 − (−13,426)| / 13,426 = 57.1% · 24h cut fraction 74.8% off the −22,817 window-open trough · one discrete COVER step @ 2026-07-15 07:11Z / BJ 15:11 (Δnet +17,888.7, Δlong +7,237.3 / Δshort −10,651.4 same minute)</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.8% / 33.48%</span>
              <span className="dn-src">GEX median IV · 852 inst. (pre-16JUL-settle from the 00:01Z file) · chain-median across instruments, NOT a tradable spread · richness ~+8.3pt · RV 30 close-to-close returns</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+5.35% (above)</span>
              <span className="dn-src">flip $61,532 (was $61,527 · +$5) · vs live spot $64,822.82 (+5.35%; 64,822.82/61,532 − 1 = 5.35%) / GEX file Deribit idx $65,025 (+5.68%; 65,025/61,532 − 1 = 5.68%, file rounds +5.7%) — both refs positive, the cushion re-widened from +1.29% · aggregate GEX +175.1M net-long-gamma (was +37.7M — a +137.4M re-gamma as spot rallied ~$2,500)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The squeeze the 07-14 note flagged fired — the deep short got run
                over, but nothing stepped in to replace the covering fuel
              </span>. The 07-14 note called the scout VOID on a broken floor and
              named the counter-trade: a −13,426 SM short into retail max-long at
              the funding cap is squeeze fuel if spot turns. Spot turned. Price
              reclaimed the floor and ran to{' '}
              <span className="dn-tag bull">$65,552</span>, smart money re-shorted
              even harder into it to a recovery-deep{' '}
              <span className="dn-tag bear">−22,817 @ the window open</span>, then
              got squeezed: SM covered{' '}
              <span className="dn-tag bull">74.8% of the 24h short (net −22,817 →
              −5,756)</span> on a discrete one-minute cover step{' '}
              <span className="dn-tag bull">@ 2026-07-15 07:11Z / BJ 15:11 (Δnet
              +17,888.7, Δshort −10,651.4)</span>, funding unwound off the{' '}
              <span className="dn-tag bull">+10.95% cap to +2.80%</span> (mean
              +7.69%), OI shrank <span className="dn-tag bull">−2,559 BTC
              (−2.42%)</span>, and retail de-crowded{' '}
              <span className="dn-tag bull">64.84% → 54.15% (−10.69pt)</span>. The{' '}
              <span className="dn-tag bull">$63,078 W-SMA200 floor</span> is
              decisively reclaimed — two completed daily closes back above
              (07-14 $65,014.70, 07-15 $64,721.40) after the single 07-13 close
              beneath, with the 07-16 in-progress bar $64,761.00 still above,
              spot $64,823 sits +2.77% over it. But the cover is
              the fuel, not a fresh spot-demand base:{' '}
              <span className="dn-em">OI fell as gross deflated, the last 4h/1h
              spot SOLD with OI still leaking, and SM re-added shorts into the
              snap (−2,467 → −5,756)</span> — the buyer of record was a covering
              short, not a bid. The dealer book re-gammaed deep{' '}
              <span className="dn-tag bull">+37.7M → +175.1M net-long-gamma</span>{' '}
              (the deepest of the recovery) with the $64k–$72k positive wall band
              capping and NO near-dated negative amplifier on the strip. The MTF
              engine rolled from 07-14&rsquo;s 5/9 &ldquo;sell the bounce&rdquo;
              to a <span className="dn-tag">5/9 cycle-reversal
              &ldquo;bounce-favored&rdquo;</span> read (3 long / 2 short / 5
              neutral). The scout revives from VOID to{' '}
              <span className="dn-tag">DEFERRED</span> — two of its three revive
              legs met (floor reclaimed AND SM covering) but the third (spot CVD
              pulling OI UP) failed, so the book stays FLAT: no scout long on a
              cover that deflated the book, no short into a deep positive-gamma
              book with no amplifier, no fresh hedge on a blind rates leg.
            </p>

            <p>
              BTC prints <span className="dn-tag">$64,823</span> live,{' '}
              <span className="dn-tag bear">−0.31%</span> on 24h — a shallow
              give-back off the top of the range that held the whole band above
              the floor — inside a{' '}
              <span className="dn-tag">$65,552 / $64,485</span> live-tape spot
              range (high @ 2026-07-15 13:22Z / BJ 21:22, low @ 2026-07-15
              07:29Z / BJ 15:29, ~18 min after the cover step).{' '}
              <span className="dn-signal">The reclaim is decisive on close</span>:
              spot $64,823 sits +2.77% above the $63,078 W-SMA200 floor and
              +3.14% above the settled-basis W-SMA200 $62,852, the 07-14 daily
              close <span className="dn-tag bull">$65,014.70</span> and the 07-15
              close <span className="dn-tag bull">$64,721.40</span> are the first
              two daily closes back above the floor after the single 07-13 close
              beneath, and the in-progress 07-16 close at parquet last bar{' '}
              <span className="dn-tag bull">$64,761.00</span> holds above it. The
              in-progress 07-13→07-19 weekly is marking{' '}
              <span className="dn-tag bull">$64,761.00 (+2.67% above the floor)</span>,
              and the settled Mon 07-13 weekly close $63,750.00 sat +1.43% above
              the settled-basis floor $62,852 — the re-confirm-break trigger the
              lineage tracked is fully dis-armed and settled to the upside.{' '}
              <span className="dn-em">
                The floor held on the close that counts and the deep short that
                bet against it covered — but the reclaim ran on covering fuel and
                a deflating book, not on a fresh bid pulling OI up. This is a
                squeeze-cover above the floor, not yet a demand-confirmed turn.
              </span>{' '}
              The cover-bounce scout&rsquo;s 07-14 revive condition — a 1d close
              back above the floor AND SM covering AND spot CVD pulling OI up —
              filled two legs cleanly and failed the third, so the scout moves
              from void back to deferred, still gated on the demand leg.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · the deep short covered 74.8% on a discrete one-minute flush · OI SHRANK −2.42% · retail de-crowded off the max-long · funding unwound off the cap · spot-bought the cover then sold the last 4h into the leak</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position book flushed the recovery&rsquo;s deepest short
              </span>. SM net is <span className="dn-tag">−5,756</span> vs the
              07-14 note&rsquo;s −13,426 — that is{' '}
              <span className="dn-em">+7,670 covered, 57.1% of the prior net</span>{' '}
              (|−5,756 − (−13,426)| / 13,426 = 57.1%). But the 24h arc is larger
              than the note-to-note delta: the short first DEEPENED to a
              recovery-low <span className="dn-tag bear">−22,817 @ 2026-07-15
              00:04Z (BJ 08:04)</span> — the window open, the deepest net-short of
              the entire recovery, printed into the $65k reclaim — then covered
              74.8% off that trough (|−5,756 − (−22,817)| / 22,817 = 74.8%). The
              components: long_btc{' '}
              <span className="dn-tag bull">9,315 → 12,466 (+3,151)</span> and
              short_btc <span className="dn-tag bull">32,132 → 18,222
              (−13,910)</span> — a short flush more than four times the long add,
              a genuine cover. The discrete signature printed in a single minute:{' '}
              <span className="dn-tag bull">2026-07-15 07:11Z (BJ 15:11) Δnet
              +17,888.7 (Δlong +7,237.3, Δshort −10,651.4, spot $64,824)</span> — a
              re-stack-hostile-2 in reverse, the largest single-minute cover of
              the lineage, the exact mirror of the 07-13 −5,850 short-slam step.
              SM reached its least-short at{' '}
              <span className="dn-tag bull">−2,467 @ 2026-07-15 16:41Z (BJ 07-16
              00:41)</span>, then re-added shorts back to −5,756 into the snapshot
              over the last ~7.4h — a modest re-short, not a fresh slam, but the
              book did not stay flat.
            </p>

            <p>
              <span className="dn-signal">
                The leverage side confirms deflation, not a fresh press
              </span>. Funding is live{' '}
              <span className="dn-tag bull">+2.80% ann</span> (raw 0.002553 ×
              1095), unwound off the cap: the 24h window{' '}
              <span className="dn-em">opened</span> pinned at the +10.95% cap (the
              trapped-long press carried over from 07-14/07-15) and bled to a
              trough <span className="dn-tag bull">+2.31% ann @ 2026-07-15 18:05Z
              (BJ 07-16 02:05)</span>, then ticked to +2.80% at the snap. 24h mean
              ann <span className="dn-tag">+7.69%</span>, cap occupancy{' '}
              <span className="dn-tag">664 / 1442 sampled rows (46.0%, the
              24h+1m event window from 00:04Z)</span> — but
              all of that occupancy is in the front of the window; the cap emptied
              as the cover ran. Zero negative rows across the 24h. OI Δ{' '}
              <span className="dn-tag bull">−2,559 BTC (−2.42%)</span> — the
              short-cover pulled gross DOWN, the exact mirror of the 07-14
              +6,531 / +6.49% short-stack expansion; this is de-grossing, not
              fresh demand. Retail{' '}
              <span className="dn-tag bull">mkt_long_pct 54.15%</span> from the
              64.84% 07-14 peak — a −10.69pt de-crowding, the trapped max-long
              unwound. Perp trades a{' '}
              <span className="dn-tag bear">−$58.86 discount</span> to spot at the
              snap (1h mean −$42.14, 4h mean −$40.89, 24h mean −$49.61, range
              −$312.32 / +$78.57 — the deep −$312 discount printed intraday on the
              cover but basis has since firmed back toward flat). 1-min aggressor
              skew snap <span className="dn-tag bull">+15.2</span> (1h mean −4.03,
              24h mean −7.19) — a mild buy-aggressor tick at the snap, no one-way
              press.{' '}
              <span className="dn-em">
                Funding off the cap + OI shrinking + retail de-crowded + SM
                covering 74.8%: the leverage press that powered the 07-14 down-leg
                has fully deflated. But a deflating book is not a bidding book —
                the fuel left, and no fresh demand has replaced it.
              </span>
            </p>

            <p>
              Windowed flow is <em>a 24h cover-bid that turned into a 4h/1h
              spot-offer as OI kept leaking</em>. 24h: price{' '}
              <span className="dn-tag bear">−0.31%</span>, OI{' '}
              <span className="dn-tag bull">−2,559 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,929</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +1,371</span>, big-print{' '}
              <span className="dn-tag bull">+2,788 BTC</span>, taker-net{' '}
              <span className="dn-tag bull">+1,344</span> —{' '}
              <span className="dn-em">
                both spot AND futures bought hard into a falling OI; the buying is
                the short covering back, not fresh gross being added — CVD up with
                OI down is the textbook cover signature, not a demand base
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bear">−0.24%</span>, OI{' '}
              <span className="dn-tag bear">−424 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −359</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −120</span>, big-print{' '}
              <span className="dn-tag bear">−171 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−113</span> —{' '}
              <em>the buyer stepped back and spot offered as OI kept shrinking</em>.
              1h: price <span className="dn-tag bear">−0.13%</span>, OI{' '}
              <span className="dn-tag bear">−109 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −235</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −174</span>, big-print{' '}
              <span className="dn-tag bear">−208 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−218</span> —{' '}
              <em>spot, futures and big-print all offered into the snap with OI
              still leaking</em>. The 24h cover-bid is real and large, but the
              most recent two windows show the book selling into a shrinking OI —
              the covering fuel has run and no fresh bid has replaced it.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · rolled from 07-14&rsquo;s &ldquo;sell the bounce&rdquo; to a 5/9 cycle-reversal &ldquo;bounce-favored&rdquo; read · fresh 12h water-up + 3d water-down golden crosses · 1h &amp; 1M ⚡TD9 BUY · higher-TF bottom-div cluster (1d/3d/1w) offset by a top-div cluster of six · floor reclaimed on close</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF engine rolled materially more constructive as the cover
                ran
              </span>. The overall tally is{' '}
              <span className="dn-tag">3 long / 2 short / 5 neutral</span> across
              10 TFs (was 1 long / 8 short / 1 neutral on 07-14), net read{' '}
              <em>higher-TF bearish · short-term bounce</em>, regime{' '}
              <span className="dn-tag">5/9 cycle-reversal (JT&lt;0) —
              mean-reversion / bounce-favored</span>. Two fresh mid-frame crosses
              printed 2 bars ago: a{' '}
              <span className="dn-tag bull">12h water-up golden cross (DIF +485.9,
              strong)</span> and a{' '}
              <span className="dn-tag bull">3d water-down golden cross (DIF
              −3,198.2, early)</span> — the engine and cycle frames both lifting.
              Two ⚡ TD9 BUYs flashed:{' '}
              <span className="dn-tag bull">1h ⚡TD9 BUY $64,740</span> and{' '}
              <span className="dn-tag bull">1M ⚡TD9 BUY $64,751</span>. The
              reversal clusters are two-sided: a top-div cluster of six{' '}
              <span className="dn-tag bear">(15m/30m/1h/8h/12h/1d)</span> caps the
              fast-and-mid frames, offset by a higher-TF bottom-div cluster{' '}
              <span className="dn-tag bull">(1d/3d/1w)</span> plus the 1M bullish
              regular divergence (price LL + indicator HL). RSI lifted across the
              engine: 1h <span className="dn-tag">50.9</span> (back on the
              mid-line), 4h <span className="dn-tag bull">58.2</span>, 8h{' '}
              <span className="dn-tag bull">58.1</span>, 12h{' '}
              <span className="dn-tag bull">59.6</span> — the mid frames are the
              strongest, the fast frames (15m 41.5, 30m 43.7) and the slow frames
              (1w 39.8) still soft.{' '}
              <span className="dn-em">
                Read straight: the engine has flipped from selling the bounce to
                favoring it — 12h golden cross, 3d golden cross, 1h &amp; 1M TD9
                BUYs, a higher-TF bottom-div cluster — but the fast frames carry a
                top-div cluster and the daily is still below its cloud (↑66.7k).
                The bounce is real on the engine; the daily cloud and the top-div
                cluster are what a demand-confirmed turn would have to clear.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,751</td><td className="num">41.5</td><td className="neut">death (water-up) 32b</td><td className="bear">below ↑65.0k 17b</td><td>Buy 4</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">64,751</td><td className="num">43.7</td><td className="neut">death (water-up) 14b</td><td className="neut">in cloud 63.9–64.8k 3b</td><td>Buy 6</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">64,740</td><td className="num">50.9</td><td className="neut">death (water-up) 8b</td><td className="bull">above ↓63.9k 36b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">64,751</td><td className="num bull">58.2</td><td className="bull">golden (water-dn) 9b</td><td className="bull">above ↓63.6k 9b</td><td>Sell 5</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>8h</td><td className="num">64,751</td><td className="num bull">58.1</td><td className="bull">golden (water-up) 4b</td><td className="bull">above ↓62.1k 21b</td><td>Buy 2</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>12h</td><td className="num">64,751</td><td className="num bull">59.6</td><td className="bull">golden (water-up) 2b</td><td className="bull">above ↓62.5k 4b</td><td>Sell 4</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>1d</td><td className="num">64,751</td><td className="num bull">55.2</td><td className="bull">golden (water-dn) 15b</td><td className="bear">below ↑66.7k 45b</td><td>Sell 3</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">64,751</td><td className="num">45.3</td><td className="bull">golden (water-dn) 2b</td><td className="bear">below ↑72.0k 15b</td><td>Sell 5</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">64,751</td><td className="num">39.8</td><td className="bear">death (water-dn) 3b</td><td className="bear">below ↑96.3k 24b</td><td>Sell 1</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">64,751</td><td className="num">44.2</td><td className="neut">—</td><td className="bull">above ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (BJ 08:01; rolling
                    latest file, archived verbatim in
                    snapshots/2026-07-16-0006/). Header alerts:{' '}
                    <em>12h water-up golden cross (2 bars ago, DIF +485.9)</em>,{' '}
                    <em>3d water-down golden cross (2 bars ago, DIF −3,198.2)</em>,{' '}
                    <em>1h ⚡TD9 BUY $64,740</em>, <em>1M ⚡TD9 BUY $64,751</em>.
                    Scan spot $64,740, 24h −0.42% (00:01Z MTF scan; the live-tape
                    header at 00:05Z shows −0.31% on the same 24h window — the
                    4-minute gap and the scan&rsquo;s own 24h anchor account for
                    the difference), 24h H/L $65,590 / $64,451 (the scan&rsquo;s
                    own candle-based 24h off its 00:01Z anchor — distinct from
                    the live-tape spot 24h range $65,552 / $64,485 quoted in the
                    prose), qVol $8.59B.
                    Closes are in-progress bars; treat every value as provisional
                    until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms a reclaim holding four positive lines with a
              tight cap just overhead. Spot $64,823 sits above a stacked support
              band: <span className="dn-tag bull">D-SMA50 $63,955 (+1.36%)</span>{' '}
              nearest below, then{' '}
              <span className="dn-tag bull">D-EMA20 $63,398 (+2.25%)</span>, the{' '}
              <span className="dn-tag bull">W-SMA200 floor $63,078 (+2.77%)</span>,
              and <span className="dn-tag bull">D-SMA20 $62,525 (+3.68%)</span> —
              four positive daily/weekly lines under spot for the first time since
              the floor broke on 07-13. The cap is tight:{' '}
              <span className="dn-tag bear">D-EMA50 $65,107 (−0.44%)</span> sits
              just $284 overhead — the tightest overhead line of the recovery, the
              level a demand-confirmed reclaim has to clear to validate. Above it,
              everything is deep:{' '}
              <span className="dn-tag bear">D-EMA100 $68,412 (−5.25%)</span> the
              working first target,{' '}
              <span className="dn-tag bear">W-EMA200 seed $68,697 (−5.64%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,869 (−7.22%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $69,910 (−7.28%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $70,529 (−8.09%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $70,533 (−8.10%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $71,511 (−9.35%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $73,407 (−11.69%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,364 (−12.83%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $74,409 (−12.88%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $76,114 (−14.83%)</span>. Far
              above and disused: W-EMA50 $79,504 (−18.47%), W-EMA100 $79,655
              (−18.62%), W-SMA50 $86,485 (−25.05%), W-SMA100 $88,488 (−26.74%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-16 00:06Z (close
                $64,761.00); offsets recomputed against live spot $64,822.82.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. Full matrix computable — 359 weekly bars across
                2019–2026 give a true W-SMA200 $63,078 floor (spot +2.77%);
                W-EMA200 $68,697 is seed-disclosed as the EMA seeds from available
                history. Daily closes: 07-11 $63,783, 07-12 $63,750, 07-13
                $62,307 (the single close beneath the floor), 07-14 $65,014.70,
                07-15 $64,721.40 — two completed daily closes back above the
                $63,078 floor, with 07-16 (in-progress) $64,761.00 still above.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book re-gammaed to +175.1M net-long-gamma (the deepest of the recovery) · flip $61,532, spot +5.35% above · $64k–$72k positive wall band caps · $60k −13.75M the lone top-10 negative bids the fade · NO near-dated negative amplifier on the strip</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book re-gammaed deep as spot rallied ~$2,500 off the
                07-14 low
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+175.1M / 1%</span> (was +37.7M on
              07-14 — a +137.4M re-gamma, the deepest net-long-gamma of the
              recovery); the book is heavily dampening. The 0-γ flip is{' '}
              <span className="dn-tag">$61,532 (was $61,527, +$5)</span>, and spot
              $64,823 sits{' '}
              <span className="dn-tag bull">+5.35% above flip</span> on
              spot-denominated math (64,822.82 / 61,532 − 1 = +5.35%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads +5.7% off its
              Deribit-index $65,025 ($202 above live spot), which is{' '}
              <span className="dn-tag bull">+5.68%</span> (65,025 / 61,532 − 1 =
              +5.68%) — both references positive, the cushion re-widened from the
              +1.29% of 07-14 back to a comfortable margin. The wall map is a
              positive band across the whole near strike range:{' '}
              <span className="dn-tag bull">$70k +42.54M</span> (heaviest wall),{' '}
              <span className="dn-tag bull">$66k +27.93M</span>,{' '}
              <span className="dn-tag bull">$65k +27.12M</span>,{' '}
              <span className="dn-tag bull">$72k +20.49M</span>,{' '}
              <span className="dn-tag bull">$68k +19.80M</span>,{' '}
              <span className="dn-tag bull">$64k +15.82M</span>,{' '}
              <span className="dn-tag bull">$67k +14.36M</span>,{' '}
              <span className="dn-tag bear">$60k −13.75M</span> (the lone top-10
              negative, a crash-put residual bidding the fade),{' '}
              <span className="dn-tag bull">$80k +9.78M</span>,{' '}
              <span className="dn-tag bull">$69k +6.35M</span>.{' '}
              <span className="dn-em">
                The $64k–$72k band sums to roughly +174M of positive support —
                the dealer book is structurally bid into a fade and offered into a
                squeeze, and spot sits right inside the densest part of the band.
                The book damps both directions from here
              </span>. 16JUL26 0.3DTE +0.75M settles at the 08:00Z print today (~8h
              forward of the snap) — a small positive chunk, no vol event. Forward
              expiries: 17JUL 1.3 +49.15M, 18JUL 2.3 −0.70M, 19JUL 3.3 +0.29M,
              24JUL 8.3 +22.82M, 31JUL 15.3 +87.42M (the heaviest, monthly), 28AUG
              43.3 +16.93M, 25SEP 71.3 +3.86M, 25DEC 162.3 +3.80M, 26MAR27 253.3
              +1.11M, 25JUN27 344.3 +0.57M.{' '}
              <span className="dn-em">
                No near-dated negative amplifier survives on the strip — the 07-14
                14JUL −4.40M chunk settled and was NOT replaced; the only negative
                forward is the tiny 18JUL −0.70M. There is no gamma fuel for a
                squeeze in either direction; the amplifier that powered the
                down-leg is structurally gone
              </span>.
            </p>

            <p>
              IV median across 852 instruments is{' '}
              <span className="dn-tag">41.8%</span> (was 42.4% / 838 instruments on
              07-14) against 30D close-to-close RV of{' '}
              <span className="dn-tag">33.48%</span> — chain-level richness{' '}
              <span className="dn-tag">~+8.3pt</span> (down from +12.4pt as RV
              caught up to the two-day range).{' '}
              <span className="dn-em">
                Disclosure: 852 instruments and 41.8% IV median are
                PRE-16JUL-settle values read from the 00:01Z GEX file; the 16JUL
                0.3DTE +0.75M chunk clears at 08:00Z (~8h forward of the snap) and
                the post-settle count/IV median are NOT recomputed
              </span>. A chain-median across N instruments,{' '}
              <span className="dn-em">not</span> a tradable spread; expiry-/strike-
              level vega, skew and term structure remain not loaded; the vol read
              stays framework-only. Put/Call OI ratio 0.51 (Call OI 258,404 BTC /
              Put OI 131,676 BTC). RV methodology: 30D close-to-close, logret.std ×
              √365 × 100 on the last 30 daily log returns anchored to parquet last
              bar 2026-07-16 00:06Z (the 29-return alt reads 33.46%; the 33.48%
              page value comes from 30 returns).
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · 10Y nominal FETCH-FAILED this render (rates filter/gate blind — do not lean) · TIPS 2.33% EXTREME RISK-OFF · DXY softened to 100.50 · MOVE collapsed −9.3 to 68.5 loose · HY OAS 2.72% RISK-ON (6bp from its gate) · Fed net liq $5.958T EXTREME RISK-ON · cross-asset LOOSENED to |r| 0.242 IDIOSYNCRATIC · BTC 7d +4.27% now LEADS NQ by +3.46pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape eased on the dollar and bond vol, held loose on
                credit and liquidity — but the rates leg is blind this render
              </span>. Dashboard render is 2026-07-15 22:18Z, ~1.8h before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag stale">FETCH-FAILED (unavailable)</span> —
              the FRED DGS10 pull failed this render, so{' '}
              <span className="dn-em">
                the reclaim-long rates filter (10Y &lt; 4.55%) and the put-spread
                re-grow 10Y leg (&gt; 4.53%) cannot be refreshed; the last known
                print is 07-14&rsquo;s 4.56% (filter FALSE, re-grow leg FIRED), but
                that is stale and must not be leaned on — treat the rates gate as
                indeterminate this print
              </span>. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.33% (−3.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.76</span>, episodic z{' '}
              <span className="dn-tag">+1.51</span> — EXTREME RISK-OFF, the
              day&rsquo;s biggest firm-side mover. 5Y5Y BE inflation and the US-JP
              10Y spread also fetch-failed. HY OAS{' '}
              <span className="dn-tag bull">2.72% (+3.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.06</span>, episodic z{' '}
              <span className="dn-tag">−0.13</span> — RISK-ON, 6bp below the 2.78%
              re-grow gate. Chicago Fed NFCI{' '}
              <span className="dn-tag bull">−0.538 (−0.01, weekly)</span>, regime z{' '}
              <span className="dn-tag bull">−1.03</span>, episodic z{' '}
              <span className="dn-tag bull">−1.92</span> — RISK-ON. MOVE bond vol{' '}
              <span className="dn-tag bull">68.5 (−1.07 day · −9.3 vs 07-14)</span>,
              regime z <span className="dn-tag bull">−0.57</span> — loose, and the
              collapse off 07-14&rsquo;s 77.8 is the cleanest vol-cool on the
              panel. DXY <span className="dn-tag bull">100.50 (−0.44 day · −0.78
              vs 07-14)</span>, regime z{' '}
              <span className="dn-tag bear">+1.59</span> — RISK-OFF tag but
              softened. Fed net liquidity{' '}
              <span className="dn-tag bull">$5.958T (+0.118T, weekly)</span>,
              regime z <span className="dn-tag bull">+2.42</span>, episodic z{' '}
              <span className="dn-tag bull">+2.47</span> — EXTREME RISK-ON.{' '}
              <span className="dn-em">
                Net: with the rates leg blind, the loadable macro read is dollar
                softer, bond vol collapsing, credit loose (6bp from the re-grow
                gate), liquidity extreme risk-on, TIPS the lone extreme risk-off —
                a net risk-on pulse on the lines that matter for BTC. But the rates
                gate that gated the scout&rsquo;s filter and the hedge&rsquo;s
                re-grow is indeterminate until the next successful DGS10 pull
              </span>. The BTC-vs-TradFi read inverted: BTC 7d +4.27% now LEADS NQ
              +0.81% by +3.46pt — BTC is the risk leader this window, not the
              laggard.
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
                <tr><td>US 10Y nominal</td><td className="num stale">n/a</td><td className="num stale">fetch-failed</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">unavailable · do not lean (prior 4.56%)</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.33%</td><td className="num bull">−3.0bp</td><td className="num bear">+2.76</td><td className="num">+1.51</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num stale">n/a</td><td className="num stale">fetch-failed</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">unavailable</td></tr>
                <tr><td>HY OAS</td><td className="num">2.72%</td><td className="num bear">+3.0bp</td><td className="num bull">−1.06</td><td className="num">−0.13</td><td className="bull">RISK-ON · 6bp from gate</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.538</td><td className="num">−0.01</td><td className="num bull">−1.03</td><td className="num bull">−1.92</td><td className="bull">RISK-ON · weekly</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">68.5</td><td className="num bull">−1.07</td><td className="num bull">−0.57</td><td className="num">−0.57</td><td className="bull">loose · −9.3 vs 07-14</td></tr>
                <tr><td>DXY</td><td className="num">100.50</td><td className="num bull">−0.44</td><td className="num">+1.59</td><td className="num">−0.09</td><td className="bear">RISK-OFF · softened</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.958T</td><td className="num bull">+0.118T</td><td className="num">+2.42</td><td className="num bull">+2.47</td><td className="bull">EXTREME RISK-ON</td></tr>
                <tr><td>USD/JPY</td><td className="num">162.23</td><td className="num bull">−0.20</td><td className="num bear">+1.50</td><td className="num">+0.99</td><td className="neut">no tag</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num stale">n/a</td><td className="num stale">fetch-failed</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">unavailable</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7624</td><td className="num bull">−0.02</td><td className="num bull">−1.49</td><td className="num bull">−1.21</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="num">+1.43</td><td className="stale">monthly (75d) · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.242</span>{' '}
              (loosened from the ~0.315 NORMAL of the prior lineage — crossed
              below the 0.25 threshold and back into the IDIOSYNCRATIC band).
              BTC&rsquo;s listed ties: NQ{' '}
              <span className="dn-tag">+0.453</span> (top tie), SP500{' '}
              <span className="dn-tag">+0.406</span>, SILVER{' '}
              <span className="dn-tag">+0.386</span>, TSLA{' '}
              <span className="dn-tag">+0.369</span>, GOLD{' '}
              <span className="dn-tag">+0.340</span>, URNM{' '}
              <span className="dn-tag">+0.312</span>, COPPER{' '}
              <span className="dn-tag">+0.269</span>, NVDA{' '}
              <span className="dn-tag">+0.261</span>. 7d performance:{' '}
              <span className="dn-tag bull">BTC +4.27%</span> (the risk leader),
              NQ <span className="dn-tag bull">+0.81%</span>, SP500{' '}
              <span className="dn-tag bull">+1.19%</span>, JP225{' '}
              <span className="dn-tag bear">−0.63%</span>, META{' '}
              <span className="dn-tag bull">+12.58%</span> (single-name leader),
              AMZN <span className="dn-tag bull">+4.94%</span>, AAPL{' '}
              <span className="dn-tag bull">+4.63%</span>, NVDA{' '}
              <span className="dn-tag bull">+3.83%</span>, MSFT{' '}
              <span className="dn-tag bull">+3.47%</span>, TSLA{' '}
              <span className="dn-tag bear">−0.06%</span>. Metals mixed: GOLD{' '}
              <span className="dn-tag bear">−0.39%</span>, SILVER{' '}
              <span className="dn-tag bear">−0.87%</span>, PLAT{' '}
              <span className="dn-tag bull">+5.43%</span>, PALL{' '}
              <span className="dn-tag bull">+7.48%</span>, COPPER{' '}
              <span className="dn-tag bull">+4.26%</span>. Energy strong: CL{' '}
              <span className="dn-tag bull">+7.54%</span>, BRENT{' '}
              <span className="dn-tag bull">+6.96%</span>, NGAS{' '}
              <span className="dn-tag bear">−10.40%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lead over the TradFi engine is +3.46pt (BTC +4.27%
                vs NQ +0.81%) — BTC led the risk tape this window on its own
                short-cover, while the correlation loosened to idiosyncratic. The
                load-bearing read stays endogenous-to-crypto: the squeeze-cover is
                a BTC-internal event, not a macro-driven one; the macro pulse is
                net risk-on but the rates gate is blind
              </span>. JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag
              (stale 75d) — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · book FLAT · the 07-14 squeeze-risk counter-trade FIRED · cover-bounce scout REVIVES from VOID to DEFERRED (2 of 3 revive legs met, demand-quality leg unmet) · no chase-short into a +175.1M positive-gamma book with no amplifier · no fresh hedge on a blind rates leg</span>
            </h2>

            <p>
              <span className="dn-signal">
                Yesterday&rsquo;s counter-trade printed and the book is still FLAT
              </span>. The 07-14 note declared the scout VOID on a broken floor and
              named the squeeze risk explicitly: a −13,426 SM short into retail
              max-long at the funding cap is squeeze fuel if spot turns. Spot
              turned, the short deepened to a recovery-low −22,817 into the $65k
              reclaim, and then covered 74.8% on a discrete one-minute flush — the
              counter-trade fired. The scout&rsquo;s 07-14 revive condition (a 1d
              close back above the floor AND SM covering AND spot CVD pulling OI
              up) filled two legs — the floor is reclaimed on two completed
              daily closes (07-16 in-progress still above)
              and SM covered 74.8% — but failed the third: OI SHRANK as the cover
              deflated the book, the last 4h/1h spot sold, and SM re-added shorts
              into the snap. So the scout moves from void back to{' '}
              <span className="dn-em">deferred</span>, still gated on the demand
              leg. The book today is: no scout long on a cover that pulled OI
              down, no chase-short into a +175.1M positive-gamma book with no
              amplifier and spot +5.35% above flip, no fresh hedge with the rates
              leg blind — wait for spot demand to pull OI UP (fresh gross, not a
              short covering it down) and for the D-EMA50 $65,107 reclaim to
              validate.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · DEFERRED · 2 of 3 revive legs met (floor reclaimed AND SM covering) · demand-quality leg (CVD pulling OI up) UNMET</span>
              <div className="dn-trade-name">
                Cover-bounce scout — revived from void to deferred: the price pre-condition is rebuilt and SM covered, but the cover deflated the book instead of a bid pulling OI up
              </div>
              <div className="dn-thesis">
                The scout was declared VOID on 07-14 when the price pre-condition
                (spot above flip AND D-EMA20 AND D-SMA20 AND floor) broke and the
                revive was set to a rebuild from scratch: a 1d close back above the
                floor AND SM covering AND spot CVD pulling OI up. Two of those
                three legs filled cleanly — the floor is reclaimed on two
                completed daily closes ($65,014.70 / $64,721.40 vs $63,078, with
                07-16 in-progress $64,761.00 still above)
                and SM covered 74.8% of the 24h short (−22,817 → −5,756) — so the
                price pre-condition is fully rebuilt (spot above flip $61,532,
                D-SMA20 $62,525, D-EMA20 $63,398 AND the floor $63,078). But the
                third leg failed: the cover pulled OI DOWN (−2,559 BTC), the last
                4h/1h spot offered with OI still leaking, and SM re-added shorts
                into the snap. The buyer of record was a covering short unwinding,
                not a fresh spot bid adding gross. The scout is therefore deferred,
                not live: the demand-quality leg — spot CVD pulling OI UP with SM
                flat-to-covering — is the gate, exactly as the whole recovery it
                was gated on the demand base and not the price.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">price pre-condition (REBUILT, 4/4)</span><span className="dn-lvl-v bull">spot $64,823 &gt; flip $61,532 AND &gt; D-SMA20 $62,525 AND &gt; D-EMA20 $63,398 AND &gt; W-SMA200 floor $63,078 — the four-leg gate is re-established</span></div>
                <div><span className="dn-lvl-k">demand trigger (UNMET, the gate)</span><span className="dn-lvl-v bear">spot CVD pulling OI UP (fresh gross, not a short covering down) AND a 1h/4h close &gt; D-EMA50 $65,107 (the tightest overhead line, +$284) AND SM flat-to-covering, not re-adding</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on the demand trigger print, scout long 0.2R — the price pre-condition is already rebuilt; the entry waits on demand quality, not on price</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1h close &lt; $63,078 W-SMA200 floor — a close back below re-voids the scout and re-opens the break question</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$68,412 (D-EMA100) first, then $69,870 (W-SMA20 / D-SMA150 cluster)</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v bear">no scout long on a cover that pulled OI down; a CVD-up / OI-down read is a cover, not a demand base — it can fade the moment the covering runs out</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> trigger ~$65,107 (D-EMA50 reclaim), stop $63,078
                (floor) = ~$2,029 risk; first target $68,412 (D-EMA100) = ~$3,305
                reward ≈ 1.6:1. <b>Hard rule:</b> the demand leg must be a fresh
                gross build — spot CVD pulling OI UP — not the tail of a short
                cover. A CVD-up print on OI DOWN is the cover we already saw; it is
                necessary-not-sufficient and can reverse the moment the short is
                done buying back. The scout waits for the bid to show in the OI,
                and for the D-EMA50 cap to clear on a close.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · dealer book re-gammaed to +175.1M net-long-gamma · flip +5.35% beneath spot · NO near-dated negative amplifier · no chase-short into a deep positive-gamma book</span>
              <div className="dn-trade-name">
                Chase-short — stand down: the book re-gammaed to the deepest net-long-gamma of the recovery with no amplifier fuel, and the deep short already covered
              </div>
              <div className="dn-thesis">
                The short case that carried the 07-14 down-leg is gone: the deep SM
                short (−13,426 → −22,817) has covered 74.8%, funding is off the
                cap, and the dealer book re-gammaed from +37.7M to +175.1M — the
                deepest net-long-gamma of the recovery, a book that damps every
                move. A chase-short here is late into a covered book, above a flip
                +5.35% beneath spot, inside a +174M positive wall band, with no
                near-dated negative amplifier to fuel a re-break. The only short
                worth re-arming is a fresh re-stack signature (SM Δnet ≤ −5k
                pushing net back below −13k) AND a 1d close back below the $63,078
                floor — a rebuild of the 07-13/07-14 setup, not a fade of this
                reclaim.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · no chase-short into a covered book above a positive-gamma flip</span></div>
                <div><span className="dn-lvl-k">re-arm trigger (rebuild)</span><span className="dn-lvl-v bear">fresh SM re-stack Δnet ≤ −5k pushing net &lt; −13k AND a 1d close &lt; $63,078 floor — the whole break setup re-established, not a fade of the reclaim</span></div>
                <div><span className="dn-lvl-k">squeeze risk (already spent)</span><span className="dn-lvl-v bull">the −22,817 short that WAS the squeeze fuel has covered 74.8%; the fuel that powered this counter-move is largely spent, so a fresh long has less short-cover tailwind from here</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> the 07-14 note flagged this exact counter-trade
                and it fired; the lesson is symmetric — do not now chase the long
                that the cover already ran, nor short the reclaim the cover already
                validated. A deep positive-gamma book with no amplifier damps both
                tails; the edge is in the demand-quality leg of the scout, not in
                pressing a spent move.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · rates leg BLIND this render (10Y fetch-failed) · HY OAS 6bp from its re-grow gate · no roll</span>
              <div className="dn-trade-name">
                Downside put-spread — no position, no roll: the rates re-grow leg is indeterminate (10Y unavailable) and the credit leg is 6bp shy
              </div>
              <div className="dn-thesis">
                The macro tail is flat with no fresh trigger. The put-spread
                re-grow gate is two-legged (HY OAS &gt; 2.78% OR 10Y &gt; 4.53%):
                HY OAS is 2.72%, 6bp shy; the 10Y leg fetch-failed this render, so
                its status (FIRED at 07-14&rsquo;s 4.56% &gt; 4.53%) cannot be
                refreshed and must not be leaned on. The reclaim-long rates filter
                (10Y &lt; 4.55%) is likewise blind — it read FALSE at 4.56% on
                07-14 but cannot be confirmed today. No roll and no fresh hedge:
                the book is FLAT, spot is +5.35% above a positive-gamma flip, and
                there is no near-dated negative amplifier to hedge against.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · no roll · no fresh hedge</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (next Tier-1 print)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.72%, 6bp to fire) OR 10Y &gt; 4.53% close (INDETERMINATE — 10Y fetch-failed; prior 4.56%)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v stale">10Y &lt; 4.55% close — INDETERMINATE this render (fetch-failed); do not lean on the stale 4.56%</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches, not
                backtested breakpoints. With the 10Y leg blind, the only
                loadable re-grow read is the HY OAS 6bp cushion. A fresh hedge
                would only make sense against a near-dated negative amplifier
                re-appearing on the strip AND a floor-break re-arm — neither is
                present. Wait for a successful DGS10 pull before treating the rates
                gate as live either way.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle · the 07-14 short-slam converted into a discrete one-minute COVER flush · read as a standalone signal, no calendar prior</span>
              <div className="dn-trade-name">
                Squeeze-cycle — the short-slam reversed: a discrete +17,888.7 one-minute cover @ BJ 15:11 flushed the recovery&rsquo;s deepest short
              </div>
              <div className="dn-thesis">
                The 07-13/07-14 framework tracked a fresh short-build that
                accelerated into a −5,850 one-minute short-slam. That signature
                inverted: the short deepened once more to −22,817 into the $65k
                reclaim, then a discrete{' '}
                <span className="dn-tag bull">+17,888.7 one-minute cover step @
                2026-07-15 07:11Z (BJ 15:11)</span> (Δlong +7,237.3, Δshort −10,651.4,
                spot $64,824) flushed most of it — the largest single-minute cover
                of the lineage and the exact mirror of the short-slam. SM reached
                its least-short −2,467 @ 2026-07-15 16:41Z (BJ 07-16 00:41) then
                re-added modestly to −5,756 into the snap. The cadence framework
                stays falsified (no calendar prior); the re-stack / re-cover
                signatures remain meaningful as standalone tape reads when they
                print.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">discrete cover event</span><span className="dn-lvl-v bull">+17,888.7 one-minute Δnet @ 2026-07-15 07:11Z (BJ 15:11) · Δlong +7,237.3, Δshort −10,651.4 · spot $64,824 · the largest single-minute cover of the lineage</span></div>
                <div><span className="dn-lvl-k">SM 24h arc</span><span className="dn-lvl-v">−22,817 (window-open trough @ 07-15 00:04Z) → −2,467 (least-short @ 07-15 16:41Z) → −5,756 (snap, re-added into the last ~7.4h)</span></div>
                <div><span className="dn-lvl-k">forward gating</span><span className="dn-lvl-v">watch any fresh Δnet ≤ −5k as a re-short signal (no calendar prior); a spot-CVD-pulls-OI-up print with SM flat-to-covering is the affirmative demand-base read the scout waits on</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the squeeze-cycle read has now printed
                both a short-slam and its mirror cover inside four sessions —
                treat each discrete Δnet ≥ ±5k print as a standalone signal, not a
                cadence. The cover is the fuel of this bounce; when it is spent
                (as the re-add into the snap suggests it is nearing), the next leg
                is decided by whether fresh demand shows in the OI, not by another
                cover.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the squeeze-risk counter-trade FIRED · the floor is reclaimed on close · the scout revives from void to deferred for its demand-quality leg · the book stays FLAT</span>
            </h2>

            <p>
              Of the 07-14 decision conditions: the squeeze-risk counter-trade
              FIRED clean (the −13,426 → −22,817 SM short into retail max-long
              covered 74.8% as spot reclaimed the floor); the cover-bounce
              scout&rsquo;s revive condition FILLED two of three legs (floor
              reclaimed on close AND SM covering) and FAILED the third (spot CVD
              pulled OI DOWN, not up); the fresh re-stack short-slam INVERTED to a
              discrete cover flush; the reclaim-long rates filter is INDETERMINATE
              this render (10Y fetch-failed). <em>The counter-trade the prior note
              named fired exactly, the floor held on the close that counts, and
              the scout revives from void to deferred — but the reclaim ran on
              covering fuel and a deflating book, so the demand-quality leg is the
              gate and the book stays FLAT.</em> The conditions today re-set around
              a reclaimed floor, a re-gammaed positive book, a spent short-cover,
              and a deferred scout:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Squeeze-risk counter-trade (FIRED)</td><td className="bull">the −22,817 SM short covered 74.8% as spot reclaimed the floor and ran to $65,552 — the 07-14 counter-trade printed</td><td>do not chase the long the cover already ran, nor short the reclaim it validated; the fuel is largely spent</td></tr>
                <tr><td>Cover-bounce scout (long) — DEFERRED</td><td className="bull">price pre-condition REBUILT (4/4) AND SM covered; demand-quality leg UNMET (CVD pulled OI down)</td><td>scout long 0.2R only on spot CVD pulling OI UP AND a close &gt; D-EMA50 $65,107 AND SM flat-to-covering; target $68,412 then $69,870</td></tr>
                <tr><td>Floor re-break (re-void)</td><td className="bear">1d close &lt; $63,078 W-SMA200 floor</td><td>re-voids the scout and re-opens the break question; re-arm the short only on a fresh re-stack pushing net &lt; −13k</td></tr>
                <tr><td>Floor holds + gamma stays positive</td><td className="bull">1d closes hold &gt; $63,078 AND aggregate GEX stays positive (no fresh near-dated negative amplifier on the strip)</td><td>the reclaim-above-floor read holds; scout asymmetry improves as demand confirms in the OI</td></tr>
                <tr><td>Chase-short re-arm (rebuild)</td><td className="bear">fresh SM re-stack Δnet ≤ −5k pushing net &lt; −13k AND a 1d close &lt; $63,078</td><td>re-arm the short with a stop at the D-EMA50 $65,107 reclaim; base rate is low into a +175.1M positive-gamma book with no amplifier</td></tr>
                <tr><td>Squeeze-cycle (FALSIFIED cadence)</td><td className="stale">no calendar prior; read each discrete Δnet ≥ ±5k print as a standalone signal</td><td>the +17,888.7 cover @ BJ 15:11 was the mirror of the 07-13 short-slam — a signal, not a base rate</td></tr>
                <tr><td>Macro tail re-grow</td><td className="bear">HY OAS &gt; 2.78% (6bp to fire) OR 10Y &gt; 4.53% (INDETERMINATE — 10Y fetch-failed)</td><td>no roll; the only loadable leg is the HY OAS 6bp cushion — wait for a successful DGS10 pull before treating the rates gate as live</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="stale">10Y &lt; 4.55% close — INDETERMINATE this render (fetch-failed; prior FALSE at 4.56%)</td><td>blind this print; do not lean on the stale value either way</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether fresh spot demand steps in to pull OI back UP above the
                reclaimed floor — the demand-quality leg the scout is gated on —
                or whether the spent short-cover leaves the book to bleed laterally
                and slip back toward the $63,078 floor once the covering fuel runs
                out. The squeeze the 07-14 note flagged has fired; the question is
                now whether a bid replaces the cover, or whether the reclaim was
                only the short getting out
              </span>. Until then this note runs as written: the book is FLAT, the
              cover-bounce scout is deferred for its demand-quality leg (price
              pre-condition rebuilt, entry gated on CVD pulling OI up and a D-EMA50
              reclaim), the chase-short stands down into a +175.1M positive-gamma
              book with no amplifier, and the macro tail is flat with a blind rates
              gate. The floor is reclaimed on close, the dealer book damps both
              tails, and the deep short that bet against the floor has covered —
              the right read for the next 24h is{' '}
              <em>patient — the fuel that ran this bounce is nearly spent; wait for
              the bid to show in the OI, not for another cover</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> post codex hostile audit. STAGE B verdict
            PASS-WITH-NOTES — 0 CRITICAL, 1 MAJOR, 2 MINOR (codex primary) plus
            an ask-deepseek supplementary numeric recompute (1 flagged CRITICAL,
            1 MAJOR, 1 MINOR) that STAGE C adjudicated against source before
            acting. Findings and resolutions are recorded in{' '}
            <b>audits/2026-07-16-desk-note.md</b>; v2 promoted from v1 after
            grep-closure confirmed zero stale residue on every applied finding.
            <br />
            <b>DN-001 (MAJOR, close-count overstatement):</b> patterns searched
            {' '}<em>three daily closes</em>, <em>three consecutive</em>,{' '}
            <em>three legs filled</em>, and the semantic variant of any
            in-progress bar counted as a completed close — hits-before 4 prose
            sites (lead, structure-MA, trade-book prose, scout thesis) + the
            audit-trace echo; each rewritten to{' '}
            <em>two completed daily closes back above the floor (07-14 $65,014.70,
            07-15 $64,721.40) with 07-16 in-progress $64,761.00 still above</em>{' '}
            (parquet recompute: last completed close 07-15 $64,721.40; 07-16
            $64,761.00 is the 00:06Z in-progress bar, not a settled daily close);
            grep hits-after 0 — RESOLVED. The scout revive leg stays valid (one
            1D close above the floor is sufficient and two are present).
            <br />
            <b>deepseek CRITICAL (24h H/L conflict):</b> adjudicated by recompute
            from live_db.json across the exact 24h window — the prose range{' '}
            <em>$65,552 / $64,485</em> is the correct live-tape spot 24h range
            (spot high $65,552.01 @ 07-15 21:22 BJ, spot low $64,485.0 @ 07-15
            15:29 BJ). The MTF-scan <em>$65,590 / $64,451</em> is the
            mtf_div_latest.html artifact&rsquo;s own candle-based 24h off its
            separate 00:01Z anchor (candle h/l $65,589.7 / $64,453.8) — a
            distinct disclosed source, not a contradiction of the same
            measurement; patterns searched <em>65,552</em>, <em>64,485</em>,{' '}
            <em>65,590</em>, <em>64,451</em>, both now explicitly labeled
            (prose = &ldquo;live-tape spot range&rdquo;, MTF note = &ldquo;the
            scan&rsquo;s own candle-based 24h off its 00:01Z anchor&rdquo;),
            hits-after carrying the ambiguous unlabeled meaning 0 — RESOLVED.
            <br />
            <b>deepseek MAJOR (close-value precision):</b> patterns searched{' '}
            <em>$65,015</em>, <em>$64,721</em> (bare), <em>$64,761</em> (bare) —
            hits-before 3 sites showing the rounded $65,015 / $64,721; all
            normalized to the precise parquet closes $65,014.70 / $64,721.40 /
            $64,761.00 used uniformly throughout; grep hits-after for the bare
            rounded forms 0 — RESOLVED.
            <br />
            <b>deepseek MINOR + codex-clean (SM cover step Δnet):</b> patterns
            searched <em>17,889</em>, <em>+7,237</em>, <em>−10,651</em> — the
            stated net +17,889 did not equal the rounded components
            (7,237 + 10,651 = 17,888); live_db recompute at line 79242 gives the
            exact step Δnet +17,888.7 (Δlong +7,237.3, Δshort −10,651.4). All 7
            sites (meta, lead, positioning, squeeze-cycle name/thesis/lvl/table,
            audit-trace) set to the precise decimals so components sum to net;
            grep hits-after for <em>17,889</em> 0 — RESOLVED.
            <br />
            <b>DN-002 (MINOR, 24h window off-by-one):</b> the tape uses a 1,442-
            row 24h+1m event window opening 2026-07-15 08:04 BJ / 00:04Z (one
            minute before the exact 08:05 baseline); rather than re-derive every
            24h value, the window is now explicitly labeled as a{' '}
            <em>24h+1m event window from 00:04Z</em> at both the funding-cap and
            tape sites; patterns searched <em>1442</em>, <em>664 / 1442</em> —
            hits-after carrying an unlabeled &ldquo;exact 24h&rdquo; claim 0 —
            RESOLVED (thesis unchanged; codex confirmed exact-window numbers do
            not move the read).
            <br />
            <b>DN-003 (MINOR, footer anchor):</b> footer changed from{' '}
            <em>00:06Z snapshot</em> to <em>00:05Z snapshot · MA/RV parquet cut
            00:06Z</em> so the live-tape anchor leads and the post-anchor parquet
            cut is separated; patterns searched <em>00:06Z snapshot</em> in the
            footer — hits-after 0 — RESOLVED.
            <br />
            Codex-confirmed-clean anchors carried forward unchanged: funding
            0.002553 × 1095 = +2.80% ann (24h mean +7.69%, zero negative rows);
            GEX dual-reference (flip $61,532, spot +5.35% / idx +5.68%, both
            positive); SM cut fractions (24h 74.8% off −22,817, note-to-note
            57.1% vs −13,426); full MA matrix vs live spot $64,822.82 off parquet
            00:06Z close $64,761.00 (W-SMA200 floor $63,078 +2.77%, D-EMA50
            $65,107 −0.44% cap, 359 weekly bars); 30D RV 33.48%; GEX aggregate
            +175.1M with only 18JUL −0.70M forward negative; IV 41.8% chain-median
            across 852 instruments (pre-16JUL-settle, not a tradable spread);
            macro Tier-1 fetch-failures flagged (rates gate indeterminate, prior
            4.56% not leaned on); cross-asset |r| 0.242 IDIOSYNCRATIC, BTC 7d
            +4.27% vs NQ +0.81% = +3.46pt; requireViewer gating (first statement,
            path /desk/2026-07-16). All findings RESOLVED (grep hits-after = 0);
            post codex hostile audit.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-07-16 00:05Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-07-15 22:18Z (~1.8h before
            snapshot) with the 10Y nominal, 5Y5Y breakeven and US-JP spread
            rows explicitly fetch-failed and flagged as such. Levels, sizes, and
            conditions are illustrative of the desk&rsquo;s process, not standing
            recommendations. Past correlation, gamma, and positioning patterns do
            not bind future tape. Derivatives carry the risk of total loss and,
            where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The squeeze fired and the deep short covered. The floor held on
                close. But the cover deflated the book instead of a bid pulling OI
                up — the scout waits on demand, not price. Patient.
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
            v2 · 2026-07-16 00:05Z snapshot · MA/RV parquet cut 00:06Z · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
