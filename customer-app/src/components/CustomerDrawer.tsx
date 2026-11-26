import React from 'react';
import {
  Bell,
  Clock,
  Headset,
  House,
  MapPin,
  Motorcycle,
  Package,
  SignOut,
  Star,
  User,
  Wallet,
  X,
} from '@phosphor-icons/react';
import type { CustomerRouteName } from '../navigation/types';
import { BacrideDualScooterMark } from './BacrideIcons';

export const CustomerDrawer: React.FC<{
  open: boolean;
  activeRoute: CustomerRouteName;
  walletBalance: number;
  onClose: () => void;
  onNavigate: (route: CustomerRouteName) => void;
}> = ({ open, activeRoute, walletBalance, onClose, onNavigate }) => {
  if (!open) return null;

  const navItems: { label: string; icon: React.ElementType; target: CustomerRouteName }[] = [
    { label: 'Home', icon: House, target: 'Home' },
    { label: 'Choose a Ride', icon: Motorcycle, target: 'ChooseRide' },
    { label: 'Parcel Delivery', icon: Package, target: 'Parcel' },
    { label: 'Ride & Parcel History', icon: Clock, target: 'History' },
    { label: 'Saved Places', icon: MapPin, target: 'SavedPlaces' },
    { label: 'Notifications', icon: Bell, target: 'Notifications' },
    { label: 'Help & Support', icon: Headset, target: 'Support' },
    { label: 'My Account', icon: User, target: 'Account' },
  ];

  return (
    <div className="absolute inset-0 z-40 bg-black/50 backdrop-blur-[1px] flex">
      <div className="w-[82%] max-w-[320px] bg-white h-full flex flex-col justify-between shadow-2xl overflow-hidden">
        {/* Branded Top Header */}
        <div>
          <div className="bg-gradient-to-br from-[#ffae2e] via-[#ffbe4d] to-[#ffd27d] px-4 pt-5 pb-5">
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-2.5">
                <BacrideDualScooterMark className="w-10 h-7 text-[#111318]" />
                <span className="font-display font-black text-xl tracking-tight text-[#111318]">Bacride</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/70 hover:bg-white flex items-center justify-center text-gray-800 cursor-pointer"
                aria-label="Close menu"
              >
                <X size={16} weight="bold" />
              </button>
            </div>

            <div className="bg-[#161920] text-white rounded-2xl p-3 flex items-center justify-between gap-2 shadow-md">
              <div className="flex items-center gap-2.5 min-w-0">
                <img
                  src={`${import.meta.env.BASE_URL}assets/avatar-arif.png`}
                  alt="Arif Hasan"
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#ffae2e] shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-xs font-extrabold truncate">Arif Hasan</div>
                  <div className="text-[10px] text-gray-400 truncate">+91 98480 12345</div>
                  <div className="flex items-center gap-1 text-[10px] text-[#ffae2e] font-bold mt-0.5">
                    <Star size={10} weight="fill" />
                    <span>4.9</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNavigate('Wallet');
                }}
                className="px-2.5 py-1 rounded-full bg-[#ffae2e] text-[#111318] text-[10px] font-extrabold whitespace-nowrap shrink-0 hover:brightness-105 cursor-pointer"
              >
                ₹{walletBalance.toLocaleString('en-IN')}
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-3 space-y-0.5 overflow-y-auto max-h-[calc(100dvh-230px)] thin-scroll">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeRoute === item.target;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    onClose();
                    onNavigate(item.target);
                  }}
                  className={`w-full px-3 py-2.5 rounded-xl flex items-center gap-3 text-xs font-bold transition cursor-pointer ${isActive
                    ? 'bg-[#FFF8DC] text-amber-700 border border-amber-200'
                    : 'text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  <Icon size={18} weight={isActive ? 'fill' : 'duotone'} className={isActive ? 'text-amber-600' : 'text-gray-500'} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Log Out */}
        <div className="p-3 border-t border-gray-100">
          <button
            type="button"
            onClick={() => {
              onClose();
              onNavigate('Splash');
            }}
            className="w-full px-3 py-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 flex items-center justify-center gap-2 text-xs font-bold cursor-pointer"
          >
            <SignOut size={16} weight="bold" />
            <span>Log Out</span>
          </button>
        </div>
      </div>

      <div className="flex-1" onClick={onClose} />
    </div>
  );
};

