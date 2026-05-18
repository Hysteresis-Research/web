import 'server-only';
import { cache } from 'react';
import type { Session } from 'next-auth';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { assertStrongAuthSecret, lpAllowlist } from '@/lib/env';
import { safeRelativePath } from '@/lib/redirect';

// `auth` is overloaded (also a middleware wrapper); annotate the no-arg call.
export const getSession = cache(
  async (): Promise<Session | null> => (await auth()) as Session | null,
);

// Allowlist tier: the LP members area + the LP-introduction deck. An
// authenticated Google user is NOT sufficient here — the account email
// must be on LP_ALLOWLIST. /desk/* stays Phase-1 (any authenticated user;
// it is research desk material, a different tier from LP-relationship
// content). This is the per-route sensitivity policy the original gate
// reserved as the "LP-statements tier" upgrade point.
const ALLOWLIST_PREFIXES = ['/lp', '/zh/lp', '/deck'];

function isAllowlistTier(pathname: string): boolean {
  return ALLOWLIST_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );
}

// THE single authorization policy.
//   Phase-1 tier (/desk/*, /zh/desk/*): any authenticated Google user.
//   Allowlist tier (/lp/*, /zh/lp/*, /deck): authenticated AND email on
//   LP_ALLOWLIST (case-insensitive). Fail closed — an unset/empty
//   LP_ALLOWLIST grants no one (see env.ts).
function authorized(session: Session | null, pathname: string): boolean {
  if (!session?.user) return false;
  if (isAllowlistTier(pathname)) {
    const email = session.user.email?.toLowerCase();
    return Boolean(email && lpAllowlist().has(email));
  }
  return true;
}

// Call at the top of every gated page/route. Redirects to the themed
// sign-in (carrying a sanitized return path) when not authorized. A
// signed-in but un-allowlisted user on the allowlist tier carries
// `denied=1` so /signin explains instead of looping silently.
export async function requireViewer(pathname: string) {
  assertStrongAuthSecret();
  const session = await getSession();
  if (!authorized(session, pathname)) {
    const from = safeRelativePath(pathname, '/desk');
    const denied =
      session?.user && isAllowlistTier(pathname) ? '&denied=1' : '';
    redirect(`/signin?from=${encodeURIComponent(from)}${denied}`);
  }
  return session;
}
