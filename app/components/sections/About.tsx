'use client'

import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <Image
                src="/about-garry.png"
                alt="Garry Lynch - Bear Media"
                width={400}
                height={500}
                className="rounded-lg w-full"
                quality={85}
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Hi, I&apos;m</span>{' '}
              <span className="text-gradient">Garry Lynch</span>
            </h2>

            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Founder of Bear Media. I help businesses create content that attracts attention, builds trust and generates enquiries.
            </p>

            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              With 20+ years of experience creating visual content across photography, videography, and drone work, I&apos;ve developed a deep understanding of what works for Scottish businesses. I work directly with each client to deliver consistent, high-quality content that truly represents their brand.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 md:mb-10">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20+</div>
                <p className="text-foreground/60 text-sm">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-foreground/60 text-sm">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">CAA</div>
                <p className="text-foreground/60 text-sm">Drone Certified</p>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 bg-primary text-primary-foreground rounded font-semibold hover:opacity-90 transition-all duration-200 hover:shadow-lg"
            >
              Let&apos;s Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
