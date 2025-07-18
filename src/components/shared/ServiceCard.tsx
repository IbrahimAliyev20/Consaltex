import React from "react";
import Image from "next/image";
import { OurServicesType } from "@/types/alltype";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

interface ServiceCardProps {
  service: OurServicesType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="flex flex-col md:flex-row items-center bg-white rounded-lg transition-all duration-300 gap-6 group overflow-hidden"
    >
      <div className="relative w-full md:w-[250px] md:h-[180px] flex-shrink-0">
        <Image
          src={service.image}
          alt={service.title}
          width={250}
          height={180}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 p-0 md:p-6 md:p-2 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {service.title}
        </h3>
        <div
          className="text-gray-600 leading-relaxed line-clamp-4"
          dangerouslySetInnerHTML={{ __html: service.description }}
        />
      </div>

      <div className="hidden md:flex flex-shrink-0 items-center justify-center p-6">
        <div
          aria-label={`Learn more about ${service.title}`}
          className="bg-blue-100 group-hover:bg-[#1F45EC] text-blue-600 rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300"
        >
          <ArrowUpRight className="group-hover:text-white" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;