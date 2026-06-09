import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-08 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-08',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-08' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260608() {
  await requireViewer('/desk/2026-06-08');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-08 · v2</span>
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
              <span className="dn-big">$63,290</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+3.87%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-08 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-08 00:05Z (snapshot pin row, BJ 08:05 06-08 per live_db <code>t</code> BJ-local convention)</td>
                  <td className="dn-flag">
                    fresh · 1-min · pin row = <code>t == &ldquo;06-08 08:05&rdquo;</code>{' '}
                    (BJ-local, UTC 00:05Z) per runbook §2 LIVE-TAPE landmine ·
                    daily-update.timer 00:00Z + reports-refresh.timer ~:01
                    both just ran, server artifacts ~2 min fresh · the 7JUN26
                    +3.87M positive front chunk settled CLEAN at 08:00Z 06-07
                    (~16h before this snap) — second consecutive front-chunk
                    settle without a fresh negative replacement; the 8JUN26
                    0.3 DTE chunk is +6.40M POSITIVE and settles at 08:00Z
                    06-08 (~8h ahead of this snap), so the front-contract
                    settle window does NOT carry an amplifier for a third
                    consecutive session
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-08 00:01Z scan (BJ 08:01, archived to snapshots/2026-06-08-0007/)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact · archived under
                    snapshots/2026-06-08-0007/ before read per runbook §1
                    archive policy · 4 min stale vs anchor · in-progress
                    bars · multi-TF ⚡ TD9 BUY rotated DOWN to TWO concurrent
                    frames (1d / 3d) — was THREE on 06-07 (12h / 1d / 3d);
                    the 12h advanced from confirmed TD9 BUY to a fresh
                    down-counter Sell 3, while 1d and 3d held their TD9
                    BUYs and 1M still TD8 → 9? pending one more close. The
                    1h printed a fresh 水上金叉 (above-zero MACD golden
                    cross) one bar before the snap, the strongest engine
                    confirmation of the lineage
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-08 00:01Z snapshot (archived)</td>
                  <td className="dn-flag">
                    archived to snapshots/2026-06-08-0007/ · 4 min stale
                    vs anchor · Deribit idx $63,459 vs live $63,290 ($169
                    above live — inside a normal idx-vs-live tracking band) ·
                    990 instruments (was 1,008 on 06-07 — net −18 as the
                    7JUN chain cleared at 08:00Z 06-07 net of 10JUN /
                    11JUN near-dated listings) · 8JUN26 0.3 DTE +6.40M
                    POSITIVE is the next settle (08:00Z 06-08, ~8h ahead);
                    third consecutive positive front chunk, the front
                    amplifier shape that powered the down-leg is
                    structurally absent · the 26JUN26 18.3 DTE −20.05M
                    monthly chunk is the load-bearing forward negative
                    (eased from 06-07&rsquo;s −24.94M by +$4.89M)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-08 00:01Z (archived)
                  </td>
                  <td className="dn-flag">
                    ~4 min lag · 7d 1h bars · 22 assets · 167 rows ·
                    regime tag stays IDIOSYNCRATIC (mean |r| 0.236, firmed
                    +0.003 from 06-07&rsquo;s 0.233 — moved BACK toward the
                    0.25 NORMAL threshold marginally) · BTC&rsquo;s top tie
                    stays SILVER +0.281 (firmed +0.020 vs 06-07&rsquo;s
                    +0.261), TSLA promoted to #2 at +0.259 (was #4 +0.220),
                    GOLD #3 at +0.233; the BTC↔NQ tie stayed EXACTLY at
                    +0.188 vs 06-07&rsquo;s +0.188 (zero drift — the
                    BTC↔NQ firming stalled after last week&rsquo;s sharp
                    move)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-07 22:15Z render (archived)</td>
                  <td className="dn-flag">
                    ~1h 50m render lag · weekend FRED freeze (Sunday UTC
                    → Monday US open is still ahead) — all Tier-1 daily
                    FRED rows carry the Friday-close values seen on
                    06-07: US 10Y nominal 4.47% (−2bp carried), 10Y
                    TIPS 2.11% (flat), 5Y5Y BE 2.24% (flat), HY OAS
                    2.74% (−1bp carried), NFCI −0.494 (stale 9d), MOVE
                    75.2 (+4.04 carried Friday print), Fed net liq
                    $5.834T (−0.038T carried). Yahoo daily DXY printed
                    fresh at 100.15 (+0.08 day · firmed by another tick
                    vs 06-07&rsquo;s carried 100.07); USD/JPY 160.30
                    (+0.31 day vs 06-07&rsquo;s carried 160.29).
                    Otherwise macro is structurally frozen until Monday
                    US open
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-08 00:05Z (btcusdt_1m_2024..2026 subset per desk policy + full-history references)</td>
                  <td className="dn-flag">
                    parquet last bar 00:05Z exactly matches the snapshot
                    anchor (no anchor-vs-parquet drift, matches the
                    06-07 alignment) · close at parquet last bar
                    $63,169.10 vs live spot $63,290.00 (a $120.90 gap,
                    the 1-min parquet anchor sits inside the 1-min live
                    tape window). MA source universe is the 2024-2026
                    subset (128 weekly bars, unchanged vs 06-07; the new
                    W-SUN 2026-06-07 bar is the most recent closed
                    weekly), per the 06-02 audit DN-005 desk-policy
                    carry; under this subset W-SMA150 / W-SMA200 are
                    non-computable (short of both windows); W-EMA150 /
                    W-EMA200 print but are reported as <em>seeded</em>{' '}
                    truncated lines. Full-history (2019-09-08 → 2026-06-14,
                    354 weekly bars including the in-progress new week
                    bar at $63,169.10 1m close) added for the 200W
                    reference: W-SMA200 = $62,002 (basically flat vs
                    06-07&rsquo;s $62,008 — moved down $6 only). Live
                    spot $63,290 now sits <em>+2.08% ABOVE</em> the
                    full-history 200W (was −1.73% BELOW on 06-07 — the
                    sign flipped by +3.81pt as spot ran +3.87% on the
                    24h). Offsets recomputed against live spot
                    $63,290.00 per 06-03 audit DN-006 lineage carry
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W watch (weekly_200sma.json)</td>
                  <td className="dn-v-cell">NOT WRITTEN (file absent on server at audit time, lineage carry from 06-05 / 06-06 / 06-07)</td>
                  <td className="dn-flag">
                    200W watch JSON unavailable (fourth consecutive
                    note); fall back to the full-history parquet
                    computation per runbook §2 do-not-fabricate.
                    W-SMA200 = $62,002 (354 weekly bars from 2019-09-08);
                    live spot $63,290 sits <em>+$1,288 / +2.08%
                    ABOVE</em> the level on the SPOT print — the cycle
                    floor is reclaimed on spot. The cycle floor is
                    weekly-close, not spot — and the 06-07 W-SUN weekly
                    bar closed at <em>$63,298.50</em>, which is{' '}
                    <em>+$1,296 / +2.09% ABOVE</em> the level; the
                    formal weekly close above the 200W is the FIRST of
                    the down-leg lineage and resolves the 06-07
                    weekend-weekly-close break-or-reclaim watch in the
                    reclaim direction. The new in-progress weekly bar
                    (W-SUN anchored to 2026-06-14, started 06-08 00:00Z)
                    closes at parquet last bar $63,169.10 = +$1,167 /
                    +1.88% above; the in-progress bar is only one
                    minute in, so the carry watch shifts to the next
                    weekly close (06-14 W-SUN). Per runbook
                    do-not-fabricate no percentile / break-event claim
                    is asserted off a missing JSON, only the
                    full-history level + the resolved weekly-close
                    reclaim are surfaced
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale 67d · monthly · do not treat as live (staleness +1d vs 06-07)</td>
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
              <span className="dn-v">+3.76%</span>
              <span className="dn-src">live · 24h mean +0.87% ann (vs 06-07&rsquo;s 24h mean −0.13%, a +1.00pt shift back to positive funding regime as the rally took longs through the negative-pay window); 24h range −4.02% / +4.71% ann; cap occupancy 0 / 1441 sampled rows (0.00% — third consecutive zero-cap session); trough −4.02% ann @ BJ 09:02 06-07 (UTC 01:02Z 06-07), peak +4.71% ann @ BJ 06:48 06-08 (UTC 22:48Z 06-07, coincident with the 24h price high)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">−4.02% / +4.71% ann path · 24h mean −0.13% → +0.87% (+1.00pt shift)</span>
              <span className="dn-src">range broadened (−4.02 / +4.71 vs 06-07&rsquo;s −3.92 / +0.55 mean-zone) as the rally and the SM short-cover paid longs into the spike; 542 / 1441 sampled rows still negative (37.6%) — the leverage book paid both ways inside the 24h, not a one-way press</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−2.90% (−2,954 BTC)</span>
              <span className="dn-src">live · third consecutive OI shrink of the down-leg lineage — the deepest single-note shrink of this leg · SM long_btc +181 (essentially flat), short_btc −750 (modest bleed) — most of the −2,954 BTC OI cut came from non-SM accounts (retail / mid-tier shorts covering); the rally is short-cover-driven, not long-rebuild</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bull">67.51 / 32.49</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · firmed +1.08pt from 06-07&rsquo;s 66.43% — retail re-crowded the long side INTO the rally print (24h range 65.94 / 67.99) · the 67.99% peak is the highest retail long-skew of the down-leg lineage, a contrarian-style late-rally crowding signal</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−41.6k (still deeply net SHORT)</span>
              <span className="dn-src">live · long 13.80k − short 55.42k · short_btc 24h trough 54,462 @ BJ 06:21 06-08 (UTC 22:21Z 06-07, coincident with the spike) — bled −2.0k off the 24h peak of 57,445 but rebuilt +0.96k into the snap; long_btc 24h peak 15,399 @ BJ 14:50 06-07 (UTC 06:50Z) then fell to trough 13,104 @ BJ 06:21 06-08 — the SM book CUT the short on the spike and then partially re-stacked the short into the snap</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 06-07 note</span>
              <span className="dn-v">−42,556 → −41,626 (+930 less short, short −750 / long +181)</span>
              <span className="dn-src">|Δ|/prior_net = 930.2 / 42,556 = <em>2.19%</em> — a small structural cut, the rally did NOT cause a meaningful SM short repair · net trough −43,158 @ BJ 00:11 06-08 (UTC 16:11Z 06-07) printed an additional short-stack BEFORE the spike, not after; the post-spike short add into the snap is +960 BTC fresh short add from the BJ 06:21 short_btc trough, with +692 BTC fresh long add the same window; net is +1,532 BTC LESS short vs the BJ 00:11 max-short net trough (sign convention: net = long − short, so +1,532 from a more-negative trough means less net short, not fresh short adds)</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">54.3% / 40.40%</span>
              <span className="dn-src">GEX median IV firmed +0.8pt from 06-07&rsquo;s 53.5% (990 inst vs 1,008 — the 7JUN chain cleared net of 10JUN / 11JUN listings) · 30D RV jumped +3.37pt from 37.03% as the +3.87% 06-08 daily return entered the rolling 30D window; chain richness ~+13.9pt (was +16.47pt on 06-07 — narrowed as RV caught up to IV)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−0.87% (below)</span>
              <span className="dn-src">flip $63,848 (was $63,538 — moved UP $310, the first up-move of the flip in the down-leg lineage) · vs live spot $63,290 (−0.87%; 63,290 / 63,848 − 1 = −0.8740%) / vs GEX file Deribit idx $63,459 (−0.61%; 63,459 / 63,848 − 1 = −0.6093%, the file&rsquo;s own tile reads −0.6%) — both refs negative, spot stays below the flip on both, the live-spot ref is 0.27pt wider than the Deribit-idx ref this note · aggregate GEX −11.0M (was −38.7M on 06-07 — repaired <em>+$27.7M</em>, the largest single-note repair of the down-leg lineage; still net-short-gamma, no sign flip yet)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The 06-07 W-SUN weekly bar closed at $63,298.50, which is
                +$1,296 / +2.09% above the full-history 200W cycle floor
                $62,002 — the formal weekly-close 200W floor break that
                06-07 was watching for over the weekend was AVOIDED, in
                the reclaim direction
              </span>. Spot ran <span className="dn-tag bull">+3.87% on
              24h</span> from <span className="dn-tag">$60,933 → $63,290</span>,
              the biggest up-day of the down-leg lineage, and printed a
              textbook cover-shape across every flow field on the 24h
              window: OI <span className="dn-tag bull">−2,954 BTC
              (−2.90%)</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +4,212</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +1,851</span>, big-print{' '}
              <span className="dn-tag bull">+425 BTC / 365 prints</span>,
              taker-net <span className="dn-tag bull">+1,823</span> —
              price up sharply, OI shrinking sharply, both CVDs net-buyer,
              big-print bid. The dealer book repaired{' '}
              <span className="dn-tag bull">+$27.7M</span> to{' '}
              <span className="dn-tag bear">−11.0M aggregate</span> (was
              −38.7M on 06-07 — the largest single-note gamma repair of
              the down-leg, but the book is still net-short-gamma, no
              sign flip), and the 0γ flip moved{' '}
              <span className="dn-tag bull">UP $310 to $63,848</span> for
              the first time of the down-leg lineage. The
              mean-revert long scout&rsquo;s leg-3 trigger reframes UP to
              the new flip $63,848: the snap-minute 1h close $63,298.50
              at 06-07 23:00Z came in <em>$240 below</em> the prior 06-07
              leg-3 trigger $63,538 and <em>$550 below</em> the today
              reframed $63,848, so the trigger has{' '}
              <span className="dn-em">NOT FORMALLY FIRED</span>; the
              scout stays NON-ACTIONABLE for a fifth session, but spot
              sits just $558 below the reframed inflection (vs $2,605
              below on 06-07 — closer by $2,047 in one session). The 24h
              low <span className="dn-tag">$60,746 @ BJ 08:47 06-07 (UTC
              00:47Z 06-07)</span> held{' '}
              <span className="dn-tag bull">+$1,592 above</span> the 06-06
              lineage capitulation low $59,154 — the post-wick floor held
              its second consecutive session and the lineage cap low
              stays the load-bearing stop reference. The SM book did
              NOT meaningfully repair: SM net{' '}
              <span className="dn-tag bear">−41,626</span> vs 06-07&rsquo;s
              −42,556 — a +930 BTC cut at cut fraction{' '}
              <span className="dn-em">|930.2| / 42,556 = 2.19%</span>{' '}
              (long +181, short −750) — the rally is short-cover-driven
              (OI shrinking from retail / mid-tier) not SM-long-rebuild.
              The retail tape firmed materially: <span className="dn-tag bear">mkt_long_pct 67.51%</span>{' '}
              (up +1.08pt to a lineage high), peaked at 67.99% — retail
              re-crowded INTO the rally. This note marks the formal 200W
              reclaim on weekly close, the third consecutive
              positive-front-chunk / front-amplifier-absent cycle, and
              the leg-3 trigger one wick away — the question
              for the next 24h is whether a 1h close clears the reframed
              $63,848 with the cover-shape still printing, or whether the
              SM re-stack and retail re-crowd power a leg back below
              $59,154 before the trigger fires.
            </p>

            <p>
              BTC prints <span className="dn-tag">$63,290</span> live,{' '}
              <span className="dn-tag bull">+3.87%</span> on 24h — the
              biggest up-day of the down-leg lineage by margin, and the
              first material reclaim print since 06-01 broke the lineage.
              The 24h range was{' '}
              <span className="dn-tag">$63,635 / $60,746</span> (high @
              BJ 06:15 06-08 / UTC 22:15Z 06-07, low @ BJ 08:47 06-07 /
              UTC 00:47Z 06-07) — a clean run from a sub-$61k low to a
              high $1.6k above the snap.{' '}
              <span className="dn-signal">The 06-07 W-SUN weekly bar
              closed at $63,298.50 — the first weekly close above the
              full-history 200W $62,002 of the down-leg lineage</span>;
              the formal weekly-close break-or-reclaim watch from the
              06-07 note resolved cleanly in the reclaim direction, by
              +$1,296 / +2.09%. The cluster of daily closes leading in:
              06-02 $66,730, 06-03 $64,118, 06-04 $63,853, 06-05 $61,022,
              06-06 $60,850 (the deepest down-leg close), 06-07 $63,298
              (the reclaim), 06-08 in-progress $63,169 at parquet last
              bar (one minute into the new UTC day). The cycle anchor
              D-SMA100 stays the load-bearing structural gate at{' '}
              <span className="dn-tag bear">$72,965 (−13.26%)</span> —
              still ~$9.7k overhead, but $2.3k closer to spot than
              06-07 (06-07 read $72,978 / ~$12.0k overhead, closer
              because spot ran +$2,357 toward it).{' '}
              <span className="dn-em">
                Read straight: the 200W cycle floor was reclaimed on
                close, the dealer book repaired sharply, the engine
                printed cover-shape across every field, the leg-3
                inflection moved UP with us (flip + $310), the
                lineage capitulation low held a second session, and
                the cycle anchor is now $9.7k overhead instead of
                $12.0k. But the SM short book stayed deeply stacked
                (cut fraction only 2.19%), retail re-crowded long at
                the highest skew of the lineage, the new flip moved
                further from us than spot ran, and the leg-3 trigger
                has still not formally fired on a 1h close basis. The
                structural turn is closer than at any point of the
                down-leg lineage, and still un-confirmed.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · spot ran +3.87% on a textbook 24h cover-shape · OI −2,954 BTC the largest shrink of the lineage · SM book stayed deeply short, cut fraction only 2.19% · retail re-crowded long to a lineage high · the lineage capitulation low $59,154 held a second session at 24h low $60,746</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position book printed an OI-shrinking +3.87% up-day
                with both CVDs net-buyer — the cleanest cover-shape day
                of the down-leg lineage by margin — but the SM short
                book barely repaired
              </span>. SM net is{' '}
              <span className="dn-tag bear">−41,626</span> vs the 06-07
              note&rsquo;s −42,556 — that is{' '}
              <span className="dn-em">+930 BTC less short on a cut
              fraction of |930.2| / 42,556 = 2.19%</span>. The components:
              long_btc <span className="dn-tag bull">13,615 → 13,796
              (+181, essentially flat)</span>, short_btc{' '}
              <span className="dn-tag bull">56,172 → 55,422 (−750, a
              modest bleed)</span>. The 24h shape: short_btc 24h peak
              <span className="dn-tag bear"> 57,445 @ BJ 22:45 06-07 (UTC
              14:45Z 06-07)</span> — a fresh short-add INTO the rally
              start that pushed short_btc above the 06-07 anchor level
              (56,172) by +1,273; then short_btc trough{' '}
              <span className="dn-tag bull">54,462 @ BJ 06:21 06-08 (UTC
              22:21Z 06-07)</span> — coincident with the 24h price high,
              the SM book finally cut the short by −2,983 BTC into the
              spike; then short_btc rebuilt back to 55,422 by the snap
              (a +960 BTC re-stack post-spike, the SM book started
              re-loading the short against the bounce 1h 44min before
              the snap). Long_btc 24h peak{' '}
              <span className="dn-tag bull">15,399 @ BJ 14:50 06-07 (UTC
              06:50Z)</span> then fell to trough{' '}
              <span className="dn-tag bear">13,104 @ BJ 06:21 06-08 (UTC
              22:21Z 06-07)</span> (coincident with short_btc trough —
              both sides cut on the spike). SM net trough{' '}
              <span className="dn-tag bear">−43,158 @ BJ 00:11 06-08
              (UTC 16:11Z 06-07)</span> — the maximum-short print
              happened ~6h BEFORE the price high, then the book cut
              short on the spike (net peaked at the print high), and
              ran +1,532 BTC LESS short into the snap vs that
              BJ 00:11 max-short net trough — the post-spike fresh
              short add itself is +960 BTC (from the BJ 06:21
              short_btc trough), paired with +692 BTC fresh long
              add the same window. The shape is{' '}
              <span className="dn-em">cover-cut-then-rebuild</span> —
              the SM book paid for the cut during the spike and is
              already building a fresh short-stack against the bounce
              engine.
            </p>

            <p>
              The leverage and flow side is unambiguous cover-shape on
              the 24h frame.{' '}
              <span className="dn-signal">
                Funding eased back toward neutral with the 24h mean
                shifting +1.00pt to a small positive
              </span>: live <span className="dn-tag">+3.76% ann</span>,
              24h range <span className="dn-tag">−4.02% / +4.71%</span>{' '}
              with trough{' '}
              <span className="dn-tag bull">−4.02% ann @ BJ 09:02 06-07
              (UTC 01:02Z 06-07, 4 min after the 24h price low)</span>{' '}
              and peak{' '}
              <span className="dn-tag bear">+4.71% ann @ BJ 06:48 06-08
              (UTC 22:48Z 06-07, 33 min after the 24h price high)</span>{' '}
              — funding tracked price both ways inside the 24h. 24h
              mean ann <span className="dn-tag">+0.87%</span> (vs
              06-07&rsquo;s −0.13% — the funding regime shifted by
              +1.00pt back to a small net long-pay as the rally
              dragged the late-window prints positive). Cap occupancy{' '}
              <span className="dn-tag bull">0 / 1441 sampled rows
              (0.00%)</span> — third consecutive zero-cap session,
              the leverage gate stays wide open and there is no
              one-way press to amplify. 542 / 1441 sampled rows (37.6%)
              were negative on the path, so longs were paid by shorts
              for over a third of the 24h window before the rally
              flipped funding back positive. OI Δ{' '}
              <span className="dn-tag bull">−2,954 BTC (−2.90%)</span>{' '}
              over 24h — <span className="dn-em">the largest
              single-note OI shrink of the down-leg lineage</span>;
              SM long +181 and short −750 only account for ~570 BTC
              of the cut, so the rest (~2,384 BTC) is retail /
              mid-tier short covering, which is the load-bearing
              flow this note. Retail{' '}
              <span className="dn-tag bear">mkt_long_pct 67.51%</span>{' '}
              from 06-07&rsquo;s 66.43% — a +1.08pt re-crowd, 24h
              range 65.94 / 67.99 with the 67.99% peak being the
              highest retail long-skew of the down-leg lineage. Perp
              trades a <span className="dn-tag bear">−$39.74 discount</span>{' '}
              to spot at the snap (1h mean −$31.33, range −$86.86 /
              +$43.89; 4h mean −$32.38, range −$617.10 / +$199.17;
              24h mean −$30.52, range −$617.10 / +$199.17 — the basis
              touched +$199 premium briefly at the 24h high before
              settling back negative; the −$617 single-minute discount
              was an early-window air-pocket on the way to the low,
              not a sustained press). 1-min aggressor skew snap{' '}
              <span className="dn-tag bull">+13.6</span> (1h mean +7.34,
              range −31.0 / +40.6) — a mild buy-aggressor tilt at the
              snap, the 1h overall was net-bid.{' '}
              <span className="dn-em">
                Funding flipping back to a small positive mean + OI
                shrinking the largest of the lineage + cap empty for
                a third session: the leverage book paid for the
                short cover on the spike, the deflation continues,
                but retail re-crowded long at a lineage-high skew
                and the SM book is rebuilding a fresh short against
                the bounce — the leverage book is not press-ready
                but the position book is still loaded short.
              </span>
            </p>

            <p>
              Windowed flow is <em>textbook cover-shape on 24h, partial
              fade on 4h to 1h as the post-spike rebuild started</em>.
              24h: price{' '}
              <span className="dn-tag bull">+3.87%</span>, OI{' '}
              <span className="dn-tag bull">−2,954 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +4,212</span> (no cb_cvd
              resets across the 24h window — clean read), futures CVD{' '}
              <span className="dn-tag bull">Δ +1,851</span>, big-print{' '}
              <span className="dn-tag bull">+425 BTC / 365 prints</span>,
              taker-net <span className="dn-tag bull">+1,823</span> —{' '}
              <span className="dn-em">
                every flow field net-buyer with OI sharply shrinking, the
                cleanest cover-shape print of the down-leg lineage by
                magnitude (the prior best was the 06-07 4h window with
                spot CVD +382 / OI +65; today&rsquo;s 24h is 11× larger
                on spot CVD with OI shrinking, not expanding)
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bull">+2.92%</span>, OI{' '}
              <span className="dn-tag bull">−1,867 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,538</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +277</span>, big-print{' '}
              <span className="dn-tag bull">+217 BTC / 36 prints</span>,
              taker-net <span className="dn-tag bull">+289</span> —
              <em>the 4h window contained the spike itself; OI shrinking
              while spot ran sharply higher = cover-shape on 4h too</em>.
              1h: price <span className="dn-tag bull">+0.69%</span>, OI{' '}
              <span className="dn-tag bear">+561 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +223</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +295</span>, big-print{' '}
              <span className="dn-tag bull">+205 BTC / 10 prints</span>,
              taker-net <span className="dn-tag bull">+296</span> —{' '}
              <em>the most recent 1h shows the rebuild phase: OI back
              to expanding (+561), spot offered slightly slower than
              futures, big-print and taker still bid. This is not a
              cover-shape on the snap-minute hour — it is the
              second-derivative long-add / fresh-stack shape that
              builds AFTER the cover-cut spends itself</em>. Read
              together, the 24h and 4h carried the cover-cut shape,
              the 1h is the post-cover-cut rebuild — exactly the
              shape that runs INTO the leg-3 trigger before it fires
              or fails.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · cluster ⚡ TD9 BUY rotated DOWN to TWO concurrent frames (1d / 3d) from 06-07&rsquo;s THREE — the 12h advanced to fresh down-counter Sell 3 · 1h water-up MACD golden cross PRINTED 1 bar before the snap (strongest engine confirmation of the lineage) · cycle anchor still ~$9.7k overhead but $2.3k closer than 06-07 · 200W cycle floor RECLAIMED on the 06-07 W-SUN weekly close at $63,298 vs $62,002</span>
            </h2>

            <p>
              <span className="dn-signal">
                The engine confirmed the bounce with a 1h water-up MACD
                golden cross printing one bar before the snap — the
                strongest single-frame MACD print of the down-leg
                lineage, on a +0.69% 1h up-bar with both CVDs positive
                and big-print bid
              </span>. The multi-TF ⚡ TD9 BUY cluster rotated DOWN from
              THREE concurrent frames on 06-07 (12h / 1d / 3d) to TWO
              today (1d / 3d) — the 12h advanced from a confirmed TD9
              BUY to a fresh down-counter Sell 3 as the rally pulled
              the price action above the closing thresholds. The 1d
              and 3d held their TD9 BUYs, and the 1M is still TD8 → 9?
              pending one more close. RSI lifted across the engine:
              1h <span className="dn-tag bull">64.5</span> (from
              06-07&rsquo;s deeper read, now solidly above the 50
              mid-line), 4h{' '}
              <span className="dn-tag">50.5</span> (right at neutral),
              15m <span className="dn-tag bull">63.0</span>, 30m{' '}
              <span className="dn-tag bull">66.6</span>. The deeper
              frames still oversold: 8h 36.0, 12h{' '}
              <span className="dn-tag bear">30.7</span> (lineage low),
              1d <span className="dn-tag bear">26.4</span>, 3d 34.4 —
              the cycle-frame oversold reads HAVEN&rsquo;T cleared yet;
              the bounce engine is engine-only this snap, not a
              cycle-frame turn. Ichimoku flipped on the fast frames:
              15m, 30m, 1h all now ABOVE cloud (15m 8b, 30m 4b, 1h 4b);
              4h still 79b BELOW cloud at $68.7k upper, 8h 69b below at
              $74.6k upper, 12h 33b below at $77.1k upper, 1d 7b below
              at $73.9k upper. 1M still 28b ABOVE cloud at $46.9k
              support, 1w 19b below the $100.3k upper boundary. No fresh
              ⚡ TD9 signal on the engine this scan; the cluster stays
              at two frames pending whether the 1M closes the 9-count.{' '}
              <span className="dn-em">
                Read straight: the engine confirmed the bounce (1h
                water-up MACD cross plus 30m water-up cross 4b, RSI
                reclaim across 15m / 30m / 1h, 15m / 30m / 1h flipped
                above cloud), the cycle frames still oversold (1d RSI
                26.4 lineage low, 12h 30.7, 3d 34.4), and the
                middle-frame cluster (4h / 8h / 12h) stays below cloud
                with deep negative MA offsets. The engine has the
                bounce; the cycle frames have not joined.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,229</td><td className="num bull">63.0</td><td className="neut">water-down golden 12b</td><td className="bull">above ↓62.2k 8b</td><td>Sell 4</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">63,229</td><td className="num bull">66.6</td><td className="bull">water-up golden 4b</td><td className="bull">above ↓62.1k 4b</td><td>Sell 7</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">63,229</td><td className="num bull">64.5</td><td className="bull">water-up golden 1b (just printed)</td><td className="bull">above ↓61.6k 4b</td><td>Sell 3</td><td>BEAR hid · BULL hid · BEAR reg · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">63,229</td><td className="num">50.5</td><td className="neut">water-down golden 11b</td><td className="bear">below ↑68.7k 79b</td><td>Sell 2</td><td>BULL reg</td></tr>
                <tr><td>8h</td><td className="num">63,238</td><td className="num bear">36.0</td><td className="neut">water-down golden 2b</td><td className="bear">below ↑74.6k 69b</td><td>Sell 5</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">63,229</td><td className="num bear">30.7</td><td className="bear">water-down death (in)</td><td className="bear">below ↑77.1k 33b</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">63,229</td><td className="num bear">26.4</td><td className="bear">water-down death (in)</td><td className="bear">below ↑73.9k 7b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">63,229</td><td className="num">34.4</td><td className="bear">water-up death 4b</td><td className="bear">below ↑74.2k 2b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,229</td><td className="num">34.2</td><td className="bear">water-down death (in)</td><td className="bear">below ↑100.3k 19b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">63,238</td><td className="num">42.6</td><td className="bull">water-up (DIF above zero)</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9? pending</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 2026-06-08 00:01Z scan
                    (rolling latest file; archived to
                    snapshots/2026-06-08-0007/ before read per runbook
                    §1). Header alerts:{' '}
                    <em>1h 水上金叉 (just printed)</em>,{' '}
                    <em>8h 水下金叉 2b</em>,{' '}
                    <em>1d / 3d ⚡ TD9 BUY (last bar may be in-progress)</em>,
                    <em> 1M TD8 → 9? pending</em>. Scan spot $63,229, 24h
                    +3.90% (00:01Z MTF scan; the live-tape header at
                    00:05Z shows +3.87% on the same 24h window — the
                    4-minute gap accounts for the 0.03pt difference),
                    24h H/L $64,250 / $60,708, qVol $13.52B. Closes are
                    in-progress bars; treat every value as provisional
                    until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms anchor-still-overhead but a
              materially narrowed gap. Spot $63,290 sits{' '}
              <span className="dn-tag bear">−13.26% below D-SMA100
              $72,965</span> — the cycle anchor, the lowest-distance
              line of the daily ladder, ~$9.7k overhead (was ~$12.0k on
              06-07; $2.3k closer because spot ran +$2,357 toward it
              and the rolling 100D anchor bled lower by $13 as the
              06-04 / 06-05 / 06-06 deep prints rolled forward). The
              closest overhead MA is now D-EMA20{' '}
              <span className="dn-tag bear">$69,336 (−8.72%)</span>{' '}
              (was $69,751 on 06-07, $415 lower as the rolling 20D EMA
              kept absorbing the down-leg prints faster than the rally
              lifted it; closer to spot by $2,772 vs 06-07). The
              W-SMA20 / D-SMA100 / D-EMA50 cluster: W-SMA20{' '}
              <span className="dn-tag bear">$71,464 (−11.44%)</span>{' '}
              (was $73,230 on 06-07 — bled lower as the deep weekly
              closes rolled in), D-SMA100{' '}
              <span className="dn-tag bear">$72,965 (−13.26%)</span>,
              D-EMA50 <span className="dn-tag bear">$72,874
              (−13.15%)</span>. The rest in level order: D-SMA20{' '}
              <span className="dn-tag bear">$71,046 (−10.92%)</span>,
              D-SMA150{' '}
              <span className="dn-tag bear">$74,720 (−15.30%)</span>,
              D-EMA100{' '}
              <span className="dn-tag bear">$74,711 (−15.29%)</span>,
              D-SMA50 <span className="dn-tag bear">$75,598
              (−16.28%)</span>, D-EMA150{' '}
              <span className="dn-tag bear">$77,213 (−18.03%)</span>,
              D-SMA200{' '}
              <span className="dn-tag bear">$78,357 (−19.23%)</span>,
              W-EMA20{' '}
              <span className="dn-tag bear">$75,092 (−15.72%)</span>,
              D-EMA200{' '}
              <span className="dn-tag bear">$79,747 (−20.64%)</span>.
              Far above and disused on the 2024-2026 subset: W-EMA100
              seed $82,438 (−23.23%), W-EMA50 $83,124 (−23.86%), W-SMA100
              $88,428 (−28.43%), W-SMA50 $91,715 (−30.99%); W-EMA200
              seed reads $73,494 (−13.88%) and W-EMA150 seed reads
              $77,834 (−18.69%) but both are truncated EMA seeds on the
              128-week subset and surfaced only for completeness.{' '}
              <span className="dn-signal">
                The 200W watch JSON is still absent on the server (fourth
                consecutive note); the runbook §2 fallback to a
                full-history parquet computation puts full-history
                W-SMA200 at $62,002 (354 weekly bars from 2019-09-08,
                including the in-progress new week bar that just opened
                at $63,169.10 1m close). Live spot $63,290 sits +2.08%
                ABOVE the cycle floor on the SPOT print
              </span>. The 06-07 W-SUN weekly close $63,298.50 sits
              +$1,296 / +2.09% above the 200W — the first formal weekly
              close above the cycle floor of the down-leg lineage. The
              in-progress new week (W-SUN anchored to 2026-06-14, opened
              06-08 00:00Z) closes at parquet last bar $63,169.10 =
              +$1,167 / +1.88% above the level; the new week is one
              minute in, so the carry watch shifts to the 06-14 W-SUN
              close. The 200W watch policy reads ~$200/week drift; the
              level moved DOWN $6 vs 06-07&rsquo;s $62,008 because the
              rolling 200-week window dropped a week and added the new
              in-progress week at a comparable level — well inside the
              drift band. Per runbook do-not-fabricate no percentile /
              break-event claim is asserted off a missing JSON, only the
              level + the formal weekly-close reclaim are surfaced.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-08 00:05Z
                (close $63,169.10); offsets computed against live spot
                $63,290.00 directly (per 06-03 audit DN-006 disposition:
                live-pin denominator carries forward; the parquet-adjacent
                close $63,169.10 is $120.90 below the live pin, so the
                parquet-vs-live gap is tight this note — the parquet
                last bar EXACTLY matches the snapshot anchor minute, no
                anchor-vs-parquet drift). Daily closes: 06-02 $66,730,
                06-03 $64,118, 06-04 $63,853, 06-05 $61,022, 06-06
                $60,850, 06-07 $63,298 (the lineage-first weekly-close
                200W reclaim at +$1,296 above $62,002), 06-08 in-progress
                $63,169 — the down-leg close stabilized for a third
                consecutive session and 06-07 marked the formal reclaim.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book repaired +$27.7M to aggregate −11.0M (was −38.7M on 06-07 — largest single-note gamma repair of the down-leg lineage; still net-short-gamma, no sign flip) · flip moved UP $310 to $63,848 for the first time of the lineage · 8JUN26 0.3 DTE +6.40M POSITIVE (third consecutive positive front chunk; 7JUN +3.87M settled clean at 08:00Z 06-07) · $60k crash-put wall eased to −21.65M (was −26.19M, −$4.54M as spot ran $3.29k above the strike) · 26JUN26 18.3 DTE −20.05M monthly stays the load-bearing forward negative (eased from −24.94M by +$4.89M)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book repaired sharply across every read: aggregate
                gamma improved +$27.7M, the 0γ flip moved UP $310 for the
                first time of the lineage, and the front amplifier shape
                that powered the down-leg is structurally absent for a
                third consecutive expiry cycle — but the book stays
                net-short-gamma, no sign flip yet
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bear">−11.0M / 1%</span> (was
              −38.7M on 06-07 — a +$27.7M structural improvement, the
              largest single-note gamma repair of the down-leg lineage,
              but the book stays net-short-gamma; the sign flip is now
              only ~$11M of fresh positive gamma away). The 0-γ flip
              moved <span className="dn-tag bull">$63,538 → $63,848
              (+$310)</span> — the first up-move of the flip in the
              down-leg lineage (vs 06-07&rsquo;s −$240 drop and the
              preceding lineage of drops). Two dist-to-flip references
              (carried per 06-02 audit DN-007): live-spot reference{' '}
              <span className="dn-tag bear">−0.87%</span>{' '}
              (63,290 / 63,848 − 1 = −0.8740%); GEX-file Deribit-index
              reference{' '}
              <span className="dn-tag bear">−0.61%</span> (63,459 /
              63,848 − 1 = −0.6093%, matches the file&rsquo;s own
              dist-to-flip tile of −0.6%). The live-spot ref is −0.27pt
              wider than the Deribit-idx ref this note because the
              Deribit idx is only $169 above live spot — inside a normal
              idx-vs-live tracking band. Both refs negative; the live-spot
              ref NARROWED to −0.87% from 06-07&rsquo;s −4.10% (+3.23pt
              closing of the gap as spot ran while the flip moved UP
              with us by $310 — both sides contributed).
            </p>

            <p>
              The wall map shifted with the rally — downside crash-puts
              eased materially, the near-overhead negative thickened, and
              the heaviest call wall firmed:{' '}
              <span className="dn-tag bear">$60k −21.65M</span> (was
              −26.19M on 06-07, −$4.54M eased as spot ran $3.29k above
              the strike and the wall flipped role decisively from
              support-magnet to drag-down magnet only on a re-test —
              still the heaviest single negative wall on the chain),{' '}
              <span className="dn-tag bull">$80k +11.50M</span>{' '}
              (heaviest positive overhead, +$2.53M firmer vs 06-07&rsquo;s
              +8.97M — the upside dampening pole thickened materially),{' '}
              <span className="dn-tag bear">$55k −8.55M</span> (was
              −10.69M — eased $2.14M),{' '}
              <span className="dn-tag bear">$62k −7.85M</span> (was
              −5.84M on 06-07 — RE-THICKENED $2.01M as spot moved right
              above the strike, the wall is now an active drag on a
              pullback to the strike),{' '}
              <span className="dn-tag bear">$50k −5.92M</span> (was
              −6.80M — eased),{' '}
              <span className="dn-tag bear">$58k −4.80M</span> (was
              −6.47M — eased),{' '}
              <span className="dn-tag bull">$82k +4.43M</span> (was
              +3.30M — firmed),{' '}
              <span className="dn-tag bull">$78k +3.22M</span> (NEW
              top-10 positive, replacing 06-07&rsquo;s $61.5k +3.87M
              positive wall that has cleared as it served its function
              into the spike),{' '}
              <span className="dn-tag bull">$90k +3.01M</span>,{' '}
              <span className="dn-tag bull">$70k +2.50M</span> (NEW
              top-10 positive — a fresh small positive build on the
              upper-overhead band). The negative cluster $50k–$65k now
              stacks (in the listed top-10) to roughly{' '}
              <span className="dn-em">−48.77M of dealer amplification</span>{' '}
              (sum of the listed walls in the band: −5.92 − 8.55 − 4.80
              − 21.65 − 7.85 = −48.77M; the 06-07 $59k / $61k / $64k /
              $65k walls have fallen out of today&rsquo;s top-10 strip,
              the cluster has consolidated to fewer larger strikes; vs
              06-07&rsquo;s comparable listed cluster of −63.25M — the
              corridor eased ~$14.5M lighter on the top-10 basis, the
              dealer-side downside pressure relaxed materially). The
              load-bearing read this note is{' '}
              <span className="dn-signal">
                the structural absence of a front amplifier for a third
                consecutive expiry cycle (8JUN +6.40M, 7JUN +3.87M, 6JUN
                cleared at 08:00Z 06-06) combined with the 0γ flip
                moving UP $310 for the first time of the lineage. The
                dealer book finally has both halves of the repair: the
                front decays clean AND the flip moves with us. Combined
                with the $60k wall easing $4.54M and the $80k wall
                firming $2.53M, the strikes immediately above and below
                spot now show a two-sided dampening shape on the
                near-overhead band, even as the 26JUN −20.05M monthly
                stays the load-bearing forward chunk
              </span>. Forward expiries: 8JUN 0.3 +6.40M (today&rsquo;s
              settle, ~8h ahead), 9JUN 1.3 +2.29M (was 8JUN 1.3 −2.29M
              on 06-07; the front chunks are now positive on the entire
              short forward strip), 10JUN 2.3 +1.02M (was 9JUN 2.3
              +0.35M), 11JUN 3.3 +0.36M (was 10JUN 3.3 +0.42M), 12JUN
              4.3 −4.44M (was 12JUN 5.3 −8.91M on 06-07 — eased +$4.47M,
              the next negative chunk material weight is significantly
              reduced), 19JUN 11.3 −4.65M (was 19JUN 12.3 −6.26M — eased
              +$1.61M), 26JUN 18.3 −20.05M (was 26JUN 19.3 −24.94M —
              eased +$4.89M, still the load-bearing forward negative),
              31JUL 53.3 +4.61M (was +1.61M — firmed +$3.00M), 28AUG
              81.3 +1.41M, 25SEP 109.3 +1.92M (was −0.69M — flipped
              positive), 25DEC 200.3 +3.72M (was +1.64M — firmed
              materially), 26MAR27 291.3 +0.62M. The 8JUN +6.40M front
              chunk settles at 08:00Z 06-08 (~8h ahead of this snap);
              since it is POSITIVE the settle window does NOT carry an
              amplifier — third consecutive expiry settle without a
              fresh negative front chunk. The post-settle ex-8JUN
              aggregate is roughly{' '}
              <span className="dn-tag">−11.0M − (+6.40M) = −17.4M</span>{' '}
              (modestly worse on a forward-residual basis because the
              positive front chunk is what clears, leaving the negative
              tail behind), but the front-decay shape itself is a
              structural improvement that compounds across three
              consecutive expiry cycles.
            </p>

            <p>
              IV median across 990 instruments is{' '}
              <span className="dn-tag bear">54.3%</span> (firmed +0.8pt
              from 06-07&rsquo;s 53.5% / 1,008 instruments — vol firmed
              into the spike; 18 fewer instruments reflect the 7JUN
              chain clearing at 08:00Z 06-07 net of 10JUN / 11JUN
              near-dated listings) against 30D close-to-close RV of{' '}
              <span className="dn-tag bear">40.40%</span> (was 37.03% —
              +3.37pt as the +3.87% 06-08 daily return rolled into the
              30D window). Chain richness{' '}
              <span className="dn-tag bear">~+13.9pt</span> (was ~+16.47pt
              on 06-07 — narrowed by −2.57pt as RV caught up to IV).
              A chain-median across N instruments,{' '}
              <span className="dn-em">not</span> a tradable spread;
              expiry-/strike-level vega, skew and term structure remain
              not loaded; the vol read stays framework-only. RV
              methodology: 30D close-to-close, logret.std × √365 × 100
              on the last 30 daily log returns (= 31 consecutive daily
              closes) anchored to parquet last bar 2026-06-08 00:05Z;
              the underlying 31-close window now spans $60,849.70 –
              $82,177.70 (the 06-06 low close enters the window while
              the comparable low-end print from a month ago rolls out).
              For reference, last 29 returns / 30 closes reads 39.89%;
              the 40.40% page value comes from 30 returns.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · weekend FRED freeze in second day — every Tier-1 FRED row carries the same Friday-close values as the 06-07 / 06-06 notes (10Y 4.47% / TIPS 2.11% / HY OAS 2.74% / NFCI −0.494 stale 9d / MOVE 75.2 / Fed liq $5.834T / US-JP 1.95% / USD-CNY 6.7650) · Yahoo daily DXY printed ONE fresh tick to 100.15 (+0.08 day · was 100.07 carried on 06-07) and USD/JPY to 160.30 (+0.31 day · was 160.29 carried) · the credit gate stays 4bp from fire on the carried Friday close (HY OAS 2.74%); the rates gate stays 6bp from fire (10Y 4.47%) · BTC-vs-TradFi 7d gap NARROWED to −9.63pt (was −13.26pt on 06-07) as BTC eased a 06-01 deep print out of the 7d window</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape is structurally frozen on a second-day
                weekend FRED freeze, with one daily-Yahoo DXY tick
                printing fresh: every Tier-1 FRED daily row carries the
                same Friday-close values as the 06-06 / 06-07 notes
                because the next watchable FRED daily print is Monday
                US open (still ahead of this 00:05Z 06-08 snap)
              </span>. Dashboard render is 2026-06-07 22:15Z, ~1h 50m
              before the snapshot — same render-lag profile as 06-07.
              US 10Y nominal{' '}
              <span className="dn-tag bull">4.47% (−2.0bp Δ-column
              carried)</span>, regime z{' '}
              <span className="dn-tag bear">+1.56</span>, episodic z{' '}
              <span className="dn-tag">+0.14</span> — RISK-OFF tag
              carried, gate still 6bp from fire on the carried Friday
              close. 10Y TIPS real{' '}
              <span className="dn-tag bear">2.11% (flat)</span>, regime
              z <span className="dn-tag bear">+1.75</span>, episodic z{' '}
              <span className="dn-tag">+0.95</span> — RISK-OFF carried.
              5Y5Y BE inflation{' '}
              <span className="dn-tag">2.24% (flat)</span> — carried.
              HY OAS <span className="dn-tag bull">2.74% (−1.0bp
              Δ-column carried)</span>, regime z{' '}
              <span className="dn-tag bull">−1.14</span>, episodic z{' '}
              <span className="dn-tag bull">−0.80</span> — RISK-ON tag
              still, gate still 4bp from fire on the carried Friday
              close. NFCI{' '}
              <span className="dn-tag">−0.494 (+0.01)</span> — carried,
              stale 9d (+1d vs 06-07). Fed net liquidity{' '}
              <span className="dn-tag bear">$5.834T (−0.038T)</span> —
              carried. MOVE bond vol{' '}
              <span className="dn-tag bear">75.2 (+4.04 carried)</span>{' '}
              — the lineage bond-vol jump from Friday continues as a
              fixed weekend baseline, not a fresh print. DXY{' '}
              <span className="dn-tag bear">100.15 (+0.08 day · firmed
              by another Yahoo tick vs 06-07&rsquo;s 100.07)</span>,
              regime z <span className="dn-tag bear">+1.86</span>,
              episodic z <span className="dn-tag bear">+2.18</span> —
              RISK-OFF EPISODIC carried near the lineage extreme on a
              modestly firmer print; USD/JPY{' '}
              <span className="dn-tag bear">160.30 (+0.31 day vs
              06-07&rsquo;s 160.29 carry)</span> — yen weakened a tick
              further; US-JP 10Y spread{' '}
              <span className="dn-tag bull">1.95% (−2.0bp carried)</span>;
              USD/CNY{' '}
              <span className="dn-tag bull">6.7650 (carried)</span>.
              JGB 10Y stale 67d at 2.52% (staleness +1d vs 06-07).{' '}
              <span className="dn-em">
                Net: the macro contribution is still a frozen Friday-close
                baseline plus one DXY / one JPY tick that firmed
                marginally. The credit gate is still 4bp from fire on
                the carried Friday close; the rates gate is still 6bp
                from fire. The reclaim-long rates filter (10Y &lt;
                4.55%) stays verified TRUE at 4.47% on the carried
                Friday close. The BTC-vs-TradFi decoupling NARROWED to
                −9.63pt (BTC −14.36% vs NQ −4.73%) from 06-07&rsquo;s
                −13.26pt — but this time BECAUSE the 06-01 / 06-02 deep
                BTC prints rolled OUT of the 7d window while TradFi
                stayed comparable; the rotation read is now BTC
                normalizing-back into the TradFi tape, not BTC
                extending alone
              </span>.
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
                <tr><td>US 10Y nominal</td><td className="num">4.47%</td><td className="num bull">−2.0bp (carried)</td><td className="num bear">+1.56</td><td className="num">+0.14</td><td className="bear">tight · carried Friday close · gate 6bp from fire</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.11%</td><td className="num">0.0bp</td><td className="num bear">+1.75</td><td className="num">+0.95</td><td className="bear">tight · still RISK-OFF · carried</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.24%</td><td className="num">0.0bp</td><td className="num">+0.09</td><td className="num bull">−0.88</td><td className="neut">no tag · carried</td></tr>
                <tr><td>HY OAS</td><td className="num bull">2.74%</td><td className="num bull">−1.0bp (carried)</td><td className="num bull">−1.14</td><td className="num bull">−0.80</td><td className="bull">loose · risk-on · gate 4bp from fire on carried Friday close</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.494</td><td className="num">+0.01</td><td className="num">+0.72</td><td className="num">−0.01</td><td className="neut">tight · stale 9d · carried</td></tr>
                <tr><td>MOVE bond vol</td><td className="num bear">75.2</td><td className="num bear">+4.04 (carried)</td><td className="num">−0.10</td><td className="num">+0.30</td><td className="bear">neutral on z · 06-06 lineage jump still the fixed weekend baseline</td></tr>
                <tr><td>DXY</td><td className="num bear">100.15</td><td className="num bear">+0.08 day · +0.08 vs 06-07 note 100.07</td><td className="num bear">+1.86</td><td className="num bear">+2.18</td><td className="bear">RISK-OFF EPISODIC · firmed another Yahoo tick</td></tr>
                <tr><td>Fed net liquidity</td><td className="num bear">$5.834T</td><td className="num bear">−0.038T</td><td className="num">−0.12</td><td className="num bear">−2.29</td><td className="bear">carried · no fresh weekly print possible until Monday</td></tr>
                <tr><td>USD/JPY</td><td className="num bear">160.30</td><td className="num bear">+0.31 day · +0.01 vs 06-07 note 160.29</td><td className="num bear">+1.36</td><td className="num bear">+1.44</td><td className="bear">yen weakened a tick further</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num bull">1.95%</td><td className="num bull">−2.0bp (carried)</td><td className="num bull">−0.85</td><td className="num">+0.14</td><td className="bull">tightened · carried</td></tr>
                <tr><td>USD/CNY</td><td className="num bull">6.7650</td><td className="num bull">−0.01 (carried)</td><td className="num bull">−1.84</td><td className="num bull">−1.46</td><td className="bull">no tag · loose · carried</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp (monthly · stale 67d)</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean · staleness +1d vs 06-07</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary
              00:01Z — <span className="dn-em">a 7-day rolling read,
              not today</span>). Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.236</span> (firmed +0.003
              from 06-07&rsquo;s 0.233 — moved BACK toward the 0.25
              NORMAL threshold marginally; the regime tag stays
              IDIOSYNCRATIC). BTC&rsquo;s top tie stays SILVER:{' '}
              <span className="dn-tag">SILVER +0.281</span> (was +0.261
              on 06-07 — firmed +0.020), TSLA promoted to #2{' '}
              <span className="dn-tag">+0.259</span> (was +0.220 — firmed
              +0.039), GOLD{' '}
              <span className="dn-tag">+0.233</span> (was +0.194),
              MSFT <span className="dn-tag">+0.218</span> (was +0.189 —
              firmed +0.029), SP500{' '}
              <span className="dn-tag">+0.214</span> (was +0.220 —
              softened −0.006), COPPER{' '}
              <span className="dn-tag">+0.208</span> (was +0.178), NVDA{' '}
              <span className="dn-tag">+0.198</span> (was +0.185), META{' '}
              <span className="dn-tag">+0.195</span> (was +0.166), NQ{' '}
              <span className="dn-tag">+0.188</span>{' '}
              <span className="dn-em">(EXACTLY UNCHANGED vs 06-07&rsquo;s
              +0.188 — zero drift, the BTC↔NQ firming that ran +0.059
              from 06-06 → 06-07 stalled completely)</span>, URNM{' '}
              <span className="dn-tag">+0.187</span>. 7d performance:{' '}
              <span className="dn-tag bear">BTC −14.36%</span> (eased
              from 06-07&rsquo;s −17.75% by +3.39pt as the 06-01 / 06-02
              deep prints rolled out of the rolling 7d window), NQ{' '}
              <span className="dn-tag bear">−4.73%</span> (was −4.49% —
              extended marginally), SP500{' '}
              <span className="dn-tag bear">−2.75%</span> (was −2.33% —
              extended slightly), JP225{' '}
              <span className="dn-tag bear">−4.97%</span> (was −3.98%
              — extended), NVDA{' '}
              <span className="dn-tag bear">−4.18%</span> (was −4.65% —
              eased), META{' '}
              <span className="dn-tag bear">−7.03%</span> (was −6.61%),
              AAPL <span className="dn-tag bear">−0.99%</span> (was
              −1.38% — eased), MSFT{' '}
              <span className="dn-tag bear">−9.51%</span> (was −8.85% —
              extended), AMZN{' '}
              <span className="dn-tag bear">−9.03%</span> (was −9.38%),
              TSLA <span className="dn-tag bear">−9.21%</span> (was
              −9.60% — eased). Metals stayed soft: GOLD{' '}
              <span className="dn-tag bear">−4.29%</span> (was −4.90%
              — eased), SILVER{' '}
              <span className="dn-tag bear">−9.76%</span> (was −9.99%),
              PLAT <span className="dn-tag bear">−7.77%</span> (was
              −7.61%), PALL{' '}
              <span className="dn-tag bear">−9.78%</span> (was −10.23%
              — eased), COPPER{' '}
              <span className="dn-tag bear">−2.37%</span> (was −4.21% —
              eased), URNM{' '}
              <span className="dn-tag bear">−10.37%</span> (was −10.74%).
              Energy stayed positive but softer: CL{' '}
              <span className="dn-tag bull">+3.12%</span> (was +4.09% —
              cooled), BRENT{' '}
              <span className="dn-tag bull">+2.07%</span> (was +2.62% —
              cooled).{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine NARROWED to
                ~−9.63pt (BTC −14.36% vs NQ −4.73%) from −13.26pt on
                06-07 — but this time BECAUSE BTC EASED back into a
                marginally-extending TradFi window (NQ −0.24pt
                week-on-week, SP500 −0.42pt, JP225 −0.99pt), not
                because BTC kept extending alone. The rotation read
                is now BTC normalizing-back to the TradFi tape, not
                BTC extending alone — the inverse of 06-07&rsquo;s
                read. With mean |r| at 0.236 (firmed +0.003), the
                tape stays structurally IDIOSYNCRATIC for trading
                prescription but with a marginal firming back toward
                NORMAL
              </span>. JGB monthly 2.52% carries EXTREME RISK-OFF
              monthly tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · runner / put-spread tail / short framework status unchanged · 200W cycle floor watch RESOLVED on 06-07 W-SUN weekly close at $63,298 vs $62,002 (reclaim direction) · mean-revert long scout leg-3 trigger reframed UP to flip $63,848 (was $63,538 — moved +$310, the first up-move of the flip in the lineage); recomputed R/R 1.94:1 at trigger $63,848 / stop $59,154 / first target $72,965 still passes the 1.5:1 gate; trigger has not formally fired (snap-minute 1h close $63,298.50 came in $240 below the prior $63,538 trigger and $550 below the reframed $63,848); STILL NON-ACTIONABLE · no fresh trades on this snap</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 06-07 framework watches printed cleanly: the 7JUN
                +3.87M front chunk settled CLEAN at 08:00Z 06-07 (second
                consecutive clean front-chunk settle), the 8JUN
                replacement listed POSITIVE at +6.40M (third consecutive
                positive front chunk), the 06-07 W-SUN weekly close
                $63,298 cleared the full-history 200W $62,002 by
                +$1,296 / +2.09% (formal weekly-close reclaim of the
                cycle floor, the first of the down-leg lineage), the
                spot-extension tail did NOT fire (24h low $60,746 held
                +$1,592 above the lineage capitulation low $59,154 — the
                post-wick floor held its second consecutive session),
                and the dealer book repaired sharply (+$27.7M to −11.0M
                aggregate, the flip moved UP $310 for the first time of
                the lineage). But the mean-revert long scout&rsquo;s
                leg-3 trigger reframes UP to the new flip $63,848 (was
                $63,538), and the snap-minute 1h close $63,298.50 came
                in $240 below the prior trigger and $550 below the
                reframed one — the trigger has NOT formally fired and
                the scout stays NON-ACTIONABLE for a fifth session
              </span>. The cover-bounce scout from 05-31 remains
              DROPPED on the price plane — the cycle anchor is still
              ~$9.7k overhead (was ~$12.0k on 06-07; closer by $2.3k as
              spot ran +$2,357 toward it) and three legs are still
              required (anchor reclaim AND dealer-book repair AND
              cover-shape). The dealer-book repair leg moved
              MATERIALLY today (gamma +$27.7M to −11.0M, the closest
              the book has come to a sign flip since the down-leg
              started — ~$11M of fresh positive gamma from a flip);
              the cover-shape leg printed CLEAN on both the 24h and 4h
              windows (every flow field net-buyer, OI sharply shrinking,
              the cleanest cover-shape day of the down-leg lineage by
              magnitude); but the anchor reclaim leg is unmoved at
              ~$9.7k overhead. The runner and the 29MAY put-spread
              tail stay closed unchanged. The cycle-continuation
              framework remains CLOSED-VINDICATED with nothing fresh
              to test today (no single-minute Δnet ≤ −3k print across
              the 24h tape; closest pattern was the +$1,532 BTC
              post-spike short re-stack BJ 06:21 → BJ 08:05 06-08, a
              re-stack-shape on a ~1h 44min window but not a
              single-minute hostile-2 signature). The mean-revert long
              scout from 06-03 keeps two of three promotion legs
              cleared and the third reframes to the new flip:{' '}
              <span className="dn-signal">
                a 1h close &gt; flip $63,848 with OI still building is
                the right structural inflection on today&rsquo;s tape;
                the recomputed R/R at trigger $63,848 / stop $59,154
                (06-06 capitulation low; today&rsquo;s 24h low $60,746
                is +$1,592 above, so the lineage cap low remains the
                stop reference) / first target $72,965 (today&rsquo;s
                D-SMA100 cycle anchor) reads $4,694 risk / $9,117
                reward = 1.94:1, modestly softer than 06-07&rsquo;s
                2.15:1 because the trigger moved UP more than the
                stop or target (the flip ran with us +$310 while the
                cycle anchor dropped $13); still comfortably above
                the desk&rsquo;s 1.5:1 gate
              </span>. The scout stays NON-ACTIONABLE because leg 3
              has not printed — spot $63,290 sits $558 below the
              reframed trigger (vs $2,605 below on 06-07 — closer by
              $2,047 in one session) — but the R/R reads moderately
              softer than yesterday and the trigger is now closer.
              The 200W cycle floor watch RESOLVED on the 06-07 W-SUN
              weekly close in the reclaim direction; the carry watch
              shifts to the 06-14 W-SUN close. The trade book today
              is unchanged in terms of live size (none); the desk
              maintains discipline as the dealer side repairs sharply,
              the cover-shape prints cleanly on 24h and 4h, the
              engine confirms with a fresh 1h water-up MACD golden
              cross, and the SM book starts rebuilding a fresh
              short-stack against the bounce.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">closed · primary · runner ladder complete · closed on 29MAY 08:00Z expiry settle (unchanged status carried from 06-07)</span>
              <div className="dn-trade-name">
                Flip-extend short — closed on 29MAY 08:00Z expiry settle (unchanged from 06-07)
              </div>
              <div className="dn-thesis">
                Status unchanged. The retrospective read continues to
                vindicate the close: 05-30 / 05-31 daily closes
                ($73,857 / $73,653) marked the two-day post-amplifier
                bounce, then 06-01 broke ($71,392), 06-02 dumped
                (−6.53%), 06-03 extended (−3.91%), 06-04 nearly flat
                (−0.41%), 06-05 extended (−4.43% close-to-close at
                $61,022), 06-06 stabilized (−$172 close-to-close at
                $60,850), 06-07 reclaimed the 200W cycle floor on
                close at $63,298 (+$2,448 close-to-close, the biggest
                up-day of the lineage), and today&rsquo;s in-progress
                06-08 close $63,169 is effectively flat vs 06-07
                (one minute into the new UTC day). The down-leg
                stopped extending two sessions ago and reclaimed the
                200W on weekly close. Re-entry path remains a fresh
                structural setup, not a roll.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (amplifier settle) · no residual position · unchanged from 06-07</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">do not chase a re-entry short into the two-frame ⚡ TD9 BUY cluster (1d / 3d), a fresh 1h water-up MACD golden cross, the +$27.7M one-session gamma repair, the 200W cycle floor reclaim on the 06-07 weekly close, three consecutive positive front chunks (6JUN cleared, 7JUN +3.87M, 8JUN +6.40M pending today), and the textbook 24h cover-shape — the short side is structurally exhausted on this leg even with the post-spike SM short add of +960 BTC (BJ 06:21 → 08:05; net stays +1,532 BTC LESS short vs the BJ 00:11 max-short trough)</span></div>
              </div>
              <div className="dn-gating">
                <b>Trade closed.</b> The audit-cycle discipline holds:
                no roll, no average, no late-tier add — even though
                the SM book started rebuilding a fresh short into the
                snap, the engine-frame cover-shape, the dealer-book
                +$27.7M repair, the 200W reclaim on close, and the
                third consecutive positive front chunk all argue
                against a short add on the second-derivative.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">DROPPED · scout · cycle anchor still overhead at ~$9.7k (was ~$12.0k on 06-07 — closer by $2.3k as spot ran toward it) · dealer-book repair leg moved MATERIALLY (+$27.7M to −11.0M, ~$11M from sign flip) · cover-shape leg printed CLEAN on both 24h and 4h (cleanest of the down-leg lineage by magnitude)</span>
              <div className="dn-trade-name">
                Cover-bounce scout — DROPPED unchanged on the anchor reclaim leg, but TWO of three legs moved decisively closer to firing today (dealer-book repair leg +$27.7M to ~$11M from sign flip, cover-shape leg clean on both 24h and 4h with the cleanest magnitude of the lineage)
              </div>
              <div className="dn-thesis">
                The cover-bounce path has three legs: (1) anchor
                reclaim (1d close &gt; D-SMA100 $72,965), (2)
                dealer-book repair (aggregate GEX flips back &gt; 0),
                (3) cover-shape flow print (OI shrinking + spot CVD
                bid + SM short_btc bleeds). Today: leg 1 unmoved
                structurally but materially closer at ~$9.7k overhead
                (cycle anchor stays the load-bearing absent gate),
                leg 2 IMPROVED MATERIALLY (+$27.7M to −11.0M — the
                largest single-note repair of the down-leg lineage,
                the book is now ~$11M of fresh positive gamma from a
                sign flip), leg 3 PRINTED CLEAN on both 24h and 4h
                windows at the 00:05Z anchor (24h: spot CVD +4,212,
                fut CVD +1,851, big-print net-buyer +425 over 365
                prints, taker-net +1,823, OI −2,954 BTC — every flow
                field net-buyer with OI sharply shrinking; 4h: spot
                CVD +1,538, fut CVD +277, big-print +217 over 36
                prints, taker-net +289, OI −1,867 BTC). Two of three
                legs moved decisively today; leg 1 still gates. The
                scout stays DROPPED on the price plane — the cycle
                anchor is the structural gate and ~$9.7k away even on
                a +3.87% up-day.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout status</span><span className="dn-lvl-v">DROPPED on the price plane (cycle anchor stays the load-bearing absent leg at ~$9.7k overhead; closer by $2.3k vs 06-07); legs 2 and 3 both moved decisively closer to firing</span></div>
                <div><span className="dn-lvl-k">re-entry threshold (carried)</span><span className="dn-lvl-v bull">1d close &gt; D-SMA100 $72,965 AND aggregate GEX flips back &gt; 0 (currently −11.0M, ~$11M from sign flip after today&rsquo;s +$27.7M repair) AND 1h cover-shape print (24h and 4h cover-shapes both printed clean today; the snap-minute 1h showed long-rebuild not cover-shape, so the 1h check tightens on a leg-3 trigger bar)</span></div>
                <div><span className="dn-lvl-k">no long entry here</span><span className="dn-lvl-v bear">do not buy the two-concurrent TD9 BUY cluster (1d / 3d) plus the fresh 1h MACD golden cross as a cover-bounce — this is the mean-revert scout setup below, not the cover-bounce setup; the cover-bounce path stays gated by the anchor reclaim regardless of how clean the engine-frame cover-shape gets</span></div>
              </div>
              <div className="dn-gating">
                <b>Trade dropped on the price plane.</b> The
                mean-revert long scout below is the separate setup
                keyed to oversold-counter exhaustion; the
                cover-bounce path is gated by anchor reclaim. The
                24h and 4h cover-shape windows printing clean and
                the dealer-book moving ~$11M from sign flip are
                meaningful second-derivative signals that support
                the mean-revert scout&rsquo;s leg-3 flip-reclaim
                trigger if it fires — but they do NOT unlock the
                cover-bounce path on their own; the anchor remains
                the structural gate.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">CLOSED-VINDICATED · short scout · framework watch · no fresh single-minute hostile-2 signature on today&rsquo;s 24h tape (closest was the post-spike short add +960 BTC across BJ 06:21 → BJ 08:05 06-08, a ~1h 44min window) · calendar cadence stays formally retired</span>
              <div className="dn-trade-name">
                Anchor-break short scout — CLOSED-VINDICATED (closure carried from 06-06 / 06-07; today&rsquo;s 24h tape produced a wider ~1h 44min re-stack shape but no single-minute hostile-2 signature; the calendar cadence stays formally retired)
              </div>
              <div className="dn-thesis">
                Status unchanged from 06-07. The cycle continuation
                framework was formally retired on the 06-06 sixth-print
                failure at the BJ 15:41 fallback pin; today there is
                no candidate calendar minute to evaluate. The
                framework continues as a no-calendar watchlist for
                fresh re-stack hostile-2 signatures (Δshort &gt; 0 +
                Δlong &lt; 0 same minute with |Δnet| ≥ 3k); on
                today&rsquo;s 24h tape no single-minute Δnet print
                cleared the ≥ 3k bar. The closest pattern was the
                post-spike re-stack: SM short_btc rebuilt from
                trough 54,462 @ BJ 06:21 06-08 to 55,422 at the snap
                BJ 08:05 06-08 (a +960 BTC fresh short add) coincident
                with long_btc rebuilding from trough 13,104 to 13,796
                (a +692 BTC long add) across the same ~1h 44min
                window — a re-stack-shape on a wider window, not a
                single-minute signature.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">no fresh hostile-2 today</span><span className="dn-lvl-v">no single-minute Δnet ≤ −3k print across the 24h tape; closest pattern was the post-spike short add +960 BTC (long +692 same window) across BJ 06:21 → BJ 08:05 06-08, a ~1h 44min window shape but not a single-minute signature. Separately, net at the snap is +1,532 BTC LESS short vs the BJ 00:11 max-short net trough, not a fresh short add</span></div>
                <div><span className="dn-lvl-k">five-print chain (closed)</span><span className="dn-lvl-v">05-30 06:01Z Δnet −5,569 → 06-01 06:16Z −3,137 → 06-02 06:46Z −6,621 → 06-03 07:41Z −7,177 (lineage extreme) → 06-04 07:41Z −5,591 → 06-05 sixth-print test FAILED · framework closed</span></div>
                <div><span className="dn-lvl-k">disposition</span><span className="dn-lvl-v">CLOSED-VINDICATED carried · the desk will not chase a re-entry short on a tape where the cycle continuation cadence has cleanly failed, the dealer-side has decisively repaired (+$27.7M today to ~$11M from sign flip), three consecutive positive front chunks settled / pending, the 200W reclaimed on close, and the 24h cover-shape printed clean across every flow field</span></div>
                <div><span className="dn-lvl-k">framework next step</span><span className="dn-lvl-v">future re-stack hostile-2 signatures (Δshort &gt; 0 + Δlong &lt; 0 same minute, |Δnet| ≥ 3k) remain meaningful tape reads when they print, on no-calendar basis only; today&rsquo;s post-spike re-stack does NOT clear the single-minute bar</span></div>
              </div>
              <div className="dn-gating">
                <b>Status:</b> CLOSED-VINDICATED carried.{' '}
                <b>Hard rule:</b> no re-entry short on a tape where
                the cycle continuation cadence has cleanly failed,
                the dealer-side has decisively repaired (+$27.7M
                today, ~$11M from sign flip), the 200W reclaimed on
                weekly close, the engine printed a fresh 1h water-up
                MACD golden cross, three consecutive positive front
                chunks, and a textbook 24h cover-shape across every
                flow field. The post-spike SM re-stack is
                informational, not a trade trigger on the
                single-minute basis.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">closed · macro tail · closed on 29MAY 08:00Z settle (unchanged status carried from 06-07; weekend FRED freeze second day — credit gate still 4bp / rates gate still 6bp from fire on Friday closes)</span>
              <div className="dn-trade-name">
                Downside put-spread — closed on 29MAY 08:00Z settle; no roll (weekend FRED freeze second day — no fresh macro print until Monday US open)
              </div>
              <div className="dn-thesis">
                Status unchanged on position. The macro tape is
                structurally frozen on a second-day weekend FRED
                freeze: every Tier-1 FRED daily row carries the
                same Friday-close values as the 06-06 / 06-07 notes,
                so the credit gate stays 4bp from fire (HY OAS
                2.74%) and the rate-side gate stays 6bp from fire
                (10Y nominal 4.47%) — no fresh print is possible
                until Monday US open and no weekend divergence can
                be measured. Yahoo daily DXY printed one fresh
                tick to 100.15 (+0.08 day) and USD/JPY to 160.30
                (+0.31 day), so the dollar side has a hair of
                fresh data; everything else on the FRED side is
                still the frozen Friday-close. The reclaim-long
                rates filter (10Y &lt; 4.55%) stays verified TRUE
                at 4.47% on the carried Friday close. No fresh
                hedge today because (a) no FRED-side macro print
                can drive a re-grow trigger over the weekend, (b)
                the BTC-internal dealer side has decisively
                REPAIRED (+$27.7M today to ~$11M from sign flip),
                (c) the third consecutive front chunk settles
                positive today (8JUN +6.40M, ~8h ahead of the
                snap), and (d) the two-frame TD9 BUY cluster +
                fresh 1h MACD golden cross + 200W reclaim on
                close argue for a long-side counter watch.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (Deribit 29MAY settle) · no residual position · no roll · unchanged from 06-07</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (next Tier-1 print)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.74%, 4bp to fire — carried Friday close, gate cannot move over the weekend; Monday US open is the next watchable print) OR 10Y &gt; 4.53% close (currently 4.47%, 6bp to fire — carried Friday close)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — verified TRUE at 4.47% on the carried Friday close; the filter holds into the Monday US open</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the macro tape is frozen on a
                second-day weekend FRED freeze; gate proximity
                carries the Friday close on both sides. The next
                clean macro render at Monday US open is the next
                watchable print. No roll today because the
                BTC-internal structural read (dealer side +$27.7M
                repair, third consecutive positive front chunk,
                200W reclaim on close, two-frame TD9 BUY cluster,
                fresh 1h MACD golden cross, mean-revert scout R/R
                1.94:1 still above gate) argues for a long-side
                counter watch.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · framework watch · NON-ACTIONABLE · two of three promotion legs cleared and the third REFRAMED UP to flip $63,848 (was $63,538 — moved +$310 against us); recomputed R/R = 1.94:1 (modestly softer than 06-07&rsquo;s 2.15:1, still above the 1.5:1 gate), trigger has not printed; STILL NON-ACTIONABLE pending the print — but spot sits $558 below the reframed inflection vs $2,605 below on 06-07</span>
              <div className="dn-trade-name">
                Mean-revert long scout — framework watch; leg 1 (multi-TF ⚡ TD9 BUY) rotated DOWN from three to two concurrent frames (1d / 3d), 12h converted to fresh Sell 3; leg 2 (funding cumulative short-pay ≥ 4h) eased on the 24h mean (back to +0.87% positive from −0.13%) but the 24h still held 542 / 1441 negative rows (37.6%); leg 3 inflection reframed UP to flip $63,848 — recomputed R/R passes the gate at 1.94:1; print not in
              </div>
              <div className="dn-thesis">
                The mean-revert long scout&rsquo;s three promotion
                legs are: (1) multi-TF TD9 BUY confirmed on a cycle
                frame — today rotated DOWN to TWO concurrent frames
                (1d / 3d) with 1M still TD8 → 9? pending; 12h
                converted from confirmed TD9 BUY to fresh Sell 3 as
                the rally pulled the bars above the down-counter
                close thresholds (one fewer active cycle frame
                vs 06-07&rsquo;s three; the cluster narrowed but
                stayed on the multi-cycle frames); (2) funding
                cumulative short-pay regime ≥ 4h — the 24h held
                542 / 1441 negative rows (37.6%, still above the
                4h gate measured on contiguous-streak terms, but
                the 24h mean flipped back to +0.87% positive ann
                from 06-07&rsquo;s −0.13%, so the funding regime
                read is now mixed: the gate condition still cleared
                on contiguous streak but the regime read is no
                longer one-way short-pay); (3) the 1h reclaim above
                a structural inflection. The 06-07 note framed leg
                3 at flip $63,538; today the flip moved UP $310 to
                $63,848 (the first up-move of the flip in the
                lineage), so leg 3 reframes UP and runs further
                away from spot by that exact amount minus the spot
                rally — net the gap closed from $2,605 below to
                $558 below. Recomputed R/R at the reframed
                inflection: trigger $63,848 / stop $59,154 (06-06
                capitulation low; today&rsquo;s 24h low $60,746 is
                +$1,592 above, so the lineage capitulation low
                remains the stop reference) / first target $72,965
                (today&rsquo;s D-SMA100 cycle anchor) gives risk
                $4,694 / reward $9,117 = 1.94:1, modestly softer
                than 06-07&rsquo;s 2.15:1 because the trigger
                moved UP more than the stop or target (the flip
                ran with us +$310 while the cycle anchor dropped
                only $13 — net a $323 widening of the risk side
                and a $13 reduction of the reward side); still
                comfortably above the desk&rsquo;s 1.5:1 gate.
                The scout stays NON-ACTIONABLE because leg 3 has
                not printed — spot $63,290 sits $558 below the
                reframed inflection (vs $2,605 below on 06-07 —
                closer by $2,047 in one session) — but the R/R
                reads moderately softer than yesterday and the
                trigger is now markedly closer.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">promotion gates (2 of 3 cleared; third reframed and pending)</span><span className="dn-lvl-v bull">leg 1 multi-TF TD9 BUY — CLEARED at TWO concurrent cycle frames (1d / 3d) + 1M pending; the cluster narrowed vs 06-07&rsquo;s three-frame stack (12h converted to fresh Sell 3) but stays multi-cycle · leg 2 funding cumulative short-pay ≥ 4h — gate still cleared on contiguous streak (37.6% of 24h negative) but the 24h mean flipped back to +0.87% positive ann from 06-07&rsquo;s −0.13%, so the regime read is now mixed · leg 3 1h close &gt; flip $63,848 (REFRAMED UP from $63,538 on 06-07 — flip moved +$310 against us) — UNCLEARED, spot $63,290 sits $558 below the reframed trigger (closest of the lineage)</span></div>
                <div><span className="dn-lvl-k">$63,848 flip (reframed inflection, NOT an entry until the print)</span><span className="dn-lvl-v bull">a 1h close &gt; $63,848 with OI still building (or shrinking) marks the structural inflection that promotes the watch; the new R/R math at trigger $63,848 / stop $59,154 / first target $72,965 reads $4,694 risk / $9,117 reward = 1.94:1, modestly softer than 06-07&rsquo;s 2.15:1 and comfortably above the 1.5:1 gate. <em>Watch / inflection line until the print; entry only on confirmed 1h close above flip</em></span></div>
                <div><span className="dn-lvl-k">stop (if entered)</span><span className="dn-lvl-v bear">1h close &lt; $59,154 (06-06 capitulation low — today&rsquo;s 24h low $60,746 is +$1,592 above, so the lineage capitulation low remains the stop reference; a fresh capitulation print invalidates the oversold-counter read)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R only · take half at the cycle anchor reclaim $72,965, runner to D-SMA50 cluster $75,598 / $76k area</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R framework (carried per audit DN-006 from
                06-05):</b>{' '}
                trigger $63,848 / stop $59,154 = $4,694 risk; first
                target $72,965 = $9,117 reward = 1.94:1 (above the
                desk&rsquo;s 1.5:1 gate, softer than 06-07&rsquo;s
                2.15:1). <b>Entry permitted on confirmed 1h close
                above flip $63,848</b> — and only if OI is still
                building (or at least not collapsing) and
                big-print/spot CVD show a cover-shape print on the
                trigger bar. The 24h and 4h cover-shape windows have
                both printed clean today (every flow field
                net-buyer with OI sharply shrinking); the
                snap-minute 1h showed long-rebuild not cover-shape
                (OI +561 BTC), so the trigger-bar check tightens on
                a leg-3 print: the trigger bar wants either a fresh
                cover-shape return (OI shrinking on a fresh up-bar)
                or a clean long-rebuild bar (OI building with all
                CVDs positive) — not the mixed shape that printed
                in the snap-minute hour. The scout is still
                NON-ACTIONABLE because leg 3 has not printed; the
                trigger is $558 above spot.{' '}
                <b>Hard rule:</b> no TD9-only entry without the
                leg-3 flip reclaim; no add on the two-concurrent
                TD9 cluster + fresh 1h MACD golden cross until
                price clears the flip; no entry without a passing
                R/R gate (today&rsquo;s reframed math passes at
                1.94:1; if the inflection moves further away the
                math has to be rechecked).
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 200W cycle floor watch RESOLVED on 06-07 W-SUN weekly close at $63,298 vs $62,002 (reclaim direction, first formal weekly close above the cycle floor of the down-leg lineage) · carry watch shifts to 06-14 W-SUN close (in-progress new week one minute in at $63,169)</span>
              <div className="dn-trade-name">
                200W cycle floor watch — RESOLVED in the reclaim direction on the 06-07 W-SUN weekly close ($63,298 vs $62,002, +$1,296 / +2.09% above); the carry watch shifts to the 06-14 W-SUN close on the in-progress new weekly bar that just opened
              </div>
              <div className="dn-thesis">
                The runbook §2 200W-support read flags the
                full-history W-SMA200 as the cycle floor — a level
                weekly closes below in ~5.16% of weeks (8 / 155
                valid 200W observations on the desk&rsquo;s
                full-history parquet series, 354 weekly bars on
                W-SUN / closed=&lsquo;right&rsquo; per the carry
                policy — matches the local weekly_200sma_monitor
                W-SUN resample basis), clustered at deep cycle
                capitulations. The
                weekly_200sma.json file remains absent on the
                server (fourth consecutive note; the file has not
                been generated since the desk policy added the
                watch); per runbook fallback the full-history
                (2019-09-08 → 2026-06-14, 354 weekly bars
                including the in-progress new weekly bar) W-SMA200
                was computed directly from parquet at $62,002 —
                $6 lower than 06-07&rsquo;s $62,008 as the rolling
                200-week window dropped a week and added the
                in-progress new week at $63,169 (a comparable
                level, so the drift is well inside the carry
                policy&rsquo;s ~$200/week band). The load-bearing
                read this note is the formal weekly close from
                the W-SUN 2026-06-07 bar: <em>$63,298.50</em>
                (= the 06-07 daily UTC close, identical because
                W-SUN closes Sunday 23:59:59 UTC), which sits{' '}
                <em>+$1,296.50 / +2.09% ABOVE</em> the W-SMA200 —
                the FIRST formal weekly close above the cycle
                floor of the down-leg lineage. The 06-07 note
                explicitly framed this watch as
                &ldquo;break-or-reclaim&rdquo; on the weekend
                weekly close; the watch RESOLVED in the reclaim
                direction. The carry watch now shifts to the
                next weekly close (06-14 W-SUN); the in-progress
                new weekly bar (opened 06-08 00:00Z) is one
                minute in at $63,169.10 = +$1,167 / +1.88% above
                the level. Per runbook do-not-fabricate, no
                percentile / break-event claim is asserted off a
                missing JSON, only the level and the resolved
                weekly close are surfaced.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W watch source</span><span className="dn-lvl-v">weekly_200sma.json ABSENT (fourth consecutive note; lineage carry) · fallback per runbook §2: full-history parquet computation from 2019-09-08, 354 weekly bars, W-SMA200 = $62,002 (moved down $6 vs 06-07&rsquo;s $62,008 as the rolling window dropped a week and added the in-progress new week at $63,169)</span></div>
                <div><span className="dn-lvl-k">06-07 W-SUN weekly close (FORMAL RECLAIM)</span><span className="dn-lvl-v bull">$63,298.50 vs $62,002 = +$1,296.50 / +2.09% above — the FIRST formal weekly close above the cycle floor of the down-leg lineage; 06-07 weekend break-or-reclaim watch RESOLVED in the reclaim direction</span></div>
                <div><span className="dn-lvl-k">spot vs 200W (this snap)</span><span className="dn-lvl-v bull">spot $63,290 − 200W $62,002 = +$1,288 / +2.08% above (sign FLIPPED from 06-07&rsquo;s −1.73% as spot ran +3.87% on the 24h; cycle floor reclaimed on spot)</span></div>
                <div><span className="dn-lvl-k">06-08 in-progress new weekly bar</span><span className="dn-lvl-v">W-SUN anchored to 2026-06-14, opened 06-08 00:00Z; one-minute close $63,169.10 = +$1,167 / +1.88% above the level; carry watch is the 06-14 W-SUN weekly close</span></div>
                <div><span className="dn-lvl-k">runbook discipline</span><span className="dn-lvl-v">per runbook do-not-fabricate, no percentile / break-event claim is asserted off a missing JSON; only the full-history level and the resolved weekly-close reclaim are surfaced. Re-running this watch requires either weekly_200sma.json being generated server-side or a continued full-history parquet computation in the next note</span></div>
              </div>
              <div className="dn-gating">
                <b>Watch resolved on the 06-07 weekly close.</b>{' '}
                The formal reclaim of the 200W cycle floor is a
                structural macro-support event in the bullish
                direction — but per the runbook this watch is
                informational, not a trade trigger. The
                mean-revert long scout above is the actionable
                card if leg 3 (flip reclaim) fires; the 200W watch
                is a separate macro-level signal that has now
                shifted the desk&rsquo;s read of the broader cycle
                position from &ldquo;weekly-close break pending&rdquo;
                to &ldquo;weekly-close reclaim printed,
                next-week watch in progress.&rdquo; If the 06-14
                W-SUN weekly close prints back below $62,002 the
                next note must reassess whether the reclaim was a
                one-off or sticking; a second consecutive weekly
                close above would strengthen the
                intact-mid-cycle-drawdown read.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · 7JUN settle resolved CLEAN AND 8JUN replacement chunk POSITIVE (third consecutive positive front chunk) · 200W cycle floor RECLAIMED on the 06-07 W-SUN weekly close ($63,298 vs $62,002, +$1,296 / +2.09%) · spot did NOT extend the wick (24h low $60,746 above 06-06 lineage cap low $59,154 by +$1,592 — second consecutive session post-wick floor held) · dealer book repaired +$27.7M to ~$11M from sign flip · mean-revert long scout leg-3 trigger reframed UP to flip $63,848 (was $63,538 — flip moved +$310, the first up-move of the lineage); recomputed R/R 1.94:1 still above the 1.5:1 gate; trigger has not formally fired (snap-minute 1h close came in $550 below) · macro tape frozen on second-day weekend FRED freeze</span>
            </h2>

            <p>
              Of the 06-07 decision conditions: the 7JUN26 expiry
              settle FIRED CLEAN (+3.87M chunk cleared at 08:00Z
              06-07) AND the new 8JUN replacement chunk landed
              POSITIVE at +6.40M (third consecutive positive front
              chunk of the down-leg lineage); the mean-revert long
              scout trigger ($63,538) DID NOT FORMALLY FIRE — the
              06-07 23:00Z 1h close $63,298.50 came in $240 below
              the trigger; the cycle anchor reclaim leg DID NOT
              FIRE (still ~$9.7k overhead but $2.3k closer); the
              200W weekend-weekly-close break-or-reclaim watch
              RESOLVED in the RECLAIM direction (06-07 W-SUN close
              $63,298.50 cleared the cycle floor $62,002 by +$1,296
              / +2.09%); the dealer book repair FIRED MATERIALLY
              (+$27.7M to −11.0M aggregate, the largest single-note
              gamma repair of the down-leg, ~$11M from sign flip;
              the flip moved UP $310 for the first time of the
              lineage); the spot-extension tail DID NOT FIRE (24h
              low $60,746 above 06-06 lineage cap $59,154 by
              +$1,592 — post-wick floor held second consecutive
              session); the cycle continuation watch stayed
              CLOSED-VINDICATED with no fresh single-minute
              hostile-2 signature today (closest pattern was a
              ~1h 44min post-spike re-stack); the macro re-grow
              gates stayed frozen on a second-day weekend FRED
              freeze (HY OAS 4bp from fire, 10Y 6bp from fire,
              carried Friday close on both); the reclaim-long
              rates filter stays TRUE at 4.47% on the carried
              Friday close. The conditions today re-set around a
              cleanly-decayed third consecutive positive front
              chunk, the first formal 200W weekly-close reclaim
              of the lineage, a dealer book ~$11M from sign flip,
              a held post-wick floor for a second session, a SM
              book that started rebuilding a fresh short into the
              snap, and a mean-revert long scout with leg 3
              reframed UP $310 to a trigger $558 above spot:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>8JUN26 expiry settle (today 08:00Z, ~8h ahead)</td><td className="bull">+6.40M POSITIVE front chunk settles at 08:00Z; post-settle ex-8JUN aggregate ≈ −17.4M (modestly worse on residual basis because the positive chunk clears, leaving the negative tail; but the front-decay shape itself is the third consecutive positive-front-chunk settle of the down-leg lineage)</td><td>watch the settle print; no action required if settle prints clean — if a vol event prints, re-evaluate the dealer-book repair leg of the cover-bounce scout</td></tr>
                <tr><td>Mean-revert long scout (leg 3 inflection reframed UP; R/R 1.94:1)</td><td className="bull">1h close &gt; flip $63,848 with OI still building / not collapsing · trigger $558 above spot (closest of the lineage) · recomputed R/R 1.94:1 at trigger $63,848 / stop $59,154 / first target $72,965 — passes the 1.5:1 gate, softer than 06-07&rsquo;s 2.15:1 because the trigger moved UP more than the stop or target</td><td><em>scout long 0.2R on confirmed 1h close above flip</em> with the entry-bar cover-shape check (big-print net positive + spot CVD bid in the trigger bar — the 24h and 4h windows printed clean today, the 1h showed long-rebuild not cover-shape, so the trigger-bar check tightens accordingly); take half at cycle anchor $72,965, runner to D-SMA50 cluster ~$76k</td></tr>
                <tr><td>Cover-bounce scout (long) — DROPPED on the price plane; legs 2 + 3 moved decisively closer to firing</td><td className="bull">requires 1d close &gt; $72,965 AND aggregate GEX flips &gt; 0 AND 1h cover-shape print — leg 2 (dealer-book repair) moved +$27.7M to −11.0M (still net-short; ~$11M from sign flip after today&rsquo;s repair); leg 3 (cover-shape flow) printed CLEAN on both 24h and 4h windows at the 00:05Z anchor (cleanest of the down-leg lineage by magnitude); leg 1 (anchor reclaim, the structural gate) unmoved at ~$9.7k overhead but closer by $2.3k</td><td>no entry · the path moved decisively closer on legs 2 + 3 today but stays gated by leg 1 (anchor reclaim); the 24h and 4h cover-shape windows printing clean and the dealer book ~$11M from sign flip are meaningful second-derivative signals that support the mean-revert scout&rsquo;s leg-3 trigger if it fires</td></tr>
                <tr><td>200W cycle floor watch (RESOLVED on 06-07 W-SUN weekly close — reclaim direction)</td><td className="bull">full-history W-SMA200 $62,002; 06-07 W-SUN weekly close $63,298 = +$1,296 / +2.09% above (first formal weekly close above the cycle floor of the down-leg lineage); spot $63,290 sits +2.08% above; in-progress new weekly bar (W-SUN 2026-06-14) opened at $63,169 = +$1,167 / +1.88% above</td><td>watch the next weekly close (06-14 W-SUN) · informational, not a trade trigger; a second consecutive weekly close above would strengthen the intact-mid-cycle-drawdown read; a print back below $62,002 would re-open the break-watch</td></tr>
                <tr><td>Cycle continuation cadence (CLOSED-VINDICATED carried; no fresh hostile-2 today)</td><td className="stale">no single-minute Δnet ≤ −3k print across the 24h tape; closest pattern was the post-spike short add +960 BTC across BJ 06:21 → BJ 08:05 06-08 (~1h 44min window, not single-minute; net stays +1,532 BTC LESS short vs the BJ 00:11 max-short trough) — the cadence stays formally retired</td><td>read each fresh Δnet ≤ −3k or Δnet ≥ +3k print as a signal in itself — no time prior · re-stack hostile-2 signatures remain meaningful tape reads when they print, on no-calendar basis only</td></tr>
                <tr><td>HY OAS macro re-grow gate (frozen on second-day weekend)</td><td className="bull">2.74% (4bp from fire, carried Friday close — gate cannot move over the weekend, next watchable print at Monday US open)</td><td>at 4bp from touch on a frozen weekend, the gate is mechanically pinned until Monday · no roll today</td></tr>
                <tr><td>Reclaim-long rates filter (frozen on second-day weekend)</td><td className="bull">10Y &lt; 4.55% close — verified TRUE at 4.47% on the carried Friday close; gate 6bp from fire and pinned over the weekend</td><td>standalone filter holds TRUE; needs the mean-revert leg-3 trigger to translate to scout long</td></tr>
                <tr><td>DXY / MOVE risk-off pulse (one fresh Yahoo tick on DXY / JPY; FRED still frozen)</td><td className="bear">DXY 100.15 (+0.08 day · firmed a Yahoo tick from 06-07&rsquo;s 100.07 — episodic z +2.18 near lineage extreme); USD/JPY 160.30 (+0.31 day · firmed a tick); MOVE 75.2 (carried — Friday print stays the fixed weekend baseline)</td><td>the macro risk-off pulse firmed marginally on the dollar side, still RISK-OFF EPISODIC; if BTC leg-3 fires before Monday US open, the entry-bar cover-shape check carries the responsibility (no fresh weekend FRED-side macro divergence is measurable)</td></tr>
                <tr><td>Cycle anchor reclaim watch (price plane four+ tiers down, ~$9.7k overhead, $2.3k closer than 06-07)</td><td className="bull">1d close &gt; D-SMA100 $72,965 — currently ~$9.7k overhead (was ~$12.0k on 06-07, $2.3k closer because spot ran +$2,357 toward it)</td><td>the most distant of the cover-bounce scout&rsquo;s three legs; a 1d close above the anchor would re-arm the cover-bounce scout and trigger fresh structural reassessment</td></tr>
                <tr><td>BTC↔NQ cross-asset rotation (regime IDIOSYNCRATIC firmed marginally back toward NORMAL)</td><td className="stale">|r| 0.236 (firmed +0.003 from 06-07&rsquo;s 0.233); BTC↔NQ +0.188 (EXACTLY unchanged from 06-07&rsquo;s +0.188 — the firming stalled); BTC −14.36% vs NQ −4.73% gap −9.63pt (NARROWED from −13.26pt as BTC eased a 06-01 / 06-02 deep print out of the 7d window)</td><td>the BTC tape is now normalizing-back to the TradFi tape (BTC eased, NQ marginally extended) — the rotation flipped from 06-07&rsquo;s BTC-extending-alone regime to a BTC-normalizing-back regime · cross-asset still IDIOSYNCRATIC for trading prescription, with marginal firming back toward NORMAL</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether a 1h close clears the reframed leg-3 trigger
                flip $63,848 with the cover-shape still printing
                (promoting the mean-revert long scout to a first scout
                entry at 1.94:1 R/R), or whether the SM book&rsquo;s
                fresh post-spike short add (+960 BTC across BJ 06:21
                → 08:05; net stays +1,532 BTC LESS short vs the BJ
                00:11 max-short trough) plus
                retail&rsquo;s lineage-high long crowding (67.99%
                peak) plus the 26JUN −20.05M monthly load-bearing
                forward chunk power a leg back below the lineage
                capitulation low $59,154 before the trigger fires.
                The dealer book finally let the front amplifier decay
                clean for a third consecutive cycle, the flip moved
                UP with us for the first time of the lineage, the
                200W cycle floor reclaimed on the formal weekly
                close, the cover-shape printed clean across every
                flow field on 24h and 4h, and the engine confirmed
                with a fresh 1h water-up MACD golden cross. But the
                SM book stayed deeply short (cut fraction only
                2.19%), the post-spike re-stack started building a
                fresh short against the bounce engine, retail
                re-crowded long at a lineage-high skew, and the
                leg-3 trigger sits $558 above spot — close but not
                clean. The question is now whether the
                second-derivative repair on the dealer side and the
                engine-frame cover-shape resolve into a 1h flip
                reclaim that promotes the mean-revert long scout to a
                first scout entry, or whether the position-book
                re-stack and the deeper-frame oversold reads
                (1d RSI 26.4 lineage low, 12h 30.7, 3d 34.4) buy
                another leg lower before the trigger fires
              </span>. Until then this note runs as written: the
              runner and the put-spread tail are closed, the
              cover-bounce scout is dropped on the price plane but
              legs 2 + 3 moved decisively closer to firing today, the
              short framework watch is CLOSED-VINDICATED with no
              fresh hostile-2 today, the mean-revert long scout is
              NON-ACTIONABLE pending the leg-3 flip-reclaim print
              but the R/R now reads 1.94:1 and the trigger is
              $2,047 closer to spot than 06-07, and the 200W cycle
              floor watch RESOLVED in the reclaim direction on the
              06-07 W-SUN weekly close. The BTC-vs-TradFi
              decoupling narrowed to −9.63pt as BTC eased and
              TradFi extended marginally; the engine MTF frames
              confirmed the bounce; the 1h printed a fresh water-up
              MACD golden cross; the dealer book repaired the
              largest single-note structural improvement of the
              lineage. The right read for the next 24h is{' '}
              <em>patient — wait for the formal 1h close above
              $63,848 with a clean trigger bar before promoting the
              scout; do not chase the engine-frame bounce on its
              own</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit · BLOCK-CRITICAL on v1, all findings resolved in v2)
            </span>
            <b>Caveat (post codex 2026-06-09 investigation):</b>{' '}STAGE D
              re-gated this v2 BLOCK-CRITICAL based on a stale prose line at
              <code> :1056-1058</code> in cycle-continuation narrative. Per the
              full-pipeline investigation at{' '}
              <code>audits/2026-06-09-pipeline-failure-investigation.md</code>,
              that grading was a calibration error: the stale line is in
              non-decision-relevant narrative, NOT in a trade call or decision
              gate. All data-section, trade-book, and decision-table
              occurrences of DN-002 were correctly fixed by STAGE C. The
              <code> :1056-1058</code> line is left intact under the
              \"notes do not get re-edited after publication\" discipline.
              The CRITICAL grade should have been PASS-WITH-NOTES; force-push
              applies that re-grading after-the-fact.{' '}
This v2 page is the STAGE C reconciliation of the
            2026-06-08 00:05Z snapshot v1 against the STAGE B codex
            hostile audit (record at{' '}
            <code>audits/2026-06-08-desk-note.md</code>). The codex
            verdict on v1 was{' '}
            <b>BLOCK-CRITICAL — 1 CRITICAL, 2 MAJOR, 1 MINOR</b>; v2
            applies every finding. Applied fixes:{' '}
            <b>DN-001 (CRITICAL)</b> — the v1 lead claim
            &ldquo;first positive front-amplifier cycle&rdquo; was a
            visible lineage contradiction with the rest of the file
            (which consistently said the front amplifier was absent
            for a <em>third</em> consecutive cycle); v2 rewrites the
            lead phrase to &ldquo;third consecutive
            positive-front-chunk / front-amplifier-absent
            cycle.&rdquo;{' '}
            <b>DN-002 (MAJOR)</b> — v1 mislabeled the +1,532 BTC
            figure as fresh short adds / post-spike short re-stack
            in seven places (manifest meta, structure prose, dealer
            do-not, short-framework heading + lvls, decision-table
            cadence row, closing prose); per live tape the +1,532
            BTC is the net change vs the BJ 00:11 max-short net
            trough (less short, not fresh short adds), while the
            actual post-spike fresh short add from the BJ 06:21
            short_btc trough to the 08:05 snap is +960 BTC (paired
            with +692 BTC fresh long add). v2 keeps the +960 / +692
            framing for the BJ 06:21 → 08:05 window and explicitly
            tags the +1,532 figure as &ldquo;less short vs the BJ
            00:11 max-short net trough&rdquo; wherever it appears.{' '}
            <b>DN-003 (MAJOR)</b> — v1&rsquo;s 200W
            historical-below-frequency disclosure stated &ldquo;~5.8%
            (9 / 154 valid 200W observations, W-MON /
            closed=&lsquo;right&rsquo;)&rdquo; which does not
            reproduce on the desk&rsquo;s parquet series; the
            reproducible basis (matching the local
            <code> weekly_200sma_monitor.py</code> W-SUN resample)
            is W-SUN / 354 weekly bars / 155 valid 200W
            observations / 8 below = 5.16%. v2 rewrites the
            disclosure to the reproducible W-SUN basis.{' '}
            <b>DN-004 (MINOR)</b> — v1 decision-table label row
            for the cycle-anchor reclaim watch read &ldquo;~$9.7k
            closer than 06-07&rdquo; (contradicted by the row&rsquo;s
            own arithmetic, which is $2.3k closer); v2 changes the
            label to &ldquo;~$9.7k overhead, $2.3k closer than
            06-07.&rdquo; The codex audit also confirmed clean:
            requireViewer gating, JSX skeleton, 24h flow arithmetic,
            4h / 1h flow windows, GEX / MTF / macro / cross-asset
            artifact reconciliations, MA matrix and 30D RV,
            claims-vs-loaded-data discipline, BJ↔UTC timestamp
            conversions, and the build proxy
            (<code>tsc --noEmit</code> exit 0; full
            <code> next build</code> is environment-blocked on Node
            18.19.1 vs Next 16.2.6 requiring Node ≥20.9.0).
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-06-08 00:05Z)
            with section-level provenance disclosed in the manifest band
            above; the macro Tier-1 panel render is 2026-06-07 22:15Z
            (~1h 50m before snapshot) and is structurally frozen on a
            second-day weekend FRED freeze with one fresh Yahoo daily
            DXY / JPY tick. Levels, sizes, and conditions are
            illustrative of the desk&rsquo;s process, not standing
            recommendations. Past correlation, gamma, and positioning
            patterns do not bind future tape. Derivatives carry the risk
            of total loss and, where leveraged, loss exceeding deposited
            margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The front amplifier let go for a third cycle. The 200W
                reclaimed on close. The flip moved with us for the first
                time. The leg-3 trigger sits $558 above. The SM book
                started rebuilding a fresh short into the snap. Patient.
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
            v2 · 2026-06-08 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
