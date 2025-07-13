import React from 'react';
import { InfoCard } from '@/components/shared/Info-Card';
import Link from 'next/link';
import { TagButton } from '@/components/shared/tag-button';

export default function InformationPage() {
  const blogPosts = [
    {
      imageSrc: "/images/aboutus1.jpg",
      readingTime: '9',
      date: '30.06.2025',
      title: 'New Trends in Healthcare',
      description: 'Discover the latest management strategies and how they impact the performance of healthcare institutions',
      slug: 'new-trends-in-healthcare-1',
    },
    {
      imageSrc: "/images/aboutus2.png",
      readingTime: '9',
      date: '30.06.2025',
      title: 'New Trends in Healthcare',
      description: 'Discover the latest management strategies and how they impact the performance of healthcare institutions',
      slug: 'new-trends-in-healthcare-2',
    },
    {
      imageSrc: "/images/aboutus3.jpg",
      readingTime: '9',
      date: '30.06.2025',
      title: 'New Trends in Healthcare',
      description: 'Discover the latest management strategies and how they impact the performance of healthcare institutions',
      slug: 'new-trends-in-healthcare-3',
    },
    {
      imageSrc: "/images/aboutus4.jpg",
      readingTime: '9',
      date: '30.06.2025',
      title: 'New Trends in Healthcare',
      description: 'Discover the latest management strategies and how they impact the performance of healthcare institutions',
      slug: 'new-trends-in-healthcare-4',
    },
    {
      imageSrc: "/images/aboutus5.png",
      readingTime: '9',
      date: '30.06.2025',
      title: 'New Trends in Healthcare',
      description: 'Discover the latest management strategies and how they impact the performance of healthcare institutions',
      slug: 'new-trends-in-healthcare-5',
    },
    {
      imageSrc: "/images/aboutus1.jpg",
      readingTime: '9',
      date: '30.06.2025',
      title: 'New Trends in Healthcare',
      description: 'Discover the latest management strategies and how they impact the performance of healthcare institutions',
      slug: 'new-trends-in-healthcare-6',
    },
    {
      imageSrc: "/images/aboutus2.png",
      readingTime: '9',
      date: '30.06.2025',
      title: 'New Trends in Healthcare',
      description: 'Discover the latest management strategies and how they impact the performance of healthcare institutions',
      slug: 'new-trends-in-healthcare-7',
    },
    {
      imageSrc: "/images/aboutus3.jpg",
      readingTime: '9',
      date: '30.06.2025',
      title: 'New Trends in Healthcare',
      description: 'Discover the latest management strategies and how they impact the performance of healthcare institutions',
      slug: 'new-trends-in-healthcare-8',
    },
    {
      imageSrc: "/images/aboutus4.jpg",
      readingTime: '9',
      date: '30.06.2025',
      title: 'New Trends in Healthcare',
      description: 'Discover the latest management strategies and how they impact the performance of healthcare institutions',
      slug: 'new-trends-in-healthcare-9',
    },
    {
      imageSrc: "/images/aboutus5.png",
      readingTime: '9',
      date: '30.06.2025',
      title: 'New Trends in Healthcare',
      description: 'Discover the latest management strategies and how they impact the performance of healthcare institutions',
      slug: 'new-trends-in-healthcare-10',
    },
    {
      imageSrc: "/images/aboutus1.jpg",
      readingTime: '9',
      date: '30.06.2025',
      title: 'New Trends in Healthcare',
      description: 'Discover the latest management strategies and how they impact the performance of healthcare institutions',
      slug: 'new-trends-in-healthcare-11',
    },
    {
      imageSrc: "/images/aboutus2.png",
      readingTime: '9',
      date: '30.06.2025',
      title: 'New Trends in Healthcare',
      description: 'Discover the latest management strategies and how they impact the performance of healthcare institutions',
      slug: 'new-trends-in-healthcare-12',
    },
    {
      imageSrc: "/images/aboutus3.jpg",
      readingTime: '9',
      date: '30.06.2025',
      title: 'New Trends in Healthcare',
      description: 'Discover the latest management strategies and how they impact the performance of healthcare institutions',
      slug: 'new-trends-in-healthcare-13',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Information and Updates</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          <TagButton label="Tag Lorem" />
          <TagButton label="Tag Lorem" />
          <TagButton label="Tag Lorem" />
          <TagButton label="Tag Lorem" />
          <TagButton label="Tag Lorem" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <InfoCard
              key={post.slug}
              imageSrc={post.imageSrc}
              readingTime={post.readingTime}
              date={post.date}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="#" className="inline-flex items-center text-primary hover:text-primary/80 text-base font-medium transition-colors">
            See More Information
          </Link>
        </div>
      </div>
    </div>
  );
}