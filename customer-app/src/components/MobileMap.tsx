import React from 'react';
import { NavigationArrow } from '@phosphor-icons/react';

export const MobileMap: React.FC<{
  variant: 'customer-home' | 'route-live';
  etaText?: string;
  distText?: string;
}> = ({ variant, etaText = 'Arriving in 4 min', distText = '1.2 km away' }) => {
  return (
    <div className="relative w-full h-full bg-[#EBF0F5] overflow-hidden select-none">
      <svg viewBox="0 0 380 300" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" aria-label="City Map">
        {/* Base Map Canvas */}
        <rect width="380" height="300" fill="#EDF1F5" />

        {/* Green Parks / Botanical Gardens */}
        <path d="M10 18 Q60 10 95 38 T120 95 L65 110 Q20 90 10 50 Z" fill="#DCEDD8" />
        <path d="M265 150 Q330 130 365 175 T355 260 L285 240 Q255 190 265 150 Z" fill="#E0EEDC" />
        <path d="M15 195 Q75 180 110 230 T80 290 L20 280 Z" fill="#DCEDD8" />

        {/* Lake / Water Body (Hussain Sagar corner) */}
        <path d="M280 10 Q325 35 340 75 T380 95 L380 0 L270 0 Z" fill="#A5D4F5" opacity="0.8" />
        <text x="330" y="38" fontSize="8" fontWeight="700" fill="#1C659E" opacity="0.75" letterSpacing="0.5">
          HUSSAIN SAGAR
        </text>

        {/* City Street Grid - Major Highways with Golden Expressways */}
        <path d="M-10 85 L390 75 M-10 175 L390 185 M-10 245 L390 235" stroke="#FFFFFF" strokeWidth="12" />
        <path d="M-10 85 L390 75 M-10 175 L390 185" stroke="#FDE047" strokeWidth="4.5" />

        {/* Vertical Avenues */}
        <path d="M85 -10 L75 310 M195 -10 L200 310 M295 -10 L285 310" stroke="#FFFFFF" strokeWidth="11" />
        <path d="M195 -10 L200 310" stroke="#FDE047" strokeWidth="4" />

        {/* Diagonal Arterial Connectors */}
        <path d="M25 270 Q145 180 235 140 T365 50" stroke="#FFFFFF" strokeWidth="9" fill="none" />
        <path d="M10 40 Q130 110 220 180 T370 270" stroke="#FFFFFF" strokeWidth="7" fill="none" />
        <path d="M130 10 L290 290" stroke="#FFFFFF" strokeWidth="6" />

        {/* Subtle Area Neighborhood Labels */}
        <g fontSize="8.5" fontWeight="700" fill="#6B7280" opacity="0.65" letterSpacing="0.8">
          <text x="35" y="45">KONDAPUR</text>
          <text x="125" y="65">HITEC CITY</text>
          <text x="215" y="115">MADHAPUR</text>
          <text x="45" y="225">GACHIBOWLI</text>
          <text x="220" y="265">JUBILEE HILLS</text>
        </g>

        {variant === 'customer-home' && (
          <>
            {/* Nearby Vehicles around the user */}
            {[
              { x: 95, y: 78, angle: 15 },
              { x: 145, y: 148, angle: -20 },
              { x: 250, y: 80, angle: 45 },
              { x: 275, y: 135, angle: -10 },
              { x: 125, y: 195, angle: 30 },
              { x: 235, y: 220, angle: -35 },
            ].map((v, i) => (
              <g key={i} transform={`translate(${v.x}, ${v.y})`}>
                {/* Vehicle shadow */}
                <circle r="12" fill="#000000" fillOpacity="0.08" cy="1" />
                {/* White vehicle bubble */}
                <circle r="11.5" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.2" />
                {/* Yellow accent inner halo */}
                <circle r="9.5" fill="#FEF3C7" fillOpacity="0.6" />
                {/* Scooter mark */}
                <circle cx="-3.2" cy="2.2" r="2.2" fill="#111827" />
                <circle cx="3.8" cy="2.2" r="2.2" fill="#111827" />
                <path d="M-3 0.5 L0 -3.5 H3.5" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <circle cx="0.5" cy="-2.5" r="1.2" fill="#111827" />
              </g>
            ))}

            {/* Center User Location Radar Waves */}
            <g transform="translate(195, 138)">
              <circle r="36" fill="#3B82F6" fillOpacity="0.10" />
              <circle r="22" fill="#3B82F6" fillOpacity="0.18" />
              <circle r="10" fill="#3B82F6" fillOpacity="0.28" />

              {/* Large Amber Pin Drop matching costumerUI.jpeg */}
              <path
                d="M0 -30 C-14 -30 -21 -19 -21 -8 C-21 9 0 26 0 26 C0 26 21 9 21 -8 C21 -19 14 -30 0 -30 Z"
                fill="#F59E0B"
                stroke="#FFFFFF"
                strokeWidth="3"
                filter="drop-shadow(0px 3px 6px rgba(0,0,0,0.18))"
              />
              <circle cy="-9" r="6" fill="#111827" />
            </g>
          </>
        )}

        {variant === 'route-live' && (
          <>
            {/* Orange-yellow curved route matching costumerUI.jpeg Screen 5 */}
            <path d="M65 175 C105 160 135 95 180 80 C228 66 260 105 305 52" stroke="#FFAE2E" strokeWidth="6" strokeLinecap="round" fill="none" />
            {/* Blue pickup origin dot */}
            <circle cx="65" cy="175" r="16" fill="#3B82F6" fillOpacity="0.18" />
            <circle cx="65" cy="175" r="7.5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="3" />
            {/* Rider moving badge */}
            <g transform="translate(180, 80)">
              <circle r="15" fill="#111318" stroke="#FFAE2E" strokeWidth="3" />
              <circle cx="-4" cy="3" r="2.2" fill="#FFAE2E" />
              <circle cx="4" cy="3" r="2.2" fill="#FFAE2E" />
              <path d="M-3.5 1 L0 -3.5 H4" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
            </g>
            {/* Red drop pin */}
            <g transform="translate(305, 52)">
              <path d="M0 -20 C-8 -20 -13 -13 -13 -6 C-13 6 0 16 0 16 C0 16 13 6 13 -6 C13 -13 8 -20 0 -20 Z" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2.5" />
              <circle cy="-7" r="4" fill="#FFFFFF" />
            </g>
          </>
        )}
      </svg>

      {/* Floating "Your Location" Badge */}
      {variant === 'customer-home' && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-gray-200/90 flex items-center gap-2 text-xs font-bold text-gray-800 whitespace-nowrap z-10">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 ring-2 ring-blue-100" />
          <span>Your Location</span>
        </div>
      )}

      {variant === 'route-live' && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4.5 py-2 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2.5 whitespace-nowrap z-10">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-emerald-100" />
          <div className="text-left">
            <div className="text-xs font-extrabold text-gray-900 leading-tight">{etaText}</div>
            <div className="text-[10px] text-gray-500 font-medium leading-tight">{distText}</div>
          </div>
        </div>
      )}

      {/* Recenter / Compass Button */}
      <button
        type="button"
        className={`absolute right-3.5 w-9 h-9 bg-white/95 backdrop-blur-md rounded-full shadow-md border border-gray-200 flex items-center justify-center text-gray-800 hover:bg-gray-50 active:scale-95 transition cursor-pointer z-10 ${
          variant === 'customer-home' ? 'bottom-11' : 'bottom-4'
        }`}
        aria-label="Recenter map"
      >
        <NavigationArrow size={17} weight="fill" className="text-gray-800" />
      </button>
    </div>
  );
};
