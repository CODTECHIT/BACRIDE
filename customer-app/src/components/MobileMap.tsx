import React from 'react';
import { NavigationArrow } from '@phosphor-icons/react';

export const MobileMap: React.FC<{
  variant: 'customer-home' | 'route-live';
  etaText?: string;
  distText?: string;
}> = ({ variant, etaText = 'Arriving in 4 min', distText = '1.2 km away' }) => {
  return (
    <div className="relative w-full h-full bg-[#EFF2F5] overflow-hidden select-none">
      <svg viewBox="0 0 340 240" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
        <rect width="340" height="240" fill="#EEF1F4" />
        <rect x="14" y="14" width="68" height="48" rx="12" fill="#DDEED8" />
        <rect x="242" y="132" width="84" height="60" rx="14" fill="#DDEED8" />
        <path d="M0 72 L340 52 M0 154 L340 168 M75 0 L62 240 M185 0 L195 240 M275 0 L265 240" stroke="#FFFFFF" strokeWidth="8.5" />
        <path d="M25 220 Q130 140 220 110 T330 35" stroke="#FFFFFF" strokeWidth="6.5" fill="none" />

        {variant === 'customer-home' && (
          <>
            {[
              [82, 74],
              [122, 128],
              [224, 72],
              [256, 118],
              [105, 168],
            ].map(([x, y], i) => (
              <g key={i} transform={`translate(${x}, ${y})`}>
                <circle r="11" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
                <circle cx="-3" cy="2" r="2.2" fill="#111827" />
                <circle cx="4" cy="2" r="2.2" fill="#111827" />
                <path d="M-3 0 L0 -4 H4" stroke="#F59E0B" strokeWidth="2" fill="none" />
              </g>
            ))}
            {/* Center User Pin */}
            <g transform="translate(172, 112)">
              <circle r="24" fill="#3B82F6" fillOpacity="0.16" />
              <circle r="14" fill="#3B82F6" fillOpacity="0.22" />
              <path d="M0 -24 C-11 -24 -17 -15 -17 -6 C-17 8 0 22 0 22 C0 22 17 8 17 -6 C17 -15 11 -24 0 -24 Z" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2.5" />
              <circle cy="-7" r="5" fill="#111827" />
            </g>
          </>
        )}

        {variant === 'route-live' && (
          <>
            {/* Orange-yellow curved route matching costumerUI.jpeg Screen 5 */}
            <path d="M58 154 C96 144 122 86 164 74 C208 62 238 96 278 48" stroke="#F59E0B" strokeWidth="5.5" strokeLinecap="round" fill="none" />
            {/* Blue pickup origin dot */}
            <circle cx="58" cy="154" r="14" fill="#3B82F6" fillOpacity="0.18" />
            <circle cx="58" cy="154" r="6.5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2.5" />
            {/* Rider moving badge */}
            <g transform="translate(164, 74)">
              <circle r="14" fill="#111318" stroke="#FBBF24" strokeWidth="2.5" />
              <circle cx="-3.5" cy="3" r="2" fill="#FBBF24" />
              <circle cx="4" cy="3" r="2" fill="#FBBF24" />
              <path d="M-3 1 L0 -3 H4" stroke="#FFFFFF" strokeWidth="1.6" fill="none" />
            </g>
            {/* Red drop pin */}
            <g transform="translate(278, 48)">
              <path d="M0 -18 C-7 -18 -12 -12 -12 -5 C-12 5 0 14 0 14 C0 14 12 5 12 -5 C12 -12 7 -18 0 -18 Z" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
              <circle cy="-6" r="3.5" fill="#FFFFFF" />
            </g>
          </>
        )}
      </svg>

      {variant === 'customer-home' && (
        <div className="absolute top-9 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-200 flex items-center gap-1.5 text-[11px] font-semibold text-gray-800 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          <span>Your Location</span>
        </div>
      )}

      {variant === 'route-live' && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-xl shadow-md border border-gray-100 flex items-center gap-2.5 whitespace-nowrap">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <div className="text-left">
            <div className="text-xs font-bold text-gray-900 leading-tight">{etaText}</div>
            <div className="text-[10px] text-gray-500 leading-tight">{distText}</div>
          </div>
        </div>
      )}

      <button
        type="button"
        className={`absolute right-3 w-8 h-8 bg-white rounded-full shadow border border-gray-200 flex items-center justify-center text-gray-700 ${
          variant === 'customer-home' ? 'bottom-10' : 'bottom-3'
        }`}
        aria-label="Recenter map"
      >
        <NavigationArrow size={15} weight="fill" />
      </button>
    </div>
  );
};
