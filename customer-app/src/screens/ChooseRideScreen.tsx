import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowsDownUp, CalendarBlank, CaretRight, Check, MapPin, Plus, Tag, X } from '@phosphor-icons/react';
import { getAsset } from '../utils/assets';
import { RIDE_OPTIONS } from '../data/mockData';
import type { CustomerRouteName } from '../navigation/types';

export const ChooseRideScreen: React.FC<{
  onNavigate: (route: CustomerRouteName) => void;
  selectedRide: string;
  setSelectedRide: (id: string) => void;
  pickup: string;
  drop: string;
  onSwapLocations: () => void;
}> = ({ onNavigate, selectedRide, setSelectedRide, pickup, drop, onSwapLocations }) => {
  const [stops, setStops] = useState<string[]>([]);
  const [addingStop, setAddingStop] = useState(false);
  const [stopDraft, setStopDraft] = useState('');
  const [scheduledTime, setScheduledTime] = useState<string | null>(null);
  const [showSchedule, setShowSchedule] = useState(false);
  const [promoOpen, setPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('BACRIDE50');
  const [promoApplied, setPromoApplied] = useState(false);

  const activeOption = RIDE_OPTIONS.find((r) => r.id === selectedRide) ?? RIDE_OPTIONS[0];
  const discount = promoApplied ? Math.min(40, Math.round(activeOption.fare * 0.5)) : 0;
  const finalFare = Math.max(30, activeOption.fare - discount + stops.length * 25);

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#F9FAFB] relative">
      <div className="bg-gradient-to-b from-[#ffae2e] via-[#ffbe4d] to-[#ffb338] px-5 pt-7 pb-8 rounded-b-[32px] flex items-center justify-between shrink-0 shadow-md relative z-10">
        <button type="button" onClick={() => onNavigate('Home')} className="p-2.5 rounded-2xl bg-white/30 hover:bg-white/50 text-gray-900 cursor-pointer transition-colors shadow-2xs" aria-label="Back">
          <ArrowLeft size={24} weight="bold" />
        </button>
        <h2 className="font-black text-2xl text-gray-900 tracking-tight text-center flex-1">Choose a Ride</h2>
        <span className="w-11" />
      </div>

      <div className="flex-1 min-h-0 p-4 space-y-3 overflow-y-auto thin-scroll">
        <div className="bg-white rounded-xl border border-gray-200 p-3 flex items-center justify-between gap-2 shadow-2xs">
          <div className="space-y-2 text-xs min-w-0 flex-1 relative">
            <div className="flex items-center gap-2">
              <MapPin size={15} weight="fill" className="text-emerald-600 shrink-0" />
              <span className="font-medium text-gray-800 truncate">{pickup}</span>
            </div>
            {stops.map((st, idx) => (
              <div key={idx} className="flex items-center justify-between gap-2 pl-0.5">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                  <span className="font-medium text-gray-700 truncate">Stop: {st}</span>
                </div>
                <button type="button" onClick={() => setStops((prev) => prev.filter((_, i) => i !== idx))} className="text-gray-400 hover:text-red-500 cursor-pointer" aria-label="Remove stop">
                  <X size={12} weight="bold" />
                </button>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <MapPin size={15} weight="fill" className="text-red-500 shrink-0" />
              <span className="font-medium text-gray-800 truncate">{drop || 'Gachibowli Circle, Hyderabad'}</span>
            </div>
          </div>
          <button type="button" onClick={onSwapLocations} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 shrink-0 cursor-pointer" aria-label="Swap locations">
            <ArrowsDownUp size={15} weight="bold" />
          </button>
        </div>

        <div className="space-y-2">
          {RIDE_OPTIONS.map((opt) => {
            const active = opt.id === selectedRide;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedRide(opt.id)}
                className={`w-full px-3.5 py-2.5 rounded-2xl border flex items-center justify-between text-left transition cursor-pointer ${
                  active ? 'bg-[#FFF9EB] border-[#FFAE2E] shadow-2xs' : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-10 flex items-center justify-center shrink-0">
                    <img src={getAsset(opt.image)} alt={opt.name} className="max-h-10 max-w-full object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-black text-gray-900">{opt.name}</span>
                      {opt.badge && (
                        <span className="text-[9px] font-black bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded-md">
                          {opt.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-gray-500">
                      <span>{opt.eta}</span>
                      <span className="text-emerald-600 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {opt.range}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-sm font-black text-gray-900 whitespace-nowrap">₹ {opt.fare}</span>
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                      active ? 'bg-[#FFAE2E] border-[#E89A1F] text-[#111318]' : 'border-gray-300'
                    }`}
                  >
                    {active && <Check size={11} weight="bold" />}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <button type="button" onClick={() => setShowSchedule(true)} className="bg-white border border-gray-200 rounded-xl py-2.5 px-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer">
            <CalendarBlank size={15} weight="duotone" className="text-amber-600" />
            <span>{scheduledTime ? scheduledTime : 'Schedule Later'}</span>
          </button>
          <button type="button" onClick={() => setAddingStop(true)} className="bg-white border border-gray-200 rounded-xl py-2.5 px-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer">
            <Plus size={15} weight="bold" className="text-gray-600" />
            <span>Add Stop</span>
          </button>
        </div>

        {addingStop && (
          <div className="bg-white border border-amber-300 rounded-xl p-2.5 flex items-center gap-2">
            <input
              type="text"
              value={stopDraft}
              onChange={(e) => setStopDraft(e.target.value)}
              placeholder="Enter stop location (e.g. Jubilee Hills)"
              className="flex-1 text-xs focus:outline-none"
            />
            <button
              type="button"
              onClick={() => {
                if (stopDraft.trim()) setStops((prev) => [...prev, stopDraft.trim()]);
                setStopDraft('');
                setAddingStop(false);
              }}
              className="px-3 py-1 rounded-lg bg-[#ffae2e] hover:bg-[#f09f20] text-[#111318] text-xs font-bold cursor-pointer transition-colors"
            >
              Add
            </button>
          </div>
        )}

        <div className="bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
            <Tag size={15} weight="duotone" className="text-amber-600" />
            <span>{promoApplied ? `Promo Applied (${promoCode} -₹${discount})` : 'Promo Code'}</span>
          </div>
          <button type="button" onClick={() => setPromoOpen(!promoOpen)} className="text-xs font-bold text-amber-600 flex items-center gap-0.5 cursor-pointer">
            <span>{promoApplied ? 'Change' : 'Apply'}</span>
            <CaretRight size={13} weight="bold" />
          </button>
        </div>

        {promoOpen && (
          <div className="bg-white border border-amber-300 rounded-xl p-2.5 flex items-center gap-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
              className="flex-1 text-xs font-bold uppercase focus:outline-none"
            />
            <button
              type="button"
              onClick={() => {
                setPromoApplied(true);
                setPromoOpen(false);
              }}
              className="px-3 py-1 rounded-lg bg-[#111318] text-white text-xs font-bold cursor-pointer"
            >
              Apply
            </button>
          </div>
        )}
      </div>

      <div className="bg-white border-t border-gray-200 px-4 pt-3 pb-5 flex items-center justify-between shrink-0">
        <div>
          <div className="text-[11px] text-gray-400">Est. Fare</div>
          <div className="text-lg font-extrabold text-gray-900">₹ {finalFare}</div>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('Tracking')}
          className="px-7 py-3 rounded-full btn-glass-primary font-bold text-sm flex items-center gap-1.5 cursor-pointer"
        >
          <span>Book Now</span>
          <ArrowRight size={15} weight="bold" />
        </button>
      </div>

      {showSchedule && (
        <div className="absolute inset-0 z-30 bg-black/40 flex items-end">
          <div className="w-full bg-white rounded-t-3xl p-4 space-y-3 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-gray-900">Schedule Ride</h3>
              <button type="button" onClick={() => setShowSchedule(false)} className="p-1 text-gray-500 cursor-pointer" aria-label="Close">
                <X size={18} weight="bold" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {['Today, 7:30 PM', 'Today, 9:00 PM', 'Tomorrow, 8:00 AM', 'Tomorrow, 10:30 AM'].map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => {
                    setScheduledTime(slot);
                    setShowSchedule(false);
                  }}
                  className="p-2.5 rounded-xl border border-gray-200 hover:border-amber-400 hover:bg-amber-50 text-xs font-semibold text-gray-800 cursor-pointer"
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
