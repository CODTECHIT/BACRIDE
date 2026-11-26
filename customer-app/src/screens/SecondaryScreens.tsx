import React, { useState } from 'react';
import { ArrowLeft, Bell, Headset, MapPin, Plus } from '@phosphor-icons/react';
import { RealisticVehicleIcon } from '../components/BacrideIcons';
import { CUSTOMER_NOTIFICATIONS, PARCEL_HISTORY, RIDE_HISTORY, SAVED_PLACES } from '../data/mockData';
import type { CustomerRouteName } from '../navigation/types';

export const HistoryScreen: React.FC<{ onNavigate: (route: CustomerRouteName) => void }> = ({ onNavigate }) => {
  const [tab, setTab] = useState<'Rides' | 'Parcels'>('Rides');

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#F9FAFB]">
      <div className="bg-gradient-to-b from-[#ffae2e] via-[#ffbe4d] to-[#ffb338] px-5 pt-7 pb-8 rounded-b-[32px] flex items-center justify-between shrink-0 shadow-md relative z-10">
        <button type="button" onClick={() => onNavigate('Account')} className="p-2.5 rounded-2xl bg-white/30 hover:bg-white/50 text-gray-900 cursor-pointer transition-colors shadow-2xs" aria-label="Back">
          <ArrowLeft size={24} weight="bold" />
        </button>
        <h2 className="font-black text-2xl text-gray-900 tracking-tight text-center flex-1">Order History</h2>
        <span className="w-11" />
      </div>
      <div className="p-3 bg-white border-b border-gray-200 grid grid-cols-2 gap-2 shrink-0">
        {(['Rides', 'Parcels'] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`py-2 rounded-xl text-xs font-bold cursor-pointer transition-colors ${tab === t ? 'bg-[#ffae2e] text-[#111318]' : 'bg-gray-100 text-gray-600'}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="flex-1 min-h-0 p-4 space-y-2.5 overflow-y-auto thin-scroll">
        {tab === 'Rides'
          ? RIDE_HISTORY.map((r) => (
              <div key={r.id} className="bg-white rounded-xl border border-gray-200 p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <RealisticVehicleIcon type={r.type} className="w-9 h-5" />
                  <div>
                    <div className="text-xs font-bold text-gray-900">{r.route}</div>
                    <div className="text-[11px] text-gray-500">{r.id} · {r.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-extrabold text-gray-900">₹{r.fare}</div>
                  <div className="text-[10px] font-bold text-emerald-600">{r.status}</div>
                </div>
              </div>
            ))
          : PARCEL_HISTORY.map((p) => (
              <div key={p.id} className="bg-white rounded-xl border border-gray-200 p-3 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-gray-900">{p.item}</div>
                  <div className="text-[11px] text-gray-600">{p.route}</div>
                  <div className="text-[10px] text-gray-400">{p.id} · {p.date}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-extrabold text-gray-900">₹{p.fare}</div>
                  <div className="text-[10px] font-bold text-emerald-600">{p.status}</div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export const SavedPlacesScreen: React.FC<{ onNavigate: (route: CustomerRouteName) => void }> = ({ onNavigate }) => {
  const [places, setPlaces] = useState(SAVED_PLACES);
  const [newAddr, setNewAddr] = useState('');

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#F9FAFB]">
      <div className="bg-gradient-to-b from-[#ffae2e] via-[#ffbe4d] to-[#ffb338] px-5 pt-7 pb-8 rounded-b-[32px] flex items-center justify-between shrink-0 shadow-md relative z-10">
        <button type="button" onClick={() => onNavigate('Account')} className="p-2.5 rounded-2xl bg-white/30 hover:bg-white/50 text-gray-900 cursor-pointer transition-colors shadow-2xs" aria-label="Back">
          <ArrowLeft size={24} weight="bold" />
        </button>
        <h2 className="font-black text-2xl text-gray-900 tracking-tight text-center flex-1">Saved Places</h2>
        <span className="w-11" />
      </div>
      <div className="flex-1 min-h-0 p-4 space-y-2.5 overflow-y-auto thin-scroll">
        {places.map((p) => (
          <div key={p.id} className="bg-white rounded-xl border border-gray-200 p-3 flex items-start gap-3">
            <MapPin size={18} weight="duotone" className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-extrabold text-gray-900">{p.label}</div>
              <div className="text-xs text-gray-600 mt-0.5">{p.address}</div>
            </div>
          </div>
        ))}
        <div className="bg-white rounded-xl border border-gray-200 p-3 flex gap-2">
          <input
            type="text"
            value={newAddr}
            onChange={(e) => setNewAddr(e.target.value)}
            placeholder="Add new favourite address..."
            className="flex-1 text-xs focus:outline-none"
          />
          <button
            type="button"
            onClick={() => {
              if (newAddr.trim()) {
                setPlaces((prev) => [...prev, { id: String(Date.now()), label: 'Favourite', address: newAddr.trim() }]);
                setNewAddr('');
              }
            }}
            className="px-3 py-1.5 rounded-lg bg-[#ffae2e] hover:bg-[#f09f20] text-[#111318] text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Plus size={13} weight="bold" /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export const SupportScreen: React.FC<{ onNavigate: (route: CustomerRouteName) => void }> = ({ onNavigate }) => {
  const [sent, setSent] = useState(false);

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#F9FAFB]">
      <div className="bg-gradient-to-b from-[#ffae2e] via-[#ffbe4d] to-[#ffb338] px-5 pt-7 pb-8 rounded-b-[32px] flex items-center justify-between shrink-0 shadow-md relative z-10">
        <button type="button" onClick={() => onNavigate('Account')} className="p-2.5 rounded-2xl bg-white/30 hover:bg-white/50 text-gray-900 cursor-pointer transition-colors shadow-2xs" aria-label="Back">
          <ArrowLeft size={24} weight="bold" />
        </button>
        <h2 className="font-black text-2xl text-gray-900 tracking-tight text-center flex-1">Help &amp; Support</h2>
        <span className="w-11" />
      </div>
      <div className="flex-1 min-h-0 p-4 space-y-3 overflow-y-auto thin-scroll">
        <div className="bg-white rounded-xl border border-gray-200 p-3.5 space-y-2">
          <div className="flex items-center gap-2 text-xs font-extrabold text-gray-900">
            <Headset size={17} weight="duotone" className="text-amber-600" />
            <span>Raise a Support Ticket</span>
          </div>
          <textarea rows={3} placeholder="Describe ride, parcel, payment, or lost-item issue..." className="w-full rounded-xl border border-gray-200 p-2.5 text-xs focus:outline-none focus:border-amber-400" />
          <button type="button" onClick={() => setSent(true)} className="w-full py-2.5 rounded-full bg-[#ffae2e] hover:bg-[#f09f20] text-[#111318] text-xs font-bold cursor-pointer transition-colors">
            {sent ? 'Ticket Submitted (#SUP-4091)' : 'Submit Ticket'}
          </button>
        </div>
      </div>
    </div>
  );
};

export const NotificationsScreen: React.FC<{ onNavigate: (route: CustomerRouteName) => void }> = ({ onNavigate }) => (
  <div className="flex-1 min-h-0 flex flex-col bg-[#F9FAFB]">
    <div className="bg-gradient-to-b from-[#ffae2e] via-[#ffbe4d] to-[#ffb338] px-5 pt-7 pb-8 rounded-b-[32px] flex items-center justify-between shrink-0 shadow-md relative z-10">
      <button type="button" onClick={() => onNavigate('Home')} className="p-2.5 rounded-2xl bg-white/30 hover:bg-white/50 text-gray-900 cursor-pointer transition-colors shadow-2xs" aria-label="Back">
        <ArrowLeft size={24} weight="bold" />
      </button>
      <h2 className="font-black text-2xl text-gray-900 tracking-tight text-center flex-1">Notifications</h2>
      <span className="w-11" />
    </div>
    <div className="flex-1 min-h-0 p-4 space-y-2.5 overflow-y-auto thin-scroll">
      {CUSTOMER_NOTIFICATIONS.map((n) => (
        <div key={n.id} className="bg-white rounded-xl border border-gray-200 p-3 flex items-start gap-3">
          <Bell size={18} weight="duotone" className={n.unread ? 'text-amber-500' : 'text-gray-400'} />
          <div>
            <div className="text-xs font-bold text-gray-900">{n.title}</div>
            <div className="text-[10px] text-gray-400 mt-0.5">{n.time}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
