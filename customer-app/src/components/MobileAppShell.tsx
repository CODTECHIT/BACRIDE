import React from 'react';

/**
 * Clean full-height mobile app shell (edge-to-edge on mobile devices,
 * centered 430px mobile viewport on desktop without artificial bezels).
 */
export const MobileAppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-[100dvh] w-full bg-[#ECEEF2] flex justify-center">
      <div className="w-full sm:max-w-[430px] h-[100dvh] bg-[#F9FAFB] sm:shadow-2xl sm:border-x sm:border-gray-200/80 flex flex-col overflow-hidden relative">
        {children}
      </div>
    </div>
  );
};
