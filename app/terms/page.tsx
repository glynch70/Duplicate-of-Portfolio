import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | Bear Media",
  description: "Terms and conditions for Bear Media services including photography, videography and drone services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions</h1>

        <div className="prose prose-invert prose-orange max-w-none space-y-6 text-gray-300">
          <p className="text-lg">Last updated: December 2024</p>

          <h2 className="text-2xl font-semibold text-white mt-8">1. Services</h2>
          <p>
            Bear Media provides professional photography, videography, drone services and web development across
            Edinburgh, West Lothian, Fife and surrounding areas in Scotland.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Bookings & Payment</h2>
          <p>
            A 50% deposit is required to secure your booking. The remaining balance is due upon completion of the
            project. Payment can be made via bank transfer or PayPal.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Cancellation Policy</h2>
          <p>
            Cancellations made more than 7 days before the scheduled date will receive a full refund of the deposit.
            Cancellations within 7 days are non-refundable.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">4. Copyright & Usage</h2>
          <p>
            All images and videos remain the copyright of Bear Media until full payment is received. Upon payment,
            clients receive full usage rights for personal or commercial use as agreed.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">5. Liability</h2>
          <p>
            Bear Media is fully insured for public liability. We take every precaution to ensure the safety of all
            participants and property during shoots.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">6. Contact</h2>
          <p>
            For any questions regarding these terms, please contact us at{" "}
            <a href="mailto:garry.lynch70@gmail.com" className="text-orange-400 hover:text-orange-300">
              garry.lynch70@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
