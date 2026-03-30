"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, ExternalLink, Maximize2 } from "lucide-react"
import { Lightbox } from "../ui/Lightbox"

const prints = [
  {
    id: 1,
    title: "Tunnocks",
    description: "Vibrant pop-art interpretation of a Scottish icon.",
    image: "/images/scotpopprints1.png",
  },
  {
    id: 2,
    title: "McMinty",
    description: "Bold colours capturing the character and essence of Scotland.",
    image: "/images/scotpopprints2.png",
  },
  {
    id: 3,
    title: "McTavish",
    description: "A modern take on a classic Scottish personality.",
    image: "/images/scotpopprints3.png",
  },
  {
    id: 4,
    title: "Wee Stu",
    description: "The energy of the Scottish spirit in a unique print format.",
    image: "/images/scotpopprints4.png",
  },
]

export function ScotPopPrints() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const lightboxImages = prints.map((p) => ({
    src: p.image,
    alt: p.title,
    caption: p.description,
    width: 1200,
    height: 1500,
  }))

  return (
    <section id="prints" className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-[#0A0A0A]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-[#DDA31E] font-bold uppercase tracking-[0.4em] text-xs mb-4 italic">
              Physical Media
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter leading-none mb-6">
              ScotPop <span className="text-[#DDA31E]">Prints.</span>
            </h2>
            <p className="text-white text-base md:text-lg italic leading-relaxed">
              A curated series of vibrant, pop-art inspired prints, postcards, and greeting cards.
            </p>
          </motion.div>
          
          <motion.a
            href="#"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 inline-flex items-center gap-3 bg-[#DDA31E] text-[#121212] px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#DDA31E]/20 hover:bg-white transition-colors"
          >
            <ShoppingCart size={16} />
            The Haggis Collection
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prints.map((print, index) => (
            <motion.div
              key={print.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div 
                onClick={() => setLightboxIndex(index)}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:border-[#DDA31E]/30 group-hover:shadow-2xl group-hover:shadow-[#DDA31E]/5 cursor-zoom-in"
              >
                <img
                  src={print.image}
                  alt={print.title}
                  className="w-full h-full object-cover transition-transform duration-700 scale-[1.01] group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay on Hover - Light/White for black text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content on Hover */}
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-black font-black text-xl italic uppercase tracking-tight mb-2">
                    {print.title}
                  </h3>
                  <p className="text-black text-xs italic leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {print.description}
                  </p>
                  <div className="flex gap-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        setLightboxIndex(index)
                      }}
                      className="text-[#DDA31E] text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-black transition-colors"
                    >
                      <Maximize2 size={12} />
                      Expand
                    </button>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="text-black text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-10 md:gap-20 py-8 border-y border-white/5"
        >
          {["Limited Edition Runs", "High-Quality Stock", "International Shipping", "Custom Framed Options"].map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#DDA31E]" />
              <span className="text-white text-xs font-black uppercase tracking-[0.2em]">{feature}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Pop-out */}
      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  )
}
