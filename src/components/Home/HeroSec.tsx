"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Slaydşou üçün şəkillər
  const slides = [
    "/images/herosec1.jpg",
    "/images/herosec1.jpg",
    "/images/herosec1.jpg",
  ]

  // Avtomatik slayd dəyişməsi
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative w-full text-white flex items-center min-h-screen overflow-hidden">
      {/* Arxa Fon Slayderi */}
      <div className="absolute inset-0 -z-20">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide || "/placeholder.svg"}
              alt={`hero slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Rəng Qatı */}
      <div className="absolute inset-0 bg-[#1451A552]/70 -z-10" />

      {/* Mətn Hissəsi */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center py-8 md:py-20">
        <div className="w-[50%] flex flex-col gap-15">
          <h1 className="text-[22px] md:text-[64px] font-bold max-w-3xl leading-tight">
            Sound Decisions <br />
            <span className="text-[#3674B5] font-bold">Stronger</span> Future!
          </h1>
          <span>
            We provide sustainable solutions at the intersection of strategy, innovation, and continuous development for
            your medical institution
          </span>
        </div>
      </div>

      {/* Naviqasiya Nöqtələri */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            // DƏYİŞİKLİK BURADA EDİLDİ
            className={`h-1.5 rounded-full transition-all duration-500 ease-in-out ${
              index === currentSlide ? 'w-8 bg-white' : 'w-3 bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}