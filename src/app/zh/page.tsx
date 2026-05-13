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
        <p className="tagline">
          Hysteresis Research · 迟滞研究 是一家研究驱动的量化交易公司。我们工作在 regime
          转换的迟滞处<span className="em">——</span>基本面已经移动、
          <span className="signal">市场尚未充分计入</span>的那段距离里。
        </p>

        <div className="marginalia">§3</div>
        <p className="signature">研究自循环，资本跟随。</p>
      </div>
    </main>
  );
}
