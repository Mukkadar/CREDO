
import React, { useEffect, useState, useMemo } from 'react';
import { generateBehavioralWealthProfile, mockTransactions, getPositiveInsights } from '../services/psychologyEngine';
import SpendingAnalysis from './SpendingAnalysis';
import EmotionalTriggers from './EmotionalTriggers';
import PredictiveTimeline from './PredictiveTimeline';
import HiddenPatterns from './HiddenPatterns';

interface CredoChatOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const CredoChatOverlay: React.FC<CredoChatOverlayProps> = ({ isOpen, onClose }) => {
  const profile = useMemo(() => generateBehavioralWealthProfile(mockTransactions), []);
  const positiveInsights = useMemo(() => getPositiveInsights(), []);
  
  const [displayText, setDisplayText] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [currentView, setCurrentView] = useState<'menu' | 'insights' | 'analysis' | 'triggers' | 'predictive' | 'hidden'>('menu');

  useEffect(() => {
    if (isOpen) {
      setDisplayText("");
      setShowOptions(false);
      setCurrentView('menu');

      const intro = `Your Behavioral Wealth Profile is ready: You are ${profile.user_archetype}.`;
      
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(intro.slice(0, i + 1));
        i++;
        if (i >= intro.length) {
          clearInterval(interval);
          setTimeout(() => setShowOptions(true), 500);
        }
      }, 25);

      return () => clearInterval(interval);
    }
  }, [isOpen, profile]);

  if (!isOpen) return null;

  const renderMenu = () => (
    <>
      {/* Wisdom Block - Archetype Reveal */}
      <div className="mb-8">
        <div className="bg-[#1a1a1a] border-l-4 border-indigo-500 p-6 rounded-2xl relative overflow-hidden">
          <p className="text-xl font-light italic text-gray-100 leading-relaxed min-h-[3.5rem]">
            {displayText}
            {!showOptions && <span className="animate-pulse inline-block w-1 h-5 ml-1 bg-indigo-500" />}
          </p>
        </div>
      </div>

      {/* Behavioral Insight Highlights */}
      <div className={`space-y-3 mb-10 transition-all duration-700 delay-500 ${showOptions ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
        <div className="flex gap-4 items-center p-4 rounded-2xl bg-white/5 border border-white/5">
          <div className="text-xl">📈</div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Psych Score</p>
            <p className="text-sm font-bold text-white">{profile.psychological_score}</p>
          </div>
        </div>
      </div>

      {/* Action Menu */}
      <div className={`space-y-4 transition-all duration-700 delay-700 ${showOptions ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1 mb-2">Explore Your Mind</h3>
        
        <div className="grid grid-cols-1 gap-3">
          {[
            { label: 'Psychological Insights', icon: '🧠', action: () => setCurrentView('insights') },
            { label: 'Spending Analysis', icon: '📊', action: () => setCurrentView('analysis') },
            { label: 'Emotional Triggers', icon: '🔥', action: () => setCurrentView('triggers') },
            { label: 'Predictive Insights', icon: '🔮', action: () => setCurrentView('predictive') },
            { label: 'Hidden Patterns', icon: '🕸️', action: () => setCurrentView('hidden') }
          ].map((option) => (
            <button 
              key={option.label}
              onClick={option.action}
              className="flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all active:scale-[0.98] group"
            >
              <div className="flex items-center gap-4">
                <span className="text-xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all">{option.icon}</span>
                <span className="text-sm font-bold tracking-tight text-gray-200">{option.label}</span>
              </div>
              <span className="text-gray-600 group-hover:text-indigo-400 transition-colors">›</span>
            </button>
          ))}
        </div>
        
        <button 
          onClick={onClose}
          className="w-full mt-4 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors"
        >
          Dismiss
        </button>
      </div>
    </>
  );

  const renderHeader = (viewLabel: string, subLabel: string) => (
    <div className="flex flex-col mb-8">
      <button 
        onClick={() => setCurrentView('menu')}
        className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 flex items-center gap-2 hover:translate-x-[-4px] transition-transform mb-4"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        Back to Menu
      </button>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 relative flex-shrink-0">
          <img src="https://img.icons8.com/bubbles/100/000000/coins.png" className="w-full h-full object-contain" alt="Credo Avatar" />
        </div>
        <div className="flex-1">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 mb-1">{viewLabel}</h2>
          <p className="text-white font-medium leading-snug">{subLabel}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[200] flex items-end justify-center px-4 sm:px-0">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300" onClick={onClose} />
      
      <div className={`relative w-full max-w-md bg-[#0e0e0e] rounded-t-[3rem] p-8 pb-12 transition-transform duration-500 ease-out transform ${isOpen ? 'translate-y-0' : 'translate-y-full shadow-2xl'} max-h-[90vh] overflow-y-auto no-scrollbar`}>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gray-800 rounded-full" />

        {currentView === 'menu' && (
          <>
            <div className="flex items-start gap-4 mb-8 mt-4">
              <div className="w-12 h-12 relative flex-shrink-0">
                <img src="https://img.icons8.com/bubbles/100/000000/coins.png" className="w-full h-full object-contain" alt="Credo Avatar" />
              </div>
              <div className="flex-1">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 mb-1">Credo</h2>
                <p className="text-white font-medium leading-snug">Hi, I am Credo. I've analyzed your Rituals, Rewards, and Outflows.</p>
              </div>
            </div>
            {renderMenu()}
          </>
        )}

        {currentView === 'insights' && (
          <div className="animate-fade-in pt-4">
            {renderHeader("Insights", "Decoding the positive psychology of your wealth choices.")}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Psychological Strengths</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Reframing your financial patterns through the lens of behavioral economist wisdom.</p>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-8 -mx-8 px-8 no-scrollbar snap-x snap-mandatory">
              {positiveInsights.map((insight, idx) => (
                <div key={idx} className="flex-shrink-0 w-[85%] snap-center bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-between min-h-[320px] relative overflow-hidden group">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl transition-all"></div>
                  <div>
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-6 border border-white/5 shadow-inner">{insight.icon}</div>
                    <h4 className="text-lg font-bold text-white mb-4 tracking-tight">{insight.title}</h4>
                    <p className="text-sm font-light text-gray-300 leading-relaxed italic">"{insight.description}"</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Strength Identified</span>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={onClose} className="w-full mt-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors">Close Chat</button>
          </div>
        )}

        {currentView === 'analysis' && (
          <div className="animate-fade-in pt-4">
            {renderHeader("Analysis", "Objective breakdown of your consumption flows.")}
            <SpendingAnalysis />
            <button onClick={onClose} className="w-full mt-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors">Dismiss</button>
          </div>
        )}

        {currentView === 'triggers' && (
          <div className="animate-fade-in pt-4">
            {renderHeader("Triggers", "Mirroring your emotional state through transactions.")}
            <EmotionalTriggers />
            <button onClick={onClose} className="w-full mt-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors">Dismiss</button>
          </div>
        )}

        {currentView === 'predictive' && (
          <div className="animate-fade-in pt-4">
            {renderHeader("Predictive", "Anticipating your future financial obligations.")}
            <PredictiveTimeline />
            <button onClick={onClose} className="w-full mt-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors">Dismiss</button>
          </div>
        )}

        {currentView === 'hidden' && (
          <div className="animate-fade-in pt-4">
            {renderHeader("Hidden", "Exposing the subconscious mining of your matrix.")}
            <HiddenPatterns />
            <button onClick={onClose} className="w-full mt-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors">Dismiss</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CredoChatOverlay;
