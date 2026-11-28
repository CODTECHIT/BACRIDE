import React from 'react';
import { Crown, Lightning, Percent, Users, X } from '@phosphor-icons/react';
import { BacrideBadgeLogo } from './BacrideIcons';
import { getAsset } from '../utils/assets';

interface AllServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export const AllServicesModal: React.FC<AllServicesModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
}) => {
  if (!isOpen) return null;

  const services = [
    {
      id: 'parcel',
      name: 'Parcel on Bike',
      image: getAsset('assets/parcel.png'),
      badge: null,
      type: 'parcel',
    },
    {
      id: 'scooty',
      name: 'Scooty',
      image: getAsset('assets/scooty.png'),
      badge: null,
      type: 'ride',
    },
    {
      id: 'bike',
      name: 'Bike',
      image: getAsset('assets/bike.png'),
      badge: null,
      type: 'ride',
    },
    {
      id: 'cab_non_ac',
      name: 'Cab Non AC',
      image: getAsset('assets/car.png'),
      badge: null,
      type: 'ride',
    },
    {
      id: 'auto',
      name: 'Auto',
      image: getAsset('assets/auto.png'),
      badge: null,
      type: 'ride',
    },
    {
      id: 'cab_premium',
      name: 'Cab Premium',
      image: getAsset('assets/ac_car.png'),
      badge: {
        icon: Crown,
        bgColor: 'bg-amber-400',
        textColor: 'text-amber-950',
      },
      type: 'ride',
    },
    {
      id: 'bike_lite',
      name: 'Bike Lite',
      image: getAsset('assets/bike_on_discount.png'),
      badge: {
        icon: Percent,
        bgColor: 'bg-emerald-500',
        textColor: 'text-white',
      },
      type: 'ride',
    },
    {
      id: 'shared_auto',
      name: 'Shared Auto',
      image: getAsset('assets/auto_for_3people.png'),
      badge: {
        icon: Users,
        bgColor: 'bg-indigo-600',
        textColor: 'text-white',
      },
      type: 'autopool',
    },
    {
      id: 'cab_ac_priority',
      name: 'Cab AC Priority',
      image: getAsset('assets/ac_car.png'),
      badge: {
        icon: Lightning,
        bgColor: 'bg-amber-500',
        textColor: 'text-white',
      },
      type: 'ride',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in">
      {/* Backdrop tap to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Sheet */}
      <div className="relative w-full sm:max-w-[440px] bg-white rounded-t-[32px] sm:rounded-3xl p-5 shadow-2xl z-10 max-h-[92vh] flex flex-col overflow-hidden animate-slide-up">
        {/* Drag handle */}
        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-3 shrink-0" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <BacrideBadgeLogo className="w-8 h-6" />
              <span className="text-lg font-black tracking-tight text-[#111318]">
                Bac<span className="text-[#FFAE2E]">ride</span>
              </span>
            </div>
            <div className="h-5 w-px bg-gray-300" />
            <h2 className="text-lg font-black text-gray-900 tracking-tight">All Services</h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center cursor-pointer transition-colors shadow-2xs"
            aria-label="Close"
          >
            <X size={18} weight="bold" />
          </button>
        </div>

        {/* 3x3 Services Grid */}
        <div className="grid grid-cols-3 gap-3 pt-4 pb-2 overflow-y-auto thin-scroll">
          {services.map((item) => {
            const BadgeIcon = item.badge?.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onSelectService(item.name);
                  onClose();
                }}
                className="group relative bg-[#FFF9EB] hover:bg-[#FFF3D6] border border-[#FFE8B3] hover:border-[#FFAE2E] rounded-2xl p-2.5 flex flex-col items-center justify-between text-center transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md hover:scale-[1.03] overflow-hidden"
              >
                {/* Optional corner badge */}
                {item.badge && BadgeIcon && (
                  <div
                    className={`absolute top-1.5 right-1.5 w-5 h-5 rounded-full ${item.badge.bgColor} ${item.badge.textColor} flex items-center justify-center shadow-xs z-10`}
                  >
                    <BadgeIcon size={12} weight="bold" />
                  </div>
                )}

                {/* Vehicle Image */}
                <div className="w-full h-16 flex items-center justify-center my-1 relative z-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-16 max-w-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>

                {/* Service Name */}
                <span className="text-[11px] font-black text-gray-900 leading-tight line-clamp-2 mt-1">
                  {item.name}
                </span>

                {/* Subtle yellow gradient glow at bottom corner matching reference */}
                <div className="absolute -bottom-6 -right-6 w-14 h-14 bg-gradient-to-tl from-[#FFAE2E]/30 to-transparent rounded-full pointer-events-none" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
