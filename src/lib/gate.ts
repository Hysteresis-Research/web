import 'server-only';
import { cache } from 'react';
import type { Session } from 'next-auth';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { assertStrongAuthSecret } from '@/lib/env';
import { safeRelativePath } from '@/lib/redirect';

// `auth` is overloaded (also a middleware wrapper); annotate the no-arg call.
export const getSession = cache(
  async (): Promise<Session | null> => (await auth()) as Session | null,
);

// THE single authorization policy. Phase 1: any authenticated Google user
// may see gated content (these materials are not strict; login + audit is
// already more than the prior public-by-URL state).
//
// UPGRADE POINT (LP-statements / capital-accounts tier): add a `pathname`
// arg here and require an allowlist / grant for the sensitive prefix. That
// is a change to THIS function only — not a re-architecture.
function authorized(session: Session | null): boolean {
  return Boolean(session?.user);
}

// Call at the top of every gated page/route. Redirects to the themed
// sign-in (carrying a sanitized return path) when not authorized.
export async function requireViewer(pathname: string) {
  assertStrongAuthSecret();
  const session = await getSession();
  if (!authorized(session)) {
    const from = safeRelativePath(pathname, '/desk');
    redirect(`/signin?from=${encodeURIComponent(from)}`);
  }
  return session;
}
