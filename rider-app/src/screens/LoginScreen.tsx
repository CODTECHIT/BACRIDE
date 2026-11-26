import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, DeviceMobile, ShieldCheck } from '@phosphor-icons/react';
import { BacrideLogoLockup } from '../components/BacrideIcons';
import type { RiderRouteName } from '../navigation/types';

export const LoginScreen: React.FC<{ onNavigate: (route: RiderRouteName) => void }> = ({ onNavigate }) => {
  const [phone, setPhone] = useState('98480 55667');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [otp, setOtp] = useState(['1', '8', '6', '4']);

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-white">
      <div className="bg-gradient-to-b from-[#ffae2e] to-[#fff8eb] px-5 pt-5 pb-6 shrink-0">
        <button type="button" onClick={() => (step === 'otp' ? setStep('phone') : onNavigate('Splash'))} className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-900 cursor-pointer" aria-label="Back">
          <ArrowLeft size={20} weight="bold" />
        </button>
        <div className="mt-4 flex flex-col items-center text-center">
          <BacrideLogoLockup size="md" />
          <h1 className="mt-3 text-lg font-extrabold text-gray-900">
            {step === 'phone' ? 'Partner Sign In' : 'Verify Partner OTP'}
          </h1>
          <p className="text-xs text-gray-700 mt-1">
            {step === 'phone' ? 'Register or sign in with your partner mobile number' : `4-digit code sent to +91 ${phone}`}
          </p>
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col justify-between">
        {step === 'phone' ? (
          <div className="space-y-4">
            <label className="block space-y-1.5">
              <span className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
                <DeviceMobile size={15} weight="duotone" className="text-amber-600" />
                <span>Partner Mobile Number</span>
              </span>
              <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden focus-within:border-amber-500 bg-gray-50">
                <span className="px-3.5 py-3 text-sm font-bold text-gray-700 bg-gray-100 border-r border-gray-200">+91</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 px-3.5 py-3 text-sm font-bold text-gray-900 bg-transparent focus:outline-none"
                />
              </div>
            </label>

            <button
              type="button"
              onClick={() => setStep('otp')}
              className="w-full py-3.5 rounded-full btn-glass-primary font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Send OTP</span>
              <ArrowRight size={16} weight="bold" />
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-3 max-w-[260px] mx-auto">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => {
                    const next = [...otp];
                    next[idx] = e.target.value;
                    setOtp(next);
                  }}
                  className="h-14 rounded-xl border-2 border-gray-200 focus:border-amber-400 text-center text-xl font-extrabold text-gray-900 bg-gray-50 focus:outline-none"
                  aria-label={`OTP digit ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => onNavigate('Kyc')}
              className="w-full py-3.5 rounded-full btn-glass-primary font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShieldCheck size={17} weight="bold" />
              <span>Verify &amp; Open KYC</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('Home')}
              className="w-full py-2.5 rounded-full border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
            >
              Already Verified? Go to Dashboard
            </button>
          </div>
        )}

        <p className="text-[11px] text-center text-gray-400">
          Bacride Partner App • Hyderabad Operations
        </p>
      </div>
    </div>
  );
};
