import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-05-31 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-05-31',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-05-31' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260531() {
  await requireViewer('/desk/2026-05-31');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-05-31 · v2</span>
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
              <span className="dn-big">$73,883</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.49%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-05-31 08:09Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-31 08:09Z (snapshot pin)</td>
                  <td className="dn-flag">
                    fresh · 1-min · file tail at audit time = pin · note this
                    snapshot lands 9 min after the 31MAY 08:00Z option settle
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-05-31 08:01Z scan</td>
                  <td className="dn-flag">
                    rolling latest-file artifact (regenerates ~every 15 min) ·
                    ~8-min stale vs snapshot anchor · in-progress bar · scan
                    archived in audits/2026-05-31-desk-note.md
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-05-31 00:02Z snapshot</td>
                  <td className="dn-flag">
                    pre-settle · ~8h stale vs snapshot anchor · Deribit idx
                    $74,104 vs live $73,883 · 938 inst (was 1,004 on 05-29 · 29MAY
                    0DTE expired 05-29 08:00Z, 30MAY 0DTE expired 05-30 08:00Z) ·
                    31MAY 0.3DTE +17.00M settled at 08:00Z today (9 min before
                    snap) · ex-31MAY aggregate ≈ +45.9M still positive ·
                    instrument count 938 and median IV 39.9% are PRE-31MAY-settle
                    values from this 00:02Z file; post-settle count/IV not
                    recomputed (the ex-31MAY aggregate IS recomputed)
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-05-31 00:01Z
                  </td>
                  <td className="dn-flag">~8h lag · 7d 1h bars · 22 assets · 166 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-30 22:15Z render</td>
                  <td className="dn-flag">
                    ~9.9h render lag · FRED Tier-1 eased further (10Y −3bp to
                    4.45%, TIPS −3bp to 2.06%, HY OAS +1bp to 2.72%, MOVE
                    +0.48 to 70.2) · DXY softened −0.59 since 05-29 to 98.91,
                    Fed net liq flat at $5.872T · Tier-3 inflation rows
                    fetch-failed
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-05-31 00:06Z</td>
                  <td className="dn-flag">
                    ~8h stale vs snapshot anchor · offsets recomputed vs live spot ·
                    W-SMA150 / W-SMA200 non-computable (126 weekly bars on file)
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
              <span className="dn-v">+4.90%</span>
              <span className="dn-src">live · 00:08Z snap had no cap pin · 24h mean +4.00% (was +9.66% on 05-29) · cap occupancy 1 / 1441 sampled rows = 0.1% (1441 = 1,440 minute-to-minute intervals + open row · was 737/1441 on 05-29) · trough −0.21% ann briefly negative @ 05-30 11:39Z (BJ 19:39 05-30)</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">+10.95% → +4.90% (−6.05pt off cap)</span>
              <span className="dn-src">range −0.21% / +6.97% · cap pinned only 1 / 1441 sampled rows (was 737/1441 on 05-29) · the leverage gate broke wide open in this 24h</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−0.36% (−373 BTC)</span>
              <span className="dn-src">live · first OI shrink of the lineage · SM long_btc −2,978 (longs flushed harder), short_btc +994 (modest add) — net deleveraging, long side bigger cut</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bull">60.35 / 39.65</span>
              <span className="dn-src">live_db `mkt_long_pct` · bled from 63.85 → 60.35 (−3.50pt off lineage peak) · 24h range 60.31 / 63.16 — retail crowding finally easing</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−29.2k (net SHORT, both sides smaller)</span>
              <span className="dn-src">live · long 10.77k − short 39.93k · short peaked 41.25k @ 2026-05-30 22:16Z (BJ 06:16 05-31) and has since bled −1.32k; long_btc dropped from 13.09k → 10.77k since 05-29</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 05-29 note</span>
              <span className="dn-v">−29.0k → −29.2k (−163 net, both sides −2k)</span>
              <span className="dn-src">|Δ|/prior_net = 0.6% · net effectively flat but the BOOK shrank both sides (long −2,313, short −2,150) · BJ 13–15 cadence BROKEN — the 24h extension printed BJ 22:01 05-30 (Δnet −5,569) outside the BJ 13–15 window</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">39.9% / 24.91%</span>
              <span className="dn-src">GEX median IV · 938 inst. (down from 41.4% / 1004 on 05-29 · 30MAY/29MAY 0DTE cleared) · BOTH 938 and 39.9% are PRE-31MAY-settle from the 00:02Z file; post-settle count/IV median not recomputed</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+1.54% (above)</span>
              <span className="dn-src">flip $72,764 (was $74,939 · dropped −$2,175) · vs live spot $73,883 (+1.54%; 73,883.09/72,764 − 1 = 1.538%) / GEX file Deribit idx $74,104 (+1.84%; 74,104/72,764 − 1 = 1.8416%) — both refs positive, page rounds spot side to +1.54% for tile consistency · aggregate GEX +62.9M (was −47.9M, flipped) · ex-31MAY ≈ +45.9M post-settle</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The amplifier expired exactly as 05-29 modelled and the dealer
                book flipped from net-short-gamma to net-long-gamma — a $111M
                structural shift
              </span>. Aggregate GEX went{' '}
              <span className="dn-tag bear">−47.9M</span> →{' '}
              <span className="dn-tag bull">+62.9M</span> with the 29MAY −96.34M
              chunk settling at 08:00Z 05-29, the 30MAY 0DTE expiring at 08:00Z
              05-30, and the 0-γ flip dropping{' '}
              <span className="dn-tag">$74,939 → $72,764</span> (a $2,175 step
              down). For the first time of the lineage, spot{' '}
              <span className="dn-tag bull">$73,883 sits +1.54% above the
              flip</span>, not below. Funding came off the cap in the same
              window: live <span className="dn-tag">+4.90% ann</span>, 24h mean{' '}
              <span className="dn-tag">+4.00%</span> (vs +9.66% on 05-29), cap
              occupancy <span className="dn-tag">1 / 1441 minutes (0.1%)</span>{' '}
              (vs 51%), and the path briefly turned{' '}
              <span className="dn-tag bull">negative −0.21% ann @ BJ 19:39
              05-30</span>. Retail long crowding bled{' '}
              <span className="dn-tag">63.85% → 60.35% (−3.50pt off the lineage
              peak)</span>, OI shrank for the first time of the lineage (−373
              BTC), and short_btc peaked{' '}
              <span className="dn-tag bear">41,250 @ BJ 06:16 05-31</span> and
              has since bled −1.3k to 39,932. This note marks the post-amplifier
              flip — the structural backdrop that powered the down-leg is gone,
              the cycle anchor held on a close basis, and the trade book pivots
              from short-completed → digestion-above-anchor, scout deferred for
              two-of-three legs of the cover-bounce trigger.
            </p>

            <p>
              BTC prints <span className="dn-tag">$73,883</span> live,{' '}
              <span className="dn-tag bull">+0.49%</span> on 24h — the second
              consecutive 24h up-print of the post-settle session (05-30 was
              the first up-close at $73,857) — within a tight{' '}
              <span className="dn-tag">$74,109 / $73,130</span> range (low @ BJ
              20:36 05-30 / UTC 12:36 05-30, high @ BJ 06:31 05-31 / UTC 22:31
              05-30).{' '}
              <span className="dn-signal">The cycle anchor held the floor on
              a close basis</span>: 05-29 closed{' '}
              <span className="dn-tag">$73,428</span>, 05-30 closed{' '}
              <span className="dn-tag bull">$73,857</span> (a $429 up-day), and
              the in-progress 05-31 close at parquet last-bar{' '}
              <span className="dn-tag">$73,828</span> — all three sit above the
              <span className="dn-tag bull"> D-SMA100 $73,146 (+1.01%)</span>{' '}
              cycle anchor. The MA matrix has not improved overhead — the
              W-SMA20 floor that broke on 05-29 is still overhead at{' '}
              <span className="dn-tag bear">W-SMA20 $74,161 (−0.37%)</span>, the
              D-SMA50/D-SMA150 cluster sits five MAs deep at{' '}
              <span className="dn-tag bear">$76,175 – $77,223 (−3.0% to
              −4.3%)</span>, and the cycle anchor is again the single
              load-bearing positive offset on the matrix.{' '}
              <span className="dn-em">
                The book has held the floor and shed its amplifier, but it has
                not yet reclaimed a single overhead MA: this is digestion above
                the cycle anchor, not a structural turn.
              </span>{' '}
              The cover-bounce scout&rsquo;s three triggers from 05-29 — 1h
              close &gt; $74,939 flip AND SM short_btc &lt; 38k AND long_btc
              &gt; 13k — none have fired cleanly. The flip&rsquo;s &ldquo;reclaim&rdquo;
              is passive (the flip dropped to us, we did not rally above the old
              one); short_btc has bled but is still 1.93k above the 38k gate;
              and long_btc has fallen further to 10.77k (worse than the 13k
              gate, not better). The scout stays deferred.
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · live tape · 24h book shrunk both sides · cycle cadence BROKEN (extension printed BJ 22:01 outside the BJ 13–15 window)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The position book has de-leveraged on both sides — the first
                two-sided shrink of the lineage
              </span>. SM net is{' '}
              <span className="dn-tag">−29,158</span> vs the 05-29 note&rsquo;s
              −28,995 — that is{' '}
              <span className="dn-em">+0.6% more short and effectively flat</span>{' '}
              (|−29,158 − (−28,995)| / 28,995 = 0.6%). But the components moved
              materially: long_btc{' '}
              <span className="dn-tag bear">13.09k → 10.77k (−2.31k)</span> and
              short_btc <span className="dn-tag bull">42.08k → 39.93k
              (−2.15k)</span>. The long side cut harder than the short side
              trimmed, leaving net almost identical — a real two-sided
              de-grossing. Across the 24h window: long_btc Δ{' '}
              <span className="dn-tag bear">−2,978</span>, short_btc Δ{' '}
              <span className="dn-tag">+994</span>, net Δ{' '}
              <span className="dn-tag bear">−3,972</span> (−2,978 − 994 = −3,972) — the 24h shape was a
              long flush concurrent with a small short add. Short_btc peaked at
              the 24h high: <span className="dn-tag bear">41,250 @ 2026-05-30
              22:16Z (BJ 06:16 05-31)</span>, then bled −1,318 into the
              snapshot. SM net trough{' '}
              <span className="dn-tag bear">−30,799 @ 2026-05-30 14:11Z (BJ
              22:11 05-30)</span> — that trough printed{' '}
              <span className="dn-em">outside</span> the BJ 13–15 window for the
              first time in the cycle. Long_btc trough{' '}
              <span className="dn-tag bear">10,088 @ 2026-05-30 19:11Z (BJ 03:11
              05-31)</span> — a lineage-low long side.
            </p>

            <p>
              <span className="dn-signal">
                The framework&rsquo;s BJ 13–15 cadence broke
              </span>. The 24h extension event printed at{' '}
              <span className="dn-tag bear">2026-05-30 14:01Z (BJ 22:01
              05-30)</span> with spot{' '}
              <span className="dn-tag">$73,617</span>: long_btc moved{' '}
              <span className="dn-tag">14,143 → 11,020</span> (−3,123 BTC),
              short_btc moved <span className="dn-tag">39,332 → 41,778</span>
              (+2,446 BTC in <em>one minute</em>; 41,778 − 39,332 = 2,446), SM net stepped{' '}
              <span className="dn-tag">−25,189 → −30,758</span> (Δnet
              −5,569 — the largest single-minute Δ of the lineage). That step
              is the second-tier signature — a re-stack hostile-2 (Δshort
              &gt; 0 + Δlong &lt; 0 same minute) — but it printed at BJ 22:01,
              <em> seven hours after</em> the prior cadence&rsquo;s BJ 13–15
              window. The actual BJ 13–15 windows of 05-29 and 05-30 are{' '}
              <span className="dn-em">quiet</span>: 05-29 BJ 13–15 saw SM net
              drift +768 across the 2h window (a small <em>cover</em>, max
              |Δnet| 259); 05-30 BJ 13–15 saw −349 net drift (max |Δnet| 269);
              today&rsquo;s 05-31 BJ 13–15 window passed without a discrete step
              (max |Δnet| 140, window Δ −109). The 7-day BJ 13–15 cadence is{' '}
              <span className="dn-em">
                broken: the cycle is no longer pinned to the BJ open—mid window
              </span>. The re-stack is also losing magnitude — 05-30 14:01 was{' '}
              −5,569 at a deeper anchor with both sides moving simultaneously,
              a one-off rather than the start of cycle 3.
            </p>

            <p>
              The leverage side is the loudest signal of regime change.{' '}
              <span className="dn-signal">
                Funding came entirely off the Binance cap
              </span>: live <span className="dn-tag">+4.90% ann</span>, 24h
              range <span className="dn-tag">−0.21% / +6.97%</span> with the
              trough <span className="dn-tag bull">−0.21% ann (briefly
              short-pay) @ 2026-05-30 11:39Z (BJ 19:39 05-30)</span> — for the
              first time of the lineage, longs were paid by shorts inside the
              window. 24h mean ann{' '}
              <span className="dn-tag">+4.00%</span> (vs 05-29&rsquo;s +9.66% —
              a −5.66pt cooling). Cap occupancy{' '}
              <span className="dn-tag bull">1 / 1441 sampled rows (0.1%)</span> at
              the maximum +6.97% (vs 51% on 05-29 — the cap is empty);{' '}
              minute deltas <span className="dn-tag">478 up / 484 down / 478
              flat</span> (1,440 minute-to-minute intervals; 1441 sampled rows = 1440 intervals + open row) — a balanced two-way book, not a one-way press. OI Δ
              <span className="dn-tag bull">−373 BTC (−0.36%)</span> over 24h —{' '}
              <span className="dn-em">the first OI shrink of the lineage</span>{' '}
              (vs 05-29&rsquo;s +5,401 BTC / +5.34% expansion). Retail{' '}
              <span className="dn-tag">mkt_long_pct 60.35%</span> from 63.85%
              — a −3.50pt cool from the lineage peak, the first material
              de-crowding of the long side. Perp trades a{' '}
              <span className="dn-tag bear">−$109.04 discount</span> to spot at
              the snap (1h mean −$111.60, range −$147.09 / −$81.99; 4h mean
              −$113.24; 24h mean −$107.12, range −$147.09 / −$26.88 — basis
              never went premium across the 24h, but the −$412 prints of
              yesterday did not repeat). 1-min aggressor skew snap{' '}
              <span className="dn-tag bear">−6.1</span> (1h mean −10.16,
              range −41.7 / +36.6) — a mild sell-aggressor tilt, no oversold
              reflex bid this snap.{' '}
              <span className="dn-em">
                Funding off the cap + OI shrinking + retail bleeding off the
                crowded long peak + both SM sides smaller: the leverage book is
                deflating, not pressing. The amplifier is gone and the position
                book has visibly let air out.
              </span>
            </p>

            <p>
              Windowed flow is <em>two-sided bid into the 24h up-print, with
              the most recent hour turning slightly heavy on spot</em>. 24h:
              price <span className="dn-tag bull">+0.49%</span>, OI{' '}
              <span className="dn-tag bull">−373 BTC</span>, spot CVD{' '}
              <span className="dn-tag bull">Δ +3,281</span>{' '}
              <span className="dn-em">(reset-adjusted across the 05-30 14:59Z
              cb_cvd reset)</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +2,709</span>, big-print{' '}
              <span className="dn-tag bull">+554 BTC / 650 prints</span>,
              taker-net <span className="dn-tag bull">+1,405</span> —{' '}
              <span className="dn-em">
                both spot AND futures bought into a modest up-print with OI
                shrinking; the +0.49% printed on net covering, not on fresh long
                stacking — exactly the post-amplifier cover-shape that the prior
                note named
              </span>. 4h (into snapshot): price{' '}
              <span className="dn-tag bear">−0.14%</span>, OI{' '}
              <span className="dn-tag">+119 BTC</span>, spot CVD{' '}
              <span className="dn-tag">Δ +46</span>, futures CVD{' '}
              <span className="dn-tag">Δ −9</span>, big-print{' '}
              <span className="dn-tag bear">−39 BTC / 108 prints</span>,
              taker-net <span className="dn-tag bear">−19</span> —{' '}
              <em>a flat / quiet 4h, the buyer side rested into the snapshot</em>.
              1h: price <span className="dn-tag bear">−0.10%</span>, OI{' '}
              <span className="dn-tag bull">−67 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −162</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +91</span>, big-print{' '}
              <span className="dn-tag bull">+57 BTC / 19 prints</span>,
              taker-net <span className="dn-tag bull">+91</span> —{' '}
              <em>spot offered, futures bought, big-print bid — a mixed signal
              with OI still shrinking</em>. The two-sided 24h bid is the
              cleanest cover-shape we have seen in the lineage, but the 1h
              shows spot offering into the snap — the bid is rotating, not
              fresh.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · MTF map · 8h water-down golden cross just printed · slow frames still rolling but engine frames lifting · cycle anchor held on close basis</span>
            </h2>

            <p>
              <span className="dn-signal">
                The 8h MACD printed a fresh water-down golden cross at the
                00:00Z 05-31 close
              </span>{' '}
              — the engine frame moving from the 05-29 ⚡ TD9 BUY confirmation
              to a confirmed water-down golden cross one frame slower. Slow
              frames have not joined: the{' '}
              <span className="dn-tag bear">3d water-up death cross is at 1
              bar</span> (still confirmed, unchanged from 05-29), 12h carries a{' '}
              <span className="dn-tag bear">water-down death cross 7b</span>,
              1d <span className="dn-tag">water-up death cross 19b</span>, 1d
              still <em>in cloud</em> (73.3k–77.2k). Engine frames lifted: 1h
              RSI <span className="dn-tag bull">55.8</span> (was 48.7 on 05-29
              — full reclaim of the 50 mid-line), 4h RSI 43.9 (was 35.3 — off
              the deep oversold), 8h RSI 38.4 (was 34.1), 12h RSI 34.6 (still
              the deepest oversold, was 31.6). 15m and 30m flipped above cloud
              for the first time in days{' '}
              (<span className="dn-tag bull">15m above 1b, 30m above 30b</span>),
              1h is in cloud 2b ($73.4k–$73.9k — exactly straddling spot).
              The two yesterday-completed TD9 BUYs (1h, 4h) advanced to{' '}
              <span className="dn-tag">Buy 4 (1h)</span> and{' '}
              <span className="dn-tag">Sell 5 (4h)</span> — the 4h has flipped
              setups twice in the recovery. No fresh ⚡ TD9 signal this scan;
              the 8h ⚡ TD9 BUY from 05-29 advanced to Sell 3.{' '}
              <span className="dn-em">
                Read straight: the engine has confirmed the bounce (8h golden
                cross + RSI mid-line reclaim on 1h), the slow frames have not
                joined (3d death cross, 12h death cross, 1d in cloud), and the
                cycle frame (3d, still 1 bar in) remains the gating regime
                read. The bounce is real on the engine; the slow frames will
                tell us if it is a relief or a turn.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">73,888</td><td className="num">50.9</td><td className="neut">death (water-up) 20b</td><td className="bull">above ↓73.8k 1b</td><td>Sell 2</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">73,888</td><td className="num">54.1</td><td className="neut">death (water-up) 7b</td><td className="bull">above ↓73.5k 30b</td><td>Sell 1</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">73,888</td><td className="num bull">55.8</td><td className="bull">golden (water-dn) 33b</td><td className="neut">in cloud 73.4–73.9k 2b</td><td>Buy 4</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">73,888</td><td className="num">43.9</td><td className="bull">golden (water-dn) 8b</td><td className="bear">below ↑76.2k 31b</td><td>Sell 5</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">73,888</td><td className="num">38.4</td><td className="bull">golden (water-dn) 刚印 (just printed)</td><td className="bear">below ↑78.1k 45b</td><td>Sell 3</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">73,888</td><td className="num bull">34.6</td><td className="bear">death (water-dn) 7b</td><td className="bear">below ↑78.8k 17b</td><td>Sell 3</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1d</td><td className="num">73,888</td><td className="num">37.8</td><td className="neut">death (water-up) 19b</td><td className="neut">in cloud 73.3k–77.2k 4b</td><td>Buy 5</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">73,888</td><td className="num">45.8</td><td className="neut">death (water-up) 1b</td><td className="neut">in cloud 73.5–91.1k 9b</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">73,888</td><td className="num">42.7</td><td className="bull">golden (water-dn) 6b</td><td className="bear">below ↑100.3k 17b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">73,888</td><td className="num">47.5</td><td className="neut">—</td><td className="bull">above ↓46.9k 27b</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 08:01Z scan (rolling latest
                    file; archived verbatim in
                    audits/2026-05-31-desk-note.md). Header alerts:{' '}
                    <em>8h water-down golden cross (just printed)</em>,{' '}
                    <em>3d water-up death cross 1b (still confirmed)</em>. Scan
                    spot $73,888, 24h +0.60% (08:01Z MTF scan; the live-tape header at 08:09Z shows +0.49% on the same 24h window — the 8-minute gap accounts for the 0.11pt difference), 24h H/L $74,109 / $73,130, qVol
                    $3.88B. Closes are in-progress bars; treat every value as
                    provisional until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix confirms cycle-anchor digestion. Spot $73,883 sits
              <span className="dn-tag bull"> +1.01% above D-SMA100 $73,146</span>{' '}
              — the cycle anchor — the single positive offset on the daily
              ladder. The W-SMA20 floor that broke on 05-29 sits just overhead{' '}
              <span className="dn-tag bear">W-SMA20 $74,161 (−0.37%)</span> — a
              tight reclaim leg, but unreclaimed. Everything else overhead in
              order: <span className="dn-tag bear">D-EMA20 $76,135
              (−2.96%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $76,175 (−3.01%)</span>,{' '}
              <span className="dn-tag bear">D-EMA50 $76,192 (−3.03%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $76,539 (−3.47%)</span>,{' '}
              <span className="dn-tag bear">D-SMA20 $76,792 (−3.79%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $77,223 (−4.33%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $77,737 (−4.96%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $78,231 (−5.56%; seed)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $78,676 (−6.09%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $79,521 (−7.09%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $81,040 (−8.83%)</span>.{' '}
              Far above and disused: W-EMA100 $83,225 (−11.23%), W-EMA50 $84,788
              (−12.86%), W-SMA100 $88,331 (−16.36%), W-SMA50 $93,373 (−20.87%).
              The structural near-line set is now: cycle anchor D-SMA100 below
              (positive +1.01%), W-EMA200 seed barely positive (+0.24% at
              $73,703), and W-SMA20 just overhead (−0.37%) — a tight $1k
              sandwich for the next few sessions.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-05-31 00:06Z (close
                $73,827.50); offsets recomputed against live spot $73,883.09.
                Displayed MA levels are $-rounded; offsets computed from exact
                series values. W-SMA150 / W-SMA200 still not computable —
                parquet history holds 126 weekly bars, short of both windows;
                W-EMA150 $78,231 (−5.56%) and W-EMA200 $73,703 (+0.24%) show
                because the EMA seeds from available history and are reported
                as such. Daily closes: 05-26 $75,906, 05-27 $74,418, 05-28
                $73,591, 05-29 $73,428, 05-30 $73,857, 05-31 (in-progress)
                $73,828 — three consecutive closes above the cycle anchor
                $73,146.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book FLIPPED net-long-gamma aggregate +62.9M · flip dropped to $72,764 (spot ABOVE for the first time of the lineage) · 31MAY +17M settles in the same snap</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book&rsquo;s gamma regime flipped sign across the
                29MAY/30MAY expiry pair
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bull">+62.9M / 1%</span> (was −47.9M on
              05-29 — a $110.8M positive shift); the book is now net-long-gamma
              (dampening). The 0-γ flip moved{' '}
              <span className="dn-tag">$74,939 → $72,764 (−$2,175)</span>, and
              spot $73,883 sits{' '}
              <span className="dn-tag bull">+1.54% above flip</span> on
              spot-denominated math (73,883.09 / 72,764 − 1 = +1.538%); the GEX
              file&rsquo;s own &ldquo;dist to flip&rdquo; reads +1.8% off its
              Deribit-index $74,104 ($221 above live spot), which is{' '}
              <span className="dn-tag bull">+1.84%</span> (74,104 / 72,764 − 1 = +1.8416%) — both references positive, spot above the flip on both, the first
              above-flip snapshot of the lineage. The wall map flipped sign on
              the near-overhead strikes:{' '}
              <span className="dn-tag bull">$80k +23.93M</span> (heaviest wall,
              grew from +14.93M),{' '}
              <span className="dn-tag bull">$75k +13.60M</span> (was −20.03M on
              05-29 — flipped positive),{' '}
              <span className="dn-tag bull">$74k +12.26M</span> (was −49.37M —
              flipped from the heaviest negative to a positive support),{' '}
              <span className="dn-tag bull">$82k +11.14M</span>,{' '}
              <span className="dn-tag bear">$60k −8.82M</span> crash-put
              residual,{' '}
              <span className="dn-tag bull">$74.5k +8.49M</span>,{' '}
              <span className="dn-tag bear">$72k −8.45M</span>,{' '}
              <span className="dn-tag bear">$70k −8.44M</span>,{' '}
              <span className="dn-tag bull">$78k +6.35M</span>,{' '}
              <span className="dn-tag bull">$90k +6.08M</span>.{' '}
              <span className="dn-em">
                The negative cluster $70k–$72k still totals −16.89M (no longer
                aggregated with $73k/$74k/$75k which all flipped positive); the
                $74k–$80k overhead band sums to roughly +75M of positive
                support. The dealer book is structurally bid into a fade and
                offered into a squeeze
              </span>. 31MAY26 0.3DTE +17.00M settled at the 08:00Z print today
              (9 minutes <em>before</em> our snapshot anchor); the GEX file is
              pre-settle at 00:02Z, so the post-settle aggregate ex-31MAY is
              roughly +62.9M − 17.0M = +45.9M, still net positive. Forward
              expiries: 1JUN 1.3 +19.49M, 2JUN 2.3 −0.48M, 3JUN 3.3 +0.18M, 5JUN
              5.3 −0.01M, 12JUN 12.3 +0.76M, 19JUN 19.3 −1.78M, 26JUN 26.3
              +2.06M, 31JUL 61.3 +13.59M, 25SEP 117.3 +10.52M, 25DEC 208.3
              +12.15M, 26MAR27 299.3 +1.44M. No single forward expiry carries
              the 29MAY-style amplifier weight — the heaviest forward chunk is
              1JUN +19.49M (positive), followed by 31JUL +13.59M and 25DEC
              +12.15M, all positive. The amplifier era of the down-leg is
              structurally over.
            </p>

            <p>
              IV median across 938 instruments is{' '}
              <span className="dn-tag">39.9%</span> (down from 41.4% / 1004
              instruments on 05-29 — a −1.5pt vol cool) against 30D
              close-to-close RV of <span className="dn-tag">24.91%</span> —
              chain-level richness <span className="dn-tag">~+15.0pt</span>.
              <span className="dn-em"> Disclosure: 938 instruments and 39.9%
              IV median are PRE-31MAY-settle values read from the 00:02Z GEX
              file; the 31MAY 0.3DTE chunk cleared at 08:00Z (9 min before
              snapshot) and the post-settle instrument count and IV median have
              NOT been recomputed — the only post-settle figure carried in this
              note is the ex-31MAY aggregate (+45.9M = +62.9M − 17.0M). Reader
              should not infer post-settle book richness from the 39.9% / 938
              line.</span>{' '}
              A chain-median across N instruments, <span className="dn-em">not</span>{' '}
              a tradable spread; expiry-/strike-level vega, skew and term
              structure remain not loaded; the vol read stays framework-only.
              938 instruments today vs 1,004 on 05-29 — the −66 is the 29MAY
              and 30MAY 0DTE chunks expiring without near-dated replacements;
              the new 31MAY chunk cleared today at 08:00Z. RV methodology: 30D
              close-to-close, logret.std × √365 × 100 on the last 30 daily log
              returns (= 31 consecutive daily closes) anchored to parquet last
              bar 2026-05-31 00:06Z; range $73,428 – $82,178 over the
              underlying 31-close window. (For reference, last 29 returns / 30
              closes reads 25.19%; the 24.91% page value comes from 30 returns.)
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · Tier-1 eased again (10Y 4.45%, TIPS 2.06%, HY OAS 2.72%, MOVE 70.2) · DXY softened −0.59 to 98.91 since 05-29 · BTC-vs-TradFi decoupling narrowed to −5.84pt (was −7.2pt)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro tape eased across rates, real-rates and the dollar
                again, with HY credit and bond vol close to flat
              </span>. Dashboard render is 2026-05-30 22:15Z, ~9.9h before the
              snapshot. US 10Y nominal{' '}
              <span className="dn-tag bull">4.45% (−3.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.43</span>, episodic z{' '}
              <span className="dn-tag">+0.20</span> — RISK-OFF tag, eased
              (3bp below 05-29&rsquo;s 4.48%). 10Y TIPS real{' '}
              <span className="dn-tag bull">2.06% (−3.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.31</span>, episodic z{' '}
              <span className="dn-tag">+0.70</span> — still RISK-OFF, eased.
              5Y5Y BE inflation{' '}
              <span className="dn-tag">2.24% (0.0bp)</span> — flat. HY OAS{' '}
              <span className="dn-tag">2.72% (+1.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.32</span>, episodic z{' '}
              <span className="dn-tag bull">−1.72</span> — still a deep
              risk-on episodic, basically flat on the day. MOVE bond vol{' '}
              <span className="dn-tag">70.2 (+0.48)</span> — still &ldquo;loose&rdquo;,
              a touch firmer on the day. The offsets continued to ease: DXY{' '}
              <span className="dn-tag bull">98.91 (−0.11 day · −0.59 since
              05-29)</span>, episodic z{' '}
              <span className="dn-tag">+0.62</span> — softened materially over
              48h; Fed net liquidity flat at{' '}
              <span className="dn-tag bear">$5.872T</span> (no fresh weekly
              print), episodic z{' '}
              <span className="dn-tag bear">−2.28</span>. US-JP 10Y spread{' '}
              <span className="dn-tag bull">1.94% (−3.0bp)</span>;
              USD/JPY <span className="dn-tag bull">159.26 (−0.01 day · −0.31
              since 05-29)</span> (yen firmer). NFCI −0.510 (stale 8d).{' '}
              <span className="dn-em">
                Net: the re-grow gates moved further away again (HY OAS gate
                2.78% — at 2.72%, 6bp to fire; 10Y gate 4.53% — at 4.45%, 8bp to
                fire), the reclaim-long rates filter (10Y &lt; 4.55%) stays
                true at 4.45%, and the macro tape stays net risk-on on the
                lines that matter for BTC. The BTC-vs-TradFi decoupling
                narrowed to −5.84pt this print (BTC −3.84% vs NQ +2.00%) from
                −7.2pt on 05-29 — BTC&rsquo;s lag is closing, mostly because
                BTC has stopped extending down, not because the TradFi tape
                rolled over
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
                <tr><td>US 10Y nominal</td><td className="num">4.45%</td><td className="num bull">−3.0bp</td><td className="num bear">+1.43</td><td className="num">+0.20</td><td className="bear">tight, eased</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.06%</td><td className="num bull">−3.0bp</td><td className="num bear">+1.31</td><td className="num">+0.70</td><td className="bear">tight · still RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.24%</td><td className="num">0.0bp</td><td className="num">+0.08</td><td className="num">−0.16</td><td className="neut">no tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.72%</td><td className="num bear">+1.0bp</td><td className="num bull">−1.32</td><td className="num bull">−1.72</td><td className="bull">loose · risk-on episodic</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.510</td><td className="num">0.00</td><td className="num">+0.10</td><td className="num bull">−0.81</td><td className="stale">stale 8d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">70.2</td><td className="num bear">+0.48</td><td className="num bull">−0.57</td><td className="num">−0.49</td><td className="bull">loose · barely changed</td></tr>
                <tr><td>DXY</td><td className="num">98.91</td><td className="num bull">−0.11</td><td className="num">+0.47</td><td className="num">+0.62</td><td className="bull">softer · −0.59 since 05-29</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.872T</td><td className="num">0.000T</td><td className="num">+0.22</td><td className="num bear">−2.28</td><td className="bear">no fresh weekly print</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.26</td><td className="num bull">−0.01</td><td className="num bear">+1.19</td><td className="num">+0.68</td><td className="bull">yen firmer (−0.31 since 05-29)</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.94%</td><td className="num bull">−3.0bp</td><td className="num bull">−0.93</td><td className="num">+0.20</td><td className="bull">tightened further</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7657</td><td className="num bull">−0.01</td><td className="num bull">−1.93</td><td className="num bull">−2.15</td><td className="bull">no tag · loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp (monthly)</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 166 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>).
              Mean off-diagonal <span className="dn-tag">|r| 0.237</span>{' '}
              (loosened further from 05-29&rsquo;s 0.264 — crossed below the
              0.25 threshold and is now in the IDIOSYNCRATIC band, not the
              NORMAL one). BTC&rsquo;s listed ties weakened materially: NQ{' '}
              <span className="dn-tag">+0.372</span> (was +0.518, now in third
              place by |r|), CL <span className="dn-tag">−0.375</span>, TSLA{' '}
              <span className="dn-tag">+0.333</span>, SP500{' '}
              <span className="dn-tag">+0.328</span> (was +0.467), BRENT{' '}
              <span className="dn-tag">−0.328</span>, SILVER{' '}
              <span className="dn-tag">+0.324</span> (was +0.463), PLAT{' '}
              <span className="dn-tag">+0.316</span>, GOLD{' '}
              <span className="dn-tag">+0.300</span> (was +0.375), COPPER{' '}
              <span className="dn-tag">+0.299</span>, AMZN{' '}
              <span className="dn-tag">+0.290</span>, PALL{' '}
              <span className="dn-tag">+0.276</span>, NVDA{' '}
              <span className="dn-tag">+0.239</span> (was +0.423). 7d
              performance:{' '}
              <span className="dn-tag bear">BTC −3.84%</span> (less bad than
              05-29&rsquo;s −4.73%), NQ{' '}
              <span className="dn-tag bull">+2.00%</span>, SP500{' '}
              <span className="dn-tag bull">+0.13%</span> (cooled from +1.36%),
              JP225 <span className="dn-tag bull">+4.49%</span>, MSFT{' '}
              <span className="dn-tag bull">+8.35%</span> (new TradFi leader),
              META <span className="dn-tag bull">+3.10%</span>, TSLA{' '}
              <span className="dn-tag bull">+0.24%</span> (was +4.85%, cooled),
              AAPL <span className="dn-tag bear">−0.16%</span>, NVDA{' '}
              <span className="dn-tag bear">−1.68%</span> (less bad than
              −2.70%). Metals soft: GOLD{' '}
              <span className="dn-tag bear">−0.31%</span>, SILVER{' '}
              <span className="dn-tag bear">−2.63%</span>, PLAT{' '}
              <span className="dn-tag bull">+0.52%</span>. Energy stopped
              collapsing: CL <span className="dn-tag bear">−2.57%</span>
              (vs −9.78%), BRENT <span className="dn-tag bear">−2.24%</span>
              (vs −9.12%), NGAS{' '}
              <span className="dn-tag bull">+5.65%</span>.{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d lag vs the TradFi engine narrowed to ~−5.84pt
                (BTC −3.84% vs NQ +2.00%) from −7.23pt on 05-29 (per the 05-29
                note: BTC −4.73% vs NQ +2.50% = −7.23pt) — the gap is
                closing because BTC stopped extending, not because TradFi
                rolled. Endogenous-to-crypto remains the load-bearing read but
                the macro pulse continues to ease: rates lower, DXY softer,
                credit holding tight, vol loose
              </span>. JGB monthly 2.52% carries EXTREME RISK-OFF monthly tag
              — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · runner closed (full ladder tagged 05-29) · cover-bounce scout deferred (2 of 3 legs unmet) · macro tail closed on 29MAY settle · no fresh trades on this snap</span>
            </h2>

            <p>
              <span className="dn-signal">
                Yesterday&rsquo;s thesis printed correct and the trade book is
                clean
              </span>. The 05-29 runner short closed at the 29MAY 08:00Z
              expiry into the full target ladder tag (W-EMA200 seed $73,710 and
              D-SMA100 cycle-anchor $72,958 both ran inside the −96.34M
              amplifier window, 24h low $72,614 wicked below the cycle anchor).
              The 29MAY put-spread tail closed on the 08:00Z print. The
              cover-bounce scout, gated hard against a post-expiry flip
              reclaim, did <span className="dn-em">not</span> trigger: the flip
              dropped to us (passive), short_btc bled but stayed above 38k, and
              long_btc fell further below 13k rather than rebuilding. Two of
              the three triggers are now structurally easier to satisfy
              (gamma flipped dampening, funding off the cap, retail bleeding),
              but the technical legs are not yet filled. The trade book today
              is: no shorts, no scout entry, no fresh hedge — wait for two of
              three legs (preferably a real flip reclaim above $73,300 with OI
              still shrinking AND short_btc bleeds &lt; 38k inside 4h) before
              scout-long. No new short at the cycle anchor into a positive-gamma
              dealer book and a deflating leverage book.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">closed · primary · runner ladder complete · closed on 29MAY 08:00Z expiry settle</span>
              <div className="dn-trade-name">
                Flip-extend short — closed on 29MAY 08:00Z expiry settle as the prior note required
              </div>
              <div className="dn-thesis">
                The 05-29 runner pressed inside the −96.34M 29MAY amplifier
                window and ran its full ladder: target #2 W-EMA200 seed $73,710
                and target #3 D-SMA100 cycle-anchor $72,958 both tagged, 24h
                low $72,614 wicked below the cycle anchor for the first time
                of the lineage. The 29MAY 0.3DTE chunk settled at 08:00Z 05-29
                exactly as modelled, the dealer book flipped from −47.9M to
                +62.9M aggregate, and the 0-γ flip dropped from $74,939 →
                $72,764. The trade did its work and closed at the bottom of
                the ladder into the expiry resolution. Status: <em>closed</em>.
                No remainder, no roll, no add. Performance: short from prior
                note&rsquo;s 05-27 origin (W-SMA20 $73,789 area) to close at
                ~$73,710 average across the ladder — the structural reason to
                hold any remainder past 08:00Z 05-29 evaporated with the
                amplifier.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (amplifier settle) · no residual position</span></div>
                <div><span className="dn-lvl-k">final ladder</span><span className="dn-lvl-v">target #1 W-SMA20 $74,151 (taken 05-28) · target #2 W-EMA200 seed $73,710 (taken on 05-28 14:01 re-stack) · target #3 D-SMA100 $72,958 (24h low $72,614 wicked through)</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">no new short at the cycle anchor into a positive-gamma book and a deflating leverage book</span></div>
              </div>
              <div className="dn-gating">
                <b>Trade closed.</b> The prior note&rsquo;s &ldquo;take the
                remainder off into the expiry resolution&rdquo; discipline was
                the right call: the amplifier evaporation removed the
                continuation&rsquo;s structural fuel and the post-expiry tape
                has confirmed the dampening regime (funding off cap, OI
                shrinking, both SM sides smaller, retail crowding eased).
                Reopening short requires a fresh structural setup — not a
                roll of this one.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · DEFERRED · 2 of 3 triggers unmet · wait for confirming print</span>
              <div className="dn-trade-name">
                Cover-bounce scout — structurally supported but technically deferred (long_btc fell below 13k, short_btc 1.93k above the 38k gate, flip dropped to us)
              </div>
              <div className="dn-thesis">
                The 05-29 scout&rsquo;s three triggers were a high bar by
                design — a real cover-bounce should print all three. None
                fired cleanly. (1) The flip &ldquo;reclaim&rdquo; was passive:
                the flip dropped from $74,939 → $72,764, and spot $73,883 sits
                +1.54% above the new flip — not because we rallied above the
                old level, but because the dealer book repriced after the
                amplifier left. (2) short_btc 05-29 level 42.08k → 24h intraday
                peak 41.25k (already below the 05-29 level at the 24h window
                open) → snap 39.93k (−2.15k vs 05-29); the 24h window itself
                printed net +994 (short add vs the 24h open), with the
                intraday peak at 41.25k @ BJ 06:16 05-31 then bled −1.32k into
                snap — but the snap is still 1.93k above the 38k gate. (3)
                long_btc has <em>fallen</em> from 13.09k → 10.77k — worse than
                the 13k gate, not better. The structural backdrop
                has improved on every read (gamma flipped, funding off cap,
                retail bled, 8h golden cross printed, the cycle anchor held on
                close), but the position book is still long-flushed at the
                cycle anchor, not rebuilding from it. The disciplined entry
                stays deferred until the position book confirms.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">re-tightened trigger (2 of 3 legs required)</span><span className="dn-lvl-v bull">1h close &gt; $74,161 (W-SMA20 reclaim, a real overhead reclaim) AND SM short_btc bleeds &lt; 38k inside 4h — long_btc &gt; 13k gate now soft (the long side may rebuild only after price reclaims the W-SMA20)</span></div>
                <div><span className="dn-lvl-k">scout entry</span><span className="dn-lvl-v bull">on trigger print, scout long 0.2R · the structural backdrop is now confirming (gamma +, funding off cap, retail bled)</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1h close &lt; $73,146 (D-SMA100 cycle anchor — a close below ends the digestion read)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$76,175 (D-SMA150 / D-EMA50 cluster) then $77,737 (W-EMA20)</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · take half at D-SMA150 cluster</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R:</b> trigger ~$74,161, stop $73,146 = ~$1,015 risk; first
                target $76,175 = ~$2,014 ≈ 2.0:1 — improved meaningfully vs
                05-29&rsquo;s 0.64:1 (05-29 inputs: trigger $74,939, stop
                $73,021, target $76,175 → risk $1,918, reward $1,236, 1,236 /
                1,918 = 0.644) because the trigger moved closer (W-SMA20 $74,161
                vs new flip $74,939) and the stop moved up (cycle anchor
                $73,146 vs $73,021). <b>Hard rule:</b> the long side may rebuild
                only after price reclaims the W-SMA20 — a long_btc &gt; 13k
                read pre-reclaim is a false signal (it can spike on a
                short-cover squeeze before the structural reclaim). The
                disciplined two-leg trigger is the W-SMA20 reclaim + short
                bleeds, in that order.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">closed · macro tail · closed on 29MAY 08:00Z settle</span>
              <div className="dn-trade-name">
                Downside put-spread — closed on 29MAY 08:00Z settle; no roll (macro re-grow gates moved further away)
              </div>
              <div className="dn-thesis">
                The 29MAY put-spread tail (long $74k / short $70k put) settled
                at the Deribit 08:00Z print on 05-29 inside the −96.34M dealer
                gamma chunk, exactly per the prior note&rsquo;s gating. No
                roll: the macro re-grow gates (HY OAS &gt; 2.78%, 10Y &gt;
                4.53%) drifted further away — current 2.72% and 4.45%, 6bp and
                8bp short of fire respectively. The reclaim-long rates filter
                (10Y &lt; 4.55%) is still TRUE at 4.45%; this is a standalone
                filter that requires a BTC-internal pivot to translate to
                scout entry. No fresh hedge needed at the cycle anchor inside
                a positive-gamma book.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">closed 05-29 08:00Z (Deribit 29MAY settle) · no residual position · no roll</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (next Tier-1 print)</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close (currently 2.72%, 6bp to fire) OR 10Y &gt; 4.53% close (currently 4.45%, 8bp to fire)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — still TRUE at 4.45%; awaits BTC-internal pivot</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates (HY OAS &gt; 2.78%, 10Y &gt;
                4.53%) are discretionary watches set as the levels drift down,
                not backtested breakpoints. A new hedge leg if the gates ever
                fire would be a roll to 5JUN26 5.3 DTE or 12JUN26 12.3 DTE —
                but the post-29MAY dealer strip is net-long-gamma and a fresh
                tail would not carry the amplifier tailwind this one did.
                Today&rsquo;s 31MAY 0.3DTE was +17.00M (positive); it settled
                at 08:00Z (9 min before the snap) without a vol event,
                consistent with the dampening regime.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · cycle cadence BROKEN · re-stack hostile-2 lost its time-pin · regime shifted from amplified-extension to post-amplifier digestion</span>
              <div className="dn-trade-name">
                Squeeze-cycle — cadence broken: the 24h extension printed BJ 22:01 (outside BJ 13–15), then BJ 13–15 windows on 05-30 and 05-31 passed without a step
              </div>
              <div className="dn-thesis">
                The 05-29 framework expected another discrete SM step on the
                BJ 13–15 cadence inside 2026-05-29 05:00–07:00Z — the
                eighth-day continuation of a 7-day pattern. The window passed
                with SM net drifting <em>+768</em> across the 2h (a small
                cover, max |Δnet| 259), and the 05-30 BJ 13–15 window saw a
                similarly quiet drift of −349 (max |Δnet| 269). The next real
                extension printed at <span className="dn-tag bear">2026-05-30
                14:01Z (BJ 22:01 05-30) with Δnet −5,569</span> (Δlong −3,123,
                Δshort +2,446 same minute, SM net −25,189 → −30,758 at spot
                $73,617) — a re-stack-hostile-2 signature, but{' '}
                <em>seven hours after</em> the prior cadence window. Today&rsquo;s
                BJ 13–15 (2026-05-31 05:00–07:00Z) passed with window Δ −109
                and max |Δnet| 140 — flat. <span className="dn-em">
                  The cycle&rsquo;s time-pin has broken. The 7-day BJ 13–15
                  cadence is no longer the highest-base-rate prediction for
                  the next discrete step. The regime has shifted from
                  amplified-extension on a known cadence to post-amplifier
                  digestion with no calendar gate. The framework continues
                  as a watchlist (re-stack hostile-2 signatures remain
                  meaningful when they print) but the time-of-day base rate
                  has been falsified
                </span>.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v">cadence broken · 05-29 BJ 13–15 = small cover (+768) · 05-30 BJ 13–15 = drift (−349) · 05-31 BJ 13–15 = flat (−109) · the 7-day cadence is falsified</span></div>
                <div><span className="dn-lvl-k">surrogate extension event</span><span className="dn-lvl-v">re-stack hostile-2 @ 2026-05-30 14:01Z (BJ 22:01 05-30) · spot $73,617 · Δlong −3,123, Δshort +2,446 (41,778 − 39,332), Δnet −5,569 (largest single-minute Δ of the lineage)</span></div>
                <div><span className="dn-lvl-k">SM trough (most short) in 48h</span><span className="dn-lvl-v">−30,799 BTC @ 2026-05-30 14:11Z (BJ 22:11 05-30) · 10 min after the BJ 22:01 step</span></div>
                <div><span className="dn-lvl-k">post-step price path</span><span className="dn-lvl-v">step $73,617 → 24h low $73,130 (−$487 from step) → snapshot $73,883 (+$266 vs step entry — net bounce since the BJ 22:01 extension)</span></div>
                <div><span className="dn-lvl-k">forward gating</span><span className="dn-lvl-v">watch any fresh Δnet ≤ −3k as a one-off signature (the cadence prediction is dead); a 1d close &gt; W-SMA20 $74,161 with OI still shrinking is the affirmative cover-bounce read</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a falsified base rate is more
                useful than a confirmed one — it tells you a regime has changed.
                The 7-day BJ 13–15 cadence held during the amplifier window
                because dealer hedging concentrated into a specific
                Asian-afternoon liquidity profile around the 29MAY chunk;
                with the amplifier gone, the cadence dissolved with it.
                Re-stack hostile-2 signatures (Δshort &gt; 0 + Δlong &lt; 0 same
                minute) remain a meaningful tape read when they print, but they
                no longer have a calendar prior. Treat any fresh print as a
                signal, not as a base rate.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the amplifier flipped the book · cycle anchor held on close · cadence broken · cover-bounce scout deferred for two-of-three confirming legs</span>
            </h2>

            <p>
              Of the 05-29 decision conditions: the 29MAY26 expiry settle
              FIRED clean (−96.34M cleared, aggregate flipped from −47.9M to
              +62.9M, ex-31MAY ≈ +45.9M post-today&rsquo;s settle); the
              cycle-2 step 3 cadence DID NOT FIRE on time or direction (the
              expected BJ 13–15 window on 05-29 saw a small cover +768, and
              the surrogate Δnet −5,569 printed at BJ 22:01 05-30 — outside
              the cadence); the cycle anchor lost test DID NOT FIRE (05-29
              close $73,428, 05-30 close $73,857, 05-31 in-progress $73,828
              — all three above $73,021 / $73,146); the cycle anchor holds +
              gamma flips positive condition FIRED clean (both legs true);
              the press re-extends condition did not need to fire (no held
              short); the macro re-grow gates moved further away again; the
              reclaim-long rates filter stayed true at 4.45%; the cover-bounce
              scout DID NOT TRIGGER. <em>Three structural conditions fired
              clean (expiry settle, cycle anchor holds + gamma flips, macro
              filter true), one fired late and off-cadence (extension at BJ
              22:01 not BJ 13–15), and the scout&rsquo;s technical legs are
              still unmet.</em>{' '}
              The conditions today re-set around a positive-gamma dealer book,
              a held cycle anchor, a broken cadence, and a deferred scout:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>31MAY26 expiry settled (today 08:00Z, 9 min before snap)</td><td>+17.00M positive chunk cleared without a vol event; ex-31MAY aggregate ≈ +45.9M still net positive</td><td>no action required — the dampening regime continues post-settle</td></tr>
                <tr><td>Cover-bounce scout (long) — re-tightened</td><td className="bull">1h close &gt; $74,161 (W-SMA20 reclaim) AND SM short_btc bleeds &lt; 38k inside 4h</td><td>scout long 0.2R, target $76,175 (D-SMA150 cluster) then $77,737 (W-EMA20)</td></tr>
                <tr><td>Cycle anchor lost (cycle-regime escalation)</td><td className="bear">1d close &lt; $73,146 (D-SMA100)</td><td>first cycle-ladder break of the lineage — separate reassessment; the &ldquo;intact mid-cycle&rdquo; read ends and the digestion-above-anchor thesis is falsified</td></tr>
                <tr><td>Cycle anchor holds + gamma stays positive</td><td className="bull">1d closes hold &gt; $73,146 AND aggregate GEX stays positive (no fresh negative chunk added inside 1JUN/5JUN expiry pair)</td><td>digestion-above-anchor read holds; scout asymmetry continues to improve as the position book confirms</td></tr>
                <tr><td>Press re-extends (low base rate now)</td><td className="bear">fresh re-stack SM Δ ≤ −3k pushing SM &lt; −32k AND 1h close &lt; $73,130</td><td>cycle-3 ignition signal — would re-arm short with stop at $74,161 W-SMA20 reclaim; base rate is low because the cadence has broken and the amplifier is gone</td></tr>
                <tr><td>Cycle-2 step 4 cadence (FALSIFIED)</td><td className="stale">7-day BJ 13–15 base rate is dead; do not predict on calendar</td><td>read each fresh Δnet ≤ −3k or Δnet ≥ +3k print as a signal in itself — no time prior</td></tr>
                <tr><td>Macro tail re-grow (FRESH gates)</td><td className="bear">HY OAS &gt; 2.78% (6bp to fire) OR 10Y &gt; 4.53% (8bp to fire)</td><td>roll hedge to 5JUN/12JUN forward; tail +0.1R toward primary</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — still TRUE at 4.45%; awaits BTC-internal pivot</td><td>standalone filter true; needs BTC-internal cover-bounce trigger to translate to scout long</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the post-amplifier digestion above the cycle anchor
                converts into a confirming cover-bounce (1h close above
                W-SMA20 $74,161 with OI still shrinking AND short_btc bleeds
                &lt; 38k), or whether a fresh re-stack hostile-2 print without
                a calendar prior pushes a 1d close below the cycle anchor
                $73,146. The amplifier era is structurally over; the question
                is now whether the position book confirms the structural turn
                or whether the book bleeds laterally above the anchor without
                confirming
              </span>. Until then this note runs as written: the runner and
              the put-spread tail are closed, the cover-bounce scout is
              deferred for two-of-three confirming legs, the cycle cadence
              framework is falsified, and the macro tape continues to ease
              without firing the re-grow gates. The BTC-vs-TradFi decoupling
              narrowed to −5.84pt as BTC stopped extending; the engine MTF
              frames bounced; the 8h MACD printed a fresh water-down golden
              cross; the dealer book flipped from net-short-gamma to
              net-long-gamma. The right read for the next 24h is{' '}
              <em>patient — confirm with two legs, not one</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit · findings recorded in audits/2026-05-31-desk-note.md)
            </span>
            <b>Lineage note:</b> the original 2026-05-31 00:07Z automated daily
            run died mid-stream (socket dropped from the headless API call,
            same failure mode as 05-30; v1 draft survived in working tree). The
            audit + publish steps were resumed manually from a long-context
            session at 2026-05-31 08:09Z+. Codex CLI 0.125.0
            (model_reasoning_effort=xhigh) ran the hostile audit on the v1
            draft via the empty-stdin pipe; verdict on v1 was BLOCK-CRITICAL
            with 1 CRITICAL + 1 MAJOR + 9 MINOR/NIT findings. All 11 fixes
            applied; this is v2. The audit was scoped to internal consistency
            only — live-data cross-references (e.g. 24h mean funding +4.00%,
            05-29 NQ 7d return, post-31MAY-settle instrument count and IV
            median, OI absolute base, 24h-open short_btc) remain on the audit
            file&rsquo;s Open Issues list and were not re-verified against the
            server&rsquo;s parquet/JSON sources in this resume. The principal
            arithmetic checks codex ran and cleared:
            funding × 1095 arithmetic (live +4.90% ann from raw 0.004471, 24h
            mean +4.00%, range −0.21% / +6.97%, cap 1 / 1441 sampled rows ~0.1%,
            trough −0.21% @ BJ 19:39 05-30, no ×100 recurrence); the GEX
            dual-reference sign (flip $72,764, spot +1.54% / idx{' '}
            <span className="dn-em">+1.84% (corrected from v1 +1.81%)</span>,
            both positive, tile and cluster consistent); the 29MAY 0.3DTE
            −96.34M expiry-resolution and ex-31MAY +45.9M arithmetic (62.9M −
            17.0M post-today&rsquo;s settle); the SM &ldquo;cut fraction&rdquo;
            (|−29,158 − (−28,995)| / 28,995 = 0.6%) and the BJ 22:01 05-30
            re-stack-hostile-2 step (Δlong −3,123,{' '}
            <span className="dn-em">Δshort +2,446 (corrected from v1
            +2,447)</span>, Δnet −5,569, spot $73,617); the
            cycle-cadence-broken claim (05-29 BJ 13–15 window Δ +768 max 259;
            05-30 BJ 13–15 window Δ −349 max 269; 05-31 BJ 13–15 window Δ −109
            max 140 — all sub-threshold); the full MA matrix vs live spot
            $73,883.09 off parquet 2026-05-31 00:06Z close $73,827.50 (D-SMA100
            $73,146 cycle anchor +1.01%, W-SMA20 $74,161 floor still overhead,
            W-EMA150/200 seed-disclosed, W-SMA150/200 non-computable at 126
            weekly bars); 30D RV 24.91% (30 returns / 31 closes; 25.19% alt
            disclosed); cross-asset (|r| 0.237, BTC −3.84% vs NQ +2.00% =
            −5.84pt) and macro Tier-1 (10Y 4.45%, HY OAS 2.72%, MOVE 70.2, DXY
            98.91, Fed net liq $5.872T) vs source; claims-vs-loaded-data (NTT
            / max-pain / strike-IV / BTC-NQ framework-only; JGB monthly do not
            lean; IV chain-median across 938 instruments not a tradable
            spread); EN/ZH numeric parity; the requireViewer gating pattern
            (both paths, first statement); CVD reset-adjustment across the
            05-30 14:59Z cb_cvd reset (24h cb_cvd = (22,908.9 − 24,570.9) +
            (5,041.3 − 98.1) = +3,281.2). The CRITICAL ("first up-day of the
            lineage" self-refuted three sentences later in the same paragraph)
            and the MAJOR (pre-31MAY-settle 938 instrument / 39.9% IV
            disclosure) and 9 MINOR/NIT findings (Deribit-idx distance
            arithmetic, SM net Δ off-by-1, BJ 22:01 Δshort off-by-1, 1441 vs
            1440 denominator normalization, prior-note inputs inlined, MTF
            +0.60% vs live +0.49% explained, UTC stamps added to 24h low/high
            timestamps, short_btc baseline-vs-peak prose rewritten, HR →
            HysRes brand) are all individually traced in
            audits/2026-05-31-desk-note.md.{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1; Next
            16.2.6 hard-exits on Node &lt; 20.9.0 at{' '}
            <code>node_modules/next/dist/bin/next:24-28</code>, so a full{' '}
            <code>next build</code> is environment-blocked (lineage from 05-21
            through 05-29). <code>npx --no-install tsc --noEmit</code> is the
            build proxy; this resume re-ran it after v2 fixes.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion
            among principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>,
            and not personalized to any recipient&rsquo;s circumstances.
            Numbers reflect a single atomic snapshot (2026-05-31 08:09Z) with
            section-level provenance disclosed in the manifest band above;
            the macro Tier-1 panel render is 2026-05-30 22:15Z (~9.9h before
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
                The amplifier left and the book flipped. The cycle anchor held
                on close. The scout&rsquo;s gate needs the W-SMA20 reclaim and
                a short-side bleed — two legs, not one. Patient.
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
            v2 · 2026-05-31 08:09Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
