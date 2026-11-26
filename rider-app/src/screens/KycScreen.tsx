import React from 'react';
import {
  ArrowLeft,
  CaretRight,
  Check,
  CheckCircle,
  CreditCard,
  FileText,
  IdentificationCard,
  ShieldCheck,
} from '@phosphor-icons/react';
import { BacrideSoloScooterMark } from '../components/BacrideIcons';
import type { RiderRouteName } from '../navigation/types';

export const KycScreen: React.FC<{ onNavigate: (route: RiderRouteName) => void }> = ({ onNavigate }) => (
  <div className="flex-1 min-h-0 flex flex-col bg-[#F9FAFB]">
    <div className="bg-gradient-to-b from-[#ffae2e] to-[#ffbe4d] px-4 py-4 flex items-center justify-between shrink-0">
      <button type="button" onClick={() => onNavigate('Home')} className="p-1.5 rounded-lg hover:bg-black/5 text-gray-900 cursor-pointer" aria-label="Back">
        <ArrowLeft size={20} weight="bold" />
      </button>
      <div className="flex items-center gap-2">
        <BacrideSoloScooterMark className="w-10 h-7 text-[#111318]" />
        <span className="font-display font-black text-xl tracking-tight text-[#111318]">Bacride</span>
      </div>
      <span className="w-6" />
    </div>

    <div className="flex-1 min-h-0 px-4 py-3 space-y-3 overflow-y-auto thin-scroll">
      <div>
        <h2 className="text-base font-extrabold text-gray-900 leading-tight">Partner Registration &amp; KYC</h2>
        <p className="text-xs text-gray-500 mt-0.5 leading-snug">
          Complete your profile, documents, and verification to start earning.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 px-3 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}assets/avatar-arif.png`} alt="Partner" className="w-10 h-10 rounded-full object-cover border border-amber-300" />
          <div>
            <div className="text-xs font-bold text-gray-900">Upload Profile Photo</div>
            <div className="text-[11px] text-gray-400">Clear face, on this device</div>
          </div>
        </div>
        <CheckCircle size={20} weight="fill" className="text-emerald-500 shrink-0" />
      </div>

      <div>
        <div className="text-xs font-bold text-gray-800 mb-1.5">Upload &amp; Verify Documents</div>
        <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
          {[
            { title: 'Driving Licence', sub: 'DL (Front & Back)', icon: IdentificationCard },
            { title: 'Aadhaar Card', sub: 'UID (Front & Back)', icon: IdentificationCard },
            { title: 'Registration Certificate (RC)', sub: 'Vehicle RC', icon: FileText },
            { title: 'Vehicle Insurance', sub: 'Valid Insurance Copy', icon: ShieldCheck },
          ].map((doc) => {
            const Icon = doc.icon;
            return (
              <div key={doc.title} className="px-3 py-2.5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center shrink-0">
                    <Icon size={15} weight="duotone" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-gray-900 leading-tight truncate">{doc.title}</div>
                    <div className="text-[10px] text-gray-400 leading-tight">{doc.sub}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full whitespace-nowrap inline-flex items-center gap-1">
                    <Check size={10} weight="bold" /> Verified
                  </span>
                  <CaretRight size={13} weight="bold" className="text-gray-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <div className="text-xs font-bold text-gray-800 mb-1.5">Vehicle Photos</div>
        <div className="grid grid-cols-3 gap-2">
          <div className="relative bg-white rounded-xl border border-gray-200 p-1 overflow-hidden">
            <img src={`${import.meta.env.BASE_URL}assets/veh-side.png`} alt="Side View" className="w-full h-14 object-cover rounded-lg" />
            <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center">
              <Check size={10} weight="bold" />
            </span>
          </div>
          <div className="relative bg-white rounded-xl border border-gray-200 p-1 overflow-hidden">
            <img src={`${import.meta.env.BASE_URL}assets/veh-front.png`} alt="Front View" className="w-full h-14 object-cover rounded-lg" />
            <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center">
              <Check size={10} weight="bold" />
            </span>
          </div>
          <div className="relative bg-[#161920] rounded-xl border border-gray-200 p-1.5 h-16 flex flex-col items-center justify-center">
            <span className="bg-white text-[#111318] font-extrabold text-[10px] px-2 py-0.5 rounded tracking-tight border border-gray-300">
              TS09 AB 5836
            </span>
            <span className="absolute bottom-1.5 right-1.5 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center">
              <Check size={10} weight="bold" />
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 px-3 py-2.5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <CreditCard size={18} weight="duotone" className="text-gray-600 shrink-0" />
          <div className="min-w-0">
            <div className="text-xs font-bold text-gray-900">Bank / UPI Details</div>
            <div className="text-[10px] text-gray-400 truncate">Bank Account / UPI for Earnings</div>
          </div>
        </div>
        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0 inline-flex items-center gap-1">
          <Check size={10} weight="bold" /> Verified
        </span>
      </div>

      <button
        type="button"
        onClick={() => onNavigate('Home')}
        className="w-full bg-emerald-50 border border-emerald-200 rounded-xl px-3.5 py-3 flex items-center gap-2.5 text-left hover:bg-emerald-100/70 cursor-pointer"
      >
        <CheckCircle size={22} weight="fill" className="text-emerald-600 shrink-0" />
        <div>
          <div className="text-xs font-extrabold text-emerald-900 leading-tight inline-flex items-center gap-1">
            <span>Account Verified</span>
            <Check size={12} weight="bold" />
          </div>
          <div className="text-[11px] text-emerald-700 leading-tight mt-0.5">You&apos;re all set to go online and earn!</div>
        </div>
      </button>
    </div>
  </div>
);
