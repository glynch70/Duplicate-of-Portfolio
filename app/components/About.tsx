"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-black mb-4 text-black font-poppins tracking-tight">About</h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Edinburgh-based content creator and photographer</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative aspect-[4/5] overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/garry-professional-portrait.jpeg"
              alt="Garry - Professional photographer and content creator based in Edinburgh"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-black">Capturing Scotland's Stories</h3>

            <p className="text-lg text-gray-600 leading-relaxed">
              Based in Edinburgh, I specialise in event photography, aerial drone services, and commercial content
              creation across Scotland. From Edinburgh's iconic landmarks to the stunning Highland landscapes, I capture
              the stories that matter to your business.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              With extensive experience covering everything from Master Chefs events to architectural photography, I
              bring a versatile approach to content creation. Whether it's fine dining food photography, corporate
              events, or stunning aerial shots, I deliver high-quality work that elevates your brand.
            </p>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-black text-white font-semibold uppercase tracking-wider text-sm hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                Work With Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
