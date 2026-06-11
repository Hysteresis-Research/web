import type { Metadata } from 'next';
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
    <>
      <style>{`
        .si-wrap{
          max-width:30rem;
          margin:0 auto;
          padding:clamp(2.5rem,6vw,4rem) var(--gutter) 6rem;
        }
        .si-eyebrow{
          font-family:var(--grot);
          font-variation-settings:'wdth' 104,'wght' 600;
          font-size:.66rem;
          letter-spacing:.2em;
          text-transform:uppercase;
          color:var(--ink-3);
          margin:0 0 .85rem;
          display:flex;
          align-items:center;
          gap:.7em;
        }
        .si-eyebrow::before{
          content:"";
          display:inline-block;
          width:.55em;
          height:.55em;
          background:var(--signal);
          flex-shrink:0;
        }
        .si-lockup{
          font-family:var(--grot);
          font-variation-settings:'wdth' 116,'wght' 820;
          font-size:clamp(1.7rem,4vw,2.2rem);
          line-height:1.08;
          letter-spacing:-.02em;
          text-transform:uppercase;
          color:var(--ink);
          margin:0 0 .4rem;
        }
        .si-sub{
          font-family:var(--hanzi);
          font-weight:500;
          font-size:.78rem;
          letter-spacing:.8em;
          margin-right:-.8em;
          color:var(--ink-60);
          margin-bottom:2rem;
        }
        .si-rule{
          border:none;
          border-top:1px solid var(--hair);
          margin:0 0 2rem;
        }
        .si-body{
          font-family:var(--serif);
          font-size:1rem;
          line-height:1.65;
          color:var(--ink);
          margin:0 0 1rem;
        }
        .si-body + .si-body{ margin-top:0; }
        .si-dash{ color:var(--signal); }
        .si-form{ margin-top:2.5rem; }
        .si-btn{
          display:block;
          width:100%;
          padding:.78em 1.4em;
          font-family:var(--grot);
          font-variation-settings:'wdth' 108,'wght' 640;
          font-size:.78rem;
          letter-spacing:.12em;
          text-transform:uppercase;
          color:var(--paper);
          background:var(--ink);
          border:1px solid var(--ink);
          cursor:pointer;
          transition:background .18s ease, color .18s ease;
        }
        .si-btn:hover,
        .si-btn:focus-visible{
          background:var(--signal);
          border-color:var(--signal);
          color:var(--paper);
        }
        .si-btn:focus-visible{ outline:2px solid var(--signal); outline-offset:3px; }
      `}</style>
      <main>
        <div className="si-wrap">
          <div className="si-eyebrow">access</div>
          <div className="si-lockup">Hysteresis Research</div>
          <div className="si-sub">迟滞研究</div>
          <hr className="si-rule" />
          <p className="si-body">Desk notes and the LP introduction are private.</p>
          {denied && (
            <p className="si-body">
              The signed-in account is not on the access list for that area.
              <span className="si-dash"> — </span>Continue with a different Google
              account, or contact us to request access.
            </p>
          )}
          <p className="si-body">
            Continue with a Google account to view shared material. Access is
            logged. <span className="si-dash"> — </span>Not financial advice.
          </p>
          <form action={signInWithGoogle} className="si-form">
            <input type="hidden" name="from" value={from} />
            <button type="submit" className="si-btn">
              Continue with Google
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
