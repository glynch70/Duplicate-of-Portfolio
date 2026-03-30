import { Hero } from "./components/sections/Hero"
import { Portfolio } from "./components/sections/Portfolio"
import { WebDevelopment } from "./components/sections/WebDevelopment"
import { ScotPopPrints } from "./components/sections/ScotPopPrints"
import { Services } from "./components/sections/Services"
import { SocialMedia } from "./components/sections/SocialMedia"
import { Contact } from "./components/sections/Contact"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      <Hero />
      <Portfolio />
      <Services />
      <SocialMedia />
      <WebDevelopment />
      <ScotPopPrints />
      <Contact />
    </div>
  )
}

