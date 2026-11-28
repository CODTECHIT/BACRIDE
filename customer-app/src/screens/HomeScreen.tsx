import React, { useState } from 'react';
import {
  Bell,
  CaretDown,
  CaretRight,
  Clock,
  Heart,
  MagnifyingGlass,
  MapPin,
  Sparkle,
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

          {/* Full-width Parcel Banner Card with Dynamic Background & Sunburst Glow */}
          <div
            onClick={() => onNavigate('Parcel')}
            className="group relative bg-gradient-to-br from-[#FFFDF5] via-[#FFF3D1] to-[#FDE494] border-2 border-[#FCD34D] hover:border-[#FFAE2E] rounded-3xl p-4 flex items-center justify-between shadow-[0_4px_20px_rgba(255,174,46,0.14)] hover:shadow-md transition-all cursor-pointer overflow-hidden"
          >
            {/* Background layered radial sunburst and glow */}
            <div className="absolute -right-4 -bottom-4 w-40 h-40 bg-gradient-to-tr from-[#FFAE2E]/45 via-[#FFC554]/30 to-transparent rounded-full blur-xl pointer-events-none" />
            <div className="absolute right-20 top-2 w-16 h-16 bg-[#FFAE2E]/15 rounded-full blur-md pointer-events-none" />

            {/* Geometric speed dashes accent SVG matching reference */}
            <svg
              className="absolute right-28 top-3 w-10 h-8 pointer-events-none text-amber-500/60"
              viewBox="0 0 40 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="8" y1="6" x2="2" y2="12" />
              <line x1="18" y1="4" x2="16" y2="12" />
              <line x1="28" y1="8" x2="32" y2="15" />
            </svg>

            {/* Subtle background curved wave */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <path d="M0 40 Q 50 70, 100 20 L 100 100 L 0 100 Z" fill="#FFAE2E" />
            </svg>

            <div className="space-y-1 z-10 max-w-[55%]">
              <span className="text-[11px] font-bold text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded-full inline-block">
                Express Courier
              </span>
              <span className="text-xs font-semibold text-gray-700 block pt-0.5">Send anything</span>
              <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-none">Parcel</h3>
              <p className="text-[10px] text-gray-600 font-medium pt-0.5">Doorstep pickup in 15 mins</p>
            </div>

            <div className="w-28 h-22 flex items-center justify-center relative z-10 shrink-0">
              <img
                src={getAsset('assets/parcel.png')}
                alt="Parcel Delivery"
                className="max-h-22 max-w-full object-contain drop-shadow-md group-hover:scale-108 transition-transform"
                loading="lazy"
              />
            </div>
          </div>

          {/* 2 Side-by-side Cards: Scooty and All Services */}
          <div className="grid grid-cols-2 gap-3">
            {/* Scooty Card with Road Wave & Radial Pedestal Glow */}
            <div
              onClick={() => {
                setSelectedCategory('Bike');
                onNavigate('ChooseRide');
              }}
              className="group relative bg-gradient-to-b from-[#FFFDF7] via-[#FFF6DC] to-[#FDE8A8] border-2 border-[#FCD34D] hover:border-[#FFAE2E] rounded-3xl p-3.5 flex flex-col justify-between h-46 shadow-[0_4px_16px_rgba(255,174,46,0.12)] hover:shadow-md transition-all cursor-pointer overflow-hidden"
            >
              {/* Golden road curve sweeping in bottom */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path d="M0 65 Q 40 40, 100 68 L 100 100 L 0 100 Z" fill="#FFAE2E" />
              </svg>

              {/* Wheel glow pedestal */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-28 h-10 bg-[#FFAE2E]/35 rounded-full blur-md pointer-events-none" />

              <div className="z-10">
                <span className="text-[11px] font-semibold text-gray-600 leading-tight block">
                  Spacious and comfortable
                </span>
                <h3 className="text-xl font-black text-gray-900 mt-0.5 tracking-tight">Scooty</h3>
              </div>

              <div className="w-full h-26 flex items-center justify-center my-1 relative z-10">
                <img
                  src={getAsset('assets/scooty.png')}
                  alt="Scooty"
                  className="max-h-26 max-w-full object-contain drop-shadow-md group-hover:scale-108 transition-transform"
                  loading="lazy"
                />
              </div>

              <div className="z-10 flex items-center justify-between text-[10px] font-bold text-amber-900">
                <span>Fast &amp; Easy</span>
                <span className="bg-amber-200/80 px-1.5 py-0.5 rounded-md">From ₹35</span>
              </div>
            </div>

            {/* All Services Card with Dynamic Grid Pedestal & Swirl */}
            <div
              onClick={() => setAllServicesOpen(true)}
              className="group relative bg-gradient-to-b from-[#FFFDF7] via-[#FFF6DC] to-[#FDE8A8] border-2 border-[#FCD34D] hover:border-[#FFAE2E] rounded-3xl p-3.5 flex flex-col justify-between h-46 shadow-[0_4px_16px_rgba(255,174,46,0.12)] hover:shadow-md transition-all cursor-pointer overflow-hidden"
            >
              {/* Subtle dotted matrix texture in background */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none bg-repeat"
                style={{
                  backgroundImage: `radial-gradient(#FFAE2E 1.5px, transparent 1.5px)`,
                  backgroundSize: '10px 10px',
                }}
              />

              {/* Organic golden corner wave */}
              <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-gradient-to-tl from-[#FFAE2E]/45 via-[#FFC554]/25 to-transparent rounded-full pointer-events-none" />

              <div className="z-10">
                <span className="text-xl font-black text-gray-900 block leading-tight">All</span>
                <span className="text-xl font-black text-gray-900 block leading-tight">Services</span>
              </div>

              {/* 4 Rounded Squares on Elevated Pedestal */}
              <div className="w-full flex items-center justify-center my-2 relative z-10">
                <div className="grid grid-cols-2 gap-2 p-2.5 bg-white/90 backdrop-blur-md rounded-2xl border border-amber-300 shadow-md group-hover:scale-110 group-hover:rotate-2 transition-transform">
                  <div className="w-5 h-5 rounded-md bg-[#111318]" />
                  <div className="w-5 h-5 rounded-md bg-[#FFAE2E] shadow-2xs" />
                  <div className="w-5 h-5 rounded-md bg-[#111318]" />
                  <div className="w-5 h-5 rounded-md bg-[#111318]" />
                </div>
              </div>

              <div className="z-10 text-[11px] font-black text-amber-950 flex items-center justify-between bg-white/70 backdrop-blur-xs py-1 px-2 rounded-xl border border-amber-200/60">
                <span>View 9 Services</span>
                <CaretRight size={13} weight="bold" />
              </div>
            </div>
          </div>
        </div>

        {/* Section: Explore (with View All, no scrollbar, and renamed to Parcel) */}
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

          {/* Horizontal Service Cards Row without scrollbar */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 select-none">
            {[
              { id: 'parcel', name: 'Parcel', image: getAsset('assets/parcel.png'), route: 'Parcel' as const },
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
                className="group shrink-0 w-24 bg-[#FFF9EB] hover:bg-[#FFF3D6] border border-[#FFE8B3] hover:border-[#FFAE2E] rounded-2xl p-2.5 flex flex-col items-center justify-between text-center transition-all cursor-pointer shadow-2xs hover:shadow-xs hover:scale-105"
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

        {/* Promo Banner: QUICKEST PICK-UPS @ lowest prices! with Generated Background Artwork */}
        <div
          onClick={() => onNavigate('ChooseRide')}
          className="group relative rounded-3xl overflow-hidden shadow-md border border-amber-300/80 min-h-[114px] cursor-pointer"
        >
          {/* High-res generated commercial background image */}
          <img
            src={getAsset('assets/quickest-pickups-bg.jpg')}
            alt="Quickest Pickups Promo"
            className="absolute inset-0 w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Dark-to-amber gradient overlay for clear contrast on copy */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111318]/95 via-[#111318]/75 via-55% to-transparent pointer-events-none" />

          {/* Banner content */}
          <div className="relative z-10 p-4 space-y-1 max-w-[62%]">
            <span className="text-[10px] font-black uppercase text-[#FFAE2E] tracking-wider block">
              QUICKEST PICK-UPS
            </span>
            <span className="text-base font-black text-white leading-tight block">
              @ <span className="underline decoration-[#FFAE2E] decoration-2">lowest prices!</span>
            </span>
            <span className="text-[11px] font-semibold text-gray-200 block pt-0.5 leading-snug">
              Riders at your doorstep in under 3 mins
            </span>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1 text-[10px] font-black bg-gradient-to-r from-[#FFAE2E] to-[#FFC554] text-[#111318] px-3 py-1 rounded-full shadow-xs group-hover:brightness-105 transition-all">
                <span>Book Ride</span>
                <CaretRight size={11} weight="bold" />
              </span>
            </div>
          </div>
        </div>

        {/* Footer: Full-bleed Edge-to-Edge Illustration only (no hashtags or duplicate text) */}
        <div className="-mx-4 -mb-8 mt-4 overflow-hidden rounded-b-[32px] border-t border-amber-100/60 bg-amber-50/20">
          <img
            src={getAsset('assets/footer.png')}
            alt="Bacride City Illustration"
            className="w-full h-auto object-cover object-bottom block"
            loading="lazy"
          />
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
