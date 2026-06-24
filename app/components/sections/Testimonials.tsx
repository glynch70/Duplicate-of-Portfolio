'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Bear Media transformed how we present our business online. The quality of work and professionalism is outstanding.',
    author: 'James Robertson',
    role: 'Business Owner',
  },
  {
    quote: 'Working with Garry was a pleasure. He understood our vision and delivered exceptional results on time and on budget.',
    author: 'Sarah Mitchell',
    role: 'Marketing Manager',
  },
  {
    quote: 'The drone footage and photography elevated our property listings significantly. Highly recommended.',
    author: 'Emma Campbell',
    role: 'Real Estate Director',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Client</span>{' '}
            <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Real feedback from businesses we&apos;ve worked with
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 text-base leading-relaxed mb-6 flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-foreground/60 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
