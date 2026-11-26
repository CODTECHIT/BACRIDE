import React, { useEffect, useState } from 'react';
import { ArrowRight, Broadcast, CreditCard, X } from '@phosphor-icons/react';
import { RealisticBikeIcon } from '../components/BacrideIcons';
import type { RiderRouteName } from '../navigation/types';

export const IncomingRequestScreen: React.FC<{ onNavigate: (route: RiderRouteName) => void }> = ({ onNavigate }) => {
  const [countdown, setCountdown] = useState(28);

  useEffect(() => {
    const t = setInterval(() => {
      setCountdown((c) => (c <= 1 ? 28 : c - 1));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#14171D]">
      <div className="bg-gradient-to-b from-[#2E2510] via-[#1B1C22] to-[#14171D] pt-10 pb-6 px-4 flex flex-col items-center text-center shrink-0">
        <div className="animate-radar w-12 h-12 rounded-full bg-amber-500/20 text-[#ffae2e] flex items-center justify-center mb-2">
          <Broadcast size={26} weight="duotone" />
        </div>
        <h2 className="text-base font-bold text-white">Incoming Ride Request</h2>

        <div className="mt-5 w-24 h-24 rounded-full border-4 border-[#ffae2e] bg-black/40 flex items-center justify-center shadow-[0_0_24px_rgba(255,174,46,0.35)]">
          <span className="text-3xl font-extrabold text-white">{countdown} s</span>
        </div>
      </div>

      <div className="flex-1 min-h-0 bg-white rounded-t-3xl p-5 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <RealisticBikeIcon className="w-9 h-6" />
              <span className="text-base font-extrabold text-gray-900">Ride</span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-gray-100 border border-gray-200 px-3 py-1 rounded-full text-gray-700">
              <CreditCard size={14} weight="duotone" /> Cashless
            </span>
          </div>

          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-4 space-y-3.5">
            <div className="flex items-start gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 mt-1 shrink-0" />
              <div>
                <div className="text-[11px] text-gray-400">Pickup</div>
                <div className="text-sm font-bold text-gray-900">Madhapur, Hyderabad</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-3 h-3 rounded-full bg-red-500 mt-1 shrink-0" />
              <div>
                <div className="text-[11px] text-gray-400">Drop</div>
                <div className="text-sm font-bold text-gray-900">Gachibowli Circle, Hyderabad</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl border border-gray-100 grid grid-cols-3 divide-x divide-gray-200 py-3 text-center">
            <div>
              <div className="text-base font-extrabold text-gray-900">₹ 130</div>
              <div className="text-[10px] text-gray-500">Est. Fare</div>
            </div>
            <div>
              <div className="text-base font-extrabold text-gray-900">6.2 km</div>
              <div className="text-[10px] text-gray-500">Distance</div>
            </div>
            <div>
              <div className="text-base font-extrabold text-gray-900">~ 14 min</div>
              <div className="text-[10px] text-gray-500">Est. Time</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4">
          <button
            type="button"
            onClick={() => onNavigate('Home')}
            className="py-3.5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 font-bold text-sm flex items-center justify-center gap-1.5 hover:bg-rose-100 cursor-pointer"
          >
            <X size={16} weight="bold" />
            <span>Reject</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('OnTrip')}
            className="py-3.5 rounded-full btn-glass-primary font-bold text-sm flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Accept</span>
            <ArrowRight size={16} weight="bold" />
          </button>
        </div>
      </div>
    </div>
  );
};
