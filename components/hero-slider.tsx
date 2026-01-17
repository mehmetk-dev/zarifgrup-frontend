"use client"

import { useState, useEffect, useCallback } from "react"
import { Header } from "./header"
import { SlideInfo } from "./slide-info"

const slides = [
  {
    id: 1,
    image: "/black-and-white-minimalist-modern-architecture-bui.jpg",
    title: "LÜKS VİLLA PROJESİ",
    description:
      "Modern mimari çizgilerin doğayla buluştuğu, minimalist tasarım anlayışıyla şekillenen benzersiz bir yaşam alanı.",
  },
  {
    id: 2,
    image: "/black-and-white-architectural-interior-with-concre.jpg",
    title: "KURUMSAL PLAZA",
    description:
      "Şehrin kalbinde, iş dünyasının ihtiyaçlarına cevap veren, sürdürülebilir ve çağdaş bir iş merkezi projesi.",
  },
  {
    id: 3,
    image: "/black-and-white-modern-residential-complex-with-po.jpg",
    title: "SAHİL REZİDANS",
    description: "Denizin mavisiyle bütünleşen, lüks yaşamı yeniden tanımlayan prestijli konut projesi.",
  },
  {
    id: 4,
    image: "/black-and-white-brutalist-museum-building-with-dra.jpg",
    title: "KÜLTÜR MERKEZİ",
    description: "Sanata ve kültüre adanmış, toplumun buluşma noktası olacak çok işlevli bir kamusal alan.",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsTransitioning(false), 1000)
  }, [isTransitioning])

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 1000)
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
        </div>
      ))}

      {/* Header */}
      <Header />

      {/* Slide Info */}
      <SlideInfo title={slides[currentSlide].title} description={slides[currentSlide].description} />

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 transition-all duration-500 ${
              index === currentSlide ? "w-12 bg-white" : "w-6 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slayt ${index + 1}`}
          />
        ))}
      </div>

      {/* Recent News Label */}
      <div className="absolute bottom-8 right-12 z-20">
        <span className="text-sm font-light tracking-wider text-white/80 hover:text-white transition-colors cursor-pointer">
          Son Haberler
        </span>
      </div>
    </div>
  )
}
