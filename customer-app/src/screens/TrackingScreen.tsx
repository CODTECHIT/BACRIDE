import React, { useState } from 'react';
import { ArrowLeft, ChatCircleDots, PaperPlaneRight, Phone, ShareNetwork, ShieldCheck, Siren, Star, X } from '@phosphor-icons/react';
import { BacrideDualScooterMark, RealisticVehicleIcon } from '../components/BacrideIcons';
import { MobileMap } from '../components/MobileMap';
import type { CustomerRouteName } from '../navigation/types';

export const TrackingScreen: React.FC<{ onNavigate: (route: CustomerRouteName) => void }> = ({ onNavigate }) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [sosOpen, setSosOpen] = useState(false);
  const [shareMsg, setShareMsg] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'partner', text: 'Hi, I am on the way to your pickup point.' },
  ]);
  const [draft, setDraft] = useState('');

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#F9FAFB] relative">
      <div className="bg-gradient-to-b from-[#ffae2e] via-[#ffbe4d] to-[#ffb338] px-5 pt-7 pb-8 rounded-b-[32px] flex items-center justify-between shrink-0 shadow-md relative z-10">
        <button type="button" onClick={() => onNavigate('ChooseRide')} className="p-2.5 rounded-2xl bg-white/30 hover:bg-white/50 text-gray-900 cursor-pointer transition-colors shadow-2xs" aria-label="Back">
          <ArrowLeft size={24} weight="bold" />
        </button>
        <div className="flex flex-col items-center justify-center select-none">
          <BacrideDualScooterMark className="w-14 h-9 text-[#111318]" />
          <span className="font-display font-black text-base tracking-tight text-gray-900 leading-none mt-1">Your Ride</span>
        </div>
        <span className="w-11" />
      </div>

      <div className="h-56 w-full shrink-0">
        <MobileMap variant="route-live" etaText="Arriving in 4 min" distText="1.2 km away" />
      </div>

      <div className="flex-1 min-h-0 p-4 pb-6 space-y-3 overflow-y-auto thin-scroll">
        <div className="bg-white rounded-2xl border border-gray-200 p-3.5 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={`${import.meta.env.BASE_URL}assets/avatar-arif.png`} alt="Rahim Uddin" className="w-12 h-12 rounded-full object-cover border border-amber-300" />
              <div>
                <div className="text-sm font-extrabold text-gray-900">Rahim Uddin</div>
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <Star size={13} weight="fill" className="text-amber-400" />
                  <span className="font-bold text-gray-800">4.9</span>
                  <span>(2,341 rides)</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-amber-50 cursor-pointer" aria-label="Call partner">
                <Phone size={17} weight="duotone" />
              </button>
              <button type="button" onClick={() => setChatOpen(true)} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-amber-50 cursor-pointer" aria-label="Chat with partner">
                <ChatCircleDots size={17} weight="duotone" />
              </button>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <RealisticVehicleIcon type="Bike" className="w-8 h-5" />
              <span className="text-xs font-bold text-gray-800">Bacride Bike</span>
            </div>
            <span className="text-xs font-bold bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-md text-gray-800">
              TS09-AB-5836
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-3.5 flex items-center justify-between">
          <div className="flex items-start gap-2.5">
            <ShieldCheck size={20} weight="duotone" className="text-amber-500 mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-bold text-gray-900">Ride OTP</div>
              <div className="text-[11px] text-gray-500 leading-tight max-w-[155px]">
                Share this code with your driver to start the ride.
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl px-3.5 py-2 flex items-center gap-3 font-extrabold text-base text-gray-900 tracking-widest">
            <span>4</span>
            <span>7</span>
            <span>2</span>
            <span>9</span>
          </div>
        </div>

        {shareMsg && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold px-3.5 py-2 rounded-xl text-center">
            Live trip link copied for sharing with family &amp; friends.
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 pt-1">
          <button
            type="button"
            onClick={() => {
              setShareMsg(true);
              setTimeout(() => setShareMsg(false), 2500);
            }}
            className="py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <ShareNetwork size={15} weight="bold" />
            <span>Share Trip</span>
          </button>
          <button
            type="button"
            onClick={() => setSosOpen(true)}
            className="py-3 rounded-full bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Siren size={15} weight="fill" />
            <span>SOS</span>
          </button>
        </div>
      </div>

      {chatOpen && (
        <div className="absolute inset-0 z-30 bg-black/40 flex items-end">
          <div className="w-full bg-white rounded-t-3xl p-4 space-y-3 shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <div className="font-bold text-sm text-gray-900">Chat with Rahim Uddin</div>
              <button type="button" onClick={() => setChatOpen(false)} className="p-1 text-gray-500 cursor-pointer" aria-label="Close chat">
                <X size={18} weight="bold" />
              </button>
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <span className={`px-3 py-2 rounded-2xl text-xs max-w-[80%] ${m.from === 'me' ? 'bg-[#ffae2e] text-[#111318] font-semibold' : 'bg-gray-100 text-gray-800'}`}>
                    {m.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-amber-400"
              />
              <button
                type="button"
                onClick={() => {
                  if (draft.trim()) {
                    setMessages((prev) => [...prev, { from: 'me', text: draft.trim() }]);
                    setDraft('');
                  }
                }}
                className="px-3.5 py-2 rounded-xl bg-[#111318] text-white cursor-pointer"
                aria-label="Send message"
              >
                <PaperPlaneRight size={15} weight="fill" />
              </button>
            </div>
          </div>
        </div>
      )}

      {sosOpen && (
        <div className="absolute inset-0 z-30 bg-black/50 flex items-center justify-center p-5">
          <div className="w-full bg-white rounded-2xl p-5 space-y-3 shadow-2xl border border-red-200">
            <div className="flex items-center gap-2 text-red-600">
              <Siren size={22} weight="fill" />
              <h3 className="font-extrabold text-base text-gray-900">Emergency SOS</h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Triggering SOS immediately shares your live GPS coordinates with Bacride Safety Desk and your emergency contacts.
            </p>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button type="button" onClick={() => setSosOpen(false)} className="py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 cursor-pointer">
                Cancel
              </button>
              <button type="button" onClick={() => setSosOpen(false)} className="py-2.5 rounded-xl bg-red-600 text-white text-xs font-bold cursor-pointer">
                Alert Safety Team
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
