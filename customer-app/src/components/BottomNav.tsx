import React from 'react';
import { House, Motorcycle, Package, User } from '@phosphor-icons/react';
import type { CustomerRouteName } from '../navigation/types';
import { BacrideDualScooterMark } from './BacrideIcons';

export type CustomerNavTab = 'Home' | 'Ride' | 'Parcel' | 'Account';

export const CustomerBottomNav: React.FC<{
  activeTab: CustomerNavTab;
  onSelectTab: (tab: CustomerNavTab, targetRoute: CustomerRouteName) => void;
}> = ({ activeTab, onSelectTab }) => (
  <nav className="bg-white border-t border-gray-200/80 px-4 py-2 flex items-center justify-around shrink-0 relative z-20" aria-label="Bottom Navigation">
    {/* Home */}
    <button
      type="button"
      onClick={() => onSelectTab('Home', 'Home')}
      className={`flex flex-col items-center gap-0.5 text-[11px] font-semibold cursor-pointer ${
        activeTab === 'Home' ? 'text-amber-500' : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      <House size={22} weight={activeTab === 'Home' ? 'fill' : 'regular'} />
      <span>Home</span>
    </button>

    {/* Ride */}
    <button
      type="button"
      onClick={() => onSelectTab('Ride', 'ChooseRide')}
      className={`flex flex-col items-center gap-0.5 text-[11px] font-semibold cursor-pointer ${
        activeTab === 'Ride' ? 'text-amber-500' : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      <div className={`w-11 h-11 -mt-4 rounded-full bg-[#FBBF24] text-[#111318] shadow-md border-2 border-white flex items-center justify-center transition hover:bg-amber-400 ${
        activeTab === 'Ride' ? 'ring-2 ring-amber-500 scale-105' : ''
      }`}>
        <BacrideDualScooterMark className="w-6 h-6" />
      </div>
      <span>Ride</span>
    </button>

    {/* Parcel */}
    <button
      type="button"
      onClick={() => onSelectTab('Parcel', 'Parcel')}
      className={`flex flex-col items-center gap-0.5 text-[11px] font-semibold cursor-pointer ${
        activeTab === 'Parcel' ? 'text-amber-500' : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      <Package size={22} weight={activeTab === 'Parcel' ? 'fill' : 'regular'} />
      <span>Parcel</span>
    </button>

    {/* Profile */}
    <button
      type="button"
      onClick={() => onSelectTab('Account', 'Account')}
      className={`flex flex-col items-center gap-0.5 text-[11px] font-semibold cursor-pointer ${
        activeTab === 'Account' ? 'text-amber-500' : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      <User size={22} weight={activeTab === 'Account' ? 'fill' : 'regular'} />
      <span>Profile</span>
    </button>
  </nav>
);
