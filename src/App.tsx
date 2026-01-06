import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { useWaitlistContext } from './providers/WaitlistProvider';
import './App.css';

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const { waitlistCount } = useWaitlistContext();

  const handleSubmitted = () => {
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="submitted-container">
        <div className="submitted-content">
          <CheckCircle className="submitted-icon" />
          <h2 className="submitted-title">
            ¡Gracias por tu interés!
          </h2>
          <p className="submitted-message">Te notificaremos cuando lancemos.</p>
          <p className="submitted-waitlist-count">
            Eres el número #{waitlistCount} en la lista
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Hero onSubmitted={handleSubmitted} />
      <Services />
      <Footer />
    </div>
  );
};

export default App;