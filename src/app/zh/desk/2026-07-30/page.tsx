import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-30 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-30',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-30' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260730() {
  await requireViewer('/zh/desk/2026-07-30');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-30 · v2</span>
          <span>内部 · 仅供讨论 · v2 · 已过 codex 敌对式审计</span>
        </header>

        <div className="dn-body">

          <div className="dn-head">
            <div className="dn-mark" aria-hidden="true">
              <svg width="80" height="48" viewBox="0 0 100 60">
                <path
                  d="M 10 54 C 30 54, 38 53, 58 30 C 70 13, 78 7, 90 6 C 70 6, 62 7, 42 30 C 30 47, 22 53, 10 54 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="dn-lockup">
              <div className="dn-name">Hysteresis Research</div>
              <div className="dn-name-cn">迟 滞 研 究</div>
            </div>
            <div className="dn-stamp">
              BTC · spot
              <span className="dn-big">$64,018</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.04%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-30 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘口（现货 / 永续 / OI / 聪明钱 / 资金费）</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-30 00:05Z（快照钉，t == &ldquo;07-30 08:05&rdquo; 北京时间）</td>
                  <td className="dn-flag">
                    新鲜 · 1 分钟 · 锚定 00:05Z 行（北京 08:05）以便复现 · 文件尾部随实盘滚动
                    · 24h 窗口口径：头条 delta 用同一时钟的前一日基线 t == &ldquo;07-29 08:05&rdquo;
                    北京时间（端点减 24h 前的行，即 07-29 备忘锚点）。本次序列在子窗口间连续，故
                    4h/1h 流量块（含前一行基线，北京 07-30 04:05 / 07:05 至 08:05 钉）复现精确同时钟的
                    04:05 / 07:05 端点——无基线缺口需披露 · 24h 窗口内有一次 CVD 重置，位于 07-29 14:12
                    北京（06:12Z）：cb_cvd 13,175.0 → 91.9、fut_cvd −591.1 → 68.8，二者均按方法 A
                    （(重置前 − 起点) + (端点 − 重置后)）重置校正 · 资金费/流量行统计跨 1,441 行窗口；
                    溢价均值剔除空行
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + 一目均衡 + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-30 08:01 北京扫描（00:01Z）</td>
                  <td className="dn-flag">
                    滚动最新文件 · 原样归档于 /opt/desk-note/snapshots/2026-07-30-0008/ ·
                    较快照锚点约滞后 4 分钟 · 进行中 K 线 · 扫描现货 ≈ $63,994
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-30 00:00Z 快照</td>
                  <td className="dn-flag">
                    约滞后 5 分钟 · Deribit 指数 $64,137 vs 实时 $64,018 · IV 中位 43.3%
                    · 846 个合约 · 头条汇总 +75.1M vs 按到期滚加 +94.46M（= gex_summary.json
                    net_gex $94,462,727）——约 +19.36M 无法对平的来源面板缺口，按 DN-003 血缘披露，
                    且本次滚加再度高于头条（与 07-29 缺口符号相同），按到期条子合计恰为 +94.46M
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-30 00:00Z
                  </td>
                  <td className="dn-flag">约滞后 5 分钟 · 7d 1h K · 22 资产 · 167 行 · 已归档</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z 分数面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-29 22:17Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.8h · 周三 FRED 日频重印落地：10Y −4bp 至 4.61%（连续第四次缓和，
                    4.71 → 4.69 → 4.65 → 4.61），TIPS −3bp 至 2.41%，5Y5Y +4bp 至 2.28%，10Y 盈亏平衡
                    +6bp 至 2.26%，HY OAS +3bp 至 2.84% · MOVE 升至 74.2（+3.30）· DXY 101.39（−0.08）·
                    美联储净流动性 $5.917T（无新周频印数）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日线 / 周线 均线矩阵</td>
                  <td className="dn-v-cell">parquet 末根 2026-07-30 00:05Z（进行中收 $63,979.00）</td>
                  <td className="dn-flag">
                    同分钟锚点 · 偏移按实时现货 $64,017.99 重算 · W-SMA200 无法从 2023–2026
                    均线子集算出（188 周 K）；W-SMA150 可算，为 $76,627，但远在上方 / 闲置——
                    200W 周期底本身来自完整历史 / 陷阱监测状态，见下一行 · 末个已完成日收 07-29
                    $63,958.90（07-30 K 线仅 5 分钟）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 支撑监测</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · 末次重算 2026-07-27 00:11Z（今日未重跑）</td>
                  <td className="dn-flag">
                    200W 周期底可得——陷阱监测状态文件末次重算于 2026-07-27，载末个已完成周
                    2026-07-26 收 $65,375.10，W-SMA200 $63,311.02，连续站上 4（自 2026-07-05 起）。
                    今日独立跑一次完整 btcusdt_1m_*.parquet glob（361 周 K，2019–2026）复现同一
                    已完成周 W-SMA200 $63,311.02，并显示进行中周（截至 2026-08-02）W-SMA200 爬升至
                    $63,536。已结定底 $63,311（现货高出 +1.12%）；可算的 D-SMA50 $63,410 为最近的均线
                    支撑，现高出定底 +$99。24h 低 $63,313.81 仅高出已结定底 $2.79——一次一美元不差的防守
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日本 10Y</td>
                  <td className="dn-v-cell">FRED 月频 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月频 · 勿当实时</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT 枢轴、max-pain、行权价 IV、BTC/NQ 比值
                  </td>
                  <td className="dn-v-cell">本次未加载</td>
                  <td className="dn-flag">相关结论明确仅作框架（btc_ntt_analysis.html 为 JS 渲染，无法抽取）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">资金费 · 8h 年化</span>
              <span className="dn-v">+9.39%</span>
              <span className="dn-src">实时 · 原始 0.008571 字段 × 1095（本快照未顶在 +10.95% 上限）· 24h 均值 +8.19%（较 07-29 的 +4.70% 再热）· 最高 +10.95% 年化（0.01 字段，上限，515 / 1441 行）· 最低 +2.02% 年化（0.0018410 字段 @ 07-29 22:45 北京 / 14:45Z）· 0 / 1441 负行（07-29 为 300 / 1441）——人群重新单边拥挤做多，资金费从 07-29 的负行冲刷里直接来回到多头侧</span>
            </div>
            <div>
              <span className="dn-k">Δ 资金费 · 24h</span>
              <span className="dn-v bull">再热 · 0 负行</span>
              <span className="dn-src">区间 +2.02% / +10.95% 年化 · 均值 +4.70% → +8.19% 年化 · 07-29 的 300 个负行愈合至 0——聪明钱翻向的同时，杠杆重新单边拥挤做多进反弹</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+1.02%（+1,056.8 BTC）</span>
              <span className="dn-src">实时 · 103,286.0 → 104,342.8 · 扩张但呈派发形态——价格近平（−0.04%）而 OI 增长，聪明钱翻净空（Δ空 +4,273 / Δ多 −3,050），24h 主动盘在期货侧被抛（期货CVD −907.8 / taker −859.3）即便现货被买（现货CVD +2,210.0）：对着守住的定底新开空头，而非侦察仓要的需求驱动扩张</span>
            </div>
            <div>
              <span className="dn-k">散户（市场）多/空</span>
              <span className="dn-v">60.93 / 39.07</span>
              <span className="dn-src">live_db `mkt_long_pct` · 24h 低 58.88（07-29 21:03 北京 / 13:03Z），高 63.48（07-29 08:12 北京 / 00:12Z）——测底时去拥挤、随最后 4h 反弹再拥挤，较 07-29 的 63.41 大致持平</span>
            </div>
            <div>
              <span className="dn-k">聪明钱净 BTC</span>
              <span className="dn-v bear">−2,285（翻净空）</span>
              <span className="dn-src">实时 · 多 11,313.72 − 空 13,598.81 = −2,285.09 · 记录性买家自 07-21 14:36 北京 / 06:36Z 多头穿越以来首次翻净空——07-29 14:31 北京（06:31Z）多转空穿越（+898.5 → −1,294.5），测底时谷 −2,566 @ 07-30 04:26 北京（07-29 20:26Z），快照报 −2,285</span>
            </div>
            <div>
              <span className="dn-k">聪明钱 Δ vs 24h 前</span>
              <span className="dn-v bear">+5,038 → −2,285（−7,323，145% 摆幅）</span>
              <span className="dn-src">|Δ净|/前净 = 7,323.35 / 5,038.25 = 145.4% · Δ多 −3,050.0（多头被倒）同时 Δ空 +4,273.3（空头被堆）——完整翻向形态：非减仓，而是单一 24h 窗口内从净多到净空的反转</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.3% / 29.52%</span>
              <span className="dn-src">GEX 中位 IV · 跨 846 个合约的链上中位，非可交易价差 · 30D 收盘对收盘 RV = logret.std × √365 × 100，30 个日收益（parquet 末根 00:05Z）· 链上富价 ~+13.8pt · 29 收益替代口径 29.07%</span>
            </div>
            <div>
              <span className="dn-k">距 0γ 翻转</span>
              <span className="dn-v bull">+1.61%（上方）</span>
              <span className="dn-src">翻转 $63,001 · vs 实时现货 $64,018（+1.61%；64,017.99/63,001.34 − 1 = 1.614%）/ GEX 文件 Deribit 指数 $64,137（+1.80%；64,137.47/63,001.34 − 1 = 1.803%）——两个参照都为正，本图取现货侧 · 汇总 +75.1M 头条 / +94.46M 滚加——较 07-29 的 +100.4M / +116.31M 去 gamma，翻转向现货上抬 $285（$62,716 → $63,001），且一处温和的近月负值重现（30JUL 0DTE −5.60M）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                记录性买家滚离了——聪明钱从净多 +5,038 翻至净空 −2,285，为 07-21 穿越以来首次净空——
                但它是对着一处一美元不差守住的定底做的，所以熊派解决只兑现了一半
              </span>。07-29 备忘把整件事押在一个岔口：聪明钱是加仓进 D-EMA50 夺回（侦察仓武装），
              还是滚离进 $63,311 收盘破位（追空武装）。今日聪明钱滚离，且很狠——{' '}
              <span className="dn-tag bear">+5,038 → −2,285</span>，145% 摆幅，倒多（−3,050）同时堆空
              （+4,273）——整轮复苏里最干净的一次翻向。但定底没破：07-29 收{' '}
              <span className="dn-tag bull">$63,958.90</span>（+$55.30，第二根已完成阳线收盘），
              07-30 K 线迄今报 <span className="dn-tag bull">$63,979.00</span>，且 24h 低{' '}
              <span className="dn-tag bull">$63,313.81</span> 仅高出已结定底 200W $63,311.02{' '}
              <span className="dn-em">$2.79</span>——一次一美元不差的防守。所以盘面递给交易台半个熊派解决
              （聪明钱滚离），却没有那能武装交易的另一半（定底收盘破位）。而这道劈叉比仓位更深：
              聪明钱翻空的同时，<span className="dn-em">人群重新拥挤做多</span>——资金费再热到{' '}
              <span className="dn-tag bull">+8.19% 均值、0 / 1441 负行</span>（07-29 的负行冲刷完全愈合），
              散户报 60.93，而最后四小时是一次需求反弹（<span className="dn-tag bull">价 +0.72%、OI
              +1,512 扩张、现货/期货/taker CVD 全正</span>）自测底里收复。{' '}
              <span className="dn-em">派发：24h 内 OI 扩张 +1.02% 而价格原地踏步，记录性买家对着散户的买盘翻空</span>。
              D-EMA50 顶盖仍未夺回——现货站在{' '}
              <span className="dn-tag bear">D-EMA50 $64,883 下方 −1.33%</span>，整张矩阵上唯一为正的偏移
              就是紧贴定底之上的 D-SMA50 $63,410（+0.96%）——夺回多头的利率过滤器仍为{' '}
              <span className="dn-tag bear">FALSE</span>（周三 10Y 连续第四天缓和至 4.61%，现距 4.55% 门槛仅
              6bp）。所以侦察仓维持{' '}
              <span className="dn-em">DEFERRED 第七天、账本 FLAT</span>，其聪明钱腿如今比 FALSE 更糟
              （翻空，而非仅仅不加）。追空是镜像：其&ldquo;聪明钱滚离&rdquo;条件如今已满足，且一处温和的近月负值
              重现（30JUL 0DTE −5.60M），但定底在收盘上守住、本子整体仍{' '}
              <span className="dn-tag bull">+75.1M / +94.46M</span> 为正——所以空维持按兵不动，较自重置以来
              任何时点都更接近武装，但仍在等 $63,311 收盘。本备忘押在：聪明钱的翻空是预示一次终将武装追空的
              定底破位——还是聪明钱在淡化一处被人群带回上方的定底防守、织成一个熊陷阱。
            </p>

            <p>
              BTC 实时报 <span className="dn-tag">$64,018</span>，24h{' '}
              <span className="dn-tag bear">−0.04%</span>——实质持平——落在{' '}
              <span className="dn-tag">$64,723.90 / $63,313.81</span> 区间（高 @ 07-29 17:58 北京 /
              09:58Z，低 @ 07-30 05:09 北京 / 07-29 21:09Z 的隔夜测底）。{' '}
              <span className="dn-signal">这次定底在收盘上、也在下影上都守住了</span>：07-24
              $64,116.50 → 07-25 $64,338.10 → 07-26 $65,375.10 → 07-27 $63,720.80 → 07-28 $63,903.60 →{' '}
              <span className="dn-tag bull">07-29 $63,958.90（+$55.30）</span>，进行中的 07-30 K 线（5 分钟）报{' '}
              <span className="dn-tag bull">$63,979.00</span>。两根已完成的连续阳线收盘（07-28、07-29），
              07-30 进行中 K 线站在 07-29 之上，均在已结定底 200W $63,311 之上，均未夺回 D-EMA50 顶盖。
              均线矩阵仍是压顶阶梯：现货站在{' '}
              <span className="dn-tag bear">D-EMA20 $64,233（−0.33%）</span> /{' '}
              <span className="dn-tag bear">D-SMA20 $64,454（−0.68%）</span> 这对之下，站在{' '}
              <span className="dn-tag bear">D-EMA50 $64,883 下方 −1.33%</span>（顶盖，连续第六节的上方压力），
              而整张矩阵上唯一为正的偏移就是{' '}
              <span className="dn-tag bull">D-SMA50 $63,410（+0.96%）</span>，它现高出已结定底 +$99。{' '}
              <span className="dn-em">
                200W 周期底本次可得且获确认：陷阱监测状态（ma200w_trap_watch_state.json，末次重算
                2026-07-27 00:11Z——今日未重跑）载末个已完成周 2026-07-26 的 W-SMA200{' '}
                <span className="dn-tag bull">$63,311.02</span>，连续四周收在其上；今日独立跑完整
                btcusdt_1m_*.parquet glob（361 周 K）对已完成周复现同一 $63,311.02，进行中周（截至
                2026-08-02）爬升至 <span className="dn-tag">$63,536</span>。所以 $63,311 是已结定底
                （现货高出 +1.12%，三个日收在其上，07-29 21:09Z 低点 $63,313.81 在下影上高出 $2.79），
                D-SMA50 $63,410 是最近的均线支撑——一处正快速上抬逼近现货的汇合底。
              </span>{' '}
              侦察仓 07-22 ARMED，07-24 D-EMA50 夺回首度失败时转 DEFERRED，07-25/26/27/28/29
              维持递延——其价格腿与流量腿从未同时打成 TRUE。今日价格腿仍 FALSE（无顶盖夺回），
              聪明钱流量腿从 FALSE-减仓 变成 FALSE-翻空。账本维持 FLAT。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘口 · 定底一美元不差地守住（24h 低 $63,313.81 vs 已结定底 $63,311.02），落在第二根已完成阳线上（07-30 进行中站在 07-29 之上）· 但聪明钱翻净空 −2,285（07-21 穿越以来首次），倒多 −3,050、堆空 +4,273 · OI 扩张 +1.02% 呈派发形态 · 资金费再热到 +8.19% 均值、0 负行，人群重新拥挤做多 · 最后 4h 是自测底里的需求反弹 · 永续仍贴水</span>
            </h2>

            <p>
              <span className="dn-signal">
                聪明钱翻净空，人群却重新拥挤做多——两个本子在一处一美元不差守住的定底上指向相反
              </span>。现货 24h 近平（−0.04%），OI{' '}
              <span className="dn-tag bear">扩张 +1,056.8 BTC（+1.02%）</span>——103,286.0 → 104,342.8。
              平价上的 OI 扩张，一旦读清背后是谁，就是派发形态：24h 内主动盘在衍生品侧被抛（期货 CVD{' '}
              <span className="dn-tag bear">−907.8</span>，taker 净{' '}
              <span className="dn-tag bear">−859.3</span>）即便现货被买（现货 CVD{' '}
              <span className="dn-tag bull">+2,210.0</span>，跨 07-29 14:12 北京 / 06:12Z 的 cb_cvd 重置
              13,175.0 → 91.9 作方法 A 校正），而大单净跑了个薄薄的{' '}
              <span className="dn-tag bull">+162.0 BTC（765 笔）</span>。真正的提示是底下的仓位本子：OI 增长是因为{' '}
              <span className="dn-em">聪明钱堆空（+4,273）、倒多（−3,050）</span> 进这次扩张——对着守住的定底新开空头，
              而非新需求。永续在快照仍对现货{' '}
              <span className="dn-tag bear">贴水 −$97.67</span>（24h 均 −$83.12，区间 −$166.29 / +$24.03——
              四处孤立的一分钟溢价印数，绝大多数贴水），与现货主导、永续在后追赶的市场一致。1 分钟主动盘偏斜快照{' '}
              <span className="dn-tag bear">−13.4</span>（24h 均 −3.06，区间 −51.6 / +36.9）——在快照走弱。{' '}
              <span className="dn-em">聪明钱翻空、期货盘被抛的 OI 扩张，恰恰不是侦察仓要的需求驱动扩张；它是对着一处人群靠现货买盘防守的定底的派发。</span>
            </p>

            <p>
              聪明钱是最扎眼的——而这正是 07-29 备忘点名的熊派岔口。{' '}
              <span className="dn-signal">
                记录性买家自 07-21 穿越以来首次从净多翻净空，且是靠倒多又堆空一起做的
              </span>。聪明钱净 <span className="dn-tag bear">−2,285</span>（多 11,313.72 − 空 13,598.81 =
              −2,285.09）对 24h 前的 <span className="dn-tag bull">+5,038</span>——{' '}
              <span className="dn-tag bear">Δ净 −7,323（145% 摆幅）</span>（|−2,285.09 − (+5,038.25)| /
              5,038.25 = 145.4%）。拆解是完整的翻向形态：<span className="dn-tag bear">Δ多 −3,050.0</span>
              （倒多）同时 <span className="dn-tag bear">Δ空 +4,273.3</span>（堆空）。这不是 07-29 那种 −41%
              减仓——是一次反转。聪明钱于{' '}
              <span className="dn-tag bear">07-29 14:31 北京 / 06:31Z</span>（+898.5 → −1,294.5）多转空穿越，
              为锚定整轮复苏的 07-21 14:36 北京 / 06:36Z 多头穿越以来首次净空读数，并于{' '}
              <span className="dn-tag bear">07-30 04:26 北京 / 07-29 20:26Z</span> 探谷 −2,566——恰在隔夜测底处
              ——再在快照回到 −2,285。{' '}
              <span className="dn-em">再武装门槛的聪明钱腿如今比 FALSE 更糟：那个在 07-27 以 +214% 抄底防守定底、
              在 07-29 减仓 −41% 的买家，如今干脆翻了净空。这正是 07-29 备忘把追空门控其上的熊派提示——如今在场，
              但只到一半：聪明钱滚离了，定底没破。</span>
            </p>

            <p>
              杠杆与拥挤这两个读数走了反方向——聪明钱翻空的同时人群重新拥挤做多。{' '}
              <span className="dn-signal">
                资金费从 07-29 的负行冲刷直接来回到一个偏热的单边多头均值、零负行
              </span>：实时资金费 <span className="dn-tag bull">+9.39% 年化</span>（原始 0.008571 字段 × 1095，
              低于但逼近上限），24h 均值{' '}
              <span className="dn-tag bull">+8.19% 年化</span>（较 07-29 的 +4.70% 净再热），最高{' '}
              <span className="dn-tag">+10.95% 年化</span>（0.01 字段上限，515 / 1441 行），最低{' '}
              <span className="dn-tag">+2.02% 年化（0.0018410 字段 @ 07-29 22:45 北京 / 14:45Z）</span>，且{' '}
              <span className="dn-tag bull">0 / 1441 负行</span>——07-29 尚有 300 个负行，carry 已完全重新拥挤回多头侧。散户{' '}
              <span className="dn-tag">mkt_long_pct 60.93</span>（24h 低 58.88 @ 07-29 21:03 北京 / 13:03Z 于测底处，
              高 63.48 @ 07-29 08:12 北京 / 00:12Z）——测底时去拥挤、随反弹再拥挤，较 07-29 的 63.41 大致持平。{' '}
              <span className="dn-em">资金费/散户对着聪明钱翻空的再热，是当日核心劈叉：人群在付费做多这波反弹，
              而聪明钱本子正用新空淡化它。这是一个派发进强势的签名，而非需求驱动的夺回——恰是侦察仓所需对齐的反面。</span>
            </p>

            <p>
              分窗流量显示 24h 在衍生品侧被抛，但最后四小时是一次自测底里的干净需求反弹。24h：价{' '}
              <span className="dn-tag bear">−0.04%</span>，OI{' '}
              <span className="dn-tag bear">+1,056.8 BTC</span>，现货 CVD{' '}
              <span className="dn-tag bull">Δ +2,210.0</span>，期货 CVD{' '}
              <span className="dn-tag bear">Δ −907.8</span>，大单{' '}
              <span className="dn-tag bull">+162.0 BTC / 765 笔</span>，taker 净{' '}
              <span className="dn-tag bear">−859.3</span>——{' '}
              <span className="dn-em">现货被买而期货/taker 被抛，OI 扩张、聪明钱翻空：派发</span>。4h（至快照）：价{' '}
              <span className="dn-tag bull">+0.72%</span>，OI{' '}
              <span className="dn-tag bull">+1,512.5 BTC</span>，现货 CVD{' '}
              <span className="dn-tag bull">Δ +1,425.7</span>，期货 CVD{' '}
              <span className="dn-tag bull">Δ +853.7</span>，大单{' '}
              <span className="dn-tag bull">+369.3 BTC / 152 笔</span>，taker 净{' '}
              <span className="dn-tag bull">+838.9</span>——一次自隔夜低点起的真实需求反弹，OI 头一回是跟着买家扩张。1h：价{' '}
              <span className="dn-tag bull">+0.14%</span>，OI{' '}
              <span className="dn-tag bull">+365.5 BTC</span>，现货 CVD{' '}
              <span className="dn-tag bull">Δ +569.3</span>，期货 CVD{' '}
              <span className="dn-tag bull">Δ +230.6</span>，大单{' '}
              <span className="dn-tag bear">−35.4 BTC</span>，taker 净{' '}
              <span className="dn-tag bull">+227.5</span>——{' '}
              <em>反弹守住进快照，但大单转为微幅净卖，暗示需求在复苏高位处正变薄</em>。{' '}
              <span className="dn-em">
                基线口径：24h 块用同一时钟前一日行（07-29 08:05 北京）；4h / 1h 子窗口块用含前一行的基线
                （07-30 04:05 / 07:05 北京至 08:05 钉）。本次序列在这些窗口间连续，故那些含前一行读数复现精确同时钟的
                04:05 / 07:05 端点——无基线缺口需披露。单次 24h CVD 重置（07-29 14:12 北京 / 06:12Z）对 cb_cvd 与
                fut_cvd 均作方法 A 重置校正。
              </span>
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 计数滑至 1 多 / 7 空 / 2 中（原 1/6/3）· 但 regime 引擎翻向另一边——从趋势延续翻至 6/9 周期反转（JT&lt;0），均值回归 / 偏反弹，较 07-29 的 5/9 趋势延续 · 熊派框架里的多头对冲砝码 · 底背离簇扩至 7 个周期（15m/30m/1h/4h/8h/3d/1w，HTF 簇 8h/3d/1w）· 一根新鲜 1w 水下金叉 1 根 · 1M ⚡TD9 BUY</span>
            </h2>

            <p>
              <span className="dn-signal">
                框架计数偏熊了一点，但 regime 引擎翻向另一边——从趋势延续翻到均值回归——所以面板如今在共振上读&ldquo;卖出反弹&rdquo;，
                而 regime 说反弹更受青睐
              </span>。00:01Z 扫描读{' '}
              <span className="dn-tag">1 多 / 7 空 / 2 中</span>，共 10 个周期（1M 多；15m/30m/1h/4h/8h/1d/3d 空；
              12h/1w 中），计数上较 07-29 的 1/6/3 偏熊一档——净读仍是{' '}
              <span className="dn-tag bear">多周期共振偏空 · 卖出反弹</span>。但扎眼的是 regime 翻转：标签从 07-29 的{' '}
              <span className="dn-tag">5/9 周期动量（JT≥0）——趋势延续</span> 翻到今日的{' '}
              <span className="dn-tag bull">6/9 周期反转（JT&lt;0）——均值回归 / 偏反弹，趋势跟随需谨慎</span>。
              这是熊派框架栈里当日的多头对冲砝码：面板自身的周期引擎如今说下跌已被拉伸、均值回归反弹是基准情形。底背离簇扩至{' '}
              <span className="dn-tag bull">7 个周期（15m/30m/1h/4h/8h/3d/1w）</span>，HTF 簇被标记（8h/3d/1w），顶背离 4
              （15m/30m/1h/1d）。快周期回到中线：15m RSI <span className="dn-tag">53.4</span>（云下），30m RSI{' '}
              <span className="dn-tag">50.5</span>（云中，水下金叉 2 根），1h RSI <span className="dn-tag">49.5</span>（云中）。
              中周期仍沉重：4h RSI <span className="dn-tag">46.9</span>（云下，水下金叉 5 根），8h RSI{' '}
              <span className="dn-tag">45.8</span>（云下，刚穿），1d RSI <span className="dn-tag">48.9</span>（云中）。慢周期守住 HTF 筑底提示、未破且更新鲜：一根{' '}
              <span className="dn-tag bull">1w 水下金叉 1 根前</span>（DIF +280，早期），一根{' '}
              <span className="dn-tag bull">3d 水下金叉 6 根</span>，二者仍云下（3d ↑75.6k，1w ↑93.8k），以及顶周期超卖反转：{' '}
              <span className="dn-tag bull">1M ⚡ TD9 BUY 于 ≈$63,994</span>。{' '}
              <span className="dn-em">
                直读：计数偏熊，但 regime 翻到均值回归、HTF 底背离簇扩到七个周期——面板如今内部劈裂，在共振上喊&ldquo;卖出反弹&rdquo;，
                而其周期引擎与背离栈偏向一次反弹。对侦察仓这直接改变不了什么——1h/4h/8h/3d/1w 仍云下、无顶盖夺回——但这是一周里第一个
                偏向&ldquo;不再来一腿下跌&rdquo;的结构读数，这对追空要紧。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>周期</th><th>收盘</th><th>RSI</th><th>MACD 交叉</th><th>云（一目）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,988</td><td className="num">53.4</td><td className="bull">金叉（水下）8根</td><td className="bear">云下 ↑64.0k 19根</td><td>Sell 2</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">63,994</td><td className="num">50.5</td><td className="bull">金叉（水下）2根</td><td className="neut">云中 63.7k–64.3k 5根</td><td>Buy 1</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">63,988</td><td className="num">49.5</td><td className="bear">死叉（水上）9根</td><td className="neut">云中 63.7k–64.2k 3根</td><td>Sell 2</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">63,987</td><td className="num">46.9</td><td className="bull">金叉（水下）5根</td><td className="bear">云下 ↑64.7k 13根</td><td>Buy 3</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">63,992</td><td className="num">45.8</td><td className="bear">死叉（水上）20根</td><td className="bear">云下 ↑64.1k 刚穿</td><td>Sell 4</td><td>BULL hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">63,994</td><td className="num">46.9</td><td className="bear">死叉（水上）12根</td><td className="bull">云上 ↓63.6k 32根</td><td>Sell 2</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">63,988</td><td className="num">48.9</td><td className="bear">死叉（水上）3根</td><td className="neut">云中 61.6k–69.9k 10根</td><td>Buy 7</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">63,994</td><td className="num">44.5</td><td className="bull">金叉（水下）6根</td><td className="bear">云下 ↑75.6k 19根</td><td>Buy 2</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">63,994</td><td className="num">39.3</td><td className="bull">金叉（水下）1根</td><td className="bear">云下 ↑93.8k 26根</td><td>Sell 3</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">63,994</td><td className="num">43.8</td><td className="neut">—</td><td className="bull">云上 ↓47.0k 29根</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 08:01 北京扫描（00:01Z；滚动最新文件，原样归档于
                    /opt/desk-note/snapshots/2026-07-30-0008/）。头部提示：{' '}
                    <em>1M ⚡ TD9 BUY（超卖反转提示）</em>，{' '}
                    <em>顶背离 4：15m/30m/1h/1d · 底背离 7：15m/30m/1h/4h/8h/3d/1w（HTF 簇 8h/3d/1w）</em>，{' '}
                    <em>regime 6/9 周期反转（JT&lt;0）——均值回归 / 偏反弹，趋势跟随需谨慎（较 07-29 的 5/9 趋势延续翻转）</em>，
                    净读 <em>多周期共振偏空 · 卖出反弹</em>。扫描现货 ≈$63,994（各周期收 $63,987–$63,994；00:05Z 实时盘口锚点读现货
                    $64,017.99——约 $24 缺口为 4 分钟来源滞后加现货对 OHLCV/永续 的基差）。收盘为进行中 K 线；每个周期收线前一律当作暂定值。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              均线矩阵确认未夺回的顶盖与汇合底。现货 $64,018 站在{' '}
              <span className="dn-tag bull">D-SMA50 $63,410 上方 +0.96%</span>——整张矩阵上唯一为正的偏移，现高出已结定底 200W +$99。
              上方反弹撞到但未穿过近端这对：{' '}
              <span className="dn-tag bear">D-EMA20 $64,233（−0.33%）</span>、{' '}
              <span className="dn-tag bear">D-SMA20 $64,454（−0.68%）</span>，以及未夺回的{' '}
              <span className="dn-tag bear">D-EMA50 $64,883（−1.33%）</span>——顶盖，连续第六节的压力。再往上依次：{' '}
              <span className="dn-tag bear">W-EMA200 $67,146（−4.66%；种子）</span>、{' '}
              <span className="dn-tag bear">D-EMA100 $67,482（−5.13%）</span>——若夺回真来，这是工作首个均线目标，其间夹着庄家
              $66k–$72k 看涨墙带——{' '}
              <span className="dn-tag bear">D-SMA100 $69,214（−7.51%）</span>、{' '}
              <span className="dn-tag bear">W-SMA20 $69,398（−7.75%）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $69,459（−7.83%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $69,703（−8.16%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $70,336（−8.98%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $71,601（−10.59%）</span>、{' '}
              <span className="dn-tag bear">W-EMA150 $73,181（−12.52%；种子）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $73,130（−12.46%）</span>。现货下方唯一支撑是已结定底 200W{' '}
              <span className="dn-tag bull">$63,311（+1.12%）</span>，D-SMA50 $63,410 紧贴其上，进行中周的 W-SMA200 爬升至
              $63,536 贴在现货下方。远在上方且闲置：W-SMA150 $76,627（−16.45%）、W-EMA50 $78,355（−18.30%）、
              W-EMA100 $78,776（−18.73%）、W-SMA50 $84,339（−24.09%）、W-SMA100 $88,566（−27.72%）。{' '}
              <span className="dn-em">
                均线锚定 parquet 末根 2026-07-30 00:05Z（进行中收 $63,979.00）；偏移按实时现货 $64,017.99 重算。显示的均线水平为美元取整；
                偏移按精确序列值计算。W-SMA200 无法从 2023–2026 均线子集算出（188 周 K），而 W-SMA150 $76,627 可算但远在上方且闲置；
                W-EMA150 $73,181 与 W-EMA200 $67,146 由可得历史种子生成、如实标注（两者都在现货上方，故此处为压力而非支撑）；200W 周期底
                $63,311 来自完整历史 glob / 陷阱监测状态（见来源）。日收盘：07-24 $64,116.50、07-25 $64,338.10、07-26 $65,375.10、
                07-27 $63,720.80、07-28 $63,903.60、07-29 $63,958.90、07-30（进行中，5 分钟）$63,979.00——两根已完成阳线离底
                （07-28、07-29），07-30 进行中站在 07-29 之上，均未夺回 D-EMA50 顶盖。
              </span>
            </p>

            <h2 className="dn-sec">
              庄家图 <span className="dn-roman">III · 本子去 gamma 至 +75.1M 头条 / +94.46M 滚加（07-29 为 +100.4M / +116.31M）· 翻转上抬 $62,716 → $63,001（现货上方 +1.61%，更逼近现货）· 一处温和的近月负值重现——30JUL 0DTE −5.60M，但 31JUL +55.53M 主导、条子合计 +94.46M · $64k 现货处口袋 +7.11M（为正但较 07-29 的 +14.23M 变薄）· $60k −22.24M 为唯一的崩盘看跌</span>
            </h2>

            <p>
              <span className="dn-signal">
                庄家本子去了 gamma 但仍稳稳为正，翻转向现货爬升，一处温和的近月负值重现——追空的 gamma 燃料回来了一部分，但只有一部分
              </span>。头条汇总 GEX 为{' '}
              <span className="dn-tag bull">+75.1M / 1%</span>（07-29 为 +100.4M），按到期滚加为{' '}
              <span className="dn-tag bull">+94.46M</span>（= gex_summary.json net_gex $94,462,727，07-29 为 +116.31M）——约
              +19.36M 无法对平的头条对滚加缺口，按 DN-003 血缘披露，且本次滚加再度高于头条（与 07-29 符号相同）。0-γ 翻转移动{' '}
              <span className="dn-tag">$62,716 → $63,001（+$285）</span>，向现货爬升，现货 $64,018 站在{' '}
              <span className="dn-tag bull">翻转上方 +1.61%</span>（现货计口径 64,017.99 / 63,001.34 − 1 = +1.614%）；GEX 文件自身的
              &ldquo;距翻转&rdquo;读{' '}
              <span className="dn-tag bull">较其 Deribit 指数 $64,137 高 +1.80%</span>（64,137.47 / 63,001.34 − 1 = +1.803%）——
              两个参照都为正，但缓冲从 07-29 的 +2.11% 收窄，因翻转比现货抬得更快。墙图仍是一条正的看涨带，现货处口袋变薄：{' '}
              <span className="dn-tag bull">$70k +28.17M</span>（最重墙）、{' '}
              <span className="dn-tag bear">$60k −22.24M</span>（崩盘看跌，行权价盘面唯一有意义的负值）、{' '}
              <span className="dn-tag bull">$72k +16.64M</span>、{' '}
              <span className="dn-tag bull">$65k +15.82M</span>、{' '}
              <span className="dn-tag bull">$68k +13.72M</span>、{' '}
              <span className="dn-tag bull">$66k +11.16M</span>、{' '}
              <span className="dn-tag bull">$67k +10.75M</span>、{' '}
              <span className="dn-tag bull">$80k +8.47M</span>、{' '}
              <span className="dn-tag bull">$64k +7.11M</span>（现货处口袋维持为正但从 07-29 的 +14.23M 变薄）、{' '}
              <span className="dn-tag bull">$64.5k +6.96M</span>。{' '}
              <span className="dn-em">
                $66k–$72k 带仍合计约 +80M 的正 gamma 看涨压力（$66k +11.16M + $67k +10.75M + $68k +13.72M + $70k +28.17M +
                $72k +16.64M = +80.44M），所以夺回仍会撞上上方卖 gamma 的庄家。现货下方本子是更薄但仍为正的阻尼器：$64k 口袋 +7.11M，
                直到远端 $60k（−22.24M）崩盘看跌之前唯一的负值就没有——所以下探到 $63,311 底会撞上正 gamma 的缓冲，而非追空要的放大式负值。
              </span>{' '}
              按到期看，一处温和的近月负值重现：{' '}
              <span className="dn-tag bear">30JUL 0.3DTE −5.60M</span>（0DTE 前端，唯一有意义的近月负），之后是{' '}
              <span className="dn-tag bull">31JUL 1.3 +55.53M</span> 的主导块，再是 1AUG 2.3 +0.29M、2AUG 3.3 +0.15M、
              7AUG 8.3 +22.30M、14AUG 15.3 −0.45M（微不足道的残留负）、28AUG 29.3 +15.81M、25SEP 57.3 +2.12M、25DEC 148.3 +2.85M、
              26MAR27 239.3 +0.85M、25JUN27 330.3 +0.61M——列出的条子合计恰为{' '}
              <span className="dn-tag bull">+94.46M</span>（= net_gex）。所以条子整体为正，前端仅一处小 0DTE 负值：追空要的放大式负 gamma
              簇其实并不在场——单个 −5.60M 0DTE 对着 +55.53M 次日、+94.46M 总量，是一个被阻尼的本子，而非放大器。
            </p>

            <p>
              期权链 IV 中位为{' '}
              <span className="dn-tag">43.3%</span>（07-29 为 43.5%），对 30D 收盘对收盘 RV 的{' '}
              <span className="dn-tag">29.52%</span>——链上富价{' '}
              <span className="dn-tag">~+13.8pt</span>。跨 N 个合约（今日 846）的链上中位，<span className="dn-em">非</span>可交易价差；
              到期/行权价级 vega、偏斜与期限结构仍未加载；波动率读数维持仅作框架。RV 方法：30D 收盘对收盘，logret.std × √365 × 100，
              取最近 30 个日对数收益（= 31 个连续日收盘），锚定 parquet 末根 2026-07-30 00:05Z；29 收益替代口径读 29.07%。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 周三 FRED 重印——10Y 连续第四天缓和 −4bp 至 4.61%（夺回多头利率过滤器仍 FALSE，但现距触发仅 6bp）· TIPS −3bp 2.41%，盈亏平衡 +6bp 至 2.26% · MOVE 升至 74.2（+3.30）· 利率/美元 避险 vs 信用/流动性宽松 · DXY 101.39</span>
            </h2>

            <p>
              <span className="dn-signal">
                周三 FRED 重印把长端连续第四天压至 4.61%，把夺回多头利率过滤器磨到距触发仅 6bp——仍 FALSE，但趋势明白无误地朝门槛走
              </span>。仪表盘渲染为 2026-07-29 22:17Z，早于快照约 1.8h，FRED 日频序列已为周三 07-29 重印。美 10Y 名义{' '}
              <span className="dn-tag bull">4.61%（−4.0bp）</span>，regime z{' '}
              <span className="dn-tag bear">+2.00</span>，偶发 z{' '}
              <span className="dn-tag">+0.86</span>——避险，从 4.65% 缓和 4bp，四次印数走 4.71 → 4.69 → 4.65 → 4.61。10Y TIPS 实际{' '}
              <span className="dn-tag bear">2.41%（−3.0bp）</span>，regime z{' '}
              <span className="dn-tag bear">+2.75</span>——极端避险，略缓和。5Y5Y 盈亏平衡通胀{' '}
              <span className="dn-tag">2.28%（+4.0bp）</span>，10Y 盈亏平衡{' '}
              <span className="dn-tag">2.26%（+6.0bp）</span>——通胀补偿走强。HY OAS{' '}
              <span className="dn-tag bull">2.84%（+3.0bp）</span>，regime z{' '}
              <span className="dn-tag bull">−0.25</span>——仍&ldquo;宽松&rdquo;但略走阔。MOVE 债市波动率{' '}
              <span className="dn-tag">74.2（+3.30，升）</span>，regime z +0.03——中性，波动率略偏硬。旁支：DXY{' '}
              <span className="dn-tag bear">101.39（−0.08）</span>，regime z +2.21——极端避险；美联储净流动性{' '}
              <span className="dn-tag bull">$5.917T</span>（无新周频印数），偶发 z −2.47——宽松。美日 10Y 利差{' '}
              <span className="dn-tag">1.94%（−4.0bp）</span>；美元/日元{' '}
              <span className="dn-tag">163.84</span>。NFCI{' '}
              <span className="dn-tag bull">−0.554</span>，RISK-ON（周频）。{' '}
              <span className="dn-em">
                净结论：夺回多头利率过滤器（10Y &lt; 4.55%）在 4.61% 处仍 FALSE——连续第四次缓和把它挪到距触发仅 6bp，为整轮复苏最近的一次。
                宏观劈叉未变：利率与美元坐在避险（偏紧，尽管 10Y 的 regime z 从 +2.24 缓和至 +2.00），而信用（HY OAS 宽松）与流动性
                （净流动性宽松、NFCI RISK-ON）维持宽松，MOVE 偏硬但仍中性（74.2，+3.30）。本次印数没有翻转侦察仓的利率门槛，但趋势才是提示——
                再来一份同等量级的 FRED 日频就点燃它。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>水位</th>
                  <th>Δ（末次 FRED 变动）</th>
                  <th>regime z</th>
                  <th>偶发 z</th>
                  <th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>美 10Y 名义</td><td className="num">4.61%</td><td className="num bull">−4.0bp</td><td className="num bear">+2.00</td><td className="num">+0.86</td><td className="bear">避险 · 周三 −4bp（第 4 次缓和）</td></tr>
                <tr><td>10Y TIPS 实际</td><td className="num">2.41%</td><td className="num bull">−3.0bp</td><td className="num bear">+2.75</td><td className="num">+1.37</td><td className="bear">极端避险 · 缓和</td></tr>
                <tr><td>5Y5Y 盈亏平衡通胀</td><td className="num">2.28%</td><td className="num bear">+4.0bp</td><td className="num">+0.81</td><td className="num">+2.20</td><td className="neut">偶发</td></tr>
                <tr><td>10Y 盈亏平衡</td><td className="num">2.26%</td><td className="num bear">+6.0bp</td><td className="num">−0.94</td><td className="num">+0.83</td><td className="neut">无标签 · 走强</td></tr>
                <tr><td>HY OAS</td><td className="num">2.84%</td><td className="num bear">+3.0bp</td><td className="num bull">−0.25</td><td className="num">+2.12</td><td className="bull">宽松 · 略走阔</td></tr>
                <tr><td>芝加哥联储 NFCI</td><td className="num">−0.554</td><td className="num">−0.01</td><td className="num bull">−1.56</td><td className="num bull">−1.53</td><td className="bull">RISK-ON · 周频</td></tr>
                <tr><td>MOVE 债市波动率</td><td className="num">74.2</td><td className="num bear">+3.30（升）</td><td className="num">+0.03</td><td className="num">+1.09</td><td className="neut">中性 · 偏硬</td></tr>
                <tr><td>DXY</td><td className="num">101.39</td><td className="num">−0.08</td><td className="num bear">+2.21</td><td className="num">+0.85</td><td className="bear">极端避险 · 获买</td></tr>
                <tr><td>美联储净流动性</td><td className="num">$5.917T</td><td className="num">−0.069T</td><td className="num">+0.56</td><td className="num bull">−2.47</td><td className="bull">宽松 · 无新周频印数</td></tr>
                <tr><td>美日 10Y 利差</td><td className="num">1.94%</td><td className="num bull">−4.0bp</td><td className="num">−0.56</td><td className="num">+0.86</td><td className="neut">偏紧</td></tr>
                <tr><td>美元/日元</td><td className="num">163.84</td><td className="num">+0.07</td><td className="num bear">+1.72</td><td className="num bear">+1.94</td><td className="neut">日元偏软</td></tr>
                <tr><td>日本 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月频）</td><td className="num stale">+2.42</td><td className="num stale">+1.09</td><td className="stale">月频 · 勿倚重</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗口，22 资产，167 行，汇总 00:00Z——{' '}
              <span className="dn-em">7 天滚动读数，非今日</span>）。非对角均值{' '}
              <span className="dn-tag">|r| 0.363</span>——NORMAL 带，较 07-29 的 0.266 大幅收紧，整条风险复合同向而动。BTC 最强联系是{' '}
              <span className="dn-tag">NQ +0.571</span>（从 +0.504 走强），其后 SP500{' '}
              <span className="dn-tag">+0.547</span>、JP225{' '}
              <span className="dn-tag">+0.525</span>、URNM{' '}
              <span className="dn-tag">+0.479</span>、TSLA{' '}
              <span className="dn-tag">+0.461</span>、PLAT{' '}
              <span className="dn-tag">+0.461</span>、SILVER{' '}
              <span className="dn-tag">+0.453</span>、PALL{' '}
              <span className="dn-tag">+0.422</span>、GOLD{' '}
              <span className="dn-tag">+0.421</span>、COPPER{' '}
              <span className="dn-tag">+0.405</span>。7d 表现才是提示，且是当日的跨资产多头注脚：{' '}
              <span className="dn-tag bear">BTC −3.12%</span> 是除绿盘大盘科技外最不差的主要风险引擎——远{' '}
              <span className="dn-em">领先</span> NQ{' '}
              <span className="dn-tag bear">−5.87%</span>（BTC +2.75pt），落在一片深红复合内——JP225{' '}
              <span className="dn-tag bear">−7.90%</span>、NVDA{' '}
              <span className="dn-tag bear">−9.99%</span>、META{' '}
              <span className="dn-tag bear">−12.53%</span>、AMZN{' '}
              <span className="dn-tag bear">−5.27%</span>、TSLA{' '}
              <span className="dn-tag bear">−17.34%</span>、URNM{' '}
              <span className="dn-tag bear">−6.92%</span>，SP500{' '}
              <span className="dn-tag bear">−2.14%</span>，而绿盘大盘科技 AAPL{' '}
              <span className="dn-tag bull">+4.43%</span>、MSFT{' '}
              <span className="dn-tag bull">+9.08%</span>、GOOGL{' '}
              <span className="dn-tag bull">+0.56%</span> 是例外。金属翻红但浅（GOLD −1.10%、SILVER −2.72%、PLAT −1.74%、
              PALL −1.54%、COPPER −1.60%），能源更重（CL −4.22%、BRENT −3.93%、NGAS −6.72%）。{' '}
              <span className="dn-em">
                相关性 regime 收紧至 NORMAL 0.363，BTC 随一片广泛翻红的风险盘而动——但它是其中最有韧性的主要风险资产，7d 跌幅仅为 NQ 的三分之一、
                不足 AI 大盘科技复合的一半。按 DN-001 血缘，这是一条收紧的、避险的跨资产读数，BTC 为相对强势的幸存者，而非 RS 领先信号——是红盘里一抹温和的多头倾斜，
                非轮动判断。
              </span>{' '}
              日本 10Y 月频 2.67% 带月频标签——勿倚重。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 回补反弹侦察仓 DEFERRED（第 7 天）——聪明钱腿如今比 FALSE 更糟（翻净空，而非仅仅不加），价格腿 FALSE（顶盖未夺回），利率 FALSE（距门槛 6bp）· 追空按兵不动但更接近武装——聪明钱滚离条件已满足、0DTE 负值回来，但定底在收盘上守住、本子仍 +94.46M 为正 · 账本 FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                07-29 的岔口在聪明钱侧解决了——记录性买家滚离并翻空——但在定底侧没有，所以两笔交易都没武装
              </span>。07-29 备忘把两笔交易门控在同一事件上：聪明钱加仓进夺回（侦察仓）vs 聪明钱滚离进定底破位（追空）。今日聪明钱滚离
              ——决绝地翻净空——这是追空仓位腿的触发条件。但定底在第二根已完成阳线上一美元不差地守住，而庄家本子虽去了 gamma、仍 +94.46M
              为正、仅一处 0DTE −5.60M 近月负值——所以追空的&ldquo;定底破位加放大式 gamma&rdquo;触发未满足。而侦察仓的聪明钱腿从 FALSE-减仓
              变成 FALSE-翻空，为整轮复苏最差读数，顶盖仍未夺回。今日交易本子：无侦察开仓、无追空、无新对冲——有纪律的读法是维持侦察仓 DEFERRED，
              直到一次 D-EMA50 夺回与聪明钱重新加仓配对，并把追空按住但上膛：它较自重置以来任何时点都更接近武装，一次 $63,311 收盘破位（聪明钱已经做空）
              会在破位上把它武装。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · 侦察 · DEFERRED（第 7 天）· 聪明钱腿比 FALSE 更糟（翻净空），价格腿 FALSE，OI 派发形态，利率 FALSE</span>
              <div className="dn-trade-name">
                回补反弹侦察仓——定底在第二根已完成阳线上守住，但记录性买家对着它翻净空，OI 派发式扩张，D-EMA50 顶盖仍未夺回，利率仍 FALSE
              </div>
              <div className="dn-thesis">
                再武装门槛四条腿全 FALSE，且聪明钱腿如今是整轮复苏最差的读数。<em>价格</em> 腿（阳线夺回 D-EMA50）FALSE
                ——两根已完成阳线离底（07-28 $63,903.60、07-29 $63,958.90），07-30 进行中 $63,979.00 站在 07-29 之上，但均在 D-EMA50
                $64,883 顶盖之下，现货低 −1.33%。<em>聪明钱加仓</em> 腿比 FALSE 更糟——聪明钱从净多 +5,038 翻至净空 −2,285
                （Δ多 −3,050 倒、Δ空 +4,273 堆，145% 摆幅），为 07-21 穿越以来首次净空；记录性买家不只是不加，如今是对着反弹反向布仓。
                <em>OI 需求</em> 腿 FALSE——OI 扩张 +1.02%（+1,057 BTC）但呈派发形态（聪明钱翻空、24h 期货/taker 被抛），尽管最后 4h 子窗口
                确是一次真实的需求反弹（OI +1,512、全 CVD 正）。而 <em>利率</em> 过滤器在 10Y 4.61% 仍 FALSE（周三 −4bp，距触发 6bp）。侦察仓的
                需求腿与价格夺回腿仍在结构上错相；开仓维持递延，直到一次阳线上的顶盖夺回与聪明钱重新加仓、需求驱动 OI 配对。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">再武装门槛（四条腿全 FALSE）</span><span className="dn-lvl-v bear">阳线夺回 D-EMA50（FALSE——两根已完成阳线但在 $64,883 顶盖下）· 聪明钱加仓（比 FALSE 更糟——翻净空 −2,285，倒多、堆空）· OI 需求驱动（FALSE——+1.02% 派发式扩张；仅最后 4h 子窗口需求驱动）· 10Y &lt; 4.55%（FALSE——4.61%，距 6bp）</span></div>
                <div><span className="dn-lvl-k">那个签名</span><span className="dn-lvl-v bear">聪明钱在 07-27 跌里加（+214%）、07-29 弹里减（−41%），如今对着第二根已完成阳线干脆翻空（−2,285）——需求腿与价格夺回腿从未同时打成 TRUE</span></div>
                <div><span className="dn-lvl-k">侦察开仓</span><span className="dn-lvl-v bull">在阳线夺回 D-EMA50、且与聪明钱重新穿回净多、OI 转需求驱动配对（或利率印数 &lt; 4.55%）时：侦察多 0.2R</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">日收 &lt; $63,311（已结定底 200W / D-SMA50 汇合——收破即终结复苏读数）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$66k–$72k 看涨墙带为实操上限；工作均线目标 D-EMA100 $67,482，$66k / $67k 墙处减半</span></div>
                <div><span className="dn-lvl-k">仓位</span><span className="dn-lvl-v">确认夺回上 0.2R · 绝不在记录性买家已翻空对着的反弹里开</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>确认再武装约 $64,883 开仓（D-EMA50 夺回），止损 $63,311（已结定底 / D-SMA50）= 约 $1,572 风险；工作目标
                D-EMA100 $67,482 = 约 $2,599 回报 ≈ 1.65:1——但 $66k–$72k 看涨墙带盖住路径，故现实首目标是 $66k / $67k 墙，到那里的 R/R 更薄。
                <b>硬规则：</b>侦察仓不在记录性买家净空时开。两根已完成阳线离底、聪明钱翻净空、OI 派发式扩张，是聪明钱正在淡化的反弹，非需求驱动夺回。
                确认腿是价格在阳线上夺回 D-EMA50 且聪明钱重新穿回净多、OI 转需求驱动，按此顺序。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">空 · 追空 · 按兵不动 · 更接近武装——聪明钱滚离条件已满足、0DTE 负值重现，但定底在收盘上守住</span>
              <div className="dn-trade-name">
                追空——07-29 的&ldquo;聪明钱滚离&rdquo;触发如今已满足（聪明钱翻净空）、一处 0DTE 负值重现，但定底一美元不差守住、本子仍 +94.46M 为正，故维持按兵不动、待收盘破位
              </div>
              <div className="dn-thesis">
                07-29 追空较自重置以来任何时点都更远离武装——近月负已愈合、聪明钱仍净多。今日它两条触发腿之一点燃了：聪明钱滚离并翻净空 −2,285
                （07-29 备忘把空门控其上的仓位提示），一处温和的 0DTE 近月负值重现（30JUL −5.60M）。但另一条腿——带放大式负 gamma 的定底收盘破位——未满足：
                07-29 收 $63,958.90（第二根已完成阳线），24h 低 $63,313.81 高出已结定底 $63,311.02 $2.79，而本子虽去 gamma 至 +94.46M，仍稳稳为正、
                仅一处小 0DTE 负值对着 +55.53M 次日——是阻尼器、非放大器。所以追空较昨日更接近武装（聪明钱腿翻了、一处负值重现）但维持按兵不动：它在 $63,311
                收盘破位上武装，而聪明钱已经做空、翻向新鲜，那次破位会很快把它武装。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">再武装腿（一满足、一未满足）</span><span className="dn-lvl-v bear">聪明钱滚离（满足——翻净空 −2,285，07-21 穿越以来首次）且 0DTE 负值回来（30JUL −5.60M）· 但定底收盘破位（未满足——定底在第二根已完成阳线上一美元不差守住）与放大式负 gamma（未满足——本子仍 +94.46M 为正）</span></div>
                <div><span className="dn-lvl-k">为何较 07-29 更接近武装</span><span className="dn-lvl-v bear">记录性买家翻净空（熊派仓位提示），庄家本子从 +116.31M 去 gamma 至 +94.46M、翻转向现货爬升，且 0DTE 负值重现——趋势朝触发走</span></div>
                <div><span className="dn-lvl-k">何以武装该空</span><span className="dn-lvl-v bear">日收 &lt; $63,311（破底）且聪明钱已净空（在场）、近月负 gamma 加深——空在破位上武装，止损回到 D-EMA50 $64,883 上方</span></div>
                <div><span className="dn-lvl-k">禁做</span><span className="dn-lvl-v">不在刚一美元不差守住、本子仍 +94.46M 为正的定底上追空；等 $63,311 收盘破位——但保持上膛，聪明钱已经做空</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b>追空的优势本是现货下方带放大式负 gamma 的定底破位、加聪明钱已为此布仓。其中之一如今在场——聪明钱翻净空——但定底在收盘上守住、本子仍净正，
                所以此处做空是在一个正 gamma 阻尼器里、对着一处守住的定底做空，正是血缘要按住的低质量空。与 07-29 的不同在于：装置如今已上膛——若 $63,311 在收盘上被破，
                聪明钱已经做空、0DTE 负值已在盘面，故空会在破位上武装、而无需仓位先转向。收盘破位之前它等——但比过去更近。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 两个本子劈开——聪明钱翻空，人群重新拥挤做多，二者之间一处定底一美元不差守住</span>
              <div className="dn-trade-name">
                派发对防守——记录性买家对着一波人群付费做多的反弹翻净空，二者之间定底一美元不差守住；岔口如今是 $63,311 收盘
              </div>
              <div className="dn-thesis">
                进第七节，摆动已解成一道干净的两本子劈叉：07-27 跌里聪明钱加 +214%（需求腿 TRUE、价格腿 FALSE）；07-29 弹里它减 −41%（两腿皆 FALSE）；
                今日它干脆翻净空 −2,285，而资金费再热到 +8.19%、0 负行，散户重新拥挤——聪明钱在派发进一个靠现货买盘防守定底的人群。二者之间定底一美元不差守住
                （$63,313.81 低 vs $63,311.02 已结）。这已不再是单一买家在摆动，而是两个本子指向相反，决胜手是 $63,311 日收。要么人群的买盘把价格带回上方、
                织成一次逼聪明钱回补的 D-EMA50 夺回（一个熊陷阱，侦察仓随聪明钱重新穿回净多终将武装），要么聪明钱的空预示一次 $63,311 下方的收盘，那里人群过度做多的
                carry 剧烈解开（定底失守，追空随聪明钱已布仓在破位上武装）。本备忘押在那个收盘，而非盘中反弹。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">多头解决</span><span className="dn-lvl-v bull">阳线上夺回 D-EMA50 $64,883、逼聪明钱重新穿回净多（回补进需求）且 OI 需求驱动——相位对齐，侦察仓实弹武装 0.2R；均值回归 regime 翻转与扩宽的 HTF 底背离簇偏向这侧</span></div>
                <div><span className="dn-lvl-k">空头解决</span><span className="dn-lvl-v bear">日收 &lt; $63,311、聪明钱已净空、拥挤多头 carry（资金费 +8.19% 均值、0 负行）解开——定底防守失败，追空在破位上武装</span></div>
                <div><span className="dn-lvl-k">决定性提示</span><span className="dn-lvl-v">$63,311 日收、聪明钱回补（穿回净多）还是加码空，以及拥挤多头资金费是续还是冲刷——而非盘中反弹</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>优势在于认清这如今是一场派发对防守的对峙、而非一个趋势在解决——聪明钱做空、人群做多、定底在二者之间一美元不差守住。血缘不追这场对峙的任何一侧；
                它等 $63,311 收盘打破平局（定底破位 + 聪明钱空 → 追空武装），或一次逼聪明钱回补的夺回（夺回 + 聪明钱穿回 → 侦察仓武装）。读收盘、读聪明钱回补/加码、读拥挤多头资金费
                ——而非 K 线。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 已结定底 $63,311 一美元不差守住（24h 低 $63,313.81，第二根已完成阳线——熊派解决未点燃）· D-EMA50 夺回未点燃（在下方被压 −1.33%）· 聪明钱翻净空（熊派仓位提示点燃——但只是解决的一半、非全部）· 追空更接近武装但按兵不动、待收盘破位 · 账本 FLAT</span>
            </h2>

            <p>
              在 07-29 的决策条件里：<em>已结定底止损 / 底部测试</em> 解出一个 HOLD（07-29 收 $63,958.90，离 $63,311 汇合的第二根已完成阳线，
              24h 低 $63,313.81 在隔夜下影上高出已结定底 $2.79——交易台把追空门控其上的熊派解决并未在收盘上点燃）；<em>回补反弹侦察仓（多）</em>
              触发未点燃（定底守住但聪明钱对着反弹翻净空，故流量腿走反、价格腿从未满足）；<em>阳线夺回 D-EMA50 且聪明钱重新加仓</em> 未发生
              （两根已完成阳线但均在 $64,883 顶盖下，且聪明钱翻净空而非加仓）；<em>夺回多头利率过滤器</em> 维持 FALSE（周三 10Y 连续第四天缓和至
              4.61%，仍高于 4.55% 门槛 6bp）；<em>追空再武装</em> 挪得更接近武装——它的聪明钱滚离腿点燃了（聪明钱翻净空 −2,285，07-21 穿越以来首次）、
              一处 0DTE 近月负值重现（30JUL −5.60M），但定底收盘破位腿仍未满足。{' '}
              <em>聪明钱滚离并翻空——半个熊派解决——但定底一美元不差守住、本子仍 +94.46M 为正，所以两侧都没有武装。</em>今日条件围绕一处守住的定底、
              一个翻空的聪明钱本子、一个重新拥挤做多的人群、一个去 gamma 但仍为正的庄家本子、以及一个未夺回的 D-EMA50 顶盖重新排定：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>已结定底止损 / 底部测试（07-29 门槛）</td><td className="bull">守住——07-29 收 $63,958.90，离 $63,311 W-SMA200 / D-SMA50 汇合的第二根已完成阳线；24h 低 $63,313.81 在下影上高出已结定底 $2.79；现货高出 +1.12%</td><td>熊派解决未在收盘上点燃；复苏读数继续运行，追空维持按兵不动、待收盘破位</td></tr>
                <tr><td>阳线夺回 D-EMA50（侦察价格腿）</td><td className="bear">FALSE——两根已完成阳线但均在 $64,883 顶盖下；07-29 收 $63,958.90 低 −1.43%（现货 −1.33%）；顶盖连续第 6 天未被夺回</td><td>不开侦察多：反弹从未拿下顶盖，价格腿未满足</td></tr>
                <tr><td>聪明钱加仓净多（侦察流量腿）</td><td className="bear">比 FALSE 更糟——聪明钱翻净空 −2,285（Δ多 −3,050，Δ空 +4,273，145% 摆幅），07-21 穿越以来首次净空</td><td>不开侦察多：记录性买家如今对着反弹布仓，而非资助它</td></tr>
                <tr><td>OI 背后有买家（侦察流量腿）</td><td className="bear">FALSE——OI +1.02%（+1,057 BTC）派发式扩张（聪明钱空、24h 期货/taker 被抛）；仅最后 4h 子窗口需求驱动</td><td>不开侦察多：24h 扩张是派发，而非新需求</td></tr>
                <tr><td>夺回多头利率过滤器</td><td className="bear">FALSE——10Y 4.61% &gt; 4.55%（周三 −4bp，连续第 4 次缓和，距触发 6bp）</td><td>独立过滤器为假但为整轮复苏最近；再来一份同量级 FRED 日频即点燃</td></tr>
                <tr><td>回补反弹侦察仓（多）</td><td className="bull">阳线夺回 D-EMA50 $64,883 且与聪明钱重新穿回净多、OI 需求驱动配对（或 10Y &lt; 4.55%）</td><td>侦察多 0.2R，止损 $63,311，工作目标 D-EMA100 $67,482（受 $66k–$72k 看涨墙盖），R/R ~1.65:1</td></tr>
                <tr><td>追空再武装（更接近武装）</td><td className="bear">聪明钱滚离满足（翻净空 −2,285）+ 0DTE 负值回来（30JUL −5.60M）——但定底在收盘上守住、本子仍 +94.46M 为正</td><td>不在刚一美元不差守住、本子仍为正的定底上追空；在 $63,311 收盘破位上武装——而聪明钱已经做空，那次破位会很快把它武装</td></tr>
              </tbody>
            </table>

            <p>
              重写<em>这份</em>备忘的那一行是{' '}
              <span className="dn-signal">
                聪明钱已翻空之下的 $63,311 日收——收破即在仓位已就位下把追空在破位上武装，而一次逼聪明钱回补的夺回则武装侦察仓，
                二者之间的一切都是交易台如今在读的派发对防守对峙
              </span>。定底在第二根已完成阳线上一美元不差守住，但它守住时记录性买家对着反弹翻净空——07-21 穿越以来首次净空、也是 07-29 备忘把追空门控其上的
              熊派仓位提示——而人群重新拥挤做多（资金费 +8.19% 均值、0 负行）。所以半个熊派解决点燃了（聪明钱滚离），却没有那能武装交易的另一半（定底收盘破位），
              侦察仓的流量腿第七天从 FALSE-减仓 变成 FALSE-翻空。收盘破位或一次逼聪明钱回补的夺回之前，本备忘照写运行：侦察仓 DEFERRED 第七天、聪明钱腿为整轮复苏最差读数；
              追空较自重置以来任何时点都更接近武装——聪明钱空、0DTE 负值回来、翻转向现货爬升——但按兵不动、待 $63,311 收盘；空头价差不在单一未印出的低于 4.55% 腿上重建；
              账本在定底上方维持 FLAT。MTF regime 翻至均值回归、HTF 底背离簇扩至七个周期（一记多头对冲砝码），庄家本子去 gamma 但仍为正，BTC 是深红盘里最有韧性的主要风险资产
              ——但两个本子劈开了，这道劈叉才是交易台接下来要读的提示。未来 24h 的正确读法是{' '}
              <em>耐心——水位在做工；读 $63,311 收盘、读聪明钱是回补还是加码它新鲜的空，别读反弹，别买价格尚未夺回的顶盖、也别做空刚一美元不差守住的定底</em>。
            </p>

          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计）
            </span>
            <p>
              <b>状态：</b>本为 v2 中文版，与 v2 英文版并行、数据零漂移；由 v1 在 STAGE B codex 敌对式审计后晋级
              （audits/2026-07-30-desk-note.md，裁定 PASS-WITH-NOTES：0 CRITICAL、2 MAJOR、2 MINOR）。
              STAGE C 逐条套用每一处发现并跑强制 grep 收敛环（模式 → 命中前 → 命中后）至零残留，方晋级 v1 → v2。
              锚定 2026-07-30 00:05Z 快照（实盘 t == &ldquo;07-30 08:05&rdquo; 北京）；滚动来源归档于
              /opt/desk-note/snapshots/2026-07-30-0008/。补充的 ask-deepseek 重算轮未发现数值错误，且经裁定（非自动套用）。
            </p>
            <p>
              <b>DN-001（MAJOR）——宏观表/正文誊录。</b>模式 <em>MOVE eased / MOVE cooling / eased from 77 /
              vol cooling / eased to 74 / &ldquo;(eased)&rdquo;</em>（MOVE 方向）、<em>TIPS 偶发 +1.6</em>、
              <em>5Y5Y &ldquo;无标签&rdquo; / +1.1</em>、<em>10Y 盈亏平衡偶发 &ldquo;—&rdquo;</em>：命中前 9，命中后 0。
              来源 macro_dashboard.html 重取：MOVE 74.2 为升 +3.30（regime z +0.03，偶发 +1.09，读中性——去掉
              &ldquo;缓和/降温&rdquo;，前值约 70.9 而非 77.2）；TIPS 偶发 +1.37；5Y5Y 偶发 +2.20 标偶发；
              10Y 盈亏平衡偶发 +0.83——已解决。
            </p>
            <p>
              <b>DN-002（MAJOR）——07-21 多头穿越时戳差 8h。</b>模式 <em>07-21 06:36 / 07-20 22:36</em>：命中前 2
              （:192、:343），命中后 0；每一处引用改为已校正的 07-21 14:36 北京 / 06:36Z 穿越（实盘行在 −641.90
              后净 +4,138.49）——已解决。
            </p>
            <p>
              <b>DN-003（MINOR）——阳线收盘计数。</b>模式 <em>第三根阳线 / 三根阳线 / 三根连续阳线</em>：命中前 15，
              命中后 0；07-29 重述为第二根已完成的连续阳线收盘（07-28 第一，07-29 第二），07-30 进行中 K 线迄今站在
              07-29 之上，而防守定底语义处（方向非其主张）改述为&ldquo;站上定底的日收&rdquo;——已解决。
            </p>
            <p>
              <b>DN-004（MINOR）——永续溢价印数。</b>模式 <em>briefly premium once</em>：命中前 1（:319），命中后 0；
              改述为四处孤立的一分钟溢价印数——已解决。
            </p>
            <p>
              <b>ask-deepseek 补充重算——裁定：</b>补充重算轮未发现数值错误；无 CRITICAL 发现。按 runbook §5 经裁定（非自动套用）。
            </p>
            <p>
              <b>codex 确认无误（重算锚点，v2 未改）：</b>资金费 × 1095（实时 +9.39% 年化，原始 0.008571，本快照未顶上限，
              24h 均 +8.19%，最高 +10.95% 上限 515 / 1441 行，最低 +2.02% 来自 0.0018410，0 / 1441 负行）；
              GEX 双参照符号（翻转 $63,001，现货 +1.61% / 指数 +1.80%，均正，图取现货侧；头条 +75.1M vs 按到期滚加
              +94.46M = net_gex $94,462,727，约 +19.36M 缺口、本次滚加高于头条，列出到期合计恰为 +94.46M）；
              整张均线矩阵对实时现货 $64,017.99（parquet 2026-07-30 00:05Z 进行中收 $63,979.00，D-EMA50 $64,883 −1.33%
              顶盖，D-SMA50 $63,410 +0.96% 最近支撑，已结定底 200W $63,311.02，W-SMA200 在 188 周 K 不可算而 W-SMA150
              $76,627 可算但闲置，D-EMA100 $67,482）；聪明钱翻向比 |Δ净|/前净 = 7,323.35 / 5,038.25 = 145.4%
              （Δ多 −3,050.0 / Δ空 +4,273.3，多转空穿越 07-29 14:31 北京 / 06:31Z，07-21 穿越以来首次净空）；
              24h CVD 方法 A 重置校正（单次 07-29 14:12 北京 / 06:12Z 重置：cb_cvd 13,175.0 → 91.9 得现货 Δ +2,210.0；
              fut_cvd −591.1 → 68.8 得期货 Δ −907.8）；30D 收盘对收盘 RV 29.52%（29 收益替代 29.07%）；已结定底防守
              （24h 低 $63,313.81 高出 $63,311.02 $2.79）；MTF 1 多 / 7 空 / 2 中，regime 翻至 6/9 周期反转（JT&lt;0），
              底背离簇扩至 7 个周期；宏观 Tier-1（10Y 4.61% 周三 −4bp / 连续第四次缓和 / 距 4.55% 门槛 6bp，HY OAS 2.84%，
              MOVE 74.2，DXY 101.39，美联储净流动性 $5.917T）；跨资产（|r| 0.363 NORMAL，BTC −3.12% vs NQ −5.87%）；
              结论对已加载数据（NTT / max-pain / 行权价 IV / BTC-NQ 仅作框架；JGB 月频勿倚重；IV 为跨 846 合约的链上中位、
              非可交易价差）；以及 requireViewer 门控（路径 /zh/desk/2026-07-30，首句）。四条发现全部 RESOLVED；晋级 v1 → v2。
              整体：<b>已过 codex 敌对式审计</b>。
            </p>
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘为 Hysteresis Research（迟滞研究）合伙人内部讨论所备，<em>非投资建议、非招揽、非要约</em>，亦未针对任何接收方情况个性化。数字反映单一原子快照
            （2026-07-30 00:05Z），分段出处见上方来源带；宏观 Tier-1 面板渲染为 2026-07-29 22:17Z（早于快照约 1.8h）并含周三 FRED 日频重印，部分输入明确陈旧或待定并已如实标注。
            水位、仓位与条件仅示意交易台流程，非长期建议。过往相关性、gamma 与仓位形态不约束未来盘面。衍生品有全额亏损风险，若带杠杆，亏损可超出已缴保证金。<em>请自行研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                定底一美元不差地在第二根已完成阳线上守住，但记录性买家对着反弹翻净空，而人群重新拥挤做多——聪明钱在派发，散户在防守，两个本子在 $63,311 处劈开。别买价格尚未夺回的顶盖，也别做空刚守住的定底。读收盘。耐心。
              </div>
              <div className="dn-sign-name">交易台 · BTC 衍生品</div>
            </div>
            <div className="dn-sign-stamp" aria-hidden="true">
              <svg width="36" height="22" viewBox="0 0 100 60">
                <path
                  d="M 10 54 C 30 54, 38 53, 58 30 C 70 13, 78 7, 90 6 C 70 6, 62 7, 42 30 C 30 47, 22 53, 10 54 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

        </div>

        <footer className="dn-foot">
          <span>Hysteresis Research · 迟滞研究 · HK</span>
          <span>
            v2 · 2026-07-30 00:05Z 快照 · 来源：live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
