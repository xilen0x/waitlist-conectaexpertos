import React, { useState } from 'react';
import { useWaitlistContext } from '../providers/WaitlistProvider';

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
    <div style={{ maxWidth: '28rem', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          style={{
            flex: 1,
            padding: '1rem 1.25rem',
            borderRadius: '0.5rem',
            border: 'none',
            color: '#325288',
            fontSize: '1rem',
            outline: 'none'
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: '#114E60',
            color: 'white',
            fontWeight: '600',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0d3a48'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#114E60'}
        >
          Unirme
        </button>
      </div>
    </div>
  )
}
