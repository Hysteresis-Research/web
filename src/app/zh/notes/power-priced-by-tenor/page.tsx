import PowerTenorChart from '../../../components/charts/PowerTenorChart';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import Reveal from '../../../components/Reveal';
import SectionHead from '../../../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: '电力，按期限定价 · 札记 · 迟滞研究',
  description:
    '相隔一个月的两份算力电力合约：二十年租约约每兆瓦时 $270，九十天可退的租赁约 $5,000。兆瓦的价格取决于签多久。曲线为什么陡，什么会把它压平。',
  path: '/zh/notes/power-priced-by-tenor',
  lang: 'zh-Hans',
  type: 'article',
});

export default function PowerPricedByTenorZh() {
  return (
    <main lang="zh-Hans">
      <section className="article wrap" id="note">
        <SectionHead
          numeral="五"
          title="电力，按期限定价"
          folio="札记 · 2026-08-16 · COMPUTE"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">相隔一个月的两份合约，给算力级电力标了价。</span>
          合在一起读，兆瓦的价格并非一个水平；它取决于你愿意签多久。
        </Reveal>

        <div className="essay">
          <Reveal as="figure" className="fig-plate">
            <figcaption>
              <span className="fig-label">
                <b>图一</b> — 兆瓦的期限结构
              </span>
              <p className="fig-cap">
                每兆瓦时价格对合约期限，双对数坐标。条款均为公开口径；每兆瓦时的算术是我们的，SpaceX
                那一点是 Somani 的估算。
              </p>
            </figcaption>
            <PowerTenorChart lang="zh" />
          </Reveal>

          <Reveal as="p" className="lede">
            今年 7 月 6 日，TeraWulf 宣布与 Anthropic 签下 20 年租约，地点在肯塔基州
            Hawesville 的 Justified Data 园区：约 401 MW 关键 IT
            负载，首个租期内合同收入约 $19B，首批容量 2027 年下半年投用，2028
            年初到满 401 MW，预计有投资级信用支持。拿这一个数除另外几个数，租约成交在每
            IT 兆瓦时约 $270，折合每千瓦·月约 $197。三周之前，SpaceX 与
            Reflection AI 签约：2026-07-01 起每月 $150M，付到 2029 年，总额最多
            $6.3B，标的是 Memphis 城外 Colossus 2 的 NVIDIA GB300
            算力；头三个月过后，任何一方提前 90 天通知即可退出。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            另一笔长期限的成交，来自
            <Link href="/zh/notes/compute-underwritten">我们八月的札记</Link>
            ：Volta 向 Bitdeer 租 Tydal，16 年，均价约 $202/kW·月，折合每兆瓦时约
            $277。两家矿企，两块大陆，一个价。
          </Reveal>

          <Reveal as="p">
            这两样东西不是同一种商品，差别正是要点。TeraWulf 卖的是带电园区，GPU
            由租户自带；SpaceX 卖的是算力本身，GPU 含在价里。Neel
            Somani，前对冲基金电力量化研究员，他免费发布的入门书《Power
            2026》是这篇札记的由头；按他自己的粗算，SpaceX 这笔的价格量级在每兆瓦时
            $5,000 上下。这个数背后的兆瓦分配没有公开，所以水平只能当估算看，排序却没有疑问，大约十八倍。差价的大头是硅的租金，不是电。可看看另一根轴。便宜的那份合约跑二十年，贵的那份九十天就能结束。两份条款书凑到一起并非巧合。这是融资本身。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            批发电价成交在每兆瓦时 $10–150。长期限的带电园区，是它的两到五倍。九十天的算力期权，再高一个数量级。
          </Reveal>

          <Reveal as="p">
            想想要交付便宜的那一端，得先建什么。给算力园区配的表后燃气电厂，量级在
            $300M；成熟开发商配上优质租户，建设期债务大约按 SOFR 加 225
            个基点定价，贷款人放款之前要看的是好几年的合同现金流。宾州的 Homer
            City，那座 2023 年关停的 2 GW 煤电站，正在原址重建为 4.4 GW
            的燃气电厂，造价约
            $10B，靠的就是这一类承购。二十年撑得起这个，九十天什么都撑不起：它只是一份对容量的期权，而稀缺容量上的期权，向来昂贵。所以这两个成交价是同一个市场在一条曲线上的两个点。签得长，你按接近成本加成的价格买到兆瓦；签得短，你为随时离开的权利付稀缺租金。
          </Reveal>

          <Reveal as="p">
            曲线之所以陡，是因为供给没法按买方的钟点回应。三家重型燃气轮机厂商，GE
            Vernova、Siemens Energy、Mitsubishi
            Power，全部售罄，积压从数月到数年；正在用的泄压阀是改装的航空发动机和中国进口件。一条约束真咬合时，大致就是这副样子：有人溢价绕道。并网排队以年计。Homer
            City 的空气许可 2025 年 11
            月才批下来，而那块地接入电网已经半个世纪。另一边，按 Somani
            的数字，数据中心已占美国用电约
            5%，负荷每两年左右翻一倍。约束咬合一天，期限曲线就陡一天，签不了二十年的买家，都在替签得了的买家付钱。
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            什么会把它压平：涡轮机积压不再拉长；每笔新合约的纯电费率与期限在压缩；一纸费率类别的裁定。政策的重定价，比物理快。
          </Reveal>

          <Reveal as="p">
            什么会把曲线压平，值得提前写下来。第一，涡轮机的积压：看二阶导，别看水平，排队在哪个季度停止拉长。第二，每一笔新算力租约的纯电费率和期限；要是下一笔二十年成交明显低于
            $270，或者下一笔短期限交易远低于 Somani
            的估算，稀缺租金就在压缩。第三，政策层。一份不具约束力的 Ratepayer
            Protection Pledge，一份 NERC
            关于数据中心会抬高容量价格的警告，一座已经投票把数据中心请出去的城市（Monterey
            Park）；一纸费率类别的裁定，给这个板块重定价的速度，快过任何一台涡轮机的交付。还有一条我们单独盯着的读法：比特币矿企手里
            $30–50/MWh 的存量电力合同，对着 $270 的二十年 AI 租约。TeraWulf
            以前就是矿企。这个价差就是转型论点，如今它是一个成交价，不再是一张投影。
          </Reveal>

          <Reveal as="p">
            电力的论证我们
            <Link href="/zh/notes/power-constrained-compute">五月写过</Link>
            ，条款书的读法
            <Link href="/zh/notes/compute-underwritten">八月写过</Link>
            。这一篇是同一条线再往前拉一格。Volta
            结构里没闭合的那条腿是期限：收入六年，租约十六年。到了这里，期限不再是没闭合的腿，它就是价格。
          </Reveal>

          <Reveal as="p" className="close">
            兆瓦如今有了期限结构。二十年，接近成本买下它；九十天，按稀缺价租用它。这不是仓位；是一条值得归档的曲线。
          </Reveal>

          <Reveal as="p" className="colophon">
            <b>出处。</b>TeraWulf–Anthropic 条款出自 TeraWulf 2026-07-06
            的公告；SpaceX–Reflection 条款为 2026-06-22
            的报道（彭博、CNBC、Axios）；Volta–Bitdeer 费率出自 Bitdeer 2026-08-04
            的公告。批发价区间、电厂造价与融资利差、涡轮机积压、Homer City
            数字、数据中心占美国负荷的比例以及 ≈$5,000 的估算，出自 Neel Somani《Power
            2026: Electricity Pricing in the Age of AI》（power2026.ai），其一手来源为
            EIA、FERC 与各 ISO 公告。每兆瓦时与每千瓦·月的数字，是我们基于上述披露的自算。
          </Reveal>
        </div>
      </section>
    </main>
  );
}
