import React from 'react';
import { FileText, House, User, Wallet } from '@phosphor-icons/react';
import type { RiderRouteName } from '../navigation/types';

export const RiderBottomNav: React.FC<{
  active: 'Home' | 'Earnings' | 'Requests' | 'Profile';
  onNavigate: (route: RiderRouteName) => void;
}> = ({ active, onNavigate }) => (
  <nav className="bg-white border-t border-gray-200/80 px-3 py-2 flex items-center justify-around shrink-0" aria-label="Partner Bottom Navigation">
    {[
      { id: 'Home' as const, label: 'Home', icon: House, target: 'Home' as RiderRouteName },
      { id: 'Earnings' as const, label: 'Earnings', icon: Wallet, target: 'Earnings' as RiderRouteName },
      { id: 'Requests' as const, label: 'Requests', icon: FileText, target: 'IncomingRequest' as RiderRouteName },
      { id: 'Profile' as const, label: 'Profile', icon: User, target: 'Kyc' as RiderRouteName },
    ].map((tab) => {
      const isActive = active === tab.id;
      const Icon = tab.icon;
      return (
        <button
          key={tab.id}
          type="button"
          onClick={() => onNavigate(tab.target)}
          className={`flex flex-col items-center gap-0.5 px-3.5 py-1 rounded-xl text-[11px] font-bold cursor-pointer ${
            isActive ? 'bg-[#ffae2e]/25 text-[#d97c00]' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <Icon size={19} weight={isActive ? 'fill' : 'regular'} />
          <span>{tab.label}</span>
        </button>
      );
    })}
  </nav>
);
