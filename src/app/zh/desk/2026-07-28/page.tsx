import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-28 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-28',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-28' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260728() {
  await requireViewer('/zh/desk/2026-07-28');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-28 · v2</span>
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
              <span className="dn-big">$63,663</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−2.43%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-28 00:06Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘口（现货 / 永续 / OI / 聪明钱 / 资金费）</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-28 00:06Z（快照钉，t == &ldquo;07-28 08:06&rdquo; 北京时间）</td>
                  <td className="dn-flag">
                    新鲜 · 1 分钟 · 锚定 00:06Z 行（北京 08:06）以便复现 · 文件尾部随实盘滚动
                    · 24h 窗口口径：头条 delta 用同一时钟的前一日基线 t == &ldquo;07-27 08:06&rdquo;
                    北京时间（端点减 24h 前的行，与 07-27 备忘锚点一致）；4h/1h 子窗口流量块用
                    含前一行的基线（北京 04:05 / 07:05 至 08:06 钉），并非精确同时钟的 04:06 / 07:06
                    端点——已在流量段披露；资金费/流量行统计跨 1,441 行窗口；溢价均值剔除空行
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + 一目均衡 + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-28 08:01 北京扫描（00:01Z）</td>
                  <td className="dn-flag">
                    滚动最新文件 · 原样归档于 /opt/desk-note/snapshots/2026-07-28-0006/ ·
                    较快照锚点约滞后 5 分钟 · 进行中 K 线 · 扫描现货 $63,706，24h −2.52%
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-28 00:01Z 快照</td>
                  <td className="dn-flag">
                    约滞后 5 分钟 · Deribit 指数 $63,894 vs 实时 $63,663 · IV 中位 43.2%
                    · 836 个合约 · 头条汇总 +82.8M vs 按到期滚加 +69.40M（= gex_summary.json
                    net_gex $69,396,518）——约 −13.4M 无法对平的来源面板缺口，按 DN-003 血缘披露，
                    且本次滚加值低于头条（与 07-25/07-26/07-27 缺口符号相反，那几日滚加高于头条）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-28 00:01Z
                  </td>
                  <td className="dn-flag">约滞后 5 分钟 · 7d 1h K · 22 资产 · 166 行 · 已归档</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z 分数面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-27 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.85h · 周一 FRED 日频重印落地（周末解冻）：10Y −2bp 至
                    4.71% → 4.69%，TIPS 持平 2.43%，5Y5Y −4bp 至 2.24%，10Y 盈亏平衡 −5bp 至
                    2.21%，HY OAS +2bp 至 2.79% · MOVE 在 07-27 抓取失败后回归并走强至 77.2（+6.33）
                    · DXY 持平 101.24 · 美联储净流动性 $5.917T（无新周频印数）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日线 / 周线 均线矩阵</td>
                  <td className="dn-v-cell">parquet 末根 2026-07-28 00:05Z（收 $63,724.60）</td>
                  <td className="dn-flag">
                    同分钟锚点 · 偏移按实时现货 $63,663.41 重算 · W-SMA200 无法从 2023–2026
                    均线子集算出（188 周 K）；W-SMA150 可算，为 $76,625，但远在上方 / 闲置——
                    200W 周期底本身来自完整历史 / 陷阱监测状态，见下一行
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 支撑监测</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · 末次重算 2026-07-27 00:11Z（今日未重跑）</td>
                  <td className="dn-flag">
                    200W 周期底可得——陷阱监测状态文件末次重算于 2026-07-27（昨日），载末个已完成周
                    2026-07-26 收 $65,375.10，W-SMA200 $63,311.02，连续站上 4（自 2026-07-05 起）。
                    今日独立跑一次完整 btcusdt_1m_*.parquet glob（361 周 K，2019–2026）复现同一
                    已完成周 W-SMA200 $63,311.02，并显示进行中周（截至 2026-08-02）W-SMA200 爬升至
                    $63,534——底部正快速上抬逼近现货。已结定底 $63,311（现货高出 +0.56%）；可算的
                    D-SMA50 $63,311 一美元不差地重合，为最近的均线子集支撑
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
              <span className="dn-v">+4.29%</span>
              <span className="dn-src">实时 · 24h 均值 +6.82%（07-27 为 +6.24%——连续第二天回热）· 最高 +9.18% 年化（0.00838 字段，1 / 1441 行 @ 07-27 13:47Z）· 最低 +3.99% · 0 / 1441 负行 · 资金费 × 1095（原始 0.003915）</span>
            </div>
            <div>
              <span className="dn-k">Δ 资金费 · 24h</span>
              <span className="dn-v bear">在 −2.43% 阴线中继续回热</span>
              <span className="dn-src">区间 +3.99% / +9.18% · 均值 +6.24% → +6.82% 年化 · 仍 0 / 1441 负行——价格下跌时多头仍在付费，回撤中杠杆继续压在多头一侧</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+1.11%（+1,161.6 BTC）</span>
              <span className="dn-src">实时 · 104,428.2 → 105,589.8 · 逆转 07-27 的 −2.86% 收缩重回扩张，但是在阴线上、主动盘全线卖出（现货CVD −1,893.5 / 期货CVD −944.1 / taker −974.2 / big −628.1）——派发 / 多头被套在弱势里，并非侦察仓想要的需求驱动上扩</span>
            </div>
            <div>
              <span className="dn-k">散户（市场）多/空</span>
              <span className="dn-v bear">62.77 / 37.23</span>
              <span className="dn-src">live_db `mkt_long_pct` · 重新拥挤 60.92 → 62.77（24h 低 59.54 于 07-27 14:03Z，高 62.77 于 07-28 00:03Z 近快照）——逆转 07-27 的去拥挤，散户多头在下跌中重新堆回</span>
            </div>
            <div>
              <span className="dn-k">聪明钱净 BTC</span>
              <span className="dn-v bull">+8,620（净多，扩张 +214%）</span>
              <span className="dn-src">实时 · 多 15,998.26 − 空 7,378.49 = +8,619.77 · 自 07-21 06:36Z 穿越以来持续净多，现为本轮 24h 反弹最厚（净峰 +8,941 @ 07-27 23:15Z 近快照，谷 +1,997 @ 07-27 03:51Z）——仍低于 07-24 复苏峰 +10,651，记录性买家由三日减仓翻为激进抄底</span>
            </div>
            <div>
              <span className="dn-k">聪明钱 Δ vs 24h 前</span>
              <span className="dn-v bull">+2,743 → +8,620（+5,877，+214.23%）</span>
              <span className="dn-src">|Δ|/前净 = 5,876.61 / 2,743.16 = 214.23% · Δ多 +2,968.4 / Δ空 −2,908.3——加多同时砍空，正是再武装门槛要求的干净加仓形态，但打在阴线里（抄底），并非站在阳线夺回之后</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.2% / 31.51%</span>
              <span className="dn-src">GEX 中位 IV · 跨 N 个合约的链上中位，非可交易价差 · 30D 收盘对收盘 RV = logret.std × √365 × 100，30 个日收益（parquet 末根 00:05Z）· 链上富价 ~+11.7pt · 29 收益替代口径 31.89%</span>
            </div>
            <div>
              <span className="dn-k">距 0γ 翻转</span>
              <span className="dn-v bull">+1.70%（上方）</span>
              <span className="dn-src">翻转 $62,599 · vs 实时现货 $63,663（+1.70%；63,663.41/62,599.29 − 1 = 1.700%）/ GEX 文件 Deribit 指数 $63,894（+2.07%；63,894/62,599.29 − 1 = 2.068%）——两个参照都为正，本图取现货侧 · 汇总 +82.8M 头条 / +69.40M 滚加 · 较 07-27 的 +191.1M / +211.84M 硬性去 gamma，并在 07-27 全正到期条之后长出一簇新的近月负 gamma</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                D-EMA50 顶盖的夺回在一根完整阴线里被打回——07-27 备忘点名的空头解决方案兑现了，
                顶盖第四次翻为压力——但仓位本子反了向：昨天还在打压夺回的记录性买家，今天翻身狠抄底
              </span>。07-27 收{' '}
              <span className="dn-tag bear">$63,720.80</span>（较 07-26 的 $65,375.10 少
              $1,654.30），跌回它仅守了一根 K 线的{' '}
              <span className="dn-tag bear">D-EMA50 $64,952 顶盖</span> 之下，现货报{' '}
              <span className="dn-tag bear">$63,663（24h −2.43%）</span>，{' '}
              <span className="dn-tag bear">在顶盖下方 −1.98%</span>。这就是空头解决——空头回补式夺回在
              回热的资金费、超买的快周期与聪明钱的空头倾斜里耗尽，与前一份备忘的门槛设定分毫不差。
              但流量腿反了向。聪明钱——{' '}
              <span className="dn-em">仍是记录性买家，净多{' '}
              <span className="dn-tag bull">+8,620</span>，自 07-21 06:36Z 穿越以来持续——把净多扩张
              +214.23%，加多（+2,968）同时砍空（−2,908）</span>，正是再武装门槛要的干净加仓形态。OI{' '}
              <span className="dn-tag bear">扩张 +1.11%（+1,161.6 BTC）</span>，逆转昨日收缩——但打在阴线上、
              主动盘全线卖出（现货CVD −1,893.5，期货CVD −944.1，taker −974.2，big −628.1），所以这次扩张是
              派发形态、多头被套在弱势里，并非侦察仓想要的需求驱动上扩。而夺回多头的利率过滤器即便在周一
              FRED 解冻里仍为{' '}
              <span className="dn-tag bear">FALSE</span>（10Y −2bp 至 4.69%，仍高于 4.55% 门槛）。所以门槛自
              07-27 起反了向：<span className="dn-em">昨天价格腿 TRUE、流量/利率腿 FALSE；今天聪明钱加仓的
              流量腿 TRUE，而价格腿（阳线夺回）FALSE、OI 腿呈派发形、利率仍 FALSE</span>。同一节里打出两个
              互斥信号——丢掉的顶盖与抄底的记录性买家——并且它们正好在底部相遇：现货站在{' '}
              <span className="dn-tag bull">已结定底 200W $63,311 上方 +0.56%</span> 处，可算的 D-SMA50 $63,311
              一美元不差地重合。与此同时，庄家本子硬性去 gamma（+211.84M → +69.40M 滚加），并在 07-27 全正
              到期条之后长出{' '}
              <span className="dn-em">一簇新的近月负 gamma</span>（28JUL −13.30M / 29JUL −4.37M / 30JUL −0.51M），
              外加正上方一个 $64k −11.99M 的口袋（$64k 口袋较 07-25 的 $64,000 −10.23M 平价口袋回归并加深）——
              追空的再武装条件是整条腿里最接近满足的一次。本备忘维持侦察仓{' '}
              <span className="dn-em">DEFERRED、账本 FLAT</span>：不在丢盖阴线、OI 派发、利率 FALSE 之下开侦察多，
              即便聪明钱终于加仓；也不在记录性买家正防守的已结定底追空，即便负 gamma 现身——整份备忘现在只押一件事：
              $63,311 是否守住。
            </p>

            <p>
              BTC 实时报 <span className="dn-tag">$63,663</span>，24h{' '}
              <span className="dn-tag bear">−2.43%</span>——两日反弹后的第一根阴线——落在{' '}
              <span className="dn-tag">$65,686.68 / $63,651.18</span> 区间（高 @ 07-27 13:43Z，低 @ 07-27 23:10Z，
              低点打在快照时分）。<span className="dn-signal">对 D-EMA50 顶盖仅一节的夺回已经让出</span>：07-21
              $66,522.40 → 07-22 $66,082.00 → 07-23 $65,069.60 → 07-24 $64,116.50 → 07-25 $64,338.10 → 07-26
              $65,375.10（唯一的夺回收盘）→{' '}
              <span className="dn-tag bear">07-27 $63,720.80（−$1,654.30）</span>，进行中的 07-28 收盘按 parquet
              末根 <span className="dn-tag">$63,724.60</span> 恰好守在底之上。均线矩阵翻回压顶阶梯：现货丢掉了昨天
              还守着的 <span className="dn-tag bear">D-EMA20 $64,274（−0.95%）</span> /{' '}
              <span className="dn-tag bear">D-SMA20 $64,414（−1.17%）</span> 这对，站在{' '}
              <span className="dn-tag bear">夺回后又丢的 D-EMA50 $64,952 下方 −1.98%</span>（第四次翻为上方压力），
              而整张矩阵上唯一为正的偏移就是{' '}
              <span className="dn-tag bull">D-SMA50 $63,311（+0.56%）</span>，它恰好落在已结定底 200W 上。{' '}
              <span className="dn-em">
                200W 周期底本次可得且获确认：陷阱监测状态（ma200w_trap_watch_state.json，末次重算
                2026-07-27 00:11Z——今日未重跑）载末个已完成周 2026-07-26 的 W-SMA200{' '}
                <span className="dn-tag bull">$63,311.02</span>，连续四周收在其上；今日独立跑完整
                btcusdt_1m_*.parquet glob（361 周 K）对已完成周复现同一 $63,311.02，进行中周（截至 2026-08-02）
                爬升至 <span className="dn-tag">$63,534</span>。所以 $63,311 是已结定底（现货高出 +0.56%，今日低点
                $63,651 守在其上 +$340），D-SMA50 $63,311 一美元不差地重合——一处正快速上抬逼近现货的汇合支撑。
              </span>{' '}
              侦察仓 07-22 ARMED，07-24 D-EMA50 夺回首度失败时转 DEFERRED，07-25/07-26 维持递延，07-27 价格腿点燃
              而流量腿落空，今日价格腿又回落而聪明钱加仓的流量腿点燃——两条腿从未同时打成 TRUE。账本维持 FLAT。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘口 · 夺回在 −2.43% 阴线里被打回 · OI 再扩张（+1.11%）但为派发形主动卖出 · 聪明钱翻为抄底（+214.23%，加多 +2,968，砍空 −2,908）· 散户重新拥挤至 62.77 · 资金费连续第二天回热 · 永续仍贴水</span>
            </h2>

            <p>
              <span className="dn-signal">
                盘口把夺回卖了回去，而聪明钱买家在下跌里狠狠接盘——价格与仓位本子真真切切地劈了叉
              </span>。现货 24h 跌 −2.43%，OI{' '}
              <span className="dn-tag bear">扩张 +1,161.6 BTC（+1.11%）</span>——104,428.2 → 105,589.8——逆转
              07-27 的 −2.86% 收缩。阴线上主动盘全渠道卖出：现货 CVD{' '}
              <span className="dn-tag bear">−1,893.5</span>（本窗无 cb_cvd 重置），期货 CVD{' '}
              <span className="dn-tag bear">−944.1</span>，taker 净{' '}
              <span className="dn-tag bear">−974.2</span>，big 净{' '}
              <span className="dn-tag bear">−628.1（833 笔）</span>——价跌 + OI 升 + 主动卖出，是{' '}
              <span className="dn-em">派发 / 多头陷入弱势</span> 的形态，与昨日空头回补拉升恰好镜像。永续在快照仍对现货{' '}
              <span className="dn-tag bear">贴水 −$46.26</span>（1h 均 −$55.67，4h 均 −$58.93，24h 均 −$63.56，区间
              −$193.81 / +$24.89——基差 24h 内一度升水但绝大多数贴水），与现货主导的抛售、而非期货主导的多头追涨一致。
              1 分钟主动盘偏斜快照 <span className="dn-tag">−0.0</span>（1h 均 +4.02，区间 −20.3 / +41.1）——隔夜抛售后
              在快照走平。{' '}
              <span className="dn-em">OI 在阴线上、整条主动盘全部被抛，恰恰不是侦察仓要的&ldquo;OI 背后有买家&rdquo;那条腿；
              聪明钱仓位口径说买家在场，但成交流量说卖方赢了盘、价格下来了。</span>
            </p>

            <p>
              聪明钱又是最扎眼的——而这次偏向读数的多头侧。{' '}
              <span className="dn-signal">
                记录性买家由三日减仓翻为激进抄底，把净多翻了三倍多
              </span>。聪明钱净 <span className="dn-tag bull">+8,620</span>（多 15,998.26 − 空 7,378.49 = +8,619.77）
              对 24h 前的 <span className="dn-tag">+2,743</span>——{' '}
              <span className="dn-tag bull">Δ净 +5,877（+214.23%）</span>（|+8,619.77 − (+2,743.16)| / 2,743.16 =
              214.23%）。拆解是干净的加仓形态：<span className="dn-tag bull">Δ多 +2,968.4</span>（大幅加多）同时{' '}
              <span className="dn-tag bull">Δ空 −2,908.3</span>（把昨日的空头覆盖砍回）。聪明钱不只加多——它{' '}
              <em>解掉了 07-26 夺回时建的那条空腿</em>，并在下跌里堆多。净值峰{' '}
              <span className="dn-tag bull">+8,941 @ 07-27 23:15Z</span> 近快照，谷{' '}
              <span className="dn-tag">+1,997 @ 07-27 03:51Z</span>——本轮 24h 反弹最厚，但仍低于 07-24 复苏峰 +10,651，
              自 07-21 06:36Z 穿越以来持续为正。{' '}
              <span className="dn-em">这就是再武装门槛整周等的聪明钱加仓腿——但它打在一根丢掉 D-EMA50 顶盖的阴线里、
              打在派发形 OI 扩张里、且利率 FALSE。记录性买家在防守底部，而非确认夺回；周期底上的抄底是&ldquo;别追空&rdquo;
              的理由，还不是&ldquo;开侦察多&rdquo;的理由。</span>
            </p>

            <p>
              杠杆与拥挤这两个读数这次同侧倾斜。{' '}
              <span className="dn-signal">
                资金费连续第二天回热，散户在下跌里重新拥挤回多头一侧
              </span>：实时资金费 <span className="dn-tag">+4.29% 年化</span>（原始 0.003915 × 1095），24h 均值{' '}
              <span className="dn-tag bear">+6.24% → +6.82% 年化</span>（进一步回热），最高{' '}
              <span className="dn-tag bear">+9.18% 年化（0.00838 字段，1 / 1441 行 @ 07-27 13:47Z）</span>，最低 +3.99%，且{' '}
              <span className="dn-tag">0 / 1441 负行</span>——整窗多头付费给空头，且付得比昨天多，即便穿过 −2.43% 的下跌。散户{' '}
              <span className="dn-tag bear">mkt_long_pct 重新拥挤 60.92 → 62.77</span>（24h 低 59.54 于 07-27 14:03Z，
              高 62.77 于 07-28 00:03Z 近快照）——逆转 07-27 去拥挤，价格下跌时多头计数重新堆回。{' '}
              <span className="dn-em">资金费上升 + 散户在阴线里重新拥挤多头，是更重、更高杠杆的多头在下跌盘里付息——一场拥挤的抄底。
              叠加聪明钱堆多，多头一侧如今既广（散户）又有聪明钱背书（SM），但这是一条在丢盖阴线下作战的多头：买盘有信念，
              却无价格确认。</span>
            </p>

            <p>
              分窗流量显示卖压集中在隔夜、最后一小时企稳。24h：价{' '}
              <span className="dn-tag bear">−2.43%</span>，OI{' '}
              <span className="dn-tag bear">+1,161.6 BTC</span>，现货 CVD{' '}
              <span className="dn-tag bear">Δ −1,893.5</span>，期货 CVD{' '}
              <span className="dn-tag bear">Δ −944.1</span>，大单{' '}
              <span className="dn-tag bear">−628.1 BTC / 833 笔</span>，taker 净{' '}
              <span className="dn-tag bear">−974.2</span>——{' '}
              <span className="dn-em">每条渠道都在 OI 扩张里卖出；−2.43% 打在派发上，不是多头挤爆（OI 升）</span>。4h（至快照）：价{' '}
              <span className="dn-tag bear">−2.07%</span>，OI{' '}
              <span className="dn-tag bear">+732.4 BTC</span>，现货 CVD{' '}
              <span className="dn-tag bear">Δ −1,196.6</span>，期货 CVD{' '}
              <span className="dn-tag bear">Δ −1,006.6</span>，大单{' '}
              <span className="dn-tag bear">−508.1 BTC / 139 笔</span>，taker 净{' '}
              <span className="dn-tag bear">−1,011.5</span>——大部分跌幅来自最后 4h，广泛卖出且 OI 仍在堆积。1h：价{' '}
              <span className="dn-tag">−0.04%</span>，OI{' '}
              <span className="dn-tag bull">+20.5 BTC</span>，现货 CVD{' '}
              <span className="dn-tag bear">Δ −61.7</span>，期货 CVD{' '}
              <span className="dn-tag bull">Δ +302.8</span>，大单{' '}
              <span className="dn-tag bear">−85.5 BTC</span>，taker 净{' '}
              <span className="dn-tag bull">+276.2</span>——{' '}
              <em>最后一小时在低位走平：期货接盘、taker 转正，而现货仍略被抛，正好在底部出现早期企稳</em>。24h 是干净的派发形，
              但 1h 显示卖压在 $63,651 处衰竭、期货开始接盘——底在被测试，尚未破。{' '}
              <span className="dn-em">
                基线口径：24h 块用同一时钟前一日行（07-27 08:06 北京），而上方 4h/1h 子窗口块用含前一行的基线
                （07-28 04:05 北京、07-28 07:05 北京至 08:06 钉），并非精确同时钟的 04:06 / 07:06 端点。若按精确同时钟
                1h 口径（07:06 → 08:06），读数为现货 −0.22%、OI +78.5 BTC、现货 CVD −148.5、期货 CVD +263.4、大单净
                −100.2——同一企稳方向（期货仍接盘），但现货漂移与现货 CVD 卖压略大于上方含前一行口径的 1h。
              </span>
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 翻空至 1 多 / 7 空 / 2 中（原 4/3/3）· 快周期现已超卖（RSI 22–29），4h + 1d 新鲜死叉（1 根）· regime 翻为 5/9 动量（JT≥0）趋势延续 · 3d/1w 水下金叉 + 底背离 HTF 提示仍在 · 15m + 1M ⚡TD9 BUY</span>
            </h2>

            <p>
              <span className="dn-signal">
                引擎从拉伸的反弹翻回下行，快周期从超买摆到超卖，regime 翻为趋势延续——但慢周期的筑底签名守住了
              </span>。00:01Z 扫描读{' '}
              <span className="dn-tag">1 多 / 7 空 / 2 中</span>，共 10 个周期（1M 多；15m/30m/1h/4h/8h/1d/3d 空；
              12h/1w 中——来源净计数把 15m 与 3d 记为空，尽管二者带底背离警示，而 1w 是那个被 HTF 底背离簇标记的中性周期），
              较 07-26 的 4 多 / 3 空 / 3 中 翻空。快周期在一节里从超买砸到超卖：15m RSI{' '}
              <span className="dn-tag bear">22.7</span>（水下死叉 11 根，云下 ↑64.9k），30m RSI{' '}
              <span className="dn-tag bear">24.0</span>（水下死叉 4 根，云下），1h RSI{' '}
              <span className="dn-tag bear">28.6</span>（水上死叉 15 根，云下 2 根）——三个深度超卖的快周期喂养一个顶背离簇
              （15m/30m/1h/1d），且该簇现已向下解决。中周期打出新鲜死叉：{' '}
              <span className="dn-tag bear">4h 水下死叉 1 根前</span>（RSI 37.6，云下 1 根）与{' '}
              <span className="dn-tag bear">1d 水上死叉 1 根前</span>（RSI 47.6，云中 61.5k–69.x 8 根）——回落把反弹没带上的 4h 与 1d
              也拖下了水。慢周期与昨日同样是 HTF 筑底提示、未破：一个{' '}
              <span className="dn-tag bull">1w 水下金叉（1 根前）</span>、一个{' '}
              <span className="dn-tag bull">3d 水下金叉 6 根</span>，以及一个 3d/1w 底背离簇（BULL reg）——但 3d 与 1w 均仍在云下
              （3d ↑75.6k 19 根，1w ↑93.8k 26 根）。超卖反转提示在极值上点燃：{' '}
              <span className="dn-tag bull">15m ⚡ TD9 BUY 于 $63,706</span> 与{' '}
              <span className="dn-tag bull">1M ⚡ TD9 BUY 于 $63,706</span>。regime 标签翻为{' '}
              <span className="dn-tag">5/9 周期动量（JT≥0）——偏趋势延续</span>（07-27 为周期反转 / 偏反弹）。{' '}
              <span className="dn-em">
                直读：反弹在引擎上失败，快周期现为洗盘式超卖（短线均值回归的配置），中周期以新鲜死叉确认回落，
                regime 说趋势延续（向下）——但整周搭起来的那套慢周期金叉 + 底背离提示仍在云下结构里完好。一根打进已结定底、
                带 HTF 筑底提示的洗盘阴线，而非干净的趋势破位。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>周期</th><th>收盘</th><th>RSI</th><th>MACD 交叉</th><th>云（一目）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,706</td><td className="num bear">22.7</td><td className="bear">死叉（水下）11根</td><td className="bear">云下 ↑64.9k 39根</td><td>⚡ TD9 BUY</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">63,706</td><td className="num bear">24.0</td><td className="bear">死叉（水下）4根</td><td className="bear">云下 ↑65.1k 7根</td><td>Buy 7</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">63,706</td><td className="num bear">28.6</td><td className="bear">死叉（水上）15根</td><td className="bear">云下 ↑64.6k 2根</td><td>Buy 4</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">63,706</td><td className="num">37.6</td><td className="bear">死叉（水下）1根</td><td className="bear">云下 ↑64.7k 1根</td><td>Buy 4</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">63,706</td><td className="num">41.5</td><td className="bear">死叉（水上）14根</td><td className="neut">云中 62.9k–63.x 刚穿</td><td>Buy 2</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">63,706</td><td className="num">43.6</td><td className="bear">死叉（水上）8根</td><td className="bull">云上 ↓63.4k 28根</td><td>Buy 2</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">63,706</td><td className="num">47.6</td><td className="bear">死叉（水上）1根</td><td className="neut">云中 61.5k–69.x 8根</td><td>Buy 5</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">63,706</td><td className="num">43.8</td><td className="bull">金叉（水下）6根</td><td className="bear">云下 ↑75.6k 19根</td><td>Buy 2</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">63,706</td><td className="num">39.0</td><td className="bull">金叉（水下）1根</td><td className="bear">云下 ↑93.8k 26根</td><td>Sell 3</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">63,706</td><td className="num">43.6</td><td className="neut">—</td><td className="bull">云上 ↓47.0k 29根</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 08:01 北京扫描（00:01Z；滚动最新文件，原样归档于
                    /opt/desk-note/snapshots/2026-07-28-0006/）。头部提示：{' '}
                    <em>15m ⚡ TD9 BUY 打在 $63,706（超卖反转提示）</em>，{' '}
                    <em>1M ⚡ TD9 BUY 打在 $63,706（超卖反转提示）</em>，{' '}
                    <em>顶背离 4：15m/30m/1h/1d · 底背离 3：15m/3d/1w</em>，{' '}
                    <em>regime 5/9 周期动量（JT≥0）——偏趋势延续</em>。扫描现货 $63,706，24h −2.52%
                    （00:01Z MTF 扫描；00:06Z 实时盘口锚点在同一 24h 窗口显示 −2.43%——5 分钟来源缺口与不同基线
                    解释这 0.09pt 差异），24h 高/低 $65,722 / $63,567（MTF 扫描自身 00:01Z 窗口；上文实时盘口 00:06Z
                    区间为 $65,686.68 / $63,651.18——约 $36 / $84 的差为 5 分钟来源缺口，以实时盘口为准），qVol $9.60B。
                    收盘为进行中 K 线；每个周期收线前一律当作暂定值。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              均线矩阵确认丢盖与汇合底。现货 $63,663 站在{' '}
              <span className="dn-tag bull">D-SMA50 $63,311 上方 +0.56%</span>——整张矩阵上唯一为正的偏移，且与已结定底 200W
              一美元不差地重合。上方它丢掉了昨天守着的那对：<span className="dn-tag bear">D-EMA20 $64,274（−0.95%）</span>、{' '}
              <span className="dn-tag bear">D-SMA20 $64,414（−1.17%）</span>，以及夺回后又丢的{' '}
              <span className="dn-tag bear">D-EMA50 $64,952（−1.98%）</span>——该顶盖第四次翻为压力。再往上依次：{' '}
              <span className="dn-tag bear">W-EMA200 $67,143（−5.18%；种子）</span>、{' '}
              <span className="dn-tag bear">D-EMA100 $67,622（−5.85%）</span>——若夺回真来，这是工作首个均线目标，其间夹着庄家
              $66k–$72k 看涨墙带——{' '}
              <span className="dn-tag bear">W-SMA20 $69,385（−8.25%）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $69,435（−8.31%）</span>、{' '}
              <span className="dn-tag bear">D-SMA100 $69,453（−8.34%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $69,746（−8.72%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $70,506（−9.70%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $71,867（−11.42%）</span>、{' '}
              <span className="dn-tag bear">W-EMA150 $73,177（−13.00%；种子）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $73,313（−13.16%）</span>。现货下方唯一支撑是已结定底 200W{' '}
              <span className="dn-tag bull">$63,311（+0.56%）</span> / D-SMA50 汇合，进行中周的 W-SMA200 爬升至 $63,534 紧贴现货下方。
              远在上方且闲置：W-SMA150 $76,625（−16.92%）、W-EMA50 $78,345（−18.74%）、W-EMA100 $78,771（−19.18%）、
              W-SMA50 $84,334（−24.51%）、W-SMA100 $88,563（−28.12%）。{' '}
              <span className="dn-em">
                均线锚定 parquet 末根 2026-07-28 00:05Z（收 $63,724.60）；偏移按实时现货 $63,663.41 重算。显示的均线水平为美元取整；
                偏移按精确序列值计算。W-SMA200 无法从 2023–2026 均线子集算出（188 周 K），而 W-SMA150 $76,625 可算但远在上方且闲置；
                W-EMA150 $73,177 与 W-EMA200 $67,143 由可得历史种子生成、如实标注（两者都在现货上方，故此处为压力而非支撑）；200W 周期底
                $63,311 来自完整历史 glob / 陷阱监测状态（见来源）。日收盘：07-22 $66,082.00、07-23 $65,069.60、07-24 $64,116.50、
                07-25 $64,338.10、07-26 $65,375.10、07-27 $63,720.80、07-28（进行中）$63,724.60——唯一的夺回收盘（07-26）让给了一根
                跌破顶盖的 −$1,654 阴线。
              </span>
            </p>

            <h2 className="dn-sec">
              庄家图 <span className="dn-roman">III · 本子硬性去 gamma 至 +82.8M 头条 / +69.40M 滚加（07-27 为 +191.1M / +211.84M）· 翻转 $62,599（现货上方 +1.70%）· 07-27 全正条之后长出新鲜近月负簇：28JUL −13.30M / 29JUL −4.37M / 30JUL −0.51M · 正上方 $64k −11.99M 口袋（较 07-25 的 $64k 口袋回归并加深）· 31JUL +48.76M 仍主导</span>
            </h2>

            <p>
              <span className="dn-signal">
                庄家本子甩掉三分之二的正 gamma，并在 07-27 全正到期条之后长出一簇新鲜近月负 gamma
              </span>。头条汇总 GEX 为{' '}
              <span className="dn-tag bull">+82.8M / 1%</span>（07-27 为 +191.1M），按到期滚加为{' '}
              <span className="dn-tag bull">+69.40M</span>（= gex_summary.json net_gex $69,396,518，07-27 为 +211.84M）——约
              −13.4M 无法对平的头条对滚加缺口，按 DN-003 血缘披露，且本次滚加低于头条（与 07-25/07-26/07-27 缺口符号相反）。
              0-γ 翻转移动 <span className="dn-tag">$62,632 → $62,599（−$33）</span>，现货 $63,663 站在{' '}
              <span className="dn-tag bull">翻转上方 +1.70%</span>（现货计口径 63,663.41 / 62,599.29 − 1 = +1.700%）；GEX 文件自身的
              &ldquo;距翻转&rdquo;读{' '}
              <span className="dn-tag bull">较其 Deribit 指数 $63,894 高 +2.1%</span>（较实时现货高 $231），即 +2.07%
              （63,894 / 62,599.29 − 1 = +2.068%）——两个参照都为正、现货在两者之上，但缓冲远小于昨日的 +4.18%。墙图上方仍有正的看涨带，
              但正好在现货处冒出一个负口袋：{' '}
              <span className="dn-tag bull">$70k +30.70M</span>（最重墙）、{' '}
              <span className="dn-tag bull">$72k +20.71M</span>、{' '}
              <span className="dn-tag bear">$60k −20.70M</span>（崩盘看跌，现为盘面第二大量级）、{' '}
              <span className="dn-tag bull">$68k +13.69M</span>、{' '}
              <span className="dn-tag bear">$64k −11.99M</span>（正上方的负 gamma 口袋——$64k 负口袋较 07-25 的 $64,000 −10.23M 平价口袋
              回归并加深，并非本轮复苏首个平价负 gamma）、{' '}
              <span className="dn-tag bull">$65k +11.82M</span>、{' '}
              <span className="dn-tag bull">$67k +10.07M</span>、{' '}
              <span className="dn-tag bull">$66k +10.01M</span>、{' '}
              <span className="dn-tag bull">$80k +8.59M</span>、{' '}
              <span className="dn-tag bull">$69k +5.79M</span>。{' '}
              <span className="dn-em">
                $66k–$72k 带仍合计约 +91M 的正 gamma 看涨压力（$66k +10.01M + $67k +10.07M + $68k +13.69M + $69k +5.79M +
                $70k +30.70M + $72k +20.71M = +90.97M），所以夺回仍会撞上上方卖 gamma 的庄家——但正上方 $64k −11.99M 口袋与下方
                $60k −20.70M 意味着近现货本子不再是从前那个干净的阻尼器：若跌破 $63,311 底奔向 $60k，撞上的负 gamma 会放大而非缓冲。
              </span>{' '}
              按到期看，条子不再全正：它长出一簇近月负——28JUL 0.3DTE{' '}
              <span className="dn-tag bear">−13.30M</span>（今日 08:00Z 结算，约在快照后 8h）、29JUL 1.3{' '}
              <span className="dn-tag bear">−4.37M</span>、30JUL 2.3{' '}
              <span className="dn-tag bear">−0.51M</span>（近月负合计 −18.18M）——之后是{' '}
              <span className="dn-tag bull">31JUL 3.3 +48.76M</span> 的主导块，再是 7AUG 10.3 +18.51M、14AUG 17.3 +0.08M、
              28AUG 31.3 +14.53M、25SEP 59.3 +1.47M（列出的前段条至 25SEP 合计 +65.17M；三个远月 25DEC +2.84M / 26MAR27 +0.82M /
              25JUN27 +0.56M 加 +4.22M 得 +69.40M 滚加）。阻尼机制按汇总仍在但在变薄，07-27 全正重置之后近月日历再度带上一个负放大器。
            </p>

            <p>
              期权链 IV 中位为{' '}
              <span className="dn-tag">43.2%</span>（07-27 为 42.5%），对 30D 收盘对收盘 RV 的{' '}
              <span className="dn-tag">31.51%</span>——链上富价{' '}
              <span className="dn-tag">~+11.7pt</span>。跨 N 个合约（今日 836）的链上中位，<span className="dn-em">非</span>可交易价差；
              到期/行权价级 vega、偏斜与期限结构仍未加载；波动率读数维持仅作框架。RV 方法：30D 收盘对收盘，logret.std × √365 × 100，
              取最近 30 个日对数收益（= 31 个连续日收盘），锚定 parquet 末根 2026-07-28 00:05Z；29 收益替代口径读 31.89%。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 周一 FRED 解冻——10Y −2bp 至 4.69%（夺回多头利率过滤器仍 FALSE，距触发 14bp）· TIPS 持平 2.43%，盈亏平衡 −5bp 至 2.21% · MOVE 回归并走强至 77.2 · 利率/美元 极端避险 vs 信用/流动性宽松 · DXY 持平 101.24</span>
            </h2>

            <p>
              <span className="dn-signal">
                周一 FRED 重印解了周末的冻结但几乎没动——10Y 微跌、实际收益率持稳、信用略走阔、夺回多头利率过滤器仍 FALSE
              </span>。仪表盘渲染为 2026-07-27 22:16Z，早于快照约 1.85h，FRED 日频序列已为周一 07-27 重印。美 10Y 名义{' '}
              <span className="dn-tag bear">4.69%（−2.0bp）</span>，regime z{' '}
              <span className="dn-tag bear">+2.50</span>，偶发 z{' '}
              <span className="dn-tag bear">+1.91</span>——极端避险，从冻结的 4.71% 缓和 2bp。10Y TIPS 实际{' '}
              <span className="dn-tag bear">2.43%（0.0bp）</span>，regime z{' '}
              <span className="dn-tag bear">+2.98</span>，偶发 z{' '}
              <span className="dn-tag bear">+1.86</span>——极端避险，持平。5Y5Y 盈亏平衡通胀{' '}
              <span className="dn-tag">2.24%（−4.0bp）</span>，10Y 盈亏平衡{' '}
              <span className="dn-tag">2.21%（−5.0bp）</span>——通胀补偿走缓。HY OAS{' '}
              <span className="dn-tag bull">2.79%（+2.0bp）</span>，regime z{' '}
              <span className="dn-tag bull">−0.56</span>，偶发 z +1.54——仍&ldquo;宽松&rdquo;但略走阔。MOVE 债市波动率在昨日抓取失败后
              回归并走强：{' '}
              <span className="dn-tag">77.2（+6.33）</span>，regime z +0.34，偶发 z +1.84——中性，但为本轮复苏最高的债市波动率读数。旁支：DXY{' '}
              <span className="dn-tag bear">101.24（−0.24 / 较 07-27 持平）</span>，regime z +2.07——极端避险；美联储净流动性{' '}
              <span className="dn-tag bull">$5.917T</span>（无新周频印数），偶发 z −2.47——宽松。美日 10Y 利差{' '}
              <span className="dn-tag">2.02%（−2.0bp）</span>；美元/日元{' '}
              <span className="dn-tag">163.65</span>。NFCI{' '}
              <span className="dn-tag bull">−0.552</span>，RISK-ON（陈旧 10 天）。{' '}
              <span className="dn-em">
                净结论：夺回多头利率过滤器（10Y &lt; 4.55%）在 4.69% 处仍 FALSE——周一解冻把它挪近 2bp，但距触发仍有 14bp。宏观劈叉未变：
                利率与美元坐在极端避险（偏紧），而信用（HY OAS 宽松）与流动性（净流动性宽松、NFCI RISK-ON）维持宽松，MOVE 回归且更强是一处温和的债市波动率新皱褶。
                本次印数没有翻转侦察仓的利率门槛；下一份 FRED 日频才是要盯的。
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
                <tr><td>美 10Y 名义</td><td className="num">4.69%</td><td className="num bull">−2.0bp</td><td className="num bear">+2.50</td><td className="num bear">+1.91</td><td className="bear">极端避险 · 周一解冻</td></tr>
                <tr><td>10Y TIPS 实际</td><td className="num">2.43%</td><td className="num">0.0bp</td><td className="num bear">+2.98</td><td className="num bear">+1.86</td><td className="bear">极端避险 · 持平</td></tr>
                <tr><td>5Y5Y 盈亏平衡通胀</td><td className="num">2.24%</td><td className="num bull">−4.0bp</td><td className="num">+0.22</td><td className="num">+0.96</td><td className="neut">无标签</td></tr>
                <tr><td>10Y 盈亏平衡</td><td className="num">2.21%</td><td className="num bull">−5.0bp</td><td className="num">−1.69</td><td className="num">−1.11</td><td className="neut">无标签</td></tr>
                <tr><td>HY OAS</td><td className="num">2.79%</td><td className="num bear">+2.0bp</td><td className="num bull">−0.56</td><td className="num">+1.54</td><td className="bull">宽松 · 略走阔</td></tr>
                <tr><td>芝加哥联储 NFCI</td><td className="num">−0.552</td><td className="num">−0.01</td><td className="num bull">−1.51</td><td className="num bull">−1.71</td><td className="stale">RISK-ON · 陈旧 10 天</td></tr>
                <tr><td>MOVE 债市波动率</td><td className="num">77.2</td><td className="num bear">+6.33</td><td className="num">+0.34</td><td className="num">+1.84</td><td className="neut">中性 · 回归、更强</td></tr>
                <tr><td>DXY</td><td className="num">101.24</td><td className="num">−0.24</td><td className="num bear">+2.07</td><td className="num">+0.57</td><td className="bear">极端避险 · 持平</td></tr>
                <tr><td>美联储净流动性</td><td className="num">$5.917T</td><td className="num">−0.069T</td><td className="num">+0.56</td><td className="num bull">−2.47</td><td className="bull">宽松 · 无新周频印数</td></tr>
                <tr><td>美日 10Y 利差</td><td className="num">2.02%</td><td className="num bull">−2.0bp</td><td className="num">−0.32</td><td className="num bear">+1.91</td><td className="neut">中性</td></tr>
                <tr><td>美元/日元</td><td className="num">163.65</td><td className="num">−0.18</td><td className="num bear">+1.71</td><td className="num bear">+1.92</td><td className="neut">日元偏软</td></tr>
                <tr><td>日本 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月频）</td><td className="num stale">+2.42</td><td className="num stale">+1.09</td><td className="stale">月频 · 勿倚重</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗口，22 资产，166 行，汇总 00:01Z——{' '}
              <span className="dn-em">7 天滚动读数，非今日</span>）。非对角均值{' '}
              <span className="dn-tag">|r| 0.212</span>——特异（idiosyncratic）带，较 07-27 的 0.241 更松。BTC 最强联系是{' '}
              <span className="dn-tag">NQ +0.405</span>（从 +0.510 缓和），其后 SP500{' '}
              <span className="dn-tag">+0.330</span>、URNM{' '}
              <span className="dn-tag">+0.320</span>、TSLA{' '}
              <span className="dn-tag">+0.320</span>、PLAT{' '}
              <span className="dn-tag">+0.316</span>、SILVER{' '}
              <span className="dn-tag">+0.305</span>、JP225{' '}
              <span className="dn-tag">+0.296</span>、GOLD{' '}
              <span className="dn-tag">+0.273</span>、COPPER{' '}
              <span className="dn-tag">+0.264</span>、AAPL{' '}
              <span className="dn-tag">−0.189</span>。7d 表现才是关键，且它较 07-27 翻了向：{' '}
              <span className="dn-tag bear">BTC −2.82%</span> 现落在红色股票簇内、并略微跑输引擎——NQ{' '}
              <span className="dn-tag bear">−2.38%</span>（BTC 落后 0.44pt）、SP500{' '}
              <span className="dn-tag bear">−0.58%</span>、JP225{' '}
              <span className="dn-tag bear">−2.15%</span>，大盘科技复合仍深红——TSLA{' '}
              <span className="dn-tag bear">−17.07%</span>、META{' '}
              <span className="dn-tag bear">−7.87%</span>、GOOGL{' '}
              <span className="dn-tag bear">−7.59%</span>、AMZN{' '}
              <span className="dn-tag bear">−7.38%</span>、NVDA{' '}
              <span className="dn-tag bear">−3.37%</span>、MSFT{' '}
              <span className="dn-tag bear">−2.92%</span>，而 AAPL{' '}
              <span className="dn-tag bull">+3.07%</span> 是唯一翻绿的大盘科技。金属与铀跑赢一切：URNM{' '}
              <span className="dn-tag bull">+3.77%</span>、SILVER{' '}
              <span className="dn-tag bull">+2.52%</span>、PALL{' '}
              <span className="dn-tag bull">+2.18%</span>、PLAT{' '}
              <span className="dn-tag bull">+1.19%</span>、GOLD{' '}
              <span className="dn-tag bull">+1.10%</span>、COPPER{' '}
              <span className="dn-tag bull">+0.36%</span>；能源偏软（CL −0.78%、BRENT −2.03%、NGAS −2.15%）。{' '}
              <span className="dn-em">
                07-27 那个&ldquo;BTC 领跑股票/大盘科技簇&rdquo;的读数已经滚掉：在当前 7d 窗口 BTC（−2.82%）现在略微落后 NQ（−2.38%）、
                落在红色股票簇内，所以那个股票相对领先的提示已经淡去——BTC 是随股票翻落而动、而非逆之，同时金属/铀维持风险买盘。
                按 DN-001 血缘，这是一条松动的、特异的盘面，BTC 回到股票簇内，两个方向都不是 RS 领先信号。
              </span>{' '}
              日本 10Y 月频 2.67% 带月频标签——勿倚重。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 回补反弹侦察仓 DEFERRED（第 5 天）——腿反了向：聪明钱加仓的流量腿现已点燃（+214%）但价格腿失败（阴线丢掉 D-EMA50）· 追空再武装为整轮最接近满足（近月负 gamma 现身 + 丢盖）但在记录性买家防守的已结定底面前按兵不动 · 账本 FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                07-27 备忘门控的空头解决兑现了——同一节里记录性买家翻身抄底，把侦察仓的门槛腿又反了一次
              </span>。07-27 备忘说，若夺回&ldquo;在回热资金费、超买快周期、聪明钱空头倾斜里耗尽，把现货压回 $65,062 之下、
              顶盖第四次翻为压力&rdquo;则空头解决。它兑现了：07-27 收 $63,720.80 于 D-EMA50 下方，快周期从超买洗到超卖，顶盖翻为压力。
              但昨天价格腿 TRUE、流量腿 FALSE，今天正相反——{' '}
              <em>聪明钱加仓</em> 腿狠狠点燃（净多 +214.23%，加多 +2,968，砍空 −2,908），而 <em>价格</em> 腿失败（阴线跌破顶盖），
              OI 扩张是派发形而非需求驱动，夺回多头利率过滤器在 4.69% 仍 FALSE。侦察仓的两条腿仍从未同时打成 TRUE。今日交易本子：无侦察开仓、
              无追空、无新对冲——有纪律的读法是维持侦察仓 DEFERRED，等价格在阳线上夺回顶盖并与现已点燃的聪明钱加仓配对，同时在记录性买家显然正防守的
              已结定底面前把追空按住。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · 侦察 · DEFERRED · 腿反了向——聪明钱加仓腿点燃，价格腿失败 · 等夺回与买家配对</span>
              <div className="dn-trade-name">
                回补反弹侦察仓——聪明钱加仓腿终于点燃（+214%，加多且砍空），但 D-EMA50 顶盖在阴线里丢掉，OI 扩张呈派发形，利率仍 FALSE
              </div>
              <div className="dn-thesis">
                再武装门槛的腿自 07-27 起反了向。昨天价格腿（阳线夺回 D-EMA50）TRUE、流量腿 FALSE；今天 <em>聪明钱加仓</em> 腿首度 TRUE
                ——聪明钱净多扩张 +214.23% 至 +8,620，加多（+2,968）同时砍掉空头覆盖（−2,908），正是门槛指定的干净加仓形态——但 <em>价格</em>
                腿回落失败：07-27 收 $63,720.80 于 D-EMA50 $64,952 顶盖之下，现货守在其下 −1.98%。其余腿亦不确认：OI 扩张 +1.11% 但打在阴线上、
                主动盘全线卖出（现货CVD −1,893.5 / 期货CVD −944.1 / taker −974.2），是派发形而非需求驱动；夺回多头利率过滤器在 10Y 4.69% 仍
                FALSE（周一解冻，距触发 14bp）。记录性买家在防守底部、而非确认夺回——周期底上的抄底，不是突破。有纪律的开仓维持递延，直到价格在阳线上夺回顶盖
                且聪明钱加仓持续、OI 转为需求驱动。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">再武装门槛（聪明钱加仓腿现 TRUE）</span><span className="dn-lvl-v bull">聪明钱净多扩张 +214.23% 至 +8,620（Δ多 +2,968 / Δ空 −2,908）——干净加仓形态，本轮复苏首度 TRUE</span></div>
                <div><span className="dn-lvl-k">再武装门槛（价格 / OI / 利率腿 FALSE）</span><span className="dn-lvl-v bear">阳线夺回 D-EMA50（FALSE——07-27 收 $63,720.80 于 $64,952 顶盖下）且 OI 需求驱动（FALSE——+1.11% 但派发形、主动卖出）且 10Y &lt; 4.55%（FALSE——4.69% 周一解冻）</span></div>
                <div><span className="dn-lvl-k">侦察开仓</span><span className="dn-lvl-v bull">在阳线夺回 D-EMA50、且与聪明钱加仓持续配对、OI 转需求驱动（或利率印数 &lt; 4.55%）时：侦察多 0.2R</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">日收 &lt; $63,311（已结定底 200W / D-SMA50 汇合——收破即终结复苏读数）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$66k–$72k 看涨墙带为实操上限；工作均线目标 D-EMA100 $67,622，$66k / $67k 墙处减半</span></div>
                <div><span className="dn-lvl-k">仓位</span><span className="dn-lvl-v">确认夺回上 0.2R · 不在仅有聪明钱加仓打进阴线时开</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>确认再武装约 $64,952 开仓（D-EMA50 夺回），止损 $63,311（已结定底 / D-SMA50）= 约 $1,641 风险；工作目标
                D-EMA100 $67,622 = 约 $2,670 回报 ≈ 1.63:1——但 $66k–$72k 看涨墙带盖住路径，故现实首目标是 $66k / $67k 墙，到那里的 R/R 更薄。
                <b>硬规则：</b>侦察仓不在聪明钱加仓打进阴线时开。记录性买家以抄底防守底部，这是把追空按住的理由——不是买丢掉顶盖的理由。确认腿是价格在阳线上
                夺回 D-EMA50 且聪明钱加仓仍在、OI 转需求驱动，按此顺序；丢盖之下、派发形 OI 上的抄底是底部防守，不是做多触发。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">空 · 追空 · 按兵不动 · 再武装为本轮最接近满足，但打进记录性买家防守的已结定底</span>
              <div className="dn-trade-name">
                追空——07-27 再武装条件为整周最接近满足（近月负 gamma 现身 + 现货收破 D-EMA50），但在 $63,311、聪明钱堆多面前按兵不动
              </div>
              <div className="dn-thesis">
                07-27 备忘把追空再武装设为&ldquo;28JUL–31JUL 窗口内新增一块近月负 gamma，且现货在收盘上把 D-EMA50 打回 $65,062 之下&rdquo;。两条腿现在
                可以说都满足了：庄家条子长出近月负簇（28JUL −13.30M / 29JUL −4.37M / 30JUL −0.51M = −18.18M），正上方带 $64k −11.99M 口袋，且现货在 07-27
                收盘丢掉 D-EMA50。这是整轮复苏里追空最接近武装的一次。但它维持按兵不动，因为该配置正好撞进已结定底 200W $63,311（现货仅高出 +0.56%，今日低点守在其上
                +$340）——而记录性买家正是在这一水位堆多（聪明钱 +214.23%）。做空一个被净多聪明钱本子防守、庄家汇总仍净正（+69.40M 滚加、31JUL +48.76M 主导）的周期底，
                即便近月负出现，也是低质量的空。追空只在底部被击穿时武装，不在里面。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">再武装腿（本轮最接近满足）</span><span className="dn-lvl-v bear">近月负 gamma 现身（28JUL −13.30M / 29JUL −4.37M / 30JUL −0.51M，$64k −11.99M 口袋上方）且现货在 07-27 收盘丢掉 D-EMA50——07-27 两条腿现可说都 TRUE</span></div>
                <div><span className="dn-lvl-k">为何仍按兵不动</span><span className="dn-lvl-v bear">打进聪明钱以 +214% 净多抄底防守的已结定底 200W $63,311（现货上方 +0.56%）· 庄家汇总仍净正 +69.40M（31JUL +48.76M 主导）</span></div>
                <div><span className="dn-lvl-k">何以武装该空</span><span className="dn-lvl-v bear">日收 &lt; $63,311（破底）且聪明钱开始回撤其净多、近月负仍在——则空在破位上武装，止损回到 D-EMA50 $64,952 上方</span></div>
                <div><span className="dn-lvl-k">禁做</span><span className="dn-lvl-v">不在记录性买家防守的已结定底里追空；等破位</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b>近月负 gamma 与丢盖是真的，把追空从&ldquo;硬性按住&rdquo;挪到&ldquo;破底即武装&rdquo;。但做空&ldquo;进入底部&rdquo;与做空&ldquo;已破底部&rdquo;的差别就是全部优势：
                已结的 $63,311 由净多聪明钱本子与仍净正的庄家汇总防守，故打进去的空是在周期底与记录性买家对打。若 $63,311 在收盘上被破、负仍在、聪明钱回撤，则下方放大式负 gamma
                （$64k −11.99M、$60k −20.70M）是顺风——在那之前，空等破位。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 备忘押在底上——丢盖 + 抄底的记录性买家 + 新鲜近月负 gamma 全在 $63,311 相遇</span>
              <div className="dn-trade-name">
                底部测试——夺回回落到已结定底 200W / D-SMA50 汇合，聪明钱防守、近月负 gamma 现身；关键是 $63,311 能否守住
              </div>
              <div className="dn-thesis">
                五节里复苏都门控在 D-EMA50 夺回；它 07-26 打出、07-27 回落，如今整个结构压缩到一个水位。已结定底 200W $63,311 与可算的 D-SMA50 $63,311 一美元不差重合，
                现货高出 +0.56%，三个信号在此相遇：丢盖（空）、记录性买家在下跌里堆多（多）、以及 07-27 全正条之后一簇新鲜近月负 gamma（若破底则为下方放大器）。若 $63,311 守住且聪明钱加仓
                持续、同时价格在阳线上夺回 D-EMA50，则抄底转成侦察仓等待的需求腿，侦察仓实弹武装。若底在收盘上被破——资金费回热、散户在弱势里重新拥挤多头（挤爆的燃料）、近月负放大——则复苏读数终结、
                追空在破位上武装。框架盯 $63,311 收盘与聪明钱净多轨迹为决定性提示，而非下一根 K 线。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">多头解决</span><span className="dn-lvl-v bull">$63,311 守住 且 聪明钱加仓持续 且 价格在阳线上夺回 D-EMA50 $64,952——抄底转成需求，侦察仓实弹武装</span></div>
                <div><span className="dn-lvl-k">空头解决</span><span className="dn-lvl-v bear">日收 &lt; $63,311、近月负仍在、聪明钱回撤净多——复苏读数终结，追空在破位上武装，下方放大式负 gamma（$64k −11.99M、$60k −20.70M）</span></div>
                <div><span className="dn-lvl-k">决定性提示</span><span className="dn-lvl-v">$63,311 日收（守 vs 破）与聪明钱净多轨迹（持续 vs 回撤）——非盘中价位</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>这里的优势在于盘面上两个最强信号在同一水位指向相反——丢盖说更低，+214% 聪明钱抄底说底会守。血缘不靠在水位上选边来解决，而让 $63,311 收盘去解决。
                聪明钱加仓持续下的守住是需求腿；聪明钱回撤下的破位是挤爆。读收盘与聪明钱轨迹，而非盘中上下影线。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · D-EMA50 夺回在阴线里回落（空头解决已点燃）· 聪明钱加仓腿点燃（+214%）但价格腿失败 · 侦察仓 DEFERRED 第 5 天 · 追空再武装最接近满足但在底面前按兵不动 · 账本 FLAT</span>
            </h2>

            <p>
              在 07-27 的决策条件里：<em>夺回回落（空头解决）</em> 干净点燃（07-27 收 $63,720.80 于 D-EMA50 下、顶盖第四次翻为压力）；
              <em>D-EMA50 站稳并由聪明钱再加仓且 OI 需求扩张相伴</em> 的侦察触发未点燃（聪明钱加仓点燃但价格站稳未成，且 OI 扩张呈派发形）；
              <em>夺回多头利率过滤器</em> 维持 FALSE（10Y 4.69% &gt; 4.55%，周一解冻）；<em>已结定底止损</em> 未触发（无收破 $63,311——现货高出 +0.56%，
              低点 $63,651 守住）；<em>追空再武装</em> 从硬按住挪向武装（近月负 gamma 现身 + 丢盖）但在底面前维持按兵不动。{' '}
              <em>空头解决点燃了，侦察仓的聪明钱加仓腿点燃但价格腿回落失败，整份备忘压缩到 $63,311 底上。</em>今日条件围绕丢盖、抄底的记录性买家、
              一个变薄且带新鲜近月负的庄家本子、以及一处正被测试的已结定底重新排定：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>夺回回落（空头解决——07-27 门槛）</td><td className="bear">已点燃——07-27 收 $63,720.80 &lt; D-EMA50 $64,952；顶盖第四次翻为压力</td><td>空头回补式夺回如门控般耗尽；侦察仓价格腿丢失，结构回到 D-EMA50 下受压</td></tr>
                <tr><td>聪明钱加仓净多（再武装流量腿）</td><td className="bull">已点燃——聪明钱 +214.23% 至 +8,620（Δ多 +2,968，Δ空 −2,908）——干净加仓形态</td><td>门槛等的流量腿已满足；但打在阴线里，故侦察开仓前须与夺回配对</td></tr>
                <tr><td>阳线夺回 D-EMA50（再武装价格腿）</td><td className="bear">FALSE——07-27 阴线 $63,720.80 丢掉顶盖；现货下方 −1.98%</td><td>不开侦察多：聪明钱加仓是底部防守，非确认夺回</td></tr>
                <tr><td>OI 背后有买家（再武装流量腿）</td><td className="bear">FALSE——OI +1.11% 但打在阴线上、主动卖出（派发形）</td><td>不开侦察多：OI 扩张是多头陷弱、非需求驱动</td></tr>
                <tr><td>夺回多头利率过滤器</td><td className="bear">FALSE——10Y 4.69% &gt; 4.55%（周一解冻，距触发 14bp）</td><td>独立过滤器为假；下一份 FRED 日频才可能移动它</td></tr>
                <tr><td>回补反弹侦察仓（多）</td><td className="bull">阳线夺回 D-EMA50 且与聪明钱加仓持续、OI 需求驱动配对（或 10Y &lt; 4.55%）</td><td>侦察多 0.2R，止损 $63,311，工作目标 D-EMA100 $67,622（受 $66k–$72k 看涨墙盖），R/R ~1.63:1</td></tr>
                <tr><td>已结定底止损 / 底部测试</td><td className="bear">日收 &lt; $63,311（200W W-SMA200 / D-SMA50 汇合）</td><td>终结复苏读数；追空在破位上武装，下方近月负放大</td></tr>
                <tr><td>追空再武装（最接近满足）</td><td className="bear">近月负 gamma 现身 + 丢盖——07-27 两腿现可说都 TRUE——但在 $63,311 破底前按兵不动</td><td>不在记录性买家防守的底里追空；破位上武装，止损在 D-EMA50 $64,952 上方</td></tr>
              </tbody>
            </table>

            <p>
              重写<em>这份</em>备忘的那一行是{' '}
              <span className="dn-signal">
                已结定底 200W / D-SMA50 汇合 $63,311 会否在记录性买家防守下守住——抄底随价格在阳线上夺回 D-EMA50 而转成需求腿——还是会在回热的资金费、
                重新拥挤的散户多头、以及 07-27 全正条之后新鲜近月负 gamma 里于收盘破位，终结复苏读数、在破位上武装追空
              </span>。交易台等了五节的夺回一节就让出，同一节记录性买家翻身防守底部——于是备忘压缩到 $63,311，那里丢盖、+214% 聪明钱抄底、以及一个新鲜近月负放大器全在相遇。
              在底解决之前，本备忘照写运行：侦察仓 DEFERRED 第五天，其聪明钱加仓腿终于 TRUE、但价格/OI/利率腿 FALSE；追空在底面前按兵不动，尽管其再武装为本轮最接近满足；
              空头价差不在单一周一解冻 10Y 腿上重建；账本在底上维持 FLAT。MTF 洗到超卖、其 HTF 筑底提示完好，庄家本子变薄并长出新鲜近月负，BTC 滑回红色股票簇——但记录性买家正在周期底堆多，
              这才是交易台接下来要读的提示。未来 24h 的正确读法是{' '}
              <em>耐心——水位在做工；读 $63,311 收盘、别读影线，别做空聪明钱防守的底、也别买价格刚丢掉的顶盖</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计）
            </span>
            <p>
              <b>状态：</b>本为 v2 中文版，与 v2 英文版并行、数据零漂移；由 v1 在 STAGE B codex 敌对式审计后晋级，STAGE C 按裁定逐条修订。锚定 2026-07-28 00:06Z 快照
              （实盘 t == &ldquo;07-28 08:06&rdquo; 北京）。审计裁定 PASS-WITH-NOTES：0 CRITICAL、5 MAJOR（DN-001..DN-005），均已解决。
            </p>
            <p>
              <b>DN-001（MAJOR）——MTF 计数。</b>原写&ldquo;1 多 / 5 空 / 4 中&rdquo;为误；对照归档 mtf_div_latest.html（chips：15m空 30m空 1h空 4h空 8h空 12h中 1d空 3d空 1w中 1M多）
              为 <b>1 多 / 7 空 / 2 中</b>，已改罗马小结、正文计数与逐周期归类，并披露来源把带底背离警示的 15m/3d 净记为空、1w 为 HTF 底背离簇标记的中性周期。已解决。
            </p>
            <p>
              <b>DN-002（MAJOR）——4h/1h 子窗口基线口径。</b>已在流量段与数据来源披露：24h 块用同时钟前一日行，4h/1h 子窗口块用含前一行的基线（非精确 04:06 / 07:06 端点），并给出精确同时钟 1h 读数
              （现货 −0.22%、OI +78.5、现货 CVD −148.5、期货 CVD +263.4、大单净 −100.2）。已解决。
            </p>
            <p>
              <b>DN-003（MAJOR）——&ldquo;整轮复苏最厚净多&rdquo;。</b>改为&ldquo;本轮 24h 反弹最厚（净峰 +8,941 @ 07-27 23:15Z，谷 +1,997 @ 07-27 03:51Z）——仍低于 07-24 复苏峰 +10,651&rdquo;，
              同一口径的头条对滚加 GEX 缺口按血缘披露（+82.8M 头条 / +69.40M 滚加，约 −13.4M）。已解决。
            </p>
            <p>
              <b>DN-004（MAJOR）——近月负 / 平价负口袋的&ldquo;首次&rdquo;新颖性。</b>所有&ldquo;整轮复苏首次&rdquo;类断言改为&ldquo;07-27 全正条之后新鲜&rdquo;；$64k 口袋写为&ldquo;较 07-25 的 $64,000 −10.23M
              平价口袋回归并加深&rdquo;。已解决。
            </p>
            <p>
              <b>DN-005（MAJOR）——$66k–$72k 带求和。</b>由&ldquo;约 +67M&rdquo;改为&ldquo;约 +91M（$66k +10.01M + $67k +10.07M + $68k +13.69M + $69k +5.79M + $70k +30.70M + $72k +20.71M = +90.97M）&rdquo;。已解决。
            </p>
            <p>
              <b>ask-deepseek 二审 MINOR（取整项）：</b>裁定不改——codex 已明确清算聪明钱算术（净 +8,619.770，基线 +2,743.161，Δ +5,876.609）；正文 +5,877 / +2,743 为已披露的取整形式且相邻给出精确计算。
            </p>
            <p>
              <b>codex 确认无误（重算锚点，v2 未改）：</b>资金费 × 1095；R/R（开仓 $64,952，止损 $63,311，目标 $67,622 → 1.63:1）；30D RV 31.51%（29 收益替代 31.89%）；跨资产 |r| 0.212、BTC −2.82% vs NQ −2.38%；
              宏观 Tier-1（10Y 4.69% 周一解冻、HY OAS 2.79%、MOVE 77.2 回归、DXY 101.24、净流动性 $5.917T）；200W 定底 $63,311.02（末完成周 2026-07-26），进行中周 $63,534 作上抬旗披露、未用作止损；requireViewer 门控（路径 /zh/desk/2026-07-28，首句）。整体：<b>已过 codex 敌对式审计</b>。
            </p>
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘为 Hysteresis Research（迟滞研究）合伙人内部讨论所备，<em>非投资建议、非招揽、非要约</em>，亦未针对任何接收方情况个性化。数字反映单一原子快照
            （2026-07-28 00:06Z），分段出处见上方来源带；宏观 Tier-1 面板渲染为 2026-07-27 22:16Z（早于快照约 1.85h）并含周一 FRED 日频重印，部分输入明确陈旧或待定并已如实标注。
            水位、仓位与条件仅示意交易台流程，非长期建议。过往相关性、gamma 与仓位形态不约束未来盘面。衍生品有全额亏损风险，若带杠杆，亏损可超出已缴保证金。<em>请自行研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                顶盖只夺回一节便让出——空头解决点燃了。但同一天记录性买家翻身在下跌里堆多，整份备忘压缩到已结定底 $63,311。别做空聪明钱防守的底，也别买价格刚丢掉的顶盖。读收盘。耐心。
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
            v2 · 2026-07-28 00:06Z 快照 · 来源：live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
