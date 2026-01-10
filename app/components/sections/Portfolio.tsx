"use client"

import { ExternalLink, CheckCircle } from "lucide-react"

interface Project {
  name: string
  type: "Website" | "Social Media"
  description: string
  tags: string[]
  outcome?: string
  cta?: {
    text: string
    href: string
  }
}

const featuredProjects: Project[] = [
  {
    name: "K Lewis Joinery",
    type: "Website",
    description: "Equestrian and joinery business based in West Lothian",
    outcome: "Clear services, mobile-ready design, easy contact",
    tags: ["One-page site", "Mobile First", "West Lothian"],
  },
  {
    name: "Free Spirit Coaching",
    type: "Website",
    description: "Wellness coaching practice in Edinburgh",
    outcome: "Professional presence with booking system driving enquiries",
    tags: ["Multi-page", "Booking", "Edinburgh"],
  },
  {
    name: "Managing What Matters",
    type: "Website",
    description: "Leadership training consultancy",
    outcome: "Clear positioning and service delivery explanation",
    tags: ["Multi-page", "B2B", "Scotland-wide"],
  },
]

const websiteProjects: Project[] = [
  {
    name: "K Lewis Joinery",
    type: "Website",
    description: "Equestrian and joinery specialists. Portfolio showcasing craftsmanship",
    tags: ["One-page", "Local Business", "West Lothian"],
  },
  {
    name: "Herb & Soul",
    type: "Website",
    description: "Herbalism and wellness. Online shop with service bookings",
    tags: ["Multi-page", "E-commerce", "Wellness"],
  },
  {
    name: "Free Spirit Coaching",
    type: "Website",
    description: "Wellness coaching with integrated online booking",
    tags: ["Multi-page", "Booking System", "Edinburgh"],
  },
  {
    name: "Managing What Matters",
    type: "Website",
    description: "Performance consultancy with clear service structure",
    tags: ["Multi-page", "B2B", "Professional Services"],
  },
]

const socialProjects: Project[] = [
  {
    name: "Event Coverage",
    type: "Social Media",
    description: "Corporate events and conferences. Professional coverage",
    tags: ["Video", "Photo", "Edinburgh"],
  },
  {
    name: "Culinary Content",
    type: "Social Media",
    description: "Restaurant and food businesses. Menu and venue content",
    tags: ["Video", "Photo", "Edinburgh"],
  },
  {
    name: "Property & Architecture",
    type: "Social Media",
    description: "Construction and property businesses. Site and project documentation",
    tags: ["Drone", "Photo", "Scotland"],
  },
  {
    name: "Ongoing Support",
    type: "Social Media",
    description: "Regular content for Scottish businesses. Consistent brand presence",
    tags: ["Video", "Photo", "Monthly Packages"],
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-zinc-950 py-16 sm:py-20 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="gradient-text text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Work</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Websites that explain your business clearly. Content that keeps you visible and builds trust.
          </p>
        </div>

        {/* Featured Work */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Featured Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} featured />
            ))}
          </div>
        </div>

        {/* Website Projects */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Websites</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Custom-built sites designed for clarity and easy contact
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {websiteProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>

        {/* Social Media Content */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Social Media Content</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Video and photo content for consistent presence and trust-building
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {socialProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>

        {/* How I Work */}
        <div className="mb-16 sm:mb-20 md:mb-24 max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">How I Work</h3>
          <div className="glass p-6 sm:p-8 rounded-xl space-y-6">
            <ProcessStep
              number="1"
              title="Understand the business"
              description="What you do, who for, what makes you different"
            />
            <ProcessStep
              number="2"
              title="Build the website"
              description="Clear explanation of your offer with easy contact"
            />
            <ProcessStep
              number="3"
              title="Support with content"
              description="Ongoing video and photo content that keeps you visible"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass p-8 sm:p-10 md:p-12 rounded-2xl max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Need a website, social content, or both?</h3>
          <p className="text-base sm:text-lg text-gray-400 mb-6">Let's talk about what you need</p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full font-semibold text-lg text-white hover:from-orange-400 hover:to-amber-400 active:scale-98 transition-all duration-300 min-h-[48px]"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <div
      className={`group glass p-5 sm:p-6 rounded-xl hover:border-orange-500/50 transition-all duration-300 ${featured ? "hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1" : "hover:-translate-y-0.5"}`}
    >
      <div className="mb-4 aspect-video bg-zinc-900/50 rounded-lg border border-zinc-800 flex items-center justify-center">
        <span className="text-xs text-zinc-700">Image slot</span>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
            project.type === "Website" ? "bg-orange-500/20 text-orange-400" : "bg-amber-500/20 text-amber-400"
          }`}
        >
          {project.type}
        </span>
      </div>

      <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
        {project.name}
      </h4>

      <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">{project.description}</p>

      {project.outcome && (
        <div className="flex items-start gap-2 mb-4 p-3 bg-zinc-900/50 rounded-lg border border-zinc-800">
          <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-300">{project.outcome}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs text-gray-500 bg-zinc-900 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      {project.cta && (
        <a
          href={project.cta.href}
          className="mt-4 inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors group/link"
        >
          {project.cta.text}
          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
        </a>
      )}
    </div>
  )
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center font-bold text-white">
        {number}
      </div>
      <div>
        <h4 className="text-base sm:text-lg font-semibold text-white mb-1">{title}</h4>
        <p className="text-sm sm:text-base text-gray-400">{description}</p>
      </div>
    </div>
  )
}
