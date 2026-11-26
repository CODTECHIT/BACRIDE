import React, { useState } from 'react';
import { Bell, CalendarBlank, Gift, HandWaving, List, Motorcycle, Package, Wallet } from '@phosphor-icons/react';
import { BacrideSoloScooterMark } from '../components/BacrideIcons';
import { RiderBottomNav } from '../components/BottomNav';
import { RiderMobileMap } from '../components/MobileMap';
import type { RiderRouteName } from '../navigation/types';

export const HomeScreen: React.FC<{
  onNavigate: (route: RiderRouteName) => void;
  onOpenMenu: () => void;
  walletBalance: number;
}> = ({ onNavigate, onOpenMenu, walletBalance }) => {
  const [online, setOnline] = useState(true);

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#F9FAFB]">
      <div className="bg-gradient-to-b from-[#ffae2e] via-[#ffbe4d] to-[#fff9f0] px-4 pt-4 pb-4 shrink-0 shadow-xs">
        <div className="flex items-center justify-between">
          <button type="button" onClick={onOpenMenu} className="p-2 rounded-xl hover:bg-black/10 text-gray-900 cursor-pointer transition-colors" aria-label="Menu">
            <List size={24} weight="bold" />
          </button>
          <div className="flex items-center gap-2.5">
            <BacrideSoloScooterMark className="w-10 h-7 text-[#111318]" />
            <span className="font-display font-black text-xl tracking-tight text-[#111318]">Bacride</span>
          </div>
          <button type="button" onClick={() => onNavigate('Support')} className="p-2 rounded-xl hover:bg-black/10 text-gray-900 cursor-pointer transition-colors" aria-label="Support">
            <Bell size={22} weight="bold" />
          </button>
        </div>
        <div className="mt-3 bg-white/85 backdrop-blur-xs rounded-2xl px-4 py-2.5 shadow-xs border border-white/60">
          <h2 className="font-bold text-lg text-gray-900 flex items-center gap-1.5 leading-tight">
            <span>Hi, Arif!</span>
            <HandWaving size={19} weight="duotone" className="text-amber-700" />
          </h2>
          <p className="text-xs text-gray-600 mt-0.5">Go online to receive ride &amp; delivery requests.</p>
        </div>
      </div>

      <div className="flex-1 min-h-0 p-4 space-y-3 overflow-y-auto thin-scroll">
        <label className="bg-white rounded-full border border-gray-200 px-4 py-2.5 flex items-center justify-between shadow-2xs cursor-pointer">
          <div className="flex items-center gap-2.5">
            <span className={`w-2.5 h-2.5 rounded-full ${online ? 'bg-emerald-500' : 'bg-gray-400'}`} />
            <span className="text-sm font-bold text-gray-900">{online ? "You're Online" : "You're Offline"}</span>
          </div>
          <input
            type="checkbox"
            {...({ switch: '' } as React.InputHTMLAttributes<HTMLInputElement>)}
            checked={online}
            onChange={(e) => setOnline(e.target.checked)}
            className="w-9 h-5"
          />
        </label>

        <div className="relative overflow-hidden bg-[#161920] text-white rounded-2xl p-3.5 flex items-center justify-between gap-2 shadow-md">
          <div
            className="absolute -right-6 -top-6 w-36 h-36 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.22) 0%, rgba(251,191,36,0) 70%)' }}
          />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Wallet size={20} weight="duotone" />
            </div>
            <div>
              <div className="text-[11px] text-gray-400">Current Balance</div>
              <div className="text-base font-extrabold whitespace-nowrap">₹ {walletBalance.toLocaleString('en-IN')}.00</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('Earnings')}
            className="px-4 py-2 rounded-full btn-glass-primary font-bold text-xs shrink-0 cursor-pointer"
          >
            Withdraw
          </button>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 grid grid-cols-3 divide-x divide-gray-100 py-2.5 text-center">
          <div>
            <div className="text-[10px] text-gray-400">Today&apos;s Earnings</div>
            <div className="text-sm font-extrabold text-gray-900">₹ 820.00</div>
          </div>
          <div>
            <div className="text-[10px] text-gray-400">Trips</div>
            <div className="text-sm font-extrabold text-gray-900">12</div>
          </div>
          <div>
            <div className="text-[10px] text-gray-400">Online Hours</div>
            <div className="text-sm font-extrabold text-gray-900">5 h 24 m</div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[
            { label: 'Ride', icon: Motorcycle, target: 'IncomingRequest' as RiderRouteName },
            { label: 'Parcel', icon: Package, target: 'OnTrip' as RiderRouteName },
            { label: 'Incentives', icon: Gift, target: 'Earnings' as RiderRouteName },
            { label: 'History', icon: CalendarBlank, target: 'History' as RiderRouteName },
          ].map((q) => {
            const Icon = q.icon;
            return (
              <button
                key={q.label}
                type="button"
                onClick={() => onNavigate(q.target)}
                className="bg-white rounded-xl border border-gray-200 py-2.5 px-1 flex flex-col items-center gap-1 hover:bg-amber-50 cursor-pointer"
              >
                <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Icon size={17} weight="duotone" />
                </span>
                <span className="text-[11px] font-semibold text-gray-700">{q.label}</span>
              </button>
            );
          })}
        </div>

        <div className="h-44 rounded-2xl overflow-hidden border border-gray-200">
          <RiderMobileMap variant="rider-heatmap" />
        </div>
      </div>

      <RiderBottomNav active="Home" onNavigate={onNavigate} />
    </div>
  );
};
