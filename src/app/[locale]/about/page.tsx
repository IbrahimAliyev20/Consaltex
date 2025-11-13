import MissionPage from '@/components/About/MisionSec'
import AboutUsSec from '@/components/Home/AboutUsSec'
import { getMetaTags } from '@/lib/mera-tags';
import { MetaTagsType } from '@/types/alltype';
import React from 'react'

export async function generateMetadata() {
  const metaData: MetaTagsType[] = await getMetaTags();

  const defaultMeta = metaData.find((meta) => meta.title.toLowerCase() === 'about') || {
    meta_title: 'About title',
    meta_description: 'About description',
    meta_keywords: 'About keywords',
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


function AboutPage() {
  return (
    <div>
      <div className='container mx-auto px-4 py-6 md:py-14'>

      <AboutUsSec showButton={false} />
      </div>
      <div className='container mx-auto px-4 py-6 md:py-14'>
        <MissionPage />
      </div>
    </div>
  )
}

export default AboutPage