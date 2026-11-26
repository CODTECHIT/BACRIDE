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
    <nav className="nav-glass px-4 py-2 flex items-center justify-around shrink-0 relative z-20" aria-label="Bottom Navigation">
      {tabs.map((tab) => {
        const active = activeTab === tab.id;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelectTab(tab.id, tab.route)}
            className={`flex-1 flex flex-col items-center justify-center gap-1 text-[11px] transition-colors cursor-pointer py-1 focus:outline-none select-none ${
              active
                ? 'text-amber-500 font-bold'
                : 'text-gray-400 hover:text-gray-600 font-medium'
            }`}
          >
            <Icon size={23} weight={active ? 'fill' : 'regular'} className="transition-transform active:scale-95" />
            <span className="leading-none">{tab.label}</span>
            {active ? (
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-0.5" />
            ) : (
              <span className="w-1.5 h-1.5 mt-0.5 opacity-0" />
            )}
          </button>
        );
      })}
    </nav>
  );
};
