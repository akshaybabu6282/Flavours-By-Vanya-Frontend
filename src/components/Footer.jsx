import React from 'react'
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'

const productLinks = [
  { label: 'Masalas', href: '/#masalas' },
  { label: 'Spices', href: '/#raw-spices' },
  { label: 'Tea & Coffee', href: '/#beverages' },
  { label: 'Nuts & Honey', href: '/#nutsHoney' },
  { label: 'Coconut Oil', href: '/#coconut-oil' },
]

const companyLinks = [
  { label: 'About Us', href: '/#about' },
  { label: 'Book a Community Stall', href: '/#community-stall' },
  { label: 'Bulk & Export Enquiries', href: '/#bulk' },
  { label: 'Our Certifications', href: '/#licenses' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact Us', href: '/#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030504] text-gray-300">
      {/* Background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-700/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-green-700/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-12 lg:px-8 lg:pt-16">
        {/* WhatsApp CTA */}
        <div className="mb-12 flex flex-col gap-6 rounded-2xl border border-green-500/20 bg-gradient-to-r from-green-950/50 to-white/[0.03] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-green-400">
              From Wayanad to your kitchen
            </p>

            <h2
              className="mt-2 text-2xl font-bold text-white sm:text-3xl"
              style={{ fontFamily: '"Raleway", sans-serif' }}
            >
              Looking for authentic Vanya products?
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              Speak with our team for product orders, community stalls, bulk
              requirements and export enquiries.
            </p>
          </div>

          <a
            href="https://wa.me/917907662508?text=Hi%20Vanya%20Eco%20Products%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-lg hover:shadow-green-950/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />

            Chat on WhatsApp

            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Main footer columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1.15fr] lg:gap-8">
          {/* Brand */}
          <div>
            <a
              href="/"
              aria-label="Vanya Eco Products home"
              className="inline-block"
            >
              <img
                src="/assets/logo.png"
                alt="Vanya Eco Products"
                className="h-20 w-auto rounded-xl object-contain"
                width="180"
                height="80"
              />
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Authentic spices, masalas, tea, coffee, coconut oils, nuts and
              forest honey, carefully sourced and prepared with a commitment to
              purity, freshness and trust.
            </p>

            {/* Social media */}
            <div className="mt-6 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/vanya_eco_products"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Vanya Eco Products on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-500/10 hover:text-pink-400"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1Pr3FscVfL/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Vanya Eco Products on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/131854090/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Vanya Eco Products on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-400/10 hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@VanyaEcoProducts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vanya Eco Products on YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:-translate-y-1 hover:border-red-500 hover:bg-red-500/10 hover:text-red-400"
              >
                <Youtube className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-base font-bold text-white">
              Our Products
            </h3>

            <div className="mt-3 h-0.5 w-10 bg-green-500" />

            <ul className="mt-5 space-y-3 text-sm">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex transition hover:translate-x-1 hover:text-green-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-base font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-3 h-0.5 w-10 bg-green-500" />

            <ul className="mt-5 space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex transition hover:translate-x-1 hover:text-green-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold text-white">
              Contact Us
            </h3>

            <div className="mt-3 h-0.5 w-10 bg-green-500" />

            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href="tel:+917907662508"
                  className="group flex items-start gap-3 transition hover:text-white"
                >
                  <Phone
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                    aria-hidden="true"
                  />

                  <span>+91 79076 62508</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:business@vanyaecoproducts.in"
                  className="group flex items-start gap-3 break-all transition hover:text-white"
                >
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                    aria-hidden="true"
                  />

                  <span>business@vanyaecoproducts.in</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Mananthavady%2C%20Wayanad%2C%20Kerala%20670645"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 transition hover:text-white"
                >
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                    aria-hidden="true"
                  />

                  <span>
                    Mananthavady, Wayanad,
                    <br />
                    Kerala 670645, India
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Vanya Eco Products. All rights reserved.
          </p>

          <p>Pure Spices, True Flavours</p>
        </div>
      </div>
    </footer>
  )
}