"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Events Manager — Edinburgh Conference Centre",
    content: "Garry captured our annual conference perfectly. Unobtrusive, professional, and the photos showcase exactly what we needed.",
  },
  {
    name: "James Robertson",
    role: "Owner — K Lewis Joinery",
    content: "The drone footage and photography of our projects has been invaluable. Professional service, quality speaks for itself.",
  },
  {
    name: "Emma Campbell",
    role: "Marketing Director — Scottish Property Group",
    content: "We've used Bear Media for multiple property shoots. Attention to detail and quick turnaround make Garry our go-to.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-[#0E0E0E]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header — compact inline */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
          <div className="flex gap-1 mr-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#DDA31E] text-[#DDA31E]" />
            ))}
          </div>
          <p className="text-white/40 text-sm italic">
            What clients say about working with Bear Media
          </p>
        </div>

        {/* Testimonials — horizontal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.03] border border-white/5 rounded-xl p-6 md:p-8 hover:border-white/10 transition-colors"
            >
              <p className="text-white/60 text-sm md:text-base leading-relaxed italic mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#DDA31E] to-[#B58416] flex items-center justify-center text-[#121212] font-black text-sm flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <span className="text-white font-bold text-xs uppercase tracking-wider block">
                    {testimonial.name}
                  </span>
                  <span className="text-white/30 text-[10px] italic">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
