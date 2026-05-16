# Codex audit — deck-sharing Phase 1 architecture plan

| Field | Value |
|---|---|
| **Date** | 2026-05-16 |
| **Target** | Deck-sharing Phase 1 *architecture plan* (no code yet) — branch `feat/deck-sharing-phase1` |
| **Reviewer** | OpenAI codex-cli 0.125.0, `model_reasoning_effort=xhigh`, hostile-but-fair stance, run in-repo so it could verify against bundled Next 16 docs |
| **Scope** | Stack choice (custom magic-link vs Auth.js v5), data model, `canView()` chokepoint, routes, `proxy.ts` extension, Next 16 build constraints, Phase1→Phase2 hybrid contract |
| **Tokens** | 260,180 |
| **Verdict** | **Do not implement as-is.** Chokepoint direction is right; auth lifecycle has blocker-level flaws; a stated rationale is false per the docs. |

## Findings

### BLOCKERS (must change before any code)

1. **Proxy `/d/*` redirect kills the Phase 1 gate.** `src/proxy.ts:10-12` matcher already runs on `/d/*`; an optimistic "no session → redirect" on `/d/[token]` means LPs never reach the email-gate page (which IS the public entry). Evidence: `proxy.md:200-208` (Proxy runs before page render). **Fix:** never optimistic-redirect `/d/[token]`; optimistic-redirect only `/members/*`; real check stays server-side in page + byte route.
2. **GET `/api/auth/verify` consuming a single-use token is scanner-fragile / non-idempotent.** Email security scanners (Proofpoint/Mimecast/SafeLinks), link previews, and Next prefetch auto-GET the URL and burn the token before the human clicks. Evidence: `prefetching.md:216-220` + named threat. **Fix:** GET renders a confirmation interstitial; token consumed only on same-origin POST with CSRF nonce; atomic consume.
3. **jose/JWT underspecified.** No alg pinning, required `exp`/`iat`, max-age, `jti`, ≥32-byte secret, runtime secret validation. `jose` rejects `alg:none` but default verify still accepts applicable algs. Evidence: `authentication.md:566-586`, `jose/dist/types/types.d.ts:561-567`. **Fix:** `HS256`, `jwtVerify(..., { algorithms:['HS256'] })`, required claims, runtime secret-length assert.
4. **Bearer-token hardening missing.** `verification_tokens.token` / `deck_links.token` are bearer secrets; plan didn't specify entropy/hashing/uniqueness/atomic-consume. **Fix:** 32-byte CSPRNG base64url; store only SHA-256/HMAC hash + unique index; verification token consumed via single atomic `UPDATE ... WHERE consumed_at IS NULL AND expires_at > now() RETURNING`. *(Refinement, fair: `deck_links.token` is intentionally reusable/revocable — hash-at-rest + entropy + unique index + `revoked_at`/`expires_at` apply; atomic-single-use applies to `verification_tokens` only.)*
5. **Confused-deputy: Phase-1 link-gate cookie can silently satisfy Phase-2 account branch.** If `canView` branch B keys only on `session.user` and the cookie shape is identical, a link-gated visitor (proved only inbox control) becomes an account holder. Evidence: `authentication.md:1013-1017` + named threat. **Fix:** encode explicit session assurance in JWT (`link_gate` vs `member`); branch B + `/members` require `member`. *(This refines, not kills, the hybrid contract — substrate stays shared, session carries an assurance level.)*

### MAJOR

1. **The Auth.js rejection rationale is FALSE as stated.** I claimed Auth.js v5 "doesn't map cleanly onto Next 16 `proxy.ts`." Evidence against: `16-proxy.md:15-29` (Proxy is the *renamed same* functionality) + Auth.js docs `export { auth as proxy }`. Valid reasons to still prefer custom = beta/production-readiness, single-method product-fit, design control, fewer deps — **not** Proxy incompatibility. Decision must be re-derived honestly.
2. **Byte route is the sole authz boundary** — never return Blob signed/public URLs to client; `canView` enforced inside `/api/deck/[deckId]` or it's IDOR. Evidence: `authentication.md:1491-1492`.
3. **Open redirect via `callbackUrl`.** Store intended path server-side with the verification token, or allow only relative `/d/<same-token>` & `/members`.
4. **LP-identifiable path leakage.** `layout.tsx:128-129` mounts Vercel Analytics/SpeedInsights globally; secret token in `/d/[token]` path + Referer leaks to analytics/processors. Move to a non-secret post-auth URL; exclude gated routes from analytics.
5. **PDF cache headers unspecified.** Return `Cache-Control: private, no-store`, `X-Robots-Tag: noindex, noarchive`.
6. **`allow_download=false` is UI-only**, not a security control — rely on per-recipient watermark + audit, never market it as enforcement.
7. **"force-dynamic keeps build green" is incomplete.** Dynamic render doesn't stop module-scope env validation at import/build. Evidence: `caching-without-cache-components.md:96-104`. **Fix:** all DB/JWT/Blob/Resend env reads inside runtime functions, no module-load throw.

### MINOR
- Add a test asserting `proxy.ts` matcher behavior on `/d/*`, `/api/deck/*`, `/api/auth/verify`.
- `SameSite=Lax` is fine for the email click (matches Next auth example `authentication.md:625-651`); the real issue is GET consumption, not cookie delivery.
- Mirror `/desk` noindex/sitemap convention for deck pages; the `/api/deck/*` route additionally needs response headers (metadata doesn't cover it).

## Open issues / decision required
- **Custom-hardened vs Auth.js v5** must be re-decided on honest grounds (MAJOR-1). Codex just enumerated ~5 blocker-class footguns a vetted library handles for free; counterweight is beta risk + single-method need + design control.

## Follow-up
- Blockers 1,3,4,5 + MAJOR 2,3,5,7 apply regardless of the custom/Auth.js choice → fold into revised design either way.
- Re-run codex hostile diff review post-implementation before commit.
