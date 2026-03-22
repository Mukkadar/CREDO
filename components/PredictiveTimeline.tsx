
import React, { useMemo } from 'react';
import { getPredictiveTimelineData } from '../services/psychologyEngine';

const PredictiveTimeline: React.FC = () => {
  const predictions = useMemo(() => getPredictiveTimelineData(), []);

  return (
    <div className="animate-fade-in">
      <div className="mb-10">
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Financial Foresight</h3>
        <p className="text-xs text-gray-400 leading-relaxed">
          We use your current benchmarks to map your Annual Cyclic Costs, preventing 'Year-End Shock'.
        </p>
      </div>

      <div className="relative pl-8 space-y-12">
        {/* Timeline Line (Solid to Dotted transition) */}
        <div className="absolute left-3.5 top-2 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500 via-gray-800 to-transparent"></div>

        {predictions.map((prediction, i) => (
          <div key={i} className="relative">
            {/* Timeline Node with Pulsing Cycle Ring */}
            <div className={`absolute -left-[2.35rem] w-8 h-8 rounded-full border-4 border-[#0e0e0e] flex items-center justify-center z-10 transition-all duration-700`}>
                <div className={`relative w-full h-full rounded-full flex items-center justify-center text-sm ${prediction.horizon === 'long' ? 'bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.5)]' : 'bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]'}`}>
                    {prediction.icon}
                    {prediction.isAnnual && (
                      <div className="absolute inset-0 rounded-full border border-white/40 animate-ping opacity-20"></div>
                    )}
                </div>
            </div>

            {/* Past Reference Dotted Line Visualizer (Conceptual) */}
            <div className="absolute -top-6 left-[-1.5rem] opacity-20 pointer-events-none">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <path d="M10,0 Q10,20 0,40" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3,3" />
                </svg>
            </div>

            <div className="bg-white/5 border border-white/5 p-6 rounded-[2.5rem] hover:bg-white/10 transition-colors group relative overflow-hidden">
              {/* Background Cycle Pattern */}
              <div className="absolute -right-4 -top-4 opacity-5 pointer-events-none">
                 <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4,4" />
                 </svg>
              </div>

              <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                  <span className={`text-[8px] font-black uppercase tracking-[0.3em] px-2 py-1 rounded-full ${prediction.horizon === 'long' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-amber-500/20 text-amber-400'}`}>
                    {prediction.isAnnual ? '2026 Outlook' : 'Next Cycle'}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-2 tracking-tight">{prediction.label}</h4>
                </div>
                <div className="text-right">
                    <p className="text-sm font-bold text-white">₹{prediction.amount.toLocaleString()}</p>
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">{prediction.date}</p>
                </div>
              </div>

              <p className="text-sm font-light text-gray-300 leading-relaxed italic group-hover:text-white transition-colors relative z-10">
                "{prediction.copy}"
              </p>

              <div className="mt-6 flex gap-3 relative z-10">
                <button className="flex-1 py-3 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-white border border-white/5 hover:bg-white/20 transition-all">
                  Past Benchmark
                </button>
                <button className="flex-1 py-3 bg-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest text-white shadow-lg hover:bg-indigo-500 transition-all">
                  Start Goal
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Reassurance for Yearly Cycles */}
      <div className="mt-12 text-center">
        <div className="inline-block p-6 rounded-[2rem] bg-indigo-500/5 border border-indigo-500/10">
            <p className="text-[11px] font-medium text-gray-400 leading-relaxed max-w-[280px]">
                "Cyclical spending isn't a debt; it's a known quantity. By mapping your annual anniversaries, we turn shocks into planned rituals."
            </p>
        </div>
      </div>
    </div>
  );
};

export default PredictiveTimeline;
