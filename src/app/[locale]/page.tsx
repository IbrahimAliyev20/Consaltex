import AboutUsSec from "@/components/Home/AboutUsSec";
import { HeroSection } from "@/components/Home/HeroSec";
import { VisionSection } from "@/components/Home/VisionSec";
import React from "react";
import { InfoCard } from "@/components/shared/Info-Card";
import { ArrowRightIcon } from "lucide-react";
import ContactPage from "@/components/Contact/ContactSingle";
import { getHeroSlider } from "@/lib/heroslider";
import { getContact } from "@/lib/contact";
import { getInformations } from "@/lib/information";
import { getTranslations } from "next-intl/server";
import { getLatestProducts } from "@/lib/products";
import Link from "next/link";
import ProductCard from "@/components/shared/product-card";

export default async function HomePage() {
  const [heroslider, contact, informationTags, latestProducts] =
    await Promise.all([
      getHeroSlider(),
      getContact(),
      getInformations(),
      getLatestProducts(), 
    ]);
  const t = await getTranslations();

  const allInformationPosts = informationTags.flatMap((tag) => tag.informations);

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
            {t("SecTitle.OurServices")}
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 to-white"></span>
          </h2>

          <Link
            href="/products" 
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 hidden md:flex items-center"
          >
            {t("SecTitle.SeeAllServices")}
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latestProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <div className="flex justify-end mt-8 md:hidden">
          <Link
            href="/products" 
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 flex items-center text-lg"
          >
            {t("SecTitle.SeeAllProducts")}
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>


      <div className="container mx-auto px-4 py-6 md:py-14">
        <div className="flex justify-between items-center mb-10">
          <h2 className="relative text-[22px] md:text-4xl font-bold text-gray-900 pb-4">
            {t("SecTitle.OurBlogs")}
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 to-white"></span>
          </h2>
          <Link
            href="/information"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 hidden md:flex items-center"
          >
            {t("SecTitle.SeeAllBlogs")}
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allInformationPosts.slice(0, 4).map((post) => (
            <InfoCard
              key={post.slug}
              slug={post.slug}
              imageSrc={post.image}
              readingTime={post.reading_time}
              date={post.created_at}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
        <div className="flex justify-end mt-8 md:hidden">
          <Link
            href="/information"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 flex items-center text-lg"
          >
            {t("SecTitle.SeeAllBlogs")}
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-6 md:pt-14">
        {/* ... (Kontakt bölməsi olduğu kimi qalır) ... */}
        <div className="pb-10">
          <h2 className="relative text-[22px] md:text-4xl font-bold text-gray-900 mb-2 w-fit pb-4">
            {t("SecTitle.ContactUs")}
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 to-white"></span>
          </h2>
        </div>
        <ContactPage contact={contact} />
      </div>
    </div>
  );
}