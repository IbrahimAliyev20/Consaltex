import Image from 'next/image';
import React from 'react';

export default function MissionPage() {
  return (
    <div className="flex flex-col items-center py-8 md:py-16 px-4 md:px-8 lg:px-16 bg-background text-foreground">
      {/* Our Mission Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-6xl mb-16">
        <div className="flex flex-col md:w-1/2  border-l-2  border-[#53B8B8] pl-4 md:pl-16">
          <div className="flex items-center mb-4">
            <span className="text-[#1C746F] text-sm font-medium">About us</span>
          </div>
          <h2 className="text-[22px] md:text-4xl font-medium mb-4">Our Mission</h2>
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
            To drive the green transformation of the Caspian Sea region by providing objective research, reliable expertise, and strategic advisory services that empower public and private stakeholders to adopt sustainable energy solutions and environmental practices.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center p-0 md:p-4">
          <Image
            src="/images/ourmision.png"
            alt="Ship with green shipping sails"
            width={527}
            height={272}
            className="rounded-lg shadow-lg object-cover w-[373px] h-[182px] md:w-full  md:h-[272px] max-w-md md:max-w-full"
          />
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-16 w-full max-w-6xl">
        <div className="flex flex-col md:w-1/2  border-r-2 md:border-l-2  border-[#53B8B8] pl-4 md:pl-16">
          <div className="flex items-center mb-4">
            <span className="text-[#1C746F] text-sm font-medium">About us</span>
          </div>
          <h2 className="text-[22px] md:text-4xl font-medium mb-4">Our Vision</h2>
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
            To become a leading regional center of excellence in green transition, enabling innovative, inclusive, and science-based pathways to climate resilience and sustainable development in the Caspian region.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center p-0 md:p-4">
          <Image
            src="/images/ourvision.jpg"
            alt="Large cargo ship with sails"
            width={500}
            height={272}
            className="rounded-lg shadow-lg object-cover w-[373px] h-[182px] md:w-full md:h-[272px] max-w-md md:max-w-full"
          />
        </div>
      </section>
    </div>
  );
}