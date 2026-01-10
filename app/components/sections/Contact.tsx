"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { ContactForm } from "../ContactForm"

export function Contact() {
  return (
    <section id="contact" className="bg-zinc-900 py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div
        className="absolute top-1/4 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gradient-text text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Get in Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Ready to bring your vision to life? Contact us today
          </p>
        </motion.div>

        <div className="grid gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-md mx-auto lg:hidden">
          <a
            href="mailto:info@bear-media.com"
            className="flex items-center gap-4 p-4 glass rounded-xl active:scale-98 transition-transform min-h-[56px]"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Email</p>
              <p className="text-white font-medium">info@bear-media.com</p>
            </div>
          </a>

          <a
            href="tel:+447879011860"
            className="flex items-center gap-4 p-4 glass rounded-xl active:scale-98 transition-transform min-h-[56px]"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Call</p>
              <p className="text-white font-medium">07879 011860</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 glass rounded-xl min-h-[56px]">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Location</p>
              <p className="text-white font-medium">Edinburgh, Scotland</p>
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { icon: Mail, title: "Email", value: "info@bear-media.com", href: "mailto:info@bear-media.com" },
              { icon: Phone, title: "Phone", value: "07879 011860", href: "tel:+447879011860" },
              { icon: MapPin, title: "Location", value: "Edinburgh, Scotland", href: null },
            ].map((item) => (
              <motion.div
                key={item.title}
                className="flex items-center gap-4 p-5 glass rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{item.title}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-lg text-white font-medium hover:text-orange-300 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg text-white font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Mobile form */}
        <div className="lg:hidden max-w-md mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
