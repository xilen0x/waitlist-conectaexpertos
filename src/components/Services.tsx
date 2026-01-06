import React from 'react';
import { services as servicesData } from '../services/data';
import { Brain, Scale, HandHeart, MessageSquare, GraduationCap, Leaf } from 'lucide-react';
import './Services.css';

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
    <div className="services-container">
      <h2 className="services-title">
        Áreas de servicio
      </h2>
      <div className="services-grid">
        {services.map((service, index) => {
          const ServiceIcon = service.icon;
          return (
            <div
              key={index}
              className="service-card"
            >
              <ServiceIcon className="service-icon" />
              <h3 className="service-name">{service.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  )
}
