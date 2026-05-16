# Codex audit — deck-sharing Phase 1 IMPLEMENTATION diff

| Field | Value |
|---|---|
| **Date** | 2026-05-16 |
| **Target** | Staged diff on `feat/deck-sharing-phase1` (26 src files) — Phase 1 implementation |
| **Reviewer** | OpenAI codex-cli 0.125.0, `model_reasoning_effort=xhigh`, hostile-but-fair, in-repo (verified vs node_modules) |
| **Scope** | Verify each prior plan-review BLOCKER/MAJOR is actually remediated in code + hunt new defects |
| **Tokens** | 160,026 |
| **Verdict** | **NOT safe to commit, NOT safe to ship.** Highest risk: pre-verification `hr_dl` cookie = auth bypass. |

## Prior-finding verification
- BLOCKER-1 (proxy not /d/*): **UPHELD ✓** `src/proxy.ts:14-23`
- BLOCKER-2 (scanner-safe verify): **NOT FIXED ✗** — `src/lib/email.ts:29-30` still nests the token-consuming Auth.js callback URL inside the emailed `/verify?u=`; a SafeLinks-style scanner that extracts nested URLs GETs the callback and burns the single-use token.
- BLOCKER-3 (jose pinned): **PARTIAL ⚠** Auth.js JWE sound; but `AUTH_SECRET` strength unenforced (also used by `src/lib/crypto.ts` HMAC).
- BLOCKER-4 (bearer tokens): **UPHELD ✓** `scripts/grant.ts:80-82`, `schema.ts:95-110`
- BLOCKER-5 (confused-deputy): **PARTIAL ⚠** Branch B requires `member` ✓ but Branch A is bypassable (see NEW BLOCKER).
- MAJOR-2 (byte route sole boundary): **PARTIAL ⚠** route ok, but `scripts/grant.ts` uploads Blob `access:'public'` → leaked URL bypasses auth/revocation/audit.
- MAJOR-3 (no open redirect): **UPHELD ✓**
- MAJOR-4 (no secret in URL/analytics): **UPHELD ✓**
- MAJOR-5 (PDF cache/headers): **UPHELD ✓**
- MAJOR-7 (build green secretless): **UPHELD ✓**

## NEW findings
**BLOCKER** — `actions.ts:30` sets `hr_dl` BEFORE the magic link is consumed; `access.ts:65` Branch A accepts *any existing session* + that cookie. Exploit: a user with any prior valid session POSTs the gate for another deck's link, skips the new email, opens `/deck/<slug>` → access without proving email control for that deck. Magic-link verification is effectively skippable.

**MAJOR**
1. `email.ts:29` consuming callback embedded in emailed URL (= BLOCKER-2 root). Fix: email an opaque nonce; store callback server-side; resolve only on same-origin POST.
2. `schema.ts:104`/`actions.ts:19` deck_link has no recipient binding; gate accepts ANY email → anyone with a forwarded link self-issues access. Fix: bind deck_link to recipient email/domain, enforce pre-signIn.
3. `grant.ts:59` Blob `access:'public'`. Fix: `access:'private'`, store pathname, serve via private `get`.
4. `actions.ts:41` no rate limit on magic-link issuance → email-bomb / Resend cost & reputation. Fix: per-IP/per-link/per-email throttle.

**MINOR**
1. `auth.ts:42` `pages.verifyRequest:'/d?sent=1'` — Auth.js appends `?provider=` → `/d?sent=1?provider=` broken. Use dedicated path.
2. `redirect.ts:14` `safeRelativePath('/..//evil')` normalizes to `//evil`; safe at current sinks but unsafe for future. Reject normalized `//`/`/\`.

## Remediation (decided)
Re-architect verification: Auth.js becomes session manager via **Credentials provider + JWT**; we own a single-use, hashed, server-stored **nonce** (emailed as opaque `/verify?n=`, never the consuming URL), bound to (deckLinkId, recipient email). Session/authorized-link binding is created **only after** same-origin POST verifies the nonce — closes NEW BLOCKER + BLOCKER-2 + BLOCKER-5-A. Plus: deck_link.recipientEmail enforced; private Blob; rate limiting; AUTH_SECRET length assert; dedicated Auth.js page paths; redirect helper hardened.

## Follow-up
Re-run codex hostile diff review after remediation; do not commit until NEW BLOCKER + all 4 MAJOR are UPHELD ✓.
