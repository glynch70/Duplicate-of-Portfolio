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
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #18181b 0%, #09090b 100%)" }} />

      <div className="absolute inset-0">
        <img
          src="/images/Garry Lynch professional videographer West Lothian.1.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/50 to-zinc-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/50 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div
          className={`space-y-6 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-orange-400/30">
            <span className="w-2 h-2 bg-orange-400 rounded-full" />
            <span className="text-sm text-gray-300">Covering Edinburgh, West Lothian & Fife</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block gradient-text">Websites & Social Media</span>
            <span className="block text-white">for Modern Local Businesses</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Clear websites and consistent content that help businesses get found, look professional, and convert
            enquiries.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#portfolio"
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full font-semibold text-lg text-white hover:from-orange-400 hover:to-amber-400 active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
            >
              View Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-lg text-white hover:bg-white/20 active:scale-98 transition-all duration-300 text-center min-h-[48px]"
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
              className="text-center px-4 sm:px-6 py-3 sm:py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-orange-500/20"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <ChevronDown className="text-orange-400 animate-bounce" size={32} />
      </div>
    </section>
  )
}
