import type { Metadata } from 'next';
import BHMark from '@/app/components/BHMark';
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
  searchParams: Promise<{ from?: string }>;
}) {
  const sp = await searchParams;
  const from = safeRelativePath(sp.from, '/zh/desk');

  return (
    <main>
      <div className="col">
        <div className="marginalia">访问</div>
        <div className="hero-mark">
          <BHMark width={160} height={96} strokeWidth={2.2} />
        </div>
        <h1>登录</h1>
        <p className="lede">桌面笔记与 LP 材料不公开。</p>
        <p className="body-paragraph">
          用 Google 账号继续，即可查看分享的内容。访问会被记录。
          <span className="em">—</span> 非投资建议。
        </p>
        <form action={signInWithGoogle} className="signin-form">
          <input type="hidden" name="from" value={from} />
          <button type="submit" className="signin-btn">
            用 Google 账号继续
          </button>
        </form>
      </div>
    </main>
  );
}
