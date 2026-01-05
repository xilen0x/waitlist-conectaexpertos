import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { useWaitlistContext } from './providers/WaitlistProvider';

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const { waitlistCount } = useWaitlistContext();

  const handleSubmitted = () => {
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#F4EEE8', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <div style={{ maxWidth: '28rem', textAlign: 'center' }}>
          <CheckCircle style={{ width: '4rem', height: '4rem', color: '#114E60', margin: '0 auto 1.5rem' }} />
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#325288', marginBottom: '1rem' }}>
            ¡Gracias por tu interés!
          </h2>
          <p style={{ color: '#114E60', marginBottom: '0.5rem' }}>Te notificaremos cuando lancemos.</p>
          <p style={{ fontSize: '0.875rem', color: '#325288', opacity: 0.7 }}>
            Eres el número #{waitlistCount} en la lista
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F4EEE8' }}>
      <Hero onSubmitted={handleSubmitted} />
      <Services />
      <Footer />
    </div>
  );
};

export default App;