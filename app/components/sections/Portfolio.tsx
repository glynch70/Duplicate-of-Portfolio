"use client"

import { useState } from "react"

interface PortfolioImage {
  src: string
  alt: string
  title: string
}

interface PortfolioCategory {
  id: string
  title: string
  description: string
  coverImage: string
  images: PortfolioImage[]
}

const categories: PortfolioCategory[] = [
  {
    id: "events",
    title: "Events & Conferences",
    description: "Capturing the energy and emotion of corporate events",
    coverImage: "/images/ABBA tribute event photography Edinburgh venue Bear Media.jpg",
    images: [
      {
        src: "/images/ABBA tribute event photography Edinburgh venue Bear Media.jpg",
        alt: "ABBA Event",
        title: "ABBA Tribute Event",
      },
      {
        src: "/images/Conference panel discussion video production Scotland.png",
        alt: "Conference Speaker",
        title: "Wellness Conference",
      },
      {
        src: "/images/Corporate conference presentation filming Edinburgh.jpg",
        alt: "Presentation",
        title: "Conference Presentation",
      },
      {
        src: "/images/Corporate speaker event photography Scotland.jpg",
        alt: "Event Speaker",
        title: "Corporate Event",
      },
    ],
  },
  {
    id: "culinary",
    title: "Culinary & Dining",
    description: "Showcasing the artistry of food and culinary experiences",
    coverImage: "/images/Fine dining food plating photography Edinburgh restaurant.png",
    images: [
      {
        src: "/images/Fine dining food plating photography Edinburgh restaurant.png",
        alt: "Fine Dining",
        title: "Fine Dining Presentation",
      },
      {
        src: "/images/Beef wellington culinary video content Scotland.png",
        alt: "Beef Wellington",
        title: "Beef Wellington",
      },
      {
        src: "/images/Chef demonstration video production Edinburgh restaurant.jpg",
        alt: "Chef Demo",
        title: "Chef Demonstration",
      },
      {
        src: "/images/Culinary teaching event video production Edinburgh.png",
        alt: "Culinary Demo",
        title: "Culinary Workshop",
      },
    ],
  },
  {
    id: "travel",
    title: "Edinburgh & Scotland",
    description: "Breathtaking landscapes and iconic Scottish locations",
    coverImage: "/images/Edinburgh sunset skyline drone photography Scotland.jpg",
    images: [
      {
        src: "/images/Edinburgh sunset skyline drone photography Scotland.jpg",
        alt: "Edinburgh Sunset",
        title: "Edinburgh Skyline",
      },
      { src: "/images/Bass Rock seabird colony photography East Lothian.png", alt: "Bass Rock", title: "Bass Rock" },
      {
        src: "/images/Edinburgh autumn cityscape photography Scotland.jpg",
        alt: "Edinburgh Autumn",
        title: "Edinburgh in Autumn",
      },
      {
        src: "/images/Sunset water reflections landscape photography Scotland.jpg",
        alt: "Water Reflections",
        title: "Coastal Sunset",
      },
    ],
  },
  {
    id: "commercial",
    title: "Commercial & Architecture",
    description: "Professional photography for businesses and architecture",
    coverImage: "/images/Aerial drone construction site video Scotland.jpeg",
    images: [
      {
        src: "/images/Aerial drone construction site video Scotland.jpeg",
        alt: "Aerial Construction",
        title: "Construction Project",
      },
      {
        src: "/images/Professional business portrait photography Edinburgh.jpg",
        alt: "Business Portrait",
        title: "Professional Portrait",
      },
      {
        src: "/images/K Lewis Joinery craftsman video West Lothian.jpg",
        alt: "K Lewis Joinery",
        title: "K Lewis Joinery",
      },
      {
        src: "/images/Solar panel house drone photography Scotland property.jpg",
        alt: "Solar House",
        title: "Property Photography",
      },
    ],
  },
]

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [lightboxImage, setLightboxImage] = useState<PortfolioImage | null>(null)

  const selectedCategoryData = categories.find((cat) => cat.id === selectedCategory)

  return (
    <section id="portfolio" className="bg-zinc-950 py-16 sm:py-20 md:py-24">
      <div className="container">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="gradient-text text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Work</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Explore my diverse collection of work across events, culinary, travel, and commercial photography
          </p>
        </div>

        {!selectedCategory ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="group cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl active:scale-98 transition-transform duration-200"
              >
                <div className="relative aspect-square sm:aspect-[4/3]">
                  <img
                    src={category.coverImage || "/placeholder.svg"}
                    alt={category.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white leading-tight">
                      {category.title}
                    </h3>
                    <p className="hidden sm:block text-xs sm:text-sm text-gray-300 mt-1 line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4 sm:gap-6">
            <button
              onClick={() => setSelectedCategory(null)}
              className="self-start px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg active:scale-98 transition-transform min-h-[48px]"
            >
              ← Back
            </button>

            {selectedCategoryData && (
              <>
                <div className="text-center mb-4">
                  <h3 className="gradient-text text-xl sm:text-2xl font-bold mb-2">{selectedCategoryData.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{selectedCategoryData.description}</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                  {selectedCategoryData.images.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => setLightboxImage(image)}
                      className="group cursor-pointer overflow-hidden rounded-lg active:scale-98 transition-transform"
                    >
                      <div className="relative aspect-square">
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-white p-2 bg-zinc-900">{image.title}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-white text-4xl p-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Close"
            >
              ×
            </button>
            <div className="relative max-w-4xl max-h-[80vh] w-full">
              <img
                src={lightboxImage.src || "/placeholder.svg"}
                alt={lightboxImage.alt}
                className="object-contain w-full h-auto max-h-[80vh]"
              />
              <p className="text-white text-center mt-4 text-sm sm:text-base">{lightboxImage.title}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
