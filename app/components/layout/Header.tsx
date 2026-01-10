"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { NAV_ITEMS } from "../../lib/constants"

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
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-colors duration-300 ${
        isScrolled ? "bg-zinc-950/95 border-b border-white/10" : "bg-transparent"
      }`}
      style={{
        WebkitBackdropFilter: isScrolled ? "blur(8px)" : "none",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <a href="/" className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold gradient-text leading-tight">Bear Media</span>
            <span className="text-[10px] sm:text-xs text-gray-400 leading-tight">Websites & Social Media Content</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 group py-2"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a href="tel:+44" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">Call Now</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full font-medium text-white hover:from-orange-400 hover:to-amber-400 active:scale-98 transition-all duration-300 min-h-[44px] flex items-center"
            >
              Get a Quote
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 -mr-3 text-gray-300 hover:text-white transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-zinc-950/98 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-2">
          <div className="flex flex-col mb-4 pb-4 border-b border-white/10">
            <span className="text-2xl font-bold gradient-text leading-tight">Bear Media</span>
            <span className="text-xs text-gray-400 leading-tight">Websites & Social Media Content</span>
          </div>

          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors py-4 text-lg border-b border-white/10 min-h-[48px] flex items-center"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+44"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 px-6 py-4 bg-zinc-800 rounded-full font-medium text-white text-center flex items-center justify-center gap-2 min-h-[48px]"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full font-medium text-white text-center active:scale-98 transition-all duration-300 min-h-[48px] flex items-center justify-center"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  )
}
