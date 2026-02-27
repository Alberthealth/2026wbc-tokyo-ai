import React from 'react';
import { Users, Star, Info, Music } from 'lucide-react';
import { TeamSection } from '../types';

interface TeamSectionViewProps {
  section: TeamSection;
}

const TeamSectionView: React.FC<TeamSectionViewProps> = ({ section }) => {
  return (
    <div className="space-y-12">
      {/* All Players Table */}
      <section>
        {section.id === 'cheer' && (
          <div className="mb-8 p-6 bg-pink-50 rounded-2xl border border-pink-100">
            <h1 className="text-[16px] font-bold text-zinc-900 mb-2">2026 CT Amaze中華隊官方應援啦啦隊</h1>
            <p className="text-[13px] text-zinc-600">2026 WBC將從36名啦啦隊中選出12位代表台灣到東京巨蛋應援，敬請期待</p>
          </div>
        )}
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-blue-600" />
          <h4 className="text-xl font-bold text-zinc-800">全體成員</h4>
        </div>
        {/* Desktop Table View */}
        <div className="hidden md:block space-y-12">
          {section.id === 'cheer' ? (
            // Group by team for cheerleaders
            Array.from(new Set(section.players.map(p => p.team))).map(teamName => (
              <div key={teamName} className="space-y-4">
                <h5 className="text-lg font-bold text-zinc-700 border-l-4 border-pink-500 pl-3">{teamName}</h5>
                <div className="overflow-x-auto rounded-xl border border-zinc-300">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-zinc-50 border-b border-zinc-200">
                        <th className="p-4 font-bold text-zinc-600">熱門</th>
                        <th className="p-4 font-bold text-zinc-600">成員姓名</th>
                        <th className="p-4 font-bold text-zinc-600">特色 / 介紹</th>
                        <th className="p-4 font-bold text-zinc-600">社群 / 備註</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.players.filter(p => p.team === teamName).map((player) => {
                        const popularInfo = section.popularPlayers.find(p => p.name === player.name);
                        return (
                          <tr key={player.id} className="border-b border-zinc-100 hover:bg-zinc-100 transition-colors">
                            <td className="p-4">
                              {popularInfo && (
                                <a href={`#popular-${popularInfo.id}`} className="text-amber-500 hover:scale-125 transition-transform inline-block">
                                  <Star className="w-5 h-5 fill-amber-500" />
                                </a>
                              )}
                            </td>
                            <td className="p-4 font-medium text-zinc-900">{player.name}</td>
                            <td className="p-4 text-zinc-600 text-sm">{player.nickname}</td>
                            <td className="p-4 text-zinc-500 text-xs font-mono">{player.handedness}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ))
          ) : (
            // Standard player table
            <div className="overflow-x-auto rounded-xl border border-zinc-300">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-200">
                    <th className="p-4 font-bold text-zinc-600">熱門</th>
                    <th className="p-4 font-bold text-zinc-600">球員姓名</th>
                    {section.id !== 'jpn' && (
                      <th className="p-4 font-bold text-zinc-600">原文/拼音</th>
                    )}
                    <th className="p-4 font-bold text-zinc-600">綽號</th>
                    <th className="p-4 font-bold text-zinc-600">所屬球隊 / 體系</th>
                    <th className="p-4 font-bold text-zinc-600">守備位置</th>
                    <th className="p-4 font-bold text-zinc-600">投打習慣</th>
                  </tr>
                </thead>
                <tbody>
                  {section.players.length > 0 ? (
                    [...section.players]
                      .sort((a, b) => {
                        const aHasNick = a.nickname !== '待補充' && a.nickname !== '';
                        const bHasNick = b.nickname !== '待補充' && b.nickname !== '';
                        if (aHasNick && !bHasNick) return -1;
                        if (!aHasNick && bHasNick) return 1;
                        return 0;
                      })
                      .map((player) => {
                        const popularInfo = section.popularPlayers.find(p => p.name === player.name);
                        return (
                          <tr key={player.id} className="border-b border-zinc-100 hover:bg-zinc-100 transition-colors">
                            <td className="p-4">
                              {popularInfo && (
                                <a href={`#popular-${popularInfo.id}`} className="text-amber-500 hover:scale-125 transition-transform inline-block">
                                  <Star className="w-5 h-5 fill-amber-500" />
                                </a>
                              )}
                            </td>
                            <td className="p-4 font-medium text-zinc-900">
                              {player.reading ? (
                                <ruby className="ruby-position-over">
                                  {player.name}
                                  <rt className="text-[10px] text-zinc-400 font-normal">{player.reading}</rt>
                                </ruby>
                              ) : (
                                player.name
                              )}
                            </td>
                            {section.id !== 'jpn' && (
                              <td className="p-4 text-zinc-500 text-xs font-mono">{player.originalName || '-'}</td>
                            )}
                            <td className="p-4 text-zinc-600 italic">
                              {player.nickname === '待補充' ? '' : player.nickname}
                            </td>
                            <td className="p-4 text-zinc-600">{player.team}</td>
                            <td className="p-4 text-zinc-600">
                              <span className="px-2 py-1 bg-zinc-100 rounded text-xs font-bold">
                                {player.position}
                              </span>
                            </td>
                            <td className="p-4 text-zinc-500 text-sm">{player.handedness}</td>
                          </tr>
                        );
                      })
                  ) : (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-zinc-400 italic">暫無此隊伍的球員資料，敬請期待。</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-8">
          {section.id === 'cheer' ? (
            // Group by team for cheerleaders (Mobile)
            Array.from(new Set(section.players.map(p => p.team))).map(teamName => (
              <div key={teamName} className="space-y-4">
                <h5 className="text-lg font-bold text-zinc-700 border-l-4 border-pink-500 pl-3">{teamName}</h5>
                <div className="space-y-4">
                  {section.players.filter(p => p.team === teamName).map((player) => {
                    const popularInfo = section.popularPlayers.find(p => p.name === player.name);
                    return (
                      <div key={player.id} className="bg-white rounded-2xl border border-zinc-200 p-4 shadow-sm active:scale-[0.98] transition-transform">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex flex-col">
                            <span className="text-lg font-black text-zinc-900">{player.name}</span>
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
            // Standard player cards (Mobile)
            <div className="space-y-4">
              {section.players.length > 0 ? (
                [...section.players]
                  .sort((a, b) => {
                    const aHasNick = a.nickname !== '待補充' && a.nickname !== '';
                    const bHasNick = b.nickname !== '待補充' && b.nickname !== '';
                    if (aHasNick && !bHasNick) return -1;
                    if (!aHasNick && bHasNick) return 1;
                    return 0;
                  })
                  .map((player) => {
                    const popularInfo = section.popularPlayers.find(p => p.name === player.name);
                    return (
                      <div key={player.id} className="bg-white rounded-2xl border border-zinc-200 p-4 shadow-sm active:scale-[0.98] transition-transform">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                              <span className="text-lg font-black text-zinc-900">
                                {player.reading ? (
                                  <ruby>
                                    {player.name}
                                    <rt className="text-[10px] text-zinc-400 font-normal">{player.reading}</rt>
                                  </ruby>
                                ) : (
                                  player.name
                                )}
                              </span>
                              {section.id !== 'jpn' && player.originalName && (
                                <span className="text-[10px] text-zinc-400 font-mono">{player.originalName}</span>
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
                          <div className="mb-3">
                            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block mb-0.5">綽號</span>
                            <span className="text-zinc-700 font-medium text-sm italic">「{player.nickname}」</span>
                          </div>
                        )}

                        <div className="grid grid-cols-2 gap-4 pt-3 border-t border-zinc-50">
                          <div>
                            <span className="text-[10px] text-zinc-400 font-bold uppercase block mb-0.5">球隊 / 體系</span>
                            <span className="text-zinc-600 text-xs font-medium">{player.team}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-zinc-400 font-bold uppercase block mb-0.5">投打習慣</span>
                            <span className="text-zinc-600 text-xs font-medium">{player.handedness}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })
              ) : (
                <div className="p-12 text-center text-zinc-400 italic bg-zinc-50 rounded-2xl border border-dashed border-zinc-300">
                  暫無此隊伍的球員資料，敬請期待。
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Popular Players Features */}
      <section id="popular-section">
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
          <h4 className="text-xl font-bold text-zinc-800">熱門討論成員看點</h4>
        </div>
        <div className="grid gap-6">
          {section.popularPlayers.length > 0 ? (
            section.popularPlayers.map((player) => (
              <div 
                key={player.id} 
                id={`popular-${player.id}`}
                className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200 hover:border-blue-300 transition-all group scroll-mt-24"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex flex-col">
                        <span className="text-2xl font-black text-zinc-900">
                          {player.reading ? (
                            <ruby>
                              {player.name}
                              <rt className="text-xs text-zinc-400 font-normal">{player.reading}</rt>
                            </ruby>
                          ) : (
                            player.name
                          )}
                        </span>
                        {section.id !== 'jpn' && player.originalName && (
                          <span className="text-xs text-zinc-400 font-mono">{player.originalName}</span>
                        )}
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                        {player.position}
                      </span>
                    </div>
                    <p className="text-zinc-500 text-sm mb-4 font-medium">
                      綽號：{player.nickname}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-xl border border-zinc-100 shadow-sm">
                        <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-1">
                          <Info className="w-4 h-4" /> ⚾ 專業球迷看點
                        </div>
                        <p className="text-zinc-700 leading-relaxed">
                          {player.achievements}
                        </p>
                      </div>
                      
                      <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 shadow-sm">
                        <div className="flex items-center gap-2 text-amber-700 font-bold text-sm mb-1">
                          <Music className="w-4 h-4" /> 🍻 一日球迷聊天梗
                        </div>
                        <p className="text-zinc-700 leading-relaxed italic">
                          {player.chatTopic}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-zinc-400 italic">資料建置中...</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TeamSectionView;
