"use client";

import Image from "next/image";
import { Products } from "@/types/alltype";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface ProductDetailClientProps {
  product: Products;
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(product)

  if (!product) {
    return null;
  }

  const sliderImages = product.detail_images || [];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === sliderImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="relative h-[450px] w-full md:h-[550px]">
            {sliderImages.length > 0 && sliderImages[currentIndex]?.image ? (
              <Image
                src={sliderImages[currentIndex].image}
                alt={product.name || "Product image"}
                fill
                className="object-contain transition-opacity duration-500 ease-in-out"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                No images available
              </div>
            )}
          </div>

          {sliderImages.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-[#F8FBFF] p-2 text-[#B0B2B6] hover:text-[#1F45EC] shadow-md transition cursor-pointer "
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-[#F8FBFF] p-2 text-[#B0B2B6] hover:text-[#1F45EC] shadow-md transition cursor-pointer "
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 space-x-2">
                {sliderImages.map((_, slideIndex) => (
                  <button
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`h-3 w-3 rounded-full transition-all ${
                      currentIndex === slideIndex
                        ? " bg-blue-600"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${slideIndex + 1}`}
                  ></button>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="h-full flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {product.name}
          </h1>

          {product.description && (
            <div className="mt-4 space-y-3 text-base text-gray-700">
              {product.description.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}

          {product.attributes && product.attributes.length > 0 && (
            <div className="mt-8 space-y-5">
              {product.attributes.map((attr, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2
                    className="mr-3 h-6 w-6 "
                    color="#2563EB"
                  />
                  <div>
                    <span className="font-semibold text-gray-900">
                      {attr.title}:
                    </span>
                    <span className="ml-2 text-gray-700">
                      {attr.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
