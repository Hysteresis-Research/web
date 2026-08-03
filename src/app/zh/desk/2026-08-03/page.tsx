import type { Metadata } from 'next';
import { pageMetadata } from '../../../../lib/seo';
import { requireViewer } from '@/lib/gate';

// 内部路由：不在公共 nav，不在 sitemap，noindex/nofollow。
// 描述故意中性化——任何后续外部分享（Slack/邮件链接预览）显示中性文本，
// 而非带日期的具体交易细节。
export const metadata: Metadata = {
  ...pageMetadata({
    title: '交易台备忘 · 2026-08-03 · Hysteresis Research · 迟滞研究',
    description: '内部交易台备忘。',
    path: '/zh/desk/2026-08-03',
    lang: 'zh-Hans',
    type: 'article',
  }),
  alternates: { canonical: '/zh/desk/2026-08-03' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = 'force-dynamic';

export default async function DeskZh20260803() {
  await requireViewer('/zh/desk/2026-08-03');
  return (
    <main className="desk-stage" lang="zh-Hans">
      <article className="desk-letter">

        <header className="dn-titleband">
          <span>HysRes · BTC · 交易台备忘 · 2026-08-03 · v2</span>
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
              <span className="dn-big">$63,435</span>
              24h&nbsp;<span style={{ color: 'var(--dn-bull)' }}>+0.85%</span>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="dn-manifest">
            <span className="dn-lbl">
              数据来源 · 原子快照 2026-08-03 00:07Z
            </span>
            <table>
              <tbody>
                <tr>
                  <td className="dn-s">实时盘口（现货 / 永续 / OI / SM / 资金费）</td>
                  <td className="dn-v-cell">live_db.json · 2026-08-03 00:07Z（快照锚点，t == &ldquo;08-03 08:07&rdquo; 北京时间）</td>
                  <td className="dn-flag">
                    最新 · 1 分钟 · 锚点固定在 00:07Z（北京 08:07）的文件尾部以保可复现 ·
                    24h 窗口口径：头条 delta 用同时钟前一日基线 t == &ldquo;08-02 08:07&rdquo; 北京时间
                    （端点减去 24h 前那一行，回溯 1,440 个 1 分钟区间 / 含头尾 1,441 行）。4h / 1h
                    流量块用前一行含端点基线（08-03 04:07 / 07:07 至 08:07 锚点）；本轮序列在子窗口间连续，
                    故与同时钟端点一致——无基线偏差。24h 窗口内无 CVD 重置特征——端点 fut_cvd Δ −1,877.5
                    与逐分钟 taker-net 累加 −1,877.5 精确对账，cb_cvd（17,569.2 → 25,747.3，六个 &gt;120 BTC
                    的单分钟跳变，最大 +239.3，无重置量级台阶）——故 CVD delta 为端点原始差，不需 Method A ·
                    资金费 / 流量的逐行统计跨 1,441 行窗口；溢价均值排除空行 ·{' '}
                    <b>数据质量提示：</b>本轮 SM 净头寸序列干净——24h 窗口内无任何单分钟跳变 &gt; |3,000| BTC
                    （对照 08-02 那份，其 −22,911 的一分钟令 SM 读数数据受损）。这次 SM 更深地滚向净空是一条
                    真实的盘口读数，不是伪迹
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">MTF 背离 + 一目均衡 + TD</td>
                  <td className="dn-v-cell">mtf_div_latest.html · 2026-08-03 08:01 北京扫描（00:01Z）</td>
                  <td className="dn-flag">
                    滚动最新文件 · 原样归档于 /opt/desk-note/snapshots/2026-08-03-0007/ ·
                    较快照锚点约滞后 6 分钟 · 进行中 K 线 · 扫描现货 $63,526
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">BTC GEX / IV</td>
                  <td className="dn-v-cell">btc_gex.html · 2026-08-03 00:00Z 快照</td>
                  <td className="dn-flag">
                    约滞后 7 分钟 · Deribit 指数 $63,925 vs 实时 $63,435 · IV 中位 40.4% · 866
                    个合约（08-02 为 868）· 头条 Total GEX +38.1M vs 按到期汇总 +48.86M
                    （= gex_summary.json net_gex $48,863,525.27）——约 10.8M 源面板不对账缺口，按 DN-003
                    脉络披露，汇总再次高于头条（与 08-02 / 08-01 / 07-31 关系相同）；两个面板都硬性
                    重新伽玛为净多头伽玛（头条 +6.3M → +38.1M，汇总 +20.25M → +48.86M），0DTE 前端
                    维持为正（3AUG +7.31M）——做市商账本现在是强阻尼，追空的伽玛放大器已消失；现货下方的
                    负伽玛货架减轻至 −44.66M（$62k −9.06M，$60k −22.74M）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">跨资产相关性 7d</td>
                  <td className="dn-v-cell">
                    cross_asset_correlation_summary.md · 2026-08-03 00:00Z
                  </td>
                  <td className="dn-flag">约滞后 7 分钟 · 7d 1h K 线 · 22 个资产 · 167 行 · 已归档</td>
                </tr>
                <tr>
                  <td className="dn-s">宏观 regime z 分数面板</td>
                  <td className="dn-v-cell">macro_dashboard.html · 2026-08-02 22:15Z 渲染</td>
                  <td className="dn-flag">
                    渲染滞后约 1.87h · 10Y 守在 4.68%（FRED 最新一动 +1bp，连续第八个交易日
                    处于已递延的 4.55% 闸口之上——回补做多的利率过滤器仍为 FALSE，差 13bp，但随复苏读数
                    复活现在重新与当前相关），TIPS 平 2.41%，5Y5Y 平 2.30%，10Y 盈亏平衡 2.28%（+1bp），
                    HY OAS 2.84%（−3.0bp，收窄）· MOVE 连续第三次渲染取数失败（不可用）· DXY −0.18 至
                    99.62，USD/JPY 157.40（沿用，日元偏强）；美联储净流动性 $5.825T 沿用（周频，无新印数）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">日线 / 周线 MA 矩阵</td>
                  <td className="dn-v-cell">parquet 末根 2026-08-03 00:05Z（进行中收盘 $63,472.80）</td>
                  <td className="dn-flag">
                    锚点滞后约 2 分钟 · 偏移按实时现货 $63,435.04 重算 · 完整 btcusdt_1m_*.parquet
                    glob（362 根周线，2019–2026）——矩阵不再全面倒挂：D-SMA50 $63,333.27 是唯一为正的
                    日线偏移（+0.16%），其余每根日线与周线 MA 都为负 · 上一根完整日收 08-02 $63,550.00
                    （一根收复 $63,311 旧地板、并站上已结算 200W $63,533.52 的阳线）
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">200W 支撑观察</td>
                  <td className="dn-v-cell">本轮独立全 glob parquet 重算（362 根周线）· ma200w_trap_watch_state.json 未在 00:07 锚点归档，且该可变文件在锚点之后推进到 recomputed_at 2026-08-03 00:11Z——不作为锚定来源引用</td>
                  <td className="dn-flag">
                    200W 结算是本轮的独立全 glob parquet 重算（362 根周线）——ma200w_trap_watch_state.json
                    旁文件未被归档进 00:07 快照，且当前可变文件此后已推进（recomputed_at 2026-08-03
                    00:11:39Z，在备忘锚点之后，现携带 last_completed_week 2026-08-02 收 $63,550.00 /
                    W-SMA200 $63,533.52 / consecutive_above 5），故不作为锚定来源引用。独立重算了结了这个
                    关键的周日：截至 2026-08-02 的一周收 $63,550.00，对上升的 W-SMA200 $63,533.52——收在
                    地板之上 $16.48（+0.026%），是连续第五次周收站上 200W（07-05、07-12、07-19、07-26、08-02）。
                    前一脉络的空头了结（&ldquo;封在 $63,311 之下&rdquo;）没有触发；地板在周收上守住。进行中的
                    这周（截至 2026-08-09）W-SMA200 位于 $63,753.74，08-03 进行中收 $63,472.80 在其之下
                  </td>
                </tr>
                <tr>
                  <td className="dn-s">JGB 10Y</td>
                  <td className="dn-v-cell">FRED 月频 · IRLTLT01JPM156N</td>
                  <td className="dn-flag">陈旧 · 月频 · 勿当实时</td>
                </tr>
                <tr>
                  <td className="dn-s">
                    NTT 枢轴、max-pain、行权级 IV、BTC/NQ 比值
                  </td>
                  <td className="dn-v-cell">本切片未加载</td>
                  <td className="dn-flag">相关论断明确仅作框架用（btc_ntt_analysis.html 为 JS 渲染，不可提取）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dn-meta">
            <div>
              <span className="dn-k">资金费 · 8h 年化</span>
              <span className="dn-v bear">+10.95%</span>
              <span className="dn-src">实时 · 原始 0.01 字段 × 1095 · 重新钉在币安 +10.95% 上限——本窗口 316 / 1441 行在上限（首个上限行 08-03 02:52 北京，末行 08-03 08:07 北京：盘口在临快照前约 5h 一直钉在上限，是对 08-02 窗口 0 个上限行的硬性反转）· 24h 均值 +9.16% 年化 · 最低 +4.52% 年化（0.004124 字段 @ 08-02 08:41 北京 / 08-02 00:41Z）· 0 / 1441 负值行——连续第五天为零：拥挤的多头 carry 没有被冲掉，反而重新加热到上限</span>
            </div>
            <div>
              <span className="dn-k">Δ 资金费 · 24h</span>
              <span className="dn-v bear">重新钉上限 · +9.16% 均值 · 0 负值</span>
              <span className="dn-src">区间 +4.52% / +10.95% 年化 · 均值 +4.16% → +9.16% 年化（重新加热）· 上限占用 316/1441 行（08-02 为 0）· 冷却了四天离开上限的多头 carry 在这次收复里弹回上限——即便 SM 更深滚空，多头一侧仍在加杠杆</span>
            </div>
            <div>
              <span className="dn-k">OI · 24h</span>
              <span className="dn-v">+0.54%（+590.4 BTC）</span>
              <span className="dn-src">实时 · 108,603.4 → 109,193.7 · 小幅扩张（对 08-02 的 −0.82% 收缩）进入一个 +0.85% 的阳线日 · 24h 流量再次分裂为现货买 / 期货卖（spotCVD +8,178.1 vs futCVD −1,877.5 / taker −1,877.5 / big −1,934.9，跨 473 个活跃分钟、745 笔大单）——现货吸筹抬价、期货派发，OI 净增</span>
            </div>
            <div>
              <span className="dn-k">散户（mkt）多/空</span>
              <span className="dn-v bear">65.87 / 34.13</span>
              <span className="dn-src">live_db `mkt_long_pct` · 24h 高 68.92（08-02 08:41 北京 / 08-02 00:41Z）低 65.28（08-02 16:48 北京 / 08-02 08:48Z）——较 08-02 的 68.76 拥挤度松了约 3pt，但仍在 65 上方偏多：收复中散户多头人群变薄但没有出清</span>
            </div>
            <div>
              <span className="dn-k">SM 净 BTC</span>
              <span className="dn-v bear">−19,047（净空——干净）</span>
              <span className="dn-src">实时 · 多 11,023.9 − 空 30,071.9 = −19,047.9 · 本轮读数干净——无可疑单分钟跳变（对照 08-02 的 −22,911 伪迹），故交易台认定这个净空为真实盘口读数 · SM 稳步滚向更深净空：24h 最高 −14,813.3 @ 08-02 10:50 北京，最低（最空）−19,359.8 @ 08-03 06:36 北京，快照 −19,047.9——那位记录在案的买家在收复中作为卖家压了下去</span>
            </div>
            <div>
              <span className="dn-k">SM Δ vs 24h 前</span>
              <span className="dn-v bear">−15,511 → −19,047（−3,537，更深空 · 干净）</span>
              <span className="dn-src">|Δnet|/prior_net = 3,536.8 / 15,511.1 = 22.8% · Δ多 +1,096.8（多头小幅回补）且 Δ空 +4,633.6（空头堆得更狠）——净头寸在干净盘口上滚深 −3,536.8 · 这正是 08-02 那份在可疑分钟上无法认定的干净 SM 滚仓——但它是逆着阳线日 / 地板收复滚的，故读作 SM 在卖反弹，而非确认破位</span>
            </div>
            <div>
              <span className="dn-k">IV / 30D RV</span>
              <span className="dn-v">40.4% / 29.27%</span>
              <span className="dn-src">GEX 中位 IV · 跨 866 个合约的链中位（08-02 为 868），非可交易价差 · 30D 收对收 RV = logret.std × √365 × 100，取 30 根日收益（parquet 末根 00:05Z）· 链层富度约 +11.13pt · 29 收益替代读 29.65%</span>
            </div>
            <div>
              <span className="dn-k">距 0γ 翻转</span>
              <span className="dn-v bull">+0.67%（在翻转之上）</span>
              <span className="dn-src">翻转 $63,015（较 08-02 的 $62,912 升 $103）· vs 实时现货 $63,435.04（+0.67%；63,435.04/63,015 − 1 = +0.667%）/ GEX 文件 Deribit 指数 $63,925（+1.44%；63,925/63,015 − 1 = +1.444%，文件印 +1.4%）——两个参照现在都在翻转之上（现货收复正伽玛，对 08-02 的骑跨翻转）· 头条 +38.1M / 汇总 +48.86M——较 08-02 的 +6.3M / +20.25M 硬性重新伽玛为正：做市商现在阻尼波动，现货下方负货架减轻至 −44.66M</span>
            </div>
          </div>

          <div className="dn-prose">
            <p className="dn-lead">
              <span className="dn-signal">
                整条脉络指向的那个关键周日周收守住了地板——但收复是被争夺的，因为聪明钱干净地
                逆着它更深滚空，而多头 carry 重新钉回资金费上限
              </span>。08-02 那份就转在一个问题上：周日 08-02 的周收是封在 $63,311 之下（武装追空），
              还是现货买盘筑底、收复翻转/地板带（重开侦察）。周线 K 现已结算，答案是多头那个：截至
              08-02 的一周收{' '}
              <span className="dn-tag bull">$63,550.00</span>，站上已上升的已结算 200W{' '}
              <span className="dn-tag">$63,533.52</span> $16.48（+0.026%），站上旧 $63,311 地板 $239——
              是{' '}
              <span className="dn-tag bull">连续第五次周收站上 200W</span>{' '}
              （07-05、07-12、07-19、07-26、08-02）。前一脉络所构筑的空头了结没有触发；地板在收盘上守住。
              现货实时印{' '}
              <span className="dn-tag">$63,435</span>，24h{' '}
              <span className="dn-tag bull">+0.85%</span>，且 08-02 日线收{' '}
              <span className="dn-tag bull">$63,550.00 阳线</span>，收复站上旧地板。MA 矩阵不再全面倒挂——
              D-SMA50 $63,333 翻成{' '}
              <span className="dn-tag bull">+0.16% 的正偏移</span>，是回到现货之下的第一根支撑。但{' '}
              <span className="dn-em">收复在每一本要紧的账本上都被争夺</span>。第一，那位记录在案的买家：{' '}
              <span className="dn-signal">
                本轮 SM 盘口在干净盘口上更深滚向净空至 −19,047（无可疑分钟），逆着阳线日堆空 +4,634——
                聪明钱在卖反弹
              </span>。这正是 08-02 那份在伪迹分钟上无法认定的干净滚仓，但它是逆着收复印出来的，不是随一个
              破位。第二，carry：{' '}
              <span className="dn-tag bear">资金费重新钉回 +10.95% 上限</span>（316/1441 行在上限，临快照前
              约 5h，对 08-02 的 0 个上限行）且{' '}
              <span className="dn-tag bear">连续第五天 0 负值</span>——多头杠杆没有被冲，反而重新加热。第三，
              做市商账本：{' '}
              <span className="dn-tag bull">硬性重新伽玛为正</span>——头条{' '}
              <span className="dn-tag">+6.3M → +38.1M</span>，汇总{' '}
              <span className="dn-tag">+20.25M → +48.86M</span>——现货收复站上 $63,015 翻转（+0.67%），
              故追空的伽玛放大器彻底消失、做市商现在阻尼波动。OI 扩张{' '}
              <span className="dn-tag">+590 BTC（+0.54%）</span>，散户拥挤度松了约 3pt 至{' '}
              <span className="dn-tag bear">65.87</span>（仍偏多），MTF regime 翻成{' '}
              <span className="dn-tag bull">5/9 趋势延续</span>，计数改善到{' '}
              <span className="dn-tag bear">2 多 / 7 空 / 1 中性</span>，并有一根新的{' '}
              <span className="dn-tag bull">8h 水下金叉</span>——但一根{' '}
              <span className="dn-tag bear">全新的 1h ⚡TD9 SELL</span> 警示反弹已被拉伸。账本保持
              空仓（FLAT）：追空的地板破位腿被证伪（周收站上）、其伽玛反转为阻尼，故它退场；回补反弹的
              侦察在复活（收盘收复地板、regime 翻转、8h 金叉、阻尼伽玛）但未武装——它需要一根日收站上
              D-EMA50 上盖 $64,657、由需求主导的流量、加上一个干净的 SM 读数，而今天 SM 逆着它做空、
              资金费钉住、利率 FALSE。本份转在：收复是延伸到一根 D-EMA50 上盖收盘、伴随 SM 回补——还是
              SM 的空头与被钉住的多头 carry 把价格拖回已上升的 $63,533 地板之下。
            </p>

            <p>
              BTC 实时印 <span className="dn-tag">$63,435</span>，24h{' '}
              <span className="dn-tag bull">+0.85%</span>，落在{' '}
              <span className="dn-tag">$63,782.20 / $62,806.59</span> 区间内（高 @ 08-03 06:12 北京 /
              08-02 22:12Z，低 @ 08-02 08:56 北京 / 08-02 00:56Z），一整个交易日交易回到旧地板之上。{' '}
              <span className="dn-signal">前一脉络追踪的地板破位没有在周收上封住——它收复了</span>：
              07-26 $65,375.10 → 07-27 $63,720.80 → 07-28 $63,903.60 → 07-29 $63,958.90 → 07-30
              $64,750.00 →{' '}
              <span className="dn-tag bear">07-31 $62,859.90</span> →{' '}
              <span className="dn-tag bear">08-01 $62,792.30</span> →{' '}
              <span className="dn-tag bull">08-02 $63,550.00</span>（一根收回地板上方的阳线），进行中的
              08-03 K（parquet 末根 00:05Z）在{' '}
              <span className="dn-tag">$63,472.80</span>——两根收在 $63,311 之下的完整日收（07-31、08-01）
              之后跟着一根收复它的阳线，且关键在于周线 K 结算站上了已上升的 200W。{' '}
              <span className="dn-em">
                MA 矩阵不再全面倒挂：D-SMA50 $63,333（+0.16%）是唯一为正的日线偏移——回到现货之下的第一根
                收复支撑——而其余每根日线与周线 MA 仍在头顶。近带现在是刚收复的支撑与仍在头顶的阻力的混合：{' '}
                <span className="dn-tag bull">0-γ 翻转 $63,015（+0.67%，现货在其上）</span>、{' '}
                <span className="dn-tag bull">旧地板 $63,311（+0.20%，已收复）</span>、{' '}
                <span className="dn-tag bull">D-SMA50 $63,333（+0.16%，已收复）</span>，然后头顶是{' '}
                <span className="dn-tag bear">已结算 200W $63,533（−0.16%）</span>、{' '}
                <span className="dn-tag bear">进行中周 W-SMA200 $63,754（−0.50%）</span>、{' '}
                <span className="dn-tag bear">D-EMA20 $63,942（−0.79%）</span>、{' '}
                <span className="dn-tag bear">D-SMA20 $64,384（−1.47%）</span>，以及{' '}
                <span className="dn-tag bear">D-EMA50 上盖 $64,657（−1.89%）</span>（侦察的武装线，
                随下跌收盘仍在压制、从 08-02 的 $64,679 微降）。
              </span>{' '}
              200W 周期地板本轮结算为多：ma200w_trap_watch_state.json 旁文件未在 00:07 锚点归档、
              可变文件已推进过它（recomputed_at 08-03 00:11Z，现携带已结算的 08-02 周 / 5 次站上），
              故此结算是本轮的独立全 glob parquet 重算（362 根周线），不是引用的 state 读数——它了结了
              这个关键周日：截至 08-02 的一周收 $63,550.00，对上升的 W-SMA200 $63,533.52，收在其上 $16.48、
              连续第五次站上 200W。进行中的这周（截至 08-09）W-SMA200 位于 $63,753.74，08-03 进行中收
              $63,472.80 在其之下。所以日地板破了（两根收 07-31/08-01）随后收复（08-02 阳线），而周破位
              从未封住——它收在上方。侦察于 07-22 武装、07-24 递延、07-31 在地板破位上止损；周收上的收复
              使其读数复活，但它只有在一根上盖收盘上才重新武装。
            </p>

            <h2 className="dn-sec">
              持仓 <span className="dn-roman">I · 实时盘口 · SM 干净地更深滚向净空 −19,047（本轮无可疑分钟）——记录在案的买家在卖收复 · 资金费重新钉回 +10.95% 上限（316/1441 行，连续第五天 0 负值）——多头 carry 重新加热、没有被冲 · OI 扩张 +0.54% 进入 +0.85% 阳线日 · 散户拥挤度松约 3pt 至 65.87（仍偏多）· 24h 流量分裂为现货买 / 期货卖</span>
            </h2>

            <p>
              <span className="dn-signal">
                当日最重要的读数是：08-02 那份在可疑分钟上无法认定的 SM 滚仓，现在印得干净了——而它是逆着
                收复更深滚空，不是随一个破位
              </span>。本轮 SM 净头寸序列在 24h 窗口内不带任何单分钟跳变 &gt; |3,000| BTC（那个反复出现的
              约北京 14:00 喂价重同步——制造了 08-02 −22,911 分钟与 07-31 +6,369 分钟——没有触发），故交易台
              认定这个净空读数。{' '}
              <span className="dn-tag bear">SM 净 −19,047.9</span>（多 11,023.9 − 空 30,071.9），较 24h 前
              −15,511.1 滚深 −3,536.8（Δ多 +1,096.8 回补，Δ空 +4,633.6 堆积，|Δ|/prior_net = 22.8%）。
              路径是稳步倾空：24h 最高 −14,813.3 @ 08-02 10:50 北京，最低（最空）−19,359.8 @ 08-03 06:36
              北京，快照 −19,047.9。{' '}
              <span className="dn-em">
                这是一次干净、可认定的滚仓——但时点把它的含义相对 08-02 的设置反转了。昨天一个（可疑的）
                净空本会确认地板破位；今天一个（干净的）净空印在一个收复了地板的阳线日里。所以记录在案的买家
                在卖收复，逆着价格盘口与做市商账本正在筑起的反弹倚着。那不是追空触发（它要追的破位没有封住）——
                它是收复被争夺而非被确认的最响一条理由。
              </span>
            </p>

            <p>
              持仓账本其余部分读出一次需求主导的收复，伴随沉重的期货卖压与重新加热的多头 carry——一个被争夺的
              买盘，而非干净的底。{' '}
              <span className="dn-signal">
                OI 扩张进入阳线日，现货被买、期货被卖——健康收复在一条腿上、警示在另一条腿上的镜像
              </span>。现货 24h <span className="dn-tag bull">+0.85%</span>，OI{' '}
              <span className="dn-tag">+590.4 BTC（+0.54%）</span>——108,603.4 → 109,193.7，小幅扩张（对
              08-02 的 −902 BTC 收缩）。24h 主动成交盘口分裂：现货 CVD{' '}
              <span className="dn-tag bull">+8,178.1</span>（现货吸筹，cb_cvd 17,569.2 → 25,747.3，
              无重置量级台阶——六个 &gt;120 BTC 的单分钟跳变，最大 +239.3）对期货 CVD{' '}
              <span className="dn-tag bear">−1,877.5</span>、taker-net{' '}
              <span className="dn-tag bear">−1,877.5</span>（fut_cvd Δ 与逐分钟 taker-net 累加精确对账）
              以及大单净{' '}
              <span className="dn-tag bear">−1,934.9 BTC（745 笔跨 473 个活跃分钟）</span>——{' '}
              <span className="dn-em">现货买、期货卖、价格涨</span>。永续在快照相对现货贴水{' '}
              <span className="dn-tag bear">−$72.67</span>（24h 均值 −$69.13，区间 −$239.35 / −$29.12）——
              一个持续的永续贴水贯穿整个收复，故上行是现货主导，不是期货逼空。1 分钟主动成交偏斜快照{' '}
              <span className="dn-tag">+0.5</span>（1h 均值 −4.72，区间 −36.3 / +18.9）。{' '}
              <span className="dn-em">
                OI 扩张进入阳线日、现货买盘领先、期货 / 大单被卖，是现货腿上的需求主导收复，但永续贴水与
                SM 空头意味着衍生品账本正倚向另一边。这是被争夺的收复——一个现货买盘对着一个期货 / SM 卖盘
                筑底——而非干净的单边底。
              </span>
            </p>

            <p>
              杠杆与拥挤读数是收复之下最响的警告：多头 carry 没有被冲，反而重新加热到上限。{' '}
              <span className="dn-signal">
                资金费在反弹里重新钉回 +10.95% 币安上限，散户维持在 65 上方偏多——连续第五天 0 负值，
                carry 处于水下且现在重新加了杠杆
              </span>：实时资金费 <span className="dn-tag bear">+10.95% 年化</span>（原始 0.01 字段 × 1095，
              就在上限），24h 均值{' '}
              <span className="dn-tag bear">+9.16% 年化</span>（较 08-02 的 +4.16% 重新加热），最低{' '}
              <span className="dn-tag">+4.52% 年化（0.004124 字段 @ 08-02 08:41 北京 / 08-02 00:41Z）</span>，
              上限行 <span className="dn-tag bear">316 / 1441</span>（首 08-03 02:52 北京，末 08-03 08:07
              北京——临快照前约 5h 钉住，对 08-02 的 0 个上限行），且{' '}
              <span className="dn-tag bear">0 / 1441 负值行</span>——连续第五天为零。散户{' '}
              <span className="dn-tag bear">mkt_long_pct 65.87</span>（24h 高 68.92 @ 08-02 08:41 北京，
              低 65.28 @ 08-02 16:48 北京）——较 08-02 的 68.76 在反弹里松了约 3pt 但仍偏多。{' '}
              <span className="dn-em">这就是使收复被争夺而非干净的那条读数：一个真正的底会冲掉多头杠杆，
              而这里人群反而在多头一侧加仓（资金费弹回上限）、同时 SM 更深滚空。这是一本若买盘失守就会向下
              解仓的账本——重新加热的多头 carry 对着一个已认定的 SM 空头是级联燃料，不是上方的发射台。多头
              需要 SM 回补、carry 守住；空头需要买盘失守、carry 冲掉。</span>
            </p>

            <p>
              窗口化流量是一个上行的 24h、一个走平的近 4h、以及临快照的一点小买盘。24h：价格{' '}
              <span className="dn-tag bull">+0.85%</span>，OI{' '}
              <span className="dn-tag bull">+590.4 BTC</span>，现货 CVD{' '}
              <span className="dn-tag bull">Δ +8,178.1</span>，期货 CVD{' '}
              <span className="dn-tag bear">Δ −1,877.5</span>，大单{' '}
              <span className="dn-tag bear">−1,934.9 BTC / 745 笔跨 473 个活跃分钟</span>，taker-net{' '}
              <span className="dn-tag bear">−1,877.5</span>——{' '}
              <span className="dn-em">现货买 / 期货卖、价格涨：一次现货主导的收复对着期货卖盘</span>。
              4h（至快照）：价格{' '}
              <span className="dn-tag">−0.005%</span>（走平），OI{' '}
              <span className="dn-tag bear">−24.3 BTC</span>，现货 CVD{' '}
              <span className="dn-tag bear">Δ −6.6</span>，期货 CVD{' '}
              <span className="dn-tag bear">Δ −430.8</span>，大单{' '}
              <span className="dn-tag bear">−146.7 BTC</span>，taker-net{' '}
              <span className="dn-tag bear">−430.8</span>——冲高后一次走平、略被卖压的停顿。1h：价格{' '}
              <span className="dn-tag bull">+0.084%</span>，OI{' '}
              <span className="dn-tag bull">+106.6 BTC</span>，现货 CVD{' '}
              <span className="dn-tag bull">Δ +109.6</span>，期货 CVD{' '}
              <span className="dn-tag bear">Δ −134.8</span>，大单{' '}
              <span className="dn-tag bear">−136.8 BTC</span>，taker-net{' '}
              <span className="dn-tag bear">−134.8</span>——{' '}
              <em>临快照一点现货小买盘，期货仍被卖</em>。{' '}
              <span className="dn-em">
                基线口径：24h 块用同时钟前一日行（08-02 08:07 北京，回溯 1,440 个 1 分钟区间 / 含头尾
                1,441 行）；4h 与 1h 子窗口块用前一行含端点基线（08-03 04:07 / 07:07 至 08:07 锚点）。本轮
                序列在这些窗口间连续，故与同时钟端点一致——无基线偏差，且 24h 窗口内无 CVD 重置特征
                （fut_cvd 端点 Δ −1,877.5 与逐分钟 taker-net −1,877.5 对账），故 CVD delta 为端点原始差。
              </span>
            </p>

            <h2 className="dn-sec">
              结构{' '}
              <span className="dn-roman">II · MTF 改善到 2 多 / 7 空 / 1 中性 · regime 翻成 5/9 周期动量（JT≥0）趋势延续（自 6/9 周期反转均值回归）· 一根新的 8h 水下金叉刚印、1w 金叉 2b——但一根全新的 1h ⚡TD9 SELL 警示反弹超买 · MA 矩阵不再全面倒挂，D-SMA50 是回到现货之下的第一根收复支撑</span>
            </h2>

            <p>
              <span className="dn-signal">
                MTF 面板改善、regime 翻转——从它贯穿整个地板破位所携带的&ldquo;卖反弹&rdquo;均值回归标签，
                翻成一个趋势延续标签——但一根全新的 1h TD9 SELL 压住了热情
              </span>。00:01Z 扫描读{' '}
              <span className="dn-tag bear">2 多 / 7 空 / 1 中性</span>，跨 10 个周期（15m 与 1M 多、
              30m 中性、1h / 4h / 8h / 12h / 1d / 3d / 1w 空）——较 08-02 的 1/9 改善。regime 标签翻成{' '}
              <span className="dn-tag bull">5/9 周期动量（JT≥0）——趋势延续，慎防逆势抄底</span>
              （自 6/9 周期反转均值回归）。收复印出一根{' '}
              <span className="dn-tag bull">新的 8h 水下金叉（刚印）</span>，配上 30m 金叉 14b、4h 金叉 5b、
              3d 金叉 8b 与 1w 水下金叉 2b——一个在高周期上累积的交叉簇。但警示旗是真的：一根{' '}
              <span className="dn-tag bear">全新的 1h ⚡TD9 SELL</span> 印出（就在领跑反弹的那个周期上的超买
              衰竭提示），15m 转出一根水上死叉 5b（快周期翻转）并带一个顶背离，且 1h/4h/8h 都仍在云下或云中。
              多头对冲仍在——1d 与 1M 上的 ⚡TD9 BUY、15m/1h/4h/8h/1w 上的底背离簇——但 15m/4h/1d 上也有一个
              顶背离簇。{' '}
              <span className="dn-em">
                所以结构在收复上翻成趋势延续，30m–1w 有金叉簇累积、深周期 TD9 BUY 仍在——这是反弹挣来的
                建设性读数。但全新的 1h TD9 SELL 与 15m 翻转说反弹在近端被拉伸，且对侦察要紧的周期（4h/8h）
                仍在云下。这是一次动量在其一侧、快周期有超买警告的收复——建设性但还不是一条干净的趋势。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>TF</th><th>收</th><th>RSI</th><th>MACD 交叉</th><th>云（一目）</th><th>TD</th><th>活跃背离</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>15m</td><td className="num">63,526</td><td className="num">55</td><td className="bear">死叉（水上）5b</td><td className="bull">云上 ↓63.3k 27b</td><td>Sell 3</td><td>顶+底背离</td></tr>
                <tr><td>30m</td><td className="num">63,526</td><td className="num bull">61</td><td className="bull">金叉（水下）14b</td><td className="bull">云上 ↓63.2k 44b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1h</td><td className="num">63,526</td><td className="num bull">60</td><td className="bull">金叉（水上）6b</td><td className="neut">云中 62.7k–63.8k 9b</td><td>⚡ TD9 SELL</td><td>底背离</td></tr>
                <tr><td>4h</td><td className="num">63,530</td><td className="num">50</td><td className="bull">金叉（水下）5b</td><td className="bear">云下 ↑63.9k 18b</td><td>Sell 2</td><td>顶+底背离</td></tr>
                <tr><td>8h</td><td className="num">63,526</td><td className="num">47</td><td className="bull">金叉（水下）刚印</td><td className="bear">云下 ↑64.2k 9b</td><td>Sell 5</td><td>底背离</td></tr>
                <tr><td>12h</td><td className="num">63,526</td><td className="num">46</td><td className="neut">死叉（水上续）</td><td className="neut">云中 62.1k–64.2k 5b</td><td>Sell 2</td><td>—</td></tr>
                <tr><td>1d</td><td className="num">63,526</td><td className="num">48</td><td className="neut">死叉（水上）7b</td><td className="neut">云中 61.9k–68.0k 14b</td><td>⚡ TD9 BUY</td><td>顶背离</td></tr>
                <tr><td>3d</td><td className="num">63,526</td><td className="num">44</td><td className="bull">金叉（水下）8b</td><td className="bear">云下 ↑76.4k 21b</td><td>Buy 4</td><td>—</td></tr>
                <tr><td>1w</td><td className="num">63,526</td><td className="num">39</td><td className="bull">金叉（水下）2b</td><td className="bear">云下 ↑85.9k 27b</td><td>Buy 2</td><td>底背离</td></tr>
                <tr><td>1M</td><td className="num">63,526</td><td className="num">44</td><td className="neut">—</td><td className="bull">云上 ↓47.4k 30b</td><td>⚡ TD9 BUY</td><td>—</td></tr>
                <tr>
                  <td colSpan={7} className="note">
                    来源：mtf_div_latest.html 08:01 北京扫描（00:01Z；滚动最新文件，原样归档于
                    /opt/desk-note/snapshots/2026-08-03-0007/）。头部警报：{' '}
                    <em>⚡ TD9 SELL 1h（新——超买提示），⚡ TD9 BUY 1d/1M（超卖反转提示）</em>，{' '}
                    <em>顶背离 3：15m/4h/1d · 底背离 5：15m/1h/4h/8h/1w</em>，{' '}
                    <em>8h 水下金叉刚印，1w 水下金叉 2b</em>，{' '}
                    <em>regime 5/9 周期动量（JT≥0）——趋势延续</em>，计数{' '}
                    <em>2 多 / 7 空 / 1 中性</em>。扫描现货 $63,526，24h +1.13%，24h 高/低
                    $63,779 / $62,782，qVol $5.33B（00:07Z 的实时盘口锚点读现货 $63,435.04——约 $91 的差
                    是 6 分钟源滞后加上现货与 OHLCV/永续的基差）。收盘为进行中 K；在每个周期收盘前一切数值
                    视为暂定。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              MA 矩阵不再全面倒挂——收复把第一根支撑放回了现货之下。现货 $63,435 站在三条近线之上、其余之下：{' '}
              <span className="dn-tag bull">0-γ 翻转 $63,015（+0.67%）</span>、{' '}
              <span className="dn-tag bull">旧地板 $63,311（+0.20%，已收复）</span>、以及{' '}
              <span className="dn-tag bull">D-SMA50 $63,333（+0.16%）</span>——唯一为正的日线 MA 偏移、
              第一根收复支撑。紧邻头顶是现在压住反弹的带：{' '}
              <span className="dn-tag bear">已结算 200W 地板 $63,533（−0.16%）</span>、{' '}
              <span className="dn-tag bear">进行中周 W-SMA200 $63,754（−0.50%）</span>、{' '}
              <span className="dn-tag bear">D-EMA20 $63,942（−0.79%）</span>、{' '}
              <span className="dn-tag bear">D-SMA20 $64,384（−1.47%）</span>、{' '}
              <span className="dn-tag bear">D-EMA50 上盖 $64,657（−1.89%）</span>——侦察的武装线。其上：{' '}
              <span className="dn-tag bear">D-EMA100 $67,165（−5.55%）</span>、{' '}
              <span className="dn-tag bear">D-SMA100 $68,635（−7.58%）</span>、{' '}
              <span className="dn-tag bear">W-EMA200 $68,561（−7.48%；seed）</span>、{' '}
              <span className="dn-tag bear">W-EMA20 $68,852（−7.87%）</span>、{' '}
              <span className="dn-tag bear">W-SMA20 $69,159（−8.28%）</span>、{' '}
              <span className="dn-tag bear">D-SMA150 $69,527（−8.76%）</span>、{' '}
              <span className="dn-tag bear">D-EMA150 $69,974（−9.34%）</span>、{' '}
              <span className="dn-tag bear">D-SMA200 $70,972（−10.62%）</span>、{' '}
              <span className="dn-tag bear">D-EMA200 $72,747（−12.80%）</span>、{' '}
              <span className="dn-tag bear">W-EMA150 $73,962（−14.23%；seed）</span>。更远且弃用：
              W-SMA150 $76,872（−17.48%）、W-EMA50 $77,760（−18.42%）、W-EMA100 $78,749（−19.45%）、
              W-SMA50 $83,331（−23.88%）、W-SMA100 $88,648（−28.44%）。{' '}
              <span className="dn-em">
                MA 锚定 parquet 末根 2026-08-03 00:05Z（进行中收 $63,472.80）；偏移按实时现货 $63,435.04
                重算。显示 MA 价位按 $ 取整；偏移按精确序列值计算。全 glob 重算（362 根周线）使每根周线 MA
                都可计算——W-SMA200 $63,753.74（进行中周）/ $63,533.52（上一完整周——08-02 收盘清越的那道
                已上升地板）；W-EMA150 $73,962 与 W-EMA200 $68,561 由可得历史 seed、印在现货之上。日收：
                07-26 $65,375.10、07-27 $63,720.80、07-28 $63,903.60、07-29 $63,958.90、07-30 $64,750.00、
                07-31 $62,859.90、08-01 $62,792.30、08-02 $63,550.00（一根收复站上地板的阳线）、08-03
                （进行中）$63,472.80——两根收在地板之下的已结算收盘被 08-02 阳线收复，且周线 K 结算站上 200W。
              </span>
            </p>

            <h2 className="dn-sec">
              做市商图 <span className="dn-roman">III · 账本硬性重新伽玛为正——头条 +38.1M（曾 +6.3M）/ 汇总 +48.86M（曾 +20.25M）· 现货收复站上 $63,015 翻转（+0.67%），故追空的伽玛放大器消失、做市商现在阻尼波动 · 0DTE 前端维持为正（3AUG +7.31M）· 现货下方负货架减轻至 −44.66M（$62k −9.06M 进 $60k −22.74M）· $70k +14.91M 是头顶最重的正墙</span>
            </h2>

            <p>
              <span className="dn-signal">
                做市商账本完成了它在 08-02 开始的活：硬性重新伽玛为正、现货收复站上翻转，故追空在整个地板破位里
                倚着的负伽玛放大器彻底消失——做市商现在双向阻尼波动
              </span>。头条 Total GEX / 1% 移动为{' '}
              <span className="dn-tag bull">+38.1M</span>（08-02 曾 +6.3M），按到期汇总在{' '}
              <span className="dn-tag bull">+48.86M</span>（= gex_summary.json net_gex $48,863,525.27，
              08-02 曾 +20.25M）——约 10.8M 的头条 vs 汇总不对账缺口，按 DN-003 脉络披露，汇总再次高于头条。
              两个面板都读出强净多头伽玛（阻尼）。{' '}
              <span className="dn-em">所以做市商现在阻尼此处的移动——一个正伽玛缓冲，既压向上逼空、又压向下破位，
              恰是追空想要的、地板之下的放大器的反面。</span> 0-γ 翻转升{' '}
              <span className="dn-tag">$62,912 → $63,015（+$103）</span>，现货 $63,435 在其{' '}
              <span className="dn-tag bull">+0.67% 之上</span>（现货计价：63,435.04 / 63,015 − 1 =
              +0.667%）；GEX 文件的 Deribit 指数参照 $63,925 在其{' '}
              <span className="dn-tag bull">+1.44% 之上</span>（63,925 / 63,015 − 1 = +1.444%，文件印
              +1.4%）——两个参照现在都在翻转之上（现货收复正伽玛，对 08-02 的骑跨翻转）。墙图把正墙放在头顶、
              下方一个减轻的负货架：{' '}
              <span className="dn-tag bull">$70k +14.91M</span>（头顶最重的正墙）、{' '}
              <span className="dn-tag bear">$60k −22.74M</span>（崩盘 put，较 08-02 的 −24.91M 轻）、{' '}
              <span className="dn-tag bull">$68k +10.81M</span>、{' '}
              <span className="dn-tag bull">$66k +10.76M</span>、{' '}
              <span className="dn-tag bull">$67k +10.46M</span>、{' '}
              <span className="dn-tag bull">$72k +10.03M</span>、{' '}
              <span className="dn-tag bear">$62k −9.06M</span>（现货下方，较 08-02 的 −11.27M 轻）、{' '}
              <span className="dn-tag bull">$80k +7.82M</span>、{' '}
              <span className="dn-tag bear">$58k −7.00M</span>、{' '}
              <span className="dn-tag bear">$55k −5.86M</span>。{' '}
              <span className="dn-em">
                现货下方的负簇合计约 −44.66M（$62k −9.06M + $60k −22.74M + $58k −7.00M + $55k −5.86M）——
                较 08-02 的 −50.5M 轻，且现在坐在一个正伽玛翻转之下而非其上。所以下方的活板门还在，但门更重：
                现货在阻尼伽玛里 +0.67% 站上翻转，故一次向下破位得先推回穿过正缓冲到 $62k 墙，$60k 崩盘 put
                才放大。现货上方的正墙（$66k–$72k、$80k）压住逼空。做市商账本现在是双向阻尼器，不是追空需要的
                单边放大器。
              </span>{' '}
              按到期前端维持为正：{' '}
              <span className="dn-tag bull">3AUG26 0.3DTE +7.31M</span>（0DTE 前端，为正）、4AUG 1.3
              +0.46M、5AUG 2.3 +1.74M、6AUG 3.3 +0.66M、{' '}
              <span className="dn-tag bull">7AUG 4.3 +11.94M</span>、14AUG 11.3 −0.02M、21AUG 18.3 +5.58M、{' '}
              <span className="dn-tag bull">28AUG 25.3 +15.58M</span>（最重的正块）、25SEP 53.3 +1.94M、
              30OCT 88.3 +0.09M、25DEC 144.3 +2.24M、26MAR27 235.3 +0.74M、25JUN27 326.3 +0.61M——整条
              合计{' '}
              <span className="dn-tag bull">+48.86M</span>（net_gex $48,863,525.27；对手工加总的 +$0.01M
              是逐到期 $ 取整）。前端 0.3–3.3DTE 簇（3AUG +7.31M + 4AUG +0.46M + 5AUG +1.74M + 6AUG
              +0.66M）净{' '}
              <span className="dn-tag bull">+10.17M</span>——一个稳固为正的前端，故近端放大器已消失、前端现在
              也是阻尼器。
            </p>

            <p>
              期权链 IV 中位为{' '}
              <span className="dn-tag">40.4%</span>（较 08-02 不变）对 30D 收对收 RV{' '}
              <span className="dn-tag">29.27%</span>——链层富度{' '}
              <span className="dn-tag">约 +11.13pt</span>。跨 N 个合约的链中位（今天 866，较 868 减少），{' '}
              <span className="dn-em">非</span>可交易价差；到期/行权级 vega、skew 与期限结构仍未加载；
              波动读数维持仅框架用。RV 方法：30D 收对收，logret.std × √365 × 100 取末 30 根日对数收益
              （= 31 根连续日收）锚定 parquet 末根 2026-08-03 00:05Z；29 收益替代读 29.65%。
            </p>

            <h2 className="dn-sec">
              宏观{' '}
              <span className="dn-roman">IV · 10Y 守在 4.68%（回补做多利率过滤器仍 FALSE，差 13bp——但随复苏读数复活现在重新与当前相关）· HY OAS 2.84%（−3.0bp，收窄），TIPS/5Y5Y 平 · MOVE 连续第三次渲染取数失败 · DXY −0.18 至 99.62（偏软），日元偏强 · 利率是承重的收紧，信用中性/偏紧且 DXY 偏软 / NFCI 宽松但美联储净流动性携带 RISK-OFF，收复为 BTC 内生</span>
            </h2>

            <p>
              <span className="dn-signal">
                宏观盘口在承重的利率线上近乎静止——这里没有什么在驱动 BTC 的收复，但随复苏读数复活，利率
                过滤器重新与当前相关
              </span>。Dashboard 渲染为 2026-08-02 22:15Z，早于快照约 1.87h。美 10Y 名义{' '}
              <span className="dn-tag bear">4.68%（+1.0bp）</span>，regime z{' '}
              <span className="dn-tag bear">+2.34</span>，episodic z{' '}
              <span className="dn-tag">+1.40</span>——极端 RISK-OFF，连续第八个交易日处于 4.55% 回补闸口
              之上。10Y TIPS 实际{' '}
              <span className="dn-tag bear">2.41%（0.0bp）</span>，regime z{' '}
              <span className="dn-tag bear">+2.65</span>——极端 RISK-OFF，走平。5Y5Y BE 通胀{' '}
              <span className="dn-tag">2.30%（0.0bp）</span>，10Y 盈亏平衡{' '}
              <span className="dn-tag">2.28%（+1.0bp）</span>——走平。HY OAS{' '}
              <span className="dn-tag">2.84%（−3.0bp）</span>，regime z{' '}
              <span className="dn-tag">−0.25</span>——中性、收窄。MOVE 债券波动{' '}
              <span className="dn-tag stale">不可用（第三次渲染取数失败）</span>。DXY{' '}
              <span className="dn-tag bull">99.62（−0.18）</span>，regime z +0.61，episodic z −2.84——
              偏软；USD/JPY{' '}
              <span className="dn-tag">157.40（沿用，日元偏强）</span>；美联储净流动性{' '}
              <span className="dn-tag bear">$5.825T（−0.092T，周频，沿用）</span>，regime z −1.09，
              episodic z −2.47（RISK-OFF）。美日 10Y 利差{' '}
              <span className="dn-tag">2.01%（+1.0bp）</span>。NFCI{' '}
              <span className="dn-tag bull">−0.554</span>，RISK-ON（周频，陈旧 9d）。USD/CNY 6.7448
              宽松。{' '}
              <span className="dn-em">
                Net：回补做多利率过滤器（10Y &lt; 4.55%）在 4.68% 维持 FALSE（差 13bp）——且本份重新与当前
                相关，因为复苏读数在地板收复上复活，故侦察的利率腿重回牌桌（且读 FALSE）。它是侦察的其中一个
                拦路者，与 SM 空头和钉住的资金费并列。信用中性走平、通胀补偿走平、美元偏软、NFCI 宽松，但
                美联储净流动性携带 RISK-OFF（regime z −1.09 / episodic z −2.47），且 MOVE 是黑的。宏观盘口
                里没有什么在驱动 BTC 的收复——它是一次 BTC 内生的移动，下方的相关性读数也确认 BTC 并未在任一
                方向领导宏观复合体。
              </span>
            </p>

            <table className="dn-kv">
              <thead>
                <tr>
                  <th>宏观指标</th>
                  <th>水平</th>
                  <th>Δ（FRED 最新一动）</th>
                  <th>regime z</th>
                  <th>episodic z</th>
                  <th>读数</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>美 10Y 名义</td><td className="num">4.68%</td><td className="num bear">+1.0bp</td><td className="num bear">+2.34</td><td className="num">+1.40</td><td className="bear">极端 RISK-OFF · 守住</td></tr>
                <tr><td>10Y TIPS 实际</td><td className="num">2.41%</td><td className="num">0.0bp</td><td className="num bear">+2.65</td><td className="num">+1.24</td><td className="bear">极端 RISK-OFF · 平</td></tr>
                <tr><td>5Y5Y BE 通胀</td><td className="num">2.30%</td><td className="num">0.0bp</td><td className="num">+1.13</td><td className="num">+2.18</td><td className="neut">episodic · 平</td></tr>
                <tr><td>10Y 盈亏平衡</td><td className="num">2.28%</td><td className="num bear">+1.0bp</td><td className="num">−0.64</td><td className="num">+1.63</td><td className="neut">无标签 · 平</td></tr>
                <tr><td>HY OAS</td><td className="num">2.84%</td><td className="num bull">−3.0bp</td><td className="num">−0.25</td><td className="num">+1.72</td><td className="neut">中性 · 收窄</td></tr>
                <tr><td>芝加哥联储 NFCI</td><td className="num">−0.554</td><td className="num">−0.01</td><td className="num bull">−1.56</td><td className="num bull">−1.53</td><td className="bull">RISK-ON · 周频陈旧 9d</td></tr>
                <tr><td>MOVE 债券波动</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="num stale">—</td><td className="stale">不可用 · 取数失败（第 3 次渲染）</td></tr>
                <tr><td>DXY</td><td className="num">99.62</td><td className="num bull">−0.18</td><td className="num">+0.61</td><td className="num bull">−2.84</td><td className="bull">偏软</td></tr>
                <tr><td>美联储净流动性</td><td className="num">$5.825T</td><td className="num bear">−0.092T</td><td className="num">−1.09</td><td className="num bull">−2.47</td><td className="stale">周频 · 沿用，无新印数</td></tr>
                <tr><td>USD/JPY</td><td className="num">157.40</td><td className="num">沿用</td><td className="num">+0.30</td><td className="num bull">−3.93</td><td className="bull">日元偏强</td></tr>
                <tr><td>美日 10Y 利差</td><td className="num">2.01%</td><td className="num bear">+1.0bp</td><td className="num">−0.32</td><td className="num">+1.40</td><td className="neut">中性</td></tr>
                <tr><td>USD/CNY</td><td className="num">6.7448</td><td className="num">−0.01</td><td className="num bull">−1.48</td><td className="num bull">−2.49</td><td className="bull">无标签 · 宽松</td></tr>
                <tr><td>JGB 10Y</td><td className="num stale">2.67%</td><td className="num stale">月频</td><td className="num stale">+2.42</td><td className="num stale">+1.09</td><td className="stale">月频 · 勿倚</td></tr>
              </tbody>
            </table>

            <p>
              跨资产（7d 1h 窗口，22 个资产，167 行，summary 00:00Z——{' '}
              <span className="dn-em">一个 7 天滚动读数，不是今天</span>）。off-diagonal 均值{' '}
              <span className="dn-tag">|r| 0.318</span>——NORMAL 带，较 08-02 不变，仍在同向。BTC 的最强
              联系是{' '}
              <span className="dn-tag">NQ +0.571</span>，然后 SP500{' '}
              <span className="dn-tag">+0.558</span>、SILVER{' '}
              <span className="dn-tag">+0.471</span>、TSLA{' '}
              <span className="dn-tag">+0.465</span>、JP225{' '}
              <span className="dn-tag">+0.453</span>、PALL{' '}
              <span className="dn-tag">+0.431</span>、GOLD{' '}
              <span className="dn-tag">+0.429</span>、COPPER{' '}
              <span className="dn-tag">+0.418</span>、URNM{' '}
              <span className="dn-tag">+0.409</span>、PLAT{' '}
              <span className="dn-tag">+0.396</span>、NVDA{' '}
              <span className="dn-tag">+0.387</span>。7d 表现使 BTC 在一个分裂的盘口里居中：{' '}
              <span className="dn-tag bear">BTC −2.37%</span> 落后于指数（NQ{' '}
              <span className="dn-tag bull">+0.09%</span>、SP500{' '}
              <span className="dn-tag bull">+0.82%</span>），远落后于绿色软件大盘股
              （MSFT <span className="dn-tag bull">+20.74%</span>、AMZN{' '}
              <span className="dn-tag bull">+16.48%</span>、GOOGL{' '}
              <span className="dn-tag bull">+11.30%</span>），与 JP225{' '}
              <span className="dn-tag bear">−1.36%</span> 大致相当，但领先红色 AI 大盘股组
              （NVDA <span className="dn-tag bear">−4.02%</span>、META{' '}
              <span className="dn-tag bear">−7.22%</span>、AAPL{' '}
              <span className="dn-tag bear">−7.63%</span>）与能源（CL{' '}
              <span className="dn-tag bear">−4.64%</span>、BRENT{' '}
              <span className="dn-tag bear">−4.25%</span>、NGAS{' '}
              <span className="dn-tag bear">−2.96%</span>）。金属混合：GOLD{' '}
              <span className="dn-tag bear">−0.49%</span>、SILVER{' '}
              <span className="dn-tag bear">−2.06%</span>、PLAT{' '}
              <span className="dn-tag bull">+2.62%</span>、PALL{' '}
              <span className="dn-tag bull">+1.67%</span>、COPPER{' '}
              <span className="dn-tag bull">+2.81%</span>；URNM{' '}
              <span className="dn-tag bear">−1.62%</span>；TSLA −0.53%；EUR +1.24%，JPY（日元）偏强。{' '}
              <span className="dn-em">
                相关性 regime 为 NORMAL（0.318），BTC 与一个两色调风险盘口同向——7d 内微负，落后于指数与
                绿色软件领头、与 JP225 大致相当、领先红色 AI 大盘股 / 能源组。所以 BTC 既非 RS 领头也非最差
                ——它在一个分裂复合体里居中，收复是一次 BTC 内生事件，不是宏观驱动的 risk-on。按 DN-001 脉络
                这是一个 NORMAL、混合的跨资产读数——无轮动判断。
              </span>{' '}
              JGB 月频 2.67% 带月频标签——勿倚。
            </p>

            <h2 className="dn-sec">
              交易账本{' '}
              <span className="dn-roman">V · 追空被证伪——周收结算站上地板（$63,550 &gt; $63,533），其地板破位腿消失、伽玛反转为阻尼（+48.86M）；只有在一根新的收盘跌破已上升 $63,533 地板、且伽玛翻负时才重新武装 · 回补反弹侦察在复活但未武装——收盘收复地板、regime 翻转、8h 金叉、阻尼伽玛，但 SM 空 / 资金费钉住 / 1h TD9 SELL / 利率 FALSE 拦住它 · 账本 FLAT</span>
            </h2>

            <p>
              <span className="dn-signal">
                关键周收把脉络的岔口解到多头一侧——地板守住——故追空被证伪、回补反弹侦察复活，但两者在今天的
                盘口上都不武装，交易台保持 FLAT
              </span>。08-02 那份把追空退场等周日收盘、并让侦察保持死态。收盘结算站上地板
              （$63,550.00 &gt; 已上升的 $63,533.52），这彻底移除了追空的核心腿（没有已封的破位可追），并使
              侦察的复苏读数复活（价格在收盘上收复地板）。但侦察在此处不武装：SM 可认定地逆着反弹做空、资金费
              重新钉回上限、一根全新 1h TD9 SELL 警示超买、利率过滤器 FALSE。故账本保持 FLAT：追空被证伪
              （退场，只有在跌破已上升地板、伽玛翻负时才重新武装），侦察复活但被拦（只在一根 D-EMA50 上盖收盘、
              带干净 SM 读数上武装），无新对冲——等上盖收盘与一次 SM 回补。
            </p>

            <div className="dn-trade">
              <span className="dn-side short">空 · 追 · 已证伪 · 周收结算站上已上升地板——地板破位腿消失、伽玛反转为阻尼</span>
              <div className="dn-trade-name">
                追空——在周收上被证伪：关键周日 08-02 K 结算 $63,550.00，站上已上升 200W $63,533.52（连续第五次周收站上），故整个设置所倚的地板破位腿消失，且做市商账本重新伽玛为 +48.86M 阻尼——空头退场
              </div>
              <div className="dn-thesis">
                追空的优势是一个已封的地板破位、下方放大的负伽玛、外加聪明钱滚向空头。三者中两个在这次了结上
                反转了。地板破位腿被证伪——整条脉络等的那根周线 K 结算 $63,550.00，站上已上升的已结算 200W
                $63,533.52、站上旧 $63,311 地板，是连续第五次周收站上 200W；地板之下的日收（07-31、08-01）
                被 08-02 阳线收复。伽玛腿被证伪——账本硬性重新伽玛为正（头条 +6.3M → +38.1M，汇总
                +20.25M → +48.86M）、现货收复站上 $63,015 翻转，故做市商现在阻尼波动；现货下方负货架减轻至
                −44.66M，坐在一个正伽玛缓冲之下。只有 SM 腿存活——且它现在是干净的净空 −19,047——但一个倚着
                收复的空头不是可追的破位；它是收复被争夺的理由，不是交易触发。空头在其核心论点上被证伪、退场。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">腿状态（2 证伪，1 存活但错时）</span><span className="dn-lvl-v bull">地板收盘破位（证伪——周收结算 $63,550 &gt; 已上升 $63,533；日破位在 08-02 阳线上收复）· 放大的负伽玛（证伪——账本重新伽玛为 +48.86M 阻尼、现货 +0.67% 在翻转之上、前端 0DTE +7.31M）· SM 定位为空（存活 / 干净 −19,047——但倚着收复、非确认破位）</span></div>
                <div><span className="dn-lvl-k">什么会重新武装空头</span><span className="dn-lvl-v bear">一根新的日收重新跌破已上升的已结算地板 $63,533（失败的收复）且做市商账本翻回负伽玛（现货回落 $63,015 翻转之下进入负货架）且钉住的多头 carry 终于冲掉——是对已收复位的一次新破位，不是旧的那个</span></div>
                <div><span className="dn-lvl-k">若重新武装的结构图</span><span className="dn-lvl-v bear">一次失败的收复回落 $63,533 之下 → 回到 $63,015 翻转之下进入负伽玛 → $62k −9.06M 墙 → $60k −22.74M 崩盘 put；重新钉住的多头 carry（资金费在 +10.95% 上限、散户 65.87）是级联燃料</span></div>
                <div><span className="dn-lvl-k">勿做</span><span className="dn-lvl-v">此处不追空——设置所倚的破位没有封住、它收复了；不要仅因 SM 做空就去空一道守住的地板进正伽玛阻尼——等一次失败的收复跌破 $63,533、伽玛翻负</span></div>
              </div>
              <div className="dn-gating">
                <b>纪律：</b>追空只有在 SM 可核实地与你一同做空、进入一个已封破位且伽玛放大时才付钱。今天
                破位没封——周收收复了地板——且伽玛反转为阻尼，故三腿去二，存活的 SM 空是错时的（倚着收复）。
                设置在其自身条件上被证伪；它不在旧 $63,311 线上重新武装，而在已上升 $63,533 地板的一次新失败
                上、伴随负伽玛。退场。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side long">多 · 侦察 · 复活但未武装 · 地板在周收上收复、regime 翻转，但 SM 空 / 资金费钉住 / 一根 1h TD9 SELL 警示超买 / 利率 FALSE</span>
              <div className="dn-trade-name">
                回补反弹侦察——复活：地板在周收上收复、regime 翻成趋势延续、一根 8h 金叉印出、伽玛转为阻尼——但它在 SM 空、资金费钉在上限、一根全新 1h TD9 SELL、利率过滤器 FALSE 下不武装
              </div>
              <div className="dn-thesis">
                侦察的复苏读数——在 07-31 地板破位上被止损——在收复上复活：08-02 周收结算站上地板，MTF regime
                翻成 5/9 趋势延续，一根新的 8h 水下金叉印进一个 30m/4h/3d/1w 金叉簇，D-SMA50 翻成第一根正的
                日线偏移，做市商账本重新伽玛为一个既压下也压上的阻尼器。那是侦察为之而生的建设性背景。但它的
                武装线不变——一根日收站上 D-EMA50 上盖 $64,657、由需求主导的流量、带干净 SM 读数——而今天每一个
                确认信号都缺席：SM 干净地净空 −19,047（倚着反弹、非确认它）、资金费重新钉回 +10.95% 上限
                （多头 carry 重新加热而非新鲜需求）、一根全新 1h ⚡TD9 SELL 警示反弹超买、回补做多利率过滤器
                在 4.68% 为 FALSE。故侦察再度活着但被拦——它等上盖收盘与一次 SM 回补。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">状态</span><span className="dn-lvl-v bull">复活 · 复苏读数重回牌桌（地板在周收上收复、regime 翻成趋势延续、8h 金叉、阻尼伽玛）——但未武装、未入场</span></div>
                <div><span className="dn-lvl-k">武装线 + 所需确认</span><span className="dn-lvl-v bull">一根日收站上 D-EMA50 上盖 $64,657、由需求主导的 OI 扩张、带一个正在回补（非加空）的干净 SM 读数——翻转/地板带的收复已完成，剩的是上盖收盘与 SM 回补</span></div>
                <div><span className="dn-lvl-k">拦路者（今天为何退场）</span><span className="dn-lvl-v bear">SM 干净净空 −19,047（在卖收复）· 资金费钉在 +10.95% 上限（carry 重新加热、非新鲜需求）· 一根全新 1h ⚡TD9 SELL（超买）· 利率过滤器 FALSE 10Y 4.68% · 现货仍在 D-EMA50 上盖之下 −1.89%</span></div>
                <div><span className="dn-lvl-k">勿做</span><span className="dn-lvl-v">此处不做侦察多——不要买一个 SM 正在卖入的收复、资金费钉住、一根全新 1h TD9 SELL；侦察等上盖收盘、由需求主导流量、SM 回补，而非一次上盖之下的超买反弹</span></div>
              </div>
              <div className="dn-gating">
                <b>R/R（框架，非实时）：</b>一次在 D-EMA50 上盖收盘约 $64,657 的实时入场，对一个回落收复地板带
                约 $63,300 的止损（约 $1,357 风险），朝下一个日线阻力簇 D-EMA100/D-SMA100 $67,165–$68,635
                （约 $2,508–$3,978 回报）≈ 到下界 1.85:1 / 到上界 2.93:1——若确认对齐是一个可接受的复苏设置。
                今天它们不对齐。<b>纪律：</b>侦察的优势是一次穿过上盖、由新鲜需求确认、SM 转买家的收复——不是
                一次 SM 正在卖的上盖之下的试探。地板的收复是真的、使读数复活，但上盖收盘与 SM 回补才是武装它的
                信号；一次 SM 空、资金费钉住、带 1h TD9 SELL 的反弹是设置、不是触发。
              </div>
            </div>

            <div className="dn-trade">
              <span className="dn-side framework">框架 · 守住地板之上被争夺的收复——周收守住，但 SM 在卖反弹、多头 carry 重新钉回上限：一个买盘对着一个衍生品卖盘筑底，而非干净的复苏</span>
              <div className="dn-trade-name">
                守住地板之上被争夺的收复——了结是一个现货主导买盘在周收上收复 $63,311/$63,533 带，遇上一个已认定的 SM 空与重新钉住的多头 carry，等 D-EMA50 上盖收盘来确认、或一次失败的收复来破位
              </div>
              <div className="dn-thesis">
                关键周收把脉络的岔口解到多头一侧——地板守住（$63,550 &gt; $63,533，连续第五次周收站上）、价格
                收复翻转/地板带——但收复在每一本衍生品账本上都被争夺。价格 24h +0.85%，OI 扩张 +0.54%，24h
                流量分裂为现货买（+8,178 CVD）/ 期货卖（−1,878），regime 翻成趋势延续，一根 8h 金叉印出，
                做市商账本重新伽玛为 +48.86M 阻尼——建设性的一侧。但 SM 干净地更深滚空 −19,047 进入反弹、资金费
                重新钉回 +10.95% 上限（连续第五天 0 负值）、散户守在 65.87、一根全新 1h TD9 SELL 警示超买——
                被争夺的一侧。故读数是一个现货买盘对着一个期货/SM 卖盘筑底、而非干净的复苏。若收复延伸到一根
                D-EMA50 上盖收盘、伴随 SM 回补且 carry 守住，侦察武装进入 $67k–$68.6k 阻力簇。若买盘失守、价格
                收回已上升 $63,533 地板之下、SM 仍空且 carry 冲掉，追空在一个正伽玛翻转之下重新武装、进入
                $62k/$60k 货架。裁决者坐在上方的上盖与下方的已收复地板。
              </div>
              <div className="dn-lvls">
                <div><span className="dn-lvl-k">多头了结（收复确认）</span><span className="dn-lvl-v bull">一根日收站上 D-EMA50 上盖 $64,657、由需求主导 OI 扩张、SM 回补且 carry 守住 → 侦察武装进入 D-EMA100/D-SMA100 $67,165–$68,635 阻力簇</span></div>
                <div><span className="dn-lvl-k">空头了结（收复失败）</span><span className="dn-lvl-v bear">一根日收收回已上升的已结算地板 $63,533 与 $63,015 翻转之下、SM 仍空且钉住的 carry 冲掉 → 回到负伽玛，追空重新武装进入 $62k −9.06M / $60k −22.74M 货架</span></div>
                <div><span className="dn-lvl-k">决定性信号</span><span className="dn-lvl-v">D-EMA50 上盖收盘 vs $64,657、SM 是回补还是继续加空、以及钉住的多头 carry 是守住（底）还是冲掉（破）——不是盘中跳动</span></div>
              </div>
              <div className="dn-gating">
                <b>框架纪律：</b>优势是拒绝过度解读一个被争夺收复的任一侧——地板在周收上守住（一个真的多头了结）
                但 SM 在卖反弹、carry 重新钉回上限（一个真的争夺），故这是一次待确认的收复，不是一个待买的底、
                也不是一个待空的破位。脉络不去侦察多一个 SM 正在卖的、上盖之下的反弹，也不去追空一道刚在周收上
                守住、进正伽玛阻尼的地板。它保持空仓、读三个信号：上盖收盘、SM 回补 vs 加仓、资金费冲掉 vs 守住。
                哪个先了结，就写下一份备忘。
              </div>
            </div>

            <h2 className="dn-sec">
              决策条件{' '}
              <span className="dn-roman">VI · 关键周收守住地板（$63,550 &gt; $63,533，连续第五次站上）· 追空被证伪（破位没封、伽玛反转为阻尼）· 回补反弹侦察复活（地板收复、regime 翻转、8h 金叉）但被拦（SM 空、资金费钉住、1h TD9 SELL、利率 FALSE）· 账本 FLAT</span>
            </h2>

            <p>
              在 08-02 的决策条件里：{' '}
              <em>周 200W 收盘</em>，整条脉络指向的最后一张多米诺，已结算——并守住了地板，$63,550.00 在
              已上升 $63,533.52 之上，是连续第五次周收站上 200W，故空头了结没有触发；{' '}
              <em>侦察的已结算地板止损</em> 现已收复（08-02 阳线 $63,550.00 收回 $63,311 之上，使复苏读数
              复活）；{' '}
              <em>追空地板收盘破位腿</em> 被证伪（日破位收复、周结算站上）；<em>追空负伽玛腿</em> 被证伪
              （账本重新伽玛为 +48.86M 阻尼、现货 +0.67% 在翻转之上）；{' '}
              <em>追空 SM 定位腿</em> 现在是干净的净空 −19,047——但倚着收复，故是一个错时的存活者、非触发；且{' '}
              <em>回补做多利率过滤器</em> 维持 FALSE（10Y 4.68%）但随复苏读数复活重新与当前相关。{' '}
              <em>地板在周收上守住，故追空在两腿上被证伪、侦察复活——但侦察被一个已认定的 SM 空、一个重新钉回
              上限的资金费 carry、一根全新 1h TD9 SELL、一个 FALSE 的利率过滤器拦住，故账本保持空仓。</em>{' '}
              今天的条件围绕一道在周收上守住并被收复的地板、一个被争夺的买盘（SM 在卖、carry 重新钉住）、一个
              重新伽玛的做市商阻尼、一个松了拥挤但仍偏多的散户、以及一个朝其上盖收盘武装线复活的侦察重新设定：
            </p>

            <table className="dn-kv">
              <thead>
                <tr><th>条件</th><th>水平</th><th>动作</th></tr>
              </thead>
              <tbody>
                <tr><td>周 200W 收盘（最后一张多米诺）</td><td className="bull">已结算 / 守住——截至 08-02 的一周收 $63,550.00，站上已上升 W-SMA200 $63,533.52 $16.48（+0.026%）；连续第五次周收站上 200W（07-05、07-12、07-19、07-26、08-02）</td><td>关键读数解为多头——地板在收盘上守住；空头&ldquo;封在下方&rdquo;的了结被证伪</td></tr>
                <tr><td>追空地板收盘破位（腿）</td><td className="bull">已证伪——日破位（07-31 / 08-01 在下方）在 08-02 阳线 $63,550.00 上收复，周结算站上 $63,533</td><td>核心腿消失；空头只有在一根新的收盘跌破已上升 $63,533 地板时才重新武装</td></tr>
                <tr><td>追空放大的负伽玛（腿）</td><td className="bull">已证伪——账本重新伽玛为 +38.1M 头条 / +48.86M 汇总，现货 +0.67% 在 $63,015 翻转之上，前端 0DTE +7.31M；下方负货架减轻至 −44.66M</td><td>放大器反转为阻尼；空头需伽玛再次翻负才能重新武装</td></tr>
                <tr><td>追空 SM 定位（腿）</td><td className="bear">干净净空 −19,047（无可疑分钟）——但倚着收复、非确认破位</td><td>存活腿是错时的；一个已认定 SM 空进一道守住地板是争夺信号、非追空触发</td></tr>
                <tr><td>回补反弹侦察重新武装</td><td className="bull">复活——地板在收盘上收复、regime 翻成 5/9 趋势延续、8h 金叉印出、伽玛为阻尼；在一根 D-EMA50 上盖收盘 $64,657、由需求主导流量、SM 回补上武装</td><td>侦察再度活着但未武装——等上盖收盘与一次 SM 回补</td></tr>
                <tr><td>侦察拦路者（今天）</td><td className="bear">SM 空 −19,047 · 资金费钉 +10.95% 上限（连续第五天 0 负值）· 全新 1h ⚡TD9 SELL（超买）· 利率过滤器 FALSE 10Y 4.68% · 现货 −1.89% 在上盖之下</td><td>四个拦路者在复活读数下让侦察退场；账本保持空仓不做多</td></tr>
                <tr><td>回补做多利率过滤器</td><td className="bear">FALSE——10Y 4.68% &gt; 4.55%（差 13bp）；随复苏读数复活重新与当前相关</td><td>侦察的其中一个确认，当前为假；作为闸口重回牌桌</td></tr>
              </tbody>
            </table>

            <p>
              重写<em>这一</em>份备忘的那一行是{' '}
              <span className="dn-signal">
                收复是延伸到一根 D-EMA50 上盖收盘（$64,657）、伴随聪明钱回补且钉住的多头 carry 守住——这会
                把侦察武装进入 $67k–$68.6k 阻力簇——还是现货买盘失守、价格收回已上升 $63,533 地板之下、SM 仍空
                且 carry 冲掉，这会把追空在一个正伽玛翻转之下重新武装进入 $62k/$60k 货架；两者之间的一切都是
                交易台现在读到的守住地板之上被争夺的收复
              </span>。整条脉络指向的那个关键周日收盘守住了地板——多头了结触发了——但收复是被争夺的：SM 干净地更深
              滚空进入反弹、资金费重新钉回上限（连续第五天 0 负值）、一根全新 1h TD9 SELL 警示超买，即便 regime
              翻成趋势延续、一根 8h 金叉印出、做市商账本重新伽玛为 +48.86M 阻尼。追空在其核心腿上被证伪、退场；
              侦察在收复上复活但被四路拦住、保持未武装；put 价差不去在正伽玛阻尼里重建。BTC 在一个 NORMAL、
              分裂的跨资产盘口里保持居中——一次 BTC 内生的收复，不是宏观事件。未来 24–48h 的正确读数是{' '}
              <em>耐心——盯 D-EMA50 上盖收盘、SM 是回补还是继续加空、以及钉住的多头 carry 是守住还是冲掉；不要买
              一个 SM 正在卖的、上盖之下的收复，也不要空一道刚在周收上守住的地板</em>。
            </p>
          </div>

          <div className="dn-audit-trace">
            <span className="dn-at-head">
              审计追踪 · v2 · 已过 codex 敌对式审计（2026-08-03）
            </span>
            <b>状态：</b>v2 中文版备忘——<b>已过 codex 敌对式审计</b>（裁定 PASS-WITH-NOTES：0
            CRITICAL / 3 MAJOR / 6 MINOR；见 <em>audits/2026-08-03-desk-note.md</em>）。STAGE A 从原子
            快照（2026-08-03 00:07Z，实时盘口 t == &ldquo;08-03 08:07&rdquo; 北京）与归档于
            /opt/desk-note/snapshots/2026-08-03-0007/ 的滚动来源（mtf_div_latest.html、btc_gex.html、
            macro_dashboard.html、cross_asset_correlation_summary.md）撰写，外加 live_db.json 尾部、
            用于 MA / RV / 200W 重算的完整 btcusdt_1m_*.parquet glob（362 根周线）与 gex_summary.json 汇总。
            每条 codex 发现都就地修复、并以一个跨完整 EN 文件的 grep-closure 循环收口（模式 · 修前命中 ·
            修后命中）：{' '}
            <b>DN-001（MAJOR）</b>——4h/1h taker-net 用了同时钟端点、其余 delta 用前一行基线；模式
            <em>&ldquo;−420.1&rdquo; / &ldquo;−116.1&rdquo;</em>，前 2，后 0——两个 taker-net 移到前一行
            口径（−430.8 / −134.8，现等于 fut_cvd Δ）——<b>RESOLVED</b>。{' '}
            <b>DN-002（MINOR）</b>——cb_cvd 起点低估、台阶计数错；模式
            <em>&ldquo;17,635.8&rdquo; / &ldquo;两个小于 |120| 台阶&rdquo;</em>，前 2 + 2，后 0 + 0——
            起点更正为 17,569.2（25,747.3 − 17,569.2 = +8,178.1）、改述为六个 &gt;120 BTC 单分钟台阶、
            最大 +239.3、无重置量级台阶——<b>RESOLVED</b>。{' '}
            <b>DN-003（MINOR）</b>——&ldquo;473 prints&rdquo; 是活跃分钟数、非原始笔数；模式
            <em>&ldquo;473 prints&rdquo;</em>，前 3，后 0——重述为 745 笔跨 473 个活跃分钟——<b>RESOLVED</b>。{' '}
            <b>DN-004（MINOR）</b>——主动成交偏斜统计标为 24h 却算在 1h 窗口；模式
            <em>&ldquo;24h mean −4.72&rdquo;</em>，前 1，后 0——改标 1h 均值——<b>RESOLVED</b>。{' '}
            <b>DN-005（MAJOR）</b>——可变的 ma200w_trap_watch_state.json 被当锚定来源引用、但未在 00:07
            归档且其 recomputed_at 在锚点后推进到 00:11:39Z；模式 <em>&ldquo;last recompute
            2026-07-27&rdquo; / &ldquo;state file is STALE&rdquo; / &ldquo;consecutive_above 4&rdquo;</em>，
            前 5 处（manifest v-cell + flag、prose、audit-trace、footer），后 0——各处重构为一个独立全 glob
            parquet 重算（362 根周线），旁文件明确不作锚定来源引用、并注明已推进过锚点（现携带已结算 08-02
            周 / consecutive_above 5，佐证重算）——<b>RESOLVED</b>。{' '}
            <b>DN-006（MAJOR）</b>——美联储净流动性 z 分数错标、宏观标题把流动性夸为宽松；模式
            <em>&ldquo;episodic z −1.09&rdquo; / &ldquo;loose-to-neutral&rdquo;</em>，前 1 + 1，后 0 + 0——
            prose 修为 regime z −1.09 / episodic z −2.47（RISK-OFF），&ldquo;Net:&rdquo; prose 与标题
            重构为信用中性/偏紧 + DXY 偏软 + NFCI 宽松但美联储净流动性携带 RISK-OFF——<b>RESOLVED</b>。{' '}
            <b>DN-007（MINOR）</b>——MTF 表未忠于归档扫描；模式 <em>4h close &ldquo;63,526&rdquo; / 15m
            &ldquo;TOP-div&rdquo; / 4h &ldquo;BOT-div&rdquo; / prose &ldquo;bottom-div cluster on
            1h/4h/8h/1w&rdquo;</em>，前，后 0——4h 收改为 63,530，15m 与 4h 背离格渲染为顶+底背离（匹配脚注
            计数 顶背离 3 / 底背离 5），prose 底背离簇更正为 15m/1h/4h/8h/1w——<b>RESOLVED</b>。{' '}
            <b>DN-008（MINOR）</b>——$70k +14.91M 被错标为最重墙（绝对值）而 $60k −22.74M 更大；模式
            <em>&ldquo;the heaviest wall, positive&rdquo;</em>，前 1，后 0——重述为最重的正墙——<b>RESOLVED</b>。{' '}
            <b>DN-009（MINOR）</b>——框架 R/R 回报无法从所述簇重建；模式 <em>&ldquo;~$2,900 reward&rdquo; /
            &ldquo;≈ 2.1:1&rdquo;</em>，前 1 + 1，后 0 + 0——替换为回报区间 $2,508–$3,978 ≈ 1.85:1
            （到 $67,165）/ 2.93:1（到 $68,635）——<b>RESOLVED</b>。Deepseek 补充数值经裁定、非自动套用：
            OI +590.4 BTC 与 SM −19,047.9 净项是 1 位小数端点的显示取整伪迹（codex 确认精确值 +590.378 →
            +590.4 与 −19,047.925 → −19,047.9 干净），故不改；cb_cvd、R/R 与 MTF 背离项与 DN-002/DN-009/
            DN-007 重叠，经 codex 裁定的修复解决（起点 17,569.2，而非 deepseek 建议的 +8,111.5）。全部 9 条
            发现 RESOLVED（grep 修后命中 = 0）。可复现说明：本轮 SM 净头寸序列干净（24h 窗口无可疑单分钟跳变
            &gt; |3,000| BTC，不同于 08-02 的 −22,911 伪迹）；关键周日周收由独立全 glob 重算了结（$63,550.00
            vs W-SMA200 $63,533.52）。完整 <em>next build</em> 在本主机未验证（Node 18.19.1 &lt; Next.js
            20.9.0 闸口）；<em>tsc --noEmit</em> 为构建代理、退出 0。EN/ZH 数值零漂移。{' '}
            <b>已过 codex 敌对式审计。</b>
          </div>

          <div className="dn-nfa">
            <span className="dn-nfa-head">NFA · 非投资建议</span>
            本备忘是 Hysteresis Research 内部交易台产物，供各主理人讨论之用，{' '}
            <em>非投资建议、非要约、非募集</em>，且未针对任何接收者的具体情况定制。数字反映单一原子快照
            （2026-08-03 00:07Z），章节级出处披露于上方数据来源带；宏观 Tier-1 面板渲染为 2026-08-02
            22:15Z（早于快照约 1.87h），MOVE 连续第三次渲染不可用、美联储净流动性行按周频沿用，部分输入
            明确陈旧、不可用或待定并已如此标注。价位、仓位与条件示意交易台流程、非长期建议。过往的相关性、
            伽玛与持仓模式不约束未来盘口。衍生品有全额亏损风险、若加杠杆则亏损可能超过入金保证金。{' '}
            <em>请自行研究。</em>
          </div>

          <div className="dn-signature">
            <div>
              <div className="dn-sign-line">
                关键周收守住了地板——多头了结触发了——但 SM 干净地更深滚空进入收复、多头 carry 重新钉回上限。
                追空被证伪；侦察复活但被拦。盯上盖收盘与一次 SM 回补。空仓、耐心。
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
            v2 · 2026-08-03 00:07Z 快照 · 来源：live_db.json ·
            mtf_div_latest.html · btc_gex.html · macro_dashboard.html ·
            cross_asset_correlation_summary.md · btcusdt_1m_*.parquet 全 glob
            200W 重算（ma200w_trap_watch_state.json 未归档 / 已推进过锚点——未引用）·
            FRED · Yahoo · Hyperliquid xyz
          </span>
        </footer>
      </article>
    </main>
  );
}
