
import React, { useMemo } from 'react';
import { mockTransactions } from '../services/psychologyEngine';

interface TransactionHistoryProps {
  isOpen: boolean;
  onClose: () => void;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ isOpen, onClose }) => {
  const sortedTransactions = useMemo(() => {
    return [...mockTransactions].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      // Most recent first
      return dateB - dateA || parseInt(b.id) - parseInt(a.id);
    });
  }, []);

  const getSmartIcon = (merchant: string) => {
    const desc = merchant.toLowerCase();
    if (desc.includes('milk')) return '🥛';
    if (desc.includes('vegetables') || desc.includes('cucumber')) return '🥦';
    if (desc.includes('shoes') || desc.includes('clothing') || desc.includes('fashion')) return '👕';
    if (desc.includes('mobile') || desc.includes('croma')) return '📱';
    if (desc.includes('food') || desc.includes('pizza') || desc.includes('sweets')) return '🍕';
    if (desc.includes('electricity') || desc.includes('water') || desc.includes('bill')) return '🧾';
    if (desc.includes('flight') || desc.includes('india')) return '✈️';
    if (desc.includes('stationary')) return '✏️';
    if (desc.includes('medicine') || desc.includes('apollo')) return '💊';
    if (desc.includes('instamart') || desc.includes('bigbasket')) return '🛒';
    if (desc.includes('gym') || desc.includes('protein')) return '💪';
    if (desc.includes('salary')) return '💰';
    if (desc.includes('petrol')) return '⛽';
    if (desc.includes('insurance')) return '🛡️';
    if (desc.includes('sip') || desc.includes('mutual')) return '📈';
    if (desc.includes('rent')) return '🏠';
    return '💳';
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    return `${day} ${months[date.getMonth()]}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] bg-[#0e0e0e] flex flex-col">
      {/* Header */}
      <div className="p-6 pt-12 flex justify-between items-center border-b border-white/5">
        <div>
          <h2 className="text-xl font-black text-white tracking-tight">Transaction History</h2>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">October 2025 Statement</p>
        </div>
        <button 
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white"
        >
          ✕
        </button>
      </div>

      {/* List Container */}
      <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-3">
        {sortedTransactions.map((tx) => (
          <div 
            key={tx.id} 
            className="group relative bg-[#121212] p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-all active:scale-[0.98] shadow-lg"
          >
            {/* Neumorphic Inset Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
            
            <div className="relative z-10 flex justify-between items-center">
              <div className="flex gap-4 items-center">
                {/* Dynamic Icon */}
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-2xl shadow-inner border border-white/5">
                  {getSmartIcon(tx.merchant)}
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight truncate max-w-[140px]">
                    {tx.merchant}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-bold text-gray-500">{formatDate(tx.date)}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                    <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-sm tracking-tighter ${tx.channel === 'UPI' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-amber-500/10 text-amber-400'}`}>
                      {tx.channel}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <p className={`text-sm font-black ${tx.type === 'credit' ? 'text-emerald-400' : 'text-white'}`}>
                  {tx.type === 'credit' ? '+' : ''}₹{tx.amount.toLocaleString()}
                </p>
                <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest mt-0.5">
                  {tx.type === 'credit' ? 'Settled' : 'Debited'}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="py-12 text-center">
          <p className="text-[10px] font-black text-gray-700 uppercase tracking-[0.4em]">End of statement</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
