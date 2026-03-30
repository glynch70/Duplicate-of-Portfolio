"use client"

import { motion } from "framer-motion"

const clients = [
  { name: "GSM Electrical", logo: "⚡" },
  { name: "Seamus Corry", logo: "💪" },
  { name: "Pines Pharmacy", logo: "🏥" },
  { name: "Roxy Property", logo: "🏠" },
  { name: "We Buy Any Home", logo: "🔑" },
  { name: "Edinburgh Estates", logo: "🏢" },
]

const testimonials = [
  {
    quote: "Garry delivered exactly what we needed - no fuss, just results. Our social media engagement doubled.",
    author: "Seamus Corry",
    company: "Fitness Coach",
  },
  {
    quote: "Professional drone footage and a website that actually converts visitors. Highly recommend.",
    author: "Sarah Mitchell",
    company: "Pines Pharmacy",
  },
  {
    quote: "Finally found someone who understands both content and business. Our podcast is now on Spotify!",
    author: "David Roxy",
    company: "Roxy Property",
  },
]

export default function ClientLogos() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Trusted by Edinburgh Businesses</h2>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors"
            >
              <div className="text-3xl mb-2">{client.logo}</div>
              <p className="text-sm font-medium text-muted-foreground text-center">{client.name}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-secondary/10 p-6 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
            >
              <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
