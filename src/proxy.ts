import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Auth.js v5 JWT session cookie (prod uses the __Secure- prefix).
const SESSION_COOKIES = ['authjs.session-token', '__Secure-authjs.session-token'];

// Gated prefixes. /signin itself is NEVER gated (would be unreachable).
const GATED = ['/desk', '/zh/desk', '/deck'];

function isGated(pathname: string): boolean {
  return GATED.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Optimistic, cookie-only pre-filter for UX. The real authorization check
  // is always server-side in the page/route (requireViewer) — defense in
  // depth; the cookie's mere presence is not trusted for access.
  if (isGated(pathname)) {
    const hasSession = SESSION_COOKIES.some((c) => request.cookies.has(c));
    if (!hasSession) {
      const url = new URL('/signin', request.url);
      url.searchParams.set('from', pathname);
      return NextResponse.redirect(url);
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher:
    '/((?!_next/static|_next/image|favicon|robots\\.txt|sitemap\\.xml|llms\\.txt|.*\\.(?:svg|png|jpg|jpeg|gif|ico|webp|css|js|map)).*)',
};
