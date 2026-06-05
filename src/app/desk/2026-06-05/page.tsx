import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-05 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-05',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-05' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260605() {
  await requireViewer('/desk/2026-06-05');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-05 · v2</span>
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
              <span className="dn-big">$63,738</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.96%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-05 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-05 00:05Z (snapshot pin row)</td>
                  <td className="dn-flag">
                    fresh · 1-min · snapshot pin row = 00:05Z; live file has
                    advanced past the pin by audit time · 5JUN26 0.3DTE −9.61M
                    settles at 08:00Z today (~7h 55m ahead of this snap)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-05 00:01Z scan (cited; non-recoverable at audit time)</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    cited 00:01Z scan is <em>4 min earlier</em> than the
                    00:05Z snapshot anchor · <em>audit note (DN-004):</em>
                    the 00:01Z scan was overwritten by the time of audit; only
                    the later 00:16Z scan (BJ 08:16 06-05) was loaded —
                    structural TD9 cluster across cycle frames was verified
                    against that 00:16Z artifact, but the table&rsquo;s
                    numerical close/RSI/cloud values below carry from the
                    original 00:01Z scan and are <em>framework-only</em> on
                    v2 promotion · in-progress bars · MTF snapshot archival
                    is an open lineage issue (carried) · multi-TF ⚡ TD9 BUY
                    now simultaneous across 8h / 12h / 1d (three cycle frames
                    at once); 3d / 1M carry TD8 → 9? pending (one more close
                    to confirm) — five cycle-frame TD prints clustered or
                    pending against this oversold
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-05 00:00Z snapshot</td>
                  <td className="dn-flag">
                    ~5 min stale vs snapshot anchor · Deribit idx $63,971 vs
                    live $63,738 ($233 above live) · 1,034 instruments (was
                    1,000 on 06-04; the 4JUN 0.3DTE −6.82M settled at 08:00Z
                    06-04 and a fresh near-dated chain has been listed for
                    7JUN / 8JUN) · 5JUN26 0.3DTE −9.61M is the next settle
                    (08:00Z 06-05, ~7h 55m ahead) — the 5JUN chunk weight has
                    decayed from −15.89M (1.3 DTE on the 06-04 read) to
                    −9.61M (0.3 DTE today), a $6.28M reduction in absolute
                    weight as the dealer hedge was worked off during the
                    intervening session
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-05 00:00Z
                  </td>
                  <td className="dn-flag">~5 min lag · 7d 1h bars · 22 assets · 167 rows · regime tag flipped from NORMAL → IDIOSYNCRATIC (mean |r| 0.215 vs 06-04&rsquo;s 0.251 — crossed below the 0.25 threshold)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-04 22:20Z render</td>
                  <td className="dn-flag">
                    ~1.75h render lag · <em>data-integrity FLAG</em>: FRED
                    Tier-1 remains mostly <em>fetch-failed</em> today (US 10Y
                    nominal, 10Y TIPS real, 5Y5Y BE, NFCI, Fed net liquidity,
                    US-JP 10Y spread, all Tier-3 inflation rows still
                    unavailable — second consecutive render with the rate
                    panel blind) · clean reads (deltas <em>vs 06-04 note</em>,
                    not the dashboard&rsquo;s own daily Δ column per audit
                    DN-005): HY OAS{' '}
                    <em>2.75% (+4bp vs 06-04&rsquo;s 2.71% — decisive
                    widening; on rounded values the credit gate at &gt; 2.78%
                    is 3bp to touch, &gt; 3bp to clear)</em>, MOVE 73.6 (+0.15
                    vs 06-04), DXY 99.43 (+0.21 vs 06-04 note; dashboard&rsquo;s
                    own daily Δ reads −0.10), USD/JPY 160.04 (flat vs 06-04
                    note; dashboard daily Δ +0.07), USD/CNY 6.7730 (+0.0113
                    vs 06-04 note, CNY softer; dashboard daily Δ +0.00) ·
                    rate-side gate / reclaim-long rates filter / Fed liq /
                    NFCI all <em>STALE-FROM-06-03</em>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-05 00:06Z (btcusdt_1m_2024..2026 subset by desk policy)</td>
                  <td className="dn-flag">
                    ~1 min fresher than snapshot anchor · MA source universe is
                    the 2024-2026 parquet subset (127 weekly bars), per the
                    06-02 audit DN-005 desk-policy decision carried forward ·
                    under this subset W-SMA150 / W-SMA200 are non-computable
                    (short of both windows); W-EMA150 / W-EMA200 print because
                    EMA seeds from available history and are reported as
                    seeded · offsets recomputed against live spot $63,738.00 ·
                    the 06-03 audit DN-006 dispositioned the live-pin
                    denominator as the lineage carry-forward; this note uses
                    the live pin
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W watch (weekly_200sma.json)</td>
                  <td className="dn-v-cell">NOT WRITTEN (file absent on server at audit time)</td>
                  <td className="dn-flag">
                    200W watch unavailable · fall back to the matrix value:
                    W-SMA200 non-computable on the 2024-2026 subset (127
                    weekly bars vs the 200 window); the related seeded
                    W-EMA200 prints at $73,603 and reads as a near-line
                    overhead at −13.40% · per runbook do-not-fabricate: no
                    break / reclaim / percentile claims sourced from a
                    missing JSON
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED monthly · IRLTLT01JPM156N</td>
                  <td className="dn-flag">stale 64d · monthly · do not treat as live</td>
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
              <span className="dn-v bull">+1.47% (off cap; deep relief)</span>
              <span className="dn-src">live · 24h mean +0.67% (was +7.00% on 06-04 · −6.33pt cooler day-on-day) · cap occupancy 0 / 1441 sampled rows (was 7.77% on 06-04 · the cap is empty for the second consecutive note and has cleared entirely from the lineage carry) · <em>denominator policy (per audit DN-008): the exact 24h live window has a duplicate timestamp at 06-04 14:39 BJ at the cb_cvd reset (lines 46081 and 46082); the page uses unique-first rows = 1441 unique minute stamps as the denominator throughout this note</em> · negative-funding (short-pay) minutes 514 / 1441 = 35.67% of the 24h window — the deepest short-pay regime of the lineage by far · 24h funding trough −3.14% ann @ 2026-06-04 11:54Z (BJ 19:54 06-04) · max +6.90% ann @ 2026-06-04 20:00Z (BJ 04:00 06-05); 66.55% of the 24h sat below +1% ann, 79.67% below +2% ann</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">+3.25% → +1.47% (−1.78pt, deep short-pay regime)</span>
              <span className="dn-src">range −3.14% / +6.90% · the longest single short-pay streak ran 448 min / 7.47h from 2026-06-04 10:21Z (BJ 18:21 06-04) → 2026-06-04 17:48Z (BJ 01:48 06-05) — the leverage gate is wide open, longs were paid by shorts for one-third of the 24h window; the ≥4h cumulative short-pay gate cleared by ~1.9× on a single contiguous run alone</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−5.80% (−6,073 BTC)</span>
              <span className="dn-src">live · OI dropped under the 100k handle for the first time of the lineage (now 98,713 BTC; 24h-ago 104,786) — the largest <em>note-anchor</em> 24h OI flush of the lineage by absolute size and percent (per audit DN-003: the live 1-min tape has a larger rolling 24h drop inside the lineage at 06-03 11:38 BJ → 06-04 11:38 BJ of −10,271 BTC / −9.30%; today&rsquo;s claim is anchor-to-anchor, not rolling-1m superlative) · SM long_btc −1,492, short_btc −1,959 — both sides shrank, with short cutting harder than long · the gross book is down ~3.5k BTC on the desk side, exchange-wide OI shrank ~6.1k, so non-SM books shed ~2.6k BTC across the 24h</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bull">66.62 / 33.38</span>
              <span className="dn-src">live_db `mkt_long_pct` · bled −2.63pt from the lineage peak (was 69.25 on 06-04 · 24h range 65.18 / 69.28 — the lineage retail-percentage peak 69.28% printed at the 24h window open at BJ 08:21 06-04 / UTC 00:21 06-04, then bled all day; first material de-crowding of the long side of the down-leg)</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−44.5k (net SHORT; both sides smaller)</span>
              <span className="dn-src">live · long 11.26k − short 55.73k · short_btc peaked 58,807 @ 2026-06-04 11:46Z (BJ 19:46 06-04) <em>inside the current 24h window</em>, still below the 06-03 lineage high 60,729 (per audit DN-001 correction: the 06-03 lineage high at 06-03 23:16 BJ / 15:16Z prints 60,728.55 — the current-window 58,807 is a 24h-window peak, not a fresh lineage extension), long_btc peaked 15,726 @ 2026-06-04 11:11Z (BJ 19:11 06-04) inside the window, still below the 06-03 lineage high 18,293 (per DN-001: 06-03 22:21 BJ / 14:21Z reads 18,292.50); SM net trough −45,399 @ 2026-06-04 12:31Z (BJ 20:31 06-04) — close to but not at the lineage trough (06-04&rsquo;s −46,686 still the deepest), and the snapshot has since bled +0.94k back toward less-short</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 06-04 note</span>
              <span className="dn-v">−44.9k → −44.5k (+467 net; long −1,492, short −1,959)</span>
              <span className="dn-src">|Δ|/prior_net = 1.04% (467/44,929) · net effectively flat but the BOOK shrank both sides — first two-sided de-grossing since 05-31 · the one-sided short-stacking pattern that ran 06-01 / 06-02 / 06-03 / 06-04 broke today; the relevant lineage signature is now &ldquo;net flat / both sides smaller&rdquo; (the 05-31 post-amplifier shape), not &ldquo;net deeper / short adds&rdquo;</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v bull">46.9% / 34.93%</span>
              <span className="dn-src">GEX median IV · 1,034 inst. (up from 1,000 on 06-04 · +34 instruments as fresh 7JUN / 8JUN near-dated chains listed) · IV cooled −2.0pt as price stopped extending (was 48.9% on 06-04) · 30D RV slipped −0.40pt to 34.93% (was 35.33% on 06-04) as the 06-04 daily Δ of just −0.41% printed inside a quieter day · IV/RV spread compressed to ~+11.97pt (was +13.6pt on 06-04 — a meaningful −1.6pt compression as IV cooled faster than RV)</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−4.17% (below; live spot ref)</span>
              <span className="dn-src">flip $66,509 (was $67,797 · dropped −$1,288) · vs live spot $63,738.00 (−4.17%; 63,738.00/66,509 − 1 = −4.166%) · vs GEX file Deribit idx $63,971 (−3.82%; 63,971/66,509 − 1 = −3.816%, matches the file&rsquo;s own dist-to-flip tile of −3.8%) — both refs negative, spot still meaningfully below the flip on both, but the gap has narrowed (was −5.08% / −5.00% on 06-04) as the flip dropped faster than spot — aggregate GEX eased to −39.5M (was −52.9M on 06-04, a +$13.4M structural improvement; widest below-flip print of the lineage was −5.08% / aggregate −52.9M on 06-04 — both metrics off the extreme today)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The down-leg stopped extending and the book started letting
                air out — the 24h spot change collapsed to −0.96% (vs
                −3.59% / −3.91% on 06-04 / 06-03), OI flushed −5.80% (the
                largest <em>note-anchor</em> 24h shrink of the lineage —
                see audit DN-003 caveat: a larger rolling 24h flush
                printed inside the live 1-min tape between 06-03 11:38 BJ
                and 06-04 11:38 BJ at −10,271 BTC / −9.30%, so the
                superlative is anchor-to-anchor only), funding sat negative
                for one-third of the window (the deepest short-pay regime
                of the lineage), and the dealer book eased
              </span>. Aggregate GEX went{' '}
              <span className="dn-tag bear">−52.9M</span> →{' '}
              <span className="dn-tag bear">−39.5M</span> (a +$13.4M
              structural improvement), the 0-γ flip dropped{' '}
              <span className="dn-tag">$67,797 → $66,509 (−$1,288)</span>,
              and spot{' '}
              <span className="dn-tag bear">$63,738 sits −4.17% below the
              flip</span> on live-spot math (vs −5.08% on 06-04 — the gap
              narrowed because the flip dropped faster than spot); the
              GEX file&rsquo;s own Deribit-index ref reads{' '}
              <span className="dn-tag bear">−3.82%</span> off its $63,971
              index, matching the file&rsquo;s −3.8% tile — both refs
              negative, both off the lineage extreme. Daily closes ran{' '}
              <span className="dn-tag bear">06-03 $64,118 / 06-04 $63,853</span>{' '}
              (the 06-04 close was just −$265 below 06-03 — the smallest
              close-to-close move since the down-leg started), with the
              in-progress 06-05 print at{' '}
              <span className="dn-tag bear">$63,751 (−$102 inside the 06-04
              close)</span> — three flat closes at the lows now, no recovery
              candle but no extension either. The 06-04 framework watch on
              the cycle continuation{' '}
              <span className="dn-em">fired a fifth consecutive time</span>:
              a fresh re-stack hostile-2 step printed at{' '}
              <span className="dn-tag bear">2026-06-04 07:41Z (BJ 15:41
              06-04, the same minute as the 06-03 print)</span> with Δnet{' '}
              <span className="dn-tag bear">−5,591</span> (Δlong −860,
              Δshort +4,730 same minute, SM net stepped{' '}
              <span className="dn-tag">−37,698 → −43,289</span> at spot{' '}
              <span className="dn-tag">$63,964</span>). The chain is now
              five prints deep: 05-30 06:01Z (Δnet −5,569) → 06-01 06:16Z
              (−3,137) → 06-02 06:46Z (−6,621) → 06-03 07:41Z (−7,177) →
              06-04 07:41Z (−5,591). The last two land in the same minute
              of the day to within rounding — a tighter calendar pin at
              UTC 07:41 / BJ 15:41 has emerged from the cadence&rsquo;s
              ashes, off-window by 41 min from the original BJ 13–15 read.
            </p>

            <p>
              BTC prints <span className="dn-tag">$63,738</span> live,{' '}
              <span className="dn-tag bear">−0.96%</span> on 24h — a wide
              intraday oscillation but a flat net day. The 24h range was
              <span className="dn-tag">{' '}$64,745.73 / $61,461.75</span>{' '}
              (high @ BJ 12:25 06-04 / UTC 04:25 06-04, low @ BJ 10:05
              06-04 / UTC 02:05 06-04 — a wick to $61.5k in the early-Asia
              session two hours after the prior snap, then a $3.3k snap-back
              into the day) — both extremes printed in the first ~4h of the
              24h window, after which the tape consolidated in a ~$63k–$64k
              band. The cycle anchor is{' '}
              <span className="dn-em">still ~$9.4k overhead</span>: D-SMA100
              $73,122 (−12.83%), with the closest four MAs (D-EMA20 $71,984
              / W-SMA20 $72,659 / D-SMA100 $73,122 / W-EMA200 seed $73,603)
              packed into a tight $1.6k reclaim cluster at the overhead. The
              full daily and weekly ladder is overhead, the same read as
              06-04 but the closest line set has tightened by another
              fractional pt as the cycle anchor itself drifted from $73,166
              to $73,122 (the rolling 100-day window picked up the 06-04
              close $63,853 at the front and dropped a higher value off the
              back).{' '}
              <span className="dn-em">
                The structural backdrop has improved on every leverage and
                dealer-side read — OI flushed, funding negative for 35.67%
                of the window, gamma eased $13.4M positive, IV cooled −2.0pt
                — but the price plane has not budged: spot sits at the lows,
                the cycle anchor remains lost, the cover-bounce path
                requires a +14.7% reclaim leg to fire. Today is the first
                day of the down-leg where the leverage and dealer book have
                BOTH decompressed without spot recovering — a deleveraging
                pause, not a turn.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · book shrank both sides for the first time since 05-31 · cycle continuation fired a FIFTH consecutive print at BJ 15:41 06-04 (same minute as 06-03)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position book has de-leveraged on both sides — the
                first two-sided shrink since 05-31, breaking the four-day
                one-sided short-stacking pattern
              </span>. SM net is{' '}
              <span className="dn-tag">−44,462</span> vs the 06-04
              note&rsquo;s −44,929 — that is{' '}
              <span className="dn-em">+1.04% less short and effectively
              flat</span> (|−44,462 − (−44,929)| / 44,929 = 1.04%). The
              components moved materially: long_btc{' '}
              <span className="dn-tag bear">12.75k → 11.26k (−1.49k)</span>{' '}
              and short_btc{' '}
              <span className="dn-tag bull">57.68k → 55.73k (−1.96k)</span>.
              Both sides shrank with the short side cutting harder than
              the long side trimmed, leaving net almost identical — a real
              two-sided de-grossing in the shape that the 05-31 post-amplifier
              note flagged. Across the 24h window: long_btc Δ{' '}
              <span className="dn-tag bear">−1,492</span>, short_btc Δ{' '}
              <span className="dn-tag bull">−1,959</span>, net Δ{' '}
              <span className="dn-tag bull">+467</span> (−1,492 − (−1,959)
              = +467). Inside the 24h the book ran wider extremes than the
              endpoints suggest: short_btc peaked{' '}
              <span className="dn-tag bear">58,807 @ 2026-06-04 11:46Z (BJ
              19:46 06-04)</span> <em>inside the current 24h window</em>,
              still below the 06-03 lineage high 60,729 (audit DN-001:
              the 06-03 23:16 BJ / 15:16Z print at 60,728.55 remains the
              lineage short-side peak; today&rsquo;s 58,807 is +2,078 vs
              the 06-04 note&rsquo;s 24h-window peak of 56,729 but is not
              a fresh lineage extension), then bled −3,082 into the snap.
              long_btc peaked{' '}
              <span className="dn-tag bear">15,726 @ 2026-06-04 11:11Z (BJ
              19:11 06-04)</span>, a 24h-window peak printed 35 min before
              the short peak — still below the 06-03 lineage high 18,293
              (DN-001: the 06-03 22:21 BJ / 14:21Z print at 18,292.50
              remains the lineage long peak), then bled −4,463 into the
              snap. SM net trough{' '}
              <span className="dn-tag bear">−45,399 @ 2026-06-04 12:31Z (BJ
              20:31 06-04)</span> — close to but not at the lineage trough
              (06-04&rsquo;s −46,686 still the deepest), and the book has
              since bled +0.94k back toward less-short.
            </p>

            <p>
              <span className="dn-signal">
                The cycle continuation framework fired a fifth consecutive
                step, and the latest two prints both landed at BJ 15:41 to
                within rounding
              </span>. The 24h window saw a clean re-stack hostile-2 print at{' '}
              <span className="dn-tag bear">2026-06-04 07:41Z (BJ 15:41
              06-04)</span> with spot{' '}
              <span className="dn-tag">$63,964</span>: long_btc Δ{' '}
              <span className="dn-tag bear">−860</span>, short_btc Δ{' '}
              <span className="dn-tag bear">+4,730</span> (in <em>one
              minute</em>), SM net stepped{' '}
              <span className="dn-tag">−37,698 → −43,289</span> (Δnet
              −5,591 — the second-largest single-minute Δ of the lineage
              after 06-03&rsquo;s −7,177). That step is the same
              second-tier signature — a re-stack hostile-2 (Δshort &gt; 0 +
              Δlong &lt; 0 same minute) — but it printed at BJ 15:41,
              <em> the exact same minute as the 06-03 print</em>, 41 min
              after the BJ 13–15 window closed. The five-print chain in
              order: 05-30 06:01Z (BJ 14:01 05-30, Δnet −5,569) → 06-01
              06:16Z (BJ 14:16 06-01, −3,137) → 06-02 06:46Z (BJ 14:46
              06-02, −6,621) → 06-03 07:41Z (BJ 15:41 06-03, −7,177) →
              06-04 07:41Z (BJ 15:41 06-04, −5,591).{' '}
              <span className="dn-em">
                The original BJ 13–15 cadence is dead, but a tighter
                calendar pin has emerged: the last two prints both landed
                at UTC 07:41 / BJ 15:41, 41 min after the original window
                closed. The 7-day cadence has not been re-confirmed — the
                three earlier prints landed earlier in the window — but
                the two-print streak at BJ 15:41 is meaningful enough to
                watch for a sixth print at the same minute today (UTC
                07:41 / BJ 15:41 06-05, ~7h 36m ahead of this snapshot)
              </span>. The cycle continuation itself remains the
              load-bearing call: five consecutive prints of the
              second-tier signature without a live add is unusual, and
              today&rsquo;s BJ 13–15 window itself (UTC 05:00–07:00 06-04)
              ran a small cover (Δnet +240 across the 2h window) — the
              window is quiet, the step lands 41 min after it.
            </p>

            <p>
              The leverage side is the loudest signal of regime change
              this note.{' '}
              <span className="dn-signal">
                Funding sat negative for 35.67% of the 24h window — the
                deepest short-pay regime of the lineage
              </span> (per audit DN-008: the exact 24h live window has a
              duplicate timestamp at 06-04 14:39 BJ at the cb_cvd reset
              point; this note adopts the <em>unique-first</em>
              duplicate-row policy throughout — 1441 unique minute stamps
              as the denominator, so 514 / 1441 = 35.67%): live{' '}
              <span className="dn-tag">+1.47% ann</span>, 24h range{' '}
              <span className="dn-tag">−3.14% / +6.90%</span> with
              the trough{' '}
              <span className="dn-tag bull">−3.14% ann @ 2026-06-04 11:54Z
              (BJ 19:54 06-04)</span> — for the first time of the lineage,
              longs were paid by shorts at a deep magnitude. 24h mean ann{' '}
              <span className="dn-tag">+0.67%</span> (vs 06-04&rsquo;s
              +7.00% — a −6.33pt cooling). Cap occupancy{' '}
              <span className="dn-tag bull">0 / 1441 sampled rows (0.0%)</span>{' '}
              (vs 7.77% on 06-04 — the cap is empty for the second
              consecutive note; the lineage-cap regime has cleared entirely);
              the longest single short-pay streak ran{' '}
              <span className="dn-tag bull">448 min / 7.47h</span> from
              2026-06-04 10:21Z (BJ 18:21 06-04) → 2026-06-04 17:48Z (BJ
              01:48 06-05), so the ≥4h cumulative short-pay gate cleared
              by ~1.9× on a single contiguous run alone. Minute deltas
              (unique-first policy){' '}
              <span className="dn-tag">471 up / 478 down / 491 flat</span>{' '}
              (1,440 minute-to-minute intervals; 1441 unique minute stamps
              = 1440 intervals + open row) — a balanced two-way book, not
              a one-way press. OI Δ{' '}
              <span className="dn-tag bull">−6,073 BTC (−5.80%)</span> over
              24h — <span className="dn-em">the largest <em>note-anchor</em>{' '}
              24h OI flush of the lineage by absolute and percent</span>{' '}
              (per audit DN-003: the live 1-min tape has a larger rolling
              24h drop at 06-03 11:38 BJ → 06-04 11:38 BJ of −10,271 BTC /
              −9.30%, so the claim is anchor-to-anchor only, not rolling
              over the full live window) (vs 06-04&rsquo;s −2.13% /
              −2,283 BTC). OI dropped under the 100k handle for
              the first time of the lineage (98,713 now vs 104,786 24h-ago,
              24h peak 104,786 @ window open, 24h low 98,640 @ BJ 07:50
              06-05 / UTC 23:50 06-04 — per audit DN-002 correction: the
              v1 cited BJ 15:50 06-05 was an 8h over-conversion that
              landed in the future relative to the 00:05Z snapshot). Retail{' '}
              <span className="dn-tag">mkt_long_pct 66.62%</span> from
              69.25% — a −2.63pt cool from the lineage peak, the first
              material de-crowding of the long side of the down-leg. Perp
              trades a{' '}
              <span className="dn-tag bear">−$73.03 discount</span> to
              spot at the snap (1h mean −$74.21, 4h mean −$69.44; 24h mean
              −$75.90, range −$281.65 / +$77.25 — basis briefly went
              POSITIVE into the early-evening BJ short squeeze around the
              06-04 15:41 step, the first premium print since 06-01). 1-min
              aggressor skew snap{' '}
              <span className="dn-tag bear">−25.0</span> (1h mean +2.3,
              range −56.3 / +49.7) — heavy sell-aggressor in the snap
              minute but the 1h average is balanced.{' '}
              <span className="dn-em">
                OI flushed at the largest scale of the lineage + funding
                negative for 35.67% of the window + retail bleeding off
                the crowded long peak + both SM sides smaller for the
                first time since 05-31: the leverage book is decompressing
                hard, the same shape that produced the 05-31
                post-amplifier flat-net / both-sides-smaller signal — but
                this time spot has not yet recovered alongside the
                deleveraging.
              </span>
            </p>

            <p>
              Windowed flow is <em>buyer-aware on the 4h bounce into snap
              with OI shrinking, but a quiet / offered 1h on the snapshot
              minute itself</em>.{' '}
              <span className="dn-em">
                Endpoint convention disclosure (per audit DN-009): the 1h /
                4h flow function used in v1 reads price / OI / spot CVD /
                futures CVD / big-print on the 61-min and 241-min start
                rows (07:04 → 08:05 BJ for 1h; 04:04 → 08:05 BJ for 4h),
                but taker-net came from an adjacent start row (07:03 →
                08:05 BJ for 1h; 04:03 → 08:05 BJ for 4h). The taker-net
                figures below are therefore one-minute off the rest of the
                fields they sit beside; the field is kept with the
                disclosure rather than removed because the magnitudes are
                directional and the one-minute offset does not change the
                read. Standardizing the flow-window function to a single
                endpoint convention is an open hygiene issue carried into
                the next note.
              </span>{' '}
              24h: price{' '}
              <span className="dn-tag bear">−0.96%</span>, OI{' '}
              <span className="dn-tag bull">−6,073 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −5,803</span>{' '}
              <span className="dn-em">(reset-adjusted across the 06-04
              06:39Z cb_cvd reset where the series jumped from −5,151.9 →
              −93.5; raw window Δ = −744 without the adjustment)</span>,
              futures CVD <span className="dn-tag bull">Δ +2,317</span>,
              big-print <span className="dn-tag bull">+190 BTC / 583
              prints</span>, taker-net{' '}
              <span className="dn-tag bear">−2,526</span> —{' '}
              <span className="dn-em">
                spot sold across the 24h (reset-adjusted spot CVD
                meaningfully bearish), futures bought, big-print net
                marginally positive, OI shrinking — a mixed-direction
                deleveraging shape rather than a clean cover-bounce
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bull">+0.41%</span>, OI{' '}
              <span className="dn-tag bull">−2,530 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +359</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −1,405</span>, big-print{' '}
              <span className="dn-tag bear">−710 BTC / 94 prints</span>,
              taker-net <span className="dn-tag bear">−1,408</span> —{' '}
              <em>spot bid into the bounce with OI shrinking, futures
              offered, big-print net seller — the 4h has the buyer-on-spot
              / seller-on-futures asymmetry that often precedes a
              short-cover squeeze, but no big-print bid to confirm</em>.
              1h: price <span className="dn-tag bear">−0.01%</span>, OI{' '}
              <span className="dn-tag bull">−561 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +280</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −529</span>, big-print{' '}
              <span className="dn-tag bear">−607 BTC / 48 prints</span>,
              taker-net <span className="dn-tag bear">−506</span> —{' '}
              <em>flat hold, OI still shrinking, spot bid / futures
              offered, big-print net seller — the asymmetry continues on
              the 1h, no fresh entry signal</em>. The 24h reset-adjusted
              spot CVD at −5,803 is the heaviest spot-sold print of the
              lineage and contradicts the 4h / 1h spot-bid read — the spot
              selling concentrated into the 06-04 morning capitulation
              wick to $61,461.75 (the 24h low) before the 4h reflex bounce
              filled the recovery; reading the windowed flow as a
              continuous shape is misleading on this tape.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · multi-TF ⚡ TD9 BUY simultaneous across 8h/12h/1d (3 cycle frames at once) + 3d/1M TD8 → 9? pending · slow frames still rolling but the oversold-counter signal is the densest of the lineage · cycle anchor lost</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map has a denser cluster of oversold-counter
                signals than any prior note of the lineage — three
                concurrent ⚡ TD9 BUYs on 8h / 12h / 1d at the same scan,
                with 3d and 1M both pending TD9 on one more close
              </span>. The 06-04 scan flagged ⚡ TD9 BUY on 8h / 12h / 1d
              simultaneously (the prior carry); today&rsquo;s 00:01Z scan
              keeps all three live (no advance / no expiry) and adds the
              pending 3d / 1M TD8 → 9? lines — five cycle frames now
              clustered or pending against this oversold. Slow frames have
              not joined the price recovery: the{' '}
              <span className="dn-tag bear">3d water-up death cross is at
              3 bars</span>, 12h carries a{' '}
              <span className="dn-tag bear">water-down death cross 17b</span>,
              8h <span className="dn-tag bear">water-down death cross 11b</span>,
              4h <span className="dn-tag bear">water-down death cross 22b</span>,
              1d in cloud below 4b ($73.9k). RSI is deeply oversold across
              the cycle frames: 8h{' '}
              <span className="dn-tag bull">15.5</span> (a single-digit-shy
              extreme), 1d <span className="dn-tag bull">18.3</span>, 12h{' '}
              <span className="dn-tag bull">19.7</span>, 4h{' '}
              <span className="dn-tag bull">28.4</span>, 3d{' '}
              <span className="dn-tag bull">32.3</span>, 1w 34.5 — every
              cycle frame is RSI &lt; 35. The engine frames are mixed: 1h
              RSI 46.7 (in cloud below, sell setup), 30m 51.9, 15m 54.0 —
              the engine has stabilized but the cycle frames are at
              oversold extremes that historically resolve in a counter-bounce.
              <span className="dn-em">
                {' '}Read straight: this is the densest oversold-counter
                cluster of the lineage — five cycle-frame TD prints
                clustered or pending — at a tape where the spot plane has
                not yet inflected. The setup is structurally textbook for
                a relief bounce, but the cycle anchor remains ~$9.4k
                overhead and a TD9-only entry without the third
                cover-bounce leg (a 1h reclaim above the ~$68k area) is
                premature; the mean-revert long scout from 06-03 stays
                gated by the third leg.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,765</td><td className="num">54.0</td><td className="neut">golden (water-dn) 2b</td><td className="bull">above ↓63.4k 2b</td><td>Sell 7</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">63,765</td><td className="num">51.9</td><td className="neut">golden (water-dn) 1b</td><td className="neut">in cloud 63.2k–64.4k 1b</td><td>Sell 2</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">63,765</td><td className="num">46.7</td><td className="neut">golden (water-dn) 12b</td><td className="bear">below ↑66.1k 91b</td><td>Sell 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">63,762</td><td className="num bull">28.4</td><td className="bear">death (water-dn) 22b</td><td className="bear">below ↑74.0k 61b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">63,756</td><td className="num bull">15.5</td><td className="bear">death (water-dn) 11b</td><td className="bear">below ↑76.3k 60b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr><td>12h</td><td className="num">63,765</td><td className="num bull">19.7</td><td className="bear">death (water-dn) 17b</td><td className="bear">below ↑77.3k 27b</td><td>⚡ TD9 BUY</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">63,762</td><td className="num bull">18.3</td><td className="neut">—</td><td className="bear">below ↑73.9k 4b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">63,760</td><td className="num bull">32.3</td><td className="neut">death (water-up) 3b</td><td className="bear">below ↑74.0k 1b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,765</td><td className="num">34.5</td><td className="bull">golden (water-dn) 7b</td><td className="bear">below ↑100.3k 18b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">63,762</td><td className="num">42.8</td><td className="neut">—</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (rolling
                    latest-file artifact; the cited scan is 4 min <em>earlier</em>{' '}
                    than the 00:05Z snapshot anchor; in-progress bars).{' '}
                    <em>Audit DN-004 disclosure:</em> at audit time the
                    rolling artifact had advanced to a 00:16Z (BJ 08:16
                    06-05) scan; the original 00:01Z scan was no longer
                    recoverable. The 00:16Z scan loaded at audit confirms
                    the structural TD9 cluster (8h / 12h / 1d ⚡ TD9 BUY
                    simultaneous remains live with 3d / 1M pending) and
                    keeps the cycle-frame RSI &lt; 35 read, but its
                    individual close / RSI / cloud-distance / 24h price /
                    qVol values differ from those tabled here (the loaded
                    00:16Z scan reads spot $63,668, 24h −0.99%, qVol
                    $27.13B, and a 15m TD print of Sell 8 → 9?). The
                    numerical rows below are therefore <em>framework-only</em>{' '}
                    on v2 promotion: structural lines (TD prints, MACD
                    cross direction, cloud orientation, divergence labels)
                    carry from the 00:01Z scan and are verified against
                    the 00:16Z scan; precise close / RSI / kumo-distance
                    numbers are the originally-cited 00:01Z values and
                    cannot be reproduced from a loaded artifact. The MTF
                    snapshot-archival hygiene gap is a carried lineage
                    open issue. Header alerts: <em>multi-TF ⚡ TD9 BUY
                    across 8h / 12h / 1d simultaneous</em>, <em>3d / 1M
                    TD8 → 9? one close pending</em>. Original 00:01Z
                    figures: scan spot $63,762, 24h −0.89%, H/L $64,740 /
                    $61,345, 24h qVol $27.27B (the heaviest qVol of the
                    lineage by far, confirming the early-Asia capitulation
                    wick to $61.5k transacted heavy volume). Closes are
                    in-progress bars; treat every value as provisional
                    until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms the same overhead read. Spot $63,738
              sits{' '}
              <span className="dn-tag bear">−12.83% below D-SMA100 $73,122</span>{' '}
              — the cycle anchor, the lowest-distance line of the daily
              ladder but still ~$9.4k away on the reclaim. The closest four
              MAs cluster into a tight $1.6k overhead band: D-EMA20
              <span className="dn-tag bear">{' '}$71,984 (−11.46%)</span>,
              W-SMA20 <span className="dn-tag bear">{' '}$72,659 (−12.28%)</span>,
              D-SMA100 <span className="dn-tag bear">{' '}$73,122 (−12.83%)</span>,
              W-EMA200 seed{' '}
              <span className="dn-tag bear">$73,603 (−13.40%)</span>. The
              rest in level order: D-SMA20{' '}
              <span className="dn-tag bear">$73,376 (−13.13%)</span> sits
              between D-SMA100 and W-EMA200,{' '}
              <span className="dn-tag bear">D-EMA50 $74,307 (−14.22%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $75,309 (−15.37%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $75,523 (−15.60%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $76,390 (−16.56%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $76,435 (−16.61%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $77,851 (−18.13%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 seed $78,037 (−18.32%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $78,789 (−19.10%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $80,301 (−20.63%)</span>.
              Far above and disused: W-EMA100 seed $82,836 (−23.06%),
              W-EMA50 seed $83,956 (−24.09%), W-SMA100 $88,409 (−27.91%),
              W-SMA50 $92,626 (−31.19%). The 200W watch is not available
              on the server this snap (the per-runbook
              `weekly_200sma.json` is absent); the matrix fallback shows
              W-SMA200 as non-computable on the 2024-2026 subset (127
              weekly bars vs the 200 window) and the seeded W-EMA200 at
              $73,603 (−13.40%) is the closest 200-week-related line — but
              per runbook do-not-fabricate, no break / reclaim /
              percentile claim is asserted off a missing JSON.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-05 00:06Z (close
                $63,750.60); offsets computed against live spot $63,738.00
                directly (per 06-03 audit DN-006 disposition: live-pin
                denominator carries forward; the parquet-adjacent close
                $63,750.60 is $12.60 above the live pin, so an offset
                against the parquet plane reads ~−0.02pt shallower — a
                rounding-noise gap today). Daily closes: 05-30 $73,857,
                05-31 $73,653, 06-01 $71,392 (first close below the cycle
                anchor), 06-02 $66,730 (deepest single-day close-to-close
                drop of the lineage at −$4,662 / −6.53%), 06-03 $64,118
                (a further −$2,612 / −3.91%), 06-04 $63,853 (the smallest
                close-to-close move since the down-leg started at −$265 /
                −0.41%), 06-05 in-progress $63,751 — four consecutive
                closes deeply below the cycle anchor, the last two
                essentially flat at the lows.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book EASED to net-short-gamma aggregate −39.5M (was −52.9M, a +$13.4M improvement) · flip dropped to $66,509 (spot −4.17% below; gap narrowed by 0.9pt vs 06-04) · the $65k wall fully cleared (was −19.25M, now −13.09M — eased −$6.16M as price spent the session below it) · $60k now the heaviest single wall at −20.86M (the crash-put zone has thickened further) · 5JUN −9.61M (0.3 DTE) the dominant near-dated negative — DECAYED from yesterday&rsquo;s −15.89M reading (a $6.28M hedge worked off during the press) · 5JUN settles in 7h 55m</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book eased a meaningful step from the lineage
                extreme, the $65k wall finally resolved, and the 5JUN
                amplifier chunk decayed −$6.28M as the dealer hedge was
                worked off during the press — but the $60k crash-put zone
                thickened further and is now the heaviest single wall on
                the strip
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bear">−39.5M / 1%</span> (was −52.9M
              on 06-04 — a +$13.4M structural improvement); the book is
              still net-short-gamma (amplifying) but the lineage-extreme
              −52.9M of 06-04 is off the table. The 0-γ flip moved{' '}
              <span className="dn-tag">$67,797 → $66,509 (−$1,288)</span>.
              Two dist-to-flip references (carried per 06-02 audit DN-007):
              live-spot reference{' '}
              <span className="dn-tag bear">−4.17%</span>{' '}
              (63,738.00 / 66,509 − 1 = −4.166%); GEX-file Deribit-index
              reference{' '}
              <span className="dn-tag bear">−3.82%</span> (63,971 / 66,509
              − 1 = −3.816%, matches the file&rsquo;s own dist-to-flip tile
              of −3.8%). Both refs negative, both off the 06-04 extreme
              (−5.08% / −5.00%) — a 0.9pt narrowing because the flip
              dropped faster than spot. The wall map rotated through $65k
              and concentrated at $60k:{' '}
              <span className="dn-tag bear">$60k −20.86M</span> (was
              −19.85M — the crash-put zone has thickened further and is
              now the heaviest single wall overall, $3.7k under live
              spot),{' '}
              <span className="dn-tag bear">$65k −13.09M</span> (was
              −19.25M on 06-04 — the 06-04 &ldquo;heaviest near wall&rdquo;
              eased −$6.16M as price spent the session below it; the gate
              partially resolved),{' '}
              <span className="dn-tag bull">$80k +11.66M</span> (heaviest
              positive, basically unchanged from +11.72M),{' '}
              <span className="dn-tag bear">$62k −10.40M</span> (was
              −7.92M — DEEPENED as price oscillated through the strike),{' '}
              <span className="dn-tag bear">$55k −6.99M</span> (was
              −5.46M — deepened, the crash-put corridor extended down),{' '}
              <span className="dn-tag bear">$64k −6.92M</span> (was
              −11.63M — eased materially, the at-spot wall mostly
              resolved),{' '}
              <span className="dn-tag bear">$63k −5.88M</span> (was
              −5.44M — basically flat),{' '}
              <span className="dn-tag bear">$50k −5.25M</span>,{' '}
              <span className="dn-tag bear">$58k −4.51M</span>,{' '}
              <span className="dn-tag bull">$82k +4.28M</span>. The
              negative cluster $50k–$65k now stacks to roughly{' '}
              <span className="dn-em">−73.9M of dealer amplification</span>{' '}
              (sum of the listed walls in the band: −5.25 − 6.99 − 4.51 −
              20.86 − 10.40 − 5.88 − 6.92 − 13.09 = −73.90M; vs 06-04&rsquo;s
              −84.7M comparable cluster — eased −$10.8M), with the $60k
              crash-put now the dominant overhead-down strike.{' '}
              <span className="dn-em">
                The structural amplification regime is meaningfully off the
                lineage extreme of 06-04, but the residual cluster between
                spot ($63.7k) and the $60k crash-put wall still totals
                ~−35M of fade-amplification on the downside; the upside
                positive overhead at $80k is ~$16.3k away — a +25.5% climb
                to reach the dampening regime
              </span>. 5JUN26 0.3DTE{' '}
              <span className="dn-tag bear">−9.61M</span> settles at the
              08:00Z print today (~7h 55m ahead of this snapshot); the
              post-settle ex-5JUN aggregate would be roughly −39.5M −
              (−9.61M) = −29.9M — a clean step away from the amplifier
              regime and consistent with the 06-04 forecast (the 06-04
              note projected post-5JUN-settle ≈ −30.2M; today lands within
              $0.3M of that). The 5JUN chunk itself decayed from −15.89M
              (1.3 DTE on the 06-04 read) to −9.61M (0.3 DTE today) — a
              $6.28M reduction in absolute weight as the dealer hedge was
              worked off during the intervening session, the first
              meaningful evidence that the press has partially resolved
              the front-contract gamma ahead of settle. Forward expiries:{' '}
              <span className="dn-tag bear">6JUN 1.3 −1.83M</span>,{' '}
              <span className="dn-tag bull">7JUN 2.3 +0.56M</span>,{' '}
              <span className="dn-tag bull">8JUN 3.3 +0.14M</span>,{' '}
              <span className="dn-tag bear">12JUN 7.3 −7.37M</span> (the
              next sizable negative — eased from 06-04&rsquo;s −8.01M),{' '}
              <span className="dn-tag bear">19JUN 14.3 −5.43M</span>,{' '}
              <span className="dn-tag bear">26JUN 21.3 −22.92M</span> (the
              monthly, still the structural heaviest forward chunk; basically
              unchanged from 06-04&rsquo;s −23.59M),{' '}
              <span className="dn-tag bull">31JUL 56.3 +3.31M</span> (was
              +2.78M — improved),{' '}
              <span className="dn-tag bull">28AUG 84.3 +1.17M</span> (was
              +0.74M),{' '}
              <span className="dn-tag bull">25SEP 112.3 +0.79M</span> (was
              +0.51M),{' '}
              <span className="dn-tag bull">25DEC 203.3 +3.43M</span> (was
              +3.29M),{' '}
              <span className="dn-tag bull">26MAR27 294.3 +0.39M</span>.
              Post-5JUN, the heaviest forward weight remains the 26JUN
              monthly (−22.92M, structural) and the 12JUN 7.3 (−7.37M,
              near-dated); neither is sized like the 29MAY / 5JUN front
              amplifiers were, and the long-dated tail (31JUL onward) is
              modestly net-positive.
            </p>

            <p>
              IV median across 1,034 instruments is{' '}
              <span className="dn-tag bull">46.9%</span> (down from 48.9%
              / 1,000 instruments on 06-04 — a −2.0pt vol cool as price
              stopped extending) against 30D close-to-close RV of{' '}
              <span className="dn-tag">34.93%</span> — chain-level
              richness <span className="dn-tag">~+11.97pt</span> (vs
              ~+13.6pt on 06-04 — a meaningful −1.6pt compression as IV
              cooled faster than RV). A chain-median across N instruments,{' '}
              <span className="dn-em">not</span> a tradable spread;
              expiry-/strike-level vega, skew and term structure remain
              not loaded; the vol read stays framework-only. 1,034
              instruments today vs 1,000 on 06-04 — basically flat chain
              breadth; the 4JUN 0.3DTE −6.82M cleared at 08:00Z 06-04
              and a fresh near-dated chain has been listed for 7JUN /
              8JUN, +34 net instruments. RV methodology: 30D close-to-close,
              logret.std × √365 × 100 on the last 30 daily log returns (=
              31 consecutive daily closes) anchored to parquet last bar
              2026-06-05 00:06Z; the underlying 31-close window slipped
              −0.40pt from 06-04 because the 06-04 −0.41% close came in
              quieter than the average daily ret in the window. For
              reference, last 29 returns / 30 closes reads 35.37%; the
              34.93% page value comes from 30 returns.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Tier-1 still mostly FETCH-FAILED (10Y / TIPS / 5Y5Y BE / NFCI / Fed liq / US-JP spread unavailable for the second consecutive render) — HY OAS WIDENED +4bp vs 06-04 to 2.75% (decisive widening; credit gate at &gt; 2.78% is 3bp to touch / &gt;3bp to clear on rounded values) · DXY 99.43 (+0.21 vs 06-04 note; dashboard daily Δ −0.10) · MOVE 73.6 (+0.15 vs 06-04) · BTC-vs-TradFi decoupling narrowed to −13.44pt (was −15.02pt) — BTC −13.42% vs NQ +0.02%</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape remains largely unavailable for the second
                consecutive render — most Tier-1 fetches failed again — but
                the partial reads that landed moved decisively: HY OAS
                widened +4bp to 2.75% in a single day, putting the credit
                re-grow gate only 3bp from fire (vs 7bp on 06-04)
              </span>. Dashboard render is 2026-06-04 22:20Z, ~1.75h before
              the snapshot. <em>Data-integrity flag</em>: US 10Y nominal,
              10Y TIPS real, 5Y5Y BE inflation, Chicago Fed NFCI, Fed net
              liquidity, US-JP 10Y spread, and all Tier-3 inflation rows
              remain <em>fetch-failed</em> on this render — the rate panel
              has been blind for two consecutive renders. The
              cross-reference for re-grow gates on rates, real-rates
              risk-off, and liquidity is{' '}
              <span className="dn-em">stale-from-06-03</span> on those
              lines (carried over the 06-04 flag, no fresh print this
              render). What DID carry: HY OAS{' '}
              <span className="dn-tag bear">2.75% (+4.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.08</span>, episodic z{' '}
              <span className="dn-tag bull">−0.64</span> — RISK-ON tag
              still, but the episodic z has decompressed meaningfully (was
              −1.50 on 06-04 → −0.64 today, a +0.86 move toward neutral);
              the re-grow gate (2.78%) is now <em>3bp to touch / &gt;3bp to
              clear on rounded values</em> (per audit DN-007: a strict
              &gt; 2.78% close requires more than just touching the rounded
              threshold; v1 wording &ldquo;single 1bp move&rdquo; was
              inaccurate — corrected to one strong session) — was 7bp on
              06-04, a decisive 4bp move toward fire in a single day, the
              first material widening since the lineage started.{' '}
              <em>Delta convention disclosure (per audit DN-005):</em> the
              page&rsquo;s DXY / USD/JPY / USD/CNY deltas below are{' '}
              <em>vs the 06-04 note</em>, not the dashboard&rsquo;s own
              daily Δ column; the dashboard&rsquo;s native Δ values are
              given inline for reference. MOVE bond vol{' '}
              <span className="dn-tag">73.6 (+0.15 vs 06-04)</span> —
              flat vs 06-04 note, still loose; DXY{' '}
              <span className="dn-tag bear">99.43 (+0.21 vs 06-04 note;
              dashboard daily Δ −0.10)</span>, episodic z{' '}
              <span className="dn-tag bear">+1.36</span> — firmer vs the
              prior note, episodic well above the +1.0 threshold; USD/JPY{' '}
              <span className="dn-tag">160.04 (flat vs 06-04 note;
              dashboard daily Δ +0.07)</span> (yen unchanged across the
              two notes); USD/CNY{' '}
              <span className="dn-tag bear">6.7730 (+0.0113 vs 06-04 note,
              CNY softer; dashboard daily Δ +0.00)</span>,
              episodic z <span className="dn-tag bull">−1.20</span> — still
              episodic loose. JGB 10Y stale 64d at 2.52% (the staleness
              count grew from 63d on 06-04 — the monthly print has not
              refreshed).{' '}
              <span className="dn-em">
                Net: HY OAS moved decisively toward the re-grow gate (now
                3bp from fire; +4bp in a single day is meaningful credit
                widening that translates to the put-spread tail watch); the
                rate-side gate, the reclaim-long rates filter, and the
                real-rates risk-off read are all FETCH-FAILED today (second
                consecutive render) and CANNOT be advanced or falsified
                from this render — they carry from 06-03 as last-known
                values pending the next clean render. The macro tape&rsquo;s
                credit channel is rotating risk-off (+4bp HY OAS widening
                + DXY +0.21 firmer vs the 06-04 note) — the first material macro contribution
                to the BTC down-leg of the lineage; prior macro reads were
                soft-supportive while BTC ran its own catalyst. The
                BTC-vs-TradFi decoupling narrowed to −13.44pt this print
                (BTC −13.42% vs NQ +0.02%) from −15.02pt on 06-04 — a
                +1.58pt closing of the gap, mostly because BTC stopped
                extending while NQ gave back +1.15pt; the decoupling read
                remains endogenous-to-crypto but the magnitude is easing
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
                <tr><td>US 10Y nominal</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">FETCH FAILED (2nd consecutive) · carry from 06-03 (4.47%, +2.0bp · gate 6bp from fire)</td></tr>
                <tr><td>10Y TIPS real</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">FETCH FAILED (2nd consecutive) · carry from 06-03 (2.07%)</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">FETCH FAILED (2nd consecutive) · carry from 06-03 (2.26%)</td></tr>
                <tr><td>HY OAS</td><td className="num bear">2.75%</td><td className="num bear">+4.0bp</td><td className="num bull">−1.08</td><td className="num bull">−0.64</td><td className="bear">loose still · 3bp to touch the re-grow gate / &gt;3bp to clear it on rounded values (widened +4bp vs 06-04 — decisive widening; DN-007 wording fix)</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">FETCH FAILED (2nd consecutive) · carry from 06-03 (−0.510, stale 12d)</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">73.6</td><td className="num">+0.15</td><td className="num">−0.26</td><td className="num">+0.03</td><td className="neut">loose · flat on the day</td></tr>
                <tr><td>DXY</td><td className="num bear">99.43</td><td className="num bear">+0.21 vs 06-04 note (dashboard daily Δ −0.10)</td><td className="num">+1.07</td><td className="num bear">+1.36</td><td className="bear">firmer vs prior note · episodic well above +1.0 · per DN-005 disclosure</td></tr>
                <tr><td>Fed net liquidity</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">FETCH FAILED (2nd consecutive) · carry from 06-03 ($5.872T, level unchanged)</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.04</td><td className="num">flat vs 06-04 note (dashboard daily Δ +0.07)</td><td className="num bear">+1.33</td><td className="num bear">+1.28</td><td className="bear">yen unchanged across the two notes · +0.42 since 05-31 · per DN-005 disclosure</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">FETCH FAILED (2nd consecutive) · carry from 06-03 (1.95%)</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7730</td><td className="num bear">+0.0113 vs 06-04 note (dashboard daily Δ +0.00)</td><td className="num bull">−1.80</td><td className="num bull">−1.20</td><td className="bull">no tag · loose · CNY softer vs the prior note · per DN-005 disclosure</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp (monthly · stale 64d)</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean · staleness count grew</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary
              00:00Z — <span className="dn-em">a 7-day rolling read, not
              today</span>). Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.215</span> (eased from
              06-04&rsquo;s 0.251 — crossed below the 0.25 threshold and
              the regime tag flipped from NORMAL → IDIOSYNCRATIC).
              BTC&rsquo;s listed ties weakened across every macro lead and
              the BTC↔NQ tie collapsed further: JP225{' '}
              <span className="dn-tag">+0.162</span> (now the strongest
              listed tie for BTC, replacing CL/BRENT/NQ — a striking
              rotation), NGAS{' '}
              <span className="dn-tag">+0.158</span>, PALL{' '}
              <span className="dn-tag">−0.141</span>, CL{' '}
              <span className="dn-tag">−0.140</span> (was −0.264 — fell
              ~−0.12), MSFT{' '}
              <span className="dn-tag">+0.125</span>, SP500{' '}
              <span className="dn-tag">+0.117</span> (was +0.143), SILVER{' '}
              <span className="dn-tag">+0.117</span>, BRENT{' '}
              <span className="dn-tag">−0.110</span> (was −0.248), META{' '}
              <span className="dn-tag">+0.096</span>, TSLA{' '}
              <span className="dn-tag">+0.095</span>, COPPER{' '}
              <span className="dn-tag">+0.095</span>, NQ{' '}
              <span className="dn-tag">+0.090</span>{' '}
              <span className="dn-em">(was +0.172 — fell to 12th rank,
              BELOW SP500/SILVER/MSFT for the first time of the lineage;
              the BTC↔NQ tie continues to collapse and the BTC↔macro tie
              has rotated to JP225 + NGAS as the strongest leads)</span>.
              7d performance:{' '}
              <span className="dn-tag bear">BTC −13.42%</span> (eased from
              06-04&rsquo;s −13.85% by +0.43pt — the 7d window now extends
              through the 06-04 close $63,853 and the front rolled past
              the deeper 05-29 day), NQ{' '}
              <span className="dn-tag bull">+0.02%</span> (vs +1.17% on
              06-04 — cooled −1.15pt to basically flat), SP500{' '}
              <span className="dn-tag bear">−0.02%</span> (vs −0.12%),
              JP225 <span className="dn-tag bull">+2.05%</span>, MSFT{' '}
              <span className="dn-tag bull">+0.09%</span> (cooled from
              +2.89%), NVDA{' '}
              <span className="dn-tag bull">+1.15%</span> (firmed), META{' '}
              <span className="dn-tag bear">−1.33%</span> (less bad than
              −2.35%), AAPL{' '}
              <span className="dn-tag bear">−0.21%</span> (flipped from
              +0.55%), GOOGL{' '}
              <span className="dn-tag bear">−4.79%</span> (less bad than
              −8.20%), AMZN{' '}
              <span className="dn-tag bear">−7.09%</span> (extended), TSLA{' '}
              <span className="dn-tag bear">−5.27%</span>. Metals soft:
              GOLD <span className="dn-tag bear">−0.74%</span> (slipped
              from +0.01%), SILVER{' '}
              <span className="dn-tag bear">−2.43%</span>, PLAT{' '}
              <span className="dn-tag bear">−1.71%</span>, PALL{' '}
              <span className="dn-tag bear">−4.47%</span>. Energy firmed
              further: CL{' '}
              <span className="dn-tag bull">+5.06%</span>, BRENT{' '}
              <span className="dn-tag bull">+3.14%</span>, NGAS{' '}
              <span className="dn-tag bull">+2.07%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine narrowed to
                ~−13.44pt (BTC −13.42% vs NQ +0.02%) from −15.02pt on
                06-04 — a +1.58pt closing of the gap, mostly because BTC
                stopped extending while NQ gave back +1.15pt. The
                decoupling read remains endogenous-to-crypto; with mean
                |r| at 0.215 and the regime tag now IDIOSYNCRATIC, BTC&rsquo;s
                listed ties to TradFi leaders (NQ, SP500, NVDA, MSFT,
                AAPL, AMZN) are all under +0.13 — the cross-asset signal
                is structurally quiet for the BTC tape. The strongest
                listed tie has rotated to JP225 / NGAS — a rotation that
                does not survive into BTC trading prescription
              </span>. JGB monthly 2.52% carries EXTREME RISK-OFF monthly
              tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · runner / put-spread tail / cover-bounce scout statuses unchanged · short framework watch escalated to CLOSED-VINDICATED (fifth consecutive structural vindication printed at BJ 15:41 06-04 — five prints without a live add is the audit-discipline threshold) · mean-revert long scout (framework watch) two of three promotion legs still cleared (multi-TF TD9 BUY confirmed + funding cumulative short-pay regime); 1h reclaim leg ~$68k area now ~$4k+ overhead (further than 06-04) · no fresh trades on this snap</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 06-04 framework watches printed cleanly again — the
                short framework watch fired a fifth consecutive
                structural vindication step (BJ 15:41 06-04, Δnet −5,591,
                same minute as the 06-03 print), and the multi-TF TD9 BUY
                stack now carries 8h / 12h / 1d simultaneous with 3d / 1M
                pending — but per audit DN-001 discipline carried, the
                desk did not size on any of these signals
              </span>. The cover-bounce scout from 05-31 remains DROPPED —
              the cycle anchor is now ~$9.4k overhead and three legs are
              still required (anchor reclaim AND dealer-book repair AND
              cover-shape) with none progressing. The runner and the
              29MAY put-spread tail stay closed unchanged. The short
              framework watch has now been structurally vindicated FIVE
              consecutive times across 05-30 / 06-01 / 06-02 / 06-03 /
              06-04 — the 06-04 v2 audit-cycle recommended dispose to
              CLOSED-VINDICATED on the audit pass; this v1 escalates that
              card to CLOSED-VINDICATED on its own narrative without
              waiting for the audit to ratify, because five vindications
              past audit-recommended close without a live add is past the
              audit-discipline threshold. The mean-revert long scout from
              06-03 keeps two of three promotion legs cleared (the
              multi-TF TD9 BUY stack and funding cumulative short-pay
              regime are both DEEPENED versions of the 06-04 legs), but
              the third leg (1h reclaim above the ~$68k area) is now
              ~$4k+ overhead from spot $63.7k — further from fire than on
              06-04 — so the card stays NON-ACTIONABLE for another note.
              The trade book today is unchanged in terms of live size
              (none); the desk maintains discipline through a five-print
              short-side vindication chain, a multi-TF TD9 BUY oversold
              cluster, and the deepest leverage-relief regime of the
              lineage.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">closed · primary · runner ladder complete · closed on 29MAY 08:00Z expiry settle (unchanged status carried from 06-04)</span>
              <div className="dn-trade-name">
                Flip-extend short — closed on 29MAY 08:00Z expiry settle (unchanged from 06-04)
              </div>
              <div className="dn-thesis">
                Status unchanged. The retrospective read continues to
                vindicate the close: 05-30 / 05-31 daily closes ($73,857
                / $73,653) marked the two-day post-amplifier bounce, then
                06-01 broke ($71,392), 06-02 dumped (−6.53%), 06-03
                extended (−3.91%), 06-04 nearly flat (−0.41% at $63,853),
                and the in-progress 06-05 print $63,751 is essentially
                unchanged from the 06-04 close. The down-leg has stopped
                extending day-over-day for the first time. The re-entry
                path remains a fresh structural setup, not a roll.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (amplifier settle) · no residual position · unchanged from 06-04</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">do not chase a re-entry short into the deepest short-pay regime of the lineage and the densest multi-TF TD9 BUY cluster of the lineage with the cycle continuation framework now CLOSED-VINDICATED · the short-side framework is structurally complete on this leg</span></div>
              </div>
              <div className="dn-gating">
                <b>Trade closed.</b> The audit-cycle discipline holds:
                no roll, no average, no late-tier add.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">DROPPED · scout · cycle anchor lost three+ tiers down · ~$9.4k overhead, no progress on any leg</span>
              <div className="dn-trade-name">
                Cover-bounce scout — DROPPED unchanged (anchor reclaim is now ~$9.4k overhead on close)
              </div>
              <div className="dn-thesis">
                Status unchanged from 06-04. The cycle anchor remains
                lost and the overhead band sits ~$9.4k on close (D-SMA100
                $73,122 vs in-progress 06-05 close $63,751); the three
                legs of the cover-bounce path (anchor reclaim AND
                dealer-book repair AND cover-shape flow) all remain
                un-progressed on the price plane, though the dealer-book
                repair leg has improved structurally (gamma eased
                +$13.4M, flip dropped, IV cooled −2.0pt). A long
                re-entry on the cover-bounce path requires a structural
                inflection on the price plane that this note does not
                see; the structural-repair shape is the right framework
                read but not a triggering condition.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout status</span><span className="dn-lvl-v">DROPPED (unchanged) · cycle anchor lost three+ tiers down · spot now ~$9.4k below the recomputed D-SMA100 $73,122 (cycle anchor itself bled −$44 lower as the rolling window incorporated the 06-04 close)</span></div>
                <div><span className="dn-lvl-k">re-entry threshold (carried; price plane not progressing)</span><span className="dn-lvl-v bull">1d close &gt; D-SMA100 $73,122 AND aggregate GEX flips back &gt; 0 AND 1h cover-shape print (OI shrinking + spot CVD bid + SM short_btc bleeds) — three legs, all required; the OI-shrinking and short_btc-bleeds elements PRINTED today (OI −5.80% 24h, short_btc −1.96k 24h-on-24h) but the anchor reclaim and GEX positive remain ~$9.4k / ~$30M of structural distance away</span></div>
                <div><span className="dn-lvl-k">no long entry here</span><span className="dn-lvl-v bear">do not buy the multi-TF TD9 BUY simultaneous print as a cover-bounce — this is the mean-revert scout setup below, not the cover-bounce setup; the cover-bounce path is gated by anchor reclaim regardless of how dense the oversold-counter cluster gets</span></div>
              </div>
              <div className="dn-gating">
                <b>Trade dropped (unchanged).</b> The mean-revert long
                scout below is the separate setup keyed to oversold-reversal
                exhaustion; the cover-bounce path is gated by anchor
                reclaim.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">CLOSED-VINDICATED · short scout · framework watch · escalated from NON-ACTIONABLE on this v1 narrative (fifth consecutive structural vindication; 06-04 v2 already recommended audit-pass dispose; this v1 ratifies before the STAGE B audit)</span>
              <div className="dn-trade-name">
                Anchor-break short scout — CLOSED-VINDICATED (five consecutive vindication prints across 05-30 / 06-01 / 06-02 / 06-03 / 06-04 without a live add; the framework call is complete)
              </div>
              <div className="dn-thesis">
                Shape B fired again at the 06-04 07:41Z step (Δnet
                −5,591 at spot $63,964 — Δlong −860, Δshort +4,730 in
                one minute, SM net stepped −37,698 → −43,289). The
                structural vindication chain is now five consecutive
                prints: 05-30 06:01Z BJ 14:01 Δnet −5,569 (audit DN-001
                / 05-31 corrected timestamp) → 06-01 06:16Z BJ 14:16
                Δnet −3,137 → 06-02 06:46Z BJ 14:46 Δnet −6,621 → 06-03
                07:41Z BJ 15:41 Δnet −7,177 (lineage extreme) → 06-04
                07:41Z BJ 15:41 Δnet −5,591 (today; same minute as
                06-03). The desk did not size on any of the five signals
                per audit DN-001 carried. The structural setup is now
                materially exhausted on the short side: the multi-TF TD9
                BUY stack is at three concurrent cycle frames (8h / 12h
                / 1d) with two more pending (3d / 1M), the 5JUN
                amplifier is ~8h ahead and its chunk decayed −$6.28M
                ahead of settle (the press partially resolved), funding
                ran negative for 35.67% of the 24h (the deepest
                short-pay regime of the lineage on the unique-first
                denominator per audit DN-008), OI flushed the largest
                <em>note-anchor</em> 24h shrink of the lineage (per audit
                DN-003 caveat — anchor-to-anchor only, not rolling), and
                the BTC↔NQ
                cross-asset tie collapsed to +0.090 (12th rank). Five
                vindications past the audit-recommended close without a
                live add is past the audit-discipline threshold; this v1
                escalates to CLOSED-VINDICATED on its own narrative,
                pending the STAGE B audit to ratify (or block, if it
                identifies a reason to keep the watch live).
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">06-04 Shape B trigger (FIRED, off-window by 41 min, same minute as 06-03)</span><span className="dn-lvl-v bear">Δnet −5,591 at 06-04 07:41Z (BJ 15:41 06-04) with spot $63,964; the two latest prints in the chain both landed at UTC 07:41 / BJ 15:41 — a tighter calendar pin has emerged 41 min after the original BJ 13–15 window closed, though it is only two prints and not yet a confirmed cadence</span></div>
                <div><span className="dn-lvl-k">structural ladder progress (from 06-04 reference)</span><span className="dn-lvl-v">$65k wall fully eased (06-04 reference $65k −19.25M → today $65k −13.09M — eased −$6.16M as the strike resolved through price spending the session below it) · $60k crash-put now the heaviest single wall at −20.86M (was −19.85M — DEEPENED further as price stayed near the strike) · 5JUN amplifier DECAYED to −9.61M (was −15.89M, a $6.28M reduction in absolute weight as the dealer hedge was worked off during the press, the first meaningful resolution of front-contract gamma ahead of settle); ex-5JUN forward aggregate (post-today&rsquo;s settle projection) ≈ −39.5M − (−9.61M) = −29.9M, still net negative but back inside a dampening-improving regime</span></div>
                <div><span className="dn-lvl-k">disposition</span><span className="dn-lvl-v">CLOSED-VINDICATED on this v1 narrative · five consecutive structural vindications (05-30 −5,569, 06-01 −3,137, 06-02 −6,621, 06-03 −7,177, 06-04 −5,591) without a live entry; the framework-watch language has carried past the 06-04 v2 audit recommendation; this v1 ratifies before the STAGE B audit · the desk will not chase a re-entry short into the densest oversold-counter cluster of the lineage and the deepest leverage-relief regime of the lineage</span></div>
                <div><span className="dn-lvl-k">amplifier window status</span><span className="dn-lvl-v">5JUN26 08:00Z settle (0.3 DTE today) · −9.61M today vs −15.89M on 06-04 (the press partially resolved the chunk, −$6.28M of hedge worked off); the chunk settles at the 08:00Z print ~7h 55m ahead of this snap; post-settle aggregate ≈ −29.9M (matches 06-04&rsquo;s forecast within $0.3M)</span></div>
              </div>
              <div className="dn-gating">
                <b>Status:</b> CLOSED-VINDICATED on this v1 narrative,
                pending STAGE B audit ratification. After five
                consecutive structural vindications across the cycle
                continuation chain — including the lineage-largest
                single-minute Δnet at 06-03 −7,177 and a fifth
                same-minute print today at BJ 15:41 — the framework call
                is complete on its own terms.{' '}
                <b>Hard rule:</b> no re-entry short on a press that has
                partially resolved the front-contract gamma and a tape
                where the five-print cycle continuation is closed; any
                future re-arm requires a fresh setup origin (not a roll
                of this card).
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">closed · macro tail · closed on 29MAY 08:00Z settle (unchanged status carried from 06-04; credit gate now 3bp from fire after a decisive +4bp HY OAS widening day; rate-side gate FETCH-FAILED for the second consecutive render)</span>
              <div className="dn-trade-name">
                Downside put-spread — closed on 29MAY 08:00Z settle; no roll (HY OAS gate now 3bp from fire after a decisive widening day; 10Y gate FETCH-FAILED second consecutive render, carry from 06-03)
              </div>
              <div className="dn-thesis">
                Status unchanged on position but the gate proximity
                changed materially. The macro re-grow gates moved
                decisively on credit (HY OAS 2.75%, gate now 3bp from
                fire — widened +4bp on the day, the first material
                widening since the lineage started) while the rate-side
                gate (10Y &gt; 4.53%) is FETCH-FAILED again today and
                carries from 06-03&rsquo;s 4.47% (6bp from fire) as a
                stale-as-of value. The reclaim-long rates filter (10Y
                &lt; 4.55%) carries from 06-03 as TRUE (last clean read
                4.47%) but is not freshly verified today. The credit gate
                is now structurally close enough to fire that the
                framework should re-arm on one strong session (per audit
                DN-007 wording correction: on the rounded values 2.75 →
                2.78 is 3bp to touch and &gt;3bp to clear the strict gate;
                the v1 phrase &ldquo;single 1bp move&rdquo; was inaccurate
                — corrected); but no fresh hedge today because the BTC-internal
                cycle ladder break has done the structural work and the
                front-contract gamma is decaying off the strip — adding
                a downside hedge against this tape inverts the audit
                discipline.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (Deribit 29MAY settle) · no residual position · no roll · unchanged on position from 06-04</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (next Tier-1 print)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.75%, 3bp to fire — narrowed from 7bp on 06-04, the credit gate is structurally close enough to fire on a single session move) OR 10Y &gt; 4.53% close (FETCH-FAILED today, carry from 06-03 4.47%, 6bp to fire as last-known)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — FETCH-FAILED today, carry from 06-03 as TRUE at last-known 4.47%; not freshly verified this render</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the HY OAS widening of +4bp on the day
                is the first material macro contribution to the BTC
                down-leg (prior macro reads were soft-supportive). At
                3bp from fire, the gate is one session away — the
                next clean macro render should be watched closely. No
                roll today because the BTC-internal structural read
                (front-contract gamma decay + cycle continuation
                CLOSED-VINDICATED + multi-TF TD9 BUY cluster + deepest
                short-pay regime) cuts the other way; a fresh downside
                hedge would be a counter-discipline add against the
                framework reads.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · framework watch · NON-ACTIONABLE · two of three promotion legs still cleared (multi-TF TD9 BUY DEEPENED + funding cumulative short-pay regime DEEPER); third leg (1h reclaim ~$68k area) now ~$4k+ overhead — further from fire than on 06-04 · DEFERRED for one more note</span>
              <div className="dn-trade-name">
                Mean-revert long scout — framework watch, two of three promotion legs cleared (oversold cluster + short-pay regime both deepened); third leg (1h reclaim ~$68k area) now further overhead from spot $63.7k
              </div>
              <div className="dn-thesis">
                The mean-revert long scout&rsquo;s three promotion legs
                are: (1) multi-TF TD9 BUY confirmed on a cycle frame —
                today DEEPENED to three concurrent cycle frames (8h /
                12h / 1d) with two more pending (3d / 1M TD8 → 9? on one
                close), the densest oversold cluster of the lineage; (2)
                funding cumulative short-pay regime ≥ 4h — today
                DEEPENED to a 7.47h single contiguous negative streak
                (cumulative 35.67% of the 24h was negative); (3) 1h
                reclaim above the ~$68k area as the structural inflection
                on the price plane. Two of three legs are still cleared
                — both DEEPENED versions of the 06-04 reads — but the
                third leg has gotten harder, not easier: spot $63.7k vs
                ~$68k = ~$4.3k of price to fire, further than 06-04&rsquo;s
                ~$4k overhead. The scout stays NON-ACTIONABLE because
                the third leg is the structural inflection that converts
                the oversold-counter setup into a tradable cover-bounce;
                without it, a TD9-only entry into a tape where the cycle
                anchor sits ~$9.4k overhead is a bottom-fishing chase,
                not a structural read.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">promotion gates (2 of 3 cleared, third unchanged)</span><span className="dn-lvl-v bull">leg 1 multi-TF TD9 BUY — CLEARED at three concurrent cycle frames (8h / 12h / 1d) + two pending (3d / 1M); the densest oversold cluster of the lineage · leg 2 funding cumulative short-pay ≥ 4h — CLEARED by a wide margin (7.47h single contiguous negative streak; 35.67% of 24h negative) · leg 3 1h close &gt; $68,000 area — UNCLEARED, spot $63,738 sits ~$4.3k below the trigger (further than 06-04&rsquo;s ~$4k overhead)</span></div>
                <div><span className="dn-lvl-k">$68,000 area (watch / inflection line, NOT an entry — per audit DN-006)</span><span className="dn-lvl-v bull">a 1h close &gt; $68,000 with OI still shrinking marks the structural inflection that promotes the watch — but at the $68k trigger / $61,461 stop / $73,122 first target combination, R/R reads 0.78:1 (below the desk&rsquo;s 1.5:1 gate). <em>Do not enter on this trigger.</em> Reassess R/R if leg 3 fires: a fresh inflection line closer to spot, or a tighter stop print, can give an executable R/R; until then the &ldquo;scout long 0.2R&rdquo; phrasing carried in v1 is corrected to <em>watch only</em> — the trigger must move closer to spot (or spot closer to trigger) before this card becomes structurally tradable</span></div>
                <div><span className="dn-lvl-k">stop (if entered)</span><span className="dn-lvl-v bear">1h close &lt; $61,461 (24h capitulation low — a fresh capitulation print invalidates the oversold-counter read)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R only · take half at the cycle anchor reclaim, runner to D-SMA50 cluster</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R framework (per audit DN-006):</b> if leg 3 fires at
                $68,000 with a stop at $61,461 = ~$6,539 risk; first
                target $73,122 = ~$5,122 reward = 0.78:1 (below the
                desk&rsquo;s 1.5:1 gate). <b>Do not enter on the $68k
                trigger as written</b> — $68,000 is a watch / inflection
                line, not an actionable entry; the v1 wording &ldquo;scout
                long 0.2R&rdquo; contradicted the R/R gate and is
                corrected here. The scout is NON-ACTIONABLE not just
                because leg 3 hasn&rsquo;t fired but because at current
                levels the R/R doesn&rsquo;t pencil even if it does — the
                leg-3 inflection must move closer to spot (or spot closer
                to the inflection), or the stop must tighten, before this
                scout becomes structurally tradable. <em>Reassess R/R if
                leg 3 fires:</em> only enter if the recomputed
                stop / first-target pair gives at least 1.5:1; otherwise
                let it pass.{' '}
                <b>Hard rule:</b> no TD9-only entry without the leg-3
                reclaim; no add on a TD9 cluster that hasn&rsquo;t been
                confirmed by price action; the oversold-counter setup is
                a watch, not a trigger; and even on leg-3 confirmation,
                no entry without a passing R/R gate.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the down-leg paused without recovering · cycle continuation CLOSED-VINDICATED on five prints · leverage book deepest decompression of the lineage · cover-bounce scout still dropped · mean-revert long scout still gated by the 1h reclaim leg</span>
            </h2>

            <p>
              Of the 06-04 decision conditions: the 4JUN26 expiry settle
              FIRED clean (−6.82M chunk cleared at 08:00Z 06-04); the
              5JUN amplifier window status DEEPENED ahead of resolution
              (−15.89M → −9.61M, a $6.28M front-contract gamma decay
              ahead of today&rsquo;s 08:00Z settle); the cycle-step Shape
              B FIRED again at BJ 15:41 06-04 (the fifth consecutive
              print; same minute as 06-03 — the tighter calendar pin at
              UTC 07:41 / BJ 15:41 emerging); the 12h MACD water-down
              death-cross condition cleared (now 17b); the multi-TF TD9
              BUY simultaneous condition DEEPENED to three concurrent
              cycle frames (8h / 12h / 1d) with 3d / 1M pending; the
              cycle anchor reclaim condition DID NOT FIRE; the macro
              re-grow gates moved materially toward fire on credit (HY
              OAS +4bp to 2.75%, gate 3bp away); the reclaim-long rates
              filter FETCH-FAILED for the second consecutive render. The
              short framework watch has escalated from NON-ACTIONABLE to
              CLOSED-VINDICATED on this v1 narrative — the cycle
              continuation framework call is complete on its own terms
              after five vindications. The conditions today re-set
              around a deleveraging-without-recovery tape, a structurally
              improving but still negative dealer book, a densest-of-lineage
              oversold-counter cluster, and a cover-bounce scout still
              gated by anchor reclaim:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>5JUN26 expiry settle (today 08:00Z, ~7h 55m ahead)</td><td>−9.61M chunk settles at 08:00Z; post-settle aggregate ≈ −29.9M (forecast matches 06-04 within $0.3M); a clean settle without a vol event resolves the front amplifier and the dampening-improving regime continues</td><td>watch the settle print; no action required if settle prints clean — if a vol event prints in the settle window, re-evaluate the cover-bounce scout&rsquo;s dealer-book repair leg</td></tr>
                <tr><td>Mean-revert long scout (leg 3 inflection, NOT an entry — per audit DN-006)</td><td className="bull">1h close &gt; $68,000 with OI still shrinking · watch / inflection line only</td><td><em>do not enter on $68k as written;</em> the R/R at $68k trigger / $61,461 stop / $73,122 first target = 0.78:1 (below the desk&rsquo;s 1.5:1 gate); the v1 &ldquo;scout long 0.2R&rdquo; phrasing contradicted the R/R gate and is corrected here · reassess R/R if leg 3 fires, only enter if recomputed pairs give ≥ 1.5:1, otherwise let the print pass</td></tr>
                <tr><td>Cover-bounce scout (long) — DROPPED (unchanged)</td><td className="bear">requires 1d close &gt; $73,122 AND aggregate GEX flips &gt; 0 AND 1h cover-shape print — three legs, the price-plane leg is ~$9.4k overhead</td><td>no entry · the OI-shrinking and short_btc-bleeds elements have printed in the 24h window but the anchor reclaim and GEX positive remain structurally distant</td></tr>
                <tr><td>Sixth-print cycle continuation watch (BJ 15:41 pin)</td><td className="bear">the latest two prints both landed at UTC 07:41 / BJ 15:41 — a tighter calendar pin from the original BJ 13–15 cadence; watch for a sixth print at UTC 07:41 / BJ 15:41 06-05 (~7h 36m ahead of this snap)</td><td>a sixth print at BJ 15:41 would establish a three-print streak at the same minute (structurally meaningful) but the short framework watch is now CLOSED-VINDICATED — no new short add even on confirmation; the watch is informational</td></tr>
                <tr><td>HY OAS macro re-grow gate</td><td className="bear">2.75% (3bp to touch the gate 2.78% / &gt;3bp to clear it on rounded values per audit DN-007 wording fix; widened +4bp vs 06-04 note — the first material credit widening since the lineage started)</td><td>at 3bp from touch, the gate is one strong session away (not a single 1bp move — DN-007 correction); the next clean macro render should be watched closely · no roll today because the BTC-internal structural read cuts the other way and a fresh hedge inverts discipline; if the gate fires on a fresh clean render, re-evaluate a put-spread tail at 5JUN+7 / 12JUN forward DTE</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="stale">10Y &lt; 4.55% — FETCH-FAILED today (2nd consecutive), carry from 06-03 4.47% as TRUE last-known</td><td>standalone filter carries TRUE pending fresh print; needs the mean-revert leg-3 trigger to translate to scout long</td></tr>
                <tr><td>Cycle anchor reclaim watch (price plane inflection)</td><td className="bull">1d close &gt; D-SMA100 $73,122 — currently ~$9.4k overhead; the rolling 100-day anchor itself bled −$44 lower as the 06-04 close rolled into the window</td><td>the most distant of the cover-bounce scout&rsquo;s three legs; a 1d close above the anchor would re-arm the cover-bounce scout and trigger fresh structural reassessment · until then the anchor remains the load-bearing absent leg</td></tr>
                <tr><td>BTC↔NQ cross-asset rotation (regime IDIOSYNCRATIC)</td><td className="stale">|r| 0.215, BTC↔NQ +0.090 (12th rank, fell below SP500/MSFT/SILVER); strongest tie now JP225 +0.162</td><td>the BTC tape is structurally idiosyncratic in this 7d window — no TradFi cross-asset prescription holds; the macro contribution is via HY OAS / DXY through the put-spread tail framework, not via NQ price action</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the 5JUN 08:00Z settle resolves the front-contract
                amplifier cleanly (post-settle aggregate ≈ −29.9M, a
                further structural improvement) or whether a vol event
                during the settle window resurrects the amplification
                regime; secondarily, whether HY OAS widens through the
                2.78% re-grow gate on the next clean macro render (3bp
                from fire) and whether the multi-TF TD9 BUY cluster
                resolves into a 1h reclaim above the ~$68k area that
                promotes the mean-revert long scout. The cycle
                continuation framework is CLOSED-VINDICATED on five
                prints; the question is now whether the deleveraging
                resolves into a relief leg, or whether the dealer
                book&rsquo;s residual −29.9M post-settle and the −20.86M
                $60k crash-put zone pull spot down to a fresh capitulation
                print
              </span>. Until then this note runs as written: the runner
              and the put-spread tail are closed, the cover-bounce scout
              is dropped, the short framework watch is CLOSED-VINDICATED,
              the mean-revert long scout is NON-ACTIONABLE for the
              leg-3 reclaim, and the macro tape&rsquo;s credit channel
              has rotated risk-off for the first time. The BTC-vs-TradFi
              decoupling narrowed to −13.44pt as BTC stopped extending;
              the engine MTF frames are mixed but the cycle frames carry
              the densest oversold-counter cluster of the lineage; the
              dealer book eased $13.4M but is still net-short-gamma. The
              right read for the next 24h is{' '}
              <em>patient — watch the 5JUN settle resolution, watch the
              next clean macro render for HY OAS through the gate, watch
              for a 1h reclaim above $68k — three external prints that
              re-write the call</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit · findings recorded at audits/2026-06-05-desk-note.md)
            </span>
            <b>v2 status:</b> post codex hostile audit. The v1 EN was
            authored by STAGE A on the btc-fetcher server at the
            2026-06-05 00:05Z snapshot; Codex CLI ran a hostile-but-fair
            audit on v1 with xhigh effort and the arithmetic was
            recomputed against the loaded artifacts and live tape. The
            audit verdict on v1 was <b>BLOCK-CRITICAL</b> with{' '}
            <b>2 CRITICAL + 5 MAJOR + 2 MINOR</b> findings (DN-001 through
            DN-009). STAGE C applied every finding&rsquo;s suggested fix
            in place, then promoted the titleband, footer, and this trace
            block from v1 → v2. The full finding list, evidence, and
            arithmetic recomputations are in{' '}
            <code>audits/2026-06-05-desk-note.md</code>.{' '}
            <b>Applied fixes by finding:</b>{' '}
            <em>DN-001 CRITICAL</em> — false &ldquo;new lineage peak&rdquo;
            claims for both short_btc 58,807 and long_btc 15,726 reworded
            as current-24h-window peaks only; lineage shorts peak 60,729
            (06-03 23:16 BJ / 15:16Z) and longs peak 18,293 (06-03 22:21
            BJ / 14:21Z) preserved as the lineage references.{' '}
            <em>DN-002 CRITICAL</em> — impossible OI-low timestamp
            BJ 15:50 06-05 (which landed in the future relative to the
            00:05Z snapshot) corrected to BJ 07:50 06-05 / UTC 23:50 06-04,
            with the over-conversion explicitly disclosed.{' '}
            <em>DN-003 MAJOR</em> — overbroad &ldquo;largest 24h OI flush
            of the lineage&rdquo; qualified to <em>largest note-anchor 24h
            OI flush</em> across all three mentions (manifest, positioning
            paragraph, CLOSED-VINDICATED card); the rolling-1-min superlative
            counterexample (06-03 11:38 BJ → 06-04 11:38 BJ at −10,271 BTC /
            −9.30%) is cited inline.{' '}
            <em>DN-004 MAJOR</em> — MTF source-pinnability gap disclosed:
            the cited 00:01Z scan was overwritten by audit time and only
            the 00:16Z (BJ 08:16 06-05) scan was loaded; the structural
            TD9 cluster across 8h / 12h / 1d with 3d / 1M pending is
            verified against the loaded 00:16Z scan, but the numerical
            close / RSI / cloud / 24h-price / qVol values tabled here are
            the originally-cited 00:01Z values and are <em>framework-only</em>{' '}
            on v2 promotion; MTF snapshot archival is a carried lineage
            open issue.{' '}
            <em>DN-005 MAJOR</em> — macro DXY / USD/JPY / USD/CNY deltas
            relabeled as <em>vs 06-04 note</em> rather than &ldquo;day&rdquo;
            moves, with the dashboard&rsquo;s own daily Δ column cited
            inline for reference (DXY Δ −0.10, USD/JPY Δ +0.07,
            USD/CNY Δ +0.00) in the manifest band, the macro paragraph,
            and the macro table.{' '}
            <em>DN-006 MAJOR</em> — mean-revert long scout entry contradiction
            resolved: $68,000 reclassified from an entry trigger to a
            <em> watch / inflection line</em>; the v1 wording &ldquo;scout
            long 0.2R&rdquo; on the $68k trigger has been removed because
            the R/R at $68k / $61,461 / $73,122 is 0.78:1, below the
            desk&rsquo;s 1.5:1 gate. The corrected disposition is{' '}
            <em>do not enter on $68k as written; reassess R/R only if leg
            3 fires</em>, and only execute if the recomputed pairs give
            ≥ 1.5:1.{' '}
            <em>DN-007 MAJOR</em> — HY OAS re-grow proximity wording
            corrected: &ldquo;single 1bp move&rdquo; replaced with{' '}
            <em>3bp to touch / &gt;3bp to clear on rounded values</em>{' '}
            (and described as one strong session) across the macro
            paragraph, the put-spread tail card, and the decision-conditions
            table.{' '}
            <em>DN-008 MINOR</em> — funding denominator policy disclosed:
            the exact 24h live window contains a duplicate timestamp at
            06-04 14:39 BJ at the cb_cvd reset (lines 46081 and 46082);
            the note adopts the unique-first row policy throughout, with
            denominators normalized — 514 / 1441 = 35.67% (was v1 35.64%),
            below +1% 66.55%, below +2% 79.67% (was v1 80.01%), minute
            deltas 471 up / 478 down / 491 flat (was v1 472 / 477 / 491).{' '}
            <em>DN-009 MINOR</em> — 1h / 4h windowed-flow endpoint
            convention divergence disclosed: most fields use the 61-min /
            241-min start row (07:04 → 08:05 BJ for 1h; 04:04 → 08:05 BJ
            for 4h), but taker-net came from an adjacent 60-min / 240-min
            start (07:03 / 04:03 → 08:05 BJ); the one-minute offset is
            documented inline and standardizing the flow function is
            carried as an open hygiene issue. The codex-confirmed clean
            items are preserved: the funding × 1095 arithmetic (live
            +1.47% ann from raw 0.001346, baseline +3.252%, mean ~+0.667%,
            range −3.138% / +6.903%, longest negative streak 448 sampled
            rows from UTC 2026-06-04 10:21 → 17:48), GEX dual-reference
            sign (flip $66,509, spot −4.17% / idx −3.82%, both negative
            and consistent with the file&rsquo;s own −3.8% tile), the 5JUN
            settle arithmetic and ex-5JUN ≈ −29.9M projection
            (−39.5M − (−9.61M)), the SM cut-fraction
            (|−44,462 − (−44,929)| / 44,929 = 1.04%) and BJ 15:41 06-04
            re-stack-hostile-2 step (Δlong −860, Δshort +4,730, Δnet
            −5,591, spot $63,964), the five-print cycle continuation
            chain (05-30 06:01Z → 06-01 06:16Z → 06-02 06:46Z → 06-03
            07:41Z → 06-04 07:41Z, the latest two at the same UTC
            minute), the full MA matrix vs live spot $63,738.00 off
            parquet 2026-06-05 00:06Z close $63,750.60, 30D RV 34.93%,
            cross-asset (|r| 0.215, BTC −13.42% vs NQ +0.02% = −13.44pt),
            the CVD reset-adjustment across the 06-04 14:39 BJ cb_cvd
            reset (24h dSpotCVD = −5,803 with the duplicate-row policy
            applied), the requireViewer gating pattern (path matches,
            first statement), and the claims-vs-loaded-data discipline
            (NTT / max-pain / strike-IV / BTC-NQ framework-only, JGB
            monthly do-not-lean, IV chain-median across 1,034 instruments
            not a tradable spread, 200W watch unavailable on missing
            JSON with no fabricated percentile claim). The short framework
            watch escalation to CLOSED-VINDICATED on five prints stays
            as carried; the audit did not block on that disposition.
            Open issues remain: the MTF 00:01Z scan pinnability gap
            (DN-004), the duplicate-row policy normalization (DN-008
            carried into the next note&rsquo;s baseline), and the 1h / 4h
            flow-window endpoint standardization (DN-009).{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1; Next
            16.2.6 hard-exits on Node &lt; 20.9.0 at{' '}
            <code>node_modules/next/dist/bin/next:24-28</code>, so a full{' '}
            <code>next build</code> is environment-blocked (lineage from
            05-21 through 06-04). <code>npx --no-install tsc --noEmit</code>{' '}
            is the build proxy; STAGE B re-ran it as part of the audit
            (exit 0) and STAGE C re-runs after these v2 fixes.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-06-05 00:05Z)
            with section-level provenance disclosed in the manifest band
            above; the macro Tier-1 panel render is 2026-06-04 22:20Z
            (~1.75h before snapshot) and some inputs are explicitly stale,
            fetch-failed, or pending and flagged as such. Levels, sizes,
            and conditions are illustrative of the desk&rsquo;s process,
            not standing recommendations. Past correlation, gamma, and
            positioning patterns do not bind future tape. Derivatives
            carry the risk of total loss and, where leveraged, loss
            exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The down-leg paused without recovering. The book let air
                out at the largest scale of the lineage but spot held the
                lows. The cycle continuation framework is closed on five
                vindications; the mean-revert scout still needs the leg-3
                reclaim. Patient — watch the 5JUN settle, the next clean
                macro render, and a 1h reclaim above $68k.
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
            v2 · 2026-06-05 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
