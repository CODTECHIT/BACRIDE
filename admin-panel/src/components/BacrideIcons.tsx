import React from 'react';
import { Package } from '@phosphor-icons/react';

export const BacrideSoloScooterMark: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 120 100" fill="none" className={className} aria-hidden="true">
    <line x1="8" y1="68" x2="24" y2="68" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="4" y1="74" x2="22" y2="74" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="12" y1="80" x2="24" y2="80" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M20 85H104" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="59" cy="19" r="7.5" fill="currentColor" />
    <path d="M51 19C51 13 57 10 63 12C67 14 68 18 66 21H51Z" fill="currentColor" />
    <path d="M52 29C47 35 48 45 55 50L65 58L65 70H72L72 54L62 44L77 39L77 34L64 34C60 30 55 28 52 29Z" fill="currentColor" />
    <path d="M27 56L35 50H54L60 56C64 60 72 62 77 56L79 44L74 32H83L89 48C93 53 96 58 98 63H89C85 57 77 57 73 63H47C43 57 35 57 31 63H24C25 60 26 58 27 56Z" fill="currentColor" />
    <path d="M74 32L71 25M74 32L84 31" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    <ellipse cx="70" cy="23" rx="3.5" ry="2.2" fill="currentColor" />
    <rect x="27" y="64" width="16" height="6" rx="3" fill="currentColor" />
    <circle cx="38" cy="73" r="10.5" stroke="currentColor" strokeWidth="5" />
    <circle cx="38" cy="73" r="3" fill="currentColor" />
    <circle cx="88" cy="73" r="10.5" stroke="currentColor" strokeWidth="5" />
    <circle cx="88" cy="73" r="3" fill="currentColor" />
  </svg>
);

export const BacrideBadgeLogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <div className={`rounded-full bg-[#ffae2e] flex items-center justify-center p-1 shadow-sm overflow-hidden ${className}`}>
    <img src={`${import.meta.env.BASE_URL}assets/bacride-logo-full.png`} alt="Bacride" className="w-[88%] h-[88%] object-contain" />
  </div>
);

export const CharminarSkyline: React.FC<{ className?: string }> = ({ className = 'w-full h-14' }) => (
  <svg viewBox="0 0 220 75" fill="none" className={className} aria-hidden="true">
    <path d="M10 70H210" stroke="#ffae2e" strokeWidth="1.5" strokeOpacity="0.6" />
    <rect x="20" y="42" width="14" height="28" fill="#ffae2e" fillOpacity="0.35" />
    <rect x="38" y="34" width="16" height="36" fill="#ffae2e" fillOpacity="0.45" />
    <path d="M56 70V46C56 40 66 40 66 46V70H56Z" fill="#ffae2e" fillOpacity="0.5" />
    <rect x="78" y="24" width="8" height="46" rx="1" fill="#ffae2e" />
    <circle cx="82" cy="20" r="4.5" fill="#ffae2e" />
    <rect x="134" y="24" width="8" height="46" rx="1" fill="#ffae2e" />
    <circle cx="138" cy="20" r="4.5" fill="#ffae2e" />
    <rect x="86" y="36" width="48" height="34" fill="#ffae2e" fillOpacity="0.85" />
    <path d="M98 70V50C98 44 122 44 122 50V70H98Z" fill="#111318" />
    <rect x="92" y="20" width="6" height="16" fill="#ffae2e" />
    <rect x="122" y="20" width="6" height="16" fill="#ffae2e" />
    <circle cx="95" cy="17" r="3" fill="#ffae2e" />
    <circle cx="125" cy="17" r="3" fill="#ffae2e" />
    <path d="M150 70V46C150 40 162 40 162 46V70H150Z" fill="#ffae2e" fillOpacity="0.5" />
    <rect x="166" y="36" width="16" height="34" fill="#ffae2e" fillOpacity="0.45" />
    <rect x="186" y="45" width="14" height="25" fill="#ffae2e" fillOpacity="0.35" />
  </svg>
);

export const RealisticVehicleIcon: React.FC<{
  type: 'Bike' | 'Auto' | 'Cab' | 'Mini' | 'Sedan' | 'SUV' | 'Parcel';
  className?: string;
}> = ({ type, className = 'w-6 h-4' }) => {
  if (type === 'Bike') {
    return (
      <svg viewBox="0 0 48 30" fill="none" className={className} aria-hidden="true">
        <circle cx="11" cy="21" r="6" fill="#1F2937" />
        <circle cx="11" cy="21" r="2.8" fill="#D1D5DB" />
        <circle cx="37" cy="21" r="6" fill="#1F2937" />
        <circle cx="37" cy="21" r="2.8" fill="#D1D5DB" />
        <path d="M8 16L13 11H23L27 16H31L29 7H34L39 17L42 19H33C31 16 28 16 26 19H15C13 16 10 16 8 16Z" fill="#F59E0B" stroke="#111827" strokeWidth="1.2" />
        <path d="M12 11C13 9 18 9 21 11H12Z" fill="#111827" />
      </svg>
    );
  }
  if (type === 'Auto') {
    return (
      <svg viewBox="0 0 48 30" fill="none" className={className} aria-hidden="true">
        <path d="M9 15V8C9 5 12 3.5 18 3.5H29C32 3.5 35 6 36 10L38 15H9Z" fill="#1F2937" />
        <path d="M26 5.5H31.5C33.2 5.5 34.5 7.5 35 11H26V5.5Z" fill="#93C5FD" />
        <path d="M8 14H39V21H8V14Z" fill="#FACC15" stroke="#111827" strokeWidth="1.2" />
        <path d="M8 17.5H39" stroke="#16A34A" strokeWidth="2.2" />
        <circle cx="14" cy="22" r="4.5" fill="#111827" />
        <circle cx="35" cy="22" r="4.5" fill="#111827" />
      </svg>
    );
  }
  if (type === 'Parcel') {
    return <Package weight="duotone" className={className} color="#D97706" />;
  }
  const bodyColor = type === 'SUV' ? '#374151' : type === 'Sedan' ? '#9CA3AF' : '#E5E7EB';
  return (
    <svg viewBox="0 0 48 30" fill="none" className={className} aria-hidden="true">
      <path d="M5 17L10 9.5C12 7.5 15 7 19 7H29C32 7 35 9.5 38 13L43 15.5V21H5V17Z" fill={bodyColor} stroke="#111827" strokeWidth="1.2" />
      <path d="M13 10H29L33 13.5H10.5L13 10Z" fill="#334155" />
      <circle cx="13" cy="21.5" r="4.5" fill="#111827" />
      <circle cx="35" cy="21.5" r="4.5" fill="#111827" />
    </svg>
  );
};
