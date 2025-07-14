
import Link from 'next/link'; 
import React from 'react';
import Image from 'next/image';
import { OurServicesType } from '@/types/alltype'; 
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  service: OurServicesType; 
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Link 
      href={`/services/${service.slug}`} 
      className="flex flex-col md:flex-row items-center bg-white rounded-lg transition-shadow duration-300 gap-6 group"
    >
      <div className="w-full md:w-1/4 flex-shrink-0">
        <Image
          src={service.image}
          alt={service.title}
          width={250}
          height={180}
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
        <div className="text-gray-600 leading-relaxed line-clamp-6" dangerouslySetInnerHTML={{ __html: service.description}} />
      </div>

      <div className="hidden md:flex flex-shrink-0 ml-0 md:ml-6 mt-4 md:mt-0">
        <div 
          aria-label={`Learn more about ${service.title}`}
          className="bg-blue-100 group-hover:bg-[#1F45EC] text-blue-600 rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300"
        >
          <ArrowUpRight className='group-hover:text-white'/>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;