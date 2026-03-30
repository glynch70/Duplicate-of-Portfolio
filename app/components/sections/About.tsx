"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-[#121212]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Photo — takes up less space, more editorial */}
          <div className="lg:col-span-4">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-[#DDA31E]/20 to-transparent rounded-2xl blur-sm" />
              <img
                src="/images/Garry Lynch professional headshot Bear Media Scotland.jpeg"
                alt="Garry Lynch - Bear Media"
                className="relative w-full aspect-[3/4] object-cover rounded-2xl"
                style={{ objectPosition: "center 25%" }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 lg:pl-8">
            <p className="text-[#DDA31E] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 italic">
              Behind the Lens
            </p>

            <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter leading-none mb-8">
              Hi. I&apos;m <span className="text-[#DDA31E]">Garry.</span>
            </h2>

            <div className="text-white/50 text-base md:text-lg space-y-4 italic max-w-2xl mb-12">
              <p>
                I run Bear Media from Broxburn, West Lothian — covering Edinburgh, Fife, and anywhere in Scotland you need me. Photography, video, drone, and custom websites.
              </p>
              <p>
                No agency. No team. One operator who knows your business and delivers consistent, high-quality work. 15 years in communications, CAA-certified drone pilot.
              </p>
            </div>

            {/* Stats — inline */}
            <div className="flex flex-wrap gap-8 md:gap-16">
              {[
                { value: "15+", label: "Years" },
                { value: "30+", label: "Clients" },
                { value: "5★", label: "Google" },
                { value: "CAA", label: "Certified" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="text-3xl md:text-4xl font-black text-[#DDA31E] italic">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-white/30 font-black uppercase tracking-[0.2em] mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
