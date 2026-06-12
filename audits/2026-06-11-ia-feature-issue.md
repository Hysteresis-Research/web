# Audit: hysres/web — Feature-Issue IA Change

| Field | Value |
|---|---|
| **Date** | 2026-06-11 (reviewed 2026-06-12) |
| **Target** | `/Users/moonman/Desktop/web`, branch `claude/ia-feature-issue` |
| **Scope** | IA restructuring: homepage owns §I On Method + §III The Mandate; `/firm` reduced to §II The Practice; `/approach` + `/zh/approach` deleted with permanent redirects |
| **Reviewer** | codex-reviewer delegate (gpt-5.5, xhigh effort) + manual adjudication |
| **codex session** | `019eb95e-68b6-7193-9c4b-512ae6f4b280` · 125,166 tokens |
| **Pre-flight** | `next build` + `tsc --noEmit` + `eslint` all PASS (per invoking agent) |

---

## Findings + Severity

### F1 — MEDIUM — ZH homepage ToC uses relative anchors; Masthead + Colophon use absolute anchors

**File:line:** `src/app/zh/page.tsx:126` (`<a href="#method">`) and `:144` (`<a href="#mandate">`)

**What:** The ZH homepage ToC links I and III as `#method` / `#mandate`. The Masthead (`Masthead.tsx:33,35`) and Colophon (`Colophon.tsx:23,25`) both use `/zh#method` / `/zh#mandate` for the same items.

**Assessment:** This is functionally correct — the relative anchors only appear on the `/zh` route itself, so `#method` resolves to `/zh#method` in the browser. The Masthead and Colophon must use absolute anchors because they appear on every page, including `/zh/firm`, `/zh/contact`, etc. This is not a three-nav disagreement by mistake; it is an intentional design split (same-page anchor on the page that owns the sections; absolute anchor everywhere else). The EN homepage is identical in structure (`page.tsx` lines 148, 168 use `#method`, `#mandate` as relative anchors).

**Verdict:** Not a defect. No fix required, but the pattern is worth a comment in the code. Downgraded from MEDIUM to LOW / informational.

---

### F2 — LOW / Informational — EN `page.tsx` renders as binary in the git diff

**File:** `src/app/page.tsx` (diff line: `Binary files a/src/app/page.tsx and b/src/app/page.tsx differ`)

**What:** codex flagged this as HIGH because the binary diff blocked review. The live file was read directly and is valid UTF-8 TSX. All checks were performed against the live file.

**EN homepage confirmed (live file read):**
- `id="method"` present at line 200 (`<section className="article wrap" id="method">`)
- `id="mandate"` present at line 320 (`<section className="article wrap" id="mandate">`)
- All three horizon rungs present (lines 344–350): within three years, within five, within ten — identical substance to old `firm/page.tsx` §4
- No new AUM figure, return target, or fabricated metric introduced
- Founding year "founded in 2026" (line 354) — new addition, not in old firm §4 (which had no date). Same date appears in ZH mandate (`创立于二〇二六年`, `zh/page.tsx:303`). Both editions are consistent with each other and with Colophon + sitemap metadata; founding year is not a performance claim.
- ToC V (Notes) at lines 186–195: structure `num/t/d/leader/folio` matches items I–IV.
- No second copy of On Method found anywhere in changed files.

**Verdict:** codex's HIGH was a tooling artifact (binary diff). After live-file review, EN page passes all checks.

---

### F3 — LOW / Dead code — `Nav.tsx` retains stale `approach` slug; not a live dangling reference

**File:** `src/app/components/Nav.tsx:7,11,12`

**What:** `Nav.tsx` has `const SLUGS = ['approach', 'firm', 'notes', 'contact']` and `LABELS.en.approach = 'approach'`. The component also constructs `/approach` href.

**Assessment:** `Nav.tsx` is NOT imported anywhere in the codebase. `grep -r "from.*'/Nav'" src/` returns no results. The root layout uses `Masthead` + `Colophon`, not `Nav`. This component is dead code inherited from the pre-rebrand era. It will not produce any live link to `/approach`. No user is routing through it.

**Verdict:** Not a correctness defect for this IA change. Recommend cleanup in a follow-up (delete or migrate), but does not block this diff.

---

### F4 — LOW / Informational — `SectionHead.tsx` comment mentions `/approach`

**File:** `src/app/components/SectionHead.tsx:5`

**What:** Comment reads `// shared across /approach, /firm, /contact and /notes`.

**Verdict:** Comment is stale but code is correct. Not a live link. No fix required for this change; update at any time.

---

## Passes Confirmed

| Check | Result |
|---|---|
| **No dangling `/approach` hrefs** | PASS — no live `href` anywhere points to `/approach` or `/zh/approach`. `Nav.tsx` has the slug but is unreferenced. `SectionHead.tsx` has a comment only. |
| **No dangling `/firm#mandate` hrefs** | PASS — grep of `src/` found zero `firm#mandate` or `zh/firm#mandate` link targets. |
| **Redirects correct** | PASS — `permanent: true` emits 308 in Next.js App Router. Hash in destination (`/#method`, `/zh#method`) is valid; Next.js passes the hash through in the `Location` header. No self-redirect. No i18n config present in this repo to conflict. |
| **Masthead EN I–V** | PASS — `Masthead.tsx:25-29`: I `/#method`, II `/firm`, III `/#mandate`, IV `/contact`, V `/notes` |
| **Masthead ZH 一–五** | PASS — `Masthead.tsx:33-37`: 一 `/zh#method`, 二 `/zh/firm`, 三 `/zh#mandate`, 四 `/zh/contact`, 五 `/zh/notes` |
| **Colophon EN I–V** | PASS — `Colophon.tsx:14-18`: matches Masthead exactly |
| **Colophon ZH 一–五** | PASS — `Colophon.tsx:22-26`: matches Masthead exactly |
| **EN homepage ToC I–V** | PASS — I `#method`, II `/firm`, III `#mandate`, IV `/contact`, V `/notes` (relative anchors correct for same-page use) |
| **ZH homepage ToC 一–五** | PASS — same relative-anchor pattern |
| **`id="method"` + `id="mandate"` on EN homepage** | PASS — lines 200, 320 |
| **`id="method"` + `id="mandate"` on ZH homepage** | PASS — lines 174, 275 (`zh/page.tsx`) |
| **Mandate horizon ladder (3yr/5yr/10yr)** | PASS — all three rungs present verbatim in EN (`page.tsx:344-350`) and ZH (`zh/page.tsx:297-302`) |
| **No new AUM/return/metric in mandate** | PASS — `"founded in 2026"` / `"创立于二〇二六年"` is the only new fact; consistent EN↔ZH; not a performance figure |
| **No mandate section left in `/firm`** | PASS — `firm/page.tsx` has only `id="practice"`, no horizon ladder, no `id="mandate"` |
| **No mandate section left in `/zh/firm`** | PASS — same |
| **`/firm` metadata clean** | PASS — description: `'On the practice — one desk, one ledger...'`, no mandate/scale claim |
| **`/zh/firm` metadata clean** | PASS — description: `'论实践——一张桌、一本账...'`, parallel |
| **ToC V structure (num/t/d/leader/folio)** | PASS — EN lines 186-195, ZH lines 162-170, all five spans present |
| **`/approach` removed from sitemap** | PASS — `sitemap.ts:4`: `PAGES = ['', '/firm', '/notes', '/contact']` |
| **ZH routes in sitemap** | PASS — `pair('')` yields `zh: BASE + '/zh'`, correct |
| **"research-driven … trading firm" intact** | PASS — present in cover deck (EN+ZH), Colophon imprint, mandate prose, firm standfirst |
| **"cross-asset majors" (no asset list in lead)** | PASS — mandate uses "cross-asset majors" throughout; no enumeration of specific assets in lead sentence |
| **No second copy of On Method** | PASS — essay exists only in `page.tsx` and `zh/page.tsx`; deleted `/approach/page.tsx` and `/zh/approach/page.tsx` are gone |

---

## Impact Assessment

The IA change is structurally correct. The two codex flags (binary diff, relative anchors) both resolve cleanly on live-file inspection. Dead code in `Nav.tsx` is pre-existing and not introduced by this diff.

---

## Fix Required

None. No CRITICAL or HIGH defects found.

---

## Verify Steps (post-merge)

1. `curl -I https://www.hysteresisresearch.com/approach` — expect `308 Location: /#method`
2. `curl -I https://www.hysteresisresearch.com/zh/approach` — expect `308 Location: /zh#method`
3. Load `/zh` in browser; click nav "三 纲领" — should scroll to `#mandate` on `/zh`
4. Load `/zh/firm`; click colophon "三 · 纲领" — should navigate to `/zh#mandate`
5. Confirm `/approach` not in `sitemap.xml` output at `/sitemap.xml`

---

## Tests

- Build + type-check + lint already passing.
- No unit tests exist for nav link correctness in this repo; manual browser smoke test per Verify Steps above is the appropriate gate.

---

## Open Issues

- `Nav.tsx` is dead code carrying a stale `/approach` slug. Should be deleted or removed in a cleanup PR. Not blocking.
- `SectionHead.tsx:5` comment stale re: `/approach`. Not blocking.

---

## Follow-up

None required before shipping. Clean up `Nav.tsx` at convenience.
