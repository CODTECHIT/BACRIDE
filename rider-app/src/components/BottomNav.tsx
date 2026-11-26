import React from 'react';
import { FileText, House, User, Wallet } from '@phosphor-icons/react';
import type { RiderRouteName } from '../navigation/types';

export const RiderBottomNav: React.FC<{
  active: 'Home' | 'Earnings' | 'Requests' | 'Profile';
  onNavigate: (route: RiderRouteName) => void;
}> = ({ active, onNavigate }) => {
  const tabs = [
    { id: 'Home' as const, label: 'Home', icon: House, target: 'Home' as RiderRouteName },
    { id: 'Earnings' as const, label: 'Earnings', icon: Wallet, target: 'Earnings' as RiderRouteName },
    { id: 'Requests' as const, label: 'Requests', icon: FileText, target: 'IncomingRequest' as RiderRouteName },
    { id: 'Profile' as const, label: 'Profile', icon: User, target: 'Kyc' as RiderRouteName },
  ];

  return (
    <div className="shrink-0 px-3.5 pb-3 pt-1 bg-gradient-to-t from-[#F9FAFB] via-[#F9FAFB]/90 to-transparent relative z-20">
      <nav
        className="bg-white/95 backdrop-blur-xl border border-white/80 rounded-2xl p-1.5 flex items-center justify-between shadow-[0_10px_28px_-6px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.95)]"
        aria-label="Partner Bottom Navigation"
      >
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onNavigate(tab.target)}
              className={`flex-1 flex flex-col items-center justify-center gap-1 py-1.5 px-1 rounded-xl transition-all duration-200 cursor-pointer select-none focus:outline-none ${
                isActive
                  ? 'bg-gradient-to-b from-[#FFFBEB] to-[#FEF3C7] text-amber-700 shadow-xs border border-amber-300/60 font-bold scale-[1.02]'
                  : 'text-gray-400 hover:text-gray-700 hover:bg-black/[0.02] font-medium'
              }`}
            >
              <Icon
                size={22}
                weight={isActive ? 'fill' : 'duotone'}
                className={`transition-transform duration-200 ${isActive ? 'text-amber-600 scale-105' : 'text-gray-400'}`}
              />
              <span className={`text-[11px] leading-tight ${isActive ? 'font-extrabold text-amber-700' : 'text-gray-500'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
