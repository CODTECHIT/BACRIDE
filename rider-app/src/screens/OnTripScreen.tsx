import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Camera, ChatCircleDots, Check, Motorcycle, Package, Phone, Star } from '@phosphor-icons/react';
import { RiderMobileMap } from '../components/MobileMap';
import type { RiderRouteName } from '../navigation/types';

export const OnTripScreen: React.FC<{ onNavigate: (route: RiderRouteName) => void }> = ({ onNavigate }) => {
  const [tripMode, setTripMode] = useState<'Ride' | 'Parcel'>('Ride');
  const [rideStarted, setRideStarted] = useState(false);
  const [podUploaded, setPodUploaded] = useState(false);

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-[#F9FAFB]">
      <div className="bg-gradient-to-b from-[#FCD34D] to-[#FDE68A] px-4 py-3 flex items-center justify-between shrink-0">
        <button type="button" onClick={() => onNavigate('IncomingRequest')} className="p-1 text-gray-900 cursor-pointer" aria-label="Back">
          <ArrowLeft size={18} weight="bold" />
        </button>
        <span className="font-bold text-base text-gray-900">On Trip</span>
        <span className="text-[11px] font-bold bg-white/80 px-3 py-0.5 rounded-full text-gray-800">{tripMode}</span>
      </div>

      <div className="h-44 w-full shrink-0">
        <RiderMobileMap variant="route-live" etaText={rideStarted ? 'Drop in 9 min' : 'Arrive in 4 min'} distText={rideStarted ? '4.8 km left' : '1.2 km away'} />
      </div>

      <div className="flex-1 min-h-0 p-4 space-y-3 overflow-y-auto thin-scroll">
        <div className="bg-white rounded-xl border border-gray-200 p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}assets/avatar-arif.png`} alt="Rahim Uddin" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <div className="text-sm font-bold text-gray-900">Rahim Uddin</div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Star size={12} weight="fill" className="text-amber-400" />
                <span className="font-bold text-gray-800">4.9</span>
                <span>(2,341 rides)</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700" aria-label="Call">
              <Phone size={15} weight="duotone" />
            </button>
            <button type="button" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700" aria-label="Chat">
              <ChatCircleDots size={15} weight="duotone" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => setTripMode('Ride')}
            className={`py-2 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 cursor-pointer ${
              tripMode === 'Ride' ? 'bg-[#FBBF24] border-[#F59E0B] text-[#111318]' : 'bg-white border-gray-200 text-gray-600'
            }`}
          >
            <Motorcycle size={15} weight="duotone" />
            <span>Ride</span>
          </button>
          <button
            type="button"
            onClick={() => setTripMode('Parcel')}
            className={`py-2 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 cursor-pointer ${
              tripMode === 'Parcel' ? 'bg-[#FBBF24] border-[#F59E0B] text-[#111318]' : 'bg-white border-gray-200 text-gray-600'
            }`}
          >
            <Package size={15} weight="duotone" />
            <span>Parcel</span>
          </button>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-3 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-700">Customer OTP (Start Ride)</span>
            <div className="flex gap-1.5">
              {['4', '7', '2', '9'].map((n, i) => (
                <span key={i} className="w-7 h-8 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center text-sm font-extrabold">
                  {n}
                </span>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setRideStarted(true)}
            className={`w-full py-2.5 rounded-full font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer ${
              rideStarted ? 'bg-emerald-600 text-white' : 'bg-[#FBBF24] hover:bg-amber-400 text-[#111318]'
            }`}
          >
            <span>{rideStarted ? 'Trip In Progress' : 'Start Ride'}</span>
            {rideStarted ? <Check size={14} weight="bold" /> : <ArrowRight size={14} weight="bold" />}
          </button>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-3 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
              <Package size={15} weight="duotone" className="text-amber-600" />
              <span>Parcel Option (If Applicable)</span>
            </div>
            <button
              type="button"
              onClick={() => setPodUploaded(true)}
              className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-lg inline-flex items-center gap-1 cursor-pointer"
            >
              <Camera size={13} weight="duotone" />
              <span>{podUploaded ? 'POD Uploaded' : 'Upload POD'}</span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-[10px] text-gray-400 mb-1">Pickup OTP</div>
              <div className="flex gap-1">
                {['1', '8', '6', '4'].map((n, i) => (
                  <span key={i} className="w-6 h-7 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-xs font-bold">
                    {n}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-gray-400 mb-1">Delivery OTP</div>
              <div className="flex gap-1">
                {['8', '9', '3', '7'].map((n, i) => (
                  <span key={i} className="w-6 h-7 rounded bg-gray-100 border border-gray-200 flex items-center justify-center text-xs font-bold">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('Earnings')}
          className="w-full py-3 rounded-full bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 text-emerald-900 font-bold text-sm flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>Complete Ride</span>
          <Check size={15} weight="bold" />
        </button>
      </div>
    </div>
  );
};
