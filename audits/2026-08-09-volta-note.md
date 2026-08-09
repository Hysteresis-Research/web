# 2026-08-09 Volta Note Audit ("Compute, underwritten")

| Field | Value |
| --- | --- |
| Date | 2026-08-09 |
| Target | `src/app/notes/compute-underwritten/page.tsx` (EN) + `src/app/zh/notes/compute-underwritten/page.tsx` (ZH) + `src/app/components/charts/VoltaDealStack.tsx` + EN/ZH notes index edits |
| Files reviewed | The five changed files; house references `src/app/notes/flywheel-reverse/page.tsx` + ZH mirror; `ChartFrame.tsx` |
| Reviewer | Codex hostile cross-model audit (xhigh, read-only sandbox), adjudicated by Claude |
| Scope | Arithmetic recompute (per-MW spread math, LC coverage, capex ratio); EN/ZH parity; chart-vs-prose consistency; claims discipline (Anthropic always as reported/unconfirmed; no position language; $10B multi-site hedge); structure (metadata paths, numerals, index entries, internal links, colophons, no accidental gating); house-convention deviations vs flywheel-reverse. |
| Snapshot anchor | Public-source facts as of publication week (Volta launch PR, Bitdeer PR/6-K 2026-08-04, Bloomberg/TechCrunch/The Block/Blockspace reporting). No server data involved. |
| Tokens | Single xhigh codex exec call (~19 min wall). |
| Build | `npx --no-install next build` green before and after fixes; both routes ƒ-dynamic. |

Verdict: **FIX-THEN-SHIP** (5 MAJOR, 3 MINOR, 0 CRITICAL) → all findings adjudicated and resolved; ship.

## Findings Table

| ID | Severity | Finding | Adjudication | Resolution |
| --- | --- | --- | --- | --- |
| F-01 | MAJOR | `$2.4M`/`$11.4M`/`$1.37B` presented as generic run rates; codex read `$202/kW·mo` as year-one base and recomputed the 16-year total to ~$5.9B, implying mislabeling. | **Partially accepted.** Codex's premise is wrong on the source: Bitdeer's release defines ~$202 as the *average* rate over the initial term (hence $202 × 121k kW × 12 × 16 ≈ $4.7B exactly, escalators inside). The real defect it surfaced is EN/ZH asymmetry: ZH said 均价, EN printed the bare rate. | EN prose now "averaging ~$202/kW-month (3% annual escalators)"; chart EN sub "avg $202/kW·mo", ZH sub 「均价 $202/kW·月」. Totals unchanged. |
| F-02 | MAJOR | Chart binds the full $10B to the 121 MW stack without the prose's multi-site hedge. | Accepted. | Scenario line added to the plate in both languages ("scenario: the full $10B attributed to Tydal, the first project" / 「口径：$10B 全额记于 Tydal（首个项目）」) and appended to both aria labels. |
| F-03 | MAJOR | "NVIDIA and Dell both invest and sell" conflates Dell Inc. (supplier) with Michael Dell's family office (investor). | Accepted — factual precision. | EN: "NVIDIA invests and sells; Dell supplies, while Michael Dell's family office invests." ZH mirrored. Also propagated to the internal desk report (MD + HTML §3/§7). |
| F-04 | MAJOR | EN fig-cap "two leases" miscounts — the compute commitment is not a lease; ZH 两份长约 was correct. | Accepted. | EN fig-cap now "two long-dated contracts". |
| F-05 | MAJOR | "That margin is real this year" overstates realization before first light (2026-12-31). | Accepted. | EN: "contracted, not yet earned — first light is five months out." ZH: 「签在合同上，还没落进账里——点亮在五个月后」. |
| F-06 | MINOR | ZH register calques: stranded appositive for price/mcap; untranslated "tape"; 「敞着的那条腿」; 「同一条款换个符号」. | Accepted ×3; **rejected ×1** — 「同一条款换个符号」 matches the shipped flywheel-reverse ZH register ("把溢价的符号翻过来"), house-conformant. | 「股价约 $11.5，对应市值约 $2.8B」; 「这个盘面」; 「结构里尚未闭合的，是久期」. Sign-flip phrasing kept. |
| F-07 | MINOR | Needham $22 orphaned in colophons, absent from body; $19→$22 revision missing. | Accepted (add-to-body option). | Market paragraph both languages: "Sell-side moved anyway — Needham took its target to $22 from $19." / 「卖方研究倒是照涨——Needham 把目标价从 $19 提到 $22」. |
| F-08 | MINOR | Chart hardens "133 MW" without ~/gross while prose hedges. | Accepted. | Chart C-box now "121 MW IT / ~133 MW gross" / 「约 133 MW 毛容量」. |

## Codex-confirmed Clean

- Base arithmetic recomputes: $13.774M in, $2.424M out, $11.350M spread, $1.373B aggregate; rounding consistent across EN/ZH/chart. $30–40M × 121 MW → $3.63–4.84B ≈ $4–5B; 2–2.5× follows; LC 1.3/4.7 = 27.66% ≈ 28%.
- EN/ZH number/date/entity parity outside the fixed items (re-verified post-fix by 46-token grep: zero drift).
- Anthropic consistently reported-unconfirmed in prose, chart, colophons. Multi-site $10B hedge present in both editions; no position language.
- Metadata paths, lang tags, numerals (V/五), folios, index entries (first, 2026-08-09, COMPUTE), internal links to power-constrained-compute, colophons — all correct; no gating added to public notes.
- Chart is a static server component; a11y (role, aria-label, title) sound; TS + targeted ESLint pass.

## Follow-up

- None blocking. Escalator-adjusted spread-curve (year-by-year rather than flat averages) noted as possible future refinement if the note graduates into a tracked framework.
