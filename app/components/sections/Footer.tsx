import { Mail, Phone, MapPin, Instagram, Youtube, Facebook } from "lucide-react"
import { SITE_CONFIG, FOOTER_SECTIONS } from "../../lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/bearmedia", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@bearmedia", label: "YouTube" },
    { icon: Facebook, href: "https://facebook.com/bearmedia", label: "Facebook" },
  ]

  return (
    <footer className="bg-black text-white" style={{ padding: "3rem 0 2rem" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#f5a623", marginBottom: "1rem" }}>
              Bear Media
            </h3>
            <p style={{ fontSize: "0.9375rem", color: "#9ca3af", lineHeight: "1.6", marginBottom: "1.5rem" }}>
              Edinburgh's premier content creation studio, specialising in video production, photography, and drone
              services.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Contact</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#9ca3af",
                  textDecoration: "none",
                }}
              >
                <Mail size={20} />
                {SITE_CONFIG.email}
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#9ca3af",
                  textDecoration: "none",
                }}
              >
                <Phone size={20} />
                {SITE_CONFIG.phone}
              </a>
              <a
                href={SITE_CONFIG.addressUrl}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#9ca3af",
                  textDecoration: "none",
                }}
              >
                <MapPin size={20} />
                {SITE_CONFIG.address}
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Links</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {FOOTER_SECTIONS.map((section) => (
                <a key={section.href} href={section.href} style={{ color: "#9ca3af", textDecoration: "none" }}>
                  {section.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Social</h3>
            <div style={{ display: "flex", gap: "1rem" }}>
              {socialLinks.map((link) => (
                <a key={link.href} href={link.href} style={{ color: "#9ca3af", textDecoration: "none" }}>
                  {link.icon({ size: 20 })}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", color: "#9ca3af", fontSize: "0.9375rem" }}>
          © {currentYear} Bear Media. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
