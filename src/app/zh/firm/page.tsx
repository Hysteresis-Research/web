import BHMark from '../../components/BHMark';

export const metadata = {
  title: '公司 · Hysteresis Research · 迟滞研究',
  description: '关于规模——一种纪律，其上限由方法设定，而非由规模设定。',
};

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
        <p className="body-paragraph">研究驱动的交易公司，在我们的模型里，是一种纪律<span className="em">——</span>其上限由方法设定，不由规模设定。在 narrative 充裕的市场里，撑起一支策略的是<span className="signal">方法的严谨</span>，不是运营它的人头。</p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">我们的志向，是把跨资产配置<span className="em">——</span>覆盖加密与全球宏观<span className="em">——</span>以单 PM practice 的形态承担到机构级别的体量；借此证明：在这个体量上，约束力来自手艺，不是 org chart。</p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">三年内<span className="em">——</span>跨资产主要品种的统一 regime 模型成形，以及让它保持诚实的运行支撑。五年内<span className="em">——</span>多 sleeve 并行，首篇公开 thesis paper 发表。十年内<span className="em">——</span>方法本身被验证，并且可以被继承。</p>

        <div></div>
        <p className="signature">研究自循环，资本跟随。</p>
      </div>
    </main>
  );
}
