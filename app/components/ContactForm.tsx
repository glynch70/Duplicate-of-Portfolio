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

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card flex flex-col gap-5 p-8"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2"
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
          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none transition-all duration-300 focus:border-[#DDA31E] focus:ring-1 focus:ring-[#DDA31E] placeholder:text-white/20"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2"
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
          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none transition-all duration-300 focus:border-[#DDA31E] focus:ring-1 focus:ring-[#DDA31E] placeholder:text-white/20"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2"
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
          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none transition-all duration-300 focus:border-[#DDA31E] focus:ring-1 focus:ring-[#DDA31E] placeholder:text-white/20"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2"
        >
          Service *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none transition-all duration-300 focus:border-[#DDA31E] focus:ring-1 focus:ring-[#DDA31E] cursor-pointer"
        >
          <option value="" className="bg-[#1E1E1E]">Select a service</option>
          <option value="video" className="bg-[#1E1E1E]">Video Production</option>
          <option value="photography" className="bg-[#1E1E1E]">Professional Photography</option>
          <option value="drone" className="bg-[#1E1E1E]">Drone Services</option>
          <option value="social" className="bg-[#1E1E1E]">Social Media Content</option>
          <option value="web" className="bg-[#1E1E1E]">Web Development</option>
          <option value="other" className="bg-[#1E1E1E]">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2"
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
          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none transition-all duration-300 focus:border-[#DDA31E] focus:ring-1 focus:ring-[#DDA31E] placeholder:text-white/20 resize-vertical"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 px-8 bg-[#DDA31E] text-[#121212] rounded-full font-black text-base uppercase italic tracking-widest hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <div className="glass-card p-4 border-green-500/30 text-green-400 text-center text-sm italic">
          Thank you! Your message has been sent successfully. We&apos;ll be in touch soon.
        </div>
      )}

      {status === "error" && (
        <div className="glass-card p-4 border-red-500/30 text-red-400 text-center text-sm italic">
          Something went wrong. Please try again or email info@bear-media.com directly.
        </div>
      )}
    </form>
  )
}
