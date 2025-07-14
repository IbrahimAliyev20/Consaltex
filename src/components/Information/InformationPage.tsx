"use client"; 

import React, { useState } from 'react'; 
import { InfoCard } from '@/components/shared/Info-Card';
import { blogPosts } from '@/lib/data/info-data'; 

export default function InformationPage() {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <div className='container mx-auto px-4 py-12 md:py-16'>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Information and Updates</h1>
        
        <div >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {blogPosts.slice(0, visibleCount).map((post) => (
                <InfoCard
                  key={post.slug}
                  slug={post.slug} 
                  imageSrc={post.imageSrc}
                  readingTime={post.readingTime}
                  date={post.date}
                  title={post.title}
                  description={post.description}
                />
              ))}
            </div>

            {visibleCount < blogPosts.length && (
              <div className="text-center mt-12">
                <button
                  onClick={handleLoadMore}
                  className="   rounded-md font-semibold text-blue-700 transition-colors cursor-pointer"
                >
                  See More Information
                </button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}