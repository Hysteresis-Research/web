import MnavDilutionExplorer from '../../../components/charts/MnavDilutionExplorer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import Reveal from '../../../components/Reveal';
import SectionHead from '../../../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: '飞轮，反着转 · 札记 · 迟滞研究',
  description:
    '折价之下，增发普通股买币会毁灭每股比特币。被市场欢呼的那一周，稀释程度大约是它所恐慌的那次卖币的六十倍。',
  path: '/zh/notes/flywheel-reverse',
  lang: 'zh-Hans',
  type: 'article',
});

export default function FlywheelReverseZh() {
  return (
    <main lang="zh-Hans">
      <section className="article wrap" id="note">
        <SectionHead
          numeral="五"
          title="飞轮，反着转"
          folio="札记 · 2026-06-12 · MSTR"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">卖币上了头条，</span>增发没有——尽管后者的稀释，是前者的六十来倍。
        </Reveal>

        <div className="essay">
          <Reveal as="figure" className="fig-plate">
            <figcaption>
              <span className="fig-label">
                <b>图一</b> — 增厚的判据
              </span>
              <p className="fig-cap">
                增发买币要抬高每股比特币，只有当 f&nbsp;&times;&nbsp;mNAV&nbsp;&gt;&nbsp;1
                ——f 是融资里真正买币的比例。拖动股价和这个比例，看标记点何时越线。
              </p>
            </figcaption>
            <MnavDilutionExplorer lang="zh" />
          </Reveal>

          <Reveal as="p" className="lede">
            2026-06-08，MSTR 披露：上一周它增发普通股融了约 $181M，拿去买了
            1,550 枚比特币；股价当天涨了 5.6%。而两周前，它卖了 32 枚币——2022
            年以来头一回——头条写着「一个时代的终结」。可若换上对持有人真正复利的那把尺——每股比特币——被欢呼的这一周，造成的损害大约是被恐慌的那一次的六十倍。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            卖那 32 枚，每股比特币动了 −0.004%。增发那一周，动了 −0.24%——而且每周重来。
          </Reveal>

          <Reveal as="p">
            人人都熟的那台引擎，是在溢价时正转的。当股价高过它账上那批比特币的价值，卖一股、拿钱去买币，留下的每一股反而分到了
            <em>更多</em>的币。溢价养着增厚，增厚又撑住溢价——反身性的全部逻辑就在这里，过去两年它一直成立。
          </Reveal>

          <Reveal as="p">
            把溢价的符号翻过来，引擎也就翻了过来。我们在{' '}
            <Link href="/zh/notes/mstr-mnav">折价，正在收窄</Link>{' '}
            里跟踪的那段折价，始终没有合上——MSTR 增发时，它就在 0.78&times; 附近。以低于其所代表价值的价格发一股、再按全价买币，新来的这股，带着的币
            <em>少</em>于已经在外的那些。折价之下，飞轮不会空转，它倒着转。
          </Reveal>

          <Reveal as="p">
            判据只有一行。每融一元，每股比特币要上升，唯有当{' '}
            <span className="leadin">f&nbsp;&times;&nbsp;mNAV&nbsp;&gt;&nbsp;1</span>
            ——f 是融资里真正买币的那一份。哪怕 f&nbsp;=&nbsp;1、每一元都买币，你仍然需要溢价。f
            一旦小于 1，门槛还要往上抬：按这一周的 0.56，折价得反转到 1.79&times;
            mNAV，增发才不再稀释。当时离这个数远得很。上面图里的标记点，离增厚那条线还远——把股价往上拖，看它要走多远。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            <i>f</i> = 0.56，是因为 $181M 里只有 $101M 买了币。其余变成现金——去喂优先股的股息，不是去喂账上的比特币。
          </Reveal>

          <Reveal as="p">
            那为什么还要在折价里增发？因为另一个选项更难看。融来的 $181M 里，$101M
            买了币，剩下的堆成现金——那是给永续优先股付息的缓冲，一年已近 $10 亿、还在涨，对着一门现金流稀薄的软件生意。用 0.78&times;
            卖普通股去喂这笔票息，是在「不再卖更多币」的前提下，让机器继续运转的最不难看的办法。普通股东被稀释、被劣后，为的是护住优先股。
          </Reveal>

          <Reveal as="p">
            这就绕回了那处颠倒。终结「永不卖币」的那 32 枚，按每股算，是个舍入误差：−0.004%。市场鼓掌的那次普通股增发，一周之内从每股比特币里拿走了
            −0.24%，而且只要折价还在，就每周重演。盘面怕的是那个符号，欢呼的是那笔算术。会复利的，是算术。
          </Reveal>

          <Reveal as="p" className="close">
            飞轮反转，不是对价格的判决。它是一笔成本，按周支付，计在持有人唯一真正累积的那个单位里。我们在数着。
          </Reveal>
        </div>
      </section>
    </main>
  );
}
