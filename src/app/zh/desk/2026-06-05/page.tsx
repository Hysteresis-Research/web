import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-05 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-05',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-05' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260605() {
  await requireViewer('/zh/desk/2026-06-05');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-05 · v2</span>
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
              <span className="dn-big">$63,738</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−0.96%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-05 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-05 00:05Z（snapshot pin 行）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · pin 行 = 00:05Z；审计时 live 文件已前进
                    过 pin · 5JUN26 0.3DTE −9.61M 今日 08:00Z 结算（快照后
                    约 7h 55m）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-05 00:01Z 扫描（引用；审计时已不可回溯）</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 引用的 00:01Z 扫描
                    比 00:05Z 快照锚<em>早约 4 分钟</em> · <em>audit 注
                    （DN-004）：</em>审计时滚动文件里 00:01Z 扫描已被覆盖、
                    只能回溯到后一根 00:16Z 扫描（BJ 08:16 06-05）——
                    多周期 ⚡ TD9 BUY 同步在 8h / 12h / 1d（加 3d / 1M 待印）
                    这条结构性 cluster 用 00:16Z 扫描核过来 in-place，
                    但下面表里的具体 close / RSI / 云距 / 24h 价 / qVol
                    数字仍是 00:01Z 引用值，<em>v2 升级时改判为
                    framework-only</em> · MTF 存档约定仍是 open lineage
                    item · 含未收盘 K 线 · 多 TF ⚡ TD9 BUY 同步在 8h /
                    12h / 1d（三根周期框架同时印）· 3d / 1M 带 TD8 → 9?
                    待印（再一根 close 确认）—— 五根周期框架 TD 印在这根
                    超卖上 cluster 或待印
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-05 00:00Z 快照</td>
                  <td className="dn-flag">
                    较快照锚滞后约 5 分钟 · Deribit idx $63,971 对 live
                    $63,738（高 $233）· 1,034 合约（06-04 是 1,000；4JUN
                    0.3DTE −6.82M 在 06-04 08:00Z 结算后挂了 7JUN / 8JUN
                    一批近端新链）· 5JUN26 0.3DTE −9.61M 是下一根结算（今
                    日 08:00Z、快照后约 7h 55m）—— 5JUN 这块从 06-04 读的
                    −15.89M（1.3 DTE）衰减到今天的 −9.61M（0.3 DTE）、
                    一根 $6.28M 绝对权重缩减，dealer 对冲在跨夜段被压掉
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-05 00:00Z
                  </td>
                  <td className="dn-flag">滞后约 5 分钟 · 7d 1h bar · 22 资产 · 167 rows · regime tag 从 NORMAL → IDIOSYNCRATIC（|r| 均 0.215 vs 06-04 的 0.251 —— 跨过 0.25 阈值）</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-04 22:20Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.75h · <em>数据完整性 FLAG</em>：FRED
                    Tier-1 今天大部分仍<em>抓取失败</em>（US 10Y
                    nominal、10Y TIPS、5Y5Y BE、NFCI、Fed 净流动性、
                    US-JP 10Y 利差、全部 Tier-3 通胀行还是不可用 ——
                    连续第二根渲染利率面板失明）· 干净的读（按 audit
                    DN-005 把下面 DXY / USD/JPY / USD/CNY 的 delta 全部
                    标成 <em>对 06-04 备忘</em>，不是面板自己的当日 Δ
                    列）：HY OAS <em>2.75%（+4bp 对 06-04 的 2.71% ——
                    决定性扩张；按 audit DN-007 措辞修正：在取整水位上
                    re-grow 门 &gt; 2.78% 是 3bp 触到、&gt;3bp 才严格穿
                    过、不是 v1 那句&ldquo;再 1bp 就触发&rdquo;）</em>、
                    MOVE 73.6（+0.15 对 06-04）、DXY 99.43（对 06-04 备
                    忘 +0.21；面板自己的当日 Δ 读 −0.10）、USD/JPY 160.04
                    （对 06-04 备忘平；面板当日 Δ +0.07）、USD/CNY
                    6.7730（对 06-04 备忘 +0.0113、CNY 更软；面板当日 Δ
                    +0.00）· 利率门 / reclaim-long 利率筛 / Fed 流动性 /
                    NFCI 全部按 <em>STALE-FROM-06-03</em> 处理
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-06-05 00:06Z（按桌面政策只用 btcusdt_1m_2024..2026 子集）</td>
                  <td className="dn-flag">
                    较快照锚领先约 1 分钟 · MA 源域是 2024-2026 parquet
                    子集（127 根周 bar），延续 06-02 audit DN-005 桌面
                    政策 · 子集下 W-SMA150 / W-SMA200 不可计算（短两窗）；
                    W-EMA150 / W-EMA200 能显示是因为 EMA 从可用历史 seed、
                    按种子口径披露 · 偏移按 live 现货 $63,738.00 算
                    （延续 06-03 audit DN-006 的 live-pin 分母处置）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 监控（weekly_200sma.json）</td>
                  <td className="dn-v-cell">未写入（审计时服务器上文件不在）</td>
                  <td className="dn-flag">
                    200W 监控不可用 · 退回矩阵：W-SMA200 在 2024-2026 子
                    集（127 根周 bar）下不可计算；相关的 W-EMA200 种子
                    印在 $73,603、按头顶近线读 −13.40% · 按 runbook
                    do-not-fabricate：不在缺 JSON 上凭空写 break / reclaim
                    / 百分位主张
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 64d · 月度 · 不作实时</td>
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
              <span className="dn-v bull">+1.47%（脱顶；深度缓和）</span>
              <span className="dn-src">live · 24h 均 +0.67%（06-04 是 +7.00% · 当日 −6.33pt 冷）· 封顶占用 0 / 1441 采样行（06-04 是 7.77% · 连续第二根备忘空顶、谱系封顶 regime 整条清掉）· <em>分母政策（按 audit DN-008）：24h 精确窗在 06-04 14:39 BJ cb_cvd reset 上有一根重复时间戳（line 46081 与 46082）；本篇贯穿采用 unique-first 行政策 —— 1441 根唯一分钟戳作分母</em> · 负 funding（空付多）分钟 514 / 1441 = 35.67% 的 24h 窗 —— 谱系最深空付多 regime · 24h funding 谷 −3.14% ann @ 2026-06-04 11:54Z（BJ 19:54 06-04）· 最高 +6.90% ann @ 2026-06-04 20:00Z（BJ 04:00 06-05）；66.55% 的 24h 坐在 +1% ann 之下、79.67% 坐在 +2% ann 之下</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">+3.25% → +1.47%（−1.78pt，深空付多 regime）</span>
              <span className="dn-src">区间 −3.14% / +6.90% · 单段最长空付多链 448 分钟 / 7.47h，自 2026-06-04 10:21Z（BJ 18:21 06-04）→ 2026-06-04 17:48Z（BJ 01:48 06-05）—— 杠杆门彻底打开，多头被空头付费占了三分之一的 24h 窗；≥ 4h 累积空付多门只靠这一段连续就过 ~1.9×</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−5.80%（−6,073 BTC）</span>
              <span className="dn-src">live · OI 谱系首次穿到 100k 以下（现在 98,713 BTC；24h 前 104,786）—— 谱系<em>最大一根 note-anchor 24h OI flush</em>（按 audit DN-003 校正：live 1-min tape 在 06-03 11:38 BJ → 06-04 11:38 BJ 那个滚动 24h 窗有更深的一根 −10,271 BTC / −9.30% drop；本篇这根主张是 anchor-to-anchor、不是 rolling-1m 超等级）· SM long_btc −1,492、short_btc −1,959 —— 两侧都缩、空侧切得比长侧更狠 · gross 本子在桌面侧少 ~3.5k BTC、全网 OI 缩 ~6.1k，非 SM 本子在 24h 里减 ~2.6k BTC</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bull">66.62 / 33.38</span>
              <span className="dn-src">live_db `mkt_long_pct` · 离谱系峰泄 −2.63pt（06-04 是 69.25 · 24h 区间 65.18 / 69.28 —— 谱系 retail 百分比峰 69.28% 印在 24h 窗开盘 BJ 08:21 06-04 / UTC 00:21 06-04、然后一整天泄；下腿里第一根实质的长侧去拥挤）</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−44.5k（净 SHORT；两侧都更小）</span>
              <span className="dn-src">live · long 11.26k − short 55.73k · short_btc 在 58,807 @ 2026-06-04 11:46Z（BJ 19:46 06-04）见<em>当前 24h 窗内峰</em>、仍在 06-03 谱系峰 60,729 之下（按 audit DN-001 校正：06-03 23:16 BJ / 15:16Z 那根 60,728.55 仍是谱系空侧峰；今天的 58,807 比 06-04 备忘的 24h-窗内峰 56,729 高 +2,078、但不是谱系新延伸）；long_btc 在 15,726 @ 2026-06-04 11:11Z（BJ 19:11 06-04）见 24h 窗内峰、仍在 06-03 谱系长峰 18,293 之下（DN-001：06-03 22:21 BJ / 14:21Z 那根 18,292.50 仍是谱系长峰）；SM net 谷 −45,399 @ 2026-06-04 12:31Z（BJ 20:31 06-04）—— 近但不在谱系谷（06-04 那根 −46,686 仍最深），快照后已回吹 +0.94k 朝不那么空</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 06-04 备忘</span>
              <span className="dn-v">−44.9k → −44.5k（+467 净；长 −1,492、空 −1,959）</span>
              <span className="dn-src">|Δ|/prior_net = 1.04%（467 / 44,929）· 净基本平但本子两侧都缩 —— 自 05-31 起首根真两侧去 gross · 06-01 / 06-02 / 06-03 / 06-04 跑了四天的单侧空头重堆形式今天断；相关谱系签名现在是<em>「净平、两侧都更小」</em>（05-31 后放大器形式），不是<em>「净更深、空叠」</em></span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v bull">46.9% / 34.93%</span>
              <span className="dn-src">GEX IV 中位数 · 1,034 合约（06-04 是 1,000 · +34 根、新挂 7JUN / 8JUN 一批近端链）· IV 冷 −2.0pt 因为价格停止延伸（06-04 是 48.9%）· 30D RV 滑 −0.40pt 到 34.93%（06-04 是 35.33%）因为 06-04 那根日 Δ 只 −0.41% 落在一个更安静的日 · IV/RV 价差压到 ~+11.97pt（06-04 是 +13.6pt —— 一根有意义的 −1.6pt 压缩、IV 比 RV 冷得快）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−4.17%（下方；live 现货参考）</span>
              <span className="dn-src">flip $66,509（前 $67,797 · 落 −$1,288）· 对 live 现货 $63,738.00（−4.17%；63,738.00 / 66,509 − 1 = −4.166%）/ GEX 文件 Deribit idx $63,971（−3.82%；63,971 / 66,509 − 1 = −3.816%、与文件自家 dist-to-flip tile −3.8% 对齐）—— 两参考都负、现货仍实质陷 flip 下方但 gap 收窄（06-04 是 −5.08% / −5.00%）因为 flip 比现货落得更快 · aggregate GEX 缓和到 −39.5M（06-04 是 −52.9M、+$13.4M 结构性改善；谱系最宽下穿是 06-04 的 −5.08% / aggregate −52.9M —— 两根度量今天都离开极值）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                下腿停止延伸、本子开始放气 —— 24h 现货变化塌到 −0.96%
                （对 06-04 / 06-03 的 −3.59% / −3.91%）、OI flush −5.80%
                （谱系最大一根 <em>note-anchor</em> 24h 缩、按 audit DN-003
                校正：live 1-min tape 那个滚动窗有更深的 06-03 11:38 BJ →
                06-04 11:38 BJ 的 −10,271 BTC / −9.30% 一根，所以这条
                超等级是 anchor-to-anchor、不是 rolling）、funding 坐
                空付多三分之一窗（谱系最深空付多 regime）、dealer 本子
                也缓和
              </span>。aggregate GEX 从
              <span className="dn-tag bear">−52.9M</span> 走到{' '}
              <span className="dn-tag bear">−39.5M</span>（一根 +$13.4M
              结构性改善）、0-γ flip 落{' '}
              <span className="dn-tag">$67,797 → $66,509（−$1,288）</span>、
              现货{' '}
              <span className="dn-tag bear">$63,738 坐在 flip 下方
              −4.17%</span>（live 参考；06-04 是 −5.08% —— gap 收窄因
              flip 比现货落得更快）；GEX 文件自己的 Deribit idx 参考读{' '}
              <span className="dn-tag bear">−3.82%</span> 对它的 $63,971
              idx、与文件 −3.8% tile 对齐 —— 两参考都负、两根都离开
              谱系极值。日 close 走{' '}
              <span className="dn-tag bear">06-03 $64,118 / 06-04 $63,853</span>
              （06-04 那根 close 只比 06-03 低 −$265 —— 下腿启动以来最
              小一根 close-to-close 动），加上未收盘 06-04 印{' '}
              <span className="dn-tag bear">06-05 $63,751（比 06-04 close
              内 −$102）</span> —— 三根在底部 flat close 没出反弹 K 但
              也没再延伸。06-04 那篇监控的周期延续
              <span className="dn-em">连续第五次印对</span>：一根新鲜的
              重堆敌对-2 step 印在{' '}
              <span className="dn-tag bear">2026-06-04 07:41Z（BJ 15:41
              06-04，和 06-03 印同分钟）</span>、Δnet{' '}
              <span className="dn-tag bear">−5,591</span>（Δlong −860、
              Δshort +4,730 同一分钟、SM net 一根线{' '}
              <span className="dn-tag">−37,698 → −43,289</span> 在现货{' '}
              <span className="dn-tag">$63,964</span>）。链现在五印深：
              05-30 06:01Z（Δnet −5,569）→ 06-01 06:16Z（−3,137）→
              06-02 06:46Z（−6,621）→ 06-03 07:41Z（−7,177）→ 06-04
              07:41Z（−5,591）。最后两根在取整位上落在<em>同分钟</em>
              —— UTC 07:41 / BJ 15:41 这根更紧的日历 pin 从节奏灰烬里
              冒出来、离原 BJ 13–15 读 41 分钟窗外。
            </p>

            <p>
              BTC 印 <span className="dn-tag">$63,738</span> live、
              <span className="dn-tag bear">−0.96%</span> 在 24h ——
              一根宽盘中震荡但净日平。24h 区间是
              <span className="dn-tag">{' '}$64,745.73 / $61,461.75</span>
              （高 @ BJ 12:25 06-04 / UTC 04:25 06-04、低 @ BJ 10:05
              06-04 / UTC 02:05 06-04 —— 早亚洲段一根针刺到 $61.5k 离
              上一根快照 2 小时之后，再 $3.3k 回吹进当日）—— 两根极值都
              印在 24h 窗的前 ~4h 内、之后盘面在 ~$63k–$64k 带消化。
              周期锚仍是<span className="dn-em">头顶 ~$9.4k 远</span>：
              D-SMA100 $73,122（−12.83%），最近的四根 MA（D-EMA20
              $71,984 / W-SMA20 $72,659 / D-SMA100 $73,122 / W-EMA200
              种子 $73,603）密集在头顶 $1.6k 一根紧重夺簇里。整条日线
              和周线阶梯都在头顶、读法与 06-04 同但最近线集合再收紧一
              档因为周期锚自身从 $73,166 飘到 $73,122（rolling 100-day
              窗在前端拾起 06-04 那根 $63,853 close、在尾端丢一根更高
              的）。
              <span className="dn-em">
                结构性背景在每一根杠杆与 dealer 读上都改善 —— OI 缩、
                funding 35.67% 空付多、γ 缓和 $13.4M、IV 冷 −2.0pt ——
                但价格平面没动：现货坐在底、周期锚仍丢、回补反弹路径
                需要一根 +14.7% 的重夺腿才能点火。今天是下腿里第一根
                杠杆和 dealer 本子<em>同时</em>放气但现货没回弹的日
                —— 一根去杠杆的喘息、不是转向。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · 本子两侧自 05-31 起首次都缩 · 周期延续 BJ 15:41 06-04 印第五连印（和 06-03 同分钟）</span>
            </h2>

            <p>
              <span className="dn-signal">
                仓位本子在两侧都去杠杆 —— 自 05-31 起首根两侧缩、
                断开过去四天的单侧空头重堆形
              </span>。SM net 是{' '}
              <span className="dn-tag">−44,462</span> 对 06-04 备忘的
              −44,929 —— 也就是{' '}
              <span className="dn-em">+1.04% 不那么空、净基本平</span>
              （|−44,462 − (−44,929)| / 44,929 = 1.04%）。分量动得很
              实在：long_btc{' '}
              <span className="dn-tag bear">12.75k → 11.26k（−1.49k）</span>
              、short_btc{' '}
              <span className="dn-tag bull">57.68k → 55.73k（−1.96k）</span>。
              两侧都缩，空侧切得比长侧更狠 —— 净几乎一样、一根真两侧
              去 gross、05-31 后放大器备忘里点的那种形。24h 窗内：
              long_btc Δ <span className="dn-tag bear">−1,492</span>、
              short_btc Δ <span className="dn-tag bull">−1,959</span>、
              net Δ <span className="dn-tag bull">+467</span>（−1,492 −
              (−1,959) = +467）。24h 内本子跑得比端点显示的更宽：
              short_btc 见{' '}
              <span className="dn-tag bear">58,807 @ 2026-06-04 11:46Z
              （BJ 19:46 06-04）</span><em>在当前 24h 窗内</em>峰值、
              仍在 06-03 谱系峰 60,729 之下（按 audit DN-001 校正：
              06-03 23:16 BJ / 15:16Z 那根 60,728.55 仍是谱系空侧峰；
              今天的 58,807 比 06-04 备忘的 24h-窗内 56,729 高 +2,078、
              但不是谱系新延伸），然后泄 −3,082 进 snap。long_btc 见{' '}
              <span className="dn-tag bear">15,726 @ 2026-06-04 11:11Z
              （BJ 19:11 06-04）</span>一根 24h-窗内峰、在空峰前 35 分
              钟 —— 仍在 06-03 谱系长峰 18,293 之下（DN-001：06-03
              22:21 BJ / 14:21Z 那根 18,292.50 仍是谱系长峰），然后泄
              −4,463 进 snap。SM net 谷{' '}
              <span className="dn-tag bear">−45,399 @ 2026-06-04 12:31Z
              （BJ 20:31 06-04）</span>—— 近但不在谱系谷（06-04 那根
              −46,686 仍最深），本子之后已回吹 +0.94k 朝不那么空。
            </p>

            <p>
              <span className="dn-signal">
                周期延续框架印第五连印、最近两根都在取整 BJ 15:41 落
                同分钟
              </span>。24h 窗看到一根干净重堆敌对-2 step 印在{' '}
              <span className="dn-tag bear">2026-06-04 07:41Z（BJ 15:41
              06-04）</span>现货 <span className="dn-tag">$63,964</span>：
              long_btc Δ <span className="dn-tag bear">−860</span>、
              short_btc Δ <span className="dn-tag bear">+4,730</span>
              （<em>一分钟</em>内）、SM net 一根线{' '}
              <span className="dn-tag">−37,698 → −43,289</span>（Δnet
              −5,591 —— 谱系单分钟第二大 Δ、在 06-03 那根 −7,177 之
              后）。这根 step 是同一根次级签名 —— 重堆敌对-2（Δshort
              &gt; 0 + Δlong &lt; 0 同分钟）—— 但印在 BJ 15:41、
              <em>和 06-03 印同分钟</em>，原 BJ 13–15 窗关后 41 分钟。
              五印链按顺序：05-30 06:01Z（BJ 14:01 05-30、Δnet −5,569）
              → 06-01 06:16Z（BJ 14:16 06-01、−3,137）→ 06-02 06:46Z
              （BJ 14:46 06-02、−6,621）→ 06-03 07:41Z（BJ 15:41 06-03、
              −7,177）→ 06-04 07:41Z（BJ 15:41 06-04、−5,591）。
              <span className="dn-em">
                原 BJ 13–15 节奏死了，但一根更紧的日历 pin 冒出来：最
                后两根都落在 UTC 07:41 / BJ 15:41、原窗关后 41 分钟。
                7 日节奏还没重新确认 —— 前三根更早落在窗内 —— 但 BJ
                15:41 这两印链已经够意思去盯今天的 BJ 15:41 第六根印
                （UTC 07:41 / BJ 15:41 06-05、快照后 ~7h 36m）
              </span>。周期延续本身仍是承重 call：第二级签名五连印却
              没有一根 live add 是不寻常的；今天的 BJ 13–15 窗自身
              （UTC 05:00–07:00 06-04）跑了一根小回补（Δnet +240 跨
              2h 窗）—— 窗安静、step 落在窗后 41 分钟。
            </p>

            <p>
              杠杆侧是这一根备忘 regime 变化最响的一根信号。
              <span className="dn-signal">
                funding 坐空付多 35.67% 的 24h 窗 —— 谱系最深空付多
                regime
              </span>（按 audit DN-008：24h 精确窗在 06-04 14:39 BJ
              cb_cvd reset 上有一根重复时间戳；本篇贯穿采用 unique-first
              行政策、1441 根唯一分钟戳作分母，所以 514 / 1441 = 35.67%）
              ：live <span className="dn-tag">+1.47% ann</span>、24h 区
              间 <span className="dn-tag">−3.14% / +6.90%</span>，谷{' '}
              <span className="dn-tag bull">−3.14% ann @ 2026-06-04
              11:54Z（BJ 19:54 06-04）</span>—— 谱系首次、多头被空头
              在一根深量级上付费。24h 均 ann{' '}
              <span className="dn-tag">+0.67%</span>（对 06-04 的 +7.00%
              —— 一根 −6.33pt 冷却）。封顶占用{' '}
              <span className="dn-tag bull">0 / 1441 采样行（0.0%）</span>
              （对 06-04 的 7.77% —— 连续第二根备忘空顶；谱系封顶 regime
              整条清掉）；单段最长空付多链跑{' '}
              <span className="dn-tag bull">448 分钟 / 7.47h</span> 自
              2026-06-04 10:21Z（BJ 18:21 06-04）→ 2026-06-04 17:48Z
              （BJ 01:48 06-05），所以 ≥ 4h 累积空付多门只靠这一段连
              续就过 ~1.9×。分钟 Δ（unique-first 政策）{' '}
              <span className="dn-tag">471 上 / 478 下 / 491 平</span>
              （1,440 根分钟到分钟间隔；1441 根唯一分钟戳 = 1440 间
              隔 + 开盘行）—— 一本平衡的双向本子、不是单向压。OI Δ{' '}
              <span className="dn-tag bull">−6,073 BTC（−5.80%）</span>
              跨 24h —— <span className="dn-em">谱系最大一根 <em>note-anchor</em>{' '}
              24h OI flush 按绝对值和百分比</span>（按 audit DN-003：
              live 1-min tape 在 06-03 11:38 BJ → 06-04 11:38 BJ 那个
              滚动窗有更深的 −10,271 BTC / −9.30% drop；这条超等级是
              anchor-to-anchor、不是 rolling 跨整条 live 窗）（对 06-04
              的 −2.13% / −2,283 BTC）。OI 谱系首次穿到 100k 以下
              （现在 98,713 vs 24h 前 104,786、24h 峰 104,786 @ 窗开
              盘、24h 低 98,640 @ BJ 07:50 06-05 / UTC 23:50 06-04 ——
              按 audit DN-002 校正：v1 引的 BJ 15:50 06-05 是一根 8h
              过换算、落到了 00:05Z 快照之后的未来）。retail{' '}
              <span className="dn-tag">mkt_long_pct 66.62%</span> 从
              69.25% —— 离谱系峰冷 −2.63pt、下腿里长侧第一根实质去
              拥挤。perp 对现货{' '}
              <span className="dn-tag bear">−$73.03 折价</span>在快照
              （1h 均 −$74.21、4h 均 −$69.44；24h 均 −$75.90、区间
              −$281.65 / +$77.25 —— basis 在早晚段 BJ 短挤 06-04
              15:41 step 周围短暂转正、自 06-01 来首根升水印）。1 分
              钟 aggressor skew snap{' '}
              <span className="dn-tag bear">−25.0</span>（1h 均 +2.3、
              区间 −56.3 / +49.7）—— snap 分钟里重卖攻、但 1h 均是
              平衡。
              <span className="dn-em">
                OI 谱系最大量级 flush + funding 35.67% 窗空付多 + retail
                离峰拥挤泄 + SM 两侧都更小自 05-31 首次：杠杆本子在深
                压泄气、与 05-31 后放大器那个净平 / 两侧更小信号同
                形 —— 但这次现货还没和去杠杆一起回弹
              </span>。
            </p>

            <p>
              窗口流向是<em>4h 反弹进 snap 上现货 bid + OI 缩、但
              snap 分钟自身的 1h 是安静 / offer</em>。
              <span className="dn-em">
                端点约定披露（按 audit DN-009）：v1 用的 1h / 4h
                flow 函数在 price / OI / 现货 CVD / 期货 CVD / 大单上
                读 61-min / 241-min 起点行（1h 是 07:04 → 08:05 BJ；
                4h 是 04:04 → 08:05 BJ），但 taker-net 是从一根相邻
                起点行（1h 是 07:03 → 08:05 BJ；4h 是 04:03 → 08:05
                BJ）算的。下面 taker-net 那一根因此和它身边其他字段
                差一分钟；保留这一根读数 + 披露而不是删掉是因为量级
                上是方向性的、一分钟偏移不改读法。把 flow-window 函
                数统一到一根端点约定是带到下一篇的 open hygiene 项
              </span>。24h：价格 <span className="dn-tag bear">−0.96%</span>、
              OI <span className="dn-tag bull">−6,073 BTC</span>、现货
              CVD <span className="dn-tag bear">Δ −5,803</span>{' '}
              <span className="dn-em">（跨 06-04 06:39Z cb_cvd reset
              调整、那一根序列跳 −5,151.9 → −93.5；不做调整窗 Δ =
              −744）</span>、期货 CVD{' '}
              <span className="dn-tag bull">Δ +2,317</span>、大单{' '}
              <span className="dn-tag bull">+190 BTC / 583 笔</span>、
              taker-net{' '}
              <span className="dn-tag bear">−2,526</span> —{' '}
              <span className="dn-em">
                现货在 24h 上卖（reset-调整后现货 CVD 实质负）、期货
                买、大单净微正、OI 缩 —— 一根混合方向去杠杆形，不是
                一根干净的回补反弹
              </span>。4h（进 snap）：价格{' '}
              <span className="dn-tag bull">+0.41%</span>、OI{' '}
              <span className="dn-tag bull">−2,530 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bull">Δ +359</span>、期货 CVD{' '}
              <span className="dn-tag bear">Δ −1,405</span>、大单{' '}
              <span className="dn-tag bear">−710 BTC / 94 笔</span>、
              taker-net <span className="dn-tag bear">−1,408</span> —{' '}
              <em>现货在反弹上 bid、OI 缩、期货 offer、大单净卖 ——
              4h 带着 buyer-on-spot / seller-on-futures 这种通常在空
              头挤压之前的非对称，但没有大单 bid 来确认</em>。1h：价格{' '}
              <span className="dn-tag bear">−0.01%</span>、OI{' '}
              <span className="dn-tag bull">−561 BTC</span>、现货 CVD{' '}
              <span className="dn-tag bull">Δ +280</span>、期货 CVD{' '}
              <span className="dn-tag bear">Δ −529</span>、大单{' '}
              <span className="dn-tag bear">−607 BTC / 48 笔</span>、
              taker-net <span className="dn-tag bear">−506</span> —{' '}
              <em>平守住、OI 仍缩、现货 bid / 期货 offer、大单净卖 ——
              非对称在 1h 上延续、没新入场信号</em>。24h reset-调整后
              现货 CVD −5,803 是谱系最重一根现货卖印、与 4h / 1h 上
              的现货 bid 读相矛盾 —— 现货卖集中在 06-04 早 capitulation
              针刺到 $61,461.75（24h 低）之前，然后 4h 反射反弹填回
              恢复；把窗流向作连续形读在这根盘上是误导。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 多 TF ⚡ TD9 BUY 同步在 8h / 12h / 1d（三根周期框架同时）+ 3d / 1M TD8 → 9? 待印 · 慢框架仍在滚但超卖反向信号是谱系最密 · 周期锚丢</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图带着一根超卖反向信号密度比谱系任何前一根备忘都
                高的 cluster —— 8h / 12h / 1d 同一扫描里三根并发⚡ TD9
                BUY、加 3d 和 1M 都在再一根 close 上 TD9 待印
              </span>。06-04 那根扫描标出 8h / 12h / 1d 同步 ⚡ TD9 BUY
              （前一根延续）；今天 00:01Z 扫描三根全保留 live（无前
              进 / 无失效）、加上待印的 3d / 1M TD8 → 9? 线 —— 五根
              周期框架现在 cluster 或待印在这根超卖上。慢框架没加入
              价格恢复：<span className="dn-tag bear">3d 水上死叉在
              3 bar</span>、12h 带{' '}
              <span className="dn-tag bear">水下死叉 17b</span>、8h{' '}
              <span className="dn-tag bear">水下死叉 11b</span>、4h{' '}
              <span className="dn-tag bear">水下死叉 22b</span>、1d 在
              云下 4b（$73.9k）。RSI 在周期框架深超卖：8h{' '}
              <span className="dn-tag bull">15.5</span>（一根差一档就
              进单位数的极端）、1d <span className="dn-tag bull">18.3</span>、
              12h <span className="dn-tag bull">19.7</span>、4h{' '}
              <span className="dn-tag bull">28.4</span>、3d{' '}
              <span className="dn-tag bull">32.3</span>、1w 34.5 —— 每
              一根周期框架都是 RSI &lt; 35。引擎框架混合：1h RSI 46.7
              （云下、卖 setup）、30m 51.9、15m 54.0 —— 引擎稳了但
              周期框架在历史上通常解到反向反弹的超卖极值上。
              <span className="dn-em">
                {' '}直读：这是谱系最密一根超卖反向 cluster —— 五根周期
                框架 TD 印 cluster 或待印 —— 在一根现货平面还没拐弯的
                盘上。Setup 在结构上像一根教科书 relief 反弹，但周期
                锚仍头顶 ~$9.4k、一根仅 TD9 入场（在 ~$68k 区一根 1h
                重夺之前）是早 —— 06-03 那根 mean-revert 长 scout 仍
                被第三腿门住。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,765</td><td className="num">54.0</td><td className="neut">金叉（水下）2b</td><td className="bull">云上 ↓63.4k 2b</td><td>Sell 7</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>30m</td><td className="num">63,765</td><td className="num">51.9</td><td className="neut">金叉（水下）1b</td><td className="neut">云内 63.2k–64.4k 1b</td><td>Sell 2</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">63,765</td><td className="num">46.7</td><td className="neut">金叉（水下）12b</td><td className="bear">云下 ↑66.1k 91b</td><td>Sell 2</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">63,762</td><td className="num bull">28.4</td><td className="bear">死叉（水下）22b</td><td className="bear">云下 ↑74.0k 61b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>8h</td><td className="num">63,756</td><td className="num bull">15.5</td><td className="bear">死叉（水下）11b</td><td className="bear">云下 ↑76.3k 60b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr><td>12h</td><td className="num">63,765</td><td className="num bull">19.7</td><td className="bear">死叉（水下）17b</td><td className="bear">云下 ↑77.3k 27b</td><td>⚡ TD9 BUY</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">63,762</td><td className="num bull">18.3</td><td className="neut">—</td><td className="bear">云下 ↑73.9k 4b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">63,760</td><td className="num bull">32.3</td><td className="neut">死叉（水上）3b</td><td className="bear">云下 ↑74.0k 1b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,765</td><td className="num">34.5</td><td className="bull">金叉（水下）7b</td><td className="bear">云下 ↑100.3k 18b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">63,762</td><td className="num">42.8</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z 扫描（滚动 latest
                    文件；引用的扫描比 00:05Z 快照锚<em>早 4 分钟</em>；
                    含未收盘 K 线）。<em>audit DN-004 披露：</em>审计时
                    滚动文件里 00:01Z 扫描已被覆盖、只能回溯到后一根
                    00:16Z（BJ 08:16 06-05）扫描；audit 时载入的 00:16Z
                    扫描确认结构性 TD9 cluster（8h / 12h / 1d ⚡ TD9
                    BUY 同步仍 live、3d / 1M 待印）以及周期框架 RSI &lt;
                    35 读，但它的具体 close / RSI / 云距 / 24h 价 / qVol
                    数字与本表不同（载入的 00:16Z 扫描读现货 $63,668、
                    24h −0.99%、qVol $27.13B、15m TD 印 Sell 8 → 9?）。
                    所以下面数字行 v2 升级时改判为 <em>framework-only</em>
                    ：结构性线（TD 印、MACD 交叉方向、云朝向、背离标）
                    从 00:01Z 扫描带过来、按 00:16Z 扫描核过；具体
                    close / RSI / 云距数字仍是原 00:01Z 引用值、不能
                    从载入 artifact 复现。MTF 快照存档的 hygiene 缺口
                    是延续的 lineage open issue。头部告警：<em>多 TF ⚡
                    TD9 BUY 8h / 12h / 1d 同步</em>、<em>3d / 1M TD8 → 9?
                    再一根 close</em>。原 00:01Z 数字：扫描现货 $63,762、
                    24h −0.89%、H/L $64,740 / $61,345、24h qVol $27.27B
                    （谱系 qVol 远最重、确认早亚洲 capitulation 针刺到
                    $61.5k 是重量级成交）。收盘为未收盘 K 线；每个值
                    在各周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认同样头顶读。现货 $63,738 坐在{' '}
              <span className="dn-tag bear">D-SMA100 $73,122 下方
              −12.83%</span> —— 周期锚、日线阶梯上距离最低的一根、
              但仍 ~$9.4k 远重夺。最近四根 MA 压成头顶 $1.6k 一根紧
              带：D-EMA20 <span className="dn-tag bear">{' '}$71,984
              （−11.46%）</span>、W-SMA20{' '}
              <span className="dn-tag bear">$72,659（−12.28%）</span>、
              D-SMA100 <span className="dn-tag bear">{' '}$73,122
              （−12.83%）</span>、W-EMA200 种子{' '}
              <span className="dn-tag bear">$73,603（−13.40%）</span>。
              其余按水位顺序：D-SMA20{' '}
              <span className="dn-tag bear">$73,376（−13.13%）</span>{' '}
              坐在 D-SMA100 和 W-EMA200 之间、
              <span className="dn-tag bear">D-EMA50 $74,307（−14.22%）</span>、
              <span className="dn-tag bear">D-SMA150 $75,309（−15.37%）</span>、
              <span className="dn-tag bear">D-EMA100 $75,523（−15.60%）</span>、
              <span className="dn-tag bear">W-EMA20 $76,390（−16.56%）</span>、
              <span className="dn-tag bear">D-SMA50 $76,435（−16.61%）</span>、
              <span className="dn-tag bear">D-EMA150 $77,851（−18.13%）</span>、
              <span className="dn-tag bear">W-EMA150 种子 $78,037（−18.32%）</span>、
              <span className="dn-tag bear">D-SMA200 $78,789（−19.10%）</span>、
              <span className="dn-tag bear">D-EMA200 $80,301（−20.63%）</span>。
              更高更远、已弃用：W-EMA100 种子 $82,836（−23.06%）、
              W-EMA50 种子 $83,956（−24.09%）、W-SMA100 $88,409
              （−27.91%）、W-SMA50 $92,626（−31.19%）。200W 监控
              这一快照在服务器上不可用（per runbook 的{' '}
              <code>weekly_200sma.json</code> 不在）；矩阵 fallback
              显示 W-SMA200 在 2024-2026 子集（127 根周 bar）下不可
              计算、种子 W-EMA200 在 $73,603（−13.40%）是最近的一根
              200-week-related 线 —— 但按 runbook do-not-fabricate，
              不在缺 JSON 上凭空写 break / reclaim / 百分位主张。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-06-05 00:06Z（close
                $63,750.60）；偏移按 live 现货 $63,738.00 直接算（按
                06-03 audit DN-006 处置：live-pin 分母延续；parquet-
                邻近 close $63,750.60 比 live pin 高 $12.60，所以对
                parquet 平面算的偏移会读 ~−0.02pt 更浅 —— 今天是
                rounding-noise gap）。日 close：05-30 $73,857、05-31
                $73,653、06-01 $71,392（周期锚下首根 close）、06-02
                $66,730（谱系单日最大一根 close-to-close 落 −$4,662 /
                −6.53%）、06-03 $64,118（再落 −$2,612 / −3.91%）、
                06-04 $63,853（下腿启动以来最小一根 close-to-close
                动 −$265 / −0.41%）、06-05 未收盘 $63,751 —— 连续四
                根深陷周期锚下方 close、最后两根在底部基本平。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子缓和到净空 γ aggregate −39.5M（前 −52.9M、+$13.4M 改善）· flip 落到 $66,509（现货 −4.17% 下方；gap 比 06-04 收窄 0.9pt）· $65k 墙彻底解开（前 −19.25M、今天 −13.09M —— 价格在 strike 下度过这一段缓和 −$6.16M）· $60k 现在 strip 上最重单墙 −20.86M（崩盘 put 区再厚一档）· 5JUN −9.61M（0.3 DTE）主导近端负 —— 从 06-04 那根 −15.89M 衰减（压期间 $6.28M 对冲被压掉）· 5JUN 在 7h 55m 后结算</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子从谱系极值缓和了一档、$65k 墙终于解开、
                5JUN 放大器块衰减 −$6.28M（dealer 对冲在压期间被压掉）
                —— 但 $60k 崩盘 put 区再厚一档、现在 strip 上单墙最重
              </span>。aggregate GEX 是{' '}
              <span className="dn-tag bear">−39.5M / 1%</span>（06-04 是
              −52.9M —— 一根 +$13.4M 结构性改善）；本子仍净空 γ（放大）
              但 06-04 那根谱系极值 −52.9M 离开了 table。0-γ flip 移动{' '}
              <span className="dn-tag">$67,797 → $66,509（−$1,288）</span>。
              两参考距 flip（按 06-02 audit DN-007 延续）：live 现货参考{' '}
              <span className="dn-tag bear">−4.17%</span>（63,738.00 /
              66,509 − 1 = −4.166%）；GEX 文件 Deribit idx 参考{' '}
              <span className="dn-tag bear">−3.82%</span>（63,971 /
              66,509 − 1 = −3.816%，与文件自家 dist-to-flip tile −3.8%
              对齐）。两参考都负、两根都离开 06-04 极值（−5.08% /
              −5.00%）—— 一根 0.9pt 收窄因 flip 比现货落得更快。墙图
              围 $65k 旋转再压到 $60k：{' '}
              <span className="dn-tag bear">$60k −20.86M</span>（前
              −19.85M —— 崩盘 put 区再厚一档、现在 strip 上单墙最重、
              在 live 现货下 $3.7k）、{' '}
              <span className="dn-tag bear">$65k −13.09M</span>（06-04
              是 −19.25M —— 06-04 那根「最重近墙」缓和 −$6.16M，因
              价格在 strike 下度过这一段；门部分解开）、{' '}
              <span className="dn-tag bull">$80k +11.66M</span>（最重正、
              对 +11.72M 基本不动）、{' '}
              <span className="dn-tag bear">$62k −10.40M</span>（前
              −7.92M —— 加深、价格在 strike 间震荡）、{' '}
              <span className="dn-tag bear">$55k −6.99M</span>（前
              −5.46M —— 加深、崩盘 put 走廊往下延伸）、{' '}
              <span className="dn-tag bear">$64k −6.92M</span>（前
              −11.63M —— 实质缓和，at-spot 墙基本解开）、{' '}
              <span className="dn-tag bear">$63k −5.88M</span>（前
              −5.44M —— 基本平）、{' '}
              <span className="dn-tag bear">$50k −5.25M</span>、{' '}
              <span className="dn-tag bear">$58k −4.51M</span>、{' '}
              <span className="dn-tag bull">$82k +4.28M</span>。负簇
              $50k–$65k 合大约堆到{' '}
              <span className="dn-em">−73.9M 的 dealer 放大</span>
              （列墙合：−5.25 − 6.99 − 4.51 − 20.86 − 10.40 − 5.88 −
              6.92 − 13.09 = −73.90M；对 06-04 那根 −84.7M 可比簇 ——
              缓和 −$10.8M），$60k 崩盘 put 现在是头顶向下主导 strike。
              <span className="dn-em">
                结构性放大 regime 实质离开 06-04 谱系极值、但现货
                $63.7k 和 $60k 崩盘 put 墙之间的残余簇仍合到 ~−35M 的
                fade 放大在下方；上面 $80k 正头顶在 ~$16.3k 远 ——
                一根 +25.5% 攀登才能到阻尼 regime
              </span>。5JUN26 0.3DTE{' '}
              <span className="dn-tag bear">−9.61M</span> 今日 08:00Z
              印结算（快照后 ~7h 55m）；除 5JUN 后 aggregate ≈ −39.5M
              − (−9.61M) = −29.9M —— 一根干净离开放大器 regime 的
              step，与 06-04 那根预测一致（06-04 估除 5JUN ≈ −30.2M；
              今天落在那一根 $0.3M 内）。5JUN 这块自身从 −15.89M
              （06-04 读上 1.3 DTE）衰减到 −9.61M（今天 0.3 DTE）——
              一根 $6.28M 绝对权重缩减，dealer 对冲在跨夜段被压掉，
              首根有意义的近端放大块在结算之前部分解开。前向 expiry：{' '}
              <span className="dn-tag bear">6JUN 1.3 −1.83M</span>、{' '}
              <span className="dn-tag bull">7JUN 2.3 +0.56M</span>、{' '}
              <span className="dn-tag bull">8JUN 3.3 +0.14M</span>、{' '}
              <span className="dn-tag bear">12JUN 7.3 −7.37M</span>
              （下一根像样负 —— 从 06-04 的 −8.01M 缓和）、{' '}
              <span className="dn-tag bear">19JUN 14.3 −5.43M</span>、{' '}
              <span className="dn-tag bear">26JUN 21.3 −22.92M</span>
              （月度，前向最重总重量；对 06-04 的 −23.59M 基本不变）、{' '}
              <span className="dn-tag bull">31JUL 56.3 +3.31M</span>
              （前 +2.78M —— 改善）、{' '}
              <span className="dn-tag bull">28AUG 84.3 +1.17M</span>
              （前 +0.74M）、{' '}
              <span className="dn-tag bull">25SEP 112.3 +0.79M</span>
              （前 +0.51M）、{' '}
              <span className="dn-tag bull">25DEC 203.3 +3.43M</span>
              （前 +3.29M）、{' '}
              <span className="dn-tag bull">26MAR27 294.3 +0.39M</span>
              。除 5JUN 后，前向最重权重仍是 26JUN 月度（−22.92M、
              结构性）和 12JUN 7.3（−7.37M、近端）；两根都不像
              29MAY / 5JUN 那一对前段放大器，长 dated 尾（31JUL 起）
              是温和净正。
            </p>

            <p>
              IV 中位数横跨 1,034 合约是{' '}
              <span className="dn-tag bull">46.9%</span>（从 06-04 的
              48.9% / 1,000 合约下来 —— 价格停止延伸时一根 −2.0pt vol
              冷却）对 30D close-to-close RV{' '}
              <span className="dn-tag">34.93%</span> —— 链级溢价{' '}
              <span className="dn-tag">~+11.97pt</span>（对 06-04 的
              ~+13.6pt —— 一根有意义的 −1.6pt 压缩、IV 比 RV 冷得快）。
              是 N 合约的链中位数、<span className="dn-em">不是</span>
              可交易价差；expiry- / strike-level vega、skew、期限结构
              仍未载入、vol 读保持 framework only。1,034 合约对 06-04
              是 1,000 —— 基本平链宽；4JUN 0.3DTE −6.82M 在 08:00Z
              06-04 已清掉、新挂了 7JUN / 8JUN 一批近端链、+34 净合约。
              RV 方法：30D close-to-close、logret.std × √365 × 100、
              用最末 30 根日 log return（= 连续 31 根日 close）、锚自
              parquet 最末 bar 2026-06-05 00:06Z；底层 31-close 窗从
              06-04 滑 −0.40pt 因为 06-04 那根 −0.41% close 落在窗内
              比平均日 ret 安静。参考：最末 29 returns / 30 closes 读
              35.37%；页面值 34.93% 来自 30 returns。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · Tier-1 仍大部分 FETCH-FAILED（10Y / TIPS / 5Y5Y BE / NFCI / Fed 流动性 / US-JP 利差连续第二根渲染不可用）—— HY OAS 加宽 +4bp 对 06-04 到 2.75%（决定性、信用门在取整水位上 3bp 触到 / &gt;3bp 才严格穿过 per DN-007）· DXY 99.43（对 06-04 备忘 +0.21；面板当日 Δ −0.10 per DN-005）· MOVE 73.6（+0.15 对 06-04）· BTC 对 TradFi 脱钩收窄到 −13.44pt（前 −15.02pt）—— BTC −13.42% vs NQ +0.02%</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面在连续第二根渲染上仍大部分不可用 —— Tier-1 大
                部分抓取又失败 —— 但落地的几根读动得决定性：HY OAS 在
                一日里 +4bp 到 2.75%，把信用 re-grow 门按取整水位推
                到 3bp 触到 / &gt;3bp 才严格穿过（按 audit DN-007 措辞
                修正：v1 那句&ldquo;再 1bp 就触发&rdquo;不准、改成
                &ldquo;一段强 session&rdquo;）
              </span>。面板渲染 2026-06-04 22:20Z，比快照早 ~1.75h。
              <em>数据完整性 flag</em>：US 10Y nominal、10Y TIPS real、
              5Y5Y BE 通胀、Chicago Fed NFCI、Fed 净流动性、US-JP 10Y
              利差、所有 Tier-3 通胀行在这版渲染上仍<em>抓取失败</em>
              —— 利率面板连续两根渲染都失明。re-grow 门、real-rates
              risk-off、流动性的交叉参考在那几条上是{' '}
              <span className="dn-em">stale-from-06-03</span>（延续
              06-04 那一根 flag、这版没有干净的新印）。带过来的是：
              HY OAS <span className="dn-tag bear">2.75%（+4.0bp 对
              06-04 备忘）</span>、regime z{' '}
              <span className="dn-tag bull">−1.08</span>、偶发 z{' '}
              <span className="dn-tag bull">−0.64</span> —— RISK-ON 标
              仍在，但偶发 z 实质退（06-04 是 −1.50 → 今天 −0.64、+0.86
              朝中性）；re-grow 门（2.78%）现在<em>在取整水位上 3bp
              触到 / &gt;3bp 才严格穿过</em>（按 audit DN-007：严格
              &gt; 2.78% close 需要超过仅仅触到取整门；v1 措辞
              &ldquo;再 1bp 就触发&rdquo;不准、改成&ldquo;一段强
              session&rdquo;）—— 06-04 是 7bp、对 06-04 一日里 4bp 朝
              触发的决定性动、谱系启动以来首根实质扩张。{' '}
              <em>Delta 约定披露（按 audit DN-005）：</em>下面 DXY /
              USD/JPY / USD/CNY 那几根 delta 是<em>对 06-04 备忘</em>、
              不是面板自己的当日 Δ 列；面板的本日 Δ 内嵌作参考。MOVE
              债波{' '}
              <span className="dn-tag">73.6（+0.15 对 06-04）</span> ——
              对 06-04 备忘平、仍松；DXY{' '}
              <span className="dn-tag bear">99.43（对 06-04 备忘
              +0.21；面板当日 Δ −0.10）</span>、偶发 z{' '}
              <span className="dn-tag bear">+1.36</span> —— 对前一根
              备忘更硬、偶发在 +1.0 阈值上方很远；USD/JPY{' '}
              <span className="dn-tag">160.04（对 06-04 备忘平；面板
              当日 Δ +0.07）</span>（日元在两根备忘之间不动）；USD/CNY{' '}
              <span className="dn-tag bear">6.7730（对 06-04 备忘
              +0.0113、CNY 更软；面板当日 Δ +0.00）</span>、偶发 z{' '}
              <span className="dn-tag bull">−1.20</span> —— 仍偶发松。
              JGB 10Y 陈旧 64d 在 2.52%（陈旧计数从 06-04 那根 63d 长
              一根 —— 月度印没刷）。
              <span className="dn-em">
                净：HY OAS 决定性朝 re-grow 门动（现在 3bp 触到
                / &gt;3bp 才严格穿过；对 06-04 一日里 +4bp 是有意义
                的信用扩张、推到 put-spread 尾监控）；利率侧门、
                reclaim-long 利率筛、real-rates risk-off 读都今天
                FETCH-FAILED（连续第二根渲染）、不能从这版推进或证
                伪 —— 它们按 06-03 的 last-known 值延续等下一根干净
                渲染。宏观面的信用通道在转 risk-off（+4bp HY OAS 扩
                张 + DXY 对 06-04 备忘 +0.21 更硬）—— 谱系下腿里首根
                实质宏观贡献；之前的宏观读是 soft-supportive 而 BTC
                自己跑催化。BTC 对 TradFi 脱钩这版印收窄到 −13.44pt
                （BTC −13.42% vs NQ +0.02%）从 06-04 那根 −15.02pt ——
                一根 +1.58pt gap 收窄，大部分因为 BTC 停止延伸而 NQ
                让回 +1.15pt；脱钩读仍是 endogenous-to-crypto，但
                量级在缓和
              </span>。
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
                <tr><td>US 10Y nominal</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">抓取失败（连续第 2 根）· 06-03 延续（4.47%、+2.0bp · 门 6bp 触发）</td></tr>
                <tr><td>10Y TIPS real</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">抓取失败（连续第 2 根）· 06-03 延续（2.07%）</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">抓取失败（连续第 2 根）· 06-03 延续（2.26%）</td></tr>
                <tr><td>HY OAS</td><td className="num bear">2.75%</td><td className="num bear">+4.0bp</td><td className="num bull">−1.08</td><td className="num bull">−0.64</td><td className="bear">仍松 · 3bp 触到 re-grow 门 / &gt;3bp 才严格穿过（取整水位、按 DN-007 修正）· 对 06-04 +4bp 决定性扩张</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">抓取失败（连续第 2 根）· 06-03 延续（−0.510、陈旧 12d）</td></tr>
                <tr><td>MOVE 债波</td><td className="num">73.6</td><td className="num">+0.15</td><td className="num">−0.26</td><td className="num">+0.03</td><td className="neut">松 · 对 06-04 备忘平</td></tr>
                <tr><td>DXY</td><td className="num bear">99.43</td><td className="num bear">对 06-04 备忘 +0.21（面板当日 Δ −0.10）</td><td className="num">+1.07</td><td className="num bear">+1.36</td><td className="bear">对前一根备忘更硬 · 偶发在 +1.0 阈值上方很远 · 按 DN-005 披露</td></tr>
                <tr><td>Fed 净流动性</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">抓取失败（连续第 2 根）· 06-03 延续（$5.872T、水位不动）</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.04</td><td className="num">对 06-04 备忘平（面板当日 Δ +0.07）</td><td className="num bear">+1.33</td><td className="num bear">+1.28</td><td className="bear">日元在两根备忘之间不动 · 自 05-31 +0.42 · 按 DN-005 披露</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">抓取失败（连续第 2 根）· 06-03 延续（1.95%）</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7730</td><td className="num bear">对 06-04 备忘 +0.0113（面板当日 Δ +0.00）</td><td className="num bull">−1.80</td><td className="num bull">−1.20</td><td className="bull">无标 · 松 · CNY 对前一根备忘更软 · 按 DN-005 披露</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp（月度 · 陈旧 64d）</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不依赖 · 陈旧计数长一根</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:00Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.215</span>
              （较 06-04 的 0.251 再松 —— 跨过 0.25 阈值、regime tag
              从 NORMAL → IDIOSYNCRATIC）。BTC 列出的对齐在每一根宏观
              lead 上都变弱、BTC↔NQ 又收一档：JP225{' '}
              <span className="dn-tag">+0.162</span>（现在 BTC 最强一
              根列出对齐、替代 CL / BRENT / NQ —— 一根惊人的轮动）、
              NGAS <span className="dn-tag">+0.158</span>、PALL{' '}
              <span className="dn-tag">−0.141</span>、CL{' '}
              <span className="dn-tag">−0.140</span>（前 −0.264 —— 落
              ~−0.12）、MSFT <span className="dn-tag">+0.125</span>、
              SP500 <span className="dn-tag">+0.117</span>（前 +0.143）、
              SILVER <span className="dn-tag">+0.117</span>、BRENT{' '}
              <span className="dn-tag">−0.110</span>（前 −0.248）、META{' '}
              <span className="dn-tag">+0.096</span>、TSLA{' '}
              <span className="dn-tag">+0.095</span>、COPPER{' '}
              <span className="dn-tag">+0.095</span>、NQ{' '}
              <span className="dn-tag">+0.090</span>{' '}
              <span className="dn-em">（前 +0.172 —— 落到第 12 位、
              谱系首次低于 SP500 / SILVER / MSFT；BTC↔NQ 对齐继续塌、
              BTC 对宏观 lead 轮动到 JP225 + NGAS 作最强 lead）</span>。
              7d 相对表现：{' '}
              <span className="dn-tag bear">BTC −13.42%</span>（从 06-04
              的 −13.85% 松 +0.43pt —— 7d 窗现在延展到 06-04 close
              $63,853，前端滚过更深的 05-29 日）、NQ{' '}
              <span className="dn-tag bull">+0.02%</span>（对 06-04 的
              +1.17% —— 冷 −1.15pt 到基本平）、SP500{' '}
              <span className="dn-tag bear">−0.02%</span>（对 −0.12%）、
              JP225 <span className="dn-tag bull">+2.05%</span>、MSFT{' '}
              <span className="dn-tag bull">+0.09%</span>（从 +2.89%
              冷）、NVDA <span className="dn-tag bull">+1.15%</span>
              （硬）、META <span className="dn-tag bear">−1.33%</span>
              （比 −2.35% 不那么差）、AAPL{' '}
              <span className="dn-tag bear">−0.21%</span>（从 +0.55%
              翻）、GOOGL <span className="dn-tag bear">−4.79%</span>
              （比 −8.20% 不那么差）、AMZN{' '}
              <span className="dn-tag bear">−7.09%</span>（延伸）、
              TSLA <span className="dn-tag bear">−5.27%</span>。金属
              软：GOLD <span className="dn-tag bear">−0.74%</span>
              （从 +0.01% 滑）、SILVER{' '}
              <span className="dn-tag bear">−2.43%</span>、PLAT{' '}
              <span className="dn-tag bear">−1.71%</span>、PALL{' '}
              <span className="dn-tag bear">−4.47%</span>。能源再硬：
              CL <span className="dn-tag bull">+5.06%</span>、BRENT{' '}
              <span className="dn-tag bull">+3.14%</span>、NGAS{' '}
              <span className="dn-tag bull">+2.07%</span>。
              <span className="dn-em">
                BTC 7d 对 TradFi 引擎的落后收窄到 ~−13.44pt（BTC
                −13.42% vs NQ +0.02%）从 06-04 的 −15.02pt —— 一根
                +1.58pt gap 收窄，大部分因为 BTC 停止延伸而 NQ 让回
                +1.15pt。脱钩读仍是 endogenous-to-crypto；均 |r| 在
                0.215、regime tag 现在 IDIOSYNCRATIC，BTC 对 TradFi
                lead（NQ、SP500、NVDA、MSFT、AAPL、AMZN）列出的对齐
                都在 +0.13 之下 —— 跨资产信号在 BTC 盘上结构性安静。
                最强一根列出对齐轮动到 JP225 / NGAS —— 一根不会下钻
                到 BTC 交易处方的轮动
              </span>。JGB 月度 2.52% 带 EXTREME RISK-OFF 月度标 ——
              不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · runner / put-spread 尾 / 回补反弹 scout 状态不变 · 空头框架监控升级到 CLOSED-VINDICATED（第五连印结构性印对 BJ 15:41 06-04 —— 五印没 live add 过审计纪律阈值）· mean-revert 长 scout（框架监控）3 腿过 2 仍 cleared（多 TF TD9 BUY 确认 + funding 累积空付多 regime）；1h 重夺腿 ~$68k 区现在 ~$4k+ 头顶（比 06-04 更远）· 本次快照无新交易</span>
            </h2>

            <p>
              <span className="dn-signal">
                06-04 那两根框架监控又干净印对 —— 空头框架监控印第
                五连印结构性印对 step（BJ 15:41 06-04、Δnet −5,591、
                和 06-03 印同分钟）、多 TF TD9 BUY 栈现在带 8h / 12h /
                1d 同步加 3d / 1M 待印 —— 但按延续的 audit DN-001
                纪律，桌面在这五根信号上没 size
              </span>。05-31 的回补反弹 scout 仍 DROPPED —— 周期锚现
              在头顶 ~$9.4k、三腿仍要（锚重夺 AND dealer 本子修复
              AND 回补形）都没进展。runner 和 29MAY put-spread 尾仓
              不变 closed。空头框架监控现在跨 05-30 / 06-01 / 06-02 /
              06-03 / 06-04 连续五次结构性印对 —— 06-04 v2 audit 循环
              在 audit pass 上推荐 dispose 到 CLOSED-VINDICATED；这
              一根 v1 在自己的叙事里升级该卡到 CLOSED-VINDICATED、
              没等 audit 批准，因为五连印过 audit 推荐 close 且没 live
              add 已经过 audit 纪律阈值。06-03 的 mean-revert 长 scout
              3 腿过 2 仍 cleared（多 TF TD9 BUY 栈和 funding 累积
              空付多 regime 都是 06-04 那两腿的 DEEPENED 版本），但
              第三腿（~$68k 区 1h 重夺）现在离现货 $63.7k 头顶 ~$4k+
              —— 比 06-04 离触发更远 —— 所以卡再一根备忘保持 NON-
              ACTIONABLE。今天交易本子在 live size 上不变（无）；桌
              面在一根五印空头印对链、一根多 TF TD9 BUY 超卖 cluster、
              和一根谱系最深杠杆缓和 regime 上保持纪律。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · 主仓 · runner 阶梯完成 · 在 29MAY 08:00Z 到期结算上平（不变状态从 06-04 延续）</span>
              <div className="dn-trade-name">
                破位延伸空 —— 在 29MAY 08:00Z 到期结算上平（从 06-04 不变）
              </div>
              <div className="dn-thesis">
                状态不变。回溯读继续确认这一根 close：05-30 / 05-31 日
                close（$73,857 / $73,653）标后放大器两日反弹，然后
                06-01 破（$71,392）、06-02 dump（−6.53%）、06-03 延伸
                （−3.91%）、06-04 几乎平（−0.41% 在 $63,853），未收
                盘 06-05 印 $63,751 基本与 06-04 close 一致。下腿
                day-over-day 首次停止延伸。重入路径仍是一根新结构性
                setup、不是 roll。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">在 05-29 08:00Z 平（放大器结算）· 无残余仓位 · 从 06-04 不变</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">不要追入一根谱系最深空付多 regime + 谱系最密多 TF TD9 BUY cluster + 周期延续框架现在 CLOSED-VINDICATED 的盘上重入空 · 空侧框架在这一腿上结构性完成</span></div>
              </div>
              <div className="dn-gating">
                <b>交易已平。</b>audit-循环纪律守住：不滚、不平均、不晚
                层加。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">DROPPED · scout · 周期锚丢三层+ 下 · ~$9.4k 头顶、任一腿都没进展</span>
              <div className="dn-trade-name">
                回补反弹 scout —— DROPPED 不变（锚重夺现在收盘上头顶 ~$9.4k）
              </div>
              <div className="dn-thesis">
                状态从 06-04 不变。周期锚仍丢、头顶带在 close 上坐
                ~$9.4k（D-SMA100 $73,122 对未收盘 06-05 close $63,751）；
                回补反弹路径的三腿（锚重夺 AND dealer 本子修复 AND
                回补形 flow）都在价格平面上没进展，虽然 dealer 本子
                修复腿在结构上改善（γ 缓和 +$13.4M、flip 落、IV 冷
                −2.0pt）。回补反弹路径上的长重入需要一根这根备忘没看
                到的价格平面结构性拐弯；结构性修复形是对的框架读但
                不是触发条件。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout 状态</span><span className="dn-lvl-v">DROPPED（不变）· 周期锚丢三层+ 下 · 现货现在在重算的 D-SMA100 $73,122 下方 ~$9.4k（周期锚自身因为滚动窗纳入 06-04 close 而泄 −$44 更低）</span></div>
                <div><span className="dn-lvl-k">重入门（延续；价格平面没进展）</span><span className="dn-lvl-v bull">1d close &gt; D-SMA100 $73,122 AND aggregate GEX 翻回 &gt; 0 AND 1h 回补形印（OI 缩 + 现货 CVD bid + SM short_btc 泄）—— 三腿、都要；OI 缩和 short_btc 泄两根今天 PRINTED（OI −5.80% 24h、short_btc −1.96k 24h-对-24h）但锚重夺和 GEX 正仍是 ~$9.4k / ~$30M 结构性距离远</span></div>
                <div><span className="dn-lvl-k">这里不长入场</span><span className="dn-lvl-v bear">不要把多 TF TD9 BUY 同步印当作回补反弹来买 —— 这是下面 mean-revert scout 的 setup、不是回补反弹 setup；回补反弹路径无论超卖反向 cluster 多密都被锚重夺门住</span></div>
              </div>
              <div className="dn-gating">
                <b>交易 dropped（不变）。</b>下面 mean-revert 长 scout
                是单独 setup 钉在超卖反向 exhaustion 上；回补反弹路径
                被锚重夺门住。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">CLOSED-VINDICATED · 空头 scout · 框架监控 · 在本根 v1 叙事上从 NON-ACTIONABLE 升级（第五连印结构性印对；06-04 v2 已推荐 audit-pass dispose；本根 v1 在 STAGE B audit 之前 ratify）</span>
              <div className="dn-trade-name">
                锚破空 scout —— CLOSED-VINDICATED（跨 05-30 / 06-01 / 06-02 / 06-03 / 06-04 五连印结构性印对没 live add；框架 call 完成）
              </div>
              <div className="dn-thesis">
                Shape B 在 06-04 07:41Z step 又印（Δnet −5,591 在现货
                $63,964 —— Δlong −860、Δshort +4,730 一分钟里、SM net
                一根线 −37,698 → −43,289）。结构性印对链现在五连印：
                05-30 06:01Z BJ 14:01 Δnet −5,569（audit DN-001 / 05-31
                校正时间戳）→ 06-01 06:16Z BJ 14:16 Δnet −3,137 → 06-02
                06:46Z BJ 14:46 Δnet −6,621 → 06-03 07:41Z BJ 15:41
                Δnet −7,177（谱系极值）→ 06-04 07:41Z BJ 15:41 Δnet
                −5,591（今天；和 06-03 同分钟）。桌面在这五根信号上
                都没 size、按延续的 audit DN-001。结构性 setup 在空
                侧实质 exhausted：多 TF TD9 BUY 栈在三根并发周期框架
                （8h / 12h / 1d）加两根待印（3d / 1M）、5JUN 放大器
                ~8h 前面而其块衰减 −$6.28M 在结算前（压部分解开）、
                funding 跑空付多 35.67% 24h（谱系最深空付多 regime）、
                OI flush 谱系最大一根 24h 缩、BTC↔NQ 跨资产对齐塌到
                +0.090（第 12 位）。五连印过 audit 推荐 close 且没
                live add 已经过 audit 纪律阈值；本根 v1 在自己的叙事
                上升级到 CLOSED-VINDICATED、等 STAGE B audit ratify
                （或 block，如果它找到一根 reason 把监控保持 live）。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">06-04 Shape B 触发（FIRED、窗外 41 分钟、和 06-03 同分钟）</span><span className="dn-lvl-v bear">Δnet −5,591 在 06-04 07:41Z（BJ 15:41 06-04）现货 $63,964；链里最后两印都落在 UTC 07:41 / BJ 15:41 —— 一根更紧的日历 pin 在原 BJ 13–15 窗关后 41 分钟冒出来，但只两印、节奏还没重新确认</span></div>
                <div><span className="dn-lvl-k">结构性阶梯进度（从 06-04 参考）</span><span className="dn-lvl-v">$65k 墙彻底缓和（06-04 参考 $65k −19.25M → 今天 $65k −13.09M —— 价格在 strike 下度过这一段缓和 −$6.16M）· $60k 崩盘 put 现在 strip 上单墙最重 −20.86M（前 −19.85M —— 价格停在 strike 附近再加深一档）· 5JUN 放大器衰减到 −9.61M（前 −15.89M、一根 $6.28M 绝对权重缩减、dealer 对冲在压期间被压掉、首根有意义的近端 γ 解开在结算前）；除 5JUN 后前向 aggregate（今日结算后投影）≈ −39.5M − (−9.61M) = −29.9M、仍净负但回到一根阻尼-改善 regime 内</span></div>
                <div><span className="dn-lvl-k">处置</span><span className="dn-lvl-v">CLOSED-VINDICATED 在本根 v1 叙事上 · 五连印结构性印对（05-30 −5,569、06-01 −3,137、06-02 −6,621、06-03 −7,177、06-04 −5,591）没 live 入场；框架监控措辞已经延伸过 06-04 v2 audit 推荐；本根 v1 在 STAGE B audit 之前 ratify · 桌面不会追入到一根谱系最密超卖反向 cluster 和谱系最深杠杆缓和 regime 的盘上重入空</span></div>
                <div><span className="dn-lvl-k">放大器窗状态</span><span className="dn-lvl-v">5JUN26 08:00Z 结算（今天 0.3 DTE）· 今天 −9.61M vs 06-04 −15.89M（压部分解开这块、−$6.28M 对冲被压掉）；块在 08:00Z 印结算 ~7h 55m 前快照；除-后 aggregate ≈ −29.9M（与 06-04 那根预测对齐 $0.3M 内）</span></div>
              </div>
              <div className="dn-gating">
                <b>状态：</b>CLOSED-VINDICATED 在本根 v1 叙事上、等
                STAGE B audit ratify。在跨周期延续链五次结构性印对之
                后 —— 包括 06-03 那根谱系单分钟最大 Δnet −7,177 和今
                天的第五根同分钟印 BJ 15:41 —— 框架 call 在自己的措
                辞上完成。<b>硬规则：</b>在一根压部分解开了近端 γ 的
                盘上、和一根五印周期延续 closed 的盘上、不重入空；
                任何未来重武装都需要一根新 setup 起点（不是这根卡的
                roll）。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · 宏观尾 · 在 29MAY 08:00Z 结算上平（不变状态从 06-04 延续；信用门在一根决定性 +4bp HY OAS 扩张日之后取整水位 3bp 触到 / &gt;3bp 才严格穿过；利率侧门连续第二根渲染 FETCH-FAILED）</span>
              <div className="dn-trade-name">
                下行 put-spread —— 在 29MAY 08:00Z 结算上平；不滚（HY OAS 门按取整水位 3bp 触到 / &gt;3bp 才严格穿过、过一根决定性扩张日；10Y 门连续第二根渲染 FETCH-FAILED、从 06-03 延续）
              </div>
              <div className="dn-thesis">
                状态在仓位上不变但门接近度实质动。宏观 re-grow 门在
                信用侧决定性动（HY OAS 2.75%、门现在 3bp 触到 /
                &gt;3bp 才严格穿过 —— 对 06-04 一日里 +4bp、谱系启动
                以来首根实质扩张）而利率侧门（10Y &gt; 4.53%）今天又
                FETCH-FAILED、从 06-03 的 4.47% 延续（6bp 触发）作
                stale-as-of 值。reclaim-long 利率筛（10Y &lt; 4.55%）
                从 06-03 作 TRUE 延续（last 干净读 4.47%）但今天没
                fresh 验证。信用门在结构上现在够接近触发，框架应在
                一段强 session 上重武装（按 audit DN-007 措辞修正：
                在取整水位上 2.75 → 2.78 是 3bp 触到、&gt;3bp 才严格
                穿过；v1 那句&ldquo;再 1bp 就触发&rdquo;不准、改）；
                但今天没 fresh 对冲，因为 BTC-内部周期阶梯破位做了
                结构性工作而前段 γ 在从 strip 上衰减 —— 在这根盘上
                加一根下行对冲反转 audit 纪律。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">在 05-29 08:00Z 平（Deribit 29MAY 结算）· 无残余仓位 · 不滚 · 从 06-04 在仓位上不变</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（下一根 Tier-1 印）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close（当前 2.75%、3bp 触到 / &gt;3bp 才严格穿过取整门 —— 按 DN-007 措辞修正；对 06-04 从 7bp 收窄、信用门在结构上够接近一段强 session 触发）OR 10Y &gt; 4.53% close（今天 FETCH-FAILED、从 06-03 4.47% 延续、6bp 触发作 last-known）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close —— 今天 FETCH-FAILED、从 06-03 作 TRUE 在 last-known 4.47% 延续；这版渲染没 fresh 验证</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>一日里 +4bp HY OAS 扩张是下腿里首根实质
                宏观贡献（之前的宏观读是 soft-supportive）。门在 3bp
                触到 / &gt;3bp 才严格穿过，是<em>一段强 session 远</em>
                —— 下一根干净宏观渲染应密切盯。今天不滚因为 BTC-内
                部结构性读（前段 γ 衰减 + 周期延续 CLOSED-VINDICATED
                + 多 TF TD9 BUY cluster + 谱系最深空付多 regime）反
                方向切；一根 fresh 下行对冲会是对框架读的反纪律加。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">长 · scout · 框架监控 · NON-ACTIONABLE · 3 腿过 2 仍 cleared（多 TF TD9 BUY DEEPENED + funding 累积空付多 regime DEEPER）；第三腿（1h 重夺 ~$68k 区）现在 ~$4k+ 头顶 —— 比 06-04 离触发更远 · 再一根备忘 DEFERRED</span>
              <div className="dn-trade-name">
                Mean-revert 长 scout —— 框架监控、3 腿过 2 cleared（超卖 cluster + 空付多 regime 都更深）；第三腿（1h 重夺 ~$68k 区）现在离现货 $63.7k 更远头顶
              </div>
              <div className="dn-thesis">
                mean-revert 长 scout 的三根 promotion 腿是：(1) 多 TF
                TD9 BUY 在一根周期框架上确认 —— 今天 DEEPENED 到三根
                并发周期框架（8h / 12h / 1d）加两根待印（3d / 1M TD8
                → 9? 在再一根 close 上），谱系最密超卖 cluster；(2)
                funding 累积空付多 regime ≥ 4h —— 今天 DEEPENED 到
                7.47h 单段连续负链（累积 35.67% 的 24h 是负）；(3)
                价格平面上的结构性拐弯是 ~$68k 区 1h 重夺。3 腿过 2
                仍 cleared —— 都是 06-04 那两根读的 DEEPENED 版本 ——
                但第三腿变难了，不是变易：现货 $63.7k 对 ~$68k = ~$4.3k
                价格触发，比 06-04 那根 ~$4k 头顶更远。scout 保持
                NON-ACTIONABLE 因为第三腿是把超卖反向 setup 转成可
                交易回补反弹的结构性拐弯；没它的话，一根仅 TD9 入场
                到一根周期锚头顶 ~$9.4k 的盘上是底捞追、不是结构性
                读。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">promotion 门（3 过 2 cleared、第三根不变）</span><span className="dn-lvl-v bull">腿 1 多 TF TD9 BUY —— CLEARED 在三根并发周期框架（8h / 12h / 1d）加两根待印（3d / 1M）；谱系最密超卖 cluster · 腿 2 funding 累积空付多 ≥ 4h —— CLEARED by wide margin（7.47h 单段连续负链；35.67% 的 24h 是负）· 腿 3 1h close &gt; $68,000 区 —— UNCLEARED，现货 $63,738 在触发下方 ~$4.3k（比 06-04 那根 ~$4k 头顶更远）</span></div>
                <div><span className="dn-lvl-k">$68,000 区（监控 / 拐弯线、不是入场 —— 按 audit DN-006）</span><span className="dn-lvl-v bull">一根 1h close &gt; $68,000 + OI 仍缩标的结构性拐弯升级监控 —— 但在 $68k 触发 / $61,461 止损 / $73,122 首目标这一组上，R/R 读 0.78:1（在桌面 1.5:1 门下）。<em>不要在这根触发上入场。</em>第三腿如果点火再重算 R/R：一根更近现货的新拐弯线、或一根更紧的止损印，可以给出可执行 R/R；在此之前 v1 的「scout long 0.2R」措辞改成<em>仅监控</em> —— 触发必须移近现货（或现货移近触发）才能让这卡结构上可交易</span></div>
                <div><span className="dn-lvl-k">止损（若入场）</span><span className="dn-lvl-v bear">1h close &lt; $61,461（24h capitulation 低 —— 一根新 capitulation 印 invalidates 超卖反向读）</span></div>
                <div><span className="dn-lvl-k">size</span><span className="dn-lvl-v">仅 0.2R · 在周期锚重夺上平半、runner 到 D-SMA50 簇</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R 框架（按 audit DN-006）：</b>若腿 3 在 $68,000
                触发、止损在 $61,461 = ~$6,539 风险；首目标 $73,122 =
                ~$5,122 回报 = 0.78:1（在桌面 1.5:1 门下）。<b>不要
                在 $68k 触发上按写的入场</b> —— $68,000 是一根监控 /
                拐弯线、不是可行入场；v1 那句「scout long 0.2R」与
                R/R 门矛盾、在这一根校正。scout 是 NON-ACTIONABLE
                不只因为腿 3 没点火、还因为即使点火当前水位上 R/R
                也不 pencil —— 腿 3 拐弯必须移近现货（或现货移近拐
                弯）、或止损必须收紧，这卡才能结构上可交易。<em>
                第三腿点火再重算 R/R：</em>只在重算后 stop / 首目标
                对给至少 1.5:1 时入场；否则让它过。<b>硬规则：</b>
                没腿 3 重夺不仅 TD9 入场；不在没被价格行为确认的 TD9
                cluster 上加；超卖反向 setup 是监控、不是触发；即使
                在腿 3 确认上，没过 R/R 门也不入场。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 下腿停止延伸但底没起 · 周期延续 CLOSED-VINDICATED 在五印 · 杠杆本子谱系最深缓和 · 回补反弹 scout 仍 dropped · mean-revert 长 scout 仍被 1h 重夺腿门住</span>
            </h2>

            <p>
              06-04 那张决策条件里：4JUN26 expiry 结算 FIRED 干净（−6.82M
              块在 08:00Z 06-04 清掉）；5JUN 放大器窗状态 DEEPENED 在
              解之前（−15.89M → −9.61M、一根 $6.28M 前段 γ 衰减在今
              天 08:00Z 结算之前）；周期-step Shape B 又在 BJ 15:41
              06-04 FIRED（第五连印；和 06-03 同分钟 —— 取整 UTC 07:41
              / BJ 15:41 这根更紧日历 pin 冒出）；12h MACD 水下死叉
              条件 cleared（现在 17b）；多 TF TD9 BUY 同步条件 DEEPENED
              到三根并发周期框架（8h / 12h / 1d）加 3d / 1M 待印；
              周期锚重夺条件 DID NOT FIRE；宏观 re-grow 门在信用上
              实质朝触发动（HY OAS +4bp 到 2.75%、门 3bp 触到 / &gt;3bp
              才严格穿过）；reclaim-long 利率筛连续第二根渲染 FETCH-FAILED。
              空头框架监控在本根 v1 叙事上从 NON-ACTIONABLE 升级到
              CLOSED-VINDICATED —— 周期延续框架 call 在自己的措辞上
              在五印对之后完成。今天条件围绕一根去杠杆-没回弹的盘、
              一根结构性改善但仍负的 dealer 本子、一根谱系最密超卖反
              向 cluster、和一根仍被锚重夺门住的回补反弹 scout 重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>5JUN26 expiry 结算（今天 08:00Z、~7h 55m 前面）</td><td>−9.61M 块在 08:00Z 结算；除-后 aggregate ≈ −29.9M（预测与 06-04 对齐 $0.3M 内）；一根没 vol 事件的干净结算解前段放大器、阻尼-改善 regime 延续</td><td>盯结算印；若结算干净印则无需动作 —— 若结算窗里出 vol 事件则重评回补反弹 scout 的 dealer 本子修复腿</td></tr>
                <tr><td>Mean-revert 长 scout（腿 3 拐弯、不是入场 —— 按 audit DN-006）</td><td className="bull">1h close &gt; $68,000 + OI 仍缩 · 监控 / 拐弯线仅</td><td><em>不要在 $68k 按写入场；</em>在 $68k 触发 / $61,461 止损 / $73,122 首目标 R/R = 0.78:1（桌面 1.5:1 门下）；v1 那句&ldquo;scout long 0.2R&rdquo;与 R/R 门矛盾、在这一根校正 · 腿 3 点火再重算 R/R、只在重算对给 ≥ 1.5:1 时入场、否则让印过</td></tr>
                <tr><td>回补反弹 scout（长）—— DROPPED（不变）</td><td className="bear">要 1d close &gt; $73,122 AND aggregate GEX 翻 &gt; 0 AND 1h 回补形印 —— 三腿，价格平面腿头顶 ~$9.4k</td><td>无入场 · OI 缩和 short_btc 泄两根在 24h 窗内印了但锚重夺和 GEX 正仍结构性远</td></tr>
                <tr><td>第六印周期延续监控（BJ 15:41 pin）</td><td className="bear">最后两根印都落在 UTC 07:41 / BJ 15:41 —— 一根更紧的日历 pin 从原 BJ 13–15 节奏冒出；盯 UTC 07:41 / BJ 15:41 06-05 的第六根印（~7h 36m 前面快照）</td><td>BJ 15:41 第六根印会建立一根三印链在同分钟（结构上有意义）但空头框架监控现在 CLOSED-VINDICATED —— 即使确认也不新空加；监控是信息性</td></tr>
                <tr><td>HY OAS 宏观 re-grow 门</td><td className="bear">2.75%（按取整水位 3bp 触到门 2.78% / &gt;3bp 才严格穿过、按 audit DN-007 措辞修正；对 06-04 备忘 +4bp 扩张 —— 谱系启动以来首根实质信用扩张）</td><td>在 3bp 触到上，门是一段强 session 远（不是再 1bp 的动 —— DN-007 校正）；下一根干净宏观渲染应密切盯 · 今天不滚因为 BTC-内部结构性读反方向切而一根 fresh 对冲反纪律；若门在一根干净 fresh 渲染上点火、重评一根 5JUN+7 / 12JUN 前向 DTE put-spread 尾</td></tr>
                <tr><td>Reclaim-long 利率筛</td><td className="stale">10Y &lt; 4.55% —— 今天 FETCH-FAILED（连续第 2 根）、从 06-03 4.47% 作 TRUE last-known 延续</td><td>独立筛延续 TRUE 等 fresh 印；要 mean-revert 腿 3 拐弯才能转成 scout 长入场</td></tr>
                <tr><td>周期锚重夺监控（价格平面拐弯）</td><td className="bull">1d close &gt; D-SMA100 $73,122 —— 当前头顶 ~$9.4k；rolling 100-day 锚自身在 06-04 close 滚入窗里时泄 −$44 更低</td><td>回补反弹 scout 三腿里最远的；一根 1d close 在锚上方会重武装回补反弹 scout 并触发新结构性重评 · 在那之前锚仍是承重缺席腿</td></tr>
                <tr><td>BTC↔NQ 跨资产轮动（regime IDIOSYNCRATIC）</td><td className="stale">|r| 0.215、BTC↔NQ +0.090（第 12 位、跌到 SP500 / MSFT / SILVER 下）；最强对齐现在 JP225 +0.162</td><td>BTC 盘在 7d 窗里结构上 idiosyncratic —— 无 TradFi 跨资产处方守住；宏观贡献通过 HY OAS / DXY 在 put-spread 尾框架里、不是通过 NQ 价格行为</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>根备忘的那一根线是
              <span className="dn-signal">
                5JUN 08:00Z 结算是否干净解前段放大器（除-后 aggregate
                ≈ −29.9M、一根进一步结构性改善），还是在结算窗里出一
                根 vol 事件再唤回放大 regime；其次，HY OAS 是否在下
                一根干净宏观渲染上穿过 2.78% re-grow 门（3bp 触到 /
                &gt;3bp 才严格穿过 per DN-007 措辞修正），多 TF TD9
                BUY cluster 是否解到 ~$68k 区 1h 重夺把 mean-revert
                长 scout 升级。周期延续框架 CLOSED-VINDICATED 在五
                印；问题现在是去杠杆解到一根 relief 腿、还是 dealer
                本子残余除-后 −29.9M 和 $60k 崩盘 put 区 −20.86M 把
                现货拉到一根新 capitulation 印
              </span>。在那之前本根备忘按写跑：runner 和 put-spread
              尾 closed、回补反弹 scout dropped、空头框架监控 CLOSED-
              VINDICATED、mean-revert 长 scout 因腿 3 重夺 NON-
              ACTIONABLE、宏观面的信用通道首次轮 risk-off。BTC 对
              TradFi 脱钩收窄到 −13.44pt 因 BTC 停止延伸；引擎 MTF
              框架混合但周期框架带着谱系最密超卖反向 cluster；dealer
              本子缓和 $13.4M 但仍净空 γ。下 24h 的对读是
              <em>耐心 —— 盯 5JUN 结算解、盯下一根干净宏观渲染 HY
              OAS 穿门、盯 1h 重夺 $68k 上方 —— 三根外部印重写 call</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2 · 已过 codex 敌对式审计 · 在 v1 上 BLOCK-CRITICAL 裁定 · 9 条 findings（2 CRITICAL + 5 MAJOR + 2 MINOR）· 全部应用 · 记录：
              <code>audits/2026-06-05-desk-note.md</code>
            </span>
            本页按 v1 从 2026-06-05 00:05Z 原子快照写出、然后提交到
            STAGE B 做 codex 敌对但公正式审计（xhigh 力度、算术按{' '}
            <code>/opt/btc-monitor/live_db.json</code> +{' '}
            <code>/opt/btc-data/data/btcusdt_1m_*.parquet</code> 通过{' '}
            <code>/opt/btc-data/.venv/bin/python3</code> 重算；GEX、
            MTF、宏观、跨资产源端交叉核对）。
            <b>Codex 在 v1 上的裁定：</b><em>BLOCK-CRITICAL</em> —— 两
            条 CRITICAL（SM short_btc / long_btc 当前窗内峰被错写成
            谱系新峰、24h OI 低时间戳是一根 8h 过换算落到快照之后的
            未来），五条 MAJOR（&ldquo;谱系最大 24h OI flush&rdquo;
            对滚动 1-min tape 是 overbroad、MTF 来源指向一根审计时不
            可回溯的 00:01Z 扫描、宏观 DXY/USD/JPY/USD/CNY delta 把
            note-vs-note 标成&ldquo;day&rdquo;、mean-revert 长 scout
            $68k 入场触发与自己 R/R 门矛盾、HY OAS 门接近度内部错述
            为&ldquo;再 1bp 就触发&rdquo;），两条 MINOR（funding 重复
            分钟戳分母 / 分钟 Δ 混淆、1h / 4h flow 窗口端点约定不一
            致）一并标出。
            <b>Codex 在 v1 上 confirmed clean 的：</b>requireViewer
            gating（首句、路径对齐）、JSX 完整性（一个 main / 一个
            article、闭合 tag、<code>tsc --noEmit</code> = 0）、forward-
            looking 范围（scout 延 / framework-only 措辞）、载入数据
            边界（NTT / max-pain / strike-IV / BTC/NQ 比率保持 NOT
            LOADED；200W JSON 缺失没被造成百分位主张）、funding ×
            1095 算式（live +1.47% ann 自原始 0.001346、baseline
            +3.252%、均 ~+0.667%、区间 −3.138% / +6.903%、单段最长
            空付多链 448 采样行）、GEX 双参考符号（flip $66,509、
            现货 −4.17% / idx −3.82%、两参考都负、与文件 −3.8% tile
            对齐）、5JUN 结算算式与除-5JUN ≈ −29.9M 投影（−39.5M −
            (−9.61M)）、SM cut-fraction（|−44,462 − (−44,929)| /
            44,929 = 1.04%）和 BJ 15:41 06-04 重堆敌对-2 step（Δlong
            −860、Δshort +4,730、Δnet −5,591、现货 $63,964）、五连印
            周期延续链（05-30 06:01Z → 06-01 06:16Z → 06-02 06:46Z →
            06-03 07:41Z → 06-04 07:41Z，最后两根同 UTC 分钟）、完整
            MA 矩阵对 live 现货 $63,738.00 自 parquet 2026-06-05
            00:06Z close $63,750.60、30D RV 34.93%、跨资产（|r| 0.215、
            BTC −13.42% vs NQ +0.02% = −13.44pt）、CVD 跨 06-04
            14:39 BJ cb_cvd reset 调整（24h dSpotCVD = −5,803 应用
            重复-行政策）。
            <b>v2 应用全部 9 条 findings：</b>
            <em>DN-001（CRITICAL）：</em>SM short_btc 58,807 和
            long_btc 15,726 被错写成谱系新峰；重写为<em>当前 24h 窗
            内</em>峰、谱系峰仍是 06-03 23:16 BJ / 15:16Z 的 60,729
            （空）和 06-03 22:21 BJ / 14:21Z 的 18,293（长）—— manifest、
            lead 段、Positioning § 三处都改；
            <em>DN-002（CRITICAL）：</em>24h OI 低时间戳从 v1 的
            BJ 15:50 06-05（一根落在 00:05Z 快照之后未来的 8h 过换
            算）校正到 BJ 07:50 06-05 / UTC 23:50 06-04，过换算明确
            披露；
            <em>DN-003（MAJOR）：</em>「谱系最大 24h OI flush」三处
            （manifest、Positioning §、CLOSED-VINDICATED 卡）都改成
            <em>谱系最大一根 note-anchor 24h OI flush</em>、并内嵌
            滚动 1-min tape 反例（06-03 11:38 BJ → 06-04 11:38 BJ
            的 −10,271 BTC / −9.30%）；
            <em>DN-004（MAJOR）：</em>MTF 来源 pinnability 缺口披露：
            引用的 00:01Z 扫描在审计时已被覆盖、只能回溯到 00:16Z
            （BJ 08:16 06-05）扫描；多 TF ⚡ TD9 BUY 8h / 12h / 1d
            同步 + 3d / 1M 待印这条结构性 cluster 用载入的 00:16Z
            扫描核过，但表里 close / RSI / 云 / 24h-价 / qVol 数字
            是原 00:01Z 引用值、v2 升级时改判为<em>framework-only</em>；
            MTF 存档约定是延续的 lineage open issue；
            <em>DN-005（MAJOR）：</em>宏观 DXY / USD/JPY / USD/CNY
            delta 重新标为<em>对 06-04 备忘</em>而不是&ldquo;day&rdquo;
            动、面板自己的当日 Δ 列（DXY Δ −0.10、USD/JPY Δ +0.07、
            USD/CNY Δ +0.00）作参考内嵌、在 manifest 带、宏观段、和
            宏观表里都改；
            <em>DN-006（MAJOR）：</em>mean-revert 长 scout 入场矛盾
            解开：$68,000 从入场触发改判到<em>监控 / 拐弯线</em>；
            v1 那句&ldquo;在 $68k 触发上 scout long 0.2R&rdquo;移除，
            因为 $68k / $61,461 / $73,122 上 R/R 是 0.78:1、在桌面
            1.5:1 门下。校正后的处置是<em>不要在 $68k 按写入场；只
            在腿 3 点火且重算 R/R 对给 ≥ 1.5:1 时执行</em>；
            <em>DN-007（MAJOR）：</em>HY OAS re-grow 接近度措辞校正：
            &ldquo;再 1bp 就触发&rdquo;替换成<em>取整水位 3bp 触到 /
            &gt;3bp 才严格穿过</em>（也描述为一段强 session），在宏
            观段、put-spread 尾卡、决策条件表里都改；
            <em>DN-008（MINOR）：</em>funding 分母政策披露：24h 精
            确 live 窗在 06-04 14:39 BJ cb_cvd reset 上有重复时间
            戳（line 46081 与 46082）；本篇贯穿采用 unique-first 行
            政策、分母规范化 —— 514 / 1441 = 35.67%（v1 是 35.64%）、
            +1% 之下 66.55%、+2% 之下 79.67%（v1 是 80.01%）、分钟 Δ
            471 上 / 478 下 / 491 平（v1 是 472 / 477 / 491）；
            <em>DN-009（MINOR）：</em>1h / 4h 窗口流端点约定不一致
            披露：大部分字段用 61-min / 241-min 起点行（1h 是 07:04
            → 08:05 BJ；4h 是 04:04 → 08:05 BJ），但 taker-net 是从
            一根相邻 60-min / 240-min 起点（07:03 / 04:03 → 08:05
            BJ）算的；一分钟偏移内嵌披露，把 flow 函数统一是带到下
            一篇的 open hygiene 项。空头框架监控升级到 CLOSED-
            VINDICATED 在五印 audit 没 block；这一根处置照延续。
            <b>Open issues（audit-tracked、不在本篇）：</b>MTF 00:01Z
            扫描 pinnability 缺口（DN-004 carry）、重复-行政策规范化
            带到下一根备忘 baseline（DN-008 carry）、1h / 4h flow
            窗口端点统一（DN-009 carry）。
            <b>Build 注（INFO）：</b>本服务器跑 Node 18.19.1；Next
            16.x 在 <code>node_modules/next/dist/bin/next:24-28</code>
            处对 Node &lt; 20.9.0 硬退出，所以完整{' '}
            <code>next build</code> 在本机环境阻塞（谱系自 05-21
            到 06-04 延续）。<code>npx --no-install tsc --noEmit</code>
            是 build proxy；STAGE B 作为 audit 的一部分再跑了一次（exit
            0），STAGE C 在 v2 修正后再跑一次。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是 Hysteresis Research 主理人之间内部讨论用的桌面
            artifact，<em>不是投资建议、不是要约、不是邀约</em>，也
            不针对任何收信人的个人情况定制。数字反映单一原子快照
            （2026-06-05 00:05Z），section 级 provenance 在上方
            manifest 带里披露；宏观 Tier-1 面板渲染时间是 2026-06-04
            22:20Z（快照前约 1.75h），大部分利率侧行在这版渲染上明
            确<em>fetch-failed</em>、部分输入明确陈旧或待定并已标注。
            水位、size、条件是桌面流程的演示、不是长期推荐。过往的
            相关性、γ、仓位形状不约束未来盘。衍生品携带 total loss
            风险、带杠杆时损失可能超过保证金存入额。
            <em>请自行研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                下腿停止延伸但底没起。本子在谱系最大量级上放气而现货
                守住低位。周期延续框架在五印对上 closed；mean-revert
                scout 仍要腿 3 重夺。耐心 —— 盯 5JUN 结算、下一根
                干净宏观渲染、和 1h 重夺 $68k 上方。
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
            v2 · 2026-06-05 00:05Z 快照 · 已过 codex 敌对式审计 ·
            来源：live_db.json · mtf_div_latest.html · btc_gex.html ·
            macro_dashboard.html · cross_asset_correlation_summary.md ·
            btcusdt_1m_*.parquet（2024-2026 子集）· FRED · Yahoo ·
            Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
