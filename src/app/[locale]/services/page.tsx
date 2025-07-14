
import ServicePage from '@/components/Service/ServicePage'
import { getOurServices } from '@/lib/our-services'; 
import React from 'react'

export default async function Service() {
  const servicesResponse = await getOurServices();
  const services = servicesResponse.data; 

  return (
    <div>
      <ServicePage services={services} />
    </div>
  )
}