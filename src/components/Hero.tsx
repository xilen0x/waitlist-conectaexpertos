import './Hero.css';
import { useWaitlistContext } from "../providers/WaitlistProvider";
import { WaitlistForm } from "./WaitlistForm";
import heroImage from '../assets/228_1x_shots_so.png';

interface HeroProps {
  onSubmitted: () => void;
}

export const Hero = ({ onSubmitted }: HeroProps) => {
  const { waitlistCount } = useWaitlistContext();

  return (
    <div className="hero-container" style={{ backgroundColor: '#BFDBFE', color: '#333' }}>
      <div className="hero-content">
        <div className="hero-image-container">
          <img src={heroImage} alt="Conecta Expertos App" className="hero-image" />
        </div>
        <div className="hero-text-container">
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: '1.2', color: '#325288' }}>
            Únete a la lista de espera de 
            <br />
            <span style={{ color: '#114E60' }}>Conecta&bull;Expertos</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#374151', opacity: 0.9, maxWidth: '42rem', margin: '0 auto 2.5rem' }}>
            La nueva app para encontrar profesionales del área <span style={{ color: '#D97706' }}>social y jurídica</span> en Chile. 
          </p>
          <p style={{ fontSize: '1.25rem', color: '#374151', opacity: 0.9, maxWidth: '42rem', margin: '0 auto 2.5rem', marginTop: '-1.5rem' }}>
            ¿Eres un profesional? Únete a nuestra plataforma para conectar con nuevos clientes y expandir tu alcance.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#1E40AF', opacity: 1, marginTop: '1rem', fontWeight: 'bold' }}>
            Sé el primero en saber cuando lancemos.
          </p>

          <WaitlistForm onSubmitted={onSubmitted} />
          
          <p style={{ fontSize: '0.875rem', color: '#4B5563', opacity: 0.7, marginTop: '0.75rem' }}>
            {waitlistCount} personas en lista de espera
          </p>
        </div>
      </div>
    </div>
  )
}
