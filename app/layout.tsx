import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.bear-media.com"),
  title: {
    default: "Bear Media | Professional Video Production & Photography in Edinburgh, Scotland",
    template: "%s | Bear Media",
  },
  description:
    "Expert video production, photography, and CAA-certified drone services covering Edinburgh, West Lothian, and Fife. Specialising in events, corporate content, and property photography across Scotland.",
  keywords: [
    "video production Edinburgh",
    "photographer Edinburgh",
    "drone photography Scotland",
    "CAA certified drone pilot",
    "event photography Edinburgh",
    "corporate video Scotland",
    "wedding videographer Edinburgh",
    "property photography West Lothian",
    "aerial photography Fife",
    "content creator Edinburgh",
    "commercial photography Scotland",
  ],
  authors: [{ name: "Garry Lynch" }],
  creator: "Garry Lynch",
  publisher: "Bear Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://portfolio.bear-media.com",
    siteName: "Bear Media",
    title: "Bear Media | Professional Video Production & Photography in Edinburgh",
    description: "Expert video production, photography, and CAA-certified drone services across Scotland",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bear Media - Professional Content Creation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bear Media | Video Production & Photography Edinburgh",
    description: "Expert video, photography & drone services across Scotland",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#09090b",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="canonical" href="https://portfolio.bear-media.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://portfolio.bear-media.com",
              name: "Bear Media",
              image: "https://portfolio.bear-media.com/images/og-image.jpg",
              description:
                "Professional video production, photography, and CAA-certified drone services in Edinburgh, Scotland",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Broxburn",
                addressLocality: "West Lothian",
                addressRegion: "Scotland",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "55.9533",
                longitude: "-3.1883",
              },
              url: "https://www.bear-media.com",
              telephone: "+44",
              email: "info@bear-media.com",
              priceRange: "££",
              areaServed: ["Edinburgh", "West Lothian", "Fife", "Glasgow", "Scotland"],
              serviceType: [
                "Video Production",
                "Photography",
                "Drone Photography",
                "Event Photography",
                "Corporate Video",
                "Wedding Videography",
              ],
              sameAs: ["https://www.instagram.com/bearmedia", "https://www.facebook.com/bearmedia"],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
