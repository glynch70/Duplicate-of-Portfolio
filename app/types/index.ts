export interface PortfolioImage {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
  location?: string
  date?: string
}

export interface PortfolioCollection {
  id: string
  title: string
  description: string
  coverImage: string
  images: PortfolioImage[]
  category: string
  featured?: boolean
  seoKeywords?: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  pricing?: string
  cta: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
  label: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  service: string
  message: string
  budget?: string
}
