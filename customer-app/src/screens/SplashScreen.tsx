import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import { BacrideLogoLockup } from '../components/BacrideIcons';
import type { CustomerRouteName } from '../navigation/types';

export const SplashScreen: React.FC<{ onNavigate: (route: CustomerRouteName) => void }> = ({ onNavigate }) => (
  <div
    className="flex-1 min-h-0 flex flex-col justify-between relative overflow-hidden"
    style={{ background: 'linear-gradient(to bottom, #F5A623 0%, #FBBF24 28%, #111318 100%)' }}
  >
    {/* Full-bleed 9:16 Splash Artwork pushed cleanly below the top logo/tagline sky */}
    <img
      src={`${import.meta.env.BASE_URL}assets/splash-hero-bg.jpg`}
      alt=""
      aria-hidden="true"
      className="absolute inset-x-0 top-[145px] w-full h-[calc(100%-145px)] object-cover object-bottom select-none pointer-events-none"
      style={{
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 100%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 100%)',
      }}
    />

    {/* Top Official Bacride Logo & Tagline in clean open sky */}
    <div className="pt-5 px-6 flex flex-col items-center text-center relative z-10 shrink-0">
      <BacrideLogoLockup size="lg" />
      <h1 className="mt-1.5 text-[20px] font-extrabold text-[#111318] leading-snug tracking-tight">
        Fast rides. Safe travel.
        <br />
        Easy booking.
      </h1>
    </div>

    {/* Bottom Pagination Dots + Get Started CTA + Log In */}
    <div className="relative z-10 px-6 pb-8 pt-6 flex flex-col items-center space-y-4">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]" />
        <span className="w-2 h-2 rounded-full bg-gray-400/70" />
        <span className="w-2 h-2 rounded-full bg-gray-400/70" />
        <span className="w-2 h-2 rounded-full bg-gray-400/70" />
      </div>

      <button
        type="button"
        onClick={() => onNavigate('Login')}
        className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#FCD34D] via-[#FBBF24] to-[#F59E0B] text-[#111318] font-bold text-sm shadow-[0_8px_28px_rgba(251,191,36,0.4)] flex items-center justify-center gap-2 hover:brightness-105 cursor-pointer"
      >
        <span>Get Started</span>
        <ArrowRight size={17} weight="bold" />
      </button>

      <p className="text-center text-xs text-gray-200">
        Already have an account?{' '}
        <button
          type="button"
          onClick={() => onNavigate('Login')}
          className="text-[#FBBF24] font-semibold hover:underline cursor-pointer"
        >
          Log In
        </button>
      </p>
    </div>
  </div>
);
