# 2026-08-16 Power-Tenor Note Audit ("Power, priced by tenor")

| Field | Value |
| --- | --- |
| Date (UTC) | 2026-08-16 |
| Branch / PR | `notes/power-priced-by-tenor` off `origin/main` 949da7b; pre-audit commit 59e7336, fixes in the follow-up commit (see PR) |
| Target | `src/app/notes/power-priced-by-tenor/page.tsx` (EN) + `src/app/zh/notes/power-priced-by-tenor/page.tsx` (ZH) + `src/app/components/charts/PowerTenorChart.tsx` + `src/app/components/charts/ChartFrame.tsx` (watermark) + EN/ZH notes index entries |
| Files reviewed | The six changed files; house references `src/app/notes/compute-underwritten/page.tsx` + ZH mirror, `VoltaDealStack.tsx`, `docs/zh-style-guide.md`, `audits/2026-08-09-volta-note.md` |
| Reviewer | Codex hostile cross-model audit (codex-cli 0.144.1, ChatGPT-account auth, gpt-5.5, `model_reasoning_effort=xhigh`, `--sandbox read-only`), adjudicated by Claude |
| Diff size | pre-audit +675 (6 files); post-fix delta +89 / −75 (4 files) |
| Scope | Arithmetic recompute ($/MWh, $/kW-month, ×-ratios, month count, log-axis coordinates); claims discipline (announced vs reported vs estimated; GPU-supply attribution; no position language); EN/ZH parity + ZH native register per style guide; chart a11y / overflow under the `.fig-plate text` CSS override / watermark corner / both editions; metadata, numerals, folios, index, internal links; ChartFrame change safety for all existing plates. Out of scope: the internal bilingual report under `research/power2026/` (separate repo) and the X post text. |
| Snapshot anchor | Public sources as of 2026-08-16: TeraWulf announcement 2026-07-06 ($19B / 20y / ~401 MW / H2-2027→early-2028 / IG credit support expected; silent on GPU supply); SpaceX–Reflection as reported 2026-06-22 (Bloomberg/CNBC/Axios: $150M/mo from 2026-07-01 through 2029, up to $6.3B, GB300 at Colossus 2, 90-day out after 3 months; MW allocation not public); Bitdeer 2026-08-04 (Volta Tydal avg ~$202/kW-mo); Neel Somani, *Power 2026* (power2026.ai) for wholesale range, ≈$5,000 estimate, plant/financing/turbine/Homer City/DC-share figures. No server data involved. |
| Tokens | Single xhigh `codex exec` call, 171,101 tokens, ~17 min wall. |
| Build | `npm run build` green before and after fixes (both routes ƒ-dynamic); targeted ESLint clean. |

Verdict: **NO-SHIP as delivered** (1 CRITICAL, 4 MAJOR, 2 MINOR) → all seven findings accepted and resolved; **ship after fixes**.

## Findings Table

| ID | Severity | Finding | Adjudication | Resolution |
| --- | --- | --- | --- | --- |
| F-01 | CRITICAL | The "tenor curve" is not identified: the plate/prose compare energy-only spot, powered-campus leases and GPU-inclusive compute, admit most of the gap is silicon, yet conclude a term structure / financing causation for one product; the unpublished SpaceX MW allocation prevents any decomposition. | **Accepted (reframe, not retitle).** The defensible claim is narrower: tenor is the *condition* under which a megawatt gets financed and built at cost-plus (Homer City, SOFR+225, lender tenor requirement) versus rented at scarcity — not a coefficient on one curve for one product. Title kept because that is exactly the sense the body now states explicitly. | Standfirst, para 2, para 3, para 4, links para, close, metadata description rewritten in EN and ZH: "two products, two tenors"; explicit "the two prints do not draw one curve for one product"; "That is the sense in which tenor prices power: not as a coefficient on one curve, but as the condition under which a megawatt gets financed…"; "the premium for short tenor" replaces "the tenor curve"; close "Two products, one dividing variable." Chart title → "Two products, two tenors — …"; fig label → "Two products, two tenors"; aria labels carry the "two ends of the market rather than one curve" caveat. |
| F-02 | MAJOR | Chronology + evidentiary status: 2026-06-22 → 2026-07-06 is 14 days, not "a month" (standfirst) or "three weeks" (lede); the source supports "reported", not "SpaceX had signed". | Accepted. | "Two contracts, two weeks apart" / 「相隔两周」; lede "Two weeks earlier, on 2026-06-22, Bloomberg, CNBC and Axios had reported…" / 「两周之前，6 月 22 日，彭博、CNBC 与 Axios 报道了…」; "SpaceX, as reported, sells…"; chart `spx3` → "reported terms · $150M / mo · to 2029" / 「据报条款 · …」; aria labels + fig caption say "as reported". |
| F-03 | MAJOR | "The tenant brings the GPUs" / 「租户自带 GPU」 asserted as fact in prose and chart; the TeraWulf release is silent. | Accepted. | Prose: "on Somani's reading the tenant brings the GPUs, though the announcement itself is silent on who supplies them" / 「按 Somani 的读法，GPU 由租户自带，公告本身对谁出 GPU 没有说」; chart `wulf2` → "… · powered campus" / 「… · 带电园区」; colophon notes the announcement does not state who supplies the GPUs. |
| F-04 | MAJOR | "Two to five times" wholesale does not follow from $270–277 vs the cited $10–150 range (endpoint ratios 1.8–27.7×). | Accepted. | Marginnote now prints the ranges without a multiplier: "$10–150 … ≈$270–277 … an order of magnitude above" / 「$10–150；… $270–277 上下；… 再高一个数量级」. |
| F-05 | MAJOR | Watermark fix incomplete: CSS also overrides `fontSize={7}` to 11px, so with the declared fallbacks the wordmark still clips past x=600. | Accepted. | `ChartFrame.tsx` watermark text now `style={{ letterSpacing: '0.18em', fontSize: 7 }}`; render-checked: computed 7px, bbox ≈ x 462–568 (< 600) on the new plate; the shipped Volta plate ("HYSTERESIS RESEA" clipped before) is fixed by the same change. |
| F-06 | MINOR | ZH stranded appositive + EN-order run-on 「Neel Somani，前……，他……；按他……」 violates the native-register rule (style guide §4). | Accepted. | Split into three sentences: 「Neel Somani 曾任对冲基金的电力量化研究员。他免费发布的入门书《Power 2026》是这篇札记的由头。按他自己的粗算，……」 |
| F-07 | MINOR | 「重定价」 conflicts with the glossary's `repricing` forms (§A: 资产重估 / 风险重新计价). | Accepted. | Marginnote → 「政策改价比物理快」; body → 「让这个板块重估的速度，快过任何一台涡轮机的交付」. |

## Codex-confirmed Clean

- Arithmetic: $19B ÷ (20 × 401 MW × 8,760 h) = $270.44/MWh; $19B ÷ (240 mo × 401,000 kW) = $197.42/kW-month; $202 ÷ 730 × 1,000 = $276.71/MWh; SpaceX ÷ TeraWulf 18.49×, ÷ Volta 18.07× ("about eighteen-fold" tolerable given estimated inputs); $6.3B ÷ $150M = 42 months = July 2026 → December 2029 inclusive.
- Log-axis positions correct (x ticks 104.09 / 299.97 / 360.91 / 430.97 / 491.31 for 1 d / 90 d / 1 yr / 5 yr / 20 yr); SPX, Volta, WULF, ERCOT plot at declared values.
- EN/ZH numbers, hedges and the three "what would narrow it" items match; 「今年 7 月 6 日」 acceptable with the dated folio/colophon.
- Metadata langs/paths, numerals (V/五), folios, first-position index entries dated 2026-08-16 tag COMPUTE, internal EN/ZH routes, "not a position", CSS-variable colours, SVG role/title/aria, hollow estimate marker, reserved watermark corner — all correct.

## Verification after fixes

- `npm run build` → green (Compiled successfully; TypeScript finished; both routes ƒ). Targeted `npx eslint` on the four touched TSX files → clean.
- Browser measurement (getBBox on every `.chart-svg text`): no element outside 0–600 in the viewBox; watermark computed font-size 7px.
- Headless-Chrome renders of `/notes/power-priced-by-tenor` and `/zh/notes/power-priced-by-tenor` inspected: labels legible, no collisions, watermark complete in both editions.

## Open issues / follow-up

- None blocking. If a same-product short-vs-long-tenor pair ever becomes public (e.g. a short-tenor powered-shell quote), the "two products" framing can be tightened into an actual term-structure claim — noted as a future refinement, not a defect.
