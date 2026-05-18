import type { Metadata } from 'next';
import BHMark from '@/app/components/BHMark';
import { safeRelativePath } from '@/lib/redirect';
import { signInWithGoogle } from './actions';

export const metadata: Metadata = {
  title: 'Sign in · Hysteresis Research',
  robots: { index: false, follow: false, nocache: true },
};

export const dynamic = 'force-dynamic';

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; denied?: string }>;
}) {
  const sp = await searchParams;
  const from = safeRelativePath(sp.from, '/desk');
  const denied = sp.denied === '1';

  return (
    <main>
      <div className="col">
        <div className="marginalia">access</div>
        <div className="hero-mark">
          <BHMark width={160} height={96} strokeWidth={2.2} />
        </div>
        <h1>Sign in</h1>
        <p className="lede">Desk notes and the LP introduction are private.</p>
        {denied && (
          <p className="body-paragraph">
            The signed-in account is not on the access list for that area.
            <span className="em">—</span> Continue with a different Google
            account, or contact us to request access.
          </p>
        )}
        <p className="body-paragraph">
          Continue with a Google account to view shared material. Access is
          logged. <span className="em">—</span> Not financial advice.
        </p>
        <form action={signInWithGoogle} className="signin-form">
          <input type="hidden" name="from" value={from} />
          <button type="submit" className="signin-btn">
            Continue with Google
          </button>
        </form>
      </div>
    </main>
  );
}
