"use client"
import { motion } from "framer-motion"

const websites = [
  {
    title: "K Lewis Joinery",
    image: "/placeholder.svg?height=400&width=600",
    description: "Professional equestrian and joinery specialists portfolio",
    url: "https://www.klewisjoineryltd.co.uk/",
    features: ["Lightning Fast", "Mobile First", "Custom Design"],
  },
  {
    title: "Herb & Soul",
    image: "/placeholder.svg?height=400&width=600",
    description: "Healing through herbalism and nature immersion",
    url: "https://www.herbandsoul.uk/",
    features: ["SEO Optimised", "Nature Theme", "Interactive"],
  },
  {
    title: "Managing What Matters",
    image: "/placeholder.svg?height=400&width=600",
    description: "People-powered performance and leadership training",
    url: "https://www.managingwhatmatters.co.uk/",
    features: ["Next.js", "TypeScript", "Tailwind"],
  },
]

const additionalProjects = [
  { name: "The Free Spirit Coach", url: "https://www.thefreespirit.uk/" },
  { name: "Voice2Lead", url: "https://www.voice2lead.com/" },
  { name: "Cairngrey", url: "https://www.cairngrey.com/" },
  { name: "J. Clenaghan", url: "https://www.joanneclenaghan.com/" },
  { name: "S. Corry", url: "https://seamuscorry.co.uk/" },
  { name: "Bear Media", url: "https://bear-media.com/" },
]

export function WebDevelopment() {
  return (
    <section id="websites" style={{ backgroundColor: "#0f0f0f", padding: "var(--space-3xl) 0" }}>
      <div className="container">
        <motion.div
          className="text-center"
          style={{ marginBottom: "var(--space-xl)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gradient-text" style={{ marginBottom: "1rem", fontSize: "3.5rem", fontWeight: 800 }}>
            Web Development
          </h2>
          <div
            style={{
              height: "4px",
              width: "5rem",
              background: "linear-gradient(135deg, #f97316 0%, #fb923c 100%)",
              margin: "0 auto 1.5rem",
              borderRadius: "2px",
            }}
          />
          <p style={{ fontSize: "1.125rem", color: "#9CA3AF", maxWidth: "48rem", margin: "0 auto" }}>
            Modern, AI-powered websites with complete setup and deployment. Built for performance and results.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
            maxWidth: "75rem",
            margin: "0 auto 3rem",
          }}
        >
          {websites.map((site, index) => (
            <motion.a
              key={site.title}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass group overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              style={{
                borderRadius: "1rem",
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div style={{ position: "relative", height: "14rem", overflow: "hidden" }}>
                <img
                  src={site.image || "/placeholder.svg"}
                  alt={site.title}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(to top, rgba(249,115,22,0.2) 0%, transparent 100%)",
                  }}
                />
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h3
                  className="group-hover:text-orange-300 transition-colors duration-300"
                  style={{ fontSize: "1.25rem", marginBottom: "0.5rem", color: "white" }}
                >
                  {site.title}
                </h3>
                <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", marginBottom: "1rem" }}>{site.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                  {site.features.map((feature) => (
                    <span
                      key={feature}
                      style={{
                        fontSize: "0.75rem",
                        backgroundColor: "rgba(249,115,22,0.1)",
                        color: "#fb923c",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        border: "1px solid rgba(249,115,22,0.2)",
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div
                  className="group-hover:translate-x-2 transition-transform duration-300"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                  }}
                >
                  <span className="gradient-text">Visit Website</span>
                  <svg
                    style={{ width: "1rem", height: "1rem", color: "#fb923c" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass"
          style={{
            borderRadius: "1rem",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "white" }}>Additional Projects</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            {additionalProjects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group transition-all duration-300 hover:scale-105"
                style={{
                  padding: "1.25rem",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderRadius: "0.75rem",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <h4
                  className="group-hover:text-orange-400 transition-colors duration-300"
                  style={{ fontSize: "1rem", marginBottom: "0.25rem", color: "white", fontWeight: 600 }}
                >
                  {project.name}
                </h4>
                <p style={{ fontSize: "0.8125rem", color: "#6b7280", marginBottom: "0.5rem" }}>Custom Web Solution</p>
                <div
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                  }}
                >
                  <span className="gradient-text">Visit</span>
                  <svg
                    style={{ width: "0.875rem", height: "0.875rem", color: "#f97316" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
