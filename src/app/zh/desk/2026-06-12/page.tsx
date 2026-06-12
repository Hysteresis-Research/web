import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-06-12 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-06-12',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-06-12' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260612() {
  await requireViewer('/zh/desk/2026-06-12');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-06-12 · v2</span>
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
              <span className="dn-big">$63,584</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+3.26%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-06-12 00:05Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘面（spot / perp / OI / SM / funding）</td>
                  <td className="dn-v-cell">live_db.json · 2026-06-12 00:05Z（snapshot pin）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 所有派生值钉到 00:05Z 锚行 · live `t`
                    字段是 BJ 本地（UTC+8）、所以 00:05Z 锚行是
                    <code>06-12 08:05</code> · 此快照落在 11JUN 08:00Z 期权
                    结算后约 16h05m、12JUN 08:00Z 结算前约 7h55m
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + Ichimoku + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-06-12 00:01Z scan</td>
                  <td className="dn-flag">
                    滚动 latest 文件（约每 15 分钟重写）· 较 00:05Z 快照锚
                    滞后约 4 分钟 · 含未收盘 K 线 · author time 存档于
                    <code>/opt/desk-note/snapshots/2026-06-12-0008/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-06-12 00:02Z 快照</td>
                  <td className="dn-flag">
                    pre-settle · 较快照锚滞后约 3 分钟 · Deribit idx $63,769
                    对 live $63,584.00（高 $185）· 984 合约（06-11 是 956、
                    +28）· 12JUN 0.3DTE −5.60M 今日 08:00Z 结算（约 8h 后）·
                    除 12JUN 后 aggregate ≈ +15.3M 仍净正（dashboard-total
                    捷径；显示的行非可加 —— 见盘口本子节）· 存档于
                    <code>/opt/desk-note/snapshots/2026-06-12-0008/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-06-12 00:02Z
                  </td>
                  <td className="dn-flag">滞后约 3 分钟 · 7d 1h bar · 22 资产 · 167 rows · regime NORMAL（均值 |r| 0.377）· 存档于 <code>/opt/desk-note/snapshots/2026-06-12-0008/</code></td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z-score 面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-06-11 22:16Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1h49m · FRED Tier-1 长端走硬（10Y +2bp 到
                    4.55%、TIPS +1bp 到 2.21%）· HY OAS +2bp 到 2.80%（现在
                    在 2.78% re-grow 闸上方）· DXY 100.08（+0.14、重回 100
                    上）· Fed 净流动性 $5.897T（+0.062T、新周度加）· 存档于
                    <code>/opt/desk-note/snapshots/2026-06-12-0008/</code>
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日 / 周 MA 矩阵 + 200W 地板</td>
                  <td className="dn-v-cell">btcusdt_1m parquet · 全历史 + 2024–2026 子集</td>
                  <td className="dn-flag">
                    偏移按 live 现货重算 · 子集 MA 阶梯取 2024–2026 窗（按
                    交易台政策）· 200W 地板读自全历史 parquet（W-MON
                    resample、354 根周 bar）· <code>weekly_200sma.json</code>
                    缺失、所以 200W 直接从 parquet 算、JSON 的百分位 /
                    last-event 字段不可用（未编造）· 子集 W-SMA150 / W-SMA200
                    不可计算（129 根子集周 bar）
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
              <span className="dn-v bear">−1.44%</span>
              <span className="dn-src">live · 快照 −1.44% ann（快照处空付多 live）· 24h 均值 ann +2.60%（06-11 是 −2.41%、翻回 POSITIVE +5.01pt）· 封顶占用 1 / 1442 采样行 坐在最大 +7.26%（正封顶基本空）· 负分钟占比 17.82%（257 / 1442、06-11 是 81.96%、−64.14pt）· 24h 谷 −2.10% ann @ UTC 22:50 06-11 · 24h 峰 +7.26% ann @ UTC 13:48 06-11</span>
            </div>
            <div>
              <span className="dn-k">Δ funding · 24h</span>
              <span className="dn-v bull">均值 −2.41% → +2.60%（+5.01pt）· 快照 −0.48% → −1.44%</span>
              <span className="dn-src">区间 −2.10% / +7.26% ann · funding 在反弹里 NORMALIZED 转正（峰 +7.26% 当多头向上付）、只在最后一腿才重新转负 · 最长负付 streak 245 采样行 / ~4h04m wall-clock（UTC 20:01 06-11 → 00:05 06-12）跑进快照 —— 清 ≥4h 空付 leg-2 闸 AND 快照处 funding 负、所以 leg-2 技术上 LIVE、但这是一根薄的近期重转负、不是 06-11 那种 24h 主导的负</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bear">−1.21%（−1,201 BTC）</span>
              <span className="dn-src">live · 价格涨 +3.26% 而 OI 缩 —— 空头回补签名 · base 99,456（08:05 baseline）→ 98,255 · 24h 峰 103,488 @ UTC 13:22 06-11、谷 98,244 @ UTC 00:02 06-12 · 24h 内 SM short Δ −5,334、long Δ −258</span>
            </div>
            <div>
              <span className="dn-k">retail (mkt) 多/空</span>
              <span className="dn-v bull">61.34 / 38.66</span>
              <span className="dn-src">live_db `mkt_long_pct` · 较 06-11 的 67.92 de-crowd −6.58pt（拥挤多峰终于泄）· 24h 区间 61.32 / 68.01 · 峰 68.01 @ UTC 00:16 06-11、谷 61.32 @ UTC 23:56 06-11（价涨 retail 继续离场）</span>
            </div>
            <div>
              <span className="dn-k">SM net BTC</span>
              <span className="dn-v bear">−37.7k（净 SHORT · 三天压后 FIRST cover）</span>
              <span className="dn-src">live · long 13.53k − short 51.24k · short 谷 51,237 @ UTC 00:01 06-12（回补进快照）、short 峰 57,068 @ UTC 02:01 06-11 · long 峰 16,199 @ UTC 13:46 06-11、long 谷 11,885 @ UTC 07:36 06-11 · net 谷（最空）−43,231 @ UTC 01:11 06-11、net 峰（最不空）−37,705 @ UTC 00:01 06-12</span>
            </div>
            <div>
              <span className="dn-k">SM Δ 对 06-11 备忘</span>
              <span className="dn-v bull">−42.7k → −37.7k（+5,031 回补）</span>
              <span className="dn-src">long −249、short −5,280（两侧独立取整；net +5,031）· |Δ| / prior_net = 11.77%（5,030.69 / 42,736.18）· 三连空加切之后的 FIRST cover —— 空头买回 5,280 BTC 而多头几乎不动</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">45.6% / 42.17%</span>
              <span className="dn-src">GEX IV 中位数横跨 984 合约（06-11 是 48.6% / 956、−3.0pt vol 冷却）· IV/RV 价差 +3.43pt · 30D close-to-close RV 42.17%（30 returns / 31 closes；29-return 另一口径 41.54%）</span>
            </div>
            <div>
              <span className="dn-k">距 0γ flip</span>
              <span className="dn-v">−0.10%（现货）/ +0.19%（idx）—— 跨骑</span>
              <span className="dn-src">flip $63,650（前 $63,480、走 UP +$170）· 对 live 现货 $63,584.00（63,584.00 / 63,650 − 1 = −0.104%、略在下方）/ GEX 文件 idx $63,769（63,769 / 63,650 − 1 = +0.187%、略在上方）—— 两参考 STRADDLE flip；文件自己的 dist-to-flip 读 +0.2% · aggregate GEX +9.7M（前 −69.0M、FLIPPED 净多 γ、一根 +$78.7M 位移）· $60k 崩盘 put LIGHTENED 到 −23.10M（前 −38.65M）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                06-11 在 200W 地板下方点火的那簇 mean-revert 解进了反弹 ——
                一根 +3.26% 的空头回补 rally 重夺地板、翻了 dealer 本子
              </span>
              。现货印
              <span className="dn-tag bull">+3.26% 到 $63,584</span>、一根干净
              的上日（24h 低 <span className="dn-tag">$61,575</span> 在窗开、
              高 <span className="dn-tag">$63,886</span> @ UTC 19:34 06-11）。
              四件事同时翻了。<span className="dn-signal">200W 地板 RECLAIMED</span>
              ：全历史 W-MON 200 周 SMA 是
              <span className="dn-tag">$62,019</span>（200 根已收 bar、截至
              06-08）、live 现货现坐
              <span className="dn-tag bull">+2.52% / +$1,565 在上方</span>
              （06-11 是 −0.59% 在下方）、06-11 日 close
              <span className="dn-tag bull">$63,598</span> —— 自 06-08 以来首根
              重回地板上方的日 close ——、未收盘的 06-15 周 bar 印
              <span className="dn-tag bull">$63,566 = +2.50% 在上方</span>。
              <span className="dn-signal"> dealer 本子 FLIPPED 净多 γ</span>
              ：aggregate GEX 从 <span className="dn-tag bear">−69.0M</span> 走到
              <span className="dn-tag bull">+9.7M</span>（一根 $78.7M 位移）、
              0-γ flip 往上走 <span className="dn-tag">$63,480 → $63,650</span>、
              现货现 <span className="dn-em">跨骑它</span>（live 现货 −0.10%、
              Deribit idx +0.19%）。<span className="dn-signal">SM 在这轮压里
              首次回补</span>：net
              <span className="dn-tag bull">−42.7k → −37.7k（+5,031、空头买回
              5,280 BTC）</span> 在 OI 缩 −1.21% 上 —— 一根教科书式空头回补
              签名。funding
              <span className="dn-em">当日 normalized 转正</span>（24h 均值 ann
              <span className="dn-tag bull">−2.41% → +2.60%</span>）、只在最后
              ~4h 才重转负。对着这根多头向的 BTC 内部转、两道检查：有纪律的
              scout <span className="dn-em">从未触发</span> —— 06-11 给它把关
              的 flip-reclaim 腿已收敛到边界、但行情走成了平 ——、而
              <span className="dn-signal">macro-tail re-grow 现在两腿都 FIRE</span>
              （HY OAS 2.80% &gt; 2.78% AND 10Y 4.55% &gt; 4.53%）、正好在 BTC
              翻上的当口。慢 MTF 周期（8h–3d）仍在云下、每根 MA 都在头顶、
              15m/30m/1h 带顶背离。交易台保持 flat：这是一根进 200W 重夺与
              flip 的空头回补反弹、还不是确认的转向 —— 06-15 周 close 是那根
              二元。
            </p>

            <p>
              BTC 印 <span className="dn-tag">$63,584</span> live、
              <span className="dn-tag bull">+3.26%</span> 在 24h、从窗开低
              <span className="dn-tag">$61,574.52</span> @ UTC 00:05 06-11 到
              高 <span className="dn-tag">$63,885.99</span> @ UTC 19:34 06-11
              —— 一根单边爬、不是来回（06-11 的盘面才是来回；这根 24h 是续
              涨）。1h <span className="dn-tag bull">+0.28%</span>、4h
              <span className="dn-tag bear">−0.07%</span> —— 最后几小时在
              flip/200W 带上停住。
              <span className="dn-signal">承重线仍是 200W 地板、但读法已反转
              成 reclaim-in-progress</span>：W-MON 全历史 200 周 SMA 是
              <span className="dn-tag">$62,019</span>、live 现货
              <span className="dn-tag bull">+2.52% 在上方（$63,584）</span>、
              06-11 日 close $63,598 收在它上方、未收盘的 06-15 周 bar 印
              $63,566 —— 也在上方。按收盘频率读、
              <span className="dn-tag">8 / 154 根周 close（5.19%）</span> 印在
              各自同期 200W 下方 —— 正是盘面一直在测的那个低基率位置、但盘面
              现在已经周内爬回线上。
              <span className="dn-em">
                200W 仍是承重线：06-15 周 close 重回 $62,019 上方就在唯一对
                周期读法重要的周期上重夺地板 —— 未收盘 bar 以 +2.50% 在上方
                往那个方向偏、但在 06-15 W-MON close 前是临时的。一根收在下方
                仍会确认 post-06-08 floor-watch 谱系首根持续的周-200W 破位
                （上一根全历史 below-own-200W close 是 2023-10-09）；反弹把它
                变成低概率结局、不是不可能。
              </span>{' '}
              日 close 谱系现在显示重夺：06-08 $63,058（上）、06-09 $61,695
              （下）、06-10 $61,484 FINAL（下）、06-11 $63,598 FINAL（重回
              上方）、06-12 未收盘 $63,566（上）—— 一根已收日 close 重回地板
              上方（06-11）外加 06-12 bar 在进行中也在上方、在 06-09/06-10
              那两根 close 破位之后。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘面 · SM 在压里首次 COVERED（+5,031、空 −5,280）· OI 在 +3.26% 上日里缩 —— 空头回补签名 · retail de-crowd −6.58pt · funding 盘中 normalized 转正</span>
            </h2>

            <p>
              <span className="dn-signal">
                Smart money 在三天压里首次回补
              </span>
              。SM net 是 <span className="dn-tag bull">−37,705</span>、对 06-11
              备忘的 −42,736 —— 那是
              <span className="dn-em">+5,031 更不空</span>
              （|−37,705 − (−42,736)| / 42,736 = 11.77%）。分量：long_btc
              <span className="dn-tag">13,781 → 13,531（−249）</span>、short_btc
              <span className="dn-tag bull">56,517 → 51,237（−5,280）</span> ——
              一根近纯空头回补、多侧几乎不动（分量从精确 long 13,780.700 →
              13,531.418、short 56,516.884 → 51,236.916 独立取整；net Δ
              +5,030.686 —— 不要去差取整端点）。三连空加切之后（06-10 −2,740、
              06-11 −1,338、两根都加空）、本子翻了、在这一切里买回 5,280 BTC
              的空。short_btc 峰
              <span className="dn-tag bear">57,068 @ 2026-06-11 02:01Z</span> 在
              窗早段、此后一路泄到
              <span className="dn-tag bull">51,237 @ UTC 00:01 06-12</span>
              （快照是回补低）。SM net 谷（最空）
              <span className="dn-tag bear">−43,231 @ 2026-06-11 01:11Z</span>；
              net 峰（最不空）−37,705 正好在快照。long_btc 摆得宽 —— 谷 11,885
              @ UTC 07:36 06-11、峰 16,199 @ UTC 13:46 06-11 —— 但 net 回到近
              平。三天空头压以一根回补收尾；问题是这是 one-cut 挤压还是一根
              真正 unwind 的开端。
            </p>

            <p>
              <span className="dn-signal">
                OI 在价格 rally 时缩 —— 这一切里最干净的空头回补 tell
              </span>
              。OI Δ <span className="dn-tag bear">−1,201 BTC / −1.21%</span> 跨
              24h（base 99,456 在 08:05 baseline → 98,255）、即便现货跑
              +3.26%；24h 峰 103,488 @ UTC 13:22 06-11（仓位在首腿上堆）、谷
              98,244 @ UTC 00:02 06-12（进快照去杠杆）。
              <span className="dn-em">价涨 + OI 降 = 回补 rally、不是新堆多</span>
              —— 与上面 SM 空头回补一致。retail
              <span className="dn-tag bull">mkt_long_pct 61.34%</span> 从 67.92%
              —— 一根 −6.58pt de-crowd、拥挤多峰终于泄（24h 区间 61.32 /
              68.01、谷 61.32 @ UTC 23:56 06-11 —— 价涨 retail 继续离场）。
              funding 的位移是更微妙的 tell：
              <span className="dn-em">24h 均值从 −2.41% 翻到 +2.60% ann、当
              多头向 rally 付费（峰 +7.26% @ UTC 13:48 06-11）、只有最后 ~4h
              重新转空付（快照 −1.44% ann）</span>、封顶占用
              <span className="dn-tag">1 / 1442 坐在最大 +7.26%</span>、负分钟
              占比 <span className="dn-tag bull">17.82%（257 / 1442）</span> 较
              81.96% 降 −64.14pt。最长负付 streak 是
              <span className="dn-tag">245 采样行 / ~4h04m wall-clock（UTC
              20:01 06-11 → 00:05 06-12）</span>、仍 RE-CLEARS mean-revert
              scout 的 ≥4h 空付 leg-2 闸、且快照处 funding 负 ——
              <span className="dn-em">但不像 06-11 那种 24h 主导的负（81.96%
              的分钟）、这是正 funding 日之后一根薄的近期重转负、所以 leg-2
              技术上 live 但作为 mean-revert 信号实质更弱</span>。funding 在
              价涨时 normalize 是挤压在走完、不是新的过供 carry。
            </p>

            <p>
              窗口流向是<em>一根现货领的空头回补 rally、最后一小时在 perp 上
              加杠杆</em>。24h：价格
              <span className="dn-tag bull">+3.26%</span>、OI
              <span className="dn-tag bear">−1,201 BTC</span>、现货 CVD
              <span className="dn-tag bull">Δ +1,228</span>
              <span className="dn-em">（跨 UTC 06:15 06-11 cb_cvd reset 调整后：
              (2,866.4 − 1,581.7) + (29.9 − 86.6) = +1,228.0；未调原始读
              −1,551.8）</span>、期货 CVD
              <span className="dn-tag">Δ +98</span>（经 reset-robust taker-net
              和）、大单 <span className="dn-tag bull">+654 BTC / 580 笔</span>、
              taker-net <span className="dn-tag bull">+98</span> ——
              <span className="dn-em">
                现货 CVD 强正（+1,228）配期货 CVD 仅温和正（+98）且 OI 缩、
                是一根现货领回补签名：从 $61,575 窗开的反弹是在现货里被买、
                在 perp 里被回补、不是加杠杆做多
              </span>
              。4h（进快照）：价格
              <span className="dn-tag bear">−0.07%</span>、OI
              <span className="dn-tag bull">−991 BTC</span>、现货 CVD
              <span className="dn-tag">Δ +34</span>、期货 CVD
              <span className="dn-tag bull">Δ +252</span>、大单
              <span className="dn-tag bear">−32 BTC / </span> taker-net
              <span className="dn-tag bull">+252</span> ——
              <em>价平而 OI 仍在落、期货买盘 —— flip 上继续 de-grossing</em>。
              1h：价格 <span className="dn-tag bull">+0.28%</span>、OI
              <span className="dn-tag bull">−480 BTC</span>、现货 CVD
              <span className="dn-tag bear">Δ −149</span>、期货 CVD
              <span className="dn-tag bull">Δ +373</span>、大单
              <span className="dn-tag bull">+15 BTC</span>、taker-net
              <span className="dn-tag bull">+373</span> ——
              <em>期货买盘配现货卖盘、OI 仍在降 —— 最后一推是 perp 领的进
              flip 回补</em>。perp 在快照对现货交
              <span className="dn-tag bear">−$65.75 折价</span>（1h 均 −$64.17、
              区间 −$110.28 / −$4.42；4h 均 −$61.21、区间 −$110.28 / +$19.58；
              24h 均 −$71.23、区间 −$339.74 / +$19.58 —— basis 在整轮 rally
              里多数时间为折价、那根深 −$339.74 的印落在早段近低位）。1 分钟
              aggressor skew 快照 <span className="dn-tag">−0.1</span>（1h 均
              +4.50、区间 −19.1 / +32.2）—— 进快照中性的攻击者平衡、rally 的
              买反射已经用掉。
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 图 · 引擎周期重夺到云上（15m/30m/1h）配 RSI 硬抬 · 慢周期（8h–3d）仍云下但离开了底 · 3d ⚡ TD9 BUY 仍活、1M Buy 8→9? 待定 · 盘中顶背离警告反弹拉伸</span>
            </h2>

            <p>
              <span className="dn-signal">
                引擎周期重夺云上、RSI 全面抬、但慢周期仍在云下
              </span>
              。盘中那一组翻上 Ichimoku 云：
              <span className="dn-tag bull">1h 云上 21b（RSI 63.0、水上金叉
              7b）</span>、30m 云上 48b（RSI 60.2）、15m 云上 27b（RSI
              57.4）—— 三根都回到 50 中位线上。4h 坐
              <span className="dn-tag">云内 5b（$62.3k–$66.7k、RSI 56.3、水下
              金叉 9b）</span> —— 跨骑。慢端仍重但在恢复：8h
              <span className="dn-tag bear">云下 81b</span>（RSI 48.0、自 06-11
              的 36.4 抬）、12h 云下 41b（RSI 40.8、自 29.3 抬）、1d 云下 11b
              （RSI 33.0、离开 24.3 深超卖低）、3d 云下 3b（RSI 35.3）。RSI
              抬得齐：1d 24.3 → 33.0、12h 29.3 → 40.8、8h 36.4 → 48.0、4h
              44.5 → 56.3、1h 46.7 → 63.0。TD 读
              <span className="dn-em">收窄</span>了：
              <span className="dn-tag bull">3d ⚡ TD9 BUY 仍活</span>、1M 带一根
              Buy 8 → 9? 待定、但 06-11 还在 Buy 8 → 9? 待定的 1h 滚到
              <span className="dn-tag">Sell 3</span>、反弹把那根 count 消化掉
              —— 中段周期（4h Sell 7、8h Sell 5、12h Sell 3、1d Sell 4）都在
              上移里翻成 sell setup。头部告警标
              <span className="dn-tag bear">15m / 30m / 1h 顶背离</span> 和
              15m / 1h 底背离。
              <span className="dn-em">
                直读：引擎已确认反弹（盘中云上、RSI 重夺）、慢周期超卖恢复但
                还没翻（8h–3d 仍云下）、唯一的结构性买是 3d TD9（06-11 那簇
                broadened 的随反弹走完盘中 count 而收窄）、快周期新鲜的顶背离
                警告反弹进 flip 短期拉伸。这是一根引擎确认的缓和反弹、套在一
                根还没翻的慢周期破位里。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>RSI</th><th>MACD 交叉</th><th>云（Ichimoku）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num bull">57.4</td><td className="neut">死叉（水上）14b</td><td className="bull">云上 ↓62.9k 27b</td><td>Sell 3</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num bull">60.2</td><td className="neut">死叉（水上）2b</td><td className="bull">云上 ↓62.5k 48b</td><td>Sell 2</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>1h</td><td className="num bull">63.0</td><td className="bull">金叉（水上）7b</td><td className="bull">云上 ↓62.3k 21b</td><td>Sell 3</td><td>BEAR hid · BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>4h</td><td className="num bull">56.3</td><td className="bull">金叉（水下）9b</td><td className="neut">云内 62.3–66.7k 5b</td><td>Sell 7</td><td>BEAR hid · BULL hid</td></tr>
                <tr><td>8h</td><td className="num">48.0</td><td className="bull">金叉（水下）14b</td><td className="bear">云下 ↑70.7k 81b</td><td>Sell 5</td><td>BEAR hid</td></tr>
                <tr><td>12h</td><td className="num bull">40.8</td><td className="bull">金叉（水下）7b</td><td className="bear">云下 ↑75.4k 41b</td><td>Sell 3</td><td>BEAR hid</td></tr>
                <tr><td>1d</td><td className="num bull">33.0</td><td className="neut">—</td><td className="bear">云下 ↑73.9k 11b</td><td>Sell 4</td><td>BEAR hid</td></tr>
                <tr><td>3d</td><td className="num bull">35.3</td><td className="neut">死叉（水上）5b</td><td className="bear">云下 ↑74.2k 3b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr><td>1w</td><td className="num bull">34.6</td><td className="neut">—</td><td className="bear">云下 ↑100.3k 19b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1M</td><td className="num">42.7</td><td className="neut">—（DIF 在水上）</td><td className="bull">云上 ↓46.9k 28b</td><td>Buy 8 → 9?</td><td>—</td></tr>
                <tr>
                  <td colSpan={6} className="note">
                    来源：mtf_div_latest.html 00:01Z scan（滚动 latest 文件；
                    author time 存档于
                    <code>/opt/desk-note/snapshots/2026-06-12-0008/</code>）。
                    头部告警：<em>3d ⚡ TD9 BUY 活</em>、<em>1M TD Buy 8 → 9?
                    待定</em>、<em>顶背离 15m / 30m / 1h</em>、<em>底背离 15m /
                    1h</em>。净读：<em>高 TF 偏空 · 短期反弹（10 周期里 2 多 /
                    5 空 / 3 中性）</em>。扫描现货 $63,569、24h +3.28%（00:01Z
                    扫描；live-tape 头部 00:05Z 在同一 24h 窗读 +3.26% ——
                    约 4 分钟差导致偏差）、24h H/L $63,915 / $61,536、qVol
                    $12.22B。收盘为未收盘 K 线；每个值在各 TF 收盘前都按临时
                    处理。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵仍一致地在头顶 —— 反弹收了缺口但没重夺任何一根日 MA。
              现货 $63,584 坐在每根日 MA 下方：最近头顶是
              <span className="dn-tag bear">D-EMA20 $67,134（−5.29%）</span>、
              然后 <span className="dn-tag bear">D-SMA20 $68,191（−6.76%）</span>、
              <span className="dn-tag bear">D-EMA50 $71,354（−10.89%）</span>、
              <span className="dn-tag bear">D-SMA100 $72,713（−12.55%、周期
              锚）</span>、
              <span className="dn-tag bear">D-EMA100 $73,779（−13.82%）</span>、
              <span className="dn-tag bear">D-SMA150 $73,935（−14.00%）</span>、
              <span className="dn-tag bear">D-SMA50 $74,434（−14.58%）</span>、
              <span className="dn-tag bear">D-EMA150 $76,452（−16.83%）</span>、
              <span className="dn-tag bear">D-SMA200 $77,883（−18.36%）</span>、
              <span className="dn-tag bear">D-EMA200 $79,073（−19.59%）</span>。
              周期锚 D-SMA100 在头顶 −12.55%（06-11 是 −15.30% —— 反弹收了
              ~2.8pt 缺口但没重夺）。子集周线阶梯同样在头顶：W-SMA20 $72,104
              （−11.82%）、W-EMA20 $75,367（−15.63%）、W-EMA100 $82,691
              （−23.11%）、W-EMA50 $83,400（−23.76%）、W-SMA100 $88,534
              （−28.18%）、W-SMA50 $91,818（−30.75%）；子集 W-EMA150 $78,097
              （−18.58% 种子）、W-EMA200 $73,768（−13.81% 种子）；子集
              W-SMA150 / W-SMA200 在 129 根子集周 bar 下不可计算。
              <span className="dn-signal">
                翻了的那条结构线是全历史 200W 地板
              </span>
              ：全历史 W-MON 200 周 SMA
              <span className="dn-tag">$62,019</span>（200 根已收 bar、截至
              06-08）、live 现货
              <span className="dn-tag bull">+2.52% / +$1,565 在上方</span>
              （06-11 是 −0.59% 在下方）、未收盘 06-15 周 bar 1 分钟 close
              <span className="dn-tag bull">$63,566（+2.50% 在上方）</span>、
              上一根已收周线（06-08）$63,058 现已成历史、在 +1.68% 上方。
              周-close-below-own-200W 频率 8 / 154 = 5.19%。
              <span className="dn-em">
                MA 锚自 btcusdt_1m parquet（子集阶梯取 2024–2026 窗、按交易台
                政策；200W 取全历史 W-MON resample、354 根周 bar）；偏移按
                live 现货 $63,584.00 重算（parquet 锚行 00:06Z close
                $63,566.10、gap $17.90）。<code>weekly_200sma.json</code>
                precompute 缺失、所以 200W 直接从 parquet 算、JSON 百分位 /
                last-event 字段不可用（未编造）。日 close：06-08 $63,058
                （上）、06-09 $61,695（下）、06-10 $61,484 FINAL（下）、
                06-11 $63,598 FINAL（重回上方）、06-12 未收盘 $63,566（上）
                —— 一根已收日 close 重回 200W 上方（06-11）外加 06-12 bar
                在进行中也在上方、在 06-09/06-10 那两根 close 破位之后。30D
                RV 42.17%。
              </span>
            </p>

            <h2 className="dn-sec">
              盘口本子 <span className="dn-roman">III · 本子 FLIPPED 净多 γ aggregate +9.7M（前 −69.0M）· flip 往上走到 $63,650（现货 STRADDLES 它）· $60k 崩盘 put 再 LIGHTENED 到 −23.10M（连续第 2 次松）· 12JUN −5.60M 约 8h 内结算 · 26JUN −19.81M 最重负</span>
            </h2>

            <p>
              <span className="dn-signal">
                dealer 本子在反弹里翻了 γ 符号 —— 从深空 γ 到略净多 γ
              </span>
              。aggregate GEX 是
              <span className="dn-tag bull">+9.7M / 1%</span>（06-11 是 −69.0M
              —— 一根 $78.7M 正向位移）；本子现在净多 γ（阻尼）、不再是不稳。
              0-γ flip 往上走 <span className="dn-tag">$63,480 → $63,650
              （+$170）</span>、现货 $63,584
              <span className="dn-em">跨骑它</span>：现货口径现货在下方 −0.10%
              （63,584.00 / 63,650 − 1 = −0.104%）、而 GEX 文件自己的
              dist-to-flip 读 +0.2%、对它的 Deribit idx $63,769（高 live 现货
              $185）算 <span className="dn-tag bull">+0.19%</span>（63,769 /
              63,650 − 1 = +0.187%）—— <span className="dn-em">两参考跨骑
              flip、相反符号差一根零点几个百分点</span>；flip 坐在 live 现货
              与 Deribit idx 之间。墙图仍由 $60k 崩盘 put 领、但它连续第二刀
              松：<span className="dn-tag bear">$60k −23.10M</span>（从 −38.65M
              LIGHTENED、+$15.55M —— magnet 在价格 24h 守在它上方后 unwind）、
              <span className="dn-tag bull">$80k +11.25M</span>（最重正墙）、
              <span className="dn-tag bear">$62k −9.56M</span>、
              <span className="dn-tag bear">$64k −9.53M</span>、
              <span className="dn-tag bear">$55k −7.01M</span>、
              <span className="dn-tag bull">$70k +6.49M</span>、
              <span className="dn-tag bull">$67k +6.24M</span>、
              <span className="dn-tag bull">$63.5k +5.58M</span>、
              <span className="dn-tag bull">$64.5k +5.57M</span>、
              <span className="dn-tag bear">$50k −5.45M</span>。
              <span className="dn-em">
                $60k strike 现已在两刀里把负权重砍半（−47.86M → −38.65M →
                −23.10M）、随价格爬离它；近现货 strike $63.5k / $64.5k 带小正
                墙夹住 flip、而 $62k / $64k 维持适度负 —— 围绕现货一本大致
                平衡的本子、与 +9.7M 净多 γ aggregate 一致。
              </span>{' '}
              按到期、strip 是混合、不像 06-11 那样一致负：
              <span className="dn-tag bear">12JUN 0.3 −5.60M</span> 今日 08:00Z
              结算（约 8h 后）、13JUN 1.3 +3.59M、14JUN 2.3 +0.96M、15JUN 3.3
              +1.49M、19JUN 7.3 +2.50M、
              <span className="dn-tag bear">26JUN 14.3 −19.81M</span>（月度、
              最重负）、3JUL 21.3 −0.06M、
              <span className="dn-tag bull">31JUL 49.3 +11.60M</span>、28AUG
              77.3 +2.37M、25SEP 105.3 +1.79M、25DEC 196.3 +3.85M、26MAR27
              287.3 +0.59M。12JUN 结算后、除 12JUN 后 aggregate 约 +9.7M −
              (−5.60M) = +15.3M、前段负块清掉后更净正。
              <span className="dn-em">
                注意：这根 aggregate 捷径用 dashboard total（+9.7M）；上面取整
                的显示到期行合计 +3.27M、所以 by-expiry 列表与 dashboard total
                内部非可加约 6.4M —— +9.7M dashboard total 为准、不要单从行
                列表重建 aggregate。
              </span>{' '}
              <span className="dn-em">
                26JUN −19.81M 月度是 strip 里剩下的那一块重负；若价格守在 flip
                上方进六月下旬、它会放大一根 fade、但在 +9.7M 净的水平、本子
                不再是它在 −69.0M 时的下腿放大器。
              </span>
            </p>

            <p>
              IV 中位数横跨 984 合约是
              <span className="dn-tag">45.6%</span>（06-11 是 48.6% / 956 合约
              —— 一根 −3.0pt vol 冷却、+28 合约）对 30D close-to-close RV
              <span className="dn-tag">42.17%</span> —— 链级 richness
              <span className="dn-tag">+3.43pt</span>（从 06-11 的 +9.01pt 收窄、
              随实现波在反弹里追上隐含）。一根 N 合约的链中位数、
              <span className="dn-em">不是</span>可交易价差；expiry- /
              strike-level vega、skew、期限结构仍未载入、vol 读法保持 framework
              only。RV 方法：30D close-to-close、logret.std × √365 × 100、用
              最末 30 根日 log return（= 31 根连续日 close）锚自 parquet 最末
              bar（窗 2026-05-13 → 06-12）；最末 29-returns / 30-closes 另一
              口径读 41.54%、页面值 42.17% 来自 30 returns。IV 冷却到 45.6%
              对实现 42.17% 是一根薄溢价 —— 撑过破位的 vol bid 随反弹确认在
              泄、与 γ 翻阻尼一致。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · Tier-1 长端走硬（10Y +2bp 到 4.55%、TIPS +1bp 到 2.21%）· reclaim-long 利率筛（10Y &lt; 4.55%）现在 AT 边界（06-11 的 re-clear 没了）· macro-tail re-grow 两腿都 FIRE（HY OAS 2.80% &gt; 2.78% AND 10Y 4.55% &gt; 4.53%）· 跨资产 NORMAL、BTC 是最强风险资产（+0.32% 7d）</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观面这刀长端走硬 —— 利率和美元都回升、un-clear 了
                reclaim-long 筛、点火了两根 macro-tail re-grow 腿
              </span>
              。面板渲染 2026-06-11 22:16Z、比快照早约 1h49m。US 10Y nominal
              <span className="dn-tag bear">4.55%（+2.0bp）</span>、regime z
              <span className="dn-tag bear">+2.05</span>、偶发 z
              <span className="dn-tag">+0.85</span> —— z 上 EXTREME RISK-OFF、
              reclaim-long 利率筛（10Y &lt; 4.55%）现在
              <span className="dn-tag bear">AT 4.55% 边界</span>（06-11 在 4.53%
              的 re-clear 没了；4.55% 不 &lt; 4.55%、所以干净的 clear 失效）。
              10Y TIPS real <span className="dn-tag bear">2.21%（+1.0bp）</span>、
              regime z <span className="dn-tag bear">+2.54</span>、偶发 z
              <span className="dn-tag bear">+1.52</span> —— EXTREME RISK-OFF。
              5Y5Y BE 通胀 <span className="dn-tag">2.24%（+2.0bp）</span>。HY OAS
              <span className="dn-tag bear">2.80%（+2.0bp）</span>、regime z
              <span className="dn-tag">−0.71</span>、偶发 z
              <span className="dn-tag">+0.83</span> —— 仍松、但现在
              <span className="dn-em">在 2.78% re-grow 闸上方</span>（06-11 是
              AT 闸）。MOVE 债波 <span className="dn-tag">73.9（−3.08）</span>
              —— 中性、对 06-11 渲染不变。抵消项走硬：DXY
              <span className="dn-tag bear">100.08（+0.14）</span>、regime z
              +1.75、偶发 z +1.64 —— RISK-OFF、重回 100 上；Fed 净流动性
              <span className="dn-tag bull">$5.897T（+0.062T）</span>、偶发 z
              +2.47 —— 一根新鲜周度印 ADDING 流动性。USD/JPY
              <span className="dn-tag">160.52（+0.13）</span>；US-JP 10Y 利差
              <span className="dn-tag">2.03%（+2.0bp）</span>、紧；USD/CNY
              6.7771；10Y breakeven 2.34%（+1.0bp）；NFCI −0.506 中性。
              <span className="dn-em">
                净：长端在 BTC 反弹里走硬、reclaim-long 利率筛失效回到 4.55%
                边界、而且 —— 关键条件变化 —— macro-tail re-grow 现在两腿都
                FIRE：HY OAS 走硬到 2.80%（干净 &gt; 2.78%）AND 10Y 走硬到
                4.55%（干净 &gt; 4.53%）。框架要求两腿都干净印在上方、现在有
                了。这正好在 BTC 内部翻上的当口、武装一根进 19JUN / 26JUN
                forward 的 put-spread re-grow —— 宏观面与 BTC 内部面这刀拉
                反方向。
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
                <tr><td>US 10Y nominal</td><td className="num">4.55%</td><td className="num bear">+2.0bp</td><td className="num bear">+2.05</td><td className="num">+0.85</td><td className="bear">EXTREME RISK-OFF z · 筛 AT 边界</td></tr>
                <tr><td>10Y TIPS real</td><td className="num">2.21%</td><td className="num bear">+1.0bp</td><td className="num bear">+2.54</td><td className="num bear">+1.52</td><td className="bear">EXTREME RISK-OFF z</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.24%</td><td className="num bear">+2.0bp</td><td className="num">+0.09</td><td className="num">−0.76</td><td className="neut">无标</td></tr>
                <tr><td>HY OAS</td><td className="num">2.80%</td><td className="num bear">+2.0bp</td><td className="num">−0.71</td><td className="num">+0.83</td><td className="bear">松 · 在 2.78% re-grow 闸上方</td></tr>
                <tr><td>Chicago Fed NFCI</td><td className="num">−0.506</td><td className="num">0.00</td><td className="num">+0.19</td><td className="num">−0.73</td><td className="neut">中性</td></tr>
                <tr><td>MOVE 债波</td><td className="num">73.9</td><td className="num">−3.08</td><td className="num">−0.19</td><td className="num">−0.12</td><td className="neut">中性 · 渲染不变</td></tr>
                <tr><td>DXY</td><td className="num">100.08</td><td className="num bear">+0.14</td><td className="num bear">+1.75</td><td className="num bear">+1.64</td><td className="bear">RISK-OFF · 重回 100 上</td></tr>
                <tr><td>Fed 净流动性</td><td className="num">$5.897T</td><td className="num bull">+0.062T</td><td className="num">+0.82</td><td className="num bull">+2.47</td><td className="bull">新鲜周度加</td></tr>
                <tr><td>USD/JPY</td><td className="num">160.52</td><td className="num">+0.13</td><td className="num bear">+1.38</td><td className="num">+1.47</td><td className="neut">平</td></tr>
                <tr><td>US-JP 10Y 利差</td><td className="num">2.03%</td><td className="num bear">+2.0bp</td><td className="num">−0.61</td><td className="num">+0.85</td><td className="neut">紧</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7771</td><td className="num">+0.00</td><td className="num bull">−1.70</td><td className="num">−0.73</td><td className="neut">松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.52%</td><td className="num stale">+17.0bp（月度）</td><td className="num bear">+2.55</td><td className="num">+1.36</td><td className="stale">月度 · 不依赖</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗、22 资产、167 rows、汇总 00:02Z ——
              <span className="dn-em">一道 7 天滚动读、不是当天</span>）。
              非对角线均值 <span className="dn-tag">|r| 0.377</span>
              <span className="dn-signal">regime NORMAL</span>（06-11 是 0.318、
              走硬 +0.059、守在 NORMAL 带）—— 一道宽的相关读。BTC 列出的顶级
              对齐：TSLA <span className="dn-tag">+0.457</span>、SILVER
              <span className="dn-tag">+0.429</span>、NVDA
              <span className="dn-tag">+0.424</span>、SP500
              <span className="dn-tag">+0.412</span>、NQ
              <span className="dn-tag">+0.405</span>、COPPER
              <span className="dn-tag">+0.403</span>、GOLD
              <span className="dn-tag">+0.402</span>、PLAT
              <span className="dn-tag">+0.393</span>、META
              <span className="dn-tag">+0.393</span>、MSFT
              <span className="dn-tag">+0.376</span>。
              <span className="dn-signal">变化是 BTC 的相对表现</span>：7d
              <span className="dn-tag bull">BTC +0.32%</span> 现在是板上最强的
              风险资产 —— 只有 JP225 +0.07% 和 JPY +0.11% 也绿；其余全红。BTC
              OUTPERFORMS NQ <span className="dn-tag bear">−1.89%</span> 达
              +2.21pt（06-11 是 +4.08pt outperformance；BTC 现在已转为纯正、
              而 NQ 随 7d 窗滚过反弹仍守着它的亏）。其余 7d sweep：SP500
              <span className="dn-tag bear">−1.88%</span>、NVDA −4.13%、META
              −7.73%、AAPL −4.80%、MSFT −7.66%、GOOGL −1.88%、AMZN −3.97%、
              TSLA −3.42%。金属仍挨打：SILVER
              <span className="dn-tag bear">−8.04%</span>、PLAT
              <span className="dn-tag bear">−8.07%</span>、URNM
              <span className="dn-tag bear">−9.61%</span>、GOLD −5.41%、PALL
              −1.66%、COPPER −0.47%。能源：CL −8.22%、BRENT −7.30%、NGAS
              −6.56%。FX：EUR −0.35%、JPY +0.11%。
              <span className="dn-em">
                BTC +0.32% vs NQ −1.89% 是一根 +2.21pt outperformance、且 BTC
                现在是一根仍 NORMAL 的宽 risk-off 里单一最强风险资产 ——
                TradFi（科技、金属、能源）在 7d 上一致红、而 BTC 弹回到平。
                相关性走硬进 NORMAL 带、所以这是 BTC 在一根市场范围的去风险
                里领跑、不是脱钩；7d 窗现在捕到反弹、那正是翻 BTC 符号转正的
                东西。
              </span>{' '}
              JGB 月度 2.52% 陈旧 —— 不依赖。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 200W 周期地板观察（主仓、现已周内 RECLAIMED、06-15 close 是二元）· mean-revert 多 scout —— flip 腿收敛到边界但反弹走成平（未触发）· macro 尾 re-grow 两腿都 FIRE · 挤压周期敌对-2 观察名单（压以一根回补收尾）· 交易台 flat</span>
            </h2>

            <p>
              <span className="dn-signal">
                交易台 flat；06-11 备忘在地板下方点的那根 mean-revert 反弹走完
                了 —— 而有纪律的 scout 从未触发
              </span>
              。06-11 备忘没带 live 仓位；没有任何东西开进这快照、所以 +3.26%
              反弹是被看着、不是被交易。这是诚实的记分卡：06-11 scout 被门在
              1h 收上 flip（$63,480）上、那时它在头顶 −2.88%；flip 腿是那根
              约束性的 holdout、行情在它清掉前跑了、flip 此后往上走到 $63,650、
              现货跨骑它。地板观察周内解成多头（现货 +2.52% 在 $62,019 上方、
              06-11 日 close $63,598 在上方、未收盘 06-15 周 bar $63,566 在上
              方）、dealer 本子翻到 +9.7M 净多 γ、SM 回补、funding normalize、
              BTC 是 7d 板上最强风险资产。<em>但行情在没有确认入场的情况下发生、
              每根 MA 仍在头顶、慢 MTF 周期仍云下、盘中带顶背离、且 macro-tail
              re-grow 现在两腿都 fire 进反弹。</em>不追：scout 是一根确认交易、
              不是预判交易、而确认（一根干净的 1h 收上 flip 配 200W 在周 close
              上重夺）正好在边界但还没盖章。等 06-15 周 close 和一根干净的 flip
              重夺、再投规模。
            </p>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 主仓 · 200W 周期地板观察 · 周内 RECLAIMED：现货 +2.52% 在上方、06-11 日 close $63,598 在上方、未收盘 06-15 周 bar $63,566 在上方</span>
              <div className="dn-trade-name">
                200W 周期地板观察 —— 周内重夺：现货 +2.52% 在 $62,019 上方、06-11 日 close $63,598 在上方、未收盘 06-15 周 bar $63,566 在上方；06-15 周 close 是二元
              </div>
              <div className="dn-thesis">
                06-09/06-10 破位把两根日 close 放在地板下；06-11 盘面把它拿了
                回来。现货 +3.26% 到 $63,584 爬到 200W $62,019 上方 +2.52%、
                06-11 日 close $63,598 是自 06-08 以来首根重回地板上方的日
                close、未收盘 06-15 W-MON 周 bar 印 $63,566 = +2.50% 在上方。
                全历史 200 周 SMA 是 $62,019（200 根已收 bar、截至 06-08）；
                周-close-below-own-200W 频率是 8 / 154 = 5.19% —— 一个低基率
                位置、盘面现已周内爬出。唯一解的事件仍是 06-15 周 close：一根
                收在 $62,019 上方确认重夺（post-06-08 谱系一周 dip-and-reclaim）、
                一根收在下方仍会确认当前 post-06-08 floor-watch 谱系首根持续的
                周-200W 破位 —— 反弹把重夺变成更高概率结局、但没盖章。状态：
                <em>观察开、重夺进行中、无仓位</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">200W 地板（全历史 W-MON）</span><span className="dn-lvl-v">$62,019 · 200 根已收 bar、截至 06-08 · live 现货 +2.52% / +$1,565 在上方</span></div>
                <div><span className="dn-lvl-k">未收盘周线（06-15）</span><span className="dn-lvl-v bull">1m-close $63,566 = +2.50% / +$1,547 在 200W 上方 —— 在 06-15 W-MON close 前是临时的</span></div>
                <div><span className="dn-lvl-k">重夺确认（多头）</span><span className="dn-lvl-v bull">06-15 周 close &gt; $62,019 —— 确认地板重夺、post-06-08 谱系一周 dip-and-reclaim；在确认转向上重开 scout-long 案</span></div>
                <div><span className="dn-lvl-k">破位确认（空头）</span><span className="dn-lvl-v bear">06-15 周 close &lt; $62,019 —— 当前 post-06-08 floor-watch 谱系首根周 close 破 200W（上一根全历史 below-own-200W close 是 2023-10-09）；周内重夺后现在是低概率路径</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>200W 是一条周-close 线、不是盘中位 —— 现货
                +2.52% 在上方、未收盘 bar +2.50% 在上方都不解它；只有 06-15
                W-MON close 解。一根已收日 close（06-11 $63,598）外加 06-12
                未收盘 bar（$63,566）坐在地板上方；把下一根周 close 当二元、把
                12JUN 08:00Z 结算和日-close 谱系当中间 tell 读。周内重夺移动了
                赔率、不关掉这单。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · scout · NON-ACTIONABLE · flip 腿收敛到边界 · 簇收窄 · 反弹走成未触发</span>
              <div className="dn-trade-name">
                Mean-revert 多 scout —— 未触发：反弹在 flip 腿清掉前跑了；flip $63,650 现被跨骑（−0.10% 现货 / +0.19% idx）、TD9 簇收窄到孤零零的 3d、funding leg-2 live 但更弱
              </div>
              <div className="dn-thesis">
                scout 是一根三腿门：(1) 一簇 TD9-BUY、(2) 一根 funding 空付
                ≥4h 连续 streak、(3) 一根 1h 收上 0-γ flip。06-11 leg 1 和 2
                推进了但 leg 3 是约束性 holdout、在 flip 下方 −2.88%；有纪律
                的姿态是等 flip 重夺。反弹随后跑了 +3.26% —— 穿过 flip 区 ——
                而 scout 从未变得 actionable。这快照上各腿读：Leg 1 NARROWED ——
                3d ⚡ TD9 BUY 仍活、但 06-11 还在 Buy 8 → 9? 待定的 1h 随反弹
                消化 count 滚到 Sell 3；只剩 1M（Buy 8 → 9?）待定、所以簇是
                变薄而非确认。Leg 2 在 ≥4h 闸上仍 LIVE（245-row / ~4h04m 负
                streak 进快照、funding 快照 −1.44%）但实质更弱 —— 24h funding
                均值翻正（+2.60%）当多头向 rally 付、所以这是一根薄的近期重
                转负、不是 24h 主导的空付。Leg 3 从 −2.88% 收敛到边界：现货在
                flip 下方 −0.10%（live 读）、idx 上方 +0.19% —— 跨骑、不是干净
                清掉。净：各腿收敛进 trigger 区、但 scout 设计要抓的那根行情
                已经发生、一根干净的 1h 收上 $63,650 配簇完整是仍缺的那个章。
                状态：<em>non-actionable、未触发、看 flip close</em>。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">leg 1 · TD9 簇</span><span className="dn-lvl-v">3d ⚡ TD9 BUY 活 · 1M Buy 8 → 9? 待定 · 06-11 那根 1h-待定滚到 Sell 3 —— 簇 NARROWED、非确认</span></div>
                <div><span className="dn-lvl-k">leg 2 · funding 空付 ≥4h</span><span className="dn-lvl-v">在闸上 LIVE（245-row / ~4h04m streak、快照处负）但 WEAKER —— 24h 均值翻正（+2.60%）、一根薄的近期重转负</span></div>
                <div><span className="dn-lvl-k">leg 3 · 1h 收 &gt; flip</span><span className="dn-lvl-v">flip $63,650、现货跨骑（−0.10% 现货 / +0.19% idx）—— 收敛到边界、还不是一根干净收上方</span></div>
                <div><span className="dn-lvl-k">trigger（3 腿全干净）</span><span className="dn-lvl-v bull">确认的 TD9 BUY 簇 AND live funding 空付 ≥4h AND 1h 收 &gt; $63,650 —— 然后 scout long 0.2R</span></div>
                <div><span className="dn-lvl-k">止损 / size</span><span className="dn-lvl-v bear">1h 收 &lt; $61,484（06-10 日 close / 200W 带）· size 0.2R · 在周期锚 D-SMA100 $72,713 平半</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R 草图（示例、非 live 单）：</b>一根干净 1h 收上 flip
                $63,650 触发、对 $61,484 止损约 $2,166 风险；首目标在周期锚
                $72,713 约 $9,063 ≈ 4.2:1 —— 吸引、但 trigger 需要那根还没盖章
                的干净 flip close、且簇已收窄到孤零零的 3d。<b>硬规则：</b>不要
                在一根 +3.26% 未交易的行情后追 flip 上方的反弹 —— scout 是一根
                确认交易、追进一根仍在头顶的 MA 堆、盘中带顶背离、正是框架禁止
                的预判。诚实读法是交易台看着一根干净的 mean-revert 反弹走过、
                没有 actionable 入场；等 flip close AND 06-15 周重夺、不要回填
                一根入场。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · macro 尾 · put-spread re-grow 闸 —— 两腿现在都 FIRE</span>
              <div className="dn-trade-name">
                Macro 尾 put-spread —— 已平；re-grow 闸现在两腿都 FIRE：HY OAS 2.80% &gt; 2.78% AND 10Y 4.55% &gt; 4.53%（两腿都干净印在上方）；reclaim-long 利率筛（10Y &lt; 4.55%）失效到它的边界
              </div>
              <div className="dn-thesis">
                macro 尾 put-spread 已平、无残余。06-11 两根 re-grow 腿都正好
                坐在各自边界上（10Y 在 4.53%、HY OAS 在 2.78%）；这刀两根都
                干净走硬到上方 —— HY OAS +2bp 到 2.80%（&gt; 2.78%）和 10Y +2bp
                到 4.55%（&gt; 4.53%）。框架要求两腿都干净印在上方、现在有了、
                所以 macro-tail re-grow 谱系首次被武装。同时 reclaim-long 利率
                筛（10Y &lt; 4.55%）失效回到它的 4.55% 边界（06-11 在 4.53% 的
                re-clear 没了）。张力是明摆的：macro 尾说在 19JUN / 26JUN
                forward 上 re-grow 一根下行对冲、正好在 BTC 内部面（空头回补、
                γ 翻、200W 重夺）翻上的当口。一根 re-grow 会逆着 BTC 反弹靠、
                这就是交易台不在闸上机械开它的原因 —— macro 腿清了、但会让一根
                新尾付出的 BTC 内部结构（一本空 γ dealer 本子、一根延伸的压）
                已经翻到另一边（本子现 +9.7M 净多 γ）。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v">已平 · 无残余 · re-grow 闸 FIRED 但对着 BTC 内部转持酌情</span></div>
                <div><span className="dn-lvl-k">re-grow 腿 A（FIRED）</span><span className="dn-lvl-v bear">10Y &gt; 4.53% 收 —— 在 4.55% FIRED、干净在上方</span></div>
                <div><span className="dn-lvl-k">re-grow 腿 B（FIRED）</span><span className="dn-lvl-v bear">HY OAS &gt; 2.78% 收 —— 在 2.80% FIRED、干净在闸上方</span></div>
                <div><span className="dn-lvl-k">reclaim-long 利率筛</span><span className="dn-lvl-v">10Y &lt; 4.55% 收 —— 在 4.55% LAPSED 到边界（06-11 的 re-clear 没了）</span></div>
              </div>
              <div className="dn-gating">
                <b>注意：</b>re-grow 闸是随水位漂设的酌情盯位、不是回测断点 ——
                两根现在谱系首次干净印在各自闸上方、但会让一根新尾带 dealer-
                放大器顺风的 BTC 内部背景已经反转（本子从 −69.0M 空 γ 翻到
                +9.7M 净多 γ）。一根机械 re-grow 进一本净多 γ 本子和一根 200W-
                重夺的盘面会是一根差尾；交易台把闸记为 FIRED 但不对着 BTC 转
                re-grow。只在 BTC 内部结构翻回去时再武装尾（本子在一根下落的
                flip 下重新加深空 γ AND 200W 在 06-15 close 上失败）—— 那时
                fired 的 macro 腿才有一根 BTC 内部确认可靠。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 挤压周期敌对-2 观察名单 · 无日历先验 · 三天空头压 ENDED 在一根回补（+5,031）、无离散 ±3k 单分钟步</span>
              <div className="dn-trade-name">
                挤压周期敌对-2 —— 观察名单：三天空头压以首根回补（+5,031）收尾；没有离散 Δnet ≥ +3k 回补步或 ≤ −3k 重堆印 —— 回补是渐进的
              </div>
              <div className="dn-thesis">
                挤压周期框架以一份无日历先验的观察名单跑（节奏在五月底被证
                伪）。三天空头压（06-10 −2,740、06-11 −1,338）这刀以首根回补
                收尾：SM 买回 5,280 BTC 的空（+5,031 net）在一根 +3.26% rally
                配 OI 缩上。回补是渐进、不是单根离散步 —— 最大单分钟 SM net
                步是 <span className="dn-tag bear">−1,859 @ UTC 07:31 06-11
                （Δlong −1,874、Δshort −15）</span>、一根在 −3k 重堆信号下方的
                多头 flush、而最大单分钟回补步是
                <span className="dn-tag bull">+737 @ UTC 11:01 06-11（Δlong
                +214、Δshort −523）</span>、在 +3k 回补信号下方。既没印一根
                敌对-2 重堆、也没印一根离散回补点火；压只是翻了、在窗里慢慢
                泄出。把任何新鲜 Δnet ≤ −3k 单分钟步（同一分钟 Δshort &gt; 0
                + Δlong &lt; 0）读成一根重堆敌对-2 信号本身、把任何 Δnet ≥ +3k
                回补步读成它的反面。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">框架状态</span><span className="dn-lvl-v">观察名单 · 无日历先验 · 三天压以一根渐进回补（+5,031）收尾、无离散 ±3k 步</span></div>
                <div><span className="dn-lvl-k">24h SM 形状</span><span className="dn-lvl-v bull">short Δ −5,280、long Δ −249、net +5,031 回补（对 06-11 备忘；独立取整）· 最大重堆步 −1,859 @ UTC 07:31（−3k 下方）· 最大回补步 +737 @ UTC 11:01（+3k 下方）· short 谷 51,237 @ UTC 00:01（回补进快照）</span></div>
                <div><span className="dn-lvl-k">前向 gating</span><span className="dn-lvl-v">新鲜 Δnet ≤ −3k 单分钟 = 重堆敌对-2 信号；Δnet ≥ +3k = 回补点火 —— 两边都无时间先验</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>节奏已死（五月底证伪）、所以看盘面、不看时钟。
                三天压以一根回补配 OI 缩和 funding normalize 收尾是挤压在
                unwind、但回补是渐进而非一根离散点火步 —— 一根更安静的 unwind、
                不是一根暴力挤压。一根新鲜离散 Δnet ≤ −3k 在一根重新失败的
                flip 下会重新武装空头压读；一根 Δnet ≥ +3k 回补步在 flip 上方
                会确认一根暴力 unwind。两者都没印；看下一根离散步往哪边定。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 200W 地板周内 RECLAIMED（06-15 close 是二元、现在偏重夺）· mean-revert 反弹走成未交易 · dealer 本子翻 +9.7M 净多 γ · macro-tail re-grow 两腿都进 BTC 转向 fire · 交易台 flat</span>
            </h2>

            <p>
              06-11 那些条件里：200W 周期地板周内 RECLAIMED（06-11 日 close
              $63,598 在上方、未收盘 06-15 周 bar $63,566 在上方、现货 +2.52%
              在上方）；dealer-flip 重夺实质 HAPPENED（本子翻到 +9.7M 净多 γ、
              现货跨骑 $63,650 flip）、虽不是那根 scout-触发的干净 1h close；
              mean-revert scout flip 腿 CONVERGED 到边界但反弹跑成未触发；
              macro re-grow 腿两根都 FIRED（10Y 走硬到 4.55%、HY OAS 到
              2.80%）、reclaim-long 筛 LAPSED 到它的 4.55% 边界；SM 在压里首次
              COVERED（+5,031）。<em>单一结构性读是一根空头回补 mean-revert
              反弹、重夺了地板、翻了 dealer 本子 —— 但它在没有确认入场的情况
              下跑了、每根 MA 仍在头顶、慢 MTF 周期仍云下、macro-tail re-grow
              现在空头向进 BTC 转向 fire。</em>今天的条件围绕周内地板重夺、
              未触发但已收敛的 scout、和一根闸进 BTC 内部转向 fire 的 macro 尾
              重设：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>200W 周-close 重夺（多头）</td><td className="bull">06-15 W-MON close &gt; $62,019 —— 未收盘 bar +2.50% 在上方</td><td>确认地板重夺、post-06-08 谱系一周 dip-and-reclaim；在确认转向上重开 scout-long 案</td></tr>
                <tr><td>200W 周-close 破位（空头）</td><td className="bear">06-15 W-MON close &lt; $62,019</td><td>当前 post-06-08 floor-watch 谱系首根周 close 破 200W（上一根全历史 below-own-200W close 是 2023-10-09）—— 周内重夺后现在是低概率路径；印出则升级周期-regime 读</td></tr>
                <tr><td>12JUN 到期结算（今日 08:00Z、约 8h 后）</td><td>−5.60M 前段块清；除 12JUN 后 aggregate ≈ +15.3M（更净正）</td><td>把结算当中间 tell 读 —— 本子已经净多 γ（+9.7M）；清掉负前段块让它更正、不是 regime 变化</td></tr>
                <tr><td>Mean-revert 多 scout —— flip 腿（已收敛）</td><td className="bull">1h 收 &gt; $63,650 flip —— 现货跨骑（−0.10% 现货 / +0.19% idx）</td><td>flip 腿收敛到边界但簇收窄到孤零零的 3d、反弹跑成未触发；一根干净 1h 收上 $63,650 配簇完整 AND 06-15 周重夺、scout long 0.2R、止损 $61,484、在 $72,713 平半 —— 确认前不追</td></tr>
                <tr><td>$60k 崩盘 put magnet</td><td className="bull">$60k −23.10M（连续第 2 刀 LIGHTENED、+15.55M；价格爬离它）</td><td>magnet 在两刀里把权重砍半、价格离开 strike —— 崩盘 put bid 在 unwind；不再是近现货 fade 锚</td></tr>
                <tr><td>Macro 尾 re-grow（两腿都 FIRED）</td><td className="bear">HY OAS &gt; 2.78%（在 2.80% FIRED）；10Y &gt; 4.53%（在 4.55% FIRED）</td><td>闸谱系首次 FIRED、但持酌情 —— 不要把下行尾 re-grow 进一本净多 γ 本子和一根 200W-重夺盘面；只在 BTC 内部结构翻回去时再武装（本子重新加深空 γ AND 06-15 周线失败）</td></tr>
                <tr><td>挤压周期敌对-2（无日历先验）</td><td className="stale">把每根新鲜 Δnet ≤ −3k 或 ≥ +3k 单分钟步读成信号本身</td><td>三天压以一根渐进回补（+5,031）收尾；一根新鲜离散重堆 ≤ −3k 在一根重新失败的 flip 下重新武装空头读、一根 ≥ +3k 回补步在 flip 上方确认暴力 unwind —— 这刀两者都没印</td></tr>
              </tbody>
            </table>

            <p>
              改写<em>本</em>篇的那一根线是
              <span className="dn-signal">
                06-15 周 close 对 200W $62,019（现在以未收盘 bar +2.50% 在上方
                偏重夺）、配一根干净的 1h 收上 flip $63,650 作 scout trigger：
                一根周 close 重回 200W 上方确认地板重夺、一根干净 flip close
                在 TD9 簇重新确认后武装 scout-long；一根周 close 收在下方仍会
                确认当前 post-06-08 floor-watch 谱系首根持续的周-200W 破位
                （上一根全历史 below-own-200W close 是 2023-10-09）
              </span>
              。在那之前、本篇按写好的跑：交易台 flat、200W 观察是主框架且已
              周内重夺、mean-revert 多 scout 收敛到它的 trigger 区但跑成未交易
              （行情后不追）、macro 尾 re-grow 两腿都 fire 但对着 BTC 内部转持
              酌情、挤压周期敌对-2 框架是一份观察名单、三天压以一根渐进回补
              收尾。dealer 本子从 −69.0M 空 γ 翻到 +9.7M 净多 γ、$60k magnet
              砍半；SM 在压里首次回补；funding 当日 normalize 转正；BTC 是 7d
              板上最强风险资产、套在一根仍 NORMAL 的宽 risk-off 里。下一个 24h
              的对读是<em>耐心而 flat —— 让 06-15 周 close 确认地板重夺、看一根
              干净的 1h 收上 $63,650 作 scout trigger、不追那根已经跑掉的反弹</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2 · 已过 codex 敌对式审计
            </span>
            <b>状态：</b>v2 建于 2026-06-12 00:05Z 原子快照、经 STAGE B codex
            敌对式跨模型审计（判决 <b>BLOCK-CRITICAL</b>：1 CRITICAL + 1
            MINOR）后从 v1 promote。findings 记录：
            <code>audits/2026-06-12-desk-note.md</code>。每条 finding 都在原处
            应用并 grep-closed（pattern → hits-before → hits-after）后才
            promote：<b>DN-001（CRITICAL）</b> —— 把未收盘的 06-12 日 bar 当成
            一根已收日 close 计数、夸大了 below-floor 与 reclaim 谱系（已收
            below-floor = 2 不是 3；已收 reclaim = 1 不是 2）。在全 EN 文件上
            搜的 pattern：<code>two consecutive daily closes back above</code>
            （multiline、日-close 语境）—— 2 before / 0 after；<code>Two
            consecutive daily closes</code> —— 1 before / 0 after；<code>three
            daily closes below the floor</code> —— 1 before / 0 after。重写成
            「一根已收日 close 重回上方（06-11）外加 06-12 bar 在进行中也在
            上方」和「两根日 close 在下」；06-15 W-MON 周 close 保留为唯一二元。
            范围外（保留不动、非同一主张）：<code>three-day short-press</code>
            （SM 三天仓位）与 <code>31 consecutive daily closes</code>（RV 方法
            窗）。<b>RESOLVED</b>（hits-after = 0）。<b>DN-002（MINOR）</b> ——
            24h 大单分母不能从 live 盘面复现（<code>sum(big_count) = 580</code>、
            没有方法复现出 327）。pattern <code>327</code> —— 1 before / 0
            after；净 <code>+654 BTC</code> 复现并保留。改成
            <code>+654 BTC / 580 笔</code>（<code>big_count</code> 分母）。
            <b>RESOLVED</b>（hits-after = 0）。两条 finding 都 RESOLVED；无
            UNRESOLVED 残留、所以 v1 → v2 promotion 进行。源 pin 复核：funding
            × 1095 算式（快照 −1.44% ann 自原始 −0.001315、24h 均值 +2.60% ann
            翻正、封顶 1 / 1442 坐在 +7.26% 最大、负分钟 17.82%、最长负 streak
            245 采样行 / ~4h04m wall-clock UTC 20:01 06-11 → 00:05 06-12、一根
            薄的近期重转负仍清 ≥4h leg-2 闸且快照处 funding 负）；GEX 双参考
            符号（flip $63,650、现货 −0.10% / idx +0.19% —— 跨骑、相反符号差
            零点几个百分点；aggregate +9.7M 从 −69.0M 翻；$60k −23.10M 松
            +15.55M）；200W 全历史 W-MON SMA $62,019 对 live 现货 +2.52% 在上方、
            未收盘 06-15 bar $63,566 +2.50% 在上方、8 / 154 = 5.19% 频率、
            <code>weekly_200sma.json</code> 缺失（200W 直接从 parquet 算、JSON
            百分位 / last-event 不可用、未编造）；SM cut fraction 11.77%（long
            −249 / short −5,280 独立取整、net +5,031 回补、精确 long
            13,780.700 → 13,531.418 和 short 56,516.884 → 51,236.916、net Δ
            +5,030.686 —— 不要差取整端点）；日-close 谱系（06-08 $63,058、
            06-09 $61,695、06-10 $61,484 FINAL、06-11 $63,598 FINAL 重夺、
            06-12 未收盘 $63,566）；30D RV 42.17%（41.54% 另一口径）；跨资产
            |r| 0.377 NORMAL、BTC +0.32% vs NQ −1.89%（+2.21pt outperformance、
            BTC 最强风险资产）；macro Tier-1（10Y 4.55% 筛 AT 边界、HY OAS
            2.80% 在闸上方、两根 macro-tail re-grow 腿 FIRED、TIPS 2.21%、DXY
            100.08、Fed 净流动性 $5.897T）；cb_cvd reset 调整（在 UTC 06:15
            06-11 rebase、reset 调整后 24h 现货 CVD = (2,866.4 − 1,581.7) +
            (29.9 − 86.6) = +1,228.0）；完整 MA 矩阵对 live 现货 $63,584.00、
            parquet 2026-06-12 00:06Z close $63,566.10（D-SMA100 $72,713 周期锚
            −12.55%、每根 MA 在头顶、129 根子集周 bar 下 W-SMA150/200 不可
            计算、W-EMA150/200 种子披露）；claims-vs-loaded-data（NTT /
            max-pain / strike-IV / BTC-NQ framework only；JGB 月度不依赖；IV
            984 合约中位数、不是可交易价差）。存档：
            <code>/opt/desk-note/snapshots/2026-06-12-0008/</code>
            （btc_gex.html、cross_asset_correlation_summary.md、
            macro_dashboard.html、mtf_div_latest.html）。
            <b>Build note（INFO）：</b>本服务器跑 Node 18.19.1；Next 16.2.6 在
            <code>node_modules/next/dist/bin/next:24-28</code> 处对 Node &lt;
            20.9.0 硬退出、所以完整 <code>next build</code> 被环境阻塞（谱系
            carried）；<code>npx --no-install tsc --noEmit</code> 是 build proxy。
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是为 Hysteresis Research 内部讨论准备的交易台人造物、
            <em>非投资建议、非招揽、非要约</em>、不针对任何接收人的具体
            情况个性化。数字反映单一原子快照（2026-06-12 00:05Z）、
            provenance 在数据来源条带中按节披露；宏观 Tier-1 面板渲染
            2026-06-11 22:16Z（比快照早约 1h49m）、部分输入明确陈旧或待定
            并已标注。本篇是 v2 已审计稿 —— STAGE B codex 敌对式审计已跑、其
            findings 已解决（见上方审计痕迹与 <code>audits/2026-06-12-desk-note.md</code>）；
            仍把每个数字按临时处理。水位、规模与条件是交易台流程的示例、
            不是长期推荐。过去的相关性、γ 与仓位模式不绑定未来盘面。衍生品有
            全损风险、加杠杆下损失可超过保证金。
            <em>自己做功课。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                mean-revert 簇解进反弹 —— 200W 地板周内重夺、dealer 本子翻净多
                γ、SM 在压里首次回补、funding normalize。但 scout 跑成未触发、
                每根 MA 仍在头顶、macro re-grow 进转向 fire。flat 而耐心 ——
                06-15 周 close 是那根二元。
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
            v2 · 2026-06-12 00:05Z snapshot · sources: live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet · FRED ·
            Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
