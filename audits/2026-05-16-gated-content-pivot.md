# Codex audit — gated-content PIVOT (Google OAuth) diff

| Field | Value |
|---|---|
| **Date** | 2026-05-16 |
| **Target** | Staged diff on `feat/deck-sharing-phase1` after the pivot (magic-link/PDF data-room scrapped → simple Google login gating HTML `/desk/*` + `/deck`) |
| **Reviewer** | OpenAI codex-cli 0.125.0, `model_reasoning_effort=xhigh`, hostile-but-fair, in-repo (verified vs node_modules + Next 16 docs) |
| **Scope** | Is the gate actually enforced on every surface; any content/path leak; Auth.js v5 Google/JWT-no-DB correctness; carried-forward constraints |
| **Tokens** | ~ (xhigh) |
| **Verdict** | **No gate bypass on any reviewed surface.** Safe to commit after the one MAJOR (analytics leak) — fixed. |

## Verification (hostile, code-traced)
1. Chokepoint complete — **UPHELD ✓** `requireViewer()` is the first content gate on all 4 desk pages + `/deck` route; `redirect()` is terminal in both Server Components and Route Handlers (Next 16 docs cited).
2. Deck confidentiality — **UPHELD ✓** confidential HTML server-only imported + decoded only post-auth; `public/lp-deck/` is harness only; route handler uncached + `private,no-store`.
3. Proxy — **UPHELD ✓** `/signin` never gated (no loop); prefix match doesn't catch `/deskfoo`; invalid-cookie bypass stopped by real `auth()` in gate.
4. Auth.js Google/JWT no-DB — **UPHELD ✓** no-adapter → JWT default + explicit; `AUTH_GOOGLE_*` inference correct; Auth.js clamps callback same-origin; server-action CSRF origin checks exist; any Google account accepted = stated policy.
5. Redirect helper — **UPHELD ✓** all sinks sanitize via `safeRelativePath`; fuzz produced no external redirect.
6. Carried constraints — **PARTIAL ⚠** → now resolved (see fixes).

## Findings & remediation
- **NEW BLOCKERS: none.** Gate not bypassable.
- **MAJOR** — analytics exclusion was server-layout state; layouts don't re-render on client nav, so a public→`/desk` `<Link>` would leak the gated path to Vercel Analytics/SpeedInsights. **FIXED:** `src/app/components/GatedAnalytics.tsx` drops gated paths at the sink via `beforeSend` (client-side, invariant under navigation); layout no longer conditionally mounts telemetry.
- **MINOR** — `NextAuth(config)` read Auth.js env at module init. **FIXED:** lazy `NextAuth(() => (...))`.
- **MINOR** — `/signin` claimed "Access is logged" but nothing logged. **FIXED:** `events.signIn` writes a JSON access record to Vercel function logs (no DB in Phase 1); claim now truthful.

## Verify
- `tsc --noEmit` clean. `next build` green with `AUTH_SECRET`/`AUTH_GOOGLE_*` unset (no module-scope throw). `eslint .` clean except a **pre-existing** `src/app/components/ThemeToggle.tsx` `react-hooks/set-state-in-effect` error (not introduced here; flagged as separate cleanup).
- Cannot runtime-verify the OAuth flow without a Google OAuth client + `AUTH_SECRET`; that is the user's operational setup step.

## Open issues / follow-up
- Pre-existing `ThemeToggle` lint error — out of scope, flagged separately.
- Phase 2 (LP-statements tier): change `authorized()` in `src/lib/gate.ts` only; likely reintroduce a DB for a real audit store + allowlist/grants.
- Re-run codex if the gate policy or proxy changes.
