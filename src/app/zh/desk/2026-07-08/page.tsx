import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-08 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-08',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-08' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260708() {
  await requireViewer('/zh/desk/2026-07-08');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-08 · v2</span>
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
              <span className="dn-big">$63,431</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.93%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-08 00:05Z ·{' '}
              <span className="dn-em">
                反弹回到 200W 底线上方之后<b>头一回</b>像样的回撤。07-06 周线收
                $64,023.60（+1.84%）是 06-29 破线以来<b>第一根</b>收在
                $62,864 底线上方的周线——反弹在唯一算数的口径上站稳了。但这次
                盘面把上一份备忘的「去杠杆、不是需求」读法<b>坐实且加深</b>：OI
                连续第二天缩（−3.16% / −3,246 BTC）、聪明钱净头寸从 +2,349
                <b>多头一路冲成 −34（净平）</b>、多头单边被打掉 −3,191 而空头只减
                −808、资金费从 +0.01 的顶掉下来到 +5.16% 年化（24h 均 +8.00%，
                零负值行）、taker/期货 CVD 大幅净卖（24h taker-net −4,334 /
                期货 CVD Δ −4,317）而现货 CVD 反而在买（+1,894）。做市商这本
                <b>还是净多 gamma（+114.2M</b>，翻转位 $61,071，spot 高出
                +3.87%，全期限无一个像样的负 gamma），所以回撤是<b>有序的、
                没被放大</b>。MTF 引擎仍读 6/9 趋势延续，但已滚到
                <b>高周期偏空 / 短周期反弹</b>——1h 刚打出水上死叉、1w 坐实水下
                死叉、日线到了 TD Sell 7，被 12h/1d 底背离簇和 1M ⚡TD9 BUY
                对冲。本子还是平：无空、无侦察、无新对冲——反弹的头一回回撤
                守在收复的底线上方、装在一本压波动的做市商盘里，但读出来的是
                杠杆在出清，不是需求进场。
              </span>
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live 盘面（现货 / 永续 / OI / 聪明钱 / 资金费）</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-08 00:05Z（快照钉，BJ 08:05 行）</td>
                  <td className="dn-flag">
                    新鲜 · 1 分钟 · 钉点即文件尾 · 盘面直到锚点<b>都是 live</b>
                    （本切无冻结）· 聪明钱源 live · 锚点行是 BJ 本地
                    &ldquo;07-08 08:05&rdquo; = 00:05Z（按 live-tape t 字段约定）·
                    下方每个&ldquo;24h&rdquo;数字都是 <b>24h+1m 含端点</b>采样窗，
                    起始行 BJ 07-07 08:04 → 结束 BJ 07-08 08:05（端到端
                    08:05→08:05 在 spot 上差 ≤0.06pt / OI 上差 ≤7 BTC）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + 一目 + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-08 00:01Z 扫描（BJ 08:01）</td>
                  <td className="dn-flag">
                    滚动最新文件 · 相对快照锚点约 4 分钟旧 · 在途 bar · 已归档到
                    /opt/desk-note/snapshots/2026-07-08-0005/
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-08 00:00Z 快照</td>
                  <td className="dn-flag">
                    相对锚点约 5 分钟旧 · Deribit idx $63,639 vs live $63,431 ·
                    878 个合约 · 卡片标题&ldquo;Total GEX / 1% move&rdquo;读
                    +104.6M，而按到期分拆条加总是 +114.2M
                    （= gex_summary.json net_gex +114.17M）——本备忘采用拆条加总的
                    聚合值、并披露卡片数 · 8JUL26 0.3DTE +6.60M 今日 08:00Z 结算
                    （在本快照之后）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-08 00:00Z
                  </td>
                  <td className="dn-flag">约 5 分钟滞后 · 7d 1h bar · 22 个资产 · 166 行 · 滚动 7d 读数，非当日</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z 分数面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-07 22:16Z 渲染</td>
                  <td className="dn-flag">
                    约 1.8h 渲染滞后 · FRED Tier-1：10Y 4.48%（−1.0bp）、TIPS 2.24%
                    （−2.0bp，EXTREME）、HY OAS 2.72%（−2.0bp，RISK-ON）、MOVE 65.8
                    （+0.36）、DXY 101.12（+0.27，EXTREME）· 联储净流动性 $5.843T
                    （+0.053T）· NFCI 旧 11d
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日线 / 周线均线矩阵</td>
                  <td className="dn-v-cell">parquet 末 bar 2026-07-08 00:05Z</td>
                  <td className="dn-flag">
                    偏移按 live spot $63,431.07 重算 · 3 文件 glob（132 根周线 bar）
                    ⇒ W-SMA150 / W-SMA200 不可算；下方 200W 底线从完整 2019→ glob
                    单独重算
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 周期底线监控</td>
                  <td className="dn-v-cell">全历史 W-SMA200 重算 · 交叉核对 ma200w_trap_watch_state.json（2026-07-07 06:00Z）</td>
                  <td className="dn-flag">
                    权威 weekly_200sma.json 缺失 · 底线 = $62,864（在最后一根完整的
                    07-06 周上算的 W-MON W-SMA200，取自 2019→ glob 的 357 根
                    完整 W-MON bar）· trap-watch 状态文件（W-SUN 约定）独立读
                    状态&ldquo;above&rdquo;、末事件周 07-05、sma200 $62,642
                    ——两者都认同 ABOVE · 比率百分位 / 末事件<b>未取到</b>
                    （不是编造）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">旧 · 月度（67d）· 勿当 live 用</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT 枢轴、max-pain、行权价级 IV、BTC/NQ 比值
                  </td>
                  <td className="dn-v-cell">本切未加载</td>
                  <td className="dn-flag">相关论断明确仅作框架（btc_ntt_analysis.html 为 JS 渲染，不可抽取）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">资金费 · 8h 年化</span>
              <span className="dn-v">+5.16%</span>
              <span className="dn-src">live 原值 0.004714 × 1095 = +5.16% · 24h 均 +8.00% 年化 · 区间 +2.67% / +10.95%（顶）· 零负值行 · 触顶占比 312 / 1442 采样行（21.6%），末次触顶行 07-07 18:49Z——资金费在快照前已从顶掉下来</span>
            </div>
            <div>
              <span className="dn-k">Δ 资金费 · 24h</span>
              <span className="dn-v bull">+10.95% → +5.16%（离顶 −5.79pt）</span>
              <span className="dn-src">24h 前那一行还钉在 +0.01 顶（+10.95% 年化）；live 读数已回落 −5.79pt 到 +5.16%——多头杠杆在降温，没有付空头的下探（0 负值行）</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−3.16%（−3,246 BTC）</span>
              <span className="dn-src">live · 102,677 → 99,431 BTC · <b>连续第二天</b>缩 OI（07-07 是 −2.42%）· 聪明钱 long_btc −3,191（被冲）、short_btc −808（被削）——双边去杠杆，多头这边被冲的力度约是空头的 4 倍</span>
            </div>
            <div>
              <span className="dn-k">散户（市场）多/空</span>
              <span className="dn-v bull">58.82 / 41.18</span>
              <span className="dn-src">live_db `mkt_long_pct` · 较 07-07 的 57.01% 上移 +1.81pt · 24h 区间 56.15 / 62.35——散户往回撤里加多，一个温和的反向警示</span>
            </div>
            <div>
              <span className="dn-k">聪明钱净 BTC</span>
              <span className="dn-v">−34（净平，两边都约 12.0k）</span>
              <span className="dn-src">live · 多 11,982 − 空 12,017 · 净头寸实际归零 · 从 +2,349 净多（24h 前）经一次多头冲刷翻过来；首次跌破 0 在 07-07 13:56Z · 24h 净头寸区间 −815 / +3,722</span>
            </div>
            <div>
              <span className="dn-k">聪明钱 Δ vs 07-07 备忘</span>
              <span className="dn-v bear">+2,348.85 → −34.40（Δnet −2,383，净头寸多→平）</span>
              <span className="dn-src">|Δ|/前净 = 2,383.26 / 2,348.85 = 101.5%——净头寸被<b>整个</b>拆掉并微微翻空；Δ多 −3,191、Δ空 −808（一次多头投降，<b>不是</b> hostile-2 再堆叠）</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.5% / 32.08%</span>
              <span className="dn-src">GEX 878 合约的中位 IV · 30D 收盘对收盘 RV（logret.std × √365 × 100，30 个回报）· 链级富度约 +10.4pt · RV 走高（回撤里日振幅变大）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ 翻转位</span>
              <span className="dn-v bull">+3.87%（上方）</span>
              <span className="dn-src">翻转位 $61,071 · vs live spot $63,431（+3.87%；63,431.07/61,070.73 − 1 = 3.865%）/ GEX 文件 Deribit idx $63,639（+4.2%）——两个参照都为正、spot 远在上方 · 聚合 GEX +114.2M 净多 gamma（拆条加总；卡片标题 +104.6M）——比 07-07 的 +157.8M 浅、但仍在压波动</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                反弹回到 200W 底线上方后的头一根周线收盘站住了，但跟进是一次
                去杠杆式的回撤，不是吸筹
              </span>。Spot 打 <span className="dn-tag">$63,431</span>，
              24h <span className="dn-tag bear">−0.93%</span>——这轮里
              头一段像样的下行腿：07-06 立下反弹的峰值日收
              <span className="dn-tag bull">$64,023.60</span>，07-07 用一根
              <span className="dn-tag bear">$63,335.40</span> 的下跌收盘
              （−$688）打断了六连阳，在途的 07-08 bar 坐在
              <span className="dn-tag">$63,427</span>。200W 收复<b>没有</b>被证伪
              ——07-06 <em>周线</em>收 <span className="dn-tag bull">$64,023.60
              （+1.84%）</span>结在 $62,864 底线上方，是 06-29 破线以来第一根
              收在上方的周线，在途的 07-13 周线 bar $63,427 仍守在上方。但 live
              盘面坐实并<b>加深</b>了上一份备忘的「去杠杆、不是需求」读法：OI
              连续第二天缩 <span className="dn-tag bear">−3.16%（−3,246 BTC）</span>，
              聪明钱净头寸从 <span className="dn-tag bull">+2,349 净多</span>塌到
              <span className="dn-tag">−34（平）</span>——多头被冲
              <span className="dn-tag bear">−3,191 BTC</span>、而空头只削
              <span className="dn-tag">−808</span>，资金费从
              <span className="dn-tag">+0.01 顶</span>掉到
              <span className="dn-tag">+5.16% 年化</span>（24h 均 +8.00%，零负值
              行），taker/期货流大幅净卖（24h taker-net
              <span className="dn-tag bear">−4,334</span>、期货 CVD
              <span className="dn-tag bear">Δ −4,317</span>）而现货 CVD 在买
              （<span className="dn-tag bull">+1,894</span>）。做市商这本仍净多
              gamma（<span className="dn-tag bull">+114.2M</span>，翻转位
              $61,071，spot 高出 +3.87%，无一个像样的负 gamma 期限），所以回撤是
              <b>有序</b>的、没被放大。MTF 引擎仍读 6/9 趋势延续，但已滚到
              <em>高周期偏空 / 短周期反弹</em>——快的 1h 框刚打出水上死叉、1w
              坐实水下死叉、日线在 TD Sell 7，被一簇新鲜的 12h/1d 底背离和一个
              1M ⚡TD9 BUY 对冲。本子还是平：无空、无侦察、无新对冲——反弹的头一回
              回撤守在收复的底线上方、装在一本压波动的做市商盘里，但读出来的是
              杠杆在出清，不是需求。
            </p>

            <p>
              BTC live 打 <span className="dn-tag">$63,431</span>，24h
              <span className="dn-tag bear">−0.93%</span>，落在
              <span className="dn-tag">$64,290 / $62,801</span> 区间内
              （高点 07-07 00:26Z，低点 07-07 14:38Z）。{' '}
              <span className="dn-signal">
                200W 周期底线的收复在唯一算数的口径上——周线收盘——熬过了这次回撤
              </span>：06-29 周线收 $60,224.70 坐实破线（低于 $62,864 底线
              −4.20%），07-06 周线收 $64,023.60 收复它（+1.84%，破线以来第一根
              收在上方的周线），在途的 07-13 周 $63,427 仍高出这条线 +0.90%。
              spot 下方的支撑栈薄但完整——<span className="dn-tag bull">200W 底线
              $62,864（+0.90%）</span>、<span className="dn-tag bull">D-EMA20
              $62,693（+1.18%）</span>、<span className="dn-tag bull">D-SMA20
              $61,933（+2.42%）</span>、以及 <span className="dn-tag bull">0γ
              翻转位 $61,071（+3.87%）</span>——三条线加一个翻转位在盘下方。其余
              全在头顶、未收复：<span className="dn-tag bear">D-EMA50 $65,571
              （−3.26%）</span> / <span className="dn-tag bear">D-SMA50 $65,985
              （−3.87%）</span>簇是头顶第一条线，日线 100/150/200 阶梯在
              −8% 到 −16% 外。{' '}
              <span className="dn-em">
                这是收复底线上方的消化：盘面守住了周线收盘那条线、下方没丢过
                一条支撑，但头顶也一条均线都没收复，而它守的方式——多头被冲、
                OI 在缩、资金费在降温——读出来是反弹的杠杆在放气，不是新买家
                进场。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · live 盘面 · OI 连续第二天缩（−3.16%）· 聪明钱净头寸靠一次多头冲刷从 +2,349 塌成 FLAT · 资金费掉出顶 · taker/期货在一个现货 CVD 买盘之上净卖</span>
            </h2>

            <p>
              <span className="dn-signal">
                仓位本子大幅去杠杆、聪明钱净头寸从多翻到平
              </span>。聪明钱净头寸 <span className="dn-tag">−34</span>，对上
              07-07 备忘的 <span className="dn-tag bull">+2,348.85</span>——Δnet
              <span className="dn-tag bear">−2,383</span>，是<span className="dn-em">
              前净头寸的 101.5%</span>（|−34.40 − 2,348.85| / 2,348.85 =
              1.015）：整本净多被拆掉、并微微翻空。分项：long_btc
              <span className="dn-tag bear">15,173.79 → 11,982.36（−3,191）</span>、
              short_btc <span className="dn-tag">12,824.93 → 12,016.76
              （−808）</span>——两边都缩，多头这边被冲的力度约是空头削的 4 倍。
              净头寸首次跌破 0 在 <span className="dn-tag bear">07-07 13:56Z</span>、
              long_btc 探底 <span className="dn-tag bear">11,879 @ 07-07 22:01Z</span>；
              24h 净头寸区间 −815 / +3,722。{' '}
              <span className="dn-em">
                这是一次多头投降，不是持续的 hostile-2 再堆叠——同分钟孤立的
                Δ空 &gt; 0 + Δ多 &lt; 0 tick 确实在原始源上出现（例如 07-07
                20:10→20:11，Δ多 −188 / Δ空 +340），但没有一个<b>跨连续分钟延续</b>
                成一次合格的再堆叠；24h 净头寸机制仍是双边去杠杆、多头这边流血
                约是空头削的 4 倍。挤压周期观察名单保持安静。
              </span>
            </p>

            <p>
              杠杆这边坐实了去杠杆。<span className="dn-signal">资金费掉出
              Binance 顶</span>：live <span className="dn-tag">+5.16% 年化</span>
              （原值 0.004714 × 1095），24h 均 <span className="dn-tag">+8.00%</span>，
              区间 <span className="dn-tag">+2.67% / +10.95%</span>——最大值仍
              钉在 +0.01 顶，但触顶占比降到
              <span className="dn-tag">312 / 1442 采样行（21.6%）</span>、末次
              触顶行在 07-07 18:49Z——资金费在窗口的后半段一直往下滑离天花板，且
              <span className="dn-tag">零负值行</span>（无付空头的下探）。OI Δ
              <span className="dn-tag bear">−3,246 BTC（−3.16%）</span>——24h 内
              <b>连续第二天</b>缩 OI（07-07 打了 −2.42%），OI 探底 99,421 @
              07-08 07:59Z、现坐 99,431。散户
              <span className="dn-tag">mkt_long_pct 58.82%</span>较 57.01% 上移
              +1.81pt（24h 区间 56.15 / 62.35）——散户往回撤里加、聪明钱冲出来，
              经典的弱手对强手分裂，提示谨慎。永续在快照相对现货贴水
              <span className="dn-tag bear">−$46.01</span>（1h 均 −$39.52、4h 均
              −$38.88、24h 均 −$51.18、区间 −$171.12 / +$27.62——基差只短暂升水
              过）。1 分钟主动方偏斜快照 <span className="dn-tag bear">−6.2</span>
              （1h 均 −9.38、区间 −31.5 / +18.9）——温和的卖倾斜。{' '}
              <span className="dn-em">
                资金费掉出顶 + OI 连两天缩 + 聪明钱净头寸冲成平 + 散户往回撤里加多：
                反弹在给自己的杠杆放气，边际多头现在是散户本子、不是聪明钱。
              </span>
            </p>

            <p>
              窗口化的流是<em>在窗口中段变陡、进快照企稳的净卖</em>。24h：价
              <span className="dn-tag bear">−0.93%</span>、OI
              <span className="dn-tag bear">−3,246 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +1,894</span>、期货 CVD
              <span className="dn-tag bear">Δ −4,317</span>、大单
              <span className="dn-tag bear">−2,823 BTC</span>、taker-net
              <span className="dn-tag bear">−4,334</span>——{' '}
              <span className="dn-em">
                现货在买、而期货/永续在 OI 缩的同时大幅卖；一个
                现货买盘对上永续清算的形态，下跌是打在杠杆退出上、不是新鲜的
                现货派发
              </span>。4h（进快照）：价
              <span className="dn-tag bear">−0.69%</span>、OI
              <span className="dn-tag bear">−953 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −334</span>、期货 CVD
              <span className="dn-tag bear">Δ −629</span>、大单
              <span className="dn-tag bear">−149 BTC</span>、taker-net
              <span className="dn-tag bear">−614</span>——一致偏重的 4h，
              现货和期货都在被卖。1h：价
              <span className="dn-tag bear">−0.20%</span>、OI
              <span className="dn-tag bear">−101 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −152</span>、期货 CVD
              <span className="dn-tag bull">Δ +8</span>、大单
              <span className="dn-tag bull">+31 BTC</span>、taker-net
              <span className="dn-tag bull">+9</span>——{' '}
              <em>现货仍在卖，但期货/大单/taker 进快照转成温和的买、OI 仍在缩</em>。
              24h 形态是干净的去杠杆；1h 暗示冲刷在缓、不是需求已到。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 6/9 趋势延续 regime 但<b>高周期偏空 / 短周期反弹</b> · 1h 滚到水上死叉、1w 坐实水下死叉 · 引擎金叉（8h/12h/1d）仍立着 · 12h/1d 底背离簇 + 1M ⚡TD9 BUY</span>
            </h2>

            <p>
              <span className="dn-signal">
                引擎守住了反弹的金叉，但快框滚了、周线坐实一个死叉
              </span>。regime 码仍是 6/9（JT≥0，趋势延续），但净读法移到
              <em>高周期偏空、短周期反弹</em>：10 框里 3 多 / 3 空 / 4 中性。反弹的
              引擎叉完整——8h 水下金叉 20b、12h 13b、1d 7b——但
              <span className="dn-tag bear">1h 刚打出水上死叉（2b 前）</span>、
              <span className="dn-tag bear">1w 坐实水下死叉（2b 前，DIF −5,879，
              弱/延续）</span>。TD 计数显示衰竭在反弹顶部累积：日线在
              <span className="dn-tag bear">TD Sell 7</span>、12h 在
              <span className="dn-tag bear">Sell 1</span>——上一份备忘那两个超买的
              1h/12h TD9 SELL 交出了它们的回撤。往下对冲的：一簇新鲜的
              <span className="dn-tag bull">12h 和 1d 底背离</span>（高周期，下行腿
              可能有限）、和一个 <span className="dn-tag bull">1M ⚡TD9 BUY</span>
              （$63,294 处的周期超卖反转提示）。一目：1h 仍在云上（10b）但在滚、
              4h/8h 云上、12h 回<b>进</b>云（62.7k–66.7k）、1d/3d/1w 云下。{' '}
              <span className="dn-em">
                直读：反弹的引擎弹在 8h–1d 金叉上完整，但快框滚了、日线在 Sell 7
                衰竭——一次反弹内的回撤，下方被 12h/1d 底背离和 1M 超卖买封住。
                顶部（15m–4h）已发；盯 12h/1d 底背离能不能守住底线，还是 1w 死叉
                把周线收盘拖回下方。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 叉</th><th>云（一目）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,274</td><td className="num">38.4</td><td className="neut">死叉（水上）21b</td><td className="bear">下 ↑63.4k 2b</td><td>Buy 3</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">63,274</td><td className="num">42.5</td><td className="neut">死叉（水上）8b</td><td className="neut">云中 63.0–63.4k 1b</td><td>Buy 2</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">63,285</td><td className="num">46.6</td><td className="bear">死叉（水上）2b</td><td className="bull">上 ↓63.1k 10b</td><td>Buy 6</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">63,303</td><td className="num bull">54.3</td><td className="neut">死叉（水上）6b</td><td className="bull">上 ↓60.7k 28b</td><td>Buy 1</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">63,274</td><td className="num bull">56.9</td><td className="bull">金叉（水下）20b</td><td className="bull">上 ↓62.6k 11b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>12h</td><td className="num">63,294</td><td className="num bull">56.4</td><td className="bull">金叉（水下）13b</td><td className="neut">云中 62.7–66.7k 1b</td><td>Sell 1</td><td>BULL reg</td></tr>
                <tr><td>1d</td><td className="num">63,294</td><td className="num">50.2</td><td className="bull">金叉（水下）7b</td><td className="bear">下 ↑65.3k 37b</td><td>Sell 7</td><td>BULL reg</td></tr>
                <tr><td>3d</td><td className="num">63,285</td><td className="num">42.2</td><td className="neut">—</td><td className="bear">下 ↑70.9k 12b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,294</td><td className="num">38.0</td><td className="bear">死叉（水下）2b</td><td className="bear">下 ↑98.7k 23b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">63,294</td><td className="num">43.4</td><td className="neut">—</td><td className="bull">上 ↓47.0k 29b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 2026-07-08 00:01Z 扫描（BJ 08:01；
                    滚动最新文件，已归档到
                    /opt/desk-note/snapshots/2026-07-08-0005/）。表头警报：{' '}
                    <em>1w 水下死叉 2b（DIF −5,879，弱/延续）</em>、{' '}
                    <em>1h 水上死叉 2b（DIF +91.9，早期多→空试探）</em>、{' '}
                    <em>1M ⚡ TD9 BUY 于 $63,294（超卖反转提示，末 bar 可能在途）</em>。
                    扫描 spot $63,280，24h −1.16%（这是 00:01Z 的 MTF 扫描；00:05Z 的
                    live 盘面锚点在它自己的 24h 窗上读 −0.93%——4 分钟间隔和不同的
                    窗口起点解释了这个差）、24h 高/低 $64,298 / $62,638、qVol
                    $11.25B。收盘均为在途 bar；每个值在各 TF 收盘前都当临时值看。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              均线矩阵读支撑薄、头顶重。{' '}
              <span className="dn-em">
                只有两条日线均线在盘下——D-EMA20 和 D-SMA20——外加 200W 底线和
                0γ 翻转位
              </span>。spot $63,431 站在
              <span className="dn-tag bull">D-EMA20 $62,693 上方 +1.18%</span>、
              <span className="dn-tag bull">D-SMA20 $61,933 上方 +2.42%</span>、
              以及 <span className="dn-tag bull">200W 底线 $62,864 上方 +0.90%</span>。
              头顶按序：<span className="dn-tag bear">D-EMA50 $65,571（−3.26%）</span>、
              <span className="dn-tag bear">D-SMA50 $65,985（−3.87%）</span>、
              <span className="dn-tag bear">D-EMA100 $69,204（−8.34%）</span>、
              <span className="dn-tag bear">W-SMA20 $69,903（−9.26%）</span>、
              <span className="dn-tag bear">D-SMA150 $70,164（−9.60%）</span>、
              <span className="dn-tag bear">D-SMA100 $70,896（−10.53%）</span>、
              <span className="dn-tag bear">W-EMA20 $71,109（−10.80%）</span>、
              <span className="dn-tag bear">D-EMA150 $72,375（−12.36%）</span>、
              <span className="dn-tag bear">W-EMA200 $73,087（−13.21%；seed）</span>、
              <span className="dn-tag bear">D-SMA200 $74,368（−14.71%）</span>、
              <span className="dn-tag bear">D-EMA200 $75,291（−15.75%）</span>。
              远在上方、弃用：W-EMA150 $77,068（−17.69%；seed）、W-EMA50
              $80,158（−20.87%）、W-EMA100 $80,950（−21.64%）、W-SMA50 $87,466
              （−27.48%）、W-SMA100 $88,421（−28.26%）。{' '}
              <span className="dn-em">
                均线锚在 parquet 末 bar 2026-07-08 00:05Z（收 $63,426.80）；偏移
                按 live spot $63,431.07 重算。显示的均线值按 $ 取整；偏移用精确
                序列值算。W-SMA150 / W-SMA200 在 3 文件 glob（132 根周线 bar）上
                不可算；W-EMA150 / W-EMA200 标为 seed 披露。周线均线阶梯
                （W-SMA/EMA 20–100 + W-EMA150/200）用<b>含在途 07-12 周</b>的 W-SUN
                bar，而下方 200W 底线用<b>完整的 W-MON</b> bar——两套周线约定不同。
                200W 底线 $62,864 是全历史 W-MON W-SMA200（取自 2019→ glob 的 357
                根完整 W-MON bar，最后一根完整周为 07-06）。日收：07-02 $61,541、
                07-03 $62,566、07-04 $63,115、07-05 $63,617、07-06 $64,024、07-07
                $63,335（这轮头一根下跌收盘）、07-08（在途）$63,427。
              </span>
            </p>

            <h2 className="dn-sec">
              做市商图 <span className="dn-roman">III · 本子仍净多 gamma 聚合 +114.2M（比 07-07 的 +157.8M 浅）· 翻转位 $61,071（spot 高出 +3.87%）· 无一个像样的负 gamma 期限（仅 11JUL −0.24M / 25SEP −0.22M）· 31JUL +36.82M 是最重的一块</span>
            </h2>

            <p>
              <span className="dn-signal">
                做市商这本仍净多 gamma、还在压波动——回撤没带放大器就跑了
              </span>。聚合 GEX 按到期拆条加总是
              <span className="dn-tag bull">+114.2M</span>（= gex_summary.json
              net_gex +114.17M；GEX 卡片标题&ldquo;Total GEX / 1% move&rdquo;读
              +104.6M，一个曲面积分值，本备忘披露但不用作标题）——比 07-07 备忘的
              +157.8M 降了、因为近端的正块滚掉，但仍稳稳为正。0γ 翻转位是
              <span className="dn-tag">$61,071</span>，spot $63,431 按现货计价数学
              <span className="dn-tag bull">高出 +3.87%</span>（63,431.07 /
              61,070.73 − 1 = +3.865%）；GEX 文件自己的&ldquo;dist to flip&rdquo;
              读 <span className="dn-tag bull">+4.2%</span>（对其 Deribit-index
              $63,639，比 live spot 高 $208）——两个参照都为正、spot 远在翻转位
              上方。墙图头顶偏 call：<span className="dn-tag bull">$65k +23.08M</span>
              （最重的墙，近端头顶盖）、<span className="dn-tag bull">$64k
              +19.69M</span>、<span className="dn-tag bull">$66k +16.62M</span>、
              <span className="dn-tag bull">$70k +16.16M</span>、
              <span className="dn-tag bull">$68k +13.88M</span>、
              <span className="dn-tag bear">$60k −12.94M</span>（崩盘 put 残余，
              最重的负值）、<span className="dn-tag bull">$63k +12.50M</span>
              （就在盘口的支撑）、<span className="dn-tag bull">$80k +8.47M</span>、
              <span className="dn-tag bull">$67k +8.32M</span>、
              <span className="dn-tag bull">$72k +6.20M</span>。{' '}
              <span className="dn-em">
                正墙带 $63k–$72k 把盘口夹住，$65k +23.08M 盖是头顶第一道真正的
                摩擦、$60k −12.94M 是下方唯一的负口袋——做市商这本在往 $60k 的下跌
                里接、往 $65k 的挤压里卖，正是 gamma 为多时回撤会打的那种有序、
                均值回归的侧写。
              </span>{' '}
              按到期：8JUL26 0.3 <span className="dn-tag bull">+6.60M</span>
              （今日 08:00Z 结算，在本快照之后）、9JUL 1.3 +3.75M、10JUL 2.3
              <span className="dn-tag bull">+30.12M</span>、11JUL 3.3 −0.24M、
              17JUL 9.3 +21.41M、24JUL 16.3
              <span className="dn-tag bull">+5.67M</span>、31JUL 23.3
              <span className="dn-tag bull">+36.82M</span>（板上最重的一块）、
              28AUG 51.3 +6.49M、25SEP 79.3 −0.22M、25DEC 170.3 +2.26M、
              26MAR27 261.3 +0.97M、25JUN27 352.3 +0.53M——整条拆条加总
              +114.2M（= gex_summary.json net_gex +114.17M）。{' '}
              <span className="dn-em">
                只有两个到期带负 gamma、且都微不足道（11JUL −0.24M、25SEP
                −0.22M）——整条拆条上没有任何近端放大器；压波动 regime 未受威胁。
              </span>
            </p>

            <p>
              878 个合约的中位 IV 是 <span className="dn-tag">42.5%</span>，对上
              30D 收盘对收盘 RV <span className="dn-tag">32.08%</span>——链级富度
              <span className="dn-tag">约 +10.4pt</span>。RV 从反弹较平静的读数
              走高，因为回撤把日振幅拉宽了。{' '}
              <span className="dn-em">
                42.5% 中位是 878 个合约的链级中位、<span className="dn-em">不是</span>
                一个可交易的价差；到期/行权价级的 vega、skew 和期限结构仍未加载，
                所以波动读法保持仅作框架。
              </span>{' '}
              RV 方法：30D 收盘对收盘，最后 30 个日对数回报（= 31 个连续日收）上
              logret.std × √365 × 100，锚在 parquet 末 bar 2026-07-08 00:05Z；
              29-回报读数是 31.62%。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 利率坚挺 / 风险偏空（10Y 4.48%、TIPS 2.24% EXTREME、DXY 101.12 EXTREME）· 信用宽松（HY OAS 2.72% RISK-ON）· 重开门槛未触发（2.72% &lt; 2.78%）· 跨资产 IDIOSYNCRATIC（|r| 0.201），BTC 7d +8.27% 领先 NQ/SP500（META +9.33% 才是 7d 冠军）</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观盘面分裂——利率和美元坚挺、偏空，信用和债券波动宽松、偏多
              </span>。仪表盘渲染是 2026-07-07 22:16Z，快照前约 1.8h。美 10Y 名义
              <span className="dn-tag">4.48%（−1.0bp）</span>，regime z
              <span className="dn-tag bear">+1.49</span>，episodic z +0.04——
              RISK-OFF。10Y TIPS 实际
              <span className="dn-tag">2.24%（−2.0bp）</span>，regime z
              <span className="dn-tag bear">+2.40</span>，episodic z +1.04——
              EXTREME RISK-OFF，面板上最紧的一条线。5Y5Y BE 通胀
              <span className="dn-tag">2.21%（−1.0bp）</span>——无标签。HY OAS
              <span className="dn-tag bull">2.72%（−2.0bp）</span>，regime z
              <span className="dn-tag bull">−1.10</span>，episodic z −0.24——
              RISK-ON，信用仍宽松、当日又松 2bp。MOVE 债波
              <span className="dn-tag bull">65.8（+0.36）</span>——宽松。DXY
              <span className="dn-tag">101.12（+0.27）</span>，regime z
              <span className="dn-tag bear">+2.34</span>，episodic z +1.04——
              EXTREME RISK-OFF，美元坚挺。联储净流动性
              <span className="dn-tag">$5.843T（+0.053T）</span>，episodic z
              <span className="dn-tag bull">+2.11</span>——一个走高的新周度印。
              US-JP 10Y 利差 <span className="dn-tag">1.83%（−1.0bp）</span>；
              USD/JPY <span className="dn-tag">162.15（+0.06）</span>。NFCI −0.504
              （旧 11d）。{' '}
              <span className="dn-em">
                净：put-价差重开门槛都没触发、且都在触发线下进一步走松——HY OAS
                门槛 2.78%（现 2.72%，差 6bp）、10Y 门槛 4.53%（现 4.48%，差 5bp）
                ——而收复做多的利率过滤（10Y &lt; 4.55%）在 4.48% 保持 TRUE。
                宏观脉冲不是这里驱动 BTC 的东西；回撤是内生的——一次杠杆去化，
                不是宏观风险事件。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>水平</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>episodic z</th>
                  <th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>美 10Y 名义</td><td className="num">4.48%</td><td className="num bull">−1.0bp</td><td className="num bear">+1.49</td><td className="num">+0.04</td><td className="bear">紧 · RISK-OFF</td></tr>
                <tr><td>10Y TIPS 实际</td><td className="num">2.24%</td><td className="num bull">−2.0bp</td><td className="num bear">+2.40</td><td className="num">+1.04</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.21%</td><td className="num bull">−1.0bp</td><td className="num">−0.25</td><td className="num">−0.45</td><td className="neut">无标签</td></tr>
                <tr><td>HY OAS</td><td className="num">2.72%</td><td className="num bull">−2.0bp</td><td className="num bull">−1.10</td><td className="num">−0.24</td><td className="bull">松 · RISK-ON</td></tr>
                <tr><td>芝加哥联储 NFCI</td><td className="num">−0.504</td><td className="num">−0.00</td><td className="num">+0.40</td><td className="num">−0.15</td><td className="stale">旧 11d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">65.8</td><td className="num bear">+0.36</td><td className="num bull">−0.87</td><td className="num bull">−1.37</td><td className="bull">松</td></tr>
                <tr><td>DXY</td><td className="num">101.12</td><td className="num bear">+0.27</td><td className="num bear">+2.34</td><td className="num">+1.04</td><td className="bear">EXTREME RISK-OFF</td></tr>
                <tr><td>联储净流动性</td><td className="num">$5.843T</td><td className="num bull">+0.053T</td><td className="num">−0.60</td><td className="num bull">+2.11</td><td className="bull">走高的新周度印</td></tr>
                <tr><td>USD/JPY</td><td className="num">162.15</td><td className="num">+0.06</td><td className="num bear">+1.54</td><td className="num">+1.29</td><td className="neut">日元偏软</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.83%</td><td className="num bull">−1.0bp</td><td className="num bull">−0.98</td><td className="num">+0.04</td><td className="bull">收窄</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7853</td><td className="num">−0.00</td><td className="num bull">−1.39</td><td className="num">+0.71</td><td className="neut">无标签</td></tr>
                <tr><td>10Y 盈亏平衡</td><td className="num">2.24%</td><td className="num bear">+1.0bp</td><td className="num bull">−1.40</td><td className="num">−0.88</td><td className="neut">无标签</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">+13.5bp（月度）</td><td className="num bear">+2.56</td><td className="num">+1.43</td><td className="stale">月度（67d）· 勿依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗，22 个资产，166 行，摘要 00:00Z——{' '}
              <span className="dn-em">滚动 7 天读数，非当日</span>）。非对角均
              <span className="dn-tag">|r| 0.201</span>——牢牢在 IDIOSYNCRATIC
              带（&lt;0.25），较 07-07 走松。BTC 头部的挂钩现在是<b>金属</b>板块、
              不是股指引擎：PLAT <span className="dn-tag">+0.358</span>、SILVER
              <span className="dn-tag">+0.347</span>、GOLD
              <span className="dn-tag">+0.317</span>、COPPER +0.296、PALL +0.294、
              SP500 +0.285、URNM +0.284，然后
              <span className="dn-tag">NQ +0.259</span> 掉到第 8 位（NVDA
              +0.258、TSLA +0.187）。7d 表现：
              <span className="dn-tag bull">BTC +8.27%</span>——领先 NQ/SP500 和
              多数挂牌名，但 <span className="dn-tag bull">META +9.33%</span> 才是
              7d 表现冠军——对上 <span className="dn-tag bear">NQ −3.87%</span>
              （BTC 领先 NQ +12.14pt）、SP500 +0.03%、JP225 −6.00%。TradFi 单名
              分化：META <span className="dn-tag bull">+9.33%</span>（冠军）、
              AAPL +7.66%、MSFT +3.46%、AMZN +2.69%、GOOGL +2.56%、TSLA −3.13%、
              NVDA −1.65%。金属坚挺：PLAT +5.36%、PALL +4.84%、GOLD +2.59%、
              SILVER +2.18%。能源上：BRENT +3.68%、CL +3.29%。{' '}
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 领先完整且宽（+8.27% vs NQ −3.87%）——反弹
                跑赢了股指盘面，而回撤是 BTC 从一个大幅领先里吐一点回去、不是往一个
                在滚的 NQ 收敛下去。相关 regime 保持 idiosyncratic；BTC 本周唯一
                真正的挂钩是金属，而金属本身坚挺。内生于加密仍是承重读法。
              </span>{' '}
              JGB 月度 2.65% 带一个 EXTREME RISK-OFF 月度标签——勿依赖（旧 67d）。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 200W 收复 PRIMARY 监控——在周线收盘上完整、在途周仍在上方 · 补量反弹侦察<b>撤下</b>（需求块恶化——OI 在缩、聪明钱净头寸冲成平、taker/CVD 净卖）· 宏观尾巴未触发 · 挤压周期安静（多头冲刷、无再堆叠）· 无新交易</span>
            </h2>

            <p>
              <span className="dn-signal">
                反弹的头一回回撤在周线收盘口径上守住了收复的底线、但坐实了
                去杠杆读法——本子保持平
              </span>。200W 收复<b>没有</b>被证伪：07-06 周线收 $64,023.60 结在
              $62,864 底线上方 +1.84%、在途 07-13 周 $63,427 守在上方 +0.90%。但
              这一切里每一个 live 盘面的需求读数本切都恶化了——OI 连续第二天缩、
              聪明钱净头寸从 +2,349 冲成平、taker/期货 CVD 净卖、资金费掉出顶、
              边际多头轮到散户。补量反弹侦察——它需要需求确认才能把价格前置条件
              翻成入场——保持<em>撤下</em>：需求块没有抬升、反而在恶化。今天的交易
              本子是：无空、无侦察入场、无新对冲。压波动的做市商盘让在收复底线上
              新开空是差风险（正 gamma 接往 $60k 的下跌），而缺席的需求让侦察多
              过早。等一个确认的需求印（上涨时 OI 在建 + taker-net 转正 + 聪明钱
              重建多）<b>或者</b>一根收回 $62,864 下方的周线来重新坐实破线。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W 周期底线监控——收复在周线收盘上 INTACT：07-06 周线收 $64,023.60 结在 $62,864 底线上方 +1.84%（破线以来第一根收在上方的周线），在途 07-13 周 $63,427 守在上方 +0.90%；06-15 收复论已 FALSIFIED（被这轮反弹结构取代）</span>
              <div className="dn-trade-name">
                200W 底线——在 07-06 周线收盘上收复，穿过头一回回撤守在上方；破线在 06-29 收盘上保持坐实，反弹在 07-06 收盘上保持完整
              </div>
              <div className="dn-thesis">
                06-29 周线收 $60,224.70 坐实破线（低于 $62,864 底线 −4.20%）；
                06-30 打出最深日收 $58,605.40（低于 $62,864 底线 −6.77%）；然后
                六连阳（07-01 → 07-06）把 spot 拉回穿线，07-04 $63,114.80 是第一根
                收在上方的日线、07-06 $64,023.60 是第一根收在上方的<em>周线</em>。
                本备忘是那轮反弹的头一回回撤：07-07 用一根 $63,335.40 的下跌收盘
                打断了连阳，但收复结构未破——周线收盘守在上方、live spot $63,431
                仍高出底线 +0.90%。单根周线收在上方是一次首测、不是确认的 regime
                切换；第二根收回 $62,864 下方的下跌周会重新坐实破线。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 底线</span><span className="dn-lvl-v">$62,864 = 全历史 W-MON W-SMA200，本切从 2019→ parquet glob 重算（357 根完整 W-MON bar，最后一根完整周为 07-06）；trap-watch 状态文件（W-SUN 约定）独立读状态&ldquo;above&rdquo;、末事件周 07-05、sma200 $62,642——两者都认同 ABOVE。权威 weekly_200sma.json 缺失，所以比率百分位 / 末事件保持未取（不是编造）</span></div>
                <div><span className="dn-lvl-k">破线 — CONFIRMED</span><span className="dn-lvl-v bear">06-29 周线收 $60,224.70 结在底线下方 −4.20%；06-30 日收 $58,605.40 最深</span></div>
                <div><span className="dn-lvl-k">收复 — 在周线收盘上 INTACT</span><span className="dn-lvl-v bull">07-06 周线收 $64,023.60（+1.84%）破线以来第一根收在上方的周线；在途 07-13 周 $63,427（+0.90%）穿过回撤守在上方</span></div>
                <div><span className="dn-lvl-k">重新坐实破线触发</span><span className="dn-lvl-v bear">一根 07-13（或更晚）的周线收 &lt; $62,864 重新坐实破线、重新证伪反弹——反转本监控的唯一那条线</span></div>
              </div>
              <div className="dn-gating">
                <b>监控，不是交易。</b> 200W 底线是一条慢的周线收盘位（约
                $250/周漂移），所以一个几小时旧的计算没问题。收复完整但年轻——
                单根周线收在上方、未确认，而 live 盘面把它背后的需求读成去杠杆。
                别把 +0.90% 的 spot 垫读成安全边际；算数的那条线是周线收盘，而在途
                周还有五天要结。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">long · 侦察 · 撤下 · 价格前置条件保持 TRUE（spot 在翻转位、D-EMA20/D-SMA20 和收复底线上方）但需求块<b>恶化</b>——OI 连续第二天缩、聪明钱净头寸 +2,349 → FLAT、taker/期货 CVD 净卖、资金费掉出顶；无需求确认，所以侦察保持撤下</span>
              <div className="dn-trade-name">
                补量反弹侦察——价格前置条件完整但需求穿过回撤恶化；入场推迟到需求确认、不只是价格
              </div>
              <div className="dn-thesis">
                侦察自收复以来一直持有一个有效的价格前置条件——spot 在 0γ 翻转位
                上方、在 D-EMA20 / D-SMA20 上方、在收复的 200W 底线上方——但一直
                要求一个需求确认才能把它翻成入场，因为整轮反弹读起来都是空头回补 /
                去杠杆、不是吸筹。本切需求读数没改善、反而恶化：OI Δ −3.16%（第二
                天缩）、聪明钱净头寸从 +2,348.85 靠一次 −3,191 的多头冲刷塌到 −34.40、
                24h taker-net −4,334 和期货 CVD Δ −4,317、资金费掉出顶，而散户往
                回撤里加、聪明钱冲出来。没有需求印可确认；侦察保持撤下。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">撤下 · 无入场 · 价格前置条件 TRUE（spot 在翻转位上方 +3.87%、在 D-EMA20/D-SMA20 上方、在底线上方 +0.90%）但需求块<b>恶化</b>——仅在一个需求确认（上涨时 OI 在建 + taker-net 转正 + 聪明钱重建多）<b>且</b>引擎转清/抬升时才重评</span></div>
                <div><span className="dn-lvl-k">技术前置条件</span><span className="dn-lvl-v bull">翻转位 $61,071 收复（TRUE——spot 高出 +3.87%）且 D-EMA20 $62,693 / D-SMA20 $61,933 收复（TRUE——两条日线均线在盘下）且底线 $62,864 周线收盘收复（TRUE——07-06 收在上方）</span></div>
                <div><span className="dn-lvl-k">需求前置条件（未满足——恶化）</span><span className="dn-lvl-v bear">OI 缩 −3.16%（落了、本需在建）· taker-net −4,334 / 期货 CVD −4,317（净卖、本需为正）· 聪明钱净头寸 +2,349 → −34（冲成平、本需重建多）· 资金费掉出顶；本切每个需求读数都往错方向动</span></div>
                <div><span className="dn-lvl-k">引擎确认</span><span className="dn-lvl-v bear">未 true——3 多 / 3 空 / 4 中性，高周期偏空 / 短周期反弹；1h 滚到水上死叉、1w 坐实水下死叉、1d 在 TD Sell 7；被 12h/1d 底背离和 1M ⚡TD9 BUY 对冲</span></div>
                <div><span className="dn-lvl-k">止损（若曾触发）</span><span className="dn-lvl-v bear">一根周线收 &lt; $62,864（200W 底线）重新坐实破线、彻底终结反弹读法</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b> 侦察从来不是关于价格——价格前置条件自收复以来一直
                TRUE。它一直是关于需求，而需求是那个清不掉的块。仅凭价格、买进一本
                正在冲刷多头、缩 OI 的盘里的收复底线，是在买一次去杠杆、还叫它底。
                入场要求盘面显示吸筹（上涨时 OI 在建、taker-net 为正、聪明钱重建
                多），不只是一个守住的位。在那之前，撤下。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 宏观尾巴 · put-价差重开门槛<b>仍未触发</b>：HY OAS 2.72% &lt; 2.78% 门槛（本切又松 −2.0bp，差 6bp），10Y 腿差 5bp（4.48% vs 4.53% 门槛）；两腿都在触发线下</span>
              <div className="dn-trade-name">
                下行 put-价差——无仓位；两个重开门槛都在触发线下进一步走松，所以不滚
              </div>
              <div className="dn-thesis">
                无下行对冲在场。会武装一个的重开门槛本切都在触发线下进一步走松：
                HY OAS 2.72%（−2.0bp，比 2.78% 门槛低 6bp）、10Y 4.48%（−1.0bp，比
                4.53% 门槛低 5bp）。信用宽松、风险偏多（HY OAS regime z −1.10），
                所以没有什么把尾巴对冲拉回来。收复做多的利率过滤（10Y &lt; 4.55%）
                在 4.48% 保持 TRUE，但它是一个独立过滤、需要一个 BTC 内部的需求
                转向才能翻成侦察多——而那个转向缺席。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bull">无仓位 · 信用门槛在收盘口径上<b>仍未触发</b> · HY OAS 2.72% &lt; 2.78%（差 6bp），10Y 腿差 5bp</span></div>
                <div><span className="dn-lvl-k">重开触发（未触发）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收盘（现 2.72%，低 6bp）或 10Y &gt; 4.53% 收盘（现 4.48%，低 5bp——更近的腿）</span></div>
                <div><span className="dn-lvl-k">收复做多利率过滤</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收盘——在 4.48% TRUE；等一个 BTC 内部需求转向来翻</span></div>
              </div>
              <div className="dn-gating">
                <b>提醒：</b> 重开门槛（HY OAS &gt; 2.78%、10Y &gt; 4.53%）是随水平
                漂移设的自由裁量监控、不是回测的断点。门槛真触发时的新对冲腿会滚到
                一个近端 forward 到期——但做市商拆条净多 gamma、无近端放大器，所以
                新尾巴不会带放大器顺风。信用保持宽松时无事可做。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 挤压周期 hostile-2 观察名单 · 无日历先验 · 本切<b>安静</b>——聪明钱源 live、24h 移动是一次双边<b>多头冲刷</b>（Δ多 −3,191、Δ空 −808），<b>不是</b>持续的 hostile-2 再堆叠；同分钟孤立的 Δ空 &gt; 0 + Δ多 &lt; 0 tick 在原始源上出现但没有一个延续成合格的再堆叠</span>
              <div className="dn-trade-name">
                挤压周期——无持续的 hostile-2 特征；聪明钱净头寸多→平的翻转来自一次净多投降、不是一次延续的空头再堆叠
              </div>
              <div className="dn-thesis">
                挤压周期框架盯一个再堆叠 hostile-2 特征——一个<b>跨连续分钟延续</b>
                的离散 Δ空 &gt; 0 + Δ多 &lt; 0、而非单个孤立 tick——自节奏断掉以来无
                日历先验。本切聪明钱净头寸从 +2,348.85 翻到 −34.40，24h 机制是一次
                双边去杠杆、不是再堆叠：随价格翻转，long_btc 净流 −3,191、short_btc
                净流 −808，净头寸首次跌破 0 在 07-07 13:56Z、long_btc 探底 11,879 @
                07-07 22:01Z。同分钟再堆叠形状的孤立 tick 确实在原始源上打
                （例如 07-07 20:10→20:11，Δ多 −188 / Δ空 +340），但没有一个延续成
                合格的再堆叠，所以净上两边都缩。那是一次多头投降、不是持续的
                hostile-2 再堆叠。无合格特征可标。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">live 源 · 本切无持续的 hostile-2 步（同分钟再堆叠形状的孤立 tick 出现但没有一个延续）· 24h 聪明钱移动是一次双边冲刷（净上两边都更小）、不是再堆叠</span></div>
                <div><span className="dn-lvl-k">live 读数（不是特征）</span><span className="dn-lvl-v">多 11,982 / 空 12,017 / 净 −34——净 FLAT，经一次 −3,191 多头冲刷 vs −808 空头削从 +2,349 翻过来；24h 净头寸区间 −815 / +3,722</span></div>
                <div><span className="dn-lvl-k">重新武装条件</span><span className="dn-lvl-v">一个<b>跨连续分钟延续</b>的 Δ空 &gt; 0 + Δ多 &lt; 0 步出现在 live 源上 → 标一个再堆叠（hostile-2）延续特征；本切只有单分钟孤立 tick，无合格（延续）特征</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b> 净头寸从多翻到平在标题上看很戏剧、但机制才算数——
                一次双边冲刷（两边都流血）是去杠杆，而一次再堆叠（空建、多减）是
                一次新鲜的方向性施压。本切是前者。每个新鲜离散步单看；自节奏断掉
                以来无可依赖的时段基率。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 200W 收复在周线收盘上完整 · 回撤读去杠杆 · 侦察因缺席需求撤下 · 宏观门槛未触发 · 挤压周期安静 · 本子平</span>
            </h2>

            <p>
              07-07 那些条件里：200W 收复守住了（07-06 周线收盘留在上方、在途周
              守在上方——完整、未被证伪）；补量反弹侦察的需求前置条件<b>没有</b>
              抬升、反而<b>恶化</b>（OI 缩、聪明钱净头寸冲成平、taker/CVD 净卖）；
              宏观重开门槛保持未触发、且进一步走松；挤压周期 hostile-2 观察名单
              保持安静（一次多头冲刷、不是再堆叠）；无侦察入场触发。{' '}
              <em>
                反弹的结构在周线收盘上存活，但跟进是一次去杠杆式回撤——价格位
                守住了、而它们背后的需求变薄了。
              </em>{' '}
              条件围绕一个完整但年轻的 200W 收复、一本压波动的做市商盘、一段去杠杆
              盘面、和一个为需求撤下的侦察重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水平</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>200W 收复 — 重新坐实破线触发</td><td className="bear">一根 07-13（或更晚）的周线收 &lt; $62,864（全历史 W-MON W-SMA200）</td><td>重新坐实破线、重新证伪反弹——反转 primary 监控、重评整个结构</td></tr>
                <tr><td>200W 收复守住</td><td className="bull">周线收盘守 &gt; $62,864 且做市商盘净多 gamma</td><td>底线上方消化读法成立；侦察不对称仅在需求同步确认时改善</td></tr>
                <tr><td>补量反弹侦察（多）— 需求确认</td><td className="bull">上涨时 OI 在建 且 taker-net 转正 且 聪明钱重建多，配一个抬升的引擎</td><td>仅在一个需求印上侦察多 0.2R——绝不仅凭价格；目标 D-EMA50/D-SMA50 簇 $65,571–$65,985</td></tr>
                <tr><td>补量反弹侦察 — 撤下</td><td className="bear">需求块本切恶化（OI −3.16%、聪明钱净头寸冲成平、taker/CVD 净卖）</td><td>无入场；仅价格前置条件不够——等吸筹、不是一个守住的位</td></tr>
                <tr><td>在底线新开空</td><td className="bear">低信念——做市商盘净多 gamma（+114.2M）、接往 $60k 的下跌</td><td>别在正 gamma 里空收复的底线；空需要一个新鲜的负 gamma 块<b>且</b>一根收回 $62,864 下方的周线</td></tr>
                <tr><td>挤压周期 hostile-2</td><td className="stale">无日历先验 · 本切安静（多头冲刷、只有孤立再堆叠形状的 tick、无延续的再堆叠）</td><td>把一个<b>跨连续分钟延续</b>的新鲜 Δ空 &gt; 0 + Δ多 &lt; 0 步标为再堆叠特征（单分钟孤立 tick 不合格）；单看、无时段先验</td></tr>
                <tr><td>宏观尾巴重开（门槛）</td><td className="bear">HY OAS &gt; 2.78%（差 6bp）或 10Y &gt; 4.53%（差 5bp）</td><td>把对冲滚到一个近端 forward；尾巴 +0.1R 向 primary——两个都未触发且在走松，无事可做</td></tr>
                <tr><td>收复做多利率过滤</td><td className="bull">10Y &lt; 4.55% 收盘——在 4.48% TRUE；等一个 BTC 内部需求转向</td><td>独立过滤 true；需要侦察的需求确认来翻成多</td></tr>
              </tbody>
            </table>

            <p>
              重写<em>这份</em>备忘的唯一那条线是{' '}
              <span className="dn-signal">
                反弹的需求到底会不会终于确认——上涨时 OI 在建、taker-net 转正、
                聪明钱在收复底线上方重建多——还是去杠杆带来第二根下跌周、把周线
                收回 $62,864 下方、重新坐实破线。价格结构在唯一算数的口径上守住了
                收复；它背后的需求没有。问题现在是仓位本子会不会站出来守收复的
                底线，还是这轮反弹是一次跑到没多头可冲的空头回补弹
              </span>。在那之前本备忘按写的跑：200W 收复完整但年轻，补量反弹侦察
              因缺席需求撤下，宏观门槛保持未触发，挤压周期观察名单安静，做市商盘
              让回撤保持有序。本子保持平——不在正 gamma 里空，不在无需求时侦察多。
              下一个 24h 的正确读法是{' '}
              <em>耐心——位守住了，等盘面显示一个买家</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计）
            </span>
            <b>状态：</b>这是 <b>v2</b> 备忘——<b>已过 codex 敌对式审计</b>。它经过了
            跨模型敌对式审计（codex 主审 + 持有发布闸——判定 BLOCK-CRITICAL，
            1 CRITICAL / 2 MAJOR / 4 MINOR；ask-deepseek 算术二审——1 CRITICAL /
            1 MAJOR / 2 MINOR，每一条在应用前按重算逐条<b>裁定</b>，遵 runbook §5）。
            每一条 finding 都已应用并在整个 EN 文件上 grep 收口（每个关键错误论断
            模式都搜过、所有语义变体都改、重新 grep 到零残留）。判定见{' '}
            <code>audits/2026-07-08-desk-note.md</code>。{' '}
            <span className="dn-em">
              Findings、裁定与 grep 收口（搜的模式——改前命中——改后命中——状态）：{' '}
              <b>DN-001（codex，CRITICAL——跨资产&ldquo;领先整个复合体&rdquo;
              自相矛盾）：</b>草稿把 BTC +8.27% 叫成整个复合体的 7d 冠军，却在同一段
              里列了 META +9.33%；META &gt; BTC。模式 <code>LEADS the complex</code> /{' '}
              <code>LEADING the whole complex</code>——改前 2 命中——改后 0——RESOLVED
              （收窄为&ldquo;BTC 领先 NQ/SP500 和多数挂牌名，META +9.33% 才是 7d
              冠军&rdquo;；真正的 BTC-对-NQ/TradFi-引擎领先 +12.14pt 保留）。{' '}
              <b>DN-002（codex，MAJOR——挤压周期&ldquo;无同分钟步&rdquo;论断为假）：</b>
              live 盘面确实含同分钟孤立的 Δ空&gt;0 + Δ多&lt;0 tick（例如 07-07
              20:10→20:11，Δ多 −188 / Δ空 +340），所以字面&ldquo;无离散同分钟步&rdquo;
              措辞为假。模式 <code>no discrete Δshort</code> / <code>same-minute step</code>
              （作为裸的无步论断）/ <code>both sides bled continuously</code> /{' '}
              <code>neither built</code> / <code>continuous long capitulation</code>
              ——改前 9 命中——改后 0——RESOLVED（通篇改写为承认孤立 tick 出现但
              没有一个<b>延续</b>成合格的再堆叠；hostile-2 门槛现定义为一个
              Δ空&gt;0+Δ多&lt;0 步跨连续分钟延续，24h 净机制仍是双边去杠杆）。{' '}
              <b>DN-003（codex MAJOR + deepseek CRITICAL——GEX 拆条漏了 24JUL26）：</b>
              prose 到期拆条从 17JUL 跳到 31JUL、漏了 24JUL26 +5.67M，所以列出的
              行加总 ≈+108.5M、不是所述的 +114.2M。模式
              <code>17JUL 9.3 +21.41M, 31JUL</code>（那个跳跃）——改前 1 命中——
              改后 0——RESOLVED（插入 24JUL 16.3 +5.67M；整条拆条现加总 +114.2M =
              gex_summary.json net_gex +114.17M）。{' '}
              <b>DN-005（codex，MINOR——200W bar 计数差一）：</b>357 根<b>完整</b>
              W-MON bar 产出 $62,864 底线；358 会含在途 07-13 周。模式
              <code>358 W-MON</code> / <code>358 bars</code>——改前 4 命中——改后 0——
              RESOLVED（全改为&ldquo;357 根完整 W-MON bar&rdquo;；仅剩的
              &ldquo;358&rdquo; token 是无关的 PLAT 相关性 +0.358）。{' '}
              <b>DN-006（codex MINOR + deepseek MAJOR——06-30 深度 %）：</b>对 $62,864
              底线，58,605.40/62,864−1 = −6.77%，不是所述的 −6.65%。模式
              <code>6.65</code>——改前 1 命中——改后 0——RESOLVED（改正为低于 $62,864
              底线 −6.77%）。{' '}
              <b>DN-004（codex，MINOR——未披露的 24h+1m 窗）：</b>&ldquo;24h&rdquo;
              数字在一个 24h+1m 含端点基线（起始 BJ 07-07 08:04）上复现。RESOLVED
              经披露——manifest live-tape 旗标现声明每个 24h 数字都是 24h+1m 含端点
              采样窗（端到端 08:05→08:05 在 spot 上差 ≤0.06pt / OI 上差 ≤7 BTC）；
              grep <code>24h+1m</code> 改前 0——改后 1。{' '}
              <b>DN-007（codex，MINOR——周线阶梯约定）：</b>周线均线阶梯用含在途
              07-12 周的 W-SUN bar，而 200W 底线用完整 W-MON。RESOLVED 经披露——
              均线方法块现明确声明两套约定；grep{' '}
              <code>two weekly conventions differ</code> 改前 0——改后 1。
            </span>{' '}
            总体：<b>已过 codex 敌对式审计</b>——每条 finding RESOLVED（改后命中 =
            0），无 UNRESOLVED 残留。deepseek 的 MINOR（聪明钱净 −34 vs −34.40 取整；
            24h 高/低跨块 $8/$163 差）裁定为可接受的取整 / 已在行内解释的窗口，无
            数值改动。构建代理：完整 <code>next build</code> 仍被环境阻断（Node
            v18.19.1 &lt; Next 要求的 &gt;=20.9.0）；<code>tsc --noEmit</code> 是
            构建代理、通过 exit 0。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部主理人之间讨论准备的交易台文档，
            <em>不是投资建议、不是招揽、不是要约</em>，也未针对任何接收方的具体
            情况个性化。数字反映单一原子快照（2026-07-08 00:05Z），分节来源在
            上方 manifest 带里披露；宏观 Tier-1 面板渲染是 2026-07-07 22:16Z
            （快照前约 1.8h），部分输入明确为旧或待定并如此标注。水平、规模和
            条件是本台流程的示例、不是长期推荐。过去的相关性、gamma 和仓位形态
            不约束未来盘面。衍生品带全额亏损的风险，若加杠杆，亏损可超过存入
            保证金。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                收复在周线收盘上守住了，但盘面是冲刷了自己的多头才到那儿的。价格
                在底线上方、需求还没到它背后——撤下，等一个买家出现。耐心。
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
            v2 · 2026-07-08 00:05Z 快照 · 2026-07-08T00:35:34Z ·
            来源：live_db.json · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
