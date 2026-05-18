import type { Metadata } from 'next';
import BHMark from '@/app/components/BHMark';
import { pageMetadata } from '@/lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'LP · 公司 · Hysteresis Research · 迟滞研究',
    description: 'LP 公司概况（不公开）。',
    path: '/zh/lp/firm',
    lang: 'zh-Hans',
  }),
  alternates: { canonical: '/zh/lp/firm' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function LpFirmZh() {
  await requireViewer('/zh/lp/firm');
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">firm</div>
        <h1>公司</h1>

        <div></div>
        <p className="lede">长期视角。</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          <span className="signal">愿景 — 北极星目标</span>
          <span className="em">——</span>让 $50&ndash;100B 的跨资产资本，
          穿过一台单 PM 的工业级认知引擎运作；以此证明在叙事密集的市场里，
          约束在纪律，不在人头。既定轨迹（公司的志向，非对投资者回报的
          预测）：3 年，覆盖加密与宏观主标的的统一范式模型，流程基础设施
          上线；5 年，多策略分支运作（范式·事件驱动·边界），首篇公开
          thesis 论文；10 年，单 PM 工业化流程被验证、可迁移。
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          <span className="signal">使命</span><span className="em">——</span>
          每个交易日，把市场观察转化为可证伪的命题，跑完整条流水线
          <span className="em">——</span>假设 &rarr; 数据 &rarr; 独立交叉验证
          &rarr; 范式整合 &rarr; 仓位定量<span className="em">——</span>让知识
          比资本复利得更快。交易是研究的副产品。仓位是衡量信念的那杆秤。
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          <span className="signal">价值</span><span className="em">——</span>
          这是有序的，不是并列的。两者冲突时，靠前的那条裁决。认知诚实先于
          P&amp;L：流程质量独立于它产出的结果来评判。可证伪先于信心：无法被
          证伪的命题，我们不持有。交叉验证先于速度：结论不从单一事例外推。
          存活先于最优：回撤上限高于回报优化。容量纪律先于增长：宁可拒绝
          资本，不稀释边际。
        </p>

        <div className="marginalia">§5</div>
        <p className="body-paragraph">
          <span className="signal">边界</span><span className="em">——</span>
          会交易的：跨资产范式转换交易（主仓）；以持仓结构为条件的事件驱动
          交易；加密与传统市场之间的数据口径错位；以形式化方法交易的派发／
          吸筹结构。不会的：流动性提供或做市（与容量冲突）；高频微结构套利
          （不是我们的边际所在）；叙事或情绪驱动交易；无跨事件复现的「独特
          机会」；框架无法解释的 P&amp;L<span className="em">——</span>不在
          范围内。
        </p>

        <div></div>
        <p className="signature">交易是研究的副产品。</p>
      </div>
    </main>
  );
}
