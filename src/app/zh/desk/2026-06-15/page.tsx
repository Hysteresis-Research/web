import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-15 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-15',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-15' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260615() {
  await requireViewer('/zh/desk/2026-06-15');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-15 · v2</span>
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
              <span className="dn-big">$65,680</span>
              n2n&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.90%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-15 00:06Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-15 00:06Z（snapshot pin）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 所有派生值都钉在 00:06Z 锚行 · live `t`
                    字段是 BJ 本地（UTC+8）、所以 00:06Z 锚行是
                    <code>06-15 08:06</code> · 此快照落在 14JUN 08:00Z 期权
                    结算后约 16h06m、15JUN 08:00Z 结算前约 7h54m ·
                    <b>窗口口径：</b>下面每一根 live-tape 比较都是
                    <b>NOTE-TO-NOTE（n2n）</b>—— 从上一篇 06-14 00:06Z 快照量
                    到本篇 00:06Z 快照、本次两根快照正好相隔 24h、即日窗 1441
                    采样行 ≈ 24h00m、241 行 ≈ 4h00m、61 行 ≈ 1h00m —— 所以
                    日 / 4h / 1h 的 Δ 都标 <code>n2n</code>；任何残留的
                    &ldquo;24h&rdquo; 标都是 MTF 扫描引擎自己的窗或前瞻措辞 ·
                    <b>SM 块仍 FROZEN：</b>Hyperliquid smart-money feed 自
                    2026-06-12 01:36Z 起未再前进（此快照上已陈旧约 70.5h）——
                    SM 多/空/净读 STALE、按 framework-only 处理、不作实时仓位
                    （见 meta tile + 仓位节）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-15 00:01Z scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 较 00:06Z 快照锚
                    滞后约 5 分钟 · 含未收盘 K 线 · 作者时逐字存档于
                    <code>/opt/desk-note/snapshots/2026-06-15-0006/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-15 00:01Z 快照</td>
                  <td className="dn-flag">
                    pre-settle · 较快照锚滞后约 5 分钟 · Deribit idx $65,899
                    对 live $65,679.88（高 $219）· 948 合约（06-14 是 946、
                    +2）· 15JUN 0.3DTE +28.59M 在今日 08:00Z 结算（约 8h
                    后）—— 这是 06-15 周结算、正坐在二元日上 · 除 15JUN 后
                    aggregate ≈ +45.5M 仍净正（清掉正的前端块会<em>压低</em>
                    aggregate；dashboard 合计 +74.1M 权威、显示行非可加 ——
                    见盘口本子节）· 存档于
                    <code>/opt/desk-note/snapshots/2026-06-15-0006/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-15 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 5 分钟 · 7d 1h bar · 22 资产 · 166 rows · regime NORMAL（均值 |r| 0.421）· 存档于 <code>/opt/desk-note/snapshots/2026-06-15-0006/</code></td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-14 22:17Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1h49m · <b>周末（周日夜渲染）</b> —— FRED
                    Tier-1 日度序列冻在周五 06-12 收（10Y 4.45%、TIPS 2.16%、
                    HY OAS 2.78% 全沿用；不要把 Δ 读成新鲜周末移动 —— 周一
                    FRED 日度打印在接下来的美盘恢复、在此快照之后）· DXY
                    99.46（当日 1d Δ −0.29；对 06-14 的 99.75 为 −0.29
                    note-to-note —— 本次 dashboard 1d Δ 与 n2n 移动重合）·
                    Fed 净流动性 $5.897T · 存档于
                    <code>/opt/desk-note/snapshots/2026-06-15-0006/</code>
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
                  <td className="dn-flag">陈旧 · 月度（~74d）· 不作实时</td>
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
              <span className="dn-v bull">+2.69%</span>
              <span className="dn-src">live · 快照 +2.69% ann（原始 +0.002455 × 1095；快照上多付空 live —— funding 翻回正）· n2n 均值 ann −2.58%（06-14 是 +0.29%；窗中段跑了一根长空付腿、在快照前结束）· 封顶占用 1 / 1441 采样行在 +6.11% 最大值、2 / 1441 在 −6.72% 最小值 · neg-minute 占比 74.88%（1079 / 1441、06-14 是 41.64%、+33.24pt）· n2n 峰 +6.11% ann · n2n 谷 −6.72% ann</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · n2n</span>
              <span className="dn-v bull">均值 +0.29% → −2.58%（−2.87pt）· 快照 −5.03% → +2.69%（+7.72pt）</span>
              <span className="dn-src">区间 −6.72% / +6.11% ann · funding 路径在窗中段跑了一根长空付腿（最长连续负 streak 1079 采样行 / ~17h59m、ENDED 在 06-15 02:04 BJ / UTC 06-14 18:04、靠近窗低）然后翻回正进快照 —— 收在快照上的尾随连续正 streak 是 362 采样行 / ~6h02m、快照上 funding 为正 · 快照上 funding 不为负、所以 scout funding leg-2 闸又 DEAD、从 06-14 的 REVIVED 读反转 · 这是 funding 腿连续第三篇翻态（06-13 DEAD → 06-14 REVIVED → 现在 DEAD）</span>
            </div>
            <div>
              <span className="dn-k">OI · n2n</span>
              <span className="dn-v bull">+1.42%（+1,423 BTC）</span>
              <span className="dn-src">live · 101,578（从 06-14 快照 100,155 升、+1,423）· OI 连续第二天扩张 —— 比 06-14 的 +2,365 小、但把 OI build 延进上涨腿（post-06-08 的 build 是 06-10 +737、06-11 +216、然后 06-12 −1,211 / 06-13 −466 泄、再 06-14 +2,365 与本次 +1,423）· n2n 峰 101,831、谷 99,951</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v">58.70 / 41.30</span>
              <span className="dn-src">live_db `mkt_long_pct` · 较 06-14 的 59.29 再泄 −0.59pt（价格涨但 de-crowding 连续第二天 —— 散户仍没追上涨腿）· n2n 区间 58.09 / 59.85 · 峰 59.85 / 谷 58.09</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v stale">−37.3k · FEED 冻 ~70.5h（未载入）</span>
              <span className="dn-src">live_db SM 块自 2026-06-12 01:36Z 起未再前进 —— long 13,532.412 / short 50,825.664 / net −37,293.252 是冻住的最后写入值、与 06-13 / 06-14 备忘逐字相同（冻结早于两篇）。此快照上陈旧约 70.5h。按 STALE / 未载入处理 —— 本次无实时 SM 仓位读</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 06-14 备忘</span>
              <span className="dn-v stale">不可计算 —— feed 冻住</span>
              <span className="dn-src">SM 端点与 06-14 逐字相同、因为 feed 在 2026-06-12 01:36Z 冻住；本次不捏造就算不出任何 SM Δ、cut 分数、或挤压周期步 · 唯一的实时仓位读是 retail mkt_long_pct 和 perp-tape 代理（OI + funding + basis）</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">44.5% / 42.09%</span>
              <span className="dn-src">GEX IV 中位数横跨 948 合约（06-14 是 43.6% / 946、+0.9pt）· IV/RV 价差 +2.41pt · 30D close-to-close RV 42.09%（30 returns / 31 closes；29-return 另一口径 42.82%）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+3.34%（现货）/ +3.69%（idx）—— 两个都在上方</span>
              <span className="dn-src">flip $63,557（前 $63,359、走 <em>上</em> +$198）· 对 live 现货 $65,679.88（65,679.88 / 63,557 − 1 = +3.339%）/ GEX 文件 idx $65,899（65,899 / 63,557 − 1 = +3.685%）—— 两参考都干净在 flip 上方、缺口随现货比 flip 走得更快而再拉宽 · aggregate GEX +74.1M（前 +63.4M、长了 +$10.7M 净多 γ）· $60k 崩盘 put −18.00M（从 −21.07M 减轻）· P/C 0.60</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                上涨腿延伸成一根 V 形第二天 —— 盘面 dipped 到 $63,651
                然后拉 <span className="dn-tag bull">+1.90% 到 $65,680</span>、
                结构几乎在每一根读上都硬起来；但盘面现在在闪疲态、跟结构硬
                起来一样响、而 smart-money feed 仍走黑
              </span>
              。在一条 perp/OHLC 盘面区间
              <span className="dn-tag">$65,775 / $63,651</span> 里
              （高 @ BJ 07:57 06-15 / UTC 23:57 06-14、低 @ BJ 02:23 06-15 /
              UTC 18:23 06-14）早盘的 dip 被狠狠买进、午后的磨把现货送到
              本次新 n2n 高。200W 地板重夺<em>再加强</em> —— 06-14 日线收
              最终定在 <span className="dn-tag bull">$65,702</span>、所以
              现在有 <span className="dn-tag bull">四根最终日线收在 $62,019
              地板上方</span>（06-11 $63,598、06-12 $63,547、06-13 $64,418、
              06-14 $65,702）、外加未收盘的 06-15 周 bar $65,625 也在上方。
              dealer 本子把净多 γ 再加深到
              <span className="dn-tag bull">+74.1M</span>（前 +63.4M）、
              0-γ flip 只走上到 <span className="dn-tag">$63,557</span>（前
              $63,359）、所以现货现在坐在
              <span className="dn-tag bull">flip 上方 +3.34% 干净</span> ——
              缺口又拉宽。快周期也延伸了：四根快/中周期（15m / 30m / 1h /
              4h）现在都在云<em>上</em>、4h 在一根新鲜水上金叉上重夺了它的
              云、最近的日线 MA 来到一波 swing 之内（D-SMA20 −1.18%、D-EMA20
              −1.46%）。
              <em>但切掉干净的那几刀更响了：funding 在快照翻回正
              （+2.69% ann、一根 ~18h 空付腿在快照前结束）、所以 scout 的
              funding 腿又死了；快周期在尖叫超买（RSI 77.8 / 78.9 / 75.9）、
              进了四根 ⚡ TD9 SELL 信号与 30m / 1h / 4h 上的顶背离；
              Hyperliquid SM feed 冻 ~70.5h、所以 smart-money 侧仍无法确认；
              而每一根 MA 仍在头顶。</em>均值回归 scout 仍<em>无法</em>触发
              —— 它的 flip 腿守、但它的 funding 腿又死、它的 TD9-BUY 簇完全
              翻成一根 SELL 簇。这是一根在硬起来的结构上延伸成真上涨腿、却
              直冲进短线疲态、而仓位本子不可读的反弹 —— 交易台守 FLAT、
              06-15 周收（今日收盘解）仍是那道二元、现在硬倾向重夺。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$65,680</span> live、
              <span className="dn-tag bull">+1.90%</span> note-to-note ——
              一根 V 形上涨日、1h <span className="dn-tag bull">+0.65%</span>、
              4h <span className="dn-tag bull">+2.91%</span>、涨势集中在早盘
              dip 到 $63,651 之后的后半段。<span className="dn-signal">周期
              地板重夺是那根再加强的读</span>：06-14 收最终定在 $65,702
              （06-14 备忘当时带的是未收盘 $64,388）、给出四根连续<em>最终</em>
              日线收在 200W $62,019 上方 —— 06-11 $63,598、06-12 $63,547、
              06-13 $64,418、06-14 $65,702 —— 加未收盘的 06-15 bar $65,625
              也在上方。这是对 06-14 谱系（三根最终收）的一次严格升级。MA
              矩阵仍整个在头顶、但最近几根来到一波正常 swing 之内 ——
              <span className="dn-tag bull">D-SMA20 $66,467（−1.18%）</span> 是
              最近、<span className="dn-tag bull">D-EMA20 $66,654（−1.46%）</span>
              紧随其后 —— 两根快日线都到了容易够到的距离、对 06-14 是明确改善
              （当时最近 −3.28%）。周期锚
              <span className="dn-tag bear">D-SMA100 $72,608（−9.54%）</span> 坐
              在日线栈下方、早 6 月破掉的 W-SMA20 周地板仍是
              <span className="dn-tag bear">$72,207（−9.04%）</span> 在头顶。
              <span className="dn-em">日线与周线阶梯上每一根 MA 都在现货上方；
              整个盘上唯一一根正结构偏移就是 200W 地板自己（+5.90%）。这仍是
              一根在收盘口径上重夺了周期地板、现在压最近几根日线 MA 的盘面 ——
              重夺四根收深、反弹在延进下方 MA 带。</span>均值回归 scout 的三腿
              门又以另一种轴衰减：本次它的 funding 腿<em>又死了</em>（funding
              在快照翻回正）、它的 TD9-BUY 簇仍翻空（四根 ⚡ TD9 SELL 跨 15m /
              30m / 8h / 12h、3d 持一根水上死叉在 Sell 1）、只有它的 flip 腿守
              —— 所以门离干净触发没更近、只是又断在另一种组合上。scout 站下。
            </p>
            <h2 className="dn-sec">
              仓位{' '}
              <span className="dn-roman">I · 实时盘面 · SM feed 仍冻 ~70.5h（未载入 —— 无 smart-money 读）· funding 翻回正（快照 +2.69%、一根 ~18h 空付腿在快照前结束 —— scout leg-2 又死）· OI 连续第二天扩张（+1,423）· retail 再泄 −0.59pt、仍没追</span>
            </h2>

            <p>
              <span className="dn-signal">
                本次最重要的一条仓位事实又是一个缺席：Hyperliquid
                smart-money feed 冻住了、而且现在已经冻了约 70.5 小时
              </span>
              。live_db 里的 SM 块自 <span className="dn-tag stale">2026-06-12
              01:36Z</span> 起未再前进 —— long_btc
              <span className="dn-tag">13,532.412</span>、short_btc
              <span className="dn-tag">50,825.664</span>、net
              <span className="dn-tag">−37,293.252</span> 是最后写入值、且
              <span className="dn-em">与 06-13 / 06-14 备忘带的数字逐字相同</span>、
              这意味着冻结早于两篇、smart-money 侧在整根上涨腿上都走黑。
              <span className="dn-em">本次不捏造数字就算不出任何 SM Δ、cut
              分数、挤压周期单分钟步 —— 整个 smart-money 侧连续第三篇按 STALE /
              未载入处理。</span>诚实的后果不变：挤压周期 hostile-2 框架本次
              无法用自己的数据评估、剩下唯一的实时仓位读是 retail mkt_long_pct
              和 perp-tape 代理（OI + funding + basis）。这根代理这次的话变了
              —— 变的就是 funding 翻面。
            </p>

            <p>
              <span className="dn-signal">
                杠杆侧翻回去了 —— funding 在快照穿回多付、在窗里跑了一根长
                空付腿之后、那正是又<em>杀掉</em> scout funding 腿的东西
              </span>
              。funding 在快照是 <span className="dn-tag bull">+2.69% ann</span>
              （原始 +0.002455 × 1095）、n2n 均值
              <span className="dn-tag">−2.58%</span>（对 06-14 的 +0.29%）、区间
              <span className="dn-tag">−6.72% / +6.11%</span>。路径在窗中段跑了
              一根深空付腿 —— 最长连续负 streak 是
              <span className="dn-tag bear">1079 采样行 / ~17h59m</span>、但它
              <span className="dn-em">ENDED 在 06-15 02:04 BJ（UTC 06-14
              18:04）、靠近窗低</span>、funding 然后翻正进快照 —— 收在快照上的
              尾随连续正 streak 是 <span className="dn-tag bull">362 采样行 /
              ~6h02m</span>、快照上 funding 牢牢为正。
              <span className="dn-em">06-14 那根读 —— leg-2 在一根 ≥4h 空付腿
              快照上为负而 REVIVED —— 又反转了：funding 在快照付多、进快照的
              连续腿为正、均值回归 scout 的 funding 空付腿现在 DEAD、不只是更
              弱。这是 funding 腿连续第三篇翻态（06-13 DEAD → 06-14 REVIVED →
              现在 DEAD）。</span>neg-minute 占比 41.64% → 74.88% 跳起
              （1079 / 1441 —— 窗大半 WAS 空付、但进快照正常化了）、封顶占用是
              <span className="dn-tag">1 / 1441 在 +6.11% 最大值、2 / 1441 在
              −6.72% 最小值</span>、OI
              <span className="dn-tag bull">+1,423 BTC（+1.42%）</span> 连续第二天
              扩张（101,578、从 06-14 快照 100,155 升；比 06-14 的 +2,365 小、
              但延续 build）、retail
              <span className="dn-tag">mkt_long_pct 58.70%</span> 在价格涨时
              再泄 −0.59pt —— 散户仍没追上涨腿。perp 在快照对现货交一道
              <span className="dn-tag bear">−$53.70 折价</span>（1h 均值
              −$41.25、4h 均值 −$45.82；n2n 日均值 −$35.28、区间 −$282.00 /
              +$26.25 —— basis 盘中短暂转升水、但快照上坐折价）。1 分钟
              aggressor skew 快照 <span className="dn-tag bull">+11.1</span>
              （1h 均值 −3.12）—— 进快照一道买方倾斜。
              <span className="dn-em">
                funding 翻回多付、OI 仍扩张、perp 折价、散户在涨势里 de-crowd：
                perp-tape 代理读的是一根现在被多头压的涨势（OI 在 build、
                funding 进快照正常化转正）、而不是 06-14 那种偏空配置 —— 一根
                更常规偏多、少 squeeze-primed 的读。SM feed 走黑、它停在代理读、
                不是确认读。
              </span>
            </p>

            <p>
              窗口流是<em>一根 V 形日、后半段在现货与期货两侧都被买 ——
              一根真上涨日、dip 被买、然后在现货与杠杆上被追进快照</em>。
              n2n 日：价格 <span className="dn-tag bull">+1.90%</span>、OI
              <span className="dn-tag bull">+1,423 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +1,512</span>
              <span className="dn-em">（窗内无 cb_cvd reset）</span>、期货 CVD
              <span className="dn-tag">Δ +158</span>、大单
              <span className="dn-tag">−8 BTC</span>、taker-net
              <span className="dn-tag">−9</span> ——
              <span className="dn-em">现货决定性地买了这一天、而日级期货 CVD
              净到大致走平（期货卖了早盘 dip 然后买回午后涨势）、OI 仍扩张 ——
              净多头开仓压进后半段涨势</span>。4h（进快照）：价格
              <span className="dn-tag bull">+2.91%</span>、OI
              <span className="dn-tag bull">+844 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +1,035</span>、期货 CVD
              <span className="dn-tag bull">Δ +974</span>、大单
              <span className="dn-tag bull">+5 BTC</span>、taker-net
              <span className="dn-tag bull">+16</span> ——<em>涨势腿：现货与
              期货 aggressor 都狠买、OI 在 build、本窗最干净的一根冲动上移</em>。
              1h：价格 <span className="dn-tag bull">+0.65%</span>、OI
              <span className="dn-tag bull">+64 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +114</span>、期货 CVD
              <span className="dn-tag bull">Δ +306</span>、大单
              <span className="dn-tag">+0 BTC</span>、taker-net
              <span className="dn-tag bull">+26</span> ——<em>最后一小时仍出价、
              期货 aggressor 仍在买、OI 微升 —— 进快照的延续、不是停顿</em>。
              4h 形状是最干净的读：一根现货与期货领头的涨势、OI 在 build、
              funding 正常化转正 —— 一根 perp 本子现在加入而非相搏的反弹、是
              更常规的延续燃料、但移除了 06-14 偏空盘面带的那份空头挤压不对称。
            </p>
            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 四根快/中周期（15m / 30m / 1h / 4h）现在都在云上（4h 在一根新鲜水上金叉上重夺）、8h 爬进了云 —— 结构硬了 · 但 RSI 超买（77.8 / 78.9 / 75.9）、进四根 ⚡ TD9 SELL 与 30m / 1h / 4h 上的顶背离 —— 疲态加剧 · 每一根 MA 都在头顶</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图把结构再硬一档、并把疲态点得更响：扫描读 net 3 bull /
                4 bear / 3 neutral（比 06-14 的 3 / 5 / 2 少一根偏空）、头部标
                &ldquo;高级别偏空 · 短线反弹&rdquo;、带一根 ⚡ 30m TD9 反转提示
              </span>
              。整根快/中带现在都在云<em>上</em> —— 15m、30m、1h AND 4h 全清了
              自己的云、4h 本次在一根 <span className="dn-tag bull">新鲜水上
              金叉 1b</span> 上重夺它的云、8h 从云下爬进云内（64.7k–68.6k）。
              但快周期现在在尖叫超买：15m RSI
              <span className="dn-tag bear">77.8</span>、30m
              <span className="dn-tag bear">78.9</span>、1h
              <span className="dn-tag bear">75.9</span> —— 全深在超买区 —— 而
              疲态信号堆起来了：
              <span className="dn-tag bear">⚡ TD9 SELL 在 15m、30m、8h AND
              12h</span>（四根、加头部的 ⚡ 30m 反转提示）、配 30m / 1h / 4h
              上的顶背离。
              <span className="dn-em">反弹在升进超买快周期 RSI 与一簇 TD9 SELL
              疲态告警 —— 经典的延伸进疲态签名、现在比 06-14 更明显。</span>
              肯定的多在日线持续：<span className="dn-tag bull">1d 水下金叉
              2b</span>（06-14 那根新鲜金叉守住并老了一根 bar）、不过 1d 仍在
              云下（RSI 41.7）在 Sell 7。慢周期仍在云下且杂色：12h 水下金叉
              13b 但 ⚡ TD9 SELL 在云下、3d 持一根
              <span className="dn-tag bear">水上死叉 6b 在 Sell 1</span>
              （周期-框架的那根空）、1w 无交叉云下 Buy 5、1M 持待定 Buy 8 → 9?
              在云上。
              <span className="dn-em">
                直读：反弹把结构硬了（四根快/中周期都在云上、4h 重夺、8h 进
                云、1d 金叉守住）—— 一根真正延伸的上涨腿 —— 但它是在超买快周期
                RSI、四根 ⚡ TD9 SELL 信号与中周期顶背离里这么做的、而 3d 死叉
                让周期框架仍偏空。这张图是一根攒够动能把整根快带抬上云、却同时
                在闪那些先于停滞的疲态的反弹。高周期结构仍偏空；短线反转 regime
                偏向反弹；超买-进-TD9-SELL 读警告它在快速成熟。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">65,721</td><td className="num bear">77.8</td><td className="bull">金叉（水下）18b</td><td className="bull">云上 ↓64.2k 11b</td><td className="bear">⚡ TD9 SELL</td><td>BULL reg</td></tr>
                <tr><td>30m</td><td className="num">65,730</td><td className="num bear">78.9</td><td className="bull">金叉（水下）6b</td><td className="bull">云上 ↓64.4k 6b</td><td className="bear">⚡ TD9 SELL</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">65,730</td><td className="num bear">75.9</td><td className="bull">金叉（水上）3b</td><td className="bull">云上 ↓64.2k 4b</td><td>Sell 5</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">65,730</td><td className="num bull">68.1</td><td className="bull">金叉（水上）1b · 新鲜</td><td className="bull">云上 ↓65.1k 1b</td><td>Sell 2</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>8h</td><td className="num">65,718</td><td className="num bull">60.3</td><td className="neut">无交叉</td><td className="neut">云内 64.7–68.6k 1b</td><td className="bear">⚡ TD9 SELL</td><td>BEAR hid</td></tr>
                <tr><td>12h</td><td className="num">65,718</td><td className="num">53.1</td><td className="bull">金叉（水下）13b</td><td className="bear">云下 ↑72.8k 47b</td><td className="bear">⚡ TD9 SELL</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">65,718</td><td className="num bull">41.7</td><td className="bull">金叉（水下）2b</td><td className="bear">云下 ↑74.3k 14b</td><td>Sell 7</td><td>—</td></tr>
                <tr><td>3d</td><td className="num">65,730</td><td className="num bull">39.6</td><td className="bear">death（水上）6b</td><td className="bear">云下 ↑74.7k 4b</td><td>Sell 1</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">65,729</td><td className="num bull">37.3</td><td className="neut">无交叉</td><td className="bear">云下 ↑100.3k 20b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">65,730</td><td className="num">43.6</td><td className="bull">DIF 水上（无交叉）</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（滚动 latest
                    文件；逐字存档于
                    <code>/opt/desk-note/snapshots/2026-06-15-0006/</code>）。
                    头部告警：<em>net 3 bull / 4 bear / 3 neutral · 高级别偏空
                    · 短线反弹</em>、<em>⚡ 30m TD9 反转提示</em>、<em>四根 ⚡
                    TD9 SELL（15m / 30m / 8h / 12h）</em>、<em>顶背离在 30m /
                    1h / 4h</em>。扫描现货 $65,718、24h +2.07%（00:01Z MTF
                    扫描；live-tape 头部 00:06Z 在快照窗读 +1.90% n2n —— 5
                    分钟时间差与不同窗导致偏差）、24h H/L $65,775 / $63,650、
                    qVol $7.56B。收盘为未收盘 K 线；每个值在各周期收盘前都按
                    临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认反弹仍发生在结构下方、但最近几根现在在一波正常
              swing 之内、快日线带几乎重夺。现货 $65,680 坐在盘上每一根日线
              与周线下方；任何地方唯一一根正偏移就是 200W 地板自己（+5.90%）。
              最近头顶是 <span className="dn-tag bull">D-SMA20 $66,467
              （−1.18%）</span> 然后 <span className="dn-tag bull">D-EMA20
              $66,654（−1.46%）</span> —— 两根快日线都在容易够到的距离 —— 然后
              <span className="dn-tag bear">D-EMA50 $70,665（−7.05%）</span>、
              <span className="dn-tag bear">W-SMA20 $72,207（−9.04%）</span>
              （破掉的周地板）、
              <span className="dn-tag bear">D-SMA100 $72,608（−9.54%；
              周期锚）</span>、
              <span className="dn-tag bear">D-EMA100 $73,282（−10.37%）</span>、
              <span className="dn-tag bear">D-SMA150 $73,320（−10.42%）</span>、
              <span className="dn-tag bear">D-SMA50 $73,676（−10.85%）</span>、
              <span className="dn-tag bear">W-EMA200 $73,788（−10.99%；
              种子）</span>、
              <span className="dn-tag bear">W-EMA20 $75,563（−13.08%）</span>、
              <span className="dn-tag bear">D-EMA150 $76,013（−13.59%）</span>、
              <span className="dn-tag bear">D-SMA200 $77,517（−15.27%）</span>、
              <span className="dn-tag bear">W-EMA150 $78,124（−15.93%；
              种子）</span>、
              <span className="dn-tag bear">D-EMA200 $78,665（−16.51%）</span>。
              更高更远、已弃用：W-EMA100 $82,732（−20.61%）、W-EMA50
              $83,481（−21.32%）、W-SMA100 $88,555（−25.83%）、W-SMA50
              $91,859（−28.50%）。
              <span className="dn-em">
                MA 锚自 parquet 2026-06-15 00:06Z close $65,625.10；偏移
                按 live 现货 $65,679.88 重算。显示的 MA 水位按 $ 取整、
                偏移用精确序列值算。子集 MA 阶梯取 2024–2026 窗、按交易台
                政策；W-SMA150 / W-SMA200 不可计算（129 根子集周 bar）、
                W-EMA150（−15.93%）与 W-EMA200（−10.99%）从可用历史 seed、
                按种子披露。200W $62,019 是全历史 W-MON 线（200 根收盘 bar、
                止于 06-08）。日线收盘：06-08 $63,058（上方）、06-09 $61,695
                （下方）、06-10 $61,484 最终（下方）、06-11 $63,598 最终
                （上方）、06-12 $63,547 最终（上方）、06-13 $64,418 最终
                （上方）、06-14 $65,702 最终（上方）、06-15（未收盘）$65,625
                （上方）—— 四根最终收在 200W 地板上方、加未收盘 bar 在上方。
              </span>
            </p>
            <h2 className="dn-sec">
              盘口本子{' '}
              <span className="dn-roman">III · 本子再加深到 +74.1M 净多 γ（前 +63.4M）· 0-γ flip 只走上到 $63,557、所以现货坐在 +3.34% 干净上方（缺口又拉宽）· 15JUN +28.59M（06-15 周结算）今日 08:00Z 清、清掉一根正块会压低 aggregate 到 ≈ +45.5M</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子在上涨日里又把净多 γ 加深、而 flip 几乎没动、
                所以现货又从它上方拉开
              </span>
              。aggregate GEX 是 <span className="dn-tag bull">+74.1M / 1%</span>
              （06-14 是 +63.4M —— 一根 +$10.7M 正向长）；本子现在比周初更牢牢
              净多 γ（阻尼）。0-γ flip 只移动
              <span className="dn-tag">$63,359 → $63,557（+$198）</span>、现货
              $65,680 现在坐在 <span className="dn-tag bull">flip 上方
              +3.34%</span>、现货口径（65,679.88 / 63,557 − 1 = +3.339%）；GEX
              文件自己的 Deribit idx 参考 $65,899 读 <span className="dn-tag bull">上方 +3.69%</span>（65,899 / 63,557 − 1 = +3.685%）。
              <span className="dn-em">两参考都干净在 flip 上方、缺口对 06-14
              又拉宽（当时 +1.73% / +1.95%）—— 现货又比 flip 走得快、所以
              dealer 本子现在从更深的强势位置阻尼。</span>墙图是一道厚正头顶带
              对一根减轻的深崩盘 put：最重正墙
              <span className="dn-tag bull">$67k +16.82M</span>、
              <span className="dn-tag bull">$66k +14.82M</span>、
              <span className="dn-tag bull">$80k +13.20M</span>、
              <span className="dn-tag bull">$70k +11.28M</span>、
              <span className="dn-tag bull">$65k +7.42M</span>（就在现货下）、
              <span className="dn-tag bull">$75k +6.77M</span>、
              <span className="dn-tag bull">$65.5k +5.59M</span>、
              <span className="dn-tag bull">$68k +5.47M</span>、
              <span className="dn-tag bull">$64.5k +5.26M</span>；负的是
              <span className="dn-tag bear">$60k −18.00M</span>（那根持久崩盘
              put、从 06-14 的 −21.07M 减轻）、
              <span className="dn-tag bear">$62k −7.29M</span>、
              <span className="dn-tag bear">$55k −5.72M</span>、
              <span className="dn-tag bear">$50k −4.76M</span>、
              <span className="dn-tag bear">$64k −3.40M</span>（就在现货下）。
              <span className="dn-em">
                近头顶 $65k–$67k 带是一道厚正撑架（四根 strike 合计 ~+44M）、
                现货就坐在 $65k +7.42M 与 $65.5k +5.59M 墙上方、$66k–$67k
                +31.6M 密封顶下方 —— 一根对推穿 $66k–$67k 结构性 offered、对
                回落往现货下方小小 $64k −3.40M / $63k −2.43M 口袋 bid 的
                dealer 本子。$60k 崩盘 put 磁铁又减轻了（+$3.07M 对 06-14、
                −21.07M → −18.00M）、但在现货下方 −8.6%、不是近现货锚。
              </span>
            </p>

            <p>
              expiry strip 前端整根为正、但显示行对 dashboard 合计是
              <span className="dn-em">非可加</span>。各 expiry：15JUN 0.3DTE
              <span className="dn-tag bull">+28.59M</span>（今日 08:00Z 结算
              —— 这是 06-15 周结算、最重的近端正、正坐在二元日上）、16JUN 1.3
              <span className="dn-tag bull">+3.71M</span>、17JUN 2.3 +2.90M、
              18JUN 3.3 +3.53M、19JUN 4.3 <span className="dn-tag bull">+13.92M</span>、
              <span className="dn-tag bear">26JUN 11.3 −10.03M</span>（月度、
              盘上最重负块、从 06-14 的 −16.80M 减轻）、3JUL +1.19M、31JUL
              <span className="dn-tag bull">+18.15M</span>（整体最重的正）、
              28AUG +3.42M、25SEP +4.38M、25DEC +5.49M、26MAR27 +0.88M。
              <span className="dn-em">显示行合计 ≈ +76.13M、这<em>不是</em>
              dashboard aggregate +74.1M —— 各 strike / 各 expiry 分解对头部
              合计非可加；dashboard +74.1M 权威。</span>15JUN 0.3DTE 在今日
              08:00Z 结算（约 8h 后）、是 06-15 周结算：因为它是一根正的
              +28.59M 块、清掉它会<em>压低</em> aggregate —— 除 15JUN 后读
              约 +45.5M、仍牢牢净正、但结算后是一本更小的正本子。
              <span className="dn-em">
                15JUN +28.59M 块正落在二元日上 —— 期权结算（08:00Z）与 06-15
                周 K 线收（23:59Z）今天重合。配上 26JUN 月度 −10.03M 这根
                结构性负的仍远在时间上且减轻、curve 前端是一道在今日结算后
                变薄、但仍净多 γ 的正撑架。
              </span>
            </p>

            <p>
              IV 中位数横跨 948 合约是 <span className="dn-tag">44.5%</span>
              （从 06-14 的 43.6% / 946 合约硬起来 —— 一根 +0.9pt 轻推、已实现
              守高）对 30D close-to-close RV
              <span className="dn-tag">42.09%</span> —— 链级 richness
              <span className="dn-tag">~+2.41pt</span>、IV/RV 价差守近平。
              <span className="dn-em">是 948 合约的链中位数、
              <span className="dn-em">不是</span>可交易价差；expiry- /
              strike-level vega、skew、期限结构仍未载入、vol 读法保持
              framework only。</span>
              RV 方法：30D close-to-close、logret.std × √365 × 100、用最末
              30 根日 log return（= 连续 31 根日 close）、锚自 parquet
              2026-06-15 00:06Z；底层 31-close 窗区间 05-16 → 06-15。（参考：
              最末 29 returns / 30 closes 读 42.82%；页面值 42.09% 来自 30
              returns。）P/C 比 0.60 在 GEX 文件上（Call OI 268,122 / Put OI
              160,154）。
            </p>
            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 周末（周日夜渲染）—— FRED Tier-1 日度序列仍冻在周五 06-12 收（10Y 4.45%、TIPS 2.16%、HY OAS 2.78% 沿用；周一打印在接下来的美盘恢复）· re-grow 两腿仍 UN-FIRED、reclaim-long 筛守 · DXY 再软到 99.46 · 跨资产 NORMAL |r| 0.421、BTC 对 TradFi-tech 的对齐急剧收紧</span>
            </h2>

            <p>
              <span className="dn-signal">
                渲染时仍是周末 —— 今天是周一、但宏观面板周日夜渲染、所以 FRED
                Tier-1 日度序列带着周五 06-12 收、不该读成新鲜移动；周一日度
                打印在美盘恢复、在此快照之后
              </span>
              。面板渲染 2026-06-14 22:17Z、比快照早约 1h49m。US 10Y nominal
              <span className="dn-tag bull">4.45%</span>、regime z
              <span className="dn-tag bear">+1.38</span>、偶发 z
              <span className="dn-tag bull">−0.50</span> —— 带在周五水平、
              <span className="dn-em">守住 reclaim-long 利率筛（10Y &lt; 4.55%）
              为真、并让 re-grow leg-A 闸（10Y &gt; 4.53%）UN-FIRED</span>。
              10Y TIPS real <span className="dn-tag bull">2.16%</span>、regime z
              <span className="dn-tag bear">+2.12</span>、偶发 z
              <span className="dn-tag bear">+0.94</span> —— 带住；regime z 是
              日面板上唯一一根 EXTREME risk-off 标。5Y5Y BE 通胀
              <span className="dn-tag">2.23%</span>。HY OAS
              <span className="dn-tag">2.78%</span>、regime z
              <span className="dn-tag bull">−0.84</span>、偶发 z
              <span className="dn-tag">+0.31</span> —— 带在 2.78% re-grow 闸
              <em>上</em>、所以 re-grow leg-B 仍 UN-FIRED（不在它上方）。MOVE
              债波 <span className="dn-tag">69.4</span> —— 松、平。美元再软：
              DXY <span className="dn-tag bull">99.46（当日 1d Δ −0.29）</span>、
              regime z <span className="dn-tag bear">+1.03</span>、偶发 z
              <span className="dn-tag bear">+0.59</span> —— z 标上仍 RISK-OFF、
              但对 06-14 的 99.75 软了 −0.29 note-to-note（dashboard 自己的
              1d Δ 是 −0.29、本次与 n2n 移动重合）；Fed 净流动性
              <span className="dn-tag bull">$5.897T</span> 松；NFCI −0.506 中性
              （陈旧 ~9d）；US-JP 10Y 利差 <span className="dn-tag">1.94%</span>；
              USD/JPY <span className="dn-tag">160.18（+0.05）</span>；USD/CNY
              6.7621。
              <span className="dn-em">
                净：周末什么都没触发、因为日度序列仍带在周五收 —— re-grow 闸
                仍 un-fired（10Y 4.45% 在 4.53% leg-A 闸下；HY OAS 2.78% 在闸
                上、不在上方）、reclaim-long 筛（10Y &lt; 4.55%）守。唯一动的
                宏观是美元再软落破 100、一根第二天 risk-on 跳。宏观面与 BTC 转
                <em>对齐</em>、不再相搏；DXY 硬与 TIPS-real EXTREME 是两根抵消
                的 risk-off 线、但对 BTC 要紧的利率路径安静且在闸下。周一 FRED
                日度打印恢复时再读。
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
                <tr><td>US 10Y nominal</td><td className="num">4.45%</td><td className="num stale">带（周五 06-12）</td><td className="num bear">+1.38</td><td className="num bull">−0.50</td><td className="bear">紧 regime · re-grow leg-A UN-FIRED、筛守（周末带）</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.16%</td><td className="num stale">带（周五 06-12）</td><td className="num bear">+2.12</td><td className="num bear">+0.94</td><td className="bear">EXTREME RISK-OFF regime · 带</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.23%</td><td className="num stale">带（周五 06-12）</td><td className="num">−0.03</td><td className="num bull">−0.89</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num stale">带（周五 06-12）</td><td className="num bull">−0.84</td><td className="num">+0.31</td><td className="bull">松 · 在 2.78% 闸上、leg-B UN-FIRED</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.506</td><td className="num stale">陈旧 ~9d</td><td className="num">+0.19</td><td className="num bull">−0.73</td><td className="neut">中性</td></tr>
                <tr><td>MOVE 债波</td><td className="num">69.4</td><td className="num bull">−0.09</td><td className="num bull">−0.60</td><td className="num bull">−1.02</td><td className="bull">松 · 平</td></tr>
                <tr><td>DXY</td><td className="num">99.46</td><td className="num bull">−0.29</td><td className="num bear">+1.03</td><td className="num bear">+0.59</td><td className="bear">RISK-OFF z 标 · 对 99.75 软 −0.29 n2n（dashboard 1d Δ 重合）</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.897T</td><td className="num bull">+0.062T</td><td className="num bull">+0.82</td><td className="num bull">+2.47</td><td className="bull">松</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.18</td><td className="num bear">+0.05</td><td className="num bear">+1.29</td><td className="num bear">+1.07</td><td className="neut">日元软</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.94%</td><td className="num stale">带</td><td className="num bull">−0.88</td><td className="num bull">−0.50</td><td className="bull">收窄</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7621</td><td className="num bull">−0.01</td><td className="num bull">−1.77</td><td className="num bull">−1.34</td><td className="bull">无标 · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">月度（~74d）</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、166 rows、汇总 00:01Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.421</span>（较 06-14
              的 0.407 硬起来、进 NORMAL 带上半、不是系统性）。BTC 列出的对齐
              本次急剧收紧、并 TradFi-tech 领头：NQ
              <span className="dn-tag">+0.681</span>（前 +0.577）、SP500
              <span className="dn-tag">+0.673</span>（前 +0.562）、NVDA
              <span className="dn-tag">+0.613</span>、JP225
              <span className="dn-tag">+0.571</span>、SILVER
              <span className="dn-tag">+0.560</span>、COPPER
              <span className="dn-tag">+0.547</span>、TSLA
              <span className="dn-tag">+0.546</span>、GOOGL
              <span className="dn-tag">+0.525</span>、PLAT
              <span className="dn-tag">+0.517</span>、META
              <span className="dn-tag">+0.516</span>、GOLD
              <span className="dn-tag">+0.511</span>、MSFT
              <span className="dn-tag">+0.496</span>。7d 相对表现：
              <span className="dn-tag bull">PALL +7.14%</span>、JP225
              <span className="dn-tag bull">+6.62%</span>、COPPER
              <span className="dn-tag bull">+4.88%</span>、TSLA
              <span className="dn-tag bull">+3.54%</span>、
              <span className="dn-tag bull">BTC +3.34%</span>、NQ
              <span className="dn-tag bull">+2.96%</span>、SILVER
              <span className="dn-tag bull">+2.88%</span>、SP500
              <span className="dn-tag bull">+1.23%</span>；mega-cap 科技盘重 ——
              AAPL <span className="dn-tag bear">−4.96%</span>、MSFT
              <span className="dn-tag bear">−4.91%</span>、META
              <span className="dn-tag bear">−3.57%</span>、AMZN
              <span className="dn-tag bear">−2.42%</span>；金属杂色（SILVER
              +2.88%、GOLD <span className="dn-tag bear">−1.07%</span>、PLAT
              <span className="dn-tag bear">−1.52%</span>）；能源继续崩 ——
              CL <span className="dn-tag bear">−13.30%</span>、BRENT
              <span className="dn-tag bear">−12.47%</span>。
              <span className="dn-em">
                本次的故事是相关性收紧、不是排名：BTC +3.34% 在 7d 上现在是
                中游（PALL、JP225、COPPER 与 TSLA 都跑得更高、因为早 6 月的崩
                滚出了 7d 窗、压了 BTC 的相对领先）、但它对 US 科技指数的对齐
                跳了 —— NQ +0.681 与 SP500 +0.673 是这一谱系里最紧的 BTC-股票
                读。BTC 这周在一个仍 NORMAL 的宽 regime 里当一根高 β 科技代理
                交易；能源崩（CL/BRENT −13% / −12%）与 mega-cap 科技回撤是
                宏观横流、但本次都不是 BTC 承重读
              </span>
              。JGB 月度 2.52% 带 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>
            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 200W 地板盯位 PRIMARY（重夺加强到四根最终收在上方；06-15 周收今日收盘解、硬倾向重夺）· 均值回归 scout 仍无法触发（flip 腿守、但 funding 腿又死 + TD 簇完全翻空）· 宏观尾 re-grow UN-FIRED · 挤压周期 hostile-2 ON HOLD（SM feed 冻住）· 交易台 flat</span>
            </h2>

            <p>
              <span className="dn-signal">
                第二根上涨日、结构硬了但疲态更响、而仓位本子仍走黑、不改变
                一本平本子 —— 它加强盯位、让 scout 仍站着
              </span>
              。交易台带着无仓位进快照、什么也没开；06-12 起的上涨腿延伸进
              第四个 session、交易台按设计无入场地看着它跑。诚实的记分卡：
              200W 重夺加强到四根最终日线收在地板上方（一根严格升级）、dealer
              本子把净多 γ 加深到 +74.1M、现货拉到 flip 上方 +3.34%、快周期全
              重夺了云、最近的日线 MA 来到 ~1.2–1.5% 之内 —— 每一根结构读都
              硬了。<em>但均值回归 scout 仍无法触发：它的 flip 腿守、可它的
              funding 腿又死了（funding 在快照翻回正）、它的 TD9-BUY 簇完全翻
              成一根 SELL 簇（四根 ⚡ TD9 SELL、3d 在一根死叉）—— 所以它离干净
              触发没更近 —— 每天断一种不同的组合；每一根 MA 都在头顶；快周期
              超买（RSI 77–79）进 TD9 SELL 簇；SM feed 冻 ~70.5h 所以挤压读
              无法确认。</em>不追。scout 是一根确认交易、它需要的确认（一道
              干净三腿门 AND 06-15 周重夺）仍不完整 —— 等 06-15 周收（今天解）
              和一道重新武装的门、不要把入场硬塞进一根现在超买、闪疲态的延伸
              盘面。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · PRIMARY · 200W 周期地板盯位 · 重夺加强：现在四根最终日线收在上方（06-11 $63,598、06-12 $63,547、06-13 $64,418、06-14 $65,702）+ 未收盘 06-15 周 bar $65,625 在上方</span>
              <div className="dn-trade-name">
                200W 周期地板盯位 —— 重夺加强：现在四根最终日线收在 $62,019 上方（06-11 $63,598、06-12 $63,547、06-13 $64,418、06-14 $65,702）加未收盘 06-15 周 bar $65,625 在上方；06-15 周收今日（23:59Z）收盘解、硬倾向重夺
              </div>
              <div className="dn-thesis">
                06-09 / 06-10 破位放了两根日线收在地板下；06-11 盘面拿回来、
                06-12 / 06-13 / 06-14 守住并延伸。本次 06-14 日线收最终定在
                $65,702 —— 一根连续第四根<em>最终</em>日线收在 200W $62,019
                上方、叠在 06-11 的 $63,598、06-12 的 $63,547 与 06-13 的
                $64,418 上、也是四根里最高的一根。这是对 06-14 读（三根最终收）
                的严格升级。现货 $65,680 坐在地板上方 +5.90%、未收盘的 06-15
                W-MON 周 bar 印 $65,625 = 上方 +5.81%。全历史 200 周 SMA 是
                $62,019（200 根收盘 bar、止于 06-08）；周收破自己 200W 的频率
                是 8 / 154 = 5.19% —— 一个低基率位置、盘面现在已坐回上方四根
                最终日线收。唯一解的事件是 06-15 周收、今天落地：一根收在
                $62,019 上方确认重夺（06-08 后谱系的一周回踩并重夺）、一根收
                在下方仍会确认首次持续的周-200W 破 —— 但四根最终日线收在上方
                加 +5.81% 周内缓冲、让重夺以宽得多的边际成为更高概率结果。
                状态：<em>盯位开、重夺在加强、今天解、无仓位</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板（全历史 W-MON）</span><span className="dn-lvl-v">$62,019 · 200 根收盘 bar 止于 06-08 · live 现货 +5.90% / +$3,661 在上方</span></div>
                <div><span className="dn-lvl-k">未收盘周（06-15）</span><span className="dn-lvl-v bull">1m-close $65,625 = +5.81% / +$3,606 在 200W 上方 —— 在 06-15 W-MON 收前临时（今日 23:59Z）</span></div>
                <div><span className="dn-lvl-k">最终日线收谱系</span><span className="dn-lvl-v bull">06-11 $63,598 最终 · 06-12 $63,547 最终 · 06-13 $64,418 最终 · 06-14 $65,702 最终（都在上方）· 06-15 未收盘 $65,625（上方）—— 四根最终收在地板上方</span></div>
                <div><span className="dn-lvl-k">重夺确认（多）</span><span className="dn-lvl-v bull">06-15 周收 &gt; $62,019 —— 确认地板重夺；在确认转向上重开 scout-long 论</span></div>
                <div><span className="dn-lvl-k">破位确认（空）</span><span className="dn-lvl-v bear">06-15 周收 &lt; $62,019 —— 06-08 后谱系首次持续周收破 200W（上一根全历史破自己 200W 的收是 2023-10-09）；在 +5.81% 缓冲下现在是低概率路径</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>200W 是一根周收线、不是盘中水位 —— 现货
                +5.90% 在上方、未收盘 bar +5.81% 在上方都不解它；只有 06-15
                W-MON 收解、而它今天落地。四根最终日线收（06-11 $63,598、
                06-12 $63,547、06-13 $64,418、06-14 $65,702）在上方；把今天的
                周收当二元、把 15JUN 08:00Z 结算与日线收谱系当中间 tell。加强
                的周内守把赔率拉向重夺、它不平掉这单、直到 K 线印出来。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 仍无法触发 · flip 腿守、但 funding 腿又死 + TD9-BUY 簇完全翻成一根 SELL 簇 · 站下</span>
              <div className="dn-trade-name">
                均值回归多 scout —— 仍无法触发：flip 腿守（现货在 $63,557 上方 +3.34%）、但 funding 空付 leg-2 又死（funding 在快照翻回正、+2.69% ann）、TD9-BUY 簇完全翻空（四根 ⚡ TD9 SELL 跨 15m / 30m / 8h / 12h、3d 在一根水上死叉 Sell 1）—— 门断在三腿里的两腿上
              </div>
              <div className="dn-thesis">
                scout 是一道三腿门：(1) 一根 TD9-BUY 簇、(2) 一根 funding 空付
                ≥4h 连续 streak、快照上为负、(3) 一根 1h 收在 0-γ flip 上方。
                06-14 时 leg 2 已 REVIVED、leg 3 守、但 leg 1 翻成一根 SELL 读。
                本次各腿又以另一种组合衰减：<em>Leg 3 守</em> —— flip 只走上到
                $63,557、现货坐在上方 +3.34%（idx +3.69%）。<em>Leg 2 又死</em>
                —— funding 在快照翻回多付（+2.69% ann）；窗里跑了一根长空付腿
                （最长负 streak 1079 行 / ~18h）、但它 ENDED 在 06-15 02:04 BJ
                靠近窗低、进快照的连续腿现在为正（362 行 / ~6h）、所以快照上
                funding 不为负、≥4h 空付要求失败。<em>Leg 1 仍翻空</em> ——
                任何地方都没有 TD9-BUY；反而四根 ⚡ TD9 SELL 点了（15m / 30m /
                8h / 12h）、3d 持一根水上死叉在 Sell 1、顶背离坐在 30m / 1h /
                4h。净：scout 无法触发 —— 一根均值回归多挂在一根完全翻成 SELL
                簇的 TD9-BUY 簇上、funding 腿死、只有 flip 腿 live、而它设计要
                抓的那波已经跑了四个 session。门断在三腿里的两腿上、不是离干净
                触发更近。状态：<em>站下、无入场</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">leg 1 · TD9 簇</span><span className="dn-lvl-v bear">翻空 —— 任何地方都没有 TD9 BUY；四根 ⚡ TD9 SELL（15m / 30m / 8h / 12h）、3d 水上死叉 Sell 1、顶背离在 30m / 1h / 4h —— 一根满 SELL 簇</span></div>
                <div><span className="dn-lvl-k">leg 2 · funding 空付 ≥4h</span><span className="dn-lvl-v bear">又死 —— funding 在快照翻回正（+2.69% ann）；~18h 空付腿在快照前结束（06-15 02:04 BJ）、进快照的尾随腿为正（362 行 / ~6h）—— 失败于快照-为负要求</span></div>
                <div><span className="dn-lvl-k">leg 3 · 1h 收 &gt; flip</span><span className="dn-lvl-v bull">守 —— flip $63,557、现货在上方 +3.34%（idx +3.69%）—— 干净上-flip、但 leg 1 翻空 leg 2 死后它是学术的</span></div>
                <div><span className="dn-lvl-k">触发（3 腿都干净）</span><span className="dn-lvl-v bull">确认 TD9 BUY 簇 AND 一根 live funding 空付 ≥4h 快照为负 AND 1h 收 &gt; flip —— 然后 scout long 0.2R；本次只有 leg 3 live、所以不同时干净</span></div>
                <div><span className="dn-lvl-k">止损 / size</span><span className="dn-lvl-v bear">1h 收 &lt; $61,484（06-10 日线收 / 200W 带）· size 0.2R · 在周期锚 D-SMA100 $72,608 平半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R 草图（示例、非 live 单）：</b>若门重新武装、一根在
                flip $63,557 上方的干净 1h 收触发、对一根 $61,484 止损是
                ~$2,073 风险；首目标在周期锚 $72,608 是 ~$9,051（从 $63,557
                入场量起）≈ 4.37:1 —— 纸面吸引、但 TD 簇翻成 SELL 读、funding
                腿死时门无法触发。<b>硬规则：</b>不要从那一条 live 的腿合成
                入场 —— 一根均值回归多需要一根 TD9-BUY 簇、而簇已翻成四根 ⚡
                TD9 SELL 带顶背离与超买快周期 RSI；在 TD9-SELL 簇、每一根 MA
                都在头顶时买一根延伸、超买盘、正是框架禁止的抢跑。诚实的读：
                scout 现在已连续第四次断在不同的破组合上无法触发（06-13
                flip-then-funding、06-14 TD-簇、本次 funding-and-TD）—— 等一根
                确认 TD9-BUY 簇重新成型 AND 06-15 周重夺、不要硬塞。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · put-spread re-grow 闸 —— 两腿仍 UN-FIRED（周末冻在 06-14 的 un-fired 态）</span>
              <div className="dn-trade-name">
                宏观尾 put-spread —— 已平；re-grow 闸两腿仍 UN-FIRED：周末带的 10Y 4.45%（在 4.53% leg-A 闸下）AND HY OAS 2.78%（在、不在 leg-B 闸上方）；reclaim-long 利率筛（10Y &lt; 4.55%）守为真
              </div>
              <div className="dn-thesis">
                宏观尾 put-spread 已平、无残余。两根 re-grow 腿都在 06-12 触发、
                都在 06-13 un-fired；跨 06-14 与本次 FRED 日度序列周末带在周五
                06-12 收、所以什么也没重触发：10Y 守 4.45%（在 4.53% 闸下且在
                reclaim-long 筛 10Y &lt; 4.55% 内）、HY OAS 守 2.78%（在、不在
                它闸上方）。
                <span className="dn-em">没有新鲜的周末宏观信号 —— 闸靠带在它们
                下方保持 un-fired、唯一的实时宏观跳是 DXY 再软落破 100（一根
                第二天 risk-on 读）。宏观面与 BTC 转对齐、不再相搏。</span>一根
                re-grow 会逆着反弹；闸保持 un-fired 把连酌情张力都挪下了桌。
                交易台不持尾、对这本净多 γ、200W 重夺的盘面无门可触发。周一
                FRED 日度打印恢复时再读。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">已平 · 无残余 · re-grow 闸两腿都 UN-FIRED（周末带）—— 无张力可管</span></div>
                <div><span className="dn-lvl-k">re-grow leg A（UN-FIRED）</span><span className="dn-lvl-v bull">10Y &gt; 4.53% 收 —— 在 4.45% UN-FIRED（周末带在闸下）</span></div>
                <div><span className="dn-lvl-k">re-grow leg B（UN-FIRED）</span><span className="dn-lvl-v bull">HY OAS &gt; 2.78% 收 —— 在 2.78% UN-FIRED（周末带在闸上、不在上方）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— 在 4.45% 守为真</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位漂动设的酌情盯位、不是回测断点、
                跨周末它们只是被带 —— 周一第一根新鲜 FRED 日度打印落地时再读。
                一根新尾只有在 BTC 内部结构翻回去（本子在一根重新失败的 flip
                下重新加深空 γ AND 06-15 周失败）WITH 宏观腿重新触发时才有意义
                —— 现在这些都不成立。只在两根宏观腿对一根 BTC 内部破位干净
                重触发上重新武装盯位；缺这个、就没尾可长。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期 hostile-2 观察名单 · 无日历先验 · ON HOLD —— SM feed 冻 ~70.5h、框架本次无法用自己的数据评估</span>
              <div className="dn-trade-name">
                挤压周期 hostile-2 —— ON HOLD：Hyperliquid SM feed 在 2026-06-12 01:36Z 冻住（陈旧约 70.5h）、所以算不出 SM Δnet 步；perp-tape 代理（OI +1,423 第二天 build、funding 翻回正、perp 折价）现在暗示多头压上涨腿、而非空头压进 —— 但不可确认
              </div>
              <div className="dn-thesis">
                挤压周期框架以无日历先验的观察名单跑（节奏在 5 月底被证伪）、
                本次它连续第三篇 ON HOLD、因为它的主输入走黑：live_db 里的 SM
                块自 2026-06-12 01:36Z 起未再前进、所以 SM 多/空/净冻住、不
                捏造就算不出任何离散 Δnet ≥ +3k 回补步或 ≤ −3k 重堆。
                <span className="dn-em">本次的挤压读因此完全靠 perp-tape 代理、
                它对 06-14 变了：OI 连续第二天扩张（+1,423）、但 funding 翻回正
                进快照、4h 涨势在现货 AND 期货 aggressor 两侧都被买 —— 一根
                多头压涨势（付 funding 持着）的配置、而不是 06-14 的偏空 re-stack
                tell。那是一根 less squeeze-primed 的读、但缺 SM feed 它无法
                确认。</span>feed 解冻后、把任何新鲜 Δnet ≤ −3k 单分钟步
                （Δshort &gt; 0 + Δlong &lt; 0 同一分钟）读作一根重堆 hostile-2
                信号、任何 Δnet ≥ +3k 回补步读作它的反面 —— 但 feed 冻着两个
                都读不了。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v stale">ON HOLD · SM feed 冻 ~70.5h（自 2026-06-12 01:36Z）· 本次无 SM Δnet 步可算</span></div>
                <div><span className="dn-lvl-k">perp-tape 代理（live）</span><span className="dn-lvl-v">OI +1,423（+1.42%）第二天 build · funding 翻回正（快照 +2.69%）· 4h 现货 CVD +1,035 / 期货 CVD +974（两侧都买了涨势）· perp −$53.70 折价 —— 多头压上涨腿、对 SM 不可确认</span></div>
                <div><span className="dn-lvl-k">前向 gating</span><span className="dn-lvl-v">SM feed 解冻后：新鲜 Δnet ≤ −3k 单分钟 = 重堆 hostile-2 信号；Δnet ≥ +3k = 回补点火 —— 两个方向都无时间先验；在那之前代理是唯一读</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>节奏已死（5 月底被证伪）、且 SM feed 冻住、
                所以本次没有 SM 数据可读 —— 把框架当 ON HOLD、不是一本安静的
                本子。不要把冻住的 −37.3k 净往前带、当它是一根实时读、或把它
                对一个未来解冻值作单步求差（那道缺口会是多日累积、不是一根
                分钟步）。perp-tape 代理现在指向多头压反弹、而非空头重堆、但缺
                SM feed 它停在代理。feed 一前进就恢复框架；读第一根新鲜 Δnet
                步、看本子往哪个方向承诺。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 200W 重夺加强（四根最终日线收在上方；06-15 收今天解、硬倾向重夺）· scout 在 funding 腿又死、TD 簇仍翻空时仍无法触发 · dealer 本子把净多 γ 加深到 +74.1M · 盘口转多头压但 SM feed 冻住 · 交易台 flat</span>
            </h2>

            <p>
              06-14 那些条件里：200W 周期地板重夺<em>加强</em>（06-14 日线收
              最终定在 $65,702、一根第四根最终收在地板上方、现货 +5.90% 在
              上方、未收盘 06-15 bar +5.81% 在上方）；dealer 本子把净多 γ
              <em>加深</em>到 +74.1M、现货拉到 flip 上方 +3.34%；均值回归 scout
              仍<em>无法触发</em> —— 它的 flip 腿守、但它的 funding 腿又死了
              （在快照翻回正）、它的 TD9-BUY 簇仍完全翻成一根 SELL 读、所以它
              断在三腿里的两腿上；宏观 re-grow 腿仍 UN-FIRED（周末带在 10Y
              4.45%、HY OAS 2.78%）、reclaim-long 筛守；SM feed 冻 ~70.5h 所以
              挤压周期框架 ON HOLD、perp-tape 代理是唯一仓位读。<em>单一结构读
              是一根延伸进第四 session 上涨腿的反弹、在硬起来的结构上 —— 200W
              重夺加强到四根收、γ 加深到 +74.1M、快周期全重夺了云、最近的日线
              MA 来到 ~1.2–1.5% 之内、涨势在现货与期货两侧都被买 —— 但它是在
              超买快周期 RSI（77–79）、四根 ⚡ TD9 SELL 信号与中周期顶背离里这么
              做的、每一根 MA 都在头顶、funding 翻回正、smart-money 侧不可读。
              </em>今天的条件围绕今 session 解的加强地板重夺、仍站着的 scout
              （现在断在 funding 与 TD 腿上）、一根两闸都 un-fired 的宏观尾、和
              一根 on hold 的挤压框架重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>200W 周收重夺（多）</td><td className="bull">06-15 W-MON 收 &gt; $62,019 —— 今天（23:59Z）解；四根最终日线收在上方 + 未收盘 bar +5.81% 在上方</td><td>确认地板重夺、06-08 后谱系的一周回踩并重夺；在确认转向上重开 scout-long 论 —— 现在以宽得多的边际是更高概率路径</td></tr>
                <tr><td>200W 周收破（空）</td><td className="bear">06-15 W-MON 收 &lt; $62,019</td><td>06-08 后谱系首次持续周收破 200W（上一根全历史破自己 200W 的收是 2023-10-09）—— 四根最终日线收在上方加 +5.81% 缓冲后现在是低概率路径；若印则升级周期-regime 读</td></tr>
                <tr><td>15JUN 到期结算（今日 08:00Z、约 8h 后）</td><td>+28.59M 正前端块清掉（06-15 周结算、坐在二元日上）；除 15JUN 后 aggregate ≈ +45.5M（结算后一本更小的正本子）</td><td>把结算当中间 tell —— 清掉一根正块 trim 净多 γ 缓冲；本子守牢牢净正、不是 regime 变化；期权结算（08:00Z）与周 K 线收（23:59Z）今天重合</td></tr>
                <tr><td>均值回归多 scout —— funding + TD 腿（断）</td><td className="bear">funding 在快照翻回正（+2.69% ann、leg-2 死）；TD9-BUY 簇完全翻空（四根 ⚡ TD9 SELL、3d 死叉 Sell 1、顶背离在 30m/1h/4h）</td><td>funding 腿死、TD 簇翻成 SELL 读时 scout 无法触发、即便 flip 腿守；站下 —— 只在一根确认 TD9-BUY 簇重新成型 AND 一根 live funding 空付 ≥4h 快照为负 AND 06-15 周重夺上重新武装、不要从那一条 live 的腿合成</td></tr>
                <tr><td>0-γ flip（守低、现货远在上方）</td><td className="bull">flip $63,557（+$198）；现货 +3.34% / idx +3.69% —— 都在上方、缺口又拉宽</td><td>现货随 γ 加深从 flip 上方拉得更开；一根阻尼的、支撑性的 dealer 位置、本身不是触发</td></tr>
                <tr><td>宏观尾 re-grow（两腿都 UN-FIRED、带）</td><td className="bull">10Y &lt; 4.53%（在 4.45% UN-FIRED、周末带）；HY OAS 在 2.78%（UN-FIRED、不在上方）</td><td>周末带在两闸下方/上；无尾可长、无张力可管 —— 宏观与 BTC 转对齐；周一第一根新鲜 FRED 日度打印时再读、只在两腿对一根 BTC 内部破位干净重触发上重新武装</td></tr>
                <tr><td>挤压周期 hostile-2（SM feed 冻 ~70.5h）</td><td className="stale">ON HOLD —— 无 SM Δnet 步可算；perp-tape 代理现在指向多头压上涨腿</td><td>feed 冻着框架无法用自己的数据评估；一解冻就恢复、读第一根新鲜 Δnet ≤ −3k（重堆）或 ≥ +3k（回补）单分钟步；不要把冻住的净对一个未来解冻值作单步求差</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                06-15 周收对 200W $62,019、今日收盘解（现在硬倾向重夺、四根
                最终日线收在上方、未收盘 bar +5.81% 在上方）：一根周收回到 200W
                上方确认地板重夺、并在一根 TD9-BUY 簇重新成型后重开 scout-long
                论；一根周收在下方仍会确认 06-08 后谱系首次持续的周-200W 破
                （上一根全历史破自己 200W 的收是 2023-10-09）、现在是低概率路径
              </span>
              。在那之前、本篇按写好的跑：交易台 flat、200W 盯位是主框架、
              它的重夺加强到四根最终日线收在上方、均值回归多 scout 仍无法触发
              （funding 腿又死、TD 簇仍翻成 SELL、而 flip 腿守 —— 不追）、宏观
              尾 re-grow 仍 un-fired（周末带）、宏观面与 BTC 转对齐、挤压周期
              hostile-2 框架在 SM feed 冻 ~70.5h 下 ON HOLD。dealer 本子加深到
              +74.1M 净多 γ、现货拉到 flip 上方 +3.34%；funding 在快照翻回多付；
              OI 连续第二天扩张、涨势在现货与期货两侧都被买；BTC 对 US 科技
              指数的对齐在一个仍 NORMAL 的宽 regime 里急剧收紧。下一个 24h 的
              对读是<em>耐心而 flat —— 让 06-15 周收确认加强的地板重夺、让一根
              TD9-BUY 簇重新成型、scout 在那之前只是站着；结构硬了、反弹延进
              下方 MA 带、但它在超买、进 TD9-SELL 簇里这么做、仓位本子不可读、
              而一根延伸但超买的上涨腿不是交易</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2 · post codex hostile audit —— PASS-WITH-NOTES
            </span>
            <b>状态：</b>这是建在 2026-06-15 00:06Z 原子快照上的 <b>v2</b>
            cut、<b>post codex hostile audit</b>。STAGE B codex 敌对式跨模型
            审计返回 <b>PASS-WITH-NOTES（0 CRITICAL / 0 MAJOR / 1 MINOR /
            0 NIT）</b>；ask-deepseek 算术二审（由 STAGE C 裁定、动手前重算）
            浮出一根 codex 没抓到的 CRITICAL R/R 算错与一根 MAJOR 符号翻转、
            外加若干 minor 取整注记。完整记录：
            <code>audits/2026-06-15-desk-note.md</code>。<b>Findings +
            grep-closure（每个 pattern 在完整 EN 文件上搜过；hits-after =
            0 ⇒ RESOLVED）：</b>{' '}
            <b>DN-001（MINOR · codex）</b> —— 盘中低/区间标成现货、但
            <code>$65,775 / $63,651</code> 值 + 07:57 高匹配的是 live-tape 的
            perp/OHLC h/l 字段、不是现货列。修：把 lead 区间重标为一根
            <b>perp/OHLC 盘面区间</b>、并把 &ldquo;现货 dipped&rdquo; 改成
            &ldquo;盘面 dipped&rdquo;。搜索的 pattern：<code>现货 dipped</code>
            （前 1 / 后 0）、lead <code>$65,775 / $63,651</code> 区间归属
            （已重标；L476 那处命中是 MTF 扫描自己的 24h H/L、已正确标为 scan
            并保留）—— <b>RESOLVED</b>。{' '}
            <b>SA-CRIT（CRITICAL · ask-deepseek、裁定为真）</b> —— scout R/R
            草图 reward 是从止损量、不是从入场量：曾引 72,608 − 61,484 =
            $11,124、但从 $63,557 入场的 reward 是 72,608 − 63,557 = $9,051、
            所以比率是 9,051 / 2,073 = 4.37:1、不是 5.4:1。修：reward
            <code>~$9,051</code>（从 $63,557 入场量起）、比率
            <code>4.37:1</code>。搜索的 pattern：<code>11,124</code>（前 1 /
            后 0）、<code>5.4:1</code>（前 1 / 后 0）—— <b>RESOLVED</b>。{' '}
            <b>SA-MAJ（MAJOR · ask-deepseek、裁定为真）</b> —— $60k 崩盘 put
            变化带了符号翻转：从 −21.07M 减轻到 −18.00M 是一根
            <b>+$3.07M</b> 变化、不是 −$3.07M。修：
            <code>+$3.07M（−21.07M → −18.00M）</code>。搜索的 pattern：
            <code>−$3.07M</code> / <code>-$3.07M</code>（前 1 / 后 0；meta
            tile、dealer 墙与 source-pin 行的 from/to 陈述本就正确且无号）——
            <b>RESOLVED</b>。{' '}
            <b>SA-MIN（MINOR · ask-deepseek、裁定为 ACCEPTED-AS-CONVENTION）</b>
            —— 头部 <code>$65,680</code> 对 prose <code>$65,679.88</code> 是
            刻意的取整-stamp 约定（已披露：显示值按 $ 取整、偏移用精确序列）；
            区间低 <code>$63,651</code>（live-tape h/l）对 MTF 扫描
            <code>$63,650</code> 是一根 $1 的 tape-vs-scan 跨源取整、两者都
            正确归源。无数值更改；预期值无歧义。<b>所有 CRITICAL + MAJOR +
            MINOR findings RESOLVED；无 UNRESOLVED 残余 —— 升 v2。</b>下面记录
            已审计的 source pins 备谱系：funding × 1095（快照 +2.69% ann 自
            原始 +0.002455、在快照翻回正、n2n 均值 −2.58% ann、区间 −6.72% /
            +6.11%、封顶 1 / 1441 在 +6.11% 最大值、2 / 1441 在 −6.72% 最小值、
            neg-minute 占比 74.88% = 1079 / 1441、最长连续负 streak 1079 行 /
            ~17h59m 结束于 06-15 02:04 BJ / UTC 06-14 18:04、收在快照上的尾随
            正 streak 362 行 / ~6h02m 快照上 funding 为正 —— scout funding
            leg-2 又 DEAD）；GEX 双参考符号（flip $63,557、现货 +3.34% =
            65,679.88 / 63,557 − 1 / idx +3.69% = 65,899 / 63,557 − 1 ——
            都在上方、缺口对 06-14 拉宽；aggregate +74.1M 从 +63.4M 长；$60k
            −18.00M 从 −21.07M 减轻；显示 expiry 行合计 ≈ +76.13M 非可加对
            dashboard +74.1M、dashboard 权威；15JUN 0.3DTE +28.59M 今日 08:00Z
            结算（06-15 周结算）、除 15JUN 后 ≈ +45.5M、清掉一根正块压低
            aggregate）；200W 全历史 W-MON SMA $62,019（200 根收盘 bar 止于
            06-08）对 live 现货 +5.90% 在上方、未收盘 06-15 bar $65,625 +5.81%
            在上方、8 / 154 = 5.19% 频率、<code>weekly_200sma.json</code> 缺失
            （200W 直接从 parquet 算、JSON 百分位 / last-event 不可用、未捏造）；
            <b>SM FEED 冻住</b> —— Hyperliquid SM 块自 2026-06-12 01:36Z 起未
            再前进（陈旧约 70.5h）、long 13,532.412 / short 50,825.664 / net
            −37,293.252 是冻住的最后写入值（与 06-13 / 06-14 备忘逐字相同、
            冻结早于两篇）、所以本次不算任何 SM Δ / cut 分数 / 挤压周期步
            （未捏造）；日线收谱系（06-08 $63,058、06-09 $61,695、06-10
            $61,484 最终、06-11 $63,598 最终、06-12 $63,547 最终、06-13
            $64,418 最终、06-14 $65,702 最终、06-15 未收盘 $65,625 —— 四根
            最终收在地板上方）；OI n2n +1,423 BTC（+1.42%、快照 101,578、
            连续第二根 build、比 06-14 的 +2,365 小）；30D RV 42.09%（30
            returns / 31 closes；42.82% 另一口径在 29 returns；窗 05-16 →
            06-15）；跨资产 |r| 0.421 NORMAL、BTC +3.34% 在 7d 上中游（PALL /
            JP225 / COPPER / TSLA 跑得更高）、但 BTC-股票相关性急剧收紧
            （NQ +0.681、SP500 +0.673）；宏观 Tier-1 周末带在周五 06-12 收
            （10Y 4.45% —— re-grow leg-A UN-FIRED、reclaim-long 筛 10Y &lt;
            4.55% 守；HY OAS 2.78% 在闸上、leg-B UN-FIRED；TIPS 2.16% regime-z
            EXTREME；DXY 99.46 对 99.75 软 −0.29 n2n、dashboard 1d Δ −0.29
            重合；MOVE 69.4；Fed 净流动性 $5.897T）；n2n 窗内无 cb_cvd reset；
            完整 MA 矩阵对 live 现货 $65,679.88、parquet 2026-06-15 00:06Z
            close $65,625.10（D-SMA100 $72,608 周期锚 −9.54%、每一根 MA 都在
            头顶、最近 D-SMA20 −1.18% / D-EMA20 −1.46%、W-SMA150/200 在 129 根
            子集周 bar 下不可计算、W-EMA150/200 种子披露）；MTF 交叉标对存档
            扫描核过（四根快/中周期 15m / 30m / 1h / 4h 都在云上、4h 新鲜水上
            金叉 1b、8h 进云、1d 水下金叉 2b 云下、四根 ⚡ TD9 SELL 在 15m /
            30m / 8h / 12h、顶背离在 30m / 1h / 4h、3d 水上死叉 Sell 1、快
            RSI 77.8 / 78.9 / 75.9 超买）；claims-vs-loaded-data（NTT /
            max-pain / strike-IV / BTC-NQ framework only；JGB 月度不依赖；IV
            948 合约链中位数、不是可交易价差）。存档：
            <code>/opt/desk-note/snapshots/2026-06-15-0006/</code>
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
            情况个性化。数字反映单一原子快照（2026-06-15 00:06Z）、
            provenance 在上方数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-06-14 22:17Z（比快照早约 1h49m）且周末冻结、Hyperliquid
            SM feed 冻 ~70.5h —— 这些输入明确陈旧并已标注。这是 <b>v2</b>
            cut —— <em>post STAGE B codex 敌对式审计；findings 与 grep-closure
            记录在上方审计痕迹里。</em>水位、规模与条件是交易台流程的示例、
            不是长期推荐。过去的相关性、γ 与仓位模式不绑定未来盘面。衍生品
            有全损风险、加杠杆下损失可超过保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                一根在硬起来的结构上延伸进第四 session 的上涨腿 —— 200W 重夺
                加强到四根最终收在上方、dealer 本子把净多 γ 加深到 +74.1M、
                现货拉到 flip 上方 +3.34%、快周期全重夺了云、最近的日线 MA 来到
                ~1.2–1.5% 之内。但它在超买（RSI 77–79）进四根 ⚡ TD9 SELL 信号、
                funding 翻回多付、每一根 MA 都在头顶、SM feed 冻 ~70.5h 所以
                仓位本子不可读。Flat 而耐心 —— 06-15 周收今天解、硬倾向重夺。
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
            v2 · 2026-06-15 00:06Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}

