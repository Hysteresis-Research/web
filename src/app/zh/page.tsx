import BHMark from '../components/BHMark';

export const metadata = {
  title: 'Hysteresis Research · 迟滞研究',
  description:
    'Hysteresis Research · 迟滞研究 是一家研究驱动的量化交易公司，在价格滞后基本面之处运作。',
};

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
          Hysteresis Research · 迟滞研究 是一家研究驱动的量化交易公司。
          我们关注 regime 转换之间的迟滞段<span className="em">——</span>
          基本面已经移动、<span className="signal">市场尚未充分计入</span>
          的那段距离。
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          Hysteresis · 系统迟滞，描述路径依赖<span className="em">——</span>
          系统在经历冲击后不会回到原点，历史被吸收进结构本身，持续影响未来。
          我们用这套视角研究当下的传导链：
          <span className="signal">AI 算力扩张推升能源约束，能源约束推升资本成本，资本成本重估长久期资产</span>。
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          公开分享的是方法与具体观察<span className="em">——</span>
          在 <a href="/zh/notes" className="email-link">/notes</a>。
          交易是量化的，不公开。
        </p>

        <div></div>
        <p className="signature">研究自循环，资本跟随。</p>
      </div>
    </main>
  );
}
