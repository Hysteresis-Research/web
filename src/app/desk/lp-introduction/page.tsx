import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import { requireViewer } from '@/lib/gate';
import Reveal from '@/app/components/Reveal';
import SectionHead from '@/app/components/SectionHead';

// Internal-only route: not in public nav, not in sitemap, noindex/nofollow.
// Description deliberately anodyne — any future external share (Slack/email
// link preview) shows neutral text rather than the confidential LP artifact.
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'LP Introduction · Hysteresis Research',
    description: 'Internal LP introduction.',
    path: '/desk/lp-introduction',
    lang: 'en',
    type: 'article',
  }),
  alternates: { canonical: '/desk/lp-introduction' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

// Scoped carry of the source artifact's own token-based CSS (firm/site/
// lp-introduction.html <style>). The standalone reset + body[data-mode]
// theme bootstrap is dropped — the host RootLayout already provides the
// reset and the --paper/--ink/--mono/--serif/--accent tokens; only the
// artifact's layout/typographic rules are kept, scoped under `.lpi`.
// No document text is altered by this presentation-host adaptation.
const css = `
.lpi{color:var(--ink);font-family:var(--serif);max-width:920px;margin:0 auto;padding:72px 40px 160px;line-height:1.6}
.lpi h1{font-size:30px;letter-spacing:-0.01em}
.lpi h2{font-size:13px;font-family:var(--mono);text-transform:uppercase;letter-spacing:0.22em;color:var(--ink-2);margin:56px 0 10px;border-top:0.5px solid var(--rule);padding-top:18px}
.lpi h2 .n{color:var(--ink-3);margin-right:12px}
.lpi h3{font-size:15px;margin:20px 0 4px}
.lpi p{margin:10px 0}
.lpi .sub{color:var(--ink-3);font-family:var(--mono);font-size:12px;letter-spacing:0.18em;text-transform:uppercase}
.lpi .lede{font-size:18px;color:var(--ink);margin:14px 0 4px}
.lpi .pending{font-family:var(--mono);font-size:12px;color:var(--accent);border:0.5px solid var(--accent);padding:12px 16px;margin:14px 0;letter-spacing:0.02em}
.lpi table{border-collapse:collapse;width:100%;margin:14px 0;font-size:13px}
.lpi th,.lpi td{border:0.5px solid var(--rule-soft);padding:7px 10px;text-align:left;vertical-align:top}
.lpi th{font-family:var(--mono);font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:var(--ink-2)}
.lpi .notice{border:0.5px solid var(--rule);padding:16px 20px;margin:18px 0 8px;font-size:13px;color:var(--ink-2)}
.lpi ul{margin:8px 0 8px 22px}
.lpi li{margin:4px 0}
.lpi code{font-family:var(--mono);font-size:12px;color:var(--ink-2)}
.lpi .sig{font-style:italic;color:var(--ink-2)}
@media (max-width:640px){.lpi{padding:48px 20px 100px}}
`;

export default async function DeskLpIntroduction() {
  await requireViewer('/desk/lp-introduction');
  return (
    <main>
      <style>{css}</style>
      <section className="article wrap" id="lp-introduction">
        <SectionHead
          numeral="LP"
          title="LP Introduction"
          folio="Internal · desk"
        />
        <Reveal as="p" className="standfirst">
          <span className="cap">Hysteresis Research</span> is a
          research-driven quantitative trading firm operating across global
          macro and crypto derivatives.
        </Reveal>
      </section>
      {/* Hysteresis Research · LP Introduction (substantive interior artifact).
          Conforms to founding_document_v1{,_en}.md v1.1 + firm/blurb.md (public-copy
          rules) as applied 2026-05-18. Held — not deployed. Figures/returns/
          trade-cases are principal- or data-supplied at publication and are NOT
          asserted in this draft (Values #1). */}
      <div className="lpi">

        <h1>{`Hysteresis Research — LP Introduction`}</h1>
        <p className="sub">{`Hysteresis Research · 迟滞研究 · Est. 2026`}</p>
        <div className="notice">
          <strong>{`Confidential.`}</strong>{` For the named recipient only; not for redistribution. This document describes the firm's process and posture; it is not an offer to sell or a solicitation, and it contains no performance representation. Any figures are supplied and attributed at publication per §13.`}
        </div>

        <section id="s01">
          <h2><span className="n">{`01`}</span>{`Cover`}</h2>
          <p className="lede">{`Hysteresis Research is a research-driven quantitative trading firm. It operates across global macro and crypto derivatives.`}</p>
          <p>{`Our research programme studies cross-asset regime transitions: gaps between fundamentals and price that may persist `}<span className="sig">{`long enough to be measured`}</span>{`. Research compounds; capital follows.`}</p>
          <p className="pending">{`[PRINCIPAL INPUT — contact line + document version/date for the cover (firm contact; not fabricated here).]`}</p>
        </section>

        <section id="s02">
          <h2><span className="n">{`02`}</span>{`What we are`}</h2>
          <p>{`We are a research-driven, systematic, discipline-led trading firm operating at cross-asset regime transitions (crypto and TradFi macro). We run one disciplined process; what is run is the discipline, not a presumed regime alpha.`}</p>
          <p>{`Whether "regime hysteresis" is a distinct, exploitable mispricing — rather than a slower expression of trend — our research has not established. We hold it as an open question, and as the firm's name; it describes our research, not a returns claim. The durable advantage is organizational and epistemic discipline competitors cannot copy — pre-declared kill conditions, cross-event replication, a hostile cross-model audit gate — not tools, information, or a secret regime edge. In a commoditized systematic-trading category and an AI era, process discipline is the only moat that survives.`}</p>
        </section>

        <section id="s03">
          <h2><span className="n">{`03`}</span>{`The research question — why a gap `}<em>{`might`}</em>{` persist`}</h2>
          <p>{`This is the hysteresis research programme's hypothesis, stated as an open question we test — not a return source we claim. At a cross-asset regime transition, one `}<strong>{`anchor`}</strong>{` and two `}<strong>{`compressions`}</strong>{` could, in principle, let a gap between a changed regime and an un-re-rated price persist `}<span className="sig">{`long enough to be measured`}</span>{`:`}</p>
          <ul>
            <li><strong>{`Anchor`}</strong>{` — discretionary capital remains anchored to the prior-regime narrative after the regime has changed.`}</li>
            <li><strong>{`Compression 1`}</strong>{` — a performance-measurement clock (monthly Sharpe / pod review) that truncates the horizon over which a regime view can be held.`}</li>
            <li><strong>{`Compression 2`}</strong>{` — a redemption / de-grossing clock that forces position reduction into, not through, the transition.`}</li>
          </ul>
          <p>{`Whether such a gap is real, distinct from a slower expression of trend, and persistent enough to measure is precisely what the programme tests; it is not asserted here as a proven edge, and no duration or magnitude is claimed.`}</p>
        </section>

        <section id="s04">
          <h2><span className="n">{`04`}</span>{`Cycle drawdown — context, not signal`}</h2>
          <p>{`A drawdown is not a regime change. Cycle context informs how a regime read is weighted; it is never itself the signal. The firm's single source of truth for the live cycle-drawdown figure is the thesis-level kill condition `}<code>{`T4`}</code>{` in `}<code>{`firm/kill_conditions.md`}</code>{`; any drawdown figure shown here is the T4-reconciled value as of the document's publication date, timestamped and source-cited, never an ad-hoc number.`}</p>
          <p className="pending">{`[DATA — peak-aligned drawdown history + current read inserted at publication, reconciled to kill_conditions T4 ground truth (timestamped, source-cited). Not asserted in this draft.]`}</p>
        </section>

        <section id="s05">
          <h2><span className="n">{`05`}</span>{`Process — observation to position size`}</h2>
          <p>{`Every trading day, market observations are converted into falsifiable propositions and run through one pipeline:`}</p>
          <ul>
            <li><strong>{`Hypothesis`}</strong>{` → `}<strong>{`Data`}</strong>{` → `}<strong>{`Independent cross-validation`}</strong>{` → `}<strong>{`Regime integration`}</strong>{` → `}<strong>{`Position sizing`}</strong>{`.`}</li>
          </ul>
          <p>{`Trading is a byproduct of research; position size is the scale that weighs conviction. No position is opened without a pre-declared kill condition. Process metrics — pre-trade kill-condition documentation rate, hypothesis rejection rate, research-to-position cycle time — are `}<strong>{`targets`}</strong>{`, not observed results: there are no live trades yet, and the document does not present unmeasured metrics as measured.`}</p>
        </section>

        <section id="s06">
          <h2><span className="n">{`06`}</span>{`Scope — what we refuse`}</h2>
          <p>{`From the founding document §5, verbatim:`}</p>
          <table>
            <tbody>
              <tr><th>{`IN`}</th><th>{`OUT`}</th></tr>
              <tr>
                <td>
                  {`Cross-asset regime-transition trades (V1 main battlefield)`}<br/>
                  {`Positioning-conditioned event-driven sleeve`}<br/>
                  {`Crypto–TradFi boundary data-hygiene arbitrage`}<br/>
                  {`Formalized Wyckoff distribution/accumulation structure trades`}
                </td>
                <td>
                  {`Liquidity provision / market making (capacity conflict)`}<br/>
                  {`High-frequency microstructure arbitrage (not our edge)`}<br/>
                  {`Narrative-driven / sentiment-driven trades (violates Values #1)`}<br/>
                  {`"Unique opportunities" without cross-event replication (violates Values #3)`}<br/>
                  {`P&L the framework cannot explain (violates Values #1 — the most counter-intuitive: profitable trades we cannot explain are closed and reviewed)`}
                </td>
              </tr>
            </tbody>
          </table>
          <p>{`"Regime transition trades" names `}<em>{`where`}</em>{` the method operates, not a claimed distinct edge. We refuse capital rather than dilute the method's capacity. The OUT list is load-bearing and is not softened.`}</p>
        </section>

        <section id="s07">
          <h2><span className="n">{`07`}</span>{`Kill conditions — every thesis declares its kill`}</h2>
          <p>{`The credibility object is the kill-condition framework itself: it is real and complete. Every thesis declares, in advance, the observation that would retire it; `}<code>{`firm/kill_conditions.md`}</code>{` tracks each with metric, threshold, status and action, parsed by a checker that cannot report "all clear" while any applicable kill is unmeasured.`}</p>
          <p>{`The framework's operation is on record: under its own §6 revision policy and a hostile cross-model audit gate, two thesis/strategy kills (the regime-hysteresis falsifier W3 and the edge-time-lag thesis kill T1) were `}<strong>{`retired`}</strong>{` in 2026 when the firm could not defend the distinct-edge claim — withdrawn, not erased; retained for provenance (Values #1). That is the framework doing exactly what it exists to do.`}</p>
          <p>{`There are `}<strong>{`no LIVE or PAPER trade cases yet`}</strong>{`: no live trades exist and all program-level kill conditions are PENDING. The firm commits to a forward, timestamped, diligence-auditable live kill-ledger; cases will be shown only with a provenance tag (`}<code>{`LIVE · PAPER · BACKTEST-ATTRIBUTED · RECONSTRUCTED-ILLUSTRATIVE`}</code>{`) and never presented as live without an audited record.`}</p>
          <p className="pending">{`[FORWARD LEDGER — populated as live/paper trades and fired kills accrue, each provenance-tagged and audit-linked. No fabricated or unlabelled cases are shown in this draft.]`}</p>
        </section>

        <section id="s08">
          <h2><span className="n">{`08`}</span>{`Sleeves & programs — honest maturity`}</h2>
          <p>{`No program is live capital. Maturity is stated on the package ladder `}<code>{`DESIGN → DATA-GATED → VALIDATING → PAPER → LIVE`}</code>{`. P2 is the only near-term deployable book. The legal posture (an SP authorized at fund launch) and the operational status (VALIDATING — not funded) are distinct and are stated as such: authorization is not deployment.`}</p>
          <table>
            <tbody>
              <tr><th>{`Program`}</th><th>{`Sleeve`}</th><th>{`Maturity (ladder)`}</th><th>{`Capital today`}</th></tr>
              <tr><td>{`P2 BTC Regime Trend (systematic trend-CTA)`}</td><td>{`Regime (V1)`}</td><td>{`VALIDATING (trend-CTA merits)`}</td><td>{`none — authorized, not funded`}</td></tr>
              <tr><td>{`v0.1 research directions`}</td><td colSpan={3}>{`vol-hysteresis · cross-asset regime trend · power-constrained compute — archived v0.1, dormant, unfunded, no asserted edge (provenance only)`}</td></tr>
            </tbody>
          </table>
        </section>

        <section id="s09">
          <h2><span className="n">{`09`}</span>{`Capacity discipline — the scalability page`}</h2>
          <p>{`Capacity discipline is the product, not a phase to grow out of. The binding constraint is the method, not market depth; the firm runs at a deliberately capped size and refuses capital rather than dilute the method. Per-program capacity work (book depth, the P2 backtest) is an internal diligence artifact, available on request — it is not surfaced here as an AUM or scale number. The cap is evidenced by reference to `}<code>{`FUND-TERMS.md`}</code>{` and `}<code>{`blurb.md`}</code>{`, never by a figure, tier ladder, or "ceiling = $X".`}</p>
        </section>

        <section id="s10">
          <h2><span className="n">{`10`}</span>{`No scale target`}</h2>
          <p>{`The founding document's §2 is de-scaled in the applied v1.1 SSOT: there is no AUM milestone, no scale target, and no return projection. The trajectory is a capability statement (a unified regime model across crypto + macro majors; process infrastructure; a first public thesis note; the single-PM industrial process proven and transferable) — explicitly not a scale ambition. Capital is allocated by validation status and capacity, never by a target size.`}</p>
        </section>

        <section id="s11">
          <h2><span className="n">{`11`}</span>{`Values — priority order, as operating rules`}</h2>
          <table>
            <tbody>
              <tr><th>{`#`}</th><th>{`Value (priority)`}</th><th>{`Operating rule`}</th><th>{`Enforced where`}</th></tr>
              <tr><td>{`1`}</td><td>{`Epistemic integrity > P&L`}</td><td>{`Bad-process wins are not celebrated; good-process losses are not second-guessed; a claim that cannot be defended is withdrawn.`}</td><td>{`process_metrics.py; audits/ 12-field; codex small-N gate`}</td></tr>
              <tr><td>{`2`}</td><td>{`Falsifiability > Confidence`}</td><td>{`Every thesis declares its kill condition before entry; no kill condition, no entry.`}</td><td>{`trade_journal [Kill Condition] mandatory; kill_conditions T2`}</td></tr>
              <tr><td>{`3`}</td><td>{`Cross-validation > Speed`}</td><td>{`Small-N requires independent hostile audit; single events are not extrapolated; replication precedes sign-off.`}</td><td>{`README v1.1 §1 validation gate; audits/ small-N`}</td></tr>
              <tr><td>{`4`}</td><td>{`Survival > Optimality`}</td><td>{`The compounding engine is never risked; the drawdown ceiling beats Sharpe optimization.`}</td><td>{`pinned 25% MaxDD = kill W2; vol-target sizing`}</td></tr>
              <tr><td>{`5`}</td><td>{`Capacity discipline > Growth`}</td><td>{`Deploy only inside capacity where the method holds; refuse capital rather than dilute it.`}</td><td>{`FUND-TERMS dormant-SP; decaying redemption fee paid to the SP; Founders class`}</td></tr>
            </tbody>
          </table>
        </section>

        <section id="s12">
          <h2><span className="n">{`12`}</span>{`Operating & structural disclosures`}</h2>
          <h3>{`Key-person / succession / continuity`}</h3>
          <p>{`The firm is single-PM by design; that is the centre and a stated risk. Mitigation is process transferability: the discipline (pre-declared kills, the audit trail, the hostile-gate convention) is documented so it can be operated by a second PM on a training path, not held only in one head.`}</p>
          <h3>{`Conflicts / personal account / allocation`}</h3>
          <p>{`Any personal book and its relation to fund allocation is disclosed, with a personal-account-dealing and allocation policy stated before any return is shown (see §13).`}</p>
          <h3>{`Counterparty / custody diligence`}</h3>
          <p>{`Crypto and TradFi exposure is via regulated-venue derivatives with a qualified custodian / prime; crypto-custody legal treatment is counsel-deferred. This is diligence, not asserted limits.`}</p>
          <h3>{`Regulatory / marketing posture`}</h3>
          <p>{`Adviser registration, CIMA, CRS/FATCA and marketing-rule treatment are counsel-deferred and disclosed here as gate items, not represented as resolved.`}</p>
          <h3>{`NAV / valuation policy`}</h3>
          <p>{`NAV and valuation (including crypto and any in-specie) run through an independent administrator; specifics are counsel/administrator-deferred.`}</p>
          <h3>{`Side letters / MFN`}</h3>
          <p>{`Minimal by policy: bespoke liquidity to one LP re-introduces, for the whole sleeve, exactly the short-horizon redemption pressure the process exists to manage (§0 of the fund terms).`}</p>
        </section>

        <section id="s13">
          <h2><span className="n">{`13`}</span>{`Returns attribution `}<span className="sub">{`— gate before any number`}</span></h2>
          <p>{`This is a P0 gate, not a later step. Before any return is shown anywhere in this document, it is decomposed and the attribution stated `}<em>{`first`}</em>{`: strategy contribution / leverage / concentration (single-instrument) / and any different or personal book. No performance figure appears in §01–§12 until this block is supplied by the principal and is diligence-auditable.`}</p>
          <p className="pending">{`[PRINCIPAL INPUT REQUIRED — returns-attribution table. Only the principal can supply this; it gates every numeric slot above. Not fabricated here (Values #1).]`}</p>
        </section>

        <section id="s14">
          <h2><span className="n">{`14`}</span>{`Close`}</h2>
          <p>{`Research compounds; capital follows. This document is written to be read, not skimmed; diligence is invited on every claim, and the kill ledger is the standing invitation.`}</p>
          <p className="pending">{`[PRINCIPAL INPUT — closing contact line.]`}</p>
        </section>

      </div>
    </main>
  );
}
