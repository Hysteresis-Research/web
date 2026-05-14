import BHMark from '../../../components/BHMark';
import VRPChart from '../../../components/charts/VRPChart';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: '溢价，正在压缩 · 札记 · Hysteresis Research · 迟滞研究',
  description: 'BTC variance risk premium 自 2022 年起年年压缩。2026 年至今：−2.1 vol points。结构性溢价已穿越零线。',
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
          四年的压缩。Variance risk premium 在 2026 年转负。
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
          整整四年，DVOL<span className="em">——</span>Deribit 的 BTC 隐波指数<span className="em">——</span>平均高出 30 日实波 6.6 个 vol-points。机械地卖那道缝隙、每月一次：50 笔交易，66% 胜率，Sharpe 1.34。教科书短波套息。
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          缝隙每年都在收窄。2022 年 +9.7。+7.9、+6.6、+5.1。2026 年至今是{' '}
          <span className="signal">−2.1 vol points</span>{' '}
          <span className="em">——</span>结构性溢价已穿越零线。ETF 上线吸收了散户尾部对冲需求。DVOL 期货给了卖方另一条做空指数的路径。做市商之间的竞争收掉了剩下的部分。
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          一条条件规则活下来。跳过那些前 7 日内最大单日涨跌幅超过 5% 的月份。36 笔交易而非 50 笔；Sharpe 从 1.34 升到 1.80；最大回撤减半。溢价没有消失<span className="em">——</span>它退到了平静的市场状态里。当前状态下，spread30 处于第 41 百分位、近期实波高于隐波，规则给的指令是：等。
        </p>

        <div></div>
        <p className="signature">
          人人都在收割的溢价，注定会被压缩。
        </p>
      </div>
    </main>
  );
}
