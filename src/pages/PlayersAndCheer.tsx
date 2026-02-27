import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Flag, ChevronRight } from 'lucide-react';
import { SECTIONS } from '../data/teams';
import TeamSectionView from '../components/TeamSectionView';

const PlayersAndCheer: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      {/* Hero Section */}
      <section className="bg-zinc-900 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            球員與啦啦隊
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            2026 WBC 參賽隊伍成員名單、熱門球員看點，以及台灣最強應援啦啦隊陣容。
          </motion.p>
        </div>
      </section>

      {/* Quick Navigation Tabs */}
      <div className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-md border-b border-zinc-200 py-4 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex justify-center gap-2 md:gap-4 min-w-max">
          {SECTIONS.map((section) => (
            <a 
              key={section.id}
              href={`#${section.id}`}
              className="px-4 py-2 rounded-full text-sm font-bold bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 transition-all whitespace-nowrap flex items-center gap-2"
            >
              <Flag className="w-4 h-4" /> {section.name.split(' ')[0]}
            </a>
          ))}
        </div>
      </div>

      {/* Sections Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-12 space-y-32">
        {SECTIONS.map((section) => (
          <motion.section 
            key={section.id} 
            id={section.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="scroll-mt-32"
          >
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-2 h-12 bg-gradient-to-b ${section.color} rounded-full`} />
                <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight">
                  {section.name}
                </h2>
              </div>
              
              <div className="relative h-48 md:h-64 rounded-3xl overflow-hidden mb-12 shadow-xl">
                <img 
                  src={section.flag} 
                  alt={section.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-40`} />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <TeamSectionView section={section} />
            </div>
            
            {/* Divider */}
            <div className="h-px bg-zinc-200 w-full mt-20" />
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default PlayersAndCheer;
