"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Globe } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black tracking-tight">
            <span className={isScrolled ? "text-black" : "text-white"}>Bear Media</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#portfolio"
              className={`text-sm uppercase tracking-wider font-medium transition-colors ${
                isScrolled ? "text-black hover:text-yellow-500" : "text-white hover:text-yellow-500"
              }`}
            >
              Portfolio
            </a>
            <a
              href="#about"
              className={`text-sm uppercase tracking-wider font-medium transition-colors ${
                isScrolled ? "text-black hover:text-yellow-500" : "text-white hover:text-yellow-500"
              }`}
            >
              About
            </a>
            <a
              href="#contact"
              className={`text-sm uppercase tracking-wider font-medium transition-colors ${
                isScrolled ? "text-black hover:text-yellow-500" : "text-white hover:text-yellow-500"
              }`}
            >
              Contact
            </a>

            <a
              href="https://www.bear-media.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 border-2 transition-all duration-300 ${
                isScrolled
                  ? "border-black text-black hover:bg-black hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm uppercase tracking-wider font-medium">Main Site</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-4 bg-white rounded-lg p-6"
          >
            <a
              href="#portfolio"
              className="text-sm uppercase tracking-wider font-medium text-black hover:text-yellow-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="text-sm uppercase tracking-wider font-medium text-black hover:text-yellow-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm uppercase tracking-wider font-medium text-black hover:text-yellow-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>

            <div className="border-t border-gray-200 pt-4">
              <a
                href="https://www.bear-media.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white hover:bg-yellow-500 hover:text-black transition-all duration-300 w-full justify-center"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm uppercase tracking-wider font-medium">Main Website</span>
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  )
}
