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
    <nav className="nav-glass px-3 py-2 flex items-center justify-around shrink-0 relative z-20" aria-label="Bottom Navigation">
      {tabs.map((tab) => {
        const active = activeTab === tab.id;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelectTab(tab.id, tab.route)}
            className={`flex-1 flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold transition-all duration-200 cursor-pointer py-1.5 px-2 rounded-2xl ${
              active
                ? 'nav-glass-active text-[#d97c00] font-bold'
                : 'text-gray-500 hover:text-gray-800 hover:bg-black/[0.03]'
            }`}
          >
            <Icon size={22} weight={active ? 'fill' : 'regular'} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
