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
    <div className="shrink-0 px-4 pb-3.5 pt-1 bg-gradient-to-t from-[#F9FAFB] via-[#F9FAFB]/90 to-transparent relative z-20">
      <nav
        className="bg-white/80 backdrop-blur-2xl border border-white/85 rounded-full p-1.5 flex items-center justify-between shadow-[0_14px_36px_-6px_rgba(0,0,0,0.14),0_4px_12px_rgba(0,0,0,0.05),inset_0_1.5px_1.5px_rgba(255,255,255,0.95)]"
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
              className={`flex-1 flex flex-col items-center justify-center gap-0.5 py-2 px-2 rounded-full transition-all duration-200 cursor-pointer select-none focus:outline-none ${
                isActive
                  ? 'bg-gradient-to-r from-[#FFC554] via-[#FFAE2E] to-[#F59E0B] text-[#111318] shadow-[0_4px_14px_rgba(255,174,46,0.45),inset_0_1.5px_1px_rgba(255,255,255,0.7),inset_0_-1px_1px_rgba(0,0,0,0.1)] border border-white/60 scale-[1.03]'
                  : 'text-gray-400 hover:text-gray-700 hover:bg-black/[0.03]'
              }`}
            >
              <Icon
                size={21}
                weight={isActive ? 'fill' : 'duotone'}
                className={`transition-transform duration-200 ${isActive ? 'text-[#111318] scale-105' : 'text-gray-400'}`}
              />
              <span className={`text-[11px] leading-tight ${isActive ? 'font-black text-[#111318]' : 'font-semibold text-gray-500'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
