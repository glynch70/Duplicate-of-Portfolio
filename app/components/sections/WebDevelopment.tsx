"use client"

import { motion } from "framer-motion"

const websites = [
  {
    title: "K Lewis Joinery",
    image: "/images/K Lewis Joinery website design West Lothian.jpg",
    url: "https://www.klewisjoineryltd.co.uk/",
  },
  {
    title: "Herb & Soul",
    image: "/images/Herb and Soul website design project Bear Media.jpg",
    url: "https://www.herbandsoul.uk/",
  },
  {
    title: "Almond Vet Care",
    image: "/images/Almond Vet Care website design Bear Media Scotland.jpg",
    url: "https://www.almondvetcare.co.uk/",
  },
  {
    title: "Robertsons Transport",
    image: "/images/Robertsons Transport website design Bear Media Scotland.jpg",
    url: "https://www.robertsonstransport.co.uk/",
  },
]

export function WebDevelopment() {
  return (
    <section id="websites" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-[#0E0E0E]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-[#DDA31E] font-bold uppercase tracking-[0.4em] text-xs mb-3 italic">
              Websites Built
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter leading-none">
              Websites Built
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-sm italic max-w-sm"
          >
            Bespoke business websites — designed and developed for impact
          </motion.p>
        </div>

        {/* Horizontal scrolling gallery */}
        <div className="flex gap-4 overflow-x-auto pb-6 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-hide">
          {websites.map((site, index) => (
            <motion.a
              key={site.title}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex-shrink-0 w-[300px] md:w-[400px] h-[220px] md:h-[280px] rounded-xl overflow-hidden group snap-start"
            >
              <img
                src={site.image}
                alt={`${site.title} website by Bear Media`}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-black text-lg italic uppercase tracking-tight group-hover:text-[#DDA31E] transition-colors">
                  {site.title}
                </h3>
                <span className="text-white/80 text-xs font-black uppercase tracking-widest flex items-center gap-2 mt-1 group-hover:text-white transition-colors">
                  Visit site
                  <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
