
import React from 'react'
import ServiceSec from '../Home/ServiceSec'
import { OurServicesType } from '@/types/alltype'; 

interface ServicePageProps {
  services: OurServicesType[];
}

function ServicePage({ services }: ServicePageProps) {
  return (
    <div className='container mx-auto px-4 py-6 md:py-14'>
      <h2 className='text-[22px] md:text-[32px] font-medium text-gray-900 mb-6 w-fit '>
        Innovative Digital Health Solutions
      </h2>
      <ServiceSec services={services} />
    </div>
  )
}

export default ServicePage