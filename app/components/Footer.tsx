"use client"

import { useState } from "react"
import { Instagram, Youtube, Facebook, Globe, Mail, Phone, MapPin, ChevronDown, Linkedin } from "lucide-react"

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "Video Production", href: "#video" },
      { name: "Photography", href: "#photography" },
      { name: "Drone Services", href: "#drone" },
      { name: "Event Coverage", href: "#events" },
      { name: "Commercial Work", href: "#commercial" },
      { name: "Social Media Content", href: "#social" },
      { name: "Food Photography", href: "#food" },
      { name: "Architecture", href: "#architecture" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { name: "Events & Conferences", href: "#portfolio" },
      { name: "Food Photography", href: "#portfolio" },
      { name: "Edinburgh Cityscape", href: "#portfolio" },
      { name: "Travel & Lifestyle", href: "#portfolio" },
      { name: "Aerial Photography", href: "#portfolio" },
      { name: "Commercial Work", href: "#portfolio" },
      { name: "Architecture", href: "#portfolio" },
      { name: "View All Work", href: "#portfolio" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Bear Media", href: "#about" },
      { name: "Our Approach", href: "#about" },
      { name: "Client Testimonials", href: "#testimonials" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Meet the Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog & Insights", href: "#blog" },
      { name: "Video Production Guide", href: "#guide" },
      { name: "Photography Tips", href: "#tips" },
      { name: "Drone Regulations", href: "#regulations" },
      { name: "Pricing & Packages", href: "#pricing" },
      { name: "FAQs", href: "#faq" },
      { name: "Client Portal", href: "#portal" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Instagram", href: "https://www.instagram.com/bearmedia70/", external: true },
      { name: "YouTube", href: "https://www.youtube.com/@bearmedia70", external: true },
      { name: "TikTok", href: "https://www.tiktok.com/@bearmediascotland", external: true },
      { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61553562716650", external: true },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/garrylynch70/", external: true },
      { name: "Main Website", href: "https://www.bear-media.com", external: true },
      { name: "Get a Quote", href: "#contact" },
    ],
  },
]

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/bearmedia70/",
    icon: Instagram,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@bearmedia70",
    icon: Youtube,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@bearmediascotland",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61553562716650",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/garrylynch70/",
    icon: Linkedin,
  },
]

function FooterSection({
  title,
  links,
}: { title: string; links: Array<{ name: string; href: string; external?: boolean }> }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 md:border-0">
      {/* Mobile Accordion Header */}
      <button
        className="md:hidden w-full flex justify-between items-center py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-sm font-semibold text-black uppercase tracking-wider">{title}</h3>
        <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Desktop Header */}
      <h3 className="hidden md:block text-sm font-semibold text-black uppercase tracking-wider mb-4">{title}</h3>

      {/* Links */}
      <div className={`${isOpen ? "block" : "hidden"} md:block pb-4 md:pb-0`}>
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm text-gray-600 hover:text-black transition-colors inline-flex items-center gap-1"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {footerSections.map((section) => (
              <FooterSection key={section.title} title={section.title} links={section.links} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Contact Info Section */}
        <div className="py-8 grid md:grid-cols-3 gap-6 text-sm">
          <div className="flex items-start gap-3">
            <Mail className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-gray-500 mb-1">Email</div>
              <a href="mailto:info@bear-media.com" className="text-black hover:text-yellow-600 transition-colors">
                info@bear-media.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-gray-500 mb-1">Mobile</div>
              <a href="tel:+447879011860" className="text-black hover:text-yellow-600 transition-colors block">
                07879 011860
              </a>
              <a href="tel:+447879011860" className="text-gray-500 hover:text-yellow-600 transition-colors text-xs">
                +44 7879 011860
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-gray-500 mb-1">Location</div>
              <div className="text-black">Edinburgh, Scotland</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left Side - Social & Main Site */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>

              <a
                href="https://www.bear-media.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>www.bear-media.com</span>
              </a>
            </div>

            {/* Right Side - Copyright & Legal */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-gray-500">
              <div>Copyright © {new Date().getFullYear()} Bear Media. All rights reserved.</div>
              <div className="hidden sm:block text-gray-300">|</div>
              <div className="flex gap-4">
                <a href="#privacy" className="hover:text-black transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="hover:text-black transition-colors">
                  Terms of Use
                </a>
                <a href="#sitemap" className="hover:text-black transition-colors">
                  Site Map
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Line */}
        <div className="pb-6 text-center">
          <p className="text-xs text-gray-500">
            Professional video production, photography and drone services across Edinburgh and Scotland.{" "}
            <a href="#contact" className="text-black hover:text-yellow-600 transition-colors">
              Get a free quote today
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
