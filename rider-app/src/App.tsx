import React, { useState } from 'react';
import { MobileAppShell } from './components/MobileAppShell';
import { RiderDrawer } from './components/RiderDrawer';
import type { RiderRouteName } from './navigation/types';
import { EarningsScreen } from './screens/EarningsScreen';
import { HomeScreen } from './screens/HomeScreen';
import { IncomingRequestScreen } from './screens/IncomingRequestScreen';
import { KycScreen } from './screens/KycScreen';
import { LoginScreen } from './screens/LoginScreen';
import { OnTripScreen } from './screens/OnTripScreen';
import { RiderHistoryScreen, RiderSupportScreen } from './screens/SecondaryScreens';
import { SplashScreen } from './screens/SplashScreen';

export function App() {
  const [route, setRoute] = useState<RiderRouteName>('Splash');
  const [walletBalance, setWalletBalance] = useState(1250);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <MobileAppShell>
      {route === 'Splash' && <SplashScreen onNavigate={setRoute} />}
      {route === 'Login' && <LoginScreen onNavigate={setRoute} />}
      {route === 'Kyc' && <KycScreen onNavigate={setRoute} />}
      {route === 'Home' && (
        <HomeScreen
          onNavigate={setRoute}
          onOpenMenu={() => setDrawerOpen(true)}
          walletBalance={walletBalance}
        />
      )}
      {route === 'IncomingRequest' && <IncomingRequestScreen onNavigate={setRoute} />}
      {route === 'OnTrip' && <OnTripScreen onNavigate={setRoute} />}
      {route === 'Earnings' && (
        <EarningsScreen
          onNavigate={setRoute}
          walletBalance={walletBalance}
          onWithdraw={(amt) => setWalletBalance((b) => Math.max(0, b - amt))}
        />
      )}
      {route === 'History' && <RiderHistoryScreen onNavigate={setRoute} />}
      {route === 'Support' && <RiderSupportScreen onNavigate={setRoute} />}

      <RiderDrawer
        open={drawerOpen}
        activeRoute={route}
        walletBalance={walletBalance}
        onClose={() => setDrawerOpen(false)}
        onNavigate={setRoute}
      />
    </MobileAppShell>
  );
}

export default App;
