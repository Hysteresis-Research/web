import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-02 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-02',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-02' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260602() {
  await requireViewer('/zh/desk/2026-06-02');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-02 · v2</span>
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
              <span className="dn-big">$71,268</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−3.49%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-02 00:15Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-02 00:15Z（snapshot pin）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 快照 pin 行 = 00:15Z；审计时 live 文件已
                    前进到 00:24Z，不要把 file tail 当 pin 用（audit DN-010
                    修正）· 2JUN26 0.3DTE −9.08M 在今日 08:00Z 结算（快照
                    后约 7.75h）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-02 00:16Z scan（可回溯的滚动文件）</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 比快照锚晚 1 分钟 ·
                    含未收盘 K 线 · 可回溯状态存档于
                    audits/2026-06-02-desk-note.md（v1 草稿引用了一份没有
                    单独存档的 00:01Z 扫描，audit DN-002 后改用 00:16Z 这份
                    可回溯文件）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-02 00:00Z 快照</td>
                  <td className="dn-flag">
                    较快照锚滞后约 15 分钟 · Deribit idx $71,600 对 live
                    $71,268（高 $332）· 904 合约（05-31 是 938；31MAY 0.3DTE
                    +17M 已在 05-31 08:00Z 结算、1JUN 1.3DTE +19.49M 已在
                    06-01 08:00Z 结算）· 2JUN26 0.3DTE −9.08M 是下一根结算
                    （今日 08:00Z、快照后约 7.75h）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-02 00:01Z
                  </td>
                  <td className="dn-flag">滞后约 14 分钟 · 7d 1h bar · 22 资产 · 166 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-01 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 2.0h · FRED Tier-1 基本平（10Y 不动 4.45%、
                    TIPS +1bp 到 2.07%、5Y5Y BE +2bp 到 2.26%、HY OAS +2bp
                    到 2.74%、MOVE +3.11 到 73.3，是 Tier-1 当日最硬一根）·
                    自 05-30 22:15Z 印以来 DXY +0.10 到 99.01、Fed 净流动性
                    −$0.058T 到 $5.872T · Tier-3 通胀行仍抓取失败
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-06-02 00:06Z（按桌面政策只用 btcusdt_1m_2024..2026 子集）</td>
                  <td className="dn-flag">
                    较快照锚滞后约 9 分钟 · MA 源域是 2024-2026 parquet
                    子集（127 根周 bar），不是完整 btcusdt_1m_* glob ——
                    这是桌面政策选择、为了延续之前几篇的口径（audit DN-005
                    标注）· 这个子集下 W-SMA150 / W-SMA200 不可计算；W-EMA150
                    与 W-EMA200 能显示是因为 EMA 从可用历史 seed、按种子
                    口径披露 · 偏移按 MA 源价格面（parquet 邻近 ≈ $71,326，
                    与 00:16Z MTF 扫描现货 $71,226 一分钟内对齐）算，
                    <em>不是</em>按 00:15Z live pin $71,268.01 算（audit
                    DN-006）
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
              <span className="dn-src">live · 重新钉回 Binance 封顶 · 24h 均值 +8.90%（05-31 是 +4.00%、+4.90pt 的封顶侧重设）· 封顶占用 758 / 1441 采样行 = 52.60%（05-31 是 0.1%）· 单根连续封顶段 06-01 19:38 BJ → snap（758 采样行 / 757 分钟间隔 · 12.6h，仍钉）</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bear">+6.60% → +10.95%（重钉封顶）</span>
              <span className="dn-src">区间 +4.16% / +10.95% · 谷 +4.16% @ 06-01 14:48 BJ（06:48 UTC）· 这个窗内 funding 从来没转过空付多（对照 05-31 的 −0.21% 谷）—— 价格跌穿周期锚时杠杆门直接拍上</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">+0.44%（+469 BTC）</span>
              <span className="dn-src">live · 扩张（对照 05-31 是 −373 BTC 缩）· SM long_btc −2,519（多头又被洗得更狠一次）、short_btc +3,707 —— 新空在叠、不是双侧 de-grossing</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">67.66 / 32.34</span>
              <span className="dn-src">live_db `mkt_long_pct` · 从 60.35 重新堆到 67.66（+7.31pt，越过 05-29 那根 63.85 的谱系峰）· 24h 区间 60.18 / 67.68 —— 价格跌穿锚的过程里 retail 反而冲进多头（典型陷阱形）</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−37.0k（谱系最深净 SHORT）</span>
              <span className="dn-src">live · long 8.84k − short 45.87k · short 在快照位见峰 45.87k（live 高点）、long_btc 谷 7.35k @ 2026-06-01 22:16 BJ（14:16 UTC）；SM net 谷 −37.78k @ 2026-06-02 03:41 BJ（06-01 19:41 UTC）—— 比 05-29..05-31 的任何谷都深</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 05-31 备忘</span>
              <span className="dn-v bear">−29.2k → −37.0k（−7,878 净；多 −1.93k、空 +5.94k）</span>
              <span className="dn-src">|Δ|/prior_net = 27.0% · 本子单侧重新加杠杆（long −1.93k、short +5.94k）· 05-31 的「双侧 de-gross」在这 24h 内翻成了单侧空头重堆</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v bear">41.4% / 26.72%</span>
              <span className="dn-src">GEX IV 中位数 · 904 合约（05-31 是 938；31MAY/1JUN 的正向块都已清）· 价格破锚的同时 vol bid 又抬 +1.5pt（05-31 是 39.9% / 938）· 30D RV 抬到 26.72%（05-31 是 24.91%，+1.81pt）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−1.14%（下方；live 现货参考）</span>
              <span className="dn-src">flip $72,086（前 $72,764，落 −$678）· 对 live 现货 $71,268.01（−1.14%；71,268.01/72,086 − 1 = −1.135%）/ GEX 文件 Deribit idx $71,600（−0.67%；71,600/72,086 − 1 = −0.674%，与文件自家 tile 的 −0.7% 对齐）—— 两参考都负，现货从 05-31 的「上方」翻回 flip 下方 · aggregate GEX 翻 −23.3M（05-31 是 +62.9M，−$86.2M 的符号翻面，重回净空 γ）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                周期锚在 06-01 收盘上失守、dealer 本子翻回净空 γ、funding
                重新钉 Binance 封顶、SM 本子在破位里单侧重堆空头
              </span>
              。aggregate GEX 跨 31MAY/1JUN 这对到期从
              <span className="dn-tag bull">+62.9M</span> 走到
              <span className="dn-tag bear">−23.3M</span>、0-γ flip
              <span className="dn-tag">$72,764 → $72,086（−$678）</span>、
              后放大器谱系里现货第一次
              <span className="dn-tag bear">$71,268 坐在 flip 下方 −1.14%</span>
              （live 现货参考；GEX 文件自家 Deribit idx 那侧 tile 给 −0.7%
              ，两参考都负），不在上方。日 close 走
              <span className="dn-tag">05-30 $73,857 / 05-31 $73,653</span>
              （都在 D-SMA100 周期锚 $73,216 上方）进
              <span className="dn-tag bear">06-01 $71,392（锚下 −2.49%、谱系
              首根破锚 close）</span>、未收盘的 06-02 印在
              <span className="dn-tag bear">$71,267（锚下 −2.66%）</span>。
              05-31 那篇标得很死的「周期锚失守」失效线
              <span className="dn-em">干净触发</span>、它的「锚上方消化」论
              点
              <span className="dn-em">已证伪</span>。框架里被 05-31 判过
              「断」的周期节奏（连续三个安静的 BJ 13–15 窗）今天
              <span className="dn-signal">重新装弹</span>：谱系里下一根离散
              SM 步印在
              <span className="dn-tag bear">2026-06-01 14:16 BJ（06:16 UTC）</span>
              、正好落在节奏窗内 ——
              <span className="dn-tag bear">Δnet −3,137</span>（Δlong −2,206、
              Δshort +931 同一分钟、SM net 跨
              <span className="dn-tag">−31,018 → −34,156</span>）、加一根次级
              支持步在
              <span className="dn-tag bear">2026-06-01 22:06 BJ（14:06 UTC）</span>
              （Δnet −1,645、Δlong −346、Δshort +1,299），跟 05-30 22:01
              那根同样落在 BJ-22 窗。funding 在
              <span className="dn-tag bear">06-01 19:38 BJ（11:38 UTC）</span>
              钉上封顶、之后一直没下来，已经持续
              <span className="dn-tag bear">758 采样行 / 757 分钟间隔
              （12.6h 进快照）</span>；retail 从
              <span className="dn-tag bear">60.35% → 67.66%（+7.31pt、越过
              谱系峰）</span>挤回多头；OI 在 −3.49% 的下印上反而扩
              <span className="dn-tag bear">+469 BTC</span> —— 新空在叠，
              不是去杠杆。后放大器的消化期结束，这一根是带着杠杆签名全部
              偏空确认的一根周期阶梯断点。
            </p>

            <p>
              BTC 报 <span className="dn-tag">$71,268</span> live、24h
              <span className="dn-tag bear">−3.49%</span>，在一根宽
              <span className="dn-tag">$74,001 / $70,718</span> 的区间内
              （高 @ 2026-06-01 00:47 UTC / BJ 08:47、低 @ 2026-06-01
              16:13 UTC / BJ 00:13 06-02）。05-31 那篇把
              <span className="dn-em">「1d close &lt; $73,146（D-SMA100）
              → 谱系首根周期阶梯断」</span>明确标成失效条件 —— 它在
              <span className="dn-tag bear">2026-06-01 UTC close $71,392</span>
              触发，离周期锚（今日按 parquet 最末 bar 重算 $73,216；
              昨天那篇的 $73,146 锚因为今天 close 把最老的一根 bar 推出去
              而上移 $70）还差 $1,824。未收盘的 06-02 daily
              <span className="dn-tag bear">$71,267</span> 又在那根 close
              下 $125。<span className="dn-signal">头顶 MA 现在每一根都负</span>
              （偏移按 MA 源价格面 ≈ $71,326 算，与 00:16Z MTF 扫描现货
              $71,226 一分钟内对齐；按 audit DN-006 披露的 00:15Z live pin
              $71,268.01 算，每一根的偏移读数会再深 ~0.08pt）：从最近一根
              W-SMA20 <span className="dn-tag bear">$73,035（−2.34%）</span>、
              到周期锚 D-SMA100 <span className="dn-tag bear">$73,216
              （−2.58%）</span>、W-EMA200 种子
              <span className="dn-tag bear">$73,678（−3.19%）</span>、
              D-EMA20 <span className="dn-tag bear">$75,249（−5.22%）</span>、
              D-EMA50 <span className="dn-tag bear">$75,812（−5.92%）</span>、
              D-SMA150 <span className="dn-tag bear">$75,922（−6.06%）</span>、
              D-SMA20 <span className="dn-tag bear">$75,928（−6.06%）</span>、
              D-EMA100 <span className="dn-tag bear">$76,332（−6.56%）</span>、
              D-SMA50 <span className="dn-tag bear">$77,171（−7.58%）</span>、
              W-EMA20 <span className="dn-tag bear">$77,106（−7.50%）</span>、
              W-EMA150 种子
              <span className="dn-tag bear">$78,136（−8.72%）</span>、
              D-EMA150 <span className="dn-tag bear">$78,481（−9.12%）</span>、
              D-SMA200 <span className="dn-tag bear">$79,263（−10.02%）</span>、
              D-EMA200 <span className="dn-tag bear">$80,846（−11.78%）</span>。
              05-31 的「周期锚是矩阵上唯一承重正偏移」读完了 ——
              日 / 周阶梯上零正偏移。
              <span className="dn-em">
                结构性背景全面翻面：锚上方消化 → 锚下破位 + 杠杆、仓位、
                dealer 本子签名全部对齐空头。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · 24h 本子单侧重堆空头 · BJ 13–15 节奏重新装弹，同日加一根 BJ 22 的次级步</span>
            </h2>

            <p>
              <span className="dn-signal">
                05-31 那根去杠杆是一根 print 的假信号，今天本子单侧重新
                堆空头
              </span>
              。SM net 是
              <span className="dn-tag bear">−37,036</span>，对 05-31 备忘
              的 −29,158 ——
              <span className="dn-em">+27.02% 更空</span>
              （|−37,036 − (−29,158)| / 29,158 = 27.02%）。分量：long_btc
              <span className="dn-tag bear">10.77k → 8.84k（−1.93k）</span>、
              short_btc
              <span className="dn-tag bear">39.93k → 45.87k（+5.94k）</span>
              —— 多侧又缩了一截，空侧
              <em>反而</em>多了将近 6,000 BTC。
              <span className="dn-em">
                这是单侧加杠杆空头、不再是双侧 de-grossing。
              </span>
              24h 窗内：long_btc Δ
              <span className="dn-tag bear">−2,519</span>、short_btc Δ
              <span className="dn-tag bear">+3,707</span>、net Δ
              <span className="dn-tag bear">−6,225</span>（−2,519 − 3,707
              = −6,226 ≈ −6,225 含四舍五入）—— 24h 形状是多被洗 + 空显
              加在下印里。short_btc 在 live snap 见峰
              <span className="dn-tag bear">45,874 @ 2026-06-02 00:15Z
              （BJ 08:15）</span> —— 空侧到审计时还没泄气、堆得还在走。
              long_btc 谷
              <span className="dn-tag bear">7,354 @ 2026-06-01 14:16Z
              （BJ 22:16）</span> —— 谱系新低。SM net 谷
              <span className="dn-tag bear">−37,783 @ 2026-06-01 19:41Z
              （BJ 03:41 06-02）</span>，谱系最深净空。
            </p>

            <p>
              <span className="dn-signal">
                框架的 BJ 13–15 节奏在三根安静窗之后重新装弹
              </span>
              。24h 内单分钟最大一步印在
              <span className="dn-tag bear">2026-06-01 06:16Z（BJ 14:16
              06-01）</span>、现货
              <span className="dn-tag">$73,322</span>：long_btc 一根线
              <span className="dn-tag">11,167 → 8,961</span>（−2,206 BTC
              在<em>一分钟</em>内；11,167 − 8,961 = 2,206）、short_btc 同
              分钟 <span className="dn-tag">42,185 → 43,116</span>
              （+931 BTC）、SM net
              <span className="dn-tag">−31,018 → −34,156</span>（Δnet
              −3,137）。这一步是重堆敌对-2 签名（Δshort &gt; 0 + Δlong &lt;
              0 同分钟），<span className="dn-em">落在 BJ 13–15 窗内</span>
              —— 而 05-31 那篇是在 05-29 / 05-30 / 05-31 三根都低于阈值之
              后判节奏失效的。05-31 的节奏失效读法
              <span className="dn-em">被今天的印反驳</span>：第 4 天再印
              和原节奏一致、不是 regime 改变；三根安静窗只是一个 noise
              pocket。次级支持步落在
              <span className="dn-tag bear">2026-06-01 14:06Z（BJ 22:06
              06-01）</span>、Δnet −1,645（Δlong −346、Δshort +1,299）——
              跟 05-30 22:01 那一步同样的 BJ-22 时序、幅度小但签名一样。
              <span className="dn-em">两根签名步同日落进框架窗内（BJ
              13–15 和 BJ 22）</span> —— 节奏不仅回来、次级窗也在响。
              05-31 的节奏失效读法可以掐掉了，把框架当作活的基准率读、
              不当 watchlist。
            </p>

            <p>
              杠杆侧是 regime 翻面最大声的信号。
              <span className="dn-signal">
                funding 重新钉回 Binance 封顶，并且已经钉了 12 个小时多
              </span>
              ：live <span className="dn-tag bear">+10.95% ann（封顶）</span>、
              24h 区间
              <span className="dn-tag">+4.16% / +10.95%</span>、谷
              <span className="dn-tag">+4.16% ann @ 2026-06-01 06:48Z
              （BJ 14:48 06-01）</span> —— 这个窗里 funding
              <span className="dn-em">从来没转过空付多</span>（对照 05-31
              的 −0.21% 谷在 BJ 19:39 05-30，那是 regime 松的印、今天是
              regime 紧的印）。24h 均 ann
              <span className="dn-tag bear">+8.90%</span>（05-31 是 +4.00%
              —— +4.90pt 的重新收紧）。封顶占用
              <span className="dn-tag bear">758 / 1441 采样行（52.60%）</span>
              坐在封顶 +10.95%（05-31 是 0.1% —— 回到 05-29 +51% 那个
              regime）；funding 在
              <span className="dn-tag bear">06-01 19:38 BJ（11:38 UTC）</span>
              钉上封顶、之后一段连续 758 采样行 / 757 分钟间隔进 snap，
              其间没有任何脱顶。1,440 个分钟到分钟间隔上、delta 由
              <em>平 dominate</em>（封顶段一段就贡献 757 根平间隔）；v1
              印过的 up / down / flat 计数走的是 24h+1m 窗，在修正后的
              1441 行窗下没单独重算（见 audit DN-008）。一边倒的压、
              不是平衡本子。OI Δ
              <span className="dn-tag bear">+469 BTC（+0.44%）</span>跨 24h
              —— <span className="dn-em">下印里 OI 反而扩</span>（对照 05-31
              是 −373 BTC 缩）。retail
              <span className="dn-tag bear">mkt_long_pct 67.66%</span>从
              60.35% —— +7.31pt 重堆、超过 05-29 那根 63.85% 的谱系峰、
              谱系里最挤的 retail 多头读。perp 对现货在快照
              <span className="dn-tag bear">折价 −$117.89</span>
              （1h 均 −$100.16、区间 −$147.54 / −$67.44；4h 均 −$98.27；
              24h 均 −$104.16、区间
              <span className="dn-tag bear">−$264.79 / −$0.52</span> ——
              24h basis 从未翻升水、深印一度到 −$264）。1 分钟 aggressor
              skew 在 snap
              <span className="dn-tag">+2.50</span>（1h 均 +5.68、区间
              −26.10 / +44.80）—— 这一小时一档温和买攻倾斜、没出 panic
              bid，跟 snap 前价格停住的状态一致、不是反射。
              <span className="dn-em">
                funding 钉封顶 + OI 扩 + retail 比谱系峰更挤 + SM 空侧
                在 snap 里还在堆：杠杆本子在压、不是在泄气。05-31 的
                「杠杆本子泄气」读法在今天的盘上是反的。
              </span>
            </p>

            <p>
              窗口流向<em>跨 24h、4h、1h 全偏空——新空在叠、现货被卖</em>。
              24h：价
              <span className="dn-tag bear">−3.49%</span>、OI
              <span className="dn-tag bear">+469 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −5,959</span>、期货 CVD
              <span className="dn-tag bear">Δ −210</span>、大单
              <span className="dn-tag bear">−849 BTC / 1,119 笔</span>、
              taker-net <span className="dn-tag bear">−217</span> ——
              <span className="dn-em">
                现货被狠卖（−5,959 cb_cvd 是后放大器谱系里最深的 24h
                现货卖盘）、期货也偏卖、大单净卖方、OI 在下印里扩 ——
                一根干净的空头堆形，不是 de-grossing
              </span>
              。4h（精确端点窗 2026-06-01 20:15Z → 2026-06-02 00:15Z）：
              价 <span className="dn-tag bear">−0.44%</span>、OI
              <span className="dn-tag bear">+444 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −1,315</span>、期货 CVD
              <span className="dn-tag bear">Δ −458</span>、大单
              <span className="dn-tag bear">−304 BTC / 181 笔</span>、
              taker-net <span className="dn-tag bear">−458</span> ——
              形状一样、幅度小一档；进 snap 那道压没松。1h（精确端点窗
              2026-06-01 23:15Z → 2026-06-02 00:15Z）：价
              <span className="dn-tag bear">−0.14%</span>、OI
              <span className="dn-tag bear">+296 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −544</span>、期货 CVD
              <span className="dn-tag bear">Δ −85</span>、大单
              <span className="dn-tag bear">−47 BTC / 27 笔</span>、
              taker-net <span className="dn-tag bear">−85</span> ——
              最后这 60 分钟形状还是空：−544 现货卖盘 + 新 OI 加。三个
              窗里没有一个出现轮动印、反射 bid 或者回补签名。（v1 的
              1h 与 4h 用了不精确的端点行，按 audit DN-004 修到精确
              端点窗。）
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图（00:16Z 可回溯扫描，按 audit DN-002 修正）· 8h 水下死叉 2 bar（05-31 的 8h 金叉作废）· 1d 刚跌出云、3d 云刚穿 · 4h ⚡ TD9 BUY 印了，但慢周期都在确认空</span>
            </h2>

            <p>
              <span className="dn-signal">
                8h 水下死叉 2 bar 把 05-31 的 8h 金叉抹掉了
              </span>
              —— 24h 内确认反弹的引擎周期反向。慢周期都加入空侧：
              <span className="dn-tag bear">3d 水上死叉在 2 bar</span>
              （05-31 那根 1-bar 印确认并老化了）、1d
              <span className="dn-tag bear">跌出云、刚 1 bar</span>（05-31
              是「在云内 4b」—— 破云今天才印）、3d
              <span className="dn-tag bear">云刚穿（刚穿）</span> ——
              05-31 的「在云内 9b」这次扫描里结束了。RSI 再塌：1h
              <span className="dn-tag bear">32.8</span>（05-31 是 55.8 ——
              50 重夺全部 give back、比 05-29 的 48.7 还深）、4h
              <span className="dn-tag bear">26.9</span>（前 43.9 —— 回到
              深超卖）、8h
              <span className="dn-tag bear">26.1</span>（前 38.4 —— 谱系
              最深 8h RSI）、12h
              <span className="dn-tag bear">23.3</span>（前 34.6，谱系
              最深 12h RSI）、1d
              <span className="dn-tag bear">30.0</span>（前 37.8）。15m
              还在<em>云内 2b</em>（$71.5k 头顶）、30m
              <span className="dn-tag bear">云下 41b</span>（05-31 是
              「云上 ↓73.5k 30b」—— 翻侧了）。新印一根
              <span className="dn-tag">4h ⚡ TD9 BUY 在 $71,226</span>
              —— 这次扫描里唯一一根超卖反转 hint；它跟 05-29 在 1h 与
              4h 印的、以及 05-28 在 8h 印的是同一个引擎周期 TD9 签名，
              和那些一样、<em>是 hint 不是确认</em>。TD setup 其他位置
              全部偏超卖（1h Buy 5、8h Buy 5、12h Buy 3、1d Buy 7、3d
              Buy 7）。
              <span className="dn-em">
                直读：引擎重新确认空（8h 死叉 + RSI 塌回深位）、慢周期
                加入空（1d 与 3d 今天都跌出云、3d 死叉确认）、唯一一根
                反向信号是 4h TD9 BUY hint。05-31 的「引擎确认反弹、
                慢周期未加入」读法在今天是反的：引擎确认空、慢周期加入、
                TD9 超卖是孤张牌、对手是整副的空头确认。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">71,226</td><td className="num">45.4</td><td className="neut">金叉（水下）6b</td><td className="neut">云内 2b · ↑ 71.5k</td><td>Sell 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">71,226</td><td className="num">39.0</td><td className="neut">金叉（水下）13b</td><td className="bear">云下 ↑73.1k 41b</td><td>Buy 1</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">71,226</td><td className="num bear">32.8</td><td className="bear">死叉（水下）23b</td><td className="bear">云下 ↑73.7k 19b</td><td>Buy 5</td><td>BEAR reg</td></tr>
                <tr><td>4h</td><td className="num">71,226</td><td className="num bear">26.9</td><td className="bear">死叉（水下）4b</td><td className="bear">云下 ↑74.8k 43b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">71,226</td><td className="num bear">26.1</td><td className="bear">死叉（水下）2b（刚印）</td><td className="bear">云下 ↑76.4k 51b</td><td>Buy 5</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">71,226</td><td className="num bear">23.3</td><td className="bear">死叉（水下）11b</td><td className="bear">云下 ↑78.4k 21b</td><td>Buy 3</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">71,217</td><td className="num">30.0</td><td className="neut">—</td><td className="bear">云下 ↑73.9k 1b（刚穿）</td><td>Buy 7</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">71,226</td><td className="num">41.2</td><td className="bear">死叉（水上）2b</td><td className="bear">云下 ↑74.0k 刚穿</td><td>Buy 7</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">71,226</td><td className="num">40.2</td><td className="bull">金叉（水下）7b</td><td className="bear">云下 ↑100.3k 18b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">71,218</td><td className="num">46.1</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 28b</td><td>Sell 1</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:16Z 滚动扫描（审计时可
                    回溯状态；v1 草稿引用的 00:01Z 扫描没单独存档、
                    audit DN-002 后改用 00:16Z 这份可回溯文件、逐字
                    存档于 audits/2026-06-02-desk-note.md §MTF 审计时
                    可回溯状态）。头部告警：<em>8h 水下死叉 2 bar</em>、
                    <em>3d 水上死叉 2 bar（仍确认）</em>、<em>4h ⚡ TD9
                    BUY 在 $71,226</em>。扫描现货 $71,226、24h −3.47%
                    （00:16Z MTF 扫描；live-tape 头部 00:15Z 在精确 24h
                    端点读 −3.49% —— 1 分钟差对应 &lt;0.02pt 偏差）。
                    收盘为未收盘 K 线；每个值在各周期收盘前都按临时
                    处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认头顶全负的结构性读。现货 $71,268 坐在
              <span className="dn-tag bear">W-SMA20 $73,035 下方
              −2.34%</span>（最近一根头顶线、05-29 破掉的 W-SMA20、05-31
              仍在头顶的同一根）、
              <span className="dn-tag bear">D-SMA100 $73,216 下方
              −2.58%</span>（失守的周期锚 —— 06-01 close $71,392 干净
              破、未收盘的 06-02 $71,267 守住破位）。之后按序在头顶：
              <span className="dn-tag bear">W-EMA200 $73,678（−3.19%；
              种子）</span>、
              <span className="dn-tag bear">D-EMA20 $75,249（−5.22%）</span>、
              <span className="dn-tag bear">D-EMA50 $75,812（−5.92%）</span>、
              <span className="dn-tag bear">D-SMA150 $75,922（−6.06%）</span>、
              <span className="dn-tag bear">D-SMA20 $75,928（−6.06%）</span>、
              <span className="dn-tag bear">D-EMA100 $76,332（−6.56%）</span>、
              <span className="dn-tag bear">W-EMA20 $77,106（−7.50%）</span>、
              <span className="dn-tag bear">D-SMA50 $77,171（−7.58%）</span>、
              <span className="dn-tag bear">W-EMA150 $78,136（−8.72%；
              种子）</span>、
              <span className="dn-tag bear">D-EMA150 $78,481（−9.12%）</span>、
              <span className="dn-tag bear">D-SMA200 $79,263（−10.02%）</span>、
              <span className="dn-tag bear">D-EMA200 $80,846（−11.78%）</span>。
              更高更远、已弃用：W-EMA100 $82,985（−14.05%）、W-EMA50
              $84,251（−15.34%）、W-SMA100 $88,484（−19.39%）、W-SMA50
              $92,777（−23.12%）。<span className="dn-signal">矩阵在 live
              现货上零正偏移</span> —— 日 / 周阶梯上每一根 MA 都在头顶。
              结构性近线集合现在是：W-SMA20 头顶（−2.34%）、周期锚
              D-SMA100 头顶（−2.58%）、W-EMA200 种子头顶（−3.19%）——
              一条窄 ~$2.4k 的头顶带，定义后面如果有空头 bid 印的话
              那条重夺阶梯。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-06-02 00:06Z（close
                $71,266.90）。MA 源域按桌面政策只用 2024-2026 parquet
                子集（127 根周 bar），<em>不是</em>完整 btcusdt_1m_*
                glob —— 完整 glob 会给 353 根周 bar、W-SMA150 $74,735
                （live 下 −4.64%）、W-SMA200 $61,848（+15.23%）、
                W-EMA200 $69,101（+3.14%），会推翻上面那条「零正偏移」
                的读；这个子集是之前几篇延续下来的口径、桌面继续保留
                以保口径一致（audit DN-005）。子集下 W-SMA150 / W-SMA200
                不可计算；W-EMA150 $78,136（−8.72%）和 W-EMA200
                $73,678（−3.19%）能显示是因为 EMA 从可用历史 seed、按
                种子口径披露。上面偏移按 MA 源价格面（parquet 邻近
                ≈ $71,326，与 00:16Z MTF 扫描现货 $71,226 一分钟内
                对齐）算，<em>不是</em>按 00:15Z live pin $71,268.01 算
                —— 按 live pin 算的话每一根偏移再深 ~0.08pt（举例：
                W-SMA20 −2.42%、D-SMA100 −2.66%、W-EMA200 −3.27%、
                D-EMA20 −5.29%；见 audit DN-006）。显示的 MA 水位按
                $ 取整、偏移按精确序列值算。日 close：05-27 $74,418、
                05-28 $73,591、05-29 $73,428、05-30 $73,857、05-31
                $73,653、06-01 $71,392（谱系首根破周期锚 close）、
                06-02 未收盘 $71,267 —— 谱系里那条「连续三根锚上」
                （05-30 / 05-31 + 上篇未收盘的 05-31）在 06-01 close
                上断掉了。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子翻回净空 γ、aggregate −23.3M · flip 落到 $72,086（现货在下方、05-31 翻面之后首根）· 2JUN −9.08M 今日 08:00Z 结算 · 5JUN −25.58M 是 strip 上的新放大器</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子的 γ regime 跨 31MAY / 1JUN 对到期清完正向块
                后翻回净空 γ
              </span>
              。aggregate GEX 是
              <span className="dn-tag bear">−23.3M / 1%</span>（05-31 是
              +62.9M —— −$86.2M 的符号翻面回放大态）；本子重新是净空
              γ（放大 vol）。0-γ flip 移动
              <span className="dn-tag">$72,764 → $72,086（−$678）</span>。
              dist 给两个参考（按 audit DN-007 用两个）：live 现货参考
              <span className="dn-tag bear">−1.14%</span>（71,268.01 /
              72,086 − 1 = −1.135%）；GEX 文件 Deribit idx 参考
              <span className="dn-tag bear">−0.67%</span>（71,600 / 72,086
              − 1 = −0.674%，与文件 tile −0.7% 对齐）。两参考都负、现货
              在 flip 下方 —— 05-31 那根「现货在 flip 上方」之后首根
              下方快照。墙图在近头顶 strike 上 hard 翻号：
              <span className="dn-tag bear">$70k −28.64M</span>（新的最重
              墙；05-31 是 $60k −8.82M 的崩盘 put 残余、$70k 当时印
              −8.44M —— $70k 的负幅度翻了三倍）、
              <span className="dn-tag bear">$72k −12.79M</span>（05-31 是
              −8.45M）、
              <span className="dn-tag bear">$60k −10.80M</span>、
              <span className="dn-tag bear">$68k −7.89M</span>、
              <span className="dn-tag bear">$65k −6.34M</span>、
              <span className="dn-tag bear">$71k −5.74M</span>、
              <span className="dn-tag bull">$80k +22.31M</span>（最重正
              墙、从 +23.93M 落但仍是 strip 上的正墙）、
              <span className="dn-tag bull">$82k +9.46M</span>、
              <span className="dn-tag bull">$78k +6.61M</span>、
              <span className="dn-tag bull">$90k +5.07M</span>。负簇
              $60k–$72k 合计大约
              <span className="dn-em">−75M dealer 放大</span>
              在现货周围 —— bulk 在我们脚下，$72k −12.79M 那根墙在 live
              $71,268 上方 $804、刚在头顶；正向 $78k–$90k 簇合计大约
              +44M、远得多（按 audit DN-009 改：v1 那句「全在现货下方」
              不准、因为 $72k 在现货上方，并且列出的墙加起来是 −75.30M
              不是 −72M）。
              <span className="dn-em">
                dealer 本子现在的结构是：跌下来就放大、要是冲回 $78k+
                头顶簇才会被压住 —— 跟 05-31 的阻尼 setup 反过来。放大
                regime 回来了，并且 $70k −28.64M 那根墙基本贴在现货上。
              </span>
              2JUN26 0.3DTE
              <span className="dn-tag bear">−9.08M</span> 在今日 08:00Z
              印结算（快照后约 7.75h）；GEX 文件来自 00:00Z、结算后除
              2JUN 的 aggregate ≈ −23.3M − (−9.08M) = −14.2M，仍净负但
              不那么负。前向 expiry：
              <span className="dn-tag bear">3JUN 1.3 −0.88M</span>、
              <span className="dn-tag bear">4JUN 2.3 −0.17M</span>、
              <span className="dn-tag bear">5JUN 3.3 −25.58M</span>
              <span className="dn-em">（strip 上的新放大器 —— 上一篇放
              在「宏观再生 hedge-roll 监控」上的 5JUN 3.3 DTE 块，现在
              是前向里最重的负权重）</span>、
              <span className="dn-tag bear">12JUN 10.3 −7.21M</span>、
              <span className="dn-tag bull">19JUN 17.3 +1.19M</span>、
              <span className="dn-tag bear">26JUN 24.3 −5.12M</span>、
              <span className="dn-tag bull">31JUL 59.3 +10.03M</span>、
              <span className="dn-tag bull">28AUG 87.3 +0.28M</span>、
              <span className="dn-tag bull">25SEP 115.3 +8.35M</span>、
              <span className="dn-tag bull">25DEC 206.3 +9.37M</span>、
              <span className="dn-tag bull">26MAR27 297.3 +1.11M</span>。
              5JUN −25.58M 这一块是自 29MAY −96.34M 放大器以来最大一根
              单 expiry 负权重 —— 规模小（约 27% 上一根的量级），但是
              strip 上当下主导的近端负权重。它的 3.3-DTE 结算窗是
              5JUN26 08:00Z；下面列了这根结算的决策条件阶梯。
            </p>

            <p>
              904 合约的 IV 中位数是
              <span className="dn-tag bear">41.4%</span>（05-31 是 39.9% /
              938 —— 价格破锚的同时 vol bid 抬 +1.5pt）对 30D close-to-
              close RV
              <span className="dn-tag">26.72%</span> —— 链级溢价
              <span className="dn-tag">~+14.7pt</span>（05-31 是 ~+15.0pt
              —— 基本没动，IV 和 RV 同步上抬、价差不变）。这是 N 合约的
              链中位数、<span className="dn-em">不是</span>可交易价差；
              expiry- / strike-level vega、skew、期限结构仍未载入、vol
              读法保持 framework only。904 合约对 05-31 的 938：−34 是
              31MAY +17M 与 1JUN +19.49M 两块清掉但没近端等量替代；2JUN
              −9.08M 还有 8h 才清。RV 方法：30D close-to-close、
              logret.std × √365 × 100、用最末 30 根日 log return
              （= 连续 31 根日 close）、锚自 parquet 最末 bar 2026-06-02
              00:06Z；底层 31-close 窗现在包含 06-01 这根 dump、30D RV
              从 24.91%（05-31 备忘）抬到 26.72%（+1.81pt vol 扩张）。
              参考：最末 29 returns / 30 closes 读 26.22%；页面值
              26.72% 来自 30 returns。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · Tier-1 基本平（10Y 不动 4.45%、HY OAS +2bp 到 2.74%、MOVE +3.11 到 73.3 是当日最硬一根）· DXY +0.10 到 99.01、Fed 净流动性 −$0.058T 到 $5.872T · BTC 对 TradFi 脱钩重新拉宽到 −9.18pt（前 −5.84pt）</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观盘几乎没动、BTC 一个人下、脱钩拉宽是因为 BTC 落、
                不是 TradFi 翻倒
              </span>
              。面板渲染 2026-06-01 22:15Z、比快照早约 2.0h（比 05-31
              那篇 9.9h 滞后新鲜得多）。US 10Y nominal
              <span className="dn-tag">4.45%（0.0bp）</span>、regime z
              <span className="dn-tag bear">+1.43</span>、偶发 z
              <span className="dn-tag">+0.17</span> —— RISK-OFF 标、当日
              不动。10Y TIPS real
              <span className="dn-tag bear">2.07%（+1.0bp）</span>、regime z
              <span className="dn-tag bear">+1.40</span>、偶发 z
              <span className="dn-tag">+0.76</span> —— 仍 RISK-OFF、略硬
              一点。5Y5Y BE 通胀
              <span className="dn-tag bear">2.26%（+2.0bp）</span> ——
              小幅抬一档。HY OAS
              <span className="dn-tag bear">2.74%（+2.0bp）</span>、regime z
              <span className="dn-tag bull">−1.17</span>、偶发 z
              <span className="dn-tag bull">−1.10</span> —— 仍深 risk-on
              偶发、当日 2bp 宽（05-31 是 2.72% / −1.32 / −1.72；松信用
              偶发在压一点、但仍松）。MOVE 债波
              <span className="dn-tag bear">73.3（+3.11）</span> —— 当日
              Tier-1 最硬一根（05-31 是 70.2 —— 债 vol 被抬）。两根抵消
              在飘：DXY
              <span className="dn-tag bear">99.01（+0.10 当日 · +0.10 自
              05-31）</span>、偶发 z
              <span className="dn-tag bear">+0.78</span> —— 从 05-31 那
              根「软」翻硬；Fed 净流动性
              <span className="dn-tag bear">$5.872T（−0.058T 新鲜
              周度印）</span>、偶发 z
              <span className="dn-tag bear">−2.28</span> —— 新印里有
              小幅收缩。US-JP 10Y 利差
              <span className="dn-tag bear">1.94%（0.0bp）</span>；USD/JPY
              <span className="dn-tag bear">159.62（+0.27 当日 · +0.36
              自 05-31）</span>（日元再软）。NFCI −0.510（陈旧 10d）。
              <span className="dn-em">
                净：re-grow 闸又合一点（HY OAS 闸 2.78% —— 在 2.74%、
                4bp 触发，05-31 是 6bp；10Y 闸 4.53% —— 在 4.45%、8bp
                触发，不动）、reclaim-long 利率筛（10Y &lt; 4.55%）在
                4.45% 仍真、宏观盘在 BTC 要紧的那几根上仍净 risk-on——
                但 BTC 自己 −3.49%，不是宏观触发。BTC 对 TradFi 脱钩在
                本印上拉宽到 −9.18pt（BTC −7.00% vs NQ +2.18%）、从
                05-31 的 −5.84pt（按 05-31 备忘：BTC −3.84% vs NQ +2.00%）
                —— 缺口拉宽是 BTC 自己延伸下、不是 TradFi 翻倒（NQ +0.18pt、
                SP500 +0.61pt、MSFT −0.56pt 在 7d 窗里日变化基本平）
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
                <tr><td>US 10Y nominal</td><td className="num">4.45%</td><td className="num">0.0bp</td><td className="num bear">+1.43</td><td className="num">+0.17</td><td className="bear">紧 · 不动</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.07%</td><td className="num bear">+1.0bp</td><td className="num bear">+1.40</td><td className="num">+0.76</td><td className="bear">紧 · 仍 RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.26%</td><td className="num bear">+2.0bp</td><td className="num">+0.35</td><td className="num">+0.24</td><td className="neut">无标 · 小幅抬</td></tr>
                <tr><td>HY OAS</td><td className="num">2.74%</td><td className="num bear">+2.0bp</td><td className="num bull">−1.17</td><td className="num bull">−1.10</td><td className="bull">松 · risk-on 偶发 · 距 re-grow 闸 4bp</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.510</td><td className="num">0.00</td><td className="num">+0.10</td><td className="num bull">−0.81</td><td className="stale">陈旧 10d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">73.3</td><td className="num bear">+3.11</td><td className="num">−0.29</td><td className="num">+0.04</td><td className="bear">松 · 当日硬 +3.11（Tier-1 最硬一根）</td></tr>
                <tr><td>DXY</td><td className="num">99.01</td><td className="num bear">+0.10</td><td className="num">+0.58</td><td className="num bear">+0.78</td><td className="bear">更硬 · 反转 05-31 那根软</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.872T</td><td className="num bear">−0.058T</td><td className="num">+0.22</td><td className="num bear">−2.28</td><td className="bear">新鲜周度印 · 小幅收缩</td></tr>
                <tr><td>USD/JPY</td><td className="num">159.62</td><td className="num bear">+0.27</td><td className="num bear">+1.26</td><td className="num">+0.97</td><td className="bear">日元再软（自 05-31 +0.36）</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.94%</td><td className="num">0.0bp</td><td className="num bull">−0.92</td><td className="num">+0.17</td><td className="bull">不动</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7657</td><td className="num">−0.01</td><td className="num bull">−1.93</td><td className="num bull">−2.15</td><td className="bull">无标 · 松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp（月度）</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、166 rows、汇总 00:01Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.267</span>
              （05-31 是 0.237、拉紧 —— 越过 0.25 阈值回到 NORMAL 区段、
              不再 IDIOSYNCRATIC）。BTC 列出的对齐按 |r| 排：CL
              <span className="dn-tag">−0.341</span>、BRENT
              <span className="dn-tag">−0.324</span>、NQ
              <span className="dn-tag">+0.293</span>（前 +0.372、松）、
              SP500 <span className="dn-tag">+0.279</span>、EUR
              <span className="dn-tag">+0.275</span>、TSLA
              <span className="dn-tag">+0.267</span>、GOLD
              <span className="dn-tag">+0.259</span>、PLAT
              <span className="dn-tag">+0.233</span>、AMZN
              <span className="dn-tag">+0.207</span>、JP225
              <span className="dn-tag">+0.204</span>、SILVER
              <span className="dn-tag">+0.204</span>、META
              <span className="dn-tag">+0.188</span>、COPPER
              <span className="dn-tag">+0.180</span>、GOOGL
              <span className="dn-tag">+0.176</span>、URNM
              <span className="dn-tag">+0.173</span>、PALL
              <span className="dn-tag">+0.105</span>、NVDA
              <span className="dn-tag">+0.103</span>。7d 相对表现：
              <span className="dn-tag bear">BTC −7.00%</span>（从 05-31
              的 −3.84% 拉宽 —— 大部分这根落都来自 06-01 这根 candle）、
              NQ <span className="dn-tag bull">+2.18%</span>、SP500
              <span className="dn-tag bull">+0.74%</span>、JP225
              <span className="dn-tag bull">+2.86%</span>、MSFT
              <span className="dn-tag bull">+7.79%</span>（仍 TradFi
              领头、从 +8.35% 松）、META
              <span className="dn-tag bear">−2.01%</span>（从 05-31 的
              +3.10% 翻面）、TSLA
              <span className="dn-tag bear">−3.60%</span>（从 +0.24%
              翻面）、AAPL <span className="dn-tag bear">−1.38%</span>、
              NVDA <span className="dn-tag bull">+2.96%</span>（从 −1.68%
              翻面 —— 重新冒头）。金属软：GOLD
              <span className="dn-tag bear">−1.37%</span>、SILVER
              <span className="dn-tag bear">−3.22%</span>、PLAT
              <span className="dn-tag bear">−1.62%</span>、PALL
              <span className="dn-tag bear">−1.55%</span>。能源转上：CL
              <span className="dn-tag bull">+0.47%</span>（对照 −2.57%）、
              BRENT <span className="dn-tag bear">−0.26%</span>（对照 −2.24%）、
              NGAS <span className="dn-tag bull">+3.96%</span>。
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 落后拉宽到约 −9.18pt（BTC −7.00%
                vs NQ +2.18%）、从 05-31 的 −5.84pt —— 缺口拉宽是 BTC
                自己往下延、不是宏观触发。脱钩读法仍是：内生于 crypto、
                BTC 自己跑、不是宏观触发。|r| 均值回到 0.25 上方反映的
                是「共同跌」轮动（META / TSLA / AAPL / 金属上周都加入
                BTC 的下侧）
              </span>
              。JGB 月度 2.52% 带 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 回补反弹 scout DROPPED（周期锚失守）· runner / put-spread 尾仓仍平 · anchor-break 空 scout 递延为框架监控（audit DN-001 降级、不可交易）· 本次快照无新交易</span>
            </h2>

            <p>
              <span className="dn-signal">
                昨天的「锚上方消化」论点已死、回补反弹 scout 是 dropped、
                不是递延
              </span>
              。05-31 scout 挂在「2-of-3 腿」（W-SMA20 重夺 AND short_btc
              泄破 38k）—— 一条都没印，bottom-of-stack 止损（1d close
              &lt; D-SMA100 周期锚）在 06-01 close 上触发。scout 退场、
              不在本子里；多头入场要等一根全新的结构性 setup（周期阶梯
              破后），不是这一根的滚续。runner 与 29MAY put-spread 尾仓
              从 05-29 起仍平。今日交易本子重新落点：无多 scout、无新空
              （不在 +52% 封顶占用 funding 压 + retail 处于谱系峰挤多的
              盘上追入场），并在 strip 上标注一根新放大器（5JUN26
              −25.58M、3.3 DTE），它在后续四个交易日里 gate 决策。
              anchor-break 空 scout 是<em>框架监控</em>而已 —— 今天没
              live 入场、没 live size、没 live 阶梯。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · 主仓 · runner 阶梯完成 · 在 29MAY 08:00Z 到期结算上平（状态从 05-31 延续）</span>
              <div className="dn-trade-name">
                破位延伸空 —— 在 29MAY 08:00Z 到期结算上平（自 05-31 不变）
              </div>
              <div className="dn-thesis">
                状态自 05-31 备忘不变：在 29MAY 放大器结算上平、无残余、
                阶梯完成。撑这单的结构性背景是 −96.34M 29MAY 块 ——
                那一块清掉、这单不应再以「滚续」名义重开。今天破位的
                重开要靠下面那个新空 scout 的结构性 setup、不是这一根
                的延续。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">在 05-29 08:00Z 平（放大器结算）· 无残余仓位 · 自 05-31 不变</span></div>
                <div><span className="dn-lvl-k">最终阶梯</span><span className="dn-lvl-v">目标 #1 W-SMA20 $74,151（05-28 取）· 目标 #2 W-EMA200 种子 $73,710（在 05-28 14:01 重堆上取）· 目标 #3 D-SMA100 $72,958（24h 低 $72,614 插针穿过）</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">不要把这单按「滚到 06-01 锚破」追入场 —— 下面的 anchor-break 新空 scout 要按它自己的结构性 setup 走、不是这单的滚续</span></div>
              </div>
              <div className="dn-gating">
                <b>交易已平。</b>谱系纪律仍在：不滚、不补、不在末段加。
                05-30 / 05-31 那根后放大器反弹只撑了正好两根日 close
                就反向 —— 在 29MAY 结算上平 runner、不是在 30MAY 高位
                上平，事后看是对的。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">DROPPED · scout · 周期锚在 06-01 close 上失守（05-31 标明的失效线）</span>
              <div className="dn-trade-name">
                回补反弹 scout —— DROPPED（不是递延）：1d close $71,392 破 D-SMA100 周期锚 $73,216，正是 05-31 标的止损
              </div>
              <div className="dn-thesis">
                05-31 scout 挂在三条触发上（1h close &gt; W-SMA20 $74,161
                AND SM short_btc 泄破 38k）。两条腿都没印。bottom-of-
                stack 止损（1d close &lt; D-SMA100 周期锚）在 2026-06-01
                UTC close $71,392 上干净触发 —— 比上一篇 $73,146 锚低
                $1,754、比今日重算 $73,216 锚低 $1,824。05-31 那篇明
                标了这就是证伪线：<em>「『完整中周期』读结束、『锚上方
                消化』论点证伪」</em>。两个条件今天都成立：完整中周期
                读完了、锚上方消化论点证伪了。scout 从本子里 DROPPED、
                不是递延 —— 多头重开要等一根全新的结构性 setup
                （周期锚至少一根日 close 上重夺、dealer 本子 aggregate
                γ 转正、流向印出回补形），不是这同一根触发的收紧。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout 状态</span><span className="dn-lvl-v">DROPPED（不是递延）· 周期锚在 06-01 close 上失守 · 05-31 标的止损条件干净触发</span></div>
                <div><span className="dn-lvl-k">多头重开门槛（如有需要的新多论点）</span><span className="dn-lvl-v bull">1d close &gt; D-SMA100 $73,216 AND aggregate GEX 翻 &gt; 0 AND 1h 回补形印（OI 缩 + 现货 CVD bid + SM short_btc 泄）—— 三腿全要</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v bear">不要在 funding 钉封顶 + retail 挤到谱系峰 + dealer 本子在 flip 下方的盘上买周期锚破位</span></div>
              </div>
              <div className="dn-gating">
                <b>交易 dropped。</b>05-31「等 3 腿中 2 腿」的纪律是对的：
                腿一直没到、反而 anchor 先破，耐心读避开了进入一根已
                确认周期阶梯断的多头。下一根多头论点是结构性的（锚重夺
                + dealer 本子修复 + 流向回补形），不是技术的（单线破）。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 空 scout · DEFERRED · 在后续一篇审计过的备忘里再说（按 audit DN-001 降级、本篇不可交易）· 5JUN26 −25.58M 标注为 strip 上新放大器</span>
              <div className="dn-trade-name">
                Anchor-break 空 scout —— 框架监控、不是开仓
              </div>
              <div className="dn-thesis">
                05-31 那篇「press 再延伸」的明示再装弹条件
                （<em>「fresh re-stack SM Δ ≤ −3k 推 SM &lt; −32k AND 1h
                close &lt; $73,130」</em>）今天印真：06-01 14:16 BJ 那根
                重堆敌对-2 Δnet −3,137 推 SM net 穿 −32k 到 −34,156，
                06-01 09:00 UTC 之后的所有 1h close 都印在 $73,130 下
                （06-01 09:00 那根 1h close 是 $72,790）。dealer 本子
                放大器载体翻面：29MAY −96.34M 已结、5JUN26 −25.58M
                （今日 3.3 DTE）是 strip 上的新结构性载体，规模 ~27%
                上一根。
                <em>这让做空 scout 的框架条件变得有意思、不等于交易
                live</em>。codex 敌对式审计在 v1 上（DN-001）指出这个
                方案带了高于桌面框架 0.2R scout 上限的 size（A 0.3R、
                总 cap 0.4R）和「在 $70k 平半」阶梯 —— 越出了一篇
                single-snapshot 备忘允许的范围。按那一条 audit，本卡
                降级为框架监控：今天没 live 入场、没 live size、没
                live 阶梯、没 live 止损；监控向前留作一份列表 ——
                <em>什么样的印出要发生，才会有一篇后续审计过的备忘把
                scout 提升到桌面 0.2R 上限的 live 入场</em>。仓位纪律
                不变：不在 funding 钉封顶 + retail 挤到谱系峰的盘上追。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">监控 shape A（潜在 cover-rally setup、不可交易）</span><span className="dn-lvl-v">伸到 $73,035（W-SMA20）– $73,216（失守的 D-SMA100 锚）的拉升 AND funding 离顶 AND SM short_btc 不再延伸 —— 后续一篇审计过的备忘可以把它提升到 0.2R scout；今天只监控、无 live size</span></div>
                <div><span className="dn-lvl-k">监控 shape B（潜在 breakdown setup、不可交易）</span><span className="dn-lvl-v">新一根重堆敌对-2（Δshort &gt; 0 + Δlong &lt; 0 同分钟、Δnet ≤ −3k）AND 1h close &lt; $70,718（06-01 低）—— 后续一篇审计过的备忘可以把它提升到 0.2R scout；今天只监控、无 live size</span></div>
                <div><span className="dn-lvl-k">参考重夺位（会让后续 scout 失效）</span><span className="dn-lvl-v bull">1h close &gt; $73,678（W-EMA200 种子）—— 最深近线重夺、会让任何基于「周期阶梯断」的后续 scout 失效</span></div>
                <div><span className="dn-lvl-k">参考阶梯（结构性水位、不是下单目标）</span><span className="dn-lvl-v">$70,000（$70k −28.64M 墙、strip 上最重负墙 —— 现货下方天然磁石）· $68,000（下一根负簇 $68k −7.89M + $65k −6.34M）· $60,000（崩盘 put 残余 $60k −10.80M、空头谱系结构底）</span></div>
                <div><span className="dn-lvl-k">如果升级、size 上限</span><span className="dn-lvl-v">0.2R 总（scout 上限）、按哪一边 shape 先确认就走那一边 · 不分批 · 本备忘不写「平半」阶梯</span></div>
                <div><span className="dn-lvl-k">放大器窗</span><span className="dn-lvl-v">5JUN26 08:00Z 结算（今日 3.3 DTE）· −25.58M 这一块应该按 29MAY −96.34M 在 29MAY 08:00Z 解的方式进它自己的窗 · 除 5JUN 之后 aggregate 大约 +2.3M（−23.3M − (−25.58M)）、回到接近平</span></div>
              </div>
              <div className="dn-gating">
                <b>状态：</b>框架监控、不是开仓。今天没 live 入场、没
                live size、没 live 止损、没 live 平台 —— 上面那些是
                后续一篇审计过的备忘要参考的水位、不是这一篇的指令。
                <b>硬规则：</b>不在 funding 钉封顶 AND retail &gt; 65%
                多的盘上入场 —— 这两条今天都满足。两个 shape 走向 live
                setup 的第一根信号会是：funding 连续 30 分钟脱顶
                （shape A）、或者一根 1h close 明显跌破 $70,718 + 一根
                新 Δnet ≤ −3k 重堆敌对-2（shape B）。这两条要触发，是
                下一篇备忘做 promotion 的事 —— 这一篇不做。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · 宏观尾 · 在 29MAY 08:00Z 结算上平（状态自 05-31 延续；今天 re-grow 闸合一点但没触发）</span>
              <div className="dn-trade-name">
                下行 put-spread —— 在 29MAY 08:00Z 结算上平；不滚（re-grow 闸合一点、仍差 4–8 bp 触发）
              </div>
              <div className="dn-thesis">
                状态自 05-31 备忘不变：在 29MAY Deribit 结算上平。宏观
                re-grow 闸今天合一点（HY OAS 2.78% 闸 —— 在 2.74%、4bp
                触发，05-31 是 6bp；10Y 闸 4.53% —— 在 4.45%、8bp 触发，
                不动）。reclaim-long 利率筛（10Y &lt; 4.55%）在 4.45%
                仍真；这是独立筛、需要一根 BTC 内部转向才能转成 scout
                入场（而且筛筛的是多头侧、不是上面那根 BTC 内部的空
                scout）。还没新对冲 —— 上面那根 BTC 内部空 scout 在
                结构上比这种水位的宏观尾滚续更大、并且本备忘里它已经
                降级为框架监控。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">在 05-29 08:00Z 平（Deribit 29MAY 结算）· 无残余仓位 · 不滚 · re-grow 闸距触发 4–8bp</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（触发滚到 5JUN / 12JUN）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close（当前 2.74%、距 4bp、05-31 是 6bp）OR 10Y &gt; 4.53% close（当前 4.45%、距 8bp、不动）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close —— 在 4.45% 仍真；等 BTC 内部转向（当前筛筛的是多头侧、上面那根空 scout 没入场）</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸（HY OAS &gt; 2.78%、10Y &gt; 4.53%）
                是随水位下漂调的酌情盯位、不是回测断点。这种水位上一根
                新尾（5JUN26 −25.58M 或 12JUN26 −7.21M）已经不带 29MAY
                那种放大器顺风 —— 块的规模缩到原来的四分之一。上面那根
                BTC 内部空 scout 现在带着更高的结构性把握 —— 但本备忘
                把它降级为框架监控；宏观尾应该只在宏观侧触发（HY OAS
                &gt; 2.78% 或 10Y &gt; 4.53%）时再开，不是单凭 BTC 盘开。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 周期节奏 RE-ARMED · 06-01 BJ 13–15 步 + 06-01 BJ 22 步同日双印重堆敌对-2 签名 · 05-31 的节奏失效读法被驳</span>
              <div className="dn-trade-name">
                Squeeze-cycle —— 节奏重新装弹：第 4 天 BJ 14:16 落在 13–15 窗内的印恢复了框架；同日加一根 BJ-22 步确认次级窗
              </div>
              <div className="dn-thesis">
                05-31 那篇在 05-29 / 05-30 / 05-31 三根都低于阈值之后判
                BJ 13–15 节奏失效（05-29 +768、05-30 −349、05-31 −109，
                全部 sub-threshold）。今天节奏在窗内印得很干净：06-01
                14:16 BJ（06:16 UTC）Δnet −3,137，Δlong −2,206、Δshort
                +931 同分钟 —— 是 05-15..05-28 谱系里那种签名重堆敌对-2
                形状。次级支持步在 06-01 22:06 BJ（14:06 UTC）Δnet
                −1,645，Δlong −346、Δshort +1,299 —— 跟 05-30 22:01 步
                同样 BJ-22 时序、签名一样。
                <span className="dn-em">
                  同日两根框架命名时窗内印出签名形状，驳回 05-31 的节奏
                  失效读法。「4 天安静 - 第 5 天印」的形状跟 7 天基准率
                  里的 noise pocket 一致，不像 regime 改变。把节奏当作
                  活的基准率读 —— 在 BJ 13–15 窗里押下一根离散步、
                  BJ-22 印当作次级确认
                </span>
                。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">节奏 RE-ARMED · 05-29 / 05-30 / 05-31 是一个 noise pocket · 06-01 BJ 13–15 干净印（Δnet −3,137 为窗内最大）+ BJ 22 同日次级印（Δnet −1,645）</span></div>
                <div><span className="dn-lvl-k">主延伸事件（06-01）</span><span className="dn-lvl-v">重堆敌对-2 @ 2026-06-01 06:16Z（BJ 14:16 06-01）· 现货 $73,322 · Δlong −2,206、Δshort +931、Δnet −3,137（24h 窗内单分钟最大 Δ）</span></div>
                <div><span className="dn-lvl-k">次级延伸事件（06-01）</span><span className="dn-lvl-v">重堆敌对-2 @ 2026-06-01 14:06Z（BJ 22:06 06-01）· 现货 $71,810 · Δlong −346、Δshort +1,299、Δnet −1,645（次级窗、小幅同签名）</span></div>
                <div><span className="dn-lvl-k">24h 内 SM 谷（最空）</span><span className="dn-lvl-v">−37,783 BTC @ 2026-06-01 19:41Z（BJ 03:41 06-02）· 谱系最深净空</span></div>
                <div><span className="dn-lvl-k">步后价格路径</span><span className="dn-lvl-v">主步 $73,322 → 24h 低 $70,718（离 BJ 14:16 步 −$2,604）→ 快照 $71,268（离主步入场 −$2,054 —— 净延续，不是反弹）</span></div>
                <div><span className="dn-lvl-k">前向 gating</span><span className="dn-lvl-v">盯 06-02 的 BJ 13–15 窗（UTC 05:00–07:00）等周期-3 step 2、再盯 06-02 的 BJ 22 窗（UTC 14:00）等次级；任何一个窗内新印一根 Δnet ≤ −3k 都确认节奏；sub-threshold 印会再考验节奏读法</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>被判失效的基准率在下一个观察上重新印
                就要当作 noise-and-recovery、不是 regime 永久改变。
                05-29 / 05-30 / 05-31 三根安静窗坐在无放大器消化期里、
                今天的节奏重印正好踩在 strip 上新放大器（5JUN26 −25.58M、
                3.3 DTE）到位上。重堆敌对-2 签名现在同时是盘面读 + 时间
                先验；06-02 的 BJ 13–15 窗如果也印干净，周期-3 读就拧
                紧。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 周期锚失守 · γ 翻回负 · funding 钉封顶 · 空 scout DEFERRED（框架监控、不 armed）· 节奏 RE-ARMED 等 06-02 BJ 13–15 窗内周期-3 step 2</span>
            </h2>

            <p>
              对照 05-31 决策条件：周期锚失守条件干净触发（06-01 close
              $71,392 &lt; $73,146 / 今日重算 $73,216 —— 谱系首根周期
              阶梯断）；锚守 + γ 保持正条件不成立（两条腿都反向：锚破、
              γ 翻回 −23.3M）；回补反弹 scout 没触发、按它的止损 DROPPED；
              「press 再延伸」条件在 06-01 14:16 重堆敌对-2 上印真
              （Δnet −3,137 推 SM net 穿 −32k 到 −34,156、同日 1h close
              &lt; $73,130）；周期-2 step 4 节奏 claim 被 06-01 BJ 13–15
              印驳回；宏观 re-grow 闸合一点（HY OAS 2.78% 闸 在 2.74%、
              4bp 触发）但没触发；reclaim-long 利率筛在 4.45% 仍真；
              31MAY26 到期干净结算（正向 +17.00M 在 05-31 08:00Z 清、
              1JUN +19.49M 也在 06-01 08:00Z 清，两块都拿掉了 06-01
              dump 之前的正向 dealer 支撑）。
              <em>三条结构性条件触发（锚失守、press 再延伸、节奏 re-arm
              驳回上一篇）、一条守住（利率筛）、一条逼近（HY OAS 闸）、
              多头侧 scout 按止损退场。</em>
              今日条件围绕一根失守的周期锚、一个 re-armed 的净空 γ
              dealer 本子、strip 上新放大器（5JUN26 −25.58M）、funding
              钉封顶、以及一个等下一根 BJ 13–15 窗印周期-3 step 2 的
              活节奏 重新落点：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>2JUN26 到期今日结算（08:00Z、快照后约 7.75h）</td><td>−9.08M 负向块清；除 2JUN 后 aggregate ≈ −14.2M、仍净负但不那么负 —— 当日内放大减一档</td><td>监控 —— 干净结算（不出 vol 事件）会把下一个 gating 事件放到 5JUN −25.58M 块上；如果 08:00Z 印出 vol 事件，会让 dump 再延伸</td></tr>
                <tr><td>5JUN26 放大器窗（今日 3.3 DTE、08:00Z 5JUN）</td><td className="bear">strip 上最重单 expiry 负权重 −25.58M、规模 ~27% 29MAY 放大器 · 预计在那个窗里主导 dealer 本子</td><td>监控 —— 这就是上面 deferred 空 scout 框架监控钉的结构性参考窗；本篇没有 live 仓位要带过去</td></tr>
                <tr><td>Cover-rally OR breakdown 监控（deferred 空 scout、framework only）</td><td className="bear">shape A：拉升进 $73,035–$73,216 AND funding 离顶；shape B：1h close &lt; $70,718 AND 新一根 Δnet ≤ −3k 重堆</td><td>监控 —— 本篇里两个 shape 都不是 live 入场（audit DN-001 降级）；后续一篇审计过的备忘可以把先确认那一边升到 0.2R scout（按桌面 scout 上限）、参考重夺位 $73,678、参考阶梯 $70,000 → $68,000 → $60,000</td></tr>
                <tr><td>周期阶梯断确认（下一道闸）</td><td className="bear">1d close &lt; W-EMA200 种子 $73,678（在未收盘的 $71,267 上已真）AND 1d close &lt; 周期锚 $73,216（在 06-01 close $71,392 上已真）—— 两条腿都确认</td><td>读：周期阶梯下了一阶；下一根参考阶梯是 $70,000 −28.64M 墙、再 $68,000 负簇、再 $60,000 崩盘 put 残余</td></tr>
                <tr><td>锚重夺（多头重开门槛）</td><td className="bull">1d close &gt; D-SMA100 $73,216 AND aggregate GEX 翻 &gt; 0 AND 1h 回补形印（OI 缩 + 现货 CVD bid + SM short_btc 泄）—— 三腿全要</td><td>三条都要、无动作 —— 单线破重夺不够；05-30 / 05-31 那两根锚上 close 就是警示</td></tr>
                <tr><td>周期-3 step 2 节奏（06-02 BJ 13–15）</td><td className="bear">下一根 BJ 13–15 窗 = 2026-06-02 05:00–07:00Z；窗内新一根 Δnet ≤ −3k 确认节奏；次级 BJ 22 窗 = 2026-06-02 14:00Z</td><td>盯节奏印 —— 是周期-3 step 2；sub-threshold 印会再考验节奏 claim、并削弱「press 再延伸」读</td></tr>
                <tr><td>funding 脱顶（杠杆门信号）</td><td className="bull">funding 离开 +10.95% 封顶 ≥ 30 分钟连续 —— 是任何多头重开的第一腿、也是压在放气的信号</td><td>监控 —— 目前 758 采样行 / 757 分钟间隔钉封顶（12.6h）；第一段脱顶会是下一根轮动的前缘</td></tr>
                <tr><td>宏观尾 re-grow（闸合一点）</td><td className="bear">HY OAS &gt; 2.78%（距 4bp、05-31 是 6bp）OR 10Y &gt; 4.53%（距 8bp、不动）</td><td>滚 hedge 到 5JUN / 12JUN 只在宏观侧触发；BTC 内部空 scout（已降级监控）在 BTC-only 触发上才占先</td></tr>
                <tr><td>Reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% close —— 在 4.45% 仍真；等 BTC 内部转向</td><td>独立筛仍真；当前筛筛的是多头侧、本篇 setup 上多头侧无入场 —— 等锚重夺再说</td></tr>
              </tbody>
            </table>

            <p>
              重写<em>本篇</em>的唯一一句是
              <span className="dn-signal">
                5JUN26 −25.58M 放大器窗究竟印出对得上 29MAY26 −96.34M
                那种解（阶梯按 5JUN26 08:00Z 完成、$70k 墙与 $68k / $65k
                簇被吃掉），还是先印出一根拉回 $73,035–$73,216 W-SMA20 /
                周期锚带的 cover-rally —— funding 脱顶 + SM 空泄推动 ——
                把后续可能的空 scout 设置成 shape-A 入场（而那也是后续
                一篇备忘要做的 promotion、不是本篇）。周期锚已失守；
                问题是新放大器按时压穿 $70k 墙、还是杠杆本子先在压上
                耗尽、把现货还回头顶重夺带、阶梯还没完成
              </span>
              。在那之前本篇就这样跑：runner 与 put-spread 尾仓仍平、
              回补反弹 scout 是 dropped（不是递延 —— 止损触发了）、
              anchor-break 空 scout
              <em>递延为框架监控</em>（对照 5JUN 放大器；按 audit DN-001
              本篇不可交易）、周期节奏框架在 06-02 BJ 13–15 窗上 re-armed
              等周期-3 step 2、宏观 re-grow 闸合一点但没触发。BTC 对
              TradFi 脱钩在 BTC 自己延伸下时拉宽到 −9.18pt；引擎 MTF
              周期再塌；8h MACD 印一根新鲜水下死叉；dealer 本子从净多 γ
              翻回净空 γ。下一道 24h 的对法是
              <em>结构性 —— 等入场形状，不追</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2 · 已过 codex 敌对式审计
            </span>
            STAGE B codex 敌对式审计（xhigh 力度、敌对但公正立场、算术
            按 <code>/opt/btc-monitor/live_db.json</code> +
            <code>/opt/btc-data/data/btcusdt_1m_*.parquet</code> 通过
            <code>/opt/btc-data/.venv/bin/python3</code> 重算）给出裁定
            <em>BLOCK-CRITICAL —— 1 CRITICAL + 4 MAJOR + 5 MINOR</em>。
            完整记录在 <code>audits/2026-06-02-desk-note.md</code>。
            <strong>CRITICAL（1）—— DN-001：</strong>v1 §V 空 scout
            印了一份可交易方案、带具体入场 shape、$73,678 止损、$70k
            → $68k → $60k 目标阶梯、超过桌面 0.2R scout 上限的 size
            （A 0.3R、总 cap 0.4R）以及「在 $70k 平半」指令 —— 越出
            本备忘 mandate 允许的 framework-only 范围。<em>修正：</em>
            该卡降级为框架监控、shape 改为不可交易语气、无 live size、
            无 live 止损，0.2R 上限留作后续一篇审计过的备忘做 promotion；
            §VI 表格行和收尾段相应重写。
            <strong>MAJOR（4）：</strong>DN-002 —— v1 引用的 00:01Z
            MTF 扫描没单独存档，可回溯滚动文件 mtime 是 00:16Z；manifest、
            §II 正文、MTF 表都重新对到审计时可回溯的 00:16Z 扫描（扫描
            现货 $71,226、24h −3.47%、4h TD9 BUY 在 $71,226、表值
            按 audit § MTF 审计时可回溯状态）。DN-003 —— live-tape
            「24h」块用了 24h+1m 行窗（1442 行）；数字按精确 00:15Z →
            00:15Z 端点窗（1441 采样行 / 1440 间隔）重锚：头部 24h
            −3.49%（v1 是 −3.34%）、OI Δ +469 BTC / +0.44%（v1 是 +476 /
            +0.45%）、funding 24h 起点 +6.60%（v1 是 +6.56%）、并删掉
            up / down / flat 分钟 Δ 数字 claim。DN-004 —— 1h 与 4h
            流向块按精确端点行重算：1h（23:15Z → 00:15Z）价 −0.14% /
            OI +296 BTC / 现货 CVD −544 / 期货 CVD −85 / 大单 −47 / 27 /
            taker-net −85；4h（20:15Z → 00:15Z）价 −0.44% / OI +444 BTC /
            现货 CVD −1,315 / 期货 CVD −458 / 大单 −304 / 181 / taker-net
            −458。DN-005 —— MA 矩阵按桌面政策只用 2024-2026 parquet
            子集（127 根周 bar），<em>不是</em>完整 btcusdt_1m_* glob
            （会给 353 根周 bar、W-SMA150 $74,735 / W-SMA200 $61,848 /
            W-EMA200 $69,101，会推翻「零正偏移」读）；manifest 与 MA
            披露段都明标这是桌面政策选择以延续口径、并把完整 glob 下的
            备选数字写出来透明。
            <strong>MINOR（5）：</strong>DN-006 —— 显示的 MA 偏移用的
            分母是 ≈ $71,326（MTF / parquet 邻近），不是声明的 00:15Z
            live pin $71,268.01；MA 披露段现在说清楚这一点、并给出 live
            pin 下深 ~0.08pt 的偏移（W-SMA20 −2.42%、D-SMA100 −2.66%、
            W-EMA200 −3.27%、D-EMA20 −5.29%）。DN-007 —— 距 0γ flip
            用两个参考：live 现货 −1.14%（71,268.01 / 72,086 − 1 =
            −1.135%）；Deribit idx −0.67%（71,600 / 72,086 − 1 = −0.674%，
            与文件 tile −0.7% 对齐）—— v1 −1.06% 是按 tile 错舍。
            DN-008 —— funding 封顶段是 758 采样行 / 757 分钟间隔
            （12.6h），不是「758 连续分钟」；285 / 186 / 970 的 up / down /
            flat 在 v1 1442-行窗下错（应是 285 / 185 / 971）、在修正后的
            1441 行窗下没单独重算 —— 披露为 flat-dominated、封顶段一段
            就贡献 757 根 flat。DN-009 —— GEX 负簇合计 ~−75M（列出的墙
            加起来 −75.30M、不是 ~−72M），并且「全在现货下方」不准
            因为 $72k −12.79M 那根墙在 live $71,268 上方 $804；改为
            「在现货周围、$72k 墙在头顶」。DN-010 —— manifest live-tape
            行把「file tail at audit time = pin」换成「快照 pin 行 =
            00:15Z；审计时 live 文件已前进」（live_db.json 在审计时已经
            前进到第 42826 行 / 00:24Z）。
            <strong>Codex-confirmed clean（延续）：</strong>requireViewer
            gating（async export 第一句）、JSX integrity、
            `npm run typecheck` exit 0、GEX 核心值（00:00Z、904 合约、
            Deribit idx $71,600、IV 中位 41.4%、total GEX −23.3M、flip
            $72,086、顶部 strike / expiry 行）、30D RV 方法与值（30
            returns 给 26.722%）、跨资产值（|r| 均值 0.267、BTC −7.00%、
            NQ +2.18%、缺口 −9.18pt）、宏观 Tier-1 / Tier-2 值、
            BJ↔UTC 转换、谱系延续（06-01 close $71,391.5 谱系首根破
            D-SMA100；SM net 谷 −37,783 谱系最深）、claims-vs-loaded-
            data 纪律（正文里没有 NTT pivot、max-pain 或 strike-level
            IV claim）。完整审计记录 —— 含 MTF 存档持久性与 live-tape
            窗约定的 open issues —— 在 audits/2026-06-02-desk-note.md。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是 Hysteresis Research 主理人之间内部讨论用的桌面
            artifact，<em>不是投资建议、不是要约、不是邀约</em>，也
            不针对任何收信人的个人情况定制。数字反映单一原子快照
            （2026-06-02 00:15Z），section 级 provenance 在上方 manifest
            带里披露；宏观 Tier-1 面板渲染时间是 2026-06-01 22:15Z
            （快照前约 2.0h），部分输入显式陈旧或 pending、按 such
            标注。水位、size、条件是桌面流程的演示、不是长期推荐。
            过往的相关性、γ、仓位形状不约束未来盘。衍生品携带 total
            loss 风险、带杠杆时损失可能超过保证金存入额。<em>请自行
            研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                放大器回来、锚失守。本子翻回净空 γ；funding 钉封顶；
                SM 单侧堆空。新放大器是 5JUN；参考阶梯是 $70k → $68k
                → $60k。空 scout 递延（框架监控）—— 本篇不开仓。
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
            v2 · 2026-06-02 00:15Z 快照 · 已过 codex 敌对式审计 ·
            来源：live_db.json · mtf_div_latest.html（00:16Z 可回溯）·
            btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet（2024-2026 子集）· FRED · Yahoo ·
            Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
