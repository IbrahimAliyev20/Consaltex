import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { InfoCard } from '@/components/shared/Info-Card';
import { Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/data/info-data';


interface InfoSinglePageProps {
  params: Promise<{slug: string; }>;
}

export default async function InfoSinglePage({ params }: InfoSinglePageProps){
  const { slug } =  await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const similarPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 4);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <article> 
          <header className="mb-8 flex flex-col gap-8">
            <nav className="text-sm text-gray-500">
              <Link href="/information" className="hover:text-blue-600">Information</Link>
              <span className="mx-2">/</span>
              <span>{post.title}</span>
            </nav>
            <h1 className="text-3xl md:text-[32px] font-medium text-gray-900">
              {post.title}
            </h1>
            <div className="relative w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden">
              <Image
                src={post.imageSrc}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>

          <div>
            <div className="flex items-center text-sm text-gray-500 mb-4 space-x-6">
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime} min reading time</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                </div>
            </div>
            <div className="prose lg:prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>{post.content}</p>
            </div>
          </div>
        </article>

        <section className="mt-16 md:mt-24 border-t pt-12">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">Similar Information</h2>
                <Link href="/information" className="text-blue-600 font-semibold hover:underline">
                  See More
                </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {similarPosts.map(p => (
                    <InfoCard 
                        key={p.slug}
                        slug={p.slug}
                        imageSrc={p.imageSrc}
                        readingTime={p.readingTime}
                        date={p.date}
                        title={p.title}
                        description={p.description}
                    />
                ))}
            </div>
        </section>
      </div>
    </div>
  );
};