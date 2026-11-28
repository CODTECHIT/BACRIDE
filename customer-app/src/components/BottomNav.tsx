import React from 'react';
import { House, Motorcycle, Package, User } from '@phosphor-icons/react';
import type { CustomerRouteName } from '../navigation/types';

export type CustomerNavTab = 'Home' | 'Ride' | 'Parcel' | 'Account';

export const CustomerBottomNav: React.FC<{
  activeTab: CustomerNavTab;
  onSelectTab: (tab: CustomerNavTab, targetRoute: CustomerRouteName) => void;
}> = ({ activeTab, onSelectTab }) => {
  const tabs = [
    { id: 'Home' as const, label: 'Home', icon: House, route: 'Home' as CustomerRouteName },
    { id: 'Ride' as const, label: 'Ride', icon: Motorcycle, route: 'ChooseRide' as CustomerRouteName },
    { id: 'Parcel' as const, label: 'Parcel', icon: Package, route: 'Parcel' as CustomerRouteName },
    { id: 'Account' as const, label: 'Profile', icon: User, route: 'Account' as CustomerRouteName },
  ];

  return (
    <div className="shrink-0 px-4 pb-3.5 pt-1 bg-gradient-to-t from-[#F9FAFB] via-[#F9FAFB]/90 to-transparent relative z-20">
      <nav
        className="bg-white/85 backdrop-blur-2xl border border-white/90 rounded-3xl p-1.5 flex items-center justify-between shadow-[0_14px_36px_-6px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04),inset_0_1.5px_1.5px_rgba(255,255,255,0.95)]"
        aria-label="Bottom Navigation"
      >
        {tabs.map((tab) => {
          const active = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectTab(tab.id, tab.route)}
              className={`flex-1 flex flex-col items-center justify-center gap-0.5 py-2 px-2 rounded-2xl transition-all duration-200 cursor-pointer select-none focus:outline-none ${
                active
                  ? 'bg-gradient-to-b from-[#FFFBEB] via-[#FFF9E6] to-[#FEF3C7] text-[#D97706] border border-[#FFAE2E]/45 shadow-[0_3px_12px_rgba(255,174,46,0.25),inset_0_1.5px_1px_rgba(255,255,255,0.95)] scale-[1.02]'
                  : 'text-gray-400 hover:text-gray-700 hover:bg-black/[0.02]'
              }`}
            >
              <Icon
                size={21}
                weight={active ? 'fill' : 'duotone'}
                className={`transition-transform duration-200 ${active ? 'text-[#FFAE2E] scale-105' : 'text-gray-400'}`}
              />
              <span className={`text-[11px] leading-tight ${active ? 'font-bold text-[#D97706]' : 'font-semibold text-gray-500'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
