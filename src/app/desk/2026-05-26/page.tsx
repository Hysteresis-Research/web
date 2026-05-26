import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// Internal-only route: not in public nav, not in sitemap, noindex/nofollow.
// Description deliberately anodyne — any future external share (Slack/email
// link preview) shows neutral text rather than dated trade specifics.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-05-26 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-05-26',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-05-26' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260526() {
  await requireViewer('/desk/2026-05-26');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · DESK NOTE · 2026-05-26 · v2</span>
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
              <span className="dn-big">$77,272</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.10%</span>
            </div>
          </div>

          {/* DATA PROVENANCE BAND */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-05-26 00:08Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-26 00:08Z (pinned)</td>
                  <td className="dn-flag">fresh · 1-min · file tail at audit time 00:09Z</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-05-26 00:01Z scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    ~7-min stale vs snapshot anchor · in-progress bar · scan
                    archived in audits/2026-05-26-desk-note.md
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 00:01Z snapshot</td>
                  <td className="dn-flag">
                    fresh · Deribit idx $77,365 vs live $77,272 · 884 inst
                    (was 930 · 25MAY 0DTE expired)
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
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-25 22:16Z render</td>
                  <td className="dn-flag">
                    ~1.9h render lag · FRED Tier-1 frozen at 05-22 print
                    (Memorial Day weekend; panel itself now flags 10Y / TIPS /
                    HY OAS / US-JP &ldquo;stale 4d&rdquo;) · first fresh Tier-1
                    expected this US session
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-05-26 00:06Z</td>
                  <td className="dn-flag">
                    ~2-min stale vs snapshot anchor · offsets recomputed vs live spot
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
              <span className="dn-v bear">+8.54%</span>
              <span className="dn-src">live · 00:08Z · 24h mean +4.16% · long-pay re-loaded late</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+7.12% → +8.54%</span>
              <span className="dn-src">range +1.36% / +9.15% · trough 15:52Z · 493 up · 455 down · 492 flat</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">+0.78% (+770 BTC)</span>
              <span className="dn-src">live · long_btc +4.61k (add); short_btc −0.30k (flat)</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v">50.21 / 49.79</span>
              <span className="dn-src">live_db `mkt_long_pct` · uncrowded further 53.96 → 50.21 (at parity)</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−8.8k (net SHORT)</span>
              <span className="dn-src">live · long 15.66k − short 24.46k · highest (least short) in 4-day lineage</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 05-25 note</span>
              <span className="dn-v bull">−13.7k → −8.8k (+4.91k less short)</span>
              <span className="dn-src">peak −8.79k @ 2026-05-25 22:26Z · step at 05-25 06:36Z (BJ 14:36) +3.82k longs</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.4% / 25.84%</span>
              <span className="dn-src">GEX median IV · 884 inst.</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+1.73% (above)</span>
              <span className="dn-src">flip $75,959 · aggregate GEX +78.2M (was +65.1M)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              Yesterday&rsquo;s &ldquo;stand-aside continues&rdquo; call was
              right on the letter <span className="dn-em">—</span>{' '}
              <span className="dn-signal">
                zero of the seven decision conditions tripped
              </span>{' '}
              (no 1h close &gt; $78,049 cluster top, no 1h close &lt; $75,969
              flip, no discrete SM step ≤ −5k, no 1d break of the $75.1k
              cloud, no HY-OAS or 10Y re-grow on a frozen FRED panel, no
              reclaim-filter ratify). Spot pinned in a{' '}
              <span className="dn-tag">$936 24h range</span> (
              <span className="dn-tag">$76,930</span> @ 2026-05-25 01:59Z
              (BJ 09:59) → <span className="dn-tag">$77,866</span> @
              2026-05-25 15:13Z (BJ 23:13)) and closed the window at
              <span className="dn-tag"> $77,272</span> live (+0.10% on
              24h). Underneath, the state changed in one specific way:{' '}
              <span className="dn-signal">
                SM moved less short for a second consecutive day — but via
                long-add, not short-cover
              </span>
              . A single discrete step at{' '}
              <span className="dn-tag">2026-05-25 06:36Z (BJ 14:36)</span>{' '}
              with spot <span className="dn-tag">$77,367.50</span> opened{' '}
              <span className="dn-tag">+3,819 BTC of longs</span> (long
              book 11,564 → 15,383) in a single minute; short_btc moved
              just <span className="dn-tag">−285 BTC</span> (24,587 →
              24,302, near-flat). Net SM walked{' '}
              <span className="dn-tag">−13,022 → −8,919</span> in that
              one minute, then drifted further to the 24h peak (least
              short) of <span className="dn-tag">−8,789 BTC</span> at
              <span className="dn-tag"> 2026-05-25 22:26Z (BJ 06:26)</span>,
              snapshot read{' '}
              <span className="dn-tag">−8,801 BTC</span>. Four-day step
              cadence intact: 05-22 06:30Z re-stack, 05-23 05:00Z
              re-stack, 05-24 05:11Z + 05:16Z two-leg cover (short-close
              + long-open), 05-25 06:36Z one-leg long-add only — same
              Beijing-afternoon window each time, fourth consecutive day.
              The price did the same thing as 05-24:{' '}
              <span className="dn-signal">it didn&rsquo;t follow</span>.
              From the step location $77,367, spot ran +$499 to $77,866
              and is now $95{' '}
              <span className="dn-em">below</span> the step ($77,272 live).
              The fresh +3,819 BTC long-add is roughly $0.36M underwater
              at snapshot vs the step entry (the whole post-step 15,383
              BTC long book, marked at step price as an upper bound,
              ~$1.46M). <span className="dn-em">
                The cover continued. The shorts did not close. SM is
                hedging, not unwinding. The squeeze fuel from 05-23&rsquo;s
                record short book is technically still loaded (short book
                24.46k vs 33.5k peak — drained 27% — vs the prior cover
                bar that closed −9.9k of shorts in one minute) — what got
                drained is the long-imbalance side. Net SM at −8.8k is the
                highest (least short) reading of the 4-day lineage; the
                short side at 24.5k is still substantially loaded.
              </span>
            </p>

            <p>
              BTC prints <span className="dn-tag">$77,272</span> live,
              +0.10% on 24h, +1.73% above the new{' '}
              <span className="dn-tag">0-γ flip $75,959</span> (drifted
              down $10 from yesterday&rsquo;s $75,969 — essentially flat).
              The MA cluster shifted slightly:{' '}
              <span className="dn-tag">D-SMA50 $77,080 (+0.25%)</span>,{' '}
              <span className="dn-tag">D-EMA100 $76,852 (+0.55%)</span>,{' '}
              <span className="dn-tag">D-EMA50 $76,770 (+0.65%)</span>,{' '}
              <span className="dn-tag">D-SMA150 $76,657 (+0.80%)</span>{' '}
              cluster sit just below spot (D-EMA50 has crossed from above
              spot yesterday to below today);{' '}
              <span className="dn-tag bear">D-EMA20 $77,774 (−0.64%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $78,062 (−1.01%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $78,276 (−1.28%)</span>,{' '}
              <span className="dn-tag bear">D-SMA20 $78,634 (−1.73%)</span>{' '}
              cluster just above. Aggregate dealer gamma got{' '}
              <span className="dn-signal">heavier</span>:{' '}
              <span className="dn-tag bull">+78.2M/1%</span> (was +65.1M —
              gained $13.1M, more dampening). The $80k call wall thickened
              to <span className="dn-tag bull">+53.92M</span> (was +51.30M).
              The negative pocket below cluster shifted shape:{' '}
              <span className="dn-tag bear">$76k −12.67M</span> (was −8.75M
              — heavier negative by $3.9M, right at the step location),{' '}
              <span className="dn-tag bear">$74k −11.03M</span> (was
              −8.90M — heavier),{' '}
              <span className="dn-tag bear">$75k −23.14M</span> (was −27.06M
              — eased $3.9M). Funding cooled hard mid-window (24h trough{' '}
              <span className="dn-tag">+1.36% ann at 15:52Z</span>) then
              re-loaded into the late session to a 24h peak of{' '}
              <span className="dn-tag">+9.15%</span> at 23:17Z; live at{' '}
              <span className="dn-tag">+8.54% ann</span>, 1h mean +8.98%,
              24h mean <span className="dn-tag">+4.16%</span> (a much
              cooler 24h than 05-25&rsquo;s +8.90% mean). OI grew{' '}
              <span className="dn-tag bull">+770 BTC (+0.78%)</span> on
              24h — the structural footprint of the +4.61k SM longs added
              (with non-SM net selling some of the imbalance).{' '}
              <span className="dn-em">
                Read it straight: the cover continued via long-add; spot
                couldn&rsquo;t take the cluster top; the dealer book
                thickened around current price (the cover&rsquo;s upside
                ceiling is $80k +53.92M and the floor at $76k got heavier
                negative); shorts remain loaded; funding cooled then
                re-heated. The pin is wider but the dealer book is heavier;
                the position book is now long-loaded rather than
                short-loaded. The next variable is whether SM trims the
                fresh long without closing the short (would re-stack net
                short fast) or whether the long catches a clean break of
                $77,774 (would force a long re-engage gate).
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · the long-add that didn&rsquo;t move price</span>
            </h2>

            <p>
              The long-add step is the cell on the page. At{' '}
              <span className="dn-tag">2026-05-25 06:36Z (BJ 14:36)</span>{' '}
              with spot <span className="dn-tag">$77,367.50</span> (pre-step
              06:35Z spot $77,360.58 with long_btc 11,564), long_btc jumped
              in a single minute from <span className="dn-tag">11,564</span>{' '}
              to <span className="dn-tag">15,383</span> — +3,819 BTC of
              longs opened; short_btc moved only from{' '}
              <span className="dn-tag">24,587</span> to{' '}
              <span className="dn-tag">24,302</span> (−285 BTC, near-flat).
              Net SM moved <span className="dn-tag">−13,022</span> →{' '}
              <span className="dn-tag">−8,919</span> in that one minute.
              Post-step 06:37Z: long held 15,383, short held 24,302, net
              −8,919, spot $77,420. This is qualitatively different from
              the 05-24 cover, which was a two-leg sequence{' '}
              <span className="dn-em">five minutes apart</span> with a
              +5.2k long opening leg followed by a −9.9k short-cover leg
              (both legs participating, short book ratcheted down to 23.6k);
              today&rsquo;s 06:36Z is a single-bar one-leg long-add at
              the same Beijing-afternoon window, and the short book
              <span className="dn-em"> barely moved</span>. From the
              −8.92k step trough, SM held above −10k for{' '}
              <span className="dn-tag">668 minutes (~11.1h)</span> of the
              following 24h window (vs 189 min on 05-24, ~3.5× more
              durable) and printed a 24h peak (least short) of{' '}
              <span className="dn-tag">−8,789</span> at{' '}
              <span className="dn-tag">2026-05-25 22:26Z (BJ 06:26)</span>{' '}
              with spot $77,362 — almost the same spot as the step bar,
              16 hours later. Snapshot SM is{' '}
              <span className="dn-tag">−8,801 BTC</span> — net is{' '}
              ~12 BTC <em>more</em> short than the 22:26Z peak (essentially
              flat to peak) and +118 BTC less short than the 06:36Z step
              bar over the ~17.5 hours since. <span className="dn-em">
                The cover happened — again. The price did not convert —
                again. Spot ran $499 above the step location ($77,367 →
                $77,866 at 23:13 BJ), got rejected at the wider cluster
                top, retraced to $77,272 — net $95 below the step entry.
                Marking the fresh +3,819 BTC long-add against the
                $77,367 step entry, the new add is ~$0.36M underwater at
                snapshot; if the entire post-step 15,383 BTC long book
                is anchored to the step price (the rest pre-existed at
                varying basis, so this is an upper bound), book-mark is
                ~$1.46M underwater. The position book absorbed the long-add
                without paying out, exactly as it absorbed the cover on
                05-24.
              </span>
            </p>

            <p>
              The leverage side ratifies a confused outcome. Funding live{' '}
              <span className="dn-tag">+8.54% ann</span> — endpoint
              looks higher than yesterday&rsquo;s +7.12% snapshot
              (+1.42pt at the comparison points) only by accident of
              window: through the 24h itself, funding dropped from +7.12%
              to a trough of <span className="dn-tag">+1.36% at
              15:52Z</span> (BJ 23:52, 9.5h after the step), then climbed
              steadily through the late session to peak{' '}
              <span className="dn-tag">+9.15% at 23:17Z</span>, back to{' '}
              +8.54% now. <span className="dn-em">
                Read the path, not the endpoints: the long-add cooled
                long-pay sharply (funding −5.8pt from snapshot to trough)
                as new longs were already filled, but the late session
                re-loaded funding hard (+7.8pt from trough to peak) as
                more longs chased the bounce off $77,400 toward the high
              </span>. 24h mean ann{' '}
              <span className="dn-tag">+4.16%</span> — meaningfully cooler
              than 05-25&rsquo;s +8.90% mean; minute deltas{' '}
              <span className="dn-tag">493 up / 455 down / 492 flat</span>{' '}
              (net 38 ups). OI{' '}
              <span className="dn-tag bull">+770 BTC (+0.78%)</span> over
              24h: the +4.61k SM longs added, +0.30k short side cover
              (smaller leg), but the net OI gain is only +0.77k — meaning
              non-SM accounts net closed ~3.9k of positions into the void
              the SM longs filled. Retail{' '}
              <span className="dn-tag">mkt_long_pct 50.21%</span> from
              53.96% — at parity now, the most uncrowded read of the
              lineage. Perp trades a{' '}
              <span className="dn-tag bear">−$59.74 discount</span> to spot
              (1h mean −$72, range −$92 / −$43; 24h mean −$81, range
              −$180 / −$2) — discount narrowed from yesterday&rsquo;s −$88
              snapshot but the basis remains structurally negative;{' '}
              <span className="dn-em">
                positive funding sits on top of a negative perp basis still
                — same divergence as 05-25 (long perp positioning paid by
                rolling cost, not by a tradable spread), slightly less
                stretched today as the basis narrowed
              </span>. 1-minute aggressor skew snapshot{' '}
              <span className="dn-tag bear">−18.7</span> (1h mean +4.4,
              range −36 / +36; 24h mean +2.4 — point not window).
            </p>

            <p>
              Windowed flow inverts again. 24h: price{' '}
              <span className="dn-tag bull">+0.10%</span>, OI{' '}
              <span className="dn-tag bull">+770 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +171</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +845</span>, big-print{' '}
              <span className="dn-tag bull">+1,210 BTC / 786 prints</span>,
              taker-net <span className="dn-tag bull">+852</span> —{' '}
              <span className="dn-em">
                today is a futures-led day, exactly inverted from
                yesterday&rsquo;s spot-led pattern: futures CVD did 5×
                the work of spot CVD (+845 vs +171). That fits the
                long-add story — SM&rsquo;s new 3,819 BTC of perp longs
                are the futures-side print, while spot did almost nothing
              </span>. 4h (into the snapshot): price{' '}
              <span className="dn-tag bear">−0.24%</span>, OI{' '}
              <span className="dn-tag bull">+105 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +203</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +344</span>, big-print{' '}
              <span className="dn-tag bear">−87 BTC / 107 prints</span>,
              taker-net <span className="dn-tag bull">+350</span> —
              futures still leading. 1h: price{' '}
              <span className="dn-tag">−0.01%</span>, OI{' '}
              <span className="dn-tag bear">−13 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +240</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +92</span>, big-print{' '}
              <span className="dn-tag bull">+58 BTC / 30 prints</span>,
              taker-net <span className="dn-tag bull">+102</span> —{' '}
              <em>spot</em> took over the leadership in the last hour, the
              futures lead is fading. Read it straight: the 24h shape is{' '}
              <span className="dn-signal">
                futures-led for the long-add window, spot-following in
                the last hour
              </span>; the day&rsquo;s $936 range was carried by perp
              positioning early (long add at $77,367) and by spot bid late
              (small bid into $77,272). No clean directional volume
              signature — both sides participated, both sides absorbed.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · 1h death cross fresher · 4h lost cloud · cluster slightly looser</span>
            </h2>

            <p>
              The MTF structure today is a{' '}
              <span className="dn-signal">
                split-but-walked-forward map: the mid-TF water-down golden
                crosses from 05-25 (4h / 8h / 12h) are still in but aging
                without ratification, the 1h water-up death cross got
                fresher (6b vs 10b yesterday), the 4h just lost its cloud
                base (now 云下 1b), and a fresh 15m water-down golden
                cross printed (1b) at the very fast TF
              </span>. RSIs: 15m <span className="dn-tag">47.2</span>,
              30m <span className="dn-tag">47.5</span>, 1h{' '}
              <span className="dn-tag">51.5</span>, 4h{' '}
              <span className="dn-tag">54.3</span>, 8h{' '}
              <span className="dn-tag">50.2</span>, 12h{' '}
              <span className="dn-tag">47.7</span>, 1d{' '}
              <span className="dn-tag">48.2</span> — all near 50, slightly
              cooler than yesterday&rsquo;s 60s on the fast TFs. Cloud
              picture: 15m below cloud 11b (↑ $77.5k); 30m above cloud 2b
              (↓ $77.3k); 1h above cloud 26b (↓ $76.7k); 4h{' '}
              <span className="dn-em">just lost cloud</span> 云下 1b (↑
              $77.4k); 8h below cloud 30b (↑ $79.3k); 12h below cloud 7b
              (↑ $78.2k); 1d above cloud 40b (↓ $75.1k); 3d in cloud
              (73.5k–92.4k); 1w below cloud 17b (↑ $100.3k); 1M above
              cloud 27b. <span className="dn-em">
                The 4h cloud loss is the lone fresh marginal bear datum
                — but only by 1 bar and only by ~$100 (4h cloud top is
                $77.4k, close $77,298, spot $77,272). The 1h death cross
                printed at 05-25 18:00Z (BJ 02:00) at DIF +212.4 — it&rsquo;s
                an &ldquo;early death cross above water&rdquo; (multi-TF
                trader probe, not a regime flip). The 15m fresh bull
                cross is a probe in the opposite direction at the fastest
                TF. None of these prints individually ratifies a
                direction; together they spell &ldquo;coil indecision
                continues&rdquo; — same skeleton as 05-25, slightly more
                bearish-tilted by the 4h cloud loss and the fresher 1h
                death cross.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">77,298</td><td className="num">47.2</td><td className="bull">golden (water-dn) 1b · 刚印</td><td className="bear">below ↑77.5k 11b</td><td>Sell 3</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">77,298</td><td className="num">47.5</td><td className="bear">death (water-up) 13b</td><td className="bull">above ↓77.3k 2b</td><td>Sell 1</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">77,298</td><td className="num">51.5</td><td className="bear">death (water-up) 6b</td><td className="bull">above ↓76.7k 26b</td><td>Sell 1</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">77,298</td><td className="num">54.3</td><td className="bull">golden (water-dn) 12b</td><td className="bear">below ↑77.4k 1b · 刚失</td><td>Buy 2</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">77,298</td><td className="num">50.2</td><td className="bull">golden (water-dn) 6b</td><td className="bear">below ↑79.3k 30b</td><td>Sell 7</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">77,298</td><td className="num">47.7</td><td className="bull">golden (water-dn) 3b</td><td className="bear">below ↑78.2k 7b</td><td>Sell 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1d</td><td className="num">77,298</td><td className="num">48.2</td><td className="bear">death (water-up) 14b</td><td className="bull">above ↓75.1k 40b</td><td>Sell 1</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">77,298</td><td className="num">51.9</td><td className="neut">—</td><td className="neut">in cloud 73.5–92.4k 8b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">77,298</td><td className="num">46.2</td><td className="bull">golden (water-dn) 6b</td><td className="bear">below ↑100.3k 17b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">77,295</td><td className="num">49.1</td><td className="neut">—</td><td className="bull">above ↓46.9k 27b</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (rolling latest
                    file; archived verbatim in audits/2026-05-26-desk-note.md).
                    Header alert: <em>15m water-down golden cross 刚印
                    (1b)</em> — fresh bull probe at fastest meaningful TF.
                    Counter-signal: <em>1h water-up death cross 6b
                    ago</em> — fresher than 05-25 (was 10b), early death
                    cross at the engine TF, opposite direction. Marginal:
                    <em> 4h lost cloud base 1b ago</em> — first 4h cloud
                    break since the 05-24 mid-TF bull turn. No active
                    ⚡TD9. Closes are in-progress bars; treat every value
                    as provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix has loosened a little and shifted shape. Three
              Daily MAs cluster within{' '}
              <span className="dn-tag">$615 below spot</span>, four MAs
              cluster within{' '}
              <span className="dn-tag">$1,362 above</span>:{' '}
              <span className="dn-signal">
                below — D-SMA50 $77,080 (+0.25%), D-EMA100 $76,852
                (+0.55%), D-EMA50 $76,770 (+0.65%, crossed from above
                spot yesterday to below today), D-SMA150 $76,657 (+0.80%);
                above — D-EMA20 $77,774 (−0.64%, crossed the other way
                yesterday → today), W-EMA20 $78,062 (−1.01%), W-EMA150
                $78,276 (−1.28%), D-SMA20 $78,634 (−1.73%)
              </span>. Next overhead ladder:{' '}
              <span className="dn-tag bear">D-EMA150 $79,029 (−2.22%)</span>,
              then the{' '}
              <span className="dn-tag bear">D-SMA200/EMA200 $80,270 / $81,423
              (−3.73% / −5.10%)</span> ceiling. Below the cluster: thin
              shelf at{' '}
              <span className="dn-tag bull">W-SMA20 $74,332 (+3.96%)</span>,
              then the long runway{' '}
              <span className="dn-tag bull">W-EMA200 $73,737 (+4.79%)</span>{' '}
              / <span className="dn-tag bull">D-SMA100 $72,846 (+6.08%)</span>{' '}
              cycle anchor. Far above and disused: W-EMA50{' '}
              <span className="dn-tag bear">$84.9k (−9.01%)</span>,
              W-EMA100 <span className="dn-tag bear">$83.3k (−7.23%)</span>,
              W-SMA100 <span className="dn-tag bear">$88.4k (−12.55%)</span>,
              W-SMA50 <span className="dn-tag bear">$93.4k (−17.30%)</span>.{' '}
              <span className="dn-em">
                W-SMA150 / W-SMA200 still not computable — parquet history
                holds 126 weekly bars, short of both windows; W-EMA150
                $78,276 (−1.28%) and W-EMA200 $73,737 (+4.79%) show
                because the EMA seeds from available history. All MAs
                anchored to parquet last bar 2026-05-26 00:06Z (close
                $77,239); offsets recomputed against live spot $77,272.
                Displayed MA levels are $-rounded; offsets are computed
                from exact series values. The pin shifted: yesterday&rsquo;s
                cluster top was D-EMA50 $77,813 (−0.79%) / W-EMA20 $78,049
                (−1.09%) at $235 apart; today the cluster top is D-EMA20
                $77,774 (−0.64%) / W-EMA20 $78,062 (−1.01%) at $288 apart
                — the wall moved $35 closer at the bottom (D-EMA20 vs
                D-EMA50 yesterday) and $13 further at the top. Bottom of
                the cluster moved $69 lower today (D-SMA150 $76,657 vs
                $76,726 yesterday); total cluster span widened $84.
              </span>{' '}
              The cluster-top wall the long-add would have needed to take
              to convert is now <span className="dn-tag bear">D-EMA20
              $77,774</span> on a 1h close (was $77,813 D-EMA50 yesterday)
              — the 24h high of $77,866 punched <span className="dn-em">
              into</span> this level at 23:13 BJ but did not produce a 1h
              close above (the 23:00Z 1h close was $77,680, the 22:00Z
              close $77,345 — neither cleared D-EMA20 on close).
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · GEX +78.2M heavier · flip flat · $76k pocket weighs more · 25MAY expired</span>
            </h2>

            <p>
              Dealer gamma <span className="dn-em">thickened</span>:{' '}
              <span className="dn-tag bull">+78.2M/1%</span> (was +65.1M
              yesterday, gained +$13.1M — deeper into the dampening
              regime). 0-γ flip{' '}
              <span className="dn-tag">drifted down $10 to $75,959</span>
              {' '}(was $75,969 — essentially flat). Spot $77,272 sits{' '}
              <span className="dn-tag bull">+1.73% above flip</span> on
              spot-denominated math; the GEX file&rsquo;s own
              &ldquo;dist to flip&rdquo; reads <span className="dn-em">
              +1.8%</span> off Deribit-index $77,365 (idx $93 above live
              spot; both references say the same direction, dual reference
              agrees on sign within rounding). Above the flip dealers are
              long gamma — hedging flows <span className="dn-em">dampen</span>
              {' '}the next move, the same dealer book that capped the
              long-add at $77,866 and pinned the round-trip inside $936.
              The positive ceiling thickened on the load-bearing walls:{' '}
              <span className="dn-tag bull">$80k +53.92M</span> (was
              +51.30M — gained +$2.6M, the heaviest single wall on the
              chain),{' '}
              <span className="dn-tag bull">$82k +19.83M</span> (was
              +19.55M),{' '}
              <span className="dn-tag bull">$78k +10.06M</span> (was
              +13.14M — <span className="dn-em">eased</span>: $78k positive
              eased while $76k negative weighted, the dealer book at the
              cluster shifted lower),{' '}
              <span className="dn-tag bull">$90k +9.55M</span> (was +8.83M),{' '}
              <span className="dn-tag bull">$85k +9.50M</span> (was +9.55M),{' '}
              <span className="dn-tag bull">$79k +8.19M</span> (new in top
              ten — direct cluster-top reinforcement),{' '}
              <span className="dn-tag bull">$81k +7.80M</span>. The
              negative pocket below cluster <span className="dn-em">
              shifted shape</span>:{' '}
              <span className="dn-tag bear">$75k −23.14M</span> (was
              −27.06M — eased $3.9M),{' '}
              <span className="dn-tag bear">$76k −12.67M</span> (was −8.75M
              — <span className="dn-em">heavier negative by $3.9M</span>,
              right at where the cover step printed),{' '}
              <span className="dn-tag bear">$74k −11.03M</span> (was
              −8.90M — heavier),{' '}
              <span className="dn-tag bear">$60k −7.80M</span> crash-put
              residual essentially flat. By-expiry: 25MAY 0DTE expired{' '}
              <span className="dn-tag">−9.21M</span> yesterday (the
              negative front pocket cleared as predicted); 26MAY 0DTE is{' '}
              <span className="dn-tag bull">+1.68M</span> (today&rsquo;s
              expiry, positive net),{' '}
              <span className="dn-tag bull">27MAY 1.3DTE +3.00M</span>,{' '}
              <span className="dn-tag bull">28MAY 2.3DTE +0.61M</span>,{' '}
              <span className="dn-tag bull">29MAY 3.3DTE +23.83M</span>{' '}
              (was +24.48M — eased $0.65M as DTE shortens, still the
              heaviest expiry on the entire by-expiry strip),{' '}
              <span className="dn-tag bull">5JUN 10.3 +8.01M</span> (was
              +6.85M),{' '}
              <span className="dn-tag bull">12JUN 17.3 +6.06M</span> (was
              +4.91M),{' '}
              <span className="dn-tag bull">26JUN 31.3 +16.54M</span> (was
              +15.62M).
            </p>

            <p>
              Read it straight:{' '}
              <span className="dn-signal">
                the dealer regime that pinned 05-25 is unchanged in shape
                but heavier in weight and shifted toward amplifying below
                cluster
              </span>. +78.2M is now firmly above the +65–67M coil reads
              of 05-22 / 05-25 — the heaviest dampening regime in the
              4-day lineage. The MA-cluster pin (§II) gets more dealer
              support on the ceiling and a different reading on the floor:
              spot wedged between a heavier long-gamma overhead ($78k
              +10.06M, $79k +8.19M, $80k +53.92M, $82k +19.83M, $85k
              +9.50M) and a <span className="dn-em">heavier</span>{' '}
              negative-gamma floor at $76k −12.67M (right at the step
              location) with the $74–75k −34.2M shelf still loaded. The
              cluster top wall is <span className="dn-tag bull">$80k
              +53.92M</span> — the strongest single ceiling in lineage; a
              break above $77,774 D-EMA20 puts dealers selling into the
              move toward $80k. A break below $76k now meets a thicker
              negative-gamma pocket than yesterday — amplifies the down
              path slightly more. <span className="dn-em">
                Net shape: ceiling thickened and pulled the floor of the
                positive shelf in from $78k → $79k (small contraction);
                the negative-gamma floor heavied at $74–76k. The dealer
                map argues for a continued pin with marginally more
                amplification on a break either direction; less likely to
                drift, more likely to step if it does
              </span>. IV median across 884 instruments is{' '}
              <span className="dn-tag">42.4%</span> (was 42.5% — flat)
              against 30D close-to-close RV of{' '}
              <span className="dn-tag">25.84%</span> (was 26.26% yesterday
              — eased) — chain-level richness{' '}
              <span className="dn-tag">~+16.6pt</span> (essentially flat to
              05-25). A chain-median across N instruments,{' '}
              <span className="dn-em">not</span> a tradable spread;
              expiry- / strike-level vega, skew and term structure remain
              not loaded; the vol read stays framework-only. 884
              instruments today vs 930 yesterday — the 46-instrument drop
              is roughly the size of the 25MAY 0DTE chain that expired.
              RV methodology: 30D close-to-close, logret.std × √365 × 100
              on the last 30 daily closes anchored to parquet last bar
              2026-05-26 00:06Z.
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · FRED frozen 4th day · Memorial Day passed · first fresh print incoming</span>
            </h2>

            <p>
              <span className="dn-signal">
                Macro is structurally identical to 05-25 — FRED Tier-1
                frozen for a fourth day after Memorial Day Monday
              </span>. Dashboard render is 2026-05-25 22:16Z, ~1.9h before
              the snapshot. The macro panel itself now flags{' '}
              <span className="dn-tag stale">stale 4d episodic</span>{' '}
              tags on US 10Y, 10Y TIPS real, HY OAS, and US-JP 10Y spread
              — the panel knows it&rsquo;s frozen. US 10Y nominal{' '}
              <span className="dn-tag">4.57% (0.0bp)</span> — flat, still
              2bp above the 4.55% reclaim-long filter floor. 10Y TIPS real{' '}
              <span className="dn-tag">2.18% (+5.0bp stale)</span>, 5Y5Y
              BE inflation{' '}
              <span className="dn-tag">2.26% (+5.0bp stale)</span>, HY OAS{' '}
              <span className="dn-tag bull">2.78% (−2.0bp stale)</span>,
              MOVE bond vol{' '}
              <span className="dn-tag">78.4 (−1.29 stale)</span>, Fed net
              liquidity{' '}
              <span className="dn-tag bull">$5.907T (+0.030T stale)</span>{' '}
              — all identical to 05-25 (and to 05-24 before that). DXY{' '}
              <span className="dn-tag">99.05 (−0.27 stale)</span> — also
              frozen from the Friday print. USD/JPY{' '}
              <span className="dn-tag">158.88 (−0.14 stale)</span>. The
              slow regime z-scores remain extreme — 10Y{' '}
              <span className="dn-tag bear">+2.24</span>, TIPS{' '}
              <span className="dn-tag bear">+2.26</span>, JGB{' '}
              <span className="dn-tag bear">+2.55</span>, EXTREME RISK-OFF
              flags intact — but no fresh datapoint changed today. Episodic
              z-scores are the same as 05-25 (10Y +1.52, TIPS +2.47, Fed
              liq +2.16, US-JP spread +1.52).{' '}
              <span className="dn-em">
                The credit / rates filter remains: HY OAS 2.78% is ~22bp
                from the 3.0% re-grow gate; the reclaim-long rates filter
                (10Y &lt; 4.55%) is still 2bp away; nothing else moved.
                Today is the first day since Memorial Day Monday that US
                bond markets are open — the next FRED Tier-1 refresh
                lands during this US session and is the first fresh macro
                input in four days. That print is the only macro variable
                today that can break the pin from outside the BTC book.
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
                <tr><td>US 10Y nominal</td><td className="num">4.57%</td><td className="num stale">0.0bp (stale 4d)</td><td className="num bear">+2.24</td><td className="num bear">+1.52</td><td className="bear">risk-off · panel flagged stale</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.18%</td><td className="num stale">+5.0bp (stale 4d)</td><td className="num bear">+2.26</td><td className="num bear">+2.47</td><td className="bear">tight · panel flagged stale</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.26%</td><td className="num stale">+5.0bp (stale)</td><td className="num">+0.35</td><td className="num">+0.47</td><td className="neut">no tag · panel Δ frozen</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num bull stale">−2.0bp (stale 4d)</td><td className="num bull">−0.98</td><td className="num bull">−1.02</td><td className="bull">loose · panel flagged stale</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num stale">−0.523</td><td className="num stale">−0.01 (stale 10d)</td><td className="num bull">−0.48</td><td className="num bull">−1.35</td><td className="stale">stale 10d · neutral</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">78.4</td><td className="num stale">−1.29 (stale)</td><td className="num">+0.11</td><td className="num">+1.01</td><td className="neut">vol eased · panel Δ frozen</td></tr>
                <tr><td>DXY</td><td className="num">99.05</td><td className="num stale">−0.27 (stale)</td><td className="num">+0.63</td><td className="num bear">+1.16</td><td className="neut">tight · panel Δ frozen</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.907T</td><td className="num bull stale">+0.030T (stale)</td><td className="num bull">+0.77</td><td className="num bull">+2.16</td><td className="bull">loose · surge episodic</td></tr>
                <tr><td>USD/JPY</td><td className="num">158.88</td><td className="num stale">−0.14 (stale)</td><td className="num bear">+1.16</td><td className="num">+0.37</td><td className="neut">panel Δ frozen</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.06%</td><td className="num stale">0.0bp (stale 4d)</td><td className="num bull">−0.65</td><td className="num bear">+1.52</td><td className="bear">tight episodic · panel flagged stale</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7940</td><td className="num bull stale">−0.01 (stale)</td><td className="num bull">−1.82</td><td className="num bull">−1.35</td><td className="neut">no tag · panel Δ frozen</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.353</span> (loosened further
              from 05-25&rsquo;s 0.384 — still NORMAL band). BTC&rsquo;s
              listed ties: NQ <span className="dn-tag">+0.600</span>
              {' '}(was +0.663), SILVER{' '}
              <span className="dn-tag">+0.569</span> (was +0.556 — now
              BTC&rsquo;s second-strongest tie), SP500{' '}
              <span className="dn-tag">+0.557</span> (was +0.621), CL{' '}
              <span className="dn-tag">−0.541</span> (was −0.605 — eased
              but still strong negative), AMZN{' '}
              <span className="dn-tag">+0.468</span>, NVDA{' '}
              <span className="dn-tag">+0.465</span> (was +0.551 — eased),
              BRENT <span className="dn-tag">−0.456</span>, GOLD{' '}
              <span className="dn-tag">+0.445</span>, META{' '}
              <span className="dn-tag">+0.422</span>, TSLA{' '}
              <span className="dn-tag">+0.380</span>. 7d relative
              performance:{' '}
              <span className="dn-tag bull">BTC +0.19%</span> (turned
              positive from 05-25&rsquo;s −0.16%), NQ{' '}
              <span className="dn-tag bull">+2.75%</span>, SP500{' '}
              <span className="dn-tag bull">+1.75%</span>, JP225{' '}
              <span className="dn-tag bull">+7.36%</span> (
              <span className="dn-em">accelerated</span> from +5.16% — the
              standout single index), NVDA{' '}
              <span className="dn-tag bear">−2.10%</span>, AAPL{' '}
              <span className="dn-tag bull">+3.96%</span>, TSLA{' '}
              <span className="dn-tag bull">+4.82%</span>, AMZN{' '}
              <span className="dn-tag bull">+1.77%</span>, GOOGL{' '}
              <span className="dn-tag bear">−3.78%</span> (deteriorated
              from −2.04%); metals mixed — GOLD{' '}
              <span className="dn-tag bear">−0.23%</span> (turned negative
              from +1.23%), SILVER{' '}
              <span className="dn-tag">−0.01%</span> (flat from +3.72%),
              PALL <span className="dn-tag bear">−2.11%</span>, PLAT{' '}
              <span className="dn-tag bear">−0.99%</span>, COPPER{' '}
              <span className="dn-tag bull">+2.21%</span>; energy still
              collapsed — CL <span className="dn-tag bear">−10.65%</span>,
              BRENT <span className="dn-tag bear">−9.30%</span> (slightly
              recovered from −9.97%), NGAS{' '}
              <span className="dn-tag bear">−4.68%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the index complex narrowed from
                ~−3.0pt (yesterday) to ~−2.6pt today (BTC +0.19% vs NQ
                +2.75%, SP500 +1.75%) — partial catch-up continues.
                Single-name drag stayed dispersed (NVDA −2.10% vs −1.30%
                deteriorated, GOOGL −3.78% vs −2.04% deteriorated, AAPL /
                TSLA / AMZN all stronger). Metals broke pattern (GOLD
                flipped to slightly negative, SILVER turned flat from
                strong gain). Energy collapse continues, slightly less
                deep on BRENT only. Japan strength accelerated to +7.36%
                — BTC-JP225 +0.218 correlation low so read-through is
                weak but directionally aligned with the cluster pin&rsquo;s
                continued hold
              </span>. JGB monthly 2.52% carries EXTREME RISK-OFF monthly
              tag — do not lean on it. USD/JPY 158.88, frozen.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · stand-aside vindicated again · long-add changes the watch list</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 05-25 stand-aside book is vindicated again — zero of
                seven decision conditions tripped over the past 24h
              </span>. Cluster-top reclaim (1h close &gt; $78,049 AND SM
              not re-stacked &lt; −20k inside 4h): no 1h close cleared
              $78,049 (highest 1h close was $77,694.5 at{' '}
              <span className="dn-tag">17:00Z (BJ 01:00)</span>, the
              24h-high spot $77,866 punched but didn&rsquo;t close);
              reclaim-harder (1h close &gt; $79,050): never came close;
              cluster-loses (1h close &lt; $75,969 AND SM &lt; −18k): never
              came close (1h close low $76,919.7 at 02:00Z, SM never below
              −18k in cycle); re-stack hostile (discrete SM step ≤ −5k
              pushing SM &lt; −22k): the only discrete |Δ| &gt; 1k step in
              the window was the +4,103 long-add at 06:36Z, opposite sign;
              mid-cycle escalates (1d close below $75.1k cloud): not even
              close; macro tail re-grow (HY OAS &gt; 3.0% or 10Y &gt;
              4.75%): FRED panel frozen, no fresh datum; reclaim-filter
              ratify: no leg true. Stand-aside book is flat with no
              realized P&amp;L today; the macro put-spread sits on 29MAY
              expiry which today carries{' '}
              <span className="dn-tag">+23.83M dealer gamma</span> (eased
              −$0.65M from yesterday&rsquo;s +24.48M as DTE shortens, still
              the heaviest expiry).
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">stand-aside · primary · today</span>
              <div className="dn-trade-name">
                No new directional — second long-add cover, shorts still loaded, pin holds
              </div>
              <div className="dn-thesis">
                Spot pinned inside a slightly wider, slightly shifted MA
                cluster ($76,657 D-SMA150 to $78,062 W-EMA20 — $1,405
                span, $84 wider than 05-25). Dealer book{' '}
                <span className="dn-em">heavier</span>: +78.2M (was +65.1M,
                gained $13.1M of dampening). Position book changed shape:
                SM net moved from −13.71k → −8.80k via a single +3.82k
                long-add at 06:36Z (BJ 14:36, spot $77,367); short side
                essentially flat across 24h (24,761 → 24,462, −0.3k) and
                the step minute itself a parallel −285 (24,587 → 24,302).
                Net is at the 4-day lineage&rsquo;s highest (least short);
                short side is still substantially loaded at 24.5k —
                squeeze fuel technically not consumed. The day&rsquo;s
                top print ($77,866) punched but did not close above the
                new cluster top (D-EMA20 $77,774 1h close gate). Spot is
                now $95 below the long-add entry; the fresh +3,819 BTC
                long-add is roughly $0.36M underwater (whole post-step
                15,383 BTC book marked at step price as upper bound, ~$1.46M). Funding cooled hard mid-window (+1.36%
                trough at 15:52Z) then re-loaded to +9.15% peak at
                23:17Z — confused leverage signal. Retail at parity
                (50.21%) — most uncrowded read of the lineage. The new
                long-add changes the watch list: if SM trims the fresh
                long book without closing the short, net re-stacks short
                fast (no second discrete short-add step required); if the
                long book holds AND a clean break of $77,774 prints, the
                long-add converted and the long re-engage gate is the
                first standing rule. Right size at a wider pin with
                consumed short-imbalance fuel and a long-loaded book is
                still zero.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">stance</span><span className="dn-lvl-v">flat directional · no new risk</span></div>
                <div><span className="dn-lvl-k">decision band</span><span className="dn-lvl-v">$75,959 (flip) ↔ $78,062 (W-EMA20, cluster top)</span></div>
                <div><span className="dn-lvl-k">upside re-engage (gate lowered)</span><span className="dn-lvl-v bull">1h close &gt; $77,774 (D-EMA20) AND SM long_btc holds &gt; 14k inside the 4h leading up — scout long 0.2R, target $78,062 (W-EMA20) then $78,634 (D-SMA20)</span></div>
                <div><span className="dn-lvl-k">downside re-engage</span><span className="dn-lvl-v bear">1h close &lt; $75,959 (flip) AND SM &lt; −15k — flip-break short 0.3R, target $75,000 / $74,332 (W-SMA20)</span></div>
                <div><span className="dn-lvl-k">long-trim warning</span><span className="dn-lvl-v bear">SM long_btc drops &gt; 2k in one minute (or &gt; 4k inside 1h) without short_btc rising — the fresh long-add is unwinding, net will re-stack short faster than 05-22/23 because shorts are pre-loaded</span></div>
                <div><span className="dn-lvl-k">re-stack hostile</span><span className="dn-lvl-v bear">discrete SM net change ≤ −5k in one minute pushing SM &lt; −15k — squeeze re-arms hostile, treat as immediate short setup at next reclaim of cluster top</span></div>
              </div>
              <div className="dn-gating">
                <b>Why stand-aside again, not a long re-engage on the long-add:</b>{' '}
                the long-add printed but the dealer book pinned the
                follow-through — spot couldn&rsquo;t take $77,774 D-EMA20
                let alone the $78,062 W-EMA20 wall. Crucially, the
                shorts didn&rsquo;t close — the 24.5k short book is
                still pre-loaded, so net SM can re-stack short fast on
                a long-trim alone (no second discrete short-add step
                required). That makes the long-trim warning the more
                urgent watch: a fast unwind of the fresh 3.82k longs
                takes net SM back below −12k without needing any short
                accumulation. Conversely, the long-add itself doesn&rsquo;t
                ratify a long until the cluster top breaks on a 1h close
                — until then the 15.4k longs opened at $77,367 are
                underwater and the position book is a directional
                coin-flip inside the pin with a thicker dealer book.
                Pre-positioning either side ahead of the cluster resolve
                is paying for a coin-flip 2% above a heavier
                negative-gamma pocket and 1.3% below a heavier positive
                ceiling.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">closed · prior squeeze framework · re-confirmation</span>
              <div className="dn-trade-name">
                Squeeze potential — fuel re-classification: short-side intact, long-side now long-loaded hedge
              </div>
              <div className="dn-thesis">
                Yesterday&rsquo;s closure (&ldquo;squeeze framework
                retired&rdquo;) was correct as written — the 05-23 record
                short book + record long-pay + dealer pin setup is no
                longer the asymmetric trade. But re-classification is
                needed today: <span className="dn-em">
                the short book is still at 24.5k</span> (vs 33.5k peak,
                only −9k of unwind happened on 05-24, none today). The
                long book grew to 15.7k. SM is now running a long-loaded
                hedge against a still-loaded short — net only −8.8k but
                gross exposure is much larger than 05-22. This is{' '}
                <em>not</em> the same setup as the 05-22 entry; it&rsquo;s
                a different shape (gross-long-hedged-net-short vs the
                clean-net-short 05-22 read). The new question is which leg
                gets cut first if the pin breaks: a fast long-trim takes
                net back to −12k+ in minutes; a fast short-cover takes net
                to neutral. The dealer map at $80k +53.92M argues against
                an upside cover (no positive convexity for shorts to
                close into), and the $76k −12.67M heavier pocket argues
                against an easy downside (longs would unwind into an
                amplifying pocket).{' '}
                <span className="dn-em">
                  Lineage update: SM-cover-followed-by-long-add (05-24 →
                  05-25) is now a two-step pattern, not a one-step cover.
                  The 4-day step cadence (re-stack · re-stack · two-leg
                  cover · long-add) is unbroken; the BJ 13–15 window is
                  unbroken; the price-doesn&rsquo;t-follow result is
                  unbroken (each step printed but spot stayed inside the
                  cluster). The next step almost certainly lands inside
                  the next 24h in the same BJ window — direction
                  unpredictable but cadence near-deterministic
                </span>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">closed · setup re-shaped to long-loaded hedge of intact short</span></div>
                <div><span className="dn-lvl-k">step 4 of 4 printed</span><span className="dn-lvl-v">+3,819 long-add @ 2026-05-25 06:36Z (BJ 14:36) · spot $77,367.50 · short_btc −285 (near-flat)</span></div>
                <div><span className="dn-lvl-k">SM peak (least short) in window</span><span className="dn-lvl-v">−8,789 BTC @ 2026-05-25 22:26Z (BJ 06:26) · spot $77,362</span></div>
                <div><span className="dn-lvl-k">post-step price path</span><span className="dn-lvl-v">step $77,367 → 24h high $77,866 (+$499) → snapshot $77,272 (−$95 vs step)</span></div>
                <div><span className="dn-lvl-k">step cadence</span><span className="dn-lvl-v">4 consecutive days · all BJ 13–15 window · next step ~24h forward base rate</span></div>
              </div>
              <div className="dn-gating">
                <b>Re-classified lesson:</b> the strict squeeze gate from
                05-25 retired correctly when net moved off the record
                short — but it under-weighted the persistence of the
                short book. Today: short book at 24.5k is still 73% of
                the 33.5k peak, only modestly drained. The asymmetric
                squeeze read isn&rsquo;t fully retired — it&rsquo;s
                transformed into a different shape (long-hedged net
                short). A new framework entry: if SM trims the fresh
                long-add without closing the short (long_btc drops
                &gt; 2k in one minute or &gt; 4k inside 1h), the
                resulting fast re-stack to net −12k+ is a hostile
                signal — treat as immediate short setup at the next
                reclaim of D-EMA20 $77,774.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">macro tail · hedge · held</span>
              <div className="dn-trade-name">
                Downside put-spread — residual 0.15R held
              </div>
              <div className="dn-thesis">
                Macro is structurally identical to 05-25 (FRED Tier-1
                frozen for a fourth day; panel now self-flags
                &ldquo;stale 4d&rdquo; on 10Y / TIPS / HY OAS / US-JP
                spread). DXY frozen too (no fresh tick at 99.05). The
                29MAY expiry that hosts the hedge now carries +23.83M
                dealer gamma (was +24.48M — eased $0.65M as DTE shortens
                from 4.3 to 3.3; still the heaviest expiry on the entire
                by-expiry strip). Regime-z backdrop unchanged (10Y
                +2.24σ, JGB +2.55σ, TIPS real +2.26σ); the rationale
                (fat-tail insurance against the slow regime z) holds.
                Today is the first day since Memorial Day Monday that
                US bond markets reopen — the next FRED Tier-1 fresh
                print lands in this US session. That print is the only
                macro variable today that can break the BTC pin from
                outside.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">structure</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">expiry</span><span className="dn-lvl-v">29-MAY-26 (3.3 DTE) — front-strip positive ladder; 29MAY heaviest at +23.83M</span></div>
                <div><span className="dn-lvl-k">action this note</span><span className="dn-lvl-v">hold 0.15R · no add (regime z unchanged + frozen) · no trim (re-grow gates not breached)</span></div>
                <div><span className="dn-lvl-k">re-grow trigger</span><span className="dn-lvl-v bear">HY OAS &gt; 3.0% close OR 10Y &gt; 4.75% close on the fresh FRED print today; 1d close below $75.1k cloud → max tail</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> strike/premium/Greeks not loaded —
                structure is illustrative, sizing pending a Deribit
                29-MAY chain pull. 29MAY at +23.83M is still the
                heaviest expiry on the entire by-expiry strip (26JUN
                +16.54M second); dealer hedging on the expiry will
                dampen continuation rather than amplify it — meaning
                if the macro tail does fire the realized move could be
                smaller than the regime-z math implies. The 29MAY DTE
                is now 3.3 days — the hedge has 3 calendar days to
                resolve before expiry; a fresh hedge for the next
                window would need to roll to 5JUN 10.3 DTE (+8.01M
                dealer gamma, lighter dampening than 29MAY).
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the pin holds 2nd day · long-trim is the new top watch</span>
            </h2>

            <p>
              Of the seven 05-25 decision conditions, <em>zero</em> fired
              strictly inside the 24h window — the closest were:
              cluster-top reclaim (highest 1h close $77,694.5 at 17:00Z,
              $355 below the $78,049 W-EMA20 gate; the 24h-high spot
              $77,866 punched but did not close above); the re-stack
              hostile row (no discrete SM net step ≤ −5k; the only
              discrete |Δ| &gt; 1k step was +4,103 at 06:36Z, opposite
              sign). All other rows clean. Yesterday&rsquo;s stand-aside
              book is unchanged today (flat directional, macro tail held).
              The conditions today re-set around the new shifted
              pin-and-flip grid, with the long-trim warning as a new
              top-watch row:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Cluster-top reclaim ratifies (gate lowered to D-EMA20)</td><td className="bull">1h close &gt; $77,774 (D-EMA20) AND SM long_btc holds &gt; 14k inside the 4h leading up</td><td>scout long 0.2R, target $78,062 (W-EMA20) then $78,634 (D-SMA20)</td></tr>
                <tr><td>Reclaim ratifies harder</td><td className="bull">SM net &gt; −5k sustained AND 1h close &gt; $78,634 (D-SMA20)</td><td>add +0.2R, target $79,029 (D-EMA150) then $80,270 (D-SMA200) — into top wall +53.92M</td></tr>
                <tr><td>Long-trim warning (new top watch)</td><td className="bear">SM long_btc drops &gt; 2k in one minute OR &gt; 4k inside 1h, without short_btc rising</td><td>flag: net will re-stack short faster than 05-22/23 because shorts are pre-loaded · short setup at next reclaim of $77,774</td></tr>
                <tr><td>Cluster loses (re-break)</td><td className="bear">1h close &lt; $75,959 (flip) AND SM &lt; −15k</td><td>flip-break short 0.3R, target $75,000 / $74,332 (W-SMA20)</td></tr>
                <tr><td>Re-stack hostile (escalates)</td><td className="bear">discrete SM net change ≤ −5k in one minute pushing SM &lt; −15k</td><td>treat as immediate short setup at next reclaim of D-EMA20 $77,774</td></tr>
                <tr><td>Mid-cycle escalates</td><td className="bear">1d close below $75,100 cloud (↓ Ichimoku 1d cloud top)</td><td>tail to primary (0.3R), short opens regardless of SM</td></tr>
                <tr><td>Macro tail re-grow (fresh FRED print this session)</td><td className="bear">HY OAS &gt; 3.0% OR 10Y &gt; 4.75% close on today&rsquo;s first fresh Tier-1 print</td><td>tail +0.1R toward primary</td></tr>
                <tr><td>Reclaim filter ratifies</td><td className="bull">SM net &gt; 0 sustained AND 10Y close &lt; 4.55% AND 1h close &gt; $77,774</td><td>scout long 0.2R (separate from cluster-top book)</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether SM holds the fresh long book or trims it. A long-trim
                of &gt; 2k in one minute (or &gt; 4k inside 1h) without
                a short_btc rise re-stacks net short to −12k+ in minutes —
                faster than any of the prior 4-day patterns because the
                short side is pre-loaded; a hold of the 15.4k long book
                through the BJ 13–15 cadence window today keeps the
                long-add live and forces the cluster-top reclaim gate as
                the binding constraint. A hard 5th-day step (most likely
                inside BJ 13–15 today, base rate from 4-day lineage) is
                the cadence read — direction unpredictable but timing
                near-deterministic
              </span>. Until SM moves a leg by ≥ 2k inside one minute or
              the cluster resolves on close, this note runs as written —
              flat directional, macro tail held, squeeze framework
              re-classified to long-loaded-hedge. Today is also the first
              day since Memorial Day Monday that US bond markets reopen;
              the first fresh FRED Tier-1 print of the new week lands in
              this US session and is the only macro variable that can
              break the pin from outside the BTC book.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit · 0 CRITICAL · 1 HIGH + 4 MED + 2 LOW all fixed)
            </span>
            <b>Codex CLI 0.132.0 (gpt-5.5, xhigh reasoning) ran the
            hostile audit cleanly — the empty-stdin pipe held, no TTY
            block.</b> Zero CRITICAL; all 7 findings applied EN+ZH:{' '}
            (a) <b>F-01 · HIGH</b> &mdash; <em>audit archive
            missing</em>: page manifest asserted{' '}
            <code>audits/2026-05-26-desk-note.md</code> existed; it did
            not at v1 author time. Created the audit file in this commit
            with the full finding list + the 00:01Z MTF scan archived
            verbatim (the rolling latest file has since advanced).{' '}
            (b) <b>F-02 · MED</b> &mdash; <em>funding endpoint-direction
            wording reversed</em>: v1 §I said &ldquo;+8.54% ann — drifted
            down from yesterday&rsquo;s +7.12%&rdquo; but the endpoint
            moved UP +1.42pt. Rewrote EN+ZH §I to disclose the
            endpoint comparison correctly while preserving the
            window-path framing (cooled to +1.36% trough at 15:52Z, then
            climbed to +9.15% peak at 23:17Z).{' '}
            (c) <b>F-03 · MED</b> &mdash; <em>trade-summary attached 24h
            endpoint shorts to the 06:36Z step narrative</em>: v1 said
            &ldquo;step at 06:36Z … shorts essentially flat (24,761 →
            24,462)&rdquo; — but 24,761 → 24,462 is the 24h endpoint
            change, not the step (step minute was 24,587 → 24,302).
            Rewrote both EN+ZH trade blocks to disclose both: &ldquo;short
            side essentially flat across 24h (24,761 → 24,462, −0.3k) and
            the step minute itself a parallel −285 (24,587 → 24,302).&rdquo;
            (d) <b>F-04 · MED</b> &mdash; <em>+118 BTC delta attributed
            to peak when it is vs the step</em>: snapshot SM −8,801 is{' '}
            ~12 BTC <em>more</em> short than the 22:26Z peak (−8,789), and
            +118 BTC less short than the 06:36Z step bar (−8,919).
            v1 conflated the two. Rewrote EN+ZH §I to disclose both
            deltas correctly.{' '}
            (e) <b>F-05 · MED</b> &mdash; <em>PnL conflated fresh long-add
            with whole post-step long book</em>: v1 said &ldquo;the new
            long book is roughly $1.5M underwater&rdquo; — that uses the
            entire 15,383 BTC post-step book × $95 = $1.46M as if all of
            it was opened at the step; only +3,819 BTC was the fresh add.
            Fresh add at $77,367 marks ~$0.36M underwater at snapshot;
            post-step book marked at step price is the upper bound at
            ~$1.46M. Rewrote EN+ZH lead + §I + trade-block to disclose
            both, separately labeled.{' '}
            (f) <b>F-06 · LOW</b> &mdash; <em>§IV header said
            &ldquo;FRED frozen 2nd day&rdquo; while body said
            &ldquo;fourth day&rdquo;</em>: FRED Tier-1 last fresh print
            was 2026-05-22 (Friday before Memorial Day weekend), so 4
            calendar days back. Header rewritten to &ldquo;FRED frozen
            4th day&rdquo;; §VI &ldquo;the pin holds 2nd day&rdquo; is a
            separate concept (2 consecutive days of zero-conditions-fired)
            and remains as-is.{' '}
            (g) <b>F-07 · LOW</b> &mdash; <em>30D RV value stated
            without formula disclosure</em>: added parenthetical to both
            languages — &ldquo;30D close-to-close, logret.std × √365 ×
            100 on the last 30 daily closes anchored to parquet last bar
            2026-05-26 00:06Z&rdquo;.{' '}
            Codex explicitly cleared: funding × 1095 (no ×100 recurrence
            of the 05-15 landmine; live +8.5355%, 24h mean +4.1655%,
            range +1.36% / +9.15%, minute deltas 493/455/492), GEX
            dual-reference sign-consistency (flip $75,959, total +78.2M,
            dist +1.73% off live $77,272 / +1.8% off Deribit-idx $77,365
            — collapses cleanly), GEX walls and by-expiry strip (29MAY
            +23.83M heaviest expiry, 26JUN +16.54M second; $80k +53.92M
            top wall; $76k pocket heavier negative at −12.67M right at
            step location), MA matrix (D-SMA50/EMA100/EMA50/SMA150
            cluster +0.25/+0.55/+0.65/+0.80% below spot · D-EMA20/W-EMA20
            cluster −0.64/−1.01% above · D-EMA20 crossed below ↔ above
            spot vs 05-25 · W-SMA150/200 non-computable with 126 weekly
            bars), 30D RV 25.836%, claims-vs-loaded-data discipline
            (NTT / max-pain / strike-IV / BTC-NQ framework-only · IV
            chain-median across 884 instruments · cross-asset framed as
            7d rolling window not &ldquo;today&rdquo;), the requireViewer
            gating pattern (both paths, first statement), the index{' '}
            <code>&lt;li&gt;</code> additions (newest-first ordering),
            SM long-add step chronology (single-bar one-leg long-add at
            06:36Z spot $77,367.50, +3,819 longs / −285 shorts, sm_net
            −13,022 → −8,919, peak −8,789 at 22:26Z, 668 minutes above
            −10k, qualitatively distinct from 05-24's two-leg cover), 1h
            closes above cluster top (zero above $78,049 W-EMA20 gate;
            highest $77,694.5 at 17:00Z), and the seven-condition table
            (zero of seven fired strictly). Source audit record with
            full MTF scan archive at audits/2026-05-26-desk-note.md.{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1;
            Next 16.2.6 hard-exits on Node &lt; 20.9.0 at{' '}
            <code>node_modules/next/dist/bin/next:21-25</code>, so a
            full <code>next build</code> is environment-blocked
            (lineage from 05-21 / 05-22 / 05-23 / 05-24 / 05-25).{' '}
            <code>npx --no-install tsc --noEmit</code> returned exit 0
            (TypeScript clean) and is the build proxy.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>
            , and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-05-26 00:08Z)
            with section-level provenance disclosed in the manifest band
            above; macro is structurally unchanged from 05-25 (FRED
            Tier-1 frozen for a fourth day; the panel itself now flags
            &ldquo;stale 4d&rdquo;; first fresh print expected in this
            US session). Levels, sizes, and conditions are illustrative
            of the desk&rsquo;s process, not standing recommendations.
            Past correlation, gamma, and positioning patterns do not
            bind future tape. Derivatives carry the risk of total loss
            and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The long-add printed at the cluster and didn&rsquo;t escape it.
                The shorts didn&rsquo;t close; the pin holds another day.
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
            v2 · 2026-05-26 00:08Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
