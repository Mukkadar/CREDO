
import React, { useMemo } from 'react';
import { getSpendingAnalysisData } from '../services/psychologyEngine';

const SpendingAnalysis: React.FC = () => {
  const { categories, totalAnalyzed } = useMemo(() => getSpendingAnalysisData(), []);

  // Calculate SVG paths for donut chart
  const donutSize = 200;
  const strokeWidth = 24;
  const radius = (donutSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let cumulativePercent = 0;

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-white mb-2">Spending Consumption</h3>
        <p className="text-xs text-gray-400 leading-relaxed">
          Excluding debt payments and income to reveal true consumption patterns.
        </p>
      </div>

      {/* Donut Chart */}
      <div className="relative flex justify-center items-center py-10">
        <svg width={donutSize} height={donutSize} viewBox={`0 0 ${donutSize} ${donutSize}`} className="transform -rotate-90">
          {categories.map((cat, i) => {
            const percentage = (cat.value / totalAnalyzed) * 100;
            const dashArray = (percentage * circumference) / 100;
            const dashOffset = (cumulativePercent * circumference) / 100;
            cumulativePercent += percentage;

            return (
              <circle
                key={i}
                cx={donutSize / 2}
                cy={donutSize / 2}
                r={radius}
                fill="transparent"
                stroke={cat.color}
                strokeWidth={strokeWidth}
                strokeDasharray={`${dashArray} ${circumference}`}
                strokeDashoffset={-dashOffset}
                className="transition-all duration-1000 ease-out"
                strokeLinecap="butt"
              />
            );
          })}
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">Total Analyzed</span>
          <span className="text-2xl font-bold text-white">₹{(totalAnalyzed / 100000).toFixed(2)}L</span>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        {categories.map((cat, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-200">{cat.label}</span>
              <span className="text-[9px] text-gray-500">{((cat.value / totalAnalyzed) * 100).toFixed(0)}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Psychologically Neutral Insights */}
      <div className="space-y-4">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1 mb-4">Observation Notes</h3>
        
        <div className="bg-white/5 border border-white/5 p-5 rounded-2xl flex gap-4">
            <div className="text-xl">📊</div>
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-1">Volume vs. Value</p>
                <p className="text-[11px] leading-relaxed text-gray-400">
                    Daily Sustenance accounts for 65% of your transaction volume (frequency) but only 4% of your total spending value.
                </p>
            </div>
        </div>

        <div className="bg-white/5 border border-white/5 p-5 rounded-2xl flex gap-4">
            <div className="text-xl">🎯</div>
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-1">The Outlier Effect</p>
                <p className="text-[11px] leading-relaxed text-gray-400">
                    Lifestyle spending is the dominant category this month (48%), driven primarily by a single high-value transaction (Electronics).
                </p>
            </div>
        </div>

        <div className="bg-white/5 border border-white/5 p-5 rounded-2xl flex gap-4">
            <div className="text-xl">⛓️</div>
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-1">Fixed vs. Variable</p>
                <p className="text-[11px] leading-relaxed text-gray-400">
                    Fixed Obligations and Utilities comprise 22% of outflow, indicating a consistent baseline for essential living costs.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SpendingAnalysis;
