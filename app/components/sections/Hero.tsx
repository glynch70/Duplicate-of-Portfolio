"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const heroImages = [
  {
    src: "/images/Chef masterclass video production Scotland Bear Media.png",
    alt: "Chef masterclass video production Scotland Bear Media",
    category: "FOOD",
  },
  {
    src: "/images/Conference stage event videography Scotland Bear Media.jpeg",
    alt: "Conference stage event videography Scotland Bear Media",
    category: "EVENTS",
  },
  {
    src: "/images/Edinburgh night light trails photography city centre.jpeg",
    alt: "Edinburgh night light trails photography city centre",
    category: "PHOTOGRAPHY",
  },
  {
    src: "/images/Harley Davidson motorcycle video production Scotland.jpeg",
    alt: "Harley Davidson motorcycle video production Scotland",
    category: "VIDEO",
  },
  {
    src: "/images/Stable conversion construction video West Lothian.jpg",
    alt: "Stable conversion construction video West Lothian",
    category: "CONSTRUCTION",
  },
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative w-full h-screen bg-black overflow-hidden">
      {/* Cycling Background Images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentImage].src}
            alt={heroImages[currentImage].alt}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/70 via-transparent to-[#121212] z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/50 via-transparent to-[#121212]/50 z-[1]" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto w-full">
          {/* Category tag */}
          <motion.div
            key={`tag-${currentImage}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-[#DDA31E] text-xs font-black uppercase tracking-[0.4em] bg-[#DDA31E]/10 border border-[#DDA31E]/20 px-4 py-2 rounded-full">
              {heroImages[currentImage].category}
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white italic leading-[0.9] tracking-tighter mb-6 max-w-4xl"
          >
            The<br />
            <span className="text-[#DDA31E]">Portfolio.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-white text-base md:text-lg max-w-lg italic font-medium mb-8"
          >
            Photography, video &amp; drone work across Edinburgh, West Lothian and Scotland.
          </motion.p>

          {/* Image counter + scroll prompt */}
          <div className="flex items-center justify-between">
            {/* Image dots */}
            <div className="flex gap-2 items-center">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`transition-all duration-500 rounded-full ${
                    i === currentImage
                      ? "w-8 h-2 bg-[#DDA31E]"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
              <span className="text-white text-xs font-black ml-3 tracking-widest">
                {String(currentImage + 1).padStart(2, "0")} / {String(heroImages.length).padStart(2, "0")}
              </span>
            </div>

            {/* Scroll indicator */}
            <motion.a
              href="#work"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hidden md:flex items-center gap-3 text-white/70 hover:text-white transition-colors"
            >
              <span className="text-xs font-black uppercase tracking-[0.3em]">
                Explore work
              </span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
