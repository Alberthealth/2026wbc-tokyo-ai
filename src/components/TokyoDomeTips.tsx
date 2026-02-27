import React from 'react';
import { motion } from 'motion/react';
import { Info, ShoppingBag, MapPin, Calendar, Package, AlertCircle, CheckCircle2 } from 'lucide-react';

interface TipItem {
  category: string;
  action: string;
  reason: string;
  special: string;
  risk: string;
}

const TIPS_DATA: TipItem[] = [
  { category: '行前準備', action: '把「不能帶」先剔除：瓶罐/危險物/過大行李等', reason: '避免門口丟棄或被擋', special: '規定清楚寫「瓶罐/凍飲/過大手荷物等」', risk: '想喝→進場後買；想帶酒→別想（規定優先）' },
  { category: '動線與入場', action: '小包策略：只帶錢包/手機/行動電源/薄外套；能不背後背就不背', reason: '入場安檢更快、座位更舒服', special: '大包容易卡安檢、也佔位', risk: '真的有行李→先找置物櫃或寄放' },
  { category: '動線與入場', action: '先把支付工具打開/解鎖：信用卡/IC/行動支付放最順手位置；手機先充飽', reason: '場內不能用現金，結帳慢會被後面瞪', special: '東京巨蛋場內「完全cashless」是新手最大差異點', risk: '手機沒電→帶行動電源；不熟支付→用交通系 IC 最穩' },
  { category: '購物', action: '提早去「官方周邊」排第一波（看到賣店先判斷隊伍長度，先買再進座位）', reason: '熱門款與尺寸最快沒', special: '國際賽限定感最強＝最好聊的戰利品', risk: '排隊爆長→改買小物（毛巾/鑰匙圈/貼紙）或第二波補貨時段' },
  { category: '購物', action: '必買：應援毛巾/手持小旗/應援 T（選「中華隊色系」好搭）', reason: '拍照最好看、也最容易帶回台', special: '團體一起拿同款情誼更升溫', risk: '缺貨→買「通用款」或改買帽子/束口袋' },
  { category: '購物', action: '必買：球帽（cap）（優先選舒適版型、低調配色）', reason: '日常最好用、回台也能穿搭', special: '「看起來像球迷」最快捷的道具', risk: '熱門尺寸沒→買可調式；不想戴→改買針織帽/頭帶' },
  { category: '購物', action: '必買：票根收納/壓克力立牌/紀念徽章', reason: '體積小、收藏爽、送人也方便', special: '國際賽「限定徽章」是老球迷話題入口', risk: '太多款會選擇障礙→先定預算上限' },
  { category: '購物', action: '去東京巨蛋「棒球商品店」補巨蛋系周邊（非 WBC 也可當紀念）', reason: 'WBC 缺貨時的保底方案', special: '東京巨蛋官方也有棒球周邊賣店資訊', risk: '想要特定隊伍→選擇可能有限，改買通用款' },
  { category: '購物', action: '必買：束口袋/小斜背（裝戰利品＋回程上機）', reason: '你 3/9 回台，最怕「買太多不好收」', special: '現場買到的收納品＝立刻解決問題', risk: '缺貨→去東京巨蛋城商店找替代收納袋' },
  { category: '場內必做', action: '找一次「環形 concourse」繞一圈（先不買，先看）', reason: '先掌握廁所、賣店、人潮點位＝後面省很多時間', special: '新手最常迷路；繞一圈就開圖', risk: '太擠→分段繞（上半局/中場/7局）' },
  { category: '場內必做', action: '7 局左右去一趟賣店/廁所（避開最擠波峰）', reason: '省排隊，回座位也不狼狽', special: '室內場館動線集中，時機比地點重要', risk: '人還是多→改在半局攻守交換瞬間快進快出' },
  { category: '飲食', action: '先買 1 份「好拿、好吃、走動不灑」的食物', reason: '兄弟團聊天不想一直端著湯汁', special: '室內球場座位較密，便當型最安全', risk: '排隊長→先買飲料/零食墊肚子' },
  { category: '飲食', action: '必喝：1 杯「賣場杯裝飲料」（別帶外面瓶罐冒險）', reason: '省踩雷、也省安檢麻煩', special: '場內販售更符合規範', risk: '想省錢→外面喝完再進；進場後再買一杯' },
  { category: '話題任務', action: '買 1 個「送人的小物」（徽章/鑰匙圈/貼紙）', reason: '回台後「有交代」又不傷荷包', special: '國際賽限定小物最有說服力', risk: '缺貨→改買中性圖樣、避免尺寸問題' },
  { category: '賽後行程', action: '賽後不要立刻衝車站：先在東京巨蛋城外圍「緩衝 20 分鐘」', reason: '避開散場人潮尖峰＋順手補拍照', special: '東京巨蛋城周邊店多，可順路收尾', risk: '真的要趕車→提早 1 局離席（取決於你願不願意）' },
];

const POPUP_STORES = [
  {
    name: '晴空塔期間限定店',
    location: '晴空塔1F「SKYTREE SPACE」',
    period: '2026/2/20 – 3/18',
    items: '特別設計ユニフォーム、アパレル、タオル、キャップ、お菓子、雑貨等「500種以上」',
    color: 'bg-sky-50 border-sky-200'
  },
  {
    name: '宮下公園期間限定店',
    location: '渋谷・宮下公園 多目的運動施設（サンドコート）',
    period: '2026/2/20 – 3/22',
    items: '初日12:00開店；多數日10:00–21:00。現場有排隊動線規定（開園後早上8點起開始形成待機列）',
    color: 'bg-emerald-50 border-emerald-200'
  }
];

export default function TokyoDomeTips() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-black text-zinc-900 mb-4 flex items-center justify-center gap-3">
          <Info className="text-blue-600 w-10 h-10" />
          東蛋Tips
        </h2>
        <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-medium">
          第一次去東京巨蛋看 WBC？這份指南幫你從行前準備到賽後行程，通通搞定！
        </p>
      </motion.div>

      {/* Section 1: Beginner Guide Table */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-black text-zinc-900">第一次到東京巨蛋看棒球的新手須知</h3>
        </div>

        <div className="overflow-x-auto bg-white rounded-3xl border border-zinc-200 shadow-xl">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-zinc-900 text-white">
                <th className="p-5 font-bold text-sm uppercase tracking-wider border-r border-white/10">類別</th>
                <th className="p-5 font-bold text-sm uppercase tracking-wider border-r border-white/10">新手應對</th>
                <th className="p-5 font-bold text-sm uppercase tracking-wider border-r border-white/10">推薦原因</th>
                <th className="p-5 font-bold text-sm uppercase tracking-wider border-r border-white/10">特別之處</th>
                <th className="p-5 font-bold text-sm uppercase tracking-wider">風險與替代方案</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {TIPS_DATA.map((tip, idx) => (
                <tr key={idx} className="hover:bg-zinc-50 transition-colors">
                  <td className="p-5 font-black text-zinc-400 text-xs border-r border-zinc-100">{tip.category}</td>
                  <td className="p-5 font-bold text-zinc-900 border-r border-zinc-100">{tip.action}</td>
                  <td className="p-5 text-zinc-600 text-sm border-r border-zinc-100">{tip.reason}</td>
                  <td className="p-5 text-zinc-600 text-sm border-r border-zinc-100 font-medium italic">{tip.special}</td>
                  <td className="p-5 text-zinc-500 text-sm italic">{tip.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-zinc-400 text-xs text-center italic">
          * 表格內容可左右滑動查看完整資訊
        </p>
      </section>

      {/* Section 2: Pop-up Stores */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-black text-zinc-900">紀念品快閃店</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {POPUP_STORES.map((store, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className={`${store.color} p-8 rounded-[2.5rem] border-2 shadow-sm relative overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-24 h-24" />
              </div>
              
              <h4 className="text-2xl font-black text-zinc-900 mb-6">{store.name}</h4>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-zinc-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] font-black text-zinc-400 uppercase block mb-1">地點</span>
                    <p className="text-zinc-700 font-bold">{store.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-zinc-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] font-black text-zinc-400 uppercase block mb-1">期間</span>
                    <p className="text-zinc-700 font-bold">{store.period}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-zinc-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] font-black text-zinc-400 uppercase block mb-1">商品與備註</span>
                    <p className="text-zinc-600 text-sm leading-relaxed">{store.items}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-zinc-400">
                <AlertCircle className="w-4 h-4" />
                建議提早前往排隊
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 bg-zinc-900 p-8 rounded-[2.5rem] text-white">
          <div className="flex items-center gap-3 mb-4">
            <Info className="text-amber-500 w-6 h-6" />
            <h5 className="text-xl font-bold">WBC 2026 官方紀念品期間限定店（場外）</h5>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed">
            目前已被官方/新聞稿確認的 WBC 2026 官方販售重點，是「東京巨蛋以外」的期間限定店。
            除了場內販售外，這兩處快閃店提供更多樣化的商品選擇，是球迷補貨的最佳去處。
          </p>
        </div>
      </section>
    </div>
  );
}
