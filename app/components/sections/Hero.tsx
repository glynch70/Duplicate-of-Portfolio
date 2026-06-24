'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Creative background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Main Headline */}
        <div className="mb-6 md:mb-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight">
            <span className="text-foreground">Content Creation</span>
            <br />
            <span className="text-gradient">That Gets Results</span>
          </h1>
        </div>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Photography, Video, Social Media and Websites for businesses across Scotland.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
          <button
            onClick={() => {
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 bg-primary text-primary-foreground rounded font-semibold text-base hover:opacity-90 transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            View My Work
          </button>
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 border-2 border-primary text-primary rounded font-semibold text-base hover:bg-primary/10 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
          >
            Book a Call
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Trust Badge */}
        <div className="text-foreground/60 text-sm md:text-base">
          <p>20+ years creating visual content for Scottish businesses</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-float">
          <span className="text-foreground/40 text-xs uppercase tracking-widest font-medium">Scroll</span>
          <svg
            className="w-6 h-6 text-foreground/40 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
