import { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';

export const useWaitlist = () => {
  const [waitlistCount, setWaitlistCount] = useState(0);

  useEffect(() => {
    const fetchWaitlistCount = async () => {
      const { count, error } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact' });

      if (error) {
        console.error('Error fetching waitlist count:', error);
      } else {
        setWaitlistCount(count || 0);
      }
    };

    fetchWaitlistCount();
  }, []);

  const addToWaitlist = async (email: string) => {
    const { error } = await supabase
      .from('waitlist')
      .insert([{ email, created_at: new Date() }]);

    if (error) {
      console.error('Error adding to waitlist:', error);
    } else {
      setWaitlistCount(prev => prev + 1);
    }
  };

  return { waitlistCount, addToWaitlist };
};