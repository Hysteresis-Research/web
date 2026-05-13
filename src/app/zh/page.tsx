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
          Hysteresis Research · 迟滞研究 是一家研究驱动的量化交易公司。我们在跨资产
          regime 转换点交易<span className="em">——</span>在基本面与价格之间，
          <span className="signal">差距足够久、足够可测</span>的地方。
        </p>

        <div className="marginalia">§3</div>
        <p className="signature">研究自循环，资本跟随。</p>
      </div>
    </main>
  );
}
