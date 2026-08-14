import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-14 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-14',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-14' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260814() {
  await requireViewer('/zh/desk/2026-08-14');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-14 · v2</span>
          <span>内部 · 仅供讨论 · v2 — 已过 codex 敌对式审计</span>
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
              <span className="dn-big">$63,484</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.03%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-08-14 00:06Z（tape 锚 00:05Z）
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-14 00:05Z tape 锚</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 锚行 t==&ldquo;08-14 08:05&rdquo;（BJ、
                    UTC+8）= 00:05Z 日 pin；在 00:06Z 会话起点读取 · 地雷已排
                    （00:05Z pin 不是 t==&ldquo;08-14 00:05&rdquo;、那会是
                    16:05Z 08-13 行）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-14 00:01Z scan（BJ 08:01）</td>
                  <td className="dn-flag">
                    滚动 latest 文件 · 较 00:06Z 读取约滞后 5 分钟 · 含未收盘
                    K 线 · 逐字存档于 /opt/desk-note/snapshots/2026-08-14-0006
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-14 00:00Z 快照</td>
                  <td className="dn-flag">
                    较快照锚约滞后 6 分钟 · Deribit idx $63,826 对 live
                    $63,484（比 live 高 $342）· 820 合约 · IV 中位数 40.9%
                    · 14AUG26 0.3DTE +6.08M（一小根正的前端块）在今日 08:00Z
                    结算（比此 00:05Z 快照晚约 8h —— 仍 live、未做结算调整）
                    · aggregate 按 by-expiry strip / gex_summary.json net_gex
                    footed（见盘口图）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-14 00:00Z
                  </td>
                  <td className="dn-flag">约滞后 6 分钟 · 7d 1h bar · 22 资产 · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-13 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.9h · FRED Tier-1：10Y −2bp 到 4.68%
                    （EXTREME RISK-OFF、略松）、TIPS −1bp 到 2.42%、HY OAS
                    −1bp 到 2.71%（RISK-ON）、DXY 99.95（+0.14 对 08-13）、
                    Fed 净流动性 $5.795T（偶发 RISK-OFF、z −2.47、面板上唯一
                    |偶发 z| &gt; 1.5 的动者）· MOVE 债波本次渲染 UNAVAILABLE
                    （抓取失败、第 5 天）· 数根 FX / 流动性行沿用上一次渲染
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-08-14 00:05Z（close $63,482.90）</td>
                  <td className="dn-flag">
                    偏移对 live 现货 $63,484.00 重算 · 完整 2019–2026 wildcard
                    parquet = 363 根 W-SUN 周 bar · W-SMA200 可计算、印
                    $63,982（−0.78%、刚在头顶）；每根显示的 W-SMA 水位都是
                    全历史均值 · W-EMA150/200 种子敏感、按披露的种子窗报出
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期地板盯位</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · sma200 $63,760.71</td>
                  <td className="dn-flag">
                    recomputed_at 2026-08-10 00:11:24Z —— 现约陈旧 96h、沿用
                    （自 08-09 无新周结算；下一根周收 08-16、两天外）· JSON：
                    sma200 $63,760.71、consecutive_above 6 至 08-09 周结算
                    $64,867.80 · 慢水位（~$250/wk）、按 runbook 陈旧数小时的
                    JSON 可接受 · 注意 live 现货 $63,484 在日/盘中口径上坐在
                    此地板下方 −0.43%、且未收盘的周 bar 会收在其下 ——
                    6 周上-地板连收是 WEEKLY-CLOSE 读法、只到 08-16 结算前有效
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月度（73d）· 不作实时</td>
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
              <span className="dn-v">+9.58%</span>
              <span className="dn-src">live · 原始 0.008751 ×1095 = +9.58% ann —— 回热重新逼近 Binance +10.95% 封顶（自 08-13 的 +7.16%）· 24h 均值 +8.02%（较 08-13 的 +8.98% 下、因窗口前段坐得更低）· 区间 +5.20% / +10.95% · 采样 0 / 1442 行转负、49/1442 取整到 +10.95% 显示（47/1442 恰在原始 0.010000）· 套息在边际上转硬 —— 4h 前 +10.88% 逼近封顶、1h 前 +10.20%</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+7.16%（24h 前）→ +9.58% live（24h 均值 +8.02%）</span>
              <span className="dn-src">live 利率自 08-13 冷却印回热 +2.42pt；1h 前 +10.20%、4h 前 +10.88%（逼封顶）、24h 前 +7.16% —— 08-13 的冷却没延续、套息在最后一腿转硬回逼封顶；仍不是 08-11 备忘喊的深度去杠杆、且全窗 0/1442 转负</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−1.32%（−1,470 BTC）</span>
              <span className="dn-src">live · OI 在 24h 内收缩 —— 08-13 备忘 +1,822 BTC（+1.67%）那根堆的反转 · 最近 4h −463 BTC、最近 1h +121 BTC（一小根晚回补）· 跑穿 08-12/08-13 的再加杠杆腿翻倒了：杠杆下来了、不只是减速</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">65.14 / 34.86</span>
              <span className="dn-src">live_db `mkt_long_pct` · 从 08-13 的 64.95（+0.19pt 更拥挤）· 24h 区间 62.10 / 65.40 —— retail 拥挤到又一根谱系新高、仍在 24h 区间顶部买回落</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v">−28,076（表观净 SHORT —— 被伪影污染、不可认证）</span>
              <span className="dn-src">live · long 12,875 − short 40,951 · 从 08-13 备忘的 −3,457；表观 24h 空堆 −24,619、但那根空堆里 +23,187 是 BJ 14:51 08-13（06:51Z）单一分钟 —— 谱系一直在标的 BJ 14–15 feed 重同步窗（该分钟 short +23,187 / long −2,358）· 去伪影后 SM 本子在尖刺前坐 ~−1,569（08-13 14:50：long 15,840 − short 17,409）、此后只温和漂移；−28k 是假空压、不是可认证的 smart-money 空</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 08-13 备忘</span>
              <span className="dn-v">−3,457 → −28,076（Δnet −24,619、表观空堆）</span>
              <span className="dn-src">24h 汇总 long −2,099、short +22,520、net −24,619（分量各自独立取整）· |Δ|/prior_net = 24,619 / 3,457 = 7.12×（算式上的荒谬倍数）—— 因为帧被污染：+22,520 净空里 +23,187 是孤单的 BJ 14:51 重同步分钟；去伪影后 SM 本子大致平-到-略更空、把这个&ldquo;空&rdquo;读成机械 feed 尖刺、不是任一方向的可认证压</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.9% / 22.35%</span>
              <span className="dn-src">GEX IV 中位数 · 820 合约 · 30D close-to-close RV（logret.std ×√365 ×100、30 returns；29-return 另一口径 22.18%）· 链级溢价 ~+18.6pt —— 溢价守在 08-13 的 +19.1pt 附近、IV（41.5% → 40.9%）与 RV（22.39% → 22.35%）都边际转松</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+0.68%（在上方）</span>
              <span className="dn-src">flip $63,057（自 08-13 的 $63,149 落）· 对 live 现货 $63,484（+0.68%；63,484.00/63,057.01 − 1 = 0.677%）/ GEX 文件 Deribit idx $63,826（+1.2%；63,826.09/63,057.01 − 1 = 1.220%）—— 两参考都正、页面 tile 取现货侧 +0.68% · aggregate GEX +84.96M（expiry-strip / gex_summary.json net_gex 口径；GEX 文件的&ldquo;Total GEX / 1% move&rdquo; tile 读 +66.8M、但与它自己的 by-expiry strip 和 net_gex 内部不一致、两者都 foot 到 +84.96M —— 本篇用 footed 口径）—— 自 08-13 的 +72.90M 再次扩张、由 15AUG26 +32.85M 块驱动；flip 下方坐一根 −17.02M $60k 崩盘 put 台</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                08-13 备忘倾向&ldquo;在 flip 上筑底&rdquo;—— 盘面确实守住了那根
                底、但底下的结构转重、而盘口的夹钳更厚了
              </span>
              。08-13 走完的收盘{' '}
              <span className="dn-tag">$63,456.70</span> 是第四根收在 D-EMA50 顶
              （现 <span className="dn-tag bear">$64,457</span>）下方、也仍在
              日口径 200W 地板{' '}
              <span className="dn-tag bear">$63,761</span> 与 W-SMA200{' '}
              <span className="dn-tag bear">$63,982</span> 下方、但它{' '}
              <span className="dn-em">在收盘口径上守住了 $63,057 0-γ flip
              </span> —— 最后这条线连着守了第四天、现货 24h 基本平在{' '}
              <span className="dn-tag">$63,484</span>（+0.03%）。但底内的
              内部结构转重：{' '}
              <span className="dn-signal">OI 收缩 −1,470 BTC</span>
              （08-13 那根 +1,822 堆的反转）、funding{' '}
              <span className="dn-signal">回热重逼封顶</span>
              （live <span className="dn-tag">+9.58% ann</span>、4h 前{' '}
              <span className="dn-tag">+10.88%</span> 逼近它）、retail 拥挤到{' '}
              <span className="dn-tag bear">65.14%</span> —— 又一根谱系新高 ——
              且谱系第二次（比 08-12 更深）、盘中低插穿了 flip：{' '}
              <span className="dn-tag bear">$62,890 @ 08-13 16:44Z</span>{' '}
              印在 $63,057 下方（尽管日收盘又收回其上）。对着这根更重的
              盘面、底拿到一道更厚的防守：{' '}
              <span className="dn-signal">
                aggregate γ 再次扩张到 +84.96M
              </span>
              （自 08-13 的 +72.90M、靠新鲜的 15AUG26 +32.85M 块）、0-γ flip
              爬低到 <span className="dn-tag">$63,149 → $63,057</span>、
              且一根新鲜的{' '}
              <span className="dn-tag bull">1h 水下金叉</span> 与持续的
              1M ⚡TD9 BUY 并印。SM 盘面显示{' '}
              <span className="dn-tag">−28,076 净空</span>、但{' '}
              <span className="dn-em">其中 +23,187 是单一 BJ 14:51 08-13
              feed 重同步分钟</span> —— 那根反复的伪影 —— 所以不是可认证的
              smart-money 空。本篇标定底在收盘上守住 flip 第四根、而底下的
              杠杆结构转重 —— 本子保持 FLAT、两根触发都没火、待定的 08-16
              周期地板周结算成为定夺这一根的那条线。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$63,484</span> live、{' '}
              <span className="dn-tag bull">+0.03%</span> 在 24h —— 实质平、
              盘面第四根贴着 $63.1k–$64.0k 带 —— 在一条{' '}
              <span className="dn-tag">$64,010 / $62,890</span> 区间里
              （高 @ BJ 13:16 08-13 / UTC 05:16 08-13、低 @ BJ 00:44 08-14 /
              UTC 16:44 08-13）。{' '}
              <span className="dn-signal">flip 在收盘上守住、但盘中被谱系
              第二次插穿</span>：08-13 收{' '}
              <span className="dn-tag">$63,456.70</span> 坐在{' '}
              <span className="dn-tag bull">$63,057 0-γ flip</span> 上方、
              但 24h 低 <span className="dn-tag bear">$62,890</span> 在最末
              1,442 根 K 线低点分钟里有 16 根（现货字段 7 根）交易在其下方 ——
              比 08-12 低插得更深、即便收盘收回。日收盘阶梯近乎平且在变浅：
              08-10 <span className="dn-tag">$63,939.30</span>、08-11{' '}
              <span className="dn-tag">$63,572.00</span>、08-12{' '}
              <span className="dn-tag">$63,454.70</span>、08-13{' '}
              <span className="dn-tag">$63,456.70</span>（当日 +$2）——
              四根连收在 D-EMA50 顶下方、每一根都守住 flip。MA 矩阵形状不变：
              现货实质{' '}
              <span className="dn-tag">坐在 D-SMA50 $63,488（−0.01%）</span>、
              刚在 <span className="dn-tag bear">D-SMA20 $64,000（−0.81%）</span>{' '}
              / <span className="dn-tag bear">D-EMA20 $63,989（−0.79%）</span>
              下方、在 <span className="dn-tag bear">D-EMA50 顶 $64,457
              （−1.51%）</span> 下方、且在周地板带{' '}
              <span className="dn-tag bear">W-SMA200 $63,982（−0.78%）</span> 与
              200W trap-watch 地板{' '}
              <span className="dn-tag bear">$63,761（−0.43%）</span> 下方。{' '}
              <span className="dn-em">
                盘面在 flip 上筑底第四天、但盘中插针、OI 收缩、funding 回热、
                retail 新高是底里的第一批裂缝 —— 收盘守住了、盘中没有。
              </span>{' '}
              08-13 的 scout 重入触发（一根 1d 收回 D-EMA50 顶 $64,457 上方
              AND 一根可认证的 SM 多）未满足 —— 顶已在四根收盘上失守、SM
              &ldquo;印&rdquo;是伪影 —— 所以 scout 继续递延；chase-short 触发
              （一根 1d 收穿 flip AND aggregate γ 转负）也未满足 —— 收盘守住、
              γ 再扩张 —— 所以它保持 stood down。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · OI 收缩 −1,470 BTC（08-13 +1,822 堆的反转、最近 4h −463）· funding 回热逼近 +10.95% 封顶（live +9.58%、4h 前 +10.88%、24h 均值 +8.02%、0/1442 转负）· retail 拥挤到新高 65.14% · SM 表观净空 −28,076、但 +23,187 空堆是孤单的 BJ 14:51 feed 伪影 —— 不可认证 · 24h 现货买 +5,471 对期货净卖 −1,543</span>
            </h2>

            <p>
              <span className="dn-signal">
                仓位盘面在底内转重 —— 杠杆在 OI 上下来、即便 funding 回热
              </span>
              。OI Δ <span className="dn-tag bear">−1,470 BTC（−1.32%）</span>{' '}
              跨 24h —— 08-13 备忘 +1,822 BTC（+1.67%）那根堆的反转；最近 4h
              跑 <span className="dn-tag bear">−463 BTC</span>、只有最近 1h
              回 <span className="dn-tag">+121 BTC</span>。跑穿 08-12/08-13 的
              再加杠杆腿翻倒了 —— 这是自 08-12 备忘以来第一根 OI 收缩。然而
              funding 在同一窗内 <span className="dn-em">回热</span>：live{' '}
              <span className="dn-tag">+9.58% ann</span>（原始 0.008751 ×
              1095）、4h 前 <span className="dn-tag">+10.88%</span> 逼封顶、
              1h 前 <span className="dn-tag">+10.20%</span>、24h 均值{' '}
              <span className="dn-tag">+8.02%</span>、区间{' '}
              <span className="dn-tag">+5.20% / +10.95%</span>、封顶占用{' '}
              <span className="dn-tag bear">49/1442 取整到 +10.95%（47/1442 恰在原始 0.010000）</span>、
              且全窗 <span className="dn-tag">0 / 1442 转负</span>。{' '}
              <span className="dn-em">OI 缩而 funding 转硬回逼封顶、是一本
              减了规模却保住多倾斜的本子 —— 多头在更小的基数上付费买入
              </span>、与 retail{' '}
              <span className="dn-tag bear">mkt_long_pct 65.14%</span>
              {' '}（+0.19pt 到谱系新高、24h 区间 62.10 / 65.40）一致、仍在
              区间顶部拥挤买回落。
            </p>

            <p>
              <span className="dn-signal">
                SM &ldquo;净空&rdquo;是那根反复的 feed 伪影、不是可认证的压
              </span>
              。盘面读 SM net <span className="dn-tag">−28,076</span>
              （long 12,875 − short 40,951）对 08-13 备忘的 −3,457 —— 表观
              24h 空堆 −24,619。但{' '}
              <span className="dn-em">+22,520 净空移动里 +23,187 是单一分钟
              </span> 在 <span className="dn-tag bear">BJ 14:51 08-13
              （06:51Z）</span>：该分钟 short 跳 17,409 → 40,596（+23,187）、
              long 走 15,840 → 13,482（−2,358）—— 就是产出 08-10、08-11、
              08-12 与 08-13 读数的那根 BJ 14–15 / 15:16 feed 重同步窗。
              尖刺前（BJ 14:50 08-13）SM 本子坐{' '}
              <span className="dn-tag">−1,569</span>（long 15,840 −
              short 17,409）；此后只温和漂移、并印出 24h 谷{' '}
              <span className="dn-tag bear">−29,856 @ BJ 23:41 08-13</span>
              （同分钟 short 峰 41,913）。{' '}
              <span className="dn-em">|Δ|/prior_net 倍数是 24,619 / 3,457 =
              7.12× —— 一个荒谬的数、标记的是污染而非真实仓位变化</span>。
              把 −28k 读成机械 feed 尖刺、不是可认证的 smart-money 空；可认证
              的状态是大致平-到-略空、实质上比 08-13 没变。
            </p>

            <p>
              窗口流向是<em>一本双侧到偏重的盘面：现货在 24h 买、期货和
              taker 卖、OI 泄漏</em>。24h：价格{' '}
              <span className="dn-tag bull">+0.03%</span>、OI{' '}
              <span className="dn-tag bear">−1,470 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bull">Δ +5,471</span>（窗内无 cb_cvd
              reset）、期货 CVD{' '}
              <span className="dn-tag bear">Δ −1,543</span>、大单{' '}
              <span className="dn-tag bull">+429 BTC / 868 笔</span>、
              taker-net <span className="dn-tag bear">−1,545</span> ——{' '}
              <span className="dn-em">现货买盘被期货/taker 卖盘吸收、OI 泄漏；
              一本让价格保持平的偏重平衡、不是一根定向压</span>。4h（进快照）：
              价格 <span className="dn-tag bull">+0.14%</span>、OI{' '}
              <span className="dn-tag bear">−463 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bull">Δ +1,297</span>、期货 CVD{' '}
              <span className="dn-tag">Δ −3</span>、大单{' '}
              <span className="dn-tag bull">+14 BTC / 120 笔</span>、
              taker-net <span className="dn-tag bull">+4</span> ——{' '}
              <em>一段小的现货领升、OI 仍在泄</em>。1h：价格{' '}
              <span className="dn-tag bear">−0.01%</span>、OI{' '}
              <span className="dn-tag bull">+121 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bear">Δ −347</span>、期货 CVD{' '}
              <span className="dn-tag bear">Δ −19</span>、大单{' '}
              <span className="dn-tag bear">−70 BTC / 35 笔</span>、
              taker-net <span className="dn-tag bear">−71</span> ——{' '}
              <em>一段软的最后一小时、现货被卖出、OI 回抬</em>。perp 对现货
              在快照交易 <span className="dn-tag bear">−$72.07 折价</span>
              （1h 均 −$64.42、区间 −$77.12 / −$40.09；4h 均 −$64.30；24h 均
              −$67.15、区间 −$118.91 / −$0.26 —— 24h basis 从未翻升水）。
              1 分钟 aggressor skew 快照{' '}
              <span className="dn-tag bear">−4.1</span>（1h 均 −8.39、区间
              −32.0 / +10.9）—— 一档温和卖倾斜、本次快照无超卖反射买盘。{' '}
              <span className="dn-em">
                OI 缩 + funding 回热逼封顶 + retail 新高 + 持续 perp 折价 +
                现货被买而期货/taker 卖：本子放出了规模却保住多倾、平的
                价格是真实现货买盘与更重期货卖盘之间的平衡。
              </span>
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 维持 1 长 / 8 空 / 1 中 —— 一根新鲜的 1h 水下金叉（刚印、$63,471）加入 1M ⚡TD9 BUY + 30m/1h/1w 底背离；12h 逼近 TD9 Buy（Buy 8→9?）· 08-13 的 8h ⚡TD9 BUY 老化成 Sell 2 · 第四根收在顶下守住 flip；08-13 盘中低 $62,890 谱系第二次插穿 flip（比 08-12 更深）· 现货在 D-SMA50、在日地板带下方</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图维持看空共振、但长出一根新鲜的引擎周期弹升暗示
              </span> —— <span className="dn-tag bear">1 长 / 8 空 / 1 中</span>
              跨 10 周期（净读：多周期共振看空、卖反弹）、实质是 08-13 的
              1-长 / 9-空 图、15m 翻中（推上云）。新信号是一根{' '}
              <span className="dn-tag bull">1h 水下金叉、刚印（1 bar、DIF
              −69.4、水下）</span> —— 引擎周期上一根早期的空→多试探 ——
              加入持续的{' '}
              <span className="dn-tag bull">1M ⚡TD9 BUY</span> 与底背离簇
              （<span className="dn-tag bull">30m / 1h / 1w 底背离</span>）、
              还有 <span className="dn-tag bull">12h 在 TD Buy 8→9?</span>
              （距 TD9 Buy 一根）。对着这些、顶背离簇更重
              （<span className="dn-tag bear">15m / 4h / 8h / 12h 顶背离</span>）、
              且 08-13 的 8h ⚡TD9 BUY 老化 —— 8h 现在带一根{' '}
              <span className="dn-tag bear">水上死叉 11b、Sell 2</span>。
              中段死叉又确认深一根（12h 死叉 5b、1d 死叉 3b）。反转 regime
              读 <span className="dn-tag">5/9（JT&lt;0）—— 均值回归 / 弹升
              倾向、趋势跟随谨慎</span>。{' '}
              <span className="dn-em">
                直读：慢与中段周期仍空（10 里 8 根）、但引擎长出一根新鲜
                1h 金叉、且 1M ⚡TD9 BUY / 12h-近-TD9 / 三根底背离簇是一叠
                弹升暗示 —— 与 08-13 同一根&ldquo;重结构下压着一根弹升试探&rdquo;的
                形状、多一根 1h 金叉更硬。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,471</td><td className="num">52.5</td><td className="bull">金叉（水下）20b</td><td className="bull">云上 ↓63.4k 4b</td><td>Sell 1</td><td>BEAR reg</td></tr>
                <tr><td>30m</td><td className="num">63,471</td><td className="num">50.4</td><td className="bull">金叉（水下）7b</td><td className="bear">云下 ↑63.7k 17b</td><td>Buy 1</td><td>BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">63,471</td><td className="num">48.1</td><td className="bull">金叉（水下）1b · 刚印</td><td className="bear">云下 ↑63.7k 16b</td><td>Sell 6</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">63,471</td><td className="num">41.8</td><td className="neut">—</td><td className="bear">云下 ↑63.8k 4b</td><td>Sell 1</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">63,478</td><td className="num">42.5</td><td className="bear">死叉（水上）11b</td><td className="bear">云下 ↑63.7k 2b</td><td>Sell 2</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>12h</td><td className="num">63,471</td><td className="num">43.6</td><td className="bear">死叉（水上）5b</td><td className="bear">云下 ↑64.1k 3b</td><td>Buy 8 → 9?</td><td>BEAR reg</td></tr>
                <tr><td>1d</td><td className="num">63,471</td><td className="num">45.7</td><td className="bear">死叉（水上）3b</td><td className="neut">云内 62.7k–66.0k 25b</td><td>Buy 5</td><td>BULL hid</td></tr>
                <tr><td>3d</td><td className="num">63,471</td><td className="num">44.0</td><td className="bear">—</td><td className="bear">云下 ↑75.8k 24b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,471</td><td className="num">39.4</td><td className="bull">金叉（水下）3b</td><td className="bear">云下 ↑85.9k 28b</td><td>Buy 1</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">63,471</td><td className="num">43.5</td><td className="neut">—</td><td className="bull">云上 ↓47.4k 30b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（BJ 08:01；滚动
                    latest 文件；逐字存档于
                    /opt/desk-note/snapshots/2026-08-14-0006）。头部：{' '}
                    <em>1 长 / 8 空 / 1 中</em>、净{' '}
                    <em>多周期共振看空、卖反弹</em>；反转：{' '}
                    <em>顶背离 4（15m/4h/8h/12h）、底背离 3（30m/1h/1w）、⚡ 1M
                    TD9 BUY、5/9 反转 regime（JT&lt;0）</em>；告警：{' '}
                    <em>1h 水下金叉刚印（$63,471、DIF −69.4）、12h TD8 Buy
                    （距 TD9 一根）</em>。扫描现货 $63,483、24h +0.01%
                    （00:01Z MTF 扫描；live-tape 头部在 00:06Z 于同一 24h 窗
                    读 +0.03%）、24h H/L $63,991 / $62,800 —— 扫描工具自己的
                    feed、与 live-tape 区间 $64,010 / $62,890 不同源（不同来源、
                    约早 5 分钟的扫描）；每根 prose 与决策表的 24h H/L 都用
                    live-tape 值、qVol $7.78B。收盘为未收盘 K 线；每个值在各
                    周期收盘前按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵把现货钉在 D-SMA50 铰链上、在日地板带下方。现货 $63,484
              坐{' '}
              <span className="dn-tag">−0.01% 在 D-SMA50 $63,488</span> ——
              单一根近乎平的日线 —— 刚在{' '}
              <span className="dn-tag bear">D-SMA20 $64,000（−0.81%）</span> 与{' '}
              <span className="dn-tag bear">D-EMA20 $63,989（−0.79%）</span>
              下方、在 <span className="dn-tag bear">D-EMA50 顶 $64,457
              （−1.51%）</span> 下方、且在周地板带下方 ——{' '}
              <span className="dn-tag bear">W-SMA200 $63,982（−0.78%）</span> 与
              200W trap-watch 地板{' '}
              <span className="dn-tag bear">$63,760.71（−0.43%）</span>。头顶
              其余按顺序：{' '}
              <span className="dn-tag bear">D-EMA100 $66,564（−4.63%）</span>、{' '}
              <span className="dn-tag bear">D-SMA100 $67,073（−5.35%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $69,060（−8.07%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $69,177（−8.23%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $69,511（−8.67%）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $71,850（−11.64%）</span>。
              周头顶：{' '}
              <span className="dn-tag bear">W-EMA20 $68,461（−7.27%）</span>、{' '}
              <span className="dn-tag bear">W-EMA200 $68,524（−7.36%）</span>、{' '}
              <span className="dn-tag bear">W-SMA20 $69,104（−8.13%）</span>、{' '}
              <span className="dn-tag bear">W-EMA150 $73,841（−14.03%；种子）</span>、{' '}
              <span className="dn-tag bear">W-SMA150 $77,118（−17.68%）</span>、{' '}
              <span className="dn-tag bear">W-EMA50 $77,253（−17.82%）</span>、{' '}
              <span className="dn-tag bear">W-EMA100 $78,474（−19.10%）</span>、{' '}
              <span className="dn-tag bear">W-SMA50 $82,464（−23.02%）</span>、{' '}
              <span className="dn-tag bear">W-SMA100 $88,706（−28.43%）</span>。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-08-14 00:05Z（close
                $63,482.90）；偏移对 live 现货 $63,484.00 重算。显示的 MA
                水位按 $ 取整、偏移用精确序列值算。完整 2019–2026 wildcard
                parquet 有 363 根 W-SUN 周 bar、所以 W-SMA200 可计算
                （$63,982、−0.78%、与 trap-watch 周期地板 $63,761 不同）；
                W-EMA150/200 从可用历史 seed、按种子披露。近线集合是一道紧
                的头顶簇：D-SMA50 在现货处、W-SMA200 / 200W 地板带
                $63,761–$63,982 刚在上方、D-EMA50 顶 $64,457 封顶 —— 现货被
                钉在地板带下侧约 $1k 的带里。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · γ 再次扩张到 +84.96M（自 +72.90M、一根 +12.06M 净台阶；strip 最重的正块是 15AUG26 +32.85M 前端 + 28AUG +15.13M、被其他 expiry 部分抵消）· flip $63,057（现货 +0.68% 在上方）· $65.5k +29.97M 最重墙、一道深 +100M+ 正带封住挤压 · $60k −17.02M 崩盘 put（自 −18.91M 松）在下方 · 14AUG 0.3DTE +6.08M（正前端）在 08:00Z 结算 · IV 中位数 40.9% / 820 合约</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子又变厚了 —— aggregate γ 第二天再扩张到 +84.96M
              </span>
              。aggregate GEX 是{' '}
              <span className="dn-tag bull">+84.96M / 1%</span>（08-13 是
              +72.90M —— 再一根 +12.06M 正台阶）；本子是一本更重的净多 γ
              阻尼。0-γ flip 爬低{' '}
              <span className="dn-tag">$63,149 → $63,057（−$92）</span>、现货
              $63,484 坐在 <span className="dn-tag bull">flip 上方 +0.68%
              </span>（现货口径 63,484.00 / 63,057.01 − 1 = +0.677%）；GEX
              文件自己的&ldquo;dist to flip&rdquo;读 +1.2%、对它的 Deribit
              idx $63,826（比 live 现货高 $342）是{' '}
              <span className="dn-tag bull">+1.22%</span>（63,826.09 /
              63,057.01 − 1 = +1.220%）—— 两参考都正、现货在 flip 上方。{' '}
              <span className="dn-em">aggregate 口径说明：GEX 文件的
              &ldquo;Total GEX / 1% move&rdquo; tile 印 +66.8M、但那个数与
              文件自己的 by-expiry strip 和 gex_summary.json net_gex 内部
              不一致、两者都 foot 到 +84.96M（6.08 + 32.85 + 4.12 − 0.03 +
              8.58 + 15.13 + 0.42 + 12.22 + 0.39 + 3.34 + 1.15 + 0.71 =
              84.96）；本篇用 footed +84.96M 口径、与谱系自 08-12 起一致。
              </span> 墙图是一道深双侧夹钳：{' '}
              <span className="dn-tag bull">$65.5k +29.97M</span>（最重墙）、{' '}
              <span className="dn-tag bull">$70k +19.29M</span>、{' '}
              <span className="dn-tag bear">$60k −17.02M</span>（崩盘 put、
              自 08-13 的 −18.91M 松）、{' '}
              <span className="dn-tag bull">$67k +10.71M</span>、{' '}
              <span className="dn-tag bull">$63.5k +10.04M</span>（最近的
              头顶撑、刚在现货上方）、{' '}
              <span className="dn-tag bull">$65k +9.83M</span>、{' '}
              <span className="dn-tag bull">$66k +9.59M</span>、{' '}
              <span className="dn-tag bull">$68k +8.39M</span>、{' '}
              <span className="dn-tag bull">$72k +7.84M</span>、{' '}
              <span className="dn-tag bull">$80k +7.75M</span>。{' '}
              <span className="dn-em">
                $63.5k–$72k 正带合计远超 +100M、封住任何挤压、同时阻尼回落；
                唯一实质的负块是 $60k −17.02M 崩盘 put、它坐在现货下方整整
                $3.5k、只在 flip 破时才咬。本子结构性买进回落（在 flip 上方）、
                卖出挤压
              </span>
              。前向 expiry：14AUG 0.3 +6.08M（一根正前端块、今日 08:00Z
              结算、比快照晚约 8h）、15AUG 1.3{' '}
              <span className="dn-tag bull">+32.85M</span>（最重前端、再扩张
              的驱动）、16AUG 2.3 +4.12M、17AUG 3.3 −0.03M、21AUG 7.3
              +8.58M、28AUG 14.3 <span className="dn-tag bull">+15.13M</span>、
              4SEP 21.3 +0.42M、25SEP 42.3{' '}
              <span className="dn-tag bull">+12.22M</span>、30OCT 77.3 +0.39M、
              25DEC 133.3 +3.34M、26MAR27 224.3 +1.15M、25JUN27 315.3
              +0.71M。除可忽略的 17AUG −0.03M 外每根前向块都正 —— 阻尼 dealer
              regime 在 strip 上没有负放大器。
            </p>

            <p>
              IV 中位数横跨 820 合约是{' '}
              <span className="dn-tag">40.9%</span>（自 08-13 的 41.5% / 794
              合约下 —— 一根边际 vol 冷却、合约计 +26）对 30D close-to-close
              RV <span className="dn-tag">22.35%</span> —— 链级溢价{' '}
              <span className="dn-tag">~+18.6pt</span>、守在 08-13 的
              +19.1pt 附近。{' '}
              <span className="dn-em">
                是 N 合约的链中位数、不是可交易价差；expiry- / strike-level
                vega、skew、期限结构仍未载入、vol 读法保持 framework only。
              </span>{' '}
              RV 方法：30D close-to-close、logret.std × √365 × 100、用最末
              30 根日 log return（= 连续 31 根日 close）、锚自 parquet 最末
              bar 2026-08-14 00:05Z；29-return 另一口径读 22.18%、30-return
              页面值 22.35%。RV 穿底稳步压缩 —— 盘面的实现区间窄、链却守着
              ~41% 隐含、一道 ~+18.6pt 的溢价、就是被期权定价进去的阻尼
              regime。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 利率松 2bp —— 10Y 4.68%（仍 EXTREME RISK-OFF）、TIPS 2.42% · 信用仍 RISK-ON（HY OAS 2.71%）· DXY 99.95 · Fed 净流动性 $5.795T（偶发 RISK-OFF、唯一 |z|&gt;1.5 的动者）· MOVE 不可用（第 5 天）· reclaim-long 利率筛在 13bp 仍 FALSE（改善 2bp）· BTC 对 TradFi 落后再扩到 −3.48pt、因 NQ 跑 +2.25%</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面在利率上边际转松、守住 risk-on 信用 / 紧美元的混合
              </span>
              。面板渲染 2026-08-13 22:15Z、比快照早约 1.9h。US 10Y nominal{' '}
              <span className="dn-tag bull">4.68%（−2.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+2.07</span>、偶发 z{' '}
              <span className="dn-tag">+0.81</span> —— EXTREME RISK-OFF、自
              08-13 的 4.70% 松 2bp。10Y TIPS real{' '}
              <span className="dn-tag bull">2.42%（−1.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+2.33</span> —— 仍 EXTREME
              RISK-OFF。5Y5Y BE 通胀{' '}
              <span className="dn-tag">2.28%（−3.0bp）</span>。HY OAS{' '}
              <span className="dn-tag">2.71%（−1.0bp）</span>、regime z{' '}
              <span className="dn-tag bull">−1.02</span> —— 仍 RISK-ON 信用、
              基本平。Chicago Fed NFCI{' '}
              <span className="dn-tag bull">−0.549（周度）</span> —— RISK-ON。
              MOVE 债波 <span className="dn-tag stale">不可用</span> ——
              第 5 根连续抓取失败的渲染、无债波读。DXY{' '}
              <span className="dn-tag bear">99.95（−0.06 当日 · +0.14 对
              08-13）</span>、regime z <span className="dn-tag">+0.85</span> ——
              紧、24h 内边际转硬。Fed 净流动性{' '}
              <span className="dn-tag bear">$5.795T（−0.045T）</span>、偶发 z{' '}
              <span className="dn-tag bear">−2.47</span> —— 一根新鲜的周度
              抽、也是面板上唯一 |偶发 z| &gt; 1.5 的动者（偶发 RISK-OFF）。
              US-JP 10Y 利差{' '}
              <span className="dn-tag">2.01%（−2.0bp）</span>；USD/JPY{' '}
              <span className="dn-tag bear">159.49（+0.16）</span>（日元更软）；
              USD/CNY <span className="dn-tag bull">6.7423</span>。{' '}
              <span className="dn-em">
                净：reclaim-long 利率筛（10Y &lt; 4.55%）在 4.68% 仍 FALSE
                —— 高线上 13bp、自 08-13 的 15bp 改善 2bp 但未触发；信用守
                risk-on、美元守紧、唯一的偶发动者是一根 Fed 流动性抽
                （risk-off）。宏观面本印不对 BTC 任一方向把关 —— 既不是
                再生长触发、也不是重夺绿灯。
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
                <tr><td>US 10Y nominal</td><td className="num">4.68%</td><td className="num bull">−2.0bp</td><td className="num bear">+2.07</td><td className="num">+0.81</td><td className="bear">EXTREME RISK-OFF、已松</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.42%</td><td className="num bull">−1.0bp</td><td className="num bear">+2.33</td><td className="num">+0.79</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.28%</td><td className="num bull">−3.0bp</td><td className="num">+0.86</td><td className="num">+0.77</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.71%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.02</td><td className="num bull">−0.52</td><td className="bull">RISK-ON</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.549</td><td className="num">−0.00</td><td className="num bull">−1.14</td><td className="num bull">−1.20</td><td className="bull">RISK-ON</td></tr>
                <tr><td>MOVE 债波</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">不可用 · 抓取失败（第 5 天）</td></tr>
                <tr><td>DXY</td><td className="num">99.95</td><td className="num bear">−0.06</td><td className="num">+0.85</td><td className="num bull">−1.06</td><td className="bear">紧 · +0.14 对 08-13</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.795T</td><td className="num bear">−0.045T</td><td className="num bull">−1.28</td><td className="num bear">−2.47</td><td className="bear">偶发 RISK-OFF · 唯一 |z|&gt;1.5 动者</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.49</td><td className="num bear">+0.16</td><td className="num">+0.72</td><td className="num">−0.78</td><td className="bear">日元更软</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">2.01%</td><td className="num bull">−2.0bp</td><td className="num">−0.26</td><td className="num">+0.81</td><td className="neut">中性</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7423</td><td className="num bull">−0.00</td><td className="num bull">−1.41</td><td className="num bull">−1.46</td><td className="bull">无标 · 松</td></tr>
                <tr><td>WTI 原油</td><td className="num">$84.8</td><td className="num bear">+1.0</td><td className="num">+0.60</td><td className="num">+0.71</td><td className="neut">无标（Tier-3 driver）</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月度）</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">月度 · 陈旧 73d · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:00Z ——{' '}
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.205</span> —— 深在
              IDIOSYNCRATIC 区段（&lt;0.25）、与 08-12 备忘的 0.207 实质不变。
              BTC 列出的对齐弱且重排：SP500{' '}
              <span className="dn-tag">+0.353</span>（顶）、BRENT{' '}
              <span className="dn-tag">−0.326</span>、AAPL{' '}
              <span className="dn-tag">+0.300</span>、NQ{' '}
              <span className="dn-tag">+0.286</span>、EUR{' '}
              <span className="dn-tag">+0.273</span>、PLAT{' '}
              <span className="dn-tag">+0.267</span>、CL{' '}
              <span className="dn-tag">−0.257</span>、META{' '}
              <span className="dn-tag">+0.248</span>、GOOGL{' '}
              <span className="dn-tag">+0.244</span>、COPPER{' '}
              <span className="dn-tag">+0.243</span>、GOLD{' '}
              <span className="dn-tag">+0.236</span>。7d 相对表现：{' '}
              <span className="dn-tag bear">BTC −1.23%</span>、NQ{' '}
              <span className="dn-tag bull">+2.25%</span>、SP500{' '}
              <span className="dn-tag bull">+1.23%</span>、JP225{' '}
              <span className="dn-tag bull">+6.16%</span>、TSLA{' '}
              <span className="dn-tag bull">+6.43%</span>、NVDA{' '}
              <span className="dn-tag bull">+2.69%</span>、META{' '}
              <span className="dn-tag bull">+0.62%</span>、AAPL{' '}
              <span className="dn-tag bear">−2.45%</span>、GOOGL{' '}
              <span className="dn-tag bear">−3.56%</span>、AMZN{' '}
              <span className="dn-tag bear">−2.58%</span>。金属硬：GOLD{' '}
              <span className="dn-tag bull">+3.02%</span>、SILVER{' '}
              <span className="dn-tag bull">+5.56%</span>、PALL{' '}
              <span className="dn-tag bear">−3.73%</span>。能源上：CL{' '}
              <span className="dn-tag bull">+3.46%</span>、BRENT{' '}
              <span className="dn-tag bull">+2.66%</span>、NGAS{' '}
              <span className="dn-tag bull">+6.40%</span>。{' '}
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 落后再扩到 ~−3.48pt（BTC −1.23% vs
                NQ +2.25%）、自 08-13 的 −2.77pt —— 缺口扩因 NQ / SP500 /
                JP225 跑而 BTC 流血；BTC 是唯一的风险落后者、不跟股指买盘。
                内生于 crypto 仍是承重读法：宏观脉搏安静（利率松 2bp、信用
                risk-on、美元紧、一根 Fed 流动性偶发抽）、BTC 的盘面由它
                自己的 dealer / 杠杆结构设定、不是跨资产背景
              </span>
              。JGB 月度 2.67% 带 EXTREME RISK-OFF 月度标、陈旧 73d ——
              不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 本子 FLAT（保持平）· scout 重入仍 DEFERRED（顶第四根失守；SM &ldquo;空&rdquo;是 feed 伪影、不是可认证的多）· chase-short STOOD DOWN —— γ 再扩张到 +84.96M（γ 翻负触发又走远）BUT 第一批裂缝印出（盘中 flip 插针、OI 收缩、funding 回热、待定 08-16 地板结算）</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子平、保持平 —— 底在收盘上守住 flip 第四根、但底下的结构
                转重、第一批裂缝出现
              </span>
              。08-13 备忘把 scout 重入挂在一根顶 RECLAIM（1d 收回 D-EMA50
              上方）AND 一根可认证的 SM 多、把 chase-short 挂在一根 1d 收穿
              flip AND aggregate γ 翻负。两根都没火。scout 腿仍未满足：顶在
              第四根收盘失守（$63,456.70 &lt; $64,457）、SM 到 −28,076 是
              BJ 14:51 08-13 feed 伪影、不是可认证的多。chase-short 也未满足
              —— 08-13 收盘守住 $63,057、aggregate γ 再扩张到 +84.96M（自
              +72.90M）、所以 γ 翻负触发离开火更远。{' '}
              <span className="dn-em">
                但内部结构在底内朝空侧裂开：OI 收缩 −1,470（堆反转）、
                funding 回热逼封顶、retail 拥挤新高、且 —— 谱系第二次这样的
                插针、比 08-12 更深 —— 盘中低 $62,890 插穿了 flip（尽管收盘
                收回）。这些没有一根本身是触发、更厚的 +84.96M 夹钳仍守着底、
                但天平在 08-13 移开之后又朝空头盯位倾。待定的 08-16 周期地板
                周结算现在是那条线。
              </span>{' '}
              本快照无新仓；只要 flip 在收盘上守住、dealer 夹钳是 +84.96M 正、
              交易台保持平。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout 重入 · DEFERRED · 距离不变 —— 顶在第四根收盘失守、SM &ldquo;空&rdquo;是 feed 伪影不是可认证的多</span>
              <div className="dn-trade-name">
                回补反弹 scout 重入 —— 仍递延；顶未重夺（第四根收在下方）、SM 到 −28,076 的印是 BJ 14:51 feed 重同步、不是可认证的 smart-money 多
              </div>
              <div className="dn-thesis">
                08-13 重入需要一根顶 RECLAIM 配一根可认证的 SM 多。两根都
                不成立。重夺没发生 —— 24h 高 $64,010 在 D-EMA50 顶 $64,457
                下方远处失速、08-13 收 $63,456.70 是第四根收在其下。SM 数字
                从 −3,457 移到 −28,076、但那是一根表观 SHORT 堆（对 scout
                多本来就是错方向）、且其中 +23,187 是孤单的 BJ 14:51 08-13
                feed 重同步分钟 —— 一根机械尖刺、不是任一方向的可认证移动。
                幸存的多头线索持续并多长一根（新鲜的 1h 水下金叉加入 1M
                ⚡TD9 BUY、12h-近-TD9-Buy、30m/1h/1w 底背离、和一根 24h 现货
                买盘）—— 但触发是收盘口径的顶重夺、那根没印。状态：{' '}
                <em>递延 / 无仓</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">重武装触发（两腿）</span><span className="dn-lvl-v bull">1d 收回 &gt; D-EMA50 顶 $64,457（一根真的重夺）AND 一根可认证的 SM net &gt; +1k（不是伪影穿越）→ scout 多 0.2R starter</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">两腿印出时、scout 多 0.2R starter —— 单一有界 starter、无 add-leg</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1d 收 &lt; $63,057（0γ flip）—— 一根收在下方结束消化读法、把盘面交给 chase-short</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$66,564（D-EMA100）汇合、然后 $67,073（D-SMA100）</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R starter（单一、无扩张）· 在 $66.6k 汇合平半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R（示意）：</b>重武装入场 ~$64,457（顶重夺）、止损
                $63,057（flip）= ~$1,400 风险；首目标 $66,564（D-EMA100）=
                ~$2,107 回报 ≈ 1.5:1。<b>硬规则：</b>不在任何穿过 BJ 14–15 /
                15:16 feed 重同步窗的 SM 信号上重入 —— 08-10、08-11、08-12、
                08-13 与今天的读数都追溯到那根伪影、今天的&ldquo;空&rdquo;是
                早前那些假印的镜像。顶必须先在收盘上重夺；一根现货盘中弹到
                $64.5k 而日线上顶仍失守、是假启动。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · chase-short · STOOD DOWN —— γ 再扩张到 +84.96M（γ 翻负触发又走远）BUT 第一批裂缝印出（盘中 flip 插针、OI 收缩、funding 回热、待定 08-16 地板结算）</span>
              <div className="dn-trade-name">
                chase-short —— stood down 但重新盯：γ 再扩张到 +84.96M（触发又走远）、然而 08-13 盘中低插穿了 flip、OI 收缩、08-16 周地板结算两天外；它仍只在一根 1d 收穿 flip AND aggregate 翻负时上线
              </div>
              <div className="dn-thesis">
                一根空侧压需要 dealer 本子失去净多 γ AND 价格在收盘上失去
                flip。在 γ 腿上设置<em>更远了</em>：aggregate GEX 再扩张到
                +84.96M（自 +72.90M、一根 +12.06M 净台阶；strip 最重的正块
                是 15AUG26 +32.85M 块和 28AUG +15.13M、被其他 expiry 部分
                抵消）、所以本子是一本更重的正 γ 阻尼、不是在变薄的。但在
                价格腿上第一批裂缝印出：24h 低 $62,890 盘中插穿 $63,057 flip
                （16 根 K 线低点分钟在下方、7 根在现货）谱系第二次、比 08-12
                更深 —— 尽管日收 $63,456.70 收回其上 —— 且 OI 收缩 −1,470、
                funding 回热逼封顶。硬触发仍没火（收盘守住 flip；γ 是
                +84.96M 正）、所以压保持 stood down；一根 1d 收穿 flip 配
                aggregate 负会把它武装向 $60k −17.02M 崩盘 put。最近的催化
                是 08-16 周结算：若这周收在 $63,761 200W 地板下方、6 周周期
                地板连收结束、chase-short 的宏观背景转强。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">武装条件</span><span className="dn-lvl-v bear">1d 收 &lt; $63,057 flip AND aggregate GEX 翻负（当前 +84.96M 正、RE-EXPANDED —— $60k −17.02M 台得把它拉到零下很深）→ 武装空向 $60k 崩盘 put</span></div>
                <div><span className="dn-lvl-k">第一批裂缝（盯、非触发）</span><span className="dn-lvl-v bear">24h 低 $62,890 盘中插穿 flip（16 根 K 线低点分钟在下方、7 根现货；谱系第二根、比 08-12 更深）；OI −1,470（堆反转）；funding 回热到 +9.58%（4h 前 +10.88%）；retail 65.14% 新高</span></div>
                <div><span className="dn-lvl-k">待定催化</span><span className="dn-lvl-v bear">08-16 周结算对 200W $63,760.71 —— 一根周收在下方结束 6 周周期地板连收（live 现货在日口径 −0.43% 下方；未收盘周 bar 会收在其下）</span></div>
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">stood down —— 只要 flip 在收盘守住、γ 是 +84.96M 正就不做空；盘中插针 + OI 收缩 + funding 回热在 08-13 移开之后把空头盯位重新放回台面、但两根硬触发仍未火</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b>本子重新变厚成一道更重的阻尼夹钳 —— γ 走
                +72.90M（08-13）→ +84.96M（08-14）、因 15AUG +32.85M 块长大
                —— 所以现在失去 flip 在 γ 上比之前更深水下。在一本重新扩张
                的 +84.96M 正本子里、SM &ldquo;空&rdquo;是伪影、去做空一根
                在收盘守住 flip 的盘面、按 08-13 备忘用的同一纪律是过早的。
                自 08-13 起的变化在价格/杠杆侧、不在 γ 侧：盘中 flip 插针和
                OI 收缩是第一批真裂缝。等那条线在收盘（不只是盘中）破 AND
                aggregate 翻面；08-16 周地板结算是最近可能把它推翻的东西。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 失败的重夺仍在 flip 上筑底、但底在盘中低谱系第二次裂开（比 08-12 更深）· regime 维持 failed-reclaim-basing-on-the-flip、08-16 周期地板结算是待定的定夺者</span>
              <div className="dn-trade-name">
                重夺生命周期 —— 在 flip 上筑底、盘中裂开：08-07 重夺在四根收盘上失去顶、滑到日地板带下方、但每一根收盘仍守住 $63,057 flip、且 dealer 夹钳再扩张到 +84.96M —— 底在收盘上守住第四天、即便盘中低插穿了 flip
              </div>
              <div className="dn-thesis">
                08-13 备忘把 regime 定为&ldquo;failed-reclaim-basing-on-the-flip&rdquo;、
                它守住了：08-13 收 $63,456.70 守住 $63,057 flip 第四天、γ
                垫再扩张到 +84.96M、一根新鲜 1h 金叉加入 1M ⚡TD9 BUY 和底
                背离簇。变的是底在盘中低谱系第二次裂开 —— $62,890 在 16 根
                K 线低点分钟（7 根现货）交易在 flip 下方、比 08-12 更深、
                在收盘收回前 —— 同时 OI 收缩、funding 回热。仍 NOT 重夺的是
                顶：四根收在其下、现货在日地板带下方、retail 拥挤新高、MTF
                1 长 / 8 空。{' '}
                <span className="dn-em">
                  regime 读法维持 failed-reclaim-basing-on-the-flip、以
                  $63,057 flip 为收盘口径的那条线、一道重新变厚的 +84.96M
                  dealer 夹钳守着它 —— 但盘中插针和 OI 收缩是底正被从下方
                  测试、不只是磨的新鲜证据。框架盯收盘口径的 flip 和
                  aggregate γ 符号；08-16 周期地板周结算是那根可能把盘中
                  裂缝转成结构性破位的待定事件
                </span>
                。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">在 flip 上筑底（守住）</span><span className="dn-lvl-v bull">08-13 收 $63,456.70 守住 $63,057 flip 第四天；γ +72.90M → +84.96M（再扩张）；新鲜 1h 水下金叉；1M ⚡TD9 BUY + 12h-近-TD9 + 30m/1h/1w 底背离；24h 现货 CVD +5,471</span></div>
                <div><span className="dn-lvl-k">第一批裂缝（新）</span><span className="dn-lvl-v bear">24h 低 $62,890 盘中插穿 flip（16 根 K 线低点分钟在下方、7 根现货；谱系第二根、比 08-12 更深）；OI −1,470（堆反转）；funding 回热到 +9.58%；retail 65.14% 新高；期货/taker 净卖 −1,543 / −1,545</span></div>
                <div><span className="dn-lvl-k">仍重（未解）</span><span className="dn-lvl-v bear">第四根收在 D-EMA50 顶 $64,457 下方；现货在日 200W 地板 −0.43% / W-SMA200 −0.78% 下方；retail 新高；MTF 1 长 / 8 空、中段死叉又确认深一根</span></div>
                <div><span className="dn-lvl-k">最后一线 + 待定定夺者</span><span className="dn-lvl-v">$63,057 0γ flip 的收盘口径（08-13 守住；盘中插穿）+ 08-16 周期地板周结算对 $63,761（一根周收在下方结束 6 周连收）</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根在收盘守住但盘中裂开的底是一记警告、
                不是破位 —— 本篇如实记录这根 flip 插针、不埋它、但一根日收
                收回的单一盘中插针不是解决。一根失败的重夺在 flip 上筑底、
                配一本重新变厚的正 dealer 本子（+84.96M）、周期地板连收到
                08-16 前完好、也仍不是转向 —— 顶在四根收盘失守、结构重。
                $63,057 flip 的收盘口径是分开&ldquo;flip 上的底&rdquo;和
                &ldquo;向 $60k 的第一根结构性破位&rdquo;的那条线、08-16 结算
                是最近的催化。在那条线在收盘上定夺之前、两侧都不交易。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 底在收盘上守住 flip 第四天 · 但底下的结构转重（OI 收缩、funding 回热、retail 新高、盘中 flip 插针谱系第二次、比 08-12 更深）而 γ 再扩张到 +84.96M · SM &ldquo;空&rdquo;是 feed 伪影 · 本子 FLAT、两根硬触发仍未火 · 08-16 周期地板周结算是待定定夺者</span>
            </h2>

            <p>
              08-13 那张决策条件里：顶失守升级又 EXTENDED（第四根收 $63,456.70
              在顶下方、仍在日地板带下方）、但每一根收盘仍守住 flip；SM 读
              REVERSED 到表观净空 −28,076、穿过同一根 BJ 14–15 feed 重同步
              （BJ 14:51 08-13 那根 +23,187 分钟）—— 所以 NOT 一根可认证的
              smart-money 移动；scout 重入没触发（顶未重夺、无干净 SM 多）；
              flip 失守在收盘上没火（08-13 收守住 $63,057）、尽管盘中低谱系
              第二次插穿它（比 08-12 更深）；chase-short 重武装在 γ 上又走远
              （aggregate RE-EXPANDED 到 +84.96M 自 +72.90M）、即便杠杆腿朝
              空侧裂开（OI 收缩、funding 回热）。{' '}
              <em>底在收盘上守住 flip 第四天、但底下的结构转重：OI 收缩、
              funding 回热、一根新鲜 retail 高、和谱系第二根盘中 flip 插针
              （比 08-12 更深）—— 对着一道更厚的 +84.96M dealer 夹钳和一根
              新鲜 1h 金叉。结构仍重、硬触发仍未火、但天平在 08-13 移开
              之后又朝空头盯位倾。</em> 条件围绕一本平本子、一根 EXTENDED-
              但-flip-守住的顶失守、一本重新变厚的正 dealer 本子（+84.96M）、
              和一根待定的周期地板周结算重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>顶失守 EXTENDED（第四根收）但仍守住 flip</td><td className="bear">1d 收 $63,456.70 &lt; D-EMA50 顶 $64,457（连续第四根）、在日 200W 地板 $63,761 / W-SMA200 $63,982 下方 —— 但当日 +$2 且在 $63,057 flip 上方收盘</td><td>failed-reclaim 读法在顶上加深、但在 flip 上筑底第四天；本篇以底-守住-但盘中裂开领起、不过读平的收盘</td></tr>
                <tr><td>杠杆结构转 HEAVIER（OI 反转、funding 回热）</td><td className="bear">OI −1,470 BTC（−1.32%、08-13 +1,822 堆 REVERSED）；funding RE-HEATED 到 +9.58%（4h 前 +10.88%、24h 均值 +8.02%、0/1442 转负）；retail 65.14%（+0.19pt、新高）</td><td>再膨胀在 OI 上翻倒、套息转硬 —— 一本减了规模却保住多倾的本子；看空权重更重、无动作（本身非触发）</td></tr>
                <tr><td>SM &ldquo;净空&rdquo; −28,076 —— 伪影</td><td className="stale">SM net −3,457 → −28,076、但空堆里 +23,187 是单一 BJ 14:51 08-13 重同步分钟（short +23,187 / long −2,358）；尖刺前 SM 坐 −1,569；|Δ|/prior_net 7.12×（荒谬倍数）</td><td>DISCOUNT —— 一根机械 feed 尖刺、不是可认证的 smart-money 压；不把&ldquo;空&rdquo;当空头信号计权、也不读成真实仓位变化</td></tr>
                <tr><td>scout 重入（多）—— 递延、距离不变</td><td className="bull">1d 收回 &gt; D-EMA50 顶 $64,457（重夺）AND 一根可认证（非伪影）SM net &gt; +1k</td><td>scout 多 0.2R starter（单一有界 starter、无 add-leg）；目标 $66,564 / $67,073</td></tr>
                <tr><td>flip 在收盘 HELD、但盘中被 PIERCED（谱系第二根、比 08-12 更深）</td><td className="bear">1d 收 $63,456.70 &gt; $63,057（0γ flip）守住；BUT 24h 低 $62,890 在 16 根 K 线低点分钟（7 根现货）交易在 flip 下方 @ 08-13 16:44Z —— 谱系第二根盘中插针、比 08-12 更深</td><td>flip-上的底读法在收盘守住、但盘中裂缝是底正被从下方测试的新鲜证据；盯一根收在 $63,057 下方</td></tr>
                <tr><td>chase-short 重武装 —— 在 γ 上又走远、但价格裂开</td><td className="bear">1d 收 &lt; $63,057 flip AND aggregate GEX 翻负 —— 当前 +84.96M 正、RE-EXPANDED 自 +72.90M（15AUG26 +32.85M 块）；$60k −17.02M 台得把它拉到零下很深</td><td>stood down 且在 γ 上更少武装；但盘中 flip 插针 + OI 收缩 + funding 回热把空头盯位重新放回台面 —— 一根收盘破 flip 配 γ 负把它武装向 $60k</td></tr>
                <tr><td>周期地板盯位 —— 待定的定夺者</td><td className="bear">200W sma200 $63,760.71（JSON、约陈旧 96h、沿用）—— 6 根上-地板周收至 08-09；下一根结算 08-16、两天外 · live 现货在日口径 −0.43% 下方、未收盘周 bar 会收在其下</td><td>08-16 一根周收在 $63,761 下方 ENDS 6 周周期地板连收、加强 chase-short；这是最近可能把盘中裂缝转成结构性破位的催化</td></tr>
                <tr><td>reclaim-long 利率筛 —— 仍 FALSE（改善）</td><td className="bear">10Y &lt; 4.55% 收 —— 当前 4.68%（FALSE by 13bp、自 08-13 的 15bp 改善 2bp）</td><td>独立宏观筛仍 false；需要利率跌破 4.55% AND 一根 BTC 内部顶重夺才能转成 scout 多</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是{' '}
              <span className="dn-signal">
                08-16 周结算是否收在 $63,761 200W 周期地板下方（结束 6 周
                连收）且价格在收盘上失去 $63,057 flip 配 aggregate γ 翻负 ——
                那会把 chase-short 武装向 $60k −17.02M 崩盘 put —— 还是重新
                变厚的 +84.96M dealer 夹钳和守住的 flip 保住底、一根 $64,457
                上方的顶重夺终于重武装 scout 多
              </span>
              。在那之前本篇按写好的跑：本子平、顶失守 EXTENDED 到第四根
              收盘但仍守住 flip、dealer 本子再扩张成一道更重的 +84.96M 正
              夹钳、且第一批裂缝 —— 盘中 flip 插针、OI 收缩、funding 回热 ——
              在没火硬触发的情况下把空头盯位重新放回台面。SM &ldquo;空&rdquo;
              是 feed 伪影、被折价；MTF 维持 1 长 / 8 空、一根新鲜 1h 金叉
              和 1M ⚡TD9 BUY 作弹升试探；BTC 对 TradFi 落后再扩到 −3.48pt、
              因 BTC 流血而股指跑。下一个 24–48h 的对读是<em>耐心 —— 底在
              收盘守住但盘中裂开、08-16 结算是定夺者</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2 —— 已过 codex 敌对式审计
            </span>
            <b>状态：</b>这是 v2 EN 备忘的 ZH companion、在 STAGE B codex
            敌对审计（audits/2026-08-14-desk-note.md、判决 BLOCK-CRITICAL ——
            1 CRITICAL、1 MAJOR、2 MINOR、外加一根 ask-deepseek 补充重算）
            后从 v1 草稿升级。STAGE C 把每根 finding 就地应用到 EN 文件、
            并对每根跑了一轮 grep-closure（搜索关键错误主张 pattern、
            hits-before、hits-after）。<b>post codex hostile audit。</b>{' '}
            <b>DN-001（CRITICAL —— 假&ldquo;谱系首根盘中 flip 插针&rdquo;）：</b>
            pattern <code>first time</code> / <code>first of the lineage</code> /{' '}
            <code>first intraday</code> / <code>first of its kind</code> /{' '}
            <code>deepest test</code> 近插针 —— hits-before 13、hits-after 0。
            每根实例重写成&ldquo;谱系第二次盘中 flip 插针（比 08-12 更深）&rdquo;
            （08-12 已盘中插穿它的 flip：低 $63,211.6 &lt; flip $63,331；
            今天 $62,890 &lt; flip $63,057 更深）。RESOLVED。{' '}
            <b>DN-002（MAJOR —— 无支撑的&ldquo;49 分钟在 flip 下方&rdquo;）：</b>
            pattern <code>49 min</code> / <code>49 of the</code> /{' '}
            <code>49 minutes</code> 在 flip 下方 —— hits-before 6、hits-after
            0。替换成经核实的字段陈述计数：16 根 K 线低点分钟在 flip 下方
            （7 根在现货字段）、1,442 采样中。RESOLVED（幸存的 <code>49</code>
            只是 funding tile、DN-003）。<b>DN-003（MINOR —— funding 封顶
            夸大）：</b>pattern <code>touched the cap</code> /{' '}
            <code>touched it</code> / <code>49/1442 pinned</code> —— hits-before
            3（touched）+ 2（49 pinned）、hits-after 0。&ldquo;touched&rdquo; →
            &ldquo;near&rdquo;（4h 前 +10.88% &lt; +10.95% 封顶）；封顶占用
            重述为 49/1442 取整到 +10.95% 显示（47/1442 恰在原始 0.010000）。
            RESOLVED。<b>DN-004（MINOR —— 漏 W-SMA20）：</b>周矩阵里 pattern{' '}
            <code>W-SMA20</code> —— hits-before 0、hits-after 1。在 W-EMA200
            与 W-EMA150 间插入 W-SMA20 $69,104（−8.13%）。RESOLVED。{' '}
            <b>补充（ask-deepseek、已裁定、非自动应用）：</b>SM 24h 分量做成
            自洽（long −2,099 / short +22,520 / net −24,619）、分钟 long delta
            −2,359 → −2,358、尖刺前 −1,568 → −1,569；GEX 再扩张括注澄清为一根
            +12.06M 净台阶对 strip 最重正块；MTF-scan 24h H/L $63,991/$62,800
            裁定为扫描工具自己的 feed、与别处用的 live-tape 区间
            $64,010/$62,890 不同源。<b>Build note（INFO）：</b>本服务器跑
            Node 18.19.1；Next 16.2.6 在 Node &lt; 20.9.0 上硬退出、所以完整{' '}
            <code>next build</code> 被环境阻塞（谱系）；{' '}
            <code>npx --no-install tsc --noEmit</code> 是 STAGE C/E build
            proxy、在本 v2 上返回 exit 0。EN/ZH 数值平价：本 ZH companion
            与 v2 EN 带同一组数字与 caveat（零漂移）。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-08-14 00:06Z、tape 锚
            00:05Z）、provenance 在数据来源条带中按节披露；宏观 Tier-1
            面板渲染 2026-08-13 22:15Z（比快照早约 1.9h）、部分输入明确
            陈旧或不可用（MOVE 抓取失败第 5 天；JGB 月度陈旧 73d）并已标注。
            水位、规模与条件是交易台流程的示例、不是长期推荐。过去的相关性、
            γ 与仓位模式不绑定未来盘面。衍生品有全损风险、加杠杆下损失可
            超过保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                底在收盘上守住 flip 第四天、但底下的结构转重 —— OI 下来、
                funding 回热、盘中低插穿了 flip。夹钳重新变厚到 +84.96M。
                SM &ldquo;空&rdquo;是 feed 伪影。平。08-16 地板结算是那条线。
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
            v2 · 2026-08-14 00:06Z 快照 · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
