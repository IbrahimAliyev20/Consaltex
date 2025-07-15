
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, ChevronRight } from "lucide-react"; 
import { getOurServiceSlug, } from "@/lib/our-services"; 
import { Link } from "@/i18n/navigation";


interface ServiceSinglePageProps {
  params: Promise<{ slug: string }>;
}


export default async function ServiceSinglePage({ params }: ServiceSinglePageProps) {
  const { slug } = await params;
  const service = await getOurServiceSlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <main>
        <nav className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/services" className="hover:text-blue-600 hover:underline">
            Services
          </Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="font-medium text-gray-700">{service.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <h1 className="text-[22px] lg:text-4xl font-bold text-gray-900 leading-tight">
              {service.title}
            </h1>
            <div 
              className="mt-6 space-y-4 text-gray-600 leading-relaxed prose"
              dangerouslySetInnerHTML={{ __html: service.description }}
            />
          </div>

          {service.images && service.images.length >= 3 && (
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[450px]">
                <div className="col-span-1 row-span-2 relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={service.images[0].image}
                    alt={`${service.title} main image`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={service.images[1].image}
                    alt={`${service.title} detail image 2`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={service.images[2].image}
                    alt={`${service.title} detail image 3`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {service.attributes && service.attributes.length > 0 && (
          <div className="mt-16 md:mt-24">
            <div className="w-full space-y-6">
              {service.attributes.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-7 h-7 bg-[#43ABF5] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 font-bold text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}