import type React from "react"

export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bear Media",
    "description": "Professional video production, photography and drone services",
    "url": "https://portfolio.bear-media.com",
    "telephone": "+447879011860",
    "email": "info@bear-media.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Broxburn",
      "addressRegion": "West Lothian",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 55.9340,
      "longitude": -3.4716
    },
    "areaServed": ["Edinburgh", "West Lothian", "Fife", "Scotland"],
    "priceRange": "££"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
