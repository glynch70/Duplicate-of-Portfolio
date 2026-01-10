"use client"

import type React from "react"
import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [status, setStatus] = useState("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const inputStyles = {
    width: "100%",
    padding: "1rem 1.25rem",
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "0.75rem",
    fontSize: "1rem",
    color: "white",
    outline: "none",
    transition: "all 0.3s ease",
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        padding: "2rem",
        borderRadius: "1rem",
      }}
    >
      <div>
        <label
          htmlFor="name"
          style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#e5e7eb" }}
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          style={inputStyles}
          className="focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#e5e7eb" }}
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          style={inputStyles}
          className="focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#e5e7eb" }}
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="07XXX XXXXXX"
          style={inputStyles}
          className="focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#e5e7eb" }}
        >
          Service Interested In *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          style={{
            ...inputStyles,
            cursor: "pointer",
          }}
          className="focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
        >
          <option value="" style={{ backgroundColor: "#1a1a1a" }}>
            Select a service
          </option>
          <option value="video" style={{ backgroundColor: "#1a1a1a" }}>
            Video Production
          </option>
          <option value="photography" style={{ backgroundColor: "#1a1a1a" }}>
            Professional Photography
          </option>
          <option value="drone" style={{ backgroundColor: "#1a1a1a" }}>
            Drone Services
          </option>
          <option value="social" style={{ backgroundColor: "#1a1a1a" }}>
            Social Media Content
          </option>
          <option value="web" style={{ backgroundColor: "#1a1a1a" }}>
            Web Development
          </option>
          <option value="other" style={{ backgroundColor: "#1a1a1a" }}>
            Other / Not Sure
          </option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "#e5e7eb" }}
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your project..."
          style={{
            ...inputStyles,
            resize: "vertical",
          }}
          className="focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          width: "100%",
          padding: "1rem 2rem",
          borderRadius: "0.75rem",
          fontSize: "1rem",
          border: "none",
          cursor: "pointer",
          background: "linear-gradient(135deg, #f97316 0%, #fb923c 100%)",
          color: "white",
          fontWeight: 600,
        }}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <div
          className="glass"
          style={{
            padding: "1rem",
            borderRadius: "0.75rem",
            border: "1px solid rgba(34, 197, 94, 0.3)",
            color: "#22c55e",
            textAlign: "center",
          }}
        >
          Thank you! Your message has been sent successfully. We'll be in touch soon.
        </div>
      )}

      {status === "error" && (
        <div
          className="glass"
          style={{
            padding: "1rem",
            borderRadius: "0.75rem",
            border: "1px solid rgba(239, 68, 68, 0.3)",
            color: "#ef4444",
            textAlign: "center",
          }}
        >
          Something went wrong. Please try again or email info@bear-media.com directly.
        </div>
      )}
    </form>
  )
}
