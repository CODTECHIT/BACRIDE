import React, { useState } from 'react';
import { ArrowLeft, CaretRight, Clock, Gear, Gift, Headset, MapPin, Package, User, Wallet, X } from '@phosphor-icons/react';
import type { CustomerRouteName } from '../navigation/types';

export const AccountScreen: React.FC<{
  onNavigate: (route: CustomerRouteName) => void;
  walletBalance: number;
  onAddMoney: (amount: number) => void;
}> = ({ onNavigate, walletBalance, onAddMoney }) => {
  const [addMoneyOpen, setAddMoneyOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#F9FAFB] relative">
      {/* Curved golden header wrapping behind the top of the profile card */}
      <div className="bg-gradient-to-b from-[#ffae2e] via-[#ffbe4d] to-[#ffa826] px-5 pt-7 pb-14 rounded-b-[36px] shrink-0 shadow-md relative z-10">
        <div className="flex items-center justify-between">
          <button type="button" onClick={() => onNavigate('Home')} className="p-2.5 rounded-2xl bg-white/30 hover:bg-white/50 text-gray-900 cursor-pointer transition-colors shadow-2xs" aria-label="Back">
            <ArrowLeft size={24} weight="bold" />
          </button>
          <div className="flex items-center gap-2">
            <User size={22} weight="duotone" className="text-gray-900" />
            <span className="font-black text-2xl text-gray-900">My Account</span>
          </div>
          <button type="button" onClick={() => setProfileModalOpen(true)} className="p-2.5 rounded-2xl bg-white/30 hover:bg-white/50 text-gray-900 cursor-pointer transition-colors shadow-2xs" aria-label="Settings">
            <Gear size={22} weight="duotone" />
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 px-4 pb-6 -mt-7 space-y-3 overflow-y-auto thin-scroll relative z-10">
        <button
          type="button"
          onClick={() => setProfileModalOpen(true)}
          className="w-full bg-white rounded-xl border border-gray-200 p-3 flex items-center justify-between text-left shadow-xs hover:bg-gray-50 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}assets/avatar-arif.png`} alt="Arif Hasan" className="w-12 h-12 rounded-full object-cover border-2 border-[#ffae2e]" />
            <div>
              <div className="text-sm font-extrabold text-gray-900">Arif Hasan</div>
              <div className="text-xs text-gray-500">+91 98480 12345</div>
            </div>
          </div>
          <CaretRight size={15} weight="bold" className="text-gray-400" />
        </button>

        {/* Dark Bacride Wallet Card with subtle golden diagonal glow matching costumerUI.jpeg */}
        <div className="relative overflow-hidden bg-[#161920] text-white rounded-2xl p-3.5 flex items-center justify-between gap-2 shadow-md">
          <div
            className="absolute -right-6 -top-6 w-36 h-36 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,174,46,0.3) 0%, rgba(255,174,46,0) 70%)' }}
          />
          <div className="flex items-center gap-3 min-w-0 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-[#ffae2e]/20 text-[#ffae2e] flex items-center justify-center shrink-0">
              <Wallet size={21} weight="duotone" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] text-gray-400 whitespace-nowrap">Bacride Wallet</div>
              <div className="text-base font-extrabold tracking-tight whitespace-nowrap">
                ₹ {walletBalance.toLocaleString('en-IN')}.00
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setAddMoneyOpen(true)}
            className="relative z-10 px-3.5 py-2 rounded-full bg-[#ffae2e] text-[#111318] font-bold text-xs whitespace-nowrap shrink-0 hover:bg-[#f09f20] cursor-pointer"
          >
            Add Money +
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[
            { label: 'Recent Rides', icon: Clock, bg: 'bg-blue-50 text-blue-600', target: 'History' as CustomerRouteName },
            { label: 'Saved Places', icon: MapPin, bg: 'bg-rose-50 text-rose-600', target: 'SavedPlaces' as CustomerRouteName },
            { label: 'Referral Rewards', icon: Gift, bg: 'bg-amber-50 text-amber-600', target: 'Support' as CustomerRouteName },
            { label: 'Support Help', icon: Headset, bg: 'bg-indigo-50 text-indigo-600', target: 'Support' as CustomerRouteName },
          ].map((tile) => {
            const Icon = tile.icon;
            return (
              <button key={tile.label} type="button" onClick={() => onNavigate(tile.target)} className="bg-white rounded-xl border border-gray-200 p-2 flex flex-col items-center gap-1 text-center hover:bg-gray-50 cursor-pointer">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${tile.bg}`}>
                  <Icon size={16} weight="duotone" />
                </span>
                <span className="text-[10px] font-semibold text-gray-700 leading-tight">{tile.label}</span>
              </button>
            );
          })}
        </div>

        {/* Exact 5 menu items matching costumerUI.jpeg Screen 6 */}
        <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
          {[
            { label: 'Ride History', icon: Clock, action: () => onNavigate('History') },
            { label: 'Parcel History', icon: Package, action: () => onNavigate('History') },
            { label: 'Referral & Rewards', icon: Gift, badge: 'Earn ₹100', action: () => onNavigate('Support') },
            { label: 'Profile Details', icon: User, action: () => setProfileModalOpen(true) },
            { label: 'Help & Support', icon: Headset, action: () => onNavigate('Support') },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button key={item.label} type="button" onClick={item.action} className="w-full px-3.5 py-2.5 flex items-center justify-between text-left hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <Icon size={16} weight="duotone" className="text-gray-500" />
                  <span className="text-xs font-semibold text-gray-800">{item.label}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {item.badge && (
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                      {item.badge}
                    </span>
                  )}
                  <CaretRight size={13} weight="bold" className="text-gray-400" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {addMoneyOpen && (
        <div className="absolute inset-0 z-30 bg-black/40 flex items-end">
          <div className="w-full bg-white rounded-t-3xl p-5 space-y-3 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-gray-900">Add Money to Bacride Wallet</h3>
              <button type="button" onClick={() => setAddMoneyOpen(false)} className="p-1 text-gray-500 cursor-pointer" aria-label="Close">
                <X size={18} weight="bold" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[200, 500, 1000].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => {
                    onAddMoney(amt);
                    setAddMoneyOpen(false);
                  }}
                  className="py-3 rounded-xl border border-[#ffae2e]/50 bg-amber-50 hover:bg-[#ffae2e] text-sm font-extrabold text-gray-900 cursor-pointer transition-colors"
                >
                  + ₹{amt}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {profileModalOpen && (
        <div className="absolute inset-0 z-30 bg-black/40 flex items-end">
          <div className="w-full bg-white rounded-t-3xl p-5 space-y-3 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-gray-900">Profile Details</h3>
              <button type="button" onClick={() => setProfileModalOpen(false)} className="p-1 text-gray-500 cursor-pointer" aria-label="Close">
                <X size={18} weight="bold" />
              </button>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200">
                <div className="text-[10px] text-gray-400">Full Name</div>
                <div className="font-bold text-gray-900">Arif Hasan</div>
              </div>
              <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200">
                <div className="text-[10px] text-gray-400">Mobile</div>
                <div className="font-bold text-gray-900">+91 98480 12345</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setProfileModalOpen(false);
                onNavigate('Splash');
              }}
              className="w-full py-2.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold cursor-pointer"
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
