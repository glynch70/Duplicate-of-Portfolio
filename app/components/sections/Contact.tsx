'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Ready to grow</span>{' '}
            <span className="text-foreground">your business?</span>
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Book a free discovery call to discuss your content needs and how Bear Media can help.
          </p>
          <button
            onClick={() => {
              window.open('https://calendly.com/bearmedia/discovery-call', '_blank')
            }}
            className="px-8 py-4 bg-primary text-primary-foreground rounded font-semibold text-lg hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:scale-105 inline-block"
          >
            Book a Free Discovery Call
          </button>
        </div>

        {/* Contact Info Grid */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Email */}
            <div className="text-center">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a
                href="mailto:info@bear-media.com"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                info@bear-media.com
              </a>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <a
                href="tel:+447879011860"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                07879 011860
              </a>
            </div>

            {/* Location */}
            <div className="text-center">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-foreground/70">
                West Lothian, Scotland
                <br />
                Serving all of Scotland
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
