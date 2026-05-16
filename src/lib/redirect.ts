// Only ever redirect to a same-origin relative path (codex MAJOR-3).
// Hardened per codex MINOR: also reject the *normalized* result if it
// resolves to a protocol-relative ("//host") or backslash form, so the
// helper is safe even for future direct-redirect sinks.
export function safeRelativePath(
  input: string | null | undefined,
  fallback: string,
): string {
  if (!input) return fallback;
  if (!input.startsWith('/')) return fallback;
  if (input.startsWith('//') || input.startsWith('/\\')) return fallback;
  if (input.includes('://') || input.includes('\\')) return fallback;
  try {
    const u = new URL(input, 'https://x.invalid');
    if (u.origin !== 'https://x.invalid') return fallback;
    const out = u.pathname + u.search;
    if (out.startsWith('//') || out.startsWith('/\\')) return fallback;
    return out;
  } catch {
    return fallback;
  }
}
