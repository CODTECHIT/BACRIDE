import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowsDownUp,
  CaretLeft,
  CheckCircle,
  Clock,
  CurrencyInr,
  MapPin,
  ShieldCheck,
  Sparkle,
  UsersThree,
} from '@phosphor-icons/react';
import { getAsset } from '../utils/assets';
import type { CustomerRouteName } from '../navigation/types';

export const AutoPoolScreen: React.FC<{
  onNavigate: (route: CustomerRouteName) => void;
}> = ({ onNavigate }) => {
  const [pickup, setPickup] = useState('Madhapur Metro Station');
  const [drop, setDrop] = useState('Gachibowli Circle (DLF Cybercity)');
  const [seats, setSeats] = useState(1);
  const [isBooked, setIsBooked] = useState(false);

  const pricePerSeat = 35;
  const totalPrice = pricePerSeat * seats;

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#F9FAFB] relative overflow-hidden select-none">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#FFAE2E] via-[#FFB800] to-[#FFAE2E] px-4 pt-6 pb-6 rounded-b-[28px] shrink-0 shadow-md relative z-10">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => onNavigate('Home')}
            className="w-9 h-9 rounded-full bg-white/30 hover:bg-white/50 text-gray-950 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
            aria-label="Back"
          >
            <CaretLeft size={20} weight="bold" />
          </button>
          <div className="flex items-center gap-2">
            <UsersThree size={24} weight="fill" className="text-gray-950" />
            <h1 className="text-lg font-black tracking-tight text-gray-950">Auto Pool (Shared)</h1>
          </div>
          <div className="w-9" />
        </div>

        <p className="text-xs text-gray-900/80 font-bold text-center mt-2">
          Save up to 60% by sharing your auto ride along popular routes
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-0 overflow-y-auto thin-scroll p-4 space-y-4">
        {!isBooked ? (
          <>
            {/* Route Input Card */}
            <div className="bg-white rounded-2xl p-4 border border-gray-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black uppercase text-gray-400 tracking-wider">Shared Corridor Route</span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Fast Matching
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2.5 bg-gray-50 rounded-xl p-2.5 border border-gray-200">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Pickup</span>
                    <input
                      type="text"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full text-xs font-bold text-gray-800 bg-transparent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-gray-50 rounded-xl p-2.5 border border-gray-200">
                  <div className="w-3 h-3 rounded-full bg-red-500 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Drop</span>
                    <input
                      type="text"
                      value={drop}
                      onChange={(e) => setDrop(e.target.value)}
                      className="w-full text-xs font-bold text-gray-800 bg-transparent focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle & Seat Selector */}
            <div className="bg-[#FFF9EB] border border-[#FFE8B3] rounded-3xl p-4 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={getAsset('assets/auto_for_3people.png')}
                    alt="Shared Auto"
                    className="w-20 h-16 object-contain drop-shadow-sm"
                  />
                  <div>
                    <h3 className="text-sm font-black text-gray-900">Bajaj RE Shared Auto</h3>
                    <p className="text-[11px] text-gray-600 font-medium">3 Passenger Capacity • Fixed Corridor</p>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-amber-800 mt-1">
                      <Clock size={13} weight="bold" />
                      <span>Departing every 3-5 min</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seats Selector */}
              <div className="border-t border-amber-200/80 pt-3 flex items-center justify-between">
                <div>
                  <span className="text-xs font-extrabold text-gray-900 block">Select Seats Needed</span>
                  <span className="text-[11px] text-gray-500">₹{pricePerSeat} per passenger</span>
                </div>
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setSeats(num)}
                      className={`w-9 h-9 rounded-xl font-black text-xs transition-all cursor-pointer ${
                        seats === num
                          ? 'bg-[#111318] text-white shadow-xs scale-105'
                          : 'bg-white border border-amber-300 text-gray-800 hover:bg-amber-100'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Auto Pool Group Status */}
            <div className="bg-white rounded-2xl p-4 border border-gray-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-gray-900">Current Pool on this Route</span>
                <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  2 Seats Taken
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-xl bg-gray-50 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px]">
                      S1
                    </div>
                    <span className="font-bold text-gray-700">Passenger 1 • Madhapur Metro</span>
                  </div>
                  <CheckCircle size={15} weight="fill" className="text-emerald-500" />
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-gray-50 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px]">
                      S2
                    </div>
                    <span className="font-bold text-gray-700">Passenger 2 • Hitec City Junction</span>
                  </div>
                  <CheckCircle size={15} weight="fill" className="text-emerald-500" />
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-amber-50/70 border border-amber-200 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#FFAE2E] text-gray-950 flex items-center justify-center font-black text-[10px]">
                      You
                    </div>
                    <span className="font-black text-gray-900">Your Reserved Seat ({seats} seat)</span>
                  </div>
                  <span className="text-xs font-black text-amber-900">₹{totalPrice}</span>
                </div>
              </div>
            </div>

            {/* Safety badge */}
            <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-2xl text-xs text-gray-600">
              <ShieldCheck size={20} weight="fill" className="text-emerald-600 shrink-0" />
              <span>Verified Bacride Driver with Government KYC ID. 24x7 SOS enabled.</span>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsBooked(true)}
                className="w-full py-4 rounded-full btn-glass-primary font-black text-base flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-98 transition-all"
              >
                <span>Join Auto Pool • ₹{totalPrice}</span>
                <ArrowRight size={18} weight="bold" />
              </button>
            </div>
          </>
        ) : (
          /* Booked State */
          <div className="space-y-4 pt-2 animate-fade-in">
            <div className="bg-emerald-500 text-white rounded-3xl p-5 shadow-lg text-center space-y-1">
              <CheckCircle size={44} weight="fill" className="mx-auto text-emerald-100" />
              <h2 className="text-xl font-black">Auto Pool Seat Confirmed!</h2>
              <p className="text-xs text-emerald-100">Your shared auto is arriving at Madhapur Metro in 3 min</p>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-gray-200 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400">Auto Number</span>
                  <div className="text-lg font-black text-gray-900">TS 08 UB 7219</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-gray-400">Boarding OTP</span>
                  <div className="text-xl font-black text-[#FFAE2E] tracking-widest">4892</div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-3 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-gray-800">Driver: Venkat Reddy</div>
                  <div className="text-gray-500 text-[11px]">4.8 ★ (2,100 trips)</div>
                </div>
                <div className="text-right">
                  <div className="text-base font-black text-gray-900">₹{totalPrice}</div>
                  <div className="text-emerald-600 font-bold text-[10px]">Paid via Wallet</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onNavigate('Home')}
                className="flex-1 py-3.5 rounded-full border border-gray-300 text-xs font-bold text-gray-800 hover:bg-gray-100 cursor-pointer text-center"
              >
                Back to Home
              </button>
              <button
                type="button"
                onClick={() => onNavigate('Tracking')}
                className="flex-1 py-3.5 rounded-full btn-glass-primary text-xs font-black text-gray-950 flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Live Map View</span>
                <ArrowRight size={15} weight="bold" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
