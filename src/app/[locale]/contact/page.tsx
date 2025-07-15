import ContactPage from '@/components/Contact/ContactSingle'
import { getContact } from '@/lib/contact'
import { getMetaTags } from '@/lib/mera-tags';
import { MetaTagsType } from '@/types/alltype';
import { getTranslations } from 'next-intl/server';
import React from 'react'


export async function generateMetadata() {
  const metaData: MetaTagsType[] = await getMetaTags();

  const defaultMeta = metaData.find((meta) => meta.title.toLowerCase() === 'contact') || {
    meta_title: 'Contact title',
    meta_description: 'Contact description',
    meta_keywords: 'Contact keywords',
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

export default  async function Contact() {

  const t = await getTranslations();

  const contact = await getContact()
  return (
      <div  className='container mx-auto px-4 py-6 md:py-14'>
        <h2 className='text-[22px] md:text-[32px] font-semibold text-gray-900 mb-6 w-fit '>
        {t('SecTitle.ContactUs')}
        </h2>
        <ContactPage contact={contact} />
      </div>
  )
}