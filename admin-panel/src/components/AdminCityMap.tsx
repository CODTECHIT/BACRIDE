import React from 'react';
import { Motorcycle, NavigationArrow, Package } from '@phosphor-icons/react';

export const AdminCityMap: React.FC<{
  mode?: 'dashboard' | 'dispatch';
  className?: string;
}> = ({ mode = 'dashboard', className = 'h-[310px]' }) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-xl border border-gray-200 bg-[#F3F5EC] select-none ${className}`}>
      <svg viewBox="0 0 760 400" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice" aria-label="Live Hyderabad Operations Map">
        <rect width="760" height="400" fill="#F4F5ED" />
        <path d="M40 40 Q120 20 180 75 T260 140 L180 180 Q90 150 40 95 Z" fill="#E3EED6" />
        <path d="M510 200 Q600 180 680 240 L720 340 Q600 360 510 310 Z" fill="#E3EED6" />
        <path d="M120 280 Q210 260 280 330 L240 390 L90 360 Z" fill="#E6EFD9" />

        <path d="M425 140 C445 126 476 135 485 158 C495 182 480 212 456 218 C432 224 415 205 415 180 C415 160 415 148 425 140 Z" fill="#8AC6F2" stroke="#68AFE4" strokeWidth="2" />
        <text x="450" y="182" textAnchor="middle" fontSize="10" fontWeight="600" fill="#1D6FA5" opacity="0.9">
          Hussain Sagar
        </text>

        <path d="M160 330 C280 315 390 300 495 318 C580 332 660 312 760 295" stroke="#9AD0F5" strokeWidth="10" fill="none" opacity="0.7" />
        <path d="M0 120 C160 110 320 95 490 120 C600 135 690 120 760 110" stroke="#ffae2e" strokeWidth="5.5" fill="none" />
        <path d="M0 245 C140 235 280 215 430 235 C560 250 670 235 760 225" stroke="#ffae2e" strokeWidth="5" fill="none" />
        <path d="M190 0 C205 110 215 240 240 400" stroke="#ffae2e" strokeWidth="5" fill="none" />
        <path d="M405 0 C415 130 410 250 435 400" stroke="#ffbe4d" strokeWidth="4.5" fill="none" />
        <path d="M580 0 C560 120 555 260 565 400" stroke="#ffae2e" strokeWidth="4.5" fill="none" />
        <path d="M60 60 L700 70 M30 180 L720 185 M50 300 L700 305 M110 20 L130 380 M310 15 L320 385 M500 20 L490 380 M660 25 L670 380" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.9" />
        <path d="M150 90 L380 210 M240 160 L450 280 M470 90 L640 200" stroke="#FFFFFF" strokeWidth="2" opacity="0.85" />

        <g fontSize="11" fontWeight="600" fill="#4B5563">
          <text x="205" y="42">Kukatpally</text>
          <text x="115" y="96">Miyapur</text>
          <text x="345" y="65">Begumpet</text>
          <text x="415" y="106">Ameerpet</text>
          <text x="580" y="96">Secunderabad</text>
          <text x="112" y="142">Kondapur</text>
          <text x="192" y="166">HITEC City</text>
          <text x="276" y="140">Madhapur</text>
          <text x="275" y="196">Jubilee Hills</text>
          <text x="95" y="216">Gachibowli</text>
          <text x="335" y="242">Banjara Hills</text>
          <text x="572" y="198">Habsiguda</text>
          <text x="642" y="242">Uppal</text>
          <text x="128" y="275">Kokapet</text>
          <text x="86" y="325">Manikonda</text>
          <text x="335" y="305">Khairatabad</text>
          <text x="428" y="296">Abids</text>
          <text x="525" y="328">Dilsukhnagar</text>
          <text x="615" y="370">LB Nagar</text>
          <text x="458" y="365">Charminar</text>
        </g>

        <text x="435" y="264" textAnchor="middle" fontSize="22" fontWeight="800" fill="#1F2937">
          Hyderabad
        </text>

        {mode === 'dashboard' ? (
          <>
            <g transform="translate(178, 108)">
              <circle r="15" fill="#16A34A" stroke="#FFFFFF" strokeWidth="2.5" />
              <path d="M-6 2 L-3 -3 H3 L6 2 V5 H-6 Z" fill="#FFFFFF" />
            </g>
            <g transform="translate(462, 162)">
              <circle r="14" fill="#16A34A" stroke="#FFFFFF" strokeWidth="2.5" />
              <path d="M-5 2 L-3 -3 H3 L5 2 V5 H-5 Z" fill="#FFFFFF" />
            </g>
            <g transform="translate(168, 326)">
              <circle r="14" fill="#16A34A" stroke="#FFFFFF" strokeWidth="2.5" />
              <path d="M-5 2 L-3 -3 H3 L5 2 V5 H-5 Z" fill="#FFFFFF" />
            </g>
            <g transform="translate(396, 82)">
              <circle r="15" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2.5" />
              <circle cx="-3" cy="3" r="2.2" fill="#111827" />
              <circle cx="4" cy="3" r="2.2" fill="#111827" />
              <path d="M-4 1 L0 -4 H4 L5 1" stroke="#111827" strokeWidth="1.6" fill="none" />
            </g>
            <g transform="translate(68, 224)">
              <circle r="14" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2.5" />
              <circle cx="-3" cy="3" r="2" fill="#111827" />
              <circle cx="4" cy="3" r="2" fill="#111827" />
            </g>
            <g transform="translate(384, 344)">
              <circle r="14" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2.5" />
              <circle cx="-3" cy="3" r="2" fill="#111827" />
              <circle cx="4" cy="3" r="2" fill="#111827" />
            </g>
            <g transform="translate(574, 246)">
              <circle r="14" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2.5" />
              <circle cx="-3" cy="3" r="2" fill="#111827" />
              <circle cx="4" cy="3" r="2" fill="#111827" />
            </g>
            <g transform="translate(232, 294)">
              <circle r="14" fill="#3B82F6" fillOpacity="0.22" />
              <circle r="7.5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2.5" />
            </g>
          </>
        ) : (
          <>
            <g transform="translate(360, 175)">
              <circle r="24" fill="#3B82F6" fillOpacity="0.16" />
              <path d="M0 -20 C-9 -20 -15 -13 -15 -5 C-15 6 0 18 0 18 C0 18 15 6 15 -5 C15 -13 9 -20 0 -20 Z" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2.5" />
              <circle cy="-6" r="4.5" fill="#FFFFFF" />
            </g>
            <g transform="translate(220, 120)">
              <circle r="13" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2" />
            </g>
            <g transform="translate(490, 225)">
              <circle r="13" fill="#16A34A" stroke="#FFFFFF" strokeWidth="2" />
            </g>
            <g transform="translate(290, 285)">
              <circle r="13" fill="#8B5CF6" stroke="#FFFFFF" strokeWidth="2" />
            </g>
          </>
        )}
      </svg>

      {mode === 'dashboard' && (
        <>
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs rounded-xl shadow-md border border-gray-100 p-3 w-44 space-y-2.5 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-white" />
              </span>
              <div>
                <div className="text-[11px] text-gray-500 leading-tight">Online Partners</div>
                <div className="font-bold text-gray-900 text-sm">7,932</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                <Motorcycle size={14} weight="duotone" />
              </span>
              <div>
                <div className="text-[11px] text-gray-500 leading-tight">Ongoing Rides</div>
                <div className="font-bold text-gray-900 text-sm">3,842</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                <Package size={14} weight="duotone" />
              </span>
              <div>
                <div className="text-[11px] text-gray-500 leading-tight">Ongoing Parcels</div>
                <div className="font-bold text-gray-900 text-sm">528</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs rounded-xl shadow-md border border-gray-100 px-3 py-2.5 text-[11px] space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-gray-700 font-medium">Partner Online</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="text-gray-700 font-medium">Ongoing Ride</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-500" />
              <span className="text-gray-700 font-medium">Parcel Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span className="text-gray-700 font-medium">Your Office (HQ)</span>
            </div>
          </div>

          <div className="absolute bottom-3 left-3 flex flex-col gap-1.5">
            <div className="bg-white rounded-lg shadow border border-gray-200 flex flex-col overflow-hidden text-gray-700 font-bold text-sm">
              <button type="button" className="w-7 h-7 hover:bg-gray-50 flex items-center justify-center border-b border-gray-100" aria-label="Zoom in">+</button>
              <button type="button" className="w-7 h-7 hover:bg-gray-50 flex items-center justify-center" aria-label="Zoom out">−</button>
            </div>
          </div>
          <button
            type="button"
            className="absolute bottom-3 left-12 w-7 h-7 bg-white rounded-lg shadow border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50"
            aria-label="Center map"
          >
            <NavigationArrow size={14} weight="fill" />
          </button>
        </>
      )}
    </div>
  );
};
