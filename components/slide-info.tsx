"use client"

interface SlideInfoProps {
  title: string
  description: string
}

export function SlideInfo({ title, description }: SlideInfoProps) {
  return (
    <div className="absolute bottom-16 left-8 z-20 max-w-xl md:bottom-24 md:left-12 lg:left-16">
      {/* Project Title */}
      <p className="mb-3 text-xs font-light tracking-[0.3em] text-white/60 uppercase">{title}</p>

      {/* Project Description */}
      <h2 className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-white tracking-wide">
        {description}
      </h2>
    </div>
  )
}
