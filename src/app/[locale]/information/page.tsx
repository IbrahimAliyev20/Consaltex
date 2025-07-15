
import InformationPage from '@/components/Information/InformationPage';
import { getInformations } from '@/lib/information';
import { getMetaTags } from '@/lib/mera-tags';
import { MetaTagsType } from '@/types/alltype';
import React from 'react';

export async function generateMetadata() {
  const metaData: MetaTagsType[] = await getMetaTags();

  const defaultMeta = metaData.find((meta) => meta.title.toLowerCase() === 'information') || {
    meta_title: 'Information title',
    meta_description: 'Information description',
    meta_keywords: 'Information keyword',
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



export default async function Information() {
  const tagsWithPosts = await getInformations();

  return (
    <div>
      <InformationPage tags={tagsWithPosts} />
    </div>
  );
}