"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface LightboxProps {
  isOpen: boolean
  onClose: () => void
  images: Array<{
    id: number
    title: string
    thumbnail: string
    category: string
  }>
  currentIndex: number
  onNavigate: (direction: "prev" | "next") => void
}

export default function Lightbox({ isOpen, onClose, images, currentIndex, onNavigate }: LightboxProps) {
  const currentImage = images[currentIndex]

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onNavigate("prev")
      if (e.key === "ArrowRight") onNavigate("next")
    }

    window.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose, onNavigate])

  if (!currentImage) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Close Button */}
          <motion.button
            className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClose}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </motion.button>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <motion.button
                className="absolute left-6 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={() => onNavigate("prev")}
                disabled={currentIndex === 0}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                className="absolute right-6 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={() => onNavigate("next")}
                disabled={currentIndex === images.length - 1}
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </>
          )}

          {/* Image Container */}
          <motion.div
            className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Image */}
            <div className="relative w-full max-w-7xl h-[70vh] md:h-[75vh]">
              <Image
                src={currentImage.thumbnail || "/placeholder.svg"}
                alt={currentImage.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
                quality={95}
              />
            </div>

            {/* Image Info */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-sm uppercase tracking-wider text-yellow-500 mb-2">{currentImage.category}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{currentImage.title}</h3>
              <div className="text-sm text-gray-400">
                {currentIndex + 1} / {images.length}
              </div>
            </motion.div>

            {/* Keyboard Hints */}
            <div className="hidden md:flex gap-6 mt-6 text-xs text-gray-500 uppercase tracking-wider">
              <div>← Prev</div>
              <div>→ Next</div>
              <div>ESC Close</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
