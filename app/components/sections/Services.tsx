"use client"

import { Video, Camera, Plane } from "lucide-react"

const services = [
  {
    icon: Video,
    title: "Video",
    description: "Content for websites and social media — not corporate fluff",
    features: ["Event coverage", "Website content", "Social media"],
  },
  {
    icon: Camera,
    title: "Photo",
    description: "Professional photography for websites, social, and marketing",
    features: ["Events", "Products", "Architecture"],
  },
  {
    icon: Plane,
    title: "Drone",
    description: "Aerial content for property, construction, and unique perspectives",
    features: ["Property shots", "Construction sites", "Aerial video"],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary py-16 sm:py-20 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="gradient-text text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Services</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Video, photo, and drone services that support your website and social presence
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
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm sm:text-base text-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
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
