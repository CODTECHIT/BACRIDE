import React from 'react';
import { House, Package, User, UsersThree } from '@phosphor-icons/react';
import type { CustomerRouteName } from '../navigation/types';

export type CustomerNavTab = 'Ride' | 'Parcel' | 'AutoPool' | 'Profile';

export const CustomerBottomNav: React.FC<{
  activeTab: CustomerNavTab;
  onSelectTab: (tab: CustomerNavTab, targetRoute: CustomerRouteName) => void;
}> = ({ activeTab, onSelectTab }) => {
  const tabs = [
    { id: 'Ride' as const, label: 'Ride', icon: House, route: 'Home' as CustomerRouteName },
    { id: 'Parcel' as const, label: 'Parcel', icon: Package, route: 'Parcel' as CustomerRouteName },
    { id: 'AutoPool' as const, label: 'Auto Pool', icon: UsersThree, route: 'AutoPool' as CustomerRouteName },
    { id: 'Profile' as const, label: 'Profile', icon: User, route: 'Account' as CustomerRouteName },
  ];

  return (
    <div className="shrink-0 px-4 pb-4 pt-1 bg-gradient-to-t from-white via-white/95 to-transparent relative z-20">
      <nav
        className="bg-white/95 backdrop-blur-2xl border border-gray-200/90 rounded-full p-1.5 flex items-center justify-between shadow-[0_14px_36px_-6px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.05),inset_0_1.5px_1.5px_rgba(255,255,255,0.95)]"
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
              className={`flex-1 flex flex-col items-center justify-center gap-0.5 py-2 px-2 rounded-full transition-all duration-200 cursor-pointer select-none focus:outline-none ${
                active
                  ? 'bg-gradient-to-r from-[#FFC554] via-[#FFAE2E] to-[#F59E0B] text-[#111318] shadow-[0_4px_14px_rgba(255,174,46,0.45),inset_0_1.5px_1px_rgba(255,255,255,0.7),inset_0_-1px_1px_rgba(0,0,0,0.1)] border border-white/60 scale-[1.02]'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-black/[0.02]'
              }`}
            >
              <Icon
                size={21}
                weight={active ? 'fill' : 'bold'}
                className={`transition-transform duration-200 ${active ? 'text-[#111318] scale-105' : 'text-gray-700'}`}
              />
              <span className={`text-[11px] leading-tight ${active ? 'font-black text-[#111318]' : 'font-bold text-gray-700'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
