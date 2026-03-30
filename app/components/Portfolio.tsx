"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface PortfolioImage {
  id: number
  thumbnail: string
  title: string
}

interface Collection {
  id: string
  title: string
  coverImage: string
  description: string
  location?: string
  imageCount: number
  images: PortfolioImage[]
}

const collections: Collection[] = [
  {
    id: "travels",
    title: "Travels",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ev3-13-cqpdoZqrreEPdHl0V8M41DQzsdZ2Jc.jpg",
    description:
      "Stunning landscapes and cityscapes showcasing Edinburgh's iconic architecture, Scotland's dramatic coastline, and aerial perspectives.",
    location: "Scotland",
    imageCount: 8,
    images: [
      {
        id: 29,
        thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ev3-13-cqpdoZqrreEPdHl0V8M41DQzsdZ2Jc.jpg",
        title: "Edinburgh Sunset Silhouette",
      },
      {
        id: 30,
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_12A3897-eMhP8hjKiRStVffYuaaLywwg65qyV6.jpg",
        title: "Howies Restaurant Dusk",
      },
      {
        id: 31,
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_12A3910-GcaggXGW9RuED4kQaW1Mds4Dro2lsq.jpg",
        title: "Edinburgh Light Trails",
      },
      {
        id: 34,
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Library%20-%2026%20of%20124-IO6wfouA1q1xq6UpsA1rvaNAocZPDz.jpg",
        title: "Historic Edinburgh Architecture",
      },
      {
        id: 35,
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_llbd2vllbd2vllbd-D2a6MQSUY4V60suJ5ysf4MgJW3x64u.png",
        title: "Holyrood Palace Aerial",
      },
      {
        id: 36,
        thumbnail: "/images/venue-aerial-wide.png",
        title: "Prestonfield Estate Aerial",
      },
      {
        id: 39,
        thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ev3-01-QuJS4GNAL57SAnqaXeYIpnRc3ICV9P.jpg",
        title: "Sunset Water Reflections",
      },
      {
        id: 40,
        thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ev3-10-woZRVBuO2xK2zTChZ5jTfVi5R7l22e.jpg",
        title: "Boat at Sunset",
      },
    ],
  },
  {
    id: "commercial-work",
    title: "Commercial & Architecture",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/R0010009.JPG-BlY3LUGKF9ilqtMS3NxOfZ7a3oq5ZW.jpeg",
    description:
      "Professional commercial photography including luxury property showcases, architectural details, corporate portraits, and brand campaigns.",
    location: "Scotland",
    imageCount: 6,
    images: [
      {
        id: 47,
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/R0010009.JPG-BlY3LUGKF9ilqtMS3NxOfZ7a3oq5ZW.jpeg",
        title: "Luxury Staircase 360°",
      },
      {
        id: 49,
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5822-ToRf6umSFNTR7OCrrbUtM5wTGFS1W5.jpg",
        title: "Stable Facilities Exterior",
      },
      {
        id: 50,
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5818-VuB6WPvtLHdcg1GRMAKK4jqt7JsCEb.jpg",
        title: "Artisan Metalwork Detail",
      },
      {
        id: 54,
        thumbnail: "/images/garry-portrait.png",
        title: "Professional Headshot",
      },
      {
        id: 55,
        thumbnail: "/images/business-portrait.jpg",
        title: "Corporate Portrait",
      },
      {
        id: 56,
        thumbnail:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_12A1735-VzPriOggjep0elNrQKAG4AMTzanMgY.jpeg",
        title: "Harley-Davidson Campaign",
      },
    ],
  },
]

export default function Portfolio() {
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const handleCollectionClick = (collection: Collection) => {
    setSelectedCollection(collection)
    setCurrentImageIndex(0)
  }

  const handleClose = useCallback(() => {
    setSelectedCollection(null)
    setCurrentImageIndex(0)
  }, [])

  const handlePrevious = useCallback(() => {
    if (!selectedCollection) return
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return selectedCollection.images.length - 1
      }
      return prevIndex - 1
    })
  }, [selectedCollection])

  const handleNext = useCallback(() => {
    if (!selectedCollection) return
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === selectedCollection.images.length - 1) {
        return 0
      }
      return prevIndex + 1
    })
  }, [selectedCollection])

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) handleNext()
    if (isRightSwipe) handlePrevious()
  }

  useEffect(() => {
    if (!selectedCollection) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        handleClose()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        handlePrevious()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        handleNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [selectedCollection, handleClose, handlePrevious, handleNext])

  return (
    <section id="portfolio" className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-black">Portfolio</h2>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Two focused collections showcasing our work across landscapes and commercial photography
          </p>
        </motion.div>

        {/* Collections Grid - Improved Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleCollectionClick(collection)}
              className="group cursor-pointer"
            >
              {/* Collection Cover - Better Spacing */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-8 rounded-lg shadow-lg">
                <Image
                  src={collection.coverImage || "/placeholder.svg"}
                  alt={collection.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={index < 2}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 active:bg-black/50 md:group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 active:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300 text-center px-8">
                    <div className="text-white text-lg sm:text-xl font-bold uppercase tracking-wider mb-4">
                      {collection.imageCount} Images
                    </div>
                    <div className="text-white/90 text-sm sm:text-base uppercase tracking-wider">
                      Explore Collection →
                    </div>
                  </div>
                </div>

                {/* Image Count Badge */}
                <div className="absolute top-6 right-6 bg-black/80 text-white px-5 py-2.5 text-sm font-bold backdrop-blur-sm rounded-full">
                  {collection.imageCount}
                </div>
              </div>

              {/* Collection Info - Better Spacing */}
              <div className="px-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors">
                  {collection.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">{collection.description}</p>
                {collection.location && (
                  <div className="text-sm sm:text-base text-gray-500 uppercase tracking-wider font-semibold">
                    {collection.location}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Collection Viewer Modal */}
      <AnimatePresence>
        {selectedCollection && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              aria-label="Close lightbox"
            />

            {/* Close Button */}
            <motion.button
              className="fixed top-6 right-6 z-[110] w-14 h-14 flex items-center justify-center bg-white/20 hover:bg-white/30 text-white transition-all duration-300 rounded-full backdrop-blur-md border-2 border-white/30 hover:border-white/50 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => {
                e.stopPropagation()
                handleClose()
              }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close collection viewer"
            >
              <X className="w-7 h-7" strokeWidth={2.5} />
            </motion.button>

            {/* Navigation Arrows */}
            {selectedCollection.images.length > 1 && (
              <>
                <motion.button
                  className="fixed left-6 top-1/2 -translate-y-1/2 z-[105] w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-all duration-300 rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrevious()
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-7 h-7" />
                </motion.button>

                <motion.button
                  className="fixed right-6 top-1/2 -translate-y-1/2 z-[105] w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-all duration-300 rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNext()
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-7 h-7" />
                </motion.button>
              </>
            )}

            {/* Content Container */}
            <motion.div
              className="relative z-[101] w-full h-full flex flex-col items-center justify-center p-8 md:p-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Collection Header */}
              <motion.div
                className="text-center mb-8 px-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedCollection.title}</h3>
                <p className="text-sm text-gray-400">{selectedCollection.location}</p>
              </motion.div>

              {/* Image Container */}
              <div className="relative w-full max-w-6xl h-[60vh] md:h-[65vh] mb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={selectedCollection.images[currentImageIndex].thumbnail || "/placeholder.svg"}
                      alt={selectedCollection.images[currentImageIndex].title}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                      quality={95}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Image Info */}
              <motion.div
                className="mt-6 text-center px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-lg text-white mb-2">{selectedCollection.images[currentImageIndex].title}</h4>
                <div className="text-sm text-gray-400">
                  {currentImageIndex + 1} / {selectedCollection.images.length}
                </div>
              </motion.div>

              {/* Thumbnail Strip */}
              {selectedCollection.images.length > 1 && (
                <motion.div
                  className="mt-8 flex gap-3 overflow-x-auto max-w-full sm:max-w-4xl px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {selectedCollection.images.map((img, idx) => (
                    <button
                      key={img.id}
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentImageIndex(idx)
                      }}
                      className={`relative flex-shrink-0 w-16 h-16 overflow-hidden transition-all duration-300 rounded ${
                        idx === currentImageIndex
                          ? "ring-2 ring-yellow-500 opacity-100 scale-110"
                          : "opacity-50 hover:opacity-75 hover:scale-105"
                      }`}
                    >
                      <Image
                        src={img.thumbnail || "/placeholder.svg"}
                        alt={img.title}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Mobile Swipe Hint */}
              <div className="md:hidden mt-6 text-xs text-gray-500 uppercase tracking-wider text-center">
                ← Swipe to Navigate →
              </div>

              {/* Desktop Keyboard Hints */}
              <div className="hidden md:flex gap-6 mt-6 text-xs text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <ChevronLeft className="w-3 h-3" />
                  <span>Prev</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3" />
                  <span>Next</span>
                </div>
                <div>ESC Close</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
