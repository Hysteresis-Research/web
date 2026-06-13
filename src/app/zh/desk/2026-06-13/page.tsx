import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-13 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-13',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-13' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260613() {
  await requireViewer('/zh/desk/2026-06-13');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-13 · v2</span>
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
              <span className="dn-big">$63,578</span>
              n2n&nbsp;<span>−0.01%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-13 00:06Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-13 00:06Z（snapshot pin）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 所有派生值都钉在 00:06Z 锚行 · live `t`
                    字段是 BJ 本地（UTC+8）、所以 00:06Z 锚行是
                    <code>06-13 08:06</code> · 此快照落在 12JUN 08:00Z 期权
                    结算后约 16h06m、13JUN 08:00Z 结算前约 7h54m ·
                    <b>窗口口径：</b>下面每一根 live-tape 比较都是
                    <b>NOTE-TO-NOTE（n2n）</b>—— 从上一篇 06-12 00:05Z 快照量
                    到本篇 00:06Z 快照、即日窗 1442 采样行 ≈ 24h01m、241 行 ≈
                    4h01m、61 行 ≈ 1h01m、每个都比严格时钟窗长一分钟 —— 所以
                    日 / 4h / 1h 的 Δ 都标 <code>n2n</code>；任何残留的
                    &ldquo;24h&rdquo; 标都是 MTF 扫描引擎自己的窗或前瞻措辞
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-13 00:01Z scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 较 00:06Z 快照锚
                    滞后约 5 分钟 · 含未收盘 K 线 · 作者时逐字存档于
                    <code>/opt/desk-note/snapshots/2026-06-13-0006/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-13 00:00Z 快照</td>
                  <td className="dn-flag">
                    pre-settle · 较快照锚滞后约 6 分钟 · Deribit idx $63,763
                    对 live $63,578.00（高 $185）· 952 合约（05-12 是 984、
                    −32）· 13JUN 0.3DTE +12.91M 在今日 08:00Z 结算（约 8h
                    后）· 除 13JUN 后 aggregate ≈ +7.8M 仍净正（清掉正的
                    前端块会<em>压低</em> aggregate；dashboard 合计 +20.7M
                    权威、显示行非可加 —— 见盘口本子节）· 存档于
                    <code>/opt/desk-note/snapshots/2026-06-13-0006/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-13 00:00Z
                  </td>
                  <td className="dn-flag">滞后约 6 分钟 · 7d 1h bar · 22 资产 · 166 rows · regime NORMAL（均值 |r| 0.391）· 存档于 <code>/opt/desk-note/snapshots/2026-06-13-0006/</code></td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-12 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1h51m · FRED Tier-1 在长端转松（10Y −10bp 到
                    4.45%、TIPS −5bp 到 2.16%）· HY OAS −2bp 到 2.78%（回到
                    2.78% re-grow 闸上、不再在上方）· DXY 100.08（+0.14）·
                    Fed 净流动性 $5.897T（+0.062T）· 存档于
                    <code>/opt/desk-note/snapshots/2026-06-13-0006/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵 + 200W 地板</td>
                  <td className="dn-v-cell">btcusdt_1m parquet · 全历史 + 2024–2026 子集</td>
                  <td className="dn-flag">
                    偏移按 live 现货重算 · 子集 MA 阶梯取 2024–2026 窗、按
                    交易台政策 · 200W 地板读自全历史 parquet（W-MON 重采样）·
                    <code>weekly_200sma.json</code> 缺失、所以 200W 直接从
                    parquet 算、JSON 的百分位 / last-event 字段不可用（未
                    捏造）· 子集 W-SMA150 / W-SMA200 不可计算（129 根子集
                    周 bar）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月度（~72d）· 不作实时</td>
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
              <span className="dn-v bull">+5.95%</span>
              <span className="dn-src">live · 快照 +5.95% ann（原始 0.005433 × 1095；快照上多付费 live）· n2n 均值 ann +2.18%（05-12 是 +2.60%、−0.42pt）· 封顶占用 2 / 1442 采样行、在 +5.96% 最大值（正封顶基本空）· neg-minute 占比 7.84%（113 / 1442、05-12 是 17.82%、−9.98pt）· n2n 谷 −1.44% ann（= 06-12 快照值、在窗开盘）· n2n 峰 +5.96% ann</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · n2n</span>
              <span className="dn-v bull">均值 +2.60% → +2.18%（−0.42pt）· 快照 −1.44% → +5.95%（+7.39pt）</span>
              <span className="dn-src">区间 −1.44% / +5.96% ann · funding 整根回正 —— 06-12 那根 −1.44% 的重转坐在本窗开盘、路径此后爬正并守住 · 最长负 streak 67 采样行 / ~1h07m 墙钟、在窗开盘、此后连续转正进快照 · 无 ≥4h 连续空付腿、且快照上 funding 为正 —— scout funding leg-2 闸现在已死</span>
            </div>
            <div>
              <span className="dn-k">OI · n2n</span>
              <span className="dn-v bear">−0.47%（−464 BTC）</span>
              <span className="dn-src">live · 97,790（从 06-12 快照 98,255 落、−465）· OI 在一根平日里继续泄 · n2n 峰 99,370 @ UTC 04:32 06-12、谷 97,538 @ UTC 21:33 06-12 · SM short Δ −411、long Δ +1 跨 n2n 盘面</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v">60.98 / 39.02</span>
              <span className="dn-src">live_db `mkt_long_pct` · 较 06-12 的 61.34 再泄 −0.36pt（de-crowding 安静地继续）· n2n 区间 59.27 / 62.03 · 峰 62.03 / 谷 59.27</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−37.3k（净 SHORT · 连续第二根回补、但极小）</span>
              <span className="dn-src">live · long 13.53k − short 50.83k · short 谷 50,643 @ UTC 00:26 06-13、short 峰 51,237 @ UTC 00:05 06-13（= 06-12 快照水位 —— 本子几乎没动）· net 谷（最空）−37,705 @ UTC 00:05 06-13（= 06-12 快照）、net 峰（最不空）−37,138 @ UTC 00:26 06-13 · 安静、无离散 ±3k 单分钟步</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 06-12 备忘</span>
              <span className="dn-v bull">−37.7k → −37.3k（+412 回补）</span>
              <span className="dn-src">long +1、short −411（各自独立取整；净 +412）· |Δ| / prior_net = 1.09%（412.246 / 37,705.498）· 是 06-12 +5,031 之后连续第二根回补、但小一个数量级 —— 一根近乎不动的本子、不是新一轮挤压解</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.8% / 40.92%</span>
              <span className="dn-src">GEX IV 中位数横跨 952 合约（05-12 是 45.6% / 984、−1.8pt vol 冷却）· IV/RV 价差 +2.88pt · 30D close-to-close RV 40.92%（30 returns / 31 closes；29-return 另一口径 41.19%）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+0.47%（现货）/ +0.76%（idx）—— 两个都在上方</span>
              <span className="dn-src">flip $63,282（前 $63,650、走 <em>下</em> −$368）· 对 live 现货 $63,578.00（63,578.00 / 63,282 − 1 = +0.468%）/ GEX 文件 idx $63,763（63,763 / 63,282 − 1 = +0.760%）—— 两参考现在都在 flip 上方（06-12 那根骑墙在 flip 下行里向上解）· aggregate GEX +20.7M（前 +9.7M、长了 +$11M 净多 γ）· $60k 崩盘 put −23.34M（稳）· P/C 0.61</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                06-12 那根 +3.26% 反弹让位给一根平消化日 —— 盘面一根
                doji、但底下的结构性背景一直在改善
              </span>
              。现货报 <span className="dn-tag">−0.01% 到 $63,578</span> ——
              note-to-note 基本不动、在一条
              <span className="dn-tag">$64,384 / $62,857</span> 区间里（高 @
              BJ 23:15 06-12 / UTC 15:15 06-12、低 @ BJ 14:39 06-12 / UTC
              06:39 06-12）。价格线上什么都没解、几乎所有结构都在硬起来。
              200W 地板重夺<em>加强</em>了 —— 06-12 日线收盘最终定在
              <span className="dn-tag bull">$63,547</span>、所以现在有
              <span className="dn-tag bull">两根最终日线收在 $62,019 地板
              上方</span>（06-11 $63,598、06-12 $63,547）、外加未收盘的
              06-15 周 bar $63,553 也在上方。dealer 本子把净多 γ 长到
              <span className="dn-tag bull">+20.7M</span>（前 +9.7M）、0-γ
              flip 走<em>下</em>到 <span className="dn-tag">$63,282</span>
              （前 $63,650）、所以现货现在坐在
              <span className="dn-tag bull">flip 上方 +0.47% 干净</span>、不
              再骑墙。funding 整根回正 —— 快照
              <span className="dn-tag bull">+5.95% ann</span>、无 ≥4h 空付
              streak、快照上 funding 为正 —— 这杀掉了均值回归 scout 的
              funding leg-2、即便 flip 腿刚清。宏观面在长端转松（10Y −10bp
              到 4.45%、TIPS −5bp 到 2.16%）、<em>un-fire</em> 了两根 06-12
              re-grow 腿、把昨天那根宏观对 BTC 的张力在多头侧解掉。
              <em>但盘面本身停住了：每一根 MA 都还在头顶、快 MTF 周期
              （30m / 1h）翻到死叉带顶背离、慢周期仍在云下、SM 也没重压
              （+412、一根近乎不动的第二根回补）。</em>这是重夺地板上方的
              消化 —— 每一根读都改善、价格什么也没干 —— 交易台守 FLAT、
              06-15 周收仍是那道二元。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$63,578</span> live、
              <span className="dn-tag">−0.01%</span> note-to-note —— 06-12
              上日之后一根平整理、1h <span className="dn-tag bull">+0.17%</span>、
              4h <span className="dn-tag bear">−0.13%</span>、整日是一根贴在
              反弹高下方的紧盘卷。
              <span className="dn-signal">周期地板重夺是这一篇加强的读</span>
              ：06-12 收盘最终定在 $63,547（06-12 备忘当时带的是未收盘
              $63,566）、给出连续两根<em>最终</em>日线收在 200W $62,019 上方
              —— 06-11 $63,598 和 06-12 $63,547 —— 加上未收盘的 06-13 bar
              $63,553 也在上方。这是对修正后 06-12 谱系（一根最终收 + 一根
              未收盘 bar）的严格升级。MA 矩阵头顶没改善 ——
              <span className="dn-tag bull">D-EMA20 $66,791（−4.81%）</span>
              是最近的一根、也是唯一一根在射程内、周期锚
              <span className="dn-tag bear">D-SMA100 $72,639（−12.47%）</span>
              坐在日线簇深处、6 月初破掉的 W-SMA20 周地板仍在头顶
              <span className="dn-tag bear">$72,103（−11.82%）</span>。
              <span className="dn-em">日线与周线阶梯上每一根 MA 都在现货
              上方；整盘唯一一根正结构偏移就是 200W 地板自己（+2.51%）。这
              是一条在收盘口径上重夺了周期地板、其它什么都没有的盘面。</span>
              06-12 那根均值回归 scout 的三腿门 —— TD9 簇 AND funding 空付
              ≥4h AND 1h 收 &gt; flip —— 以一种别扭的方式衰减了：flip 腿
              终于清（现货在走下来的 flip 上方 +0.47%）、正好在 funding 腿
              <em>死</em>的同一刻（funding 回正、无 ≥4h streak）、所以这道门
              离触发并没更近 —— 只是断在了另一条腿上。scout 站下。
            </p>

            <h2 className="dn-sec">
              仓位{' '}
              <span className="dn-roman">I · 实时盘面 · SM 近乎不动（+412 回补、连续第二根但极小、切 1.09%）· funding 整根回正（快照 +5.95%、无 ≥4h 空付 —— scout leg-2 已死）· OI 在平日里仍泄（−464）</span>
            </h2>

            <p>
              <span className="dn-signal">
                仓位本子安静了 —— 连续第二根回补、但比 06-12 小一个数量级
              </span>
              。SM net 是 <span className="dn-tag">−37,293</span> 对 06-12
              备忘的 −37,705 —— 也就是
              <span className="dn-em">+412 回补、一根 1.09% 的 trim</span>
              （|−37,293.252 − (−37,705.498)| / 37,705.498 = 1.09%）。两侧
              分量几乎没动：long_btc
              <span className="dn-tag">13,531 → 13,532（+1）</span>、short_btc
              <span className="dn-tag bull">51,237 → 50,826（−411）</span>。
              06-12 那根 +5,031 回补之后、本子基本停了 —— short_btc 的 n2n
              峰 51,237 @ UTC 00:05 06-13 就<em>是</em> 06-12 快照水位、它的
              谷 50,643 @ UTC 00:26 06-13 只低 −594、SM net 整日在
              −37,705 / −37,138 一条窄带里走。
              <span className="dn-em">两个方向都没印离散 ±3k 单分钟步；
              06-12 开始的那根渐进挤压解、就这么走平了。</span>
              这不是重压、也不是新一轮回补浪 —— 是一根已经回补完、现在坐
              在 −37.3k 净空不动的本子、和盘面其它部分一样、等 06-15 收。
            </p>

            <p>
              <span className="dn-signal">
                杠杆侧整根回正 —— 而这正是杀掉 scout funding 腿的东西
              </span>
              。funding 是 <span className="dn-tag bull">快照 +5.95% ann</span>
              （原始 0.005433 × 1095）、n2n 均值
              <span className="dn-tag">+2.18%</span>（对 06-12 的 +2.60%）、
              区间 <span className="dn-tag">−1.44% / +5.96%</span>。那根 −1.44%
              低点是 06-12 快照值坐在本窗开盘；从那里路径爬正并<em>守住</em>
              正 —— 最长连续负 streak 只有
              <span className="dn-tag">67 采样行 / ~1h07m、在窗开盘</span>、
              远短于 ≥4h 的 leg-2 门、且快照上 funding 牢牢为正。
              <span className="dn-em">06-12 那根读 —— leg-2 在一根单薄的
              245 行重转上技术性 LIVE —— 已经整根反转：重转清了、funding
              又在付多、均值回归 scout 的 funding 空付腿现在已死、不只是
              更弱。</span>
              neg-minute 占比从 17.82% → 7.84%（113 / 1442）、封顶占用是
              <span className="dn-tag">2 / 1442、在 +5.96% 最大值</span>（正
              封顶基本空）、OI
              <span className="dn-tag bear">−464 BTC（−0.47%）</span>在平日里
              继续泄（97,790、较 06-12 快照 98,255 再落 −465）、retail
              <span className="dn-tag">mkt_long_pct 60.98%</span>再泄
              −0.36pt。perp 对现货在快照上是
              <span className="dn-tag bear">−$41.46 折价</span>（1h 均 −$38.96、
              4h 均 −$39.51；n2n 日均 −$65.28、区间 −$150.13 / +$17.54 ——
              basis 盘中短暂转升水、但快照上是折价）。1 分钟 aggressor skew
              快照 <span className="dn-tag bull">+28.5</span>（1h 均 +7.74）——
              进快照一档温和买攻倾斜。
              <span className="dn-em">
                funding 整根回正、OI 仍在缩、retail 仍在泄、SM 两侧都近乎
                不动：杠杆本子放气完毕、坐着平衡 —— 既不压、也不重堆。
              </span>
            </p>

            <p>
              窗口流向是<em>一根安静的双侧消化 —— 现货被供、期货与大单被
              买、价格平、OI 在缩</em>。n2n 日：价格
              <span className="dn-tag">−0.01%</span>、OI
              <span className="dn-tag bear">−464 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −425</span>
              <span className="dn-em">（窗内无 cb_cvd reset —— 比 06-12
              干净）</span>、期货 CVD
              <span className="dn-tag bull">Δ +492</span>、大单
              <span className="dn-tag bull">+226 BTC / 456 笔</span>、
              taker-net <span className="dn-tag bull">+493</span> ——
              <span className="dn-em">现货卖、期货与块流在一根平盘上买、OI
              在缩；一根平衡消化、不是任一方向的承诺</span>。4h（进快照）：
              价格 <span className="dn-tag bear">−0.13%</span>、OI
              <span className="dn-tag bear">−297 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −352</span>、期货 CVD
              <span className="dn-tag bull">Δ +300</span>、大单
              <span className="dn-tag bear">−42 BTC / 54 笔</span>、taker-net
              <span className="dn-tag bull">+290</span> ——
              <em>现货被供、期货被买、进快照略微下漂</em>。1h：价格
              <span className="dn-tag bull">+0.17%</span>、OI
              <span className="dn-tag bull">+48 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +227</span>、期货 CVD
              <span className="dn-tag bull">Δ +155</span>、大单
              <span className="dn-tag bull">+30 BTC / 5 笔</span>、taker-net
              <span className="dn-tag bull">+182</span> ——
              <em>最近一小时双侧上抬、OI 添了一点 —— 进快照一道小买盘、
              不是趋势</em>。n2n 日的形状是最干净的读：一根被期货与块买盘
              托住、对着现货供给的平价、杠杆本子在放气 —— 正是 lead 点名的
              地板上方横向消化。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 快周期（30m / 1h）翻到水上死叉带顶背离 · 慢周期仍在云下 · 3d ⚡ TD9 BUY + 底背离是唯一一根多头引擎读 · 每一根 MA 都在头顶</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图停住并把快周期掀翻：扫描读 net 1 bull / 5 bear / 4
                neutral、头部标 &ldquo;多周期共振偏空·反弹偏卖&rdquo;
              </span>
              。30m 和 1h 都带着
              <span className="dn-tag bear">水上死叉</span>（30m 11b、1h 6b）
              带顶背离读 —— 1h 读数明确印 &ldquo;震荡偏空 · 顶背离&rdquo;、
              头部把 30m / 1h 标为顶背离周期。15m 是唯一一根快多
              （<span className="dn-tag bull">水下金叉 1b、刚印</span>）、但它
              在云下、读 RSI 48.6 —— 一根云下的弱早信号、不是推力。中周期
              杂色：4h <span className="dn-tag">RSI 55.1、水下金叉 15b、
              云内（62.2k–66.6k）</span> —— 唯一一根骑着自己云的周期、也是
              盘上最高 RSI；8h <span className="dn-tag">RSI 48.2、水下金叉
              17b、云下</span>。慢周期全在云下翻：12h 水下金叉 9b 但 Sell 5；
              1d <span className="dn-tag bear">RSI 32.9、无交叉、云下、Sell
              5</span> —— 深超卖、仍在结构下；1w RSI 34.5、云下、Buy 4。唯一
              一根多头引擎读坐在周期框架上：
              <span className="dn-tag bull">3d ⚡ TD9 BUY 活跃</span>、4-bar
              计数带底背离读数（&ldquo;空头结构但底背离 · 留意企稳&rdquo;）、
              1M 持一根待定 Buy 8 → 9? 在云上。
              <span className="dn-em">
                直读：反弹的引擎在快周期上翻了（30m / 1h 死叉 + 顶背离）、
                慢周期深超卖但仍在云下、唯一肯定的多是周期框架上的 3d ⚡ TD9
                BUY + 底背离 —— 就是 06-11 以来一直撑着的那根孤信号。快周期
                顶背离是 +3.26% 反弹在消化、不在延伸的 tell；3d TD9 是周期
                框架仍偏向筑底的 tell。这张图是一根停住的反弹、嵌在一个
                偏空的高周期结构里。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,532</td><td className="num">48.6</td><td className="bull">金叉（水下）1b · 刚印</td><td className="bear">云下 ↑63.6k 10b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>30m</td><td className="num">63,546</td><td className="num">49.5</td><td className="bear">死叉（水上）11b</td><td className="bull">云上 ↓63.4k 20b</td><td>Buy 1</td><td>BEAR reg · BULL hid · 顶背离</td></tr>
                <tr><td>1h</td><td className="num">63,532</td><td className="num bull">51.8</td><td className="bear">死叉（水上）6b</td><td className="bull">云上 ↓62.8k 45b</td><td>Sell 1</td><td>BEAR reg · BULL hid · 顶背离</td></tr>
                <tr><td>4h</td><td className="num">63,537</td><td className="num bull">55.1</td><td className="bull">金叉（水下）15b</td><td className="neut">云内 62.2–66.6k 11b</td><td>Buy 1</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>8h</td><td className="num">63,537</td><td className="num">48.2</td><td className="bull">金叉（水下）17b</td><td className="bear">云下 ↑67.7k 84b</td><td>Buy 1</td><td>BEAR hid</td></tr>
                <tr><td>12h</td><td className="num">63,532</td><td className="num bull">40.8</td><td className="bull">金叉（水下）9b</td><td className="bear">云下 ↑74.8k 43b</td><td>Sell 5</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">63,537</td><td className="num bull">32.9</td><td className="neut">无交叉</td><td className="bear">云下 ↑73.9k 12b</td><td>Sell 5</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num">63,532</td><td className="num bull">35.2</td><td className="bear">死叉（水上）6b</td><td className="bear">云下 ↑74.7k 4b</td><td className="bull">⚡ TD9 BUY</td><td>BULL reg（底背离）</td></tr>
                <tr><td>1w</td><td className="num">63,532</td><td className="num bull">34.5</td><td className="neut">无交叉</td><td className="bear">云下 ↑100.3k 19b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">63,532</td><td className="num">42.7</td><td className="bull">DIF 水上（无交叉）</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（滚动 latest
                    文件；逐字存档于
                    <code>/opt/desk-note/snapshots/2026-06-13-0006/</code>）。
                    头部告警：<em>net 1 bull / 5 bear / 4 neutral ·
                    多周期共振偏空·反弹偏卖</em>、
                    <em>30m / 1h 顶背离</em>、<em>3d ⚡ TD9 BUY + 底背离</em>。
                    扫描现货 $63,532、24h −0.09%（00:01Z MTF 扫描；live-tape
                    头部 00:06Z 在同一 24h 窗读 −0.01% —— 5 分钟时间差导致
                    0.08pt 偏差）、24h H/L $64,363 / $62,800、qVol $9.25B。
                    收盘为未收盘 K 线；每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认消化整个发生在结构下方。现货 $63,578 坐在盘上
              每一根日线与周线下方；任何地方唯一一根正偏移就是 200W 地板
              自己（+2.51%）。最近头顶是
              <span className="dn-tag bull">D-EMA20 $66,791（−4.81%）</span>
              —— 正常一波 swing 内唯一的重夺目标 —— 然后
              <span className="dn-tag bear">D-SMA20 $67,517（−5.83%）</span>、
              <span className="dn-tag bear">D-EMA50 $71,048（−10.51%）</span>、
              <span className="dn-tag bear">W-SMA20 $72,103（−11.82%）</span>
              （破掉的周地板）、
              <span className="dn-tag bear">D-SMA100 $72,639（−12.47%；
              周期锚）</span>、
              <span className="dn-tag bear">D-EMA100 $73,576（−13.59%）</span>、
              <span className="dn-tag bear">D-SMA150 $73,712（−13.75%）</span>、
              <span className="dn-tag bear">W-EMA200 $73,768（−13.81%；
              种子）</span>、
              <span className="dn-tag bear">D-SMA50 $74,157（−14.27%）</span>、
              <span className="dn-tag bear">W-EMA20 $75,366（−15.64%）</span>、
              <span className="dn-tag bear">D-EMA150 $76,281（−16.65%）</span>、
              <span className="dn-tag bear">D-SMA200 $77,765（−18.24%）</span>、
              <span className="dn-tag bear">W-EMA150 $78,097（−18.59%；
              种子）</span>、
              <span className="dn-tag bear">D-EMA200 $78,919（−19.44%）</span>。
              更高更远、已弃用：W-EMA100 $82,691（−23.11%）、W-EMA50
              $83,400（−23.77%）、W-SMA100 $88,534（−28.19%）、W-SMA50
              $91,818（−30.76%）。
              <span className="dn-em">
                MA 锚自 parquet 2026-06-13 00:06Z close $63,553.20；偏移
                按 live 现货 $63,578.00 重算。显示的 MA 水位按 $ 取整、
                偏移用精确序列值算。子集 MA 阶梯取 2024–2026 窗、按交易台
                政策；W-SMA150 / W-SMA200 不可计算（129 根子集周 bar）、
                W-EMA150（−18.59%）与 W-EMA200（−13.81%）从可用历史 seed、
                按种子披露。200W $62,019 是全历史 W-MON 线（200 根收盘 bar、
                止于 06-08）。日线收盘：06-08 $63,058（上方）、06-09 $61,695
                （下方）、06-10 $61,484 最终（下方）、06-11 $63,598 最终
                （上方）、06-12 $63,547 最终（上方）、06-13（未收盘）$63,553
                （上方）—— 两根最终收在 200W 地板上方、加未收盘 bar 在上方。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子{' '}
              <span className="dn-roman">III · 本子长到 +20.7M 净多 γ（前 +9.7M）· 0-γ flip 走下到 $63,282、所以现货现在坐在 +0.47% 干净上方（不再骑墙）· 13JUN +12.91M 在今日 08:00Z 结算、清掉它会压低 aggregate</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子加深了净多 γ、把 flip 走到现货底下
              </span>
              。aggregate GEX 是
              <span className="dn-tag bull">+20.7M / 1%</span>（06-12 是
              +9.7M —— 一根 +$11M 正向长）；本子比反弹时更牢地净多 γ
              （阻尼）。0-γ flip 移动
              <span className="dn-tag">$63,650 → $63,282（−$368）</span>、
              现货 $63,578 现在坐在
              <span className="dn-tag bull">flip 上方 +0.47%</span>、现货口径
              （63,578.00 / 63,282 − 1 = +0.468%）；GEX 文件自己的 Deribit
              idx 参考 $63,763 读
              <span className="dn-tag bull">上方 +0.76%</span>（63,763 /
              63,282 − 1 = +0.760%）。
              <span className="dn-em">两参考现在都在 flip 上方 —— 06-12 那根
              骑墙（−0.10% 现货 / +0.19% idx）在 flip 走下里向上解、不是
              现货拉升解的。</span>
              墙图是一道正头顶带对一根深崩盘 put：最重正墙
              <span className="dn-tag bull">$64.5k +14.09M</span>、
              <span className="dn-tag bull">$80k +10.88M</span>、
              <span className="dn-tag bull">$65k +7.99M</span>、
              <span className="dn-tag bull">$67k +7.63M</span>、
              <span className="dn-tag bull">$70k +7.05M</span>、
              <span className="dn-tag bull">$64k +5.87M</span>；负的是
              <span className="dn-tag bear">$60k −23.34M</span>（那根持久崩盘
              put、对 06-12 的 −23.10M 稳）、
              <span className="dn-tag bear">$62k −9.61M</span>（就在现货下方）、
              <span className="dn-tag bear">$55k −7.01M</span>、
              <span className="dn-tag bear">$58k −5.26M</span>。
              <span className="dn-em">
                近头顶 $64k–$67k 带是一道厚正撑架（四根 strike 合计 ~+35M）、
                $62k −9.61M 就在现货下方 —— 一根结构性买进往 $62k 回落、
                卖出推穿 $64.5k 的 dealer 本子。$60k 崩盘 put 磁铁本次守住
                了重量（没再减）、但它在现货下方 −5.6%、不是近现货锚。
              </span>
            </p>

            <p>
              expiry strip 前端整根为正、但显示行对 dashboard 合计是
              <span className="dn-em">非可加</span>。各 expiry：13JUN 0.3DTE
              <span className="dn-tag bull">+12.91M</span>（今日 08:00Z 结算）、
              14JUN 1.3 +5.80M、15JUN 2.3
              <span className="dn-tag bull">+15.22M</span>（最重的近端正、
              结算 06-15 周）、16JUN 3.3 +0.27M、19JUN 6.3 +2.15M、
              <span className="dn-tag bear">26JUN 13.3 −22.05M</span>（月度、
              盘上最重负块）、3JUL +0.43M、31JUL +12.04M、28AUG +2.40M、
              25SEP +1.41M、25DEC +3.63M、26MAR27 +0.55M。
              <span className="dn-em">显示行合计 ≈ +34.76M、这<em>不是</em>
              dashboard aggregate +20.7M —— 各 strike / 各 expiry 分解对
              头部合计非可加；dashboard +20.7M 权威。</span>
              13JUN 0.3DTE 在今日 08:00Z 结算（约 8h 后）：因为它是一根正的
              +12.91M 块、清掉它会<em>压低</em> aggregate —— 除 13JUN 后读约
              +7.8M、仍净正、但结算后是一本更小的正本子。
              <span className="dn-em">
                这与 5 月底放大器动态相反、那次一根大负块清掉把本子翻正；
                这里一根正的前端块清掉、trim 掉净多 γ 缓冲、26JUN 月度
                −22.05M 这根结构性负的仍远在时间上。
              </span>
            </p>

            <p>
              IV 中位数横跨 952 合约是
              <span className="dn-tag">43.8%</span>（从 06-12 的 45.6% /
              984 合约下来 —— 一根 −1.8pt vol 冷却、−32 合约是 06-12 的
              0DTE 块到期）对 30D close-to-close RV
              <span className="dn-tag">40.92%</span> —— 链级 richness
              <span className="dn-tag">~+2.88pt</span>、IV/RV 价差在收紧、
              因为已实现守高、隐含在泄。
              <span className="dn-em">是 952 合约的链中位数、
              <span className="dn-em">不是</span>可交易价差；expiry- /
              strike-level vega、skew、期限结构仍未载入、vol 读法保持
              framework only。</span>
              RV 方法：30D close-to-close、logret.std × √365 × 100、用最末
              30 根日 log return（= 连续 31 根日 close）、锚自 parquet
              2026-06-13 00:06Z；底层 31-close 窗区间 05-14 → 06-13。（参考：
              最末 29 returns / 30 closes 读 41.19%；页面值 40.92% 来自 30
              returns。）P/C 比 0.61 在 GEX 文件上。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · Tier-1 在长端转松（10Y −10bp 到 4.45%、TIPS −5bp 到 2.16%）· 两根 06-12 re-grow 腿都 UN-FIRED（10Y 回到 4.53% 下、HY OAS 回到 2.78% 上）· reclaim-long 筛 RE-CLEARED · 跨资产 NORMAL |r| 0.391、BTC 领 NQ/SP500 7d（JP225/PALL 跑得更高）</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面在长端转松、un-fire 了 re-grow 闸 —— 昨天那根宏观对
                BTC 的张力在多头侧解掉
              </span>
              。面板渲染 2026-06-12 22:15Z、比快照早约 1h51m。US 10Y nominal
              <span className="dn-tag bull">4.45%（−10bp）</span>、regime z
              <span className="dn-tag bear">+1.38</span>、偶发 z
              <span className="dn-tag bull">−0.50</span> —— 一根 10bp 的落、
              <span className="dn-em">RE-CLEAR reclaim-long 利率筛（10Y &lt;
              4.55%）AND 落回 06-12 触发的 4.53% re-grow leg-A 闸下方</span>。
              10Y TIPS real
              <span className="dn-tag bull">2.16%（−5bp）</span>、regime z
              <span className="dn-tag bear">+2.12</span>、偶发 z
              <span className="dn-tag bear">+0.94</span> —— 当日松、但 regime
              z 是面板上唯一一根 EXTREME risk-off 标。5Y5Y BE 通胀
              <span className="dn-tag">2.23%（+5bp）</span>。HY OAS
              <span className="dn-tag">2.78%（−2bp）</span>、regime z
              <span className="dn-tag bull">−0.84</span>、偶发 z
              <span className="dn-tag">+0.31</span> —— 回到 2.78% re-grow 闸
              上、不再在上方、所以 re-grow leg-B 已从 06-12 的触发上失效。
              MOVE 债波 <span className="dn-tag">69.4（−0.09）</span> ——
              松、平。美元走硬：DXY
              <span className="dn-tag bear">100.08（+0.14）</span>、regime z
              <span className="dn-tag bear">+1.75</span>、偶发 z
              <span className="dn-tag bear">+1.64</span> —— RISK-OFF、唯一一根
              偏错向的 Tier-1 线；Fed 净流动性
              <span className="dn-tag bull">$5.897T（+0.062T）</span> 松；
              NFCI −0.506 中性；US-JP 10Y 利差
              <span className="dn-tag">1.94%（−10bp）</span>；USD/JPY
              <span className="dn-tag">160.52（+0.13）</span>；USD/CNY
              6.7771；10Y breakeven 2.31%（+2bp）。
              <span className="dn-em">
                净：06-12 都触发的 re-grow 闸现在都 un-fired（10Y −10bp 到
                4.45% 回到 4.53% leg-A 闸下；HY OAS −2bp 到 2.78% 回到、不在
                leg-B 闸上方）、reclaim-long 筛（10Y &lt; 4.55%）re-cleared。
                宏观面在长端正好在 BTC 内部盘面转上时转 risk-on —— 06-12 那根
                张力（宏观 re-grow 偏空触发进一根偏多的 BTC 转）已解、宏观
                现在与 BTC 转<em>对齐</em>、不再相搏。DXY 硬与 TIPS-real
                EXTREME 是两根抵消的 risk-off 线、但对 BTC 要紧的利率路径
                松了。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>水位</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>偶发 z</th>
                  <th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.45%</td><td className="num bull">−10bp</td><td className="num bear">+1.38</td><td className="num bull">−0.50</td><td className="bear">紧 regime · 已松；re-grow leg-A UN-FIRED、筛 re-cleared</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.16%</td><td className="num bull">−5bp</td><td className="num bear">+2.12</td><td className="num bear">+0.94</td><td className="bear">EXTREME RISK-OFF regime · 当日松</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.23%</td><td className="num bear">+5bp</td><td className="num">−0.03</td><td className="num bull">−0.89</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num bull">−2bp</td><td className="num bull">−0.84</td><td className="num">+0.31</td><td className="bull">松 · 回到 2.78% 闸上、leg-B UN-FIRED</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.506</td><td className="num">0.00</td><td className="num">+0.19</td><td className="num bull">−0.73</td><td className="neut">中性</td></tr>
                <tr><td>MOVE 债波</td><td className="num">69.4</td><td className="num bull">−0.09</td><td className="num bull">−0.61</td><td className="num bull">−1.02</td><td className="bull">松 · 平</td></tr>
                <tr><td>DXY</td><td className="num">100.08</td><td className="num bear">+0.14</td><td className="num bear">+1.75</td><td className="num bear">+1.64</td><td className="bear">RISK-OFF · 唯一一根偏错向的 Tier-1 线</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.897T</td><td className="num bull">+0.062T</td><td className="num bull">+0.82</td><td className="num bull">+2.47</td><td className="bull">松 · 新周度添加</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.52</td><td className="num bear">+0.13</td><td className="num bear">+1.38</td><td className="num bear">+1.47</td><td className="neut">日元软</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.94%</td><td className="num bull">−10bp</td><td className="num bull">−0.88</td><td className="num bull">−0.50</td><td className="bull">收窄</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7771</td><td className="num">+0.00</td><td className="num bull">−1.70</td><td className="num bull">−0.73</td><td className="bull">无标 · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">月度（~72d）</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、166 rows、汇总 00:00Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.391</span>（较 06-12
              的 0.377 硬起来、但仍在 NORMAL 带、不是系统性）。BTC 列出的
              对齐是 TradFi-tech 领头并收紧：NQ
              <span className="dn-tag">+0.572</span>、SP500
              <span className="dn-tag">+0.549</span>、TSLA
              <span className="dn-tag">+0.514</span>、NVDA
              <span className="dn-tag">+0.502</span>、META
              <span className="dn-tag">+0.492</span>、MSFT
              <span className="dn-tag">+0.486</span>、GOOGL
              <span className="dn-tag">+0.480</span>、SILVER
              <span className="dn-tag">+0.473</span>、COPPER
              <span className="dn-tag">+0.470</span>、GOLD
              <span className="dn-tag">+0.435</span>。7d 相对表现：
              <span className="dn-tag bull">BTC +3.77%</span>（领 US 科技指数
              对 NQ/SP500、但<em>不</em>领全盘 —— JP225 和 PALL 都跑得更高）、
              NQ <span className="dn-tag bull">+2.28%</span>、SP500
              <span className="dn-tag bull">+0.58%</span>、JP225
              <span className="dn-tag bull">+4.31%</span>、PALL
              <span className="dn-tag bull">+5.36%</span>、COPPER
              <span className="dn-tag bull">+3.17%</span>、TSLA
              <span className="dn-tag bull">+3.04%</span>；mega-cap 科技盘重 ——
              MSFT <span className="dn-tag bear">−5.71%</span>、AAPL
              <span className="dn-tag bear">−5.48%</span>、META
              <span className="dn-tag bear">−3.68%</span>、AMZN
              <span className="dn-tag bear">−3.22%</span>；金属杂色（GOLD
              <span className="dn-tag bear">−2.66%</span>、PLAT
              <span className="dn-tag bear">−3.40%</span>、SILVER +0.19%）；
              能源继续崩 —— CL
              <span className="dn-tag bear">−10.47%</span>、BRENT
              <span className="dn-tag bear">−10.52%</span>。
              <span className="dn-em">
                BTC +3.77% 在 7d 领 US 科技指数对（NQ/SP500）—— 它对 NQ
                +2.28% 的领先是 +1.49pt（06-12 是 +2.21pt —— 缺口收窄因为
                BTC 横向消化、NQ 继续磨上、不是 BTC 翻倒）—— 但它<em>不</em>
                领全盘：JP225 +4.31% 和 PALL +5.36% 7d 都跑赢 BTC。宽 regime
                守 NORMAL、BTC 在里头内生地硬、是 US 风险指数里最硬的、但不是
                盘顶；能源崩（CL/BRENT −10%）与 mega-cap 科技回撤是宏观横流、
                但本次都不是 BTC 承重读
              </span>
              。JGB 月度 2.52% 带 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 200W 地板盯位 PRIMARY（重夺加强到两根最终收在上方）· 均值回归 scout DECAYED（flip 腿清的同时 funding leg-2 死）· 宏观尾 re-grow UN-FIRED（张力已解）· 挤压周期 hostile-2 安静 · 交易台 flat</span>
            </h2>

            <p>
              <span className="dn-signal">
                一根改善了结构的平日不改变一本平本子 —— 它加强盯位、衰减
                scout
              </span>
              。交易台带着无仓位进快照、什么也没开；06-12 那根 +3.26% 反弹
              现在一天大了、在消化、交易台按设计无入场地看着它。诚实的
              记分卡：200W 重夺加强到两根最终日线收在地板上方（一根严格
              升级）、dealer 本子加深净多 γ 并把 flip 走到现货下、funding
              整根回正、宏观转松进对齐 BTC 转 —— 每一根结构读都改善。
              <em>但均值回归 scout 是衰减、不是触发：它的 flip 腿终于清的
              同一刻它的 funding 腿死了、所以它离一根干净触发没更近；每一根
              MA 都在头顶；快 MTF 周期翻到死叉带顶背离；SM 走近乎不动
              （+412）、既不压也不带力回补。</em>不追。scout 是一根确认交易、
              它需要的确认（一道干净三腿门 AND 06-15 周重夺）现在 funding
              腿死了之后结构上更远 —— 等 06-15 周收和一道重新武装的门、不
              要把入场硬塞进一根停住但偏多的盘面。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · PRIMARY · 200W 周期地板盯位 · 重夺加强：现在两根最终日线收在上方（06-11 $63,598、06-12 $63,547）+ 未收盘 06-15 周 bar $63,553 在上方</span>
              <div className="dn-trade-name">
                200W 周期地板盯位 —— 重夺加强：两根最终日线收在 $62,019 上方（06-11 $63,598、06-12 $63,547）加未收盘 06-15 周 bar $63,553 在上方；06-15 周收仍是那道二元、现在更倾向重夺
              </div>
              <div className="dn-thesis">
                06-09 / 06-10 破位放了两根日线收在地板下；06-11 盘面拿回来、
                06-12 守住。本次 06-12 日线收最终定在 $63,547 —— 一根连续
                第二根<em>最终</em>日线收在 200W $62,019 上方、叠在 06-11 的
                $63,598 上。这是对修正后 06-12 读（带一根最终收 + 一根未收盘
                bar）的严格升级。现货 $63,578 坐在地板上方 +2.51%、未收盘的
                06-15 W-MON 周 bar 印 $63,553 = 上方 +2.47%。全历史 200 周
                SMA 是 $62,019（200 根收盘 bar、止于 06-08）；周收破自己
                200W 的频率是 8 / 154 = 5.19% —— 一个低基率位置、盘面现在
                已坐回上方两根最终日线收。唯一解的事件仍是 06-15 周收：一根
                收在 $62,019 上方确认重夺（06-08 后谱系的一周回踩并重夺）、
                一根收在下方仍会确认首次持续的周-200W 破 —— 但两根最终日线
                收在上方加一根平守、让重夺以比 06-12 更宽的边际成为更高概率
                结果。状态：<em>盯位开、重夺在加强、无仓位</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板（全历史 W-MON）</span><span className="dn-lvl-v">$62,019 · 200 根收盘 bar 止于 06-08 · live 现货 +2.51% / +$1,559 在上方</span></div>
                <div><span className="dn-lvl-k">未收盘周（06-15）</span><span className="dn-lvl-v bull">1m-close $63,553 = +2.47% / +$1,534 在 200W 上方 —— 在 06-15 W-MON 收前临时</span></div>
                <div><span className="dn-lvl-k">最终日线收谱系</span><span className="dn-lvl-v bull">06-11 $63,598 最终（上方）· 06-12 $63,547 最终（上方）· 06-13 未收盘 $63,553（上方）—— 两根最终收在地板上方</span></div>
                <div><span className="dn-lvl-k">重夺确认（多）</span><span className="dn-lvl-v bull">06-15 周收 &gt; $62,019 —— 确认地板重夺；在确认转向上重开 scout-long 论</span></div>
                <div><span className="dn-lvl-k">破位确认（空）</span><span className="dn-lvl-v bear">06-15 周收 &lt; $62,019 —— 06-08 后谱系首次持续周收破 200W（上一根全历史破自己 200W 的收是 2023-10-09）；现在是低概率路径</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>200W 是一根周收线、不是盘中水位 —— 现货
                +2.51% 在上方、未收盘 bar +2.47% 在上方都不解它；只有 06-15
                W-MON 收解。两根最终日线收（06-11 $63,598、06-12 $63,547）加
                06-13 未收盘 bar 在上方；把下一根周收当二元、把 13JUN 08:00Z
                结算与日线收谱系当中间 tell。加强的周内守把赔率拉向重夺、
                它不平掉这单。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · DECAYED · flip 腿清的同时 funding leg-2 死 · 进一步站下</span>
              <div className="dn-trade-name">
                均值回归多 scout —— 衰减：flip 腿终于清（现货在走下来的 flip $63,282 上方 +0.47%）但 funding 空付 leg-2 死了（funding 回正、无 ≥4h streak）—— 这道门离触发没更近、只是断在了另一条腿上
              </div>
              <div className="dn-thesis">
                scout 是一道三腿门：(1) 一根 TD9-BUY 簇、(2) 一根 funding
                空付 ≥4h 连续 streak、(3) 一根 1h 收在 0-γ flip 上方。06-12
                时 leg 3 在边界骑墙、leg 2 在一根单薄的 245 行重转上技术性
                LIVE；反弹已经跑过、所以 scout 非可动作。本次各腿衰减、不是
                收敛：<em>Leg 3 清了</em> —— flip 走下到 $63,282、现货在
                live 读上坐在上方 +0.47%（idx 上 +0.76%）、谱系首根干净的
                上-flip 读。但<em>Leg 2 死了</em> —— funding 整根回正（快照
                +5.95%、n2n 均值 +2.18%）、最长负 streak 缩到 67 行 / ~1h07m
                在窗开盘、且快照上 funding 在付多、所以根本没有 ≥4h 空付腿。
                <em>Leg 1 不变</em> —— 3d ⚡ TD9 BUY（现在带底背离读数）仍是
                唯一簇成员、1M 仍待定 Buy 8 → 9?。净：scout 无法触发 —— 一根
                均值回归多挂在一个已经蒸发的 funding 空付条件上、而它设计要
                抓的那波已经发生了。这道门结构上比 06-12 离干净触发更远、不是
                更近。状态：<em>衰减、站下、无入场</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">leg 1 · TD9 簇</span><span className="dn-lvl-v">3d ⚡ TD9 BUY 活跃（+ 底背离读数）· 1M Buy 8 → 9? 待定 —— 唯一簇成员、不变</span></div>
                <div><span className="dn-lvl-k">leg 2 · funding 空付 ≥4h</span><span className="dn-lvl-v bear">已死 —— funding 回正（快照 +5.95%）、最长负 streak 67 行 / ~1h07m 在窗开盘、无 ≥4h streak、快照上 funding 在付多</span></div>
                <div><span className="dn-lvl-k">leg 3 · 1h 收 &gt; flip</span><span className="dn-lvl-v bull">清了 —— flip $63,282、现货在上方 +0.47%（idx +0.76%）—— 干净上-flip、但 leg 2 死了它就是学术的</span></div>
                <div><span className="dn-lvl-k">触发（3 腿都干净）</span><span className="dn-lvl-v bull">确认 TD9 BUY 簇 AND 一根新鲜 live funding 空付 ≥4h AND 1h 收 &gt; flip —— 然后 scout long 0.2R；三条不同时 live</span></div>
                <div><span className="dn-lvl-k">止损 / size</span><span className="dn-lvl-v bear">1h 收 &lt; $61,484（06-10 日线收 / 200W 带）· size 0.2R · 在周期锚 D-SMA100 $72,639 平半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R 草图（示例、非 live 单）：</b>若门重新武装、一根在
                flip $63,282 上方的干净 1h 收触发、对一根 $61,484 止损是
                ~$1,798 风险；首目标在周期锚 $72,639 是 ~$9,061 ≈ 5.0:1 ——
                纸面吸引、但 funding 腿死着门就无法触发。<b>硬规则：</b>不要
                从唯一清掉的那条腿合成入场 —— 一根均值回归多需要 funding 空付
                条件 LIVE、而它不是；在一根走下来的 flip 上方、每一根 MA 都在
                头顶、快周期带顶背离时买一根平盘、正是框架禁止的抢跑。诚实的
                读是交易台看着一根干净的均值回归反弹无交易走过、scout 现在
                衰减出射程；等 funding 腿重新武装 AND 06-15 周重夺、不要硬塞。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · put-spread re-grow 闸 —— 两腿现在都 UN-FIRED（从 06-12 的两腿都触发反转）</span>
              <div className="dn-trade-name">
                宏观尾 put-spread —— 已平；re-grow 闸两腿都 UN-FIRED：10Y 松 −10bp 到 4.45%（回到 4.53% leg-A 闸下）AND HY OAS 松 −2bp 到 2.78%（回到、不在 leg-B 闸上）；reclaim-long 利率筛（10Y &lt; 4.55%）RE-CLEARED
              </div>
              <div className="dn-thesis">
                宏观尾 put-spread 已平、无残余。06-12 两根 re-grow 腿都在各自
                闸上方干净触发（10Y 4.55% &gt; 4.53%、HY OAS 2.80% &gt; 2.78%）、
                交易台记下触发但对着偏多的 BTC 内部转把它酌情持着。本次两腿
                都 UN-FIRED：10Y 松 −10bp 到 4.45%（回到 4.53% 闸下 AND
                re-clear reclaim-long 筛 10Y &lt; 4.55%）、HY OAS 松 −2bp 到
                2.78%（回到自己闸上、不再在上方）。
                <span className="dn-em">06-12 那根张力 —— 宏观 re-grow 正好在
                BTC 转上时偏空触发 —— 已解：宏观在长端转 risk-on、re-grow 闸
                不再触发、所以宏观面现在与 BTC 转<em>对齐</em>、不再相搏。</span>
                一根 re-grow 会逆着 BTC 反弹；闸 un-fire 移除了连酌情张力。
                交易台不持尾、对这本净多 γ、200W 重夺的盘面无门可触发。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">已平 · 无残余 · re-grow 闸两腿都 UN-FIRED —— 无张力可管</span></div>
                <div><span className="dn-lvl-k">re-grow leg A（UN-FIRED）</span><span className="dn-lvl-v bull">10Y &gt; 4.53% 收 —— 在 4.45% UN-FIRED（−10bp、回到闸下）</span></div>
                <div><span className="dn-lvl-k">re-grow leg B（UN-FIRED）</span><span className="dn-lvl-v bull">HY OAS &gt; 2.78% 收 —— 在 2.78% UN-FIRED（−2bp、回到闸上、不在上方）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— 在 4.45% RE-CLEARED（06-12 漂到 4.55% 边界的失效已反转）</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位漂动设的酌情盯位、不是回测
                断点 —— 06-12 两腿都触发、本次都在一根 10bp 10Y 移动上
                un-fire、这正是交易台不机械交易它们的原因。一根新尾只有在
                BTC 内部结构翻回去（本子在一根重新失败的 flip 下重新加深空
                γ AND 06-15 周失败）WITH 宏观腿重新触发时才有意义 —— 现在
                这些都不成立。只在两根宏观腿对一根 BTC 内部破位干净重触发上
                重新武装盯位；缺这个、就没尾可长。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期 hostile-2 观察名单 · 无日历先验 · 安静 —— 本子走近乎不动（+412 回补）、无离散 ±3k 单分钟步</span>
              <div className="dn-trade-name">
                挤压周期 hostile-2 —— 观察名单、安静：06-12 +5,031 回补后本子走近乎不动（+412）、空几乎没动（−411）、无离散 Δnet ≥ +3k 回补步或 ≤ −3k 重堆印出
              </div>
              <div className="dn-thesis">
                挤压周期框架以无日历先验的观察名单跑（节奏在 5 月底被证伪）。
                三日空头压在 06-12 以首根回补（+5,031）结束；本次本子基本停了
                —— SM net +412、short_btc −411、long_btc +1。n2n 盘面守一条
                窄 −37,705 / −37,138 净带、两个方向都无离散单分钟步 —— 无
                Δnet ≥ +3k 回补点火、无 Δnet ≤ −3k 重堆 hostile-2。
                <span className="dn-em">06-12 开始渐进解的挤压走平了：本子
                回补完、现在坐着不动、既不重压也不加速解。</span>把任何新鲜
                Δnet ≤ −3k 单分钟步（Δshort &gt; 0 + Δlong &lt; 0 同一分钟）
                本身读作一根重堆 hostile-2 信号、任何 Δnet ≥ +3k 回补步读作
                它的反面 —— 但两个都没印、本子的静止本身就是读。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">观察名单 · 无日历先验 · 06-12 +5,031 后本子走近乎不动（+412 回补、1.09% trim）、无离散 ±3k 步</span></div>
                <div><span className="dn-lvl-k">n2n SM 形状</span><span className="dn-lvl-v">short Δ −411、long Δ +1、net +412 回补（对 06-12 备忘；各自独立取整）· 净带 −37,705 / −37,138 整日 · short 谷 50,643 @ UTC 00:26 · 安静、无 ±3k 单分钟步</span></div>
                <div><span className="dn-lvl-k">前向 gating</span><span className="dn-lvl-v">新鲜 Δnet ≤ −3k 单分钟 = 重堆 hostile-2 信号；Δnet ≥ +3k = 回补点火 —— 两个方向都无时间先验；本子当前的静止偏向都不是</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>节奏已死（5 月底被证伪）、所以读盘面、不读
                时钟。一根渐进回补的次日一本近乎不动的本子、与一根已经解完
                而非重装的挤压一致 —— 但静止不是信号、是信号的缺席。一根新鲜
                离散 Δnet ≤ −3k 在一根重新失败的 flip 下会重新武装空头压读；
                一根 Δnet ≥ +3k 回补步在 flip 上方会确认一根剧烈解。两个都没
                印；盯下一根离散步、看本子从这根平基往哪个方向承诺。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 200W 重夺加强（两根最终日线收在上方；06-15 收仍是二元、倾向重夺）· scout 在 funding 回正时衰减 · dealer 本子加深净多 γ · 宏观转松进对齐 BTC 转 · 交易台 flat</span>
            </h2>

            <p>
              06-12 那些条件里：200W 周期地板重夺<em>加强</em>（06-12 日线
              收最终定在 $63,547、一根第二根最终收在地板上方、现货 +2.51%
              在上方、未收盘 06-15 bar +2.47% 在上方）；dealer 本子把净多 γ
              <em>加深</em>到 +20.7M、把 flip 走下到 $63,282、所以现货现在
              坐在 +0.47% 干净上方；均值回归 scout<em>衰减</em> —— 它的 flip
              腿清了但它的 funding 腿死了、所以它离干净触发更远、不是更近；
              宏观 re-grow 腿两根都 UN-FIRED（10Y −10bp 到 4.45%、HY OAS
              −2bp 到 2.78%）、reclaim-long 筛 RE-CLEARED、在多头侧解掉
              06-12 宏观对 BTC 的张力；SM 走近乎不动（+412 回补）。
              <em>单一结构读是一根重夺地板上方的消化日、每一根结构输入都改善
              而价格什么也没干 —— 200W 重夺加强、γ 加深、funding 回正、宏观
              转松进对齐 —— 但盘面停住、每一根 MA 都在头顶、快周期翻到死叉
              带顶背离、scout 衰减出射程。</em>今天的条件围绕加强的地板重夺、
              衰减并站下的 scout、和一根两闸都 un-fired 的宏观尾重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>200W 周收重夺（多）</td><td className="bull">06-15 W-MON 收 &gt; $62,019 —— 两根最终日线收在上方 + 未收盘 bar +2.47% 在上方</td><td>确认地板重夺、06-08 后谱系的一周回踩并重夺；在确认转向上重开 scout-long 论 —— 现在以更宽边际是更高概率路径</td></tr>
                <tr><td>200W 周收破（空）</td><td className="bear">06-15 W-MON 收 &lt; $62,019</td><td>06-08 后谱系首次持续周收破 200W（上一根全历史破自己 200W 的收是 2023-10-09）—— 两根最终日线收在上方后现在是低概率路径；若印则升级周期-regime 读</td></tr>
                <tr><td>13JUN 到期结算（今日 08:00Z、约 8h 后）</td><td>+12.91M 正前端块清掉；除 13JUN 后 aggregate ≈ +7.8M（结算后一本更小的正本子）</td><td>把结算当中间 tell —— 清掉一根正块 trim 净多 γ 缓冲；本子守净正但更少、不是 regime 变化</td></tr>
                <tr><td>均值回归多 scout —— funding 腿（死了）</td><td className="bear">funding 空付 ≥4h —— 已死（funding 回正、快照 +5.95%、无 ≥4h streak）</td><td>scout 无法触发、即便 flip 腿清了（现货在 $63,282 上方 +0.47%）；站下 —— 只在一根新鲜 live funding 空付 ≥4h AND 一根确认 TD9 簇 AND 06-15 周重夺上重新武装、不要从唯一清掉的腿合成</td></tr>
                <tr><td>0-γ flip（走下、现货在上方）</td><td className="bull">flip $63,282（−$368）；现货 +0.47% / idx +0.76% —— 都在上方</td><td>06-12 那根骑墙在 flip 走下里向上解；现货现在两参考都坐在干净上方 —— 一根阻尼的、支撑性的 dealer 位置、本身不是触发</td></tr>
                <tr><td>宏观尾 re-grow（两腿都 UN-FIRED）</td><td className="bull">10Y &lt; 4.53%（在 4.45% UN-FIRED）；HY OAS 在 2.78%（UN-FIRED、不在上方）</td><td>06-12 两根触发都反转；无尾可长、无张力可管 —— 宏观现在与 BTC 转对齐；只在两根腿对一根 BTC 内部破位干净重触发上重新武装盯位</td></tr>
                <tr><td>挤压周期 hostile-2（无日历先验）</td><td className="stale">把每根新鲜 Δnet ≤ −3k 或 ≥ +3k 单分钟步本身读作信号</td><td>06-12 回补后本子走近乎不动（+412）、无离散步；一根新鲜重堆 ≤ −3k 在一根重新失败的 flip 下重新武装空读、一根 ≥ +3k 回补步在 flip 上方确认剧烈解 —— 两个都没印、本子静止</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                06-15 周收对 200W $62,019（现在倾向重夺、两根最终日线收在
                上方、未收盘 bar +2.47% 在上方）：一根周收回到 200W 上方确认
                地板重夺、并在 funding 腿重新武装后重开 scout-long 论；一根
                周收在下方仍会确认 06-08 后谱系首次持续的周-200W 破（上一根
                全历史破自己 200W 的收是 2023-10-09）、现在是低概率路径
              </span>
              。在那之前、本篇按写好的跑：交易台 flat、200W 盯位是主框架、
              它的重夺加强到两根最终日线收在上方、均值回归多 scout 衰减出
              射程（flip 腿清的同时 funding 腿死 —— 不追）、宏观尾 re-grow
              两腿都 un-fire、宏观对 BTC 的张力在多头侧解、挤压周期 hostile-2
              框架是一根本子走近乎不动的观察名单。dealer 本子加深到 +20.7M
              净多 γ、把 flip 走到现货下；funding 整根回正；OI 在平日里继续
              泄；BTC 7d 领 US 科技指数对（NQ/SP500）但不领全盘（JP225
              +4.31%、PALL +5.36% 跑得更高）、在一个仍 NORMAL 的宽 regime 里。
              下一个 24h 的对读是<em>耐心而 flat —— 让 06-15 周收确认加强的
              地板重夺、让 funding 腿重新武装、scout 在那之前只是衰减；结构
              改善、盘面停住、一根停住但偏多的消化不是交易</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2 · post codex hostile audit —— PASS-WITH-NOTES
            </span>
            <b>状态：</b>这是建在 2026-06-13 00:06Z 原子快照上的 <b>v2</b>
            cut。STAGE B codex 敌对式跨模型审计<b>已跑</b> —— 判决
            <b>PASS-WITH-NOTES</b>、无 CRITICAL、3 MAJOR + 1 MINOR —— 每一条
            finding 在 promotion 前都已应用并对完整 EN 文件 grep 核验。判决
            与 findings：<code>audits/2026-06-13-desk-note.md</code>。
            <b>Grep-closure（post codex hostile audit）：</b>{' '}
            <b>DN-001</b>（MAJOR · 窗口范围）—— 搜索的 pattern：
            <code>24h</code>/<code>4h</code>/<code>1h</code> 用作 live-tape
            回看标（窗口是 note-to-note 算的、比严格时钟窗长一分钟）；错误
            主张命中前 17（头部 stamp、funding meta ×3、Δ-funding + OI 键、
            OI/retail/SM 峰谷区间、lead + 平日 prose、funding prose、
            perp-basis 均值、windowed-flow 日行 ×2、squeeze ×2、scout
            thesis）、命中后 <b>0</b> —— 每一根 live-tape 窗都重标
            <code>n2n</code>、并在数据来源加了窗口口径定义；残留的
            <code>24h</code> 串是口径文本、MTF 扫描引擎自己的 24h 窗（一个
            独立 artifact）、和前瞻的 &ldquo;next 24h&rdquo;、没有一个是
            live-tape 回看 —— <b>RESOLVED</b>。{' '}
            <b>DN-002</b>（MAJOR · 宏观 z-score）—— 搜索的 pattern：陈旧的
            偶发/regime z 值 <code>−2.26</code>（Fed net-liq 符号翻转）、
            <code>+0.05 / −0.10</code>（5Y5Y）、<code>+0.12 / −0.80</code>
            （NFCI）、<code>−0.60 / −0.51</code>（MOVE）、
            <code>+1.30 / +0.72</code>（USD/JPY）、
            <code>−0.95 / +0.18</code>（US-JP 利差）、
            <code>+0.01 / −1.88 / −2.10</code>（USD/CNY）；命中前 7 行、命中后
            <b>0</b> —— 全部重新取自存档的 22:15Z dashboard（Fed net-liq
            偶发 z 修正 <code>−2.26 → +2.47</code> 带正/加流动性读；被标的
            z 值只活在宏观表内、prose 带的 10Y/TIPS/DXY z 未被标）——
            <b>RESOLVED</b>。<b>DN-003</b>（MAJOR · 跨资产领先）—— 搜索的
            pattern：<code>strongest</code>、<code>strongest-tier</code>、
            <code>index complex</code>、<code>leads the index</code>；命中前
            5（roman IV、body 括注、body &ldquo;leads the index complex&rdquo;、
            footer summary、本 trace）、命中后 <b>0</b> —— 全部重构为
            &ldquo;BTC 领 NQ/SP500（US 科技指数对）但<em>不</em>领全盘；JP225
            +4.31% 与 PALL +5.36% 跑得更高&rdquo;、保留 +1.49pt 的 BTC-NQ
            缺口（审计确认正确）—— <b>RESOLVED</b>。<b>DN-004</b>（MINOR ·
            MTF close 单元）—— pattern <code>63,532</code> 在 30m/4h/8h/1d
            行；修正为存档扫描收 30m <code>63,546</code>、4h/8h/1d
            <code>63,537</code>；残留的 <code>63,532</code> 单元是扫描现货
            和审计未标的 bar —— <b>RESOLVED</b>。Source pins（事实数据、对
            服务器 parquet / JSON 源核过）：funding × 1095（快照 +5.95% ann
            自原始 0.005433、n2n 均值 +2.18% ann、区间 −1.44% / +5.96%、封顶
            2 / 1442 在 +5.96% 最大值、neg-minute 占比 7.84% = 113 / 1442、
            最长负 streak 67 采样行 / ~1h07m 在窗开盘、快照上 funding 为正
            —— 无 ≥4h 空付腿、scout funding leg-2 已死）；GEX 双参考符号
            （flip $63,282、现货 +0.47% = 63,578.00 / 63,282 − 1 / idx
            +0.76% = 63,763 / 63,282 − 1 —— 都在上方、06-12 骑墙向上解；
            aggregate +20.7M 从 +9.7M 长；$60k −23.34M 稳；显示 expiry 行
            合计 ≈ +34.76M 非可加对 dashboard +20.7M、dashboard 权威；13JUN
            0.3DTE +12.91M 在 08:00Z 结算、除 13JUN 后 ≈ +7.8M、清掉一根正
            块压低 aggregate）；200W 全历史 W-MON SMA $62,019（200 根收盘
            bar 止于 06-08）对 live 现货 +2.51% 在上方、未收盘 06-15 bar
            $63,553 +2.47% 在上方、8 / 154 = 5.19% 频率、
            <code>weekly_200sma.json</code> 缺失（200W 直接从 parquet 算、
            JSON 百分位 / last-event 不可用、未捏造）；SM cut 分数 1.09%
            （long +1 / short −411 各自独立取整、net +412 回补；精确 net
            −37,705.498 → −37,293.252、Δ +412.246 —— 不要对取整端点求差；
            安静、无 ±3k 单分钟步）；日线收谱系（06-08 $63,058、06-09
            $61,695、06-10 $61,484 最终、06-11 $63,598 最终、06-12 $63,547
            最终、06-13 未收盘 $63,553 —— 两根最终收在地板上方）；30D RV
            40.92%（30 returns / 31 closes；41.19% 另一口径在 29 returns；
            窗 05-14 → 06-13）；跨资产 |r| 0.391 NORMAL、BTC +3.77% 领
            NQ/SP500（+1.49pt 对 NQ +2.28%、06-12 是 +2.21pt）但<em>不</em>
            领全盘（JP225 +4.31%、PALL +5.36% 更高）；宏观 Tier-1（10Y 4.45%
            −10bp —— re-grow leg-A UN-FIRED、reclaim-long 筛 10Y &lt; 4.55%
            RE-CLEARED；HY OAS 2.78% −2bp 回到闸上、leg-B UN-FIRED；TIPS
            2.16% regime-z EXTREME；DXY 100.08 RISK-OFF；MOVE 69.4；Fed 净
            流动性 $5.897T）；n2n 窗内无 cb_cvd reset（本次无需 reset 调整）；
            完整 MA 矩阵对 live 现货 $63,578.00、parquet 2026-06-13 00:06Z
            close $63,553.20（D-SMA100 $72,639 周期锚 −12.47%、每一根 MA 都在
            头顶、最近 D-EMA20 −4.81%、W-SMA150/200 在 129 根子集周 bar 下
            不可计算、W-EMA150/200 种子披露）；MTF 交叉标对存档扫描核过
            （15m 水下金叉 1b 刚印；30m / 1h 水上死叉带顶背离；3d ⚡ TD9 BUY
            + 底背离）；claims-vs-loaded-data（NTT / max-pain / strike-IV /
            BTC-NQ framework only；JGB 月度不依赖；IV 952 合约链中位数、不是
            可交易价差）。存档：
            <code>/opt/desk-note/snapshots/2026-06-13-0006/</code>
            （btc_gex.html、cross_asset_correlation_summary.md、
            macro_dashboard.html、mtf_div_latest.html）。
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；Next 16.2.6
            在 <code>node_modules/next/dist/bin/next:24-28</code> 处对 Node
            &lt; 20.9.0 硬退出、所以完整 <code>next build</code> 被环境阻塞
            （谱系延续）；<code>npx --no-install tsc --noEmit</code> 是 build
            proxy。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-06-13 00:06Z）、
            provenance 在上方数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-06-12 22:15Z（比快照早约 1h51m）、部分输入明确陈旧或待定
            并已标注。这是 <b>v2</b> 后审计 cut —— STAGE B codex 敌对式审计
            已跑（PASS-WITH-NOTES、无 CRITICAL）、其三 MAJOR + 一 MINOR
            findings 已应用并 grep 核验；判决记于上方审计痕迹与
            <code>audits/2026-06-13-desk-note.md</code>。水位、规模与条件是
            交易台流程的示例、不是长期推荐。过去的相关性、γ 与仓位模式不绑定
            未来盘面。衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                一根改善了每一根结构读的平日 —— 200W 重夺加强到两根最终收在
                上方、dealer 本子加深净多 γ 并把 flip 走到现货下、funding
                回正、宏观转松进对齐。但盘面停住：每一根 MA 都在头顶、快周期
                翻到死叉带顶背离、scout 在它的 funding 腿死后衰减出射程。
                Flat 而耐心 —— 06-15 周收是那道二元。
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
            v2 · 2026-06-13 00:06Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
