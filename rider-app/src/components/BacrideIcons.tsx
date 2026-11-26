import React from 'react';
import { Package } from '@phosphor-icons/react';

/** Exact transparent Bacride scooter mark extracted from the official logo */
export const BacrideSoloScooterMark: React.FC<{ className?: string }> = ({ className = 'w-10 h-8' }) => (
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

export const RealisticBikeIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-5' }) => (
  <svg viewBox="0 0 48 30" fill="none" className={className} aria-hidden="true">
    <ellipse cx="24" cy="27" rx="18" ry="2" fill="#000000" fillOpacity="0.1" />
    <circle cx="11" cy="21" r="6" fill="#1F2937" />
    <circle cx="11" cy="21" r="2.8" fill="#D1D5DB" />
    <circle cx="37" cy="21" r="6" fill="#1F2937" />
    <circle cx="37" cy="21" r="2.8" fill="#D1D5DB" />
    <rect x="6" y="18" width="10" height="3" rx="1.5" fill="#6B7280" />
    <path d="M8 16L13 11H23L27 16H31L29 7H34L39 17L42 19H33C31 16 28 16 26 19H15C13 16 10 16 8 16Z" fill="#F59E0B" stroke="#111827" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M12 11C13 9 18 9 21 11H12Z" fill="#111827" />
    <path d="M29 7L27 4M29 7H35" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="35.5" cy="9.5" r="2" fill="#FEF08A" stroke="#111827" strokeWidth="1" />
  </svg>
);

export const ParcelDuotoneIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <Package weight="duotone" className={className} color="#D97706" />
);
