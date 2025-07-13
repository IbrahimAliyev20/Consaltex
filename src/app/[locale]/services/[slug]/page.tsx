import React from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data/servicesData";
import { notFound } from "next/navigation";
import { CheckIcon, ChevronRight } from "lucide-react";

interface ServiceSinglePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

const ServiceSinglePage: React.FC<ServiceSinglePageProps> = async ({ params }) => {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const descriptionParagraphs =
    service.longDescription?.split("\n").filter((p) => p.trim() !== "") || [];

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <main>
        <nav className="flex items-center text-sm text-gray-500 mb-8">
          <Link
            href="/services"
            className="hover:text-blue-600 hover:underline"
          >
            Services
          </Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="font-medium text-gray-700">{service.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <h1 className="text-[22px] lg:text-4xl font-bold text-gray-900 leading-tight">
              {service.pageTitle || service.title}
            </h1>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              {descriptionParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {service.detailImages && service.detailImages.length >= 3 && (
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[450px]">
                <div className="col-span-1 row-span-2 relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={service.detailImages[0]}
                    alt={`${service.title} main image`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={service.detailImages[1]}
                    alt={`${service.title} detail image 2`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={service.detailImages[2]}
                    alt={`${service.title} detail image 3`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {service.features && service.features.length > 0 && (
          <div className="mt-16 md:mt-24">
            <div className="w-full space-y-6">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-6 md:w-7 md:h-7 bg-[#43ABF5] rounded-full flex items-center justify-center">
                    <CheckIcon className="w-6 md:w-5 h-4 md:h-5 font-bold text-white" />
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
};

export default ServiceSinglePage;
