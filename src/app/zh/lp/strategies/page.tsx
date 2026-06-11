import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { requireViewer } from '@/lib/gate';
import Reveal from '@/app/components/Reveal';
import SectionHead from '@/app/components/SectionHead';

// Allowlist 层路由：不在公开导航、不在 sitemap、noindex/nofollow。
// 内容门控：本页位于策略包下游。在策略包通过 codex 对抗复核、且 W3
// 证伪关解决之前，不得声称任何 program「已验证」。此处成熟度措辞刻意
// 为「验证中／数据受限」，绝不写「已验证」。中文为原生撰写，非英译；
// 签名句 long enough to be measured 按 zh-style-guide 保留英文。
export const metadata: Metadata = {
  ...pageMetadata({
    title: 'LP · 策略 · Hysteresis Research · 迟滞研究',
    description: 'LP 策略（不公开）。',
    path: '/zh/lp/strategies',
    lang: 'zh-Hans',
  }),
  alternates: { canonical: '/zh/lp/strategies' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function LpStrategiesZh() {
  await requireViewer('/zh/lp/strategies');
  return (
    <main lang="zh-Hans">
      <section className="article wrap" id="lp-strategies">
        <SectionHead numeral="三" title="策略" folio="LP · 不公开" />

        <Reveal as="p" className="standfirst">
          一套有纪律的流程，若干领域。
        </Reveal>

        <div className="essay">
          <Reveal as="p" className="lede">
            <span className="leadin">
              <span className="signal">流程</span>
            </span><span className="em">——</span>
            我们只跑一套有纪律的流程，覆盖若干领域。持久的优势在方法，不在
            一个所主张的 regime edge：进场前先写死可证伪的 kill condition、
            小 N 上接受独立的对抗复核、只对已测到我们标准的东西投资本
            <span className="em">——</span>不靠工具、不靠信息、也不靠一个所
            主张的 edge。研究项目研究跨资产范式转换：基本面与价格之间、
            可能持续到 <span className="signal">long enough to be
            measured</span> 的那些 gap。
          </Reveal>

          <Reveal as="p">
            <span className="signal">数字资产</span><span className="em">——</span>
            一个带硬回撤控制叠加的系统化趋势程序。最接近部署的领域：正在对
            自己的证伪检验做走查验证，只有通过那道检验之后才承载资本
            <span className="em">——</span>在此之前不会。
          </Reveal>

          <Reveal as="p">
            <span className="signal">波动率</span><span className="em">——</span>
            隐含波动率以滞后重定价到新的已实现范式。今天只通过一个指数代理
            研究，并因它曾依赖的溢价已被压缩而审慎对待。按设计是卫星，不是
            支柱。
          </Reveal>

          <Reveal as="p">
            <span className="signal">全球宏观</span><span className="em">——</span>
            同一套系统化读法跨股指、金属、能源与汇率<span className="em">——</span>
            一个单一市场台子在结构上看不到的跨资产视角。设计完成；在能诚实
            检验它的数据历史到位前，按住不发。
          </Reveal>

          <Reveal as="p">
            <span className="signal">电力受限算力</span>
            <span className="em">——</span>一个已归档的 v0.1 研究方向（休眠、
            未注资；无所主张的 edge）：AI 算力的约束已从芯片移到电力，问题是
            市场是否滞后于它所依赖的电力供给层。它仍是一个开放研究问题，不
            承载任何资本；未来任何激活都是另行决定，那段滞后的测量、及其在
            更早范式上的复现都不在手。详见 thesis note，
            <span className="em">《电力是算力的硬约束》</span>（待发布）。
          </Reveal>

          <Reveal as="p">
            <span className="signal">就绪度</span><span className="em">——</span>
            数字资产程序是唯一的近期程序；那些 v0.1 研究方向（波动率迟滞、
            跨资产、电力受限算力）作为来源被归档——休眠、未注资、不承载
            规模，仍是开放研究，而非一份在跑的清单。资本按已测到我们标准的
            程度与容量来分配，绝不按最响的机会。未被测到那个标准的命题不承载
            规模<span className="em">——</span>我们直说，而非暗示相反。每一种
            在被注资时所依据的条款，按 scheme 分列于本页旁的{' '}
            <Link href="/zh/lp/terms">条款</Link>。
          </Reveal>

          <Reveal as="p" className="close">
            研究自循环，资本跟随。
          </Reveal>
        </div>
      </section>
    </main>
  );
}
