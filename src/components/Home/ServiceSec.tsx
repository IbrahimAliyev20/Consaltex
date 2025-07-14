import { services } from '@/lib/data/servicesData';
import React from 'react';
import ServiceCard from '../shared/ServiceCard';

interface ServiceSecProps {
  limit?: number; 
}

const ServiceSec: React.FC<ServiceSecProps> = ({ limit }) => {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section>
      <div className="space-y-8">
        {displayedServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSec;