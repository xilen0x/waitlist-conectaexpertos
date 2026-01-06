import React, { useState } from 'react';
import { useWaitlistContext } from '../providers/WaitlistProvider';
import './WaitlistForm.css';

interface WaitlistFormProps {
  onSubmitted: () => void;
}

export const WaitlistForm = ({ onSubmitted }: WaitlistFormProps) => {
  const [email, setEmail] = useState('');
  const { addToWaitlist } = useWaitlistContext();
  
  const handleSubmit = async () => {
    if (!email || !email.includes('@')) return;
    
    await addToWaitlist(email);
    setEmail('');
    onSubmitted();
  };

  return (
    <div className="waitlist-form-container">
      <div className="waitlist-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          className="waitlist-input"
        />
        <button
          onClick={handleSubmit}
          className="waitlist-button"
        >
          Unirme
        </button>
      </div>
    </div>
  )
}
