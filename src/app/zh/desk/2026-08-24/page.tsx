import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav、不在 sitemap、noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-24 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-24',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-24' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260824() {
  await requireViewer('/zh/desk/2026-08-24');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-24 · v2</span>
          <span>内部 · 仅供讨论 · 已过 codex 敌对式审计</span>
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
              <span className="dn-big">$77,624</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.63%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-08-24 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">
                    live_db.json · 盘面锚 <b>2026-08-24 00:05Z</b>（BJ 行{' '}
                    <code>08-24 08:05</code>）
                  </td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · <b>已 PIN</b>：到锚行为止的 20,200 行尾巴
                    存档在{' '}
                    <code>snapshots/2026-08-24-0007/live_db_pin_2026-08-24T0005Z.jsonl</code>
                    、本篇每一个盘面数字都从这个文件算、不从 live tail 算
                    （本次 session 首末两次读之间 live 文件又长了四行）· 窗口
                    规则是闭区间 [锚 − 时长, 锚]：24h = 1,441 行、48h = 2,881、
                    72h = 4,321、7d = 10,081 —— N 行跨的是 N−1 根分钟到分钟
                    间隔 · <b>端点断言</b>：本篇每一个跨度都从{' '}
                    <code>rows[−(N·60+1)]</code> 起、收在 pin 的锚行本身上。
                    08-23 的 v1 稿在两个 OI 数字上没做到，所以这一稿只读 pin、
                    每一个跨度在动笔之前先对着 pin 重算过一遍
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-24 00:01Z scan（BJ 08:01）</td>
                  <td className="dn-flag">
                    滚动小时人造物 · 存档于{' '}
                    <code>snapshots/2026-08-24-0007/</code> · 比盘面锚早约 4
                    分钟 · 扫描现货 $77,706 / 24h +0.74% 对盘面 $77,624.49 /
                    +0.63%（两个 24h 起点不同、见 §II）· 全是未收盘 K 线
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-24 00:00Z bake</td>
                  <td className="dn-flag">
                    存档于 <code>snapshots/2026-08-24-0007/</code> · 比锚早约 5
                    分钟 · Deribit idx $78,168 对 live 现货 $77,624.49（idx 高{' '}
                    <b>$543.51</b> —— 近期谱系里最宽的 idx-现货 gap；下面每一个
                    双参考数字两侧都印）· 998 合约（08-23 是 1,038 —— 23AUG26
                    那 +5.76M 的线在 08-23 08:00Z 结清）·{' '}
                    <b>文件 headline 合计 +245.7M、按到期脚算 +247.69M</b>；
                    本篇全程走脚算口径、以便和 08-22 / 08-23 两篇对齐、
                    headline 单独披露 · <code>gex_summary.json</code> 本次{' '}
                    <b>未</b>读
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 生成于 2026-08-24 00:00Z
                  </td>
                  <td className="dn-flag">
                    存档于 <code>snapshots/2026-08-24-0007/</code> · 22 资产 ·
                    168 根小时行 · 这是一条 7 天滚动读数、不是当日读数 ·
                    只有共动、没有载入任何 hedge ratio、稳定性或样本外工作
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-23 22:16Z 渲染</td>
                  <td className="dn-flag">
                    存档于 <code>snapshots/2026-08-24-0007/</code> · 比锚早约
                    1.8h · <b>连续第二篇周末重渲染</b>：每一根 FRED 来源的行
                    与 08-23 备忘的面板逐比特相同；只有两根 Yahoo 汇率行动了
                    （DXY 98.80→98.85、USD/JPY 158.86→158.91）· JGB 是 FRED
                    月度、<b>陈旧 83 天——不要压</b> · NFCI 陈旧 9 天 · WTI
                    陈旧 5 天
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵 + 30D RV</td>
                  <td className="dn-v-cell">
                    btcusdt_1m_2019…2026.parquet · 全部 8 个年度文件 · 最末 1m
                    bar 2026-08-24 00:06Z @ $77,544.10
                  </td>
                  <td className="dn-flag">
                    <b>MA 锚口径</b>：整个 20 格矩阵只在<em>已结算</em> bar 上
                    算 —— 日线到 2026-08-23 收 $77,719.10、周线到{' '}
                    <b>2026-08-23 W-SUN 收 $77,719.10</b>。开着的 08-24 日 bar
                    与只有 6 分钟的 08-30 W-SUN bar 都被排除、任何一个水位都
                    不被半根 bar 污染；偏移按 live 盘面现货 $77,624.49 报。
                    30D RV = 31 根已结算日收算出的 30 个对数收益
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W watch 状态</td>
                  <td className="dn-v-cell">
                    weekly_200sma.json <b>不存在</b> · ma200w_trap_watch_state.json
                    重算于 2026-08-24 00:11:40Z
                  </td>
                  <td className="dn-flag">
                    runbook 点名的那个文件仍然不存在、而{' '}
                    <code>weekly_200sma_state.json</code> 陈旧 49 天
                    （asof 2026-07-06）。<em>在</em>的是{' '}
                    <code>ma200w_trap_watch_state.json</code>、它在
                    <b>本篇盘面锚之后 6m40s</b> 重算（00:05:00Z → 00:11:40Z）、
                    独立印出 <code>last_completed_week 2026-08-23</code>、
                    <code>close 77719.1</code>、<code>sma200 64269.62</code>、
                    <code>consecutive_above 1</code>、
                    <code>invalidated_streak 2026-08-23</code> —— 与交易台自己
                    的 parquet 重算 W-SMA200 精确到分。它作为<b>锚后佐证</b>
                    披露、不是来源；分位与破地板频率仍是交易台的 parquet 重算
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT pivot、max-pain、strike-level IV、BTC/NQ 比率
                  </td>
                  <td className="dn-v-cell">本次未载入</td>
                  <td className="dn-flag">相关主张明确为 framework only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h 年化</span>
              <span className="dn-v bear">+10.95%（钉在封顶）</span>
              <span className="dn-src">live · 原始字段 +0.0100%/8h × 1095 · 24h 均值 +10.95% —— 均值<em>就是</em>封顶、因为 1,441 根采样行每一根都印它、连续第二篇 ·{' '}<b>自 2026-08-21 08:48Z 起连续 3,798 根采样行钉顶</b>、即 3,797 分钟（上一根非封顶行 08:47Z、+10.77%）· 「封顶」= 这条 feed 在 10,081 行 7d 窗内一次都没越过的 +10.95% ann 天花板</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+10.95% → +10.95%（焊死）</span>
              <span className="dn-src">区间 +10.95% / +10.95%、1,441 / 1,441 钉顶（100.0%）、0 / 1,441 为负 —— 占用率与 08-23 一模一样、但后面那条连续段长了 1,438 行 · 72h 均值 +10.55%、3,798 / 4,321 钉顶（87.9%）、0 为负；7d 均值 +8.27%、5,027 / 10,081 钉顶、<b>0 / 10,081 为负</b> —— 08-23 备忘还带着的那 158 根负值行已经整段滚出 7d 窗</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−0.29%（−306.8 BTC）</span>
              <span className="dn-src">live · 105,852.669 → 105,545.878 BTC · 底仓在 08-23 那根持平印之后恢复收缩、但只是边际、而且是<em>净</em>口径（gross 开平与账户级换手在这条 feed 里不可观测）· 48h −568.0 / −0.54%、72h −2,029.7 / −1.89%、7d −5,442.4 / −4.90%、距 3d 峰 111,052.236 @ 08-21 08:50Z −5,506.4 / −4.96% —— 每一个跨度都收在 00:05Z pin 锚行上 · <b>−4.96% 是峰口径、不与任何收益率配对</b></span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v">51.69 / 48.31</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · 24h 区间 48.79 / 51.95 · 7d 前 68.96%、7d 窗峰是 <b>08-17 00:06–00:11Z 一段新的 69.00% 平台</b>（08-23 备忘引的 08-16 23:12Z 那段印的是同一个<em>数值</em>、但是另一组行、现在已经滚出本篇 7d 窗）、7d 谷 48.52% @ 08-20 23:18Z —— retail 离峰 −17.31pt、同期价格 +23.39%、但已经<b>回挤 +1.51pt、离 08-20 的谷 +3.17pt</b>；仍是全页最干净的一条线，而且这是<b>三个 session 里的第二个回挤端点、不是第一个</b> —— 精确 00:05Z 日端点是 48.86%（08-21）→ 50.95%（08-22、<b>+2.09pt</b>）→ 50.18%（08-23、−0.77pt）→ 51.69%（今天、+1.51pt）、08-22 那一跳比今天更大</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">+19.66k（净多 · 不可采信）</span>
              <span className="dn-src">live · long 28,301.6 − short 8,641.5 · 这个水位作为 feed 读数是真的、但不是可审计的仓位序列：被追踪的交易者计数在 08-23 07:06Z 又跳了一档（<code>long_traders</code> 一分钟内 5,111 → 4,610 —— 本轮第一次<em>向下</em>跳）—— 四天里第四次这样的断点 · <b>与「周期性 roster 重采样或 feed 全集变更」相符，但上游成因未载入</b>：这一刀里没有 roster 名册、没有调度器、没有账户连续性映射、也没有 ingestion 日志</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · 精确 24h</span>
              <span className="dn-v">+32.23k → +19.66k（Δnet −12,573.1）</span>
              <span className="dn-src">基准是精确 T−24h 行 2026-08-24 00:05Z − 24h = 2026-08-23 00:05Z（+32,233.2）· |Δ| / prior_net = 12,573.1 / 32,233.2 = <b>39.01%</b> · 但其中 10,279.5（<b>81.76%</b>）印在 08-23 07:06Z 那一根跳档分钟里（成因未载入）· 之后干净的 16h59m 里 SM 仍然在<em>减</em>：Δnet −1,784.9 = 跳档后净额的 −8.32%、Δlong −2,047.2、Δshort −262.2、对应价格 +1.88%</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">49.8% / 43.15%</span>
              <span className="dn-src">GEX 链上中位数、跨 998 合约（08-23 是 46.7% / 1,038 —— 一根 +3.1pt 的 vol 回硬、同时因 23AUG26 结清少了 40 个合约）对 30D close-to-close RV 43.15% · richness ≈ <b>+6.65pt</b>（49.8 − 43.1467）—— <b>比 08-23 的 +3.52pt 多 +3.13pt、比 08-22 的 +5.85pt 多 +0.80pt</b>；不主张任何序数：没有定义「显著」的阈值、也没有载入按轮长的 richness 台账 · 这是链中位数、<b>不是</b>可交易价差</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+22.14%（在上方）</span>
              <span className="dn-src">flip $63,552（前 $63,653 · 下移 $101）· 对 live 现货 $77,624.49 = +22.14%（77,624.49 / 63,552 − 1 = 22.1433%）/ 对 GEX 文件自己的 Deribit idx $78,168 = +23.00%（文件印 +23.0%）—— 两个参考都是正、tile 取现货侧 · 反过来说：flip 坐在现货<b>下方 18.13%</b>、也就是要跌 18.13% 才够到它 · 脚算 aggregate +247.69M（headline +245.7M）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                结算来了、点着了一笔两条腿交易里的一条
              </span>
              。2026-08-23 那根 W-SUN bar 收在{' '}
              <span className="dn-tag bull">$77,719.10</span>、对 W-SMA200{' '}
              <span className="dn-tag">$64,269.62</span> 是{' '}
              <span className="dn-tag bull">在周期地板上方 +20.93%</span> ——
              这把 08-16 那次破位从一个悬着的条件句变成了{' '}
              <span className="dn-em">一次记录在案的、为期一周的假破</span>
              。那是回撤多头的腿 1、现在是一件不可能再翻回去的历史事实。{' '}
              <span className="dn-signal">
                腿 2 差 $20.30
              </span>
              。交易台要的是一根收在 $75,000–$76,000 里面并且站住的 1h。
              价格插到{' '}
              <span className="dn-tag">$75,588.00 @ 08-23 05:17Z</span> ——{' '}
              <span className="dn-tag">进带 $412.00</span> —— 而整个窗里最低的
              一根交易所 1h 收是{' '}
              <span className="dn-tag bear">07:00Z 那根的 $76,020.30</span>、
              也就是<span className="dn-em">在带顶上方 $20.30</span>。1,440 根
              分钟 bar 里有 14 根收在 $76,000 或以下；小时线一根都没有。所以
              本子还是 <span className="dn-tag">空仓</span>——半武装不叫武装、
              而且交易台不会把 $20.30 往自己有利的方向抹掉。
              <br /><br />
              其余的都是二阶、而且大多在变好。现货{' '}
              <span className="dn-tag">$77,624.49</span>、精确 24h 窗上{' '}
              <span className="dn-tag bull">+0.63%</span>、{' '}
              <span className="dn-tag bull">把 08-23 丢掉的那层周线台阶重夺
              回来</span> —— W-EMA50 $77,248.42（+0.49%）与 W-SMA150
              $77,446.22（+0.23%）—— 但只多出 $376.07 与 $178.27，这种重夺
              一个小时就能还回去。{' '}
              <span className="dn-tag bull">日线梯子 10 / 10 全正</span>、
              整个 20 格矩阵{' '}
              <span className="dn-tag bull">17 / 20</span>；三个没过的全是周线
              且全在头顶：W-SMA50、W-EMA100、W-SMA100。MTF 按文件聚合口径{' '}
              <span className="dn-tag bull">回到 8 多 / 0 空 / 2 中性</span>、
              快周期 RSI 明显降温（4h 89.8 → 72.2）、动能 regime 从 08-23 的
              5/9 反转翻回{' '}
              <span className="dn-tag bull">6/9 顺势（JT≥0）</span>。{' '}
              <span className="dn-em">
                Dealer 夹子再深一档到 +247.69M 脚算、前十堵墙全是正；funding
                还焊在 +10.95% 封顶上、现在是连续 3,798 根采样行；SM 的交易者
                计数连续第四天跳档、所以 24h Δnet 的 81.76% 落在一根成因未载入
                的分钟里。
              </span>{' '}
              变坏的两件事都属于拥挤、不属于结构：retail 回挤{' '}
              <span className="dn-tag bear">+1.51pt 到 51.69%</span> ——{' '}
              <span className="dn-em">
                这是三个 session 里的第二个回挤端点、不是第一个：精确 00:05Z
                日端点是 48.86% → 50.95%（+2.09pt）→ 50.18%（−0.77pt）→
                51.69%（+1.51pt），08-22 已经比今天走得更歪
              </span>{' '}
              —— 以及 1d 周期{' '}
              <span className="dn-tag bear">离 TD9 SELL 只剩一根</span>。
              主线从 08-22 起就没变过：{' '}
              <span className="dn-em">
                一个多头结构、挂在一个交易台仍然不愿意付的价格上
              </span>
              。变的是：交易台<em>愿意</em>付的那个进场、这个 session 里差
              $20.30 就存在过，然后走了。
            </p>

            <p>
              先把区间纪律摆出来。在 pin 的 1,441 行窗上，盘面走了{' '}
              <span className="dn-tag">高 $78,024.19 @ 2026-08-23 21:30Z
              （BJ 08-24 05:30）</span> 与{' '}
              <span className="dn-tag">低 $75,739.99 @ 2026-08-23 05:18Z
              （BJ 08-23 13:18）</span> —— $2,284.20 的幅度、离低点 3.02%。
              现货坐在{' '}
              <span className="dn-tag bear">离高 −0.51%</span>、{' '}
              <span className="dn-tag bull">离低 +2.49%</span>、也就是自己
              24h 区间的 82.5% 位置上，这正是什么都没武装的原因。{' '}
              <span className="dn-signal">
                24h 高才是要记住的那个数：$78,024.19 只戳进 $78,000 那堵墙
                $24.19、同一个小时里就失败了
              </span>{' '}
              —— 这是连续第二个 session 盘面上过 $78,000、当日又收在它下面，
              前一次是 08-22 那根 48h 高{' '}
              <span className="dn-tag">$78,810.00</span> 把整道盖子全测了一遍
              然后失败。上一根收在 $78,000 上方的日线是 08-21 的 $78,309.10。
              头顶那道盖子没变、而且很紧：{' '}
              <span className="dn-tag">$78,000 墙（+32.48M）</span> 在 +0.48%、{' '}
              <span className="dn-tag">D-EMA400 $78,228.40</span> 在 +0.78%、{' '}
              <span className="dn-tag">W-EMA100 $78,446.94</span> 在 +1.06%
              —— 三个水位挤在 <span className="dn-em">$446.94</span> 之内。
              下方，重夺回来的 W-EMA50 / W-SMA150 这一对是第一道支撑、在
              −0.23% / −0.48%，再往下到{' '}
              <span className="dn-tag">$76,000 +11.21M</span> 与{' '}
              <span className="dn-tag">$75,000 +13.08M</span> 这两堵夹着带子的
              墙之前，没有任何结构性的东西。
            </p>

            <h2 className="dn-sec">
              盘面{' '}
              <span className="dn-roman">I · funding 连续第二篇在 1,441 / 1,441 行上焊死封顶、连续段已到 3,798 行 · OI 恢复收缩、但净口径只有 −0.29%、gross 换手在这条 feed 里看不见 · SM 交易者计数连续第四天跳档、这次向下；24h Δnet 的 81.76% 落在那一根分钟里、成因未载入 · retail 回挤 +1.51pt 到 51.69% —— 三个 session 里的第二个回挤端点（48.86 → 50.95 → 50.18 → 51.69）、不是第一个</span>
            </h2>

            <p>
              <span className="dn-signal">
                funding 这根 pin 现在是本子里跑得最久的一件事、而且它在一根
                上涨日里也没有松
              </span>
              。原始字段印 <span className="dn-tag">+0.0100%/8h</span>、也就是{' '}
              <span className="dn-tag bear">窗内 1,441 根采样行每一根都是
              +10.95% ann</span>（× 1095 = 每日 3 个 funding 周期 × 365）。
              24h 均值是 +10.95%，因为常数的均值就是那个常数；最大最小都是
              +10.95%；零行为负。占用率和 08-23 一模一样，但后面那条连续段
              已经拉到{' '}
              <span className="dn-tag bear">自 2026-08-21 08:48Z 起 3,798 根
              连续采样行</span> —— 3,797 分钟、即 2 天 15 小时 17 分 —— 对上
              一篇的 2,360 行。上一根不在封顶的行是{' '}
              <span className="dn-tag">08-21 08:47Z、+10.77% ann</span>。72h
              均值 +10.55%、3,798 / 4,321 钉顶；7d 均值 +8.27%、5,027 / 10,081
              钉顶、而且{' '}
              <span className="dn-em">0 / 10,081 为负 —— 08-23 备忘还带着的
              那 158 根负值行已经整段滚出窗口</span>。多头已经不间断地按最高
              费率付了一根上涨日、一根下跌日和一个周末。{' '}
              <span className="dn-em">
                这是一句脆弱性陈述、不是方向陈述。一本连付 63 小时天花板的
                本子没有任何缓冲去吸收冲击；它不说冲击什么时候来，而且钉顶的
                盘面在过去几轮里钉得比这久得多。
              </span>
            </p>

            <p>
              OI 恢复收缩，但要抓住的词是<em>边际</em>。总量 OI 在 pin 的窗上
              走了{' '}
              <span className="dn-tag">105,852.669 → 105,545.878 BTC、−306.8
              BTC、−0.29%</span>。这把 08-23 备忘标出的那根 +4.8 BTC 持平印
              反了过来，但 −0.29% 在这么大一个底仓上属于噪声范围，信号在更长
              的跨度上：{' '}
              <span className="dn-tag bull">48h −568.0 BTC / −0.54%</span>、{' '}
              <span className="dn-tag bull">72h −2,029.7 / −1.89%</span>、{' '}
              <span className="dn-tag bull">7d −5,442.4 / −4.90%</span>、以及{' '}
              <span className="dn-tag bull">距 3d 峰 111,052.236 @ 08-21
              08:50Z −5,506.4 / −4.96%</span> —— 每一个跨度都收在 00:05Z 的
              pin 锚行本身上。{' '}
              <span className="dn-em">
                这条 feed 能证明的只有一条净路径。gross 开、gross 平和账户级
                换手都不在这个序列里，所以一个「杠杆多头减风险、又被新杠杆
                一比一顶上」的 session 印出来会是同样这个 −306.8。按对齐端点
                老实说：<b>在精确 72h 窗上价格涨 +6.19%（$73,098.00 →
                $77,624.49）、同一窗上 OI 跌 −1.89%（107,575.537 →
                105,545.878）</b> —— 底仓没有跟着这段涨扩张，这与「一段还没
                被重新加杠杆的挤压」相符，但不能证明是谁做了什么。{' '}
                <b>
                  另外单独说，因为那是另一个量法：OI 比它的窗内峰
                  111,052.236（08-21 08:50Z）低 −4.96%，而那个峰在 72h 价格
                  基准之后 8 小时 45 分
                </b>
                。−4.96% 和 +6.19% 不是一对配对端点，本篇不把它们当一对来印。
              </span>
            </p>

            <p>
              <span className="dn-signal">
                smart-money 的交易者计数连续第四天出现断点式跳档、而且这次是
                向下跳
              </span>
              。名义 SM 净额报{' '}
              <span className="dn-tag">+19,660.1 BTC</span>（long 28,301.6 −
              short 8,641.5）、对精确 T−24h 行的{' '}
              <span className="dn-tag">+32,233.2 BTC</span>、Δnet 是{' '}
              <span className="dn-tag bear">−12,573.1</span>、也就是{' '}
              <span className="dn-em">|Δ| / prior_net = 12,573.1 / 32,233.2 =
              39.01%</span> —— 表面上是一刀很大的减仓。{' '}
              <span className="dn-tag bear">这 12,573.1 里的 10,279.5 ——
              81.76% —— 印在 2026-08-23 07:06Z 单独一分钟里</span>、那一分钟{' '}
              <code>long_traders</code> 走{' '}
              <span className="dn-tag">5,111 → 4,610</span>、{' '}
              <code>short_traders</code> 走{' '}
              <span className="dn-tag">1,217 → 1,073</span>。{' '}
              <span className="dn-em">
                被追踪的 <code>long_traders</code> / <code>short_traders</code>{' '}
                计数在一分钟内下落，与「被追踪的样本群缩小」相符、而不是与
                「仓位被平掉」相符，但这条 feed 不带能把这件事定死的证据：
                没有 roster 名册、没有调度器、没有账户连续性映射、也没有
                gross 开平事件。所以交易台把<b>断点本身</b>记为事实、把
                <b>机制</b>记为未经验证
              </span>
              。整条序列现在四天深、已经不能再叫异常：{' '}
              <span className="dn-tag">2026-08-20 07:06Z（long_traders 587 →
              1,388）</span>、{' '}
              <span className="dn-tag">2026-08-21 06:21Z（1,336 → 2,497）</span>、{' '}
              <span className="dn-tag">2026-08-22 06:41Z（2,260 → 4,976）</span>、{' '}
              <span className="dn-tag">2026-08-23 07:06Z（5,111 → 4,610）</span>。{' '}
              <span className="dn-em">
                三次扩张、现在一次收缩，四个连续日、全落在同一个 UTC 小时的
                45 分钟窗里。这个时间规律<em>与</em>「按某个时刻表做的周期性
                roster 重采样或 feed 全集变更」<em>相符</em> —— 它不证明存在
                这么一件事，本页也不把它升格成成因：上游流程在这一刀里未载入。{' '}
                <b>
                  盘面确实能立住的那部分，对真正要做的决定已经够了：这个序列
                  带着周期性的、同小时的断点，而且大到足以主导一个 24h 增量，
                  所以一个写在 <code>net_btc</code> 水位或增量上的门，单凭这
                  一条证据就已经不成立，不管机制最后是什么。
                </b>{' '}
                这条 finding 从 08-23 原样带过来、证据更强；成因标签没有。
              </span>
            </p>

            <p>
              唯一一段不含断点的 SM 窗是{' '}
              <span className="dn-tag">08-23 07:06Z 到锚的 16h59m</span>、
              它说的和昨天一样。净额走{' '}
              <span className="dn-tag bear">−1,784.9（跳档后净额的
              −8.32%）</span>、多头{' '}
              <span className="dn-tag bear">−2,047.2</span>、空头{' '}
              <span className="dn-tag">−262.2</span>、对应一段{' '}
              <span className="dn-tag bull">+1.88% 的价格推升</span>。{' '}
              <span className="dn-em">
                被追踪的 smart money 连续第二段干净窗口在强势里减多头敞口、
                而且比上一段减得更狠（−8.32% 对 −1.94%）。这是描述性的，而且
                是一个跳了四天档的序列上的一段 17 小时窗 —— 它不是信号，本篇
                没有任何一件事压在它上面。
              </span>
            </p>

            <p>
              retail 又往歪了走 —— 但要说清楚：这是{' '}
              <span className="dn-em">三个 session 里的第二个回挤端点、
              不是第一个</span>
              ，序列该印出来而不是被形容。精确 00:05Z 日端点读{' '}
              <span className="dn-tag">48.86%（08-21）→ 50.95%（08-22、
              +2.09pt）→ 50.18%（08-23、−0.77pt）→ 51.69%（08-24、
              +1.51pt）</span>：08-22 那一跳比今天更大。{' '}
              <span className="dn-tag bear">mkt_long_pct 51.69%</span> 对
              T−24h 的 50.18% —— 一记{' '}
              <span className="dn-tag bear">+1.51pt 回挤</span> —— 24h 区间是{' '}
              <span className="dn-tag">48.79% / 51.95%</span>。七天前读{' '}
              <span className="dn-tag">68.96%</span>；7d 窗峰是{' '}
              <span className="dn-tag">一段横跨 2026-08-17 00:06Z–00:11Z 的
              新 69.00% 平台</span> ——{' '}
              <span className="dn-em">
                这<em>不是</em> 08-23 备忘引的那一段：那一段从 2026-08-16
                23:12Z 开始，已经滚出本篇的闭区间窗（窗起点是 2026-08-17
                00:05Z）。数值重复、带时间戳的行不重复
              </span>{' '}
              —— 谷是{' '}
              <span className="dn-tag">48.52% @ 2026-08-20 23:18Z</span>。{' '}
              <span className="dn-em">
                所以头条仍然极好 —— retail 在一根 +23.39% 的周里离峰 −17.31pt、
                这本来就是把结构性论点撑起来的那个去拥挤 —— 但导数已经转向。
                retail 离谷 +3.17pt、并且在最近三个 session 里加了两次，这正是
                「今天是第二个端点、不是第一个」的原因。在 51.69% 上这不是
                顶部信号；它是多头论点里最干净那一条论据的持续侵蚀。
              </span>
            </p>

            <p>
              窗口化的 flow，全部收在锚上。<b>24h</b>：价格{' '}
              <span className="dn-tag bull">+0.63%</span>、OI{' '}
              <span className="dn-tag bull">−306.8 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bull">Δ +199.7</span>、期货 CVD{' '}
              <span className="dn-tag bear">Δ −390.8</span>、大单{' '}
              <span className="dn-tag bull">净 +240.9 BTC / 578 笔</span>、
              taker 净 <span className="dn-tag bear">−389.3</span> ——{' '}
              <span className="dn-em">
                一个真正撕开的 session：现货在买、大单在买、perp taker 在卖。
                价格涨 0.63%、同时期货 taker 净卖 389 BTC、OI 在跌。这是现货
                吸收 perp 供给的形状、属于上涨日里建设性的那一版，但它只是
                一个窗口。
              </span>{' '}
              <b>4h</b>：价格 <span className="dn-tag bull">+0.55%</span>、OI{' '}
              <span className="dn-tag bull">−357.7 BTC（−0.34%）</span>、现货
              CVD <span className="dn-tag bull">Δ +315.9</span>、期货 CVD{' '}
              <span className="dn-tag bull">Δ +587.8</span>、大单{' '}
              <span className="dn-tag bull">+490.8 BTC / 59 笔</span>、taker 净{' '}
              <span className="dn-tag bull">+585.7</span> —— 窗内每一项 flow
              指标上最强的四小时，也是唯一一段 OI 跌、而价格与两个 CVD 都涨的
              时间。<b>1h</b>：价格{' '}
              <span className="dn-tag bull">+0.23%</span>、OI{' '}
              <span className="dn-tag bear">+344.0 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bear">Δ −27.8</span>、期货 CVD{' '}
              <span className="dn-tag bull">Δ +60.1</span>、大单{' '}
              <span className="dn-tag bull">+46.2 BTC / 9 笔</span>、taker 净{' '}
              <span className="dn-tag bull">+68.4</span> —— 很薄，而且{' '}
              <span className="dn-em">是唯一一个 OI 扩张的窗口</span>，这是
              唯一一条指向「新杠杆」而不是「空头回补」的 flow。锚上 perp
              基差是对现货{' '}
              <span className="dn-tag bear">−$9.73 的折价</span>、对 24h 均值{' '}
              <span className="dn-tag bear">−$11.78</span>（区间 −$152.00 /
              +$146.18）、1h 均值{' '}
              <span className="dn-tag bear">−$6.80</span>。Aggregate skew 的
              24h 均值 <span className="dn-tag bear">−10.2</span>（区间 −55.8 /
              +39.5）。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · 08-23 那根 W-SUN bar 已结算在 $77,719.10、对 W-SMA200 $64,269.62 —— 08-16 的破位现在是一次记录在案的、为期一周的假破 · 日线梯子 10 / 10 全正、全矩阵 17 / 20、三个没过的全是周线且全在头顶 · W-EMA50 / W-SMA150 台阶重夺、但只多 $178–$376 · MTF 回到 8 多 / 0 空 / 2 中性、RSI 4h 89.8 → 72.2 降温、1d 离 TD9 SELL 只剩一根</span>
            </h2>

            <p>
              <span className="dn-signal">
                08-23 备忘等的那根有日期的印已经发生、而且是往多头那一侧解的
              </span>
              。2026-08-23 的 W-SUN bar 在 23:59Z 结算，{' '}
              <span className="dn-tag bull">收 $77,719.10</span>、对 W-SMA200{' '}
              <span className="dn-tag">$64,269.62</span> 是一个{' '}
              <span className="dn-tag bull">1.2093 的比率、即在周期地板上方
              +20.93%</span>。上一周那根收{' '}
              <span className="dn-tag bear">$62,876.00 对 $63,978.83、在下方
              −1.72%</span>。一周在下、一周回到上面：{' '}
              <span className="dn-em">
                08-16 的破位现在记录为一次为期一周的假破，08-22 与 08-23 两篇
                里所有关于假破的条件句全部解除。这不再是「在轨道上」；它进了
                记录。
              </span>{' '}
              这根 bar 本身很凶 —— O $62,876.00、H $79,555.50、L $62,723.90、
              C $77,719.10，{' '}
              <span className="dn-tag bull">周收对周收 +23.61%</span>、高低幅
              26.83%。{' '}
              <code>ma200w_trap_watch_state.json</code> 在 00:11:40Z 独立重算、
              印出同一个收盘和同一个 $64,269.62、精确到分，并标{' '}
              <code>consecutive_above 1</code> 与{' '}
              <code>invalidated_streak 2026-08-23</code>。在交易台自己的
              parquet 历史上，当前比率坐在 165 根已完成周观测的{' '}
              <span className="dn-tag">23.0 分位</span>（200 周暖机、parquet
              从 2019 起，所以序列从 2023-07-02 开始 —— <em>不是</em>完整 BTC
              历史）、其中{' '}
              <span className="dn-tag">6.06%</span> 的收盘印在地板下方。{' '}
              <span className="dn-em">
                这句要读仔细：一个 23 分位的比率，意思是即便在地板上方
                +20.93%，按这个量法盘面在历史上仍然算<em>靠近</em>地板，因为
                样本被一段走得远得多的牛市主导。分位是关于这 165 周窗口的
                陈述，不是估值。
              </span>
            </p>

            <p>
              MA 矩阵按已结算 bar 算、偏移对 live 现货 $77,624.49。日线梯子{' '}
              <span className="dn-tag bull">10 / 10 全正</span>、次序没变：{' '}
              <span className="dn-tag bull">D-SMA50 $65,175.71（+19.10%）</span>、{' '}
              <span className="dn-tag bull">D-SMA100 $66,129.18（+17.38%）</span>、{' '}
              <span className="dn-tag bull">D-EMA50 $66,322.98（+17.04%）</span>、{' '}
              <span className="dn-tag bull">D-SMA20 $66,783.91（+16.23%）</span>、{' '}
              <span className="dn-tag bull">D-EMA100 $67,182.78（+15.54%）</span>、{' '}
              <span className="dn-tag bull">D-EMA20 $68,473.52（+13.36%）</span>、{' '}
              <span className="dn-tag bull">D-SMA200 $69,009.48（+12.48%）</span>、{' '}
              <span className="dn-tag bull">D-SMA150 $69,062.56（+12.40%）</span>、{' '}
              <span className="dn-tag bull">D-EMA150 $69,294.11（+12.02%）</span>、{' '}
              <span className="dn-tag bull">D-EMA200 $71,704.43（+8.26%）</span>。
              周线上十根里七根为正：{' '}
              <span className="dn-tag bull">W-SMA200 $64,269.62（+20.78%）</span>、{' '}
              <span className="dn-tag bull">W-EMA200 $68,609.64（+13.14%）</span>、{' '}
              <span className="dn-tag bull">W-EMA20 $69,290.15（+12.03%）</span>、{' '}
              <span className="dn-tag bull">W-SMA20 $69,509.56（+11.67%）</span>、{' '}
              <span className="dn-tag bull">W-EMA150 $73,884.51（+5.06%）</span>、{' '}
              <span className="dn-tag bull">W-EMA50 $77,248.42（+0.49%）</span>、{' '}
              <span className="dn-tag bull">W-SMA150 $77,446.22（+0.23%）</span>。{' '}
              <span className="dn-signal">
                三个没过的全是周线、而且全在头顶
              </span>
              ：{' '}
              <span className="dn-tag bear">W-EMA100 $78,446.94（−1.05%）</span>、{' '}
              <span className="dn-tag bear">W-SMA50 $81,784.71（−5.09%）</span>、{' '}
              <span className="dn-tag bear">W-SMA100 $88,841.22（−12.63%）</span>。
              20 格矩阵之外，两根长周期日线讲同一个故事：{' '}
              <span className="dn-tag bear">D-EMA400 $78,228.40（−0.77%）</span>{' '}
              是那道近盖子的一部分、{' '}
              <span className="dn-tag bear">D-SMA400 $86,137.77（−9.88%）</span>{' '}
              在很上面。{' '}
              <span className="dn-em">
                D-EMA400 这个数是交易台自己在已结算日线上的 parquet 重算；
                MTF 的 1d 列按它那根未收盘的 $77,700 独立读 −0.66%、隐含
                ≈$78,216 —— 两个锚差 $12，本篇取重算值。
              </span>
            </p>

            <p>
              <span className="dn-signal">
                08-23 备忘记作丢掉的那层周线台阶已经重夺 —— 而故事在那点余量
                上
              </span>
              。现货在 W-SMA150 上方 $178.27、在 W-EMA50 上方 $376.07。这是在
              每周都会移动的水位上、用零点几个百分点量出来的重夺；这两根在
              08-22 <em>也</em>被重夺过、24 小时内又还了回去。现货上方是同一道
              盘面已经失败三次的三层盖子：{' '}
              <span className="dn-tag bear">$78,000 墙 +32.48M（+0.48%）</span>、{' '}
              <span className="dn-tag bear">D-EMA400 $78,228.40（+0.78%）</span>、{' '}
              <span className="dn-tag bear">W-EMA100 $78,446.94（+1.06%）</span>{' '}
              —— $446.94 的天花板。24h 高 $78,024.19 只进了三层里第一层
              $24.19、当小时内被打回；48h 高 $78,810.00 在 08-22 盘中把三层
              全清过，一层都没守住。{' '}
              <span className="dn-em">
                在一根 1d 收印到那道带子上方之前，本篇里所有听起来像多头的
                东西，都是对一个盖子底下盘面的描述、不是突破。
              </span>{' '}
              30D close-to-close 实现波动是{' '}
              <span className="dn-tag">43.15%</span>（31 根到 08-23 收为止的
              已结算日收算的 30 个对数收益），对 08-23 的 43.18% 基本持平 ——
              尽管这一周很暴力，因为滚动窗里还带着突破前的压缩。
            </p>

            <p>
              <span className="dn-signal">
                MTF 翻回多头，有意思的是它是在每一个反转印都更近的同时翻回去的
              </span>
              。00:01Z 那次扫描在文件自己的聚合方向块上读{' '}
              <span className="dn-tag bull">8 多 / 0 空 / 2 中性</span>、
              收回 08-23 的 6 / 0 / 4、与 08-22 的读数一致。{' '}
              <span className="dn-em">
                和 08-23 一样，同一个人造物里并存两套口径，这里分开印、不混：
                下表那一列逐周期 偏向 加总是 <b>5 偏多 / 3 警示 / 2 震荡</b>，
                因为聚合块把 警示 行（多头结构带背离警告）算进它的多头计数。
                30m、1h 和 12h 是两套口径不一致的三行。{' '}
                <b>两套口径都不产生任何一个空头分类</b>，所以下面每一句方向性
                陈述在两套口径上都成立。
              </span>{' '}
              动能 regime 从 08-23 的 5 / 9 反转翻回{' '}
              <span className="dn-tag bull">6 / 9 顺势（JT≥0）</span>。RSI 在
              快周期上明显降温 —— 4h 三篇下来{' '}
              <span className="dn-tag bull">89.8 → 77.1 → 72.2</span>、
              30m 48.1 → 59.9、15m 50.0 → 56.1 —— 慢周期仍然烫：12h{' '}
              <span className="dn-tag bear">83.5</span>、1d{' '}
              <span className="dn-tag bear">80.9</span>、8h{' '}
              <span className="dn-tag bear">78.6</span>。{' '}
              <span className="dn-signal">
                这块面板上唯一一个有日期的风险是 1d：TD setup 已经推到
                Sell 8，再来一根收在 close[−4 bars] 上方就印出日线 TD9 SELL
              </span>{' '}
              （文件引的是那根未收盘的 $77,700）。08-23 那个 12h TD9 SELL 已经
              重置到 Sell 1、4h 那个水上死叉现在 8 根 bar 老而不是新鲜的，所以
              快周期的均值回归证据老化了，慢周期那一版搬到了日线上。结构上，
              价格在十个周期里有八个在 Ichimoku 云上方、3d 在云内（1 根、
              70.7k–78.5k）、而且{' '}
              <span className="dn-tag bear">周线云下第 30 根 bar、云底
              ≈$85.9k 在头顶当阻力</span> —— 这是全页唯一一个明确不多的长周期
              条目。背离：一个 30m 顶背离、30m / 1h 底背离，15m、1h 与 1d 上
              有 BULL hid 顺势印。
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>周期</th><th>偏向（逐周期）</th><th>收</th><th>RSI(14)</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="bull">多</td><td className="num">77,695</td><td className="num">56.1</td><td className="bear">死叉（水上）4b</td><td className="bull">云上 ↓77.3k 51b</td><td>Sell 2</td><td>BULL hid</td></tr>
                <tr><td>30m</td><td className="neut">警示*</td><td className="num">77,697</td><td className="num">59.9</td><td className="bull">金叉（水下）29b</td><td className="bull">云上 ↓76.6k 12b</td><td>Sell 1</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="neut">警示*</td><td className="num">77,704</td><td className="num">59.4</td><td className="bull">金叉（水下）13b</td><td className="bull">云上 ↓77.4k 4b</td><td>Sell 4</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="bull">多</td><td className="num">77,697</td><td className="num bear">72.2</td><td className="bear">死叉（水上）8b</td><td className="bull">云上 ↓66.9k 37b</td><td>Sell 4</td><td>BULL hid</td></tr>
                <tr><td>8h</td><td className="bull">多</td><td className="num">77,697</td><td className="num bear">78.6</td><td className="neut">—</td><td className="bull">云上 ↓63.9k 14b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>12h</td><td className="neut">警示*</td><td className="num">77,700</td><td className="num bear">83.5</td><td className="bull">金叉（水下）13b</td><td className="bull">云上 ↓64.6k 11b</td><td>Sell 1</td><td>—</td></tr>
                <tr><td>1d</td><td className="neut">震荡</td><td className="num">77,700</td><td className="num bear">80.9</td><td className="bull">金叉（水下）6b</td><td className="bull">云上 ↓64.5k 6b</td><td className="bear">Sell 8 → 下一根 TD9？</td><td>BULL hid</td></tr>
                <tr><td>3d</td><td className="bull">多</td><td className="num">77,697</td><td className="num">69.4</td><td className="neut">—</td><td className="neut">云内 70.7k–78.5k · 1b</td><td>Sell 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="neut">震荡</td><td className="num">77,700</td><td className="num">56.6</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑85.9k 30b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1M</td><td className="bull">多</td><td className="num">77,700</td><td className="num">50.7</td><td className="neut">—</td><td className="bull">云上 ↓47.4k 30b</td><td>Sell 1</td><td>—</td></tr>
                <tr>
                  <td colSpan={8} className="note">
                    源：mtf_div_latest.html 2026-08-24 00:01Z scan（BJ 08:01）、
                    存档于 snapshots/2026-08-24-0007/。两套口径、都印出来。
                    源文件的<em>聚合方向</em>块读 <b>8 多 / 0 空 / 2 中性</b>。
                    上面复现的逐周期 偏向 列加总是{' '}
                    <b>5 多 / 3 警示 / 2 震荡</b>；标 <b>警示*</b> 的行是 警示
                    状态 —— 多头结构带背离警告 —— 聚合块把它算作多。
                    <b>两套口径下空头分类都是零。</b>所有收都是 2026-08-24
                    00:01Z 扫描的未收盘 bar、与盘面锚差几分钟、几美元。
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className="dn-sec">
              Dealer γ{' '}
              <span className="dn-roman">III · 夹子再深 +5.32M 到 +247.69M 脚算 —— post-08-16 谱系里第二深、但不是谱系最大值：在脚算口径上整条谱系有三个读数更深（07-22 +313.63M、07-23 +283.46M、08-22 +249.91M）、两个更浅（07-24 +235.95M、08-23 +242.37M）· flip $63,552、现货在上方 +22.14%（跌 18.13% 才够到）· 前十堵墙全正、合计占 strip 的 74.09% · 前端到期翻回正 +9.67M、今天 08:00Z 结清 · 28AUG26 松到 +83.49M / 33.71%</span>
            </h2>

            <p>
              <span className="dn-signal">
                Dealer 夹子不是松了而是深了，而且是在这条谱系用来量的那个脚算
                口径上深的
              </span>
              。按到期贡献脚算是{' '}
              <span className="dn-tag bull">+247.69M</span>、对 08-23 备忘的
              +242.37M 是一记{' '}
              <span className="dn-tag">+5.32M</span> 的加深，对 08-22 的{' '}
              <span className="dn-tag">+249.91M</span> 则让今天还差{' '}
              <span className="dn-tag">−2.22M</span>（08-22 备忘印的是
              +249.90M；它那份存档到期表直接求和是 +249.91M、本篇取重算值）。
              文件自己的 headline 合计读{' '}
              <span className="dn-tag">+245.7M</span>；本篇全程走脚算口径，
              因为那是 08-22 与 08-23 用的口径、三者只在彼此之间可比。{' '}
              <span className="dn-em">
                这是 post-08-16 谱系里第二深的正夹子、<b>不是</b>谱系最大值。
                同一脚算口径下、从存档到期表直接求和得到的完整谱系台账是：{' '}
                <b>07-22 +313.63M、07-23 +283.46M、08-22 +249.91M 比今天深；
                07-24 +235.95M 与 08-23 +242.37M 比今天浅</b>。是三个更深的
                读数、不是两个 —— 08-22 在计数之内，而它正是本段刚刚量过、
                今天还差 −2.22M 的那个 +249.91M。07-24 的 +262.1M 是另一口径
                的 headline 值、不是可比的更深印；在脚算口径上 07-24 坐在今天
                <em>下方</em>。
              </span>{' '}
              0-γ flip 下移到{' '}
              <span className="dn-tag">$63,552（从 $63,653、−$101）</span>。
              现货 $77,624.49 坐在{' '}
              <span className="dn-tag bull">flip 上方 +22.14%</span>{' '}
              （77,624.49 / 63,552 − 1 = 22.1433%）；GEX 文件自己的「dist to
              flip」按它的 Deribit 指数 $78,168 读{' '}
              <span className="dn-tag bull">+23.0%</span>（78,168 / 63,552 − 1
              = 22.9985%）—— 两个参考都是正、都在很上方。{' '}
              <span className="dn-em">
                按对做空真正有意义的方向说：flip 坐在现货<b>下方 18.13%</b>
                （1 − 63,552 / 77,624.49），所以够到它要的是一段 18.13% 的
                下跌、不是 22%。按文件自己的指数算，同一句话是 18.70%。
              </span>{' '}
              注意 idx-现货 gap 已经从 08-23 的 $244.70 拉到{' '}
              <span className="dn-tag">+$543.51</span>，这就是每一处都印两个
              参考、而不是只印一个的原因。
            </p>

            <p>
              前十堵墙全是正的、合计{' '}
              <span className="dn-tag bull">+183.52M</span> —— {' '}
              <span className="dn-em">整条脚算 strip 的 74.09% 坐在十个
              行权价上</span> —— {' '}
              <span className="dn-tag bull">$80,000 +40.17M</span>（最重、从
              +38.29M 上来）、{' '}
              <span className="dn-tag bull">$78,000 +32.48M</span>、{' '}
              <span className="dn-tag bull">$82,000 +22.00M</span>、{' '}
              <span className="dn-tag bull">$70,000 +18.57M</span>、{' '}
              <span className="dn-tag bull">$75,000 +13.08M</span>、{' '}
              <span className="dn-tag bull">$84,000 +11.65M</span>、{' '}
              <span className="dn-tag bull">$74,000 +11.59M</span>、{' '}
              <span className="dn-tag bull">$72,000 +11.57M</span>、{' '}
              <span className="dn-tag bull">$76,000 +11.21M</span>、{' '}
              <span className="dn-tag bull">$90,000 +11.20M</span>。{' '}
              <span className="dn-signal">
                形状往上移了：$90,000 进了前十、把 08-23 的 $85,000 +9.91M
                挤出去，$70k–$76k 那几堵被点名的正墙全部变轻、$80k 以上被
                点名的头部墙全部变重
              </span>{' '}
              —— $75,000 从 +15.20M 松到 +13.08M、$76,000 +12.82M → +11.21M、
              $74,000 +13.12M → +11.59M、$72,000 +13.49M → +11.57M。{' '}
              <span className="dn-em">
                这句话是<b>刻意</b>限定在被点名的墙上的、<b>不是</b>一句关于
                整条 strike profile 的全称陈述，因为完整 profile 撑不起全称：
                在 08-23 → 08-24 两份 profile 数组上，$87,000 明明在 $80k
                上方却<em>跌</em>了（+0.03644M → +0.01162M），而 $74,500
                （−0.58932M → −0.68154M）、$68,000（−0.63133M → −0.68904M）、
                $66,000（−0.57959M → −0.60615M）与 $61,000（−0.31001M →
                −0.34526M）明明在 $76k 下方、绝对值却都变得更负。另有 5 个
                08-23 带着的行权价（$62,500 / $63,500 / $64,500 / $65,500 /
                $66,500）在今天这份 52 点 profile 里整个不存在，所以两份
                profile 连全集都不是同一个。
              </span>{' '}
              <span className="dn-em">
                窄着读，这稀释的正是回撤带子画在上面的那层货架。带子不因此
                移动 —— 它当初是按价格水位选的、不是按 γ 水位选的 —— 但它
                比画的时候少了一档支撑。
              </span>{' '}
              按到期看，前端随着滚进当日已经翻回正：{' '}
              <span className="dn-tag bull">24AUG26 0.3 DTE +9.67M</span> ——
              它在 08-23 的 1.3 DTE 上是{' '}
              <span className="dn-tag bear">−1.21M</span>、并在{' '}
              今天 08:00Z、本锚之后 7h55m 结清 ——{' '}
              <span className="dn-tag">25AUG26 1.3 +0.54M</span>、{' '}
              <span className="dn-tag">26AUG26 2.3 −0.03M</span>、{' '}
              <span className="dn-tag">27AUG26 3.3 −0.03M</span>；{' '}
              <span className="dn-em">前四根合计 +10.15M、从 08-23 的
              +5.34M 上来</span>。权重仍然压在两条线上：{' '}
              <span className="dn-tag bull">28AUG26 4.3 DTE +83.49M</span> ——{' '}
              <span className="dn-em">占脚算 strip 的 33.71%、从 08-23 的
              +87.66M / 36.17% 松下来，而且这是当前 IV 下的一个快照贡献、
              不是一次保证会掉的 roll-off</span> —— 与{' '}
              <span className="dn-tag bull">25SEP26 32.3 DTE +77.50M
              （31.29%）</span>。{' '}
              <span className="dn-signal">
                这两个到期单独就扛 +160.99M、占 strip 的 65.00%
              </span>
              。之后是 25DEC26 123.3 +33.00M、4SEP26 11.3 +19.46M、30OCT26
              67.3 +10.29M、26MAR27 214.3 +6.84M、11SEP26 18.3 +4.95M、
              25JUN27 305.3 +2.01M。
            </p>

            <p>
              跨 <span className="dn-tag">998 合约的 IV 中位数是 49.8%</span>、
              从 08-23 跨 1,038 合约的 46.7% 上来 —— 一记{' '}
              <span className="dn-tag bear">+3.1pt 的 vol 回硬</span>、同时
              因为 23AUG26 那条线在 08-23 08:00Z 结清而少了 40 个合约。对 30D
              close-to-close RV{' '}
              <span className="dn-tag">43.15%</span>，链层面的 richness 是{' '}
              <span className="dn-tag">≈ +6.65pt</span>（49.8 − 43.1467 =
              6.6533）——{' '}
              <span className="dn-em">
                比 08-23 的 +3.52pt 多 +3.13pt、比 08-22 的 +5.85pt（49.1% IV
                对 43.25% RV）多 +0.80pt。这里不主张任何序数：没有定义
                「显著」分离的阈值、也没有载入按轮长的 richness 台账，所以这
                是一次走阔、不是一个「首次」
              </span>
              。{' '}
              <span className="dn-em">
                这是跨 N 个合约的链中位数、<b>不是</b>可交易价差；到期层和
                行权价层的 vega、skew 与期限结构都没载入，所以 vol 读数停在
                framework only、不在它上面构想任何 vol 交易。Put/call OI
                比 0.60（call OI 249,430 BTC 对 put OI 148,412 BTC）作为原始
                文件读数带出，不附加任何仓位推断。
              </span>
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 连续第二个周末重渲染 —— 每一根 FRED 行与 08-23 面板逐比特相同、只有两根 Yahoo 汇率行动了 · 跨资产在 0.217 上仍然 IDIOSYNCRATIC、BTC 7d +23.70% 领先 NQ −2.39% 达 26.09pt、样本内与金属共动多于与股指共动 —— 只是共动、既不指认驱动也不指认对冲</span>
            </h2>

            <p>
              <span className="dn-signal">
                连续第二篇没有新的宏观信息，老实的做法是在报任何一个数字之前
                先说这句
              </span>
              。面板渲染于 2026-08-23 22:16Z —— 比本锚早约 1.8h —— 但 08-23
              是周日、FRED 整个周末没发东西，而且{' '}
              <span className="dn-em">
                每一根 FRED 来源的行都与 08-23 备忘带的那份逐比特相同。只有
                两根 Yahoo 汇率行动了：DXY 98.80 → 98.85、USD/JPY 158.86 →
                158.91，都很边际，DXY 的 episodic z 从 −1.81 软到 −1.61。
                这块面板按<b>未变</b>读。读者对比两篇应该看到基本没有宏观
                增量，因为确实没有，而不是因为盘面安静了。
              </span>{' '}
              水位：美 10Y 名义{' '}
              <span className="dn-tag bear">4.69%（+4.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+1.98</span>、episodic +0.69 ——
              RISK-OFF，也是板上<em>最高的新鲜日频 Tier-1</em> regime z。它
              不是显示出来的最高值：JGB 10Y 带 +2.42，但那是一根月度、陈旧
              83 天的序列，本篇不压在上面。10Y TIPS 实际{' '}
              <span className="dn-tag bear">2.35%（0.0bp）</span>、regime z
              +1.82、episodic −1.03 —— RISK-OFF。5Y5Y BE 通胀{' '}
              <span className="dn-tag">2.34%（0.0bp）</span>、regime z +1.76、
              episodic <span className="dn-tag bear">+1.58</span> —— episodic
              被标。HY OAS{' '}
              <span className="dn-tag bull">2.75%（+2.0bp）</span>、regime z
              −0.74 —— 仍然松。MOVE 债波{' '}
              <span className="dn-tag">73.4（+0.22）</span>、regime z +0.02 ——
              中性。DXY{' '}
              <span className="dn-tag bull">98.85（+0.05）</span>、regime z
              −0.12、episodic z{' '}
              <span className="dn-tag bull">−1.61</span> —— episodic 偏软被标。
              Fed 净流动性{' '}
              <span className="dn-tag bear">$5.792T（−0.004T）</span>、regime z
              −1.22、episodic z <span className="dn-tag bear">−2.45</span> ——
              RISK-OFF 而且还在抽，是面板上对 BTC 最不友好的一行。NFCI
              −0.559（陈旧 9 天、RISK-ON）。USD/JPY 158.91、美日 10Y 利差
              2.02%（+4.0bp）、USD/CNY 6.7118、episodic z −2.57。Tier 3 上
              唯一被标的是 10Y 盈亏平衡 2.34%、episodic z{' '}
              <span className="dn-tag bear">+2.38</span>，旁边是黏住的核心 CPI
              3.48%、中位 CPI 3.11%、Michigan 1Y 4.6%（陈旧 83 天）与 WTI
              $86.5（陈旧 5 天）。{' '}
              <span className="dn-em">
                净读数：利率紧、实际利率紧、信用与波动松、美元软、Fed 流动性
                在抽 —— 与 08-22 和 08-23 一模一样的分裂读数。这是一个敌意
                背景，而 BTC 已经无视它八个 session；那个背离本身才是重点，
                而下一根美国日频印 —— 周五以来第一根 —— 是检验它的东西。
              </span>{' '}
              JGB 10Y 2.67% 带 EXTREME RISK-OFF 标签，但它在一根{' '}
              <span className="dn-tag stale">月度、陈旧 83 天</span>的序列上
              —— 不要压。
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th><th>水位</th><th>Δ</th><th>regime z</th><th>episodic z</th><th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>美 10Y 名义</td><td className="num">4.69%</td><td className="num bear">+4.0bp</td><td className="num bear">+1.98</td><td className="num">+0.69</td><td className="bear">RISK-OFF · 最高的新鲜日频 Tier-1 regime z（陈旧月度 JGB 读更高、+2.42）</td></tr>
                <tr><td>10Y TIPS 实际</td><td className="num">2.35%</td><td className="num">0.0bp</td><td className="num bear">+1.82</td><td className="num bull">−1.03</td><td className="bear">RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.34%</td><td className="num">0.0bp</td><td className="num">+1.76</td><td className="num bear">+1.58</td><td className="neut">无标签 · episodic 被标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.75%</td><td className="num bear">+2.0bp</td><td className="num bull">−0.74</td><td className="num">+0.19</td><td className="bull">松</td></tr>
                <tr><td>芝加哥联储 NFCI</td><td className="num">−0.559</td><td className="num">−0.00</td><td className="num bull">−1.46</td><td className="num bull">−1.29</td><td className="stale">RISK-ON · 陈旧 9 天</td></tr>
                <tr><td>MOVE 债波</td><td className="num">73.4</td><td className="num bear">+0.22</td><td className="num">+0.02</td><td className="num">−0.36</td><td className="neut">中性</td></tr>
                <tr><td>美元指数（DXY）</td><td className="num">98.85</td><td className="num bear">+0.05</td><td className="num">−0.12</td><td className="num bull">−1.61</td><td className="bull">regime 中性 · episodic 偏软 · 对 08-23 只有的两根动了的行之一</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.792T</td><td className="num bear">−0.004T</td><td className="num bear">−1.22</td><td className="num bear">−2.45</td><td className="bear">RISK-OFF · 在抽 · episodic</td></tr>
                <tr><td>USD/JPY</td><td className="num">158.91</td><td className="num bear">+0.03</td><td className="num">+0.55</td><td className="num">−0.73</td><td className="neut">无标签 · 对 08-23 动了的另一根</td></tr>
                <tr><td>美日 10Y 利差</td><td className="num">2.02%</td><td className="num bear">+4.0bp</td><td className="num">−0.17</td><td className="num">+0.69</td><td className="neut">中性</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7118</td><td className="num bull">−0.01</td><td className="num bull">−1.56</td><td className="num bull">−2.57</td><td className="bull">无标签 · episodic</td></tr>
                <tr><td>10Y 盈亏平衡（T3）</td><td className="num">2.34%</td><td className="num">0.0bp</td><td className="num">+0.32</td><td className="num bear">+2.38</td><td className="neut">驱动面板 · 按设计不入合成</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月度）</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">月度 · 陈旧 83 天 · 不要压</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、168 行、生成于 2026-08-24 00:00Z ——{' '}
              <span className="dn-em">一条 7 天滚动读数、不是当日读数</span>）。
              非对角均值{' '}
              <span className="dn-tag">|r| 0.217</span>、比 08-23 的 0.220
              略降，安稳地待在{' '}
              <span className="dn-tag">IDIOSYNCRATIC</span> 带里（&lt;0.25）。
              BTC 的相关性排名由金属领头、单只股票混在中间：PLAT{' '}
              <span className="dn-tag">+0.313</span>、SILVER{' '}
              <span className="dn-tag">+0.254</span>、MSFT{' '}
              <span className="dn-tag">+0.243</span>、META{' '}
              <span className="dn-tag">+0.194</span>、GOLD{' '}
              <span className="dn-tag">+0.190</span>、PALL +0.181、JPY
              −0.154、AMZN +0.154、COPPER +0.149、URNM +0.109、EUR +0.108、
              TSLA +0.097 —— {' '}
              <span className="dn-tag">NQ 在 +0.072</span> 与{' '}
              <span className="dn-tag">SP500 在 +0.064</span> 靠底，但{' '}
              <span className="dn-em">
                「股票排最后」会是错的：MSFT +0.243 排第三、META +0.194 排
                第四，两个都在 GOLD +0.190 之上
              </span>
              。7d 表现：{' '}
              <span className="dn-tag bull">BTC +23.70%</span> 对{' '}
              <span className="dn-tag bear">NQ −2.39%</span>、{' '}
              <span className="dn-tag bear">SP500 −1.34%</span>、{' '}
              <span className="dn-tag bear">JP225 −3.68%</span>、{' '}
              <span className="dn-tag bear">NVDA −3.69%</span>、{' '}
              <span className="dn-tag bear">META −6.46%</span>、{' '}
              <span className="dn-tag bear">MSFT −2.13%</span>、TSLA{' '}
              <span className="dn-tag bull">+6.93%</span>、AAPL +1.52%。实物
              资产偏硬：URNM{' '}
              <span className="dn-tag bull">+9.25%</span>、PLAT +6.89%、BRENT
              +6.28%、CL +6.01%、SILVER +5.77%、GOLD +5.04%。{' '}
              <span className="dn-em">
                BTC 在 7d 上领先 NQ +26.09pt、比 08-23 备忘的 +24.93pt 走阔，
                因为 BTC 多加了一个 session 而 NQ 没有交易。样本能支持的、
                以及仅此而已：在这 168 根小时行上，BTC 与选定的金属共动多于
                与 NQ 或 SP500 共动。这是一句关于某一个 7d 窗内同期共动的
                陈述 —— 它<em>不</em>指认是什么在驱动这段行情，这里也没有
                载入任何 hedge ratio、稳定性或样本外工作，所以它对「这段行情
                能不能用 TradFi 工具对冲」什么都没确立。另外注意，这个窗里
                七天中有两天是周末日、完全没有股票印，这在机械上压低了表里
                每一个 BTC-股票相关系数。
              </span>{' '}
              BTC/NQ 比率、max-pain 与 NTT pivot 仍然未载入 —— framework only。
            </p>

            <h2 className="dn-sec">
              交易本{' '}
              <span className="dn-roman">V · 本子空仓 · 回撤多头半武装、仍然未武装 —— 腿 1 在 $77,719.10 那根结算上触发、腿 2 差 $20.30（最低 1h 收 $76,020.30 对带顶 $76,000，此前有一根 $75,588.00 的插针、进带 $412）· 追空按下不表、价格腿 18.13%、γ 腿反而更深 · 08-19 scout 维持 EXPIRED UNFILLED · 新未结事项：武装规则的价格口径从未指定、两个候选口径差 $91.90</span>
            </h2>

            <p>
              <span className="dn-signal">
                一条腿点着了、一条腿差 $20.30，而本子什么都没做 —— 这是规则
                在生效、不是规则失效
              </span>
              。08-22 备忘把回撤多头画在 $75,000–$76,000 这段墙带上、明确
              未武装、挂两条腿。{' '}
              <b>腿 1 触发</b>：08-23 的 W-SUN bar 结算在 $77,719.10、对
              W-SMA200 $64,269.62 是 +20.93%，而这件事是永久的 —— 一根已结算
              的周收不可能反结算，所以只要这个框架还在，腿 1 就一直满足。{' '}
              <b>腿 2 没有触发。</b>条件是一根收在 $75,000–$76,000 里面并且
              站住的 1h。价格在带子上下工作了大约三个小时 —— 它的 1m 低点在
              05:14Z 到 08:04Z 之间处在 $76,000 或以下 —— 印出低点{' '}
              <span className="dn-tag">$75,588.00 @ 08-23 05:17Z</span> ——{' '}
              <span className="dn-tag">进带顶 $412.00、即 0.54%</span> ——
              当天 1,440 根分钟 bar 里有 14 根收在 $76,000 或以下、最低一根
              $75,743.90。但{' '}
              <span className="dn-em">
                整个窗里最低的一根交易所 1h 收是 07:00Z 那根的 $76,020.30、
                在带顶上方 $20.30
              </span>
              ，而到下一个小时价格已经高了 $466 并且还在往上爬。
            </p>

            <p>
              <span className="dn-signal">
                那 $20.30 暴露了交易台自己武装规则里的一个设计缺陷，在对它下
                任何结论之前先记在这里
              </span>
              。规则写的是「一根收在 $75,000–$76,000 里面并站住的 1h」，既没
              指定价格口径、也没定义「站住」是什么，而两个候选口径不一致：{' '}
              <span className="dn-em">
                交易所 1h bar（Binance BTCUSDT perp、parquet）把 07:00Z 那个
                小时收在 $76,020.30 —— 在外面；live 盘面 07:59Z 的分钟级采样
                读 $75,928.40 perp / $75,929.08 spot —— 在里面。两个读数差
                $91.90，差在于 07:59 那根一分钟 bar 自己开在 $75,932.80、
                在最后几秒插到 $76,020.30。按交易所 bar 口径这笔交易不武装；
                按盘面采样口径有一个小时碰到带子然后立刻离开。
              </span>{' '}
              交易台对自己下判：<b>以交易所 1h bar 为口径</b>，因为「收」这个
              词指的就是那个对象，而盘面采样是快照、不是收盘。在这个口径下
              腿 2 未触发。{' '}
              <em>
                而且两个口径下「站住」都没满足过 —— 一个小时碰一下带子然后
                掉头不叫站住。这个规格缺口是一个真实的未结事项、并作为未结
                事项列出；它不靠「挑一个能给出交易台想要的进场的口径」来解决。
              </em>
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · 回撤再进场框架 · <b>半武装 —— 仍然未武装</b> · 腿 1 在结算上触发 · 腿 2 差 $20.30、而价格现在在带顶上方 $1,624.49</span>
              <div className="dn-trade-name">
                $75,000–$76,000 墙带上的回撤多头 —— 按原水位带走；一条腿现在
                永久满足、另一条比以往任何时候都更远
              </div>
              <div className="dn-thesis">
                结构性论点这个 session 变强了、而且现在压在一根已结算的印上
                而不是一个预测上：08-23 的 W-SUN 收{' '}
                <b>$77,719.10</b> 坐在 W-SMA200 $64,269.62 上方 +20.93%、把
                08-16 的破位记录为一次为期一周的假破；日线 MA 梯子 10 / 10
                全正、全矩阵 17 / 20；dealer 本子深到{' '}
                <b>+247.69M 脚算</b>、前十堵墙全正；MTF 回到 8 多 / 0 空 /
                2 中性、两套口径下空头都是零；丢掉的周线台阶重夺回来。不愿意
                追价的理由没变、并且多了两条：funding 已经焊在 +10.95% 封顶上{' '}
                <b>连续 3,798 根采样行</b>、并占满本窗 1,441 / 1,441 行；底仓
                净口径上只缩了 −0.29%（gross 换手在这条 feed 里不可观测）；{' '}
                <b>retail 回挤 +1.51pt 到 51.69%</b>、这是三个 session 里的
                第二个回挤端点（精确 00:05Z 端点 48.86 → 50.95 → 50.18 →
                51.69）、不是第一个；1d 周期{' '}
                <b>离 TD9 SELL 只剩一根</b>；夹着带子的 $75,000 / $76,000
                两堵墙都变轻了。{' '}
                <b>腿 1 已触发且永久。腿 2 未触发，而且比画出带子以来任何
                时候都远</b> —— 现货坐在带顶上方 $1,624.49，所以要跌 2.09%
                才够到（现货在其上方 +2.14%）。框架按原水位带走。它不会为了
                去够一个曾经差 $20.30 然后走掉的价格而往上重画。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">未武装 · 腿 1 <b>已触发</b>（08-23 W-SUN 结算 $77,719.10 对 W-SMA200 $64,269.62、+20.93%）· 腿 2 <b>未触发</b>（最低 1h 收 $76,020.30 = 带顶上方 $20.30；1m 低 $75,588.00 = 进带 $412.00；没有任何一个小时站住）</span></div>
                <div><span className="dn-lvl-k">武装条件（剩下那条腿）</span><span className="dn-lvl-v bull">按交易所 bar 口径、一根收在 $75,000–$76,000 里面并站住的 1h —— 带子由 $75,000 +13.08M 与 $76,000 +11.21M 两堵墙夹出 · 口径在本 session 那 $91.90 分歧之后已明确指定</span></div>
                <div><span className="dn-lvl-k">进场</span><span className="dn-lvl-v bull">武装印上 ≈$76,000 · 0.2R · 不在带子上方追；一个根本没走到带子的印，是交易台不做的交易</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1d 收 &lt; $72,992.40 —— 08-21 的日低、也是突破段之前最后一个 pivot、就坐在 $72,000 +11.57M 那堵墙上方 · 止损在现货下方 5.97% —— 要跌 5.97% 才够到（等价地说，现货在其上方 +6.35%）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$80,000（+40.17M 最重的墙 · 现货距 +3.06%）、然后 W-SMA50 $81,784.71（+5.36%）—— W-SMA50 因结算从 08-23 备忘的 $81,773.47 移动，正如那篇说它会移动</span></div>
                <div><span className="dn-lvl-k">头顶第一道要清的</span><span className="dn-lvl-v bear">三层盖子 $78,000 墙 +32.48M（+0.48%）/ D-EMA400 $78,228.40（+0.78%）/ W-EMA100 $78,446.94（+1.06%）—— $446.94 的天花板；24h 高 $78,024.19 只进了第一层 $24.19、当小时内失败</span></div>
                <div><span className="dn-lvl-k">框架失效（新增）</span><span className="dn-lvl-v">若有一根 1d 收印在 $78,000 / $78,228.40 / $78,446.94 这道盖子上方，本框架按「画得太低」<em>退役</em>、而不是继续带着 —— 和 08-19 scout 同样的处置方式，主动做、不靠漂移</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R（示例）：</b>进场 ≈$76,000、止损 $72,992.40 = $3,007.60
                风险；第一目标 $80,000 = $4,000 回报 = <b>1.33:1</b>
                （4,000 / 3,007.60 = 1.3300）—— 与 08-23 相同，因为三个水位
                一个都没动。对一笔 0.2R 的 scout 来说这很薄，而且它薄是
                <em>结构性的</em>。<b>硬规则：</b>水位不会因为价格差 $20.30
                没到触发而移动。如果盘面再也不回带子，这个框架就 expire
                unfilled 并如实记录 —— 与把 08-19 scout 记为过期而不是往上
                重画 20% 是同一套纪律。这个 session 的差别在于，错过现在是
                用美元量的、不是用千位量的，这让「重新规定规则」的诱惑更强
                而不是更弱 —— 这正是它没有被往进场那个方向重新规定的原因。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 追空 · <b>按下不表</b> —— 价格腿离武装 18.13%（比 08-23 的 17.48% 更远、只因为价格涨了）· γ 腿反而深了 +5.32M 到 +247.69M 脚算、post-08-16 谱系第二深、整条谱系有三个读数更深（07-22 / 07-23 / 08-22）</span>
              <div className="dn-trade-name">
                追空 —— 再一次按下不表；一次在周期地板上方已结算的假破是做空
                setup 的反面，本篇不从那几个反转印里制造一个出来
              </div>
              <div className="dn-thesis">
                能把一笔空单摆上桌的两个条件是价格腿（现货走到 0-γ flip 够得
                着的地方、dealer 本子在那里从阻尼变成放大）和 γ 腿（正夹子
                在解）。这个 session 两条腿都往<em>远</em>走。flip 坐在{' '}
                <b>$63,552、现货下方 18.13%</b> —— 要跌 18.13% 才够到，对
                08-23 的 17.48%；这条腿变远只因为价格涨了 $487、不是因为结构
                变了。夹子深了 +5.32M 到 <b>+247.69M 脚算</b>、这是 post-08-16
                谱系里第二深的正印、并且{' '}
                <b>不是谱系最大值</b> —— 在全程使用的脚算口径上，完整台账是{' '}
                <b>
                  07-22 +313.63M、07-23 +283.46M 与 08-22 +249.91M 更深
                  （三个更深的读数，其中 08-22 只在今天上方 +2.22M），对
                  07-24 +235.95M 与 08-23 +242.37M 更浅
                </b>
                。可能诱人做空的那些证据 —— 1d TD8 离 TD9 一根、12h RSI 83.5
                与 1d 80.9、30m 顶背离、$74k–$76k 变薄的墙货架、retail 回挤
                +1.51pt —— 全都是均值回归证据，而它们坐在一张聚合口径{' '}
                <b>8 多 / 0 空 / 2 中性</b>
                {' '}的 MTF 图里（逐周期加总 5 多 / 3 警示 / 2 震荡），两套
                口径下空头分类都是零，外加一条 10 / 10 全正的日线梯子和一根
                刚刚结算在周期地板上方 +20.93% 的周 bar。{' '}
                <em>
                  在一本 +247.69M 的正 γ 本子里、在 flip 上方 22% 的地方，
                  去空一次已结算的假破重夺，是一笔没有结构支撑的交易。
                </em>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">按下不表 —— 本快照下不构想任何空单</span></div>
                <div><span className="dn-lvl-k">价格腿（未满足）</span><span className="dn-lvl-v bear">现货走到 0-γ flip $63,552 够得着的地方 —— 当前在现货下方 18.13%；现货在其上方 +22.14%（按文件 Deribit 指数 $78,168 是 18.70% / +23.00%）</span></div>
                <div><span className="dn-lvl-k">γ 腿（未满足 · 反而更远）</span><span className="dn-lvl-v bear">脚算 aggregate GEX 转负或塌向零 —— 当前 +247.69M（headline +245.7M）、对 08-23 深了 +5.32M；28AUG26 +83.49M / 33.71% 在 4.3 DTE 的 roll-off 是最近的、可能推动这条腿的结构性催化</span></div>
                <div><span className="dn-lvl-k">不要做</span><span className="dn-lvl-v">不要把待印的 1d TD9 SELL、12h / 1d 在 80 区的 RSI、30m 顶背离或 retail 回挤读成做空触发 —— 它们是均值回归印，落在一个完好、而且现在被结算确认过的多头结构里</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>γ 腿有一个带日期的候选、价格腿没有。28AUG26
                当前贡献 +83.49M —— 脚算 strip 的 33.71% —— 按当前 IV 算，
                25SEP26 另外 +77.50M / 31.29%，两条线扛 65.00% 的夹子。在
                本子、现货或 IV 没有抵消性变化的前提下，28AUG26 那份贡献会在
                2026-08-28 08:00Z 结算时掉下来、并实质性地削薄夹子。那是一个
                <em>观察项</em>、不是预测：strip 连续重定价，快照份额不是保证
                会掉的 roll-off —— 这个 session 它就从 36.17% 松到 33.71%，
                而整条 strip 反而长了。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · 08-19 回补反弹 scout · EXPIRED UNFILLED —— 08-22 记录、未变、本篇不重新翻案</span>
              <div className="dn-trade-name">
                08-19 scout —— 作为过期平掉；在本子里只作为它暴露出来的未结
                设计缺陷带着，现在是两条
              </div>
              <div className="dn-thesis">
                08-19 那笔 scout（进场 ≈$64,632、止损 $63,301、目标 $66,343 /
                $66,391）在 08-22 被记为 <b>EXPIRED UNFILLED</b>、机会成本
                10.03R 毛 / 按所述 0.2R 规模 ≈2.01R，两个目标都在 2026-08-19
                15:05Z 打到。本 session 不改变那条记录，本篇也不重新论证它。{' '}
                <em>还活着</em>的是它暴露的那个缺陷：这笔交易从没武装，因为
                腿 2 要求一个可采信的 SM 净多，而 SM feed 恰恰是在一分钟级的
                交易者计数断点里产出它的净多的。{' '}
                <b>
                  这件事现在连续发生了四天 —— 08-20 07:06Z、08-21 06:21Z、
                  08-22 06:41Z 与 08-23 07:06Z，最后一次向下 —— 这确立了这些
                  断点是<em>周期性的</em>而不是一次性的。它<em>没有</em>确立
                  的是为什么：没有载入 roster 名册、调度器、账户连续性或
                  ingestion 证据，所以机制停在未经验证的推断上、交易台不点名。
                </b>{' '}
                光是周期性这一点就够得出设计结论：在这个序列上，一个写在{' '}
                <code>net_btc</code> 水位或增量上的门是不成立的，不管机制
                最后是什么。{' '}
                <b>
                  今天本子里又进来一条同族的缺陷：回撤多头的腿 2 被写成
                  「一根收住并站住的 1h」而没有指定价格口径，两个候选口径在
                  那个决定性的小时上差 $91.90。
                </b>{' '}
                两条都作为未结事项留给后面的 session，本篇除了在上面的交易块
                里把口径明确点名之外不打补丁。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">EXPIRED UNFILLED · 08-22 平掉 · 不在更高价格上重画 · 本 session 不追加任何核算</span></div>
                <div><span className="dn-lvl-k">未结设计事项 1 · SM 门</span><span className="dn-lvl-v bear">SM 交易者计数断点：08-20 07:06Z（long_traders 587 → 1,388）、08-21 06:21Z（1,336 → 2,497）、08-22 06:41Z（2,260 → 4,976）、08-23 07:06Z（5,111 → 4,610）—— 成因未载入、只有这些跳档本身 · 单凭这条证据，一个写在 <code>net_btc</code> 上的二元决策门就不成立；换成无跳档窗口检验、或者干脆把这条腿去掉</span></div>
                <div><span className="dn-lvl-k">未结设计事项 2 · 价格口径（新增）</span><span className="dn-lvl-v bear">「一根收在带内并站住的 1h」规格不足：交易所 1h bar $76,020.30 对 live 盘面 07:59Z 采样 $75,928.40 / $75,929.08 —— 在决定性的那个小时上差 $91.90，而且「站住」没有附带任何 bar 数。今后每一个带区门在发布前都必须写明口径与时长</span></div>
              </div>
              <div className="dn-gating">
                <b>核算说明：</b>机会成本数字是在一笔从未进场的交易上做的
                算术、为流程问责而记录，不是业绩主张。谱系 MFE 台账不存在，
                所以这次错过仍然无法与之前的错过排序 —— 那份台账仍是 08-22
                审计留下的未结事项，而今天这次 $20.30 的擦肩会是它里面的
                第二条。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 那根有日期的印已解 —— 08-16 的破位是一次记录在案的、为期一周的假破 · 新的有日期风险是离一根之遥的 1d TD9 SELL；新的有日期催化是 4.3 DTE 的 28AUG26 roll-off · 本子空仓、回撤半武装且未武装、追空按下不表</span>
            </h2>

            <p>
              08-23 那几个条件里：{' '}
              <b>08-23 W-SUN 结算发生了、并且解在地板上方</b>、$77,719.10 对
              $64,269.62（+20.93%），把 08-16 的破位变成一次记录在案的、为期
              一周的假破，并点着回撤多头的腿 1；{' '}
              <b>回撤武装条件仍然没有触发</b>，因为腿 2 在交易所 1h 收上差
              $20.30；{' '}
              <b>台阶重夺观察触发</b> —— 现货收回 W-SMA150 $77,446.22 与
              W-EMA50 $77,248.42 上方，把 08-23 那次丢失降格为接近插针，
              尽管只多 $178.27；<b>盖子测试没有触发</b> —— 24h 高 $78,024.19
              只进 $78,000 那堵墙 $24.19 就被打回；{' '}
              <b>追空维持按下不表</b>，价格腿从 17.48% 走到 18.13%、纯粹因为
              价格，γ 腿反而更深；{' '}
              <b>funding 解钉没有触发</b>，连续段从 2,360 行拉到 3,798 行；{' '}
              <b>28AUG26 那块夹子没有掉</b>，份额从 36.17% 松到 33.71%；
              以及 <b>08-19 scout 维持已平</b>。{' '}
              <em>
                两件坏事在动：retail 回挤 +1.51pt 到 51.69% —— 这是三个
                session 里的第二个回挤端点（48.86 → 50.95 → 50.18 → 51.69）、
                不是第一个 —— 以及 1d 周期推进到 TD Sell 8、离日线 TD9 SELL
                一根，后者才是新的。一个新的设计缺陷进来了：武装规则的价格
                口径从未指定。净下来，结构性论点拿到了一枚结算章、进场变差了，
                这就是过去三篇用不同措辞描述的同一个取舍。
              </em>
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td><b>08-23 W-SUN 周结算</b>（已解）</td><td className="bull">2026-08-23 23:59Z 收 $77,719.10 对 W-SMA200 $64,269.62 = 上方 +20.93% · <code>consecutive_above 1</code>、<code>invalidated_streak 2026-08-23</code></td><td>记录：08-16 的破位是一次为期一周的假破；回撤多头的腿 1 永久满足，08-22 / 08-23 两篇里所有关于假破的条件句全部解除</td></tr>
                <tr><td>回撤多头 —— 武装（剩下那条腿）</td><td className="bull">按交易所 bar 口径、一根收在 $75,000–$76,000 里面并站住的 1h · 现货现在坐在带顶上方 $1,624.49 —— 要跌 2.09% 才够到（现货在其上方 +2.14%）</td><td>scout 多 0.2R 在 ≈$76,000、止损 1d 收 &lt; $72,992.40、目标 $80,000 然后 W-SMA50 $81,784.71 · 不在带子上方追</td></tr>
                <tr><td><b>1d TD9 SELL</b>（新的有日期风险 · 一根之遥）</td><td className="bear">1d TD setup 在 Sell 8；再来一根收在 close[−4 bars] 上方就印 TD9 · 文件引的是未收盘的 $77,700</td><td>不是做空触发、也不被当成做空触发；它是交易台不在 $78,000 里追的理由，也是「带子仍可能被重访」这句话最强的单条论据</td></tr>
                <tr><td><b>盖子测试</b>（未触发 · 带走）</td><td className="bear">一根 1d 收在叠起来的 $78,000 墙 +32.48M / D-EMA400 $78,228.40 / W-EMA100 $78,446.94 这道带子上方 —— $446.94 的天花板</td><td>24h 高 $78,024.19 进了 $24.19、当小时内失败。一根收在带子上方的日线是第一份真正的续势证据，并且会把回撤框架按「画得太低」<b>退役</b>、而不是继续带着</td></tr>
                <tr><td><b>台阶站住</b>（替代 08-23 的重夺观察）</td><td className="bull">1d 收持续站在 W-EMA50 $77,248.42 / W-SMA150 $77,446.22 上方 —— 当前 +0.49% / +0.23%、$178–$376 的余量</td><td>这一对在 08-22 被重夺、08-23 丢掉、今天又重夺；一周之内第三次丢失会让「台阶」这个说法本身变成错的，届时这个水位应该从本子里去掉、而不是重新论证</td></tr>
                <tr><td>结构性失效</td><td className="bear">1d 收 &lt; $72,992.40（08-21 日低、在 $72,000 +11.57M 墙上方）· 在现货下方 5.97% —— 要跌 5.97% 才够到（现货在其上方 +6.35%）</td><td>突破段是一次失败的行情；回撤框架被取消而不是被武装，整个多头结构从头重估</td></tr>
                <tr><td>funding 解钉</td><td className="bull">funding 有一段持续印在 +10.95% 封顶之下、最好同时 OI 在跌</td><td>会缓解本子里最糟的那一条（连续 3,798 根钉顶行、本 24h 窗 1,441 / 1,441、7d 上 0 / 10,081 为负），并实质性改善回撤进场；一本钉顶付最高费率的本子、配一个净口径只缩了 −0.29% 的底仓，脆弱性在这里、不在价格上</td></tr>
                <tr><td><b>retail 回挤</b>（新观察）</td><td className="bear"><code>mkt_long_pct</code> 51.69%、24h +1.51pt、离 08-20 谷 48.52% +3.17pt · 这是三个 session 里的第二个回挤端点、不是第一个：48.86%（08-21）→ 50.95%（08-22、+2.09pt）→ 50.18%（08-23）→ 今天 51.69%</td><td>去拥挤是多头论点最干净的一条腿；观察它回到 ~55% —— 那是「retail 不在这笔行情里」这句论据不再可用的点。在 51.69% 上这是一条备注、不是信号</td></tr>
                <tr><td>28AUG26 γ roll-off</td><td className="bear">+83.49M = 脚算 +247.69M strip 的 33.71%、4.3 DTE、2026-08-28 08:00Z 结算 · 与 25SEP26 +77.50M / 31.29% 两条线扛 65.00% 的夹子</td><td>当前 IV 下的快照贡献、不是保证会掉的 roll-off；在本子 / 现货 / IV 没有抵消性变化的前提下它会实质削薄夹子，是最近的、可能推动追空 γ 腿的催化</td></tr>
                <tr><td>SM feed（设计缺陷 · 不是交易条件）</td><td className="stale">交易者计数在 08-20 07:06Z、08-21 06:21Z、08-22 06:41Z、08-23 07:06Z 跳档 —— 连续四天、最后一次向下；本篇 24h Δnet 的 81.76% 是 08-23 那次跳档 · 跳档是观测到的、上游成因未载入、也不做断言</td><td>本篇没有任何门写在 <code>net_btc</code> 上；唯一带出的 SM 陈述是那段无跳档的 16h59m 窗（Δnet −1,784.9、−8.32%），它是描述性的、不是决定性的</td></tr>
                <tr><td>武装规则价格口径（设计缺陷 · 新增）</td><td className="stale">交易所 1h bar $76,020.30 对 live 盘面 07:59Z 采样 $75,928.40 / $75,929.08 —— 决定性小时上差 $91.90；「站住」没有 bar 数</td><td>采用交易所 1h bar 为口径、并已写进交易块；规格缺口作为未结事项记录，今后每一个带区门在发布前都必须写明口径与时长</td></tr>
                <tr><td>宏观再生长 / 利率过滤</td><td className="stale">面板连续第二篇未变 —— 周五 08-21 那根 FRED 印的周末重渲染：10Y 4.69%（z +1.98）、TIPS 实际 2.35%、HY OAS 2.75%、MOVE 73.4、Fed 净流动性 $5.792T 在抽（episodic z −2.45）；只有 DXY 98.85 与 USD/JPY 158.91 动了</td><td>一份重渲染上没有、也不该有任何宏观动作；周一的美国日频印是第一个能推动这块面板的东西。BTC 对 NQ 的 r = +0.072 只说明这 7d 样本里两者几乎没有共动 —— 它不往任何一个方向指认驱动</td></tr>
              </tbody>
            </table>

            <p>
              真正会改写<em>这一篇</em>的那条线是{' '}
              <span className="dn-signal">
                盘面到底会不会回到 $75,000–$76,000、让交易台去买一个现在已经
                有一条腿永久满足的 setup —— 还是收一根日线在 $78,000 /
                $78,228.40 / $78,446.94 这道盖子上方、把框架按「画得太低」
                退役
              </span>
              。其余都是背景。结构比昨天好，而且好在证据上、不是好在叙事上：
              一根在周期地板上方 +20.93% 已结算的周收、一条 10 / 10 全正的
              日线梯子、一本 +247.69M 脚算、每一堵头部墙都是正的 dealer 本子、
              一张 8 多 / 0 空 的 MTF 图，以及重夺回来的周线台阶。盘面对进场
              也比昨天更不友好：funding 焊在封顶上连续 3,798 行、retail 在
              三个 session 里第二次回挤、日线 TD9 SELL 只剩一根、IV richness
              走阔到 +6.65pt，而价格坐在自己 24h 区间最上面那五分之一里、
              在它拒绝收进去的那条带子上方 $1,624.49。{' '}
              <em>
                这两个读数并不冲突 —— 它们描述的是一个多头结构挂在一个坏
                价格上，连续第三篇，区别是这个 session 里那个好价格短暂地
                存在过，而交易台自己的规则被正确执行、没有让它买。
              </em>{' '}
              本子维持空仓，回撤多头维持已定义、半武装、在 $75,000–$76,000
              上未武装，追空维持按下不表，交易台等的是带子或者盖子。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2 —— 已过 codex 敌对式审计
            </span>
            <b>状态：v2 中文版 —— 已过 codex 敌对式审计。</b>STAGE B 对 v1
            草稿在 xhigh 强度上跑了一遍 codex 敌对但公允的跨模型审计、返回{' '}
            <b>BLOCK-CRITICAL —— 2 CRITICAL + 3 MAJOR + 4 MINOR</b>。完整裁定、
            证据与建议修法记录在{' '}
            <code>audits/2026-08-24-desk-note.md</code>、本阶段未改动它。九条
            findings 全部就地修正，然后在<em>整个</em>文件上用 grep 收口 ——
            不只是审计引用的那些行，因为那些行是「一条被打破的不变量的主要
            示例」、不是它的穷举。这个区分正是 2026-06-08 / 06-09 两次
            pipeline 失败被记录在案的根因。逐条收口记录（含实际搜索的 pattern）
            在 EN v2 的审计痕迹里；本中文版与 EN v2 数值零漂移、承载同一套
            口径与同一套警告。
            <br /><br />
            <b>九条 findings 的中文摘要：</b>{' '}
            <b>DN-001（CRITICAL）</b>retail「本轮首次往歪走」是假的、而且被
            同段自己的「最近三个 session 里加了两次」自证：精确 00:05Z 日
            端点是 48.86%（08-21）→ 50.95%（08-22、+2.09pt）→ 50.18%
            （08-23、−0.77pt）→ 51.69%（今天、+1.51pt）。所有序数改为
            <b>三个 session 里的第二个回挤端点</b>、并在九处把序列直接印出来
            （tile、导语、§I 罗马、§I retail 段与段尾、回撤多头 thesis、§VI
            段落、§VI 决策表 retail 行、§VI 收尾段）—— 审计引了七处。{' '}
            <b>DN-002（CRITICAL）</b>「整条谱系更深的读数是 07-22 与 07-23」
            这份对照台账漏了 08-22，而同一段自己已经写了 08-22 比今天深：
            完整台账现为 <b>07-22 +313.63M、07-23 +283.46M、08-22 +249.91M
            更深；07-24 +235.95M、08-23 +242.37M 更浅</b>，三处（§III 罗马、
            §III 正文、追空 γ 腿块）全部改齐；今天比 08-22 差 −2.22M；较窄
            的「post-08-16 谱系第二深」是对的、予以保留。{' '}
            <b>DN-003（MAJOR）</b>把一个峰口径的 OI 跌幅和一个端点口径的价格
            涨幅称作「同一个 72h」：现在印对齐端点 —— 精确 72h 窗上价格
            +6.19%、OI −1.89% —— 并把「OI 比 08-21 08:50Z 的窗内峰低 4.96%、
            而那个峰在 72h 价格基准之后 8h45m」单独陈述。{' '}
            <b>DN-004（MAJOR）</b>「$80,000 以上每一个行权价都变重、$76,000
            以下每一个都变轻」超出并抵触已载入的完整 strike profile：主张
            限定到被点名的实质墙，并印出反例 —— $87,000 +0.03644M → +0.01162M、
            $74,500 / $68,000 / $66,000 / $61,000 绝对值都更负、外加 5 个
            08-23 的行权价在今天的 52 点 profile 里根本不存在。{' '}
            <b>DN-005（MAJOR）</b>盘面支持的是周期性的计数断点、不是
            「按时刻表的 roster 重建」或「不是仓位在平」这种范畴性成因：
            全部相关位置改为<b>与周期性 roster 重采样或 feed 全集变更相符、
            上游成因未载入</b>，并把设计结论重新建立在「周期性」本身上 ——
            那是盘面确实能证明的部分。{' '}
            <b>DN-006（MINOR）</b>IV「本轮首个 implied 显著拉开 realized 的
            session」既无阈值也无序数台账：改为可度量的形式 —— +6.65pt、
            比 08-23 的 +3.52pt 多 +3.13pt、比 08-22 的 +5.85pt 多 +0.80pt，
            并明说没有阈值、没有台账；§VI 收尾的「翻倍」也改成「走阔」。{' '}
            <b>DN-007（MINOR）</b>锚后佐证的时差差了五秒：00:05:00Z →
            00:11:40Z 是 <b>6m40s</b>、不是 6m35s，两处都改并写出减法。{' '}
            <b>DN-008（MINOR）</b>「这个窗里七个周末日中的两个」把日历分母
            说错了：改为<b>这个窗里七天中有两天是周末日、没有股票印</b>。{' '}
            <b>DN-009（MINOR）</b>当前 7d 峰与 08-23 备忘引的峰是不同的行、
            却被称作「同一个 69.00% 印」：改为 <b>08-17 00:06–00:11Z 一段新的
            69.00% 平台</b>，并写明 08-23 那段 08-16 23:12Z 的平台已滚出本篇
            闭区间窗（窗起点 08-17 00:05Z）—— 数值重复、带时间戳的行不重复。
            <br /><br />
            <b>收口小结：九条全部 RESOLVED —— 所有被搜索的 pattern 上，
            带修前语义的命中数为零。</b>没有任何一条是仅凭审计引用行就通过的。
            所有被改的数字在动笔之前都对着 pin 的人造物独立重算过 —— retail
            端点序列与 72h 价格 / OI 配对来自{' '}
            <code>snapshots/2026-08-24-0007/live_db_pin_2026-08-24T0005Z.jsonl</code>、
            六份到期表求和来自 07-22 / 07-23 / 07-24 / 08-22 / 08-23 / 08-24
            的 GEX 存档、strike profile 来自 08-23 与 08-24 两份 1D-profile
            数组、6m40s 来自 <code>ma200w_trap_watch_state.json</code>。审计
            的 <b>Codex-confirmed clean</b> 一节 —— 门与路由、JSX 完整性、
            pin / live 同一性、盘面区间、funding、其余 OI 与 SM 算术、
            MA / RV / 200W、当期 GEX 算术、MTF、宏观、跨资产数字、交易算术
            与范围 —— 原样带走。补充的 <code>ask-deepseek</code> 二次审计返回
            HTTP 402（余额不足）、对裁定没有任何贡献。Build proxy：{' '}
            <code>npx --no-install tsc --noEmit</code> 退出 0；完整{' '}
            <code>next build</code> 仍被环境阻塞 —— Node 18.19.1 对 Next
            16.2.6。
            <br /><br />
            <b>审计记录、但本篇不收口的未结事项：</b>回撤规则仍然没有定义
            「站住」要几根 bar，必须在任何后续触发评估之前前瞻性地写死；
            没有任何上游 roster / 调度器 / 账户连续性证据可以裁定 SM 的那些
            断点；<code>weekly_200sma.json</code> 这个正典人造物应当恢复；
            ingestion writer 仍在物理行 65,799 处写出只含 NUL 的记录；谱系
            MFE 台账与有源的到期符号台账都不存在；对齐跨度端点、谱系台账、
            every / all / first / deepest 这类全称主张与时间戳减法的机械化
            预检仍未建。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况
            个性化。数字反映单一原子快照（2026-08-24 00:05Z 盘面锚、已 pin
            到本次 session 存档）、provenance 在上方数据来源条带中按节披露。
            若干输入明确陈旧、缺失、未结或待审、并已如实标注：{' '}
            <b>这是 v2、在 codex 敌对式审计之后晋级 —— 裁定记录在{' '}
            <code>audits/2026-08-24-desk-note.md</code>、2 CRITICAL + 3 MAJOR
            + 4 MINOR 九条 findings 全部就地修正并用全文件 grep 收口、逐条的
            修前 / 修后命中记录在上方审计痕迹里</b>；宏观 Tier-1 面板渲染于
            2026-08-23 22:16Z、但不带任何新的 FRED 数据、因为周末没有发布、
            只有两根 Yahoo 汇率行动了；<code>weekly_200sma.json</code> 缺失、
            所以 200W 状态、165 根已完成周收里 6.06% 的破地板频率与 23.0
            分位的比率都是交易台自己的 parquet 重算，{' '}
            <code>ma200w_trap_watch_state.json</code> 作为锚后佐证披露、
            不是来源；<code>gex_summary.json</code> 本次未读、没有任何一句
            压在它上面；MA 矩阵只在已结算 bar 上算、排除开着的 08-24 日 bar
            与 08-30 周 bar；GEX 文件的 Deribit 指数比 live 现货高 $543.51、
            所以每一个距离数字都按两个参考印；JGB 是月度、陈旧 83 天；NTT
            pivot、max-pain、strike-level IV 与 BTC/NQ 比率均未载入。水位、
            规模与条件是交易台流程的示例、不是长期推荐。过去的相关性、γ 与
            仓位模式不绑定未来盘面。衍生品有全损风险、加杠杆下损失可超过
            保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                结算点着了交易台管不了的那条腿、盘面错过了它管得了的那条 ——
                差 $20.30。一周在 200W 之下、一周回到上面：假破，记录在案。
                funding 还焊在封顶、retail 又挤回来、日线 TD9 只剩一根。
                结构更好了、进场更坏了。空仓，等带子或者盖子。
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
            v2 · 2026-08-24 00:05Z 快照 · 已过 codex 敌对式审计
            （audits/2026-08-24-desk-note.md —— 2 CRITICAL + 3 MAJOR + 4 MINOR、
            全部 RESOLVED 并已 grep 收口）· 源：live_db.json（已 pin）·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
