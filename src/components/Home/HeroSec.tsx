"use client";

import { HeroSliderType } from "@/types/alltype";
import Image from "next/image";
import { useState, useEffect } from "react";

type HeroSliderProps = {
  heroslider: HeroSliderType[];
};

export function HeroSection({ heroslider }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!heroslider || heroslider.length === 0) {
        return; 
    }

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroslider.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroslider]); 

  if (!heroslider || heroslider.length === 0) {
    return (
      <section className="relative w-full h-[580px] md:min-h-screen bg-gray-300"></section>
    );
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const activeSlideData = heroslider[currentSlide];

  if (!activeSlideData) {
    return (
        <section className="relative w-full h-[580px] md:min-h-screen bg-gray-300"></section>
    );
  }

  return (
    <section className="relative w-full text-white flex items-center h-[580px] md:min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-20">
        {heroslider.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title || `hero slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-[#1451A552]/70 -z-10" />

      <div className="container mx-auto px-4 h-full flex flex-col justify-center py-8 md:py-20">
        <div className="w-[100%] md:w-[50%] flex flex-col gap-4">
          <h1
            className="text-[32px] md:text-[64px] font-bold max-w-3xl leading-tight"
            dangerouslySetInnerHTML={{ __html: activeSlideData.title || "" }}
          />
          <span className="text-base md:text-lg">
            {activeSlideData.description}
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroslider.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ease-in-out ${
              index === currentSlide ? "w-8 bg-white" : "w-3 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}