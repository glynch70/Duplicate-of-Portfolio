"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Award, Users, Target, Zap } from "lucide-react"

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const end = value
          const duration = 2000
          const increment = end / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="gradient-text" style={{ fontSize: "3rem", fontWeight: "bold", lineHeight: 1 }}>
      {count}
      {suffix}
    </div>
  )
}

export function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every project",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your vision and satisfaction are at the heart of everything we do",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Creating content that achieves your business objectives",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Using cutting-edge technology and creative approaches",
    },
  ]

  return (
    <section id="about" style={{ backgroundColor: "#0f0f0f", padding: "var(--space-3xl) 0" }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center"
          style={{ marginBottom: "var(--space-2xl)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gradient-text" style={{ marginBottom: "1rem", fontSize: "3.5rem", fontWeight: 800 }}>
            About Bear Media
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
          <p style={{ fontSize: "1.25rem", color: "#9CA3AF", maxWidth: "48rem", margin: "0 auto" }}>
            Based in Broxburn, West Lothian - serving Edinburgh, West Lothian, Fife and across Scotland
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "center",
            maxWidth: "75rem",
            margin: "0 auto",
            marginBottom: "var(--space-2xl)",
          }}
          className="lg:grid-cols-2"
        >
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            {/* Main Image */}
            <div
              style={{
                position: "relative",
                height: "36rem",
                borderRadius: "1rem",
                overflow: "hidden",
              }}
            >
              <img
                src="/placeholder.svg?height=800&width=600"
                alt="Garry Lynch - Bear Media Founder and Professional Content Creator"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "center 25%" }}
                loading="eager"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "60%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 40%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "2rem",
                  left: "2rem",
                  right: "2rem",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "linear-gradient(135deg, rgba(249,115,22,0.9) 0%, rgba(251,146,60,0.9) 100%)",
                    padding: "0.5rem 1rem",
                    borderRadius: "2rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "white" }}>Founder</span>
                </div>
                <h4
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "0.5rem",
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  Garry Lynch
                </h4>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.9)",
                    lineHeight: "1.5",
                    textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                  }}
                >
                  Professional photographer and content creator based in Broxburn, West Lothian
                </p>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                top: "-1rem",
                right: "-1rem",
                width: "10rem",
                height: "10rem",
                background: "linear-gradient(135deg, rgba(249,115,22,0.2) 0%, rgba(251,146,60,0.1) 100%)",
                borderRadius: "1rem",
                zIndex: -1,
                filter: "blur(20px)",
              }}
              className="hidden lg:block"
            />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3
              style={{
                fontSize: "2.25rem",
                marginBottom: "1.5rem",
                color: "white",
                fontWeight: "bold",
                lineHeight: "1.2",
              }}
            >
              Capturing Scotland's Stories Through Expert Visual Content
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2rem" }}>
              <p style={{ fontSize: "1.0625rem", lineHeight: "1.8", color: "#9CA3AF" }}>
                <strong style={{ color: "white" }}>Bear Media</strong> is a professional content creation studio based
                in Broxburn, West Lothian, specialising in video production, photography, and drone services. We proudly
                serve Edinburgh, West Lothian, Fife, and clients across Scotland.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: "1.8", color: "#9CA3AF" }}>
                From <strong style={{ color: "white" }}>Master Chefs events</strong> to{" "}
                <strong style={{ color: "white" }}>architectural photography</strong>, from{" "}
                <strong style={{ color: "white" }}>corporate conferences</strong> to{" "}
                <strong style={{ color: "white" }}>stunning aerial shots</strong>, we deliver high-quality visual
                content that elevates your brand and tells your unique story.
              </p>
            </div>

            <div
              className="glass"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2rem",
                padding: "2rem",
                borderRadius: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div className="text-center">
                <AnimatedCounter value={3} suffix="+" />
                <div style={{ fontSize: "0.875rem", color: "#9CA3AF", fontWeight: 500, marginTop: "0.5rem" }}>
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="gradient-text" style={{ fontSize: "3rem", fontWeight: "bold", lineHeight: 1 }}>
                  5★
                </div>
                <div style={{ fontSize: "0.875rem", color: "#9CA3AF", fontWeight: 500, marginTop: "0.5rem" }}>
                  Star Reviews
                </div>
              </div>
              <div className="text-center">
                <AnimatedCounter value={100} suffix="%" />
                <div style={{ fontSize: "0.875rem", color: "#9CA3AF", fontWeight: 500, marginTop: "0.5rem" }}>
                  Client Satisfaction
                </div>
              </div>
            </div>

            {/* CTA Buttons - Updated to warm orange */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="#contact"
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
                style={{
                  background: "linear-gradient(135deg, #f97316 0%, #fb923c 100%)",
                  color: "white",
                  padding: "1rem 2rem",
                  borderRadius: "0.5rem",
                  fontSize: "1rem",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Start Your Project
              </a>
              <a
                href="#portfolio"
                className="glass transition-all duration-300 hover:scale-105"
                style={{
                  color: "white",
                  padding: "1rem 2rem",
                  borderRadius: "0.5rem",
                  fontSize: "1rem",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "white" }}>Our Values</h3>
            <p style={{ fontSize: "1.125rem", color: "#9CA3AF" }}>
              The principles that guide our work and client relationships
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
              maxWidth: "75rem",
              margin: "0 auto",
            }}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass group transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    padding: "2rem",
                    borderRadius: "1rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    className="transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, #f97316 0%, #fb923c 100%)",
                      width: "4rem",
                      height: "4rem",
                      borderRadius: "1rem",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <IconComponent style={{ width: "2rem", height: "2rem", color: "white" }} />
                  </div>
                  <h4 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.75rem", color: "white" }}>
                    {value.title}
                  </h4>
                  <p style={{ fontSize: "0.9375rem", color: "#9CA3AF", lineHeight: "1.6" }}>{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
