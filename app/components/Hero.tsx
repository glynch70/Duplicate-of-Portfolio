"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/garry-portrait.png"
          alt="Garry - Edinburgh Content Creator"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      {/* Content - Mobile Optimized */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tight">
            Bear Media
          </h1>
          <div className="h-px w-20 sm:w-24 bg-yellow-500 mx-auto mb-6 sm:mb-8" />
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 font-light tracking-wide mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Content Creation & Photography
            <br />
            <span className="text-yellow-500">Based in Edinburgh, Scotland</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-white text-black font-semibold uppercase tracking-wider text-sm hover:bg-yellow-500 hover:text-black transition-all duration-300 text-center min-h-[44px] flex items-center justify-center"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-white text-white font-semibold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all duration-300 text-center min-h-[44px] flex items-center justify-center"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </motion.div>
    </section>
  )
}
