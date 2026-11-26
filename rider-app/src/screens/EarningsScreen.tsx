import React, { useState } from 'react';
import { ArrowLeft, CaretRight, Clock, Gear, Headset, Star, Wallet, X } from '@phosphor-icons/react';
import { RiderBottomNav } from '../components/BottomNav';
import { EARNINGS_PERIODS } from '../data/mockData';
import type { RiderRouteName } from '../navigation/types';

export const EarningsScreen: React.FC<{
  onNavigate: (route: RiderRouteName) => void;
  walletBalance: number;
  onWithdraw: (amount: number) => void;
}> = ({ onNavigate, walletBalance, onWithdraw }) => {
  const [earningsTab, setEarningsTab] = useState<'Daily' | 'Weekly' | 'Monthly'>('Daily');
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);
  const periodTotals = EARNINGS_PERIODS[earningsTab];

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#F9FAFB] relative">
      <div className="bg-gradient-to-b from-[#ffae2e] to-[#ffbe4d] px-4 py-4 flex items-center justify-between shrink-0">
        <button type="button" onClick={() => onNavigate('Home')} className="p-1.5 rounded-lg hover:bg-black/5 text-gray-900 cursor-pointer" aria-label="Back">
          <ArrowLeft size={20} weight="bold" />
        </button>
        <span className="font-bold text-lg text-gray-900">Earnings &amp; Wallet</span>
        <span className="w-6" />
      </div>

      <div className="flex-1 min-h-0 px-4 py-3 space-y-3 overflow-y-auto thin-scroll">
        <div className="relative overflow-hidden bg-[#161920] text-white rounded-2xl p-3.5 flex items-center justify-between gap-2 shadow-md">
          <div
            className="absolute -right-6 -top-6 w-36 h-36 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,174,46,0.3) 0%, rgba(255,174,46,0) 70%)' }}
          />
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Wallet size={20} weight="duotone" />
            </div>
            <div>
              <div className="text-[11px] text-gray-400">Wallet Balance</div>
              <div className="text-base font-extrabold whitespace-nowrap">₹ {walletBalance.toLocaleString('en-IN')}.00</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setWithdrawOpen(true)}
            className="px-3.5 py-2 rounded-full bg-[#ffae2e] text-[#111318] font-bold text-xs shrink-0 hover:bg-[#f09f20] cursor-pointer transition-colors"
          >
            Withdraw
          </button>
        </div>

        {withdrawSuccess && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold px-3 py-2 rounded-xl text-center">
            Withdrawal request sent to your verified UPI ID.
          </div>
        )}

        <div className="bg-white rounded-xl border border-gray-200 p-1 grid grid-cols-3 gap-1">
          {(['Daily', 'Weekly', 'Monthly'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setEarningsTab(tab)}
              className={`py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                earningsTab === tab ? 'bg-[#ffae2e] text-[#111318]' : 'text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-3.5 space-y-2">
          <div className="flex items-center justify-between pb-2 border-b border-gray-100">
            <div>
              <div className="text-[11px] text-gray-400">{earningsTab} Earnings</div>
              <div className="text-base font-extrabold text-gray-900">{periodTotals.earn}</div>
            </div>
            <div className="text-right">
              <div className="text-[11px] text-gray-400">Trips</div>
              <div className="text-sm font-extrabold text-gray-900">{periodTotals.trips}</div>
            </div>
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between text-gray-600">
              <span>Gross Earnings</span>
              <span className="font-bold text-gray-900">{periodTotals.gross}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Commission (15%)</span>
              <span className="font-bold text-red-600">{periodTotals.comm}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Other Deductions</span>
              <span className="font-bold text-red-600">- ₹ 0.00</span>
            </div>
            <div className="flex justify-between pt-1.5 border-t border-gray-100 font-extrabold text-gray-900">
              <span>Net Earnings</span>
              <span>{periodTotals.net}</span>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-amber-400 text-[#111318] flex items-center justify-center shrink-0">
              <Star size={15} weight="fill" />
            </span>
            <div>
              <div className="text-xs font-bold text-gray-900 leading-tight">Incentives &amp; Bonuses</div>
              <div className="text-[11px] text-gray-600">Earn up to ₹ 500 extra this week!</div>
            </div>
          </div>
          <CaretRight size={14} weight="bold" className="text-gray-400 shrink-0" />
        </div>

        <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
          {[
            { label: 'Trip History', icon: Clock, target: 'History' as RiderRouteName },
            { label: 'My Ratings (4.9)', icon: Star, showStar: true, target: 'History' as RiderRouteName },
            { label: 'Support & Help', icon: Headset, target: 'Support' as RiderRouteName },
            { label: 'Profile & KYC Settings', icon: Gear, target: 'Kyc' as RiderRouteName },
          ].map((m) => {
            const Icon = m.icon;
            return (
              <button key={m.label} type="button" onClick={() => onNavigate(m.target)} className="w-full px-3.5 py-2.5 flex items-center justify-between text-xs font-semibold text-gray-800 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <Icon size={15} weight="duotone" className="text-gray-500" />
                  <span className="inline-flex items-center gap-1">
                    <span>{m.label}</span>
                    {m.showStar && <Star size={11} weight="fill" className="text-amber-400" />}
                  </span>
                </div>
                <CaretRight size={13} weight="bold" className="text-gray-400" />
              </button>
            );
          })}
        </div>
      </div>

      <RiderBottomNav active="Earnings" onNavigate={onNavigate} />

      {withdrawOpen && (
        <div className="absolute inset-0 z-30 bg-black/40 flex items-end">
          <div className="w-full bg-white rounded-t-3xl p-5 space-y-3 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-gray-900">Withdraw to Verified UPI</h3>
              <button type="button" onClick={() => setWithdrawOpen(false)} className="p-1 text-gray-500 cursor-pointer" aria-label="Close">
                <X size={18} weight="bold" />
              </button>
            </div>
            <div className="text-xs text-gray-500">Destination: <strong>arif.rider@okaxis</strong></div>
            <div className="grid grid-cols-3 gap-2">
              {[250, 500, 1000].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  disabled={walletBalance < amt}
                  onClick={() => {
                    onWithdraw(amt);
                    setWithdrawOpen(false);
                    setWithdrawSuccess(true);
                    setTimeout(() => setWithdrawSuccess(false), 2500);
                  }}
                  className="py-3 rounded-xl border border-[#ffae2e]/50 bg-amber-50 hover:bg-[#ffae2e] text-sm font-extrabold text-gray-900 disabled:opacity-40 cursor-pointer transition-colors"
                >
                  ₹{amt}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
