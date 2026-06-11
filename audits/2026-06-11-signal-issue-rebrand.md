# Audit Record: "The Signal Issue" Rebrand

## 1. Date
2026-06-11

## 2. Target
Branch `claude/rebrand-signal-issue` (uncommitted working tree) vs `main`.
Repo: `/Users/moonman/Desktop/web` (hysres/web).

## 3. Scope
51 files, 4111 insertions / 2987 deletions.
Four codex batches (xhigh effort, gpt-5.5) + direct file reads:
- Batch 1: globals.css, layout, charts, ThemeToggle
- Batch 2: legal pages EN+ZH (public terms/privacy) + LP/terms
- Batch 3: gate/auth — signin, /lp/*, /desk, /desk/lp-introduction (EN+ZH)
- Batch 4: EN+ZH public pages + all notes

Direct reads: firm/page.tsx, zh/firm/page.tsx, page.tsx, zh/page.tsx, desk/lp-introduction/page.tsx, globals.css token definitions.

## 4. Findings

### CRITICAL — None found.

### HIGH — None found (see §10 for one codex false-positive on contrast).

### MEDIUM

**M1** — `src/app/page.tsx:119–128` — `.facts li` screen-reader concatenation.
`<b>FORM</b>A PRACTICE OF ONE PRINCIPAL` collapses to "FORMA PRACTICE" in AT. The `&#32;` whitespace is present between `</b>` and text (`<b>EST.</b>&#32;MMXXVI` etc.) per direct read at lines 121–129 — **BUT** verify with screen-reader test since AT handling of `&#32;` vs literal space inside flex context varies.
Severity: MEDIUM. Fix: confirm `&#32;` is retained between every `</b>` and the value; if not, add it.

**M2** — `src/app/page.tsx` §III mandate prose — "global macro and crypto derivatives" as closed enumeration inside the mandate aside.
Not a hero-sentence violation (it is in a `mandate-aside dl/dd`, not the cover deck). However codex correctly flags it as a pigeonhole risk for allocators skimming. Editorial judgment, not a blocker.

**M3** — `src/app/globals.css:11` — Unescaped `&` in Google Fonts `@import url(...)`.
`&` in a CSS `url()` string is valid CSS; HTML-encoded `&amp;` is NOT needed here. False positive from codex treating it as an HTML attribute. No action required.

### LOW

**L1** — `src/app/layout.tsx` — `<span class="clock" id="clock">` inside `<nav>`.
Semantic oddity; non-interactive phrasing content in nav is legal HTML5. No functional impact.

**L2** — Tall desktop (≥1600px tall viewport) — intentional dead zone above cover kicker.
Design decision, not a bug.

### NOT A FINDING (codex false-positives, push back applied)

**FP1 — ink-40 contrast (codex cited HIGH at lines 368, 605, 704, 726).**
Codex reconstructed internal line numbers from diff hunks and landed on `.section-head .folio`, `.mandate-aside dt`, `.colophon .label`, `.imprint span`. Direct read of the live file shows ALL of these use `color:var(--ink-60)` (0.62/0.66 alpha), not `--ink-40`. Actual contrast: ~5.1:1 light, ~4.7:1 dark — both PASS AA. `--ink-40` in the live file appears only on a decorative `border-bottom:1px dotted` (line 385, non-text). Finding rejected.

## 5. Evidence

### Truth / No-fabrication
- EN public pages: no AUM, no performance figures, no Sharpe/IRR/track-record presented as real. `page.tsx` explicitly states: "No performance figures are shown here, by design. No invented certainty, no borrowed logos, no numbers that cannot be defended."
- Notes pages: Sharpe figures (1.34, 1.80, 1.87, 2.25) are all cited inside research studies with explicit N= and "not a forecast" caveats. Legitimate.
- ZH public pages: same — no fabricated claims found.
- Gated LP pages: no AUM targets, no return projections; all financial terms are `[PENDING]`; `desk/lp-introduction` explicitly says "no performance representation" in its notice.

### Legal text integrity
- `src/app/terms/page.tsx`: diff removes only `import BHMark`, `<style>{css}`, `<div class="lgl-mark">`. Body content byte-identical.
- `src/app/privacy/page.tsx`: same pattern — chrome removal only.
- `src/app/zh/terms/page.tsx`, `src/app/zh/privacy/page.tsx`: same pattern.
- `src/app/lp/terms/page.tsx`, `src/app/zh/lp/terms/page.tsx`: all §1–§13 substantive clauses present and unchanged; markup wrapped in `Reveal` components but text content preserved word-for-word. Disclaimer paragraph ("not investment advice, not an offer…") present and unchanged.

### Gate / Auth
All gates verified by direct grep on live files:
| Route | requireViewer | force-dynamic | robots noindex |
|-------|--------------|---------------|----------------|
| /lp | ✓ line 29 | ✓ line 26 | ✓ line 19–22 |
| /lp/firm | ✓ line 26 | ✓ line 23 | ✓ line 15–18 |
| /lp/strategies | ✓ line 33 | ✓ line 30 | ✓ line 22–25 |
| /lp/terms | ✓ line 34 | ✓ line 31 | ✓ line 23–26 |
| /desk | ✓ line 31 | ✓ line 28 | ✓ line 21–24 |
| /desk/lp-introduction | ✓ line 57 | ✓ line 27 | ✓ line 20–23 |
| /zh/lp | ✓ line 27 | ✓ line 24 | ✓ line 16–19 |
| /zh/lp/firm | ✓ line 26 | ✓ line 23 | ✓ line 15–18 |
| /zh/lp/strategies | ✓ line 32 | ✓ line 29 | ✓ line 21–24 |
| /zh/lp/terms | ✓ line 32 | ✓ line 29 | ✓ line 21–24 |
| /zh/desk | ✓ line 30 | ✓ line 27 | ✓ line 19–22 |

`signInWithGoogle` server action present in both `src/app/signin/page.tsx` and `src/app/zh/signin/page.tsx`. `safeRelativePath` redirect guard present. Signin form `action={signInWithGoogle}` preserved.

### Positioning
- EN: "A research-driven quantitative trading firm" — homepage cover deck (line 113), firm/page.tsx (line 26), Ticker items. Never "research firm" alone.
- ZH: "研究驱动的量化交易公司" — zh/page.tsx (line 94), zh/page.tsx metadata (line 11). Never "研究公司" alone.
- Asset list NOT in hero. "global macro and crypto derivatives" only appears: (a) inside notes' standard compliance boilerplate (marginnote/lede), (b) inside gated LP/desk pages, (c) inside §III mandate aside (non-hero). Acceptable.

### Mandate anchor
- `src/app/page.tsx`: `id="mandate"` at line 309; ToC `href="#mandate"` at line 168. Valid.
- `src/app/zh/page.tsx`: `id="mandate"` at line 266; ToC `href="#mandate"` at line 144. Valid.
- `src/app/firm/page.tsx`: `id="mandate"` at line 54. Valid.
- `src/app/zh/firm/page.tsx`: `id="mandate"` at line 48. Valid.

### BHMark imports
No remaining `import BHMark` outside of `src/app/components/BHMark.tsx` itself and `src/app/components/BrandLink.tsx` (expected — BrandLink uses BHMark by design).

### ThemeToggle
Switched from `useSyncExternalStore` to `useState + useEffect`. Pattern: server-renders `theme-light` class on `<html>` (layout.tsx line 108 with `suppressHydrationWarning`); effect on mount reads actual DOM class. Correct anti-flash pattern. No hydration regression.

### Charts
All token renames: `var(--accent)` → `var(--signal)`, `var(--rule-soft)` → `var(--gridline)`, `var(--rule)` → `var(--hair)`, `var(--mono)` → `var(--grot)`. Legacy aliases `--accent: var(--signal)`, `--rule: var(--hair)`, `--rule-soft: var(--hair-soft)`, `--mono: var(--grot)` remain in `:root` for Stage-2 route compatibility. Charts use the new names — no undefined var references.

### CN-native quality
ZH pages reviewed: ZH homepage, ZH firm, ZH LP suite, ZH notes. Language is trader-register Chinese, not translationese. `lang="zh-Hans"` attribute present on all ZH `<main>` elements. CJK Ticker items use `lang="zh-Hans"` per item. No garbled characters detected.

## 6. Impact
If shipped as-is: no correctness or safety blockers. M1 (facts list AT reading) is the only finding requiring owner verification before ship.

## 7. Fix

- **M1**: Run screen-reader test on `.facts` list to confirm `&#32;` between `<b>` and value is announced with separation. If collapsed: add `&nbsp;` or literal space in JSX between the closing `</b>` tag and the value span.
- **M2**: Editorial judgment — owner decides whether to rephrase §III aside to avoid closed asset enumeration.
- **L1**, **L2**: No fix required.
- **FP1**: No action — codex was wrong, file is clean.

## 8. Verification

- Direct read of globals.css token definitions confirmed `--ink-40` used only on decorative border, not text.
- Direct grep confirmed all 11 gate routes have requireViewer + force-dynamic + robots:noindex.
- Direct read confirmed legal body text unchanged (only chrome removed).
- Mandate anchors confirmed present in all four pages.
- Positioning strings confirmed correct in EN and ZH.

## 9. Tests

- `next build` passes (caller confirmed).
- `tsc --noEmit` clean (caller confirmed).
- Recommend: run VoiceOver / NVDA against `.facts` list on homepage.

## 10. Open Issues

- ZH `lang="zh-Hans"` on inline Ticker spans: correct, but some older AT software reads inline `lang` switches unpredictably. Low-priority.
- `role="marquee"` on Ticker: may cause verbose AT announcement on page load. Consider `aria-live="off"` if LP audiences report noise. Not a blocker.

## 11. Follow-up

None required before deploy. Post-deploy: AT smoke-test on facts list (M1).

## 12. Verdict

**PASS** (with M1 verification recommended before ship)

No CRITICAL. No HIGH. Two MEDIUMs: M1 is a screen-reader verification task (not a code change unless test fails); M2 is editorial. All seven priority dimensions clear:
1. Truth/fabrication: CLEAN — no invented performance, AUM, team bios, logos.
2. Legal text integrity: CLEAN — body word-for-word identical to main; only chrome removed.
3. Gate/auth: CLEAN — all 11 gated routes have full gate stack.
4. Positioning: CLEAN — "research-driven quantitative trading firm" everywhere; no bare "research firm".
5. CN-native: CLEAN — trader-register Chinese, correct lang attributes.
6. Accessibility/contrast: CLEAN — ink-40 is decoration-only; all text tokens ≥AA.
7. Code/link correctness: CLEAN — no dead BHMark imports, mandate anchors exist, chart vars resolve.

---

## Codex meta
- Model: gpt-5.5 (default for ChatGPT-account auth)
- Batches: 4 (design-system; legal; gate/auth; public pages)
- Effort: xhigh
- Files reviewed: 51
- Codex false-positives: 1 (ink-40 contrast — wrong line reconstruction from diff)
