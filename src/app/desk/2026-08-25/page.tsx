import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-25 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-25',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-25' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260825() {
  await requireViewer('/desk/2026-08-25');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-25 · v2</span>
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
              <span className="dn-big">$78,933</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.82%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-25 00:07Z · rolling sources archived to
              /opt/desk-note/snapshots/2026-08-25-0005/
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · pinned row <code>t = &ldquo;08-25 08:07&rdquo;</code> (BJ) = 2026-08-25 00:07Z</td>
                  <td className="dn-flag">
                    fresh · 1-min · <b>file frozen into the archive at 00:07Z</b> and read
                    only from the frozen copy thereafter · the <code>t</code> field is
                    BJ-local (UTC+8), NOT UTC — the anchor is BJ 08:07, not 00:07 · every
                    24h figure in this note is the exact 1,441-row window 08-24 00:07Z →
                    08-25 00:07Z
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-25 08:01 Beijing = 00:01Z scan</td>
                  <td className="dn-flag">
                    archived copy · ~6 min BEFORE the tape anchor (internal scan clock 00:01Z vs anchor 00:07Z — older, not later) · header prints
                    Beijing time · in-progress bars on every frame (the file says so for
                    the 1d TD9) · its own spot read $78,913 / +1.54% differs from the tape
                    anchor $78,932.80 / +1.82% — different sample minute and a different
                    24h baseline, both disclosed rather than reconciled
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-25 00:01 UTC · 944 instruments</td>
                  <td className="dn-flag">
                    archived copy · ~6 min BEFORE the tape anchor (internal scan clock 00:01Z vs anchor 00:07Z — older, not later) · Deribit index
                    $79,287 vs live spot $78,932.80 (+$354.20 / +0.45%) — both references
                    carried explicitly · <b>three different aggregations disclosed</b>:
                    headline +255.6M, by-expiry strip footed +256.84M, 47-point by-strike
                    profile +249.87M · the <b>footed</b> basis is the lineage basis and
                    is used throughout
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">cross_asset_correlation_summary.md · 2026-08-25T00:00+00:00</td>
                  <td className="dn-flag">
                    archived copy · 7d 1h bars · 22 assets · 167 rows · two of the seven
                    days are weekend days carrying no equity prints
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-24 22:16Z render</td>
                  <td className="dn-flag">
                    archived copy · ~1.9h before the anchor · <b>FRESH weekday print —
                    the first in three notes</b>: 10Y +5.0bp to 4.74%, TIPS real +5.0bp to
                    2.40%, HY OAS −5.0bp to 2.70%, 5Y5Y BE −2.0bp, MOVE +0.58 to 74.0,
                    NETLIQ −0.004T, JGB +2.0bp · the 08-23 and 08-24 notes both ran on
                    weekend re-renders; this one does not
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">btcusdt_1m_*.parquet · last bar 2026-08-25 00:04Z close $78,906.10</td>
                  <td className="dn-flag">
                    all eight yearly files loaded (2019–2026) — the runbook&rsquo;s
                    &ldquo;last ~3 files&rdquo; yields only 192 weekly bars and returns
                    W-SMA200 as NaN · 365 weekly bars on file, 364 settled · offsets
                    recomputed vs live spot $78,932.80 (parquet close is $26.70 below it)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W cycle-floor watch</td>
                  <td className="dn-v-cell"><b>weekly_200sma.json ABSENT — 200W watch unavailable</b></td>
                  <td className="dn-flag">
                    the runbook&rsquo;s pinnable watch file does not exist on this server ·
                    per the fallback rule the note uses the <b>matrix</b> value computed
                    from parquet (W-SMA200 $64,269.62 on 364 settled weekly closes) and
                    <b> does not quote a JSON <code>ratio_pctile</code>,
                    <code> last_event</code> or <code>state</code> field</b> · the
                    percentile and below-count printed below are computed here from the
                    same parquet series and are labelled as such
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N · 2.67%</td>
                  <td className="dn-flag">stale · monthly · flagged 84d on the panel · do not lean on it</td>
                </tr>
                <tr>
                  <td className="dn-s">SM feed upstream cause</td>
                  <td className="dn-v-cell">NOT LOADED</td>
                  <td className="dn-flag">
                    the trader-count steps are observed in the tape; no roster, scheduler,
                    account-continuity or ingestion evidence is loaded · no mechanism is
                    named anywhere in this note
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">NTT pivots, max-pain, strike-level IV, BTC/NQ ratio</td>
                  <td className="dn-v-cell">NOT LOADED in this cut</td>
                  <td className="dn-flag">
                    btc_ntt_analysis.html is JS-rendered and not extractable · claims
                    explicitly framework-only
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h ann.</span>
              <span className="dn-v bull">+6.31%</span>
              <span className="dn-src">live · raw 0.005762 × 1095 = +6.3094% · <b>OFF THE CAP</b> after 4,953 consecutive capped rows · last capped row 08-24 19:20Z, first below-cap row 08-24 19:21Z · <b>287 rows / 286 elapsed minutes = 4h46m</b> through 00:07Z · 24h mean +10.3032%, cap occupancy 1,154 / 1,441 = 80.1%</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">+10.95% → +6.31% (−4.64pt off cap)</span>
              <span className="dn-src">range +6.3028% / +10.9500% · the streak ran 08-21 08:48Z → 08-24 19:20Z inclusive (4,953 rows / 4,952 minutes), with the first below-cap row at 19:21Z · still <b>0 / 1,441 negative</b> in 24h and <b>0 / 10,081 on 7d</b> — the last negative print was 08-16 05:36Z, 12,631 rows ago</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+1.58% (+1,670.2 BTC)</span>
              <span className="dn-src">live · 105,539.451 → 107,209.607 · the base <b>EXPANDED</b> through the up-day · 24h peak 108,928.304 @ 08-24 15:28Z (4 min before the price high) and now −1,718.7 / −1.58% off it · gross opens, closes and account-level turnover are NOT observable in this feed</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bull">48.58 / 51.42</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · −3.11pt in 24h, reversing the 08-24 re-crowd · 24h range 48.12% (@ 08-24 16:47Z, also the <b>7d minimum</b>) / 51.89% · 7d peak 61.52% @ 08-19 11:41Z</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">+32.4k (net long · long 40,660.7 − short 8,276.8)</span>
              <span className="dn-src">live · long_traders 4,906 / short_traders 1,227 · <b>NOT CERTIFIABLE</b> — 93.28% of the 24h Δnet is one minute (08-24 06:26Z)</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 08-24 note</span>
              <span className="dn-v">+19,905.9 → +32,383.9 (Δnet +12,478.0)</span>
              <span className="dn-src">cut fraction |Δ| / prior_net = 12,478.0 / 19,905.9 = <b>62.69%</b> · of which +11,639.9 (93.28%) is the single 08-24 06:26Z step · on the step-free 17h41m window SM <b>ADDED</b> +1,146.6 / +3.67% into a +2.01% push</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">46.6% / 43.20%</span>
              <span className="dn-src">GEX chain-median across 944 instruments — <b>not a tradable spread</b> · richness <b>narrowed to +3.40pt</b> from +6.65pt on 08-24, <b>overwhelmingly because chain-median IV fell 3.20pt</b> (49.8% → 46.6%) while RV edged up only 0.05pt (43.1467% → 43.1981%) — the IV leg supplies 98.4% of the 3.2513pt narrowing · RV60 37.06% / RV90 40.42%</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+23.33% above (live spot)</span>
              <span className="dn-src">flip $64,001 (was $63,552) · vs live spot $78,932.80: spot +23.33% above, an <b>18.92% decline</b> reaches it · vs the file&rsquo;s own Deribit index $79,287: +23.88% (the file prints +23.9%) — both references positive, tile and cluster consistent · footed aggregate GEX +256.84M</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The desk&rsquo;s own disposal rule fired, and the note that has to be
                written is the one about the second unfilled framework in eight days
              </span>. The 08-24 note pre-committed, in writing, that{' '}
              <em>&ldquo;if a 1d close prints above the $78,000 / $78,228.40 /
              $78,446.94 lid, this framework is retired as too low rather than
              carried.&rdquo;</em> The 08-24 daily close printed{' '}
              <span className="dn-tag bull">$78,953.00</span>, clearing the highest
              of the three by <span className="dn-tag">$506.06 (+0.65%)</span> and
              all three on the exchange-bar basis the same note adopted the day
              before. The rule fires. <b>The pullback long at $75,000–$76,000 is
              RETIRED, unfilled</b> — not re-drawn upward, not carried, not
              re-argued. That makes two frameworks disposed of in eight days without
              either ever being entered: the 08-19 cover-bounce scout expired
              unfilled on 08-22, and the pullback long is retired today. The book
              has been <span className="dn-tag bear">FLAT through a +22.72% seven-day
              move</span>. Both frameworks were directionally right and neither was
              ever available at the price the desk wrote down, and the near-misses
              have stopped being rounding errors:{' '}
              <span className="dn-tag">$20.30</span> short of the arming band on
              08-23, <span className="dn-tag">$9.00</span> short of the first target
              on 08-24 — the 24h high $79,991.00 against a $80,000 target that is
              now the heaviest wall on the board at{' '}
              <span className="dn-tag">+44.28M</span>. Meanwhile three of the
              conditions the desk said it wanted actually arrived:{' '}
              <span className="dn-tag bull">funding un-pinned</span> after 4,953
              consecutive capped rows and sits at +6.31% ann,{' '}
              <span className="dn-tag bull">retail de-crowded −3.11pt to 48.58%</span>{' '}
              — the 7d minimum — and the lid cleared. Two did not:{' '}
              <span className="dn-tag bear">OI EXPANDED +1.58%</span> against the
              un-pin condition&rsquo;s explicit &ldquo;ideally with OI falling&rdquo;
              clause, and the <span className="dn-tag bear">1d TD9 SELL that was one
              bar out yesterday has now printed</span>.{' '}
              <span className="dn-em">
                The uncomfortable summary is that the entry-quality objection this
                desk has run for three consecutive notes has now half-resolved — and
                the desk is flat, at a higher price, with its stated framework
                retired by its own rule rather than by the tape proving it wrong.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning{' '}
              <span className="dn-roman">I · live tape · funding OFF THE CAP after 4,953 rows · base EXPANDED +1.58% · retail at the 7d floor · SM tape NOT CERTIFIABLE for a fifth consecutive session</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single worst line in the book for four sessions running finally
                broke — and it broke with the base growing, which is the weaker
                version of the thing the desk asked for
              </span>. Funding was welded to the{' '}
              <span className="dn-tag bear">+10.95% cap</span> for{' '}
              <span className="dn-tag">4,953 consecutive sampled rows (4,952
              minutes, 82h32m)</span> from 08-21 08:48Z to 08-24 19:20Z inclusive —
              19:20Z is the <b>last capped row</b>, and the <b>first below-cap row is
              19:21Z</b>. From 19:21Z to the 00:07Z anchor it has printed below the
              cap for{' '}
              <span className="dn-tag bull">287 consecutive rows / 286 elapsed
              minutes = 4h46m</span>, decaying monotonically on the hourly samples: +10.950% →
              +8.336% → +7.651% → +7.381% → +6.718% → <b>+6.309%</b> at the anchor
              (raw 0.005762 × 1095). The 24h mean is still{' '}
              <span className="dn-tag">+10.3032%</span> with cap occupancy{' '}
              <span className="dn-tag">1,154 / 1,441 = 80.1%</span>, because most of
              the window was still pinned. Two caveats keep this from being a clean
              win. First, <b>4h46m is young</b> — the 08-24 condition asked for a
              &ldquo;sustained stretch&rdquo; and did not define one, which is the
              same specification gap the desk recorded as a design defect yesterday
              in a different trade; on the evidence loaded, this is a fired-but-young
              signal, not a settled regime change. Second, and worse, the condition
              read <em>&ldquo;ideally with OI falling&rdquo;</em> and OI did the
              opposite: <span className="dn-tag bear">+1,670.2 BTC / +1.58%</span> on
              the 24h window, 105,539.451 → 107,209.607. Carry got cheaper and the
              base got bigger in the same window. That is leverage being{' '}
              <em>added</em> at a better price, not leverage clearing.
            </p>

            <p>
              The intraday shape of the OI print is the more useful read. The 24h OI
              peak <span className="dn-tag">108,928.304 @ 08-24 15:28Z</span> lands{' '}
              <b>four minutes before</b> the 24h price high{' '}
              <span className="dn-tag">$79,991.00 @ 15:32Z</span>, and OI now sits{' '}
              <span className="dn-tag">−1,718.7 / −1.58% off that peak</span> while
              price is only −1.32% off the high. So the sequence was: leverage built
              into the run at $80,000, price <b>stopped $9.00 short of $80,000</b>{' '}
              and turned, and roughly 1,719 BTC of that build came back out.{' '}
              <b>
                No intraday GEX observation at the 15:32Z high is loaded. The
                bracketing daily panels — 08-24 00:00Z and 08-25 00:01Z, roughly
                15.5h before and 8.5h after — both show $80,000 as the largest named
                wall (+40.17M and +44.28M), which is consistent with resistance at
                that strike but is <em>not</em> proof that gamma caused the reversal,
                and neither panel establishes the wall size at the moment the high
                printed.
              </b>{' '}
              The net +1.58% is what survived a full build-and-flush
              cycle. As always in this feed, <b>gross opens, closes and account-level
              turnover are not observable</b> — deleveraging offset by replacement
              leverage prints the same net, so &ldquo;1,719 BTC came out&rdquo; is a
              statement about the aggregate level, not about identified positions.
            </p>

            <p>
              Retail moved the desk&rsquo;s way and moved hard.{' '}
              <span className="dn-tag bull"><code>mkt_long_pct</code> 48.58%</span>,{' '}
              <b>−3.11pt in 24h</b>, reversing the 08-24 note&rsquo;s adverse
              +1.51pt re-crowd in a single session. The exact 00:0xZ daily endpoints
              now run <span className="dn-tag">59.77% (08-18) → 57.97% → 52.02% →
              48.95% → 51.00% → 50.18% → 51.69% → 48.58%</span>, and the 24h
              trough <span className="dn-tag">48.12% @ 08-24 16:47Z</span> is also
              the <b>7d minimum</b>, against a 7d peak of 61.52% @ 08-19 11:41Z. The
              divergence worth naming: retail sits at its seven-day floor while price
              sits at 68.02% of its 24h range and within 1.33% of the highest print
              of the move. Retail is not what is carrying this. That was the
              cleanest single leg of the bull case three notes ago, it survived a
              two-session wobble, and it is now stronger than when it was first
              written.
            </p>

            <p>
              <span className="dn-signal">
                The SM tape is NOT CERTIFIABLE, for the fifth consecutive session,
                and the pattern has hardened into something the desk should now state
                plainly
              </span>. The 24h Δnet is{' '}
              <span className="dn-tag">+12,478.0</span> (19,905.9 → 32,383.9), a cut
              fraction of <b>|Δ| / prior_net = 12,478.0 / 19,905.9 = 62.69%</b>. Of
              that, <span className="dn-tag bear">+11,639.9 — 93.28% — is a single
              minute</span>: 08-24 06:26Z, where <code>long_traders</code> stepped
              4,631 → 4,951 and net jumped 19,597.4 → 31,237.3. Scanning the full 7d
              window for one-minute |Δnet| &gt; 1,500 returns{' '}
              <span className="dn-tag">11 steps</span>, of which{' '}
              <b>seven are one-per-day and every one of the seven falls inside a
              06:21Z–07:06Z band</b>: 08-18 06:21Z (+16,380.9), 08-19 06:46Z
              (−5,610.0), 08-20 07:06Z (+39,352.8), 08-21 06:21Z (+10,671.2), 08-22
              06:41Z (+16,071.5), 08-23 07:06Z (−10,279.5), 08-24 06:26Z (+11,639.9).
              That is a 45-minute-wide window hit on seven consecutive days in both
              directions.{' '}
              <b>
                The desk records the timing regularity as an observation and names no
                cause. No roster, scheduler, account-continuity or ingestion evidence
                is loaded in this cut, so any mechanism would be an unverified
                inference and none is asserted.
              </b>{' '}
              The design conclusion needs no mechanism: a gate written against{' '}
              <code>net_btc</code> as a level or a delta is unsound on this series.
              The only SM statement this note is willing to lean on is the step-free
              window — from 08-24 06:26Z to the anchor,{' '}
              <span className="dn-tag">17h41m clean</span>, SM{' '}
              <b>ADDED +1,146.6 / +3.67%</b> into a +2.01% push. That is the first
              step-free window in this lineage where SM added rather than trimmed
              into strength; the prior three notes recorded trims of −11.68%, −1.94%
              and −8.32%. It is descriptive, not decisive, and one clean window does
              not make the series trustworthy.
            </p>

            <p>
              Flow and basis, for completeness. Perp premium at the anchor is{' '}
              <span className="dn-tag">−$20.96</span> with a 24h mean of −$10.16 and
              a range of −$186.82 / +$233.55 — spot-led, mildly, with no persistent
              perp bid. Aggregate skew −1.80 at the anchor (24h mean −2.79, range
              −64.20 / +52.30). On the 24h window spot CVD is{' '}
              <span className="dn-tag bull">+327.4</span>, futures CVD{' '}
              <span className="dn-tag bull">+940.1</span>, big-net{' '}
              <span className="dn-tag bull">+1,063.2</span>, taker-net{' '}
              <span className="dn-tag bull">+940.1</span> (futures CVD and taker-net
              coincide exactly on this window, and on the 1h and 4h windows as well —
              stated as observed, with no claim about how the two fields relate
              upstream) — buy-side across all four
              on a +1.82% day, which is coherent rather than divergent. The 4h window
              is where it turns: price +0.34% but{' '}
              <span className="dn-tag bear">OI −638.5 BTC</span>, spot CVD +149.3,
              futures CVD +400.1. Price grinding up while OI comes off is the
              healthier of the two shapes on offer, and it is the more recent one.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF 9 long / 0 short / 1 neutral · the 1d TD9 SELL FIRED · matrix improved to 18-of-20 · the lid is now support and the next one is the heaviest wall on the board</span>
            </h2>

            <p>
              <span className="dn-signal">
                The structure improved on every axis the desk tracks and the one
                dated risk it flagged yesterday landed at the same time
              </span>. The MTF scan (2026-08-25 08:01 Beijing = 00:01Z) reads{' '}
              <span className="dn-tag bull">9 long / 0 short / 1 neutral</span> on
              the file&rsquo;s own aggregate line, against{' '}
              <span className="dn-tag">6 long / 3 warn / 1 ranging</span> if you sum
              the per-timeframe 偏向 column — both counts printed, and{' '}
              <b>neither produces a single short classification</b>, for a fourth
              consecutive session. That is an improvement from the 08-24 note&rsquo;s
              8 / 0 / 2 aggregate and 5 / 3 / 2 row-sum. The three warn frames are
              15m, 12h and 1d; 1w is the lone ranging frame and still sits{' '}
              <b>below its weekly Ichimoku cloud</b> (30 bars, resistance overhead at
              ~$85.9k) with DIF below water — the slowest frame has not joined and
              the note does not pretend it has.
            </p>

            <p>
              <span className="dn-tag bear">The 1d TD9 SELL printed.</span> The 08-24
              note called it as &ldquo;one bar out&rdquo; and it fired on this scan
              at $78,932, tagged by the file itself as{' '}
              <em>&ldquo;overbought reversal hint (last bar may be
              in-progress)&rdquo;</em> — the in-progress caveat is the
              file&rsquo;s, and it is carried here rather than suppressed. It is not
              a short trigger and this note does not treat it as one; it is the
              single best argument that paying up here is a worse idea than it looks.
              RSI cooled on the fast frames and stayed hot on the slow ones: 15m 53.5,
              30m 54.8, 1h 58.6, <span className="dn-tag">4h 71.0</span> (the 08-24
              note tracked this from 89.8 to 72.2; it is now 71.0), 8h 78.4,{' '}
              <span className="dn-tag bear">12h 85.0</span>,{' '}
              <span className="dn-tag bear">1d 82.2</span>, 3d 70.7, 1w 57.7, 1M 51.2.
              MACD is genuinely mixed underneath the long tally: a{' '}
              <span className="dn-tag bull">15m water-up golden cross 1 bar ago</span>,
              but water-up death crosses on 30m (13b), <b>1h (1 bar — fresh)</b> and
              4h (14b), against water-down golden crosses on 12h (15b), 1d (7b) and
              1w (5b). Read straight: the engine frames are rolling over inside an
              intact slower uptrend. Divergences: two top divergences (15m, 30m), one
              bottom (30m). Momentum regime 6/9 frames with JT ≥ 0 — trend-continuation
              biased.
            </p>

            <p>
              The MA matrix is the cleanest read in the note.{' '}
              <span className="dn-tag bull">Spot $78,932.80 is above all ten daily
              MAs and eight of ten weekly — 18 of 20</span>, up from 17-of-20 on
              08-24, and the strike that flipped is exactly the one that mattered:{' '}
              <b>W-EMA100 $78,446.94, which was the top of yesterday&rsquo;s lid, is
              now +0.62% below spot</b>. The only two negatives left are{' '}
              <span className="dn-tag bear">W-SMA50 $81,784.71 (−3.49%)</span> and{' '}
              <span className="dn-tag bear">W-SMA100 $88,841.21 (−11.15%)</span>.
              The full matrix, offsets computed as spot/MA − 1 against live spot
              $78,932.80 off a parquet last bar of 2026-08-25 00:04Z close $78,906.10:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>n</th><th>D-SMA</th><th>vs spot</th><th>D-EMA</th><th>vs spot</th><th>W-SMA</th><th>vs spot</th><th>W-EMA</th><th>vs spot</th></tr>
              </thead>
              <tbody>
                <tr><td>20</td><td className="num">68,241.39</td><td className="num bull">+15.67%</td><td className="num">70,370.10</td><td className="num bull">+12.17%</td><td className="num">69,509.57</td><td className="num bull">+13.56%</td><td className="num">69,290.15</td><td className="num bull">+13.92%</td></tr>
                <tr><td>50</td><td className="num">65,780.08</td><td className="num bull">+19.99%</td><td className="num">67,292.31</td><td className="num bull">+17.30%</td><td className="num">81,784.71</td><td className="num bear">−3.49%</td><td className="num">77,248.42</td><td className="num bull">+2.18%</td></tr>
                <tr><td>100</td><td className="num">66,152.43</td><td className="num bull">+19.32%</td><td className="num">67,643.38</td><td className="num bull">+16.69%</td><td className="num">88,841.21</td><td className="num bear">−11.15%</td><td className="num">78,446.94</td><td className="num bull">+0.62%</td></tr>
                <tr><td>150</td><td className="num">69,230.30</td><td className="num bull">+14.01%</td><td className="num">69,547.66</td><td className="num bull">+13.49%</td><td className="num">77,446.22</td><td className="num bull">+1.92%</td><td className="num">73,884.51</td><td className="num bull">+6.83%</td></tr>
                <tr><td>200</td><td className="num">69,131.71</td><td className="num bull">+14.18%</td><td className="num">71,847.49</td><td className="num bull">+9.86%</td><td className="num">64,269.62</td><td className="num bull">+22.82%</td><td className="num">68,609.64</td><td className="num bull">+15.05%</td></tr>
              </tbody>
            </table>

            <p>
              On the cycle floor: the <b>200W watch JSON is absent from this server</b>,
              so per the fallback rule the note uses the matrix value and quotes no
              JSON <code>state</code>, <code>ratio_pctile</code> or{' '}
              <code>last_event</code> field. Computed here from the same parquet
              series: W-SMA200 <span className="dn-tag">$64,269.62</span>, the 08-23
              settled weekly close <span className="dn-tag bull">$77,719.10</span> =
              ratio 1.2093 (+20.93%), live spot +22.82% above. On 165 comparable
              weekly observations, <b>37 of 165 are strictly lower = 22.4%</b>, and
              the <b>inclusive empirical rank is 38 / 165 = the 23.0th
              percentile</b> — the convention is named because the two differ by
              0.6pt and the note previously printed only the strict-below figure.
              Separately, only{' '}
              <span className="dn-tag">10 of 165 (6.1%)</span> weekly closes have
              ever settled below the level. The 08-16 break and its 08-23 reclaim are
              both visible in the settled series (62,876.00 below, 77,719.10 above),
              which is the recorded one-week false break the 08-24 note logged; the
              in-progress 08-24→08-30 weekly bar runs{' '}
              <span className="dn-tag">O 77,719.00 / H 79,974.80 / L 76,649.00 / C
              78,906.10</span>, +22.77% above the floor, and is{' '}
              <b>unsettled until 08-30 23:59Z</b>. One cross-check worth disclosing:
              the MTF file&rsquo;s own 1w row reads +22.26% against its 200SMA, a
              0.56pt disagreement with the matrix figure — different bar anchoring
              on a 365-bar series, not reconciled, both printed.
            </p>

            <p>
              What the price is actually sitting in: 24h range{' '}
              <span className="dn-tag">$76,681.99 – $79,991.00</span> on spot
              (exchange bars $76,649.00 – $79,974.80), spot at{' '}
              <b>68.02% of that range</b>. The old lid is now the floor —{' '}
              <span className="dn-tag">$78,000 wall (−1.18% away)</span>,{' '}
              <span className="dn-tag">D-EMA400 $78,235.38 (−0.88%)</span>,{' '}
              <span className="dn-tag">W-EMA100 $78,446.94 (−0.62%)</span>, a
              $446.94-wide shelf now underneath rather than overhead. Below that,{' '}
              W-SMA150 $77,446.22 (−1.88%) and W-EMA50 $77,248.42 (−2.13%), the shelf
              that has now held for a third consecutive session. Above:{' '}
              <span className="dn-tag bear">$80,000 (+1.35%), which is the heaviest
              wall on the board at +44.28M and $9.00 above where the 24h high
              stopped</span>, then W-SMA50 $81,784.71 (+3.61%). <span className="dn-em">
                The structural picture is a market that cleared a three-deep ceiling,
                converted it to support, ran up to the single largest gamma
                concentration in the book, and stopped nine dollars short of it —
                a coincidence of level and price, on bracketing daily panels only,
                not an observed intraday mechanism.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map{' '}
              <span className="dn-roman">III · clamp DEEPENED +9.15M to +256.84M footed — deepest of the CHECKED post-08-16 lineage (08-21 archive absent), clearing 08-20 +254.15M by +2.69M, NOT a lineage maximum · the named material walls migrated UP with price · flip $64,001, 18.92% below spot</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book got deeper, and the named material walls migrated
                upward with price
              </span>. On the footed basis this lineage carries, aggregate GEX is{' '}
              <span className="dn-tag bull">+256.84M</span> (headline +255.6M; the
              47-point by-strike profile foots to +249.87M — three aggregations, all
              three disclosed, the by-expiry foot used throughout). That is{' '}
              <b>+9.15M deeper than 08-24&rsquo;s +247.69M</b> and{' '}
              <b>the deepest positive clamp of the checked post-08-16 lineage</b>,
              clearing the actual prior post-08-16 high —{' '}
              <span className="dn-tag">08-20 +254.15M</span> — by only{' '}
              <b>+2.69M</b>. It is <b>NOT a lineage maximum</b>: on the same footed
              basis <span className="dn-tag">07-22 +313.63M</span> and{' '}
              <span className="dn-tag">07-23 +283.46M</span> are both deeper. The
              full checked post-08-16 ledger, printed so the ordinal can be checked
              rather than trusted: <span className="dn-tag">08-17 +28.06M · 08-18
              +128.85M · 08-19 +128.94M · 08-20 +254.15M · 08-21 NO ARCHIVE · 08-22
              +249.91M · 08-23 +242.37M · 08-24 +247.69M · 08-25 +256.84M</span>,
              with 07-24 +235.95M on the older lineage.{' '}
              <b>
                The ledger is not complete: no 2026-08-21 GEX archive exists on this
                server, so the ordinal is &ldquo;deepest among the available checked
                daily panels,&rdquo; not a certified daily maximum.
              </b>
            </p>

            <p>
              All ten top walls are positive, summing{' '}
              <span className="dn-tag">+188.67M = 73.46% of the footed strip</span>:
              $80,000 +44.28M · $82,000 +33.64M · $78,000 +27.16M · $90,000 +13.73M ·
              $84,000 +13.40M · $85,000 +12.72M · $81,000 +11.95M · $70,000 +11.77M ·
              $79,000 +11.05M · $100,000 +8.97M. Set against the 08-24 note&rsquo;s
              printed figures, the migration is unusually clean and is worth stating
              as a scoped claim rather than a universal one.{' '}
              <b>Every named strike at or above $79,000 got heavier</b>: $80,000
              +40.17M → <span className="dn-tag bull">+44.28M</span>, $82,000 +22.00M
              → <span className="dn-tag bull">+33.64M</span> (the largest single
              move on the board), $84,000 +11.65M → +13.40M, $85,000 +9.91M → +12.72M,
              $90,000 +11.20M → +13.73M, with $81,000, $79,000 and $100,000 entering
              the top ten.{' '}
              <b>Every named strike at or below $78,000 got lighter</b>: $78,000
              +32.48M → <span className="dn-tag bear">+27.16M</span>, $76,000 +11.21M
              → +8.90M, $75,000 +13.08M → +8.65M, $74,000 +11.59M → +8.16M, $72,000
              +11.57M → +8.55M, $70,000 +18.57M → +11.77M — and the four strikes
              $72,000 / $74,000 / $75,000 / $76,000 all dropped out of the top ten
              entirely. <span className="dn-em">
                The shelf that the retired pullback framework was built on has now
                thinned for a second consecutive session, which is independent
                structural evidence that retiring it was right rather than merely
                rule-following.
              </span>{' '}
              <b>
                That claim is scoped to the named material walls and does not
                generalise to the full profile.
              </b>{' '}
              On the 45 strikes common to the 08-24 and 08-25 by-strike profiles, 28
              got heavier and 17 got lighter, and the exceptions run both ways: the
              far upper strikes <span className="dn-tag">$87,000 +0.01162M →
              +0.00893M</span> and <span className="dn-tag">$89,000 +0.01412M →
              +0.00750M</span> got lighter despite sitting above price, while{' '}
              <span className="dn-tag">$65,000 −0.35650M → −0.80998M</span> and{' '}
              <span className="dn-tag">$66,000 −0.60615M → −0.64958M</span> became
              more negative below it. Seven 08-24 strikes are absent from today&rsquo;s
              47-point profile and two are new, so the profiles are not row-for-row
              comparable either. Of the 47 profile points, 13 are negative summing
              −12.75M against +262.62M positive, and every negative sits at $77,500
              or below.
            </p>

            <p>
              The 0-γ flip is <span className="dn-tag">$64,001</span>, up from
              $63,552 on 08-24. Dual reference, both carried: against live spot
              $78,932.80 the flip sits <b>18.92% below</b> — an 18.92% decline is
              required to reach it, equivalently spot is <b>+23.33% above</b> it;
              against the GEX file&rsquo;s own Deribit index $79,287 the distance is{' '}
              <b>+23.88%</b>, which is the +23.9% the file prints. Both references are
              positive and the meta tile carries the same sign as this cluster. Note
              the flip rose $449 while spot rose ~$1,300, so the gap in percentage
              terms widened. Call OI 255,650 BTC against put OI 154,650 for a{' '}
              <span className="dn-tag">put/call ratio of 0.60</span>.
            </p>

            <p>
              By expiry, the concentration is unchanged in shape and slightly less
              concentrated in degree. <span className="dn-tag">28AUG26</span> carries{' '}
              <b>+80.34M = 31.28% of the footed strip</b> at 3.3 DTE, easing from
              33.71% on 08-24 and 36.17% on 08-23 — a third consecutive session of
              declining share while the strip as a whole grew.{' '}
              <span className="dn-tag">25SEP26</span> carries +76.11M / 29.63%, so
              two lines still hold <b>60.91%</b> of the clamp. The front three
              near-dated lines foot to only +13.48M (25AUG26 +9.37M at 0.3 DTE
              settling today at 08:00Z, 26AUG26 +1.67M, 27AUG26 +2.44M) and all three
              are positive — there is no negative front line this session. The
              comparator, stated correctly: the 08-24 note&rsquo;s own front line{' '}
              <span className="dn-tag">24AUG26 printed +9.67M</span>, having been
              −1.21M on <b>08-23</b>; the negatives on that 08-24 snapshot were{' '}
              <span className="dn-tag">26AUG26 and 27AUG26 at −0.03M each</span>,
              both of which are positive today at +1.67M and +2.44M.{' '}
              <b>
                The 28AUG26 share is a snapshot contribution at current IV, not a
                guaranteed roll-off
              </b>{' '}
              — the strip re-prices continuously, and the fact that its share has
              fallen three sessions running while the total rose is the direct
              evidence for that caveat.
            </p>

            <p>
              On volatility: the chain-median IV across 944 instruments is{' '}
              <span className="dn-tag">46.6%</span> against 30D close-to-close RV of{' '}
              <span className="dn-tag">43.20%</span>, a richness of{' '}
              <b>+3.40pt</b>, <b>narrowed</b> from +6.65pt on 08-24. No ordinal is
              claimed and no run-length ledger is loaded. The decomposition matters
              more than the level, and it is measured rather than asserted: the gap
              narrowed <b>3.2513pt</b> (+6.6533pt → +3.4019pt), of which{' '}
              <b>chain-median IV falling 3.2000pt</b> (49.8% → 46.6%) supplies{' '}
              <b>98.4%</b>; realized volatility contributed only{' '}
              <b>+0.0513pt</b> (30D RV 43.1467% → 43.1981%). Both legs narrow the
              gap, but this was <b>implied cheapening</b>, not realized catching up.
              The IV figure is a <b>chain median across 944 instruments and is not a
              tradable spread</b> — it cannot be lifted or sold as printed.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · FIRST FRESH WEEKDAY PRINT IN THREE NOTES · 10Y +5.0bp to 4.74% (z +2.19, now episodic) · TIPS real +5.0bp to 2.40% · both EXTREME RISK-OFF · cross-asset still IDIOSYNCRATIC at 0.205</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro panel is finally carrying new data, and what it carries is
                hostile
              </span>. The 08-23 and 08-24 notes both ran on weekend re-renders of
              the Friday 08-21 FRED print; this 2026-08-24 22:16Z render is a{' '}
              <b>genuine weekday update</b> — multiple rows moved, and the count depends on what is counted, so all three are given rather than one round number: <b>7 rows changed underlying level</b>, <b>11 rows changed any printed text</b> once the four staleness counters are included, and the panel&rsquo;s own &ldquo;what changed&rdquo; filter names <b>6</b>. US 10Y nominal{' '}
              <span className="dn-tag bear">4.74% (+5.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.19</span> (from +1.98), episodic z{' '}
              <span className="dn-tag bear">+1.52</span> — newly flagged episodic and
              tagged EXTREME RISK-OFF. That +2.19 is the <b>highest fresh daily
              Tier-1 regime z on the board</b>; the board&rsquo;s outright highest is
              JGB 10Y at +2.42, and that row is{' '}
              <b>FRED monthly, flagged stale 84d — do not lean on it</b>. 10Y TIPS
              real <span className="dn-tag bear">2.40% (+5.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+2.03</span>, episodic +0.10 — also
              EXTREME RISK-OFF. Real rates and nominals both re-firming 5bp in a
              session is the cleanest macro headwind BTC has faced in this lineage,
              and it happened on the day BTC printed its high.
            </p>

            <p>
              The offsets are mixed rather than confirming. HY credit spread{' '}
              <span className="dn-tag bull">2.70% (−5.0bp)</span>, regime z −1.04,
              episodic −0.73 — tagged RISK-ON and tightening, which is the single
              friendliest Tier-1 line. Chicago Fed NFCI{' '}
              <span className="dn-tag bull">−0.559</span>, z −1.46, RISK-ON but{' '}
              <b>stale 10d</b>. MOVE bond vol <span className="dn-tag">74.0
              (+0.58)</span>, z +0.09 — neutral, unremarkable. DXY{' '}
              <span className="dn-tag">98.85 (+0.05)</span>, regime z −0.12 but
              episodic <span className="dn-tag bull">−1.61</span> — a soft dollar on
              the 30-day view, flagged episodic. Fed net liquidity{' '}
              <span className="dn-tag bear">$5.792T (−0.004T)</span>, regime z −1.22,
              episodic <span className="dn-tag bear">−2.45</span> — still draining,
              still the deepest episodic on the Tier-1 panel, still RISK-OFF. Tier 2:
              USD/JPY 158.91 (+0.03), z +0.55; US-JP 10Y spread 2.07% (+5.0bp),
              episodic +1.52; USD/CNY 6.7118 (−0.01), episodic{' '}
              <span className="dn-tag">−2.57</span> — the largest absolute episodic on
              the whole board. Tier 3 is a driver panel with no composite by design:
              sticky core CPI 3.48%, median CPI 3.11%, 10Y breakeven 2.32% (episodic
              +1.62), Michigan 1Y 4.6% (stale 84d), WTI $86.5 (stale 6d). The
              panel&rsquo;s own &ldquo;what changed&rdquo; filter fires on six rows:
              10Y +1.52, DXY −1.61, net liquidity −2.45, US-JP spread +1.52, USD/CNY
              −2.57, 10Y breakeven +1.62.
            </p>

            <p>
              Cross-asset stays <span className="dn-tag">IDIOSYNCRATIC</span> at a
              mean off-diagonal |r| of <b>0.205</b> (threshold &lt;0.25), easing from
              0.217 on 08-24 — BTC is trading on its own tape and the whole complex is
              loosely coupled. Over the 7d 1h sample BTC is{' '}
              <span className="dn-tag bull">+22.72%</span> against NQ{' '}
              <span className="dn-tag bear">−3.35%</span>, a spread of{' '}
              <b>26.07pt</b>, with SP500 −1.20%, JP225 −5.48% and NVDA −7.22%. BTC&rsquo;s
              top correlations are metals — PLAT +0.346, SILVER +0.286, PALL +0.243 —
              but the claim stops at <b>co-movement</b>: it identifies neither a
              driver nor a hedge, and it is explicitly <b>not</b> an
              &ldquo;equity-last&rdquo; ranking, since MSFT +0.236 outranks GOLD
              +0.211 outright and META +0.210 sits level with it to within 0.001. NQ
              ranks 12th of 21 at
              +0.123 and SP500 17th at +0.094. Two of the seven days in the window are
              weekend days carrying no equity prints, which mechanically dampens every
              BTC-vs-equity coefficient in the table.{' '}
              <span className="dn-em">
                Net: rates turned genuinely hostile on fresh data for the first time
                in three notes, and BTC ignored it — which is informative about the
                current regime and is not a reason to assume the next 5bp will also be
                ignored.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>Macro indicator</th><th>level</th><th>Δ</th><th>regime z</th><th>episodic z</th><th>read</th></tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.74%</td><td className="num bear">+5.0bp</td><td className="num bear">+2.19</td><td className="num bear">+1.52</td><td className="bear">EXTREME RISK-OFF · fresh daily · highest fresh-daily Tier-1 z · newly episodic</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.40%</td><td className="num bear">+5.0bp</td><td className="num bear">+2.03</td><td className="num">+0.10</td><td className="bear">EXTREME RISK-OFF · real rates re-firming</td></tr>
                <tr><td>5Y5Y inflation BE</td><td className="num">2.32%</td><td className="num bull">−2.0bp</td><td className="num">+1.46</td><td className="num">+1.03</td><td>no regime tag by design (asymmetric trigger)</td></tr>
                <tr><td>HY credit spread (OAS)</td><td className="num">2.70%</td><td className="num bull">−5.0bp</td><td className="num bull">−1.04</td><td className="num bull">−0.73</td><td className="bull">RISK-ON · the friendliest Tier-1 line, tightening</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.559</td><td className="num">−0.00</td><td className="num bull">−1.46</td><td className="num bull">−1.29</td><td className="bull">RISK-ON · <b>stale 10d</b> · weekly series</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">74.0</td><td className="num">+0.58</td><td className="num">+0.09</td><td className="num">−0.17</td><td>neutral · no signal</td></tr>
                <tr><td>USD index (DXY)</td><td className="num">98.85</td><td className="num">+0.05</td><td className="num">−0.12</td><td className="num bull">−1.61</td><td>neutral regime, soft on the 30-obs episodic</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.792T</td><td className="num bear">−0.004T</td><td className="num bear">−1.22</td><td className="num bear">−2.45</td><td className="bear">RISK-OFF · deepest Tier-1 episodic · draining</td></tr>
                <tr><td>USD/JPY</td><td className="num">158.91</td><td className="num">+0.03</td><td className="num">+0.55</td><td className="num">−0.73</td><td>no regime tag by design</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.07%</td><td className="num">+5.0bp</td><td className="num">+0.03</td><td className="num">+1.52</td><td>neutral regime · episodic flagged</td></tr>
                <tr><td>JGB 10Y</td><td className="num">2.67%</td><td className="num">+2.0bp</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">FRED <b>monthly · stale 84d · do not lean on it</b> — highest z on the board and the least usable</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7118</td><td className="num">−0.01</td><td className="num">−1.56</td><td className="num">−2.57</td><td>largest absolute episodic on the board · no regime tag by design</td></tr>
              </tbody>
            </table>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · pullback long RETIRED by its own rule (unfilled) · chase-short stood down for a fourth session · a retest-hold framework DEFINED and NOT ARMED · book FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat, it was flat through the whole move, and the honest
                accounting comes before the new framework
              </span>. The 08-24 note wrote a disposal rule and the tape fired it
              inside 24 hours. That is the good news and the bad news in one line: the
              desk pre-committed to killing its own idea on a specified, checkable
              condition, and the condition fired at a price where the idea would have
              made money if it had ever been entered. Two frameworks have now been
              disposed of in eight days — the 08-19 cover-bounce scout expired
              unfilled on 08-22 at an opportunity cost of 10.03R gross / ≈2.01R at
              the stated 0.2R sizing, and the pullback long is retired today, unfilled,
              having missed its arming print by $20.30 and its first target by $9.00
              on consecutive sessions. <b>Neither was wrong about direction. Both were
              wrong about availability.</b> That is now a pattern with two
              observations and it is recorded as such rather than explained away.
              There is still <b>no lineage MFE ledger</b>, so neither miss is ranked
              against prior misses; that ledger has been an open item since the 08-22
              audit. <b>Its row unit is defined here so the depth is checkable: one
              row per dated near-miss or disposal event.</b> On that definition it
              would hold <b>three rows</b> — (1) the 08-19 scout, expired unfilled,
              recorded 08-22; (2) the 08-23 $20.30 arming near-miss; (3) today&rsquo;s
              retirement, carrying the 08-24 $9.00 first-target near-miss as the same
              framework&rsquo;s terminal observation. Today adds the third.
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · pullback re-entry framework · <b>RETIRED — UNFILLED</b> · killed by the 08-24 note&rsquo;s own pre-committed disposal rule, not by drift and not by the tape falsifying it</span>
              <div className="dn-trade-name">
                Pullback long at the $75,000–$76,000 wall band — retired at the levels
                it was written at, never entered, and explicitly not re-drawn upward
              </div>
              <div className="dn-thesis">
                The 08-24 note published this exact sentence:{' '}
                <em>
                  &ldquo;if a 1d close prints above the $78,000 / $78,228.40 /
                  $78,446.94 lid, this framework is retired as too low rather than
                  carried — the same disposal the 08-19 scout got, taken deliberately
                  instead of by drift.&rdquo;
                </em>{' '}
                The <b>08-24 daily close printed $78,953.00</b>. It clears the
                $78,000 wall by $953.00, the D-EMA400 by $724.60 on the note&rsquo;s
                quoted $78,228.40 (and by $717.62 on today&rsquo;s recomputed
                $78,235.38 — it fires on either value), and the W-EMA100 $78,446.94 —
                the highest of the three — by <b>$506.06, or +0.65%</b>. The basis is
                the exchange daily bar, which is the basis this book adopted on 08-24
                after the $91.90 price-basis disagreement, so the rule fires on the
                stated basis rather than on a convenient one.{' '}
                <b>The framework is retired.</b> Leg 1 (the 08-23 W-SUN settle at
                $77,719.10, +20.93% above W-SMA200 $64,269.62) had been permanently
                satisfied; leg 2 never fired, and the closest it came was a 1h close
                $20.30 above the band top. The independent structural evidence agrees
                with the rule: the entire $70k–$76k wall shelf the entry depended on
                got lighter again this session, with $75,000 easing +13.08M → +8.65M,
                $76,000 +11.21M → +8.90M, $74,000 +11.59M → +8.16M, $72,000 +11.57M →
                +8.55M and $70,000 +18.57M → +11.77M, and all four of the
                $72k–$76k strikes falling out of the top ten. The band the desk
                wanted to buy is no longer a structurally defended band.{' '}
                <b>
                  It is not re-drawn to a higher price. A framework that is moved up
                  to meet the tape is not a framework, and the whole point of writing
                  the disposal rule in advance was to make this decision boring.
                </b>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v"><b>RETIRED · UNFILLED</b> · disposal rule fired on the 08-24 daily close $78,953.00 vs the $78,446.94 top of the lid (+$506.06 / +0.65%)</span></div>
                <div><span className="dn-lvl-k">final state of the legs</span><span className="dn-lvl-v">leg 1 <b>FIRED and permanent</b> (08-23 W-SUN $77,719.10 = +20.93% vs W-SMA200 $64,269.62) · leg 2 <b>NEVER FIRED</b> — closest approach a 1h exchange close $76,020.30, $20.30 above the band top, with a 1m low $75,588.00 that got $412.00 inside and no hour held</span></div>
                <div><span className="dn-lvl-k">opportunity cost</span><span className="dn-lvl-v">not computed as an R figure — unlike the 08-19 scout, this framework never armed on either candidate basis, so there is no fill price to measure from. The measurable facts are the two near-misses: $20.30 on the arming print (08-23) and $9.00 on the first target $80,000 (24h high $79,991.00, 08-24)</span></div>
                <div><span className="dn-lvl-k">what is NOT carried forward</span><span className="dn-lvl-v bear">the $76,000 entry, the $72,992.40 stop, the $80,000 / $81,784.71 target ladder and the 1.33:1 R/R are all retired with the framework · none of them are transplanted into the new framework below, which is a different setup with its own levels</span></div>
                <div><span className="dn-lvl-k">what IS carried forward</span><span className="dn-lvl-v">the two open design defects: the <code>net_btc</code> gate unsoundness, and the requirement that every band gate name its price basis <em>and</em> its duration before publication</span></div>
              </div>
              <div className="dn-gating">
                <b>Process note:</b> this is the second consecutive framework the desk
                has disposed of on a written rule rather than allowed to drift, and it
                is the second consecutive framework that was never entered. Those two
                sentences are both true and they point in opposite directions. The
                disposal discipline is working exactly as designed. The{' '}
                <em>entry</em> discipline has now produced two correct directional
                calls and zero positions across a +22.72% seven-day move, and that is
                a cost the desk carries openly rather than a process to congratulate
                itself on. The correct conclusion is not &ldquo;loosen the
                gates&rdquo; — a gate loosened after a miss is a gate set by regret.
                It is that the gates were placed at levels the tape had already left,
                and the next framework should be anchored to structure the tape is
                actually trading against.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · retest-hold framework · <b>DEFINED · NOT ARMED</b> · a new object with its own levels, not a migration of the retired one</span>
              <div className="dn-trade-name">
                Retest-hold long at the reclaimed $78,000 / D-EMA400 / W-EMA100 shelf —
                defined with basis and duration named, and deliberately not armed at
                this snapshot
              </div>
              <div className="dn-thesis">
                Defining a higher framework the day after retiring a lower one is
                exactly the drift the 08-24 note warned about, so the guard is stated
                first: <b>this is a different setup, not the old one moved up</b>. The
                retired framework was &ldquo;buy a deep pullback into a defended wall
                band.&rdquo; This one is &ldquo;buy the retest of a ceiling that has
                been cleared and closed above,&rdquo; which is a setup that did not
                exist until 08-24 and could not have been written earlier. It is
                anchored to three levels the tape has now traded through and closed
                above on the exchange basis: the{' '}
                <b>$78,000 wall (+27.16M), D-EMA400 $78,235.38, W-EMA100
                $78,446.94</b> — a $446.94-wide shelf sitting 0.62%–1.18% below spot.
                The case for it: 18-of-20 MA matrix, 10-of-10 daily ladder, MTF 9 long
                / 0 short / 1 neutral with zero shorts on either convention, a
                +256.84M footed clamp with all ten top walls positive, funding off the
                cap, retail at its 7d floor, and a settled weekly close 20.93% above
                the cycle floor. The case against arming it{' '}
                <em>today</em>, which is why it is not armed: the{' '}
                <b>1d TD9 SELL has printed</b>, 12h RSI 85.0 and 1d RSI 82.2 are
                still in the 80s, the 1h MACD printed a fresh water-up death cross one
                bar ago, <b>OI expanded +1.58%</b> rather than contracting, spot sits
                1.35% under the heaviest wall on the board (+44.28M at $80,000),
                $9.00 above where the 24h high stopped — consistent with resistance
                on the bracketing daily panels, with no intraday panel loaded to establish causality — and the
                fresh macro print turned genuinely
                hostile with 10Y and TIPS real both +5.0bp. <b>A retest that has not
                happened is not an entry.</b> The framework is written down now so
                that if the retest comes the desk is not inventing a rule inside the
                move.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v"><b>DEFINED · NOT ARMED</b> · zero legs fired · no position, no order, no partial</span></div>
                <div><span className="dn-lvl-k">arming condition (basis AND duration named)</span><span className="dn-lvl-v bull"><b>two consecutive 1h closes on the exchange bar basis</b> held at or above <b>$78,000</b> after a print that has traded at or below <b>$78,000</b> within the prior 12h · the basis is the exchange 1h bar, not the live-tape sample; the duration is two bars, not &ldquo;held&rdquo; · this specification closes the 08-24 design defect at the point of writing rather than after the fact</span></div>
                <div><span className="dn-lvl-k">entry</span><span className="dn-lvl-v bull">≈$78,200 on the second confirming close · 0.2R · <b>no chase</b> — a tape that runs to $82k without ever retesting $78,000 is a trade this desk does not take, and that outcome is explicitly accepted in advance</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1d close &lt; $77,248.42 (W-EMA50, the lower edge of the shelf that has held three consecutive sessions) — <b>2.13% below spot</b>; a 2.13% decline reaches it, equivalently spot is +2.18% above it</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$80,000 (the +44.28M heaviest wall · +1.35% from spot) then W-SMA50 $81,784.71 (+3.61%) · the $80,000 line is a target precisely <em>because</em> it is the heaviest wall — that is where the move is most likely to stall, not where it is most likely to break</span></div>
                <div><span className="dn-lvl-k">disposal rule (written in advance, as before)</span><span className="dn-lvl-v bear">if a 1d close prints below <b>$77,248.42</b> without the arming condition ever having fired, this framework is retired unfilled and the bullish structure is reassessed from scratch — the shelf-hold thesis is then simply wrong. If instead a 1d close prints above <b>$81,784.71</b> (W-SMA50) without the retest ever arriving, it is <b>retired as too low</b>, on the same logic that retired its predecessor today</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R (illustrative):</b> entry ≈$78,200, stop $77,248.42 = $951.58
                of risk; first target $80,000 = $1,800 of reward ={' '}
                <b>1.89:1</b> (1,800 / 951.58 = 1.8916). That is better than the
                retired framework&rsquo;s 1.33:1, and the desk should be suspicious of
                exactly that fact — a tighter stop under a shelf that has held three
                sessions produces a flattering ratio precisely because the shelf has
                not yet been tested from above. The ratio is arithmetic on chosen
                levels, not evidence. <b>Hard rule, restated:</b> the levels above do
                not move if price stalls short of them, and this framework gets the
                same disposal treatment its predecessor got, on the same written
                conditions, without re-litigation.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · chase-short · <b>STOOD DOWN</b> — fourth consecutive session · price leg 18.92% from arming (further than 08-24&rsquo;s 18.13%) · gamma leg DEEPENED +9.15M to +256.84M footed, the deepest of the CHECKED post-08-16 lineage (08-21 archive absent)</span>
              <div className="dn-trade-name">
                Chase-short — stood down again; both legs moved further away and the
                mean-reversion evidence is stronger than it has been, which still does
                not make it a short
              </div>
              <div className="dn-thesis">
                The two conditions that would put a short on the table are a price leg
                (spot within reach of the 0-γ flip, where the dealer book stops
                dampening and starts amplifying) and a gamma leg (the positive clamp
                unwinding). Both moved <em>away</em> for a fourth consecutive session.
                The flip sits at <b>$64,001, 18.92% below spot</b> — an 18.92% decline
                is required to reach it, against 18.13% on 08-24; the leg moved
                further because the flip rose $449 while spot rose roughly $1,300. The
                clamp deepened <b>+9.15M to +256.84M footed</b>, the{' '}
                <b>deepest positive print of the checked post-08-16 lineage</b>,
                clearing the actual prior high <b>08-20 +254.15M by only +2.69M</b>{' '}
                (08-22&rsquo;s +249.91M is the third-deepest, not the comparator) —
                and still <b>NOT a lineage maximum</b>, with 07-22 +313.63M and
                07-23 +283.46M deeper on the same footed basis, and{' '}
                <b>no 08-21 archive on file</b>, so the ordinal is over available
                panels rather than over every day. This session the mean-reversion
                evidence is genuinely the strongest it has been:{' '}
                <b>the 1d TD9 SELL has fired</b> rather than being one bar out, 12h
                RSI 85.0 and 1d RSI 82.2, two top divergences on 15m/30m, a fresh 1h
                water-up death cross, a high that stopped $9.00 short of $80,000
                where the bracketing panels put a +44.28M wall (consistent with
                resistance, not proof of causality), and a fresh macro print with
                10Y and TIPS real both
                +5.0bp. <em>
                  All of it is still mean-reversion evidence inside a 9 long / 0 short
                  / 1 neutral MTF map, a 10-of-10 positive daily ladder, an 18-of-20
                  full matrix, and a settled weekly close 20.93% above the cycle
                  floor. Shorting into a +256.84M positive-gamma book 23% above the
                  flip is a trade with no structural backing, and a pile of overbought
                  oscillators is not a substitute for one.
                </em>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">STOOD DOWN — no short contemplated at this snapshot</span></div>
                <div><span className="dn-lvl-k">price leg (unmet · further away)</span><span className="dn-lvl-v bear">spot within reach of the 0-γ flip $64,001 — currently 18.92% below spot; spot is +23.33% above it (+23.88% off the file&rsquo;s Deribit index $79,287)</span></div>
                <div><span className="dn-lvl-k">gamma leg (unmet · further away)</span><span className="dn-lvl-v bear">footed aggregate GEX turning negative or collapsing toward zero — currently +256.84M (headline +255.6M), DEEPENED +9.15M vs 08-24 · the 28AUG26 +80.34M / 31.28% line at 3.3 DTE is the nearest dated structural catalyst that could move this leg</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">do not read the fired 1d TD9 SELL, the 12h/1d RSI in the 80s, the 15m/30m top divergences, the fresh 1h death cross or the high stopping $9.00 short of $80,000 as short triggers — they are the reasons not to <em>chase long</em>, which is a different instruction from going short</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the gamma leg has a dated candidate and
                the price leg does not. 28AUG26 contributes +80.34M — 31.28% of the
                footed strip — at current IV, settling 2026-08-28 08:00Z, with 25SEP26
                another +76.11M / 29.63%, so two lines carry 60.91% of the clamp.
                Absent offsetting book, spot or IV changes, the 28AUG26 contribution
                comes off at that settle and thins the clamp materially. That remains
                a <em>watch</em>, not a forecast, and this session supplies the
                evidence for the caveat: its share has now fallen three sessions
                running (36.17% → 33.71% → 31.28%) <em>while the strip as a whole
                grew</em> by +14.47M over the same span.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">closed · 08-19 cover-bounce scout · EXPIRED UNFILLED — recorded 08-22, unchanged, not re-litigated</span>
              <div className="dn-trade-name">
                08-19 scout — carried in the book only as the open design defects it
                exposed, one of which is closed today at the point of writing
              </div>
              <div className="dn-thesis">
                The 08-19 scout (entry ≈$64,632, stop $63,301, targets $66,343 /
                $66,391) was recorded on 08-22 as <b>EXPIRED UNFILLED</b> at an
                opportunity cost of 10.03R gross / ≈2.01R at the stated 0.2R sizing,
                both targets tagged 2026-08-19 15:05Z. Nothing this session changes
                that record. What stays live is the defect: the trade never armed
                because its leg 2 required a certifiable SM net long, and the SM feed
                produces its net long inside one-minute trader-count discontinuities.
                Today the evidence for that is stronger than it has ever been —{' '}
                <b>
                  seven one-per-day steps in seven days, every one of them inside a
                  06:21Z–07:06Z band, in both directions
                </b>
                . The mechanism remains <b>NOT LOADED and is not asserted</b>; the
                timing regularity is an observation about the tape, and the desk does
                not convert it into a claim about upstream systems it cannot see. The
                design conclusion needs no mechanism and is unchanged: no gate in this
                book is written against <code>net_btc</code>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">EXPIRED UNFILLED · closed out 08-22 · NOT re-drawn · no further accounting added this session</span></div>
                <div><span className="dn-lvl-k">open design item 1 · SM gate (STRENGTHENED)</span><span className="dn-lvl-v bear">one-minute <code>net_btc</code> steps on 08-18 06:21Z, 08-19 06:46Z, 08-20 07:06Z, 08-21 06:21Z, 08-22 06:41Z, 08-23 07:06Z, 08-24 06:26Z — seven consecutive days inside a 45-minute band, both directions · 93.28% of this note&rsquo;s 24h Δnet is the 08-24 step · cause NOT loaded · a binary decision gate on <code>net_btc</code> is unsound on this series regardless of mechanism</span></div>
                <div><span className="dn-lvl-k">open design item 2 · price basis (CLOSED at point of writing)</span><span className="dn-lvl-v bull">the 08-24 note recorded that &ldquo;a 1h close held inside a band&rdquo; names neither basis nor duration. The retest-hold framework above names <b>both</b> — exchange 1h bar basis, two consecutive closes — before publication rather than after a disputed print. The defect is closed as a specification rule; whether it holds is a matter for the next framework that uses it</span></div>
                <div><span className="dn-lvl-k">open design item 3 · MFE ledger (STILL OPEN)</span><span className="dn-lvl-v bear">no lineage MFE ledger exists, so neither the 08-19 expiry nor today&rsquo;s retirement is ranked against prior misses · open since the 08-22 audit · row unit defined as <b>one row per dated near-miss or disposal event</b>, on which the ledger would be <b>three rows</b>: 08-19 scout expiry (recorded 08-22), the 08-23 $20.30 arming near-miss, and today&rsquo;s retirement carrying the 08-24 $9.00 first-target near-miss</span></div>
              </div>
              <div className="dn-gating">
                <b>Accounting note:</b> the 10.03R / ≈2.01R figures are arithmetic on
                a trade that was never entered, recorded for process accountability,
                not as a claim of performance. The same applies to every near-miss
                figure in this note: $20.30, $9.00 and $506.06 are measurements of
                where the tape went relative to written levels, not P&amp;L.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the disposal rule FIRED and the framework is retired · funding un-pin FIRED but with OI rising · 1d TD9 SELL FIRED · retail de-crowd RE-FIRED · book FLAT with one new framework DEFINED and NOT ARMED</span>
            </h2>

            <p>
              Of the 08-24 conditions: the <b>lid test FIRED</b> — the 08-24 daily
              close $78,953.00 cleared the $78,000 / $78,228.40 / $78,446.94 band by
              $506.06 at its highest edge, and per that note&rsquo;s own written rule
              the pullback framework is <b>retired as too low</b>; the{' '}
              <b>1d TD9 SELL FIRED</b>, exactly one bar after it was flagged as one
              bar out; the <b>funding un-pin FIRED</b> after 4,953 consecutive capped
              rows, though <em>only partially</em> — the condition&rsquo;s
              &ldquo;ideally with OI falling&rdquo; clause failed, with OI expanding
              +1,670.2 BTC / +1.58%, and 4h46m is a young stretch against an
              undefined &ldquo;sustained&rdquo;; the <b>retail re-crowd watch
              REVERSED</b> — 51.69% → 48.58%, −3.11pt, with the 24h trough 48.12%
              also the 7d minimum, so the adverse read the 08-24 note logged
              un-printed itself in one session; the <b>shelf hold HELD</b> for a third
              consecutive session (W-EMA50 $77,248.42 / W-SMA150 $77,446.22, spot
              +2.18% / +1.92% above), so the &ldquo;drop the level&rdquo; trigger did
              not fire; the <b>pullback arming leg 2 DID NOT FIRE</b> and is now moot
              — the 24h low $76,649.00 stayed $649.00 above the band top; the{' '}
              <b>chase-short stayed stood down</b> with both legs further away; the{' '}
              <b>28AUG26 clamp did not roll off</b> and its share eased a third time
              to 31.28%; the <b>SM feed defect RECURRED</b> for a fifth consecutive
              session; and the <b>macro panel finally refreshed</b> on weekday data
              after two re-renders.{' '}
              <em>
                Five conditions fired in a single session — four of them the ones the
                desk said it wanted, one of them the one it said it feared — and the
                book was flat for all of them. The 200W watch JSON is absent from this
                server and the cycle-floor read is carried on the parquet matrix
                fallback, which is disclosed rather than papered over.
              </em>
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td><b>Lid test</b> (FIRED — disposal rule)</td><td className="bull">08-24 daily close $78,953.00 vs the $78,000 wall / D-EMA400 $78,228.40 / W-EMA100 $78,446.94 band · clears the highest edge by $506.06 (+0.65%) on the adopted exchange-bar basis</td><td><b>EXECUTED</b>: the pullback long is RETIRED as too low, unfilled, at its original levels. Not re-drawn, not carried, not re-argued. The three lid levels invert to support and become the anchor of the new retest-hold framework</td></tr>
                <tr><td><b>1d TD9 SELL</b> (FIRED)</td><td className="bear">printed at $78,932 on the 00:01Z scan · the file flags the last bar as possibly in-progress</td><td>not a short trigger and not treated as one. It is the primary reason the new framework is DEFINED and NOT ARMED, and the primary reason no long is taken 1.35% under a +44.28M wall</td></tr>
                <tr><td><b>Funding un-pin</b> (FIRED — partially)</td><td className="bull">cap streak ran 08-21 08:48Z → 08-24 19:20Z inclusive (4,953 rows / 4,952 min); first below-cap row 19:21Z · 287 rows / 286 minutes = 4h46m below cap · now +6.31% ann from +10.95% (−4.64pt) · 24h mean +10.3032%, occupancy 80.1%</td><td>the worst single line in the book for four sessions is relieved. <b>But the condition&rsquo;s &ldquo;ideally with OI falling&rdquo; clause FAILED</b> — OI rose +1.58%. Treat as fired-but-young: carry cheaper on a bigger base is not the same as leverage clearing</td></tr>
                <tr><td><b>Retail re-crowd</b> (REVERSED)</td><td className="bull"><code>mkt_long_pct</code> 48.58%, −3.11pt in 24h · 24h trough 48.12% @ 08-24 16:47Z is also the 7d minimum · endpoints 51.69% → 48.58%</td><td>the 08-24 adverse read un-printed in one session. The ~55% re-crowd threshold is far away and the &ldquo;retail is not in this&rdquo; leg of the bull case is stronger than when first written. Still a note, not a signal</td></tr>
                <tr><td><b>Retest-hold arming</b> (NEW · unfired · basis and duration named)</td><td className="bull">two consecutive 1h closes on the <b>exchange bar basis</b> at or above <b>$78,000</b>, following a print at or below $78,000 within the prior 12h · spot is currently +1.20% above $78,000, so the retest has not happened</td><td>scout long 0.2R at ≈$78,200, stop 1d close &lt; $77,248.42, targets $80,000 then W-SMA50 $81,784.71 · R/R 1.89:1 · <b>no chase</b> if the retest never comes</td></tr>
                <tr><td><b>Retest-hold disposal</b> (NEW · written in advance)</td><td className="bear">1d close &lt; $77,248.42 with the arming condition never fired → retired unfilled, bullish structure reassessed from scratch · OR 1d close &gt; $81,784.71 with the retest never arriving → retired as too low</td><td>the same treatment that retired its predecessor today, pre-committed on the same day the framework is written rather than added later</td></tr>
                <tr><td><b>$80,000 wall</b> (NEW dated overhead)</td><td className="bear">+44.28M, the heaviest single strike on the board, strengthened from +40.17M · the 24h high $79,991.00 stopped $9.00 short of it · spot 1.35% below · <b>no intraday GEX panel brackets the 15:32Z high; the wall is a daily-panel inference consistent with resistance, not an observed cause</b></td><td>a target, not a level to buy in front of. A daily close above $80,000 would be the first evidence the largest gamma concentration in the book is being absorbed rather than holding</td></tr>
                <tr><td>Structural invalidation (re-anchored)</td><td className="bear">1d close &lt; $77,248.42 (W-EMA50) · 2.13% below spot — a 2.13% decline reaches it (spot is +2.18% above) · the old $72,992.40 level is retired with the framework it belonged to</td><td>the shelf-hold thesis is falsified and the whole bullish structure is reassessed. Note this invalidation sits far tighter than the retired framework&rsquo;s 8.14%-away stop, which is a real increase in per-trade fragility and is stated as such</td></tr>
                <tr><td>Shelf hold (carried · third consecutive hold)</td><td className="bull">1d closes sustained above W-EMA50 $77,248.42 / W-SMA150 $77,446.22 — currently +2.18% / +1.92%</td><td>held again; the 08-24 note&rsquo;s &ldquo;a third loss inside a week retires the framing&rdquo; trigger did not fire. The pair is now doing structural work as the new stop rather than as a narrative shelf</td></tr>
                <tr><td>28AUG26 gamma roll-off</td><td className="bear">+80.34M = 31.28% of the footed +256.84M strip, 3.3 DTE, settles 2026-08-28 08:00Z · with 25SEP26 +76.11M / 29.63%, two lines carry 60.91%</td><td>a snapshot contribution at current IV, <b>not a guaranteed roll-off</b> — its share has now eased three sessions running (36.17% → 33.71% → 31.28%) while the strip grew +14.47M, which is the caveat demonstrating itself</td></tr>
                <tr><td>SM feed (design defect · NOT a trading condition)</td><td className="stale">seven one-per-day steps, 08-18 through 08-24, every one inside 06:21Z–07:06Z, both directions · 93.28% of this note&rsquo;s 24h Δnet is the 08-24 06:26Z step · the steps are observed; the upstream cause is <b>NOT LOADED and is not asserted</b></td><td>no gate is written against <code>net_btc</code>. The only SM statement carried is the step-free 17h41m window (Δnet +1,146.6, +3.67%) and it is descriptive, not decisive</td></tr>
                <tr><td>200W cycle-floor watch (SOURCE MISSING)</td><td className="stale">weekly_200sma.json is <b>absent from this server</b> · matrix fallback used: W-SMA200 $64,269.62 on 364 settled weekly closes, 08-23 close $77,719.10 = +20.93%, spot +22.82% · ranking convention named: <b>37/165 strictly lower = 22.4%</b>, inclusive empirical rank <b>38/165 = 23.0th percentile</b>; below-floor count 10/165 (6.1%) — all three computed here from parquet, not read from the watch file</td><td>no JSON <code>state</code>, <code>ratio_pctile</code> or <code>last_event</code> is quoted anywhere in this note. Restoring the watch file is an infrastructure item, not a trading condition</td></tr>
                <tr><td>Macro re-grow / rates filter (FRESH data)</td><td className="bear">first weekday print in three notes: 10Y 4.74% (+5.0bp, z +2.19, newly episodic +1.52), TIPS real 2.40% (+5.0bp, z +2.03), both EXTREME RISK-OFF · offsets mixed: HY OAS 2.70% (−5.0bp, RISK-ON), DXY 98.85 episodic −1.61, Fed net liq $5.792T episodic −2.45 draining</td><td>no macro action is available from a rates re-firm that BTC ignored on the same day. The read is informational: the panel turned hostile on fresh data and the tape did not care, which describes the current regime and does not underwrite the next print</td></tr>
                <tr><td>MFE ledger (design defect · STILL OPEN)</td><td className="stale">no lineage MFE ledger exists · open since the 08-22 audit · row unit = one dated near-miss or disposal event, giving <b>three rows</b>: 08-19 scout expiry (recorded 08-22) · 08-23 $20.30 arming near-miss · 08-25 retirement carrying the 08-24 $9.00 first-target near-miss</td><td>build it before the next framework is disposed of, so that &ldquo;the gates are set where the tape does not go&rdquo; becomes a measured claim rather than an impression from two observations</td></tr>
              </tbody>
            </table>

            <p>
              The line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the tape comes back to retest the $78,000 shelf it just
                converted from ceiling to floor — letting the desk finally buy
                something on a written rule — or whether it clears $80,000 and its
                +44.28M wall without ever looking back, and the desk retires a third
                framework unfilled
              </span>
              . Everything else is context. The structure is the best it has been in
              this lineage and it is better on evidence: 18-of-20 on the full MA
              matrix, a 10-of-10 daily ladder, MTF 9 long / 0 short with zero shorts
              on either convention, a +256.84M footed clamp with all ten top walls
              positive and gamma mass migrating up with price, funding off the cap
              after 4,953 rows, retail at its seven-day floor, and a settled weekly
              close 20.93% above the cycle floor. The tape is also, still, not
              offering a good entry: the 1d TD9 SELL has fired, 12h and 1d RSI sit in
              the 80s, OI expanded through the up-day, the fresh macro print put 10Y
              and TIPS real up 5bp apiece, and spot sits 1.35% beneath the heaviest
              wall on the board, having stopped $9.00 short of it on a level
              coincidence the daily panels bracket but do not prove.{' '}
              <em>
                Those two readings have not been in conflict for four notes running,
                and today the desk stopped describing the tension and acted on it: the
                low framework is retired, a new one is written at the level the tape
                is actually trading, with its basis, its duration and its disposal rule
                all named in advance. The book stays FLAT. What is different this
                session is that flat is now a position taken with a written condition
                attached, rather than a position taken by default.
              </em>
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 · post codex hostile audit
            </span>
            <b>
              Status: STAGE B codex hostile audit run at xhigh effort against the v1
              draft; verdict <span className="dn-tag bear">BLOCK-CRITICAL — 2
              CRITICAL + 2 MAJOR + 6 MINOR</span>. Record:{' '}
              <code>audits/2026-08-25-desk-note.md</code>. This v2 applies all ten
              findings and each one was closed by whole-file grep, not by fixing the
              cited lines alone.
            </b>{' '}
            The closure method, stated so it can be checked: for every finding the
            wrong-claim string and its semantic variants were grepped across the
            whole EN file before and after the fix, and the finding is marked
            RESOLVED only where hits-after = 0. Per finding —{' '}
            <b>DN-001 (CRITICAL, IV/RV richness causality)</b>: patterns{' '}
            <code>because RV rose</code>, <code>not because IV fell</code>,{' '}
            <code>realized volatility rose into the move</code>,{' '}
            <code>not because implied cheapened</code> — 2 hits before (meta tile and
            §III), <b>0 after</b>; both sites now carry the measured decomposition
            (gap narrowed 3.2513pt, chain-median IV −3.2000pt supplying 98.4%, RV
            +0.0513pt) — <b>RESOLVED</b>.{' '}
            <b>DN-002 (CRITICAL, omitted 08-20 GEX foot)</b>: patterns{' '}
            <code>+6.93M</code>, <code>complete ledger</code>,{' '}
            <code>prior post-08-16 high of 08-22</code>,{' '}
            <code>deepest positive clamp/print of the post-08-16</code> — 4 hits
            before across §III, the roman header and the chase-short block,{' '}
            <b>0 after</b>; the comparator is now 08-20 +254.15M cleared by +2.69M,
            the ordinal is scoped to the <em>checked</em> lineage, the 08-21 archive
            gap is disclosed at all four sites, and the full ledger 08-17 +28.06M /
            08-18 +128.85M / 08-19 +128.94M / 08-20 +254.15M / 08-21 NO ARCHIVE /
            08-22 +249.91M / 08-23 +242.37M / 08-24 +247.69M / 08-25 +256.84M is
            printed — <b>RESOLVED</b>.{' '}
            <b>DN-003 (MAJOR, full-profile universal)</b>: patterns{' '}
            <code>every strike that moved</code>,{' '}
            <code>moved in the direction of price</code> — 1 hit before,{' '}
            <b>0 after</b>; the universal is deleted, the claim is scoped to the
            named material walls, and the four measured exceptions ($87,000 and
            $89,000 lighter above, $65,000 and $66,000 more negative below) plus the
            28-heavier / 17-lighter split on the 45 common strikes are printed —{' '}
            <b>RESOLVED</b>.{' '}
            <b>DN-004 (MAJOR, $80k wall causality)</b>: pattern{' '}
            <code>reject</code> (case-insensitive, all inflections) — 6 hits before
            across §I, §II, the retest-hold thesis, the chase-short thesis, the
            do-not line and the closing paragraph, <b>0 after</b>; every site now
            says price stopped $9.00 short of $80,000 with the bracketing daily
            panels (+40.17M at 08-24 00:00Z, +44.28M at 08-25 00:01Z, ~15.5h before
            and ~8.5h after the 15:32Z high) named as consistent with resistance and
            explicitly not proof of causality — <b>RESOLVED</b>.{' '}
            <b>DN-005 (MINOR, front-expiry attribution)</b>: pattern{' '}
            <code>the 24AUG26 −1.21M the 08-24 note recorded</code> — 1 hit before,{' '}
            <b>0 after</b>; 24AUG26 is now stated as −1.21M on 08-23 and +9.67M on
            08-24, with the actual 08-24 negatives 26AUG26 / 27AUG26 at −0.03M each —{' '}
            <b>RESOLVED</b>.{' '}
            <b>DN-006 (MINOR, un-pin minute and duration)</b>: pattern{' '}
            <code>4h47m</code> — 5 hits before across the two meta tiles, §I twice
            and the decision table, <b>0 after</b>; every site now reads last capped
            row 19:20Z, first below-cap row 19:21Z, 287 rows / 286 elapsed minutes =
            4h46m through 00:07Z — <b>RESOLVED</b>.{' '}
            <b>DN-007 (MINOR, staleness direction)</b>: pattern{' '}
            <code>ahead of the tape anchor</code> — 3 hits before (MTF manifest row,
            GEX manifest row, NFA), <b>0 after</b>; all three now read ~6 min{' '}
            <em>before</em> the anchor — <b>RESOLVED</b>.{' '}
            <b>DN-008 (MINOR, percentile convention)</b>: patterns{' '}
            <code>22.4th percentile</code> without the inclusive rank,{' '}
            <code>percentile 22.4 and below-count</code> — 2 hits before (§II and the
            decision table), <b>0 after</b>; both sites now print 37/165 strictly
            lower = 22.4% <em>and</em> inclusive empirical rank 38/165 = 23.0th —{' '}
            <b>RESOLVED</b>.{' '}
            <b>DN-009 (MINOR, macro row count)</b>: pattern{' '}
            <code>ten rows moved</code> — 1 hit before, <b>0 after</b>; replaced with
            the three defensible counts (7 changed levels, 11 changed any text with
            staleness counters, 6 named by the panel&rsquo;s own filter) —{' '}
            <b>RESOLVED</b>.{' '}
            <b>DN-010 (MINOR, MFE ledger depth)</b>: patterns{' '}
            <code>three entries deep</code>, <code>would all be entries</code>,{' '}
            <code>adds a third entry that would belong</code> — 3 hits before (§V
            prose, open design item 3, decision table), <b>0 after</b>; the row unit
            is now defined once (one row per dated near-miss or disposal event) and
            the same three rows are enumerated identically at all three sites —{' '}
            <b>RESOLVED</b>.{' '}
            <b>All ten findings RESOLVED with hits-after = 0.</b> Carried forward
            unresolved as disclosed open issues rather than as claims: no 2026-08-21
            GEX archive exists, so the lineage ordinal is over available panels only;
            no intraday GEX panel brackets the 15:32Z high; the canonical{' '}
            <code>weekly_200sma.json</code> is absent and the cycle-floor read is a
            disclosed parquet fallback quoting no JSON state field; no lineage MFE
            ledger exists; the SM upstream cause is NOT LOADED and no mechanism is
            named; NTT, max-pain, strike-level IV and the BTC/NQ ratio remain
            framework-only; and the live JSONL writer still carries one NUL-only
            record at physical line 65,799, outside every window used here. Build
            proxy: <code>npx --no-install tsc --noEmit</code> exits 0 (Node 18.19.1
            blocks a full Next 16.2.6 build on this server, as recorded in the audit).
            Codex-confirmed clean and unchanged in v2: the{' '}
            <code>requireViewer(&apos;/desk/2026-08-25&apos;)</code> gate as the first
            statement of the default export; the frozen 00:07Z anchor and BJ-local{' '}
            <code>t</code> convention; the funding × 1095 arithmetic; the three
            disclosed GEX aggregations; the full MA matrix off all eight yearly
            parquet files; the SM cut fraction and 93.28% step share; and every macro
            and cross-asset cell.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among
            principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a
            single atomic snapshot (2026-08-25 00:07Z) with section-level provenance
            disclosed in the manifest band above; the macro Tier-1 panel render is
            2026-08-24 22:16Z (~1.9h before the snapshot), the MTF and GEX artifacts
            are 00:01Z (~6 min before the tape anchor — stale relative to it, not later than it), the 200W cycle-floor watch
            file is <em>absent</em> and its read is a disclosed parquet fallback, and
            several inputs are explicitly stale, missing or framework-only and flagged
            as such. Levels, sizes, and conditions are illustrative of the desk&rsquo;s
            process, not standing recommendations. Opportunity-cost and near-miss
            figures describe where the tape went relative to written levels and are
            not statements of realized performance. Past correlation, gamma, and
            positioning patterns do not bind future tape. Derivatives carry the risk
            of total loss and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The rule we wrote fired, so the trade we wrote is retired — unfilled,
                at the levels it was written at, for the second time in eight days.
                Funding came off the cap, retail left, the lid became the floor. The
                book is still flat. The new framework names its basis, its duration
                and its own disposal rule before it names an entry.
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
            v2 · 2026-08-25 00:07Z snapshot · post codex hostile audit · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Deribit
          </span>
        </footer>
      </article>
    </main>
  );
}
