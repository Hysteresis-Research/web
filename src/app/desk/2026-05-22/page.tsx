import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// Internal-only route: not in public nav, not in sitemap, noindex/nofollow.
// Description deliberately anodyne — any future external share (Slack/email
// link preview) shows neutral text rather than dated trade specifics.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-05-22 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-05-22',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-05-22' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260522() {
  await requireViewer('/desk/2026-05-22');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · DESK NOTE · 2026-05-22 · v2</span>
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
              <span className="dn-big">$77,568</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.1%</span>
            </div>
          </div>

          {/* DATA PROVENANCE BAND */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-05-22 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-22 00:07Z</td>
                  <td className="dn-flag">fresh · 1-min</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-05-22 00:31Z scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    +24 min vs snapshot anchor · in-progress bar
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 00:01Z snapshot</td>
                  <td className="dn-flag">fresh · Deribit idx $77,635 vs live $77,568 · 920 inst.</td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 00:01Z
                  </td>
                  <td className="dn-flag">~6-min lag · 7d 1h bars · 22 assets</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-21 22:15Z render</td>
                  <td className="dn-flag">
                    ~2h render lag · FRED Tier-1 fresh · eased vs 05-21 ·
                    Tier-3 inflation panel fetch-failed (driver-only · not
                    load-bearing)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-05-22 00:06Z</td>
                  <td className="dn-flag">
                    ~1-min stale · offsets recomputed vs live spot
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
              <span className="dn-v">+3.6%</span>
              <span className="dn-src">live · 00:07Z · 24h mean +5.1% · lower-half of range</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+2.1% → +3.6%</span>
              <span className="dn-src">peaked +7.9% mid-window, bled back</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−0.73% (−742 BTC)</span>
              <span className="dn-src">live · slow bleed (was −2.27% on 05-21)</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v">55.3 / 44.7</span>
              <span className="dn-src">live_db `mkt_long_pct` · cooled 56.8 → 55.3</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−1.3k (net SHORT)</span>
              <span className="dn-src">live · long 17.92k − short 19.21k</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 05-21 note</span>
              <span className="dn-v">−6.7k → −1.3k</span>
              <span className="dn-src">covered 81% of the short · no net-long flip</span>
            </div>
            <div>
              <span className="dn-k">IV / 30d RV</span>
              <span className="dn-v">42.0% / 24.1%</span>
              <span className="dn-src">GEX median IV · 920 inst.</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v">−1.3%</span>
              <span className="dn-src">flip $76,534 vs spot · file +1.4% off idx $77,635</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              The 05-21 note set six decision lines and named one of them the
              single line that re-writes the note — smart money flipping back
              net long on a sustained window. Over the next 24h{' '}
              <span className="dn-signal">
                none of the six fired and that trigger did not complete
              </span>
              . Price spent the entire session inside a $1.1k box (1h closes
              $76,944–$78,039) and ended flat,{' '}
              <span className="dn-tag">−0.1% on 24h</span>. The note is still
              not unchanged, because the two pillars the 05-21 short bias
              rested on both eroded underneath the flat tape:{' '}
              <span className="dn-em">
                smart money covered 81% of its net short book (−6.7k → −1.3k
                BTC — it did not cross to net long, so the literal trigger
                reads not-fired, but &ldquo;locked hard short&rdquo; is no
                longer true), and macro eased on every active lane (10Y −10bp
                to 4.57%, HY OAS −6bp to 2.80% with the regime tag flipping
                neutral → loose, MOVE −1.8 to 79.7)
              </span>
              . The dealer cushion thinned in the same window (aggregate GEX
              +87.9M → +67.4M, the 0-γ flip rose $841 toward spot). Nothing
              was killed by a stop. The 05-21 short-biased-conditional stance
              was defused by its own premises softening while price did
              nothing. Today is a coil note, and the coil is now two-sided.
            </p>

            <p>
              BTC sits at <span className="dn-tag">$77,568</span>, dead centre
              of the box. Below: the{' '}
              <span className="dn-tag bear">GEX flip $76,534 (−1.3%)</span>{' '}
              into a tight MA cluster —{' '}
              <span className="dn-tag stale">D-EMA50 $76,797 (+1.00%)</span>,{' '}
              <span className="dn-tag stale">D-EMA100 $76,873 (+0.90%)</span>,{' '}
              <span className="dn-tag stale">D-SMA150 $76,948 (+0.81%)</span>{' '}
              — and the lowest 1h close of the last 24h was{' '}
              <span className="dn-tag">$76,944</span>, which tested D-SMA150 to
              the dollar and held on a close basis. Above: {' '}
              <span className="dn-tag bear">W-EMA20 $78,196 (−0.80%)</span>{' '}
              into <span className="dn-tag bear">D-EMA20 $78,303 (−0.94%)</span>,
              and the 24h perp high $78,180 stopped just short of that
              cluster. The 05-21 resolve band ($76,750 ↔ $78,200) was wicked
              on both edges and{' '}
              <span className="dn-signal">held on a close basis on both</span>.
              The coil is real, it is tight, and after today it has no
              positioning lean inside it.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape</span>
            </h2>

            <p>
              This is the day. <span className="dn-signal">
                Smart money (top-trader) covered 81% of its net short book
              </span>{' '}
              — SM net went from −6,698 BTC at the 05-21 snapshot to{' '}
              <span className="dn-tag">−1,290 BTC</span> now, a +5,408 BTC
              swing against a −6,698 prior, i.e. 81% of the short retired. The
              composition: the short book fell{' '}
              <span className="dn-tag">23.44k → 19.21k (−4.2k)</span> and the
              long book rose{' '}
              <span className="dn-tag">16.74k → 17.92k (+1.2k)</span> — a
              genuine cover, mostly short-side. <span className="dn-em">
                Two things matter for the read. First, SM did not cross to net
                long; it stopped at −1.3k, still short, just barely. The
                05-21 &ldquo;single line that re-writes this note&rdquo;
                required a net-long cross sustained &gt; 4h — that did not
                happen, so on the letter the trigger is not-fired. Second, the
                cover was a discrete event, not a drift: SM net collapsed
                from −6.3k to −1.3k inside the single hour 05-21
                05:06Z→06:06Z, then ranged −0.8k to −1.9k for the ~18h since
                — never re-widening toward −6.7k, never crossing zero, and
                sitting at −1.3k at the snapshot. It covered, then stopped —
                it is not still covering.
              </span>{' '}
              The honest synthesis: the 05-21 thesis leaned on SM being{' '}
              <em>locked hard short</em> underneath the price. A −1.3k net
              short is not that. The positioning pillar did not flip — it
              drained.
            </p>

            <p>
              The leverage side is quiet and modestly long-tilted. Funding is{' '}
              <span className="dn-tag">+3.6% ann live</span> (longs pay), up
              from <span className="dn-tag">+2.1%</span> at the 24h-ago
              endpoint but well off the <span className="dn-tag">+7.9%</span>{' '}
              it peaked at mid-window — the 24h mean was +5.1% and live now
              sits in the lower half of the +1.6/+7.9% range. Longs are paying
              a small, decaying carry, not bidding up to add. OI fell{' '}
              <span className="dn-tag bear">−0.73% (−742 BTC)</span> over 24h —
              a slow bleed, and a much gentler one than the 05-21{' '}
              <span className="dn-tag">−2.27% / −2,352 BTC</span>. Retail
              (Binance mkt) cooled to{' '}
              <span className="dn-tag">55.3% long</span> from 56.8 — still
              crowded long, marginally less so. Perp holds a{' '}
              <span className="dn-tag bear">−$70 discount</span> to spot;
              aggressor skew <span className="dn-tag bear">−17</span> (mild net
              sell pressure).
            </p>

            <p>
              Windowed flow is a balanced coil with a spot bid under it. 4h:
              price <span className="dn-tag">−0.18%</span>, OI{' '}
              <span className="dn-tag">−34 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +615</span>, futures CVD{' '}
              <span className="dn-tag">Δ +89</span>, big-print{' '}
              <span className="dn-tag bull">+67 BTC / 72 prints</span>. 1h:
              price <span className="dn-tag">−0.13%</span>, OI{' '}
              <span className="dn-tag">−75 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +437</span>, futures CVD{' '}
              <span className="dn-tag">Δ +101</span>, big-print{' '}
              <span className="dn-tag">−3 BTC / 17 prints</span>. Over the full
              24h, spot CVD <span className="dn-tag bull">Δ +2,885</span>{' '}
              against futures CVD <span className="dn-tag bear">Δ −839</span>,
              OI <span className="dn-tag bear">−742 BTC</span>, price flat.{' '}
              <span className="dn-em">
                A persistent spot bid absorbed modest futures distribution and
                a slow OI bleed, and the net of all of it was zero price
                change. That is the signature of a coil, not of either side
                winning — and it is the same spot-bid character the 05-21 note
                flagged, now playing out at a flat price rather than a rising
                one.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · stale-flagged</span>
            </h2>

            <p>
              The multi-timeframe map is{' '}
              <span className="dn-signal">neutral and coiled</span>, which is
              the structural echo of the flat tape. Every RSI on the board
              sits in the low-40s to low-50s — no washout, no overbought,
              nothing stretched. The cloud picture is genuinely mixed:
              15m / 1h / 1d / 1M above, 30m / 4h / 8h / 1w below, 12h / 3d
              inside. There is no active ⚡TD9. The shifts worth marking vs
              05-21:{' '}
              <span className="dn-em">
                the 1d TD setup advanced from Sell 1 to Sell 2 — the daily
                top-side counter-trend count the 05-21 note flagged is
                progressing, but slowly and far from a 9; the 1h still carries
                a water-up golden cross (4 bars ago, DIF above water — a strong
                cross), the one constructive cell; and the 30m just printed a
                fresh water-up death cross, the matching bearish flicker.
              </span>{' '}
              12h is still in cloud (76.8k–79.9k). Read straight: the
              structure is not leaning. It is waiting, like the price. This
              read is the 00:31Z MTF scan — the file is a rolling latest
              artifact, +24 min past the snapshot anchor.
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">77,479</td><td className="num">45.9</td><td className="bear">death (water-up) 11b</td><td className="bull">above ↓77.4k</td><td>Buy 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">77,479</td><td className="num">48.1</td><td className="bear">death (water-up) 1b</td><td className="bear">below ↑77.5k</td><td>Buy 5</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">77,465</td><td className="num">49.6</td><td className="bull">golden (water-up) 4b</td><td className="bull">above ↓77.2k</td><td>Buy 2</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">77,465</td><td className="num">48.6</td><td className="bull">golden (water-dn) 17b</td><td className="bear">below ↑78.9k</td><td>Sell 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">77,479</td><td className="num">44.6</td><td className="bull">golden (water-dn) 4b</td><td className="bear">below ↑78.8k</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">77,479</td><td className="num">43.2</td><td className="neut">—</td><td className="neut">in cloud 76.8–79.9k</td><td>Sell 5</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">77,465</td><td className="num">47.4</td><td className="bear">death (water-up) 10b</td><td className="bull">above ↓74.6k</td><td className="hot">Sell 2</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">77,479</td><td className="num">52.2</td><td className="neut">—</td><td className="neut">in cloud 73.5–93.0k</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">77,479</td><td className="num">46.3</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑100.3k</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">77,479</td><td className="num">49.2</td><td className="neut">—</td><td className="bull">above ↓46.9k</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:31Z scan (rolling latest
                    file; this scan archived in audits/2026-05-22-desk-note.md).
                    No active ⚡TD9. Shifts vs 05-21: 1d TD Sell 1 → Sell 2
                    (top-side count progressing, far from 9); 1h holds its
                    water-up golden cross 4b ago (the one constructive cell);
                    30m printed a fresh water-up death cross 1b ago. RSIs span
                    the low-40s to low-50s — coiled, nothing stretched. Closes
                    are in-progress bars; treat every value as provisional
                    until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix says the coil precisely. Spot is{' '}
              <span className="dn-signal">
                pinned on the cluster it reclaimed on 05-21
              </span>{' '}
              and the cluster barely moved: above{' '}
              <span className="dn-tag bull">D-EMA50 $76,797 (+1.00%)</span>,{' '}
              <span className="dn-tag bull">D-EMA100 $76,873 (+0.90%)</span>{' '}
              and <span className="dn-tag bull">D-SMA150 $76,948 (+0.81%)</span>{' '}
              — the same three lines, the same offsets to within a tenth of
              05-21. Below those:{' '}
              <span className="dn-tag bull">D-SMA50 $76,395 (+1.54%)</span>,
              then <span className="dn-tag bull">D-SMA100 $72,520 (+6.96%)</span>{' '}
              cycle anchor. Overhead:{' '}
              <span className="dn-tag bear">W-EMA20 $78,196 (−0.80%)</span> /{' '}
              <span className="dn-tag bear">W-EMA150 $78,297 (−0.93%)</span> /{' '}
              <span className="dn-tag bear">D-EMA20 $78,303 (−0.94%)</span>{' '}
              stacked tight, then{' '}
              <span className="dn-tag bear">D-SMA20 $79,352 (−2.25%)</span> and
              the <span className="dn-tag bear">
                D-SMA200/EMA200 $80.8–81.6k (−3.99 to −4.97%)
              </span>{' '}
              ceiling. Weekly: above{' '}
              <span className="dn-tag bull">W-SMA20 $75,043 (+3.36%)</span> and{' '}
              <span className="dn-tag bull">W-EMA200 $73,707 (+5.24%)</span>,
              below <span className="dn-tag bear">W-EMA50 $85,255 (−9.02%)</span>,{' '}
              <span className="dn-tag bear">W-EMA100 $83,425 (−7.02%)</span>,{' '}
              <span className="dn-tag bear">W-SMA50 $94,017 (−17.50%)</span> and{' '}
              <span className="dn-tag bear">W-SMA100 $88,226 (−12.08%)</span>.{' '}
              <span className="dn-em">
                W-SMA150 and W-SMA200 are not computed — the parquet history
                holds 125 weekly bars, short of the 150/200 windows; W-EMA150
                $78,297 (−0.93%) and W-EMA200 $73,707 (+5.24%) are shown
                because the EMA seeds from the available history. All MA
                levels are anchored to the parquet last bar 2026-05-22 00:06Z
                (close $77,532); offsets are recomputed against live spot
                $77,568. Displayed MA levels are $-rounded; offsets are
                computed from the exact series values.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · GEX + IV</span>
            </h2>

            <p>
              Dealer gamma is{' '}
              <span className="dn-signal">
                still net positive — still a dampening regime — but the cushion
                thinned
              </span>
              . Aggregate GEX is{' '}
              <span className="dn-tag bull">+67.4M/1%</span>, down from the
              05-21 +87.9M but well above the 05-18 +15.9M fragility low — a
              tape the dealer side still wants to mean-revert in range. The
              change that matters is the flip: the 0-gamma flip{' '}
              <span className="dn-signal">rose $841 to $76,534</span> (was
              $75,693), so the whole $900-odd of nothing-much translated into{' '}
              <em>lost cushion</em> — live spot $77,568 now sits{' '}
              <span className="dn-tag">−1.3% from flip</span> (the GEX file&rsquo;s
              own &ldquo;dist to flip&rdquo; reads +1.4% off its Deribit-index
              reference $77,635; spot ≈ index today, and the 0.1pt gap is the
              denominator — file divides by the flip, the tile by spot — both
              say the flip is roughly 1.3–1.4% beneath price, unambiguously
              below). That is down from the −2.4% cushion of 05-21. The
              negative pocket below got{' '}
              <span className="dn-em">heavier, not lighter</span>:{' '}
              <span className="dn-tag bear">$75k −26.0M</span> (was −20.1M),
              with a new{' '}
              <span className="dn-tag bear">$77k −8.08M</span> shelf just under
              spot and <span className="dn-tag bear">$74k −7.96M</span> below.
              The positive ceiling holds:{' '}
              <span className="dn-tag bull">$80k +47.7M</span> (the
              load-bearing wall, was +46.2M),{' '}
              <span className="dn-tag bull">$82k +19.85M</span>,{' '}
              <span className="dn-tag bull">$78k +15.15M</span> just overhead.{' '}
              <span className="dn-em">
                By expiry the front is mostly positive — 22MAY 0DTE +3.27M,
                23MAY +8.50M, 29MAY +35.81M — with one negative pocket at
                25MAY 3DTE −18.67M. Front-week dampening, with a 3-day-out
                gap.
              </span>
            </p>

            <p>
              Read it straight: the dealer map is{' '}
              <span className="dn-signal">
                coil-supporting but less so than 05-21
              </span>
              . Positive aggregate gamma and a positive front strip still
              favour mean-reversion inside the box, and that is consistent
              with a flat day. But the flip rising into the MA cluster means a
              downside break is now a shorter distance to the point where
              dealers cross short gamma, and the −26.0M @75k pocket below the
              flip is a bigger accelerant than it was 24h ago. The cushion did
              not vanish; it thinned. IV median across 920 instruments is{' '}
              <span className="dn-tag">42.0%</span> against 30D close-to-close
              RV of <span className="dn-tag">24.1%</span> — a ~+18pt chain-level
              richness, essentially the +17.5pt of 05-21. As always that is a
              chain-median across N instruments,{' '}
              <span className="dn-em">not</span> a tradable spread; expiry- and
              strike-level vega, skew and term structure are not loaded and the
              vol read stays framework-only.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · eased a notch · cross-asset</span>
            </h2>

            <p>
              <span className="dn-signal">Macro eased on every active lane.</span>{' '}
              The 05-21 note made macro a load-bearing bear section — &ldquo;worse
              than 05-20,&rdquo; rates pushing into EXTREME RISK-OFF, credit
              taking its first crack. Today the day-over-day deltas all point
              the other way: US 10Y nominal{' '}
              <span className="dn-tag">4.57% (−10bp)</span>, 10Y TIPS real{' '}
              <span className="dn-tag">2.13% (−5bp)</span>, 5Y5Y BE{' '}
              <span className="dn-tag">2.21% (−8bp)</span>, HY OAS{' '}
              <span className="dn-tag bull">2.80% (−6bp)</span> with its regime
              tag flipping <span className="dn-em">neutral → loose</span>, and
              MOVE bond vol <span className="dn-tag">79.7</span> — the
              dashboard&rsquo;s 1d Δ is −1.81, and the level is down 5.6 from
              the 85.3 the 05-21 note carried — back out of the elevated zone.{' '}
              <span className="dn-em">
                The slow regime z-scores are still extreme — 10Y carries a
                252-day regime z of +2.25 and an EXTREME RISK-OFF tag, JGB
                +2.55 — because a 252-day window does not move on one −10bp
                day. But the 30-day episodic z and the deltas, which are what
                actually changed, all eased: 10Y episodic +1.65 (was +2.75 on
                05-21), TIPS +2.23, HY −0.66. The backdrop is still a risk-off
                regime; the day&rsquo;s move inside it was an easing.
              </span>{' '}
              The credit-crack watch the 05-21 note escalated — HY OAS toward
              a 3.0% close — receded: HY is back to a loose tag and now ~20bp
              from the gate, not the ~14bp of 05-21.
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
                <tr><td>US 10Y nominal</td><td className="num">4.57%</td><td className="num bull">−10.0bp</td><td className="num bear">+2.25</td><td className="num bear">+1.65</td><td className="bear">risk-off · eased</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.13%</td><td className="num bull">−5.0bp</td><td className="num bear">+1.86</td><td className="num bear">+2.23</td><td className="bear">tight · eased</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.21%</td><td className="num">−8.0bp</td><td className="num">−0.32</td><td className="num">−0.39</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.80%</td><td className="num bull">−6.0bp</td><td className="num bull">−0.85</td><td className="num bull">−0.66</td><td className="bull">loose · risk-on</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.523</td><td className="num">−0.01</td><td className="num bull">−0.48</td><td className="num bull">−1.35</td><td className="neut">neutral</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">79.7</td><td className="num bull">−1.81</td><td className="num">+0.21</td><td className="num">+1.30</td><td className="neut">vol eased</td></tr>
                <tr><td>DXY</td><td className="num">99.19</td><td className="num">+0.08</td><td className="num bear">+0.78</td><td className="num bear">+1.71</td><td className="bear">tight</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.907T</td><td className="num bull">+0.030T</td><td className="num bull">+0.77</td><td className="num bull">+2.16</td><td className="bull">loose · surge</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.06%</td><td className="num">−10.0bp</td><td className="num bull">−0.66</td><td className="num bear">+1.65</td><td className="bear">tight</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, summary 00:01Z —{' '}
              <span className="dn-em">a rolling 7-day read, not today</span>).
              Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.413</span> (up from 05-21&rsquo;s
              0.365 — correlation tightening again, still NORMAL band). BTC&rsquo;s
              listed ties: NQ <span className="dn-tag">+0.65</span>, NVDA{' '}
              <span className="dn-tag">+0.63</span>, TSLA{' '}
              <span className="dn-tag">+0.63</span>, SP500{' '}
              <span className="dn-tag">+0.60</span>. 7d relative performance:
              BTC <span className="dn-tag bear">−4.83%</span>, NQ{' '}
              <span className="dn-tag bear">−0.45%</span>, SP500{' '}
              <span className="dn-tag bear">−0.53%</span>, NVDA{' '}
              <span className="dn-tag bear">−7.97%</span>, TSLA{' '}
              <span className="dn-tag bear">−5.42%</span>; metals weaker again —
              GOLD <span className="dn-tag bear">−2.12%</span>, SILVER{' '}
              <span className="dn-tag bear">−7.23%</span>, PLAT{' '}
              <span className="dn-tag bear">−4.21%</span>, URNM{' '}
              <span className="dn-tag bear">−7.39%</span>.{' '}
              <span className="dn-em">
                Over this 7d window the broad equity index barely moved (NQ
                −0.45%, SP500 −0.53%) while BTC and the high-beta single names
                fell — BTC −4.83% is worse than the index but in line with the
                deeper-down high-beta cohort (NVDA −7.97%, TSLA −5.42%, URNM
                −7.39%, SILVER −7.23%). The 05-21 note&rsquo;s window read BTC
                −2.53% vs NQ −1.63%; rolling the window forward 24h widens that
                gap to −4.83% vs −0.45%, but that is a window-composition
                effect — the start bar rolled off — not a today move, and on
                today&rsquo;s flat tape BTC neither led nor lagged anything.
              </span>{' '}
              JGB monthly 2.52% carries an EXTREME RISK-OFF monthly tag — do
              not lean on it. USD/JPY 159.00.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · sized to what we can prove</span>
            </h2>

            <p>
              No directional trade executed in the last 24h. The 05-21 book
              carried two conditional triggers (a D-EMA50-reloss short, a
              deferred reclaim long) and a held macro tail; none of the
              conditional triggers printed — verified below and in §VI. The
              one book action this note records is trimming the macro tail
              (0.25R → 0.15R) as macro eased; the directional book is flat,
              and the day&rsquo;s work is re-grading the conditionals against
              a tape where both short pillars eroded.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">stand-aside · primary</span>
              <div className="dn-trade-name">
                Flat in the coil — and now the coil has no lean inside it
              </div>
              <div className="dn-thesis">
                The 05-21 primary was &ldquo;flat in-range, wait for structure
                to confirm the positioning.&rdquo; It was correct — price held
                the box for the full session. The difference today is that
                there is no longer a positioning lean for structure to confirm:
                SM covered 81% of the short, macro eased, the dealer cushion
                thinned. Positioning, macro and structure all read close to
                neutral. The box is genuinely two-sided. The break is the
                entry — and now the break itself is the directional signal,
                not a confirmation of a pre-existing bias.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">stance</span><span className="dn-lvl-v">flat directional · no in-range risk</span></div>
                <div><span className="dn-lvl-k">resolve band</span><span className="dn-lvl-v">$76,534 (0γ flip) ↔ $78,303 (D-EMA20)</span></div>
                <div><span className="dn-lvl-k">down resolve</span><span className="dn-lvl-v bear">1h close &lt; $76,500 (below flip + MA cluster)</span></div>
                <div><span className="dn-lvl-k">up resolve</span><span className="dn-lvl-v bull">1h close &gt; $78,300 (above D-EMA20)</span></div>
              </div>
              <div className="dn-gating">
                <b>Why in-range nothing:</b> dealer gamma still dampens
                (+67.4M), funding is a small decaying carry, OI is a slow
                bleed — none of it pays to pre-position inside a $1.8k box.
                The two conditional trades below are mutually exclusive and
                both wait on a 1h close out of the band.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">short · conditional · downgraded</span>
              <div className="dn-trade-name">
                Flip-break short — dealer map behind it, positioning no longer is
              </div>
              <div className="dn-thesis">
                Below the 0γ flip $76,534, dealers cross short gamma and the
                $75k −26.0M pocket — heavier than the −20.1M of 05-21 — is the
                accelerant. That is the same dealer-map logic as the 05-21
                re-armed short. What changed is the positioning leg: the 05-21
                version was &ldquo;positioning was right, structure catches
                up,&rdquo; with SM locked hard short underneath. SM is no
                longer locked hard short — it covered 81%. The break-short
                keeps the gamma map behind it but loses the positioning
                tailwind, so it is smaller and gated tighter than the 05-21
                size.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">trigger</span><span className="dn-lvl-v bear">1h close &lt; $76,500 + SM net still &lt; 0</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bull">1h close &gt; $77,600 (back into the box)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$75,700 / $75,000 (−26.0M pocket)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.3R on trigger; +0.2R below $75,000; ≤ 0.5R</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> trigger $76,500, stop $77,600 = ~$1,100 risk;
                $75,700 = ~$800, $75,000 = ~$1,500 ≈ 0.7–1.4:1 before fees.{' '}
                <b>Gating:</b> SM must still be net short at trigger — if SM
                has crossed net long by then the positioning piece is gone and
                the trade is void. Size ceiling cut from the 05-21 0.9R to
                0.5R: the dealer map co-signs, the positioning no longer does.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · conditional · near-armed</span>
              <div className="dn-trade-name">
                Reclaim long — both 05-21 filters now one tick from passing
              </div>
              <div className="dn-thesis">
                The 05-21 reclaim long was deferred on two of three filters
                failing: SM net &lt; 0, and 10Y &gt; 4.55%. Neither has
                literally passed — so the long is still not armed — but both
                moved within a hair. SM covered 81% of its short (−1.3k; it
                did not cross zero). 10Y eased to 4.57%, 2bp above the 4.55%
                line. The trade is upgraded from &ldquo;deferred&rdquo; to{' '}
                <span className="dn-signal">near-armed</span>: it arms only
                when SM crosses net long on a sustained window <em>and</em> 10Y
                closes below 4.55%. Do not pre-position on the price — both
                filters must print.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">arm trigger</span><span className="dn-lvl-v bull">SM net &gt; 0 sustained &gt; 4h AND 10Y close &lt; 4.55%</span></div>
                <div><span className="dn-lvl-k">entry (if armed)</span><span className="dn-lvl-v">$77,300–78,000</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1h close &lt; $76,500 (flip loss)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$78,300 (D-EMA20) / $79,350 (D-SMA20)</span></div>
                <div><span className="dn-lvl-k">size (if armed)</span><span className="dn-lvl-v">0.2R · same as the 05-20 reclaim long</span></div>
              </div>
              <div className="dn-gating">
                <b>Why near-armed, not armed:</b> &ldquo;81% covered&rdquo; is
                not &ldquo;net long.&rdquo; A −1.3k net short still leans the
                wrong way for a long, and one of the two filters (rates) is a
                2bp miss. Both are observable and close — hence near-armed —
                but the trade does not exist until they both flip. Price alone
                is not an entry.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · hedge · trimmed</span>
              <div className="dn-trade-name">
                Downside put-spread — trimmed to a residual hedge as macro eased
              </div>
              <div className="dn-thesis">
                The 05-21 tail rested on rates fresh-worse and HY taking its
                first regime step toward a credit crack. Both reversed today:
                10Y −10bp, HY OAS −6bp with the tag back to loose, MOVE eased.
                The acute escalation paused — HY OAS at 2.80% is back inside a
                loose tag and ~20bp from the 3.0% gate. The slow regime
                z-scores are still extreme (10Y +2.25, JGB +2.55), so a
                residual hedge keeps a rationale against the backdrop — but a
                0.25R size no longer matches an eased tape. This note acts on
                that: the tail is trimmed 0.25R → 0.15R.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">structure</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">expiry</span><span className="dn-lvl-v">29-MAY-26 (7d) — positive-GEX expiry (+35.81M)</span></div>
                <div><span className="dn-lvl-k">action this note</span><span className="dn-lvl-v bull">trim 0.25R → 0.15R (macro eased — HY back to loose)</span></div>
                <div><span className="dn-lvl-k">re-grow trigger</span><span className="dn-lvl-v bear">HY OAS &gt; 3.0% close → grow toward primary; 10Y &gt; 4.75% close → +0.1R</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> strike/premium/Greeks not loaded — structure
                is illustrative, sizing pending a Deribit 29-MAY chain pull.
                The macro easing is one day of deltas, not a regime turn — the
                hedge is trimmed, not closed; a one-day easing does not
                un-write a +2.25σ regime z.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the box, and which way it breaks</span>
            </h2>

            <p>
              None of the six 05-21 decision lines fired in the last 24h.
              Verified against the tape: no 1h close below $76,750 (lowest was
              $76,944); no 1h close above $78,200 (highest was $78,039); SM
              did not cross net long (stalled at −1.3k); HY OAS did not close
              above 3.0% (eased to 2.80%); 10Y did not close above 4.75%
              (eased to 4.57%); 1d did not close below the $74.6k cloud. The
              directional book is flat — the only carried position is the
              macro tail, trimmed this note to a residual 0.15R hedge — and
              the conditions reset around a tighter box:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Coil breaks down</td><td className="bear">1h close &lt; $76,500 (below 0γ flip) + SM net &lt; 0</td><td>flip-break short 0.3R, +0.2R sub-$75,000</td></tr>
                <tr><td>Coil breaks up</td><td className="bull">1h close &gt; $78,300 (above D-EMA20)</td><td>cut bear setups; reclaim long eligible only if SM + rates filters also pass</td></tr>
                <tr><td>Positioning arms the long</td><td className="bull">SM net BTC &gt; 0 sustained &gt; 4h AND 10Y close &lt; 4.55%</td><td>arm reclaim long 0.2R</td></tr>
                <tr><td>Credit re-escalates (re-grow the tail)</td><td className="bear">HY OAS &gt; 3.0% close</td><td>re-grow the trimmed 0.15R tail toward primary; receded today (~20bp away)</td></tr>
                <tr><td>Rates continuation</td><td className="bear">10Y &gt; 4.75% close</td><td>macro tail +0.1R off the trimmed 0.15R</td></tr>
                <tr><td>Mid-cycle breaks (escalation)</td><td className="bear">1d close below cloud $74.6k</td><td>hold short runner, drop all longs, max tail</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                a 1h close out of the $76,500–$78,300 box
              </span>
              . That is a change of kind from 05-21. The 05-21 book was
              short-biased and waited for structure to confirm the
              positioning; today positioning, macro and structure all sit
              close to neutral, so there is no bias for the break to confirm —
              the break is the signal. Down through the flip hands the move to
              the dealer map and the −26.0M @75k pocket; up through D-EMA20
              clears the overhead stack and puts the near-armed long in play
              if SM and rates have also turned. Until one of those prints,
              this is a flat directional book watching a box, with no lean
              inside it — the trimmed 0.15R macro tail aside.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit · 1 CRITICAL + 3 HIGH fixed)
            </span>
            <b>Codex CLI 0.132.0 (gpt-5.5, xhigh reasoning) ran the hostile
            audit cleanly — the empty-stdin pipe held, no TTY block.</b>{' '}
            One CRITICAL and three HIGH, all applied EN+ZH:{' '}
            (a) <b>F-01 · CRITICAL</b> &mdash; trade-state contradiction: the
            note called the book flat while §V held a 0.25R macro tail whose
            own trim trigger (HY OAS &lt; 2.85%) was already satisfied by the
            note&rsquo;s own HY OAS 2.80%. Resolved by recording the trim as
            executed this note (0.25R → 0.15R, motivated by the day&rsquo;s
            macro easing), relabelling the directional book &ldquo;flat&rdquo;
            and the tail a separately-disclosed residual hedge.{' '}
            (b) <b>F-02 · HIGH</b> &mdash; MTF provenance: mtf_div_latest.html
            is a rolling &ldquo;latest&rdquo; artifact the generator overwrites
            ~every 15 min; the 00:01Z scan loaded at snapshot was already gone.
            §II table/prose and the manifest re-synced to the actually-loaded
            00:31Z scan, which is archived verbatim in
            audits/2026-05-22-desk-note.md for verifiability.{' '}
            (c) <b>F-03 · HIGH</b> &mdash; MOVE delta: prose cited −5.6 (the
            move vs the 05-21 note&rsquo;s 85.3) while the macro table cited the
            dashboard&rsquo;s 1d Δ −1.81; both are now stated explicitly and
            distinctly.{' '}
            (d) <b>F-04 · HIGH</b> &mdash; SM post-cover path: the
            &ldquo;−1.2k to −1.6k band&rdquo; was wrong (verified post-cover
            range −0.8k to −1.9k) and the ZH copy had drifted to a different
            event window; both languages rewritten to the verified path (−6.3k
            → −1.3k inside 05:06Z→06:06Z, then −0.8k to −1.9k, ending −1.3k,
            no net-long cross). Codex explicitly cleared: funding × 1095
            (+3.6% ann, no ×100 recurrence of the 05-15 landmine), the SM cut
            fraction (80.75%), the GEX flip dual-reference (−1.3% spot-denominated
            / +1.4% file, no sign-flip), all MA matrix offsets and the
            W-SMA150/200 non-computability, 30D RV 24.05%, claims-vs-loaded-data
            discipline (NTT / max-pain / strike-IV / BTC-NQ framework-only; IV
            chain-median; cross-asset 7d-window framing), live-tape flows,
            EN/ZH numeric parity, the requireViewer gating pattern (both paths,
            first statement), and the index <code>&lt;li&gt;</code> additions.{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1; Next
            16.2.6 hard-exits on Node &lt; 20.9.0, so a full{' '}
            <code>next build</code> is environment-blocked.{' '}
            <code>npx --no-install tsc --noEmit</code> returned exit 0
            (TypeScript clean) and is the build proxy. Source audit record:{' '}
            audits/2026-05-22-desk-note.md.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>
            , and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-05-22 00:07Z) with
            section-level provenance disclosed in the manifest band above;
            macro is fresh today and eased a notch, but the regime z-scores
            remain elevated. Levels, sizes, and conditions are illustrative of
            the desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future
            tape. Derivatives carry the risk of total loss and, where
            leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                Nothing triggered — and the note still changed. The short case
                drained while the price stood still.
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
            v2 · 2026-05-22 00:07Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
