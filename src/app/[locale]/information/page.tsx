
import InformationPage from '@/components/Information/InformationPage';
import { getInformations } from '@/lib/information';
import React from 'react';

export default async function Information() {
  const tagsWithPosts = await getInformations();

  return (
    <div>
      <InformationPage tags={tagsWithPosts} />
    </div>
  );
}