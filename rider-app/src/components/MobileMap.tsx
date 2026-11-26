import React from 'react';
import { Flame, NavigationArrow } from '@phosphor-icons/react';

export const RiderMobileMap: React.FC<{
  variant: 'route-live' | 'rider-heatmap';
  etaText?: string;
  distText?: string;
}> = ({ variant, etaText = 'Arrive in 4 min', distText = '1.2 km away' }) => {
  return (
    <div className="relative w-full h-full bg-[#EFF2F5] overflow-hidden select-none">
      <svg viewBox="0 0 340 240" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
        <rect width="340" height="240" fill="#EEF1F4" />
        <rect x="18" y="18" width="65" height="48" rx="10" fill="#DDEED8" />
        <rect x="240" y="140" width="80" height="58" rx="12" fill="#DDEED8" />
        <path d="M0 70 L340 50 M0 150 L340 165 M75 0 L62 240 M185 0 L195 240 M275 0 L265 240" stroke="#FFFFFF" strokeWidth="8" />
        <path d="M25 220 Q130 140 220 110 T330 35" stroke="#FFFFFF" strokeWidth="6" fill="none" />

        {variant === 'route-live' && (
          <>
            <path d="M62 152 C92 140 118 88 158 76 C202 64 232 95 278 52" stroke="#F59E0B" strokeWidth="5.5" strokeLinecap="round" fill="none" />
            <circle cx="62" cy="152" r="7" fill="#16A34A" stroke="#FFFFFF" strokeWidth="2.5" />
            <g transform="translate(158, 76)">
              <circle r="14" fill="#111318" stroke="#FBBF24" strokeWidth="2.5" />
              <circle cx="-3.5" cy="3" r="2" fill="#FBBF24" />
              <circle cx="4" cy="3" r="2" fill="#FBBF24" />
              <path d="M-3 1 L0 -3 H4" stroke="#FFFFFF" strokeWidth="1.6" fill="none" />
            </g>
            <g transform="translate(278, 52)">
              <path d="M0 -18 C-7 -18 -12 -12 -12 -5 C-12 5 0 14 0 14 C0 14 12 5 12 -5 C12 -12 7 -18 0 -18 Z" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
              <circle cy="-6" r="3.5" fill="#FFFFFF" />
            </g>
          </>
        )}

        {variant === 'rider-heatmap' && (
          <>
            <defs>
              <radialGradient id="heat1">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0.48" />
                <stop offset="55%" stopColor="#F59E0B" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="95" cy="155" r="56" fill="url(#heat1)" />
            <circle cx="245" cy="145" r="52" fill="url(#heat1)" />
            <circle cx="170" cy="82" r="48" fill="url(#heat1)" />
            <g transform="translate(170, 145)">
              <circle r="18" fill="#3B82F6" fillOpacity="0.2" />
              <circle r="7" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2.5" />
            </g>
          </>
        )}
      </svg>

      {variant === 'route-live' && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-white px-3.5 py-1.5 rounded-xl shadow-md border border-gray-100 flex items-center gap-2 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <div className="text-left">
            <div className="text-[11px] font-bold text-gray-900 leading-tight">{etaText}</div>
            <div className="text-[10px] text-gray-500 leading-tight">{distText}</div>
          </div>
        </div>
      )}

      {variant === 'rider-heatmap' && (
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-xl shadow-md border border-orange-100 flex items-center gap-1.5 whitespace-nowrap">
          <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
            <Flame size={13} weight="fill" />
          </span>
          <div className="text-left">
            <div className="text-[10px] font-bold text-gray-900 leading-tight">High Demand Area</div>
            <div className="text-[9px] font-semibold text-amber-600 leading-tight">+25% earning</div>
          </div>
        </div>
      )}

      <button
        type="button"
        className="absolute bottom-2.5 right-2.5 w-7 h-7 bg-white rounded-full shadow border border-gray-200 flex items-center justify-center text-gray-700"
        aria-label="Recenter map"
      >
        <NavigationArrow size={14} weight="fill" />
      </button>
    </div>
  );
};
