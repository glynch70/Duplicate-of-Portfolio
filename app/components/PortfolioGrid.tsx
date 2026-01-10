"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "We Buy Any Home Edinburgh",
    description: "Full social media campaign + landing page using Vercel",
    category: "Websites",
    imageUrl: "/placeholder.svg?height=400&width=600&text=We+Buy+Any+Home",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "GSM Electrical",
    description: "Complete website rebuild with booking system",
    category: "Websites",
    imageUrl: "/placeholder.svg?height=400&width=600&text=GSM+Electrical",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Seamus Corry Fitness",
    description: "Instagram reels + TikTok content strategy",
    category: "Social Media",
    imageUrl: "/placeholder.svg?height=400&width=600&text=Seamus+Corry",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Pines Pharmacy",
    description: "Drone footage + promotional video content",
    category: "Video Content",
    imageUrl: "/placeholder.svg?height=400&width=600&text=Pines+Pharmacy",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "Roxy Property Podcast",
    description: "Full podcast production for Spotify & Apple",
    category: "Podcasts",
    imageUrl: "/placeholder.svg?height=400&width=600&text=Roxy+Property",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Edinburgh Estate Agents",
    description: "Property showcase videos + social media",
    category: "Video Content",
    imageUrl: "/placeholder.svg?height=400&width=600&text=Estate+Agents",
    liveUrl: "#",
  },
  {
    id: 7,
    title: "Local Business Directory",
    description: "WordPress site with custom booking features",
    category: "Websites",
    imageUrl: "/placeholder.svg?height=400&width=600&text=Business+Directory",
    liveUrl: "#",
  },
  {
    id: 8,
    title: "Wellness Brand Campaign",
    description: "YouTube shorts + Instagram story templates",
    category: "Social Media",
    imageUrl: "/placeholder.svg?height=400&width=600&text=Wellness+Brand",
    liveUrl: "#",
  },
]

const categories = ["All", "Websites", "Social Media", "Video Content", "Podcasts"]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Recent Work</h2>
          <p className="text-lg text-muted-foreground">Real projects for real businesses. No fluff, just results.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-2xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border border-border hover:border-primary/20"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-primary mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    View Work
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
