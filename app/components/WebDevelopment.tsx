"use client"

import { motion } from "framer-motion"
import { ExternalLink, Zap, Mail, Phone } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "K Lewis Joinery",
    category: "Construction & Trade",
    description: "Professional equestrian and joinery services showcase with galleries",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iScreen%20Shoter%20-%20Google%20Chrome%20-%20251021235703-MCYcBfYoZA9olwIa6Ve56wYFnoKg0f.jpg",
    url: "https://www.klewisjoineryltd.co.uk/",
    tech: ["Vercel v0", "Next.js", "Responsive Design"],
    features: ["Custom Galleries", "Service Pages", "Contact Forms", "Email Setup"],
  },
  {
    title: "Herb and Soul",
    category: "Wellness & Herbal Medicine",
    description: "Nature-inspired website with booking system and e-commerce ready",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iScreen%20Shoter%20-%20Google%20Chrome%20-%20251021235721-8ZOyWCENXCDgIlLVbAUyNJhJFixINa.jpg",
    url: "https://www.herbandsoul.uk/",
    tech: ["Vercel v0", "Booking System", "Blog Platform"],
    features: ["Event Bookings", "Newsletter", "Blog", "Domain & Email"],
  },
  {
    title: "The Free Spirit Coach",
    category: "Coaching & Wellness",
    description: "Modern coaching platform for alcohol empowerment and self-worth",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iScreen%20Shoter%20-%20Google%20Chrome%20-%20251021235742-P2VEp78oGPsQTKzbgq7F55fAClM71K.jpg",
    url: "https://www.thefreespirit.uk/",
    tech: ["Vercel v0", "Clean UI", "Fast Loading"],
    features: ["Resource Library", "Booking Integration", "Blog", "Professional Email"],
  },
  {
    title: "Voice2Lead",
    category: "Leadership Coaching",
    description: "Executive coaching website optimised for conversions",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iScreen%20Shoter%20-%20Google%20Chrome%20-%20251021235755-Azfyzdi1f8LeaBNdkjhJRmZCvzqTBx.jpg",
    url: "https://www.voice2lead.com/",
    tech: ["Vercel v0", "SEO Optimised", "Performance"],
    features: ["Service Showcase", "Testimonials", "Contact Systems", "Full Setup"],
  },
]

const additionalProjects = [
  { name: "Cairngrey", url: "https://www.cairngrey.com/" },
  { name: "J. Clenaghan", url: "https://www.joanneclenaghan.com/" },
  { name: "S. Corry", url: "https://seamuscorry.co.uk/" },
  { name: "Bear Media", url: "https://bear-media.com/" },
]

const services = [
  { icon: "🎨", title: "Design", desc: "Modern, responsive designs" },
  { icon: "⚡", title: "AI Development", desc: "3x faster with Vercel v0" },
  { icon: "🌐", title: "Complete Setup", desc: "Domain & email included" },
  { icon: "🚀", title: "Launch & Support", desc: "SEO & maintenance" },
]

export default function WebDevelopment() {
  return (
    <>
      {/* Main Web Development Section */}
      <section id="web-development" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-black mb-4 text-white font-poppins tracking-tight">
              Web Development
            </h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto mb-6" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Modern AI-powered websites with complete setup - domain, hosting, and professional email included
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-full">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm uppercase tracking-wider">Built with Vercel v0 AI</span>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Image Container */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} website preview`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-white transition-colors font-semibold uppercase tracking-wider text-sm inline-flex items-center gap-2"
                    >
                      Visit Site
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-yellow-500 text-sm mb-3 uppercase tracking-wider">{project.category}</p>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Projects */}
          <motion.div
            className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Additional Projects</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {additionalProjects.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-gray-800 text-gray-300 rounded-lg text-center hover:bg-yellow-500/20 hover:text-yellow-500 hover:border-yellow-500/50 transition-all border border-transparent font-medium"
                >
                  {link.name} →
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-white font-bold mb-2">{service.title}</h4>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Build Your Website?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Complete package from £800 including design, development, domain, hosting, and email setup
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@bear-media.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-black font-semibold uppercase tracking-wider text-sm hover:bg-white transition-colors rounded-lg"
              >
                <Mail className="w-4 h-4" />
                Start Your Project
              </a>
              <a
                href="tel:+447879011860"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white font-semibold uppercase tracking-wider text-sm hover:bg-gray-700 transition-colors rounded-lg"
              >
                <Phone className="w-4 h-4" />
                07879 011860
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Social Media & Video Content</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Beyond websites, I create engaging content for social media platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "📱", title: "Instagram Reels", desc: "Behind-the-scenes, tutorials, and showcases" },
              { icon: "🎥", title: "TikTok Content", desc: "Quick tips and Edinburgh scenes" },
              { icon: "📺", title: "YouTube Videos", desc: "Full project breakdowns and tutorials" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-black/50 p-8 rounded-2xl border border-gray-800 hover:border-yellow-500/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.instagram.com/bearmedia70/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all font-semibold"
            >
              View Social Content
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
