import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-04 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-04',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-04' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260604() {
  await requireViewer('/zh/desk/2026-06-04');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-04 · v2</span>
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
              <span className="dn-big">$64,353</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bear)' }}>−3.59%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-04 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-04 00:05Z（snapshot pin 行）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · pin 行 = 00:05Z；审计时 live 文件已前进过
                    pin · 4JUN26 0.3DTE −6.82M 今日 08:00Z 结算（快照后约
                    7h 55m）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-04 00:01Z 扫描（引用）</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 引用的 00:01Z 扫描
                    比 00:05Z 快照锚<em>晚约 4 分钟</em>（按 audit DN-003 把
                    v1 的「fresher」方向改成「stale」—— 00:01Z 是
                    <em>更早</em>不是更新）· 含未收盘 K 线 · audit 注：审计
                    时滚动文件里 00:01Z 扫描已被覆盖，只能回溯到后一根
                    00:16Z 扫描；MTF 存档约定留作后续 lineage open issue
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-04 00:00Z 快照</td>
                  <td className="dn-flag">
                    较快照锚滞后约 5 分钟 · Deribit idx $64,410 对 live
                    $64,353（高 $57）· 1,000 合约（06-03 是 998；3JUN
                    0.3DTE −4.30M 在 06-03 08:00Z 结算后一批近端新链挂上）·
                    4JUN26 0.3DTE −6.82M 是下一根结算（今日 08:00Z、快照后
                    约 7h 55m）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-04 00:00Z
                  </td>
                  <td className="dn-flag">滞后约 5 分钟 · 7d 1h bar · 22 资产 · 167 rows</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-03 22:19Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.78h · <em>数据完整性 FLAG</em>：FRED Tier-1
                    今天基本抓取失败 —— 10Y nominal、10Y TIPS、5Y5Y BE、
                    NFCI、Fed 净流动性、US-JP 10Y 利差、全部 Tier-3 通胀行
                    在这一版渲染里都不可用 · 只有 HY OAS 2.71%（−1bp）、
                    MOVE 73.6（+0.15）、DXY 99.22（+0.02 当日）、USD/JPY
                    160.04（+0.07 当日，日元更软）、USD/CNY 6.7617（~平）
                    干净带过来 · 宏观交叉参考因此是<em>残缺</em>的；利率 /
                    实际利率 / 流动性这几条按「STALE-FROM-06-03」处理、今
                    日只能靠 HY OAS + DXY + MOVE 这三根读 delta
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-06-04 00:06Z（按桌面政策只用 btcusdt_1m_2024..2026 子集）</td>
                  <td className="dn-flag">
                    较快照锚领先约 1 分钟 · MA 源域是 2024-2026 parquet
                    子集（127 根周 bar），延续 06-02 audit DN-005 桌面政策 ·
                    子集下 W-SMA150 / W-SMA200 不可计算；W-EMA150 / W-EMA200
                    能显示是因为 EMA 从可用历史 seed、按种子口径披露 ·
                    偏移按 live 现货 $64,353.22 算（延续 06-03 audit DN-006
                    的 live-pin 分母处置）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月度 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 63d · 月度 · 不作实时</td>
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
              <span className="dn-v bull">+3.25%（脱顶）</span>
              <span className="dn-src">live · 当前脱顶段 375 分钟 / 6.25h，自 2026-06-03 17:51Z（BJ 01:51 06-04）起算 · 24h 窗里这是 FOUR 段离散脱顶 —— 较早 06-03 00:05Z–15:26Z（922 分钟 / ~15.37h，午盘中段大喘息进 dump）、然后两段短带 16:46Z–16:47Z（2 分钟）+ 16:52Z–17:21Z（30 分钟），再到当前从 17:51Z 起的这段 —— 合计 ~1,329 分钟 / ~22.15h 累积脱顶（约 92% 的 24h 是脱顶）· 24h 均 +7.00%（06-03 是 +9.33% · −2.33pt 当日冷下来）· 封顶占用 112 / 1441 采样行 = 7.77%（06-03 是 48.92% · 塌掉 −41.15pt）· 24h funding 谷 +2.86% @ 06-03 09:50Z（BJ 17:50 06-03），落在较早那段长脱顶里 · 整窗仍正（无空付多印）</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">+7.65% → +3.25%（−4.40pt、脱顶）</span>
              <span className="dn-src">区间 +2.86% / +10.95% · 这 24h 杠杆门彻底打开 · 谷 +2.86% 是谱系最深脱顶但还没翻空付多（对照 05-31 谷 −0.21% 那种 regime 没回来）· ≥ 4h 累积门 CLEARED ~5.5×</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">−2.13%（−2,283 BTC）</span>
              <span className="dn-src">live · 自 06-01 起的首根 24h 缩（06-03 是 +1,702 BTC / +1.62% · dump 转到 24h 净去 gross 了）· SM long_btc +102（基本平）、short_btc +4,209（空叠）—— gross book 长 ~4.3k BTC 但全网 OI 缩 ~2.3k，所以非 SM 本子在 24h 里减 ~6.6k BTC</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">68.99 / 31.01</span>
              <span className="dn-src">live_db `mkt_long_pct` · 离谱系峰小幅退（06-03 是 69.35 · −0.36pt）· 24h 区间 68.26 / 69.84（新盘中百分比峰 69.84% 在 BJ 14:42–14:47 06-03 / UTC 06:42–06:47Z —— <em>不</em>是 BJ 22:21；BJ 22:21 那一行 mkt_long_pct 读 68.64%、是 long_btc 持仓量峰、与 retail 百分比峰是两根不同事件，按 audit DN-004 分开）· retail 在 −3.59% 的 24h 里仍重挤多、陷阱形继续</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−44.9k（比 06-03 更深净 SHORT、两侧都更大）</span>
              <span className="dn-src">live · long 12.75k − short 57.68k · short 在 60,729 @ 2026-06-03 15:16Z（BJ 23:16 06-03）见谱系新峰（比 06-03 那根 56,036 高 +4,693），到 pin 已落 −3.0k 到 57,684（仍比前一根谱系峰高 +1,648，按 audit DN-005 把<em>盘中峰 +4.7k</em>与<em>泄后快照 +1.65k</em>这两根事实分开）；long_btc 谱系新长峰 18,293 @ 2026-06-03 14:21Z（BJ 22:21 06-03）；SM net 谷 −46,686 @ 2026-06-03 20:26Z（BJ 04:26 06-04）—— 谱系最深、比 06-03 那根 −44,438 再深 −2,248</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 06-03 备忘</span>
              <span className="dn-v bear">−40.8k → −44.9k（−4,107 净；多 +102、空 +4,209）</span>
              <span className="dn-src">|Δ|/prior_net = 10.06%（4,107 / 40,822）· 空又叠 +4,209、多基本平 —— 连续第二根备忘单侧空头重堆，06-03 那根多侧反弹（+3,813）今天没延伸</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v bear">48.9% / 35.33%</span>
              <span className="dn-src">GEX IV 中位数 · 1,000 合约（06-03 是 998 · +2 根、链宽基本平）· 价格穿过 $65k 同时 vol bid +1.3pt（06-03 是 47.6%）· 30D RV 抬到 35.33%（06-03 是 34.03%、+1.30pt）落在 06-03 −3.91% 那根日 close 上 · IV / RV 价差压到 ~+13.6pt（与 06-03 同）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bear">−5.08%（下方；live 现货参考）</span>
              <span className="dn-src">flip $67,797（前 $69,335、落 −$1,538）· 对 live 现货 $64,353.22（−5.08%；64,353.22 / 67,797 − 1 = −5.080%）/ GEX 文件 Deribit idx $64,410（−5.00%；64,410 / 67,797 − 1 = −4.996%、与文件自家 tile −5.0% 对齐）—— 两参考都负、现货更深陷 flip 下方、谱系最宽下穿读；aggregate GEX 加深到 −52.9M（06-03 是 −38.8M、再放大 −$14.1M）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                周期阶梯破位再下一层 —— 第三层 · 06-03 日 close $64,118
                落 −3.91%、06-03 那篇点的新 $65k 墙被穿干净、现货坐在
                周期锚下方 −12.05%、dealer 本子继续往净空 γ 更深处压
              </span>
              。aggregate GEX 从
              <span className="dn-tag bear">−38.8M</span> 走到
              <span className="dn-tag bear">−52.9M</span>（再加深 −$14.1M
              放大）、0-γ flip
              <span className="dn-tag">$69,335 → $67,797（−$1,538）</span>、
              现货
              <span className="dn-tag bear">$64,353 坐在 flip 下方 −5.08%</span>
              （live 参考；GEX 文件 Deribit idx 侧 tile 给 −5.0% 对它的
              $64,410 idx —— 两参考都负，是谱系两参考下最宽的一根下穿）。
              日 close 走
              <span className="dn-tag bear">06-02 $66,730 / 06-03
              $64,118</span>（连续三根落在 D-SMA100 周期锚 $73,166 下方、
              06-03 那根 −$2,612 叠在 06-02 那根 −$4,662 大跌之上），
              未收盘 06-04 印
              <span className="dn-tag bear">$64,146（比 06-03 close
              高 $28）</span> —— 在底部一根横盘，没在出反弹 K。06-03 那
              篇下的<em>周期-3 step 3</em>节奏监控这一根
              <span className="dn-em">在窗内 sub-threshold 但 step 自身
              在窗外印出</span>：06-03 BJ 13–15 窗（UTC 05:00–07:00 06-03）
              印
              （<span className="dn-tag">窗 Δ −1,098、max |Δnet| 866</span>）
              、然后一根干净的重堆敌对-2 step 印在
              <span className="dn-tag bear">2026-06-03 07:41Z（BJ 15:41
              06-03、晚于窗关 41 分钟）</span>，Δnet
              <span className="dn-tag bear">−7,177</span>（Δlong +2,659、
              Δshort +9,837 同一分钟、SM net 跨
              <span className="dn-tag">−35,956 → −43,133</span> 在现货
              <span className="dn-tag">$67,192</span>）—— 谱系
              <span className="dn-em">单分钟最大一根 Δnet</span>、比 06-02
              06:46Z 那根 −6,621 还大 +8.4%。节奏时间锚松了（窗外 41
              分钟），但周期延续在第四根连续印上确认了。<span className="dn-em">
                按 audit DN-001 把 05-30 时间戳从 v1 的「22:01 BJ /
                14:01Z」更正回源端实际的「14:01 BJ / 06:01Z」之后，前三
                根延续印都落在 BJ 13–15 窗内
              </span>，只有 06-03 这一根在窗外、且只差 41 分钟。四印链
              ：<span className="dn-tag">05-30 14:01 BJ −5,569 →
              06-01 14:16 BJ −3,137 → 06-02 14:46 BJ −6,621 → 06-03
              15:41 BJ −7,177</span>—— 这是一条<em>最后两根比之前大</em>
              的四印节奏（5,569 → 3,137 那一步先收缩、链再扩张），
              <em>不是</em>一条 monotonically 增大的链（按 audit DN-002
              把 v1 的「monotonically larger / growing」措辞全部改成
              「最后两根比之前大」）。funding 在 24h 窗里
              <span className="dn-tag bull">全脱 Binance 顶</span>：累积
              ~22.15h 跨 FOUR 段离散脱顶（较早 15.37h 长段 + 两条短带 +
              当前 6.25h 段），24h 均
              <span className="dn-tag">+7.00% ann</span>（06-03 是
              +9.33%、−2.33pt 冷）、封顶占用
              <span className="dn-tag bull">112 / 1441 采样行（7.77%）</span>
              （06-03 是 48.92%、塌掉 −41.15pt）、谷
              <span className="dn-tag bull">+2.86% ann @ BJ 17:50 06-03</span>
              仍正（无短付多印）。retail 离前一根谱系峰
              <span className="dn-tag bear">69.35% → 68.99%（−0.36pt）</span>
              ，盘中百分比峰 69.84% 在 BJ 14:42–14:47 06-03（按 audit
              DN-004 与 long_btc-持仓量峰那根 BJ 22:21 分开）—— retail 仍
              重挤多、陷阱形继续。OI 缩
              <span className="dn-tag bull">−2,283 BTC</span> 跨 24h
              （自 06-01 来首根 24h 缩）；short_btc 谱系新峰
              <span className="dn-tag bear">60,729 @ BJ 23:16 06-03</span>
              ；SM net 谱系新谷
              <span className="dn-tag bear">−46,686 @ BJ 04:26 06-04</span>
              ；long_btc 谱系新长峰
              <span className="dn-tag">18,293 @ BJ 22:21 06-03</span> —— 到
              snap 已被洗回。结构扫是这条谱系里最响的一根反向信号：
              <span className="dn-tag bull">⚡ 15m / 1h / 4h / 8h / 1d
              五框架同时印 TD9 BUY</span>，在 $64,307–$64,338，加上
              <span className="dn-tag bull">3d / 1M Buy 8 → 9?</span> 各
              离印一根 —— 全谱系按每一根指标都最重的一根超卖反转 counter
              栈。今天的盘是确认的周期阶梯破位第三层、更深净空 γ、仓位
              本子两侧都在谱系极值净空更深、杠杆门完全打开（~22.15h
              累积脱顶）、加上五框架同步 TD9 BUY 印出来 —— 每一根读数
              都比 06-03 再拉远一档。
            </p>

            <p>
              现货报 <span className="dn-tag">$64,353</span> live、
              <span className="dn-tag bear">−3.59%</span> 在 24h、落在
              一条宽区间
              <span className="dn-tag">$67,484 / $64,109</span> 里（高 @
              2026-06-03 06:40Z / BJ 14:40 06-03、低 @ 2026-06-03 23:59Z /
              BJ 07:59 06-04 —— 低印在快照<em>前 6 分钟</em>、snap 行是
              低印之后桌面第一根 pin）。06-03 那篇的活跃门全部延伸或印
              到：周期阶梯破第三层（06-03 close $64,118 对前一根 $66,730
              再低 −$2,612 / −3.91%）；A 型回补反弹触发<em>仍 STALE</em>
              （现货没碰过 $73,035–$73,216 重夺带 —— 这条带在 close 上
              头顶已 $9,043）；B 型破位触发在 06-03 07:41Z step 上<em>
              再印一次</em>（Δnet −7,177，谱系单分钟最大）；funding 累积
              脱顶 ≥ 4h 长头门 CLEARED ~5.5×（~22.15h 累积 vs 06-03
              的 ~12.2h）；06-03 BJ 13–15 节奏窗在 sub-threshold 内但
              周期延续 step 自身在窗外 41 分钟印出谱系单分钟最大 Δnet；
              宏观 re-grow 门信用侧动了（HY OAS −1bp 到 2.71%，离触发还
              7bp —— 比 06-03 远 1bp）。<span className="dn-signal">头顶
              每一根 MA 现在都深陷负</span>：从最近的 W-SMA20
              <span className="dn-tag bear">$72,679（−11.46%）</span>
              （06-03 是 −8.32% —— 头顶带又拉宽 ~3.1pt），到 D-EMA20
              <span className="dn-tag bear">$72,879（−11.70%）</span>、
              周期锚 D-SMA100
              <span className="dn-tag bear">$73,166（−12.05%）</span>
              （06-03 是 −8.80%）、W-EMA200 种子
              <span className="dn-tag bear">$73,607（−12.57%）</span>、
              D-SMA20 <span className="dn-tag bear">$74,109（−13.16%）</span>
              、D-EMA50 <span className="dn-tag bear">$74,749（−13.91%）</span>
              、D-SMA150 <span className="dn-tag bear">$75,511（−14.78%）</span>
              、D-EMA100 <span className="dn-tag bear">$75,767（−15.06%）</span>
              、W-EMA20 <span className="dn-tag bear">$76,427（−15.80%）</span>
              、D-SMA50 <span className="dn-tag bear">$76,668（−16.06%）</span>
              、W-EMA150 种子 <span className="dn-tag bear">$78,042（−17.54%）</span>
              、D-EMA150 <span className="dn-tag bear">$78,045（−17.54%）</span>
              、D-SMA200 <span className="dn-tag bear">$78,932（−18.47%）</span>
              、D-EMA200 <span className="dn-tag bear">$80,470（−20.03%）</span>
              。06-03 那根「头顶 ~$6.5k 到周期锚 / ~$13k 到深 MA 簇」
              的读已经延伸到
              <span className="dn-em">头顶 ~$8.8k 到周期锚</span>、加上
              ~$16k 到深 MA 簇 —— 重夺阶梯顺序仍在，但每一档现在都坐
              在现货头顶 +13% 到 +17%。<span className="dn-em">
                结构性背景是确认的周期阶梯破位第三层：锚上方消化 → 第
                一根 close 落下 → 两根连续 close 深陷下方 → 三根连续
                close 更深陷下方；dealer 本子在谱系最深净空 γ；仓位
                本子两侧都在谱系峰加深净空（short_btc 峰 60,729 BTC @
                BJ 23:16 06-03、long_btc 峰 18,293 BTC @ BJ 22:21
                06-03，都是谱系峰）。pin 读 long_btc 12,755 / short_btc
                57,684 —— 两侧都从盘中峰退、但空侧仍远高于前一根谱系
                峰。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · 24h 本子空侧 gross 长、长侧基本平 · 净又往深里压 · 节奏 WEAKENED 窗外（06-03 BJ 13–15 sub-threshold）但 step 自身在窗关后 41 分钟印出谱系单分钟最大 Δnet（−7,177）· funding 累积 ~22.15h 脱顶占 24h 的 ~92% —— 杠杆门完全放开</span>
            </h2>

            <p>
              <span className="dn-signal">
                仓位本子空侧在长、长侧基本平、净又往深空里压 —— 连续第
                二根备忘单侧空头重堆
              </span>
              。SM net 是
              <span className="dn-tag bear">−44,929</span> 对 06-03 备忘的
              −40,822、也就是
              <span className="dn-em">+10.06% 更空</span>
              （|−44,929 − (−40,822)| / 40,822 = 10.06%）。分量：long_btc
              <span className="dn-tag">12.65k → 12.75k（+0.10k）</span>、
              short_btc
              <span className="dn-tag bear">53.47k → 57.68k（+4.21k）</span>
              —— 长侧 snap 基本平（虽然盘中曾峰 18.29k @ BJ 22:21 06-03、
              一根真实的长侧重建后撤回），空侧又在 06-03 +7.60k 之上
              叠 +4.21k。<span className="dn-em">连续两根备忘空侧合计加
              +11.81k BTC；长侧 cycle 过一遍（重建再回撤）、snap-net 现在
              回到接近 06-03 平长形、但空侧仍更深</span>。24h 窗内：
              long_btc Δ
              <span className="dn-tag">+102</span>、short_btc Δ
              <span className="dn-tag bear">+4,209</span>、net Δ
              <span className="dn-tag bear">−4,107</span>（102 − 4,209 =
              −4,107）—— gross +4.3k BTC、net −4.1k BTC。short_btc 在
              <span className="dn-tag bear">60,729 @ 2026-06-03 15:16Z
              （BJ 23:16 06-03）</span>见谱系新峰（前一根谱系峰 56,036
              在 06-03 snap），盘中峰<em>比前峰高 +4,693</em>；snap 已泄
              −3.0k 到 57,684、仍<em>比前峰高 +1,648</em>（按 audit
              DN-005 把盘中峰 +4.7k 与泄后快照 +1.65k 这两根事实分开）。
              long_btc 在
              <span className="dn-tag">18,293 @ 2026-06-03 14:21Z（BJ 22:21
              06-03）</span>见谱系新长峰（前是 05-29 17:21Z 那根 15,358）、
              snap 已泄 −5.5k。SM net 谷
              <span className="dn-tag bear">−46,686 @ 2026-06-03 20:26Z
              （BJ 04:26 06-04）</span>、谱系最深、比 06-03 那根 −44,438
              再深 −2.25k。本子两侧都更大 AND 净更深 AND 盘中极值再深 ——
              即使杠杆门完全放开，压在仓位上还没耗尽。
            </p>

            <p>
              <span className="dn-signal">
                框架的 BJ 13–15 节奏窗自身在 sub-threshold 内，但周期延续
                step 在窗关后 41 分钟印出整条谱系单分钟最大 Δnet
              </span>
              。06-03 BJ 13–15 窗（UTC 05:00–07:00 06-03）开仓 SM net
              −34,526、收仓 −35,625 —— 窗 Δ
              <span className="dn-tag">−1,098</span> 跨 2h、max |Δnet|
              <span className="dn-tag">866</span>：一根安静漂、节奏预测
              在时间锚上<em>没</em>准时印。但窗关后 41 分钟、在
              <span className="dn-tag bear">2026-06-03 07:41Z（BJ 15:41
              06-03）</span>、现货 <span className="dn-tag">$67,192</span>、
              long_btc 一根线 <span className="dn-tag">13,999 → 16,658</span>
              （+2,659 BTC）、short_btc 一根线
              <span className="dn-tag">49,955 → 59,792</span>（+9,837
              BTC <em>单分钟</em>；59,792 − 49,955 = 9,837 —— 谱系单分钟
              最大一根空叠）、SM net 一根线
              <span className="dn-tag">−35,956 → −43,133</span>（Δnet
              −7,177 —— 谱系单分钟最大 Δ，比 06-02 06:46Z 那根 −6,621
              大 +8.4%）。这根 step 是重堆敌对-2 加成（Δshort &gt; 0 同
              分钟有长侧加印、两侧扩张式重堆而不是纯长侧洗），印在 BJ
              13–15 窗<em>外</em> —— 节奏时间锚松了 41 分钟，但周期延续
              step 自身在第四根连续印上确认。
              <span className="dn-em">
                按 audit DN-001 把 05-30 时间戳从 v1 的「22:01 BJ /
                14:01Z」改正回源端实际的「14:01 BJ / 06:01Z」之后，前
                三根延续印（05-30 14:01 BJ、06-01 14:16 BJ、06-02 14:46
                BJ）都落在 BJ 13–15 窗内 —— 只有 06-03 这一根 15:41 BJ
                在窗关后 41 分钟；节奏的时间锚只在最近一根上松、不是
                整条链都松
              </span>
              。06-03 BJ 22 次窗印一根小漂（窗 Δ
              <span className="dn-tag">−355</span>、max |Δnet|
              <span className="dn-tag">231</span>）—— 次窗今天<em>没</em>
              印。价格后果：07:41Z BJ step 在 $67,192 引出一串延续到 24h
              低
              <span className="dn-tag bear">$64,109 @ BJ 07:59 06-04（晚
              16h 18m）</span>—— 步入价格之后 −$3,083 / −4.59% 的延续。
              <span className="dn-em">
                节奏框架现在读：时间锚松（最近一根窗外 41 分钟）但周期
                延续 step 自身在第四根连续印上以谱系极值印出。框架不再
                纯 BJ 13–15-pin —— 把周期看成当日仍活、但预期时间锚继续
                松；周期大约一根 / 日产生延续 step，BJ 13–15 窗现在是
                一个弱化的先验、不是硬 pin
              </span>
              。
            </p>

            <p>
              杠杆侧今天彻底放开了顶。
              <span className="dn-signal">
                funding 在 24h 窗里 FOUR 段离散脱顶，合计 ~22.15h 累积
                （~92% 的 24h）—— 谱系最大一根杠杆门放开
              </span>
              ：live <span className="dn-tag">+3.25% ann</span>（06-03
              是 +7.65%），24h 区间
              <span className="dn-tag">+2.86% / +10.95%</span> 谷
              <span className="dn-tag bull">+2.86% ann @ 2026-06-03 09:50Z
              （BJ 17:50 06-03）</span>—— 谱系最深脱顶但还没翻空付多
              （对照 05-31 谷 −0.21% 那种 regime 没回来）。24h 均 ann
              <span className="dn-tag bull">+7.00%</span>（vs 06-03 的
              +9.33% —— −2.33pt 冷下来）。封顶占用
              <span className="dn-tag bull">112 / 1441 采样行（7.77%）</span>
              —— 从 06-03 那根 48.92% 塌掉（−41.15pt）；其余 ~1,329 分钟
              （~22.15h 累积）是脱顶，跨四段（较早 922 分钟 / 15.37h、
              加两条带 2 分钟 + 30 分钟、加当前 375 分钟 / 6.25h）。
              累积脱顶时间已经把 06-02 框架那根
              <span className="dn-em">≥ 4h 累积</span> 长侧重入第一腿门
              CLEARED ~5.5×，≥ 30 连续分钟监控在四段里印了三段 ——
              <span className="dn-em">mean-revert 升级 trigger 的第一
              腿在累积口径上 CLEARED 由 wide margin</span>。OI Δ
              <span className="dn-tag bull">−2,283 BTC（−2.13%）</span>
              跨 24h —— 06-01 起首根 24h 缩、对 06-03 那根 +1,702 一根
              急转；非 SM 本子在 24h 里减 ~6.6k BTC（SM gross +4.3k vs
              总 OI −2.3k → 非 SM −6.6k BTC）。retail
              <span className="dn-tag bear">mkt_long_pct 68.99%</span>
              从 69.35% —— −0.36pt 离前一根谱系峰，盘中百分比峰 69.84%
              @ BJ 14:42–14:47 06-03（按 audit DN-004 与 long-持仓量
              峰那根 BJ 22:21 分开）。perp 对现货
              <span className="dn-tag bear">−$103.97 折价</span>在快照
              （1h 均 −$101.38、区间 −$209.09 / −$14.43；4h 均
              −$95.55；24h 均 −$100.02、区间
              <span className="dn-tag">−$270.90 / +$164.95</span> ——
              basis 在 24h 窗早段那一根午盘喘息里短暂上 +$165、但没持续
              翻升水 regime）。1 分钟 aggressor skew 快照
              <span className="dn-tag">+5.0</span>（1h 均 −8.77、区间
              −40.9 / +28.7）—— 这一小时一档温和买侧倾斜，与离开
              23:59Z $64,109 低之后的反射 consolidation 一致。
              <span className="dn-em">
                funding 累积 ~22.15h 脱顶（~92% 的 24h、谱系最大放开）+
                retail 离峰小退 + OI 缩 + SM gross 只在空侧长 —— 杠杆
                本子完全放开了顶上的压，但 SM 空叠还没耗尽。杠杆门开
                了；仓位本子还没在回补
              </span>
              。
            </p>

            <p>
              窗口流向是<em>现货侧提供 offer 24h、4h 有一档温和大单 bid、
              1h 在 flat-to-up 反弹上 long-add</em>。24h：价格
              <span className="dn-tag bear">−3.59%</span>、OI
              <span className="dn-tag bull">−2,283 BTC</span>（去 gross）、
              现货 CVD
              <span className="dn-tag bear">Δ −6,840</span>（窗内无 reset
              · 干净 delta、谱系 24h 最重的一根现货 offer 印）、期货 CVD
              <span className="dn-tag bear">Δ −4,076</span>（窗内无 reset
              · 干净 delta）、大单
              <span className="dn-tag bear">−3,065 BTC / 901 笔</span>、
              taker-net
              <span className="dn-tag bear">−4,089</span> ——
              <span className="dn-em">
                现货在 24h 上重 offer（−6.84k 干净 cb_cvd，谱系 24h 最
                重的一根 offer 印）、期货在汇总上以干净 delta 卖、大单
                净卖、OI 在跌中缩：现货 led dump + 期货跟进，但 OI 去
                gross 是新且重要
              </span>
              。4h（精确端点窗，2026-06-03 20:05Z → 2026-06-04 00:05Z）：
              价格 <span className="dn-tag bear">−1.48%</span>、OI
              <span className="dn-tag bull">−420 BTC</span>（继续去
              gross）、现货 CVD
              <span className="dn-tag bear">Δ −1,073</span>（现货仍
              offer）、期货 CVD
              <span className="dn-tag bull">Δ +200</span>（期货温和 bid）、
              大单 <span className="dn-tag bull">+364 BTC / 121 笔</span>、
              taker-net <span className="dn-tag bull">+191</span> —— 形
              状是现货仍 offer 但期货温和 bid + 大单净买；OI 缩持续，
              大单正这一根是最近下腿里 4h 的首根正大单读。1h（精确端
              点窗，2026-06-03 23:05Z → 2026-06-04 00:05Z）：价格
              <span className="dn-tag bear">−0.52%</span>、OI
              <span className="dn-tag bear">+715 BTC</span>（snap 小时
              里再 gross，对前面的去 gross 反过来）、现货 CVD
              <span className="dn-tag bear">Δ −730</span>、期货 CVD
              <span className="dn-tag">Δ −93</span>（基本平）、大单
              <span className="dn-tag">+13 BTC / 37 笔</span>（平）、
              taker-net <span className="dn-tag">−85</span> —— snap 小
              时读一根小 offer + OI 在 snap 小时里再 gross 而更宽的
              4h 在去 gross；一根 long add 在 snap 小时里追 $64.1k 低
              与 24h OI 缩在 snap 时间点让位给小仓位加底捞一致。
              <em>24h 窗内无 CVD reset（三个 horizon 上 cb_cvd 和 fut_cvd
              delta 都干净 —— 与 06-03 那根两 reset 24h 读不同）；现货
              CVD 仍是最干净的承重流向读</em>。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图（00:01Z 扫描）· ⚡ TD9 BUY 同时印在 15m / 1h / 4h / 8h / 1d 在 $64,307–$64,338 · 3d / 1M Buy 8 → 9? 各一根 · RSI 在 4h–12h（19.7 / 15.4 / 14.3）谱系最深超卖 · 全谱系最重一根超卖反转 counter 栈</span>
            </h2>

            <p>
              <span className="dn-signal">
                结构扫印出全谱系最重一根超卖反转 counter 栈：5 框架在
                00:01Z 扫描里同时印⚡ TD9 BUY
              </span>
              。8h 水下死叉从 06-03 5 bar 老到
              <span className="dn-tag bear">8 bar</span> —— 引擎熊已经
              well-confirmed。慢框架加入：
              <span className="dn-tag bear">3d 水上死叉 3 bar</span>
              （前 2 bar — 确认）、1d
              <span className="dn-tag bear">云下 3 bar</span>（前 2 bar
              —— 确认）、3d <span className="dn-tag bear">云下 1 bar</span>
              （06-03 是<em>刚穿</em> —— 今天确认）。RSI 又在
              <span className="dn-em">谱系最深超卖</span>跨引擎与中框架：
              1h <span className="dn-tag bear">29.8</span>（前 25.0 ——
              略离 06-03 那根 washout）、4h
              <span className="dn-tag bear">19.7</span>（前 13.4 —— 离
              极端但仍深）、8h
              <span className="dn-tag bear">15.4</span>（前 15.5 —— 同
              水位、谱系 8h RSI 最深）、12h
              <span className="dn-tag bear">14.3</span>（前 14.6 —— 同
              水位、谱系 12h RSI 最深）、1d
              <span className="dn-tag bear">19.6</span>（前 22.2 —— 更深、
              谱系日线新低）。单框架 counter 信号栈现在叠成多框架同时
              确认：
              <span className="dn-tag bull">⚡ 15m TD9 BUY 在 $64,336</span>
              、<span className="dn-tag bull">⚡ 1h TD9 BUY 在 $64,338</span>
              、<span className="dn-tag bull">⚡ 4h TD9 BUY 在 $64,336</span>
              （这条下腿第三根连续 4h TD9 BUY —— 06-03 在 $66,835、06-02
              在 $71,226；今天比前一根低 $2,499）、
              <span className="dn-tag bull">⚡ 8h TD9 BUY 在 $64,307</span>
              （06-03 8h Buy 8 → 9? 在 08:00Z 06-03 收盘上确认）、
              <span className="dn-tag bull">⚡ 1d TD9 BUY 在 $64,307</span>
              （06-03 1d Buy 8 → 9? 在 00:00Z 06-04 日 close 上确认 ——
              这下腿来第一根周期框架 TD9 BUY）。再加：
              <span className="dn-tag bull">3d Buy 8 → 9?</span> 离印一根
              AND <span className="dn-tag bull">1M Buy 8 → 9?</span> 离印
              一根。
              <span className="dn-em">
                直读：引擎与慢框架继续确认熊（8h 死叉 8b + 3d 死叉 3b +
                1d 云下 3b + 3d 云下今天确认）；RSI 略离 06-03 极端但
                1d 印谱系新低 19.6；超卖反转 counter 栈解成多框架同步
                ⚡ TD9 BUY 在 15m / 1h / 4h / 8h / 1d AND 3d / 1M 各离印
                一根。这是全谱系最重一根多框架同步 TD9 BUY 印。结构熊
                确认；counter 现在比 06-03 那根 setup 在结构上更重一档
              </span>
              。
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,336</td><td className="num bear">31.6</td><td className="bear">死叉（水下）6b</td><td className="bear">云下 ↑66.3k 36b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">64,308</td><td className="num bear">31.2</td><td className="bear">死叉（水下）19b</td><td className="bear">云下 ↑66.7k 137b</td><td>Buy 5</td><td>BEAR hid · BEAR reg · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">64,338</td><td className="num bear">29.8</td><td className="bear">死叉（水下）5b</td><td className="bear">云下 ↑68.2k 67b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num">64,336</td><td className="num bear">19.7</td><td className="bear">死叉（水下）16b</td><td className="bear">云下 ↑74.3k 55b</td><td>⚡ TD9 BUY</td><td>BEAR hid</td></tr>
                <tr><td>8h</td><td className="num">64,307</td><td className="num bear">15.4</td><td className="bear">死叉（水下）8b</td><td className="bear">云下 ↑76.4k 57b</td><td>⚡ TD9 BUY</td><td>BULL reg</td></tr>
                <tr><td>12h</td><td className="num">64,329</td><td className="num bear">14.3</td><td className="bear">死叉（水下）15b</td><td className="bear">云下 ↑78.2k 25b</td><td>Buy 7</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num">64,307</td><td className="num bear">19.6</td><td className="neut">—</td><td className="bear">云下 ↑73.9k 3b</td><td>⚡ TD9 BUY</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>3d</td><td className="num">64,338</td><td className="num">33.1</td><td className="bear">死叉（水上）3b</td><td className="bear">云下 ↑74.0k 1b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">64,338</td><td className="num">34.9</td><td className="neut">金叉（水下）7b</td><td className="bear">云下 ↑100.3k 18b</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">64,336</td><td className="num">43.0</td><td className="neut">—</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>BULL reg</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z 扫描（滚动 latest 文件；
                    按 audit DN-003 注：00:01Z 比 00:05Z 快照锚<em>晚约 4
                    分钟</em>，不是 v1 写的「fresher」；审计时滚动文件里
                    00:01Z 扫描已被覆盖、只能回溯到后一根 00:16Z 扫描 ——
                    本页保留 00:01Z 引用的扫描值并按 open issue 在
                    audits/2026-06-04-desk-note.md 里追踪）。头部告警：
                    <em>15m ⚡ TD9 BUY 在 $64,336</em>、
                    <em>1h ⚡ TD9 BUY 在 $64,338</em>、
                    <em>4h ⚡ TD9 BUY 在 $64,336</em>、
                    <em>8h ⚡ TD9 BUY 在 $64,307</em>、
                    <em>1d ⚡ TD9 BUY 在 $64,307</em>、
                    <em>3d TD8 Buy → 9?（再 1 根 close）</em>、
                    <em>1M TD8 Buy → 9?（再 1 根 close）</em>。扫描现货
                    $64,308、24h −3.63%（00:01Z MTF 扫描；live-tape 头部
                    00:05Z 在同一 24h 窗读 −3.59% —— 4 分钟时间差导致
                    0.04pt 偏差、在采样噪声范围内）、24h H/L $67,494 /
                    $64,051、qVol $20.64B。收盘为未收盘 K 线；每个值在各
                    周期收盘前都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵确认一根完全头顶的结构性读，再延伸第三层。现货
              $64,353 坐在
              <span className="dn-tag bear">W-SMA20 $72,679 下方
              −11.46%</span>（头顶最近线，06-03 是 −8.32% —— 头顶带又拉
              宽 ~3.1pt），和
              <span className="dn-tag bear">D-SMA100 $73,166 下方
              −12.05%</span>（丢掉的周期锚 —— 06-03 UTC close $64,118 把
              它穿 $9,048；未收盘 06-04 印 $64,146 比 06-03 close 高 $28、
              比锚低 ~$9,020）。然后按顺序：
              <span className="dn-tag bear">D-EMA20 $72,879（−11.70%）</span>、
              <span className="dn-tag bear">W-EMA200 $73,607（−12.57%；
              种子）</span>、
              <span className="dn-tag bear">D-SMA20 $74,109（−13.16%）</span>、
              <span className="dn-tag bear">D-EMA50 $74,749（−13.91%）</span>、
              <span className="dn-tag bear">D-SMA150 $75,511（−14.78%）</span>、
              <span className="dn-tag bear">D-EMA100 $75,767（−15.06%）</span>、
              <span className="dn-tag bear">W-EMA20 $76,427（−15.80%）</span>、
              <span className="dn-tag bear">D-SMA50 $76,668（−16.06%）</span>、
              <span className="dn-tag bear">W-EMA150 $78,042（−17.54%；
              种子）</span>、
              <span className="dn-tag bear">D-EMA150 $78,045（−17.54%）</span>、
              <span className="dn-tag bear">D-SMA200 $78,932（−18.47%）</span>、
              <span className="dn-tag bear">D-EMA200 $80,470（−20.03%）</span>
              。更高更远、已弃用：W-EMA100 $82,844（−22.32%）、W-EMA50
              $83,972（−23.36%）、W-SMA100 $88,413（−27.21%）、W-SMA50
              $92,634（−30.53%）。
              <span className="dn-signal">矩阵对 live 现货上 ZERO 正
              偏移</span>—— 日线和周线阶梯上的每一根 MA 都在头顶，跟
              06-03 同样读但又拉宽一档；最近线 W-SMA20 从 06-02 的
              −2.34% 走到 06-03 的 −8.32% 走到今天的 −11.46%（连续三根
              备忘的扩张头顶带）。结构性近线集合：W-SMA20 头顶
              （−11.46%）、D-EMA20 头顶（−11.70%）、周期锚 D-SMA100 头顶
              （−12.05%）、W-EMA200 种子头顶（−12.57%）—— 一道 ~$0.9k
              宽重夺带坐在现货头顶 ~$8–9k。
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-06-04 00:06Z（close
                $64,145.80）。MA 源域是 2024-2026 parquet 子集（127 根周
                bar）按桌面政策 —— 延续 06-02 audit DN-005 决定。子集下
                W-SMA150 / W-SMA200 仍不可计算（短两窗）；W-EMA150
                $78,042（−17.54%）和 W-EMA200 $73,607（−12.57%）能显示
                是因为 EMA 从可用历史 seed、按种子披露。上面偏移按 live
                现货 $64,353.22 直接算（按 06-03 audit DN-006 处置：live-pin
                分母延续；parquet-邻近 close $64,145.80 比 live pin 低
                $207.42、对 parquet 平面算的偏移会读 ~+0.32pt 更深）。
                显示 MA 水位按 $ 取整、偏移按精确序列值算。日 close：
                05-29 $73,428、05-30 $73,857、05-31 $73,653、06-01 $71,392
                （周期锚下首根 close）、06-02 $66,730（谱系单日最大一根
                close-to-close 落 −$4,662 / −6.53%）、06-03 $64,118（再
                落 −$2,612 / −3.91% —— 谱系最深 close）、06-04 未收盘
                $64,146 —— 连续三根 close 深陷周期锚下方
              </span>
              。
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子更深净空 γ aggregate −52.9M（前 −38.8M、再放大 −$14.1M）· flip 落到 $67,797（现货 flip 下方 −5.08%、谱系最宽）· 06-03 那根 $65k −15.48M 墙穿过（今天 $65k −19.25M —— 更深而不是解开）· 5JUN −15.89M（1.3 DTE）是 strip 上的放大器 —— 比 06-03 读再深 +$1.0M 而不是在压上解 · 4JUN −6.82M 7h 55m 后结算</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子又往净空 γ 更深一档 · $65k 墙图随价格穿过 strike
                时变得<em>更深</em>而不是解开
              </span>
              。aggregate GEX 是
              <span className="dn-tag bear">−52.9M / 1%</span>（06-03 是
              −38.8M —— 再加深 −$14.1M）；本子现在是谱系最深净空 γ。0-γ
              flip 移动
              <span className="dn-tag">$69,335 → $67,797（−$1,538）</span>
              。两参考距 flip（按 06-02 audit DN-007 延续）：live 现货
              参考
              <span className="dn-tag bear">−5.08%</span>
              （64,353.22 / 67,797 − 1 = −5.080%）；GEX 文件 Deribit idx
              参考
              <span className="dn-tag bear">−5.00%</span>（64,410 / 67,797
              − 1 = −4.996%、与文件自家 tile −5.0% 对齐）。两参考都负、
              现货更深陷 flip 下方 —— 谱系两参考下最宽的一根下穿。墙图
              围 $65k 转动：
              <span className="dn-tag bear">$65k −19.25M</span>（06-03
              是 −15.48M —— 06-03 那根「新最重近墙」<em>更深</em> −$3.77M
              在压从 strike 上方测试时反而没解开）、
              <span className="dn-tag bear">$60k −19.85M</span>（前
              −15.12M —— 新整体最重墙，现货下方 $4k —— 崩盘 put 区在价
              格接近时变厚了）、
              <span className="dn-tag bull">$80k +11.72M</span>（最重正、
              前 +14.64M —— 在 ~$15.6k OTM 上松）、
              <span className="dn-tag bear">$64k −11.63M</span>（基本贴
              现货 —— 一根新近现货墙在现货所坐 strike 上出现）、
              <span className="dn-tag bear">$62k −7.92M</span>、
              <span className="dn-tag bear">$66k −5.87M</span>（前 −7.87M
              —— 松）、
              <span className="dn-tag bear">$55k −5.46M</span>、
              <span className="dn-tag bear">$63k −5.44M</span>、
              <span className="dn-tag bear">$68k −4.77M</span>（前 −10.98M
              —— 价格移开 06-03 那簇后实质松）、
              <span className="dn-tag bear">$50k −4.48M</span>。负簇
              $50k–$68k 大概累
              <span className="dn-em">−84.7M 的 dealer 放大</span>{' '}
              从现货往下穿崩盘 put 残余区（列墙合：−4.48 − 5.46 − 7.92 −
              5.44 − 11.63 − 19.25 − 5.87 − 4.77 − 19.85 = −84.67M；按
              audit DN-006 把 v1 那根「−83.7M 保守汇总」校到实际
              −84.7M）。
              <span className="dn-em">
                dealer 本子结构上在卖出反弹、买进回落、$64k 近现货墙和
                $60k 崩盘 put 区就在 live 现货下面。放大 regime 比 06-03
                更深，近 strike 负簇的结构性地板已经转到 $60k–$65k。挤
                压侧的 $80k 正头顶在 ~$15.6k 头顶 —— 一个完整 +24% 攀
                登才能到阻尼 regime
              </span>
              。4JUN26 0.3DTE
              <span className="dn-tag bear">−6.82M</span>在今日 08:00Z
              印结算（快照后约 7h 55m）；后结算除 4JUN 的 aggregate ≈
              −52.9M − (−6.82M) = −46.1M、仍净负。前向 expiry：
              <span className="dn-tag bear">5JUN 1.3 −15.89M</span>
              <span className="dn-em">（strip 上主放大器 —— 从昨天 −14.89M
              再深 −$1.0M 而不是在压上解；这一块没像前一篇估计的那样从
              本子上压掉）</span>、
              <span className="dn-tag bear">6JUN 2.3 −1.67M</span>、
              <span className="dn-tag bear">7JUN 3.3 −0.03M</span>、
              <span className="dn-tag bear">12JUN 8.3 −8.01M</span>、
              <span className="dn-tag bear">19JUN 15.3 −5.38M</span>、
              <span className="dn-tag bear">26JUN 22.3 −23.59M</span>
              （月度，前向最重总重量）、
              <span className="dn-tag bull">31JUL 57.3 +2.78M</span>（前
              +4.53M —— 松）、
              <span className="dn-tag bull">28AUG 85.3 +0.74M</span>、
              <span className="dn-tag bull">25SEP 113.3 +0.51M</span>（前
              +2.86M —— 实质松）、
              <span className="dn-tag bull">25DEC 204.3 +3.29M</span>（前
              +5.03M —— 松）、
              <span className="dn-tag bull">26MAR27 295.3 +0.30M</span>。
              5JUN −15.89M 这块仍是主导近端负权重，而且<em>更深</em>不是
              解开 —— 压<em>没</em>把 γ 从 strip 上拿掉、明天 08:00Z 结算
              之前；除 5JUN 前向 aggregate（4JUN 结算后）≈ −46.1M −
              (−15.89M) = −30.2M、仍净负。5JUN 之后阶梯<em>没</em>带相似
              重量的新放大器，但 26JUN 月度在 22.3 DTE 上带结构性重量。
            </p>

            <p>
              IV 中位数横跨 1,000 合约是
              <span className="dn-tag bear">48.9%</span>（从 06-03 的
              47.6% / 998 合约上来 —— 价格穿过 $65k 同时 +1.3pt vol bid）
              对 30D close-to-close RV
              <span className="dn-tag">35.33%</span> —— 链级溢价
              <span className="dn-tag">~+13.6pt</span>（对 06-03 的 ~+13.6pt
              基本不变 —— IV 和 RV 一起走、IV +1.3pt 而 RV +1.30pt、价差
              守住）。是 N 合约的链中位数、<span className="dn-em">不是
              </span>可交易价差；expiry- / strike-level vega、skew、期限
              结构仍未载入、vol 读保持 framework only。1,000 合约对 06-03
              的 998 —— 基本平链；3JUN 0.3DTE −4.30M 在 08:00Z 06-03 已
              清掉、4JUN 0.3DTE −6.82M 挂了下一天 —— 链宽基本没净变。
              RV 方法：30D close-to-close、logret.std × √365 × 100、用最末
              30 根日 log return（= 连续 31 根日 close）、锚自 parquet 最
              末 bar 2026-06-04 00:06Z；底层 31-close 窗现在含 06-03 −3.91%
              那根 close、把 30D RV 从 34.03%（06-03 备忘）推到 35.33%
              （+1.30pt vol 扩张）。参考：最末 29 returns / 30 closes 读
              35.57%；页面值 35.33% 来自 30 returns。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · Tier-1 这版渲染基本 FETCH-FAILED（10Y / TIPS / 5Y5Y BE / NFCI / Fed 流动性 / US-JP 利差全部不可用）—— 只有 HY OAS −1bp 到 2.71%、DXY +0.02 到 99.22、MOVE 73.6（+0.15）、USD/JPY 160.04（+0.07）带过来 · BTC 对 TradFi 脱钩再拉宽到 −15.02pt（前 −14.18pt）—— BTC −13.85% vs NQ +1.17%</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观盘今天基本不可用 —— Tier-1 大部分抓取失败 —— 落地
                的几根读基本没动而 BTC 又掉 −3.59%
              </span>
              。面板渲染 2026-06-03 22:19Z、比快照早约 1.78h。<em>
              数据完整性 flag</em>：US 10Y nominal、10Y TIPS real、5Y5Y BE
              通胀、Chicago Fed NFCI、Fed 净流动性、US-JP 10Y 利差、所有
              Tier-3 通胀行在这版渲染上都<em>抓取失败</em> —— 在谱系上
              一直锚着宏观读的利率面板今天部分失明。re-grow 门、real-rates
              risk-off、流动性的交叉参考在那几条上是
              <span className="dn-em">stale-from-06-03</span>。带过来的
              是：HY OAS
              <span className="dn-tag bull">2.71%（−1.0bp）</span>、regime z
              <span className="dn-tag bull">−1.35</span>、偶发 z
              <span className="dn-tag bull">−1.50</span> —— 仍深 risk-on
              偶发（RISK-ON 标）、当日松 1bp 所以 re-grow 门（2.78%）现在
              远 7bp（06-03 是 6bp —— 再打开 1bp）；MOVE 债波
              <span className="dn-tag">73.6（+0.15）</span> —— 当日基本平、
              仍松；DXY
              <span className="dn-tag bear">99.22（+0.02 当日）</span>、
              偶发 z
              <span className="dn-tag bear">+1.15</span> —— 当日平、偶发
              仍在 +1.0 阈值上；USD/JPY
              <span className="dn-tag">160.04（+0.07 当日；+0.42 自
              05-31）</span>（日元更软）；USD/CNY
              <span className="dn-tag bull">6.7617（~平）</span>、偶发 z
              <span className="dn-tag bull">−1.91</span> —— 仍偶发松。JGB
              10Y 陈旧 63d 在 2.52%（陈旧计数从 06-03 那根 60d 长了 —— 月
              度印没刷新）。
              <span className="dn-em">
                净：HY OAS 在信用侧 re-open 1bp（现在离触发 7bp、06-03 是
                6bp）；利率侧门、reclaim-long 利率筛、real-rates risk-off
                读这一版都 FETCH-FAILED、从这版渲染上不能 advance 也
                不能证伪 —— 从 06-03 last-known 值延续、等下一版干净渲染。
                宏观盘在工作的那根读（HY OAS）上仍净 risk-on、其它失明；
                BTC 当日 −3.59% 延伸仍是它自己的催化（周期阶梯破位 +
                更深 dealer 放大 + 节奏 step），不是宏观。BTC 对 TradFi
                脱钩这一印拉宽到 −15.02pt（BTC −13.85% vs NQ +1.17%）从
                06-03 的 −14.18pt —— 再拉宽 −0.84pt、基本因为 BTC 自己
                再下一档同时 NQ 松 −0.84pt；脱钩读仍 endogenous-to-crypto
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
                <tr><td>US 10Y nominal</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">FETCH FAILED · 从 06-03 延续（4.47%、+2.0bp · 离门 6bp）</td></tr>
                <tr><td>10Y TIPS real</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">FETCH FAILED · 从 06-03 延续（2.07%）</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">FETCH FAILED · 从 06-03 延续（2.26%）</td></tr>
                <tr><td>HY OAS</td><td className="num">2.71%</td><td className="num bull">−1.0bp</td><td className="num bull">−1.35</td><td className="num bull">−1.50</td><td className="bull">松 · risk-on 偶发 · 离 re-grow 门 7bp（对 06-03 松 1bp）</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">FETCH FAILED · 从 06-03 延续（−0.510、陈旧 11d）</td></tr>
                <tr><td>MOVE 债波</td><td className="num">73.6</td><td className="num">+0.15</td><td className="num">−0.26</td><td className="num">+0.03</td><td className="neut">松 · 当日基本平</td></tr>
                <tr><td>DXY</td><td className="num">99.22</td><td className="num">+0.02</td><td className="num">+0.83</td><td className="num bear">+1.15</td><td className="bear">硬 · 偶发在 +1.0 上方</td></tr>
                <tr><td>Fed 净流动性</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">FETCH FAILED · 从 06-03 延续（$5.872T、水位不变）</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.04</td><td className="num bear">+0.07</td><td className="num bear">+1.33</td><td className="num bear">+1.28</td><td className="bear">日元更软 · 自 05-31 +0.42</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">FETCH FAILED · 从 06-03 延续（1.95%）</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7617</td><td className="num">~平</td><td className="num bull">−1.92</td><td className="num bull">−1.91</td><td className="bull">无标 · 松 · 对 06-03 ~平</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp（月度 · 陈旧 63d）</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不依赖 · 陈旧计数变长</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:00Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值
              <span className="dn-tag">|r| 0.251</span>（从 06-03 的
              0.258 松、刚卡在 NORMAL / IDIOSYNCRATIC 边界 —— regime 标
              仍是 NORMAL）。BTC 列出的对齐按 |r| 横跨每一根宏观引领都
              实质变弱：CL <span className="dn-tag">−0.264</span>（前
              −0.314）、BRENT
              <span className="dn-tag">−0.248</span>（前 −0.302）、JP225
              <span className="dn-tag">+0.189</span>、SILVER
              <span className="dn-tag">+0.174</span>、NQ
              <span className="dn-tag">+0.172</span>（前 +0.220 —— 再
              落、BTC↔NQ 对齐继续松）、TSLA
              <span className="dn-tag">+0.170</span>、GOLD
              <span className="dn-tag">+0.152</span>、SP500
              <span className="dn-tag">+0.143</span>、PLAT
              <span className="dn-tag">+0.138</span>、JPY
              <span className="dn-tag">−0.127</span>、GOOGL
              <span className="dn-tag">+0.126</span>、EUR
              <span className="dn-tag">+0.121</span>、COPPER
              <span className="dn-tag">+0.106</span>。7d 相对表现：
              <span className="dn-tag bear">BTC −13.85%</span>（从 06-03
              的 −12.17% 再深 —— 7d 窗现在延伸到 06-03 close 上）、NQ
              <span className="dn-tag bull">+1.17%</span>（vs +2.01% ——
              松 ~−0.84pt）、SP500
              <span className="dn-tag bear">−0.12%</span>（vs +1.05% ——
              翻一根小亏）、JP225
              <span className="dn-tag bull">+3.61%</span>、MSFT
              <span className="dn-tag bull">+2.89%</span>（从 +5.69% 松）、
              NVDA <span className="dn-tag bull">+0.87%</span>（从 +3.76%
              松）、META
              <span className="dn-tag bear">−2.35%</span>（从 −1.68% 延
              伸）、AAPL
              <span className="dn-tag bull">+0.55%</span>、GOOGL
              <span className="dn-tag bear">−8.20%</span>（一根新 7d 单
              名弱读）、AMZN
              <span className="dn-tag bear">−8.02%</span>、TSLA
              <span className="dn-tag bear">−4.13%</span>（延伸）。金属
              软：GOLD
              <span className="dn-tag bull">+0.01%</span>（基本平）、SILVER
              <span className="dn-tag bear">−2.27%</span>、PLAT
              <span className="dn-tag bear">−3.35%</span>、PALL
              <span className="dn-tag bear">−5.73%</span>。能源硬：CL
              <span className="dn-tag bull">+5.33%</span>、BRENT
              <span className="dn-tag bull">+3.34%</span>、NGAS
              <span className="dn-tag bull">+5.22%</span>。
              <span className="dn-em">
                BTC 对 TradFi 引擎的 7d 落后拉宽到 ~−15.02pt（BTC −13.85%
                vs NQ +1.17%）从 06-02 的 −9.18pt 和 06-03 的 −14.18pt
                —— 缺口再拉宽 ~−0.84pt 当日，基本因为 BTC 把它自己的内
                部下腿再下一档同时 NQ 退了一小档。脱钩读仍
                endogenous-to-crypto；BTC 列出的对齐 NQ、CL、BRENT 全部
                往 IDIOSYNCRATIC 区段更弱处走。|r| 均 0.251 刚卡在
                IDIOSYNCRATIC 阈值上 —— 下一根印可能 shift regime 标
              </span>
              。JGB 月度 2.52% 带 EXTREME RISK-OFF 月度标 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 回补反弹 scout 维持 DROPPED 不变（锚头顶 ~$8.8k）· runner / put-spread 尾仓维持平仓不变 · 框架空头监控仍 NON-ACTIONABLE 但结构上<em>两次</em>被印对 —— codex 敌对式审计这一根应该把它处置成 CLOSED-VINDICATED · mean-revert 长 scout（框架监控）推进：3 升级腿里 2 腿现在 CLEARED（8h / 1d TD9 BUY 确认 + funding 累积 ≥ 4h CLEARED ~5.5×）；1h 重夺腿在 $68k 区仍 ~$4k 头顶 · 本次快照无新交易</span>
            </h2>

            <p>
              <span className="dn-signal">
                06-03 那几个框架监控这一根又干净印对 —— Shape B 印（Δnet
                −7,177 在 BJ 13–15 窗后 41 分钟 step）、多 TF TD9 BUY 栈
                在两个周期框架上同时确认（8h AND 1d TD9 BUY 今天都印
                出）、funding 累积 ≥ 4h CLEARED ~5.5× —— 但按延续的
                audit DN-001 纪律，桌面在这些信号上一根都没 size
              </span>
              。05-31 的回补反弹 scout 维持 DROPPED —— 周期锚现在头顶
              ~$8.8k、三条腿（锚重夺 AND dealer 本子修复 AND 回补形）一
              条都没推进。runner 与 29MAY put-spread 尾仓维持平不变。框
              架空头监控现在结构上<em>两次</em>被印对（06-02 −6,621 step
              在节奏内 + 06-03 −7,177 step 在窗外印谱系新极值）；下一根
              audit pass 应该把这张卡处置成 CLOSED-VINDICATED。06-03 的
              新 mean-revert 长 scout 在 24h 内推进 3 升级腿里的 2 腿
              （8h / 1d TD9 BUY 确认 + funding 累积 ≥ 4h CLEARED by wide
              margin）；第 3 腿（1h 重夺过 $68k 区）仍在 ~$4k 头顶，所以
              卡再保持一根 NON-ACTIONABLE。今天交易本子按 live size 算
              对 06-03 没变（无）；桌面在确认的周期阶梯破位第三层 + 全谱
              系最重一根超卖 counter 栈下，保持纪律。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · 主仓 · runner 阶梯完成 · 在 29MAY 08:00Z 到期结算上平（状态不变，自 06-03 延续）</span>
              <div className="dn-trade-name">
                破位延伸空 —— 在 29MAY 08:00Z 到期结算上平（对 06-03 不变）
              </div>
              <div className="dn-thesis">
                状态不变。回溯读继续印对平仓的决定：05-30 / 05-31 日
                close（$73,857 / $73,653）标了放大器后两日反弹、然后 06-01
                破（$71,392）、06-02 dump（−6.53%）、06-03 延伸（−3.91%）、
                06-03 close 在 $64,118 比 06-02 那根结构性破再低 $2,612。
                重开路径仍是一根全新的结构性 setup、不是 roll。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">在 05-29 08:00Z 平（放大器结算）· 无残余仓位 · 对 06-03 不变</span></div>
                <div><span className="dn-lvl-k">不要</span><span className="dn-lvl-v">不要在 funding 离顶 + OI 缩 + 多 TF TD9 BUY 同时印的 setup 里追一根重开空 —— 在这里追空会把谱系纪律反过来 · 不要在框架空头监控的「印对」上再加（它仍 NON-ACTIONABLE）</span></div>
              </div>
              <div className="dn-gating">
                <b>交易已平。</b>审计 cycle 的纪律守住：不滚、不平均、
                不补深档。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">DROPPED · scout · 周期锚下落三档 · 头顶 ~$8.8k、每一腿都没推进</span>
              <div className="dn-trade-name">
                回补反弹 scout —— DROPPED 不变（锚重夺在 close 上现在头顶 ~$8.8k）
              </div>
              <div className="dn-thesis">
                状态对 06-03 不变。周期锚仍丢、头顶带在 close 上长到
                ~$8.8k；回补反弹路径三条腿（锚重夺 AND dealer 本子修复
                AND 回补形流向）都没推进 —— γ 更深空、墙图转到现货下面、
                仓位本子在空侧 gross 长。回补反弹路径上的长重入需要一根
                结构性 inflection、本篇没看见。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">scout 状态</span><span className="dn-lvl-v">DROPPED（不变）· 周期锚下落三档 · 现货现在 ~$8.8k 在 D-SMA100 $73,166 下方</span></div>
                <div><span className="dn-lvl-k">重入门槛（延续；不推进）</span><span className="dn-lvl-v bull">1d close &gt; D-SMA100 $73,166 AND aggregate GEX 翻回 &gt; 0 AND 1h 回补形印（OI 缩 + 现货 CVD bid + SM short_btc 泄）—— 三腿都要；都没推进</span></div>
                <div><span className="dn-lvl-k">这里不进长</span><span className="dn-lvl-v bear">不要在 06-03 / 06-04 这根 dump 上、在多 TF TD9 BUY 同时印作回补反弹买进 —— 这是和下面的 mean-revert scout 不同的 setup、回补反弹路径要锚重夺</span></div>
              </div>
              <div className="dn-gating">
                <b>交易 DROPPED 不变。</b>下面的 mean-revert 长 scout 是
                另一根针对超卖反转 exhaustion 的 setup；回补反弹路径门
                在锚重夺。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 空头 scout · NON-ACTIONABLE · 结构上<em>两次</em>印对（06-02 Δnet −6,621 在节奏内 + 06-03 Δnet −7,177 在窗外印谱系新极值）· 等 codex 这根 audit pass 处置为 CLOSED-VINDICATED</span>
              <div className="dn-trade-name">
                锚破空头 scout —— 仅框架监控，结构上两次印对；codex 应处置为 CLOSED-VINDICATED
              </div>
              <div className="dn-thesis">
                Shape B 在 06-03 07:41Z step 上再印一次（Δnet −7,177 ——
                谱系单分钟最大一根 Δ），在 BJ 13–15 窗关后 41 分钟。结构
                性 vindication 链现在两根连续印：06-02 06:46Z / 14:46 BJ
                Δnet −6,621 在节奏内（窗内 —— 按 audit DN-007 把 UTC 后
                缀从 v1 的「14:46Z」typo 改成「06:46Z」）、06-03 07:41Z
                Δnet −7,177 窗外 41 分钟但在谱系单分钟最大。桌面按延续
                的 audit DN-001 纪律，在两根信号上都没 size。前看，结构
                性 setup 在空侧实质 exhausted：多 TF TD9 BUY 栈五框架同
                时确认、funding 累积 ~22.15h 脱顶在 24h 窗里、OI 在 24h
                上缩、5JUN 放大器现在领先 ~32h 到 08:00Z 5JUN 结算。把
                这一根 setup 当 chase-add 加空头 —— 两次结构性 vindication
                已经完成 AND 一根 ~22.15h funding 脱顶印 —— 不能过 audit。
                这张卡在这根 audit pass 上应处置成 CLOSED-VINDICATED ——
                codex 敌对式审计会决定正式状态。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">06-03 Shape B 触发（FIRED、窗外 41 分钟）</span><span className="dn-lvl-v bear">1h close &lt; $70,718 AND 一根 fresh Δnet ≤ −3k 重堆 —— 两腿都 FIRED 在 06-03 07:41Z（BJ 15:41 06-03）Δnet −7,177 现货 $67,192；BJ 13–15 窗关后 41 分钟（节奏时间锚松、但周期延续 step 自身在第四根连续印上以谱系极值印出）</span></div>
                <div><span className="dn-lvl-k">结构阶梯推进（06-03 参考水位）</span><span className="dn-lvl-v">$70k 墙全部穿过（06-02 参考：$70k −28.64M → 06-03：−7.39M → 今天：不在 top 10、&lt; −5M）· $65k 墙穿过（06-03 参考 $65k −15.48M → 今天 $65k −19.25M —— 更深而不是解开、strike 在现货 ~$0.4k 下）· $60k 崩盘 put 墙现在是整体最重 −19.85M（前 −15.12M —— 价格接近时变深）· 原 06-03 阶梯节奏 $65k → $60k 部分完成 · 5JUN 放大器自身更深到 −15.89M（前 −14.89M）—— 压<em>没</em>把 γ 从 strip 上拿掉</span></div>
                <div><span className="dn-lvl-k">建议 audit 处置</span><span className="dn-lvl-v">CLOSED-VINDICATED · 两根连续结构性 vindication（06-02 −6,621 在节奏内 + 06-03 −7,177 窗外印谱系极值）无 live 入场 · 框架监控措辞已经延续到 audit 应该允许的极限；这是 audit pass 应该把它处置的一根</span></div>
                <div><span className="dn-lvl-k">放大器窗状态</span><span className="dn-lvl-v">5JUN26 08:00Z 结算（今天 1.3 DTE）· −15.89M 今天 vs 06-03 的 −14.89M（+$1.0M 更深）· 块<em>更深</em>而不是解开 —— 压没拿掉 γ；这块在 08:00Z 印结算，离这根快照前约 32h</span></div>
              </div>
              <div className="dn-gating">
                <b>状态：</b>NON-ACTIONABLE（仅框架监控、延续）等 codex
                audit 处置。两根连续结构性 vindication + 谱系单分钟最大
                一根 Δnet 已经印过、无 live 入场，这张卡应该在这根
                audit pass 上处置成 CLOSED-VINDICATED。<b>硬规则：</b>
                不在压已经完成的盘上入场；不在解决前 24h 内的放大器淡
                仓入场（5JUN 1.3 DTE 在今天落在那个窗里）。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">已平 · 宏观尾 · 在 29MAY 08:00Z 结算上平（状态对 06-03 不变；re-grow 门信用侧 re-open 1bp；利率侧门今天 FETCH-FAILED）</span>
              <div className="dn-trade-name">
                下行 put-spread —— 在 29MAY 08:00Z 结算上平；不滚（HY OAS 门离触发 7bp；10Y 门今天 FETCH-FAILED，从 06-03 延续）
              </div>
              <div className="dn-thesis">
                状态不变。宏观 re-grow 门信用侧动了（HY OAS 2.71%，离触
                发还 7bp —— 对 06-03 松 1bp）而利率侧门（10Y &gt; 4.53%）
                今天 FETCH-FAILED、从 06-03 的 4.47%（离触发 6bp）作为
                stale-as-of 值延续。reclaim-long 利率筛（10Y &lt; 4.55%）
                从 06-03 延续为 TRUE（last clean read 4.47%）—— 但今天没
                fresh 验证。不开新对冲：BTC 内部周期阶梯破位在当前门距下
                结构上已经做得比一根宏观尾多、5JUN 放大器仍有 1.3 DTE
                头顶、滚一根新尾到 12JUN −8.01M 或 26JUN −23.59M 的 scale
                会在 IV 已经 +1.3pt bid 之后入场 vol。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">在 05-29 08:00Z 平（Deribit 29MAY 结算）· 无残余仓位 · 不滚 · HY OAS 门对 06-03 松 1bp（离触发 7bp）；10Y 门 FETCH-FAILED，从 06-03 延续（离触发 6bp）</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（fires roll 到 12JUN / 26JUN）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% close（当前 2.71%、离触发 7bp —— 对 06-03 re-open 1bp）OR 10Y &gt; 4.53% close（今天 FETCH-FAILED；从 06-03 的 4.47% 延续，离触发 6bp）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% close —— 今天 FETCH-FAILED，从 06-03 延续为 TRUE 在 4.47%；这根筛的 freshly verified-as-of 日期现在是 06-03</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 门仍是酌情盯位。今天宏观 Tier-1 抓
                取失败横跨大部分利率侧指标，意味着 10Y / TIPS / 5Y5Y BE
                / NFCI / Fed 流动性读不能 advance 也不能从这版渲染上证伪、
                延续 stale。新对冲应该只在 fresh 干净宏观侧触发上 re-open
                —— 不在 BTC 内部 exhaustion 或 stale-carry 上。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · mean-revert 长 scout · NON-ACTIONABLE（延续 · 3 升级腿里 2 腿 CLEARED —— 8h / 1d TD9 BUY 确认 + funding 累积 ≥ 4h CLEARED ~5.5×；1h 重夺过 $68k 区是最后一腿、~$4k 头顶）· 全谱系最重一根多 TF TD9 BUY 同步印今天建成</span>
              <div className="dn-trade-name">
                mean-revert 长 scout —— NON-ACTIONABLE；3 升级腿里 2 腿 CLEARED、1h 重夺腿仍 ~$4k 头顶
              </div>
              <div className="dn-thesis">
                06-03 升级触发有三腿：(1) 8h OR 1d TD9 BUY 在下一根 bar
                close 确认 —— CLEARED、两根都在这一次扫描里印出（8h ⚡
                TD9 BUY 在 $64,307；1d ⚡ TD9 BUY 在 $64,307 —— 下腿来
                第一根周期框架 TD9 BUY）。再加：4h ⚡ TD9 BUY 在 $64,336
                （这下腿连续第三根 4h TD9 BUY）、15m 和 1h ⚡ TD9 BUY 同
                步印、3d / 1M 各离印一根。(2) funding 累积 ≥ 4h 脱顶在
                24h 窗里 —— CLEARED by wide margin（~22.15h 累积、~5.5×
                门）。(3) 1h close 在一根 leading-edge 重夺水位上（框架
                参考：$68k 区，更深档在 D-EMA20 $72,879）—— NOT CLEARED、
                现货 $64.3k、1h close $64,338 在 $68k leading-edge 下
                ~$3.7k。
                <span className="dn-em">
                  3 升级腿里 2 腿在 24h 内 CLEARED。卡按延续的 audit
                  DN-001 纪律再保持一根 NON-ACTIONABLE。如果 1h close
                  印 &gt; $68k 且 TD9 BUY 栈完整、funding 仍脱顶，未来
                  一根 audited 备忘可以升级到 0.2R scout。这下腿单根
                  4h TD9 BUY 现在已经连续印三次（06-02 $71,226 →
                  06-03 $66,835 → 今天 $64,336）；前两根都失败；只有
                  多 TF 同步印 + 1h 重夺腿确认一根 promotion-grade
                  触发
                </span>
                。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">结构 setup（不是 live 入场）</span><span className="dn-lvl-v">多 TF ⚡ TD9 BUY 栈（15m / 1h / 4h / 8h / 1d 在 $64,307–$64,338 同步印；3d / 1M 各离印一根）+ RSI 谱系最深超卖（4h 19.7 / 8h 15.4 / 12h 14.3 / 1d 19.6 谱系新低）+ funding 累积 ~22.15h 脱顶在 24h 窗里（~92% 的窗、当前段 6.25h、四段离散）+ 4h 窗里小大单 bid（+364 BTC / 121 笔）—— 按每一根指标都是谱系最 exhausted 一根超卖印</span></div>
                <div><span className="dn-lvl-k">升级触发（本篇 NON-ACTIONABLE · 3 里 2 CLEARED）</span><span className="dn-lvl-v bull">(1) 8h OR 1d TD9 BUY 确认 —— CLEARED（两根今天都印、与 15m / 1h / 4h 同步）；(2) funding 累积 ≥ 4h 脱顶 —— CLEARED ~5.5×（~22.15h 累积）；(3) 1h close 在 leading-edge 重夺上 —— NOT CLEARED（1h close $64,338、leading-edge $68k 区头顶 ~$3.7k；框架参考重夺档在 D-EMA20 $72,879）。升级要三腿都到；未来一根 audited 备忘可以升级，如果 1h 重夺腿在 TD9 栈和 funding 状态仍完整时印</span></div>
                <div><span className="dn-lvl-k">结构参考阶梯档（不是 order 目标）</span><span className="dn-lvl-v">首根反弹目标 $66k–$66.5k（$66k −5.87M 簇 + 06-03 close 区）· 然后 $68k 区（$68k −4.77M strike，价格穿过后实质松）· 第二根反弹目标 W-SMA20 $72,679 / D-EMA20 $72,879 / D-SMA100 $73,166（~$0.5k 重夺带，对现货 +13%）· invalidation：1h close &lt; $64,000 加 fresh Δnet ≤ −3k 重堆敌对-2 在 06-04 BJ 13–15 窗内 OR 一根干净 5JUN −15.89M 结算 vol 事件</span></div>
                <div><span className="dn-lvl-k">size 上限（如果终于升级）</span><span className="dn-lvl-v">0.2R 合计（scout 上限）在累积触发上 · 多 TF TD9 BUY 同步印不叠 size（前两根 4h TD9 BUY 在 $71,226 和 $66,835 都失败；累积触发要 1h 重夺腿）</span></div>
                <div><span className="dn-lvl-k">放大器窗风险</span><span className="dn-lvl-v">5JUN26 08:00Z 结算（今天 1.3 DTE）· −15.89M 今天（从 −14.89M 更深）· 块<em>没</em>被压掉 strip、仍可能在 32h 内印一根压 leg 前结算；一根 fresh 重堆敌对-2 在 06-04 BJ 13–15 窗内 OR 一根 5JUN 结算 vol 事件会让 mean-revert 读 invalidation</span></div>
              </div>
              <div className="dn-gating">
                <b>状态：</b>NON-ACTIONABLE（仅框架监控、延续）。3 升级
                腿里 2 腿 CLEARED。最后一腿（1h 重夺）头顶 ~$3.7k ——
                是一根真的重夺腿、不是 snap-distance 重夺。<b>硬规则：</b>
                5JUN 放大器在它的 0DTE 结算窗里（今天 1.3 DTE）时，没
                1h 重夺腿确认就不入场；5JUN 块在这一根 pass 上更深而不
                是解开、明天 08:00Z 结算前仍可能印一根压 leg。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 周期节奏 WEAKENED 窗外但 step 自身在第四根连续印上以谱系单分钟最大一根 Δ 印出 · 06-03 BJ 13–15 窗 sub-threshold（Δ −1,098、max |Δ| 866）· 周期延续 step 印在 06-03 07:41Z（BJ 15:41、窗关后 41 分钟）Δnet −7,177</span>
              <div className="dn-trade-name">
                挤压周期 —— 节奏时间锚 WEAKENED（窗外 41 分钟）但周期延续 step 自身在谱系极值印（Δnet −7,177，全谱系单分钟最大一根 Δ）
              </div>
              <div className="dn-thesis">
                05-31 备忘说节奏证伪；06-02 备忘重武装；06-03 备忘宣布
                连续三根印 CONFIRMED（06-02 BJ 14:46 step 是第三根）；
                今天节奏松了但 step 仍在：06-03 BJ 13–15 窗印 sub-threshold
                （窗 Δ <span className="dn-tag">−1,098</span>、max |Δnet|
                <span className="dn-tag">866</span>）、但周期延续 step
                自身在窗关后 41 分钟印 06-03 07:41Z Δnet
                <span className="dn-tag bear">−7,177</span> —— 谱系单分
                钟最大一根 Δ，比 06-02 06:46Z 那根 −6,621 大 +8.4%。框
                架现在读：<em>周期在第四根连续日印上活</em>，但 BJ 13–15
                时间锚松了（最近一根印窗外 41 分钟）。
                <span className="dn-em">
                  按 audit DN-001 把 05-30 时间戳从 v1 的「22:01 BJ /
                  14:01Z」更正到源端实际的「14:01 BJ / 06:01Z」之后，前
                  三根延续印（05-30 14:01 BJ、06-01 14:16 BJ、06-02 14:46
                  BJ）都落在 BJ 13–15 窗内，只有 06-03 这一根 15:41 BJ
                  在窗外 41 分钟 —— 节奏时间锚只在最近一根上松、不是整
                  条链都松
                </span>
                。节奏不再是硬时间锚 —— 它在前三根上仍是强先验、在最近
                一根上是松了的先验。每根日窗监控是弱化了的预测；周期自
                身仍活，四印链：05-30 14:01 BJ −5,569 → 06-01 14:16 BJ
                −3,137 → 06-02 14:46 BJ −6,621 → 06-03 15:41 BJ −7,177。
                这是一条<em>最后两根比之前大</em>的四印节奏（5,569 →
                3,137 那一步先收缩、链再扩张），<em>不是</em>一条
                monotonically 增大的链（按 audit DN-002 把 v1 的
                「monotonically larger / growing」措辞全部改）。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">节奏 WEAKENED 窗外（06-03 BJ 13–15 窗 sub-threshold）但 step 自身在第四根连续印上印（06-03 07:41Z Δnet −7,177、窗关后 41 分钟）；次窗 BJ 22 今天没印（窗 Δ −355、max |Δ| 231）；时间锚在最近一根上松、但周期活</span></div>
                <div><span className="dn-lvl-k">主要延伸事件（06-03、窗外）</span><span className="dn-lvl-v">重堆敌对-2 + 长侧加 @ 2026-06-03 07:41Z（BJ 15:41 06-03）· 现货 $67,192 · Δlong +2,659、Δshort +9,837（59,792 − 49,955）、Δnet −7,177（谱系单分钟最大 Δ、比 06-02 06:46Z 那根 −6,621 大 +8.4%）</span></div>
                <div><span className="dn-lvl-k">06-03 BJ 13–15 窗读</span><span className="dn-lvl-v">窗 Δ −1,098、max |Δnet| 866 —— 节奏预测 sub-threshold；周期延续 step 印在窗关后 41 分钟（07:00Z）、谱系单分钟最大一根 Δ；时间锚松</span></div>
                <div><span className="dn-lvl-k">SM 谷（最空）窗内 24h</span><span className="dn-lvl-v">−46,686 BTC @ 2026-06-03 20:26Z（BJ 04:26 06-04）· 谱系最深 net-short；谷印在 06-03 07:41Z step 后 ~12h 45m（延伸-谷-lag 从 06-02 的 ~7h 长到 06-03 的 ~12.7h —— 谷在远离 step）</span></div>
                <div><span className="dn-lvl-k">step 后价格路径</span><span className="dn-lvl-v">主 step $67,192 → 24h 低 $64,109 @ BJ 07:59 06-04（步入价格之后 −$3,083 / −4.59% 跨 ~16h 18m）→ 快照 $64,353（+$244 / +0.38% 反射 bid 进 snap、低之后 6 分钟）</span></div>
                <div><span className="dn-lvl-k">前向 gating</span><span className="dn-lvl-v">盯 06-04 BJ 13–15 窗（UTC 05:00–07:00 06-04、本快照前 ~5h）作周期-3 step 4；时间锚现在松、一根 fresh Δnet ≤ −3k 在 BJ 13–15 窗周围 8–12h 带里任意位置确认周期活；一根 sub-threshold-everywhere-in-band 印进一步弱化节奏但不证伪（四印节奏最后两根比之前大 —— 不是 monotonic —— 但链延伸，所以一根安静 24h 才证伪；audit DN-002）</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>周期链在第四根连续印上以谱系极值延伸；
                时间锚窗外 41 分钟松。06-04 BJ 13–15 窗仍是下一根 gating
                事件、但周围 8–12h 带也要盯，给时间锚松的扩宽。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 周期锚下落三档（06-03 close $64,118 = 谱系最深 close）· γ 更深净空（−52.9M）· funding 累积 ~22.15h 脱顶（~92% 的 24h、≥ 4h 门 CLEARED ~5.5×）· 多 TF ⚡ TD9 BUY 五框架同步印 · 空头 scout NON-ACTIONABLE 但<em>两次</em>印对 —— codex 应处置 CLOSED-VINDICATED · mean-revert 长 scout 3 升级腿里 2 腿 CLEARED · 节奏 WEAKENED 窗外但 step 自身在谱系极值印 · 宏观 Tier-1 今天基本 FETCH-FAILED（利率 / TIPS / Fed 流动性 / NFCI / 5Y5Y BE 全部不可用）</span>
            </h2>

            <p>
              06-03 那张决策条件里：3JUN26 到期结算<em>干净 FIRED</em>
              （−4.30M 在 08:00Z 06-03 清掉、自身没 vol 事件 —— dump
              来自 06-03 07:41Z step、在结算前 19 分钟）；5JUN26 放大器
              <em>更深</em>而不是解开（−14.89M → −15.89M、+$1.0M 更深 ——
              压<em>没</em>把 γ 从 strip 上拿掉、对照 06-03 备忘的预测）；
              周期-3 step 3 节奏 WEAKENED 窗外但 step 自身在谱系极值印
              （Δnet −7,177 在 06-03 07:41Z、窗关后 41 分钟）；锚重夺重
              入门槛<em>没推进</em>（现货现在锚下 ~$8.8k）；mean-revert
              长 scout 升级触发 3 腿里 2 腿推进（8h / 1d TD9 BUY CLEARED
              + funding 累积 ≥ 4h CLEARED ~5.5×；1h 重夺腿头顶 ~$4k）；
              funding 脱顶监控 FIRED 在谱系最大一根放开（~22.15h 累积、
              ~92% 的 24h）；周期延续延伸条件 FIRED（fresh Δnet ≤ −3k
              把 SM 推过 −45k 在 06-03 20:26Z 谷 −46,686）；宏观 re-grow
              门信用侧动了（HY OAS 门松 1bp、现在离触发 7bp）而利率侧门
              今天 FETCH-FAILED；reclaim-long 利率筛今天 FETCH-FAILED
              从 06-03 延续为 TRUE。<em>六个结构性条件 FIRED（3JUN 结算
              干净、节奏 weakened-but-stepped、funding 脱顶在谱系极值、
              OI 缩、周期延续延伸、3 腿里 2 腿 mean-revert CLEARED），
              一个对框架预测结构上反过来（5JUN 放大器<em>更深</em>而不
              是解开），一个没推进（锚重夺），加上宏观盘大部分今天不可
              用。</em>今天条件围绕一根更深周期阶梯破位、更深净空 γ
              dealer 本子、$60k–$65k 新结构性墙对、funding 全脱顶、谱系
              最重一根多 TF TD9 BUY 同步印、和一根时间锚松的活节奏-step
              模式重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>4JUN26 今日到期结算（08:00Z、本快照前 ~7h 55m）</td><td>−6.82M 负块清；除 4JUN aggregate ≈ −46.1M 仍净负 —— 在 24h 内小放大缩减</td><td>盯 —— 一根干净结算无 vol 事件保持 gating 事件落在 5JUN −15.89M 块上（1.3 DTE）；08:00Z 印上一根 vol 事件会延伸 dump</td></tr>
                <tr><td>5JUN26 放大器窗（今天 1.3 DTE、08:00Z 5JUN）</td><td className="bear">最重负单 expiry 重量 −15.89M（06-03 是 −14.89M、+$1.0M 更深 —— 压<em>没</em>把 γ 从 strip 上拿掉 · 块在结算前 1.3 DTE、仍可能印一根自己的压 leg 前 08:00Z 5JUN）</td><td>盯 —— 这是下 32h 内主结构性参考窗；无 live 仓位、但 fresh Δnet ≤ −3k 重堆在 06-04 BJ 13–15 窗内或周围 8–12h 带里任意位置会 flag 延续到 5JUN 结算</td></tr>
                <tr><td>周期-3 step 4 节奏（06-04 BJ 13–15、本快照前 ~5h —— 时间锚 LOOSENING）</td><td className="bear">下一根 BJ 13–15 窗 = 2026-06-04 05:00–07:00 UTC（本快照前 ~5h）；fresh Δnet ≤ −3k 在窗周围 8–12h 带里任意位置（06-03 41 分钟窗外印之后拉宽的节奏读）确认周期在第五根连续印上活；sub-threshold-everywhere-in-band 印弱化但不证伪（四印节奏最后两根比之前大 —— 不是 monotonic —— 但链延伸，所以一根安静 24h 才证伪；audit DN-002）</td><td>作下 24h 最重要的 pre-snap 框架事件来盯；如果节奏 step 在带里任意位置 FIRE，mean-revert 长 scout 保持 NON-ACTIONABLE 再一根备忘（且空头 scout 的「CLOSED-VINDICATED」处置需要再看一次）；如果带 sub-threshold，mean-revert 长 scout 的结构 setup 推进</td></tr>
                <tr><td>锚重夺（长重入门槛、回补反弹路径）</td><td className="bull">1d close &gt; D-SMA100 $73,166 AND aggregate GEX 翻回 &gt; 0 AND 1h 回补形印 —— 三腿都要；头顶 ~$8.8k、都没推进</td><td>无动作 —— 回补反弹 scout 维持 DROPPED 不变</td></tr>
                <tr><td>mean-revert 长 scout 升级触发（3 里 2 CLEARED）</td><td className="bull">(1) 8h OR 1d TD9 BUY 确认 —— CLEARED（两根今天同步印）；(2) funding 累积 ≥ 4h 脱顶 —— CLEARED ~5.5×（~22.15h）；(3) 1h close 在 leading-edge 上（$68k 区）—— NOT CLEARED（1h close $64,338、头顶 ~$3.7k）；升级要三腿</td><td>盯 —— 未来一根 audited 备忘可以升级到 0.2R scout，如果 1h 重夺腿在 TD9 栈和 funding 状态完整时印；本篇不可交易 · 一根多 TF TD9 BUY 同步印没重夺腿不是 promotion-grade（前两根 4h TD9 BUY 在 $71,226 和 $66,835 都失败）</td></tr>
                <tr><td>funding 脱顶（杠杆门信号 —— FIRED 在谱系极值）</td><td className="bull">累积脱顶在 24h 窗里 ~22.15h 跨四段离散（较早 922 分钟 / 15.37h + 2 分钟 + 30 分钟带 + 当前 6.25h 段）；≥30 连续分钟监控在 4 段里印了 3 段 + ≥ 4h 累积门 CLEARED ~5.5×；谱系最大一根放开</td><td>盯 —— 保持或延伸当前 6.25h 段跨过 06-04 BJ 13–15 窗保持腿 CLEARED；一根 fresh 重新钉住封顶在那个窗里 re-arm 一根残余空头框架监控，即使累积仍 CLEARED</td></tr>
                <tr><td>周期延续（活在四印链 · 时间锚松）</td><td className="bear">fresh 重堆 SM Δ ≤ −3k 把 SM &lt; −47k AND 1h close &lt; $64,000 在 06-04 BJ 13–15 窗周围 8–12h 带里任意位置 —— 周期-3 step 4 延伸签名；如果 fire，阶梯档 $60k −19.85M（崩盘 put 区）是下一根价格目标，然后 $55k −5.46M</td><td>无 live 空头仓位；四印链最后两根比之前大 —— 不是 monotonic 但 06-03 那根是谱系极值（audit DN-002）—— 所以每根 fresh 印抬高下一根的 base-rate 先验；如果 fire，mean-revert 长 scout 的 setup 在至少一根 cycle 上 invalidation</td></tr>
                <tr><td>宏观尾 re-grow（利率侧门今天 FETCH-FAILED）</td><td className="bear">HY OAS &gt; 2.78%（离触发 7bp、06-03 是 6bp —— re-open 1bp）OR 10Y &gt; 4.53%（今天 FETCH-FAILED、从 06-03 的 4.47% 延续 / 离触发 6bp）</td><td>滚对冲到 12JUN / 26JUN 前向，只在宏观侧在一根 fresh 干净渲染上 FIRE 时；今天宏观 Tier-1 抓取失败 block fresh 利率侧读</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% close —— 今天 FETCH-FAILED，从 06-03 延续为 TRUE 在 4.47%；这根筛的 freshly verified-as-of 日期现在是 06-03</td><td>独立筛在 stale-from-06-03 last read 上 TRUE 延续；mean-revert 长 scout 的 setup 对这根筛 match、但 scout 自身 NON-ACTIONABLE</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                06-04 BJ 13–15 窗（或周围 8–12h 带、给时间锚松）是否
                印一根第五根连续重堆敌对-2 在节奏内（Δnet ≤ −3k 把 SM
                net 推过 −47k 同时 1h close &lt; $64k —— 周期-3 step 4
                延续往 $60k 崩盘 put 区和 5JUN 08:00Z 放大器结算）、
                还是带过 sub-threshold AND mean-revert 长 scout 的 1h
                重夺腿印（1h close 在 $68k 区上方加多 TF TD9 BUY 栈和
                累积 funding 放开完整）
              </span>
              。在那之前、本篇按写好的跑：runner 与 put-spread 尾仓维
              持平、回补反弹 scout 维持 DROPPED 不变（无锚重夺推进）、
              框架空头监控两次印对 —— codex audit 应该把它处置
              CLOSED-VINDICATED 这根 pass、mean-revert 长 scout 升级触
              发 3 腿里 2 腿 CLEARED（等 1h 重夺）、周期节奏框架在时
              间锚松和四印链谱系极值上延续、宏观 re-grow 门信用侧动了
              而利率侧门今天 FETCH-FAILED（从 06-03 延续，利率筛的
              freshly verified-as-of 日期现在是 06-03）。BTC 对 TradFi
              脱钩拉宽到 −15.02pt，BTC 自己再下一档；引擎 MTF 框架印
              多框架同步 ⚡ TD9 BUY 栈 —— 谱系最重一根；5JUN 放大器
              <em>更深</em>而不是解开。下 24h 的对读是
              <em>盯 06-04 BJ 13–15 带 —— 是下一根 gating 事件；盯
              1h close 对 $68k 作 mean-revert scout 的升级最后腿</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2 · 已过 codex 敌对式审计 · 在 v1 上 BLOCK-CRITICAL 裁定 · 7 条 findings（1 CRITICAL + 2 MAJOR + 4 MINOR）· 全部应用 · 记录：
              <code>audits/2026-06-04-desk-note.md</code>
            </span>
            本页按 v1 从 2026-06-04 00:05Z 原子快照写出、然后提交到
            STAGE B 做 codex 敌对但公正式审计（xhigh 力度、算术按
            <code>/opt/btc-monitor/live_db.json</code> +
            <code>/opt/btc-data/data/btcusdt_1m_*.parquet</code> 通过
            <code>/opt/btc-data/.venv/bin/python3</code> 重算；GEX、MTF、
            宏观、跨资产源端交叉核对）。
            <b>Codex 在 v1 上的裁定：</b><em>BLOCK-CRITICAL</em> ——
            05-30 这根继承的 step 时间戳晚了 8 小时，把那一根印
            inside-band-vs-outside-band 的 BJ 13–15 节奏主张直接反过来；
            两条 MAJOR（一条四印链被描述成 monotonically 增大但实际不是、
            一条 MTF 来源 / 时新性方向写反）和四条 MINOR（retail 百分比
            峰与 long-BTC 持仓量峰的时间戳被合并、空头 BTC 泄后超额读
            被写大、负墙簇求和差 ~$1.0M、06-02 节奏 step UTC 后缀 typo）
            一并标出。
            <b>Codex 在 v1 上 confirmed clean 的：</b>requireViewer
            gating（首句、路径对齐），metadata canonical 路径，JSX 完
            整性（一个 main / 一个 article、闭合 tag、<code>tsc
            --noEmit</code> = 0），forward-looking 范围（scout 延 /
            framework-only 措辞），载入数据边界（NTT / max-pain /
            strike-IV / BTC/NQ 比率保持 NOT LOADED），GEX 墙图 + flip +
            Deribit-idx 1,000 合约校验（$64,410），IV / 30D RV 算式
            （48.9% − 35.33% = +13.57pt；parquet 30D RV 35.33% 按
            <code>logret.std × √365 × 100</code>），live-tape pin 与 24h
            delta 在 line 45687（现货 $64,353.22、perp $64,321.0、premium
            −$103.97、funding +3.252% ann、OI 104,786 BTC、SM net
            −44,929），funding 封顶算式（1,441 行、112 在顶 = 7.77%、
            1,329 脱顶行 = ~22.15h 累积、当前段 375 分钟自 06-03 17:51Z），
            06-03 07:41Z 节奏 step（Δlong +2,659 / Δshort +9,837 / Δnet
            −7,177，谱系单分钟最大 Δ、比 06-02 −6,621 step 大 +8.4%），
            06-03 BJ 13–15 安静窗读（窗 Δ −1,098、max |Δ| 866），MA 矩阵
            和 W-SMA150 / W-SMA200 不可计算 + W-EMA150 / W-EMA200 种子
            披露在 127-周-bar 2024-2026 parquet 子集上，宏观 Tier-1
            FETCH-FAILED 延续（HY OAS 2.71%、MOVE 73.6、DXY 99.22、
            USD/JPY 160.04、USD/CNY 6.7617），跨资产 7d 算式（|r| 均
            0.251、BTC −13.85% vs NQ +1.17% = −15.02pt 脱钩）。
            <b>v2 应用全部 7 条 findings：</b>
            <em>DN-001（CRITICAL）：</em>05-30 继承的 SM step 时间戳从
            v1 的 22:01 BJ / 14:01Z 修正到 14:01 BJ / 06:01Z —— 把这一根
            印放<em>进</em> BJ 13–15 窗（源端在
            <code>/opt/btc-monitor/live_db.json</code> line 38842：net
            −25,189 → −30,758、Δnet −5,569.674、现货 $73,616.99 在
            2026-05-30 06:01Z；14:01Z 那一行 net 只变 −38.18、不是
            −5,569）；lead 段和挤压周期 trade card 里的节奏链重写 ——
            前三根延续印（05-30 14:01 BJ、06-01 14:16 BJ、06-02 14:46
            BJ）全部在 BJ 13–15 窗内；只有最后一根 06-03 15:41 BJ /
            07:41Z 在窗外 41 分钟。节奏时间锚因此比 v1 写的<em>更强</em>，
            松仅限于最后一根、不是整条链；
            <em>DN-002（MAJOR）：</em>四印序列（−5,569 → −3,137 → −6,621
            → −7,177）<em>不是</em> monotonically 增大 —— 5,569 → 3,137
            那一步先收缩、链再扩张。lead 段、挤压周期 dn-thesis、前向
            gating 行、决策条件表里全部四处「monotonically growing /
            monotonically larger」措辞重写成「四印节奏最后两根比之前
            大、06-03 是谱系极值」；+8.4% 主张（7,177 对 6,621）已经只
            在最后一对上比、维持；
            <em>DN-003（MAJOR）：</em>MTF 来源 —— v1 写的「~4 分钟
            fresher than snapshot anchor」方向反 —— 00:01Z 比 00:05Z
            快照锚<em>更早</em> 4 分钟。manifest 单元格现在读「~4 分钟
            stale 对快照锚」并加披露：审计时滚动
            <code>mtf_div_latest.html</code> 里的 00:01Z 扫描已经被覆盖、
            只能回溯到后一根 00:16Z 扫描（MTF 存档约定仍是 open lineage
            item）；
            <em>DN-004（MINOR）：</em>69.84% 市场多头百分比峰的时间戳与
            long-BTC 持仓量峰被合并。在 manifest、lead、Positioning §
            分成两根事实：retail 百分比 69.84% 峰在 BJ 14:42–14:47 06-03
            / UTC 06:42–06:47Z；long-BTC 持仓量峰 18,293 BTC 在 BJ
            22:21 06-03 / UTC 14:21Z 在一根 mkt_long_pct 读 68.64% 的
            行上；
            <em>DN-005（MINOR）：</em>泄后空头 BTC 比对重写成两根事实：
            24h short_btc 盘中峰 60,729 BTC = 比前 56,036 谱系峰高
            +4,693；00:05Z 快照 57,684 BTC = 泄 −3.0k 后比前 56,036 峰
            高 +1,648（v1 写的「快照上高 4.7k」写大了）；
            <em>DN-006（MINOR）：</em>负墙簇汇总从 −83.7M 校到 −84.7M
            对齐审计列墙合（−4.48 − 5.46 − 7.92 − 5.44 − 11.63 − 19.25
            − 5.87 − 4.77 − 19.85 = −84.67M）；
            <em>DN-007（MINOR）：</em>trade-card 谱系备注 UTC 后缀 typo
            从「06-02 14:46Z」校到「06-02 06:46Z / 14:46 BJ」（BJ 时间
            是 14:46；UTC 时间是 06:46Z，与本页其它处和源端 tape 对齐）。
            <b>Open issues（audit-tracked、不在本篇）：</b>审计时滚动
            artifact 里 00:01Z MTF 扫描不可回溯（只有 00:16Z 扫描留存；
            本页 15m $64,336、1h $64,338、4h $64,336、8h $64,307、1d
            $64,307 值来自引用的 00:01Z 扫描，而审计时可回溯的 00:16Z
            扫描读 $64,303 / $64,266 / $64,289 / $64,266 / $64,259）；
            v1 报的次窗 BJ 22 安静窗 delta −355 BTC 在审计简单 22:00–
            23:00 BJ 窗口下没复现（审计算 ~+113 BTC net、max |Δ| ~231）
            —— 作者方法论澄清需要在这一根数字被重用之前；两根都逐字
            追踪在 <code>audits/2026-06-04-desk-note.md</code> 里。
            <b>Build 注（INFO）：</b>本服务器跑 Node 18.19.1；Next 16.x
            在 <code>node_modules/next/dist/bin/next:24-28</code> 处对
            Node &lt; 20.9.0 硬退出，所以完整
            <code>next build</code> 在本机环境阻塞（谱系自 05-21 延续）。
            <code>npx --no-install tsc --noEmit</code> 是 build proxy；
            STAGE C 在 v2 修正后再跑了一次。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是 Hysteresis Research 主理人之间内部讨论用的桌面
            artifact，<em>不是投资建议、不是要约、不是邀约</em>，也
            不针对任何收信人的个人情况定制。数字反映单一原子快照
            （2026-06-04 00:05Z），section 级 provenance 在上方 manifest
            带里披露；宏观 Tier-1 面板渲染时间是 2026-06-03 22:19Z
            （快照前约 1.78h），大部分利率侧行在这版渲染上明确<em>
            fetch-failed</em>。水位、size、条件是桌面流程的演示、不是
            长期推荐。过往的相关性、γ、仓位形状不约束未来盘。衍生品
            携带 total loss 风险、带杠杆时损失可能超过保证金存入额。
            <em>请自行研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                周期阶梯破位再下一层、第三层确认。dealer 本子更深净空 γ。
                杠杆门完全放开（~22.15h 累积脱顶）。多 TF TD9 BUY 栈五框
                架同步印。节奏 step 自身在窗外印谱系单分钟最大 Δ。盯 06-04
                BJ 13–15 带和 1h close 对 $68k。
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
            v2 · 2026-06-04 00:05Z 快照 · 已过 codex 敌对式审计 ·
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
