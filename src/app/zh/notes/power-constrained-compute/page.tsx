import BHMark from '../../../components/BHMark';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: '电力是算力的硬约束 · 札记 · Hysteresis Research · 迟滞研究',
  description: 'AI 算力的硬约束从硅转向电力——作为一个已归档的 v0.1 研究问题提出，不是仓位。',
  path: '/zh/notes/power-constrained-compute',
  lang: 'zh-Hans',
  type: 'article',
});

export default function PowerConstrainedComputeZh() {
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">2026<br/>05-16</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">notes</div>
        <h1>{`电力是算力的硬约束`}</h1>

        <div className="marginalia">§1</div>
        <p className="body-paragraph">{`Hysteresis Research · 迟滞研究 是一家研究驱动的量化交易公司。覆盖全球宏观与加密衍生品。持久优势在方法，不在所主张的 regime edge。本文是来自我们 regime-hysteresis 研究项目的一个研究论证；它不是所主张的 edge，也不是一个仓位。`}</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">{`本文写的这个 regime 改变，是我们认为值得为它建立测量的那一类。下面是论证，不是仓位。`}</p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">{`过去十年的大部分时间里，AI 算力的约束是硅。能力的边际增长等于芯片的边际增长，市场也学会了精确地为这条链条定价：芯片设计、晶圆制造、模型实验室、超大规模厂商的资本开支。这是当前股票市场里被覆盖得最充分、被叙事得最密集的一个复合体。`}</p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">{`这个约束已经移动了。部署算力的边际上限不再是芯片，而是驱动它的电力、输送它的电网，以及建成两者各自所需的数年工期。卡点从市场盯得最紧的那一层，转移到了它盯得最松的那一层：电力的物理供给，以及承载它的基础设施本身。`}</p>

        <div className="marginalia">§5</div>
        <p className="body-paragraph">{`市场是否已经以同样的精度为这一层重新定价，是一个经验问题，不是一句口号——而它有可能没有，原因是结构性的，不是信息性的。电力侧的基本面不会因为一则公告就重估一只股票；它只在多个季度的确认之后重估。而设定锚点的卖方分析师，手里仍然是这一轮 regime 之前建立的需求模型：其中用电量每年只增长零点几个百分点。一条已经变形的需求曲线，不会在它变形的当天就走进那些模型；它是缓慢抵达的，其时间尺度恰好是一个以月度业绩被考核的 discretionary 仓位无法等待的尺度。`}</p>

        <div className="marginalia">§6</div>
        <p className="body-paragraph">{`如果这一判断成立，那么一个已经改变的电力需求 regime，与一个尚未重估的电力供给复合体之间的距离，就不是一个等待被抢跑的传闻。本文要框出的开放问题，是它是否是一段可能持续存在的 gap——long enough to be measured。`}</p>

        <div className="marginalia">§7</div>
        <p className="body-paragraph">{`这最后一句既是全部的纪律，也是前提。我们关心的不是这个 theme；theme 很响，而响的部分已经被定价。我们关心的是因为慢而安静的那一部分：这个滞后本身，它是否以同一种"需求转向基础设施"的方式在更早的 regime 里出现过，以及在什么明确的条件下它会闭合或反转。一个值得持有的 thesis，是一个事先写明什么会证伪它的 thesis——也是一个只有在那段距离真正被测到那个标准之后、而非之前，才赢得头寸的 thesis。这是一个已归档的 v0.1 研究方向（休眠、未注资；无所主张的 edge），恰恰因为它是这套检验里最难的一种；它不承载任何资本，测量本身、以及它在更早 regime 上的复现都不在手。`}</p>

        <div className="marginalia">§8</div>
        <p className="body-paragraph">{`这就是工作本身——把一次观察到的 regime 改变，转化为一个可证伪的问题，让研究、而非叙事，决定它是否、以及何时承载头寸。`}</p>

        <div></div>
        <p className="signature">{`研究自循环，资本跟随。`}</p>
      </div>
    </main>
  );
}
