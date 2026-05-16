import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

// Phase 1: Google OAuth, JWT session, NO database. Lazy config (function
// form) so Auth.js env reads happen at request time, not module import
// (codex MINOR — honours the "nothing read at module load" invariant;
// `next build` stays green secretless).
export const { handlers, auth, signIn, signOut } = NextAuth(() => ({
  trustHost: true,
  providers: [Google],
  session: { strategy: 'jwt', maxAge: 60 * 60 * 24 * 7 },
  pages: { signIn: '/signin' },
  events: {
    // Minimal access record — no DB in Phase 1, so this lands in Vercel
    // function logs. Makes the "access is logged" notice truthful (codex
    // MINOR). Upgrade to a real audit store with the LP-statements tier.
    async signIn({ user }) {
      console.log(
        JSON.stringify({
          evt: 'gated_signin',
          email: user?.email ?? null,
          ts: new Date().toISOString(),
        }),
      );
    },
  },
}));
