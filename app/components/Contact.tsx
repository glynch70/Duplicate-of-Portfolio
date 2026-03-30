"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, Globe, Linkedin } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/bearmedia70/",
    icon: Instagram,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@bearmedia70",
    icon: Youtube,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@bearmediascotland",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61553562716650",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/garrylynch70/",
    icon: Linkedin,
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-white font-poppins tracking-tight">
            Let's Work Together
          </h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Get in touch to discuss your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Contact Information - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Get In Touch</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6 sm:mb-8">
                Available for content creation projects across Scotland. Whether you need event coverage, aerial
                photography, or commercial work, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {/* Email */}
              <a
                href="mailto:info@bear-media.com"
                className="flex items-start gap-3 sm:gap-4 group hover:bg-white/5 p-3 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-1">Email</div>
                  <div className="text-white group-hover:text-yellow-500 transition-colors text-base sm:text-lg break-all">
                    info@bear-media.com
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+447879011860"
                className="flex items-start gap-3 sm:gap-4 group hover:bg-white/5 p-3 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-1">Mobile</div>
                  <div className="text-white group-hover:text-yellow-500 transition-colors text-base sm:text-lg">
                    07879 011860
                  </div>
                  <div className="text-gray-400 hover:text-yellow-500 transition-colors text-xs sm:text-sm">
                    +44 7879 011860 (International)
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 sm:gap-4 p-3">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-1">Location</div>
                  <div className="text-white text-base sm:text-lg">Edinburgh, Scotland</div>
                </div>
              </div>

              {/* Website */}
              <a
                href="https://www.bear-media.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 sm:gap-4 group hover:bg-white/5 p-3 rounded-lg transition-colors"
              >
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-1">Website</div>
                  <div className="text-white group-hover:text-yellow-500 transition-colors text-base sm:text-lg break-all">
                    www.bear-media.com
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/garrylynch70/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 sm:gap-4 group hover:bg-white/5 p-3 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-1">LinkedIn</div>
                  <div className="text-white group-hover:text-yellow-500 transition-colors text-base sm:text-lg break-all">
                    garrylynch70
                  </div>
                </div>
              </a>
            </div>

            {/* Social Media - Mobile Touch Friendly */}
            <div className="pt-6 sm:pt-8 border-t border-gray-800">
              <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-4">Follow & Connect</div>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-gray-700 flex items-center justify-center hover:border-yellow-500 hover:bg-yellow-500 active:border-yellow-500 active:bg-yellow-500 transition-all duration-300 group touch-manipulation"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-black group-active:text-black transition-colors duration-300" />
                    </a>
                  )
                })}
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-4">
                Daily content, behind-the-scenes & portfolio updates
              </p>
            </div>

            {/* Main Website CTA - Mobile Optimized */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-xl p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">Visit Our Main Website</h4>
              <p className="text-gray-400 mb-4 text-xs sm:text-sm">
                Explore our full portfolio, services, and booking options
              </p>
              <a
                href="https://www.bear-media.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-yellow-500 text-black font-semibold uppercase tracking-wider text-xs sm:text-sm hover:bg-white active:bg-white transition-all duration-300 w-full sm:w-auto justify-center touch-manipulation min-h-[44px]"
              >
                <Globe className="w-4 h-4" />
                Visit Bear-Media.com
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Contact Form - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm uppercase tracking-wider text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-gray-700 text-white py-3 focus:outline-none focus:border-yellow-500 transition-colors text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm uppercase tracking-wider text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-gray-700 text-white py-3 focus:outline-none focus:border-yellow-500 transition-colors text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm uppercase tracking-wider text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-transparent border-b-2 border-gray-700 text-white py-3 focus:outline-none focus:border-yellow-500 transition-colors resize-none text-base"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold uppercase tracking-wider text-sm hover:bg-yellow-500 active:bg-yellow-500 transition-all duration-300 touch-manipulation min-h-[44px]"
              >
                Send Enquiry
              </button>

              <p className="text-xs sm:text-sm text-gray-500 text-center">
                Or email directly at{" "}
                <a href="mailto:info@bear-media.com" className="text-yellow-500 hover:underline break-all">
                  info@bear-media.com
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
