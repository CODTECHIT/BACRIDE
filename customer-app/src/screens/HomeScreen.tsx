import React, { useState } from 'react';
import { ArrowRight, Bell, CaretRight, HandWaving, List, MagnifyingGlass, MapPin, X } from '@phosphor-icons/react';
import { BacrideDualScooterMark, RealisticVehicleIcon } from '../components/BacrideIcons';
import { MobileMap } from '../components/MobileMap';
import { SAVED_PLACES } from '../data/mockData';
import type { CustomerRouteName } from '../navigation/types';

export const HomeScreen: React.FC<{
  onNavigate: (route: CustomerRouteName) => void;
  onOpenMenu: () => void;
  selectedCategory: 'Bike' | 'Auto' | 'Cab';
  setSelectedCategory: (cat: 'Bike' | 'Auto' | 'Cab') => void;
  pickup: string;
  setPickup: (val: string) => void;
  drop: string;
  setDrop: (val: string) => void;
}> = ({ onNavigate, onOpenMenu, selectedCategory, setSelectedCategory, pickup, setPickup, drop, setDrop }) => {
  const [pickingLocation, setPickingLocation] = useState<'pickup' | 'drop' | null>(null);

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#F9FAFB] relative">
      {/* Top Yellow Nav Bar fading into Curved Soft Cream Greeting Band (exact match to costumerUI.jpeg Screen 2) */}
      <div className="bg-gradient-to-b from-[#FCD34D] via-[#FDE68A] to-[#FFFDF5] px-4 pt-3 pb-3 shrink-0">
        <div className="flex items-center justify-between">
          <button type="button" onClick={onOpenMenu} className="p-1.5 rounded-lg hover:bg-black/5 text-gray-800 cursor-pointer" aria-label="Menu">
            <List size={21} weight="bold" />
          </button>
          <div className="flex items-center gap-1.5">
            <BacrideDualScooterMark className="w-7 h-5 text-[#111318]" />
            <span className="font-display font-extrabold text-base text-[#111318]">Bacride</span>
          </div>
          <button type="button" onClick={() => onNavigate('Notifications')} className="p-1.5 rounded-lg hover:bg-black/5 text-gray-800 relative cursor-pointer" aria-label="Notifications">
            <Bell size={19} weight="bold" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
          </button>
        </div>
        <div className="mt-2.5 bg-white/75 backdrop-blur-xs rounded-2xl px-3 py-2 -mx-1">
          <h2 className="font-bold text-lg text-gray-900 flex items-center gap-1.5 leading-tight">
            <span>Hi, Arif</span>
            <HandWaving size={18} weight="duotone" className="text-amber-600" />
          </h2>
          <p className="text-xs text-gray-600">Where to go today?</p>
        </div>
      </div>

      {/* Live Map */}
      <div className="h-44 w-full shrink-0">
        <MobileMap variant="customer-home" />
      </div>

      {/* 3 Category Cards overlapping the bottom edge of the map */}
      <div className="flex-1 min-h-0 px-4 pb-6 -mt-8 relative z-10 flex flex-col justify-between overflow-y-auto thin-scroll">
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2.5">
            {([
              { id: 'Bike' as const, sub: 'Quick & Affordable' },
              { id: 'Auto' as const, sub: 'Convenient' },
              { id: 'Cab' as const, sub: 'Comfortable' },
            ]).map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-xl p-2.5 border text-center transition shadow-sm cursor-pointer ${
                    active
                      ? 'bg-gradient-to-b from-[#FDE047] to-[#FBBF24] border-[#F59E0B] text-[#111318]'
                      : 'bg-white border-gray-200 hover:border-amber-300'
                  }`}
                >
                  <div className="flex justify-center mb-1">
                    <RealisticVehicleIcon type={cat.id} className="w-10 h-6" />
                  </div>
                  <div className="text-xs font-extrabold text-gray-900">{cat.id}</div>
                  <div className={`text-[10px] leading-tight ${active ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>
                    {cat.sub}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100 shadow-2xs">
            <button
              type="button"
              onClick={() => setPickingLocation('pickup')}
              className="w-full px-3.5 py-2.5 flex items-center justify-between text-left hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <MapPin size={17} weight="fill" className="text-emerald-600 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] text-gray-400">Pickup location</div>
                  <div className="text-xs font-semibold text-gray-900 truncate">{pickup}</div>
                </div>
              </div>
              <CaretRight size={15} weight="bold" className="text-gray-400 shrink-0" />
            </button>
            <button
              type="button"
              onClick={() => setPickingLocation('drop')}
              className="w-full px-3.5 py-2.5 flex items-center justify-between text-left hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <MapPin size={17} weight="fill" className="text-red-500 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] text-gray-400">Drop location</div>
                  <div className="text-xs font-semibold text-gray-900 truncate">{drop || 'Enter drop location'}</div>
                </div>
              </div>
              <CaretRight size={15} weight="bold" className="text-gray-400 shrink-0" />
            </button>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-gray-800">Nearby Vehicles</span>
              <button type="button" onClick={() => onNavigate('ChooseRide')} className="text-xs font-semibold text-amber-600 cursor-pointer">
                View All
              </button>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('ChooseRide')}
              className="w-full bg-white rounded-xl border border-gray-200 px-3.5 py-2.5 flex items-center justify-between hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <RealisticVehicleIcon type={selectedCategory} className="w-9 h-5" />
                <span className="text-xs font-bold text-gray-800">{selectedCategory}</span>
                <span className="text-xs text-gray-500">• 2 min away</span>
              </div>
              <CaretRight size={15} weight="bold" className="text-gray-400" />
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('ChooseRide')}
          className="w-full mt-3 py-3 rounded-full bg-[#FBBF24] hover:bg-amber-400 text-[#111318] font-bold text-sm shadow-sm flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
        >
          <span>Book Now</span>
          <ArrowRight size={15} weight="bold" />
        </button>
      </div>

      {pickingLocation && (
        <div className="absolute inset-0 z-30 bg-black/40 flex items-end">
          <div className="w-full bg-white rounded-t-3xl p-4 space-y-3 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-gray-900">
                Select {pickingLocation === 'pickup' ? 'Pickup' : 'Drop'} Location
              </h3>
              <button type="button" onClick={() => setPickingLocation(null)} className="p-1 text-gray-500 cursor-pointer" aria-label="Close">
                <X size={18} weight="bold" />
              </button>
            </div>
            <div className="relative">
              <MagnifyingGlass size={15} className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                autoFocus
                value={pickingLocation === 'pickup' ? pickup : drop}
                onChange={(e) => (pickingLocation === 'pickup' ? setPickup(e.target.value) : setDrop(e.target.value))}
                placeholder="Search Hyderabad area, landmark..."
                className="w-full pl-9 pr-3 py-2.5 text-xs border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-amber-400"
              />
            </div>
            <div className="space-y-1.5">
              {SAVED_PLACES.map((place) => (
                <button
                  key={place.id}
                  type="button"
                  onClick={() => {
                    if (pickingLocation === 'pickup') setPickup(place.address);
                    else setDrop(place.address);
                    setPickingLocation(null);
                  }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-amber-50 border border-gray-100 cursor-pointer"
                >
                  <div className="text-xs font-bold text-gray-900">{place.label}</div>
                  <div className="text-[11px] text-gray-500">{place.address}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
