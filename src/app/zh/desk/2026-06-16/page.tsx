import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-16 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-16',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-16' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260616() {
  await requireViewer('/zh/desk/2026-06-16');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-16 · v2</span>
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
              <span className="dn-big">$66,332</span>
              n2n&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.99%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-16 00:06Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-16 00:06Z（snapshot pin）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 所有派生值钉在 00:06Z 锚行 · live `t`
                    字段是 BJ-local（UTC+8）、所以 00:06Z 锚行是{' '}
                    <code>06-16 08:06</code>；此快照落在 15JUN 08:00Z 期权
                    结算后约 16h06m（06-15 周结算、现已过）、16JUN 08:00Z
                    结算前约 7h54m ·{' '}
                    <b>窗口口径：</b>下面每一条实时盘面比较都是{' '}
                    <b>NOTE-TO-NOTE（n2n）</b>—— 从上一篇 06-15 00:06Z 快照
                    量到本篇 00:06Z 快照、即日窗 1441 采样行 ≈ 24h00m（本次
                    前后两快照正好相隔 24h）、4h = 241 行 ≈ 4h00m、1h = 61
                    行 ≈ 1h00m、所以 日/4h/1h Δ 都标 <code>n2n</code>；任何
                    剩下的 &ldquo;24h&rdquo; 标是 MTF 扫描引擎自己的窗或一句
                    前瞻措辞 · <b>SM 块仍冻结：</b>Hyperliquid 聪明钱 feed
                    自 2026-06-12 01:36Z 起未推进（快照时 ~94.5h 陈旧）——
                    SM 多/空/净读 STALE、按 framework-only 处理、不作实时
                    仓位（见 meta tile + 仓位节）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-16 00:01Z scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 较 00:06Z 快照锚
                    滞后约 5 分钟 · 含未收盘 K 线 · 作者时存档于{' '}
                    <code>/opt/desk-note/snapshots/2026-06-16-0006/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-16 00:02Z 快照</td>
                  <td className="dn-flag">
                    post-15JUN-settle · 较快照锚滞后约 4 分钟 · Deribit idx
                    $66,472 对 live $66,331.99（高 $140）· 934 合约（06-15
                    是 948、−14 因 15JUN 周链结算滚出）· 16JUN 0.3DTE
                    +8.79M 今日 08:00Z 结算（~8h 后）—— 一小块正的前端 ·
                    除 16JUN 后 aggregate ≈ +52.5M 仍净正（清掉这块正的
                    前端会 <em>降低</em> aggregate；dashboard 总值 +61.3M
                    权威、显示行非可加 —— 见盘口节）· 存档于{' '}
                    <code>/opt/desk-note/snapshots/2026-06-16-0006/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-16 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 5 分钟 · 7d 1h bar · 22 资产 · 167 rows · regime NORMAL（均 |r| 0.413）· 存档于 <code>/opt/desk-note/snapshots/2026-06-16-0006/</code></td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-15 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1h51m · <b>新鲜周一印恢复</b>—— FRED Tier-1
                    日度序列不再周末顺延：10Y 印新鲜 4.48%（+3.0bp）、HY OAS
                    印新鲜 2.71%（−7.0bp）、TIPS 2.17%（+1.0bp）都是周一美
                    盘的新鲜动作、所以本次 Δ 是新鲜移动 · DXY 99.46（1d Δ
                    −0.29；对 06-15 的 99.46 note-to-note 走平 —— dashboard
                    的 1d Δ 反映上一交易日、n2n 移动 ~0）· Fed 净流动性
                    $5.897T · 存档于{' '}
                    <code>/opt/desk-note/snapshots/2026-06-16-0006/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵 + 200W 地板</td>
                  <td className="dn-v-cell">btcusdt_1m parquet · 全历史 + 2024–2026 子集</td>
                  <td className="dn-flag">
                    偏移按 live 现货重算 · 子集 MA 阶梯取 2024–2026 窗、按
                    交易台政策 · 200W 地板读自全历史 parquet（W-MON 重采样、
                    200 根收盘 bar、收在 06-15 周收）·{' '}
                    <code>weekly_200sma.json</code> 缺失、所以 200W 直接从
                    parquet 算、JSON 百分位 / 上次事件字段不可用（非杜撰）·
                    子集 W-SMA150 / W-SMA200 不可计算（130 根子集周 bar）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月度（~75d）· 不作实时</td>
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
              <span className="dn-v bear">−0.67%</span>
              <span className="dn-src">live · 快照 −0.67% ann（原始 −0.000609 × 1095；快照在空付多、funding 翻回负）· n2n 均值 ann −3.14%（06-15 是 −2.58%；本窗跑了一段更深的空付腿）· 封顶占用 2 / 1441 采样行 @ +2.72% 上限、1 / 1441 @ −7.84% 下限 · 负分钟占比 80.57%（1161 / 1441、06-15 是 74.88%、+5.69pt）· n2n 峰 +2.72% ann · n2n 谷 −7.84% ann</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · n2n</span>
              <span className="dn-v bear">均值 −2.58% → −3.14%（−0.56pt）· 快照 +2.69% → −0.67%（−3.36pt）</span>
              <span className="dn-src">区间 −7.84% / +2.72% ann · funding 路径跑了一段长空付腿进快照（结束 AT 快照的尾随连续负值串是 915 采样行 / ~15h15m、结束于快照）、快照处 funding 为负 · 快照处 funding 是负、所以 scout funding leg-2 门 REVIVED 又活、对 06-15 的 DEAD 翻面 —— 第三次连续翻态（DEAD 06-13 → REVIVED 06-14 → DEAD 06-15 → 现 REVIVED）</span>
            </div>
            <div>
              <span className="dn-k">OI · n2n</span>
              <span className="dn-v bull">+1.69%（+1,721 BTC）</span>
              <span className="dn-src">live · 103,299（从 06-15 快照 101,578 升、+1,721）· OI 连续第三日扩张 —— 比 06-15 的 +1,423 更大的一根堆、把 OI 建仓延进上腿（06-08 后的几根：06-10 +737、06-11 +216、然后 06-12 / 06-13 的 −1,211 / −466 泄、再 06-14 +2,365、06-15 +1,423、本次 +1,721）· n2n 峰 104,795、谷 101,509</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v">57.10 / 42.90</span>
              <span className="dn-src">live_db `mkt_long_pct` · 对 06-15 的 58.70 再泄 −1.60pt（价格上行而 de-crowding 连续第三天 —— retail 仍没追上腿）· n2n 区间 56.60 / 58.92 · 峰 58.92 / 谷 56.60</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v stale">−37.3k · FEED 冻结 ~94.5h（未载入）</span>
              <span className="dn-src">live_db SM 块自 2026-06-12 01:36Z 起未推进 —— long 13,532.412 / short 50,825.664 / net −37,293.252 是冻结的最末写入值、与 06-13、06-14、06-15 三篇逐字节相同（冻结早于这三篇）· 快照时 ~94.5h 陈旧 · 按 STALE / 未载入处理 —— 本次无实时 SM 仓位读</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 06-15 备忘</span>
              <span className="dn-v stale">不可计算 —— feed 冻结</span>
              <span className="dn-src">SM 端点与 06-15 逐字节相同、因 feed 自 2026-06-12 01:36Z 冻结；本次不杜撰就无法算 SM Δ、cut fraction 或挤压周期单分钟步 · 唯一的实时仓位读是 retail mkt_long_pct 与 perp-tape 代理（OI + funding + basis）</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">43.4% / 42.40%</span>
              <span className="dn-src">GEX IV 中位数横跨 934 合约（06-15 是 44.5% / 948、−1.1pt 因 15JUN 链滚出）· IV/RV 价差 +1.0pt · 30D close-to-close RV 42.40%（30 returns / 31 closes；29-return 另读 43.15%）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+1.69%（现货）/ +1.90%（idx）—— 两参考都在上方</span>
              <span className="dn-src">flip $65,232（前 $63,557、走上 +$1,675）· 对 live 现货 $66,331.99（66,331.99 / 65,232 − 1 = +1.686%）/ GEX 文件 idx $66,472（66,472 / 65,232 − 1 = +1.901%）—— 两参考都在 flip 上方、但缺口对 06-15 收窄（当时 +3.34% / +3.69%）、因 flip 走上比现货升得快 · aggregate GEX +61.3M（前 +74.1M、post-15JUN-settle 缓 −$12.8M）· $60k 崩盘 put −19.50M（从 −18.00M 加深）· P/C 0.64</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                那道二元 RESOLVED 了 —— 06-15 周收落在 $66,286、干净地在
                $62,230 200W 地板上方、所以上一篇点出的周期地板重夺现在{' '}
                <span className="dn-tag bull">已确认</span>、上腿磨出第五根
                <span className="dn-tag bull">+0.99% 到 $66,332</span>、同时
                快框从超买里冷却 —— 但结构仍带衰竭标、聪明钱 feed 仍黑
              </span>
              。在一条 perp/OHLC 盘面区间{' '}
              <span className="dn-tag">$67,255 / $65,314</span> 里（高 @
              BJ 23:55 06-15 / UTC 15:55 06-15、低 @ BJ 09:06 06-15 / UTC
              01:06 06-15）盘面推到一根新鲜 n2n 高、然后回落 —— 比 06-15
              那根 V 形更静的一天。200W 地板重夺现在在周 K 上 CONFIRMED ——
              06-15 周收最终定格 <span className="dn-tag bull">$66,286</span>
              、在 $62,230 地板上方、现在有{' '}
              <span className="dn-tag bull">五根定格日收在地板上方</span>
              （06-11 $63,598、06-12 $63,547、06-13 $64,418、06-14 $65,702、
              06-15 $66,286）、未收盘的 06-22 周 bar $66,276 也在上方。dealer
              本子守住净多 γ、但缓到{' '}
              <span className="dn-tag bull">+61.3M</span>（前 +74.1M）、因
              15JUN 那块正的 chunk 结算了、0-γ flip 走上到{' '}
              <span className="dn-tag">$65,232</span>（前 $63,557）、所以现货
              现在坐在 <span className="dn-tag bull">flip 上方 +1.69%</span>
              —— 仍在上方、但垫子收窄了。现货也重夺它第一根日 MA：
              <span className="dn-tag bull">D-SMA20 $66,093 现在在现货
              下方（+0.36%）</span>、是整条谱系里第一根正的日 MA 偏移、
              D-EMA20 $66,675（−0.51%）是最近的头顶。
              <em>但逆干净的几道仍在：funding 在快照处翻回负（−0.67% ann、
              一段 ~15h 空付腿进快照）、所以 scout 的 funding leg-2 REVIVED
              —— 但它的 TD9-BUY 簇仍完全反转（15m / 30m / 1h / 4h 顶背离、
              8h / 12h ⚡ TD9 SELL、4h 与 1d pending Sell 8 → 9?）；快框 RSI
              确实从超买冷出（15m 43.2 / 30m 48.1 / 1h 55.8、从 77.8 / 78.9
              / 75.9 落）、但它是靠 stall-and-fade 在价格守住时冷的、不是靠
              一根新鲜冲量；Hyperliquid SM feed 冻结 ~94.5h、所以聪明钱侧
              仍不可确认；头顶 D-SMA20 之上的每一根 MA 都还在。</em>
              均值回归 scout 仍不能开 —— 它的 flip 腿守住、funding 腿复活、
              但它的 TD9-BUY 簇反转成一个 SELL / 顶背离簇、是均值回归多
              的单一否决项。这是一根延伸进确认的 200W 重夺、结构在转好、
              但现在成熟进顶背离衰竭、仓位本子不可读 —— 交易台保持 FLAT、
              二元既已 resolved、活的张力从地板移到这根上腿能否清掉
              D-EMA20 / 下方 MA 带、还是从衰竭簇翻倒。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$66,332</span> live、
              <span className="dn-tag bull">+0.99%</span> note-to-note ——
              一根更静的磨上日、1h <span className="dn-tag bull">+0.18%</span>
              、4h <span className="dn-tag bear">−0.35%</span>、盘面做了一根
              新鲜 n2n 高 $67,255 然后回落进快照。
              <span className="dn-signal">周期地板重夺现在在周 K 上
              CONFIRMED —— 上一篇点出的那道二元 resolved 了</span>：06-15 周
              W-MON 收最终定格 $66,286、干净地在 200W $62,230 上方、06-15
              日收也定格 $66,286、给出连续五根定格日收在地板上方 —— 06-11
              $63,598、06-12 $63,547、06-13 $64,418、06-14 $65,702、06-15
              $66,286 —— 未收盘的 06-22 周 bar $66,276 也在上方。这是对
              06-15 谱系的严格升级（当时重夺是倾向但未定；现在确认了）。MA
              矩阵本次开了第一道口：现货重夺了{' '}
              <span className="dn-tag bull">D-SMA20 $66,093（+0.36%）</span>
              —— 整条 06-08 后谱系里第一根回到现货下方的日 MA ——{' '}
              <span className="dn-tag bull">D-EMA20 $66,675（−0.51%）</span>
              是最近的头顶、一根小摆动之遥。周期锚{' '}
              <span className="dn-tag bear">D-SMA100 $72,618（−8.66%）</span>
              坐在日线阶梯下方、6 月初破掉的 W-SMA20 周地板仍在头顶{' '}
              <span className="dn-tag bear">$71,619（−7.38%）</span>。
              <span className="dn-em">这条谱系里第一次、盘面不再整片头顶
              —— 200W 地板（+6.59%）AND D-SMA20（+0.36%）现在是现货下方的
              正偏移、而 D-EMA20 之上的每一根仍在头顶。这是一根在周收上
              确认了周期地板重夺、现在压进下方日 MA 带的盘面、第一根快日
              MA 已重夺。</span>均值回归 scout 的三腿门又移了、在 funding
              轴上：本次它的 funding 腿 REVIVED（funding 在快照翻回负）、
              它的 flip 腿守住、但它的 TD9-BUY 簇仍完全反转（15m / 30m /
              1h / 4h 顶背离、8h / 12h ⚡ TD9 SELL、4h 与 1d 在 Sell 8 →
              9?）—— 所以门在它的 leg-1 TD 簇上破、那条是直接否决均值回归
              多的腿。scout 站下。
            </p>

            <h2 className="dn-sec">
              仓位{' '}
              <span className="dn-roman">I · 实时盘面 · SM feed 仍冻结 ~94.5h（未载入 —— 无聪明钱读）· funding 在快照翻回负（−0.67% ann、一段 ~15h 空付腿进快照 —— scout leg-2 又 REVIVED）· OI 连第三日扩张（+1,721）· retail 泄 −1.60pt 仍没追</span>
            </h2>

            <p>
              <span className="dn-signal">
                本次最重要的单一仓位事实、又一次是一个缺席：Hyperliquid
                聪明钱 feed 冻结、现已冻了 ~94.5 小时
              </span>
              。live_db 里的 SM 块自{' '}
              <span className="dn-tag stale">2026-06-12 01:36Z</span> 起未
              推进 —— long_btc <span className="dn-tag">13,532.412</span>、
              short_btc <span className="dn-tag">50,825.664</span>、net{' '}
              <span className="dn-tag">−37,293.252</span> 是最末写入值、与
              <span className="dn-em">06-13、06-14、06-15 三篇所带的数字
              逐字节相同</span>、意味着冻结早于这三篇、聪明钱侧在整条上腿
              里一直黑着。<span className="dn-em">本次不杜撰数字就算不出
              SM Δ、cut fraction、挤压周期单分钟步 —— 整个聪明钱侧连续
              第四篇按 STALE / 未载入处理。</span>诚实的后果不变：挤压
              周期 hostile-2 框架无法在它自己的数据上评估、剩下的唯一
              实时仓位读是 retail mkt_long_pct 与 perp-tape 代理（OI +
              funding + basis）。这个代理本次说的话变了 —— 变的是 funding
              翻回负。
            </p>

            <p>
              <span className="dn-signal">
                杠杆侧又翻回去了 —— funding 在快照跨回空付、之前跑了一段
                长空付腿进它、这就是 REVIVE 了 scout 的 funding 腿
              </span>
              。funding 是{' '}
              <span className="dn-tag bear">快照 −0.67% ann</span>（原始
              −0.000609 × 1095）、n2n 均值{' '}
              <span className="dn-tag bear">−3.14%</span>（对 06-15 的
              −2.58%）、区间{' '}
              <span className="dn-tag">−7.84% / +2.72%</span>。路径跑了一段
              深空付腿进快照 —— 结束 AT 快照的尾随连续负值串是{' '}
              <span className="dn-tag bear">915 采样行 / ~15h15m</span>、且
              <span className="dn-em">快照处 funding 为负</span>、所以 ≥4h
              空付要求满足。<span className="dn-em">06-15 那读 —— leg-2 在
              快照转正的翻面上 DEAD —— 又反过来了：funding 在快照付空头、
              进快照的连续腿是一段深 ~15h 负值串、均值回归 scout 的 funding
              空付腿现在 REVIVED、不是死的。这是 funding 腿连续第四篇翻态
              （DEAD 06-13 → REVIVED 06-14 → DEAD 06-15 → 现 REVIVED）——
              这条腿不稳、而这份不稳本身就是 tell：funding 腿不能当独立
              信号倚靠。</span>负分钟占比 74.88% → 80.57%（1161 / 1441 ——
              窗内大部分 WAS 空付、且一直负到快照）、封顶占用是{' '}
              <span className="dn-tag">2 / 1441 @ +2.72% 上限、1 / 1441 @
              −7.84% 下限</span>、OI{' '}
              <span className="dn-tag bull">+1,721 BTC（+1.69%）</span> 连续
              第三日扩张（103,299、从 06-15 快照 101,578 升；比 06-15 的
              +1,423 更大的一根堆）、retail{' '}
              <span className="dn-tag">mkt_long_pct 57.10%</span> 在价格上行
              时再泄 −1.60pt —— retail 仍没追上腿。perp 对现货在快照交易一道
              <span className="dn-tag bear">−$58.49 折价</span>（1h 均
              −$43.23、4h 均 −$36.94；n2n-日均 −$38.61、区间 −$146.99 /
              +$39.99 —— basis 盘中短暂翻升水但快照处折价）。1 分钟
              aggressor skew 快照{' '}
              <span className="dn-tag bull">+19.5</span>（1h 均 +1.57）——
              一档买攻倾斜正好进快照。
              <span className="dn-em">
                funding 翻回空付、OI 仍连第三日扩张、perp 折价、retail 在
                上行里 de-crowding：perp-tape 代理读出一根仍被 perp 本子
                怀疑的反弹（OI 在堆而 funding 付空头、perp 交易折价）——
                比 06-15 那种多头压的读法更挤压备战、但 SM feed 黑着、它
                就还是一道代理读、不是确认读。
              </span>
            </p>

            <p>
              窗口流向是<em>一根磨上日、整天在现货侧买进、后半 4h 在
              褪 —— 比 06-15 更静的上日、早盘推到新鲜高被卖回进快照</em>。
              n2n-日：价格 <span className="dn-tag bull">+0.99%</span>、OI
              <span className="dn-tag bull">+1,721 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +2,582</span>
              <span className="dn-em">（窗内无 cb_cvd reset）</span>、期货
              CVD <span className="dn-tag bull">Δ +2,262</span>、大单
              <span className="dn-tag bull">+2,013 BTC</span>、taker-net
              <span className="dn-tag bull">+2,262</span> ——
              <span className="dn-em">现货 AND 期货 都决然买进这一天、带
              一道重大单买盘（+2,013 BTC 净）、OI 仍在扩 —— 整天净多侧
              发起、是上腿里日级最强的流向</span>。4h（进快照）：价格
              <span className="dn-tag bear">−0.35%</span>、OI
              <span className="dn-tag bear">−399 BTC</span>、现货 CVD
              <span className="dn-tag">Δ −34</span>、期货 CVD
              <span className="dn-tag bull">Δ +135</span>、大单
              <span className="dn-tag bear">−414 BTC</span>、taker-net
              <span className="dn-tag bull">+135</span> —— <em>褪腿：现货净
              平、大单净卖 −414 BTC、OI 泄 −399、推到 $67,255 那一冲被
              派发回来 —— 早盘高之后的后半 stall</em>。1h：价格
              <span className="dn-tag bull">+0.18%</span>、OI
              <span className="dn-tag bull">+80 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +301</span>、期货 CVD
              <span className="dn-tag bull">Δ +121</span>、大单
              <span className="dn-tag bear">−10 BTC</span>、taker-net
              <span className="dn-tag bull">+121</span> —— <em>最后一小时
              又上抬、现货与期货 aggressor 小买、OI 轻推 —— 4h 褪之后进
              快照的一道温和再买、不是新冲量</em>。日形是最干净的读：一根
              现货与期货领的强日、带重大单买盘、在后四小时随新鲜高被
              派发而 stall —— 一根 perp 本子仍在怀疑的反弹（funding 付
              空头、perp 折价）、即便 OI 连建三日。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 快框 RSI 从超买冷出（15m 43.2 / 30m 48.1 / 1h 55.8、从 77.8 / 78.9 / 75.9 落）—— 超买靠 stall-and-fade 在价格守住时重置 · 但衰竭簇 PERSISTS（15m / 30m / 1h / 4h 顶背离、8h / 12h ⚡ TD9 SELL、4h &amp; 1d pending Sell 8 → 9?）· D-SMA20 重夺、其上每一根 MA 都在头顶</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图冷掉了超买的泡沫、却保住了衰竭簇点亮：扫描读 净 3 bull
                / 4 bear / 3 neutral（对 06-15 不变）、头部标
                &ldquo;高级别偏空 · 短线反弹&rdquo;、带一道 5/9 reversal
                regime 提示（JT&lt;0）
              </span>
              。快框从超买里拉回 —— 15m RSI{' '}
              <span className="dn-tag bull">43.2</span>、30m{' '}
              <span className="dn-tag bull">48.1</span>、1h{' '}
              <span className="dn-tag bull">55.8</span>（从 06-15 的 77.8 /
              78.9 / 75.9 重落）—— 封住 06-15 的那个超买条件重置了、但它是靠
              <span className="dn-em">stall-and-fade 在价格守住时</span>重置、
              不是靠一根新鲜下冲量：15m 在一道水上死叉上滑回云下（↑66.4k
              7b）、而 30m 与 1h 守在云上。但衰竭信号仍在：
              <span className="dn-tag bear">15m / 30m / 1h / 4h 顶背离</span>
              （四道）外加{' '}
              <span className="dn-tag bear">8h AND 12h ⚡ TD9 SELL</span>、
              4h 与 1d 都 pending <span className="dn-tag bear">Sell 8 →
              9?</span>、1M pending Buy 8 → 9?。
              <span className="dn-em">反弹靠一道守住价格的冷却回撤缓解了
              超买 RSI、却没清掉顶背离 / TD9-SELL 衰竭栈 —— 经典的
              延伸进衰竭签名从 06-15 的超买且上行、成熟成一道冷却但仍背离
              的读、是一根在守住涨幅的同时丢上行动量的盘面、不是一根干净
              收高的盘面。</span>肯定的多在日线上仍在：
              <span className="dn-tag bull">1d 水下金叉 3b</span>（06-14 那根
              叉守住并老化）、虽然 1d 仍在云下（RSI 43.8）在 Sell 8 → 9?。
              中框混：1h 守一道水上死叉 4b 在云上、Buy 6、4h 一道水上金叉
              7b 在云上、Sell 8 → 9?、8h 无叉在云内、⚡ TD9 SELL、12h 水下
              金叉 15b 在云下、⚡ TD9 SELL。慢框守在云下：3d 守一道
              <span className="dn-tag bear">水上死叉 7b 在 Sell 2</span>
              （周期框的熊）、1w 无叉在云下 Buy 5、1M 守 pending Buy 8 → 9?
              在云上。
              <span className="dn-em">
                直读：反弹冷掉了超买泡沫（快框 RSI 回到 43–56 带、15m 滑下
                云）、同时把价格守在高位附近 —— 表面上一道建设性重置 ——
                但横跨全部四个快/中框的顶背离簇、与 8h / 12h 的 ⚡ TD9 SELL
                熬过了冷却、4h / 1d 离它们自己的 TD9 SELL 只差一根 bar。
                高级别结构仍偏空；短线 reversal regime 仍偏反弹；这道冷却
                但仍背离的读警告上腿正在成熟、在守住涨幅的同时丢动量。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">66,284</td><td className="num bull">43.2</td><td className="bear">死叉（水上）27b</td><td className="bear">云下 ↑66.4k 7b</td><td>Sell 2</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">66,284</td><td className="num">48.1</td><td className="bear">死叉（水上）12b</td><td className="bull">云上 ↓65.8k 54b</td><td>Sell 1</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">66,284</td><td className="num">55.8</td><td className="bear">死叉（水上）4b</td><td className="bull">云上 ↓64.7k 28b</td><td>Buy 6</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">66,284</td><td className="num bull">63.6</td><td className="bull">金叉（水上）7b</td><td className="bull">云上 ↓63.3k 7b</td><td className="bear">Sell 8 → 9?</td><td>BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">66,284</td><td className="num bull">60.0</td><td className="neut">无叉</td><td className="neut">云内 64.1–68.6k 4b</td><td className="bear">⚡ TD9 SELL</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">66,284</td><td className="num">55.9</td><td className="bull">金叉（水下）15b</td><td className="bear">云下 ↑70.8k 49b</td><td className="bear">⚡ TD9 SELL</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">66,284</td><td className="num bull">43.8</td><td className="bull">金叉（水下）3b</td><td className="bear">云下 ↑74.3k 15b</td><td className="bear">Sell 8 → 9?</td><td>—</td></tr>
                <tr><td>3d</td><td className="num">66,284</td><td className="num bull">40.6</td><td className="bear">死叉（水上）7b</td><td className="bear">云下 ↑74.7k 5b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">66,284</td><td className="num bull">38.0</td><td className="neut">无叉</td><td className="bear">云下 ↑100.3k 20b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">66,275</td><td className="num">43.9</td><td className="bull">DIF 水上（无叉）</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（滚动 latest
                    文件；逐字存档于{' '}
                    <code>/opt/desk-note/snapshots/2026-06-16-0006/</code>）。
                    头部告警：<em>净 3 bull / 4 bear / 3 neutral · 高级别
                    偏空 · 短线反弹</em>、<em>15m / 30m / 1h / 4h 顶背离</em>、
                    <em>15m 底背离</em>、<em>8h / 12h ⚡ TD9 SELL</em>、
                    <em>4h &amp; 1d pending Sell 8 → 9?、1M pending Buy 8 →
                    9?</em>、<em>5/9 reversal regime（JT&lt;0）</em>。扫描
                    现货 $66,284、24h +0.87%（00:01Z MTF 扫描；live-tape
                    头部 00:06Z 在快照窗读 +0.99% n2n —— 5 分钟差与不同窗
                    解释这个差异）、24h H/L $67,255 / $65,314、qVol
                    $11.09B。收盘为未收盘 K 线；每个值在各周期收盘前都按
                    临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认上腿取了它的第一根日 MA —— 现货重夺了 D-SMA20 ——
              其余的盘面仍在头顶。现货 $66,332 坐在 200W 地板（+6.59%）AND
              <span className="dn-tag bull"> D-SMA20 $66,093（+0.36%）</span>
              上方、是谱系里第一根回到现货下方的日 MA；在其它每一根之下。
              最近的头顶是 <span className="dn-tag bull">D-EMA20 $66,675
              （−0.51%）</span>—— 一根小摆动 —— 然后{' '}
              <span className="dn-tag bear">D-EMA50 $70,518（−5.94%）</span>、
              <span className="dn-tag bear">W-SMA20 $71,619（−7.38%）</span>
              （破掉的周地板）、
              <span className="dn-tag bear">D-SMA100 $72,618（−8.66%；周期
              锚）</span>、
              <span className="dn-tag bear">D-SMA150 $73,132（−9.30%）</span>、
              <span className="dn-tag bear">D-EMA100 $73,156（−9.33%）</span>、
              <span className="dn-tag bear">D-SMA50 $73,469（−9.71%）</span>、
              <span className="dn-tag bear">W-EMA200 $73,720（−10.02%；种子）</span>、
              <span className="dn-tag bear">W-EMA20 $74,736（−11.24%）</span>、
              <span className="dn-tag bear">D-EMA150 $75,893（−12.60%）</span>、
              <span className="dn-tag bear">D-SMA200 $77,397（−14.30%）</span>、
              <span className="dn-tag bear">W-EMA150 $77,976（−14.93%；种子）</span>、
              <span className="dn-tag bear">D-EMA200 $78,548（−15.55%）</span>。
              更高更远、已弃用：W-EMA100 $82,419（−19.52%）、W-EMA50 $82,831
              （−19.92%）、W-SMA100 $88,549（−25.09%）、W-SMA50 $91,034
              （−27.14%）。
              <span className="dn-em">
                MA 锚自 parquet 2026-06-16 00:05Z close $66,276.20；偏移按
                live 现货 $66,331.99 重算。显示的 MA 水位按 $ 取整、偏移用
                精确序列值算。子集 MA 阶梯取 2024–2026 窗、按交易台政策；
                W-SMA150 / W-SMA200 不可计算（130 根子集周 bar）、W-EMA150
                （−14.93%）与 W-EMA200（−10.02%）从可用历史 seed、按种子
                值披露。200W $62,230 是全历史 W-MON 线（200 根收盘 bar、收
                在 06-15 周收）。日线收盘：06-08 $63,058（上）、06-09 $61,695
                （下）、06-10 $61,484 FINAL（下）、06-11 $63,598 FINAL（上）、
                06-12 $63,547 FINAL（上）、06-13 $64,418 FINAL（上）、06-14
                $65,702 FINAL（上）、06-15 $66,286 FINAL（上）、06-16（未收盘）
                $66,276（上）—— 五根定格收在 200W 地板上方、加一根未收盘
                bar 在上方。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子{' '}
              <span className="dn-roman">III · 本子缓到 +61.3M 净多 γ（前 +74.1M）因 15JUN 那块正 chunk 结算 · 0-γ flip 走上到 $65,232、所以现货坐在上方 +1.69% —— 仍在上方、但垫子收窄（前 +3.34%）· 16JUN +8.79M（一小块正）今日 08:00Z 清 · $60k 崩盘 put 加深到 −19.50M、26JUN 月度加深到 −21.14M</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子在 15JUN 那块正 chunk 结算时缓了它的净多 γ、且
                flip 走上比现货升得快、所以 flip 上方的现货垫子收窄
              </span>
              。aggregate GEX 是{' '}
              <span className="dn-tag bull">+61.3M / 1%</span>（06-15 是
              +74.1M —— 一根 −$12.8M 的缓、因 15JUN +28.59M 正 chunk 结算
              出）；本子仍净多 γ（阻尼）、但从一个比周中更浅的位置。0-γ
              flip 走上{' '}
              <span className="dn-tag">$63,557 → $65,232（+$1,675）</span>、
              现货 $66,332 现在坐在{' '}
              <span className="dn-tag bull">flip 上方 +1.69%</span>（现货口径
              66,331.99 / 65,232 − 1 = +1.686%）；GEX 文件自己的 Deribit-idx
              参考 $66,472 读{' '}
              <span className="dn-tag bull">上方 +1.90%</span>（66,472 /
              65,232 − 1 = +1.901%、文件的 &ldquo;Dist to Flip&rdquo; 读
              +1.9%）。<span className="dn-em">两参考都仍在 flip 上方、但
              缺口对 06-15 急剧收窄（当时 +3.34% / +3.69%）—— flip 走上
              +$1,675、而现货只升约 +$650、所以 dealer 本子本次从一个更
              薄的垫子上阻尼。</span>墙图是一道厚的正头顶带对一根加深的深
              崩盘 put：最重的正墙{' '}
              <span className="dn-tag bull">$67k +27.99M</span>（最重的单一
              正墙、就在头顶）、
              <span className="dn-tag bull">$80k +13.95M</span>、
              <span className="dn-tag bull">$70k +10.25M</span>、
              <span className="dn-tag bull">$68k +8.28M</span>、
              <span className="dn-tag bull">$66k +7.55M</span>（就在现货
              下方）、<span className="dn-tag bull">$75k +7.16M</span>；负侧是
              <span className="dn-tag bear">$60k −19.50M</span>（持续的崩盘
              put、从 06-15 的 −18.00M 加深）、
              <span className="dn-tag bear">$64k −9.97M</span>（就在现货
              下方）、<span className="dn-tag bear">$62k −8.55M</span>、
              <span className="dn-tag bear">$63k −6.60M</span>。
              <span className="dn-em">
                近头顶的 $67k +27.99M 现在是直接在现货上方的单一主导正盖
                —— 一个对推穿 $67k 重磅供给的 dealer 本子 —— 现货坐在 $66k
                +7.55M 的台上、上方薄薄一叠 $64k −9.97M / $63k −6.60M 的
                负口袋。$60k 的崩盘 put 磁体加深了（对 06-15 −$1.50M、
                −18.00M → −19.50M）、但在现货下方 −9.5% 它不是近现货的锚；
                读法是一个买进推动但在 $67k 有更重供给盖、且就在现货下方
                有比 06-15 更厚负口袋的 dealer 本子。
              </span>
            </p>

            <p>
              expiry strip 前端整片是正、但显示行对 dashboard 总值
              <span className="dn-em">非可加</span>。逐 expiry：16JUN 0.3DTE{' '}
              <span className="dn-tag bull">+8.79M</span>（今日 08:00Z 结算
              —— 一小块正前端）、17JUN 1.3{' '}
              <span className="dn-tag bull">+4.68M</span>、18JUN 2.3 +3.52M、
              19JUN 3.3 <span className="dn-tag bull">+17.21M</span>、
              <span className="dn-tag bear">26JUN 10.3 −21.14M</span>（月度、
              盘上最重的负 chunk、从 06-15 的 −10.03M 加深）、3JUL +2.63M、
              31JUL <span className="dn-tag bull">+22.18M</span>（整体最重的
              正）、28AUG +3.48M、25SEP +5.03M、25DEC +5.99M、26MAR27 +0.92M。
              <span className="dn-em">显示行合计 ≈ +53.29M、不是 dashboard
              aggregate +61.3M —— 逐 strike / 逐 expiry 分解对头条总值非可加；
              dashboard +61.3M 权威。</span>16JUN 0.3DTE 今日 08:00Z 结算
              （~8h 后）：因为它是一块正的 +8.79M chunk、清掉它会 LOWER
              aggregate —— 除 16JUN 后读约 +52.5M、仍坚实净正、但结算后是
              一本更小的正本子。
              <span className="dn-em">
                26JUN 月度 −21.14M 现在是主导的结构性负、且加深了、curve
                前端是一道在今天那小结算后变薄的正台、而最重的负坐在约 10
                天外的月度 —— 本子仍净多 γ、但结构性空 γ 在 26JUN expiry
                里建起来。
              </span>
            </p>

            <p>
              IV 中位数横跨 934 合约是{' '}
              <span className="dn-tag">43.4%</span>（从 06-15 的 44.5% / 948
              合约缓 —— 一根 −1.1pt 的轻推、因 15JUN 周链滚出、−14 合约）对
              30D close-to-close RV 的{' '}
              <span className="dn-tag">42.40%</span> —— 链级溢价{' '}
              <span className="dn-tag">~+1.0pt</span>、IV/RV 价差压向平。
              <span className="dn-em">是 934 合约的链中位数、
              <span className="dn-em">不是</span>可交易价差；expiry- /
              strike-level vega、skew、期限结构仍未载入、vol 读法保持
              framework only。</span>RV 方法：30D close-to-close、logret.std
              × √365 × 100、用最末 30 根日 log return（= 连续 31 根日
              close）、锚自 parquet 2026-06-16 00:06Z；底层 31-close 窗区间
              05-17 → 06-16。（参考：最末 29 returns / 30 closes 读 43.15%；
              页面值 42.40% 来自 30 returns。）P/C 比率 0.64 在 GEX 文件
              （Call OI 271,436 / Put OI 173,018）。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 新鲜周一印恢复 —— FRED Tier-1 日度序列不再周末顺延（10Y 4.48% +3.0bp、HY OAS 2.71% −7.0bp、TIPS 2.17% +1.0bp 是新鲜周一动作）· re-grow 腿仍 UN-FIRED（10Y 在 4.53% 闸下方 5bp、HY OAS 缓到 2.78% 闸 BELOW 7bp）· reclaim-long 筛守住 · DXY 平在 99.46 · 跨资产 NORMAL |r| 0.413、BTC 在 7d 领股票盘面</span>
            </h2>

            <p>
              <span className="dn-signal">
                周一 FRED 日度印恢复 —— 宏观面不再周末顺延、所以本次 Δ
                是新鲜移动：10Y 上 +3.0bp 到 4.48%、HY OAS 缓 −7.0bp 到
                2.71%、TIPS +1.0bp 到 2.17%
              </span>
              。dashboard 渲染 2026-06-15 22:15Z、比快照早约 1h51m。US 10Y
              nominal <span className="dn-tag">4.48%</span>、regime z{' '}
              <span className="dn-tag bear">+1.58</span>、偶发 z{' '}
              <span className="dn-tag bull">−0.13</span> —— 一根新鲜 +3.0bp
              周一印、<span className="dn-em">让 reclaim-long 利率筛（10Y
              &lt; 4.55%）真、re-grow leg-A 闸（10Y &gt; 4.53%）UN-FIRED、
              现在闸下方 5bp</span>。10Y TIPS real{' '}
              <span className="dn-tag bear">2.17%</span>、regime z{' '}
              <span className="dn-tag bear">+2.21</span>、偶发 z{' '}
              <span className="dn-tag bear">+0.98</span> —— 一根新鲜 +1.0bp；
              regime z 是日度面板上唯一的 EXTREME risk-off 标。5Y5Y BE 通胀
              <span className="dn-tag">2.24%</span>（+1.0bp）。HY OAS{' '}
              <span className="dn-tag bull">2.71%</span>、regime z{' '}
              <span className="dn-tag bull">−1.29</span>、偶发 z{' '}
              <span className="dn-tag bull">−1.38</span> —— 一根新鲜 −7.0bp、
              缓到 2.78% re-grow 闸 BELOW、所以 re-grow leg-B 仍 UN-FIRED
              （现在在它下方、不是在它上）。MOVE 债波{' '}
              <span className="dn-tag">69.4</span> —— 松、平。美元守住：DXY{' '}
              <span className="dn-tag">99.46（1d Δ −0.29）</span>、regime z{' '}
              <span className="dn-tag bear">+1.03</span>、偶发 z{' '}
              <span className="dn-tag bear">+0.59</span> —— z 标上仍 RISK-OFF
              但对 06-15 的 99.46 note-to-note 平（dashboard 1d Δ −0.29 反映
              上一交易日的移动；本次 n2n 移动 ~0）；Fed 净流动性{' '}
              <span className="dn-tag bull">$5.897T</span> 松（偶发 z +2.47、
              唯一的 &ldquo;什么变了&rdquo; 正）；NFCI −0.506 中性（陈旧
              ~10d）；US-JP 10Y 利差{' '}
              <span className="dn-tag">1.83%（+3.0bp）</span>（随 JGB 月度
              更新收窄）；USD/JPY{' '}
              <span className="dn-tag">160.32（+0.36）</span>；USD/CNY 6.7621。
              <span className="dn-em">
                净：周一印来得安静、在闸下方 —— re-grow 闸仍 un-fired（10Y
                4.48% 在 4.53% leg-A 闸下方 5bp；HY OAS 2.71% 现在在 leg-B
                闸 BELOW 7bp、一根新鲜的缓）、reclaim-long 筛（10Y &lt;
                4.55%）守住。宏观盘面仍与 BTC 转向 ALIGNED、不是对打；DXY
                硬但平、TIPS-real EXTREME 仍是抵消的 risk-off 线、但对 BTC
                要紧的利率与信用路径安静且在它们的闸下方、且信用路径本次
                再缓。
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
                <tr><td>US 10Y nominal</td><td className="num">4.48%</td><td className="num bear">+3.0bp（新鲜周一）</td><td className="num bear">+1.58</td><td className="num bull">−0.13</td><td className="bear">紧 regime · re-grow leg-A UN-FIRED（闸下 5bp）、筛守</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.17%</td><td className="num bear">+1.0bp（新鲜周一）</td><td className="num bear">+2.21</td><td className="num bear">+0.98</td><td className="bear">EXTREME RISK-OFF regime</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.24%</td><td className="num">+1.0bp</td><td className="num">+0.10</td><td className="num bull">−0.50</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.71%</td><td className="num bull">−7.0bp（新鲜周一）</td><td className="num bull">−1.29</td><td className="num bull">−1.38</td><td className="bull">RISK-ON · 缓到 2.78% 闸 BELOW、leg-B UN-FIRED</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.506</td><td className="num stale">陈旧 ~10d</td><td className="num">+0.19</td><td className="num bull">−0.73</td><td className="neut">中性</td></tr>
                <tr><td>MOVE 债波</td><td className="num">69.4</td><td className="num">+0.02</td><td className="num bull">−0.60</td><td className="num bull">−1.00</td><td className="bull">松 · 平</td></tr>
                <tr><td>DXY</td><td className="num">99.46</td><td className="num">−0.29（上一交易日）</td><td className="num bear">+1.03</td><td className="num bear">+0.59</td><td className="bear">RISK-OFF z 标 · 对 99.46 n2n 平 ~0</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.897T</td><td className="num bull">+0.062T</td><td className="num bull">+0.82</td><td className="num bull">+2.47</td><td className="bull">松 · 今日什么变了</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.32</td><td className="num bear">+0.36</td><td className="num bear">+1.31</td><td className="num bear">+1.13</td><td className="neut">日元软</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.83%</td><td className="num">+3.0bp</td><td className="num bull">−1.08</td><td className="num bull">−0.13</td><td className="bear">RISK-OFF · 随 JGB 更新收窄</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7621</td><td className="num bull">−0.01</td><td className="num bull">−1.77</td><td className="num bull">−1.34</td><td className="bull">无标 · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">月度 +13.5bp（~75d）</td><td className="num bear">+2.56</td><td className="num">+1.43</td><td className="stale">EXTREME 月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:01Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.413</span>（从
              06-15 的 0.421 缓、仍在 NORMAL 带、非系统性）。BTC 列出的
              对齐仍 TradFi-tech 领、但略松：NQ{' '}
              <span className="dn-tag">+0.652</span>（前 +0.681）、SP500{' '}
              <span className="dn-tag">+0.650</span>（前 +0.673）、NVDA{' '}
              <span className="dn-tag">+0.620</span>、SILVER{' '}
              <span className="dn-tag">+0.540</span>、TSLA{' '}
              <span className="dn-tag">+0.514</span>、GOOGL{' '}
              <span className="dn-tag">+0.511</span>、JP225{' '}
              <span className="dn-tag">+0.500</span>、COPPER{' '}
              <span className="dn-tag">+0.497</span>、GOLD{' '}
              <span className="dn-tag">+0.477</span>、MSFT{' '}
              <span className="dn-tag">+0.474</span>、PLAT{' '}
              <span className="dn-tag">+0.443</span>、META{' '}
              <span className="dn-tag">+0.419</span>。7d 相对表现：
              <span className="dn-tag bull">PALL +10.49%</span>、JP225{' '}
              <span className="dn-tag bull">+8.73%</span>、
              <span className="dn-tag bull">BTC +5.98%</span>（现在 LEADS
              股票盘面）、NQ <span className="dn-tag bull">+4.15%</span>、
              URNM <span className="dn-tag bull">+3.22%</span>、SILVER{' '}
              <span className="dn-tag bull">+3.16%</span>、COPPER{' '}
              <span className="dn-tag bull">+3.14%</span>、SP500{' '}
              <span className="dn-tag bull">+2.22%</span>、NVDA{' '}
              <span className="dn-tag bull">+2.14%</span>；大盘科技盘面混 ——
              GOOGL <span className="dn-tag bull">+1.82%</span>、AMZN{' '}
              <span className="dn-tag bull">+1.65%</span>、META{' '}
              <span className="dn-tag bull">+1.18%</span>、TSLA{' '}
              <span className="dn-tag bull">+0.54%</span>、但 AAPL{' '}
              <span className="dn-tag bear">−1.21%</span> 与 MSFT{' '}
              <span className="dn-tag bear">−2.83%</span> 重；金属混（SILVER
              +3.16%、PLAT +1.11%、GOLD{' '}
              <span className="dn-tag bear">−0.06%</span>）；能源继续崩 —— CL
              <span className="dn-tag bear">−11.18%</span>、BRENT{' '}
              <span className="dn-tag bear">−11.10%</span>。
              <span className="dn-em">
                本次的故事是 BTC 重夺股票盘面的领头：BTC 7d +5.98% 现在领先
                NQ +4.15% 与 SP500 +2.22%（只有 PALL +10.49% 与 JP225
                +8.73% 跑更高）、是对 06-15 中游读的反转、因 6 月初的崩从
                7d 窗里再滚出。BTC 对美国科技指数的对齐略松（NQ +0.652、
                SP500 +0.650、从 +0.681 / +0.673 落）、但仍是最紧的跨资产
                读 —— BTC 仍在一个仍 NORMAL 的宽 regime 里当高 beta 科技
                代理交易、现在领而非落后那个盘面。能源崩（CL/BRENT −11%）
                是宏观横流、但本次不是 BTC 承重读
              </span>
              。JGB 月度 2.65% 带一个 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 200W 地板盯位 PRIMARY（重夺现在 CONFIRMED —— 06-15 周收 $66,286 在 $62,230 地板上方 resolved；五根定格日收在上方）· 均值回归 scout 仍不能开（flip 腿守、funding 腿 REVIVED、但 TD9-BUY 簇仍反转成 SELL / 顶背离簇）· 宏观尾 re-grow UN-FIRED · 挤压周期 hostile-2 ON HOLD（SM feed 冻结）· 交易台 flat</span>
            </h2>

            <p>
              <span className="dn-signal">
                二元偏多 resolved、上腿磨出第五根、但衰竭簇完好、仓位本子
                仍黑 —— 它不改变一本 flat 本子、它把 primary 盯位收成一根
                确认的重夺、并把 scout 按在地上
              </span>
              。交易台没带仓位进这根快照、也没开任何东西；06-12 起的上腿
              延伸进第五根、交易台按设计看着它跑而没入场。诚实的记分卡：
              200W 重夺现在在 06-15 周收上 CONFIRMED（$66,286 &gt; $62,230、
              五根定格日收在上方）、现货重夺它第一根日 MA（D-SMA20 +0.36%）、
              dealer 本子在 +61.3M 守住净多 γ（post-settle 缓）、现货在 flip
              上方 +1.69%、快框从超买冷出。<em>但均值回归 scout 仍不能开：
              它的 flip 腿守、funding 腿 REVIVED（funding 在快照翻回负）、
              但它的 TD9-BUY 簇仍完全反转成一个 SELL / 顶背离簇（15m / 30m
              / 1h / 4h 顶背离、8h / 12h ⚡ TD9 SELL、4h 与 1d pending Sell 8
              → 9?）—— 直接否决均值回归多的单一腿 —— 所以它没更接近一根
              干净开；头顶 D-SMA20 之上的每一根 MA 都在；顶背离簇熬过了 RSI
              冷却；SM feed 冻结 ~94.5h、挤压读无法确认。</em>不追。scout 是
              一笔确认交易、它需要的确认（一道干净的三腿门 WITH 一个 TD9-BUY
              簇、不是 SELL 簇）仍不完整 —— 等一道重新武装的门、不要把一个
              入场硬塞进一根在守住涨幅却丢动量、仍闪顶背离的第五根盘面里。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · PRIMARY · 200W 周期地板盯位 · 重夺 CONFIRMED：06-15 周收 $66,286 在 $62,230 地板上方 resolved；五根定格日收在上方（06-11 $63,598、06-12 $63,547、06-13 $64,418、06-14 $65,702、06-15 $66,286）</span>
              <div className="dn-trade-name">
                200W 周期地板盯位 —— 重夺 CONFIRMED：06-15 周 W-MON 收最终定格 $66,286、干净地在 200W $62,230 上方；上一篇点出的那道二元偏多 resolved、五根定格日收在上方、未收盘的 06-22 周 bar $66,276 在上方
              </div>
              <div className="dn-thesis">
                06-09/06-10 那破把两根日收放在地板下方；06-11 盘面收回、
                06-12 到 06-15 守住并延伸。本次那根 resolving 事件落地：06-15
                周 W-MON 收最终定格 $66,286、在 200W $62,230 上方 —— 06-15
                备忘点为二元的地板重夺现在在周 K 上 CONFIRMED、是 06-08 后
                谱系的一根一周 dip-and-reclaim。06-15 日收也定格 $66,286、给出
                五根连续定格日收在地板上方（06-11 $63,598、06-12 $63,547、
                06-13 $64,418、06-14 $65,702、06-15 $66,286）。现货 $66,332
                坐在地板上方 +6.59%、未收盘的 06-22 W-MON 周 bar 印 $66,276
                = +6.51% 上方。全历史 200 周 SMA 是 $62,230（200 根收盘 bar、
                收在 06-15 周收）；周收-在-自身-200W-下方频率是 8 / 155 =
                5.16% —— 一个低基率位置、盘面现在已在周收上重夺。二元既已
                resolved、框架从 &ldquo;周收确认还是破&rdquo; 转成盯上腿是否
                守住地板并清掉下方日 MA 带：一根持续回到地板下方的移动会
                重开破案、但在一根确认的周重夺和 +6.51% 周内垫子后、那现在
                是低概率路径。状态：<em>盯位开、重夺 CONFIRMED、无仓位</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板（全历史 W-MON）</span><span className="dn-lvl-v">$62,230 · 200 根收盘 bar、收在 06-15 周收 · live 现货 +6.59% / +$4,102 上方</span></div>
                <div><span className="dn-lvl-k">06-15 周收（RESOLVED）</span><span className="dn-lvl-v bull">$66,286 = 200W 上方 +6.51% —— 二元偏多 resolved、重夺在周 K 上 CONFIRMED</span></div>
                <div><span className="dn-lvl-k">未收盘周（06-22）</span><span className="dn-lvl-v bull">1m-收 $66,276 = 200W 上方 +6.51% / +$4,046 —— 06-22 W-MON 收前临时</span></div>
                <div><span className="dn-lvl-k">定格日收谱系</span><span className="dn-lvl-v bull">06-11 $63,598 · 06-12 $63,547 · 06-13 $64,418 · 06-14 $65,702 · 06-15 $66,286（全 FINAL、全在上方）· 06-16 未收盘 $66,276（上方）—— 五根定格收在地板上方</span></div>
                <div><span className="dn-lvl-k">破重开（偏空、低概率）</span><span className="dn-lvl-v bear">一根持续周收回到 $62,230 下方 —— 会重开首根持续周-200W 破（上次全历史在-自身-200W-下方收是 2023-10-09）；在确认重夺与 +6.51% 垫子后现在是低概率路径</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>200W 是一根周收线、06-15 周收现在已把它
                RESOLVED 在地板上方 —— 重夺确认、不是待定。五根定格日收
                （06-11 $63,598、06-12 $63,547、06-13 $64,418、06-14 $65,702、
                06-15 $66,286）坐在上方。盯位现在读上腿守住地板并压下方日
                MA 带的能力、不是一根二元 K；把任何回向地板的移动当中间
                tell、但在没有一根持续周收在 $62,230 下方前不要重开破案、
                +6.51% 垫子让那成为低概率路径。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 仍不能开 · flip 腿守 + funding 腿 REVIVED、但 TD9-BUY 簇仍完全反转成 SELL / 顶背离簇 · 站下</span>
              <div className="dn-trade-name">
                均值回归多 scout —— 仍不能开：flip 腿守（现货在 $65,232 上方 +1.69%）、funding 空付 leg-2 REVIVED（funding 在快照翻回负、−0.67% ann、一段 ~15h 空付串）、但 TD9-BUY 簇仍完全反转（15m / 30m / 1h / 4h 顶背离、8h / 12h ⚡ TD9 SELL、4h &amp; 1d pending Sell 8 → 9?）—— 门在 leg-1 这条否决腿上破
              </div>
              <div className="dn-thesis">
                scout 是一道三腿门：(1) 一个 TD9-BUY 簇、(2) 一段 funding
                空付 ≥4h 连续、快照处为负、(3) 一根 1h 收在 0-γ flip 上方。
                06-15 leg 3 守但 leg 2 已死、leg 1 反转成 SELL 读。本次腿
                又移了：<em>Leg 3 守</em> —— flip 走上到 $65,232、现货坐在
                上方 +1.69%（idx +1.90%）。<em>Leg 2 REVIVED</em> —— funding
                在快照翻回空付（−0.67% ann）、一段结束 AT 快照的深 ~15h
                连续负值串、所以 ≥4h 空付要求满足。<em>Leg 1 仍反转</em> ——
                哪里都还没 TD9-BUY；反而 15m / 30m / 1h / 4h 顶背离、8h /
                12h 印 ⚡ TD9 SELL、4h 与 1d pending Sell 8 → 9?。净：scout
                不能开 —— 均值回归多被一个完全反转成 SELL / 顶背离簇的
                TD9-BUY 簇把门、即便 funding 与 flip 腿都活、且它要抓的那根
                移动已经跑了五根。门在直接否决均值回归多的那一条腿上破。
                状态：<em>站下、无入场</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">leg 1 · TD9 簇</span><span className="dn-lvl-v bear">反转 —— 哪里都没 TD9 BUY；15m / 30m / 1h / 4h 顶背离、8h / 12h ⚡ TD9 SELL、4h &amp; 1d pending Sell 8 → 9?、3d 水上死叉 Sell 2 —— 一个完整的 SELL / 顶背离簇</span></div>
                <div><span className="dn-lvl-k">leg 2 · funding 空付 ≥4h</span><span className="dn-lvl-v bull">REVIVED —— funding 在快照翻回负（−0.67% ann）；进快照的尾随连续负值串是 915 行 / ~15h15m、快照处 funding 为负 —— 满足快照处为负的要求</span></div>
                <div><span className="dn-lvl-k">leg 3 · 1h 收 &gt; flip</span><span className="dn-lvl-v bull">守 —— flip $65,232、现货上方 +1.69%（idx +1.90%）—— 干净在 flip 上方、但 leg 1 反转下这是空谈</span></div>
                <div><span className="dn-lvl-k">触发（3 腿全干净）</span><span className="dn-lvl-v bull">确认的 TD9 BUY 簇 AND 一段活的 funding 空付 ≥4h、快照处为负 AND 1h 收 &gt; flip —— 然后 scout long 0.2R；本次 leg 2 与 3 活、leg 1 反转、所以不同时干净</span></div>
                <div><span className="dn-lvl-k">止损 / size</span><span className="dn-lvl-v bear">1h 收 &lt; $61,484（06-10 日收 / 200W 带）· size 0.2R · 在周期锚 D-SMA100 $72,618 平半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R 草图（示意、非实时下单）：</b>若门重新武装、一根
                干净 1h 收在 flip $65,232 上方对一根 $61,484 止损是 ~$3,748
                风险；首目标在周期锚 $72,618 是 ~$7,386 回报（从 $65,232
                入场量）≈ 1.97:1 —— 比周中更薄、因 flip 走向现货、且门在 TD
                簇反转成 SELL 读时不能开。<b>硬规则：</b>不要从那两条活的腿
                合成一个入场 —— 均值回归多需要一个 TD9-BUY 簇、而这个簇在
                全部四个快/中框带顶背离、外加 8h / 12h ⚡ TD9 SELL；在一根
                第五根、顶背离、TD9-SELL 簇、且头顶 D-SMA20 之上每一根 MA
                都在的盘面里买、正是框架禁止的预判。诚实读：scout 现在已经
                连续第五次在不同的破组合上没能开（flip-then-funding 06-13、
                TD-簇 06-14、funding-and-TD 06-15、本次只 TD-簇）—— funding
                腿反复翻态本身就是它不能锚一个入场的 tell；等一个确认的
                TD9-BUY 簇重组、不要硬塞。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · put-spread re-grow 闸 —— 两腿仍 UN-FIRED（新鲜周一印：10Y 4.48% 在 4.53% 闸下方、HY OAS 2.71% 缓到 2.78% 闸 BELOW）</span>
              <div className="dn-trade-name">
                宏观尾 put-spread —— 已平；re-grow 闸两腿仍 UN-FIRED：新鲜周一 10Y 4.48%（在 4.53% leg-A 闸下方）AND HY OAS 2.71%（缓到 2.78% leg-B 闸 BELOW）；reclaim-long 利率筛（10Y &lt; 4.55%）守 TRUE
              </div>
              <div className="dn-thesis">
                宏观尾 put-spread 已平、无残余。re-grow 两腿都在 06-12 触发、
                都在 06-13 un-fire；06-14 / 06-15 FRED 日度序列周末顺延、本次
                周一印新鲜恢复 —— 没有重触：10Y 印 4.48%（在 4.53% 闸下方、
                在 reclaim-long 筛 10Y &lt; 4.55% 内）、HY OAS 缓到 2.71%
                （现在在它的闸 BELOW、不是在它上）。
                <span className="dn-em">新鲜周一印凭借在闸下方确认了闸仍
                un-fired —— 信用路径（HY OAS）本次再缓 −7.0bp、移离 re-grow
                闸、唯一值得记的宏观跳是 10Y +3.0bp 仍稳稳在它的筛内。宏观
                盘面仍与 BTC 转向对齐、不是对打。</span>一根 re-grow 会对打
                这根反弹；闸仍 un-fired 把连酌情张力都拿下桌。交易台没持尾、
                没有闸可对这根净多 γ、200W 重夺的盘面开火。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">已平 · 无残余 · re-grow 闸两腿 UN-FIRED（新鲜周一印）—— 无张力可管</span></div>
                <div><span className="dn-lvl-k">re-grow leg A（UN-FIRED）</span><span className="dn-lvl-v bull">10Y &gt; 4.53% 收 —— 在 4.48% UN-FIRED（新鲜周一、闸下 5bp）</span></div>
                <div><span className="dn-lvl-k">re-grow leg B（UN-FIRED）</span><span className="dn-lvl-v bull">HY OAS &gt; 2.78% 收 —— 在 2.71% UN-FIRED（新鲜周一、缓到闸 BELOW 7bp）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— 在 4.48% 守 TRUE</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位漂调的酌情盯位、不是回测
                断点；本次新鲜周一印把两腿干净放在它们的闸下方（HY OAS
                再缓离）。一根新尾只有在 BTC 内部结构翻倒回去（本子在重新
                失败的 flip 下方重深空 γ AND 盘面丢 200W）WITH 宏观腿重触
                时才说得通 —— 这些现在一个都不成立。只在两条宏观腿干净重触
                进一根 BTC 内部破裂时才重武装盯位；没那个、就没尾可长。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期 hostile-2 观察名单 · 无日历先验 · ON HOLD —— SM feed 冻结 ~94.5h、本次框架无法在它自己的数据上评估</span>
              <div className="dn-trade-name">
                挤压周期 hostile-2 —— ON HOLD：Hyperliquid SM feed 自 2026-06-12 01:36Z 冻结（~94.5h 陈旧）、所以算不出 SM Δnet 步；perp-tape 代理（OI +1,721 第三日堆、funding 翻回负、perp 折价）现在暗示 perp 本子仍在怀疑上腿、而非多头压它 —— 但不可确认
              </div>
              <div className="dn-thesis">
                挤压周期框架按观察名单跑、无日历先验（节奏在五月底被证伪）、
                本次连续第四篇 ON HOLD、因它的主输入黑着：live_db 里的 SM 块
                自 2026-06-12 01:36Z 起未推进、所以 SM 多/空/净冻结、不杜撰
                就算不出离散 Δnet ≥ +3k 回补步或 ≤ −3k 重堆。
                <span className="dn-em">本次挤压读因此完全靠 perp-tape 代理、
                它对 06-15 翻回去了：OI 连第三日扩张（+1,721）AND funding 进
                快照翻回负、perp 折价 —— 是一根 perp 本子仍在怀疑的反弹
                （付空头、交易折价）的配置、而非 06-15 那种多头压的 tell。
                那是一道更挤压备战的读、但 SM feed 黑着、它无法确认。</span>
                feed 解冻后、把任何新鲜 Δnet ≤ −3k 单分钟步（同一分钟 Δshort
                &gt; 0 + Δlong &lt; 0）读作一道重堆 hostile-2 信号、任何 Δnet
                ≥ +3k 回补步读作它的反面 —— 但 feed 冻结时哪个都读不了。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v stale">ON HOLD · SM feed 冻结 ~94.5h（自 2026-06-12 01:36Z）· 本次算不出 SM Δnet 步</span></div>
                <div><span className="dn-lvl-k">perp-tape 代理（实时）</span><span className="dn-lvl-v">OI +1,721（+1.69%）一根第三日堆 · funding 翻回负（快照 −0.67%）· 日级现货 CVD +2,582 / 期货 CVD +2,262（都买了这一天）但 4h 在褪 · perp −$58.49 折价 —— perp 本子仍在怀疑上腿、对 SM 不可确认</span></div>
                <div><span className="dn-lvl-k">前向 gating</span><span className="dn-lvl-v">feed 解冻后：新鲜 Δnet ≤ −3k 单分钟 = 重堆 hostile-2 信号；Δnet ≥ +3k = 回补点火 —— 两边都无时间先验；在那之前代理是唯一读</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>节奏已死（五月底证伪）、SM feed 冻结、所以
                本次没有 SM 数据可读 —— 把框架当 ON HOLD、不是当一本安静
                本子。不要把冻结的 −37.3k 净往前带当作一个实时读、也不要把
                它对一个未来解冻值差成单步（缺口会是多日累积、不是一根分钟
                步）。perp-tape 代理现在指回 perp 本子怀疑反弹（funding 付
                空头、perp 折价）、而非多头压它、但没有 SM feed 它就还是
                一道代理。feed 一推进就恢复框架；重读第一根新鲜 Δnet 步看
                本子往哪边押。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 200W 重夺 CONFIRMED（06-15 周收在地板上方 resolved —— 二元偏多 resolved）· 现货重夺它第一根日 MA（D-SMA20 +0.36%）· scout 仍不能开、TD 簇即便 funding 复活仍反转 · dealer 本子缓到 +61.3M 净多 γ、flip 走上、垫子收窄到 +1.69% · SM feed 冻结 ~94.5h · 交易台 flat</span>
            </h2>

            <p>
              06-15 那些条件里：200W 周期地板重夺现在 CONFIRMED（06-15 周收
              最终定格 $66,286 在 $62,230 地板上方、二元偏多 resolved、现货
              上方 +6.59%、未收盘 06-22 bar +6.51% 上方）；现货重夺它第一根
              日 MA（D-SMA20 $66,093、+0.36%）；dealer 本子 post-15JUN-settle
              缓到 +61.3M 净多 γ、flip 走上到 $65,232、所以现货垫子收窄到
              上方 +1.69%；均值回归 scout 仍不能开 —— 它的 flip 腿守、funding
              腿复活、但它的 TD9-BUY 簇仍完全反转成 SELL / 顶背离簇、是 leg-1
              否决项；宏观 re-grow 腿仍 UN-FIRED（新鲜周一 10Y 4.48%、HY OAS
              缓到 2.71%）、reclaim-long 筛守住；SM feed 冻结 ~94.5h、所以
              挤压周期框架 ON HOLD、perp-tape 代理是唯一仓位读。<em>单一
              结构读是一根延伸进第五根上腿、并在周收上确认了 200W 重夺的
              反弹 —— 地板重夺偏多 resolved、现货重夺 D-SMA20、γ 在 +61.3M
              守住净多、这一天在现货与期货上都被重买、带一道重大单买盘 ——
              但它是在一道横跨全部四个快/中框的顶背离簇与 8h / 12h ⚡ TD9
              SELL 里这么做、4h 后半在褪新鲜高、头顶 D-SMA20 之上每一根 MA
              都在、聪明钱侧不可读。</em>今天的条件围绕确认的地板重夺、仍
              被按住的 scout（现在只在 TD 腿上破）、一根两闸都 un-fired 的
              宏观尾、和一个 on hold 的挤压框架重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>200W 周收重夺（CONFIRMED）</td><td className="bull">06-15 W-MON 收 $66,286 &gt; $62,230 —— 偏多 RESOLVED；五根定格日收在上方 + 未收盘 bar +6.51% 上方</td><td>二元 resolved —— 地板重夺在周 K 上确认、是 06-08 后谱系的一根一周 dip-and-reclaim；盯位转成上腿是否守住地板并清掉下方日 MA 带</td></tr>
                <tr><td>第一根日 MA 重夺（偏多）</td><td className="bull">D-SMA20 $66,093 现在在现货下方（+0.36%）—— 谱系第一根正日 MA 偏移；D-EMA20 $66,675（−0.51%）最近头顶</td><td>把 D-EMA20 重夺读作下一个多 tell、把跌回 D-SMA20 下方读作上腿翻倒的首迹；下方日 MA 带（$66.7k–$72.6k）是反弹必须啃过的头顶</td></tr>
                <tr><td>16JUN expiry 结算（今日 08:00Z、~8h 后）</td><td>+8.79M 小块正前端清掉；除 16JUN 后 aggregate ≈ +52.5M（结算后更小的正本子）</td><td>把结算读作中间 tell —— 清掉一小块正 chunk 适度削净多 γ 垫子；本子仍坚实净正、非 regime 变</td></tr>
                <tr><td>均值回归多 scout —— TD 腿（破）</td><td className="bear">TD9-BUY 簇完全反转（15m/30m/1h/4h 顶背离、8h/12h ⚡ TD9 SELL、4h &amp; 1d pending Sell 8 → 9?）；funding 腿 REVIVED、flip 腿守</td><td>TD 簇反转成 SELL / 顶背离读时 scout 不能开、即便 funding 与 flip 腿都活；站下 —— 只在一个确认的 TD9-BUY 簇重组 AND 一段活的 funding 空付 ≥4h 快照处为负 AND 1h 收 &gt; flip 时重武装、不要从那两条活腿合成</td></tr>
                <tr><td>0-γ flip（走上、垫子收窄）</td><td className="bull">flip $65,232（+$1,675）；现货 +1.69% / idx +1.90% —— 都在上方、但缺口从 +3.34% / +3.69% 收窄</td><td>现货仍在 flip 上方、但垫子随 flip 走上比现货快而变薄；仍是一个阻尼 dealer 位置、但对 flip 的重测比周中更近 —— 盯跌回 $65,232 下方作首个 dealer 侧警告</td></tr>
                <tr><td>宏观尾 re-grow（两腿 UN-FIRED、新鲜周一）</td><td className="bull">10Y &lt; 4.53%（在 4.48% UN-FIRED、新鲜周一）；HY OAS &lt; 2.78%（在 2.71% UN-FIRED、缓到下方）</td><td>新鲜周一印把两腿放在它们的闸下方（HY OAS 再缓离）；无尾可长、无张力可管 —— 宏观与 BTC 转向对齐；只在两腿干净重触进一根 BTC 内部破裂时重武装</td></tr>
                <tr><td>挤压周期 hostile-2（SM feed 冻结 ~94.5h）</td><td className="stale">ON HOLD —— 算不出 SM Δnet 步；perp-tape 代理现在指回 perp 本子怀疑上腿</td><td>feed 冻结时框架无法在它自己的数据上评估；它一解冻就恢复、读第一根新鲜 Δnet ≤ −3k（重堆）或 ≥ +3k（回补）单分钟步；不要把冻结的净对一个未来解冻值差成单步</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                上腿能否清掉下方日 MA 带（D-EMA20 $66,675 然后 $70k–$73k
                簇）、还是从顶背离衰竭栈翻倒：200W 二元既已偏多 resolved、
                D-SMA20 重夺、活的张力已从地板移到头顶 —— 一根干净的 D-EMA20
                重夺把上腿延向周期锚 D-SMA100 $72,618、而一根跌回 D-SMA20
                下方、顶背离与 ⚡ TD9 SELL 往下解的、是第五根反弹在衰竭的
                首迹
              </span>
              。在那之前本篇按写好的跑：交易台 flat、200W 盯位是 primary
              框架、它的重夺现在在 06-15 周收上 CONFIRMED、均值回归多 scout
              仍不能开（funding 腿复活、flip 腿守、但 TD 簇仍反转成 SELL /
              顶背离读 —— 不追）、宏观尾 re-grow 仍 un-fired（新鲜周一印在
              两闸下方）、宏观盘面与 BTC 转向对齐、挤压周期 hostile-2 框架
              ON HOLD、SM feed 冻结 ~94.5h。dealer 本子 post-settle 缓到
              +61.3M 净多 γ、现货 flip 上方垫子收窄到 +1.69%；funding 在快照
              翻回空付；OI 连第三日扩张、这一天在现货与期货上都被买、带一道
              重大单买盘、4h 后半在褪；BTC 7d 表现在一个仍 NORMAL 的宽 regime
              里重夺股票盘面领头。下一个 24h 的对读是<em>耐心且 flat ——
              二元偏向反弹 resolved、地板重夺确认、但上腿现在在守住涨幅的
              同时成熟进一道顶背离簇、一根只重夺了它第一根日 MA、且在把新鲜
              高褪进衰竭信号的第五根反弹不是一笔交易；让 D-EMA20 重夺或一根
              D-SMA20 失败告诉它往哪边解、让一个 TD9-BUY 簇重组、scout 才是
              除被按住之外的任何东西</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2 —— 已过 codex 敌对式审计（2026-06-16）
            </span>
            <b>状态：</b>本篇是建在 2026-06-16 00:06Z 原子快照上的 <b>v2</b>
            版、<b>已过 codex 敌对式审计</b>。STAGE B codex 跨模型敌对审计
            返回 <b>PASS-WITH-NOTES（0 CRITICAL / 0 MAJOR / 1 MINOR / 0
            NIT）</b>；ask-deepseek 算式二审（由 STAGE C 裁决、行动前重算）
            提了一条 CRITICAL、STAGE C 裁决为 FALSE。完整记录：
            <code>audits/2026-06-16-desk-note.md</code>。
            <b>Findings + grep-closure（每个 pattern 在整份 EN 文件上搜过；
            hits-after = 0 ⇒ RESOLVED）：</b>{' '}
            <b>DN-001（MINOR · codex）</b> —— 五个低承重宏观 z-score 表格格
            与存档宏观面板不符。对{' '}
            <code>/opt/desk-note/snapshots/2026-06-16-0006/macro_dashboard.html</code>
            重算：5Y5Y BE regime/偶发 <code>+0.10 / −0.50</code>（前{' '}
            <code>−0.02 / −0.85</code>）、MOVE 偶发 <code>−1.00</code>（前{' '}
            <code>−1.02</code>）、USD/JPY 偶发 <code>+1.13</code>（前{' '}
            <code>+1.09</code>）、US-JP 10Y 偶发 <code>−0.13</code>（前{' '}
            <code>−0.62</code>）、JGB 10Y regime/偶发{' '}
            <code>+2.56 / +1.43</code>（前 <code>+2.62 / +1.41</code>）。在
            整份 EN 文件上搜过的 pattern：<code>−0.02</code> /{' '}
            <code>−0.85</code> / <code>−1.02</code> / <code>+1.09</code> /{' '}
            <code>−0.62</code> / <code>+2.62</code> / <code>+1.41</code> ——
            各 before 1（表格格）/ after 0；宏观正文不引用这些 z 值、所以
            错误数字只活在那五个表格格里 —— <b>RESOLVED</b>。{' '}
            <b>SA-CRIT（CRITICAL · ask-deepseek、裁决 FALSE —— REJECTED）</b>
            —— ask-deepseek 主张快照 funding{' '}
            <code>−0.67% ann（原始 −0.000609 × 1095）</code>差 100× 倍、应读
            <code>−66.7%</code>。重算与裁决：页面在一个自洽尺度上报四个
            funding 数字 —— 快照 <code>−0.67%</code>、n2n 均值{' '}
            <code>−3.14%</code>、谷 <code>−7.84%</code>、峰{' '}
            <code>+2.72%</code> —— 快照原始 <code>−0.000609</code> 稳稳坐在
            已实现的原始窗内（谷的原始更负）。只把快照 ×100 重标到 −66.7%
            会让它比窗谷 −7.84% 更负（单个采样不能超过窗自己的极值）、且会
            与未被标的均值/谷/峰矛盾、而 deepseek 把那三个共享同一{' '}
            <code>× 1095</code> 公式的留着没动。codex（primary、拥有发布门）
            独立核过 <code>−0.67%</code> 快照与 <code>−3.14%</code> 均值为
            PASS。这是一道单位读错的 false positive；不改任何数字。搜过的
            pattern：<code>−66.7</code> / <code>66.69</code>（before 0 /
            after 0 —— 页面从未带过 deepseek 值）；<code>−0.67% ann</code>
            按正确值保留 —— <b>REJECTED（无变）</b>。{' '}
            <b>所有 findings 已解决或裁决；无 UNRESOLVED 残留 —— 升级到
            v2。</b>下面记录被审计的源 pin 作谱系：funding × 1095（快照
            −0.67% ann 自原始 −0.000609、快照处翻回负、n2n 均值 −3.14% ann、
            区间 −7.84% / +2.72%、封顶 2 / 1441 @ +2.72% 上限、1 / 1441 @
            −7.84% 下限、负分钟占比 80.57% = 1161 / 1441、结束 AT 快照的尾随
            连续负值串 915 行 / ~15h15m、快照处 funding 为负 —— scout funding
            leg-2 又 REVIVED）；GEX 双参考符号（flip $65,232、现货 +1.69% =
            66,331.99 / 65,232 − 1 / idx +1.90% = 66,472 / 65,232 − 1 —— 都
            在上方、缺口对 06-15 收窄；aggregate +61.3M 从 +74.1M 缓；$60k
            −19.50M 从 −18.00M 加深；显示 expiry 行合计 ≈ +53.29M 对 dashboard
            +61.3M 非可加、dashboard 权威；16JUN 0.3DTE +8.79M 今日 08:00Z
            结算、除 16JUN 后 ≈ +52.5M、清掉一块正会 LOWER aggregate；26JUN
            月度 −21.14M 从 −10.03M 加深）；200W 全历史 W-MON SMA $62,230
            （200 根收盘 bar、收在 06-15 周收）对 live 现货 +6.59% 上方、
            未收盘 06-22 bar $66,276 +6.51% 上方、8 / 155 = 5.16% 频率、06-15
            周收 $66,286 在地板上方 RESOLVED（重夺 CONFIRMED）、
            <code>weekly_200sma.json</code> 缺失（200W 直接从 parquet 算、
            JSON 百分位 / 上次事件不可用、非杜撰）；<b>SM FEED 冻结</b> ——
            Hyperliquid SM 块自 2026-06-12 01:36Z 起未推进（~94.5h 陈旧）、
            long 13,532.412 / short 50,825.664 / net −37,293.252 是冻结的
            最末写入值（与 06-13、06-14、06-15 三篇逐字节相同、冻结早于
            三篇）、所以本次不算 SM Δ / cut fraction / 挤压周期步（非杜撰）；
            日收谱系（06-08 $63,058、06-09 $61,695、06-10 $61,484 FINAL、
            06-11 $63,598 FINAL、06-12 $63,547 FINAL、06-13 $64,418 FINAL、
            06-14 $65,702 FINAL、06-15 $66,286 FINAL、06-16 未收盘 $66,276 ——
            五根定格收在地板上方）；OI n2n +1,721 BTC（+1.69%、快照 103,299、
            一根比 06-15 +1,423 更大的第三日堆）；30D RV 42.40%（30 returns /
            31 closes；29 returns 另读 43.15%；窗 05-17 → 06-16）；跨资产
            |r| 0.413 NORMAL、BTC +5.98% 在 7d LEADS 股票盘面（只 PALL
            +10.49% / JP225 +8.73% 更高）、BTC-股票相关性略松（NQ +0.652、
            SP500 +0.650）；宏观 Tier-1 新鲜周一印恢复（10Y 4.48% +3.0bp ——
            re-grow leg-A UN-FIRED、reclaim-long 筛 10Y &lt; 4.55% 守；HY OAS
            2.71% −7.0bp 缓到闸 BELOW、leg-B UN-FIRED；TIPS 2.17% regime-z
            EXTREME；DXY 99.46 平 ~0 n2n、dashboard 1d Δ −0.29 上一交易日；
            MOVE 69.4；Fed 净流动性 $5.897T）；n2n 窗内无 cb_cvd reset；完整
            MA 矩阵对 live 现货 $66,331.99、off parquet 2026-06-16 00:05Z
            close $66,276.20（D-SMA100 $72,618 周期锚 −8.66%、D-SMA20 $66,093
            重夺 +0.36% 第一根正日 MA 偏移、D-EMA20 $66,675 −0.51% 最近头顶、
            W-SMA150/200 在 130 根子集周 bar 下不可计算、W-EMA150/200 种子
            披露）；MTF 交叉标按存档扫描（快框 RSI 从超买冷到 43.2 / 48.1 /
            55.8、从 77.8 / 78.9 / 75.9、15m 在水上死叉上滑下云、30m / 1h 在
            云上、4h 水上金叉 7b 云上 Sell 8 → 9?、8h 云内 ⚡ TD9 SELL、12h
            ⚡ TD9 SELL 云下、1d 水下金叉 3b 云下 Sell 8 → 9?、3d 水上死叉
            Sell 2、15m / 30m / 1h / 4h 顶背离、15m 底背离）；claims-vs-loaded-
            data（NTT / max-pain / strike-IV / BTC-NQ framework only；JGB 月度
            不依赖；IV 横跨 934 合约的链中位数、不是可交易价差）。存档：
            <code>/opt/desk-note/snapshots/2026-06-16-0006/</code>（btc_gex.html、
            cross_asset_correlation_summary.md、macro_dashboard.html、
            mtf_div_latest.html）。{' '}
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；Next 16.2.6
            在 <code>node_modules/next/dist/bin/next:24-28</code> 处对 Node
            &lt; 20.9.0 硬退出、所以完整 <code>next build</code> 被环境阻塞
            （谱系自带）；<code>npx --no-install tsc --noEmit</code> 是 build
            proxy。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-06-16 00:06Z）、
            provenance 在上面的数据来源条带中按节披露；宏观 Tier-1 面板
            渲染 2026-06-15 22:15Z（比快照早约 1h51m）、新鲜周一印已恢复、
            Hyperliquid SM feed 冻结 ~94.5h —— 那个输入明确陈旧并已如此
            标注。本篇是 <b>v2</b> 版 —— <em>已过 STAGE B codex 敌对式审计；
            findings、裁决与 grep-closure 记录写在上面的审计痕迹块里（codex
            PASS-WITH-NOTES、一处 MINOR 宏观 z-score 补丁已应用、ask-deepseek
            funding CRITICAL 裁决为 false positive 并拒绝）。</em>水位、规模
            与条件是交易台流程的示例、不是长期推荐。过去的相关性、γ 与
            仓位模式不绑定未来盘面。衍生品有全损风险、加杠杆下损失可超过
            保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                一根 resolved 了二元的第五根上腿 —— 06-15 周收 $66,286 确认了
                200W 在 $62,230 地板上方的重夺、现货重夺它第一根日 MA（D-SMA20
                +0.36%）、这一天在现货与期货上都被买、带一道重大单买盘。但
                dealer 本子缓到 +61.3M、flip 走上、垫子收窄到 +1.69%、funding
                翻回空付、顶背离簇熬过了 RSI 冷却（15m/30m/1h/4h 顶背离、
                8h/12h ⚡ TD9 SELL）、头顶 D-SMA20 之上每一根 MA 都在、SM feed
                冻结 ~94.5h、仓位本子不可读。Flat 且耐心 —— 二元偏多 resolved、
                但上腿在守住涨幅的同时成熟进衰竭。
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
            v2 · 2026-06-16 00:06Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
