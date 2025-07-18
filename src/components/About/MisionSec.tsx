import { getAboutAttribute } from '@/lib/aboutatribute';
import Image from 'next/image';
import React from 'react';

export default async function MissionPage() {
  const data = await getAboutAttribute();

  return (
    <div className="flex flex-col items-center px-4 md:px-8">
      
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 w-full mb-12 md:mb-16">
        <div className="flex flex-col w-full gap-4">
          <h2 className="text-[28px] md:text-4xl font-medium">{data[0].title}</h2>
          <div className=" border-l-4 border-[#43ABF5] pl-4" dangerouslySetInnerHTML={{ __html: data[0].description}}>
          </div>
        </div>
        <div className="w-full h-full flex justify-end">
          <Image
            src={data[0].image}
            alt="Medical team"
            width={527}
            height={350}
            className="rounded-lg shadow-lg object-cover w-full h-auto max-w-md"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 w-full">
        <div className="flex flex-col w-full gap-4 md:order-2"> 
          <h2 className="text-[28px] md:text-4xl font-medium">{data[1].title}</h2>
          <div className=" border-l-4 border-[#43ABF5] pl-4" dangerouslySetInnerHTML={{ __html: data[1].description}}>
          </div>
        </div>
        <div className="w-full h-full flex justify-start md:order-1">
          <Image
            src={data[1].image}
            alt="Doctor signing documents"
            width={527}
            height={350}
            className="rounded-lg shadow-lg object-cover w-full h-auto max-w-md"
          />
        </div>
      </section>

    </div>
  );
}