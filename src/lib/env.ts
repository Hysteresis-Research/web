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
