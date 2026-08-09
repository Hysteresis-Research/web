import VoltaDealStack from '../../../components/charts/VoltaDealStack';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import Reveal from '../../../components/Reveal';
import SectionHead from '../../../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: '算力，按基建融资 · 札记 · 迟滞研究',
  description:
    '一家成立六个月的公司报出 $10B、六年期的算力合同，壳租自比特币矿企，GPU 按合同现金流来融资。市场读的是条款书，不是标题。',
  path: '/zh/notes/compute-underwritten',
  lang: 'zh-Hans',
  type: 'article',
});

export default function ComputeUnderwrittenZh() {
  return (
    <main lang="zh-Hans">
      <section className="article wrap" id="note">
        <SectionHead
          numeral="五"
          title="算力，按基建融资"
          folio="札记 · 2026-08-09 · COMPUTE"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">注册六个月，签下百亿美元的订单簿。</span>
          有意思的不在金额，在融资结构——以及市场拿它做了什么。
        </Reveal>

        <div className="essay">
          <Reveal as="figure" className="fig-plate">
            <figcaption>
              <span className="fig-label">
                <b>图一</b> — 交易结构
              </span>
              <p className="fig-cap">
                2026-08-04 公告口径的头条条款。三层结构，两份长约，一条解约条款。
              </p>
            </figcaption>
            <VoltaDealStack lang="zh" />
          </Reveal>

          <Reveal as="p" className="lede">
            2026-08-04，Volta 结束隐身：种子加 A 轮合计 $300M，投后
            $2.4B，a16z 与 Altimeter 共同领投，NVIDIA、Michael Dell
            家族办公室、Azora、Matter Venture Partners
            跟投；同日宣布与「某头部 AI 实验室」的 $10B、六年期算力合作。彭博当天把这家实验室指为
            Anthropic。两边都没有确认。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            2026 年 1 月注册，约 100–150 人，分在伦敦、Palo Alto、纽约。两位创始人出走前，在
            Brookfield 搭的就是 AI 基础设施平台。
          </Reveal>

          <Reveal as="p">
            创始人是基建投资人，不是芯片人。Ricard Boada 和 Sofia Gumuzio 此前在
            Brookfield 管 AI 基础设施投资；云软件靠收购补上——Genesis
            Cloud，今年春天买的，慕尼黑的 GPU 云，2018 年起服务过约 20,000
            名用户。看它的组织架构，产品不是数据中心，是一套挂着数据中心的资本结构。
          </Reveal>

          <Reveal as="p">
            结构值得画准。Volta 与 Bitdeer（纳斯达克上市的比特币矿企）在挪威
            Tydal 签了 16 年托管租约：121 MW IT 负载，毛容量约 133
            MW，四座机房，合同金额约 $4.7B，均价约 $202/kW·月，年递增
            3%，另有八年续约选择权，行使后 24 年合计约
            $8B。首批机房目标 2026-12-31 点亮，其余 2027-03-31。Bitdeer
            出楼、出水电、管运营；Volta 出装进去的东西——NVIDIA Vera Rubin
            世代、Dell 整机——和上面那层云。约 $1.3B 的信用证站在租约后面，由
            J.P. Morgan 与另一家全球大行安排。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            按公告口径，每 IT 兆瓦·年：进账 ≈$13.8M，壳与电付出
            ≈$2.4M。中间的价差，买的就是 GPU。
          </Reveal>

          <Reveal as="p">
            按公告口径算账：$10B 除以六年、摊到 121 MW，每 IT 兆瓦·年进账约
            $13.8M；租约成本约 $2.4M。中间的价差——每兆瓦·年约 $11.4M，一年约
            $1.37B——用来供养真正的资本品：这一代 GPU 系统每兆瓦
            $30–40M，整站 $4–5B。六年合同收入大约是设备账单的 2–2.5
            倍，这是熟悉的 neocloud 算术。不熟悉的是顺序。Volta
            先签合同，再拿合同现金流去融设备：与 Azora 的 $5B
            计划（项目股权加优先债）就是干这个的，非稀释，一站接一站。「算力已经成为新的基础设施资产类别」是
            CEO 的原话，也是全部论点：它押的东西很具体——算力合同，可以像收费公路一样被融资。
          </Reveal>

          <Reveal as="p">
            这笔账旁边要放一条诚实条款：按 Volta 的说法，$10B
            是整个合作期内的承诺总额，Tydal
            只是第一个项目。要是后面的站点并进同一个额度，每兆瓦的数字就会被摊薄。公告把数字挂在这次部署上；而这个数字，目前也只活在公告里。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            2025 年定价公告，2026 年读条款书：确定承诺 ≈$2.7B，对着 $4.7B
            的标题数；信用证盖住名义金额的 28%。
          </Reveal>

          <Reveal as="p">
            市场拿这些做了什么，是信息量更大的那笔行情。6 月 29 日 Bitdeer
            披露过这份租约的存在，没给财务条款，当天股价跌了约 7%。8 月 4
            日条款和租户的报道身份都公开了，盘前涨
            23%，收盘却基本回吐——股价约 $11.5，对应市值约
            $2.8B。从开盘到收盘之间，市场找到了真正要紧的两个数：第 10
            年起的免罚解约权把确定承诺压到约 $2.7B（Benchmark 的算法）；$1.3B
            信用证盖住名义 $4.7B 的 28%。卖方研究倒是照涨——Needham
            把目标价从 $19 提到 $22。一年前这个盘面见标题就买、之后再问；现在它开始读条款了。对
            Volta
            想创造的这个资产类别来说，这恰恰是真正的承销开始的样子。
          </Reveal>

          <Reveal as="p">
            结构里尚未闭合的，是久期。收入锁六年，租约走十六年。如果算力紧到
            2032 年，续约就把错配缝上；如果没有，第 10 年的解约权是 Volta
            的安全门——同一条款换个符号，就是 Bitdeer
            的尾部风险。再加上那张标准清单：单一客户、单一站点、供应商贴着股东名单（NVIDIA
            既投钱也卖货；Dell 出整机，投钱的是 Michael Dell
            家办）、芯片世代还在爬产，以及五个月后的点亮期限。12
            月 31 日这个日期，是整个故事里少有的、可以直接验证的东西。
          </Reveal>

          <Reveal as="p">
            电力的论证我们五月写过——
            <Link href="/zh/notes/power-constrained-compute">
              电力是算力的硬约束
            </Link>
            ：约束挪到了电，和建电要花的那些年。Tydal
            是同一个论证穿上了条款书：稀缺的输入是挪威水电上一座带电的壳，矿工持有它，一家
            AI 实验室据报愿意通过一家成立六个月的中间层付 $10B
            去够到它。实验室买确定性，矿工把兆瓦换成合同租金，中间层的全部利润，是把确定性从零件拼装出来的手工费。这层利润签在合同上，还没落进账里——点亮在五个月后。耐不耐久，要看
            Azora 计划的第一张条款书。
          </Reveal>

          <Reveal as="p" className="close">
            百亿美元的标题是叙事，第 10 年的解约条款是数据。我们读条款，并且盯两个日子：12
            月 31 日，以及任何一方在正式场合说出客户名字的那一天。这不是仓位；是一个值得归档的结构。
          </Reveal>

          <Reveal as="p" className="colophon">
            <b>出处。</b>租约条款、费率、分期与信用证，出自 Bitdeer 2026-08-04
            的公告与 Form 6-K；融资、估值、股东名单、$10B 合作、Azora 计划与
            Genesis Cloud 收购，出自 Volta
            同日的发布；租户身份为彭博报道，双方均未确认；≈$2.7B
            的确定承诺算法来自 Benchmark，$22 目标价来自
            Needham，均为转述；当日价格取自盘面。每兆瓦的数字，是我们基于上述披露的自算。
          </Reveal>
        </div>
      </section>
    </main>
  );
}
