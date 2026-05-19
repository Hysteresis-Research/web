# Audit Record · LP Section Navigation

| Field | Value |
|---|---|
| **Date** | 2026-05-19 |
| **Auditor** | codex-reviewer delegate (claude-sonnet-4-6) + OpenAI codex CLI (high effort) |
| **Verdict** | **FIX-THEN-SHIP** |
| **CRITICAL findings** | 0 |
| **HIGH findings** | 1 (GatedAnalytics LP telemetry gap — pre-existing; diff exposes it) |
| **MEDIUM findings** | 1 (layout rendering order — assessed, downgraded from codex MAJOR) |
| **LOW findings** | 1 (ZH font-size override) |
| **NIT findings** | 1 (robots.ts allow-all rule) |

---

## 1. Target

**Repo:** `/Users/moonman/Desktop/web` (hysres/web — hysteresisresearch.com)
**Branch:** `main`
**State:** uncommitted diff — 4 new/modified files

**Files reviewed:**
- `src/app/components/LpNav.tsx` — NEW (4 changed)
- `src/app/lp/layout.tsx` — NEW
- `src/app/zh/lp/layout.tsx` — NEW
- `src/app/globals.css` — MODIFIED (+22 lines)

**Collaborators read (unchanged):**
- `src/proxy.ts`, `src/lib/gate.ts`, `src/lib/env.ts`
- `src/app/layout.tsx`, `src/app/components/Nav.tsx`
- `src/app/components/GatedAnalytics.tsx`
- `src/app/sitemap.ts`, `src/app/robots.ts`
- `src/app/lp/page.tsx`, `src/app/lp/firm/page.tsx`, `src/app/lp/strategies/page.tsx`, `src/app/lp/terms/page.tsx`
- `src/app/zh/lp/page.tsx`, `src/app/zh/lp/firm/page.tsx`, `src/app/zh/lp/strategies/page.tsx`, `src/app/zh/lp/terms/page.tsx`
- `tsconfig.json`
- `docs/zh-style-guide.md`

**Commit context:** HEAD = f4adbe6 "site: legal pages, thesis note, gated lp-intro, lp v1.1 reconcile"

---

## 2. Scope

**In scope:** gating regression, disclosure/telemetry leak, i18n correctness, active-state logic, a11y landmark hygiene, RSC boundary, CSS register, key collision, routing correctness.

**Not in scope:** visual/brand pixel review (requires browser render), performance, SEO beyond noindex/sitemap check, zh prose quality of page content (not changed in diff).

---

## 3. Findings

### FINDING-1 · HIGH · GatedAnalytics does not suppress /lp/* telemetry

**Severity:** HIGH (pre-existing gap, exposed/worsened by this diff adding new LP pageviews)
**File:line:** `src/app/components/GatedAnalytics.tsx:10`

**Evidence:**
```
const GATED = /^\/(zh\/)?(desk|deck|signin)(\/|$)/;
```
The regex covers `desk`, `deck`, `signin` but NOT `lp`. Every pageview on `/lp`, `/lp/firm`, `/lp/strategies`, `/lp/terms` (and ZH mirrors) is sent unfiltered to Vercel Analytics and SpeedInsights. The gating discipline is explicit in the file's own comment: "Drop telemetry for gated routes at the SINK." LP routes are gated routes.

**Impact:** Vercel Analytics receives page-path strings for all LP routes. Vercel dashboards are readable by any project collaborator with Vercel access. The page paths themselves (e.g. `/lp/firm`) leak the existence of the LP section structure even to someone with no access to the site. This is a disclosure gap against the noindex + out-of-sitemap + out-of-public-nav discipline.

Note: this is a pre-existing bug that the diff makes worse by creating more LP pageviews (previously only `/lp` had a working nav; now all 4 routes are actively navigated). Codex correctly identified it.

**Fix:**
```
const GATED = /^\/(zh\/)?(desk|deck|lp|signin)(\/|$)/;
```
Add `lp` to the alternation. Verify both `Analytics` and `SpeedInsights` `beforeSend` callbacks share this constant (they do, both use `isGated`).

**Verify:** Navigate to `/lp/firm` while logged in, check Vercel Analytics dashboard — event should not appear. Navigate to `/firm` (public) — should appear.

---

### FINDING-2 · MEDIUM · Layout rendering order and unguarded LpNav

**Severity:** MEDIUM (not a bypass of requireViewer content gate, but LpNav may render before page redirect in certain streaming scenarios)
**File:line:** `src/app/lp/layout.tsx:10`, `src/app/zh/lp/layout.tsx:10`

**Evidence and assessment:**

Codex flagged this as MAJOR: "For signed-in but unallowlisted users who pass proxy cookie prefilter, the LP layout/nav can exist before the page-level `requireViewer()` redirects."

This reviewer's independent assessment: the threat model is narrower than codex implies, but not zero.

In Next.js App Router with RSC streaming:
- `proxy.ts` blocks unauthenticated users (no cookie) at the edge — they never reach the layout.
- For authenticated but un-allowlisted users (cookie present, email not in LP_ALLOWLIST), `proxy.ts` passes them through (proxy.ts line 23-29 only checks cookie presence, not allowlist).
- Next.js then renders the layout+page tree server-side. With `force-dynamic` on all pages, there is no static caching.
- The RSC renderer processes the layout first (LpNav) then the page (requireViewer fires, redirect() throws).
- With RSC streaming, there is a non-zero window where LpNav's render token stream could be flushed to the client before the redirect interrupt propagates. In practice, Next 14/15 with `redirect()` from `next/navigation` converts this to a 307 before any HTML is sent, because `redirect()` throws a special `NEXT_REDIRECT` error that is caught at the top of the render pipeline.
- However, the LpNav itself is a `'use client'` component whose JS bundle (including the SECTIONS array with route slugs `/firm`, `/strategies`, `/terms`) is sent to the client as part of the page's JS bundle regardless of whether it renders — this is a fundamental RSC/bundling property.

**Concrete risk:** The SECTIONS array `['/firm', '/strategies', '/terms']` is included in the client JS bundle for any page that uses this layout. An un-allowlisted user who somehow reaches the page (or inspects the JS chunks) could discover these route strings. This is a low-severity disclosure of path strings (not content), but it contradicts the "deliberately not discoverable" posture of the LP section.

**Codex's suggested fix:** Add `requireViewer('/lp')` / `requireViewer('/zh/lp')` as the first statement in each layout (making them async server components). This is the correct fix and adds defense-in-depth at the layout level.

**Fix:**
```tsx
// src/app/lp/layout.tsx
import { requireViewer } from '@/lib/gate';
import LpNav from '@/app/components/LpNav';

export default async function LpLayout({ children }: { children: React.ReactNode }) {
  await requireViewer('/lp');
  return (
    <>
      <LpNav />
      {children}
    </>
  );
}
```
Same pattern for `zh/lp/layout.tsx` with `requireViewer('/zh/lp')`.

**Verify:** With a signed-in but un-allowlisted Google account, request `/lp/firm`. Should redirect to `/signin?from=%2Flp%2Ffirm&denied=1` without rendering LpNav. Currently: may render LpNav before redirect in streaming; page content is still gated.

---

### FINDING-3 · LOW · ZH font-size override conflict in .lp-rail

**Severity:** LOW (visual regression only)
**File:line:** `src/app/globals.css:78` vs `src/app/globals.css:113`

**Evidence:**
```css
/* line 78 */
.site-nav.is-zh { font-size: 1rem; ... }

/* line 113 */
.lp-rail { font-size: 0.72rem; ... }
.lp-rail .site-nav.is-zh { text-transform: none; }  /* line 117 */
```

The `text-transform: none` override on line 117 correctly neutralizes the uppercase (specificity: `.lp-rail .site-nav.is-zh` beats `.lp-rail` — correct). However, there is no `font-size` override in `.lp-rail .site-nav.is-zh`, so `.site-nav.is-zh { font-size: 1rem }` wins over `.lp-rail { font-size: 0.72rem }` for ZH LP nav items. The ZH rail renders at 1rem (17px effective) rather than the intended 0.72rem.

Codex confirmed this. It is a visual inconsistency: EN LP rail = 0.72rem, ZH LP rail = 1rem.

**Fix:**
```css
.lp-rail .site-nav.is-zh { text-transform: none; font-size: inherit; }
```
`inherit` pulls 0.72rem from `.lp-rail`. Alternatively, use an explicit `font-size: 0.72rem` if the value should be independent of the parent.

Mobile breakpoint is consistent: `.lp-rail { font-size: 0.62rem }` at ≤640px but `.site-nav.is-zh` still overrides it without the fix.

**Verify:** On `/zh/lp` in a ZH-locale session, inspect `.site-nav.is-zh` computed font-size — should match EN counterpart at 0.72rem.

---

### FINDING-4 · NIT · robots.ts allows all user agents including all LP paths

**Severity:** NIT (pre-existing; diff does not change robots.ts)
**File:line:** `src/app/robots.ts:8`

**Evidence:**
```
rules: [{ userAgent: '*', allow: '/' }, ...]
```
There is no `disallow: ['/lp', '/zh/lp', '/deck', '/desk']` rule. LP pages rely entirely on per-page `robots: { index: false }` metadata and absence from sitemap for crawler exclusion. The `allow: '/'` rule permits crawlers to attempt these paths. The per-page noindex metadata is the correct and sufficient mechanism for SEO exclusion, but a belt-and-suspenders `Disallow: /lp` in robots would also block the crawl attempt entirely.

This is not introduced by the diff. Not a blocker. Noted for completeness.

---

## 4. Axes reaching PASS

| Axis | Verdict | Notes |
|---|---|---|
| (A) Gating — requireViewer fires | PASS (content) / see F-2 (LpNav) | Page content fully gated via requireViewer on all 8 pages. Layout adds defense-in-depth gap only. |
| (A) Gating — sitemap | PASS | sitemap.ts explicitly omits /lp/* per comment. Diff adds no entries. |
| (A) Gating — layout metadata | PASS | lp/layout.tsx and zh/lp/layout.tsx export no metadata. |
| (A) Gating — noindex | PASS | Per-page `robots: {index:false}` metadata on all 8 LP pages is not overridden by layouts. |
| (B) i18n — /zh/lp prefix collision | PASS | No route `/zh/lp-something` exists in app tree. Only `/zh/lp`, `/zh/lp/firm`, `/zh/lp/strategies`, `/zh/lp/terms`. |
| (B) i18n — all 8 hrefs valid | PASS | Verified against directory tree: all routes exist. |
| (B) i18n — ZH label vocabulary | PASS | 引言/公司/策略/条款 match the existing ZH page h1 headings and zh-style-guide conventions. 引言 (introduction) is correctly distinct from 介绍 (generic intro). 条款 (terms/clauses) correct for legal/commercial terms. 策略 (strategies) matches /zh/lp/strategies page topic. |
| (B) i18n — section order | PASS | introduction → firm → strategies → terms matches the narrative in /lp page prose (§4 links firm/terms, §5 links strategies). |
| (C) Active-state — exact match | PASS | No LP sub-routes deeper than /lp/firm etc. exist. Exact match is correct and complete. |
| (D) A11y — duplicate nav landmark | PASS | aria-label="Site" (Nav.tsx:70) vs aria-label="LP section" / "LP 栏目" (LpNav.tsx:26). Distinct names; no duplicate-landmark WCAG violation. |
| (D) A11y — aria-current | PASS | aria-current="page" on exact-match active link is the correct value per ARIA spec. |
| (D) A11y — aria-hidden separators | PASS | nav-sep spans carry aria-hidden="true" — consistent with Nav.tsx:73. |
| (D) A11y — focus order | PASS | LpNav renders before {children}/<main>. Tab order: Site nav -> LpNav -> main content. Acceptable for a section-contents strip. |
| (E) RSC boundary | PASS | Server layout importing 'use client' child is explicitly supported in Next App Router. Server component can render client component as a leaf. |
| (E) Path alias | PASS | tsconfig.json paths: "@/*": ["./src/*"]. Import '@/app/components/LpNav' resolves to src/app/components/LpNav.tsx. Correct. |
| (E) Pattern parity with Nav.tsx | PASS | LpNav follows the same Fragment + nav-sep + is-active + aria-current pattern as Nav.tsx. Divergence: LpNav wraps nav in .lp-rail wrapper div rather than applying the class directly to nav — intentional, per CSS structure. |
| (F) CSS — no literal colors | PASS | .lp-rail uses only var(--rule-soft), var(--mono). No hex/rgb literals. |
| (F) CSS — text-transform override | PASS (specificity) | .lp-rail .site-nav.is-zh { text-transform: none } has specificity (0,2,0) > .lp-rail { text-transform: uppercase } (0,1,0). Override fires correctly. |
| (F) CSS — flex layout stacking | PASS | body{flex-column}: header.rail -> .lp-rail (from layout) -> main{flex:1} -> footer{margin-top:auto}. The .lp-rail adds a second horizontal strip below the site header. Visual register: quiet, monospace, centered, 0.72rem — appropriate for a contents line. footer{margin-top:auto} still works with flex:1 on main. |
| (F) CSS — mobile breakpoint | PASS | @media(max-width:640px): .lp-rail gets padding and font-size adjustments mirroring .rail. |
| (G) key collision | PASS | slug='' → key='root'. Only one SECTIONS entry has slug='', so no collision. |
| (G) usePathname() || '/lp' | PASS (with note) | usePathname() in App Router client components returns null only during server-side render of the client component shell, before hydration. The '|| /lp' fallback is safe: it would only momentarily show the introduction as active before hydration, which is acceptable. However it also means ZH pages get a brief EN-base flash — benign, sub-frame. |
| (G) Identical ZH/EN layouts | PASS | The two layouts are functionally identical by design: LpNav handles locale detection internally via pathname. Having two separate layout files is required by the route segment model (src/app/lp/ and src/app/zh/lp/ are separate segments). |

---

## 5. Impact

- **F-1:** Vercel Analytics telemetry from LP pages (path strings) reaches Vercel dashboard without filtering. Moderate disclosure risk given the "deliberately not discoverable" posture.
- **F-2:** Un-allowlisted authenticated users could potentially see LpNav section structure in streaming output or JS bundle before redirect. Low risk given proxy pre-filter and requireViewer catch, but violates defense-in-depth.
- **F-3:** ZH LP rail displays at 1rem instead of intended 0.72rem. Visual-only; no functional regression.
- **F-4:** No disallow in robots for /lp. Pre-existing; per-page noindex is sufficient for SEO.

---

## 6. Fix Summary

| Finding | File | Change |
|---|---|---|
| F-1 (HIGH) | `src/app/components/GatedAnalytics.tsx:10` | Add `lp` to GATED regex: `/(desk\|deck\|lp\|signin)/` |
| F-2 (MEDIUM) | `src/app/lp/layout.tsx`, `src/app/zh/lp/layout.tsx` | Make layouts async, call `await requireViewer('/lp')` / `await requireViewer('/zh/lp')` before rendering LpNav |
| F-3 (LOW) | `src/app/globals.css:117` | Add `font-size: inherit` to `.lp-rail .site-nav.is-zh` rule |

F-4 is a pre-existing nit; no fix required for ship.

---

## 7. Verify

- **F-1:** After fix, navigate to `/lp/firm` as allowlisted user. Check Vercel Analytics — event should be absent. Navigate to `/firm` — should appear.
- **F-2:** After fix, with allowlist-excluded Google account (cookie present), request `/lp/firm` directly. Expect 307 redirect to `/signin?from=...&denied=1`. No LpNav markup in response body.
- **F-3:** After fix, on `/zh/lp`, inspect `.site-nav.is-zh` computed font-size via DevTools — should be 0.72rem (not 1rem).

---

## 8. Tests Missing / That Would Have Caught These

- **F-1:** A test that iterates all `GATED` prefixes from `proxy.ts` / `gate.ts` and asserts each is present in `GatedAnalytics.GATED` regex — would have caught the LP omission.
- **F-2:** An integration test (e.g. Playwright) that logs in with a non-allowlisted account and asserts `/lp/*` returns a redirect, not layout content.
- **F-3:** A visual regression test (Chromatic / Playwright screenshot) for the ZH LP nav strip comparing computed font-size.

---

## 9. Open Issues

- `robots.ts` allows all crawlers to `/lp/*`. Per-page noindex is the current mitigation. A `Disallow: /lp` rule would add belt-and-suspenders. Not a blocker for this diff.
- `usePathname() || '/lp'` produces a brief EN-base flash on ZH routes during hydration. Acceptable currently; could be fixed with a layout-level locale hint if the flash becomes visible.

---

## 10. Follow-up

1. Fix F-1 (GatedAnalytics regex) and F-2 (layout requireViewer) together — they are the same class of defense-in-depth gap.
2. Fix F-3 (font-size) in same commit.
3. Re-run this audit template on any future layout additions to /desk or /deck.
4. Consider adding a CI lint rule: any new file in `src/app/(lp|desk|deck)/**/layout.tsx` must contain `requireViewer`.

---

## 11. codex Meta

- Model: codex default (ChatGPT-account auth; did not specify --model)
- Reasoning effort: `high` via `-c model_reasoning_effort=high`
- Sandbox: `disk-full-read-access`
- Output: `/tmp/codex_lpnav_output.txt`
- Files fed: diff at `/tmp/hysres_lpnav.diff` + 14 source files via inline read prompt
- Reviewer pushback: codex Finding 2 ("MAJOR") downgraded to MEDIUM after independent analysis of Next.js App Router redirect() semantics with force-dynamic pages — the content gate is not bypassed, but the bundle disclosure and streaming race are real concerns at MEDIUM severity.

---

## 12. Verdict

**FIX-THEN-SHIP**

0 CRITICAL. 1 HIGH (GatedAnalytics LP telemetry gap). 1 MEDIUM (layout requireViewer defense-in-depth). 1 LOW (ZH font-size). All three fixable in one short commit. The diff does not introduce a content disclosure regression — `requireViewer` on every page still gates content — but the analytics gap and layout gap together contradict the project's explicit "deliberately not discoverable" discipline for LP routes.

---

## 13. Resolution (2026-05-19, post-audit, same session)

All three actionable findings fixed (F-4 deferred — see below). Fixes derived from independent re-read of each cited file, not blind patching; residue was fully enumerable in one pass (verdict was FIX-THEN-SHIP, not NO-PASS), so a bounded fix + single re-gate is appropriate.

| Finding | Status | Applied change | Evidence |
|---|---|---|---|
| F-1 HIGH | FIXED | `GatedAnalytics.tsx:10` regex now `/^\/(zh\/)?(desk\|deck\|lp\|signin)(\/\|$)/` | Both `Analytics` + `SpeedInsights` `beforeSend` share `isGated` → LP + ZH-LP pageviews now dropped at sink |
| F-2 MEDIUM | FIXED | `lp/layout.tsx` + `zh/lp/layout.tsx` are now `async`, call `await requireViewer('/lp')` / `await requireViewer('/zh/lp')` before rendering `<LpNav/>` | `getSession` is `cache()`-wrapped (gate.ts:10) → no double `auth()` cost vs page-level call |
| F-3 LOW | FIXED | `globals.css` `.lp-rail .site-nav.is-zh { text-transform: none; font-size: inherit; }` | Specificity (0,2,1) > `.site-nav.is-zh` (0,2,0); `inherit` pulls 0.72rem desktop / 0.62rem mobile from `.lp-rail` → EN/ZH strip parity |
| F-4 NIT | DEFERRED | `robots.ts` `Disallow: /lp` not added | Pre-existing, outside this diff's scope; per-page `robots:{index:false}` on all 8 LP pages is the sufficient mechanism. Surfaced to user as an optional follow-up, not silently expanded into this change. |

**Post-fix verification:**
- `npm run build` (clean `.next/dev/types`): ✓ Compiled successfully, exit 0; all 8 LP routes (`/lp{,/firm,/strategies,/terms}` + `/zh` mirrors) compile dynamic `ƒ` (async layouts compile clean).
- HTTP probe against live dev server: `/ /approach /firm /signin` → 200 (no public regression); all `/lp/* /zh/lp/*` → 307 → `/signin?from=…` (gate fires; now enforced at proxy + layout + page).
- Visual render of LpNav itself NOT verified — every LP route 307s without a Google session (documented hard constraint); requires an allowlisted browser round-trip by the principal.

**Not committed, not deployed.** Awaiting explicit go-ahead per project rule. Note F-1 is a *pre-existing production leak* affecting LP routes live since 2026-05-18 independent of this diff — its fix has standalone urgency.
