import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-10 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-10',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-10' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260710() {
  await requireViewer('/zh/desk/2026-07-10');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-10 · v2</span>
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
              <span className="dn-big">$63,222</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.65%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-10 00:06Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-10 00:06Z（snapshot pin · BJ 08:06 行）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 锚钉在 t=&ldquo;07-10 08:06&rdquo;（BJ）=
                    00:06Z；文件 tail 仍在续写、所有窗口冻结到这根钉的索引。
                    快照 &ldquo;now&rdquo; 值（现货、retail、SM net、funding）
                    用精确的 BJ 08:06 钉；24h 差跨最末 1440 采样分钟、到钉
                    结束（24h-ago = BJ 08:06 07-09 采样行）。本次 24h 窗内无
                    cb_cvd / fut_cvd 计数重置
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-10 00:01Z scan（BJ 08:01）</td>
                  <td className="dn-flag">
                    滚动 latest 文件 · 较快照锚约 5 分钟陈旧 · 含未收盘 K 线 ·
                    扫描存档于 /opt/desk-note/snapshots/2026-07-10-0006/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-10 00:01Z 快照</td>
                  <td className="dn-flag">
                    较锚约 5 分钟陈旧 · Deribit idx $63,443 对 live 现货
                    $63,221.72（idx 高 $221）· 878 合约 · 10JUL26 0.3DTE
                    +47.18M 今日 08:00Z 结算（快照后、正）· strip 上无近端
                    负放大器
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-10 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 5 分钟 · 7d 1h bar · 22 资产 · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-09 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.85h · FRED Tier-1：10Y 4.56%（+1.0bp,
                    RISK-OFF）、TIPS 2.31%（+1.0bp, EXTREME）、HY OAS 2.70%
                    （+3.0bp, RISK-ON）、MOVE 72.4（+7.0）、DXY 100.94（−0.11,
                    EXTREME）、Fed 净流动性 $5.958T（+0.118T, EXTREME RISK-ON）·
                    Tier-3 通胀行陈旧（月度 69d）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-07-10 00:05Z（close $63,199.90）</td>
                  <td className="dn-flag">
                    偏移按 live 现货 $63,221.72 重算 · 完整 2019→ glob 载入
                    （358 根周 bar）、所以整张 W 矩阵含 W-SMA150 / W-SMA200
                    本次都可计算
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期地板监视 JSON</td>
                  <td className="dn-v-cell">weekly_200sma.json · 本次 ABSENT</td>
                  <td className="dn-flag">
                    规范监视 JSON 不在服务器上 → 比率百分位 / 上次事件保持
                    未溯源（非杜撰）；地板直接从 parquet W-MON W-SMA200
                    （$63,068.05）按 runbook fallback 重算
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月度（69d）· 不作实时</td>
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
              <span className="dn-v">+9.93%</span>
              <span className="dn-src">live · 原始 0.009071%/8h × 1095 · 24h 均值 +6.96% ann · 封顶占用 229 / 1440 采样行 = 15.9% · 0 负行 · 最大 +10.95% @ 07-09 19:35Z（BJ 03:35 07-10）· 谷 +3.13% @ 07-09 03:52Z（BJ 11:52 07-09）—— 从未转负</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">+6.39% → +9.93%（+3.54pt, 硬硬转硬）</span>
              <span className="dn-src">盘内 24h：24h-ago 行 +6.39% ann → now +9.93% · 24h 均值硬到 +6.96%（07-09 是 +4.97%）· 零负行（曾 96）—— 杠杆本子在反弹里重新转硬、多头在付费持仓</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v">−0.11%（−109.5 BTC）</span>
              <span className="dn-src">live · 基本持平（07-09 是 +995 BTC 扩张）· SM long_btc −1,792 / short_btc +3,004 —— 一堆新空被多侧洗盘吸收、OI 净平</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bull">59.40 / 40.60</span>
              <span className="dn-src">live_db `mkt_long_pct` · BJ 08:06 钉 · 从 63.93 → 59.40（−4.53pt）而价格 ROSE +1.65% · 24h 区间 59.23 / 64.29 —— retail 在反弹里 EXIT 多头、07-09 pile-in 的镜像</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−7,908.2（净 SHORT、加深）</span>
              <span className="dn-src">live · long 8,387.9 − short 16,296.1 · 24h-ago net −3,112.4 · 24h net 谷 −8,082.7 @ 07-09 20:51Z（BJ 04:51 07-10）、峰 −2,880.5 @ 07-09 02:56Z（BJ 10:56 07-09）；short_btc 24h 峰 16,599.7 @ 07-09 19:51Z（BJ 03:51 07-10）</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · 24h step</span>
              <span className="dn-v bear">−3,112 → −7,908（加深、cut fraction 154%）</span>
              <span className="dn-src">net 一根阶梯 −4,796 更深、由多侧洗盘（−1,792）+ 空侧加（+3,004）构成；|Δ|/prior_net = 4,796 / 3,112 = 154% —— net 在空方向 <em>翻了一倍多</em>（−3,112 基是真的、不像 07-09 的平基）· SM 在 +1.65% 反弹里加空</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.7% / 32.09%</span>
              <span className="dn-src">GEX IV 中位数 · 878 合约 · 30D close-to-close RV（30 returns / 31 closes；29-ret 另口径 30.34%）· 链级溢价 ~+9.6pt · P/C OI 比 0.55</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+3.28%（在上方）</span>
              <span className="dn-src">flip $61,215（07-09 是 $61,094）· 对 live 现货 $63,221.72（+3.28%；63,221.72/61,215 − 1 = 3.278%）/ GEX 文件 Deribit idx $63,443（+3.64%；63,443/61,215 − 1 = 3.640%）—— 两参考都正 · aggregate GEX +125.6M 净多 γ（07-09 是 +80.6M —— 加深）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                昨天盘内被交回的那根重夺、今天又被夺回来——现货从 $61,705
                低点弹回 200W 地板上方、07-09 日线 CLOSE 在地板上、未收盘的
                周线也回到线上
              </span>
              。现货 <span className="dn-tag bull">$63,222</span> 坐在
              <span className="dn-tag bull">$63,068.05 W-SMA200 周期地板上方
              +0.24%</span>；未收盘的 07-13 周 close
              <span className="dn-tag bull">$63,199.90 印在其上 +0.21%</span>
              （07-09 备忘时在下方 −1.45%）、走完的 07-09 日 close
              <span className="dn-tag bull">$63,197.00</span> 在 07-08 那单一
              根收破后重新收回地板上方。上一篇的
              <span className="dn-em">
                re-confirm-break 触发、盘内武装、又在盘内解除
              </span>
              —— 但这仍不是一根落定的周线事件：周线要到周一 07-13 才收、
              最后走完的周线事件仍是 07-06 那根重夺（$64,023.60 在上方）。
              可这根反弹结构上可疑。它跑在
              <span className="dn-tag bear">smart money 往里加空</span>
              上—— short_btc +3,004、SM net 加深 −4,796 到
              <span className="dn-tag bear">−7,908</span>（cut fraction 154%、
              net 翻倍多空）——配上
              <span className="dn-tag bull">retail EXIT 多头 −4.53pt 到
              59.40%</span>（07-09 pile-in 的镜像）、OI 平（−0.11%）、funding
              <span className="dn-tag bear">硬转到 +9.93% ann</span>
              （24h 均值 +6.96%、零负行、15.9% 封顶占用）。那是一根现货牵引、
              被 SM 靠着按的、越地板挤压——不是需求确认的重夺。dealer 本子
              加深到 <span className="dn-tag bull">+125.6M 净多 γ</span>
              （从 +80.6M）、$63k–$66k 正墙带在头顶封、flip $61,215 在现货
              下方 +3.28% —— 一道钉住价格的阻尼轮廓。MTF 引擎往回滚了一档
              LESS bearish（6/9、4 多 / 3 空 / 3 中、&ldquo;higher-TF
              bearish、短周期反弹&rdquo;）、反弹把快周期抬了起来。本子保持
              <span className="dn-em">FLAT</span>：回补反弹 scout 的价格
              前置条件现在 RESTORED（现货回到 flip、D-EMA20、D-SMA20 AND
              地板上方）、但 DEMAND 块比以往更空（SM 加空、retail 逃）——
              所以 scout 在需求上继续 stood down；不在深净多 γ 本子上加空；
              不在单腿利率 fire 上开新对冲。那根唯一的线仍是周一 07-13 周
              close 对 $63,068 地板。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$63,222</span> live、
              <span className="dn-tag bull">+1.65%</span> 在 24h（24h-ago
              $62,198）、在
              <span className="dn-tag">$63,454 / $61,705</span> 区间里
              （高 @ 07-09 18:12Z / BJ 02:12 07-10、低 @ 07-09 02:52Z / BJ
              10:52 07-09）。
              <span className="dn-signal">
                07-06 峰后那道三根下收的滑坡、反转成一根收在地板上的复原
              </span>
              ：日线收 07-06 <span className="dn-tag bull">$64,023.60</span>
              （重夺顶）、07-07 <span className="dn-tag bear">$63,335.40</span>、
              07-08 <span className="dn-tag bear">$62,255.30</span>（唯一一根
              收破地板）、07-09 <span className="dn-tag bull">$63,197.00</span>
              （回到上方）、07-10 未收盘
              <span className="dn-tag bull">$63,199.90</span> —— 一根 +$942
              的 07-09 上日、把价格从盘中 $61,705 插针拉回周期地板上方。MA
              矩阵重新拉宽到三根正偏移：现货坐在
              <span className="dn-tag bull">D-SMA20 $61,804.93 上方
              +2.29%</span>、
              <span className="dn-tag bull">D-EMA20 $62,693.70 上方
              +0.84%</span>、
              <span className="dn-tag bull">200W 地板 W-SMA200 $63,068.05
              上方 +0.24%</span> —— 地板重新是脚下的支撑、不是头顶的阻力。
              <span className="dn-em">
                重夺的地板从一根我们坐在其下的水位、翻回一根我们坐在其上
                的水位 —— 现货正骑在 $61.8k–$63.1k 支撑带上、离地板本身
                只有 $154。
              </span>{' '}
              阶梯上其余的一切都按顺序深在头顶：D-EMA50 $65,346（−3.25%）、
              D-SMA50 $65,387（−3.31%）、然后跳到 W-EMA200 $68,938（−8.29%）
              / D-EMA100 $68,947（−8.30%）、D-SMA150 $70,072（−9.78%）、
              D-SMA100 $70,785（−10.68%）、以及上方的周线簇。回补反弹 scout
              的价格前置——现货在 flip 上 AND 在 D-EMA20/D-SMA20 上 AND 在
              地板上——本次翻回 TRUE（四条腿全正）、把 07-09 备忘那道
              two-of-three 失败反了过来；scout 现在只卡在需求上（利率筛是
              第二道门、仍 FALSE）。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · SM 往反弹里加空（short_btc +3,004、net 更深 −4,796 到 −7,908、cut fraction 154%）· retail EXIT 多头 −4.53pt · OI 平 · funding 硬转硬、零负行 · 一根重堆敌对-2 步印在 BJ 15:11</span>
            </h2>

            <p>
              <span className="dn-signal">
                smart money 往上行的盘里压空侧——这轮回落里最干净的
                &ldquo;fade the bounce&rdquo; 仓位形
              </span>
              。24h 窗内 SM net 从
              <span className="dn-tag">−3,112.4</span> 阶梯到
              <span className="dn-tag bear">−7,908.2</span>、一根 −4,796 的
              加深、由 long_btc
              <span className="dn-tag bear">10,180.1 → 8,387.9（−1,792）</span>
              与 short_btc
              <span className="dn-tag bear">13,292.5 → 16,296.1（+3,004）</span>
              构成。空侧加的比多侧洗的多、所以 net 翻了一倍多空：
              <span className="dn-em">
                cut fraction |Δ|/prior_net = 4,796 / 3,112 = 154%
              </span>
              （本次是一根有效比 —— −3,112 基是真的、不是 07-09 那根让比率
              未定义的平基）。SM net 谷
              <span className="dn-tag bear">−8,082.7 @ 07-09 20:51Z（BJ 04:51
              07-10）</span>、然后回补一点到 −7,908 进快照；short_btc 峰
              <span className="dn-tag bear">16,599.7 @ 07-09 19:51Z（BJ 03:51
              07-10）</span> 后泄 ~300 进钉、long_btc 谷
              <span className="dn-tag bear">8,318.9 @ 07-09 21:46Z（BJ 05:46
              07-10）</span>。同窗 OI
              <span className="dn-tag">−109.5 BTC（−0.11%）</span> —— 基本
              持平、07-09 备忘那 +995 扩张被多侧洗盘吸收、所以这堆空是
              <span className="dn-em">平总量下轮进净空</span>、不是一根
              新的杠杆扩张。
            </p>

            <p>
              <span className="dn-signal">
                retail 在价格上行里 EXIT 多头——07-09 pile-in 的精确反面
              </span>
              。`mkt_long_pct` 从
              <span className="dn-tag bull">63.93% → 59.40%（−4.53pt）</span>
              跨 24h、区间 59.23 / 64.29 —— 群众在 +1.65% 上印里甩多头、
              而 smart money 在堆空、去拥挤。杠杆侧相反、硬转硬：funding 守
              <span className="dn-tag bear">+9.93% ann live</span>（原始
              0.009071%/8h × 1095）、24h 均值
              <span className="dn-tag bear">+6.96% ann</span>（从 07-09 备忘
              的 +4.97% 硬起来）、区间
              <span className="dn-tag">+3.13% / +10.95%</span>、最大 @ 07-09
              19:35Z（BJ 03:35 07-10）、谷
              <span className="dn-tag">+3.13% @ 07-09 03:52Z（BJ 11:52
              07-09）</span> —— 路径
              <span className="dn-em">从未转负</span>（零负行 vs 07-09 的 96）、
              封顶占用爬到
              <span className="dn-tag">229 / 1440 采样行（15.9%）</span> 从
              6.0%。perp 对现货在快照
              <span className="dn-tag bear">−$48.65 折价</span>（24h 均
              −$56.68、区间 −$137.18 / +$73.18 —— basis 盘中触过升水、但均值
              坐折价）。1 分钟 aggregate skew 快照
              <span className="dn-tag bear">−2.7</span>（24h 均 +0.39）——
              一档温和卖攻向钉。
              <span className="dn-em">
                funding 硬到一个持续正、近封顶的 regime、同时 retail 甩多、
                SM 堆空、是一根越地板的空头挤压的签名：杠杆多头在付费持这
                根反弹、smart money 的空头是把它挤上去的燃料 —— 不是一根
                确认它的需求基。
              </span>
            </p>

            <p>
              窗口流向是<em>现货买进 24h 反弹、最近四小时平、买方歇了一口
              </em>。24h：价格
              <span className="dn-tag bull">+1.65%</span>、OI
              <span className="dn-tag">−109.5 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +1,729</span>（干净、窗内无
              reset）、期货 CVD
              <span className="dn-tag">Δ +52</span>、taker-net
              <span className="dn-tag">+52</span>、大单
              <span className="dn-tag bear">−703 BTC</span> ——
              <span className="dn-em">
                现货硬买这根反弹（+1,729 CVD）、而期货和 taker 大致平、大单
                净卖 —— 一根现货牵引的复原、perp 本子没追、与 SM 靠空一致
              </span>
              。4h（进快照）：价格
              <span className="dn-tag">+0.06%</span>、OI
              <span className="dn-tag">+26 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −612</span>、期货 CVD
              <span className="dn-tag bear">Δ −139</span>、taker-net
              <span className="dn-tag bear">−139</span>、大单
              <span className="dn-tag bull">+228 BTC</span> —— <em>平且静、
              现货在反弹停在地板时略给出</em>。1h：价格
              <span className="dn-tag bear">−0.05%</span>、OI
              <span className="dn-tag">+39 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −111</span>、期货 CVD
              <span className="dn-tag">Δ +3</span>、taker-net
              <span className="dn-tag">+3</span>、大单
              <span className="dn-tag bull">+58 BTC</span> —— <em>静、向钉
              略给出</em>。读法：24h 反弹是现货买、perp 被动、但最近 4h
              显示买盘正歇在地板上 —— 挤压停了、没延伸。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 往回滚一档 LESS bearish · 6/9 trend-continuation、&ldquo;higher-TF bearish / 短周期反弹&rdquo; · 快周期翻多、新鲜 4h + 3d 金叉 · 底背离簇加深到 4h/12h/1d/3d · 1w 水下死叉续 · 1M ⚡ TD9 BUY 重印 · MA 矩阵回到三根正线</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 引擎在反弹抬起快周期时往回滚了一档 LESS bearish
              </span>
              。扫描是 4 多 / 3 空 / 3 中、横跨 10 周期（15m/30m/1h 多、
              4h/8h 中、12h/1d/3d 空、1w 中、1M 多）、一根
              <span className="dn-tag">6/9 cycle-momentum regime（JT ≥ 0）——
              trend-continuation 主导</span>、净 &ldquo;higher-TF bearish、
              短周期反弹&rdquo;（07-09 是 5/9、1 多 / 7 空 / 2 中、&ldquo;sell
              the bounce&rdquo;）。反弹上印出两根新鲜金叉：一根
              <span className="dn-tag bull">4h 水上金叉（1 bar 前、DIF
              +76.1）</span> —— 一根强的水上金叉、bullish 续 —— 和一根
              <span className="dn-tag">3d 水下金叉（刚印、DIF −3,243.3）</span>
              —— 一根水下早期多探。对着这个、higher-TF bearish 锚守住：
              <span className="dn-tag bear">1w 水下死叉（2 bar 前、DIF
              −5,878.7）</span> 对 07-09 不变续着、且反信号簇加深 —— 一根
              <span className="dn-tag bull">底背离簇现在在 4h/12h/1d/3d</span>
              （比 07-09 的 12h/1d 多加了 3d 帧）加一根重印的
              <span className="dn-tag bull">1M ⚡ TD9 BUY 在 $63,184</span>
              （超卖反转提示、比 07-09 那根 $62,258 高）。1h 走到 Buy 3
              setup、8h/4h 在反弹上翻了各自的叉。
              <span className="dn-em">
                直读：下腿的趋势帧仍 bearish（1w 死叉、12h/1d/3d 空）、但
                反弹把 sub-daily 帧抬成多、并堆出一根四帧底背离簇配 1M TD9
                BUY —— 一根 bearish-continuation regime、载着一根被拉伸并
                反弹的超卖反射、往回一档朝 07-08 姿态、不是一根干净的转向。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,179</td><td className="num">50.4</td><td className="neut">死叉（水上）11b</td><td className="bull">云上 ↓62.8k 27b</td><td>Sell 2</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">63,184</td><td className="num bull">56.5</td><td className="neut">死叉（水上）3b</td><td className="bull">云上 ↓62.7k 22b</td><td>Buy 4</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num">63,184</td><td className="num bull">59.3</td><td className="bull">金叉（水下）29b</td><td className="bull">云上 ↓63.1k 7b</td><td>Buy 3</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">63,184</td><td className="num bull">54.7</td><td className="bull">金叉（水上）1b（刚印）</td><td className="bull">云上 ↓61.9k 40b</td><td>Sell 6</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">63,184</td><td className="num bull">55.3</td><td className="bear">死叉（水上）5b</td><td className="bull">云上 ↓62.5k 3b</td><td>Sell 2</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">63,184</td><td className="num bull">55.4</td><td className="neut">金叉（水下）17b</td><td className="neut">云内 61.9–65.3k 3b</td><td>Sell 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1d</td><td className="num">63,179</td><td className="num">50.0</td><td className="neut">金叉（水下）9b</td><td className="bear">云下 ↑65.6k 39b</td><td>Buy 3</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">63,184</td><td className="num bear">42.0</td><td className="neut">金叉（水下）刚印</td><td className="bear">云下 ↑71.7k 13b</td><td>Sell 3</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">63,183</td><td className="num bear">37.9</td><td className="bear">死叉（水下）2b</td><td className="bear">云下 ↑98.7k 23b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">63,184</td><td className="num">43.3</td><td className="neut">—</td><td className="bull">云上 ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（BJ 08:01；滚动
                    latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-07-10-0006/）。头部告警：
                    <em>4h 水上金叉 1b（DIF +76.1）</em>、
                    <em>1w 水下死叉 2b（DIF −5,878.7）</em>、
                    <em>3d 水下金叉刚印（DIF −3,243.3）</em>、
                    <em>1M ⚡ TD9 BUY $63,184</em>。净读
                    <em>4 多 / 3 空 / 3 中 · higher-TF bearish、短周期反弹 ·
                    ⚠ higher-TF 底背离簇（12h/1d/3d）</em>。扫描现货
                    $63,179、24h +1.49%（Binance perp kline 窗；live-tape 24h
                    读 +1.65% 自现货 −1440min、一个不同的参考与窗）、H/L
                    $63,485 / $61,666、qVol $9.48B。收盘为未收盘 K 线；每个值
                    在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵在日线上确认地板的再重夺。现货 $63,222 现在守三根正
              偏移 ——
              <span className="dn-tag bull">D-SMA20 $61,804.93 上方
              +2.29%</span>、
              <span className="dn-tag bull">D-EMA20 $62,693.70 上方
              +0.84%</span>、
              <span className="dn-tag bull">200W 地板 W-SMA200 $63,068.05
              上方 +0.24%</span> —— 并坐在头顶每一根线下方：
              <span className="dn-tag bear">D-EMA50 $65,345.98（−3.25%）</span>、
              <span className="dn-tag bear">D-SMA50 $65,387.33（−3.31%）</span>、
              <span className="dn-tag bear">W-EMA200 $68,938.40（−8.29%）</span>、
              <span className="dn-tag bear">D-EMA100 $68,946.60（−8.30%）</span>、
              <span className="dn-tag bear">D-SMA150 $70,072.45（−9.78%）</span>、
              <span className="dn-tag bear">W-SMA20 $70,697.02（−10.57%）</span>、
              <span className="dn-tag bear">D-SMA100 $70,784.58（−10.68%）</span>、
              <span className="dn-tag bear">W-EMA20 $71,421.48（−11.48%）</span>、
              <span className="dn-tag bear">D-EMA150 $72,118.36（−12.34%）</span>、
              <span className="dn-tag bear">D-SMA200 $74,107.65（−14.69%）</span>、
              <span className="dn-tag bear">W-EMA150 $74,714.79（−15.38%）</span>、
              <span className="dn-tag bear">D-EMA200 $75,039.50（−15.75%）</span>、
              <span className="dn-tag bear">W-SMA150 $76,158.79（−16.99%）</span>、
              然后是弃用的深周线 W-EMA100 $80,198.95（−21.17%）、W-EMA50
              $80,389.06（−21.36%）、W-SMA50 $87,633.60（−27.86%）、W-SMA100
              $88,600.04（−28.64%）。近线集合是现货正下方那道紧的
              $61.8k–$63.1k 支撑带、然后一道干净的 ~3.3% 缺口上到
              D-EMA50/D-SMA50 对 —— 反弹要清的第一根头顶阻力。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-07-10 00:05Z（close
                $63,199.90）；偏移按 live 现货 $63,221.72 重算。显示的 MA
                水位按 $ 取整、偏移用精确序列值算。完整 2019→ parquet glob
                载入（358 根周 bar）、所以 W-SMA150 / W-SMA200 本次可计算 ——
                无需种子披露。日线收盘：07-05 $63,617.10、07-06 $64,023.60、
                07-07 $63,335.40、07-08 $62,255.30、07-09 $63,197.00、07-10
                （未收盘）$63,199.90 —— 07-09 复原收盘重新收回 $63,068.05
                地板上方。30D close-to-close RV 32.09%（logret.std × √365 ×
                100、30 returns / 31 closes；29-ret 另口径 30.34%）。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子加深净多 γ 到 +125.6M（07-09 是 +80.6M）· flip $61,215 现货在上方 +3.28% · $64k +29.65M 最重墙、$63k/$63.5k 夹现货 · $60k −13.78M 是 top-10 唯一负、撑下跌 · 无近端负放大器（10JUL +47.18M 08:00Z 结算）</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子在反弹把现货抬回正墙带时加深了它的多 γ 阻尼
              </span>
              。aggregate GEX 是
              <span className="dn-tag bull">+125.6M / 1%</span>（07-09 是
              +80.6M、07-08 是 +114.2M —— 越过整个复原区间再加深）、硬硬
              阻尼。0-γ flip 是
              <span className="dn-tag">$61,215</span>（07-09 是 $61,094）、
              现货 $63,222 坐在
              <span className="dn-tag bull">上方 +3.28%</span> 按现货口径
              （63,221.72 / 61,215 − 1 = +3.278%）；GEX 文件自己的
              &ldquo;dist to flip&rdquo; 读
              <span className="dn-tag bull">+3.6%</span> 对它的 Deribit idx
              $63,443（比 live 现货高 $221）、算
              <span className="dn-tag bull">+3.64%</span>（63,443 / 61,215 −
              1 = +3.640%）—— 两参考都正、现货在 flip 上方（两口径都是）、
              缓冲从 07-09 备忘的 +1.80% 再拉宽、价格弹离 flip。墙图夹住
              现货、最重正墙就在头顶：
              <span className="dn-tag bull">$64k +29.65M</span>（~+1.2%）、
              后撑 <span className="dn-tag bull">$63k +23.53M</span>（正在
              现货上）、<span className="dn-tag bull">$65k +20.25M</span>、
              <span className="dn-tag bull">$63.5k +18.33M</span>、
              <span className="dn-tag bull">$66k +16.31M</span>、
              <span className="dn-tag bull">$70k +14.54M</span>、
              <span className="dn-tag bull">$68k +13.06M</span>、
              <span className="dn-tag bull">$80k +8.08M</span>、
              <span className="dn-tag bull">$72k +5.93M</span>；top-10 里
              唯一的负是
              <span className="dn-tag bear">$60k −13.78M</span>、坐在下方
              作下跌磁铁。
              <span className="dn-em">
                本子把一根挤压封进密集的 $63k–$66k 正带（+29.65M / +23.53M
                / +20.25M 簇是一道重头顶盖）、并撑一根朝 $60k 的下跌（那里
                −13.78M 簇放大一根地板破）—— 一道阻尼轮廓、把价格钉在 flip
                与 $64k 之间的地板带上、直到一根到期或一道现货流打破它。
              </span>{' '}
              按 expiry 没有一根有意义的近端负放大器：10JUL 0.3DTE
              <span className="dn-tag">+47.18M</span>（今日 08:00Z 结算、
              快照后、正）、11JUL 1.3 +4.72M、12JUL 2.3 +3.41M、13JUL 3.3
              +4.76M、17JUL 7.3 +27.81M、24JUL 14.3 +7.69M、31JUL 21.3
              +33.52M（最重的前向块、正）、28AUG 49.3 +6.47M、25SEP 77.3
              <span className="dn-tag bear">−0.93M</span>（唯一前向负、微小）、
              25DEC 168.3 +1.75M、26MAR27 259.3 +0.91M、25JUN27 350.3
              +0.54M。整根近 strip 都正；推动 06-29 破的放大器不在其上、
              所以反弹跑得没有 γ 顺风、下跌也会跑得没有 γ 加速器、直到价格
              丢掉 flip。
            </p>

            <p>
              IV 中位数横跨 878 合约是
              <span className="dn-tag">41.7%</span> 对 30D close-to-close
              RV <span className="dn-tag">32.09%</span> —— 链级溢价
              <span className="dn-tag">~+9.6pt</span>（从 07-09 备忘的
              +11.0pt 收窄、realized 随反弹上来）。Put/Call OI 比
              <span className="dn-tag">0.55</span>（call OI 239,352 / put OI
              132,718 BTC）—— call 重的 OI、与头顶正 γ 墙带一致。
              <span className="dn-em">
                是 N 合约的链中位数、<em>不是</em>可交易价差；expiry- /
                strike-level vega、skew 与期限结构仍未载入、vol 读法保持
                framework only。
              </span>{' '}
              RV 方法：30D close-to-close、logret.std × √365 × 100、用最末
              30 根日 log return（= 连续 31 根日 close）、锚自 parquet 最末
              bar 2026-07-10 00:05Z；29-ret 另口径读 30.34%。IV 41.7% 比
              07-09 备忘的 42.7% 低一点 —— 链在反弹印出时略松、但 +9.6pt
              溢价说 implied 仍领先 realized。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 利率 HELD 硬（10Y 4.56%、TIPS 2.31% EXTREME）—— 10Y re-grow 闸保持 FIRED（&gt;4.53%）、reclaim-long 利率筛现在 FALSE（10Y ≥ 4.55%）· DXY 走软 −0.11 到 100.94 但仍 EXTREME · Fed 净流动性跳 +0.118T 到 $5.958T（EXTREME RISK-ON）· HY 信用 RISK-ON 2.70% · 跨资产再耦合到 |r| 0.320 NORMAL</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面保持分裂：利率与美元硬 risk-off、信用与一根新鲜流动性
                印在松
              </span>
              。面板渲染 2026-07-09 22:15Z、比快照早约 1.85h。US 10Y nominal
              <span className="dn-tag bear">4.56%（+1.0bp）</span>、regime z
              <span className="dn-tag bear">+1.96</span>、偶发 z
              <span className="dn-tag">+1.67</span> —— RISK-OFF、守硬。10Y
              TIPS real <span className="dn-tag bear">2.31%（+1.0bp）</span>、
              regime z <span className="dn-tag bear">+2.82</span>、偶发 z
              <span className="dn-tag bear">+1.76</span> —— EXTREME RISK-OFF。
              5Y5Y BE 通胀
              <span className="dn-tag">2.19%（−3.0bp）</span> —— 无标。HY OAS
              <span className="dn-tag bull">2.70%（+3.0bp）</span>、regime z
              <span className="dn-tag bull">−1.21</span>、偶发 z
              <span className="dn-tag bull">−0.60</span> —— RISK-ON、当日略
              硬但仍松。MOVE 债波
              <span className="dn-tag">72.4（+7.0）</span> —— 中性。DXY
              <span className="dn-tag bear">100.94（−0.11）</span>、regime z
              <span className="dn-tag bear">+2.10</span> —— EXTREME RISK-OFF、
              略走软；Fed 净流动性
              <span className="dn-tag bull">$5.958T（+0.118T）</span>、偶发 z
              <span className="dn-tag bull">+2.47</span> —— EXTREME RISK-ON、
              一根新鲜周度印。US-JP 10Y 利差
              <span className="dn-tag">1.91%（+1.0bp）</span>；USD/JPY
              <span className="dn-tag">162.36（−0.18）</span>；USD/CNY 6.7969。
              <span className="dn-em">
                净：put-spread re-grow 闸的 10Y 腿保持 FIRED —— 10Y 4.56%
                在 4.53% 闸上 —— reclaim-long 利率筛（10Y &lt; 4.55%）现在
                在 4.56% 干净 FALSE（07-09 在边界上）。HY OAS 腿仍未触 ——
                2.70% 在 2.78% 触发下 8bp（曾 11bp）。OR-闸在利率上跳、信用
                松、但本子无持仓对冲、所以这根 fire 是观察事件、不是
                auto-roll —— 且 BTC 本次在交易它自己的地板带、不是利率。那
                根新鲜宏观正是流动性跳：Fed 净流动性 +0.118T 到 $5.958T、
                一根真的 risk-on 偶发。
              </span>{' '}
              JGB 月度 2.65%（陈旧 69d）带 EXTREME RISK-OFF —— 不依赖。
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
                <tr><td>US 10Y nominal</td><td className="num">4.56%</td><td className="num bear">+1.0bp</td><td className="num bear">+1.96</td><td className="num">+1.67</td><td className="bear">紧 · RISK-OFF · 守</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.31%</td><td className="num bear">+1.0bp</td><td className="num bear">+2.82</td><td className="num bear">+1.76</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.19%</td><td className="num bull">−3.0bp</td><td className="num">−0.52</td><td className="num">−1.13</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.70%</td><td className="num bear">+3.0bp</td><td className="num bull">−1.21</td><td className="num bull">−0.60</td><td className="bull">松 · RISK-ON</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.515</td><td className="num">−0.01</td><td className="num">−0.06</td><td className="num bull">−2.13</td><td className="neut">中性 · 偶发</td></tr>
                <tr><td>MOVE 债波</td><td className="num">72.4</td><td className="num bear">+7.0</td><td className="num">−0.21</td><td className="num">+0.30</td><td className="neut">中性 · 略硬</td></tr>
                <tr><td>DXY</td><td className="num">100.94</td><td className="num bull">−0.11</td><td className="num bear">+2.10</td><td className="num">+0.72</td><td className="bear">EXTREME RISK-OFF · 更软</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.958T</td><td className="num bull">+0.118T</td><td className="num">+2.42</td><td className="num bull">+2.47</td><td className="bull">EXTREME RISK-ON · 新鲜印</td></tr>
                <tr><td>USD/JPY</td><td className="num">162.36</td><td className="num">−0.18</td><td className="num bear">+1.56</td><td className="num">+1.30</td><td className="neut">无标</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.91%</td><td className="num bear">+1.0bp</td><td className="num bull">−0.74</td><td className="num">+1.67</td><td className="bull">紧</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7969</td><td className="num">+0.00</td><td className="num bull">−1.29</td><td className="num">+1.41</td><td className="neut">无标</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="num">+1.43</td><td className="stale">月度（69d）· 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:01Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.320</span> ——
              <span className="dn-signal">
                再耦合进一步硬进 NORMAL 区段
              </span>
              、从 07-09 备忘的 0.295（两 cut 前是 0.201 IDIOSYNCRATIC）。
              BTC 列出的对齐现在由金属 + 广义股票复合体领：GOLD
              <span className="dn-tag">+0.437</span>、SILVER
              <span className="dn-tag">+0.437</span>、SP500
              <span className="dn-tag">+0.422</span>、NQ
              <span className="dn-tag">+0.412</span>、COPPER
              <span className="dn-tag">+0.388</span>、PLAT
              <span className="dn-tag">+0.381</span>、TSLA
              <span className="dn-tag">+0.378</span>、CL
              <span className="dn-tag">−0.347</span>、BRENT
              <span className="dn-tag">−0.332</span>、JP225
              <span className="dn-tag">+0.312</span>、NVDA
              <span className="dn-tag">+0.287</span>。7d 相对表现：
              <span className="dn-tag bull">BTC +3.06%</span>（仍是过去一周
              复合体的领头、但领先在收窄、06-30 低点正滚出窗）、NQ
              <span className="dn-tag bull">+1.40%</span>、SP500
              <span className="dn-tag bull">+0.83%</span>、JP225
              <span className="dn-tag bull">+1.29%</span>、NVDA
              <span className="dn-tag bull">+4.04%</span>、META
              <span className="dn-tag bull">+9.80%</span>（复合体领头）、
              AAPL <span className="dn-tag bull">+2.72%</span>、TSLA
              <span className="dn-tag bull">+2.73%</span>、MSFT
              <span className="dn-tag bear">−1.58%</span>。金属软：GOLD
              <span className="dn-tag bear">−0.67%</span>、SILVER
              <span className="dn-tag bear">−2.43%</span>、PLAT
              <span className="dn-tag bear">−1.33%</span>。能源狂拉（对 BTC
              负相关）：CL <span className="dn-tag bull">+4.98%</span>、BRENT
              <span className="dn-tag bull">+6.27%</span>、NGAS
              <span className="dn-tag bear">−6.74%</span>。
              <span className="dn-em">
                BTC 在过去 7d 仍领股票引擎（+3.06% vs NQ +1.40% = +1.66pt、
                从 07-09 的 +6.11pt 收窄）、因为窗仍开在 06-30 低点附近、但
                缺口在收、那根低点在老化出局；再耦合现在是承重的宏观读、
                GOLD/SILVER（各 +0.437）是 BTC 最紧的对齐、risk-off 金属 +
                股票复合体是现在要盯的框架、内生窗已经关了。
              </span>
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 200W 重夺监视 —— 未收盘周线 BACK ABOVE 地板、re-confirm-break 触发盘内 DIS-armed（到周一 07-13 前仍未落定）· 回补反弹 scout —— 价格前置 RESTORED（四条腿全在上方）但 DEMAND 块比以往更空（SM 加空、retail 逃）；在需求上 stood down · 宏观尾 —— OR-闸利率腿仍 fired、信用松、无持仓对冲 · 挤压周期 —— 一根重堆敌对-2 步印在 BJ 15:11 · 无新交易</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子保持平、主监视往回反转朝重夺
              </span>
              。07-09 备忘标为盘内交回的那根重夺、在未收盘周线上重新
              建立：现货在地板上、07-13 未收盘 close 在地板上、07-09 日
              close 回到上方。re-confirm-break 触发 —— 一根走完的 07-13 周
              close 收破地板 —— 现在盘内 DIS-armed、但它<span className="dn-em">
              没</span>被任一方向解决（周线要到周一 07-13 才落定）。回补
              反弹 scout 的价格前置、07-09 在两条腿上失败、本次四条腿全部
              恢复 —— 但需求块进一步恶化（SM 加深空、retail 逃多）、所以
              scout 在需求上继续 stood down。宏观尾的利率腿仍跳、但信用松、
              没有对冲可滚。今天的交易本子是：无空仓、无 scout 入场、无新
              对冲 —— 等周线收落定地板、等仓位本子显示 SM 空是一根压、还是
              一根会被回补的挤压。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 主仓 · 200W 周期地板监视 —— 重夺在未收盘周线上 RE-ESTABLISHED：现货 $63,222 在 $63,068.05 地板上方 +0.24%、未收盘 07-13 周 $63,199.90 印在其上 +0.21%（07-09 在下方 −1.45%）、07-09 日 close $63,197.00 回到上方；最后 COMPLETED 周线事件仍是 07-06 重夺（$64,023.60 在上方）；06-15 重夺论保持 FALSIFIED、06-29 破保持 CONFIRMED</span>
              <div className="dn-trade-name">
                200W 地板 —— 重夺盘内夺回；re-confirm-break 触发已 dis-armed、但周线到周一 07-13 收前仍未落定
              </div>
              <div className="dn-thesis">
                阶梯式 W-MON W-SMA200 地板坐在 $63,068.05（从 07-09 备忘的
                $63,062.79 —— 地板每周升 ~$200）。07-06 周 close $64,023.60
                重夺了它、是破位以来首根收在上方的周线；07-09 备忘显示
                未收盘周被拖到其下 −1.45%。本 cut 反弹把未收盘周拖回线上：
                07-13 未收盘 close $63,199.90 在地板上方 +0.21%、现货 $63,222
                在上方 +0.24%、07-09 日 close $63,197.00 在 07-08 那单一根
                收破后重新收回上方。那把重夺盘内重新建立、但它<em>不是</em>
                一根确认的周线收 —— 周线到周一 07-13 才落定、在那之前最后
                走完的周线事件是 07-06 重夺。状态：<em>重夺在最后走完的周
                close AND 在未收盘周上都完好；re-confirm-break 触发 dis-armed、
                未落定</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板</span><span className="dn-lvl-v">$63,068.05 = 全历史 W-MON W-SMA200、本 cut 从 2019→ parquet glob 重算（358 根周 bar、最后走完的 07-06 周 $64,023.60 close / 该结算时地板 $62,863.98、未收盘 07-13 周 close $63,199.90）。规范 weekly_200sma.json ABSENT、所以比率百分位 / 上次事件保持未溯源（非杜撰）</span></div>
                <div><span className="dn-lvl-k">破 —— CONFIRMED（先前）</span><span className="dn-lvl-v bear">06-29 周 close $60,224.70 收在当时地板下方；06-30 日 close $58,605.40 是这条腿最深</span></div>
                <div><span className="dn-lvl-k">重夺 —— 最后走完的周 close</span><span className="dn-lvl-v bull">07-06 周 close $64,023.60（在地板上方）—— 破位以来首根收在上方；仍是最后 SETTLED 的周线事件</span></div>
                <div><span className="dn-lvl-k">未收盘周 —— BACK ABOVE</span><span className="dn-lvl-v bull">07-13 未收盘 close $63,199.90（在 $63,068.05 地板上方 +0.21%）；现货上方 +0.24%；07-09 日 close $63,197.00 回到地板上方</span></div>
                <div><span className="dn-lvl-k">re-confirm-break 触发（dis-armed、未落定）</span><span className="dn-lvl-v bear">一根走完的 07-13（或更后）周 close &lt; $63,068.05 会重新确认破、重新证伪复原 —— 当前 dis-armed、未收盘周在上方；周线周一 07-13 落定</span></div>
                <div><span className="dn-lvl-k">再重夺（复原确认）</span><span className="dn-lvl-v bull">一根走完的 07-13 周 close &gt; $63,068.05 确认重夺穿过回落守住 —— 现货要守 +0.24% 进落定</span></div>
              </div>
              <div className="dn-gating">
                <b>监视纪律：</b>200W 是一根周线收级别、交易台按走完的周
                close 读它 —— 一根盘内上穿（如同一根盘内下穿）是警告、不是
                确认。06-29 破要求一根走完的周线收破；07-06 重夺要求一根
                收在上方；re-confirm-break 要求同样。本篇标记未收盘周回到
                地板上方并 dis-arm 触发、但在周一 07-13 落定收在上方前不
                把复原当作再确认。不在盘内上穿上单取仓位 —— 尤其不在一根
                SM 加空里做多。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 在需求上 STOOD DOWN · 价格前置本 cut RESTORED（现货回到 flip、D-EMA20、D-SMA20 AND 地板上方 —— 四条腿全正）但需求块比以往更空（SM 加深空 −7,908、retail 逃多到 59.40%）；入场递延到需求确认 AND 利率筛再放行</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 价格腿在地板再重夺上翻回 TRUE；需求净卖更狠；在需求上 stood down、利率是第二道门
              </div>
              <div className="dn-thesis">
                scout 的价格前置（现货在 flip 上、在 D-EMA20/D-SMA20 上、
                在地板上）07-09 在两条腿上失败、当时价格坐在 D-EMA20 下、
                地板下。本 cut 四条腿全翻回正：现货 $63,222 在 flip 上方
                +3.28%、D-EMA20 上方 +0.84%、D-SMA20 上方 +2.29%、地板上方
                +0.24%。但需求块 —— scout 早已在其上 stood down 的那条腿 ——
                进一步恶化：SM net 从 −3,112 加深到 −7,908（short_btc
                +3,004）、retail 逃多 −4.53pt 到 59.40%、24h 反弹是现货买
                配大单净卖、perp 本子被动。一根需求确认的回补反弹需要 SM
                <em>回补</em>空头（short_btc 在泄、net 朝平上升）配 OI 缩 ——
                本 cut 盘面的精确反面、SM 把空往反弹里堆。scout 继续递延：
                价格现在是绿灯、需求是硬红、利率筛（10Y &lt; 4.55%、在 4.56%
                FALSE）是第二道未放行的门。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">价格前置（RESTORED —— 四条腿全真）</span><span className="dn-lvl-v bull">现货 $63,222 &gt; flip $61,215（+3.28%）AND &gt; D-EMA20 $62,694（+0.84%）AND &gt; D-SMA20 $61,805（+2.29%）AND &gt; 200W 地板 $63,068（+0.24%）</span></div>
                <div><span className="dn-lvl-k">需求触发（UNMET —— 把关腿）</span><span className="dn-lvl-v bear">SM short_btc 泄破 &lt; 14k 配 SM net 朝平上升 AND OI 在 4h 内缩 —— 当前 short_btc 16,296 在升、net −7,908 在加深：反面</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">在一根需求确认印 AND 利率筛再放行（10Y &lt; 4.55%）时、scout long 0.2R —— 结构性背景（地板重夺、γ +125.6M 阻尼、1M TD9 BUY）在需求转向且利率再放行后支持它</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1d 收 &lt; $63,068（200W 地板）—— 一根收回下方重武装破监视、结束重夺读</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$65,346（D-EMA50）然后 $65,387（D-SMA50）—— 第一根头顶阻力、~3.3% 上</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · 在 D-EMA50/D-SMA50 对平半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R（示例、在一根需求确认、近现货入场上）：</b>入场
                ~$63,222、止损 $63,068 = ~$154 风险、一根紧地板止损；首目标
                $65,346 = ~$2,124 回报 ≈ 13.8:1 名义 —— 但紧止损几何是骗人
                的：一根 $154 止损直接压在地板上会被噪声扫、所以一根真的
                scout 会把止损放在 D-EMA20 $62,694 下方（~$528 风险、~4.0:1
                到 $65,346）、不钉在地板上。<b>硬规则：</b>SM 往反弹里堆空
                时不做 scout long —— 需求腿是门、一根价格单触发进 SM 加空
                是这套框架存在就是要拒绝的假信号。反弹正被 smart money 卖；
                在他们回补前不买他们在卖的东西。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 —— OR-闸利率腿仍 FIRED（10Y 4.56% &gt; 4.53%）、信用腿未触（HY OAS 2.70%、在 2.78% 闸下 8bp）、reclaim-long 利率筛现在 FALSE（10Y ≥ 4.55%）；无持仓对冲可滚 —— 观察事件、不是 auto-roll</span>
              <div className="dn-trade-name">
                下行 put-spread —— 无仓位；OR-闸利率腿仍跳、但信用松、BTC 交易它自己的地板带、不是利率
              </div>
              <div className="dn-thesis">
                29MAY put-spread 尾仓在它的 08:00Z 结算上平掉、回到 May
                谱系里；无持仓对冲。re-grow OR-闸（HY OAS &gt; 2.78% OR 10Y
                &gt; 4.53%）的利率腿跳了 —— 10Y 4.56% 在 4.53% 闸上 —— 而
                信用腿仍未触在 2.70%（在 2.78% 触发下 8bp、当日收紧 3bp 但
                仍松）。reclaim-long 利率筛（10Y &lt; 4.55%）现在在 4.56%
                干净 FALSE、07-09 曾坐在边界上。无对冲可滚、信用坚定松、
                这根利率 fire 是观察事件：一根单腿 OR-闸跳不 auto-open 一根
                尾、且 BTC 本 cut 在交易它自己的地板带、不是利率复合体。
                那根新鲜流动性印（Fed 净流动性 +0.118T 到 $5.958T、EXTREME
                RISK-ON）反着切 —— 一根 risk-on 偶发、反对在此重长一根下行尾。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓位 · 无滚 · 仅观察</span></div>
                <div><span className="dn-lvl-k">re-grow OR-闸</span><span className="dn-lvl-v bear">10Y &gt; 4.53% FIRED（在 4.56%）· HY OAS &gt; 2.78% 未触（在 2.70%、距闸 8bp）—— 单腿跳是观察、两腿会是更强信号</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bear">10Y &lt; 4.55% 现在在 4.56% FALSE —— 利率筛不再放行 scout long、即使需求转向</span></div>
                <div><span className="dn-lvl-k">反信号</span><span className="dn-lvl-v bull">Fed 净流动性 +0.118T 到 $5.958T（EXTREME RISK-ON 偶发）—— 新鲜周度印反对一根下行尾</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位漂移设的酌情盯位、不是回测
                断点。一根两腿都 fire 上的新对冲腿会滚到 13JUL/17JUL 前段
                —— 但近 dealer strip 完全是正（净多 γ、无近端负放大器）、
                所以一根新尾不会带 γ 顺风、正如 07-09 备忘所标。不在一根
                单腿利率跳、进一个松信用、升流动性的背景上开对冲。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期 —— 一根重堆敌对-2 步印在 BJ 15:11 07-09（Δshort +1,464、Δlong −504、Δnet −1,968 在现货 $62,860 —— 24h 里最响的单分钟空加）、但它是反弹早腿里一根孤立的 one-off、不是一根重建的节奏</span>
              <div className="dn-trade-name">
                挤压周期 —— 一根离散短堆步印在 BJ 15:11、但 7 日 BJ 13–15 节奏仍 FALSIFIED；读作一根 one-off 签名、不是基率
              </div>
              <div className="dn-thesis">
                05-31 备忘证伪了 7 日 BJ 13–15 节奏、框架自此以观察名单跑。
                本 cut 一根
                <span className="dn-tag bear">重堆敌对-2 签名</span>
                （Δshort &gt; 0 + Δlong &lt; 0 同一分钟）印在
                <span className="dn-tag bear">2026-07-09 07:11Z（BJ 15:11
                07-09）</span> 现货 $62,860：short_btc +1,464、long_btc −504、
                SM net 一根线阶梯 −1,968 —— 24h 里最大的单分钟空加、且它
                正好落在旧的 BJ 13–15 窗内。但它是一根<em>孤立印</em>、不是
                一根重建的节奏：其余 24h 空堆是渐进的（net 从 −3,112 漂到
                −8,083 谷、跨 ~13h）、没第二根离散步跟上。框架读它作一根
                有意义的盘面签名 —— SM 把空堆进反弹早腿 —— 但不给它日历
                先验。把下一根 Δnet ≤ −1.5k 印当信号本身、不当一根新周期
                的开端。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">节奏 FALSIFIED（自 05-31）；重堆敌对-2 签名印出时仍有意义、但不带时段先验</span></div>
                <div><span className="dn-lvl-k">本 cut 替代步</span><span className="dn-lvl-v bear">重堆敌对-2 @ 2026-07-09 07:11Z（BJ 15:11 07-09）· 现货 $62,860 · Δshort +1,464、Δlong −504、Δnet −1,968（24h 单分钟最大 Δ）</span></div>
                <div><span className="dn-lvl-k">SM 谷（最空）24h 内</span><span className="dn-lvl-v bear">−8,082.7 BTC @ 2026-07-09 20:51Z（BJ 04:51 07-10）· BJ 15:11 步后 ~13.7h、在一根渐进堆上到达、不是第二根离散步</span></div>
                <div><span className="dn-lvl-k">前向 gating</span><span className="dn-lvl-v">盯任何新 Δnet ≤ −1.5k 作 one-off 签名；一根 SM 空开始 COVER（short_btc 泄、net 升）进一根守地板反弹、是 scout 等的肯定回补反弹读</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根证伪的基率仍留下签名有意义 —— BJ 15:11
                步是一根真的短堆信号、但一根旧窗内的单印是巧合、不是一根
                重建的节奏。重堆敌对-2 签名印出时读作盘面信号；它们不再
                按钟预测下一根步。对本子要紧的信号是反面：SM 开始回补空头
                而不是加空的第一个迹象。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 地板盘内被再重夺 · 反弹跑在一根 SM 空堆 + retail 退出上、不是需求 · scout 的价格腿翻绿但需求是硬红 · 那根唯一的线是周一 07-13 周 close</span>
            </h2>

            <p>
              07-09 那张决策条件里：re-confirm-break 触发（一根走完的周线
              收破地板）<em>没触发</em>、现在盘内 dis-armed（未收盘周收回
              上方）；回补反弹 scout 的价格前置、07-09 在两条腿上失败、本
              cut 四条腿全<em>翻回</em>真；需求块<em>没</em>确认 —— 它恶化
              （SM 加深空、retail 逃）；宏观利率腿<em>保持</em> fired、
              reclaim-long 利率筛从边界掉到干净 FALSE；无持空或对冲需要
              触发。<em>地板在价格上被再重夺、scout 的价格门再开、需求门
              更狠地关上 —— 反弹正被 smart money 卖、所以本子什么都不拿。</em>{' '}
              今天的条件围绕一根再重夺的地板、一根堆进反弹的 SM 空、一根
              恢复但受需求把关的 scout、和一根未落定的周线重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>200W 周 close（主仓、未落定）</td><td>未收盘 07-13 周 $63,199.90 = 在 $63,068.05 地板上方 +0.21%；周一 07-13 落定</td><td>只按走完的周 close 读 —— 一根收在上方确认重夺守住；一根收破重新确认破。不在盘内上穿上取仓位</td></tr>
                <tr><td>回补反弹 scout（多）—— 价格 RESTORED、需求 GATED</td><td className="bear">价格腿全真（在 flip / D-EMA20 / D-SMA20 / 地板上方）；需求 UNMET —— SM short_btc 要泄破 &lt; 14k 配 net 朝平上升 AND OI 在 4h 内缩</td><td>scout long 0.2R 仅在一根需求确认印 AND 利率筛再放行（10Y &lt; 4.55%）；止损在 D-EMA20 $62,694 下、目标 $65,346 / $65,387 —— SM 堆空时不入场</td></tr>
                <tr><td>地板再丢（破再确认）</td><td className="bear">1d 收 &lt; $63,068（200W 地板）然后一根走完的 07-13 周 close 收破</td><td>重武装已确认的破读；重夺被再证伪、地板上方消化论结束 —— 朝 $60k 负 γ 簇另起评估</td></tr>
                <tr><td>地板守 + γ 保持正</td><td className="bull">1d 收守 &gt; $63,068 AND aggregate GEX 保持正（近 strip 无新负块加入）</td><td>地板上方消化读守住；scout 非对称只在 SM 开始回补空头时改善</td></tr>
                <tr><td>SM 空回补（需求信号）</td><td className="bull">short_btc 泄配 SM net 朝平上升 AND OI 在一根守地板反弹内缩</td><td>肯定的回补反弹读 —— 武装 scout 的需求腿；一根 Δnet ≥ +1.5k 回补步是要盯的触发</td></tr>
                <tr><td>宏观尾 re-grow（单腿 fired）</td><td className="bear">10Y &gt; 4.53% FIRED（在 4.56%）· HY OAS &gt; 2.78% 未触（在 2.70%、距闸 8bp）</td><td>仅观察 —— 单腿跳不 auto-open 一根尾；两腿 + 一根 BTC 内部破会；Fed 净流动性 +0.118T 反对</td></tr>
                <tr><td>reclaim-long 利率筛（现在 FALSE）</td><td className="bear">10Y &lt; 4.55% —— 在 4.56% FALSE</td><td>利率筛不再放行 scout long、即使在一根需求确认印上；一根利率腿再放行是第二道门</td></tr>
                <tr><td>挤压周期节奏（FALSIFIED）</td><td className="stale">7 日 BJ 13–15 基率已死；BJ 15:11 步是一根 one-off 签名</td><td>把每根新 Δnet ≤ −1.5k（空加）或 ≥ +1.5k（空回补）印当信号本身 —— 无时间先验</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                周一 07-13 周 close 是否落定在 $63,068 地板上方（确认重夺
                穿过回落守住）还是其下（重新确认破）、以及堆进这根反弹的
                SM 空是否开始 COVER —— short_btc 泄、net 朝平上升 —— 那会
                武装 scout 的需求腿、还是进一步压、那会把价格 fade 回 flip
                与 $60k 负簇
              </span>
              。在那之前本篇按写好的跑：地板盘内被再重夺但未落定、回补
              反弹 scout 的价格门是绿而需求门是硬红、宏观利率腿是一根单腿
              观察、dealer 本子那深 +125.6M 多 γ 把价格钉在地板带上。反弹
              是现货买、正被 smart money 卖；下一个 24h 的对读是<em>耐心
              —— 地板在周一 07-13 收上定、多头在 SM 回补时定、不在价格
              上跳时定</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-07-10-desk-note.md）
            </span>
            <b>状态：</b>本篇是 STAGE C 在 STAGE B codex 敌对式审计后促成的
            v2 EN/ZH 备忘（判决 <em>PASS-WITH-NOTES · 0 CRITICAL / 2 MAJOR
            / 2 MINOR</em>、记于 <code>audits/2026-07-10-desk-note.md</code>）。
            每条 finding 都就地应用、并在整份文件上按 grep 闭合（搜索模式 ·
            修前命中 · 修后命中）；被引的行号当作各条错误主张的示例、不是
            穷举。<b>DN-001（MAJOR · scout 入场门内部不一致）：</b>scout 行
            以 &ldquo;on a demand-confirming print&rdquo; 武装做多、而利率
            行把利率筛叫作第二道门。搜索模式 <code>on demand alone</code>、
            <code>until demand confirms</code>、
            <code>demand-confirming print, scout long</code>、
            <code>stood down on demand alone</code> —— 修前 5 处仅需求主张、
            修后 0。已在 scout 入场行、决策表动作、scout dn-side、gated-on-
            demand 行、scout 名上把利率再放行（10Y &lt; 4.55%）作第二道门
            显式加入 —— RESOLVED（修后命中 0）。<b>DN-002（MAJOR · 无据的
            谱系最高级）：</b>模式 <code>largest weekly add of the lineage</code>
            —— 修前 1、修后 0。文件引了当前 Fed 净流动性动作（+0.118T 到
            $5.958T）但未引先前各周 delta、最高级未证；删去、保留 &ldquo;a
            genuine risk-on episodic&rdquo; —— RESOLVED（修后命中 0）。
            <b>DN-003（MINOR · 宏观头 DXY delta）：</b>模式
            <code>DXY softened −0.18</code> —— 修前 1、修后 0。头现在读
            <code>DXY softened −0.11 to 100.94</code>、与正文、表、宏观源
            一致；−0.18 属 USD/JPY（629 / 666、保留不动）—— RESOLVED
            （修后命中 0）。<b>DN-004（MINOR · D-SMA50 目标写错）：</b>模式
            <code>65,654</code> —— 修前 2（818、943）、修后 0。两个 scout
            目标现在都读 D-SMA50 $65,387、与 MA 正文/矩阵 D-SMA50 $65,387.33
            及 parquet 重算一致 —— RESOLVED（修后命中 0）。总体：
            <b>已过 codex 敌对式审计</b>、4 条 finding 全 RESOLVED、零残留
            grep 命中。审计时再核过干净的主要自算：funding × 1095（+9.93%
            ann、24h 均值 +6.96%、封顶占用 229 / 1440 = 15.9%、零负行）；SM
            cut fraction 4,795.8 / 3,112.4 = 154%；GEX 双参考符号（flip
            $61,215、现货 +3.28% / idx +3.64%、两参考都正）；MA 矩阵对 live
            现货 $63,221.72、parquet 2026-07-10 00:05Z close $63,199.90（358
            根周 bar）；200W 地板重算 $63,068.05（weekly_200sma.json ABSENT、
            百分位 / 上次事件留未溯源）；跨资产 |r| 0.320 NORMAL；宏观 Tier-1
            （10Y 4.56%、TIPS 2.31%、HY OAS 2.70%、DXY 100.94、Fed 净流动性
            $5.958T）；requireViewer 路径 <code>/zh/desk/2026-07-10</code>。
            EN/ZH 数值平价在 STAGE C 对这根 v2 强制。
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；完整
            <code>next build</code> 对 Node &lt; 20.9.0 硬退出、被环境阻塞；
            <code>npx --no-install tsc --noEmit</code> 是 build proxy、本次
            在 v2 修正后再跑一次。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-07-10 00:06Z）、
            provenance 在数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-07-09 22:15Z（比快照早约 1.85h）、部分输入明确陈旧或待定
            并已标注。水位、规模与条件是交易台流程的示例、不是长期推荐。
            过去的相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损风险、
            加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                地板在印上回来了、但反弹正被卖 —— smart money 堆了空、
                retail 逃了多。价格是绿灯；需求是硬红。地板周一定、多头在
                他们回补时定。耐心。
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
            v2 · 2026-07-10 00:06Z 快照 · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
