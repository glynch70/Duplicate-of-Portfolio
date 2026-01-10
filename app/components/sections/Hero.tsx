"use client"

import { useEffect, useState } from "react"
import { ChevronDown, ArrowRight } from "lucide-react"
import { AnimatedCounter } from "../AnimatedCounter"

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "★", label: "Star Reviews" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
]

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary to-background" />

      <div className="absolute inset-0">
        <img
          src="/images/Garry Lynch professional videographer West Lothian.1.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div
          className={`space-y-6 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/30 backdrop-blur-sm rounded-full border border-primary/30">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm text-muted-foreground">Covering Edinburgh, West Lothian & Fife</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="block gradient-text">Websites & Social Media</span>
            <span className="block text-foreground text-[0.85em]">for Modern Local Businesses</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Clear websites and consistent content that help businesses get found, look professional, and convert
            enquiries.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#portfolio"
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full font-semibold text-lg text-primary-foreground hover:opacity-90 active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
            >
              View Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-muted/30 backdrop-blur-sm border border-border rounded-full font-semibold text-lg text-foreground hover:bg-muted/50 active:scale-98 transition-all duration-300 text-center min-h-[48px]"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div
          className={`mt-12 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-16 transition-all duration-700 delay-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center px-4 sm:px-6 py-3 sm:py-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <ChevronDown className="text-primary animate-bounce" size={32} />
      </div>
    </section>
  )
}
