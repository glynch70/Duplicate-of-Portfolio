import { Hero } from "./components/sections/Hero"
import { Portfolio } from "./components/sections/Portfolio"
import { WebDevelopment } from "./components/sections/WebDevelopment"
import { Services } from "./components/sections/Services"
import { About } from "./components/sections/About"
import { Testimonials } from "./components/sections/Testimonials"
import { Contact } from "./components/sections/Contact"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="flex flex-col gap-20 md:gap-32">
        <Hero />
        <Portfolio />
        <WebDevelopment />
        <Services />
        <Testimonials />
        <About />
        <Contact />
      </div>
    </div>
  )
}
