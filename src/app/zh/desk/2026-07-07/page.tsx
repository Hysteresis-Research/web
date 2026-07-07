import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-07 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-07',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-07' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260707() {
  await requireViewer('/zh/desk/2026-07-07');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-07 · v2</span>
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
              <span className="dn-big">$64,063.38</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.55%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-07 00:05Z ·{' '}
              <span className="dn-em">
                这次有<b>两个结构性头一回</b>、且它们指向同一方向。第一、live 衍生品盘面
                <b>回来了</b>——死了 431.9h（~18 天）之后、OKX 监控在 2026-07-05 06:38Z
                重新开始写行（07-05 备忘冻结后约 6.5h）、所以这是 ~18 天来第一次读到 live
                的 funding / OI / flow / SM 仓位。第二、200W 地板在<b>周收口径重夺</b>了——
                07-06 周线 bar 结算 $64,023.60、是 06-29 破位确认以来第一根重新收在地板
                上方的周收、所以 07-05 备忘标为&ldquo;约 1 天外&rdquo;的那次恢复测试
                <b>印出来了</b>。地板本身<b>台阶抬到</b> $62,864（前 $62,643）、因为已结算的
                07-06 周进了 200 周窗口、现货 $64,063.38 守在它上方 +1.91%、脚下有<b>三根 MA</b>
                （D-SMA20 $61,943 / D-EMA20 $62,684 / 地板本身）。但第一次 live 仓位读是一个
                <b>短空回补 / 去杠杆</b>的形、不是广泛的新需求：价格 24h +0.55%、而 OI
                <b>缩了</b> −2,544 BTC（对上一读的 OI −2.42%）、taker-flow 与期货 CVD 净卖
                （24h −2,368）、funding 钉在它的 +0.01 cap 附近（+10.95% ann、56.7% cap 占用、
                <b>零负行</b>——从冻结点的 −7.24% 翻过来）、retail 缓和到 57.01% 多（−1.76pt）、
                SM 本子恢复净多但<b>近乎持平</b>（+2,348.85、Δnet −9.67 / 削 0.41%、两侧都长——
                一次双向 gross-up）。dealer 本子<b>加深</b>到 +157.8M 净多 γ（前 +110.2M——这
                一轮最深）、近端 7JUL26 放大器<b>翻正</b>到 +21.20M（前 −5.12M——下行口袋
                <b>没了</b>、无一根负到期）、$60k 看跌墙缓和到 −12.27M；现货坐在 flip $61,697
                上方 +3.84%（前是 $61,405 上方 +2.68%）。MTF 引擎<b>翻回</b>6/9 周期动量 /
                趋势延续 regime（JT&ge;0、从 07-05 的周期反转）、一根 4h 水上金叉刚印——但它
                <b>仍</b>带<b>两根</b>超买 ⚡TD9 SELL（1h 加 12h）就在高位、带 15m / 30m / 4h
                顶背离、一个进重夺的持续做顶签名、被一根 1M ⚡TD9 BUY 与一簇底背离
                （8h / 12h / 1d）抵消。跨资产仍<b>特异</b>（mean |r| 0.201）、BTC 7d 回报
                +7.10% <b>领先</b> NQ −0.35% 达 +7.45pt、领先 SP500 +1.41% 达 +5.69pt、BTC
                现在是复合里第 3。宏观在 z-面板上守 risk-off（10Y 4.49%、TIPS 极端、DXY 100.85
                极端、MOVE 65.8 本次回来）、HY OAS re-grow 信用闸<b>不点</b>（2.74% &lt; 2.78%、
                距 4bp）。交易台把地板的周收重夺与恢复的盘面读成谱系等了很久的那两次转向——
                但第一次 live 读说的是短空回补 / 去杠杆、不是需求、引擎仍在高位闪两根超买 TD9
                SELL、且一次确认的结构性恢复已印出它<b>第一根</b>周收、而它背后的需求在这条刚
                回来的盘面上仍未确认。
              </span>
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">live 盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · LIVE · 写新鲜行穿过 00:05Z 锚（恢复 2026-07-05 06:38Z）</td>
                  <td className="dn-flag">
                    <b>恢复</b> · 断线 431.9h（末冻结行 2026-06-17 06:43Z）之后、OKX 监控在{' '}
                    <b>2026-07-05 06:38Z</b> 恢复写行——07-05 00:05Z 备忘冻结后约 6.5h、所以
                    这是 <b>~18 天来第一次 live 仓位读</b>。funding / OI / CVD / basis /
                    retail / taker-flow / SM 本次都是<b>当前值</b>、按止于 00:05Z 锚的 live 24h
                    窗读。SM 子 feed（long_btc / short_btc / net_btc）也<b>又 live 了</b>、
                    恢复净多（+2,348.85）、与 06-19 → 07-05 备忘带的冻结 −37,293.3 三元完全
                    不同的基——挤压周期框架<b>下架</b>。第一次 live 读是一个短空回补 / 去杠杆
                    的形（见 meta tiles + §I）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-07 00:01Z scan</td>
                  <td className="dn-flag">
                    最新（较锚早约 4 分钟）· 滚动 latest 文件、逐字存档于
                    /opt/desk-note/snapshots/2026-07-07-0005/ · 含未收盘 K 线 · 扫描现货
                    $64,024、24h +0.71%、24h H/L $64,692 / $61,297、qVol $15.27B
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-07 00:01 UTC 面板（874 合约）</td>
                  <td className="dn-flag">
                    最新（较锚早约 4 分钟）· Deribit idx $64,297（比 parquet 现货 $64,051.30
                    高 $246）· 874 合约 · net GEX <b>+157.8M</b>（净多 γ、从 07-05 的 +110.2M
                    <b>加深</b>——这一轮最深）· flip $61,697（现货 +3.84% 在<b>上方</b>、从 07-05
                    的 +2.68%）· 前端是 7JUL26 0.3 DTE <b>+21.20M</b>（约今日 08:00Z 结算）——
                    那根在 07-05 读 <b>−5.12M</b> 的近端下行放大器已<b>翻正</b>、本次<b>无一根
                    负到期</b>——最重的正天花板是 <b>$65k +27.81M</b>、看跌墙缓和到 <b>$60k
                    −12.27M</b>（前 −16.69M）· 现货 $64,063.38 坐在 $64k +23.70M 与 $65k
                    +27.81M 天花板之间 · IV 中位 42.2% · P/C 0.57（Call OI 234,143 / Put OI
                    133,482）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-07 00:01Z
                  </td>
                  <td className="dn-flag">最新 · 7d 1h bar · 22 资产 · 167 rows · regime 特异（mean |r| 0.201、从 07-05 的 0.193 <b>抬了一点</b>但仍远在 0.25 特异阈下——且 BTC 7d 回报 +7.10% <b>领先</b> NQ −0.35% 达 +7.45pt、领先 SP500 +1.41% 达 +5.69pt；BTC 现在是复合里第 3）</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-06 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.82h（周末——较 07-05 几乎没变）· 10Y <b>4.49%</b>（+1.0bp、
                    距 4.53% 闸 4bp）、TIPS <b>2.26%</b>（+1.0bp、极端 RISK-OFF）、HY OAS{' '}
                    <b>2.74%</b>（−1.0bp——仍在 2.78% re-grow 闸<b>下</b>、闸仍不点、距 4bp）·
                    MOVE 债波 <b>65.8</b>（本次回来、07-05 不可用；z−0.87、松）· FX 腿：<b>DXY
                    100.85</b>（−0.01 日、仍极端）与 <b>USD/JPY 161.41</b>（−0.04 日）· Fed
                    净流动性 $5.843T（源面板 delta +0.053T、源标紧 / episodic）· NFCI 中性
                    （陈旧 10d）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 最末 bar 2026-07-07 00:05Z（close $64,051.30）</td>
                  <td className="dn-flag">
                    新鲜 K 线（交易所 OHLC）· 偏移按 parquet 最末 bar close 重算、对 live 现货
                    $64,063.38 互核 · 显示的周线阶梯用 2023→ 子集（185 根周 bar）、所以无
                    W-SMA200 行（W-EMA200 $67,224 从可用历史 seed）；200W 地板从全历史 glob
                    直接重算——<b>357 根收盘周 W-MON bar</b>（2019→今、含已结算的 07-06 周、
                    不含未收盘的 07-13 周）——= <b>$62,864</b>、较 07-05 备忘 <b>台阶抬自
                    $62,643</b>（已结算的 07-06 周收 $64,023.60——在旧地板上方——进了 200 周
                    窗口）。<b>三根 MA 压在现货脚下——D-SMA20 $61,943（+3.42%）、D-EMA20
                    $62,684（+2.20%）与 200W 地板 $62,864（+1.91%）——地板是现货脚下的支撑</b> ·
                    weekly_200sma.json 本次缺、所以比值分位 / last-event 留作未溯源、不杜撰
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
              <span className="dn-v bull">+10.95%（LIVE · 钉在 cap 附近）</span>
              <span className="dn-src">live_db 原始 funding ~+0.01 × 1095 = +10.95% ann（不 ×100）· 在 00:05Z 锚 LIVE、钉在 +0.01 cap 附近——56.7% cap 占用（1,441 行里 817 行在 cap）、24h+1m 含端采样窗上<b>零负行</b>（均值 +9.81% ann、min +5.38%、max +10.95%）。这是从 06-19 → 07-05 备忘带的 −7.24% 冻结行的一次全<b>翻</b>：恢复后的本子一边倒多、多在 cap 付空——一次进重夺的杠杆多倾斜</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 对 07-05</span>
              <span className="dn-v bull">−7.24% → +10.95%（盘面恢复）</span>
              <span className="dn-src">07-05 备忘带的是冻结的 −7.24% 行；盘面在 07-05 06:38Z 恢复、funding 现 live、钉在 +0.01 cap 附近（+10.95% ann）、24h 零负行 · 杠杆门从空付多（冻结点）翻到多付空在 cap——恢复后的盘面上一本一边倒的多本子</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−2,544 BTC（−2.42%）· LIVE 窗</span>
              <span className="dn-src">live_db oi_btc 102,683.66 在 00:05Z 锚 对约 24h 前、跨一根 live 24h+1m 含端采样窗 · OI <b>缩了</b> −2,544 BTC（对上一读的 OI −2.42%）进一记 +0.55% 价格动作——升价上 OI 在泄、是去杠杆 / 短空回补指纹、不是新的多头建仓</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bear">57.01 / 42.99 · LIVE（−1.76pt）</span>
              <span className="dn-src">live_db `mkt_long_pct` 在锚 57.01%、较约 24h 前的 58.77% 降 −1.76pt · retail 进重夺<b>削</b>多（价升而多%落）——与去杠杆读一致、不是 retail 追反弹</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bull">+2,348.85 多 · FEED LIVE</span>
              <span className="dn-src">long 15,173.79 − short 12,824.93 = +2,348.85 净多 · SM feed <b>恢复</b>（06-12 起冻结的 −37,293.3）、本次读净多；net 24h 近乎持平（前 +2,358.52、Δnet −9.67）而两侧都长（多腿 +~771、空腿 +~781、取整）——一次双向 gross-up、不是方向性加仓 · SM 整个恢复窗里都净多（区间 +1,153 / +3,682）</span>
            </div>
            <div>
              <span className="dn-k">SM Δ / cut fraction</span>
              <span className="dn-v">−9.67 net · 0.41%（近乎持平）</span>
              <span className="dn-src">|Δnet| / prior_net = 9.67 / 2,358.52 = 0.41%——一本 24h 近乎持平的 SM 本子 · 挤压周期 / 重堆框架现随 feed live <b>下架</b>、但第一次读没有 Δshort&gt;0 + Δlong&lt;0 同分钟 hostile-2 签名——两侧一起长</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">42.2% / 31.86%</span>
              <span className="dn-src">GEX 874 合约 IV 中位（00:01Z、最新）对 parquet 30D 收对收 RV 31.86%——链层丰度较已实现 ~+10.34pt（07-05 是 ~+7.32pt——RV 续跌、丰度走阔）；RV 走弱（07-05 是 34.58%；替代 29-return 窗读 32.39%）· IV 是 874 合约链中位、<b>不是</b>可交易价差</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v bull">+3.84%（在上方 · 延伸）</span>
              <span className="dn-src">flip $61,697（前 $61,405 · +$292）· 对 live 现货 $64,063.38（64,063.38 / 61,697 − 1 = +3.835%）/ GEX 文件 Deribit idx $64,297（64,297 / 61,697 − 1 = +4.214%、文件读 +4.2%）——两参考都在 flip 上方、从 07-05 的 +2.68% <b>延伸</b> · net GEX +157.8M（净多 γ、从 +110.2M <b>加深</b>——这一轮最深）· 近端 7JUL26 下行放大器<b>翻正</b>（+21.20M、前 −5.12M）——无一根负到期</span>
            </div>
          </div>
          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                两个结构性头一回、且指向同一方向。第一、live 衍生品盘面<b>回来了</b>——死了
                431.9h 之后、OKX 监控在 2026-07-05 06:38Z 恢复写行、所以这是 ~18 天来第一次读
                到 live 的 funding / OI / flow / SM。第二、200W 地板在<b>周收口径重夺</b>了——
                07-06 周线 bar 结算 $64,023.60、是 06-29 破位确认以来第一根重新收在地板上方的
                周收、所以 07-05 备忘标为约 1 天外的那次恢复测试已印出来。地板台阶抬到 $62,864、
                现货守在它上方 +1.91%、脚下有三根 MA。但第一次 live 仓位读是一个<b>短空回补 /
                去杠杆</b>的形、不是广泛新需求：价格 24h +0.55%、而 OI <b>缩了</b> −2.42%、
                taker-flow / 期货 CVD 净卖、funding 钉在它的 +0.01 cap 附近（+10.95% ann、
                零负行）、retail 缓和 −1.76pt、SM 本子恢复净多但近乎持平（双向 gross-up）。
                dealer 本子加深到 +157.8M 净多 γ——这一轮最深——近端 7JUL26 放大器<b>翻正</b>
                （+21.20M）、无一根负到期；现货推到 flip 上方 +3.84%。MTF 引擎<b>翻回</b>6/9
                周期动量 / 趋势延续 regime、一根 4h 金叉刚印、但<b>仍</b>带<b>两根</b>⚡TD9
                SELL（1h 加 12h）就在高位、带 15m / 30m / 4h 顶背离——一个进重夺的持续做顶签名
              </span>
              。现货报{' '}
              <span className="dn-tag bull">$64,063.38、24h +0.55%</span> 在 00:05Z live 盘面
              （parquet 最末 bar 读 $64,051.30；MTF 扫描按它自己窗读 +0.71%）、从 07-05 备忘
              现货 $63,048.50 抬上来——谱系把反弹从一根日收重夺带到一根<b>周收</b>重夺地板。
              200W 破位{' '}
              <span className="dn-tag bear">在 06-29 周收 $60,224.70 确认</span>、06-15 重夺论
              被证伪、而本次{' '}
              <span className="dn-tag bull">07-06 周收 $64,023.60 是那次破位以来第一根重回地板
              上方的周收</span>——结构性恢复已印出它第一根结算。地板{' '}
              <span className="dn-tag">台阶抬到 $62,864</span>（前 $62,643）、因为已结算的 07-06
              周进了 200 周窗口、现货守在{' '}
              <span className="dn-tag bull">它上方 +1.91%、脚下有三根 MA——D-SMA20 $61,943
              （+3.42%）、D-EMA20 $62,684（+2.20%）与地板 $62,864（+1.91%）</span>。dealer
              本子{' '}
              <span className="dn-tag bull">加深到 +157.8M 净多 γ</span>（这一轮最深）、{' '}
              <span className="dn-tag bull">近端 7JUL26 放大器翻正到 +21.20M</span>（前 −5.12M
              ——无一根负到期）、$60k 看跌墙缓和到 −12.27M；现货坐在 $64k +23.70M 与 $65k
              +27.81M 正天花板之间、推到 flip $61,697 上方 +3.84%。{' '}
              <span className="dn-em">
                但回来的这条盘面不确认需求——它把这段动作指认成去杠杆：OI 泄 −2,544 BTC
                （−2.42%）进一记 +0.55% 价格动作、taker-net 与期货 CVD 24h 净卖（−2,368）、
                funding 钉在它的多 cap 附近、零负行、retail 削多 −1.76pt、SM 本子在一次双向
                gross-up 上守近乎持平净多。升价上 OI 在泄、配净卖 flow、perp 对现货折价、
                retail 削多、funding 一边倒多——这正是教科书式的短空回补 / 去杠杆签名、不是
                新需求在消化破位。
              </span>{' '}
              MTF 标题守在{' '}
              <span className="dn-tag">4 多 / 3 空 / 3 中</span>、regime 分类器{' '}
              <span className="dn-tag bull">翻回 6/9 周期动量 / 趋势延续（JT&ge;0）</span>
              从周期反转——一根 4h 水上金叉刚印——但引擎仍带{' '}
              <span className="dn-tag bear">两根 ⚡TD9 SELL（1h 加 12h）在高位</span>、带 15m /
              30m / 4h 顶背离、一个持续的超买签名。宏观在 z-面板上守 risk-off：10Y 4.49%
              （距闸 4bp）、HY OAS 2.74%（仍在 2.78% re-grow 闸<b>下</b>——不点、距 4bp）、
              DXY 100.85 极端、MOVE 65.8 本次回来。{' '}
              <span className="dn-em">
                谱系等了很久的那两次转向本次都印了——盘面 live 了、地板在周收重夺了——但
                第一次 live 读说的是短空回补 / 去杠杆而非需求、引擎仍在高位闪两根超买 TD9
                SELL。本子保持 flat：恢复有了它第一根周收、gamma/价格图是这一轮最建设性的、
                但重夺背后的需求在这条刚回来的盘面上仍未确认、交易台不追。
              </span>{' '}
              scout 的价格前置条件保持<b>真</b>并<b>加强</b>（现货 flip 上方 +3.84%、三根 MA
              在脚下、在重夺后的地板上方）、它的数据 block 终于<b>抬起</b>——但第一次 live 读
              与两根 TD9 SELL 让 scout 保持按兵。无空、无 scout、无新对冲。
            </p>
            <p>
              BTC 报 <span className="dn-tag">$64,063.38</span> 在 live 盘面（00:05Z）、{' '}
              <span className="dn-tag bull">+0.55%</span> 在 24h（对约 24h 前的 $63,710.01 读；
              parquet 最末 bar 读 $64,051.30、MTF 扫描按它自己 00:01Z 窗读 +0.71%——这道差是
              参考窗、不是数据冲突）、在一条{' '}
              <span className="dn-tag">$64,502.01 / $61,401.19</span> 的 24h 区间里（按 live
              盘面；MTF 扫描标 $64,692 / $61,297）。Deribit index 00:01Z 读 $64,297、MTF 扫描
              现货是 $64,024——所以最新现货在四个独立新鲜源上互证得很好（live 盘面 $64,063.38、
              parquet K 线 $64,051.30、GEX Deribit index $64,297、MTF 扫描 $64,024）、而 ~18 天
              来第一次、平时供它的 live_db 盘面也是其中之一。{' '}
              <span className="dn-signal">结构读法从一根确认破位 + 反弹<b>在日收重夺地板</b>
              （07-05 备忘）、走到同一根确认破位现<b>在周收重夺</b>——07-06 周线 bar 收
              $64,023.60、是 06-29 以来第一根重回地板上方的周收、而未收盘 07-07 bar
              $64,051.30 守在它上方</span>：06-29 周收 $60,224.70 确认破位、日收从 06-30 低点
              走回上来（六根连阳 07-01 → 07-06、无一例外）、07-06 周收结算在地板上方、印出
              恢复的第一根周结算。按框架破位在周收口径确认、重夺论被证伪——本次没有任何东西
              撤销这段历史、但它确实加上了第一根重回地板上方的周收、恢复路径要的那次升级。{' '}
              <span className="dn-em">
                谱系唯一那根结构正在周收口径破了、重夺论已死；本次现货在周收口径头一回重新收
                回地板上方、脚下守三根 MA、本子是这一轮最深多 γ、无一根负到期——谱系带过最
                建设性的 gamma/价格/结构图。但刚回来的盘面把它背后的动作指认成短空回补 /
                去杠杆、不是需求、引擎在高位闪两根超买 TD9 SELL——所以恢复已印出它第一根周收、
                而它背后的需求仍未确认。
              </span>
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · LIVE 盘面恢复（431.9h 之后于 2026-07-05 06:38Z 恢复）——~18 天来第一次 live 仓位读 · funding 钉在多 cap 附近（+10.95% ann、零负行）、OI <b>缩了</b> −2.42% 进一记 +0.55% 价格动作、taker/CVD 净卖、retail 缓和 −1.76pt、SM 恢复净多但近乎持平、双向 gross-up · 第一次 live 读是短空回补 / 去杠杆、<b>不是</b>广泛新需求——地板重夺在结构上建设性、但在这条刚回来的盘面上仓位未确认</span>
            </h2>

            <p>
              <span className="dn-signal">
                本篇最重要的那个源——live 衍生品盘面——<b>回来了</b>、~18 天来头一回
              </span>
              。OKX 监控在{' '}
              <span className="dn-tag bull">2026-07-05 06:38Z</span> 恢复往 live_db.json 追加
              行、07-05 00:05Z 备忘冻结（陈旧 425.4h）后约 6.5h、终结一段{' '}
              <span className="dn-tag">431.9h 的断线</span>（末冻结行 2026-06-17 06:43Z）。live
              盘面带的每一维——funding、持仓、现货 / 期货 CVD、perp basis、retail 多%、
              taker-net、大单 flow、攻击方偏斜、以及聪明钱仓位三元——本次都是{' '}
              <span className="dn-em">当前值、按止于 00:05Z 锚的 live 24h 窗读</span>。交易台
              自六月中就瞎的那个读终于可用了——而它说的第一件事是：那根重夺地板的反弹是一个
              短空回补 / 去杠杆动作、不是新需求。{' '}
              <span className="dn-em">
                仓位维度不再未知：它可知、而且它读去杠杆。
              </span>
            </p>

            <p>
              live 24h 窗在每一腿上都指认去杠杆。funding 是{' '}
              <span className="dn-tag bull">+10.95% ann</span>（原始 ~+0.01 × 1095）、钉在它的
              +0.01 cap 附近——56.7% cap 占用（1,441 行里 817 行在 cap）、窗上均值{' '}
              <span className="dn-tag">+9.81% ann</span>、区间{' '}
              <span className="dn-tag">+5.38% / +10.95%</span>、且{' '}
              <span className="dn-tag bull">零负行</span>——从谱系带的 −7.24% 冻结行的一次全翻、
              现在一本一边倒的多本子、多在 cap 付空。持仓是{' '}
              <span className="dn-tag bear">102,683.66 BTC、live 24h 窗上 −2,544（−2.42%）</span>
              ——OI 缩进一记 +0.55% 价格动作。retail{' '}
              <span className="dn-tag bear">mkt_long_pct 57.01%</span>、较约 24h 前的 58.77% 降
              −1.76pt——价升而 retail 削多。窗内 flow 在攻击方净卖：24h 内价格{' '}
              <span className="dn-tag bull">+0.55%</span>、OI{' '}
              <span className="dn-tag bear">−2,544</span>、spot-CVD{' '}
              <span className="dn-tag bear">−702</span>、futures-CVD{' '}
              <span className="dn-tag bear">−2,368</span>、taker-net{' '}
              <span className="dn-tag bear">−2,368</span>、大单 net{' '}
              <span className="dn-tag bear">−49.8</span>（633 笔大单）；4h 窗转双向（价
              +0.73%、OI −1,337、spot-CVD +687、taker-net −301、big-net +134）、1h 软
              （价 −0.32%、OI −80、taker-net −379）。perp basis{' '}
              <span className="dn-tag bear">对现货 −$79 折价</span>（1h 均 −$45、4h 均 −$47、
              24h 均 −$58、24h 区间 −$444 / +$45.7）；攻击方偏斜现{' '}
              <span className="dn-tag">+10.1</span>（1h 均 +0.87、区间 −35.3 / +34.9）。{' '}
              <span className="dn-em">
                合读：升价上 OI 在<b>泄</b>、net 卖的 taker / CVD flow、perp 对现货折价、
                retail 削多、funding 一边倒多——是教科书式的短空回补 / 去杠杆签名——空头在补、
                总杠杆在下、不是新需求在抬价。地板重夺在价格上是真的、但盘面说它是被回补、
                不是被累积在扛。
              </span>
            </p>

            <p>
              聪明钱 feed{' '}
              <span className="dn-tag bull">又 live 了</span>、在一个净多基上恢复：{' '}
              <span className="dn-tag">long 15,173.79 / short 12,824.93 / net +2,348.85</span>
              ——与 06-19 → 07-05 备忘带的冻结{' '}
              <span className="dn-tag">−37,293.3</span> 三元完全不同的基（它自 2026-06-12
              01:36Z 起逐字恒定）。live 24h 窗上 SM net 守<b>近乎持平</b>——约 24h 前是
              +2,358.52、所以{' '}
              <span className="dn-tag">Δnet −9.67、削 0.41%</span>——而两侧都<b>长</b>了（多腿
              +~771、空腿 +~781、取整）：一次{' '}
              <span className="dn-tag">双向 gross-up</span>、不是方向性加仓。SM 整个恢复期都
              净多（区间 +1,153 / +3,682）。{' '}
              <span className="dn-em">
                挤压周期 / 重堆框架现随 feed live <b>下架</b>——但第一次读没有 hostile-2 签名
                （无 Δshort&gt;0 + Δlong&lt;0 同分钟步；两侧一起长）、本子净多且近乎持平。SM
                维度是建设性-中性：净多、无新的空头重堆、头 24h 无方向性信念。它印证去杠杆读、
                而非需求读——总杠杆双向重建、而方向性 net 几乎没动。
              </span>
            </p>
            <h2 className="dn-sec">
              结构 <span className="dn-roman">II · 价格/MTF 最新 · 多 TF 共振混合 4 多 / 3 空 / 3 中（标题不变）· 净读高 TF 偏空 · 短周期反弹 · regime <b>翻回</b> 6/9 周期动量 / 趋势延续（JT&ge;0、从 07-05 的周期反转）· 4h 水上金叉刚印（DIF +607.4、强多延续）· 但引擎<b>仍</b>带<b>两根</b>⚡TD9 SELL（1h 加 12h）就在高位、带 15m / 30m / 4h 顶背离 · 1M TD9 buy + 一簇高 TF 底背离（8h/12h/1d）· 三根 MA 压在现货脚下（D-SMA20 / D-EMA20 / 200W 地板）、现货在<b>周收口径</b>重夺了 $62,864 地板——06-29 破位以来第一根周收在上方</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 图最新、标题不变在 4 多 / 3 空 / 3 中、regime 分类器<b>翻回</b>周期动量 /
                趋势延续——一根 4h 水上金叉刚印——但引擎<b>仍</b>印出两根 ⚡TD9 SELL（1h 加
                12h）就在高位、带 15m / 30m / 4h 顶背离、一个进重夺的持续超买反转签名
              </span>
              ——与 dealer 图、现加恢复后的盘面一起、是交易台今天能信的一维、本次它读成一个
              带高位超买张力的趋势延续 regime、即便现货守在重夺后的地板上方。00:01Z 扫描标{' '}
              <span className="dn-tag">4 多 / 3 空 / 3 中、跨 10 框架</span>、净读{' '}
              <em>高时间框偏空 · 短周期反弹、⚠ 高 TF 底背离簇（8h / 12h / 1d）</em>。regime
              行读{' '}
              <span className="dn-tag bull">6/9 周期动量 / 趋势延续 regime（JT&ge;0）</span>
              （07-05 是 5/9 周期反转）、所以分类器翻回趋势延续——引擎现在靠向这次动作而非
              对抗它。建设性印是{' '}
              <span className="dn-tag">4h 金叉刚印（水上、DIF +607.4、强多延续）</span> 与中段
              30m / 1h / 8h / 12h / 1d 守水下金叉、加一根{' '}
              <span className="dn-tag">1M ⚡TD9 BUY</span> 与一簇高 TF 底背离在{' '}
              <span className="dn-tag">8h / 12h / 1d</span>。本次那根做顶签名是超买印：{' '}
              <span className="dn-tag bear">两根 ⚡TD9 SELL 持续在 1h 加 12h（超买反转提示、
              就在高位）</span>、带{' '}
              <span className="dn-tag bear">15m / 30m / 4h 顶（看空反转）背离</span>
              {' '}——动量在高位拉伸、而趋势框架守着。云：15m / 30m / 1h / 4h / 8h / 1M 云上、
              12h → 1w 云下；{' '}
              <span className="dn-tag bear">1w 带一根水下死叉（2 bar、DIF −5,878.7）</span>。{' '}
              <span className="dn-em">
                直读：regime 翻回趋势延续、带一根 4h 金叉与中段一叠水下金叉、所以反弹在引擎上
                有动量——但两根 ⚡TD9 SELL 与三根快 / 中框架顶背离标它在高位超买、而高框架
                （12h → 1w）仍云下、带一根 1w 死叉。200W 地板现已在周收重夺、但引擎闪两根超买
                反转印、有动量可尊重、却没有一个干净、不停顿的入场去追这次重夺做多——建设性印
                （4h 金叉、1M TD9 buy、底背离簇）被两根高位超买 TD9 SELL 抵消。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>close</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,020</td><td className="num">55.0</td><td className="bear">死叉（水上）6b</td><td className="bull">云上 ↓62.9k 33b</td><td>Buy 7</td><td>BEAR hid · BEAR reg（顶）· BULL hid · BULL reg（底）</td></tr>
                <tr><td>30m</td><td className="num">64,022</td><td className="num">59.6</td><td className="bull">金叉（水下）17b</td><td className="bull">云上 ↓63.2k 17b</td><td>Buy 3</td><td>BEAR reg（顶）</td></tr>
                <tr><td>1h</td><td className="num">64,022</td><td className="num">60.7</td><td className="bull">金叉（水下）8b</td><td className="bull">云上 ↓63.2k 9b</td><td className="bear">⚡TD9 SELL</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>4h</td><td className="num">64,022</td><td className="num neut">65.3</td><td className="bull">金叉（水上）1b</td><td className="bull">云上 ↓60.5k 22b</td><td>Sell 3</td><td>BEAR reg（顶）</td></tr>
                <tr><td>8h</td><td className="num">64,022</td><td className="num neut">66.4</td><td className="bull">金叉（水下）17b</td><td className="bull">云上 ↓62.6k 8b</td><td>Sell 3</td><td>BULL reg（底）</td></tr>
                <tr><td>12h</td><td className="num">64,024</td><td className="num neut">60.8</td><td className="bull">金叉（水下）11b</td><td className="bear">云下 ↑64.1k 91b</td><td className="bear">⚡TD9 SELL</td><td>BULL reg（底）</td></tr>
                <tr><td>1d</td><td className="num">64,029</td><td className="num neut">53.2</td><td className="bull">金叉（水下）6b</td><td className="bear">云下 ↑66.1k 36b</td><td>Sell 6</td><td>BULL reg（底）</td></tr>
                <tr><td>3d</td><td className="num">64,024</td><td className="num bear">43.2</td><td className="neut">—</td><td className="bear">云下 ↑70.9k 12b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">64,024</td><td className="num bear">38.8</td><td className="bear">死叉（水下）2b</td><td className="bear">云下 ↑98.7k 23b</td><td>Buy 1</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">64,037</td><td className="num bear">43.8</td><td className="neut">—（DIF 水上）</td><td className="bull">云上 ↓47.0k 29b</td><td>TD9 BUY</td><td>BULL reg（底）</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（08:01 北京；滚动 latest 文件、
                    逐字存档于 /opt/desk-note/snapshots/2026-07-07-0005/）。净读{' '}
                    <em>高时间框偏空 · 短周期反弹、⚠ 高 TF 底背离簇（8h / 12h / 1d）
                    （4 多 / 3 空 / 3 中）</em>；regime{' '}
                    <em>6/9 周期动量 / 趋势延续 regime（JT&ge;0）</em>；活跃背离{' '}
                    <em>反转：顶背离 15m / 30m / 4h、底背离 15m / 8h / 12h / 1d；隐藏
                    （延续）：BEAR hid 15m / 1h、BULL hid 15m / 1h</em>。头部告警：{' '}
                    <em>⚡1h TD9 SELL @$64,022 与 ⚡12h TD9 SELL @$64,024——超买反转提示
                    （就在高位）</em>、<em>⚡1M TD9 BUY @$64,037——超卖反转提示</em>、{' '}
                    <em>4h 水上金叉（1 bar 前、DIF +607.4——强多延续）</em>、<em>1w 水下死叉
                    （2 bar 前、DIF −5,878.7）</em>。扫描现货 $64,024、24h +0.71%、24h H/L
                    $64,692 / $61,297、qVol $15.27B。收盘为未收盘 K 线；每个值在各周期收盘前
                    都按临时处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵走出谱系第三次结构性转向：07-06 周收在<b>周</b>口径重夺了地板、而地板
              台阶抬到 $62,864、现货仍守{' '}
              <span className="dn-tag bull">三根 MA 在它脚下——D-SMA20 $61,943（+3.42%）、
              D-EMA20 $62,684（+2.20%）与 200W 地板 $62,864（+1.91%）现在是支撑</span>、地板
              是现货脚下最近的支撑。然后墙往上退回头顶——周期代理{' '}
              <span className="dn-tag bear">D-EMA50 $65,686（−2.47%）</span>、然后{' '}
              <span className="dn-tag bear">D-SMA50 $66,267（−3.32%）</span>、然后{' '}
              <span className="dn-tag bear">W-EMA200 $67,224（−4.70%、种子）</span>、然后一道
              密的头顶带：{' '}
              <span className="dn-tag bear">D-EMA100 $69,335（−7.60%）</span>、{' '}
              <span className="dn-tag bear">W-SMA20 $69,934（−8.39%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $70,214（−8.76%）</span>、{' '}
              <span className="dn-tag bear">D-SMA100 $70,936（−9.69%）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $71,169（−9.99%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $72,505（−11.64%）</span>、{' '}
              <span className="dn-tag bear">W-EMA150 $73,532（−12.88%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $74,496（−14.00%）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $75,417（−15.05%）</span>、{' '}
              <span className="dn-tag bear">W-SMA150 $75,857（−15.55%）</span>。更高更远、
              已弃用：W-EMA100 $79,654（−19.58%）、W-EMA50 $80,112（−20.03%）、W-SMA50
              $87,479（−26.77%）、W-SMA100 $88,427（−27.55%）。{' '}
              <span className="dn-em">
                MA 锚自 parquet 最末 bar 2026-07-07 00:05Z（close $64,051.30）；偏移按 live
                现货 $64,063.38 重算。显示的 MA 水位按 $ 取整、偏移用精确序列值算。显示的周线
                阶梯用 2023→ 子集（185 根周 bar）、所以 W-SMA200 那里不可计算、W-EMA200
                $67,224 从可用历史 seed；200W 地板 $62,864 从全历史 glob 另算（357 根收盘周
                W-MON bar、含已结算的 07-06 周、不含未收盘的 07-13 周——较 07-05 备忘台阶抬自
                $62,643、07-06 周收 $64,023.60 进了窗口）。日线收盘：06-29 $60,224.70
                （确认破位的周收）、06-30 $58,605.40（这一轮最深、−6.45%）、07-01 $59,999.60
                （一根上收 +$1,394.20）、07-02 $61,540.60（上收）、07-03 $62,565.50、07-04
                $63,114.80（第一根重回地板上方的日收）、07-05 $63,617.10、07-06 $64,023.60
                （= 07-06 <b>周收</b>——破位以来第一根重回地板上方的周收）、07-07（未收盘、
                5 分钟 bar）$64,051.30（地板上方）——地板破位仍在 06-29 确认、恢复现已印出它
                第一根重回地板上方的周收、脚下三根 MA。
              </span>
            </p>
            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子再加深到净多 γ aggregate +157.8M（07-05 是 +110.2M、07-04 是 +88.1M）——这一轮最深、本子把下一步阻尼得更狠 · 前端是 7JUL26 0.3 DTE +21.20M（约今日 08:00Z 结算）——近端下行放大器<b>翻正</b>（前 −5.12M）、本次<b>无一根负到期</b> · flip 台阶 $61,405 → $61,697、现货推上方 +3.84% · 最重天花板 $65k +27.81M、看跌墙缓和 $60k −12.27M（前 −16.69M）· IV 42.2% · P/C 0.57</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子再加深它的净多 γ 姿态到这一轮最深：aggregate γ 从 +110.2M 升到
                +157.8M 净多 γ、所以本子把下一步阻尼得更狠、flip 重夺随现货推得更高而走阔、
                近端 7JUL26 放大器<b>翻正</b>、且无一根负到期——谱系带过最建设性的 gamma 背景
              </span>
              。aggregate GEX 是{' '}
              <span className="dn-tag bull">+157.8M / 1%</span>（07-05 是 +110.2M、07-04 是
              +88.1M、07-03 是 +60.7M）；本子把它的净多 γ 姿态延到这一轮最深。0-γ flip 台阶{' '}
              <span className="dn-tag">$61,405 → $61,697（+$292）</span>、现货 $64,063.38 推得
              更上、所以现货坐{' '}
              <span className="dn-tag bull">flip 上方 +3.84%</span>
              （现货口径 64,063.38 / 61,697 − 1 = +3.835%）；GEX 文件自己的
              &ldquo;dist to flip&rdquo; 对它的 Deribit-index $64,297（比 parquet 现货高
              $246）读 +4.2%、即{' '}
              <span className="dn-tag bull">+4.21%</span>
              （64,297 / 61,697 − 1 = +4.214%）——两参考都在 flip 上方、从 07-05 的 +2.68%
              <b>延伸</b>。墙图是一叠括住现货的正天花板、下方一根缓和后的看跌墙：最重的是{' '}
              <span className="dn-tag bull">$65k +27.81M</span>（最重墙、正天花板、就在头顶）、{' '}
              <span className="dn-tag bull">$64k +23.70M</span> 括住现货下方、然后{' '}
              <span className="dn-tag bull">$66k +19.17M</span>、{' '}
              <span className="dn-tag bull">$70k +18.98M</span>、{' '}
              <span className="dn-tag bull">$68k +16.51M</span>、{' '}
              <span className="dn-tag bull">$63k +14.60M</span>、{' '}
              <span className="dn-tag bull">$67k +11.85M</span>、{' '}
              <span className="dn-tag bull">$80k +8.84M</span>、{' '}
              <span className="dn-tag bull">$64.5k +8.29M</span> 在头顶、下方缓和后的看跌墙{' '}
              <span className="dn-tag bear">$60k −12.27M</span>（从 07-05 的 −16.69M 缓和）。{' '}
              <span className="dn-em">
                关键是 aggregate 深净多 γ、在这一轮最深、所以本子把下一步阻尼得更狠、而不是
                放大它——07-05 那本 +110.2M 的加深、谱系带过最建设性的 gamma 背景。现货
                $64,063.38 坐在 $64k +23.70M 与 $65k +27.81M 正天花板之间（都在重夺后的地板
                $62,864 上方）、在缓和后的 $60k −12.27M 看跌墙上；正天花板叠把反弹就在头顶
                封住、下方那根缓和后的看跌墙是近的架子。而近端下行放大器本次<b>翻正</b>：7JUL26
                0.3 DTE +21.20M（前 07-05 是 −5.12M）——短端下行口袋<b>没了</b>、无一根负到期。
                但刚回来的盘面把它下面这段价格动作指认成去杠杆、不是需求、MTF 引擎仍在高位闪
                两根 TD9 SELL。
              </span>{' '}
              按到期、近端集中全线是正的、无一根负到期：前端是那根正的 7JUL26{' '}
              <span className="dn-tag bull">0.3 DTE +21.20M（约今日 08:00Z 结算——07-05 是
              −5.12M 的那根放大器已翻正）</span>、然后 8JUL26 1.3 +3.86M、9JUL26 2.3 +4.33M、
              10JUL26 3.3{' '}
              <span className="dn-tag bull">+34.79M</span>、17JUL26 10.3{' '}
              <span className="dn-tag bull">+25.04M</span>、24JUL26 17.3 +6.76M、31JUL26 24.3{' '}
              <span className="dn-tag bull">+43.49M（最重远端）</span>、28AUG26 52.3 +6.81M、
              25SEP26 80.3 +1.14M、25DEC26 171.3 +2.84M、26MAR27 262.3 +0.83M、25JUN27 353.3
              +0.53M。07-05 备忘在 7JUL26 −5.12M 看到的近端下行放大器、随它滚到前端已<b>翻正</b>
              到 +21.20M——集中的短端下行没了。（现货参考的 aggregate +157.8M 是现货处的 net
              GEX；按到期的行是一个独立分解、不必加总到它。）
            </p>

            <p>
              874 合约的 IV 中位数是{' '}
              <span className="dn-tag">42.2%</span>（从 07-05 的 41.9% / 918 合约升）对 30D
              收对收 RV{' '}
              <span className="dn-tag">31.86%</span>——链层丰度较已实现{' '}
              <span className="dn-tag">~+10.34pt</span>（07-05 是 ~+7.32pt——RV 续跌、丰度走阔）、
              RV 从它近期路径再走弱（今天 31.86% 对 07-05 的 34.58%——替代 29-return 窗读
              32.39%）。一个 874 合约的链中位数、<span className="dn-em">不是</span>一个可交易
              价差；到期 / strike 层 vega、skew 与期限结构仍未载入、vol 读法保持 framework
              only。RV 方法：30D 收对收、logret.std × √365 × 100 于最后 30 根日线对数回报
              （= 31 根连续日收）锚自 parquet 最末 bar 2026-07-07 00:05Z。P/C 比{' '}
              <span className="dn-tag">0.57</span>（Call OI 234,143 / Put OI 133,482）——一条
              偏 call 的链。
            </p>
            <h2 className="dn-sec">
              宏观 <span className="dn-roman">IV · ~1.82h 渲染（周末——较 07-05 几乎没变）——10Y 守 4.49%（距闸 4bp）、TIPS 2.26% 极端 RISK-OFF、HY OAS 2.74% −1.0bp 仍在 2.78% re-grow 闸下（闸仍不点、距 4bp）、MOVE 65.8 本次<b>回来</b>（松）· FX 腿守：DXY 100.85（仍极端）与 USD/JPY 161.41 · regime 仍特异（mean |r| 0.201）、BTC +7.10% 领先 NQ 达 +7.45pt</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面板渲染在周末滞后约 1.82h、读法几乎没变：利率守在 4.49%（距它的闸 4bp）、
                而信用价差缓和到 2.74%、仍在它的 2.78% re-grow 闸<b>下</b>——闸仍不点、距 4bp
                ——美元守 100.85 极端、MOVE 本次回来、松在 65.8
              </span>
              。面板渲染是 2026-07-06 22:16Z、较快照早约 1.82h。US 10Y 名义{' '}
              <span className="dn-tag">4.49%（+1.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+1.56</span>——紧 regime、RISK-OFF、距 4.53% 闸 4bp
              （更近的一腿）。10Y TIPS 实际{' '}
              <span className="dn-tag">2.26%（+1.0bp）</span>、regime z{' '}
              <span className="dn-tag bear">+2.59</span>——极端 RISK-OFF、面板上最紧的线之一。
              5Y5Y BE 通胀{' '}
              <span className="dn-tag">2.21%（−1.0bp）</span>、regime z{' '}
              <span className="dn-tag">−0.25</span>——通胀预期平。HY OAS{' '}
              <span className="dn-tag bull">2.74%（−1.0bp）</span>、regime z{' '}
              <span className="dn-tag bull">−0.98</span>——z-regime 上信用松；价差缓和 −1bp、
              仍在它的 2.78% re-grow 闸<b>下</b>（它在 06-30 于 2.83% 点、07-01 于 2.80% 点、
              然后 07-02 掉到 2.75% 下、07-03 到 2.74% 下、07-04 → 07-05 在 2.75% 下——本次
              缓和到 2.74%、所以信用 re-grow 闸<b>仍不点</b>、距 4bp）。MOVE 债波是{' '}
              <span className="dn-tag">65.8（+0.36）</span>、regime z{' '}
              <span className="dn-tag bull">−0.87</span>——本次<b>回来</b>（07-05 不可用）、读松。
              美元守极端：DXY{' '}
              <span className="dn-tag bear">100.85（−0.01 日）</span>、regime z{' '}
              <span className="dn-tag bear">+2.10</span>、仍极端。Fed 净流动性{' '}
              <span className="dn-tag">$5.843T</span>、regime z{' '}
              <span className="dn-tag">−0.60</span>——较 07-05 备忘不变；源面板 delta 列读
              +0.053T、标紧 / episodic。USD/JPY{' '}
              <span className="dn-tag">161.41（−0.04 日）</span>、regime z +1.41；US-JP 10Y
              利差{' '}
              <span className="dn-tag">1.84%（+1.0bp）</span> 窄；USD/CNY{' '}
              <span className="dn-tag">6.7853</span>。{' '}
              <span className="dn-em">
                净：宏观背景在 z-面板上守 risk-off（利率紧、TIPS 极端、美元极端）、但信用边际
                守松——信用腿缓和到 2.74%、仍在 2.78% re-grow 闸下、所以那根在 06-28 → 07-01
                备忘上点过的信用闸连续第五个 cut 不点（距 4bp 点）；利率腿守在 4.49%、坐距它的
                4.53% 闸 4bp、是更近的一腿。reclaim-long 利率筛（10Y &lt; 4.55%）在 4.49% 仍
                <b>真</b>。宏观读法仍是强化而非反驳这根确认破位——一张宽的 risk-off z-面板——但
                周末新鲜动作很小：信用闸不点、MOVE 松在 65.8 回来、相关 regime 守特异、BTC
                领先 NQ（见下方跨资产）、美元守极端。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>水位</th>
                  <th>Δ</th>
                  <th>regime z</th>
                  <th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US 10Y 名义</td><td className="num">4.49%</td><td className="num bear">+1.0bp</td><td className="num bear">+1.56</td><td className="bear">紧 · RISK-OFF · 距闸 4bp</td></tr>
                <tr><td>10Y TIPS 实际</td><td className="num">2.26%</td><td className="num bear">+1.0bp</td><td className="num bear">+2.59</td><td className="bear">极端 RISK-OFF</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.21%</td><td className="num bull">−1.0bp</td><td className="num">−0.25</td><td className="neut">平</td></tr>
                <tr><td>HY OAS</td><td className="num">2.74%</td><td className="num bull">−1.0bp</td><td className="num bull">−0.98</td><td className="bull">仍在 2.78% re-grow 闸下——闸仍不点（距 4bp）</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.504</td><td className="num">−0.00</td><td className="num">+0.40</td><td className="stale">周度 · 中性 · 陈旧 10d</td></tr>
                <tr><td>MOVE 债波</td><td className="num">65.8</td><td className="num">+0.36</td><td className="num bull">−0.87</td><td className="bull">本次回来 · 松</td></tr>
                <tr><td>DXY</td><td className="num">100.85</td><td className="num">−0.01</td><td className="num bear">+2.10</td><td className="bear">极端 RISK-OFF · 守住</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.843T</td><td className="num">+0.053T</td><td className="num">−0.60</td><td className="bear">紧 · episodic · 源面板 delta +0.053T · 较 07-05 备忘不变</td></tr>
                <tr><td>USD/JPY</td><td className="num">161.41</td><td className="num bull">−0.04</td><td className="num bear">+1.41</td><td className="bear">硬</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">1.84%</td><td className="num">+1.0bp</td><td className="num bull">−1.00</td><td className="neut">窄</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7853</td><td className="num">+0.02</td><td className="num">−1.49</td><td className="neut">—</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.65%</td><td className="num stale">月度（66d）</td><td className="num bear">+2.59</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>
            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、summary 00:01Z——{' '}
              <span className="dn-em">一根 7 日滚动读、不是今天</span>）。均值非对角{' '}
              <span className="dn-tag">|r| 0.201</span>——从 07-05 的 0.193 抬了一点、但仍坐{' '}
              <span className="dn-tag">在 0.25 特异阈下</span>、所以 regime 行保持{' '}
              <span className="dn-signal">特异——BTC 按相关性与广义跨资产复合明显脱钩</span>、
              它的头部关联是一条金属 / 股簇带、在 +0.30–0.40 附近：PLAT{' '}
              <span className="dn-tag">+0.397</span>、PALL{' '}
              <span className="dn-tag">+0.382</span>、SILVER{' '}
              <span className="dn-tag">+0.306</span>、GOLD{' '}
              <span className="dn-tag">+0.290</span>、SP500{' '}
              <span className="dn-tag">+0.278</span>、NVDA{' '}
              <span className="dn-tag">+0.276</span>、COPPER{' '}
              <span className="dn-tag">+0.261</span>、URNM{' '}
              <span className="dn-tag">+0.260</span>、NQ{' '}
              <span className="dn-tag">+0.245</span>、TSLA{' '}
              <span className="dn-tag">+0.225</span>、JP225{' '}
              <span className="dn-tag">+0.154</span>、MSFT{' '}
              <span className="dn-tag">+0.118</span>、EUR{' '}
              <span className="dn-tag">+0.106</span>、其中 JPY{' '}
              <span className="dn-tag">−0.123</span> 反向、META{' '}
              <span className="dn-tag">+0.063</span>、AMZN{' '}
              <span className="dn-tag">+0.061</span>、AAPL{' '}
              <span className="dn-tag">+0.057</span>、GOOGL{' '}
              <span className="dn-tag">+0.034</span> 近零。而 7d 表现保持 BTC-对-NQ 框架建设性、
              并进一步抬升 BTC 排名：BTC 领先 NQ/SP500、不是落后者——{' '}
              <span className="dn-tag bull">BTC +7.10%</span> 在 NQ{' '}
              <span className="dn-tag bear">−0.35%</span> 前 +7.45pt（07-05 是 +2.80pt 领先）、
              也在 SP500 +1.41% 前 +5.69pt、且 BTC 已爬到复合里第 3（从 07-05 的第 6）——领头是
              AAPL{' '}
              <span className="dn-tag bull">+11.26%</span> 与金属 SILVER{' '}
              <span className="dn-tag bull">+7.39%</span>、然后 BTC{' '}
              <span className="dn-tag bull">+7.10%</span>、META{' '}
              <span className="dn-tag bull">+6.76%</span>、PALL{' '}
              <span className="dn-tag bull">+4.51%</span>、MSFT{' '}
              <span className="dn-tag bull">+4.30%</span>、GOLD{' '}
              <span className="dn-tag bull">+4.17%</span>、PLAT{' '}
              <span className="dn-tag bull">+3.70%</span>、GOOGL{' '}
              <span className="dn-tag bull">+3.65%</span>、NGAS{' '}
              <span className="dn-tag bull">+2.40%</span>、TSLA{' '}
              <span className="dn-tag bull">+2.10%</span>、AMZN{' '}
              <span className="dn-tag bull">+1.61%</span>、URNM{' '}
              <span className="dn-tag bull">+1.46%</span>、SP500{' '}
              <span className="dn-tag bull">+1.41%</span>、COPPER{' '}
              <span className="dn-tag bull">+1.21%</span>、EUR{' '}
              <span className="dn-tag bull">+0.25%</span>、NVDA{' '}
              <span className="dn-tag bull">+0.16%</span>、JPY{' '}
              <span className="dn-tag bull">+0.06%</span> 全绿；红的是指数落后者与能源——NQ{' '}
              <span className="dn-tag bear">−0.35%</span>、JP225{' '}
              <span className="dn-tag bear">−0.17%</span>、BRENT{' '}
              <span className="dn-tag bear">−1.90%</span>、CL{' '}
              <span className="dn-tag bear">−2.23%</span>。{' '}
              <span className="dn-em">
                BTC 7d 回报 +7.10% 对 NQ −0.35% 是 +7.45pt 的领先（07-05 是 +2.80pt）——对 NQ
                的差急剧走阔、因 NQ 本周转负而 BTC 续延、BTC 已从第 6 爬到复合里第 3、远离
                落后者。相关 regime 守 0.25 线下的特异。所以前谱系带的那根尖锐 risk-off / 最差
                表现读彻底解除——BTC 本次既非在阈上统计耦合、也非落后者、且现在完全领先指数
                复合。宏观 z-面板仍读 risk-off（利率紧、DXY 极端）、但跨资产 regime 守松、BTC
                续领 NQ、所以这两个跨市场读仍与紧的宏观 z-面板背离。
              </span>{' '}
              JGB 月度 2.65% 带一个极端 RISK-OFF 月度标——别依赖它。
            </p>
            <h2 className="dn-sec">
              交易本子 <span className="dn-roman">V · 本子 FLAT · 200W 地板——破位在 06-29 周收确认（$60,224.70 &lt; $62,864、−4.20%）、06-15 重夺论被证伪；07-06 <b>周收</b>重夺了地板（$64,023.60 &gt; $62,864、破位以来第一根周收在上方）、地板台阶抬到 $62,864、脚下三根 MA · scout 价格前置条件保持真并<b>加强</b>（现货 flip 上方 +3.84%、三根 MA 在脚下）、本子加深到这一轮最深净多 γ 且数据 block 终于<b>抬起</b>（盘面恢复）——但 scout 仍<b>按兵</b>（第一次 live 读是短空回补 / 去杠杆、引擎闪两根 1h/12h TD9 SELL 在高位）· 宏观尾信用闸仍不点（OAS 2.74% &lt; 2.78%）· 挤压周期<b>下架</b>（SM feed live）——第一次读净多、双向 gross-up、无 hostile-2 签名</span>
            </h2>

            <p>
              <span className="dn-signal">
                本子 flat、且保持 flat——但谱系等了很久的两个条件本次都清了：200W 地板在周收
                重夺了（07-06 $64,023.60、破位以来第一根周收在上方）、且 live 盘面在 ~18 天后
                回来了。约束条件不再是数据完整性——盘面 live 了——而是 live 盘面说的话：短空
                回补 / 去杠杆、不是需求、引擎仍在高位闪两根 TD9 SELL
              </span>
              。06-29 周收结算 $60,224.70、台阶抬后的 $62,864 地板下 −4.20%——破位<b>确认</b>、
              06-15 重夺论<b>被证伪</b>、本次没有任何东西撤销这段历史。但 07-05 备忘记的是反弹
              在日收重夺地板；本次它<b>在周收</b>重夺了地板——07-06 周线 bar $64,023.60 是破位
              以来第一根重回地板上方的周收、恢复的第一根结算测试、而未收盘 07-07 bar
              $64,051.30 守在它上方、脚下三根 MA。dealer 本子加深到 +157.8M 净多 γ（这一轮
              最深）、近端 7JUL26 放大器翻正、看跌墙缓和、现货推到 flip 上方 +3.84%。scout
              的价格前置条件保持<b>真</b>并<b>加强</b>、它的数据 block 终于<b>抬起</b>——live
              盘面回来了。但交易台仍不出 scout：第一次 live 读是一个短空回补 / 去杠杆的形
              （OI −2.42% 进升价、taker/CVD 净卖、funding 钉多、retail 缓和、SM 净持平 / 多）、
              不是需求在消化破位、且引擎仍带两根 ⚡TD9 SELL（1h 加 12h）在高位、带 15m / 30m /
              4h 顶背离——在这里追重夺、进一条去杠杆盘面与两根超买反转印、是个差入场。也无新
              空：本子是这一轮最深多 γ、无一根负到期、flip 已重夺 +3.84%、现货在周收重夺地板、
              脚下三根 MA、一根 1M TD9 buy 仍印——是个差的压空位置。今天的交易本子是：无空、
              无 scout、无新对冲——盘面回来了、它说等需求确认这次重夺。
            </p>
            <div className="dn-trade">
              <span className="dn-side framework">framework · PRIMARY · 200W 周期地板盯盘——破位已确认：06-29 周收 $60,224.70 结算在台阶抬后的 $62,864 地板下 −4.20%（周收升级已点）、06-15 重夺论被证伪；07-06 <b>周收</b>重夺了地板（$64,023.60、+1.84% 在上方）、破位以来第一根周收在上方——脚下三根 MA、恢复的第一根结算已印</span>
              <div className="dn-trade-name">
                200W 周期地板盯盘——破位在 06-29 周收确认、恢复已在<b>周收</b>重夺地板：地板 $62,864 = 全历史 W-SMA200（357 根收盘周 bar、随已结算的 07-06 周进窗、台阶抬自 $62,643）、06-29 周收 $60,224.70（下 −4.20%）确认破位、07-06 <b>周收</b> $64,023.60（+1.84% 在上方）是破位以来第一根重回地板上方的周收、未收盘 07-07 bar $64,051.30 守在上方、06-15 重夺论被证伪
              </div>
              <div className="dn-thesis">
                07-05 备忘记的是破位在 06-29 周收确认、反弹在日收重夺地板。本次恢复在<b>周收</b>
                重夺了地板：07-06 周线 bar 收{' '}
                <span className="dn-tag bull">$64,023.60、$62,864 地板上 +1.84%</span>、是破位
                以来第一根重回地板上方的周收、而未收盘 07-07 bar $64,051.30 守在地板上方、
                脚下三根 MA。按框架、一根盘中 wick 不是破位、一根日收在下是早警、一根持续的
                周收在下是那个破地板、证伪 06-15 重夺论的升级——那根周收印在 06-29、所以破位
                保持<b>确认</b>、重夺论保持<b>被证伪</b>。对称地、框架要的那次恢复——一根持续
                的周收重回地板上方——现已在 07-06 印出它<b>第一根</b>结算。{' '}
                <span className="dn-em">谱系那根结构正在 06-29 被裁定对着它、在周收口径；本次
                恢复已印出它第一根重回地板上方的周收、地板（随 07-06 周进窗台阶抬到 $62,864）
                已翻成现货脚下的支撑、三根 MA 压在现货脚下。但一根周收是第一根结算、不是一次
                确认的 regime 变更——而刚回来的 live 盘面把它背后的动作读成短空回补 / 去杠杆、
                不是需求。恢复有了它第一根周收；它背后的需求未确认。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板（台阶抬起）</span><span className="dn-lvl-v">$62,864 = 全历史 W-SMA200、本次从 2019→ parquet glob 重算（357 根收盘周 W-MON bar、含已结算的 07-06 周、不含未收盘的 07-13 周）；随 07-06 周收 $64,023.60 进 200 周窗口、较 07-05 备忘台阶抬自 $62,643 · weekly_200sma.json 缺、所以比值分位 / last-event 留作未溯源、不杜撰</span></div>
                <div><span className="dn-lvl-k">破位——已确认、地板在<b>周收</b>重夺</span><span className="dn-lvl-v bear">06-29 周收 $60,224.70 结算在台阶抬后的地板下 −4.20%——破位确认；06-30 收 $58,605.40 最深（−6.45%）；然后六根连阳（07-01 → 07-06）把现货带回线上、07-04 $63,114.80 是第一根在上方的日收、07-06 $64,023.60 是第一根在上方的<b>周收</b>（+1.84%）；未收盘 07-07 bar $64,051.30 守在上方</span></div>
                <div><span className="dn-lvl-k">重夺论——被证伪（被恢复取代）</span><span className="dn-lvl-v bear">06-15 重夺论要求地板在周收口径守住；06-29 周收在下证伪它——先前 22JUN 周线守（$63,990）被取代。恢复是一根<b>新</b>结构：一根重回地板上方的周收、07-06 第一次印</span></div>
                <div><span className="dn-lvl-k">恢复路径（第一根周收已印）</span><span className="dn-lvl-v bull">现货在 flip $61,697 上方 +3.84%、D-SMA20 $61,943 上方 +3.42%、D-EMA20 $62,684 上方 +2.20%、地板 $62,864 上方 +1.91%（三根 MA 在现货脚下）——恢复要一根持续的周收重回地板上方；07-06 周收 $64,023.60 是第一根这样的结算。一根周收是第一根测试、不是确认的 regime 变更——而它是一根其需求被 live 盘面读成去杠杆而非累积的周收（见 scout）</span></div>
              </div>
              <div className="dn-gating">
                <b>Framework、不是一笔交易。</b>地板盯盘是唯一那根承重的 live 结构水位。破位
                在 06-29 周收确认、重夺论被证伪、恢复已印出它第一根重回地板上方的周收（07-06
                $64,023.60）、脚下三根 MA——盯盘上不取任何仓位：它标定确认破位（06-29 周收
                $60,224.70 &lt; $62,864）、恢复的第一根结算（07-06 周收 $64,023.60 &gt;
                $62,864）、与途站（flip $61,697 → D-SMA20 $61,943 → D-EMA20 $62,684 → 地板
                $62,864、现都在现货脚下）、交易台不会在引擎闪两根高位 TD9 SELL 时把一根反弹追
                多进一条去杠杆盘面、也不会在一根确认破位、其恢复已印出第一根重回地板上方的
                周收、进一本这一轮最深多 γ 本子、flip 已重夺、一根 1M TD9 buy 已印的情况下压空。
              </div>
            </div>
            <div className="dn-trade">
              <span className="dn-side long">long · scout · 仍按兵 · 价格前置条件保持真并<b>加强</b>（现货 flip 上方 +3.84%、三根 MA 在脚下、在重夺后的地板上方）、本子加深到这一轮最深净多 γ 且数据 block 终于<b>抬起</b>（盘面恢复）；但<b>第一次</b> live 读是短空回补 / 去杠杆（OI −2.42%、taker/CVD 净卖、funding 钉多、retail 缓和、SM 净持平）+ 引擎闪两根 1h/12h TD9 SELL 在高位——无需求确认、所以 scout 保持按兵</span>
              <div className="dn-trade-name">
                回补反弹 scout——flip 重夺保持真（现货 +3.84% 在上）、三根 MA 在现货脚下、本子在这一轮最深净多 γ、数据 block 随盘面回来终于<b>抬起</b>；但第一次 live 读是短空回补 / 去杠杆而非需求、引擎仍闪两根超买反转印（1h 加 12h TD9 SELL）在高位——scout 保持按兵、待需求确认
              </div>
              <div className="dn-thesis">
                06-30 → 07-05 备忘看到 scout 价格前置条件翻真并延伸、而数据 block 保持
                <b>下</b>（盘面冻结）。本次价格前置条件保持真并进一步加强——现货{' '}
                <em>flip 上方 +3.84%</em> $61,697（台阶 +$292）、已在周收重夺地板、脚下守
                <b>三根</b> MA（D-SMA20 $61,943 / D-EMA20 $62,684 / 地板 $62,864）、而 dealer
                本子加深到 +157.8M 净多 γ——这一轮最深——无一根负到期。而那个把 scout 挡了
                ~18 天的数据 block 终于<b>抬起</b>：live 盘面回来了。但 scout 保持按兵、本次
                理由是盘面本身：（1）第一次 live 仓位读是一个{' '}
                <em>短空回补 / 去杠杆的形</em>、不是需求——OI <b>缩了</b> −2,544 BTC（−2.42%）
                进一记 +0.55% 价格动作、taker-net 与期货 CVD 净卖（24h −2,368）、funding 钉在
                它的多 cap 附近（零负行）、retail 削多 −1.76pt、SM 在一次双向 gross-up 上守
                净持平 / 多。那是回补与去杠杆在扛价、不是累积在消化破位。（2）引擎不带干净的
                建设性触发——regime 翻回趋势延续、一根 4h 金叉印了、但两根 ⚡TD9 SELL（1h 加
                12h、超买反转提示）持续在高位、带 15m / 30m / 4h 顶背离。{' '}
                <span className="dn-em">一根 scout 多是押需求在消化破位；刚回来的盘面说重夺
                是被短空回补 / 去杠杆在扛、不是需求、引擎在高位闪两根超买反转印。价格腿开着、
                数据 block 也抬起了——但恢复后盘面的第一次读、正是让 scout 保持按兵的那个读。
                等 live 盘面显示升价上 OI 在<b>建</b>、taker-net 转正——需求、不是回补——且
                引擎清掉它的超买印时再评估。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bear">按兵 · 无入场 · 价格前置条件保持真并加强（现货 flip 上方 +3.84%、三根 MA 在脚下、在重夺后的地板上方）、本子是这一轮最深净多 γ、数据 block 已<b>抬起</b>（盘面恢复）——但第一次 live 读是短空回补 / 去杠杆（不是需求）、引擎闪两根持续 1h/12h TD9 SELL；在需求确认（升价上 OI 在建 + taker-net 转正）AND 一个清掉的引擎后再评估</span></div>
                <div><span className="dn-lvl-k">技术前置条件</span><span className="dn-lvl-v bear">flip $61,697 重夺（真——现货 +3.84% 在上）AND D-SMA20 $61,943 / D-EMA20 $62,684 重夺（真——两根日 MA 在现货脚下）AND 地板 $62,864 周收重夺（真——07-06 周收 $64,023.60 在上）AND 一根确认引擎印（不真——4 多 / 3 空 / 3 中、一根 4h 金叉与 1M TD9 buy 被两根持续 1h/12h TD9 SELL 与 15m / 30m / 4h 顶背离抵消；regime 翻回趋势延续但在高位超买）</span></div>
                <div><span className="dn-lvl-k">数据前置条件（已抬起——但读去杠杆）</span><span className="dn-lvl-v bear">live 盘面<b>恢复</b>（07-05 06:38Z 恢复、穿过锚 live）AND SM feed live（净多 +2,348.85、离开它 06-12 冻结）——两者现都成立、所以自六月中就立着的 block 已<b>抬起</b>。但第一次读是去杠杆、不是需求：OI −2.42%、taker/CVD 净卖、funding 钉多、retail 缓和、SM 净持平双向 gross-up。数据 block 不再是操作性的了——需求 block 才是</span></div>
              </div>
              <div className="dn-gating">
                <b>硬规则：</b>没有 live 盘面上的需求确认、不入 scout。盘面回来了、价格腿开着
                在改善、本子是这一轮最深多 γ、地板在周收重夺——但第一次 live 读是短空回补 /
                去杠杆、交易台不会把一根回补反弹加仓进一条正显示反弹被回补、不是被买、且带
                两根高位超买 TD9 SELL 的盘面。那个把 scout 挡了 ~18 天的数据 block 已抬起；
                需求 block（升价上 OI 在建、taker-net 转正）与引擎 block（两根持续超买反转）
                现约束。重新武装是第一根显示升价上 OI 在升、taker-net 转正的 live 24h 窗——
                需求在消化、不是空头在补。
              </div>
            </div>
            <div className="dn-trade">
              <span className="dn-side framework">framework · 宏观尾 · put-spread re-grow 闸——信用腿仍不点：HY OAS 2.74% &lt; 2.78% 闸（本次缓和 −1.0bp、仍在下、距 4bp）、10Y 腿距 4bp（4.49% 对 4.53% 闸）；两腿都守在它们的触发下</span>
              <div className="dn-trade-name">
                下行 put-spread——re-grow 信用闸仍不点（OAS 2.74% &lt; 2.78%）、利率腿距 4bp；不加对冲（dealer 本子加深到这一轮最深净多 γ、近端放大器翻正、无一根负到期、所以内生下行结构进一步缓和）
              </div>
              <div className="dn-thesis">
                谱系带的宏观 re-grow 闸——HY OAS &gt; 2.78% OR 10Y &gt; 4.53% 作为重长下行尾
                的条件——在信用腿上仍<b>不点</b>：HY OAS{' '}
                <em>2.74%</em>、本次 −1bp 守在闸下（它在 06-30 于 2.83% 点、07-01 于 2.80% 点、
                然后 07-02 → 07-05 掉到 2.75% / 2.74% / 2.75% 下、本次缓和到 2.74%、距 4bp 点）、
                而 10Y 守 4.49%、坐距 4bp——更近的一腿。所以两腿都离它们的触发。reclaim-long
                利率筛（10Y &lt; 4.55%）在 4.49% 仍<b>真</b>。宏观盘面在 z-面板上仍是一记
                risk-off 冲量（利率紧、TIPS 极端、美元极端、MOVE 松在 65.8 回来）、但一根宏观
                尾不是一根内生兼特异地板破位的对的工具、且 dealer 本子已加深到这一轮最深净多
                γ、近端放大器翻正、无一根负到期、所以 aggregate 内生下行结构本次进一步缓和
                ——这、连同不点的信用闸、是把尾按下的理由、不是加它的理由。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bull">无仓 · 信用闸在收盘口径仍不点 · HY OAS 2.74% &lt; 2.78%（−1.0bp、仍在下、距 4bp）、10Y 腿距 4bp</span></div>
                <div><span className="dn-lvl-k">re-grow 触发（不点）</span><span className="dn-lvl-v bull">HY OAS &gt; 2.78% 收——仍<b>不点</b>于 2.74%（在闸下 4bp）· OR 10Y &gt; 4.53% 收（现 4.49%、距 4bp 点——更近的一腿、但仍离）</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v bull">10Y &lt; 4.55% 收——在 4.49% 真；一条 live 盘面现支持转译、但等一根 BTC 内部需求转向</span></div>
              </div>
              <div className="dn-gating">
                <b>Caveats：</b>re-grow 闸是随水位漂移设的自由裁量盯盘、不是回测断点。信用腿
                守在闸下（OAS 2.74% &lt; 2.78%）、利率腿坐距 4bp；两腿都不点、本次没有尾可长；
                注意 dealer 本子已加深到这一轮最深净多 γ、近端放大器翻正、无一根负到期、所以
                aggregate 内生下行结构进一步缓和——尾按下。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">framework · 挤压周期 hostile-2 watchlist · 无日历先验 · <b>下架</b>——SM feed 又 live 了（2026-07-05 06:38Z 恢复）；第一次读是净多（+2,348.85）、近乎持平（Δnet −9.67 / 0.41%）在一次双向 gross-up 上——本次<b>无</b> hostile-2 重堆签名</span>
              <div className="dn-trade-name">
                挤压周期 hostile-2——<b>下架</b>（06-16 → 07-05 曾 ON HOLD）：SM feed 在 2026-07-05 06:38Z 恢复、重堆签名又能读了——第一次读没有 hostile-2 步（两侧一起长、net 近乎持平且多）
              </div>
              <div className="dn-thesis">
                挤压周期 / re-stack-hostile-2 框架把离散 SM 步（Δshort &gt; 0 + Δlong &lt; 0
                同一分钟）读成延续签名；它的日历先验（BJ 13–15 节奏）在 05-31 被证伪、此后作为
                无先验 watchlist 跑。它在 06-16 → 07-05 曾 ON HOLD、为最简单的理由——SM feed
                死了。本次 feed 又<b>live</b> 了（2026-07-05 06:38Z 恢复）、所以框架<b>下架</b>、
                能读了。第一次读显示{' '}
                <em>无 hostile-2 签名</em>：SM net 在{' '}
                <span className="dn-tag">+2,348.85 净多</span> 恢复、live 24h 窗上守<b>近乎持平</b>
                （Δnet −9.67、削 0.41%）而两侧都<b>长</b>了（多腿 +~771、空腿 +~781、取整）——
                一次双向 gross-up、不是框架盯的那个 Δshort&gt;0 + Δlong&lt;0 重堆步。{' '}
                <span className="dn-em">框架又 live 了但安静：本子净多、近乎持平、双向 gross-up、
                头 24h 无重堆签名。重新武装是现-live feed 上一根离散的同分钟 Δshort&gt;0 +
                Δlong&lt;0 步。</span>
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v bull"><b>下架</b> · SM feed LIVE（2026-07-05 06:38Z 恢复）· deltas 又可算——第一次读没有 hostile-2 步</span></div>
                <div><span className="dn-lvl-k">live 读（不是一个签名）</span><span className="dn-lvl-v">long 15,173.79 / short 12,824.93 / net +2,348.85——净多、24h 近乎持平（Δnet −9.67）、两侧都长（双向 gross-up）；SM 整个恢复窗里都净多（区间 +1,153 / +3,682）</span></div>
                <div><span className="dn-lvl-k">重新武装条件</span><span className="dn-lvl-v">live feed 上一根离散的 Δshort &gt; 0 + Δlong &lt; 0 同分钟步 → 标一根重堆（hostile-2）延续签名；本次无</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>feed live 了但没有签名印出来——交易台不从一次双向 gross-up
                推断重堆、也不从一根近乎持平的 net 读方向。挤压周期读法是重新武装并盯着、不是
                触发；第一根离散的同分钟 Δshort&gt;0 + Δlong&lt;0 步是那个信号。
              </div>
            </div>
            <h2 className="dn-sec">
              决策条件 <span className="dn-roman">VI · LIVE 盘面恢复（431.9h 之后于 2026-07-05 06:38Z 恢复）——那个操作性条件<b>已清</b>、第一次 live 读是短空回补 / 去杠杆 · 200W 地板破位在 06-29 周收确认（$60,224.70 &lt; $62,864、−4.20%）、06-15 重夺论被证伪、07-06 <b>周收</b>重夺了地板（$64,023.60、破位以来第一根周收在上方）· flip 延伸（现货 +3.84% 在上）、本子加深到 +157.8M 净多 γ（这一轮最深）、近端放大器<b>翻正</b>（无一根负到期）· scout 价格前置条件真并加强、数据 block <b>已抬起</b>——但第一次 live 读是去杠杆、引擎闪两根 1h/12h TD9 SELL 在高位 · 宏观信用闸仍不点（OAS 2.74%）、regime 守特异、BTC 领先 NQ 达 +7.45pt</span>
            </h2>

            <p>
              07-05 那些条件里：live 盘面<em>确实</em>回来了——它在 431.9h 之后于 2026-07-05
              06:38Z 恢复、所以那个跑了 ~18 天的操作性 block 已<b>清</b>、且第一次 live 读是一个
              短空回补 / 去杠杆的形；200W 地板破位保持在 06-29 周收<b>确认</b>（$60,224.70、台阶
              抬后的 $62,864 地板下 −4.20%）、06-15 重夺论保持<b>被证伪</b>；地板<b>台阶抬到</b>
              $62,864（已结算的 07-06 周进了窗口）；07-05 备忘标为约 1 天外的那次恢复已<b>印</b>
              ——07-06 周收 $64,023.60 是破位以来第一根重回地板上方的周收、而未收盘 07-07 bar
              $64,051.30 守在它上方、脚下三根 MA；flip <b>延伸</b>（现货 +3.84% 在上对 07-05 的
              +2.68%）、flip 台阶到 $61,697；dealer 本子从 +110.2M <b>加深</b>到 +157.8M 净多 γ
              ——这一轮最深——近端下行放大器<b>翻正</b>（7JUL26 0.3 DTE +21.20M、前 −5.12M）、
              无一根负到期；scout 价格前置条件保持真并加强、它的数据 block <b>抬起</b>、但第一次
              live 读是去杠杆、引擎翻回趋势延续而仍闪两根 1h/12h TD9 SELL 在高位；宏观 re-grow
              闸在信用腿仍不点（OAS 2.74% &lt; 2.78%）、而利率腿守 4.49%（距 4bp）；相关 regime
              守特异、BTC 7d 回报<b>领先</b> NQ 达 +7.45pt；挤压周期在 live feed 上<b>下架</b>、
              无 hostile-2 签名。主导条件变了：<em>交易台不再仓位瞎——盘面 live 了、进一根在周收
              确认的 200W 地板破位、一次已印出它第一根重回地板上方周收、脚下三根 MA 的恢复、和
              一本这一轮最深净多 γ 的本子——但那条恢复盘面的第一次 live 读是短空回补 / 去杠杆、
              不是需求、引擎在高位闪两根超买反转印</em>。今天条件围绕恢复的盘面、确认的周收破位、
              地板的周收重夺、与去杠杆的第一次读重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>Live 盘面恢复（PRIMARY 操作性——已清）</td><td className="bull">live_db.json 在 431.9h 之后于 2026-07-05 06:38Z 恢复写行；funding / OI / flow / SM 穿过 00:05Z 锚 live；SM 三元离开它 06-12 冻结 live（net +2,348.85 多）</td><td>那个 ~18 天的操作性 block 已<b>清</b>——funding / OI / flow / SM 读 live；第一次读是短空回补 / 去杠杆（OI −2.42% 进 +0.55% 价格、taker/CVD 净卖、funding 钉多、retail 缓和、SM 净持平 / 多）——地板重夺作为需求仓位<b>未确认</b>；盯升价上 OI 在建 + taker-net 转正</td></tr>
                <tr><td>200W 地板——破位已确认、地板在<b>周收</b>重夺</td><td className="bear">06-29 周收 $60,224.70 结算在台阶抬后的 $62,864 地板下 −4.20%——破位确认；六根连阳（07-01 → 07-06）、07-04 $63,114.80 是第一根在上方的日收、07-06 $64,023.60 是第一根在上方的<b>周收</b>（+1.84%）；未收盘 07-07 bar $64,051.30、地板上方</td><td>地板破位在周收口径确认、恢复已印出它第一根重回地板上方的周收——地板（$62,864）已翻成现货脚下的支撑；不取仓位</td></tr>
                <tr><td>200W 重夺论——被证伪（恢复第一根周收已印）</td><td className="bear">06-15 重夺论要求地板的一根周收守；06-29 周收在下证伪它。恢复是一根新结构——一根重回地板上方的周收——07-06 $64,023.60 第一次印</td><td>旧重夺论已死；恢复已印出它第一根重回地板 $62,864 上方的周收——一根结算、尚非确认的 regime 变更；盯下一根周收能否守在上方、以及需求能否在 live 盘面上确认</td></tr>
                <tr><td>Flip 重夺（scout 价格前置条件）——加强、数据 block 已抬起</td><td className="bull">现货 $64,063.38 flip $61,697 上方 +3.84%、D-SMA20 $61,943 上方 +3.42%、D-EMA20 $62,684 上方 +2.20%（两根日 MA 在现货脚下）、地板 $62,864 上方 +1.91%（三根 MA 在现货脚下）</td><td>价格前置条件保持真并加强、数据 block <b>抬起</b>（盘面恢复）——但第一次 live 读是去杠杆、不是需求、引擎闪两根 1h/12h TD9 SELL 在高位；scout 保持按兵、待需求确认、非数据</td></tr>
                <tr><td>Dealer 本子——加深净多 γ（这一轮最深）、近端放大器<b>翻正</b></td><td className="bull">aggregate GEX +157.8M（07-05 是 +110.2M、07-04 是 +88.1M）；前端是 7JUL26 0.3 DTE +21.20M（约今日 08:00Z 结算、从 −5.12M 翻正）；<b>无一根负到期</b>；现货坐在 $64k +23.70M 与 $65k +27.81M 正天花板之间、在缓和后的 $60k −12.27M 看跌墙上</td><td>dealer 本子现 aggregate 把下一步阻尼得更狠、内生下行结构进一步缓和（无一根负到期）；只盯、无指令（aggregate 是这一轮最建设性、但 live 盘面读去杠杆、引擎在高位闪两根反转）</td></tr>
                <tr><td>宏观尾 re-grow（信用腿不点）</td><td className="bull">HY OAS 2.74% &lt; 2.78%（仍不点、−1.0bp、距 4bp）OR 10Y &gt; 4.53%（距 4bp 点、守 4.49%）——FX 腿守（DXY 100.85、USD/JPY 161.41）、MOVE 松在 65.8 回来</td><td>本篇无对冲指令——两腿都不点、没有尾可长；注意本子已加深到这一轮最深净多 γ、近端放大器翻正、无一根负到期、所以内生下行结构进一步缓和</td></tr>
                <tr><td>reclaim-long 利率筛</td><td className="bull">10Y &lt; 4.55% 收——在 4.49% 真</td><td>独立筛真；一条 live 盘面现支持转译、但需要一根 BTC 内部需求转向（非去杠杆）才转成 scout long</td></tr>
                <tr><td>挤压周期 hostile-2（下架）</td><td className="bull">SM feed LIVE（2026-07-05 06:38Z 恢复）；net +2,348.85 多、近乎持平（Δnet −9.67）、双向 gross-up——无 hostile-2 步</td><td>重新武装并盯着、不是触发——live feed 上第一根离散的 Δshort&gt;0 + Δlong&lt;0 同分钟步时标一根重堆</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是{' '}
              <span className="dn-signal">
                地板的重夺——它在 07-06 印出第一根重回地板上方的周收（$64,023.60）、把本子加深
                到 +157.8M 净多 γ、无一根负到期、把现货压到 flip 上方 +3.84% 与台阶抬后的地板
                上方 +1.91%、200W 破位已确认——是需求还是短空回补、而现在、~18 天来第一次、
                恢复的盘面<b>回答了</b>：第一次 live 读是去杠杆、不是需求
              </span>
              。那本加深到 +157.8M 净多 γ（现货 flip 上方 +3.84%）的 dealer 本子现 aggregate
              把下一步阻尼得更狠——而近端放大器翻正到 7JUL26 +21.20M、无一根负到期；结构正
              ——200W 地板——保持在周收确认破、06-15 重夺论保持已死、但恢复已印出它第一根重回
              地板上方的周收、脚下三根 MA、刚回来的盘面把它背后的动作读成短空回补 / 去杠杆而非
              需求——引擎翻回趋势延续但仍在高位闪两根超买反转印。盘面恢复后本篇按写好的跑：本子
              flat、scout 价格 block 保持真并加强、数据 block 已抬起、但第一次 live 读是去杠杆、
              带两根 1h/12h TD9 SELL 在高位、宏观尾信用闸保持不点在它的线下（OAS 2.74%）、
              挤压周期重新武装但安静、200W 地板盯盘是唯一那根 live 结构水位——一根在周收确认破、
              但现已在周收重夺、翻成现货脚下支撑的地板、恢复已印出它第一根结算。价格在周收重夺
              地板、flip 延伸、本子 aggregate 加深多 γ 到这一轮最深、无一根负到期、相关 regime
              守特异、BTC 完全领先 NQ——所以前谱系那根 risk-off / 最差落后读彻底解除；但恢复的
              盘面把重夺读成去杠杆、MTF 引擎在高位闪两根 1h/12h TD9 SELL、宏观在 z-面板上守
              risk-off（利率紧、美元极端）。下一个 24h 的对读是{' '}
              <em>破位-在周收确认、地板-在周收重夺、盘面-回来了并读去杠杆——尊重确认破位与
              恢复的第一根周收、把这一轮最深的多 γ 图与脚下三根 MA 当成一次真结构改善、但权衡
              恢复的盘面把重夺读成短空回补 / 去杠杆而非需求、引擎在高位闪两根超买反转印、并在
              把重夺当成已确认之前、等 live 盘面显示需求（升价上 OI 在建、taker-net 转正）</em>。
            </p>
          </div>
          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计）
            </span>
            <b>状态：</b>这是 <b>v2</b> 稿 —— <b>已过 codex 敌对式审计</b>。它经跨模型敌对式审计
            （codex 为主、掌发布闸门——裁决 PASS-WITH-NOTES、0 CRITICAL / 0 MAJOR / 1 MINOR；
            ask-deepseek 做数值二审——1 CRITICAL / 1 MAJOR / 1 MINOR、每条落实前均按重算逐条
            裁定、依 runbook §5）复核。每条发现均已落实并在整份英文文件上 grep 收口（搜每个关键
            错误声明模式、修掉全部语义变体、重新 grep 至零陈旧残留）。完整裁定见{' '}
            <code>audits/2026-07-07-desk-note.md</code>。{' '}
            <span className="dn-em">
              发现、裁定与 grep 收口（搜索模式——改前命中——改后命中——状态）：{' '}
              <b>DN-001（codex · MINOR——note-count 措辞）：</b>初稿称恢复后的盘面是&ldquo;~19
              篇&rdquo;来第一次 live 读、但本地页面谱系（17 篇冻结已发英文备忘 06-18 → 07-05）与
              431.9h 断线支持的是天数、不是篇数。搜索模式 <code>~19 notes</code> / <code>in
              ~19</code> / <code>note in ~19</code>——改前 12 命中——改后 0——<b>已解决</b>
              （全改为&ldquo;~18 天&rdquo;、与 431.9h 死窗一致；正确日期 06-19 → 07-05 保留）。{' '}
              <b>deepseek CRITICAL（上收计数）：</b>对所列日线收盘重算确认 06-30 $58,605.40 是
              一根<b>下收</b>（低于 06-29 $60,224.70）、所以本轮是<b>六根连阳</b> 07-01 → 07-06、
              非 06-30 → 07-06 的七根——初稿自己的数字（06-30 称&ldquo;最深、−6.45%&rdquo;）与
              七根计数矛盾。搜索模式 <code>seven consecutive up-closes</code> / <code>06-30 →
              07-06</code>——改前 3 命中——改后 0——<b>已解决</b>（全改为六根连阳 07-01 → 07-06）。{' '}
              <b>deepseek MAJOR（SM 侧腿取整）：</b>整数侧变动多 +771 / 空 +781 蕴含 Δnet −10、
              与精确 Δnet −9.67（自上一读 net +2,358.52 → 当前 +2,348.85）矛盾；侧腿是取整值、却
              被当作精确值呈现。搜索模式 <code>+771</code> / <code>+781</code>——改前 3 命中——
              改后 0——<b>已解决</b>（标为近似&ldquo;+~771 / +~781、取整&rdquo;；精确 Δnet −9.67 /
              0.41% 削减是承重数字、不变）。{' '}
              <b>deepseek MINOR（OI 口径）：</b>−2.42% 的 OI 变动是相对<b>上一读</b>的 OI
              （−2,544 / ~105,228）、非当前；在清单首处提及处标注&ldquo;对上一读的 OI&rdquo;
              （meta tile 与 §I 已带&ldquo;对约 24h 前&rdquo;/&ldquo;跨 live 24h 窗&rdquo;）。
              <b>已解决</b>。
            </span>{' '}
            总体：<b>已过 codex 敌对式审计</b>——全部发现已解决（命中后 = 0）、零陈旧残留。构建
            代理：完整 <code>next build</code> 仍受环境阻断（Node v18.19.1 &lt; Next 要求的
            &gt;=20.9.0）；<code>tsc --noEmit</code> 为构建代理、退出 0。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘为迟滞研究内部交易台文档，供机构本人之间讨论之用，{' '}
            <em>非投资建议、非招揽、非要约</em>，亦不针对任何接收者的具体情况定制。数字反映
            单一原子快照（2026-07-07 00:05Z），分区级来源见上方清单带；{' '}
            <em>实时衍生品盘口在 431.9h 断线之后于 2026-07-05 06:38Z <b>恢复</b>，故资金费、
            OI、流向与仓位数字本次为 <b>LIVE</b>（按止于锚的 live 24h 窗读）、~18 天来头一回
            ——第一次 live 读是一个短空回补 / 去杠杆的形、非已确认需求</em>；宏观面板渲染为
            2026-07-06 22:16Z（快照前约 1.82h）。价格、MTF、GEX 与跨资产为新鲜。此为 v2 稿、
            已过 codex 敌对式审计；其数字已裁定、并对整份英文文件 grep 收口（见上方审计痕迹块）。
            所列点位、仓量与条件是本台流程的示意，非常设建议。过往的相关性、γ 与仓位形态不约束
            未来盘口。衍生品有全额亏损风险，若带杠杆则亏损可超出已缴保证金。<em>请自行研判。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                两个头一回、同一方向：live 盘面<b>回来了</b>（07-05 06:38Z 恢复、431.9h 之后）、
                200W 地板在<b>周收</b>重夺了（07-06 $64,023.60、06-29 破位以来第一根周收在上方）
                ——地板台阶抬到 $62,864、脚下三根 MA、庄家账本加深到 +157.8M 净多 γ（本轮最深）、
                近月放大器翻正、无一根负到期、现货 flip 上方 +3.84%。但第一次 live 读是短空回补 /
                去杠杆（OI −2.42% 进 +0.55% 价、taker/CVD 净卖、funding 钉多、retail 缓和、SM
                净持平 / 多）、不是需求、引擎在高位闪两根 1h/12h TD9 SELL。破位已确认。地板在
                周收重夺。盘面回来了。读去杠杆、不是需求。高位两根反转。
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
            v2 · 2026-07-07 00:05Z 快照 · 已过 codex 敌对式审计 ·
            2026-07-07T00:56:12Z · sources: live_db.json（LIVE · 恢复 2026-07-05 06:38Z）·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
