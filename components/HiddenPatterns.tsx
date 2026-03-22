
import React, { useMemo } from 'react';
import { getHiddenPatternsData } from '../services/psychologyEngine';

const HiddenPatterns: React.FC = () => {
  const patterns = useMemo(() => getHiddenPatternsData(), []);

  return (
    <div className="animate-fade-in pb-12">
      <div className="mb-10">
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">The Subconscious Matrix</h3>
        <p className="text-xs text-gray-400 leading-relaxed">
          Unearthing behaviors that exist beneath your conscious awareness.
        </p>
      </div>

      {/* Diderot Spiral Constellation View */}
      <div className="relative h-64 bg-white/5 border border-white/5 rounded-[2.5rem] mb-12 overflow-hidden flex items-center justify-center p-8">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100">
             <path d="M20,20 Q50,80 80,20" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
             <path d="M10,50 Q50,50 90,50" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" />
          </svg>
        </div>

        {/* Center Node (Diderot Trigger) */}
        <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-pink-500/10 border border-pink-500/40 flex items-center justify-center text-3xl shadow-[0_0_40px_rgba(244,114,182,0.2)] animate-pulse">
                🌀
            </div>
            <span className="mt-2 text-[8px] font-black uppercase tracking-[0.4em] text-pink-400">Spiral Core</span>
        </div>

        {/* Connected Nodes */}
        {[
            { label: 'Croma Mobile', pos: 'top-10 left-10', icon: '📱' },
            { label: 'Asics Shoes', pos: 'bottom-12 right-12', icon: '👟' },
            { label: 'Puma Outfit', pos: 'top-12 right-12', icon: '👕' },
            { label: 'USPA Style', pos: 'bottom-10 left-12', icon: '👔' }
        ].map((node, i) => (
            <div key={node.label} className={`absolute ${node.pos} flex flex-col items-center animate-fade-in`} style={{ animationDelay: `${i * 200}ms` }}>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sm">
                    {node.icon}
                </div>
                <span className="mt-1 text-[7px] font-bold text-gray-500 uppercase tracking-tighter whitespace-nowrap">{node.label}</span>
            </div>
        ))}

        {/* Connection Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <line x1="50%" y1="50%" x2="15%" y2="15%" stroke="#f472b6" strokeWidth="0.5" strokeOpacity="0.3" />
            <line x1="50%" y1="50%" x2="85%" y2="85%" stroke="#f472b6" strokeWidth="0.5" strokeOpacity="0.3" />
            <line x1="50%" y1="50%" x2="85%" y2="15%" stroke="#f472b6" strokeWidth="0.5" strokeOpacity="0.3" />
            <line x1="50%" y1="50%" x2="15%" y2="85%" stroke="#f472b6" strokeWidth="0.5" strokeOpacity="0.3" />
        </svg>

        {/* Refined Typography Label for DIDEROT CHAIN REACTION */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-500 px-5 py-2 rounded-full bg-white/5 border border-white/5 backdrop-blur-md whitespace-nowrap block text-center">
              DIDEROT CHAIN REACTION
            </span>
        </div>
      </div>

      {/* Pattern Cards List */}
      <div className="space-y-6 mb-12">
        {patterns.map((pattern, i) => (
          <div key={pattern.id} className="relative group">
            <div className="bg-[#121212] border border-white/5 rounded-[2.5rem] p-8 transition-all hover:bg-white/5 group-hover:border-white/10">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-4 items-center">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-2xl shadow-inner border border-white/5">
                            {pattern.icon}
                        </div>
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: pattern.color }}>{pattern.tag}</span>
                            <h4 className="text-xl font-bold text-white tracking-tight mt-1">{pattern.title}</h4>
                        </div>
                    </div>
                </div>

                <p className="text-sm font-light text-gray-400 leading-relaxed italic mb-8">
                    "{pattern.insight}"
                </p>

                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                    {pattern.metrics.map(m => (
                        <div key={m.label}>
                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-600 mb-1">{m.label}</p>
                            <p className="text-sm font-bold text-gray-200">{m.value}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Concluding Verdict Card */}
      <div className="bg-gradient-to-br from-indigo-900/40 via-indigo-950/20 to-black border border-indigo-500/30 p-8 rounded-[3rem] relative overflow-hidden shadow-2xl">
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-[80px]"></div>
        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-black">!</div>
                <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">The Behavioral Verdict</h5>
            </div>
            <p className="text-base font-light text-gray-200 leading-relaxed">
                "Your spending reveals a split personality: The <span className="text-indigo-400 font-bold">Disciplined Ritualist</span> (Morning Milk runs) vs. The <span className="text-indigo-400 font-bold">Impulsive Upgrader</span> (Gadget & Fashion week). Awareness of this 'Switch' is your first step to mastery."
            </p>
        </div>
      </div>
    </div>
  );
};

export default HiddenPatterns;
