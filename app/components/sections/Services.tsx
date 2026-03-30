"use client"

import { motion } from "framer-motion"
import { Video, Camera, Plane, Globe, Instagram } from "lucide-react"

const services = [
  { icon: Video, label: "Video", desc: "Events, social content, promotional" },
  { icon: Camera, label: "Photography", desc: "Food, product, corporate, lifestyle" },
  { icon: Plane, label: "Drone", desc: "Aerial 4K, property, construction" },
  { icon: Globe, label: "Websites", desc: "Custom-built business sites" },
  { icon: Instagram, label: "Social", desc: "Content strategy & creation" },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-[#121212] border-y border-white/5">
      <div className="max-w-[1600px] mx-auto">
        {/* Compact header */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-black text-white italic tracking-tighter">
            What I <span className="text-[#DDA31E]">Shoot.</span>
          </h2>
          <a
            href="#contact"
            className="text-[#DDA31E] text-xs font-black uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 self-start md:self-auto"
          >
            Discuss a project
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Service cards — clean horizontal layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {services.map((service, index) => {
            const isVideo = service.label === "Video"
            const Wrapper = isVideo ? motion.a : motion.div
            const wrapperProps = isVideo ? {
              href: "https://www.youtube.com/@bearmedia70",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group bg-white/[0.04] border border-white/10 rounded-2xl p-10 md:p-12 hover:bg-white/[0.08] hover:border-[#DDA31E]/40 transition-all duration-500 flex flex-col items-center text-center cursor-pointer shadow-xl"
            } : {
              className: "group bg-white/[0.04] border border-white/10 rounded-2xl p-10 md:p-12 hover:bg-white/[0.08] hover:border-[#DDA31E]/40 transition-all duration-500 flex flex-col items-center text-center shadow-xl"
            }

            return (
              <Wrapper
                key={service.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                {...wrapperProps}
              >
                <div className="w-20 h-20 rounded-full bg-[#DDA31E]/10 border border-[#DDA31E]/20 flex items-center justify-center mb-6 group-hover:bg-[#DDA31E]/20 transition-colors">
                  <service.icon size={32} className="text-[#DDA31E]" />
                </div>
                <h3 className="text-white font-black text-2xl uppercase tracking-wider italic mb-3">
                  {isVideo ? "Video Production" : service.label}
                </h3>
                <p className="text-white text-sm leading-relaxed italic">
                  {service.desc}
                </p>
                {isVideo && (
                  <span className="mt-4 text-[#DDA31E] text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Watch our latest work →
                  </span>
                )}
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
