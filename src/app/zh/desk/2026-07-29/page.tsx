import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-29 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-29',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-29' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260729() {
  await requireViewer('/zh/desk/2026-07-29');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-29 · v2</span>
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
              <span className="dn-big">$64,042</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.45%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-29 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘口（现货 / 永续 / OI / 聪明钱 / 资金费）</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-29 00:05Z（快照钉，t == &ldquo;07-29 08:05&rdquo; 北京时间）</td>
                  <td className="dn-flag">
                    新鲜 · 1 分钟 · 锚定 00:05Z 行（北京 08:05）以便复现 · 文件尾部随实盘滚动
                    · 24h 窗口口径：头条 delta 用同一时钟的前一日基线 t == &ldquo;07-28 08:05&rdquo;
                    北京时间（端点减 24h 前的行，与 07-28 备忘锚点一致）。与 07-28 不同，本次序列在
                    子窗口间连续，故 4h/1h 流量块（含前一行基线，北京 04:05 / 07:05 至 08:05 钉）
                    复现精确同时钟的 04:05 / 07:05 端点——无基线缺口需披露 · 资金费/流量行统计跨
                    1,441 行窗口；溢价均值剔除空行
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + 一目均衡 + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-29 08:01 北京扫描（00:01Z）</td>
                  <td className="dn-flag">
                    滚动最新文件 · 原样归档于 /opt/desk-note/snapshots/2026-07-29-0005/ ·
                    较快照锚点约滞后 4 分钟 · 进行中 K 线 · 扫描现货 $63,955，24h +0.37%
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-29 00:01Z 快照</td>
                  <td className="dn-flag">
                    约滞后 4 分钟 · Deribit 指数 $64,139 vs 实时 $64,042 · IV 中位 43.5%
                    · 838 个合约 · 头条汇总 +100.4M vs 按到期滚加 +116.31M（= gex_summary.json
                    net_gex $116,313,503）——约 +15.9M 无法对平的来源面板缺口，按 DN-003 血缘披露，
                    且本次滚加值再度高于头条（与 07-25/07-26/07-27 缺口符号相同，逆转 07-28 那日滚加低于头条）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-29 00:01Z
                  </td>
                  <td className="dn-flag">约滞后 4 分钟 · 7d 1h K · 22 资产 · 167 行 · 已归档</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z 分数面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-28 22:17Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.8h · 周二 FRED 日频重印落地：10Y −4bp 至 4.69% → 4.65%，TIPS +1bp
                    至 2.44%，5Y5Y −4bp 至 2.24%，10Y 盈亏平衡 −5bp 至 2.21%，HY OAS +2bp 至 2.81%
                    · MOVE 持平 77.2 · DXY 101.39（较 07-27 +0.15）· 美联储净流动性 $5.917T（无新周频印数）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日线 / 周线 均线矩阵</td>
                  <td className="dn-v-cell">parquet 末根 2026-07-29 00:05Z（收 $64,034.50）</td>
                  <td className="dn-flag">
                    同分钟锚点 · 偏移按实时现货 $64,041.86 重算 · W-SMA200 无法从 2023–2026
                    均线子集算出（188 周 K）；W-SMA150 可算，为 $76,627，但远在上方 / 闲置——
                    200W 周期底本身来自完整历史 / 陷阱监测状态，见下一行
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
                    $63,536——底部正快速上抬逼近现货。已结定底 $63,311（现货高出 +1.15%）；可算的
                    D-SMA50 $63,361 为最近的均线子集支撑，现高出定底 +$50（07-28 二者一美元不差重合）
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
              <span className="dn-v">+10.95%</span>
              <span className="dn-src">实时 · 顶在 +10.95% 上限（原始 0.01 字段 × 1095）· 24h 均值 +4.70%（较 07-28 的 +6.82% 回落）· 最高 +10.95% 年化（0.01 字段，上限，344 / 1441 行）· 最低 −3.32% 年化（−0.003036 字段 @ 07-28 12:11 北京）· 300 / 1441 负行（原为 0 / 1441）——资金费先转负再回到上限，走了个来回</span>
            </div>
            <div>
              <span className="dn-k">Δ 资金费 · 24h</span>
              <span className="dn-v">转负 → 回上限（来回）</span>
              <span className="dn-src">区间 −3.32% / +10.95% 年化 · 均值 +6.82% → +4.70% 年化 · 出现 300 个负行（07-28 为 0）——拥挤的多头carry 在 07-28 回撤里解掉（多头停付、短暂被付），再回热顶到 Binance 上限：一次完整重置，而非单向再热</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−2.18%（−2,305.1 BTC）</span>
              <span className="dn-src">实时 · 105,591.2 → 103,286.0 · 空头回补式收缩——价涨 +0.45% 而 OI 下降，主动盘在买（期货CVD +1,200.9 / taker +1,182.5 / big +408.8）但现货被抛（现货CVD −1,151.8）：空头在反弹里回补，而非扩张背后有新需求——正是侦察仓想要的&ldquo;OI 升 + 买家在场&rdquo;那条腿的反面</span>
            </div>
            <div>
              <span className="dn-k">散户（市场）多/空</span>
              <span className="dn-v">63.41 / 36.59</span>
              <span className="dn-src">live_db `mkt_long_pct` · 24h 低 62.62（07-28 08:18 北京 / 00:18Z），高 65.69（07-28 15:03 北京 / 07:03Z）——盘中随反弹拥挤冲高后回落至近平，较 07-28 的 62.77 大致持平</span>
            </div>
            <div>
              <span className="dn-k">聪明钱净 BTC</span>
              <span className="dn-v bear">+5,038（净多，减仓 −41.48%）</span>
              <span className="dn-src">实时 · 多 14,363.76 − 空 9,325.51 = +5,038.25 · 自 07-21 06:36 北京（07-20 22:36Z）穿越以来持续净多，但在反弹里狠砍（净峰 +9,622 @ 07-28 11:01 北京 / 03:01Z，谷 +5,019 @ 07-29 07:41 北京 / 07-28 23:41Z 近快照）——记录性买家把昨日堆的 +214% 抄底仓减了下来</span>
            </div>
            <div>
              <span className="dn-k">聪明钱 Δ vs 24h 前</span>
              <span className="dn-v bear">+8,610 → +5,038（−3,572，−41.48%）</span>
              <span className="dn-src">|Δ|/前净 = 3,571.78 / 8,610.03 = 41.48% · Δ多 −1,634.8 / Δ空 +1,937.0——砍多同时加空，干净的减仓形态，恰是昨日加仓的镜像（Δ多 +2,968 / Δ空 −2,908）：聪明钱在跌里加、在弹里减</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.5% / 31.33%</span>
              <span className="dn-src">GEX 中位 IV · 跨 838 个合约的链上中位，非可交易价差 · 30D 收盘对收盘 RV = logret.std × √365 × 100，30 个日收益（parquet 末根 00:05Z）· 链上富价 ~+12.2pt · 29 收益替代口径 30.02%</span>
            </div>
            <div>
              <span className="dn-k">距 0γ 翻转</span>
              <span className="dn-v bull">+2.11%（上方）</span>
              <span className="dn-src">翻转 $62,716 · vs 实时现货 $64,042（+2.11%；64,041.86/62,716.49 − 1 = 2.113%）/ GEX 文件 Deribit 指数 $64,139（+2.27%；64,139.04/62,716.49 − 1 = 2.268%）——两个参照都为正，本图取现货侧 · 汇总 +100.4M 头条 / +116.31M 滚加——较 07-28 的 +82.8M / +69.40M 重新 gamma 转正，且近月负 gamma 簇已愈合（条子再度实质为正，仅余一处微不足道的 14AUG −0.09M 残留）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                已结定底 200W $63,311 以收盘守住，庄家本子重新 gamma 转正，引擎反弹——但反弹是空心的，
                记录性买家在其中减仓 −41.48%
              </span>。07-28 收{' '}
              <span className="dn-tag bull">$63,903.60</span>（较 07-27 的 $63,720.80 多
              $182.80），是离底的第一根阳线收盘，进行中的 07-29 收盘报{' '}
              <span className="dn-tag bull">$64,034.50</span>——两根阳线，现货报{' '}
              <span className="dn-tag bull">$64,042（24h +0.45%）</span>。定底完成了它的活：整份 07-28
              备忘压上去的那个 $63,311 收盘从未被破（24h 低 $62,800 打在下影，但日线收在上方），
              昨日那个&ldquo;最接近满足&rdquo;的追空如今燃料尽失——庄家条子重新 gamma 至{' '}
              <span className="dn-tag bull">+100.4M 头条 / +116.31M 滚加</span>（从 +82.8M / +69.40M），
              近月负 gamma 簇已愈合（28JUL 结算离场，29JUL 翻正 +10.12M，31JUL +61.31M 主导），
              而原本 −11.99M 压在头顶的 $64k 口袋，现在为{' '}
              <span className="dn-tag bull">+14.23M 正值</span>。但反弹不是夺回，其内部是空心的。{' '}
              <span className="dn-em">价格上涨伴随 OI 收缩 −2,305 BTC（−2.18%），主动盘在买（期货CVD
              +1,200.9，taker +1,182.5）而现货被抛（现货CVD −1,151.8）——一次空头回补式的拉抬，
              而非需求驱动的扩张</span>。而记录性买家又一次自我翻转：在 07-27 跌里加 +214% 之后，
              聪明钱在这次反弹里{' '}
              <span className="dn-tag bear">减仓 −41.48%</span>（净 +8,610 → +5,038，砍多 −1,635 同时
              加空 +1,937）。这就是整轮复苏反复出现的签名：{' '}
              <span className="dn-em">聪明钱在跌里加、在弹里减，所以需求腿与价格夺回腿从未同时打成
              TRUE</span>。D-EMA50 顶盖仍未夺回——现货站在{' '}
              <span className="dn-tag bear">D-EMA50 $64,923 下方 −1.36%</span>，整张矩阵上唯一为正的偏移
              就是紧贴定底之上的 D-SMA50 $63,361（+1.07%）——资金费穿过 300 个负行走了个来回、回到
              +10.95% 上限，夺回多头的利率过滤器仍为{' '}
              <span className="dn-tag bear">FALSE</span>（周二 10Y −4bp 至 4.65%，仍高于 4.55% 门槛
              10bp）。所以四条侦察腿全为 FALSE——无价格夺回、聪明钱减而非加、OI 收缩而非需求驱动、
              利率 FALSE——侦察仓维持{' '}
              <span className="dn-em">DEFERRED 第六天、账本 FLAT</span>。追空按兵不动，且较武装更远：
              07-28 出现的负 gamma 燃料隔夜蒸发。本备忘押在两根阳线的反弹能否转成一次带聪明钱重新加仓的
              D-EMA50 夺回——还是像前两次反弹那样退回定底。
            </p>

            <p>
              BTC 实时报 <span className="dn-tag">$64,042</span>，24h{' '}
              <span className="dn-tag bull">+0.45%</span>——离底的第二根阳线收盘——落在{' '}
              <span className="dn-tag">$64,083.68 / $62,800.00</span> 区间（高 @ 07-29 00:54 北京 /
              07-28 16:54Z，低 @ 07-28 21:48 北京 / 13:48Z 的隔夜下影，一度插破 $63k 后收复）。{' '}
              <span className="dn-signal">定底守在交易台叮嘱要读的收盘上，而非下影</span>：07-22
              $66,082.00 → 07-23 $65,069.60 → 07-24 $64,116.50 → 07-25 $64,338.10 → 07-26
              $65,375.10 → 07-27 $63,720.80 →{' '}
              <span className="dn-tag bull">07-28 $63,903.60（+$182.80）</span>，进行中的 07-29 收盘按
              parquet 末根 <span className="dn-tag bull">$64,034.50</span>。两根阳线，均在已结定底 200W
              $63,311 之上，均未夺回 D-EMA50 顶盖。均线矩阵仍是压顶阶梯：现货已回升逼近但未穿过{' '}
              <span className="dn-tag bear">D-EMA20 $64,267（−0.35%）</span> /{' '}
              <span className="dn-tag bear">D-SMA20 $64,465（−0.66%）</span> 这对，站在{' '}
              <span className="dn-tag bear">D-EMA50 $64,923 下方 −1.36%</span>（顶盖，连续第五节的上方压力），
              而整张矩阵上唯一为正的偏移就是{' '}
              <span className="dn-tag bull">D-SMA50 $63,361（+1.07%）</span>，它现高出已结定底 +$50，
              而非昨日那样一美元不差地重合。{' '}
              <span className="dn-em">
                200W 周期底本次可得且获确认：陷阱监测状态（ma200w_trap_watch_state.json，末次重算
                2026-07-27 00:11Z——今日未重跑）载末个已完成周 2026-07-26 的 W-SMA200{' '}
                <span className="dn-tag bull">$63,311.02</span>，连续四周收在其上；今日独立跑完整
                btcusdt_1m_*.parquet glob（361 周 K）对已完成周复现同一 $63,311.02，进行中周（截至
                2026-08-02）爬升至 <span className="dn-tag">$63,536</span>。所以 $63,311 是已结定底
                （现货高出 +1.15%，07-28 收在其上，隔夜 $62,800 下影未收在其下），D-SMA50 $63,361 是最近的
                均线支撑——一处正快速上抬逼近现货的汇合底。
              </span>{' '}
              侦察仓 07-22 ARMED，07-24 D-EMA50 夺回首度失败时转 DEFERRED，07-25/07-26/07-27/07-28
              维持递延——其价格腿与流量腿从未同时打成 TRUE。今日价格腿仍 FALSE（无顶盖夺回），流量腿又翻回
              FALSE（聪明钱减仓、OI 收缩）。账本维持 FLAT。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘口 · 定底以收盘守住，引擎反弹 +0.45% · 但打在空头回补的 OI 收缩（−2.18%）上、非需求 · 聪明钱在反弹里减仓 −41.48%（砍多、加空）——07-27 那次 +214% 抄底的反面 · 资金费穿过 300 个负行回到 +10.95% 上限 · 散户近平 · 永续仍贴水</span>
            </h2>

            <p>
              <span className="dn-signal">
                盘口靠回补空头买了这波反弹，而聪明钱买家却在往外退——昨日下跌的镜像
              </span>。现货 24h 涨 +0.45%，OI{' '}
              <span className="dn-tag bear">收缩 −2,305.1 BTC（−2.18%）</span>——105,591.2 → 103,286.0——
              逆转 07-28 的 +1.11% 扩张。阳线上主动盘在买，但呈空头回补形态：期货 CVD{' '}
              <span className="dn-tag bull">+1,200.9</span>，taker 净{' '}
              <span className="dn-tag bull">+1,182.5</span>，big 净{' '}
              <span className="dn-tag bull">+408.8（849 笔）</span> 为正，而现货 CVD{' '}
              <span className="dn-tag bear">−1,151.8</span>（本窗无 cb_cvd 重置——盘中 cb_cvd 11,972 低点是一次
              反向下探、非重置）。价涨 + OI 降 + 期货/taker 买 + 现货被抛，是一次{' '}
              <span className="dn-em">空头回补式拉抬</span>：空头买入平仓、OI 下降，而非新多在扩张里开仓。永续在快照仍对现货{' '}
              <span className="dn-tag bear">贴水 −$93.07</span>（24h 均 −$73.74，区间 −$170.79 / +$41.28——基差一度
              短暂升水但绝大多数贴水），与现货主导、永续在后追赶的市场一致，而非期货主导的多头追涨。1 分钟主动盘偏斜快照{' '}
              <span className="dn-tag bear">−12.0</span>（24h 均 −2.04，区间 −54.6 / +57.3）——即便在阳线里也在快照走弱。{' '}
              <span className="dn-em">OI 在空头回补里收缩，恰恰不是侦察仓要的&ldquo;OI 背后有买家&rdquo;那条腿；
              反弹在价格上是真的，在结构上却是空心的——驱动 07-27 下跌腿的那些空头正在把自己买回来，而非新需求到场。</span>
            </p>

            <p>
              聪明钱又是最扎眼的——而这次偏回谨慎侧。{' '}
              <span className="dn-signal">
                记录性买家在反弹里把净多砍去五分之二，砍多同时加空——恰是 07-27 抄底的反面
              </span>。聪明钱净 <span className="dn-tag bear">+5,038</span>（多 14,363.76 − 空 9,325.51 = +5,038.25）
              对 24h 前的 <span className="dn-tag">+8,610</span>——{' '}
              <span className="dn-tag bear">Δ净 −3,572（−41.48%）</span>（|+5,038.25 − (+8,610.03)| / 8,610.03 =
              41.48%）。拆解是干净的减仓形态：<span className="dn-tag bear">Δ多 −1,634.8</span>（砍多）同时{' '}
              <span className="dn-tag bear">Δ空 +1,937.0</span>（重建一层空头覆盖）。聪明钱不只砍多——它{' '}
              <em>把 07-27 跌里解掉的那条空腿重新加了回去</em>。净值峰{' '}
              <span className="dn-tag">+9,622 @ 07-28 11:01 北京 / 03:01Z</span>，谷{' '}
              <span className="dn-tag bear">+5,019 @ 07-29 07:41 北京 / 07-28 23:41Z</span> 近快照——
              记录性买家在锚点仍在砍，自 07-21 06:36 北京（07-20 22:36Z）穿越以来持续净多，但为反弹以来最薄。{' '}
              <span className="dn-em">这就是再武装门槛整周等的聪明钱加仓腿，又一次打成 FALSE——且比 FALSE 更糟，它翻了向：
              曾以 +214% 抄底防守定底的买家，在离底反弹里减了 −41%。整轮复苏的签名如今再清楚不过——聪明钱在跌里加、在弹里减，
              所以需求腿与价格夺回腿在结构上错相，侦察仓在二者对齐前无法开火。</span>
            </p>

            <p>
              杠杆与拥挤这两个读数这次是走了来回、而非成趋势。{' '}
              <span className="dn-signal">
                资金费在 07-28 跌里解开一整段负行，再回热顶到 Binance 上限——一次重置，而非单向
              </span>：实时资金费 <span className="dn-tag">+10.95% 年化</span>（原始 0.01 字段 × 1095，顶在交易所上限），
              24h 均值 <span className="dn-tag">+6.82% → +4.70% 年化</span>（整窗净回落），最高{' '}
              <span className="dn-tag">+10.95% 年化（0.01 字段上限，344 / 1441 行）</span>，最低{' '}
              <span className="dn-tag bear">−3.32% 年化（−0.003036 字段 @ 07-28 12:11 北京）</span>，且{' '}
              <span className="dn-tag bear">300 / 1441 负行</span>——07-28 尚为 0 负行，整段拥挤的多头 carry 在跌里被冲刷
              （多头停付、短暂被付），再回弹到上限进入阳线收盘。散户{' '}
              <span className="dn-tag">mkt_long_pct 63.41</span>（24h 低 62.62 @ 07-28 08:18 北京 / 00:18Z，高 65.69 @
              07-28 15:03 北京 / 07:03Z）——盘中随反弹拥挤冲高后回落至近平，较 07-28 的 62.77 大致持平。{' '}
              <span className="dn-em">资金费的来回是关键：在 07-28 阴线收盘里单边偏多的杠杆，经这次下跌被重置，所以反弹并非由新的
              拥挤多头 carry 驱动——它是一次空头回补，资金费随空头付费离场而回弹到上限。较 07-28 是更干净、更不拥挤的本子，
              但建立在回补而非信念之上。</span>
            </p>

            <p>
              分窗流量显示回补集中在最后几小时，最后一小时期货与现货同转买盘。24h：价{' '}
              <span className="dn-tag bull">+0.45%</span>，OI{' '}
              <span className="dn-tag bear">−2,305.1 BTC</span>，现货 CVD{' '}
              <span className="dn-tag bear">Δ −1,151.8</span>，期货 CVD{' '}
              <span className="dn-tag bull">Δ +1,200.9</span>，大单{' '}
              <span className="dn-tag bull">+408.8 BTC / 849 笔</span>，taker 净{' '}
              <span className="dn-tag bull">+1,182.5</span>——{' '}
              <span className="dn-em">期货/taker 在 OI 下降里买、而现货被卖；+0.45% 打在空头回补上、非多头扩张</span>。4h（至快照）：价{' '}
              <span className="dn-tag bull">+0.10%</span>，OI{' '}
              <span className="dn-tag bear">−1,005.2 BTC</span>，现货 CVD{' '}
              <span className="dn-tag bear">Δ −478.7</span>，期货 CVD{' '}
              <span className="dn-tag bull">Δ +2,116.1</span>，大单{' '}
              <span className="dn-tag bull">+1,183.9 BTC / 120 笔</span>，taker 净{' '}
              <span className="dn-tag bull">+2,129.4</span>——大量期货回补而 OI 仍在流失。1h：价{' '}
              <span className="dn-tag bull">+0.52%</span>，OI{' '}
              <span className="dn-tag bear">−458.3 BTC</span>，现货 CVD{' '}
              <span className="dn-tag bull">Δ +259.0</span>，期货 CVD{' '}
              <span className="dn-tag bull">Δ +1,566.9</span>，大单{' '}
              <span className="dn-tag bull">+1,097.5 BTC</span>，taker 净{' '}
              <span className="dn-tag bull">+1,550.8</span>——{' '}
              <em>最后一小时现货也转买（现货 CVD 转正）、回补加速，但 OI 仍在下降——即便反弹最强的一小时也是空头平仓、非多头开仓</em>。
              整个 24h 是空头回补形态。{' '}
              <span className="dn-em">
                基线口径：24h 块用同一时钟前一日行（07-28 08:05 北京）；4h / 1h 子窗口块用含前一行的基线
                （07-29 04:05 / 07:05 北京至 08:05 钉）。本次序列在这些窗口间连续，故那些含前一行读数复现精确同时钟的
                04:05 / 07:05 端点——无基线缺口需披露，与 07-28 备忘不同。
              </span>
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 反弹至 1 多 / 6 空 / 3 中（原 1/7/2）· 快周期从洗盘超卖回到中线之上（15m 57.9、30m 57.3、1h 52.5），带一根新鲜 30m 水上金叉 · 但 4h/1h/3d/1w 仍在云下 · regime 5/9 动量（JT≥0）趋势延续守住 · 3d/1w 底背离簇仍在 · 1M ⚡TD9 BUY</span>
            </h2>

            <p>
              <span className="dn-signal">
                引擎从洗盘里反弹——快周期一节内从深度超卖摆回中线之上——但中、慢周期仍被压在云下，regime 仍读趋势延续
              </span>。00:01Z 扫描读{' '}
              <span className="dn-tag">1 多 / 6 空 / 3 中</span>，共 10 个周期（1M 多；30m/1h/4h/8h/1d/3d 空；15m/12h/1w 中），
              较 07-28 的 1 多 / 7 空 / 2 中 略有回升——净读仍是&ldquo;多周期共振偏空 · 卖出反弹&rdquo;，同一{' '}
              <span className="dn-tag bull">高周期底背离簇（3d/1w）</span> 被标记。快周期从昨日 22–29 的洗盘里狠弹回来：15m RSI{' '}
              <span className="dn-tag">57.9</span>（回到中线之上，云上），30m RSI{' '}
              <span className="dn-tag">57.3</span>，带一根{' '}
              <span className="dn-tag bull">新鲜水上金叉（1 根前）</span>（DIF +58.6，云中），1h RSI{' '}
              <span className="dn-tag">52.5</span>（水下金叉 12 根，仍云下 ↑64.7k）——07-28 备忘点名的超卖均值回归在反弹里兑现。
              但中周期仍沉重：4h RSI{' '}
              <span className="dn-tag">44.2</span>（水下死叉 7 根，云下 ↑64.7k），8h RSI{' '}
              <span className="dn-tag">44.7</span>（云中，刚穿），1d RSI{' '}
              <span className="dn-tag">48.7</span>（水上死叉 2 根，云中 61.4k–69.9k）——反弹没把它们带回云上。慢周期是同一 HTF 筑底提示、未破：一根{' '}
              <span className="dn-tag bull">1w 水下金叉（1 根前）</span>（DIF −5,388.6，早期），一根{' '}
              <span className="dn-tag bull">3d 水下金叉 6 根</span>，以及 3d/1w 底背离簇（BULL reg）——但二者仍在云下
              （3d ↑75.6k 19 根，1w ↑93.8k 26 根）。超卖反转提示在顶周期点燃：{' '}
              <span className="dn-tag bull">1M ⚡ TD9 BUY 于 $63,951</span>。regime 标签守在{' '}
              <span className="dn-tag">5/9 周期动量（JT≥0）——偏趋势延续</span>。{' '}
              <span className="dn-em">
                直读：反弹正是洗盘搭好的快周期均值回归——低周期 RSI 回到 50 之上、一根新鲜 30m 金叉——但 1h/4h/3d/1w 仍在云下，
                regime 仍说趋势延续（向下）。一次云下结构里的解脱式反弹、HTF 筑底提示完好，而非结构性夺回。引擎抬了，但对侦察仓要紧的那个
                周期（云上的顶盖夺回）没有。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>周期</th><th>收盘</th><th>RSI</th><th>MACD 交叉</th><th>云（一目）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,951</td><td className="num">57.9</td><td className="bear">死叉（水上）7根</td><td className="bull">云上 ↓63.6k 24根</td><td>Sell 2</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">63,951</td><td className="num">57.3</td><td className="bull">金叉（水上）1根</td><td className="neut">云中 63.6k–64.4k 1根</td><td>Sell 1</td><td>BEAR hid</td></tr>
                <tr><td>1h</td><td className="num">63,951</td><td className="num">52.5</td><td className="bull">金叉（水下）12根</td><td className="bear">云下 ↑64.7k 26根</td><td>Sell 4</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">63,951</td><td className="num">44.2</td><td className="bear">死叉（水下）7根</td><td className="bear">云下 ↑64.7k 7根</td><td>Sell 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">63,951</td><td className="num">44.7</td><td className="bear">死叉（水上）17根</td><td className="neut">云中 63.5k–64.1k 刚穿</td><td>Sell 1</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">63,951</td><td className="num">46.3</td><td className="bear">死叉（水上）10根</td><td className="bull">云上 ↓63.6k 30根</td><td>Buy 4</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">63,951</td><td className="num">48.7</td><td className="bear">死叉（水上）2根</td><td className="neut">云中 61.4k–69.9k 9根</td><td>Buy 6</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">63,951</td><td className="num">44.4</td><td className="bull">金叉（水下）6根</td><td className="bear">云下 ↑75.6k 19根</td><td>Buy 2</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">63,951</td><td className="num">39.2</td><td className="bull">金叉（水下）1根</td><td className="bear">云下 ↑93.8k 26根</td><td>Sell 3</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">63,951</td><td className="num">43.8</td><td className="neut">—</td><td className="bull">云上 ↓47.0k 29根</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 08:01 北京扫描（00:01Z；滚动最新文件，原样归档于
                    /opt/desk-note/snapshots/2026-07-29-0005/）。头部提示：{' '}
                    <em>1M ⚡ TD9 BUY 打在 $63,951（超卖反转提示）</em>，{' '}
                    <em>顶背离 3：15m/1h/1d · 底背离 4：1h/4h/3d/1w</em>，{' '}
                    <em>regime 5/9 周期动量（JT≥0）——偏趋势延续</em>。扫描现货 $63,955，24h +0.37%
                    （00:01Z MTF 扫描；00:05Z 实时盘口锚点在同一 24h 窗口显示 +0.45%——4 分钟来源缺口与不同基线
                    解释这 0.08pt 差异），24h 高/低 $64,084 / $62,660（MTF 扫描自身 00:01Z 窗口；上文实时盘口
                    00:05Z 区间为 $64,083.68 / $62,800.00）。约 $0 的高点差是 4 分钟来源缺口，但约 $140 的低点差是
                    价格口径差、非时序：MTF 面板 / parquet 低 $62,660 是 OHLCV K 线（永续）印数（低 $62,660.1 @
                    07-28 13:47Z，在 00:01Z 与 00:05Z 两窗口都复现），而正文区间读 live_db.spot 低 $62,800.00——
                    该差在对齐 00:05Z 窗口后依然存在，故为现货对 OHLCV/永续 的口径差、非四分钟。正文区间以实时盘口
                    （现货）为准。qVol $9.17B。收盘为进行中 K 线；每个周期收线前一律当作暂定值。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              均线矩阵确认未夺回的顶盖与汇合底。现货 $64,042 站在{' '}
              <span className="dn-tag bull">D-SMA50 $63,361 上方 +1.07%</span>——整张矩阵上唯一为正的偏移，现高出已结定底 200W +$50
              （07-28 二者一美元不差重合）。上方反弹撞到但未穿过近端这对：{' '}
              <span className="dn-tag bear">D-EMA20 $64,267（−0.35%）</span>、{' '}
              <span className="dn-tag bear">D-SMA20 $64,465（−0.66%）</span>，以及未夺回的{' '}
              <span className="dn-tag bear">D-EMA50 $64,923（−1.36%）</span>——顶盖，连续第五节的压力。再往上依次：{' '}
              <span className="dn-tag bear">W-EMA200 $67,146（−4.62%；种子）</span>、{' '}
              <span className="dn-tag bear">D-EMA100 $67,555（−5.20%）</span>——若夺回真来，这是工作首个均线目标，其间夹着庄家
              $66k–$72k 看涨墙带——{' '}
              <span className="dn-tag bear">D-SMA100 $69,337（−7.64%）</span>、{' '}
              <span className="dn-tag bear">W-SMA20 $69,401（−7.72%）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $69,464（−7.81%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $69,736（−8.17%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $70,422（−9.06%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $71,736（−10.73%）</span>、{' '}
              <span className="dn-tag bear">W-EMA150 $73,181（−12.49%；种子）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $73,222（−12.54%）</span>。现货下方唯一支撑是已结定底 200W{' '}
              <span className="dn-tag bull">$63,311（+1.15%）</span>，D-SMA50 $63,361 紧贴其上，进行中周的 W-SMA200 爬升至
              $63,536 贴在现货下方。远在上方且闲置：W-SMA150 $76,627（−16.42%）、W-EMA50 $78,357（−18.27%）、
              W-EMA100 $78,777（−18.71%）、W-SMA50 $84,340（−24.07%）、W-SMA100 $88,566（−27.69%）。{' '}
              <span className="dn-em">
                均线锚定 parquet 末根 2026-07-29 00:05Z（收 $64,034.50）；偏移按实时现货 $64,041.86 重算。显示的均线水平为美元取整；
                偏移按精确序列值计算。W-SMA200 无法从 2023–2026 均线子集算出（188 周 K），而 W-SMA150 $76,627 可算但远在上方且闲置；
                W-EMA150 $73,181 与 W-EMA200 $67,146 由可得历史种子生成、如实标注（两者都在现货上方，故此处为压力而非支撑）；200W 周期底
                $63,311 来自完整历史 glob / 陷阱监测状态（见来源）。日收盘：07-23 $65,069.60、07-24 $64,116.50、07-25 $64,338.10、
                07-26 $65,375.10、07-27 $63,720.80、07-28 $63,903.60、07-29（进行中）$64,034.50——离底两根阳线，均未夺回 D-EMA50 顶盖。
              </span>
            </p>

            <h2 className="dn-sec">
              庄家图 <span className="dn-roman">III · 本子重新 gamma 至 +100.4M 头条 / +116.31M 滚加（07-28 为 +82.8M / +69.40M）· 翻转 $62,716（现货上方 +2.11%）· 近月负 gamma 簇已愈合——29JUL +10.12M / 30JUL +0.45M / 31JUL +61.31M 主导，条子再度实质为正（微不足道的 14AUG −0.09M 残留）· $64k 口袋从 −11.99M 翻为 +14.23M 于现货处 · $60k −20.90M 为唯一的崩盘看跌</span>
            </h2>

            <p>
              <span className="dn-signal">
                庄家本子重新 gamma 转正，并愈合了它 07-28 长出的近月负 gamma 簇——追空的 gamma 燃料隔夜蒸发
              </span>。头条汇总 GEX 为{' '}
              <span className="dn-tag bull">+100.4M / 1%</span>（07-28 为 +82.8M），按到期滚加为{' '}
              <span className="dn-tag bull">+116.31M</span>（= gex_summary.json net_gex $116,313,503，07-28 为 +69.40M）——约
              +15.9M 无法对平的头条对滚加缺口，按 DN-003 血缘披露，且本次滚加再度高于头条（与 07-25/07-26/07-27 缺口符号相同，逆转 07-28）。
              0-γ 翻转移动 <span className="dn-tag">$62,599 → $62,716（+$117）</span>，现货 $64,042 站在{' '}
              <span className="dn-tag bull">翻转上方 +2.11%</span>（现货计口径 64,041.86 / 62,716.49 − 1 = +2.113%）；GEX 文件自身的
              &ldquo;距翻转&rdquo;读{' '}
              <span className="dn-tag bull">较其 Deribit 指数 $64,139 高 +2.3%</span>（较实时现货高 $97），即 +2.27%
              （64,139.04 / 62,716.49 − 1 = +2.268%）——两个参照都为正、现货在翻转之上，缓冲较 07-28 的 +1.70% 更厚。墙图是一条正的看涨带，
              现货处的口袋已愈合：{' '}
              <span className="dn-tag bull">$70k +33.34M</span>（最重墙）、{' '}
              <span className="dn-tag bear">$60k −20.90M</span>（崩盘看跌，盘面唯一有意义的负值）、{' '}
              <span className="dn-tag bull">$72k +20.57M</span>、{' '}
              <span className="dn-tag bull">$68k +15.10M</span>、{' '}
              <span className="dn-tag bull">$65k +15.06M</span>、{' '}
              <span className="dn-tag bull">$64k +14.23M</span>（现货处口袋从 07-28 的 −11.99M 直接翻为 +14.23M 正——头顶的负口袋没了）、{' '}
              <span className="dn-tag bull">$67k +10.98M</span>、{' '}
              <span className="dn-tag bull">$66k +10.86M</span>、{' '}
              <span className="dn-tag bull">$80k +8.73M</span>、{' '}
              <span className="dn-tag bull">$69k +6.38M</span>。{' '}
              <span className="dn-em">
                $66k–$72k 带仍合计约 +97M 的正 gamma 看涨压力（$66k +10.86M + $67k +10.98M + $68k +15.10M + $69k +6.38M +
                $70k +33.34M + $72k +20.57M = +97.23M），所以夺回仍会撞上上方卖 gamma 的庄家——但现货下方本子再度是干净的阻尼器：
                $64k 口袋愈合至 +14.23M，直到 $60k（−20.90M）之前唯一的负值就是那个远端崩盘看跌，所以下探到 $63,311 底会撞上正 gamma
                的缓冲，而非 07-28 那种放大式负值。
              </span>{' '}
              按到期看，条子再度实质为正——仅余一处微不足道的 14AUG −0.09M 残留：07-28 的近月负簇（28JUL −13.30M / 29JUL −4.37M /
              30JUL −0.51M）已不见——28JUL 结算离场，而{' '}
              <span className="dn-tag bull">29JUL 0.3DTE +10.12M</span>、{' '}
              <span className="dn-tag bull">30JUL 1.3 +0.45M</span> 翻正——之后是{' '}
              <span className="dn-tag bull">31JUL 2.3 +61.31M</span> 的主导块，再是 1AUG 3.3 +1.02M、7AUG 9.3 +22.21M、
              14AUG 16.3 −0.09M（微不足道的残留负）、28AUG 30.3 +15.45M、25SEP 58.3 +1.49M（列出的前段条至 25SEP 合计 +111.96M；
              三个远月 25DEC +2.90M / 26MAR27 +0.83M / 25JUN27 +0.61M 加 +4.34M 得 +116.30M 滚加）。阻尼机制完好且加深，07-28 的近月负之后
              日历重置为一条干净的正条——下方的放大器没了。
            </p>

            <p>
              期权链 IV 中位为{' '}
              <span className="dn-tag">43.5%</span>（07-28 为 43.2%），对 30D 收盘对收盘 RV 的{' '}
              <span className="dn-tag">31.33%</span>——链上富价{' '}
              <span className="dn-tag">~+12.2pt</span>。跨 N 个合约（今日 838）的链上中位，<span className="dn-em">非</span>可交易价差；
              到期/行权价级 vega、偏斜与期限结构仍未加载；波动率读数维持仅作框架。RV 方法：30D 收盘对收盘，logret.std × √365 × 100，
              取最近 30 个日对数收益（= 31 个连续日收盘），锚定 parquet 末根 2026-07-29 00:05Z；29 收益替代口径读 30.02%。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 周二 FRED 重印——10Y −4bp 至 4.65%（夺回多头利率过滤器仍 FALSE，距触发 10bp）· TIPS +1bp 2.44%，盈亏平衡 −5bp 至 2.21% · MOVE 持平 77.2 · 利率/美元 极端避险 vs 信用/流动性宽松 · DXY 101.39</span>
            </h2>

            <p>
              <span className="dn-signal">
                周二 FRED 重印把长端再压 4bp，但夺回多头利率过滤器仍 FALSE——实际收益率走强、信用略走阔、美元获买、劈叉未变
              </span>。仪表盘渲染为 2026-07-28 22:17Z，早于快照约 1.8h，FRED 日频序列已为周二 07-28 重印。美 10Y 名义{' '}
              <span className="dn-tag bull">4.65%（−4.0bp）</span>，regime z{' '}
              <span className="dn-tag bear">+2.24</span>，偶发 z{' '}
              <span className="dn-tag bear">+1.35</span>——极端避险，从 4.69% 缓和 4bp。10Y TIPS 实际{' '}
              <span className="dn-tag bear">2.44%（+1.0bp）</span>，regime z{' '}
              <span className="dn-tag bear">+2.98</span>，偶发 z{' '}
              <span className="dn-tag bear">+1.82</span>——极端避险，略走强。5Y5Y 盈亏平衡通胀{' '}
              <span className="dn-tag">2.24%（−4.0bp）</span>，10Y 盈亏平衡{' '}
              <span className="dn-tag">2.21%（−5.0bp）</span>——通胀补偿走缓。HY OAS{' '}
              <span className="dn-tag bull">2.81%（+2.0bp）</span>，regime z{' '}
              <span className="dn-tag bull">−0.44</span>，偶发 z +1.79——仍&ldquo;宽松&rdquo;但略走阔。MOVE 债市波动率{' '}
              <span className="dn-tag">77.2（持平，Δ +6.33 延续）</span>，regime z +0.34，偶发 z +1.84——中性。旁支：DXY{' '}
              <span className="dn-tag bear">101.39（较 07-27 +0.15）</span>，regime z +2.21——极端避险；美联储净流动性{' '}
              <span className="dn-tag bull">$5.917T</span>（无新周频印数），偶发 z −2.47——宽松。美日 10Y 利差{' '}
              <span className="dn-tag">1.98%（−4.0bp）</span>；美元/日元{' '}
              <span className="dn-tag">163.84</span>。NFCI{' '}
              <span className="dn-tag bull">−0.552</span>，RISK-ON（陈旧 11 天）。{' '}
              <span className="dn-em">
                净结论：夺回多头利率过滤器（10Y &lt; 4.55%）在 4.65% 处仍 FALSE——周二印数把它挪近 4bp，但距触发仍有 10bp。宏观劈叉未变：
                利率与美元坐在极端避险（偏紧），而信用（HY OAS 宽松）与流动性（净流动性宽松、NFCI RISK-ON）维持宽松。本次印数没有翻转侦察仓的
                利率门槛；下一份 FRED 日频才是要盯的，趋势（4.71 → 4.69 → 4.65）在朝门槛走。
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
                <tr><td>美 10Y 名义</td><td className="num">4.65%</td><td className="num bull">−4.0bp</td><td className="num bear">+2.24</td><td className="num bear">+1.35</td><td className="bear">极端避险 · 周二 −4bp</td></tr>
                <tr><td>10Y TIPS 实际</td><td className="num">2.44%</td><td className="num bear">+1.0bp</td><td className="num bear">+2.98</td><td className="num bear">+1.82</td><td className="bear">极端避险 · 走强</td></tr>
                <tr><td>5Y5Y 盈亏平衡通胀</td><td className="num">2.24%</td><td className="num bull">−4.0bp</td><td className="num">+0.22</td><td className="num">+0.96</td><td className="neut">无标签</td></tr>
                <tr><td>10Y 盈亏平衡</td><td className="num">2.21%</td><td className="num bull">−5.0bp</td><td className="num">−1.69</td><td className="num">−1.11</td><td className="neut">无标签</td></tr>
                <tr><td>HY OAS</td><td className="num">2.81%</td><td className="num bear">+2.0bp</td><td className="num bull">−0.44</td><td className="num">+1.79</td><td className="bull">宽松 · 略走阔</td></tr>
                <tr><td>芝加哥联储 NFCI</td><td className="num">−0.552</td><td className="num">−0.01</td><td className="num bull">−1.51</td><td className="num bull">−1.71</td><td className="stale">RISK-ON · 陈旧 11 天</td></tr>
                <tr><td>MOVE 债市波动率</td><td className="num">77.2</td><td className="num">+6.33</td><td className="num">+0.34</td><td className="num">+1.84</td><td className="neut">中性 · 持平</td></tr>
                <tr><td>DXY</td><td className="num">101.39</td><td className="num">−0.08</td><td className="num bear">+2.21</td><td className="num">+0.85</td><td className="bear">极端避险 · 获买</td></tr>
                <tr><td>美联储净流动性</td><td className="num">$5.917T</td><td className="num">−0.069T</td><td className="num">+0.56</td><td className="num bull">−2.47</td><td className="bull">宽松 · 无新周频印数</td></tr>
                <tr><td>美日 10Y 利差</td><td className="num">1.98%</td><td className="num bull">−4.0bp</td><td className="num">−0.44</td><td className="num bear">+1.35</td><td className="neut">中性</td></tr>
                <tr><td>美元/日元</td><td className="num">163.84</td><td className="num">+0.07</td><td className="num bear">+1.72</td><td className="num bear">+1.94</td><td className="neut">日元偏软</td></tr>
                <tr><td>日本 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月频）</td><td className="num stale">+2.42</td><td className="num stale">+1.09</td><td className="stale">月频 · 勿倚重</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗口，22 资产，167 行，汇总 00:01Z——{' '}
              <span className="dn-em">7 天滚动读数，非今日</span>）。非对角均值{' '}
              <span className="dn-tag">|r| 0.266</span>——NORMAL 带，较 07-28 的 0.212 特异读数收紧、回到 0.25 门槛之上。BTC 最强联系是{' '}
              <span className="dn-tag">NQ +0.504</span>（从 +0.405 走强），其后 SP500{' '}
              <span className="dn-tag">+0.449</span>、URNM{' '}
              <span className="dn-tag">+0.438</span>、JP225{' '}
              <span className="dn-tag">+0.412</span>、SILVER{' '}
              <span className="dn-tag">+0.380</span>、PLAT{' '}
              <span className="dn-tag">+0.377</span>、TSLA{' '}
              <span className="dn-tag">+0.368</span>、GOLD{' '}
              <span className="dn-tag">+0.341</span>、COPPER{' '}
              <span className="dn-tag">+0.331</span>、CL{' '}
              <span className="dn-tag">−0.281</span>、BRENT{' '}
              <span className="dn-tag">−0.278</span>。7d 表现才是关键，而整条盘面如今全红：{' '}
              <span className="dn-tag bear">BTC −3.93%</span> 略微领先 NQ{' '}
              <span className="dn-tag bear">−4.12%</span>（BTC +0.19pt，重回身前），但落在一片广泛翻红的风险复合内——SP500{' '}
              <span className="dn-tag bear">−0.63%</span>、JP225{' '}
              <span className="dn-tag bear">−7.12%</span>、NVDA{' '}
              <span className="dn-tag bear">−4.38%</span>、META{' '}
              <span className="dn-tag bear">−6.94%</span>、GOOGL{' '}
              <span className="dn-tag bear">−4.04%</span>、AMZN{' '}
              <span className="dn-tag bear">−5.80%</span>、MSFT{' '}
              <span className="dn-tag bear">−0.29%</span>、TSLA{' '}
              <span className="dn-tag bear">−19.09%</span>，AAPL{' '}
              <span className="dn-tag bull">+5.14%</span> 是唯一翻绿的大盘科技。而 07-28 跑赢一切的金属/铀买盘已翻落：GOLD{' '}
              <span className="dn-tag bear">−1.93%</span>、SILVER{' '}
              <span className="dn-tag bear">−3.49%</span>、PLAT{' '}
              <span className="dn-tag bear">−2.25%</span>、PALL{' '}
              <span className="dn-tag bear">−2.17%</span>、URNM{' '}
              <span className="dn-tag bear">−3.48%</span>、COPPER{' '}
              <span className="dn-tag bear">−3.09%</span>；能源亦红（CL −3.04%、BRENT −4.93%、NGAS −5.61%）。{' '}
              <span className="dn-em">
                相关性 regime 收紧回 NORMAL，BTC 在 7d 窗口重回 NQ 身前，但关键在于现在什么都红了——07-28 作为风险对冲的金属/铀买盘已没了，
                所以 BTC 是随一片广泛避险的盘面而动、而非领跑一场轮动。按 DN-001 血缘，这是一条收紧的、避险的跨资产读数，BTC 略领先股票引擎，
                两个方向都不是 RS 领先信号。
              </span>{' '}
              日本 10Y 月频 2.67% 带月频标签——勿倚重。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 回补反弹侦察仓 DEFERRED（第 6 天）——四条腿全 FALSE：无顶盖夺回、聪明钱在反弹里减仓 −41%（非加仓）、OI 空头回补收缩（非需求）、利率 FALSE · 追空按兵不动且较武装更远——近月负 gamma 燃料蒸发 · 账本 FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                定底守住、本子重新 gamma、引擎反弹——却没点燃任何一条侦察腿，因为记录性买家恰恰在它抄底所买的那波反弹里减了仓
              </span>。07-28 备忘把解决框在&ldquo;$63,311 是否在买家防守下守住&rdquo;——抄底随价格在阳线上夺回 D-EMA50 而转成需求。定底以收盘守住，还出了两根阳线——
              但转换没发生：聪明钱非但没延续加仓，反而在反弹里减仓 −41.48%（砍多、重建空），而上涨来自空头回补式的 OI 收缩、非需求驱动的扩张。
              所以四条侦察腿全读 FALSE——无 D-EMA50 夺回、无聪明钱加仓、无需求驱动 OI、利率 FALSE——正是那从未同时打成 TRUE 的四条。今日交易本子：
              无侦察开仓、无追空、无新对冲——有纪律的读法是维持侦察仓 DEFERRED，直到一次阳线 D-EMA50 夺回与聪明钱重新加仓、需求驱动 OI 配对，
              并在其 gamma 燃料已尽之下把追空按住。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · 侦察 · DEFERRED（第 6 天）· 四条腿全 FALSE——无夺回、聪明钱减仓、OI 收缩、利率 FALSE</span>
              <div className="dn-trade-name">
                回补反弹侦察仓——定底守住、引擎反弹，但记录性买家在其中减仓 −41%，OI 在空头回补里收缩，D-EMA50 顶盖仍未夺回，利率仍 FALSE
              </div>
              <div className="dn-thesis">
                再武装门槛四条腿再度全 FALSE，且流量腿较 07-27 翻了向。<em>价格</em> 腿（阳线夺回 D-EMA50）FALSE
                ——离底两根阳线（07-28 $63,903.60，07-29 进行中 $64,034.50）但均在 D-EMA50 $64,923 顶盖之下，现货低 −1.36%。{' '}
                <em>聪明钱加仓</em> 腿 FALSE 且比 FALSE 更糟——聪明钱把净多减了 −41.48% 至 +5,038，砍多（−1,635）同时重建空（+1,937），
                恰是 07-27 那次 +214% 抄底的反面；记录性买家在跌里加、在弹里减。<em>OI 需求</em> 腿 FALSE——OI 收缩 −2.18%（−2,305 BTC）
                打在空头回补上（期货/taker 买入平仓、OI 下降，现货被抛），非需求驱动扩张。而 <em>利率</em> 过滤器在 10Y 4.65% 仍 FALSE
                （周二 −4bp，距触发 10bp）。这反复出现的签名意味着侦察仓的需求腿与价格夺回腿在结构上错相；开仓维持递延，直到二者对齐
                ——一次阳线上的顶盖夺回、与聪明钱重新加仓、需求驱动 OI 同框。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">再武装门槛（四条腿全 FALSE）</span><span className="dn-lvl-v bear">阳线夺回 D-EMA50（FALSE——两根阳线但在 $64,923 顶盖下）· 聪明钱加仓（FALSE——减仓 −41.48%，砍多、加空）· OI 需求驱动（FALSE——−2.18% 空头回补收缩）· 10Y &lt; 4.55%（FALSE——4.65%）</span></div>
                <div><span className="dn-lvl-k">那个签名</span><span className="dn-lvl-v bear">聪明钱在跌里加（07-27 +214%）、在弹里减（07-29 −41%）——需求腿与价格夺回腿从未同时打成 TRUE</span></div>
                <div><span className="dn-lvl-k">侦察开仓</span><span className="dn-lvl-v bull">在阳线夺回 D-EMA50、且与聪明钱重新加仓、OI 转需求驱动配对（或利率印数 &lt; 4.55%）时：侦察多 0.2R</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">日收 &lt; $63,311（已结定底 200W / D-SMA50 汇合——收破即终结复苏读数）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$66k–$72k 看涨墙带为实操上限；工作均线目标 D-EMA100 $67,555，$66k / $67k 墙处减半</span></div>
                <div><span className="dn-lvl-k">仓位</span><span className="dn-lvl-v">确认夺回上 0.2R · 不在记录性买家正减仓的空头回补反弹里开</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>确认再武装约 $64,923 开仓（D-EMA50 夺回），止损 $63,311（已结定底 / D-SMA50）= 约 $1,612 风险；工作目标
                D-EMA100 $67,555 = 约 $2,632 回报 ≈ 1.63:1——但 $66k–$72k 看涨墙带盖住路径，故现实首目标是 $66k / $67k 墙，到那里的 R/R 更薄。
                <b>硬规则：</b>侦察仓不在空头回补反弹里开。离底两根阳线、聪明钱减仓 −41%、OI 收缩，是解脱式反弹、非需求驱动夺回——记录性买家正在退出它抄底所买的那波反弹。
                确认腿是价格在阳线上夺回 D-EMA50 且聪明钱重新加仓、OI 转需求驱动，按此顺序。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">空 · 追空 · 按兵不动 · 较武装更远——近月负 gamma 燃料隔夜蒸发</span>
              <div className="dn-trade-name">
                追空——07-28 再武装曾&ldquo;最接近满足&rdquo;；如今 gamma 燃料尽失、本子重新 gamma 转正、$64k 口袋愈合、定底守住
              </div>
              <div className="dn-thesis">
                07-28 追空是整轮复苏里最接近武装的一次：一簇新鲜近月负（28JUL −13.30M / 29JUL −4.37M / 30JUL −0.51M）加上头顶的 $64k −11.99M 口袋，
                且现货在收盘上丢了 D-EMA50。两条腿现在都已翻转。近月负簇隔夜愈合——28JUL 结算离场，29JUL 翻正 +10.12M，30JUL +0.45M，条子再度实质为正
                （仅余微不足道的 14AUG −0.09M 残留），31JUL +61.31M 主导；$64k 口袋从 −11.99M 直接翻为 +14.23M；庄家汇总加深至 +116.31M 滚加；
                且定底以收盘守住、出了两根阳线。所以追空不只是按兵不动——它较自重置以来的任何时点都更远离武装，其放大式负 gamma 燃料已尽，一个干净的正 gamma 阻尼器
                现坐在现货与定底之间。追空只在定底被击穿、负 gamma 回来、聪明钱滚离净多时才武装——目前一样都没有。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">再武装腿（较 07-28 双双翻转）</span><span className="dn-lvl-v bull">近月负 gamma 已愈合（29JUL +10.12M / 30JUL +0.45M / 31JUL +61.31M，$64k 口袋 +14.23M）且定底以收盘守住（两根阳线）——07-28 两腿双双解掉</span></div>
                <div><span className="dn-lvl-k">为何更按兵不动</span><span className="dn-lvl-v bull">庄家汇总加深转正 +116.31M · 现货近旁本子再度是干净的正 gamma 阻尼器（$64k +14.23M，仅 $60k −20.90M 远在下方）· 现货高出定底 +1.15%</span></div>
                <div><span className="dn-lvl-k">何以武装该空</span><span className="dn-lvl-v bear">日收 &lt; $63,311（破底）且新鲜近月负 gamma 重现、聪明钱滚离净多——则空在破位上武装，止损回到 D-EMA50 $64,923 上方</span></div>
                <div><span className="dn-lvl-k">禁做</span><span className="dn-lvl-v">不在刚守住的定底上方、正 gamma 阻尼器里追空；等破位、等负值回来</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b>追空的全部优势本是现货下方的放大式负 gamma；当条子重新 gamma 转正、$64k 口袋愈合，那燃料隔夜蒸发。在一个加深的正 gamma 本子里、
                在刚以收盘守住的定底上方做空，庄家如今在缓冲下行而非放大它——这正是血缘要按住的低质量空。若 $63,311 在收盘上被破、新鲜近月负回来、聪明钱滚离，
                则空在破位上重新武装——在那之前它等，且今日比昨日离那更远。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 那反复出现的签名如今就是整个故事——聪明钱在跌里加、在弹里减，所以夺回永远配不上需求</span>
              <div className="dn-trade-name">
                相位错位——定底守住、引擎反弹，但记录性买家在每次反弹里减、在每次下跌里加，把侦察仓两条腿永久性地错相
              </div>
              <div className="dn-thesis">
                递延进第六节，形态已解成一条干净的签名：07-27 跌里聪明钱加 +214%（需求腿 TRUE、价格腿 FALSE）；07-26 夺回时它减仓（价格腿 TRUE、需求腿 FALSE）；
                今日反弹它又减 −41%（流量腿与价格腿双 FALSE）。记录性买家靠买跌来防守定底、靠减弹来消化强势——这是在周期底持有净多的理性方式，但它意味着侦察仓的两条开仓腿
                （顶盖夺回 且 聪明钱在需求上加仓）在结构上错相，不会在一次空头回补反弹里对齐。所以本备忘押的是一次真正的 regime 转变、而非又一次摆动：
                要么一次聪明钱真加仓的阳线 D-EMA50 夺回（相位终于对齐，侦察仓实弹武装），要么一次聪明钱终于滚离净多的 $63,311 收盘破位（定底防守失败，追空武装）。
                二者皆无，则账本维持 FLAT，本备忘照写重复。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">多头解决</span><span className="dn-lvl-v bull">聪明钱加仓（非减仓）的阳线 D-EMA50 $64,923 夺回、OI 转需求驱动——相位对齐，侦察仓实弹武装 0.2R</span></div>
                <div><span className="dn-lvl-k">空头解决</span><span className="dn-lvl-v bear">日收 &lt; $63,311、聪明钱滚离净多、新鲜近月负回来——定底防守失败，追空在破位上武装</span></div>
                <div><span className="dn-lvl-k">决定性提示</span><span className="dn-lvl-v">聪明钱净多轨迹相对价格方向（强势里加 vs 强势里减）与 $63,311 日收——非盘中反弹</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>优势在于认清这次反弹与那次下跌是交易台整周看的同一场摆动——一个买家在防守定底，而非一个趋势在解决。血缘不追这场摆动的任何一侧；
                它等相位对齐（夺回 + 聪明钱加仓）或破裂（定底收盘破位 + 聪明钱滚离）。一次聪明钱在其中减仓的空头回补反弹两者都不是。读聪明钱轨迹对价格方向、读 $63,311 收盘，而非 K 线。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 已结定底 $63,311 以收盘守住（两根阳线，空头解决未点燃）· D-EMA50 夺回未点燃（在空头回补上被压 −1.36% 于下方）· 四条侦察腿全 FALSE · 追空较武装更远（近月负已愈合）· 账本 FLAT</span>
            </h2>

            <p>
              在 07-28 的决策条件里：<em>已结定底止损 / 底部测试</em> 解出一个 HOLD（07-28 收 $63,903.60，离 $63,311 汇合的第一根阳线，
              进行中的 07-29 $64,034.50 为第二根——交易台把追空门控在其上的空头解决并未点燃）；<em>回补反弹侦察仓（多）</em> 触发未点燃
              （定底守住、引擎反弹，但打在空头回补上、记录性买家减仓，故价格腿与流量腿都未满足）；<em>阳线夺回 D-EMA50 且聪明钱重新加仓</em> 未发生
              （两根阳线但均在 $64,923 顶盖下，且聪明钱在反弹里减仓 −41.48%）；<em>夺回多头利率过滤器</em> 维持 FALSE（周二 10Y −4bp 至 4.65%，
              仍高于 4.55% 门槛 10bp）；<em>追空再武装</em> 挪得离武装更远——它的燃料、那簇近月负 gamma 隔夜愈合（29JUL +10.12M，30JUL +0.45M，
              条子再度实质为正、仅余微不足道的 14AUG −0.09M 残留，$64k 口袋 +14.23M）。{' '}
              <em>定底以收盘守住，本子重新 gamma 转正，引擎反弹——但反弹是空心的，所以两侧都没有武装。</em>今日条件围绕一处守住的定底、一次空头回补反弹、
              一个减仓的记录性买家、一个加深的正 gamma 庄家本子、以及一个未夺回的 D-EMA50 顶盖重新排定：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>已结定底止损 / 底部测试（07-28 门槛）</td><td className="bull">守住——07-28 收 $63,903.60，离 $63,311 W-SMA200 / D-SMA50 汇合的第一根阳线（07-29 进行中 $64,034.50 为第二根）；07-28 收盘高出定底 +0.94%，现货高出 +1.15%</td><td>空头解决未点燃；复苏读数继续运行，追空维持按兵不动</td></tr>
                <tr><td>阳线夺回 D-EMA50（侦察价格腿）</td><td className="bear">FALSE——两根阳线但均在 $64,923 顶盖下；07-28 收 $63,903.60 低 −1.57%（现货 −1.36%）；顶盖连续第 6 天未被夺回</td><td>不开侦察多：反弹从未拿下顶盖，价格腿未满足</td></tr>
                <tr><td>聪明钱加仓净多（侦察流量腿）</td><td className="bear">FALSE——聪明钱减仓 −41.48% 至 +5,038（Δ多 −1,635，Δ空 +1,937）——减仓形态，07-27 那次 +214% 加仓的反面</td><td>不开侦察多：记录性买家消化了反弹，而非资助它</td></tr>
                <tr><td>OI 背后有买家（侦察流量腿）</td><td className="bear">FALSE——OI −2.18%（−2,305 BTC）空头回补收缩，非需求驱动扩张</td><td>不开侦察多：反弹是空头平仓，而非多头进场</td></tr>
                <tr><td>夺回多头利率过滤器</td><td className="bear">FALSE——10Y 4.65% &gt; 4.55%（周二 −4bp，距触发 10bp）</td><td>独立过滤器为假；下一份 FRED 日频才可能把它朝门槛推</td></tr>
                <tr><td>回补反弹侦察仓（多）</td><td className="bull">阳线夺回 D-EMA50 $64,923 且与聪明钱重新加仓、OI 需求驱动配对（或 10Y &lt; 4.55%）</td><td>侦察多 0.2R，止损 $63,311，工作目标 D-EMA100 $67,555（受 $66k–$72k 看涨墙盖），R/R ~1.63:1</td></tr>
                <tr><td>追空再武装（较武装更远）</td><td className="bull">近月负 gamma 已愈合 + 定底以收盘守住——07-28 两腿双双翻转；庄家汇总加深 +116.31M</td><td>不在刚守住的定底上方、正 gamma 阻尼器里追空；仅在 $63,311 收盘破位、负值回来、聪明钱滚离时武装</td></tr>
              </tbody>
            </table>

            <p>
              重写<em>这份</em>备忘的那一行是{' '}
              <span className="dn-signal">
                记录性买家的下一步是在阳线 D-EMA50 夺回里加仓（相位终于对齐，侦察仓实弹武装），还是在 $63,311 收盘破位里滚离净多
                （定底防守失败，追空在破位上武装）——其余一切都是交易台看了六节的同一场空头回补加减仓的摆动
              </span>。定底守住、本子重新 gamma 转正，但它守在空头回补上、记录性买家在反弹里减仓 −41.48%，恰是 07-27 加 +214% 那次下跌的反面
              ——所以侦察仓的两条腿（顶盖夺回 且 聪明钱在需求上加仓）第六天仍错相，两侧都没武装。在相位对齐或定底破裂之前，本备忘照写运行：侦察仓 DEFERRED 第六天、四条腿全 FALSE；
              追空较自重置以来的任何时点都更远离武装、其近月负 gamma 燃料已愈合成一个干净的正阻尼器；空头价差不在单一周二解冻 10Y 腿上重建；账本在定底上方维持 FLAT。
              MTF 从超卖里反弹、其 HTF 筑底提示完好，庄家本子加深转正并愈合了近月负，BTC 随风险簇走强——但记录性买家减掉了它在下跌里防守所买的那波反弹，这个相位错位才是交易台接下来要读的提示。
              未来 24h 的正确读法是{' '}
              <em>耐心——水位在做工；读 $63,311 收盘、读聪明钱轨迹对价格方向，别读反弹，别买价格尚未夺回的顶盖、也别做空聪明钱正防守的定底</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计）
            </span>
            <p>
              <b>状态：</b>本为 v2 中文版，与 v2 英文版并行、数据零漂移；由 v1 在 STAGE B codex 敌对式审计后晋级，STAGE C 按裁定逐条修订并跑强制 grep 收敛环
              （每条发现的错误断言字符串在整份英文文件里 grep、逐一修至零残留）。补充的 ask-deepseek 重算轮逐项裁定（先重算再动手），非自动套用。锚定 2026-07-29 00:05Z 快照
              （实盘 t == &ldquo;07-29 08:05&rdquo; 北京）。审计裁定 PASS-WITH-NOTES：0 CRITICAL、3 MAJOR、3 MINOR，均已解决。
            </p>
            <p>
              <b>DN-001（MAJOR）——live_db.t 北京时戳被误标为 Z。</b>每一个实盘事件时戳现均为北京 / UTC 成对（散户 08:18 北京 / 00:18Z 与 15:03 北京 / 07:03Z；
              聪明钱峰 11:01 北京 / 03:01Z 与谷 07:41 北京 / 07-28 23:41Z；现货高 00:54 北京 / 07-28 16:54Z 与低 21:48 北京 / 13:48Z；穿越 07-21 06:36 北京 / 07-20 22:36Z）。已解决（命中后 = 0）。
            </p>
            <p>
              <b>DN-002（MAJOR）——MTF/实盘 高/低 口径。</b>MTF 面板 / parquet 低 $62,660 现写为 OHLCV K 线（永续）印数（低 $62,660.1 @ 07-28 13:47Z，在 00:01Z 与 00:05Z 两窗口都复现）
              vs 正文 live_db.spot 低 $62,800.00——为现货对 OHLCV/永续 的口径差、对齐 00:05Z 窗口后仍在，非四分钟；4 分钟缺口只解释时戳/收益漂移。已解决（命中后 = 0）。
            </p>
            <p>
              <b>DN-003（MAJOR）——阳线收盘计数 + 收盘偏移。</b>07-28 现写为第一根阳线（07-29 进行中为第二根），于导语、底部测试正文与决策表；针对 07-28 收盘对象的现货派生偏移重算为收盘专属值：
              07-28 收盘高出 $63,311.02 定底 +0.94%（现货 +1.15%）、低于 $64,922.66 D-EMA50 −1.57%（现货 −1.36%）。已解决（陈义命中后 = 0）。
            </p>
            <p>
              <b>DN-004（MINOR）——决策表内 D-EMA100 陈旧。</b>决策表工作目标现读 D-EMA100 $67,555（parquet 重算 67,554.647），与正文/R/R 一致，R/R 复述 ~1.63:1（2,632 / 1,612）。已解决（命中后 = 0）。
            </p>
            <p>
              <b>DN-005（MINOR）——&ldquo;wholly positive&rdquo; 高估条子。</b>所有条子引用现读&ldquo;实质为正……仅余微不足道的 14AUG −0.09M 残留&rdquo;，所有汇总本子引用现读&ldquo;重新 gamma 转正&rdquo;。已解决（命中后 = 0）。
            </p>
            <p>
              <b>DN-006（MINOR）——CVD 低点被写成美元值。</b>现货 CVD 反向低点现读 cb_cvd 11,972（反向下探，非 USD 价格）。已解决（命中后 = 0）。
            </p>
            <p>
              <b>ask-deepseek 补充重算——裁定：</b>(1) D-EMA100 $67,555 vs $67,622——确认，同 DN-004，已修。(2) DXY delta&ldquo;+0.15 vs 07-27&rdquo;（正文）vs&ldquo;−0.08&rdquo;（宏观表）——非误（codex-clean）：
              两个 delta 带不同标签与基线——正文对 07-27 备忘水位 101.24，表列为末次 FRED 日频变动——故均正确、不改。(3) OI delta −2,305.1 vs −2,305.2——驳回（假阳）：精确差 105,591.168 − 103,286.041 = 2,305.127 取整为 −2,305.1。
              (4) 资金费最低 −3.32% vs −3.33%——驳回（假阳）：−0.003036 × 1095 = −3.3244 取整为 −3.32%；deepseek 的 3.32542 为算术滑误。仅项 (1) 可执行，已由 DN-004 覆盖。
            </p>
            <p>
              <b>codex 确认无误（重算锚点，v2 未改）：</b>资金费 × 1095（实时 +10.95% 年化，原始 0.01 顶在上限，24h 均 +4.70%，最高 +10.95%，最低 −3.32% 来自 −0.003036，300 / 1441 负行）；
              GEX 双参照符号（翻转 $62,716，现货 +2.11% / 指数 +2.27%，均正，图取现货侧；头条 +100.4M vs 按到期滚加 +116.31M = net_gex $116,313,503，约 +15.9M 缺口、本次滚加高于头条）；
              整张均线矩阵对实时现货 $64,041.86（parquet 2026-07-29 00:05Z 收 $64,034.50，D-EMA50 $64,923 −1.36% 顶盖，D-SMA50 $63,361 +1.07% 最近支撑，已结定底 200W $63,311.02，
              W-SMA200 在 188 周 K 不可算而 W-SMA150 $76,627 可算但闲置，D-EMA100 $67,555）；聪明钱减仓比 |Δ净|/前净 = 3,571.78 / 8,610.03 = 41.48%（Δ多 −1,634.8 / Δ空 +1,937.0）；
              30D 收盘对收盘 RV 31.33%（29 收益替代 30.02%）；按到期滚加重建（列出到期合计 +116.30M ≈ net_gex +116.31M）；跨资产（|r| 0.266 NORMAL，BTC −3.93% vs NQ −4.12%）与宏观 Tier-1
              （10Y 4.65% 周二 −4bp、HY OAS 2.81%、MOVE 77.2、DXY 101.39、美联储净流动性 $5.917T）；结论对已加载数据（NTT / max-pain / 行权价 IV / BTC-NQ 仅作框架；JGB 月频勿倚重；IV 为跨 838 合约的链上中位、非可交易价差）；
              以及 requireViewer 门控（路径 /zh/desk/2026-07-29，首句）。六条发现全部 RESOLVED；晋级 v1 → v2。整体：<b>已过 codex 敌对式审计</b>。
            </p>
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘为 Hysteresis Research（迟滞研究）合伙人内部讨论所备，<em>非投资建议、非招揽、非要约</em>，亦未针对任何接收方情况个性化。数字反映单一原子快照
            （2026-07-29 00:05Z），分段出处见上方来源带；宏观 Tier-1 面板渲染为 2026-07-28 22:17Z（早于快照约 1.8h）并含周二 FRED 日频重印，部分输入明确陈旧或待定并已如实标注。
            水位、仓位与条件仅示意交易台流程，非长期建议。过往相关性、gamma 与仓位形态不约束未来盘面。衍生品有全额亏损风险，若带杠杆，亏损可超出已缴保证金。<em>请自行研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                定底守住、本子重新 gamma 转正，但反弹是空心的——OI 下降里的空头回补，记录性买家在其中减仓 −41%。聪明钱在跌里加、在弹里减，所以夺回永远配不上需求。别买价格尚未夺回的顶盖。读收盘。耐心。
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
            v2 · 2026-07-29 00:05Z 快照 · 来源：live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
