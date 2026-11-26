import React, { useState } from 'react';
import { ArrowLeft, Headset, Siren } from '@phosphor-icons/react';
import { RealisticBikeIcon } from '../components/BacrideIcons';
import type { RiderRouteName } from '../navigation/types';

export const RiderHistoryScreen: React.FC<{ onNavigate: (route: RiderRouteName) => void }> = ({ onNavigate }) => (
  <div className="flex-1 min-h-0 flex flex-col bg-[#F9FAFB]">
    <div className="bg-gradient-to-b from-[#ffae2e] to-[#ffbe4d] px-4 py-4 flex items-center gap-3 shrink-0">
      <button type="button" onClick={() => onNavigate('Earnings')} className="p-1.5 rounded-lg hover:bg-black/5 text-gray-900 cursor-pointer" aria-label="Back">
        <ArrowLeft size={20} weight="bold" />
      </button>
      <h2 className="font-bold text-lg text-gray-900 flex-1 text-center pr-8">Trip History</h2>
    </div>
    <div className="flex-1 min-h-0 p-4 space-y-2.5 overflow-y-auto thin-scroll">
      {[
        { id: 'BR728941', route: 'Madhapur → Gachibowli', time: 'Today, 6:15 PM', net: '₹110.50' },
        { id: 'PR27198', route: 'Kondapur → Hitech City (Parcel)', time: 'Today, 4:05 PM', net: '₹102.00' },
        { id: 'BR728840', route: 'Jubilee Hills → Begumpet', time: 'Yesterday, 7:45 PM', net: '₹95.20' },
      ].map((t) => (
        <div key={t.id} className="bg-white rounded-xl border border-gray-200 p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <RealisticBikeIcon className="w-8 h-5" />
            <div>
              <div className="text-xs font-bold text-gray-900">{t.route}</div>
              <div className="text-[11px] text-gray-500">{t.id} · {t.time}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-extrabold text-emerald-700">{t.net}</div>
            <div className="text-[10px] text-gray-400">Net Paid</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const RiderSupportScreen: React.FC<{ onNavigate: (route: RiderRouteName) => void }> = ({ onNavigate }) => {
  const [sent, setSent] = useState(false);

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#F9FAFB]">
      <div className="bg-gradient-to-b from-[#ffae2e] to-[#ffbe4d] px-4 py-4 flex items-center gap-3 shrink-0">
        <button type="button" onClick={() => onNavigate('Home')} className="p-1.5 rounded-lg hover:bg-black/5 text-gray-900 cursor-pointer" aria-label="Back">
          <ArrowLeft size={20} weight="bold" />
        </button>
        <h2 className="font-bold text-lg text-gray-900 flex-1 text-center pr-8">Partner Support &amp; SOS</h2>
      </div>
      <div className="flex-1 min-h-0 p-4 space-y-3 overflow-y-auto thin-scroll">
        <div className="bg-red-50 border border-red-200 rounded-xl p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Siren size={20} weight="fill" className="text-red-600" />
            <div>
              <div className="text-xs font-extrabold text-red-900">Emergency Partner SOS</div>
              <div className="text-[11px] text-red-700">24/7 Hyderabad Safety Helpline</div>
            </div>
          </div>
          <button type="button" className="px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs font-bold cursor-pointer">
            Call SOS
          </button>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-3.5 space-y-2">
          <div className="flex items-center gap-2 text-xs font-extrabold text-gray-900">
            <Headset size={17} weight="duotone" className="text-amber-600" />
            <span>Contact Partner Helpdesk</span>
          </div>
          <textarea rows={3} placeholder="Describe payout, KYC, or trip issue..." className="w-full rounded-xl border border-gray-200 p-2.5 text-xs focus:outline-none focus:border-amber-400" />
          <button type="button" onClick={() => setSent(true)} className="w-full py-2.5 rounded-full bg-[#ffae2e] hover:bg-[#f09f20] text-[#111318] text-xs font-bold cursor-pointer transition-colors">
            {sent ? 'Ticket Raised (#PTR-819)' : 'Submit Ticket'}
          </button>
        </div>
      </div>
    </div>
  );
};
