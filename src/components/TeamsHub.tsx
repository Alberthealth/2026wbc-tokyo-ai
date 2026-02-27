import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Users, Star } from 'lucide-react';
import { SECTIONS } from '../data/teams';

export default function TeamsHub() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-black text-zinc-900 mb-4 flex items-center justify-center gap-3">
          <Users className="text-blue-600 w-10 h-10" />
          球隊與啦啦隊
        </h2>
        <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-medium">
          探索 2026 WBC 參賽強權與最熱血的台灣應援啦啦隊成員資訊。
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SECTIONS.map((section, idx) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative h-[300px] rounded-[2.5rem] overflow-hidden shadow-xl border border-zinc-200"
          >
            <Link to={`/teams/${section.id}`} className="block w-full h-full">
              <img 
                src={section.flag} 
                alt={section.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${section.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="text-white/80 text-xs font-black uppercase tracking-widest">Team Profile</span>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 group-hover:translate-x-2 transition-transform">
                  {section.name}
                </h3>
                <div className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                  查看成員詳細資訊 <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
