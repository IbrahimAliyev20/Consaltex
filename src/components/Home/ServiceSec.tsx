import { services } from '@/lib/data/servicesData';
import React from 'react';
import ServiceCard from '../shared/ServiceCard';

// 1. Komponentin qəbul edəcəyi proplar üçün type təyin edirik
interface ServiceSecProps {
  limit?: number; // 'limit' prop-u optional (könüllü) edirik
}

// 2. Komponentə prop-u ötürürük və məntiqi tətbiq edirik
const ServiceSec: React.FC<ServiceSecProps> = ({ limit }) => {
  // Əgər 'limit' varsa, datanı həmin limitə görə kəs (slice), yoxdursa bütün datanı götür
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section>
      {/* Container div-ini buradan sildim, çünki çağırdığın yerlərdə onsuz da var. Bu, daha təmiz yanaşmadır. */}
      <div className="space-y-0 md:space-y-8">
        {/* 3. Bütün data yerinə, kəsilmiş və ya tam datanı map edirik */}
        {displayedServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSec;