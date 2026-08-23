import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav、不在 sitemap、noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-23 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-23',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-23' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260823() {
  await requireViewer('/zh/desk/2026-08-23');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-23 · v2</span>
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
              <span className="dn-big">$77,137</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.89%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-08-23 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">
                    live_db.json · 盘面锚 <b>2026-08-23 00:07Z</b>（BJ 行{' '}
                    <code>08-23 08:07</code>）
                  </td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · <b>已 PIN</b>：到锚行为止的 20,200 行尾巴
                    存档在{' '}
                    <code>snapshots/2026-08-23-0007/live_db_pin_2026-08-23T0007Z.jsonl</code>
                    、本篇每一个盘面数字都从这个文件算、不从 live tail 算
                    （本次 session 两次读之间 live 文件又长了两行）· 窗口规则
                    是闭区间 [锚 − 时长, 锚]：24h = 1,441 行、72h = 4,321 行、
                    7d = 10,081 行 —— N 行跨的是 N−1 根分钟到分钟间隔 ·{' '}
                    <b>端点断言</b>：本篇每一个时间跨度都收在 pin 的锚行上。
                    v1 稿在两个 OI 数字上没做到（48h 与 3d 峰差是从滚过去的
                    00:08Z live 行算的）；v2 已从 00:07Z pin 重算
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-23 00:01Z scan（BJ 08:01）</td>
                  <td className="dn-flag">
                    滚动小时人造物 · 存档于{' '}
                    <code>snapshots/2026-08-23-0007/</code> · 比盘面锚早约 6
                    分钟 · 扫描现货 $77,134 / 24h −1.46% 对盘面 $77,137.30 /
                    −0.89%（两个 24h 起点不同、见 §II）· 全是未收盘 K 线
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-23 00:00Z bake</td>
                  <td className="dn-flag">
                    存档于 <code>snapshots/2026-08-23-0007/</code> · 比锚早约 7
                    分钟 · Deribit idx $77,382 对 live 现货 $77,137.30
                    （idx 高 $244.70）· 1,038 合约（08-22 是 1,070 —— 22AUG26
                    那 +7.68M 的块在 08-22 08:00Z 结清）·{' '}
                    <b>文件 headline 合计 +238.6M、按到期脚算 +242.37M</b>；
                    本篇全程走脚算口径、以便和 08-22 备忘（+249.91M 脚算、
                    那边记作 ≈+249.90M）对齐、headline 单独披露 ·{' '}
                    <code>gex_summary.json</code> 与{' '}
                    <code>ma200w_trap_watch_state.json</code> 本次{' '}
                    <b>未</b>读、本篇没有任何一句压在它们上面
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 生成于 2026-08-23 00:00Z
                  </td>
                  <td className="dn-flag">
                    存档 · 7d 1h bar · 22 资产 · 166 rows · 这是一条 7 天滚动
                    读数、不是当日读数
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-22 22:16Z 渲染</td>
                  <td className="dn-flag">
                    存档 · 比锚早约 1.85h、所以<em>渲染</em>是新的——但
                    <em>内容</em>不是：08-22 是周六、FRED 整个周末没发东西、
                    每一根日频 Tier-1 行都还是 08-22 备忘已经带过的那根周五
                    08-21 印。这块面板按 <b>未变、不是更新</b> 读 · JGB 月度
                    陈旧 82 天 · Michigan / WTI 行陈旧
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵 + 30D RV</td>
                  <td className="dn-v-cell">
                    btcusdt_1m_*.parquet（全部 8 个年度文件）· 最末 bar
                    2026-08-23 00:05Z 收 $77,157.00
                  </td>
                  <td className="dn-flag">
                    2,542 根日 bar / 364 根周 bar —— 全矩阵可算、含 W-SMA200 ·
                    偏移按 live 现货 $77,137.30 重算 ·{' '}
                    <b>08-23 这根 W-SUN 周 bar 是开着的</b>（今日 23:59Z 结算、
                    约在本锚之后 23.9h）、所以本篇每一根周 MA、每一句假破
                    陈述都以那根结算为条件
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W watch JSON</td>
                  <td className="dn-v-cell">weekly_200sma.json · 不存在</td>
                  <td className="dn-flag">
                    本服务器上没有这个文件 · 200W 状态、比率分位与上一次事件
                    都是交易台自己在 parquet 上的重算、覆盖 165 根非 NaN 周
                    观测、其中 164 根是已完成收盘、第 165 根是开着的 08-23 bar
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
              <span className="dn-src">live · 原始字段 +0.0100%/8h × 1095 · 24h 均值 +10.95% —— 均值<em>就是</em>封顶、因为 1,441 根采样行每一根都印它 · 自 2026-08-21 08:48Z 起连续 2,360 根采样行钉在封顶、即 2,359 分钟（上一根非封顶行 08:47Z、+10.77%）· 「封顶」= 这条 feed 在 10,081 行 7d 窗内一次都没越过的 +10.95% ann 天花板</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+10.95% → +10.95%（焊死）</span>
              <span className="dn-src">区间 +10.95% / +10.95%、1,441 / 1,441 钉顶（100.0%）、0 / 1,441 为负 · 08-22 备忘那边是 952 / 1,441（66.1%）、均值 +9.88% —— 这根 pin 在一根下跌日里<em>收紧</em>了 · 72h 均值 +9.75%、3,124 / 4,321 钉顶；7d 均值 +7.15%、158 / 10,081 为负</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v">+0.00%（+4.8 BTC）</span>
              <span className="dn-src">live · 105,861.784 → 105,866.613 BTC · 总量 OI 在这根下跌日里净口径上没缩（这条 feed 里没有 gross 开平、也没有账户级换手）· 对照 48h −1,752.8 / −1.63%、72h −1,721.0 / −1.60%、7d −5,639.5 / −5.06%、距 3d 峰 111,052.2 @ 08-21 08:50Z −5,185.6 / −4.67% —— 每一个跨度都收在 00:07Z pin 锚行上 —— 底仓净口径上缩了一整周、然后正好在这里停下</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bull">50.18 / 49.82</span>
              <span className="dn-src">live_db <code>mkt_long_pct</code> · 24h 区间 49.48 / 51.48 · 7d 前 67.16%、7d 峰 69.00% @ 08-16 23:12Z、在真盘面低点 $62,716 @ 08-16 22:41Z 读 68.64% —— retail 离 7d 峰 −18.82pt、同期价格 +22.30%；全页最干净的一条线</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">+32.19k（净多 · 不可采信）</span>
              <span className="dn-src">live · long 39,540.6 − short 7,350.5 · 这个水位作为 feed 读数是真的、但不是可审计的仓位序列：被追踪的 roster 在 08-22 06:41Z 重采样（<code>long_traders</code> 一分钟内 2,260 → 4,976）—— 三天里第三次 re-sync</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · 精确 24h</span>
              <span className="dn-v">+15.81k → +32.19k（Δnet +16,379.5）</span>
              <span className="dn-src">基准是精确 T−24h 行 2026-08-22 00:07Z（+15,810.5）、<b>不是</b> 08-22 备忘自己的 00:39Z 锚（+15,993.8、对它算 Δnet 会是 +16,196.3）· |Δ| / prior_net = 16,379.5 / 15,810.5 = 103.60% · 但其中 16,071.5（98.12%）印在 08-22 06:41Z 那一根 re-sync 分钟里 · 之后干净的 17h26m 里 SM 反而在<em>减</em>：Δnet −636.8 = post-resync net 的 −1.94%、Δlong −323.2、Δshort +313.6、对应价格 −0.55%</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">46.7% / 43.18%</span>
              <span className="dn-src">GEX 链上中位数、跨 1,038 合约（08-22 是 49.1% / 1,070 —— 一根 −2.4pt 的 vol 降温）对 30D close-to-close RV 43.18% · richness ≈ +3.52pt · 这是链中位数、<b>不是</b>可交易价差</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+21.18%（在上方）</span>
              <span className="dn-src">flip $63,653（前 $63,288 · 上移 $365）· 对 live 现货 $77,137.30 = +21.18%（77,137.30 / 63,653 − 1 = 21.1841%）/ 对 GEX 文件自己的 Deribit idx $77,382 = +21.57%（文件印 +21.6%）—— 两个参考都是正、tile 取现货侧 · 反过来说：flip 坐在现货<b>下方 17.48%</b>、也就是要跌 17.48% 才够到它 · 脚算 aggregate +242.37M（headline +238.6M）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                08-22 备忘要的那根回撤来了、在离画好的带子还差 $600 的地方
                停住、而且下来的路上把同一篇备忘刚记下「已重夺」的那层周线
                台阶又还了回去
              </span>
              。现货报 <span className="dn-tag">$77,137.30</span>、在精确 24h
              窗上 <span className="dn-tag bear">−0.89%</span>、对 08-22 锚
              $77,981.99 是 <span className="dn-tag bear">−1.08%</span>、现在
              坐在{' '}
              <span className="dn-tag bear">W-EMA50 $77,226.37 下方（−0.12%）</span>
              {' '}和{' '}
              <span className="dn-tag bear">W-SMA150 $77,442.48 下方（−0.39%）</span>
              —— 上一篇叫作「已重夺台阶」的那两条、又回到头顶当盖子。08-22
              收 <span className="dn-tag bear">$77,084.50（−1.56%）</span>、是
              连五根上日之后的第一根下日（08-17 +2.59%、08-18 +0.29%、08-19
              +7.14%、08-20 +5.32%、08-21 +7.27%）。这根下跌日难看的不是幅度、
              是它的管路：{' '}
              <span className="dn-tag bear">funding 在这 24h 窗的全部 1,441
              根采样行上焊死在 +10.95% 封顶——1,440 根分钟到分钟间隔</span>
              （自 08-21 08:48Z 起连续 2,360 根采样行）、而{' '}
              <span className="dn-tag">总量 OI 净口径上没缩（+4.8 BTC、+0.00%）</span>
              —— 窗口开头在的那批底仓、到窗口结尾还在、而且一路按最高费率
              付着。{' '}
              <span className="dn-em">
                这条 feed 只有总量 OI：gross 开平和账户级换手看不见、所以
                「大规模去杠杆 + 等量新杠杆补上」印出来的净值会一模一样。
              </span>{' '}
              现货 CVD 卖出{' '}
              <span className="dn-tag bear">−873.2</span>、大单{' '}
              <span className="dn-tag bear">394 笔净 −387.8 BTC</span>、砸进
              一个不动的底仓。对面：整条日线 MA 阶梯还是全正（10 of 10）、
              retail 在{' '}
              <span className="dn-tag bull">50.18% 多——离 7d 峰 −18.82pt</span>
              、走完一根 +22.30% 的周也没有重新拥挤、dealer 夹子还深在{' '}
              <span className="dn-tag bull">+242.37M 脚算</span>、进行中的
              W-SUN bar 跑在{' '}
              <span className="dn-tag bull">W-SMA200 周期地板 $64,266.81
              上方 +20.03%</span>、{' '}
              <span className="dn-em">离一根「让 08-16 破位维持成立」的结算
              还隔着约 23.9h 和一根 −16.69% 的崩塌</span>
              。本子保持 <span className="dn-tag">空仓</span>：回撤多头两条腿
              都还 <span className="dn-tag">未武装</span> —— 周线没结算、价格
              也从没进过 $75,000–$76,000 带（24h 低 $76,600.02、正好在带顶
              上方 $600.02）—— 追空继续按下不表。
            </p>

            <p>
              24h 的形状是一推、然后慢慢渗。高{' '}
              <span className="dn-tag">$78,810.00 @ 2026-08-22 03:31Z（BJ
              11:31 08-22）</span>、低{' '}
              <span className="dn-tag">$76,600.02 @ 2026-08-22 10:23Z（BJ
              18:23 08-22）</span>、快照 $77,137.30 —— 坐在{' '}
              <span className="dn-tag bear">距高 −2.12%</span>、{' '}
              <span className="dn-tag">距低 +0.70%</span> 的位置、离自己区间
              的下沿比上沿近。{' '}
              <span className="dn-signal">
                那根高点在结构上有意义：$78,810 捅穿了整叠头顶盖子、然后被
                打回来
              </span>
              —— <span className="dn-tag">$78,000 墙（+32.23M）</span>、
              D-EMA400 ≈<span className="dn-tag">$78,213</span>（MTF 列读数、
              取它 $77,134 的扫描收、不是交易台重算 —— 台里的矩阵只跑
              n ∈ {'{'}20, 50, 100, 150, 200{'}'}）、以及{' '}
              <span className="dn-tag">W-EMA100 $78,435.81</span>、三条挤在
              $436 之内、价格在欧洲早盘的一段时间里站上过三条之上、随后丢掉、
              再丢掉下面那层 W-EMA50 / W-SMA150 台阶。{' '}
              <span className="dn-em">
                一次对三层盖子的失败测试、紧接着丢掉下面那层台阶——这套顺序
                是把「重夺」变成「上影」的顺序。它没有证伪周线读数（日线阶梯
                没被碰、周期地板还在 16.69% 之外）、但它确实在说：08-21/08-22
                那次对 $77.2k–$77.4k 的重夺，还不是一个底。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位{' '}
              <span className="dn-roman">I · funding 在一根下跌日里 1,441 / 1,441 采样行焊死封顶 · 总量 OI 净口径持平（+4.8 BTC）—— 这条 feed 看不见 gross 换手 · SM feed 连续第三天 re-sync、24h Δnet 的 98.12% 是 roster 人造物</span>
            </h2>

            <p>
              <span className="dn-signal">
                杠杆读数在一根下跌日里变差、不是变好——方向是错的
              </span>
              。funding 在{' '}
              <span className="dn-tag bear">1,441 根采样行的每一根上都印
              +10.95% ann</span>：24h 均值 +10.95%、min +10.95%、max +10.95%、
              封顶占用 1,441 / 1,441 = 100.0%、零根负行。08-22 备忘带的是
              952 / 1,441（66.1%）钉顶、均值 +9.88%，所以这根 pin 在一段
              价格下跌的 session 里<em>收紧</em>了。连续段现在跑到{' '}
              <span className="dn-tag bear">自 2026-08-21 08:48Z（BJ 16:48）
              起 2,360 根采样行 —— 2,359 分钟</span>；上一根非封顶行是
              08:47Z、+10.77%。放宽看：72h 均值 +9.75%、3,124 / 4,321 钉顶；
              7d 均值 +7.15%、158 / 10,081 为负、7d min −0.39%。{' '}
              <span className="dn-em">
                这里的「封顶」指的是这条 feed 在 10,081 行里一次都没越过的
                +10.95% ann（原始 +0.0100%/8h）天花板；它是这份数据里观察到
                的上限、按观察值披露、不当成交易所参数断言。
              </span>{' '}
              旁边 OI 什么也没做：{' '}
              <span className="dn-tag">105,861.784 → 105,866.613 BTC、
              +4.8 BTC、+0.00%</span>。这是全页最重要的一个数字、因为它打断了
              上一篇的挤压机制。那根 +22.30% 的 7d 腿是建在缩着的底仓上的
              —— OI{' '}
              <span className="dn-tag bull">7d −5,639.5 BTC / −5.06%</span>、{' '}
              <span className="dn-tag bull">距 3d 峰 111,052.2 @ 2026-08-21
              08:50Z −5,185.6 / −4.67%</span> —— 这是挤压签名。走到这 24h、
              底仓不再缩、价格还是跌了。{' '}
              <span className="dn-em">
                挤压的燃料停止被消耗、价格却在翻头，那就是烧完的燃料。剩下的
                是一本付满费的多头本子、封顶顶着它、底仓在净口径上没有收缩
                —— 这是脆弱读数、不是延续读数。把话说到载入数据能撑住的边界
                为止：总量 OI 净口径上没缩。有没有人个别离场、又被别人补上，
                这条 feed 看不见。
              </span>
            </p>

            <p>
              <span className="dn-signal">
                smart-money feed 连续第三天重采样它的 roster、交易台再次
                拒绝把由此产生的 Δ 读成仓位
              </span>
              。SM net 读{' '}
              <span className="dn-tag">+32,190.0 BTC</span>（long 39,540.6 −
              short 7,350.5）、对精确 T−24h 行的 +15,810.5（2026-08-22
              00:07Z —— 这是 24h 基准、<em>不是</em> 08-22 备忘自己的 00:39Z
              锚，那根读 +15,993.8、对它算 Δnet 会是 +16,196.3）—— Δnet 是{' '}
              <span className="dn-tag">+16,379.5</span>、也就是{' '}
              <span className="dn-em">|Δ| / prior_net = 16,379.5 / 15,810.5 =
              103.60%</span> 的前值。它不是仓位变化。{' '}
              <span className="dn-tag bear">这 16,379.5 里的 16,071.5 ——
              98.12% —— 印在 2026-08-22 06:41Z（BJ 14:41）那一根分钟里</span>
              、当时{' '}
              <code>long_traders</code> 从{' '}
              <span className="dn-tag">2,260 跳到 4,976</span>、同一 tick 上{' '}
              <code>short_traders</code> 870 → 1,009、long_btc 26,203.7 →
              39,863.8、short_btc 9,448.4 → 7,036.9。同样的形状印在{' '}
              <span className="dn-tag">2026-08-21 06:21Z（long_traders
              1,336 → 2,497、Δnet +10,671.2）</span> 和{' '}
              <span className="dn-tag">2026-08-20 07:06Z（long_traders
              587 → 1,388、Δnet +39,352.9）</span> —— 连续三天、全落在
              06:20–07:10Z 这个窗里、全都是被追踪 roster 规模跳一级、本子
              瞬间「变了」。{' '}
              <span className="dn-em">
                这是一条滚动追踪名单的采样人造物、不是一本仓位。08-22 备忘
                在只有一次的时候把它标成设计缺陷；三次之后它就是这条 feed
                的正常行为，任何把这个字段当水位或当增量读的决策门，读的都
                是噪音。
              </span>{' '}
              在唯一一段无人造物的窗上——{' '}
              <span className="dn-tag">08-22 06:41Z 到锚的 17h26m</span> ——
              被追踪的本子在<em>减</em>：Δnet{' '}
              <span className="dn-tag bear">−636.8（post-resync net 的 −1.94%）</span>
              、Δlong −323.2、Δshort +313.6、对着 −0.55% 的价格滑落。小、
              双向、略偏防守；这是本篇唯一一句有分量的 SM 陈述、而且它不
              支持做多。
            </p>

            <p>
              retail 是唯一一条干净的多头线、值得平铺直叙地读。{' '}
              <span className="dn-tag bull">mkt_long_pct 50.18%</span> ——
              一本 50/50 的本子 —— 24h 区间{' '}
              <span className="dn-tag">49.48% / 51.48%</span>。七天前是{' '}
              <span className="dn-tag">67.16%</span>；峰值{' '}
              <span className="dn-tag">69.00% @ 2026-08-16 23:12Z</span>、在
              真盘面低点{' '}
              <span className="dn-tag">$62,716 @ 2026-08-16 22:41Z（BJ 06:41
              08-17）读 68.64%</span>。{' '}
              <span className="dn-em">
                同一段价格 +22.30%、retail 拥挤度离峰 −18.82pt。一根把 retail
                挤出去、而不是把它招进来的涨，是结构上健康的那一种；这是反对
                「把丢台阶读成顶」的最强单条论据。
              </span>{' '}
              反面就在上一行：retail 确实散了、但 funding 说<em>有人</em>在
              付天花板、而总量 OI 说他们付的这段时间里底仓在净口径上没有收缩。
            </p>

            <p>
              窗口化的 flow 是<em>现货在卖、砸进一个不动的底仓</em>。24h：
              价格 <span className="dn-tag bear">−0.89%</span>、OI{' '}
              <span className="dn-tag">+4.8 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bear">Δ −873.2</span>、期货 CVD{' '}
              <span className="dn-tag">Δ −20.9</span>、大单{' '}
              <span className="dn-tag bear">净 −387.8 BTC / 394 笔</span>
              （big_buy Σ 2,495.8 对 big_sell Σ 2,883.6）、taker-net{' '}
              <span className="dn-tag">−20.9</span> ——{' '}
              <span className="dn-em">
                卖在现货、期货是打平、size 偏 offer、总量 open interest 净口径
                上没动：这是派发形状、不是冲洗
              </span>
              。4h（进快照）：价格{' '}
              <span className="dn-tag bear">−0.34%</span>、OI{' '}
              <span className="dn-tag bull">−545.5 BTC（−0.51%）</span>、现货
              CVD <span className="dn-tag bear">Δ −156.6</span>、期货 CVD{' '}
              <span className="dn-tag bear">Δ −315.0</span>、大单{' '}
              <span className="dn-tag bull">+8.5 BTC / 52 笔</span>、taker-net{' '}
              <span className="dn-tag bear">−315.0</span> —— 唯一一个 OI 真下
              来的窗、而且是在下跌里下来的、这是健康的那一版。1h：价格{' '}
              <span className="dn-tag bull">+0.12%</span>、OI{' '}
              <span className="dn-tag">+29.4 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bear">Δ −40.8</span>、期货 CVD{' '}
              <span className="dn-tag bull">Δ +18.7</span>、大单{' '}
              <span className="dn-tag bear">−7.7 BTC / 9 笔</span>、taker-net{' '}
              <span className="dn-tag bull">+18.7</span> —— 从 $76,900 低点
              @ 08-22 23:37Z 起来的一小时、薄而混。perp 在快照上对现货是{' '}
              <span className="dn-tag bear">−$25.49 折价</span>（1h 均
              −$10.29、区间 −$38.03 / +$28.51；4h 均 −$4.97；24h 均 −$8.72、
              区间 −$273.57 / +$112.21、跨 1,440 根非空行）。1 分钟 aggressor
              skew 收在{' '}
              <span className="dn-tag bull">+22.6</span>、对着 1h 均值{' '}
              <span className="dn-tag bear">−34.93</span>（区间 −56.4 / +22.6）
              和 24h 均值 −14.19 —— 这一小时是卖方发起的、最后一分钟是里面
              买方发起最重的一根，这是快照人造物、不该读成转向。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · W-EMA50 / W-SMA150 台阶丢了——现货回到两条下方 · 日线阶梯仍 10 / 10 全正 · MTF 按文件聚合口径 8 多 → 6 多（按逐周期列加总是 5 多；两种口径都 0 空）、RSI 从 ~90 冷到 80 段、新出 4h 水上死叉 + 12h TD9 SELL · W-SUN bar 开到 23:59Z</span>
            </h2>

            <p>
              <span className="dn-signal">
                本 session 的结构性事件是一次丢失、而且丢在周线上
              </span>
              。08-22 备忘记的是现货 $77,981.99 卡在重夺的 W-SMA150 / W-EMA50
              台阶上方、未破的 W-EMA100 / D-EMA400 盖子下方。一根 session
              之后、现货 $77,137.30 已经掉回台阶下面：{' '}
              <span className="dn-tag bear">W-EMA50 $77,226.37（−0.12%）</span>
              {' '}和{' '}
              <span className="dn-tag bear">W-SMA150 $77,442.48（−0.39%）</span>
              {' '}又回到头顶、上面那层盖子没变、还在{' '}
              <span className="dn-tag bear">W-EMA100 $78,435.81（−1.66%）</span>
              。二十条矩阵线里有五条为负、而{' '}
              <span className="dn-em">五条全是周线</span>：W-EMA50 −0.12%、
              W-SMA150 −0.39%、W-EMA100 −1.66%、{' '}
              <span className="dn-tag bear">W-SMA50 $81,773.47（−5.67%）</span>
              、{' '}
              <span className="dn-tag bear">W-SMA100 $88,835.59（−13.17%）</span>
              。日线全部还在现货下方、按顺序：{' '}
              <span className="dn-tag bull">D-EMA200 $71,698.83（+7.59%）</span>
              、{' '}
              <span className="dn-tag bull">D-SMA150 $69,058.81（+11.70%）</span>
              、{' '}
              <span className="dn-tag bull">D-SMA200 $69,006.66（+11.78%）</span>
              、{' '}
              <span className="dn-tag bull">D-EMA150 $69,286.66（+11.33%）</span>
              、{' '}
              <span className="dn-tag bull">D-EMA20 $68,419.99（+12.74%）</span>
              、{' '}
              <span className="dn-tag bull">D-EMA100 $67,171.65（+14.84%）</span>
              、{' '}
              <span className="dn-tag bull">D-SMA20 $66,755.81（+15.55%）</span>
              、{' '}
              <span className="dn-tag bull">D-EMA50 $66,300.94（+16.34%）</span>
              、{' '}
              <span className="dn-tag bull">D-SMA100 $66,123.56（+16.66%）</span>
              、{' '}
              <span className="dn-tag bull">D-SMA50 $65,164.47（+18.37%）</span>
              —— 一条 10 of 10 全正的日线阶梯。剩下的正周线：{' '}
              <span className="dn-tag bull">W-EMA150 $73,877.07（+4.41%）</span>
              、{' '}
              <span className="dn-tag bull">W-SMA20 $69,481.46（+11.02%）</span>
              、{' '}
              <span className="dn-tag bull">W-EMA20 $69,236.61（+11.41%）</span>
              、{' '}
              <span className="dn-tag bull">W-EMA200 $68,604.04（+12.44%）</span>
              、{' '}
              <span className="dn-tag bull">W-SMA200 $64,266.81（+20.03%）</span>
              。{' '}
              <span className="dn-em">
                MA 锚在 parquet 最末 bar 2026-08-23 00:05Z（收 $77,157.00）、
                跨全部 8 个年度文件 —— 2,542 根日 bar、364 根周 bar、所以
                包含 W-SMA200 在内的每一个窗口都可完整计算、无需种子。偏移按
                live 现货 $77,137.30 重算；水位按整数美元显示、偏移用精确
                序列值算。关键警告：周线重采样把开着的 08-23 W-SUN bar
                （$77,157.00）算了进去，所以上面每一根周 MA 都会在今晚 23:59Z
                结算时移动。
              </span>
            </p>

            <p>
              <span className="dn-signal">
                周期地板这条读数还在轨道上、也还不是事实
              </span>
              。W-SMA200 周期地板在{' '}
              <span className="dn-tag">$64,266.81</span>、进行中的 08-23 周
              bar 在它{' '}
              <span className="dn-tag bull">上方 +20.03%</span>（现货口径；
              按 parquet bar 收算是 +20.06%）。08-16 那根周收{' '}
              <span className="dn-tag bear">$62,876.00 以 −1.72% 破了地板</span>
              、在交易台的重算上、破位/重夺历史读作 08-16 破 → 08-23 重夺 ——
              <em>如果</em>这根 bar 收在这里。{' '}
              <span className="dn-em">
                它还没结算。离 23:59Z 那根印还有约 23.9h、要让破位维持成立
                需要收在 $64,266.81 之下、也就是从 $77,137.30 起一根 −16.69%
                的单 session 崩塌。这在算术上很远、但它仍然不等于「已记录」。
                本篇每一句假破陈述都以那根结算为条件；一旦收回地板之下、
                08-16 的破位就是成立的、这一段就是错的。
              </span>{' '}
              给这个水位一点尺度：parquet 历史里 164 根<em>已完成</em>周收
              中有 10 根坐在 200W 之下（6.10%）、上一对破位/重夺是 06-28 破
              → 07-05 重夺（同样一周）、当前 1.2006 的比率只在这条比率自身
              历史的{' '}
              <span className="dn-tag">22.4 分位</span> —— 按 BTC 的标准、
              高于周期地板 +20% 属于正常偏低、不算拉伸。30D close-to-close
              RV 是 <span className="dn-tag">43.18%</span>（30 根对数收益 /
              31 根收盘、σ × √365 × 100、收盘区间
              $62,792.30–$78,309.10；29 收益口径读 43.94%）。
            </p>

            <p>
              <span className="dn-signal">
                MTF 图从 08-22 那根印退化了、但没有转空
              </span>
              。00:01Z 扫描按文件自己的聚合口径读{' '}
              <span className="dn-tag">6 多 / 0 空 / 4 中性</span>、对 08-22
              备忘的 8 多 / 0 空 / 2 中性：15m 和 30m 掉出多头列、落到
              警示 / 中性、和 1d、1w 作伴，而 1h、4h、8h、12h、3d、1M 守住
              多头。{' '}
              <span className="dn-em">
                这里有两套口径、本篇把两套都印出来、不混着用：源文件的聚合块
                把 1h 算作多（给出 6 / 0 / 4），而逐周期列把 1h 读成警示 ——
                按那一列把下表十行加总，得到的是{' '}
                <b>5 多 / 0 空 / 5 中性</b>。1h 是两套口径唯一不一致的一行；
                这里每一句方向性陈述在两种口径下都成立，因为两种都没有产生
                任何一个空头分类。
              </span>{' '}
              仍然是{' '}
              <span className="dn-em">零空头分类</span> —— 退化是多 → 中性、
              不是多 → 空。超买极值实质性降温：4h RSI{' '}
              <span className="dn-tag">89.8 → 77.1</span>、8h{' '}
              <span className="dn-tag">89.5 → 83.0</span>、12h{' '}
              <span className="dn-tag">87.9 → 82.8</span>、1d 80.4 仍是最拉伸
              的一档、15m / 30m / 1h 回到 50.0 / 48.1 / 50.7。两根新的卖侧印：
              一根{' '}
              <span className="dn-tag bear">4h 水上死叉、2 根 bar 前</span>
              （DIF +3,063.9 —— DIF 在水上的早死叉、多转空的试探）和一根{' '}
              <span className="dn-tag bear">⚡ 12h TD9 SELL</span> @ $77,134。
              注意<em>没有</em>重复的是：08-22 备忘带的是 4h / 8h / 12h 同时
              TD9 SELL；今天 4h 和 8h 翻成 Buy 4 与 Buy 2 setup、只有 12h
              带着完成的卖。3d 这一档刚进云（
              <span className="dn-tag">云内 刚穿、70.8k–78.5k</span>）——
              第一档丢掉云上状态的周期、而 1w 已在云下 29 根 bar、云底在头顶
              $85.9k。regime 标签和 08-22 一样：{' '}
              <span className="dn-tag">5 / 9 反转 regime（JT&lt;0）</span> ——
              利均值回归、慎追趋势。背离：3 空（15m / 30m / 1h）对 4 多
              （15m / 30m / 8h / 1w）。
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>周期</th><th>偏向</th><th>收</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="neut">中性</td><td className="num">77,134</td><td className="num">50.0</td><td className="neut">死叉（水上）12b</td><td className="bear">云下 ↑77.2k 5b</td><td>Sell 2</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>30m</td><td className="neut">中性</td><td className="num">77,134</td><td className="num">48.1</td><td className="bear">死叉（水下）5b</td><td className="bear">云下 ↑77.4k 6b</td><td>Sell 2</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="neut">中性*</td><td className="num">77,134</td><td className="num">50.7</td><td className="neut">死叉（水上）34b</td><td className="bull">云上 ↓76.8k 143b</td><td>Buy 4</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="bull">多</td><td className="num">77,134</td><td className="num bear">77.1</td><td className="bear">死叉（水上）2b · 新</td><td className="bull">云上 ↓64.0k 31b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>8h</td><td className="bull">多</td><td className="num">77,134</td><td className="num bear">83.0</td><td className="bull">金叉（水下）18b</td><td className="bull">云上 ↓63.9k 11b</td><td>Buy 2</td><td>BULL hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="bull">多</td><td className="num">77,134</td><td className="num bear">82.8</td><td className="bull">金叉（水下）11b</td><td className="bull">云上 ↓64.6k 9b</td><td className="bear">⚡ TD9 SELL</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="neut">震荡</td><td className="num">77,134</td><td className="num bear">80.4</td><td className="bull">金叉（水下）5b</td><td className="bull">云上 ↓64.4k 5b</td><td>Sell 7</td><td>BULL hid</td></tr>
                <tr><td>3d</td><td className="bull">多</td><td className="num">77,134</td><td className="num">68.8</td><td className="neut">—</td><td className="neut">云内 70.8k–78.5k · 刚穿</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="neut">中性</td><td className="num">77,134</td><td className="num">56.1</td><td className="bull">金叉（水下）4b</td><td className="bear">云下 ↑85.9k 29b</td><td>Sell 1</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="bull">多</td><td className="num">77,134</td><td className="num">50.4</td><td className="neut">—</td><td className="bull">云上 ↓47.4k 30b</td><td>Sell 1</td><td>—</td></tr>
                <tr>
                  <td colSpan={8} className="note">
                    源：mtf_div_latest.html 2026-08-23 00:01Z scan（BJ 08:01）、
                    存档于 snapshots/2026-08-23-0007/。两套计数、分开印：源文件
                    的<em>聚合方向</em>块读 <em>6 多 / 0 空 / 4 中性、跨 10 个
                    周期</em>，而上面偏向列所用的<em>逐周期警示状态</em>加总是{' '}
                    <em>5 多 / 0 空 / 5 中性</em>。唯一不一致的一行是 1h
                    （聚合：多；逐周期：警示）。净读数「多周期共振偏多 · 顺势」。
                    regime <em>5/9 反转（JT&lt;0）</em>。头部告警：{' '}
                    <em>4h 水上死叉印在 2 根 bar 前（DIF +3,063.9）</em> 与{' '}
                    <em>⚡ 12h TD9 SELL @ $77,134</em>。扫描现货 $77,134、24h
                    −1.46%、24h H/L $78,832 / $76,510、qVol $9.97B —— 扫描的
                    −1.46% 与盘面的 −0.89% 同向、只是两个 24h 起点不同
                    （MTF 扫描从它自己 00:01Z 减 24h 的 bar 量、盘面从 08-22
                    00:07Z 那行量）、不是矛盾。*1h 归在短周期偏向块里；逐周期
                    列读 警示。收都是未收盘 bar、每个值按暂定读。
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className="dn-sec">
              Dealer 图{' '}
              <span className="dn-roman">III · 夹子松 −7.54M 到 +242.37M 脚算、仍然深 · flip $63,653、现货在上方 +21.18%（跌 17.48% 才够到）· $78,000 +32.23M 是正头顶的新盖子 · 28AUG26 现在 5.3 DTE、占 strip 的 36.17% · 前端有一根到期转负——前四根合计仍是 +5.34M</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子仍然是把这个盘面按住的东西、而且它松了一点
              </span>
              。按到期脚算的 strip 合到{' '}
              <span className="dn-tag bull">+242.37M</span>、对 08-22 存档的
              +249.91M —— 一根{' '}
              <span className="dn-tag">−7.54M</span> 的放松。文件自己的
              headline 合计印{' '}
              <span className="dn-tag">+238.6M</span>；本篇全程走脚算口径、
              因为那是 08-22 备忘用的口径、而这两个口径只在各自内部可比。{' '}
              <span className="dn-em">
                这是 post-08-16 谱系里第二深的正夹子、<b>不是</b>谱系极值。
                在全程使用的同一套脚算口径上——也是这些印唯一可比的口径——
                整条谱系更深的读数是 07-22 +313.63M 和 07-23 +283.46M。07-24
                脚算是 +235.95M、因此坐在今天<em>下方</em>、不是上方；它那个
                +262.1M 是另一套口径下的 headline 值、不是可比的更深印。
              </span>{' '}
              0-γ flip 上移到{' '}
              <span className="dn-tag">$63,653（从 $63,288、+$365）</span>。
              现货 $77,137.30 坐在{' '}
              <span className="dn-tag bull">flip 上方 +21.18%</span>
              （77,137.30 / 63,653 − 1 = 21.1841%）；GEX 文件自己的
              「dist to flip」读{' '}
              <span className="dn-tag bull">+21.6%</span>、取的是它的 Deribit
              index $77,382（比 live 现货高 $244.70；77,382 / 63,653 − 1 =
              21.5685%）—— 两个参考都是正、都远在上方。{' '}
              <span className="dn-em">
                按对做空真正重要的方向说：flip 坐在现货下方 17.48%
                （1 − 63,653 / 77,137.30），所以够到它需要的是一根 17.48%
                的下跌、不是 21%。
              </span>{' '}
              这比 08-22 备忘的 18.84% 近了、但只是因为价格跌了；这条腿仍然
              是本子里离武装最远的价格条件。
            </p>

            <p>
              前十道墙又全部为正、合计{' '}
              <span className="dn-tag bull">+184.93M</span>、占 +242.37M 脚算
              strip 的一部分：{' '}
              <span className="dn-tag bull">$80,000 +38.29M</span>（最重、
              从 +41.20M 松下来）、{' '}
              <span className="dn-tag bull">$78,000 +32.23M</span>、{' '}
              <span className="dn-tag bull">$70,000 +20.24M</span>、{' '}
              <span className="dn-tag bull">$82,000 +19.28M</span>、{' '}
              <span className="dn-tag bull">$75,000 +15.20M</span>、{' '}
              <span className="dn-tag bull">$72,000 +13.49M</span>、{' '}
              <span className="dn-tag bull">$74,000 +13.12M</span>、{' '}
              <span className="dn-tag bull">$76,000 +12.82M</span>、{' '}
              <span className="dn-tag bull">$84,000 +10.35M</span>、{' '}
              <span className="dn-tag bull">$85,000 +9.91M</span>。{' '}
              <span className="dn-signal">
                现货周围的地形变了：$78,000 +32.23M 现在是板上第二重的墙、
                而且它就在印上方 $863
              </span>
              {' '}—— 叠上 MTF 读的 D-EMA400 ≈$78,213 和 W-EMA100 $78,435.81、
              这就是一层挤在 $436 之内的三深盖子、24h 高 $78,810.00 穿过去
              测过、失败了。下面 $76,000 +12.82M 和 $75,000 +15.20M 夹住
              08-22 备忘画的那条回撤带、$70,000 +20.24M 是底下第一道重地板。
              按到期看、前端变薄、部分转向：{' '}
              <span className="dn-tag">23AUG26 0.3 DTE +5.76M</span> 今日
              08:00Z 结算（本锚之后 7h53m）、{' '}
              <span className="dn-tag bear">24AUG26 1.3 DTE −1.21M</span>
              （从 08-22 的 +2.66M 翻过来 —— 是对那篇备忘而言新出现的负值
              前端到期、<em>不是</em>谱系首次：post-08-16 谱系一开局就有
              17AUG26 1.3 DTE −1.10M、印在 08-16 备忘上、源自那一 session
              存档的 GEX 面板）、25AUG26 2.3 +0.79M、26AUG26 3.3 −0.00M ——{' '}
              <span className="dn-em">
                前四根合计仍是 +5.34M 净、所以前端是更薄、更混、不是负。
                这里不声称任何「谱系首次」的到期符号序数：整条谱系还没有一份
                有源的到期符号台账、把它建起来是一条未结事项。
              </span>{' '}
              重量还在老地方：{' '}
              <span className="dn-tag bull">28AUG26 5.3 DTE +87.66M</span> ——{' '}
              <span className="dn-em">占脚算 strip 的 36.17%、从 08-22 的
              +82.92M / 33.18% 上来、而且这是当前 IV 下的快照贡献、不是保证
              的 roll-off；在没有对冲头寸、现货或 IV 变化的情况下、它会在
              28AUG 结算时从板上掉下来</span> —— 然后是 25SEP26 33.3 +76.09M、
              25DEC26 124.3 +31.46M、4SEP26 12.3 +18.90M、30OCT26 68.3
              +9.87M、26MAR27 215.3 +6.53M、11SEP26 19.3 +4.81M、25JUN27
              306.3 +1.71M。
            </p>

            <p>
              IV 中位数跨{' '}
              <span className="dn-tag">1,038 合约是 46.7%</span>、从 08-22
              跨 1,070 合约的 49.1% 下来 —— 一根 −2.4pt 的 vol 降温、伴随
              −32 的合约计（22AUG26 那 +7.68M 的块在 08-22 08:00Z 结清、
              26AUG26 这条线是新的、还空着、9 calls / 45 puts）。对 30D
              close-to-close RV 的{' '}
              <span className="dn-tag">43.18%</span>、链层面的 richness 是{' '}
              <span className="dn-tag">≈ +3.52pt</span> —— 薄。{' '}
              <span className="dn-em">
                这是跨 N 个合约的链中位数、<b>不是</b>可交易价差；到期层面和
                行权价层面的 vega、skew 与期限结构都没载入、所以 vol 读数
                停在 framework-only。Put/call OI 比 0.59（call OI 249,355 BTC
                对 put OI 147,852 BTC）作为原始文件读数带过、不附加任何仓位
                推断。
              </span>
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 周末重渲染 —— 面板是新的、数据不是；每一根日频行都还是 08-22 备忘带过的那根周五 08-21 印 · 跨资产维持 IDIOSYNCRATIC 0.220、BTC 7d +22.36% 领先 NQ −2.57% 达 24.93pt、样本内与金属的共动强于与股指——只是共动、不是驱动</span>
            </h2>

            <p>
              <span className="dn-signal">
                这篇备忘里没有新的宏观信息、诚实的做法是在引用任何一个数字
                之前先说清楚
              </span>
              。仪表盘渲染于 2026-08-22 22:16Z —— 只比本锚早约 1.85h、
              <em>渲染</em>是全谱系最新的一次 —— 但 08-22 是周六、FRED 整个
              周末没发东西、所以每一根日频 Tier-1 行都是 08-22 备忘已经带过
              的那根周五 08-21 印。{' '}
              <span className="dn-em">
                这块面板按「未变」读、不按「已更新」读。对比两篇备忘的读者
                应该看不到宏观增量、因为本来就没有、而不是因为盘面安静了。
              </span>{' '}
              水位：美 10Y 名义{' '}
              <span className="dn-tag bear">4.69%（+4.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+1.98</span>、episodic +0.69 ——
              RISK-OFF、也是板上<em>最高的新鲜日频 Tier-1</em> regime z。它
              不是板上显示的最高值：JGB 10Y 带的是 +2.42、但那是一条月度、
              陈旧 82 天的序列、本篇不依赖它。10Y TIPS 实际{' '}
              <span className="dn-tag bear">2.35%（0.0bp）</span>、regime z
              +1.82、episodic −1.03 —— RISK-OFF。5Y5Y BE 通胀{' '}
              <span className="dn-tag">2.34%（0.0bp）</span>、regime z +1.76、
              episodic <span className="dn-tag bear">+1.58</span> —— episodic
              被标。HY OAS{' '}
              <span className="dn-tag bull">2.75%（+2.0bp）</span>、regime z
              −0.74 —— 仍松。MOVE 债券波动{' '}
              <span className="dn-tag">73.4（+0.22）</span>、regime z +0.02 ——
              中性。DXY{' '}
              <span className="dn-tag bull">98.80（−0.10）</span>、episodic z{' '}
              <span className="dn-tag bull">−1.81</span> —— episodic 偏软被标。
              Fed 净流动性{' '}
              <span className="dn-tag bear">$5.792T（−0.004T）</span>、regime z
              −1.22、episodic z{' '}
              <span className="dn-tag bear">−2.45</span> —— RISK-OFF、还在
              抽水、是面板上对 BTC 最不友好的一行。NFCI −0.559（陈旧 8 天、
              RISK-ON）。USD/JPY 158.86、美日 10Y 利差 2.02%（+4.0bp）、
              USD/CNY 6.7118、episodic z −2.57。{' '}
              <span className="dn-em">
                合起来：利率紧、实际收益率紧、信用与波动松、美元软、Fed
                流动性在抽 —— 和 08-22 一模一样的分裂读数。这是一个 BTC 已经
                无视了一整周的敌意背景；那个背离本身才是重点、而检验它的是
                下一根宏观印、不是这次重渲染。
              </span>{' '}
              JGB 10Y 2.67% 带着 EXTREME RISK-OFF 标签、但它在一条{' '}
              <span className="dn-tag stale">月度、陈旧 82 天</span>的序列上
              —— 不要依赖它。
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th><th>水位</th><th>Δ</th><th>regime z</th><th>episodic z</th><th>读数</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>美 10Y 名义</td><td className="num">4.69%</td><td className="num bear">+4.0bp</td><td className="num bear">+1.98</td><td className="num">+0.69</td><td className="bear">RISK-OFF · 最高的新鲜日频 Tier-1 regime z（陈旧月度 JGB 读更高 +2.42）</td></tr>
                <tr><td>10Y TIPS 实际</td><td className="num">2.35%</td><td className="num">0.0bp</td><td className="num bear">+1.82</td><td className="num bull">−1.03</td><td className="bear">RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.34%</td><td className="num">0.0bp</td><td className="num">+1.76</td><td className="num bear">+1.58</td><td className="neut">无标签 · episodic 被标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.75%</td><td className="num bear">+2.0bp</td><td className="num bull">−0.74</td><td className="num">+0.19</td><td className="bull">松</td></tr>
                <tr><td>芝加哥联储 NFCI</td><td className="num">−0.559</td><td className="num">−0.00</td><td className="num bull">−1.46</td><td className="num bull">−1.29</td><td className="stale">RISK-ON · 陈旧 8d</td></tr>
                <tr><td>MOVE 债券波动</td><td className="num">73.4</td><td className="num bear">+0.22</td><td className="num">+0.02</td><td className="num">−0.36</td><td className="neut">中性</td></tr>
                <tr><td>美元指数（DXY）</td><td className="num">98.80</td><td className="num bull">−0.10</td><td className="num">−0.17</td><td className="num bull">−1.81</td><td className="bull">regime 中性 · episodic 偏软</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.792T</td><td className="num bear">−0.004T</td><td className="num bear">−1.22</td><td className="num bear">−2.45</td><td className="bear">RISK-OFF · 抽水 · episodic</td></tr>
                <tr><td>USD/JPY</td><td className="num">158.86</td><td className="num bull">−0.02</td><td className="num">+0.53</td><td className="num">−0.75</td><td className="neut">无标签</td></tr>
                <tr><td>美日 10Y 利差</td><td className="num">2.02%</td><td className="num bear">+4.0bp</td><td className="num">−0.17</td><td className="num">+0.69</td><td className="neut">中性</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7118</td><td className="num bull">−0.01</td><td className="num bull">−1.56</td><td className="num bull">−2.57</td><td className="bull">无标签 · episodic</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月度）</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">月度 · 陈旧 82d · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、166 rows、生成于 2026-08-23 00:00Z
              —— <span className="dn-em">一条 7 天滚动读数、不是当日读数</span>
              ）。非对角均值{' '}
              <span className="dn-tag">|r| 0.220</span>、和 08-22 的 0.219
              基本没变、稳稳落在{' '}
              <span className="dn-tag">IDIOSYNCRATIC</span> 带内（&lt;0.25）。
              BTC 的相关性排名顶端是金属、单只股票混在中段：PLAT{' '}
              <span className="dn-tag">+0.307</span>、SILVER{' '}
              <span className="dn-tag">+0.241</span>、MSFT{' '}
              <span className="dn-tag">+0.238</span>、META{' '}
              <span className="dn-tag">+0.184</span>、GOLD{' '}
              <span className="dn-tag">+0.183</span>、PALL +0.174、AMZN
              +0.149、COPPER +0.143、EUR +0.136、JPY −0.131、以及{' '}
              <span className="dn-tag">NQ +0.059</span> 和{' '}
              <span className="dn-tag">SP500 +0.050</span> —— 两条宽基股指
              坐在名单末端、但{' '}
              <span className="dn-em">
                说「股票排最后」是错的：MSFT +0.238 排第三、META +0.184 排
                第四、两个都在 GOLD +0.183 之上
              </span>
              。7d 表现：{' '}
              <span className="dn-tag bull">BTC +22.36%</span> 对{' '}
              <span className="dn-tag bear">NQ −2.57%</span>、{' '}
              <span className="dn-tag bear">SP500 −1.45%</span>、{' '}
              <span className="dn-tag bear">JP225 −4.08%</span>、{' '}
              <span className="dn-tag bear">NVDA −3.96%</span>、{' '}
              <span className="dn-tag bear">META −6.74%</span>、{' '}
              <span className="dn-tag bear">MSFT −2.67%</span>、TSLA{' '}
              <span className="dn-tag bull">+5.84%</span>、AAPL +1.28%。实物
              资产偏强：URNM{' '}
              <span className="dn-tag bull">+10.55%</span>、PLAT +7.98%、
              BRENT +7.14%、CL +6.77%、SILVER +6.04%、GOLD +5.08%。{' '}
              <span className="dn-em">
                BTC 在 7d 上领先 NQ +24.93pt、从 08-22 备忘的 +26.63pt 收窄、
                纯粹因为 BTC 吐回了一根 session。样本能撑住的、也就到这里
                为止：在这 166 根小时行上、BTC 与选定金属的共动强于与 NQ 或
                SP500 的共动。这是一句关于某一个 7d 窗内同期共动的陈述 ——
                它<em>不</em>指认是什么在驱动这波行情、这里也没有载入任何
                hedge-ratio、稳定性或样本外分析、所以它对「这波行情能不能用
                TradFi 工具对冲」什么都没有确立。它和上面那块敌意宏观面板
                「到目前为止还撑得住」是相容的；它不解释为什么。
              </span>{' '}
              BTC/NQ 比率、max-pain 与 NTT pivot 仍未载入 —— framework-only。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 本子空仓 · 回撤多头仍未武装 —— 两条腿都没触发：08-23 周线没结算、价格停在带顶上方 $600.02（24h 低 $76,600.02 对 $76,000）· 追空按下不表、价格腿还差 17.48% · 08-19 scout 维持 EXPIRED UNFILLED、本篇不再翻案</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子这一 session 什么也没做、而这是正确的结果、不是错过的
                结果
              </span>
              。08-22 备忘在 $75,000–$76,000 墙带上框了一个回撤多头、明确
              未武装、挂在两条腿上：08-23 W-SUN 结算在 200W 地板之上、以及
              一根守在带内的收。两条都没触发。周线还开着、还有约 23.9h 要
              跑。价格下到{' '}
              <span className="dn-tag">$76,600.02 @ 2026-08-22 10:23Z</span>
              {' '}——{' '}
              <span className="dn-em">离带顶 $600.02、也就是 0.79%</span>
              {' '}—— 然后掉头往上、没有进去。没有什么要辩护、也没有什么要
              后悔：一个没被碰到的未武装框架，就只是一个未武装框架。{' '}
              <span className="dn-em">
                这一 session 真正改变的是这套 setup 的质地、而且两边都改。
                丢掉 W-EMA50 / W-SMA150 台阶意味着在带内进场现在变成「在一层
                已确认的盖子下面买」、而不是「回踩支撑买」—— 背景更差。但
                它同时也意味着第一道头顶目标更近、也更清晰。带、止损和目标
                不因此挪动；按盘面重画水位、和追高是同一个错误、只是方向
                相反。
              </span>
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · 回撤再进场框架 · <b>未武装</b> —— 两条腿都没触发 · 价格到过离带 $600.02 的地方然后掉头</span>
              <div className="dn-trade-name">
                $75,000–$76,000 墙带上的回撤多头 —— 从 08-22 原样带过来；
                周线结算仍未到、带也从没被进过
              </div>
              <div className="dn-thesis">
                结构性理由没变、而且仍然压在证据上而不是希望上：一条 10 of
                10 全正的日线 MA 阶梯、一个{' '}
                <b>+242.37M 脚算的 dealer 夹子</b>、前十道墙全正、retail 在
                一根 +22.30% 的周之后散到 50.18%（离 7d 峰 −18.82pt）、以及
                一根在 200W 周期地板上方 +20.03% 的进行中周 bar。反对追价的
                理由同样没变、而且又硬了一条：funding 已经焊在 +10.95% 封顶
                连续 2,360 根采样行、总量 OI 在一根下跌日里净口径上没缩
                （+4.8 BTC；这条 feed 看不见 gross 换手）、现货现在丢掉了
                W-EMA50 $77,226.37 / W-SMA150 $77,442.48 这层刚刚短暂守住的
                台阶。<b>两条武装腿都没触发。</b>腿 1 —— 08-23 23:59Z 的
                W-SUN 结算在 200W 之上 —— 今晚之前无法评估。腿 2 —— 一根守在
                $75,000–$76,000 之内的收 —— 被逼近到 $600.02 然后被拒。框架
                按同样的水位带过去；它不会为了迎合一个从没下来过的价格而
                往上重画。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">未武装 · 腿 1 待定（周线开到 2026-08-23 23:59Z）· 腿 2 未触发（24h 低 $76,600.02 = 带顶上方 $600.02 / 0.79%）</span></div>
                <div><span className="dn-lvl-k">武装条件（两条都要）</span><span className="dn-lvl-v bull">08-23 W-SUN 收 &gt; W-SMA200 $64,266.81（23:59Z 结算）AND 一根 1h 收守在 $75,000–$76,000 之内 —— 这条带由 $75,000 +15.20M 与 $76,000 +12.82M 两道墙夹住</span></div>
                <div><span className="dn-lvl-k">进场</span><span className="dn-lvl-v bull">武装印上 ≈$76,000 · 0.2R · 带上方不追；一根从没到过带里的印，就是交易台不做的那笔交易</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1d 收 &lt; $72,992.40 —— 08-21 的日线低、也是突破腿之前最后一个 pivot、就坐在 $72,000 +13.49M 墙上方 · 止损在现货下方 5.37% —— 要跌 5.37% 才够到它（等价地说、现货在止损上方 +5.68%）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$80,000（+38.29M 最重的墙 · 现货距它 +3.71%）然后 W-SMA50 $81,773.47（+6.01%）—— 注意 W-SMA50 已经从 08-22 备忘的 $81,789 挪过、今晚结算还会再挪</span></div>
                <div><span className="dn-lvl-k">头顶第一道要清的</span><span className="dn-lvl-v bear">丢掉的那层台阶 W-EMA50 $77,226.37 / W-SMA150 $77,442.48、然后是三深盖子 $78,000 墙 / D-EMA400 ≈$78,213（MTF 读数）/ W-EMA100 $78,435.81 —— 24h 高 $78,810.00 穿过去测过、失败</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R（示意）：</b>进场 ≈$76,000、止损 $72,992.40 = $3,007.60
                的风险；第一目标 $80,000 = $4,000 的回报 ≈{' '}
                <b>1.33:1</b>（4,000 / 3,007.60 = 1.3299）。对一个 0.2R 的
                scout 来说这很薄、而且它<em>按构造</em>就薄 —— 这条带画在
                交易台想要这笔交易的地方、不是画在算术好看的地方。{' '}
                <b>硬规矩：</b>不因为价格差 $600 就挪水位。如果盘面再也不回
                这条带，框架就到期未成交、并如实记录 —— 和把 08-19 scout
                记成到期、而不是把它往上重画 20% 的，是同一条纪律。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 追空 · <b>按下不表</b> —— 价格腿离武装 17.48%（比 08-22 的 18.84% 近、只因为价格跌了）· γ 腿松到 +242.37M、仍是 post-08-16 谱系第二深</span>
              <div className="dn-trade-name">
                追空 —— 再一次按下不表；丢台阶不是做空信号、本篇也不把它
                当信号
              </div>
              <div className="dn-thesis">
                会把一笔空单摆上桌的两个条件是价格腿（现货进到 0-γ flip 的
                够得着范围、在那里 dealer 本子从抑制转为放大）和 γ 腿（正夹子
                在解开）。两条都不近。flip 在{' '}
                <b>$63,653、现货下方 17.48%</b> —— 够到它需要一根 17.48% 的
                下跌、对 08-22 的 18.84%；这条腿变近只因为价格跌了 $845、
                不是因为结构变了。夹子松了 −7.54M 到{' '}
                <b>+242.37M 脚算</b>、这是 post-08-16 谱系里第二深的正印、
                而且 <b>不是谱系极值</b> —— 在全程使用的脚算口径上、07-22
                +313.63M 与 07-23 +283.46M 在它之上、而 07-24 脚算是 +235.95M、
                在它之下。与此同时、会引诱人做空的那些证据 —— 丢掉的台阶、
                4h 死叉、12h TD9 SELL、3d 进云、RSI 从 ~90 降温 —— 全部是
                均值回归证据、而且落在一张{' '}
                <b>6 多 / 0 空</b>（聚合口径；逐周期列加总是 5 多 / 0 空）
                的 MTF 图里、两种口径下都是零空头分类、日线阶梯还全正。{' '}
                <em>
                  把一根 −0.89% 的日子卖进一本 +242.37M 的正 γ 本子、在周期
                  地板上方 20%、retail 已经 50/50 —— 这是一笔没有任何结构性
                  支撑的交易。
                </em>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">按下不表 —— 本快照下不考虑任何空单</span></div>
                <div><span className="dn-lvl-k">价格腿（未满足）</span><span className="dn-lvl-v bear">现货进到 0-γ flip $63,653 的够得着范围 —— 当前它在现货下方 17.48%；现货在它上方 +21.18%</span></div>
                <div><span className="dn-lvl-k">γ 腿（未满足）</span><span className="dn-lvl-v bear">脚算 aggregate GEX 转负或向零塌 —— 当前 +242.37M（headline +238.6M）、对 08-22 松了 −7.54M 但仍深；5.3 DTE 的 28AUG26 +87.66M / 36.17% roll-off 是最近的、可能推动这条腿的结构性催化</span></div>
                <div><span className="dn-lvl-k">不要做</span><span className="dn-lvl-v">不要把 W-EMA50 / W-SMA150 台阶的丢失、新出的 4h 水上死叉或 12h TD9 SELL 读成做空触发 —— 它们是完整多头结构内部的均值回归印</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>γ 腿有一个带日期的候选、价格腿没有。
                28AUG26 当前贡献 +87.66M —— 脚算 strip 的 36.17% —— 在当前
                IV 下；在没有对冲头寸、现货或 IV 变化的情况下、那份贡献会在
                28AUG 结算时掉下来、夹子实质变薄。这是一条<em>观察</em>、
                不是预测：strip 在连续重新定价、一个快照份额不是保证的
                roll-off。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · 08-19 回补反弹 scout · EXPIRED UNFILLED —— 08-22 已记录、未变、本篇不再翻案</span>
              <div className="dn-trade-name">
                08-19 scout —— 作为到期结清；留在本子里只因为它暴露出来的
                那个未结设计缺陷
              </div>
              <div className="dn-thesis">
                08-19 那个 scout（进场 ≈$64,632、止损 $63,301、目标 $66,343 /
                $66,391）在 08-22 被记为 <b>EXPIRED UNFILLED</b>、机会成本
                10.03R 毛 / 按声明的 0.2R 规模 ≈2.01R、两个目标都标在
                2026-08-19 15:05Z。本 session 没有任何东西改变这条记录、
                本篇也不重新论证它。真正<em>活着</em>的是它暴露的缺陷：这笔
                交易从没武装、因为腿 2 要求一个可采信的 SM 净多、而 SM feed
                是在一根 roster re-sync 里生出它的净多的。{' '}
                <b>
                  这件事现在已经连续三天发生 —— 08-20 07:06Z、08-21 06:21Z、
                  08-22 06:41Z —— 把这条发现从「一个人造物」升级成「这个字段
                  就是这么运作的」。
                </b>{' '}
                任何未来写在 <code>net_btc</code> 上、把它当水位或当增量的
                门，都会继续产出这个结果。设计修复作为未结事项带走、不在
                备忘中途打补丁。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">EXPIRED UNFILLED · 08-22 结清 · 不在更高价重画 · 本 session 不再追加任何账</span></div>
                <div><span className="dn-lvl-k">未结设计事项</span><span className="dn-lvl-v bear">SM roster re-sync 在 08-20 07:06Z（long_traders 587 → 1,388）、08-21 06:21Z（1,336 → 2,497）、08-22 06:41Z（2,260 → 4,976）—— 在 <code>net_btc</code> 上写二元决策门是不成立的；换成 roster 稳定窗检验、或者干脆去掉这条腿</span></div>
              </div>
              <div className="dn-gating">
                <b>记账说明：</b>这些机会成本数字是在一笔从未进场的交易上做
                的算术、为流程问责而记、不是业绩主张。谱系 MFE 台账不存在、
                所以这次错过仍然无法和以往的错过排序 —— 那本台账是 08-22
                审计留下的未结事项。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 08-23 23:59Z 的 W-SUN 结算是唯一一根有日期、且真正重要的印、离现在约 23.9h · 丢台阶是新增观察项 · 本子空仓、回撤未武装、追空按下不表</span>
            </h2>

            <p>
              08-22 那几条条件的结果：<b>回撤武装条件两条腿都没触发</b>
              （周线还开着；带被逼近到 $600.02 然后被拒）；<b>追空维持按下
              不表</b>、价格腿从 18.84% 走到 17.48%、纯粹靠价格；<b>08-19
              scout 维持已平</b>、到期未成交；<b>28AUG26 那块夹子没有
              roll off</b>、反而把份额从 33.18% 长到一个略小 strip 的
              36.17%；以及<b>08-23 W-SUN 结算还没发生</b>、所以一周假破
              这条读数正好停在上一篇留下的地方 —— 在轨道上、未记录。上一篇
              没预料到、但还是印了的有两件：现货<b>丢掉了刚刚重夺的 W-EMA50
              / W-SMA150 台阶</b>、以及 funding pin <b>在一根下跌日里收紧到
              100% 封顶占用</b>、同时总量 OI 在净口径上保持持平。{' '}
              <em>
                一条条件干净结清（什么都没武装、本子保持空仓、而这是对的）、
                一条还在等它那根有日期的印、两条新的不利结构性事实进了本子。
                这里没有任何一条是反转信号；所有这些都是不要追价的理由。
              </em>
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td><b>08-23 W-SUN 周线结算</b>（那根有日期的印 · 距本锚约 23.9h）</td><td className="bull">2026-08-23 23:59Z 收对 W-SMA200 $64,266.81 · 当前在上方 +20.03%；要让 08-16 破位维持成立需要一根 −16.69% 的单 session 崩塌</td><td>收在上方就把 08-16 的破位从「成立」转成一次已记录的一周假破、并触发回撤多头的腿 1；收在下方则破位维持成立、本篇每一句有条件的假破陈述都作废</td></tr>
                <tr><td>回撤多头 —— 武装（两条腿）</td><td className="bull">周线结算在 200W 之上 AND 一根 1h 收守在 $75,000–$76,000 之内</td><td>≈$76,000 上 scout 多 0.2R、止损 1d 收 &lt; $72,992.40、目标 $80,000 然后 W-SMA50 $81,773.47 · 带上方不追</td></tr>
                <tr><td><b>台阶重夺</b>（新增观察）</td><td className="bull">1d 收回到 W-SMA150 $77,442.48 之上（以及 W-EMA50 $77,226.37）</td><td>会重新确立 08-22 的台阶读数、把本 session 的丢失降格成一根上影；在那之前这一对是头顶阻力、回撤论点就是在盖子下面买</td></tr>
                <tr><td><b>盖子测试</b>（新增观察）</td><td className="bear">1d 收在叠起来的 $78,000 墙 / D-EMA400 ≈$78,213 / W-EMA100 $78,435.81 这条带之上</td><td>24h 高 $78,810.00 穿过三条都失败了；一根日收站上这条带才是第一份真正的延续证据、并会把回撤框架作为「画得太低」退役</td></tr>
                <tr><td>结构性证伪</td><td className="bear">1d 收 &lt; $72,992.40（08-21 日线低、在 $72,000 +13.49M 墙之上）· 在现货下方 5.37% —— 要跌 5.37% 才够到（现货在其上方 +5.68%）</td><td>突破腿就是一次失败走势；回撤框架被取消而不是被武装、整个多头结构从头重估</td></tr>
                <tr><td>funding 脱钉</td><td className="bull">funding 持续一段印在 +10.95% 封顶之下、最好同时 OI 在降</td><td>会缓解本子里最差的那一条（连续 2,360 根封顶采样行、24h 窗内 1,441 / 1,441 采样行）、并实质改善回撤进场价；一本钉顶付最高 carry、砸进一个净口径持平的总量 OI 底仓 —— 脆弱在这里、不在价格</td></tr>
                <tr><td>28AUG26 γ roll-off</td><td className="bear">+87.66M = 脚算 +242.37M strip 的 36.17%、5.3 DTE、2026-08-28 08:00Z 结算</td><td>这是当前 IV 下的快照贡献、不是保证的 roll-off；在没有对冲头寸 / 现货 / IV 变化的情况下它会实质削薄夹子、也是最近的、可能推动追空 γ 腿的催化</td></tr>
                <tr><td>SM feed（设计缺陷 · 不是交易条件）</td><td className="stale">roster 在 08-20 07:06Z、08-21 06:21Z、08-22 06:41Z re-sync —— 连续三天；本篇 24h Δnet 的 98.12% 是 08-22 那次 re-sync</td><td>本篇没有任何一个门写在 <code>net_btc</code> 上；唯一带过的 SM 陈述是那段无人造物的 17h26m 窗（Δnet −636.8、−1.94%）、而且它是描述性的、不是决定性的</td></tr>
                <tr><td>宏观再生长 / 利率过滤</td><td className="stale">面板未变 —— 周五 08-21 印的周末重渲染：10Y 4.69%（z +1.98）、TIPS 实际 2.35%、HY OAS 2.75%、MOVE 73.4、Fed 净流动性 $5.792T 在抽（episodic z −2.45）</td><td>一次重渲染既没有可做的宏观动作、也不需要；下一根美国日频印才是第一个能推动这块面板的东西。BTC 对 NQ 的 r = +0.059 只说明这两者在这个 7d 样本里几乎没有共动 —— 它并不指认驱动因素</td></tr>
              </tbody>
            </table>

            <p>
              真正会改写<em>这一篇</em>的、只有一条线：{' '}
              <span className="dn-signal">
                今晚 23:59Z 的 W-SUN 结算会不会把 08-16 的破位记成一次一周
                假破 —— 然后盘面会不会回到 $75,000–$76,000 带让交易台买它、
                还是重夺 W-SMA150 $77,442.48 那层台阶、把这个框架像 08-19
                scout 那样留成未成交
              </span>
              。其余全是背景。结构在证据上仍然偏多：日线阶梯 10 of 10 全正、
              dealer 本子是 +242.37M 的正 γ、每一道顶墙都正、retail 在一根
              +22.30% 的周之后坐在 50/50、周期地板还在 16.69% 之外。盘面对
              「在这里进场」仍然不友好：funding 焊在封顶 2,360 根采样行、
              总量 OI 在一根下跌日里净口径未动、现货回到周线台阶之下、头顶
              $863 处那层三深盖子已经打回过一次测试。<em>这两个读数并不
              矛盾 —— 它们描述的是一个处在坏价格上的多头结构</em>、这也正是
              08-22 备忘从另一个方向、在高 $845 的地方得出的同一个结论。
              本子保持空仓、回撤多头维持在 $75,000–$76,000 定义好且未武装、
              追空维持按下不表、交易台等那根结算。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2 —— 已过 codex 敌对式审计
            </span>
            <b>状态：v2 中文版 —— 已过 codex 敌对式审计。</b>STAGE B 对 v1
            草稿跑了 codex 敌对但公允的一遍、返回{' '}
            <b>BLOCK-CRITICAL —— 1 CRITICAL + 5 MAJOR + 6 MINOR</b>。完整记录
            （含审计方的证据、confirmed-clean 清单与未结事项）在{' '}
            <code>audits/2026-08-23-desk-note.md</code>、本阶段未改动它。全部
            12 条 findings 都已应用、并逐条用 grep 收口：对每一条、把关键的
            错误主张字符串及其语义变体在<em>整个</em>文件上搜一遍——不只是
            审计引用的行——修完再搜一遍，只有「带修前语义的命中数 = 0」才记
            RESOLVED。EN 版按 finding 逐条列出了 pattern / 修前命中 / 修后
            命中；本中文版与 EN v2 数值零漂移、承载同一套口径与同一套警告。
            <br /><br />
            <b>12 条 findings 的中文摘要：</b>{' '}
            <b>DN-001（CRITICAL）</b>「谱系首个负值近端到期块」是假的 ——
            post-08-16 谱系一开局就有 17AUG26 1.3 DTE −1.10M；序数已删除、
            24AUG26 改述为「对 08-22 而言新出现的负值前端到期」、并披露
            尚无有源的到期符号台账。{' '}
            <b>DN-002（MAJOR）</b>两个 OI 跨度是从滚过去的 00:08Z live 行算
            的、不是声明的 00:07Z pin：48h 现为 <b>−1,752.8 / −1.63%</b>
            （原 −1,787.5 / −1.66%）、3d 峰差现为 <b>−5,185.6</b>
            （原 −5,184.9；−4.67% 不变）；数据来源条带新增端点断言。{' '}
            <b>DN-003（MAJOR）</b>§III 标题称「strip 前端已转负」、而显示的
            前端仍是净正：前四根（+5.76 / −1.21 / +0.79 / −0.00）合计{' '}
            <b>+5.34M</b>、标题与正文改为「一根前端到期转负、前四根仍合计
            +5.34M」。{' '}
            <b>DN-004（MAJOR）</b>谱系对照台账混用了 headline 与脚算两套
            GEX 口径：在脚算口径上、07-22 <b>+313.63M</b>、07-23{' '}
            <b>+283.46M</b> 在今天之上，而 07-24 脚算 <b>+235.95M</b> 在今天
            之下；两处台账都已改为单一脚算口径、07-24 不再作为更深对照、
            其 +262.1M 明确标为另一口径的 headline 值、不可比。{' '}
            <b>DN-005（MAJOR）</b>一个端点持平的 OI 增量被拔高成「没人去
            杠杆」「什么都没去杠杆」「没有离场」：pin 只证明总量 OI
            105,861.784 → 105,866.613、净 +4.829 BTC，它不暴露 gross 开平或
            账户级换手；全部相关位置改为<b>总量 OI 在净口径上没有收缩</b>、
            并明确写出 gross 换手在这条 feed 里不可观测。{' '}
            <b>DN-006（MAJOR）</b>跨资产叙述超出了 7d 相关性能证明的范围：
            「股票排最后」被 MSFT +0.238（第三）与 META +0.184（第四）自证
            为假、r = +0.059 不能确立「内生于 crypto」、也没有任何 hedge
            分析支持「无法用 TradFi 对冲」；现在只陈述样本内共动、并明确说
            它既不指认驱动、也不确立对冲有效性。{' '}
            <b>DN-007（MINOR）</b>SM 基准被误标成「08-22 备忘」：+15,810.5
            是精确 T−24h 的 00:07Z 行、不是那篇备忘的 00:39Z 锚（+15,993.8、
            对应 Δnet +16,196.3）；tile 改题为「SM Δ · 精确 24h」、两处都
            披露另一口径。{' '}
            <b>DN-008（MINOR）</b>MTF 偏向列加总与它自己写的 6 / 0 / 4 不符：
            两套口径现在分开印、分别标注 —— 源文件聚合块 <b>6 多 / 0 空 /
            4 中性</b>、逐周期警示状态列加总 <b>5 多 / 0 空 / 5 中性</b>、
            唯一不一致的一行是 1h。{' '}
            <b>DN-009（MINOR）</b>止损距离用了下跌口径的分母、却描述成
            「现货在其上方的百分比」：两处都改为「止损在现货下方 5.37% ——
            要跌 5.37% 才够到（现货在其上方 +5.68%）」。{' '}
            <b>DN-010（MINOR）</b>「按下不表第四个 session」是一个无范围且
            错误的序数（库里已记录 08-16 / 08-17 / 08-18 / 08-19 / 08-22）：
            改为「再一次按下不表」。{' '}
            <b>DN-011（MINOR）</b>把一个 24h 闭区间窗称作「全部 1,441 分钟」：
            1,441 根采样行跨的是 1,440 根分钟到分钟间隔；同一条行数与间隔的
            区分也应用到封顶连续段 —— 2,360 根连续<em>采样行</em>（2,359
            分钟）、不是 2,360 分钟。{' '}
            <b>DN-012（MINOR）</b>美 10Y 的 +1.98 被称作「板上最紧的 regime
            z」而无范围限定：同页表格里 JGB 10Y 是 +2.42；正文与表格单元格
            都改为<b>最高的新鲜日频 Tier-1 regime z</b>、并点出那根读更高的
            陈旧月度 JGB。
            <br /><br />
            <b>收口小结：</b>12 条全部 RESOLVED —— 1 CRITICAL、5 MAJOR、
            6 MINOR —— 所有被搜索的 pattern 上，带修前语义的命中数为零。三个
            字面串仍然存在（<code>262.1M</code>、<code>equity-last</code>、
            <code>6 多</code>），但都只出现在把它们反转、重新标注或限定范围
            的句子里，EN v2 的审计痕迹逐条列明、没有把它们报成零。
            <br /><br />
            <b>未收口、按未结事项带走：</b>{' '}
            <code>weekly_200sma.json</code> 仍然不存在、200W 状态仍是已披露
            的 parquet 重算；live 盘面文件在物理行 65,799 处仍有一条只含
            NUL 的无效 JSONL 记录（远在本篇所有窗口之外、且不在干净 pin
            里）；谱系 MFE 台账不存在、08-19 scout 的错过仍无法排序；到期
            符号台账不存在、这也是 DN-001 选择删除序数而不是改写一个数字的
            原因；SM <code>net_btc</code> 的门设计缺陷带着三天证据被标记、
            本篇不打补丁；到期桶合计与符号、MTF 行数合计、方向性百分比分母、
            谱系序数的机械化预检仍未建。Build proxy：{' '}
            <code>npx --no-install tsc --noEmit</code> 退出 0。完整{' '}
            <code>next build</code> 在本服务器上被环境阻塞 —— Node 18.19.1
            对 Next 16.2.6、后者要求 ≥20.9.0。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况
            个性化。数字反映单一原子快照（2026-08-23 00:07Z 盘面锚、已 pin
            到本次 session 存档）、provenance 在上方数据来源条带中按节披露。
            若干输入明确陈旧、缺失、未结或待审、并已如实标注：{' '}
            <b>这是 v2、已过 codex 敌对式审计 —— 12 条 findings 全部应用并
            grep 收口、逐条记录在上方审计痕迹里、完整裁定在{' '}
            <code>audits/2026-08-23-desk-note.md</code></b>；宏观 Tier-1 面板
            渲染于 2026-08-22 22:16Z、但不带任何新数据、因为 FRED 周末没有
            发布；<code>weekly_200sma.json</code> 缺失、所以 200W 状态、164
            根已完成周收里 6.10% 的破地板频率与 22.4 分位的比率都是交易台
            自己的 parquet 重算；<code>gex_summary.json</code> 与{' '}
            <code>ma200w_trap_watch_state.json</code> 本次未读、没有任何一句
            压在它们上面；<b>08-23 的 W-SUN 周 bar 开到 23:59Z</b>、所以每一
            根周 MA 水位与每一句假破陈述都以那根结算为条件；D-EMA400 ≈$78,213
            是 MTF 列读数、不是交易台重算；JGB 是月度、陈旧 82 天；NTT
            pivot、max-pain、strike-level IV 与 BTC/NQ 比率均未载入。水位、
            规模与条件是交易台流程的示例、不是长期推荐。过去的相关性、γ 与
            仓位模式不绑定未来盘面。衍生品有全损风险、加杠杆下损失可超过
            保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                回撤来了、差 $600 没进带、回头把周线台阶也带走了。funding
                焊在封顶、总量 OI 在净口径上没缩 —— 一本付满费、也没有缩过
                的多头本子。结构还是多的、价格还是坏的。空仓、等 23:59Z
                那根结算。
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
            v2 · 2026-08-23 00:07Z 快照 · 已过 codex 敌对式审计
            （audits/2026-08-23-desk-note.md）· 源：live_db.json（已 pin）·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
