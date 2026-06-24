import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-06-24 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-06-24',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-06-24' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260624() {
  await requireViewer('/desk/2026-06-24');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-06-24 · v2</span>
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
              <span className="dn-big">$62,768</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.84%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-06-24 00:08Z ·{' '}
              <span className="dn-em">
                LIVE-TAPE OUTAGE INTO AN EIGHTH DAY — the OKX monitor has now been
                frozen 161.4h; price/MTF/GEX/cross-asset are fresh, the derivatives
                tape is still dark and the SM feed has been dead ~11.94 days
              </span>
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">live_db.json · LAST ROW 2026-06-17 06:43Z (t = &ldquo;06-17 14:43&rdquo; BJ)</td>
                  <td className="dn-flag">
                    <b>FROZEN</b> · live_db.json has written no new row since
                    2026-06-17 06:43Z (file mtime 06-17 06:43:08Z confirms); process
                    status is not archived / not verified in this cut — now{' '}
                    <b>161.4h stale</b> vs the 00:08Z snapshot anchor (was 137.4h on
                    the 06-23 note, 130.6h on 06-22, 65.4h on 06-20 — the outage has run
                    another ~24h since the last note). Funding / OI / CVD / basis /
                    retail / taker-flow are LAST-KNOWN at 06-17 06:43Z, not current. The
                    SM sub-feed (long_btc / short_btc / net_btc) is frozen even longer —
                    constant since 2026-06-12 01:36Z (~286.5h / ~11.94 days); SM net and
                    the SM cut-fraction are <b>NON-COMPUTABLE</b> this cut
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-24 00:01Z scan</td>
                  <td className="dn-flag">
                    fresh (~7 min before anchor) · rolling latest-file artifact,
                    archived verbatim at
                    /opt/desk-note/snapshots/2026-06-24-0006/ · in-progress bars · scan
                    spot $62,768, 24h −1.90%, 24h H/L $64,247 / $61,870, qVol $10.85B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-24 00:01Z snapshot</td>
                  <td className="dn-flag">
                    fresh (~7 min before anchor) · Deribit idx $62,857 ($89 above
                    parquet spot $62,768) · 892 instruments (+2 vs 06-22/06-23) · net GEX{' '}
                    <b>−64.4M</b> (net SHORT gamma, <b>DEEPENED</b> from −35.1M on
                    06-23, −0.6M flat on 06-22) · flip $64,163 (spot −2.18% BELOW, a
                    second night below) · the dominant chunk is the 26JUN26 monthly{' '}
                    <b>−61.89M</b>, 2.3 DTE (DEEPENED from −41.99M on 06-23) and spot has
                    fallen deeper into the $58k–$64k negative-gamma cluster, sitting on
                    the $62k −22.33M strike
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-24 00:01Z
                  </td>
                  <td className="dn-flag">fresh · 7d 1h bars · 22 assets · 167 rows · regime NORMAL (mean |r| 0.298, tightened from 0.286 on 06-23)</td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z-score panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-23 22:15Z render</td>
                  <td className="dn-flag">
                    ~1.9h render lag · the FRED Tier-1 daily series printed fresh deltas
                    and carry <b>no stale flag</b> this cut (was stale-4d on 06-23): 10Y
                    4.46% → <b>4.51%</b> (+5.0bp, firmed back toward the gate), TIPS 2.21%
                    → <b>2.28%</b> (+7.0bp, EXTREME RISK-OFF), HY OAS <b>2.65%</b> (−1.0bp,
                    RISK-ON), DXY <b>101.39</b> (+0.37 day, EXTREME RISK-OFF, firmer above
                    100) · MOVE bond vol <b>70.0</b> (+4.62 day, still loose) · Fed net liq
                    $5.849T · USD/JPY 161.56 · NFCI stale 11d · WTI $84.7 stale 8d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix</td>
                  <td className="dn-v-cell">parquet last bar 2026-06-24 00:07Z (close $62,768)</td>
                  <td className="dn-flag">
                    fresh kline (exchange OHLC, independent of the frozen live tape) ·
                    offsets recomputed vs the parquet last-bar close, the freshest
                    available spot while the live tape is frozen · the displayed weekly
                    ladder uses the 2023→ subset (183 weekly bars), so no W-SMA200 row;
                    the 200W floor is recomputed directly from the full-history glob —
                    355 completed weekly W-MON bars (2019→present), excluding the
                    in-progress 06-29 week — = <b>$62,443</b>, unchanged vs the $62,443
                    the 06-23 note pinned (a slow weekly SMA, ~$250/wk) · weekly_200sma.json
                    absent this cut, so the ratio percentile / last-event stay unsourced,
                    not fabricated
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
              <span className="dn-v bear">−7.24% (STALE · 06-17 06:43Z · 161.4h)</span>
              <span className="dn-src">live_db raw funding −0.006608 × 1095 = −7.24% ann (NOT ×100) · LAST-KNOWN at the 06-17 06:43Z freeze, now 161.4h stale, not a current read · last-available ann over the 24h+1m inclusive sampled window ending at the freeze (1,442 rows): mean +0.20%, range −7.24% / +7.21%, 819 / 1,442 rows negative — a balanced, two-sided book at the point the tape died · byte-for-byte the same frozen row carried by the 06-19 / 06-20 / 06-22 / 06-23 notes</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · vs 06-23</span>
              <span className="dn-v">tape frozen — not computable</span>
              <span className="dn-src">the live tape has not written since 06-17 06:43Z, so there is still no current funding to difference against the 06-23 note · last-known print at the freeze was −7.24% ann (shorts paying longs); the leverage gate remains un-assessable an eighth day running</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−468 BTC (−0.45%) · STALE window</span>
              <span className="dn-src">live_db oi_btc 102,945 at the 06-17 06:43Z freeze vs the start of a 24h+1m inclusive sampled window (1,442 rows) · the window ENDS at the freeze, NOT into the 00:08Z snapshot — it describes the tape up to 06-17 06:43Z and is 161.4h out of date</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bear">59.47 / 40.53 · STALE</span>
              <span className="dn-src">live_db `mkt_long_pct` at the 06-17 06:43Z freeze (was 58.29% at the start of the 24h+1m inclusive sampled window — a +1.18pt long add into the roll-over) · last-known, 161.4h stale</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−37.29k · FEED DEAD ~286.5h</span>
              <span className="dn-src">long 13,532.4 − short 50,825.7 · this triple has been byte-for-byte constant since 2026-06-12 01:36Z (~286.5h / ~11.94 days) — it is a FROZEN value, NOT a current positioning read; carried only to mark the dead feed</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">NON-COMPUTABLE</span>
              <span className="dn-src">SM feed frozen ~11.94 days · |Δ| / prior_net cannot be computed — there is no current SM net to difference · the squeeze-cycle / re-stack framework is blind this cut, a continuation of the 06-16 / 06-18 / 06-19 / 06-20 / 06-22 / 06-23 ON-HOLD</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">44.5% / 42.76%</span>
              <span className="dn-src">GEX median IV across 892 instruments (00:01Z, fresh) vs 30D close-to-close RV 42.76% off parquet — chain richness only ~+1.74pt, essentially priced to realised; RV stays elevated (was 42.58% on 06-23, 24.91% on 05-31) · IV is a chain-median across 892 instruments, NOT a tradable spread</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bear">−2.18% (below)</span>
              <span className="dn-src">flip $64,163 (was $64,580 · slipped −$417) · vs parquet spot $62,768 (62,767.90 / 64,163 − 1 = −2.175%) / GEX file Deribit idx $62,857 (62,857 / 64,163 − 1 = −2.036%, file reads −2.0%) — both references BELOW the flip a second night, tile rounds the spot side to −2.18% · net GEX −64.4M (net SHORT gamma, DEEPENED from −35.1M) · the 26JUN26 monthly −61.89M deepened, 2.3 DTE</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The fade the 06-23 note flagged extended — spot lost the last positive
                daily MA, wicked below the $62,443 200W floor intraday again (after prior
                intraday breaches on 06-18 and 06-19, daily closes holding above each
                time), and the dealer book deepened its net-short-gamma into
                a 2.3-DTE 26JUN opex, all still read through a dead derivatives tape, an
                eighth day running
              </span>. Spot prints{' '}
              <span className="dn-tag bear">$62,768, −1.84% on 24h</span> at the 00:07Z
              parquet bar (the MTF scan reads −1.90% on its own window), down from the
              06-23 $63,961, and the structure deteriorated on every fresh dimension. The
              one structural positive the lineage carries held its definition but is now
              under direct attack: the 200W floor passed its 22JUN weekly-close test
              ($63,990, +2.48% above $62,443) and that hold still stands, but the
              in-progress 06-29 week now reads only{' '}
              <span className="dn-tag bear">$62,768, +0.52% above the floor</span> (was
              +2.43% on 06-23), the 06-23 daily close finalized at{' '}
              <span className="dn-tag bear">$62,697 (+0.41% above)</span>, and the 24h low
              wicked to <span className="dn-tag bear">$61,870–$61,975 — below the floor</span>{' '}
              intraday before recovering. Spot also lost{' '}
              <span className="dn-tag bear">D-SMA20 $63,426 (−1.04%)</span>, the single
              positive daily-MA offset the 06-23 note rested on, so the daily ladder is
              now entirely overhead and the 200W floor is the lone line beneath spot. The
              dealer book{' '}
              <span className="dn-tag bear">deepened −35.1M → −64.4M net-short-gamma</span>{' '}
              as the 26JUN26 monthly thickened{' '}
              <span className="dn-tag bear">−41.99M → −61.89M (2.3 DTE)</span> and spot
              fell deeper into the cluster, onto the $62k −22.33M strike. MTF deteriorated
              to <span className="dn-tag bear">1 bull / 8 bear / 1 neutral</span> (was
              1/7/2): the engine frames that carried golden crosses on 06-23 rolled to
              water-down death crosses (4h / 8h / 12h), a fresh 1w water-down death cross
              just printed, and the constructive 1h ⚡TD9 BUY of 06-23 is gone — replaced
              by a <span className="dn-tag bear">30m ⚡TD9 SELL (overbought reversal
              hint)</span>, the bounce read exhausted. Macro firmed against BTC: 10Y +5bp
              to 4.51% (now 2bp from the re-grow gate), TIPS +7bp, DXY +0.37 to 101.39.{' '}
              <span className="dn-em">
                The operational fact is unchanged and still binding: the OKX monitor has
                now been frozen 161.4h (last row 2026-06-17 06:43Z), funding / OI / CVD /
                basis / retail are last-known and stale, and the SM positioning book has
                been dead ~11.94 days — SM net and the cut-fraction are non-computable. The
                desk cannot see whether the leg down was distribution or thin drift. The
                read is on price, gamma and MTF alone.
              </span>{' '}
              The book stays flat: the floor still holds its weekly close, but every other
              read worsened and the book is now pressed onto the 200W line with a deepening
              short-gamma amplifier 2.3 DTE, on a positioning-blind tape — no scout and no
              short can be sized here.
            </p>

            <p>
              BTC prints <span className="dn-tag">$62,768</span> at the parquet last bar
              (00:07Z),{' '}
              <span className="dn-tag bear">−1.84%</span> on 24h (vs $63,946 one day prior;
              the MTF scan reads −1.90% on its own 00:01Z window — the spread is the
              reference window, not a data conflict), inside a{' '}
              <span className="dn-tag">$64,228 / $61,975</span> parquet 24h close range (the
              MTF scan OHLC 24h H/L are $64,247 / $61,870). The Deribit index reads $62,857
              at 00:01Z and the MTF scan spot is $62,768 — so the freshest spot is
              well-corroborated across three independent fresh sources (parquet kline
              $62,768, GEX Deribit index $62,857, MTF scan $62,768), even though the
              live_db tape that normally supplies it is frozen at $65,616 (06-17 06:43Z,
              161.4h stale).{' '}
              <span className="dn-signal">The structural read has moved from a held
              weekly-close floor under a failed reclaim to a held weekly-close floor under
              direct intraday attack</span>: the 22JUN weekly close $63,990 (+2.48% above
              the floor) is still the resolved hold and the 06-15 200W reclaim thesis is
              still confirmed on a weekly-close basis — but the daily closes have walked
              down to the line (06-20 $64,270, 06-21 $63,287, 06-22 $63,990, 06-23 $62,697),
              the 06-23 close sits only +0.41% above the floor, and tonight&rsquo;s 24h low
              pierced it intraday. Per the framework, an intraday wick is not the break and
              a daily close below is the early warning — neither has fired, the 06-23 close
              and the in-progress 06-24 bar both hold above — but the margin has compressed
              from +2.43% to +0.52% in a single session.{' '}
              <span className="dn-em">
                The weekly-close hold is intact and remains the one structural positive,
                but the buffer above the floor has nearly gone, the last positive daily MA
                is lost, the dealer amplifier deepened into a 2.3-DTE opex, and the desk
                still cannot read the tape that would say whether the line is being
                defended or distributed.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning <span className="dn-roman">I · LIVE TAPE FROZEN 161.4h (eighth day) · SM book dead ~11.94 days · funding/OI/flow last-known stale · the desk cannot see how the leg onto the 200W floor was absorbed</span>
            </h2>

            <p>
              <span className="dn-signal">
                The single most important source of this note — the live derivatives tape —
                is still down, an eighth day running
              </span>. The OKX monitor has appended no row to live_db.json since{' '}
              <span className="dn-tag bear">2026-06-17 06:43Z</span> (t = &ldquo;06-17
              14:43&rdquo; BJ; the file mtime 06-17 06:43:08Z confirms the write stopped
              there; the process status is not archived or verified in this cut, so the note
              asserts the missing tape, not a live/hung process). That is now{' '}
              <span className="dn-tag bear">161.4h of missing tape</span> against the 00:08Z
              snapshot anchor — the 06-20 note flagged it at 65.4h, the 06-22 note at 130.6h,
              the 06-23 note at 137.4h, and the outage has run another ~24h without a write.
              Everything the live tape carries — funding, open interest, spot/futures CVD,
              perp basis, retail long%, taker-net, big-print flow, aggressor skew — is
              therefore{' '}
              <span className="dn-em">last-known at 06-17 06:43Z and not current</span>. The
              smart-money positioning triple (long_btc / short_btc / net_btc) has been
              byte-for-byte constant —{' '}
              <span className="dn-tag">13,532.4 / 50,825.7 / −37,293.3</span> — since{' '}
              <span className="dn-tag bear">2026-06-12 01:36Z</span>, ~286.5h (~11.94 days).
              The 06-16 note flagged this dead feed at ~94.5h and put the squeeze-cycle ON
              HOLD; the 06-22 note carried it at ~255.7h, the 06-23 note at ~262.5h; today it
              is ~286.5h and still dead.{' '}
              <span className="dn-em">
                SM net is non-computable as a current read, and the SM cut fraction (|Δ| /
                prior_net) cannot be formed — there is no current SM net to difference. Any
                positioning claim in this note is explicitly historical, not live.
              </span>
            </p>

            <p>
              For completeness, the <em>last-available</em> tape readings — all pinned to
              the 06-17 06:43Z freeze and now 161.4h out of date, and byte-for-byte the same
              readings the 06-19 → 06-23 notes carried because it is the same frozen row —
              are: funding <span className="dn-tag bear">−7.24% ann</span> (raw −0.006608 ×
              1095; shorts paying longs at the freeze), with the last-available path balanced
              two-sided over the 24h+1m inclusive sampled window (1,442 rows: mean{' '}
              <span className="dn-tag">+0.20% ann</span>, range{' '}
              <span className="dn-tag">−7.24% / +7.21%</span>, 819 / 1,442 rows negative); OI{' '}
              <span className="dn-tag bear">102,945 BTC, −468 over the trailing 24h+1m window
              (−0.45%)</span>; retail{' '}
              <span className="dn-tag">mkt_long_pct 59.47%</span> (a +1.18pt long add over
              that same window); perp basis{' '}
              <span className="dn-tag bear">−$57.43 discount</span> to spot (window mean
              −$58.62, range −$146.17 / +$67.04).{' '}
              <span className="dn-em">
                Read this as a near-eight-day-old fingerprint, not a signal: a two-sided
                funding book, OI bleeding, retail adding longs into the first leg of
                weakness. None of it can be carried forward to the 00:08Z snapshot — and it
                predates the entire 06-18 → 06-22 floor-hold sequence AND the 06-23 → 06-24
                leg back down onto the floor, so it says nothing about how positioning
                absorbed the floor defence or tonight&rsquo;s push into the line. The desk
                treats the positioning dimension as unknown, and the leg onto the floor as
                positioning-unconfirmed.
              </span>
            </p>

            <h2 className="dn-sec">
              Structure <span className="dn-roman">II · price/MTF FRESH · multi-TF resonance bearish DEEPENED to 1 bull / 8 bear / 1 neutral · engine frames rolled to water-down death crosses (4h/8h/12h), 1w death cross fresh · 1h TD9 BUY of 06-23 replaced by 30m TD9 SELL (overbought, bounce exhausted) · regime still 5/9 reversal (mean-reversion) · spot lost D-SMA20, daily ladder fully overhead, 200W floor $62,443 the lone line below (+0.52%, wicked intraday)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The MTF map is fresh, deteriorated a step further to multi-TF bearish, and
                the engine frames that hinted a bounce on 06-23 have rolled over — the
                constructive counter-notes thinned to almost nothing
              </span> — the one dimension, with the dealer map, the desk can still trust
              today. The 00:01Z scan tags{' '}
              <span className="dn-tag bear">1 bull / 8 bear / 1 neutral across 10 frames</span>,
              net read <em>multi-TF resonance bearish · sell the bounce</em> — a step worse
              than the 06-23 scan&rsquo;s 1 bull / 7 bear / 2 neutral as the fade rolled the
              mid frames into death crosses. The regime line still reads{' '}
              <span className="dn-tag">5/9 reversal regime (JT&lt;0) — mean-reversion /
              bounce-favoured, trend-follow with caution</span> (was 6/9 on 06-23), so the
              classifier still leans mean-reversion — but the engine no longer carries a
              constructive trigger to act on it. The 06-23 scan&rsquo;s{' '}
              <span className="dn-tag">1h ⚡TD9 BUY</span> is gone; in its place a{' '}
              <span className="dn-tag bear">30m ⚡TD9 SELL printed at $62,762</span> (an
              overbought reversal hint — the bounce off the lows read as exhausted, not
              building). The mid frames flipped bearish: the{' '}
              <span className="dn-tag bear">4h, 8h and 12h all carry fresh water-down death
              crosses</span> (5b / 3b / 1b respectively, where 06-23 had the 4h and 8h on
              golden crosses), the{' '}
              <span className="dn-tag bear">1w water-down death cross is fresh again (just
              printed)</span> with RSI 35.1 and DIF −5,622 (a weak below-water death cross,
              bearish-continuation), and the 3d carries a water-up death cross 9b. The only
              surviving golden crosses are the fast/leftover frames (15m 16b, 30m 21b, 1h
              4b) and the 1d water-down golden cross 11b. Cloud: 12h / 1d / 3d / 1w all below;
              only the 1M holds above. The thin constructive set is the{' '}
              <span className="dn-tag bull">1M TD8 buy — one more close</span> and three
              bottom divergences (15m / 1h / 1w).{' '}
              <span className="dn-em">
                Straight read: the frame stack deepened to bearish, the mid frames rolled to
                death crosses, and the engine&rsquo;s lone constructive trigger from 06-23
                (the 1h TD9 buy) flipped to a 30m TD9 sell — the bounce that the
                mean-reversion regime was waiting to confirm did not build, it exhausted. The
                regime classifier still says mean-reversion, but there is no engine print to
                trade it long; the dominant tape read is the 1w death cross and the lost
                D-SMA20. This is a bearish trend frame whose oversold-bounce setup just got
                weaker, not stronger.
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">62,762</td><td className="num">60.2</td><td className="bull">golden (water-dn) 16b</td><td className="neut">in cloud 62.4k–62.9k 16b</td><td>Sell 4</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">62,762</td><td className="num">55.8</td><td className="bull">golden (water-dn) 21b</td><td className="bear">below ↑62.8k 45b</td><td>⚡ TD9 SELL</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">62,764</td><td className="num">46.1</td><td className="bull">golden (water-dn) 4b</td><td className="bear">below ↑64.4k 20b</td><td>Sell 4</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">62,764</td><td className="num bear">40.4</td><td className="bear">death (water-dn) 5b</td><td className="bear">below ↑64.1k 5b</td><td>Sell 1</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">62,766</td><td className="num">42.4</td><td className="bear">death (water-dn) 3b</td><td className="bear">below ↑64.6k 2b</td><td>Buy 5</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">62,766</td><td className="num">41.6</td><td className="bear">death (water-dn) 1b</td><td className="bear">below ↑64.6k 65b</td><td>Buy 4</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">62,768</td><td className="num bear">37.7</td><td className="bull">golden (water-dn) 11b</td><td className="bear">below ↑76.5k 23b</td><td>Buy 2</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">62,768</td><td className="num bear">36.7</td><td className="bear">death (water-up) 9b</td><td className="bear">below ↑73.4k 7b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">62,768</td><td className="num bear">35.1</td><td className="bear">death (water-dn) 刚印 (just printed)</td><td className="bear">below ↑100.3k 21b</td><td>Buy 6</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">62,768</td><td className="num">42.4</td><td className="neut">—</td><td className="bull">above ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z scan (08:01 Beijing; rolling latest
                    file, archived verbatim at
                    /opt/desk-note/snapshots/2026-06-24-0006/). Net read{' '}
                    <em>multi-TF resonance bearish · sell the bounce (1 bull / 8 bear / 1
                    neutral)</em>; regime <em>5/9 reversal regime (JT&lt;0, mean-reversion /
                    bounce-favoured, trend-follow with caution)</em>; reversal divergences{' '}
                    <em>top div 15m / 1h / 4h, bottom div 15m / 1h / 1w</em>. Header alerts:{' '}
                    <em>1w water-down death cross (just printed)</em>,{' '}
                    <em>12h water-down death cross (1 bar ago)</em>, <em>30m ⚡TD9 SELL at
                    $62,762 (overbought reversal hint)</em>, <em>1M TD8 Buy — one more
                    close</em>. Scan spot $62,768, 24h −1.90%, 24h H/L $64,247 / $61,870, qVol
                    $10.85B. Closes are in-progress bars; treat every value as provisional
                    until each TF closes.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              The MA matrix is the same deep overhead wall as 06-23, but spot has now slipped
              below D-SMA20 too, so the entire daily ladder is overhead and the 200W floor is
              the lone line beneath spot. $62,768 sits{' '}
              <span className="dn-tag bull">+0.52% above the full-history W-SMA200 200W floor
              $62,443</span> — the only positive offset on the matrix — and{' '}
              <span className="dn-tag bear">−1.04% below D-SMA20 $63,426</span>, the line the
              06-23 note rested on (+0.66% then), now lost. The first overhead line above
              D-SMA20 is{' '}
              <span className="dn-tag bear">D-EMA20 $64,849 (−3.21%)</span>, then the
              cycle-proxy{' '}
              <span className="dn-tag bear">W-EMA200 $67,535 (−7.06%)</span>, then a dense
              overhead band: <span className="dn-tag bear">D-EMA50 $68,566 (−8.46%)</span>,{' '}
              <span className="dn-tag bear">D-SMA50 $71,126 (−11.75%)</span>,{' '}
              <span className="dn-tag bear">W-SMA20 $71,137 (−11.77%)</span>,{' '}
              <span className="dn-tag bear">D-EMA100 $71,714 (−12.47%)</span>,{' '}
              <span className="dn-tag bear">D-SMA150 $71,721 (−12.48%)</span>,{' '}
              <span className="dn-tag bear">D-SMA100 $72,005 (−12.83%)</span>,{' '}
              <span className="dn-tag bear">W-EMA20 $73,399 (−14.48%)</span>,{' '}
              <span className="dn-tag bear">W-EMA150 $74,062 (−15.25%)</span>,{' '}
              <span className="dn-tag bear">D-EMA150 $74,629 (−15.89%)</span>,{' '}
              <span className="dn-tag bear">W-SMA150 $75,676 (−17.06%)</span>,{' '}
              <span className="dn-tag bear">D-SMA200 $76,321 (−17.76%)</span>,{' '}
              <span className="dn-tag bear">D-EMA200 $77,383 (−18.89%)</span>. Far above and
              disused: W-EMA100 $80,608 (−22.13%), W-EMA50 $81,881 (−23.34%), W-SMA100
              $88,487 (−29.07%), W-SMA50 $89,847 (−30.14%).{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-06-24 00:07Z (close $62,767.90);
                offsets recomputed against that same last-bar close, which is the freshest
                available spot while the live tape is frozen. Displayed MA levels are
                $-rounded; offsets computed from exact series values. The displayed weekly
                ladder uses the 2023→ subset (183 weekly bars), so W-SMA200 is non-computable
                there and W-EMA200 $67,535 seeds from available history; the 200W floor
                $62,443 is recomputed separately from the full-history glob (355 completed
                weekly W-MON bars, excluding the in-progress 06-29 week). Daily closes: 06-18
                $62,924, 06-19 $63,513, 06-20 $64,270, 06-21 $63,287, 06-22 $63,990 (= the
                22JUN weekly close), 06-23 $62,697, 06-24 (in-progress, 5-min bar) $62,768 —
                the 06-23 close holds +0.41% above the floor, the in-progress 06-24 bar +0.52%,
                and the 24h low $61,975 (MTF $61,870) wicked below it intraday without a daily
                close below.
              </span>
            </p>

            <h2 className="dn-sec">
              Dealer map <span className="dn-roman">III · book DEEPENED net-short-gamma aggregate −64.4M (was −35.1M on 06-23, −0.6M flat on 06-22) · 26JUN26 monthly DEEPENED to −61.89M (2.3 DTE) · spot fell DEEPER below the flip $64,163 (−2.18%) onto the $62k −22.33M strike inside the $58k–$64k cluster · the re-amplification of 06-23 extended a second night</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book&rsquo;s re-amplification extended: aggregate gamma deepened
                from −35.1M to −64.4M net-short-gamma as opex closed to 2.3 DTE and spot fell
                deeper into the put-heavy strikes
              </span>. Aggregate GEX is{' '}
              <span className="dn-tag bear">−64.4M / 1%</span> (was −35.1M on 06-23, −0.6M
              flat on 06-22, −111.1M on 06-19); the book is more net-short-gamma than at any
              point since the 06-19 trough. The 0-γ flip slipped{' '}
              <span className="dn-tag">$64,580 → $64,163 (−$417)</span>, and spot $62,768 sits{' '}
              <span className="dn-tag bear">−2.18% below the flip</span> on spot-denominated
              math (62,767.90 / 64,163 − 1 = −2.175%); the GEX file&rsquo;s own &ldquo;dist to
              flip&rdquo; reads −2.0% off its Deribit-index $62,857 ($89 above parquet spot),
              which is <span className="dn-tag bear">−2.04%</span> (62,857 / 64,163 − 1 =
              −2.036%) — both references below the flip a second night, the gap to the flip
              roughly doubled from −0.96% on 06-23. The wall map is put-heavy below and at
              spot: <span className="dn-tag bear">$60k −27.70M</span> (heaviest wall, the
              cluster floor),{' '}
              <span className="dn-tag bear">$62k −22.33M</span> (right at spot),{' '}
              <span className="dn-tag bear">$63k −11.90M</span>,{' '}
              <span className="dn-tag bear">$64k −11.65M</span>,{' '}
              <span className="dn-tag bear">$61k −10.17M</span>,{' '}
              <span className="dn-tag bull">$80k +8.48M</span>,{' '}
              <span className="dn-tag bear">$58k −7.76M</span>,{' '}
              <span className="dn-tag bear">$55k −7.11M</span>,{' '}
              <span className="dn-tag bull">$67k +6.41M</span>,{' '}
              <span className="dn-tag bear">$50k −5.31M</span>.{' '}
              <span className="dn-em">
                The listed major walls from $58k–$64k total roughly −91M and bracket spot
                directly — spot at $62,768 sits inside the cluster, on the $62k −22.33M
                strike, which is the structural mechanism behind the deepening: a dealer book
                short gamma right at spot amplifies the next move in either direction rather
                than dampening it, and the cluster floor at $60k −27.70M sits just below the
                200W line. The positive walls ($67k, $80k) all sit overhead and offer no
                support beneath spot.
              </span>{' '}
              By expiry the concentration is the 26JUN26 monthly{' '}
              <span className="dn-tag bear">−61.89M (2.3 DTE)</span> — DEEPENED from −41.99M
              on 06-23 and −28.36M on 06-22, the monthly amplifier re-thickened past its
              06-20 weight (−49.31M) as opex closed in. The near strip is negative: 24JUN26
              0.3 <span className="dn-tag bear">−7.67M</span>, 25JUN26 1.3 −0.38M, with the
              27JUN26 3.3 the first positive at +2.10M. Forward of the monthly the strip is
              small and mixed — 3JUL26 9.3 is still slightly negative at −4.45M — then mostly
              positive from 10JUL onward: 10JUL26 16.3 +1.28M, 31JUL26 37.3{' '}
              <span className="dn-tag bull">+9.27M</span>, 28AUG26 65.3 +2.89M, 25SEP26 93.3
              −0.72M, 25DEC26 184.3 +2.10M, 26MAR27 275.3 +0.53M. No forward expiry carries
              the 26JUN weight — the entire concentrated downside-amplifier risk is the one
              monthly chunk, 2.3 DTE, and it has deepened rather than decayed into opex. (The
              spot-referenced aggregate −64.4M is the net GEX at spot; the by-expiry rows are
              an independent decomposition and need not sum to it.)
            </p>

            <p>
              IV median across 892 instruments is{' '}
              <span className="dn-tag">44.5%</span> (firmed from 43.6% / 890 instruments on
              06-23) against 30D close-to-close RV of{' '}
              <span className="dn-tag">42.76%</span> — chain-level richness only{' '}
              <span className="dn-tag">~+1.74pt</span>, essentially priced to realised, with
              RV staying elevated (42.76% today vs 42.58% on 06-23 and 24.91% on 05-31 — the
              high-vol regime that started with the 06-08 → 06-18 down-leg persists). A
              chain-median across 892 instruments, <span className="dn-em">not</span> a
              tradable spread; expiry-/strike-level vega, skew and term structure remain not
              loaded; the vol read stays framework-only. RV methodology: 30D close-to-close,
              logret.std × √365 × 100 on the last 30 daily log returns (= 31 consecutive
              daily closes) anchored to parquet last bar 2026-06-24 00:07Z; underlying close
              window range $60,850 – $77,282. (For reference, the last 29 returns / 30 closes
              reads 43.32%; the 42.76% page value comes from 30 returns.) P/C ratio 0.62,
              Call OI 276,957 / Put OI 170,367 BTC.
            </p>

            <h2 className="dn-sec">
              Macro <span className="dn-roman">IV · render fresh (~1.9h), Tier-1 daily printed fresh deltas with NO stale flag this cut — 10Y 4.51% (+5bp, firmed to 2bp from the gate), TIPS 2.28% (+7bp) EXTREME RISK-OFF, HY OAS 2.65% RISK-ON, DXY 101.39 (+0.37) EXTREME RISK-OFF · BTC the laggard in a broadly red TradFi tape, lag to NQ −2.49pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                The macro panel render is fresh (~1.9h), the Tier-1 daily series printed
                fresh deltas with no stale flag this cut, and the read firmed against risk —
                rates ticked back up toward the gate, real-rates tightened, and the dollar
                pressed further above 100
              </span>. Dashboard render is 2026-06-23 22:15Z, ~1.9h before the snapshot. US
              10Y nominal <span className="dn-tag bear">4.51% (+5.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.76</span> — tight regime, RISK-OFF, firmed 5bp
              back from 06-23&rsquo;s 4.46% to within 2bp of the 4.53% re-grow gate. 10Y TIPS
              real <span className="dn-tag bear">2.28% (+7.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+3.03</span> — EXTREME RISK-OFF, the tightest line
              on the panel, tightened materially. 5Y5Y BE inflation{' '}
              <span className="dn-tag bull">2.18% (−5.0bp)</span>, 10Y breakeven{' '}
              <span className="dn-tag bull">2.23% (−2.0bp)</span> — inflation expectations
              softening, both episodic. HY OAS{' '}
              <span className="dn-tag bull">2.65% (−1.0bp)</span>, regime z{' '}
              <span className="dn-tag bull">−1.61</span> — credit still loose, a RISK-ON
              episodic, a touch tighter on the day. MOVE bond vol is{' '}
              <span className="dn-tag">70.0</span> — up +4.62 on the day, still &ldquo;loose.&rdquo;
              The dollar firmed: DXY <span className="dn-tag bear">101.39 (+0.37 day)</span>,
              regime z <span className="dn-tag bear">+2.98</span>, episodic z +2.55 — EXTREME
              RISK-OFF, pressing further above 100. Fed net liquidity{' '}
              <span className="dn-tag bear">$5.849T (−0.038T)</span>, regime z{' '}
              <span className="dn-tag">+0.05</span> but episodic z{' '}
              <span className="dn-tag bear">−2.42</span> — the |episodic z| &gt; 1.5
              day-change surprise the dashboard flags. USD/JPY{' '}
              <span className="dn-tag">161.56 (−0.01 day)</span>, regime z +1.53, episodic
              +1.86; US-JP 10Y spread{' '}
              <span className="dn-tag bear">1.86% (+5.0bp)</span>; USD/CNY{' '}
              <span className="dn-tag">6.7671</span>; WTI{' '}
              <span className="dn-tag">$84.7 (stale 8d)</span>.{' '}
              <span className="dn-em">
                Net: the macro backdrop firmed against BTC this cut — the dollar / real-rate
                EXTREME RISK-OFF headwind intensified, with the 10Y ticking back toward the
                gate and TIPS tightening 7bp. The re-grow gates: the 10Y gate 4.53% is now
                just 2bp away (at 4.51%, the closest of the lineage), and the HY OAS gate
                2.78% is 13bp away (at 2.65%). The reclaim-long rates filter (10Y &lt; 4.55%)
                stays TRUE at 4.51% but with less room. The dollar / real-rate firming is a
                real and now-stiffer macro headwind layered onto the endogenous read; credit
                and the OAS gate have not flipped the tail thesis, but the 10Y leg is one
                small print from firing.
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
                <tr><td>US 10Y nominal</td><td className="num">4.51%</td><td className="num bear">+5.0bp</td><td className="num bear">+1.76</td><td className="bear">tight · RISK-OFF · 2bp from gate</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.28%</td><td className="num bear">+7.0bp</td><td className="num bear">+3.03</td><td className="bear">tightest line · EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.18%</td><td className="num bull">−5.0bp</td><td className="num">−0.69</td><td className="neut">soft · episodic</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.23%</td><td className="num bull">−2.0bp</td><td className="num">−1.67</td><td className="neut">soft · episodic</td></tr>
                <tr><td>HY OAS</td><td className="num">2.65%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.61</td><td className="bull">loose · risk-on episodic</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.505</td><td className="num">0.00</td><td className="num">+0.24</td><td className="stale">weekly · stale 11d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">70.0</td><td className="num bear">+4.62</td><td className="num bull">−0.51</td><td className="bull">loose · up on the day</td></tr>
                <tr><td>DXY</td><td className="num">101.39</td><td className="num bear">+0.37</td><td className="num bear">+2.98</td><td className="bear">EXTREME RISK-OFF · firmer above 100</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.849T</td><td className="num bear">−0.038T</td><td className="num">+0.05</td><td className="bear">drained · episodic −2.42</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.56</td><td className="num">−0.01</td><td className="num bear">+1.53</td><td className="bear">firm · z +1.53</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">1.86%</td><td className="num bear">+5.0bp</td><td className="num bull">−0.97</td><td className="bear">widened · tight</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7671</td><td className="num">−0.00</td><td className="num bull">−1.64</td><td className="neut">loose</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp (monthly)</td><td className="num bear">+2.56</td><td className="stale">monthly · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 167 rows, summary 00:01Z —{' '}
              <span className="dn-em">a 7-day rolling read, not today</span>). Mean
              off-diagonal <span className="dn-tag">|r| 0.298</span> — tightened from the
              0.286 of 06-23 but still in the NORMAL band, and{' '}
              <span className="dn-signal">BTC stays coupled to the TradFi risk
              complex</span>. BTC&rsquo;s top ties remain the equity / industrial-metal
              cluster: SP500 <span className="dn-tag">+0.586</span>, NQ{' '}
              <span className="dn-tag">+0.544</span>, NVDA{' '}
              <span className="dn-tag">+0.471</span>, COPPER{' '}
              <span className="dn-tag">+0.412</span>, GOLD{' '}
              <span className="dn-tag">+0.392</span>, URNM{' '}
              <span className="dn-tag">+0.388</span>, SILVER{' '}
              <span className="dn-tag">+0.386</span>, JP225{' '}
              <span className="dn-tag">+0.366</span>, with the energy complex inverse (CL{' '}
              <span className="dn-tag">−0.203</span>, BRENT{' '}
              <span className="dn-tag">−0.196</span>, NGAS{' '}
              <span className="dn-tag">−0.363</span>) and JPY{' '}
              <span className="dn-tag">−0.177</span>. 7d performance has the whole risk
              complex deeply red, with BTC the laggard:{' '}
              <span className="dn-tag bear">BTC −4.49%</span>, NQ{' '}
              <span className="dn-tag bear">−2.00%</span>, SP500{' '}
              <span className="dn-tag bear">−1.92%</span>, JP225{' '}
              <span className="dn-tag bear">−0.06%</span>, NVDA{' '}
              <span className="dn-tag bear">−3.24%</span>, META{' '}
              <span className="dn-tag bear">−5.93%</span>, MSFT{' '}
              <span className="dn-tag bear">−4.77%</span>, GOOGL{' '}
              <span className="dn-tag bear">−6.56%</span>, AMZN{' '}
              <span className="dn-tag bear">−5.02%</span>, TSLA{' '}
              <span className="dn-tag bear">−5.06%</span>; metals crushed (GOLD{' '}
              <span className="dn-tag bear">−5.44%</span>, SILVER{' '}
              <span className="dn-tag bear">−12.17%</span>, PLAT{' '}
              <span className="dn-tag bear">−8.62%</span>, PALL{' '}
              <span className="dn-tag bear">−9.11%</span>); energy down (CL{' '}
              <span className="dn-tag bear">−4.18%</span>, BRENT{' '}
              <span className="dn-tag bear">−3.65%</span>, NGAS{' '}
              <span className="dn-tag bear">−2.34%</span>).{' '}
              <span className="dn-em">
                BTC&rsquo;s 7d return −4.49% vs NQ −2.00% is a lag of −2.49pt (vs −2.71pt on
                06-23) — and the character is the same as the last two notes: BTC
                underperforms inside a broadly red risk tape (equities −2% to −7%, metals
                −5% to −12%, energy down), not a decoupling where TradFi rallied and BTC did
                not. The endogenous-to-crypto read still holds for the down-leg structure
                (dealer gamma deepening, spot back under the flip, 200W floor under intraday
                attack), but the dollar / real-rate firming and a deeply red equity / metals
                tape stay a genuine macro headwind on top of it.
              </span>{' '}
              JGB monthly 2.65% carries an EXTREME RISK-OFF monthly tag — do not lean on it.
            </p>

            <h2 className="dn-sec">
              Trade book <span className="dn-roman">V · book FLAT · 200W floor weekly-close hold INTACT but UNDER DIRECT ATTACK — spot +0.52% above (was +2.43%), 24h low wicked below intraday, no daily close below yet · scout STILL stood down (spot deeper below flip, tape blind, book deepened short-gamma, bounce exhausted) · macro tail 10Y gate 2bp away (closest of lineage) · squeeze-cycle ON HOLD (SM dead ~11.94 days)</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book is flat and stays flat — the cycle floor still holds its weekly
                close, but the buffer above it has nearly gone, every other read worsened,
                and the binding constraint is still data integrity
              </span>. The structural positive vs the down-leg is intact but narrowing: the
              22JUN weekly closed $63,990, +2.48% above the $62,443 floor, so the
              weekly-close test remains resolved as a hold and the 200W reclaim thesis is
              still confirmed on a weekly-close basis. But the buffer compressed hard: the
              in-progress 06-29 week reads only +0.52% above the floor (was +2.43% on 06-23),
              the 06-23 daily close landed +0.41% above, and the 24h low wicked to
              $61,870–$61,975, below the floor, intraday. Per the framework an intraday wick
              is not the break and no daily close below has fired — but the floor is now
              under direct attack rather than comfortably held. The scout still cannot be
              taken: spot is −2.18% below the flip (deeper than 06-23&rsquo;s −0.96%), the
              positioning legs (SM short bleed, funding posture, cover-flow) all require a
              live tape and there is none for an eighth day, the dealer book deepened to
              −64.4M net-short-gamma with the 26JUN monthly −61.89M 2.3 DTE, and the
              engine&rsquo;s lone constructive trigger (the 06-23 1h TD9 buy) flipped to a 30m
              TD9 sell — there is no print to scout long into. No new short either: the floor
              still holds its weekly close, the SM book is unreadable, and shorting a
              held-floor that the −61.89M monthly already prices, 2.3 DTE, with stale flow, is
              a poor entry. The trade book today is: no shorts, no scout, no fresh hedge —
              fix the tape AND watch the daily close vs the floor and the flip re-reclaim
              before re-arming.
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W cycle floor watch — WEEKLY-CLOSE HOLD INTACT but UNDER DIRECT ATTACK: the 22JUN weekly close $63,990 (+2.48%) still stands, but the in-progress week buffer compressed to +0.52%, the 06-23 close held +0.41% above, and the 24h low wicked below the floor intraday (no daily close below yet)</span>
              <div className="dn-trade-name">
                200W cycle floor watch — the weekly-close hold stands but the buffer has nearly gone: floor $62,443 = full-history W-SMA200 (355 completed weekly bars, unchanged vs the 06-23 pin), the in-progress 06-29 week reads $62,768 (+0.52%, was +2.43%), 06-23 close $62,697 (+0.41%), 24h low $61,870–$61,975 wicked below intraday
              </div>
              <div className="dn-thesis">
                The 06-23 note resolved the weekly-close test as a hold — 22JUN settled{' '}
                <span className="dn-tag bull">$63,990, +2.48% above the $62,443 floor</span>,
                the escalation (weekly close &lt; $62,440) did not fire, and the 06-15 200W
                reclaim thesis became a confirmed weekly-close hold. That hold still stands.
                But this session pressed the line hard: spot fell −1.84% on 24h, the daily
                closes walked down to the floor (06-21 $63,287, 06-22 $63,990, 06-23 $62,697),
                the 06-23 close sits only{' '}
                <span className="dn-tag bear">+0.41% above the floor</span>, and the 24h low
                wicked to <span className="dn-tag bear">$61,870–$61,975, below it</span>,
                before recovering to $62,768 (+0.52%).{' '}
                <span className="dn-em">An intraday wick is not the break and a daily close
                below is the early warning — neither has fired — but the buffer above the
                floor compressed from +2.43% to +0.52% in one session, and the next daily
                close is the level that matters.</span> The floor is the single load-bearing
                live level while everything else is stale (live tape) or framework-only, and
                it is now being directly tested rather than comfortably held.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W floor</span><span className="dn-lvl-v">$62,443 = full-history W-SMA200, recomputed this cut from the 2019→ parquet glob (355 completed weekly W-MON bars, excluding the in-progress 06-29 week); unchanged vs the 06-23 pin (slow weekly SMA, ~$250/wk) · weekly_200sma.json absent so the ratio percentile / last-event stay unsourced, not fabricated</span></div>
                <div><span className="dn-lvl-k">weekly-close hold (intact, buffer compressed)</span><span className="dn-lvl-v bull">22JUN weekly close $63,990 +2.48% above the floor still stands — the 200W reclaim thesis stays confirmed on a weekly-close basis · BUT the in-progress week reads $62,768 +0.52% above (was +2.43%) and the 24h low wicked below the floor intraday</span></div>
                <div><span className="dn-lvl-k">early warning (next daily close)</span><span className="dn-lvl-v bear">a daily close &lt; $62,443 is the early warning that the buffer is gone — the 06-23 close $62,697 and in-progress 06-24 $62,768 both hold above; an intraday wick (today&rsquo;s $61,870–$61,975) is NOT the break</span></div>
                <div><span className="dn-lvl-k">escalation (next weekly close)</span><span className="dn-lvl-v bear">a sustained weekly close &lt; $62,443 breaks the 200W floor — separate reassessment, the reclaim thesis dies and the down-leg resumes into the 26JUN −61.89M amplifier</span></div>
                <div><span className="dn-lvl-k">reclaim side (deeper below)</span><span className="dn-lvl-v bear">spot is −2.18% below the flip $64,163 and below D-SMA20 $63,426; it holds only the 200W floor; re-reclaim is a 1h close &gt; D-SMA20 then the flip — NOT a scout trigger on a blind tape (see scout)</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework, not a trade.</b> The floor watch is the single load-bearing
                live level while everything else is stale or framework-only. The weekly-close
                hold stands, but the buffer has compressed to +0.52% and the line is now
                directly tested — no position is taken on the watch: it sets the early-warning
                level (next daily close &lt; $62,443), the escalation (next weekly close below),
                and the reclaim ladder (D-SMA20 $63,426 → flip $64,163 → D-EMA20 $64,849), and
                the desk will not pre-position long into a reclaim it cannot confirm or short
                into a floor that still holds its weekly close, on a blind tape.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · scout · STILL STOOD DOWN · price pre-condition DEEPER OFFSIDE (spot −2.18% below the flip) + tape blind ~11.94 days + book deepened short-gamma + bounce exhausted (30m TD9 sell)</span>
              <div className="dn-trade-name">
                Cover-bounce scout — the flip reclaim is now twice as far offside as 06-23, the engine&rsquo;s lone constructive trigger flipped to a sell, and the scout stays stood down on a blind tape into a deepening short-gamma book
              </div>
              <div className="dn-thesis">
                The 06-22 note saw the scout&rsquo;s price pre-condition print briefly (spot
                reclaimed the flip), the 06-23 note saw it handed back (spot below the flip,
                holding D-SMA20). Tonight it deteriorated further: spot rolled $63,961 →
                $62,768, now <em>−2.18% below the flip</em> $64,163 and below D-SMA20 too,
                holding only the 200W floor. So the scout is blocked on four counts. (1) The
                price pre-condition is further offside — spot is twice as far below the flip
                as 06-23. (2) The positioning legs (SM short bleed, funding posture,
                cover-flow) all require a live tape, and there is none — the desk cannot see
                whether the leg onto the floor was distribution or thin drift. (3) The dealer
                book deepened to −64.4M net-short-gamma with spot on the $62k −22.33M strike
                inside the $58k–$64k cluster, so the book amplifies the next move rather than
                dampening it. (4) The engine&rsquo;s lone constructive trigger from 06-23 (the
                1h TD9 buy) is gone — a 30m TD9 sell printed (overbought reversal hint), so
                the bounce read is exhausted.{' '}
                <span className="dn-em">A scout long on a positioning-blind tape, deeper below
                the flip, into a deepening short-gamma book, with the bounce exhausted, is not
                a trade — the only constructive counters are the held weekly floor and the
                regime&rsquo;s mean-reversion lean, and neither is sufficient to size into
                without a tape and a confirming engine print.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v bear">stood down · no entry · price pre-condition deeper offside (spot −2.18% below the flip) — re-evaluate only after the live tape is restored AND spot re-reclaims D-SMA20 then the flip</span></div>
                <div><span className="dn-lvl-k">technical pre-condition</span><span className="dn-lvl-v bear">D-SMA20 $63,426 / flip $64,163 reclaim (NOT true — spot below both, holds only the 200W floor) AND a confirming engine print (NOT true — 1 bull / 8 bear / 1 neutral, 1w + 12h death crosses fresh, 30m TD9 SELL; the 06-23 1h TD9 buy is gone)</span></div>
                <div><span className="dn-lvl-k">data pre-condition</span><span className="dn-lvl-v bear">live tape restored (currently 161.4h frozen) AND SM feed live (currently dead ~11.94 days) — both must hold before any positioning leg can be read; this is the binding block</span></div>
              </div>
              <div className="dn-gating">
                <b>Hard rule:</b> no scout entry without a live positioning tape. The held
                weekly floor and the mean-reversion regime do not trigger a scout while the SM
                / funding / flow legs are blind, spot is deeper below the flip, the dealer book
                is more short gamma at spot, and the engine flipped to a sell — the desk does
                not size into a cover-bounce it cannot see being covered and that the tape is
                no longer hinting. The price block that lifted on 06-22 has re-closed and
                widened; the operational block (tape down) and the structural block (deepened
                short gamma into a 2.3-DTE opex) compound it.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · macro tail · put-spread re-grow gate — 10Y leg firmed to 2bp from firing (4.51% vs 4.53% gate, the closest of the lineage), HY OAS leg 13bp away (2.65% vs 2.78%) · Tier-1 printed fresh deltas, no stale flag this cut</span>
              <div className="dn-trade-name">
                Downside put-spread — re-grow gate un-fired but the 10Y leg firmed to 2bp from the gate (closest of the lineage); no hedge added (the 26JUN −61.89M monthly already prices the concentrated downside)
              </div>
              <div className="dn-thesis">
                The macro re-grow gate the lineage carries — HY OAS &gt; 2.78% OR 10Y &gt;
                4.53% as the condition to re-grow a downside tail — stays UN-FIRED, but the
                10Y leg firmed <em>back toward</em> it: from 7bp away (06-23, 4.46%) to 2bp
                away (today, 4.51%), the closest of the lineage; HY OAS at 2.65% (13bp away).
                The reclaim-long rates filter (10Y &lt; 4.55%) stays TRUE at 4.51%, with less
                room. The macro tape is the same dollar / real-rate EXTREME RISK-OFF headwind,
                now stiffer with the 10Y near the gate and TIPS +7bp — but a macro tail is not
                the right instrument for a floor still holding its weekly close; the
                concentrated downside risk that remains is the 26JUN monthly −61.89M, which the
                dealer gamma already prices, 2.3 DTE.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">no position · gate un-fired both legs · 10Y leg firmed to 2bp from the gate (closest of the lineage)</span></div>
                <div><span className="dn-lvl-k">re-grow trigger (next Tier-1 print)</span><span className="dn-lvl-v bear">10Y &gt; 4.53% close (currently 4.51%, 2bp to fire, firmed back) OR HY OAS &gt; 2.78% close (currently 2.65%, 13bp to fire)</span></div>
                <div><span className="dn-lvl-k">reclaim-long rates filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close — TRUE at 4.51%; awaits a BTC-internal pivot AND a live tape to translate</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats:</b> the re-grow gates are discretionary watches set as the levels
                drift, not backtested breakpoints. The 10Y leg is now one small print from
                firing — if it fires, a downside tail would be reassessed in a separate future
                note (trigger / invalidation / R defined there) — and note the dealer strip
                carries the 26JUN monthly −61.89M, so any such tail would be additive to
                existing dealer short gamma rather than a clean independent hedge.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · squeeze-cycle hostile-2 watchlist · no calendar prior · ON HOLD — SM feed DEAD ~11.94 days, the re-stack signature cannot be read this cut</span>
              <div className="dn-trade-name">
                Squeeze-cycle hostile-2 — ON HOLD (continuation of 06-16 / 06-18 / 06-19 / 06-20 / 06-22 / 06-23): the SM feed is frozen ~286.5h, the re-stack signature cannot be read this cut
              </div>
              <div className="dn-thesis">
                The squeeze-cycle / re-stack-hostile-2 framework reads discrete SM steps
                (Δshort &gt; 0 + Δlong &lt; 0 same minute) as continuation signatures; its
                calendar prior (the BJ 13–15 cadence) was falsified on 05-31 and it has run as
                a no-prior watchlist since. It cannot be assessed today for the simplest
                reason: the SM feed is dead. long_btc / short_btc / net_btc have been constant
                since 2026-06-12 01:36Z (~286.5h), so there are no SM deltas to read. The
                06-16 note put this ON HOLD at ~94.5h, the 06-22 note at ~255.7h, the 06-23
                note at ~262.5h; it remains ON HOLD at ~286.5h.{' '}
                <span className="dn-em">No signature can print from a frozen feed; the
                framework is dark until the SM data resumes.</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">framework status</span><span className="dn-lvl-v bear">ON HOLD · SM feed frozen ~286.5h (since 2026-06-12 01:36Z) · no SM deltas computable</span></div>
                <div><span className="dn-lvl-k">frozen value (not a read)</span><span className="dn-lvl-v">long 13,532.4 / short 50,825.7 / net −37,293.3 — byte-for-byte constant, carried only to mark the dead feed</span></div>
                <div><span className="dn-lvl-k">resume condition</span><span className="dn-lvl-v">SM feed resumes writing fresh long_btc/short_btc → re-assess re-stack signatures from the first fresh deltas</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> a dead feed is not a quiet feed. The desk does
                not infer &ldquo;no re-stack&rdquo; from a frozen triple — it infers nothing.
                The squeeze-cycle read is suspended, not negative, and the first fresh SM
                deltas after the feed resumes are the re-arm point.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions <span className="dn-roman">VI · LIVE TAPE OUTAGE still the operative condition (eighth day) · 200W floor weekly-close hold INTACT but buffer compressed to +0.52%, 24h low wicked below intraday · flip reclaim DEEPER OFFSIDE (−2.18%), book DEEPENED −64.4M, 26JUN monthly −61.89M (2.3 DTE) · scout stood down (price block wider, bounce exhausted) · macro 10Y gate firmed to 2bp</span>
            </h2>

            <p>
              Of the 06-23 conditions: the live tape did <em>not</em> come back — it is ~24h
              deader, now 161.4h frozen with the SM feed at ~11.94 days; the 200W floor
              weekly-close hold <em>stayed intact</em> (22JUN $63,990, +2.48% above) but the
              buffer compressed to +0.52% and the 24h low wicked below the floor intraday; the
              flip reclaim went further offside (spot −2.18% below the flip vs −0.96% on
              06-23) and spot lost D-SMA20; the dealer book deepened from −35.1M to −64.4M
              net-short-gamma as the 26JUN monthly deepened −41.99M → −61.89M (2.3 DTE); the
              scout&rsquo;s price block widened and the engine flipped to a 30m TD9 sell; the
              macro re-grow gate stayed un-fired but the 10Y leg firmed to 2bp; the
              squeeze-cycle stayed ON HOLD on a deader feed. The dominant condition is
              unchanged: <em>the desk is positioning-blind, now into a held weekly floor under
              direct intraday attack, a deeper-offside reclaim, and a deepening short-gamma
              book it cannot confirm</em>. The conditions today re-set around the continuing
              outage, the compressed floor buffer, the deeper-offside reclaim, and the deepened
              26JUN amplifier:
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td>Live tape restored (PRIMARY operational)</td><td className="bull">live_db.json resumes writing fresh rows beyond 2026-06-17 06:43Z AND the SM triple updates off its 06-12 01:36Z freeze</td><td>re-read funding / OI / flow / SM in full; only then can the scout or squeeze-cycle be evaluated — and only then can the leg onto the floor be confirmed as distribution vs drift; the positioning dimension has now been blind six notes running</td></tr>
                <tr><td>200W floor — WEEKLY-CLOSE HOLD INTACT, buffer compressed</td><td className="bull">22JUN weekly close $63,990 +2.48% above $62,443 floor still stands; BUT in-progress week reads $62,768 +0.52% above (was +2.43%), 06-23 close +0.41% above, 24h low $61,870–$61,975 wicked below intraday</td><td>the floor hold remains the one structural positive but the buffer has nearly gone; no position taken, the slow level is the load-bearing live read and is now directly tested</td></tr>
                <tr><td>200W floor — early warning (next daily close)</td><td className="bear">a daily close &lt; $62,443 (W-SMA200 floor); the 06-23 close $62,697 and in-progress 06-24 $62,768 both hold above; an intraday wick (today&rsquo;s $61,870–$61,975) is NOT the break</td><td>a daily close below is the first hard warning the buffer is spent — watch the next finalized daily close vs $62,443 closely; it precedes the weekly-close escalation</td></tr>
                <tr><td>200W floor lost (cycle-regime escalation)</td><td className="bear">sustained weekly close &lt; $62,443 (W-SMA200 floor)</td><td>breaks the 200W floor — separate reassessment; the 06-15 reclaim thesis is falsified, the down-leg resumes with the 26JUN26 monthly −61.89M amplifying into opex</td></tr>
                <tr><td>Flip reclaim (scout price pre-condition) — DEEPER OFFSIDE</td><td className="bear">spot $62,768 −2.18% below flip $64,163 and below D-SMA20 $63,426; holds only the 200W floor; re-reclaim 1h close &gt; D-SMA20 then the flip</td><td>the price pre-condition went further offside — re-reclaim of D-SMA20 then the flip is the first step that re-opens scout evaluation, but only IF the live tape is also restored; on a blind tape below the flip the reclaim is watched, not traded</td></tr>
                <tr><td>26JUN26 monthly amplifier (2.3 DTE) — DEEPENED, net book deepened</td><td className="bear">26JUN −61.89M (was −41.99M on 06-23), aggregate GEX −64.4M (was −35.1M); near strip 24–25JUN negative; spot sits on the $62k −22.33M strike inside the $58k–$64k cluster, cluster floor $60k −27.70M just below the 200W line</td><td>the dealer book deepened net-short-gamma at spot — it amplifies the next move; the one concentrated downside risk is the 26JUN monthly 2.3 DTE; watch only, no short instruction in this note (any future setup defines its own trigger / invalidation / R)</td></tr>
                <tr><td>Macro tail re-grow (10Y leg firmed to 2bp)</td><td className="bear">10Y &gt; 4.53% (2bp to fire, the closest of the lineage) OR HY OAS &gt; 2.78% (13bp to fire) — Tier-1 printed fresh deltas, no stale flag this cut</td><td>no hedge instruction in this note — a gate fire (10Y is closest, one small print away) would be reassessed in a separate future note; note any such tail would be additive to existing dealer short gamma −61.89M</td></tr>
                <tr><td>Reclaim-long rates filter</td><td className="bull">10Y &lt; 4.55% close — TRUE at 4.51%</td><td>standalone filter true with less room; needs a BTC-internal pivot AND a live tape to translate to a scout long</td></tr>
                <tr><td>Squeeze-cycle hostile-2 (ON HOLD)</td><td className="stale">SM feed dead ~286.5h; no deltas computable</td><td>suspended, not negative — re-arm on the first fresh SM deltas after the feed resumes</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether the next daily close holds above the $62,443 200W floor — the buffer
                has compressed to +0.52% and the 24h low already wicked below it — or whether
                the deepened 26JUN26 monthly −61.89M, now 2.3 DTE and the lone concentrated
                chunk, drags a daily close below the floor into opex; on the other side, a
                re-reclaim of D-SMA20 $63,426 then the flip $64,163 — which the desk still
                cannot scout on a blind tape — would re-open the constructive case
              </span>. The de-amplification of the early-week notes has fully reversed across
              two sessions (aggregate −0.6M → −35.1M → −64.4M, spot from above the flip to
              −2.18% below it and into the cluster), so the structural risk has re-thickened to
              the one monthly, 2.3 DTE; the structural positive — the 200W floor holding its
              22JUN weekly close — is intact but its buffer has nearly gone, the line is under
              direct intraday attack, and the desk still cannot read the tape that would say
              whether it is being defended or distributed. Until the tape is restored this note
              runs as written: the book is flat, the scout&rsquo;s price block is wider and the
              engine flipped to a sell, the macro tail 10Y gate firmed to 2bp, the squeeze-cycle
              is suspended, and the 200W floor watch is the one live level — now a tested,
              directly-attacked weekly-close floor. Price and MTF deepened bearish, the dealer
              book deepened short-gamma and spot fell further below the flip; macro is the same
              dollar / real-rate headwind, now stiffer with the 10Y near the gate, BTC the
              laggard in a deeply red TradFi tape. The right read for the next 24h is{' '}
              <em>floor-held-but-pressed — respect the weekly-close hold, watch the next daily
              close vs the floor and the flip re-reclaim against the D-SMA20 loss into the
              26JUN amplifier, fix the tape before reading positioning, and do not scout a
              reclaim that has gone further offside</em>.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 (post codex hostile audit)
            </span>
            <b>Status:</b> this is the <b>v2</b> draft — <b>post STAGE B codex hostile
            audit</b>, verdict BLOCK-CRITICAL (1 CRITICAL + 1 MINOR), plus the ask-deepseek
            arithmetic backstop (1 MAJOR, adjudicated and applied). Every finding was applied
            in place AND grep-closed across the full EN file (pattern → hits-before →
            hits-after), per the 06-08 / 06-09 audit-trace honesty gate. Findings:{' '}
            <b>DN-001 (CRITICAL — false &ldquo;first intraday breach since reclaim&rdquo;
            claim in the lead):</b> the lead claimed spot wicked below the $62,443 200W floor
            intraday &ldquo;for the first time since the reclaim,&rdquo; but the parquet tape
            shows prior post-06-15 intraday breaches (06-18 low $62,232.10, 06-19 $62,237.20,
            06-23 $61,870.00). Fixed: lead now reads &ldquo;wicked below the 200W floor
            intraday again&rdquo; and discloses the 06-18 / 06-19 prior breaches with daily
            closes holding above each time. Patterns searched: <code>for the first time</code>,{' '}
            <code>first time since</code>, <code>first since the reclaim</code>,{' '}
            <code>first night below</code>, <code>first intraday breach</code> — hits before 1
            (line 211), hits after <b>0</b> — <b>RESOLVED</b>.{' '}
            <b>DN-002 (MINOR — MOVE delta language):</b> MOVE 70.0 was described as an
            &ldquo;unchanged / flat print,&rdquo; but the macro source carries a +4.62 daily
            delta. Fixed at the manifest, prose and macro table to &ldquo;+4.62 day / up on
            the day, still loose&rdquo; (level 70.0 and regime z −0.51 loose unchanged, which
            the source confirms). Patterns searched: <code>unchanged print</code>,{' '}
            <code>flat print</code>, MOVE-row <code>unchanged</code> — hits before 3 (lines
            128, 574, 617), hits after <b>0</b> — <b>RESOLVED</b>.{' '}
            <b>MAJOR (ask-deepseek backstop — spurious D-SMA20 value):</b> the reclaim-side
            level read <code>D-SMA20 $63,544→$63,426</code>, introducing an unexplained
            $63,544 that contradicts the $63,426 used in every other location (recompute
            confirms 62,768 / 63,426 − 1 = −1.04%). Adjudicated valid and fixed: removed the{' '}
            <code>$63,544→</code> arrow; D-SMA20 is $63,426 throughout. Patterns searched:{' '}
            <code>63,544</code> — hits before 1 (line 736), hits after <b>0</b> —{' '}
            <b>RESOLVED</b>. All three findings RESOLVED (hits-after = 0); v2 is promoted.
            Codex-confirmed-clean items (gating, JSX integrity, staleness math, funding /
            OI / retail arithmetic, price/parquet math, RV methodology, MA matrix, MTF
            snapshot, GEX values, cross-asset, claims-vs-loaded discipline, forward-looking
            trade scope) are unchanged by this pass. Full finding list and evidence:{' '}
            <code>audits/2026-06-24-desk-note.md</code>. The numbers carried above are the
            STAGE A atomic-snapshot reads (parquet last bar 2026-06-24 00:07Z; MTF / GEX /
            cross-asset 00:01Z; macro render 2026-06-23 22:15Z; live tape FROZEN at
            2026-06-17 06:43Z, 161.4h; SM feed dead since 2026-06-12 01:36Z, ~11.94 days),
            archived at{' '}
            <code>/opt/desk-note/snapshots/2026-06-24-0006/</code> for the auditor to
            re-check the same bytes.{' '}
            <b>Build note (INFO):</b> this server runs Node 18.19.1; a full{' '}
            <code>next build</code> is environment-blocked on the Node version gate (lineage),
            so <code>npx --no-install tsc --noEmit</code> is the build proxy — STAGE E owns the
            final build verification.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among principals of
            Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a single
            atomic snapshot (2026-06-24 00:08Z) with section-level provenance disclosed in the
            manifest band above;{' '}
            <em>critically, the live derivatives tape was frozen for 161.4h at snapshot time
            (last row 2026-06-17 06:43Z) and the smart-money positioning feed has been dead
            ~11.94 days</em>, so all funding, OI, flow and positioning figures are explicitly
            last-known / stale or non-computable and flagged as such; the macro panel render is
            2026-06-23 22:15Z (~1.9h before snapshot) and its Tier-1 series printed fresh deltas
            with no stale flag this cut. Price, MTF, GEX and cross-asset are fresh. This is the
            v2 draft, post the STAGE B codex hostile audit. Levels, sizes, and conditions
            are illustrative of the desk&rsquo;s process, not standing recommendations. Past
            correlation, gamma, and positioning patterns do not bind future tape. Derivatives
            carry the risk of total loss and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The fade extended onto the line: spot lost D-SMA20, wicked below the $62,443
                200W floor intraday, the dealer book deepened short-gamma into the 2.3-DTE
                26JUN opex, and the engine flipped from a buy to a sell — all read through a
                dead tape an eighth day. Floor-held. Buffer compressed. Blind.
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
            v2 · 2026-06-24 00:08Z snapshot · post codex hostile audit ·
            sources: live_db.json (FROZEN 161.4h) · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
