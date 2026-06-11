import type { Metadata } from 'next';
import { safeRelativePath } from '@/lib/redirect';
import { signInWithGoogle } from '../../signin/actions';

export const metadata: Metadata = {
  title: '登录 · Hysteresis Research',
  robots: { index: false, follow: false, nocache: true },
};

export const dynamic = 'force-dynamic';

export default async function ZhSignInPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; denied?: string }>;
}) {
  const sp = await searchParams;
  const from = safeRelativePath(sp.from, '/zh/desk');
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
          font-family:var(--hanzi);
          font-weight:700;
          font-size:clamp(1.9rem,4.2vw,2.4rem);
          line-height:1.1;
          letter-spacing:.2em;
          margin-right:-.2em;
          color:var(--ink);
          margin:0 0 .4rem;
        }
        .si-sub{
          font-family:var(--grot);
          font-variation-settings:'wdth' 108,'wght' 620;
          font-size:.72rem;
          letter-spacing:.16em;
          text-transform:uppercase;
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
          line-height:1.75;
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
      <main lang="zh-Hans">
        <div className="si-wrap">
          <div className="si-eyebrow">访问</div>
          <div className="si-lockup">迟滞研究</div>
          <div className="si-sub">Hysteresis Research</div>
          <hr className="si-rule" />
          <p className="si-body">桌面笔记与 LP 材料不公开。</p>
          {denied && (
            <p className="si-body">
              当前登录的账号不在该区域的访问名单内。
              <span className="si-dash"> — </span>换一个 Google 账号继续，或与我们联系申请权限。
            </p>
          )}
          <p className="si-body">
            用 Google 账号继续，即可查看分享的内容。访问会被记录。
            <span className="si-dash"> — </span>非投资建议。
          </p>
          <form action={signInWithGoogle} className="si-form">
            <input type="hidden" name="from" value={from} />
            <button type="submit" className="si-btn">
              用 Google 账号继续
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
