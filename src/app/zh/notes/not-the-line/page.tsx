import BHMark from '../../../components/BHMark';
import WalkforwardChart from '../../../components/charts/WalkforwardChart';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: '不是那条线，是那一触 · 札记 · Hysteresis Research · 迟滞研究',
  description: '一条长 EMA 信号过六轮 walk-forward。盯"状态"的交叉规则在 OOS 失效；盯"事件"的版本活下来。',
  path: '/zh/notes/not-the-line',
  lang: 'zh-Hans',
  type: 'article',
});

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
          一条长 EMA 信号&ldquo;用着感觉对&rdquo;，多个周期都看着对。六轮 walk-forward；只有一个形态活下来。
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
          信号是 400 周期指数移动均线<span className="em">——</span>我们追踪了好几年的一条线。第一轮测试双 EMA 交叉，4 个周期，49 组参数。in-sample 最优 Sharpe 1.10。进入 OOS 加每月重选，跌至 0.16。
        </p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          &ldquo;在线上还是在线下&rdquo;这一状态本身依赖于当下的 regime。一个 regime 里能赢的规则，换个 regime 就是错的，walk-forward 参数选择在两者之间反复切换。三轮变体<span className="em">——</span>单线版本、日线周期、四种 regime 切分<span className="em">——</span>都给出同样的形态。
        </p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">
          第四轮把问题重写了。
          <span className="signal">
            不在状态，在事件。
          </span>{' '}
          一个具体的 15 分钟形态<span className="em">——</span>价格碰到 EMA，并在同一根 bar 内反穿回去<span className="em">——</span>给出 walk-forward Sharpe 1.87。真 holdout 只有 13 笔交易、Sharpe 2.25<span className="em">——</span>样本量撑不起验证，留作提示性观察，不作结论。再叠任何 filter 都让它变差。
        </p>

        <div></div>
        <p className="signature">
          信号不在那条线本身，在那条线上发生的事。
        </p>
      </div>
    </main>
  );
}
