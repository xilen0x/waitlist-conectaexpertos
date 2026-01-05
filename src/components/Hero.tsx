import { useWaitlistContext } from "../providers/WaitlistProvider"
import { WaitlistForm } from "./WaitlistForm"

interface HeroProps {
  onSubmitted: () => void;
}

export const Hero = ({ onSubmitted }: HeroProps) => {
  const { waitlistCount } = useWaitlistContext();

  return (
    <div style={{ backgroundColor: '#325288', color: 'white' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '5rem 1rem 6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Conecta con profesionales
            <br />
            <span style={{ color: '#F5CEBE' }}>verificados en Chile</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'white', opacity: 0.9, maxWidth: '42rem', margin: '0 auto 2.5rem' }}>
            Encuentra y agenda con expertos en servicios sociales y jurídicos de forma rápida y segura
          </p>

          <WaitlistForm onSubmitted={onSubmitted} />
          
          <p style={{ fontSize: '0.875rem', color: 'white', opacity: 0.7, marginTop: '0.75rem' }}>
            {waitlistCount} personas en lista de espera
          </p>
        </div>
      </div>
    </div>
  )
}
