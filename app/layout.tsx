import type React from "react"
import type { Metadata, Viewport } from "next"
import { Figtree } from "next/font/google"
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
  themeColor: "#0a0a0a",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${figtree.variable}`} style={{
      '--background': '#0a0a0a',
      '--foreground': '#fafafa',
      '--card': '#141414',
      '--card-foreground': '#fafafa',
      '--primary': '#d4a574',
      '--primary-foreground': '#0a0a0a',
      '--secondary': '#1a1a1a',
      '--secondary-foreground': '#fafafa',
      '--muted': '#2a2a2a',
      '--muted-foreground': 'rgba(255, 255, 255, 0.5)',
      '--accent': '#d4a574',
      '--accent-foreground': '#0a0a0a',
      '--destructive': '#ef4444',
      '--destructive-foreground': '#fafafa',
      '--border': 'rgba(255, 255, 255, 0.08)',
      '--input': '#1a1a1a',
      '--ring': '#d4a574',
      '--radius': '0.375rem',
    } as React.CSSProperties}>
      <head>
        <SchemaOrg />
        <style>{`
          * { margin: 0; padding: 0; border-color: var(--border); outline-color: var(--ring); }
          html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
          body { background: var(--background); color: var(--foreground); font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; overflow-x: hidden; -webkit-overflow-scrolling: touch; }
          h1, h2, h3, h4, h5, h6 { font-weight: 600; }
          ::selection { background: var(--primary); color: var(--primary-foreground); }
          .bg-background { background-color: var(--background); }
          .text-foreground { color: var(--foreground); }
          .bg-primary { background-color: var(--primary); }
          .text-primary { color: var(--primary); }
          .text-primary-foreground { color: var(--primary-foreground); }
          .border-border { border-color: var(--border); }
        `}</style>
      </head>
      <body className="font-figtree antialiased" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
