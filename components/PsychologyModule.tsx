
import React, { useMemo } from 'react';
import { analyzeBehavior, mockTransactions, getControlScore } from '../services/psychologyEngine';
import ControlMeter from './ControlMeter';

const PsychologyModule: React.FC = () => {
  const insights = useMemo(() => analyzeBehavior(mockTransactions), []);
  const controlScore = useMemo(() => getControlScore(insights), [insights]);

  const getDriverColor = (driver: string) => {
    switch (driver) {
      case 'Impulse Buy': return 'bg-rose-500';
      case 'Social Validation': return 'bg-indigo-500';
      case 'Routine Necessity': return 'bg-emerald-500';
      case 'Dopamine Seek': return 'bg-amber-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div id="psychology-section" className="px-6 py-8 scroll-mt-24 transition-all duration-500">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">Spending Psychology</h2>
        <button className="text-[10px] font-bold text-gray-400 flex items-center gap-1 uppercase">
          detailed report 
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>

      {/* Control Meter Section */}
      <div className="bg-white rounded-[2rem] p-8 neumorphic mb-8 text-center relative overflow-hidden group border border-indigo-50/50">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-transparent opacity-50"></div>
        <ControlMeter score={controlScore} />
        <p className="mt-8 text-xs text-gray-500 leading-relaxed max-w-[240px] mx-auto">
          Your spending is <span className="text-emerald-600 font-bold">well-regulated</span>. Routine necessities dominate your budget this month.
        </p>
      </div>

      {/* Behavioral Drivers Grid */}
      <div className="grid grid-cols-2 gap-4">
        {insights.map((insight) => (
          <div key={insight.driver} className="bg-white p-4 rounded-2xl neumorphic border border-gray-50 group hover:scale-[1.02] transition-transform cursor-pointer">
            <div className={`w-1.5 h-6 rounded-full mb-3 ${getDriverColor(insight.driver)}`}></div>
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter leading-none mb-1">
              {insight.driver}
            </h3>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold tracking-tight">₹{insight.totalSpent.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-100 h-1 mt-3 rounded-full overflow-hidden">
               <div 
                className={`h-full transition-all duration-1000 ${getDriverColor(insight.driver)}`} 
                style={{ width: `${insight.score}%` }}
               ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Psychology Tip */}
      <div className="mt-8 bg-black text-white p-6 rounded-[2rem] relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="text-xs uppercase font-bold tracking-[0.2em] mb-2 opacity-60">Psychological Edge</h4>
          <p className="text-lg font-light italic leading-snug">
            "Your 11:00 PM browsing leads to 80% of your Impulse Buys. Try the 24-hour wait rule."
          </p>
          <button className="mt-6 bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
            Enable Smart Block
          </button>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 transform rotate-12">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
        </div>
      </div>
    </div>
  );
};

export default PsychologyModule;
