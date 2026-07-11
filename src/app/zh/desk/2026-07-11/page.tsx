import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-11 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-11',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-11' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260711() {
  await requireViewer('/zh/desk/2026-07-11');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-11 · v2</span>
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
              <span className="dn-big">$64,138</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.43%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-11 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-11 00:07Z（snapshot pin · BJ 08:07 行）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 锚钉在 t=&ldquo;07-11 08:07&rdquo;（BJ）=
                    00:07Z；文件 tail 仍在续写、所有窗都冻结在这个 pin
                    索引。快照&ldquo;now&rdquo;值（现货、retail、SM net、funding）
                    取 BJ 08:07 pin；24h Δ 跨 1,440 根分钟到分钟间隔 / 1,441
                    采样行（含开盘行）、收在 pin（24h-ago = BJ 08:07 07-10
                    采样行）。这一刀 24h 窗内无 cb_cvd / fut_cvd 计数重置
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-11 00:01Z scan（BJ 08:01）</td>
                  <td className="dn-flag">
                    滚动 latest 文件 · 较快照锚滞后约 6 分钟 · 含未收盘 K 线 ·
                    扫描存档于 /opt/desk-note/snapshots/2026-07-11-0007/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-11 00:00Z 快照</td>
                  <td className="dn-flag">
                    较锚滞后约 7 分钟 · Deribit idx $64,431 对 live 现货
                    $64,137.88（idx 高 $293）· 876 合约 · 11JUL26 0.3DTE
                    +15.54M 今日 08:00Z 结算（快照后）；整条近端都正 ——
                    没有近端负放大器
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-11 00:00Z
                  </td>
                  <td className="dn-flag">滞后约 7 分钟 · 7d 1h bar · 22 资产 · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-10 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.85h · FRED Tier-1：10Y 4.54%（−2.0bp、
                    RISK-OFF、松到 4.55% reclaim-long 筛下方）、TIPS 2.31%
                    （0.0bp、EXTREME）、HY OAS 2.70%（0.0bp、RISK-ON）、MOVE
                    69.5（松）、DXY 100.94（−0.11、EXTREME）、Fed 净流动性
                    $5.958T（+0.118T、EXTREME RISK-ON）· Tier-3 通胀行陈旧
                    （月度 70d）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-07-11 00:06Z（close $64,090.00）</td>
                  <td className="dn-flag">
                    偏移按 live 现货 $64,137.88 重算 · 完整 2019→ glob 载入
                    （358 根周 bar）、所以整条 W 矩阵含 W-SMA150 / W-SMA200
                    这一刀都可算
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期地板盯位 JSON</td>
                  <td className="dn-v-cell">weekly_200sma.json · 本刀缺</td>
                  <td className="dn-flag">
                    服务器上没有 canonical 盯位 JSON → ratio 百分位 /
                    last-event 留未取（不是编造）；地板直接从 parquet W-MON
                    W-SMA200 重算（$63,072.50）、按 runbook fallback
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月度（70d）· 不作实时</td>
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
              <span className="dn-v">+10.95%（封顶）</span>
              <span className="dn-src">live · 原始 0.01%/8h = Binance 封顶 × 1095 · 24h 均值 +9.08% ann（07-10 是 +6.96%）· 封顶占用 472 / 1441 采样行 = 32.8%（前 15.9%）· 0 负行 · 最大 +10.95%（封顶）@ 07-10 16:16Z（BJ 00:16 07-11）· 谷点 +4.85% @ 07-10 05:11Z（BJ 13:11 07-10）—— 从未转负</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+9.97% → +10.95%（+0.98pt、钉在封顶）</span>
              <span className="dn-src">盘面内 24h · 24h-ago +9.97% ann → 现在钉在 +10.95% 封顶 · 24h 均值硬到 +9.08%（从 +6.96%）· 连两刀 0 负行 —— 杠杆多头付封顶撑挤压</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">+3.50%（+3,514.7 BTC）</span>
              <span className="dn-src">live · 一根真的 gross 扩张（07-10 是 −0.11% 平）· SM long_btc +3,737 / short_btc −2,114 —— 多侧重建 + 空侧回补一起把 gross 撑进反弹</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bull">55.94 / 44.06</span>
              <span className="dn-src">live_db `mkt_long_pct` · BJ 08:07 pin · 从 59.39 → 55.94（−3.45pt）而价格 +1.43% —— retail 在上印里继续泄多、连两天去拥挤</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−2,057.1（净 SHORT、硬回补）</span>
              <span className="dn-src">live · long 12,124.9 − short 14,182.0 · 24h-ago net −7,908.2 · 24h net 最大 −1,239.7 @ 07-10 20:31Z（BJ 04:31 07-11）、最小 −7,942.2 @ 07-10 00:26Z（BJ 08:26 07-10）；short_btc 24h 峰 16,394.0 @ 07-10 05:01Z（BJ 13:01 07-10）、long_btc 24h 峰 12,801.5 @ 07-10 20:31Z</span>
            </div>
            <div>
              <span className="dn-k">SM Δ · 24h 步</span>
              <span className="dn-v bull">−7,908 → −2,057（回补 +5,851、cut fraction 74%）</span>
              <span className="dn-src">net 回补 +5,851、多侧重建（+3,737）+ 空侧回补（−2,114）；|Δ|/prior_net = 5,851 / 7,908 = 74% —— SM 把四分之三的净空在 +1.43% 延伸里拆掉、正好是 07-10 空头建仓的镜像</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.1% / 30.26%</span>
              <span className="dn-src">GEX IV 中位数 · 876 合约 · 30D close-to-close RV（30 returns / 31 closes；29-ret 另一口径 30.79%）· 链级溢价 ~+10.8pt · P/C OI 比 0.54（call OI 232,462）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+4.31%（在上方）</span>
              <span className="dn-src">flip $61,485（07-10 是 $61,215）· 对 live 现货 $64,137.88（+4.31%；64,137.88/61,485 − 1 = 4.315%）/ GEX 文件 Deribit idx $64,431（+4.79%；64,431/61,485 − 1 = 4.792%、文件取整 +4.8%）—— 两参考都正 · aggregate GEX +131.8M 净多 γ（07-10 是 +125.6M —— 又加深）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                07-10 备忘点名为&ldquo;结构上可疑&rdquo;的那根空头挤压转化了
                —— smart money 硬回补了空头、OI 扩张、perp 本子买进
              </span>
              。24h 内 SM net 从
              <span className="dn-tag bear">−7,908</span> 回补到
              <span className="dn-tag">−2,057</span> —— 一根 +5,851 的拆解
              （多侧重建 +3,737、空侧回补 −2,114、
              <span className="dn-tag bull">cut fraction 74%</span>）、把四分之三
              的净空在一根 <span className="dn-tag bull">+1.43%</span> 上印里
              拆掉、正好是昨天空头建仓的镜像。OI 扩张
              <span className="dn-tag bull">+3,514.7 BTC（+3.50%）</span> ——
              一根真的 gross build、不是 07-10 的平盘 —— 而买方是 perp 侧
              （futures CVD +749、taker +788、大单 +1,068）、现货 CVD 平偏
              卖（−193）。价格延伸到
              <span className="dn-tag bull">$64,138</span>、07-10 日线
              <span className="dn-tag bull">收 $64,129.50</span> —— 反弹以来
              最高收、甚至高过 07-06 reclaim 顶 $64,023.60 —— 未收盘的
              07-13 周线收
              <span className="dn-tag bull">$64,090.00 在 $63,072.50 W-SMA200
              地板上方 +1.61%</span>、地板垫从 +0.24% 拓到
              <span className="dn-tag bull">+1.69%</span>。
              <span className="dn-em">
                但燃料是空头回补、不是一根新的现货需求底：retail 继续泄多
                （−3.45pt 到 55.94%）、funding 钉在 +10.95% 封顶（24h 均值
                +9.08%、0 负行、32.8% 封顶占用）、MTF 快周期印出一簇顶背离
                （15m/30m/1h/4h）+ 一根 15m ⚡ TD9 SELL —— 挤压被拉伸、没
                确认。
              </span>{' '}
              dealer 本子加深到
              <span className="dn-tag bull">+131.8M 净多 γ</span>（从 +125.6M）、
              $64k–$66k 正墙带封顶、flip $61,485 在现货下方 −4.31%。本子仍
              <span className="dn-em">FLAT</span>、但回补反弹 scout 的需求门
              谱系首次翻成建设性 —— 靠着反弹的 SM 空在被拆、OI 在建、perp
              买盘出现、利率筛翻回 TRUE（10Y 松到 4.54%、在 4.55% 闸下方）。
              唯一那条线仍是周一 07-13 周线收对 $63,072 地板、现在印 +1.61%
              离顶。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$64,138</span> live、
              <span className="dn-tag bull">+1.43%</span> 在 24h（24h-ago
              $63,232）、在一条
              <span className="dn-tag">$64,666 / $62,954</span> 区间里（高 @
              07-10 13:52Z / BJ 21:52 07-10、低 @ 07-10 00:35Z / BJ 08:35
              07-10）。
              <span className="dn-signal">
                反弹印出至今最高日收、把未收盘的周线推离地板
              </span>
              ：日线收 07-06
              <span className="dn-tag bull">$64,023.60</span>（前 reclaim 顶）、
              07-07 <span className="dn-tag bear">$63,335.40</span>、07-08
              <span className="dn-tag bear">$62,255.30</span>（唯一一根收在
              地板下）、07-09 <span className="dn-tag bull">$63,197.00</span>
              （回上方）、07-10
              <span className="dn-tag bull">$64,129.50</span>（一根 +$932.50
              上日、反弹最高收）、07-11 未收盘
              <span className="dn-tag bull">$64,090.00</span>。MA 矩阵守三根
              正偏移、全部较 07-10 拓宽：现货坐在
              <span className="dn-tag bull">D-SMA20 $61,891.55 上方 +3.63%</span>、
              <span className="dn-tag bull">D-EMA20 $62,906.78 上方 +1.96%</span>、
              <span className="dn-tag bull">200W 地板 W-SMA200 $63,072.50 上方
              +1.69%</span> —— 地板垫从昨天 +0.24% 的薄条翻了六倍多。
              <span className="dn-em">
                重夺的地板现在是价格下方的干净支撑、不是一根现货正骑着的
                水位 —— $61.9k–$63.1k 带坐在现货下 ~1–4%、第一道头顶阻力是
                D-SMA50/D-EMA50 对、延伸已经把它拉到 ~1.6–1.8% 之内。
              </span>{' '}
              D-SMA50 之上阶梯深且有序：D-EMA50 $65,331.75（−1.83%）、然后
              跳到 D-EMA100 $68,868.47（−6.87%）/ W-EMA200 $68,947.26
              （−6.98%）、D-SMA150 $70,058.88（−8.45%）、D-SMA100 $70,766.09
              （−9.37%）、再上是周线簇。回补反弹 scout 的价格前置条件在四条
              腿上都守 TRUE（现货在 flip AND D-EMA20 AND D-SMA20 AND 地板
              上方）；这一刀需求本子加进来、利率筛 —— 一道 07-10 是 FALSE
              的第二闸 —— 在 10Y 4.54% 翻回 TRUE。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · SM 硬回补空头（多 +3,737、空 −2,114、net −7,908→−2,057、回补 +5,851、cut fraction 74%）· retail 继续泄多 −3.45pt · OI 建 +3.50% · funding 钉封顶、0 负行 · fade 论点在延伸里被拆</span>
            </h2>

            <p>
              <span className="dn-signal">
                Smart money 在上涨盘里回补空头 —— 07-10 的 fade 论点在单场
                内被拆
              </span>
              。24h 窗内 SM net 从
              <span className="dn-tag bear">−7,908.2</span> 回补到
              <span className="dn-tag">−2,057.1</span>、一根 +5,851 的拆解、
              由 long_btc
              <span className="dn-tag bull">8,387.9 → 12,124.9（+3,737）</span>
              和 short_btc
              <span className="dn-tag bull">16,296.1 → 14,182.0（−2,114）</span>
              构成。多侧重建得比空侧回补更狠、所以 net 回撤了四分之三到平：
              <span className="dn-em">
                cut fraction |Δ|/prior_net = 5,851 / 7,908 = 74%
              </span>{' '}
              （一个有效比率 —— −7,908 底是真的、是回落里最大的净空）。窗
              开在 net −7,908.2 @ 07-10 00:07Z、SM net 谷
              <span className="dn-tag bear">−7,942.2 @ 07-10 00:26Z（BJ 08:26
              07-10）</span> 在 19 分钟之后、随后稳步回补到
              <span className="dn-tag">−1,239.7 @ 07-10 20:31Z（BJ 04:31
              07-11）</span> —— 窗内最不空 —— 再漂回 −2,057 进 pin；short_btc
              峰 <span className="dn-tag bear">16,394.0 @ 07-10 05:01Z（BJ
              13:01 07-10）</span> 此后泄 ~2,200、long_btc 顶
              <span className="dn-tag bull">12,801.5 @ 07-10 20:31Z</span>。
              同窗 OI 建
              <span className="dn-tag bull">+3,514.7 BTC（+3.50%）</span> ——
              一根真的 gross 扩张（vs 07-10 的 −0.11% 平盘）、所以空头回补
              <em>不是</em> de-grossing；两本子都在长、net 转向平。
              <span className="dn-em">
                空头回补 + 多侧重建 + gross build 进一根 +1.43% 上印、是一
                根被回补掉的挤压的仓位形状 —— 撑反弹的 SM 空在被拆、这是
                建设性的、但登记买方是回补的 perp 本子、不是一根新的现货
                需求底。
              </span>
            </p>

            <p>
              <span className="dn-signal">
                retail 在价格涨里继续泄多 —— 连两天去拥挤、不是追涨
              </span>
              。`mkt_long_pct` 泄
              <span className="dn-tag bull">59.39% → 55.94%（−3.45pt）</span>
              跨 24h、而现货印 +1.43% —— 人群连第二刀在延伸里甩多、正好是
              兴奋顶部追涨的反面。杠杆侧相反、硬到天花板：funding 坐在
              <span className="dn-tag bear">+10.95% ann live —— 在 Binance
              封顶</span>（原始 0.01%/8h × 1095）、24h 均值
              <span className="dn-tag bear">+9.08% ann</span>（从 07-10 备忘
              的 +6.96% 硬起来）、区间
              <span className="dn-tag">+4.85% / +10.95%</span>、谷 @ 07-10
              05:11Z（BJ 13:11 07-10）、路径
              <span className="dn-em">从未转负</span>（连第二刀 0 负行）、
              封顶占用爬到
              <span className="dn-tag">472 / 1441 采样行（32.8%）</span> 从
              15.9%。perp 在快照对现货
              <span className="dn-tag bear">−$37.88 折价</span>（24h 均
              −$47.04、区间 −$129.12 / +$160.50 —— basis 盘中触过宽升水但
              均值坐折价）。1 分钟 aggregate skew 快照
              <span className="dn-tag bull">+19.1</span>（24h 均 −5.83）——
              一档买倾斜进 pin。
              <span className="dn-em">
                funding 钉封顶、而 retail 甩多、SM 回补空 —— 是一根拥挤、
                加杠杆的挤压的签名：边际多头是一个付封顶去守的 perp 买家、
                由 SM 空回补供资 —— 一根空头的重定价、不是一根会作为现货
                CVD 吸收出现的需求底。盘面改善了、但燃料仍是空头侧、近封顶
                的 funding 说多侧被拉伸。
              </span>
            </p>

            <p>
              窗口流向是 <em>24h build 是 perp 领的、最近四小时现货接棒</em>。
              24h：价格 <span className="dn-tag bull">+1.43%</span>、OI
              <span className="dn-tag bull">+3,514.7 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −193.1</span>（干净、窗内无
              重置）、期货 CVD
              <span className="dn-tag bull">Δ +748.8</span>、taker-net
              <span className="dn-tag bull">+788.3</span>、大单
              <span className="dn-tag bull">+1,068.1 BTC</span> ——
              <span className="dn-em">
                perp 本子和 taker 买进 build、现货 CVD 略漏负；一根 SM 回补
                的 futures 领扩张、07-10 现货买 / perp 被动挤压的反面 ——
                需求这一刀在 perp 里出现、但还没在现货里
              </span>
              。4h（进快照）：价格
              <span className="dn-tag bull">+0.44%</span>、OI
              <span className="dn-tag bull">+446.2 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +1,214.6</span>、期货 CVD
              <span className="dn-tag bear">Δ −761.4</span>、taker-net
              <span className="dn-tag bear">−757.6</span>、大单
              <span className="dn-tag bear">−659.0 BTC</span> ——
              <em>现货买、期货和大单在 perp 腿对着 print 获利了结时卖</em>。
              1h：价格 <span className="dn-tag bull">+0.15%</span>、OI
              <span className="dn-tag bear">−193.9 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +442.4</span>、期货 CVD
              <span className="dn-tag bull">Δ +105.0</span>、taker-net
              <span className="dn-tag bull">+113.3</span>、大单
              <span className="dn-tag bull">+130.0 BTC</span> ——
              <em>一档温和双侧买、OI 随一些 perp 多在高位 de-gross 而微
              落</em>。读法：24h build 是 perp 领 + SM 回补、最近 4h 现货
              终于接棒买而 futures 轮出 —— 需求在从 perp 向现货拓宽、但 1h
              OI 微落说多侧在区间顶开始锁仓。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 tally 翻了一档偏空（4 多 / 2 空 / 4 中、regime 5/9）但快周期印一簇顶背离（15m/30m/1h/4h）+ 15m ⚡ TD9 SELL · 8h 翻水上金叉、3d 水下金叉刚印 · 更高 TF 底背离簇收窄到 1d/3d · 1w 水下死叉续 · 1M ⚡ TD9 BUY 续 · MA 矩阵三根正线、全拓宽</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 引擎抬了中周期、但在快周期上叠了一根新鲜的力竭警告
              </span>
              。扫描读 4 多 / 2 空 / 4 中 跨 10 周期（15m/30m/1h 多、
              4h/8h/12h 中、1d/3d 空、1w 中、1M 多）、一个
              <span className="dn-tag">5/9 cycle-momentum regime（JT ≥ 0）——
              trend-continuation 主导</span>、净&ldquo;更高 TF 偏空、短期
              反弹&rdquo;（07-10 是 4 多 / 3 空 / 3 中、6/9 —— frame tally
              甩掉一根空、但 regime 分数往中间挪了一档）。中周期在延伸上翻
              上：<span className="dn-tag bull">8h 印水上金叉（2 bar 前）</span>
              —— 一根强的水上叉、加入 4h 水上金叉（现在 7b）—— 而
              <span className="dn-tag">3d 水下金叉刚印</span>（周期框上一根早的
              水下多探）。对着这个、两根警告变硬：一簇
              <span className="dn-tag bear">15m/30m/1h/4h 快周期顶背离</span>
              （高位四根顶背离）+ 一根
              <span className="dn-tag bear">15m ⚡ TD9 SELL</span> —— 亚小时
              框上典型的拉伸反弹签名 —— 而
              <span className="dn-tag bear">1w 水下死叉（2 bar 前）</span> 对
              07-10 不变续着。反向信号侧仍带一簇
              <span className="dn-tag bull">更高 TF 底背离（1d/3d）</span>
              （从 07-10 的 4h/12h/1d/3d 收窄、因快周期翻成顶背离）和续着的
              <span className="dn-tag bull">1M ⚡ TD9 BUY</span>。
              <span className="dn-em">
                直读：延伸抬了引擎和中周期（8h/4h 金叉、亚日线 RSI 55–61）、
                探了一根 3d 金叉、但快周期现在闪力竭（顶背离簇 + 15m TD9
                SELL）进近封顶 funding —— 一个偏空趋势 regime 带着一根开始
                印反转警告的拉伸短期反弹、不是一根干净的转向。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,137</td><td className="num bull">57.9</td><td className="neut">金叉（水下）14b</td><td className="neut">云内 64.1–64.2k 3b</td><td>⚡ TD9 SELL</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">64,137</td><td className="num bull">55.2</td><td className="bull">金叉（水上）3b</td><td className="bull">云上 ↓63.9k 7b</td><td>Sell 8→9</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">64,137</td><td className="num bull">58.2</td><td className="bear">死叉（水上）10b</td><td className="bull">云上 ↓62.8k 23b</td><td>Sell 4</td><td>BEAR hid · BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">64,137</td><td className="num bull">60.4</td><td className="bull">金叉（水上）7b</td><td className="bull">云上 ↓62.6k 46b</td><td>Buy 1</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">64,137</td><td className="num bull">60.8</td><td className="bull">金叉（水上）2b（刚印）</td><td className="bull">云上 ↓62.5k 6b</td><td>Sell 5</td><td>BULL hid</td></tr>
                <tr><td>12h</td><td className="num">64,137</td><td className="num bull">59.5</td><td className="neut">金叉（水下）19b</td><td className="bull">云上 ↓63.8k 刚穿</td><td>Sell 3</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">64,137</td><td className="num">53.7</td><td className="neut">金叉（水下）10b</td><td className="bear">云下 ↑66.3k 40b</td><td>Sell 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">64,137</td><td className="num bear">44.0</td><td className="neut">金叉（水下）刚印</td><td className="bear">云下 ↑71.7k 13b</td><td>Sell 3</td><td>BULL reg</td></tr>
                <tr><td>1w</td><td className="num">64,137</td><td className="num bear">38.9</td><td className="bear">死叉（水下）2b</td><td className="bear">云下 ↑98.7k 23b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">64,137</td><td className="num">43.9</td><td className="neut">—</td><td className="bull">云上 ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（BJ 08:01；滚动
                    latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-07-11-0007/）。头部告警：
                    <em>8h 水上金叉 2b</em>、
                    <em>3d 水下金叉刚印</em>、
                    <em>1w 水下死叉 2b</em>、
                    <em>15m ⚡ TD9 SELL</em>、<em>1M ⚡ TD9 BUY</em>。净读
                    <em>4 多 / 2 空 / 4 中 · 更高 TF 偏空、短期反弹 · ⚠ 更高
                    TF 底背离簇（1d/3d）+ 快周期顶背离簇（15m/30m/1h/4h）</em>。
                    regime 5/9 cycle-momentum（JT ≥ 0）、trend-continuation
                    主导。扫描现货 $64,137、24h +1.49%（Binance perp K 线窗；
                    live-tape 24h 读 +1.43% 按 spot −1440min、不同参考不同窗）、
                    H/L $64,680 / $62,897、qVol $8.89B。收盘为未收盘 K 线；
                    每个值在各 TF 收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认地板重夺在日线上走强。现货 $64,138 守三根正偏移、
              全较 07-10 拓宽 ——
              <span className="dn-tag bull">D-SMA20 $61,891.55 上方 +3.63%</span>、
              <span className="dn-tag bull">D-EMA20 $62,906.78 上方 +1.96%</span>、
              <span className="dn-tag bull">200W 地板 W-SMA200 $63,072.50 上方
              +1.69%</span> —— 坐在上方每一根线下方：
              <span className="dn-tag bear">D-SMA50 $65,177.46（−1.60%）</span>、
              <span className="dn-tag bear">D-EMA50 $65,331.75（−1.83%）</span>、
              <span className="dn-tag bear">D-EMA100 $68,868.47（−6.87%）</span>、
              <span className="dn-tag bear">W-EMA200 $68,947.26（−6.98%）</span>、
              <span className="dn-tag bear">D-SMA150 $70,058.88（−8.45%）</span>、
              <span className="dn-tag bear">W-SMA20 $70,741.52（−9.33%）</span>、
              <span className="dn-tag bear">D-SMA100 $70,766.09（−9.37%）</span>、
              <span className="dn-tag bear">W-EMA20 $71,506.26（−10.30%）</span>、
              <span className="dn-tag bear">D-EMA150 $72,024.18（−10.95%）</span>、
              <span className="dn-tag bear">D-SMA200 $73,995.43（−13.32%）</span>、
              <span className="dn-tag bear">W-EMA150 $74,726.58（−14.17%）</span>、
              <span className="dn-tag bear">D-EMA200 $74,939.71（−14.41%）</span>、
              <span className="dn-tag bear">W-SMA150 $76,164.73（−15.79%）</span>、
              再是弃用的深周线 W-EMA100 $80,216.57（−20.04%）、W-EMA50
              $80,423.97（−20.25%）、W-SMA50 $87,651.40（−26.83%）、W-SMA100
              $88,608.94（−27.62%）。近线集合现在是一条拓宽的 $61.9k–$63.1k
              支撑带在现货下 ~1–4%、然后 D-SMA50/D-EMA50 对被拉到 ~1.6–1.8%
              之内 —— 延伸要清的第一道头顶阻力。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-07-11 00:06Z（close
                $64,090.00）；偏移按 live 现货 $64,137.88 重算。显示的 MA
                水位按 $ 取整、偏移用精确序列值算。完整 2019→ parquet glob
                载入（358 根周 bar）、所以 W-SMA150 / W-SMA200 这一刀可算 ——
                无需种子披露。日线收盘：07-06 $64,023.60、07-07 $63,335.40、
                07-08 $62,255.30、07-09 $63,197.00、07-10 $64,129.50、07-11
                （未收盘）$64,090.00 —— 07-10 收是反弹最高、坐在 $63,072.50
                地板和 07-06 reclaim 顶上方。30D close-to-close RV 30.26%
                （logret.std × √365 × 100、30 returns / 31 closes；29-return
                另一口径 30.79%）。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子加深净多 γ 到 +131.8M（07-10 是 +125.6M）· flip $61,485 现货在上方 +4.31% · $65k +25.11M 最重墙、$64k–$66k 带封顶 · $60k −12.55M 是 top-10 里唯一负、撑 fade · 整条 strip 正 —— 25SEP 翻正到 +1.10M、无近端负放大器（11JUL +15.54M 今日 08:00Z 结算）</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子在延伸把现货带进正墙带更深处时加深了多 γ 阻尼
              </span>
              。aggregate GEX 是
              <span className="dn-tag bull">+131.8M / 1%</span>（07-10 是
              +125.6M —— 重新加深到反弹新高）、稳稳阻尼。0-γ flip 是
              <span className="dn-tag">$61,485</span>（前 $61,215）、现货
              $64,138 坐在
              <span className="dn-tag bull">上方 +4.31%</span> 按现货口径
              （64,137.88 / 61,485 − 1 = +4.315%）；GEX 文件自己的
              &ldquo;dist to flip&rdquo; 读
              <span className="dn-tag bull">+4.8%</span>、对它的 Deribit idx
              $64,431（比 live 现货高 $293）、算
              <span className="dn-tag bull">+4.79%</span>（64,431 / 61,485 −
              1 = +4.792%）—— 两参考都正、现货在 flip 上方、垫从 07-10 备忘
              的 +3.28% 随价格离 flip 而拓宽。墙图夹住现货、最重正墙就在
              头顶：<span className="dn-tag bull">$65k +25.11M</span>（~+1.3%）、
              <span className="dn-tag bull">$66k +22.57M</span>、
              <span className="dn-tag bull">$64k +21.28M</span>（正在现货）、
              <span className="dn-tag bull">$70k +19.44M</span>、
              <span className="dn-tag bull">$68k +18.13M</span>、
              <span className="dn-tag bull">$64.5k +11.03M</span>、
              <span className="dn-tag bull">$80k +8.84M</span>、
              <span className="dn-tag bull">$67k +8.08M</span>、
              <span className="dn-tag bull">$72k +6.88M</span>；top-10 里唯一
              一根负是
              <span className="dn-tag bear">$60k −12.55M</span>、坐在下方作
              fade 磁铁。
              <span className="dn-em">
                本子把挤压封进密集的 $64k–$66k 正带（+25.11M / +22.57M /
                +21.28M 簇是价格正上方的重顶盖）、撑一根向 $60k 的 fade
                （那里 −12.55M 簇会放大一根破地板）—— 一个阻尼轮廓、把价格
                钉在 flip 和 $66k 之间、直到一根到期或现货流打破它。
              </span>{' '}
              按到期没有一根近端负放大器：11JUL 0.3DTE
              <span className="dn-tag">+15.54M</span>（今日 08:00Z 结算、快照
              后、正）、12JUL 1.3 +6.48M、13JUL 2.3 +5.91M、14JUL 3.3
              +0.10M、17JUL 6.3 +40.15M、24JUL 13.3 +11.91M、31JUL 20.3
              +46.41M（最重前向块、正）、28AUG 48.3 +8.30M、25SEP 76.3
              <span className="dn-tag bull">+1.10M</span>（从 07-10 的 −0.93M
              唯一负翻正）、25DEC 167.3 +2.88M、26MAR27 258.3 +1.08M、25JUN27
              349.3 +0.56M。整条 strip 正 —— 连 25SEP 前向都翻绿 —— 所以反弹
              跑时没 γ 顺风、一根 fade 也会跑时没 γ 加速器、直到价格丢 flip。
            </p>

            <p>
              IV 中位数横跨 876 合约是
              <span className="dn-tag">41.1%</span> 对 30D close-to-close RV
              <span className="dn-tag">30.26%</span> —— 链级溢价
              <span className="dn-tag">~+10.8pt</span>（比 07-10 备忘的 +9.6pt
              略宽、因 realized 在区间里松）。Put/Call OI 比
              <span className="dn-tag">0.54</span>（call OI 232,462 BTC）——
              call 重的 open interest、与头顶正墙带一致。
              <span className="dn-em">
                是 N 合约的链中位数、<em>不是</em>可交易价差；expiry- /
                strike-level vega、skew、期限结构仍未载入、vol 读法保持
                framework only。
              </span>{' '}
              RV 方法：30D close-to-close、logret.std × √365 × 100、用最末 30
              根日 log return（= 连续 31 根日 close）、锚自 parquet 最末 bar
              2026-07-11 00:06Z；29-return 另一口径读 30.79%。IV 在 41.1% 比
              07-10 备忘的 41.7% 低一点 —— 链随延伸印而略松、但 +10.8pt 溢价
              说 implied 仍领先 realized。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 利率松了（10Y 4.54%、−2bp）—— reclaim-long 利率筛（10Y &lt; 4.55%）翻回 TRUE、10Y re-grow 闸（&gt;4.53%）仍触发但仅 1bp · TIPS 2.31% EXTREME · DXY 100.94 EXTREME 不变 · Fed 净流动性 $5.958T EXTREME RISK-ON · HY 信用 RISK-ON 2.70% · 跨资产平在 |r| 0.315 NORMAL、BTC +2.22% 仍领 NQ +0.82% 差 +1.40pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面仍分裂、但利率腿松了刚好够把 reclaim-long 筛翻回开
              </span>
              。面板渲染 2026-07-10 22:16Z、比快照早约 1.85h。US 10Y
              nominal <span className="dn-tag bull">4.54%（−2.0bp）</span>、
              regime z <span className="dn-tag bear">+1.82</span>、偶发 z
              <span className="dn-tag">+1.21</span> —— RISK-OFF、但松到 4.55%
              reclaim-long 阈值下方。10Y TIPS real
              <span className="dn-tag bear">2.31%（0.0bp）</span>、regime z
              <span className="dn-tag bear">+2.77</span>、偶发 z
              <span className="dn-tag bear">+1.62</span> —— EXTREME RISK-OFF。
              5Y5Y BE 通胀 <span className="dn-tag">2.20%（+2.0bp）</span> ——
              无标。HY OAS <span className="dn-tag bull">2.70%（0.0bp）</span>、
              regime z <span className="dn-tag bull">−1.21</span>、偶发 z
              <span className="dn-tag bull">−0.59</span> —— RISK-ON、不变、
              仍松。MOVE 债波 <span className="dn-tag">69.5</span> —— 中性、
              从 07-10 备忘的 72.4 松。DXY
              <span className="dn-tag bear">100.94（−0.11）</span>、regime z
              <span className="dn-tag bear">+2.10</span> —— EXTREME RISK-OFF、
              不变；Fed 净流动性
              <span className="dn-tag bull">$5.958T（+0.118T）</span>、偶发 z
              <span className="dn-tag bull">+2.47</span> —— EXTREME RISK-ON、
              带着同一根新鲜周度印。US-JP 10Y 利差
              <span className="dn-tag">1.89%（−2.0bp）</span>；USD/JPY
              <span className="dn-tag">162.36（−0.18）</span>；USD/CNY 6.7667。
              <span className="dn-em">
                净：reclaim-long 利率筛（10Y &lt; 4.55%）在 4.54% 翻回 TRUE
                （07-10 是干净 FALSE 在 4.56%）—— 第二根 scout 闸、昨天暗、
                今天又亮。put-spread re-grow 闸的 10Y 腿仍 FIRED 但仅仅 ——
                4.54% 在 4.53% 触发上方 1bp —— HY OAS 腿仍未触发、在 2.78%
                触发下方 8bp。OR 闸在利率上仍跳、信用松、但本子无持对冲、
                所以这根 fire 仍是观察事件、不是自动滚。宏观脉搏在边际上松
                （利率 −2bp、MOVE 更低）而美元和流动性守住。
              </span>{' '}
              JGB 月度 2.65%（陈旧 70d）带 EXTREME RISK-OFF —— 不依赖。
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
                <tr><td>US 10Y nominal</td><td className="num">4.54%</td><td className="num bull">−2.0bp</td><td className="num bear">+1.82</td><td className="num">+1.21</td><td className="bear">紧 · RISK-OFF · 松到 4.55% 下</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.31%</td><td className="num">0.0bp</td><td className="num bear">+2.77</td><td className="num bear">+1.62</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.20%</td><td className="num bear">+2.0bp</td><td className="num">−0.37</td><td className="num">−0.61</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.70%</td><td className="num">0.0bp</td><td className="num bull">−1.21</td><td className="num bull">−0.59</td><td className="bull">松 · RISK-ON</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.515</td><td className="num">−0.01</td><td className="num">−0.06</td><td className="num bull">−2.13</td><td className="neut">中性 · 偶发</td></tr>
                <tr><td>MOVE 债波</td><td className="num">69.5</td><td className="num bull">松</td><td className="num bull">−0.50</td><td className="num">−0.44</td><td className="neut">中性 · 离 72.4</td></tr>
                <tr><td>DXY</td><td className="num">100.94</td><td className="num">−0.11</td><td className="num bear">+2.10</td><td className="num">+0.72</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.958T</td><td className="num bull">+0.118T</td><td className="num">+2.42</td><td className="num bull">+2.47</td><td className="bull">EXTREME RISK-ON</td></tr>
                <tr><td>USD/JPY</td><td className="num">162.36</td><td className="num">−0.18</td><td className="num bear">+1.56</td><td className="num">+1.30</td><td className="neut">无标</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.89%</td><td className="num bull">−2.0bp</td><td className="num bull">−0.79</td><td className="num">+1.21</td><td className="bull">紧</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7667</td><td className="num">−0.03</td><td className="num bull">−1.48</td><td className="num">−0.82</td><td className="neut">无标</td></tr>
                <tr><td>10Y breakeven</td><td className="num">2.24%</td><td className="num bear">+1.0bp</td><td className="num bull">−1.36</td><td className="num">−0.67</td><td className="neut">无标</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="num">+1.43</td><td className="stale">月度（70d）· 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:00Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.315</span> ——
              <span className="dn-signal">
                耦合平在 NORMAL 区段
              </span>{' '}
              （07-10 是 0.320、两刀前是 0.295 IDIOSYNCRATIC）。BTC 列出的
              对齐由股票 + 金属组合领：SP500
              <span className="dn-tag">+0.427</span>、SILVER
              <span className="dn-tag">+0.424</span>、NQ
              <span className="dn-tag">+0.421</span>、GOLD
              <span className="dn-tag">+0.412</span>、COPPER
              <span className="dn-tag">+0.402</span>、TSLA
              <span className="dn-tag">+0.394</span>、PLAT
              <span className="dn-tag">+0.387</span>、CL
              <span className="dn-tag">−0.339</span>、BRENT
              <span className="dn-tag">−0.326</span>、GOOGL
              <span className="dn-tag">+0.289</span>、MSFT
              <span className="dn-tag">+0.287</span>、NVDA
              <span className="dn-tag">+0.283</span>。7d 相对表现：
              <span className="dn-tag bull">BTC +2.22%</span>（仍是组合里
              trailing 周领头、但领先在收窄、因 06-30 低滚出窗）、NQ
              <span className="dn-tag bull">+0.82%</span>、SP500
              <span className="dn-tag bull">+1.28%</span>、JP225
              <span className="dn-tag bear">−0.07%</span>、NVDA
              <span className="dn-tag bull">+7.36%</span>、META
              <span className="dn-tag bull">+13.48%</span>（组合领头）、AAPL
              <span className="dn-tag bull">+2.29%</span>、TSLA
              <span className="dn-tag bull">+2.18%</span>、MSFT
              <span className="dn-tag bear">−1.55%</span>。金属软：GOLD
              <span className="dn-tag bear">−1.30%</span>、SILVER
              <span className="dn-tag bear">−4.08%</span>、PLAT
              <span className="dn-tag bear">−0.84%</span>。能源涨（对 BTC 负
              相关）：CL <span className="dn-tag bull">+3.82%</span>、BRENT
              <span className="dn-tag bull">+5.23%</span>、NGAS
              <span className="dn-tag bear">−9.89%</span>。
              <span className="dn-em">
                BTC 在 trailing 7d 仍领股票引擎（+2.22% vs NQ +0.82% =
                +1.40pt、对 07-10 的 +1.66pt 在窗滚动内基本不变）因窗仍开在
                06-30 低附近、但缺口随那根低老化而持续收；耦合是承重的宏观
                读法、SP500/SILVER/NQ/GOLD（都 ~+0.41–0.43）是 BTC 最紧的
                对齐、risk-off 金属 + 股票组合是要盯的框。
              </span>
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 200W reclaim 盯位 —— 未收盘周线 +1.61% 离地板、反弹最高收印出、re-confirm-break 触发牢牢 dis-armed（周一 07-13 前仍未定）· 回补反弹 scout —— 价格前置 TRUE、需求本子翻建设性（SM 回补、OI 建、perp 买）、利率筛回 TRUE；反弹里最窄的门、因回补燃料 + 拉伸快周期递延 · 宏观尾 —— 利率腿仍触发、信用松、无持对冲 · 挤压周期 —— SM 回补（无 re-stack）· 无新交易</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子仍平、但主盯位走强、scout 的需求门终于亮
              </span>
              。07-09 盘中被交回、07-10 又拿回的 reclaim 现在印出反弹里最强
              的读：未收盘 07-13 周线收 $64,090.00 在地板上方 +1.61%、现货
              +1.69% 上方、07-10 日线收 $64,129.50 是反弹最高、在地板和
              07-06 reclaim 顶上方。re-confirm-break 触发 —— 一根完成的
              07-13 周线收在地板下 —— 牢牢 dis-armed、但它
              <span className="dn-em">没</span>两向定案（周一 07-13 才结）。
              回补反弹 scout 的价格前置在四条腿上守 TRUE、这一刀需求本子 ——
              07-10 偏空（SM 做空、retail 逃）—— 翻建设性：SM 回补四分之三
              净空、OI 建、perp 本子买、利率筛翻回 TRUE。那是 scout 门整个
              反弹里最窄的一次。仍递延的理由是燃料：登记买方是一个回补的
              perp 空进近封顶 funding、带一簇快周期顶背离和一根 15m TD9
              SELL 闪力竭 —— 一根被回补掉的挤压、还不是现货需求底。今天交易
              本子是：无空仓、还无 scout 入场、无新对冲 —— 等周一 07-13 周线
              收、或一根说回补挤压转成需求底的现货 CVD 需求印、并在守地板带
              的浅回撤上拿 scout、而不是追拉伸的高。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 主仓 · 200W 周期地板盯位 —— reclaim 在未收盘周线上走强：现货 $64,138 在 $63,072.50 地板上方 +1.69%、未收盘 07-13 周 $64,090.00 印 +1.61% 离顶、07-10 日线收 $64,129.50 是反弹最高（在 07-06 reclaim 顶上方）；最后一根完成的周线事件仍是 07-06 reclaim（$64,023.60 上方）；06-15 reclaim 论点仍 FALSIFIED、06-29 破位仍 CONFIRMED</span>
              <div className="dn-trade-name">
                200W 地板 —— reclaim 走强、re-confirm-break 触发牢牢 dis-armed；周一 07-13 周线收前仍未定
              </div>
              <div className="dn-thesis">
                阶梯式 W-MON W-SMA200 地板坐在 $63,072.50（从 07-10 备忘的
                $63,068.05 —— 地板每周升 ~$200、周内基本平）。07-06 周线收
                $64,023.60 重夺它、是 06-29 破位以来首根周线收上方；07-09
                备忘显示未收盘周被拖 −1.45% 下方、07-10 备忘把它拖回上方。
                这一刀延伸把未收盘周清楚推离：07-13 未收盘收 $64,090.00 在
                地板上方 +1.61%、现货 $64,138 在 +1.69% 上方、07-10 日线收
                $64,129.50 结算为反弹最高、在 07-06 reclaim 顶上方。那是一根
                走强的 reclaim、但仍<em>不是</em>一根确认的周线事件 —— 周不
                到周一 07-13 不结、最后一根完成的周线事件仍是 07-06 reclaim。
                re-confirm-break 触发（一根完成的 07-13 收在地板下）盘中牢牢
                dis-armed；地板由结算定、不由插针定。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bull">reclaim 盘中走强 · 未收盘 07-13 周线收 $64,090.00 = 地板 $63,072.50 上方 +1.61% · 现货 +1.69% 上方 · 07-10 日线收 $64,129.50 反弹最高</span></div>
                <div><span className="dn-lvl-k">最后完成的周线事件</span><span className="dn-lvl-v bull">07-06 周线收 $64,023.60（reclaim、在当时地板上方 +1.84%）—— 不变；06-29 破位仍 CONFIRMED、06-15 reclaim 仍 FALSIFIED</span></div>
                <div><span className="dn-lvl-k">re-confirm-break 触发（dis-armed）</span><span className="dn-lvl-v bear">一根完成的周一 07-13 周线收 &lt; $63,072.50 会 re-confirm 破位 —— 当前 dis-armed 在 +1.61% 上方、但只有结算定案</span></div>
                <div><span className="dn-lvl-k">盯位 JSON</span><span className="dn-lvl-v">weekly_200sma.json 缺 —— ratio 百分位 / last-event 未取（不是编造）；地板从 parquet W-MON W-SMA200 重算、按 runbook fallback</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>地板是一根周线收水位、不是盘中的。未收盘周
                +1.61% 离顶且走强、但交易台在周一 07-13 结算印出前不把
                reclaim 从&ldquo;盘中&rdquo;升级到&ldquo;确认&rdquo;。一根
                确认的第二根周线收上方（07-06 是第一根）会是肯定的再 reclaim；
                一根结算回下方 re-arm 破位。现在到周一之间一切都是临时的。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 递延 · 需求门翻建设性（反弹里最窄）· 因回补燃料 + 拉伸快周期递延</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 价格前置 TRUE、需求本子翻建设性（SM 回补、OI 建、perp 买）、利率筛回 TRUE；递延因燃料是空头回补进近封顶 funding、带一簇快周期顶背离
              </div>
              <div className="dn-thesis">
                scout 的两段门 —— 价格前置 AND 一根确认的需求本子 —— 比反弹
                里任何一点都更接近点火。价格：现货守在 flip、D-EMA20、
                D-SMA20 和地板上方（四条腿都 TRUE、对 07-10 不变）。需求：
                07-10 偏空的本子（SM 做空进反弹、retail 逃）翻了 —— SM 回补
                +5,851（净空的 74%）、OI 建 +3,514.7 BTC、perp 本子买（futures
                CVD +749、taker +788、大单 +1,068）。第二闸、reclaim-long
                利率筛（10Y &lt; 4.55%）、在 4.54% 翻回 TRUE。仍递延入场的是
                需求的<em>质量</em>：登记买方是一个回补的 perp 空、不是现货
                需求底（24h 现货 CVD 是 −193、即便 perp 在买）、funding 钉在
                +10.95% 封顶（拥挤、加杠杆多头）、MTF 快周期印一簇顶背离
                （15m/30m/1h/4h）+ 一根 15m TD9 SELL —— 挤压短期被拉伸。有
                纪律的入场等回补转成现货需求吸收、或一根守地板带、给出比追
                拉伸高更好入场的浅回撤。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">价格前置</span><span className="dn-lvl-v bull">四条腿都 TRUE —— 现货 $64,138 在 flip $61,485、D-EMA20 $62,906.78、D-SMA20 $61,891.55 和 $63,072.50 地板上方</span></div>
                <div><span className="dn-lvl-k">需求门（现在建设性）</span><span className="dn-lvl-v bull">SM 回补 +5,851（净空的 74%）· OI +3,514.7 BTC · perp 买（futCVD +749、taker +788、大 +1,068）· 利率筛 10Y 4.54% &lt; 4.55% TRUE</span></div>
                <div><span className="dn-lvl-k">递延（为何还不）</span><span className="dn-lvl-v bear">燃料是空头回补不是现货需求（24h 现货 CVD −193）· funding 钉 +10.95% 封顶 · 快周期顶背离簇（15m/30m/1h/4h）+ 15m ⚡ TD9 SELL —— 短期拉伸</span></div>
                <div><span className="dn-lvl-k">scout 触发</span><span className="dn-lvl-v bull">一根 24h 现货 CVD 需求印（现货买 build、不只 perp）OR 一根守 $63,072–$62,900 地板带的浅回撤、然后 scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">止损 / 首目标</span><span className="dn-lvl-v">止损 1d 收 &lt; $63,072.50（一根结算回地板下结束 reclaim 读）· 首目标 D-SMA50/D-EMA50 $65,177–$65,332、然后 D-EMA100/W-EMA200 $68,868–$68,947</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R（框架、按回撤入场）：</b>一根在守地板带 ~$63,300 入场、
                止损 $63,072（1d 收）= ~$228 风险；首目标 D-SMA50 $65,177 =
                ~$1,877 回报 ≈ 8.2:1 在回撤结构上 —— 这根非对称是交易台偏好
                回撤入场胜过在 $64,138 追现货的原因（追涨入场：对同一止损
                风险 ~$1,066、~1.0:1 到 D-SMA50）。<b>硬规则：</b>不要追拉伸
                的高进近封顶 funding 和一簇快周期顶背离。需求门亮着；入场
                纪律是一根现货需求确认或一个更好的价、不是在区间顶市价买。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 宏观尾 —— OR 闸的 10Y 腿仍 FIRED（4.54% &gt; 4.53%、仅仅）、HY OAS 腿未触发（2.70%、在 2.78% 下方 8bp）；无持对冲可滚 · reclaim-long 利率筛翻回 TRUE（10Y &lt; 4.55%）</span>
              <div className="dn-trade-name">
                下行 put-spread —— 无仓；re-grow 闸在利率上跳、但信用松、无对冲可滚、所以这根 fire 是观察事件
              </div>
              <div className="dn-thesis">
                无持对冲。put-spread re-grow 闸（HY OAS &gt; 2.78% OR 10Y &gt;
                4.53%）在它的 10Y 腿上跳 —— 4.54% 在触发上方 1bp —— 但 HY
                OAS 腿仍未触发在 2.70%（下方 8bp）、信用仍决定性地松（RISK-ON、
                regime z −1.21）。无仓、这根单腿利率 fire 是观察事件、不是
                自动滚。另外、reclaim-long 利率筛（10Y &lt; 4.55%）在 4.54%
                翻回 TRUE、在 07-10 是 FALSE 在 4.56% —— 一根 scout 顺风、
                不是对冲信号。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">无仓 · 无滚 · 单腿利率 fire 仅观察事件</span></div>
                <div><span className="dn-lvl-k">re-grow 闸（OR）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78%（当前 2.70%、距闸 8bp）OR 10Y &gt; 4.53%（当前 4.54% —— FIRED 1bp）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— 在 4.54% 翻回 TRUE（07-10 是 FALSE 在 4.56%）；一根 scout 顺风、等 BTC 内部需求触发</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位下漂设的酌情盯位、不是回测
                断点。一根新对冲腿只在信用腿加入利率腿 AND 一根 BTC 内部
                结构设置论证下行时才有意义 —— 今天两者都不成立（信用松、
                BTC 从地板走强）。在一个深正 γ 的 dealer 本子上不加新对冲。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期 —— SM 这一刀回补（多重建 +3,737、空回补 −2,114、net +5,851 到 −2,057）；无 re-stack-hostile-2 签名印出 · 07-10 的 BJ-15:11 re-stack 是 one-off、这一刀 24h 流是反向：从 24h 开盘稳步回补</span>
              <div className="dn-trade-name">
                挤压周期 —— fade 被拆：SM 跨 24h 回补四分之三净空、无新 re-stack 步
              </div>
              <div className="dn-thesis">
                框架盯 re-stack-hostile-2 签名（Δshort &gt; 0 + Δlong &lt; 0
                同一分钟）作 fade 延续 tell。这一刀盘面做了反面：SM net 从
                −7,908.2 open @ 07-10 00:07Z 经 −7,942.2 trough @ 07-10
                00:26Z 稳步回补到 −1,239.7 @ 07-10 20:31Z（最不空）再漂到
                −2,057 进 pin、由一根多重建（+3,737）和一根空回补（−2,114）
                构成。无离散 re-stack 步印出 —— 07-10 备忘的 BJ-15:11
                re-stack 是 one-off、这一刀主导的 24h 签名是回补、不是压。
                <span className="dn-em">
                  SM 空在 07-10 表达的 fade 论点在延伸里被拆 —— 一根建设性
                  的仓位转向、但回补本身是挤压燃料、所以一根新 re-stack 印
                  会是 fade 被重新武装的 tell。
                </span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">24h SM 签名</span><span className="dn-lvl-v bull">稳步回补 · net −7,908.2（open @ 00:07Z）→ −7,942.2（trough @ 00:26Z）→ −1,239.7（最不空 @ 07-10 20:31Z）→ −2,057（pin）· 多 +3,737、空 −2,114 · cut fraction 74%</span></div>
                <div><span className="dn-lvl-k">re-stack 盯位</span><span className="dn-lvl-v">这一刀无 re-stack-hostile-2 步 · 盯任何新 Δnet ≤ −3k 带 Δshort &gt; 0 + Δlong &lt; 0 同一分钟作 fade 重武装</span></div>
                <div><span className="dn-lvl-k">前向 gating</span><span className="dn-lvl-v bull">一根 24h 现货 CVD 需求印带 SM 守 &gt; −3k 是肯定的回补反弹确认；一根新 re-stack 把 SM 推 &lt; −6k 是 fade 重武装</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根 74% 回补进上涨盘是反弹里最干净的建设性
                仓位转向、但它仍是一根空头的回补、不是一根新的多头底 —— perp
                买、现货没买。把回补当必要不充分：它拿掉 fade 的燃料、但
                需求底只在现货买 build 时确认。把任何新 re-stack 步读作 fade
                被重新武装的信号。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · fade 被拆、reclaim 走强 · scout 的需求门谱系首次翻建设性 · 燃料是回补不是现货需求 · 地板由周一 07-13 周线收定</span>
            </h2>

            <p>
              07-10 那张决策条件里：200W reclaim 走强（未收盘周从地板上方
              +0.21% 跑到 +1.61%、07-10 日线收反弹最高）；回补反弹 scout 的
              需求本子、07-10 偏空、翻建设性（SM 回补 74%、OI 建、perp 买）；
              reclaim-long 利率筛、07-10 FALSE、翻回 TRUE（10Y 松到 4.54%）；
              挤压周期 re-stack 盯位印出无新步（SM 改回补）；宏观 re-grow 闸
              在利率上单腿触发、无持对冲。<em>盘面在 07-10 备忘点名为偏空的
              每一个仓位读上改善 —— fade 被拆、OI 建、利率门亮 —— 但登记
              买方是一个回补的 perp 空进近封顶 funding、不是一根现货需求底、
              快周期转成顶背离。</em>今天条件围绕一根走强的 reclaim、一根
              建设性但回补燃料的需求本子、和一根在它最窄门上、为需求确认
              递延的 scout 重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>200W 周线收（主仓 —— 周一 07-13 结算）</td><td className="bull">未收盘 07-13 收 $64,090.00 = 地板 $63,072.50 上方 +1.61%；07-10 日线收 $64,129.50 反弹最高</td><td>reclaim 走强但未结算；周一收印出前把读法当盘中</td></tr>
                <tr><td>Re-confirm-break 触发（dis-armed）</td><td className="bear">一根完成的周一 07-13 周线收 &lt; $63,072.50</td><td>当前 dis-armed 在 +1.61% 上方；一根结算回下方 re-arm 06-29 破位 —— 只有结算定案</td></tr>
                <tr><td>回补反弹 scout（多）—— 需求门现在建设性</td><td className="bull">价格前置 TRUE（4 腿）AND 需求本子建设性（SM 回补 74%、OI +3,514.7、perp 买）AND 利率筛 10Y 4.54% &lt; 4.55% TRUE</td><td>因回补燃料 + 拉伸快周期递延；scout long 0.2R 在一根 24h 现货 CVD 需求印 OR 一根地板带回撤守、目标 D-SMA50 $65,177</td></tr>
                <tr><td>fade 重武装（挤压周期）</td><td className="bear">一根新 re-stack-hostile-2 步（Δshort &gt; 0 + Δlong &lt; 0 同一分钟）把 SM 推 &lt; −6k AND 1h 收 &lt; 地板带</td><td>SM 空重表达 fade —— 把 scout 站下、重开 fade 盯位；74% 回补后基率低</td></tr>
                <tr><td>周期地板丢（升级）</td><td className="bear">1d 收 &lt; $63,072.50（200W 地板）</td><td>结束盘中 reclaim 读；地板上方消化论被证伪、fade 盯位重开</td></tr>
                <tr><td>宏观尾 re-grow（单腿触发）</td><td className="bear">HY OAS &gt; 2.78%（距闸 8bp）OR 10Y &gt; 4.53%（FIRED 在 4.54% 1bp）</td><td>无持对冲可滚；单腿利率 fire 是观察事件、不是自动滚 —— 信用腿须加入才有新对冲</td></tr>
                <tr><td>reclaim-long 利率筛（翻 TRUE）</td><td className="bull">10Y &lt; 4.55% 收 —— TRUE 在 4.54%（07-10 是 FALSE 在 4.56%）</td><td>一根 scout 顺风；等 BTC 内部需求触发才转 scout long</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                回补燃料的挤压是否转成一根现货需求底 —— 一根 24h 现货 CVD
                需求印带 SM 守在 −3k 上方、AND 周一 07-13 周结在 $63,072
                地板上方 —— 还是近封顶 funding 和快周期顶背离簇标出一根
                向 flip 回退、重武装 SM 空的拉伸高。07-10 的 fade 论点已被
                拆；问题现在是 perp 领的回补是否拓宽成需求底、还是作为挤压
                力竭
              </span>
              。在那之前、本篇按写好的跑：本子平、200W reclaim 走强但周一前
              未结、回补反弹 scout 在它最窄门上 —— 需求本子建设性、价格
              前置 TRUE、利率筛亮 —— 但为一根现货需求确认或一个更好的回撤
              入场递延、宏观面在边际上松而无新对冲触发。下一个 24h 的对读是
              <em>耐心 —— 门亮着、但确认需求、让周线收把地板结掉</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-07-11-desk-note.md）
            </span>
            <b>状态：</b>v2 在 STAGE B codex 敌对式跨模型审计后升级（判决
            PASS-WITH-NOTES —— 0 CRITICAL、2 MAJOR、3 MINOR；无发布门级
            结构性破裂）、记于
            <code>audits/2026-07-11-desk-note.md</code>。每条 finding 都就地
            应用、并在完整 EN 文件上做了 grep-closure（搜索模式、修前命中、
            修后命中）：<b>DN-001（MAJOR）</b>—— 陈旧仓位标题
            <code>net −4,796→…</code>：搜 <code>4,796</code>、1 → 0（标题
            现为 <code>net −7,908→−2,057</code>）—— RESOLVED。
            <b>DN-002（MAJOR）</b>—— 追涨入场 R/R 高估：搜
            <code>1.8:1</code>、1 → 0（追涨 R/R 改正为
            <code>~1.0:1 到 D-SMA50</code>：回报 $1,039 / 风险 $1,066）——
            RESOLVED。<b>DN-003（MINOR）</b>—— 24h funding 年化 + 点差：搜
            <code>+9.93%</code> / <code>+1.02pt</code>、2 / 1 → 0 / 0（现为
            <code>+9.97% → +10.95%（+0.98pt）</code>）—— RESOLVED。
            <b>DN-004（MINOR）</b>—— 24h 窗措辞：搜 <code>1440 sampled</code>、
            1 → 0（数据来源现为
            <code>1,440 根分钟间隔 / 1,441 采样行含开盘</code>）—— RESOLVED。
            <b>DN-005（MINOR）</b>—— <code>−7,942.2</code> 被误标为 24h 开盘
            （它是 trough @ 00:26Z、在 −7,908.2 开盘 @ 00:07Z 之后 19 分钟）：
            搜 <code>right at the 24h open</code> / <code>(open)</code> /
            <code>open trough</code>、3 → 0（三处都改述为 open @ 00:07Z →
            trough @ 00:26Z；残留的 <code>−7,942.2</code> 实例都带 min/trough
            标签）—— RESOLVED。五条 finding 修后命中全部 = 0。
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；Next 的
            launcher 在 <code>node_modules/next/dist/bin/next</code> 处对
            Node &lt; 20.9.0 硬退出、所以完整 <code>next build</code> 被环境
            阻塞。<code>npx --no-install tsc --noEmit</code> 是 build proxy、
            v2 修正后再跑一次。快照 pin 2026-07-11 00:07Z（BJ 08:07 实时盘面
            行）；滚动源存档于 /opt/desk-note/snapshots/2026-07-11-0007/ 供
            逐字节重审。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-07-11 00:07Z）、
            provenance 在数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-07-10 22:16Z（比快照早约 1.85h）、部分输入明确陈旧或待定
            并已标注。水位、规模与条件是交易台流程的示例、不是长期推荐。
            过去的相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损风险、
            加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                fade 被拆 —— SM 把四分之三的空在延伸里回补。reclaim 走强、
                scout 的需求门终于亮。但燃料是回补、不是现货需求、funding
                钉在封顶。耐心 —— 确认需求、让周线收把地板结掉。
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
            v2 · 2026-07-11 00:07Z 快照 · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
