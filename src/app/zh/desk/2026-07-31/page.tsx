import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-07-31 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-07-31',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-07-31' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260731() {
  await requireViewer('/zh/desk/2026-07-31');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-07-31 · v2</span>
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
              <span className="dn-big">$64,854</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+1.27%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-07-31 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘口（现货 / 永续 / OI / 聪明钱 / 资金费）</td>
                  <td className="dn-v-cell">live_db.json · 2026-07-31 00:07Z（快照钉，t == &ldquo;07-31 08:07&rdquo; 北京时间）</td>
                  <td className="dn-flag">
                    新鲜 · 1 分钟 · 锚定 00:07Z 行（北京 08:07）以便复现 · 文件尾部随实盘滚动
                    · 24h 窗口口径：头条 delta 用同一时钟的前一日基线 t == &ldquo;07-30 08:07&rdquo;
                    北京时间（端点减 24h 前的行，恰为 1,440 行前）。4h / 1h 流量块用含前一行的基线
                    （07-31 04:07 / 07:07 北京至 08:07 钉）；本次序列在子窗口间连续，故那些含前一行读数
                    复现精确同时钟的 04:07 / 07:07 端点——无基线缺口需披露 · 本次 24h 窗口内无 CVD 重置
                    （cb_cvd 2,157.4 → 4,664.4、fut_cvd −662.7 → 424.5 均单调连续），故 CVD delta 为原始
                    端点差——不需方法 A · 资金费/流量行统计跨 1,441 行窗口（1,440 分钟区间 + 开盘行）；
                    溢价均值剔除空行
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + 一目均衡 + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-07-31 08:01 北京扫描（00:01Z）</td>
                  <td className="dn-flag">
                    滚动最新文件 · 原样归档于 /opt/desk-note/snapshots/2026-07-31-0007/ ·
                    较快照锚点约滞后 6 分钟 · 进行中 K 线 · 扫描现货 ≈ $64,794
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-07-31 00:01Z 快照</td>
                  <td className="dn-flag">
                    约滞后 6 分钟 · Deribit 指数 $65,185 vs 实时 $64,854 · IV 中位 41.5%
                    · 936 个合约 · 头条汇总 +143.4M vs 按到期滚加 +151.05M（= gex_summary.json
                    net_gex $151,049,301.83）——约 +7.6M 无法对平的来源面板缺口，按 DN-003 血缘披露，
                    且本次滚加再度高于头条（与 07-30 / 07-29 缺口符号相同），按到期条子合计 +151.04M
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-07-31 00:01Z
                  </td>
                  <td className="dn-flag">约滞后 6 分钟 · 7d 1h K · 22 资产 · 167 行 · 已归档</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z 分数面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-07-30 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.9h · 周四 FRED 日频重印落地并逆转了缓和趋势：10Y 回升 +6bp 至 4.67%
                    （4.71 → 4.69 → 4.65 → 4.61 → 4.67，五次印数里首次回升），TIPS 持平 2.41%，5Y5Y +4bp
                    至 2.28%，10Y 盈亏平衡 +6bp 至 2.26%，HY OAS +3bp 至 2.87% · MOVE 74.2（+3.30）·
                    DXY 走软 −0.83 至 99.97（跌破 100）· 美元/日元 −3.65 至 159.65（日元大幅走强）·
                    美联储净流动性 $5.825T（新周频印数，−0.092T）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日线 / 周线 均线矩阵</td>
                  <td className="dn-v-cell">parquet 末根 2026-07-31 00:05Z（进行中收 $64,853.30）</td>
                  <td className="dn-flag">
                    锚点约滞后 2 分钟 · 偏移按实时现货 $64,854.01 重算 · W-SMA200 无法从 2023–2026
                    均线子集算出（188 周 K）；W-SMA150 可算，为 $76,633，但远在上方 / 闲置——200W 周期底
                    本身来自完整历史 glob / 陷阱监测状态，见下一行 · 末个已完成日收 07-30 $64,750.00
                    （一根 +$791 阳线收盘；07-31 K 线约 2 分钟）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 支撑监测</td>
                  <td className="dn-v-cell">ma200w_trap_watch_state.json · 末次重算 2026-07-27 00:11Z（今日未重跑）</td>
                  <td className="dn-flag">
                    200W 周期底可得——陷阱监测状态文件仍载末个已完成周 2026-07-26 收 $65,375.10，
                    W-SMA200 $63,311.02，连续站上 4（自 2026-07-05 起）。今日独立跑一次完整
                    btcusdt_1m_*.parquet glob（361 周 K，2019–2026）复现同一已完成周 W-SMA200 $63,311.02，
                    并显示进行中周（截至 2026-08-02）W-SMA200 爬升至 $63,540。已结定底 $63,311（现货高出
                    +2.44%）；今日定底未被测试——24h 低 $63,616.00 在价格拉离时高出定底 $305
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日本 10Y</td>
                  <td className="dn-v-cell">FRED 月频 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月频 · 勿当实时</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT 枢轴、max-pain、行权价 IV、BTC/NQ 比值
                  </td>
                  <td className="dn-v-cell">本次未加载</td>
                  <td className="dn-flag">相关结论明确仅作框架（btc_ntt_analysis.html 为 JS 渲染，无法抽取）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">资金费 · 8h 年化</span>
              <span className="dn-v">+10.95%</span>
              <span className="dn-src">实时 · 原始 0.01 字段 × 1095（本快照顶在 +10.95% 上限）· 24h 均值 +9.16%（较 07-30 的 +8.19% 再热一档）· 最高 +10.95% 年化（上限，529 / 1441 行）· 最低 +4.38% 年化（0.004004 字段 @ 07-31 04:11 北京 / 07-30 20:11Z）· 0 / 1441 负行（连续第二天为零）——即便散户去拥挤，carry 仍单边拥挤做多</span>
            </div>
            <div>
              <span className="dn-k">Δ 资金费 · 24h</span>
              <span className="dn-v bull">再热 · 顶上限 · 0 负行</span>
              <span className="dn-src">区间 +4.38% / +10.95% 年化 · 均值 +8.19% → +9.16% 年化 · 上限占用 529 / 1441 行（~37%）· 拥挤多头 carry 撑过了这波拉升——资金费是唯一没有确认聪明钱重新穿多的本子</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v bull">+2.16%（+2,258.4 BTC）</span>
              <span className="dn-src">实时 · 104,346.0 → 106,604.4 · 这次是扩张且呈需求形态——价格 +1.27% 伴随 OI 增长，四条流量读数全正（现货CVD +2,507.0 / 期货CVD +1,087.2 / taker +1,087.2 / 大单 +716.2），聪明钱回补空头并重新穿回净多；这是侦察仓要的需求驱动扩张，整轮复苏里头一回</span>
            </div>
            <div>
              <span className="dn-k">散户（市场）多/空</span>
              <span className="dn-v">55.72 / 44.28</span>
              <span className="dn-src">live_db `mkt_long_pct` · 24h 高 61.29（07-30 09:05 北京 / 01:05Z），低 55.40（07-31 07:03 北京 / 07-30 23:03Z）——随拉升去拥挤（较 07-30 的 60.93 下降），即便资金费顶在上限，散户并未追这波上涨</span>
            </div>
            <div>
              <span className="dn-k">聪明钱净 BTC</span>
              <span className="dn-v bull">+503（重新穿回净多）</span>
              <span className="dn-src">实时 · 多 12,246.82 − 空 11,743.38 = +503.44 · 记录性买家在净空一天后回补并重新穿回净多——于 07-30 14:31 北京（06:31Z）一分钟内空转多 +3,976.7 BTC（−2,112.1 → +1,864.6），峰值 +2,118 @ 07-30 19:41 北京（11:41Z），隔夜回落近平，07-31 07:51 北京（07-30 23:51Z）再穿回 +215.6，快照报 +503</span>
            </div>
            <div>
              <span className="dn-k">聪明钱 Δ vs 24h 前</span>
              <span className="dn-v bull">−2,295 → +503（+2,798，122% 摆幅）</span>
              <span className="dn-src">|Δ净|/前净 = 2,797.98 / 2,294.54 = 121.9% · Δ多 +939.7（多头补回）同时 Δ空 −1,858.3（空头回补）——回补主导的重新穿多：三分之二是回补，三分之一是新多，恰是 07-30 翻空的镜像</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">41.5% / 28.77%</span>
              <span className="dn-src">GEX 中位 IV · 跨 936 个合约的链上中位，非可交易价差 · 30D 收盘对收盘 RV = logret.std × √365 × 100，30 个日收益（parquet 末根 00:05Z）· 链上富价 ~+12.7pt · 29 收益替代口径 28.06%</span>
            </div>
            <div>
              <span className="dn-k">距 0γ 翻转</span>
              <span className="dn-v bull">+2.85%（上方）</span>
              <span className="dn-src">翻转 $63,057 · vs 实时现货 $64,854（+2.85%；64,854.01/63,057.47 − 1 = 2.849%）/ GEX 文件 Deribit 指数 $65,185（+3.37%；65,185.38/63,057.47 − 1 = 3.374%，图块印 +3.4%）——两个参照都为正，本图取现货侧 · 汇总 +143.4M 头条 / +151.05M 滚加——较 07-30 的 +75.1M / +94.46M 强力重 gamma，翻转上抬 $56（$63,001 → $63,057），且近月负值愈合（31JUL 0DTE 现为 +67.37M 为正）</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                多头岔口解决了——记录性买家回补了。聪明钱那一天的净空是个熊陷阱：它重新穿回净多 +503，
                且是对着一次需求驱动的 OI 扩张做的，那次扩张把现货一路抬去测 D-EMA50 顶盖、逼到一美元之内
              </span>。07-30 备忘把整件事押在一道两岔口上：要么人群的买盘把价格带进一次逼聪明钱回补的 D-EMA50
              夺回（一个熊陷阱——侦察仓随聪明钱重新穿多而武装），要么聪明钱新鲜的空预示一次 $63,311 收盘破位
              （追空武装）。今日走的是第一条路——而且很干净。聪明钱翻回{' '}
              <span className="dn-tag bull">−2,295 → +503</span>，122% 摆幅，拆解是回补主导：{' '}
              <span className="dn-tag bull">Δ空 −1,858</span> 回补，对着{' '}
              <span className="dn-tag bull">Δ多 +939</span> 补回，恰是昨日翻空的镜像。价格拉升{' '}
              <span className="dn-tag bull">+1.27%</span>，伴随 OI{' '}
              <span className="dn-tag bull">扩张 +2,258 BTC（+2.16%）</span>，且{' '}
              <span className="dn-em">四条流量读数全正</span>（现货CVD +2,507、期货CVD +1,087、taker +1,087、
              大单 +716）——这是侦察仓等了一周的需求驱动扩张，整轮复苏里头一回。而 07-30 印了一根{' '}
              <span className="dn-tag bull">$64,750.00 阳线收盘（+$791）</span>，第三根连续阳线收盘，
              把现货拖着穿过 D-EMA20 / D-SMA20 这对、去测{' '}
              <span className="dn-tag bear">D-EMA50 $64,910.69</span> 顶盖到{' '}
              <span className="dn-em">−0.09%——自 07-24 顶盖失守以来最紧的一次盖下回测</span>
              （侦察仓 07-22 曾在顶盖上方 ARMED，故这不是整轮复苏里最近的一次）。所以侦察仓的两条流量腿都翻成
              TRUE（聪明钱重新穿多、OI 转需求驱动）；唯一仍未满足的是价格腿本身——一次收在顶盖上方的 D-EMA50
              收盘，如今只差一线之隔。但它没能真正收上去：07-31 进行中 K 线报 $64,853.30，仍在顶盖下方 $57，
              而夺回多头的利率过滤器还走了 <span className="dn-em">反方向</span>——周四的 10Y 回升{' '}
              <span className="dn-tag bear">+6bp 至 4.67%</span>，打断四天缓和、把门槛从 6bp 推远到 12bp。
              所以侦察仓维持 <span className="dn-em">DEFERRED 第八天，却是自 07-24 递延以来最接近武装的一刻</span>
              ——距实弹武装只差一次收在 $64,911 上方的日收。追空则整个反转了：聪明钱回补、0DTE 负值愈合
              （31JUL 现为 <span className="dn-tag bull">+67.37M</span>）、庄家本子重 gamma 至{' '}
              <span className="dn-tag bull">+143.4M / +151.05M</span>，定底压根没被测（24h 低 $63,616，高出
              $63,311 $305）——它较近期任何时点都更远离武装，维持按兵不动。账本维持 FLAT，但倾斜转多：相位已在
              流量侧对齐，顶盖是唯一剩下的门。本备忘押在：下一次日收拿下 D-EMA50——实弹武装侦察仓——还是顶盖处
              一线之隔的拒绝解成又一个更低的高点、而人群仍过度做多。
            </p>

            <p>
              BTC 实时报 <span className="dn-tag">$64,854</span>，24h{' '}
              <span className="dn-tag bull">+1.27%</span>，落在{' '}
              <span className="dn-tag">$65,137.61 / $63,616.00</span> 区间（高 @ 07-30 21:50 北京 /
              13:50Z，低 @ 07-30 08:55 北京 / 00:55Z，窗口早段、拉升之前）。{' '}
              <span className="dn-signal">今日定底压根没进场——价格拉离了它、转去压顶盖</span>：07-25
              $64,338.10 → 07-26 $65,375.10 → 07-27 $63,720.80 → 07-28 $63,903.60 → 07-29 $63,958.90 →{' '}
              <span className="dn-tag bull">07-30 $64,750.00（+$791.10）</span>，进行中的 07-31 K 线（约 2 分钟）报{' '}
              <span className="dn-tag bull">$64,853.30</span>。三根已完成的连续阳线收盘（07-28、07-29、07-30），
              07-31 进行中 K 线站在 07-30 之上，且 07-30 收盘是第一根拿下 D-EMA20 / D-SMA20 这对的。均线矩阵
              实质改善：现货已夺回近端这对、如今测顶盖——{' '}
              <span className="dn-tag bull">D-SMA50 $63,450（+2.21%）</span>、{' '}
              <span className="dn-tag bull">D-EMA20 $64,358（+0.77%）</span> 与{' '}
              <span className="dn-tag bull">D-SMA20 $64,546（+0.48%）</span> 如今是现货下方三个为正的支撑偏移
              （三者在 07-30 全是上方压力），只剩{' '}
              <span className="dn-tag bear">D-EMA50 $64,910.69（−0.09%）</span> 这一条仍在上方，且只差一线。{' '}
              <span className="dn-em">
                200W 周期底本次可得且获确认：陷阱监测状态（ma200w_trap_watch_state.json，末次重算
                2026-07-27 00:11Z——今日未重跑）载末个已完成周 2026-07-26 的 W-SMA200{' '}
                <span className="dn-tag bull">$63,311.02</span>，连续四周收在其上；今日独立跑完整
                btcusdt_1m_*.parquet glob（361 周 K）对已完成周复现同一 $63,311.02，进行中周（截至
                2026-08-02）爬升至 <span className="dn-tag">$63,540</span>。所以 $63,311 是已结定底
                （现货现高出 +2.44%，四个日收在其上），但今日它置身事外——价格拉升时 24h 低 $63,616 高出定底 $305。
              </span>{' '}
              侦察仓 07-22 ARMED，07-24 D-EMA50 夺回首度失败时转 DEFERRED，07-25 / 26 / 27 / 28 / 29 / 30
              维持递延——其价格腿与流量腿从未同时打成 TRUE。今日流量腿打成 TRUE（聪明钱重新穿多、OI 需求驱动），
              价格腿以 $57 之差仍 FALSE。账本维持 FLAT——但这是自 07-24 递延以来两者最接近的一次（侦察仓 07-22
              曾完全 ARMED，在顶盖失守之前）。
            </p>

            <h2 className="dn-sec">
              仓位 <span className="dn-roman">I · 实时盘口 · 聪明钱回补并重新穿回净多 +503（于 07-30 14:31 北京一分钟内空转多 +3,976.7 BTC），回补空头 −1,858、补回多头 +940 · OI 扩张 +2.16% 呈需求形态，全部流量读数为正 · 价格 +1.27% 压 D-EMA50 顶盖到一美元 · 资金费顶在上限（+9.16% 均值、0 负行）但散户去拥挤至 55.72 · 永续贴水收窄</span>
            </h2>

            <p>
              <span className="dn-signal">
                聪明钱回补并重新穿回净多，进一次需求驱动的扩张——整轮复苏里头一回仓位本子、OI、流量三者同向
              </span>。现货 24h 上涨 +1.27%，OI{' '}
              <span className="dn-tag bull">扩张 +2,258.4 BTC（+2.16%）</span>——104,346.0 → 106,604.4。
              这是需求形态，不是 07-30 那种派发形态：24h 内主动盘每一条读数都在买——现货 CVD{' '}
              <span className="dn-tag bull">+2,507.0</span>、期货 CVD{' '}
              <span className="dn-tag bull">+1,087.2</span>、taker 净{' '}
              <span className="dn-tag bull">+1,087.2</span>、大单净{' '}
              <span className="dn-tag bull">+716.2 BTC（745 笔）</span>——而底下的仓位本子才是提示：OI 增长是因为{' '}
              <span className="dn-em">聪明钱回补空头（−1,858）、补回多头（+940）</span>，同时人群的现货买盘把价格推高。
              永续在快照仍对现货{' '}
              <span className="dn-tag bear">贴水 −$27.65</span>，但贴水在收窄（24h 均 −$78.84，区间 −$255.74 /
              +$84.83，5 处孤立的一分钟溢价印数）——一个现货主导、永续在后追赶的市场，而非杠杆多头的追涨。
              1 分钟主动盘偏斜快照{' '}
              <span className="dn-tag bear">−24.7</span>（24h 均 −4.61，区间 −37.4 / +37.4）——即便 24h 在买，
              最后一分钟仍被抛。{' '}
              <span className="dn-em">聪明钱回补并重新穿多、整条流量盘被买的 OI 扩张，正是侦察仓等的需求驱动扩张——这正是此前每一节都缺的那种对齐。</span>
            </p>

            <p>
              聪明钱是最扎眼的——而这正是 07-30 备忘点名的多头解决。{' '}
              <span className="dn-signal">
                记录性买家回补了它一天的空、重新穿回净多，且是靠回补空头又补回多头一起做的
              </span>。聪明钱净 <span className="dn-tag bull">+503</span>（多 12,246.82 − 空 11,743.38 =
              +503.44）对 24h 前的 <span className="dn-tag bear">−2,295</span>——{' '}
              <span className="dn-tag bull">Δ净 +2,798（122% 摆幅）</span>（|+503.44 − (−2,294.54)| /
              2,294.54 = 121.9%）。拆解是回补主导：<span className="dn-tag bull">Δ空 −1,858.3</span>
              （空头回补，占摆幅三分之二）同时 <span className="dn-tag bull">Δ多 +939.7</span>（多头补回，
              占三分之一）。聪明钱于{' '}
              <span className="dn-tag bull">07-30 14:31 北京 / 06:31Z 一分钟内空转多 +3,976.7 BTC</span>
              （−2,112.1 → +1,864.6，窗口内最大的单分钟 Δ净——一次回补步，正是再堆空的反面），峰值{' '}
              <span className="dn-tag bull">+2,118 @ 07-30 19:41 北京 / 11:41Z</span>，隔夜回落近平，
              最后再穿回净多一次{' '}
              <span className="dn-tag bull">+215.6 @ 07-31 07:51 北京 / 07-30 23:51Z</span>，快照报 +503。{' '}
              <span className="dn-em">再武装门槛的聪明钱腿如今整轮复苏里头一回打成 TRUE：那个在 07-29 弹里翻空的
              买家，把那笔空回补进了这一波，如今是顺着上涨布仓、而非逆着它。这正是 07-30 备忘把侦察仓门控其上的
              多头提示——如今在场。</span>
            </p>

            <p>
              杠杆与拥挤这两个读数是图景里唯一不干净的地方——它们彼此劈开。{' '}
              <span className="dn-signal">
                资金费钉在上限附近，散户却去拥挤，所以 carry 是在更少的手里拥挤做多、即便散户账户比值下滑
              </span>：实时资金费 <span className="dn-tag bull">+10.95% 年化</span>（原始 0.01 字段 × 1095，
              顶在上限），24h 均值{' '}
              <span className="dn-tag bull">+9.16% 年化</span>（较 07-30 的 +8.19% 再热一档），最高{' '}
              <span className="dn-tag">+10.95% 年化</span>（上限，529 / 1441 行 ~37%），最低{' '}
              <span className="dn-tag">+4.38% 年化（0.004004 字段 @ 07-31 04:11 北京 / 07-30 20:11Z）</span>，且{' '}
              <span className="dn-tag bull">0 / 1441 负行</span>——连续第二天零负行。但散户{' '}
              <span className="dn-tag">mkt_long_pct 55.72</span>（24h 高 61.29 @ 07-30 09:05 北京 / 01:05Z，
              低 55.40 @ 07-31 07:03 北京 / 07-30 23:03Z）——较 07-30 的 60.93 去拥挤，散户多头比值随拉升下滑。{' '}
              <span className="dn-em">直读：拥挤多头 carry 是唯一没有确认聪明钱重新穿多的本子——资金费顶在上限，
              而在更低的散户比值上，意味着多头杠杆是集中而非广泛的。这是在一个本已对齐的需求盘上的一记温和警示：
              这波拉升是聪明钱主导、散户没在追，但顶在上限的资金费说，一旦顶盖拒绝，那些杠杆仍在那里等着解开。</span>
            </p>

            <p>
              分窗流量在 24h 上是需求驱动，且在高位处进快照时收敛。24h：价{' '}
              <span className="dn-tag bull">+1.27%</span>，OI{' '}
              <span className="dn-tag bull">+2,258.4 BTC</span>，现货 CVD{' '}
              <span className="dn-tag bull">Δ +2,507.0</span>，期货 CVD{' '}
              <span className="dn-tag bull">Δ +1,087.2</span>，大单{' '}
              <span className="dn-tag bull">+716.2 BTC / 745 笔</span>，taker 净{' '}
              <span className="dn-tag bull">+1,087.2</span>——{' '}
              <span className="dn-em">每条读数为正，OI 跟着买家扩张、聪明钱回补：需求驱动，非派发</span>。4h（至快照）：价{' '}
              <span className="dn-tag">−0.01%</span>，OI{' '}
              <span className="dn-tag bull">+241.8 BTC</span>，现货 CVD{' '}
              <span className="dn-tag bull">Δ +438.9</span>，期货 CVD{' '}
              <span className="dn-tag bull">Δ +759.3</span>，大单{' '}
              <span className="dn-tag bull">+135.9 BTC / 103 笔</span>，taker 净{' '}
              <span className="dn-tag bull">+759.3</span>——正流量上的平价，顶盖处的一次收敛、买家仍在其下。1h：价{' '}
              <span className="dn-tag">−0.07%</span>，OI{' '}
              <span className="dn-tag">−8.3 BTC</span>，现货 CVD{' '}
              <span className="dn-tag bull">Δ +788.3</span>，期货 CVD{' '}
              <span className="dn-tag bull">Δ +389.6</span>，大单{' '}
              <span className="dn-tag bull">+141.6 BTC / 26 笔</span>，taker 净{' '}
              <span className="dn-tag bull">+389.6</span>——{' '}
              <em>现货在进快照时猛买（+788 现货 CVD），OI 持平，一次现货主导的顶盖冲击、永续尚未跟上</em>。{' '}
              <span className="dn-em">
                基线口径：24h 块用同一时钟前一日行（07-30 08:07 北京，恰 1,440 行前）；4h / 1h 子窗口块用含前一行的基线
                （07-31 04:07 / 07:07 北京至 08:07 钉）。本次序列在这些窗口间连续，故那些含前一行读数复现精确同时钟的
                04:07 / 07:07 端点——无基线缺口需披露，且 24h 窗口内无 CVD 重置（cb_cvd 与 fut_cvd 均单调连续），
                故 CVD delta 为原始端点差。
              </span>
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 计数回升至 4 多 / 4 短 / 2 中（原 1/7/2），快周期翻多 · regime 翻回 5/9 周期动量（JT≥0）趋势延续，从 07-30 的 6/9 周期反转翻回 · 快周期夺回云（30m/1h 站上，4h/8h 回云中）· 一根新鲜 8h 与一根新鲜 1w 水下金叉 1 根 · 底背离簇 5 个周期（15m/30m/4h/8h/1w）· 1M ⚡TD9 BUY</span>
            </h2>

            <p>
              <span className="dn-signal">
                框架计数强力回升、regime 翻回趋势延续——面板如今在快周期上顺着上涨读，而非逆着它
              </span>。00:01Z 扫描读{' '}
              <span className="dn-tag">4 多 / 4 短 / 2 中</span>，共 10 个周期（15m / 30m / 1h / 1M 多；
              4h / 8h / 1d / 3d 空；12h / 1w 中），较 07-30 的 1 多 / 7 空 / 2 中强力回升，快周期全数翻多。而
              regime 标签翻回另一边——从 07-30 的{' '}
              <span className="dn-tag">6/9 周期反转（JT&lt;0）——均值回归</span> 翻到今日的{' '}
              <span className="dn-tag bull">5/9 周期动量（JT≥0）——趋势延续</span>。快周期如今偏多、价格上行，
              趋势延续在近端周期指向上：昨日喊&ldquo;卖出反弹&rdquo;的面板，今日读&ldquo;近端趋势朝上&rdquo;。底背离簇收窄至{' '}
              <span className="dn-tag bull">5 个周期（15m/30m/4h/8h/1w）</span>（从 7 个），顶背离 2（15m/1d）。快周期夺回结构：30m RSI{' '}
              <span className="dn-tag bull">53.2</span>、1h RSI{' '}
              <span className="dn-tag bull">57.4</span> 二者如今都在云上（30m ↓64.2k 32 根，1h ↓64.0k 16 根），
              15m RSI 49.6 回到云中（64.5k–64.8k）——但 15m 与 1h 刚印了新鲜的水上死叉 1 根，是上涨内部的近端回抽。
              中周期抬进各自的云里：4h RSI{' '}
              <span className="dn-tag bull">56.1</span>（云中 64.7k–65.3k，水下金叉 11 根），8h RSI{' '}
              <span className="dn-tag bull">53.6</span>（云中 64.1k–65.0k，一根{' '}
              <span className="dn-tag bull">新鲜水下金叉 1 根</span>）——二者在 07-30 都还在云下。12h RSI 52.6 站上云
              （↓63.7k 34 根）。慢周期守住 HTF 筑底提示且更新鲜：一根{' '}
              <span className="dn-tag bull">1w 水下金叉 1 根前</span>（RSI 40.1，仍云下 ↑93.8k）与一根{' '}
              <span className="dn-tag bull">3d 水下金叉 7 根</span>（RSI 46.3，云下 ↑75.6k），以及顶周期超卖反转：{' '}
              <span className="dn-tag bull">1M ⚡ TD9 BUY 于 ≈$64,780</span>。{' '}
              <span className="dn-em">
                直读：面板确认了反弹——计数回升到平手，regime 翻回趋势延续、快周期偏多，中周期爬进各自的云、8h 印出新鲜金叉。
                慢周期（3d/1w）仍云下、无顶盖夺回，故还不是结构性的全清——但对侦察仓，这是整轮复苏里第一个偏向&ldquo;顺着夺回&rdquo;
                而非逆着它的 MTF 读数。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>周期</th><th>收盘</th><th>RSI</th><th>MACD 交叉</th><th>云（一目）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">64,794</td><td className="num">49.6</td><td className="bear">死叉（水上）1根</td><td className="neut">云中 64.5k–64.8k 2根</td><td>Buy 4</td><td>BEAR reg · BULL hid · BULL reg</td></tr>
                <tr><td>30m</td><td className="num">64,794</td><td className="num bull">53.2</td><td className="bear">死叉（水上）17根</td><td className="bull">云上 ↓64.2k 32根</td><td>Buy 1</td><td>BEAR hid · BULL hid · BULL reg</td></tr>
                <tr><td>1h</td><td className="num">64,794</td><td className="num bull">57.4</td><td className="bear">死叉（水上）1根</td><td className="bull">云上 ↓64.0k 16根</td><td>Sell 1</td><td>BEAR hid</td></tr>
                <tr><td>4h</td><td className="num">64,794</td><td className="num bull">56.1</td><td className="bull">金叉（水下）11根</td><td className="neut">云中 64.7k–65.3k 3根</td><td>Sell 6</td><td>BEAR hid · BULL reg</td></tr>
                <tr><td>8h</td><td className="num">64,794</td><td className="num bull">53.6</td><td className="bull">金叉（水下）1根</td><td className="neut">云中 64.1k–65.0k 2根</td><td>Sell 7</td><td>BULL hid · BULL reg</td></tr>
                <tr><td>12h</td><td className="num">64,780</td><td className="num bull">52.6</td><td className="bear">死叉（水上）14根</td><td className="bull">云上 ↓63.7k 34根</td><td>Sell 4</td><td>BULL hid</td></tr>
                <tr><td>1d</td><td className="num">64,783</td><td className="num bull">52.7</td><td className="bear">死叉（水上）4根</td><td className="neut">云中 61.7k–69.7k 11根</td><td>Sell 1</td><td>BEAR reg · BULL hid</td></tr>
                <tr><td>3d</td><td className="num">64,780</td><td className="num">46.3</td><td className="bull">金叉（水下）7根</td><td className="bear">云下 ↑75.6k 20根</td><td>Buy 3</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">64,783</td><td className="num">40.1</td><td className="bull">金叉（水下）1根</td><td className="bear">云下 ↑93.8k 26根</td><td>Sell 3</td><td>BULL reg</td></tr>
                <tr><td>1M</td><td className="num">64,780</td><td className="num">44.2</td><td className="neut">—</td><td className="bull">云上 ↓47.0k 29根</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 08:01 北京扫描（00:01Z；滚动最新文件，原样归档于
                    /opt/desk-note/snapshots/2026-07-31-0007/）。头部提示：{' '}
                    <em>1M ⚡ TD9 BUY 于 $64,780（超卖反转提示）</em>，{' '}
                    <em>顶背离 2：15m/1d · 底背离 5：15m/30m/4h/8h/1w</em>，{' '}
                    <em>regime 5/9 周期动量（JT≥0）——趋势延续（从 07-30 的 6/9 周期反转翻回）</em>，
                    近端方向 <em>短 15m–4h 偏多，中 8h–1d 偏空，长 3d–1M 偏空</em>。扫描现货 ≈$64,794
                    （各周期收 $64,780–$64,794；00:07Z 实时盘口锚点读现货 $64,854.01——约 $60 缺口为 6 分钟来源滞后
                    加现货对 OHLCV/永续 的基差）。收盘为进行中 K 线；每个周期收线前一律当作暂定值。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              均线矩阵确认近端这对的夺回与顶盖的一线之隔测试。现货 $64,854 如今站在三个 07-30 全在上方的日线偏移之上：{' '}
              <span className="dn-tag bull">D-SMA50 $63,450（+2.21%）</span>、{' '}
              <span className="dn-tag bull">D-EMA20 $64,358（+0.77%）</span> 与{' '}
              <span className="dn-tag bull">D-SMA20 $64,546（+0.48%）</span>——三个为正的支撑偏移，而 07-30 只有一个
              （D-SMA50）。仍在上方的唯一一条是顶盖，且只差一线：{' '}
              <span className="dn-tag bear">D-EMA50 $64,910.69（−0.09%）</span>——压力连续第七节，但 07-31 进行中日收
              $64,853.30 就在其下 $57，是自 07-24 顶盖失守以来最紧的一次盖下测试（侦察仓 07-22 曾在顶盖上方 ARMED）。
              顶盖上方的阶梯不变且远：{' '}
              <span className="dn-tag bear">W-EMA200 $67,154（−3.43%；种子）</span>、{' '}
              <span className="dn-tag bear">D-EMA100 $67,445（−3.84%）</span>——若夺回真来，这是工作首个均线目标，
              其间夹着庄家 $65k–$72k 看涨墙带——{' '}
              <span className="dn-tag bear">D-SMA100 $69,088（−6.13%）</span>、{' '}
              <span className="dn-tag bear">W-SMA20 $69,442（−6.61%）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $69,542（−6.74%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $69,686（−6.93%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $70,274（−7.71%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $71,473（−9.26%）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $73,055（−11.23%）</span>、{' '}
              <span className="dn-tag bear">W-EMA150 $73,192（−11.39%；种子）</span>。现货下方的支撑栈是夺回的近端这对，
              再是{' '}
              <span className="dn-tag bull">已结定底 200W $63,311（+2.44%）</span>，D-SMA50 紧贴其上，进行中周的 W-SMA200
              在 $63,540。远在上方且闲置：W-SMA150 $76,633（−15.37%）、W-EMA50 $78,390（−17.27%）、
              W-EMA100 $78,794（−17.69%）、W-SMA50 $84,356（−23.12%）、W-SMA100 $88,575（−26.78%）。{' '}
              <span className="dn-em">
                均线锚定 parquet 末根 2026-07-31 00:05Z（进行中收 $64,853.30）；偏移按实时现货 $64,854.01 重算。显示的均线水平为美元取整；
                偏移按精确序列值计算。W-SMA200 无法从 2023–2026 均线子集算出（188 周 K），而 W-SMA150 $76,633 可算但远在上方且闲置；
                W-EMA150 $73,192 与 W-EMA200 $67,154 由可得历史种子生成、如实标注（两者都在现货上方，故此处为压力而非支撑）；200W 周期底
                $63,311 来自完整历史 glob / 陷阱监测状态（见来源）。日收盘：07-24 $64,116.50、07-25 $64,338.10、07-26 $65,375.10、
                07-27 $63,720.80、07-28 $63,903.60、07-29 $63,958.90、07-30 $64,750.00、07-31（进行中，约 2 分钟）$64,853.30
                ——三根已完成连续阳线（07-28、07-29、07-30），07-31 进行中站在 07-30 之上，07-30 收盘是第一根拿下 D-EMA20 /
                D-SMA20 这对的，均尚未收在 D-EMA50 顶盖之上。
              </span>
            </p>

            <h2 className="dn-sec">
              庄家图 <span className="dn-roman">III · 本子强力重 gamma 至 +143.4M 头条 / +151.05M 滚加（07-30 为 +75.1M / +94.46M）· 翻转上抬 $63,001 → $63,057（现货上方 +2.85%，缓冲加宽）· 近月负值愈合——31JUL 0DTE 现为 +67.37M 主导为正，整条条子除远端 $60k −18.87M 崩盘看跌外全为正 · $65k +44.16M 最重墙，恰在现货处 · $64.5k +7.44M 现货处支撑</span>
            </h2>

            <p>
              <span className="dn-signal">
                庄家本子强力重 gamma、翻转缓冲加宽、近月负值整个愈合——追空的 gamma 燃料又没了，而夺回如今会撞上恰在现货处的一堵重看涨墙
              </span>。头条汇总 GEX 为{' '}
              <span className="dn-tag bull">+143.4M / 1%</span>（07-30 为 +75.1M），按到期滚加为{' '}
              <span className="dn-tag bull">+151.05M</span>（= gex_summary.json net_gex $151,049,301.83，07-30 为 +94.46M）——约
              +7.6M 无法对平的头条对滚加缺口，按 DN-003 血缘披露，且本次滚加再度高于头条（与 07-30 / 07-29 符号相同）。0-γ 翻转移动{' '}
              <span className="dn-tag">$63,001 → $63,057（+$56）</span>，现货 $64,854 站在{' '}
              <span className="dn-tag bull">翻转上方 +2.85%</span>（现货计口径 64,854.01 / 63,057.47 − 1 = +2.849%）；GEX 文件自身的
              &ldquo;距翻转&rdquo;读{' '}
              <span className="dn-tag bull">较其 Deribit 指数 $65,185 高 +3.37%</span>（65,185.38 / 63,057.47 − 1 = +3.374%，
              图块印 +3.4%）——两个参照都为正，且缓冲较 07-30 的 +1.61% 加宽，因现货比翻转抬得更快。墙图是一条恰以现货为中心的重正看涨带：{' '}
              <span className="dn-tag bull">$65k +44.16M</span>（最重墙，在现货处）、{' '}
              <span className="dn-tag bull">$70k +21.57M</span>、{' '}
              <span className="dn-tag bull">$66k +18.90M</span>、{' '}
              <span className="dn-tag bear">$60k −18.87M</span>（行权价盘面唯一有意义的负值，远端崩盘看跌）、{' '}
              <span className="dn-tag bull">$72k +15.71M</span>、{' '}
              <span className="dn-tag bull">$67k +14.30M</span>、{' '}
              <span className="dn-tag bull">$68k +13.19M</span>、{' '}
              <span className="dn-tag bull">$80k +9.36M</span>、{' '}
              <span className="dn-tag bull">$64.5k +7.44M</span>（现货处支撑）、{' '}
              <span className="dn-tag bull">$69k +5.70M</span>。{' '}
              <span className="dn-em">
                $66k–$72k 带合计约 +89M 的正 gamma 看涨压力（$66k +18.90M + $67k +14.30M + $68k +13.19M + $69k +5.70M +
                $70k +21.57M + $72k +15.71M = +89.37M），而 $65k 那堵恰在现货处的墙是单点最重的 +44.16M——所以穿过顶盖的夺回会径直撞上
                庄家卖 gamma，是对任何逼空的一记阻尼。现货下方近端本子是正支撑（$64.5k 口袋 +7.44M），直到远端 $60k（−18.87M）崩盘看跌之前
                再无负值——所以定底若真被回测，坐在净正 gamma 之下，缓冲而非放大。
              </span>{' '}
              按到期看，近月负值完全愈合：{' '}
              <span className="dn-tag bull">31JUL 0.3DTE +67.37M</span>（0DTE 前端，如今是主导块且为正——而 07-30 带着 30JUL −5.60M），
              之后是 1AUG 1.3 +2.36M、2AUG 2.3 +1.17M、3AUG 3.3 +2.94M、{' '}
              <span className="dn-tag bull">7AUG 7.3 +34.99M</span>、14AUG 14.3 +4.35M、21AUG 21.3 +2.23M、{' '}
              <span className="dn-tag bull">28AUG 28.3 +24.27M</span>、25SEP 56.3 +5.02M、30OCT 91.3 +0.01M、25DEC 147.3 +4.60M、
              26MAR27 238.3 +1.07M、25JUN27 329.3 +0.66M——列出的条子合计{' '}
              <span className="dn-tag bull">+151.04M</span>（net_gex $151,049,301.83 取整为 +151.05M；那 −$0.01M 是按到期的美元取整）。
              所以条子整体在每一个列出的到期上都为正：追空要的放大式负 gamma 簇整个缺席——一个 +67.37M 的 0DTE 前端加 +151.05M 的总量，
              是一个被强力阻尼的本子，是放大器的反面。
            </p>

            <p>
              期权链 IV 中位为{' '}
              <span className="dn-tag">41.5%</span>（07-30 为 43.3%），对 30D 收盘对收盘 RV 的{' '}
              <span className="dn-tag">28.77%</span>——链上富价{' '}
              <span className="dn-tag">~+12.7pt</span>。跨 N 个合约（今日 936）的链上中位，<span className="dn-em">非</span>可交易价差；
              到期/行权价级 vega、偏斜与期限结构仍未加载；波动率读数维持仅作框架。RV 方法：30D 收盘对收盘，logret.std × √365 × 100，
              取最近 30 个日对数收益（= 31 个连续日收盘），锚定 parquet 末根 2026-07-31 00:05Z；29 收益替代口径读 28.06%。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 周四 FRED 重印逆转了缓和趋势——10Y 回升 +6bp 至 4.67%（五次印数里首次回升；夺回多头利率过滤器仍 FALSE，现距触发 12bp、朝反方向走）· 但美元实质走软（DXY −0.83 至 99.97，跌破 100）、日元大幅走强（美元/日元 −3.65 至 159.65）· 利率/美元 混合，信用/流动性宽松</span>
            </h2>

            <p>
              <span className="dn-signal">
                周四的 FRED 重印打断了四天缓和——10Y 回升 +6bp 至 4.67%，把夺回多头利率过滤器从距触发 6bp 推远到 12bp、朝反方向走——即便美元跌破 100、日元大幅走强
              </span>。仪表盘渲染为 2026-07-30 22:15Z，早于快照约 1.9h，FRED 日频序列已为周四 07-30 重印。美 10Y 名义{' '}
              <span className="dn-tag bear">4.67%（+6.0bp）</span>，regime z{' '}
              <span className="dn-tag bear">+2.31</span>，偶发 z{' '}
              <span className="dn-tag">+1.40</span>——极端避险，五次印数里首次回升（4.71 → 4.69 → 4.65 → 4.61 → 4.67）。10Y TIPS 实际{' '}
              <span className="dn-tag bear">2.41%（0.0bp）</span>，regime z{' '}
              <span className="dn-tag bear">+2.70</span>——极端避险，持平。5Y5Y 盈亏平衡通胀{' '}
              <span className="dn-tag">2.28%（+4.0bp）</span>，10Y 盈亏平衡{' '}
              <span className="dn-tag">2.26%（+6.0bp）</span>——通胀补偿走强。HY OAS{' '}
              <span className="dn-tag bull">2.87%（+3.0bp）</span>，regime z{' '}
              <span className="dn-tag">−0.06</span>——中性，略走阔。MOVE 债市波动率{' '}
              <span className="dn-tag">74.2（+3.30）</span>，regime z +0.03——中性。旁支明显走软：DXY{' '}
              <span className="dn-tag bull">99.97（−0.83）</span>，regime z +0.91——偏紧但跌破 100（较 07-30 的 101.39 下 −1.42）；美元/日元{' '}
              <span className="dn-tag bull">159.65（−3.65）</span>——日元大幅走强（从 163.84）；美联储净流动性{' '}
              <span className="dn-tag bear">$5.825T（−0.092T，新周频印数）</span>，偶发 z −2.47——头部标签 RISK-OFF 但水位在语境里仍宽松。美日 10Y 利差{' '}
              <span className="dn-tag">2.00%（+6.0bp）</span>。NFCI{' '}
              <span className="dn-tag bull">−0.554</span>，RISK-ON（周频）。{' '}
              <span className="dn-em">
                净结论：夺回多头利率过滤器（10Y &lt; 4.55%）在 4.67% 处仍 FALSE、且走了反方向——一次 +6bp 回升打断缓和、把门槛从 6bp 推远到 12bp，
                所以独立利率腿如今比 07-30 更远离触发。但美元侧实质放松（DXY 跌破 100、日元走强），信用维持宽松（HY OAS 中性）、流动性/NFCI 维持宽松/RISK-ON
                ——是一条混合的宏观盘，而非一次干净的避险收紧。本次印数没有翻转侦察仓的利率门槛；利率腿本就不是撑起这套装置的那条——聪明钱重新穿多与顶盖测试才是。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>水位</th>
                  <th>Δ（末次 FRED 变动）</th>
                  <th>regime z</th>
                  <th>偶发 z</th>
                  <th>读</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>美 10Y 名义</td><td className="num">4.67%</td><td className="num bear">+6.0bp</td><td className="num bear">+2.31</td><td className="num">+1.40</td><td className="bear">极端避险 · 周四 +6bp（缓和打断）</td></tr>
                <tr><td>10Y TIPS 实际</td><td className="num">2.41%</td><td className="num">0.0bp</td><td className="num bear">+2.70</td><td className="num">+1.30</td><td className="bear">极端避险 · 持平</td></tr>
                <tr><td>5Y5Y 盈亏平衡通胀</td><td className="num">2.28%</td><td className="num bear">+4.0bp</td><td className="num">+0.81</td><td className="num">+2.20</td><td className="neut">偶发</td></tr>
                <tr><td>10Y 盈亏平衡</td><td className="num">2.26%</td><td className="num bear">+6.0bp</td><td className="num">−0.94</td><td className="num">+0.83</td><td className="neut">无标签 · 走强</td></tr>
                <tr><td>HY OAS</td><td className="num">2.87%</td><td className="num bear">+3.0bp</td><td className="num">−0.06</td><td className="num">+2.39</td><td className="neut">中性 · 略走阔</td></tr>
                <tr><td>芝加哥联储 NFCI</td><td className="num">−0.554</td><td className="num">−0.01</td><td className="num bull">−1.56</td><td className="num bull">−1.53</td><td className="bull">RISK-ON · 周频</td></tr>
                <tr><td>MOVE 债市波动率</td><td className="num">74.2</td><td className="num">+3.30</td><td className="num">+0.03</td><td className="num">+1.09</td><td className="neut">中性</td></tr>
                <tr><td>DXY</td><td className="num">99.97</td><td className="num bull">−0.83</td><td className="num bear">+0.91</td><td className="num bull">−2.78</td><td className="bull">走软跌破 100</td></tr>
                <tr><td>美联储净流动性</td><td className="num">$5.825T</td><td className="num bear">−0.092T</td><td className="num">−1.09</td><td className="num bull">−2.47</td><td className="bear">新周频印数 · 收缩</td></tr>
                <tr><td>美元/日元</td><td className="num">159.65</td><td className="num bull">−3.65</td><td className="num">+0.80</td><td className="num bull">−3.00</td><td className="bull">日元大幅走强</td></tr>
                <tr><td>美日 10Y 利差</td><td className="num">2.00%</td><td className="num bear">+6.0bp</td><td className="num">−0.36</td><td className="num">+1.40</td><td className="neut">中性</td></tr>
                <tr><td>日本 10Y</td><td className="num stale">2.67%</td><td className="num stale">+2.0bp（月频）</td><td className="num stale">+2.42</td><td className="num stale">+1.09</td><td className="stale">月频 · 勿倚重</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗口，22 资产，167 行，汇总 00:01Z——{' '}
              <span className="dn-em">7 天滚动读数，非今日</span>）。非对角均值{' '}
              <span className="dn-tag">|r| 0.343</span>——NORMAL 带，较 07-30 的 0.363 略松，但仍同向而动。BTC 最强联系是{' '}
              <span className="dn-tag">NQ +0.558</span>，其后 SP500{' '}
              <span className="dn-tag">+0.548</span>、TSLA{' '}
              <span className="dn-tag">+0.534</span>、JP225{' '}
              <span className="dn-tag">+0.479</span>、SILVER{' '}
              <span className="dn-tag">+0.469</span>、PLAT{' '}
              <span className="dn-tag">+0.453</span>、COPPER{' '}
              <span className="dn-tag">+0.451</span>、PALL{' '}
              <span className="dn-tag">+0.445</span>、GOLD{' '}
              <span className="dn-tag">+0.410</span>、URNM{' '}
              <span className="dn-tag">+0.408</span>、NVDA{' '}
              <span className="dn-tag">+0.396</span>。7d 表现才是提示，且维持跨资产多头注脚：{' '}
              <span className="dn-tag bear">BTC −0.25%</span> 基本持平——对 NQ、JP225、翻红的 AI 大盘科技板块与能源有韧性，但{' '}
              <span className="dn-em">并非</span>头号风险资产（领跑的是翻绿的软件与金属）：它落在一个劈裂的复合内、{' '}
              <span className="dn-em">领先</span> NQ{' '}
              <span className="dn-tag bear">−0.87%</span>（BTC +0.62pt）——AI 大盘科技深红：NVDA{' '}
              <span className="dn-tag bear">−5.39%</span>、META{' '}
              <span className="dn-tag bear">−10.62%</span>、TSLA{' '}
              <span className="dn-tag bear">−4.73%</span>、AAPL{' '}
              <span className="dn-tag bear">−2.46%</span>、JP225{' '}
              <span className="dn-tag bear">−0.69%</span>，对着翻绿的大盘 MSFT{' '}
              <span className="dn-tag bull">+16.93%</span>、AMZN{' '}
              <span className="dn-tag bull">+9.76%</span>、GOOGL{' '}
              <span className="dn-tag bull">+4.72%</span> 与 SP500{' '}
              <span className="dn-tag bull">+0.48%</span>。金属全线翻绿（GOLD{' '}
              <span className="dn-tag bull">+1.35%</span>、SILVER{' '}
              <span className="dn-tag bull">+2.05%</span>、PLAT{' '}
              <span className="dn-tag bull">+3.38%</span>、PALL{' '}
              <span className="dn-tag bull">+4.59%</span>、COPPER{' '}
              <span className="dn-tag bull">+2.84%</span>），能源维持沉重（CL −8.49%、BRENT −6.98%、NGAS −5.79%），URNM −3.46%。{' '}
              <span className="dn-em">
                相关性 regime 仍 NORMAL（0.343），BTC 随一片双色调的风险盘而动——7d 基本持平，跑赢 NQ 与翻红的 AI 大盘科技 / 能源板块，
                而翻绿的大盘软件（MSFT +16.93%、AMZN +9.76%、GOOGL +4.72%）与翻绿的金属领跑这条劈裂的盘、走在它前面。所以 BTC 并非头号风险资产
                ——它是对红色板块的相对强势幸存者，而非 RS 领先。按 DN-001 血缘，这是一条 NORMAL、混合的跨资产读数——红盘里一抹温和的多头倾斜，非轮动判断。
              </span>{' '}
              日本 10Y 月频 2.67% 带月频标签——勿倚重。
            </p>

            <h2 className="dn-sec">
              交易本子{' '}
              <span className="dn-roman">V · 回补反弹侦察仓 DEFERRED（第 8 天）但自 07-24 递延以来最接近武装——流量腿如今全 TRUE（聪明钱重新穿回净多 +503，OI 需求驱动、全 CVD 正），价格腿以 $57 之差 FALSE（D-EMA50 顶盖未夺回），利率 FALSE 且走远（10Y +6bp 至 4.67%）· 追空按兵不动且更远离武装——聪明钱回补、0DTE 负值愈合、本子重 gamma 至 +151.05M、定底未测 · 账本 FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                07-30 的岔口在多头侧解决了——聪明钱回补并重新穿回净多，流量终于与价格对齐——但价格在顶盖下停住 $57，所以侦察仓上膛却尚未武装
              </span>。07-30 备忘把两笔交易门控在同一事件上，并明确列出多头路径：人群的买盘把价格带进一次逼聪明钱回补的 D-EMA50 夺回，侦察仓随聪明钱重新穿多而武装。
              今日流量侧恰恰如此——聪明钱回补空、重新穿回净多 +503，OI 需求驱动式扩张、四条流量读数全正，价格拉过 D-EMA20 / D-SMA20 这对去压顶盖。侦察仓的两条流量腿整轮复苏里
              头一回同时打成 TRUE。但价格腿——收在顶盖上方的 D-EMA50 收盘——以 $57 之差未满足（07-31 进行中 $64,853.30 vs $64,910.69），且利率过滤器走了反方向（10Y +6bp 至 4.67%）。
              所以今日交易本子仍是无侦察开仓、无追空、无新对冲——但有纪律的读法已从&ldquo;递延、等流量&rdquo;移到&ldquo;递延、只等收盘&rdquo;：把侦察仓按住，直到 D-EMA50 在日收上被夺回，
              那如今与一次已在手的聪明钱重新穿多、需求驱动 OI 配对，并把追空按住——它今日在每一条腿上都反转、远离了武装。
            </p>

            <div className="dn-trade">
              <span className="dn-side long">多 · 侦察 · DEFERRED（第 8 天）· 流量腿如今全 TRUE（聪明钱重新穿回净多、OI 需求驱动），价格腿以 $57 之差 FALSE，利率 FALSE 且走远</span>
              <div className="dn-trade-name">
                回补反弹侦察仓——流量腿终于打成 TRUE（聪明钱回补并重新穿回净多，OI 需求驱动式扩张、全 CVD 正），价格压 D-EMA50 顶盖到一美元，但收盘停在其下 $57、利率走了反方向，故维持递延、距武装差一次日收
              </div>
              <div className="dn-thesis">
                再武装门槛是自 07-24 递延以来最好的读数：四条腿里两条翻成 TRUE，价格腿离触发一线之隔。<em>聪明钱加仓</em> 腿如今 TRUE
                ——聪明钱回补了它一天的空、重新穿回净多 +503（Δ空 −1,858 回补、Δ多 +939 补回，122% 摆幅），是它翻空以来首次穿回净多，顺着上涨布仓。
                <em>OI 需求</em> 腿如今 TRUE——OI 扩张 +2.16%（+2,258 BTC），四条流量读数全正（现货CVD +2,507、期货CVD +1,087、taker +1,087、大单 +716），
                是此前每一节都缺的需求驱动扩张。<em>价格</em> 腿（阳线上夺回 D-EMA50）以 $57 之差 FALSE——三根已完成阳线（07-28 / 29 / 30）把现货拖上去测 $64,910.69 顶盖，
                但 07-31 进行中收 $64,853.30 在其下 −0.09%，连续第七节未夺回。而 <em>利率</em> 过滤器维持 FALSE 且走远——10Y +6bp 至 4.67%，现距 4.55% 门槛 12bp。
                侦察仓的需求腿与价格夺回腿终于相位对齐；开仓在一次日收拿下 D-EMA50 顶盖、且聪明钱重新穿多与需求驱动 OI 仍在场的那一刻武装。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">再武装门槛（四条腿里两条 TRUE）</span><span className="dn-lvl-v bull">聪明钱加仓 / 重新穿回净多（TRUE——穿回 +503，回补空头，补回多头）· OI 需求驱动（TRUE——+2.16% 扩张，四条流量读数全正）· 阳线夺回 D-EMA50（以 $57 之差 FALSE——07-31 收 $64,853.30 vs $64,910.69 顶盖）· 10Y &lt; 4.55%（FALSE 且更糟——4.67%，+6bp，距 12bp）</span></div>
                <div><span className="dn-lvl-k">那个签名</span><span className="dn-lvl-v bull">聪明钱在 07-27 跌里加（+214%）、07-29 弹里减（−41%）、07-30 翻空（−2,285），如今在顶盖测试里回补并重新穿回净多（+503）——需求腿与价格夺回腿终于相位对齐</span></div>
                <div><span className="dn-lvl-k">侦察开仓</span><span className="dn-lvl-v bull">在一次收在 $64,911 上方的 D-EMA50 日收、且聪明钱重新穿多与需求驱动 OI 仍在场时：侦察多 0.2R——流量确认已在手，只差收盘</span></div>
                <div><span className="dn-lvl-k">止损</span><span className="dn-lvl-v bear">日收 &lt; $63,311（已结定底 200W / D-SMA50 汇合——收破即终结复苏读数）</span></div>
                <div><span className="dn-lvl-k">目标</span><span className="dn-lvl-v">$65k–$72k 看涨墙带为实操上限（$65k +44.16M 恰在现货处）；工作均线目标 D-EMA100 $67,445，$66k / $67k 墙处减半</span></div>
                <div><span className="dn-lvl-k">仓位</span><span className="dn-lvl-v">确认日收上 0.2R · 流量头一回在确认，故开仓看价格收盘，而非再等流量</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R：</b>确认夺回约 $64,911 开仓（D-EMA50 日收），止损 $63,311（已结定底 / D-SMA50）= 约 $1,600 风险；工作目标
                D-EMA100 $67,445 = 约 $2,534 回报 ≈ 1.58:1——但 $65k–$72k 看涨墙带盖住路径（$65k +44.16M 墙恰在现货处），故现实首目标是 $66k / $67k 墙，
                到那里的 R/R 更薄。<b>硬规则：</b>侦察仓在 D-EMA50 收盘上武装，不在盘中触碰上——复苏里价格已两度把顶盖压到一美元（07-24、今日）而无收在其上，
                故确认腿是一次收在 $64,911 之上的已完成日收，且聪明钱重新穿多与需求驱动 OI（两者皆已 TRUE）仍在守。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side short">空 · 追空 · 按兵不动 · 更远离武装——聪明钱回补、0DTE 负值愈合、本子重 gamma 至 +151.05M、定底未测</span>
              <div className="dn-trade-name">
                追空——今日每一条再武装腿都反转了：聪明钱回补它的空、近月负值愈合（31JUL 现为 +67.37M 为正）、本子重 gamma 至 +151.05M、定底压根没被测，故较近期任何时点都更远离武装
              </div>
              <div className="dn-thesis">
                07-30 追空较自重置以来任何时点都更接近武装——聪明钱翻净空、一处 0DTE 负值重现，只差一次 $63,311 收盘破位。今日那些腿每一条都反转了。聪明钱回补并重新穿回净多 +503，
                所以空所建立其上的仓位提示没了。近月负值愈合——30JUL −5.60M 0DTE 已下盘面，31JUL 前端如今 +67.37M、是主导为正的块。庄家本子从 +75.1M / +94.46M 强力重 gamma 至
                +143.4M / +151.05M，$65k +44.16M 墙如今最重且恰在现货处。而定底压根没进场——价格拉离时 24h 低 $63,616 高出 $63,311 $305。所以追空在每一条腿上都比 07-30 更远离武装：
                在此做空，是对着一个已回补的本子、进一堵恰在头顶的重正看涨带、且定底未测做空——是血缘要按住的最低质量的空。它只在一次新鲜的聪明钱滚离 且 一次带放大式负 gamma 的
                $63,311 收盘破位上再武装——这些如今一样都不在场。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">再武装腿（全部反转）</span><span className="dn-lvl-v bull">聪明钱滚离（反转——聪明钱回补并重新穿回净多 +503）· 近月负 gamma（反转——31JUL 0DTE +67.37M 为正，30JUL −5.60M 愈合）· 定底收盘破位（未满足——定底未测，24h 低 $63,616 高出 $305）· 放大式负 gamma（反转——本子重 gamma 至 +151.05M 为正）</span></div>
                <div><span className="dn-lvl-k">为何较 07-30 更远离武装</span><span className="dn-lvl-v bull">记录性买家回补了（熊派仓位提示没了），庄家本子在滚加上重 gamma +56.6M，0DTE 前端从 −5.60M 翻到 +67.37M，且价格拉离定底、而非压它</span></div>
                <div><span className="dn-lvl-k">何以武装该空</span><span className="dn-lvl-v bear">一次新鲜的聪明钱滚离回到净空 且 一次日收 &lt; $63,311、近月负 gamma 重现——是今日盘面的完整反转，而非其延续</span></div>
                <div><span className="dn-lvl-k">禁做</span><span className="dn-lvl-v">不在一个已回补的本子、一个愈合的 0DTE 前端、一条 +151.05M 的正庄家条子、一处未测的定底上追空；今日装置走了反方向</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b>追空的优势本是现货下方带放大式负 gamma 的定底破位、加聪明钱已为此布仓。07-30 仓位腿在场、只差破位；今日仓位腿反转了（聪明钱回补）、gamma 腿反转了
                （本子重 gamma、0DTE 前端愈合）、定底移出了场。让空&ldquo;更接近武装&rdquo;的每一项输入昨日都没了。它按兵不动、等一次真正的反转——一次新鲜的聪明钱滚离与一次 $63,311
                收盘破位——而非今日需求盘的延续。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 多头岔口解决——聪明钱回补了空，人群去拥挤，两个本子重新对齐进一次顶盖测试</span>
              <div className="dn-trade-name">
                派发 → 吸筹——昨日两本子劈叉多头式地解决了：记录性买家把它的空回补进一次需求驱动的扩张，价格压 D-EMA50 顶盖；岔口如今是顶盖收盘，而非定底
              </div>
              <div className="dn-thesis">
                进第八节，07-30 的派发对防守劈叉解决了——且是按 07-30 备忘点名的多头路径解决的。07-27 跌里聪明钱加 +214%（需求腿 TRUE、价格腿 FALSE）；07-29 弹里它减 −41%（两腿皆 FALSE）；
                07-30 它干脆翻空 −2,285（派发进强势）；今日它回补了那笔空、重新穿回净多 +503，进一次需求驱动的 OI 扩张，同时散户去拥挤（从 60.93 到 55.72）——聪明钱在人群退开时买回熊陷阱的空。
                定底压根没进场；价格转去测顶盖。这已不再是对峙——而是一次进上方压力的回补夺回，决胜手从 $63,311 定底上移到 $64,911 D-EMA50 顶盖。要么下一次日收拿下顶盖（侦察仓实弹武装、夺回撞 $65k–$72k
                看涨带、流量已在确认），要么顶盖处一线之隔的拒绝守住、价格织出又一个更低的高点，而拥挤多头 carry（资金费顶上限、0 负行）仍在那里等着解开。本备忘押在那个顶盖收盘，而非盘中触碰。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">多头解决</span><span className="dn-lvl-v bull">一次日收上夺回 D-EMA50 $64,911、且聪明钱重新穿多（+503）与需求驱动 OI（全 CVD 正）仍在场——相位对齐，侦察仓实弹武装 0.2R；趋势延续 regime 翻转与回升的 MTF 计数偏向这侧</span></div>
                <div><span className="dn-lvl-k">空头解决</span><span className="dn-lvl-v bear">$64,911 处一线之隔的拒绝守住、价格织出又一个更低的高点，拥挤多头 carry（资金费 +9.16% 均值、0 负行、上限 37%）解开，一次新鲜的聪明钱滚离重开 $63,311 定底问题——但那是今日盘面的反转，非基准情形</span></div>
                <div><span className="dn-lvl-k">决定性提示</span><span className="dn-lvl-v">$64,911 D-EMA50 日收、聪明钱是守住重新穿多还是滚回去，以及顶在上限的资金费是续还是在拒绝上冲刷——而非盘中顶盖触碰</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>优势在于认清对峙已解决——聪明钱回补、人群去拥挤，盘面如今是一次进顶盖的回补夺回，而非一场派发对防守劈叉。血缘不追盘中顶盖触碰；它等 D-EMA50 日收确认夺回
                （侦察仓在流量已 TRUE 下武装），或等拒绝守住、一次新鲜的聪明钱滚离重开定底问题（追空再武装）。读顶盖收盘、读聪明钱守住还是滚离、读资金费 carry——而非 K 线。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 多头岔口解决——聪明钱回补并重新穿回净多 +503（多头仓位提示点燃），OI 需求驱动式扩张（全 CVD 正），价格压 D-EMA50 顶盖到 −0.09% · 但顶盖收盘未点燃（07-31 进行中 $64,853.30，下方 $57），利率过滤器走远（10Y +6bp 至 4.67%）· 侦察仓 DEFERRED 但最接近武装 · 追空更远离武装 · 账本 FLAT</span>
            </h2>

            <p>
              在 07-30 的决策条件里：<em>回补反弹侦察仓的流量腿</em> 整轮复苏里头一回点燃（聪明钱回补并重新穿回净多 +503，OI 需求驱动式扩张、四条流量读数全正——此前每一节都 FALSE 或更糟的两条腿）；
              <em>阳线夺回 D-EMA50</em> 未点燃但逼到一美元（三根已完成阳线把现货拖到距 $64,910.69 顶盖 −0.09%，07-31 进行中收 $64,853.30 在其下 $57——自 07-24 递延以来最紧的一次测试）；
              <em>夺回多头利率过滤器</em> 维持 FALSE 且走远（周四 10Y 回升 +6bp 至 4.67%，打断四天缓和、把门槛从 6bp 推到 12bp）；<em>追空再武装</em> 在每一条腿上都反转（聪明钱回补、0DTE 负值愈合至 +67.37M、
              本子重 gamma 至 +151.05M、定底未测）；而 <em>已结定底止损</em> 压根没进场（价格拉离时 24h 低 $63,616 高出 $63,311 $305）。{' '}
              <em>聪明钱回补了熊陷阱的空、重新穿回净多进一次需求驱动的扩张——正是 07-30 备忘点名的多头解决——但价格在武装该交易的顶盖收盘下停住 $57，所以侦察仓上膛递延、而非实弹。</em>{' '}
              今日条件围绕一个已回补的聪明钱本子、一个去拥挤的散户、一个重 gamma 转正的庄家本子、一条走远的利率腿、以及一个被测到一美元的 D-EMA50 顶盖重新排定：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水位</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>聪明钱加仓 / 重新穿回净多（侦察流量腿）</td><td className="bull">TRUE——聪明钱回补并重新穿回净多 +503（Δ空 −1,858 回补，Δ多 +939 补回，122% 摆幅），翻空以来首次穿回净多</td><td>侦察流量腿满足：记录性买家顺着上涨布仓——开仓如今只等价格收盘</td></tr>
                <tr><td>OI 背后有买家（侦察流量腿）</td><td className="bull">TRUE——OI +2.16%（+2,258 BTC）需求驱动，四条流量读数全正（现货CVD +2,507、期货CVD +1,087、taker +1,087、大单 +716）</td><td>侦察需求腿满足：整轮复苏里头一回扩张是需求驱动</td></tr>
                <tr><td>阳线夺回 D-EMA50（侦察价格腿）</td><td className="bear">以 $57 之差 FALSE——07-31 进行中收 $64,853.30 vs $64,910.69 顶盖（−0.09%）；三根已完成阳线但均未收在顶盖上方</td><td>暂不开侦察多：价格腿离触发一线之隔——侦察仓在一次收在 $64,911 上方的日收武装</td></tr>
                <tr><td>夺回多头利率过滤器</td><td className="bear">FALSE 且更糟——10Y 4.67% &gt; 4.55%（周四 +6bp，缓和打断，距 12bp，07-30 为 6bp）</td><td>独立过滤器为假且走远；但它不是撑起装置的那条腿——聪明钱重新穿多与顶盖测试才是</td></tr>
                <tr><td>回补反弹侦察仓（多）</td><td className="bull">一次收在 $64,911 上方的 D-EMA50 日收、且聪明钱重新穿多（+503）与需求驱动 OI 仍在场</td><td>侦察多 0.2R，止损 $63,311，工作目标 D-EMA100 $67,445（受 $65k–$72k 看涨墙盖），R/R ~1.58:1</td></tr>
                <tr><td>追空再武装（更远离武装）</td><td className="bull">全部腿反转——聪明钱回补（+503）、0DTE 负值愈合（31JUL +67.37M）、本子重 gamma（+151.05M）、定底未测</td><td>不在一个已回补的本子 / 正条子 / 未测的定底上追空；只在一次新鲜的聪明钱滚离 且 一次 $63,311 收盘破位上再武装</td></tr>
                <tr><td>已结定底止损 / 底部测试</td><td className="bull">未进场——价格拉离时 24h 低 $63,616 高出 $63,311 定底 $305；现货高出 +2.44%</td><td>定底今日置身事外；复苏读数继续运行，决胜手上移到 $64,911 顶盖</td></tr>
              </tbody>
            </table>

            <p>
              重写<em>这份</em>备忘的那一行是{' '}
              <span className="dn-signal">
                聪明钱已回补并重新穿回净多之下的 $64,911 D-EMA50 日收——收破即在流量确认已在手下实弹武装侦察仓，而一线之隔的拒绝则织出又一个更低的高点、拥挤多头 carry 仍待解开，
                二者之间的一切都是交易台如今在读的进顶盖的回补夺回
              </span>。多头岔口解决了：记录性买家回补了它一天的熊陷阱空、重新穿回净多进一次需求驱动的 OI 扩张，人群去拥挤而非追涨，价格拉过 D-EMA20 / D-SMA20 这对去压 D-EMA50 顶盖到一美元
              ——侦察仓的两条流量腿整轮复苏里头一回同时打成 TRUE。但价格腿在顶盖收盘下停住 $57，利率过滤器走了反方向，故收盘上一样都没武装。直到一次日收拿下 $64,911、或拒绝守住逼聪明钱滚回去之前，
              本备忘照写运行：侦察仓 DEFERRED 第八天，却是自 07-24 递延以来最接近武装的一刻——流量已确认、距实弹一次收盘；追空在每一条腿上都反转、远离武装，按兵不动；空头价差不在一条走得更远离触发的利率腿上重建；
              账本在顶盖下方维持 FLAT。MTF 计数回升到平手、regime 翻回趋势延续，庄家本子重 gamma 至 +151.05M、0DTE 前端愈合，BTC 对 NQ 与翻红的 AI / 能源板块维持韧性——并非头号（领跑的是翻绿的软件与金属）
              但在劈裂盘里基本持平——对齐终于偏多。未来 24h 的正确读法是{' '}
              <em>耐心——流量已确认；读 $64,911 顶盖收盘、读聪明钱是否守住重新穿多，别读盘中触碰，也别买价格尚未收在其上的顶盖</em>。
            </p>

          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计痕迹 · v2（已过 codex 敌对式审计）
            </span>
            <p>
              <b>状态：</b>本为 v2 中文版，与 v2 英文版并行、数据零漂移；由 v1 在 STAGE B codex 敌对式审计后晋级
              （audits/2026-07-31-desk-note.md，裁定 BLOCK-CRITICAL：1 CRITICAL、2 MAJOR、2 MINOR，另加一轮 ask-deepseek 补充数值重算）。
              STAGE C 逐条套用每一处发现并跑强制 grep 收敛环（模式 → 命中前 → 命中后）至零残留，方晋级 v1 → v2。本中文版承载校正后的数值，与英文版逐条一致。
              锚定 2026-07-31 00:07Z 快照（实盘 t == &ldquo;07-31 08:07&rdquo; 北京）；滚动来源归档于 /opt/desk-note/snapshots/2026-07-31-0007/。
            </p>
            <p>
              <b>DN-001（CRITICAL）——北京→UTC 换算在实盘注解里错了一个月。</b>模式 <em>06-30 23:03Z</em> 与 <em>06-30 23:51Z</em>（另加宽泛的
              <em>06-\d\d</em> 日期扫）：命中前 4，命中后 0。每一处北京 07-31 07:03 / 07:51 时戳现换算为 2026-07-30 23:03Z / 23:51Z（散户 24h 低与聪明钱重新穿多行）；
              宽扫确认唯一剩下的 <em>06-</em> 记号是正确的 06:31Z UTC 时间（07-30 14:31 北京），非日期——已解决。
            </p>
            <p>
              <b>DN-002（MAJOR）——&ldquo;整轮复苏最接近武装&rdquo;与侦察仓自身 07-22 ARMED 状态矛盾。</b>模式 <em>整轮复苏 / 复苏里最接近武装 / 复苏里最紧测试 / 复苏最佳读数</em>：
              命中前 8，命中后 0。每一处武装/顶盖测试的最高级现界定为&ldquo;自 07-24 递延以来&rdquo;（或&ldquo;自 07-24 顶盖失守以来最紧的盖下回测&rdquo;），07-22 ARMED 状态保留明示，
              −0.09% 测试行明说其非整轮复苏里最近；codex 接受的流量类&ldquo;整轮复苏头一回&rdquo;主张（一族独立主张，非被标记的最高级）予以保留——已解决。
            </p>
            <p>
              <b>DN-003（MAJOR）——BTC 被过度表述为&ldquo;最有韧性 / 最不差的主要风险资产&rdquo;，而同段列出更强的翻绿资产。</b>模式 <em>最有韧性 / 最不差 / 相对强势幸存者（无限定）</em>：
              命中前 4，命中后 0。每一处最高级收窄：BTC 对 NQ、JP225、翻红的 AI 大盘科技板块与能源有韧性，但并非头号风险资产——翻绿的大盘软件（MSFT/AMZN/GOOGL）与翻绿的金属领跑劈裂盘、走在它前面——已解决。
            </p>
            <p>
              <b>DN-004（MINOR）——MOVE 在来源/正文里标&ldquo;持平&rdquo;而表与来源显示 +3.30。</b>模式 <em>MOVE 74.2（持平）/ 74.2（flat）</em>：命中前 2，命中后 0；
              两处重述为 MOVE 74.2（+3.30），中性 regime 读保留（表行本已正确）——已解决。
            </p>
            <p>
              <b>DN-005（MINOR）——1 分钟主动盘偏斜 24h 均值差 0.01。</b>模式 <em>均值 −4.62</em>：命中前 1，命中后 0；校正为 −4.61（行钉的 1,441 行窗口均值 −4.6053）——已解决。
            </p>
            <p>
              <b>补充（ask-deepseek，经裁定）：</b>net-GEX 条子合计等式（&ldquo;+151.04M（= net_gex）&rdquo;）已校正——条子合计 +151.04M，而 net_gex $151,049,301.83 取整为 +151.05M，
              那 −$0.01M 现披露为按到期的美元取整；其余两项 deepseek 条目（聪明钱前净 −2,295 vs −2,294.54、D-EMA50 $64,910.69 vs ~$64,911）裁定为本备忘的标准&ldquo;显示取整 / 计算取精&rdquo;惯例
              （codex 标记两处算术皆干净）而保留原样。整体：<b>已过 codex 敌对式审计</b>。
            </p>
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘为 Hysteresis Research（迟滞研究）合伙人内部讨论所备，<em>非投资建议、非招揽、非要约</em>，亦未针对任何接收方情况个性化。数字反映单一原子快照
            （2026-07-31 00:07Z），分段出处见上方来源带；宏观 Tier-1 面板渲染为 2026-07-30 22:15Z（早于快照约 1.9h）并含周四 FRED 日频重印，部分输入明确陈旧或待定并已如实标注。
            水位、仓位与条件仅示意交易台流程，非长期建议。过往相关性、gamma 与仓位形态不约束未来盘面。衍生品有全额亏损风险，若带杠杆，亏损可超出已缴保证金。<em>请自行研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                聪明钱回补了熊陷阱的空、重新穿回净多进一次需求驱动的扩张，价格压 D-EMA50 顶盖到一美元——侦察仓的流量腿终于同时打成 TRUE，距武装差一次日收。别买价格尚未收在其上的顶盖。读收盘。耐心。
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
            v2 · 2026-07-31 00:07Z 快照 · 来源：live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet ·
            ma200w_trap_watch_state.json · FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
