"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Home } from "lucide-react"
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll"
import type { PortfolioImage } from "@/types"

interface LightboxProps {
  images: PortfolioImage[]
  initialIndex: number
  onClose: () => void
}

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useLockBodyScroll(true)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") goToNext()
      if (e.key === "ArrowLeft") goToPrevious()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose, goToNext, goToPrevious])

  const currentImage = images[currentIndex]

  const handleReturnHome = () => {
    onClose()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center">
      {/* Return Home Button */}
      <button
        onClick={handleReturnHome}
        className="absolute top-4 left-4 z-50 px-6 py-2 rounded-full bg-white/10 hover:bg-[#DDA31E] text-white hover:text-black transition-all flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] border border-white/10"
      >
        <Home size={14} />
        Return Home
      </button>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>


      {images.length > 1 && (
        <button
          onClick={goToPrevious}
          className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {images.length > 1 && (
        <button
          onClick={goToNext}
          className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      <div className="relative w-full h-full flex items-center justify-center p-8">
        <Image
          src={currentImage.src || "/placeholder.svg"}
          alt={currentImage.alt}
          width={currentImage.width}
          height={currentImage.height}
          className="max-w-full max-h-full object-contain"
          priority
        />
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white">
        <p className="text-sm mb-1">
          {currentIndex + 1} / {images.length}
        </p>
        {currentImage.caption && <p className="text-sm opacity-80">{currentImage.caption}</p>}
      </div>
    </div>
  )
}
