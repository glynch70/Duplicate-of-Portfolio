"use client"

import { Star } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: string
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Events Manager",
    company: "Edinburgh Conference Centre",
    content:
      "Garry's work at our annual conference was exceptional. His ability to capture key moments whilst remaining unobtrusive was exactly what we needed. The photos perfectly showcase the energy of our event.",
    rating: 5,
  },
  {
    name: "James Robertson",
    role: "Owner",
    company: "K Lewis Joinery",
    content:
      "The drone footage and photography of our completed projects has been invaluable for our marketing. Professional service from start to finish, and the quality speaks for itself.",
    rating: 5,
  },
  {
    name: "Emma Campbell",
    role: "Marketing Director",
    company: "Scottish Property Group",
    content:
      "We've used Bear Media for multiple property shoots. The attention to detail and quick turnaround has made Garry our go-to photographer. Highly recommended for any commercial work.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-zinc-950 py-16 sm:py-20 md:py-24">
      <div className="container">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="gradient-text text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Client Testimonials</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Hear what clients say about working with Bear Media
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl space-y-4">
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">"{testimonial.content}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
