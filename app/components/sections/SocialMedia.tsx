"use client"

import { motion } from "framer-motion"
import { Instagram, Youtube } from "lucide-react"

export function SocialMedia() {
  const socialContent = [
    {
      platform: "Instagram",
      icon: Instagram,
      handle: "@bear_media_scotland",
      description: "Behind-the-scenes content and latest projects",
      link: "https://www.instagram.com/bear_media_scotland",
    },
    {
      platform: "YouTube",
      icon: Youtube,
      handle: "Bear Media",
      description: "Full video productions and showreels",
      link: "https://www.youtube.com/@bearmedia",
    },
  ]

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="mb-6">Follow Our Journey</h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Connect with us on social media for the latest updates
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {socialContent.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.platform}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-gray-800 p-8 md:p-10 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">
                      {social.platform}
                    </h3>
                    <p className="text-yellow-500 font-semibold mb-2">{social.handle}</p>
                    <p className="text-gray-300">{social.description}</p>
                  </div>
                </div>
                <div className="text-yellow-500 font-semibold group-hover:gap-3 flex items-center gap-2 transition-all">
                  Follow us
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
