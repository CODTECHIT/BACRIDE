import React from 'react';
import { Package } from '@phosphor-icons/react';

/** Exact transparent Bacride scooter mark extracted from the official logo */
export const BacrideDualScooterMark: React.FC<{ className?: string }> = ({ className = 'w-10 h-8' }) => (
  <img
    src={`${import.meta.env.BASE_URL}assets/bacride-mark.png`}
    alt="Bacride scooter"
    className={`object-contain select-none ${className}`}
  />
);

/** Exact official Bacride full logo lockup (scooter + Bacride wordmark + arrow) */
export const BacrideLogoLockup: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClass = size === 'lg' ? 'w-36 h-36' : size === 'sm' ? 'w-16 h-16' : 'w-28 h-28';
  return (
    <img
      src={`${import.meta.env.BASE_URL}assets/bacride-logo-full.png`}
      alt="Bacride"
      className={`object-contain select-none ${sizeClass}`}
    />
  );
};

export const RealisticVehicleIcon: React.FC<{
  type: 'Bike' | 'Auto' | 'Cab' | 'Mini' | 'Sedan' | 'SUV' | 'Parcel';
  className?: string;
}> = ({ type, className = 'w-9 h-6' }) => {
  if (type === 'Bike') {
    return (
      <svg viewBox="0 0 48 30" fill="none" className={className} aria-hidden="true">
        <ellipse cx="24" cy="27" rx="18" ry="2" fill="#000000" fillOpacity="0.12" />
        <circle cx="11" cy="21" r="5.8" fill="#111827" />
        <circle cx="11" cy="21" r="2.6" fill="#E5E7EB" />
        <circle cx="37" cy="21" r="5.8" fill="#111827" />
        <circle cx="37" cy="21" r="2.6" fill="#E5E7EB" />
        <rect x="6" y="18" width="10" height="3" rx="1.5" fill="#4B5563" />
        <path d="M8 16L13 11H23L27 16H31L29 7H34L39 17L42 19H33C31 16 28 16 26 19H15C13 16 10 16 8 16Z" fill="#F59E0B" stroke="#111827" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M12 11C13 9 18 9 21 11H12Z" fill="#111827" />
        <path d="M29 7L27 4M29 7H35" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="35.5" cy="9.5" r="2" fill="#FEF08A" stroke="#111827" strokeWidth="1" />
      </svg>
    );
  }
  if (type === 'Auto') {
    return (
      <svg viewBox="0 0 48 30" fill="none" className={className} aria-hidden="true">
        <ellipse cx="24" cy="27" rx="18" ry="2" fill="#000000" fillOpacity="0.12" />
        <path d="M9 15V8C9 5 12 3.5 18 3.5H29C32 3.5 35 6 36 10L38 15H9Z" fill="#1F2937" />
        <path d="M26 5.5H31.5C33.2 5.5 34.5 7.5 35 11H26V5.5Z" fill="#93C5FD" />
        <path d="M8 14H39V21H8V14Z" fill="#FACC15" stroke="#111827" strokeWidth="1.2" />
        <path d="M8 17.5H39" stroke="#16A34A" strokeWidth="2.4" />
        <circle cx="14" cy="22" r="4.5" fill="#111827" />
        <circle cx="14" cy="22" r="1.8" fill="#E5E7EB" />
        <circle cx="35" cy="22" r="4.5" fill="#111827" />
        <circle cx="35" cy="22" r="1.8" fill="#E5E7EB" />
      </svg>
    );
  }
  if (type === 'Parcel') {
    return <Package weight="duotone" className={className} color="#D97706" />;
  }
  const bodyColor = type === 'SUV' ? '#374151' : type === 'Sedan' ? '#9CA3AF' : '#E5E7EB';
  return (
    <svg viewBox="0 0 48 30" fill="none" className={className} aria-hidden="true">
      <ellipse cx="24" cy="27" rx="19" ry="2" fill="#000000" fillOpacity="0.12" />
      <path
        d={
          type === 'SUV'
            ? 'M5 17L8 9C9.5 7 12 6 16 6H31C34 6 36 8 38 12L43 15V21H5V17Z'
            : type === 'Mini'
            ? 'M6 17L10 9C11.5 7 14 6.5 18 6.5H29C32 6.5 35 9 37 13L42 15V21H6V17Z'
            : 'M4 17L10 9.5C12 7.5 15 7 19 7H28C32 7 35 9.5 38 13L44 15.5V21H4V17Z'
        }
        fill={bodyColor}
        stroke="#111827"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M13 10H29L33 13.5H10.5L13 10Z" fill="#334155" />
      <circle cx="13" cy="21.5" r="4.5" fill="#111827" />
      <circle cx="13" cy="21.5" r="1.8" fill="#D1D5DB" />
      <circle cx="35" cy="21.5" r="4.5" fill="#111827" />
      <circle cx="35" cy="21.5" r="1.8" fill="#D1D5DB" />
      <rect x="40" y="16" width="3" height="2" rx="0.5" fill="#FEF08A" />
    </svg>
  );
};

export const ParcelBoxesIllustration: React.FC<{ className?: string }> = ({ className = 'w-28 h-22' }) => (
  <svg viewBox="0 0 140 110" fill="none" className={className} aria-hidden="true">
    <ellipse cx="74" cy="96" rx="54" ry="9" fill="#92400E" fillOpacity="0.16" />
    <g transform="translate(52, 8)">
      <polygon points="34,4 66,18 34,32 2,18" fill="#DFAA6D" stroke="#9A612B" strokeWidth="1" strokeLinejoin="round" />
      <polygon points="2,18 34,32 34,74 2,60" fill="#C48546" stroke="#9A612B" strokeWidth="1" strokeLinejoin="round" />
      <polygon points="34,32 66,18 66,60 34,74" fill="#A96E34" stroke="#9A612B" strokeWidth="1" strokeLinejoin="round" />
      <polygon points="16,12 24,8 56,22 48,26" fill="#8C5320" fillOpacity="0.72" />
      <polygon points="48,26 56,22 56,36 48,40" fill="#784418" fillOpacity="0.75" />
      <polygon points="40,39 58,31 58,43 40,51" fill="#FFFBEB" />
      <path d="M43 42L54 37M43 45L51 41" stroke="#9A612B" strokeWidth="1.2" strokeLinecap="round" />
    </g>
    <g transform="translate(12, 30)">
      <polygon points="38,4 74,20 38,36 2,20" fill="#E6B67C" stroke="#9A612B" strokeWidth="1" strokeLinejoin="round" />
      <polygon points="2,20 38,36 38,74 2,58" fill="#CE8E4E" stroke="#9A612B" strokeWidth="1" strokeLinejoin="round" />
      <polygon points="38,36 74,20 74,58 38,74" fill="#B27438" stroke="#9A612B" strokeWidth="1" strokeLinejoin="round" />
      <polygon points="18,13 26,9 62,25 54,29" fill="#925722" fillOpacity="0.75" />
      <polygon points="18,27 54,11 62,15 26,31" fill="#925722" fillOpacity="0.6" />
      <polygon points="16,26 24,30 24,45 16,41" fill="#8C5320" fillOpacity="0.75" />
      <polygon points="45,50 64,41 64,53 45,62" fill="#FFFBEB" />
      <path d="M48 53L60 47M48 56L56 52" stroke="#784418" strokeWidth="1.2" strokeLinecap="round" />
    </g>
  </svg>
);
