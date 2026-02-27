import React, { useState } from 'react';
import { Info, Trophy, Star, ArrowRightLeft, History, Lightbulb, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Mode = 'difference' | 'milestones';

export default function ComparisonGuide({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mode, setMode] = useState<Mode>('difference');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-zinc-900/90 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-zinc-100 flex flex-col items-center relative bg-zinc-50">
          <div className="text-center">
            <h2 className="text-2xl font-black text-zinc-900 tracking-tight flex flex-col items-center">
              <span>WBC vs 12強</span>
              <span className="text-blue-600">一日球迷終極懶人包</span>
            </h2>
            <p className="text-zinc-500 text-sm mt-2">
              別再搞混了！3分鐘帶你搞懂世界棒球兩大頂級賽事的差別。
            </p>
          </div>
          <button 
            onClick={onClose}
            className="absolute right-6 top-6 p-2 hover:bg-zinc-200 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-zinc-400" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          {/* Quick Intro */}
          <div className="mb-10 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-5 h-5 text-zinc-600" />
              <span className="font-bold text-zinc-900">名詞快速釐清</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
                <span className="font-black text-blue-900 block mb-1">WBC (World Baseball Classic)</span>
                <p className="text-blue-800 text-sm leading-relaxed">
                  由美國職棒大聯盟 (MLB) 主導，是全球最高水準、球星參與度最高的棒球盛事。
                </p>
              </div>
              <div className="bg-red-50 p-5 rounded-2xl border border-red-100 shadow-sm">
                <span className="font-black text-red-900 block mb-1">Premier12 (世界12強)</span>
                <p className="text-red-800 text-sm leading-relaxed">
                  由世界棒壘球總會 (WBSC) 主辦，依據世界排名選出前12名國家參賽。
                </p>
              </div>
            </div>
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 text-amber-800 text-sm font-black flex items-center gap-2">
              <span className="shrink-0">⚠️</span>
              <span>兩者是完全不同的賽事體系，別再說「WBC 12強」了！</span>
            </div>
          </div>

          {/* Mode Toggle */}
          <div className="flex justify-center mb-10">
            <div className="bg-zinc-100 p-1 rounded-xl flex gap-1">
              <button
                onClick={() => setMode('difference')}
                className={`px-6 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${
                  mode === 'difference' ? 'bg-white text-blue-600 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'
                }`}
              >
                <ArrowRightLeft className="w-4 h-4" />
                看差異 (Difference)
              </button>
              <button
                onClick={() => setMode('milestones')}
                className={`px-6 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${
                  mode === 'milestones' ? 'bg-white text-blue-600 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'
                }`}
              >
                <History className="w-4 h-4" />
                看中華隊里程碑 (Milestones)
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {mode === 'difference' ? (
              <motion.div
                key="diff"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {/* WBC Column */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black">W</div>
                    <h3 className="text-xl font-black text-zinc-900">WBC 世界棒球經典賽</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <DiffCard title="主辦單位" content="美國職棒大聯盟 (MLB) 主導" icon="🏢" />
                    <DiffCard title="參賽規模" content="20隊 (包含資格賽晉級隊伍)" icon="🌍" />
                    <DiffCard title="賽事定位" content="全球最高水準，MLB 頂級球星皆會參賽" icon="💎" />
                    <DiffCard title="賽制節奏" content="預賽分組循環，複賽單敗淘汰，張力極大" icon="⚡" />
                    <DiffCard title="球迷誤解" content="以為是 WBSC 主辦，其實是 MLB 的商業賽事" icon="❌" />
                    <DiffCard title="代表性看點" content="大谷翔平、楚奧特等大聯盟一線球星對決" icon="👀" />
                    <DiffCard title="徵召狀況" content="MLB 球團通常會放行，投手有嚴格投球數限制" icon="⚾" />
                    <DiffCard title="觀賽情境" content="第一次看球？看大聯盟球星虐菜或神仙打架就對了" icon="🏟️" />
                  </div>
                </div>

                {/* Premier12 Column */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white font-black">P</div>
                    <h3 className="text-xl font-black text-zinc-900">WBSC Premier12 世界12強</h3>
                  </div>

                  <div className="space-y-4">
                    <DiffCard title="主辦單位" content="世界棒壘球總會 (WBSC) 主辦" icon="🏢" />
                    <DiffCard title="參賽規模" content="世界排名前 12 名的國家隊" icon="🌍" />
                    <DiffCard title="賽事定位" content="國家隊積分賽，以各國職棒菁英為主" icon="🏅" />
                    <DiffCard title="賽制節奏" content="超級循環賽制，考量穩定度與投手深度" icon="🔄" />
                    <DiffCard title="球迷誤解" content="以為是 WBC 的前身，其實是獨立的積分賽" icon="❌" />
                    <DiffCard title="代表性看點" content="各國職棒新星、旅外潛力股的成名舞台" icon="👀" />
                    <DiffCard title="徵召狀況" content="MLB 40人名單通常不放行，以 3A 或各國職棒為主" icon="⚾" />
                    <DiffCard title="觀賽情境" content="第一次看球？看中華隊如何靠守備與鬥志擊敗強敵" icon="🏟️" />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="milestones"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid md:grid-cols-2 gap-12"
              >
                {/* WBC Timeline */}
                <div className="space-y-8 relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-100" />
                  <h3 className="text-xl font-black text-blue-600 pl-10">WBC 中華隊歷程</h3>
                  
                  <TimelineItem year="2026" result="待開打" desc="資格賽突圍後，再次挑戰東京巨蛋。" topic="話題：新一代火球男與旅外強打的合體。" />
                  <TimelineItem year="2023" result="分組第五 (預賽止步)" desc="雖然擊敗義大利、荷蘭，但因失分率遺憾止步。" topic="話題：張育成「敬禮」風潮紅到大聯盟。" />
                  <TimelineItem year="2017" result="分組第四 (預賽止步)" desc="在首爾遭遇苦戰，三連敗遺憾收場。" topic="話題：投手戰力斷層引發國內大討論。" />
                  <TimelineItem year="2013" result="前八強 (隊史最佳)" desc="王建民神勇表現，台日大戰打出經典一役。" topic="話題：全台熱血沸騰，棒球熱潮重燃。" />
                  <TimelineItem year="2009" result="分組第四 (預賽止步)" desc="接連敗給中國與韓國，陷入低潮。" topic="話題：當時引發國內棒壇結構性檢討。" />
                  <TimelineItem year="2006" result="分組第三 (預賽止步)" desc="首屆參賽，擊敗中國但負於日韓。" topic="話題：陳鏞基敲出 WBC 史上首支滿貫砲。" />
                </div>

                {/* Premier12 Timeline */}
                <div className="space-y-8 relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-100" />
                  <h3 className="text-xl font-black text-red-600 pl-10">Premier12 中華隊歷程</h3>
                  
                  <TimelineItem year="2024" result="冠軍 (隊史首座世界冠軍)" desc="東京巨蛋決賽 4-0 完封日本，終結日本連勝。" topic="話題：陳傑憲、林家正等球員成為全民英雄。" />
                  <TimelineItem year="2019" result="第五名" desc="擊敗韓國、澳洲，展現強大競爭力。" topic="話題：張奕、江少慶投出身價，旅外身價暴漲。" />
                  <TimelineItem year="2015" result="第九名" desc="首屆主辦，雖然擊敗古巴但無緣晉級。" topic="話題：林智勝對古巴敲出關鍵三分砲。" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Tips */}
          <div className="mt-16 bg-zinc-900 text-white p-8 rounded-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="w-6 h-6 text-amber-400" />
              <h3 className="text-xl font-bold">一日球迷看球不尷尬小抄</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <TipItem text="去東京巨蛋聊天：提到「2024奪冠」是最好的開場白，大家都是英雄。" />
              <TipItem text="分組賽就是大亂鬥，每場都關鍵；晉級後就是「贏了繼續、輸了回家」。" />
              <TipItem text="看到教練頻繁換投手別急，這是「牛棚車輪戰」，短期賽投手體力很珍貴。" />
              <TipItem text="守備佈陣：球員站位奇怪不是站錯，是根據大數據分析打者的球路。" />
              <TipItem text="代打代跑：比賽後半段的奇兵，往往是決定勝負的關鍵轉折點。" />
              <TipItem text="興奮點：滿壘時的對決、外野長傳本壘、以及全場齊聲的應援口號。" />
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-10 pt-6 border-t border-zinc-100 text-center">
            <p className="text-[10px] text-zinc-400">
              資料可信度提示：2026 WBC 賽果與最終名單尚未確定。WBC 與 Premier12 為不同主辦單位與賽事體系，請依官方公告為準。
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function DiffCard({ title, content, icon }: { title: string; content: string; icon: string }) {
  return (
    <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 hover:border-blue-200 transition-colors">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg">{icon}</span>
        <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{title}</span>
      </div>
      <p className="text-sm font-medium text-zinc-700">{content}</p>
    </div>
  );
}

function TimelineItem({ year, result, desc, topic }: { year: string; result: string; desc: string; topic: string }) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-3 top-1.5 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-sm" />
      <div className="flex items-baseline gap-3 mb-1">
        <span className="text-lg font-black text-zinc-900">【{year}】</span>
        <span className="text-sm font-bold text-blue-600">{result}</span>
      </div>
      <p className="text-sm text-zinc-600 mb-1">{desc}</p>
      <p className="text-xs text-zinc-400 italic">{topic}</p>
    </div>
  );
}

function TipItem({ text }: { text: string }) {
  return (
    <div className="flex gap-3 items-start p-3 bg-white/5 rounded-xl border border-white/10">
      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 shrink-0" />
      <p className="text-sm text-zinc-300">{text}</p>
    </div>
  );
}
