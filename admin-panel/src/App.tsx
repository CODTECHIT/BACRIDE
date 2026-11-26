import React, { useRef, useState } from 'react';
import {
  ArrowsOutSimple,
  Bell,
  Broadcast,
  CalendarBlank,
  CarProfile,
  CaretDown,
  ChartLineUp,
  Check,
  Clock,
  CreditCard,
  CurrencyInr,
  FileText,
  Gear,
  Gift,
  Headset,
  List,
  MagnifyingGlass,
  MapPin,
  Megaphone,
  NavigationArrow,
  Package,
  ShieldCheck,
  Siren,
  SlidersHorizontal,
  SquaresFour,
  Tag,
  UserCheck,
  Users,
  Wallet,
  Warning,
  X,
} from '@phosphor-icons/react';
import { AdminCityMap } from './components/AdminCityMap';
import { BacrideBadgeLogo, CharminarSkyline, RealisticVehicleIcon } from './components/BacrideIcons';
import { BookingsDonut, RevenueChart } from './components/Charts';
import {
  ADMIN_KPIS,
  DEFAULT_FARE_CONFIGS,
  DISPATCH_QUEUE,
  KYC_QUEUE,
  PARCEL_ORDERS,
  PAYOUT_REQUESTS,
  RECENT_RIDES,
  SOS_ALERTS,
  type KycRequest,
  type PayoutRequest,
} from './data/mockData';
import { ExtraPage } from './pages/ExtraPages';

type AdminSectionId =
  | 'dashboard'
  | 'operations'
  | 'users'
  | 'partners'
  | 'kyc'
  | 'rides'
  | 'parcels'
  | 'tracking'
  | 'finance'
  | 'fare'
  | 'incentives'
  | 'coupons'
  | 'notifications'
  | 'support'
  | 'sos'
  | 'reports'
  | 'cms'
  | 'subadmins'
  | 'settings';

const SIDEBAR_ITEMS: {
  id: AdminSectionId;
  label: string;
  icon: React.ElementType;
  chevron?: boolean;
  badge?: number;
}[] = [
  { id: 'dashboard', label: 'Dashboard', icon: SquaresFour },
  { id: 'operations', label: 'Operations', icon: Broadcast, chevron: true },
  { id: 'users', label: 'Users', icon: Users },
  { id: 'partners', label: 'Partners', icon: UserCheck },
  { id: 'kyc', label: 'KYC & Verification', icon: ShieldCheck, chevron: true },
  { id: 'rides', label: 'Rides', icon: CarProfile, chevron: true },
  { id: 'parcels', label: 'Parcel Delivery', icon: Package, chevron: true },
  { id: 'tracking', label: 'Live Tracking', icon: NavigationArrow },
  { id: 'finance', label: 'Finance & Payouts', icon: Wallet, chevron: true },
  { id: 'fare', label: 'Fare & Pricing', icon: Tag, chevron: true },
  { id: 'incentives', label: 'Incentives & Bonus', icon: Gift },
  { id: 'coupons', label: 'Coupons & Referrals', icon: SlidersHorizontal },
  { id: 'notifications', label: 'Notifications & Banners', icon: Megaphone },
  { id: 'support', label: 'Support & Tickets', icon: Headset },
  { id: 'sos', label: 'SOS Alerts', icon: Siren, badge: 3 },
  { id: 'reports', label: 'Reports & Exports', icon: ChartLineUp },
  { id: 'cms', label: 'CMS (Terms, Privacy, FAQ)', icon: FileText },
  { id: 'subadmins', label: 'Sub-Admins & Roles', icon: Warning },
  { id: 'settings', label: 'Settings', icon: Gear },
];

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [section, setSection] = useState<AdminSectionId>('dashboard');
  const [city, setCity] = useState('Hyderabad');
  const [dateRange, setDateRange] = useState<'Today' | 'This Week' | 'This Month' | 'Custom'>('Today');
  const [revPeriod, setRevPeriod] = useState<'Daily' | 'Weekly' | 'Monthly'>('Daily');
  const [vehicleFilter, setVehicleFilter] = useState('All Vehicles');
  const [searchQuery, setSearchQuery] = useState('');

  const [dispatchTab, setDispatchTab] = useState<'Queue' | 'Active' | 'Scheduled'>('Queue');
  const [assignedIds, setAssignedIds] = useState<string[]>([]);
  const [kycTab, setKycTab] = useState<'Pending' | 'Approved' | 'Rejected'>('Pending');
  const [kycList, setKycList] = useState<KycRequest[]>(KYC_QUEUE);
  const [parcelTab, setParcelTab] = useState<'All' | 'Picked Up' | 'In Transit' | 'Delivered' | 'Cancelled'>('All');
  const [payoutTab, setPayoutTab] = useState<'Pending' | 'Processed' | 'Failed'>('Pending');
  const [payoutList, setPayoutList] = useState<PayoutRequest[]>(PAYOUT_REQUESTS);
  const [fareTab, setFareTab] = useState('Fare Settings');
  const [fareVehicle, setFareVehicle] = useState('Bike Ride');
  const [fareConfigs, setFareConfigs] = useState(DEFAULT_FARE_CONFIGS);
  const [fareSaved, setFareSaved] = useState(false);

  const sosDialogRef = useRef<HTMLDialogElement>(null);
  const podDialogRef = useRef<HTMLDialogElement>(null);
  const [activeSosId, setActiveSosId] = useState<string>('BR728912');
  const [activePodId, setActivePodId] = useState<string>('PR27198');

  const openSosModal = (id: string) => {
    setActiveSosId(id);
    sosDialogRef.current?.showModal();
  };

  const openPodModal = (id: string) => {
    setActivePodId(id);
    podDialogRef.current?.showModal();
  };

  const handleKycAction = (id: string, next: 'Approved' | 'Rejected') => {
    setKycList((prev) => prev.map((k) => (k.id === id ? { ...k, status: next } : k)));
  };

  const handlePayoutAction = (id: string, next: 'Processed' | 'Failed') => {
    setPayoutList((prev) => prev.map((p) => (p.id === id ? { ...p, status: next } : p)));
  };

  const activeFare = fareConfigs[fareVehicle];
  const updateFareField = (field: keyof typeof activeFare, value: string | boolean) => {
    setFareConfigs((prev) => ({
      ...prev,
      [fareVehicle]: { ...prev[fareVehicle], [field]: value },
    }));
  };

  const statusBadge = (status: string) => {
    if (status === 'Completed' || status === 'Delivered' || status === 'Approved' || status === 'Processed') {
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    }
    if (status === 'Ongoing' || status === 'In Transit') {
      return 'bg-amber-50 text-amber-700 border-amber-200';
    }
    if (status === 'In Progress') {
      return 'bg-sky-50 text-sky-700 border-sky-200';
    }
    if (status === 'Picked Up') {
      return 'bg-violet-50 text-violet-700 border-violet-200';
    }
    return 'bg-red-50 text-red-700 border-red-200';
  };

  return (
    <div className="min-h-screen flex bg-[#F4F5F8] text-[#111827] relative">
      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-xs lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar: Slide-out drawer on mobile (<lg), persistent on desktop (lg+) */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[260px] bg-[#111318] text-gray-300 flex flex-col justify-between select-none transform transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 lg:w-[238px] lg:shrink-0 ${
          mobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        <div>
          <div className="px-4 py-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <BacrideBadgeLogo className="w-9 h-9" />
              <div className="leading-tight">
                <div className="font-display font-extrabold text-white text-base tracking-tight">Bacride</div>
                <div className="text-[11px] font-medium text-gray-400">Admin</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 cursor-pointer"
              aria-label="Close menu"
            >
              <X size={18} weight="bold" />
            </button>
          </div>

          <nav className="p-2.5 space-y-0.5 max-h-[calc(100vh-190px)] overflow-y-auto thin-scroll" aria-label="Admin sidebar navigation">
            {SIDEBAR_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = section === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition cursor-pointer ${
                    active ? 'bg-[#F5A623] text-[#111318] font-bold shadow-xs' : 'text-gray-300 hover:bg-white/5 hover:text-white font-medium'
                  }`}
                >
                  <span className="flex items-center gap-2.5 truncate">
                    <Icon size={16} weight={active ? 'fill' : 'duotone'} className={active ? 'text-[#111318]' : 'text-gray-400'} />
                    <span className="truncate">{item.label}</span>
                  </span>
                  {item.badge ? (
                    <span className="px-1.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold leading-none">
                      {item.badge}
                    </span>
                  ) : item.chevron ? (
                    <CaretDown size={13} weight="bold" className={active ? 'text-[#111318]' : 'text-gray-500'} />
                  ) : null}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="px-4 pb-4 pt-2 border-t border-white/10 text-center">
          <CharminarSkyline className="w-full h-14 mx-auto" />
          <div className="text-xs font-bold text-white mt-1">{city} Operations</div>
          <div className="text-[11px] text-emerald-400 font-medium flex items-center justify-center gap-1.5 mt-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>System Online</span>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-gray-200 px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2 sm:gap-3 sticky top-0 z-20">
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"
              aria-label="Open sidebar menu"
            >
              <List size={22} weight="bold" />
            </button>
            <BacrideBadgeLogo className="w-7 h-7" />
          </div>

          <div className="relative flex-1 max-w-md min-w-[120px] sm:min-w-[220px]">
            <MagnifyingGlass size={15} className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-9 pr-8 sm:pr-12 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-amber-400"
            />
            <kbd className="hidden sm:inline-block absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-gray-400 bg-white border border-gray-200 px-1.5 py-0.5 rounded">
              ⌘K
            </kbd>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <label className="hidden sm:flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-gray-800 cursor-pointer">
              <MapPin size={14} weight="duotone" className="text-amber-600" />
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent focus:outline-none cursor-pointer"
                aria-label="Select city"
              >
                <option>Hyderabad</option>
                <option>Bengaluru</option>
                <option>Chennai</option>
                <option>Mumbai</option>
              </select>
            </label>

            <button
              type="button"
              onClick={() => setSection('notifications')}
              className="relative p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 text-gray-600 cursor-pointer"
              aria-label="Notifications"
            >
              <Bell size={17} weight="duotone" />
              <span className="absolute top-1 sm:top-1.5 right-1 sm:right-1.5 w-2 h-2 rounded-full bg-red-500" />
            </button>

            <button
              type="button"
              onClick={() => setSection('sos')}
              className="flex items-center gap-1 sm:gap-1.5 bg-[#FBBF24] hover:bg-amber-400 text-[#111318] px-2 sm:px-3 py-1.5 rounded-lg text-xs font-bold shadow-2xs cursor-pointer"
            >
              <Siren size={14} weight="fill" />
              <span className="hidden sm:inline">SOS Alerts</span>
              <span className="w-4 h-4 rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center">3</span>
            </button>

            <div className="flex items-center gap-1.5 sm:gap-2 pl-1.5 sm:pl-2 border-l border-gray-200">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-900 text-amber-400 font-bold text-xs flex items-center justify-center">
                BA
              </div>
              <div className="hidden md:block leading-tight">
                <div className="text-xs font-bold text-gray-900">Admin</div>
                <div className="text-[10px] text-gray-500">Super Admin</div>
              </div>
              <CaretDown size={13} className="text-gray-400 hidden sm:block" />
            </div>
          </div>
        </header>

        <main className="flex-1 p-3 sm:p-5 space-y-4 max-w-[1460px] w-full mx-auto overflow-x-hidden">
          {section === 'dashboard' && (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">Dashboard</h1>
                  <p className="text-xs text-gray-500">Bacride Ride Booking &amp; Parcel Delivery Platform</p>
                </div>

                <div className="flex items-center gap-2 overflow-x-auto thin-scroll max-w-full pb-1 sm:pb-0">
                  <div className="bg-white border border-gray-200 rounded-lg px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-gray-700 flex items-center gap-1.5 shadow-2xs shrink-0">
                    <CalendarBlank size={14} weight="duotone" className="text-amber-600" />
                    <span>Today, 25 Nov 2026</span>
                    <CaretDown size={12} className="text-gray-400" />
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-0.5 inline-flex shadow-2xs shrink-0">
                    {(['Today', 'This Week', 'This Month', 'Custom'] as const).map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setDateRange(r)}
                        className={`px-2.5 sm:px-3 py-1 rounded-md text-xs font-semibold transition cursor-pointer shrink-0 ${
                          dateRange === r ? 'bg-[#F5A623] text-[#111318] font-bold' : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2.5 sm:gap-3">
                {ADMIN_KPIS.map((kpi, idx) => {
                  const icons = [Users, UserCheck, Clock, CarProfile, Wallet, Warning];
                  const KpiIcon = icons[idx];
                  return (
                    <div key={kpi.label} className="bg-white rounded-xl border border-gray-200/80 p-3.5 shadow-2xs flex items-start gap-3">
                      <span className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${kpi.iconBg}`}>
                        <KpiIcon size={17} weight="duotone" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[11px] font-medium text-gray-500 truncate">{kpi.label}</div>
                        <div className="text-lg font-extrabold text-gray-900 leading-tight mt-0.5">{kpi.value}</div>
                        <div className="text-[10px] mt-0.5 flex items-center gap-1">
                          {kpi.live ? (
                            <span className="text-emerald-600 font-bold inline-flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              {kpi.delta}
                            </span>
                          ) : (
                            <span className={kpi.positive ? 'text-emerald-600 font-bold' : 'text-red-500 font-bold'}>
                              {kpi.positive ? '↑' : '↓'} {kpi.delta}
                            </span>
                          )}
                          {kpi.note && <span className="text-gray-400">{kpi.note}</span>}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
                <div className="xl:col-span-7 bg-white rounded-xl border border-gray-200/80 p-4 shadow-2xs flex flex-col">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <h2 className="font-bold text-sm text-gray-900">Live Map – {city}</h2>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Live
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <select
                        value={vehicleFilter}
                        onChange={(e) => setVehicleFilter(e.target.value)}
                        className="text-xs font-semibold bg-white border border-gray-200 rounded-lg px-2.5 py-1 text-gray-700 focus:outline-none cursor-pointer"
                        aria-label="Filter vehicles on map"
                      >
                        <option>All Vehicles</option>
                        <option>Bike Rides</option>
                        <option>Auto Rides</option>
                        <option>Cab Rides</option>
                        <option>Parcel Delivery</option>
                      </select>
                      <button
                        type="button"
                        onClick={() => setSection('tracking')}
                        className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 cursor-pointer"
                        aria-label="Expand live tracking"
                      >
                        <ArrowsOutSimple size={14} weight="bold" />
                      </button>
                    </div>
                  </div>
                  <AdminCityMap mode="dashboard" className="flex-1 min-h-[305px]" />
                </div>

                <div className="xl:col-span-5 flex flex-col gap-4">
                  <div className="bg-white rounded-xl border border-gray-200/80 p-4 shadow-2xs">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                          <CurrencyInr size={13} weight="bold" />
                        </span>
                        <h2 className="font-bold text-sm text-gray-900">Revenue Overview</h2>
                      </div>
                      <div className="inline-flex bg-gray-100 rounded-lg p-0.5">
                        {(['Daily', 'Weekly', 'Monthly'] as const).map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setRevPeriod(p)}
                            className={`px-2 py-0.5 rounded-md text-[11px] font-semibold cursor-pointer ${
                              revPeriod === p ? 'bg-[#F5A623] text-[#111318] font-bold' : 'text-gray-600'
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-baseline gap-2 justify-end mb-1">
                      <span className="text-sm font-extrabold text-gray-900">₹28,76,540</span>
                      <span className="text-[11px] font-bold text-emerald-600">↑ +12.9%</span>
                    </div>
                    <RevenueChart period={revPeriod} />
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200/80 p-4 shadow-2xs flex-1 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                          <Package size={14} weight="duotone" />
                        </span>
                        <h2 className="font-bold text-sm text-gray-900">Bookings by Type</h2>
                      </div>
                      <span className="text-[11px] text-gray-500 font-medium">
                        Total Bookings: <strong className="text-gray-900">56,720</strong>
                      </span>
                    </div>
                    <BookingsDonut />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
                <div className="xl:col-span-6 bg-white rounded-xl border border-gray-200/80 p-4 shadow-2xs">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="font-bold text-sm text-gray-900">Recent Rides</h2>
                    <button type="button" onClick={() => setSection('rides')} className="text-xs font-bold text-amber-600 hover:underline cursor-pointer">
                      View All Rides →
                    </button>
                  </div>
                  <div className="table-wrapper" tabIndex={0} role="region" aria-label="Recent rides table">
                    <table className="w-full text-left text-[11px]">
                      <thead className="text-gray-400 border-b border-gray-100">
                        <tr>
                          <th className="py-2 pr-2 font-semibold">#</th>
                          <th className="py-2 px-2 font-semibold">Booking ID</th>
                          <th className="py-2 px-2 font-semibold">Type</th>
                          <th className="py-2 px-2 font-semibold">Customer</th>
                          <th className="py-2 px-2 font-semibold">Partner</th>
                          <th className="py-2 px-2 font-semibold">Route</th>
                          <th className="py-2 px-2 font-semibold">Fare</th>
                          <th className="py-2 pl-2 font-semibold text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {RECENT_RIDES.filter((r) =>
                          !searchQuery ||
                          r.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.route.toLowerCase().includes(searchQuery.toLowerCase())
                        ).map((r, i) => (
                          <tr key={r.id} className="hover:bg-gray-50/70">
                            <td className="py-2 pr-2 text-gray-400">{i + 1}</td>
                            <td className="py-2 px-2 font-bold text-gray-800">{r.id}</td>
                            <td className="py-2 px-2">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 text-gray-800 font-semibold">
                                <RealisticVehicleIcon type={r.type} className="w-4 h-3" />
                                <span>{r.type}</span>
                              </span>
                            </td>
                            <td className="py-2 px-2 text-gray-700">{r.customer}</td>
                            <td className="py-2 px-2 text-gray-700">{r.partner}</td>
                            <td className="py-2 px-2 text-gray-600 truncate max-w-[145px]">{r.route}</td>
                            <td className="py-2 px-2 font-bold text-gray-900">₹{r.fare}</td>
                            <td className="py-2 pl-2 text-right">
                              <span className={`px-2 py-0.5 rounded-md border text-[10px] font-semibold ${statusBadge(r.status)}`}>
                                {r.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="xl:col-span-3 bg-white rounded-xl border border-gray-200/80 p-4 shadow-2xs">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="font-bold text-sm text-gray-900">
                      Pending KYC Verification <span className="text-gray-500 font-semibold">(84)</span>
                    </h2>
                    <button type="button" onClick={() => setSection('kyc')} className="text-xs font-bold text-amber-600 hover:underline cursor-pointer">
                      View All →
                    </button>
                  </div>
                  <div className="space-y-2.5">
                    {kycList.map((k) => (
                      <div key={k.id} className="flex items-center justify-between gap-2 pb-2 border-b border-gray-100 last:border-0 last:pb-0">
                        <div className="flex items-center gap-2 min-w-0">
                          <img src={`${import.meta.env.BASE_URL}assets/avatar-arif.png`} alt={k.name} className="w-8 h-8 rounded-full object-cover shrink-0 border border-gray-200" />
                          <div className="min-w-0">
                            <div className="flex items-center gap-1">
                              <span className="text-xs font-bold text-gray-900 truncate">{k.name}</span>
                              <span className="text-[10px] bg-amber-50 text-amber-800 px-1.5 rounded font-semibold">{k.vehicleType}</span>
                            </div>
                            <div className="text-[10px] text-gray-400">Applied: {k.appliedOn}</div>
                          </div>
                        </div>
                        {k.status === 'Pending' ? (
                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              type="button"
                              onClick={() => handleKycAction(k.id, 'Approved')}
                              className="px-2 py-1 rounded bg-[#F5A623] hover:bg-amber-500 text-[#111318] font-bold text-[10px] cursor-pointer"
                            >
                              Review
                            </button>
                            <button
                              type="button"
                              onClick={() => handleKycAction(k.id, 'Rejected')}
                              className="px-2 py-1 rounded border border-red-200 text-red-600 hover:bg-red-50 font-semibold text-[10px] cursor-pointer"
                            >
                              Reject
                            </button>
                          </div>
                        ) : (
                          <span className={`px-2 py-0.5 rounded border text-[10px] font-bold ${statusBadge(k.status)}`}>
                            {k.status}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="xl:col-span-3 bg-white rounded-xl border border-gray-200/80 p-4 shadow-2xs">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="font-bold text-sm text-gray-900 flex items-center gap-1.5">
                      <Siren size={16} weight="duotone" className="text-red-600" />
                      <span>SOS Alerts (3)</span>
                    </h2>
                    <button type="button" onClick={() => setSection('sos')} className="text-xs font-bold text-red-600 hover:underline cursor-pointer">
                      View All →
                    </button>
                  </div>
                  <div className="space-y-2.5">
                    {SOS_ALERTS.map((alert) => (
                      <div key={alert.id} className="rounded-xl border border-red-100 bg-red-50/40 p-2.5 flex items-center justify-between gap-2">
                        <div className="min-w-0">
                          {alert.live && (
                            <span className="inline-block px-1.5 py-0.5 rounded bg-red-600 text-white text-[9px] font-bold mb-0.5">
                              Live
                            </span>
                          )}
                          <div className="text-[11px] font-extrabold text-gray-900 truncate">{alert.title}</div>
                          <div className="text-[10px] text-gray-600 truncate">{alert.location}</div>
                          <div className="text-[9px] text-gray-400">{alert.timeAgo}</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => openSosModal(alert.id)}
                          className="px-2.5 py-1.5 rounded-lg bg-[#F5A623] hover:bg-amber-500 text-[#111318] font-bold text-[11px] shrink-0 cursor-pointer"
                        >
                          Respond
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {section === 'operations' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h1 className="text-xl font-extrabold text-gray-900">Live Dispatch &amp; Operations</h1>
                  <p className="text-xs text-gray-500">Monitor, assign and manage live rides &amp; parcel requests</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 inline-flex items-center gap-1.5">
                  <MapPin size={13} weight="fill" className="text-amber-500" />
                  <span>{city}</span>
                </span>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-2xs space-y-4">
                <div className="flex gap-2">
                  {[
                    { id: 'Queue' as const, label: 'Trip Queue (32)' },
                    { id: 'Active' as const, label: 'Active (1,268)' },
                    { id: 'Scheduled' as const, label: 'Scheduled (166)' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setDispatchTab(t.id)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                        dispatchTab === t.id ? 'bg-[#F5A623] text-[#111318]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  <div className="lg:col-span-5 space-y-2.5">
                    {DISPATCH_QUEUE.map((q) => {
                      const assigned = assignedIds.includes(q.id);
                      return (
                        <div key={q.id} className="rounded-xl border border-gray-200 p-3 flex items-center justify-between gap-3 hover:border-amber-300">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-extrabold text-gray-900">#{q.id}</span>
                              <span className="text-[11px] font-semibold text-gray-600">• {q.type}</span>
                            </div>
                            <div className="text-xs font-medium text-gray-800 mt-0.5">{q.route}</div>
                            <div className="text-[11px] text-gray-500 mt-0.5">
                              {q.dist} · <strong className="text-gray-900">₹{q.fare}</strong>
                            </div>
                          </div>
                          <div className="text-right space-y-1.5">
                            <div className="text-[10px] text-gray-400">{q.ago}</div>
                            <button
                              type="button"
                              onClick={() => setAssignedIds((prev) => (assigned ? prev : [...prev, q.id]))}
                              className={`px-3 py-1 rounded-lg text-xs font-bold inline-flex items-center gap-1 cursor-pointer ${
                                assigned ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-[#F5A623] text-[#111318] hover:bg-amber-500'
                              }`}
                            >
                              <span>{assigned ? 'Assigned' : 'Assign'}</span>
                              {assigned && <Check size={11} weight="bold" />}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="lg:col-span-7 relative">
                    <div className="absolute top-3 right-3 z-10 bg-[#111318] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow">
                      Active Rides: 1,268
                    </div>
                    <AdminCityMap mode="dispatch" className="h-[340px]" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {section === 'kyc' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h1 className="text-xl font-extrabold text-gray-900">Partner KYC &amp; Verification</h1>
                  <p className="text-xs text-gray-500">Review partner registrations and uploaded documents</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 inline-flex items-center gap-1.5">
                  <MapPin size={13} weight="fill" className="text-amber-500" />
                  <span>{city}</span>
                </span>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-2xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex gap-2">
                    {[
                      { id: 'Pending' as const, label: `Pending Review (${72 + kycList.filter((k) => k.status === 'Pending').length})` },
                      { id: 'Approved' as const, label: `Approved (${18344 + kycList.filter((k) => k.status === 'Approved').length})` },
                      { id: 'Rejected' as const, label: `Rejected (${312 + kycList.filter((k) => k.status === 'Rejected').length})` },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setKycTab(t.id)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                          kycTab === t.id ? 'bg-[#F5A623] text-[#111318]' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                  <div className="relative w-64">
                    <MagnifyingGlass size={14} className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="search"
                      placeholder="Search partner, phone, vehicle..."
                      className="w-full pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="table-wrapper" tabIndex={0} role="region" aria-label="Partner KYC requests">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
                      <tr>
                        <th className="py-2.5 px-3 font-semibold">Partner</th>
                        <th className="py-2.5 px-3 font-semibold">Vehicle</th>
                        <th className="py-2.5 px-3 font-semibold">Documents</th>
                        <th className="py-2.5 px-3 font-semibold">Applied On</th>
                        <th className="py-2.5 px-3 font-semibold text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {kycList
                        .filter((k) => (kycTab === 'Pending' ? true : k.status === kycTab))
                        .map((k) => (
                          <tr key={k.id} className="hover:bg-gray-50/60">
                            <td className="py-3 px-3">
                              <div className="flex items-center gap-2.5">
                                <img src={`${import.meta.env.BASE_URL}assets/avatar-arif.png`} alt={k.name} className="w-8 h-8 rounded-full object-cover border border-gray-200" />
                                <div>
                                  <div className="font-bold text-gray-900">{k.name}</div>
                                  <div className="text-[11px] text-gray-400">{k.partnerId}</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-3">
                              <div className="font-semibold text-gray-800">{k.vehicleType}</div>
                              <div className="text-[11px] text-gray-500">{k.vehicleNumber}</div>
                            </td>
                            <td className="py-3 px-3">
                              <div className="flex flex-wrap gap-1">
                                {k.docs.map((d) => (
                                  <span key={d} className="px-2 py-0.5 rounded bg-gray-100 border border-gray-200 text-[10px] font-bold text-gray-700">
                                    {d}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="py-3 px-3 text-gray-600">{k.appliedOn}</td>
                            <td className="py-3 px-3 text-right">
                              {k.status === 'Pending' ? (
                                <div className="inline-flex gap-1.5">
                                  <button
                                    type="button"
                                    onClick={() => handleKycAction(k.id, 'Approved')}
                                    className="px-3 py-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] cursor-pointer"
                                  >
                                    Approve
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleKycAction(k.id, 'Rejected')}
                                    className="px-3 py-1 rounded-md border border-red-200 text-red-600 hover:bg-red-50 font-bold text-[11px] cursor-pointer"
                                  >
                                    Reject
                                  </button>
                                </div>
                              ) : (
                                <span className={`px-2.5 py-1 rounded-md border text-[11px] font-bold ${statusBadge(k.status)}`}>
                                  {k.status}
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {section === 'parcels' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h1 className="text-xl font-extrabold text-gray-900">Parcel Orders</h1>
                  <p className="text-xs text-gray-500">Manage parcel bookings, tracking and proof of delivery</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 inline-flex items-center gap-1.5">
                  <MapPin size={13} weight="fill" className="text-amber-500" />
                  <span>{city}</span>
                </span>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-2xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { id: 'All' as const, label: 'All (4,928)' },
                      { id: 'Picked Up' as const, label: 'Picked Up (142)' },
                      { id: 'In Transit' as const, label: 'In Transit (198)' },
                      { id: 'Delivered' as const, label: 'Delivered (4,518)' },
                      { id: 'Cancelled' as const, label: 'Cancelled (70)' },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setParcelTab(t.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                          parcelTab === t.id ? 'bg-[#F5A623] text-[#111318]' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                  <div className="relative w-60">
                    <MagnifyingGlass size={14} className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="search"
                      placeholder="Search by order ID, sender, receiver..."
                      className="w-full pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="table-wrapper" tabIndex={0} role="region" aria-label="Parcel orders">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
                      <tr>
                        <th className="py-2.5 px-3 font-semibold">Order ID</th>
                        <th className="py-2.5 px-3 font-semibold">Parcel Details</th>
                        <th className="py-2.5 px-3 font-semibold">Sender → Receiver</th>
                        <th className="py-2.5 px-3 font-semibold">Partner</th>
                        <th className="py-2.5 px-3 font-semibold">Amount</th>
                        <th className="py-2.5 px-3 font-semibold">Status</th>
                        <th className="py-2.5 px-3 font-semibold text-right">Proof</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {PARCEL_ORDERS.filter((p) => parcelTab === 'All' || p.status === parcelTab).map((p) => (
                        <tr key={p.id} className="hover:bg-gray-50/60">
                          <td className="py-3 px-3 font-bold text-gray-900">{p.id}</td>
                          <td className="py-3 px-3 text-gray-700 font-medium">{p.details}</td>
                          <td className="py-3 px-3 text-gray-700">
                            {p.sender} <span className="text-gray-400">→</span> {p.receiver}
                          </td>
                          <td className="py-3 px-3 text-gray-700">{p.partner}</td>
                          <td className="py-3 px-3 font-bold text-gray-900">₹{p.amount}</td>
                          <td className="py-3 px-3">
                            <span className={`px-2.5 py-0.5 rounded-md border text-[11px] font-semibold ${statusBadge(p.status)}`}>
                              {p.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right">
                            {p.hasProof ? (
                              <button
                                type="button"
                                onClick={() => openPodModal(p.id)}
                                className="inline-block rounded-md overflow-hidden border border-gray-200 hover:ring-2 hover:ring-amber-400 cursor-pointer"
                                aria-label={`View proof of delivery for ${p.id}`}
                              >
                                <img src={`${import.meta.env.BASE_URL}assets/pod-thumb.png`} alt="POD" className="w-7 h-7 object-cover" />
                              </button>
                            ) : (
                              <span className="text-[11px] text-gray-400">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {section === 'finance' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h1 className="text-xl font-extrabold text-gray-900">Payouts &amp; Withdrawals</h1>
                  <p className="text-xs text-gray-500">Manage partner withdrawal requests and payout history</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 inline-flex items-center gap-1.5">
                  <MapPin size={13} weight="fill" className="text-amber-500" />
                  <span>{city}</span>
                </span>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-2xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex gap-2">
                    {[
                      { id: 'Pending' as const, label: `Withdrawal Requests (${20 + payoutList.filter((p) => p.status === 'Pending').length})` },
                      { id: 'Processed' as const, label: `Processed (${1842 + payoutList.filter((p) => p.status === 'Processed').length})` },
                      { id: 'Failed' as const, label: `Failed (${12 + payoutList.filter((p) => p.status === 'Failed').length})` },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setPayoutTab(t.id)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                          payoutTab === t.id ? 'bg-[#F5A623] text-[#111318]' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                  <div className="relative w-60">
                    <MagnifyingGlass size={14} className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="search"
                      placeholder="Search by partner, UPI, reference..."
                      className="w-full pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="table-wrapper" tabIndex={0} role="region" aria-label="Payout requests">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
                      <tr>
                        <th className="py-2.5 px-3 font-semibold">Request ID</th>
                        <th className="py-2.5 px-3 font-semibold">Partner</th>
                        <th className="py-2.5 px-3 font-semibold">Amount</th>
                        <th className="py-2.5 px-3 font-semibold">Method</th>
                        <th className="py-2.5 px-3 font-semibold">Requested On</th>
                        <th className="py-2.5 px-3 font-semibold text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {payoutList
                        .filter((p) => (payoutTab === 'Pending' ? true : p.status === payoutTab))
                        .map((p) => (
                          <tr key={p.id} className="hover:bg-gray-50/60">
                            <td className="py-3 px-3 font-bold text-gray-900">{p.id}</td>
                            <td className="py-3 px-3">
                              <span className="font-bold text-gray-900">{p.partnerName}</span>{' '}
                              <span className="text-gray-400">({p.partnerId})</span>
                            </td>
                            <td className="py-3 px-3 font-extrabold text-gray-900">₹{p.amount.toLocaleString('en-IN')}</td>
                            <td className="py-3 px-3">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-semibold text-[11px]">
                                <CreditCard size={12} weight="duotone" /> {p.method}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-gray-600">{p.requestedOn}</td>
                            <td className="py-3 px-3 text-right">
                              {p.status === 'Pending' ? (
                                <div className="inline-flex gap-1.5">
                                  <button
                                    type="button"
                                    onClick={() => handlePayoutAction(p.id, 'Processed')}
                                    className="px-3 py-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] cursor-pointer"
                                  >
                                    Approve
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handlePayoutAction(p.id, 'Failed')}
                                    className="px-3 py-1 rounded-md border border-red-200 text-red-600 hover:bg-red-50 font-bold text-[11px] cursor-pointer"
                                  >
                                    Reject
                                  </button>
                                </div>
                              ) : (
                                <span className={`px-2.5 py-1 rounded-md border text-[11px] font-bold ${statusBadge(p.status)}`}>
                                  {p.status}
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {section === 'fare' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h1 className="text-xl font-extrabold text-gray-900">Fare &amp; Commission Configuration</h1>
                  <p className="text-xs text-gray-500">Configure fares, vehicle types, zones, surge and commission rules</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 inline-flex items-center gap-1.5">
                  <MapPin size={13} weight="fill" className="text-amber-500" />
                  <span>{city}</span>
                </span>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-2xs space-y-4">
                <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-3">
                  {['Fare Settings', 'Vehicle Types', 'Weight Slabs (Parcel)', 'Zones', 'Commission', 'Surge & Incentives'].map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setFareTab(tab)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                        fareTab === tab ? 'bg-[#F5A623] text-[#111318]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  <div className="lg:col-span-3 space-y-1.5">
                    <div className="text-xs font-bold text-gray-700 mb-2">Vehicle Type</div>
                    {Object.keys(fareConfigs).map((vt) => {
                      const active = fareVehicle === vt;
                      const iconKey = vt.includes('Bike') ? 'Bike' : vt.includes('Auto') ? 'Auto' : vt.includes('Sedan') ? 'Sedan' : vt.includes('SUV') ? 'SUV' : 'Mini';
                      return (
                        <button
                          key={vt}
                          type="button"
                          onClick={() => setFareVehicle(vt)}
                          className={`w-full px-3 py-2.5 rounded-xl border flex items-center gap-2.5 text-xs font-bold transition cursor-pointer ${
                            active ? 'bg-[#FFFBEB] border-[#F5A623] text-gray-900' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <RealisticVehicleIcon type={iconKey} className="w-7 h-4" />
                          <span>{vt}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="lg:col-span-5 rounded-xl border border-gray-200 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h2 className="text-sm font-extrabold text-gray-900">Fare Rules – {fareVehicle}</h2>
                      <label className="flex items-center gap-2 text-xs font-semibold text-gray-700 cursor-pointer">
                        <input
                          type="checkbox"
                          {...({ switch: '' } as React.InputHTMLAttributes<HTMLInputElement>)}
                          checked={activeFare.active}
                          onChange={(e) => updateFareField('active', e.target.checked)}
                          className="w-8 h-4"
                        />
                        <span>Active</span>
                      </label>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <label className="space-y-1 block">
                        <span className="text-[11px] font-semibold text-gray-600 block">Base Fare</span>
                        <div className="flex items-center border border-gray-200 rounded-lg px-2.5 py-1.5 bg-gray-50">
                          <span className="text-gray-400 mr-1.5">₹</span>
                          <input
                            type="text"
                            value={activeFare.baseFare}
                            onChange={(e) => updateFareField('baseFare', e.target.value)}
                            className="w-full font-bold text-gray-900 bg-transparent focus:outline-none"
                          />
                        </div>
                      </label>
                      <label className="space-y-1 block">
                        <span className="text-[11px] font-semibold text-gray-600 block">Per Km</span>
                        <div className="flex items-center border border-gray-200 rounded-lg px-2.5 py-1.5 bg-gray-50">
                          <span className="text-gray-400 mr-1.5">₹</span>
                          <input
                            type="text"
                            value={activeFare.perKm}
                            onChange={(e) => updateFareField('perKm', e.target.value)}
                            className="w-full font-bold text-gray-900 bg-transparent focus:outline-none"
                          />
                        </div>
                      </label>
                      <label className="space-y-1 block">
                        <span className="text-[11px] font-semibold text-gray-600 block">Per Minute (Ride Time)</span>
                        <div className="flex items-center border border-gray-200 rounded-lg px-2.5 py-1.5 bg-gray-50">
                          <span className="text-gray-400 mr-1.5">₹</span>
                          <input
                            type="text"
                            value={activeFare.perMin}
                            onChange={(e) => updateFareField('perMin', e.target.value)}
                            className="w-full font-bold text-gray-900 bg-transparent focus:outline-none"
                          />
                        </div>
                      </label>
                      <label className="space-y-1 block">
                        <span className="text-[11px] font-semibold text-gray-600 block">Waiting Charge (per min)</span>
                        <div className="flex items-center border border-gray-200 rounded-lg px-2.5 py-1.5 bg-gray-50">
                          <span className="text-gray-400 mr-1.5">₹</span>
                          <input
                            type="text"
                            value={activeFare.waitingCharge}
                            onChange={(e) => updateFareField('waitingCharge', e.target.value)}
                            className="w-full font-bold text-gray-900 bg-transparent focus:outline-none"
                          />
                        </div>
                      </label>
                      <label className="space-y-1 block">
                        <span className="text-[11px] font-semibold text-gray-600 block">Night Charge (10 PM – 5 AM)</span>
                        <select
                          value={activeFare.nightCharge}
                          onChange={(e) => updateFareField('nightCharge', e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-2.5 py-1.5 bg-gray-50 font-bold text-gray-900 focus:outline-none cursor-pointer"
                        >
                          <option>+ 20 %</option>
                          <option>+ 25 %</option>
                          <option>+ 30 %</option>
                        </select>
                      </label>
                      <label className="space-y-1 block">
                        <span className="text-[11px] font-semibold text-gray-600 block">Surge Multiplier (Max)</span>
                        <select
                          value={activeFare.surgeMax}
                          onChange={(e) => updateFareField('surgeMax', e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-2.5 py-1.5 bg-gray-50 font-bold text-gray-900 focus:outline-none cursor-pointer"
                        >
                          <option>2.0 x</option>
                          <option>2.5 x</option>
                          <option>3.0 x</option>
                        </select>
                      </label>
                    </div>
                  </div>

                  <div className="lg:col-span-4 rounded-xl border border-gray-200 p-4 flex flex-col justify-between space-y-3">
                    <div className="space-y-2.5 text-xs">
                      <h3 className="text-xs font-extrabold text-gray-900">Additional Rules ({fareVehicle.split(' ')[0]})</h3>
                      {[
                        { label: 'Commission to Platform', val: activeFare.commission },
                        { label: 'Cancellation Charge (User)', val: `₹ ${activeFare.userCancel}` },
                        { label: 'Cancellation Charge (Partner)', val: `₹ ${activeFare.partnerCancel}` },
                        { label: 'Min Fare (Optional)', val: `₹ ${activeFare.minFare}` },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between py-1 border-b border-gray-100 last:border-0">
                          <span className="text-gray-600">{row.label}</span>
                          <span className="font-extrabold text-gray-900">{row.val}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-2">
                      {fareSaved ? (
                        <span className="text-xs font-bold text-emerald-600 inline-flex items-center gap-1">
                          <span>Saved</span>
                          <Check size={12} weight="bold" />
                        </span>
                      ) : (
                        <span />
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          setFareSaved(true);
                          setTimeout(() => setFareSaved(false), 2000);
                        }}
                        className="px-5 py-2 rounded-lg bg-[#F5A623] hover:bg-amber-500 text-[#111318] font-bold text-xs shadow-xs cursor-pointer"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!['dashboard', 'operations', 'kyc', 'parcels', 'finance', 'fare'].includes(section) && (
            <ExtraPage pageId={section} onRespondSos={openSosModal} />
          )}
        </main>
      </div>

      <dialog ref={sosDialogRef} {...({ closedby: 'any' } as React.DialogHTMLAttributes<HTMLDialogElement>)} aria-labelledby="sos-modal-title" className="m-auto rounded-2xl p-0 max-w-md w-[92%] shadow-2xl border border-red-200">
        <div className="p-5 space-y-4 bg-white">
          <div className="flex items-center gap-2.5 text-red-600">
            <Siren size={20} weight="fill" />
            <h1 id="sos-modal-title" className="text-base font-extrabold text-gray-900">
              Respond to SOS Alert ({activeSosId})
            </h1>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Emergency telemetry is active for <strong>{city}</strong>. Dispatch safety support, initiate masked call to passenger &amp; partner, or notify local authorities.
          </p>
          <form method="dialog" className="flex items-center justify-end gap-2 pt-2">
            <button value="cancel" autoFocus className="px-4 py-2 rounded-lg border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50 cursor-pointer">
              Close
            </button>
            <button value="dispatch" className="px-4 py-2 rounded-lg bg-[#F5A623] text-[#111318] text-xs font-bold hover:bg-amber-500 cursor-pointer">
              Dispatch Safety Team
            </button>
          </form>
        </div>
      </dialog>

      <dialog ref={podDialogRef} {...({ closedby: 'any' } as React.DialogHTMLAttributes<HTMLDialogElement>)} aria-labelledby="pod-modal-title" className="m-auto rounded-2xl p-0 max-w-sm w-[92%] shadow-2xl border border-gray-200">
        <div className="p-5 space-y-3 bg-white">
          <h1 id="pod-modal-title" className="text-base font-extrabold text-gray-900">
            Proof of Delivery — {activePodId}
          </h1>
          <img src={`${import.meta.env.BASE_URL}assets/pod-thumb.png`} alt="Proof of delivery parcel" className="w-full h-56 object-cover rounded-xl border border-gray-200" />
          <div className="text-xs text-gray-600">Verified via Delivery OTP &amp; Partner photo capture.</div>
          <form method="dialog" className="flex justify-end pt-1">
            <button value="close" autoFocus className="px-4 py-2 rounded-lg bg-[#111318] text-white text-xs font-bold cursor-pointer">
              Done
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default App;
