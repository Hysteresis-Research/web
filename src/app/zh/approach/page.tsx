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
        <p className="body-paragraph">研究驱动的交易公司，在我们这里，是一种特定的怀疑。我们承认市场处理信息的速度超过任何由人组成的合议机制；同时观察到这种处理是<span className="signal">不均匀的</span><span className="em">——</span>存在一些时段，价格尚未追上结构上为真之事。</p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">迟滞 (hysteresis) 描述的不是单纯的延迟，而是路径依赖<span className="em">——</span>系统在经历冲击之后不会回到原点，历史会被吸收进结构本身。在磁学里，磁场保留它被磁化的方式；在经济学里，regime 变化结束很久之后，预期与资本配置仍然带着那次变化的记忆。这个框架是借来的；纪律是经验主义的。我们度量基本面与价格之间的差距，按差距的持久度配仓<span className="em">——</span>不按信心，不按预测差距闭合的时刻。仓位必须有写入的退出规则；没有的，不在方法之内，与判断的正确性无关。</p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">这要求接受一个事实<span className="em">——</span>一套始终违背自我中「想被证明正确」那一部分的纪律，从设计上也会偶尔在拉长的上涨里令你失望。我们把这份失望，当作日后不会站在同一次 regime 变化错误一方的代价。</p>

        <div></div>
        <p className="signature">一篇更长的文字正在准备<span className="em">——</span>关于我们在 regime 转换点上看什么、持仓期间追踪什么、什么时候让一个 thesis 退役。等到文字沉淀之后，会在此发表。</p>
      </div>
    </main>
  );
}
