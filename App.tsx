
import React, { useState } from 'react';
import { Header, BottomNav } from './components/Layout';
import PsychologyModule from './components/PsychologyModule';
import CredoChatOverlay from './components/CredoChatOverlay';
import TransactionHistory from './components/TransactionHistory';

const App: React.FC = () => {
  const [isCredoOpen, setIsCredoOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  return (
    <div className="min-h-screen pb-24 max-w-md mx-auto bg-[#f8f9fa] shadow-2xl relative overflow-x-hidden">
      <Header />
      
      {/* Main Content Area */}
      <main>
        {/* Banner Section */}
        <div className="px-6 py-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Unlocked for you</p>
          <div className="relative h-48 w-full bg-gradient-to-br from-indigo-900 to-blue-700 rounded-[2.5rem] p-6 text-white overflow-hidden neumorphic">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mb-1">HDFC IOCL CREDIT CARD</p>
                <h3 className="text-xl font-bold leading-tight max-w-[160px]">apply now and claim ₹500 cashback</h3>
              </div>
              <button className="w-fit bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
                Apply now
              </button>
            </div>
            <img 
              src="https://picsum.photos/300/200?random=2" 
              className="absolute -right-12 bottom-0 w-52 h-32 object-contain rotate-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500" 
              alt="Card Preview" 
            />
          </div>
        </div>

        {/* Action Pills */}
        <div className="px-6 flex gap-4 my-6 overflow-x-auto pb-4 no-scrollbar">
          <button className="flex-1 whitespace-nowrap bg-white py-3 px-6 rounded-full neumorphic flex items-center justify-center gap-3 border border-gray-50 group hover:bg-gray-50 transition-colors">
            <span className="text-xl">💳</span>
            <span className="text-xs font-bold tracking-tighter text-[#000000]">access instant credit</span>
            <span className="text-gray-300">›</span>
          </button>
          <button className="flex-1 whitespace-nowrap bg-white py-3 px-6 rounded-full neumorphic flex items-center justify-center gap-3 border border-gray-50 group hover:bg-gray-50 transition-colors">
            <span className="text-xl">👛</span>
            <span className="text-xs font-bold tracking-tighter text-[#000000]">CRED wallet</span>
          </button>
        </div>

        {/* Upcoming Bills */}
        <div className="px-6 py-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">Upcoming Bills (3)</h2>
            <button className="text-[10px] font-bold text-gray-400 hover:text-black transition-colors">view all ›</button>
          </div>
          
          <div className="space-y-4">
            {[
                { name: 'SBI', type: 'VISA XXXX 4021', amount: '₹14,200', date: '30 JAN', overdue: false },
                { name: 'Car Insurance', type: 'HDFC ERGO', amount: 'View plans', date: 'OVERDUE', overdue: true }
            ].map((bill, i) => (
                <div key={i} className="bg-white p-5 rounded-[2rem] neumorphic flex justify-between items-center border border-gray-50 animate-fade-in transition-transform hover:scale-[1.01] cursor-pointer">
                    <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center shadow-inner">
                            {bill.name === 'SBI' ? '🏦' : '🚗'}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-900">{bill.name}</p>
                            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tight">{bill.type}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <button className="bg-black text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest mb-1 shadow-lg hover:shadow-xl transition-shadow">
                            {bill.name === 'SBI' ? 'Pay' : 'View'}
                        </button>
                        <p className={`text-[8px] font-bold uppercase tracking-widest ${bill.overdue ? 'text-rose-500' : 'text-gray-300'}`}>
                            {bill.overdue ? 'OVERDUE' : `DUE ON ${bill.date}`}
                        </p>
                    </div>
                </div>
            ))}
          </div>
        </div>

        {/* Feature: Psychology Module */}
        <PsychologyModule />

        {/* Quick Actions Circle Grid */}
        <div className="px-6 py-8">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">For You</h2>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {[
                    { label: 'pay contacts', icon: '👤' },
                    { label: 'bills & recharge', icon: '🧾' },
                    { label: 'education fees', icon: '🎓' },
                    { label: 'rewards', icon: '🎁' }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                        <div className="w-16 h-16 rounded-full bg-white neumorphic flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                            {item.icon}
                        </div>
                        <span className="text-[10px] font-bold text-gray-500 uppercase text-center leading-none tracking-tighter">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>

        {/* Quick Access List */}
        <div className="px-6 py-8 pb-20">
             <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Quick Access</h2>
             <div className="space-y-2">
                {[
                    { label: 'transaction history', icon: '📄', action: () => setIsHistoryOpen(true) },
                    { label: 'contact support', icon: '💬' },
                    { label: 'refer and earn', icon: '🎁' }
                ].map((item, i) => (
                    <div 
                      key={i} 
                      onClick={item.action}
                      className="flex justify-between items-center p-4 bg-white rounded-2xl border border-gray-50 neumorphic-inset group cursor-pointer transition-all hover:pl-6"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-lg opacity-50">{item.icon}</span>
                            <span className="text-xs font-bold text-gray-600 uppercase tracking-tight">{item.label}</span>
                        </div>
                        <span className="text-gray-300 group-hover:translate-x-1 transition-transform">›</span>
                    </div>
                ))}
             </div>
        </div>
      </main>

      <BottomNav onCredoClick={() => setIsCredoOpen(true)} />

      {/* Overlays */}
      <CredoChatOverlay isOpen={isCredoOpen} onClose={() => setIsCredoOpen(false)} />
      <TransactionHistory isOpen={isHistoryOpen} onClose={() => setIsHistoryOpen(false)} />
    </div>
  );
};

export default App;
