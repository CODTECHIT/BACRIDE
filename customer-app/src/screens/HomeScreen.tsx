import React, { useState } from 'react';
import {
  Bell,
  CaretDown,
  CaretRight,
  Clock,
  Heart,
  MagnifyingGlass,
  MapPin,
  SquaresFour,
} from '@phosphor-icons/react';
import { AllServicesModal } from '../components/AllServicesModal';
import { BacrideBadgeLogo } from '../components/BacrideIcons';
import { getAsset } from '../utils/assets';
import type { CustomerRouteName } from '../navigation/types';

interface HomeScreenProps {
  onNavigate: (route: CustomerRouteName) => void;
  onOpenMenu: () => void;
  selectedCategory: 'Bike' | 'Auto' | 'Cab';
  setSelectedCategory: (cat: 'Bike' | 'Auto' | 'Cab') => void;
  pickup: string;
  setPickup: (val: string) => void;
  drop: string;
  setDrop: (val: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  pickup,
  setPickup,
  drop,
  setDrop,
  setSelectedCategory,
}) => {
  const [allServicesOpen, setAllServicesOpen] = useState(false);
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({
    chinni: true,
  });

  const toggleFavorite = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const recentLocations = [
    {
      id: 'lb_nagar',
      title: 'Metro Station L B Nagar',
      subtitle: 'Shivapuri Colony, L. B. Nagar, Hyderabad, Tel...',
      distance: '4 km',
      icon: Clock,
      favKey: 'lb_nagar',
    },
    {
      id: 'dental_care',
      title: 'Dental Care Clinic Hyderabad - Dr. Asif',
      subtitle: 'Inner Ring Road, Phisalbanda Banda, Hasnab...',
      distance: '5.5 km',
      icon: Clock,
      favKey: 'dental_care',
    },
    {
      id: 'chinni',
      title: 'chinni',
      subtitle: '5-5/35/332/13, Asbestos Colony, Kukatpally,...',
      distance: '23 km',
      icon: MapPin,
      favKey: 'chinni',
    },
  ];

  const handleSelectLocation = (locTitle: string) => {
    setDrop(locTitle);
    onNavigate('ChooseRide');
  };

  const handleSelectService = (serviceName: string) => {
    if (serviceName.toLowerCase().includes('parcel')) {
      onNavigate('Parcel');
    } else if (serviceName.toLowerCase().includes('shared') || serviceName.toLowerCase().includes('pool')) {
      onNavigate('AutoPool');
    } else {
      if (serviceName.toLowerCase().includes('auto')) {
        setSelectedCategory('Auto');
      } else if (serviceName.toLowerCase().includes('cab') || serviceName.toLowerCase().includes('car')) {
        setSelectedCategory('Cab');
      } else {
        setSelectedCategory('Bike');
      }
      onNavigate('ChooseRide');
    }
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#F9FAFB] relative overflow-hidden select-none">
      {/* Top Yellow Header with Street Texture & Address Bar */}
      <div className="bg-gradient-to-b from-[#FFAE2E] via-[#FFB800] to-[#FFC529] px-4 pt-3 pb-6 relative z-10 shrink-0 shadow-sm">
        {/* Street Map Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none bg-repeat"
          style={{
            backgroundImage: `radial-gradient(#111318 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />

        {/* Top Address Pill */}
        <div className="relative z-10 max-w-sm mx-auto">
          <button
            type="button"
            onClick={() => {
              const newAddress = prompt('Update current pickup location:', pickup);
              if (newAddress) setPickup(newAddress);
            }}
            className="w-full bg-white/95 backdrop-blur-md rounded-full px-3.5 py-1.5 flex items-center justify-between text-xs text-gray-900 shadow-sm border border-white/80 cursor-pointer hover:bg-white transition-all"
          >
            <div className="flex items-center gap-1.5 truncate pr-2">
              <MapPin size={15} weight="fill" className="text-gray-950 shrink-0" />
              <span className="font-bold truncate text-[11px]">{pickup}</span>
            </div>
            <CaretDown size={14} weight="bold" className="text-gray-600 shrink-0" />
          </button>
        </div>

        {/* Brand Bar with Bacride Logo and Glowing Center Pin */}
        <div className="relative z-10 flex items-center justify-between mt-3 px-1">
          {/* Bacride Logo with Scooter */}
          <div className="flex items-center gap-2">
            <BacrideBadgeLogo className="w-10 h-7" />
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tight text-[#111318] leading-none">
                Bac<span className="text-[#111318]">ride</span>
              </span>
              <div className="w-14 h-0.5 bg-[#111318] rounded-full mt-0.5" />
            </div>
          </div>

          {/* Glowing Center Pin Halo */}
          <div className="relative flex items-center justify-center">
            <div className="w-11 h-11 rounded-full bg-white/30 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 shadow-md flex items-center justify-center">
                <MapPin size={18} weight="fill" className="text-[#111318]" />
              </div>
            </div>
          </div>

          {/* Notification Bell */}
          <button
            type="button"
            onClick={() => onNavigate('Notifications')}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-[#111318] relative cursor-pointer transition-colors"
            aria-label="Notifications"
          >
            <Bell size={20} weight="bold" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-600 ring-2 ring-[#FFAE2E]" />
          </button>
        </div>
      </div>

      {/* Main White Scrollable Container */}
      <div className="flex-1 min-h-0 bg-white rounded-t-[32px] -mt-3 relative z-20 shadow-xl overflow-y-auto thin-scroll pt-3 px-4 pb-8 space-y-5">
        {/* Drag handle */}
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-1" />

        {/* "Where do you want to go?" Search Bar */}
        <div
          onClick={() => onNavigate('ChooseRide')}
          className="bg-white border-2 border-[#FFAE2E] hover:border-[#F59E0B] rounded-full px-4 py-3 flex items-center gap-3 shadow-xs cursor-pointer transition-all group"
        >
          <MagnifyingGlass size={20} weight="bold" className="text-gray-950 group-hover:scale-110 transition-transform" />
          <span className="font-extrabold text-sm text-gray-900 flex-1 truncate">
            Where do you want to go?
          </span>
        </div>

        {/* Recent Locations List (Rapido Style) */}
        <div className="space-y-1 divide-y divide-gray-100">
          {recentLocations.map((item) => {
            const Icon = item.icon;
            const isFav = !!favorites[item.favKey];
            return (
              <div
                key={item.id}
                onClick={() => handleSelectLocation(item.title)}
                className="pt-2.5 pb-2.5 flex items-center justify-between gap-3 hover:bg-gray-50/80 -mx-2 px-2 rounded-xl cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex flex-col items-center justify-center shrink-0 w-8">
                    <Icon size={18} weight="bold" className="text-gray-600" />
                    <span className="text-[10px] font-bold text-gray-400 mt-0.5 leading-none">{item.distance}</span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-black text-xs text-gray-900 truncate leading-snug">{item.title}</h4>
                    <p className="text-[11px] text-gray-500 truncate leading-snug mt-0.5">{item.subtitle}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => toggleFavorite(item.favKey, e)}
                  className="p-1 text-gray-400 hover:text-amber-500 cursor-pointer shrink-0 transition-colors"
                  aria-label="Save to favorites"
                >
                  <Heart
                    size={18}
                    weight={isFav ? 'fill' : 'regular'}
                    className={isFav ? 'text-[#FFAE2E]' : 'text-gray-600'}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* Section: Everything In Minutes */}
        <div className="space-y-3 pt-2">
          <h2 className="text-base font-black text-gray-900 tracking-tight">Everything In Minutes</h2>

          {/* Full-width Parcel Banner Card */}
          <div
            onClick={() => onNavigate('Parcel')}
            className="group relative bg-gradient-to-r from-[#FFFBEB] via-[#FFF8E7] to-[#FEF3C7] border border-[#FDE68A] hover:border-[#FFAE2E] rounded-3xl p-4 flex items-center justify-between shadow-2xs hover:shadow-xs transition-all cursor-pointer overflow-hidden"
          >
            <div className="space-y-0.5 z-10">
              <span className="text-xs font-semibold text-gray-600 block">Send anything</span>
              <h3 className="text-2xl font-black text-gray-900 tracking-tight">Parcel</h3>
            </div>

            <div className="w-28 h-20 flex items-center justify-center relative z-10">
              <img
                src={getAsset('assets/parcel.png')}
                alt="Parcel Delivery"
                className="max-h-20 max-w-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-tl from-[#FFAE2E]/25 to-transparent rounded-full pointer-events-none" />
          </div>

          {/* 2 Side-by-side Cards: Scooty and All Services */}
          <div className="grid grid-cols-2 gap-3">
            {/* Scooty Card */}
            <div
              onClick={() => {
                setSelectedCategory('Bike');
                onNavigate('ChooseRide');
              }}
              className="group relative bg-gradient-to-b from-[#FFFBEB] to-[#FEF3C7] border border-[#FDE68A] hover:border-[#FFAE2E] rounded-3xl p-3.5 flex flex-col justify-between h-44 shadow-2xs hover:shadow-xs transition-all cursor-pointer overflow-hidden"
            >
              <div>
                <span className="text-[11px] font-semibold text-gray-600 leading-tight block">
                  Spacious and comfortable
                </span>
                <h3 className="text-xl font-black text-gray-900 mt-0.5 tracking-tight">Scooty</h3>
              </div>

              <div className="w-full h-24 flex items-center justify-center my-1 relative z-10">
                <img
                  src={getAsset('assets/scooty.png')}
                  alt="Scooty"
                  className="max-h-24 max-w-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-tl from-[#FFAE2E]/25 to-transparent rounded-full pointer-events-none" />
            </div>

            {/* All Services Card */}
            <div
              onClick={() => setAllServicesOpen(true)}
              className="group relative bg-gradient-to-b from-[#FFFBEB] to-[#FEF3C7] border border-[#FDE68A] hover:border-[#FFAE2E] rounded-3xl p-3.5 flex flex-col justify-between h-44 shadow-2xs hover:shadow-xs transition-all cursor-pointer overflow-hidden"
            >
              <div>
                <span className="text-xl font-black text-gray-900 block leading-tight">All</span>
                <span className="text-xl font-black text-gray-900 block leading-tight">Services</span>
              </div>

              {/* 4 Rounded Squares Icon matching Image 1 (3 dark, 1 yellow) */}
              <div className="w-full flex items-center justify-center my-3 relative z-10">
                <div className="grid grid-cols-2 gap-1.5 p-2 bg-white/70 backdrop-blur-xs rounded-2xl border border-amber-200/60 shadow-2xs group-hover:scale-110 transition-transform">
                  <div className="w-5 h-5 rounded-md bg-[#111318]" />
                  <div className="w-5 h-5 rounded-md bg-[#FFAE2E]" />
                  <div className="w-5 h-5 rounded-md bg-[#111318]" />
                  <div className="w-5 h-5 rounded-md bg-[#111318]" />
                </div>
              </div>

              <div className="text-[11px] font-bold text-amber-800 flex items-center justify-between">
                <span>View 9 Services</span>
                <CaretRight size={13} weight="bold" />
              </div>

              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-tl from-[#FFAE2E]/25 to-transparent rounded-full pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Section: Explore (with View All) */}
        <div className="space-y-2.5 pt-2">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-black text-gray-900 tracking-tight">Explore</h2>
            <button
              type="button"
              onClick={() => setAllServicesOpen(true)}
              className="text-xs font-black text-gray-900 hover:text-amber-600 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>View All</span>
              <CaretRight size={14} weight="bold" />
            </button>
          </div>

          {/* Horizontal Service Cards Row */}
          <div className="flex gap-3 overflow-x-auto thin-scroll pb-2 -mx-4 px-4">
            {[
              { id: 'parcel', name: 'Parcel on Bike', image: getAsset('assets/parcel.png'), route: 'Parcel' as const },
              { id: 'scooty', name: 'Scooty', image: getAsset('assets/scooty.png'), category: 'Bike' as const },
              { id: 'bike', name: 'Bike', image: getAsset('assets/bike.png'), category: 'Bike' as const },
              { id: 'auto', name: 'Auto', image: getAsset('assets/auto.png'), category: 'Auto' as const },
              { id: 'cab', name: 'Cab', image: getAsset('assets/car.png'), category: 'Cab' as const },
              { id: 'shared', name: 'Shared Auto', image: getAsset('assets/auto_for_3people.png'), route: 'AutoPool' as const },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  if ('route' in item && item.route) {
                    onNavigate(item.route);
                  } else if ('category' in item && item.category) {
                    setSelectedCategory(item.category);
                    onNavigate('ChooseRide');
                  }
                }}
                className="group shrink-0 w-24 bg-[#FFF9EB] hover:bg-[#FFF3D6] border border-[#FFE8B3] rounded-2xl p-2.5 flex flex-col items-center justify-between text-center transition-all cursor-pointer shadow-2xs hover:shadow-xs hover:scale-105"
              >
                <div className="w-16 h-14 flex items-center justify-center my-0.5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-14 max-w-full object-contain drop-shadow-2xs group-hover:scale-110 transition-transform"
                    loading="lazy"
                  />
                </div>
                <span className="text-[11px] font-black text-gray-900 leading-tight truncate w-full mt-1">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Promo Banner: QUICKEST PICK-UPS @ lowest prices! */}
        <div className="relative rounded-3xl overflow-hidden shadow-sm border border-amber-200">
          <div className="bg-gradient-to-r from-[#FFAE2E] via-[#FFB800] to-[#111318] p-4 flex items-center justify-between min-h-[96px]">
            <div className="space-y-0.5 max-w-[190px] z-10">
              <span className="text-xs font-black uppercase text-[#111318] tracking-wider block">
                QUICKEST PICK-UPS
              </span>
              <span className="text-base font-black text-[#111318] leading-tight block">
                @ <span className="underline decoration-black">lowest prices!</span>
              </span>
              <span className="text-[10px] font-extrabold text-[#111318]/90 block pt-0.5">
                Riders at your doorstep in under 3 mins
              </span>
            </div>

            <div className="w-24 h-20 shrink-0 flex items-center justify-center relative z-10 -mr-1">
              <img
                src={getAsset('assets/hero-rider.png')}
                alt="Bacride Pickups"
                className="max-h-20 max-w-full object-contain drop-shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Footer Illustration Section (matching Image 2) */}
        <div className="pt-4 pb-2 space-y-3">
          {/* Footer Line-art Illustration */}
          <div className="w-full rounded-2xl overflow-hidden bg-amber-50/40 p-1 flex items-center justify-center">
            <img
              src={getAsset('assets/footer.png')}
              alt="Bacride City Illustration"
              className="w-full object-contain max-h-48 drop-shadow-2xs"
              loading="lazy"
            />
          </div>

          {/* #goBacride and Made in India tags */}
          <div className="text-center space-y-1.5 pt-1">
            <div className="flex items-center justify-center gap-1">
              <span className="font-display font-black text-2xl text-[#111318]">#go</span>
              <span className="font-display font-black text-2xl text-[#FFAE2E]">Bacride</span>
              <div className="w-12 h-1 bg-[#FFAE2E] rounded-full self-end mb-1 ml-1" />
            </div>

            <div className="flex items-center justify-center gap-3 text-xs font-bold text-gray-600">
              <span className="flex items-center gap-1">
                <span>🇮🇳</span>
                <span>Made for India</span>
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1">
                <span>❤️</span>
                <span>Crafted with pride</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* All Services Slide-up Modal */}
      <AllServicesModal
        isOpen={allServicesOpen}
        onClose={() => setAllServicesOpen(false)}
        onSelectService={handleSelectService}
      />
    </div>
  );
};
