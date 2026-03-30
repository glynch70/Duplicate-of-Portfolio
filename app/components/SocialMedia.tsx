"use client"

import { motion } from "framer-motion"
import { Instagram, Youtube, Facebook } from "lucide-react"
import Image from "next/image"

const socialChannels = [
  {
    platform: "Instagram",
    handle: "@bearmedia70",
    description: "Daily content, behind-the-scenes & portfolio highlights",
    url: "https://www.instagram.com/bearmedia70/",
    icon: Instagram,
    color: "from-purple-600 to-pink-600",
    stats: "Latest Projects",
  },
  {
    platform: "YouTube",
    handle: "@bearmedia70",
    description: "Video production, tutorials & project breakdowns",
    url: "https://www.youtube.com/@bearmedia70",
    icon: Youtube,
    color: "from-red-600 to-red-700",
    stats: "Full Videos",
  },
  {
    platform: "TikTok",
    handle: "@bearmediascotland",
    description: "Quick tips, creative content & Edinburgh scenes",
    url: "https://www.tiktok.com/@bearmediascotland",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
    color: "from-cyan-400 to-pink-600",
    stats: "Short Form",
  },
  {
    platform: "Facebook",
    handle: "Bear Media",
    description: "Updates, client projects & community engagement",
    url: "https://www.facebook.com/profile.php?id=61553562716650",
    icon: Facebook,
    color: "from-blue-600 to-blue-700",
    stats: "Portfolio",
  },
]

const recentHighlights = [
  {
    image: "/images/garry-professional-portrait.jpeg",
    title: "Professional Portrait",
    category: "Photography",
  },
  {
    image: "/images/culinary-masterclass-chef.png",
    title: "Culinary Event",
    category: "Food Photography",
  },
  {
    image: "/images/edinburgh-sunset-skyline.jpg",
    title: "Edinburgh Skyline",
    category: "Cityscape",
  },
  {
    image: "/images/conference-stage-view.jpeg",
    title: "Conference Coverage",
    category: "Events",
  },
  {
    image: "/images/holyrood-aerial-autumn.png",
    title: "Aerial Photography",
    category: "Drone",
  },
  {
    image: "/images/beef-wellington-plating.png",
    title: "Fine Dining",
    category: "Food",
  },
  {
    image: "/images/harley-davidson.jpeg",
    title: "Commercial Work",
    category: "Branding",
  },
  {
    image: "/images/studio-portrait-bw.png",
    title: "Studio Portrait",
    category: "Photography",
  },
]

export default function SocialMedia() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-black mb-4 text-white font-poppins tracking-tight">
            Follow the Journey
          </h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Behind-the-scenes content, tutorials, and daily inspiration across all platforms
          </p>
        </motion.div>

        {/* Social Media Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {socialChannels.map((channel, index) => {
            const Icon = channel.icon
            return (
              <motion.a
                key={channel.platform}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-yellow-500 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${channel.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-white group-hover:text-black transition-colors duration-300" />
                    </div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{channel.stats}</div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white group-hover:text-yellow-500 transition-colors duration-300">
                      {channel.platform}
                    </h3>
                    <p className="text-gray-400 font-medium">{channel.handle}</p>
                    <p className="text-gray-500 leading-relaxed">{channel.description}</p>
                  </div>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-500 group-hover:text-yellow-500 transition-colors duration-300">
                    <span>Follow</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-black text-white mb-4">Stay Updated</h3>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Get daily inspiration, tutorials, and exclusive behind-the-scenes content from projects across Scotland
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialChannels.map((channel) => {
              const Icon = channel.icon
              return (
                <a
                  key={channel.platform}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center hover:border-yellow-500 hover:bg-yellow-500 text-white hover:text-black transition-all duration-300"
                  aria-label={`Follow on ${channel.platform}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </motion.div>

        {/* Featured Content Preview */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-6">Recent Highlights</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recentHighlights.slice(0, 8).map((highlight, index) => (
              <motion.div
                key={index}
                className="group aspect-square relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={highlight.image || "/placeholder.svg"}
                  alt={highlight.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                  <div className="text-xs uppercase tracking-wider text-yellow-500 mb-1">{highlight.category}</div>
                  <div className="text-sm font-semibold text-white text-center">{highlight.title}</div>
                  <Instagram className="w-5 h-5 text-white mt-2" />
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="https://www.instagram.com/bearmedia70/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors text-sm uppercase tracking-wider"
            >
              <span>View More on Instagram</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
