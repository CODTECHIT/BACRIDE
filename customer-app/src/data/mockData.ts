export interface RideVehicleOption {
  id: string;
  name: string;
  eta: string;
  range: string;
  fare: number;
  image: string;
  badge?: string;
}

export const RIDE_OPTIONS: RideVehicleOption[] = [
  { id: 'bike', name: 'Bike', eta: '~ 2 min away', range: 'Fastest', fare: 45, image: 'assets/bike.png' },
  { id: 'scooty', name: 'Scooty', eta: '~ 2 min away', range: 'Comfortable', fare: 40, image: 'assets/scooty.png' },
  { id: 'bike_lite', name: 'Bike Lite', eta: '~ 3 min away', range: 'Saver', fare: 35, image: 'assets/bike_on_discount.png', badge: '15% OFF' },
  { id: 'auto', name: 'Auto', eta: '~ 4 min away', range: 'Doorstep', fare: 75, image: 'assets/auto.png' },
  { id: 'shared_auto', name: 'Shared Auto', eta: '~ 4 min away', range: 'Pool', fare: 35, image: 'assets/auto_for_3people.png', badge: 'POOL' },
  { id: 'cab_non_ac', name: 'Cab Non AC', eta: '~ 5 min away', range: 'Economical', fare: 120, image: 'assets/car.png' },
  { id: 'cab_premium', name: 'Cab Premium AC', eta: '~ 6 min away', range: 'Top Rated', fare: 160, image: 'assets/ac_car.png', badge: 'AC' },
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
