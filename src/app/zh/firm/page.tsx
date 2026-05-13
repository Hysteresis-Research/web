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
        <p className="body-paragraph">研究驱动的交易公司是一种纪律<span className="em">——</span>其上限由方法、而非规模决定。在 narrative 过剩的市场里，撑起一支策略的从来不是团队规模，而是<span className="signal">方法的严谨</span>。</p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">我们的志向，是以单基金经理模式，把跨资产配置<span className="em">——</span>覆盖加密与全球宏观<span className="em">——</span>承担到机构级别的体量。</p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">三年内<span className="em">——</span>跨资产主要品种的统一宏观范式模型形成可复用版本，并由日常运行流程持续检验。五年内<span className="em">——</span>多子策略并行运作，首篇公开研究论文发表，记录方法的核心结构。十年内<span className="em">——</span>方法在多轮市场环境下被验证，并具备可被外部继承的形态。</p>

        <div></div>
        <p className="signature">研究自循环，资本跟随。</p>
      </div>
    </main>
  );
}
