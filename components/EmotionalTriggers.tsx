
import React, { useMemo } from 'react';
import { getEmotionalTriggerData } from '../services/psychologyEngine';

const EmotionalTriggers: React.FC = () => {
  const triggers = useMemo(() => getEmotionalTriggerData(), []);

  // Calculate scaling for bubbles
  const maxAmount = Math.max(...triggers.map(t => t.totalAmount));
  const minSize = 45;
  const maxSize = 95;

  // Boundary logic: update plotting logic so no icon center-point is closer than 15% to any edge
  // This prevents clipping on the grid lines or container edges.
  const clamp = (value: number) => {
    return Math.max(15, Math.min(85, value));
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-white mb-2">The Mood Map 2.0</h3>
        <p className="text-xs text-gray-400 leading-relaxed">
          Decoding the emotional drivers behind your spending intensity and frequency.
        </p>
      </div>

      {/* Bubble Chart / Heat Map */}
      <div className="relative w-full aspect-square bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-visible mb-12 p-12 shadow-2xl">
        {/* Subtle Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between p-12 opacity-5 pointer-events-none">
          {[...Array(6)].map((_, i) => <div key={i} className="w-full h-[1px] bg-white"></div>)}
        </div>
        <div className="absolute inset-0 flex justify-between p-12 opacity-5 pointer-events-none">
          {[...Array(6)].map((_, i) => <div key={i} className="h-full w-[1px] bg-white"></div>)}
        </div>

        {/* Axes Labels - Significantly offset to ensure no overlap with the grid area */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 whitespace-nowrap">
          Intensity (Spend Per Transaction)
        </div>
        <div className="absolute -left-28 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 whitespace-nowrap">
          Frequency (Volume)
        </div>

        {/* Plotting Bubbles with Boundary Clamping */}
        <div className="relative w-full h-full">
          {triggers.map((trigger, i) => {
            const size = minSize + (trigger.totalAmount / maxAmount) * (maxSize - minSize);
            // Apply 15% Safe Zone Padding to coordinates
            const clampedX = clamp(trigger.intensity);
            const clampedY = clamp(trigger.frequency);

            return (
              <div
                key={i}
                className="absolute transform -translate-x-1/2 translate-y-1/2 flex flex-col items-center group cursor-pointer z-20"
                style={{
                  left: `${clampedX}%`,
                  bottom: `${clampedY}%`,
                }}
              >
                {/* Visual Connector to Axis */}
                <div className="absolute w-[1px] h-32 bg-gradient-to-t from-transparent via-white/10 to-transparent bottom-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                {/* Bubble */}
                <div
                  className="rounded-full flex items-center justify-center shadow-2xl transition-all duration-700 ease-out group-hover:scale-125 group-hover:z-50"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundColor: `${trigger.color}15`,
                    border: `1.5px solid ${trigger.color}40`,
                    boxShadow: `0 0 35px ${trigger.color}15`
                  }}
                >
                  <span className="text-2xl drop-shadow-md select-none">{trigger.icon}</span>
                </div>

                {/* Bubble Label */}
                <div className="mt-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/5 text-[9px] font-black text-white uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  {trigger.label}: ₹{trigger.totalAmount.toLocaleString()}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Analysis Breakdown */}
      <div className="space-y-4 mb-10">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1 mb-2">Trigger Decoders</h3>
        {triggers.map((trigger, i) => (
          <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-3xl transition-all hover:bg-white/10">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl shadow-inner border border-white/5" style={{ color: trigger.color }}>
                    {trigger.icon}
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: trigger.color }}>{trigger.driver}</span>
                  <h4 className="text-lg font-bold text-white tracking-tight">{trigger.label}</h4>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-white">₹{trigger.totalAmount.toLocaleString()}</p>
                <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Total Value</p>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed italic mb-4">
               {trigger.label === "Dopamine" && "High-energy rewards mirroring professional milestones or retail therapy peaks."}
               {trigger.label === "Comfort" && "Routine decompression loops used as a low-cost emotional buffer during high-stress operational cycles."}
               {trigger.label === "Health" && "Strategic physical maintenance. Spending on longevity and bio-security for the future self."}
               {trigger.label === "Wealth" && "Foundational anchors that mitigate future financial risk through consistent asset fortification."}
            </p>

            <div className="flex flex-wrap gap-2">
              {trigger.items.map(item => (
                <span key={item} className="text-[9px] font-medium text-gray-500 border border-white/5 px-3 py-1 rounded-full bg-white/[0.02]">#{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Summary Insight Card */}
      <div className="bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 p-8 rounded-[3rem] relative overflow-hidden group">
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] group-hover:bg-indigo-500/20 transition-all duration-1000"></div>
        <div className="relative z-10">
          <p className="text-base font-light text-gray-200 leading-relaxed">
            "Your spending isn't random; it mirrors your emotional needs. You balance high-intensity <span className="text-white font-bold">'Dopamine Spikes'</span> with two distinct forms of security: <span className="text-white font-bold">Bio-Security</span> (Health) and <span className="text-white font-bold">Financial Fortification</span> (Investments)."
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmotionalTriggers;
