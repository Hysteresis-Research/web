import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Desk note · 2026-08-23 · Hysteresis Research',
    description: 'Internal desk note.',
    path: '/desk/2026-08-23',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/2026-08-23' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function Desk20260823() {
  await requireViewer('/desk/2026-08-23');
  return (
    <main className="desk-stage">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · DESK NOTE · 2026-08-23 · v2</span>
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
              <span className="dn-big">$77,137</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.89%</span>
            </div>
          </div>

          <div className="dn-manifest">
            <span className="dn-lbl">
              Data manifest · atomic snapshot 2026-08-23 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live tape (spot / perp / OI / SM / funding)</td>
                  <td className="dn-v-cell">
                    live_db.json · tape anchor <b>2026-08-23 00:07Z</b> (BJ row{' '}
                    <code>08-23 08:07</code>)
                  </td>
                  <td className="dn-flag">
                    fresh · 1-min · <b>PINNED</b>: the 20,200-row tail through the
                    anchor row is archived at{' '}
                    <code>snapshots/2026-08-23-0007/live_db_pin_2026-08-23T0007Z.jsonl</code>{' '}
                    and every tape figure in this note is computed from that file,
                    not from the live tail (the live file grew two rows between the
                    first and second read of this session) · window rule is
                    inclusive [anchor − duration, anchor]: 24h = 1,441 rows, 72h =
                    4,321, 7d = 10,081 — note a row count of N spans N−1
                    minute-to-minute intervals · <b>endpoint assertion</b>: every
                    horizon printed in this note terminates on the pinned anchor row
                    itself. The v1 draft failed that assertion on two OI figures
                    (48h and the 3d-peak delta were computed off the rolled 00:08Z
                    live row); v2 recomputes both from the 00:07Z pin
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF divergence + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-23 00:01Z scan (BJ 08:01)</td>
                  <td className="dn-flag">
                    rolling hourly artifact · archived at{' '}
                    <code>snapshots/2026-08-23-0007/</code> · ~6 min before the tape
                    anchor · scan spot $77,134 / 24h −1.46% vs tape $77,137.30 /
                    −0.89% (different 24h origins, see §II) · all closes are
                    in-progress bars
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-23 00:00Z bake</td>
                  <td className="dn-flag">
                    archived at <code>snapshots/2026-08-23-0007/</code> · ~7 min
                    before the anchor · Deribit idx $77,382 vs live spot $77,137.30
                    (idx +$244.70) · 1,038 instruments (was 1,070 on 08-22 — the
                    22AUG26 +7.68M chunk settled 08-22 08:00Z) · <b>headline total
                    +238.6M vs by-expiry footed +242.37M</b>; this note carries the
                    footed basis throughout for comparability with the 08-22 note
                    (+249.91M footed, carried there as ≈+249.90M) and discloses the
                    headline separately · <code>gex_summary.json</code> and{' '}
                    <code>ma200w_trap_watch_state.json</code> were <b>NOT</b> read
                    this session; nothing here rests on them
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">cross-asset correlation 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · generated 2026-08-23 00:00Z
                  </td>
                  <td className="dn-flag">
                    archived · 7d 1h bars · 22 assets · 166 rows · a 7-day rolling
                    read, not a same-day read
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">macro regime z panel</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-22 22:16Z render</td>
                  <td className="dn-flag">
                    archived · ~1.85h before the anchor, so the <em>render</em> is
                    fresh — but the <em>content</em> is not: 08-22 is a Saturday and
                    FRED published nothing over the weekend, so every daily Tier-1
                    row is the same Friday 08-21 print the 08-22 note already
                    carried. Treat this panel as <b>UNCHANGED, not updated</b> ·
                    JGB monthly stale 82d · Michigan / WTI rows stale
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">Daily / Weekly MA matrix + 30D RV</td>
                  <td className="dn-v-cell">
                    btcusdt_1m_*.parquet (all 8 yearly files) · last bar 2026-08-23
                    00:05Z close $77,157.00
                  </td>
                  <td className="dn-flag">
                    2,542 daily bars / 364 weekly bars — full matrix computable
                    including W-SMA200 · offsets recomputed vs live spot $77,137.30
                    · <b>the 08-23 W-SUN weekly bar is OPEN</b> (settles 23:59Z
                    today, ~23.9h after this anchor), so every weekly MA and every
                    false-break statement in this note is provisional on that settle
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W watch JSON</td>
                  <td className="dn-v-cell">weekly_200sma.json · ABSENT</td>
                  <td className="dn-flag">
                    file does not exist on this server · 200W state, ratio percentile
                    and last-event are the desk&rsquo;s own parquet recompute over
                    165 non-NaN weekly observations, of which 164 are completed
                    closes and the 165th is the open 08-23 bar
                  </td>
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
              <span className="dn-v bear">+10.95% (at cap)</span>
              <span className="dn-src">live · raw field +0.0100%/8h × 1095 · 24h mean +10.95% — the mean IS the cap because every one of the 1,441 sampled rows printed it · 2,360 consecutive sampled rows at cap since 2026-08-21 08:48Z, i.e. 2,359 elapsed minutes (last non-cap row 08:47Z at +10.77%) · &ldquo;cap&rdquo; = the +10.95% ann. ceiling the feed has not exceeded once in the 10,081-row 7d window</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+10.95% → +10.95% (welded)</span>
              <span className="dn-src">range +10.95% / +10.95%, 1,441 / 1,441 at cap (100.0%), 0 / 1,441 negative · was 952 / 1,441 (66.1%) with mean +9.88% on the 08-22 note — the pin TIGHTENED through a down-day · 72h mean +9.75%, 3,124 / 4,321 at cap; 7d mean +7.15%, 158 / 10,081 negative</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v">+0.00% (+4.8 BTC)</span>
              <span className="dn-src">live · 105,861.784 → 105,866.613 BTC · aggregate OI did not contract on a net basis through the down-day (gross opens/closes are not in this feed) · contrast 48h −1,752.8 / −1.63%, 72h −1,721.0 / −1.60%, 7d −5,639.5 / −5.06%, and −5,185.6 / −4.67% off the 3d peak 111,052.2 @ 08-21 08:50Z — every horizon endpointed on the pinned 00:07Z anchor row itself — the base shrank all week on net and then stopped shrinking exactly here</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) long/short</span>
              <span className="dn-v bull">50.18 / 49.82</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · 24h range 49.48 / 51.48 · 7d ago 67.16%, 7d peak 69.00% @ 08-16 23:12Z, 68.64% at the true tape low $62,716 @ 08-16 22:41Z — retail is −18.82pt off the 7d peak while price is +22.30%; the cleanest line on the page</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">+32.19k (net long · NOT CERTIFIABLE)</span>
              <span className="dn-src">live · long 39,540.6 − short 7,350.5 · the level is real as a feed reading but is NOT an auditable position series: the tracked roster re-sampled at 08-22 06:41Z (<code>long_traders</code> 2,260 → 4,976 in one minute) — the third such re-sync in three days</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · exact 24h</span>
              <span className="dn-v">+15.81k → +32.19k (Δnet +16,379.5)</span>
              <span className="dn-src">baseline is the exact T−24h row 2026-08-22 00:07Z (+15,810.5), NOT the 08-22 note&rsquo;s own 00:39Z anchor (+15,993.8, against which Δnet would be +16,196.3) · |Δ| / prior_net = 16,379.5 / 15,810.5 = 103.60% · but 16,071.5 of that Δ (98.12%) printed in the single 08-22 06:41Z re-sync minute · on the clean 17h26m since, SM TRIMMED: Δnet −636.8 = −1.94% of post-resync net, Δlong −323.2, Δshort +313.6, into a −0.55% price slide</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">46.7% / 43.18%</span>
              <span className="dn-src">GEX chain-median across 1,038 instruments (was 49.1% / 1,070 on 08-22 — a −2.4pt vol cool) vs 30D close-to-close RV 43.18% · richness ≈ +3.52pt · a chain median, NOT a tradable spread</span>
            </div>
            <div>
              <span className="dn-k">dist to 0γ flip</span>
              <span className="dn-v bull">+21.18% (above)</span>
              <span className="dn-src">flip $63,653 (was $63,288 — up $365) · vs live spot $77,137.30 = +21.18% (77,137.30 / 63,653 − 1 = 21.1841%) / vs the GEX file&rsquo;s own Deribit idx $77,382 = +21.57% (file prints +21.6%) — both refs positive, tile carries the spot side · inverted: the flip sits <b>17.48%</b> below spot, so a 17.48% decline reaches it · footed aggregate +242.37M (headline +238.6M)</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                The pullback the 08-22 note asked for started, stalled $600 short
                of the band it was drawn at, and on the way down it handed back
                the weekly shelf the same note had just recorded as reclaimed
              </span>. Spot prints{' '}
              <span className="dn-tag">$77,137.30</span>,{' '}
              <span className="dn-tag bear">−0.89%</span> on the exact 24h window
              and <span className="dn-tag bear">−1.08%</span> against the 08-22
              anchor $77,981.99, and it now sits{' '}
              <span className="dn-tag bear">BELOW W-EMA50 $77,226.37 (−0.12%)</span>{' '}
              and{' '}
              <span className="dn-tag bear">BELOW W-SMA150 $77,442.48 (−0.39%)</span>
              {' '}— the two levels the prior note called a reclaimed shelf are back
              overhead as a lid. 08-22 closed{' '}
              <span className="dn-tag bear">$77,084.50 (−1.56%)</span>, the first
              down-day after five consecutive up-days (08-17 +2.59%, 08-18 +0.29%,
              08-19 +7.14%, 08-20 +5.32%, 08-21 +7.27%). What makes the down-day
              read badly is not its size but its plumbing:{' '}
              <span className="dn-tag bear">funding welded to the +10.95% cap for
              all 1,441 sampled rows of the 24h window — 1,440 minute-to-minute
              intervals</span> (2,360 consecutive capped rows since 08-21 08:48Z)
              while{' '}
              <span className="dn-tag">aggregate OI did not contract on a net basis
              (+4.8 BTC, +0.00%)</span> — the base that was there at the start of the
              window was still there at the end, and it paid the maximum rate the
              whole way down.{' '}
              <span className="dn-em">
                The feed carries aggregate OI only: gross opens and closes and
                account-level turnover are not observable here, so large
                deleveraging offset by replacement leverage would print the same
                flat net.
              </span>{' '}
              Spot CVD sold{' '}
              <span className="dn-tag bear">−873.2</span> and big prints went{' '}
              <span className="dn-tag bear">−387.8 BTC net across 394 prints</span>{' '}
              into a flat base. Against that: the whole daily MA ladder is still
              positive (10 of 10), retail is{' '}
              <span className="dn-tag bull">50.18% long — 18.82pt off the 7d
              peak</span> and has not re-crowded through a +22.30% week, the dealer
              clamp is still deep at{' '}
              <span className="dn-tag bull">+242.37M footed</span>, and the
              in-progress W-SUN bar tracks{' '}
              <span className="dn-tag bull">+20.03% above the W-SMA200 cycle floor
              $64,266.81</span> with{' '}
              <span className="dn-em">~23.9h and a −16.69% collapse standing
              between it and a settle that would leave the 08-16 break intact</span>.
              The book stays <span className="dn-tag">FLAT</span>: the pullback long
              is still <span className="dn-tag">NOT ARMED</span> on both legs — the
              weekly has not settled and price never entered the $75,000–$76,000
              band (24h low $76,600.02, exactly $600.02 above the band top) — and
              the chase-short stays stood down.
            </p>

            <p>
              The 24h shape was one push and a slow bleed. High{' '}
              <span className="dn-tag">$78,810.00 @ 2026-08-22 03:31Z (BJ 11:31
              08-22)</span>, low{' '}
              <span className="dn-tag">$76,600.02 @ 2026-08-22 10:23Z (BJ 18:23
              08-22)</span>, snapshot $77,137.30 — sitting{' '}
              <span className="dn-tag bear">−2.12% off the high</span> and{' '}
              <span className="dn-tag">+0.70% off the low</span>, closer to the
              bottom of its own range than the top.{' '}
              <span className="dn-signal">
                That high matters structurally: $78,810 poked through the entire
                overhead lid stack and was rejected
              </span>{' '}
              — the <span className="dn-tag">$78,000 wall (+32.23M)</span>, the
              D-EMA400 at ≈<span className="dn-tag">$78,213</span> (MTF column read
              at its $77,134 scan close, not a desk recompute — the desk matrix runs
              n ∈ {'{'}20, 50, 100, 150, 200{'}'}), and{' '}
              <span className="dn-tag">W-EMA100 $78,435.81</span> all sit inside
              $436 of each other, and price traded above all three for part of a
              European morning before losing them and then losing the
              W-EMA50 / W-SMA150 shelf underneath.{' '}
              <span className="dn-em">
                A failed test of a three-deep lid followed by the loss of the shelf
                below it is the sequence that turns a reclaim into a wick. It does
                not falsify the weekly read — the daily ladder is untouched and the
                cycle floor is 16.69% away — but it does say the 08-21/08-22 reclaim
                of $77.2k–$77.4k was not yet a base.
              </span>
            </p>

            <h2 className="dn-sec">
              Positioning{' '}
              <span className="dn-roman">I · funding welded to the cap on 1,441 / 1,441 sampled rows through a down-day · aggregate OI FLAT on net (+4.8 BTC) — gross turnover not observable in this feed · the SM feed re-synced for the THIRD consecutive day, 98.12% of the 24h Δnet is roster artifact</span>
            </h2>

            <p>
              <span className="dn-signal">
                The leverage read got worse, not better, on a down-day — which is
                the wrong direction
              </span>. Funding printed{' '}
              <span className="dn-tag bear">+10.95% ann. on every one of the 1,441
              sampled rows</span>: 24h mean +10.95%, min +10.95%, max +10.95%, cap
              occupancy 1,441 / 1,441 = 100.0%, zero negative rows. The 08-22 note
              carried 952 / 1,441 (66.1%) at cap and a +9.88% mean, so the pin{' '}
              <em>tightened</em> across a session in which price fell. The streak
              now runs{' '}
              <span className="dn-tag bear">2,360 consecutive sampled rows from
              2026-08-21 08:48Z (BJ 16:48) — 2,359 elapsed minutes</span>; the last
              non-cap row is 08:47Z at
              +10.77%. Widening out: 72h mean +9.75% with 3,124 / 4,321 at cap; 7d
              mean +7.15% with 158 / 10,081 negative rows and a 7d min of −0.39%.{' '}
              <span className="dn-em">
                &ldquo;Cap&rdquo; here means the +10.95% ann. ceiling (+0.0100%/8h
                raw) that the feed has not exceeded once in 10,081 rows; it is an
                observed ceiling in this data, disclosed as such rather than
                asserted as an exchange parameter.
              </span>{' '}
              Alongside it, OI did nothing:{' '}
              <span className="dn-tag">105,861.784 → 105,866.613 BTC, +4.8 BTC,
              +0.00%</span>. That is the single most important number on this page,
              because it breaks the prior note&rsquo;s squeeze mechanic. The
              +22.30% 7d leg was built on a shrinking base — OI{' '}
              <span className="dn-tag bull">−5,639.5 BTC / −5.06% on 7d</span>,{' '}
              <span className="dn-tag bull">−5,185.6 / −4.67% off the 3d peak
              111,052.2 @ 2026-08-21 08:50Z</span> — which is a squeeze signature.
              Through this 24h the base stopped shrinking and price still fell.{' '}
              <span className="dn-em">
                Squeeze fuel that stops being consumed while price rolls over is
                spent fuel. What is left is a fully-paid long book with the cap
                against it and no <em>net</em> contraction of the base — a fragility
                read, not a continuation one. Stated at the limit of what the loaded
                series proves: aggregate OI did not contract on a net basis. Whether
                anyone individually exited and was replaced is not observable from
                this feed.
              </span>
            </p>

            <p>
              <span className="dn-signal">
                The smart-money feed re-synced its roster for the third consecutive
                day, and the desk is again refusing to read the resulting Δ as
                positioning
              </span>. SM net reads{' '}
              <span className="dn-tag">+32,190.0 BTC</span> (long 39,540.6 − short
              7,350.5) against +15,810.5 on the exact T−24h row (2026-08-22 00:07Z —
              the 24h baseline, <em>not</em> the 08-22 note&rsquo;s own 00:39Z anchor,
              which read +15,993.8 and would give Δnet +16,196.3) — a Δnet of{' '}
              <span className="dn-tag">+16,379.5</span>, which is{' '}
              <span className="dn-em">|Δ| / prior_net = 16,379.5 / 15,810.5 =
              103.60%</span> of the prior net. It is not a position change.{' '}
              <span className="dn-tag bear">16,071.5 of that 16,379.5 — 98.12% —
              printed in one minute at 2026-08-22 06:41Z (BJ 14:41)</span>, where{' '}
              <code>long_traders</code> jumped{' '}
              <span className="dn-tag">2,260 → 4,976</span> and{' '}
              <code>short_traders</code> 870 → 1,009 in the same tick, with long_btc
              26,203.7 → 39,863.8 and short_btc 9,448.4 → 7,036.9. The same shape
              printed at{' '}
              <span className="dn-tag">2026-08-21 06:21Z (long_traders 1,336 →
              2,497, Δnet +10,671.2)</span> and at{' '}
              <span className="dn-tag">2026-08-20 07:06Z (long_traders 587 → 1,388,
              Δnet +39,352.9)</span> — three consecutive days, all inside a
              06:20–07:10Z window, all with the tracked roster size stepping and the
              book &ldquo;changing&rdquo; instantly.{' '}
              <span className="dn-em">
                This is a sampling artifact of a rolling tracked-trader roster, not
                a book. The 08-22 note flagged the design defect after one
                occurrence; three occurrences make it the feed&rsquo;s normal
                behaviour, and any decision gate that reads this field as a level or
                a delta is reading noise.
              </span>{' '}
              On the only artifact-free window available — the{' '}
              <span className="dn-tag">17h26m from 08-22 06:41Z to the anchor</span>{' '}
              — the tracked book <em>trimmed</em>: Δnet{' '}
              <span className="dn-tag bear">−636.8 (−1.94% of post-resync net)</span>,
              Δlong −323.2, Δshort +313.6, against a −0.55% price slide. Small,
              two-sided, and slightly defensive; it is the only SM statement in this
              note that carries weight, and it does not support a long.
            </p>

            <p>
              Retail is the one clean bullish line and it deserves to be read
              plainly. <span className="dn-tag bull">mkt_long_pct 50.18%</span> —
              a 50/50 book — with a 24h range of{' '}
              <span className="dn-tag">49.48% / 51.48%</span>. Seven days ago it was{' '}
              <span className="dn-tag">67.16%</span>; it peaked at{' '}
              <span className="dn-tag">69.00% @ 2026-08-16 23:12Z</span> and read{' '}
              <span className="dn-tag">68.64% at the true tape low $62,716 @
              2026-08-16 22:41Z (BJ 06:41 08-17)</span>.{' '}
              <span className="dn-em">
                Price is +22.30% over that span and retail crowding is −18.82pt off
                its peak. A rally that de-crowds retail instead of recruiting it is
                the structurally healthy kind; this is the strongest single argument
                against reading the shelf loss as a top.
              </span>{' '}
              The counter-argument sits one line up: retail has de-crowded, but
              funding says <em>somebody</em> is paying the ceiling, and aggregate OI
              says the base did not net-contract while they paid it.
            </p>

            <p>
              Windowed flow is <em>sellers on spot into an unmoved base</em>. 24h:
              price <span className="dn-tag bear">−0.89%</span>, OI{' '}
              <span className="dn-tag">+4.8 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −873.2</span>, futures CVD{' '}
              <span className="dn-tag">Δ −20.9</span>, big prints{' '}
              <span className="dn-tag bear">−387.8 BTC net / 394 prints</span>{' '}
              (big_buy Σ 2,495.8 vs big_sell Σ 2,883.6), taker-net{' '}
              <span className="dn-tag">−20.9</span> —{' '}
              <span className="dn-em">
                spot did the selling, futures were a wash, size leaned offered, and
                aggregate open interest did not move on net: a distribution shape,
                not a flush
              </span>. 4h (into the snapshot): price{' '}
              <span className="dn-tag bear">−0.34%</span>, OI{' '}
              <span className="dn-tag bull">−545.5 BTC (−0.51%)</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −156.6</span>, futures CVD{' '}
              <span className="dn-tag bear">Δ −315.0</span>, big prints{' '}
              <span className="dn-tag bull">+8.5 BTC / 52 prints</span>, taker-net{' '}
              <span className="dn-tag bear">−315.0</span> — the only window where OI
              actually came off, and it came off on a down-move, which is the
              healthy version. 1h: price{' '}
              <span className="dn-tag bull">+0.12%</span>, OI{' '}
              <span className="dn-tag">+29.4 BTC</span>, spot CVD{' '}
              <span className="dn-tag bear">Δ −40.8</span>, futures CVD{' '}
              <span className="dn-tag bull">Δ +18.7</span>, big prints{' '}
              <span className="dn-tag bear">−7.7 BTC / 9 prints</span>, taker-net{' '}
              <span className="dn-tag bull">+18.7</span> — a thin, mixed hour off the
              $76,900 low @ 08-22 23:37Z. Perp trades a{' '}
              <span className="dn-tag bear">−$25.49 discount</span> to spot at the
              snap (1h mean −$10.29, range −$38.03 / +$28.51; 4h mean −$4.97; 24h
              mean −$8.72, range −$273.57 / +$112.21 across 1,440 non-null rows).
              1-min aggressor skew snaps{' '}
              <span className="dn-tag bull">+22.6</span> against a 1h mean of{' '}
              <span className="dn-tag bear">−34.93</span> (range −56.4 / +22.6) and
              a 24h mean of −14.19 — the hour was sell-aggressed and the final
              minute was the single most buy-aggressed print in it, which is a
              snapshot artifact and should not be read as a turn.
            </p>

            <h2 className="dn-sec">
              Structure{' '}
              <span className="dn-roman">II · the W-EMA50 / W-SMA150 shelf LOST — spot back below both · daily ladder still 10 / 10 positive · MTF degraded 8 long → 6 long on the file&rsquo;s aggregate convention (5 long if you sum the per-TF column; 0 short on either), RSI cooled from ~90 to the 80s, fresh 4h water-up death cross + 12h TD9 SELL · the W-SUN bar is OPEN until 23:59Z</span>
            </h2>

            <p>
              <span className="dn-signal">
                The structural event of this session is a loss, and it is on the
                weekly
              </span>. The 08-22 note recorded spot $77,981.99 wedged above a
              reclaimed W-SMA150 / W-EMA50 shelf and below an unbroken
              W-EMA100 / D-EMA400 lid. One session later spot $77,137.30 has fallen
              back through the shelf:{' '}
              <span className="dn-tag bear">W-EMA50 $77,226.37 (−0.12%)</span> and{' '}
              <span className="dn-tag bear">W-SMA150 $77,442.48 (−0.39%)</span> are
              both overhead again, and the lid above is unchanged at{' '}
              <span className="dn-tag bear">W-EMA100 $78,435.81 (−1.66%)</span>.
              Five of the twenty matrix lines are negative and{' '}
              <span className="dn-em">all five are weekly</span>: W-EMA50 −0.12%,
              W-SMA150 −0.39%, W-EMA100 −1.66%,{' '}
              <span className="dn-tag bear">W-SMA50 $81,773.47 (−5.67%)</span>,{' '}
              <span className="dn-tag bear">W-SMA100 $88,835.59 (−13.17%)</span>.
              Everything daily is still below spot, in order:{' '}
              <span className="dn-tag bull">D-EMA200 $71,698.83 (+7.59%)</span>,{' '}
              <span className="dn-tag bull">D-SMA150 $69,058.81 (+11.70%)</span>,{' '}
              <span className="dn-tag bull">D-SMA200 $69,006.66 (+11.78%)</span>,{' '}
              <span className="dn-tag bull">D-EMA150 $69,286.66 (+11.33%)</span>,{' '}
              <span className="dn-tag bull">D-EMA20 $68,419.99 (+12.74%)</span>,{' '}
              <span className="dn-tag bull">D-EMA100 $67,171.65 (+14.84%)</span>,{' '}
              <span className="dn-tag bull">D-SMA20 $66,755.81 (+15.55%)</span>,{' '}
              <span className="dn-tag bull">D-EMA50 $66,300.94 (+16.34%)</span>,{' '}
              <span className="dn-tag bull">D-SMA100 $66,123.56 (+16.66%)</span>,{' '}
              <span className="dn-tag bull">D-SMA50 $65,164.47 (+18.37%)</span> — a
              10-of-10 positive daily ladder. The remaining positive weeklies:{' '}
              <span className="dn-tag bull">W-EMA150 $73,877.07 (+4.41%)</span>,{' '}
              <span className="dn-tag bull">W-SMA20 $69,481.46 (+11.02%)</span>,{' '}
              <span className="dn-tag bull">W-EMA20 $69,236.61 (+11.41%)</span>,{' '}
              <span className="dn-tag bull">W-EMA200 $68,604.04 (+12.44%)</span>,{' '}
              <span className="dn-tag bull">W-SMA200 $64,266.81 (+20.03%)</span>.{' '}
              <span className="dn-em">
                MAs anchored to parquet last bar 2026-08-23 00:05Z (close
                $77,157.00) across all eight yearly files — 2,542 daily bars and 364
                weekly bars, so every window including W-SMA200 is fully computable
                with no seeding. Offsets are recomputed against live spot
                $77,137.30; levels are displayed $-rounded and offsets are computed
                from exact series values. CRITICAL CAVEAT: the weekly resample
                includes the OPEN 08-23 W-SUN bar at $77,157.00, so every weekly MA
                above will move when that bar settles at 23:59Z.
              </span>
            </p>

            <p>
              <span className="dn-signal">
                The cycle-floor read is still on track and still not a fact
              </span>. The W-SMA200 cycle floor sits at{' '}
              <span className="dn-tag">$64,266.81</span> and the in-progress 08-23
              weekly bar is{' '}
              <span className="dn-tag bull">+20.03% above it</span> (spot basis;
              +20.06% on the parquet bar close). The 08-16 weekly close{' '}
              <span className="dn-tag bear">$62,876.00 broke the floor at −1.72%</span>,
              and on the desk&rsquo;s recompute the break/reclaim history reads
              08-16 BREAK → 08-23 RECLAIM — <em>if</em> the bar settles here.{' '}
              <span className="dn-em">
                It has not settled. There are ~23.9h to the 23:59Z print, and
                leaving the break standing would require a close below $64,266.81,
                i.e. a −16.69% single-session collapse from $77,137.30. That is
                arithmetically remote, and it is still not the same thing as
                recorded. Every false-break statement in this note is conditional on
                that settle; on a close back below the floor the 08-16 break stands
                and this paragraph is wrong.
              </span>{' '}
              For scale on the level itself: 10 of the 164 <em>completed</em> weekly
              closes in the parquet history sit below the 200W (6.10%), the prior
              break/reclaim pair was 06-28 BREAK → 07-05 RECLAIM (also one week),
              and the current ratio of 1.2006 is only the{' '}
              <span className="dn-tag">22.4th percentile</span> of the ratio&rsquo;s
              own history — +20% above the cycle floor is normal-to-low by BTC
              standards, not stretched. 30D close-to-close RV is{' '}
              <span className="dn-tag">43.18%</span> (30 log returns / 31 closes,
              σ × √365 × 100, over a $62,792.30–$78,309.10 close range; the 29-return
              variant reads 43.94%).
            </p>

            <p>
              <span className="dn-signal">
                The MTF map degraded from the 08-22 print without turning bearish
              </span>. The 00:01Z scan reads{' '}
              <span className="dn-tag">6 long / 0 short / 4 neutral</span> on the
              file&rsquo;s own aggregate convention, against the 08-22 note&rsquo;s
              8 long / 0 short / 2 neutral: 15m and 30m fell out of the long column
              to 警示 / neutral, joining 1d and 1w, while 1h, 4h, 8h, 12h, 3d and 1M
              hold long.{' '}
              <span className="dn-em">
                Two conventions are in play and this note prints both rather than
                blending them: the source&rsquo;s aggregate block counts 1h as long
                (giving 6 / 0 / 4), while the per-TF column reads 1h as 警示 — sum
                the ten rows of the table below on that column and you get{' '}
                <b>5 long / 0 short / 5 neutral</b>. 1h is the only row where the two
                disagree; every directional statement here holds on either count,
                because neither produces a single short classification.
              </span>{' '}
              Still{' '}
              <span className="dn-em">zero short classifications</span> — the
              degradation is long → neutral, not long → short. The overbought
              extreme has cooled materially: 4h RSI{' '}
              <span className="dn-tag">89.8 → 77.1</span>, 8h{' '}
              <span className="dn-tag">89.5 → 83.0</span>, 12h{' '}
              <span className="dn-tag">87.9 → 82.8</span>, with 1d at 80.4 still the
              stretched frame and 15m / 30m / 1h back at 50.0 / 48.1 / 50.7. Two
              fresh sell-side prints: a{' '}
              <span className="dn-tag bear">4h water-up death cross 2 bars ago</span>{' '}
              (DIF +3,063.9 — an early death cross with DIF above water, the
              long-to-short probe) and a{' '}
              <span className="dn-tag bear">⚡ 12h TD9 SELL</span> at $77,134. Note
              what did <em>not</em> repeat: the 08-22 note carried simultaneous TD9
              SELLs on 4h, 8h and 12h; today 4h and 8h have flipped to Buy 4 and Buy
              2 setups and only 12h carries the completed sell. The 3d frame just
              entered the Kumo (<span className="dn-tag">云内 刚穿, 70.8k–78.5k</span>)
              — the first frame to lose its above-cloud status — and 1w remains
              below cloud 29 bars with the cloud floor overhead at $85.9k. Regime tag
              is unchanged from 08-22:{' '}
              <span className="dn-tag">5 / 9 reversal-regime (JT&lt;0)</span> —
              mean-reversion favoured, trend-following cautioned. Divergences: 3 bear
              (15m / 30m / 1h) against 4 bull (15m / 30m / 8h / 1w).
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>bias</th><th>close</th><th>RSI</th><th>MACD cross</th><th>cloud (Ichimoku)</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="neut">neutral</td><td className="num">77,134</td><td className="num">50.0</td><td className="neut">death (water-up) 12b</td><td className="bear">below ↑77.2k 5b</td><td>Sell 2</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>30m</td><td className="neut">neutral</td><td className="num">77,134</td><td className="num">48.1</td><td className="bear">death (water-dn) 5b</td><td className="bear">below ↑77.4k 6b</td><td>Sell 2</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="neut">neutral*</td><td className="num">77,134</td><td className="num">50.7</td><td className="neut">death (water-up) 34b</td><td className="bull">above ↓76.8k 143b</td><td>Buy 4</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="bull">long</td><td className="num">77,134</td><td className="num bear">77.1</td><td className="bear">death (water-up) 2b · fresh</td><td className="bull">above ↓64.0k 31b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>8h</td><td className="bull">long</td><td className="num">77,134</td><td className="num bear">83.0</td><td className="bull">golden (water-dn) 18b</td><td className="bull">above ↓63.9k 11b</td><td>Buy 2</td><td>BULL hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="bull">long</td><td className="num">77,134</td><td className="num bear">82.8</td><td className="bull">golden (water-dn) 11b</td><td className="bull">above ↓64.6k 9b</td><td className="bear">⚡ TD9 SELL</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="neut">ranging</td><td className="num">77,134</td><td className="num bear">80.4</td><td className="bull">golden (water-dn) 5b</td><td className="bull">above ↓64.4k 5b</td><td>Sell 7</td><td>BULL hid</td></tr>
                <tr><td>3d</td><td className="bull">long</td><td className="num">77,134</td><td className="num">68.8</td><td className="neut">—</td><td className="neut">in cloud 70.8k–78.5k · just crossed</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="neut">neutral</td><td className="num">77,134</td><td className="num">56.1</td><td className="bull">golden (water-dn) 4b</td><td className="bear">below ↑85.9k 29b</td><td>Sell 1</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="bull">long</td><td className="num">77,134</td><td className="num">50.4</td><td className="neut">—</td><td className="bull">above ↓47.4k 30b</td><td>Sell 1</td><td>—</td></tr>
                <tr>
                  <td colSpan={8} className="note">
                    Source: mtf_div_latest.html 2026-08-23 00:01Z scan (BJ 08:01),
                    archived at snapshots/2026-08-23-0007/. Two counts, printed
                    separately: the source&rsquo;s <em>aggregate-direction</em> block
                    reads <em>6 long / 0 short / 4 neutral across 10 TFs</em>, while
                    the <em>per-TF warning-state</em> column shown in the bias column
                    above sums to <em>5 long / 0 short / 5 neutral</em>. The single
                    row that differs is 1h (aggregate: long; per-TF: 警示). Net read
                    &ldquo;多周期共振偏多 · 顺势&rdquo;. Regime{' '}
                    <em>5/9 reversal (JT&lt;0)</em>. Header alerts:{' '}
                    <em>4h water-up death cross printed 2 bars ago (DIF +3,063.9)</em>{' '}
                    and <em>⚡ 12h TD9 SELL at $77,134</em>. Scan spot $77,134, 24h
                    −1.46%, 24h H/L $78,832 / $76,510, qVol $9.97B — the scan&rsquo;s
                    −1.46% and the tape&rsquo;s −0.89% are the same direction over
                    different 24h origins (the MTF scan measures from its own
                    00:01Z-minus-24h bar, the tape from the 08-22 00:07Z row) and are
                    not a discrepancy. *1h is grouped under the short-frame bias
                    block; the per-TF column reads 警示. Closes are in-progress bars;
                    treat every value as provisional.
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className="dn-sec">
              Dealer map{' '}
              <span className="dn-roman">III · clamp eased −7.54M to +242.37M footed but stays deep · flip $63,653, spot +21.18% above (a 17.48% decline reaches it) · $78,000 +32.23M is a fresh lid directly overhead · 28AUG26 now 5.3 DTE and 36.17% of the strip · one front expiry turned negative — the front four still foot +5.34M</span>
            </h2>

            <p>
              <span className="dn-signal">
                The dealer book is still the thing holding this tape still, and it
                loosened slightly
              </span>. The by-expiry strip foots to{' '}
              <span className="dn-tag bull">+242.37M</span> against the 08-22
              archive&rsquo;s +249.91M — a{' '}
              <span className="dn-tag">−7.54M</span> easing. The file&rsquo;s own
              headline total prints{' '}
              <span className="dn-tag">+238.6M</span>; the note carries the footed
              basis throughout because that is the basis the 08-22 note used and the
              two are only comparable to each other.{' '}
              <span className="dn-em">
                This is the second-deepest positive clamp of the post-08-16 lineage,
                NOT a lineage maximum. On the same footed by-expiry basis used
                throughout — the only basis on which these prints are comparable —
                the whole lineage&rsquo;s deeper reads are 07-22 +313.63M and 07-23
                +283.46M. 07-24 foots to +235.95M and therefore sits <em>below</em>{' '}
                today, not above it; its +262.1M is a headline figure on the other
                basis and is not a comparable deeper print.
              </span>{' '}
              The 0-γ flip moved up to{' '}
              <span className="dn-tag">$63,653 (from $63,288, +$365)</span>. Spot
              $77,137.30 sits{' '}
              <span className="dn-tag bull">+21.18% above the flip</span>{' '}
              (77,137.30 / 63,653 − 1 = 21.1841%); the GEX file&rsquo;s own
              &ldquo;dist to flip&rdquo; reads{' '}
              <span className="dn-tag bull">+21.6%</span> off its Deribit index
              $77,382 ($244.70 above live spot; 77,382 / 63,653 − 1 = 21.5685%) —
              both references positive, both far above.{' '}
              <span className="dn-em">
                Stated in the direction that matters for a short: the flip sits
                17.48% BELOW spot (1 − 63,653 / 77,137.30), so a 17.48% decline —
                not a 21% one — is what reaches it.
              </span>{' '}
              That is nearer than the 08-22 note&rsquo;s 18.84%, but only because
              price fell; the leg is still the furthest-from-arming price condition
              in the book.
            </p>

            <p>
              All ten top walls are positive again, summing{' '}
              <span className="dn-tag bull">+184.93M</span> of the +242.37M footed
              strip:{' '}
              <span className="dn-tag bull">$80,000 +38.29M</span> (heaviest, eased
              from +41.20M),{' '}
              <span className="dn-tag bull">$78,000 +32.23M</span>,{' '}
              <span className="dn-tag bull">$70,000 +20.24M</span>,{' '}
              <span className="dn-tag bull">$82,000 +19.28M</span>,{' '}
              <span className="dn-tag bull">$75,000 +15.20M</span>,{' '}
              <span className="dn-tag bull">$72,000 +13.49M</span>,{' '}
              <span className="dn-tag bull">$74,000 +13.12M</span>,{' '}
              <span className="dn-tag bull">$76,000 +12.82M</span>,{' '}
              <span className="dn-tag bull">$84,000 +10.35M</span>,{' '}
              <span className="dn-tag bull">$85,000 +9.91M</span>.{' '}
              <span className="dn-signal">
                The map has changed shape around spot: $78,000 +32.23M is now the
                second-heaviest wall on the board and it sits $863 above the print
              </span>{' '}
              — stacked with the MTF-read D-EMA400 ≈$78,213 and W-EMA100 $78,435.81,
              that is a three-deep lid inside $436, and the 24h high $78,810.00
              tested through it and failed. Below, $76,000 +12.82M and $75,000
              +15.20M bracket the pullback band the 08-22 note drew, and $70,000
              +20.24M is the first heavy floor beneath. By expiry, the front of the
              strip has thinned and partly turned:{' '}
              <span className="dn-tag">23AUG26 0.3 DTE +5.76M</span> settles at
              08:00Z today (7h53m after this anchor),{' '}
              <span className="dn-tag bear">24AUG26 1.3 DTE −1.21M</span> (turned
              from +2.66M on 08-22 — a new negative front expiry versus that note,
              <em> not</em> a lineage first: the post-08-16 lineage already opened
              with 17AUG26 1.3 DTE −1.10M on the 08-16 note, sourced from that
              session&rsquo;s archived GEX panel), 25AUG26 2.3 +0.79M, 26AUG26 3.3
              −0.00M —{' '}
              <span className="dn-em">
                the front four still foot +5.34M net, so the front is thinner and
                mixed, not negative. No lineage-first expiry-sign ordinal is claimed
                here: no sourced expiry-sign ledger exists across the lineage yet,
                and building one is an open item.
              </span>{' '}
              The weight is where it was:{' '}
              <span className="dn-tag bull">28AUG26 5.3 DTE +87.66M</span> —{' '}
              <span className="dn-em">36.17% of the footed strip, up from +82.92M
              and 33.18% on 08-22, and this is a snapshot contribution at current
              IV, not a guaranteed roll-off; absent offsetting book, spot or IV
              changes it comes off the board at the 28AUG settle</span> — then
              25SEP26 33.3 +76.09M, 25DEC26 124.3 +31.46M, 4SEP26 12.3 +18.90M,
              30OCT26 68.3 +9.87M, 26MAR27 215.3 +6.53M, 11SEP26 19.3 +4.81M,
              25JUN27 306.3 +1.71M.
            </p>

            <p>
              IV median across{' '}
              <span className="dn-tag">1,038 instruments is 46.7%</span>, down from
              49.1% across 1,070 on 08-22 — a −2.4pt vol cool alongside a −32
              instrument count (the 22AUG26 +7.68M chunk settled 08-22 08:00Z and
              the 26AUG26 line is new and empty at 9 calls / 45 puts). Against 30D
              close-to-close RV of{' '}
              <span className="dn-tag">43.18%</span>, chain-level richness is{' '}
              <span className="dn-tag">≈ +3.52pt</span> — thin.{' '}
              <span className="dn-em">
                This is a chain median across N instruments, NOT a tradable spread;
                expiry-level and strike-level vega, skew and term structure are not
                loaded, so the vol read stays framework-only. Put/call OI ratio 0.59
                (call OI 249,355 BTC vs put OI 147,852 BTC) is carried as a raw file
                reading with no positioning inference attached.
              </span>
            </p>

            <h2 className="dn-sec">
              Macro{' '}
              <span className="dn-roman">IV · WEEKEND RE-RENDER — the panel is fresh but the data is not; every daily row is the same Friday 08-21 print the 08-22 note carried · cross-asset stays IDIOSYNCRATIC at 0.220 with BTC +22.36% 7d leading NQ −2.57% by 24.93pt, co-moving more with metals than with the equity indices over the sample — co-movement only, not a driver</span>
            </h2>

            <p>
              <span className="dn-signal">
                There is no new macro information in this note and the honest thing
                is to say so before quoting a single number
              </span>. The dashboard rendered at 2026-08-22 22:16Z — only ~1.85h
              before this anchor, so the <em>render</em> is the freshest of the
              lineage — but 08-22 is a Saturday, FRED published nothing across the
              weekend, and every daily Tier-1 row is therefore the identical Friday
              08-21 print the 08-22 note already carried.{' '}
              <span className="dn-em">
                Read this panel as UNCHANGED, not as updated. A reader comparing the
                two notes should see no macro delta because there is none, not
                because the tape went quiet.
              </span>{' '}
              The levels: US 10Y nominal{' '}
              <span className="dn-tag bear">4.69% (+4.0bp)</span>, regime z{' '}
              <span className="dn-tag bear">+1.98</span>, episodic +0.69 — RISK-OFF
              and the <em>highest fresh daily Tier-1</em> regime z on the board. It
              is not the highest value displayed: JGB 10Y carries +2.42, but on a
              monthly, 82-day-stale series that this note does not lean on. 10Y TIPS
              real{' '}
              <span className="dn-tag bear">2.35% (0.0bp)</span>, regime z +1.82,
              episodic −1.03 — RISK-OFF. 5Y5Y BE inflation{' '}
              <span className="dn-tag">2.34% (0.0bp)</span>, regime z +1.76, episodic{' '}
              <span className="dn-tag bear">+1.58</span> — flagged episodic. HY OAS{' '}
              <span className="dn-tag bull">2.75% (+2.0bp)</span>, regime z −0.74 —
              still loose. MOVE bond vol{' '}
              <span className="dn-tag">73.4 (+0.22)</span>, regime z +0.02 —
              neutral. DXY{' '}
              <span className="dn-tag bull">98.80 (−0.10)</span>, episodic z{' '}
              <span className="dn-tag bull">−1.81</span> — flagged episodic soft. Fed
              net liquidity{' '}
              <span className="dn-tag bear">$5.792T (−0.004T)</span>, regime z −1.22,
              episodic z <span className="dn-tag bear">−2.45</span> — RISK-OFF and
              still draining, the most hostile line for BTC on the panel. NFCI −0.559
              (stale 8d, RISK-ON). USD/JPY 158.86, US-JP 10Y spread 2.02% (+4.0bp),
              USD/CNY 6.7118 with episodic z −2.57.{' '}
              <span className="dn-em">
                Net: rates tight and real yields tight, credit and vol loose, the
                dollar soft, and Fed liquidity draining — the same split read as
                08-22. It is a hostile backdrop that BTC has spent a week ignoring;
                that divergence is the point, and the next macro print, not this
                re-render, is what tests it.
              </span>{' '}
              JGB 10Y 2.67% carries the EXTREME RISK-OFF tag on a{' '}
              <span className="dn-tag stale">monthly, 82-day-stale</span> series —
              do not lean on it.
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>Macro indicator</th><th>level</th><th>Δ</th><th>regime z</th><th>episodic z</th><th>read</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.69%</td><td className="num bear">+4.0bp</td><td className="num bear">+1.98</td><td className="num">+0.69</td><td className="bear">RISK-OFF · highest fresh daily Tier-1 regime z (stale monthly JGB reads higher at +2.42)</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.35%</td><td className="num">0.0bp</td><td className="num bear">+1.82</td><td className="num bull">−1.03</td><td className="bear">RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.34%</td><td className="num">0.0bp</td><td className="num">+1.76</td><td className="num bear">+1.58</td><td className="neut">no tag · episodic flagged</td></tr>
                <tr><td>HY OAS</td><td className="num">2.75%</td><td className="num bear">+2.0bp</td><td className="num bull">−0.74</td><td className="num">+0.19</td><td className="bull">loose</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.559</td><td className="num">−0.00</td><td className="num bull">−1.46</td><td className="num bull">−1.29</td><td className="stale">RISK-ON · stale 8d</td></tr>
                <tr><td>MOVE bond vol</td><td className="num">73.4</td><td className="num bear">+0.22</td><td className="num">+0.02</td><td className="num">−0.36</td><td className="neut">neutral</td></tr>
                <tr><td>USD index (DXY)</td><td className="num">98.80</td><td className="num bull">−0.10</td><td className="num">−0.17</td><td className="num bull">−1.81</td><td className="bull">neutral regime · episodic soft</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.792T</td><td className="num bear">−0.004T</td><td className="num bear">−1.22</td><td className="num bear">−2.45</td><td className="bear">RISK-OFF · draining · episodic</td></tr>
                <tr><td>USD/JPY</td><td className="num">158.86</td><td className="num bull">−0.02</td><td className="num">+0.53</td><td className="num">−0.75</td><td className="neut">no tag</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.02%</td><td className="num bear">+4.0bp</td><td className="num">−0.17</td><td className="num">+0.69</td><td className="neut">neutral</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7118</td><td className="num bull">−0.01</td><td className="num bull">−1.56</td><td className="num bull">−2.57</td><td className="bull">no tag · episodic</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp (monthly)</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">monthly · stale 82d · do not lean</td></tr>
              </tbody>
            </table>

            <p>
              Cross-asset (7d 1h window, 22 assets, 166 rows, generated 2026-08-23
              00:00Z — <span className="dn-em">a 7-day rolling read, not a same-day
              read</span>). Mean off-diagonal{' '}
              <span className="dn-tag">|r| 0.220</span>, essentially unchanged from
              08-22&rsquo;s 0.219 and comfortably inside the{' '}
              <span className="dn-tag">IDIOSYNCRATIC</span> band (&lt;0.25). BTC&rsquo;s
              correlation ranking is topped by metals, with single equities mixed
              into the middle of it: PLAT{' '}
              <span className="dn-tag">+0.307</span>, SILVER{' '}
              <span className="dn-tag">+0.241</span>, MSFT{' '}
              <span className="dn-tag">+0.238</span>, META{' '}
              <span className="dn-tag">+0.184</span>, GOLD{' '}
              <span className="dn-tag">+0.183</span>, PALL +0.174, AMZN +0.149,
              COPPER +0.143, EUR +0.136, JPY −0.131 — with{' '}
              <span className="dn-tag">NQ at +0.059</span> and{' '}
              <span className="dn-tag">SP500 at +0.050</span> — the two broad equity
              indices sit at the bottom of the list, but{' '}
              <span className="dn-em">
                &ldquo;equity-last&rdquo; would be wrong: MSFT +0.238 ranks third and
                META +0.184 fourth, both above GOLD +0.183
              </span>
              . 7d performance:{' '}
              <span className="dn-tag bull">BTC +22.36%</span> against{' '}
              <span className="dn-tag bear">NQ −2.57%</span>,{' '}
              <span className="dn-tag bear">SP500 −1.45%</span>,{' '}
              <span className="dn-tag bear">JP225 −4.08%</span>,{' '}
              <span className="dn-tag bear">NVDA −3.96%</span>,{' '}
              <span className="dn-tag bear">META −6.74%</span>,{' '}
              <span className="dn-tag bear">MSFT −2.67%</span>, TSLA{' '}
              <span className="dn-tag bull">+5.84%</span>, AAPL +1.28%. Real assets
              firm: URNM{' '}
              <span className="dn-tag bull">+10.55%</span>, PLAT +7.98%, BRENT
              +7.14%, CL +6.77%, SILVER +6.04%, GOLD +5.08%.{' '}
              <span className="dn-em">
                BTC leads NQ by +24.93pt on 7d, narrowed from the 08-22
                note&rsquo;s +26.63pt purely because BTC gave back a session. What
                the sample supports and nothing more: over these 166 hourly rows BTC
                co-moved more with selected metals than with NQ or SP500. That is a
                statement about contemporaneous co-movement in one 7d window — it
                does <em>not</em> identify what is driving the move, and no
                hedge-ratio, stability or out-of-sample work is loaded here, so it
                establishes nothing about whether the move can or cannot be hedged
                with TradFi instruments. It is consistent with the hostile macro
                panel above having stayed survivable so far; it does not explain why.
              </span>{' '}
              BTC/NQ ratio, max-pain and NTT pivots remain NOT LOADED —
              framework-only.
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · book FLAT · pullback long still NOT ARMED — BOTH legs unfired: the 08-23 weekly has not settled and price stopped $600.02 above the band top (24h low $76,600.02 vs $76,000) · chase-short STOOD DOWN, price leg 17.48% away · the 08-19 scout stays closed EXPIRED UNFILLED and is not re-litigated</span>
            </h2>

            <p>
              <span className="dn-signal">
                The book did nothing this session and that was the correct
                outcome, not a missed one
              </span>. The 08-22 note framed a pullback long at the
              $75,000–$76,000 wall band, explicitly NOT ARMED, gated on two legs:
              the 08-23 W-SUN settle above the 200W floor, and a held close inside
              the band. Neither fired. The weekly is still open with ~23.9h to run.
              Price traded down to{' '}
              <span className="dn-tag">$76,600.02 @ 2026-08-22 10:23Z</span> —{' '}
              <span className="dn-em">$600.02, or 0.79%, above the top of the
              band</span> — and turned back up without entering it. There is nothing
              to defend and nothing to regret: an unarmed framework that was not
              touched is simply an unarmed framework.{' '}
              <span className="dn-em">
                The one thing this session changes is the quality of the setup, and
                it cuts both ways. The loss of the W-EMA50 / W-SMA150 shelf means
                the band entry would now be bought below a confirmed lid rather than
                on a pullback to support — worse context. But it also means the
                first overhead objective is nearer and better defined. The band, the
                stop and the targets are NOT moved on that basis; re-drawing levels
                to match the tape is the same error as chasing, in the opposite
                direction.
              </span>
            </p>

            <div className="dn-trade">
              <span className="dn-side long">long · pullback re-entry framework · <b>NOT ARMED</b> — both legs unfired · price came within $600.02 of the band and turned</span>
              <div className="dn-trade-name">
                Pullback long at the $75,000–$76,000 wall band — carried forward
                unchanged from 08-22; the weekly settle is still pending and the
                band was never entered
              </div>
              <div className="dn-thesis">
                The structural case is unchanged and still rests on evidence rather
                than hope: a 10-of-10 positive daily MA ladder, a{' '}
                <b>+242.37M footed dealer clamp</b> with all ten top walls positive,
                retail de-crowded to 50.18% (−18.82pt off the 7d peak) through a
                +22.30% week, and an in-progress weekly bar +20.03% above the 200W
                cycle floor. The case against paying up is equally unchanged and got
                one line stronger: funding has been welded to the +10.95% cap for
                2,360 consecutive capped rows, aggregate OI did not contract on a
                net basis through a down-day (+4.8 BTC; gross turnover is not
                observable in this feed), and spot has now lost the W-EMA50
                $77,226.37 / W-SMA150
                $77,442.48 shelf it briefly held. <b>Both arming legs are unfired.</b>{' '}
                Leg 1 — the 08-23 23:59Z W-SUN settle above the 200W — cannot be
                evaluated until tonight. Leg 2 — a held close inside
                $75,000–$76,000 — was approached to within $600.02 and rejected.
                The framework is carried forward at the same levels; it is not
                re-drawn upward to meet a price that never came down.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">NOT ARMED · leg 1 pending (weekly open until 2026-08-23 23:59Z) · leg 2 unfired (24h low $76,600.02 = $600.02 / 0.79% above the band top)</span></div>
                <div><span className="dn-lvl-k">arming condition (BOTH required)</span><span className="dn-lvl-v bull">08-23 W-SUN close &gt; W-SMA200 $64,266.81 (settles 23:59Z) AND a 1h close held inside $75,000–$76,000 — the band bracketed by the $75,000 +15.20M and $76,000 +12.82M walls</span></div>
                <div><span className="dn-lvl-k">entry</span><span className="dn-lvl-v bull">≈$76,000 on the arming print · 0.2R · no chase above the band; a print that never reaches the band is a trade the desk does not take</span></div>
                <div><span className="dn-lvl-k">stop</span><span className="dn-lvl-v bear">1d close &lt; $72,992.40 — the 08-21 daily low and the last pivot before the breakout leg, sitting just above the $72,000 +13.49M wall · the stop is 5.37% below spot — a 5.37% decline reaches it (equivalently, spot is +5.68% above the stop)</span></div>
                <div><span className="dn-lvl-k">targets</span><span className="dn-lvl-v">$80,000 (the +38.29M heaviest wall · spot +3.71% away) then W-SMA50 $81,773.47 (+6.01%) — note W-SMA50 has moved from the 08-22 note&rsquo;s $81,789 and will move again on tonight&rsquo;s settle</span></div>
                <div><span className="dn-lvl-k">first overhead to clear</span><span className="dn-lvl-v bear">the lost shelf W-EMA50 $77,226.37 / W-SMA150 $77,442.48, then the three-deep lid $78,000 wall / D-EMA400 ≈$78,213 (MTF read) / W-EMA100 $78,435.81 — the 24h high $78,810.00 tested through and failed</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R (illustrative):</b> entry ≈$76,000, stop $72,992.40 =
                $3,007.60 of risk; first target $80,000 = $4,000 of reward ≈{' '}
                <b>1.33:1</b> (4,000 / 3,007.60 = 1.3299). That is thin for a 0.2R
                scout and it is thin <em>by construction</em> — the band is drawn
                where the desk would want the trade, not where the arithmetic
                flatters it. <b>Hard rule:</b> the levels do not move because price
                stalled $600 short. If the tape never returns to the band, the
                framework expires unfilled and is recorded as such — the same
                discipline that recorded the 08-19 scout as expired rather than
                re-drawing it 20% higher.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · chase-short · <b>STOOD DOWN</b> — price leg 17.48% from arming (nearer than 08-22&rsquo;s 18.84%, only because price fell) · gamma leg eased to +242.37M, still the second-deepest of the post-08-16 lineage</span>
              <div className="dn-trade-name">
                Chase-short — stood down again; the shelf loss is not
                a short signal and this note does not treat it as one
              </div>
              <div className="dn-thesis">
                The two conditions that would put a short on the table are a price
                leg (spot within reach of the 0-γ flip, where the dealer book stops
                dampening and starts amplifying) and a gamma leg (the positive clamp
                unwinding). Neither is close. The flip sits at{' '}
                <b>$63,653, 17.48% below spot</b> — a 17.48% decline is required to
                reach it, against 18.84% on 08-22; the leg moved nearer only because
                price fell $845, not because the structure changed. The clamp eased
                −7.54M to <b>+242.37M footed</b>, which is the second-deepest
                positive print of the post-08-16 lineage and{' '}
                <b>NOT a lineage maximum</b> — on the footed basis carried
                throughout, 07-22 +313.63M and 07-23 +283.46M sit above it, while
                07-24 foots to +235.95M and sits below. Meanwhile the evidence that
                would
                tempt a short — the lost shelf, the 4h death cross, the 12h TD9
                SELL, the 3d frame entering the cloud, RSI cooling from ~90 — is
                all mean-reversion evidence inside a{' '}
                <b>6 long / 0 short</b> MTF map on the aggregate convention (5 long
                / 0 short row-summed) with zero short classifications on either and
                a fully positive daily ladder.{' '}
                <em>
                  Selling a −0.89% day into a +242.37M positive-gamma book, 20%
                  above the cycle floor, with retail already at 50/50, is a trade
                  with no structural backing.
                </em>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">STOOD DOWN — no short contemplated at this snapshot</span></div>
                <div><span className="dn-lvl-k">price leg (unmet)</span><span className="dn-lvl-v bear">spot within reach of the 0-γ flip $63,653 — currently 17.48% below spot; spot is +21.18% above it</span></div>
                <div><span className="dn-lvl-k">gamma leg (unmet)</span><span className="dn-lvl-v bear">footed aggregate GEX turning negative or collapsing toward zero — currently +242.37M (headline +238.6M), eased −7.54M vs 08-22 but still deep; the 28AUG26 +87.66M / 36.17% roll-off at 5.3 DTE is the nearest structural catalyst that could move this leg</span></div>
                <div><span className="dn-lvl-k">do-not</span><span className="dn-lvl-v">do not read the W-EMA50 / W-SMA150 shelf loss, the fresh 4h water-up death cross or the 12h TD9 SELL as short triggers — they are mean-reversion prints inside an intact bullish structure</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework discipline:</b> the gamma leg has a dated candidate and
                the price leg does not. 28AUG26 currently contributes +87.66M —
                36.17% of the footed strip — at current IV; absent offsetting book,
                spot or IV changes, that contribution comes off at the 28AUG settle
                and the clamp thins materially. That is a <em>watch</em>, not a
                forecast: the strip re-prices continuously and a snapshot share is
                not a guaranteed roll-off.
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">closed · 08-19 cover-bounce scout · EXPIRED UNFILLED — recorded 08-22, unchanged, and not re-litigated here</span>
              <div className="dn-trade-name">
                08-19 scout — closed out as expired; carried in the book only as the
                open design defect it exposed
              </div>
              <div className="dn-thesis">
                The 08-19 scout (entry ≈$64,632, stop $63,301, targets $66,343 /
                $66,391) was recorded on 08-22 as <b>EXPIRED UNFILLED</b> at an
                opportunity cost of 10.03R gross / ≈2.01R at the stated 0.2R sizing,
                with both targets tagged 2026-08-19 15:05Z. Nothing this session
                changes that record and the note does not re-argue it. What{' '}
                <em>is</em> live is the defect it exposed: the trade never armed
                because leg 2 required a certifiable SM net long, and the SM feed
                produced its net long inside a single roster re-sync.{' '}
                <b>
                  That has now happened three days running — 08-20 07:06Z, 08-21
                  06:21Z and 08-22 06:41Z — which upgrades the finding from
                  &ldquo;an artifact&rdquo; to &ldquo;how this field behaves&rdquo;.
                </b>{' '}
                Any future gate written against <code>net_btc</code> as a level or a
                delta will keep producing this outcome. The design fix is carried
                as an open item for a later session, not patched mid-note.
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">status</span><span className="dn-lvl-v">EXPIRED UNFILLED · closed out 08-22 · NOT re-drawn at a higher price · no further accounting added this session</span></div>
                <div><span className="dn-lvl-k">open design item</span><span className="dn-lvl-v bear">SM roster re-syncs at 08-20 07:06Z (long_traders 587 → 1,388), 08-21 06:21Z (1,336 → 2,497), 08-22 06:41Z (2,260 → 4,976) — a binary decision gate on <code>net_btc</code> is unsound; replace with a roster-stable window test or drop the leg</span></div>
              </div>
              <div className="dn-gating">
                <b>Accounting note:</b> the opportunity-cost figures are arithmetic
                on a trade that was never entered, recorded for process
                accountability, not as a claim of performance. No lineage MFE ledger
                exists, so the miss is still not ranked against prior misses — that
                ledger remains an open item from the 08-22 audit.
              </div>
            </div>

            <h2 className="dn-sec">
              Decision conditions{' '}
              <span className="dn-roman">VI · the 08-23 23:59Z W-SUN settle is the one dated print that matters and it is ~23.9h out · the shelf loss is the new watch · book FLAT, pullback NOT ARMED, chase-short stood down</span>
            </h2>

            <p>
              Of the 08-22 conditions: the <b>pullback arming condition DID NOT
              FIRE</b> on either leg (the weekly is still open; the band was
              approached to $600.02 and rejected); the <b>chase-short stayed stood
              down</b> with its price leg moving from 18.84% to 17.48% purely on
              price; the <b>08-19 scout stayed closed</b> as expired unfilled; the{' '}
              <b>28AUG26 clamp did not roll off</b> and in fact grew its share from
              33.18% to 36.17% of a slightly smaller strip; and the{' '}
              <b>08-23 W-SUN settle has not happened yet</b>, so the one-week
              false-break read is exactly where the prior note left it — on track,
              not recorded. Two things the prior note did not anticipate printed
              anyway: spot <b>lost the W-EMA50 / W-SMA150 shelf</b> it had just
              reclaimed, and the funding pin <b>tightened to 100% cap occupancy
              through a down-day</b> while aggregate OI stayed flat on net.{' '}
              <em>
                One condition resolved cleanly (nothing armed, book stayed flat, and
                that was right), one is still pending its dated print, and two new
                adverse structural facts entered the book. Nothing here is a
                reversal signal; all of it is a reason not to pay up.
              </em>
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>condition</th><th>level</th><th>action</th></tr>
              </thead>
              <tbody>
                <tr><td><b>08-23 W-SUN weekly settle</b> (the dated print · ~23.9h from this anchor)</td><td className="bull">close vs W-SMA200 $64,266.81 at 2026-08-23 23:59Z · currently +20.03% above; leaving the 08-16 break standing needs a −16.69% single-session collapse</td><td>a settle above converts the 08-16 break from standing to a recorded one-week false break and fires leg 1 of the pullback long; a settle below leaves the break intact and invalidates every conditional false-break statement in this note</td></tr>
                <tr><td>Pullback long — arming (BOTH legs)</td><td className="bull">weekly settle above the 200W AND a 1h close held inside $75,000–$76,000</td><td>scout long 0.2R at ≈$76,000, stop 1d close &lt; $72,992.40, targets $80,000 then W-SMA50 $81,773.47 · no chase above the band</td></tr>
                <tr><td><b>Shelf reclaim</b> (NEW watch)</td><td className="bull">1d close back above W-SMA150 $77,442.48 (and W-EMA50 $77,226.37)</td><td>would re-establish the 08-22 shelf read and demote this session&rsquo;s loss to a wick; until then the pair is overhead resistance and the pullback thesis is buying below a lid</td></tr>
                <tr><td><b>Lid test</b> (NEW watch)</td><td className="bear">1d close above the stacked $78,000 wall / D-EMA400 ≈$78,213 / W-EMA100 $78,435.81 band</td><td>the 24h high $78,810.00 traded through all three and failed; a daily close above the band is the first genuine continuation evidence and would retire the pullback framework as too low</td></tr>
                <tr><td>Structural invalidation</td><td className="bear">1d close &lt; $72,992.40 (08-21 daily low, above the $72,000 +13.49M wall) · 5.37% below spot — a 5.37% decline reaches it (spot is +5.68% above)</td><td>the breakout leg is a failed move; the pullback framework is cancelled rather than armed and the whole bullish structure is reassessed from scratch</td></tr>
                <tr><td>Funding un-pin</td><td className="bull">funding prints below the +10.95% cap for a sustained stretch, ideally with OI falling</td><td>would relieve the single worst line in the book (2,360 consecutive capped rows, 1,441 / 1,441 sampled rows in the 24h window) and materially improve the pullback entry; a cap-pinned book paying maximum carry into a net-flat aggregate OI base is the fragility, not the price</td></tr>
                <tr><td>28AUG26 gamma roll-off</td><td className="bear">+87.66M = 36.17% of the footed +242.37M strip, 5.3 DTE, settles 2026-08-28 08:00Z</td><td>a snapshot contribution at current IV, not a guaranteed roll-off; absent offsetting book / spot / IV changes it thins the clamp materially and is the nearest catalyst that could move the chase-short&rsquo;s gamma leg</td></tr>
                <tr><td>SM feed (design defect · NOT a trading condition)</td><td className="stale">roster re-synced 08-20 07:06Z, 08-21 06:21Z, 08-22 06:41Z — three consecutive days; 98.12% of this note&rsquo;s 24h Δnet is the 08-22 re-sync</td><td>no gate is written against <code>net_btc</code> in this note; the only SM statement carried is the artifact-free 17h26m window (Δnet −636.8, −1.94%) and it is descriptive, not decisive</td></tr>
                <tr><td>Macro re-grow / rates filter</td><td className="stale">panel UNCHANGED — weekend re-render of the Friday 08-21 print: 10Y 4.69% (z +1.98), TIPS real 2.35%, HY OAS 2.75%, MOVE 73.4, Fed net liq $5.792T draining (episodic z −2.45)</td><td>no macro action available or warranted from a re-render; the next US daily print is the first thing that can move this panel. BTC&rsquo;s r = +0.059 to NQ says only that the two barely co-moved over this 7d sample — it does not identify the driver either way</td></tr>
              </tbody>
            </table>

            <p>
              The single line that re-writes <em>this</em> note is{' '}
              <span className="dn-signal">
                whether tonight&rsquo;s 23:59Z W-SUN settle records the 08-16 break
                as a one-week false break — and then whether the tape returns to the
                $75,000–$76,000 band to let the desk buy it, or reclaims the
                W-SMA150 $77,442.48 shelf and leaves the framework unfilled the way
                the 08-19 scout was left unfilled
              </span>. Everything else is context. The structure is still bullish on
              evidence: the daily ladder is 10-of-10 positive, the dealer book is
              +242.37M long gamma with every top wall positive, retail sits at 50/50
              after a +22.30% week, and the cycle floor is 16.69% away. The tape is
              still hostile to an entry here: funding welded to the cap for 2,360
              consecutive sampled rows, aggregate OI net-unmoved through a down-day,
              spot back under the weekly
              shelf, and a three-deep lid $863 overhead that already rejected one
              test. <em>Those two readings are not in conflict — they describe a
              bullish structure at a bad price</em>, which is the same conclusion the
              08-22 note reached from a different direction and $845 higher. Book
              stays FLAT, the pullback long stays defined and NOT ARMED at
              $75,000–$76,000, the chase-short stays stood down, and the desk waits
              for the settle.
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              Audit trace · v2 — post codex hostile audit
            </span>
            <b>Status: v2 EN note — post codex hostile audit.</b> STAGE B ran the
            codex hostile-but-fair pass against the v1 draft and returned{' '}
            <b>BLOCK-CRITICAL — 1 CRITICAL + 5 MAJOR + 6 MINOR</b>. The full record,
            including the reviewer&rsquo;s evidence, the confirmed-clean list and the
            open items, is at{' '}
            <code>audits/2026-08-23-desk-note.md</code> and was not edited by this
            stage. Every finding below was applied to this file, then closed by
            grep: for each one the key wrong-claim pattern and its semantic variants
            were searched across the <em>whole</em> file — not only the cited lines —
            and re-searched after the fix. Hits-before / hits-after are stated
            per finding, and a finding is called RESOLVED only where hits-after
            carrying the pre-fix meaning is zero. Where a literal string survives
            with inverted or explicitly-relabelled meaning, that is stated rather
            than counted as zero.
            <br /><br />
            <b>DN-001 · CRITICAL · &ldquo;first negative near-dated chunk of the
            lineage&rdquo; was false.</b> The post-08-16 lineage already opened with
            17AUG26 1.3 DTE −1.10M on the 08-16 note. The ordinal is removed;
            24AUG26 is now stated as turning from +2.66M on 08-22 to −1.21M today —
            a new negative front expiry versus that note, not a lineage first — and
            the absence of a sourced expiry-sign ledger is disclosed as an open item.
            Patterns searched: <code>first negative</code> · <code>near-dated</code> ·{' '}
            <code>chunk of the lineage</code> · <code>lineage&rsquo;s first</code>.
            Hits before 1 / 1 / 1 / 0 → hits after <b>0 / 0 / 0 / 0</b>.{' '}
            <b>RESOLVED.</b>
            <br /><br />
            <b>DN-002 · MAJOR · two OI horizons were computed off the rolled 00:08Z
            live row, not the declared 00:07Z pin.</b> Both are recomputed from the
            pinned anchor: 48h is now <b>−1,752.8 / −1.63%</b> (was −1,787.5 /
            −1.66%) and the 3d-peak delta is now <b>−5,185.6</b> (was −5,184.9;
            −4.67% is unchanged). The manifest now carries an explicit endpoint
            assertion — every horizon in this note terminates on the pinned anchor
            row — and names the two v1 figures that failed it. 24h (+4.829), 72h
            (−1,721.0) and 7d (−5,639.5) reproduced against the pin unchanged.
            Patterns searched: <code>1,787</code> · <code>5,184</code>. Hits before
            1 / 2 → hits after <b>0 / 0</b>; the replacements{' '}
            <code>1,752.8</code> and <code>5,185.6</code> now appear 1 and 2 times.{' '}
            <b>RESOLVED.</b>
            <br /><br />
            <b>DN-003 · MAJOR · the §III header claimed the front of the strip had
            gone negative while the displayed front strip was net positive.</b> The
            four front expiries — 23AUG +5.76M, 24AUG −1.21M, 25AUG +0.79M, 26AUG
            −0.00M — foot to <b>+5.34M</b>. The header now reads &ldquo;one front
            expiry turned negative — the front four still foot +5.34M&rdquo;, and the
            body states the same footing inline. Patterns searched:{' '}
            <code>front of the strip has gone negative</code> ·{' '}
            <code>gone negative</code> · <code>front … is negative</code>. Hits
            before 1 / 1 / 0 → hits after <b>0 / 0 / 0</b>. <b>RESOLVED.</b>
            <br /><br />
            <b>DN-004 · MAJOR · the lineage counter-ledger mixed headline and footed
            GEX bases</b>, carrying forward the 08-22 audit&rsquo;s V2-N01 defect. On
            the footed by-expiry basis this note uses throughout, the archives read
            07-22 <b>+313.63M</b> and 07-23 <b>+283.46M</b> — both above today&rsquo;s
            +242.37M — while 07-24 foots to <b>+235.95M</b> and therefore sits{' '}
            <em>below</em> today. Both counter-ledger sites now print the footed
            figures and drop 07-24 as a deeper comparator; the one surviving mention
            of +262.1M is explicitly labelled a headline figure on the other basis
            and non-comparable. The narrower &ldquo;second-deepest post-08-16&rdquo;
            claim, which the audit confirmed correct, is preserved at both sites.
            Patterns searched: <code>294.6M</code> · <code>262.1M</code> ·{' '}
            <code>07-24 +2…</code>. Hits before 2 / 2 / 2 → hits after{' '}
            <b>0 / 1 / 1</b>; the single remaining <code>262.1M</code> and its 07-24
            line are the explicit non-comparability disclosure, not the pre-fix
            claim, and <code>313.63M</code> / <code>235.95M</code> now appear twice
            each. <b>RESOLVED.</b>
            <br /><br />
            <b>DN-005 · MAJOR · a flat endpoint OI delta was promoted into
            &ldquo;nobody de-levered&rdquo;, &ldquo;nothing de-levered&rdquo; and
            &ldquo;no exit taken&rdquo;.</b> The pinned tape proves only that
            aggregate OI ran 105,861.784 → 105,866.613, +4.829 BTC (+0.0046%) across
            the window; it exposes no gross opens, closes or account-level turnover,
            so deleveraging offset by replacement leverage would print the same flat
            net. All eight sites — the OI tile, the lead, the §I roman, the §I body,
            the retail counter-argument, the flow paragraph, the pullback thesis, the
            decision paragraph, the funding-un-pin row, the closing paragraph and the
            signature — now say <b>aggregate OI did not contract on a net basis</b>,
            and both §I and the tile state explicitly that gross turnover is not
            observable from the loaded series. Patterns searched:{' '}
            <code>de-levered</code> · <code>nobody de</code> ·{' '}
            <code>nothing de-lever</code> · <code>no exit taken</code> ·{' '}
            <code>have not left</code> · <code>OI went nowhere</code> ·{' '}
            <code>flushed nothing</code> · <code>OI did not move</code> ·{' '}
            <code>OI unmoved</code> · <code>flat OI base</code> · plus a bare{' '}
            <code>lever|exit|flush</code> sweep of the whole file. Hits before 2 / 1 /
            1 / 1 / 1 / 1 / 1 / 1 / 1 / 1 → hits after <b>0 across all ten</b>; the
            bare sweep returns only the new disclosure sentences, the unrelated
            &ldquo;leverage read&rdquo; and &ldquo;hard-exits&rdquo; strings, and the
            NFA leverage boilerplate. <b>RESOLVED.</b>
            <br /><br />
            <b>DN-006 · MAJOR · the cross-asset narrative exceeded what the loaded 7d
            correlations prove.</b> &ldquo;Equity-last&rdquo; is self-refuted by MSFT
            +0.238 at #3 and META +0.184 at #4, both above GOLD +0.183; r = +0.059 to
            NQ does not establish that the move is endogenous to crypto; and no
            hedge-ratio, stability or out-of-sample analysis is loaded, so
            &ldquo;un-hedgeable&rdquo; is unsupported. The section now says only that
            over these 166 hourly rows BTC co-moved more with selected metals than
            with NQ or SP500, states that this identifies neither the driver nor any
            hedge effectiveness, and prints the MSFT/META ranking as the explicit
            refutation of the removed phrase. The §IV roman and the macro
            decision-table row carry the same correction. Patterns searched:{' '}
            <code>equity-last</code> · <code>endogenous</code> ·{' '}
            <code>un-hedgeable</code> · <code>no meaningful tie</code> ·{' '}
            <code>not currently the driver</code> · <code>metals-first</code> · plus
            a bare <code>hedge|TradFi|beta story|driver</code> sweep. Hits before
            1 / 1 / 1 / 1 / 1 / 2 → hits after <b>1 / 0 / 0 / 0 / 0 / 0</b>. The
            single surviving <code>equity-last</code> occurrence is inside the
            sentence that states the phrase <em>would be wrong</em> and gives the
            counter-evidence; the bare sweep returns only the new
            &ldquo;establishes nothing about whether the move can or cannot be
            hedged&rdquo; and &ldquo;does not identify the driver&rdquo; disclaimers.{' '}
            <b>RESOLVED.</b>
            <br /><br />
            <b>DN-007 · MINOR · the SM baseline was mislabelled as the &ldquo;08-22
            note&rdquo;.</b> The +15,810.5 figure is the exact T−24h 00:07Z row, not
            the 08-22 note&rsquo;s 00:39Z anchor of +15,993.8. The tile is retitled{' '}
            <b>SM Δ · exact 24h</b>, and both the tile and the §I body now name the
            00:07Z baseline explicitly and disclose the prior-note alternative
            (+15,993.8 → +32,190.0, Δnet +16,196.3). The printed +16,379.5, 103.60%
            and 98.12% are correct on the 24h baseline and are unchanged. Patterns
            searched: <code>vs 08-22 note</code> ·{' '}
            <code>08-22 note&rsquo;s +15,810</code>. Hits before 1 / 1 → hits after{' '}
            <b>0 / 0</b>. <b>RESOLVED.</b>
            <br /><br />
            <b>DN-008 · MINOR · the MTF bias column did not add to its own stated
            6 / 0 / 4 total.</b> Two conventions were being blended. Both are now
            printed separately and labelled: the source&rsquo;s{' '}
            <em>aggregate-direction</em> block reads <b>6 long / 0 short / 4
            neutral</b>, while the <em>per-TF warning-state</em> column shown in the
            table sums to <b>5 long / 0 short / 5 neutral</b>; 1h is the single row
            where they disagree (aggregate long, per-TF 警示). The §II roman, the §II
            body, the table footnote and the chase-short thesis all now carry both
            counts, and every directional statement is noted as holding on either,
            since neither produces a short classification. Pattern searched:{' '}
            <code>6 long</code> (4 sites) and{' '}
            <code>5 long / 0 short / 5 neutral</code>. Hits before 4 / 0 → hits after{' '}
            <b>4 / 2</b>, with all four <code>6 long</code> sites now
            convention-labelled rather than bare. <b>RESOLVED.</b>
            <br /><br />
            <b>DN-009 · MINOR · the stop distance used the decline denominator but
            described spot as a percentage above the stop.</b> 1 − 72,992.40 /
            77,137.30 = 5.3747% is the decline required to reach the stop;
            77,137.30 / 72,992.40 − 1 = 5.6785% is how far spot sits above it. Both
            sites — the trade-block stop line and the structural-invalidation row —
            now read &ldquo;the stop is 5.37% below spot — a 5.37% decline reaches it
            (spot is +5.68% above)&rdquo;, matching the denominator discipline the
            page already used for the 0γ flip. Patterns searched:{' '}
            <code>spot is +5.37% above</code> · <code>spot +5.37% above</code>. Hits
            before 1 / 1 → hits after <b>0 / 0</b>; <code>5.68%</code> now appears
            twice. <b>RESOLVED.</b>
            <br /><br />
            <b>DN-010 · MINOR · &ldquo;stood down for a fourth session&rdquo; was an
            unscoped and false ordinal.</b> The repository documents the chase-short
            as stood down on 08-16, 08-17, 08-18, 08-19 and 08-22 before today. The
            unscoped count is dropped for <b>stood down again</b>. Pattern searched:{' '}
            <code>fourth session</code> · <code>for a fourth</code>. Hits before
            1 / 1 → hits after <b>0 / 0</b>. <b>RESOLVED.</b>
            <br /><br />
            <b>DN-011 · MINOR · a 24h inclusive window was called &ldquo;all 1,441
            minutes&rdquo;.</b> 1,441 sampled rows span 1,440 minute-to-minute
            intervals. The lead now reads &ldquo;all 1,441 sampled rows of the 24h
            window — 1,440 minute-to-minute intervals&rdquo;, the manifest states the
            N-rows / N−1-intervals rule directly, and the same row-versus-interval
            correction is applied to the capped streak everywhere it appears: 2,360
            consecutive <em>sampled rows</em> (2,359 elapsed minutes), not 2,360
            minutes. Patterns searched: <code>1,441 minutes</code> ·{' '}
            <code>consecutive minutes</code> · <code>for 2,360 … minutes</code>. Hits
            before 1 / 4 / 1 → hits after <b>0 / 0 / 0</b>. <b>RESOLVED.</b>
            <br /><br />
            <b>DN-012 · MINOR · US 10Y&rsquo;s +1.98 was called &ldquo;the tightest
            regime z on the board&rdquo; without scope.</b> The same page&rsquo;s
            table gives JGB 10Y regime z +2.42. Both the prose and the table cell now
            read <b>highest fresh daily Tier-1 regime z</b> and name the stale
            monthly JGB print that reads higher, with the 82-day staleness warning
            retained. Patterns searched: <code>tightest regime z</code>. Hits before
            2 → hits after <b>0</b>. <b>RESOLVED.</b>
            <br /><br />
            <b>Closure summary:</b> 12 of 12 findings RESOLVED — 1 CRITICAL, 5 MAJOR
            and 6 MINOR — with zero grep hits carrying pre-fix meaning remaining on
            any searched pattern. The three literal strings that survive
            (<code>262.1M</code>, <code>equity-last</code>, <code>6 long</code>) do so
            only inside sentences that invert, relabel or scope them, and each is
            itemised above rather than reported as a zero.
            <br /><br />
            <b>Not changed, and why:</b> the audit&rsquo;s confirmed-clean list is
            carried as-is — tape price and 24h flow, the funding arithmetic and cap
            occupancy, the daily-history return sequence, the full MA/RV matrix and
            200W state, the current GEX arithmetic outside DN-003/DN-004, every
            BJ↔UTC pair and staleness figure, the macro raw panel, the cross-asset
            raw data, the claims-versus-unloaded-data discipline, the trade
            arithmetic, and the <code>requireViewer</code> gate and JSX integrity.
            None of those were touched. The audit record itself was not edited by
            this stage.
            <br /><br />
            <b>Open items carried forward (from the audit&rsquo;s own list, not
            closed here):</b> <code>weekly_200sma.json</code> is still absent and the
            200W state remains a disclosed parquet recompute; the live tape still
            carries one NUL-only invalid JSONL record at physical line 65,799, far
            outside every window used and absent from the clean pin; no lineage MFE
            ledger exists, so the 08-19 scout miss is still unranked; no sourced
            expiry-sign ledger exists, which is why DN-001&rsquo;s ordinal is dropped
            rather than restated with a correct number; the SM{' '}
            <code>net_btc</code> gate design defect is flagged with three days of
            evidence and is not patched in this note; and mechanical pre-draft checks
            for expiry-bucket sums and signs, MTF row-count totals, directional
            percentage denominators and lineage ordinals remain unbuilt. Build proxy:{' '}
            <code>npx --no-install tsc --noEmit</code> exits 0. A full{' '}
            <code>next build</code> is environment-blocked on this server — Node
            18.19.1 against Next 16.2.6, which requires ≥20.9.0.
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · not financial advice</span>
            This note is an internal desk artifact prepared for discussion among
            principals of Hysteresis Research and is{' '}
            <em>not investment advice, not a solicitation, not an offer</em>, and not
            personalized to any recipient&rsquo;s circumstances. Numbers reflect a
            single atomic snapshot (2026-08-23 00:07Z tape anchor, pinned to the
            session archive) with section-level provenance disclosed in the manifest
            band above. Several inputs are explicitly stale, absent, open or
            unaudited and are flagged as such: <b>this is the v2 note, post codex
            hostile audit — all 12 findings applied and grep-closed, with the
            per-finding record in the audit trace above and the full verdict at{' '}
            <code>audits/2026-08-23-desk-note.md</code></b>; the macro Tier-1 panel
            rendered
            2026-08-22 22:16Z but carries no new data because FRED did not publish
            over the weekend; <code>weekly_200sma.json</code> is absent, so the 200W
            state, the 6.10% below-floor frequency over 164 completed weekly closes
            and the 22.4th-percentile ratio are the desk&rsquo;s own parquet
            recompute; <code>gex_summary.json</code> and{' '}
            <code>ma200w_trap_watch_state.json</code> were not read this session and
            nothing rests on them; <b>the 08-23 W-SUN weekly bar is OPEN until
            23:59Z</b>, so every weekly MA level and every false-break statement is
            provisional on that settle; the D-EMA400 ≈$78,213 is an MTF column read,
            not a desk recompute; JGB is monthly and 82d stale; and NTT pivots,
            max-pain, strike-level IV and the BTC/NQ ratio are NOT LOADED. Levels,
            sizes, and conditions are illustrative of the desk&rsquo;s process, not
            standing recommendations. Past correlation, gamma, and positioning
            patterns do not bind future tape. Derivatives carry the risk of total
            loss and, where leveraged, loss exceeding deposited margin.{' '}
            <em>Do your own work.</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                The pullback came, stopped $600 short of the band, and took the
                weekly shelf back on the way. Funding is welded to the cap and
                aggregate open interest did not contract on a net basis — a
                fully-paid long book that has not shrunk. The structure is still
                bullish and the price is still bad.
                Flat, waiting on the 23:59Z settle.
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
            v2 · 2026-08-23 00:07Z snapshot · post codex hostile audit
            (audits/2026-08-23-desk-note.md) · sources: live_db.json (pinned) ·
            mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
