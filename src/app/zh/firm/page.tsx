import BHMark from '../../components/BHMark';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: '公司 · Hysteresis Research · 迟滞研究',
  description: '关于规模——一门纪律，方法决定上限，规模不决定。',
  path: '/zh/firm',
  lang: 'zh-Hans',
});

export default function FirmZh() {
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
        <p className="lede">关于规模。</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">研究驱动的交易公司，在我们这里，本质是一门纪律<span className="em">——</span>方法决定上限，规模不决定。市场不缺故事；撑住一条策略的，是<span className="signal">方法的严谨</span>，而非团队的大小。</p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">我们的方向，是在单 PM 架构下，把跨资产配置（加密 + 全球宏观）做到机构级体量。</p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">三年内<span className="em">——</span>主要品种形成一套统一的宏观范式模型，可复用，由日常流程不断校验。五年内<span className="em">——</span>多个子策略并行运行，发表第一篇公开研究文字，将方法的核心记录下来。十年内<span className="em">——</span>方法在几轮市场环境里得到验证，形成可以被外部继承的方法形态。</p>

        <div></div>
        <p className="signature">研究在前，资本在后。</p>
      </div>
    </main>
  );
}
