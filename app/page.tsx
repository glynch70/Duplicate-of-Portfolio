'use client'

import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-20">
        <section className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">Bear Media Portfolio</h1>
            <p className="text-xl text-gray-400">Video • Photography • Drone Services</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
