import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-05-26 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-05-26',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-05-26' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260526() {
  await requireViewer('/zh/desk/2026-05-26');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HR · BTC · 交易台备忘 · 2026-05-26 · v2</span>
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
              <span className="dn-big">$77,272</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.10%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-05-26 00:08Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-05-26 00:08Z（pin 锁定）</td>
                  <td className="dn-flag">最新 · 1 分钟 · 审计时文件 tail 在 00:09Z</td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-05-26 00:01Z scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 较快照锚滞后约 7
                    分钟 · 含未收盘 K 线 · 扫描存档于
                    audits/2026-05-26-desk-note.md
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 00:01Z 快照</td>
                  <td className="dn-flag">
                    最新 · Deribit idx $77,365 对现货 $77,272 · 884 合约
                    （前 930 · 25MAY 0DTE 已过期）
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
                  <td className="dn-v-cell">macro_dashboard.html · 2026-05-25 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.9h · FRED Tier-1 自 05-22 印起冻结（美国
                    阵亡将士纪念日长周末；面板自身将 10Y / TIPS / HY OAS /
                    US-JP 标为「stale 4d」）· 第一道 Tier-1 新鲜印在今日
                    美时
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-05-26 00:06Z</td>
                  <td className="dn-flag">
                    较快照锚滞后约 2 分钟 · 偏移按现货重算
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
              <span className="dn-v bear">+8.54%</span>
              <span className="dn-src">live · 00:08Z · 24h 均值 +4.16% · 多头付费晚段重新拉热</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v">+7.12% → +8.54%</span>
              <span className="dn-src">区间 +1.36% / +9.15% · 谷点 15:52Z · 493 上 / 455 下 / 492 平</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">+0.78%（+770 BTC）</span>
              <span className="dn-src">live · long_btc +4.61k（加多）；short_btc −0.30k（基本不动）</span>
            </div>
            <div>
              <span className="dn-k">Binance mkt long/short</span>
              <span className="dn-v">50.21 / 49.79</span>
              <span className="dn-src">live_db `mkt_long_pct` · 继续走薄 53.96 → 50.21（基本平水）</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−8.8k（净 SHORT）</span>
              <span className="dn-src">live · long 15.66k − short 24.46k · 4 日谱系里最高（最少净空）</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 05-25 备忘</span>
              <span className="dn-v bull">−13.7k → −8.8k（+4.91k 净空减少）</span>
              <span className="dn-src">峰值 −8.79k @ 2026-05-25 22:26Z · 步在 05-25 06:36Z（BJ 14:36）+3.82k 多</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.4% / 25.84%</span>
              <span className="dn-src">GEX IV 中位数 · 884 合约</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+1.73%（在上方）</span>
              <span className="dn-src">flip $75,959 · aggregate GEX +78.2M（前 +65.1M）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              昨天「按兵不动继续」的判断按字面是对的：
              <span className="dn-signal">
                七条决定条件无一触发
              </span>
              （没有一根 1h 收盘 &gt; $78,049 簇顶、没有一根 1h 收盘 &lt;
              $75,969 flip、没有 SM 一分钟离散步 ≤ −5k、没有 1d 收盘
              破 $75.1k 云、FRED 面板冻结无新数、reclaim filter 三条腿
              都没真）。现货被钉在
              <span className="dn-tag">$936 24h 幅度</span>内
              （<span className="dn-tag">$76,930</span> @ 2026-05-25
              01:59Z（BJ 09:59）→ <span className="dn-tag">$77,866</span>
              @ 2026-05-25 15:13Z（BJ 23:13）），窗口收在
              <span className="dn-tag">$77,272</span> live（24h +0.10%）。
              下面这一层、状态却在一处具体地方变了：
              <span className="dn-signal">
                SM 连续第二天净空减少——但这次是加多（long-add），
                不是平空（short-cover）
              </span>。
              一根离散硬步落在
              <span className="dn-tag">2026-05-25 06:36Z（BJ 14:36）</span>
              、现货 <span className="dn-tag">$77,367.50</span>：long_btc
              一分钟之内从 <span className="dn-tag">11,564</span> 跳到
              <span className="dn-tag">15,383</span>——
              <span className="dn-tag">+3,819 BTC 多头开仓</span>；
              short_btc 同一分钟只动了
              <span className="dn-tag">−285 BTC</span>（24,587 → 24,302、
              基本不动）。SM net 一分钟之内由
              <span className="dn-tag">−13,022</span> 走到
              <span className="dn-tag">−8,919</span>，之后慢慢漂到
              24h 峰值（最少净空）<span className="dn-tag">
              −8,789 BTC</span>，落在
              <span className="dn-tag">2026-05-25 22:26Z（BJ 06:26）</span>
              ；快照读 <span className="dn-tag">−8,801 BTC</span>。
              4 天硬步节奏未断：05-22 06:30Z 加空、05-23 05:00Z 加空、
              05-24 05:11Z + 05:16Z 两腿回补（平空 + 开多）、
              05-25 06:36Z 单腿加多——每次都在北京下午同一窗口、
              连续 4 天。价格做了和 05-24 一样的事：
              <span className="dn-signal">没有跟</span>。
              从步的位置 $77,367 起、现货向上走 +$499 到 $77,866、
              又下来——现报 $77,272、比步还低 $95。
              按 +3,819 BTC 新加的多头对步入场 $77,367 估，浮亏 ~$0.36M；
              若把步后 15,383 BTC 整本多头按步价记（其余在不同基差预先
              开仓，这是上界），book-mark ~$1.46M 浮亏。
              <span className="dn-em">
                回补继续了。空头没关。SM 是在对冲、不是在平。
                05-23 创纪录空头那一摞 squeeze 燃料技术上还在
                （短头账本 24.46k 对 33.5k 峰值——只缩了 27%——
                对昨天单分钟内平掉 −9.9k 的执行来说差很多）；
                被消耗的是多空失衡这一侧。SM net −8.8k 是 4 日谱系
                里最高（最少净空）；空头侧 24.5k 仍然实实在在地堆着。
              </span>
            </p>

            <p>
              BTC 现报 <span className="dn-tag">$77,272</span>、24h
              +0.10%，在新 <span className="dn-tag">0γ flip
              $75,959</span> 上方 +1.73%（flip 较昨天 $75,969 漂下
              $10，基本平）；日 MA 簇位略有变形：
              <span className="dn-tag">D-SMA50 $77,080 (+0.25%)</span>、
              <span className="dn-tag">D-EMA100 $76,852 (+0.55%)</span>、
              <span className="dn-tag">D-EMA50 $76,770 (+0.65%)</span>、
              <span className="dn-tag">D-SMA150 $76,657 (+0.80%)</span>
              在簇下（D-EMA50 由昨天的「现货之上」走到今天的
              「现货之下」）；
              <span className="dn-tag bear">D-EMA20 $77,774 (−0.64%)</span>、
              <span className="dn-tag bear">W-EMA20 $78,062 (−1.01%)</span>、
              <span className="dn-tag bear">W-EMA150 $78,276 (−1.28%)</span>、
              <span className="dn-tag bear">D-SMA20 $78,634 (−1.73%)</span>
              在簇上。aggregate dealer gamma
              <span className="dn-signal">变重</span>：
              <span className="dn-tag bull">+78.2M/1%</span>
              （前 +65.1M——加了 $13.1M 的抑制）。$80k call 墙加厚到
              <span className="dn-tag bull">+53.92M</span>（前 +51.30M）。
              簇下负向口袋变形了：
              <span className="dn-tag bear">$76k −12.67M</span>
              （前 −8.75M——负向加重 $3.9M、正好在步的位置）、
              <span className="dn-tag bear">$74k −11.03M</span>
              （前 −8.90M——变重）、
              <span className="dn-tag bear">$75k −23.14M</span>
              （前 −27.06M——松了 $3.9M）。funding 当窗中段冷得很
              （24h 谷点 <span className="dn-tag">+1.36% 年化在
              15:52Z</span>），晚段重新拉热到 24h 峰值
              <span className="dn-tag">+9.15%</span>（23:17Z）；
              现报 <span className="dn-tag">+8.54% 年化</span>、1h 均
              +8.98%、24h 均 <span className="dn-tag">+4.16%</span>
              （较 05-25 +8.90% 均值显著走凉的一天）。OI 24h
              <span className="dn-tag bull">+770 BTC（+0.78%）</span>
              ——是 SM 加多 +4.61k 的结构脚印（非 SM 账户净关掉了一部分
              多空失衡）。
              <span className="dn-em">
                按顺序读：回补继续以加多形式发生；现货拿不下簇顶；
                dealer 账本在当前位置加厚（多头一侧的上盖在 $80k +53.92M、
                多头一侧的下方 $76k 负向变重）；空头堆着没动；funding
                先凉后热。钉位更宽、dealer 更重；仓位面由「空头堆叠」
                变成「多头堆叠」。下一个变量是：SM 是不关空头先把
                新加的多头削掉（净仓快速回堆短）、还是新多接住
                $77,774 的干净突破（强制多侧 re-engage 门触发）。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位结构 <span className="dn-roman">I · 实时盘面 · 加多没把价格抬起来</span>
            </h2>

            <p>
              加多硬步是这一节真正重要的格子。
              <span className="dn-tag">2026-05-25 06:36Z（BJ 14:36）</span>
              、现货 <span className="dn-tag">$77,367.50</span>
              （前一分钟 06:35Z 现货 $77,360.58、long_btc 11,564）：
              long_btc 一分钟之内由 <span className="dn-tag">11,564</span>
              跳到 <span className="dn-tag">15,383</span>——
              +3,819 BTC 多头开仓；short_btc 只由
              <span className="dn-tag">24,587</span> 到
              <span className="dn-tag">24,302</span>（−285 BTC、
              基本不动）。SM net 一分钟之内由
              <span className="dn-tag">−13,022</span> 到
              <span className="dn-tag">−8,919</span>。步后 06:37Z：
              long 守 15,383、short 守 24,302、net −8,919、现货 $77,420。
              和 05-24 的两腿回补质上不一样——05-24 是 <span
              className="dn-em">五分钟之内两根</span>分开的硬步、
              第一根 +5.2k 开多、第二根 −9.9k 平空（两条腿都参与、
              空头账本被一路压到 23.6k）；今天 06:36Z 是同一北京下午
              窗口里的<span className="dn-em">一根单腿加多</span>、
              空头账本几乎没动。从 −8.92k 步谷起、SM 在 −10k 之上停了
              <span className="dn-tag">668 分钟（约 11.1 小时）</span>
              （较 05-24 的 189 分钟约 3.5×），24h 峰值（最少净空）
              印在 <span className="dn-tag">−8,789</span>，落在
              <span className="dn-tag">2026-05-25 22:26Z（BJ 06:26）</span>
              、现货 $77,362——和步那一根的现货几乎一致、16 小时之后。
              快照 SM <span className="dn-tag">−8,801 BTC</span>——
              较 22:26Z 峰多了 ~12 BTC 净空（基本平于峰）、较 06:36Z
              步少了 +118 BTC 净空、~17.5 小时漂。
              <span className="dn-em">
                回补发生了——又一次。价格没转换——又一次。现货从步的
                $77,367 向上 +$499 到 $77,866（BJ 23:13）被簇顶更宽的
                墙挡住、回吐到 $77,272——较步的入场 −$95。
                按 +3,819 BTC 新加的多头对步入场 $77,367 估，浮亏 ~$0.36M；
                若把步后 15,383 BTC 整本多头按步价记（其余在不同基差
                预先开仓，这是上界），book-mark ~$1.46M。仓位面把
                加多吸收了、没付出代价——和它在 05-24 把回补吸收的
                方式一模一样。
              </span>
            </p>

            <p>
              杠杆面给的是一个迷糊的结果。funding live
              <span className="dn-tag">+8.54% 年化</span>——端点较昨天
              +7.12% 快照看着升 +1.42pt，只是窗口端点的偶然：当窗里 funding
              由 +7.12% 一路跌到 <span className="dn-tag">+1.36%
              谷点（15:52Z）</span>（BJ 23:52、步后 9.5 小时）、之后
              晚段一路爬升到 24h 峰值
              <span className="dn-tag">+9.15%（23:17Z）</span>、
              现回到 +8.54%。<span className="dn-em">
                按路径读、不按端点读：加多把多头付费 funding
                急冷（步后到谷点 −5.8pt），因为新多头已经被吃掉了；
                晚段又把 funding 急热（谷到峰 +7.8pt），因为追涨者
                继续从 $77,400 区域往 24h 高跟
              </span>。24h 均年化
              <span className="dn-tag">+4.16%</span>——较 05-25
              +8.90% 均值显著走凉；分钟级
              <span className="dn-tag">493 上 / 455 下 / 492 平</span>
              （净 38 上）。OI <span className="dn-tag bull">+770 BTC
              （+0.78%）</span>：SM 加 +4.61k 多、空 +0.30k 关掉（小腿）、
              但 OI 净增只 +0.77k——意味非 SM 账户净关掉了 ~3.9k 的
              头寸把 SM 多头吃出来的空填回。Binance 散户
              <span className="dn-tag">mkt_long_pct 50.21%</span>
              （从 53.96%）——基本平水，这条谱系里最薄的一次。
              perp 较现货 <span className="dn-tag bear">−$59.74</span>
              折价（1h 均 −$72、区间 −$92 / −$43；24h 均 −$81、区间
              −$180 / −$2）——较昨天 −$88 快照略收窄但结构上仍负；
              <span className="dn-em">
                正向 funding 仍叠在负基差之上——和 05-25 同样的背离
                （多头 perp 持仓被 rolling 成本付、不是被一个可交易
                价差付），今天略不极端，因为基差收窄
              </span>。1 分钟 aggressor skew 快照
              <span className="dn-tag bear">−18.7</span>（1h 均 +4.4、
              区间 −36 / +36；24h 均 +2.4——按点读、不按窗口读）。
            </p>

            <p>
              分窗 flow 反过来了。24h：价格
              <span className="dn-tag bull">+0.10%</span>，OI
              <span className="dn-tag bull">+770 BTC</span>，spot CVD
              <span className="dn-tag bull">Δ +171</span>，futures CVD
              <span className="dn-tag bull">Δ +845</span>，big-print
              <span className="dn-tag bull">+1,210 BTC / 786 印</span>，
              taker-net <span className="dn-tag bull">+852</span>——
              <span className="dn-em">
                今天是期货带的一天、和昨天的现货带完全反过来：
                futures CVD 做了 spot CVD 5 倍的活（+845 对 +171）。
                和加多的故事吻合——SM 新加的 3,819 BTC 永续多头是
                期货侧的印；现货侧几乎没干什么
              </span>。4h（到快照）：价格
              <span className="dn-tag bear">−0.24%</span>，OI
              <span className="dn-tag bull">+105 BTC</span>，spot CVD
              <span className="dn-tag bull">Δ +203</span>，futures CVD
              <span className="dn-tag bull">Δ +344</span>，big-print
              <span className="dn-tag bear">−87 BTC / 107 印</span>，
              taker-net <span className="dn-tag bull">+350</span>——
              期货仍领。1h：价格 <span className="dn-tag">−0.01%</span>，
              OI <span className="dn-tag bear">−13 BTC</span>，spot CVD
              <span className="dn-tag bull">Δ +240</span>，futures CVD
              <span className="dn-tag bull">Δ +92</span>，big-print
              <span className="dn-tag bull">+58 BTC / 30 印</span>，
              taker-net <span className="dn-tag bull">+102</span>——
              最后 1h <em>现货</em>接过领跑、期货领的味道在消退。
              按顺序读：24h 形状是
              <span className="dn-signal">
                加多窗口期货带、最后 1h 现货跟
              </span>
              ；当天 $936 的幅度由早段 perp 加仓（步在 $77,367）
              加晚段现货小买（小买进 $77,272）合起来扛——
              没有干净的方向性成交印记、两边都参与、两边都吸收。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 地图 · 1h 死叉更新 · 4h 失云 · 钉位略松</span>
            </h2>

            <p>
              今天的 MTF 是个
              <span className="dn-signal">
                走得有点前的分裂图：05-25 的中周期水下金叉（4h / 8h / 12h）
                仍在但越老越没 ratify、1h 水上死叉更新到 6b（昨天 10b）、
                4h 刚失云顶（云下 1b）、最快 TF 印了一根新的 15m 水下金叉
                （1b）
              </span>。RSI：15m <span className="dn-tag">47.2</span>、
              30m <span className="dn-tag">47.5</span>、1h
              <span className="dn-tag">51.5</span>、4h
              <span className="dn-tag">54.3</span>、8h
              <span className="dn-tag">50.2</span>、12h
              <span className="dn-tag">47.7</span>、1d
              <span className="dn-tag">48.2</span>——都在 50 附近、比
              昨天的快周期 60 那一档略凉。云图：15m 云下 11b（↑ $77.5k）；
              30m 云上 2b（↓ $77.3k）；1h 云上 26b（↓ $76.7k）；4h
              <span className="dn-em">刚失云顶</span> 云下 1b（↑ $77.4k）；
              8h 云下 30b（↑ $79.3k）；12h 云下 7b（↑ $78.2k）；1d
              云上 40b（↓ $75.1k）；3d 云内 (73.5k–92.4k)；1w 云下 17b
              （↑ $100.3k）；1M 云上 27b。
              <span className="dn-em">
                4h 失云是今天唯一新的边际偏空数——但只有 1 bar、
                只差 ~$100（4h 云顶 $77.4k、close $77,298、现货 $77,272）。
                1h 死叉印在 05-25 18:00Z（BJ 02:00），DIF +212.4——
                「DIF 水上的早期死叉」（多 TF 的探测、不是 regime
                翻转）。15m 新出的金叉是同一时刻最快 TF 的反向探测。
                单独看哪条都不能 ratify 方向；放在一起读就是
                「coil 迟疑继续」——和 05-25 同骨架、被 4h 失云和更新
                的 1h 死叉略往偏空倾斜。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活动背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">77,298</td><td className="num">47.2</td><td className="bull">金叉（水下）1b · 刚印</td><td className="bear">云下 ↑77.5k 11b</td><td>Sell 3</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">77,298</td><td className="num">47.5</td><td className="bear">死叉（水上）13b</td><td className="bull">云上 ↓77.3k 2b</td><td>Sell 1</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">77,298</td><td className="num">51.5</td><td className="bear">死叉（水上）6b</td><td className="bull">云上 ↓76.7k 26b</td><td>Sell 1</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">77,298</td><td className="num">54.3</td><td className="bull">金叉（水下）12b</td><td className="bear">云下 ↑77.4k 1b · 刚失</td><td>Buy 2</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">77,298</td><td className="num">50.2</td><td className="bull">金叉（水下）6b</td><td className="bear">云下 ↑79.3k 30b</td><td>Sell 7</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">77,298</td><td className="num">47.7</td><td className="bull">金叉（水下）3b</td><td className="bear">云下 ↑78.2k 7b</td><td>Sell 4</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1d</td><td className="num">77,298</td><td className="num">48.2</td><td className="bear">死叉（水上）14b</td><td className="bull">云上 ↓75.1k 40b</td><td>Sell 1</td><td>BEAR reg · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">77,298</td><td className="num">51.9</td><td className="neut">—</td><td className="neut">云内 73.5–92.4k 8b</td><td>Buy 5</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">77,298</td><td className="num">46.2</td><td className="bull">金叉（水下）6b</td><td className="bear">云下 ↑100.3k 17b</td><td>Buy 2</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">77,295</td><td className="num">49.1</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 27b</td><td>Buy 7</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    源：mtf_div_latest.html 00:01Z scan（滚动 latest
                    文件；本份在 audits/2026-05-26-desk-note.md 中逐字
                    存档）。标题告警：<em>15m 水下金叉 刚印（1b）</em>
                    ——最快有意义 TF 上的新多头探测。反向信号：
                    <em>1h 水上死叉 6b 前</em>——较 05-25 更新（昨天
                    10b）、引擎 TF 上的早期死叉、方向相反。边际：
                    <em>4h 刚失云顶 1b 前</em>——自 05-24 中周期转多
                    以来第一次 4h 云破。本次扫描无活动 ⚡TD9。close 均
                    为未收盘 bar；每个值在该 TF 收盘前都按临时数读。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵略松了一点、形状也变了。簇下三条日 MA 在现货
              下方
              <span className="dn-tag">$615 之内</span>，簇上四条在
              <span className="dn-tag">$1,362 之内</span>：
              <span className="dn-signal">
                簇下——D-SMA50 $77,080 (+0.25%)、D-EMA100 $76,852 (+0.55%)、
                D-EMA50 $76,770 (+0.65%、昨天「现货之上」→ 今天「现货之下」)、
                D-SMA150 $76,657 (+0.80%)；
                簇上——D-EMA20 $77,774 (−0.64%、对称地由「现货之下」→ 「现货之上」)、
                W-EMA20 $78,062 (−1.01%)、W-EMA150 $78,276 (−1.28%)、
                D-SMA20 $78,634 (−1.73%)
              </span>。再上一层是
              <span className="dn-tag bear">D-EMA150 $79,029 (−2.22%)</span>，
              然后是 <span className="dn-tag bear">D-SMA200/EMA200
              $80,270 / $81,423 (−3.73% / −5.10%)</span> 的天花板。
              簇下：薄薄一层 <span className="dn-tag bull">W-SMA20
              $74,332 (+3.96%)</span>，然后是
              <span className="dn-tag bull">W-EMA200 $73,737 (+4.79%)</span>
              / <span className="dn-tag bull">D-SMA100 $72,846
              (+6.08%)</span> 这条周期锚的长跑道。远上方且未用：
              W-EMA50 <span className="dn-tag bear">$84.9k (−9.01%)</span>、
              W-EMA100 <span className="dn-tag bear">$83.3k (−7.23%)</span>、
              W-SMA100 <span className="dn-tag bear">$88.4k (−12.55%)</span>、
              W-SMA50 <span className="dn-tag bear">$93.4k (−17.30%)</span>。
              <span className="dn-em">
                W-SMA150 / W-SMA200 仍不可计算——parquet 历史 126 根
                周线、短于两窗口；W-EMA150 $78,276 (−1.28%) 与
                W-EMA200 $73,737 (+4.79%) 能显示是因为 EMA 由已有
                历史种入。所有 MA 锚定 parquet 最末 bar 2026-05-26
                00:06Z（close $77,239）；偏移按 live 现货 $77,272
                重算。展示 MA 取整到美元、偏移按精确序列值计算。
                钉位换形了：昨天簇上是 D-EMA50 $77,813 (−0.79%) /
                W-EMA20 $78,049 (−1.09%)、$235 跨度；今天簇上是
                D-EMA20 $77,774 (−0.64%) / W-EMA20 $78,062 (−1.01%)、
                $288 跨度——下边界往现货收 $35（今天 D-EMA20 对
                昨天 D-EMA50）、上边界往外推 $13。簇底今天比昨天
                低 $69（D-SMA150 $76,657 对 $76,726）；簇总跨度宽
                $84。
              </span>{' '}
              加多要转换需要拿下的簇顶墙今天是
              <span className="dn-tag bear">D-EMA20 $77,774</span>
              的 1h 收盘（昨天是 $77,813 D-EMA50）——24h 高 $77,866
              穿透了这一档（BJ 23:13）但没有产生收盘上越（23:00Z 的
              1h 收盘 $77,680、22:00Z 收 $77,345——两者都没在收盘上
              清掉 D-EMA20）。
            </p>

            <h2 className="dn-sec">
              Dealer 图 <span className="dn-roman">III · GEX +78.2M 加重 · flip 平 · $76k 口袋变重 · 25MAY 过期</span>
            </h2>

            <p>
              dealer 总 gamma <span className="dn-em">加厚</span>：
              <span className="dn-tag bull">+78.2M/1%</span>（前 +65.1M、
              加了 $13.1M——抑制 regime 更深一档）。0γ flip
              <span className="dn-tag">漂下 $10 到 $75,959</span>
              （前 $75,969——基本平）。现货 $77,272 距 flip
              <span className="dn-tag bull">+1.73%</span>（按现货算）；
              GEX 文件自己写的 dist 是 <span className="dn-em">+1.8%</span>
              （按 Deribit-idx $77,365 算，idx 比 live 现货高 $93——
              两参考四舍五入对齐方向）。flip 之上 dealer 多 gamma、
              对冲流 <span className="dn-em">抑制</span>下一波——
              就是把今天加多停在 $77,866、把 round-trip 框在 $936 内的
              那本账。正向上方加重在承重墙：
              <span className="dn-tag bull">$80k +53.92M</span>
              （前 +51.30M——加 +$2.6M、全链最重一道墙）、
              <span className="dn-tag bull">$82k +19.83M</span>
              （前 +19.55M）、<span className="dn-tag bull">$78k
              +10.06M</span>（前 +13.14M——<span className="dn-em">松了</span>
              ：$78k 正向松了、$76k 负向加重，簇位 dealer 账本向下移）、
              <span className="dn-tag bull">$90k +9.55M</span>
              （前 +8.83M）、<span className="dn-tag bull">$85k
              +9.50M</span>（前 +9.55M）、<span className="dn-tag bull">
              $79k +8.19M</span>（新进 top 10——直接增厚簇顶）、
              <span className="dn-tag bull">$81k +7.80M</span>。
              负向下方<span className="dn-em">换形了</span>：
              <span className="dn-tag bear">$75k −23.14M</span>
              （前 −27.06M——松了 $3.9M）、
              <span className="dn-tag bear">$76k −12.67M</span>
              （前 −8.75M——<span className="dn-em">负向加重 $3.9M</span>、
              正好在加多步的位置）、
              <span className="dn-tag bear">$74k −11.03M</span>
              （前 −8.90M——加重）、
              <span className="dn-tag bear">$60k −7.80M</span>
              是 crash put 残值、基本平。by-expiry：25MAY 0DTE
              <span className="dn-tag">−9.21M</span>已在昨天到期
              （前段负口袋按预期清掉）；26MAY 0DTE 今天
              <span className="dn-tag bull">+1.68M</span>（今日到期、
              正值）、<span className="dn-tag bull">27MAY 1.3DTE
              +3.00M</span>、<span className="dn-tag bull">28MAY 2.3DTE
              +0.61M</span>、<span className="dn-tag bull">29MAY 3.3DTE
              +23.83M</span>（前 +24.48M——随 DTE 缩短松了 $0.65M、
              仍是整段 by-expiry 上最重的一档）、
              <span className="dn-tag bull">5JUN 10.3 +8.01M</span>
              （前 +6.85M）、<span className="dn-tag bull">12JUN 17.3
              +6.06M</span>（前 +4.91M）、<span className="dn-tag bull">
              26JUN 31.3 +16.54M</span>（前 +15.62M）。
            </p>

            <p>
              一句话读：<span className="dn-signal">
                把 05-25 钉住 round-trip 的 dealer regime 形状未变、
                体重更重、簇下偏放大半边
              </span>。+78.2M 已稳稳在 05-22 / 05-25 +65–67M 的 coil
              档位之上——4 日谱系里最重的抑制档。MA 簇钉位（§II）
              在上盖侧得到更多 dealer 配合、下方读到不同信号：现货
              夹在更重的 long-gamma 上盖（$78k +10.06M、$79k +8.19M、
              $80k +53.92M、$82k +19.83M、$85k +9.50M）与
              <span className="dn-em">更重</span>的 $76k −12.67M
              负 gamma 地板（正好在步位）+ 仍堆的 $74–75k −34.2M
              架之间。簇顶承重墙是
              <span className="dn-tag bull">$80k +53.92M</span>——
              谱系上最强单墙；突破 $77,774 D-EMA20 后 dealer 会朝
              $80k 方向卖。跌破 $76k 后碰到的负 gamma 口袋比昨天更
              重——下行路径放大略多一点。<span className="dn-em">
                整体形状：上盖加厚、把正向架的地板从 $78k 抽到 $79k
                （小幅收缩）；负 gamma 地板在 $74–76k 加重。
                dealer 图的论证是：钉位继续、两侧 break 都更可能
                放大一些；不再倾向漂、若动则更可能是一记跳
              </span>。930 合约的 IV 中位数变成 884（−46，约等于
              昨天 25MAY 0DTE 全链过期）：今天
              <span className="dn-tag">42.4%</span>（前 42.5%——平），
              对 30D close-to-close RV <span className="dn-tag">
              25.84%</span>（前 26.26%——略凉）——链层 richness
              <span className="dn-tag">~+16.6pt</span>（和 05-25 基本平）。
              N 合约的链中位数、<span className="dn-em">不是</span>
              可交易价差；到期 / 行权价层面的 vega、skew、期限结构
              仍未载入；vol 读维持 framework only。RV 方法学：30D
              close-to-close、logret.std × √365 × 100 在锚定 parquet
              最末 bar 2026-05-26 00:06Z 的 30 根日线 close 上算。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · FRED 冻结第 4 天 · 阵亡将士纪念日已过 · 第一道新鲜印今日落地</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观结构上对 05-25 一样——FRED Tier-1 在美国阵亡将士
                纪念日长周末之后冻结到第 4 天
              </span>。Dashboard 渲染时间 2026-05-25 22:16Z、较快照锚
              滞后约 1.9h。面板自身已经在 US 10Y、10Y TIPS real、HY OAS、
              US-JP 10Y 价差上挂了 <span className="dn-tag stale">
              stale 4d episodic</span> 标——面板知道自己冻结了。
              US 10Y nominal <span className="dn-tag">4.57% (0.0bp)</span>
              ——持平、较 4.55% 长侧重夺利率门槛仍高 2bp。10Y TIPS real
              <span className="dn-tag">2.18% (+5.0bp 停)</span>、5Y5Y BE
              通胀 <span className="dn-tag">2.26% (+5.0bp 停)</span>、
              HY OAS <span className="dn-tag bull">2.78% (−2.0bp 停)</span>、
              MOVE 国债 vol <span className="dn-tag">78.4 (−1.29 停)</span>、
              Fed net liquidity <span className="dn-tag bull">$5.907T
              (+0.030T 停)</span>——和 05-25（以及更早的 05-24）
              完全一样。DXY <span className="dn-tag">99.05 (−0.27 停)</span>
              ——也从周五的印冻在那里。USD/JPY
              <span className="dn-tag">158.88 (−0.14 停)</span>。
              慢 regime z 仍极端——10Y <span className="dn-tag bear">+2.24</span>、
              TIPS <span className="dn-tag bear">+2.26</span>、JGB
              <span className="dn-tag bear">+2.55</span>、EXTREME
              RISK-OFF 旗子还在——但今天没有任何新鲜数据点动过。
              episodic z 和 05-25 一样（10Y +1.52、TIPS +2.47、
              Fed liq +2.16、US-JP +1.52）。
              <span className="dn-em">
                信用 / 利率过滤仍在：HY OAS 2.78% 距 3.0% 再加门槛
                还有 22bp；长侧重夺利率门槛（10Y &lt; 4.55%）还差
                2bp；其余无动。今天是阵亡将士纪念日（周一）之后
                美国国债市场重开的第一天——下一轮 FRED Tier-1
                新鲜印将在本日美时落地、是四天来第一道新鲜宏观输入。
                这是今天唯一能从 BTC 账本之外把钉位打破的宏观变量。
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
                <tr><td>US 10Y nominal</td><td className="num">4.57%</td><td className="num stale">0.0bp（stale 4d）</td><td className="num bear">+2.24</td><td className="num bear">+1.52</td><td className="bear">risk-off · 面板标停</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.18%</td><td className="num stale">+5.0bp（stale 4d）</td><td className="num bear">+2.26</td><td className="num bear">+2.47</td><td className="bear">紧 · 面板标停</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.26%</td><td className="num stale">+5.0bp（停）</td><td className="num">+0.35</td><td className="num">+0.47</td><td className="neut">无 tag · 面板 Δ 冻</td></tr>
                <tr><td>HY OAS</td><td className="num">2.78%</td><td className="num bull stale">−2.0bp（stale 4d）</td><td className="num bull">−0.98</td><td className="num bull">−1.02</td><td className="bull">松 · 面板标停</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num stale">−0.523</td><td className="num stale">−0.01（stale 10d）</td><td className="num bull">−0.48</td><td className="num bull">−1.35</td><td className="stale">stale 10d · 中性</td></tr>
                <tr><td>MOVE 国债 vol</td><td className="num">78.4</td><td className="num stale">−1.29（停）</td><td className="num">+0.11</td><td className="num">+1.01</td><td className="neut">vol 缓 · 面板 Δ 冻</td></tr>
                <tr><td>DXY</td><td className="num">99.05</td><td className="num stale">−0.27（停）</td><td className="num">+0.63</td><td className="num bear">+1.16</td><td className="neut">紧 · 面板 Δ 冻</td></tr>
                <tr><td>Fed net liquidity</td><td className="num">$5.907T</td><td className="num bull stale">+0.030T（停）</td><td className="num bull">+0.77</td><td className="num bull">+2.16</td><td className="bull">松 · episodic 涌</td></tr>
                <tr><td>USD/JPY</td><td className="num">158.88</td><td className="num stale">−0.14（停）</td><td className="num bear">+1.16</td><td className="num">+0.37</td><td className="neut">面板 Δ 冻</td></tr>
                <tr><td>US-JP 10Y 价差</td><td className="num">2.06%</td><td className="num stale">0.0bp（stale 4d）</td><td className="num bull">−0.65</td><td className="num bear">+1.52</td><td className="bear">紧 episodic · 面板标停</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7940</td><td className="num bull stale">−0.01（停）</td><td className="num bull">−1.82</td><td className="num bull">−1.35</td><td className="neut">无 tag · 面板 Δ 冻</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不可倚</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗口、summary 00:01Z——
              <span className="dn-em">7 天滚动读、不是「今天」</span>）。
              非对角均值 <span className="dn-tag">|r| 0.353</span>
              （较 05-25 的 0.384 再松——仍 NORMAL 带）。BTC 的列出
              关系：NQ <span className="dn-tag">+0.600</span>
              （前 +0.663）、SILVER <span className="dn-tag">+0.569</span>
              （前 +0.556——BTC 第二强）、SP500
              <span className="dn-tag">+0.557</span>（前 +0.621）、
              CL <span className="dn-tag">−0.541</span>（前 −0.605——
              松了但仍强负）、AMZN <span className="dn-tag">+0.468</span>、
              NVDA <span className="dn-tag">+0.465</span>（前 +0.551——松）、
              BRENT <span className="dn-tag">−0.456</span>、
              GOLD <span className="dn-tag">+0.445</span>、
              META <span className="dn-tag">+0.422</span>、
              TSLA <span className="dn-tag">+0.380</span>。
              7d 相对表现：<span className="dn-tag bull">BTC +0.19%</span>
              （由 05-25 的 −0.16% 转正）、NQ
              <span className="dn-tag bull">+2.75%</span>、SP500
              <span className="dn-tag bull">+1.75%</span>、JP225
              <span className="dn-tag bull">+7.36%</span>
              （<span className="dn-em">加速</span>，从 +5.16%——单一
              指数最亮）、NVDA <span className="dn-tag bear">−2.10%</span>、
              AAPL <span className="dn-tag bull">+3.96%</span>、TSLA
              <span className="dn-tag bull">+4.82%</span>、AMZN
              <span className="dn-tag bull">+1.77%</span>、GOOGL
              <span className="dn-tag bear">−3.78%</span>（较 −2.04% 走差）；
              金属杂——GOLD <span className="dn-tag bear">−0.23%</span>
              （由 +1.23% 转负）、SILVER <span className="dn-tag">−0.01%</span>
              （由 +3.72% 抹平）、PALL <span className="dn-tag bear">
              −2.11%</span>、PLAT <span className="dn-tag bear">−0.99%</span>、
              COPPER <span className="dn-tag bull">+2.21%</span>；能源
              继续崩——CL <span className="dn-tag bear">−10.65%</span>、
              BRENT <span className="dn-tag bear">−9.30%</span>（由
              −9.97% 略回）、NGAS <span className="dn-tag bear">−4.68%</span>。
              <span className="dn-em">
                BTC 对指数复合体的 7d 落差由 ~−3.0pt（昨天）缩小到
                ~−2.6pt（今天，BTC +0.19% 对 NQ +2.75%、SP500 +1.75%）
                ——部分追平继续。单名拖累分散依旧（NVDA −2.10% 对
                −1.30% 走差、GOOGL −3.78% 对 −2.04% 走差，
                AAPL / TSLA / AMZN 都更强）。金属破节奏（GOLD
                转弱微负、SILVER 由强 +3.72% 抹平）。能源继续崩、
                BRENT 略回。日本强加速到 +7.36%——BTC-JP225 +0.218
                相关性低、读穿弱但方向上和簇钉的继续吻合
              </span>。JGB 月度 2.52% 带 EXTREME RISK-OFF 月标——不可倚。
              USD/JPY 158.88、冻结。
            </p>

            <h2 className="dn-sec">
              Trade book{' '}
              <span className="dn-roman">V · 按兵不动再被规则证明对 · 加多换了观察清单</span>
            </h2>

            <p>
              <span className="dn-signal">
                05-25 按兵不动的账本再次被规则证明对——七条决定条件
                过去 24h 无一触发
              </span>。簇顶夺回（1h 收盘 &gt; $78,049 且 SM 在
              leading 4h 内未再加空到 &lt; −20k）：没有任何 1h 收盘
              清掉 $78,049（最高 1h 收盘 $77,694.5、落在
              <span className="dn-tag">17:00Z（BJ 01:00）</span>、
              24h 高现货 $77,866 穿透但没收盘上越）；夺回更狠（1h
              收盘 &gt; $79,050）：远未靠近；簇丢（1h 收盘 &lt; $75,969
              且 SM &lt; −18k）：远未靠近（1h 收盘低 $76,919.7 在
              02:00Z、SM 在 −18k 之下从未出现过）；re-stack 敌意
              （SM 一分钟离散步 ≤ −5k 把 SM 推 &lt; −22k）：当窗里
              唯一 |Δ| &gt; 1k 的离散步是 06:36Z 的 +4,103、方向相反；
              mid-cycle 升级（1d 收盘破 $75.1k 云）：远未靠近；
              宏观尾再加（HY OAS &gt; 3.0% 或 10Y &gt; 4.75%）：FRED
              面板冻结、无新鲜印；reclaim filter ratify：三条腿都没真。
              按兵不动的账本今天无已实现损益；宏观 put-spread 落在
              29MAY 到期上、那一档今天
              <span className="dn-tag">+23.83M dealer gamma</span>
              （较 +24.48M 随 DTE 缩短松 −$0.65M、仍最重）。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">按兵不动 · 主体 · 今日</span>
              <div className="dn-trade-name">
                不开新方向——第二次回补（加多）、空头还堆、钉位继续
              </div>
              <div className="dn-thesis">
                现货被钉在略宽、略换形的 MA 簇里（$76,657 D-SMA150 到
                $78,062 W-EMA20——$1,405 跨度、较 05-25 宽 $84）。
                dealer 账本<span className="dn-em">更重</span>：+78.2M
                （前 +65.1M、加 +$13.1M 抑制）。仓位面换形了：
                SM net 由 −13.71k → −8.80k，是经一根 06:36Z（BJ 14:36、
                现货 $77,367）+3.82k 单腿加多完成；空头侧 24h 基本
                不动（24,761 → 24,462、−0.3k）、步那一分钟同样只 −285
                （24,587 → 24,302）。净仓在 4 日谱系里最高
                （最少净空）；空头侧 24.5k 仍实实在在地堆——
                squeeze 燃料技术上未消耗。当天高印（$77,866）穿了
                但没收盘越过新簇顶（D-EMA20 $77,774 是 1h 收盘门）。
                现货现在比加多入场低 $95；按 +3,819 BTC 新加的多头
                对步价估浮亏 ~$0.36M（步后 15,383 BTC 整本按步价记
                的上界 ~$1.46M）。
                funding 当窗中段急冷（+1.36% 谷在 15:52Z）、晚段
                重新拉热到 +9.15% 峰（23:17Z）——杠杆信号迷糊。
                散户在平水（50.21%）——谱系里最薄。加多换了观察清单：
                如果 SM 不关空头先削掉新的多头，净仓快速回堆短
                （不需要再来一次离散加空步）；如果多头守住、且 $77,774
                被干净收盘越过，加多就转换了、多侧 re-engage 门触发。
                更宽的钉位上、空头失衡燃料半消耗、账本多侧已经堆起——
                合理仓位仍是零。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">立场</span><span className="dn-lvl-v">方向上平 · 不开新风险</span></div>
                <div><span className="dn-lvl-k">决定带</span><span className="dn-lvl-v">$75,959（flip）↔ $78,062（W-EMA20、簇顶）</span></div>
                <div><span className="dn-lvl-k">上行 re-engage（门下移）</span><span className="dn-lvl-v bull">1h 收盘 &gt; $77,774（D-EMA20）且 SM long_btc 在 leading 4h 内守 &gt; 14k——侦察多 0.2R、目标 $78,062（W-EMA20）然后 $78,634（D-SMA20）</span></div>
                <div><span className="dn-lvl-k">下行 re-engage</span><span className="dn-lvl-v bear">1h 收盘 &lt; $75,959（flip）且 SM &lt; −15k——flip-break 空 0.3R、目标 $75,000 / $74,332（W-SMA20）</span></div>
                <div><span className="dn-lvl-k">long-trim 警告（新）</span><span className="dn-lvl-v bear">SM long_btc 一分钟之内掉 &gt; 2k（或 1h 内掉 &gt; 4k）且 short_btc 未上——新加的多在拆、净仓比 05-22/23 更快回堆短（因为空头已 pre-loaded）</span></div>
                <div><span className="dn-lvl-k">re-stack 升级</span><span className="dn-lvl-v bear">SM 一分钟 net 变动 ≤ −5k 把 SM 推 &lt; −15k——squeeze 反方向重新上膛、按下一次 D-EMA20 $77,774 夺回作即时空 setup 处理</span></div>
              </div>
              <div className="dn-gating">
                <b>为什么不在加多印之后追多 re-engage：</b>
                加多印过但 dealer 把跟随挡住了——现货拿不下 $77,774
                D-EMA20、更别提 $78,062 W-EMA20 的墙。关键是：
                空头没关——24.5k 的空头账本仍 pre-loaded，所以净仓
                可以单靠 long-trim 就快速回堆短（不需要再来一次离散
                加空步）。这让 long-trim 警告成为更紧迫的观察项：
                只要新加的 3.82k 多头快速被拆掉，净 SM 不需要任何
                空头新加就能回到 −12k 之下。反过来，加多本身在簇顶被
                1h 收盘清掉之前不能 ratify 多——之前那 15.4k 多头开
                在 $77,367 浮亏、仓位面仍是钉位内的方向硬币翻、
                dealer 账本还更厚。两边预先押都是在为「2% 上方一个
                更重的负 gamma 口袋、1.3% 下方一个更重的正向天花板」
                之间的硬币翻付钱。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">已关闭 · 上一份 squeeze 框架 · 再确认</span>
              <div className="dn-trade-name">
                squeeze 潜力——燃料重新分类：空头侧仍在、多头侧成了多头堆叠对冲
              </div>
              <div className="dn-thesis">
                昨天的关闭（「squeeze 框架收下」）作字面是对的——
                05-23 创纪录空 + 创纪录多头费 + dealer 钉那套不对称
                已经不是当前的设置。但今天需要重新分类：
                <span className="dn-em">空头账本仍在 24.5k</span>
                （对 33.5k 峰只缩了 9k——05-24 那一次缩了那 9k、
                今天没缩）。多头长到 15.7k。SM 在跑一个对一个仍堆着
                的空的「多头堆叠对冲」——净 −8.8k 但 gross 暴露比
                05-22 大得多。这<em>不</em>是 05-22 的入场设置；
                是一个不同的形状（gross-多头-对冲-net-空 对
                clean-net-空 的 05-22 读法）。新问题是：如果钉位
                破了、哪一腿先被砍：快速 long-trim 几分钟内把净仓
                带回 −12k+；快速 short-cover 把净仓带去平水。dealer
                图在 $80k +53.92M 论证不利上行 cover（空头没有正
                凸性的去处去关）；$76k −12.67M 加重论证不利易跌
                （多头会在一个放大的口袋里被解开）。
                <span className="dn-em">
                  谱系更新：SM-回补-再-加多（05-24 → 05-25）现在
                  是一个两步形态、不是一步回补。4 日步节奏（加空 ·
                  加空 · 两腿回补 · 加多）未断；BJ 13–15 窗口未断；
                  价格-没跟-的结果未断（每一步都印了但现货留在簇内）。
                  下一步几乎肯定落在下个 24h 内、同一 BJ 窗口——方向
                  不可预测但节奏近乎确定
                </span>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">关闭 · setup 换形为「多头堆叠对冲未关闭的空」</span></div>
                <div><span className="dn-lvl-k">谱系第 4 步印</span><span className="dn-lvl-v">+3,819 加多 @ 2026-05-25 06:36Z（BJ 14:36）· 现货 $77,367.50 · short_btc −285（基本平）</span></div>
                <div><span className="dn-lvl-k">窗口内 SM 峰</span><span className="dn-lvl-v">−8,789 BTC @ 2026-05-25 22:26Z（BJ 06:26）· 现货 $77,362</span></div>
                <div><span className="dn-lvl-k">步后价格</span><span className="dn-lvl-v">步 $77,367 → 24h 高 $77,866（+$499）→ 快照 $77,272（距步 −$95）</span></div>
                <div><span className="dn-lvl-k">步节奏</span><span className="dn-lvl-v">连续 4 天 · 全部 BJ 13–15 窗口 · 下一步 ~24h 前向基准率</span></div>
              </div>
              <div className="dn-gating">
                <b>重新分类的教训：</b>05-25 那道严格 squeeze 门在
                净仓离开创纪录空之后正确关掉——但低估了空头账本的
                持续性。今天：空头侧 24.5k 仍是 33.5k 峰的 73%、
                只略缩。不对称的 squeeze 读没完全收下——是换形
                （多头对冲的净空）。新框架条目：如果 SM 不关空头先
                削掉新加的多头（long_btc 一分钟 &gt; 2k 或 1h 内
                &gt; 4k 掉），由此快速回堆短到净 −12k+ 就是敌意
                信号——按下一次 D-EMA20 $77,774 夺回作即时空
                setup 处理。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">宏观尾 · 对冲 · 持仓</span>
              <div className="dn-trade-name">
                下行 put-spread——余位 0.15R 持有
              </div>
              <div className="dn-thesis">
                宏观结构上对 05-25 一致（FRED Tier-1 冻到第 4 天；
                面板自身在 10Y / TIPS / HY OAS / US-JP 上挂「stale 4d」）。
                DXY 也冻（99.05 无新数）。承载对冲的 29MAY 到期今天带
                +23.83M dealer gamma（前 +24.48M——随 DTE 从 4.3 缩到
                3.3 松 $0.65M；仍是整段 by-expiry 最重）。regime-z
                背景不变（10Y +2.24σ、JGB +2.55σ、TIPS real +2.26σ）；
                理据（对慢 regime z 的肥尾保险）成立。今天是阵亡将士
                纪念日（周一）之后美国国债市场重开第一天——下一轮
                FRED Tier-1 新鲜印将在本日美时落地。这是今天唯一能
                从 BTC 账本之外把钉位打破的宏观变量。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">结构</span><span className="dn-lvl-v">多 $74k / 空 $70k put</span></div>
                <div><span className="dn-lvl-k">到期</span><span className="dn-lvl-v">29-MAY-26（3.3 DTE）——前段正向阶梯、29MAY 最重 +23.83M</span></div>
                <div><span className="dn-lvl-k">本次动作</span><span className="dn-lvl-v">持 0.15R · 不加（regime z 未变 + 冻结）· 不减（再加门未破）</span></div>
                <div><span className="dn-lvl-k">再加触发</span><span className="dn-lvl-v bear">今日 FRED Tier-1 新鲜印中 HY OAS &gt; 3.0% 收盘 或 10Y &gt; 4.75% 收盘 → 朝主体增；1d 收盘破 $75.1k 云 → 顶到最大尾</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>strike / 权利金 / Greeks 未载入——结构示意、
                size 待 Deribit 29-MAY 链拉。29MAY +23.83M 仍是整段
                by-expiry 上最重的一档（26JUN +16.54M 第二）；该到期
                上的 dealer 对冲将抑制跟随而非放大——意味着如果
                宏观尾真触发，已实现移动可能比 regime-z 算出的小。
                29MAY DTE 现 3.3 天——对冲有 3 个日历日在到期前解决；
                下一窗口的新对冲需要滚到 5JUN 10.3 DTE（+8.01M dealer
                gamma、比 29MAY 抑制更轻）。
              </div>
            </div>

            <h2 className="dn-sec">
              失效条件{' '}
              <span className="dn-roman">VI · 钉位连续第 2 天稳 · long-trim 是新的顶级观察</span>
            </h2>

            <p>
              05-25 七条决定条件中、<em>零</em>在 24h 窗口内严格触发——
              最接近：簇顶夺回（最高 1h 收盘 $77,694.5 在 17:00Z、距
              $78,049 W-EMA20 门差 $355；24h 高现货 $77,866 穿了但
              没收盘上越）；re-stack 敌意（无 SM 一分钟离散步 ≤ −5k；
              唯一 |Δ| &gt; 1k 的离散步是 06:36Z 的 +4,103、反向）。
              其余各行干净。昨日按兵不动的账本今天不变（方向上平、
              宏观尾持）。今天的条件按新换形的钉 + flip 网重置，
              long-trim 警告作为新增顶级观察行：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水平</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>簇顶夺回 ratify（门下移到 D-EMA20）</td><td className="bull">1h 收盘 &gt; $77,774（D-EMA20）且 SM long_btc 在 leading 4h 内守 &gt; 14k</td><td>侦察多 0.2R、目标 $78,062（W-EMA20）然后 $78,634（D-SMA20）</td></tr>
                <tr><td>夺回 ratify 更狠</td><td className="bull">SM &gt; −5k 持续 且 1h 收盘 &gt; $78,634（D-SMA20）</td><td>加 +0.2R、目标 $79,029（D-EMA150）然后 $80,270（D-SMA200）——撞顶墙 +53.92M</td></tr>
                <tr><td>long-trim 警告（新顶级观察）</td><td className="bear">SM long_btc 一分钟之内掉 &gt; 2k 或 1h 内掉 &gt; 4k，且 short_btc 未上</td><td>标记：净仓回堆短比 05-22/23 更快（空头 pre-loaded）· 按下一次 $77,774 夺回作即时空 setup</td></tr>
                <tr><td>簇丢（再破）</td><td className="bear">1h 收盘 &lt; $75,959（flip）且 SM &lt; −15k</td><td>flip-break 空 0.3R、目标 $75,000 / $74,332（W-SMA20）</td></tr>
                <tr><td>re-stack 升级（敌意）</td><td className="bear">SM 一分钟 net 变动 ≤ −5k 把 SM 推 &lt; −15k</td><td>按下一次 D-EMA20 $77,774 夺回作即时空 setup 处理</td></tr>
                <tr><td>mid-cycle 升级</td><td className="bear">1d 收盘破 $75,100 云（↓ Ichimoku 1d 云顶）</td><td>尾向主体（0.3R）、不论 SM 都开空</td></tr>
                <tr><td>宏观尾再加（今日 FRED 新鲜印）</td><td className="bear">今日第一道 Tier-1 新鲜印中 HY OAS &gt; 3.0% 或 10Y &gt; 4.75% 收盘</td><td>尾 +0.1R 朝主体</td></tr>
                <tr><td>Reclaim filter ratify</td><td className="bull">SM &gt; 0 持续 且 10Y 收盘 &lt; 4.55% 且 1h 收盘 &gt; $77,774</td><td>侦察多 0.2R（与「簇顶」账分开）</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>这一</em>份的单一变量是
              <span className="dn-signal">
                SM 是守住新加的多头、还是把它削掉。SM long_btc 一分钟
                之内掉 &gt; 2k（或 1h 内 &gt; 4k）且 short_btc 未上、
                净仓回堆短到 −12k+ 只需几分钟——比 4 日谱系里任何一
                次都快，因为空头是 pre-loaded 的；若 15.4k 的多头账本
                能挺过今日 BJ 13–15 节奏窗口，加多保活、簇顶 D-EMA20
                $77,774 的 1h 收盘门成为绑定约束。第 5 天的硬步（按
                4 日谱系基准率最可能落在今日 BJ 13–15 之内）是节奏读
                ——方向不可预测、时机近乎确定
              </span>。在 SM 一分钟之内动出 ≥ 2k 一腿、或簇位在收盘
              上被定方向之前，本备忘按写下的运行——方向上平、宏观
              尾持、squeeze 框架重新分类为「多头堆叠对冲」。今天还
              是阵亡将士纪念日之后美国国债市场重开的第一天；本周
              第一道 FRED Tier-1 新鲜印将在本日美时落地、是唯一
              能从 BTC 账本之外把钉位打破的宏观变量。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2（已过 codex 敌对式审计 · 0 CRITICAL · 1 HIGH + 4 MED + 2 LOW 全部修正）
            </span>
            <b>Codex CLI 0.132.0（gpt-5.5、xhigh reasoning）干净跑完
            了敌对式审计——empty-stdin pipe 撑住、无 TTY 阻塞。</b>
            零 CRITICAL；7 条 findings 全部在 EN+ZH 应用：
            (a) <b>F-01 · HIGH</b>——<em>审计存档缺失</em>：页面 manifest
            声明 <code>audits/2026-05-26-desk-note.md</code> 已存在；
            v1 作者时实际不存在。已在本次 commit 创建该审计文件、
            完整 findings 列表 + 00:01Z MTF 扫描逐字存档（滚动 latest
            文件其后已往前滚）。
            (b) <b>F-02 · MED</b>——<em>funding 端点方向措辞反了</em>：
            v1 §I 写「+8.54% 年化——较昨天 +7.12% drifted down」但
            端点向上移 +1.42pt。EN+ZH §I 改写为正确披露端点比较，
            保留窗口路径框架（中段冷至 +1.36% 谷点在 15:52Z、晚段
            爬至 +9.15% 峰在 23:17Z）。
            (c) <b>F-03 · MED</b>——<em>trade 块把 24h 端点 short 数
            挂到 06:36Z 步叙事</em>：v1 写「06:36Z 步 … 空头基本不动
            (24,761 → 24,462)」——但 24,761 → 24,462 是 24h 端点变化、
            不是步（步那一分钟 short_btc 是 24,587 → 24,302）。EN+ZH
            trade 块改写为同时披露二者：「空头侧 24h 基本不动 (24,761
            → 24,462、−0.3k)，步那一分钟同样只 −285（24,587 → 24,302）」。
            (d) <b>F-04 · MED</b>——<em>+118 BTC 差值挂到峰、其实是
            vs 步</em>：快照 SM −8,801 比 22:26Z 峰 (−8,789)
            <em>多</em> ~12 BTC 净空、比 06:36Z 步 (−8,919) 少 +118
            BTC 净空。v1 把两者混了。EN+ZH §I 改写为同时披露两个差值。
            (e) <b>F-05 · MED</b>——<em>PnL 把新加的多头和步后整本
            多头混淆</em>：v1 写「新多头大约 $1.5M 浮亏」——那是
            整本步后 15,383 BTC × $95 = $1.46M、当成全部都在步价开
            的、但只 +3,819 BTC 是新加的。新加按 $77,367 估浮亏
            ~$0.36M；步后整本按步价记是上界 ~$1.46M。EN+ZH lead +
            §I + trade 块都改写为分开标注。
            (f) <b>F-06 · LOW</b>——<em>§IV 头写「FRED 冻结第 2 天」
            而正文写「第 4 天」</em>：FRED Tier-1 上一次新鲜印是
            2026-05-22（阵亡将士纪念日长周末前的周五），所以 4 个
            日历日。头改写为「FRED 冻结第 4 天」；§VI「钉位连续第 2
            天稳」是不同概念（连续 2 天零条件触发）、保留不动。
            (g) <b>F-07 · LOW</b>——<em>30D RV 报值无方法学披露</em>：
            两版加括注——「30D close-to-close、logret.std × √365 × 100
            在锚定 parquet 最末 bar 2026-05-26 00:06Z 的 30 根日线
            close 上算」。
            codex 明确清扫：funding × 1095（无 05-15 ×100 landmine
            复发；live +8.5355%、24h 均 +4.1655%、区间 +1.36% / +9.15%、
            分钟级 493/455/492）、GEX 双参考符号一致性（flip $75,959、
            总 +78.2M、距 +1.73% 对 live $77,272 / +1.8% 对 Deribit-idx
            $77,365——干净对齐）、GEX 墙与 by-expiry strip（29MAY
            +23.83M 最重、26JUN +16.54M 第二；$80k +53.92M 顶墙；
            $76k 口袋负向加重到 −12.67M 正好在步位）、MA 矩阵
            （D-SMA50/EMA100/EMA50/SMA150 簇 +0.25/+0.55/+0.65/+0.80%
            在现货之下；D-EMA20/W-EMA20 簇 −0.64/−1.01% 在上；
            D-EMA20 较 05-25 由「现货之下」翻到「现货之上」对称；
            W-SMA150/200 不可计算、周线 126 根）、30D RV 25.836%、
            claims-vs-loaded-data 纪律（NTT / max-pain / strike-IV /
            BTC-NQ framework-only · IV 链中位数 884 合约 · 跨资产按
            7d 滚动窗口而非「今天」框定）、requireViewer 门控形态
            （两条路径、首语句）、index <code>&lt;li&gt;</code> 新增
            （最新在先）、SM 加多步时序（单 bar 单腿加多在 06:36Z
            现货 $77,367.50、+3,819 多 / −285 空、sm_net −13,022 →
            −8,919、峰 −8,789 在 22:26Z、在 −10k 之上 668 分钟、
            和 05-24 的两腿回补质上不同）、1h 收盘越过簇顶
            （零根越过 $78,049 W-EMA20 门、最高 $77,694.5 在
            17:00Z）、七条决定条件表（严格触发零次）。
            完整审计记录 + MTF 扫描存档：audits/2026-05-26-desk-note.md。
            <b>Build note (INFO)：</b>本服务器跑 Node 18.19.1；Next
            16.2.6 在 <code>node_modules/next/dist/bin/next:21-25</code>
            硬退出于 Node &lt; 20.9.0，所以完整 <code>next build</code>
            被环境挡住（lineage 自 05-21 / 05-22 / 05-23 / 05-24 / 05-25）。
            <code>npx --no-install tsc --noEmit</code> 返回 exit 0
            （TypeScript 干净）、作为 build proxy。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘为 Hysteresis Research 内部交易台供原则成员讨论的
            产物，<em>不是投资建议、不是要约、不是邀约</em>，
            未针对任何收件人具体情况定制。所列数字基于单一原子快照
            (2026-05-26 00:08Z)，分节出处见上方数据来源区；
            宏观结构上对 05-25 无变（FRED Tier-1 冻到第 4 天；面板
            自身标「stale 4d」；第一道新鲜印今日美时落地）。各项水平、
            size、条件示意本台的工作流程，不是常态推荐。过去的相关性、
            gamma、仓位形态不约束未来盘面。衍生品有全损风险；
            如带杠杆，损失可能超过保证金。
            <em>请自行尽职调查。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                加多印在簇上、没走出去。空头没关；钉位再撑一天。
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
            v2 · 2026-05-26 00:08Z · sources: live_db.json · mtf_div_latest.html ·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
