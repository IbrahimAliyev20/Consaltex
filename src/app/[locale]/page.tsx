import AboutUsSec from "@/components/Home/AboutUsSec";
import { HeroSection } from "@/components/Home/HeroSec";
import { VisionSection } from "@/components/Home/VisionSec";
import React from "react";
import ServiceSec from "@/components/Home/ServiceSec";
import { ArrowRightIcon } from "lucide-react";
import ContactPage from "@/components/Contact/ContactSingle";
import { getHeroSlider } from "@/lib/heroslider";
import { getContact } from "@/lib/contact";
import { getOurServices } from "@/lib/our-services";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const [heroslider, contact, servicesResponse] = await Promise.all([
    getHeroSlider(),
    getContact(),
    getOurServices()
  ]);
  const t = await getTranslations();

  const allServices = servicesResponse.data;

  return (
    <div>
      <div>
        <HeroSection heroslider={heroslider} />
      </div>

      <div className="container mx-auto px-4 py-6 md:py-14">
        <AboutUsSec />
      </div>

      <div className="container mx-auto px-4 py-6 md:py-14">
        <VisionSection />
      </div>

      <div className="container mx-auto px-4 py-6 md:py-14">
        <div className="flex justify-between items-center mb-10">
          <h2 className="relative text-[22px] md:text-4xl font-bold text-gray-900 pb-4">
            {t('SecTitle.OurServices')}
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 to-white"></span>
          </h2>

          <Link
            href="/services"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 hidden md:flex items-center"
          >
            {t('SecTitle.SeeAllServices')}
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <ServiceSec services={allServices} limit={3} />

        <div className="flex justify-end mt-8 md:hidden">
          <Link
            href="/services"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 flex items-center text-lg"
          >
            {t('SecTitle.SeeAllServices')}
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-6 md:pt-14">
        <div className="pb-10">
          <h2 className="relative text-[22px] md:text-4xl font-bold text-gray-900 mb-2 w-fit pb-4">
            {t('SecTitle.ContactUs')}
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 to-white"></span>
          </h2>
        </div>
        <ContactPage contact={contact} />
      </div>
    </div>
  );
}