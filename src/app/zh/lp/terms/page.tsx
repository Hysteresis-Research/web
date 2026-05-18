import type { Metadata } from 'next';
import BHMark from '@/app/components/BHMark';
import { pageMetadata } from '@/lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'LP · 条款 · Hysteresis Research · 迟滞研究',
    description: 'LP 条款——草案，无约束力（不公开）。',
    path: '/zh/lp/terms',
    lang: 'zh-Hans',
  }),
  alternates: { canonical: '/zh/lp/terms' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function LpTermsZh() {
  await requireViewer('/zh/lp/terms');
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">terms</div>
        <h1>条款</h1>

        <div></div>
        <p className="lede">草案 · 无约束力 · 非要约或要约邀请。</p>

        <div className="marginalia">§1</div>
        <p className="body-paragraph">
          本页陈述关系成立所依据的姿态。它<span className="em">不是</span>私募
          备忘录、认购协议或任何最终文件，对任何一方均不构成义务。实体注册
          尚未完成；下列每一项法律与商业事实，在核实前均为显式的{' '}
          <span className="signal">[PENDING]</span> 占位。
        </p>

        <div className="marginalia">§1</div>
        <p className="body-paragraph">
          <span className="signal">关系的性质</span>
          <span className="em">——</span>承载力被刻意设为有限。我们只在边际能
          存活的窗口内接受资本，会拒绝那些会稀释边际的资本。这里的关系按公司
          的节奏走，不按日历：研究先于资本，准入取决于双向尽调，而非募资
          时间表。
        </p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          <span className="signal">准入与容量</span>——资格：[PENDING —
          资格定义与投资者类别，须经法律顾问及最终法域／监管分类确定]。
          容量上限：[PENDING — 数值]。最低承诺：[PENDING]。
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          <span className="signal">结构与载体</span>——[PENDING —
          实体注册未完成]。基金 vs 管理账户、注册地、行政管理人、审计机构、
          托管——均以最终文件为准。本页不应被读作已选定的结构。
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          <span className="signal">经济条款</span>——[PENDING]。管理费、
          业绩费、门槛／高水位机制。此处刻意不列数值：不写出是诚实，编造
          则不是。
        </p>

        <div className="marginalia">§5</div>
        <p className="body-paragraph">
          <span className="signal">流动性 — 锁定期与赎回</span>——[PENDING —
          流动性、锁定期、赎回与通知条款，以最终文件为准]。
        </p>

        <div className="marginalia">§6</div>
        <p className="body-paragraph">
          <span className="signal">法域与实体</span>——[PENDING —
          实体注册未完成；注册地、法域、监管分类、适用法律与争议管辖均未定，
          全部以最终文件为准]。
        </p>

        <div className="marginalia">§7</div>
        <p className="body-paragraph">
          <span className="signal">报告与透明</span>——[PENDING —
          报告内容、频率与披露材料，以最终文件为准]。
        </p>

        <div className="marginalia">§8</div>
        <p className="body-paragraph">
          <span className="signal">何种情形不予建立关系</span>
          <span className="em">——</span>凡其约束会迫使我们以损害流程为代价去
          满足的委托，我们都不接受。关系若需如此，我们便不进入。
        </p>

        <div className="marginalia">§9</div>
        <p className="body-paragraph">
          <span className="signal">接洽</span>——[PENDING — 联系方式／流程]。
          在实体存在之前，<code>contact@</code> 为占位符。
        </p>

        <div></div>
        <p className="signature">
          本材料仅向通过身份验证的受邀对象提供，仅供参考。它不构成投资建议，
          不构成出售要约或购买任何权益的要约邀请，亦不构成任何推荐。任何关系
          均仅以双方签署的最终文件为准；本页所载内容不具约束力。在该等要约
          属违法的法域内，不予提供。
        </p>
      </div>
    </main>
  );
}
