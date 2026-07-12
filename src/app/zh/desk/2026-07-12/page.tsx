import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-12 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-12',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-12' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260712() {
  await requireViewer('/zh/desk/2026-07-12');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-12 · v2</span>
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
              <span className="dn-big">$63,896</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.32%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-12 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-12 00:05Z（snapshot pin、tape row t=&ldquo;07-12 08:05&rdquo; BJ）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 审计时文件 tail = pin · tape `t` 是
                    BJ（UTC+8）；00:05Z = t &ldquo;07-12 08:05&rdquo; · 12JUL 0.3DTE
                    期权结算落在 08:00Z（比此快照早约 8h）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-12 00:01Z scan（BJ 08:01）</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每小时重写）· 存档于
                    snapshots/2026-07-12-0007/ · 较快照锚滞后约 4 分钟 ·
                    含未收盘 K 线
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-12 00:01Z 快照</td>
                  <td className="dn-flag">
                    存档于 snapshots/2026-07-12-0007/ · 872 合约 ·
                    Deribit idx $64,116 对 live $63,896（高 $220）· 12JUL
                    0.3DTE +4.32M 在今日 08:00Z 结算（比此快照早约 8h）·
                    IV 中位数 41.5% 是 pre-12JUL-settle、读自此 00:01Z 文件
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-12 00:01Z
                  </td>
                  <td className="dn-flag">存档于 snapshots/2026-07-12-0007/ · 7d 1h bar · 22 资产 · 166 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-11 22:17Z 渲染</td>
                  <td className="dn-flag">
                    存档于 snapshots/2026-07-12-0007/ · 渲染滞后约 1.8h ·
                    FRED Tier-1：10Y 4.54%（−2bp）、TIPS 2.31%、HY OAS 2.70%、
                    MOVE 69.5（+4.15）、DXY 100.97、Fed 净流动性 $5.958T（+0.118T）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-07-12 00:06Z</td>
                  <td className="dn-flag">
                    较快照锚滞后约 1 分钟 · 偏移按现货重算 · 周线用 Binance
                    W-MON 惯例（周线收盘落在周一 00:00Z）· 完整矩阵可算
                    （358 根周 bar）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W-watch JSON</td>
                  <td className="dn-v-cell">weekly_200sma.json · 本次不存在</td>
                  <td className="dn-flag">
                    200W watch 不可用 —— 文件缺；回退到矩阵 W-SMA200 $63,071
                    （不编造 percentile / last-event）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月度（71d）· 不作实时</td>
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
              <span className="dn-v">+5.18%</span>
              <span className="dn-src">live · 原始 0.004733 × 1095 = +5.18% · 已离开 +10.95% 封顶 · 24h 均值 +3.80%（07-11 是 +9.08%）· 封顶占用 10 / 1442 采样行 = 0.7%（07-11 是 32.8%）· 无一行转负 · 谷点 +0.18% ann @ 07-11 05:22Z</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+10.95% → +5.18%（−5.77pt 离顶）</span>
              <span className="dn-src">区间 +0.18% / +10.95% · 封顶只在 24h 窗开盘（07-11 00:04Z、上一根锚）钉了一下、然后整根泄掉 · 07-11 那根近顶杠杆压已经全泄</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−2.46%（−2,557 BTC）</span>
              <span className="dn-src">live · 101,347 BTC（−2.46% 是对上一根 103,904 BTC 算的）· 吐回昨天 +3,514.7 建仓的约 73% · OI 每一窗都缩（4h −1,080、1h −649）—— 去杠杆、不是新进仓位</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v">55.70 / 44.30</span>
              <span className="dn-src">live_db `mkt_long_pct` · 对 55.90（24h 前）/ 55.94（07-11 备忘）基本平 · retail 停止砍多、但没重新拥挤 —— 一本平的本子、不是底</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−1,103（净 SHORT、继续回补）</span>
              <span className="dn-src">live · long 12,659 − short 13,763 · 空泄 −442、多建 +531 跨 24h —— 回补继续（净 −2,076 → −1,103）、谱系最浅的净空</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 07-11 备忘</span>
              <span className="dn-v bull">−2,057 → −1,103（+954 净、回补 46%）</span>
              <span className="dn-src">|Δ|/prior_net = |−1,103 − (−2,057)| / 2,057 = 46.4% · 对 24h 前的盘面基 −2,076、切幅是 |+973| / 2,076 = 46.9% · 挤压泄气、SM 继续回补</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.5% / 30.32%</span>
              <span className="dn-src">GEX IV 中位数 · 872 合约（pre-12JUL-settle、读自 00:01Z 文件）· 是横跨合约的链中位数、<em>不是</em>可交易价差 · 溢价 ~+11.2pt · RV 30 根 close-to-close 回报</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+3.65%（在上方）</span>
              <span className="dn-src">flip $61,644（前 $61,485 · +$159）· 对 live 现货 $63,896.41（+3.65%；63,896.41/61,644 − 1 = 3.654%）/ GEX 文件 Deribit idx $64,116（+4.01%；64,116/61,644 − 1 = 4.010%、文件取整 +4.0%）—— 两参考都正 · aggregate GEX +101.6M 净多 γ（前 +131.8M —— 变浅）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                昨天的回补挤压印出来的第二天就泄了气 —— 燃料离场、reclaim
                守住了地板、但没有一根现货需求底来接棒
              </span>
              。funding 泄离
              <span className="dn-tag bear">+10.95% 封顶 → +5.18% ann</span>
              （24h 均值 +9.08% → +3.80%、封顶占用 32.8% → 0.7%）、OI 缩
              <span className="dn-tag bear">−2,557 BTC（−2.46%）</span>
              —— 把撑起 07-11 延伸的那根 +3,514.7 建仓吐回约 73% ——
              SM 继续回补、净
              <span className="dn-tag bull">−2,076 → −1,103（一根 47% 的切、
              多 +531 / 空 −442）</span>
              到谱系最浅的净空。现货 CVD 买得很实
              <span className="dn-tag bull">+7,682</span>、但 perp 本子
              <span className="dn-tag bear">在卖它（futCVD −327、taker −327）</span>
              进一根缩着的 OI —— 一根现货买 / perp 泄的 de-grossing、不是
              需求底。价格印
              <span className="dn-tag bear">$63,896、24h −0.32%</span>、
              reclaim 在唯一算数的口径上守住：现货坐在
              <span className="dn-tag bull">W-SMA200 地板 $63,071 上方 +1.31%</span>、
              未收盘的 07-13 周线收
              <span className="dn-tag bull">$63,831.60 在它上方 +1.21%</span>、
              re-confirm-break 触发保持解除、但要到周一 07-13 周线收盘才算落定。
              dealer 本子仍深净多 γ（<span className="dn-tag bull">+101.6M</span>、
              从 +131.8M 变浅）、flip $61,644 在现货下方 +3.65%、近端没有负放大器；
              MTF 引擎转到一档
              <span className="dn-tag">5/9 周期反转「均值回归 / 偏反弹」</span>
              读、带一根持续的 1M ⚡TD9 BUY 和一簇快周期超卖、被泄进回调的
              快周期 MACD 死叉抵消。回补反弹 scout 的价格前置条件在四条腿上
              仍真、但需求块 DEFLATED 回 de-grossing —— 所以 scout 退场、
              本子保持 FLAT：不在深净多 γ 本子上加空、不在泄气的挤压燃料上
              scout long、不在单腿利率触发上加新对冲。耐心 —— 地板由周一
              07-13 周线收盘决定、多头由现货底成形决定、而不是挤压横向泄气时。
            </p>

            <p>
              现货报 <span className="dn-tag">$63,896</span> live、
              <span className="dn-tag bear">−0.32%</span> 在 24h ——
              07-11 空头回补延伸之后第一根下印 —— 在一条
              <span className="dn-tag">$64,479 / $63,810</span> 区间里
              （高 @ 2026-07-11 14:40Z、低 @ 2026-07-12 00:00Z、快照前 5
              分钟）。<span className="dn-signal">reclaim 在收盘口径上守住、
              哪怕燃料离场</span>：日线收盘读 07-10
              <span className="dn-tag bull">$64,129.50</span>（谱系高）、07-11
              <span className="dn-tag">$63,783.00</span>（一根打断上收连的下收）、
              07-12 未收盘在 parquet 最末 bar
              <span className="dn-tag">$63,831.60</span> —— 最后两根坐在
              $63,071 地板上方 +1.13% 与 +1.21%、上一根走完的周线事件仍是
              07-06 reclaim 收
              <span className="dn-tag bull">$64,023.60</span> 在它上方。MA
              矩阵带三根正线加一道紧的头顶盖：现货
              <span className="dn-tag bull">+3.28% 在 D-SMA20 $61,868 上方</span>、
              <span className="dn-tag bull">+1.47% 在 D-EMA20 $62,968 上方</span>、
              <span className="dn-tag bull">+1.31% 在 W-SMA200 地板 $63,071 上方</span>、
              而 <span className="dn-tag bear">D-SMA50 $64,914（−1.57%）/ D-EMA50
              $65,261（−2.09%）</span> 这对是头顶第一道阻力、约 1.6–2.1% 之上。
              <span className="dn-em">
                这是地板上方的后挤压消化 —— 水位守住、重夺它的杠杆泄了、头顶
                盖没变。不是结构性转向、也不是破位；是地板上方的横向泄气、
                等周线落定。
              </span>{' '}
              回补反弹 scout 的价格前置条件（现货同时 &gt; flip AND D-EMA20
              AND D-SMA20 AND 地板）在四条腿上都真 —— 但 07-11 那根短暂翻
              构造的需求块已经泄回 de-grossing、所以 scout 继续递延。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · 挤压燃料泄完 · SM 从 07-10 空头峰起第二根连续回补 · funding 离顶 · OI 吐回建仓约 73% · 现货买 / perp 卖的 de-grossing</span>
            </h2>

            <p>
              <span className="dn-signal">
                挤压之后的第二天、仓位本子在放气
              </span>
              。SM net 是 <span className="dn-tag">−1,103</span>、对 07-11
              备忘的 −2,057 —— 也就是
              <span className="dn-em">一根 +954 的回补、prior net 的 46.4% 切</span>
              （|−1,103 − (−2,057)| / 2,057 = 46.4%）；对 24h 前的盘面基
              −2,076、这一步是 +973（|+973| / 2,076 = 46.9%）。分量：long_btc
              <span className="dn-tag bull">12,128 → 12,659（+531）</span>、
              short_btc <span className="dn-tag bull">14,205 → 13,763
              （−442）</span> —— 空泄、多建、自 07-10 跑的回补形、现在到谱系
              最浅的净空。
              <span className="dn-em">
                （多、空两腿按整 BTC 取整；live sm_net 字段是小数
                −2,076.3 → −1,103.3、所以整 BTC 的 long−short 复原 net 在
                ±1 BTC 内 —— −2,076 / −1,103 这两个 net 是承重的盘面值。）
              </span>
              SM net 在 24h 里走一条窄带：谷
              <span className="dn-tag bear">−2,320 @ 2026-07-11 07:01Z</span>、
              峰（最不空）
              <span className="dn-tag bull">−845 @ 2026-07-11 15:55Z</span>
              —— 没有离散重堆步、是慢磨式回补、不是事件。
              <span className="dn-em">
                从 07-10 空头峰起的一根两段式回补（−7,908 → −2,057 → −1,103）
                是一根走完的挤压、不是点火 —— 撑起 reclaim 的那根空头现在近乎
                平了、这既抽走了下一段上腿的燃料、也抽走了下一段下腿的压力。
              </span>
            </p>

            <p>
              杠杆侧确认这轮放气。
              <span className="dn-signal">
                funding 整根离开了 Binance 封顶
              </span>
              ：live <span className="dn-tag">+5.18% ann</span>（原始
              0.004733 × 1095）、24h 均值
              <span className="dn-tag">+3.80%</span>（对 07-11 的 +9.08% ——
              一根 −5.28pt 的冷却）、区间
              <span className="dn-tag">+0.18% / +10.95%</span>、封顶只在 24h
              窗开盘（07-11 00:04Z、上一根锚）碰了一下、之后整根泄。封顶占用
              <span className="dn-tag bull">10 / 1442 采样行（0.7%）</span>
              （对 07-11 的 32.8% —— 封顶空了）、无一行转负（仍无空付多印）、
              谷点 <span className="dn-tag">+0.18% ann @ 2026-07-11 05:22Z</span>。
              OI Δ <span className="dn-tag bear">−2,557 BTC（−2.46%）</span>
              跨 24h（−2.46% 是对上一根 103,904 BTC 算的；live OI 101,347）——
              谱系建仓日以来首次 OI 缩、吐回 07-11 备忘记的那根 +3,514.7 BTC
              约 73%；OI 每一窗都落（4h −1,080、1h −649）、所以回补的空和
              获利的多都在离开本子、不是在重堆。retail
              <span className="dn-tag">mkt_long_pct 55.70%</span> 对 55.90%
              （24h 前）与 55.94%（07-11 备忘）基本平 —— retail 停止砍多、
              但没重新拥挤、是平本子、不是新底。perp 对现货
              <span className="dn-tag bear">−$47.18 折价</span>在快照
              （1h 均 −$39.19；24h 均 −$46.18、区间 −$86.56 / +$53.08 ——
              盘中 basis 短暂翻升水、但进快照坐在折价）。
              <span className="dn-em">
                funding 离顶 + OI 缩 + SM 回补到近乎平 + retail 平：每一根
                杠杆读都指同一个方向 —— 07-11 那根近顶压已全泄、需求侧没有
                东西补上。
              </span>
            </p>

            <p>
              窗口流向是<em>现货买进一本 perp 卖、缩着的本子</em> —— 经典的
              de-grossing 形。24h：价格
              <span className="dn-tag bear">−0.32%</span>、OI
              <span className="dn-tag bear">−2,557 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +7,682</span>
              <span className="dn-em">（窗内无 cb_cvd reset —— 一根真现货买
              盘累积）</span>、期货 CVD
              <span className="dn-tag bear">Δ −327</span>、大单
              <span className="dn-tag bear">−12 BTC / 275 笔</span>、
              taker-net <span className="dn-tag bear">−327</span> ——
              <span className="dn-em">
                现货稳步买、perp 在一根 −2.46% OI 泄里净卖；−0.32% 下印是
                杠杆本子离场、现货吸掉了流、不是新 perp 多在堆
              </span>
              。4h（进快照）：价格
              <span className="dn-tag bear">−0.65%</span>、OI
              <span className="dn-tag bear">−1,080 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +597</span>、期货 CVD
              <span className="dn-tag bear">Δ −570</span>、大单
              <span className="dn-tag bear">−239 BTC / 64 笔</span>、
              taker-net <span className="dn-tag bear">−570</span> ——
              <em>同一形状更锐：现货买、perp 卖得更狠、大单净卖、最近几个
              小时把 OI 拉下</em>。1h：价格
              <span className="dn-tag bear">−0.52%</span>、OI
              <span className="dn-tag bear">−649 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +180</span>、期货 CVD
              <span className="dn-tag bear">Δ −396</span>、大单
              <span className="dn-tag bear">−101 BTC / 28 笔</span>、
              taker-net <span className="dn-tag bear">−396</span> ——
              <em>现货仍进快照买、perp 仍卖、OI 仍缩</em>。
              <span className="dn-em">
                4h 与 1h 流向窗用与 24h 窗相同的含端点采样行惯例（起始分钟 =
                上一根采样锚行、含端点）、不是精确的 240/60 分钟区间；一根
                精确分钟 240/60 窗会把每个 CVD/OI 数字移动几个 BTC、但不改
                现货买 / perp 卖的形状。
              </span>
              现货 CVD 累积是唯一那根构造性的线 —— 但在它停止泄进一根缩着
              的 OI、开始把 OI 一起拉上之前、它是现货在吸一根 perp 泄、不是
              需求底在建。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 引擎转到 5/9 周期反转（偏反弹）· 3d 水下金叉刚印 · 快周期在回调里转 MACD 死叉 · 1M ⚡TD9 BUY 持续</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 引擎读一根 5/9 周期反转 regime（JT&lt;0 · 均值回归 / 偏反弹）
              </span>
              —— 比 07-11 的「高周期偏空 / 短周期反弹」趋势延续读差一档、
              背离计数偏底重（top-div 3：30m/1h/4h；bottom-div 4：15m/30m/1d/3d）、
              带一根持续的
              <span className="dn-tag bull">1M ⚡TD9 BUY $63,839</span> 和一根
              <span className="dn-tag bull">15m TD8 Buy、离 9 一收</span>。
              但交叉按速度硬分：快周期在回调里转 MACD 死叉 ——
              <span className="dn-tag bear">15m 水上死叉 7b</span>、
              <span className="dn-tag bear">30m 水上死叉 4b</span>、
              <span className="dn-tag bear">4h 水上死叉（刚印）</span>、和那根
              <span className="dn-tag bear">1w 水下死叉 2b</span> —— 而中周期
              在抬：
              <span className="dn-tag bull">8h 水上金叉 5b</span>、
              <span className="dn-tag bull">1d 水下金叉 11b</span>、和一根新鲜
              <span className="dn-tag bull">3d 水下金叉（刚印）</span>。RSI 在
              快周期超卖（15m 28、30m 33、1h 40）、中段在上（4h 54、8h 57、
              12h 57、1d 52）、在 3d/1w/1M 冷到 43/39/44。
              <span className="dn-em">
                直读：回调把快周期转空（15m/30m/4h 死叉、快周期 RSI 超卖）、
                中周期确认反弹（8h/1d/3d 金叉）、月线守住它的 TD9 BUY。引擎的
                周期反转标签靠底背离簇 + 1M TD9 BUY + 超卖快周期 —— 一根偏
                反弹读、现货底会确认它、地板丢会杀它。1w 水下死叉是那根谱系
                还没清掉的慢周期常驻空。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,833</td><td className="num bull">28</td><td className="bear">死叉（水上）7b</td><td className="bear">云下 ↑64.1k 3b</td><td>Buy 8→9?</td><td>BULL cont（底背离）</td></tr>
                <tr><td>30m</td><td className="num">63,840</td><td className="num bull">33</td><td className="bear">死叉（水上）4b</td><td className="bear">云下 ↑64.1k 2b</td><td>Buy 5</td><td>BULL（底背离）</td></tr>
                <tr><td>1h</td><td className="num">63,833</td><td className="num">40</td><td className="bear">死叉（水上）34b</td><td className="neut">云内 63.2–63.9k 1b</td><td>Buy 3</td><td>BEAR cont（顶背离）</td></tr>
                <tr><td>4h</td><td className="num">63,833</td><td className="num">54</td><td className="bear">死叉（水上）刚印</td><td className="bull">云上 ↓63.0k 52b</td><td>Buy 2</td><td>BEAR cont（顶背离）</td></tr>
                <tr><td>8h</td><td className="num">63,833</td><td className="num">57</td><td className="bull">金叉（水上）5b</td><td className="bull">云上 ↓62.4k 9b</td><td>Buy 2</td><td>BULL cont</td></tr>
                <tr><td>12h</td><td className="num">63,840</td><td className="num">57</td><td className="neut">MACDh 水上 +（无新交叉）</td><td className="bull">云上 ↓62.6k 2b</td><td>Buy 1</td><td>BEAR cont（顶背离）</td></tr>
                <tr><td>1d</td><td className="num">63,840</td><td className="num">52</td><td className="bull">金叉（水下）11b</td><td className="bear">云下 ↑66.3k 41b</td><td>Sell 3</td><td>BEAR cont</td></tr>
                <tr><td>3d</td><td className="num">63,840</td><td className="num">43</td><td className="bull">金叉（水下）刚印</td><td className="bear">云下 ↑71.7k 13b</td><td>Sell 3</td><td>BULL（底背离）</td></tr>
                <tr><td>1w</td><td className="num">63,839</td><td className="num">39</td><td className="bear">死叉（水下）2b</td><td className="bear">云下 ↑98.7k 23b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">63,839</td><td className="num">44</td><td className="neut">MACDh 水上 − · ⚡TD9 BUY</td><td className="bull">云上 ↓47.0k 29b</td><td>⚡TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（BJ 08:01；滚动
                    latest 文件、逐字存档于 snapshots/2026-07-12-0007/）。
                    头部 regime：<em>5/9 周期反转（JT&lt;0）—— 均值回归 / 偏
                    反弹、趋势跟随受告诫</em>；告警：<em>1M ⚡TD9 BUY
                    $63,839</em>、<em>3d 水下金叉（刚印）</em>、<em>4h 水上
                    死叉（刚印）</em>、<em>15m TD8 Buy（离 9 一收）</em>。扫描
                    现货 $63,840、24h −0.46%（00:01Z MTF 扫描；live-tape 头部
                    00:05Z 在同一 24h 窗读 −0.32% —— 4 分钟时间差和不同的 24h
                    参考解释这个差）、24h H/L $64,497 / $63,669、qVol $3.45B。
                    收盘为未收盘 K 线；每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认地板上方的消化、加一道紧的头顶盖。现货 $63,896 坐在
              <span className="dn-tag bull">D-SMA20 $61,868 上方 +3.28%</span>、
              <span className="dn-tag bull">D-EMA20 $62,968 上方 +1.47%</span>、
              <span className="dn-tag bull">W-SMA200 地板 $63,071 上方 +1.31%</span>
              —— 三根正线、都比 07-11 备忘（D-SMA20 +3.63%、D-EMA20 +1.96%、
              地板 +1.69%）随价格回落压缩了一点。头顶第一道阻力是
              <span className="dn-tag bear">D-SMA50 $64,914（−1.57%）</span> /
              <span className="dn-tag bear">D-EMA50 $65,261（−2.09%）</span> 这
              对、基本没变、约 1.6–2.1% 之上 —— 谱系还没清掉的那道盖。其上、
              按顺序：
              <span className="dn-tag bear">D-EMA100 $68,763（−7.08%）</span>、
              <span className="dn-tag bear">W-SMA200 在下方、但 W-EMA200 $68,945
              （−7.32%）</span>、
              <span className="dn-tag bear">D-SMA150 $70,041（−8.77%）</span>、
              <span className="dn-tag bear">W-SMA20 $70,729（−9.66%）</span>、
              <span className="dn-tag bear">D-SMA100 $70,732（−9.66%）</span>、
              <span className="dn-tag bear">W-EMA20 $71,482（−10.61%）</span>、
              <span className="dn-tag bear">D-EMA150 $71,912（−11.15%）</span>、
              <span className="dn-tag bear">D-SMA200 $73,875（−13.51%）</span>、
              <span className="dn-tag bear">W-EMA150 $74,723（−14.49%）</span>、
              <span className="dn-tag bear">D-EMA200 $74,826（−14.61%）</span>、
              <span className="dn-tag bear">W-SMA150 $76,163（−16.11%）</span>。
              更高更远、已弃用：W-EMA100 $80,211（−20.34%）、W-EMA50 $80,414
              （−20.54%）、W-SMA50 $87,646（−27.10%）、W-SMA100 $88,606
              （−27.89%）。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-07-12 00:06Z（close
                $63,831.60）；偏移按 live 现货 $63,896.41 重算。显示的 MA 水位
                按 $ 取整、偏移用精确序列值算。周线 MA 用 Binance W-MON 惯例
                （周线收盘落在周一 00:00Z）、与谱系的地板和 07-06 / 06-29 周线
                收盘参考一致；完整矩阵可算（盘上 358 根周 bar）。200W-watch
                JSON 本次缺、所以地板取矩阵 W-SMA200 $63,071（含未收盘、在现货
                下方 +1.31%）—— 不编造 percentile 或 last-event。日线收盘：
                07-06 $64,023.60、07-07 $63,335.40、07-08 $62,255.30、07-09
                $63,197.00、07-10 $64,129.50、07-11 $63,783.00、07-12（未收盘）
                $63,831.60 —— 最后四根（07-09 到 07-12）在 $63,071 地板上方、
                07-08 $62,255.30 是唯一一根收在它下方。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子仍净多 γ +101.6M（从 +131.8M 变浅）· flip $61,644（现货上方 +3.65%）· 整条 strip 无近端负放大器 · $65k–$66k 正墙带盖顶</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子仍深净多 γ、但随近端到期变薄而 de-gamma 了一档
              </span>
              。aggregate GEX 是
              <span className="dn-tag bull">+101.6M / 1%</span>（07-11 是
              +131.8M —— 一根 −30.2M 的更浅台阶、仍牢牢阻尼）；本子仍净多 γ。
              0-γ flip 移动
              <span className="dn-tag">$61,485 → $61,644（+$159）</span>、
              现货 $63,896 坐在
              <span className="dn-tag bull">flip 上方 +3.65%</span>、按现货口径
              （63,896.41 / 61,644 − 1 = +3.654%）；GEX 文件自己的「dist to
              flip」按它的 Deribit idx $64,116（比 live 现货高 $220）读 +4.0%、
              也就是 <span className="dn-tag bull">+4.01%</span>（64,116 / 61,644
              − 1 = +4.010%）—— 两参考都正、现货在 flip 上方、两边都是。墙图
              保持一道正带盖头顶、加一根孤零的负在下面接 fade：
              <span className="dn-tag bull">$66k +21.17M</span>（最重、盖从
              07-11 的 $65k 上移）、
              <span className="dn-tag bull">$65k +21.11M</span>、
              <span className="dn-tag bull">$70k +18.11M</span>、
              <span className="dn-tag bull">$64k +17.35M</span>（撑就在头顶）、
              <span className="dn-tag bull">$68k +16.75M</span>、
              <span className="dn-tag bear">$60k −12.96M</span>（前十里唯一负、
              接一根朝地板的 fade）、
              <span className="dn-tag bull">$80k +8.52M</span>、
              <span className="dn-tag bull">$67k +8.00M</span>、
              <span className="dn-tag bull">$72k +6.85M</span>、
              <span className="dn-tag bear">$55k −5.62M</span>。
              <span className="dn-em">
                $64k–$68k 正带（$64k +17.35M、$65k +21.11M、$66k +21.17M、
                $67k +8.00M、$68k +16.75M）合计约 +84M 的头顶撑转盖；唯一有
                意义的负 γ 是现货下方 $60k −12.96M / $55k −5.62M、所以本子
                结构性买进朝地板的 fade、卖出朝 $66k 的挤压。回调没有一点
                威胁到阻尼 regime
              </span>
              。expiry strip 整条都正、无近端放大器：12JUL 0.3DTE +4.32M
              （今日 08:00Z 结算、比此快照早约 8h）、13JUL 1.3 +1.57M、14JUL
              2.3 +0.90M、15JUL 3.3 +0.18M、然后前向块
              <span className="dn-tag bull">17JUL 5.3 +38.79M</span>、
              <span className="dn-tag bull">24JUL 12.3 +11.25M</span>、
              <span className="dn-tag bull">31JUL 19.3 +43.02M</span>（全部正）、
              28AUG 47.3 +8.18M、25SEP 75.3 +0.34M、25DEC 166.3 +2.46M、
              26MAR27 257.3 +1.00M、25JUN27 348.3 +0.55M。整条 strip 上没有
              一根 expiry 带负放大器权重 —— 阻尼背景近端没有日历催化能翻它。
            </p>

            <p>
              IV 中位数横跨 872 合约是
              <span className="dn-tag">41.5%</span>、对 30D close-to-close RV
              <span className="dn-tag">30.32%</span> —— 链级溢价
              <span className="dn-tag">~+11.2pt</span>。
              <span className="dn-em">
                披露：872 合约与 41.5% IV 中位数都是 pre-12JUL-settle 值、读自
                00:01Z GEX 文件；12JUL 0.3DTE +4.32M 块在今日 08:00Z（比此快照
                早约 8h）已清、结算后的合约计与 IV 中位数本篇没重算 —— strip
                无论如何不带负放大器、所以结算对 γ regime 是非事件。
              </span>{' '}
              是 N 合约的链中位数、<span className="dn-em">不是</span>可交易
              价差；expiry- / strike-level vega、skew、期限结构仍未载入、
              vol 读法保持 framework only。Put/Call OI 比率 0.55（232,538 call
              OI / 127,068 put OI）。RV 方法：30D close-to-close、logret.std ×
              √365 × 100、用最末 30 根日 log return、锚自 parquet 最末 bar
              2026-07-12 00:06Z（29 returns 另一口径读 30.46%；页面值 30.32%
              用 30 returns）。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 利率/美元裂开的 risk-off（10Y 4.54%、TIPS 2.31% EXTREME、DXY 100.97 EXTREME）对信用/流动性 risk-on（HY OAS 2.70%、Fed 净流动性 $5.958T EXTREME）· reclaim-long 利率筛在 4.54% 真</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面守住它裂开的形状 —— 利率与美元 risk-off、信用与 Fed
                流动性 risk-on
              </span>
              。面板渲染 2026-07-11 22:17Z、比快照早约 1.8h。US 10Y nominal
              <span className="dn-tag bull">4.54%（−2.0bp）</span>、regime z
              <span className="dn-tag bear">+1.82</span>、偶发 z
              <span className="dn-tag">+1.21</span> —— RISK-OFF 标、但
              <span className="dn-em">在 4.55% reclaim-long 筛线下方</span>
              （4.54% 时真）、刚在 4.53% put-spread re-grow 腿上方（差 1bp
              触发）。10Y TIPS real
              <span className="dn-tag bear">2.31%（0.0bp）</span>、regime z
              <span className="dn-tag bear">+2.77</span>、偶发 z
              <span className="dn-tag">+1.62</span> —— EXTREME RISK-OFF、当日
              平。5Y5Y BE 通胀
              <span className="dn-tag">2.20%（+2.0bp）</span>。HY OAS
              <span className="dn-tag">2.70%（0.0bp）</span>、regime z
              <span className="dn-tag bull">−1.21</span>、偶发 z
              <span className="dn-tag bull">−0.59</span> —— RISK-ON、在 2.78%
              re-grow 闸下方 8bp、当日平。MOVE 债波
              <span className="dn-tag">69.5（+4.15）</span> —— 仍「松」、当日
              硬一点。DXY
              <span className="dn-tag bear">100.97（+0.03）</span>、regime z
              <span className="dn-tag bear">+2.11</span> —— EXTREME RISK-OFF、
              平。Fed 净流动性
              <span className="dn-tag bull">$5.958T（+0.118T）</span>、偶发 z
              <span className="dn-tag bull">+2.47</span> —— EXTREME RISK-ON、
              那根 +0.118T 周度跳仍在。US-JP 10Y 利差
              <span className="dn-tag">1.89%（−2.0bp）</span>；USD/JPY
              <span className="dn-tag bull">161.67（−0.69、日元更硬）</span>。
              NFCI −0.515（陈旧 8d）。
              <span className="dn-em">
                净：reclaim-long 利率筛（10Y &lt; 4.55%）在 4.54% 仍真、但
                只差一点；put-spread re-grow 闸的 10Y 腿（&gt; 4.53%）差一个
                基点保持 FIRED —— 一根单腿盯位事件、不是自动滚、HY OAS 腿
                （&gt; 2.78%）在 2.70% 仍差 8bp 触发。利率和美元在极端上保持
                硬 risk-off、信用和 Fed 流动性保持决定性 risk-on、面板里没有
                一根动到能改 BTC 读。JGB 月度 2.65% 带一根 EXTREME RISK-OFF
                月度标（陈旧 71d）—— 不依赖。
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
                <tr><td>US 10Y nominal</td><td className="num">4.54%</td><td className="num bull">−2.0bp</td><td className="num bear">+1.82</td><td className="num">+1.21</td><td className="bear">紧 · RISK-OFF（在 4.55% 筛下方）</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.31%</td><td className="num">0.0bp</td><td className="num bear">+2.77</td><td className="num">+1.62</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.20%</td><td className="num bear">+2.0bp</td><td className="num">−0.37</td><td className="num">−0.61</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.70%</td><td className="num">0.0bp</td><td className="num bull">−1.21</td><td className="num bull">−0.59</td><td className="bull">松 · RISK-ON（距闸 8bp）</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.515</td><td className="num">−0.01</td><td className="num">−0.06</td><td className="num bull">−2.13</td><td className="stale">陈旧 8d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">69.5</td><td className="num bear">+4.15</td><td className="num bull">−0.50</td><td className="num">−0.44</td><td className="bull">松 · 当日硬一点</td></tr>
                <tr><td>DXY</td><td className="num">100.97</td><td className="num bear">+0.03</td><td className="num bear">+2.11</td><td className="num">+0.70</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.958T</td><td className="num bull">+0.118T</td><td className="num bull">+2.42</td><td className="num bull">+2.47</td><td className="bull">EXTREME RISK-ON</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.67</td><td className="num bull">−0.69</td><td className="num bear">+1.40</td><td className="num">+0.55</td><td className="bull">日元更硬</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.89%</td><td className="num">−2.0bp</td><td className="num bull">−0.79</td><td className="num">+1.21</td><td className="bull">紧</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7667</td><td className="num bull">−0.03</td><td className="num bull">−1.48</td><td className="num bull">−0.82</td><td className="bull">无标 · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="num">+1.43</td><td className="stale">月度（71d）· 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、166 rows、汇总 00:01Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.314</span>
              （较 07-11 的 0.315 基本平、守在 NORMAL 区段）。BTC 最紧的对齐
              是宽风险簇：
              <span className="dn-tag">SP500 +0.441</span>、
              <span className="dn-tag">NQ +0.439</span>、
              <span className="dn-tag">SILVER +0.427</span>、
              <span className="dn-tag">GOLD +0.419</span>、
              <span className="dn-tag">COPPER +0.418</span>、
              <span className="dn-tag">TSLA +0.402</span>、
              <span className="dn-tag">PLAT +0.385</span>、然后能源反向
              <span className="dn-tag">CL −0.356</span> /
              <span className="dn-tag">BRENT −0.343</span>、加
              <span className="dn-tag">NVDA +0.294</span>。7d 相对表现：
              <span className="dn-tag bull">BTC +1.42%</span> 仍领
              <span className="dn-tag bull">NQ +0.63%</span> 约
              <span className="dn-tag">+0.79pt</span>（领先从 07-11 的 +1.40pt
              收窄、因 06-30 低点滚出窗）、
              <span className="dn-tag bull">SP500 +1.02%</span>、
              <span className="dn-tag bear">JP225 −0.68%</span>、
              <span className="dn-tag bull">META +13.76%</span>（7d 簇领头）、
              <span className="dn-tag bull">NVDA +5.95%</span>、
              <span className="dn-tag bull">TSLA +1.93%</span>、
              <span className="dn-tag bear">MSFT −1.72%</span>。金属软：
              <span className="dn-tag bear">GOLD −1.58%</span>、
              <span className="dn-tag bear">SILVER −4.80%</span>、
              <span className="dn-tag bear">PLAT −1.11%</span>。能源猛拉：
              <span className="dn-tag bull">CL +6.88%</span>、
              <span className="dn-tag bull">BRENT +8.13%</span>、
              <span className="dn-tag bear">NGAS −9.97%</span>。
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 领先收窄到 +0.79pt（BTC +1.42% vs NQ
                +0.63%）、从 07-11 的 +1.40pt —— 缺口在收因为 BTC 的破位后
                超额跑输在老化、不是因为 BTC 翻倒；相关带守 NORMAL、所以 BTC
                既没脱钩、也没系统性钉在风险簇上。
              </span>
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 本子 FLAT · 回补反弹 scout 价格前置条件真、但需求块 DEFLATED 回 de-grossing · 不在正 γ 上加空 · 不在单腿利率触发上加新对冲</span>
            </h2>

            <p>
              <span className="dn-signal">
                07-11 备忘的判断 —— 闸亮了、但确认需求 —— 印出正确、需求没
                确认
              </span>
              。07-11 需求块短暂翻构造（SM 回补、OI 建、perp 买、利率筛亮）、
              但 scout 退场、因为记录里的买方是一根回补的 perp 空进近顶 funding、
              不是现货需求底。24 小时后那个读被印证：燃料泄了（funding 离顶、
              OI −2,557、SM 回补到近乎平）、没有现货底补上。scout 的价格前置
              条件在四条腿上仍真 —— 现货 $63,896 在 flip $61,644 上、在 D-EMA20
              $62,968 上、在 D-SMA20 $61,868 上、在地板 $63,071 上 —— 但需求块
              已 DEFLATED 回 de-grossing、所以 scout 继续递延。今天交易本子是：
              无空、无 scout 入场、无新对冲 —— 等一根现货需求底（现货 CVD 把 OI
              拉上、不是泄进缩着的本子）加一根 D-SMA50 $64,914 / D-EMA50 $65,261
              盖的重夺再 scout long、并让周一 07-13 周线收盘落定地板。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 递延 · 价格前置条件真（4/4 腿）· 需求块 DEFLATED 回 de-grossing</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 价格腿全真、但挤压燃料泄了、没转成现货底；退场
              </div>
              <div className="dn-thesis">
                scout 的价格前置条件在四条腿上都满足（现货同时在 flip、
                D-EMA20、D-SMA20 和 W-SMA200 地板上方）、而且整条谱系都满足 ——
                但满足的价格前置条件从来不是触发。触发是一根确认的现货需求底：
                07-11 备忘把记录里的买方点名为一根回补的 perp 空进近顶 funding、
                今天那根回补走完了（SM net −2,076 → −1,103、一根 47% 的切到
                近乎平）、同时 funding 落离顶（+10.95% → +5.18%、均值 +9.08%
                → +3.80%）、OI 缩 −2,557、吐回 07-11 建仓约 73%。现货 CVD 确实
                在买（+7,682 跨 24h、无 reset）—— 唯一那根构造性的线 —— 但它
                泄进一根 −2.46% OI 泄、perp 在净卖（futCVD −327、taker −327）、
                这是现货在吸一根 perp de-gross、不是底在建。在这里进多买的是
                一根挤压的耗竭、不是需求的开始。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">价格前置条件（真、4/4）</span><span className="dn-lvl-v bull">现货 $63,896 &gt; flip $61,644 AND &gt; D-EMA20 $62,968 AND &gt; D-SMA20 $61,868 AND &gt; W-SMA200 地板 $63,071</span></div>
                <div><span className="dn-lvl-k">需求触发（真闸 —— 未满足）</span><span className="dn-lvl-v bear">现货 CVD 把 OI 拉上（不是泄进缩着的本子）AND 一根 1h/4h 收重夺 D-SMA50 $64,914 / D-EMA50 $65,261 且 OI 在建 —— 一根现货底、不是回补燃料</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">需求触发印出时、scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1h 收 &lt; $63,071（W-SMA200 地板 —— 一根收在下方会重新武装 re-confirm-break 触发、结束消化读法）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$68,763（D-EMA100）是承重的首目标 —— D-SMA50 $64,914 / D-EMA50 $65,261 盖是入场确认（需求触发入场坐在重夺处）、不是止盈</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · 首目标 $68,763</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>一根需求触发入场在 D-EMA50 重夺 ~$65,261、止损在
                地板 $63,071 = ~$2,190 风险；首目标 $64,914 在入场下方、所以
                承重的首目标是 $68,763（D-EMA100）= ~$3,502 回报 ≈ 1.6:1 ——
                可接受、但条件是底在盖上方成形、不是价格前置条件。<b>硬规则：
                </b>满足的价格前置条件本身不是入场信号 —— 它整条谱系都真、
                而那时买方是回补燃料。入场是现货底（CVD 把 OI 拉上 + D-EMA50
                盖被重夺）、按这个顺序。不在泄气的挤压燃料上 scout long。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 阻尼 regime 完好 · 整条 strip 无近端负放大器</span>
              <div className="dn-trade-name">
                不在 +101.6M 净多 γ 本子上于地板加空 —— dealer strip 近端没有催化能翻阻尼
              </div>
              <div className="dn-thesis">
                aggregate GEX +101.6M（从 +131.8M 变浅、但牢牢净多 γ）、flip
                $61,644、现货在上方 +3.65%、$64k–$68k 正带盖顶、孤零的 $60k
                −12.96M 负接一根朝地板的 fade。整条 expiry strip 都正 ——
                12JUL/13JUL/17JUL/31JUL 处处无负放大器 —— 所以在这里压一根空
                是在打一本没有日历催化能翻它的阻尼本子。12JUL 0.3DTE +4.32M
                在今日 08:00Z（比此快照早约 8h）结算、对 γ regime 是非事件。
                重开空需要 strip 上一根全新的负 γ 放大器 AND 一根 1d 收在
                $63,071 地板下方 —— 两者都不在。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓位 · 不在正 γ 上加空</span></div>
                <div><span className="dn-lvl-k">重开空触发</span><span className="dn-lvl-v bear">strip 上一根新的近端负 γ expiry AND 一根 1d 收 &lt; $63,071（地板丢、在周线上确认 re-confirm-break）</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">不在一本 +101.6M 净多 γ、strip 全正的本子上于地板加空</span></div>
              </div>
              <div className="dn-gating">
                <b>框架：</b>阻尼 regime 谱系每一天都守住、回调没威胁到它 ——
                GEX 保持三位数正、flip 保持在现货远下方、strip 近端没印负放大器。
                空是一根催化交易、而这里没有催化。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 · 单腿利率触发（10Y &gt; 4.53% 差 1bp）· HY OAS 腿差 8bp · 不滚</span>
              <div className="dn-trade-name">
                下行 put-spread —— 不滚：put-spread re-grow 闸是一根单腿 1bp 触发、不是 OR 闸的两腿确认
              </div>
              <div className="dn-thesis">
                put-spread re-grow 闸是两腿的 OR（HY OAS &gt; 2.78% OR 10Y &gt;
                4.53%）。10Y 腿在 4.54% FIRED、但只差一个基点 —— 一根盯位事件、
                不是确信触发 —— 而 HY OAS 腿在 2.70%（RISK-ON）差 8bp。
                reclaim-long 利率筛（10Y &lt; 4.55%）在 4.54% 仍真、所以同一根
                4.54% 印同时在 reclaim 筛下方、又在 re-grow 腿上方 —— 一根
                刀刃、哪个方向都主张不动。不在一根单腿 1bp 触发上、于一本阻尼
                dealer 本子（近端无负放大器）里加新对冲。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓位 · 不在单腿 1bp 触发上滚</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（两腿确信）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收（当前 2.70%、距闸 8bp）确认 10Y &gt; 4.53% 腿（当前 4.54%、差 1bp 触发）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— 在 4.54% 仍真（差 1bp）；等一根 BTC 内部现货需求转向</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位下漂调的酌情盯位、不是回测断点。
                一根对冲腿会是滚到 17JUL26 5.3DTE 或 24JUL26 12.3DTE —— 但两根
                都带正 γ（+38.79M / +11.25M）、所以一根新尾拿不到放大器顺风。
                单腿 10Y 在 4.54% 的触发离 reclaim-long 筛只 1bp；在 HY OAS 腿
                确认前、把它当噪声。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期 · 从 07-10 峰起的两段式回补走完 · 无新重堆签名 · 慢磨、不是事件</span>
              <div className="dn-trade-name">
                挤压周期 —— 回补没有离散重堆就走完了；SM 从 07-10 空头峰起两段磨到 −7,908 到 −1,103、现在近乎平
              </div>
              <div className="dn-thesis">
                撑起 reclaim 的挤压以慢磨方式走完了、不是一根节奏。SM net 回补
                −7,908（07-09）→ −2,057（07-11）→ −1,103（今天）、一根从 07-10
                空头峰起两段式的行进、到谱系最浅的净空、但最近 24h 没印离散
                重堆步 —— SM 走一条窄 −2,320 / −845 带、无单分钟 Δnet 事件。
                重堆签名的缺席本身就是读：这是一根走完的回补的耗竭、不是一段
                新腿的点火。一根新鲜的 re-stack-hostile-2 印（Δshort &gt; 0 +
                Δlong &lt; 0 同一分钟、Δnet ≤ −3k）会重新武装空侧盯位、但一根
                走完的回补之后那个基率低。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">从 07-10 峰起的两段式回补走完 · SM −7,908 → −2,057 → −1,103 · 最近 24h 无离散重堆</span></div>
                <div><span className="dn-lvl-k">SM 24h 带</span><span className="dn-lvl-v">谷 −2,320 @ 2026-07-11 07:01Z · 峰（最不空）−845 @ 2026-07-11 15:55Z · 慢磨、max |Δnet| 亚阈值</span></div>
                <div><span className="dn-lvl-k">前向 gating</span><span className="dn-lvl-v">一根新鲜 Δnet ≤ −3k 重堆重新武装空盯位；一根现货底（CVD 把 OI 拉上）是肯定的多读 —— 本次快照两者都不在</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根走完的回补在两个方向都抽走燃料 —— 撑起
                reclaim 的空头近乎平了、所以既没有留给多头的空头挤压顺风、
                也没有留给空头的新空建仓。把下一根离散 SM 步、无论哪个方向、
                当信号本身来读；这里没有日历先验。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 挤压燃料泄完 · reclaim 守住地板 · 需求块泄气 · scout 递延于需求触发 · 地板由周一 07-13 周线收盘决定</span>
            </h2>

            <p>
              07-11 那张决策条件里：需求确认闸<em>没触发</em>（需求块泄回
              de-grossing 而不是确认 —— 燃料泄了）；回补反弹 scout <em>没触发
              </em>（价格前置条件仍真、但需求触发未满足）；地板守住（现货
              +1.31% 在 $63,071 上方、未收盘 07-13 收 $63,831.60 +1.21% 在
              上方、re-confirm-break 触发解除、但要到周一 07-13 才落定）；阻尼
              regime 守住（GEX +101.6M、近端无负放大器）；利率筛保持真（10Y
              4.54% &lt; 4.55%）。<em>07-11 唯一那根构造性读 —— 谱系最窄的需求
              闸 —— 落到了空侧：燃料是回补、它泄了、没有现货底补上。</em>
              今天的条件围绕一根守住的地板、一根泄气的需求块、一根走完的回补、
              和一根 gate 在需求触发上的 scout 重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>周线收盘落定地板（周一 07-13）</td><td className="bull">未收盘 07-13 收 $63,831.60 在 $63,071 W-SMA200 地板上方 +1.21%；本周在周一 00:00Z 落定</td><td>一根周线收在地板上方确认 reclaim 守住；一根收在下方重新武装 re-confirm-break —— 这是决定性事件、不是盘中插针</td></tr>
                <tr><td>回补反弹 scout（多）—— 需求触发</td><td className="bull">现货 CVD 把 OI 拉上 AND 一根 1h/4h 重夺 D-SMA50 $64,914 / D-EMA50 $65,261 且 OI 在建</td><td>scout long 0.2R、目标 $68,763（D-EMA100）；价格前置条件已经真、而且不是触发</td></tr>
                <tr><td>地板丢（re-confirm-break）</td><td className="bear">1d 收 &lt; $63,071（W-SMA200）在周一 07-13 周线收盘上确认</td><td>reclaim 被交回；地板上方消化读法结束、空侧盯位重新武装 —— 但只在 strip 上出现一根新鲜近端负 γ 放大器时</td></tr>
                <tr><td>阻尼 regime 完好</td><td className="bull">GEX 保持净多 γ AND strip 近端不印负放大器（12JUL/13JUL/17JUL/31JUL 全正）</td><td>不在正 γ 上于地板加空；朝地板的 fade 是 dealer 接（$60k −12.96M）、朝 $66k 的挤压是 dealer 卖</td></tr>
                <tr><td>新鲜重堆（空重开）</td><td className="bear">Δnet ≤ −3k re-stack-hostile-2（Δshort &gt; 0 + Δlong &lt; 0 同一分钟）把 SM 推回 −4k 下方</td><td>重新武装空盯位 —— 一根走完的两段式回补之后基率低；当独立信号来读、无日历先验</td></tr>
                <tr><td>宏观尾 re-grow（单腿触发）</td><td className="bear">10Y &gt; 4.53% 在 4.54% FIRED、差 1bp；HY OAS &gt; 2.78% 在 2.70% 仍差 8bp</td><td>不在单腿 1bp 触发上滚；等 HY OAS 腿确认再做任何对冲滚</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收 —— 在 4.54% 真（差 1bp）；等一根 BTC 内部现货需求转向</td><td>独立筛真；需要需求触发才能转成 scout long</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                现货 CVD 累积（+7,682 跨 24h、今天泄进缩着的 OI）是否停止泄
                并开始把 OI 拉上 —— 一根真现货底重夺 D-SMA50 $64,914 / D-EMA50
                $65,261 盖 —— 还是泄气的挤压把 reclaim 泄回 $63,071 地板下方、
                在周一 07-13 周线收盘上。重夺地板的燃料泄了；问题现在是现货
                需求接不接棒、还是 reclaim 只是一根回补事件、回补一走完就褪色
              </span>
              。在那之前本篇按写好的跑：本子 FLAT —— 不在深净多 γ 本子上加空、
              不在泄气的挤压燃料上 scout long、不在单腿 1bp 利率触发上加新对冲。
              reclaim 在收盘上守住地板、需求块泄气、回补走完、dealer 本子保持
              阻尼。下一个 24h 的对读是<em>耐心 —— 地板由周一 07-13 周线收盘
              决定、多头由现货需求接替回补燃料时决定、而不是价格前置条件保持
              亮着时</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-07-12-desk-note.md）
            </span>
            <b>状态：</b>STAGE B codex 敌对审计返回 <b>PASS-WITH-NOTES</b> ——
            无 CRITICAL 发布阻断、1 根 MAJOR 谱系缺陷 + 4 根 MINOR 精度问题、
            外加一根 ask-deepseek 补充数值二审（已裁定、未自动套用）标了一根
            CRITICAL 错误计数和三根低severity 项。STAGE C 用一根 grep-closure
            循环（搜索 pattern · 修前命中 · 修后命中）把每根 finding 套遍全篇
            EN、以抓引用行之外语义等价的主张：
            <br />
            <b>DN-001（MAJOR）</b> —— 回补谱系被夸成「四 / 第四段」。pattern：
            <code>4th step</code>、<code>four straight</code>、
            <code>four-session</code>、<code>over four sessions</code>、
            <code>four-session march</code>。修前 7 · 修后 0 —— 处处改写为
            「从 07-10 空头峰起的两段式回补」（头部、正文、挤压周期交易、
            决策表）；剩下的「four」只是「all four legs」/「the last four
            closes」/「Twenty-four hours」。RESOLVED。
            <br />
            <b>DS-CRITICAL</b> —— 「the last five all above the $63,071 floor」
            为假（07-08 $62,255.30 收在下方）。pattern：
            <code>last five all above</code>。修前 1 · 修后 0 —— 改为「最后四根
            （07-09 到 07-12）在地板上方、07-08 是唯一一根收在下方」。RESOLVED。
            <br />
            <b>DN-003（MINOR）</b> —— MTF 收盘列被压平成每个 TF 都 63,840。
            pattern：per-TF 行的 <code>63,840</code>。恢复来源 per-TF 收盘
            （15m/1h/4h/8h → 63,833；1w/1M → 63,839；30m/12h/1d/3d 仍 63,840）；
            四行合法 63,840 + 脚注扫描现货保留。RESOLVED。
            <br />
            <b>DN-004（MINOR）</b> —— expiry strip 漏了 24JUL26。pattern：strip
            里的 <code>24JUL 12.3</code>。修前 0 · 修后 1 —— 在 17JUL 与 31JUL
            间插入 <code>24JUL 12.3 +11.25M</code>、并把「两根前向块」改成
            「前向块」/「全部正」。RESOLVED。
            <br />
            <b>DN-005（MINOR）</b> —— scout 目标格与 R/R 不一致。pattern：
            <code>take half at</code>、<code>targets $64,914 / $65,261 … then</code>。
            修前 1 · 修后 0 —— 水位格现在把 $68,763（D-EMA100）点名为承重首
            目标、D-SMA50/D-EMA50 盖为入场确认、与 R/R 段和决策表一致。RESOLVED。
            <br />
            <b>DN-002（MINOR）</b> —— 4h/1h 窗口流向标签缺采样行惯例披露。加了
            一根明确说明：4h/1h 窗用与 24h 窗相同的含端点采样锚惯例（不是精确
            240/60 分钟区间）。RESOLVED。
            <br />
            <b>DS-MAJOR（已裁定）</b> —— SM 多/空腿复原 net 是 −2,077 / −1,104、
            对陈述的 −2,076 / −1,103。重算确认 live sm_net 字段是小数
            （−2,076.3 → −1,103.3）、所以这是整 BTC 取整伪影、不是数值错误；
            披露了取整、并把 −2,076 / −1,103 这两个 net 点名为承重盘面值。
            RESOLVED（披露）。
            <br />
            <b>DS-MINOR（OI 分母）</b> —— −2.46% 分母隐含。在 meta tile 与正文
            明确标出上一根 OI 103,904 BTC。<b>DS-MINOR（带合计）</b> —— 「roughly
            +80M」低估了 $64k–$68k 带（17.35+21.11+21.17+8.00+16.75 = 84.38M）；
            改为「roughly +84M」并列出各 strike 分量。两根都 RESOLVED。
            <br />
            <b>Codex 确认干净（未改）：</b>requireViewer gating、JSX/markup
            完整、funding × 1095（+5.18% ann、均值 +3.80%、封顶占用 10/1442）、
            OI −2,557/−2.46%、现货 CVD +7,682 / futCVD −327、SM Δ（多 +531 /
            空 −442 / net +973、切幅 46.4% / 46.9%）、完整 MA 矩阵对 parquet
            00:06Z close $63,831.60（W-MON、W-SMA200 地板 $63,071 +1.31%）、
            GEX 双参考符号（flip $61,644、现货 +3.65% / idx +4.01%）、全正
            expiry strip、RV 30.32%（30 returns）、跨资产 |r| 0.314 / BTC
            +1.42% vs NQ +0.63% = +0.79pt、宏观 Tier-1、claims-vs-loaded-data
            纪律（NTT / max-pain / strike-IV / BTC-NQ framework only；200W-watch
            JSON 缺、地板取矩阵 W-SMA200 不编造）。所有 CRITICAL + MAJOR +
            MINOR findings 在 v2 promotion 前经 grep 验证为干净（修后命中 = 0）。
            EN/ZH 数值平价。<b>post codex hostile audit。</b>
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；Next 16.2.6 对
            Node &lt; 20.9.0 硬退出、所以完整 <code>next build</code> 被环境
            阻塞。<code>npx --no-install tsc --noEmit</code> 是 build proxy、
            在 v2 修正后再跑了一次。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况
            个性化。数字反映单一原子快照（2026-07-12 00:07Z、live tape 行钉
            00:05Z）、provenance 在数据来源条带中按节披露；宏观 Tier-1 面板
            渲染 2026-07-11 22:17Z（比快照早约 1.8h）、部分输入明确陈旧或待定
            并已标注。水位、规模与条件是交易台流程的示例、不是长期推荐。过去
            的相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损风险、加杠杆下
            损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                挤压重夺了地板、然后泄了气。水位在收盘上守住；燃料没守住。
                scout 的闸是需求底、不是价格前置条件。耐心 —— 周线在周一落定。
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
            v2 · 2026-07-12 00:07Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
