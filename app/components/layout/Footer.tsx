'use client'

import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/bear.media' },
  { name: 'YouTube', href: 'https://www.youtube.com/@bearmedia70' },
  { name: 'Facebook', href: 'https://www.facebook.com/bearmediacontentservices' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/garrylynch' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold mb-4 block">
              <span className="text-gradient">Bear</span> <span className="text-foreground">Media</span>
            </Link>
            <p className="text-foreground/60 text-sm">
              Content creation services for Scottish businesses
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  {social.name === 'Instagram' && <Instagram size={20} />}
                  {social.name === 'YouTube' && <Youtube size={20} />}
                  {social.name === 'Facebook' && <Facebook size={20} />}
                  {social.name === 'LinkedIn' && <Linkedin size={20} />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <p>© {currentYear} Bear Media. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
