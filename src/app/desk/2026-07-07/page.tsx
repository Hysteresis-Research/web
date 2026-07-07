import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-07-07 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-07-07',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-07-07' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260707() {
  await requireViewer('/desk/2026-07-07');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-07-07 · v2</span>
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
              <span className="dn-big">$64,063.38</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.55%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-07-07 00:05Z ·{' '}
              <span className="dn-em">
                TWO STRUCTURAL FIRSTS THIS CUT, AND THEY POINT THE SAME WAY. First, the live
                derivatives tape is BACK — after 431.9h dark (~18 days) the OKX monitor RESUMED
                writing at 2026-07-05 06:38Z (~6.5h after the 07-05 note froze), so this is the
                FIRST read of live funding / OI / flow / SM positioning in ~18 days. Second, the
                200W floor was RECLAIMED on the WEEKLY close — the 07-06 weekly bar settled
                $64,023.60, the FIRST weekly close back above the floor since the 06-29 break was
                confirmed, so the recovery test the 07-05 note flagged as &ldquo;~1 day out&rdquo;
                has PRINTED. The floor itself STEPPED UP to $62,864 (was $62,643) as the resolved
                07-06 week entered the 200-week window, and spot $64,063.38 holds +1.91% above it
                with THREE MAs beneath (D-SMA20 $61,943 / D-EMA20 $62,684 / the floor). BUT the
                first live positioning read is a SHORT-COVER / DE-GROSSING shape, not broad fresh
                demand: price +0.55% on 24h while OI SHRANK −2,544 BTC (−2.42% vs prior OI), taker-flow and
                futures CVD net-SOLD (−2,368 over 24h), funding is PINNED near its +0.01 cap
                (+10.95% ann, 56.7% cap occupancy, ZERO negative rows — flipped from −7.24% at the
                freeze), retail eased to 57.01% long (−1.76pt) and the SM book resumed net-LONG but
                near-FLAT (+2,348.85, Δnet −9.67 / a 0.41% cut, both sides grew — a two-sided
                gross-up). The dealer book DEEPENED to +157.8M net-LONG-gamma (was +110.2M — the
                deepest of the run), the near-dated 7JUL26 amplifier FLIPPED POSITIVE to +21.20M
                (was −5.12M — the downside pocket is GONE, no negative expiry remains) and the $60k
                put wall eased to −12.27M; spot sits +3.84% above the flip $61,697 (was +2.68% above
                $61,405). The MTF engine FLIPPED BACK to a 6/9 cycle-MOMENTUM / trend-continuation
                regime (JT&ge;0, from cycle-reversal on 07-05) with a 4h above-water golden cross
                just-printed — but it STILL carries TWO overbought ⚡TD9 SELLs (1h AND 12h) at the
                highs with top divergences on 15m / 30m / 4h, a persistent stall signature into the
                reclaim, offset by a 1M ⚡TD9 BUY and a bottom-div cluster (8h / 12h / 1d). Cross-asset
                stays IDIOSYNCRATIC (mean |r| 0.201) and BTC&rsquo;s 7d return +7.10% LEADS NQ
                −0.35% by +7.45pt and SP500 +1.41% by +5.69pt, BTC now 3rd of the complex. Macro
                held risk-off on the z-panel (10Y 4.49%, TIPS EXTREME, DXY 100.85 EXTREME, MOVE 65.8
                back this cut) with the HY OAS credit re-grow gate UN-fired (2.74% &lt; 2.78%, 4bp to
                go). The desk reads the weekly-close reclaim of the floor and the restored tape as
                the two turns the lineage has waited on — but the first live read says short-cover /
                de-grossing, not demand, the engine still flashes two overbought TD9 SELLs at the
                highs, and a confirmed structural recovery has printed its FIRST weekly close while
                the demand behind it is unconfirmed.
              </span>
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · LIVE · writing fresh rows through the 00:05Z anchor (RESUMED 2026-07-05 06:38Z)</td>
                  <td className="dn-flag">
                    <b>RESTORED</b> · after a 431.9h outage (last frozen row 2026-06-17 06:43Z) the
                    OKX monitor RESUMED writing at <b>2026-07-05 06:38Z</b> — ~6.5h after the 07-05
                    00:05Z note froze, so this is the <b>FIRST live positioning read in ~18 days</b>.
                    Funding / OI / CVD / basis / retail / taker-flow / SM are CURRENT this cut, read
                    over live 24h windows ending at the 00:05Z anchor. The SM sub-feed
                    (long_btc / short_btc / net_btc) is <b>LIVE again</b> too and resumed net-LONG
                    (+2,348.85), a different basis from the frozen −37,293.3 triple the 06-19 → 07-05
                    notes carried — the squeeze-cycle framework comes OFF HOLD. First live read is a
                    short-cover / de-grossing shape (see meta tiles + §I)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-07 00:01Z scan</td>
                  <td className="dn-flag">
                    fresh (~4 min before anchor) · rolling latest-file artifact,
                    archived verbatim at
                    /opt/desk-note/snapshots/2026-07-07-0005/ · in-progress bars · scan
                    spot $64,024, 24h +0.71%, 24h H/L $64,692 / $61,297, qVol $15.27B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-07 00:01 UTC panel (874 instruments)</td>
                  <td className="dn-flag">
                    fresh (~4 min before anchor) · Deribit idx $64,297 ($246 above
                    parquet spot $64,051.30) · 874 instruments · net GEX{' '}
                    <b>+157.8M</b> (net LONG gamma, DEEPENED from +110.2M on the 07-05
                    note — the deepest of the run) · flip $61,697 (spot +3.84% ABOVE, from
                    +2.68% on 07-05) · the front is 7JUL26 0.3 DTE at{' '}
                    <b>+21.20M</b> (settles ~08:00Z today) — the near-dated downside amplifier that
                    read <b>−5.12M</b> on 07-05 has <b>FLIPPED POSITIVE</b>, and NO expiry is
                    negative this cut — the heaviest positive ceiling is <b>$65k +27.81M</b> and the
                    put wall eased to <b>$60k −12.27M</b> (was −16.69M) · spot $64,063.38 sits between
                    the $64k +23.70M and $65k +27.81M ceilings · IV median 42.2%
                    · P/C 0.57 (Call OI 234,143 / Put OI 133,482)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-07 00:01Z
                  </td>
                  <td className="dn-flag">fresh · 7d 1h bars · 22 assets · 167 rows · regime IDIOSYNCRATIC (mean |r| 0.201, ticked up from 0.193 on 07-05 but still well below the 0.25 idiosyncratic threshold — and BTC&rsquo;s 7d return +7.10% LEADS the NQ −0.35% by +7.45pt and SP500 +1.41% by +5.69pt; BTC is 3rd of the complex)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-06 22:16Z render</td>
                  <td className="dn-flag">
                    ~1.82h render lag (weekend — little changed vs 07-05) · 10Y <b>4.49%</b>{' '}
                    (+1.0bp, 4bp from the 4.53% gate), TIPS <b>2.26%</b> (+1.0bp, EXTREME
                    RISK-OFF), HY OAS{' '}
                    <b>2.74%</b> (−1.0bp — stays BELOW the 2.78% re-grow gate, the gate STILL
                    does not fire, 4bp to go) · MOVE bond vol <b>65.8</b> (back this cut, was
                    unavailable on 07-05; z−0.87, loose) · the FX legs: <b>DXY 100.85</b> (−0.01 day,
                    still EXTREME) and{' '}
                    <b>USD/JPY 161.41</b> (−0.04 day) · Fed net liq $5.843T (source panel delta
                    +0.053T, source regime tight / episodic) · NFCI neutral (stale 10d)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-07-07 00:05Z (close $64,051.30)</td>
                  <td className="dn-flag">
                    fresh kline (exchange OHLC) · offsets recomputed vs the parquet last-bar
                    close, cross-checked against the live spot $64,063.38 · the displayed weekly
                    ladder uses the 2023→ subset (185 weekly bars), so no W-SMA200 row
                    (W-EMA200 $67,224 seeds from available history); the 200W floor is
                    recomputed directly from the full-history glob —
                    <b>357 completed weekly W-MON bars</b> (2019→present, INCLUDING the
                    resolved 07-06 week and excluding the in-progress 07-13 week) —{' '}
                    = <b>$62,864</b>, <b>STEPPED UP from $62,643</b> on the 07-05 note (the resolved
                    07-06 weekly close $64,023.60 — above the old floor — entered the 200-week
                    window). <b>THREE MAs sit beneath spot — D-SMA20 $61,943 (+3.42%), D-EMA20
                    $62,684 (+2.20%) and the 200W floor $62,864 (+1.91%) — the floor is support
                    beneath spot</b> · weekly_200sma.json absent this cut, so the ratio percentile /
                    last-event stay unsourced, not fabricated
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
              <span className="dn-v bull">+10.95% (LIVE · pinned near cap)</span>
              <span className="dn-src">live_db raw funding ~+0.01 × 1095 = +10.95% ann (NOT ×100) · LIVE at the 00:05Z anchor and PINNED near the +0.01 cap — 56.7% cap occupancy (817 / 1,441 rows at the cap) and ZERO negative rows over the 24h+1m inclusive sampled window (mean +9.81% ann, min +5.38%, max +10.95%). This is a full FLIP from the −7.24% frozen row the 06-19 → 07-05 notes carried: the resumed book is one-sidedly long, longs paying shorts at the cap — a leverage-long tilt into the reclaim</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · vs 07-05</span>
              <span className="dn-v bull">−7.24% → +10.95% (tape restored)</span>
              <span className="dn-src">the 07-05 note carried the frozen −7.24% row; the tape resumed 07-05 06:38Z and funding is now live and pinned near the +0.01 cap (+10.95% ann) with zero negative rows over 24h · the leverage gate flips from shorts-paying-longs (at the freeze) to longs-paying-shorts at the cap — a one-sided long book on the resumed tape</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−2,544 BTC (−2.42%) · LIVE window</span>
              <span className="dn-src">live_db oi_btc 102,683.66 at the 00:05Z anchor vs ~24h prior over a live 24h+1m inclusive sampled window · OI SHRANK −2,544 BTC into a +0.55% price move — falling open interest on a rising price is the de-grossing / short-cover fingerprint, not fresh long build</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">57.01 / 42.99 · LIVE (−1.76pt)</span>
              <span className="dn-src">live_db `mkt_long_pct` 57.01% at the anchor, down −1.76pt from 58.77% ~24h ago · retail TRIMMED longs into the reclaim (long% falling as price rose) — consistent with the de-grossing read, not retail chasing the bounce</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+2,348.85 LONG · FEED LIVE</span>
              <span className="dn-src">long 15,173.79 − short 12,824.93 = +2,348.85 net-LONG · the SM feed RESUMED (was frozen −37,293.3 since 06-12) and reads net-LONG this cut; net held near-flat over 24h (was +2,358.52, Δnet −9.67) while BOTH sides grew (long +~771, short +~781, rounded) — a two-sided gross-up, not a directional add · SM stayed net-long throughout the resumed window (range +1,153 / +3,682)</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">−9.67 net · 0.41% (near-flat)</span>
              <span className="dn-src">|Δnet| / prior_net = 9.67 / 2,358.52 = 0.41% — a near-flat SM book over 24h · the squeeze-cycle / re-stack framework comes OFF HOLD now the feed is live, but the first read shows no Δshort&gt;0 + Δlong&lt;0 same-minute hostile-2 signature — both sides grew together</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.2% / 31.86%</span>
              <span className="dn-src">GEX median IV across 874 instruments (00:01Z, fresh) vs 30D close-to-close RV 31.86% off parquet — chain richness ~+10.34pt over realised (was ~+7.32pt on 07-05 — richness WIDENED as RV kept falling); RV fell (was 34.58% on 07-05; the alternative 29-return window reads 32.39%) · IV is a chain-median across 874 instruments, NOT a tradable spread</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+3.84% (above · extended)</span>
              <span className="dn-src">flip $61,697 (was $61,405 · +$292) · vs live spot $64,063.38 (64,063.38 / 61,697 − 1 = +3.835%) / GEX file Deribit idx $64,297 (64,297 / 61,697 − 1 = +4.214%, file reads +4.2%) — both references ABOVE the flip, EXTENDED from +2.68% above on 07-05 · net GEX +157.8M (net LONG gamma, DEEPENED from +110.2M — the deepest of the run) · the near-dated 7JUL26 downside amplifier FLIPPED POSITIVE (+21.20M, was −5.12M) — no negative expiry remains</span>
            </div>
          </div>
          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                Two structural firsts, and they point the same way. First, the live derivatives
                tape is BACK — after 431.9h dark the OKX monitor resumed writing at 2026-07-05
                06:38Z, so this is the first read of live funding / OI / flow / SM in ~18 days.
                Second, the 200W floor was RECLAIMED on the WEEKLY close — the 07-06 weekly bar
                settled $64,023.60, the first weekly close back above the floor since the 06-29
                break confirmation, so the recovery test the 07-05 note flagged as ~1 day out has
                printed. The floor stepped up to $62,864 and spot holds +1.91% above it with three
                MAs beneath. BUT the first live positioning read is a SHORT-COVER / DE-GROSSING
                shape, not broad fresh demand: price +0.55% on 24h while OI SHRANK −2.42%,
                taker-flow / futures-CVD net-SOLD, funding is PINNED near its +0.01 cap (+10.95%
                ann, zero negative rows), retail eased −1.76pt and the SM book resumed net-LONG but
                near-flat (two-sided gross-up). The dealer book deepened to +157.8M net-LONG-gamma
                — the deepest of the run — the near-dated 7JUL26 amplifier FLIPPED POSITIVE
                (+21.20M) and NO expiry is negative; spot pushed +3.84% above the flip. The MTF
                engine flipped BACK to a 6/9 cycle-momentum / trend-continuation regime with a 4h
                golden cross just-printed, but STILL carries TWO ⚡TD9 SELLs (1h AND 12h) at the
                highs with top divs on 15m / 30m / 4h — a persistent stall signature into the
                reclaim
              </span>. Spot prints{' '}
              <span className="dn-tag bull">$64,063.38, +0.55% on 24h</span> at the 00:05Z live
              tape (the parquet last bar reads $64,051.30; the MTF scan +0.71% on its own window),
              up from the 07-05 note spot $63,048.50 — the lineage carried the bounce from a
              daily-close reclaim to a WEEKLY-close reclaim of the floor. The 200W break was{' '}
              <span className="dn-tag bear">CONFIRMED on the 06-29 weekly close $60,224.70</span>,
              the 06-15 reclaim thesis was FALSIFIED, and this cut the{' '}
              <span className="dn-tag bull">07-06 weekly close $64,023.60 is the FIRST weekly close
              back above the floor</span> since that break — the structural recovery has printed its
              first settlement. The floor{' '}
              <span className="dn-tag">STEPPED UP to $62,864</span> (was $62,643) as the resolved
              07-06 week entered the 200-week window, and spot holds{' '}
              <span className="dn-tag bull">+1.91% above it with three MAs beneath — D-SMA20 $61,943
              (+3.42%), D-EMA20 $62,684 (+2.20%) and the floor $62,864 (+1.91%)</span>. The dealer
              book{' '}
              <span className="dn-tag bull">deepened to +157.8M net-LONG-gamma</span> (the deepest of
              the run), the{' '}
              <span className="dn-tag bull">near-dated 7JUL26 amplifier flipped POSITIVE to
              +21.20M</span> (was −5.12M — no negative expiry remains) and the $60k put wall eased to
              −12.27M; spot sits between the $64k +23.70M and $65k +27.81M positive ceilings and
              pushed +3.84% above the flip $61,697.{' '}
              <span className="dn-em">
                But the tape that came back does not confirm demand — it fingerprints
                de-grossing: OI fell −2,544 BTC (−2.42%) into a +0.55% price move, taker-net and
                futures-CVD net-sold over 24h (−2,368), funding pinned near its long cap with zero
                negative rows, retail trimmed longs −1.76pt, and the SM book held near-flat net-long
                on a two-sided gross-up. Rising price on falling OI with net-sell flow and one-sided
                long funding is the classic short-cover / de-grossing signature, not fresh demand
                absorbing the break.
              </span>{' '}
              MTF held its headline at{' '}
              <span className="dn-tag">4 bull / 3 bear / 3 neutral</span> and the regime classifier{' '}
              <span className="dn-tag bull">flipped BACK to 6/9 cycle-momentum / trend-continuation
              (JT&ge;0)</span> from cycle-reversal — a 4h above-water golden cross just-printed — but
              the engine still carries{' '}
              <span className="dn-tag bear">TWO ⚡TD9 SELLs (1h AND 12h) at the highs</span> with top
              divs on 15m / 30m / 4h, a persistent overbought signature. Macro held risk-off on the
              z-panel: 10Y 4.49% (4bp from its gate), HY OAS 2.74% (stays BELOW the 2.78% re-grow
              gate — un-fired, 4bp to go), DXY 100.85 EXTREME, MOVE 65.8 back this cut.{' '}
              <span className="dn-em">
                The two turns the lineage has waited on both printed this cut — the tape is live and
                the floor is reclaimed on the weekly close — but the first live read says short-cover
                / de-grossing rather than demand, and the engine still flashes two overbought TD9
                SELLs at the highs. The book stays flat: the recovery has its first weekly close, the
                gamma/price map is the most constructive of the run, but the demand behind the
                reclaim is unconfirmed on the very tape that just came back, and the desk will not
                chase.
              </span>{' '}
              The scout&rsquo;s price pre-condition stays TRUE and strengthens (spot +3.84% above the
              flip, three MAs beneath, above the reclaimed floor) and its DATA block finally LIFTS —
              but the first live read and two TD9 SELLs keep the scout stood down. No shorts, no
              scout, no fresh hedge.
            </p>
            <p>
              BTC prints <span className="dn-tag">$64,063.38</span> at the live tape (00:05Z),{' '}
              <span className="dn-tag bull">+0.55%</span> on 24h (vs the $63,710.01 read ~24h
              prior; the parquet last bar reads $64,051.30 and the MTF scan +0.71% on its own
              00:01Z window — the spread is the reference window, not a data conflict), inside a{' '}
              <span className="dn-tag">$64,502.01 / $61,401.19</span> 24h range (per the live tape;
              the MTF scan tags $64,692 / $61,297). The Deribit index reads $64,297 at 00:01Z and the
              MTF scan spot is $64,024 — so the freshest spot is well-corroborated across four
              independent fresh sources (live tape $64,063.38, parquet kline $64,051.30, GEX Deribit
              index $64,297, MTF scan $64,024), and for the first time in ~18 days the live_db tape
              that normally supplies it is one of them.{' '}
              <span className="dn-signal">The structural read has moved from a confirmed break with
              the bounce RECLAIMING THE FLOOR ON A DAILY CLOSE (07-05 note) to that same confirmed
              break now RECLAIMED ON THE WEEKLY CLOSE — the 07-06 weekly bar closed $64,023.60, the
              first weekly close back above the floor since 06-29, and the in-progress 07-07 bar
              $64,051.30 holds above it</span>: the 06-29 weekly close $60,224.70 confirmed the
              break, the daily closes walked back up off the 06-30 low (six consecutive up-closes
              07-01 → 07-06 bar-none), and the 07-06 weekly close settled above the floor to print the
              recovery&rsquo;s first weekly settlement. Per the framework the break was confirmed at
              the weekly-close level and the reclaim thesis falsified — this cut does not un-do that
              history, but it does add the first weekly close back above the floor, the escalation
              the recovery path required.{' '}
              <span className="dn-em">
                The one structural positive of the lineage was broken at the weekly-close level and
                the reclaim thesis died; this cut spot has closed back above the floor on the WEEKLY
                close for the first time since, holds three MAs beneath it, and the book is the
                deepest long-gamma of the run with no negative expiry — the most constructive
                gamma/price/structure map the lineage has carried. But the tape that just came back
                fingerprints the move as short-cover / de-grossing, not demand, and the engine
                flashes two overbought TD9 SELLs at the highs — so the recovery has printed its first
                weekly close while the demand behind it stays unconfirmed.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · LIVE TAPE RESTORED (resumed 2026-07-05 06:38Z after 431.9h) — FIRST live positioning read in ~18 days · funding PINNED near the long cap (+10.95% ann, zero negative rows), OI SHRANK −2.42% into a +0.55% price move, taker/CVD net-SOLD, retail eased −1.76pt, SM resumed net-LONG but near-flat on a two-sided gross-up · the first live read is short-cover / de-grossing, NOT broad fresh demand — the reclaim of the floor is structurally constructive but positioning-unconfirmed on the very tape that just returned</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important source of this note — the live derivatives tape — is
                BACK, for the first time in ~18 days
              </span>. The OKX monitor resumed appending rows to live_db.json at{' '}
              <span className="dn-tag bull">2026-07-05 06:38Z</span>, ~6.5h after the 07-05 00:05Z
              note froze at 425.4h stale, ending a{' '}
              <span className="dn-tag">431.9h outage</span> (last frozen row 2026-06-17 06:43Z). Every
              dimension the live tape carries — funding, open interest, spot / futures CVD, perp
              basis, retail long%, taker-net, big-print flow, aggressor skew, and the smart-money
              positioning triple — is{' '}
              <span className="dn-em">current this cut, read over live 24h windows ending at the
              00:05Z anchor</span>. The read the desk has been blind to since mid-June is finally
              available — and the first thing it says is that the bounce that reclaimed the floor is
              a short-cover / de-grossing move, not fresh demand.{' '}
              <span className="dn-em">
                The positioning dimension is no longer unknown: it is knowable, and it reads
                de-grossing.
              </span>
            </p>

            <p>
              The live 24h windows fingerprint de-grossing on every leg. Funding is{' '}
              <span className="dn-tag bull">+10.95% ann</span> (raw ~+0.01 × 1095), PINNED near its
              +0.01 cap — 56.7% cap occupancy (817 / 1,441 rows at the cap), mean{' '}
              <span className="dn-tag">+9.81% ann</span> over the window, range{' '}
              <span className="dn-tag">+5.38% / +10.95%</span>, and{' '}
              <span className="dn-tag bull">ZERO negative rows</span> — a full flip from the −7.24%
              frozen row the lineage carried, now a one-sidedly long book with longs paying shorts at
              the cap. Open interest is{' '}
              <span className="dn-tag bear">102,683.66 BTC, −2,544 over the live 24h window
              (−2.42%)</span> — OI SHRANK into a +0.55% price move. Retail{' '}
              <span className="dn-tag bear">mkt_long_pct 57.01%</span>, down −1.76pt from 58.77% ~24h
              ago — retail TRIMMED longs as price rose. The windowed flow is net-sell on the
              aggressor: over 24h price{' '}
              <span className="dn-tag bull">+0.55%</span>, OI{' '}
              <span className="dn-tag bear">−2,544</span>, spot-CVD{' '}
              <span className="dn-tag bear">−702</span>, futures-CVD{' '}
              <span className="dn-tag bear">−2,368</span>, taker-net{' '}
              <span className="dn-tag bear">−2,368</span>, big-print net{' '}
              <span className="dn-tag bear">−49.8</span> (633 big prints); the 4h window turns
              two-sided (price +0.73%, OI −1,337, spot-CVD +687, taker-net −301, big-net +134) and
              the 1h is soft (price −0.32%, OI −80, taker-net −379). Perp basis{' '}
              <span className="dn-tag bear">−$79 discount</span> to spot (1h mean −$45, 4h mean −$47,
              24h mean −$58, 24h range −$444 / +$45.7); aggressor skew{' '}
              <span className="dn-tag">+10.1</span> now (1h mean +0.87, range −35.3 / +34.9).{' '}
              <span className="dn-em">
                Read together: rising price on FALLING open interest, net-sell taker / CVD flow, a
                perp discount to spot, retail trimming longs and funding pinned one-sidedly long is
                the textbook short-cover / de-grossing signature — shorts covering and gross leverage
                coming off, not fresh demand lifting price. The reclaim of the floor is real on
                price, but the tape says it is being carried by covering, not accumulation.
              </span>
            </p>

            <p>
              The smart-money feed is{' '}
              <span className="dn-tag bull">LIVE again</span> and resumed on a net-LONG basis:{' '}
              <span className="dn-tag">long 15,173.79 / short 12,824.93 / net +2,348.85</span> — a
              different basis entirely from the frozen{' '}
              <span className="dn-tag">−37,293.3</span> triple the 06-19 → 07-05 notes carried (which
              had been byte-for-byte constant since 2026-06-12 01:36Z). Over the live 24h window SM
              net held near-FLAT — it was +2,358.52 ~24h ago, so{' '}
              <span className="dn-tag">Δnet −9.67, a 0.41% cut</span> — while BOTH sides GREW (long
              +~771, short +~781, rounded): a{' '}
              <span className="dn-tag">two-sided gross-up</span>, not a directional add. SM stayed
              net-long throughout the resumed period (range +1,153 / +3,682).{' '}
              <span className="dn-em">
                The squeeze-cycle / re-stack framework comes OFF HOLD now the feed is live — but the
                first read shows no hostile-2 signature (no Δshort&gt;0 + Δlong&lt;0 same-minute step;
                both sides grew together), and the book is net-long and near-flat. The SM dimension is
                constructive-neutral: net-long, no fresh short re-stack, no directional conviction in
                the first 24h. It corroborates the de-grossing read rather than a demand read — gross
                leverage rebuilt two-sided while directional net barely moved.
              </span>
            </p>
            <h2 className="dn-sec">
              Structure <span className="dn-roman">II · price/MTF FRESH · multi-TF resonance mixed 4 bull / 3 bear / 3 neutral (unchanged headline) · net read higher-TF bearish · short-term bounce · regime FLIPPED BACK to 6/9 cycle-MOMENTUM / trend-continuation (JT&ge;0, from cycle-reversal on 07-05) · 4h above-water golden cross just-printed (DIF +607.4, strong bull-continuation) · BUT the engine STILL carries TWO ⚡TD9 SELLs (1h AND 12h) at the highs with top divs on 15m / 30m / 4h · 1M TD9 buy + a higher-TF bottom-div cluster (8h/12h/1d) · THREE MAs beneath spot (D-SMA20 / D-EMA20 / the 200W floor) and spot has RECLAIMED the $62,864 floor on the WEEKLY close — the first weekly close above since the 06-29 break</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map is fresh, its headline unchanged at 4 bull / 3 bear / 3 neutral, and
                the regime classifier flipped BACK to cycle-momentum / trend-continuation — a 4h
                above-water golden cross just-printed — but the engine STILL prints TWO ⚡TD9 SELLs
                (1h AND 12h) at the highs with top divs on 15m / 30m / 4h, a persistent
                overbought-reversal signature into the reclaim
              </span> — with the dealer map and now the restored tape, the dimension the desk can
              trust today, and this cut it reads as a trend-continuation regime carrying an
              overbought stall at the highs even as spot holds above the reclaimed floor. The 00:01Z
              scan tags{' '}
              <span className="dn-tag">4 bull / 3 bear / 3 neutral across 10 frames</span>, net read{' '}
              <em>higher-timeframe bearish · short-term bounce, ⚠ higher-TF bottom-div cluster
              (8h / 12h / 1d)</em>. The regime line reads{' '}
              <span className="dn-tag bull">6/9 cycle-momentum / trend-continuation regime
              (JT&ge;0)</span> (was 5/9 cycle-reversal on 07-05), so the classifier flipped BACK to
              trend-continuation — the engine now leans with the move rather than against it. The
              constructive prints are the{' '}
              <span className="dn-tag">4h golden cross just-printed (water-up, DIF +607.4, strong
              bull-continuation)</span> and the mid-frames 30m / 1h / 8h / 12h / 1d holding
              below-water golden crosses, plus a{' '}
              <span className="dn-tag">1M ⚡TD9 BUY</span> and a higher-TF bottom-div cluster on{' '}
              <span className="dn-tag">8h / 12h / 1d</span>. The stall signature is the overbought
              print this cut:{' '}
              <span className="dn-tag bear">TWO ⚡TD9 SELLs persist on the 1h AND 12h (overbought
              reversal hint, at the highs)</span> with{' '}
              <span className="dn-tag bear">top (bearish-reversal) divergences on 15m / 30m / 4h</span>
              {' '}— momentum stretched at the highs while the trend frame holds. Cloud: 15m / 30m /
              1h / 4h / 8h / 1M above cloud, 12h → 1w below; the{' '}
              <span className="dn-tag bear">1w carries a below-water death cross (2 bars, DIF
              −5,878.7)</span>.{' '}
              <span className="dn-em">
                Straight read: the regime flipped back to trend-continuation with a 4h golden cross
                and a below-water golden-cross stack on the mids, so the bounce has momentum on the
                engine — but two ⚡TD9 SELLs and top divs on three fast/mid frames flag it overbought
                at the highs, and the higher frames (12h → 1w) stay below cloud with a 1w death
                cross. With the 200W floor now reclaimed on the weekly close but the engine flashing
                two overbought reversal prints, there is momentum to respect but no clean, un-stalled
                entry to chase the reclaim long against — the constructive prints (4h golden cross, 1M
                TD9 buy, bottom-div cluster) are offset by two overbought TD9 SELLs at the highs.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,020</td><td className="num">55.0</td><td className="bear">death (water-up) 6b</td><td className="bull">above ↓62.9k 33b</td><td>Buy 7</td><td>BEAR hid · BEAR reg (top) · BULL hid · BULL reg (bottom)</td></tr>
                <tr><td>30m</td><td className="num">64,022</td><td className="num">59.6</td><td className="bull">golden (water-dn) 17b</td><td className="bull">above ↓63.2k 17b</td><td>Buy 3</td><td>BEAR reg (top)</td></tr>
                <tr><td>1h</td><td className="num">64,022</td><td className="num">60.7</td><td className="bull">golden (water-dn) 8b</td><td className="bull">above ↓63.2k 9b</td><td className="bear">⚡TD9 SELL</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">64,022</td><td className="num neut">65.3</td><td className="bull">golden (water-up) 1b</td><td className="bull">above ↓60.5k 22b</td><td>Sell 3</td><td>BEAR reg (top)</td></tr>
                <tr><td>8h</td><td className="num">64,022</td><td className="num neut">66.4</td><td className="bull">golden (water-dn) 17b</td><td className="bull">above ↓62.6k 8b</td><td>Sell 3</td><td>BULL reg (bottom)</td></tr>
                <tr><td>12h</td><td className="num">64,024</td><td className="num neut">60.8</td><td className="bull">golden (water-dn) 11b</td><td className="bear">below ↑64.1k 91b</td><td className="bear">⚡TD9 SELL</td><td>BULL reg (bottom)</td></tr>
                <tr><td>1d</td><td className="num">64,029</td><td className="num neut">53.2</td><td className="bull">golden (water-dn) 6b</td><td className="bear">below ↑66.1k 36b</td><td>Sell 6</td><td>BULL reg (bottom)</td></tr>
                <tr><td>3d</td><td className="num">64,024</td><td className="num bear">43.2</td><td className="neut">—</td><td className="bear">below ↑70.9k 12b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">64,024</td><td className="num bear">38.8</td><td className="bear">death (water-dn) 2b</td><td className="bear">below ↑98.7k 23b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">64,037</td><td className="num bear">43.8</td><td className="neut">— (DIF water-up)</td><td className="bull">above ↓47.0k 29b</td><td>TD9 BUY</td><td>BULL reg (bottom)</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (08:01 Beijing; rolling latest
                    file, archived verbatim at
                    /opt/desk-note/snapshots/2026-07-07-0005/). Net read{' '}
                    <em>higher-timeframe bearish · short-term bounce, ⚠ higher-TF bottom-div
                    cluster (8h / 12h / 1d) (4 bull / 3 bear / 3 neutral)</em>; regime{' '}
                    <em>6/9 cycle-momentum / trend-continuation regime (JT&ge;0)</em>; active
                    divergences{' '}
                    <em>reversal: top div 15m / 30m / 4h, bottom div 15m / 8h / 12h / 1d; hidden
                    (continuation): BEAR hid 15m / 1h, BULL hid 15m / 1h</em>. Header alerts:{' '}
                    <em>⚡1h TD9 SELL @$64,022 and ⚡12h TD9 SELL @$64,024 — overbought reversal hint
                    (at the highs)</em>,{' '}
                    <em>⚡1M TD9 BUY @$64,037 — oversold reversal hint</em>,{' '}
                    <em>4h above-water golden cross (1 bar ago, DIF +607.4 — strong
                    bull-continuation)</em>,{' '}
                    <em>1w below-water death cross (2 bars ago, DIF −5,878.7)</em>. Scan spot
                    $64,024, 24h +0.71%, 24h H/L $64,692 / $61,297, qVol $15.27B. Closes are
                    in-progress bars; treat every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix took its third structural turn of the lineage: the 07-06 weekly close
              reclaimed the floor on a WEEKLY basis, and with the floor stepped up to $62,864 spot
              still holds{' '}
              <span className="dn-tag bull">three MAs beneath it — D-SMA20 $61,943 (+3.42%), D-EMA20
              $62,684 (+2.20%) and the 200W floor $62,864 (+1.91%) are now support</span>, the floor
              the nearest support beneath spot. Then the wall steps back up overhead — the
              cycle-proxy{' '}
              <span className="dn-tag bear">D-EMA50 $65,686 (−2.47%)</span>, then{' '}
              <span className="dn-tag bear">D-SMA50 $66,267 (−3.32%)</span>, then{' '}
              <span className="dn-tag bear">W-EMA200 $67,224 (−4.70%, seed)</span>, then a dense
              overhead band:{' '}
              <span className="dn-tag bear">D-EMA100 $69,335 (−7.60%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $69,934 (−8.39%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $70,214 (−8.76%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $70,936 (−9.69%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $71,169 (−9.99%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $72,505 (−11.64%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $73,532 (−12.88%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $74,496 (−14.00%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $75,417 (−15.05%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $75,857 (−15.55%)</span>. Far above and
              disused: W-EMA100 $79,654 (−19.58%), W-EMA50 $80,112 (−20.03%), W-SMA50 $87,479
              (−26.77%), W-SMA100 $88,427 (−27.55%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-07-07 00:05Z (close $64,051.30); offsets
                recomputed against the live spot $64,063.38. Displayed MA levels are $-rounded;
                offsets computed from exact series values. The displayed weekly ladder uses the
                2023→ subset (185 weekly bars), so W-SMA200 is non-computable there and W-EMA200
                $67,224 seeds from available history; the 200W floor $62,864 is recomputed separately
                from the full-history glob (357 completed weekly W-MON bars, INCLUDING the resolved
                07-06 week and excluding the in-progress 07-13 week — STEPPED UP from $62,643 on the
                07-05 note as the 07-06 weekly close $64,023.60 entered the window). Daily closes:
                06-29 $60,224.70 (the weekly close that confirmed the break), 06-30 $58,605.40 (the
                deepest of the run, −6.45%), 07-01 $59,999.60 (an up-close +$1,394.20), 07-02
                $61,540.60 (an up-close), 07-03 $62,565.50, 07-04 $63,114.80 (the first daily close
                back above the floor), 07-05 $63,617.10, 07-06 $64,023.60 (= the 07-06 WEEKLY close —
                the FIRST weekly close back above the floor since the break), 07-07 (in-progress,
                5-min bar) $64,051.30 (above the floor) — the floor break stays confirmed on 06-29,
                and the recovery has now printed its first weekly close back above the floor with
                three MAs beneath spot.
              </span>
            </p>
            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DEEPENED again to net-LONG-gamma aggregate +157.8M (was +110.2M on 07-05, +88.1M on 07-04) — the deepest of the run, the book DAMPENS the next move harder still · the front is 7JUL26 0.3 DTE +21.20M (settles ~08:00Z today) — the near-dated downside amplifier FLIPPED POSITIVE (was −5.12M) and NO expiry is negative this cut · the flip stepped $61,405 → $61,697 and spot pushed +3.84% above · heaviest ceiling $65k +27.81M, put wall eased $60k −12.27M (was −16.69M) · IV 42.2% · P/C 0.57</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book deepened its net-long-gamma posture again to the deepest of the
                run: aggregate gamma rose from +110.2M to +157.8M net-LONG-gamma, so the book
                dampens the next move harder still, the flip reclaim widened as spot pushed further
                above, the near-dated 7JUL26 amplifier FLIPPED POSITIVE and no expiry is negative —
                the most constructive gamma backdrop the lineage has carried
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+157.8M / 1%</span> (was +110.2M on 07-05, +88.1M on
              07-04, +60.7M on 07-03); the book has extended its net-long-gamma posture to its
              deepest of the run. The 0-γ flip stepped{' '}
              <span className="dn-tag">$61,405 → $61,697 (+$292)</span>, and spot $64,063.38 pushed
              further above it, so spot sits{' '}
              <span className="dn-tag bull">+3.84% above the flip</span>
              {' '}on spot-denominated math (64,063.38 / 61,697 − 1 = +3.835%); the GEX file&rsquo;s
              own &ldquo;dist to flip&rdquo; reads +4.2% off its Deribit-index $64,297 ($246 above
              parquet spot), which is{' '}
              <span className="dn-tag bull">+4.21%</span>
              (64,297 / 61,697 − 1 = +4.214%) — both references above the flip, EXTENDED from +2.68%
              above on 07-05. The wall map is a stack of positive ceilings bracketing spot with an
              eased put wall below: the heaviest is{' '}
              <span className="dn-tag bull">$65k +27.81M</span> (heaviest wall, a positive ceiling
              just overhead), with{' '}
              <span className="dn-tag bull">$64k +23.70M</span> bracketing spot below, then{' '}
              <span className="dn-tag bull">$66k +19.17M</span>,{' '}
              <span className="dn-tag bull">$70k +18.98M</span>,{' '}
              <span className="dn-tag bull">$68k +16.51M</span>,{' '}
              <span className="dn-tag bull">$63k +14.60M</span>,{' '}
              <span className="dn-tag bull">$67k +11.85M</span>,{' '}
              <span className="dn-tag bull">$80k +8.84M</span>,{' '}
              <span className="dn-tag bull">$64.5k +8.29M</span> overhead, with the eased put wall{' '}
              <span className="dn-tag bear">$60k −12.27M</span> below spot (eased from −16.69M on
              07-05).{' '}
              <span className="dn-em">
                Critically, the aggregate is deeply net-LONG-gamma at the deepest of the run, so the
                book dampens the next move harder rather than amplifying it — a deepening of the
                +110.2M book of 07-05 and the most constructive gamma backdrop the lineage has
                carried. Spot at $64,063.38 sits between the $64k +23.70M and $65k +27.81M positive
                ceilings (both above the reclaimed floor $62,864) and above the eased $60k −12.27M
                put wall; the positive ceiling stack caps the bounce just overhead, while the eased
                put wall below is the near shelf. And the near-dated downside amplifier FLIPPED
                POSITIVE this cut: 7JUL26 0.3 DTE +21.20M (was −5.12M on 07-05) — the short-dated
                downside pocket is GONE, and no expiry is negative. But the tape that just came back
                fingerprints the price move under it as de-grossing, not demand, and the MTF engine
                still flashes two TD9 SELLs at the highs.
              </span>{' '}
              By expiry the near-dated concentration is positive across the board with no negative
              expiry: the front is the positive 7JUL26{' '}
              <span className="dn-tag bull">0.3 DTE at +21.20M (settles ~08:00Z today — the amplifier
              that was −5.12M on 07-05 has flipped positive)</span>, then 8JUL26 1.3 +3.86M, 9JUL26
              2.3 +4.33M, 10JUL26 3.3{' '}
              <span className="dn-tag bull">+34.79M</span>, 17JUL26 10.3{' '}
              <span className="dn-tag bull">+25.04M</span>, 24JUL26 17.3 +6.76M, 31JUL26 24.3{' '}
              <span className="dn-tag bull">+43.49M (the heaviest forward)</span>, 28AUG26 52.3
              +6.81M, 25SEP26 80.3 +1.14M, 25DEC26 171.3 +2.84M, 26MAR27 262.3 +0.83M, 25JUN27 353.3
              +0.53M. The near-dated downside amplifier the 07-05 note had seen at 7JUL26 −5.12M has
              FLIPPED POSITIVE to +21.20M as it rolled to the front — the concentrated short-dated
              downside is gone. (The spot-referenced aggregate +157.8M is the net GEX at spot; the
              by-expiry rows are an independent decomposition and need not sum to it.)
            </p>

            <p>
              IV median across 874 instruments is{' '}
              <span className="dn-tag">42.2%</span> (up from 41.9% / 918 instruments
              on 07-05) against 30D close-to-close RV of{' '}
              <span className="dn-tag">31.86%</span> — chain-level richness{' '}
              <span className="dn-tag">~+10.34pt</span> over realised (was ~+7.32pt on 07-05 —
              richness WIDENED as RV kept falling), with RV falling further off its recent path
              (31.86% today vs 34.58% on 07-05 — the alternative 29-return window reads 32.39%). A
              chain-median across 874 instruments, <span className="dn-em">not</span>
              {' '}a tradable spread; expiry-/strike-level vega, skew and term structure remain
              not loaded; the vol read stays framework-only. RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log returns (= 31
              consecutive daily closes) anchored to parquet last bar 2026-07-07 00:05Z. P/C
              ratio <span className="dn-tag">0.57</span> (Call OI 234,143 / Put OI 133,482) — a
              call-heavy chain.
            </p>
            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · ~1.82h render (weekend — little changed vs 07-05) — 10Y steady 4.49% (4bp from the gate), TIPS 2.26% EXTREME RISK-OFF, HY OAS 2.74% −1.0bp stays BELOW its 2.78% re-grow gate (the gate STILL does not fire, 4bp to go), MOVE 65.8 BACK this cut (loose) · the FX legs held: DXY 100.85 (still EXTREME) and USD/JPY 161.41 · regime stays IDIOSYNCRATIC (mean |r| 0.201), BTC +7.10% LEADS NQ by +7.45pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro panel render is ~1.82h lagged over the weekend and the read is little
                changed: rates held at 4.49% (4bp from their gate) while the credit spread eased to
                2.74% and stayed BELOW its 2.78% re-grow gate — the gate stays un-fired, 4bp to go —
                and the dollar held 100.85 EXTREME, with MOVE back this cut at a loose 65.8
              </span>. Dashboard render is 2026-07-06 22:16Z, ~1.82h before the snapshot. US
              10Y nominal <span className="dn-tag">4.49% (+1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.56</span> — tight regime, RISK-OFF, 4bp from
              the 4.53% gate (the nearer leg). 10Y TIPS real{' '}
              <span className="dn-tag">2.26% (+1.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.59</span> — EXTREME RISK-OFF, among the tightest
              lines on the panel. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.21% (−1.0bp)</span>, regime z{' '}
              <span className="dn-tag">−0.25</span> — inflation expectations steady.
              HY OAS{' '}
              <span className="dn-tag bull">2.74% (−1.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−0.98</span> — credit loose on the z-regime; the
              spread eased −1bp and stays BELOW its 2.78% re-grow gate (it fired at 2.83% on 06-30
              and 2.80% on 07-01, then dropped under to 2.75% on 07-02, 2.74% on 07-03, 2.75% on
              07-04 → 07-05 — this cut it eases to 2.74%, so the credit re-grow gate STILL does not
              fire, 4bp to go). MOVE bond vol is{' '}
              <span className="dn-tag">65.8 (+0.36)</span>, regime z{' '}
              <span className="dn-tag bull">−0.87</span> — BACK this cut (was unavailable on 07-05)
              and reads loose. The dollar held EXTREME: DXY{' '}
              <span className="dn-tag bear">100.85 (−0.01 day)</span>, regime z{' '}
              <span className="dn-tag bear">+2.10</span>, still extreme. Fed
              net liquidity{' '}
              <span className="dn-tag">$5.843T</span>, regime z{' '}
              <span className="dn-tag">−0.60</span> — unchanged vs the 07-05 note; the source panel
              delta column reads +0.053T and classifies it tight / episodic.
              USD/JPY{' '}
              <span className="dn-tag">161.41 (−0.04 day)</span>, regime z +1.41; US-JP 10Y spread{' '}
              <span className="dn-tag">1.84% (+1.0bp)</span> narrow;
              USD/CNY <span className="dn-tag">6.7853</span>.{' '}
              <span className="dn-em">
                Net: the macro backdrop stayed risk-off on the z-panel (rates tight, TIPS EXTREME,
                dollar EXTREME) but the credit margin held loose — the credit leg eased to 2.74% and
                stays BELOW the 2.78% re-grow gate, so the credit gate that fired on the 06-28 →
                07-01 notes stays un-fired for a fifth cut (4bp to fire); the rates leg held at
                4.49% and sits 4bp from its 4.53% gate, the nearer leg. The reclaim-long rates
                filter (10Y &lt; 4.55%) stays TRUE at 4.49%. The macro read still reinforces rather
                than refutes the confirmed break — a broad risk-off z-panel — but the fresh moves
                are minimal over the weekend: the credit gate stays un-fired, MOVE returned at a
                loose 65.8, the correlation regime holds idiosyncratic with BTC leading NQ (see
                cross-asset below), and the dollar held extreme.
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
                <tr><td>US 10Y nominal</td><td className="num">4.49%</td><td className="num bear">+1.0bp</td><td className="num bear">+1.56</td><td className="bear">tight · RISK-OFF · 4bp from gate</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.26%</td><td className="num bear">+1.0bp</td><td className="num bear">+2.59</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.21%</td><td className="num bull">−1.0bp</td><td className="num">−0.25</td><td className="neut">steady</td></tr>
                <tr><td>HY OAS</td><td className="num">2.74%</td><td className="num bull">−1.0bp</td><td className="num bull">−0.98</td><td className="bull">stays BELOW the 2.78% re-grow gate — gate still does not fire (4bp to go)</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.504</td><td className="num">−0.00</td><td className="num">+0.40</td><td className="stale">weekly · neutral · stale 10d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">65.8</td><td className="num">+0.36</td><td className="num bull">−0.87</td><td className="bull">back this cut · loose</td></tr>
                <tr><td>DXY</td><td className="num">100.85</td><td className="num">−0.01</td><td className="num bear">+2.10</td><td className="bear">EXTREME RISK-OFF · held</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.843T</td><td className="num">+0.053T</td><td className="num">−0.60</td><td className="bear">tight · episodic · source panel delta +0.053T · unchanged vs the 07-05 note</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.41</td><td className="num bull">−0.04</td><td className="num bear">+1.41</td><td className="bear">firm</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.84%</td><td className="num">+1.0bp</td><td className="num bull">−1.00</td><td className="neut">narrow</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7853</td><td className="num">+0.02</td><td className="num">−1.49</td><td className="neut">—</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">monthly (66d)</td><td className="num bear">+2.59</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>
            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.201</span> — ticked up from the
              0.193 of 07-05 but still sitting{' '}
              <span className="dn-tag">below the 0.25 idiosyncratic threshold</span>, so the
              regime line stays{' '}
              <span className="dn-signal">IDIOSYNCRATIC — BTC stays decoupled by correlation
              from the broad cross-asset complex</span>, with its top ties a band of the
              metals / equity cluster near +0.30–0.40: PLAT{' '}
              <span className="dn-tag">+0.397</span>, PALL{' '}
              <span className="dn-tag">+0.382</span>, SILVER{' '}
              <span className="dn-tag">+0.306</span>, GOLD{' '}
              <span className="dn-tag">+0.290</span>, SP500{' '}
              <span className="dn-tag">+0.278</span>, NVDA{' '}
              <span className="dn-tag">+0.276</span>, COPPER{' '}
              <span className="dn-tag">+0.261</span>, URNM{' '}
              <span className="dn-tag">+0.260</span>, NQ{' '}
              <span className="dn-tag">+0.245</span>, TSLA{' '}
              <span className="dn-tag">+0.225</span>, JP225{' '}
              <span className="dn-tag">+0.154</span>, MSFT{' '}
              <span className="dn-tag">+0.118</span>, EUR{' '}
              <span className="dn-tag">+0.106</span>, with JPY{' '}
              <span className="dn-tag">−0.123</span> inverse and META{' '}
              <span className="dn-tag">+0.063</span>, AMZN{' '}
              <span className="dn-tag">+0.061</span>, AAPL{' '}
              <span className="dn-tag">+0.057</span>, GOOGL{' '}
              <span className="dn-tag">+0.034</span> near-zero. And the 7d performance keeps the
              BTC-vs-NQ framing constructive and lifts BTC&rsquo;s rank further: BTC leads NQ/SP500
              and is no laggard —{' '}
              <span className="dn-tag bull">BTC +7.10%</span> is ahead of NQ{' '}
              <span className="dn-tag bear">−0.35%</span> by +7.45pt (was a +2.80pt lead on 07-05)
              and ahead of SP500 +1.41% by +5.69pt, and BTC has climbed to 3rd of the
              complex (from 6th on 07-05) — the leaders are AAPL{' '}
              <span className="dn-tag bull">+11.26%</span> and the metal SILVER{' '}
              <span className="dn-tag bull">+7.39%</span>, then BTC{' '}
              <span className="dn-tag bull">+7.10%</span>, META{' '}
              <span className="dn-tag bull">+6.76%</span>, PALL{' '}
              <span className="dn-tag bull">+4.51%</span>, MSFT{' '}
              <span className="dn-tag bull">+4.30%</span>, GOLD{' '}
              <span className="dn-tag bull">+4.17%</span>, PLAT{' '}
              <span className="dn-tag bull">+3.70%</span>, GOOGL{' '}
              <span className="dn-tag bull">+3.65%</span>, NGAS{' '}
              <span className="dn-tag bull">+2.40%</span>, TSLA{' '}
              <span className="dn-tag bull">+2.10%</span>, AMZN{' '}
              <span className="dn-tag bull">+1.61%</span>, URNM{' '}
              <span className="dn-tag bull">+1.46%</span>, SP500{' '}
              <span className="dn-tag bull">+1.41%</span>, COPPER{' '}
              <span className="dn-tag bull">+1.21%</span>, EUR{' '}
              <span className="dn-tag bull">+0.25%</span>, NVDA{' '}
              <span className="dn-tag bull">+0.16%</span>, JPY{' '}
              <span className="dn-tag bull">+0.06%</span> green; the reds are the indices&rsquo;
              laggards and energy — NQ{' '}
              <span className="dn-tag bear">−0.35%</span>, JP225{' '}
              <span className="dn-tag bear">−0.17%</span>, BRENT{' '}
              <span className="dn-tag bear">−1.90%</span>, CL{' '}
              <span className="dn-tag bear">−2.23%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d return +7.10% vs NQ −0.35% is a lead of +7.45pt (was +2.80pt on
                07-05) — the gap to NQ WIDENED sharply as NQ turned negative on the week while BTC
                extended, and BTC has climbed to 3rd of the complex from 6th, well clear of laggard.
                The correlation regime holds idiosyncratic below the 0.25 line. So the sharp risk-off
                / worst-performer read the earlier lineage carried stays fully unwound — BTC is
                neither statistically coupled at the threshold nor a laggard this cut, and it now
                leads the index complex outright. The macro z-panel still reads risk-off (rates
                tight, DXY EXTREME), but the cross-asset regime stays loose and BTC keeps leading NQ,
                so the two cross-market reads still diverge from the tight macro z-panel.
              </span>{' '}
              JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag — do not lean on it.
            </p>
            <h2 className="dn-sec">
              Trade book <span className="dn-roman">V · book FLAT · 200W floor — BREAK CONFIRMED on the 06-29 weekly close ($60,224.70 &lt; $62,864, −4.20%), 06-15 reclaim thesis FALSIFIED; the 07-06 WEEKLY close RECLAIMED the floor ($64,023.60 &gt; $62,864, the FIRST weekly close above since the break), floor stepped up to $62,864, three MAs beneath spot · scout price pre-condition stays TRUE and STRENGTHENS (spot +3.84% above flip, three MAs beneath) and the DATA block finally LIFTS (tape restored) — but scout STILL stood down (first live read is short-cover / de-grossing, engine flashes TWO 1h/12h TD9 SELLs at the highs) · macro tail credit gate STILL un-fired (OAS 2.74% &lt; 2.78%) · squeeze-cycle OFF HOLD (SM feed live) — first read net-long, two-sided gross-up, no hostile-2 signature</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — but two of the conditions the lineage has waited
                on both cleared this cut: the 200W floor was RECLAIMED on the weekly close (07-06
                $64,023.60, the first weekly close above since the break) and the live tape came
                back after ~18 days. The binding constraint is no longer data integrity — the tape
                is live — it is what the live tape says: short-cover / de-grossing, not demand, with
                the engine still flashing TWO TD9 SELLs at the highs
              </span>. The 06-29 weekly close settled $60,224.70, −4.20% below the stepped-up $62,864
              floor — the break is CONFIRMED and the 06-15 reclaim thesis FALSIFIED, and nothing
              this cut un-does that history. But the 07-05 note recorded the bounce reclaiming the
              floor on a daily close; this cut it RECLAIMED the floor on the WEEKLY close — the 07-06
              weekly bar $64,023.60 is the first weekly close back above the floor since the break,
              the recovery&rsquo;s first settlement test, and the in-progress 07-07 bar $64,051.30
              holds above it with three MAs beneath spot. The dealer book deepened to +157.8M
              net-long-gamma (the deepest of the run), the near-dated 7JUL26 amplifier flipped
              positive and the put wall eased, and spot pushed to +3.84% above the flip. The
              scout&rsquo;s price pre-condition stays TRUE and strengthens, and its DATA block
              finally LIFTS — the live tape is back. But the desk still takes no scout: the first
              live read is a short-cover / de-grossing shape (OI −2.42% into a rising price,
              taker/CVD net-sell, funding pinned long, retail easing, SM net-flat/long), not demand
              absorbing the break, and the engine still carries TWO ⚡TD9 SELLs (1h AND 12h) at the
              highs with top divs on 15m / 30m / 4h — chasing the reclaim here, into a de-grossing
              tape and two overbought reversal prints, is a poor entry. No new short either: the book
              is the deepest long-gamma of the run with no negative expiry, the flip is +3.84%
              reclaimed, spot has reclaimed the floor on the weekly close with three MAs beneath, and
              a 1M TD9 buy still prints — a poor place to press short. The trade book today is: no
              shorts, no scout, no fresh hedge — the tape is back, and it says wait for demand to
              confirm the reclaim.
            </p>
            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch — BREAK CONFIRMED: the 06-29 weekly close $60,224.70 settled −4.20% below the stepped-up $62,864 floor (the weekly-close escalation FIRED), the 06-15 reclaim thesis is FALSIFIED; the 07-06 WEEKLY close RECLAIMED the floor ($64,023.60, +1.84% above), the FIRST weekly close above since the break — three MAs beneath spot, the recovery&rsquo;s first settlement printed</span>
              <div className="dn-trade-name">
                200W cycle floor watch — the break is CONFIRMED on the 06-29 weekly close and the recovery has RECLAIMED the floor on the WEEKLY close: floor $62,864 = full-history W-SMA200 (357 completed weekly bars, STEPPED UP from $62,643 as the resolved 07-06 week entered the window), 06-29 weekly close $60,224.70 (−4.20% below) confirmed the break, the 07-06 WEEKLY close $64,023.60 (+1.84% above) is the FIRST weekly close back above the floor since the break, the in-progress 07-07 bar $64,051.30 holds above, the 06-15 reclaim thesis FALSIFIED
              </div>
              <div className="dn-thesis">
                The 07-05 note recorded the break confirmed on the 06-29 weekly close with the
                bounce reclaiming the floor on a DAILY close. This cut the recovery reclaimed the
                floor on the WEEKLY close: the 07-06 weekly bar closed{' '}
                <span className="dn-tag bull">$64,023.60, +1.84% above the $62,864 floor</span>, the
                FIRST weekly close back above the floor since the 06-29 break, and the in-progress
                07-07 bar $64,051.30 holds above the floor with three MAs beneath spot. Per the
                framework an intraday wick is not the break, a daily close below is the early
                warning, and a sustained weekly close below is the escalation that breaks the floor
                and falsifies the 06-15 reclaim thesis — that weekly close printed on 06-29, so the
                break stays CONFIRMED and the reclaim thesis FALSIFIED. Symmetrically, the recovery
                the framework required — a sustained weekly close back above the floor — has now
                printed its FIRST settlement on 07-06.{' '}
                <span className="dn-em">The structural positive of the lineage was resolved against
                it at the weekly-close level on 06-29; this cut the recovery has printed its first
                weekly close back above the floor, the floor (stepped up to $62,864 as the 07-06 week
                entered the window) has flipped to support beneath spot, and three MAs sit beneath
                spot. But one weekly close is the first settlement, not a confirmed regime change —
                and the live tape that just returned reads the move behind it as short-cover /
                de-grossing, not demand. The recovery has its first weekly close; the demand behind
                it is unconfirmed.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor (STEPPED UP)</span><span className="dn-lvl-v">$62,864 = full-history W-SMA200, recomputed this cut from the 2019→ parquet glob (357 completed weekly W-MON bars, INCLUDING the resolved 07-06 week and excluding the in-progress 07-13 week); STEPPED UP from $62,643 on the 07-05 note as the 07-06 weekly close $64,023.60 entered the 200-week window · weekly_200sma.json absent so the ratio percentile / last-event stay unsourced, not fabricated</span></div>
                <div><span className="dn-lvl-k">break — CONFIRMED, floor RECLAIMED on the WEEKLY close</span><span className="dn-lvl-v bear">06-29 weekly close $60,224.70 settled −4.20% below the stepped-up floor — the break is confirmed; the 06-30 close $58,605.40 the deepest (−6.45%); then six consecutive up-closes (07-01 → 07-06) carried spot back through the line, the 07-04 $63,114.80 the first daily close above and the 07-06 $64,023.60 the FIRST weekly close above (+1.84%); the in-progress 07-07 bar $64,051.30 holds above</span></div>
                <div><span className="dn-lvl-k">reclaim thesis — FALSIFIED (superseded by the recovery)</span><span className="dn-lvl-v bear">the 06-15 reclaim thesis required the floor to hold on a weekly-close basis; the 06-29 weekly close below falsified it — the prior 22JUN weekly hold ($63,990) was superseded. The recovery is a NEW structure: a weekly close back above the floor, first printed 07-06</span></div>
                <div><span className="dn-lvl-k">recovery path (first weekly close PRINTED)</span><span className="dn-lvl-v bull">spot is +3.84% above the flip $61,697, +3.42% above D-SMA20 $61,943, +2.20% above D-EMA20 $62,684, +1.91% above the floor $62,864 (three MAs beneath spot) — the recovery required a sustained weekly close back above the floor; the 07-06 weekly close $64,023.60 is the first such settlement. A single weekly close is the first test, not a confirmed regime change — and it is a weekly close whose demand the live tape reads as de-grossing, not accumulation (see scout)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework, not a trade.</b> The floor watch is the single load-bearing
                live structural level. The break is confirmed on the 06-29 weekly close, the reclaim
                thesis is falsified, and the recovery has printed its first weekly close back above
                the floor (07-06 $64,023.60) with three MAs beneath — no position is taken on the
                watch: it sets the confirmed break (06-29 weekly close $60,224.70 &lt; $62,864), the
                recovery&rsquo;s first settlement (07-06 weekly close $64,023.60 &gt; $62,864), and
                the way-stations (flip $61,697 → D-SMA20 $61,943 → D-EMA20 $62,684 → floor $62,864,
                now all beneath spot), and the desk will not chase a bounce long into a de-grossing
                tape with the engine flashing two TD9 SELLs at the highs, nor press short a confirmed
                break whose recovery has printed its first weekly close above the floor into the
                deepest long-gamma book of the run with the flip reclaimed and a 1M TD9 buy printed.
              </div>
            </div>
            <div className="dn-trade">
              <span className="dn-side long">long · scout · STILL STOOD DOWN · price pre-condition stays TRUE and STRENGTHENS (spot +3.84% above the flip, three MAs beneath, above the reclaimed floor), the book DEEPENED to the deepest net-long-gamma of the run AND the DATA block finally LIFTS (tape restored); but the FIRST live read is short-cover / de-grossing (OI −2.42%, taker/CVD net-sell, funding pinned long, retail easing, SM net-flat) + the engine flashes TWO 1h/12h TD9 SELLs at the highs — no demand confirmation, so the scout stays stood down</span>
              <div className="dn-trade-name">
                Cover-bounce scout — the flip reclaim stays TRUE (spot +3.84% above) with three MAs beneath spot, the book at the deepest net-long-gamma of the run, and the DATA block finally LIFTS as the tape returns; but the first live read is short-cover / de-grossing rather than demand, and the engine still flashes two overbought reversal prints (1h AND 12h TD9 SELL) at the highs — the scout stays stood down pending demand confirmation
              </div>
              <div className="dn-thesis">
                The 06-30 → 07-05 notes saw the scout&rsquo;s price pre-condition flip TRUE and
                extend while the DATA block stayed DOWN (tape frozen). This cut the price
                pre-condition stays TRUE and strengthens further — spot is{' '}
                <em>+3.84% above the flip</em> $61,697 (which stepped +$292), has reclaimed the floor
                on the weekly close, and holds THREE MAs beneath it (D-SMA20 $61,943 / D-EMA20
                $62,684 / the floor $62,864), while the dealer book deepened to +157.8M
                net-long-gamma — the deepest of the run — with no negative expiry. And the DATA block
                that blocked the scout for ~18 days finally LIFTS: the live tape is back. But the
                scout stays stood down, and this cut the reason is the tape itself: (1) the first
                live positioning read is a{' '}
                <em>short-cover / de-grossing shape</em>, not demand — OI SHRANK −2,544 BTC (−2.42%)
                into a +0.55% price move, taker-net and futures-CVD net-SOLD (−2,368 over 24h),
                funding is pinned near its long cap (zero negative rows), retail trimmed longs
                −1.76pt, and SM held net-flat/long on a two-sided gross-up. That is covering and
                de-leveraging carrying price, not accumulation absorbing the break. (2) The engine
                carries no clean constructive trigger — the regime flipped back to trend-continuation
                and a 4h golden cross printed, but TWO ⚡TD9 SELLs (1h AND 12h, overbought reversal
                hint) persist at the highs with top divs on 15m / 30m / 4h.{' '}
                <span className="dn-em">A scout long is a bet on demand absorbing the break; the tape
                that just came back says the reclaim is being carried by short-cover / de-grossing,
                not demand, and the engine flashes two overbought reversal prints at the highs. The
                price leg is open and the data block has lifted — but the first read of the restored
                tape is exactly the read that keeps the scout stood down. Re-evaluate when the live
                tape shows OI BUILDING on up-moves with taker-net turning positive — demand, not
                covering — and the engine clears its overbought prints.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">stood down · no entry · price pre-condition stays TRUE and strengthens (spot +3.84% above the flip, three MAs beneath, above the reclaimed floor) and the book is the deepest net-long-gamma of the run, and the DATA block LIFTED (tape restored) — but the first live read is short-cover / de-grossing (not demand) and the engine flashes two persistent 1h/12h TD9 SELLs; re-evaluate on demand confirmation (OI building on up-moves + taker-net turning positive) AND a cleared engine</span></div>
                <div><span className="dn-lvl-k">technical pre-condition</span><span className="dn-lvl-v bear">flip $61,697 reclaim (TRUE — spot +3.84% above) AND D-SMA20 $61,943 / D-EMA20 $62,684 reclaim (TRUE — two daily MAs beneath spot) AND floor $62,864 weekly-close reclaim (TRUE — 07-06 weekly close $64,023.60 above) AND a confirming engine print (NOT true — 4 bull / 3 bear / 3 neutral, a 4h golden cross and 1M TD9 buy offset by TWO persistent 1h/12h TD9 SELLs and top divs on 15m / 30m / 4h; regime flipped back to trend-continuation but overbought at the highs)</span></div>
                <div><span className="dn-lvl-k">data pre-condition (LIFTED — but reads de-grossing)</span><span className="dn-lvl-v bear">live tape RESTORED (resumed 2026-07-05 06:38Z, live through the anchor) AND SM feed LIVE (net-LONG +2,348.85, off its 06-12 freeze) — both now hold, so the block that stood since mid-June has LIFTED. But the first read is de-grossing, not demand: OI −2.42%, taker/CVD net-sell, funding pinned long, retail easing, SM net-flat two-sided gross-up. The data block is no longer operational — the demand block is</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> no scout entry without demand confirmation on the live tape. The
                tape is back, the price leg is open and improving, the book is the deepest long-gamma
                of the run and the floor is reclaimed on the weekly close — but the first live read
                is short-cover / de-grossing, and the desk does not size a cover-bounce long into a
                tape that is showing the bounce being covered, not bought, with two overbought TD9
                SELLs at the highs. The data block that blocked the scout for ~18 days has lifted;
                the demand block (OI building on up-moves, taker-net positive) and the engine block
                (two persistent overbought reversals) now bind. The re-arm is the first live 24h
                window that shows OI rising on a positive price move with taker-net turning positive
                — demand absorbing, not shorts covering.
              </div>
            </div>
            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — credit leg STILL un-fired: HY OAS 2.74% &lt; the 2.78% gate (eased −1.0bp this cut, stays below, 4bp to fire), 10Y leg 4bp away (4.49% vs 4.53% gate); both legs hold under their triggers</span>
              <div className="dn-trade-name">
                Downside put-spread — re-grow credit gate STILL un-fired (OAS 2.74% &lt; 2.78%), the rates leg 4bp away; no hedge added (the dealer book deepened to the deepest net-long-gamma of the run, the near-dated amplifier flipped positive and no expiry is negative, so the endogenous downside structure eased further)
              </div>
              <div className="dn-thesis">
                The macro re-grow gate the lineage carries — HY OAS &gt; 2.78% OR 10Y &gt;
                4.53% as the condition to re-grow a downside tail — is STILL un-fired on the
                credit leg: HY OAS{' '}
                <em>2.74%</em>, −1bp this cut and holding below the gate (it fired at 2.83% on
                06-30 and 2.80% on 07-01, then dropped under to 2.75% / 2.74% / 2.75% across 07-02 →
                07-05 — this cut it eases to 2.74%, 4bp to fire), while the 10Y held at 4.49% and
                sits 4bp away — the nearer leg. So both legs are off their triggers. The reclaim-long
                rates filter (10Y &lt; 4.55%) stays TRUE at 4.49%. The macro tape is still a risk-off
                impulse on the z-panel (rates tight, TIPS EXTREME, dollar EXTREME, MOVE back at a
                loose 65.8), but a macro tail is not the right instrument for an
                endogenous-cum-idiosyncratic floor break, and the dealer book has deepened to the
                deepest net-long-gamma of the run with the near-dated amplifier flipped positive and
                no expiry negative, so the aggregate endogenous downside structure eased further this
                cut — which, with the credit gate un-fired, is a reason to stand the tail down, not
                to add it.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bull">no position · credit gate STILL un-fired on a close basis · HY OAS 2.74% &lt; 2.78% (−1.0bp, stays below, 4bp to fire), 10Y leg 4bp away</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (un-fired)</span><span className="dn-lvl-v bull">HY OAS &gt; 2.78% close — STILL UN-FIRED at 2.74% (4bp below the gate) · OR 10Y &gt; 4.53% close (currently 4.49%, 4bp to fire — the nearer leg, but still off)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — TRUE at 4.49%; a live tape now supports translation, but awaits a BTC-internal demand pivot</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as the levels
                drift, not backtested breakpoints. The credit leg holds under the gate
                (OAS 2.74% &lt; 2.78%) and the rates leg sits 4bp away; with neither leg fired there
                is no tail to grow this cut; note the dealer book has deepened to the deepest
                net-long-gamma of the run, the near-dated amplifier flipped positive and no expiry is
                negative, so the aggregate endogenous downside structure eased further — the tail
                stands down.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · OFF HOLD — the SM feed is LIVE again (resumed 2026-07-05 06:38Z); first read is net-LONG (+2,348.85), near-flat (Δnet −9.67 / 0.41%) on a two-sided gross-up — NO hostile-2 re-stack signature this cut</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — OFF HOLD (was ON HOLD 06-16 → 07-05): the SM feed resumed 2026-07-05 06:38Z and the re-stack signature can be read again — the first read shows no hostile-2 step (both sides grew together, net near-flat and long)
              </div>
              <div className="dn-thesis">
                The squeeze-cycle / re-stack-hostile-2 framework reads discrete SM steps
                (Δshort &gt; 0 + Δlong &lt; 0 same minute) as continuation signatures; its
                calendar prior (the BJ 13–15 cadence) was falsified on 05-31 and it has run as
                a no-prior watchlist since. It was ON HOLD 06-16 → 07-05 for the simplest reason —
                the SM feed was dead. This cut the feed is LIVE again (resumed 2026-07-05 06:38Z),
                so the framework comes OFF HOLD and can be read. The first read shows{' '}
                <em>no hostile-2 signature</em>: SM net resumed at{' '}
                <span className="dn-tag">+2,348.85 net-LONG</span>, held near-FLAT over the live 24h
                window (Δnet −9.67, a 0.41% cut) while BOTH sides GREW (long +~771, short +~781, rounded) — a
                two-sided gross-up, not the Δshort&gt;0 + Δlong&lt;0 re-stack step the framework
                watches for.{' '}
                <span className="dn-em">The framework is live again but quiet: the book is net-long,
                near-flat and grossing up two-sided, with no re-stack signature in the first 24h.
                The re-arm is a discrete same-minute Δshort&gt;0 + Δlong&lt;0 step on the now-live
                feed.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v bull">OFF HOLD · SM feed LIVE (resumed 2026-07-05 06:38Z) · deltas computable again — first read shows no hostile-2 step</span></div>
                <div><span className="dn-lvl-k">live read (not a signature)</span><span className="dn-lvl-v">long 15,173.79 / short 12,824.93 / net +2,348.85 — net-LONG, near-flat over 24h (Δnet −9.67), both sides grew (two-sided gross-up); SM net-long throughout the resumed window (range +1,153 / +3,682)</span></div>
                <div><span className="dn-lvl-k">re-arm condition</span><span className="dn-lvl-v">a discrete Δshort &gt; 0 + Δlong &lt; 0 same-minute step on the live feed → flag a re-stack (hostile-2) continuation signature; none present this cut</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the feed is live but no signature has printed — the
                desk does not infer a re-stack from a two-sided gross-up, nor read direction into a
                near-flat net. The squeeze-cycle read is re-armed and watching, not triggered; the
                first discrete same-minute Δshort&gt;0 + Δlong&lt;0 step is the signal.
              </div>
            </div>
            <h2 className="dn-sec">
              Decision conditions <span className="dn-roman">VI · LIVE TAPE RESTORED (resumed 2026-07-05 06:38Z after 431.9h) — the operative condition CLEARED, first live read is short-cover / de-grossing · 200W floor BREAK CONFIRMED on the 06-29 weekly close ($60,224.70 &lt; $62,864, −4.20%), 06-15 reclaim thesis FALSIFIED, the 07-06 WEEKLY close RECLAIMED the floor ($64,023.60, first weekly close above since the break) · flip EXTENDED (spot +3.84% above), book DEEPENED to +157.8M net-LONG-gamma (deepest of the run) and the near-dated amplifier FLIPPED POSITIVE (no negative expiry) · scout price pre-condition TRUE and strengthens, DATA block LIFTED — but the first live read is de-grossing and the engine flashes TWO 1h/12h TD9 SELLs at the highs · macro credit gate STILL un-fired (OAS 2.74%), regime stays IDIOSYNCRATIC as BTC LEADS NQ by +7.45pt</span>
            </h2>

            <p>
              Of the 07-05 conditions: the live tape <em>did</em> come back — it resumed 2026-07-05
              06:38Z after 431.9h dark, so the operational block that ran ~18 days has CLEARED,
              and the first live read is a short-cover / de-grossing shape; the 200W floor break
              stays CONFIRMED on the 06-29 weekly close ($60,224.70, −4.20% below the stepped-up
              $62,864 floor) and the 06-15 reclaim thesis stays FALSIFIED; the floor STEPPED UP to
              $62,864 (the resolved 07-06 week entered the window); the recovery the 07-05 note
              flagged as ~1 day out PRINTED — the 07-06 weekly close $64,023.60 is the first weekly
              close back above the floor since the break, and the in-progress 07-07 bar $64,051.30
              holds above it with three MAs beneath spot; the flip was EXTENDED (spot +3.84% above vs
              +2.68% on 07-05) as the flip stepped to $61,697; the dealer book DEEPENED from +110.2M
              to +157.8M net-LONG-gamma — the deepest of the run — and the near-dated downside
              amplifier FLIPPED POSITIVE (7JUL26 0.3 DTE +21.20M, was −5.12M) with no negative
              expiry remaining; the scout&rsquo;s price pre-condition stays TRUE and strengthens and
              its DATA block LIFTED, but the first live read is de-grossing and the engine flipped
              back to trend-continuation while still flashing TWO 1h/12h TD9 SELLs at the highs; the
              macro re-grow gate stays un-fired on the credit leg (OAS 2.74% &lt; 2.78%) while the
              rates leg held at 4.49% (4bp away); the correlation regime stayed IDIOSYNCRATIC as
              BTC&rsquo;s 7d return LED NQ by +7.45pt; the squeeze-cycle came OFF HOLD on the live
              feed with no hostile-2 signature. The dominant condition has changed: <em>the desk is
              no longer positioning-blind — the tape is live, into a 200W floor break CONFIRMED on
              the weekly close, a recovery that has printed its first weekly close back above the
              floor with three MAs beneath, and a book at the deepest net-long-gamma of the run — but
              the first live read of that restored tape is short-cover / de-grossing, not demand, and
              the engine flashes two overbought reversal prints at the highs</em>. The conditions
              today re-set around the restored tape, the confirmed weekly-close break, the
              weekly-close reclaim of the floor, and the de-grossing first read:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Live tape RESTORED (PRIMARY operational — CLEARED)</td><td className="bull">live_db.json RESUMED writing 2026-07-05 06:38Z after 431.9h; funding / OI / flow / SM are live through the 00:05Z anchor; SM triple live off its 06-12 freeze (net +2,348.85 LONG)</td><td>the ~19-note operational block has CLEARED — funding / OI / flow / SM read live; the first read is short-cover / de-grossing (OI −2.42% into +0.55% price, taker/CVD net-sell, funding pinned long, retail easing, SM net-flat/long) — the reclaim of the floor is positioning-UNCONFIRMED as demand; watch for OI building on up-moves + taker-net positive</td></tr>
                <tr><td>200W floor — BREAK CONFIRMED, floor RECLAIMED on the WEEKLY close</td><td className="bear">06-29 weekly close $60,224.70 settled −4.20% below the stepped-up $62,864 floor — the break is confirmed; six consecutive up-closes (07-01 → 07-06), the 07-04 $63,114.80 the first daily close above and the 07-06 $64,023.60 the FIRST weekly close above (+1.84%); in-progress 07-07 bar $64,051.30, above the floor</td><td>the floor break is confirmed at the weekly-close level and the recovery has printed its first weekly close back above the floor — the floor ($62,864) has flipped to support beneath spot; no position taken</td></tr>
                <tr><td>200W reclaim thesis — FALSIFIED (recovery first weekly close PRINTED)</td><td className="bear">the 06-15 reclaim thesis required a weekly-close hold of the floor; the 06-29 weekly close below falsified it. The recovery is a new structure — a weekly close back above the floor — first printed 07-06 $64,023.60</td><td>the old reclaim thesis is dead; the recovery has printed its first weekly close above the floor $62,864 — one settlement, not yet a confirmed regime change; watch whether the next weekly close holds above and whether demand confirms on the live tape</td></tr>
                <tr><td>Flip reclaim (scout price pre-condition) — STRENGTHENED, DATA block LIFTED</td><td className="bull">spot $64,063.38 +3.84% above flip $61,697, +3.42% above D-SMA20 $61,943, +2.20% above D-EMA20 $62,684 (two daily MAs beneath spot), +1.91% above the floor $62,864 (three MAs beneath spot)</td><td>the price pre-condition stays TRUE and strengthens and the DATA block LIFTED (tape restored) — but the first live read is de-grossing, not demand, and the engine flashes TWO 1h/12h TD9 SELLs at the highs; the scout stays stood down pending demand confirmation, not data</td></tr>
                <tr><td>Dealer book — DEEPENED net-LONG-gamma (deepest of the run), near-dated amplifier FLIPPED POSITIVE</td><td className="bull">aggregate GEX +157.8M (was +110.2M on 07-05, +88.1M on 07-04); the front is 7JUL26 0.3 DTE at +21.20M (settles ~08:00Z today, flipped from −5.12M); NO expiry is negative; spot sits between the $64k +23.70M and $65k +27.81M positive ceilings and above the eased $60k −12.27M put wall</td><td>the dealer book now DAMPENS the next move harder still in aggregate and the endogenous downside structure eased further (no negative expiry); watch only, no instruction (the aggregate is the most constructive of the run but the live tape reads de-grossing and the engine flashes two reversals at the highs)</td></tr>
                <tr><td>Macro tail re-grow (credit leg un-fired)</td><td className="bull">HY OAS 2.74% &lt; 2.78% (STILL un-fired, −1.0bp, 4bp to fire) OR 10Y &gt; 4.53% (4bp to fire, held 4.49%) — the FX legs held (DXY 100.85, USD/JPY 161.41), MOVE back at a loose 65.8</td><td>no hedge instruction in this note — with neither leg fired there is no tail to grow; note the book has deepened to the deepest net-long-gamma of the run, the near-dated amplifier flipped positive and no expiry is negative, so the endogenous downside structure eased further</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.49%</td><td>standalone filter true; a live tape now supports translation, but needs a BTC-internal demand pivot (not de-grossing) to translate to a scout long</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (OFF HOLD)</td><td className="bull">SM feed LIVE (resumed 2026-07-05 06:38Z); net +2,348.85 LONG, near-flat (Δnet −9.67), two-sided gross-up — no hostile-2 step</td><td>re-armed and watching, not triggered — flag a re-stack on the first discrete Δshort&gt;0 + Δlong&lt;0 same-minute step on the live feed</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the reclaim of the floor — which printed the first weekly close back above
                the floor on 07-06 ($64,023.60), deepened the book to +157.8M net-long-gamma with no
                negative expiry and pressed spot to +3.84% above the flip and +1.91% above the
                stepped-up floor, with the 200W break already confirmed — is demand or short-cover,
                and now, for the first time in ~18 days, the restored tape ANSWERS: the first live
                read is de-grossing, not demand
              </span>. The dealer book that deepened to +157.8M net-LONG-gamma (spot +3.84% above the
              flip) now dampens the next move harder still in aggregate — and the near-dated
              amplifier flipped positive to 7JUL26 +21.20M with no negative expiry; the structural
              positive — the 200W floor — stays confirmed broken on the weekly close and the 06-15
              reclaim thesis stays dead, but the recovery has printed its first weekly close back
              above the floor with three MAs beneath it, and the tape that just returned reads the
              move behind it as short-cover / de-grossing rather than demand — with the engine
              flipped back to trend-continuation but still flashing two overbought reversal prints at
              the highs. Now the tape is restored this note runs as written: the book is flat, the
              scout&rsquo;s price block stays TRUE and strengthens and its data block has lifted but
              the first live read is de-grossing with two 1h/12h TD9 SELLs at the highs, the macro
              tail credit gate stays un-fired below its line (OAS 2.74%), the squeeze-cycle is
              re-armed but quiet, and the 200W floor watch is the one live structural level — a floor
              confirmed broken on the weekly close but now RECLAIMED on the weekly close and flipped
              to support beneath spot, the recovery having printed its first settlement. Price
              reclaimed the floor on the weekly close and the flip extended, the book deepened
              long-gamma to the deepest of the run with no negative expiry, and the correlation
              regime stayed idiosyncratic as BTC led NQ outright — so the risk-off / worst-laggard
              read of the earlier lineage stays fully unwound; but the restored tape reads the
              reclaim as de-grossing, the MTF engine flashes TWO 1h/12h TD9 SELLs at the highs, and
              macro stayed risk-off on the z-panel (rates tight, dollar EXTREME). The right read for
              the next 24h is{' '}
              <em>break-confirmed-on-the-weekly-close, floor-reclaimed-on-the-weekly-close,
              tape-back-and-reading-de-grossing — respect the confirmed break and the recovery&rsquo;s
              first weekly close, treat the deepest long-gamma map of the run and the three MAs
              beneath spot as a real structural improvement, but weigh that the restored tape reads
              the reclaim as short-cover / de-grossing rather than demand and the engine flashes two
              overbought reversal prints at the highs, and wait for the live tape to show demand (OI
              building on up-moves, taker-net positive) before treating the reclaim as confirmed</em>.
            </p>
          </div>
          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> this is the <b>v2</b> note — <b>post codex hostile audit</b>. It has been
            through the cross-model hostile audit (codex primary + owns the publish gate — verdict
            PASS-WITH-NOTES, 0 CRITICAL / 0 MAJOR / 1 MINOR; ask-deepseek arithmetic second-audit —
            1 CRITICAL / 1 MAJOR / 1 MINOR, each ADJUDICATED by recompute before applying, per
            runbook §5). Every finding was applied and grep-closed across the full EN file (each key
            wrong-claim pattern searched, all semantic variants fixed, re-grepped to zero stale
            matches). See <code>audits/2026-07-07-desk-note.md</code> for the verdict.{' '}
            <span className="dn-em">
              Findings, adjudication and grep-closure (pattern searched — hits before — hits after —
              status):{' '}
              <b>DN-001 (codex, MINOR — note-count phrasing):</b> the draft claimed the restored
              tape was the first live read in &ldquo;~19 notes,&rdquo; but the local page lineage
              (17 frozen published EN notes 06-18 → 07-05) and the 431.9h outage support a day count,
              not a note count. Patterns <code>~19 notes</code> / <code>in ~19</code> /{' '}
              <code>note in ~19</code> — 12 hits before — 0 after — RESOLVED (all reframed to
              &ldquo;~18 days,&rdquo; consistent with the 431.9h dark window; the correct dates{' '}
              06-19 → 07-05 were left intact).{' '}
              <b>deepseek CRITICAL (up-close count):</b> recompute of the stated daily closes confirms
              06-30 $58,605.40 is a DOWN close (below 06-29 $60,224.70), so the run is SIX consecutive
              up-closes 07-01 → 07-06, not seven 06-30 → 07-06 — the draft&rsquo;s own numbers
              (06-30 called &ldquo;the deepest, −6.45%&rdquo;) contradict the seven-count. Patterns{' '}
              <code>seven consecutive up-closes</code> / <code>06-30 → 07-06</code> — 3 hits before —
              0 after — RESOLVED (all corrected to six consecutive up-closes 07-01 → 07-06).{' '}
              <b>deepseek MAJOR (SM side-delta rounding):</b> the integer side-changes long +771 /
              short +781 imply Δnet −10, contradicting the exact Δnet −9.67 (from prior net +2,358.52
              → current +2,348.85); the side-deltas are rounded and were presented as exact. Patterns{' '}
              <code>+771</code> / <code>+781</code> — 3 hits before — 0 after — RESOLVED (marked
              approximate &ldquo;+~771 / +~781, rounded&rdquo;; the exact Δnet −9.67 / 0.41% cut is
              the load-bearing figure and is unchanged).{' '}
              <b>deepseek MINOR (OI reference):</b> the −2.42% OI change is relative to prior OI
              (−2,544 / ~105,228), not current; clarified inline at the manifest headline mention
              (the meta tile and §I already carried &ldquo;vs ~24h prior&rdquo; / &ldquo;over the
              live 24h window&rdquo;). RESOLVED.
            </span>{' '}
            Overall: <b>post codex hostile audit</b> — every finding RESOLVED (hits-after = 0),
            no UNRESOLVED residue. Build proxy: full <code>next build</code> stays
            environment-blocked (Node v18.19.1 &lt; Next&rsquo;s required &gt;=20.9.0);{' '}
            <code>tsc --noEmit</code> is the build proxy and passes exit 0.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among principals of
            Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a single
            atomic snapshot (2026-07-07 00:05Z) with section-level provenance disclosed in the
            manifest band above;{' '}
            <em>the live derivatives tape RESUMED 2026-07-05 06:38Z after a 431.9h outage, so
            funding, OI, flow and positioning figures are LIVE this cut (read over live 24h windows
            ending at the anchor) for the first time in ~18 days — the first live read is a
            short-cover / de-grossing shape, not confirmed demand</em>; the macro panel render is
            2026-07-06 22:16Z (~1.82h before snapshot). Price, MTF, GEX and cross-asset are
            fresh. This is the v2 note, post codex hostile audit; its figures have been adjudicated
            and grep-closed against the full EN file (see the audit-trace block above). Levels, sizes, and conditions are
            illustrative of the desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future tape. Derivatives
            carry the risk of total loss and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                Two firsts, same direction: the live tape is BACK (resumed 07-05 06:38Z after
                431.9h) and the 200W floor was RECLAIMED on the WEEKLY close (07-06 $64,023.60, the
                first weekly close above since the 06-29 break) — the floor stepped up to $62,864,
                three MAs beneath spot, the dealer book deepened to +157.8M net-LONG-gamma (deepest
                of the run) with the near-dated amplifier flipped positive and no negative expiry,
                spot +3.84% above the flip. BUT the first live read is short-cover / de-grossing (OI
                −2.42% into +0.55% price, taker/CVD net-sell, funding pinned long, retail easing, SM
                net-flat/long), not demand, and the engine flashes TWO 1h/12h TD9 SELLs at the highs.
                Break confirmed. Floor reclaimed on the weekly close. Tape back. Reads de-grossing,
                not demand. Two reversals at the highs.
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
            v2 · 2026-07-07 00:05Z snapshot · 2026-07-07T00:56:12Z ·
            sources: live_db.json (LIVE · resumed 2026-07-05 06:38Z) ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED · Yahoo ·
            Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
