import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { requireViewer } from '@/lib/gate';
import Reveal from '@/app/components/Reveal';
import SectionHead from '@/app/components/SectionHead';

// Allowlist 层路由：不在公开导航、不在 sitemap、noindex/nofollow。
// 内容门控：条款按 scheme 分（每个 program 一个隔离组合），但每一项
// 法律／商业数值仍按设计为 [PENDING]——「不写出是诚实，编造则不是」。
// 按 scheme 的差异只陈述 FUND-TERMS §0 的设计原则（赎回须慢于各 program
// 的流程视野；流动性匹配各自范式时钟），在法律顾问与最终文件之前、且在
// 策略包通过 codex 之前，不断言任何数值。中文为原生撰写，非英译。
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
      <section className="article wrap" id="lp-terms">
        <SectionHead numeral="四" title="条款" folio="LP · 不公开 · 草案" />

        <Reveal as="p" className="standfirst">
          草案 · 无约束力 · 非要约或要约邀请。
        </Reveal>

        <div className="essay">
          <Reveal as="p" className="lede">
            本页陈述关系成立所依据的姿态。它<span className="em">不是</span>私募
            备忘录、认购协议或任何最终文件，对任何一方均不构成义务。实体注册
            尚未完成；下列每一项法律与商业事实，在核实前均为显式的{' '}
            <span className="signal">[PENDING]</span> 占位。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            §2 — 关系的性质
          </Reveal>

          <Reveal as="p">
            <span className="signal">关系的性质</span>
            <span className="em">——</span>承载力被刻意设为有限。我们只在方法
            容量仍成立的窗口内接受资本，会拒绝那些会稀释它的资本。这里的关系按公司
            的节奏走，不按日历：研究先于资本，准入取决于双向尽调，而非募资
            时间表。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            §3 — 为何条款按 scheme 分
          </Reveal>

          <Reveal as="p">
            <span className="signal">为何条款按 scheme 分</span>
            <span className="em">——</span>每个 program 作为各自隔离的 scheme
            运行，有各自的条款，而非单一混同的一套。理由是结构性的：每个
            program 的流程需要一个比它要过滤的噪声更长的持有视野。一个自身
            赎回节奏快于那个视野的 scheme，会被迫在流程本要扛过去的那种环境里
            清仓<span className="em">——</span>成为它本要熬过的那个被迫卖方。
            所以流动性匹配每个 program 的流程视野
            <span className="em">——</span>视野越慢，锁定越长、赎回越慢。授权
            范围很宽；只有清过验证门的 program 才被注资并收费，其余授权但
            休眠。下列每个数字都是 <span className="signal">[PENDING]</span>；
            写出的是排序原则，不是数值。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            §4 — Scheme A
          </Reveal>

          <Reveal as="p">
            <span className="signal">Scheme A · 数字资产</span>
            <span className="em">——</span>范式时钟：数周至数月。最接近部署的
            program；只有在通过自己的证伪检验之后才注资，不到那时不注资。
            认购、赎回、锁定期、gate、最低额：
            <span className="signal">[PENDING]</span>，以最终文件为准，且匹配
            此时钟。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            §5 — Scheme B
          </Reveal>

          <Reveal as="p">
            <span className="signal">Scheme B · 波动率</span>
            <span className="em">——</span>一个已归档的 v0.1 研究方向：休眠、
            未注资、无所主张的 edge。一个容量极小的卫星，今天仅通过指数代理
            研究。条款：<span className="signal">[PENDING]</span>，待未来任一
            激活、属另行决定；此处的容量按设计是被拒绝而非被放大的。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            §6 — Scheme C
          </Reveal>

          <Reveal as="p">
            <span className="signal">Scheme C · 全球宏观</span>
            <span className="em">——</span>一个已归档的 v0.1 研究方向：休眠、
            未注资、无所主张的 edge。跨资产，设计完成、数据受限。条款：
            <span className="signal">[PENDING]</span>，待未来任一激活、属另行
            决定；匹配其时钟，且不松于 Scheme A。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            §7 — Scheme D
          </Reveal>

          <Reveal as="p">
            <span className="signal">Scheme D · 电力受限算力</span>
            <span className="em">——</span>一个已归档的 v0.1 研究方向：休眠、
            未注资、无所主张的 edge。范式时钟为多个季度，是书里最长的；按 §3
            的原则，在未来任一激活时，它会在四者中锁定最长、赎回最慢。
            条款：<span className="signal">[PENDING]</span>，待未来任一激活、
            属另行决定；刻意是最慢的。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            §8–§13
          </Reveal>

          <Reveal as="p">
            <span className="signal">经济条款</span><span className="em">——</span>
            费用按 scheme 收取，且只对清过门后被注资的 scheme 收取；未验证的
            scheme 不收费。管理费、业绩费、门槛／高水位机制：
            <span className="signal">[PENDING]</span>。此处刻意不列数值：不写
            出是诚实，编造则不是。
          </Reveal>

          <Reveal as="p">
            <span className="signal">结构与载体</span>
            <span className="em">——</span>在考虑中的设计是隔离组合结构，每个
            scheme 一个被环隔离的组合，使范围可被宽泛授权、而只对已验证的
            scheme 注资。<span className="signal">[PENDING]</span>
            <span className="em">——</span>载体、注册地、行政管理人、审计机构、
            托管，均以法律顾问及最终文件为准。本页不应被读作已选定的结构。
          </Reveal>

          <Reveal as="p">
            <span className="signal">法域与实体</span>
            <span className="em">——</span><span className="signal">[PENDING]</span>
            <span className="em">——</span>实体注册未完成；注册地、监管分类、
            适用法律与争议管辖均未定，全部以最终文件为准。
          </Reveal>

          <Reveal as="p">
            <span className="signal">报告与透明</span>
            <span className="em">——</span><span className="signal">[PENDING]</span>
            <span className="em">——</span>报告内容、频率与披露材料，按 scheme
            以最终文件为准。
          </Reveal>

          <Reveal as="p">
            <span className="signal">何种情形不予建立关系</span>
            <span className="em">——</span>凡其约束会迫使我们以损害流程为代价去
            满足的委托，我们都不接受。某个 scheme 的流动性条款就是这样一条
            约束：要求赎回快于该 scheme 流程视野的委托，我们不进入
            <span className="em">——</span>因为那会把基金变成它的流程本要
            熬过的那个被迫卖方。
          </Reveal>

          <Reveal as="p">
            <span className="signal">接洽</span><span className="em">——</span>
            <span className="signal">[PENDING]</span>
            <span className="em">——</span>联系方式／流程。在实体存在之前，
            <code>contact@</code> 为占位符。
          </Reveal>

          <Reveal as="p" className="close">
            本材料仅向通过身份验证的受邀对象提供，仅供参考。它不构成投资建议，
            不构成出售要约或购买任何权益的要约邀请，亦不构成任何推荐。任何关系
            均仅以双方签署的最终文件为准；本页所载内容不具约束力。在该等要约
            属违法的法域内，不予提供。
          </Reveal>
        </div>
      </section>
    </main>
  );
}
