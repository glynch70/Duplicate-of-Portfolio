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
    description: "Equestrian and joinery portfolio showcasing craftsmanship",
    outcome: "Clear service presentation driving local enquiries",
    tags: ["One-Page Site", "Mobile First", "West Lothian"],
  },
  {
    name: "Free Spirit Coaching",
    type: "Website",
    description: "Wellness coaching with integrated booking system",
    outcome: "Professional presence converting visitors to bookings",
    tags: ["Multi-Page Site", "Booking System", "Lead Generation"],
  },
  {
    name: "Managing What Matters",
    type: "Website",
    description: "B2B consultancy platform with clear service offerings",
    outcome: "Leadership positioning driving corporate enquiries",
    tags: ["Multi-Page Site", "B2B Focus", "Consultancy"],
  },
]

const websiteProjects: Project[] = [
  {
    name: "K Lewis Joinery",
    type: "Website",
    description: "One-page portfolio built for speed and clarity",
    tags: ["One-Page", "Fast Load", "Local Business"],
  },
  {
    name: "Herb & Soul",
    type: "Website",
    description: "Multi-page wellness site with service breakdown",
    tags: ["Multi-Page", "Wellness", "Service Pages"],
  },
  {
    name: "Free Spirit Coaching",
    type: "Website",
    description: "Lead-driven site with booking functionality",
    tags: ["Booking System", "Lead Generation", "Coaching"],
  },
  {
    name: "Managing What Matters",
    type: "Website",
    description: "B2B consultancy site designed for credibility",
    tags: ["Multi-Page", "B2B", "Professional"],
  },
]

const socialProjects: Project[] = [
  {
    name: "Event Coverage",
    type: "Social Media",
    description: "Corporate events and conferences across Scotland",
    tags: ["Video", "Photo", "Consistent Coverage"],
  },
  {
    name: "Culinary Content",
    type: "Social Media",
    description: "Food and restaurant content for local hospitality",
    tags: ["Video", "Food", "Brand Presence"],
  },
  {
    name: "Property Content",
    type: "Social Media",
    description: "Drone and architectural content for property businesses",
    tags: ["Drone", "Photo", "Trust Building"],
  },
  {
    name: "Business Content",
    type: "Social Media",
    description: "Ongoing content keeping Scottish businesses visible",
    tags: ["Video", "Photo", "Consistency"],
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-background py-16 sm:py-20 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="gradient-text text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Work</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Websites that get you found and content that keeps you visible
          </p>
        </div>

        {/* Featured Work */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">Featured Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} featured />
            ))}
          </div>
        </div>

        {/* Website Projects */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Website Projects</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Custom-built sites designed for clarity, speed, and conversion
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
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Social Media Content</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Consistent content that builds presence and trust — not viral chasing
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
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center">How I Work</h3>
          <div className="glass p-6 sm:p-8 rounded-xl space-y-6">
            <ProcessStep
              number="1"
              title="Understand your business"
              description="What you do, who you serve, what sets you apart"
            />
            <ProcessStep
              number="2"
              title="Build the foundation"
              description="A website that explains your offer and makes contact easy"
            />
            <ProcessStep
              number="3"
              title="Support with content"
              description="Video and photo content that keeps you visible and credible"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass p-8 sm:p-10 md:p-12 rounded-2xl max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Need a website, social media content, or both?
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            Let's talk about what you need and how it fits together
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full font-semibold text-lg text-primary-foreground hover:opacity-90 active:scale-98 transition-all duration-300 min-h-[48px]"
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
      className={`group glass p-5 sm:p-6 rounded-xl hover:border-primary/50 transition-all duration-300 ${featured ? "hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1" : "hover:-translate-y-0.5"}`}
    >
      <div className="mb-4 aspect-video bg-card/50 rounded-lg border border-border flex items-center justify-center">
        <span className="text-xs text-muted-foreground/50">Image slot</span>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
            project.type === "Website" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
          }`}
        >
          {project.type}
        </span>
      </div>

      <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.name}
      </h4>

      <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

      {project.outcome && (
        <div className="flex items-start gap-2 mb-4 p-3 bg-card/50 rounded-lg border border-border">
          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-foreground">{project.outcome}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs text-muted-foreground bg-card px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      {project.cta && (
        <a
          href={project.cta.href}
          className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group/link"
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
      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center font-bold text-primary-foreground">
        {number}
      </div>
      <div>
        <h4 className="text-base sm:text-lg font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
