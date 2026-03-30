"use client"

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/bearmediacontentservices" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/bearmedia70/" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/garrylynch" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@bearmedia70" },
]

export function Footer() {
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
                className="text-white hover:text-[#DDA31E] transition-colors"
                aria-label={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex gap-10">
          <a
            href="#services"
            className="text-white text-xs uppercase tracking-[0.3em] font-black transition-all duration-300 hover:text-[#DDA31E] hover:scale-110"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="text-white text-xs uppercase tracking-[0.3em] font-black transition-all duration-300 hover:text-[#DDA31E] hover:scale-110"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-white text-xs uppercase tracking-[0.3em] font-black transition-all duration-300 hover:text-[#DDA31E] hover:scale-110"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1240px] mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-xs uppercase tracking-[0.3em] font-black text-white max-w-lg text-center md:text-left leading-relaxed">
          High-end digital visuals and drone services for brands who want to stand out.
        </p>
        <p className="text-xs uppercase tracking-widest font-black text-white">
          © {new Date().getFullYear()} Bear Media. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
