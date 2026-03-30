import type { Metadata } from "next"
import { ContactForm } from "../components/ContactForm"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Bear Media | Edinburgh & West Lothian",
  description:
    "Get in touch with Bear Media for photography, videography, drone and web services in Edinburgh, West Lothian and Fife.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">Get in Touch</h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Ready to discuss your project? Contact Bear Media for professional photography, videography, drone and web
          services across Edinburgh, West Lothian and Fife.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-white">Contact Details</h2>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Location</h3>
                  <p className="text-gray-400">Broxburn, West Lothian</p>
                  <p className="text-gray-500 text-sm">Serving Edinburgh, West Lothian, Fife and surrounding areas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <a href="mailto:garry.lynch70@gmail.com" className="text-orange-400 hover:text-orange-300">
                    garry.lynch70@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Phone</h3>
                  <a href="tel:+447XXX" className="text-orange-400 hover:text-orange-300">
                    Contact for number
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
