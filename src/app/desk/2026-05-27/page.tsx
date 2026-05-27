import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// Internal-only route: not in public nav, not in sitemap, noindex/nofollow.
// Description deliberately anodyne — any future external share (Slack/email
// link preview) shows neutral text rather than dated trade specifics.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-05-27 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-05-27',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-05-27' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260527() {
  await requireViewer('/desk/2026-05-27');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · DESK NOTE · 2026-05-27 · v2</span>
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
              <span className="dn-big">$75,955</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.70%</span>
            </div>
          </div>

          {/* DATA PROVENANCE BAND */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-05-27 00:08Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-27 00:08Z (pinned)</td>
                  <td className="dn-flag">fresh · 1-min · file tail at audit time 00:09Z</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-05-27 00:01Z scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    ~7-min stale vs snapshot anchor · in-progress bar · scan
                    archived in audits/2026-05-27-desk-note.md
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 00:01Z snapshot</td>
                  <td className="dn-flag">
                    fresh · Deribit idx $75,992 vs live $75,955 · 882 inst
                    (was 884 · 26MAY 0DTE expired)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 00:01Z
                  </td>
                  <td className="dn-flag">~7-min lag · 7d 1h bars · 22 assets</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-26 22:16Z render</td>
                  <td className="dn-flag">
                    ~1.9h render lag · FRED Tier-1{' '}
                    <em>first fresh print of the week</em> just landed
                    (10Y −1bp, TIPS −2bp, HY OAS to 2.74%, MOVE −3.5) ·
                    Memorial Day freeze ended this US session · stale-4d
                    tags persist on a subset (10Y / TIPS / US-JP) but
                    levels refreshed
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-05-27 00:05Z</td>
                  <td className="dn-flag">
                    ~3-min stale vs snapshot anchor · offsets recomputed vs live spot
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
              <span className="dn-v bear">+10.95% (cap)</span>
              <span className="dn-src">live · 00:08Z · 24h mean +7.15% · continuous cap since 18:02Z 05-26 (BJ 02:02 05-27)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+8.51% → +10.95%</span>
              <span className="dn-src">range +1.88% / +10.95% · trough 2026-05-26 09:50Z (BJ 17:50) · 343 up · 365 down · 732 flat (cap pinned)</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−0.66% (−657 BTC)</span>
              <span className="dn-src">live · long_btc −3.22k (trim); short_btc +0.04k (flat 24h endpoint)</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">57.20 / 42.80</span>
              <span className="dn-src">live_db `mkt_long_pct` · re-crowded long from 50.21 → 57.20 INTO the break (worst-side imbalance of 4-day lineage)</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−12.1k (net SHORT)</span>
              <span className="dn-src">live · long 12.44k − short 24.50k · trough −15.66k @ 2026-05-26 14:56Z (BJ 22:56)</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 05-26 note</span>
              <span className="dn-v bear">−8.8k → −12.1k (−3.26k more short)</span>
              <span className="dn-src">|Δ|/prior_net = 37% · step at 05-26 05:56Z (BJ 13:56) Δnet −3,973 (Δlong −3,049, Δshort +924)</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.3% / 26.00%</span>
              <span className="dn-src">GEX median IV · 882 inst.</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v">+0.16% (above)</span>
              <span className="dn-src">flip $75,830 · aggregate GEX +29.9M (was +78.2M — eased $48.3M)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              The book changed direction inside a single minute and the
              price did the rest.{' '}
              <span className="dn-signal">
                Two of yesterday&rsquo;s decision conditions came within
                a hair of firing — and the structural change tripped both
                in their spirit even if neither cleared the literal gate
              </span>
              . The fresh +3,819 BTC long-add from 05-25 06:36Z was
              unwound at <span className="dn-tag">2026-05-26 05:56Z
              (BJ 13:56)</span> with spot{' '}
              <span className="dn-tag">$76,872</span>: long_btc jumped
              from <span className="dn-tag">15,216</span> to{' '}
              <span className="dn-tag">12,167</span> (−3,049 BTC) in a
              single minute, short_btc moved{' '}
              <span className="dn-tag">+924</span> in the same minute
              (24,580 → 25,503), and net SM stepped{' '}
              <span className="dn-tag">−9,364 → −13,336</span> (Δnet
              −3,973). The long-trim warning from 05-26 read{' '}
              <em>without short_btc rising</em>; here it rose — so the
              literal gate didn&rsquo;t fire, but the hybrid (long-trim
              <span className="dn-em">+</span> short-add) is a more
              hostile sequence than the pure long-trim the warning
              imagined. Same Beijing-afternoon window:{' '}
              <span className="dn-signal">
                fifth consecutive day of a discrete SM step inside BJ
                13–15 (05-22 re-stack, 05-23 re-stack, 05-24 two-leg
                cover, 05-25 long-add, 05-26 hybrid trim+add)
              </span>
              . Spot then did exactly what the long-add was set up to
              do — punch the cluster top:{' '}
              <span className="dn-tag">$77,506</span> by 18:41 BJ,{' '}
              <span className="dn-tag">$77,866</span> revisited, then{' '}
              <span className="dn-tag">$78,063</span> the 24h high at{' '}
              <span className="dn-tag">2026-05-26 14:27Z (BJ 22:27)</span>{' '}
              — <span className="dn-em">essentially at the W-EMA20
              $77,936 / $78,062 wall the prior note named</span>. Cap
              held; spot rolled over and broke{' '}
              <span className="dn-signal">straight through the 0γ flip
              $75,959 at 17:32Z 05-26 (BJ 01:32 05-27)</span>, printed{' '}
              <span className="dn-tag">$75,894 1h close at 18:00Z</span>{' '}
              (first close below flip), and walked down to a{' '}
              <span className="dn-tag">24h low $75,697.8 at
              2026-05-26 22:50Z (BJ 06:50 05-27)</span>. Snapshot{' '}
              <span className="dn-tag">$75,954.99</span> live (−1.70%
              on 24h, $4 <em>below</em> the prior flip $75,959 — and
              $125 above the new flip $75,830). <span className="dn-em">
                The pin broke. The long-add unwound. The shorts re-added.
                The dealer book lost half its top wall and the front
                expiry flipped sign. Spot punched the cluster top once,
                got rejected, and broke the floor on the same day.
              </span>
            </p>

            <p>
              BTC prints <span className="dn-tag">$75,955</span> live,
              −1.70% on 24h, +0.16% above the new{' '}
              <span className="dn-tag">0-γ flip $75,830</span> (drifted
              down $129 from yesterday&rsquo;s $75,959 — the flip
              followed spot down).{' '}
              <span className="dn-signal">
                Every Daily MA except D-SMA100 is now overhead
              </span>{' '}
              and yesterday&rsquo;s &ldquo;below cluster&rdquo; (D-SMA50
              / D-EMA100 / D-EMA50 / D-SMA150) has flipped to overhead
              support failed:{' '}
              <span className="dn-tag bear">D-SMA150 $76,568 (−0.80%)</span>,{' '}
              <span className="dn-tag bear">D-EMA50 $76,687 (−0.95%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $76,807 (−1.11%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $77,134 (−1.53%)</span>,{' '}
              <span className="dn-tag bear">D-EMA20 $77,482 (−1.97%)</span>{' '}
              cluster all above; next ladder{' '}
              <span className="dn-tag bear">W-EMA20 $77,936 (−2.54%)</span>,
              the same wall that capped at $78,063. Aggregate dealer
              gamma <span className="dn-signal">collapsed</span>:{' '}
              <span className="dn-tag bull">+29.9M/1%</span> (was +78.2M —
              <em>lost $48.3M of dampening overnight, the largest
              single-day GEX move of the 5-day lineage</em>). The
              by-expiry strip flipped its load-bearing leg:{' '}
              <span className="dn-tag bear">29MAY26 2.3DTE −30.65M</span>{' '}
              (was +23.83M yesterday — a $54M swing from heaviest
              positive to heaviest negative; the front expiry that
              hosted the macro put-spread now amplifies, not dampens),{' '}
              <span className="dn-tag bear">27MAY26 0.3DTE −7.83M</span>{' '}
              (today&rsquo;s expiry, net negative — different sign from
              yesterday&rsquo;s 26MAY +1.68M),{' '}
              <span className="dn-tag bear">28MAY26 1.3DTE −1.64M</span>.
              Walls: $80k +29.55M (was +53.92M — <em>halved</em>),{' '}
              $82k +15.64M (was +19.83M),{' '}
              $77k +14.54M (new in top ten — fresh ceiling against the
              break), $90k +8.15M, $78k +7.78M, $85k +7.59M. Negative
              pocket below cluster <span className="dn-em">deepened
              sharply</span>:{' '}
              <span className="dn-tag bear">$75k −39.90M</span> (was
              −23.14M — gained −$16.8M, now the largest single wall on
              the chain),{' '}
              <span className="dn-tag bear">$74k −15.71M</span> (was
              −11.03M — heavier),{' '}
              <span className="dn-tag bear">$76k −13.86M</span> (was
              −12.67M — incrementally heavier). Funding sits at the
              Binance long-cap (live{' '}
              <span className="dn-tag">+10.95% ann</span>, continuous
              since 18:02Z 05-26 (BJ 02:02 05-27), ~6h ago); 24h mean{' '}
              <span className="dn-tag">+7.15%</span> (hotter than
              05-26&rsquo;s +4.16% mean); 24h range{' '}
              <span className="dn-tag">+1.88% / +10.95%</span>; minute
              deltas <span className="dn-tag">343 / 365 / 732</span>{' '}
              (the 733 flats are funding sitting at the cap).{' '}
              <span className="dn-em">
                Read it straight: the dealer book is no longer pinning;
                top wall halved, front expiry flipped to amplifier, $75k
                negative pocket nearly doubled. The position book is
                long-side over-stuffed (retail re-crowded to 57.2%
                long INTO the break, SM trimmed the longs and re-added
                shorts, funding hit the cap). The MA wall the spot
                couldn&rsquo;t take is the W-EMA20 $77,936 — every
                shorter MA below it cracked on the way down.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · the long got cut and the shorts re-loaded</span>
            </h2>

            <p>
              The 13:56 BJ step is the moment the lineage&rsquo;s
              direction changed.{' '}
              <span className="dn-tag">2026-05-26 05:56Z (BJ 13:56)</span>{' '}
              with spot <span className="dn-tag">$76,872.03</span>
              (pre-step 13:55Z spot $76,861.27 with long_btc 15,216,
              short_btc 24,580, net −9,364), long_btc dropped in a
              single minute from <span className="dn-tag">15,216</span>{' '}
              to <span className="dn-tag">12,167</span> (−3,049 BTC of
              longs closed) and short_btc moved from{' '}
              <span className="dn-tag">24,580</span> to{' '}
              <span className="dn-tag">25,503</span> (+924 BTC of shorts
              added). Net SM stepped{' '}
              <span className="dn-tag">−9,364 → −13,336</span> (Δnet
              −3,973). Post-step 13:57Z: long held 12,167, short held
              25,503, net −13,336, spot $76,890 — almost no immediate
              price response, as on the prior three step days. This is
              qualitatively different from{' '}
              <span className="dn-em">every</span> step in the lineage:
              05-22 / 05-23 were short-add re-stacks (single leg);
              05-24 was a two-leg cover (short-close + long-open
              separately, 5 min apart); 05-25 was a one-leg long-add
              with shorts essentially flat. Today&rsquo;s 13:56Z is the
              first <span className="dn-em">hybrid</span> step: long-trim
              <em> and</em> short-add in the same minute. The 05-26
              long-trim warning gate read &ldquo;long drops &gt; 2k
              without short rising&rdquo; — short rose, so the literal
              gate is silent, but the spirit (the fresh long book
              capitulates while the short side reloads) is what the
              warning was designed to flag. The post-step trajectory
              ratifies that reading: short_btc kept accumulating
              through the next ~9 hours from{' '}
              <span className="dn-tag">25,503 → 27,441 peak</span> at{' '}
              <span className="dn-tag">2026-05-26 15:46Z (BJ 23:46)</span>,
              long_btc kept bleeding to{' '}
              <span className="dn-tag">10,801 trough</span> at{' '}
              <span className="dn-tag">2026-05-26 14:56Z (BJ 22:56)</span>,
              and net SM reached its 24h trough of{' '}
              <span className="dn-tag">−15,661</span> at the same
              BJ 22:56 minute (spot $77,026). SM crossed below the
              −15k threshold only briefly — 55 consecutive minutes
              from <span className="dn-tag">BJ 22:46 (UTC 14:46Z) to
              BJ 23:40 (UTC 15:40Z)</span>. Snapshot SM is{' '}
              <span className="dn-tag">−12,058</span>, 3,603 BTC
              less short than the trough; long_btc has crawled back to{' '}
              <span className="dn-tag">12,441</span> (recovered 1.64k
              from the 10.8k bottom) and short_btc is{' '}
              <span className="dn-tag">24,499</span> (closed 2.94k from
              the 27.4k peak). <span className="dn-em">
                Two readings here: net SM is +37% MORE short than the
                05-26 snapshot baseline (cut fraction |−3,257|/|−8,801|
                = 0.37); but the dynamic inside the 24h was wider —
                the SM book sprinted to −15.7k, half-covered back
                toward −12.1k, and the broad short side still sits at
                24.5k (essentially unchanged at the 24h endpoint, but
                the day&rsquo;s arc was a +2.98k short-add to peak
                27.4k followed by a −2.94k short-cover back to
                24.5k). The squeeze fuel that was
                &ldquo;technically still loaded&rdquo; in 05-26 has
                cycled once and re-loaded again at the same level.
              </span>
            </p>

            <p>
              The price did the rest.{' '}
              <span className="dn-signal">
                The cap held at W-EMA20 — exactly as the prior note
                modelled — and then the floor cracked
              </span>
              . Spot ran from the 13:56Z step location $76,872 upward,
              tagged the lineage&rsquo;s prior high of{' '}
              <span className="dn-tag">$77,866</span> at 14:25Z, then
              punched a fresh marginal high of{' '}
              <span className="dn-tag">$78,063.05</span> at 14:27Z (BJ
              22:27) — <em>within $1 of W-EMA20 $78,062 (05-26
              cluster top)</em> and within $5 of the W-EMA20 $77,936
              (today). The 14:00Z 1h close was{' '}
              <span className="dn-tag">$77,177.4</span> (well below
              gate); the prior &ldquo;1h close &gt; D-EMA20 $77,774
              AND SM long_btc &gt; 14k&rdquo; gate was never close (no
              1h close above $77,774, and long_btc was already 12,167
              by the time the price ran). Above the wall the dealer
              book was{' '}
              <em>long gamma absorbing</em>, so the punch had no
              follow-through; below it, with the long book already
              cut by 3k and the short book already +0.9k added, every
              tick down sold into more long-side stops. By 16:00Z
              the 4h water-down death cross printed (DIF −49.9, MACDh
              −55.3) — the engine TF that had carried five days of
              water-down golden-cross posture flipped to a fresh
              water-down death. By 17:32Z spot broke flip $75,959; by
              18:00Z the first 1h close below flip printed at $75,894;
              by 23:00Z the lowest 1h close of the window was{' '}
              <span className="dn-tag">$75,729.7</span> (the 07:00
              BJ 05-27 bar = UTC 23:00Z 05-26), and the 24h low
              followed at 22:50Z (BJ 06:50 05-27):{' '}
              <span className="dn-tag">$75,697.8</span>. Five of the
              last seven 1h closes are below the prior flip (BJ 02 /
              03 / 06 / 07 / 08 = UTC 18 / 19 / 22 / 23Z 05-26 +
              00Z 05-27);{' '}
              <span className="dn-em">
                the cluster-loses gate from 05-26 (1h close &lt;
                $75,959 AND SM &lt; −15k) didn&rsquo;t strictly fire
                because the two legs were ~4 hours offset (SM hit
                −15.7k at 14:56Z; the first below-flip 1h close at
                18:00Z came with SM at −13,425, above the −15k gate);
                but each leg fired on its own clock
              </span>. Both halves printed inside the same 24h. The
              gate&rsquo;s strictness is the only thing that didn&rsquo;t
              fire; the underlying state-change it was designed to
              catch — bears wresting control of the pin from the long
              book at the flip — happened cleanly. We treat the
              cluster-loses condition as <em>functionally tripped</em>{' '}
              for the purpose of today&rsquo;s book.
            </p>

            <p>
              The leverage side ratifies a one-sided readout. Funding
              live at <span className="dn-tag">+10.95% ann</span> — the
              Binance long-pay cap (8h funding rate ceiling at 0.01000,
              ann = ×1095) and continuously pinned to the cap since{' '}
              <span className="dn-tag">2026-05-26 18:02Z (BJ 02:02 05-27)</span>{' '}
              — i.e., the last <em>~6 hours of session funding sat at
              the maximum the venue can charge longs</em>. 24h funding
              path: trough +1.88% at 2026-05-26 09:50Z (BJ 17:50,
              ~5h <em>before</em> the SM trough at 14:56Z), then
              climbed through the late session, crossed +5% at
              2026-05-26 15:42Z (BJ 23:42), +9% at 2026-05-26 17:34Z
              (BJ 01:34 05-27), and reached the +10.95% cap at 18:02Z
              (BJ 02:02 05-27) and stayed there. 24h mean ann
              <span className="dn-tag"> +7.15%</span> (much hotter than
              05-26&rsquo;s +4.16% mean, in line with 05-25&rsquo;s
              +8.90% but with a different micro-structure — today it
              loaded one-way and pinned, vs 05-25&rsquo;s
              trough-and-reload). Minute deltas{' '}
              <span className="dn-tag">343 up / 365 down / 732 flat</span>{' '}
              — the 732 flat minutes are funding sitting at the cap,
              not trading. OI{' '}
              <span className="dn-tag bear">−660 BTC (−0.66%)</span>{' '}
              over 24h: long_btc −3,220 BTC and short_btc +37 BTC at
              endpoints — net structurally long-cleared, with the
              short book essentially flat 24h endpoint-to-endpoint
              despite the intra-day +2.98k peak (to short_btc 27.4k
              at 15:46Z) and −2.94k cover back to 24.5k from that
              peak. Retail{' '}
              <span className="dn-tag bear">mkt_long_pct 57.20%</span>{' '}
              from 50.21% — the largest single-day crowding flip of
              the lineage and the <em>most crowded long side at the
              worst price (into a broken floor)</em>. Perp trades a{' '}
              <span className="dn-tag bear">−$120.10 discount</span>{' '}
              to spot (1h mean −$110.84, range −$139.30 / −$71.35;
              4h mean −$110.94, range −$155.12 / −$71.35; 24h mean
              −$98.46, range −$202.33 / +$38.39 — basis briefly
              flipped to small premium once). Basis is structurally
              wider negative today (snapshot −$120 vs 05-26&rsquo;s
              −$60) — <span className="dn-em">long-pay sits on top of
              a wider negative perp basis: longs are paying record
              rate to hold a perp trading at a $120 discount to
              spot — the textbook end-of-leg structure</span>. 1-min
              aggressor skew snap{' '}
              <span className="dn-tag">+37.1</span> (1h mean +9.0,
              range −22.8 / +48.7; 24h mean +0.6) — net buy aggression
              just under the surface, possibly the early TD9-BUY
              reflex bid; not yet trend-changing.
            </p>

            <p>
              Windowed flow shape today is one-sided then mean-reverting.
              24h: price{' '}
              <span className="dn-tag bear">−1.71%</span>, OI{' '}
              <span className="dn-tag bear">−660 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +984</span>, futures
              CVD <span className="dn-tag bear">Δ −288</span>,
              big-print{' '}
              <span className="dn-tag bear">−487 BTC / 981 prints</span>,
              taker-net{' '}
              <span className="dn-tag bear">−288</span> —{' '}
              <span className="dn-em">
                the 24h shape is futures-led DOWN: futures CVD is the
                only negative on the row; spot CVD ran +984 INTO the
                drop (spot dip-buyers absorbed the futures selling).
                The +984 spot CVD against a $1,317 spot drop is
                meaningful — passive spot bid all the way down
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bear">−0.16%</span>, OI{' '}
              <span className="dn-tag bull">+319 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +1,818</span>, futures
              CVD <span className="dn-tag bear">Δ −299</span>,
              big-print <span className="dn-tag bull">+4 BTC / 129 prints</span>,
              taker-net <span className="dn-tag bear">−299</span> —
              same divergence as 24h but more extreme on spot CVD:
              <em> spot is buying every dip, futures keep selling</em>.
              1h: price <span className="dn-tag bull">+0.14%</span>, OI{' '}
              <span className="dn-tag">+15 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +66</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +99</span>, big-print{' '}
              <span className="dn-tag bull">+27 BTC / 29 prints</span>,
              taker-net <span className="dn-tag bull">+99</span> —{' '}
              <em>last hour shows futures stopping the sell and
              joining the bid (fut CVD flipped from −299 over 4h to
              +99 in the last 1h)</em>; spot CVD slowed to +66 in
              the same hour. That&rsquo;s the 1h TD9 BUY reflex bid
              (printed at $75,915) catching the first small bounce.
              Read it straight: spot has been buying the drop for
              24h while futures sold; in the last 60 minutes futures
              stopped selling and started buying. <em>The bid is
              showing up; it has not yet established control of the
              print</em>. No clean directional volume signature —
              the 4h shape is still spot-led-down with futures
              absorbing, only the 1h flipped both bid.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · 4h death cross confirmed engine · 1h TD9 BUY at the low · MAs all overhead</span>
            </h2>

            <p>
              The MTF structure today shifted from{' '}
              <em>coil indecision</em> to{' '}
              <span className="dn-signal">
                engine-TF bear confirmed with oversold reversal hints
                at the bottom
              </span>
              . The 4h water-down golden cross that had carried five
              days of the pin printed a fresh{' '}
              <span className="dn-em">water-down death cross 2 bars
              ago</span> (DIF −49.9, MACDh −55.3) — the engine TF
              flipped the same way the 1h flipped 9b ago. The 1h
              prints{' '}
              <span className="dn-tag">⚡ TD9 BUY</span> at $75,915 —
              oversold reversal hint, the classic counter-trend
              setup-completion at the bottom of a fresh downleg. 4h
              shows <span className="dn-tag">Buy 8 → 9?</span> (one
              more close below close-4 to complete). RSIs across TFs:
              15m <span className="dn-tag">44.8</span>, 30m{' '}
              <span className="dn-tag">41.0</span>, 1h{' '}
              <span className="dn-tag">37.6</span> (oversold-leaning),
              4h <span className="dn-tag">40.7</span>, 8h{' '}
              <span className="dn-tag">41.0</span>, 12h{' '}
              <span className="dn-tag">39.9</span>, 1d{' '}
              <span className="dn-tag">43.0</span> — all noticeably
              lower than yesterday&rsquo;s ~47–54 band; 1h is the
              softest read at 37.6 and aligns with the TD9 BUY signal.
              Cloud picture: 15m below cloud 35b (↑ $76.6k); 30m below
              cloud 19b (↑ $77.0k); 1h below cloud 7b (↑ $76.8k); 4h
              below cloud 7b (↑ $76.9k); 8h below cloud 33b (↑ $78.5k);
              12h below cloud 9b (↑ $78.2k); 1d above cloud 41b (↓
              $75.4k); 3d in cloud (73.5k–92.4k); 1w below cloud 17b
              (↑ $100.3k); 1M above cloud 27b. <span className="dn-em">
                Seven of ten TFs are now below cloud (up from five
                yesterday). The 1d cloud TOP is $75.4k, $555 below
                spot — still defending, but barely; mid-cycle escalate
                gate sits at this level. The fresh data points: 4h
                water-down death cross confirmed at the engine TF (1h
                already), Sell-tagged 15m / 30m / 1h with 1h TD9 BUY
                reflex hint at the low. The map says &ldquo;trend
                turned down, but at the first major oversold checkpoint
                with TD reversal signals firing&rdquo;
              </span>.
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">75,915</td><td className="num">44.8</td><td className="bull">golden (water-dn) 16b</td><td className="bear">below ↑76.6k 35b</td><td>Sell 5</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">75,910</td><td className="num">41.0</td><td className="bull">golden (water-dn) 刚印</td><td className="bear">below ↑77.0k 19b</td><td>Sell 2</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">75,915</td><td className="num">37.6</td><td className="bear">death (water-dn) 9b</td><td className="bear">below ↑76.8k 7b</td><td>⚡ TD9 BUY</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">75,910</td><td className="num">40.7</td><td className="bear">death (water-dn) 2b · 刚印</td><td className="bear">below ↑76.9k 7b</td><td>Buy 8 → 9?</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">75,910</td><td className="num">41.0</td><td className="bull">golden (water-dn) 9b</td><td className="bear">below ↑78.5k 33b</td><td>Buy 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">75,915</td><td className="num">39.9</td><td className="bull">golden (water-dn) 5b</td><td className="bear">below ↑78.2k 9b</td><td>Buy 3</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1d</td><td className="num">75,915</td><td className="num">43.0</td><td className="bear">death (water-up) 15b</td><td className="bull">above ↓75.4k 41b</td><td>Buy 1</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">75,910</td><td className="num">49.2</td><td className="neut">—</td><td className="neut">in cloud 73.5–92.4k 8b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">75,915</td><td className="num">44.7</td><td className="bull">golden (water-dn) 6b</td><td className="bear">below ↑100.3k 17b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">75,915</td><td className="num">48.4</td><td className="neut">—</td><td className="bull">above ↓46.9k 27b</td><td>Buy 7</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (rolling
                    latest file; archived verbatim in
                    audits/2026-05-27-desk-note.md). Header alerts:{' '}
                    <em>4h water-down death cross 刚印 (2b)</em> — engine
                    TF flipped to a fresh bear cross;{' '}
                    <em>1h ⚡ TD9 BUY printed at $75,915</em> — oversold
                    reversal hint, counter-trend setup-completion at
                    the low;{' '}
                    <em>30m water-down golden cross 刚印</em> — fast-TF
                    bull probe opposite the 4h confirmation. 4h Buy 8
                    → 9? extends. Closes are in-progress bars; treat
                    every value as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix flipped entirely overhead. Yesterday four
              Daily MAs sat below spot in a tight cluster (D-SMA50 /
              D-EMA100 / D-EMA50 / D-SMA150 at +0.25 to +0.80%); today
              every one of those four is{' '}
              <span className="dn-em">overhead</span> as failed
              support: <span className="dn-tag bear">D-SMA150 $76,568
              (−0.80%)</span>,{' '}
              <span className="dn-tag bear">D-EMA50 $76,687 (−0.95%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $76,807 (−1.11%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $77,134 (−1.53%)</span>,{' '}
              <span className="dn-tag bear">D-EMA20 $77,482 (−1.97%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $77,936 (−2.54%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $78,259 (−2.94%; seed)</span>,{' '}
              <span className="dn-tag bear">D-SMA20 $78,365 (−3.08%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $78,970 (−3.82%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $80,131 (−5.21%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $81,355 (−6.64%)</span>.
              Below spot, support is sparse:{' '}
              <span className="dn-tag bull">W-SMA20 $74,266 (+2.27%)</span>,{' '}
              <span className="dn-tag bull">W-EMA200 $73,724 (+3.03%; seed)</span>,{' '}
              <span className="dn-tag bull">D-SMA100 $72,903 (+4.19%)</span>{' '}
              cycle anchor. The D-EMA50 / D-EMA100 cluster overhead is
              the structural significance: spot{' '}
              <span className="dn-em">closed</span> below D-SMA150 and
              D-EMA100 on the 05-26 daily ($75,905 vs D-SMA150
              $76,568) — first close below the cluster of this
              regime. Far above and disused: W-EMA50 $84.9k (−10.50%),
              W-EMA100 $83.3k (−8.78%), W-SMA100 $88.4k (−14.03%),
              W-SMA50 $93.4k (−18.69%). <span className="dn-em">
                W-SMA150 / W-SMA200 still not computable — parquet
                history holds 126 weekly bars, short of both windows;
                W-EMA150 $78,259 (−2.94%) and W-EMA200 $73,724
                (+3.03%) show because the EMA seeds from available
                history. MAs anchored to parquet last bar 2026-05-27
                00:05Z (close $75,918.1); offsets recomputed against
                live spot $75,955. Displayed MA levels are
                $-rounded; offsets are computed from exact series
                values. The pin shifted entirely: yesterday&rsquo;s
                cluster top was D-EMA20 $77,774 / W-EMA20 $78,062
                ($288 apart); today the meaningful gate is the
                nearest overhead — D-SMA150 $76,568, a $613 ladder
                that runs through five MAs to W-EMA20 $77,936; total
                overhead-cluster span is $1,368 (from $76,568 to
                $77,936). The 24h high $78,063 punched <em>through</em>
                W-EMA20 by $1 and got rejected at exactly that
                level.
              </span>{' '}
              The reclaim gate, if a long re-engage is to be
              considered, is now <span className="dn-tag bear">1h
              close &gt; $76,568 (D-SMA150)</span> as a first scout
              (a much lower bar than yesterday&rsquo;s D-EMA20
              $77,774) — but it needs SM to stop adding short and
              long_btc to stabilize above 12k.
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · GEX +29.9M (eased $48M) · 29MAY flipped to −30.65M · $75k −39.9M deepened · 26MAY expired</span>
            </h2>

            <p>
              Dealer gamma{' '}
              <span className="dn-em">collapsed</span>:{' '}
              <span className="dn-tag bull">+29.9M/1%</span> (was
              +78.2M, lost −$48.3M — the largest single-day GEX move
              of the 5-day lineage, eclipsing 05-23 → 05-24&rsquo;s
              record short-book unwind). 0-γ flip{' '}
              <span className="dn-tag">drifted to $75,830</span> (was
              $75,959, down $129 — the flip followed the price down
              cleanly). Spot $75,955 sits{' '}
              <span className="dn-tag bull">+0.16% above flip</span>{' '}
              on spot-denominated math; the GEX file&rsquo;s own
              &ldquo;dist to flip&rdquo; reads{' '}
              <span className="dn-em">+0.2%</span> off Deribit-index
              $75,992 (idx $37 above live spot; both references agree
              on sign at this granularity). Above the flip dealers
              are{' '}
              <span className="dn-em">still technically long gamma</span>,
              but the margin is razor-thin — at +29.9M the dampening
              regime is back in the &ldquo;light pin&rdquo; band of
              the 05-15 era, not the &ldquo;heavy pin&rdquo; of
              +65–78M earlier in the lineage. The ceiling halved on
              the top wall:{' '}
              <span className="dn-tag bull">$80k +29.55M</span> (was
              +53.92M — <em>halved overnight</em>, the load-bearing
              cluster ceiling lost most of its weight),{' '}
              <span className="dn-tag bull">$82k +15.64M</span> (was
              +19.83M — eased),{' '}
              <span className="dn-tag bull">$77k +14.54M</span> (new
              top-ten entry — a fresh near-current-spot positive wall,
              the only positive within 2% of price),{' '}
              <span className="dn-tag bull">$90k +8.15M</span>,{' '}
              <span className="dn-tag bull">$78k +7.78M</span> (was
              +10.06M — eased),{' '}
              <span className="dn-tag bull">$85k +7.59M</span>. The
              negative pocket{' '}
              <span className="dn-em">deepened sharply</span>:{' '}
              <span className="dn-tag bear">$75k −39.90M</span> (was
              −23.14M — gained −$16.76M, now the heaviest single wall
              on the chain, $10M heavier than the $80k positive),{' '}
              <span className="dn-tag bear">$74k −15.71M</span> (was
              −11.03M — heavier),{' '}
              <span className="dn-tag bear">$76k −13.86M</span> (was
              −12.67M — heavier),{' '}
              <span className="dn-tag bear">$60k −8.05M</span>
              crash-put residual essentially flat. By-expiry: 26MAY
              0DTE expired{' '}
              <span className="dn-tag">+1.68M</span> yesterday (the
              front net-positive expiry cleared);{' '}
              <span className="dn-tag bear">27MAY26 0.3DTE −7.83M</span>{' '}
              (today&rsquo;s expiry, NEGATIVE net — opposite sign
              from yesterday&rsquo;s 26MAY expiry print),{' '}
              <span className="dn-tag bear">28MAY26 1.3DTE −1.64M</span>,{' '}
              <span className="dn-tag bear">29MAY26 2.3DTE −30.65M</span>{' '}
              <em>(was +23.83M yesterday — a $54M sign-flip in one
              day, from heaviest positive on the strip to heaviest
              negative; the expiry that hosted the macro put-spread
              now amplifies, not dampens)</em>,{' '}
              <span className="dn-tag bull">30MAY26 3.3DTE +0.18M</span>,{' '}
              <span className="dn-tag bull">5JUN26 9.3 +3.81M</span>{' '}
              (was +8.01M — eased),{' '}
              <span className="dn-tag bull">12JUN26 16.3 +3.45M</span>{' '}
              (was +6.06M — eased),{' '}
              <span className="dn-tag bull">26JUN26 30.3 +11.62M</span>{' '}
              (was +16.54M — eased — but now the heaviest positive
              expiry on the strip after the 29MAY flip).
            </p>

            <p>
              Read it straight:{' '}
              <span className="dn-signal">
                the dealer regime that pinned the lineage for five
                consecutive days has materially weakened, with the
                front expiry now actively amplifying the next move
              </span>
              . +29.9M total is below every read of the prior 4 days
              (+78.2M / +65.1M / +66.5M / +67.0M); the load-bearing
              ceiling halved; the $75k negative pocket nearly doubled.
              The dealer map shape is{' '}
              <span className="dn-em">no longer a pin</span> — it is
              a shallow positive ceiling at $77k–$82k (sum ~+67M) sitting
              on top of a deep negative pocket at $74k–$76k (sum
              ~−69M). The 29MAY −30.65M flip is the single most
              consequential print: 2.3 DTE puts a $30.6M negative
              gamma chunk on dealers, which means their delta hedging
              now <em>amplifies</em> downside moves through the
              weekend rather than dampening them — opposite of every
              prior day in the lineage. A break below $75,830 (flip)
              now meets the heaviest single negative-gamma wall on
              the chain ($75k −39.90M) plus the 29MAY amplifier; the
              path to $74,266 (W-SMA20) carries no positive
              counter-weight inside that range. Upside is also
              weaker — break above $77k +14.54M would meet $77,936
              W-EMA20 (cap held there twice in the lineage), then
              $80k +29.55M (halved). <span className="dn-em">
                Net shape: the regime flipped from dampening to
                neutral-with-front-amplifier; a break below flip is
                now structurally fast and the macro put-spread
                expiry hosts the amplifier. IV median across 882
                instruments
              </span>{' '}
              is{' '}
              <span className="dn-tag">42.3%</span> (was 42.4% —
              flat) against 30D close-to-close RV of{' '}
              <span className="dn-tag">26.00%</span> (was 25.84% —
              barely changed) — chain-level richness{' '}
              <span className="dn-tag">~+16.3pt</span> (essentially
              flat to 05-26). A chain-median across N instruments,{' '}
              <span className="dn-em">not</span> a tradable spread;
              expiry- / strike-level vega, skew and term structure
              remain not loaded; the vol read stays framework-only.
              882 instruments today vs 884 yesterday — the 2-instrument
              drop is small (the chain has fully rolled the 25MAY /
              26MAY 0DTE prints out). RV methodology: 30D close-to-close,
              logret.std × √365 × 100 on the last 30 daily closes
              anchored to parquet last bar 2026-05-27 00:05Z (range
              $75,513 – $82,178 over the last 30 daily closes).
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · FRED Tier-1 thawed · first fresh print loosened (10Y −1bp, HY OAS −4bp, MOVE −3.5) · no re-grow trigger</span>
            </h2>

            <p>
              <span className="dn-signal">
                The fresh FRED Tier-1 print landed and it loosened on
                every line that matters
              </span>
              . Dashboard render is 2026-05-26 22:16Z, ~1.9h before
              the snapshot; the panel still flags{' '}
              <span className="dn-tag stale">stale 4d</span> on 10Y,
              TIPS, and US-JP 10Y spread (the Δ field hasn&rsquo;t
              fully caught up at the time of render), but the level
              column is refreshed. US 10Y nominal{' '}
              <span className="dn-tag bull">4.56% (−1.0bp)</span> —
              down 1bp from yesterday&rsquo;s 4.57% print, regime z
              eased to <span className="dn-tag bear">+2.16</span>{' '}
              (was +2.24), episodic z eased to{' '}
              <span className="dn-tag bear">+1.33</span> (was +1.52)
              — still EXTREME RISK-OFF tag but moderating. 10Y TIPS
              real{' '}
              <span className="dn-tag bull">2.16% (−2.0bp)</span>{' '}
              (was 2.18%), regime z{' '}
              <span className="dn-tag bear">+2.09</span> (was +2.26),
              episodic z{' '}
              <span className="dn-tag bear">+2.00</span> (was +2.47)
              — still tight. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.27% (+1.0bp)</span>. HY OAS{' '}
              <span className="dn-tag bull">2.74% (−4.0bp implied vs
              yesterday&rsquo;s 2.78%)</span>, regime z{' '}
              <span className="dn-tag bull">−1.22</span> (was −0.98 —
              <em>deeper</em> risk-on), episodic z{' '}
              <span className="dn-tag bull">−1.89</span> (was −1.02 —
              materially more risk-on episodic, the largest single-day
              improvement of the lineage); MOVE bond vol{' '}
              <span className="dn-tag bull">75.0 (−3.48)</span> — down
              meaningfully from yesterday&rsquo;s 78.4. Fed net
              liquidity{' '}
              <span className="dn-tag bull">$5.907T (+0.030T)</span>{' '}
              — unchanged. DXY{' '}
              <span className="dn-tag bull">99.14 (−0.18)</span> —
              eased slightly (small risk-on tick). USD/JPY{' '}
              <span className="dn-tag bear">159.29 (+0.33)</span> —
              yen weaker (DXY easing + yen weaker is asymmetric;
              the rate-context divergence sits in the cross). US-JP
              10Y spread{' '}
              <span className="dn-tag">2.04% (−1.0bp)</span> — tighter.{' '}
              <span className="dn-em">
                Net: the macro tail tightened. None of yesterday&rsquo;s
                re-grow gates fired in the right direction (HY OAS
                gate &gt; 3.0% — moved AWAY to 2.74%; 10Y gate &gt;
                4.75% — moved AWAY to 4.56%; the reclaim-long rates
                filter 10Y &lt; 4.55% — 1bp away, still not breached
                but came $5bp closer). The macro variable that
                yesterday&rsquo;s note named as &ldquo;the only
                outside-BTC-book input that can break the pin&rdquo;
                came in <em>risk-on</em>; the pin broke anyway, from
                inside the BTC book — the macro print was not the
                cause
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
                <tr><td>US 10Y nominal</td><td className="num">4.56%</td><td className="num bull">−1.0bp (FRESH · still tagged stale 4d)</td><td className="num bear">+2.16</td><td className="num bear">+1.33</td><td className="bear">tight, moderating · panel tag lagging</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.16%</td><td className="num bull">−2.0bp (FRESH · still tagged stale 4d)</td><td className="num bear">+2.09</td><td className="num bear">+2.00</td><td className="bear">tight, eased · panel tag lagging</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.27%</td><td className="num bear">+1.0bp</td><td className="num">+0.48</td><td className="num">+0.61</td><td className="neut">drift up · no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.74%</td><td className="num bull">0.0bp panel-Δ (level −4bp vs 05-26 2.78%)</td><td className="num bull">−1.22</td><td className="num bull">−1.89</td><td className="bull">loose · biggest day-of risk-on of lineage</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num stale">−0.523</td><td className="num stale">−0.01 (stale 11d)</td><td className="num bull">−0.48</td><td className="num bull">−1.35</td><td className="stale">stale 11d · neutral</td></tr>
                <tr><td>MOVE bond vol</td><td className="num bull">75.0</td><td className="num bull">−3.48 (FRESH)</td><td className="num">−0.18</td><td className="num">+0.38</td><td className="bull">vol eased meaningfully</td></tr>
                <tr><td>DXY</td><td className="num">99.14</td><td className="num bull">−0.18</td><td className="num">+0.73</td><td className="num bear">+1.34</td><td className="neut">tight, slight ease</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.907T</td><td className="num bull">+0.030T</td><td className="num bull">+0.77</td><td className="num bull">+2.16</td><td className="bull">loose · surge episodic</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.29</td><td className="num bear">+0.33</td><td className="num bear">+1.22</td><td className="num">+0.75</td><td className="bear">yen weaker</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.04%</td><td className="num">−1.0bp (still tagged stale 4d)</td><td className="num bull">−0.67</td><td className="num bear">+1.33</td><td className="bear">tight episodic · panel tag lagging</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7855</td><td className="num bull">−0.01</td><td className="num bull">−1.85</td><td className="num bull">−1.67</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp (monthly)</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.340</span> (loosened
              further from 05-26&rsquo;s 0.353 — still NORMAL band).
              BTC&rsquo;s listed ties: SILVER{' '}
              <span className="dn-tag">+0.561</span> (was +0.569,
              now BTC&rsquo;s strongest tie), NQ{' '}
              <span className="dn-tag">+0.551</span> (was +0.600 —
              continued ease), CL{' '}
              <span className="dn-tag">−0.530</span> (was −0.541),
              SP500 <span className="dn-tag">+0.527</span> (was +0.557),
              AMZN <span className="dn-tag">+0.471</span>, GOLD{' '}
              <span className="dn-tag">+0.470</span> (was +0.445 —
              strengthened), NVDA <span className="dn-tag">+0.463</span>{' '}
              (was +0.465), META{' '}
              <span className="dn-tag">+0.448</span> (was +0.422),
              BRENT <span className="dn-tag">−0.447</span>, MSFT{' '}
              <span className="dn-tag">+0.430</span>. 7d relative
              performance:{' '}
              <span className="dn-tag bear">BTC −1.11%</span> (turned
              meaningfully negative from 05-26&rsquo;s +0.19% —
              BTC&rsquo;s 7d lag widened sharply), NQ{' '}
              <span className="dn-tag bull">+4.11%</span> (was +2.75%
              — accelerated), SP500{' '}
              <span className="dn-tag bull">+2.37%</span> (was +1.75%
              — accelerated), JP225{' '}
              <span className="dn-tag bull">+10.80%</span> (was +7.36%
              — <em>extended further</em>; +3.4pt in one day on the
              7d window), NVDA{' '}
              <span className="dn-tag bear">−3.40%</span> (was −2.10%
              — deteriorated further), AAPL{' '}
              <span className="dn-tag bull">+3.39%</span> (was +3.96%
              — eased), TSLA{' '}
              <span className="dn-tag bull">+7.87%</span> (was +4.82%
              — extended), AMZN{' '}
              <span className="dn-tag bull">+2.26%</span> (was +1.77%),
              GOOGL <span className="dn-tag bull">+0.11%</span>{' '}
              (recovered from −3.78%); metals shifted to bull —
              GOLD <span className="dn-tag bull">+0.44%</span> (turned
              positive from −0.23%), SILVER{' '}
              <span className="dn-tag bull">+3.77%</span> (turned
              positive from flat), PLAT{' '}
              <span className="dn-tag bull">+2.02%</span>, PALL{' '}
              <span className="dn-tag bull">+1.60%</span>, COPPER{' '}
              <span className="dn-tag bull">+3.95%</span>, URNM{' '}
              <span className="dn-tag bull">+5.70%</span>; energy
              still collapsed — CL{' '}
              <span className="dn-tag bear">−10.22%</span>, BRENT{' '}
              <span className="dn-tag bear">−9.37%</span>, NGAS{' '}
              <span className="dn-tag bear">−7.79%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine widened from
                ~−3.0pt yesterday to ~−5.2pt today (BTC −1.11% vs NQ
                +4.11%, SP500 +2.37%). The TradFi side
                <em> accelerated risk-on </em>(NQ, SP500, JP225,
                metals turned bull, MOVE eased −3.5, HY OAS to 2.74%);
                BTC <em>decoupled and went down</em>. The price
                action today is endogenous to crypto, not driven by
                the macro tape. Energy stayed collapsed (no help, no
                hurt). Japan strength accelerated to +10.80%
                (BTC-JP225 +0.193 correlation low, no read-through).
                Today&rsquo;s shape is the cleanest BTC-vs-macro
                divergence in the lineage so far
              </span>. JGB monthly 2.52% carries EXTREME RISK-OFF
              monthly tag — do not lean on it. USD/JPY 159.29, yen
              weaker (fresh tick).
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · stand-aside still right · long-trim warning fired in spirit · cluster-loses functionally tripped</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 05-26 stand-aside book was still right on the day,
                but the structural conditions for re-engaging are
                materially closer to firing than they were in any of
                the prior four notes
              </span>. Cluster-top reclaim (1h close &gt; $77,774 AND
              SM long_btc &gt; 14k): never close (highest 1h close
              was $77,413.9 at 11:00Z 05-26 BJ 19:00, long_btc was
              already &lt; 14k by 13:56Z). Reclaim-harder (1h close
              &gt; $78,634): never came close. Cluster loses (1h
              close &lt; $75,959 AND SM &lt; −15k): literal gate
              didn&rsquo;t fire simultaneously (legs ~4h offset — SM
              hit −15.7k at 14:56Z, first below-flip 1h close at
              18:00Z had SM at −13,425), but{' '}
              <em>both legs printed inside the same 24h</em> — treat
              as <span className="dn-em">functionally tripped</span>{' '}
              for the post-snapshot book. Long-trim warning (SM
              long_btc drops &gt; 2k in one minute without short
              rising): long dropped 3,049 BUT short rose +924, so
              literal gate silent; the spirit (long capitulates while
              short reloads) did print as a hybrid. Re-stack hostile
              (discrete SM Δ ≤ −5k pushing SM &lt; −15k): the 13:56Z
              step was Δnet −3,973 (not ≤ −5k); SM did cross −15k
              later in the day but not in one discrete minute — gate
              silent. Mid-cycle escalates (1d close below $75.1k
              cloud): 1d cloud top now $75.4k (yesterday $75.1k —
              cloud rose slightly), 05-26 daily close $75,905.5
              ($505 above the new cloud top); not breached. Macro
              tail re-grow (HY OAS &gt; 3.0% OR 10Y &gt; 4.75%):
              both moved the opposite direction (HY OAS to 2.74%,
              10Y to 4.56%) — gate fired{' '}
              <span className="dn-em">in the loose direction</span>{' '}
              (BTC negative correlation). Reclaim filter ratifies: no
              leg true. Stand-aside book closed{' '}
              <span className="dn-em">flat</span> at the snapshot;
              the macro put-spread on 29MAY sits inside a now-NEGATIVE
              gamma chunk (−30.65M, was +23.83M) — vega/Δ accelerated
              hedging will amplify rather than dampen on a downside
              move into expiry.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">stand-aside · primary · today</span>
              <div className="dn-trade-name">
                Still flat directional — let the broken floor settle, mark the new ladder, wait for SM to stop adding short
              </div>
              <div className="dn-thesis">
                Spot $75,955 sits $125 above the new 0γ flip $75,830
                with every Daily MA overhead and the W-SMA20 $74,266
                as the only meaningful support below. The dealer book
                is no longer pinning (+29.9M, was +78.2M; 29MAY
                flipped to −30.65M; $75k −39.90M is now the heaviest
                wall on the chain). SM net moved from −8.8k → −12.1k
                via a single hybrid step at 05:56Z (long −3,049,
                short +924, Δnet −3,973), with SM running to a
                trough of −15,661 at 14:56Z (BJ 22:56) before
                half-covering back to −12,058 snap. The cap at
                W-EMA20 $78,062 / $77,936 held the upside ($78,063
                high vs the wall); the floor at $75,959 flip cracked
                on the downside (five of last seven 1h closes below
                flip, 24h low
                $75,697.8). Retail re-crowded into the break (57.20%
                long, was 50.21%) — worst-side imbalance of the
                lineage. Funding hit the cap +10.95% ann and has
                stayed there 6 hours. 1h TD9 BUY printed at $75,915
                (oversold reversal hint) and 4h Buy 8→9? is one
                close from setup-completion at the engine TF — both
                are counter-trend bottom-feeders. The trade is still
                no-trade until either (a) the bid converts — 1h
                close &gt; $76,568 D-SMA150 AND SM long_btc holds
                above 12k AND short_btc starts to bleed below 24k —
                or (b) the break extends — 1h close &lt; $75,500 AND
                SM &lt; −13k AND short_btc &gt; 25k. The
                pre-positioning math doesn&rsquo;t pay either way:
                long here is fighting fresh death cross at engine TF
                with retail crowded long and dealers no longer
                dampening; short here is selling INTO the $75k
                −39.9M negative wall and the TD9-BUY at the low.
                Both sides are paying for the same coin-flip with
                worse asymmetry than yesterday.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">stance</span><span className="dn-lvl-v">flat directional · no new risk</span></div>
                <div><span className="dn-lvl-k">decision band</span><span className="dn-lvl-v">$74,266 (W-SMA20, primary support) ↔ $77,936 (W-EMA20, cap)</span></div>
                <div><span className="dn-lvl-k">long re-engage (gate lowered)</span><span className="dn-lvl-v bull">1h close &gt; $76,568 (D-SMA150) AND SM long_btc holds &gt; 12k AND short_btc bleeds &lt; 24k inside the 4h leading up — scout long 0.2R, target $76,807 (D-EMA100) then $77,134 (D-SMA50) then $77,482 (D-EMA20)</span></div>
                <div><span className="dn-lvl-k">break extends (short setup)</span><span className="dn-lvl-v bear">1h close &lt; $75,500 AND SM &lt; −13k AND short_btc &gt; 25k — flip-extend short 0.3R, target $74,266 (W-SMA20) then $73,724 (W-EMA200 seed) / $72,903 (D-SMA100)</span></div>
                <div><span className="dn-lvl-k">short-cover early (TD9 BUY ratification)</span><span className="dn-lvl-v">SM short_btc drops &gt; 1.5k inside 1h AND long_btc &gt; 13k — that&rsquo;s the position-book pivot, treat as long-scout pretrigger ahead of the 1h close &gt; $76,568 ratification</span></div>
                <div><span className="dn-lvl-k">re-stack hostile escalation</span><span className="dn-lvl-v bear">discrete SM Δ ≤ −3k in one minute pushing SM &lt; −15k (gate lowered from −5k; 13:56Z step was −3,973 and hit −15k later in the day — relax the gate to today&rsquo;s observed step size)</span></div>
              </div>
              <div className="dn-gating">
                <b>Why stand-aside, not break-extend short here:</b> the
                break is fresh and the position book is at maximum
                short-side strain inside the window (SM trough
                −15.7k 9h ago, half-covered already), funding pinned
                at the cap means new shorts are being paid maximum
                rate by longs to hold, retail just re-crowded long
                57.2% so the contrarian read is BEAR but the timing
                read says wait for the cover-bounce reflex. 1h TD9
                BUY and 4h Buy 8→9? are oversold reversal hints, not
                trend reversals, but at the bottom of a fresh
                downleg they typically produce a 1–2 day mean-reverting
                bid. The break-extend setup needs <em>another</em>{' '}
                leg lower (SM re-extends short on a fresh minute
                step, or spot loses $75,500 on a 1h close) to pay;
                pre-emptive short here pays a coin-flip for the
                bounce. Conversely, the long re-engage gate at
                $76,568 D-SMA150 needs the position book to
                co-operate (long_btc &gt; 12k AND short_btc &lt;
                24k) — which is not the snapshot state — so the long
                scout is the better-asymmetry side BUT only after
                the gate prints.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">closed · long-loaded-hedge framework · cycle 1 completed</span>
              <div className="dn-trade-name">
                Squeeze-cycle re-classification — the long-add-then-trim arc closed in a one-day round-trip
              </div>
              <div className="dn-thesis">
                The 05-26 &ldquo;long-loaded hedge of intact
                short&rdquo; framework completed its first round-trip
                in one calendar day. The +3,819 BTC fresh long-add
                from 05-25 06:36Z was cut by 3,049 BTC at 05-26
                13:56Z (≈ 80% of the add unwound; net long position
                from the add: 12,167 vs the 11,564 baseline pre-add,
                so structurally ~600 BTC of the add survived). The
                still-loaded short side from 05-26 (24.5k) cycled
                through a +1.1k extension (to 25.5k at the step) and
                a further +1.9k extension (to 27.4k peak at 15:46Z),
                then half-covered −2.9k back to 24.5k snap (the same
                level as 05-26 endpoint, a near-perfect round-trip
                in 24 hours). Net SM ran from −8.8k → −15.7k trough
                → −12.1k snap. <span className="dn-em">
                  The lineage state is now: the short side is again
                  loaded near 24.5k (essentially at the 05-26
                  starting level), the long side is back near the
                  05-23/24 baseline (~12k), net is more short than
                  05-26 by 3.3k. The 5-day cadence pattern (re-stack,
                  re-stack, two-leg cover, long-add, hybrid trim+add)
                  is unbroken and a 6th step lands inside the next
                  24h base rate
                </span>. The new question is whether the broken
                floor produces a fresh re-stack tomorrow (would
                target SM &lt; −15k sustained, not just a 55-min
                trough) or a cover (SM races to neutral on a fast
                bounce). The dealer map at 29MAY −30.65M argues
                against an easy cover (vega/Δ amplifies down moves
                through that expiry), and the $75k −39.90M argues
                against an easy break (negative gamma at the level
                amplifies BOTH directions — fast moves either way).
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">closed cycle 1 · ready for cycle 2 setup on the BJ 13–15 cadence (next step base rate ~24h forward)</span></div>
                <div><span className="dn-lvl-k">step 5 of 5 printed</span><span className="dn-lvl-v">hybrid trim+add @ 2026-05-26 05:56Z (BJ 13:56) · spot $76,872 · Δlong −3,049, Δshort +924, Δnet −3,973</span></div>
                <div><span className="dn-lvl-k">SM trough (most short) in window</span><span className="dn-lvl-v">−15,661 BTC @ 2026-05-26 14:56Z (BJ 22:56) · spot $77,026 · 55-min duration sub −15k</span></div>
                <div><span className="dn-lvl-k">post-step price path</span><span className="dn-lvl-v">step $76,872 → 24h high $78,063 (+$1,191) → 24h low $75,697.8 (−$1,174 from step) → snapshot $75,955 (−$917 vs step entry)</span></div>
                <div><span className="dn-lvl-k">step cadence</span><span className="dn-lvl-v">5 consecutive days · all BJ 13–15 window · 6th step base rate ~24h forward (BJ 13–15 today, i.e. 2026-05-27 05:00–07:00Z)</span></div>
              </div>
              <div className="dn-gating">
                <b>Re-classified lesson:</b> the &ldquo;long-loaded
                hedge&rdquo; framework from 05-26 correctly diagnosed
                the lineage as fragile — the prediction &ldquo;a fast
                long-trim takes net back to −12k+ in minutes&rdquo;
                played out almost verbatim (long trimmed 3.0k in one
                minute; net moved from −9.4k → −13.3k in the same
                minute). The strictness of the literal long-trim
                warning gate (&ldquo;without short rising&rdquo;) is
                the only thing the framework missed; today&rsquo;s
                step was a hybrid (long −3,049{' '}
                <em>and</em> short +924), more hostile than the pure
                long-trim. Revised gate for cycle 2: drop the
                &ldquo;without short rising&rdquo; clause; the trigger
                is &ldquo;long_btc drops &gt; 2k in one minute&rdquo;
                full-stop, regardless of short_btc sign. The cycle 2
                base rate is now: another discrete step in BJ 13–15
                window, expected today (2026-05-27 05:00–07:00Z)
                with direction-conditional read pending the
                snapshot-to-step path.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · hedge · held · structural shift</span>
              <div className="dn-trade-name">
                Downside put-spread — residual 0.15R held but expiry-gamma sign-flipped to amplifier
              </div>
              <div className="dn-thesis">
                Macro Tier-1 thawed and loosened on every line that
                matters (10Y −1bp to 4.56%, TIPS −2bp to 2.16%, HY
                OAS −4bp implied to 2.74%, MOVE −3.5 to 75.0); none
                of the re-grow gates fired in the correct direction,
                and HY OAS now sits ~26bp from the 3.0% gate (vs
                ~22bp yesterday — moved further from gate).
                Reclaim-long rates filter 10Y &lt; 4.55% is 1bp from
                firing (vs 2bp yesterday — closer to filter-true).
                Regime z eased on every Tier-1 line. <span className="dn-em">
                  But the expiry that hosts the put-spread
                  (29MAY26 2.3 DTE) flipped from +23.83M to −30.65M
                  in a single day — a $54M sign-flip — and the
                  hedge now sits inside a NEGATIVE gamma chunk.
                  Dealer hedging on the expiry will amplify, not
                  dampen, a downside move toward strike. The hedge
                  has 2.3 calendar days to resolve; structurally
                  the gamma context for the expiry is the most
                  favorable it has been in the lineage (amplifier
                  helps the long put-spread), but the macro tape
                  has tightened the wrong way (re-grow gates moved
                  AWAY)
                </span>. Net: hold position unchanged on size, but
                the read shifted from &ldquo;tail insurance against
                slow regime z&rdquo; to &ldquo;structural amplifier
                if the BTC-internal break extends&rdquo;. A roll to
                5JUN26 (9.3 DTE, +3.81M dealer gamma, lighter
                dampening) is the natural next leg after 29MAY
                expires, with sizing pending fresh strike chain.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">structure</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">expiry</span><span className="dn-lvl-v">29-MAY-26 (2.3 DTE) — now NEGATIVE gamma host (−30.65M, was +23.83M); rolls to 5JUN26 9.3 DTE +3.81M after expiry</span></div>
                <div><span className="dn-lvl-k">action this note</span><span className="dn-lvl-v">hold 0.15R · no add (macro print loosened, re-grow gates moved away) · no trim (BTC-internal break makes the put-spread structurally favored independent of macro)</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (FRESH after today&rsquo;s print)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.85% close (gate raised, currently 2.74%) OR 10Y &gt; 4.60% close; 1d close below $75.4k cloud → max tail</span></div>
                <div><span className="dn-lvl-k">reclaim-long filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close (1bp away — fresh Tier-1 next print closer to filter-true)</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> strike/premium/Greeks not loaded —
                structure is illustrative, sizing pending a Deribit
                29-MAY chain pull. The 29MAY −30.65M sign-flip is
                the largest single-expiry GEX shift of the lineage;
                a tradable spread that hedges the BTC-internal break
                while the macro tape loosens is now structurally
                advantaged for the next 2.3 days. After expiry, the
                hedge needs to roll forward; 5JUN26 (9.3 DTE)
                carries +3.81M dealer gamma (lighter dampening than
                29MAY before its flip), but the strip&rsquo;s heavy
                expiries 26JUN (+11.62M) and 25SEP (+12.78M) remain
                positive — the broader dealer book is still long
                gamma in aggregate (+29.9M total), just barely.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the pin broke · cycle 2 step expected in BJ 13–15 today · 1h TD9 BUY is the cover-bounce flag</span>
            </h2>

            <p>
              Of the seven 05-26 decision conditions: cluster-loses{' '}
              <em>functionally</em> tripped (both legs printed inside
              24h but offset ~4h); long-trim warning fired{' '}
              <em>in spirit</em> as a hybrid (long −3,049 + short
              +924); re-stack hostile gate was <em>narrowly</em>{' '}
              silent on the one-minute Δ requirement (13:56Z step was
              Δnet −3,973, not ≤ −5k); cluster-top reclaim never
              came close (highest 1h close $77,413.9, well below the
              $77,774 gate). Macro re-grow gates moved AWAY (loose
              direction). Mid-cycle escalate gate not breached (1d
              close $75,905.5 vs cloud top $75.4k). Reclaim filter no
              leg true. <em>Three of seven conditions fired in
              substance even though only zero fired strictly</em>.
              The conditions today re-set around a broken pin and a
              short-side over-loaded book; cycle 2 cadence is the
              new top-watch row:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Long re-engage (gate lowered to D-SMA150)</td><td className="bull">1h close &gt; $76,568 (D-SMA150) AND SM long_btc &gt; 12k AND short_btc &lt; 24k inside the 4h leading up</td><td>scout long 0.2R, target $76,807 (D-EMA100) then $77,134 (D-SMA50) then $77,482 (D-EMA20)</td></tr>
                <tr><td>Re-engage ratifies harder</td><td className="bull">SM net &gt; −8k sustained AND 1h close &gt; $77,482 (D-EMA20)</td><td>add +0.2R, target $77,936 (W-EMA20) — into the cap that held twice</td></tr>
                <tr><td>Cycle 2 cadence — BJ 13–15 today (2026-05-27 05:00–07:00Z)</td><td>discrete SM step expected at the cadence window; direction-conditional</td><td>read step at print and gate trade off direction</td></tr>
                <tr><td>Break extends (short setup)</td><td className="bear">1h close &lt; $75,500 AND SM &lt; −13k AND short_btc &gt; 25k</td><td>flip-extend short 0.3R, target $74,266 (W-SMA20) / $73,724 (W-EMA200 seed) / $72,903 (D-SMA100)</td></tr>
                <tr><td>Re-stack hostile (gate lowered)</td><td className="bear">discrete SM Δ ≤ −3k in one minute pushing SM &lt; −15k</td><td>treat as immediate short setup at next reclaim of $76,568</td></tr>
                <tr><td>Short-cover early flag (TD9 BUY ratification)</td><td className="bull">SM short_btc drops &gt; 1.5k inside 1h AND long_btc &gt; 13k</td><td>long-scout pretrigger ahead of 1h close &gt; $76,568</td></tr>
                <tr><td>Mid-cycle escalates</td><td className="bear">1d close &lt; $75,400 (cloud top ↑ 1d cloud)</td><td>tail to primary (0.3R), short opens regardless of SM</td></tr>
                <tr><td>Macro tail re-grow (FRESH gate after 05-27 print)</td><td className="bear">HY OAS &gt; 2.85% OR 10Y &gt; 4.60% close on tomorrow&rsquo;s Tier-1 print</td><td>tail +0.1R toward primary</td></tr>
                <tr><td>Reclaim filter ratifies</td><td className="bull">SM net &gt; −5k sustained AND 10Y close &lt; 4.55% AND 1h close &gt; $76,568</td><td>scout long 0.2R (separate from re-engage book)</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the cycle 2 step lands in BJ 13–15 today as
                the base rate predicts. Direction is unpredictable
                (the lineage has produced re-stack / re-stack /
                two-leg cover / long-add / hybrid trim+add — every
                shape so far). Timing is near-deterministic
              </span>. Until the step prints (or until the 1h TD9
              BUY at $75,915 converts a real cover-bounce that lifts
              spot above $76,568 D-SMA150), this note runs as
              written: flat directional, macro tail held inside a
              structurally favorable expiry-gamma shift, squeeze
              framework cycle 1 closed and cycle 2 setup pending.
              The macro print today loosened on every line that
              matters; the BTC-internal break is endogenous — the
              fresh data point that broke the pin came from the
              position book, not the macro tape. The TradFi engine
              accelerated risk-on (NQ +4.11% 7d, JP225 +10.80% 7d,
              MOVE −3.5, HY OAS to 2.74%); BTC decoupled and went
              down. That divergence is the cleanest in the lineage
              and is the cleanest single read against
              &ldquo;BTC tracks macro risk-on&rdquo; in the past
              week.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit · 0 CRITICAL · 0 HIGH + 4 MED + 2 LOW all fixed)
            </span>
            <b>Codex CLI 0.132.0 ran the hostile audit cleanly — the
            empty-stdin pipe held, no TTY block.</b> Zero CRITICAL,
            zero HIGH; all 6 findings applied EN+ZH:{' '}
            (a) <b>F-01 · MED</b> &mdash; <em>funding path timestamps
            UTC/BJ inverted, minute-delta counts off-by-one</em>:
            funding magnitudes are right (live ×1095 = +10.95% ann,
            24h mean +7.15%, range +1.88% / +10.95% — no recurrence
            of the 05-15 ×100 landmine), but the path times in §I
            were labeled with BJ values stamped &ldquo;Z&rdquo;.
            Rewrote both languages: trough{' '}
            <code>2026-05-26 09:50Z (BJ 17:50)</code>, cap onset{' '}
            <code>2026-05-26 18:02Z (BJ 02:02 05-27)</code>; minute
            deltas <code>343 up / 365 down / 732 flat</code>{' '}
            (page v1 had 343/364/733); the &ldquo;funding trough
            ~5h after the SM trough&rdquo; framing was reversed —
            funding trough was ~5h <em>before</em> the SM trough.{' '}
            (b) <b>F-02 · MED</b> &mdash; <em>live-tape not atomic:
            premium/skew/windowed-flow values from the 00:09Z file
            tail while the note declared 00:08Z</em>: re-pinned all
            live-tape derived quantities to line 34169 (00:08Z)
            explicitly. Snap premium <code>−$120.10</code> (was
            −$108.26 from 00:09Z line 34170); skew snap{' '}
            <code>+37.1</code> (was +39.0); 24h windowed flow
            updated to {' '}
            <code>price Δ −1.71% · OI −660 · spot CVD +984 · fut CVD −288 · big-net −487 · taker-net −288</code>;
            4h to{' '}
            <code>price Δ −0.16% · OI +319 · spot CVD +1,818 · fut CVD −299 · big-net +4 · taker-net −299</code>;
            1h to{' '}
            <code>price Δ +0.14% · OI +15 · spot CVD +66 · fut CVD +99 · big-net +27 · taker-net +99</code>.
            Narrative shape preserved (24h spot-CVD-buying-into-drop
            still holds at +984; 1h fut CVD did flip from −299 to
            +99 — the &ldquo;futures-buyer joining&rdquo; reading
            stands).{' '}
            (c) <b>F-03 · MED</b> &mdash; <em>SM trough meta-tile
            timestamp UTC/BJ swap + sub-15k interval endpoints
            wrong</em>: dn-meta tile said{' '}
            <code>22:56Z (BJ 06:56)</code>; correct is{' '}
            <code>14:56Z (BJ 22:56)</code>. Sub-15k interval
            corrected from page-v1{' '}
            <code>BJ 22:53–23:48 / UTC 14:53–15:48</code> to actual{' '}
            <code>BJ 22:46–23:40 / UTC 14:46–15:40</code> (55 minutes
            duration preserved; endpoints corrected by 7-min). Both
            languages mirrored.{' '}
            (d) <b>F-04 · MED</b> &mdash; <em>MTF table unverifiable
            against current rolling source</em>: the page&rsquo;s
            00:01Z scan values can no longer be re-verified because{' '}
            <code>mtf_div_latest.html</code> has rolled forward to
            00:31Z at audit time (lineage from 05-22 F-02 / 05-23
            F-02 / etc.). Mitigation: archived the verbatim 00:01Z
            scan text in <code>audits/2026-05-27-desk-note.md</code>{' '}
            as the durable record of what the page describes.
            Manifest band already discloses this as a known
            rolling-artifact pinnability gap.{' '}
            (e) <b>F-05 · LOW</b> &mdash; <em>trade block said spot
            $95 above the new flip; that $95 belongs to a different
            comparison</em>: snap $75,954.99 vs new flip $75,830 is
            $125 above; the $95 figure in the v1 lead was a
            mis-carry from the prior-day step-entry math.
            Corrected to <code>$125 above the new 0γ flip $75,830</code>{' '}
            in trade-block thesis, and the lead reformulated to{' '}
            <code>$4 below the prior flip $75,959 — and $125 above
            the new flip $75,830</code>.{' '}
            (f) <b>F-06 · LOW</b> &mdash; <em>DXY delta direction
            wrong</em>: macro source says DXY 99.14 with Δ −0.18
            (risk-on slight ease), not +0.09. Corrected to
            <code>99.14 (−0.18) — eased slightly</code> in both
            prose and Tier-2 table. Tier-1/Tier-2 thaw narrative
            unaffected (DXY was a small line and the read is the
            same direction as HY OAS / MOVE / TIPS easing).{' '}
            Codex explicitly cleared: funding × 1095 magnitude (no
            ×100 landmine recurrence; pin funding 0.01000 × 1095 =
            +10.95%, 24h mean +7.15%, range +1.88% / +10.95%, cap
            run 367 records from BJ 02:02 05-27 to pin), GEX
            dual-reference sign-consistency (flip $75,830, total
            +29.9M, dist +0.16% off live spot $75,955 / +0.2% off
            Deribit-idx $75,992 — collapses cleanly), GEX walls
            and by-expiry strip (29MAY −30.65M flip from prior-day
            +23.83M; 26JUN +11.62M now heaviest positive expiry;
            $75k −39.90M heaviest single wall on chain; $80k top
            wall halved to +29.55M), MA matrix (D-SMA150 −0.80% /
            D-EMA50 −0.95% / D-EMA100 −1.11% / D-SMA50 −1.53% /
            D-EMA20 −1.97% / W-EMA20 −2.54% overhead cluster;
            W-SMA150/200 non-computable with 126 weekly bars;
            W-EMA150 / W-EMA200 seed values disclosed), 30D RV
            25.97% rounds to page 26.00%, claims-vs-loaded-data
            discipline (NTT / max-pain / strike-IV / BTC-NQ
            framework-only · IV chain-median across 882 instruments
            · cross-asset framed as 7d rolling not &ldquo;today&rdquo;),
            SM step chronology (single-bar hybrid step at 05-26
            05:56Z = BJ 13:56 spot $76,872, Δlong −3,049 / Δshort
            +924 / Δnet −3,973; sm_net trough −15,661 at 14:56Z =
            BJ 22:56 line 33617; 55-min sub-15k duration), the
            requireViewer gating pattern (both paths, first
            statement), index <code>&lt;li&gt;</code> additions
            (newest-first ordering, EN &ldquo;The long got cut and
            the flip cracked&rdquo; / ZH &ldquo;加多在簇顶被砍 ·
            flip 裂开&rdquo;), trade-book gating discipline (page
            calls out cluster-loses as &ldquo;functionally tripped&rdquo;
            and long-trim warning as &ldquo;fired in spirit&rdquo;
            rather than defending the prior thesis), and macro Tier-1
            thaw direction (10Y −1bp to 4.56%, TIPS −2bp to 2.16%,
            HY OAS to 2.74% with level refreshed but Δ field
            lagging-stale, MOVE 75.0 −3.48 — all in the loose
            direction; none of yesterday&rsquo;s re-grow gates
            fired in the right direction). Source audit record with
            full 00:01Z MTF scan archive at
            audits/2026-05-27-desk-note.md.{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1;
            Next 16.2.6 hard-exits on Node &lt; 20.9.0 at{' '}
            <code>node_modules/next/dist/bin/next:24-28</code>, so a
            full <code>next build</code> is environment-blocked
            (lineage from 05-21 / 05-22 / 05-23 / 05-24 / 05-25 / 05-26).{' '}
            <code>npx --no-install tsc --noEmit</code> returned exit 0
            (TypeScript clean) and is the build proxy.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for
            discussion among principals of Hysteresis Research and
            is{' '}
            <em>not investment advice, not a solicitation, not an
            offer</em>, and not personalized to any recipient&rsquo;s
            circumstances. Numbers reflect a single atomic snapshot
            (2026-05-27 00:08Z) with section-level provenance
            disclosed in the manifest band above; macro Tier-1 just
            thawed (first fresh print of the week landed in the
            late 05-26 US session; the dashboard render still flags
            stale-4d tags on a subset where the panel Δ field
            hasn&rsquo;t caught the refresh, but the level column
            updated). Levels, sizes, and conditions are illustrative
            of the desk&rsquo;s process, not standing recommendations.
            Past correlation, gamma, and positioning patterns do not
            bind future tape. Derivatives carry the risk of total
            loss and, where leveraged, loss exceeding deposited
            margin. <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The long got cut at the cluster ceiling. The flip
                cracked. The pin is broken; cycle 2 begins inside
                the next 24h.
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
            v2 · 2026-05-27 00:08Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
