import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-12 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-12',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-12' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260812() {
  await requireViewer('/zh/desk/2026-08-12');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-12 · v2</span>
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
              <span className="dn-big">$63,564</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.60%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-08-12 00:07Z（盘面锚 00:05Z）
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-12 00:05Z 盘面锚</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 锚行 t==&ldquo;08-12 08:05&rdquo;（BJ，
                    UTC+8）= 00:05Z 日 pin；00:07Z 会话开读 · 雷已排（00:05Z
                    pin 不是 t==&ldquo;08-12 00:05&rdquo;、那会是 16:05Z 08-11 行）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-12 00:01Z scan（BJ 08:01）</td>
                  <td className="dn-flag">
                    滚动 latest 文件 · 较 00:07Z 读滞后约 6 分钟 · 含未收盘
                    K 线 · 逐字存档于 /opt/desk-note/snapshots/2026-08-12-0006
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-12 00:00Z 快照</td>
                  <td className="dn-flag">
                    较快照锚滞后约 7 分钟 · Deribit idx $63,842 对 live
                    $63,564（比 live 高 $278）· 794 合约 · IV 中位数 41.2% ·
                    12AUG26 0.3DTE −2.13M（一根负前块）今日 08:00Z 结算
                    （比这根 00:05Z 快照晚约 8h —— 仍在书上、未做结算调整）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-12 00:00Z
                  </td>
                  <td className="dn-flag">滞后约 7 分钟 · 7d 1h bar · 22 资产 · 166 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-11 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.9h · FRED Tier-1：10Y +7bp 到 4.72%
                    （EXTREME RISK-OFF、再收紧）、TIPS +3bp 到 2.43%、HY OAS
                    平 2.70%（RISK-ON）、DXY 99.81（自 08-11 +0.19）、Fed 净
                    流动性 $5.840T · MOVE 债波本次渲染待定（抓取失败、第三天）
                    · 数根 FX / 流动性行自上一根渲染不变
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-08-12 00:05Z（close $63,540.30）</td>
                  <td className="dn-flag">
                    偏移按 live 现货 $63,564.01 重算 · 全 2019–2026 wildcard
                    parquet = 363 根 W-SUN 周 bar · W-SMA200 可算、印 $63,982
                    （−0.65%、就在头顶）；所有显示的 W-SMA 都是全历史均值 ·
                    W-EMA150/200 种子敏感、按披露的种子窗报
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期地板盯位</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · sma200 $63,760.71</td>
                  <td className="dn-flag">
                    recomputed_at 2026-08-10 00:11:24Z —— 现约 48h 陈旧、
                    带过（08-09 起无新周结算、下根周收 08-16）· JSON：
                    sma200 $63,760.71、consecutive_above 6 穿 08-09 周结算
                    $64,867.80 · 慢水位
                    （约 $250/周）、按 runbook 一份数小时陈旧的 JSON 无碍 ·
                    注意 live 现货 $63,564 在日线 / 盘中口径上位于这根地板
                    下方 −0.31%、但那根 6 周地板上方连收是一根周收口径读、
                    在 08-16 结算前完好
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月度 · 不作实时</td>
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
              <span className="dn-v bear">+10.95%</span>
              <span className="dn-src">live · 原始 0.01 ×1095 = +10.95% ann、正卡在 Binance 上限 · 24h 均值 +6.56%（08-11 是 +7.95%）· 区间 +1.29% / +10.95% · 0 / 1441 采样行转负 —— live 印从一根冷到 +1.3% 的窗低重新加热回上限、把 08-11 的去杠杆腿翻回；24h 均值只是因为隔夜腿软才冷、最后一腿又热了</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+2.41% → +10.95% live（24h 均值 +6.56%）</span>
              <span className="dn-src">live 率从 08-11 备忘的 +2.41% 重新加热 +8.54pt、再次钉在上限；上一篇叫的「首根去杠杆腿」没延伸 —— carry 回到上限、进一根新鲜 OI 堆</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+2.93%（+3,113 BTC）</span>
              <span className="dn-src">live · OI 扩了、翻转两天的净缩 —— 最近 4h 加 +362.3 BTC、最近 1h 加 +66.6 BTC · 杠杆在一根 −0.60% 跌日重堆、期货在建（futCVD −2,128、bigNet −1,537）—— 一叠新鲜空、不是买盘</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">64.34 / 35.66</span>
              <span className="dn-src">live_db `mkt_long_pct` · 从 08-11 的 61.60（+2.74pt 更拥挤）· 24h 区间 60.32 / 64.51 —— retail 继续买这根 fade、拥挤到区间顶、创谱系新高</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−7,882（净空 —— 但经 BJ 15:16 feed artifact）</span>
              <span className="dn-src">live · long 14.13k − short 22.01k · 从 08-11 备忘的 +2,947 净多翻空、但这翻是 short_btc +11,735 一根 BJ 15:16 08-11（07:16Z）的单分钟跳 —— 那根反复的 feed 重同步 artifact（那分钟：long +376 / short +11,735 / net −11,358）；整 24h long 基本不动（−79）、short 加 +10,751（24h net Δ −10,830）—— 所以这不是干净认证、是 08-10 那根 artifact 穿的 roll-back 的镜像；artifact 后净空守约 17h、从 −10,596 谷（BJ 02:21）回到 −7,882</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 08-11 备忘</span>
              <span className="dn-v bear">+2,947 → −7,882（Δnet −10,829）</span>
              <span className="dn-src">24h 聚合 long −79、short +10,751、net −10,830 · 一根整翻多→空、但 +11,735 的 short 建在单根 BJ 15:16 artifact 分钟里（那分钟 long +376 / short +11,735 / net −11,358 —— 区别于 24h long −79）· |Δ|/prior_net = 10,829 / 2,947 = 3.67、比整根 prior net 还大、所以「cut fraction」是错的框架；按方向读、并把 SM 空贴 artifact-contaminated 标、不是一根干净的 smart-money 压</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.2% / 27.01%</span>
              <span className="dn-src">GEX IV 中位数 · 794 合约 · 30D close-to-close RV（logret.std ×√365 ×100、30 returns）· 链级溢价 ~+14.2pt</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+0.37%（在上方）</span>
              <span className="dn-src">flip $63,331 · 对 live 现货 $63,564（+0.37%；63,564.01/63,331 − 1 = 0.368%）/ GEX 文件 Deribit idx $63,842（+0.81%；63,842/63,331 − 1 = 0.807%、文件取整 +0.8%）—— 两参考都正、页面现货侧取 +0.37% 保 tile 一致 · aggregate GEX +38.66M（expiry-strip / gex_summary.json net_gex 口径；GEX 文件的「Total GEX / 1% move」tile 读 +22.0M、但与它自己的 by-expiry strip 及 gex_summary.json net_gex 内部不一致、后两者都合到 +38.66M —— 备忘用 footed 口径）—— 净多 γ、从 08-11 的 +45.9M 松约 16%（不是腰斩）；一道 −11.00M $62k / −19.68M $60k 架坐在 flip 下</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                08-11 备忘那条偏空路径在几乎每条腿上都赢了、只差两个硬触发
                没到、而杠杆本子又开回来了
              </span>
              。这根失败重夺没在 flip/floor 上再筑底 —— 它往下解：
              <span className="dn-tag bear">08-11 走完的收 $63,572.00</span>
              是连续第二根收在 D-EMA50 封顶（现
              <span className="dn-tag bear">$64,543</span>）下方、且在日线口径
              的 200W 地板
              <span className="dn-tag bear">$63,761</span>与 W-SMA200
              <span className="dn-tag bear">$63,982</span>下方滑过、同时仍守在
              0-γ flip 上方。盘面在这根 fade 里重新加杠杆：
              <span className="dn-signal">
                OI 扩了 +3,113 BTC（+2.93%）、翻转两天的缩
              </span>
              、funding <span className="dn-tag bear">重新加热到 +10.95%
              Binance 上限</span>（live、离一根冷到 +1.3% 的谷 —— 08-11 那根
              去杠杆腿没延伸）、retail 更拥挤到
              <span className="dn-tag bear">64.34%（+2.74pt）</span>、创谱系
              新高、在买这根跌。dealer 本子继续变薄 —— aggregate γ
              <span className="dn-tag">松约 16% 到 +38.66M</span>（从 08-11 的
              +45.9M —— 一根适度修、不是腰斩；仍深净多 γ）、flip 缓冲降到
              <span className="dn-tag bull">+0.37%</span>、下面一道
              <span className="dn-tag bear">−11.00M $62k / −19.68M $60k</span>
              负架。唯一那根偏多读被污染了：
              <span className="dn-em">SM「翻」回净空 −7,882、但那是一根
              short_btc +11,735 的单分钟跳、经那根反复的 BJ 15:16 feed
              artifact（那分钟：long +376 / short +11,735 / net −11,358）——
              整 24h long 基本不动（−79）、short 重同步 +10,751、所以 SM 空
              是 artifact-contaminated（08-11 那根干净多穿越的镜像）、不作
              一根真的 smart-money 压来加权。</span>{' '}
              <span className="dn-signal">
                仍守住线的是薄的
              </span>
              ：现货 $63,564 坐在
              <span className="dn-tag bull">$63,331 flip 上方 +0.37%</span>、
              也就在 D-SMA50
              <span className="dn-tag bull">$63,367（+0.31%）</span>上方、
              aggregate γ 仍净正（+38.66M、没翻）、周收周期地板连收（穿 08-09
              6 根上方）在 08-16 结算前完好。所以书
              <span className="dn-em">再平一根 session</span>：scout 再入场
              更远了（要一根封顶 RECLAIM 且 SM 多 —— 两条腿现在都不过）、
              chase-short
              <span className="dn-em">在杠杆 / 结构侧更硬、但仍站边</span> ——
              它只在一根 1d 收穿 $63,331 flip 且 aggregate γ 翻负时武装、
              朝 $60k −19.68M 崩盘 put。
            </p>

            <p>
              BTC 印 <span className="dn-tag">$63,564</span> live、
              <span className="dn-tag bear">−0.60%</span> 在 24h（现货
              63,564.01 对 08-11 08:05 BJ 的 24h 前行 63,944.50）—— 连续第三
              根软印、比 08-11 的 −1.47% 浅。24h 形状是一根探封顶然后滑到
              地板下：高
              <span className="dn-tag">$64,475.59 @ BJ 20:14 08-11
              （12:14Z）</span> —— 逼近但没重夺 D-EMA50 封顶 $64,543 ——
              然后 fade 到低
              <span className="dn-tag">$63,248.53 @ BJ 03:15 08-12（19:15Z
              08-11）</span>、盘中刺穿 $63,331 flip 后又收回。承重的结构性
              事实是封顶丢延伸：日收
              <span className="dn-tag">08-08 $64,928.50</span>、
              <span className="dn-tag">08-09 $64,867.80</span>、
              <span className="dn-tag bear">08-10 $63,939.30</span>
              （首根收在封顶下方）、
              <span className="dn-tag bear">08-11 $63,572.00</span>
              （第二根收在下方、且在日线口径的 200W 地板 / W-SMA200 下方）、
              08-12 未收盘 $63,540.30 跟着它。
              <span className="dn-em">
                两根收丢了封顶、第二根滑到地板带下；从 08-07 跑起来的重夺
                不只是停滞、它在往下渗。
              </span>{' '}
              现货现在坐在一道薄的约 $230 支撑架 —— D-SMA50
              <span className="dn-tag bull">$63,367（+0.31%）</span>与 0-γ
              flip <span className="dn-tag bull">$63,331（+0.37%）</span>就在
              下面 —— 而重夺过的水位现在成了头顶：200W 地板
              <span className="dn-tag bear">$63,761（−0.31%）</span>、W-SMA200
              <span className="dn-tag bear">$63,982（−0.65%）</span>、D-SMA20
              <span className="dn-tag bear">$64,080（−0.81%）</span>、D-EMA20
              <span className="dn-tag bear">$64,112（−0.86%）</span>、及
              D-EMA50 封顶
              <span className="dn-tag bear">$64,543（−1.52%）</span>。下一根
              真头顶不变且远在上方：D-EMA100
              <span className="dn-tag bear">$66,692（−4.69%）</span>合流、
              这根磨从没测过。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · OI 扩 +3,113 BTC（杠杆回开）· funding 重新加热到 +10.95% 上限 · retail 拥挤 +2.74pt 到 64.34% · SM「翻」净空 −7,882 但经 BJ 15:16 feed artifact（那分钟 short +11,735 / long +376；24h long 平 −79）—— 打折</span>
            </h2>

            <p>
              <span className="dn-signal">
                杠杆本子在这根 fade 里回开了 —— 一根重新加杠杆的空、不是
                一根底
              </span>
              。OI 扩了
              <span className="dn-tag bear">+3,113 BTC（+2.93%）</span>跨 24h、
              翻转 08-11 备忘追的那两天缩、而且是建进快照（最近 4h +362.3、
              最近 1h +66.6）。这堆是一个期货现象：24h 窗内期货 CVD 跑
              <span className="dn-tag bear">Δ −2,128.2</span>、大单
              <span className="dn-tag bear">−1,537 BTC 跨 890 单</span>、对一档
              温和现货买盘 —— 所以这批新鲜未平仓是 perp 里的主动卖、也就是
              价格 fade 时叠上的一叠空、不是需求。retail 靠向拥挤、危险的
              一边：mkt_long_pct <span className="dn-tag bear">64.34%</span>
              从 08-11 的 61.60%（+2.74pt）、24h 区间 60.32 / 64.51 —— 人群
              继续买跌、拥挤到谱系新高、价格在滑。{' '}
              <span className="dn-em">
                SM「翻」回净空必须用 08-11 备忘对它那根干净多穿越的同一份
                怀疑来读、反过来：SM net 是 −7,882（long 14,132 − short
                22,015）对 08-11 备忘的 +2,947、Δnet −10,829、但 +11,735 的
                short 印在单根 BJ 15:16 08-11（07:16Z）分钟里 —— 那根反复的
                feed 重同步 artifact（那分钟 long 走 +376、short +11,735、net
                −11,358）—— 而整 24h long_btc 基本不变（14,211 → 14,132、
                −79）、short 加 +10,751。cut fraction 是错的框架
                （|Δ|/prior_net = 3.67、比整根 prior net 还大）；诚实读法是
                short_btc 序列往上重同步、net 机械地转空、不是 smart money
                叠了一根真空。artifact 后读数守净空约 17h、从 −10,596 谷
                （BJ 02:21 08-12、18:21Z 08-11）回到 −7,882、随空掉约 1.1k、
                多在快照前重建。
              </span>{' '}
              所以交易台不倚 SM 空作偏空信号 —— 真的偏空线是 OI、funding、
              flow、retail 和 dealer 本子。
            </p>

            <p>
              杠杆侧是那根响的告知。
              <span className="dn-signal">
                funding 一路重新加热回 Binance 上限
              </span>
              ：live <span className="dn-tag bear">+10.95% ann</span>（原始
              0.01 × 1095、硬上限）、24h 均值
              <span className="dn-tag">+6.56%</span>（从 08-11 备忘的 +7.95%
              降、因为隔夜腿软）、区间
              <span className="dn-tag">+1.29% / +10.95%</span>、且
              <span className="dn-tag bear">0 / 1441 采样行转负</span> ——
              多头每一分钟都付空头、live 印从一根冷到 +1.3% 的谷再次钉上限。
              08-11 备忘的「首根真去杠杆腿」没延伸；carry 回到天花板、进一根
              新鲜 OI 堆、经典的拥挤多付费持仓的形态。OI Δ
              <span className="dn-tag bear">+3,113 BTC（+2.93%）</span> ——
              杠杆在重堆、不是在放气。perp 在快照对现货
              <span className="dn-tag bear">−$64.98 折价</span>（1h 均
              −$59.81、4h 均 −$60.93、24h 均 −$64.17、区间 −$117.89 / −$14.11
              —— 一根持续的深折价、basis 整 24h 从没转升水）。1 分钟
              aggressor skew 快照
              <span className="dn-tag bear">−7.5</span>（1h 均 −9.30、区间
              −25.5 / +7.3）—— 一档温和卖倾斜、没超卖反射买盘。
              <span className="dn-em">
                funding 钉在上限 + OI 在跌日扩 + 一根深且持续的 perp 折价 +
                retail 拥挤新高而期货卖这堆：杠杆本子在空侧往破位里再充气、
                跟 08-11 备忘读的放气相反。唯一那条建设性线 —— SM 翻多 ——
                被 feed artifact 重新吃掉了。
              </span>
            </p>

            <p>
              窗口流向读<em>一根重新加杠杆的 fade —— OI 在期货卖里堆、一根薄
              现货买盘从没抬起价格</em>。24h：价格
              <span className="dn-tag bear">−0.60%</span>、OI
              <span className="dn-tag bear">+3,113.1 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +1,106.5</span>（窗内无 cb_cvd
              reset —— 已核）、期货 CVD
              <span className="dn-tag bear">Δ −2,128.2</span>、大单
              <span className="dn-tag bear">−1,537 BTC / 890 单</span>、
              taker-net <span className="dn-tag bear">−2,128.2</span>{' '}
              <span className="dn-em">（taker-net 和按构造等于期货 CVD Δ ——
              fut_cvd 是 taker_net 的滚动 cumsum）</span> ——{' '}
              <span className="dn-em">
                一档小的被吸收现货买盘对重期货和大单卖、而 OI 扩了；这批
                未平仓是新鲜空、不是一根需求堆
              </span>
              。4h（进快照）：价格
              <span className="dn-tag bear">−0.13%</span>、OI
              <span className="dn-tag bear">+362.3 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −297.6</span>、期货 CVD
              <span className="dn-tag bear">Δ −617.9</span>、大单
              <span className="dn-tag bear">−197.6 BTC</span>、taker-net
              <span className="dn-tag bear">−617.9</span> ——{' '}
              <em>现货和期货都给盘而 OI 仍长 —— 空在进快照里加</em>。1h：价格
              <span className="dn-tag bear">−0.00%</span>、OI
              <span className="dn-tag bear">+66.6 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −219.6</span>、期货 CVD
              <span className="dn-tag bull">Δ +10.2</span>、大单
              <span className="dn-tag bear">−19.5 BTC</span>、taker-net
              <span className="dn-tag bull">+10.2</span> ——{' '}
              <em>价格平、现货给盘、期货一丝买 —— 一根安静的平衡进快照、OI
              仍在往上滴</em>。关键是形状：不像 08-11 那根近低被吸收的现货
              买盘、今天 OI 每个窗都在期货卖里长 —— 仓位本子在往 fade 里加
              空敞口、现货买盘又薄又在输。{' '}
              <span className="dn-em">
                （4h 和 1h 块是从上一根边界行量起的累计 Δ —— BJ 04:05 →
                08:05 与 07:05 → 08:05 —— 这些序列的滚动 cumsum 惯例；精确
                时钟窗差几个 BTC 的 OI 和 CVD。）
              </span>
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 仍偏空 —— 12h / 1d 水上死叉现已确认（进 1 bar）、8h 死叉 5b、regime 5/9 cycle-reversal · 只有 HTF 底背离簇（12h/1w）+ 1M ⚡TD9 BUY 偏上 · 封顶丢第二根收、现货滑到地板带下</span>
            </h2>

            <p>
              <span className="dn-signal">
                08-11 备忘标为新鲜的中书死叉、进一根 bar 后确认了
              </span>
              。08-11「刚印」的 12h 和 1d 水上死叉现在是
              <span className="dn-tag bear">1 bar 前</span>（12h DIF +66.6、
              1d DIF +45.6 —— 仍是水上的早叉）、8h 带一根
              <span className="dn-tag bear">水上死叉 5b</span>、快周期仍在下
              —— 1h 水下死叉 9b（RSI 38.7、云下）、4h 水上死叉 19b（RSI 35.7、
              云下）、15m / 30m 名义水下金叉但云下、RSI 低 40。头部净读是
              <em>「1 多 / 9 空 · 空头共振、卖反弹」</em>、regime
              <span className="dn-tag bear">5/9 cycle-reversal（JT&lt;0）——
              均值回归 / 反弹强、trend-follow 谨慎</span>（从 08-11 备忘的
              6/9）。仍偏上的是同一根薄、更高 TF 集：
              <span className="dn-tag bull">HTF 底背离簇在 12h / 1w</span>
              熬着（现是一根 4 frame 底背离 15m/30m/12h/1w 的一部分）、1w
              仍是一根 <span className="dn-tag bull">水下金叉 3b</span>、
              <span className="dn-tag bull">1M ⚡TD9 BUY（印于 $63,554）</span>
              还在；对着它一根顶背离簇盖住中书在
              <span className="dn-tag bear">1h / 4h / 8h</span>。{' '}
              <span className="dn-em">
                直读：结构把封顶破再确认深了一根 bar。中书（8h/12h/1d）现在
                死叉带确认、regime 标仍 reversal、只有最慢的几根周期和一根
                底背离簇让一个反弹案子活着。这仍是一根失败重夺磨它地板的
                指纹、不是一根底在建。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,557</td><td className="num">44.7</td><td className="neut">金叉（水下）17b</td><td className="bear">云下 ↑63.8k 38b</td><td>Sell 1</td><td>BULL reg</td></tr>
                <tr><td>30m</td><td className="num">63,557</td><td className="num">41.1</td><td className="neut">金叉（水下）6b</td><td className="bear">云下 ↑64.1k 22b</td><td>Buy 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">63,554</td><td className="num">38.7</td><td className="bear">死叉（水下）9b</td><td className="bear">云下 ↑64.5k 35b</td><td>Buy 1</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">63,554</td><td className="num">35.7</td><td className="bear">死叉（水上）19b</td><td className="bear">云下 ↑63.8k 3b</td><td>Buy 4</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>8h</td><td className="num">63,554</td><td className="num">40.4</td><td className="bear">死叉（水上）5b</td><td className="neut">云内 63.5k–64.6k 1b</td><td>Buy 6</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>12h</td><td className="num">63,554</td><td className="num">43.1</td><td className="bear">死叉（水上）1b</td><td className="bear">云下 ↑64.1k 1b</td><td>Buy 4</td><td>BULL reg</td></tr>
                <tr><td>1d</td><td className="num">63,554</td><td className="num">46.2</td><td className="bear">死叉（水上）1b</td><td className="neut">云内 62.7k–67.0k 23b</td><td>Buy 3</td><td>BULL hid</td></tr>
                <tr><td>3d</td><td className="num">63,554</td><td className="num">44.2</td><td className="neut">—</td><td className="bear">云下 ↑75.8k 24b</td><td>Sell 1</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,554</td><td className="num">39.5</td><td className="bull">金叉（水下）3b</td><td className="bear">云下 ↑85.9k 28b</td><td>Buy 1</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">63,554</td><td className="num">43.6</td><td className="neut">—</td><td className="bull">云上 ↓47.4k 30b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（BJ 08:01；滚动
                    latest 文件；逐字存档于
                    /opt/desk-note/snapshots/2026-08-12-0006）。头部告警：
                    <em>12h 水上死叉（1 bar 前）、DIF +66.6 —— 一根早死叉</em>、
                    <em>1d 水上死叉（1 bar 前）、DIF +45.6</em>、
                    <em>1M ⚡TD9 BUY 印于 $63,554</em>、<em>⚠ HTF 底背离簇
                    （12h/1w）</em>。扫描现货 $63,554、24h −0.57%、24h H/L
                    $64,470 / $63,212、qVol $6.77B（00:01Z MTF 扫描；live-tape
                    锚在 00:05Z 同窗读现货 $63,564、24h −0.60% —— 约 4 分钟差
                    解释这点偏差）。收盘为未收盘 K 线；每个值在各周期收盘前
                    都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认封顶丢延伸和变薄的支撑架。现货 $63,564 坐在
              <span className="dn-tag bear">D-EMA50 封顶 $64,543 下方
              −1.52%</span>、在整根重夺过的簇下方 ——
              <span className="dn-tag bear">D-EMA20 $64,112（−0.86%）</span>、
              <span className="dn-tag bear">D-SMA20 $64,080（−0.81%）</span>、
              <span className="dn-tag bear">W-SMA200 $63,982（−0.65%）</span>、
              <span className="dn-tag bear">200W 地板 $63,761（−0.31%、
              日线口径）</span> —— 下面只一道薄架：
              <span className="dn-tag bull">D-SMA50 $63,367（+0.31%）</span>与
              <span className="dn-tag bull">0γ flip $63,331（+0.37%）</span>、
              flip 前大约 $200 支撑。簇上方、不变且远在外：
              <span className="dn-tag bear">D-EMA100 $66,692（−4.69%）</span>
              （最近的真头顶合流）、
              <span className="dn-tag bear">D-SMA100 $67,427（−5.73%）</span>、
              <span className="dn-tag bear">W-EMA200 $68,525（−7.24%；种子）</span>、
              <span className="dn-tag bear">W-EMA20 $68,466（−7.16%）</span>、
              <span className="dn-tag bear">W-SMA20 $69,107（−8.02%）</span>、
              <span className="dn-tag bear">D-SMA150 $69,206（−8.15%）</span>、
              <span className="dn-tag bear">D-EMA150 $69,332（−8.32%）</span>、
              <span className="dn-tag bear">D-SMA200 $69,752（−8.87%）</span>、
              <span className="dn-tag bear">D-EMA200 $72,020（−11.74%）</span>、
              <span className="dn-tag bear">W-EMA150 $73,842（−13.92%；种子）</span>、
              <span className="dn-tag bear">W-SMA150 $77,119（−17.58%）</span>、
              <span className="dn-tag bear">W-EMA50 $77,255（−17.72%）</span>、
              <span className="dn-tag bear">W-EMA100 $78,475（−19.00%）</span>、
              <span className="dn-tag bear">W-SMA50 $82,465（−22.92%）</span>、
              <span className="dn-tag bear">W-SMA100 $88,706（−28.34%）</span>。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-08-12 00:05Z（close
                $63,540.30）；偏移按 live 现货 $63,564.01 重算。显示的 MA
                水位按 $ 取整、偏移用精确序列值算。全 2019–2026 wildcard
                parquet 有 363 根 W-SUN 周 bar、所以 W-SMA200 可算 —— 印
                $63,982（−0.65%、就在头顶）、每一根显示的 W-SMA 都是全历史
                均值。（这根 parquet W-SMA200 与 trap-watch 周期地板 sma200
                $63,761 不同、后者按 JSON 自己的周口径算。）W-EMA150 $73,842
                （−13.92%）与 W-EMA200 $68,525（−7.24%）种子敏感、按披露的
                种子窗报、不是全 adjust 重算。日线收盘：08-07 $64,885.40、
                08-08 $64,928.50、08-09 $64,867.80、08-10 $63,939.30、08-11
                $63,572.00（第二根走完的收在 D-EMA50 封顶下方、且在日线口径
                的 200W 地板 / W-SMA200 下方）、08-12（未收盘）$63,540.30。
                另外、200W 周期地板（trap-watch JSON 的 sma200 $63,760.71、
                recomputed 2026-08-10 00:11:24Z、现约 48h 陈旧、带过 —— 08-09
                起无新周结算）仍显示 6 根地板上方周收穿 08-09 结算 $64,867.80
                （+1.74% 净上）；这根连收是一根周收口径读、在 08-16 结算前
                完好、即便 live 现货 $63,564 在日线口径上位于地板下方 −0.31%。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · γ 松约 16% 到 +38.66M（仍深净多）· flip $63,331（现货在上方 +0.37%）· $64.5k +14.42M 墙头顶、−11.00M $62k / −19.68M $60k 架在下 · 12AUG 0DTE −2.13M（负前）在 08:00Z 结算 · 最重墙 $70k +17.80M</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子仍深净多 γ；缓冲适度松了、不是往 flip 塌
              </span>
              。aggregate GEX 是
              <span className="dn-tag bull">+38.66M / 1%</span>（expiry-strip
              / gex_summary.json net_gex 口径；GEX 文件的「Total GEX / 1%
              move」tile 读 +22.0M、但与它自己的 by-expiry strip 及
              gex_summary.json 冲突、后两者都合到 +38.66M —— 备忘用 footed
              口径）—— 净多 γ（阻尼）、从 08-11 备忘的 +45.9M 松约 16%；那根
              急降是 08-10 的 +111.3M → 08-11 的 +45.9M（大致腰斩）、而
              08-11 → 08-12 只是一根适度修、不是第二次塌 —— 本子仍是一根
              可观的正 γ 阻尼器。0-γ flip 坐
              <span className="dn-tag">$63,331</span>、现货 $63,564 在
              <span className="dn-tag bull">flip 上方 +0.37%</span>（现货口径
              63,564.01 / 63,331 − 1 = +0.368%）；GEX 文件自己的「dist to
              flip」读 +0.8%、对它的 Deribit idx $63,842（比 live 现货高
              $278）算 <span className="dn-tag bull">+0.81%</span>（63,842 /
              63,331 − 1 = +0.807%）—— 两参考都正、但缓冲又从 08-11 的
              +0.73% / +1.18% 变薄、24h 低 $63,248 已盘中刺穿 flip。墙图绕
              一根坐在正头顶带下方的现货是两侧：头顶
              <span className="dn-tag bull">$70k +17.80M</span>（最重墙）、
              <span className="dn-tag bull">$64.5k +14.42M</span>（一根正墙
              就在现货上）、
              <span className="dn-tag bull">$65k +11.75M</span>、
              <span className="dn-tag bull">$66k +10.90M</span>、
              <span className="dn-tag bull">$68k +10.75M</span>、
              <span className="dn-tag bull">$67k +10.29M</span>、
              <span className="dn-tag bull">$80k +7.77M</span>、
              <span className="dn-tag bull">$72k +7.34M</span>；在现货处及
              下方是负架 ——
              <span className="dn-tag bear">$62k −11.00M</span>与
              <span className="dn-tag bear">$60k −19.68M</span>崩盘 put 残余、
              一道 <span className="dn-tag bear">−30.68M</span> 负架在盘下。{' '}
              <span className="dn-em">
                要紧的结构：08-11 备忘标的那根 $64k 负墙重新定价了 —— 一根
                $64.5k +14.42M 正墙现在就在头顶盖着、而负值集中到了 $60k/$62k
                架。所以 dealer 在现货上方就是长 γ（阻尼一根弹向封顶）、在
                $60k–$62k 短 γ（加速一根破 flip）。$64.5k–$72k 正带（含 $70k
                +17.80M 墙）仍合计约 +83.3M 头顶供给盖住一根挤压；地板缓冲
                现在是 $60k/$62k 负架、所以一根丢 $63,331 flip 会被 dealer
                朝 $60k 加速。
              </span>{' '}
              12AUG26 0.3DTE 是 <span className="dn-tag bear">−2.13M</span>
              （一根小负前块）、今日 08:00Z 结算 —— 比这根 00:05Z 快照晚约
              8h、所以仍在书上（未做结算调整）；结算后把它移掉会把 aggregate
              抬到大约 +38.66M − (−2.13M) = +40.79M。前向 expiry 超前端：
              13AUG 1.3 +3.79M、14AUG 2.3 −2.83M、15AUG 3.3 +1.63M、21AUG
              9.3 +7.73M、28AUG 16.3 +14.14M（最重）、25SEP 44.3 +10.59M、
              30OCT 79.3 +0.66M、25DEC 135.3 +3.29M、26MAR27 226.3 +1.11M、
              25JUN27 317.3 +0.68M。{' '}
              <span className="dn-em">
                前向 expiry 上没有一根大负放大器 —— 两根近端负（12AUG
                −2.13M、14AUG −2.83M）都小 —— 但这条 strip 比 08-11 适度更少
                净多 γ、不过它仍深净多 γ —— 缓冲松约 16%、没塌。
              </span>
            </p>

            <p>
              IV 中位数横跨 794 合约是
              <span className="dn-tag">41.2%</span>对 30D close-to-close RV
              <span className="dn-tag">27.01%</span> —— 链级溢价
              <span className="dn-tag">~+14.2pt</span>。是 N 合约的链中位数、
              <span className="dn-em">不是</span>可交易价差；expiry- /
              strike-level vega、skew、期限结构仍未载入、vol 读法保持
              framework only。RV 方法：30D close-to-close、logret.std × √365
              × 100、用最末 30 根日 log return、锚自 parquet 最末 bar
              2026-08-12 00:05Z（30-return 值 27.01%；29-return 备选读
              22.78%）。Put/Call 比 0.57、put OI 120,618 BTC、call OI
              213,010 BTC —— 仍一本 call-heavy 书、与净多 γ 读一致、即便
              aggregate 松约 16%。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 利率再收紧 —— 10Y +7bp 到 4.72%（EXTREME RISK-OFF）、TIPS +3bp 到 2.43% · 信用仍 RISK-ON（HY OAS 平 2.70%）· DXY 更硬 99.81 · MOVE 待定（第三天）· reclaim-long 利率筛在 17bp 仍 FALSE（更差）· BTC 对 TradFi 落后基本收到 −0.09pt、因为整个风险盘都软了</span>
            </h2>

            <p>
              <span className="dn-signal">
                利率又回抬 —— 宏观逆风在一天松后再收紧
              </span>
              。面板渲染 2026-08-11 22:15Z、比快照早约 1.9h（利率行已更新；
              数根 FX / 流动性行自上一根渲染不变）。US 10Y nominal
              <span className="dn-tag bear">4.72%（+7.0bp）</span>、regime z
              <span className="dn-tag bear">+2.34</span>、偶发 z
              <span className="dn-tag">+1.34</span> —— EXTREME RISK-OFF、从
              08-11 备忘的 4.65% 再收紧 +7bp（交回那根松）。10Y TIPS real
              <span className="dn-tag bear">2.43%（+3.0bp）</span>、regime z
              <span className="dn-tag bear">+2.45</span> —— 仍 EXTREME
              RISK-OFF、更硬。5Y5Y BE 通胀
              <span className="dn-tag">2.33%（+5.0bp）</span>、偶发 z
              <span className="dn-tag bear">+2.16</span> —— 更硬。HY OAS
              <span className="dn-tag bull">2.70%（0.0bp）</span>、regime z
              <span className="dn-tag bull">−1.09</span>、偶发 z
              <span className="dn-tag bull">−0.74</span> —— RISK-ON、信用仍
              平静、当日平。MOVE 债波
              <span className="dn-tag stale">待定</span>本次渲染（抓取失败、
              第三天）。DXY
              <span className="dn-tag bear">99.81（自 08-11 +0.19）</span>、
              偶发 z <span className="dn-tag bull">−1.43</span> —— 更硬。
              Fed 净流动性
              <span className="dn-tag">$5.840T（+0.014T）</span>、偶发 z
              <span className="dn-tag bear">+2.47</span>。US-JP 10Y 利差
              <span className="dn-tag bear">2.05%（+7.0bp）</span>；USD/JPY
              <span className="dn-tag bear">159.29（+0.14）</span>（日元更弱）。
              NFCI −0.529（松、陈旧 11d）。
              <span className="dn-em">
                净：reclaim-long 利率筛（10Y &lt; 4.55%）在 4.72% FALSE ——
                在错侧 17bp、比 08-11 备忘的 10bp 更差、10Y 再收紧了。利率
                回到做结构性逆风（10Y 与 TIPS 都 EXTREME RISK-OFF、更硬）、
                但信用仍 RISK-ON、所以宏观盘是逆风、不是这根破位的急性驱动
                —— 破位仍是仓位与结构驱动。BTC 对 TradFi 脱钩本印基本收到
                −0.09pt（BTC −0.66% vs NQ −0.57% 在 7d）、从 08-11 的
                −2.05pt —— 但它收错了向、因为整个风险盘在这道滚动窗上都软了
                （NQ 转 7d 负）、BTC 只是跟着一起低、不是因为 BTC 跑赢。
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
                <tr><td>US 10Y nominal</td><td className="num">4.72%</td><td className="num bear">+7.0bp</td><td className="num bear">+2.34</td><td className="num">+1.34</td><td className="bear">EXTREME RISK-OFF · 再收紧</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.43%</td><td className="num bear">+3.0bp</td><td className="num bear">+2.45</td><td className="num">+0.98</td><td className="bear">EXTREME RISK-OFF · 更硬</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.33%</td><td className="num bear">+5.0bp</td><td className="num">+1.58</td><td className="num bear">+2.16</td><td className="neut">无标 · 偶发</td></tr>
                <tr><td>HY OAS</td><td className="num">2.70%</td><td className="num">0.0bp</td><td className="num bull">−1.09</td><td className="num bull">−0.74</td><td className="bull">RISK-ON · 信用平静</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.529</td><td className="num">+0.00</td><td className="num">−0.65</td><td className="num bull">−1.00</td><td className="stale">松 · 陈旧 11d</td></tr>
                <tr><td>MOVE 债波</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">本次渲染待定（第三天）</td></tr>
                <tr><td>DXY</td><td className="num">99.81</td><td className="num bear">+0.19*</td><td className="num">+0.74</td><td className="num bull">−1.43</td><td className="bear">更硬 · 紧 regime（*对 08-11）</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.840T</td><td className="num">+0.014T</td><td className="num">−0.70</td><td className="num bear">+2.47</td><td className="neut">小周度堆</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.29</td><td className="num bear">+0.14</td><td className="num">+0.68</td><td className="num bull">−0.97</td><td className="bear">日元更弱</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">2.05%</td><td className="num bear">+7.0bp</td><td className="num">−0.13</td><td className="num">+1.34</td><td className="neut">中性</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7365</td><td className="num">−0.01</td><td className="num bull">−1.41</td><td className="num bull">−1.63</td><td className="neut">无标 · 松</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.29%</td><td className="num bear">+4.0bp</td><td className="num bull">−0.45</td><td className="num bear">+1.94</td><td className="neut">无标 · 偶发</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月度）</td><td className="num bear">+2.42</td><td className="num">+1.09</td><td className="stale">月度 · 陈旧 71d · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、166 rows、汇总 00:00Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.207</span>
              （IDIOSYNCRATIC 区段、&lt; 0.25 —— 较 08-11 备忘的 0.211 基本
              平）。BTC 列出的对齐：NQ
              <span className="dn-tag">+0.360</span>（顶）、GOLD
              <span className="dn-tag">+0.312</span>、COPPER
              <span className="dn-tag">+0.294</span>、SP500
              <span className="dn-tag">+0.290</span>、BRENT
              <span className="dn-tag">−0.279</span>、PLAT
              <span className="dn-tag">+0.263</span>、SILVER
              <span className="dn-tag">+0.251</span>、CL
              <span className="dn-tag">−0.224</span>、JP225
              <span className="dn-tag">+0.214</span>、PALL
              <span className="dn-tag">+0.203</span>、AAPL
              <span className="dn-tag">+0.192</span>、NVDA
              <span className="dn-tag">+0.167</span>、TSLA
              <span className="dn-tag">+0.165</span>。7d 相对表现：
              <span className="dn-tag bear">BTC −0.66%</span>、NQ
              <span className="dn-tag bear">−0.57%</span>、SP500
              <span className="dn-tag bear">−0.31%</span>、JP225
              <span className="dn-tag bull">+1.65%</span>、NVDA
              <span className="dn-tag bull">+0.73%</span>、META
              <span className="dn-tag bull">+1.72%</span>、MSFT
              <span className="dn-tag bull">+2.42%</span>、TSLA
              <span className="dn-tag bull">+2.23%</span>、GOOGL
              <span className="dn-tag bear">−8.68%</span>（大落后）、AMZN
              <span className="dn-tag bear">−2.15%</span>、AAPL
              <span className="dn-tag bear">−1.69%</span>。金属 / 能源领头：
              SILVER <span className="dn-tag bull">+8.37%</span>（领头）、GOLD
              <span className="dn-tag bull">+7.05%</span>、URNM
              <span className="dn-tag bull">+5.05%</span>、PALL
              <span className="dn-tag bull">+1.60%</span>、PLAT
              <span className="dn-tag bull">+0.65%</span>、COPPER
              <span className="dn-tag bull">+0.71%</span>；能源
              BRENT <span className="dn-tag bull">+10.65%</span>、CL
              <span className="dn-tag bull">+9.46%</span>、NGAS
              <span className="dn-tag bull">+3.56%</span>。{' '}
              <span className="dn-em">
                BTC 的 7d 落后对 TradFi 引擎基本收到约 −0.09pt（BTC −0.66%
                vs NQ −0.57%）、从 08-11 的 −2.05pt —— 但它收错了向：NQ 在
                这道滚动窗上转负、BTC 只是跟着一起低、所以这根「收敛」是一根
                软化的风险盘、不是 BTC 强。贵金属和能源是唯一的 7d 领头。
                内生于 crypto 仍是承重读法：在 |r| 0.207 盘面没在推 BTC、
                仓位与结构在推。
              </span>{' '}
              JGB 月度 2.67% 带一根 EXTREME RISK-OFF 月度标（陈旧 71d）——
              不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 本子 FLAT（继续平）· scout 再入场更远 —— 两条腿现在都不过（封顶丢第二根收、SM「空」是 artifact）· chase-short 在杠杆侧更硬但仍站边（dealer 本子仍是一根可观的 +38.66M 正 γ 阻尼器）—— 只在一根 1d 收穿 $63,331 flip 且 aggregate γ 翻负时武装</span>
            </h2>

            <p>
              <span className="dn-signal">
                书是平的、继续平 —— 但天平往账本的空侧移了
              </span>
              。08-11 备忘把 scout 再入场卡在一根封顶 RECLAIM（1d 收回 &gt;
              D-EMA50）AND SM 仍净多、把 chase-short 卡在一根 1d 收穿
              flip/floor AND aggregate γ 翻负。今天两条 scout 腿都往错的向
              动：封顶在第二根收上丢了（$63,572）、SM「多」把自己吃回进
              BJ 15:16 feed artifact（net −7,882、但 artifact 驱动；那分钟
              long +376 / short +11,735、24h long 平 −79）。所以 scout 再
              入场<em>更</em>远了、不是更近。chase-short 是那根变硬的交易：
              08-11 收滑到日线口径的 200W 地板和 W-SMA200 下方、OI 在期货
              卖里扩、funding 钉上限、retail 拥挤新高 —— 不过 dealer 本子
              仍是一根可观的 +38.66M 正 γ 阻尼器、所以那根 γ 翻转触发不近。{' '}
              <span className="dn-em">
                但两个硬触发仍没到：08-11 收 $63,572 在收盘口径上守在
                $63,481/$63,331 flip 上方（24h 低只盘中刺穿）、aggregate γ 是
                +38.66M —— 正、还没翻。空一根仍在收盘上守 flip 的盘、带一本
                仍可观的正 dealer 书、按 08-11 备忘对多用的同一份纪律是过早。
                所以 chase-short 是武装待命、不是活的。
              </span>{' '}
              这根快照无新仓；交易台等 $63,331 flip 在一根收盘上破 AND
              aggregate 翻负、才压空。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout 再入场 · 递延 · 更远 —— 封顶丢第二根收、且 SM 多吃回进 feed artifact</span>
              <div className="dn-trade-name">
                回补反弹 scout 再入场 —— 递延且在走远；封顶在第二根收上丢了、08-11 唯一那条建设性腿的 SM「多」经 BJ 15:16 artifact 又穿回空
              </div>
              <div className="dn-thesis">
                08-11 的再入场需要一根封顶 RECLAIM 且 SM 仍多。现在两者都
                不成立。重夺没发生 —— 24h 高 $64,475 探但没重夺 D-EMA50 封顶
                $64,543、08-11 收 $63,572 是第二根收在它下方。08-11 触发的
                那根 SM 腿（一根干净净多穿越）经那根反复的 BJ 15:16 feed
                artifact 反转回空（net −7,882、但 +11,735 的 short 建在一根
                artifact 分钟里 —— 那分钟 long +376 / short +11,735 / net
                −11,358、24h long 平 −79）、所以没有可认证的 SM 多可倚。仍
                存活的偏多线只有 HTF 底背离簇（12h/1w）、1M ⚡TD9 BUY 和一档
                薄被吸收现货买盘 —— 不够触发。状态：<em>递延 / 无仓位</em>。
                scout 在再武装前需要封顶在一根收盘上被 RECLAIM AND 一根可
                认证（非 artifact）的 SM 多。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">再武装触发（两腿）</span><span className="dn-lvl-v bull">1d 收回 &gt; D-EMA50 封顶 $64,543（一根真重夺）AND 一根可认证 SM net &gt; +1k（非 artifact 穿）→ scout long 0.2R starter</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">两腿印出时、scout long 0.2R starter —— 一根有界 starter、无加仓腿</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1d 收 &lt; $63,331（0γ flip）—— 一根收在下方结束消化读法、把盘交给 chase-short</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$66,692（D-EMA100）合流、然后 $67,427（D-SMA100）</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R starter（单根、无扩张）· 在 $66.7k 合流平半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R（示例）：</b>再武装入场 ~$64,543（封顶重夺）、止损
                $63,331（flip）= ~$1,212 风险；首目标 $66,692（D-EMA100）=
                ~$2,149 回报 ≈ 1.8:1。<b>硬规则：</b>不要在任何穿过 BJ 14–15 /
                15:16 feed artifact 窗的 SM 信号上再入场 —— 08-10 和 08-12
                的空读、以及一根镜像假多的风险、都溯到那根重同步。封顶必须
                先在一根收盘上被重夺；一根盘中弹到 $64.5k 而日线封顶仍丢是
                假启动。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · chase-short · 更硬但仍站边（flip 在收盘上守、γ 仍 +38.66M 正）—— 在一根 1d 收穿 flip 且 γ 负时武装</span>
              <div className="dn-trade-name">
                Chase-short —— 武装待命：08-11 收滑到日线 200W 地板 / W-SMA200 下方、OI 在建空且 funding 重新加热到上限（γ 只松约 16% 到 +38.66M、仍是一根可观阻尼器、所以那根 γ 翻转触发不近）；它在一根 1d 收穿 $63,331 flip 且 aggregate 翻负时活
              </div>
              <div className="dn-thesis">
                一根空侧压需要 dealer 本子丢它的净多 γ AND 价格在一根收盘上
                丢 flip。两者都比 08-11 备忘近、但都没跨：aggregate GEX 是
                +38.66M（仍深净正、松约 16%、且 $62k/$60k 负架在下面建）、
                flip 坐 $63,331、现货在上方 +0.37%、08-11 收 $63,572 守在它
                上方（24h 低只盘中刺穿）。这根重新加杠杆的盘 —— OI 在期货卖
                里扩、funding 钉上限、retail 拥挤新高、MTF reversal regime
                —— 是谱系里在杠杆 / 结构腿上最强的一根空形态、但 dealer 本子
                仍是一根可观的 +38.66M 正 γ 阻尼器（那根 γ 翻转触发不近）、
                且 SM「空」是 artifact-contaminated、所以两者都不加它。一根
                1d 收穿 flip 带 aggregate 负会很快武装这根压、朝 $60k
                −19.68M 崩盘 put。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">武装条件</span><span className="dn-lvl-v bear">1d 收 &lt; $63,331 flip AND aggregate GEX 翻负（$62k −11.00M / $60k −19.68M 架把它拉到零下）→ 武装空、朝 $60k −19.68M 崩盘 put</span></div>
                <div><span className="dn-lvl-k">地板盯位</span><span className="dn-lvl-v bull">200W sma200 $63,760.71（JSON recomputed 08-10 00:11Z、约 48h 陈旧、带过）—— 一根周收在下方结束周期地板读法；live 现货在日线口径下方 −0.31%、但那根 6 周连收在 08-16 结算前守住</span></div>
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">站边 · flip 在收盘上守且 aggregate γ 净正时不做空 —— 但 $62k/$60k 负架意味着一根破 flip 会被 dealer 朝 $60k 加速</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b>书是一根更薄但仍可观的阻尼夹 —— γ 两天里从
                +111.3M（08-10）松到 +38.66M（急阶是 08-10 → 08-11；08-11 →
                08-12 只是一根适度修）、负值集中在 $60k–$62k、所以一根丢 flip
                会被放大而不是被买。但空一根仍在收盘上守 flip 的盘、带
                aggregate 仍正且 SM「空」是 artifact、是过早；等水位在一根
                收盘上破 AND aggregate 翻。关键是那根 flip：如果一根日线收
                在 $63,331 下方且 aggregate 转负、chase-short 就活了。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 失败重夺在往下解 · regime 从失败重夺测它的地板转到失败重夺丢它的地板带、flip 是最后一条线</span>
              <div className="dn-trade-name">
                重夺生命周期 —— 往下解：08-07 D-EMA50 重夺在 08-10 丢了封顶、在 08-11 收上滑到日线 200W 地板 / W-SMA200 下方、现坐在 $63,331 flip 上作最后一条线、而那根孤单的 SM 反信号被 feed artifact 吃回
              </div>
              <div className="dn-thesis">
                08-11 备忘把问题框成「在 flip/floor 上再筑底、还是往下解」。
                它在往下解。08-11 收 $63,572 滑到日线口径的 200W 地板 $63,761
                和 W-SMA200 $63,982 下方、γ 缓冲松约 16%（到 +38.66M、仍可观）、
                OI 在期货卖里再扩、funding 重新加热到上限。08-11 那根唯一
                偏多反信号 —— 干净 SM 翻多 —— 经 BJ 15:16 artifact 又穿回空、
                不再可认证。还没丢的是 flip：收盘仍守在 $63,331 上方、
                aggregate γ 仍正、周收周期地板连收（穿 08-09 6 根上方）在
                08-16 前完好。{' '}
                <span className="dn-em">
                  regime 读从失败重夺测它的地板转到失败重夺丢它的地板带、
                  以 $63,331 flip 作 chase-short 变活前的最后一条线。框架盯
                  flip 在收盘上和 aggregate γ 符号 —— 这两个一起、决定这是
                  一根 flip 上的底、还是朝 $60k 的首个结构性破。
                </span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">往下解</span><span className="dn-lvl-v bear">08-11 收 $63,572 在日线 200W 地板 $63,761 / W-SMA200 $63,982 下方；γ +45.9M → +38.66M（松约 16%、仍深正）；OI +3,113 在期货卖里；funding 重新加热到 +10.95% 上限；retail 64.34%</span></div>
                <div><span className="dn-lvl-k">反信号（削弱）</span><span className="dn-lvl-v bull">HTF 底背离 12h/1w 熬过、1M ⚡TD9 BUY 还在、一档薄 +1,107 现货 CVD 买 —— 但 SM 翻多经 BJ 15:16 artifact 又穿回空、不再可认证</span></div>
                <div><span className="dn-lvl-k">最后一条线</span><span className="dn-lvl-v">$63,331 0γ flip 在收盘口径（24h 低 $63,248 只盘中刺穿后收回）+ 周收周期地板连收在 08-16 前完好</span></div>
                <div><span className="dn-lvl-k">解析水位</span><span className="dn-lvl-v">上：1d 收 &gt; D-EMA50 $64,543（重夺、再武装 scout）· 下：1d 收 &lt; $63,331 flip 且 γ 负（武装 chase-short 朝 $60k）</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根往偏多案子反向解的论点是信号、不是要护
                的东西 —— 重夺在往下渗、备忘直说。但一根仍在收盘上守 flip、
                带一本仍可观的正 dealer 书（+38.66M）且周期地板连收完好的
                失败重夺、还不是一根破位；$63,331 flip 是分「flip 上的底」和
                「朝 $60k 的首个结构性破」的那条线。在那条线在一根收盘上解
                出来前、两边都不交易。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 封顶丢延伸到第二根收、且滑到日线地板带下 · 杠杆回开（OI +3,113、funding 到上限、retail +2.74pt）· SM「空」是 feed artifact · scout 再入场更远 · chase-short 更硬但只在一根 flip 丢 + γ 负时武装（γ 仍 +38.66M 正）</span>
            </h2>

            <p>
              08-11 决策条件里：丢封顶升级<em>延伸</em>了（第二根收 $63,572
              在封顶下方、且在日线 200W 地板 / W-SMA200 下方）；SM 翻
              <em>反转</em>回净空、但经 BJ 15:16 feed artifact（那分钟 short
              +11,735 / long +376；24h long 平 −79）—— 所以不是一根可认证的
              smart-money 压；scout 再入场<em>没触发</em>且走更远（两条腿现在
              都不过）；flip/floor 破<em>部分触发</em>（08-11 收滑到日线口径
              的 200W 地板 $63,761 和 W-SMA200 $63,982 下方、但守在
              $63,481/$63,331 flip 上方；周收周期地板连收完好）；chase-short
              再武装<em>没触发</em>（aggregate γ 仍 +38.66M 正、现货在 flip
              上方）、虽然案子实质变硬；funding 冷<em>反转</em>（live 重新
              加热到 +10.95% 上限、OI 再扩 +3,113）。<em>偏空路径在每条软腿
              上都赢了 —— OI、funding、γ、retail、MTF、宏观 —— 但两个硬触发
              （一根 flip 收盘丢 AND aggregate γ 翻负）仍没到、那根孤单的
              偏多反信号又把自己吃回进 feed artifact。</em>条件围绕一本平书、
              一根延伸的封顶丢、一本松了但仍可观的正 dealer 书（+38.66M）、
              和一根现是最后一条线的 flip 重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>封顶丢延伸（第二根收、在日线地板带下）</td><td className="bear">1d 收 $63,572.00 &lt; D-EMA50 封顶 $64,543（连续第二根）、且在日线口径的 200W 地板 $63,761 / W-SMA200 $63,982 下方</td><td>失败重夺读法加深；备忘领着这根往下渗、不护重夺</td></tr>
                <tr><td>杠杆回开（再充气）</td><td className="bear">OI +3,113 BTC（+2.93%）在期货卖里；funding 重新加热到 +10.95% 上限；retail 64.34%（+2.74pt）</td><td>08-11 那根去杠杆腿没延伸；一根往 fade 里再加杠杆的空 —— 偏空权重、无动作（本身不是触发）</td></tr>
                <tr><td>SM「翻」净空 —— ARTIFACT</td><td className="stale">SM net +2,947 → −7,882、但 +11,735 的 short 建在单根 BJ 15:16 08-11 artifact 分钟里（那分钟 long +376 / short +11,735 / net −11,358；24h long 平 −79）；|Δ|/prior_net 3.67</td><td>打折 —— 不是可认证的 smart-money 压；不把 SM 空当空信号加权、也不把未来一根 artifact 穿当多信号加权</td></tr>
                <tr><td>Scout 再入场（多）—— 递延、更远</td><td className="bull">1d 收回 &gt; D-EMA50 封顶 $64,543（重夺）AND 一根可认证（非 artifact）SM net &gt; +1k</td><td>scout long 0.2R starter（单根有界 starter、无加仓腿）；目标 $66,692 / $67,427</td></tr>
                <tr><td>flip 丢（结构性升级）—— 最后一条线</td><td className="bear">1d 收 &lt; $63,331（0γ flip）在收盘口径（24h 低 $63,248 只盘中刺穿）</td><td>重夺底下的首个真破位；结束「flip 上的底」读法、把盘交给 chase-short 朝 $60k −19.68M 崩盘 put</td></tr>
                <tr><td>Chase-short 再武装（更硬、未武装）</td><td className="bear">1d 收 &lt; $63,331 flip AND aggregate GEX 翻负（当前 +38.66M 正 —— $62k/$60k 架要把它拉到零下）</td><td>武装空、朝 $60k 崩盘 put；$62k −11.00M / $60k −19.68M 架意味着一根破 flip 会被 dealer 加速 —— 基率在杠杆 / 结构腿上升了、但 γ 触发不近、也没到</td></tr>
                <tr><td>周期地板盯位</td><td className="bull">200W sma200 $63,760.71（JSON、约 48h 陈旧、带过）—— 6 根地板上方周收穿 08-09；下根结算 08-16</td><td>一根周收在 08-16 收在 $63,761 下方会结束 6 周周期地板连收、加强 chase-short；live 现货在日线口径下方是警戒、不是破</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bear">10Y &lt; 4.55% 收 —— 在 4.72% FALSE（错侧 17bp、更差、再收紧 +7bp）</td><td>独立宏观筛假且恶化；scout 的宏观顺风需要 10Y 回到 4.55% 下</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                这根失败重夺是否在 $63,331 flip 上筑底（一档薄现货买盘 +
                熬过来的 HTF 底背离把收盘守在 flip 上方、而周期地板连收熬过
                08-16 结算）、还是这根重新加杠杆的空把它往下解 —— 一根 1d 收
                丢 $63,331 flip 且 aggregate γ 翻负、它武装 chase-short 朝
                $60k −19.68M 崩盘 put、而 $60k/$62k 负架加速这根动
              </span>
              。书是平的、继续平；scout 再入场递延且更远（封顶丢第二根收、
              SM 多吃回进 feed artifact）；chase-short 是它到过的最近、但离活
              还差一根收（flip 守了、aggregate 仍正）。从 08-07 跑的那根重夺
              在往下解 —— 两根收在封顶下、第二根在日线地板带下 —— 而杠杆本子
              往 fade 里回开了（OI 在期货卖里扩、funding 钉上限、retail 拥挤
              新高）。撑住它的又薄又真：收盘仍守 flip、aggregate γ 仍正、
              周期地板连收完好、1M ⚡TD9 BUY / HTF 底背离熬着。下一个 24h 的
              对读是<em>平、耐心 —— 在封顶重夺且 SM 干净转多前不再入多、
              在 $63,331 flip 于一根收盘上带 γ 负破前不做空</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计）
            </span>
            <b>状态：</b>v2、在 2026-08-12 00:07Z 快照（盘面锚 00:05Z）从 v1
            促进、经 STAGE B codex 敌对但公允一遍后（判决 BLOCK-CRITICAL）。
            findings 及证据记于 audits/2026-08-12-desk-note.md；下面每一条
            finding 都用一根 grep-闭合环全文件应用（搜索模式 · 带修前含义的
            命中 修前 · 修后）、不只在引用行。{' '}
            <b>DN-001（CRITICAL —— GEX aggregate 口径冲突）：</b>草稿把 GEX
            HTML 的「Total GEX / 1% move」tile（+22.0M）当 aggregate、并在其上
            建了一套 γ 塌叙事、但那根 tile 与它自己的 by-expiry strip 及
            gex_summary.json net_gex 内部不一致、后两者都合到 +38.66M
            （net_gex=38665992.99）。v2 采用 footed +38.66M expiry-strip /
            gex_summary 口径、披露 +22.0M tile 差异、并把日间变化改正为从
            +45.9M 松约 16%（不是腰斩；腰斩那步是 08-10 +111.3M → 08-11
            +45.9M）、ex-12AUG 到 +40.79M（曾 +24.1M）、并移除「塌 / 几近没了
            / 到过最近」框架。搜索模式：「+22.0M」（作 aggregate 用）、
            「halved/HALVED/halving」、「closest yet/CLOSEST」、「+24.1M」、
            「nearly gone」、「collapse/collapsing」· 修前 14 aggregate-+22.0M
            / 8 halved / 5 closest-yet / 1 +24.1M / 1 nearly-gone / 4 collapse
            · 修后 0 陈旧（剩余 +22.0M token 是被标注的 tile 差异披露；剩余
            halving/collapse token 是明确否定 ——「不是腰斩」、「不是第二次
            塌」、「它没塌」、「不在塌」）—— 已解决。<b>DN-002（MAJOR ——
            交易范围超出递延的 0.2R scout）：</b>移除 add-0.2R 扩张腿和 0.4R-max
            上限；v2 只保留单根递延的 0.2R starter。搜索模式：「0.4R」、
            「add 0.2R」、「add-leg」· 修前 1 / 2 / 0 · 修后 0 —— 已解决。
            <b>DN-003（MINOR —— 正带求和）：</b>$64.5k–$72k 带
            （14.42+11.75+10.90+10.29+10.75+17.80+7.34）合到 +83.25M、从
            「~+73M」改正到「~+83.3M」（含 $70k 墙）。模式「~+73M」· 修前 2 ·
            修后 0 —— 已解决。<b>DN-004（MINOR —— SM artifact 分钟与 24h
            混淆）：</b>BJ 15:16 artifact 分钟是 long +376 / short +11,735 / net
            −11,358（行 118128→118129）；「longs flat −79」这个数是 24h 聚合 Δ
            （long −79 / short +10,751 / net −10,830）、不是 artifact 分钟。v2
            处处把两者分开。模式「longs flat」/「in one minute（…longs flat）」
            · 修前 7 混淆 · 修后 0（每处现分别写明该分钟 long +376 与 24h long
            −79）—— 已解决。<b>DN-005（MINOR —— 前向 strip 被截断）：</b>补上
            遗漏的 25JUN27 317.3DTE +0.68M 行。模式「25JUN27」· 修前 0 ·
            修后 1 —— 已解决。{' '}
            <b>自足算式（v2 canonical）：</b>funding × 1095（live +10.95% ann
            自原始 0.01、在 Binance 上限、24h 均值 +6.56%、区间 +1.29% /
            +10.95%、0/1441 转负）；GEX 双参考符号（flip $63,331、现货 +0.37%
            / Deribit idx +0.81%、都正）；aggregate GEX +38.66M（expiry-strip /
            gex_summary net_gex；+22.0M「Total GEX / 1% move」tile 是被披露的
            不一致读）、从 +45.9M（08-11）松约 16% —— 仍深净多、带 $62k
            −11.00M / $60k −19.68M = −30.68M 负架和 $64.5k–$72k 正带 ~+83.3M；
            12AUG 0DTE −2.13M 前块（08:00Z 结算、比快照晚约 8h、ex-12AUG ≈
            +40.79M）；SM「翻」（+2,947 → −7,882、24h long −79 / short +10,751 /
            Δnet −10,830）作 feed artifact —— BJ 15:16 08-11（07:16Z）单分钟
            独自跑 long +376 / short +11,735 / net −11,358、|Δ|/prior_net =
            3.67、非可认证压；MA 矩阵对 live 现货 $63,564.01、自 parquet
            2026-08-12 00:05Z close $63,540.30（D-EMA50 封顶 $64,543、现货
            下方 −1.52%；08-11 走完的收 $63,572.00 在封顶下 = 第二根收丢、且
            在日线口径的 200W 地板 $63,761 / W-SMA200 $63,982 下方；D-SMA50
            $63,367 和 0γ flip $63,331 是最后支撑架；W-SMA200 自全 363 根
            wildcard 源算 $63,982（−0.65%）；W-EMA150/200 种子披露）；200W
            周期地板连收（6 根地板上方周收穿 08-09 结算 $64,867.80 对 sma200
            $63,760.71、+1.74%；JSON recomputed 08-10 00:11:24Z、约 48h 陈旧、
            带过；live 现货在日线口径下方 −0.31% 但周连收到 08-16 完好）；
            30D RV 27.01%（30 returns；29-return 备选 22.78%）；窗口流向
            （24h OI +3,113 在 futCVD −2,128 / bigNet −1,537、窗内无 cb_cvd
            reset）；跨资产（|r| 0.207、BTC −0.66% vs NQ −0.57% = −0.09pt、
            一根软化盘上的错向收敛）；宏观 Tier-1（10Y 4.72% +7bp、TIPS
            2.43%、HY OAS 2.70% 平、DXY 99.81、Fed 净流动性 $5.840T、MOVE
            待定第三天）；reclaim-long 利率筛在 17bp 仍 FALSE；
            claims-vs-loaded-data（NTT / max-pain / strike-IV / BTC-NQ
            framework only；JGB 月度不依赖；IV 794 合约链中位数、不是可交易
            价差）；EN/ZH 平价（ZH 在 STAGE C 以原生中文向前写、同数字 +
            同 caveats）；及 requireViewer gating 模式（默认导出首语句、路径
            /desk/2026-08-12）。{' '}
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；Next 在 Node
            &lt; 20.9.0 硬退出、所以一次完整 <code>next build</code> 被环境
            阻断（谱系已记）。<code>npx --no-install tsc --noEmit</code> 是
            审计阶段的 build 代理。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-08-12 00:07Z、盘面锚
            00:05Z）、provenance 在上方数据来源条带中按节披露；宏观 Tier-1
            面板渲染 2026-08-11 22:15Z（比快照早约 1.9h）、部分输入明确陈旧
            或待定并已标注。水位、规模与条件是交易台流程的示例、不是长期
            推荐。过去的相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损
            风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                重夺在往下渗 —— 两根收在封顶下、第二根在地板带下。杠杆回开、
                γ 缓冲松了。但 flip 在收盘上守、书仍是正的。平。$63,331 flip
                是最后一条线。
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
            v2 · 2026-08-12 00:07Z 快照 · 已过 codex 敌对式审计 · sources:
            live_db.json · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · ma200w_trap_watch_state.json · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
