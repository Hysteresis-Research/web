import BHMark from '../../../components/BHMark';
import VRPChart from '../../../components/charts/VRPChart';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: '溢价，正在压缩 · 札记 · Hysteresis Research · 迟滞研究',
  description: 'BTC variance risk premium 从 2022 年起年年被压。2026 年至今：−2.1 vol points。结构性溢价已经穿过零线。',
  path: '/zh/notes/premium-compressing',
  lang: 'zh-Hans',
  type: 'article',
});

export default function PremiumCompressingZh() {
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">2026<br/>04-26</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">notes</div>
        <h1>溢价，正在压缩</h1>

        <div></div>
        <p className="lede">
          四年的压缩。Variance risk premium 在 2026 年翻负。
        </p>

        <div></div>
        <figure className="note-figure">
          <VRPChart />
          <figcaption>
            年度 DVOL − RV30 均值，单位 vol points。2026 截至 2026-04-26。
          </figcaption>
        </figure>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          整整四年，DVOL<span className="em">——</span>Deribit 的 BTC 隐波指数<span className="em">——</span>平均比 30 日实波高出 6.6 个 vol-points。机械地卖这个差，每月一笔：50 笔，66% 胜率，Sharpe 1.34。典型的卖波 carry。
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          这个差每年都在收窄。2022 年 +9.7。+7.9、+6.6、+5.1。2026 年至今是{' '}
          <span className="signal">−2.1 vol points</span>{' '}
          <span className="em">——</span>结构性溢价穿过了零线。ETF 上线吃掉了散户的尾部对冲需求。DVOL 期货给了卖方另一条做空指数的路。做市商之间的竞争把剩下的部分也收掉了。
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          一条条件规则活了下来。跳过前 7 日内最大单日涨跌超过 5% 的月份。36 笔，不是 50 笔；Sharpe 从 1.34 升到 1.80；最大回撤减半。溢价没消失<span className="em">——</span>它退到了平静的 regime 里。现在这个状态下，spread30 在 41 百分位、近期实波高于隐波，规则的指令是：等。
        </p>

        <div></div>
        <p className="signature">
          人人都在收的溢价，注定要被压平。
        </p>
      </div>
    </main>
  );
}
