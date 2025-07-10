import AboutUsSec from "@/components/Home/AboutUsSec";
import { HeroSection } from "@/components/Home/HeroSec";
import { VisionSection } from "@/components/Home/VisionSec";
import React from "react";
import ContactPage from "./contact/page";
import ServiceSec from "@/components/Home/ServiceSec";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div className="container mx-auto px-4 ">
        <AboutUsSec />
      </div>
      <div className="container mx-auto px-4 ">
        <VisionSection />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 ">
        <div className="flex justify-between items-center mb-10">
          <h2 className="relative text-3xl md:text-4xl font-bold text-gray-900 pb-4">
            Our Services
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 to-white"></span>
          </h2>
          <Link
            href="/services"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 flex items-center"
          >
            See All Services
            <ArrowRightIcon />
          </Link>
        </div>
        <ServiceSec />
      </div>

      <div className="container mx-auto px-4 ">
        <ContactPage />
      </div>
    </div>
  );
}
