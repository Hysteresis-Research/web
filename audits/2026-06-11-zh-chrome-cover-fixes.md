# Audit: ZH Chrome + Cover Fixes (lang-switch, Notes nav, CN headline)

| Field | Value |
|-------|-------|
| **Date** | 2026-06-11 |
| **Target** | `src/app/components/Masthead.tsx`, `src/app/layout.tsx`, `src/app/globals.css` |
| **Branch** | `claude/zh-chrome-cover-fixes` (diff vs `main`) |
| **Scope** | Language switcher EN⇄ZH, Notes/笔记 nav item, CN nav type bump, CN cover headline fix |
| **Reviewer** | codex-reviewer delegate (codex-cli 0.125.0, model gpt-5.5, effort xhigh) + manual verification |
| **Tokens** | 58,320 |

---

## 1. Findings + Severity

### HIGH — `layout.tsx:103` — `startsWith('/zh')` over-matches `/zheng`, `/zh-foo`

**Evidence.** `layout.tsx:103`:
```ts
const isZh = pathname.startsWith('/zh');
```
`startsWith('/zh')` returns `true` for any path beginning with the two characters `/zh`, including hypothetical routes `/zheng`, `/zh-foo`, `/zh#section`. The stricter guard in `altLocaleHref` uses `^\/zh(?=\/|$)` (lookahead requiring `/` or end-of-string), so the two functions are asymmetric. A path like `/zheng` would be rendered with `lang="zh-Hans"`, `locale='zh'`, Chinese nav labels and ZH masthead — but `altLocaleHref('/zheng', true)` would return `/zheng` unchanged (the regex does not match), producing a self-referential lang switch.

**Current impact.** No `/zheng`-style route exists today (`/zh` is the only top-level `zh*` directory). The bug is latent — it would fire if any future route is named with `/zh` prefix outside the `/zh/` tree, or if a middleware rewrite ever sets `x-pathname` to such a value. Because Next.js 404s still pass through the root layout, a `GET /zheng` (404) renders with Chinese locale — broken UX visible to any user who manually types such a URL.

**Fix (one line).** Replace `pathname.startsWith('/zh')` with a regex:
```ts
const isZh = /^\/zh(\/|$)/.test(pathname);
```

---

### MEDIUM — `Masthead.tsx:118` — Chinese label/aria-label on EN page has no `lang` attribute

**Evidence.** `Masthead.tsx:113–121`:
```tsx
<Link
  className="lang-switch"
  href={altHref}
  hrefLang={zh ? 'en' : 'zh-Hans'}
  aria-label={zh ? 'Switch to English' : '切换到中文'}
>
  {zh ? 'EN' : '中文'}
</Link>
```
On EN pages, the link's visible text (`中文`) and `aria-label` (`切换到中文`) are Chinese, but the `<Link>` element carries no `lang="zh-Hans"` attribute. The page's `html[lang="en"]` context causes assistive technology to attempt pronouncing the Chinese glyphs using English TTS, producing garbled output. `hrefLang` affects HTTP/SEO semantics only — it does not change TTS language selection.

**Fix (one line).** Add `lang` to the link element:
```tsx
lang={zh ? undefined : 'zh-Hans'}
```
(On ZH pages the link says `EN` in an English script; that typically pronounces fine from any TTS, but for symmetry `lang="en"` could also be added there.)

---

### LOW — `globals.css:1072` — Print rule hides `.edition-toggle` but not `.edition-switch` (lang-switch link)

**Evidence.** `globals.css:1072`:
```css
.progress,.ticker,.cover-grid,.reg,.masthead .clock,.cover-base .scroll,.edition-toggle{ display:none; }
```
The theme-toggle button (`ThemeToggle.tsx:54`) correctly carries `className="edition-toggle"` and is therefore suppressed on print. However, the new `<span className="edition-switch">` wrapper (containing both the lang-switch `<a>` and the ThemeToggle button) is not in the print hide list. The ThemeToggle is hidden via its own `.edition-toggle` rule, but the `lang-switch` anchor renders as visible chrome in the printed issue — a small `"中文"` or `"EN"` text link will appear in the printed nav row.

**Impact.** Low: it's a minor cosmetic issue in a printed periodical — the link is small and unobtrusive. No functional regression.

**Fix.** Add `.lang-switch` to the print rule, or add `.masthead .edition-switch` to hide the whole wrapper:
```css
.progress,.ticker,.cover-grid,.reg,.masthead .clock,.cover-base .scroll,.edition-toggle,.lang-switch{ display:none; }
```

---

## 2. Explicitly cleared (no finding)

| Check | Result |
|-------|--------|
| `altLocaleHref` regex `^\/zh(?=\/|$)` correctness | PASS — all 13 test cases verified correct including edge cases `/zheng`→`/zh/zheng`, `/zh-foo`→`/zh/zh-foo` (EN→ZH), `/zheng`→`/zheng` (ZH strip attempt, no match), `/zh/`→`/` |
| Hash fragments through `altLocaleHref` | PASS — `/firm#mandate`→`/zh/firm#mandate`, `/zh/firm#mandate`→`/firm#mandate`; regex operates on pathname prefix only, hash preserved |
| `[lang="zh-Hans"] .hl-line` scope | PASS — selector fires on any ancestor with `lang="zh-Hans"`; `html[lang]` set in `layout.tsx:108` is always an ancestor of `.hl-line` in `page.tsx`; EN pages have `html[lang="en"]` → selector does not fire; no bleed |
| `[lang="zh-Hans"] .masthead nav a` scope | PASS — same ancestral logic; the `<header lang="zh-Hans">` on ZH pages is an ancestor of the nav; EN pages have no such ancestor |
| Noto Serif SC 700 loaded | PASS — `globals.css:15` loads `Noto+Serif+SC:wght@500;700` explicitly; no faux-bold |
| `font-variation-settings:normal` on CN headline `.g` | PASS — Noto Serif SC is not a variable font; resetting `font-variation-settings` to `normal` is correct; `font-weight:700` is a standard axis |
| `.edition-switch` mobile layout at ≤860px | PASS — goes `position:static; display:flex; justify-content:center; padding-top:.5rem`; does not conflict with clock (hidden at ≤860px); nav wraps via `flex-wrap:wrap`; 5 items at `.68rem`/`.86rem` with `clamp(1.1rem,3.2vw,2.6rem)` gap wrap cleanly |
| `edition-switch` `position:absolute; left:0` on desktop | PASS — symmetric to `.clock{position:absolute; right:0}`; they occupy the same nav row baseline via `top:50%; transform:translateY(-50%)`; nav content centered so both ends are clear |
| `edition-switch` keyboard reachability | PASS — `<span>` wrapper is outside `<nav>` but within `<div class="navrow">`; natural DOM tab order reaches it after the nav links; the `<Link>` and `<button>` inside are natively focusable |
| `aria-label` describes target language (not current) | PASS — EN page: label `'切换到中文'` (switch to Chinese) describes the target; ZH page: `'Switch to English'` describes the target |
| `hrefLang` value validity | PASS — `zh-Hans` is a valid BCP 47 / RFC 5646 tag |
| Light/dark color vars | PASS — changes use `var(--signal)`, `var(--ink-60)`, `var(--ink)` etc.; no hardcoded color values in new rules; both token blocks (`:root`/`.theme-light` and `.theme-dark`) define all vars |
| `x-pathname` on `/zh` root | PASS — `proxy.ts:33` sets `x-pathname` from `request.nextUrl.pathname`; Next.js normalizes trailing slashes by default (no `trailingSlash:true` in `next.config.ts`), so `/zh` is always `/zh`; `pathname = h.get('x-pathname') \|\| '/'` fallback is only for SSG/no-middleware scenarios |
| Asymmetric nav routes | PASS — all 5 EN nav items (`/approach`, `/firm`, `/firm#mandate`, `/contact`, `/notes`) have corresponding `/zh/` counterparts confirmed in `src/app/zh/` directory |

---

## 3. Impact

- HIGH finding: currently latent (no `/zheng`-style routes exist); would produce Chinese-rendered 404 pages. Low urgency but easy fix.
- MEDIUM finding: active a11y issue on every EN-language page load for screen-reader users who encounter the lang switch.
- LOW finding: cosmetic print artifact.

---

## 4. Fix summary

| Severity | File | Fix |
|----------|------|-----|
| HIGH | `src/app/layout.tsx:103` | `const isZh = /^\/zh(\/\|$)/.test(pathname);` |
| MEDIUM | `src/app/components/Masthead.tsx:114` | Add `lang={zh ? undefined : 'zh-Hans'}` to the `<Link>` |
| LOW | `src/app/globals.css:1072` | Add `.lang-switch` to print hide list |

---

## 5. Tests to verify after fix

- [ ] `altLocaleHref` unit test: 13 cases above all pass
- [ ] `/zh` root: `html[lang]` = `zh-Hans`, nav labels Chinese, lang-switch shows `EN`
- [ ] `/firm`: `html[lang]` = `en`, nav labels English, lang-switch shows `中文`
- [ ] If a `/zhfoo` route is ever added: layout renders EN (after fix)
- [ ] Screen reader: link to `/zh` on EN page announces with Chinese TTS (after MEDIUM fix)
- [ ] Print `/`: lang-switch link absent (after LOW fix)

---

## 6. Open issues

- None blocking. The HIGH fix should land before any `/zh*`-prefixed route (not under `/zh/`) is added.

---

## 7. Follow-up

- Consider extracting `isZh` guard into a shared `lib/locale.ts` so `layout.tsx` and `altLocaleHref` share the same regex, preventing future drift.

---

**Verdict: NO-PASS** (1 HIGH, 1 MEDIUM, 1 LOW — HIGH and MEDIUM must be fixed before ship)
