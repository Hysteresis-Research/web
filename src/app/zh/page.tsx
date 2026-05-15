import BHMark from '../components/BHMark';
import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Hysteresis Research · 迟滞研究',
  description: 'Hysteresis Research · 迟滞研究——研究驱动的量化交易公司。做的是基本面已经动、价格尚未跟上的那段滞后。',
  path: '/zh',
  lang: 'zh-Hans',
});

export default function Home() {
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">est<br />2026</div>
        <h1>迟滞研究</h1>

        <div></div>
        <p className="lede">long enough to be measured.</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          Hysteresis Research · 迟滞研究<span className="em">——</span>
          研究驱动的量化交易公司。我们关注的是宏观范式转换之间的那段迟滞：
          基本面已经动，<span className="signal">价格尚未跟上</span>的那段距离。
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          迟滞 (hysteresis) 不是单纯的延迟，而是路径依赖
          <span className="em">——</span>冲击过后，系统回不到原来的点，
          那次冲击进入了结构本身。我们用这个视角看当下的传导链：
          <span className="signal">AI 算力扩张推升能源约束，能源约束推升资本成本，资本成本重估长久期资产</span>。
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          公开发表的，是方法与具体观察<span className="em">——</span>
          在 <a href="/zh/notes" className="email-link">/notes</a>。
          交易本身是量化的，不公开。
        </p>

        <div></div>
        <p className="signature">研究在前，资本在后。</p>
      </div>
    </main>
  );
}
