import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-05-29 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-05-29',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-05-29' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260529() {
  await requireViewer('/zh/desk/2026-05-29');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · 交易台备忘 · 2026-05-29 · v2</span>
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
              <span className="dn-big">$73,659</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.13%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-05-29 00:08Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-29 00:08Z（pin 第 37049 行）</td>
                  <td className="dn-flag">最新 · 1 分钟 · 审计时文件 tail = pin</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-05-29 00:01Z scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 较快照锚滞后约 7
                    分钟 · 含未收盘 K 线 · 扫描存档于
                    audits/2026-05-29-desk-note.md
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-05-29 00:01Z 快照</td>
                  <td className="dn-flag">
                    最新 · Deribit idx $73,750 对现货 $73,659 · 1004 合约
                    （前 890 · 28MAY 0DTE 已过期、1JUN/19JUN/28AUG 新到期
                    + 新增 strike 一夜里印进来）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-05-29 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 7 分钟 · 7d 1h bar · 22 资产</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-28 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.9h · FRED Tier-1 再落（10Y −2bp 到
                    4.48%、TIPS −1bp 到 2.09%、HY OAS −1bp 到 2.71%、
                    MOVE −4.05 到 70.9）· DXY 走强 +0.29 到 99.50、
                    Fed 净流动性 −0.058T 到 $5.872T · Tier-3 通胀行抓取失败
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-05-29 00:06Z</td>
                  <td className="dn-flag">
                    较快照锚滞后约 2 分钟 · 偏移按现货重算 ·
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
              <span className="dn-v bear">+10.95%（封顶）</span>
              <span className="dn-src">live · 00:08Z · 24h 均值 +9.66% · 24h 内 737/1441 根原始记录坐在封顶（~51%）；977 根分钟 Δ 不变（封顶 + 非封顶平点合计）</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+10.95% → +10.95%</span>
              <span className="dn-src">区间 +5.48% / +10.95% · 谷点 @ 2026-05-28 08:03Z（BJ 16:03 05-28）+5.48% ann · BJ 11:44 起脱开封顶、到快照前重新坐回封顶</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+5.34%（+5,401 BTC）</span>
              <span className="dn-src">live · SM short_btc +9.76k、long_btc +3.30k · SM 两侧都加、空是多的三倍——偏空</span>
            </div>
            <div>
              <span className="dn-k">Binance mkt long/short</span>
              <span className="dn-v bear">63.85 / 36.15</span>
              <span className="dn-src">live_db `mkt_long_pct` · 在三次破位中又拥挤回多 62.64 → 63.85（谱系新峰）</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−29.0k（净 SHORT）</span>
              <span className="dn-src">live · long 13.09k − short 42.08k · 谷点 −31.70k @ 2026-05-28 09:46Z（BJ 17:46 05-28）；到快照已从谷上回补约 2.7k</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 05-28 备忘</span>
              <span className="dn-v bear">−22.5k → −29.0k（−6.5k 更空）</span>
              <span className="dn-src">|Δ|/prior_net = 28.7% · 重堆敌对-2 步 Δnet −4,396 @ 2026-05-28 06:01Z（BJ 14:01）—— 单分钟 Δshort +4,000</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.4% / 26.61%</span>
              <span className="dn-src">GEX IV 中位数 · 1004 合约</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−1.71%（在下方）</span>
              <span className="dn-src">flip $74,939 · 对现货 $73,659（−1.71%）/ GEX 文件 −1.6% 对 Deribit idx $73,750（−1.59%）——两参考都给负、tile 取 −1.71% 保持一致 · aggregate GEX −47.9M（前 −70.8M）· 除 29MAY ≈ +48M</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                昨天那本破位延伸空的剩余、把整条目标阶梯都跑完了
              </span>
              。跑剩余的门、在 BJ 14:01 05-28 那一根重堆敌对-2 步上延
              ——连续第二根约 4k 的单分钟空头重堆（
              <span className="dn-tag bear">Δshort +4,000 / Δnet −4,396</span>
              、现货 $72,969、SM net 一根线 −25,683 → −30,079）——价格
              把剩余的目标 #2 W-EMA200 种子 $73,710 与目标 #3 D-SMA100
              周期锚 $72,958 都干净跑到、
              <span className="dn-tag bear">24h 低 $72,614 @ 2026-05-28
              14:07Z（BJ 22:07 05-28）</span>
              更是<span className="dn-em">下穿周期锚</span>、谱系首次。SM net
              处于谱系新峰空 <span className="dn-tag bear">−29.0k</span>
              （long 13.09k − short 42.08k）；short_btc 42.08k 是谱系新高。
              但守住这本剩余的结构性理由今天就解掉：
              <span className="dn-signal">
                29MAY26 这根到期——现在 0.3 DTE、压着 −96.34M、是整条
                谱系最重的单 expiry γ 块——今天北京下午（约 08:00Z）到期、
                除掉 29MAY 之后整张 dealer 本子从 aggregate −47.9M 翻成
                约 +48M 净正
              </span>
              。本篇把阶梯标记完成、剩余在到期解里平掉、转向解后的
              γ 翻面与仓位本子第一根离谷的回补。
            </p>

            <p>
              现货报 <span className="dn-tag">$73,659</span> live、24h
              −1.13%、贴新
              <span className="dn-tag bear">0-γ flip $74,939 下方 −1.71%</span>
              （flip 跟着价格再下来 $618、从昨天的 $75,557）。结构又往下
              踏了一步：
              <span className="dn-signal">现货丢了 W-SMA20 那道地板</span>
              ——昨天那道在 24h 低上贴位差 $0 撑住的支撑、今天成了
              <span className="dn-tag bear">W-SMA20 $74,151（−0.66%）</span>
              （前 +0.42% 支撑）——现货夹在
              <span className="dn-tag bear">W-EMA200 种子 $73,702（−0.06%）</span>
              （刚在头顶）与周期锚
              <span className="dn-tag bull">D-SMA100 $73,021（+0.87%）</span>
              （刚在下方、整张矩阵上<em>唯一</em>的正偏移）之间这一条
              窄缝里。其余每一根日线与周线 MA 都在头顶、最近一簇
              <span className="dn-tag bear">D-SMA150 $76,368（−3.55%）</span>
              在 $2.7k 之外。24h 低盘中破了周期锚、但
              <span className="dn-em">
                日线收盘守住了——05-28 1d 收 $73,591、未收盘的 05-29 收
                $73,630、两根都在 D-SMA100 $73,021 上方、周期阶梯在收盘
                口径上没破
              </span>
              。最近的盘面给出这一轮下腿第一根真正的两侧转向：SM net
              <span className="dn-signal">已从 −31.7k 谷上回补约 2.7k</span>
              到快照、long_btc 从 9.74k 谷重建到 13.09k、1h RSI 从 33.1
              爬回 48.7、昨天的 1h/4h ⚡ TD9 BUY 走完翻成 Sell setup、
              现货 CVD 在 24h 下跌里吸了 +3,306。
              <span className="dn-em">
                那一压是对的、现在在建模阶梯的底部跑完了；支撑「守住它」
                的那根放大器、约 8 小时后到期。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · BJ 14:01 重堆敌对-2 · SM 比 05-28 多空 28.7% · 离 −31.7k 谷的第一根回补</span>
            </h2>

            <p>
              <span className="dn-signal">
                cycle 2 step 2 正按上一篇建模的 BJ 13–15 节奏落、而且印
                成延续、不是回补
              </span>
              。<span className="dn-tag">2026-05-28 06:01Z（BJ 14:01
              05-28）</span>、现货 <span className="dn-tag">$72,969.28</span>
              ：long_btc 从 <span className="dn-tag">11,417 → 11,021</span>
              （−396 BTC）、short_btc 从
              <span className="dn-tag">37,101 → 41,101</span>（+4,000 BTC
              一根分钟）、SM net 一根线
              <span className="dn-tag">−25,683 → −30,079</span>（Δnet
              −4,396）、数值随后两分钟钉住（真本子变化、不是行情口跳点）。
              这把上一篇的重堆敌对-2 门（离散 SM Δ ≤ −3k 把 SM 推
              &lt; −24k）直接打掉、是连续第二根约 4k+ 的单分钟空头重堆、
              落在 7 日不断的 BJ 13–15 节奏里。从那里 SM 跑到 24h 谷
              <span className="dn-tag bear">−31,696 @ 2026-05-28 09:46Z
              （BJ 17:46 05-28）</span>、short_btc 峰
              <span className="dn-tag bear">42,450 @ 2026-05-28 16:26Z
              （BJ 00:26 05-29）</span>。快照 SM
              <span className="dn-tag">−28,995</span>——long 13,086、short
              42,082——也就是<span className="dn-em">从谷上回补约 2.7k</span>
              ：不像 05-28 那样坐在谷上进快照、本子已经开始往回走、
              long_btc 从 9.74k 谷重建了 +3.35k。SM net 比 05-28 备忘多空
              28.7%（|−28,995 − (−22,535)| / 22,535 = 6,460 / 22,535 =
              28.7%）、cut fraction 比昨天的 87% 小得多——空头堆积的速率
              在减、即便绝对仓位创了新峰。
            </p>

            <p>
              杠杆那一侧仍读单向压、但 funding 在重新坐回封顶前、有一大段
              午盘脱开封顶的窗口。funding live
              <span className="dn-tag">+10.95% ann</span>——Binance 多头付费
              封顶（8h ceiling 0.01000、ann = ×1095）——但 24h 路径区间
              <span className="dn-tag">+5.48% / +10.95%</span>、谷点
              <span className="dn-tag">+5.48% ann @ 2026-05-28 08:03Z
              （BJ 16:03 05-28）</span>；funding 在
              <span className="dn-tag">2026-05-28 03:44Z（BJ 11:44）</span>
              首次脱开封顶、走过一段午盘软位、再到快照前重新坐回封顶。
              24h 均值 ann <span className="dn-tag">+9.66%</span>（比 05-28
              的 +9.53% 还热一点）。封顶占用
              <span className="dn-tag">737 / 1441 根 24h 记录（~51%）</span>
              正好在 +10.95%（低于 05-28 的 61%——午盘脱顶窗把占用拉下来）；
              分钟 Δ <span className="dn-tag">236 上 / 227 下 / 977 平</span>。
              OI 24h <span className="dn-tag bear">+5,401 BTC（+5.34%）</span>
              ——比 05-28 的 +2.02% 大得多。SM（top-trader）本子这次两侧都
              加：short_btc <span className="dn-tag bear">+9,757 BTC</span>、
              long_btc <span className="dn-tag">+3,297 BTC</span>（端点）
              ——空加约是多加的三倍、结构性偏空但两侧（不像 05-28 的多
              流失）。retail
              <span className="dn-tag bear">mkt_long_pct 63.85%</span>、从
              62.64% 上来——谱系新峰、是这条 7 日窗里 retail 多头最拥挤
              的一档、踩进连续第三天破位。perp 对现货
              <span className="dn-tag bear">−$120.10 折价</span>（1h 均
              −$107.08、区间 −$149.10 / −$81.79；4h 均 −$106.47、区间
              −$158.08 / −$42.73；24h 均 −$127.47、区间 −$411.82 / +$27.54
              ——破位冲击里 basis 一度拉到 −$412、还短暂翻 +$28 升水一次、
              再收回较窄负）。1 分钟 aggressor skew 快照
              <span className="dn-tag">+1.3</span>（1h 均 +15.7、区间
              −25.8 / +61.6）——水面下净买攻、跟前两个快照同一种超卖反射
              买盘印迹。
              <span className="dn-em">
                funding 脱顶又坐回 + basis 仍宽负 + retail 谱系新峰多 + SM
                谱系峰空但离谷回补约 2.7k：杠杆本子仍最偏侧、但第一道裂缝
                ——离谷的回补——现在在仓位侧看得见了、不只在 CVD 里。
              </span>
            </p>

            <p>
              窗口流向在 24h 上是<em>期货带头延伸、现货吸收</em>、到最近
              两段转成小幅期货买。24h：价格
              <span className="dn-tag bear">−1.13%</span>、OI
              <span className="dn-tag bear">+5,401 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +3,306</span>、期货 CVD
              <span className="dn-tag bear">Δ −144</span>、大单
              <span className="dn-tag bear">−747 BTC / 1,011 笔</span>、
              taker-net <span className="dn-tag bear">−144</span>——
              <span className="dn-em">
                现货 CVD 跑 +3,306 撞进 $845 下跌（被动现货买盘又在撑）、
                大单净 −747 BTC（块卖在压）、空头偏侧骑在 perp 那一侧
              </span>
              。4h（进快照）：价格
              <span className="dn-tag bull">+0.46%</span>、OI
              <span className="dn-tag">+883 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +2,344</span>、期货 CVD
              <span className="dn-tag bull">Δ +453</span>、大单
              <span className="dn-tag bear">−66 BTC / 159 笔</span>、
              taker-net <span className="dn-tag bull">+453</span>——
              <em>最近 4h 翻成期货买（taker +453）、OI 在价格离底反弹时
              重新放大 +883</em>。1h：价格
              <span className="dn-tag bull">+0.13%</span>、OI
              <span className="dn-tag bear">−81 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +1,164</span>、期货 CVD
              <span className="dn-tag bull">Δ +70</span>、taker-net
              <span className="dn-tag bull">+70</span>——
              <em>最近一小时现货与期货都买、OI 缩——一种回补色的微形状</em>
              。撑过 24h 下跌的那根买盘、把最近几小时转成两侧买；1h 的 OI
              缩是 BJ 14:01 重堆以来第一根空头修的印。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 下腿成熟（8h/12h 死叉、3d 1b、1d 进云）但超卖反弹反射清楚（1h RSI 48.7、1h/4h TD9 BUY 走完、8h TD9 BUY）· W-SMA20 地板丢 · 周期锚是那条线</span>
            </h2>

            <p>
              MTF 图把下腿走成熟、然后在引擎周期印出一道清楚的超卖反弹
              反射。慢周期确认：
              <span className="dn-signal">8h 与 12h 带水下 MACD 死叉</span>
              （5b / 3b 前、DIF −267 / −277 深水下）、
              <span className="dn-tag bear">3d 水上死叉走到 1 bar</span>
              （DIF +480、昨天还是刚印——周期框架的空探针确认了一根）、
              1d 仍<em>在云内</em>（72.2k–76.1k、云底往下展宽到 72.2k）。
              对面、反弹上了板：
              <span className="dn-tag bull">1h RSI 从 33.1 爬回 48.7</span>
              、1h 与 30m 都翻水下金叉（13b / 33b）、15m 爬回云上、
              <span className="dn-signal">昨天的 1h/4h ⚡ TD9 BUY 走完翻成
              Sell setup</span>
              （1h Sell 2、4h Sell 3——反转印生效了）、外加一根新的
              <span className="dn-tag bull">8h ⚡ TD9 BUY 印在 $73,708</span>
              。最深超卖现在是 12h（RSI 31.6）；引擎 1h–4h 已离底抬升。
              <span className="dn-em">
                直读：慢周期还在翻（8h/12h 死叉、3d 探针确认、1d 进云）、
                但引擎周期在反弹——结构说一道反趋势缓和正活、在一个完整
                但在侵蚀的中周期里、周期框架（3d）现在是要盯的那一根。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">73,708</td><td className="num">56.6</td><td className="neut">死叉（水上）6b</td><td className="bull">云上 ↓73.1k 15b</td><td>Sell 4</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">73,702</td><td className="num">55.0</td><td className="bull">金叉（水下）33b</td><td className="neut">云内 73.5–74.4k 2b</td><td>Sell 1</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">73,705</td><td className="num">48.7</td><td className="bull">金叉（水下）13b</td><td className="bear">云下 ↑75.0k 55b</td><td>Sell 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">73,702</td><td className="num bull">35.3</td><td className="bear">死叉（水下）14b</td><td className="bear">云下 ↑76.1k 19b</td><td>Sell 3</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">73,708</td><td className="num bull">34.1</td><td className="bear">死叉（水下）5b</td><td className="bear">云下 ↑78.1k 39b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">73,702</td><td className="num bull">31.6</td><td className="bear">死叉（水下）3b</td><td className="bear">云下 ↑78.7k 13b</td><td>Buy 7</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1d</td><td className="num">73,705</td><td className="num">36.4</td><td className="neut">死叉（水上）17b</td><td className="neut">云内 72.2k–76.1k 2b</td><td>Buy 3</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">73,702</td><td className="num">45.4</td><td className="neut">死叉（水上）1b</td><td className="neut">云内 73.5–91.1k 9b</td><td>Buy 6</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">73,708</td><td className="num">42.6</td><td className="bull">金叉（水下）6b</td><td className="bear">云下 ↑100.3k 17b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">73,708</td><td className="num">47.4</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 27b</td><td>Buy 7</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（滚动 latest
                    文件；逐字存档于 audits/2026-05-29-desk-note.md）。
                    头部告警：<em>3d 水上死叉 1b（确认）</em>、
                    <em>8h ⚡ TD9 BUY 印在 $73,708</em>。扫描现货 $73,702、
                    24h −1.06%、24h H/L $74,565 / $72,556、qVol $13.15B。
                    收盘为未收盘 K 线；每个值在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵把结构的这一步下踏补全。现货 $73,659
              <span className="dn-em">丢了 W-SMA20 那道地板</span>
              （昨天 24h 低贴位差 $0 撑住的那道）：现在
              <span className="dn-tag bear">W-SMA20 $74,151（−0.66%）</span>
              （前 +0.42% 支撑）。它刚落在
              <span className="dn-tag bear">W-EMA200 种子 $73,702（−0.06%）</span>
              下方、刚在周期锚
              <span className="dn-tag bull">D-SMA100 $73,021（+0.87%）</span>
              上方——矩阵上剩下的唯一正偏移。24h 低 $72,614 盘中破了周期
              锚、但没有任何一根日线收盘下穿它。其余全在头顶：
              <span className="dn-tag bear">D-EMA50 $76,396（−3.58%）</span>、
              <span className="dn-tag bear">D-SMA150 $76,368（−3.55%）</span>、
              <span className="dn-tag bear">D-EMA100 $76,653（−3.91%）</span>、
              <span className="dn-tag bear">D-EMA20 $76,663（−3.92%）</span>、
              <span className="dn-tag bear">D-SMA50 $77,192（−4.58%）</span>、
              <span className="dn-tag bear">D-SMA20 $77,611（−5.09%）</span>、
              <span className="dn-tag bear">W-EMA20 $77,718（−5.22%）</span>、
              <span className="dn-tag bear">W-EMA150 $78,228（−5.84%；种子）</span>、
              <span className="dn-tag bear">D-EMA150 $78,810（−6.54%）</span>、
              <span className="dn-tag bear">D-SMA200 $79,807（−7.70%）</span>、
              <span className="dn-tag bear">D-EMA200 $81,187（−9.27%）</span>。
              更高更远、已弃用：W-EMA100 $83,221（−11.49%）、W-EMA50
              $84,780（−13.12%）、W-SMA100 $88,329（−16.61%）、W-SMA50
              $93,369（−21.11%）。多头再入场簇（D-SMA150）今天在头顶
              $2.7k、中间叠五根 MA。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-05-29 00:06Z（close
                $73,630.40）；偏移按 live 现货 $73,659.25 重算。显示的 MA
                水位按 $ 取整、偏移用精确序列值算。W-SMA150 / W-SMA200 仍
                不可计算——盘上 126 根周 bar、不够这两个窗；W-EMA150
                $78,228（−5.84%）与 W-EMA200 $73,702（−0.06%）能显示是因为
                EMA 从可用历史 seed、并按种子值披露。周期锚 D-SMA100
                $73,021 现在是那条线：05-28 日收 $73,591 与未收盘的 05-29
                收 $73,630 都守在它上方；1d 收 &lt; $73,021 会是这条窗里
                第一次周期阶梯破、是另起的 regime 升级。日线收盘：05-27
                $74,418、05-28 $73,591、05-29（未收盘）$73,630。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 29MAY 0.3DTE −96.34M 今天约 08:00Z 解 · aggregate −47.9M 但除 29MAY ≈ +48M · 最重的墙下移到 $74k −49.37M</span>
            </h2>

            <p>
              dealer 本子整张的负 γ 权重、现在压在一根今天北京下午就解掉
              的 expiry 上、这就是本篇的结构枢轴。aggregate GEX
              <span className="dn-tag bear">−47.9M/1%</span>（从昨天的 −70.8M
              回了 +$22.9M——仍净空 γ、但在往零修）。
              <span className="dn-signal">
                29MAY26 这根现在 0.3 DTE、压着 −96.34M
              </span>
              （昨天 1.3 DTE 时 −84.16M——进它最后一程又深了 −$12.2M、是
              整条谱系最重的单 expiry γ 块）。它在 Deribit 08:00Z 结算
              （BJ 16:00）解掉、距快照约 8 小时。
              <span className="dn-em">
                把这一根减掉、其余的本子大约 +48M 净正（aggregate −47.9M −
                (−96.34M) ≈ +48.4M）：30MAY 1.3 −1.81M（轻负）、31MAY 2.3
                +0.93M、1JUN 3.3 +19.71M（一根新的正块）、5JUN 7.3 +1.13M、
                12JUN 14.3 −0.17M、19JUN 21.3 −0.70M、26JUN 28.3 +3.02M
                （列出的前段到 26JUN 合计 +22.1M；后段 31JUL +3.75M、25SEP
                +9.92M、25DEC +11.77M 再加 +26.8M、凑成除 29MAY 的约 +48M）。
                29MAY 今天清掉后、整条 dealer strip 从净空 γ（放大）翻回
                净多 γ（阻尼）——支撑这轮下腿的放大器消失。
              </span>
            </p>

            <p>
              0-γ flip <span className="dn-tag">漂到 $74,939</span>（前
              $75,557、下来 $618——跟着价格下）。现货 $73,659 在
              <span className="dn-tag bear">flip 下方 −1.71%</span>（现货口径
              73,659.25 / 74,939 − 1 = −1.71%）；GEX 文件自己的「dist to
              flip」给 −1.6%、对它的 Deribit idx $73,750（idx 比 live 高
              $91）算 −1.59%——两参考都给负、都在 flip 下方、是连续第二根
              在 flip 下的快照。墙图随价格下移：
              <span className="dn-tag bear">$74k −49.37M</span> 现在是最重的
              单根墙（最重的墙随现货穿过 $75k 从那里下移），
              <span className="dn-tag bear">$73k −24.61M</span> 加深（前
              −14.98M——就在周期锚上），
              <span className="dn-tag bear">$75k −20.03M</span> 大幅减轻（前
              −51.26M——原最重墙、现在在现货上方、在变薄），
              <span className="dn-tag bear">$72k −8.13M</span>、
              <span className="dn-tag bear">$70k −6.94M</span>、
              <span className="dn-tag bear">$60k −9.36M</span> 崩盘 put 残余。
              头顶的正天花板：
              <span className="dn-tag bull">$80k +14.93M</span>（从 +19.82M
              减），
              <span className="dn-tag bull">$82k +11.42M</span>、
              <span className="dn-tag bull">$74.5k +8.31M</span>、
              <span className="dn-tag bull">$77k +7.88M</span>（从 +8.55M
              减）。$70k–$75k 的负簇仍合计约 −109M、但
              <span className="dn-em">
                几乎全坐在今天解掉的 29MAY 0.3DTE 里；这张墙图是一个即将
                甩掉放大器的本子的快照
              </span>
              。IV 1004 合约中位数
              <span className="dn-tag">41.4%</span>（从昨天 42.3% 下）对 30D
              close-to-close RV <span className="dn-tag">26.61%</span>——链级
              溢价 <span className="dn-tag">~+14.8pt</span>。是 N 合约的链中位
              数、<span className="dn-em">不是</span>可交易价差；expiry- /
              strike-level vega、skew、期限结构仍未载入、vol 读法保持
              framework only。1004 合约对昨天 890——+114 来自 28MAY 0DTE 清
              后新到期 1JUN/19JUN/28AUG + 新增 strike。RV 方法：30D close-to-close、
              logret.std × √365 × 100、用最末 30 根日 log return（= 连续 31
              根日 close）、锚自 parquet 最末 bar 2026-05-29 00:06Z；底层
              31-close 窗区间 $73,591 – $82,178。（参考：最末 30 根 close /
              29 returns 读 26.91%；页面值 26.61% 来自 30 returns。）
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · Tier-1 再松（10Y 4.48%、HY OAS 2.71%、MOVE 70.9）但 DXY 走强 99.50 + Fed 净流动性抽 −$58B · BTC 对 TradFi 脱钩连续第三天稳在 −7.2pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面在利率、信用、债波上又松、外加两根温和 risk-off 抵消
                （DXY 走强、净流动性抽水）
              </span>
              。面板渲染 2026-05-28 22:15Z、比快照早约 1.9h。US 10Y nominal
              <span className="dn-tag bull">4.48%（−2.0bp）</span>、regime z
              <span className="dn-tag bear">+1.63</span>、偶发 z
              <span className="dn-tag">+0.52</span>——RISK-OFF 标、已松。10Y
              TIPS real <span className="dn-tag bull">2.09%（−1.0bp）</span>、
              regime z <span className="dn-tag bear">+1.55</span>、偶发 z
              <span className="dn-tag bear">+1.07</span>——仍 RISK-OFF。5Y5Y
              BE <span className="dn-tag">2.25%（−2.0bp）</span>。HY OAS
              <span className="dn-tag bull">2.71%（−1.0bp）</span>、regime z
              <span className="dn-tag bull">−1.40</span>、偶发 z
              <span className="dn-tag bull">−2.10</span>——仍深 risk-on 偶发、
              现在比昨天的 2.80% re-grow 闸低 9bp。MOVE 债波
              <span className="dn-tag bull">70.9（−4.05）</span>——再松进
              「loose」、离两周前 79.9 的尖峰更远。两根抵消：DXY
              <span className="dn-tag bear">99.50（+0.29）</span>、偶发 z
              <span className="dn-tag bear">+1.83</span>——走强、温和 risk-off
              偶发；Fed 净流动性
              <span className="dn-tag bear">$5.872T（−0.058T）</span>、偶发 z
              <span className="dn-tag bear">−2.28</span>——抽了 $58B（周度印
              抽水、温和 risk-off 偶发）。US-JP 10Y 利差
              <span className="dn-tag bull">1.97%（−2.0bp）</span>；USD/JPY
              <span className="dn-tag bear">159.57（+0.33）</span>（日元更弱）。
              NFCI −0.510 中性（新印、不再陈旧）。
              <span className="dn-em">
                净：re-grow 闸又往远走（HY OAS 闸 2.80%——在 2.71%；10Y 闸
                4.55%——在 4.48%），reclaim-long 利率筛（10Y &lt; 4.55%）在
                4.48% 仍真，宏观面在对 BTC 要紧的那几根上仍净 risk-on。
                BTC 连续第三天从自己本子内部破、宏观尾在松——DXY 走强与
                净流动性抽水是仅有的两根压力向量、两根都不是信用事件。
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
                <tr><td>US 10Y nominal</td><td className="num">4.48%</td><td className="num bull">−2.0bp</td><td className="num bear">+1.63</td><td className="num">+0.52</td><td className="bear">紧、已松</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.09%</td><td className="num bull">−1.0bp</td><td className="num bear">+1.55</td><td className="num bear">+1.07</td><td className="bear">紧 · 仍 RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.25%</td><td className="num bull">−2.0bp</td><td className="num">+0.21</td><td className="num">+0.15</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.71%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.40</td><td className="num bull">−2.10</td><td className="bull">松 · 深 risk-on 偶发</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.510</td><td className="num">+0.00</td><td className="num">+0.10</td><td className="num bull">−0.81</td><td className="neut">中性 · 新印</td></tr>
                <tr><td>MOVE 债波</td><td className="num bull">70.9</td><td className="num bull">−4.05</td><td className="num bull">−0.53</td><td className="num">−0.32</td><td className="bull">松 · 再降</td></tr>
                <tr><td>DXY</td><td className="num">99.50</td><td className="num bear">+0.29</td><td className="num bear">+1.14</td><td className="num bear">+1.83</td><td className="bear">走强 · risk-off 偶发</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.872T</td><td className="num bear">−0.058T</td><td className="num">+0.22</td><td className="num bear">−2.28</td><td className="bear">抽 $58B · risk-off 偶发</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.57</td><td className="num bear">+0.33</td><td className="num bear">+1.27</td><td className="num">+0.98</td><td className="bear">日元更弱</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.97%</td><td className="num bull">−2.0bp</td><td className="num bull">−0.86</td><td className="num">+0.52</td><td className="bull">收窄</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7847</td><td className="num bull">−0.00</td><td className="num bull">−1.83</td><td className="num bull">−1.58</td><td className="bull">无标 · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp（月度）</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、汇总 00:01Z——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.264</span>（较
              05-28 的 0.297 再松——仍 NORMAL 区段）。BTC 与列表的对齐：NQ
              <span className="dn-tag">+0.518</span>（守住首位）、CL
              <span className="dn-tag">−0.494</span>、SP500
              <span className="dn-tag">+0.467</span>、SILVER
              <span className="dn-tag">+0.463</span>、NVDA
              <span className="dn-tag">+0.423</span>、BRENT
              <span className="dn-tag">−0.395</span>、GOLD
              <span className="dn-tag">+0.375</span>、AMZN
              <span className="dn-tag">+0.358</span>。7d 相对表现：
              <span className="dn-tag bear">BTC −4.73%</span>（从 −4.55% 再
              恶化）、NQ <span className="dn-tag bull">+2.50%</span>、SP500
              <span className="dn-tag bull">+1.36%</span>、JP225
              <span className="dn-tag bull">+4.84%</span>、TSLA
              <span className="dn-tag bull">+4.85%</span>、META
              <span className="dn-tag bull">+4.01%</span>、AAPL
              <span className="dn-tag bull">+1.77%</span>、NVDA
              <span className="dn-tag bear">−2.70%</span>（翻负）。金属软：
              GOLD <span className="dn-tag bear">−0.63%</span>、SILVER
              <span className="dn-tag bear">−0.58%</span>、PLAT
              <span className="dn-tag bear">−1.84%</span>。能源仍崩：CL
              <span className="dn-tag bear">−9.78%</span>、BRENT
              <span className="dn-tag bear">−9.12%</span>、NGAS
              <span className="dn-tag bull">+5.09%</span>。
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 落后稳在约 −7.2pt（BTC −4.73% vs NQ
                +2.50%、SP500 +1.36%）——连续第三天、是这条窗里最宽、最久
                的 BTC 对宏观脱钩。NVDA 在 7d 翻负、TradFi 盘面降温、但股指
                仍正、BTC 继续向下延伸。「内生于 crypto」仍是承重读法。
              </span>
              JGB 月度 2.52% 带 EXTREME RISK-OFF 月度标——不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子
              <span className="dn-roman">V · 剩余阶梯跑完——在 29MAY 到期里平掉 · 回补反弹 scout 门软化、flip 仍未重夺 · 宏观尾今天到期</span>
            </h2>

            <p>
              <span className="dn-signal">
                破位延伸空做完了——它走完整条目标阶梯、守住剩余的结构性
                理由约 8 小时后到期
              </span>
              。昨天的本子（W-SMA20 目标平半、剩余在 29MAY 放大器窗内跑向
              W-EMA200 种子 $73,710 与 D-SMA100 周期锚 $72,958）全部解：两
              目标都在 BJ 14:01 重堆敌对-2 延伸上触到、24h 低 $72,614 更
              下穿周期锚。昨天为剩余点名的纪律——<em>在 29MAY 到期窗内满平</em>
              ——现在就是动作：今天在到期解里把剩余平掉。<span className="dn-em">
              不要</span>在这里加新空：价格在建模阶梯底部、−96.34M 放大器
              今天解、除 29MAY 后本子翻正、SM 离 −31.7k 谷的第一根回补已
              印、引擎周期在反弹。对面——回补反弹 scout——门在软化
              （long_btc 重建 &gt; 13k、1h/4h TD9 BUY 走完、现货吸收）、但
              flip 重夺那条腿没到；更优非对称是等解后 γ 翻面 + flip 重夺、
              不是在仍满载的空头本子上、对一根今天就解的 expiry 先押反弹。
            </p>

            <div className="dn-trade">
              <span className="dn-side short">空 · 主仓 · 阶梯跑完 · 在 29MAY 到期里平掉</span>
              <div className="dn-trade-name">
                破位延伸空（昨）—— 整条目标阶梯触到、在今天的到期解里把剩余平掉
              </div>
              <div className="dn-thesis">
                昨天的剩余（W-SMA20 平半后）跑向 W-EMA200 种子 $73,710 与
                D-SMA100 周期锚 $72,958、在 29MAY 放大器窗内。BJ 14:01 05-28
                重堆敌对-2 步（Δshort +4,000、Δnet −4,396、SM net 到
                −30,079）把移动延伸、价格跑完整条阶梯：24h 低 $72,614 @ BJ
                22:07 05-28 穿过两个目标、并下穿周期锚、谱系首次。剩余现在
                在建模结构的底部、−96.34M 的 29MAY 0.3DTE 放大器——守它的
                承重理由——今天 08:00Z 结算解掉。除 29MAY 后 dealer 本子翻
                约 +48M 正 γ（阻尼）。SM 已离 −31.7k 谷回补约 2.7k、long_btc
                重建到 13.09k、1h RSI 从 33 抬到 49、最近一小时 OI 在两侧买
                里缩——仓位本子的第一道裂缝。这单做完了它的活；纪律是平掉
                获利、不是压进到期解。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">剩余状态</span><span className="dn-lvl-v bear">在赚 · 目标 #2 $73,710 与目标 #3 $72,958 都触到（24h 低 $72,614）</span></div>
                <div><span className="dn-lvl-k">本次动作</span><span className="dn-lvl-v">在 29MAY 08:00Z 到期解里把剩余平掉——放大器今天消失</span></div>
                <div><span className="dn-lvl-k">止损（若盘中持）</span><span className="dn-lvl-v bull">1h 收 &gt; $74,939（新 0γ flip）</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">在即将甩放大器的本子上、阶梯底部不加新空</span></div>
              </div>
              <div className="dn-gating">
                <b>为什么平、不压：</b>整张负 γ 权重都在今天 08:00Z 结算的
                29MAY 0.3DTE（−96.34M）；它清后整条 strip 是净多 γ（30MAY
                −1.81M、31MAY +0.93M、1JUN +19.71M、26JUN +3.02M）、支撑下腿
                的放大器没了。周期锚在日线收盘口径上守住。把剩余持过到期、
                等于持进一个阻尼的本子、一个谱系新峰的拥挤空仓、与离谷的第
                一根回补——非对称已经翻面。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 条件 · 回补反弹、门软化</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 门软化（多重建、TD9 BUY 走完）但 flip 重夺那条腿没到
              </div>
              <div className="dn-thesis">
                上一篇要的仓位本子转向有了第一根真确认：SM net 离 −31.7k 谷
                回补约 2.7k、long_btc 从 9.74k 谷重建到 13.09k（&gt; 11k 那条
                腿）、昨天的 1h/4h ⚡ TD9 BUY 走完翻 Sell setup（反转生效）、
                8h ⚡ TD9 BUY 印在低、1h RSI 从 33 抬到 49、现货 CVD 在下跌里
                吸了 +3,306。<em>没到</em>的是 flip 重夺那条腿：现货 $73,659
                在新 flip $74,939 下方 −1.71%、SM short_btc 仍在谱系峰 42.08k。
                非对称在 29MAY 到期后明显改善——除 29MAY 后 dealer 本子是
                +48M 正 γ（阻尼）、利于缓和磨升而非被放大的下杀。有纪律的入
                场是解后、在 flip 重夺且空头本子在泄时——不是在仍满载的空
                头上、对一根今天就解的 expiry 先押。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">触发（全腿必同）</span><span className="dn-lvl-v bull">1h 收 &gt; $74,939（新 flip）AND SM short_btc 在 4h 内泄破 38k AND long_btc &gt; 13k</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">触发印出时（最好在 29MAY 到期后）、scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1h 收 &lt; $73,021（D-SMA100 周期锚下方）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$74,151（W-SMA20 重夺）然后 $76,368（D-SMA150 簇）</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · W-SMA20 重夺平半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>触发 ~$75,000、止损 $73,021 ≈ $1,980 风险；首
                目标 $74,151 在触发下方（是重夺位、不是从入场算的目标）、所
                以真正首目标是 $76,368 ≈ $1,370 ≈ 0.7:1——首真目标弱、延伸只
                温和。<b>硬规则：</b>此 scout 与任何空头剩余互斥；scout 偏
                解后、因为 γ regime 在 08:00Z 翻阻尼。空头本子在谱系峰、
                flip 未重夺时、不先押反弹。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">宏观尾 · 对冲 · 今天到期</span>
              <div className="dn-trade-name">
                下行 put-spread —— 29MAY26 今天 08:00Z 结算、坐在 −96.34M 块里；到期印出时平掉
              </div>
              <div className="dn-thesis">
                对冲（long $74k / short $70k put、29MAY26）在 0.3 DTE、今天
                Deribit 08:00Z 印结算、距快照约 8h、直接 host 在 −96.34M γ
                块里——若破位延伸进它是谱系最有利的一根（放大器助长 long
                put-spread）、但它不论任何宏观印都会解。宏观 re-grow 闸又往
                远走（HY OAS 2.71% 对 2.80% 闸、10Y 4.48% 对 4.55%）、所以
                宏观侧没有滚续理由；带这价差的 BTC 内部破位也在阶梯底部
                耗尽。净：在 08:00Z 到期印上平掉价差、退下尾仓、除非下一根
                Tier-1 印把闸 re-grow。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">结构</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">到期</span><span className="dn-lvl-v">29-MAY-26（0.3 DTE）—— 今天约 08:00Z（BJ 16:00）在 −96.34M 块里结算</span></div>
                <div><span className="dn-lvl-k">本次动作</span><span className="dn-lvl-v">在到期印上平 0.15R · 不滚（宏观 re-grow 闸又往远走）</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（下一根 Tier-1 印）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收（当前 2.71%、距闸 7bp）OR 10Y &gt; 4.53% 收（当前 4.48%、距闸 5bp）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— 在 4.48% 仍<em>真</em>；等 BTC 内部转向</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>strike / premium / Greeks 未载入——结构示例性、
                size 待 Deribit 链拉取。新 re-grow 闸（HY OAS &gt; 2.78%、
                10Y &gt; 4.53%）是随水位下漂调低的酌情盯位、非回测断点。
                29MAY 结算后、若闸最终触发、自然的下一段对冲是滚到 5JUN26
                7.3 DTE 或 12JUN26 14.3 DTE——但解后 dealer strip 是净多 γ、
                一根新尾不会有这一根的放大器顺风。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · cycle 2 step 2 印重堆敌对-2 · step 3 基准约 +24h · 回补的赔率在升</span>
              <div className="dn-trade-name">
                挤压周期 cycle 2 step 2 —— 重堆敌对-2 @ BJ 14:01 —— step 3 基准在下一根 BJ 13–15 窗内、但 regime 变的分支现在是回补
              </div>
              <div className="dn-thesis">
                昨天框架预测今天 BJ 13–15 会落一根离散 SM 步、方向条件。步在
                BJ 14:01（UTC 06:01Z 05-28）落、现货 $72,969、印成重堆敌对-2
                （Δshort +4,000、Δnet −4,396）——延续分支——是连续第二根约
                4k+ 单分钟空头重堆、是 BJ 13–15 节奏的第七天。step 3 基准是
                今天 BJ 13–15 窗内（2026-05-29 05:00–07:00Z）再落一根离散步。
                但方向的条件读法首次往回补偏：仓位本子已离谷回补约 2.7k、
                long_btc 重建 +3.35k、引擎 TD9 BUY 走完、−96.34M 放大器在
                08:00Z 解——就在 step 3 窗内或紧邻。<span className="dn-em">
                  谱系状态：空头侧位谱系新峰（42.08k）但离盘中峰约 370；多头
                  侧从 9.74k 谷重建到 13.09k；净 SM 比 05-28 备忘多空 28.7%
                  但 cut fraction 在减（87% → 28.7%）。本子最空、retail 最拥
                  挤多、并露出第一根回补——谱系最高概率的 regime 变是一根
                  step 3 两腿回补、转成回补反弹、而不是再一根延续
                </span>
                。step 3 的新问题：延续（重堆把 SM 推 &lt; −32k、价格到一根
                日收下穿周期锚）还是回补（short_btc 在 flip 重夺上泄破 38k）。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">cycle 2 step 2 印重堆敌对-2 · step 3 基准约 +24h、BJ 13–15 节奏（2026-05-29 05:00–07:00Z 约 5 小时后开窗）</span></div>
                <div><span className="dn-lvl-k">cycle 2 step 2</span><span className="dn-lvl-v">重堆敌对-2 @ 2026-05-28 06:01Z（BJ 14:01）· 现货 $72,969 · Δlong −396、Δshort +4,000、Δnet −4,396</span></div>
                <div><span className="dn-lvl-k">SM 谷（最空）窗内</span><span className="dn-lvl-v">−31,696 BTC @ 2026-05-28 09:46Z（BJ 17:46 05-28）· 现货 $73,500</span></div>
                <div><span className="dn-lvl-k">步后价格路径</span><span className="dn-lvl-v">步 $72,969 → 24h 低 $72,614（−$355 vs 步）→ 快照 $73,659（+$690 vs 步——离底反弹）</span></div>
                <div><span className="dn-lvl-k">步节奏</span><span className="dn-lvl-v">连续 7 日 · 全部 BJ 13–15 窗 · step 3 基准约 +24h（BJ 13–15 今天、2026-05-29 05:00–07:00Z）</span></div>
              </div>
              <div className="dn-gating">
                <b>cycle 2 预测纪律：</b>step 2 是重堆敌对-2（延续）、是
                cycle 2 两步跨度里的第三根重堆。但两个新条件把 step 3 往回补
                偏：放大器在 08:00Z 解（拿走延续的结构性燃料）、仓位本子已
                印出离谷的第一根回补。盯位次序：29MAY 到期在 08:00Z 结算与
                BJ 13–15 的 SM 步今天都在同一窗内触发。一根在 flip 重夺上的
                回补步直接转成回补反弹 scout；再一根把日收推下 $73,021 的重堆
                是周期阶梯破。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件
              <span className="dn-roman">VI · 剩余阶梯收口 · 29MAY 到期 + cycle 2 step 3 在同一窗内解 · 周期锚是那条线</span>
            </h2>

            <p>
              05-28 那张决策条件里：跑剩余空头<em>触发</em>（剩余跑完整条
              阶梯、目标 #2 $73,710 与目标 #3 $72,958 都触到、24h 低 $72,614
              下穿周期锚）；重堆敌对-2 在 BJ 14:01 触发（Δnet −4,396 ≤ −3k、
              SM 到 −30,079 &lt; −24k）；cycle 2 step 2 节奏在时间与方向上都
              中（重堆 BJ 14:01 落入 BJ 13–15 窗）；回补反弹 scout 没触发
              （flip $75,557 始终没重夺；SM 空是升不是泄）；周期锚测试只在
              它的 4h 跟进腿上触发、不在日收上（05-28 收 $73,591 守在 $73,200
              闸上方——盘中插针到 $72,614 破了锚、但没有收盘破）；宏观 re-grow
              闸又往远走；reclaim-long 利率筛仍真。<em>三条严格触发、周期锚
              测试部分触发、回补反弹未触发。</em>今天条件围绕一条跑完的空头
              阶梯、一根到期解、与仓位本子第一根回补重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>29MAY26 到期结算（今天约 08:00Z）</td><td>−96.34M dealer γ 块清掉；除 29MAY 后 aggregate ≈ +48M 正</td><td>到期印上平掉 put-spread；解后重评 dealer strip 的 γ regime（净多 γ = 阻尼）</td></tr>
                <tr><td>回补反弹 scout（多）</td><td className="bull">1h 收 &gt; $74,939（新 flip）AND SM short_btc 4h 内泄破 38k AND long_btc &gt; 13k</td><td>scout long 0.2R（偏解后）、目标 $74,151（W-SMA20）然后 $76,368（D-SMA150）</td></tr>
                <tr><td>周期锚丢（周期 regime 升级）</td><td className="bear">1d 收 &lt; $73,021（D-SMA100）</td><td>这条窗里第一次周期阶梯破——另起评估；「完整中周期」读法结束</td></tr>
                <tr><td>周期锚守 + γ 解后翻正</td><td className="bull">1d 收守 &gt; $73,021 AND aggregate GEX 在 29MAY 结算后转正</td><td>锚上方消化读；回补反弹非对称在一个阻尼本子里改善</td></tr>
                <tr><td>跑再延伸（若持任何空头）</td><td className="bear">新重堆 SM Δ ≤ −3k 把 SM 推 &lt; −32k AND 1h 收 &lt; $72,556</td><td>末段跑向 $72k −8.13M / $70k −6.94M pocket——但注意放大器在 08:00Z 消失</td></tr>
                <tr><td>cycle 2 step 3 节奏</td><td>预期一根离散 SM 步在今天 BJ 13–15（2026-05-29 05:00–07:00Z）；方向条件、偏回补</td><td>步出印读；回补转成回补反弹预触发、延续延伸下腿</td></tr>
                <tr><td>宏观尾 re-grow（FRESH 闸）</td><td className="bear">HY OAS &gt; 2.78%（调低）OR 10Y &gt; 4.53%（调低）下一根 Tier-1 收</td><td>把对冲滚到 5JUN/12JUN 前段；tail +0.1R 向主仓</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收 —— 在 4.48% 仍<em>真</em>；等 BTC 内部转向</td><td>独立筛已真；需要 BTC 内部回补反弹触发才能转 scout long</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                29MAY 放大器在 08:00Z 的解与离谷的第一根 SM 回补、是否转成
                解后的回补反弹（γ 翻阻尼、flip 重夺、空头本子泄）、还是
                cycle 2 step 3 落成再一根重堆、把一根日收推下周期锚 $73,021。
                到期结算与 step 3 节奏今天在同一窗内解
              </span>
              。在那之前、本篇按写好的跑：破位延伸空在它阶梯底部、于到期里
              平掉；回补反弹 scout 硬门挂在解后 flip 重夺上；宏观尾在 08:00Z
              印上平掉。剩余整条目标阶梯触到、是上一篇的论点被证对；结构现在
              是一条跑完的下腿、刚守在周期锚上方、支撑它的放大器今天解。今天
              宏观面在要紧的那几根上又松；BTC 连续第三天从自己本子内部破、
              BTC 对 TradFi 脱钩稳在这条窗里最宽、最久的一档。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · 0 CRITICAL · 1 MED + 1 LOW 全部修正）
            </span>
            <b>Codex CLI 0.132.0（gpt-5.5、xhigh reasoning）干净跑完敌对式
            审计——空 stdin 管道有效、无 TTY 阻塞（200,012 tokens）。</b>0
            CRITICAL、0 HIGH；两条 findings 均 EN+ZH 应用：{' '}
            <b>DN-001 · MED</b> —— 数据来源条带与审计痕迹引用{' '}
            <code>audits/2026-05-29-desk-note.md</code> 作为 00:01Z MTF 扫描
            的存档、但 codex 预检时该文件不存在、且滚动
            <code>mtf_div_latest.html</code> 已越过 00:01Z 扫描。已修：创建
            本审计记录、附最接近可复原的 MTF 扫描（08:16Z）逐字存档；其结构
            读数（3d 水上死叉 1b、8h ⚡ TD9 BUY、8h/12h 水下死叉、1d 云内、
            1h RSI 回升）在各扫描间稳定——只有未收盘 close 漂动（谱系 F-01
            pinnability gap）。{' '}
            <b>DN-002 · LOW</b> —— 除 29MAY ≈ +48M 算式正确、但列出的
            by-expiry strip（30MAY→26JUN）只合计 +22.1M；后段
            （31JUL/25SEP/25DEC）再加 +26.8M。已修：§III 现在披露前段 +22.1M
            与后段 +26.8M 的拆分。另自捕一处：数据来源条带把 26MAR27 列进
            「一夜新到期」、但它昨天已在——只有 1JUN/19JUN/28AUG 是新（EN+ZH
            已改）。Codex 明确清除：funding × 1095（= +10.95% ann 封顶、24h
            均值 +9.66%、区间 +5.48%/+10.95%、封顶 737/1441 ~51%、谷点 +5.48%
            @ BJ 16:03 05-28、无 ×100 重现）；GEX 双参考符号（flip $74,939、
            现货 −1.71% / idx −1.59%、两参考都给负、tile 与簇同号）；29MAY
            0.3DTE −96.34M 到期解与除 29MAY +48.4M 算式；SM cut fraction
            （|−28,995 − (−22,535)| / 22,535 = 28.7%）与 BJ 14:01 重堆敌对-2
            步（Δshort +4,000 / Δnet −4,396、现货 $72,969）；完整 MA 矩阵对
            live 现货 $73,659.25、parquet 2026-05-29 00:06Z close $73,630.40
            （W-SMA20 地板丢、D-SMA100 $73,021 周期锚、W-EMA150/200 种子披露、
            126 根周 bar 下 W-SMA150/200 不可计算）；30D RV 26.61%（30 returns /
            31 closes；26.91% 另一口径已披露）；跨资产（|r| 0.264、BTC −4.73%
            vs NQ +2.50% = −7.2pt）与宏观 Tier-1（10Y 4.48%、HY OAS 2.71%、
            MOVE 70.9、DXY 99.50、Fed 净流动性 $5.872T）对源核过；
            claims-vs-loaded-data（NTT / max-pain / strike-IV / BTC-NQ
            framework-only；JGB 月度不依赖；IV 1004 合约中位数、不是可交易
            价差）；EN/ZH 数值平价（25+ 值）；requireViewer gating 模式
            （两路径、首语句）；以及前一日目标对当日重算锚的区分。源审计记录
            与 MTF 扫描存档全文：audits/2026-05-29-desk-note.md。{' '}
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；Next 16.2.6 在
            <code>node_modules/next/dist/bin/next:24-28</code> 处对 Node &lt;
            20.9.0 硬退出、所以完整 <code>next build</code> 被环境阻塞
            （谱系自 05-21 到 05-28）。<code>npx --no-install tsc --noEmit</code>
            exit 0、作为 build proxy。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体情况
            个性化。数字反映单一原子快照（2026-05-29 00:08Z）、provenance 在
            数据来源条带中按节披露；宏观 Tier-1 面板渲染 2026-05-28 22:15Z
            （比快照早约 1.9h）、部分输入明确陈旧或待定并已标注。水位、规模
            与条件是交易台流程的示例、不是长期推荐。过去的相关性、γ 与仓位
            模式不绑定未来盘面。衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                那一压是对的、也做完了。阶梯跑满、放大器今天到期、本子露出
                第一根回补。平掉获利；等 γ 翻面与 flip 重夺。
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
            v2 · 2026-05-29 00:08Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
