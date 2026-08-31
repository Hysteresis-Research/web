import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-31 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-31',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-31' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260831() {
  await requireViewer('/zh/desk/2026-08-31');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-31 · v2</span>
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
              <span className="dn-big">$77,792</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.53%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照锚行 2026-08-31 00:05Z · 周报（周一周频规则，
              不是事件规则）
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">发布触发</td>
                  <td className="dn-v-cell">周一周频规则</td>
                  <td className="dn-flag">
                    本篇按<b>周一周频规则</b>发，锚在 2026-08-31 00:00Z 结算的
                    W-SUN 周收上，比快照早五分钟。它<b>不是</b>事件触发：24h
                    −0.53% 对 6% 闸、7d <b>+0.22%</b> 对 12% 闸，10,080 行里{' '}
                    <b>零</b>行负 funding，所以没有符号翻转。两道回报闸走同一条{' '}
                    <b>live 现货</b>口径、端点都在钉住的行上：24h $78,204.40 →
                    $77,792.01 = −0.5273%，7d $77,624.49 → $77,792.01 = +0.2158%
                    → +0.22%；monitor perp 口径会给 +0.23%，本篇不用。上一篇是{' '}
                    <b>2026-08-27</b>；08-28、08-29、08-30 都没触发、也没发，所以
                    本篇每一个「自上一篇以来」的数字跨的是一个
                    <b>四个日历 session、只有两个已归档端点</b>（08-27 与
                    08-31）的区间，周内路径<b>未载入</b>，这里没有任何东西是逐
                    session 核实过的
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">
                    live_db.json · 锚行 <code>t = &ldquo;08-31 08:05&rdquo;</code>（BJ）
                    = 2026-08-31 00:05Z
                  </td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 锚按 BJ 标签钉住，走 UTC+8 那颗地雷的纪律 ·
                    所有窗口都端点在这一行上：24h = 1,441 行到{' '}
                    <code>08-30 08:05</code>；7d = 10,081 个唯一标签（文件带一个
                    重复标签 <code>08-27 14:53</code>，所以 7d 切片是 10,082 行
                    覆盖 10,080 分钟，窗口均值一律用间隔数、绝不用行数）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-31 00:01Z scan</td>
                  <td className="dn-flag">
                    小时级滚动人造物 · <b>从日期归档
                    /opt/desk-note/snapshots/2026-08-31-0006/ 读、不走 live 路径</b>
                    （sha256 c2f9caa4…d99494）· 每个周期的最末 bar 都未收盘 ·
                    scan 头印北京时（08:01）、自带现货 $77,548 与 24h −0.82%，
                    两者都跟钉住的盘面锚 $77,792.01 / −0.53% 对不上，另一套场所
                    与时钟，见第 II 节
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-31 00:01Z（sha256 3420628a…41ff68）</td>
                  <td className="dn-flag">
                    比锚早 4 分钟 · 1,026 合约 · Deribit 指数 $78,196 对 live
                    $77,792.01 · <b>gex_summary.json 已逐字节拷进同一个日期归档</b>
                    （sha256 8e456831…c9aac0），赶在滚动路径下一次按小时覆写之前
                    钉住 net_gex $184,300,674.64 · 31AUG26 在这个锚上{' '}
                    <b>未结算</b>，今天 08:00Z 结算，晚 7h59m
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关 7d</td>
                  <td className="dn-v-cell">cross_asset_correlation_summary.md · 2026-08-31 00:01Z</td>
                  <td className="dn-flag">比锚早 4 分钟 · 7d 1h bar · 22 个资产 · 168 行 · 读的是归档副本</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-30 22:17Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后 1h48m · <b>日频 FRED 行带的是周五 2026-08-28 的收盘</b>，
                    在一个周一的锚上已经陈旧约两个日历日，周末备忘属正常，但这
                    意味着里面没有任何东西反映 08-30 23:47Z 那次冲刷 · NFCI 在
                    源头标陈旧 9d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日线 / 周线 MA 矩阵 + RV</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-08-31 00:05Z 收 $77,709.30</td>
                  <td className="dn-flag">
                    日线与周线序列只用<b>已收盘</b> bar 算：最后完整的日 bar 与
                    最后完整的周 bar 是同一根 2026-08-30 收 $77,634.60；未收盘的
                    08-31 bar 从每一条 MA 与 RV 里排除 · 偏移对 live 现货
                    $77,792.01 重算 · 无前视
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期地板 watch</td>
                  <td className="dn-v-cell">weekly_200sma.json <b>不存在</b> —— 走 parquet 回退</td>
                  <td className="dn-flag">
                    watch 文件连续第四篇缺失 · 下面的地板、比率与分位是一次
                    <b>已披露的 parquet 重算</b>、不是 watch 人造物 ·{' '}
                    <b>本轮没有钉住任何 watch-state 人造物</b>：
                    ma200w_trap_watch_state.json 没有随日期归档一起存下来，滚动
                    副本此后已被覆写，所以这里不对它做任何交叉核对 · 唯一的内部
                    核对是同一套 parquet 方法能从已收盘序列自身重算出 08-23 周的
                    前值 $64,269.62
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月度 · 源头标陈旧 90d · 不作实时方向</td>
                </tr>
                <tr>
                  <td className="dn-s">订单簿 / 成交源 / 持仓对账</td>
                  <td className="dn-v-cell">本次未载入</td>
                  <td className="dn-flag">
                    <b>对本篇是实质性的</b> —— 第 V 节记的是一条交易台指令的
                    <b>模型 / 纸上</b>解决，全部从价格路径推断。本轮不存在委托号、
                    挂单 / 撤单标志、部分成交记录、成交均价、账户归属或成交源，
                    所以订单是否存在、路由、状态、数量与归属全部无法核实，下面
                    每一个 R 数字都继承模型这个标签
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">NTT · max-pain · strike-level IV · BTC/NQ 比率</td>
                  <td className="dn-v-cell">本次未载入</td>
                  <td className="dn-flag">btc_ntt_analysis.html 是 JS 渲染、抓不出来 · 四条主张全部 framework only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">funding · 8h 年化</span>
              <span className="dn-v bull">+7.82%</span>
              <span className="dn-src">live raw 0.007143 × 1095 · 24h 均值 +9.180% ann、区间 +4.473% / +10.950% · <b>离顶</b>：最后一根封顶行 2026-08-30 13:11Z、第一根顶下 13:12Z → 654 行 / <b>653 流逝分钟 = 10h53m</b> = 434 分钟闸的 1.505× · 1,441 行里 0 行负、10,080 行里 0 行负 —— 这道闸为什么退休，见第 I 节</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+9.10% → +7.82% · 封顶占用 527 / 1,441（36.6%）</span>
              <span className="dn-src"><b>分类器只定义一次、全篇通用</b>：封顶 = raw funding 恰好 <b>0.010000</b>（不设容差带）；episode = 同一侧的极大连续分钟段，不合并、不设最短时长；重复标签 <code>08-27 14:53</code> 去重到第一次出现，得到 10,080 个间隔；流逝分钟 = 行数 − 1 · 按这个口径 7d 占用 <b>4,593 / 10,080 = 45.6%</b>，从两周前焊死的 100% 下来 · <b>20 段封顶（19 段起点在窗内）、7 段 ≥ 200 行的顶下段</b>，最长释放 34h55m（08-26 04:00 → 08-27 14:55 BJ）· 五次已完成的释放<b>达到或超过</b> 434 流逝分钟，<b>五次全部重新钉回</b></span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−1.19%（−1,286.3 BTC）→ 106,412.2</span>
              <span className="dn-src">live · 在一个 −0.53% 的 session 里收缩 · 7d <b>+866.3 / +0.82%</b> 净，但周峰 110,024.0 @08-28 05:28Z 在这里上方 <b>−3,611.8 / −3.28%</b>，周谷 104,972.3 @08-27 08:44Z 压在下方 —— 毛开仓、毛平仓与账户级换手在这个 feed 里<b>看不到</b></span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bull">51.95 / 48.05</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · 对 24h 端点 54.29% <b>去拥挤 −2.34pt</b> · 7d +0.26pt（51.69% → 51.95%），周内持平、只有日内下来 · 7d 峰 54.77% @08-29 19:12Z、7d 谷 <b>45.96%</b> @08-25 04:11Z</span>
            </div>
            <div>
              <span className="dn-k">SM 净 BTC</span>
              <span className="dn-v">+26,563.9（净多）</span>
              <span className="dn-src">live · long 35,658.2 − short 9,094.3 · long_traders 4,870 / short_traders 1,420 · 从 08-30 06:41Z 起那段<b>无台阶</b>的 17h24m 窗里 SM <b>削减 −128.5 / −0.48%</b>，同期价格 −0.63% —— 唯一干净的读数</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · 24h</span>
              <span className="dn-v bear">+1,615.3 · <b>不可采信</b></span>
              <span className="dn-src">|Δ| / 前值净 = 1,615.3 / 24,948.6 = <b>6.47%</b> · 但单独 08-30 06:41Z 那一分钟供给 <b>+1,441.3 = |Δnet| 的 89.23%</b>，long_traders 一行里 4,251 → 4,931（+680）、short_traders 1,372 → 1,480 —— 反复出现的名册重同步，上游原因未载入，不指认机制 · 08-27 以 16.34% 可采信，今天重新不可采信</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v bear">42.0% / 42.18% · 价差 <b>−0.18pt</b></span>
              <span className="dn-src">跨 1,026 合约的 GEX 链中位 —— <b>一条链上的中位数、不是可交易价差</b> · RV 收对收、算到已收盘的 08-30 收为止、无前视 · vol risk premium 已<b>转负</b>：从 08-27 锚上的 +3.30pt 到 −0.18pt，其中 IV 供给 89.1%、RV 供给 10.9% · IV 卡片四舍到 0.1pt = ±5 个波动率基点，所以价差落在 −0.13 到 −0.23pt：符号可分辨、量级很小</span>
            </div>
            <div>
              <span className="dn-k">到 0γ 翻转的距离</span>
              <span className="dn-v bull">+17.59%（在上方，现货口径）</span>
              <span className="dn-src">翻转位 $66,152.87，从 08-27 的 $64,581.07 上移 +$1,571.80 · <b>两个参考同号</b>：对 live 现货 $77,792.01 在上方 +17.59%、跌 <b>14.96%</b> 才够到；对文件自带的 Deribit 指数 $78,196 是 +18.21%，也就是卡片印的 +18.2% · 脚算总量 +184.30M，仍是很深的正</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                08-27 备忘的框架这一周把自己写下的事全做到了，盘面照样收平。
              </span>{' '}
              00:05Z 分析锚（是分析锚，不是发布时刻，本轮没有载入任何部署或发布
              记录）之后 8 小时 3 分，盘面交到{' '}
              <span className="dn-tag bull">$79,600 @2026-08-27 08:08Z</span>；
              再过 72 分钟，@09:20Z 拿下{' '}
              <span className="dn-tag bull">$80,000 第一目标</span>；随后一波推到{' '}
              <span className="dn-tag bull">$81,500.00 @2026-08-28 01:33Z</span>，
              一段 <span className="dn-tag">+3.468R 毛</span>的模型远征，然后全部
              吐回去。装下这一切的那根 W-SUN 周 bar 收{' '}
              <span className="dn-tag bear">$77,634.60</span>，对前一周{' '}
              <span className="dn-tag">$77,719.10</span>，周对周{' '}
              <span className="dn-tag bear">−$84.50 / −0.11%</span>，前一周是{' '}
              <span className="dn-tag">+23.61%</span>；这根收平的 bar 里盘面覆盖{' '}
              <span className="dn-tag">$81,500.00 / $76,649.00，6.33% 的区间</span>。
              它赚到的钱算不上重点。规则写在靠近之前，该落袋的那一半落了袋，剩下
              那一半怎么办没写；按它自己文本三种站得住的读法，同一段盘面解成{' '}
              <span className="dn-tag">+0.53R、+0.74R 或 +1.68R 毛</span>，{' '}
              <span className="dn-tag bear">3.18× 的离散</span>。底下的图同时恶化：
              dealer 夹持从{' '}
              <span className="dn-tag">+287.90M 松到 +184.30M 脚算</span>，跨一个
              四 session 的区间，中间三张面板从来没有归档过；08-27 备忘记为已修好
              的现货下方行权价塌了，22 个共同的现货下方行权价{' '}
              <span className="dn-tag bear">+21.485M → −26.608M</span>，{' '}
              <span className="dn-tag bear">$77,000 从 −0.36M 掉到 −10.63M</span>，
              成了板上最大的负墙，就在{' '}
              <span className="dn-tag">现货下方 $792.01</span>。周结算前 12 分钟
              盘面印出{' '}
              <span className="dn-tag bear">$76,947.20 @08-30 23:47Z</span>，按印子
              口径穿过止损位 $301.22（更深的 08-28 低点 $76,853.10 穿了
              $395.32），按止损真正写明的日收口径一次都没穿，随后收回 $687.40。
              funding 本周第六次离顶（按 434 分钟的读法），前五次全部重新钉回。
            </p>

            <h2 className="dn-sec">
              仓位{' '}
              <span className="dn-roman">I</span> · funding 离顶、434 分钟闸退休，
              本周 0-for-5 · SM 又一次在单分钟名册台阶上不可采信 · OI 在下跌
              session 里收缩 · 散户周内持平、日内下来
            </h2>
            <p>
              funding 锚上 <span className="dn-tag bull">+7.8216% ann</span>（raw
              0.007143 × 1095），24h 均值{' '}
              <span className="dn-tag">+9.180%</span>，区间{' '}
              <span className="dn-tag">+4.473% / +10.950%</span>。定义了 08-21 到
              08-24 那段的 +10.95% 焊死已经没了。分类器只定义一次，
              全篇通用：<b>封顶 = raw funding 恰好 0.010000</b>，不设容差带；
              episode = 同一侧的极大连续分钟段，不合并、不设最短时长；重复标签{' '}
              <code>08-27 14:53</code> 去重到第一次出现，得到 10,080 个间隔；
              流逝分钟 = 行数 − 1。日内封顶占用{' '}
              <span className="dn-tag">527 / 1,441 行（36.6%）</span>，周内{' '}
              <span className="dn-tag">4,593 / 10,080 = 45.6%</span>。较松的{' '}
              <code>≥ 0.00999</code> 分类器会印成 4,617 / 45.8%，本篇<b>不用</b>
              这个口径，下面每一个占用率、段数与释放时长都按恰好封顶的口径走。
              两个窗口都没有一行为负，所以没有符号翻转，这一侧不触发事件。
            </p>
            <p>
              <span className="dn-signal">
                去拥挤闸必须退休，理由是算术，轮不到判断说话。
              </span>{' '}
              08-26 备忘把闸重新规格化在{' '}
              <span className="dn-tag">434 流逝分钟</span>，取的是当时那次已完成
              释放的长度。本周盘面跑了{' '}
              <span className="dn-tag">20 段封顶（其中 19 段起点在窗内），外加 7
              段 ≥ 200 行的顶下段</span>。五次已完成的释放<b>达到或超过</b> 434
              流逝分钟，第一次正好是 434，所以用「达到或超过」不用「超过」：{' '}
              <span className="dn-tag">434m、2,095m、437m、626m、471m</span>，{' '}
              <span className="dn-tag bear">五次全部重新钉回封顶</span>。当前这次
              是第六次：最后一根封顶行{' '}
              <span className="dn-tag">2026-08-30 13:11Z</span>，第一根顶下行{' '}
              <span className="dn-tag">13:12Z</span>，654 行 /{' '}
              <span className="dn-tag">653 流逝分钟 = 10h53m</span> = 闸的 1.505×。
              七天里被穿五次、又被反转五次的门槛算不上 regime 标记，只是一个间歇
              序列的采样人造物；08-27 备忘那句「离顶 28h06m = 闸的 3.88×」描述的
              是一次长跑，给不了 regime 的证据。这条记为<b>新的开放设计缺陷</b>，
              第六节里这道闸不再 gate 任何东西。
            </p>
            <p>
              <span className="dn-signal">SM 盘面又一次不可采信。</span>净读{' '}
              <span className="dn-tag">+26,563.9 BTC</span>（long 35,658.2 −
              short 9,094.3），对 24h 端点的{' '}
              <span className="dn-tag">+24,948.6</span>，Δ{' '}
              <span className="dn-tag">+1,615.3</span>，削减比例{' '}
              <span className="dn-tag">1,615.3 / 24,948.6 = 6.47%</span>。单独一
              分钟 <span className="dn-tag bear">2026-08-30 06:41Z</span> 供给{' '}
              <span className="dn-tag bear">+1,441.3，吃掉 |Δnet| 的 89.23%</span>，
              long_traders 一行里从{' '}
              <span className="dn-tag">4,251 跳到 4,931</span>，short_traders 从{' '}
              <span className="dn-tag">1,372 跳到 1,480</span>。这跟 08-23、
              08-24、08-25、08-26 那几次断点同形，落在同一条 06:21Z–07:06Z 带里；
              上游原因<b>未载入</b>，本篇不指认任何机制。08-27 备忘以 16.34% 的
              集中度把这条盘面判为可采信，一个干净的 session 证明不了这个 feed
              可靠，今天这一行就是证据。唯一诚实的读法是那段{' '}
              <span className="dn-tag">无台阶的 17h24m 窗</span>：从那一分钟到锚，
              SM <span className="dn-tag bear">削减 −128.5 / −0.48%</span>，同期
              价格跌 −0.63%，量很小，而且顺着盘面走、没有对着盘面走。
            </p>
            <p>
              OI 收在 <span className="dn-tag">106,412.2 BTC</span>，日内{' '}
              <span className="dn-tag bull">−1,286.3 / −1.19%</span> 进一个 −0.53%
              的 session，周内 <span className="dn-tag">+866.3 / +0.82%</span>。
              周内净值低估了路径：OI 峰{' '}
              <span className="dn-tag">110,024.0 @08-28 05:28Z</span>，悬在
              $81,500 高点之后四个小时，从峰上流掉{' '}
              <span className="dn-tag">−3,611.8 / −3.28%</span>；周内谷{' '}
              <span className="dn-tag">104,972.3 @08-27 08:44Z</span> 反而压在
              收尾下方。毛开仓、毛平仓与账户级换手在这个 feed 里看不到，一次
              去杠杆被替换杠杆抵消掉，印出来一模一样。散户{' '}
              <span className="dn-tag">51.95%</span>：对 24h 端点 54.29% 去拥挤{' '}
              <span className="dn-tag bull">−2.34pt</span>，对周内 51.69% 却是{' '}
              <span className="dn-tag">+0.26pt</span>，周内持平，只有日内下来。
              7d 峰 <span className="dn-tag">54.77% @08-29 19:12Z</span>，谷{' '}
              <span className="dn-tag">45.96% @08-25 04:11Z</span>，这一轮最低的
              读数。日内现货 CVD <span className="dn-tag bear">−547.2</span>、
              期货 CVD <span className="dn-tag bear">−1,554.9</span>，对着 big_net
              合计 <span className="dn-tag">+87.18 across 570 笔</span>，总量流在
              卖，大单印子在温和买。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II</span> · MTF 序列里第一次印出 SHORT ·
              六条顶背离堆在 15m–12h · 周收失守 W-SMA150 差 $148.26、而现货又爬回
              它上方 $9.15 · MA 矩阵 17-of-20，从 18 下来 · 1d TD9 SELL 已重置
            </h2>
            <p>
              现货 <span className="dn-tag">$77,792.01</span>，精确 1,441 行窗上{' '}
              <span className="dn-tag bear">−0.5273%</span>，坐在 24h 区间的{' '}
              <span className="dn-tag">27.83%</span> 位置。交易所 bar 口径 24h 高{' '}
              <span className="dn-tag">$79,384.40 @2026-08-30 16:57Z</span>、低{' '}
              <span className="dn-tag">$76,947.20 @23:47Z</span>；monitor 盘面给{' '}
              <span className="dn-tag">$79,346.00 @16:58Z</span> 与{' '}
              <span className="dn-tag">$77,192.77 @23:48Z</span>，两个口径差一
              分钟也差场所，都印出来。MTF scan 头自带第三对：现货 $77,548、24h
              −0.82%，另一套时钟与场所，不跟锚撮合。
            </p>
            <p>
              <span className="dn-signal">
                MTF 总读数在这个序列里第一次印出一个空。
              </span>{' '}
              文件头读 <span className="dn-tag">5 long / 1 short / 4 neutral</span>{' '}
              跨十个周期；按 per-TF bias 列求和是{' '}
              <span className="dn-tag">3 长 / 1 空 / 4 警示 / 2 震荡</span>。两种
              口径都印出来，都得到<b>恰好一个空，就是 15m</b>。这之所以要紧，是
              因为 08-23（6/0/4）、08-24（8/0/2）、08-25（9/0/1）与 08-27
              （8/0/2）两种数法全是<em>零空</em>。净读法是{' '}
              <span className="dn-tag">高周期多、短周期回踩</span>，带一条明确的{' '}
              <span className="dn-tag bear">8h/12h 高周期顶背离簇</span>警示旗。
              六条顶背离在跑：{' '}
              <span className="dn-tag bear">15m / 30m / 1h / 4h / 8h / 12h</span>，
              对着 30m/1h/4h 三条底背离。一条{' '}
              <span className="dn-tag bear">1h 水上死叉</span>两根 bar 前印出，
              收在 $77,562、DIF +158.6；动量 regime 稳在{' '}
              <span className="dn-tag">7 of 9 TFs JT ≥ 0</span>。反过来看，短端
              洗得很干净并在转：RSI 在 15m/30m/1h 读{' '}
              <span className="dn-tag">27.6 / 26.1 / 34.0</span>，一个{' '}
              <span className="dn-tag bull">30m TD9 BUY</span> 已在 $77,562 印出，
              15m 差一根。<span className="dn-tag bull">08-25 与 08-27 一直立着
              的那条 1d TD9 SELL 反对意见已经重置</span>，日线现在带 Buy-4
              setup，3d Sell-5、1w Sell-3、1M Sell-1。
            </p>
            <p>
              完整矩阵：日线与周线 × SMA 与 EMA × n ∈ {'{'}20, 50, 100, 150,
              200{'}'}，只用已收盘 bar 算。最后完整的日 bar 与最后完整的周 bar
              是同一根印子，2026-08-30 收 $77,634.60，偏移对 live 现货
              $77,792.01。<b>日线 10-of-10 在上方</b>：SMA20 $71,717.29
              (+8.47%)、SMA50 $67,294.85 (+15.60%)、SMA100 $66,233.09
              (+17.45%)、SMA150 $69,606.96 (+11.76%)、SMA200 $69,366.34
              (+12.15%)、EMA20 $73,537.33 (+5.79%)、EMA50 $69,316.75
              (+12.23%)、EMA100 $68,674.04 (+13.28%)、EMA150 $70,123.63
              (+10.94%)、EMA200 $72,171.00 (+7.79%)。<b>周线 7-of-10</b>：SMA20
              $69,855.74 (+11.36%)、SMA50 $81,033.20 <b>(−4.00%)</b>、SMA100
              $88,961.88 <b>(−12.56%)</b>、SMA150 $77,782.86 (+0.01%)、SMA200
              $64,554.72 (+20.51%)、EMA20 $70,084.86 (+11.00%)、EMA50
              $77,263.56 (+0.68%)、EMA100 $78,430.85 <b>(−0.81%)</b>、EMA150
              $73,934.18 (+5.22%)、EMA200 $68,699.44 (+13.24%)。合计{' '}
              <span className="dn-tag">17 of 20 格为正</span>，从 08-25 备忘记下
              的 18-of-20 下来；翻回去的那一格是{' '}
              <span className="dn-tag bear">W-EMA100</span>，正是 08-24 日收
              清掉它、触发 08-25 处置规则的那个位，这次清掉的成果交回去了。
            </p>
            <p>
              <span className="dn-signal">
                周结算失守 W-SMA150，而现货又爬回它上方九块钱。
              </span>{' '}
              这是一条刀口，要么两个口径一起说，要么别说。W-SUN 收{' '}
              <span className="dn-tag">$77,634.60</span> 在 W-SMA150 $77,782.86{' '}
              <span className="dn-tag bear">下方 $148.26</span>（−0.19%）；live
              现货 <span className="dn-tag">$77,792.01</span> 在它{' '}
              <span className="dn-tag bull">上方 $9.15</span>（+0.0118%）。五分钟
              盘面隔开这两个读数，符号相反。$9.15 的边际上不该建任何东西，本篇
              也没建。上方一层三重的盖，够到都不贵：D-EMA400{' '}
              <span className="dn-tag">$78,241.52（−0.57%）</span>、W-EMA100{' '}
              <span className="dn-tag">$78,430.85（−0.81%）</span>，然后一段空档
              到 W-SMA50 <span className="dn-tag">$81,033.20（−4.00%）</span>。
            </p>
            <p>
              <span className="dn-signal">周期地板，走 parquet 回退。</span>{' '}
              weekly_200sma.json 连续第四篇缺失，所以这是一次重算并被标为重算。
              W-SMA200 稳在 <span className="dn-tag">$64,554.72</span>，每周推进{' '}
              <span className="dn-tag">+$285.10</span>，从 08-23 周的 $64,269.62
              来；这个前值由同一条已收盘 parquet 序列重算得到，是唯一能做的内部
              核对，因为本轮没有把任何 watch-state 文件归档进来、滚动副本此后
              已被覆写，本篇不对任何服务器文件做主张。已收盘比率{' '}
              <span className="dn-tag">1.202617</span>；现货在地板上方{' '}
              <span className="dn-tag">+20.51%</span>，要跌{' '}
              <span className="dn-tag">17.02%</span> 才够到。分位按各自口径分开
              印，因为分母不同：{' '}
              <span className="dn-tag">37 / 166 个已收盘周比率严格更低 =
              22.3%</span>（只对先前观测算是 37/165 = 22.4%），插入名次是{' '}
              <span className="dn-tag">38 / 166 = 22.9 分位</span>，166 这个计数
              已经含了当前那一个，所以当前只插一次、不插两次。{' '}
              <span className="dn-tag">10 / 166 = 6.0%</span> 的周收曾经结在地板
              下方。08-30 那根收是{' '}
              <span className="dn-tag bull">连续第二个收在地板上方的周收</span>，
              连跑起于 2026-08-23。
            </p>

            <h2 className="dn-sec">
              dealer 图{' '}
              <span className="dn-roman">III</span> · 夹持松了 −103.60M 到脚算
              +184.30M，跨一个四 session、只有两个已归档端点的区间 —— 自 08-19
              面板以来最低，不是谱系最低 · 08-27 备忘称作已修好的现货下方地板
              翻了过去 · $77,000 成了最大负墙、压在现货下方 $792.01 · 前端条为负
            </h2>
            <p>
              三个口径都不相等，三个都印：<b>脚算的按到期条</b>{' '}
              <span className="dn-tag">+184.3007M</span>，与钉住的{' '}
              <code>net_gex $184,300,674.64</code> 对到分；<b>1D 行权价剖面</b>
              求和 <span className="dn-tag">+179.4597M</span>；<b>卡片头条</b>{' '}
              <span className="dn-tag">+171.1M</span>。脚算比剖面高{' '}
              <span className="dn-tag">+$4.8410M</span>、比头条高{' '}
              <span className="dn-tag">+$13.2007M</span>，两个差额不等距；全篇
              用脚算口径做谱系可比。
            </p>
            <p>
              <span className="dn-signal">
                夹持松得很实，但序数比数字看起来窄。
              </span>{' '}
              脚算上从 <span className="dn-tag">+287.8980M（08-27）走到
              +184.3007M</span>，变化 <span className="dn-tag bear">−103.5973M</span>。
              这是一个<b>跨四个 session 的区间变化，单 session 一步讲不通</b>：
              08-28、08-29、08-30 没有备忘也没有归档，周内路径<b>未载入</b>，
              本篇不对它怎么走到这里做任何主张。水位上这是{' '}
              <b>自 08-19 面板以来最低</b>，并且<b>不是谱系最低</b>：已归档的
              8 月台账里 08-17 <b>+28.06M</b>、08-18 <b>+128.85M</b>、08-19{' '}
              <b>+128.94M</b> 在它下方，对着 08-20 +254.15M、08-22 +249.91M、
              08-23 +242.37M、08-24 +247.69M、08-25 +256.84M、08-26 +252.35M、
              08-27 +287.90M 在它上方，一共<b>十张先前的对照面板</b>（三张在下、
              七张在上），整条谱系还说不上。
            </p>
            <p>
              <span className="dn-signal">
                市场下方那层地板没有守住，它翻了过去，而 08-27 备忘说的正好相反。
              </span>{' '}
              那篇把止损底下那些行权价记为<em>已修好</em>，并称 R/R「算在一个比
              设立时守得更好的地板上」。这张面板上这句话已经不成立，本篇不为它
              辩护，直接撤回。两张剖面各带 49 个点，两组 49 并不相同：73,500 与
              102,000 掉出去，59,000 与 93,000 进来，所以下面每一项比较都限定在{' '}
              <b>47 个共同行权价</b>上。现货下方 22 个共同行权价{' '}
              <span className="dn-tag bear">+21.485M → −26.608M，一次 −48.093M
              的位移，22 个里 19 个更轻</span>。点名：{' '}
              <span className="dn-tag bear">$77,000 −0.3640M → −10.6281M</span>
              （现在是板上最大的负墙，坐在{' '}
              <span className="dn-tag">现货下方 $792.01</span>）、{' '}
              <span className="dn-tag bear">$77,500 −1.1818M → −6.1786M</span>、{' '}
              <span className="dn-tag bear">$75,000 +3.7781M → −8.1110M</span> 与{' '}
              <span className="dn-tag bear">$73,000 +1.5349M → −4.1417M</span>，
              后两个直接翻符号。<b>回踩多头挂靠的 $78,000 台阶掉了一半还多</b>，{' '}
              <span className="dn-tag bear">+29.7154M → +13.0045M</span>。现货
              上方的图更软，但并非镜像：25 个共同行权价{' '}
              <span className="dn-tag">+259.019M → +206.099M（−52.921M）</span>，{' '}
              <b>11 个更重 / 14 个更轻</b>，所以这是一个总量说法，普适说法给不了
              —— $82,000 加了 <span className="dn-tag bull">+5.5600M</span> 成为
              新的头号墙，$84,000 加了 +1.7019M，同时 $80,000 掉了 −19.2456M、
              $79,000 掉了 −15.1869M。
            </p>
            <p>
              前十现在脚算{' '}
              <span className="dn-tag">+151.4736M = 剖面的 84.41%</span>，而且
              这个序列里第一次<b>有两个是负的</b>：$82,000 +46.60M、$80,000
              +32.82M、$85,000 +26.80M、$84,000 +16.79M、$90,000 +16.67M、
              $78,000 +13.00M、<b>$77,000 −10.63M</b>、$100,000 +9.04M、$81,000
              +8.49M、<b>$75,000 −8.11M</b>。08-27 那天十个全为正。整张剖面上
              30 个行权价合计 +224.999M，对着 19 个合计 −45.540M。0γ 翻转位从
              $64,581.07 抬到 <span className="dn-tag">$66,152.87</span>，两个
              参考同号：对 live 现货 $77,792.01，现货在上方{' '}
              <span className="dn-tag">+17.59%</span>，要跌{' '}
              <span className="dn-tag">14.96%</span> 才够到；对文件自带的
              Deribit 指数 $78,196 是{' '}
              <span className="dn-tag">+18.21%</span>，也就是卡片印的 +18.2%。
            </p>
            <p>
              <span className="dn-signal">前端条为负，这档事以前有过。</span>{' '}
              <span className="dn-tag bear">31AUG26 在 0.3 DTE 读 −12.28M</span>，{' '}
              <span className="dn-tag bear">1SEP26 在 1.3 DTE 读 −4.53M</span>，
              前四条脚算 <span className="dn-tag bear">−16.68M</span>，对着 08-27
              那天单独一条为正的 +14.14M 前端。同一份档案里已经出现过两次连续
              负前端：08-01 面板上的 1AUG/2AUG 是 −5.20M/−3.40M，08-11 面板上的
              11AUG/12AUG 是 −11.62M/−2.83M，所以<em>形态</em>不新。新的是深度：{' '}
              <b>−12.28M 是全部 27 张已归档 8 月面板里最负的前端</b>，比 08-11
              的 −11.62M 深 0.66M。31AUG26 在这个锚上<b>未结算</b>，今天 08:00Z
              结算，比快照晚 7h59m，是一个会在本 session 内清掉的短久期负 γ
              口袋。它后面这条 strip 由{' '}
              <span className="dn-tag">25SEP26 +99.19M = 脚算总量的 53.8%</span>{' '}
              在 25.3 DTE 扛着，然后 25DEC26 +35.87M 与 4SEP26 +30.42M；这些是
              当前 IV 下的快照，没人保证会滚掉。Call OI 253,212 对 put OI
              143,395，put/call <span className="dn-tag">0.57</span>，从 0.59
              下来。
            </p>
            <p>
              链中位 IV 掉到{' '}
              <span className="dn-tag">42.0% 跨 1,026 合约</span>（一条链上的
              中位数，谈不上可交易价差），对着 30D 收对收 RV{' '}
              <span className="dn-tag">42.1772%</span>，RV 算到已收盘的 08-30 收
              为止。<span className="dn-signal">vol risk premium 转负。</span>{' '}
              在对齐的 as-of 时刻、无前视，08-27 锚上是 IV 45.1% 对 RV 41.7978%
              = <span className="dn-tag">+3.3022pt</span>，今天价差{' '}
              <span className="dn-tag bear">−0.1772pt</span>，一次 −3.4794pt 的
              压缩，其中 <b>IV 供给 89.1%</b>（−3.10pt）、RV 供给 10.9%
              （+0.3794pt）。IV 卡片只到一位小数，带 ±5 个波动率基点，真实价差
              落在 −0.13 到 −0.23pt 之间；<em>符号</em>在这个精度上可分辨，量级
              小到应该读成「implied 收敛到了 realized」，一个很肥的 short-vol
              信号谈不上。
            </p>

            <h2 className="dn-sec">
              宏观与跨资产{' '}
              <span className="dn-roman">IV</span> · 利率那一段 episode 完全解开，
              现在是一个新的 episodic 旗加一个带过来的 episodic 旗，方向相反 ·
              美元 regime 翻成 TIGHT · BTC 对股指的差从 13.86pt 塌到 0.20pt，
              因为那根垂直的一周滚出了窗口
            </h2>
            <p>
              面板渲染在 2026-08-30 22:17Z，日频 FRED 行带的是周五 2026-08-28
              的收盘，所以里面没有任何东西看见 08-30 23:47Z 那次冲刷。Tier 1：
              10Y nominal{' '}
              <span className="dn-tag">4.67%、+1.0bp、regime z +1.78、episodic
              +0.00</span>，08-25 那次尖峰（z +2.19、episodic）已经{' '}
              <b>彻底松开</b>，+1.78 是板上最高的<em>新鲜日频</em> Tier-1
              regime z。TIPS real{' '}
              <span className="dn-tag">2.34%、0.0bp、z +1.68</span>，episodic
              分量从 −1.91 收敛到 −1.44，已经<b>退出 episodic</b>。5Y5Y
              breakeven 2.32%、−3.0bp、z +1.46。两条利率行在 regime 上仍归
              RISK-OFF，但都不再 episodic。
            </p>
            <p>
              <span className="dn-signal">
                一个新的 episodic 旗，加一个带过来的 episodic 旗，两者方向相反。
              </span>{' '}
              <b>只有 HY 是新的。</b>HY credit spread 压到{' '}
              <span className="dn-tag bull">2.63%、−4.0bp、z −1.44、episodic
              −1.77</span>，<b>新转 episodic</b> 且 RISK-ON，对着 08-27 的非
              episodic −0.71。Fed net liquidity{' '}
              <span className="dn-tag bear">$5.779T、−0.012T、z −1.23、episodic
              −2.47</span>，这条是<b>带过来的、不新</b>：它在 08-27 那张日期
              面板上已经是 episodic −2.45，仍在抽水、仍 episodic、RISK-OFF。
              信用在放松，Fed 的资产负债表同时在抽水，两条各自陈述，不揉成一个
              regime 词。美元 regime <b>翻了</b>：DXY{' '}
              <span className="dn-tag">98.90 → 99.70（+0.80），z −0.09 →
              +0.60</span>，从 <em>neutral</em> 重分类为 <b>tight</b>；USD/JPY
              推穿 160 到 <span className="dn-tag">160.12（+0.91）</span>。NFCI
              稳在 −0.566（RISK-ON，源头标陈旧 9d），MOVE 69.9 neutral，
              USD/CNY 6.7208 自己也退出了 episodic。JGB 10Y 读 2.67%、z +2.42
              EXTREME RISK-OFF，那是<b>陈旧月度、源头标 90d，不靠它</b>。
            </p>
            <p>
              相关性 regime 停在{' '}
              <span className="dn-tag">IDIOSYNCRATIC，off-diagonal 平均 |r|
              0.204</span>，从 08-27 备忘的 0.182 松开，仍远低于 0.25 门槛。{' '}
              <span className="dn-signal">变的是排序：股票块爬回了金属块上方。</span>{' '}
              BTC 现在排 <span className="dn-tag">TSLA +0.450、NQ +0.405、SP500
              +0.383</span>，三个全压在{' '}
              <span className="dn-tag">GOLD +0.357</span> 上方，后面跟 NVDA
              +0.346、SILVER +0.329、PLAT +0.323、JP225 +0.319。这一轮之前几篇
              记的是反过来的，金属压过股指，现在掉头了。这只是{' '}
              <b>共动，既不指认驱动方也不说明对冲有效性</b>，BTC/NQ 比率序列
              未载入。最要紧的是超额收益差没了：7d 窗上 BTC 回报{' '}
              <span className="dn-tag">−0.21%</span>，NQ{' '}
              <span className="dn-tag">−0.41%</span>，价差只剩{' '}
              <span className="dn-tag">0.20pt</span>，08-27 备忘带的是 13.86pt、
              08-24 备忘是 26.09pt。什么都没有收敛，只是那根 +23.61% 的周滚出了
              尾随窗口。
            </p>

            <h2 className="dn-sec">
              本子{' '}
              <span className="dn-roman">V</span> · 模型多头已解决 —— $79,600
              分批与 $80,000 目标分别在 08-27 备忘 00:05Z <b>分析锚</b>之后
              8h03m 与 9h15m 被交到，不是发布之后（本轮没有载入部署记录）·
              全程 MODELED / PAPER、没有券商源 · 框架仍然没写剩下那一半怎么走，
              同一段盘面解成三个答案、3.18× 离散
            </h2>
            <p>
              08-27 备忘那笔<b>模型 / 纸上</b>的 0.2R 多头解决了。指令限价{' '}
              <span className="dn-tag">$78,200</span>，止损{' '}
              <span className="dn-tag">日收 &lt; $77,248.42</span>、对应{' '}
              <span className="dn-tag">$951.58 的风险</span>，第一目标{' '}
              <span className="dn-tag">$80,000</span> 然后 W-SMA50，写下的那一刻
              加了条新规则：<em>「$79,600 减一半，剩下的移到保本
              $78,200」</em>。这条规则写在<b>靠近之前</b>，在那篇备忘{' '}
              <span className="dn-tag">00:05Z 分析锚之后 8 小时 3 分</span>被
              测试。本节每一个流逝时间都从那个分析锚起算，那是规则写作时对齐的
              时戳，<b>不是</b>发布或部署时刻。本轮没有载入任何部署记录、可用性
              日志或发布时戳，08-27 那篇的文件时间与提交时间都<em>晚于</em>
              00:05Z，所以这个锚不能读成公开可得的时刻。
            </p>
            <p>
              <span className="dn-signal">路径，按交易所 bar 口径。</span>{' '}
              $79,600 第一次交到在{' '}
              <span className="dn-tag bull">2026-08-27 08:08Z bar（bar 高
              $79,653.40）</span>，72 分钟后{' '}
              <span className="dn-tag bull">$80,000 在 09:20Z bar（bar 高
              $80,096.00）</span>，两个写下的价位都被交到。这一波延伸到{' '}
              <span className="dn-tag bull">$81,500.00 @2026-08-28 01:33Z</span>
              ，<span className="dn-tag">+$3,300.00 = +3.4679R 毛</span>，整仓
              一路扛到那一 tick 就是 0.2R 规模下的 +0.6936R，但没有任何规则这样
              指令过。随后盘面掉头：保本 $78,200 在{' '}
              <span className="dn-tag bear">2026-08-28 16:01Z</span> 被重新触到，
              止损那个<em>价位</em> $77,248.42 在 23 分钟后被穿，最深印子{' '}
              <span className="dn-tag bear">$76,853.10 @16:25Z</span>，在它{' '}
              <span className="dn-tag">下方 $395.32</span>。08-28 16:24Z 到
              08-30 23:49Z 之间有 11 根一分钟 bar 印在那个价位或更低。
            </p>
            <p>
              <b>止损没有触发。</b>它写在日收口径上，而每一根日收都清掉了它：
              08-27 $80,208.90（+$2,960.48）、08-28 $77,805.90（+$557.48）、
              08-29 $78,200.70（+$952.28）、08-30 $77,634.60（+$386.18）。价格
              口径救了这个仓位，这是关于口径的事实，给不了那个价位任何背书；
              一个触碰口径的止损会把它拿走。两个印子值得记进台账：{' '}
              <span className="dn-tag">08-29 日收 $78,200.70 清过保本
              $0.70</span>；{' '}
              <span className="dn-tag bear">周结算前 12 分钟盘面印出 $76,947.20
              @08-30 23:47Z</span>，在止损位下方 $301.22，然后收回 $687.40，以
              $77,634.60 收掉这一周，最后一小时区间 $78,429.10 / $76,947.20 =
              $1,481.90。
            </p>
            <p>
              <span className="dn-signal">
                缺陷只关了一半，而 08-27 备忘以为自己把它关上了。
              </span>{' '}
              那篇宣布分批规则关掉了「进场与目标之间没有指令」这个缺陷。实际
              规则只定死了第一个半仓与止损位置，从没说剩下那一半靠什么出场，
              也从没给保本移仓一个价格口径，正是交易台在 08-25 / 08-26 记为
              缺陷 (b) 并宣布已关的那个遗漏。三种读法都站得住，而且互不一致：
            </p>
            <div className="dn-lvls">
              <div>
                <span className="dn-lvl-k">(A) 保本移仓按<b>触碰</b>口径读</span>
                <span className="dn-lvl-v">$79,600 减半（+$1,400）加剩下的在 $78,200 打平、08-28 16:01Z 出场 = <b>+0.7356R 毛</b> = 0.2R 规模下 +0.1471R</span>
              </div>
              <div>
                <span className="dn-lvl-k">(B) 保本移仓继承止损的<b>日收</b>口径</span>
                <span className="dn-lvl-v bear">$79,600 减半加剩下的在 08-28 收 $77,805.90 出场（−$394.10）= <b>+0.5285R 毛</b> = 0.2R 规模下 +0.1057R</span>
              </div>
              <div>
                <span className="dn-lvl-k">(C) 采纳 —— 剩下的按仍然挂着的第一目标走</span>
                <span className="dn-lvl-v bull">$79,600 减半加剩下的在 $80,000（+$1,800）、2026-08-27 09:20Z 出场 = <b>+1.6814R 毛</b> = 0.2R 规模下 +0.3363R</span>
              </div>
              <div>
                <span className="dn-lvl-k">三种之间的离散</span>
                <span className="dn-lvl-v bear">+0.53R 到 +1.68R 毛、同一段盘面 = <b>3.18×</b> —— 这才是发现，P&amp;L 排在后面</span>
              </div>
            </div>
            <p>
              <b>采纳 (C)</b>，理由很窄：$80,000 第一目标是一条仍然挂着的书面
              指令，分批规则从未取消它，那条规则处理的是一个半仓和一个止损，
              目标的取消不在里面。按采纳的读法，模型仓位在{' '}
              <b>2026-08-27 09:20Z 就已经 FLAT</b>，两天后那个 +3.468R 的峰从来
              不属于交易台。(A) 与 (B) 照印不压，文本确实支持它们，一篇只发自己
              歧义里好看那一支的备忘算不上记录。上面每一个数字都是{' '}
              <b>MODELED 且未对账</b>，全部按指令的 $78,200 算，因为没有成交
              均价；本轮从未载入任何订单簿、委托号、挂单 / 撤单标志、部分成交
              记录或成交源。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多头 · 回踩 · <b>模型 / 纸上 · 已解决并平掉</b> · 0.2R · 未对账 · 两个写下的价位都被交到；没有载入任何券商确认、订单状态或持仓对账 · 按采纳的读法本子回到 FLAT</span>
              <div className="dn-trade-name">
                回踩多头 —— $79,600 分批与 $80,000 第一目标都在 08-27 备忘 00:05Z 分析锚之后 9h15m 之内被交到（不是发布之后，本轮没有载入部署记录），模型本子收在 +1.6814R 毛
              </div>
              <div className="dn-thesis">
                08-27 备忘写下那条分批规则，正是因为它的缺席「把一次 +0.986R
                的模型远征换成了零」，并坚持这条规则只对下一次靠近生效、不
                回溯。这个条件被守住了：规则对齐在 00:05Z 锚上写下，盘面到
                08:08Z 才够到 $79,600，那是一段锚到触碰的距离，不是发布到触碰
                的距离，因为本轮不存在发布时戳。方法在它写明的那一半上完全
                照设计跑通了，在它没写的那一半上失手：剩下的仓位有一个带口径
                的止损、一条没有口径的移仓，以及一个可能被移仓取代也可能没有
                的目标。按采纳的读法本子是平的，这一周的模型结果是{' '}
                <b>+1.6814R 毛 / 0.2R 规模下 +0.3363R</b>；按最保守且站得住的
                读法是 +0.5285R 毛。交易台没有事后挑一支的权利，所以那条规则
                需要的是靠近之前就写好的剩余条款，不是靠近之后的这一段话。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态（交易台指令 · 模型、非券商核实）</span><span className="dn-lvl-v">模型 / 纸上 · 按采纳的读法于 2026-08-27 09:20Z <b>平掉</b> · 本次没有载入任何订单簿、委托号、挂单 / 撤单标志、部分成交记录、成交均价、账户归属或成交源 —— 盘面穿过两个写下的价位证明的是可成交性，它对订单是否存在、路由、状态、数量与归属什么都没证明</span></div>
                <div><span className="dn-lvl-k">可成交性证据（不是执行证据）</span><span className="dn-lvl-v">08-27 00:05Z → 08-31 00:05Z 窗内有 1,320 根交易所一分钟 bar 在 $79,600 或以上、677 根在 $80,000 或以上 · 第一次触碰 $79,600 @08-27 08:08Z（bar 高 $79,653.40）、$80,000 @09:20Z（bar 高 $80,096.00）· 窗高 $81,500.00 @08-28 01:33Z · 每一条都是价格路径事实</span></div>
                <div><span className="dn-lvl-k">止损（未触发 · 依赖口径）</span><span className="dn-lvl-v bear">日收 &lt; $77,248.42 —— <b>在它写明的口径上从未触发</b>，最低的合格日收 08-30 $77,634.60 高出 $386.18 · 但按<b>印子口径被穿</b>：11 根 bar 在它或它之下，最深 $76,853.10 @08-28 16:25Z 在下方 $395.32，周结算前 12 分钟又一次 $76,947.20 @08-30 23:47Z</span></div>
                <div><span className="dn-lvl-k">模型远征</span><span className="dn-lvl-v">MFE $81,500.00 @08-28 01:33Z = +$3,300.00 = <b>+3.4679R 毛</b>（拿不到 —— 没有任何规则把仓位扛在那里）· 锚后 MAE $76,853.10 @08-28 16:25Z = −$1,346.90 = −1.4154R 毛 · 采纳的已实现 <b>+1.6814R 毛 / 0.2R 规模下 +0.3363R</b> · 全部按指令的 $78,200 算，因为没有成交均价</span></div>
                <div><span className="dn-lvl-k">会动的 MA 目标（缺陷 (d) —— 无实义、未关）</span><span className="dn-lvl-v">第二目标是 W-SMA50，08-25 报 $81,784.71、08-26 报 $81,049.16、08-27 报 $81,058.11，今天重算 <b>$81,033.20</b>。仓位在固定的第一目标上就解决了、还轮不到它，所以这条缺陷<b>对这笔交易无实义、作为方法缺陷仍然开着</b> —— 它没有被修好，它是被跑过去了</span></div>
                <div><span className="dn-lvl-k">旧进场底下的 γ 台阶（08-27 watch · 以不利方向解决）</span><span className="dn-lvl-v bear">$78,000 +29.7154M → <b>+13.0045M</b> · $77,500 −1.1818M → <b>−6.1786M</b> · $77,000 −0.3640M → <b>−10.6281M</b> · $75,000 +3.7781M → <b>−8.1110M</b>。08-27 备忘把这一带记为已修好、并称 R/R「算在一个比设立时守得更好的地板上」。<b>那个读数现在是错的，直接撤回、不作辩护</b></span></div>
                <div><span className="dn-lvl-k">不要做</span><span className="dn-lvl-v">不要因为框架赚了钱就重新进场；不要把那个没人拿到的 +3.468R 峰当作加规模的理由；不要把 −103.60M 的夹持松动单独读成做空信号 —— 那是一个跨四个未归档 session 的 dealer 本子事实，不是仓位输入</span></div>
              </div>
            </div>
            <p>
              <span className="dn-signal">
                台账 · 差一点 / 处置记录 · 加入第六个事件，也是第一次以模型平仓
                收尾。
              </span>{' '}
              08-27 备忘把这个台账收在{' '}
              <span className="dn-tag">5 个事件 / 3 次差一点 / 1 次处置 / 1 笔
              模型成交</span>。今天追加第 6 行，它上面的什么都不改：第 1–5 行是
              有日期的历史，不重新分类，这正是台账存在的纪律。现在的计数是{' '}
              <span className="dn-tag">6 个事件 / 3 次差一点 / 1 次处置 / 1 笔
              模型成交 / 1 次模型平仓</span>。
            </p>
            <div className="dn-lvls">
              <div><span className="dn-lvl-k">第 1 行 · 2026-08-23（差一点 #1）</span><span className="dn-lvl-v">回调多头第 2 腿 —— 最低的交易所 1h 收 $76,020.30、在 $76,000 带顶上方 $20.30</span></div>
              <div><span className="dn-lvl-k">第 2 行 · 2026-08-24（差一点 #2）</span><span className="dn-lvl-v">回调多头第一目标 $80,000 —— 24h 高 $79,991.00、差 $9.00，而那套框架从未点着</span></div>
              <div><span className="dn-lvl-k">第 3 行 · 2026-08-25（处置）</span><span className="dn-lvl-v">回调多头按预先承诺的处置规则未成交退休 —— 不存在成交价，所以不算 R</span></div>
              <div><span className="dn-lvl-k">第 4 行 · 2026-08-26（差一点 #3 · 未变）</span><span className="dn-lvl-v">回踩多头已点着、到那篇的锚为止没有成交 —— 点着后低点 $78,351.00 对 ≈$78,200 限价 = $151.00。这一行永久保留差一点的分类</span></div>
              <div><span className="dn-lvl-k">第 5 行 · 2026-08-27（模型成交）</span><span className="dn-lvl-v">第 4 行的框架解决了 —— ≈$78,200 这个限价价位在 08-26 12:30Z 被交到并穿过去 $600.00，记为一笔交易台指令的模型 / 纸上成交</span></div>
              <div><span className="dn-lvl-k">第 6 行 · 2026-08-31（新增 · 模型平仓，第一次完整解决）</span><span className="dn-lvl-v bull">第 5 行的仓位按它自己写下的价位解决：$79,600 分批 @08-27 08:08Z、$80,000 第一目标 @09:20Z，按采纳的读法模型 <b>+1.6814R 毛 / 0.2R 规模下 +0.3363R</b>，最保守的一支 +0.5285R。止损在它写明的日收口径上从未触发，尽管印子口径被穿了 11 根 bar。<b>未对账 —— 这一轮从未载入任何券商源</b></span></div>
              <div><span className="dn-lvl-k">带着、未变</span><span className="dn-lvl-v">08-19 侦察仓仍然 <b>过期未成交</b>，10.03R 毛 / 按写明的 0.2R 规模约 2.01R，不重新翻案</span></div>
            </div>
            <p>
              <b>开放设计缺陷，老实打分。</b>{' '}
              <b>(a)</b> 只要 SM feed 还会产生名册断点，<code>net_btc</code> 闸
              就仍然不成立 —— 今天<b>再次确认</b>，89.23% 的单分钟集中度，距离
              上一次被判可采信只隔一篇<em>已核对备忘</em>（四个日历 session，
              因为 08-28/29/30 没有备忘）。{' '}
              <b>(b)</b> 每一道闸的价格口径 —— 08-25 / 08-26 宣布已关，{' '}
              <b>复发</b>：保本移仓「$78,200」没有口径，触碰对日收在这里值
              0.21R 毛。{' '}
              <b>(c)</b> 进场与目标之间没有指令 —— 08-27 宣布已关，{' '}
              <b>只关了一半</b>：分批规则写了半仓、没写剩余仓位的出场，于是有了
              上面那个 3.18× 的离散。{' '}
              <b>(d)</b> 用会动的 MA 报的目标 —— <b>仍然开着</b>，被跑过去、没有
              被修好。{' '}
              <b>(e)</b> 执行状态不能从价格路径数据推断 —— 本篇全文照办。{' '}
              <b>(f) 新增</b> —— 434 分钟的 funding 去拥挤闸本周{' '}
              <b>0-for-5</b>，作为一道闸退休，不再当成一个被满足的条件带着。
            </p>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI</span> · 按采纳的读法本子 FLAT · 新
              框架已定义但未点着，口径、时长与剩余条款全部提前写明 · chase-short
              站边第七篇已核对备忘，而这是<b>有记录的第三次</b>两腿同向改善
              （08-23 第一次、08-26 第二次），价格腿上最大
            </h2>
            <p>
              本子 <b>FLAT</b>，框架按自己写下的价位收掉了仓位，交易台没有选择
              站边。摆在它前面的东西确实是两面的，就该这么说。反面：周结算{' '}
              <b>失守</b> W-SMA150 差 $148.26；W-EMA100 翻回去成了盖，把矩阵从
              18-of-20 拉到 17-of-20；六条顶背离堆在 15m–12h，带 8h/12h 的明确
              高周期警示；现货下方的 γ 地板翻了过去，最大的负墙现在压在市场
              下方 $792.01；前端到期是 27 张已归档 8 月面板里最负的。正面也在：
              日线仍然 10-of-10；现货在周期地板上方 +20.51%，已经连续两周收在它
              上方；1d TD9 SELL 那条反对意见重置了；短周期 RSI 洗到 26–34 并
              印出 30m TD9 BUY；funding 离顶、散户日内去拥挤 −2.34pt；implied
              收敛到了 realized，不再偏贵。
            </p>
            <p>
              <span className="dn-signal">
                新框架已定义但未点着，而且这一次剩余条款写在靠近之前。
              </span>{' '}
              <b>多头，reclaim-and-hold。</b>只在{' '}
              <b>两根连续已收盘的交易所 1h 收 ≥ $78,431</b> 时点着，那在
              W-EMA100 $78,430.85 上方，是这一周真正的结构变化所在，交易所 bar
              口径、只看收盘、不看影线。进场{' '}
              <b>≈$78,500、0.2R、不追</b>。止损{' '}
              <b>日收 &lt; $77,180</b>，对应约 $1,320 的风险。{' '}
              <b>这个止损没有落在最近的印子低点下方，这一点直说、不绕过去：</b>
              它在{' '}
              <span className="dn-tag bear">08-28 低点 $76,853.10 上方
              $326.90</span>、在{' '}
              <span className="dn-tag bear">08-30 低点 $76,947.20 上方
              $232.80</span>，上周最深的两条路径按印子口径都会穿过它。规则写在{' '}
              <b>日收口径</b>上，那两天都没有收在它下方（08-28 收 $77,805.90、
              08-30 收 $77,634.60），所以这个价位只在自己写明的口径上活下来；
              触碰口径会把它拿走两次。这是接受下来的风险，几何上的主张谈不上。{' '}
              <b>剩余条款，现在就写：</b>$79,600 减一半，剩下的在{' '}
              <b>$81,000 固定</b>出场，是一个固定数字、不是 MA；分批之后的移动
              止损是 <b>$78,500，按日收口径</b>，口径写明白，事后没得争。剩下
              那一半的 R/R 约 1.89:1，是选定价位上的算术，给不了证据。{' '}
              <b>时长：</b>这条指令持有到{' '}
              <b>2026-09-01 00:00Z 日收</b>然后失效。{' '}
              <b>预先承诺的处置：</b>日收跌破 $77,180 把它退休，日收站上
              $81,000 而没有点着就把它未成交退休。这个锚上它{' '}
              <b>没有点着</b>：现货 $77,792.01 在<b>四舍过的触发位 $78,431 下方
              $638.99</b>（在底层的 W-EMA100 $78,430.85 下方 $638.84），也不
              存在合格的收盘。
            </p>
            <p>
              <span className="dn-signal">
                chase-short 站边第七篇已核对备忘 —— 两条腿一起改善，这是有记录
                的第三次，不是第一次。
              </span>{' '}
              交易台原来想说的那个最高级<b>撤回</b>：本仓库自己的 08-26 备忘把
              那一篇记为<b>第二次</b>两腿同向改善，并点名{' '}
              <b>08-23 是第一次</b>（价格腿 18.84% → 17.48%、夹持 +249.91M →
              +242.37M）。有日期的序列是{' '}
              <span className="dn-tag">08-23 第一次、08-26 第二次、08-27 两腿
              反向、08-31 第三次</span>。今天能主张的、并且把基准一起写出来的，
              是<b>这一轮记录里最大的价格腿改善</b>：价格腿要跌{' '}
              <span className="dn-tag">14.96%</span> 才够到翻转位 $66,152.87，
              对着 08-27 的 18.10%，改善{' '}
              <span className="dn-tag">3.14 个百分点</span>，对着 08-23 的
              1.36pt（18.84% → 17.48%）与 08-26 的 0.62pt（18.92% → 18.30%）。
              γ 腿要求脚算总量转负或塌向零，它在这个四 session 的区间上走了{' '}
              <span className="dn-tag">−103.60M 到 +184.30M</span>。08-27 那天
              两条腿走的是相反方向，今天一起朝这笔交易走。它还是{' '}
              <b>站边</b>，理由不是嘴硬：<b>+184.30M 仍然是很深的正夹持</b>，
              14.96% 仍然是很长的路，改善量在一个周内路径从未归档的区间上测
              出来，四个 session 里有三个没有面板，这里没有任何东西是逐
              session 核实过的。两条腿朝对的方向走了一个已归档的观测，是继续
              看着的理由，做空的理由谈不上。
            </p>
            <p>
              这一周往前看的正确读法：<em>方法是好的，规格不是</em>。08-27 写
              下的框架喊中了自己的目标，盘面在那篇备忘 00:05Z 锚之后不到九个
              小时就付了钱；同一套框架接着留下一个 3.18× 的歧义，说不清自己到底
              赚了什么。修规格，不是修论点。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计留痕 · v2 · <b>已过 codex 敌对式审计</b> ·{' '}
              <code>audits/2026-08-31-desk-note.md</code> —— v1 判定
              BLOCK-CRITICAL，2 条 CRITICAL + 3 条 MAJOR + 7 条 MINOR
            </span>
            十二条发现全部落到<b>整份英文页</b>上，不只落在被点到的行。每一条
            都把错误主张的字符串模式与它的语义变体在全文 grep 过修前修后；
            下面的计数就是那些 grep。<b>每一条都在命中数为 0 时解决</b>，两处
            故意保留的残留在末尾点名。
            <br /><br />
            <div className="dn-lvls">
              <div><span className="dn-lvl-k">DN-001 · CRITICAL · 止损被说成落在两个印子低点下方</span><span className="dn-lvl-v">模式：<code>below both</code>、<code>sits below both</code>、<code>print-basis lows</code> · 修前 <b>1</b> 处（第 VI 节框架定义）· 修后 <b>0</b> · 主张撤回并倒过来写成真实几何：$77,180 在 08-28 低点 $76,853.10 <b>上方 $326.90</b>、在 08-30 低点 $76,947.20 <b>上方 $232.80</b>，两条路径按印子口径都会穿过它，这个价位只在写明的日收口径上活下来（08-28 收 $77,805.90、08-30 收 $77,634.60）。价位、约 $1,320 的风险与约 1.89:1 的剩余 R/R 都没动，没有把任何东西悄悄挪走 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-002 · CRITICAL · 「第一次两条腿都改善」是假的最高级</span><span className="dn-lvl-v">模式：<code>first time BOTH</code>、<code>both legs improved</code>、<code>for the first time in the sequence</code>、<code>first two-leg</code> · 修前 <b>2</b> 处（第 VI 节副标、chase-short 段）· 修后 <b>0</b> · 换成本仓库自己 08-26 备忘给出的有日期序列：<b>08-23 第一次</b>（价格腿 18.84% → 17.48%、夹持 +249.91M → +242.37M）、<b>08-26 第二次</b>（18.92% → 18.30%）、<b>08-27 两腿反向</b>、<b>08-31 第三次</b>。保留下来的唯一最高级是<em>最大的价格腿改善</em>，并把基准就地印出：今天 3.14pt，对着 1.36pt 与 0.62pt · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-003 · MAJOR · 流逝时钟把 08-27 的分析锚当成了发布时刻</span><span className="dn-lvl-v">模式：<code>rule was published</code>、<code>rule being published</code>、<code>note published</code>、<code>rule published at</code>、<code>after publication</code> · 修前 <b>4</b> 处（导语、第 V 节副标、交易块标题、交易块论点）· 修后 <b>0</b> · 每一个 8h03m / 9h15m /「不到九个小时」都改成从 <b>00:05Z 分析锚</b>起算，并在各处写明；备忘同时声明<b>本轮没有载入任何部署、可用性或发布时戳</b>，且 08-27 那篇的文件与提交时间都晚于 00:05Z，所以这个锚不能读成发布时刻 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-004 · MAJOR · 「连续第七个 session」越过了三张缺失面板的证据边界</span><span className="dn-lvl-v">模式：<code>seventh session</code>、<code>seventh consecutive session</code>、<code>consecutive session</code>，外加对全文每一处 <code>session</code> 的通扫 · 在 chase-short 那条主张上修前 <b>2</b> 处 · 修后 <b>0</b> · 改标为<b>第七篇已核对备忘</b>；SM 缺陷那一行从「一个 session 之后」重新收窄为「一篇<em>已核对备忘</em>之后（四个日历 session）」；第 III 节副标、导语与 chase-short 段现在一律写<b>四个 session、只有两个已归档端点的区间</b>，数据来源那一行写明这里没有任何东西是逐 session 核实过的。其余 <code>session</code> 命中都是带着披露一起走的日历区间用法 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-005 · MAJOR · 「两个新的 episodic 旗」被自己的正文推翻</span><span className="dn-lvl-v">模式：<code>two NEW episodic</code>、<code>Two new episodic</code>、<code>two new episodic</code> · 修前 <b>2</b> 处（第 IV 节副标、第 IV 节信号句）· 修后 <b>0</b> · 改写成<b>一个新的 episodic 旗加一个带过来的 episodic 旗、方向相反</b>；HY 标为 <b>新转 episodic</b>（−1.77），Fed net liquidity 标为<b>带过来、不新</b>，它在 08-27 那张日期面板上已经是 episodic −2.45 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-006 · MINOR · 导语把错误的破位差额安给了 08-30 那个印子</span><span className="dn-lvl-v">模式：<code>by $395.32 on a print basis</code>（导语里那个以 08-30 为主语的形式）· 修前 <b>1</b> 处 · 修后 <b>0</b> · 更正为 <b>$301.22</b>（$77,248.42 − $76,947.20），$395.32 在同一句里重新挂回更深的 08-28 低点 $76,853.10。第 V 节里另外两处 $395.32 本来就以 08-28 为主语，保持不动 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-007 · MINOR · 事件闸的 7d 回报与钉住的端点对不上</span><span className="dn-lvl-v">模式：<code>+0.25%</code> · 修前 <b>1</b> 处 · 修后 <b>0</b> · 按 live 现货口径更正为 <b>+0.22%</b>（$77,624.49 → $77,792.01 = +0.2158%），在本轮独立按钉住的 <code>08-24 08:05</code> 与 <code>08-31 08:05</code> 两行重算过；数据来源那一行现在写明两道闸的口径，并把被否掉的 monitor perp 口径 +0.23% 一并印出 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-008 · MINOR · funding 封顶分子与段数在写明的口径下不可复算</span><span className="dn-lvl-v">模式：<code>4,617 / 10,080</code>、<code>(45.8%)</code>、<code>12 capped</code>、<code>ran past 434</code>、<code>624m</code> · 在 funding tile 与第 I 节修前共 <b>7</b> 处 · 修后 <b>0</b> · 现在只定义一个分类器并全篇通用：<b>封顶 = raw funding 恰好 0.010000</b>，episode 是同一侧的极大连续段、不合并、不设最短时长，重复标签 <code>08-27 14:53</code> 去重到 10,080 个间隔，流逝分钟 = 行数 − 1。按这个口径独立重算：7d 占用 <b>4,593 / 10,080 = 45.6%</b>、<b>20 段封顶（19 段起点在窗内）</b>、7 段 ≥ 200 行的顶下段，第四次合格释放是 <b>626m</b> 而不是 624m。「超过 434 分钟」改成<b>「达到或超过」</b>，因为第一次正好是 434 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-009 · MINOR · 200W 插入名次把当前观测插了两次</span><span className="dn-lvl-v">模式：<code>38 / 167</code>、<code>38/167</code>、<code>22.8th</code> · 修前 2 行共 <b>3</b> 处（第 II 节分位句、旧的审计留痕块）· 修后 <b>0</b> · 更正为 <b>38 / 166 = 22.9 分位</b>，并就地写明理由：166 个已收盘周比率本来就含当前那一个，所以当前只插一次。另外分开发布的 37/166 = 22.3% 与 37/165 = 22.4% 两个严格口径没动、仍可复算 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-010 · MINOR · 列了十张面板却写「九张」</span><span className="dn-lvl-v">模式：<code>Nine panels</code>、<code>nine panel</code> · 修前 <b>1</b> 处 · 修后 <b>0</b> · 更正为<b>十张先前的对照面板（三张在下、七张在上）</b>，与列举一致：08-17 / 08-18 / 08-19 在下，08-20 / 08-22 / 08-23 / 08-24 / 08-25 / 08-26 / 08-27 在上。「自 08-19 面板以来最低、不是谱系最低」这个序数本身没动，仍限定在档案内 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-011 · MINOR · 点着距离把四舍过的触发位跟底层 MA 混着用</span><span className="dn-lvl-v">模式：<code>$638.84 below the arming level</code> · 修前 <b>1</b> 处 · 修后 <b>0</b> · 两个距离现在各自带着自己的参照印出：<b>在四舍过的触发位 $78,431 下方 $638.99</b>，在底层的 W-EMA100 $78,430.85 下方 $638.84 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">DN-012 · MINOR · watch-state 交叉核对既没钉住、也已经被覆写</span><span className="dn-lvl-v">模式：<code>00:11:40</code>、<code>carries for the week ended</code>、把 <code>ma200w_trap_watch_state.json</code> 当交叉核对用 · 修前 2 处站点共 <b>3</b> 处（数据来源 200W 行、第 II 节周期地板段）· 每一个断言形式修后 <b>0</b> · 两处的人造物 / 时戳主张都撤回：本轮没有把任何 watch-state 文件随日期归档存下来，滚动副本此后已被覆写，08-23 周的前值 $64,269.62 只作为<b>同一条已收盘 parquet 序列的重算</b>引用 · <b>已解决</b></span></div>
              <div><span className="dn-lvl-k">故意保留的残留，点名以保证 grep 记录诚实</span><span className="dn-lvl-v">有两个字符串是故意留下来的，都不再承载修前的含义。(1) <code>4,617</code> 在第 I 节出现一次，落在那句<em>否掉</em> <code>≥ 0.00999</code> 分类器的话里 —— DN-008 的修法要求把口径就地定义清楚，这就需要点名被否掉的那一个。(2) <code>ma200w_trap_watch_state.json</code> 在数据来源里出现一次，落在那句写明它<b>没有归档、也不再可恢复</b>的话里。这两者的断言形式 grep（<code>4,617 / 10,080</code>、<code>00:11:40</code>）都是 <b>0</b></span></div>
            </div>
            <b>从 v1 带过来、未变并经审计复核的：</b>第 V 节采纳的 (C) 仍是一个
            <em>对含糊旧文本的判断取舍</em>，两支被否的读法照印；「自 08-19 面板
            以来最低」这个序数限定在 27 张已归档 8 月面板内，并且明确<b>不是</b>
            谱系最低；两次连续负前端的形态明确<b>不是</b>第一次（08-01 与 08-11
            都出现过），而 −12.28M 的<em>深度</em>只对 8 月档案主张；W-SMA150
            那条刀口在周收与 live 现货之间符号相反，两个都印；IV−RV 价差
            −0.1772pt 带着 ±5 个波动率基点的四舍带就地写出；SM 的 24h Δ 在算术
            上是前值净的 6.47%，但因为其中 89.23% 出自一行而判为{' '}
            <b>不可采信</b>；第 V 节每一个 R 数字都是 <b>MODELED</b>，按指令价
            算，本轮任何地方都没有载入订单簿、成交均价或成交源。funding 全篇走{' '}
            <code>raw × 1095</code>（0.007143 × 1095 = 7.8216%），绝不 ×1095×100。
            GEX 翻转位双参考、两个同号。NTT、max-pain、strike-level IV 与
            BTC/NQ 比率全部 framework only，并在数据来源里列为未载入。
            <br /><br />
            <b>审计记下、本篇也没有关掉的开放项：</b>本轮不存在订单簿、委托
            记录、成交源、成交均价或账户对账；08-27 那篇不存在发布时戳；
            08-28/29/30 的 GEX 路径缺失，所以没有任何逐 session 的连续性被
            核实；锚前那一版 watch-state JSON 不可恢复。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本篇是 Hysteresis Research 内部为主理人之间讨论准备的交易台产物，{' '}
            <em>不是投资建议、不是要约、不是招揽</em>，也没有针对任何接收人的
            具体情况做过个性化。所有数字取自单一原子快照（2026-08-31 00:05Z），
            分节的来源在上方数据来源里披露；宏观 Tier-1 面板渲染在 2026-08-30
            22:17Z、日频行带的是周五 2026-08-28 的收盘，200W watch 人造物缺失
            并由一次已披露的 parquet 重算替代，JGB 那一行是陈旧月度。第 V 节的
            持仓记录是一次仅从价格路径出发的<b>模型 / 纸上</b>重建：没有载入
            任何订单簿、成交源或持仓对账，所以它不是关于任何账户的陈述。价位、
            规模与条件用于说明交易台的流程，不构成长期有效的推荐。过去的相关性、
            gamma 与持仓形态约束不了未来的盘面。衍生品带有本金全损的风险，带
            杠杆时亏损可以超过已缴保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                规则准点开火，盘面在锚后不到九个小时就付了钱。然后它把我们留在
                原地，跟自己写下的那句话争我们到底赚了什么。修规格，不是修论点。
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
            v2 · 2026-08-31 00:05Z 快照 · 归档
            /opt/desk-note/snapshots/2026-08-31-0006/ · 来源：live_db.json ·
            mtf_div_latest.html · btc_gex.html · gex_summary.json ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · FRED · Yahoo · Deribit
          </span>
        </footer>
      </article>
    </main>
  );
}
