# Gated content — Phase 1

Simple login gate for the firm's **HTML** internal material:

- `/desk/*` and `/zh/desk/*` — dated desk notes (previously public-by-URL)
- `/deck` — the LP-introduction slide deck (vendored from `firm/site/deck.html`)

## Model

Auth.js v5 + **Google OAuth**, **JWT session, no database**. Authentication
(Google) is separate from authorization: every signed-in Google user is let
through in Phase 1 — these materials are not strict, and login + an access
record is already more protection than the prior public-by-URL state.

```
request /desk/* | /zh/desk/* | /deck
   │ proxy.ts: optimistic cookie-only pre-filter → /signin?from=… if no cookie
   ▼
page/route: await requireViewer(path)        ← src/lib/gate.ts (THE policy)
   │ not authed → redirect /signin (themed, "Continue with Google")
   ▼ authed
render desk page  /  stream gated deck HTML
```

`src/lib/gate.ts` `requireViewer()` is the single chokepoint. The
`authorized()` function inside it is the **only** thing to change when the
sensitive tier arrives.

## Upgrading later (LP statements / capital accounts)

Do **not** rebuild. In `src/lib/gate.ts` `authorized(session, pathname)`:
switch on the sensitive prefix and require an allowlist / per-user grant for
it (which is when a DB likely returns). Everything else — sign-in, proxy,
page wiring — stays.

## Security posture

- Real check is always server-side (`requireViewer`); the proxy cookie check
  is optimistic UX only, never trusted for access.
- Auth.js owns JWT signing (alg pinned). `AUTH_SECRET` strength is asserted at
  runtime (≥32 chars) — Auth.js itself only checks non-empty.
- Redirects are same-origin relative only (`safeRelativePath`), hardened
  against `//host` / `/\` normalization.
- Gated routes are excluded from Vercel Analytics / Speed Insights and carry
  `noindex`; not in sitemap/nav (mirrors the existing `/desk` convention).
- The confidential deck HTML is bundled and served only via the gated
  `/deck` route. Only the non-secret harness (`deck-stage.js`, `tokens.css`,
  favicon) is in `public/lp-deck/`.

## One-time setup

1. **Google OAuth**: create an OAuth client at
   <https://console.cloud.google.com/apis/credentials>. Authorized redirect
   URI: `https://www.hysteresisresearch.com/api/auth/callback/google` (add the
   `localhost:3000` equivalent for dev). Set `AUTH_GOOGLE_ID` /
   `AUTH_GOOGLE_SECRET`.
2. `AUTH_SECRET` = `openssl rand -base64 32`. Set `AUTH_URL` to the prod
   origin.
3. Deploy. No database, email, or blob store needed.

## Refreshing the LP deck

The deck is vendored from the BTC-quant repo `firm/site/`. To update, re-copy
`deck-stage.js` / `tokens.css` / `assets/` into `public/lp-deck/` and
regenerate `src/app/deck/deck-html.ts` (base64 of `deck.html` with asset
paths rewritten to `/lp-deck/*`).

## Not yet (Phase 2+)

Allowlist/grant tier for LP statements, per-recipient attribution beyond
"who signed in", magic-link fallback for non-Google users.
