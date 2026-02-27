import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Flag, Users, Star, Info, Music, ChevronLeft, Home, ArrowLeft } from 'lucide-react';
import { SECTIONS } from '../data/teams';

export default function TeamDetail() {
  const { teamId } = useParams<{ teamId: string }>();
  const navigate = useNavigate();
  const section = SECTIONS.find(s => s.id === teamId);

  if (!section) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">找不到該隊伍資訊</h2>
        <Link to="/teams" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> 回到球隊總覽
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      {/* Mobile Navigation Bar */}
      <div className="md:hidden sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-200 px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1.5 text-zinc-600 font-bold text-sm">
          <Home className="w-4 h-4" /> 首頁
        </Link>
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-zinc-600 font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> 回到上一頁
        </button>
      </div>

      {/* Hero Header */}
      <div className={`relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden`}>
        <img 
          src={section.flag} 
          alt={section.name}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${section.color} opacity-70`} />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-black uppercase tracking-widest mb-4"
          >
            <Flag className="w-3 h-3" /> Team Profile
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white drop-shadow-2xl"
          >
            {section.name}
          </motion.h1>
        </div>

        {/* Desktop Back Button */}
        <button 
          onClick={() => navigate('/teams')}
          className="hidden md:flex absolute top-8 left-8 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold items-center gap-2 transition-all"
        >
          <ChevronLeft className="w-5 h-5" /> 回到總覽
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-white rounded-[3rem] shadow-2xl border border-zinc-200 overflow-hidden">
          <div className="p-6 md:p-12 space-y-16">
            {/* All Members Section */}
            <section>
              {section.id === 'cheer' && (
                <div className="mb-10 p-8 bg-pink-50 rounded-[2rem] border border-pink-100 flex items-start gap-4">
                  <Info className="text-pink-500 w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-black text-zinc-900 mb-2">2026 CT Amaze 中華隊官方應援啦啦隊</h2>
                    <p className="text-zinc-600 leading-relaxed">
                      2026 WBC 將從 36 名啦啦隊中選出 12 位代表台灣到東京巨蛋應援，敬請期待最終名單！
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Users className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black text-zinc-900">全體成員名單</h2>
              </div>

              {/* Desktop Table */}
              <div className="hidden md:block">
                {section.id === 'cheer' ? (
                  Array.from(new Set(section.players.map(p => p.team))).map(teamName => (
                    <div key={teamName} className="mb-12 last:mb-0">
                      <h3 className="text-lg font-black text-zinc-700 border-l-4 border-pink-500 pl-4 mb-6">{teamName}</h3>
                      <div className="overflow-hidden rounded-3xl border border-zinc-200">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-zinc-50 border-b border-zinc-200">
                              <th className="p-5 font-bold text-zinc-400 text-xs uppercase tracking-wider">熱門</th>
                              <th className="p-5 font-bold text-zinc-400 text-xs uppercase tracking-wider">成員姓名</th>
                              <th className="p-5 font-bold text-zinc-400 text-xs uppercase tracking-wider">特色 / 介紹</th>
                              <th className="p-5 font-bold text-zinc-400 text-xs uppercase tracking-wider">社群 / 備註</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-zinc-100">
                            {section.players.filter(p => p.team === teamName).map((player) => {
                              const popularInfo = section.popularPlayers.find(p => p.name === player.name);
                              return (
                                <tr key={player.id} className="hover:bg-zinc-50 transition-colors">
                                  <td className="p-5">
                                    {popularInfo && (
                                      <a href={`#popular-${popularInfo.id}`} className="text-amber-500 hover:scale-125 transition-transform inline-block">
                                        <Star className="w-5 h-5 fill-amber-500" />
                                      </a>
                                    )}
                                  </td>
                                  <td className="p-5 font-bold text-zinc-900">{player.name}</td>
                                  <td className="p-5 text-zinc-600 text-sm">{player.nickname}</td>
                                  <td className="p-5 text-zinc-400 text-xs font-mono">{player.handedness}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="overflow-hidden rounded-3xl border border-zinc-200">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-zinc-50 border-b border-zinc-200">
                          <th className="p-5 font-bold text-zinc-400 text-xs uppercase tracking-wider">熱門</th>
                          <th className="p-5 font-bold text-zinc-400 text-xs uppercase tracking-wider">球員姓名</th>
                          {section.id !== 'jpn' && <th className="p-5 font-bold text-zinc-400 text-xs uppercase tracking-wider">原文/拼音</th>}
                          <th className="p-5 font-bold text-zinc-400 text-xs uppercase tracking-wider">綽號</th>
                          <th className="p-5 font-bold text-zinc-400 text-xs uppercase tracking-wider">所屬球隊</th>
                          <th className="p-5 font-bold text-zinc-400 text-xs uppercase tracking-wider">位置</th>
                          <th className="p-5 font-bold text-zinc-400 text-xs uppercase tracking-wider">投打</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-100">
                        {section.players.map((player) => {
                          const popularInfo = section.popularPlayers.find(p => p.name === player.name);
                          return (
                            <tr key={player.id} className="hover:bg-zinc-50 transition-colors">
                              <td className="p-5">
                                {popularInfo && (
                                  <a href={`#popular-${popularInfo.id}`} className="text-amber-500 hover:scale-125 transition-transform inline-block">
                                    <Star className="w-5 h-5 fill-amber-500" />
                                  </a>
                                )}
                              </td>
                              <td className="p-5 font-bold text-zinc-900">
                                {player.reading ? (
                                  <ruby className="ruby-position-over">
                                    {player.name}
                                    <rt className="text-[10px] text-zinc-400 font-normal">{player.reading}</rt>
                                  </ruby>
                                ) : player.name}
                              </td>
                              {section.id !== 'jpn' && <td className="p-5 text-zinc-400 text-xs font-mono">{player.originalName || '-'}</td>}
                              <td className="p-5 text-zinc-600 text-sm italic">{player.nickname === '待補充' ? '' : player.nickname}</td>
                              <td className="p-5 text-zinc-600 text-sm">{player.team}</td>
                              <td className="p-5">
                                <span className="px-2 py-1 bg-zinc-100 rounded text-[10px] font-black uppercase text-zinc-600">
                                  {player.position}
                                </span>
                              </td>
                              <td className="p-5 text-zinc-400 text-xs">{player.handedness}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-6">
                {section.id === 'cheer' ? (
                  Array.from(new Set(section.players.map(p => p.team))).map(teamName => (
                    <div key={teamName} className="space-y-4">
                      <h3 className="text-lg font-black text-zinc-700 border-l-4 border-pink-500 pl-3">{teamName}</h3>
                      <div className="grid gap-4">
                        {section.players.filter(p => p.team === teamName).map((player) => {
                          const popularInfo = section.popularPlayers.find(p => p.name === player.name);
                          return (
                            <div key={player.id} className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm">
                              <div className="flex justify-between items-start mb-3">
                                <div>
                                  <h4 className="text-lg font-black text-zinc-900">{player.name}</h4>
                                  <span className="text-[10px] text-zinc-400 font-mono">{player.handedness}</span>
                                </div>
                                {popularInfo && (
                                  <a href={`#popular-${popularInfo.id}`} className="p-2 bg-amber-50 rounded-full text-amber-500">
                                    <Star className="w-5 h-5 fill-amber-500" />
                                  </a>
                                )}
                              </div>
                              <p className="text-zinc-600 text-sm leading-relaxed">{player.nickname}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="grid gap-4">
                    {section.players.map((player) => {
                      const popularInfo = section.popularPlayers.find(p => p.name === player.name);
                      return (
                        <div key={player.id} className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                              <div>
                                <h4 className="text-lg font-black text-zinc-900">
                                  {player.reading ? (
                                    <ruby>{player.name}<rt className="text-[10px] text-zinc-400">{player.reading}</rt></ruby>
                                  ) : player.name}
                                </h4>
                                {section.id !== 'jpn' && player.originalName && (
                                  <span className="text-[10px] text-zinc-400 font-mono block">{player.originalName}</span>
                                )}
                              </div>
                              <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[10px] font-black uppercase">
                                {player.position}
                              </span>
                            </div>
                            {popularInfo && (
                              <a href={`#popular-${popularInfo.id}`} className="p-2 bg-amber-50 rounded-full text-amber-500">
                                <Star className="w-5 h-5 fill-amber-500" />
                              </a>
                            )}
                          </div>
                          
                          {player.nickname !== '待補充' && player.nickname !== '' && (
                            <div className="mb-4">
                              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block mb-1">綽號</span>
                              <p className="text-zinc-700 font-medium text-sm italic">「{player.nickname}」</p>
                            </div>
                          )}

                          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-50">
                            <div>
                              <span className="text-[10px] text-zinc-400 font-bold uppercase block mb-1">球隊 / 體系</span>
                              <p className="text-zinc-600 text-xs font-medium">{player.team}</p>
                            </div>
                            <div>
                              <span className="text-[10px] text-zinc-400 font-bold uppercase block mb-1">投打習慣</span>
                              <p className="text-zinc-600 text-xs font-medium">{player.handedness}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </section>

            {/* Popular Members Section */}
            <section id="popular-section">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Star className="w-6 h-6 fill-white" />
                </div>
                <h2 className="text-2xl font-black text-zinc-900">熱門討論成員看點</h2>
              </div>

              <div className="grid gap-8">
                {section.popularPlayers.map((player) => (
                  <motion.div 
                    key={player.id} 
                    id={`popular-${player.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-zinc-50 rounded-[2.5rem] p-8 md:p-12 border border-zinc-200 hover:border-blue-300 transition-all group scroll-mt-32"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-3xl font-black text-zinc-900">
                            {player.reading ? (
                              <ruby>{player.name}<rt className="text-sm text-zinc-400">{player.reading}</rt></ruby>
                            ) : player.name}
                          </h3>
                          <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-black uppercase">
                            {player.position}
                          </span>
                        </div>
                        
                        <p className="text-zinc-500 font-bold mb-8 flex items-center gap-2">
                          <span className="text-zinc-300">#</span> {player.nickname}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm group-hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-2 text-blue-600 font-black text-sm mb-3">
                              <Info className="w-4 h-4" /> 專業球迷看點
                            </div>
                            <p className="text-zinc-700 leading-relaxed text-sm">
                              {player.achievements}
                            </p>
                          </div>
                          
                          <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100 shadow-sm group-hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-2 text-amber-700 font-black text-sm mb-3">
                              <Music className="w-4 h-4" /> 一日球迷聊天梗
                            </div>
                            <p className="text-zinc-700 leading-relaxed italic text-sm">
                              {player.chatTopic}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
          
          <div className="p-8 bg-zinc-900 text-zinc-500 text-center text-xs font-bold uppercase tracking-widest">
            2026 WBC World Baseball Classic Fan Guide • 棒球經典賽懶人包
          </div>
        </div>
      </div>
    </div>
  );
}
