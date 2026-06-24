'use client'

import { Video, Camera, Plane, Globe, Share2, Zap } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Photography',
    description: 'Professional photography for products, events, corporate and lifestyle content.'
  },
  {
    icon: Video,
    title: 'Video Production',
    description: 'From concept to delivery. Professional video content that tells your story.'
  },
  {
    icon: Plane,
    title: 'Drone Content',
    description: 'Stunning aerial 4K footage for properties, events and promotional work.'
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Strategic content creation and social media management for your business.'
  },
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Custom-built, responsive websites that convert visitors into customers.'
  },
  {
    icon: Zap,
    title: 'AI Automation',
    description: 'Leverage AI to streamline your content creation and business processes.'
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">My</span>{' '}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Complete content solutions for Scottish businesses looking to make an impact.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group glass-card p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
