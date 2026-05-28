import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-05-28 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-05-28',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-05-28' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260528() {
  await requireViewer('/zh/desk/2026-05-28');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · 交易台备忘 · 2026-05-28 · v2</span>
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
              <span className="dn-big">$74,504</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.91%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-05-28 00:08Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-28 00:08Z（pin 第 35609 行）</td>
                  <td className="dn-flag">最新 · 1 分钟 · 审计时文件 tail 在 00:11Z</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-05-28 00:01Z scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 较快照锚滞后约 7
                    分钟 · 含未收盘 K 线 · 扫描存档于
                    audits/2026-05-28-desk-note.md
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-05-28 00:00Z 快照</td>
                  <td className="dn-flag">
                    最新 · Deribit idx $74,511 对现货 $74,504 · 890 合约
                    （前 882 · 27MAY 0DTE 已过期、30MAY/31MAY/26JUN 一夜里新印进来）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-05-28 00:00Z
                  </td>
                  <td className="dn-flag">滞后约 8 分钟 · 7d 1h bar · 22 资产</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-27 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.9h · FRED Tier-1 新一根再落（10Y −6bp 到
                    4.50%、TIPS −6bp 到 2.10%、HY OAS −2bp 到 2.72%、
                    US-JP 10Y 利差 −6bp 到 1.98%、MOVE 持平 75.0）·
                    regime 标签在每一根 Tier-1 上都软化
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-05-28 00:06Z</td>
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
              <span className="dn-src">live · 00:08Z · 24h 均值 +9.53% · 24h 内 878/1441 根原始记录坐在封顶（~61%）；1068 根分钟 Δ 不变（封顶 + 少量非封顶平点合计）</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+10.95% → +10.95%</span>
              <span className="dn-src">区间 +4.16% / +10.95% · 谷点 @ 2026-05-27 11:33Z（BJ 19:33 05-27）+4.16% ann · 在 BJ 13:11 SM 步前已重新坐回封顶</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+2.02%（+2,004 BTC）</span>
              <span className="dn-src">live · long_btc −2.65k、short_btc +7.83k · OI 增加是因为空加是多砍的三倍</span>
            </div>
            <div>
              <span className="dn-k">Binance mkt long/short</span>
              <span className="dn-v bear">62.64 / 37.36</span>
              <span className="dn-src">live_db `mkt_long_pct` · 在二次破位中重新拥挤回多 57.20 → 62.64（6 日谱系里最差的偏侧）</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−22.5k（净 SHORT）</span>
              <span className="dn-src">live · long 9.79k − short 32.33k · 谷点 −22.67k @ 2026-05-27 23:41Z（BJ 07:41 05-28）</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 05-27 备忘</span>
              <span className="dn-v bear">−12.1k → −22.5k（−10.5k 更空）</span>
              <span className="dn-src">|Δ|/prior_net = 87% · 单分钟 Δnet −5,966 步在 2026-05-27 05:11Z（BJ 13:11）—— 谱系最大单步</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.3% / 26.46%</span>
              <span className="dn-src">GEX IV 中位数 · 890 合约</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−1.39%（在下方）</span>
              <span className="dn-src">flip $75,557 · 对现货 $74,504（−1.39%）/ GEX 文件 −1.4% 对 Deribit idx $74,511（−1.38%）——两参考都给负、tile 取 −1.39% 保持一致 · aggregate GEX −70.8M（前 +29.9M）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                昨天那条破位延伸空头的门、在 05-27 BJ 22:00 那根 1h
                收盘上一次性把三条腿都打齐了；目标 #1 W-SMA20 $74,266
                在今早 BJ 07:36 的 24h 低点上贴位差 $0 触到
              </span>
              。第二轮的那一根步、就按上一篇点名的 BJ 13–15 节奏落
              ——13:11 BJ（UTC 05:11Z 05-27）一根分钟印出
              <span className="dn-tag bear">
                Δlong +774 / Δshort +6,740 / Δnet −5,966
              </span>
              、是 6 日谱系最大的单分钟 SM 步（昨天的混合是 −3,973、
              今天约是它的 1.5 倍）。这根本质上是
              <span className="dn-em">空头重堆敌对（re-stack hostile）</span>
              ——一根线里 SM net 从 <span className="dn-tag">−11,878
              → −17,848</span>、现货 $75,635 上几乎没反应。从那里开始
              价格再没把昨天的簇顶拿回来（24h 高
              <span className="dn-tag">$76,102 @ 2026-05-27 12:23Z
              （BJ 20:23 05-27）</span>、离 D-SMA150 $76,568 的多头再入场闸
              还差 $466），到了 BJ 22:00 那根 1h 收盘
              <span className="dn-tag bear">$75,115.5</span>、破位延伸
              门三条腿一次性印齐（1h 收 &lt; $75,500 ✓ · SM −20,362
              &lt; −13k ✓ · short_btc 32,000 &gt; 25k ✓）。昨天那本
              0.3R 的破位延伸空、现在已经结构性在赚、第一目标拿到、
              下两道（$73,710 W-EMA200 种子 / $72,958 D-SMA100 周期
              锚）下面那一整张盘口 dealer 本子
              <span className="dn-signal">已经翻成净负 γ</span>
              （<span className="dn-tag bear">−70.8M/1%</span>、前 +29.9M
              ——一夜泄掉 $100.7M、是连续第二天单日记录级 GEX 变动）、
              里面还坐着
              <span className="dn-tag bear">29MAY26 1.3 DTE −84.16M</span>
              这一段到期日放大器（昨天 −30.65M、又加了 $53.5M 的负
              γ、就压在那张 host 着宏观 put-spread 的同一根 expiry 上）。
            </p>

            <p>
              现货报 <span className="dn-tag">$74,504</span> live、24h
              −1.91%、贴新
              <span className="dn-tag bear">0-γ flip $75,557 下方 −1.39%</span>
              （flip 跟着价格下来 $273、从昨天的 $75,830——但这次价格
              是穿过去、不是贴着走）。现货
              <span className="dn-em">仅在 W-SMA20 $74,195 上方 $309</span>
              ——1% 范围内唯一支撑——其余每一根日线 MA 都
              <span className="dn-signal">在头顶</span>：
              <span className="dn-tag bear">D-EMA50 $76,545（−2.67%）</span>、
              <span className="dn-tag bear">D-EMA100 $76,733（−2.90%）</span>、
              <span className="dn-tag bear">D-SMA150 $76,473（−2.57%）</span>、
              <span className="dn-tag bear">D-SMA50 $77,173（−3.46%）</span>、
              <span className="dn-tag bear">D-EMA20 $77,069（−3.33%）</span>、
              <span className="dn-tag bear">W-EMA20 $77,801（−4.24%）</span>、
              <span className="dn-tag bear">D-SMA20 $78,007（−4.49%）</span>、
              <span className="dn-tag bear">W-EMA150 $78,240（−4.77%；种子）</span>、
              <span className="dn-tag bear">D-EMA150 $78,891（−5.56%）</span>、
              <span className="dn-tag bear">D-SMA200 $79,973（−6.84%）</span>、
              <span className="dn-tag bear">D-EMA200 $81,272（−8.33%）</span>。
              现货下方仅有的正偏移是
              <span className="dn-tag bull">W-SMA20 $74,195（+0.42%）</span>、
              <span className="dn-tag bull">W-EMA200 $73,710（+1.08%；种子）</span>
              、以及周期锚
              <span className="dn-tag bull">D-SMA100 $72,958（+2.12%）</span>。
              昨天点名的多头再入场簇（D-SMA150 $76,568）今天在头顶
              $2,000、中间叠了五根 MA 填满 $76,545 → $78,891 这一段
              ——比昨天的 $613 阶梯结构上重得多。当日的图形正是昨天
              本子建模的「更低低 / 更低高」、外加一道我们昨天没建模
              的结构性升级：
              <span className="dn-signal">
                3d 上刚印一根水上 MACD 死叉
              </span>
              （05-26 00:00Z、DIF 还在水上 +552.2、属早期死叉、多周
              regime 探测）——慢周期引擎自周期高以来首次翻空探针；1d
              已从云上下到云内（$72.2k–$75.4k）；10 个周期里 7 个在
              云下（昨天也是 7 个、计数未变、但 1d 状态从云上迁到
              云内是清晰的结构恶化）。
              <span className="dn-em">
                dealer 本子又泄了 $100M γ、到期日放大器几乎翻三倍、
                retail 在二次破位中又多挤进 5.44 个百分点的多、SM
                净空头几乎翻倍（cut fraction 87%）、3d 引擎也加入空
                十字阵——昨天那句「cycle 2 在下一个 24h 内开始」的
                收尾、在时间与方向上都说中了。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · BJ 13:11 那一步是谱系最干净的重堆 · SM 24h 内多空 87%</span>
            </h2>

            <p>
              <span className="dn-signal">
                BJ 13:11 那一根步、是我们在盘上拿到的最干净一根单分
                钟仓位 regime 变化的印迹
              </span>
              。<span className="dn-tag">2026-05-27 05:11Z（BJ 13:11）</span>
              、现货 <span className="dn-tag">$75,635.82</span>：long_btc
              从 <span className="dn-tag">13,108 → 13,882</span>（+774
              BTC）、short_btc 从
              <span className="dn-tag">24,989 → 31,729</span>（+6,740 BTC
              一根分钟）、SM net 一根线
              <span className="dn-tag">−11,878 → −17,848</span>（Δnet
              −5,966）。步前 BJ 13:10 long 13,108、short 24,989、net
              −11,881；步后 BJ 13:12 long 13,815、short 31,704、net
              −17,889——下一根分钟数值钉住，不是行情口的瞬时跳点、
              是真本子变化。再过 5 分钟、
              <span className="dn-tag">BJ 13:16（UTC 05:16Z）</span>
              short_btc 部分回补（Δshort −1,582）、同时 long_btc 又
              下落（Δlong −3,260）——一根
              <em>反向回补步</em>、最终 net 反而<em>更</em>空（−17,848
              → −19,526；long 砍得比 short 回补得更狠）。把两根步当
              作一段 5 分钟的事件看：long 那一侧砍 2.49k、short 那一
              侧先装 +6,740 再修 −1,582 净 +5,158；SM regime 5 分钟内
              从 −11,881 走到 −19,526、Δnet −7,645——这是 6 日谱系最
              大的 5 分钟 SM 摆幅、约 2.6 倍。现货同步从 $75,636 走
              到 $75,616（−$20、约 0.03%）——几乎没反应、跟前面五天
              BJ 13:xx 的步一样。6 日的节奏（05-22 重堆 · 05-23 重堆
              · 05-24 两腿回补 · 05-25 加多 · 05-26 砍多 + 加空 混合 ·
              <span className="dn-em">05-27 重堆敌对</span>）未断；
              cycle 2 step 1 以重堆现身——是昨天双向预测里那条敌对的
              分支。步后接下来约 19 小时里、空头那边继续累：
              <span className="dn-tag">short_btc 31,729 → 33,440 峰</span>
              @ <span className="dn-tag">BJ 00:36 05-28（UTC 16:36Z）</span>
              、long_btc 一路滑到
              <span className="dn-tag">9,757 谷</span>@
              <span className="dn-tag">BJ 07:41 05-28（UTC 23:41Z 05-27）</span>
              。SM net 谷点
              <span className="dn-tag">−22,668</span>@ BJ 07:41 05-28；
              快照 SM 是
              <span className="dn-tag">−22,535</span>、比谷点少空 133
              BTC——本子<em>到快照时基本还坐在 24h 谷上</em>、跟昨天
              那 3.6k 的回补反弹（−15.7k → −12.1k）完全不一样。long_btc
              9,790 是 6 日里最低的快照值；short_btc 32,325 是 6 日里
              最高的快照值。
              <span className="dn-em">
                cycle 2 头 19 个小时仓位本子上没有任何回补反弹。空
                头那边没像 cycle 1 step 5 那样平掉一半、它一直往上装。
              </span>
            </p>

            <p>
              杠杆那一侧给出的是单向压的读法。funding live
              <span className="dn-tag">+10.95% ann</span>——Binance 多头
              付费封顶（8h funding ceiling 0.01000、ann = ×1095）、
              在 13:11 SM 步前就重新坐回封顶
              <span className="dn-tag">BJ 13:00</span>。24h funding 路径：
              区间 <span className="dn-tag">+4.16% / +10.95%</span>、谷
              点 <span className="dn-tag">+4.16% ann @ 2026-05-27
              11:33Z（BJ 19:33 05-27）</span>——funding 在 2026-05-27
              07:39Z（BJ 15:39 05-27）首次脱开封顶（0.009937 / +10.88%
              ann）、走过一段下午-晚间的软位到 BJ 19:33 谷、再于 BJ
              21–22 的破位延伸窗内爬回封顶、坐到快照。24h 均值 ann
              <span className="dn-tag">+9.53%</span>（比 05-27 的 +7.15%
              热很多——funding 今天比昨天有更多时间钉在封顶）。分钟 Δ
              <span className="dn-tag">170 上 / 202 下 / 1068 平</span>
              ——那 1068 根平的 Δ 混了两种：878 根原始记录（24h 1441 行
              的 ~61%）正好在 +10.95% 封顶上（在该边界上不可能再动）；
              剩下约 190 根是非封顶分钟里 funding 数值没换的平点。OI
              <span className="dn-tag bear">+2,004 BTC（+2.02%）</span>
              24h、组成翻转：long_btc
              <span className="dn-tag bear">−2,652 BTC</span>、short_btc
              <span className="dn-tag bear">+7,826 BTC</span>——端点上
              净结构性偏空、空头加的是多砍的近三倍。OI 之所以变大、
              不是两边一起放大、而是空头加了一大块 7.8k 把多头流失
              盖过去了。retail
              <span className="dn-tag bear">mkt_long_pct 62.64%</span>
              、从 57.20% 上来——连续第二天单日拥挤翻盘（谱系最大单
              日翻盘是 05-26→05-27 的 +6.99pt、今天再 +5.44pt、两日
              合计 +12.43pt）。retail 多头这一侧是 6 日里最拥挤、
              定位<em>比谱系内任何破位时点都更糟</em>。perp 对现货
              贴水 <span className="dn-tag bear">−$147.55</span> 快
              照（1h 均值 −$127.32、区间 −$162.72 / −$73.10；4h 均值
              −$126.15、区间 −$277.82 / +$143.51；24h 均值 −$130.38、
              区间 −$296.02 / +$143.51——基差在 BJ 22:00 破位脉冲那
              一根上短暂翻成正升水、然后塌回更宽负）。贴水比 05-27
              快照的 −$120 又宽 $27——付费在更宽贴水之上。1 分钟主
              动卖买偏度快照
              <span className="dn-tag">+20.6</span>（1h 均值 +7.3、
              区间 −43.4 / +47.9）——表面之下一点点净买攻、可能是
              1h/4h TD9-BUY 的早反弹、目前还不成趋势。
              <span className="dn-em">
                funding 钉顶 + 基差更宽 + retail 谱系峰多 + SM 谱系
                峰空 + short_btc 谱系峰：杠杆本子是 6 日里最一边
                倒、最多侧拥塞的一天。
              </span>
            </p>

            <p>
              当日 windowed flow 的形状是
              <em>期货带头延伸、被现货吸收</em>、跟 05-27 同形但所
              有量级都放大了。24h：价格
              <span className="dn-tag bear">−1.91%</span>、OI
              <span className="dn-tag bear">+2,004 BTC</span>、spot CVD
              <span className="dn-tag bull">Δ +8,956</span>、futures CVD
              <span className="dn-tag bear">Δ −1,196</span>、大单
              <span className="dn-tag bull">+185 BTC / 1,102 笔</span>、
              taker-net <span className="dn-tag bear">−1,196</span>——
              <span className="dn-em">
                spot CVD 在 $1,451 的下跌中跑出 +8,956——是谱系级最大
                的现货吸收印迹、比昨天的 +984 大一个量级。big-print
                net 在 24h 下跌之中居然翻成 +185 BTC——被动现货承接
                看得见地在守。当日 24h 是<em>期货卖、现货吸</em>、
                空头那一侧的整张失衡完全落在 perp 上
              </span>
              。4h（到快照）：价格
              <span className="dn-tag bear">−0.97%</span>、OI
              <span className="dn-tag bear">−1,315 BTC</span>、spot CVD
              <span className="dn-tag bull">Δ +1,830</span>、futures CVD
              <span className="dn-tag bear">Δ −480</span>、大单
              <span className="dn-tag bear">−110 BTC / 136 笔</span>、
              taker-net <span className="dn-tag bear">−480</span>——
              <em>4h 看到最近一程下跌中 OI 是缩的（空头在修、不再加、
              在最近 4h 内）；spot CVD 继续在吸</em>。1h：价格
              <span className="dn-tag bull">+0.08%</span>、OI
              <span className="dn-tag">+279 BTC</span>、spot CVD
              <span className="dn-tag bear">Δ −40</span>、futures CVD
              <span className="dn-tag bull">Δ +123</span>、大单
              <span className="dn-tag bear">−102 BTC / 41 笔</span>、
              taker-net <span className="dn-tag bull">+123</span>——
              <em>最近一小时是跟 05-27 快照一样的微反弹：futures 停
              卖转买（+123）、spot 停买转修（−40）；1h/4h TD9 BUY 在
              $74,516 上印</em>。24h 跌势中守住的承接、在最近一小时
              里把 futures 这一侧从卖翻成弱买；spot 转被动。最近 4h
              的 OI 缩（−1,315 BTC）是 BJ 13:11 重堆之后第一根 4h
              的 short-trim 印——小、可能是 cycle 2 空头侧的第一个
              裂缝、但快照 SM（long 9,790 short 32,325）显示这个修
              是在空头本子内部、不是平。
            </p>

            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · MTF 地图 · 3d 水上死叉刚印 · 1d 入云 · 1h/4h TD9 BUY 在底 · 除 W-SMA20 外 MAs 全在头顶</span>
            </h2>

            <p>
              MTF 地图继续下移、并多了一道前面六篇都没出现过的结构性
              升级：3d 这一格
              <span className="dn-signal">
                刚印一根水上 MACD 死叉
              </span>
              （刚印 05-26 00:00Z、DIF 仍在水上 +552.2——早期死叉、
              多周 regime 探针）。3d 之前六篇都是「周期完好」的最高
              锚、今天加入了空十字阵作早期警告。引擎 TF：1h 仍水下
              死叉（11b 前、DIF −424.2）；4h 仍水下死叉（8b 前、
              DIF −535.6——DIF 比昨天的 −49.9 更深负）；8h 与 12h
              今天也分别印出水下死叉（2b 与 1b 前 · 刚印——更慢引
              擎的新确认）。1d 在 SMA200 下方（D-SMA200 在头顶）、
              但 <span className="dn-em">已从云上下到云内</span>
              （$72.2k–$75.4k）——周期锚 TF 一夜内从云上迁到云内、
              是自周期高以来更高 TF 上最干净的单日结构变动。1w 在
              云下 17b、1w MACD 仍是水下金叉（周线柱状图上有积极、
              但价位在云下）。1M 仍在云上 27b。TD setup：1h 与 4h
              <span className="dn-tag">⚡ TD9 BUY</span> 在 $74,516
              印——引擎 TF 上的超卖反转提示、就在 W-SMA20 $74,195
              测试位上；8h Buy 7、12h Buy 5、1d Buy 2、3d Buy 5、
              1w Buy 2、1M Buy 7——一整张表 setup 延伸。RSI：15m
              41.2、30m 38.4、1h 33.1（深度超卖）、4h 31.8（深度超
              卖）、8h 33.6、12h 34.0、1d 38.7、3d 46.7、1w 43.3、
              1M 47.8——引擎 TF 是谱系最低读数；1h 33.1 / 4h 31.8 是
              谱系开始以来第一根 sub-35 印。
              <span className="dn-em">
                直话直说：空十字从 05-26 仅 1h 的状态、今天迁移到整
                条 1h–12h 引擎链、加上 3d 在周期级上印出第一根早期
                死叉、1d 滑入云内。反向力：1h/4h TD9 BUY 在底位（
                W-SMA20 区）印出、但更高 TF 的背景比昨天的 setup 弱。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">74,499</td><td className="num">41.2</td><td className="bear">死叉（水下）10b</td><td className="bear">云下 ↑75.3k 44b</td><td>Sell 2</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">74,516</td><td className="num">38.4</td><td className="bear">死叉（水下）5b</td><td className="bear">云下 ↑75.8k 67b</td><td>Buy 6</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">74,516</td><td className="num bull">33.1</td><td className="bear">死叉（水下）11b</td><td className="bear">云下 ↑76.9k 31b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">74,516</td><td className="num bull">31.8</td><td className="bear">死叉（水下）8b</td><td className="bear">云下 ↑76.0k 13b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BEAR reg</td></tr>
                <tr><td>8h</td><td className="num">74,518</td><td className="num">33.6</td><td className="bear">死叉（水下）2b · 刚印</td><td className="bear">云下 ↑78.2k 36b</td><td>Buy 7</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">74,516</td><td className="num">34.0</td><td className="bear">死叉（水下）1b · 刚印</td><td className="bear">云下 ↑78.2k 11b</td><td>Buy 5</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1d</td><td className="num">74,518</td><td className="num">38.7</td><td className="bear">死叉（水上）16b</td><td className="neut">云内 72.2k–75.4k 1b</td><td>Buy 2</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">74,495</td><td className="num">46.7</td><td className="bear">死叉（水上）刚印（05-26 00:00Z）</td><td className="neut">云内 73.5–92.4k 8b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">74,516</td><td className="num">43.3</td><td className="bull">金叉（水下）6b</td><td className="bear">云下 ↑100.3k 17b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">74,518</td><td className="num">47.8</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 27b</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    源：mtf_div_latest.html 00:01Z 扫描（滚动 latest
                    文件；存档逐字于 audits/2026-05-28-desk-note.md）。
                    页眉警报：<em>8h 水下死叉刚印（2b）</em>、
                    <em>12h 水下死叉刚印（1b）</em>、
                    <em>3d 水上死叉刚印（05-26 00:00Z）</em>——更慢的
                    引擎确认下行段；<em>1h ⚡ TD9 BUY 在 $74,516</em>、
                    <em>4h ⚡ TD9 BUY 在 $74,516</em>——两根引擎 TF
                    底位上的超卖反转提示。收盘均为未收盘 K 线、按未
                    收盘对待。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵把图补完。现货 $74,504
              <span className="dn-em">除 D-SMA100 之外、低于每一根
              日线 MA</span>
              、夹在 W-SMA20 / W-EMA200-种子 / D-SMA100 的下方支撑
              三明治里：现货在 W-SMA20 $74,195 上方 $309（1% 范围内
              唯一支撑）、在 W-EMA200 种子 $73,710（+1.08%）上方
              $794、在周期锚 D-SMA100 $72,958 下方 $1,546（+2.12%）。
              昨天的头顶簇今天再翻深：
              <span className="dn-tag bear">D-SMA150 $76,473（−2.57%）</span>
              （昨天 −0.80%）、
              <span className="dn-tag bear">D-EMA50 $76,545（−2.67%）</span>
              （昨天 −0.95%）、
              <span className="dn-tag bear">D-EMA100 $76,733（−2.90%）</span>
              （昨天 −1.11%）、
              <span className="dn-tag bear">D-SMA50 $77,173（−3.46%）</span>
              （昨天 −1.53%）、
              <span className="dn-tag bear">D-EMA20 $77,069（−3.33%）</span>
              （昨天 −1.97%）、
              <span className="dn-tag bear">W-EMA20 $77,801（−4.24%）</span>
              （昨天 −2.54%）、
              <span className="dn-tag bear">D-SMA20 $78,007（−4.49%）</span>
              （昨天 −3.08%）、
              <span className="dn-tag bear">W-EMA150 $78,240（−4.77%；种子）</span>
              （昨天 −2.94%）、
              <span className="dn-tag bear">D-EMA150 $78,891（−5.56%）</span>
              （昨天 −3.82%）。决策走廊两端都翻深：昨天的多头再入
              场闸（1h 收 &gt; D-SMA150 $76,568）今天距头顶 $2,000、
              中间叠五根 MA——结构上比昨天的 $613 阶梯重得多。远端
              不再相关：W-EMA50 $84,814（−12.16%）、W-EMA100 $83,239
              （−10.49%）、W-SMA100 $88,338（−15.66%）、W-SMA50
              $93,387（−20.22%）——周期高已经 12–20% 远。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-05-28 00:06Z（close
                $74,504.30）；偏移对 live spot $74,504.35 重算。MA
                位置显示 $ 取整、偏移按精确序列值计算。W-SMA150 /
                W-SMA200 仍不可计算——盘上只有 126 根周 bar、两者都
                短；W-EMA150 $78,240（−4.77%）与 W-EMA200 $73,710
                （+1.08%）因 EMA 自可用历史起种子而显示、按种子值
                标注。今天的有效测试位是 W-SMA20 $74,195 这道底
                +0.42%——24h 低 $74,266.08 在 BJ 07:36 05-28（UTC
                23:36Z 05-27）触到、距位 $71 上方、未破。1d 收若跌
                破 W-SMA20、下一道支撑落到 W-EMA200 种子 $73,710
                （+1.08%）、再下到 D-SMA100 $72,958（+2.12%）——
                自周期开始以来从未测试过的周期锚。
              </span>
              多头再入场闸位、若要再考虑、现在迁到
              <span className="dn-tag bear">1h 收 &gt; D-SMA150 $76,473</span>
              作首探——一段 $1,969 的爬、穿过五根 MA、比昨天 D-SMA150
              单根 $613 的爬要结构性硬得多。
            </p>

            <h2 className="dn-sec">
              盘口图 <span className="dn-roman">III · aggregate GEX 翻成 −70.8M（一夜 −$100M）· 29MAY 1.3DTE −84.16M · $75k −51M 是整张表最重的单根</span>
            </h2>

            <p>
              盘口 γ 连续第二天崩、并且这一次<span className="dn-signal">
              跨号</span>：aggregate <span className="dn-tag bear">
              −70.8M/1%</span>（前 +29.9M——一夜泄掉 $100.7M、比昨天
              的 $48.3M 记录还大、是整条 6 日谱系最大的单日 GEX 变动、
              约 2.1 倍）。当前现货位上、盘口 γ <em>沿整张前段都净
              空</em>：dealers 当前价位上净空 γ、两个方向上都会放大
              ——但负 pocket 群非对称地坐在现货下方、所以放大结构性
              偏向下行延伸。0-γ flip <span className="dn-tag">漂到
              $75,557</span>（前 $75,830、下来 $273——flip 继续跟着
              价格走、但价格直接穿过去了）。现货 $74,504
              <span className="dn-tag bear">距 flip −1.39%</span>
              按现货口径（74,504.35/75,557 − 1 = −1.39%）；GEX 文件自己读
              「dist to flip −1.4%」对 Deribit idx $74,511（idx 比现
              货低 $7；两参考在符号上一致——<em>都给负、即现货在 flip
              下方</em>——是 6 日谱系里首次在快照锚上落到 flip 下方）。
              顶墙——头顶天花板再泄一档：
              <span className="dn-tag bull">$80k +19.82M</span>（前
              +29.55M——再泄 $9.7M）、
              <span className="dn-tag bull">$82k +11.54M</span>（前
              +15.64M——泄）、
              <span className="dn-tag bull">$77k +8.55M</span>（前
              +14.54M——泄；近现货的正墙砍半）、
              <span className="dn-tag bull">31JUL26 64.3 +4.55M</span>
              dealer 长段、
              <span className="dn-tag bull">26JUN26 29.3 +4.02M</span>
              （前 +11.62M——大幅泄）。负 pocket
              <span className="dn-em">在现货簇上显著加深</span>：
              <span className="dn-tag bear">$75k −51.26M</span>（前
              −39.90M——加 −$11.4M、仍是整张表最重的单根、领先幅度
              大）、
              <span className="dn-tag bear">$74k −27.45M</span>（前
              −15.71M——几乎翻倍、是第二重的单根）、
              <span className="dn-tag bear">$73k −14.98M</span>（top10
              新进——之前没碰过 $73k strike、现在一道新进 −$15M 的墙、
              对位就是 W-EMA200 种子 $73,710）、
              <span className="dn-tag bear">$76k −9.36M</span>（前
              −13.86M——泄）、
              <span className="dn-tag bear">$74.5k −8.14M</span>（top10
              新进——半档位上的新印、就在 live spot 旁边）、
              <span className="dn-tag bear">$60k −8.94M</span> 崩跌
              put 残量小幅加重、
              <span className="dn-tag bear">$72k −7.50M</span>（top10
              新进）。by-expiry：27MAY 0DTE 已昨天到期
              <span className="dn-tag">−7.83M</span>（前段净负 expiry
              清掉）；
              <span className="dn-tag bear">28MAY26 0.3DTE −14.93M</span>
              （今天到期、净负——跟昨天 27MAY −7.83M 同号、但约 2 倍
              重）、
              <span className="dn-tag bear">29MAY26 1.3DTE −84.16M</span>
              <em>（昨天 −30.65M——又加了 $53.5M 的负 γ、是 6 日谱系
              里最大的单 expiry γ 块、那个 host 着宏观 put-spread 的
              到期日今天承的放大器权重相当于 aggregate GEX 量级的约
              1.2 倍）</em>、
              <span className="dn-tag bull">30MAY26 2.3DTE +0.03M</span>
              （持平——29MAY 清掉后首根正 expiry）、
              <span className="dn-tag bull">31MAY26 3.3DTE +0.28M</span>
              （轻正）、
              <span className="dn-tag bull">5JUN26 8.3DTE +1.15M</span>
              （前 +3.81M——泄）、
              <span className="dn-tag bull">12JUN26 15.3DTE +0.30M</span>
              （前 +3.45M——大幅泄——最重的泄都在前段 strip 上）。
            </p>

            <p>
              直话直说：<span className="dn-signal">
                盘口本子已经不只是不 pin——它在 aggregate 上翻成净空
                γ、前 1.3DTE 那根到期日上压着 $84M 的放大器、就在
                明天北京早上解掉
              </span>
              。总 −70.8M 意味着 dealer Δ-对冲两边都放大、但墙分布
              不对称：正墙总和（strip 前 5）约 $48.5M（昨天约 $73.7M
              ——头顶天花板明显变薄）；负墙总和（strip 前 10）约 $135M
              集中在 $72k–$76k 段。跌破 $74,195（W-SMA20）进入负
              pocket、要碰整张表最重的单根（$75k −51.26M 就在上方）
              然后接连 $74k −27.45M 与 $73k −14.98M；到 W-EMA200 种子
              $73,710 的路径是 γ 放大下行。上行要先拿回 $75,557（flip）
              再到 $77k +8.55M（大幅泄过的正墙）才回到平 γ regime、
              才能接近下一层头顶 MA 簇。29MAY26 1.3 DTE −84.16M 是
              谱系最具决定性的一根印：把 dealer Δ-对冲推到
              <em>放大器最大档、在 31 小时内解掉的单 expiry 上</em>
              ——这个窗口内任何方向上的移动都比谱系任何前点都结构性
              更快。宏观 put-spread（long $74k / short $70k put、
              29MAY26）就 host 在这 −$84M 块里、若破位延伸结构性受
              益于放大器、但无论宏观印怎样、它也明天北京早上到期解掉。
              <span className="dn-em">
                IV 中位数 890 合约
                <span className="dn-tag">42.3%</span>（与昨天持平）、
                对 30D close-to-close RV
                <span className="dn-tag">26.46%</span>（前 26.00%——
                因为今日 $74,504 收纳入而 +46bp）——chain-level 富集
                约 <span className="dn-tag">+15.8pt</span>（与 05-27
                基本持平）。是 N 合约的 chain-median、
                <span className="dn-em">不是</span>可交易价差；expiry
                / strike-level vega、skew 与期限结构本次未载入、
                vol 读法仍 framework only。890 合约 vs 昨天 882——多
                的 8 是一夜内新印进来的 30MAY/31MAY/26JUN（27MAY
                0DTE 清掉之后 chain 前向延伸）。
              </span>
              RV 方法学：30D close-to-close、logret.std × √365 × 100
              在最末 30 根日 log return 上（= 连续 31 根日 close）、
              锚自 parquet 最末 bar 2026-05-28 00:06Z；底层 31 根
              close 的区间 $74,418 – $82,178。（参考：仅取最末 30
              根 close / 29 根 return 读 26.82%；本页 26.46% 来自
              30 根 return 口径。）
            </p>

            <h2 className="dn-sec">
              宏观
              <span className="dn-roman">IV · FRED Tier-1 印再松（10Y −6bp、TIPS −6bp、HY OAS 到 2.72% 偶发 z −2.12）· BTC 对 TradFi 脱钩延伸到 −7.2pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                FRED Tier-1 新印再落、每一根重要的 Tier-1 线都再向 loose
                方向走
              </span>
              。仪表渲染 2026-05-27 22:15Z、比快照早约 1.9h；面板已
              从昨天那道「stale 4d」标签里追上（只有 NFCI 还挂「stale
              12d」——Chicago Fed 周指数）。US 10Y nominal
              <span className="dn-tag bull">4.50%（−6.0bp）</span>
              ——比昨天的 4.56% 印降 6bp、regime z 软到
              <span className="dn-tag bear">+1.76</span>（前 +2.16
              ——已从 EXTREME RISK-OFF 退回 RISK-OFF 区段）、偶发 z
              软到 <span className="dn-tag">+0.75</span>（前 +1.33
              ——偶发紧张明显下来）。10Y TIPS real
              <span className="dn-tag bull">2.10%（−6.0bp）</span>
              （前 2.16%）、regime z
              <span className="dn-tag bear">+1.61</span>（前 +2.09）、
              偶发 z <span className="dn-tag">+1.25</span>（前 +2.00
              ——仍 RISK-OFF 标签但明显软）。5Y5Y BE inflation
              <span className="dn-tag">2.27%（+1.0bp）</span>——温和
              漂升。HY OAS
              <span className="dn-tag bull">2.72%（−2.0bp）</span>
              （前 2.74%）、regime z
              <span className="dn-tag bull">−1.34</span>（前 −1.22
              ——更深 risk-on）、偶发 z
              <span className="dn-tag bull">−2.12</span>（前 −1.89
              ——谱系里最深的单日 risk-on 偶发印；HY OAS 现在距昨天
              的 2.85% 闸 &gt;13bp、距原来的 3.00% 闸 28bp）。MOVE
              bond vol <span className="dn-tag bull">75.0（−3.48）</span>
              ——面板报告的 Δ 与昨天相同、因为新印在 05-26 美时晚段
              落下；今天 level 持平 75.0、本次渲染无新动。Fed net
              liquidity
              <span className="dn-tag bull">$5.907T（+0.030T）</span>
              ——不动（周度节奏；下一根 05-29）。DXY
              <span className="dn-tag bull">99.14（−0.18）</span>
              ——略松（小风险开打、在这个渲染滞后下与昨天同级别）。
              USD/JPY <span className="dn-tag bear">159.29（+0.33）</span>
              ——与昨天同；日元更弱。US-JP 10Y 利差
              <span className="dn-tag bull">1.98%（−6.0bp）</span>
              ——较昨天 2.04% 再紧（US 利率比 JP 动得更多；BTC 相
              关那条利差收窄）。
              <span className="dn-em">
                净：宏观尾在每一根新鲜 Tier-1 线上明显松。昨天那一组
                re-grow 闸今天都<em>反向</em>触发（HY OAS 闸 &gt;
                2.85%——反走到 2.72%；10Y 闸 &gt; 4.60%——反走到
                4.50%；reclaim-long 利率筛 10Y &lt; 4.55%——首次
                <em>真</em>到 4.50%、是谱系第一次）。宏观面 unambiguously
                risk-on；BTC 仍照旧从 BTC 本子内部破位、跟昨天读法
                一致、但 BTC 对宏观的脱钩更深（BTC 已经脱钩在下、
                今天宏观尾继续松、BTC 继续下）。
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
                  <th>读法</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.50%</td><td className="num bull">−6.0bp（FRESH）</td><td className="num bear">+1.76</td><td className="num">+0.75</td><td className="bear">紧、明显软 · 面板已脱 EXTREME 标</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.10%</td><td className="num bull">−6.0bp（FRESH）</td><td className="num bear">+1.61</td><td className="num bear">+1.25</td><td className="bear">紧、软 · 仍 RISK-OFF</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.27%</td><td className="num bear">+1.0bp</td><td className="num">+0.48</td><td className="num">+0.61</td><td className="neut">温漂 · 无标签</td></tr>
                <tr><td>HY OAS</td><td className="num">2.72%</td><td className="num bull">−2.0bp（FRESH）</td><td className="num bull">−1.34</td><td className="num bull">−2.12</td><td className="bull">松 · 谱系最深 risk-on 偶发</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num stale">−0.523</td><td className="num stale">−0.01（stale 12d）</td><td className="num bull">−0.48</td><td className="num bull">−1.35</td><td className="stale">stale 12d · 中性</td></tr>
                <tr><td>MOVE bond vol</td><td className="num bull">75.0</td><td className="num bull">−3.48（carry-over）</td><td className="num">−0.18</td><td className="num">+0.38</td><td className="neut">本次渲染下与昨天持平</td></tr>
                <tr><td>DXY</td><td className="num">99.14</td><td className="num bull">−0.18</td><td className="num">+0.73</td><td className="num bear">+1.34</td><td className="neut">紧、略松</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.907T</td><td className="num bull">+0.030T</td><td className="num bull">+0.77</td><td className="num bull">+2.16</td><td className="bull">松 · 偶发涌</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.29</td><td className="num bear">+0.33</td><td className="num bear">+1.22</td><td className="num">+0.75</td><td className="bear">日元更弱</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.98%</td><td className="num bull">−6.0bp（FRESH）</td><td className="num bull">−0.81</td><td className="num">+0.75</td><td className="bull">收窄 · US 利率动得更多</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7855</td><td className="num bull">−0.01</td><td className="num bull">−1.85</td><td className="num bull">−1.67</td><td className="bull">无标 · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp（月度）</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不作实时</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、汇总 00:00Z——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>
              ）。非对角线均值
              <span className="dn-tag">|r| 0.297</span>（较 05-27 的
              0.340 再松——仍 NORMAL 区段）。BTC 与列表的对齐：NQ
              <span className="dn-tag">+0.555</span>（前 +0.551、从
              SILVER 那里拿回首位——TradFi 股权对齐略紧）、SP500
              <span className="dn-tag">+0.524</span>（前 +0.527）、
              CL <span className="dn-tag">−0.521</span>（前 −0.530）、
              SILVER <span className="dn-tag">+0.475</span>（前 +0.561
              ——明显松）、BRENT
              <span className="dn-tag">−0.433</span>（前 −0.447）、
              NVDA <span className="dn-tag">+0.418</span>（前 +0.463
              ——松）、GOLD
              <span className="dn-tag">+0.414</span>（前 +0.470）、
              MSFT <span className="dn-tag">+0.401</span>（前 +0.430）。
              7d 相对表现：
              <span className="dn-tag bear">BTC −4.55%</span>（从
              05-27 的 −1.11% 急速恶化——BTC 的 7d 落后又拉宽 3.44pt
              单日）、NQ <span className="dn-tag bull">+2.68%</span>
              （前 +4.11%——回软、BTC 拖累已影响 7d 窗的尾部）、
              SP500 <span className="dn-tag bull">+1.57%</span>（前
              +2.37%——回软）、JP225
              <span className="dn-tag bull">+5.24%</span>（前 +10.80%
              ——从峰回软）、TSLA
              <span className="dn-tag bull">+5.14%</span>（前 +7.87%
              ——回软）、META
              <span className="dn-tag bull">+4.45%</span>（持平）、
              AAPL <span className="dn-tag bull">+3.39%</span>（持平）。
              金属：GOLD
              <span className="dn-tag bear">−2.14%</span>（从 +0.44%
              翻负）、SILVER
              <span className="dn-tag bear">−2.15%</span>（从 +3.77%
              翻负）、PLAT
              <span className="dn-tag bear">−1.47%</span>、PALL
              <span className="dn-tag bull">+1.02%</span>、COPPER
              <span className="dn-tag bear">−0.30%</span>、URNM
              <span className="dn-tag bull">+5.66%</span>。能源仍崩：
              CL <span className="dn-tag bear">−8.90%</span>、BRENT
              <span className="dn-tag bear">−7.89%</span>、NGAS
              <span className="dn-tag bear">−3.00%</span>。
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 落后从 −5.2pt 拉宽到 −7.2pt
                （BTC −4.55% vs NQ +2.68% / SP500 +1.57%）。今天是
                整条 6 日谱系里最干净的 BTC 对宏观脱钩。TradFi 那
                一侧已从峰位回软（NQ 从 +4.11% 到 +2.68%、JP225 从
                +10.80% 到 +5.24%、金属翻负——风险开热度减速）、
                BTC 继续向下延伸。能源仍崩（无助也无害）。今天宏观
                印继续松、BTC 继续破——「内生于 crypto」是连续第二
                天承重读法。
              </span>
              JGB 月度 2.52% 带 EXTREME RISK-OFF 月度标——不依赖。
              USD/JPY 159.29——以昨天渲染计日元更弱；FX 在利率那一
              侧已松到中性（US-JP 利差以 US 利率动得更多收窄）。
            </p>

            <h2 className="dn-sec">
              交易本子
              <span className="dn-roman">V · 破位延伸空目标 #1 触到 · 平掉一半 · cycle 2 回补反弹闸成为当下盯位</span>
            </h2>

            <p>
              <span className="dn-signal">
                05-27 那本 0.3R 的破位延伸空、按自己门触发的时序、
                现在已经完全在赚
              </span>
              。门在 05-27 BJ 22:00 的 1h 收盘触发（$75,115.5、SM
              −20,362、short_btc 32,000）；第一目标在 BJ 07:36 的
              24h 低触到（$74,266.08 对昨天投影的 W-SMA20 $74,266
              ——贴位差 $0、谱系最干净一根目标）。仓位本子完成剩
              下的工作：cycle 2 的重堆敌对在 BJ 13:11 加上谱系最
              大单分钟 Δshort（+6,740 BTC）；SM 在约 18 小时内从
              −11,878 → −22,668 谷（一段 Δnet −10,790 的单向走、无
              半数回补、无反弹）。本子留着：守住破位延伸空、把止损
              移上来；W-SMA20 目标触到处平掉一半；剩余跑向 W-EMA200
              种子 $73,710 与 D-SMA100 周期锚 $72,958——两者都受
              29MAY26 1.3 DTE −84.16M 的到期日放大器支撑（明天北京
              早上解掉）。昨天点名的回补反弹（1h TD9 BUY + SM 空
              回补）今天有第一根弱确认（最近 4h OI 缩 −1,315 BTC、
              1h fut CVD 翻买 +123）——小、可能是第一道裂缝、但快
              照 SM 仍坐在谱系谷空。本子里现在押多、等于在结构性
              放大器仍贯穿 29MAY 到期的窗口里、跟单方向硬抗——更优
              非对称是等转换打齐（1h 收 &gt; $75,557 flip AND SM
              short_btc 跌破 30k AND long_btc &gt; 11k 在前 4h 之内）、
              然后再 scout long 0.2R 向 D-SMA150 $76,473 簇。
            </p>

            <div className="dn-trade">
              <span className="dn-side short">空 · 主仓 · 在赚 · 平半 · 剩余跑</span>
              <div className="dn-trade-name">
                破位延伸空（昨）—— 门打齐、第一目标触到、结构性放大器明天到 29MAY 才解
              </div>
              <div className="dn-thesis">
                昨天的破位延伸空（1h 收 &lt; $75,500 AND SM &lt;
                −13k AND short_btc &gt; 25k）在 05-27 BJ 22:00 那
                根 1h 收盘上三条腿一次性打齐（$75,115.5、SM −20,362、
                short_btc 32,000）。第一目标 W-SMA20 $74,266 在 BJ
                07:36 24h 低触到（$74,266.08——贴位差 $0、谱系最干
                净一根目标）。仓位本子给压：SM net 处于谱系谷空
                （−22,535 快照；谷 −22,668 BTC 比快照早 27 分钟）、
                short_btc 处于谱系峰（32,325）、long_btc 处于谱系
                低（9,790）；retail 拥挤多 62.64%（两日合计 +12.43pt
                ——谱系最拥挤一档）；funding 钉封顶 +10.95% ann、
                24h 内 878 / 1441 原始记录（~61%）正好在封顶上、另
                有约 190 根分钟 Δ 是非封顶的平点（BJ-晚间的 +4.16%
                ann @ BJ 19:33 05-27 软谷是唯一一段离开封顶的窗口）。盘口本子
                <em>aggregate 翻成净空 γ</em>（−70.8M、前 +29.9M
                ——单日 −$100.7M 崩、是 6 日里单日最大）、29MAY26
                1.3 DTE 这根到期日上压着 −84.16M（前 −30.65M、再加
                $53.5M ——是 31 小时内解掉的最大单 expiry 放大器）。
                下一道支撑：W-EMA200 种子 $73,710（+1.08%）与
                D-SMA100 周期锚 $72,958（+2.12%）——两者下面都是连
                贯负 pocket 群（$75k −51.26M 就在上方、接 $74k
                −27.45M 与 $73k −14.98M）。结构上交易仍活；纪律
                是第一目标平半、剩余在放大器窗内跑。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">入场（昨）</span><span className="dn-lvl-v bear">1h 收 $75,115.5 @ 2026-05-27 14:00Z（BJ 22:00）</span></div>
                <div><span className="dn-lvl-k">目标 #1（触到）</span><span className="dn-lvl-v bull">$74,266 W-SMA20 —— 在 $74,266.08 触到 @ 2026-05-27 23:36Z（BJ 07:36 05-28）—— 平半</span></div>
                <div><span className="dn-lvl-k">剩余止损</span><span className="dn-lvl-v">1h 收 &gt; $75,557（新 0γ flip）—— $73,710（W-EMA200 种子）触到后挪到入场</span></div>
                <div><span className="dn-lvl-k">目标 #2</span><span className="dn-lvl-v bear">$73,710 W-EMA200 种子（+1.08%）—— 再平四分之一</span></div>
                <div><span className="dn-lvl-k">目标 #3（满）</span><span className="dn-lvl-v bear">$72,958 D-SMA100 周期锚（+2.12%）—— 在 29MAY 到期前满平</span></div>
              </div>
              <div className="dn-gating">
                <b>跑剩余的纪律：</b>结构性放大器（29MAY 1.3 DTE
                −84.16M）是跑剩余的承重理由。明天北京早上 29MAY 解
                掉后、紧接着列出的几根 expiry 是温和正（不是另一根
                负 pocket）：30MAY +0.03M、31MAY +0.28M、5JUN
                +1.15M、12JUN +0.30M —— 前段放大器消失、整条
                dealer strip 在 strip 层级回到温和正 γ。0.3R 剩余
                应在 29MAY 到期前解或修到只剩一
                小撮 runner。若任一 4h 内 SM short_btc 跌破 30k、
                把剩余全部平——仓位本子转向是第一信号。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · 条件 · 回补反弹</span>
              <div className="dn-trade-name">
                回补反弹 scout —— 等仓位本子转向 + flip 重夺
              </div>
              <div className="dn-thesis">
                1h 与 4h TD9 BUYs 在 $74,516 印出（W-SMA20 $74,195
                区测试）；1h RSI 33.1 与 4h RSI 31.8 是谱系最深超
                卖印；最近 4h OI 缩（−1,315 BTC）+ 最近 1h fut CVD
                翻买（+123、136 笔里 41 笔大单卖但 taker-net 买
                ——跟 05-27 那次确认小反弹的微形状一样）。回补反弹
                这单<em>模板</em>已经摆好、但仓位本子还没转向——SM
                仍坐谱系谷空、盘口放大器仍贯穿 29MAY。真回补反弹
                要两条腿同时来：仓位本子开始平（short_btc 跌破 30k
                在 4h 之内 AND long_btc &gt; 11k）、价格重夺 flip
                （1h 收 &gt; $75,557）。在这里先押多、等于在没破的
                空头本子上买承接的现货吸收、押的是付费的硬币翻面、
                非对称比昨天的 setup 还要差。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">触发（两腿必同）</span><span className="dn-lvl-v bull">1h 收 &gt; $75,557（新 flip）AND SM short_btc &lt; 30k AND long_btc &gt; 11k 在前 4h 之内</span></div>
                <div><span className="dn-lvl-k">scout 入场</span><span className="dn-lvl-v bull">触发印出时、scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">1h 收 &lt; $74,400（W-SMA20 下方 + 缓冲）</span></div>
                <div><span className="dn-lvl-k">目标 #1</span><span className="dn-lvl-v">$76,473 D-SMA150 —— 头顶簇首根 MA</span></div>
                <div><span className="dn-lvl-k">目标 #2</span><span className="dn-lvl-v">$76,733 D-EMA100 / $77,069 D-EMA20 叠</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">0.2R · D-SMA150 触到平半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>触发 ~$75,600、止损 $74,400 ≈ $1,200
                风险；首目标 $76,473 ≈ $873 ≈ 0.7:1（首目标弱）、
                延伸 $77,069 ≈ $1,469 ≈ 1.2:1。首目标非对称差、延
                伸非对称只是温和——这就是为什么门要硬（两腿同）
                size 要小。<b>硬规则：</b>此 scout 与破位延伸空剩
                余互斥——scout 触发时刻、不论剩余空盈亏立即平掉。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">宏观尾 · 对冲 · 持仓 · 结构放大器峰值日</span>
              <div className="dn-trade-name">
                下行 put-spread —— 29MAY26 明天北京早上到期、坐在 $84M 负 γ 块里
              </div>
              <div className="dn-thesis">
                宏观 Tier-1 再松（10Y −6bp 到 4.50%——首次触发谱
                系内 reclaim-long 利率筛；TIPS −6bp 到 2.10%；HY
                OAS −2bp 到 2.72% 偶发 z −2.12 谱系最深；US-JP
                10Y 利差 −6bp 到 1.98%）。昨天 re-grow 闸全部
                <em>反向</em>移动（HY OAS 距 2.85% 闸 13bp、10Y 距
                4.60% 闸 10bp 在闸下方）。宏观面 unambiguously
                risk-on；BTC 仍照旧从内部破位、不从宏观侧。
                <span className="dn-em">
                  对冲明天北京早上到期（29MAY26 1.3 DTE 在快照上）、
                  坐在 6 日谱系最大的单 expiry 负 γ 块里（−84.16M、
                  前 −30.65M——再加 $53.5M 放大器权重）。dealer
                  Δ-对冲在该 expiry 上对下行向 strike 的移动加倍
                  到谱系内未见过的程度。对冲剩 31 小时；结构上 γ
                  背景是整条 6 日谱系里最有利的、量级超过昨天一档
                  （放大器助长 put-spread）、但宏观面继续往错方向
                  紧（re-grow 闸再次反向走）
                </span>
                。净：穿 29MAY 到期不动 size；到期那一刻、下一根
                放大器消失（30MAY +0.03M、31MAY +0.28M、5JUN
                +1.15M——dealer strip 在 29MAY 清后回到轻正 γ）。
                若宏观 re-grow 闸最终触发、再向 5JUN26 9.3 DTE 或
                12JUN26 16.3 DTE 滚续。当前水位连续两天反走、下一
                根 Tier-1 印是 05-29（在此 expiry 解之后）。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">结构</span><span className="dn-lvl-v">long $74k / short $70k put</span></div>
                <div><span className="dn-lvl-k">到期</span><span className="dn-lvl-v">29-MAY-26（1.3 DTE）—— 峰值负 γ host（−84.16M、前 −30.65M）；明天北京早上解</span></div>
                <div><span className="dn-lvl-k">本次动作</span><span className="dn-lvl-v">持 0.15R · 不加（宏观印继续松、re-grow 闸再次反走）· 不减（BTC 内部破位延伸、放大器今天峰值）</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（基于今天印的 FRESH 闸）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.80% 收（闸从 2.85% 调低 —— 当前 2.72%、距闸 8bp）OR 10Y &gt; 4.55% 收（闸从 4.60% 调低 —— 当前 4.50%、距闸 5bp）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收 —— 谱系首次<em>真</em>到 4.50%</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>strike / premium / Greeks 未载入——结构
                示例性、size 待 Deribit 29-MAY 链拉取。29MAY 1.3
                DTE −84.16M 是谱系最重的单 expiry γ 块（对昨天纪录
                −30.65M 加了 −$53.5M 的负 γ、约 2.75× 重 / +174%）、
                31 小时内解；一个 BTC 内部破位
                放大器受益、宏观面继续松向反方向走的可交易价差、
                今天处在结构最有利的峰值、到期解掉就消散。29MAY
                清掉后、dealer strip 在 30MAY/31MAY/5JUN/12JUN 上
                回轻正 γ、放大器框架重置。reclaim-long 利率筛
                10Y &lt; 4.55% 收今天首次<em>真</em>——只看宏观层
                （不算 BTC 内部破位）会是一道战术多偏筛；BTC 层
                今天压过宏观层、但宏观信号已在记录上。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · cycle 2 step 1 印出 · 重堆敌对支 · step 2 基准约 +24h</span>
              <div className="dn-trade-name">
                挤压周期 cycle 2 step 1 —— 重堆敌对 @ BJ 13:11 —— step 2 基准在下一根 BJ 13–15 窗内
              </div>
              <div className="dn-thesis">
                昨天框架预测<em>BJ 13–15 今天会落一根 SM 步、方向条件
                条件</em>。步在 BJ 13:11（UTC 05:11Z 05-27）落、现货
                $75,635、6 日谱系最干净的重堆敌对印（Δlong +774、
                Δshort <em>+6,740</em>、Δnet −5,966——单分钟约 1.5
                倍昨天）。cycle 2 基准是：再落一根 BJ 13–15 窗内的
                离散步、预期今天（2026-05-28 05:00–07:00Z）。cycle
                2 step 1 是重堆——昨天双向预测里那条敌对分支——所以
                step 2 是延续（重堆敌对 / 两腿回补）的条件概率高
                于平基线、但 cycle 1 节奏里重堆与加多与混合交错出
                现、step 方向仍是低置信度预测。
                <span className="dn-em">
                  谱系状态：空头侧位谱系峰（32,325 BTC、前 24,499）；
                  多头侧位谱系低（9,790 BTC、前 12,441）；净 SM 比
                  05-27 基线净空多 87%。仓位本子现在对突然回补反弹
                  最脆（谱系低 long_btc 意味着每一根空回补的买盘直
                  接转成多边吸收）、同时对延续最暴露（谱系峰 short_btc
                  在上方有最大止损密度）
                </span>
                。cycle 2 step 2 的新问题：延续（重堆在 −22.5k 基
                础上加、把 SM 带到 −25k+）还是回补（short_btc 在
                快速重夺 flip $75,557 上修到 28k+）。29MAY 1.3DTE
                明天北京早上到期是单根最大路径依赖输入——它的 γ
                放大器在 step 2 窗内自己解掉。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">cycle 2 step 1 印 · step 2 基准约 +24h、BJ 13–15 节奏（2026-05-28 05:00–07:00Z 约 5 小时后开窗）</span></div>
                <div><span className="dn-lvl-k">cycle 2 step 1</span><span className="dn-lvl-v">重堆敌对 @ 2026-05-27 05:11Z（BJ 13:11）· 现货 $75,635 · Δlong +774、Δshort +6,740、Δnet −5,966</span></div>
                <div><span className="dn-lvl-k">SM 谷（最空）窗内</span><span className="dn-lvl-v">−22,668 BTC @ 2026-05-27 23:41Z（BJ 07:41 05-28）· 现货 $74,287 · 比快照早 27 分钟</span></div>
                <div><span className="dn-lvl-k">步后价格路径</span><span className="dn-lvl-v">步 $75,636 → 24h 高 $76,102（+$466）→ 24h 低 $74,266（−$1,370 vs 步）→ 快照 $74,504（−$1,132 vs 步）</span></div>
                <div><span className="dn-lvl-k">步节奏</span><span className="dn-lvl-v">连续 6 日 · 全部 BJ 13–15 窗 · cycle 2 step 2 基准约 +24h（BJ 13–15 今天、2026-05-28 05:00–07:00Z）</span></div>
              </div>
              <div className="dn-gating">
                <b>cycle 2 预测纪律：</b>step 1 是重堆敌对（破底
                趋势延续）——对昨天双向预测里那条「破底次日再出
                一根重堆」分支。step 2 基准仍是约 +24h 在 BJ 13–15
                节奏；方向条件读法待快照-到-步路径。仓位本子两侧
                都处于最大张力（峰空、谷多）——延续重堆把张力再
                拉、两腿回补把张力转成快速反弹。盯位次序：BJ 13–15
                的 SM 步在前、GEX 29MAY 到期在步窗中解。两者都
                在同一段 8 小时块内触发。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件
              <span className="dn-roman">VI · 门打齐 · 第一目标触到 · cycle 2 step 2 与 29MAY 到期在同一段 8h 内解</span>
            </h2>

            <p>
              05-27 那张九条条件里：break-extends 空头在 BJ 22:00
              05-27 上一次性 ALL-THREE 打齐（谱系首次三条腿全打齐
              的一根）；重堆敌对在 BJ 13:11 一次性打齐（Δnet −5,966
              ≤ −3k 闸、SM 触 −17,848 &lt; −15k 闸）；mid-cycle 升
              级触发（05-27 1d 收 $74,418 远低于云顶 $75.4k）；
              cycle 2 节奏步在时间与方向上都中（重堆敌对 BJ 13:11
              落入 13–15 窗）；宏观 re-grow 闸继续反走（HY OAS 到
              2.72% 对 2.85% 闸；10Y 到 4.50% 对 4.60% 闸）；
              reclaim-long 利率筛<em>真</em>到（10Y 4.50% &lt; 4.55%
              ——谱系首次）；多头再入场 / 短回补早期 / reclaim 筛
              一根都不及。<em>九条里四条严格触发、一条筛在反方向
              触发</em>——谱系迄今最高严格触发计数。今天条件围绕
              破底与最大张力的仓位本子重设；cycle 2 step 2 与 29MAY
              到期是新顶级盯位：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>cycle 2 step 2 —— BJ 13–15 今天（2026-05-28 05:00–07:00Z）</td><td>预期一根离散 SM 步、方向条件</td><td>步出印读；重堆延续、两腿回补转成回补反弹 setup</td></tr>
                <tr><td>29MAY26 到期（≤ 31h）</td><td>−84.16M 块明天北京早上解</td><td>到期印出时平掉 put-spread；评估解后 dealer strip 的下一段 γ 背景</td></tr>
                <tr><td>回补反弹 scout（多）</td><td className="bull">1h 收 &gt; $75,557（新 flip）AND SM short_btc &lt; 30k AND long_btc &gt; 11k 在前 4h 之内</td><td>scout long 0.2R、目标 $76,473（D-SMA150）然后 $77,069（D-EMA20）</td></tr>
                <tr><td>跑剩余（空 runner）</td><td className="bear">1h 收 &lt; $74,400（W-SMA20 下方 + 缓冲）AND SM &lt; −20k AND short_btc &gt; 31k</td><td>剩余跑 $73,710（W-EMA200 种子）然后 $72,958（D-SMA100 周期锚）—— $73,710 触到后挪止损到入场</td></tr>
                <tr><td>周期锚测试（最大跑）</td><td className="bear">1d 收 &lt; $73,200 OR 干净 4h 跟进 &lt; $73,710</td><td>满平到 D-SMA100 $72,958；周期锚下方 = 周期 regime 升级、需另起评估</td></tr>
                <tr><td>重堆敌对-2（cycle 2 step 2 延续）</td><td className="bear">离散 SM Δ ≤ −3k 一根分钟把 SM 推 &lt; −24k</td><td>当作剩余 runner 即时延伸、目标直接 $72,958</td></tr>
                <tr><td>空头投降（cycle 2 反向）</td><td className="bull">SM short_btc 1h 内跌 &gt; 2k AND long_btc &gt; 11k</td><td>平掉剩余空；W-SMA20 重夺翻成回补反弹多预触发</td></tr>
                <tr><td>宏观尾 re-grow（基于 05-28 印的 FRESH 闸）</td><td className="bear">HY OAS &gt; 2.80%（调低）OR 10Y &gt; 4.55%（调低）下一根 Tier-1 收</td><td>把 put-spread 滚到 5JUN/12JUN 前段；tail +0.1R 向主仓</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收 —— 今天<em>真</em>到 4.50%（谱系首次）；等 BTC 内部转向才能转动作</td><td>独立筛已真；需要 BTC 内部回补反弹触发才能转 scout long</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                cycle 2 step 2 在 BJ 13–15 今天落成重堆延续还是
                两腿回补。29MAY 到期在同一段 8 小时块内解掉（明天
                北京早上、距快照约 31h）——谱系里第一次节奏步与峰
                值放大器到期在同一窗内解。时间近确定、方向结构非
                对称（两侧最大张力意味着哪一边出、移动都快）
              </span>
              。步出印前、本篇按写好的跑：破位延伸空剩余仍活、
              第一目标已触、放大器窗内剩余跑的纪律；回补反弹
              scout 硬门挂在仓位本子转向上；宏观尾持仓穿放大器
              峰值日。今天宏观印在每一根 Tier-1 上再松；BTC 内部
              破位连续第二天延伸、昨天点名的门一次性三条腿打齐
              ——谱系首次。TradFi 引擎从峰位回软（NQ +2.68% vs
              +4.11%、JP225 +5.24% vs +10.80%、金属翻负）；BTC
              又脱钩向下 2pt 到 7d 落后 −7.2pt。这个分歧是 6 日
              谱系内结构最宽、持续最久的一根、也是我们对
              「BTC 跟随宏观 risk-on」这条命题做出的最干净一道
              反向证据。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · 0 CRITICAL · 2 HIGH + 6 MED + 1 LOW 全部修正）
            </span>
            <b>Codex CLI 0.132.0（xhigh reasoning）干净跑完敌对式
            审计——空 stdin 管道有效、无 TTY 阻塞。</b>0 CRITICAL；
            九条 findings 均 EN+ZH 应用：{' '}
            (a) <b>F-01 · HIGH</b> &mdash; <em>MTF 存档主张在审计
            时不成立</em>：数据来源条带引用{' '}
            <code>audits/2026-05-28-desk-note.md</code> 作为 00:01Z
            MTF 扫描的存档、但 codex 预检时该文件不存在。已创建
            审计记录（本文档）、底部附 00:46Z 扫描逐字存档（codex
            审计期间滚动文件已覆盖了 00:01Z 扫描——谱系 F-04 pinnability
            gap 持续）。{' '}
            (b) <b>F-02 · HIGH</b> &mdash; <em>funding 封顶占用数与
            谷点时间戳错</em>：页面把 1068 根平 Δ 与封顶占用混了、并
            把谷点放在「BJ 06:30 清晨软位」。实际：24h 内 878 / 1441
            原始记录（~61%）正好在 +10.95% 封顶上；谷点 +4.16% ann 在
            <code>2026-05-27 11:33Z（BJ 19:33 05-27）</code>；首次脱开
            封顶在 <code>2026-05-27 07:39Z（BJ 15:39 05-27）</code>。
            Funding 元件 tile、Δ-funding tile、§I funding 段、交易本
            子主仓 thesis EN+ZH 重写。{' '}
            (c) <b>F-03 · MED</b> &mdash; <em>24h 高时间戳两边都
            反了</em>：页面说「BJ 04:23 05-28 = UTC 20:23Z 05-27」；
            正确是 <code>2026-05-27 12:23Z（BJ 20:23 05-27）</code>。{' '}
            (d) <b>F-04 · MED</b> &mdash; <em>开头那一段把昨天的
            W-EMA200 $73,724 / D-SMA100 $72,903 带过来了</em>：开头
            纠正到 <code>$73,710 / $72,958</code>；§II MA 矩阵、
            交易本子目标、决策条件本来就用的是今天的值。{' '}
            (e) <b>F-05 · MED</b> &mdash; <em>RV 方法学文字与数值
            不一致</em>：26.46% 来自最末 30 根日 log return（= 31 根
            close）；文字说「最末 30 根日 close」对应 26.82%。重写
            方法学为「30 日 log return（= 连续 31 根日 close）」、
            并标注另一种口径 26.82% 以便读者再验。{' '}
            (f) <b>F-06 · MED</b> &mdash; <em>ZH 里前一日 10Y 写成
            4.57%；EN 是 4.56%</em>（正确的前值）。ZH §IV 改回 4.56%。{' '}
            (g) <b>F-07 · MED</b> &mdash; <em>29MAY 之后的 expiry strip
            符号写反了</em>：页面说「下一根负 expiry 轻得多
            （5JUN +1.15M、12JUN +0.30M）」、但这两根是正。重写为：
            30MAY +0.03M、31MAY +0.28M、5JUN +1.15M、12JUN +0.30M
            ——前段放大器消失、不是滚到下一根负 pocket。{' '}
            (h) <b>F-08 · MED</b> &mdash; <em>到期放大器算式错</em>：
            $84.16M vs $30.65M = +$53.51M / 约 2.75× / +174%、不是
            「52% 重」。两语都改。{' '}
            (i) <b>F-09 · LOW</b> &mdash; <em>0γ 距 flip 取整错</em>：
            74,504.35 / 75,557 − 1 = −1.39%、不是 −1.37%。tile 与两
            处正文都改。Codex 明确清除：funding × 1095 量级（无 ×100
            谱系陷阱重现）、GEX 双参考符号一致性（两参考都给负、
            tile −1.39% 与簇正文同号）、GEX 墙与 by-expiry strip
            （$75k −51.26M 是整张表最重的单根；29MAY 1.3 DTE −84.16M
            峰放大器；chain 从 882 增到 890 合约）、SM 步时序
            （BJ 13:11 单分钟步 Δlong +774 / Δshort +6,740 / Δnet
            −5,966 ——6 日谱系最大单步；SM cut fraction 86.9% 取整 87%）、
            破位延伸门触发时序（BJ 22:00 05-27 1h 收 $75,115.55、三
            条腿在同一根 bar 同时打齐——谱系首次）、W-SMA20 目标触位
            （24h 低 $74,266.08 在 BJ 07:36 05-28 触到昨日投影的
            $74,266、贴位差 $0.08）、MA 矩阵（已公布 19 根偏移全部
            对 parquet 重算核过；W-EMA150 / W-EMA200 在 126 根周 bar
            下作种子值正确披露）、30D RV 26.46%（30 returns / 31
            closes、锚自 parquet 最末 bar 2026-05-28 00:06Z）、跨资产
            7d（均值 |r| 0.297；BTC 对齐 NQ +0.555 / SP500 +0.524 /
            CL −0.521；7d 表现 BTC −4.55% vs NQ +2.68% — −7.2pt 脱
            钩）、宏观 Tier-1 thaw（10Y −6bp 到 4.50% 首次触发
            reclaim-long 利率筛；HY OAS −2bp 到 2.72% 偶发 z −2.12
            谱系最深；US-JP 10Y 利差 −6bp 到 1.98%）、claims-vs-loaded
            -data discipline（NTT / max-pain / strike-IV / BTC-NQ
            framework-only；JGB 月度「不依赖」；IV 890 合约中位数、
            不是可交易价差）、EN/ZH 数值平价（仅有 F-06 ZH 4.57%
            排印错、已修）、requireViewer gating 模式（两路径、首
            语句）、索引 <code>&lt;li&gt;</code> 新增（按新近优先；
            EN「Gate fired clean, target tagged to the dollar」/ ZH
            「门打齐 · 目标贴位差 $0 触到」）、交易本子门规纪律
            （本篇承认昨天 0.3R 破位延伸空三条腿打齐、第一目标贴位
            差 $0 触到；本子干净过渡到「平半、剩余在 29MAY 1.3 DTE
            放大器窗内跑」、不为被门触发驳掉的 stand-aside 姿态做
            辩护）。源审计记录与 00:46Z MTF 扫描存档全文：
            audits/2026-05-28-desk-note.md。{' '}
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；
            Next 16.2.6 在 <code>node_modules/next/dist/bin/next:24-28</code>
            处对 Node &lt; 20.9.0 硬退出、所以完整 <code>next build</code>
            被环境阻塞（谱系自 05-21 到 05-27）。
            <code>npx --no-install tsc --noEmit</code> exit 0
            （TypeScript 通过）作为 build proxy。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台
            人造物、<em>非投资建议、非招揽、非要约</em>、不针对任何
            接收人的具体情况个性化。数字反映单一原子快照（2026-05-28
            00:08Z）、provenance 在数据来源条带中按节披露；宏观 Tier-1
            面板渲染 2026-05-27 22:15Z（比快照早约 1.9h）、新印在每
            一根 Tier-1 上再松。水位、规模与条件是交易台流程的示例、
            不是长期推荐。过去的相关性、γ 与仓位模式不绑定未来盘面。
            衍生品有全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                门打齐。目标贴位差 $0 触到。cycle 2 step 2 与 29MAY
                放大器在同一段 8 小时内解。窗里跑剩余；等仓位本子
                转向再做回补。
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
            v2 · 2026-05-28 00:08Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
