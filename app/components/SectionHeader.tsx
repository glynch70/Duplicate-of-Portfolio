"use client"

import { useInView } from "../hooks/useInView"

interface SectionHeaderProps {
  title: string
  subtitle: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        {title.split(" ").map((word, i) => (
          <span key={i}>
            {i === title.split(" ").length - 1 ? (
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                {word}
              </span>
            ) : (
              word + " "
            )}
          </span>
        ))}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mb-6" />
      <p className="text-lg text-gray-400">{subtitle}</p>
    </div>
  )
}
