import type React from "react"
import type { Metadata, Viewport } from "next"
import { Figtree } from "next/font/google"
import "./globals.css"
import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { SchemaOrg } from "./components/seo/SchemaOrg"

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.bear-media.com"),
  title: "Bear Media | Video, Photography & Drone Services Edinburgh",
  description:
    "Professional bespoke video production, photography and drone services based in West Lothian. Serving Edinburgh, Fife and across Scotland. CAA-certified drone pilot.",
  keywords: "videographer Edinburgh, photographer Edinburgh, drone photography Scotland, corporate video West Lothian, event photography Edinburgh, Bear Media",
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
    title: "Bear Media | Video, Photography & Drone Services Edinburgh",
    description: "Professional bespoke video production, photography and drone services based in West Lothian. Serving Edinburgh, Fife and across Scotland.",
    images: [
      {
        url: "/images/Garry Lynch professional headshot Bear Media Scotland.jpeg",
        width: 1200,
        height: 630,
        alt: "Bear Media - Professional Content Creation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bear Media | Video, Photography & Drone Services Edinburgh",
    description: "Professional bespoke video production, photography & drone services across Scotland",
    images: ["/images/Garry Lynch professional headshot Bear Media Scotland.jpeg"],
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
  alternates: {
    canonical: "https://portfolio.bear-media.com",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#121212",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={figtree.variable}>
      <head>
        <SchemaOrg />
      </head>
      <body className="font-figtree antialiased selection:bg-[#DDA31E] selection:text-black" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
