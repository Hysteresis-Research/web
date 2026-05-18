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
