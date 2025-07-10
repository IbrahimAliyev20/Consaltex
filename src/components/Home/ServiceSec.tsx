
import { services } from '@/lib/data/servicesData';
import React from 'react';
import ServiceCard from '../shared/ServiceCard';

const ServiceSec = () => {
  return (
    <section >
      <div className="container mx-auto">
        
   

        <div className="space-y-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceSec;
