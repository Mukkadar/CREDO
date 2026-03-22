
import React, { useMemo } from 'react';

interface ControlMeterProps {
  score: number;
}

const ControlMeter: React.FC<ControlMeterProps> = ({ score }) => {
  const rotation = useMemo(() => {
    // -90deg is 0, 90deg is 100
    return (score / 100) * 180 - 90;
  }, [score]);

  const getColor = (s: number) => {
    if (s > 75) return '#10b981'; // green
    if (s > 40) return '#f59e0b'; // amber
    return '#ef4444'; // red
  };

  return (
    <div className="relative w-full aspect-[2/1] flex items-end justify-center overflow-hidden">
      {/* Background Arc */}
      <div className="absolute w-[200%] h-[200%] border-[20px] border-gray-100 rounded-full top-0"></div>
      
      {/* Colored Arc (SVG) */}
      <svg className="absolute w-[200%] h-[200%] top-0 rotate-[180deg]" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          stroke={getColor(score)}
          strokeWidth="6"
          strokeDasharray="125.6"
          strokeDashoffset={125.6 - (score / 100) * 125.6}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>

      {/* Needle */}
      <div 
        className="absolute bottom-0 w-1 h-32 bg-black origin-bottom transition-transform duration-1000 ease-out rounded-full"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-white"></div>
      </div>

      <div className="absolute bottom-2 text-center">
        <span className="text-4xl font-bold block">{Math.round(score)}</span>
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Spending Control</span>
      </div>
    </div>
  );
};

export default ControlMeter;
