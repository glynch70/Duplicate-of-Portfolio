import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Bear Media",
  description: "Privacy policy for Bear Media - how we collect, use and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="prose prose-invert prose-orange max-w-none space-y-6 text-gray-300">
          <p className="text-lg">Last updated: December 2024</p>

          <h2 className="text-2xl font-semibold text-white mt-8">Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as your name, email address, phone number and
            project details when you contact us or book our services.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain and improve our services, communicate with you about
            bookings and projects, and send you promotional materials (with your consent).
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">Data Protection</h2>
          <p>
            We implement appropriate security measures to protect your personal information. Your data is stored
            securely and is not shared with third parties without your consent.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">Your Rights</h2>
          <p>
            Under GDPR, you have the right to access, correct or delete your personal data. Contact us to exercise these
            rights.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">Contact</h2>
          <p>
            For privacy-related enquiries, contact us at{" "}
            <a href="mailto:garry.lynch70@gmail.com" className="text-orange-400 hover:text-orange-300">
              garry.lynch70@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
