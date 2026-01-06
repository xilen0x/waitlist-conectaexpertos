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
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-image-container">
          <img src={heroImage} alt="Conecta Expertos App" className="hero-image" />
        </div>
        <div className="hero-text-container">
          <h1 className="hero-title">
            Únete a la lista de espera de
            <br />
            <span className="hero-subtitle">Conecta&bull;Expertos</span>
          </h1>
          <p className="hero-description">
            La nueva app para encontrar profesionales del área <span className="hero-highlight">social y jurídica</span> en Chile.
          </p>
          <p className="hero-description">
            ¿Eres un profesional? Únete a nuestra plataforma para conectar con nuevos clientes y expandir tu alcance.
          </p>
          <p className="hero-cta">
            Sé el primero en saber cuando lancemos.
          </p>

          <WaitlistForm onSubmitted={onSubmitted} />

          <p className="hero-waitlist-count">
            {waitlistCount} personas en lista de espera
          </p>
        </div>
      </div>
    </div>
  )
}
