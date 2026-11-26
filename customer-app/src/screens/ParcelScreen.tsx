import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CaretRight, Check, MapPin, Package, Scales, User } from '@phosphor-icons/react';
import { ParcelBoxesIllustration, RealisticVehicleIcon } from '../components/BacrideIcons';
import type { CustomerRouteName } from '../navigation/types';

export const ParcelScreen: React.FC<{
  onNavigate: (route: CustomerRouteName) => void;
  parcelVehicle: 'Bike' | 'Auto' | 'Cab';
  setParcelVehicle: (v: 'Bike' | 'Auto' | 'Cab') => void;
}> = ({ onNavigate, parcelVehicle, setParcelVehicle }) => {
  const [parcelType, setParcelType] = useState('Documents');
  const [parcelWeight, setParcelWeight] = useState('1 - 2 kg');
  const [senderName, setSenderName] = useState('Arif Hasan');
  const [receiverName, setReceiverName] = useState('Nadia Rahman');

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#F9FAFB]">
      <div className="bg-gradient-to-b from-[#ffae2e] via-[#ffbe4d] to-[#ffa826] px-5 pt-6 pb-8 rounded-b-[32px] shrink-0 shadow-md relative z-10">
        <button type="button" onClick={() => onNavigate('Home')} className="p-2.5 rounded-2xl bg-white/30 hover:bg-white/50 text-gray-900 cursor-pointer transition-colors shadow-2xs" aria-label="Back">
          <ArrowLeft size={24} weight="bold" />
        </button>
        <div className="flex items-center justify-between mt-3.5">
          <div className="max-w-[64%]">
            <div className="flex items-center gap-2.5">
              <Package size={28} weight="duotone" className="text-amber-900" />
              <h2 className="font-black text-2xl text-gray-900 tracking-tight">Parcel Delivery</h2>
            </div>
            <p className="text-xs text-gray-800 mt-1.5 leading-snug font-medium">
              Send &amp; deliver your parcels safely and quickly with Bacride.
            </p>
          </div>
          <ParcelBoxesIllustration className="w-32 h-24 shrink-0 -mr-1 drop-shadow-xs" />
        </div>
      </div>

      <div className="flex-1 min-h-0 px-4 pb-6 space-y-3 overflow-y-auto thin-scroll flex flex-col justify-between">
        <div className="space-y-3">
          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
            <div className="px-3.5 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <MapPin size={17} weight="fill" className="text-emerald-600 shrink-0" />
                <div>
                  <div className="text-[10px] text-gray-400">Pickup Location</div>
                  <div className="text-xs font-semibold text-gray-900">My Location (Madhapur, Hyderabad)</div>
                </div>
              </div>
              <CaretRight size={14} weight="bold" className="text-gray-400" />
            </div>
            <div className="px-3.5 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <MapPin size={17} weight="fill" className="text-red-500 shrink-0" />
                <div>
                  <div className="text-[10px] text-gray-400">Drop Location</div>
                  <div className="text-xs font-semibold text-gray-900">Kondapur Sector 2, Hyderabad</div>
                </div>
              </div>
              <CaretRight size={14} weight="bold" className="text-gray-400" />
            </div>
          </div>

          <div>
            <div className="text-xs font-bold text-gray-800 mb-1.5">Sender &amp; Receiver</div>
            <div className="grid grid-cols-2 gap-2.5">
              <label className="bg-white rounded-xl border border-gray-200 p-2.5 flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center shrink-0 mt-0.5">
                  <User size={13} weight="fill" />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] text-gray-400 block">Sender</span>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full text-xs font-bold text-gray-900 focus:outline-none"
                  />
                  <div className="text-[10px] text-gray-500 mt-0.5">+91 98480 12345</div>
                </div>
              </label>
              <label className="bg-white rounded-xl border border-gray-200 p-2.5 flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center shrink-0 mt-0.5">
                  <User size={13} weight="fill" />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] text-gray-400 block">Receiver</span>
                  <input
                    type="text"
                    value={receiverName}
                    onChange={(e) => setReceiverName(e.target.value)}
                    className="w-full text-xs font-bold text-gray-900 focus:outline-none"
                  />
                  <div className="text-[10px] text-gray-500 mt-0.5">+91 98490 67890</div>
                </div>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <label className="bg-white rounded-xl border border-gray-200 p-2.5 flex items-center gap-2">
              <Package size={18} weight="duotone" className="text-amber-700 shrink-0" />
              <div className="min-w-0 flex-1">
                <span className="text-[10px] text-gray-400 block">Parcel Type</span>
                <select
                  value={parcelType}
                  onChange={(e) => setParcelType(e.target.value)}
                  className="w-full text-xs font-bold text-gray-900 bg-transparent focus:outline-none cursor-pointer"
                >
                  <option>Documents</option>
                  <option>Electronics</option>
                  <option>Clothes</option>
                  <option>Fragile</option>
                </select>
              </div>
            </label>
            <label className="bg-white rounded-xl border border-gray-200 p-2.5 flex items-center gap-2">
              <Scales size={18} weight="duotone" className="text-gray-600 shrink-0" />
              <div className="min-w-0 flex-1">
                <span className="text-[10px] text-gray-400 block">Weight (Approx.)</span>
                <select
                  value={parcelWeight}
                  onChange={(e) => setParcelWeight(e.target.value)}
                  className="w-full text-xs font-bold text-gray-900 bg-transparent focus:outline-none cursor-pointer"
                >
                  <option>1 - 2 kg</option>
                  <option>2 - 5 kg</option>
                  <option>5 - 20 kg</option>
                </select>
              </div>
            </label>
          </div>

          <div>
            <div className="text-xs font-bold text-gray-800 mb-1.5">Delivery Vehicle</div>
            <div className="grid grid-cols-3 gap-2.5">
              {([
                { id: 'Bike' as const, cap: 'Up to 5 kg' },
                { id: 'Auto' as const, cap: 'Up to 20 kg' },
                { id: 'Cab' as const, cap: 'Up to 50 kg' },
              ]).map((v) => {
                const active = parcelVehicle === v.id;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setParcelVehicle(v.id)}
                    className={`relative rounded-xl border p-2.5 text-center cursor-pointer ${active ? 'bg-[#FFF8DC] border-[#F59E0B]' : 'bg-white border-gray-200'
                      }`}
                  >
                    {active && (
                      <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#ffae2e] text-[#111318] flex items-center justify-center">
                        <Check size={10} weight="bold" />
                      </span>
                    )}
                    <div className="flex justify-center mb-1">
                      <RealisticVehicleIcon type={v.id} className="w-9 h-5" />
                    </div>
                    <div className="text-xs font-bold text-gray-900">{v.id}</div>
                    <div className="text-[10px] text-gray-500">{v.cap}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('Tracking')}
          className="w-full py-3.5 rounded-full btn-glass-primary font-bold text-sm flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
        >
          <span>Book Parcel</span>
          <ArrowRight size={15} weight="bold" />
        </button>
      </div>
    </div>
  );
};
