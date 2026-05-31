import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-05-31 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-05-31',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-05-31' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260531() {
  await requireViewer('/zh/desk/2026-05-31');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-05-31 · v2</span>
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
              <span className="dn-big">$73,883</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.49%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-05-31 08:09Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-31 08:09Z（snapshot pin）</td>
                  <td className="dn-flag">最新 · 1 分钟 · 审计时文件 tail = pin · 此快照落在 31MAY 08:00Z 期权结算后约 9 分钟</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-05-31 08:01Z scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 较快照锚滞后约 8
                    分钟 · 含未收盘 K 线 · 扫描存档于
                    audits/2026-05-31-desk-note.md
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-05-31 00:02Z 快照</td>
                  <td className="dn-flag">
                    pre-settle · 较快照锚滞后约 8h · Deribit idx $74,104
                    对 live $73,883 · 938 合约（05-29 是 1,004 · 29MAY
                    0DTE 已在 05-29 08:00Z 过期、30MAY 0DTE 已在 05-30 08:00Z
                    过期）· 31MAY 0.3DTE +17.00M 在今日 08:00Z 结算（快照前
                    9 分钟）· 除 31MAY 后 aggregate ≈ +45.9M 仍正 ·
                    <em>合约计 938 与 IV 中位数 39.9% 是 PRE-31MAY-settle 值、
                    来自此 00:02Z 文件；结算后的合约计 / IV 中位数未重算
                    （除 31MAY 后的 aggregate 已重算）</em>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-05-31 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 8h · 7d 1h bar · 22 资产 · 166 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-30 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 9.9h · FRED Tier-1 再松（10Y −3bp 到 4.45%、
                    TIPS −3bp 到 2.06%、HY OAS +1bp 到 2.72%、MOVE +0.48
                    到 70.2）· DXY 走软 −0.59 自 05-29 到 98.91、Fed 净
                    流动性平 $5.872T · Tier-3 通胀行抓取失败
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-05-31 00:06Z</td>
                  <td className="dn-flag">
                    较快照锚滞后约 8h · 偏移按现货重算 ·
                    W-SMA150 / W-SMA200 不可计算（盘上只有 126 根周 bar）
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
              <span className="dn-v">+4.90%</span>
              <span className="dn-src">live · 00:08Z 快照无封顶 pin · 24h 均值 +4.00%（05-29 是 +9.66%）· 封顶占用 1 / 1441 采样行 = 0.1%（1441 = 1,440 根分钟到分钟间隔 + 开盘行 · 05-29 是 737/1441）· 谷点 −0.21% ann 短暂转负 @ 2026-05-30 11:39Z（BJ 19:39 05-30）</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">+10.95% → +4.90%（−6.05pt 离顶）</span>
              <span className="dn-src">区间 −0.21% / +6.97% · 24h 内只钉住封顶 1 / 1441 采样行（05-29 是 737/1441）· 杠杆门在这 24h 内开宽到底</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−0.36%（−373 BTC）</span>
              <span className="dn-src">live · 谱系首次 OI 缩 · SM long_btc −2,978（多被洗得更狠）、short_btc +994（轻加）—— 净泄杠杆、多侧切得更深</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bull">60.35 / 39.65</span>
              <span className="dn-src">live_db `mkt_long_pct` · 从 63.85 → 60.35（−3.50pt 离谱系峰）· 24h 区间 60.31 / 63.16 —— retail 拥挤多终于在松</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−29.2k（净 SHORT、两侧都更小）</span>
              <span className="dn-src">live · long 10.77k − short 39.93k · short 峰 41.25k @ 2026-05-30 22:16Z（BJ 06:16 05-31）此后泄掉 −1.32k；long_btc 从 13.09k 落到 10.77k 自 05-29</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 05-29 备忘</span>
              <span className="dn-v">−29.0k → −29.2k（−163 净、两侧 −2k）</span>
              <span className="dn-src">|Δ|/prior_net = 0.6% · 净几乎不动但本子两侧都缩（long −2,313、short −2,150）· BJ 13–15 节奏 <em>断</em> —— 24h 延伸步印在 BJ 22:01 05-30（Δnet −5,569）、在 BJ 13–15 窗外</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">39.9% / 24.91%</span>
              <span className="dn-src">GEX IV 中位数 · 938 合约（05-29 是 41.4% / 1004 · 29MAY/30MAY 0DTE 已清）· <em>938 与 39.9% 都是 PRE-31MAY-settle、来自 00:02Z 文件；结算后未重算</em></span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+1.54%（在上方）</span>
              <span className="dn-src">flip $72,764（前 $74,939 · 落 −$2,175）· 对 live 现货 $73,883（+1.54%；73,883.09/72,764 − 1 = 1.538%）/ GEX 文件 Deribit idx $74,104（+1.84%；74,104/72,764 − 1 = 1.8416%）—— 两参考都正、tile 取现货侧 +1.54% · aggregate GEX +62.9M（前 −47.9M、翻面）· 除 31MAY 后 ≈ +45.9M</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                放大器在 05-29 建模的那一刻准时到期、dealer 本子从净空 γ 翻面
                到净多 γ——一根 $111M 的结构性翻转
              </span>
              。aggregate GEX 从
              <span className="dn-tag bear">−47.9M</span> 走到
              <span className="dn-tag bull">+62.9M</span>、29MAY 那 −96.34M
              的块在 08:00Z 05-29 结清、30MAY 0DTE 在 08:00Z 05-30 过期、
              0-γ flip 从 <span className="dn-tag">$74,939 → $72,764</span>
              （一根 $2,175 的下台阶）。谱系首次、现货
              <span className="dn-tag bull">$73,883 在 flip 上方 +1.54%</span>
              （不在下方）。funding 在同一窗内整根离开封顶：live
              <span className="dn-tag">+4.90% ann</span>、24h 均值
              <span className="dn-tag">+4.00%</span>（05-29 是 +9.66%）、
              封顶占用<span className="dn-tag">1 / 1441 采样行（0.1%）</span>
              （05-29 是 51%）、路径一度短暂
              <span className="dn-tag bull">转负 −0.21% ann @ BJ 19:39
              05-30</span>。retail 拥挤多侧泄
              <span className="dn-tag">63.85% → 60.35%（−3.50pt 离谱系峰）</span>、
              OI 谱系首次缩（−373 BTC）、short_btc 峰
              <span className="dn-tag bear">41,250 @ BJ 06:16 05-31</span>
              此后泄 −1.3k 到 39,932。本篇标定后放大器的翻面——支撑下腿的
              结构性背景没了、周期锚在收盘口径上守住、交易本子从「空头跑完」
              转向「锚上方消化」、scout 在 2-of-3 确认腿到位前继续递延。
            </p>

            <p>
              现货报 <span className="dn-tag">$73,883</span> live、
              <span className="dn-tag bull">+0.49%</span> 在 24h ——
              谱系破位以来后段第二根 24h 上印（05-30 是首根上收
              $73,857）—— 在一条窄区间
              <span className="dn-tag">$74,109 / $73,130</span> 里（低 @
              BJ 20:36 05-30 / UTC 12:36 05-30、高 @ BJ 06:31 05-31 / UTC
              22:31 05-30）。<span className="dn-signal">周期锚在收盘口径
              上守住了那条地板</span>：05-29 收
              <span className="dn-tag">$73,428</span>、05-30 收
              <span className="dn-tag bull">$73,857</span>（一根 $429 上日）、
              未收盘的 05-31 在 parquet 最末 bar
              <span className="dn-tag">$73,828</span>—— 三根都坐在
              <span className="dn-tag bull"> D-SMA100 $73,146（+1.01%）</span>
              这条周期锚上方。MA 矩阵的头顶没改善——05-29 破掉的 W-SMA20
              地板仍在头顶
              <span className="dn-tag bear">W-SMA20 $74,161（−0.37%）</span>、
              D-SMA50/D-SMA150 簇坐在五根 MA 深的
              <span className="dn-tag bear">$76,175 – $77,223（−3.0% 到
              −4.3%）</span>、周期锚仍是矩阵上唯一一根承重正偏移。
              <span className="dn-em">
                本子守住地板、甩掉放大器、但头顶一根 MA 都还没重夺：这是
                锚上方消化、不是结构性转向。
              </span>{' '}
              回补反弹 scout 在 05-29 的三条触发——1h 收 &gt; $74,939 flip
              AND SM short_btc &lt; 38k AND long_btc &gt; 13k——一条都没
              干净落。flip 的「重夺」是被动的（flip 下来到我们这里、不是
              我们升上旧的）；short_btc 泄了、但仍在 38k 闸上方 1.93k；
              long_btc 反而落得更深、到 10.77k（比 13k 闸更差、不是更好）。
              scout 继续递延。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · 24h 本子两侧都缩 · 周期节奏 BROKEN（延伸印在 BJ 22:01、在 BJ 13–15 窗外）</span>
            </h2>

            <p>
              <span className="dn-signal">
                仓位本子两侧都在去杠杆——谱系首次的双侧缩
              </span>
              。SM net 是
              <span className="dn-tag">−29,158</span>、对 05-29 备忘的 −28,995
              ——也就是
              <span className="dn-em">+0.6% 更空、几乎不动</span>
              （|−29,158 − (−28,995)| / 28,995 = 0.6%）。但两侧分量动得
              很实在：long_btc
              <span className="dn-tag bear">13.09k → 10.77k（−2.31k）</span>、
              short_btc <span className="dn-tag bull">42.08k → 39.93k
              （−2.15k）</span>。多侧切得比空侧 trim 更狠、剩下的 net 几乎
              一样——一根真双侧 de-grossing。24h 窗内：long_btc Δ
              <span className="dn-tag bear">−2,978</span>、short_btc Δ
              <span className="dn-tag">+994</span>、net Δ
              <span className="dn-tag bear">−3,972</span>（−2,978 − 994 =
              −3,972）—— 24h 形状是多被洗 + 空小加。short_btc 在 24h 高峰：
              <span className="dn-tag bear">41,250 @ 2026-05-30 22:16Z（BJ
              06:16 05-31）</span>、此后泄 −1,318 进快照。SM net 谷
              <span className="dn-tag bear">−30,799 @ 2026-05-30 14:11Z（BJ
              22:11 05-30）</span>—— 这根谷
              <span className="dn-em">不在</span> BJ 13–15 窗内、这条窗里
              首次。long_btc 谷
              <span className="dn-tag bear">10,088 @ 2026-05-30 19:11Z（BJ
              03:11 05-31）</span>—— 谱系新低的多侧。
            </p>

            <p>
              <span className="dn-signal">
                框架的 BJ 13–15 节奏断了
              </span>
              。24h 延伸事件印在
              <span className="dn-tag bear">2026-05-30 14:01Z（BJ 22:01
              05-30）</span>、现货
              <span className="dn-tag">$73,617</span>：long_btc 一根线
              <span className="dn-tag">14,143 → 11,020</span>（−3,123 BTC）、
              short_btc 一根线
              <span className="dn-tag">39,332 → 41,778</span>
              （+2,446 BTC <em>单分钟</em>；41,778 − 39,332 = 2,446）、
              SM net 一根线
              <span className="dn-tag">−25,189 → −30,758</span>（Δnet −5,569
              —— 谱系单分钟最大 Δ）。这根步是次级签名——重堆敌对-2
              （Δshort &gt; 0 + Δlong &lt; 0 同一分钟）——但它印在 BJ 22:01、
              <em>晚于</em>上一根节奏的 BJ 13–15 窗整整 7 个小时。05-29 与
              05-30 真正的 BJ 13–15 窗都
              <span className="dn-em">安静</span>：05-29 BJ 13–15 SM net 漂
              +768 跨 2h 窗（小回补、max |Δnet| 259）；05-30 BJ 13–15 漂
              −349（max |Δnet| 269）；今天 05-31 BJ 13–15 窗经过、没印离散
              步（max |Δnet| 140、窗 Δ −109）。7 日 BJ 13–15 节奏
              <span className="dn-em">
                断了：周期不再钉在 BJ 开盘—午盘窗上
              </span>
              。重堆也在掉幅度——05-30 14:01 是 −5,569 在更深锚位、两侧
              同时动、是一根 one-off、不是 cycle 3 的开端。
            </p>

            <p>
              杠杆侧是这一轮 regime 变化最大声的信号。
              <span className="dn-signal">
                funding 整根离开了 Binance 封顶
              </span>
              ：live <span className="dn-tag">+4.90% ann</span>、24h 区间
              <span className="dn-tag">−0.21% / +6.97%</span>、谷点
              <span className="dn-tag bull">−0.21% ann（短暂空付多）@
              2026-05-30 11:39Z（BJ 19:39 05-30）</span>——谱系首次、多头
              在窗内被空头付费。24h 均值 ann
              <span className="dn-tag">+4.00%</span>（05-29 是 +9.66% ——
              一根 −5.66pt 的冷却）。封顶占用
              <span className="dn-tag bull">1 / 1441 采样行（0.1%）</span>
              坐在最大 +6.97%（05-29 是 51% —— 封顶空了）；分钟 Δ
              <span className="dn-tag">478 上 / 484 下 / 478 平</span>
              （1,440 根分钟到分钟间隔；1441 采样行 = 1440 间隔 + 开盘行）
              —— 一本平衡的双向本子、不是单向压。OI Δ
              <span className="dn-tag bull">−373 BTC（−0.36%）</span>跨 24h
              ——
              <span className="dn-em">谱系首次 OI 缩</span>
              （05-29 是 +5,401 BTC / +5.34% 扩张）。retail
              <span className="dn-tag">mkt_long_pct 60.35%</span>从 63.85%
              ——一根 −3.50pt 的冷却离开谱系峰、是多侧首次实质 de-crowding。
              perp 对现货
              <span className="dn-tag bear">−$109.04 折价</span>在快照
              （1h 均 −$111.60、区间 −$147.09 / −$81.99；4h 均 −$113.24；
              24h 均 −$107.12、区间 −$147.09 / −$26.88 —— 24h basis 从未翻
              升水、但昨天那些 −$412 的印今天没重现）。1 分钟 aggressor
              skew 快照
              <span className="dn-tag bear">−6.1</span>（1h 均 −10.16、
              区间 −41.7 / +36.6）—— 一档温和卖攻倾斜、本次快照没超卖
              反射买盘。
              <span className="dn-em">
                funding 离开封顶 + OI 缩 + retail 从拥挤多峰泄 + SM 两侧都
                更小：杠杆本子在<em>泄气</em>、不是在压。放大器没了、仓位
                本子看得见地放气。
              </span>
            </p>

            <p>
              窗口流向是<em>双侧买进 24h 上印、最近一小时现货侧略偏重</em>。
              24h：价格 <span className="dn-tag bull">+0.49%</span>、OI
              <span className="dn-tag bull">−373 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +3,281</span>
              <span className="dn-em">（跨 05-30 14:59Z cb_cvd reset
              调整后）</span>、期货 CVD
              <span className="dn-tag bull">Δ +2,709</span>、大单
              <span className="dn-tag bull">+554 BTC / 650 笔</span>、
              taker-net <span className="dn-tag bull">+1,405</span> ——
              <span className="dn-em">
                现货 AND 期货 都在买一根温和上印、OI 还在缩；+0.49% 是在
                净回补上印出、不是在新堆多上 —— 正是上一篇点出的「后
                放大器回补形」
              </span>
              。4h（进快照）：价格
              <span className="dn-tag bear">−0.14%</span>、OI
              <span className="dn-tag">+119 BTC</span>、现货 CVD
              <span className="dn-tag">Δ +46</span>、期货 CVD
              <span className="dn-tag">Δ −9</span>、大单
              <span className="dn-tag bear">−39 BTC / 108 笔</span>、
              taker-net <span className="dn-tag bear">−19</span> ——
              <em>一段平 / 静的 4h、买方在快照前歇了一口</em>。1h：价格
              <span className="dn-tag bear">−0.10%</span>、OI
              <span className="dn-tag bull">−67 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −162</span>、期货 CVD
              <span className="dn-tag bull">Δ +91</span>、大单
              <span className="dn-tag bull">+57 BTC / 19 笔</span>、
              taker-net <span className="dn-tag bull">+91</span> ——
              <em>现货卖、期货买、大单买 —— 一道杂色信号、OI 仍在缩</em>。
              24h 那道双侧买盘是这条谱系里最干净的回补形、但 1h 里现货在
              快照前给出 —— 买盘是在轮动、不是在新进。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 8h 水下金叉刚印 · 慢周期仍在翻、引擎周期在抬 · 周期锚在收盘口径上守住</span>
            </h2>

            <p>
              <span className="dn-signal">
                8h MACD 在 00:00Z 05-31 收盘印出一根新鲜水下金叉
              </span>
              —— 引擎周期从 05-29 的 ⚡ TD9 BUY 确认走到比它慢一根的水下
              金叉确认。慢周期没加入：
              <span className="dn-tag bear">3d 水上死叉在 1 bar</span>
              （仍确认、对 05-29 不变）、12h 带
              <span className="dn-tag bear">水下死叉 7b</span>、1d
              <span className="dn-tag">水上死叉 19b</span>、1d 仍<em>在
              云内</em>（73.3k–77.2k）。引擎周期抬：1h RSI
              <span className="dn-tag bull">55.8</span>（05-29 是 48.7 —— 中
              位线全面重夺）、4h RSI 43.9（前 35.3 —— 离开深超卖）、8h
              RSI 38.4（前 34.1）、12h RSI 34.6（仍最深超卖、前 31.6）。
              15m 和 30m 几天来首次翻云上
              （<span className="dn-tag bull">15m 云上 1b、30m 云上 30b</span>）、
              1h 在云里 2b（$73.4k–$73.9k —— 正好夹住现货）。昨日走完的两根
              TD9 BUY（1h、4h）推进到
              <span className="dn-tag">Buy 4（1h）</span>与
              <span className="dn-tag">Sell 5（4h）</span>—— 4h 在反弹里已经
              翻了两遍 setup。本次没新 ⚡ TD9 印；05-29 的 8h ⚡ TD9 BUY 推
              进到 Sell 3。
              <span className="dn-em">
                直读：引擎已经确认反弹（8h 金叉 + 1h RSI 中位线重夺）、慢
                周期没加入（3d 死叉、12h 死叉、1d 在云内）、周期框架（3d
                仍只在 1 bar 内）仍是把关的 regime 读。引擎上反弹真的；
                慢周期会告诉我们这是缓和还是转向。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">73,888</td><td className="num">50.9</td><td className="neut">死叉（水上）20b</td><td className="bull">云上 ↓73.8k 1b</td><td>Sell 2</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">73,888</td><td className="num">54.1</td><td className="neut">死叉（水上）7b</td><td className="bull">云上 ↓73.5k 30b</td><td>Sell 1</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">73,888</td><td className="num bull">55.8</td><td className="bull">金叉（水下）33b</td><td className="neut">云内 73.4–73.9k 2b</td><td>Buy 4</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">73,888</td><td className="num">43.9</td><td className="bull">金叉（水下）8b</td><td className="bear">云下 ↑76.2k 31b</td><td>Sell 5</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">73,888</td><td className="num">38.4</td><td className="bull">金叉（水下）刚印</td><td className="bear">云下 ↑78.1k 45b</td><td>Sell 3</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">73,888</td><td className="num bull">34.6</td><td className="bear">死叉（水下）7b</td><td className="bear">云下 ↑78.8k 17b</td><td>Sell 3</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1d</td><td className="num">73,888</td><td className="num">37.8</td><td className="neut">死叉（水上）19b</td><td className="neut">云内 73.3k–77.2k 4b</td><td>Buy 5</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">73,888</td><td className="num">45.8</td><td className="neut">死叉（水上）1b</td><td className="neut">云内 73.5–91.1k 9b</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">73,888</td><td className="num">42.7</td><td className="bull">金叉（水下）6b</td><td className="bear">云下 ↑100.3k 17b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">73,888</td><td className="num">47.5</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 27b</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 08:01Z scan（滚动 latest
                    文件；逐字存档于 audits/2026-05-31-desk-note.md）。
                    头部告警：<em>8h 水下金叉（刚印）</em>、
                    <em>3d 水上死叉 1b（仍确认）</em>。扫描现货 $73,888、
                    24h +0.60%（08:01Z MTF 扫描；live-tape 头部 08:09Z 在
                    同一 24h 窗读 +0.49% —— 8 分钟时间差导致 0.11pt 偏差）、
                    24h H/L $74,109 / $73,130、qVol $3.88B。收盘为未收盘
                    K 线；每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认锚上方的消化。现货 $73,883 坐在
              <span className="dn-tag bull"> D-SMA100 $73,146 上方 +1.01%</span>
              —— 周期锚 —— 日线阶梯上单一根正偏移。05-29 破掉的 W-SMA20
              地板刚在头顶
              <span className="dn-tag bear">W-SMA20 $74,161（−0.37%）</span>
              —— 一道紧的重夺腿、但未重夺。其余按顺序在头顶：
              <span className="dn-tag bear">D-EMA20 $76,135（−2.96%）</span>、
              <span className="dn-tag bear">D-SMA150 $76,175（−3.01%）</span>、
              <span className="dn-tag bear">D-EMA50 $76,192（−3.03%）</span>、
              <span className="dn-tag bear">D-EMA100 $76,539（−3.47%）</span>、
              <span className="dn-tag bear">D-SMA20 $76,792（−3.79%）</span>、
              <span className="dn-tag bear">D-SMA50 $77,223（−4.33%）</span>、
              <span className="dn-tag bear">W-EMA20 $77,737（−4.96%）</span>、
              <span className="dn-tag bear">W-EMA150 $78,231（−5.56%；种子）</span>、
              <span className="dn-tag bear">D-EMA150 $78,676（−6.09%）</span>、
              <span className="dn-tag bear">D-SMA200 $79,521（−7.09%）</span>、
              <span className="dn-tag bear">D-EMA200 $81,040（−8.83%）</span>。
              更高更远、已弃用：W-EMA100 $83,225（−11.23%）、W-EMA50 $84,788
              （−12.86%）、W-SMA100 $88,331（−16.36%）、W-SMA50 $93,373
              （−20.87%）。结构性近线集合现在是：周期锚 D-SMA100 在下方
              （正 +1.01%）、W-EMA200 种子刚转正（+0.24% 在 $73,703）、
              W-SMA20 刚在头顶（−0.37%）—— 一道窄 $1k 三明治、撑下面几节
              交易日。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-05-31 00:06Z（close
                $73,827.50）；偏移按 live 现货 $73,883.09 重算。显示的 MA
                水位按 $ 取整、偏移用精确序列值算。W-SMA150 / W-SMA200 仍
                不可计算 —— parquet 历史有 126 根周 bar、不够这两个窗；
                W-EMA150 $78,231（−5.56%）与 W-EMA200 $73,703（+0.24%）
                能显示是因为 EMA 从可用历史 seed、并按种子值披露。日线
                收盘：05-26 $75,906、05-27 $74,418、05-28 $73,591、
                05-29 $73,428、05-30 $73,857、05-31（未收盘）$73,828 —— 连
                续三根收在周期锚 $73,146 上方。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子翻面到净多 γ aggregate +62.9M · flip 落到 $72,764（现货在上方、谱系首次）· 31MAY +17M 在同一快照内结清</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子的 γ regime 跨 29MAY/30MAY 到期对翻了符号
              </span>
              。aggregate GEX 是
              <span className="dn-tag bull">+62.9M / 1%</span>（05-29 是
              −47.9M —— 一根 $110.8M 的正向位移）；本子现在是净多 γ
              （阻尼）。0-γ flip 移动
              <span className="dn-tag">$74,939 → $72,764（−$2,175）</span>、
              现货 $73,883 坐在
              <span className="dn-tag bull">flip 上方 +1.54%</span>
              （现货口径 73,883.09 / 72,764 − 1 = +1.538%）；GEX 文件自己的
              「dist to flip」给 +1.8%、对它的 Deribit idx $74,104（idx 比
              现货高 $221）算
              <span className="dn-tag bull">+1.84%</span>（74,104 / 72,764
              − 1 = +1.8416%）—— 两参考都正、现货在 flip 上方、谱系首根
              上 flip 的快照。墙图在近头顶 strike 上翻面：
              <span className="dn-tag bull">$80k +23.93M</span>（最重墙、
              从 +14.93M 长）、
              <span className="dn-tag bull">$75k +13.60M</span>（05-29 是
              −20.03M —— 翻正）、
              <span className="dn-tag bull">$74k +12.26M</span>（前 −49.37M
              —— 从最重负翻成正撑）、
              <span className="dn-tag bull">$82k +11.14M</span>、
              <span className="dn-tag bear">$60k −8.82M</span> 崩盘 put 残余、
              <span className="dn-tag bull">$74.5k +8.49M</span>、
              <span className="dn-tag bear">$72k −8.45M</span>、
              <span className="dn-tag bear">$70k −8.44M</span>、
              <span className="dn-tag bull">$78k +6.35M</span>、
              <span className="dn-tag bull">$90k +6.08M</span>。
              <span className="dn-em">
                负簇 $70k–$72k 合计仍 −16.89M（不再与 $73k/$74k/$75k 合并
                —— 那三根都翻正）；$74k–$80k 头顶带合约约 +75M 正撑。
                dealer 本子结构性买进回落、卖出反弹
              </span>
              。31MAY26 0.3DTE +17.00M 在今日 08:00Z 印结算（比快照锚早
              9 分钟）；GEX 文件 pre-settle 在 00:02Z、所以除 31MAY 后的
              aggregate ≈ +62.9M − 17.0M = +45.9M、仍净正。前向 expiry：
              1JUN 1.3 +19.49M、2JUN 2.3 −0.48M、3JUN 3.3 +0.18M、5JUN
              5.3 −0.01M、12JUN 12.3 +0.76M、19JUN 19.3 −1.78M、26JUN 26.3
              +2.06M、31JUL 61.3 +13.59M、25SEP 117.3 +10.52M、25DEC 208.3
              +12.15M、26MAR27 299.3 +1.44M。没有一根前向 expiry 带着
              29MAY 那种放大器权重 —— 最重的前向块是 1JUN +19.49M（正）、
              再是 31JUL +13.59M 与 25DEC +12.15M、全部正。下腿的放大器
              时代结构性结束。
            </p>

            <p>
              IV 中位数横跨 938 合约是
              <span className="dn-tag">39.9%</span>（从 05-29 的 41.4% /
              1004 合约下来 —— 一根 −1.5pt vol 冷却）对 30D close-to-close
              RV <span className="dn-tag">24.91%</span> —— 链级溢价
              <span className="dn-tag">~+15.0pt</span>。
              <span className="dn-em">披露：938 合约与 39.9% IV 中位数都是
              PRE-31MAY-settle 值、读自 00:02Z GEX 文件；31MAY 0.3DTE 块
              在 08:00Z（快照前 9 分钟）已清、结算后的合约计与 IV 中位数
              没重算 —— 本篇带的唯一一根结算后数字是除 31MAY 后的
              aggregate（+45.9M = +62.9M − 17.0M）。读者不应该从 39.9% /
              938 这行推断结算后的本子 richness。</span>
              是 N 合约的链中位数、<span className="dn-em">不是</span>可
              交易价差；expiry- / strike-level vega、skew、期限结构仍未
              载入、vol 读法保持 framework only。938 合约对 05-29 是 1,004
              —— −66 是 29MAY 和 30MAY 0DTE 块到期、没近端替代；新的
              31MAY 块今日 08:00Z 已清。RV 方法：30D close-to-close、
              logret.std × √365 × 100、用最末 30 根日 log return（= 连续
              31 根日 close）、锚自 parquet 最末 bar 2026-05-31 00:06Z；底层
              31-close 窗区间 $73,428 – $82,178。（参考：最末 29 returns
              / 30 closes 读 25.19%；页面值 24.91% 来自 30 returns。）
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · Tier-1 又松（10Y 4.45%、TIPS 2.06%、HY OAS 2.72%、MOVE 70.2）· DXY 走软 −0.59 到 98.91 自 05-29 · BTC 对 TradFi 脱钩收窄到 −5.84pt（前 −7.23pt）</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面在利率、实际利率与美元上又松、HY 信用与债波接近平
              </span>
              。面板渲染 2026-05-30 22:15Z、比快照早约 9.9h。US 10Y nominal
              <span className="dn-tag bull">4.45%（−3.0bp）</span>、regime z
              <span className="dn-tag bear">+1.43</span>、偶发 z
              <span className="dn-tag">+0.20</span> —— RISK-OFF 标、已松
              （比 05-29 的 4.48% 低 3bp）。10Y TIPS real
              <span className="dn-tag bull">2.06%（−3.0bp）</span>、regime z
              <span className="dn-tag bear">+1.31</span>、偶发 z
              <span className="dn-tag">+0.70</span> —— 仍 RISK-OFF、已松。
              5Y5Y BE 通胀
              <span className="dn-tag">2.24%（0.0bp）</span> —— 平。HY OAS
              <span className="dn-tag">2.72%（+1.0bp）</span>、regime z
              <span className="dn-tag bull">−1.32</span>、偶发 z
              <span className="dn-tag bull">−1.72</span> —— 仍深 risk-on
              偶发、当日基本平。MOVE 债波
              <span className="dn-tag">70.2（+0.48）</span> —— 仍「松」、
              当日略硬一点。两根抵消继续松：DXY
              <span className="dn-tag bull">98.91（−0.11 当日 · −0.59 自
              05-29）</span>、偶发 z
              <span className="dn-tag">+0.62</span> —— 48h 内实质转软；
              Fed 净流动性平在
              <span className="dn-tag bear">$5.872T</span>（无新周度印）、
              偶发 z
              <span className="dn-tag bear">−2.28</span>。US-JP 10Y 利差
              <span className="dn-tag bull">1.94%（−3.0bp）</span>；USD/JPY
              <span className="dn-tag bull">159.26（−0.01 当日 · −0.31 自
              05-29）</span>（日元更硬）。NFCI −0.510（陈旧 8d）。
              <span className="dn-em">
                净：re-grow 闸又往远走（HY OAS 闸 2.78% —— 在 2.72%、6bp
                触发；10Y 闸 4.53% —— 在 4.45%、8bp 触发）、reclaim-long
                利率筛（10Y &lt; 4.55%）在 4.45% 仍真、宏观面在对 BTC 要紧
                的那几根上仍净 risk-on。BTC 对 TradFi 脱钩本印收窄到 −5.84pt
                （BTC −3.84% vs NQ +2.00%）、从 05-29 的 −7.23pt（按 05-29
                备忘：BTC −4.73% vs NQ +2.50% = −7.23pt）—— BTC 的落后在收、
                主要因为 BTC 停止下延、不是 TradFi 翻倒
              </span>
              。
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
                <tr><td>US 10Y nominal</td><td className="num">4.45%</td><td className="num bull">−3.0bp</td><td className="num bear">+1.43</td><td className="num">+0.20</td><td className="bear">紧 · 已松</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.06%</td><td className="num bull">−3.0bp</td><td className="num bear">+1.31</td><td className="num">+0.70</td><td className="bear">紧 · 仍 RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.24%</td><td className="num">0.0bp</td><td className="num">+0.08</td><td className="num">−0.16</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.72%</td><td className="num bear">+1.0bp</td><td className="num bull">−1.32</td><td className="num bull">−1.72</td><td className="bull">松 · risk-on 偶发</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.510</td><td className="num">0.00</td><td className="num">+0.10</td><td className="num bull">−0.81</td><td className="stale">陈旧 8d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">70.2</td><td className="num bear">+0.48</td><td className="num bull">−0.57</td><td className="num">−0.49</td><td className="bull">松 · 几乎不动</td></tr>
                <tr><td>DXY</td><td className="num">98.91</td><td className="num bull">−0.11</td><td className="num">+0.47</td><td className="num">+0.62</td><td className="bull">更软 · 自 05-29 −0.59</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.872T</td><td className="num">0.000T</td><td className="num">+0.22</td><td className="num bear">−2.28</td><td className="bear">无新周度印</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.26</td><td className="num bull">−0.01</td><td className="num bear">+1.19</td><td className="num">+0.68</td><td className="bull">日元更硬（自 05-29 −0.31）</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.94%</td><td className="num bull">−3.0bp</td><td className="num bull">−0.93</td><td className="num">+0.20</td><td className="bull">再收窄</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7657</td><td className="num bull">−0.01</td><td className="num bull">−1.93</td><td className="num bull">−2.15</td><td className="bull">无标 · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp（月度）</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、166 rows、汇总 00:01Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.237</span>
              （较 05-29 的 0.264 再松 —— 跨过 0.25 阈值、现在在
              IDIOSYNCRATIC 区段、不再 NORMAL）。BTC 列出的对齐实质变弱：
              NQ <span className="dn-tag">+0.372</span>（前 +0.518、现在排
              |r| 第三）、CL <span className="dn-tag">−0.375</span>、TSLA
              <span className="dn-tag">+0.333</span>、SP500
              <span className="dn-tag">+0.328</span>（前 +0.467）、BRENT
              <span className="dn-tag">−0.328</span>、SILVER
              <span className="dn-tag">+0.324</span>（前 +0.463）、PLAT
              <span className="dn-tag">+0.316</span>、GOLD
              <span className="dn-tag">+0.300</span>（前 +0.375）、COPPER
              <span className="dn-tag">+0.299</span>、AMZN
              <span className="dn-tag">+0.290</span>、PALL
              <span className="dn-tag">+0.276</span>、NVDA
              <span className="dn-tag">+0.239</span>（前 +0.423）。7d 相对
              表现：
              <span className="dn-tag bear">BTC −3.84%</span>（比 05-29
              的 −4.73% 不那么差）、NQ
              <span className="dn-tag bull">+2.00%</span>、SP500
              <span className="dn-tag bull">+0.13%</span>（从 +1.36% 冷）、
              JP225 <span className="dn-tag bull">+4.49%</span>、MSFT
              <span className="dn-tag bull">+8.35%</span>（新 TradFi 领头）、
              META <span className="dn-tag bull">+3.10%</span>、TSLA
              <span className="dn-tag bull">+0.24%</span>（前 +4.85%、冷）、
              AAPL <span className="dn-tag bear">−0.16%</span>、NVDA
              <span className="dn-tag bear">−1.68%</span>（不那么差、前
              −2.70%）。金属软：GOLD
              <span className="dn-tag bear">−0.31%</span>、SILVER
              <span className="dn-tag bear">−2.63%</span>、PLAT
              <span className="dn-tag bull">+0.52%</span>。能源停止崩：CL
              <span className="dn-tag bear">−2.57%</span>（前 −9.78%）、
              BRENT <span className="dn-tag bear">−2.24%</span>（前 −9.12%）、
              NGAS <span className="dn-tag bull">+5.65%</span>。
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 落后收窄到约 −5.84pt（BTC −3.84%
                vs NQ +2.00%）、从 05-29 的 −7.23pt —— 缺口在收因为 BTC
                停止延伸、不是 TradFi 翻倒。「内生于 crypto」仍是承重读
                法、但宏观脉搏继续松：利率更低、DXY 更软、信用守住紧、
                vol 松
              </span>
              。JGB 月度 2.52% 带 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · runner 平掉（05-29 整条阶梯触到）· 回补反弹 scout 递延（3 腿中 2 腿未到）· 宏观尾在 29MAY 结算上平 · 本次快照无新交易</span>
            </h2>

            <p>
              <span className="dn-signal">
                昨天的论点印出正确、交易本子干净
              </span>
              。05-29 runner 空仓在 29MAY 08:00Z 到期上、把整条目标阶梯触
              满后平掉（W-EMA200 种子 $73,710 与 D-SMA100 周期锚 $72,958
              都在 −96.34M 放大器窗内跑、24h 低 $72,614 下穿了周期锚）。
              29MAY put-spread 尾仓在 08:00Z 印上平掉。回补反弹 scout、它
              对到期后 flip 重夺挂着硬门、
              <span className="dn-em">没</span>触发：flip 是被动下来到我们
              这里、short_btc 泄了但守在 38k 上方、long_btc 反而落得比 13k
              更深。三条触发里两条结构上更容易满足了（γ 翻阻尼、funding
              离顶、retail 在泄）、但技术腿还没填。今天交易本子是：无空仓、
              无 scout 入场、无新对冲 —— 等 3 条腿里 2 条落（最好是真的 flip
              重夺 $73,300 以上、OI 仍在缩、AND short_btc 在 4h 内泄破 38k）
              再 scout long。在一个正 γ 的 dealer 本子和一个泄气的杠杆
              本子上、不在周期锚加新空。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · 主仓 · runner 阶梯完成 · 在 29MAY 08:00Z 到期结算上平</span>
              <div className="dn-trade-name">
                破位延伸空 —— 按上一篇要求在 29MAY 08:00Z 到期结算上平
              </div>
              <div className="dn-thesis">
                05-29 runner 压进 −96.34M 29MAY 放大器窗内、跑完整条阶梯：
                目标 #2 W-EMA200 种子 $73,710 和目标 #3 D-SMA100 周期锚
                $72,958 都触到、24h 低 $72,614 谱系首次下穿周期锚。29MAY
                0.3DTE 块在 08:00Z 05-29 准时按模型结算、dealer 本子从
                −47.9M 翻到 +62.9M aggregate、0-γ flip 从 $74,939 →
                $72,764。这单干完它的活、在阶梯底部撞进到期解里平掉。
                状态：<em>已平</em>。无剩余、无滚续、无加仓。表现：从上一
                篇 05-27 起点（W-SMA20 $73,789 区）到阶梯均价平 ~$73,710
                —— 任何持过 08:00Z 05-29 的剩余结构性理由都随放大器蒸发。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">在 05-29 08:00Z 平（放大器结算）· 无残余仓位</span></div>
                <div><span className="dn-lvl-k">最终阶梯</span><span className="dn-lvl-v">目标 #1 W-SMA20 $74,151（05-28 取）· 目标 #2 W-EMA200 种子 $73,710（在 05-28 14:01 重堆上取）· 目标 #3 D-SMA100 $72,958（24h 低 $72,614 插针穿过）</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">在一个正 γ 本子和泄气的杠杆本子上、不在周期锚加新空</span></div>
              </div>
              <div className="dn-gating">
                <b>交易已平。</b>上一篇「在到期解里把剩余撤掉」的纪律是对的：
                放大器蒸发拿走了延续的结构性燃料、到期后的盘面确认了阻尼
                regime（funding 离顶、OI 缩、SM 两侧都更小、retail 拥挤
                松）。重开空头需要一根全新的结构性设置 —— 不是这一根的滚续。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 递延 · 3 腿中 2 腿未到 · 等确认印</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 结构上支持但技术上递延（long_btc 落到 13k 下、short_btc 仍在 38k 闸上 1.93k、flip 下来到我们）
              </div>
              <div className="dn-thesis">
                05-29 scout 的三条触发故意设成高门 —— 一根真的回补反弹应
                该三条都印。一条都没干净落。(1) flip「重夺」是被动的：flip
                从 $74,939 → $72,764 落、现货 $73,883 坐在新 flip 上方
                +1.54% —— 不是因为我们升上旧水位、而是 dealer 本子在放大器
                离场后重定价。(2) short_btc 05-29 水位 42.08k → 24h 盘中
                峰 41.25k（24h 窗开盘时已经在 05-29 水位下方）→ 快照
                39.93k（vs 05-29 −2.15k）；24h 窗本身印净 +994（空加 vs
                24h 开盘）、盘中峰 41.25k 在 BJ 06:16 05-31、此后泄 −1.32k
                进快照 —— 但快照仍在 38k 闸上方 1.93k。(3) long_btc
                <em>反而</em>从 13.09k → 10.77k 落 —— 比 13k 闸更差、不是
                更好。结构性背景在每一根读上都改善（γ 翻、funding 离顶、
                retail 泄、8h 金叉印、周期锚在收盘上守住）、但仓位本子仍
                在周期锚被洗多、不是从锚上重建。有纪律的入场继续递延、
                直到仓位本子确认。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">收紧触发（3 腿中 2 腿必到）</span><span className="dn-lvl-v bull">1h 收 &gt; $74,161（W-SMA20 重夺、一根真的头顶重夺）AND SM short_btc 在 4h 内泄破 38k —— long_btc &gt; 13k 闸现在软（多侧只在价格重夺 W-SMA20 之后才会重建）</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">触发印出时、scout long 0.2R · 结构性背景已经在确认（γ +、funding 离顶、retail 泄）</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1h 收 &lt; $73,146（D-SMA100 周期锚 —— 一根日下穿结束消化读法）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$76,175（D-SMA150 / D-EMA50 簇）然后 $77,737（W-EMA20）</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · 在 D-SMA150 簇平半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>触发 ~$74,161、止损 $73,146 = ~$1,015 风险；首
                目标 $76,175 = ~$2,014 ≈ 2.0:1 —— 比 05-29 的 0.64:1 实质
                改善（05-29 输入：触发 $74,939、止损 $73,021、目标 $76,175
                → 风险 $1,918、回报 $1,236、1,236 / 1,918 = 0.644）—— 因
                触发更近（W-SMA20 $74,161 vs 新 flip $74,939）、止损上移
                （周期锚 $73,146 vs $73,021）。<b>硬规则：</b>多侧只在价格
                重夺 W-SMA20 之后才会重建 —— 重夺前 long_btc &gt; 13k 是
                假信号（在结构性重夺前可能在空头挤压上短暂尖刺）。有纪律
                的两腿触发是 W-SMA20 重夺 + 空头泄、按这个顺序。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · 宏观尾 · 在 29MAY 08:00Z 结算上平</span>
              <div className="dn-trade-name">
                下行 put-spread —— 在 29MAY 08:00Z 结算上平；不滚（宏观 re-grow 闸又往远走）
              </div>
              <div className="dn-thesis">
                29MAY put-spread 尾仓（long $74k / short $70k put）在
                Deribit 08:00Z 印 05-29 结算、坐在 −96.34M dealer γ 块内、
                按上一篇 gating。不滚：宏观 re-grow 闸（HY OAS &gt; 2.78%、
                10Y &gt; 4.53%）又往远漂 —— 当前 2.72% 和 4.45%、分别差
                6bp 和 8bp 触发。reclaim-long 利率筛（10Y &lt; 4.55%）在
                4.45% 仍真；这是一道独立筛、需要一根 BTC 内部转向才能转
                成 scout 入场。在一个正 γ 本子内、周期锚上不需要新对冲。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">在 05-29 08:00Z 平（Deribit 29MAY 结算）· 无残余仓位 · 不滚</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（下一根 Tier-1 印）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收（当前 2.72%、距闸 6bp）OR 10Y &gt; 4.53% 收（当前 4.45%、距闸 8bp）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— 在 4.45% 仍真；等 BTC 内部转向</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸（HY OAS &gt; 2.78%、10Y &gt; 4.53%）
                是随水位下漂调低的酌情盯位、不是回测断点。如果闸最终触发、
                新的对冲腿会是滚到 5JUN26 5.3 DTE 或 12JUN26 12.3 DTE ——
                但 29MAY 之后的 dealer strip 是净多 γ、一根新尾不会带这
                一根的放大器顺风。今日的 31MAY 0.3DTE 是 +17.00M（正）；
                它在 08:00Z（快照前 9 分钟）结算、没出 vol 事件、与阻尼
                regime 一致。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 周期节奏 BROKEN · 重堆敌对-2 失去时间锚 · regime 从放大延伸转到后放大消化</span>
              <div className="dn-trade-name">
                挤压周期 —— 节奏断：24h 延伸印在 BJ 22:01（在 BJ 13–15 外）、然后 05-30 与 05-31 的 BJ 13–15 窗经过都没印步
              </div>
              <div className="dn-thesis">
                05-29 框架预期 BJ 13–15 节奏会在 2026-05-29 05:00–07:00Z 内
                再印一根离散 SM 步 —— 一根 7 日模式的第八天延续。窗经过、
                SM net 漂 <em>+768</em> 跨 2h（一根小回补、max |Δnet|
                259）、05-30 BJ 13–15 窗看到类似的安静漂 −349（max
                |Δnet| 269）。下一根真延伸印在
                <span className="dn-tag bear">2026-05-30 14:01Z（BJ 22:01
                05-30）、Δnet −5,569</span>（Δlong −3,123、Δshort +2,446 同
                一分钟、SM net −25,189 → −30,758 在现货 $73,617）—— 一根重
                堆敌对-2 签名、但<em>晚于</em>上一根节奏窗 7 个小时。今日
                BJ 13–15（2026-05-31 05:00–07:00Z）经过、窗 Δ −109、max
                |Δnet| 140 —— 平。<span className="dn-em">
                  周期的时间锚断了。7 日 BJ 13–15 节奏不再是下一根离散步
                  的最高基率预测。regime 已从节奏可知的放大延伸转到无日历
                  门的后放大消化。框架以观察名单继续（重堆敌对-2 签名印
                  出时仍有意义）、但时段基率已被证伪
                </span>
                。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">节奏断 · 05-29 BJ 13–15 = 小回补（+768）· 05-30 BJ 13–15 = 漂（−349）· 05-31 BJ 13–15 = 平（−109）· 7 日节奏证伪</span></div>
                <div><span className="dn-lvl-k">替代延伸事件</span><span className="dn-lvl-v">重堆敌对-2 @ 2026-05-30 14:01Z（BJ 22:01 05-30）· 现货 $73,617 · Δlong −3,123、Δshort +2,446（41,778 − 39,332）、Δnet −5,569（谱系单分钟最大 Δ）</span></div>
                <div><span className="dn-lvl-k">SM 谷（最空）窗内 48h</span><span className="dn-lvl-v">−30,799 BTC @ 2026-05-30 14:11Z（BJ 22:11 05-30）· BJ 22:01 步后 10 分钟</span></div>
                <div><span className="dn-lvl-k">步后价格路径</span><span className="dn-lvl-v">步 $73,617 → 24h 低 $73,130（vs 步 −$487）→ 快照 $73,883（vs 步 +$266 —— 自 BJ 22:01 延伸净弹）</span></div>
                <div><span className="dn-lvl-k">前向 gating</span><span className="dn-lvl-v">盯任何新 Δnet ≤ −3k 作 one-off 签名（节奏预测已死）；一根 1d 收 &gt; W-SMA20 $74,161 且 OI 仍缩是肯定的回补反弹读</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>一根证伪的基率比一根确认的更有用 —— 它告诉
                你 regime 变了。7 日 BJ 13–15 节奏在放大器窗内站住、因为
                dealer 对冲集中在 29MAY 块附近一个特定的亚洲午盘流动性
                轮廓里；放大器没了、节奏也跟着散。重堆敌对-2 签名
                （Δshort &gt; 0 + Δlong &lt; 0 同一分钟）印出时仍是有意义
                的盘面读、但不再带日历先验。把任何新印当信号、不当基率。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 放大器翻了本子 · 周期锚在收盘上守住 · 节奏断 · 回补反弹 scout 递延、等 2 腿确认</span>
            </h2>

            <p>
              05-29 那张决策条件里：29MAY26 到期结算干净
              <em>触发</em>（−96.34M 清掉、aggregate 从 −47.9M 翻到 +62.9M、
              除 31MAY 后 ≈ +45.9M 在今日结算后）；cycle-2 step 3 节奏在
              时间或方向上都<em>没触发</em>（预期的 BJ 13–15 窗 05-29 看到
              小回补 +768、替代 Δnet −5,569 印在 BJ 22:01 05-30 —— 在节奏
              外）；周期锚丢测试<em>没触发</em>（05-29 收 $73,428、05-30 收
              $73,857、05-31 未收盘 $73,828 —— 三根都在 $73,021 / $73,146
              上方）；周期锚守 + γ 翻正条件干净触发（两腿都真）；跑再延伸
              不需要触发（无持空头）；宏观 re-grow 闸又往远走；reclaim-long
              利率筛在 4.45% 仍真；回补反弹 scout
              <em>没触发</em>。<em>三个结构性条件干净触发（到期结算、周期
              锚守 + γ 翻正、宏观筛真）、一个延迟且偏离节奏触发（延伸在
              BJ 22:01 不在 BJ 13–15）、scout 的技术腿仍未到。</em>
              今天条件围绕一个正 γ dealer 本子、一根守住的周期锚、一根
              断的节奏、和一根递延的 scout 重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>31MAY26 到期已结算（今日 08:00Z、快照前 9 分钟）</td><td>+17.00M 正块未出 vol 事件清掉；除 31MAY 后 aggregate ≈ +45.9M 仍净正</td><td>无需动作 —— 阻尼 regime 在结算后继续</td></tr>
                <tr><td>回补反弹 scout（多）—— 收紧</td><td className="bull">1h 收 &gt; $74,161（W-SMA20 重夺）AND SM short_btc 在 4h 内泄破 38k</td><td>scout long 0.2R、目标 $76,175（D-SMA150 簇）然后 $77,737（W-EMA20）</td></tr>
                <tr><td>周期锚丢（周期 regime 升级）</td><td className="bear">1d 收 &lt; $73,146（D-SMA100）</td><td>谱系首次周期阶梯破 —— 另起评估；「完整中周期」读法结束、锚上方消化论被证伪</td></tr>
                <tr><td>周期锚守 + γ 保持正</td><td className="bull">1d 收守 &gt; $73,146 AND aggregate GEX 保持正（1JUN/5JUN 到期对内无新负块加入）</td><td>锚上方消化读法守住；scout 非对称在仓位本子确认后继续改善</td></tr>
                <tr><td>跑再延伸（基率现在低）</td><td className="bear">新重堆 SM Δ ≤ −3k 把 SM 推 &lt; −32k AND 1h 收 &lt; $73,130</td><td>cycle 3 点火信号 —— 会重武装空头、止损在 $74,161 W-SMA20 重夺；基率低是因为节奏已断、放大器没了</td></tr>
                <tr><td>Cycle-2 step 4 节奏（已证伪）</td><td className="stale">7 日 BJ 13–15 基率已死；不要按日历预测</td><td>把每根新 Δnet ≤ −3k 或 Δnet ≥ +3k 印当信号本身 —— 无时间先验</td></tr>
                <tr><td>宏观尾 re-grow（FRESH 闸）</td><td className="bear">HY OAS &gt; 2.78%（距闸 6bp）OR 10Y &gt; 4.53%（距闸 8bp）</td><td>滚对冲到 5JUN/12JUN 前段；tail +0.1R 向主仓</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收 —— 在 4.45% 仍真；等 BTC 内部转向</td><td>独立筛已真；需要 BTC 内部回补反弹触发才能转 scout long</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                后放大器在周期锚上方的消化、是否转成一根确认的回补反弹
                （1h 收 &gt; W-SMA20 $74,161、OI 仍在缩、AND short_btc 在
                4h 内泄破 38k）、还是一根没有日历先验的新重堆敌对-2 印把
                一根 1d 收推下周期锚 $73,146。放大器时代结构性结束；问题
                现在是仓位本子是否确认这根结构转向、还是本子在锚上方横向
                泄气但不确认
              </span>
              。在那之前、本篇按写好的跑：runner 与 put-spread 尾仓已平、
              回补反弹 scout 递延、等 3 腿中 2 腿确认、周期节奏框架已证伪、
              宏观面在没触发 re-grow 闸的情况下继续松。BTC 对 TradFi 脱钩
              收窄到 −5.84pt 因 BTC 停止延伸；引擎 MTF 周期弹；8h MACD 印
              出新鲜水下金叉；dealer 本子从净空 γ 翻到净多 γ。下一个 24h
              的对读是<em>耐心 —— 用两腿确认、不用一腿</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · findings 记于 audits/2026-05-31-desk-note.md）
            </span>
            <b>谱系说明：</b>原 2026-05-31 00:07Z 自动日运行在
            <code>claude --print</code> 步死在中流（headless API 调用 socket
            被掐、与 05-30 同一故障模式；v1 草稿在 working tree 内幸存）。
            audit + 发布步骤在 2026-05-31 08:09Z+ 由一根长上下文会话手动
            续上。Codex CLI 0.125.0（<code>model_reasoning_effort=xhigh</code>）
            通过空 stdin 管道对 v1 草稿跑敌对审计；v1 的判决是 BLOCK-CRITICAL、
            1 CRITICAL + 1 MAJOR + 9 MINOR/NIT findings。11 条修正全部应用；
            本篇是 v2。该审计仅限内部一致性范围 —— live-data 交叉引用
            （如 24h 均值 funding +4.00%、05-29 NQ 7d 回报、31MAY 结算后
            的合约计与 IV 中位数、OI 绝对基数、24h 开盘 short_btc）留在审计
            文件的 Open Issues 名单里、在本次续上中未对服务器的 parquet /
            JSON 源重新核对。codex 跑过并清除的主要算式：funding × 1095
            算式（live +4.90% ann 自原始 0.004471、24h 均值 +4.00%、区间
            −0.21% / +6.97%、封顶 1 / 1441 采样行 ~0.1%、谷点 −0.21% @
            BJ 19:39 05-30、无 ×100 重现）；GEX 双参考符号（flip $72,764、
            现货 +1.54% / idx{' '}
            <span className="dn-em">+1.84%（从 v1 +1.81% 修正）</span>、两
            参考都正、tile 与簇同号）；29MAY 0.3DTE −96.34M 到期解与除
            31MAY +45.9M 算式（62.9M − 17.0M 在今日结算后）；SM「cut
            fraction」（|−29,158 − (−28,995)| / 28,995 = 0.6%）与 BJ 22:01
            05-30 重堆敌对-2 步（Δlong −3,123、
            <span className="dn-em">Δshort +2,446（从 v1 +2,447 修正）</span>、
            Δnet −5,569、现货 $73,617）；周期节奏断主张（05-29 BJ 13–15
            窗 Δ +768 max 259；05-30 BJ 13–15 窗 Δ −349 max 269；05-31 BJ
            13–15 窗 Δ −109 max 140 —— 全部 sub-threshold）；完整 MA 矩阵
            对 live 现货 $73,883.09、parquet 2026-05-31 00:06Z close
            $73,827.50（D-SMA100 $73,146 周期锚 +1.01%、W-SMA20 $74,161
            地板仍在头顶、W-EMA150/200 种子披露、126 根周 bar 下
            W-SMA150/200 不可计算）；30D RV 24.91%（30 returns / 31
            closes；25.19% 另一口径已披露）；跨资产（|r| 0.237、BTC −3.84%
            vs NQ +2.00% = −5.84pt）与宏观 Tier-1（10Y 4.45%、HY OAS
            2.72%、MOVE 70.2、DXY 98.91、Fed 净流动性 $5.872T）对源核过；
            claims-vs-loaded-data（NTT / max-pain / strike-IV / BTC-NQ
            framework only；JGB 月度不依赖；IV 938 合约中位数、不是可交易
            价差）；EN/ZH 数值平价；requireViewer gating 模式（两路径、首
            语句）；CVD 跨 05-30 14:59Z cb_cvd reset 调整（24h cb_cvd =
            (22,908.9 − 24,570.9) + (5,041.3 − 98.1) = +3,281.2）。
            CRITICAL（「破位以来首根上日」在同段三句后被自我反驳）和
            MAJOR（PRE-31MAY-settle 938 合约 / 39.9% IV 披露）以及 9 条
            MINOR/NIT findings（Deribit-idx 距 flip 算式、SM net Δ off-by-1、
            BJ 22:01 Δshort off-by-1、1441 vs 1440 denominator 正规化、前
            一篇输入 inline、MTF +0.60% vs live +0.49% 解释、24h 低/高时间
            戳加 UTC、short_btc 基线-vs-峰描述重写、HR → HysRes 品牌）全部
            在 audits/2026-05-31-desk-note.md 里单独追踪。
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；Next 16.2.6
            在 <code>node_modules/next/dist/bin/next:24-28</code> 处对 Node
            &lt; 20.9.0 硬退出、所以完整 <code>next build</code> 被环境
            阻塞（谱系自 05-21 到 05-29）。
            <code>npx --no-install tsc --noEmit</code> 是 build proxy；本次
            续上在 v2 修正后再跑了一次。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-05-31 08:09Z）、
            provenance 在数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-05-30 22:15Z（比快照早约 9.9h）、部分输入明确陈旧或待定
            并已标注。水位、规模与条件是交易台流程的示例、不是长期推荐。
            过去的相关性、γ 与仓位模式不绑定未来盘面。衍生品有全损风险、
            加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                那一根放大器准时离场、本子翻面、锚在收盘上守住。runner 平、
                尾仓平、scout 不入场。在收盘上耐心 —— 用两腿确认、不用
                一腿；W-SMA20 重夺 + 空头泄、按这个顺序。
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
            v2 · 2026-05-31 08:09Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
