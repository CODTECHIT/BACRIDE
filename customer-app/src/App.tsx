import React, { useState } from 'react';
import { CustomerBottomNav, type CustomerNavTab } from './components/BottomNav';
import { CustomerDrawer } from './components/CustomerDrawer';
import { MobileAppShell } from './components/MobileAppShell';
import type { CustomerRouteName } from './navigation/types';
import { AccountScreen } from './screens/AccountScreen';
import { ChooseRideScreen } from './screens/ChooseRideScreen';
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { ParcelScreen } from './screens/ParcelScreen';
import { HistoryScreen, NotificationsScreen, SavedPlacesScreen, SupportScreen } from './screens/SecondaryScreens';
import { SplashScreen } from './screens/SplashScreen';
import { TrackingScreen } from './screens/TrackingScreen';
import { WalletScreen, type WalletTransaction } from './screens/WalletScreen';

const INITIAL_TRANSACTIONS: WalletTransaction[] = [
  { id: 'TX904', title: 'Bike Ride #BR728941', subtitle: 'Madhapur → Gachibowli', amount: 80, type: 'debit', date: 'Today, 5:45 PM' },
  { id: 'TX903', title: 'Wallet Top-Up', subtitle: 'UPI • arif@okaxis', amount: 500, type: 'credit', date: 'Today, 1:20 PM' },
  { id: 'TX902', title: 'Parcel Delivery #PR27198', subtitle: 'Madhapur → Kondapur', amount: 90, type: 'debit', date: 'Yesterday' },
  { id: 'TX901', title: 'Referral Bonus', subtitle: 'Friend joined Bacride', amount: 100, type: 'credit', date: '22 Nov' },
];

export function App() {
  const [route, setRoute] = useState<CustomerRouteName>('Splash');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedRide, setSelectedRide] = useState('bike');
  const [selectedCategory, setSelectedCategory] = useState<'Bike' | 'Auto' | 'Cab'>('Bike');
  const [parcelVehicle, setParcelVehicle] = useState<'Bike' | 'Auto' | 'Cab'>('Bike');
  const [pickup, setPickup] = useState('My Current Location (Madhapur, Hyd)');
  const [drop, setDrop] = useState('Gachibowli Circle, Hyderabad');
  const [walletBalance, setWalletBalance] = useState(1250);
  const [transactions, setTransactions] = useState<WalletTransaction[]>(INITIAL_TRANSACTIONS);

  const getActiveTab = (currentRoute: CustomerRouteName): CustomerNavTab => {
    if (currentRoute === 'Parcel') return 'Parcel';
    if (currentRoute === 'ChooseRide' || currentRoute === 'Tracking') return 'Ride';
    if (currentRoute === 'Account' || currentRoute === 'History' || currentRoute === 'SavedPlaces' || currentRoute === 'Support' || currentRoute === 'Wallet') {
      return 'Account';
    }
    return 'Home';
  };

  const activeNavTab = getActiveTab(route);

  const navigate = (next: CustomerRouteName) => {
    setRoute(next);
  };

  const handleBottomTab = (_tab: CustomerNavTab, targetRoute: CustomerRouteName) => {
    setRoute(targetRoute);
  };

  const handleAddMoney = (amount: number, method = 'UPI') => {
    setWalletBalance((b) => b + amount);
    setTransactions((prev) => [
      {
        id: `TX${Date.now().toString().slice(-4)}`,
        title: 'Wallet Top-Up',
        subtitle: `Added via ${method}`,
        amount,
        type: 'credit',
        date: 'Just now',
      },
      ...prev,
    ]);
  };

  const swapLocations = () => {
    const prevPickup = pickup;
    setPickup(drop);
    setDrop(prevPickup);
  };

  const showBottomNav = route !== 'Splash' && route !== 'Login';

  return (
    <MobileAppShell>
      {route === 'Splash' && <SplashScreen onNavigate={navigate} />}
      {route === 'Login' && <LoginScreen onNavigate={navigate} />}
      {route === 'Home' && (
        <HomeScreen
          onNavigate={navigate}
          onOpenMenu={() => setDrawerOpen(true)}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          pickup={pickup}
          setPickup={setPickup}
          drop={drop}
          setDrop={setDrop}
        />
      )}
      {route === 'ChooseRide' && (
        <ChooseRideScreen
          onNavigate={navigate}
          selectedRide={selectedRide}
          setSelectedRide={setSelectedRide}
          pickup={pickup}
          drop={drop}
          onSwapLocations={swapLocations}
        />
      )}
      {route === 'Parcel' && (
        <ParcelScreen
          onNavigate={navigate}
          parcelVehicle={parcelVehicle}
          setParcelVehicle={setParcelVehicle}
        />
      )}
      {route === 'Tracking' && <TrackingScreen onNavigate={navigate} />}
      {route === 'Wallet' && (
        <WalletScreen
          onNavigate={navigate}
          walletBalance={walletBalance}
          transactions={transactions}
          onAddMoney={handleAddMoney}
        />
      )}
      {route === 'Account' && (
        <AccountScreen
          onNavigate={navigate}
          walletBalance={walletBalance}
          onAddMoney={(amt) => handleAddMoney(amt, 'UPI')}
        />
      )}
      {route === 'History' && <HistoryScreen onNavigate={navigate} />}
      {route === 'SavedPlaces' && <SavedPlacesScreen onNavigate={navigate} />}
      {route === 'Support' && <SupportScreen onNavigate={navigate} />}
      {route === 'Notifications' && <NotificationsScreen onNavigate={navigate} />}

      {showBottomNav && <CustomerBottomNav activeTab={activeNavTab} onSelectTab={handleBottomTab} />}

      <CustomerDrawer
        open={drawerOpen}
        activeRoute={route}
        walletBalance={walletBalance}
        onClose={() => setDrawerOpen(false)}
        onNavigate={navigate}
      />
    </MobileAppShell>
  );
}

export default App;
