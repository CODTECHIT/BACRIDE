export interface RideBooking {
  id: string;
  type: 'Bike' | 'Auto' | 'Cab' | 'Parcel';
  customer: string;
  partner: string;
  route: string;
  fare: number;
  status: 'Completed' | 'Ongoing' | 'In Progress' | 'Picked Up' | 'On Ride' | 'Delivered';
}

export interface KycRequest {
  id: string;
  partnerId: string;
  name: string;
  vehicleType: 'Bike' | 'Auto' | 'Cab';
  vehicleNumber: string;
  docs: ('DL' | 'RC' | 'INS' | 'AAD')[];
  appliedOn: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

export interface ParcelOrderRow {
  id: string;
  details: string;
  sender: string;
  receiver: string;
  partner: string;
  amount: number;
  status: 'Delivered' | 'In Transit' | 'Picked Up' | 'Cancelled';
  hasProof: boolean;
}

export interface PayoutRequest {
  id: string;
  partnerName: string;
  partnerId: string;
  amount: number;
  method: 'UPI' | 'Bank';
  requestedOn: string;
  status: 'Pending' | 'Processed' | 'Failed';
}

export interface SosAlertItem {
  id: string;
  title: string;
  location: string;
  timeAgo: string;
  live?: boolean;
}

export const ADMIN_KPIS = [
  { label: 'Total Users', value: '2,48,320', delta: '+3.8%', note: 'vs. yesterday', positive: true, iconBg: 'bg-violet-100 text-violet-600' },
  { label: 'Partners', value: '18,460', delta: '+5.1%', note: 'vs. yesterday', positive: true, iconBg: 'bg-blue-100 text-blue-600' },
  { label: 'Total Bookings', value: '56,720', delta: '+7.4%', note: 'vs. yesterday', positive: true, iconBg: 'bg-amber-100 text-amber-600' },
  { label: 'Active Rides', value: '3,842', delta: 'Live now', note: '', positive: true, iconBg: 'bg-emerald-100 text-emerald-600', live: true },
  { label: 'Revenue', value: '₹28,76,540', delta: '+12.9%', note: 'vs. yesterday', positive: true, iconBg: 'bg-yellow-100 text-yellow-600' },
  { label: 'Cancellations', value: '1,426', delta: '-2.6%', note: 'vs. yesterday', positive: false, iconBg: 'bg-red-100 text-red-600' },
];

export const REVENUE_SERIES = {
  Daily: [
    { label: '19 Nov', value: 16.5 },
    { label: '20 Nov', value: 21.8 },
    { label: '21 Nov', value: 20.1 },
    { label: '22 Nov', value: 24.4 },
    { label: '23 Nov', value: 22.9 },
    { label: '24 Nov', value: 26.2 },
    { label: '25 Nov', value: 28.7 },
  ],
  Weekly: [
    { label: 'W1', value: 18.2 },
    { label: 'W2', value: 22.5 },
    { label: 'W3', value: 25.0 },
    { label: 'W4', value: 28.7 },
  ],
  Monthly: [
    { label: 'Jun', value: 19.4 },
    { label: 'Jul', value: 21.0 },
    { label: 'Aug', value: 23.6 },
    { label: 'Sep', value: 24.9 },
    { label: 'Oct', value: 27.1 },
    { label: 'Nov', value: 28.7 },
  ],
};

export const BOOKING_MIX = [
  { label: 'Bike Rides', count: '28,430', pct: 50.1, color: '#F59E0B' },
  { label: 'Auto Rides', count: '10,220', pct: 18.0, color: '#22C55E' },
  { label: 'Cab Rides', count: '12,640', pct: 22.3, color: '#6366F1' },
  { label: 'Parcel Delivery', count: '5,430', pct: 9.6, color: '#38BDF8' },
];

export const RECENT_RIDES: RideBooking[] = [
  { id: 'BR728941', type: 'Bike', customer: 'Arjun R.', partner: 'Ravi K.', route: 'Madhapur → Gachibowli', fare: 86, status: 'Completed' },
  { id: 'BR728940', type: 'Auto', customer: 'Sreeja M.', partner: 'Imran S.', route: 'Kukatpally → Hitech City', fare: 142, status: 'Ongoing' },
  { id: 'BR728939', type: 'Cab', customer: 'Vikram D.', partner: 'Suresh P.', route: 'Banjara Hills → Airport (RGIA)', fare: 642, status: 'In Progress' },
  { id: 'BP462118', type: 'Parcel', customer: 'Priya K.', partner: 'Naresh G.', route: 'Ameerpet → Dilsukhnagar', fare: 210, status: 'Picked Up' },
  { id: 'BR728937', type: 'Bike', customer: 'Karthik V.', partner: 'Mohan R.', route: 'Jubilee Hills → Begumpet', fare: 112, status: 'Completed' },
];

export const KYC_QUEUE: KycRequest[] = [
  { id: '1', partnerId: 'BRP10234', name: 'Ramesh K.', vehicleType: 'Bike', vehicleNumber: 'TS09 AB 4567', docs: ['DL', 'RC', 'INS', 'AAD'], appliedOn: '25 Nov 2026', status: 'Pending' },
  { id: '2', partnerId: 'BRP10235', name: 'Sowmya K.', vehicleType: 'Auto', vehicleNumber: 'TS09 CD 7890', docs: ['DL', 'RC', 'INS', 'AAD'], appliedOn: '25 Nov 2026', status: 'Pending' },
  { id: '3', partnerId: 'BRP10236', name: 'Mahesh B.', vehicleType: 'Cab', vehicleNumber: 'TS09 EF 1122', docs: ['DL', 'RC', 'INS', 'AAD'], appliedOn: '24 Nov 2026', status: 'Pending' },
  { id: '4', partnerId: 'BRP10237', name: 'Naveen C.', vehicleType: 'Bike', vehicleNumber: 'TS09 GH 3344', docs: ['DL', 'RC', 'INS', 'AAD'], appliedOn: '24 Nov 2026', status: 'Pending' },
];

export const SOS_ALERTS: SosAlertItem[] = [
  { id: 'BR728912', title: 'BR728912 – Ride SOS', location: 'Gachibowli, Hyderabad', timeAgo: '5 mins ago', live: true },
  { id: 'BR728867', title: 'BR728867 – Safety Alert', location: 'Hitech City, Hyderabad', timeAgo: '12 mins ago' },
  { id: 'BR728811', title: 'BR728811 – Passenger SOS', location: 'Kukatpally, Hyderabad', timeAgo: '18 mins ago' },
];

export const DISPATCH_QUEUE = [
  { id: 'BR458932', type: 'Bike Ride', route: 'Hitech City → Kondapur', dist: '2.4 km', fare: 96, ago: 'Just now' },
  { id: 'BR458934', type: 'Auto Ride', route: 'Kukatpally → Miyapur', dist: '5.1 km', fare: 145, ago: '1 min ago' },
  { id: 'PR27210', type: 'Parcel (2 kg)', route: 'Madhapur → Ameerpet', dist: '7.6 km', fare: 160, ago: '2 min ago' },
  { id: 'BR458936', type: 'Cab (Sedan)', route: 'Jubilee Hills → Gachibowli', dist: '11.2 km', fare: 380, ago: '4 min ago' },
];

export const PARCEL_ORDERS: ParcelOrderRow[] = [
  { id: 'PR27198', details: 'Books (2 kg)', sender: 'Arjun D.', receiver: 'Meena R.', partner: 'Ramesh K.', amount: 120, status: 'Delivered', hasProof: true },
  { id: 'PR27197', details: 'Electronics (5 kg)', sender: 'Vikas S.', receiver: 'Rohit P.', partner: 'Sandeep V.', amount: 340, status: 'In Transit', hasProof: false },
  { id: 'PR27196', details: 'Documents (1 kg)', sender: 'Neha K.', receiver: 'Aditya M.', partner: 'Ajay T.', amount: 90, status: 'Delivered', hasProof: true },
  { id: 'PR27195', details: 'Clothes (3 kg)', sender: 'Priya S.', receiver: 'Kavya L.', partner: 'Vikram R.', amount: 180, status: 'Picked Up', hasProof: false },
];

export const PAYOUT_REQUESTS: PayoutRequest[] = [
  { id: 'WD87421', partnerName: 'Ramesh K.', partnerId: 'BRP10234', amount: 5000, method: 'UPI', requestedOn: '24 Nov 2026, 11:20 AM', status: 'Pending' },
  { id: 'WD87420', partnerName: 'Sandeep V.', partnerId: 'BRP10235', amount: 3250, method: 'Bank', requestedOn: '24 Nov 2026, 10:05 AM', status: 'Pending' },
  { id: 'WD87419', partnerName: 'Vikas M.', partnerId: 'BRP10236', amount: 7500, method: 'UPI', requestedOn: '24 Nov 2026, 09:40 AM', status: 'Pending' },
  { id: 'WD87418', partnerName: 'Ajay T.', partnerId: 'BRP10237', amount: 2000, method: 'Bank', requestedOn: '24 Nov 2026, 08:55 AM', status: 'Pending' },
];

export const DEFAULT_FARE_CONFIGS: Record<string, {
  baseFare: string;
  perKm: string;
  perMin: string;
  waitingCharge: string;
  nightCharge: string;
  surgeMax: string;
  commission: string;
  userCancel: string;
  partnerCancel: string;
  minFare: string;
  active: boolean;
}> = {
  'Bike Ride': { baseFare: '25.00', perKm: '10.00', perMin: '1.50', waitingCharge: '2.00', nightCharge: '+ 20 %', surgeMax: '2.0 x', commission: '15 %', userCancel: '30.00', partnerCancel: '0.00', minFare: '30.00', active: true },
  'Auto Ride': { baseFare: '35.00', perKm: '14.00', perMin: '2.00', waitingCharge: '2.50', nightCharge: '+ 25 %', surgeMax: '2.0 x', commission: '15 %', userCancel: '40.00', partnerCancel: '0.00', minFare: '45.00', active: true },
  'Cab - Mini': { baseFare: '55.00', perKm: '16.00', perMin: '2.50', waitingCharge: '3.00', nightCharge: '+ 25 %', surgeMax: '2.5 x', commission: '18 %', userCancel: '50.00', partnerCancel: '20.00', minFare: '80.00', active: true },
  'Cab - Sedan': { baseFare: '75.00', perKm: '19.00', perMin: '3.00', waitingCharge: '3.50', nightCharge: '+ 25 %', surgeMax: '2.5 x', commission: '18 %', userCancel: '60.00', partnerCancel: '25.00', minFare: '110.00', active: true },
  'Cab - SUV': { baseFare: '110.00', perKm: '24.00', perMin: '4.00', waitingCharge: '4.00', nightCharge: '+ 30 %', surgeMax: '3.0 x', commission: '20 %', userCancel: '80.00', partnerCancel: '30.00', minFare: '160.00', active: true },
};
