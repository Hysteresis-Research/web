import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-05-27 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-05-27',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-05-27' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260527() {
  await requireViewer('/zh/desk/2026-05-27');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · 交易台备忘 · 2026-05-27 · v2</span>
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
              <span className="dn-big">$75,955</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−1.70%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-05-27 00:08Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-27 00:08Z（pin 锁定）</td>
                  <td className="dn-flag">最新 · 1 分钟 · 审计时文件 tail 在 00:09Z</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-05-27 00:01Z scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 较快照锚滞后约 7
                    分钟 · 含未收盘 K 线 · 扫描存档于
                    audits/2026-05-27-desk-note.md
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 00:01Z 快照</td>
                  <td className="dn-flag">
                    最新 · Deribit idx $75,992 对现货 $75,955 · 882 合约
                    （前 884 · 26MAY 0DTE 已过期）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 7 分钟 · 7d 1h bar · 22 资产</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-26 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.9h · FRED Tier-1{' '}
                    <em>本周首道新鲜印刚落</em>（10Y −1bp、TIPS −2bp、
                    HY OAS 落到 2.74%、MOVE −3.5）· 阵亡将士纪念日长周末
                    冻结于本场美时解冻 · 面板上 10Y / TIPS / US-JP
                    仍带「stale 4d」标签——是 Δ 字段没刷新，level 列已
                    更新
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-05-27 00:05Z</td>
                  <td className="dn-flag">
                    较快照锚滞后约 3 分钟 · 偏移按现货重算
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
              <span className="dn-src">live · 00:08Z · 24h 均值 +7.15% · 自 18:02Z 05-26（BJ 02:02 05-27）连续封顶</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+8.51% → +10.95%</span>
              <span className="dn-src">区间 +1.88% / +10.95% · 谷点 2026-05-26 09:50Z（BJ 17:50）· 343 上 / 365 下 / 732 平（封顶钉住）</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−0.66%（−657 BTC）</span>
              <span className="dn-src">live · long_btc −3.22k（被砍）；short_btc +0.04k（24h 端点基本不动）</span>
            </div>
            <div>
              <span className="dn-k">Binance mkt long/short</span>
              <span className="dn-v bear">57.20 / 42.80</span>
              <span className="dn-src">live_db `mkt_long_pct` · 破位过程中重新拥挤回多 50.21 → 57.20（4 日谱系里最差的偏侧）</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−12.1k（净 SHORT）</span>
              <span className="dn-src">live · long 12.44k − short 24.50k · 谷点 −15.66k @ 2026-05-26 14:56Z（BJ 22:56）</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 05-26 备忘</span>
              <span className="dn-v bear">−8.8k → −12.1k（−3.26k 更空）</span>
              <span className="dn-src">|Δ|/prior_net = 37% · 步在 05-26 05:56Z（BJ 13:56）Δnet −3,973（Δlong −3,049、Δshort +924）</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.3% / 26.00%</span>
              <span className="dn-src">GEX IV 中位数 · 882 合约</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v">+0.16%（在上方）</span>
              <span className="dn-src">flip $75,830 · aggregate GEX +29.9M（前 +78.2M，泄了 $48.3M）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              一根分钟里、盘面把方向调过来，剩下的让价格自己走完。
              <span className="dn-signal">
                昨天那张决定条件表里、有两条差一根线就触发——按字面
                没踩着、按精神都已经踩着了
              </span>
              。05-25 06:36Z 那一波 +3,819 BTC 的加多、在
              <span className="dn-tag">2026-05-26 05:56Z（BJ 13:56）</span>
              、现货 <span className="dn-tag">$76,872</span> 处被拆掉：
              long_btc 一分钟之内从 <span className="dn-tag">15,216</span>
              {' '}回到 <span className="dn-tag">12,167</span>（−3,049 BTC），
              同一分钟 short_btc 从 <span className="dn-tag">24,580</span>
              {' '}加到 <span className="dn-tag">25,503</span>（+924 BTC），
              SM net 一根线
              <span className="dn-tag">−9,364 → −13,336</span>（Δnet
              −3,973）。05-26 那条 long-trim 警戒原文是「short 不上」，
              今天 short 跟着上了——所以字面没响，但实际发生的是更恶劣
              的混合（多砍 <span className="dn-em">+</span>{' '}
              空加）。BJ 下午这个窗口、
              <span className="dn-signal">
                第 5 天连续在 BJ 13–15 之间打一根硬步（05-22 重堆、
                05-23 重堆、05-24 两腿回补、05-25 加多、05-26 砍多+加空
                的混合）
              </span>
              。然后价格按那张加多本来要走的剧本走了一遍：上撞簇顶。
              18:41 BJ 摸到 <span className="dn-tag">$77,506</span>、
              重新走到 <span className="dn-tag">$77,866</span>、最终在
              <span className="dn-tag"> 2026-05-26 14:27Z（BJ 22:27）</span>
              {' '}打出 24h 高 <span className="dn-tag">$78,063</span>
              ——<span className="dn-em">几乎贴着 W-EMA20 $77,936 /
              $78,062 这堵 05-26 备忘点名的墙</span>。盖子封住、价格滚下来、
              <span className="dn-signal">
                穿过 0γ flip $75,959，时间是 17:32Z 05-26（BJ 01:32 05-27）
              </span>
              ，18:00Z 那根 1h 收 <span className="dn-tag">$75,894</span>
              {' '}（第一根 flip 下方收盘），再往下到
              <span className="dn-tag">
                24h 低 $75,697.8 @ 2026-05-26 22:50Z（BJ 06:50 05-27）
              </span>
              。快照 <span className="dn-tag">$75,954.99</span>
              {' '}live（24h −1.70%；离前 flip $75,959 仅 $4 在下方
              ——已经在新 flip $75,830 上方 $125）。<span className="dn-em">
                钉子断了。加多被拆。空头重新加上。盘口墙没了顶半截、
                front expiry 直接变号。价格一天之内把簇顶撞了一次、
                被打回来、再把底捅穿。
              </span>
            </p>

            <p>
              现货报 <span className="dn-tag">$75,955</span> live、
              24h −1.70%、贴新
              <span className="dn-tag">0-γ flip $75,830</span> 上方
              +0.16%（flip 跟着价格下来 $129、从昨天 $75,959——基本
              贴着走）。
              <span className="dn-signal">
                所有日线 MA 除了 D-SMA100 都翻到现货上方了
              </span>
              ：昨天「贴在现货下方」的那一簇（D-SMA50 / D-EMA100 /
              D-EMA50 / D-SMA150 +0.25 ~ +0.80%）今天全部翻成「头顶
              已破支撑」：
              <span className="dn-tag bear">D-SMA150 $76,568（−0.80%）</span>、
              <span className="dn-tag bear">D-EMA50 $76,687（−0.95%）</span>、
              <span className="dn-tag bear">D-EMA100 $76,807（−1.11%）</span>、
              <span className="dn-tag bear">D-SMA50 $77,134（−1.53%）</span>、
              <span className="dn-tag bear">D-EMA20 $77,482（−1.97%）</span>
              全部在上方；下一道阶梯
              <span className="dn-tag bear">W-EMA20 $77,936（−2.54%）</span>
              ——就是 $78,063 高点被封的那堵墙。盘口 γ
              <span className="dn-signal"> 整张表崩了一半</span>：
              <span className="dn-tag bull">+29.9M/1%</span>（前 +78.2M——
              <em>一夜泄掉 $48.3M 的钉力、是 5 日谱系单日最大变化</em>）。
              by-expiry 那一条上、承重那根直接变号：
              <span className="dn-tag bear">29MAY26 2.3DTE −30.65M</span>
              （昨天 +23.83M——一天之内 $54M 的反号、从最重正变最重负；
              那个 host 着宏观 put-spread 的到期日今天反过来是
              <em>放大</em>不再是<em>抑制</em>）、
              <span className="dn-tag bear">27MAY26 0.3DTE −7.83M</span>
              （今天到期、净负——昨天 26MAY 是 +1.68M 正的）、
              <span className="dn-tag bear">28MAY26 1.3DTE −1.64M</span>。
              墙：$80k +29.55M（前 +53.92M——<em>砍了一半</em>）、
              $82k +15.64M（前 +19.83M）、$77k +14.54M（top10 新进——
              对着破口顶起来一道近现货正墙）、$90k +8.15M、$78k
              +7.78M、$85k +7.59M。簇下的负 pocket
              <span className="dn-em">显著加深</span>：
              <span className="dn-tag bear">$75k −39.90M</span>（前 −23.14M——
              加了 −$16.8M、现在是整张表最重的单根）、
              <span className="dn-tag bear">$74k −15.71M</span>（前 −11.03M、
              重了）、
              <span className="dn-tag bear">$76k −13.86M</span>（前 −12.67M、
              小幅加重）。funding 顶在 Binance 多头付费封顶上（live
              <span className="dn-tag"> +10.95% ann</span>、自 02:02Z
              05-27 连续封顶、即 <em>当前已经有约 6 小时的场费费率坐在
              交易所允许 long 付的最高位</em>）；24h 均值
              <span className="dn-tag">+7.15%</span>（比 05-26 的 +4.16%
              热得多）；24h 区间
              <span className="dn-tag">+1.88% / +10.95%</span>；分钟 Δ
              <span className="dn-tag">343 上 / 364 下 / 733 平</span>
              （那 733 根平的是 funding 坐在封顶上不动）。
              <span className="dn-em">
                直话直说：盘口已经不再 pin、顶墙砍半、front expiry
                变号成放大器、$75k 负 pocket 几乎翻倍。仓位本子是多头
                那一侧被压得太满（retail 在破位过程中重新拥挤到 57.2%
                多、SM 把多砍了、空又加了、funding 封顶）。spot 撞不
                上去的那堵 MA 墙是 W-EMA20 $77,936、再往下每一根更短
                的 MA 一路下来全部被冲破。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · 多头被砍、空头重新加上</span>
            </h2>

            <p>
              BJ 13:56 那一根、是整条谱系方向变过来的那一刻。
              <span className="dn-tag">2026-05-26 05:56Z（BJ 13:56）</span>
              、现货 <span className="dn-tag">$76,872.03</span>（步前
              13:55Z 现货 $76,861.27、long_btc 15,216、short_btc 24,580、
              net −9,364），long_btc 一根分钟从
              <span className="dn-tag">15,216</span> 落到
              <span className="dn-tag">12,167</span>（多平 −3,049 BTC）、
              short_btc 从
              <span className="dn-tag">24,580</span> 加到
              <span className="dn-tag">25,503</span>（空加 +924 BTC）。
              SM net 一根线
              <span className="dn-tag">−9,364 → −13,336</span>（Δnet
              −3,973）。步后 13:57Z：long 守 12,167、short 守 25,503、
              net −13,336、现货 $76,890——价格当时几乎没反应，跟前
              三天的步一样。本步本质上跟<span className="dn-em">谱系
              里任何一根步</span>都不同：05-22 / 05-23 是单腿空加重堆、
              05-24 是两腿回补（先平空再开多、间隔 5 分钟）、05-25
              是单腿加多（空几乎不动）。今天 13:56Z 是首个
              <span className="dn-em">混合步</span>：同一分钟里多砍
              <em>加</em>空加。05-26 那条 long-trim 警戒门是「multi
              砍但空不上」、今天空上了、字面没响、但其精神（新加的多
              被砍掉、空头同时重新装弹）已经发生。步后的轨迹也对照
              这个读法：short_btc 在接下来约 9 小时内继续累到
              <span className="dn-tag">25,503 → 27,441 峰</span>@
              <span className="dn-tag">2026-05-26 15:46Z（BJ 23:46）</span>、
              long_btc 一路滑到
              <span className="dn-tag">10,801 谷</span>@
              <span className="dn-tag">2026-05-26 14:56Z（BJ 22:56）</span>、
              SM net 在同一根 BJ 22:56 分钟里印出 24h 谷
              <span className="dn-tag">−15,661</span>（现货 $77,026）。
              SM 穿到 −15k 下方仅 55 根连续分钟（
              <span className="dn-tag">BJ 22:46 到 BJ 23:40 = UTC
              14:46Z 到 15:40Z</span>）。快照 SM 是
              <span className="dn-tag">−12,058</span>、比谷点少空
              3,603 BTC；long_btc 已经爬回到
              <span className="dn-tag">12,441</span>（从 10.8k 谷回来
              1.64k）、short_btc 是
              <span className="dn-tag">24,499</span>（从 27.4k 峰回来
              2.94k）。<span className="dn-em">
                两个读法在这里：net SM 比 05-26 快照基线净空多了 37%
                （cut fraction |−3,257|/|−8,801| = 0.37）；但 24h 之内
                的振幅更大——SM 一口气冲到 −15.7k、然后半数回补到 −12.1k、
                广义空头边仍稳在 24.5k（24h 端点几乎不动、当天弧线
                是 +2.98k 加空到峰 27.4k、再 −2.94k 平空回到 24.5k）。
                05-26 那张
                「技术上还在装弹」的挤压燃料、已经在同一天完成了一次
                进货-出货循环、再装一次到同一个水位。
              </span>
            </p>

            <p>
              剩下的让价格走完。<span className="dn-signal">
                盖子按上一篇推断的位置封住了——就是 W-EMA20——然后底裂了
              </span>
              。现货从 13:56Z 步点 $76,872 往上跑、14:25Z 摸到谱系前
              高 <span className="dn-tag">$77,866</span>、14:27Z（BJ
              22:27）再打出一根边际新高
              <span className="dn-tag">$78,063.05</span>——
              <em>跟 W-EMA20 $78,062（05-26 的簇顶）只差 $1、跟今天的
              W-EMA20 $77,936 只差 $5</em>。14:00Z 那根 1h 收
              <span className="dn-tag">$77,177.4</span>（远低于门），
              昨天那条「1h 收 &gt; D-EMA20 $77,774 且 SM long_btc &gt;
              14k」从来都没碰过（没有 1h 收上 $77,774、long_btc 在 13:56Z
              已经掉到 12,167）。墙之上的盘口是<em>长 γ 吸收</em>、所以
              这一撞没下文；墙之下、多头本子已经被砍 3k 而空头已经加
              +0.9k、每一根下行 tick 都把更多多头止损卖进去。16:00Z
              4h 水下死叉印出（DIF −49.9、MACDh −55.3）——之前 5 天扛
              着「水下金叉」的引擎 TF、翻成一根新鲜的水下死叉。17:32Z
              现货穿 flip $75,959、18:00Z 第一根 flip 下方 1h 收
              $75,894、23:00Z 当窗最低 1h 收
              <span className="dn-tag">$75,729.7</span>（即 BJ 07:00
              05-27 那根 = UTC 23:00Z 05-26）、24h 低紧接着在 22:50Z
              （BJ 06:50 05-27）打出
              <span className="dn-tag">$75,697.8</span>。最近 7 根 1h
              收里 5 根在前 flip 下方（BJ 02 / 03 / 06 / 07 / 08 =
              UTC 18 / 19 / 22 / 23Z 05-26 + 00Z 05-27）；
              <span className="dn-em">
                05-26 那条 cluster-loses 门（1h 收 &lt; $75,959 且 SM
                &lt; −15k）字面上没同时触发——两条腿差了约 4 小时（SM
                14:56Z 摸 −15.7k、第一根 flip 下方 1h 收在 18:00Z 那时
                SM 已经是 −13,425、在 −15k 门上方）；但两条腿都在同一
                个 24h 里各自打出来
              </span>。两半都印了。门那条字面严格性是唯一没踩到的、它
              本来要抓的状态变化（空头从多头本子手里把 flip 处的钉权
              抢过来）——已经干净地发生了。我们把 cluster-loses 条件
              视作<em>实质上触发</em>来排今天的本子。
            </p>

            <p>
              杠杆侧把这个单向读完。funding live
              <span className="dn-tag">+10.95% ann</span>——是 Binance
              多头付费封顶（8h 资金费率上限 0.01000、ann = ×1095），
              而且自
              <span className="dn-tag">2026-05-26 18:02Z（BJ 02:02 05-27）</span>
              以来一直钉在封顶上、即<em>过去约 6 小时整场资金费率坐
              在场所允许 long 付的最高位</em>。24h 路径：谷点 +1.88%
              在 2026-05-26 09:50Z（BJ 17:50、SM 谷点之
              <em>前</em>约 5 小时），然后一路抬到 2026-05-26
              15:42Z（BJ 23:42）越 +5%、2026-05-26 17:34Z（BJ 01:34
              05-27）越 +9%、18:02Z（BJ 02:02 05-27）摸到 +10.95%
              封顶之后再没下来。24h 均值 ann
              <span className="dn-tag"> +7.15%</span>（比 05-26 的
              +4.16% 热得多、跟 05-25 的 +8.90% 接近但微观结构相反
              ——今天是单向装满钉住、05-25 是谷-顶反复）。分钟 Δ
              <span className="dn-tag">343 上 / 365 下 / 732 平</span>
              ——那 732 根平的就是 funding 在封顶上不交易。OI
              <span className="dn-tag bear">−660 BTC（−0.66%）</span>
              24h：long_btc 端点 −3,220 BTC、short_btc 端点 +37 BTC
              ——结构上多头被清、空头本子端点几乎不动、尽管日内冲过
              +2.98k 峰（short_btc 到 27.4k @ 15:46Z）再 −2.94k 平
              回到 24.5k。retail
              <span className="dn-tag bear">mkt_long_pct 57.20%</span>
              （从 50.21% 跳上来——谱系单日最大拥挤翻转、<em>在最差
              的价位上把多头拥挤推到最满（破位的底）</em>）。perp 对
              spot
              <span className="dn-tag bear">折价 −$120.10</span>（1h
              均 −$110.84、区间 −$139.30 / −$71.35；4h 均 −$110.94、
              区间 −$155.12 / −$71.35；24h 均 −$98.46、区间 −$202.33
              / +$38.39——基差短暂回到小幅升水一次）。基差今天结构性
              地更深负（快照 −$120 vs 05-26 的 −$60）——<span className="dn-em">
                多头付费坐在更深负的 perp 基差上面：多头按场所允许的
                最高费率付费、握着一张对 spot 还在 $120 折价的 perp
                合约——典型的尾段结构
              </span>。1 分钟主动单 skew 快照
              <span className="dn-tag">+37.1</span>（1h 均 +9.0、区间
              −22.8 / +48.7；24h 均 +0.6）——面上有点主动买、可能是
              1h TD9-BUY 的早期反射买盘、还没改变趋势。
            </p>

            <p>
              窗口流向今天是一边倒之后回归。24h：价
              <span className="dn-tag bear">−1.71%</span>、OI
              <span className="dn-tag bear">−660 BTC</span>、spot CVD
              <span className="dn-tag bull">Δ +984</span>、futures CVD
              <span className="dn-tag bear">Δ −288</span>、big-print
              <span className="dn-tag bear">−487 BTC / 981 prints</span>、
              taker-net
              <span className="dn-tag bear">−288</span>——
              <span className="dn-em">
                24h 形状是 futures 领跌：futures CVD 是这一行里唯一负
                的；spot CVD 跑出 +984——往跌幅里跑的——是 spot 那侧
                被动接 futures 的卖。+984 spot CVD 对应 $1,317 的
                spot 下行幅度、有意义、整段下行都有 spot 被动买
              </span>。4h（往快照走）：价
              <span className="dn-tag bear">−0.16%</span>、OI
              <span className="dn-tag bull">+319 BTC</span>、spot CVD
              <span className="dn-tag bull">Δ +1,818</span>、futures CVD
              <span className="dn-tag bear">Δ −299</span>、big-print
              <span className="dn-tag bull">+4 BTC / 129 prints</span>、
              taker-net
              <span className="dn-tag bear">−299</span>——同一种分歧、
              更极端：<em>spot 把每一根回踩买掉、futures 不停卖</em>。
              1h：价 <span className="dn-tag bull">+0.14%</span>、OI
              <span className="dn-tag">+15 BTC</span>、spot CVD
              <span className="dn-tag bull">Δ +66</span>、futures CVD
              <span className="dn-tag bull">Δ +99</span>、big-print
              <span className="dn-tag bull">+27 BTC / 29 prints</span>、
              taker-net <span className="dn-tag bull">+99</span>——
              <em>最近一根 1h 里 futures 停卖、加入买方（fut CVD 从
              4h 的 −299 翻成 1h 的 +99）</em>；spot CVD 同小时只 +66
              放缓。就是 1h TD9-BUY 反射买盘（印在 $75,915）的第一
              次小反弹。直说：spot 把跌买了 24h、futures 在卖；最近
              60 分钟 futures 停卖、改买。<em>买盘出来了、还没夺过来
              打印的主导权</em>。
              定向放量没有干净的签名——4h 形态还是 spot 领跌-futures
              吸收、只是 1h 翻成两侧同买。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 4h 死叉确认引擎 · 1h TD9 BUY 在底 · MA 全部头顶上</span>
            </h2>

            <p>
              MTF 结构从昨天的 <em>盘整迟疑</em> 翻成了
              <span className="dn-signal">
                引擎 TF 死叉确认 + 底部超卖反转信号同时印
              </span>
              。之前 5 天扛着 pin 的 4h 水下金叉印出一根
              <span className="dn-em">水下死叉 2 bar 前</span>（DIF
              −49.9、MACDh −55.3）——引擎 TF 翻向跟 1h 9 bar 前那根
              同向。1h 印
              <span className="dn-tag">⚡ TD9 BUY</span> @ $75,915——
              超卖反转提示、新一段下行底部典型的逆势 setup 完成。4h
              是 <span className="dn-tag">Buy 8 → 9?</span>（再一根
              close 小于 close[-4] 就完成 setup）。RSI：
              15m <span className="dn-tag">44.8</span>、30m
              <span className="dn-tag">41.0</span>、1h
              <span className="dn-tag">37.6</span>（超卖偏）、4h
              <span className="dn-tag">40.7</span>、8h
              <span className="dn-tag">41.0</span>、12h
              <span className="dn-tag">39.9</span>、1d
              <span className="dn-tag">43.0</span>——比昨天的 ~47–54
              区间整体冷了一档；1h 37.6 是最软的一根、跟 TD9 BUY 一致。
              云图：15m 云下 35b（↑$76.6k）；30m 云下 19b（↑$77.0k）；
              1h 云下 7b（↑$76.8k）；4h 云下 7b（↑$76.9k）；8h 云下
              33b（↑$78.5k）；12h 云下 9b（↑$78.2k）；1d 云上 41b
              （↓$75.4k）；3d 云内（73.5k–92.4k）；1w 云下 17b
              （↑$100.3k）；1M 云上 27b。<span className="dn-em">
                十根 TF 里七根云下（昨天五根）。1d 云顶 $75.4k、距现货
                $555 下方——还在守、但已经很贴；mid-cycle escalate 门
                就在这道线上。今天新加的 data point：4h 水下死叉在引擎
                TF 确认（1h 早就有了）、15m / 30m / 1h Sell-tag 加 1h
                TD9 BUY 在底反射、30m 还有个刚印的水下金叉作快 TF 探
                测——图说「趋势翻空、但卡在第一道严重超卖检查点上、
                TD 反转信号在响」
              </span>。
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD cross</th><th>云（Ichimoku）</th><th>TD</th><th>active div</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">75,915</td><td className="num">44.8</td><td className="bull">water-dn 金叉 16b</td><td className="bear">云下 ↑76.6k 35b</td><td>Sell 5</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">75,910</td><td className="num">41.0</td><td className="bull">water-dn 金叉 刚印</td><td className="bear">云下 ↑77.0k 19b</td><td>Sell 2</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">75,915</td><td className="num">37.6</td><td className="bear">water-dn 死叉 9b</td><td className="bear">云下 ↑76.8k 7b</td><td>⚡ TD9 BUY</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">75,910</td><td className="num">40.7</td><td className="bear">water-dn 死叉 2b · 刚印</td><td className="bear">云下 ↑76.9k 7b</td><td>Buy 8 → 9?</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">75,910</td><td className="num">41.0</td><td className="bull">water-dn 金叉 9b</td><td className="bear">云下 ↑78.5k 33b</td><td>Buy 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">75,915</td><td className="num">39.9</td><td className="bull">water-dn 金叉 5b</td><td className="bear">云下 ↑78.2k 9b</td><td>Buy 3</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1d</td><td className="num">75,915</td><td className="num">43.0</td><td className="bear">water-up 死叉 15b</td><td className="bull">云上 ↓75.4k 41b</td><td>Buy 1</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">75,910</td><td className="num">49.2</td><td className="neut">—</td><td className="neut">云内 73.5–92.4k 8b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">75,915</td><td className="num">44.7</td><td className="bull">water-dn 金叉 6b</td><td className="bear">云下 ↑100.3k 17b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">75,915</td><td className="num">48.4</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 27b</td><td>Buy 7</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    Source: mtf_div_latest.html 00:01Z 扫描（滚动 latest
                    文件；逐字存档于 audits/2026-05-27-desk-note.md）。
                    表头提醒：<em>4h 水下死叉 刚印（2b）</em>——引擎 TF
                    翻成新鲜空叉；<em>1h ⚡ TD9 BUY 印在 $75,915</em>
                    ——超卖反转提示、底部逆势 setup 完成；
                    <em>30m 水下金叉 刚印</em>——快 TF 反向探测。4h Buy
                    8 → 9? 延续。close 都是未收 bar、每一格都按未完成
                    处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵已经整张翻到现货上方。昨天有四根日 MA 紧贴现货
              下方做一道支撑簇（D-SMA50 / D-EMA100 / D-EMA50 /
              D-SMA150 在 +0.25 ~ +0.80%）；今天这四根<span className="dn-em">
                全部翻到上方、变成已破支撑
              </span>：
              <span className="dn-tag bear">D-SMA150 $76,568（−0.80%）</span>、
              <span className="dn-tag bear">D-EMA50 $76,687（−0.95%）</span>、
              <span className="dn-tag bear">D-EMA100 $76,807（−1.11%）</span>、
              <span className="dn-tag bear">D-SMA50 $77,134（−1.53%）</span>、
              <span className="dn-tag bear">D-EMA20 $77,482（−1.97%）</span>、
              <span className="dn-tag bear">W-EMA20 $77,936（−2.54%）</span>、
              <span className="dn-tag bear">W-EMA150 $78,259（−2.94%；seed）</span>、
              <span className="dn-tag bear">D-SMA20 $78,365（−3.08%）</span>、
              <span className="dn-tag bear">D-EMA150 $78,970（−3.82%）</span>、
              <span className="dn-tag bear">D-SMA200 $80,131（−5.21%）</span>、
              <span className="dn-tag bear">D-EMA200 $81,355（−6.64%）</span>。
              下方支撑稀疏：
              <span className="dn-tag bull">W-SMA20 $74,266（+2.27%）</span>、
              <span className="dn-tag bull">W-EMA200 $73,724（+3.03%；seed）</span>、
              <span className="dn-tag bull">D-SMA100 $72,903（+4.19%）</span>
              周期锚。D-EMA50 / D-EMA100 上方簇是结构上的关键：现货在
              05-26 的日 K 上<span className="dn-em">收盘</span>已经在
              D-SMA150 / D-EMA100 下方（$75,905 vs D-SMA150
              $76,568）——本轮 regime 首次日 K 收在簇下。远高且失用：
              W-EMA50 $84.9k（−10.50%）、W-EMA100 $83.3k（−8.78%）、
              W-SMA100 $88.4k（−14.03%）、W-SMA50 $93.4k（−18.69%）。
              <span className="dn-em">
                W-SMA150 / W-SMA200 仍不可算——parquet 历史只 126 根
                周线、不到这两道窗口；W-EMA150 $78,259（−2.94%）和
                W-EMA200 $73,724（+3.03%）能显示是因为 EMA 从可用历
                史种出。MA 锚 parquet 最末 bar 2026-05-27 00:05Z（close
                $75,918.1）、偏移按 live spot $75,955 重算。MA 显示用
                $ 取整、偏移按精确序列算。pin 整张位移了：昨天簇顶是
                D-EMA20 $77,774 / W-EMA20 $78,062 间距 $288；今天意义
                上的门是最近的头顶——D-SMA150 $76,568、再往上经过五
                根 MA 到 W-EMA20 $77,936、整体头顶簇跨度 $1,368（从
                $76,568 到 $77,936）。24h 高 $78,063 把 W-EMA20 撞过
                头 $1 然后正好在那个位置被打回来。
              </span>{' '}
              如果要考虑多再开、reclaim 门已经下降到
              <span className="dn-tag bear">1h 收 &gt; $76,568（D-SMA150）</span>
              做第一道侦察（比昨天 D-EMA20 $77,774 低一大档）——但
              要 SM 那侧停止加空、long_btc 稳在 12k 上方才作数。
            </p>

            <h2 className="dn-sec">
              盘口 <span className="dn-roman">III · GEX +29.9M（泄 $48M）· 29MAY 翻成 −30.65M · $75k −39.9M 加深 · 26MAY 已到期</span>
            </h2>

            <p>
              盘口 γ <span className="dn-em">塌了</span>：
              <span className="dn-tag bull">+29.9M/1%</span>（前 +78.2M、
              −$48.3M——5 日谱系单日最大变化、超过 05-23 → 05-24 那个
              record 短头本子被拆的记录）。0-γ flip
              <span className="dn-tag">飘到 $75,830</span>（前 $75,959、
              下 $129——flip 干脆地跟着价格下来）。现货 $75,955 在
              flip 上方
              <span className="dn-tag bull">+0.16%</span>（spot 口径）；
              GEX 文件自己的 dist-to-flip
              <span className="dn-em">+0.2%</span>（对 Deribit-idx $75,992、
              idx 比 live spot 高 $37；两个口径同号、粒度内一致）。flip
              上方盘口
              <span className="dn-em">技术上还是长 γ</span>、但 razor-thin
              ——+29.9M 这个量级回到 05-15 era 的「轻钉」段、不是谱系
              里 +65–78M 的「重钉」段。墙顶塌一半：
              <span className="dn-tag bull">$80k +29.55M</span>（前
              +53.92M——<em>一夜砍半</em>、承重的簇顶失去大部分重量）、
              <span className="dn-tag bull">$82k +15.64M</span>（前
              +19.83M、缓）、
              <span className="dn-tag bull">$77k +14.54M</span>（top10
              新进——破口附近顶起一道正墙、是 2% 以内唯一一根正）、
              <span className="dn-tag bull">$90k +8.15M</span>、
              <span className="dn-tag bull">$78k +7.78M</span>（前
              +10.06M、缓）、
              <span className="dn-tag bull">$85k +7.59M</span>。负
              pocket <span className="dn-em">显著加深</span>：
              <span className="dn-tag bear">$75k −39.90M</span>（前
              −23.14M——加了 −$16.76M、现在是整张表最重的单根、比 $80k
              正还重 $10M）、
              <span className="dn-tag bear">$74k −15.71M</span>（前
              −11.03M、加重）、
              <span className="dn-tag bear">$76k −13.86M</span>（前
              −12.67M、加重）、
              <span className="dn-tag bear">$60k −8.05M</span> 崩盘
              put 残留基本不动。by-expiry：26MAY 0DTE 已过期
              <span className="dn-tag">+1.68M</span>（昨天那根前正
              expiry 清掉）；
              <span className="dn-tag bear">27MAY26 0.3DTE −7.83M</span>
              （今天到期、净负——跟昨天 26MAY +1.68M 反号）、
              <span className="dn-tag bear">28MAY26 1.3DTE −1.64M</span>、
              <span className="dn-tag bear">29MAY26 2.3DTE −30.65M</span>
              <em>（前 +23.83M——一日之内 $54M 反号、从整条 strip 最
              重正翻成最重负；那个 host 着宏观 put-spread 的到期日
              现在反过来是放大不再是抑制）</em>、
              <span className="dn-tag bull">30MAY26 3.3DTE +0.18M</span>、
              <span className="dn-tag bull">5JUN26 9.3 +3.81M</span>（前
              +8.01M、缓）、
              <span className="dn-tag bull">12JUN26 16.3 +3.45M</span>（前
              +6.06M、缓）、
              <span className="dn-tag bull">26JUN26 30.3 +11.62M</span>（前
              +16.54M、缓——但 29MAY 翻号之后已经是 strip 上最重正的
              expiry）。
            </p>

            <p>
              直话直说：
              <span className="dn-signal">
                之前钉了 5 天的盘口 regime 实质性地走弱、前 expiry 现在
                反过来放大下一波
              </span>
              。+29.9M 总值低于过去 4 天每一天（+78.2M / +65.1M / +66.5M
              / +67.0M）；承重墙顶砍半；$75k 负 pocket 几乎翻倍。盘口
              形态是<span className="dn-em">不再 pin 了</span>——是 $77k–$82k
              的浅正屋顶（合计 ~+67M）压在 $74k–$76k 的深负 pocket
              （合计 ~−69M）之上。29MAY −30.65M 这根翻号是最关键的
              一根印：2.3 DTE 把 $30.6M 负 γ 砸在盘口上、意味着 dealer
              的 Δ 对冲流<em>放大</em>下行（贯穿周末）而不是抑制——跟
              谱系里每一天都反过来。flip 之下破位现在直面整张表最
              重的单根负 γ 墙（$75k −39.90M）外加 29MAY 那个放大器；
              通往 $74,266（W-SMA20）这一段没有正反作用力。上行也更
              弱——破 $77k +14.54M 之后撞上 $77,936 W-EMA20（谱系里
              这堵墙挡过两次）、再上 $80k +29.55M（已经砍半）。
              <span className="dn-em">
                合起来：regime 从钉/抑制翻成中性带前段放大器、flip
                下方破位结构上变快、宏观 put-spread 那个 expiry 正
                好 host 这个放大器。IV 中位数 882 合约
              </span>{' '}
              <span className="dn-tag">42.3%</span>（前 42.4%、平）对
              30D close-to-close RV
              <span className="dn-tag">26.00%</span>（前 25.84%、基本不
              动）——chain 级 richness
              <span className="dn-tag">~+16.3pt</span>（对 05-26 基本
              不动）。这是 N 合约的 chain-median、
              <span className="dn-em">不是</span>可交易价差；expiry- /
              strike-level vega、skew、term structure 仍未载入；vol 读
              法仍是 framework-only。882 合约 vs 昨天 884——25MAY / 26MAY
              0DTE 已经从 chain 里完全 roll 掉。RV 方法：30D close-to-close、
              logret.std × √365 × 100、取 parquet 最末 bar 2026-05-27
              00:05Z 锚定的最后 30 根日收盘（30 根范围 $75,513 – $82,178）。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · FRED Tier-1 解冻 · 首道新鲜印偏松（10Y −1bp、HY OAS −4bp、MOVE −3.5）· 无 re-grow 触发</span>
            </h2>

            <p>
              <span className="dn-signal">
                FRED Tier-1 新鲜印落、每一行重要指标都走松
              </span>
              。面板渲染 2026-05-26 22:16Z、距快照约 1.9h；面板上 10Y、
              TIPS、US-JP 10Y spread 仍带
              <span className="dn-tag stale">stale 4d</span> 标签（Δ
              字段渲染时还没追上）、但 level 列已经刷新。US 10Y nominal
              <span className="dn-tag bull"> 4.56%（−1.0bp）</span>——
              比昨天 4.57% 落 1bp、regime z 缓到
              <span className="dn-tag bear">+2.16</span>（前 +2.24）、
              episodic z 缓到
              <span className="dn-tag bear">+1.33</span>（前 +1.52）——
              仍带 EXTREME RISK-OFF tag、但缓和。10Y TIPS real
              <span className="dn-tag bull"> 2.16%（−2.0bp）</span>（前
              2.18%）、regime z
              <span className="dn-tag bear">+2.09</span>（前 +2.26）、
              episodic z
              <span className="dn-tag bear">+2.00</span>（前 +2.47）——
              仍紧。5Y5Y BE inflation
              <span className="dn-tag">2.27%（+1.0bp）</span>。HY OAS
              <span className="dn-tag bull">
                {' '}2.74%（对 05-26 2.78% 隐含 −4.0bp）
              </span>
              、regime z
              <span className="dn-tag bull">−1.22</span>（前 −0.98——
              <em>更</em>risk-on）、episodic z
              <span className="dn-tag bull">−1.89</span>（前 −1.02——
              episodic 上风险偏好实质性增加、是谱系单日最大改善）；
              MOVE 债市波
              <span className="dn-tag bull"> 75.0（−3.48）</span>——
              比昨天 78.4 明显回落。Fed 净流动性
              <span className="dn-tag bull"> $5.907T（+0.030T）</span>
              ——不动。DXY
              <span className="dn-tag bull">99.14（−0.18）</span>——略松
              （小幅 risk-on 推动）。USD/JPY
              <span className="dn-tag bear">159.29（+0.33）</span>——
              日元更弱（DXY 走松而日元更弱、利率上下文的分歧落在
              cross 上）。US-JP 10Y spread
              <span className="dn-tag">2.04%（−1.0bp）</span>——更窄。
              <span className="dn-em">
                合起来：宏观尾部走松。昨天那张 re-grow 门没有一条朝
                对的方向触发（HY OAS &gt; 3.0% 门——反向落到 2.74%；
                10Y &gt; 4.75% 门——反向落到 4.56%；reclaim-long 利率
                filter 10Y &lt; 4.55%——离 1bp、没破但更近了）。昨天
                这条「唯一能从 BTC 本子之外把 pin 打破的宏观变量」
                来的是<em>偏松</em>；pin 还是破了、是从 BTC 本子<em>
                内部</em>破的——宏观印不是原因
              </span>。
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>level</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>episodic z</th>
                  <th>读法</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y nominal</td><td className="num">4.56%</td><td className="num bull">−1.0bp（新鲜 · 仍带 stale 4d）</td><td className="num bear">+2.16</td><td className="num bear">+1.33</td><td className="bear">紧、缓和 · 面板 tag 滞后</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.16%</td><td className="num bull">−2.0bp（新鲜 · 仍带 stale 4d）</td><td className="num bear">+2.09</td><td className="num bear">+2.00</td><td className="bear">紧、稍缓 · 面板 tag 滞后</td></tr>
                <tr><td>5Y5Y BE inflation</td><td className="num">2.27%</td><td className="num bear">+1.0bp</td><td className="num">+0.48</td><td className="num">+0.61</td><td className="neut">小抬 · 无 tag</td></tr>
                <tr><td>HY OAS</td><td className="num">2.74%</td><td className="num bull">0.0bp 面板 Δ（对 05-26 2.78% 隐含 −4bp）</td><td className="num bull">−1.22</td><td className="num bull">−1.89</td><td className="bull">松 · 谱系单日最大 risk-on</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num stale">−0.523</td><td className="num stale">−0.01（stale 11d）</td><td className="num bull">−0.48</td><td className="num bull">−1.35</td><td className="stale">stale 11d · 中性</td></tr>
                <tr><td>MOVE 债市波</td><td className="num bull">75.0</td><td className="num bull">−3.48（新鲜）</td><td className="num">−0.18</td><td className="num">+0.38</td><td className="bull">波动明显回落</td></tr>
                <tr><td>DXY</td><td className="num">99.14</td><td className="num bull">−0.18</td><td className="num">+0.73</td><td className="num bear">+1.34</td><td className="neut">紧、略松</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.907T</td><td className="num bull">+0.030T</td><td className="num bull">+0.77</td><td className="num bull">+2.16</td><td className="bull">松 · episodic 飙</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.29</td><td className="num bear">+0.33</td><td className="num bear">+1.22</td><td className="num">+0.75</td><td className="bear">日元更弱</td></tr>
                <tr><td>US-JP 10Y spread</td><td className="num">2.04%</td><td className="num">−1.0bp（仍带 stale 4d）</td><td className="num bull">−0.67</td><td className="num bear">+1.33</td><td className="bear">episodic 紧 · 面板 tag 滞后</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7855</td><td className="num bull">−0.01</td><td className="num bull">−1.85</td><td className="num bull">−1.67</td><td className="bull">无 tag · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp（月度）</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不作实时</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗口、summary 00:01Z——
              <span className="dn-em">这是 7 日滚动读、不是今天</span>）。
              非对角均
              <span className="dn-tag">|r| 0.340</span>（比 05-26 的
              0.353 又松一点、仍 NORMAL 段）。BTC 名次：SILVER
              <span className="dn-tag">+0.561</span>（前 +0.569、现在
              是 BTC 最强一根）、NQ
              <span className="dn-tag">+0.551</span>（前 +0.600——续缓）、
              CL
              <span className="dn-tag">−0.530</span>（前 −0.541）、SP500
              <span className="dn-tag">+0.527</span>（前 +0.557）、AMZN
              <span className="dn-tag">+0.471</span>、GOLD
              <span className="dn-tag">+0.470</span>（前 +0.445——增强）、
              NVDA <span className="dn-tag">+0.463</span>（前 +0.465）、
              META <span className="dn-tag">+0.448</span>（前 +0.422）、
              BRENT <span className="dn-tag">−0.447</span>、MSFT
              <span className="dn-tag">+0.430</span>。7d 相对表现：
              <span className="dn-tag bear">BTC −1.11%</span>（从 05-26
              的 +0.19% 翻成明显负——BTC 的 7d 相对落后明显扩大）、NQ
              <span className="dn-tag bull">+4.11%</span>（前 +2.75%——
              加速）、SP500
              <span className="dn-tag bull">+2.37%</span>（前 +1.75%——
              加速）、JP225
              <span className="dn-tag bull">+10.80%</span>（前 +7.36%——
              <em>继续延伸</em>、一天之内 7d 窗口加 +3.4pt）、NVDA
              <span className="dn-tag bear">−3.40%</span>（前 −2.10%——
              再恶化）、AAPL
              <span className="dn-tag bull">+3.39%</span>（前 +3.96%、
              缓）、TSLA
              <span className="dn-tag bull">+7.87%</span>（前 +4.82%——
              延伸）、AMZN
              <span className="dn-tag bull">+2.26%</span>（前 +1.77%）、
              GOOGL
              <span className="dn-tag bull">+0.11%</span>（从 −3.78% 回
              正）；金属翻多——GOLD
              <span className="dn-tag bull">+0.44%</span>（从 −0.23%
              回正）、SILVER
              <span className="dn-tag bull">+3.77%</span>（从 平转正）、
              PLAT <span className="dn-tag bull">+2.02%</span>、PALL
              <span className="dn-tag bull">+1.60%</span>、COPPER
              <span className="dn-tag bull">+3.95%</span>、URNM
              <span className="dn-tag bull">+5.70%</span>；能源还在塌
              ——CL <span className="dn-tag bear">−10.22%</span>、BRENT
              <span className="dn-tag bear">−9.37%</span>、NGAS
              <span className="dn-tag bear">−7.79%</span>。
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 落后从昨天 ~−3.0pt 扩大到今天
                ~−5.2pt（BTC −1.11% vs NQ +4.11%、SP500 +2.37%）。
                TradFi 那侧<em>加速风险偏好</em>（NQ、SP500、JP225、
                金属翻多、MOVE −3.5、HY OAS 落到 2.74%）；BTC
                <em>脱钩往下</em>。今天的盘面是 crypto 内生的、不是宏观
                带的。能源继续塌（没帮也没害）。日本继续延伸 +10.80%
                （BTC-JP225 +0.193 相关低、读不动）。今天的形态是
                谱系里 BTC-vs-宏观最干净的一次背离
              </span>。JGB 月度 2.52% 带 EXTREME RISK-OFF 月 tag——不
              作实时。USD/JPY 159.29、日元更弱（新鲜印）。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · stand-aside 还是对的 · long-trim 警戒按精神响了 · cluster-loses 实质上触发</span>
            </h2>

            <p>
              <span className="dn-signal">
                05-26 那张 stand-aside 本子今天还是对的——但重新介入
                的结构性条件实质上比谱系前四张备忘里任何一张都更近
                门
              </span>。簇顶 reclaim（1h 收 &gt; $77,774 且 SM long_btc
              &gt; 14k）：远不到（最高 1h 收 $77,413.9 @ 11:00Z 05-26
              BJ 19:00、long_btc 在 13:56Z 已经掉到 14k 以下）。reclaim
              更硬（1h 收 &gt; $78,634）：远不到。cluster loses（1h
              收 &lt; $75,959 且 SM &lt; −15k）：字面没同时触（两条腿
              偏差 ~4h——SM 在 14:56Z 摸 −15.7k、第一根 flip 下方 1h
              收在 18:00Z 时 SM 已经回到 −13,425）、<em>但两条腿都
              在同一个 24h 里印了</em>——快照后本子按
              <span className="dn-em">实质上触发</span>处理。long-trim
              警戒（SM long_btc 一根 −2k 而 short 不上）：long 落 3,049
              但 short 上了 +924、字面无、其精神（多被砍 + 空重装）已
              印为混合步。re-stack hostile（SM Δ ≤ −5k 一根分钟推 SM
              &lt; −15k）：13:56Z 步是 Δnet −3,973（&lt;5k 没到 −5k）；
              SM 确实穿过 −15k、但不是一根分钟内做到——门字面无。
              mid-cycle escalates（1d 收破 $75.1k 云）：1d 云顶现在
              $75.4k（昨天 $75.1k——云抬了点）、05-26 日 K 收 $75,905.5
              （高 $505）；未破。宏观尾部 re-grow（HY OAS &gt; 3.0%
              或 10Y &gt; 4.75%）：两边都<span className="dn-em">反向
              </span>落（HY OAS 2.74%、10Y 4.56%）——门朝<em>松的方向
              </em>响（BTC 负相关）。reclaim filter：无一腿真。
              stand-aside 本子在快照<span className="dn-em">平</span>
              收；宏观 put-spread 挂在 29MAY 这个 expiry 上——现在那
              chunk 是负 γ（−30.65M、前 +23.83M）、vega/Δ 对冲流到期
              前会放大不再抑制下行。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">stand-aside · 主交易 · 今天</span>
              <div className="dn-trade-name">
                仍然 flat 定向——让破位的底稳一下、把新阶梯标好、等 SM 那侧停止加空
              </div>
              <div className="dn-thesis">
                现货 $75,955 距新 0γ flip $75,830 上方 $125、所有日 MA
                头顶上、下方唯一像样的支撑是 W-SMA20 $74,266。盘口已
                经不再钉（+29.9M、前 +78.2M；29MAY 翻成 −30.65M；$75k
                −39.90M 现在是整张表最重的单根墙）。SM net 从 −8.8k
                → −12.1k 通过 05:56Z 一根混合步（long −3,049、short
                +924、Δnet −3,973）走完、14:56Z（BJ 22:56）摸 −15,661
                谷、再半数回补到快照 −12,058。盖子在 W-EMA20 $78,062
                / $77,936 封住上行（$78,063 高对那堵墙），底在 $75,959
                flip 裂开（最近 7 根 1h 收里 5 根在 flip 下方、24h 低
                $75,697.8）。retail 在破位过程中重新拥挤回多（57.20%
                多、前 50.21%）——谱系里最差的偏侧。funding 顶在封顶
                +10.95% ann、已经稳坐 6 小时。1h TD9 BUY 印在 $75,915
                （超卖反转提示）、4h Buy 8 → 9? 离引擎 TF setup 完成
                就差一根——两个都是逆势底部信号。今天的交易仍是
                no-trade、除非（a）买盘转化——1h 收 &gt; $76,568 D-SMA150
                且 SM long_btc 稳在 12k 上方且 short_btc 4h 内开始
                落到 24k 下方——或（b）破位延伸——1h 收 &lt; $75,500
                且 SM &lt; −13k 且 short_btc &gt; 25k。提前两边都不
                付：现在做多是顶着引擎 TF 新鲜死叉 + retail 拥挤多 +
                盘口不再抑制；现在做空是把单卖进 $75k −39.9M 负墙加
                底部 TD9-BUY。两边付出的赔率比昨天都差。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">立场</span><span className="dn-lvl-v">flat 定向 · 不开新风险</span></div>
                <div><span className="dn-lvl-k">决定带</span><span className="dn-lvl-v">$74,266（W-SMA20、主撑）↔ $77,936（W-EMA20、盖）</span></div>
                <div><span className="dn-lvl-k">多再开（门下调）</span><span className="dn-lvl-v bull">1h 收 &gt; $76,568（D-SMA150）且 SM long_btc 稳 &gt; 12k 且 short_btc 4h 内落 &lt; 24k——侦察多 0.2R、目标 $76,807（D-EMA100）→ $77,134（D-SMA50）→ $77,482（D-EMA20）</span></div>
                <div><span className="dn-lvl-k">破位延伸（空 setup）</span><span className="dn-lvl-v bear">1h 收 &lt; $75,500 且 SM &lt; −13k 且 short_btc &gt; 25k——延空 0.3R、目标 $74,266（W-SMA20）→ $73,724（W-EMA200 seed）→ $72,903（D-SMA100）</span></div>
                <div><span className="dn-lvl-k">早平空旗（TD9 BUY 确认）</span><span className="dn-lvl-v">SM short_btc 1h 内落 &gt; 1.5k 且 long_btc &gt; 13k——仓位本子转向、视为 1h 收 &gt; $76,568 确认前的多侦察先信号</span></div>
                <div><span className="dn-lvl-k">re-stack hostile 升级（门下调）</span><span className="dn-lvl-v bear">SM 一根分钟 Δ ≤ −3k 推 SM &lt; −15k（门从 −5k 下调；13:56Z 步是 −3,973 而 SM 当日确实穿过 −15k——把门松到今天观察到的步级大小）</span></div>
              </div>
              <div className="dn-gating">
                <b>为什么 stand-aside、不是 break-extend 短：</b>破位是
                新鲜的、仓位本子在窗口内已经压到极致空（SM 谷 −15.7k
                9h 前、已经半数回补了一次）、funding 封顶意味着新开
                空头是在用最高费率被付钱、retail 刚拥挤回多 57.2% 所
                以反指读法偏 BEAR 但时机读法说等回补反弹反射。1h TD9
                BUY 和 4h Buy 8 → 9? 是超卖反转提示、不是趋势反转、
                但在新一段下行底部典型给 1-2 天均值回归买盘。延伸
                空 setup 需要<em>再</em>一段（SM 一根分钟再做出步、或
                spot 在 1h 收上失守 $75,500）才付；提前做空是付给反
                弹的赔率。反之、多再开门 $76,568 D-SMA150 需要仓位
                本子配合（long_btc &gt; 12k 且 short_btc &lt; 24k）
                ——目前快照状态不在——所以多侦察是赔率更好的一边但
                得等门印才动。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">关闭 · long-loaded-hedge 框架 · 周期 1 完成</span>
              <div className="dn-trade-name">
                挤压周期重新分类——加多再砍这一段、一天内闭环
              </div>
              <div className="dn-thesis">
                05-26 那张「long-loaded hedge of intact short」框架
                在 1 个自然日里走完了第一次周期。05-25 06:36Z 那一笔
                +3,819 BTC 的新鲜加多、在 05-26 13:56Z 被砍 3,049 BTC
                （≈ 80% 的加多被拆掉、本子上从加多基线 11,564 起算
                结构上还剩约 +600 BTC）。05-26 还在那 24.5k 的空头
                本子经过一次 +1.1k 延伸（到步点 25.5k）、再加 +1.9k
                延伸（到 15:46Z 峰 27.4k）、然后半数 −2.9k 回补落到
                快照的 24.5k——跟 05-26 端点几乎一样、一个 24 小时内
                几乎完美的来回。SM net 从 −8.8k → −15.7k 谷 → −12.1k
                快照。<span className="dn-em">
                  谱系目前状态：空头那侧重新加到 24.5k 附近（实质上
                  跟 05-26 起点同一水位）、多头那侧回到 05-23/24 的
                  基线（~12k）、net 比 05-26 多空 3.3k。5 日步级节奏
                  （重堆、重堆、两腿回补、加多、混合砍多+加空）未断、
                  第 6 根步按 base rate 落在未来 24h 之内
                </span>。新问题是破底之后明天出来一根新的重堆（目标
                SM &lt; −15k 持续、不只是 55min 谷）还是一根回补（SM
                飙到中性是快反弹）。盘口 29MAY −30.65M 反对易回补
                （vega/Δ 在那个 expiry 放大下行）、$75k −39.90M 反对
                易延伸（位置上的负 γ 双向放大快移动）。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">周期 1 关闭 · 周期 2 setup 在 BJ 13–15 节奏（下一根步 base rate ~24h 之内）</span></div>
                <div><span className="dn-lvl-k">第 5 步 5/5 印</span><span className="dn-lvl-v">混合砍多+加空 @ 2026-05-26 05:56Z（BJ 13:56）· 现货 $76,872 · Δlong −3,049、Δshort +924、Δnet −3,973</span></div>
                <div><span className="dn-lvl-k">SM 谷（最空）在当窗</span><span className="dn-lvl-v">−15,661 BTC @ 2026-05-26 14:56Z（BJ 22:56）· 现货 $77,026 · 持续 sub −15k 约 55 分钟</span></div>
                <div><span className="dn-lvl-k">步后价格路径</span><span className="dn-lvl-v">步 $76,872 → 24h 高 $78,063（+$1,191）→ 24h 低 $75,697.8（步价 −$1,174）→ 快照 $75,955（步价 −$917）</span></div>
                <div><span className="dn-lvl-k">步级节奏</span><span className="dn-lvl-v">5 日连续 · 全在 BJ 13–15 窗口 · 第 6 根步 base rate ~24h 之内（今天 BJ 13–15、即 2026-05-27 05:00–07:00Z）</span></div>
              </div>
              <div className="dn-gating">
                <b>重新分类的教训：</b>05-26 那个「long-loaded hedge」
                框架准确诊断出谱系是 fragile——它的预测「快 long-trim
                会让 net 在几分钟内回到 −12k+」几乎按字面发生（long
                一根分钟被砍 3.0k；net 同一分钟 −9.4k → −13.3k）。
                框架唯一漏掉的是字面 long-trim 警戒门里那条「short 不
                上」——今天的步是混合（long −3,049{' '}
                <em>且</em> short +924）、比纯 long-trim 更恶劣。周期
                2 修订门：去掉「short 不上」这条；触发是「long_btc
                一根分钟落 &gt; 2k」就算、不管 short_btc 的符号。周
                期 2 base rate：BJ 13–15 窗口再来一根步、预期今天
                （2026-05-27 05:00–07:00Z）落、方向取决于快照到步
                的路径再读。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">宏观尾部 · 对冲 · 持仓 · 结构性变化</span>
              <div className="dn-trade-name">
                下行 put-spread——0.15R 残留持仓、expiry γ 反号成放大器
              </div>
              <div className="dn-thesis">
                宏观 Tier-1 解冻、每一行重要指标都走松（10Y −1bp 到
                4.56%、TIPS −2bp 到 2.16%、HY OAS 隐含 −4bp 到 2.74%、
                MOVE −3.5 到 75.0）；re-grow 门没有一条朝对方向触、
                HY OAS 现在距 3.0% 门 ~26bp（昨天 ~22bp——离门更远了）。
                reclaim-long 利率 filter 10Y &lt; 4.55% 离 1bp（昨天
                2bp——更近一步）。Tier-1 每一行 regime z 都缓和。
                <span className="dn-em">
                  但 host 着 put-spread 的 expiry（29MAY26 2.3 DTE）
                  从 +23.83M 一天之内翻成 −30.65M——$54M 反号——对冲
                  现在坐在一个负 γ chunk 里。dealer 在 expiry 前的
                  对冲流会放大不再抑制朝着 strike 的下行。对冲还有
                  2.3 个自然日到期；结构上 expiry 的 γ 上下文是谱系
                  里对长 put-spread 最有利的（放大器帮助）、但宏观
                  那条带朝错的方向紧（re-grow 门走远）
                </span>。合：尺寸不变持仓、读法从「对慢 regime z 的
                尾部保险」转成「BTC 内部破位延伸时的结构性放大器」。
                到 5JUN26（9.3 DTE、+3.81M dealer γ、抑制更轻）是
                29MAY 到期之后自然的下一程、新鲜 strike chain pull
                之后再算 sizing。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">结构</span><span className="dn-lvl-v">多 $74k / 空 $70k put</span></div>
                <div><span className="dn-lvl-k">到期</span><span className="dn-lvl-v">29-MAY-26（2.3 DTE）——现在是负 γ host（−30.65M、前 +23.83M）；到期后 roll 到 5JUN26 9.3 DTE +3.81M</span></div>
                <div><span className="dn-lvl-k">本备忘动作</span><span className="dn-lvl-v">持 0.15R · 不加（宏观印松、re-grow 门走远）· 不减（BTC 内部破位让 put-spread 结构上有利、独立于宏观）</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（今天印之后新门）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.85% close（门上调、现在 2.74%）或 10Y &gt; 4.60% close；1d 收破 $75.4k 云 → 加到主</span></div>
                <div><span className="dn-lvl-k">reclaim-long filter</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close（离 1bp——下一道 Tier-1 印更近触发）</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>strike/权利金/Greeks 未载入——结构示意、
                尺寸待 Deribit 29-MAY chain 拉数。29MAY −30.65M 这根
                反号是谱系里单 expiry GEX 最大变化；一份既对冲 BTC
                内部破位、又借宏观走松走顺的可交易价差、未来 2.3 天
                结构上吃得开。到期之后对冲要往前 roll；5JUN26（9.3
                DTE）+3.81M dealer γ（比 29MAY 翻号前还轻的抑制）、
                但 strip 上重型 expiry 26JUN（+11.62M）和 25SEP
                （+12.78M）仍正——盘口本子整体上还是长 γ（合计 +29.9M、
                勉强）。
              </div>
            </div>

            <h2 className="dn-sec">
              决定条件{' '}
              <span className="dn-roman">VI · pin 破 · 周期 2 步今天 BJ 13–15 落 · 1h TD9 BUY 是回补反弹旗</span>
            </h2>

            <p>
              05-26 那七条决定条件里：cluster-loses{' '}
              <em>实质上</em>触（两条腿都在 24h 内印、偏差约 4h）；
              long-trim 警戒按<em>精神</em>响（混合步：long −3,049 +
              short +924）；re-stack hostile 门在一根分钟 Δ 那条上
              <em>险险</em>没踩（13:56Z 步是 Δnet −3,973、不到 −5k）；
              簇顶 reclaim 远不到（最高 1h 收 $77,413.9、低于
              $77,774 门）。宏观 re-grow 门两边都<em>反向</em>（朝
              松走）。mid-cycle escalate 门未破（1d 收 $75,905.5 vs
              云顶 $75.4k）。reclaim filter 无一腿真。
              <em>七条里三条按精神响、但只有零条按字面响</em>。今天
              的条件围绕一个已破的 pin 和过载的空头本子重新排列；周
              期 2 的节奏是新的 top-watch 行：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水平</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>多再开（门下调到 D-SMA150）</td><td className="bull">1h 收 &gt; $76,568（D-SMA150）且 SM long_btc &gt; 12k 且 short_btc &lt; 24k 4h 内</td><td>侦察多 0.2R、目标 $76,807（D-EMA100）→ $77,134（D-SMA50）→ $77,482（D-EMA20）</td></tr>
                <tr><td>多再开更硬</td><td className="bull">SM net &gt; −8k 持续 且 1h 收 &gt; $77,482（D-EMA20）</td><td>加 +0.2R、目标 $77,936（W-EMA20）——撞到两度封住的盖</td></tr>
                <tr><td>周期 2 节奏——BJ 13–15 今天（2026-05-27 05:00–07:00Z）</td><td>节奏窗口出一根 SM 步、方向条件</td><td>等步印之后再按方向给本子</td></tr>
                <tr><td>破位延伸（空 setup）</td><td className="bear">1h 收 &lt; $75,500 且 SM &lt; −13k 且 short_btc &gt; 25k</td><td>延空 0.3R、目标 $74,266（W-SMA20）→ $73,724（W-EMA200 seed）→ $72,903（D-SMA100）</td></tr>
                <tr><td>re-stack hostile（门下调）</td><td className="bear">SM 一根分钟 Δ ≤ −3k 推 SM &lt; −15k</td><td>视为下一次 reclaim $76,568 时的即刻空 setup</td></tr>
                <tr><td>早平空旗（TD9 BUY 确认）</td><td className="bull">SM short_btc 1h 内 −1.5k 且 long_btc &gt; 13k</td><td>1h 收 &gt; $76,568 确认前的多侦察先信号</td></tr>
                <tr><td>mid-cycle 升级</td><td className="bear">1d 收 &lt; $75,400（云顶 ↑ 1d 云）</td><td>尾部转主（0.3R）、空不分 SM 直接开</td></tr>
                <tr><td>宏观尾部 re-grow（05-27 印之后新门）</td><td className="bear">HY OAS &gt; 2.85% 或 10Y &gt; 4.60% close（明天的 Tier-1 印）</td><td>尾部 +0.1R 转主</td></tr>
                <tr><td>reclaim filter 确认</td><td className="bull">SM net &gt; −5k 持续 且 10Y close &lt; 4.55% 且 1h 收 &gt; $76,568</td><td>侦察多 0.2R（独立于多再开本子）</td></tr>
              </tbody>
            </table>

            <p>
              <em>这</em>一篇会被改写的那一根线、是
              <span className="dn-signal">
                周期 2 那根步是不是按 base rate 落在今天 BJ 13–15
                窗口里。方向不可测（谱系到目前为止已经各种形态：
                重堆、重堆、两腿回补、加多、混合砍多+加空——每一种
                都印过）。时机几乎确定
              </span>。在那根步印（或者 1h TD9 BUY @ $75,915 转化为
              真正的回补反弹把现货抬过 $76,568 D-SMA150）之前、本
              备忘按字面执行：flip 定向、宏观尾部在结构性更利的
              expiry γ 上下文里持仓、挤压框架周期 1 关闭、周期 2
              setup pending。今天的宏观印走松（每一行重要指标都松）；
              BTC 内部的破位是内生的——把 pin 打破的新鲜数据点来自
              仓位本子、不是宏观带。TradFi 引擎加速风险偏好（NQ 7d
              +4.11%、JP225 7d +10.80%、MOVE −3.5、HY OAS 落到 2.74%）；
              BTC 脱钩走下。这是谱系里最干净的一次背离、是最干净
              的一次「BTC 跟宏观风险偏好走」假设的反例（过去 7 天
              里）。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计 · 0 CRITICAL · 0 HIGH + 4 MED + 2 LOW 全部已修）
            </span>
            <b>Codex CLI 0.132.0 把敌对式审计跑干净——empty-stdin 管道
            管住、未发生 TTY 阻塞。</b>零 CRITICAL、零 HIGH；六条
            findings 全部 EN+ZH 同步修复：{' '}
            (a) <b>F-01 · MED</b> &mdash; <em>funding 路径时间 UTC/BJ
            互换、分钟 Δ 计数差一</em>：funding 数值正确（live ×1095
            = +10.95% ann、24h 均值 +7.15%、区间 +1.88% / +10.95%
            ——05-15 ×100 地雷未复发）、但 §I 路径时间是把 BJ 值打
            上 &ldquo;Z&rdquo;。两语言均改写：谷点
            <code> 2026-05-26 09:50Z（BJ 17:50）</code>、封顶起点
            <code> 2026-05-26 18:02Z（BJ 02:02 05-27）</code>；分钟
            Δ <code>343 上 / 365 下 / 732 平</code>（v1 是
            343/364/733）；&ldquo;funding 谷点在 SM 谷点之后约 5
            小时&rdquo;的描述也搞反了——funding 谷点其实在 SM 谷点
            之<em>前</em>约 5 小时。{' '}
            (b) <b>F-02 · MED</b> &mdash; <em>实时盘面不原子：premium /
            skew / 窗口流向取自 00:09Z 文件尾、而本备忘声明 00:08Z
            </em>：所有 live-tape 衍生量重新锚定到 line 34169（00:08Z）。
            快照 premium <code>−$120.10</code>（前 −$108.26 来自
            00:09Z line 34170）；skew 快照 <code>+37.1</code>（前
            +39.0）；24h 窗口更新为
            <code>价 Δ −1.71% · OI −660 · spot CVD +984 · fut CVD
            −288 · big-net −487 · taker-net −288</code>；4h 更新为
            <code>价 Δ −0.16% · OI +319 · spot CVD +1,818 · fut CVD
            −299 · big-net +4 · taker-net −299</code>；1h 更新为
            <code>价 Δ +0.14% · OI +15 · spot CVD +66 · fut CVD +99
            · big-net +27 · taker-net +99</code>。叙事保留（24h
            spot-CVD 仍把下跌买掉 +984；1h fut CVD 从 −299 翻成
            +99——「futures 加入买方」的读法继续成立）。{' '}
            (c) <b>F-03 · MED</b> &mdash; <em>SM 谷点 dn-meta 时间
            UTC/BJ 互换 + sub-15k 区间端点错位</em>：dn-meta 写了
            <code>22:56Z（BJ 06:56）</code>、正确是
            <code>14:56Z（BJ 22:56）</code>。sub-15k 区间从 v1 的
            <code>BJ 22:53–23:48 / UTC 14:53–15:48</code> 改成实际的
            <code>BJ 22:46–23:40 / UTC 14:46–15:40</code>（55 分钟
            duration 不变、端点修 7 分钟）。两语言同步。{' '}
            (d) <b>F-04 · MED</b> &mdash; <em>MTF 表当前滚动源无法
            校核</em>：page 用的 00:01Z 扫描值已经不可复现、因为
            <code>mtf_div_latest.html</code> 在审计时已经滚到 00:31Z
            （谱系 05-22 F-02 / 05-23 F-02 / 等）。补救：把 00:01Z
            扫描原文逐字存档到
            <code> audits/2026-05-27-desk-note.md</code>。manifest
            带已经把这条作为已知的滚动可 pin 性差距披露。{' '}
            (e) <b>F-05 · LOW</b> &mdash; <em>trade block 写「现货
            $95 在新 flip 上方」，那个 $95 属于另一个对比</em>：
            快照 $75,954.99 对新 flip $75,830 = 在上方 $125；$95
            是 v1 lead 从前一日的步价对比里误带过来的。订正为
            <code>距新 0γ flip $75,830 上方 $125</code>；lead 改成
            <code>离前 flip $75,959 仅 $4 在下方——已经在新 flip
            $75,830 上方 $125</code>。{' '}
            (f) <b>F-06 · LOW</b> &mdash; <em>DXY Δ 方向写反</em>：
            macro 源是 DXY 99.14、Δ −0.18（小幅 risk-on）、不是
            +0.09。改为 <code>99.14（−0.18）——略松</code>（prose
            和 Tier-2 表都同步）。Tier-1 / Tier-2 解冻叙事不受影响
            （DXY 是细线、方向跟 HY OAS / MOVE / TIPS 走松一致）。{' '}
            Codex 明确清单内通过：funding × 1095 magnitude（无 ×100
            地雷重现；pin funding 0.01000 × 1095 = +10.95%、24h
            均值 +7.15%、区间 +1.88% / +10.95%、cap 段从 BJ 02:02
            05-27 起 367 条记录到 pin）、GEX dual-reference 同号
            （flip $75,830、total +29.9M、距 +0.16% 对 live spot
            $75,955 / +0.2% 对 Deribit-idx $75,992——干净同号）、
            GEX 墙和 by-expiry strip（29MAY −30.65M 从前日 +23.83M
            反号；26JUN +11.62M 现为最重正 expiry；$75k −39.90M
            整表最重单根；$80k 顶墙砍半到 +29.55M）、MA 矩阵
            （D-SMA150 −0.80% / D-EMA50 −0.95% / D-EMA100 −1.11% /
            D-SMA50 −1.53% / D-EMA20 −1.97% / W-EMA20 −2.54% 头顶簇；
            W-SMA150/200 不可算、W-EMA150 / W-EMA200 seed 值披露）、
            30D RV 25.97% 入页面 26.00%、claims-vs-loaded-data
            纪律（NTT / max-pain / strike-IV / BTC-NQ 仅 framework-only
            · IV chain-median 882 合约 · 跨资产框为 7d 滚动非「今天」
            ）、SM 步链（混合步 @ 05-26 05:56Z = BJ 13:56 spot
            $76,872、Δlong −3,049 / Δshort +924 / Δnet −3,973；
            sm_net 谷 −15,661 @ 14:56Z = BJ 22:56 line 33617；
            55 分钟 sub-15k duration）、requireViewer gating 模式
            （两路径、首语句）、index <code>&lt;li&gt;</code> 增项
            （newest-first、EN「The long got cut and the flip cracked」
            / ZH「加多在簇顶被砍 · flip 裂开」）、trade book gating
            纪律（页面把 cluster-loses 写「实质上触发」、long-trim
            写「按精神响」、不是死守上一篇）、宏观 Tier-1 解冻方向
            （10Y −1bp 到 4.56%、TIPS −2bp 到 2.16%、HY OAS 到 2.74%
            level 已刷新但 Δ 字段仍标 stale-lag、MOVE 75.0 −3.48
            ——全部走松；昨天 re-grow 门没一条朝对方向触发）。源
            审计记录加 00:01Z MTF 扫描全文归档在
            audits/2026-05-27-desk-note.md。{' '}
            <b>Build 注（INFO）：</b>服务器 Node 18.19.1；Next 16.2.6
            在 Node &lt; 20.9.0 时硬退出于
            <code> node_modules/next/dist/bin/next:24-28</code>、所以
            完整 <code>next build</code> 受环境阻塞（谱系 05-21 / 05-22
            / 05-23 / 05-24 / 05-25 / 05-26）。
            <code> npx --no-install tsc --noEmit</code> 退码 0
            （TypeScript 干净）、为 build proxy。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是 Hysteresis Research 主理人之间内部讨论用的交
            易台工件、
            <em>非投资建议、非要约、非要约邀请</em>、不针对任何接
            收方的具体情况。数字反映单个原子快照（2026-05-27 00:08Z）
            、各节出处在上方 manifest 内逐条披露；宏观 Tier-1
            刚解冻（本周首道新鲜印在 05-26 晚段美时落地；面板渲染
            上一部分行仍带 stale-4d 标签是 Δ 字段没刷新、level
            列已经更新）。水平、尺寸和条件是台子流程的示意、不
            是常驻建议。过去的相关性、γ 和仓位形态不约束未来的盘
            面。衍生品有亏完保证金、且在杠杆下亏出保证金以上的
            风险。<em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                加多在簇顶被砍。flip 裂开。pin 破了；周期 2 在下一个 24h 内开始。
              </div>
              <div className="dn-sign-name">Desk · BTC derivatives</div>
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
            v2 · 2026-05-27 00:08Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
