'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'C&G Developments',
    description: 'Website design and video content for construction company',
    image: '/portfolio-1.png',
    category: 'Website & Video'
  },
  {
    id: 2,
    title: 'Simply Sheds Scotland',
    description: 'E-commerce website and product photography',
    image: '/portfolio-2.png',
    category: 'Website & Photography'
  },
  {
    id: 3,
    title: 'Seamus Corry',
    description: 'Artist portfolio website and brand photography',
    image: '/portfolio-3.png',
    category: 'Website & Photography'
  },
  {
    id: 4,
    title: 'Mobile Phone Fix',
    description: 'Service website and promotional video content',
    image: '/portfolio-4.png',
    category: 'Website & Video'
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Featured</span>{' '}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            A selection of work created for Scottish businesses across various industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg glass-card p-6 md:p-8 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 md:h-72 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={85}
                />
              </div>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-primary text-xs font-semibold uppercase tracking-widest">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/70 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* CTA */}
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold text-sm"
              >
                View Project
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center pt-12 border-t border-border">
          <p className="text-foreground/70 mb-6">
            Want to see more of our work or discuss your project?
          </p>
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded font-semibold hover:opacity-90 transition-all duration-200 hover:shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}
