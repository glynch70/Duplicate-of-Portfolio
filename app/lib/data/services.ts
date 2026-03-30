import type { Service } from "@/types"

export const services: Service[] = [
  {
    id: "video-production",
    title: "Video Production",
    description:
      "Professional video production for businesses, events, and brands. From corporate videos to promotional content.",
    icon: "Video",
    features: ["Corporate Videos", "Event Coverage", "Promotional Content", "Brand Stories", "Product Showcases"],
    pricing: "From £500",
    cta: "View Portfolio",
  },
  {
    id: "photography",
    title: "Photography",
    description:
      "High-quality photography services for events, portraits, commercial work, and landscapes across Scotland.",
    icon: "Camera",
    features: [
      "Event Photography",
      "Business Portraits",
      "Commercial Photography",
      "Landscape Photography",
      "Product Photography",
    ],
    pricing: "From £250",
    cta: "See Gallery",
  },
  {
    id: "drone-services",
    title: "Drone Services",
    description:
      "Stunning aerial photography and videography using professional drone equipment for unique perspectives.",
    icon: "Plane",
    features: [
      "Aerial Photography",
      "Aerial Videography",
      "Property Surveys",
      "Construction Progress",
      "Event Coverage",
    ],
    pricing: "From £350",
    cta: "View Work",
  },
]
