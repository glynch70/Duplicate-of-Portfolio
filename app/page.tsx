'use client'

import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Portfolio } from './components/sections/Portfolio'
import { About } from './components/sections/About'
import { Testimonials } from './components/sections/Testimonials'
import { Contact } from './components/sections/Contact'

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
    </main>
  )
}
