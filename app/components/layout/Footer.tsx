"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/bearmediacontentservices" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/bear.media" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/garrylynch" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@bearmedia70" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#121212] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Logo & Social */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <a href="/" className="flex items-center gap-4 group">
            <div className="bg-[#DDA31E] p-2 rounded-xl shadow-xl group-hover:shadow-2xl transition-all group-hover:-translate-y-1">
              <img
                src="/images/bear media scotland logo.png"
                alt="Bear Media Logo"
                className="w-10 h-10 object-contain brightness-0"
              />
            </div>
            <span className="text-3xl font-black text-white tracking-tighter italic">
              BEAR MEDIA
            </span>
          </a>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#DDA31E] transition-colors"
                aria-label={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-xs font-black uppercase tracking-[0.2em] text-white/40">
          <a href="#services" className="hover:text-[#DDA31E] transition-colors">
            Services
          </a>
          <a href="#portfolio" className="hover:text-[#DDA31E] transition-colors">
            Work
          </a>
          <a href="#about" className="hover:text-[#DDA31E] transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-[#DDA31E] transition-colors">
            Contact
          </a>
        </nav>
      </div>

      {/* Legal Links */}
      <div className="max-w-[1240px] mx-auto mt-12 flex flex-wrap items-center justify-center gap-6 text-[10px] uppercase tracking-[0.2em] font-black text-white/20">
        <Link href="/terms" className="hover:text-[#DDA31E] transition-colors">
          Terms & Conditions
        </Link>
        <Link href="/privacy" className="hover:text-[#DDA31E] transition-colors">
          Privacy Policy
        </Link>
        <Link href="/cookies" className="hover:text-[#DDA31E] transition-colors">
          Cookie Policy
        </Link>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1240px] mx-auto mt-12 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20 max-w-lg text-center md:text-left leading-relaxed">
          Serving: Broxburn · Edinburgh · Fife · Glasgow · West Lothian · Scotland
        </p>
        <p className="text-[10px] uppercase tracking-widest font-black text-white/20">
          © {currentYear} Bear Media. Built by Bear Media.
        </p>
      </div>
    </footer>
  )
}
