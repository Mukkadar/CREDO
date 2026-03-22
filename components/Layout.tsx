
import React from 'react';

export const Header: React.FC = () => (
  <header className="px-6 py-4 flex justify-between items-center bg-[#f8f9fa] sticky top-0 z-50">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-md">
        <img src="https://picsum.photos/100/100?random=1" alt="Profile" />
      </div>
      <div>
        <p className="text-xs text-gray-400 font-medium">hello,</p>
        <p className="text-sm font-bold tracking-tight text-[#000000]">Abhishek <span className="text-xs">👋</span></p>
      </div>
    </div>
    <button className="relative p-2 rounded-full bg-white neumorphic">
      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
      </svg>
      <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
    </button>
  </header>
);

interface BottomNavProps {
  onCredoClick?: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ onCredoClick }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-black text-white px-6 flex justify-between items-center z-[100] max-w-md mx-auto">
      <NavItem icon="🏠" label="HOME" active />
      <NavItem icon="💳" label="CARDS" />
      <div className="relative -top-6">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl ring-8 ring-black">
          <div className="text-black font-black text-xs italic tracking-tighter">UPI</div>
        </div>
      </div>
      <NavItem icon="⭐" label="REWARDS" />
      
      {/* More Tab with Floating Credo Button */}
      <div className="relative flex flex-col items-center">
        {/* Credo Floating 3D Icon - Scaled to 72px to match 'Pay Contacts' visual weight */}
        <button 
          onClick={onCredoClick}
          className="absolute bottom-[88px] z-[999] w-[72px] h-[72px] credo-float flex items-center justify-center"
          aria-label="Spending Psychology"
        >
          {/* Using a high-fidelity 3D-styled icon mimicking the provided 'CREDO' coin asset */}
          <div className="relative w-full h-full">
            <img 
              src="https://img.icons8.com/bubbles/200/000000/coins.png" 
              className="w-full h-full object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.6)]" 
              alt="Credo Coin" 
            />
            {/* Overlay badge to mimic the 'CREDO' text and rainbow ring style */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-black text-white bg-blue-500/90 px-2 py-0.5 rounded-sm mt-2 uppercase tracking-tighter ring-1 ring-yellow-400 shadow-lg">CREDO</span>
            </div>
          </div>
        </button>
        <NavItem icon="⠿" label="MORE" />
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ icon: string; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <button className={`flex flex-col items-center gap-1 ${active ? 'opacity-100' : 'opacity-40 hover:opacity-100 transition-opacity'}`}>
    <span className="text-xl">{icon}</span>
    <span className="text-[8px] font-bold tracking-widest">{label}</span>
  </button>
);
