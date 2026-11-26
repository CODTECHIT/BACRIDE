import React from 'react';
import { House, Package, User, Wallet } from '@phosphor-icons/react';
import type { CustomerRouteName } from '../navigation/types';
import { BacrideDualScooterMark } from './BacrideIcons';

export type CustomerNavTab = 'Home' | 'Parcel' | 'Ride' | 'Wallet' | 'Account';

export const CustomerBottomNav: React.FC<{
  activeTab: CustomerNavTab;
  onSelectTab: (tab: CustomerNavTab, targetRoute: CustomerRouteName) => void;
}> = ({ activeTab, onSelectTab }) => (
  <nav className="bg-white border-t border-gray-200/80 px-3 py-2 flex items-center justify-around shrink-0 relative z-20" aria-label="Bottom Navigation">
    <button
      type="button"
      onClick={() => onSelectTab('Home', 'Home')}
      className={`flex flex-col items-center gap-0.5 text-[11px] font-semibold cursor-pointer ${
        activeTab === 'Home' ? 'text-amber-500' : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      <House size={20} weight={activeTab === 'Home' ? 'fill' : 'regular'} />
      <span>Home</span>
    </button>
    <button
      type="button"
      onClick={() => onSelectTab('Parcel', 'Parcel')}
      className={`flex flex-col items-center gap-0.5 text-[11px] font-semibold cursor-pointer ${
        activeTab === 'Parcel' ? 'text-amber-500' : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      <Package size={20} weight={activeTab === 'Parcel' ? 'fill' : 'regular'} />
      <span>Parcel</span>
    </button>
    <button
      type="button"
      onClick={() => onSelectTab('Ride', 'ChooseRide')}
      className={`-mt-7 w-13 h-13 rounded-full bg-[#FBBF24] text-[#111318] shadow-lg border-4 border-white flex items-center justify-center cursor-pointer hover:bg-amber-400 transition ${
        activeTab === 'Ride' ? 'ring-2 ring-amber-500' : ''
      }`}
      aria-label="Book a ride"
    >
      <BacrideDualScooterMark className="w-7 h-7" />
    </button>
    <button
      type="button"
      onClick={() => onSelectTab('Wallet', 'Wallet')}
      className={`flex flex-col items-center gap-0.5 text-[11px] font-semibold cursor-pointer ${
        activeTab === 'Wallet' ? 'text-amber-500' : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      <Wallet size={20} weight={activeTab === 'Wallet' ? 'fill' : 'regular'} />
      <span>Wallet</span>
    </button>
    <button
      type="button"
      onClick={() => onSelectTab('Account', 'Account')}
      className={`flex flex-col items-center gap-0.5 text-[11px] font-semibold cursor-pointer ${
        activeTab === 'Account' ? 'text-amber-500' : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      <User size={20} weight={activeTab === 'Account' ? 'fill' : 'regular'} />
      <span>Profile</span>
    </button>
  </nav>
);
