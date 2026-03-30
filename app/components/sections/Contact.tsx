"use client"

import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-[#121212]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-[#DDA31E] font-bold uppercase tracking-[0.4em] text-xs mb-4 italic">
              Let&apos;s Work Together
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white italic tracking-tighter leading-[0.9] mb-8">
              Got a<br />
              <span className="text-[#DDA31E]">project?</span>
            </h2>
            <p className="text-white text-base md:text-lg italic max-w-md mb-10">
              Whether it&apos;s a one-off shoot or ongoing content, I&apos;d love to hear about it. 
              Based in West Lothian, available across Scotland.
            </p>

            {/* Direct contact */}
            <div className="space-y-4">
              <a
                href="mailto:info@bear-media.com"
                className="flex items-center gap-4 text-white hover:text-[#DDA31E] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#DDA31E]/10 border border-[#DDA31E]/20 flex items-center justify-center group-hover:bg-[#DDA31E]/20 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 text-[#DDA31E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-white font-black uppercase tracking-widest block">Email</span>
                  <span className="text-lg font-medium">info@bear-media.com</span>
                </div>
              </a>

              <a
                href="tel:+447879011860"
                className="flex items-center gap-4 text-white hover:text-[#DDA31E] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#DDA31E]/10 border border-[#DDA31E]/20 flex items-center justify-center group-hover:bg-[#DDA31E]/20 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 text-[#DDA31E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-white font-black uppercase tracking-widest block">Call</span>
                  <span className="text-lg font-medium">07879 011860</span>
                </div>
              </a>

              <a
                href="https://calendly.com/bearmedia/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-3 bg-[#DDA31E] text-[#121212] px-8 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-lg shadow-[#DDA31E]/20 hover:bg-white transition-all transform hover:scale-105"
              >
                Book a discovery call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: Featured image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/Professional video camera equipment Bear Media Edinburgh.png"
                alt="Bear Media professional video equipment"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <a
                  href="https://bear-media.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#DDA31E] text-[#121212] px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  Visit Main Site
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
