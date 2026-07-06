// Runtime-only env access. Nothing here runs at module load, so `next build`
// stays green with no secrets present.

// codex BLOCKER-3 (partial): Auth.js only checks AUTH_SECRET is non-empty.
// Assert real strength at request time (called from the gate).
export function assertStrongAuthSecret(): void {
  const s = process.env.AUTH_SECRET;
  if (!s || s.length < 32) {
    throw new Error('AUTH_SECRET missing or too weak (need ≥32 chars)');
  }
}

// NAV feed (gated /lp/nav · /zh/lp/nav). Server-side fetch of the aggregate,
// deliberately dollar-free performance JSON baked on btc-fetcher, behind an
// X-Nav-Token shared secret. Read at request time. Either var missing — or a
// token too short to be a real secret — ⇒ null ⇒ the page renders its
// "unavailable" state (fail closed; never fetch with a weak token).
export function navFeed(): { url: string; token: string } | null {
  const url = process.env.NAV_FEED_URL ?? '';
  const token = process.env.NAV_FEED_TOKEN ?? '';
  if (!url.startsWith('https://') || token.length < 24) return null;
  return { url, token };
}

// LP allowlist (allowlist tier — /lp/*, /zh/lp/*, /deck). Emails in
// LP_ALLOWLIST, separated by comma / whitespace / newline, matched
// case-insensitively. Read at request time, never at module load.
// Unset or empty ⇒ empty set ⇒ fail closed: no one is granted until the
// env var is configured (a missing allowlist must not mean "open").
export function lpAllowlist(): Set<string> {
  const raw = process.env.LP_ALLOWLIST ?? '';
  return new Set(
    raw
      .split(/[\s,]+/)
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean),
  );
}
