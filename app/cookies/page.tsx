import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | Bear Media",
  description: "Cookie policy for Bear Media website - how we use cookies and similar technologies.",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>

        <div className="prose prose-invert prose-orange max-w-none space-y-6 text-gray-300">
          <p className="text-lg">Last updated: December 2024</p>

          <h2 className="text-2xl font-semibold text-white mt-8">What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit our website. They help us provide a better
            user experience.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">Cookies We Use</h2>
          <p>
            <strong>Essential Cookies:</strong> Required for the website to function properly.
          </p>
          <p>
            <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">Managing Cookies</h2>
          <p>
            You can control cookies through your browser settings. Disabling cookies may affect website functionality.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">Contact</h2>
          <p>
            For questions about our cookie policy, contact us at{" "}
            <a href="mailto:garry.lynch70@gmail.com" className="text-orange-400 hover:text-orange-300">
              garry.lynch70@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
