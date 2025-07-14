
import React from 'react';
import ServiceCard from '../shared/ServiceCard';
import { OurServicesType } from '@/types/alltype'; 

interface ServiceSecProps {
  services: OurServicesType[];
  limit?: number; 
}

const ServiceSec: React.FC<ServiceSecProps> = ({ services = [], limit }) => {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section>
      <div className="space-y-8">
        {displayedServices.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSec;