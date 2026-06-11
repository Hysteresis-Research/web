import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import Reveal from '../../../components/Reveal';
import SectionHead from '../../../components/SectionHead';
import VRPChart from '../../../components/charts/VRPChart';

export const metadata: Metadata = pageMetadata({
  title: '溢价，正在压缩 · 札记 · Hysteresis Research · 迟滞研究',
  description:
    'BTC 的方差风险溢价从 2022 年起逐年被压。2026 年至今是 −2.1 个波动率点——结构性溢价已经穿过零线。',
  path: '/zh/notes/premium-compressing',
  lang: 'zh-Hans',
  type: 'article',
});

export default function PremiumCompressingZh() {
  return (
    <main lang="zh-Hans">
      <section className="article wrap" id="note">
        <SectionHead
          numeral="七"
          title="溢价，正在压缩"
          folio="札记 · 2026-04-26 · BTC"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">压了四年。</span>方差风险溢价在 2026 年翻成了负的。
        </Reveal>

        <div className="essay">
          <Reveal as="figure" className="fig-plate">
            <figcaption>
              <span className="fig-label">
                <b>图一</b> — 逐年溢价
              </span>
              <p className="fig-cap">
                DVOL − RV30 的逐年均值，单位为波动率点；2026 年截至 2026-04-26。
              </p>
            </figcaption>
            <VRPChart />
          </Reveal>

          <Reveal as="p" className="lede">
            整整四年，DVOL——Deribit 的 BTC 隐含波动率指数——平均比三十日实现波动率高出 6.6 个波动率点。机械地把这个差卖掉，每月一笔：五十笔，胜率 66%，Sharpe 1.34。课本里那个卖波套息。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            +9.7、+7.9、+6.6、+5.1——逐年往下，今年是 −2.1。穿过了零线。
          </Reveal>

          <Reveal as="p">
            这个差年年在收窄。2022 年是 +9.7，往后是 +7.9、+6.6、+5.1。2026 年至今是
            {' '}
            <span className="signal">−2.1 个波动率点</span>
            ——结构性溢价穿过了零线。ETF 上线，把散户的尾部对冲需求吸走了；DVOL 期货又给了卖方另一条做空这个指数的路；做市商之间一卷，剩下那点也收没了。
          </Reveal>

          <Reveal as="p">
            只有一条带条件的规则活了下来：跳过前七日内最大单日涨跌超过 5% 的月份。笔数从五十降到三十六，Sharpe 从 1.34 升到 1.80，最大回撤砍掉一半。溢价没有消失——它退回到了平静的范式里。眼下这个状态，三十日波差处在 41 百分位、近期实现波动率压过隐含波动率，规则给的指令是：等。
          </Reveal>

          <Reveal as="p" className="close">
            人人都在收的溢价，注定被收平。
          </Reveal>
        </div>
      </section>
    </main>
  );
}
