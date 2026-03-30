"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        isScrolled
          ? "bg-[#121212]/90 backdrop-blur-md border-b border-white/10"
          : "bg-[#121212]/20 backdrop-blur-md border-b border-white/5"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14">
            <img
              src="/images/bear media scotland logo.png"
              alt="Bear Media Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-2xl font-black text-white italic tracking-tighter group-hover:text-[#DDA31E] transition-colors">
            BEAR MEDIA
          </span>
        </a>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-white/60 text-xs uppercase tracking-[0.3em] font-black transition-all duration-300 hover:text-[#DDA31E] hover:scale-110"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-3 -mr-3 text-white/60 hover:text-white transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-[#121212]/98 backdrop-blur-xl transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="px-8 py-10 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white/60 hover:text-[#DDA31E] transition-colors py-5 text-sm uppercase tracking-[0.3em] font-black border-b border-white/5 min-h-[48px] flex items-center"
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://calendly.com/bearmedia/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-6 px-8 py-4 bg-[#DDA31E] text-[#121212] rounded-full font-black text-sm uppercase italic tracking-widest text-center min-h-[48px] flex items-center justify-center hover:scale-105 transition-transform"
          >
            Book a call
          </a>
        </div>
      </div>
    </nav>
  )
}
