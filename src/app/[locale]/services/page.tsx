
import ServicePage from '@/components/Service/ServicePage'
import { getMetaTags } from '@/lib/mera-tags';
import { getOurServices } from '@/lib/our-services'; 
import { MetaTagsType } from '@/types/alltype';
import React from 'react'

export async function generateMetadata() {
  const metaData: MetaTagsType[] = await getMetaTags();

  const defaultMeta = metaData.find((meta) => meta.title.toLowerCase() === 'services') || {
    meta_title: 'Services title',
    meta_description: 'Services description',
    meta_keywords: 'Services keywords',
  };
  
  return {
    title: defaultMeta.meta_title,
    description: defaultMeta.meta_description,
    keywords: defaultMeta.meta_keywords,
    openGraph: {
      title: defaultMeta.meta_title,
      description: defaultMeta.meta_description,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      type: 'website',
    },
  };
}




export default async function Service() {
  const servicesResponse = await getOurServices();
  const services = servicesResponse.data; 

  return (
    <div>
      <ServicePage services={services} />
    </div>
  )
}