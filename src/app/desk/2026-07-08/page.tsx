import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-08 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-08',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-08' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260708() {
  await requireViewer('/desk/2026-07-08');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-08 · v2</span>
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
              <span className="dn-big">$63,431</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.93%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-08 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-08 00:05Z (snapshot pin, BJ 08:05 row)</td>
                  <td className="dn-flag">
                    fresh · 1-min · file tail at pin · tape LIVE through the anchor
                    (no freeze this cut) · SM feed live · anchor row is BJ-local
                    &ldquo;07-08 08:05&rdquo; = 00:05Z per the live-tape t-field
                    convention · every &ldquo;24h&rdquo; figure below is a 24h+1m
                    inclusive sampled window, start row BJ 07-07 08:04 → end BJ
                    07-08 08:05 (endpoint-to-endpoint 08:05→08:05 differs by ≤0.06pt
                    on spot / ≤7 BTC on OI)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-08 00:01Z scan (BJ 08:01)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · ~4-min stale vs snapshot anchor ·
                    in-progress bars · archived to
                    /opt/desk-note/snapshots/2026-07-08-0005/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-08 00:00Z snapshot</td>
                  <td className="dn-flag">
                    ~5-min stale vs anchor · Deribit idx $63,639 vs live $63,431 ·
                    878 instruments · card headline &ldquo;Total GEX / 1% move&rdquo;
                    reads +104.6M while the by-expiry strip sums +114.2M
                    (= gex_summary.json net_gex +114.17M) — the note carries the
                    strip-sum aggregate and discloses the card figure ·
                    8JUL26 0.3DTE +6.60M settles 08:00Z today (after this snap)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-08 00:00Z
                  </td>
                  <td className="dn-flag">~5-min lag · 7d 1h bars · 22 assets · 166 rows · a rolling 7d read, not today</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-07 22:16Z render</td>
                  <td className="dn-flag">
                    ~1.8h render lag · FRED Tier-1: 10Y 4.48% (−1.0bp), TIPS 2.24%
                    (−2.0bp, EXTREME), HY OAS 2.72% (−2.0bp, RISK-ON), MOVE 65.8
                    (+0.36), DXY 101.12 (+0.27, EXTREME) · Fed net liq $5.843T
                    (+0.053T) · NFCI stale 11d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-08 00:05Z</td>
                  <td className="dn-flag">
                    offsets recomputed vs live spot $63,431.07 · 3-file glob (132
                    weekly bars) ⇒ W-SMA150 / W-SMA200 non-computable; the 200W
                    floor below is recomputed separately from the full 2019→ glob
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle floor watch</td>
                  <td className="dn-v-cell">full-history W-SMA200 recomputed · cross-ref ma200w_trap_watch_state.json (2026-07-07 06:00Z)</td>
                  <td className="dn-flag">
                    canonical weekly_200sma.json ABSENT · floor = $62,864
                    (W-MON W-SMA200 on the last completed 07-06 week, 357
                    completed W-MON bars from the 2019→ glob) · the trap-watch
                    state file (W-SUN
                    convention) independently reads state &ldquo;above&rdquo;, last
                    event week 07-05, sma200 $62,642 — both agree on ABOVE · ratio
                    percentile / last-event NOT sourced (not fabricated)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale · monthly (67d) · do not treat as live</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT pivots, max-pain, strike-level IV, BTC/NQ ratio
                  </td>
                  <td className="dn-v-cell">NOT LOADED in this cut</td>
                  <td className="dn-flag">claims explicitly framework-only (btc_ntt_analysis.html is JS-rendered, not extractable)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h ann.</span>
              <span className="dn-v">+5.16%</span>
              <span className="dn-src">live raw 0.004714 × 1095 = +5.16% · 24h mean +8.00% ann · range +2.67% / +10.95% (cap) · zero negative rows · cap occupancy 312 / 1442 sampled rows (21.6%), last cap row 07-07 18:49Z — funding came OFF the cap into the snap</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">+10.95% → +5.16% (−5.79pt off cap)</span>
              <span className="dn-src">24h-ago row sat pinned at the +0.01 cap (+10.95% ann); the live read has eased −5.79pt to +5.16% — long leverage cooling, no short-pay dip (0 negative rows)</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−3.16% (−3,246 BTC)</span>
              <span className="dn-src">live · 102,677 → 99,431 BTC · the SECOND consecutive 24h OI shrink (was −2.42% on 07-07) · SM long_btc −3,191 (flushed), short_btc −808 (trimmed) — a two-sided de-gross, long side flushed ~4× harder</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bull">58.82 / 41.18</span>
              <span className="dn-src">live_db `mkt_long_pct` · edged UP +1.81pt from 57.01% on 07-07 · 24h range 56.15 / 62.35 — retail leaning INTO the dip, a mild contrarian caution</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−34 (net FLAT, both sides ~12.0k)</span>
              <span className="dn-src">live · long 11,982 − short 12,017 · net effectively zero · flipped from +2,349 net-LONG (24h ago) via a long flush; first crossed &lt; 0 @ 07-07 13:56Z · 24h net range −815 / +3,722</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 07-07 note</span>
              <span className="dn-v bear">+2,348.85 → −34.40 (Δnet −2,383, net flipped long→flat)</span>
              <span className="dn-src">|Δ|/prior_net = 2,383.26 / 2,348.85 = 101.5% — the net was ENTIRELY unwound and tipped fractionally short; Δlong −3,191, Δshort −808 (a long capitulation, NOT a hostile-2 re-stack)</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.5% / 32.08%</span>
              <span className="dn-src">GEX median IV across 878 inst. · 30D close-to-close RV (logret.std × √365 × 100, 30 returns) · chain-level richness ~+10.4pt · RV firmed (bigger daily ranges through the pullback)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+3.87% (above)</span>
              <span className="dn-src">flip $61,071 · vs live spot $63,431 (+3.87%; 63,431.07/61,070.73 − 1 = 3.865%) / GEX file Deribit idx $63,639 (+4.2%) — both refs positive, spot well above · aggregate GEX +114.2M net-LONG-gamma (strip sum; card headline +104.6M) — shallower than 07-07&rsquo;s +157.8M but still dampening</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The recovery&rsquo;s first weekly close back above the 200W floor
                held, but the follow-through is a de-grossing pullback, not
                accumulation
              </span>. Spot prints <span className="dn-tag">$63,431</span>,{' '}
              <span className="dn-tag bear">−0.93%</span> on 24h — the first
              down-leg of consequence in the run: 07-06 set the recovery&rsquo;s
              peak daily close <span className="dn-tag bull">$64,023.60</span>,
              07-07 broke the six-up-close streak with a{' '}
              <span className="dn-tag bear">$63,335.40</span> down-close (−$688),
              and the in-progress 07-08 bar sits{' '}
              <span className="dn-tag">$63,427</span>. The 200W reclaim is NOT
              falsified — the 07-06 <em>weekly</em> close{' '}
              <span className="dn-tag bull">$64,023.60 (+1.84%)</span> settled
              above the $62,864 floor, the first weekly close above since the
              06-29 break, and the in-progress 07-13 weekly bar $63,427 still
              holds above. But the live tape confirms and DEEPENS the prior
              note&rsquo;s &ldquo;de-grossing not demand&rdquo; read: OI shrank a
              second day <span className="dn-tag bear">−3.16% (−3,246 BTC)</span>,
              SM net collapsed from <span className="dn-tag bull">+2,349
              net-LONG</span> to <span className="dn-tag">−34 (FLAT)</span> as
              longs flushed <span className="dn-tag bear">−3,191 BTC</span> against
              only <span className="dn-tag">−808</span> of short trim, funding
              came off the <span className="dn-tag">+0.01 cap</span> to{' '}
              <span className="dn-tag">+5.16% ann</span> (24h mean +8.00%, zero
              negative rows), and taker/futures flow net-SOLD hard (24h taker-net{' '}
              <span className="dn-tag bear">−4,334</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −4,317</span>) even as spot CVD
              bought (<span className="dn-tag bull">+1,894</span>). The dealer
              book stays net-long-gamma (<span className="dn-tag bull">+114.2M</span>,
              flip $61,071, spot +3.87% above, no meaningful negative expiry) so
              the pullback is ORDERLY, not amplified. The MTF engine still reads a
              6/9 trend-continuation regime but has rolled to{' '}
              <em>higher-TF bearish / short-term bounce</em> — the fast 1h frame
              just printed a water-up death cross, 1w confirmed a water-down death
              cross, the daily is at TD Sell 7, offset by a fresh 12h/1d
              bottom-divergence cluster and a 1M ⚡ TD9 BUY. The book stays flat:
              no shorts, no scout, no fresh hedge — the recovery&rsquo;s first
              pullback holds above the reclaimed floor inside a dampening dealer
              book, but reads leverage unwinding, not demand.
            </p>

            <p>
              BTC prints <span className="dn-tag">$63,431</span> live,{' '}
              <span className="dn-tag bear">−0.93%</span> on 24h, inside a{' '}
              <span className="dn-tag">$64,290 / $62,801</span> range (high @
              07-07 00:26Z, low @ 07-07 14:38Z).{' '}
              <span className="dn-signal">
                The 200W cycle floor reclaim survives the pullback on the only
                basis that counts — the weekly close
              </span>: the 06-29 weekly close $60,224.70 confirmed the break
              (−4.20% below the $62,864 floor), the 07-06 weekly close
              $64,023.60 reclaimed it (+1.84%, the first weekly close above since
              the break), and the in-progress 07-13 week $63,427 sits +0.90%
              above the line still. Beneath spot the support stack is thin but
              intact — the <span className="dn-tag bull">200W floor $62,864
              (+0.90%)</span>, <span className="dn-tag bull">D-EMA20 $62,693
              (+1.18%)</span>, <span className="dn-tag bull">D-SMA20 $61,933
              (+2.42%)</span>, and the <span className="dn-tag bull">0γ flip
              $61,071 (+3.87%)</span> — three levels plus the flip below the tape.
              Everything else is overhead and unreclaimed: the{' '}
              <span className="dn-tag bear">D-EMA50 $65,571 (−3.26%)</span> /{' '}
              <span className="dn-tag bear">D-SMA50 $65,985 (−3.87%)</span>{' '}
              cluster is the first overhead line, and the daily 100/150/200
              ladder sits −8% to −16% away.{' '}
              <span className="dn-em">
                This is digestion above the reclaimed floor: the tape held the
                weekly-close level and has not lost a single support beneath, but
                it has not reclaimed a single overhead MA either, and the way it
                is holding — longs flushed, OI shrinking, funding cooling — reads
                as air coming out of the recovery&rsquo;s leverage, not fresh
                buyers stepping in.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · OI shrinks a second day (−3.16%) · SM net collapses +2,349 → FLAT on a long flush · funding off the cap · taker/futures net-sell into a spot-CVD bid</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position book de-grossed hard and the smart-money net flipped
                from long to flat
              </span>. SM net is <span className="dn-tag">−34</span> vs the 07-07
              note&rsquo;s <span className="dn-tag bull">+2,348.85</span> — a Δnet
              of <span className="dn-tag bear">−2,383</span>, which is{' '}
              <span className="dn-em">101.5% of the prior net</span> (|−34.40 −
              2,348.85| / 2,348.85 = 1.015): the entire net-long book was unwound
              and tipped fractionally short. The components: long_btc{' '}
              <span className="dn-tag bear">15,173.79 → 11,982.36 (−3,191)</span>{' '}
              and short_btc <span className="dn-tag">12,824.93 → 12,016.76
              (−808)</span> — both sides shrank, the long side flushed roughly 4×
              harder than the short trimmed. Net first crossed below zero at{' '}
              <span className="dn-tag bear">07-07 13:56Z</span> and long_btc
              troughed <span className="dn-tag bear">11,879 @ 07-07 22:01Z</span>;
              the 24h net range was −815 / +3,722.{' '}
              <span className="dn-em">
                This is a long capitulation, not a sustained hostile-2 re-stack —
                isolated same-minute Δshort &gt; 0 + Δlong &lt; 0 ticks DO appear
                on the raw feed (e.g. 07-07 20:10→20:11, Δlong −188 / Δshort
                +340), but none persisted across consecutive minutes into a
                qualifying re-stack; the 24h net mechanism stays a two-sided
                de-gross with the long side bleeding ~4× the short trim. The
                squeeze-cycle watchlist stays quiet.
              </span>
            </p>

            <p>
              The leverage side confirms the de-gross.{' '}
              <span className="dn-signal">Funding came off the Binance cap</span>:
              live <span className="dn-tag">+5.16% ann</span> (raw 0.004714 ×
              1095), 24h mean <span className="dn-tag">+8.00%</span>, range{' '}
              <span className="dn-tag">+2.67% / +10.95%</span> with the max still
              pinned at the +0.01 cap but occupancy down to{' '}
              <span className="dn-tag">312 / 1442 sampled rows (21.6%)</span> and
              the last cap row at 07-07 18:49Z — funding has spent the back half
              of the window sliding off the ceiling, with{' '}
              <span className="dn-tag">zero negative rows</span> (no short-pay
              dip). OI Δ <span className="dn-tag bear">−3,246 BTC (−3.16%)</span>{' '}
              over 24h — the SECOND consecutive daily OI shrink (07-07 printed
              −2.42%), OI troughed 99,421 @ 07-08 07:59Z and sits 99,431 now.
              Retail <span className="dn-tag">mkt_long_pct 58.82%</span> edged UP
              +1.81pt from 57.01% (24h range 56.15 / 62.35) — retail leaned into
              the dip while SM flushed out, the classic weak-hand-vs-strong-hand
              split that argues caution. Perp trades a{' '}
              <span className="dn-tag bear">−$46.01 discount</span> to spot at the
              snap (1h mean −$39.52, 4h mean −$38.88, 24h mean −$51.18, range
              −$171.12 / +$27.62 — basis dipped premium only briefly). 1-min
              aggressor skew snap <span className="dn-tag bear">−6.2</span> (1h
              mean −9.38, range −31.5 / +18.9) — a mild sell tilt.{' '}
              <span className="dn-em">
                Funding off the cap + OI shrinking two days running + SM net
                flushed to flat + retail leaning long into the dip: the recovery
                is deflating its leverage, and the marginal long is now the retail
                book, not smart money.
              </span>
            </p>

            <p>
              Windowed flow is <em>net-selling that steepens through the middle of
              the window and stabilises into the snap</em>. 24h: price{' '}
              <span className="dn-tag bear">−0.93%</span>, OI{' '}
              <span className="dn-tag bear">−3,246 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,894</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −4,317</span>, big-print{' '}
              <span className="dn-tag bear">−2,823 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−4,334</span> —{' '}
              <span className="dn-em">
                spot bought while futures/perp sold hard with OI shrinking; a
                spot-bid-into-perp-liquidation shape, the down-move printed on
                leverage coming off, not fresh spot distribution
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bear">−0.69%</span>, OI{' '}
              <span className="dn-tag bear">−953 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −334</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −629</span>, big-print{' '}
              <span className="dn-tag bear">−149 BTC</span>, taker-net{' '}
              <span className="dn-tag bear">−614</span> — a uniformly heavy 4h,
              both spot and futures offered. 1h: price{' '}
              <span className="dn-tag bear">−0.20%</span>, OI{' '}
              <span className="dn-tag bear">−101 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −152</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +8</span>, big-print{' '}
              <span className="dn-tag bull">+31 BTC</span>, taker-net{' '}
              <span className="dn-tag bull">+9</span> —{' '}
              <em>spot still offering but futures/big-print/taker turned mildly
              bid into the snap, a small stabilisation with OI still shrinking</em>.
              The 24h shape is a clean de-gross; the 1h hints the flush is easing,
              not that demand has arrived.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · 6/9 trend-continuation regime but HIGHER-TF bearish / short-term bounce · 1h rolled to a water-up death cross, 1w confirmed a water-down death cross · engine golden crosses (8h/12h/1d) still stand · 12h/1d bottom-div cluster + 1M ⚡TD9 BUY</span>
            </h2>

            <p>
              <span className="dn-signal">
                The engine held its recovery golden crosses but the fast frame
                rolled and the weekly confirmed a death cross
              </span>. The regime code stays 6/9 (JT≥0, trend-continuation), but
              the net read moved to <em>higher-TF bearish, short-term bounce</em>:
              3 long / 3 short / 4 neutral across 10 frames. The recovery&rsquo;s
              engine crosses are intact — 8h water-down golden cross 20b, 12h 13b,
              1d 7b — but the <span className="dn-tag bear">1h just printed a
              water-up death cross (2b ago)</span> and the{' '}
              <span className="dn-tag bear">1w confirmed a water-down death cross
              (2b ago, DIF −5,879, weak/continuation)</span>. TD counts show the
              exhaustion building at the top of the recovery: the daily is at{' '}
              <span className="dn-tag bear">TD Sell 7</span> and 12h at{' '}
              <span className="dn-tag bear">Sell 1</span> — the prior note&rsquo;s
              two overbought 1h/12h TD9 SELLs delivered their pullback. Offsetting
              lower: a fresh <span className="dn-tag bull">bottom-divergence
              cluster on 12h and 1d</span> (higher-TF, the down-leg may be
              limited) and a <span className="dn-tag bull">1M ⚡ TD9 BUY</span>{' '}
              (cycle-oversold reversal hint at $63,294). Ichimoku: 1h still above
              cloud (10b) but rolling, 4h/8h above cloud, 12h back INTO cloud
              (62.7k–66.7k), 1d/3d/1w below cloud.{' '}
              <span className="dn-em">
                Read straight: the recovery&rsquo;s engine bounce is intact on the
                8h–1d golden crosses, but the fast frame has rolled and the daily
                is exhausted at Sell 7 — a pullback within the recovery, capped
                below by the 12h/1d bottom divergences and the 1M oversold buy.
                The tops (15m–4h) fired; watch whether the 12h/1d bottoms hold the
                floor or the 1w death cross drags the weekly-close back below.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,274</td><td className="num">38.4</td><td className="neut">death (water-up) 21b</td><td className="bear">below ↑63.4k 2b</td><td>Buy 3</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">63,274</td><td className="num">42.5</td><td className="neut">death (water-up) 8b</td><td className="neut">in cloud 63.0–63.4k 1b</td><td>Buy 2</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">63,285</td><td className="num">46.6</td><td className="bear">death (water-up) 2b</td><td className="bull">above ↓63.1k 10b</td><td>Buy 6</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">63,303</td><td className="num bull">54.3</td><td className="neut">death (water-up) 6b</td><td className="bull">above ↓60.7k 28b</td><td>Buy 1</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">63,274</td><td className="num bull">56.9</td><td className="bull">golden (water-dn) 20b</td><td className="bull">above ↓62.6k 11b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">63,294</td><td className="num bull">56.4</td><td className="bull">golden (water-dn) 13b</td><td className="neut">in cloud 62.7–66.7k 1b</td><td>Sell 1</td><td>BULL reg</td></tr>
                <tr><td>1d</td><td className="num">63,294</td><td className="num">50.2</td><td className="bull">golden (water-dn) 7b</td><td className="bear">below ↑65.3k 37b</td><td>Sell 7</td><td>BULL reg</td></tr>
                <tr><td>3d</td><td className="num">63,285</td><td className="num">42.2</td><td className="neut">—</td><td className="bear">below ↑70.9k 12b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,294</td><td className="num">38.0</td><td className="bear">death (water-dn) 2b</td><td className="bear">below ↑98.7k 23b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">63,294</td><td className="num">43.4</td><td className="neut">—</td><td className="bull">above ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 2026-07-08 00:01Z scan (BJ 08:01;
                    rolling latest file, archived to
                    /opt/desk-note/snapshots/2026-07-08-0005/). Header alerts:{' '}
                    <em>1w water-down death cross 2b (DIF −5,879, weak/continuation)</em>,{' '}
                    <em>1h water-up death cross 2b (DIF +91.9, early long→short probe)</em>,{' '}
                    <em>1M ⚡ TD9 BUY at $63,294 (oversold reversal hint, last bar may be in-progress)</em>.
                    Scan spot $63,280, 24h −1.16% (the 00:01Z MTF scan; the
                    live-tape anchor at 00:05Z reads −0.93% on its own 24h window —
                    the 4-min gap and differing window opens account for the
                    difference), 24h H/L $64,298 / $62,638, qVol $11.25B. Closes
                    are in-progress bars; treat every value as provisional until
                    each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix reads support-thin, overhead-heavy.{' '}
              <span className="dn-em">
                Only two daily MAs sit beneath spot — D-EMA20 and D-SMA20 — plus
                the 200W floor and the 0γ flip
              </span>. Spot $63,431 sits{' '}
              <span className="dn-tag bull">+1.18% above D-EMA20 $62,693</span>,{' '}
              <span className="dn-tag bull">+2.42% above D-SMA20 $61,933</span>,
              and <span className="dn-tag bull">+0.90% above the 200W floor
              $62,864</span>. Overhead in order:{' '}
              <span className="dn-tag bear">D-EMA50 $65,571 (−3.26%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $65,985 (−3.87%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $69,204 (−8.34%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,903 (−9.26%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $70,164 (−9.60%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $70,896 (−10.53%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $71,109 (−10.80%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $72,375 (−12.36%)</span>,{' '}
              <span className="dn-tag bear">W-EMA200 $73,087 (−13.21%; seed)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $74,368 (−14.71%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $75,291 (−15.75%)</span>.
              Far above and disused: W-EMA150 $77,068 (−17.69%; seed), W-EMA50
              $80,158 (−20.87%), W-EMA100 $80,950 (−21.64%), W-SMA50 $87,466
              (−27.48%), W-SMA100 $88,421 (−28.26%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-08 00:05Z (close
                $63,426.80); offsets recomputed against live spot $63,431.07.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. W-SMA150 / W-SMA200 non-computable on the 3-file
                glob (132 weekly bars); W-EMA150 / W-EMA200 shown seed-disclosed.
                The weekly MA ladder (W-SMA/EMA 20–100 + W-EMA150/200) uses W-SUN
                bars including the in-progress 07-12 week; the 200W floor below
                uses completed W-MON bars — the two weekly conventions differ.
                The 200W floor $62,864 is the full-history W-MON W-SMA200 (357
                completed W-MON bars from the 2019→ glob, last completed 07-06
                week). Daily
                closes: 07-02 $61,541, 07-03 $62,566, 07-04 $63,115, 07-05
                $63,617, 07-06 $64,024, 07-07 $63,335 (first down-close of the
                run), 07-08 (in-progress) $63,427.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book stays net-long-gamma aggregate +114.2M (shallower than 07-07&rsquo;s +157.8M) · flip $61,071 (spot +3.87% above) · no meaningful negative expiry (only −0.24M 11JUL / −0.22M 25SEP) · 31JUL +36.82M the heaviest chunk</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book stays net-long-gamma and keeps dampening — the
                pullback ran without an amplifier
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+114.2M</span> by the by-expiry strip
              sum (= gex_summary.json net_gex +114.17M; the GEX card headline
              &ldquo;Total GEX / 1% move&rdquo; reads +104.6M, a surface-integral
              figure the note discloses but does not headline) — down from the
              07-07 note&rsquo;s +157.8M as the near-dated positive chunks rolled,
              but still solidly positive. The 0γ flip is{' '}
              <span className="dn-tag">$61,071</span> and spot $63,431 sits{' '}
              <span className="dn-tag bull">+3.87% above</span> on
              spot-denominated math (63,431.07 / 61,070.73 − 1 = +3.865%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads{' '}
              <span className="dn-tag bull">+4.2%</span> off its Deribit-index
              $63,639 ($208 above live spot) — both references positive, spot well
              above the flip. The wall map is call-heavy overhead:{' '}
              <span className="dn-tag bull">$65k +23.08M</span> (heaviest wall,
              the near-overhead cap),{' '}
              <span className="dn-tag bull">$64k +19.69M</span>,{' '}
              <span className="dn-tag bull">$66k +16.62M</span>,{' '}
              <span className="dn-tag bull">$70k +16.16M</span>,{' '}
              <span className="dn-tag bull">$68k +13.88M</span>,{' '}
              <span className="dn-tag bear">$60k −12.94M</span> (the crash-put
              residual, the heaviest negative),{' '}
              <span className="dn-tag bull">$63k +12.50M</span> (support right at
              spot),{' '}
              <span className="dn-tag bull">$80k +8.47M</span>,{' '}
              <span className="dn-tag bull">$67k +8.32M</span>,{' '}
              <span className="dn-tag bull">$72k +6.20M</span>.{' '}
              <span className="dn-em">
                The positive wall band $63k–$72k brackets the tape with the $65k
                +23.08M cap the first real overhead friction and $60k −12.94M the
                lone negative pocket below — the dealer book is bid into a fade
                toward $60k and offered into a squeeze toward $65k, which is
                exactly the orderly, mean-reverting profile a pullback prints when
                gamma is long.
              </span>{' '}
              By expiry: 8JUL26 0.3 <span className="dn-tag bull">+6.60M</span>{' '}
              (settles 08:00Z today, after this snap), 9JUL 1.3 +3.75M, 10JUL 2.3{' '}
              <span className="dn-tag bull">+30.12M</span>, 11JUL 3.3 −0.24M,
              17JUL 9.3 +21.41M, 24JUL 16.3{' '}
              <span className="dn-tag bull">+5.67M</span>, 31JUL 23.3{' '}
              <span className="dn-tag bull">+36.82M</span> (the heaviest chunk on
              the board), 28AUG 51.3 +6.49M, 25SEP 79.3 −0.22M, 25DEC 170.3
              +2.26M, 26MAR27 261.3 +0.97M, 25JUN27 352.3 +0.53M — the full strip
              sums +114.2M (= gex_summary.json net_gex +114.17M).{' '}
              <span className="dn-em">
                Only two expiries carry negative gamma and both are trivial
                (−0.24M 11JUL, −0.22M 25SEP) — there is no near-dated amplifier
                anywhere on the strip; the dampening regime is unthreatened.
              </span>
            </p>

            <p>
              IV median across 878 instruments is{' '}
              <span className="dn-tag">42.5%</span> against 30D close-to-close RV
              of <span className="dn-tag">32.08%</span> — chain-level richness{' '}
              <span className="dn-tag">~+10.4pt</span>. RV firmed from the
              recovery&rsquo;s calmer prints as the pullback widened daily ranges.{' '}
              <span className="dn-em">
                The 42.5% median is a chain-median across 878 instruments,{' '}
                <span className="dn-em">not</span> a tradable spread; expiry-/
                strike-level vega, skew and term structure remain not loaded, so
                the vol read stays framework-only.
              </span>{' '}
              RV methodology: 30D close-to-close, logret.std × √365 × 100 on the
              last 30 daily log returns (= 31 consecutive daily closes) anchored
              to parquet last bar 2026-07-08 00:05Z; the 29-return read is 31.62%.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · rates firm / risk-off (10Y 4.48%, TIPS 2.24% EXTREME, DXY 101.12 EXTREME) · credit loose (HY OAS 2.72% RISK-ON) · re-grow gate UN-fired (2.72% &lt; 2.78%) · cross-asset IDIOSYNCRATIC (|r| 0.201), BTC 7d +8.27% LEADS NQ/SP500 (META +9.33% the 7d leader)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape is split — rates and the dollar firm and risk-off,
                credit and bond vol loose and risk-on
              </span>. Dashboard render is 2026-07-07 22:16Z, ~1.8h before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag">4.48% (−1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.49</span>, episodic z +0.04 —
              RISK-OFF. 10Y TIPS real{' '}
              <span className="dn-tag">2.24% (−2.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.40</span>, episodic z +1.04 —
              EXTREME RISK-OFF, the tightest line on the panel. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.21% (−1.0bp)</span> — no tag. HY OAS{' '}
              <span className="dn-tag bull">2.72% (−2.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.10</span>, episodic z −0.24 —
              RISK-ON, credit still loose and eased 2bp on the day. MOVE bond vol{' '}
              <span className="dn-tag bull">65.8 (+0.36)</span> — loose. DXY{' '}
              <span className="dn-tag">101.12 (+0.27)</span>, regime z{' '}
              <span className="dn-tag bear">+2.34</span>, episodic z +1.04 —
              EXTREME RISK-OFF, the dollar firm. Fed net liquidity{' '}
              <span className="dn-tag">$5.843T (+0.053T)</span>, episodic z{' '}
              <span className="dn-tag bull">+2.11</span> — a fresh weekly print
              higher. US-JP 10Y spread{' '}
              <span className="dn-tag">1.83% (−1.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag">162.15 (+0.06)</span>. NFCI −0.504 (stale
              11d).{' '}
              <span className="dn-em">
                Net: the put-spread re-grow gates stayed un-fired and both eased
                further under their triggers — HY OAS gate 2.78% (at 2.72%, 6bp to
                fire) and 10Y gate 4.53% (at 4.48%, 5bp to fire) — while the
                reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE at 4.48%.
                The macro pulse is not what is driving BTC here; the pullback is
                endogenous — a leverage de-gross, not a macro risk event.
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
                <tr><td>US 10Y nominal</td><td className="num">4.48%</td><td className="num bull">−1.0bp</td><td className="num bear">+1.49</td><td className="num">+0.04</td><td className="bear">tight · RISK-OFF</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.24%</td><td className="num bull">−2.0bp</td><td className="num bear">+2.40</td><td className="num">+1.04</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.21%</td><td className="num bull">−1.0bp</td><td className="num">−0.25</td><td className="num">−0.45</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.72%</td><td className="num bull">−2.0bp</td><td className="num bull">−1.10</td><td className="num">−0.24</td><td className="bull">loose · RISK-ON</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.504</td><td className="num">−0.00</td><td className="num">+0.40</td><td className="num">−0.15</td><td className="stale">stale 11d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">65.8</td><td className="num bear">+0.36</td><td className="num bull">−0.87</td><td className="num bull">−1.37</td><td className="bull">loose</td></tr>
                <tr><td>DXY</td><td className="num">101.12</td><td className="num bear">+0.27</td><td className="num bear">+2.34</td><td className="num">+1.04</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.843T</td><td className="num bull">+0.053T</td><td className="num">−0.60</td><td className="num bull">+2.11</td><td className="bull">fresh weekly print higher</td></tr>
                <tr><td>USD/JPY</td><td className="num">162.15</td><td className="num">+0.06</td><td className="num bear">+1.54</td><td className="num">+1.29</td><td className="neut">yen soft</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.83%</td><td className="num bull">−1.0bp</td><td className="num bull">−0.98</td><td className="num">+0.04</td><td className="bull">tightened</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7853</td><td className="num">−0.00</td><td className="num bull">−1.39</td><td className="num">+0.71</td><td className="neut">no tag</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.24%</td><td className="num bear">+1.0bp</td><td className="num bull">−1.40</td><td className="num">−0.88</td><td className="neut">no tag</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="num">+1.43</td><td className="stale">monthly (67d) · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 166 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.201</span> — firmly
              in the IDIOSYNCRATIC band (&lt;0.25), loosened from 07-07. BTC&rsquo;s
              top listed ties are now the METALS complex, not the equity engine:
              PLAT <span className="dn-tag">+0.358</span>, SILVER{' '}
              <span className="dn-tag">+0.347</span>, GOLD{' '}
              <span className="dn-tag">+0.317</span>, COPPER +0.296, PALL +0.294,
              SP500 +0.285, URNM +0.284, then{' '}
              <span className="dn-tag">NQ +0.259</span> down at rank 8 (NVDA
              +0.258, TSLA +0.187). 7d performance:{' '}
              <span className="dn-tag bull">BTC +8.27%</span> — leading NQ/SP500
              and most listed names, though <span className="dn-tag bull">META
              +9.33%</span> is the 7d performance leader — vs{' '}
              <span className="dn-tag bear">NQ −3.87%</span>{' '}
              (BTC leads NQ by +12.14pt), SP500 +0.03%, JP225 −6.00%. TradFi
              single-names mixed: META{' '}
              <span className="dn-tag bull">+9.33%</span> (leader), AAPL +7.66%,
              MSFT +3.46%, AMZN +2.69%, GOOGL +2.56%, TSLA −3.13%, NVDA −1.65%.
              Metals firm: PLAT +5.36%, PALL +4.84%, GOLD +2.59%, SILVER +2.18%.
              Energy up: BRENT +3.68%, CL +3.29%.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lead over the TradFi engine is intact and wide
                (+8.27% vs NQ −3.87%) — the recovery outran the equity tape, and
                the pullback is BTC giving a little back from a big lead, not
                converging down to a rolling NQ. The correlation regime stays
                idiosyncratic; BTC&rsquo;s only real ties this week are to the
                metals, which are themselves firm. Endogenous-to-crypto remains
                the load-bearing read.
              </span>{' '}
              JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag — do not
              lean on it (stale 67d).
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 200W reclaim PRIMARY watch — intact on the weekly close, in-progress week still above · cover-bounce scout STOOD DOWN (demand block worsened — OI shrinking, SM net flushed to flat, taker/CVD net-sell) · macro tail un-fired · squeeze-cycle quiet (long flush, no re-stack) · no fresh trades</span>
            </h2>

            <p>
              <span className="dn-signal">
                The recovery&rsquo;s first pullback held the reclaimed floor on a
                weekly-close basis but confirmed the de-grossing read — the book
                stays flat
              </span>. The 200W reclaim is NOT falsified: the 07-06 weekly close
              $64,023.60 settled +1.84% above the $62,864 floor and the in-progress
              07-13 week $63,427 holds +0.90% above. But every live-tape read of
              demand worsened this cut — OI shrank a second day, SM net flushed
              from +2,349 to flat, taker/futures CVD net-sold, funding cooled off
              the cap, and the marginal long rotated to retail. The cover-bounce
              scout, which needed demand confirmation to translate the price
              pre-condition into an entry, stays <em>stood down</em> — the demand
              block did not lift, it deteriorated. The trade book today is: no
              shorts, no scout entry, no fresh hedge. The dampening dealer book
              makes a new short at the reclaimed floor a poor risk (positive gamma
              bids the fade toward $60k), and the absent demand makes a scout long
              premature. Wait for either a confirming demand print (OI building on
              up-moves + taker-net positive + SM rebuilding long) OR a weekly close
              back below $62,864 that re-confirms the break.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch — reclaim INTACT on the weekly close: the 07-06 weekly close $64,023.60 settled +1.84% above the $62,864 floor (first weekly close above since the 06-29 break), the in-progress 07-13 week $63,427 holds +0.90% above; the 06-15 reclaim thesis stays FALSIFIED (superseded by this recovery structure)</span>
              <div className="dn-trade-name">
                200W floor — reclaimed on the 07-06 weekly close, holding above through the first pullback; the break stays confirmed on the 06-29 close, the recovery stays intact on the 07-06 close
              </div>
              <div className="dn-thesis">
                The 06-29 weekly close $60,224.70 confirmed the break (−4.20%
                below the $62,864 floor); 06-30 printed the deepest daily close
                $58,605.40 (−6.77% below the $62,864 floor); then six
                consecutive up-closes (07-01 →
                07-06) carried spot back through the line, with 07-04 $63,114.80
                the first daily close above and 07-06 $64,023.60 the first{' '}
                <em>weekly</em> close above. This note is the first pullback of
                that recovery: 07-07 broke the up-close streak with a $63,335.40
                down-close, but the reclaim structure is unbroken — the weekly
                close held above and the live spot $63,431 sits +0.90% above the
                floor still. A single weekly close above is a first test, not a
                confirmed regime change; a second down-week that closes back below
                $62,864 would re-confirm the break.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor</span><span className="dn-lvl-v">$62,864 = full-history W-MON W-SMA200, recomputed this cut from the 2019→ parquet glob (357 completed W-MON bars, last completed 07-06 week); the trap-watch state file (W-SUN convention) independently reads state &ldquo;above&rdquo;, last event week 07-05, sma200 $62,642 — both agree ABOVE. Canonical weekly_200sma.json absent, so ratio percentile / last-event stay unsourced (not fabricated)</span></div>
                <div><span className="dn-lvl-k">break — CONFIRMED</span><span className="dn-lvl-v bear">06-29 weekly close $60,224.70 settled −4.20% below the floor; 06-30 daily close $58,605.40 the deepest</span></div>
                <div><span className="dn-lvl-k">reclaim — INTACT on the weekly close</span><span className="dn-lvl-v bull">07-06 weekly close $64,023.60 (+1.84%) the first weekly close above since the break; in-progress 07-13 week $63,427 (+0.90%) holds above through the pullback</span></div>
                <div><span className="dn-lvl-k">re-confirm-break trigger</span><span className="dn-lvl-v bear">a 07-13 (or later) weekly close &lt; $62,864 re-confirms the break and re-falsifies the recovery — the single line that inverts this watch</span></div>
              </div>
              <div className="dn-gating">
                <b>Watch, not a trade.</b> The 200W floor is a slow weekly-close
                level (~$250/wk drift), so an hours-stale computation is fine.
                The reclaim is intact but young — one weekly close above,
                unconfirmed, and the live tape reads the demand behind it as
                de-grossing. Do not read the +0.90% spot cushion as a margin of
                safety; the level that matters is the weekly close, and the
                in-progress week has five more days to settle.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STOOD DOWN · the price pre-condition stays TRUE (spot above the flip, D-EMA20/D-SMA20 and the reclaimed floor) but the DEMAND block WORSENED — OI shrank a second day, SM net flushed +2,349 → FLAT, taker/futures CVD net-sold, funding cooled off the cap; no demand confirmation, so the scout stays stood down</span>
              <div className="dn-trade-name">
                Cover-bounce scout — price pre-condition intact but demand deteriorated through the pullback; entry deferred until demand confirms, not just price
              </div>
              <div className="dn-thesis">
                The scout has held a valid price pre-condition since the reclaim —
                spot above the 0γ flip, above D-EMA20 / D-SMA20, and above the
                reclaimed 200W floor — but has always required a demand
                confirmation to translate that into an entry, because the whole
                recovery has read as short-cover / de-grossing rather than
                accumulation. This cut the demand read did not improve, it
                deteriorated: OI Δ −3.16% (second daily shrink), SM net collapsed
                from +2,348.85 to −34.40 on a −3,191 long flush, 24h taker-net
                −4,334 and futures CVD Δ −4,317, funding eased off the cap, and
                retail leaned into the dip while smart money flushed out. There is
                no demand print to confirm; the scout stays stood down.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">stood down · no entry · price pre-condition TRUE (spot +3.87% above the flip, above D-EMA20/D-SMA20, +0.90% above the floor) but the demand block WORSENED — re-evaluate only on a demand confirmation (OI building on up-moves + taker-net turning positive + SM rebuilding long) AND a cleared/lifting engine</span></div>
                <div><span className="dn-lvl-k">technical pre-condition</span><span className="dn-lvl-v bull">flip $61,071 reclaim (TRUE — spot +3.87% above) AND D-EMA20 $62,693 / D-SMA20 $61,933 reclaim (TRUE — two daily MAs beneath) AND floor $62,864 weekly-close reclaim (TRUE — 07-06 close above)</span></div>
                <div><span className="dn-lvl-k">demand pre-condition (NOT met — deteriorated)</span><span className="dn-lvl-v bear">OI shrank −3.16% (fell, needed to build) · taker-net −4,334 / futures CVD −4,317 (net-sold, needed positive) · SM net +2,349 → −34 (flushed to flat, needed to rebuild long) · funding off the cap; every demand read moved the wrong way this cut</span></div>
                <div><span className="dn-lvl-k">engine confirmation</span><span className="dn-lvl-v bear">NOT true — 3 long / 3 short / 4 neutral, higher-TF bearish / short-term bounce; 1h rolled to a water-up death cross, 1w confirmed a water-down death cross, 1d at TD Sell 7; offset by 12h/1d bottom divs and a 1M ⚡ TD9 BUY</span></div>
                <div><span className="dn-lvl-k">stop (if ever triggered)</span><span className="dn-lvl-v bear">a weekly close &lt; $62,864 (200W floor) re-confirms the break and ends the recovery read entirely</span></div>
              </div>
              <div className="dn-gating">
                <b>Discipline:</b> the scout has never been about price — the price
                pre-condition has been true since the reclaim. It has always been
                about demand, and demand is the block that will not clear. Buying
                the reclaimed floor on price alone, into a book that is flushing
                longs and shrinking OI, is buying a de-gross and calling it a
                bottom. The entry requires the tape to show accumulation (OI
                building on up-moves, taker-net positive, SM rebuilding long), not
                just a level held. Until then, stood down.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate STILL un-fired: HY OAS 2.72% &lt; the 2.78% gate (eased −2.0bp this cut, 6bp to fire), 10Y leg 5bp away (4.48% vs 4.53% gate); both legs hold under their triggers</span>
              <div className="dn-trade-name">
                Downside put-spread — no position; both re-grow gates eased further under their triggers, so no roll
              </div>
              <div className="dn-thesis">
                No downside hedge is on. The re-grow gates that would arm one both
                eased further under their triggers this cut: HY OAS 2.72% (−2.0bp,
                6bp below the 2.78% gate) and 10Y 4.48% (−1.0bp, 5bp below the
                4.53% gate). Credit is loose and risk-on (HY OAS regime z −1.10),
                so there is nothing pulling a tail hedge back on. The reclaim-long
                rates filter (10Y &lt; 4.55%) stays TRUE at 4.48%, but it is a
                standalone filter that needs a BTC-internal demand pivot to
                translate to a scout long — and that pivot is absent.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bull">no position · credit gate STILL un-fired on a close basis · HY OAS 2.72% &lt; 2.78% (6bp to fire), 10Y leg 5bp away</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (un-fired)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.72%, 6bp below) OR 10Y &gt; 4.53% close (currently 4.48%, 5bp below — the nearer leg)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — TRUE at 4.48%; awaits a BTC-internal demand pivot to translate</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates (HY OAS &gt; 2.78%, 10Y &gt;
                4.53%) are discretionary watches set as the levels drift, not
                backtested breakpoints. A new hedge leg if the gates ever fire
                would roll to a near-dated forward expiry — but the dealer strip
                is net-long-gamma with no near-dated amplifier, so a fresh tail
                would not carry an amplifier tailwind. Nothing to do while credit
                stays loose.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · QUIET this cut — the SM feed is live and the 24h move was a two-sided LONG FLUSH (Δlong −3,191, Δshort −808), NOT a sustained hostile-2 re-stack; isolated same-minute Δshort &gt; 0 + Δlong &lt; 0 ticks appear on the raw feed but none persisted into a qualifying re-stack</span>
              <div className="dn-trade-name">
                Squeeze-cycle — no sustained hostile-2 signature; the SM net flip long→flat came from a net long capitulation, not a persisting short re-stack
              </div>
              <div className="dn-thesis">
                The squeeze-cycle framework watches for a re-stack hostile-2
                signature — a discrete Δshort &gt; 0 + Δlong &lt; 0 that PERSISTS
                across consecutive minutes rather than a single isolated tick —
                with no calendar prior since the cadence broke. This cut the SM
                net flipped from +2,348.85 to −34.40, and the 24h mechanism was a
                two-sided de-gross, not a re-stack: long_btc bled −3,191 and
                short_btc bled −808 on net as price rolled over, with the net
                first crossing below zero at 07-07 13:56Z and long_btc troughing
                11,879 @ 07-07 22:01Z. Isolated same-minute re-stack-shaped ticks
                do print on the raw feed (e.g. 07-07 20:10→20:11, Δlong −188 /
                Δshort +340), but none persisted into a qualifying re-stack, so on
                net both sides shrank. That is a long capitulation, not a sustained
                hostile-2 re-stack. No qualifying signature to flag.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">live feed · no sustained hostile-2 step this cut (isolated same-minute re-stack-shaped ticks appear but none persisted) · the 24h SM move was a two-sided flush (both sides smaller on net), not a re-stack</span></div>
                <div><span className="dn-lvl-k">live read (not a signature)</span><span className="dn-lvl-v">long 11,982 / short 12,017 / net −34 — net FLAT, flipped from +2,349 via a −3,191 long flush vs −808 short trim; 24h net range −815 / +3,722</span></div>
                <div><span className="dn-lvl-k">re-arm condition</span><span className="dn-lvl-v">a Δshort &gt; 0 + Δlong &lt; 0 step that PERSISTS across consecutive minutes on the live feed → flag a re-stack (hostile-2) continuation signature; only isolated single-minute ticks this cut, no qualifying (persisting) signature</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a net flip from long to flat looks
                dramatic on the headline but the mechanism matters — a two-sided
                flush (both sides bleeding) is de-grossing, while a re-stack (short
                building as long cuts) is a fresh directional press. This cut was
                the former. Read each fresh discrete step on its own; there is no
                time-of-day base rate to lean on since the cadence broke.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · 200W reclaim intact on the weekly close · pullback reads de-grossing · scout stood down on absent demand · macro gates un-fired · squeeze-cycle quiet · book flat</span>
            </h2>

            <p>
              Of the 07-07 conditions: the 200W reclaim held (the 07-06 weekly
              close stayed above and the in-progress week holds above — intact,
              not falsified); the cover-bounce scout&rsquo;s demand pre-condition
              did NOT lift and instead DETERIORATED (OI shrank, SM net flushed to
              flat, taker/CVD net-sold); the macro re-grow gates stayed un-fired
              and eased further; the squeeze-cycle hostile-2 watchlist stayed
              quiet (a long flush, not a re-stack); and no scout entry triggered.{' '}
              <em>
                The recovery&rsquo;s structure survives on the weekly close, but
                the follow-through is a de-grossing pullback — the price levels
                held while the demand behind them thinned.
              </em>{' '}
              The conditions re-set around an intact-but-young 200W reclaim, a
              dampening dealer book, a de-grossing tape, and a scout stood down for
              demand:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>200W reclaim — re-confirm-break trigger</td><td className="bear">a 07-13 (or later) weekly close &lt; $62,864 (full-history W-MON W-SMA200)</td><td>re-confirms the break, re-falsifies the recovery — invert the primary watch, reassess the whole structure</td></tr>
                <tr><td>200W reclaim holds</td><td className="bull">weekly closes hold &gt; $62,864 with the dealer book net-long-gamma</td><td>digestion-above-floor read holds; scout asymmetry improves only if demand confirms alongside</td></tr>
                <tr><td>Cover-bounce scout (long) — demand confirmation</td><td className="bull">OI building on up-moves AND taker-net turning positive AND SM rebuilding long, with a lifting engine</td><td>scout long 0.2R only on a demand print — never on price alone; target the D-EMA50/D-SMA50 cluster $65,571–$65,985</td></tr>
                <tr><td>Cover-bounce scout — stood down</td><td className="bear">demand block deteriorated this cut (OI −3.16%, SM net flushed to flat, taker/CVD net-sell)</td><td>no entry; the price pre-condition alone is not enough — wait for accumulation, not a held level</td></tr>
                <tr><td>New short at the floor</td><td className="bear">low-conviction — the dealer book is net-long-gamma (+114.2M) and bids the fade toward $60k</td><td>do NOT short the reclaimed floor into positive gamma; a short needs a fresh negative-gamma chunk AND a weekly close back below $62,864</td></tr>
                <tr><td>Squeeze-cycle hostile-2</td><td className="stale">no calendar prior · quiet this cut (long flush, only isolated re-stack-shaped ticks, no persisting re-stack)</td><td>flag a fresh Δshort &gt; 0 + Δlong &lt; 0 step that PERSISTS across consecutive minutes as a re-stack signature (isolated single-minute ticks do not qualify); read on its own, no time prior</td></tr>
                <tr><td>Macro tail re-grow (gates)</td><td className="bear">HY OAS &gt; 2.78% (6bp to fire) OR 10Y &gt; 4.53% (5bp to fire)</td><td>roll hedge to a near-dated forward; tail +0.1R toward primary — both un-fired and easing, nothing to do</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.48%; awaits a BTC-internal demand pivot</td><td>standalone filter true; needs the scout&rsquo;s demand confirmation to translate to a long</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the recovery&rsquo;s demand finally confirms — OI building
                on up-moves with taker-net turning positive and SM rebuilding long
                above the reclaimed floor — or whether the de-gross carries a
                second down-week to a weekly close back below $62,864 that
                re-confirms the break. The price structure held the reclaim on the
                only basis that counts; the demand behind it did not. The question
                is now whether the position book steps up to defend the reclaimed
                floor, or whether the recovery was a short-cover bounce that runs
                out of longs to flush
              </span>. Until then this note runs as written: the 200W reclaim is
              intact but young, the cover-bounce scout is stood down for absent
              demand, the macro gates stay un-fired, the squeeze-cycle watchlist is
              quiet, and the dealer book keeps the pullback orderly. The book stays
              flat — no shorts into positive gamma, no scout long without demand.
              The right read for the next 24h is{' '}
              <em>patient — the level held, wait for the tape to show a buyer</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> this is the <b>v2</b> note — <b>post codex hostile
            audit</b>. It has been through the cross-model hostile audit (codex
            primary + owns the publish gate — verdict BLOCK-CRITICAL, 1 CRITICAL /
            2 MAJOR / 4 MINOR; ask-deepseek arithmetic second-audit — 1 CRITICAL /
            1 MAJOR / 2 MINOR, each ADJUDICATED by recompute before applying, per
            runbook §5). Every finding was applied and grep-closed across the full
            EN file (each key wrong-claim pattern searched, all semantic variants
            fixed, re-grepped to zero stale matches). See{' '}
            <code>audits/2026-07-08-desk-note.md</code> for the verdict.{' '}
            <span className="dn-em">
              Findings, adjudication and grep-closure (pattern searched — hits
              before — hits after — status):{' '}
              <b>DN-001 (codex, CRITICAL — cross-asset &ldquo;leads the whole
              complex&rdquo; self-contradiction):</b> the draft called BTC +8.27%
              the 7d leader of the whole complex while listing META +9.33% in the
              same paragraph; META &gt; BTC. Patterns{' '}
              <code>LEADS the complex</code> / <code>LEADING the whole complex</code>{' '}
              — 2 hits before — 0 after — RESOLVED (narrowed to &ldquo;BTC leads
              NQ/SP500 and most listed names, META +9.33% the 7d leader&rdquo;; the
              true BTC-vs-NQ/TradFi-engine lead +12.14pt left intact).{' '}
              <b>DN-002 (codex, MAJOR — squeeze-cycle &ldquo;no same-minute
              step&rdquo; claim false):</b> the live tape does contain isolated
              same-minute Δshort&gt;0 + Δlong&lt;0 ticks (e.g. 07-07 20:10→20:11,
              Δlong −188 / Δshort +340), so the literal &ldquo;no discrete
              same-minute step&rdquo; wording was false. Patterns{' '}
              <code>no discrete Δshort</code> / <code>same-minute step</code> (as a
              bare no-step claim) / <code>both sides bled continuously</code> /{' '}
              <code>neither built</code> / <code>continuous long capitulation</code>{' '}
              — 9 hits before — 0 after — RESOLVED (reworded throughout to
              acknowledge isolated ticks appear but none PERSISTED into a
              qualifying re-stack; the hostile-2 threshold is now defined as a
              Δshort&gt;0+Δlong&lt;0 step persisting across consecutive minutes,
              and the 24h net mechanism stays a two-sided de-gross).{' '}
              <b>DN-003 (codex MAJOR + deepseek CRITICAL — GEX strip omits
              24JUL26):</b> the prose by-expiry strip jumped 17JUL→31JUL and
              omitted 24JUL26 +5.67M, so the listed rows summed ≈+108.5M, not the
              stated +114.2M. Pattern <code>17JUL 9.3 +21.41M, 31JUL</code>{' '}
              (the omission jump) — 1 hit before — 0 after — RESOLVED (inserted
              24JUL 16.3 +5.67M; the full strip now sums +114.2M =
              gex_summary.json net_gex +114.17M).{' '}
              <b>DN-005 (codex, MINOR — 200W bar count off by one):</b> 357
              COMPLETED W-MON bars produce the $62,864 floor; 358 would include the
              in-progress 07-13 week. Patterns <code>358 W-MON</code> /{' '}
              <code>358 bars</code> — 4 hits before — 0 after — RESOLVED (all
              changed to &ldquo;357 completed W-MON bars&rdquo;; the lone remaining
              &ldquo;358&rdquo; token is the unrelated PLAT correlation +0.358).{' '}
              <b>DN-006 (codex MINOR + deepseek MAJOR — 06-30 depth %):</b> against
              the $62,864 floor, 58,605.40/62,864−1 = −6.77%, not the stated
              −6.65%. Pattern <code>6.65</code> — 1 hit before — 0 after — RESOLVED
              (corrected to −6.77% below the $62,864 floor).{' '}
              <b>DN-004 (codex, MINOR — undisclosed 24h+1m window):</b> the
              &ldquo;24h&rdquo; figures reproduce off a 24h+1m inclusive baseline
              (start BJ 07-07 08:04). RESOLVED via disclosure — the manifest
              live-tape flag now states every 24h figure is a 24h+1m inclusive
              sampled window (endpoint-to-endpoint 08:05→08:05 differs ≤0.06pt on
              spot / ≤7 BTC on OI); grep <code>24h+1m</code> 0 before — 1 after.{' '}
              <b>DN-007 (codex, MINOR — weekly-ladder convention):</b> the weekly
              MA ladder uses W-SUN bars including the in-progress 07-12 week while
              the 200W floor uses completed W-MON. RESOLVED via disclosure — the MA
              methodology block now states both conventions explicitly; grep{' '}
              <code>two weekly conventions differ</code> 0 before — 1 after.
            </span>{' '}
            Overall: <b>post codex hostile audit</b> — every finding RESOLVED
            (hits-after = 0), no UNRESOLVED residue. deepseek MINORs (SM net −34 vs
            −34.40 rounding; 24h H/L cross-block $8/$163 gap) were adjudicated as
            accepted rounding / windowing already explained inline, no numeric
            change. Build proxy: full <code>next build</code> stays
            environment-blocked (Node v18.19.1 &lt; Next&rsquo;s required
            &gt;=20.9.0); <code>tsc --noEmit</code> is the build proxy and passes
            exit 0.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-07-08 00:05Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-07-07 22:16Z (~1.8h before
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
                The reclaim held on the weekly close, but the tape flushed its
                longs to get there. Price above the floor, demand not yet behind
                it — stood down until a buyer shows. Patient.
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
            v2 · 2026-07-08 00:05Z snapshot · 2026-07-08T00:35:34Z ·
            sources: live_db.json · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
