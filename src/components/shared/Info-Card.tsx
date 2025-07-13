import React from 'react';
import { Clock, CalendarDays, ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

interface BlogCardProps {
  imageSrc: string;
  readingTime: string;
  date: string;
  title: string;
  description: string;
}

export function InfoCard({ imageSrc, readingTime, date, title, description }: BlogCardProps) {
  return (
    <div className="bg-card rounded-lg shadow-sm overflow-hidden border border-border">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={225}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center text-muted-foreground text-sm mb-2">
          <Clock className="w-4 h-4 mr-1" />
          <span>{readingTime} min reading time</span>
          <CalendarDays className="w-4 h-4 ml-4 mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>
        <Link href="#" className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors">
          Read More
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}