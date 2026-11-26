export interface RideVehicleOption {
  id: string;
  name: string;
  eta: string;
  range: string;
  fare: number;
  icon: 'Bike' | 'Auto' | 'Mini' | 'Sedan' | 'SUV';
}

export const RIDE_OPTIONS: RideVehicleOption[] = [
  { id: 'bike', name: 'Bike', eta: '~ 7 min', range: '2-4 min', fare: 80, icon: 'Bike' },
  { id: 'auto', name: 'Auto', eta: '~ 10 min', range: '3-5 min', fare: 130, icon: 'Auto' },
  { id: 'mini', name: 'Mini (Hatch)', eta: '~ 12 min', range: '4-6 min', fare: 220, icon: 'Mini' },
  { id: 'sedan', name: 'Sedan', eta: '~ 14 min', range: '5-7 min', fare: 320, icon: 'Sedan' },
  { id: 'suv', name: 'SUV', eta: '~ 16 min', range: '6-8 min', fare: 420, icon: 'SUV' },
];

export const RIDE_HISTORY = [
  { id: 'BR728941', type: 'Bike' as const, route: 'Madhapur → Gachibowli', date: 'Today, 5:40 PM', fare: 80, status: 'Completed' },
  { id: 'BR728810', type: 'Auto' as const, route: 'Jubilee Hills → Banjara Hills', date: '23 Nov, 11:15 AM', fare: 130, status: 'Completed' },
  { id: 'BR728452', type: 'Sedan' as const, route: 'Madhapur → RGIA Airport', date: '19 Nov, 6:00 AM', fare: 642, status: 'Completed' },
];

export const PARCEL_HISTORY = [
  { id: 'PR27198', item: 'Documents (1 - 2 kg)', route: 'Madhapur → Kondapur', date: 'Today, 2:10 PM', fare: 90, status: 'Delivered' },
  { id: 'PR27144', item: 'Electronics (2 - 5 kg)', route: 'Ameerpet → Hitech City', date: '21 Nov, 4:30 PM', fare: 180, status: 'Delivered' },
];

export const SAVED_PLACES = [
  { id: 'home', label: 'Home', address: 'Plot 42, Kavuri Hills, Madhapur, Hyderabad' },
  { id: 'work', label: 'Work', address: 'Mindspace IT Park, Phase 2, Hitech City' },
  { id: 'gym', label: 'Fitness Club', address: 'Road No. 36, Jubilee Hills, Hyderabad' },
];

export const CUSTOMER_NOTIFICATIONS = [
  { id: 'n1', title: 'Ride Completed — ₹80 paid via Wallet', time: '2 hours ago', unread: true },
  { id: 'n2', title: 'Use code BACRIDE50 for 50% off up to ₹40', time: 'Yesterday', unread: true },
  { id: 'n3', title: 'Parcel #PR27198 delivered to Nadia Rahman', time: '2 days ago', unread: false },
];
