import { getAboutAttribute } from '@/lib/aboutatribute';
import Image from 'next/image';
import React from 'react';

export default async  function MissionPage() {

const data = await getAboutAttribute();

  return (
    <div className="flex flex-col items-center bg-background text-foreground">
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full  mb-16">
        <div className="flex flex-col md:w-1/2  border-l-2  border-[#53B8B8] pl-4 md:pl-16">
          <div className="flex items-center mb-4">
          </div>
          <h2 className="text-[22px] md:text-4xl font-medium mb-4">{data[0].title}</h2>
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
            {data[0].description}
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center p-0 md:p-4">
          <Image
            src={data[0].image}
            alt="Ship with green shipping sails"
            width={527}
            height={272}
            className="rounded-lg shadow-lg object-cover w-[373px] h-[282px] md:w-full  md:h-full max-w-md md:max-w-full"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-16 w-full">
        <div className="flex flex-col md:w-1/2  border-l-2  border-[#53B8B8] pl-4 md:pl-16">
         
          <h2 className="text-[22px] md:text-4xl font-medium mb-4">{data[1].title}</h2>
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
            {data[1].description}
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center p-0 md:p-4">
          <Image
            src={data[1].image}
            alt="Large cargo ship with sails"
            width={500}
            height={272}
            className="rounded-lg shadow-lg object-cover w-[373px] h-[282px] md:w-full md:h-full max-w-md md:max-w-full"
          />
        </div>
      </section>
    </div>
  );
}