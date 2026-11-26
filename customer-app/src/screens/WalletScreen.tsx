import React, { useState } from 'react';
import {
  ArrowDownLeft,
  ArrowLeft,
  ArrowUpRight,
  Bank,
  CheckCircle,
  CreditCard,
  Gift,
  Money,
  Plus,
  Wallet,
} from '@phosphor-icons/react';
import type { CustomerRouteName } from '../navigation/types';

export interface WalletTransaction {
  id: string;
  title: string;
  subtitle: string;
  amount: number;
  type: 'credit' | 'debit';
  date: string;
}

export const WalletScreen: React.FC<{
  onNavigate: (route: CustomerRouteName) => void;
  walletBalance: number;
  transactions: WalletTransaction[];
  onAddMoney: (amount: number, method: string) => void;
}> = ({ onNavigate, walletBalance, transactions, onAddMoney }) => {
  const [selectedTopUp, setSelectedTopUp] = useState(500);
  const [customAmt, setCustomAmt] = useState('');
  const [selectedMethod, setSelectedMethod] = useState<'UPI' | 'Card' | 'NetBanking' | 'Cash'>('UPI');
  const [toast, setToast] = useState<string | null>(null);

  const handleTopUp = (amt: number) => {
    if (amt <= 0) return;
    onAddMoney(amt, selectedMethod);
    setToast(`₹${amt} added via ${selectedMethod}`);
    setCustomAmt('');
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#F9FAFB]">
      {/* Header matching Bacride Customer App */}
      <div className="bg-gradient-to-b from-[#FBBF24] via-[#FCD34D] to-[#FDE68A] px-4 pt-3 pb-10 rounded-b-3xl shrink-0">
        <div className="flex items-center justify-between">
          <button type="button" onClick={() => onNavigate('Home')} className="p-1 text-gray-900 cursor-pointer" aria-label="Back">
            <ArrowLeft size={18} weight="bold" />
          </button>
          <div className="flex items-center gap-1.5">
            <Wallet size={17} weight="duotone" className="text-gray-900" />
            <span className="font-bold text-base text-gray-900">Bacride Wallet</span>
          </div>
          <span className="w-6" />
        </div>
      </div>

      <div className="flex-1 min-h-0 px-4 pb-6 -mt-7 space-y-3 overflow-y-auto thin-scroll relative z-10">
        {/* Dark Wallet Balance Card */}
        <div className="relative overflow-hidden bg-[#161920] text-white rounded-2xl p-4 shadow-md space-y-3">
          <div
            className="absolute -right-6 -top-6 w-40 h-40 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.24) 0%, rgba(251,191,36,0) 70%)' }}
          />
          <div className="flex items-center justify-between relative z-10">
            <div>
              <div className="text-[11px] text-gray-400">Available Wallet Balance</div>
              <div className="text-2xl font-extrabold tracking-tight mt-0.5">
                ₹ {walletBalance.toLocaleString('en-IN')}.00
              </div>
            </div>
            <div className="w-11 h-11 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Wallet size={24} weight="duotone" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 relative z-10">
            {[200, 500, 1000].map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => setSelectedTopUp(amt)}
                className={`py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                  selectedTopUp === amt && !customAmt
                    ? 'bg-[#FBBF24] border-[#FBBF24] text-[#111318]'
                    : 'bg-white/10 border-white/15 text-white hover:bg-white/15'
                }`}
              >
                + ₹{amt}
              </button>
            ))}
          </div>

          <div className="flex gap-2 relative z-10">
            <div className="flex-1 flex items-center bg-white/10 border border-white/15 rounded-xl px-3">
              <span className="text-xs font-bold text-amber-400 mr-1.5">₹</span>
              <input
                type="number"
                min={10}
                value={customAmt}
                onChange={(e) => setCustomAmt(e.target.value)}
                placeholder={`Custom (default ₹${selectedTopUp})`}
                className="w-full py-2 text-xs text-white placeholder:text-gray-400 bg-transparent focus:outline-none"
              />
            </div>
            <button
              type="button"
              onClick={() => handleTopUp(customAmt ? Number(customAmt) : selectedTopUp)}
              className="px-4 py-2 rounded-xl bg-[#FBBF24] hover:bg-amber-400 text-[#111318] font-bold text-xs flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <Plus size={13} weight="bold" />
              <span>Add Money</span>
            </button>
          </div>
        </div>

        {toast && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-3.5 py-2 rounded-xl flex items-center justify-center gap-1.5">
            <CheckCircle size={15} weight="fill" className="text-emerald-600" />
            <span>{toast}</span>
          </div>
        )}

        {/* Payment Methods */}
        <div className="bg-white rounded-xl border border-gray-200 p-3 space-y-2">
          <div className="text-xs font-extrabold text-gray-900">Payment Methods</div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'UPI' as const, label: 'UPI (GPay / PhonePe)', sub: 'arif@okaxis', icon: Bank },
              { id: 'Card' as const, label: 'Debit / Credit Card', sub: '•••• 4821', icon: CreditCard },
              { id: 'NetBanking' as const, label: 'Net Banking', sub: 'HDFC / SBI / ICICI', icon: Bank },
              { id: 'Cash' as const, label: 'Cash on Ride', sub: 'Pay driver directly', icon: Money },
            ].map((m) => {
              const Icon = m.icon;
              const active = selectedMethod === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSelectedMethod(m.id)}
                  className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex items-start gap-2 ${
                    active ? 'bg-[#FFF8DC] border-[#F59E0B]' : 'bg-gray-50/70 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={16} weight="duotone" className={active ? 'text-amber-700 mt-0.5 shrink-0' : 'text-gray-500 mt-0.5 shrink-0'} />
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-gray-900 truncate">{m.label}</div>
                    <div className="text-[9.5px] text-gray-500 truncate">{m.sub}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Referral & Promo Cashback */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-[#FBBF24] text-[#111318] flex items-center justify-center shrink-0">
              <Gift size={16} weight="duotone" />
            </span>
            <div>
              <div className="text-xs font-bold text-gray-900">Wallet Cashback Active</div>
              <div className="text-[10px] text-gray-600">Earn 5% rewards on rides paid via Bacride Wallet</div>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-white rounded-xl border border-gray-200 p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-gray-900">Transaction History</span>
            <span className="text-[10px] font-semibold text-gray-400">{transactions.length} entries</span>
          </div>
          <div className="divide-y divide-gray-100">
            {transactions.map((tx) => (
              <div key={tx.id} className="py-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      tx.type === 'credit' ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {tx.type === 'credit' ? <ArrowDownLeft size={14} weight="bold" /> : <ArrowUpRight size={14} weight="bold" />}
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-gray-900 truncate">{tx.title}</div>
                    <div className="text-[10px] text-gray-500 truncate">{tx.subtitle} • {tx.date}</div>
                  </div>
                </div>
                <span className={`text-xs font-extrabold whitespace-nowrap ${tx.type === 'credit' ? 'text-emerald-600' : 'text-gray-900'}`}>
                  {tx.type === 'credit' ? '+' : '-'} ₹{tx.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
