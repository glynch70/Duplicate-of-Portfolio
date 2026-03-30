"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Category = "All" | "Drone" | "Food" | "Events" | "Property" | "Corporate" | "Lifestyle"

interface PortfolioItem {
  src: string
  alt: string
  title: string
  category: Category
  span?: string // grid span class
}

const portfolioItems: PortfolioItem[] = [
  {
    src: "/images/Balmoral Hotel Edinburgh Bear Media Scotland.png",
    alt: "Balmoral Hotel drone photography Edinburgh",
    title: "Balmoral Hotel",
    category: "Drone",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/Artisan cheese food photography Edinburgh restaurant.jpg",
    alt: "Artisan cheese food photography Edinburgh",
    title: "Artisan Cheese",
    category: "Food",
  },
  {
    src: "/images/Conference stage event videography Scotland Bear Media.jpeg",
    alt: "Conference stage event videography Scotland",
    title: "Conference Keynote",
    category: "Events",
    span: "md:row-span-2",
  },
  {
    src: "/images/Holyrood Park aerial drone photography Edinburgh autumn.png",
    alt: "Holyrood Park aerial drone Edinburgh autumn",
    title: "Holyrood Park",
    category: "Drone",
  },
  {
    src: "/images/Fine dining food plating photography Edinburgh restaurant.png",
    alt: "Fine dining plating photography Edinburgh",
    title: "Fine Dining",
    category: "Food",
  },
  {
    src: "/images/Solar panel house drone photography Scotland property.jpg",
    alt: "Solar panel property drone photography Scotland",
    title: "Property Aerial",
    category: "Property",
    span: "md:col-span-2",
  },
  {
    src: "/images/Professional business portrait photography Edinburgh.jpg",
    alt: "Professional business portrait Edinburgh",
    title: "Corporate Portraits",
    category: "Corporate",
  },
  {
    src: "/images/Harley Davidson motorcycle video production Scotland.jpeg",
    alt: "Harley Davidson video production Scotland",
    title: "Harley Davidson",
    category: "Lifestyle",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/Champagne service hospitality photography Edinburgh venue.jpg",
    alt: "Champagne service hospitality photography Edinburgh",
    title: "Hospitality",
    category: "Events",
  },
  {
    src: "/images/Edinburgh night light trails photography city centre.jpeg",
    alt: "Edinburgh night photography light trails",
    title: "Edinburgh at Night",
    category: "Drone",
  },
  {
    src: "/images/Beef wellington culinary video content Scotland.png",
    alt: "Beef wellington culinary video Scotland",
    title: "Beef Wellington",
    category: "Food",
  },
  {
    src: "/images/Architectural archway property photography Edinburgh.jpeg",
    alt: "Architectural property photography Edinburgh",
    title: "Period Property",
    category: "Property",
    span: "md:row-span-2",
  },
  {
    src: "/images/Howies restaurant exterior photography Edinburgh dusk.jpg",
    alt: "Howies Edinburgh restaurant exterior photography",
    title: "Howies Edinburgh",
    category: "Food",
  },
  {
    src: "/images/K Lewis Joinery craftsman video West Lothian.jpg",
    alt: "K Lewis Joinery craftsman video West Lothian",
    title: "K Lewis Joinery",
    category: "Corporate",
  },
  {
    src: "/images/Dog walking woodland photography Scotland lifestyle.jpg",
    alt: "Dog walking woodland photography Scotland",
    title: "Lifestyle",
    category: "Lifestyle",
  },
  {
    src: "/images/Bass Rock seabird colony photography East Lothian.png",
    alt: "Bass Rock seabird colony East Lothian",
    title: "Bass Rock",
    category: "Drone",
    span: "md:col-span-2",
  },
  {
    src: "/images/Electrician at work trades video production Scotland.jpg",
    alt: "Electrician trades video production Scotland",
    title: "Trades",
    category: "Corporate",
  },
  {
    src: "/images/Hope Street Arts Bar venue photography Edinburgh.jpeg",
    alt: "Hope Street Arts Bar Edinburgh venue photography",
    title: "Hope Street Bar",
    category: "Events",
  },
]

const categories: Category[] = ["All", "Drone", "Food", "Events", "Property", "Corporate", "Lifestyle"]

export function Portfolio() {
  const [expandedCategory, setExpandedCategory] = useState<Category | null>("Drone")

  // Filter out "All" for the accordion structure
  const accordionCategories = categories.filter((cat) => cat !== "All")

  return (
    <section id="work" className="py-16 md:py-24 bg-[#121212]">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-[#DDA31E] font-bold uppercase tracking-[0.4em] text-xs mb-3 italic text-center md:text-left">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter leading-none mb-4 text-center md:text-left">
            Recent Projects
          </h2>
          <p className="text-white text-xs md:text-sm max-w-xl font-medium italic text-center md:text-left">
            Explore our specialized media production across different industries.
          </p>
        </motion.div>

        {/* Vertical Accordion */}
        <div className="flex flex-col gap-3">
          {accordionCategories.map((category) => {
            const isExpanded = expandedCategory === category
            const categoryItems = portfolioItems.filter((item) => item.category === category)
            // Use the first image in the category as the background for the bar
            const previewImage = categoryItems[0]?.src

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (categories.indexOf(category) - 1) * 0.1 }}
                className={`relative overflow-hidden transition-all duration-700 rounded-xl md:rounded-2xl border border-white/5 ${
                  isExpanded ? "bg-white/[0.02]" : "bg-black hover:bg-white/[0.03]"
                }`}
              >
                {/* Accordion Header / Trigger */}
                <button
                  onClick={() => setExpandedCategory(isExpanded ? null : category)}
                  className="relative w-full h-[100px] md:h-[140px] flex items-center justify-between px-6 md:px-12 overflow-hidden group cursor-pointer"
                >
                  {/* Background Image (Collapsed View) */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={previewImage}
                      alt=""
                      className={`w-full h-full object-cover transition-all duration-1000 ${
                        isExpanded ? "scale-110 opacity-30 blur-sm" : "scale-100 opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
                  </div>

                  {/* Content (Text/Title) */}
                  <div className="relative z-10 flex flex-col items-start">
                    <span className="text-[#DDA31E] text-[10px] font-black uppercase tracking-[0.4em] mb-1">
                      {String(categoryItems.length).padStart(2, "0")} PROJECTS
                    </span>
                    <h3 className="text-2xl md:text-5xl font-black text-white italic tracking-tighter leading-none group-hover:text-[#DDA31E] transition-colors">
                      {category.toUpperCase()}
                    </h3>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${
                        isExpanded ? "rotate-45 bg-[#DDA31E] border-[#DDA31E]" : "rotate-0 bg-white/5"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${isExpanded ? "text-black" : "text-white"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v12m6-6H6" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Accordion Content (Project Grid) */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-12 pb-12">
                        {/* Internal Masonry Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 auto-rows-[160px] md:auto-rows-[220px] mt-6">
                          {categoryItems.map((item, idx) => (
                            <motion.div
                              key={item.title}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className={`relative overflow-hidden rounded-lg md:rounded-xl cursor-pointer group ${
                                item.span || ""
                              }`}
                            >
                              <img
                                src={item.src}
                                alt={item.alt}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h4 className="text-white font-black text-sm md:text-lg italic leading-tight">
                                  {item.title}
                                </h4>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Commission Prompt */}
                        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-8">
                          <p className="text-white text-xs font-black uppercase tracking-widest">
                            Ready to transform your brand?
                          </p>
                          <a
                            href="#contact"
                            className="bg-[#DDA31E] text-black px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-white transition-all transform hover:scale-105"
                          >
                            Work with us
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Global Footer Scroll Prompt */}
        <div className="mt-16 text-center">
          <a
            href="#services"
            className="text-white/60 text-xs font-black uppercase tracking-[0.4em] hover:text-[#DDA31E] transition-colors inline-flex items-center gap-4 group"
          >
            <div className="h-px w-8 bg-white/10 group-hover:bg-[#DDA31E]/30" />
            Explore Services
            <div className="h-px w-8 bg-white/10 group-hover:bg-[#DDA31E]/30" />
          </a>
        </div>
      </div>
    </section>
  )
}

