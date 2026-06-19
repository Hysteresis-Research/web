import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-19 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-19',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-19' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260619() {
  await requireViewer('/desk/2026-06-19');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-19 · v2</span>
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
              <span className="dn-big">$62,924</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−2.59%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-19 00:06Z ·{' '}
              <span className="dn-em">
                LIVE-TAPE OUTAGE CONTINUES — the OKX monitor has now been frozen
                41.4h; price/MTF/GEX/macro/cross-asset are fresh, the
                derivatives tape is still dark
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
                    not archived / not verified in this cut — now <b>41.4h
                    stale</b> vs the 00:06Z snapshot anchor (was 17.4h on the
                    06-18 note — the outage has run another full day). Funding /
                    OI / CVD / basis / retail / taker-flow are LAST-KNOWN at
                    06-17 06:43Z, not current. The SM sub-feed (long_btc /
                    short_btc / net_btc) is frozen even longer — constant since
                    2026-06-12 01:36Z (~166.5h / ~6.9 days); SM net and the SM
                    cut-fraction are <b>NON-COMPUTABLE</b> this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-19 00:01Z scan</td>
                  <td className="dn-flag">
                    fresh (~5 min before anchor) · rolling latest-file artifact,
                    archived verbatim at
                    /opt/desk-note/snapshots/2026-06-19-0006/ · in-progress bars
                    · scan spot $62,890, 24h −2.49%, 24h H/L $64,780 / $62,232,
                    qVol $11.91B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-19 00:00Z snapshot</td>
                  <td className="dn-flag">
                    fresh · Deribit idx $63,071 ($147 above parquet spot
                    $62,924) · 976 instruments · net GEX −111.1M (net SHORT
                    gamma — roughly 2.3× the −47.8M of the 06-18 note) · flip
                    $64,641 (spot below) · today&rsquo;s 19JUN26 0.3DTE −42.35M
                    chunk settles at 08:00Z (≈8h AFTER this snapshot — not yet
                    cleared); the dominant chunk is the 26JUN26 monthly −55.30M,
                    7.3 DTE (grew from −41.45M on 06-18)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-19 00:00Z
                  </td>
                  <td className="dn-flag">fresh · 7d 1h bars · 22 assets · 167 rows · regime NORMAL (mean |r| 0.325, loosened from 0.393 on 06-18)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-18 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.85h render lag · FRED Tier-1 firmed on the rates/dollar
                    side (10Y +6bp to 4.49%, TIPS +9bp to 2.23%, DXY +0.72 to
                    100.81 — EXTREME RISK-OFF) while credit eased (HY OAS −8bp to
                    2.63%, RISK-ON episodic) · Fed net liq drained −0.038T to
                    $5.849T
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-19 00:05Z (close $62,924)</td>
                  <td className="dn-flag">
                    fresh kline (exchange OHLC, independent of the frozen live
                    tape) · offsets recomputed vs the parquet last-bar close,
                    which is the freshest available spot while the live tape is
                    frozen · the displayed ladder uses the 2023→ subset (182
                    weekly bars), so no W-SMA200 row; the 200W floor is
                    recomputed directly from the full-history glob — 355 weekly
                    W-MON bars (2019→present) — = <b>$62,438</b>, which has crept
                    ~$208 above the $62,230 the 06-16 / 06-18 notes pinned (a
                    slow weekly SMA, ~$250/wk) · weekly_200sma.json absent this
                    cut but does not block the parquet recompute
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
              <span className="dn-v bear">−7.24% (STALE · 06-17 06:43Z · 41.4h)</span>
              <span className="dn-src">live_db raw funding −0.006608 × 1095 = −7.24% ann (NOT ×100) · LAST-KNOWN at the 06-17 06:43Z freeze, now 41.4h stale, not a current read · last-available ann over the 24h+1m inclusive sampled window ending at the freeze (1,442 rows): mean +0.20%, range −7.24% / +7.21%, 819 / 1,442 rows negative — a balanced, two-sided book at the point the tape died</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · vs 06-18</span>
              <span className="dn-v">tape frozen — not computable</span>
              <span className="dn-src">the live tape has not written since 06-17 06:43Z, so there is still no current funding to difference against the 06-18 note · last-known print at the freeze was −7.24% ann (shorts paying longs); the leverage gate remains un-assessable a second day running</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC (−0.45%) · STALE window</span>
              <span className="dn-src">live_db oi_btc 102,945 at the 06-17 06:43Z freeze vs the start of a 24h+1m inclusive sampled window (1,442 rows) · the window ENDS at the freeze, NOT into the 00:06Z snapshot — it describes the tape up to 06-17 06:43Z and is 41.4h out of date</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` at the 06-17 06:43Z freeze (was 58.29% at the start of the 24h+1m inclusive sampled window — a +1.18pt long add into the roll-over) · last-known, 41.4h stale</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED DEAD ~166.5h</span>
              <span className="dn-src">long 13.53k − short 50.83k · this triple has been byte-for-byte constant since 2026-06-12 01:36Z (~166.5h / ~6.9 days) — it is a FROZEN value, NOT a current positioning read; carried only to mark the dead feed</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">NON-COMPUTABLE</span>
              <span className="dn-src">SM feed frozen ~6.9 days · |Δ| / prior_net cannot be computed — there is no current SM net to difference · the squeeze-cycle / re-stack framework is blind this cut, a continuation of the 06-16 / 06-18 ON-HOLD</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">44.9% / 42.76%</span>
              <span className="dn-src">GEX median IV across 976 instruments (00:00Z, fresh) vs 30D close-to-close RV 42.76% off parquet — chain richness only ~+2.14pt, a thin vol premium; RV stays elevated (was 42.67% on 06-18, 24.91% on 05-31) — vol is not cheap to realised</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−2.66% (below)</span>
              <span className="dn-src">flip $64,641 · vs parquet spot $62,924 (62,924 / 64,641 − 1 = −2.657%) / GEX file Deribit idx $63,071 (63,071 / 64,641 − 1 = −2.429%) — both references BELOW the flip, tile rounds the spot side to −2.66% · net GEX −111.1M (net SHORT gamma, amplifying) · the 26JUN26 monthly −55.30M is the dominant chunk, today&rsquo;s 19JUN 0DTE −42.35M settles 08:00Z</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The reclaim handed back on 06-18 has extended into a floor test,
                and the desk is still reading it through a dead tape
              </span>. BTC lost another <span className="dn-tag bear">−$1,549 on
              the 06-18 daily close</span> ($64,473 → $62,924), the third
              consecutive red close off the 06-15 high $66,286, and the 24h low{' '}
              <span className="dn-tag bear">$62,232 @ 2026-06-18 15:57Z</span>{' '}
              wicked <span className="dn-em">through</span> the freshly
              recomputed 200W floor before recovering. Spot $62,924 (parquet
              last bar 00:05Z) now sits just{' '}
              <span className="dn-tag bull">+0.78% above the full-history
              W-SMA200 floor $62,438</span> — the lone MA under spot, and far
              tighter than the 06-18 note&rsquo;s +3.7% buffer. The dealer book
              deepened against it: aggregate GEX went{' '}
              <span className="dn-tag bear">−47.8M → −111.1M</span>, spot is{' '}
              <span className="dn-tag bear">−2.66% below the 0-γ flip
              $64,641</span>, and the heaviest gamma walls — $63k −40.18M, $62k
              −35.18M, $60k −28.33M, all puts — sit right at and below spot, with
              the <span className="dn-tag bear">26JUN26 monthly amplifier grown
              to −55.30M (7.3 DTE)</span> and today&rsquo;s{' '}
              <span className="dn-tag bear">19JUN 0DTE −42.35M</span> settling at
              08:00Z (≈8h after this snap). MTF holds{' '}
              <span className="dn-tag bear">multi-TF bearish resonance (1 bull /
              8 bear / 1 neutral, &ldquo;sell rallies&rdquo;)</span> with a fresh
              1h water-down golden cross and a 4h ⚡ TD9 BUY printing the only
              relief notes inside it.{' '}
              <span className="dn-em">
                The operational fact of the day is unchanged and still binding:
                the OKX monitor has now been frozen 41.4h (last row 2026-06-17
                06:43Z), so funding, OI, CVD, basis and retail are last-known
                and stale, and the SM positioning book has been dead ~6.9 days —
                SM net and the cut-fraction are non-computable. The desk remains
                positioning-blind into a floor test.
              </span>{' '}
              Conviction stays capped: the trade book is flat and defensive, the
              scout stays doubly blocked (bearish MTF + blind tape), and the one
              live decision is whether a weekly close loses the $62,438 floor
              into the 26JUN amplifier — judged on price and gamma alone until
              the live tape is restored.
            </p>

            <p>
              BTC prints <span className="dn-tag">$62,924</span> at the parquet
              last bar (00:05Z),{' '}
              <span className="dn-tag bear">−2.59%</span> on 24h (vs $64,596 one
              day prior; the MTF scan reads −2.49% on its own 00:01Z window and
              the day-over-day close is −2.40% — the spread is the reference
              window, not a data conflict), inside a{' '}
              <span className="dn-tag">$64,780 / $62,232</span> 24h range (high @
              2026-06-18 01:12Z, low @ 2026-06-18 15:57Z). The Deribit index
              reads $63,071 at 00:00Z and the 06-19 in-progress session has been
              flat — open $62,924, range $62,959 / $62,866 — so the freshest
              spot is well-corroborated across two independent fresh sources
              (parquet kline and the GEX Deribit index), even though the live_db
              tape that normally supplies it is frozen at $65,616 (06-17 06:43Z,
              41.4h stale).{' '}
              <span className="dn-signal">The structural read has moved from
              roll-over to floor test</span>: the 06-15 weekly close $66,286
              resolved the 200W reclaim the 06-16 note led with, but three red
              daily closes since — 06-16 $65,645, 06-17 $64,473, 06-18 $62,924 —
              have given the breakout fully back and dropped price onto the
              floor. The cycle floor $62,438 (recomputed this cut as the
              full-history W-SMA200 — 355 weekly W-MON bars from the 2019→
              parquet glob — vs the $62,230 the 06-16 / 06-18 notes pinned; the
              level has crept ~$208 higher as older low bars roll off the
              200-week window) is now only ~+0.78% below spot, and the 06-18 low
              $62,232 already wicked ~0.33% below it intraday before the close
              recovered.{' '}
              <span className="dn-em">
                This is the floor being tested in real time, inside a
                net-short-gamma book whose heaviest walls sit at and below it.
                Whether the test converts to a sustained weekly-close break
                depends on flow the desk currently cannot see.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · LIVE TAPE FROZEN 41.4h · SM book dead ~6.9 days · funding/OI/flow last-known stale · the desk is positioning-blind into a floor test</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important source of this note — the live
                derivatives tape — is still down, a second day running
              </span>. The OKX monitor has appended no row to live_db.json since{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> (t =
              &ldquo;06-17 14:43&rdquo; BJ; the file mtime confirms the write
              stopped there; the process status is not archived or verified in
              this cut, so the note asserts the missing tape, not a live/hung
              process). That is now <span className="dn-tag bear">41.4h of
              missing tape</span> against the 00:06Z snapshot anchor — the 06-18
              note flagged it at 17.4h and the outage has run another full day
              without a write. Everything the live tape carries — funding, open
              interest, spot/futures CVD, perp basis, retail long%, taker-net,
              big-print flow, aggressor skew — is therefore{' '}
              <span className="dn-em">last-known at 06-17 06:43Z and not
              current</span>. The smart-money positioning triple (long_btc /
              short_btc / net_btc) has been byte-for-byte constant —{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> —
              since <span className="dn-tag bear">2026-06-12 01:36Z</span>,
              ~166.5h (~6.9 days). The 06-16 note flagged this dead feed at
              ~94.5h and put the squeeze-cycle ON HOLD; the 06-18 note carried it
              at ~142h; today it is ~166.5h and still dead.{' '}
              <span className="dn-em">
                SM net is non-computable as a current read, and the SM cut
                fraction (|Δ| / prior_net) cannot be formed — there is no current
                SM net to difference. Any positioning claim in this note is
                explicitly historical, not live.
              </span>
            </p>

            <p>
              For completeness, the <em>last-available</em> tape readings — all
              pinned to the 06-17 06:43Z freeze and now 41.4h out of date — are:
              funding <span className="dn-tag bear">−7.24% ann</span> (raw
              −0.006608 × 1095; shorts paying longs at the freeze), with the
              last-available path balanced two-sided over the 24h+1m inclusive
              sampled window (1,442 rows: mean{' '}
              <span className="dn-tag">+0.20% ann</span>, range{' '}
              <span className="dn-tag">−7.24% / +7.21%</span>, 819 / 1,442 rows
              negative); OI <span className="dn-tag bear">102,945 BTC, −468 over
              the trailing 24h+1m window (−0.45%)</span>; retail{' '}
              <span className="dn-tag">mkt_long_pct 59.47%</span> (a +1.18pt long
              add over that same window); perp basis{' '}
              <span className="dn-tag bear">−$57.43 discount</span> to spot
              (window mean −$58.62, range −$146.17 / +$67.04 — basis did touch a
              small premium inside the window).{' '}
              <span className="dn-em">
                Read this as a near-two-day-old fingerprint, not a signal: a
                two-sided funding book, OI bleeding, retail adding longs into the
                first leg of weakness. None of it can be carried forward to the
                00:06Z snapshot — and crucially it predates the entire 06-18
                selloff that put price on the floor, so it says nothing about how
                positioning absorbed the move. The desk treats the positioning
                dimension as unknown.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure <span className="dn-roman">II · price/MTF FRESH · multi-TF bearish resonance, sell rallies · spot below every displayed MA, D-SMA20 the only near line · 200W floor $62,438 wicked intraday, held on close</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map is fresh and reads bearish across the board
              </span> — the one dimension, with the dealer map, the desk can still
              trust today. The 00:01Z scan tags{' '}
              <span className="dn-tag bear">1 bull / 8 bear / 1 neutral across 10
              frames</span>, net read <em>multi-TF bearish resonance, sell
              rallies</em>, inside a 6/9 cycle-reversal regime (JT&lt;0,
              mean-reversion / bounce favoured, trend-following cautioned). The
              short and mid frames are a bearish stack — 15m / 30m / 1h / 4h /
              8h / 12h / 1d / 3d all 偏空 — with the only counter-signals the
              relief cluster the regime favours: a fresh{' '}
              <span className="dn-tag bull">1h water-down golden cross (just
              printed, DIF −486.9, an underwater early cross)</span>, a{' '}
              <span className="dn-tag bull">4h ⚡ TD9 BUY at $62,887 (oversold
              reversal hint)</span>, and a bottom-divergence cluster on 15m / 30m
              / 1h. The 1M is the lone bull frame (above cloud, Buy 8 → 9?) and
              the 1w is range-bound.{' '}
              <span className="dn-em">
                Straight read: the bounce that carried the 06-11..06-15 reclaim
                has fully rolled over, the slow frames never confirmed it (1d /
                3d / 1w all below cloud, deeply offset), and the only
                constructive notes are the short-frame relief signals the
                reversal regime flags — an oversold-bounce setup inside a bearish
                resonance at the floor, not a turn. The 4h TD9 BUY and 1h
                underwater golden cross are exactly the kind of relief print that
                can spark a wick-recovery bounce off the floor without changing
                the structural down-read.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">62,892</td><td className="num">47.8</td><td className="bull">golden (water-dn) 23b</td><td className="bear">below ↑63.1k 42b</td><td>Sell 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">62,892</td><td className="num bear">41.2</td><td className="bull">golden (water-dn) 8b</td><td className="bear">below ↑64.2k 60b</td><td>Sell 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">62,892</td><td className="num bear">37.6</td><td className="bull">golden (water-dn) 刚印 (just printed)</td><td className="bear">below ↑65.2k 29b</td><td>Buy 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">62,887</td><td className="num bear">37.5</td><td className="bear">death (water-up) 14b</td><td className="neut">in cloud 62.1k–63.5k 3b</td><td>⚡ TD9 BUY</td><td>BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">62,887</td><td className="num">40.1</td><td className="bear">death (water-up) 3b</td><td className="bear">below ↑63.9k 2b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">62,887</td><td className="num bear">37.1</td><td className="neut">—</td><td className="bear">below ↑66.9k 55b</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">62,890</td><td className="num bear">34.8</td><td className="bull">golden (water-dn) 6b</td><td className="bear">below ↑74.5k 18b</td><td>Buy 2</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">62,890</td><td className="num bear">36.6</td><td className="bear">death (water-up) 8b</td><td className="bear">below ↑74.1k 6b</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">62,890</td><td className="num bear">35.2</td><td className="neut">—</td><td className="bear">below ↑100.3k 20b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">62,890</td><td className="num">42.4</td><td className="neut">—</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (rolling latest
                    file; archived verbatim at
                    /opt/desk-note/snapshots/2026-06-19-0006/). Header alerts:{' '}
                    <em>1h water-down golden cross (just printed, DIF −486.9)</em>,{' '}
                    <em>4h ⚡ TD9 BUY at $62,887 (oversold reversal hint)</em>.
                    Scan spot $62,890, 24h −2.49%, 24h H/L $64,780 / $62,232,
                    qVol $11.91B. Closes are in-progress bars; treat every value
                    as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is the same one-directional map as 06-18, now with
              the floor nearly under spot: $62,924 sits{' '}
              <span className="dn-em">below every displayed line on the
              ladder</span>, with no positive offset on any displayed MA — the
              lone MA below spot is the full-history W-SMA200 200W floor $62,438
              (~+0.78% above it). The single near line overhead is{' '}
              <span className="dn-tag bear">D-SMA20 $64,533 (−2.49%)</span> —
              followed by <span className="dn-tag bear">D-EMA20 $65,778
              (−4.34%)</span> and the cycle-proxy{' '}
              <span className="dn-tag bear">W-EMA200 $67,572 (−6.88%)</span>. The
              mid-ladder is a deep wall:{' '}
              <span className="dn-tag bear">D-EMA50 $69,693 (−9.71%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $71,451 (−11.93%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $72,431 (−13.12%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $72,566 (−13.29%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $72,578 (−13.30%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $72,695 (−13.44%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,200 (−15.20%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $74,416 (−15.44%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $75,396 (−16.54%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $75,446 (−16.60%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $77,009 (−18.29%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $78,094 (−19.43%)</span>.
              Far above and disused: W-EMA100 $80,947 (−22.27%), W-EMA50 $82,619
              (−23.84%), W-SMA100 $88,516 (−28.91%), W-SMA50 $90,967 (−30.83%).
              The structural near-set is narrow and one-directional: D-SMA20 /
              D-EMA20 / W-EMA200 overhead from −2.49% to −6.88%, and the
              full-history 200W floor $62,438 only ~+0.78% below — a{' '}
              <span className="dn-tag">~$2.1k</span> band between the floor and
              the first reclaim line (D-SMA20 $64,533), narrowed from the ~$2.9k
              of 06-18 as price slid into the floor.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-19 00:05Z (close
                $62,924.20); offsets computed against that same close, which is
                the freshest available spot while the live tape is frozen.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. The displayed ladder uses the 2023→ subset (182
                weekly bars), so W-SMA200 is not a matrix row; but the 200W floor
                IS computable from the full-history glob — 355 weekly W-MON bars
                (2019→present) give W-SMA200 $62,438. That is ~$208 above the
                $62,230 the 06-16 / 06-18 notes pinned: the floor is a slow
                weekly SMA (~$250/wk) and has crept up as older low bars roll off
                the 200-week window, so the recompute is an honest re-pin, not a
                conflict. The percentile and last-event remain unsourced
                (weekly_200sma.json absent) and are not fabricated. Daily closes:
                06-13 $64,418, 06-14 $65,702, 06-15 $66,286, 06-16 $65,645, 06-17
                $64,473, 06-18 $62,924, 06-19 (in-progress) $62,924 — the 06-15
                high, then three red closes giving the breakout fully back onto
                the floor.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book net-SHORT-gamma −111.1M (≈2.3× 06-18) · spot below flip $64,641 · 26JUN26 monthly −55.30M the dominant amplifier (7.3 DTE) · 19JUN 0DTE −42.35M settles 08:00Z · heaviest put walls $60k–$63k at and below spot</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book is deeply net-short-gamma and spot sits directly
                on its heaviest wall — a maximally downside-amplifying map
              </span>. Aggregate GEX is <span className="dn-tag bear">−111.1M /
              1%</span> (was −47.8M on 06-18 — short gamma roughly 2.3× deeper as
              the down-move pulled spot into the negative band) and the 0-γ flip
              is <span className="dn-tag">$64,641</span>, with spot{' '}
              <span className="dn-tag bear">−2.66% below</span> on
              spot-denominated math (62,924 / 64,641 − 1 = −2.657%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; off its Deribit-index
              $63,071 reads <span className="dn-tag bear">−2.43%</span> (63,071 /
              64,641 − 1 = −2.429%) — <span className="dn-em">both references
              below the flip</span>, the book amplifying rather than dampening
              from here. The wall map is heavy at and below spot:{' '}
              <span className="dn-tag bear">$63k −40.18M</span> (the heaviest
              wall, a put wall spot is sitting on, Put OI 4,799),{' '}
              <span className="dn-tag bear">$62k −35.18M</span> (right at the
              $62,438 floor, Put OI 9,079),{' '}
              <span className="dn-tag bear">$60k −28.33M</span> (the heaviest put
              OI on the board at 19,955),{' '}
              <span className="dn-tag bear">$64k −11.45M</span>,{' '}
              <span className="dn-tag bear">$61k −7.05M</span>,{' '}
              <span className="dn-tag bear">$58k −7.92M</span>,{' '}
              <span className="dn-tag bear">$55k −8.22M</span> and{' '}
              <span className="dn-tag bear">$50k −5.65M</span> lower crash-put
              residuals — against the first positive walls only overhead{' '}
              <span className="dn-tag bull">$67k +8.00M</span> (Call OI 5,687)
              and the far-up <span className="dn-tag bull">$80k +9.75M</span>{' '}
              (heaviest positive, Call OI 26,329).{' '}
              <span className="dn-em">
                Spot pinned on the $63k put wall with $62k / $60k stacked
                immediately below means a continued fade is into deepening short
                gamma right where the floor is — dealers sell weakness and buy
                strength, which magnifies a move down through the floor. The
                first dampening support is overhead at the $67k positive wall,
                i.e. above the flip, not below spot; there is no positive wall
                between spot and the floor.
              </span>
            </p>

            <p>
              The expiry strip carries the amplifier and a same-day 0DTE. The
              dominant single chunk is the{' '}
              <span className="dn-tag bear">26JUN26 monthly −55.30M (7.3 DTE,
              Call OI 88,256 / Put OI 75,494)</span> — half the aggregate again
              and grown from the −41.45M the 06-18 note carried, the monthly
              opex the near-dated negatives feed into. The near strip is
              uniformly negative and front-loaded:{' '}
              <span className="dn-tag bear">19JUN26 0.3 −42.35M</span>{' '}
              (today&rsquo;s 0DTE, settles 08:00Z ≈8h AFTER this snapshot — not
              yet cleared, and itself nearly the size of the whole 06-18
              aggregate), <span className="dn-tag bear">20JUN26 1.3 −5.46M</span>,{' '}
              <span className="dn-tag bear">21JUN26 2.3 −15.91M</span>,{' '}
              <span className="dn-tag bear">22JUN26 3.3 −2.63M</span>, then{' '}
              <span className="dn-tag">3JUL26 14.3 −2.76M</span>,{' '}
              <span className="dn-tag">10JUL26 21.3 −0.84M</span>. The positive
              offsets are all far-dated:{' '}
              <span className="dn-tag bull">31JUL26 42.3 +14.70M</span>,{' '}
              <span className="dn-tag bull">25DEC26 189.3 +2.76M</span>,{' '}
              <span className="dn-tag bull">28AUG26 70.3 +2.67M</span>,{' '}
              <span className="dn-tag bull">25SEP26 98.3 +0.25M</span>,{' '}
              <span className="dn-tag bull">26MAR27 280.3 +0.61M</span>. The
              listed strip nets to roughly −104.3M against the −111.1M headline
              aggregate; the ~−6.8M gap is a difference of basis, not a
              missing-expiry remainder — the headline is surface-grid GEX read at
              the nearest spot/current-IV grid point, while the by-expiry strip
              is the exact-spot profile grouped by expiry, so the two are not
              algebraically identical unless recomputed on the same basis. Either
              way{' '}
              <span className="dn-em">
                the near calendar through 26JUN is all negative gamma, today&rsquo;s
                19JUN 0DTE is itself a −42.35M chunk resolving in eight hours,
                the 26JUN monthly is the amplifier, and there is no near-dated
                positive chunk to dampen a move before opex — the structural
                analogue of the down-leg amplifier windows, now pointed at the
                26JUN monthly with spot already on the floor.
              </span>{' '}
              IV median across 976 instruments is{' '}
              <span className="dn-tag">44.9%</span> against 30D close-to-close RV{' '}
              <span className="dn-tag">42.76%</span> — chain richness only{' '}
              <span className="dn-tag">~+2.14pt</span>, a thin premium; a
              chain-median across N instruments, <span className="dn-em">not</span>{' '}
              a tradable spread, with expiry-/strike-level vega, skew and term
              structure not loaded — the vol read stays framework-only. RV
              methodology: 30D close-to-close, logret.std × √365 × 100 on the
              last 30 daily log returns (= 31 consecutive daily closes) anchored
              to parquet last bar 2026-06-19 00:05Z; the 29-return read is
              43.42%. RV is essentially flat vs the 42.67% of 06-18 and remains
              far above the 24.91% of 05-31 — vol is not cheap to realised, which
              is why the 44.9% IV median carries almost no premium.
            </p>

            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · rates/dollar FIRMED (10Y +6bp to 4.49%, TIPS +9bp to 2.23%, DXY +0.72 to 100.81 EXTREME RISK-OFF) · credit eased (HY OAS −8bp to 2.63%) · Fed net liq drained −0.038T · BTC lag to NQ widened to −3.88pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape firmed on the rates and dollar side on the day,
                with credit the offset
              </span>. Dashboard render is 2026-06-18 22:15Z, ~1.85h before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bear">4.49% (+6.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.63</span> — tight regime, firmed
              back up (vs 4.43% on 06-18). 10Y TIPS real{' '}
              <span className="dn-tag bear">2.23% (+9.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.68</span> — EXTREME RISK-OFF, the
              tightest line on the panel and rising. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.23% (+2.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag bull">2.25% (−1.0bp)</span> — inflation
              expectations roughly flat. HY OAS{' '}
              <span className="dn-tag bull">2.63% (−8.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.78</span> — credit tightened in
              the spread (loosened in conditions), a RISK-ON episodic and the day&rsquo;s
              one easing line. MOVE bond vol{' '}
              <span className="dn-tag">70.7 (+1.30)</span> — still loose. The
              dollar firmed hard: DXY{' '}
              <span className="dn-tag bear">100.81 (+0.72 day)</span>, regime z{' '}
              <span className="dn-tag bear">+2.47</span> — EXTREME RISK-OFF,
              back above 100. Fed net liquidity drained on a fresh weekly print
              to <span className="dn-tag bear">$5.849T (−0.038T)</span>, regime z{' '}
              <span className="dn-tag">+0.05</span> (a flat standing level) but
              episodic z <span className="dn-tag bear">−2.42</span> — the
              |episodic z| &gt; 1.5 day-change surprise the dashboard flags,
              a distinct metric from the neutral regime read shown in the table —
              a liquidity headwind after the 06-18 add. US-JP 10Y spread{' '}
              <span className="dn-tag bear">1.84% (+6.0bp)</span>; USD/JPY{' '}
              <span className="dn-tag">160.36 (+0.13)</span>; USD/CNY{' '}
              <span className="dn-tag">6.7681 (+0.01)</span>.{' '}
              <span className="dn-em">
                Net: the macro backdrop turned modestly less supportive than
                06-18 — real rates and the dollar firmed to EXTREME RISK-OFF and
                Fed liquidity drained, a headwind layered onto the endogenous
                roll-over. The re-grow gates: HY OAS gate 2.78% moved further
                away (at 2.63%, 15bp below, credit eased), but the 10Y gate 4.53%
                is now only 4bp from firing (at 4.49%, up from 10bp-to-fire on
                06-18). The reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE
                at 4.49%. The dollar/real-rate firming is a real macro headwind
                this print, though credit and the gates have not yet flipped the
                tail thesis.
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
                <tr><td>US 10Y nominal</td><td className="num">4.49%</td><td className="num bear">+6.0bp</td><td className="num bear">+1.63</td><td className="bear">tight, firmed up</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.23%</td><td className="num bear">+9.0bp</td><td className="num bear">+2.68</td><td className="bear">tightest line · EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.23%</td><td className="num">+2.0bp</td><td className="num">−0.03</td><td className="neut">flat</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.25%</td><td className="num bull">−1.0bp</td><td className="num">−1.37</td><td className="neut">flat / soft</td></tr>
                <tr><td>HY OAS</td><td className="num">2.63%</td><td className="num bull">−8.0bp</td><td className="num bull">−1.78</td><td className="bull">loose · risk-on, tightened spread</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.505</td><td className="num">0.00</td><td className="num">+0.24</td><td className="stale">weekly</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">70.7</td><td className="num bear">+1.30</td><td className="num bull">−0.48</td><td className="bull">loose · a touch firmer</td></tr>
                <tr><td>DXY</td><td className="num">100.81</td><td className="num bear">+0.72</td><td className="num bear">+2.47</td><td className="bear">EXTREME RISK-OFF · firmed above 100</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.849T</td><td className="num bear">−0.038T</td><td className="num">+0.05</td><td className="bear">drained on the week</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.36</td><td className="num">+0.13</td><td className="num bear">+1.32</td><td className="neut">yen soft</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.84%</td><td className="num bear">+6.0bp</td><td className="num bull">−1.03</td><td className="bear">widened</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7681</td><td className="num">+0.01</td><td className="num bull">−1.66</td><td className="neut">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:00Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.325</span> —
              loosened from the 0.393 of 06-18 but still in the NORMAL band, and{' '}
              <span className="dn-signal">BTC stays coupled to the TradFi risk
              complex</span>. BTC&rsquo;s top ties remain the equity /
              precious-metal cluster: SP500{' '}
              <span className="dn-tag">+0.606</span>, NQ{' '}
              <span className="dn-tag">+0.552</span>, NVDA{' '}
              <span className="dn-tag">+0.549</span>, GOLD{' '}
              <span className="dn-tag">+0.486</span>, SILVER{' '}
              <span className="dn-tag">+0.474</span>, EUR{' '}
              <span className="dn-tag">+0.445</span>, COPPER{' '}
              <span className="dn-tag">+0.394</span>, MSFT{' '}
              <span className="dn-tag">+0.380</span>, JP225{' '}
              <span className="dn-tag">+0.364</span>, with the energy complex
              inverse (CL <span className="dn-tag">−0.279</span>, BRENT{' '}
              <span className="dn-tag">−0.286</span>) and JPY{' '}
              <span className="dn-tag">−0.330</span>. 7d performance has BTC
              lagging a still-firm risk complex:{' '}
              <span className="dn-tag bear">BTC −1.10%</span>, NQ{' '}
              <span className="dn-tag bull">+2.78%</span>, SP500{' '}
              <span className="dn-tag bull">+1.23%</span>, JP225{' '}
              <span className="dn-tag bull">+8.09%</span>, NVDA{' '}
              <span className="dn-tag bull">+1.91%</span>, MSFT{' '}
              <span className="dn-tag bear">−3.51%</span>, TSLA{' '}
              <span className="dn-tag bear">−0.95%</span>; metals mixed (GOLD{' '}
              <span className="dn-tag bear">−0.45%</span>, SILVER{' '}
              <span className="dn-tag bear">−2.97%</span>, PLAT{' '}
              <span className="dn-tag bear">−2.42%</span>, URNM{' '}
              <span className="dn-tag bull">+5.24%</span>); energy crashed again
              (CL <span className="dn-tag bear">−11.67%</span>, BRENT{' '}
              <span className="dn-tag bear">−10.55%</span>, NGAS{' '}
              <span className="dn-tag bull">+4.21%</span>).{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d return −1.10% vs NQ +2.78% is a lag of −3.88pt
                (vs −0.85pt on 06-18) — BTC has gone from tracking the risk
                complex to underperforming it again, an idiosyncratic roll-over
                at the front inside a still-risk-on equity tape. The
                endogenous-to-crypto read holds: the downside pressure is the
                dealer-gamma / reclaim-handed-back / floor-test structure, not
                the macro pulse — though the dollar and real-rate firming this
                print is a genuine macro headwind on top of it.
              </span>{' '}
              JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag — do not
              lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book <span className="dn-roman">V · book FLAT · 200W floor watch now PRIMARY and live (spot +0.78%, wicked intraday) · scout stood down AND un-assessable (positioning tape blind) · macro tail gate un-fired (10Y 4bp away) · squeeze-cycle ON HOLD (SM dead ~6.9 days)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — and the binding constraint is
                still data integrity, into a floor that is now being tested
              </span>. The 06-18 scout was already stood down and un-assessable;
              today the MTF is the same bearish resonance, the floor buffer has
              collapsed from +3.7% to +0.78%, and the positioning legs of any
              scout trigger (SM short bleed, funding, flow) still cannot be
              evaluated because the live tape is frozen 41.4h and the SM feed is
              dead ~6.9 days. A scout long cannot be entered on a
              positioning-blind tape into a deeper net-short-gamma book below the
              flip — even with the 4h TD9 BUY and 1h underwater golden cross
              flashing relief at the floor. No new short either: shorting into
              the heaviest put wall ($63k) with the floor $62,438 immediately
              below, on stale flow, is a poor entry — the gamma map already does
              the work, the floor is right there, and the desk cannot confirm
              crowding. The trade book today is: no shorts, no scout, no fresh
              hedge — fix the tape AND get a price decision (floor lost on a
              weekly close, or flip reclaimed) before re-arming.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch — now LIVE: spot $62,924 only +0.78% above the recomputed $62,438 floor, 06-18 low $62,232 wicked through intraday and the close recovered</span>
              <div className="dn-trade-name">
                200W cycle floor watch — the floor test the 06-18 note flagged is here; floor $62,438 = full-history W-SMA200 (355 weekly bars, ~$208 above the 06-16 pin as it crept up), spot +0.78% above, intraday wick already below
              </div>
              <div className="dn-thesis">
                The 06-18 note carried the floor as a watch with spot ~+3.7%
                above. Three red closes and a −$1,549 06-18 daily print have
                collapsed that buffer: spot $62,924 is now only +0.78% above the
                recomputed $62,438 floor, and the 06-18 low $62,232 already
                wicked ~0.33% below it intraday before the close recovered. The
                dealer map sits underneath the test — the $63k put wall (−40.18M)
                spot is on, the $62k (−35.18M) at the floor, the $60k (−28.33M,
                heaviest put OI) just below, and the 26JUN26 monthly −55.30M
                amplifier 7 days out. <span className="dn-em">This is the floor
                test in progress, not a distant watch</span>: a wick below has
                already printed; what matters now is the weekly close. The desk
                cannot confirm the flow that would distinguish a controlled
                wick-recovery from a break, because the live tape is down.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor</span><span className="dn-lvl-v">$62,438 = full-history W-SMA200, recomputed this cut from the 2019→ parquet glob (355 weekly W-MON bars); ~$208 above the $62,230 the 06-16 / 06-18 notes pinned (slow weekly SMA crept up) · weekly_200sma.json absent so percentile/last-event stay unsourced, not fabricated</span></div>
                <div><span className="dn-lvl-k">spot vs floor</span><span className="dn-lvl-v bull">$62,924 +0.78% above on a close basis · but the 06-18 low $62,232 wicked ~0.33% below intraday — the floor is being tested</span></div>
                <div><span className="dn-lvl-k">escalation</span><span className="dn-lvl-v bear">a sustained weekly close &lt; $62,438 breaks the 200W floor (W-SMA200 is a weekly-close framework) — a daily close below is an early warning, an intraday wick (already printed) is not the break — separate reassessment, the reclaim thesis is dead and the down-leg resumes into the 26JUN amplifier</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework, not a trade.</b> The floor watch is now the single
                load-bearing live level while everything else is stale (live
                tape) or framework-only. The dealer map is why it matters: spot
                on the $63k put wall with $62k / $60k stacked below means a
                continued fade is into deepening short gamma exactly where the
                floor sits, and the 26JUN monthly is the amplifier the move would
                feed into. No position is taken on the watch — it sets the
                escalation level only, and the desk will not pre-position short
                into the floor on a blind tape.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STOOD DOWN and UN-ASSESSABLE · bearish MTF resonance + positioning tape blind, despite relief signals at the floor</span>
              <div className="dn-trade-name">
                Cover-bounce scout — stood down (MTF bearish resonance) AND un-assessable (SM / funding / flow legs blind on a frozen tape), even with a 4h TD9 BUY + 1h underwater golden cross flashing at the floor
              </div>
              <div className="dn-thesis">
                The 06-18 scout was stood down on a bearish MTF and a blind tape.
                Today there is a genuine relief signal — the 4h ⚡ TD9 BUY at
                $62,887 and the 1h water-down golden cross (just printed), the
                exact short-frame oversold cluster the 6/9 reversal regime
                favours, sitting right at the floor. But the scout still cannot
                be taken: the net MTF read is bearish resonance / sell rallies,
                price is below the flip and every displayed MA, and — decisively
                — the positioning legs (SM short bleed, funding posture,
                cover-flow confirmation) all require a live tape, and there is
                none. <span className="dn-em">A scout long on a positioning-blind
                tape, into a deeper net-short-gamma book below the flip, against
                a bearish MTF resonance, is not a trade — a relief-print at the
                floor is precisely where a positioning-blind desk gets run over
                if the floor breaks.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">stood down · no entry · re-evaluate only after the live tape is restored</span></div>
                <div><span className="dn-lvl-k">technical pre-condition</span><span className="dn-lvl-v">1h close &gt; flip $64,641 / D-SMA20 $64,533 reclaimed AND MTF resonance off bearish — none true (the 4h TD9 BUY / 1h golden cross are relief inside the bearish resonance, not a resonance flip)</span></div>
                <div><span className="dn-lvl-k">data pre-condition</span><span className="dn-lvl-v bear">live tape restored (currently 41.4h frozen) AND SM feed live (currently dead ~6.9 days) — both must hold before any positioning leg can be read</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> no scout entry without a live positioning tape.
                Even the 4h TD9 BUY relief print does not trigger a scout while
                the SM / funding / flow legs are blind and price sits on the
                floor under short gamma — the desk does not size into a
                cover-bounce it cannot see being covered. The scout is doubly
                blocked: technically (bearish MTF, below flip, on the floor) and
                operationally (tape down).
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — 10Y leg now only 4bp from firing (4.49% vs 4.53% gate), HY OAS leg moved further away (2.63% vs 2.78%)</span>
              <div className="dn-trade-name">
                Downside put-spread — re-grow gate un-fired but the 10Y leg crept to within 4bp; no hedge added (macro mixed: rates/dollar firmed, credit eased)
              </div>
              <div className="dn-thesis">
                The macro re-grow gate the lineage carries — HY OAS &gt; 2.78% OR
                10Y &gt; 4.53% as the condition to re-grow a downside tail —
                stays UN-FIRED, but the two legs split this print: 10Y firmed +6bp
                to 4.49% (now just 4bp from the gate, vs 10bp on 06-18), while HY
                OAS eased −8bp to 2.63% (15bp from its gate, moving away). The
                reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE at 4.49%.
                The macro tape firmed on the dollar / real-rate side (DXY EXTREME
                RISK-OFF, TIPS +9bp) and drained Fed liquidity, a headwind — but
                the gate is not the trigger for the roll-over, which is
                endogenous; a macro tail is not the right instrument for a floor
                test the dealer gamma already amplifies.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · gate un-fired both legs</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (next Tier-1 print)</span><span className="dn-lvl-v bear">10Y &gt; 4.53% close (currently 4.49%, 4bp to fire, firmed +6bp on day) OR HY OAS &gt; 2.78% close (currently 2.63%, 15bp to fire, eased −8bp)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — TRUE at 4.49%; awaits a BTC-internal pivot to translate</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set
                as the levels drift, not backtested breakpoints. If the 10Y leg
                fires (it is closest), a downside tail would be reassessed in a
                separate future note (trigger / invalidation / R defined there) —
                and note the dealer strip is already net-short-gamma −111.1M into
                26JUN, so any such tail would be additive to existing dealer
                amplification rather than a clean independent hedge.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · ON HOLD — SM feed DEAD ~6.9 days, the framework cannot be assessed on its own data</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — ON HOLD (continuation of 06-16 / 06-18): the SM feed is frozen ~166.5h, the re-stack signature cannot be read this cut
              </div>
              <div className="dn-thesis">
                The squeeze-cycle / re-stack-hostile-2 framework reads discrete
                SM steps (Δshort &gt; 0 + Δlong &lt; 0 same minute) as
                continuation signatures; its calendar prior (the BJ 13–15
                cadence) was falsified on 05-31 and it has run as a no-prior
                watchlist since. It cannot be assessed today for the simplest
                reason: the SM feed is dead. long_btc / short_btc / net_btc have
                been constant since 2026-06-12 01:36Z (~166.5h), so there are no
                SM deltas to read. The 06-16 note put this ON HOLD at ~94.5h, the
                06-18 note at ~142h; it remains ON HOLD at ~166.5h.{' '}
                <span className="dn-em">No signature can print from a frozen
                feed; the framework is dark until the SM data resumes.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v bear">ON HOLD · SM feed frozen ~166.5h (since 2026-06-12 01:36Z) · no SM deltas computable</span></div>
                <div><span className="dn-lvl-k">frozen value (not a read)</span><span className="dn-lvl-v">long 13,532.4 / short 50,825.7 / net −37,293.3 — byte-for-byte constant, carried only to mark the dead feed</span></div>
                <div><span className="dn-lvl-k">resume condition</span><span className="dn-lvl-v">SM feed resumes writing fresh long_btc/short_btc → re-assess re-stack signatures from the first fresh deltas</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a dead feed is not a quiet feed. The
                desk does not infer &ldquo;no re-stack&rdquo; from a frozen
                triple — it infers nothing. The squeeze-cycle read is suspended,
                not negative, and the first fresh SM deltas after the feed
                resumes are the re-arm point.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions <span className="dn-roman">VI · LIVE TAPE OUTAGE still the operative condition · the floor test is here (spot +0.78%, wicked intraday) vs the 26JUN amplifier · scout doubly blocked · macro 10Y gate 4bp away</span>
            </h2>

            <p>
              Of the 06-18 conditions: the live tape did <em>not</em> come back —
              it is 24h deader, now 41.4h frozen with the SM feed at ~6.9 days;
              the 200W floor watch has gone from a +3.7% buffer to a live test
              (+0.78%, intraday wick through); the scout stayed stood down and
              un-assessable; the macro re-grow gate stayed un-fired but the 10Y
              leg crept to within 4bp; the squeeze-cycle stayed ON HOLD on a
              deader feed. The dominant condition is unchanged and now sharper:{' '}
              <em>the desk is positioning-blind into a floor test inside a
              deepened net-short-gamma book</em>. The conditions today re-set
              around the continuing outage, the price decision between the floor
              and the 26JUN amplifier, and the doubly-blocked scout:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Live tape restored (PRIMARY operational)</td><td className="bull">live_db.json resumes writing fresh rows beyond 2026-06-17 06:43Z AND the SM triple updates off its 06-12 01:36Z freeze</td><td>re-read funding / OI / flow / SM in full; only then can the scout or squeeze-cycle be evaluated — until then the positioning dimension is unknown, and it has now been blind two notes running</td></tr>
                <tr><td>200W floor lost (cycle-regime escalation)</td><td className="bear">sustained weekly close &lt; $62,438 (W-SMA200 floor); a daily close below is an early warning, the 06-18 intraday wick to $62,232 is NOT the break</td><td>breaks the 200W floor — separate reassessment; the 06-15 reclaim thesis is falsified, the down-leg resumes with the dealer map (−111.1M, 26JUN −55.30M) amplifying into opex</td></tr>
                <tr><td>Floor holds / relief bounce (price pre-condition for scout)</td><td className="bull">1h close &gt; flip $64,641 AND &gt; D-SMA20 $64,533, with MTF resonance off bearish — the 4h TD9 BUY / 1h golden cross are relief inside the bearish read, not a reclaim</td><td>NOT a scout trigger by itself — only re-opens scout evaluation IF the live tape is also restored; on a blind tape a relief bounce off the floor is watched, not traded</td></tr>
                <tr><td>26JUN26 monthly amplifier (7.3 DTE) + 19JUN 0DTE today</td><td className="bear">−55.30M dominant chunk; today&rsquo;s 19JUN 0DTE −42.35M settles 08:00Z ≈8h after snap; near strip 20JUN/21JUN/22JUN all negative; spot on the $63k put wall</td><td>downside is into deepening short gamma toward opex with no near-dated positive dampener; watch only, no short instruction in this note (any future setup would define its own trigger / invalidation / R)</td></tr>
                <tr><td>Macro tail re-grow (10Y leg 4bp away)</td><td className="bear">10Y &gt; 4.53% (4bp to fire, firmed +6bp on day) OR HY OAS &gt; 2.78% (15bp to fire, eased −8bp)</td><td>no hedge instruction in this note — a gate fire (10Y is closest) would be reassessed in a separate future note; note any such tail would be additive to existing dealer short gamma −111.1M</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.49%</td><td>standalone filter true; needs a BTC-internal pivot AND a live tape to translate to a scout long</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (ON HOLD)</td><td className="stale">SM feed dead ~166.5h; no deltas computable</td><td>suspended, not negative — re-arm on the first fresh SM deltas after the feed resumes</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the $62,438 floor holds on a weekly-close basis while the
                desk is still positioning-blind — because spot is already on it,
                the 06-18 low wicked through it, the dealer book is −111.1M net
                short with the heaviest walls at and below the floor, and the
                26JUN −55.30M amplifier plus today&rsquo;s 19JUN 0DTE −42.35M sit
                right ahead; if the weekly close loses $62,438 the down-leg
                resumes into the amplifier with no positioning confirmation
                available, and if instead the floor holds and price reclaims the
                flip on a blind tape the desk still cannot scout the bounce
              </span>. Until the tape is restored this note runs as written: the
              book is flat, the scout is doubly blocked (bearish MTF + blind
              tape), the macro tail gate is un-fired with the 10Y leg 4bp away,
              the squeeze-cycle is suspended, and the 200W floor watch is the one
              live level — now a live test, not a distant marker. Price and MTF
              rolled fully over from the 06-15 reclaim; the dealer book deepened
              to net-short-gamma below the flip with the 26JUN monthly amplifier
              and a same-day 0DTE below; macro firmed on the dollar / real-rate
              side while BTC lagged a still-rising TradFi complex. The right read
              for the next 24h is{' '}
              <em>defensive and patient — respect the floor and the amplifier,
              fix the tape before reading positioning, and do not pre-position
              into a floor test you cannot see being defended</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 — post codex hostile audit ·{' '}
              <code>audits/2026-06-19-desk-note.md</code>
            </span>
            <b>Status:</b> this is the <b>v2</b> revision, promoted after the
            STAGE B codex hostile audit. The codex verdict (primary, owns the
            publish gate) was{' '}
            <b>PASS-WITH-NOTES — no CRITICAL / MAJOR / MINOR / NIT
            publish-gating findings</b> in the v1 draft; its notes were
            environmental/provenance only (full <code>next build</code> Node-blocked;
            archived 00:06Z snapshot artifacts must remain the pin). The
            supplementary ask-deepseek numeric recompute (per runbook §5; codex
            remains primary, GLM is not an auditor) confirmed every self-contained
            arithmetic check and raised one <b>MINOR</b> cross-block item, which
            STAGE C adjudicated against source and resolved. Per-finding
            grep-closure (pattern searched · hits before → hits after):{' '}
            <b>MINOR (deepseek) — Fed net liquidity z-score reconciliation:</b>{' '}
            the prose stated &ldquo;episodic z −2.42&rdquo; while the macro table
            column &ldquo;regime z&rdquo; showed &ldquo;+0.05&rdquo; with no
            reconciliation. Adjudicated against{' '}
            /opt/desk-note/snapshots/2026-06-19-0006/macro_dashboard.html: the
            NETLIQ row carries BOTH values (regime z +0.05, episodic z −2.42,
            flag &ldquo;neutral episodic 突发&rdquo;) — they are two distinct
            metrics (direction-adjusted regime standing vs the |episodic z| &gt;
            1.5 day-change surprise filter), so both numbers are source-accurate
            and the correct fix is to clarify, not to change a number (a number
            change would introduce source drift). Patterns searched on the full
            EN file: <code>episodic z</code>, <code>regime z</code>,{' '}
            <code>−2.42</code>, <code>+0.05</code>, <code>5.849</code>. Unreconciled
            standalone &ldquo;episodic z −2.42&rdquo; prose claim: hits before 1 →
            hits after 0 (the prose now states regime z +0.05 alongside episodic z
            −2.42 and names them as distinct metrics, matching the table). Other
            −2.42 / +0.05 hits confirmed unrelated (GEX dist-to-flip −2.43/−2.66;
            PLAT 7d return −2.42%). <b>RESOLVED.</b> No CRITICAL or MAJOR findings
            existed, so no further grep-closure loop was required.{' '}
            <span className="dn-em">post codex hostile audit</span> — the
            self-contained arithmetic codex / ask-deepseek re-attacked and cleared:
            funding −0.006608 × 1095 = −7.24% ann (NOT ×100); GEX dual-ref flip
            $64,641, spot −2.66% (62,924 / 64,641 − 1) and idx −2.43% (63,071 /
            64,641 − 1), both below; net GEX −111.1M with the by-expiry strip ≈
            −104.3M (basis gap ~−6.8M, surface-grid vs exact-spot, not a missing
            expiry); SM cut fraction declared NON-COMPUTABLE (frozen feed, no
            |Δ|/prior_net asserted); full MA matrix vs parquet last-bar close
            $62,924.20 (2026-06-19 00:05Z) with the full-history W-SMA200 floor
            $62,438 (355 weekly W-MON bars) recomputed and disclosed as ~$208
            above the $62,230 06-16/06-18 pin; 30D RV 42.76% (30 returns / 31
            closes; 43.42% 29-return alt) vs IV 44.9% across 976 instruments
            (chain-median, not a tradable spread); cross-asset BTC 7d −1.10% vs NQ
            +2.78% = −3.88pt lag; macro Tier-1 (10Y 4.49%, TIPS 2.23%, HY OAS
            2.63%, DXY 100.81, Fed net liq $5.849T); claims-vs-loaded-data (NTT /
            max-pain / strike-IV / BTC-NQ framework-only; JGB monthly do-not-lean);
            the requireViewer gating pattern (first statement, path
            /desk/2026-06-19); EN/ZH numeric parity (ZH companion authored in
            STAGE C, zero drift vs this v2). Full finding record:{' '}
            <code>audits/2026-06-19-desk-note.md</code>.{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1; a full{' '}
            <code>next build</code> is environment-blocked on the Node version
            gate (lineage), so <code>npx --no-install tsc --noEmit</code> is the
            build proxy — STAGE E owns the final build verification.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among
            principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and
            not personalized to any recipient&rsquo;s circumstances. Numbers
            reflect a single atomic snapshot (2026-06-19 00:06Z) with
            section-level provenance disclosed in the manifest band above;{' '}
            <em>critically, the live derivatives tape was frozen for 41.4h at
            snapshot time (last row 2026-06-17 06:43Z) and the smart-money
            positioning feed has been dead ~6.9 days</em>, so all funding, OI,
            flow and positioning figures are explicitly last-known / stale or
            non-computable and flagged as such; the macro panel render is
            2026-06-18 22:15Z (~1.85h before snapshot). Price, MTF, GEX and
            cross-asset are fresh. This is the v2 revision, post codex hostile
            audit (PASS-WITH-NOTES; one deepseek MINOR adjudicated and resolved).
            Levels, sizes, and conditions are
            illustrative of the desk&rsquo;s process, not standing
            recommendations. Past correlation, gamma, and positioning patterns do
            not bind future tape. Derivatives carry the risk of total loss and,
            where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The reclaim is fully handed back and price is on the floor, in a
                deeper short-gamma book, with the tape still dark. Hold the
                $62,438 line on the weekly close, watch the 26JUN amplifier, fix
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
            v2 · 2026-06-19T00:33Z · 2026-06-19 00:06Z snapshot · post codex
            hostile audit · sources: live_db.json (FROZEN 06-17 06:43Z) ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
