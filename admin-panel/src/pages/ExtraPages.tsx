import React, { useState } from 'react';
import {
  BellRinging,
  Check,
  DownloadSimple,
  FileText,
  Gear,
  Gift,
  Headset,
  MagnifyingGlass,
  Plus,
  ShieldCheck,
  Siren,
  Star,
  Tag,
  UserCheck,
} from '@phosphor-icons/react';
import { AdminCityMap } from '../components/AdminCityMap';
import { RECENT_RIDES, SOS_ALERTS } from '../data/mockData';

export const ExtraPage: React.FC<{ pageId: string; onRespondSos: (id: string) => void }> = ({ pageId, onRespondSos }) => {
  const [search, setSearch] = useState('');
  const [cmsTab, setCmsTab] = useState<'Terms' | 'Privacy Policy' | 'FAQs'>('Terms');
  const [savedMsg, setSavedMsg] = useState<string | null>(null);
  const [userRows, setUserRows] = useState([
    { id: 'USR1001', name: 'Arif Hasan', phone: '+91 98480 12345', rides: 48, wallet: '₹1,250', status: 'Active' },
    { id: 'USR1002', name: 'Sreeja M.', phone: '+91 98481 55210', rides: 32, wallet: '₹420', status: 'Active' },
    { id: 'USR1003', name: 'Vikram D.', phone: '+91 98490 77812', rides: 19, wallet: '₹890', status: 'Active' },
    { id: 'USR1004', name: 'Priya K.', phone: '+91 90001 33412', rides: 12, wallet: '₹0', status: 'Blocked' },
  ]);
  const [ticketRows, setTicketRows] = useState([
    { id: 'TKT-4091', user: 'Arif Hasan (User)', category: 'Fare Adjustment', subject: 'Double charge on #BR728941', status: 'Open' },
    { id: 'TKT-4090', user: 'Rahim Uddin (Partner)', category: 'Payout Delay', subject: 'UPI payout #WD87420 pending', status: 'In Review' },
    { id: 'TKT-4088', user: 'Sreeja M. (User)', category: 'Lost Item', subject: 'Left umbrella in Auto #TS09-CD-7890', status: 'Resolved' },
  ]);

  const flash = (msg: string) => {
    setSavedMsg(msg);
    setTimeout(() => setSavedMsg(null), 2500);
  };

  if (pageId === 'users') {
    return (
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900">Users Management</h1>
            <p className="text-xs text-gray-500">View, search, block/unblock registered customer accounts and wallet balances.</p>
          </div>
          <div className="relative w-64">
            <MagnifyingGlass size={14} className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search user name or phone..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 shadow-2xs overflow-hidden table-wrapper" tabIndex={0} role="region" aria-label="Users directory">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
              <tr>
                <th className="py-2.5 px-4 font-semibold">User ID</th>
                <th className="py-2.5 px-4 font-semibold">Name</th>
                <th className="py-2.5 px-4 font-semibold">Mobile</th>
                <th className="py-2.5 px-4 font-semibold">Total Rides</th>
                <th className="py-2.5 px-4 font-semibold">Wallet</th>
                <th className="py-2.5 px-4 font-semibold">Status</th>
                <th className="py-2.5 px-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {userRows
                .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.phone.includes(search))
                .map((u) => (
                  <tr key={u.id} className="hover:bg-gray-50/70">
                    <td className="py-2.5 px-4 font-bold text-gray-900">{u.id}</td>
                    <td className="py-2.5 px-4 font-medium text-gray-800">{u.name}</td>
                    <td className="py-2.5 px-4 text-gray-600">{u.phone}</td>
                    <td className="py-2.5 px-4 text-gray-700">{u.rides}</td>
                    <td className="py-2.5 px-4 font-bold text-gray-900">{u.wallet}</td>
                    <td className="py-2.5 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${u.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                        {u.status}
                      </span>
                    </td>
                    <td className="py-2.5 px-4 text-right">
                      <button
                        type="button"
                        onClick={() =>
                          setUserRows((prev) =>
                            prev.map((row) =>
                              row.id === u.id ? { ...row, status: row.status === 'Active' ? 'Blocked' : 'Active' } : row
                            )
                          )
                        }
                        className="px-2.5 py-1 rounded-md border border-gray-200 text-[11px] font-semibold hover:bg-gray-100 cursor-pointer"
                      >
                        {u.status === 'Active' ? 'Block' : 'Unblock'}
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (pageId === 'partners') {
    const partners = [
      { id: 'BRP10234', name: 'Rahim Uddin', vehicle: 'Bike • TS09 AB 5836', rating: '4.9', earnings: '₹24,850', status: 'Online' },
      { id: 'BRP10235', name: 'Imran S.', vehicle: 'Auto • TS09 CD 7890', rating: '4.8', earnings: '₹31,200', status: 'On Ride' },
      { id: 'BRP10236', name: 'Suresh P.', vehicle: 'Cab • TS09 EF 1122', rating: '4.9', earnings: '₹48,900', status: 'Online' },
      { id: 'BRP10237', name: 'Naresh G.', vehicle: 'Bike • TS09 GH 3344', rating: '4.7', earnings: '₹19,400', status: 'Offline' },
    ];
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900">Partners (Riders)</h1>
            <p className="text-xs text-gray-500">Monitor verified fleet partners, ratings, vehicle details, and active status.</p>
          </div>
          <span className="text-xs font-bold bg-amber-100 text-amber-800 px-3 py-1 rounded-full">18,460 Total Partners</span>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden table-wrapper" tabIndex={0} role="region" aria-label="Partners table">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
              <tr>
                <th className="py-2.5 px-4 font-semibold">Partner ID</th>
                <th className="py-2.5 px-4 font-semibold">Partner Name</th>
                <th className="py-2.5 px-4 font-semibold">Vehicle</th>
                <th className="py-2.5 px-4 font-semibold">Rating</th>
                <th className="py-2.5 px-4 font-semibold">Monthly Earnings</th>
                <th className="py-2.5 px-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {partners.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50/70">
                  <td className="py-2.5 px-4 font-bold text-gray-900">{p.id}</td>
                  <td className="py-2.5 px-4 font-semibold text-gray-800">{p.name}</td>
                  <td className="py-2.5 px-4 text-gray-600">{p.vehicle}</td>
                  <td className="py-2.5 px-4 font-semibold text-amber-600">
                    <span className="inline-flex items-center gap-1">
                      <span>{p.rating}</span>
                      <Star size={12} weight="fill" />
                    </span>
                  </td>
                  <td className="py-2.5 px-4 font-bold text-gray-900">{p.earnings}</td>
                  <td className="py-2.5 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${p.status === 'Online' ? 'bg-emerald-50 text-emerald-700' : p.status === 'On Ride' ? 'bg-amber-50 text-amber-700' : 'bg-gray-100 text-gray-600'}`}>
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (pageId === 'rides') {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900">Rides &amp; Bookings</h1>
            <p className="text-xs text-gray-500">All ongoing, scheduled, completed, and cancelled rides across Hyderabad.</p>
          </div>
          <span className="text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full">56,720 Bookings</span>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden table-wrapper" tabIndex={0} role="region" aria-label="All Rides">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
              <tr>
                <th className="py-2.5 px-4 font-semibold">Booking ID</th>
                <th className="py-2.5 px-4 font-semibold">Type</th>
                <th className="py-2.5 px-4 font-semibold">Customer</th>
                <th className="py-2.5 px-4 font-semibold">Partner</th>
                <th className="py-2.5 px-4 font-semibold">Route</th>
                <th className="py-2.5 px-4 font-semibold">Fare</th>
                <th className="py-2.5 px-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {RECENT_RIDES.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50/70">
                  <td className="py-2.5 px-4 font-bold text-gray-900">{r.id}</td>
                  <td className="py-2.5 px-4 font-semibold">{r.type}</td>
                  <td className="py-2.5 px-4">{r.customer}</td>
                  <td className="py-2.5 px-4">{r.partner}</td>
                  <td className="py-2.5 px-4 text-gray-600">{r.route}</td>
                  <td className="py-2.5 px-4 font-bold">₹{r.fare}</td>
                  <td className="py-2.5 px-4">
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">{r.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (pageId === 'tracking') {
    return (
      <div className="space-y-4">
        <div>
          <h1 className="text-xl font-extrabold text-gray-900">Live Tracking</h1>
          <p className="text-xs text-gray-500">Real-time WebSocket fleet telemetry across active Hyderabad corridors.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <AdminCityMap mode="dashboard" className="h-[460px]" />
        </div>
      </div>
    );
  }

  if (pageId === 'sos') {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
              <Siren size={20} weight="duotone" className="text-red-600" />
              <span>SOS Emergency Alerts</span>
            </h1>
            <p className="text-xs text-gray-500">Immediate safety escalation queue for active rides and riders.</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold">3 Active Alerts</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SOS_ALERTS.map((s) => (
            <div key={s.id} className="bg-white rounded-xl border border-red-200 p-4 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-red-600 text-white text-[10px] font-bold">{s.live ? 'LIVE SOS' : 'ALERT'}</span>
                <span className="text-[11px] text-gray-400">{s.timeAgo}</span>
              </div>
              <div>
                <div className="font-extrabold text-sm text-gray-900">{s.title}</div>
                <div className="text-xs text-gray-600 mt-0.5">{s.location}</div>
              </div>
              <button
                type="button"
                onClick={() => onRespondSos(s.id)}
                className="w-full py-2 rounded-lg bg-[#F5A623] hover:bg-amber-500 text-[#111318] font-bold text-xs cursor-pointer"
              >
                Respond &amp; Dispatch Support
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (pageId === 'incentives' || pageId === 'coupons' || pageId === 'notifications') {
    const titleMap: Record<string, { title: string; sub: string; icon: React.ElementType }> = {
      incentives: { title: 'Incentives & Bonus Rules', sub: 'Configure peak-hour multipliers, daily trip milestones, and weekly bonuses.', icon: Gift },
      coupons: { title: 'Coupons & Referrals', sub: 'Manage promo codes (e.g. BACRIDE50) and user/partner referral rewards.', icon: Tag },
      notifications: { title: 'Notifications & Banners', sub: 'Send targeted push alerts via FCM and manage app home carousel banners.', icon: BellRinging },
    };
    const meta = titleMap[pageId];
    const Icon = meta.icon;
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
              <Icon size={20} weight="duotone" className="text-amber-500" />
              <span>{meta.title}</span>
            </h1>
            <p className="text-xs text-gray-500">{meta.sub}</p>
          </div>
          <button type="button" onClick={() => flash('Created new campaign rule')} className="px-3.5 py-2 rounded-lg bg-[#F5A623] text-[#111318] font-bold text-xs flex items-center gap-1.5 cursor-pointer">
            <Plus size={14} weight="bold" /> Create New
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Morning Peak Boost', desc: '8 AM – 11 AM • +25% Partner Surge', badge: 'Active' },
            { name: 'BACRIDE50 Promo', desc: '50% off up to ₹40 on first 2 Bike rides', badge: 'Active' },
            { name: 'Weekend 20-Trip Bonus', desc: 'Earn ₹500 extra on completing 20 rides', badge: 'Scheduled' },
          ].map((card) => (
            <div key={card.name} className="bg-white rounded-xl border border-gray-200 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-gray-900">{card.name}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">{card.badge}</span>
              </div>
              <p className="text-xs text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
        {savedMsg && <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-lg">{savedMsg}</div>}
      </div>
    );
  }

  if (pageId === 'cms') {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
              <FileText size={20} weight="duotone" className="text-amber-500" />
              <span>CMS (Terms, Privacy Policy, FAQs)</span>
            </h1>
            <p className="text-xs text-gray-500">Manage static legal and help content displayed across User &amp; Partner apps.</p>
          </div>
          <button type="button" onClick={() => flash(`${cmsTab} content saved`)} className="px-4 py-2 rounded-lg bg-[#F5A623] text-[#111318] font-bold text-xs cursor-pointer">
            Save Changes
          </button>
        </div>
        <div className="flex gap-2">
          {(['Terms', 'Privacy Policy', 'FAQs'] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setCmsTab(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${cmsTab === t ? 'bg-[#111318] text-white' : 'bg-white border border-gray-200 text-gray-700'}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <label className="text-xs font-bold text-gray-700 block mb-2">{cmsTab} Content</label>
          <textarea
            rows={7}
            defaultValue={`Bacride ${cmsTab} — Standard platform terms governing bike, auto, cab rides, and parcel delivery services across Hyderabad and supported zones.`}
            className="w-full rounded-lg border border-gray-200 p-3 text-xs text-gray-800 focus:outline-none focus:border-amber-400"
          />
        </div>
        {savedMsg && <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-lg">{savedMsg}</div>}
      </div>
    );
  }

  if (pageId === 'support') {
    return (
      <div className="space-y-4">
        <div>
          <h1 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
            <Headset size={20} weight="duotone" className="text-amber-500" />
            <span>Support &amp; Tickets</span>
          </h1>
          <p className="text-xs text-gray-500">Customer &amp; Partner dispute tickets, lost-item reports, and live resolution queue.</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden table-wrapper" tabIndex={0} role="region" aria-label="Support tickets">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
              <tr>
                <th className="py-2.5 px-4 font-semibold">Ticket ID</th>
                <th className="py-2.5 px-4 font-semibold">Reporter</th>
                <th className="py-2.5 px-4 font-semibold">Category</th>
                <th className="py-2.5 px-4 font-semibold">Subject</th>
                <th className="py-2.5 px-4 font-semibold">Status</th>
                <th className="py-2.5 px-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {ticketRows.map((t) => (
                <tr key={t.id} className="hover:bg-gray-50/70">
                  <td className="py-2.5 px-4 font-bold text-gray-900">{t.id}</td>
                  <td className="py-2.5 px-4 font-medium text-gray-800">{t.user}</td>
                  <td className="py-2.5 px-4 text-gray-600">{t.category}</td>
                  <td className="py-2.5 px-4 text-gray-700">{t.subject}</td>
                  <td className="py-2.5 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${t.status === 'Resolved' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 text-right">
                    <button
                      type="button"
                      onClick={() => setTicketRows((prev) => prev.map((r) => (r.id === t.id ? { ...r, status: 'Resolved' } : r)))}
                      className="px-2.5 py-1 rounded-md bg-[#F5A623] text-[#111318] font-bold text-[11px] cursor-pointer"
                    >
                      {t.status === 'Resolved' ? 'Resolved' : 'Mark Resolved'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (pageId === 'reports') {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900">Reports &amp; Exports</h1>
            <p className="text-xs text-gray-500">Export rides, parcel orders, revenue settlements, and cancellation audits.</p>
          </div>
          <button type="button" onClick={() => flash('Exported full monthly CSV report')} className="px-4 py-2 rounded-lg bg-[#F5A623] text-[#111318] font-bold text-xs inline-flex items-center gap-1.5 cursor-pointer">
            <DownloadSimple size={15} weight="bold" /> Export All CSV
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Daily Ride & Revenue Ledger', rows: '56,720 records', updated: 'Today, 9:00 PM' },
            { name: 'Partner Payout & Commission Report', rows: '18,460 partners', updated: 'Today, 8:30 PM' },
            { name: 'Cancellations & SOS Audit Log', rows: '1,426 entries', updated: 'Today, 8:00 PM' },
          ].map((rep) => (
            <div key={rep.name} className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col justify-between gap-3">
              <div>
                <div className="font-bold text-sm text-gray-900">{rep.name}</div>
                <div className="text-xs text-gray-500 mt-1">{rep.rows} • Updated {rep.updated}</div>
              </div>
              <button type="button" onClick={() => flash(`Downloaded ${rep.name}`)} className="w-full py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-xs font-bold text-gray-800 inline-flex items-center justify-center gap-1.5 cursor-pointer">
                <DownloadSimple size={14} weight="bold" /> Download CSV
              </button>
            </div>
          ))}
        </div>
        {savedMsg && <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-lg">{savedMsg}</div>}
      </div>
    );
  }

  if (pageId === 'subadmins') {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
              <UserCheck size={20} weight="duotone" className="text-amber-500" />
              <span>Sub-Admins &amp; Role Permissions</span>
            </h1>
            <p className="text-xs text-gray-500">Manage role-based access for Operations, KYC Reviewers, Finance, and Safety Desk.</p>
          </div>
          <button type="button" onClick={() => flash('Sub-admin invite dialog ready')} className="px-4 py-2 rounded-lg bg-[#F5A623] text-[#111318] font-bold text-xs inline-flex items-center gap-1.5 cursor-pointer">
            <Plus size={14} weight="bold" /> Add Sub-Admin
          </button>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden table-wrapper" tabIndex={0} role="region" aria-label="Sub-admins">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
              <tr>
                <th className="py-2.5 px-4 font-semibold">Name</th>
                <th className="py-2.5 px-4 font-semibold">Email</th>
                <th className="py-2.5 px-4 font-semibold">Role</th>
                <th className="py-2.5 px-4 font-semibold">Zone</th>
                <th className="py-2.5 px-4 font-semibold">Access</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'N. Harish', email: 'harish@bacride.in', role: 'Super Admin', zone: 'All Cities', access: 'Full Access' },
                { name: 'Ananya Rao', email: 'kyc.hyd@bacride.in', role: 'KYC Reviewer', zone: 'Hyderabad', access: 'KYC & Partners' },
                { name: 'Kiran Reddy', email: 'finance@bacride.in', role: 'Finance Lead', zone: 'Hyderabad', access: 'Payouts & Fares' },
              ].map((sa) => (
                <tr key={sa.email}>
                  <td className="py-2.5 px-4 font-bold text-gray-900">{sa.name}</td>
                  <td className="py-2.5 px-4 text-gray-600">{sa.email}</td>
                  <td className="py-2.5 px-4 font-semibold text-amber-700">{sa.role}</td>
                  <td className="py-2.5 px-4 text-gray-700">{sa.zone}</td>
                  <td className="py-2.5 px-4 text-gray-600">{sa.access}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {savedMsg && <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-lg">{savedMsg}</div>}
      </div>
    );
  }

  // Settings
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
            <Gear size={20} weight="duotone" className="text-amber-500" />
            <span>Platform Settings</span>
          </h1>
          <p className="text-xs text-gray-500">Configure payment gateways, SMS OTP provider, Google Maps, and push notifications.</p>
        </div>
        <button type="button" onClick={() => flash('Platform settings saved')} className="px-4 py-2 rounded-lg bg-[#F5A623] text-[#111318] font-bold text-xs inline-flex items-center gap-1.5 cursor-pointer">
          <Check size={14} weight="bold" /> Save Settings
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { label: 'Payment Gateway Provider', val: 'Razorpay (UPI / Cards / NetBanking)' },
          { label: 'Maps & Geocoding', val: 'Google Maps Places & Directions API' },
          { label: 'SMS / OTP Gateway', val: 'MSG91 / Twilio India DLT' },
          { label: 'Push Notifications', val: 'Firebase Cloud Messaging (FCM)' },
        ].map((item) => (
          <label key={item.label} className="bg-white rounded-xl border border-gray-200 p-4 block space-y-1.5">
            <span className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
              <ShieldCheck size={14} weight="duotone" className="text-emerald-600" />
              <span>{item.label}</span>
            </span>
            <input type="text" defaultValue={item.val} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-900 focus:outline-none focus:border-amber-400" />
          </label>
        ))}
      </div>
      {savedMsg && <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-lg">{savedMsg}</div>}
    </div>
  );
};
