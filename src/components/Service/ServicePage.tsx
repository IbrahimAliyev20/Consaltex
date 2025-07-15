
import React from 'react'
import ServiceSec from '../Home/ServiceSec'
import { OurServicesType } from '@/types/alltype'; 
import { getTranslations } from 'next-intl/server';

interface ServicePageProps {
  services: OurServicesType[];
}

export default async function ServicePage({ services }: ServicePageProps) {

  const t = await getTranslations('Service');
  return (
    <div className='container mx-auto px-4 py-6 md:py-14'>
      <h2 className='text-[22px] md:text-[32px] font-medium text-gray-900 mb-6 w-fit '>
        {t('title')}
      </h2>
      <ServiceSec services={services} />
    </div>
  )
}
