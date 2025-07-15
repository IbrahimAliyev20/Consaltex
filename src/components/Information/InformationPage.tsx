
"use client"; 

import React, { useState, useMemo, use } from 'react'; 
import { InfoCard } from '@/components/shared/Info-Card';
import { InformationTag } from '@/types/alltype';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

interface InformationPageProps {
  tags: InformationTag[];
}

export default function InformationPage({ tags }: InformationPageProps) {
  const [activeTag, setActiveTag] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState(8);
  const t = useTranslations('Information');

  const allPosts = useMemo(() => tags.flatMap(tag => tag.informations), [tags]);

  const displayedPosts = useMemo(() => {
    if (activeTag === 'all') {
      return allPosts;
    }
    const activeTagData = tags.find(tag => tag.slug === activeTag);
    return activeTagData ? activeTagData.informations : [];
  }, [activeTag, tags, allPosts]);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 8);
  };

  const postsToShow = displayedPosts.slice(0, visibleCount);

  return (
    <div className='container mx-auto px-4 py-12 md:py-16'>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{t('update_info')}</h1>

        {/* Tablar Bölməs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            onClick={() => setActiveTag('all')}
            variant={activeTag === 'all' ? 'default' : 'outline'}
            className={`rounded-full ${activeTag === 'all' ? 'bg-blue-600 text-white' : ''}`}
          >
            All
          </Button>
          {tags.map(tag => (
            <Button
              key={tag.slug}
              onClick={() => setActiveTag(tag.slug)}
              variant={activeTag === tag.slug ? 'default' : 'outline'}
              className={`rounded-full ${activeTag === tag.slug ? 'bg-blue-600 text-white' : ''}`}
            >
              {tag.title}
            </Button>
          ))}
        </div>

        <div >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {postsToShow.map((post) => (
              <InfoCard
                key={post.slug}
                slug={post.slug} 
                imageSrc={post.image}
                readingTime={post.reading_time}
                date={post.created_at}
                title={post.title}
                description={post.description}
              />
            ))}
          </div>

          {visibleCount < displayedPosts.length && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="rounded-md font-semibold text-blue-700 transition-colors cursor-pointer"
              >
                {t('See_More_Information')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}