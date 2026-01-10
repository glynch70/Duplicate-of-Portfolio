"use client"

import { Video, Camera, Plane } from "lucide-react"

const services = [
  {
    icon: Video,
    title: "Video",
    description: "Professional video for websites and social media content",
    features: ["Event coverage", "Business profiles", "Product showcases"],
  },
  {
    icon: Camera,
    title: "Photo",
    description: "Photography for websites, social media, and marketing materials",
    features: ["Business headshots", "Product photography", "Event photography"],
  },
  {
    icon: Plane,
    title: "Drone",
    description: "Aerial photography and video for properties and construction",
    features: ["Property sites", "Construction progress", "Location showcases"],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-zinc-900 py-16 sm:py-20 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="gradient-text text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Services</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Video, photography, and drone services that support your website and social media
          </p>
        </div>

        <div
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:gap-6 max-w-5xl sm:mx-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.title}
                className="flex-shrink-0 w-[85vw] sm:w-auto snap-center glass p-5 sm:p-6 rounded-xl"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm sm:text-base text-gray-300">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
