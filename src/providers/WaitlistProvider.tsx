import React, { createContext, useContext } from 'react';
import { useWaitlist } from '../hooks/useWaitlist';

interface WaitlistContextType {
  waitlistCount: number;
  addToWaitlist: (email: string) => Promise<void>;
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export const WaitlistProvider = ({ children }: { children: React.ReactNode }) => {
  const waitlist = useWaitlist();
  
  return (
    <WaitlistContext.Provider value={waitlist}>
      {children}
    </WaitlistContext.Provider>
  );
};

export const useWaitlistContext = () => {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error('useWaitlistContext must be used within a WaitlistProvider');
  }
  return context;
};