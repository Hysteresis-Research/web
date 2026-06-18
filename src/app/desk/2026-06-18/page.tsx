import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-18 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-18',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-18' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260618() {
  await requireViewer('/desk/2026-06-18');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-18 · v2</span>
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
              <span className="dn-big">$64,558</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.71%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-18 00:06Z ·{' '}
              <span className="dn-em">
                LIVE-TAPE OUTAGE — the OKX monitor stopped writing 17.4h ago;
                price/MTF/GEX/macro/cross-asset are fresh, the derivatives tape
                is frozen
              </span>
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · LAST ROW 2026-06-17 06:43Z (t = &ldquo;06-17 14:43&rdquo; BJ)</td>
                  <td className="dn-flag">
                    <b>FROZEN</b> · live_db.json has written no new row since
                    2026-06-17 06:43Z (file mtime confirms); process status is
                    not archived / not verified in this cut — <b>17.4h stale</b> vs the 00:06Z snapshot
                    anchor. Funding / OI / CVD / basis / retail / taker-flow are
                    LAST-KNOWN at 06-17 06:43Z, not current. The SM sub-feed
                    (long_btc / short_btc / net_btc) is frozen even longer —
                    constant since 2026-06-12 01:36Z (~142h / ~5.9 days, the
                    same dead feed the 06-16 note flagged at ~94.5h); SM net and
                    the SM cut-fraction are <b>NON-COMPUTABLE</b> this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-18 00:01Z scan</td>
                  <td className="dn-flag">
                    fresh (~5 min before anchor) · rolling latest-file artifact,
                    archived verbatim at
                    /opt/desk-note/snapshots/2026-06-18-0006/ · in-progress bars
                    · scan spot $64,506, 24h −1.78%, qVol $13.00B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-18 00:01Z snapshot</td>
                  <td className="dn-flag">
                    fresh · Deribit idx $64,673 ($115 above parquet spot
                    $64,558) · 934 instruments · net GEX −47.8M (net SHORT
                    gamma) · flip $65,315 (spot below) · the 18JUN26 0.3DTE
                    −5.32M chunk settles at 08:00Z today (≈8h AFTER this
                    snapshot — not yet cleared); the dominant chunk is the
                    26JUN26 monthly −41.45M, 8.3 DTE
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-18 00:00Z
                  </td>
                  <td className="dn-flag">fresh · 7d 1h bars · 22 assets · 167 rows · regime NORMAL (mean |r| 0.393)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-17 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.9h render lag · FRED Tier-1 mostly eased on the day (10Y
                    −4bp to 4.43%, TIPS −1bp to 2.14%, 10Y BE −3bp to 2.29%, DXY
                    −0.08 to 99.67) · HY OAS +5bp to 2.71% · MOVE +1.30 to 70.7 ·
                    Fed net liq +0.062T to $5.897T (fresh weekly print)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-18 00:06Z (close $64,558)</td>
                  <td className="dn-flag">
                    fresh kline (exchange OHLC, independent of the frozen live
                    tape) · offsets recomputed vs the parquet last-bar close,
                    which is the freshest available spot while the live tape is
                    frozen · the displayed MA ladder uses the 2023→ 3-year
                    subset (so no W-SMA200 row), but W-SMA200 is recomputed
                    directly from the full-history glob — 355 weekly W-MON bars
                    (2019→present) — = <b>$62,230</b>, which coincides with the
                    06-16 note&rsquo;s pinned floor and confirms it; weekly_200sma.json
                    is absent this cut but does not block the parquet recompute
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
              <span className="dn-v bear">−7.24% (STALE · 06-17 06:43Z)</span>
              <span className="dn-src">live_db raw funding −0.006608 × 1095 = −7.24% ann (NOT ×100) · LAST-KNOWN at the 06-17 06:43Z freeze, 17.4h stale, not a current read · last-available ann over the 24h+1m inclusive sampled window ending at the freeze (1,442 rows): mean +0.20%, range −7.24% / +7.21%, 819 / 1,442 rows negative — a balanced, two-sided book at the point the tape died</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · vs 06-16</span>
              <span className="dn-v">tape frozen — not computable</span>
              <span className="dn-src">the live tape stopped writing 17.4h ago, so no current funding exists to difference against the 06-16 note · last-known print at the freeze was −7.24% ann (shorts paying longs); the leverage gate cannot be assessed this cut</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC (−0.45%) · STALE window</span>
              <span className="dn-src">live_db oi_btc 102,945 at the 06-17 06:43Z freeze vs the start of a 24h+1m inclusive sampled window (1,442 rows) · the window ENDS at the freeze, NOT into the 00:06Z snapshot — it describes the tape up to 06-17 06:43Z and is 17.4h out of date</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` at the 06-17 06:43Z freeze (was 58.29% at the start of the 24h+1m inclusive sampled window — a +1.18pt long add into the roll-over) · last-known, 17.4h stale</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED DEAD ~142h</span>
              <span className="dn-src">long 13.53k − short 50.83k · this triple has been byte-for-byte constant since 2026-06-12 01:36Z (~142h / ~5.9 days) — it is a FROZEN value, NOT a current positioning read; carried only to mark the dead feed</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">NON-COMPUTABLE</span>
              <span className="dn-src">SM feed frozen ~5.9 days · |Δ| / prior_net cannot be computed — there is no current SM net to difference · the squeeze-cycle / re-stack framework is blind this cut, a continuation of the 06-16 ON-HOLD</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.6% / 42.67%</span>
              <span className="dn-src">GEX median IV across 934 instruments (00:01Z, fresh) vs 30D close-to-close RV 42.67% off parquet — chain richness only ~+0.93pt, a thin vol premium (RV has expanded sharply vs the 24.91% of 05-31; vol is no longer cheap to realised)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−1.16% (below)</span>
              <span className="dn-src">flip $65,315 · vs parquet spot $64,558 (64,558 / 65,315 − 1 = −1.159%) / GEX file Deribit idx $64,673 (64,673 / 65,315 − 1 = −0.983%) — both references BELOW the flip, tile rounds the spot side to −1.16% · net GEX −47.8M (net SHORT gamma, amplifying) · the 26JUN26 monthly −41.45M is the dominant chunk</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The 06-15 reclaim has rolled back into amplified-downside
                structure, and the desk is reading it through a broken tape
              </span>. BTC slipped from the 06-15 weekly-reclaim high{' '}
              <span className="dn-tag">$66,286</span> to{' '}
              <span className="dn-tag bear">$64,558</span> (parquet last bar
              00:06Z), losing the D-SMA20{' '}
              <span className="dn-tag bear">$65,162 (−0.93%)</span> and dropping{' '}
              <span className="dn-tag bear">−1.16% below the 0-γ flip
              $65,315</span> back into a <span className="dn-tag bear">net-short-gamma
              −47.8M</span> dealer book whose dominant chunk is the{' '}
              <span className="dn-tag bear">26JUN26 monthly −41.45M (8.3
              DTE)</span> — the same amplified-downside shape that powered prior
              down-legs. Price still holds <span className="dn-tag bull">~+3.7%
              above the 06-16 note&rsquo;s pinned 200W floor $62,230</span> on a
              close basis (06-18 in-progress close $64,558, two red daily closes
              06-16 / 06-17 off the high), but it sits below every displayed
              line on the MA matrix — the full-history W-SMA200 floor $62,230 is
              the lone MA under spot. MTF flipped to{' '}
              <span className="dn-tag bear">multi-TF bearish resonance (7 bear /
              1 bull / 2 neutral, &ldquo;sell rallies&rdquo;)</span> with a fresh{' '}
              <span className="dn-tag bear">8h water-up death cross (just
              printed)</span>.{' '}
              <span className="dn-em">
                The operational fact of the day overrides the tape read: the
                OKX monitor stopped writing 17.4h ago (last row 2026-06-17
                06:43Z), so funding, OI, CVD, basis and retail are last-known
                and stale, and the SM positioning book has been dead ~5.9 days
                — SM net and the cut-fraction are non-computable. The desk is
                positioning-blind.
              </span>{' '}
              Conviction is capped accordingly: the trade book stays flat and
              defensive, the scout stays stood down (it cannot even be
              evaluated without a live positioning tape), and the single
              decision that matters is whether price loses the 200W floor into
              the 26JUN amplifier or reclaims the flip — judged on price and
              gamma alone until the live tape is restored.
            </p>

            <p>
              BTC prints <span className="dn-tag">$64,558</span> at the parquet
              last bar (00:06Z),{' '}
              <span className="dn-tag bear">−1.71%</span> on 24h (vs $65,683
              one day prior), inside a <span className="dn-tag">$66,419 /
              $63,881</span> 24h range (high @ 2026-06-17 16:28Z, low @
              2026-06-17 22:03Z). The Deribit index reads $64,673 at 00:01Z and
              the 06-18 in-progress session has been quiet — open $64,473, range
              $64,612 / $64,455 — so the freshest spot is well-corroborated
              across two independent fresh sources (parquet kline and the GEX
              Deribit index), even though the live_db tape that normally
              supplies it is frozen at $65,616 (06-17 06:43Z, 17.4h stale).{' '}
              <span className="dn-signal">The structural read is roll-over from
              the reclaim, not break of the floor</span>: the 06-15 weekly close
              $66,286 resolved the 200W reclaim that the 06-16 note led with,
              but the two finalized closes since — 06-16 $65,645, 06-17 $64,473
              — have given back the breakout and price has re-entered the heavy
              negative gamma band below the flip. The cycle floor $62,230
              (recomputed this cut as the full-history W-SMA200 — 355 weekly
              W-MON bars from the 2019→ parquet glob — landing on the same
              $62,230 the 06-16 note pinned, confirming it) is ~+3.7% below
              spot and has not been retested.{' '}
              <span className="dn-em">
                This is a reclaim being handed back inside a net-short-gamma
                book — the dealer map now amplifies a continued fade toward the
                floor rather than dampening it. Whether that converts to a
                floor test depends on flow the desk currently cannot see.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · LIVE TAPE FROZEN 17.4h · SM book dead ~5.9 days · funding/OI/flow last-known stale · the desk is positioning-blind this cut</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important source of this note — the live
                derivatives tape — is down
              </span>. The OKX monitor has appended no row to live_db.json since{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> (t =
              &ldquo;06-17 14:43&rdquo; BJ; the file mtime confirms the write
              stopped there; the process status is not archived or verified in
              this cut, so the note asserts the missing tape, not a live/hung
              process). That is <span className="dn-tag bear">17.4h of
              missing tape</span> against the 00:06Z snapshot anchor. Everything
              the live tape carries — funding, open interest, spot/futures CVD,
              perp basis, retail long%, taker-net, big-print flow, aggressor
              skew — is therefore <span className="dn-em">last-known at 06-17
              06:43Z and not current</span>. Worse, the smart-money positioning
              triple (long_btc / short_btc / net_btc) has been byte-for-byte
              constant — <span className="dn-tag">13,532.4 / 50,825.7 /
              −37,293.3</span> — since <span className="dn-tag bear">2026-06-12
              01:36Z</span>, ~142h (~5.9 days). The 06-16 note already flagged
              this exact dead feed at ~94.5h and put the squeeze-cycle framework
              ON HOLD; today it is ~48h more stale and still dead.{' '}
              <span className="dn-em">
                SM net is non-computable as a current read, and the SM cut
                fraction (|Δ| / prior_net) cannot be formed — there is no
                current SM net to difference. Any positioning claim in this note
                is explicitly historical, not live.
              </span>
            </p>

            <p>
              For completeness, the <em>last-available</em> tape readings — all
              pinned to the 06-17 06:43Z freeze and 17.4h out of date — are:
              funding <span className="dn-tag bear">−7.24% ann</span> (raw
              −0.006608 × 1095; shorts paying longs at the freeze), with the
              last-available path balanced two-sided over the 24h+1m inclusive
              sampled window (1,442 rows: mean{' '}
              <span className="dn-tag">+0.20% ann</span>, range{' '}
              <span className="dn-tag">−7.24% / +7.21%</span>, 819 / 1,442
              rows negative); OI <span className="dn-tag bear">102,945
              BTC, −468 over the trailing 24h+1m window (−0.45%)</span>; retail{' '}
              <span className="dn-tag">mkt_long_pct 59.47%</span> (a +1.18pt
              long add over that same window); perp basis{' '}
              <span className="dn-tag bear">−$57.43 discount</span> to spot
              (window mean −$58.62, range −$146.17 / +$67.04 — basis did touch a
              small premium inside the window). The trailing flow windows, again
              ending <em>at</em> the freeze and not into the snapshot (24h+1m
              inclusive sampled span): 24h price{' '}
              <span className="dn-tag bear">−1.24%</span>, OI{' '}
              <span className="dn-tag bear">−468 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +771</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +276</span>, big-print{' '}
              <span className="dn-tag bull">+1,360 BTC</span>, taker-net{' '}
              <span className="dn-tag bull">+306</span>; the most recent live
              61m (1h+1m inclusive, into 06-17 06:43Z) turned heavy — price{' '}
              <span className="dn-tag bear">−0.42%</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −1,071</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −380</span>.{' '}
              <span className="dn-em">
                Read these as an 18-hour-old fingerprint, not a signal: a
                two-sided funding book, OI bleeding, retail adding longs into
                weakness, and spot offering into the last live hour before the
                feed died. None of it can be carried forward to the 00:06Z
                snapshot, and the desk treats the positioning dimension as
                unknown.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure <span className="dn-roman">II · price/MTF FRESH · multi-TF bearish resonance, sell rallies · 8h water-up death cross just printed · spot below every displayed MA, D-SMA20 the only near line · 200W floor = full-history W-SMA200 $62,230</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map is fresh and reads bearish across the board
              </span> — the one dimension, with the dealer map, that the desk can
              still trust today. The 00:01Z scan tags <span className="dn-tag
              bear">1 bull / 7 bear / 2 neutral across 10 frames</span>, net
              read <em>multi-TF bearish resonance, sell rallies</em>, inside a
              5/9 cycle-reversal regime (JT&lt;0, mean-reversion / bounce
              favoured, trend-following cautioned). The engine printed a fresh{' '}
              <span className="dn-tag bear">8h water-up death cross (just
              printed)</span> at the 00:00Z close, and the 3d carries a{' '}
              <span className="dn-tag bear">water-up death cross 7b</span>. The
              short frames are all below cloud and bearish (15m / 30m / 1h
              death-cross stack, RSI 47.7 / 42.4 / 39.8), 4h sits above its
              cloud on a Buy-3 with a fresh top-divergence, and the only
              constructive notes are the deep-frame bottom-divergence cluster
              (15m / 30m / 1h BULL hidden/regular) and the 1M still above cloud
              (Buy 8 → 9?).{' '}
              <span className="dn-em">
                Straight read: the bounce that carried the 06-11..06-15
                reclaim has rolled over on the engine and the mid frames, the
                slow frames never confirmed it (1d / 1w / 3d all below cloud,
                deeply offset), and the only counter-signal is the short-frame
                bottom-divergence — a relief-bounce setup inside a bearish
                resonance, not a turn.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,506</td><td className="num">47.7</td><td className="bull">golden (water-dn) 4b</td><td className="bear">below ↑65.5k 19b</td><td>Sell 8 → 9?</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">64,506</td><td className="num">42.4</td><td className="bear">death (water-dn) 10b</td><td className="bear">below ↑65.2k 12b</td><td>Sell 3</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">64,506</td><td className="num bear">39.8</td><td className="bear">death (water-dn) 5b</td><td className="bear">below ↑65.5k 5b</td><td>Sell 2</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">64,506</td><td className="num">45.1</td><td className="bear">death (water-up) 8b</td><td className="bull">above ↓63.1k 19b</td><td>Buy 3</td><td>BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">64,506</td><td className="num">47.4</td><td className="bear">death (water-up) 刚印 (just printed)</td><td className="neut">in cloud 10b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">64,506</td><td className="num">45.1</td><td className="bull">golden (water-dn) 19b</td><td className="bear">below ↑68.6k 53b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">64,510</td><td className="num bear">38.9</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑74.3k 17b</td><td>Buy 1</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">64,510</td><td className="num bear">38.4</td><td className="bear">death (water-up) 7b</td><td className="bear">below ↑74.7k 5b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">64,510</td><td className="num bear">36.4</td><td className="neut">—</td><td className="bear">below ↑100.3k 20b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">64,510</td><td className="num">43.1</td><td className="neut">—</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>BULL reg · BEAR reg · BULL hid · BEAR hid</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (rolling latest
                    file; archived verbatim at
                    /opt/desk-note/snapshots/2026-06-18-0006/). Header alert:{' '}
                    <em>8h water-up death cross (just printed)</em>. Scan spot
                    $64,506, 24h −1.78%, 24h H/L $66,419 / $63,881, qVol
                    $13.00B. Closes are in-progress bars; treat every value as
                    provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is the bleakage map for the roll-over: spot $64,558
              sits <span className="dn-em">below every displayed line on the
              ladder</span>, with no positive offset on any displayed MA — the
              lone MA below spot is the full-history W-SMA200 200W floor $62,230
              (~3.7% under). The single near line is{' '}
              <span className="dn-tag bear">D-SMA20 $65,162 (−0.93%)</span> —
              lost on the 06-16 / 06-17 closes and now the first reclaim leg
              overhead — followed by{' '}
              <span className="dn-tag bear">D-EMA20 $66,234 (−2.53%)</span> and
              the cycle-proxy <span className="dn-tag bear">W-EMA200 $67,383
              (−4.19%)</span>. The mid-ladder is a deep wall:{' '}
              <span className="dn-tag bear">D-EMA50 $70,033 (−7.82%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $70,972 (−9.04%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $72,519 (−10.98%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $72,746 (−11.26%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $72,805 (−11.33%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $72,996 (−11.56%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,002 (−12.76%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $74,307 (−13.12%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $75,585 (−14.59%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $75,161 (−14.11%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $77,134 (−16.30%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $78,263 (−17.51%)</span>.
              Far above and disused: W-EMA100 $80,744 (−20.05%), W-EMA50 $82,412
              (−21.66%), W-SMA100 $88,418 (−26.99%), W-SMA50 $90,873 (−28.96%).
              The structural near-set is now narrow and one-directional: a
              cluster of reclaim lines D-SMA20 / D-EMA20 / W-EMA200 from −0.93%
              to −4.19% overhead, and the full-history 200W floor $62,230 ~+3.7%
              below — a <span className="dn-tag">~$2.9k</span> band between the
              floor and the first reclaim line (D-SMA20 $65,162).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-18 00:06Z (close
                $64,558); offsets computed against that same close, which is the
                freshest available spot while the live tape is frozen.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. The displayed ladder uses the 2023→ 3-year
                subset (182 weekly bars), so W-SMA200 is not a matrix row; but
                the 200W floor IS computable from the full-history glob — 355
                weekly W-MON bars (2019→present) give W-SMA200 $62,230, the same
                level the 06-16 note pinned, so the floor is confirmed by direct
                recompute rather than merely carried. The percentile and
                last-event remain unsourced (weekly_200sma.json absent) and are
                not fabricated. Daily closes: 06-11 $63,598, 06-12 $63,547, 06-13
                $64,418, 06-14 $65,702, 06-15 $66,286, 06-16 $65,645, 06-17
                $64,473, 06-18 (in-progress) $64,558 — the 06-15 high, then two
                red closes giving back the breakout.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book net-SHORT-gamma −47.8M · spot below flip $65,315 · 26JUN26 monthly −41.45M the dominant amplifier (8.3 DTE) · heavy put walls $60k–$65k below spot</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book is net-short-gamma with spot sitting inside a
                heavy negative-wall band — a downside-amplifying map
              </span>. Aggregate GEX is <span className="dn-tag bear">−47.8M /
              1%</span> and the 0-γ flip is{' '}
              <span className="dn-tag">$65,315</span>, with spot{' '}
              <span className="dn-tag bear">−1.16% below</span> on
              spot-denominated math (64,558 / 65,315 − 1 = −1.159%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; off its Deribit-index
              $64,673 reads <span className="dn-tag bear">−0.98%</span> (64,673
              / 65,315 − 1 = −0.983%) — <span className="dn-em">both references
              below the flip</span>, the book amplifying rather than dampening
              from here. The wall map is heavy below spot:{' '}
              <span className="dn-tag bear">$60k −24.83M</span> (the heaviest
              wall, a put wall, Put OI 20,730),{' '}
              <span className="dn-tag bear">$62k −20.15M</span> (at the carried
              200W floor),{' '}
              <span className="dn-tag bear">$64k −16.97M</span>,{' '}
              <span className="dn-tag bear">$65k −12.97M</span>,{' '}
              <span className="dn-tag bear">$63k −12.07M</span> — a contiguous
              $60k–$65k negative band that spot now sits inside — against the
              first positive walls overhead{' '}
              <span className="dn-tag bull">$66k +5.81M</span>,{' '}
              <span className="dn-tag bull">$67k +14.39M</span> (the heaviest
              positive, Call OI 5,053) and{' '}
              <span className="dn-tag bull">$70k +7.81M</span> /{' '}
              <span className="dn-tag bull">$80k +11.52M</span> further up;{' '}
              <span className="dn-tag bear">$55k −6.06M</span> a lower
              crash-put residual.{' '}
              <span className="dn-em">
                Spot inside the negative band with the heaviest walls below
                ($60k / $62k) means a continued fade is into deepening short
                gamma — dealers sell weakness and buy strength, which magnifies
                a move toward the floor. The first dampening support is only
                overhead at the $66k–$67k positive walls, i.e. above the flip,
                not below spot.
              </span>
            </p>

            <p>
              The expiry strip carries the amplifier. The dominant single chunk
              is the <span className="dn-tag bear">26JUN26 monthly −41.45M
              (8.3 DTE, Call OI 87,233 / Put OI 76,341)</span> — roughly the
              size of the whole aggregate, the monthly opex that the
              near-dated negatives feed into. The near strip is uniformly
              negative: <span className="dn-tag bear">18JUN26 0.3 −5.32M</span>{' '}
              (today&rsquo;s 0DTE, settles 08:00Z ≈8h AFTER this snapshot — not
              yet cleared), <span className="dn-tag bear">19JUN26 1.3
              −4.36M</span>, <span className="dn-tag bear">20JUN26 2.3
              −7.42M</span>, <span className="dn-tag bear">21JUN26 3.3
              −7.77M</span>, then <span className="dn-tag">3JUL26 15.3
              −0.05M</span> flat. The positive offsets are all far-dated:{' '}
              <span className="dn-tag bull">31JUL26 43.3 +16.90M</span>,{' '}
              <span className="dn-tag bull">25DEC26 190.3 +4.21M</span>,{' '}
              <span className="dn-tag bull">28AUG26 71.3 +3.38M</span>,{' '}
              <span className="dn-tag bull">25SEP26 99.3 +2.31M</span>,{' '}
              <span className="dn-tag bull">26MAR27 281.3 +0.87M</span>. The
              listed strip nets to roughly −38.7M against the −47.8M headline
              aggregate, but the gap is a difference of basis, not a missing-expiry
              remainder: the headline is surface-grid GEX read at the nearest
              spot/current-IV grid point, while the by-expiry strip is the
              exact-spot profile grouped by expiry, so the two are not
              algebraically identical unless recomputed on the same basis; either way{' '}
              <span className="dn-em">
                the near calendar through 26JUN is all negative gamma, the
                26JUN monthly is the amplifier, and there is no near-dated
                positive chunk to dampen a move before opex — the structural
                analogue of the down-leg amplifier windows, now pointed at the
                26JUN monthly.
              </span>{' '}
              IV median across 934 instruments is{' '}
              <span className="dn-tag">43.6%</span> against 30D close-to-close RV{' '}
              <span className="dn-tag">42.67%</span> — chain richness only{' '}
              <span className="dn-tag">~+0.93pt</span>, a thin premium; a
              chain-median across N instruments, <span className="dn-em">not</span>{' '}
              a tradable spread, with expiry-/strike-level vega, skew and term
              structure not loaded — the vol read stays framework-only. RV
              methodology: 30D close-to-close, logret.std × √365 × 100 on the
              last 30 daily log returns (= 31 consecutive daily closes) anchored
              to parquet last bar 2026-06-18 00:06Z; the 29-return read is
              43.07%. RV has expanded sharply versus the 24.91% of 05-31 — vol
              is no longer cheap to realised, which is why the 43.6% IV median
              carries almost no premium.
            </p>

            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · Tier-1 mostly eased (10Y 4.43%, TIPS 2.14%, 10Y BE 2.29%, DXY 99.67) · HY OAS +5bp to 2.71% · re-grow gates UN-FIRED · BTC RE-COUPLED to TradFi (|r| 0.393 NORMAL), 7d lag to NQ only −0.85pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape eased across rates, real-rates, breakevens and
                the dollar on the day, with credit a touch wider and bond vol a
                touch firmer
              </span>. Dashboard render is 2026-06-17 22:15Z, ~1.9h before the
              snapshot. US 10Y nominal <span className="dn-tag bull">4.43%
              (−4.0bp)</span>, regime z <span className="dn-tag bear">+1.24</span>
              {' '}— tight regime, eased on the day. 10Y TIPS real{' '}
              <span className="dn-tag bull">2.14% (−1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.95</span> — still the tightest
              line on the panel. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.22% (−2.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag bull">2.29% (−3.0bp)</span> — inflation
              expectations softening. HY OAS{' '}
              <span className="dn-tag bear">2.71% (+5.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.27</span> — credit widened a
              touch on the day but remains a loose, risk-on regime. MOVE bond
              vol <span className="dn-tag">70.7 (+1.30)</span> — still loose. The
              dollar softened marginally on the day but stays elevated: DXY{' '}
              <span className="dn-tag">99.67 (−0.08 day)</span>, regime z{' '}
              <span className="dn-tag">+1.26</span>. Fed net liquidity printed a
              fresh weekly add to{' '}
              <span className="dn-tag bull">$5.897T (+0.062T)</span>, episodic z{' '}
              <span className="dn-tag bull">+2.47</span> — a constructive
              liquidity impulse. US-JP 10Y spread{' '}
              <span className="dn-tag">1.78% (−4.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag">160.36 (+0.13)</span>.{' '}
              <span className="dn-em">
                Net: the re-grow gates the 06-16 note set stay UN-FIRED — HY OAS
                gate 2.78% (at 2.71%, 7bp to fire), 10Y gate 4.53% (at 4.43%,
                10bp to fire) — and the reclaim-long rates filter (10Y &lt;
                4.55%) stays TRUE at 4.43%. The macro backdrop is net risk-on /
                easing on the lines that matter for BTC; the roll-over is
                endogenous to crypto, not macro-driven.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>Macro indicator</th>
                  <th>level</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>read</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.43%</td><td className="num bull">−4.0bp</td><td className="num bear">+1.24</td><td className="bear">tight, eased</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.14%</td><td className="num bull">−1.0bp</td><td className="num bear">+1.95</td><td className="bear">tightest line · eased</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.22%</td><td className="num bull">−2.0bp</td><td className="num">−0.17</td><td className="neut">softening</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.29%</td><td className="num bull">−3.0bp</td><td className="num">−0.75</td><td className="neut">softening</td></tr>
                <tr><td>HY OAS</td><td className="num">2.71%</td><td className="num bear">+5.0bp</td><td className="num bull">−1.27</td><td className="bull">loose · risk-on, wider on day</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.505</td><td className="num">0.00</td><td className="num">+0.24</td><td className="stale">weekly</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">70.7</td><td className="num bear">+1.30</td><td className="num bull">−0.48</td><td className="bull">loose · a touch firmer</td></tr>
                <tr><td>DXY</td><td className="num">99.67</td><td className="num bull">−0.08</td><td className="num">+1.26</td><td className="bear">elevated · marginally softer</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.897T</td><td className="num bull">+0.062T</td><td className="num">+0.82</td><td className="bull">fresh weekly add</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.36</td><td className="num">+0.13</td><td className="num bear">+1.32</td><td className="neut">yen soft</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.78%</td><td className="num bull">−4.0bp</td><td className="num bull">−1.20</td><td className="bull">tightened</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7565</td><td className="num bull">−0.01</td><td className="num bull">−1.80</td><td className="bull">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.393</span> — the
              regime is back in the NORMAL band (vs the 0.237 IDIOSYNCRATIC of
              05-31), and <span className="dn-signal">BTC has re-coupled to the
              TradFi risk complex</span>. BTC&rsquo;s top ties are now the
              equity/precious-metal cluster: SP500{' '}
              <span className="dn-tag">+0.692</span>, NQ{' '}
              <span className="dn-tag">+0.662</span>, NVDA{' '}
              <span className="dn-tag">+0.621</span>, SILVER{' '}
              <span className="dn-tag">+0.605</span>, EUR{' '}
              <span className="dn-tag">+0.552</span>, GOLD{' '}
              <span className="dn-tag">+0.548</span>, JP225{' '}
              <span className="dn-tag">+0.499</span>, COPPER{' '}
              <span className="dn-tag">+0.490</span>, TSLA{' '}
              <span className="dn-tag">+0.470</span>, with the energy complex
              inverse (CL <span className="dn-tag">−0.421</span>, BRENT{' '}
              <span className="dn-tag">−0.424</span>) and JPY{' '}
              <span className="dn-tag">−0.299</span>. 7d performance is broadly
              risk-on: <span className="dn-tag bull">BTC +4.34%</span>, NQ{' '}
              <span className="dn-tag bull">+5.19%</span>, SP500{' '}
              <span className="dn-tag bull">+2.79%</span>, JP225{' '}
              <span className="dn-tag bull">+10.60%</span>, TSLA{' '}
              <span className="dn-tag bull">+3.99%</span>, MSFT{' '}
              <span className="dn-tag bear">−3.89%</span>; metals strong (GOLD{' '}
              <span className="dn-tag bull">+4.92%</span>, SILVER{' '}
              <span className="dn-tag bull">+7.65%</span>, PALL{' '}
              <span className="dn-tag bull">+7.64%</span>, URNM{' '}
              <span className="dn-tag bull">+12.16%</span>); energy crashed (CL{' '}
              <span className="dn-tag bear">−16.94%</span>, BRENT{' '}
              <span className="dn-tag bear">−15.85%</span>).{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d return +4.34% vs NQ +5.19% is a lag of only
                −0.85pt (vs −5.84pt on 05-31) — BTC tracked the risk complex up
                over the week and is now giving it back at the front, an
                idiosyncratic roll-over inside a still-risk-on macro tape, not a
                broad risk-off. The endogenous-to-crypto read holds: the
                downside pressure is the dealer-gamma / reclaim-handed-back
                structure, not the macro pulse.
              </span>{' '}
              JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag — do not
              lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book <span className="dn-roman">V · book FLAT · scout stood down AND un-assessable (positioning tape blind) · 200W floor watch primary · macro tail gate un-fired · squeeze-cycle ON HOLD (SM dead ~5.9 days)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — and today the binding
                constraint is data integrity, not conviction
              </span>. The 06-16 scout was already stood down (TD9 cluster
              inverted to a sell/top-divergence read); today the MTF is more
              bearish still (7-bear resonance, 8h death cross), and — decisively
              — the positioning legs of any scout trigger (SM short bleed,
              funding, flow) cannot be evaluated because the live tape is frozen
              17.4h and the SM feed is dead ~5.9 days. A scout long cannot be
              entered on a positioning-blind tape into a net-short-gamma book
              below the flip. No new short either: shorting into the heavy
              negative-wall band toward the carried floor, on stale flow, is
              not a clean entry — the gamma map already does the work and the
              desk cannot confirm crowding. The trade book today is: no shorts,
              no scout, no fresh hedge — wait for the live tape to be restored
              AND a price decision (floor lost or flip reclaimed) before
              re-arming.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch · reclaim being handed back — spot ~+3.7% above the carried $62,230 floor, rolling toward it inside net-short-gamma</span>
              <div className="dn-trade-name">
                200W cycle floor watch — the 06-15 weekly reclaim is being given back; floor $62,230 = full-history W-SMA200 (355 weekly bars, confirms the 06-16 level), spot $64,558 ~+3.7% above
              </div>
              <div className="dn-thesis">
                The 06-16 note led with the 200W reclaim — the 06-15 weekly
                close $66,286 resolved above the $62,230 floor with five
                finalized daily closes above. Two red daily closes since (06-16
                $65,645, 06-17 $64,473) have handed the breakout back and price
                has re-entered the negative-gamma band below the flip. The floor
                itself has not been tested — spot $64,558 is ~+3.7% above the
                carried $62,230 — but the dealer map now amplifies a fade toward
                it: heaviest put walls at $60k (−24.83M) and $62k (−20.15M) sit
                right at and below the floor, and the 26JUN26 monthly −41.45M
                amplifier is 8 days out. <span className="dn-em">This is a
                watch, not a position</span>: the desk cannot confirm the flow
                that would distinguish a controlled retest from a break, because
                the live tape is down.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor</span><span className="dn-lvl-v">$62,230 = full-history W-SMA200, recomputed this cut from the 2019→ parquet glob (355 weekly W-MON bars); coincides with the 06-16 pinned floor and confirms it · weekly_200sma.json absent so percentile/last-event stay unsourced, not fabricated</span></div>
                <div><span className="dn-lvl-k">spot vs floor</span><span className="dn-lvl-v bull">$64,558 ~+3.7% above · 06-18 in-progress close above on a daily basis</span></div>
                <div><span className="dn-lvl-k">escalation</span><span className="dn-lvl-v bear">a sustained weekly close &lt; $62,230 breaks the 200W floor (W-SMA200 is a weekly-close framework) — a daily close below is an early warning, not the break — separate reassessment, the reclaim thesis is dead</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework, not a trade.</b> The floor watch is the single
                load-bearing level while everything else is either stale (live
                tape) or framework-only. The dealer map is the reason the watch
                matters: spot inside the $60k–$65k negative-wall band means a
                continued fade is into deepening short gamma, and the 26JUN
                monthly is the amplifier the move would feed into. No position
                is taken on the watch — it sets the escalation level only.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STOOD DOWN and UN-ASSESSABLE · MTF more bearish than 06-16 + positioning tape blind</span>
              <div className="dn-trade-name">
                Cover-bounce scout — stood down (MTF bearish resonance, 8h death cross) AND un-assessable (SM / funding / flow legs blind on a frozen tape)
              </div>
              <div className="dn-thesis">
                The 06-16 scout was stood down because the TD9-BUY cluster had
                inverted to a sell/top-divergence cluster despite the flip and
                funding legs holding. Today the technical case is worse, not
                better: the engine and mid frames rolled over (8h water-up death
                cross just printed, 1h/30m below cloud on death crosses, 3d
                death cross), the net MTF read is bearish resonance / sell
                rallies, and price has lost the D-SMA20 and the flip. The only
                constructive note is the short-frame bottom-divergence cluster —
                a relief-bounce setup, not a turn. Independently, the scout
                cannot even be <em>evaluated</em>: its positioning triggers (SM
                short bleed, funding posture, cover-flow confirmation) all
                require a live tape, and there is none. <span className="dn-em">A
                scout long on a positioning-blind tape, into a net-short-gamma
                book below the flip, against a bearish MTF resonance, is not a
                trade.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">stood down · no entry · re-evaluate only after the live tape is restored</span></div>
                <div><span className="dn-lvl-k">technical pre-condition</span><span className="dn-lvl-v">1h close &gt; flip $65,315 / D-SMA20 $65,162 reclaimed AND MTF resonance flips off bearish — none true</span></div>
                <div><span className="dn-lvl-k">data pre-condition</span><span className="dn-lvl-v bear">live tape restored (currently 17.4h frozen) AND SM feed live (currently dead ~5.9 days) — both must hold before any positioning leg can be read</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> no scout entry without a live positioning
                tape. Even a clean flip reclaim on price would not trigger a
                scout while the SM / funding / flow legs are blind — the desk
                does not size into a cover-bounce it cannot see being covered.
                The scout is doubly blocked: technically (bearish MTF, below
                flip) and operationally (tape down).
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — BOTH legs UN-FIRED (10Y 4.43% below the 4.53% gate, HY OAS 2.71% below the 2.78% gate)</span>
              <div className="dn-trade-name">
                Downside put-spread — re-grow gate un-fired on both legs; no hedge added (macro stays net risk-on / easing)
              </div>
              <div className="dn-thesis">
                The macro re-grow gate the lineage carries — HY OAS &gt; 2.78%
                OR 10Y &gt; 4.53% as the condition to re-grow a downside tail —
                stays UN-FIRED on both legs at this render: HY OAS 2.71% (7bp
                short of fire, and it widened +5bp on the day toward the gate but
                has not reached it), 10Y 4.43% (10bp short). The reclaim-long
                rates filter (10Y &lt; 4.55%) stays TRUE at 4.43%. The macro tape
                eased across rates / real-rates / breakevens and added fresh Fed
                net liquidity — net risk-on, no macro trigger for a hedge. The
                roll-over is endogenous; a macro tail is not the right
                instrument for it.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · gate un-fired both legs</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (next Tier-1 print)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.71%, 7bp to fire) OR 10Y &gt; 4.53% close (currently 4.43%, 10bp to fire)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — TRUE at 4.43%; awaits a BTC-internal pivot to translate</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set
                as the levels drift, not backtested breakpoints. If they ever
                fire, a downside tail would be reassessed in a separate future
                note — and note the dealer strip is already net-short-gamma into
                26JUN, so any such tail would be additive to existing dealer
                amplification rather than a clean independent hedge.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · ON HOLD — SM feed DEAD ~5.9 days, the framework cannot be assessed on its own data</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — ON HOLD (continuation of 06-16): the SM feed is frozen ~142h, the re-stack signature cannot be read this cut
              </div>
              <div className="dn-thesis">
                The squeeze-cycle / re-stack-hostile-2 framework reads discrete
                SM steps (Δshort &gt; 0 + Δlong &lt; 0 same minute) as
                continuation signatures; its calendar prior (the BJ 13–15
                cadence) was falsified on 05-31 and it has run as a no-prior
                watchlist since. It cannot be assessed today for the simplest
                reason: the SM feed is dead. long_btc / short_btc / net_btc have
                been constant since 2026-06-12 01:36Z (~142h), so there are no
                SM deltas to read. The 06-16 note put this ON HOLD at ~94.5h of
                freeze; it remains ON HOLD at ~142h. <span className="dn-em">No
                signature can print from a frozen feed; the framework is dark
                until the SM data resumes.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v bear">ON HOLD · SM feed frozen ~142h (since 2026-06-12 01:36Z) · no SM deltas computable</span></div>
                <div><span className="dn-lvl-k">frozen value (not a read)</span><span className="dn-lvl-v">long 13,532.4 / short 50,825.7 / net −37,293.3 — byte-for-byte constant, carried only to mark the dead feed</span></div>
                <div><span className="dn-lvl-k">resume condition</span><span className="dn-lvl-v">SM feed resumes writing fresh long_btc/short_btc → re-assess re-stack signatures from the first fresh deltas</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a dead feed is not a quiet feed.
                The desk does not infer &ldquo;no re-stack&rdquo; from a frozen
                triple — it infers nothing. The squeeze-cycle read is suspended,
                not negative, and the first fresh SM deltas after the feed
                resumes are the re-arm point.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions <span className="dn-roman">VI · LIVE TAPE OUTAGE is the operative condition · 200W floor vs 26JUN amplifier the price decision · scout doubly blocked · macro gate un-fired</span>
            </h2>

            <p>
              Of the 06-16 conditions: the 200W reclaim that the note confirmed
              has been <em>handed back</em> on the 06-16 / 06-17 closes (not a
              floor break — spot still ~+3.7% above $62,230 — but the breakout
              is gone); the scout stayed stood down and is now also
              un-assessable; the macro re-grow gate stayed un-fired on both
              legs; the squeeze-cycle stayed ON HOLD on a now-deader SM feed.
              The dominant new condition is operational: <em>the live tape went
              down 17.4h ago and the desk is positioning-blind</em>. The
              conditions today re-set around the data outage, the price decision
              between the carried floor and the 26JUN amplifier, and the
              doubly-blocked scout:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Live tape restored (PRIMARY operational)</td><td className="bull">live_db.json resumes writing fresh rows beyond 2026-06-17 06:43Z AND the SM triple updates off its 06-12 01:36Z freeze</td><td>re-read funding / OI / flow / SM in full; only then can the scout or squeeze-cycle be evaluated — until then the positioning dimension is unknown</td></tr>
                <tr><td>200W floor lost (cycle-regime escalation)</td><td className="bear">sustained weekly close &lt; $62,230 (W-SMA200 floor); a daily close below is an early warning, not the break</td><td>breaks the 200W floor — separate reassessment; the 06-15 reclaim thesis is falsified, the down-leg resumes with the dealer map amplifying</td></tr>
                <tr><td>Flip / D-SMA20 reclaim (price pre-condition for scout)</td><td className="bull">1h close &gt; flip $65,315 AND &gt; D-SMA20 $65,162, with MTF resonance off bearish</td><td>NOT a scout trigger by itself — only re-opens scout evaluation IF the live tape is also restored; on a blind tape a flip reclaim is watched, not traded</td></tr>
                <tr><td>26JUN26 monthly amplifier (8.3 DTE)</td><td className="bear">−41.45M dominant chunk; near strip 18JUN/19JUN/20JUN/21JUN all negative; spot inside the $60k–$65k put-wall band</td><td>downside is into deepening short gamma toward opex; no near-dated positive chunk dampens a move before 26JUN — watch only, no short instruction in this note (any future setup would define its own trigger / invalidation / R in that note)</td></tr>
                <tr><td>Macro tail re-grow (gate un-fired)</td><td className="bear">HY OAS &gt; 2.78% (7bp to fire, widened +5bp on day) OR 10Y &gt; 4.53% (10bp to fire)</td><td>no hedge instruction in this note — a gate fire would be reassessed in a separate future note (trigger / invalidation / R defined there); note any such tail would be additive to existing dealer short gamma</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.43%</td><td>standalone filter true; needs a BTC-internal pivot AND a live tape to translate to a scout long</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (ON HOLD)</td><td className="stale">SM feed dead ~142h; no deltas computable</td><td>suspended, not negative — re-arm on the first fresh SM deltas after the feed resumes</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the live tape comes back before price forces a decision
                — because if BTC loses the $62,230 floor into the net-short-gamma
                book and the 26JUN −41.45M amplifier while the desk is still
                positioning-blind, the down-leg resumes with no confirmation
                available; and if instead price reclaims the flip $65,315 on a
                blind tape, the desk still cannot scout the bounce
              </span>. Until the tape is restored this note runs as written: the
              book is flat, the scout is doubly blocked (bearish MTF + blind
              tape), the macro tail gate is un-fired, the squeeze-cycle is
              suspended, and the 200W floor watch is the one live level. Price
              and MTF rolled over from the 06-15 reclaim; the dealer book is
              net-short-gamma below the flip with the 26JUN monthly amplifier
              below; the macro tape stays net risk-on and BTC has re-coupled to
              a still-rising TradFi complex while giving back the front. The
              right read for the next 24h is{' '}
              <em>defensive and patient — fix the tape, then read positioning;
              respect the floor and the amplifier in the meantime</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 — post codex hostile audit · see audits/2026-06-18-desk-note.md
            </span>
            <b>Verdict:</b> codex hostile-but-fair returned PASS-WITH-NOTES (no
            CRITICAL; 4 MAJOR + 3 MINOR), plus an ask-deepseek supplementary
            arithmetic pass that flagged one MAJOR band error. v2 applies every
            finding in EN+ZH; each was grep-closed across the full file (key
            wrong-claim pattern searched, fixed everywhere it carried the pre-fix
            meaning, re-grepped to zero). Resolution log (pattern · hits-before →
            hits-after):{' '}
            <b>DN-001</b> (MAJOR · W-SMA200 wrongly called non-computable;
            &ldquo;below every line&rdquo; too broad) — &ldquo;W-SMA200
            non-computable&rdquo; 6→0, &ldquo;below every line/MA&rdquo; 3→0:
            W-SMA200 is recomputed from the full-history glob (355 weekly W-MON
            bars, 2019→present) = $62,230, which coincides with and confirms the
            06-16 floor; the displayed ladder uses the 2023→ subset, so spot is
            below every <em>displayed</em> MA but above the full-history 200W
            floor. <b>RESOLVED</b>.{' '}
            <b>DN-002</b> (MAJOR · daily-close trigger overstated the floor
            break) — &ldquo;first 200W floor break&rdquo; / &ldquo;daily close =
            break&rdquo; 2→0: the floor break is now a <em>sustained weekly
            close</em> &lt; $62,230 (W-SMA200 is a weekly-close framework); a
            daily close below is an early warning, and the unsupported
            &ldquo;first … of the cycle&rdquo; wording is removed.
            <b> RESOLVED</b>.{' '}
            <b>DN-003</b> (MAJOR · unproven PID/alive claim) — &ldquo;PID
            3037845&rdquo; / &ldquo;process is alive/resident&rdquo; 2→0: the
            note now asserts only that live_db.json has not been written since
            06-17 06:43Z (file mtime); process status is explicitly not archived
            / not verified this cut. <b>RESOLVED</b>.{' '}
            <b>DN-004</b> (MAJOR · actionable future short/roll exceeded the flat
            framing) — &ldquo;size any future short&rdquo; / &ldquo;roll a
            downside tail&rdquo; 2→0 (plus the gating cell softened): the decision
            cells are now watch/reassessment language — no short or hedge
            instruction in this note; any future setup defines its own trigger /
            invalidation / R. <b>RESOLVED</b>.{' '}
            <b>DS-band</b> (MAJOR · ask-deepseek) — &ldquo;~$2.3k band … first
            reclaim line&rdquo; 1→0: the floor→D-SMA20 distance is $65,162 −
            $62,230 = $2,932, so the band is restated as ~$2.9k.
            <b> RESOLVED</b>.{' '}
            <b>DN-005</b> (MINOR · 24h/1h windows one minute too wide) — the
            live_db trailing windows are relabeled as 24h+1m / 61m inclusive
            sampled spans (1,442 rows) so the label matches the data.
            <b> RESOLVED</b>.{' '}
            <b>DN-006</b> (MINOR · GEX strip reconciliation) —
            &ldquo;remainder … not individually surfaced&rdquo; 1→0: the −38.7M
            strip vs −47.8M headline gap is disclosed as a difference of basis
            (surface-grid total vs exact-spot by-expiry profile), not an omitted
            expiry. <b>RESOLVED</b>.{' '}
            <b>DN-007</b> (MINOR · DXY wording) — &ldquo;firmed marginally&rdquo;
            1→0: corrected to &ldquo;softened marginally … stays elevated&rdquo;,
            matching the −0.08 print and the table read. <b>RESOLVED</b>.{' '}
            <b>Codex-cleared (unchanged):</b> requireViewer gating is the first
            statement of the default export, path /desk/2026-06-18; headline spot
            $64,558 (parquet 00:06Z) corroborated by GEX Deribit idx $64,673;
            funding −7.24% ann (raw −0.006608 × 1095, NOT ×100); GEX dual-ref
            flip $65,315 spot below on both refs; SM cut-fraction declared
            NON-COMPUTABLE (frozen feed, no |Δ|/prior_net asserted); RV 42.67%
            (30 returns / 31 closes; 43.07% 29-return alt) vs IV 43.6% across
            934 instruments (chain-median, not a tradable spread); NTT /
            max-pain / strike-IV / BTC-NQ framework-only; JGB monthly
            do-not-lean.{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1; a full{' '}
            <code>next build</code> is environment-blocked on the Node version
            gate (lineage), so <code>npx --no-install tsc --noEmit</code> is the
            build proxy — STAGE E owns the final build verification.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-06-18 00:06Z) with
            section-level provenance disclosed in the manifest band above;{' '}
            <em>critically, the live derivatives tape was frozen for 17.4h at
            snapshot time (last row 2026-06-17 06:43Z) and the smart-money
            positioning feed has been dead ~5.9 days</em>, so all funding, OI,
            flow and positioning figures are explicitly last-known / stale or
            non-computable and flagged as such; the macro panel render is
            2026-06-17 22:15Z (~1.9h before snapshot). Price, MTF, GEX and
            cross-asset are fresh. Levels, sizes, and conditions are illustrative
            of the desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future
            tape. Derivatives carry the risk of total loss and, where leveraged,
            loss exceeding deposited margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The reclaim was handed back into a short-gamma book, and the
                tape went dark. Hold the floor, watch the 26JUN amplifier, fix
                the feed before reading positioning. Defensive. Patient.
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
            v2 · 2026-06-18 00:06Z snapshot · post codex hostile audit · sources: live_db.json (FROZEN
            06-17 06:43Z) · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
