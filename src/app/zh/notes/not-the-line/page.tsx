import BHMark from '../../../components/BHMark';
import WalkforwardChart from '../../../components/charts/WalkforwardChart';

export const metadata = {
  title: '不是那条线，是那一触 · 札记 · Hysteresis Research · 迟滞研究',
  description:
    '长 EMA 信号经过六轮 walk-forward。基于"状态"的交叉规则在 OOS 失效；基于"事件"的版本活下来。',
};

export default function NotTheLineZh() {
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">2026<br/>05-06</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">notes</div>
        <h1>不是那条线，是那一触</h1>

        <div></div>
        <p className="lede">
          一个长 EMA 信号&ldquo;用着感觉对&rdquo;，跨多个时间框架。六轮 walk-forward；只有一个形态活下来。
        </p>

        <div></div>
        <figure className="note-figure">
          <WalkforwardChart />
          <figcaption>
            各轮 Sharpe，in-sample 与 walk-forward / holdout 对比；活下来的形态高亮。
          </figcaption>
        </figure>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">
          信号是 400 周期指数移动均线<span className="em">——</span>我们盯了好几年的一条线。第一轮测试双 EMA 交叉，4 个时间框架，49 个参数组合。in-sample 最优 Sharpe 1.10。跑到 OOS 配每月重选，跌到 0.16。
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          &ldquo;处于线的上方还是下方&rdquo;这个状态是 regime-dependent 的。在某个 regime 里能赢的规则，到下一个 regime 就是错的，walk-forward 选参数器会在两者之间反复切换。三轮变种<span className="em">——</span>单线版本、日线时间框架、四种机制拆分<span className="em">——</span>都给出同样的形状。
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          第四轮重构了问题。
          <span className="signal">
            停止度量状态。度量事件。
          </span>{' '}
          一个具体的 15 分钟形态<span className="em">——</span>价格触碰 EMA，然后在同一根 bar 内重新穿越回去<span className="em">——</span>给出 walk-forward Sharpe 1.87。在真 holdout 上，13 笔交易，Sharpe 2.25。在它之上加的每一个 filter 都让它更差。
        </p>

        <div></div>
        <p className="signature">
          信号不是那条线。在那条线上发生的事才是。
        </p>
      </div>
    </main>
  );
}
