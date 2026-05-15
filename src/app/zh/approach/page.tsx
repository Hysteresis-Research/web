import BHMark from '../../components/BHMark';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: '方法 · Hysteresis Research · 迟滞研究',
  description: '关于方法——度量基本面和价格之间的差距，按差距能撑多久配仓，不靠信心。',
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
        <p className="body-paragraph">研究驱动的交易公司，在我们这儿，是一种带方向的怀疑。我们承认市场比人快<span className="em">——</span>比任何由人组成的判断机制都快；同时也看到，市场的消化是<span className="signal">不均匀的</span><span className="em">——</span>有那么一些时段，价格还没跟上结构里真正在变的部分。</p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">迟滞 (hysteresis) 讲的不是单纯的延迟，是路径依赖<span className="em">——</span>系统在冲击之后回不到原来的点，那次冲击进了结构里。在磁学里，磁场记得自己被磁化的方式；在经济学里，宏观范式变化结束很久之后，预期和资本配置还带着那次变化的痕迹。框架是借来的，纪律是从经验里磨出来的。我们度量基本面和价格之间的差距，按差距能撑多久配仓<span className="em">——</span>不靠信心，也不押它什么时候收口。每个仓位都得带写好的离场规则；没写规则的，不算这套方法里的仓位，判断对不对都一样。</p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">这要求你接受一件事<span className="em">——</span>一套经常和心里那个「想被证明对」的部分对着干的纪律，结构上也会偶尔在拉长的上涨里让你失望。我们把这份失望，当作以后不会站在同一次宏观范式转换错误一边的代价。</p>

        <div></div>
        <p className="signature">一篇更长的文字正在写<span className="em">——</span>关于我们在宏观范式转换处看什么、持仓期间盯什么、什么时候让一个论断退场。文字成型之后，发在这里。</p>
      </div>
    </main>
  );
}
