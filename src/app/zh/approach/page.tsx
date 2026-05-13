import BHMark from '../../components/BHMark';

export const metadata = {
  title: '方法 · Hysteresis Research · 迟滞研究',
  description:
    '关于方法——度量基本面与价格之间的差距，按持久度而非信心配仓。',
};

export default function ApproachZh() {
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">approach</div>
        <h1>方法</h1>

        <div></div>
        <p className="lede">关于方法。</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">研究驱动的交易公司，在我们这里，是一种特定的怀疑。我们承认<span className="em">——</span>市场对信息的处理速度，快过任何人类合议组织；同时观察到<span className="em">——</span>这种处理是<span className="signal">不均匀的</span>：存在一些时段，价格尚未追上结构上为真之事。</p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">迟滞 (hysteresis) 是这种延迟的技术名。在磁学里，它描述磁场的路径依赖；在经济学里，是 regime 变化之后预期的路径依赖。这个框架是借来的；纪律是经验主义的。我们度量基本面与价格之间的差距，而不是预测它闭合的时刻。我们按持久度配仓，不按信心配仓。Thesis 描述世界；仓位是一笔交易<span className="em">——</span>一个没有写入退出规则的正确判断，是运气，不是技艺。</p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">这要求接受一个事实<span className="em">——</span>一套始终让你「想被证明对」的那部分心智失望的纪律，按其构造，也会偶尔在拉长的上涨里令你失望。我们把这份失望，当作日后不会站在同一次 regime 变化错误一方的代价。</p>

        <div></div>
        <p className="signature">一篇更长的文字正在准备<span className="em">——</span>关于我们在 regime 转换点上看什么、持仓期间追踪什么、什么时候让一个 thesis 退役。等到文字沉淀之后，会在此发表。</p>
      </div>
    </main>
  );
}
