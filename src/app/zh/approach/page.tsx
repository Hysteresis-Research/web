import BHMark from '../../components/BHMark';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: '方法 · Hysteresis Research · 迟滞研究',
  description: '关于方法——度量基本面与价格之间的差距，按差距能持续多久配仓，不靠信心。',
  path: '/zh/approach',
  lang: 'zh-Hans',
});

export default function ApproachZh() {
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">approach</div>
        <h1>方法</h1>

        <div></div>
        <p className="lede">关于方法。</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">研究驱动的交易公司，在我们这里，是一种有方向的怀疑。我们承认市场快于任何由人组成的判断机制；同时也看到，市场的消化<span className="signal">并不均匀</span><span className="em">——</span>总有那么一些时段，价格尚未跟上结构里真正在变的部分。</p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">迟滞 (hysteresis) 不是单纯的延迟，而是路径依赖<span className="em">——</span>系统在冲击之后回不到原来的点，那次冲击进入了结构本身。在磁学里，磁场记得自己被磁化的方式；在经济学里，宏观范式变化结束很久之后，预期与资本配置仍带着那次变化的痕迹。框架是借来的，纪律是从经验里磨出来的。我们度量基本面与价格之间的差距，按差距能持续多久配仓<span className="em">——</span>不靠信心，也不押它何时收口。每个仓位都必须带写好的离场规则；没写规则的，不算这套方法里的仓位，判断对不对都一样。</p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">这要求你接受一件事<span className="em">——</span>一套经常与心里那个「想被证明对」的部分对着干的纪律，结构上也会偶尔在拉长的上涨里让你失望。我们把这份失望，视为以后不会站在同一次宏观范式转换错误一边的代价。</p>

        <div></div>
        <p className="signature">一篇更长的文字正在写<span className="em">——</span>关于我们在宏观范式转换处看什么、持仓期间追踪什么、何时让一个论断退场。文字成型之后，在此发表。</p>
      </div>
    </main>
  );
}
