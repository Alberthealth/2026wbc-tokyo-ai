import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  MessageSquare, 
  Star, 
  ChevronRight, 
  X, 
  Trophy, 
  Flag, 
  Music,
  Info,
  Menu
} from 'lucide-react';
import ComparisonGuide from './components/ComparisonGuide';
import Forum from './components/Forum';
import TokyoDomeTips from './components/TokyoDomeTips';
import PlayersAndCheer from './pages/PlayersAndCheer';

const GROUPS_INFO = [
  { 
    group: 'Pool A', 
    venue: '波多黎各 聖胡安 (Hiram Bithorn Stadium)', 
    date: '2026/03/06 - 03/11',
    teams: ['波多黎各', '古巴', '加拿大', '巴拿馬', '哥倫比亞'],
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-800',
    borderColor: 'border-blue-200'
  },
  { 
    group: 'Pool B', 
    venue: '美國 休士頓 (Minute Maid Park)', 
    date: '2026/03/06 - 03/11',
    teams: ['美國', '墨西哥', '義大利', '英國', '巴西'],
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-800',
    borderColor: 'border-orange-200'
  },
  { 
    group: 'Pool C', 
    venue: '日本 東京 (東京巨蛋)', 
    date: '2026/03/05 - 03/10',
    teams: ['日本', '澳洲', '韓國', '捷克', '中華台北'],
    bgColor: 'bg-red-50',
    textColor: 'text-red-800',
    borderColor: 'border-red-500 border-4 shadow-lg scale-105 z-10' // 顯眼邊框
  },
  { 
    group: 'Pool D', 
    venue: '美國 邁阿密 (loanDepot park)', 
    date: '2026/03/06 - 03/11',
    teams: ['委內瑞拉', '多明尼加共和國', '荷蘭', '以色列', '尼加拉瓜'],
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-800',
    borderColor: 'border-emerald-200'
  },
];

const TOKYO_DOME_SCHEDULE = [
  { date: '2026/03/05 (四)', time: '11:00', match: '澳洲 vs 中華台北', highlight: true },
  { date: '2026/03/05 (四)', time: '18:00', match: '韓國 vs 捷克', highlight: false },
  { date: '2026/03/06 (五)', time: '11:00', match: '捷克 vs 澳洲', highlight: false },
  { date: '2026/03/06 (五)', time: '18:00', match: '中華台北 vs 日本', highlight: true },
  { date: '2026/03/07 (六)', time: '11:00', match: '捷克 vs 中華台北', highlight: true },
  { date: '2026/03/07 (六)', time: '18:00', match: '日本 vs 韓國', highlight: false },
  { date: '2026/03/08 (日)', time: '11:00', match: '韓國 vs 中華台北', highlight: true },
  { date: '2026/03/08 (日)', time: '18:00', match: '日本 vs 澳洲', highlight: false },
  { date: '2026/03/09 (一)', time: '18:00', match: '澳洲 vs 韓國', highlight: false },
  { date: '2026/03/10 (二)', time: '18:00', match: '日本 vs 捷克', highlight: false },
];

const TOURNAMENT_TIMELINE = [
  { stage: '預賽', date: '2026/3/5 - 3/11', location: '東京、邁阿密、休士頓、聖胡安', icon: <Flag className="w-5 h-5" />, highlight: true },
  { stage: '8強賽', date: '2026/3/13 - 3/14', location: '休士頓、邁阿密', icon: <Users className="w-5 h-5" />, highlight: false },
  { stage: '4強賽', date: '2026/3/15 - 3/16', location: '邁阿密', icon: <Star className="w-5 h-5" />, highlight: false },
  { stage: '冠軍賽', date: '2026/3/17', location: '邁阿密', icon: <Trophy className="w-5 h-5" />, highlight: false },
];

















export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 py-4 px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 min-w-0 flex-1 mr-4">
          <Trophy className="text-amber-500 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
          <h1 className="text-sm sm:text-lg md:text-xl font-black tracking-tighter text-zinc-900 whitespace-nowrap overflow-hidden text-ellipsis">
            WBC2026世界棒球經典賽懶人包
          </h1>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-600 items-center">
          <button 
            onClick={() => setIsGuideOpen(true)}
            className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold hover:bg-blue-700 transition-colors flex items-center gap-1"
          >
            <Info className="w-3 h-3" /> WBC vs 12強
          </button>
          <Link 
            to="/" 
            className={`hover:text-amber-600 transition-colors ${location.pathname === '/' ? 'text-amber-600 font-bold' : ''}`}
          >
            2026賽程
          </Link>
          <Link 
            to="/players-cheer" 
            className={`hover:text-blue-600 transition-colors ${location.pathname === '/players-cheer' ? 'text-blue-600 font-bold' : ''}`}
          >
            球員與啦啦隊
          </Link>
          <Link 
            to="/forum" 
            className={`transition-colors ${location.pathname === '/forum' ? 'text-emerald-600 font-bold' : 'hover:text-emerald-600'}`}
          >
            討論區
          </Link>
          <Link 
            to="/tokyo-dome-tips" 
            className={`transition-colors ${location.pathname === '/tokyo-dome-tips' ? 'text-blue-600 font-bold' : 'hover:text-blue-600'}`}
          >
            東蛋Tips
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-zinc-600 hover:bg-zinc-100 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white md:hidden pt-20 px-6"
          >
            <nav className="flex flex-col gap-4 text-lg font-bold text-zinc-800">
              <button 
                onClick={() => {
                  setIsGuideOpen(true);
                  closeMenu();
                }}
                className="flex items-center gap-3 p-4 bg-blue-50 text-blue-700 rounded-2xl text-left"
              >
                <Info className="w-5 h-5" /> WBC vs 12強
              </button>
              
              <div className="h-px bg-zinc-100 my-2" />
              
              <Link to="/" onClick={closeMenu} className="p-4 hover:bg-zinc-50 rounded-2xl flex items-center justify-between">
                2026賽程 <ChevronRight className="w-5 h-5 text-zinc-300" />
              </Link>
              
              <Link to="/players-cheer" onClick={closeMenu} className="p-4 hover:bg-zinc-50 rounded-2xl flex items-center justify-between">
                球員與啦啦隊 <ChevronRight className="w-5 h-5 text-zinc-300" />
              </Link>
              
              <Link 
                to="/forum" 
                onClick={closeMenu}
                className={`p-4 rounded-2xl flex items-center justify-between ${location.pathname === '/forum' ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-zinc-50'}`}
              >
                討論區 <ChevronRight className={`w-5 h-5 ${location.pathname === '/forum' ? 'text-emerald-400' : 'text-zinc-300'}`} />
              </Link>
              
              <Link 
                to="/tokyo-dome-tips" 
                onClick={closeMenu}
                className={`p-4 rounded-2xl flex items-center justify-between ${location.pathname === '/tokyo-dome-tips' ? 'bg-blue-50 text-blue-600' : 'hover:bg-zinc-50'}`}
              >
                東蛋Tips <ChevronRight className={`w-5 h-5 ${location.pathname === '/tokyo-dome-tips' ? 'text-blue-400' : 'text-zinc-300'}`} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <ComparisonGuide isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />

      <Routes>
        <Route path="/forum" element={<div className="pt-20"><Forum /></div>} />
        <Route path="/tokyo-dome-tips" element={<div className="pt-20"><TokyoDomeTips /></div>} />
        <Route path="/players-cheer" element={<PlayersAndCheer />} />
        <Route path="/" element={
          <main className="pt-16">
            {/* Tournament Timeline Section */}
            <section id="schedule" className="bg-zinc-900 py-10 px-6 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl font-bold text-white">2026 WBC 賽事時程</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {TOURNAMENT_TIMELINE.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex flex-col items-center text-center p-6 rounded-2xl transition-all ${
                    item.highlight 
                      ? 'bg-red-600/20 border-2 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]' 
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <div className={`${item.highlight ? 'text-red-500' : 'text-amber-500'} mb-3`}>
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                  </div>
                  <div className="text-white font-black text-xl flex items-center gap-2 mb-1">
                    {item.stage}
                    {item.highlight && <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded-full animate-pulse">東京站</span>}
                  </div>
                  <div className="text-zinc-300 text-sm font-bold mb-3">{item.date}</div>
                  <div className={`text-xs px-3 py-1 rounded-full font-medium ${item.highlight ? 'bg-red-500/30 text-red-200' : 'bg-zinc-800 text-zinc-400'}`}>
                    {item.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tournament Rules Section */}
        <section className="py-20 px-6 bg-zinc-50 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-10 justify-center">
              <Info className="w-8 h-8 text-indigo-600" />
              <h2 className="text-4xl font-black text-zinc-900 tracking-tight">2026 WBC 賽制介紹</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
                <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm">01</span>
                  預賽
                </h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  20 支球隊分為 4 組（A、B、C、D 組），每組 5 隊。各組進行單循環賽，<span className="text-lg font-black text-red-600 underline decoration-red-200 underline-offset-4">每組前 2 名晉級八強賽</span>。
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
                <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm">02</span>
                  八強賽
                </h3>
                <div className="space-y-2 text-zinc-600 text-sm">
                  <p>由 8 支隊伍進行交叉對戰：</p>
                  <ul className="list-disc list-inside space-y-1 font-medium text-zinc-800">
                    <li>A 組第 1 名 vs. B 組第 2 名</li>
                    <li>A 組第 2 名 vs. B 組第 1 名</li>
                    <li>C 組第 1 名 vs. D 組第 2 名</li>
                    <li>C 組第 2 名 vs. D 組第 1 名</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
                <h3 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm">03</span>
                  準決賽與決賽
                </h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  採單淘汰賽制，四強交叉對壘，勝者晉級最終決賽，爭奪 2026 WBC 世界冠軍寶座。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Groups and Venues Section */}
        <section className="py-20 px-6 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-10 justify-center">
              <Flag className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-black text-zinc-900 tracking-tight">2026 WBC 分組賽程與球場</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {GROUPS_INFO.map((info) => (
                <div 
                  key={info.group} 
                  className={`${info.bgColor} p-6 rounded-2xl border ${info.borderColor} transition-all relative overflow-hidden`}
                >
                  {info.group === 'Pool C' && (
                    <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] px-2 py-0.5 font-bold uppercase tracking-widest">
                      台灣關注
                    </div>
                  )}
                  <h3 className={`text-2xl font-black ${info.textColor} mb-1`}>{info.group}</h3>
                  <p className="text-zinc-600 text-xs font-bold mb-3">{info.date}</p>
                  <p className="text-zinc-500 text-xs mb-4 font-medium flex items-center gap-1">
                    📍 {info.venue}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {info.teams.map((team) => (
                      <span key={team} className="px-2 py-1 bg-white/80 border border-zinc-200 rounded text-xs font-bold text-zinc-700">
                        {team}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tokyo Dome Schedule Section */}
        <section className="py-20 px-6 bg-zinc-50 border-b border-zinc-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-10 justify-center">
              <ChevronRight className="w-8 h-8 text-red-600" />
              <h2 className="text-4xl font-black text-zinc-900 tracking-tight">東京巨蛋賽程表 (Pool C)</h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-300 shadow-lg">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-zinc-900 text-white">
                    <th className="p-4 font-bold">日期</th>
                    <th className="p-4 font-bold">時間</th>
                    <th className="p-4 font-bold">對戰組合</th>
                  </tr>
                </thead>
                <tbody>
                  {TOKYO_DOME_SCHEDULE.map((item, idx) => (
                    <tr 
                      key={idx} 
                      className={`border-b border-zinc-100 transition-colors ${
                        item.highlight 
                          ? 'bg-red-50 border-l-4 border-l-red-600' 
                          : 'hover:bg-zinc-50'
                      }`}
                    >
                      <td className={`p-4 font-bold ${item.highlight ? 'text-red-700' : 'text-zinc-900'}`}>
                        {item.date}
                        {item.highlight && <span className="ml-2 text-[10px] bg-red-600 text-white px-1 rounded">必看</span>}
                      </td>
                      <td className="p-4 text-zinc-600 font-mono">{item.time}</td>
                      <td className={`p-4 font-bold ${item.highlight ? 'text-red-800' : 'text-zinc-800'}`}>
                        {item.match}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-center text-zinc-400 text-sm italic">
              * 以上時間均為當地時間。賽程僅供參考，實際以官方公布為準。
            </p>
          </div>
        </section>
      </main>
    } />
  </Routes>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="text-amber-500 w-6 h-6" />
              <span className="text-xl font-black tracking-tighter">WBC2026世界棒球經典賽懶人包</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              2024 世界12強冠軍戰在東京巨蛋4–0完封擊敗日本的台灣，將挑戰「在同一座球場贏到最高點」，讓我們一起集氣為中華隊加油
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-4">追蹤我們</h5>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                <Star className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-xs">
          © 2026 WBC Fan Guide. All rights reserved. E-mail:waeichi@gmail.com
        </div>
      </footer>
    </div>
  );
}
