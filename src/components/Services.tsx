import React from 'react';
import { services as servicesData } from '../services/data';
import { Brain, Scale, HandHeart, MessageSquare, GraduationCap, Leaf } from 'lucide-react';

const icons: { [key: string]: React.ElementType } = {
  Brain,
  Scale,
  HandHeart,
  MessageSquare,
  GraduationCap,
  Leaf,
};

export const Services = () => {
  const services = servicesData.map(service => ({
    ...service,
    icon: icons[service.icon],
  }));

  return (
    <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '4rem 1rem' }}>
      <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#325288', textAlign: 'center', marginBottom: '3rem' }}>
        Áreas de servicio
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: '60rem', margin: '0 auto' }}>
        {services.map((service, index) => {
          const ServiceIcon = service.icon;
          return (
            <div 
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'}
            >
              <ServiceIcon style={{ width: '2.5rem', height: '2.5rem', color: index % 2 === 0 ? '#325288' : '#114E60', margin: '0 auto 0.75rem' }} />
              <h3 style={{ fontWeight: '600', color: '#325288', fontSize: '1rem' }}>{service.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  )
}
