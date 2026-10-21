import React from 'react'
import {
  ArrowUpRight,
  Award,
  Facebook,
  Globe2,
  Headphones,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from 'lucide-react'

const productLinks = [
  { label: 'Masalas', href: '/#masalas' },
  { label: 'Spices', href: '/#raw-spices' },
  { label: 'Tea & Coffee', href: '/#beverages' },
  { label: 'Nuts & Honey', href: '/#nutsHoney' },
  { label: 'Coconut Oil', href: '/#coconut-oil' },
]

const companyLinks = [
  { label: 'Our Story', href: '/#about' },
  {
    label: 'Book a Community Stall',
    href: '/#community-stall',
  },
  { label: 'Bulk & Export', href: '/#bulk' },
  { label: 'Certifications', href: '/#licenses' },
  { label: 'Knowledge Stories', href: '/blogs' },
  { label: 'Contact Us', href: '/#contact' },
]

const policyLinks = [
  {
    label: 'Privacy & Data Protection',
    href: '/data-protection',
  },
  {
    label: 'Terms & Conditions',
    href: '/terms',
  },
  {
    label: 'Shipping & Refunds',
    href: '/shipping-and-refunds',
  },
  {
    label: 'Product Disclaimer',
    href: '/product-disclaimer',
  },
]

const trustItems = [
  {
    icon: Award,
    title: 'Certified Systems',
    text: 'Quality and food-safety focused',
  },
  {
    icon: Globe2,
    title: 'Worldwide Delivery',
    text: 'India and international orders',
  },
  {
    icon: Headphones,
    title: 'Direct Assistance',
    text: 'Personal support through WhatsApp',
  },
]

const footerLinkClass =
  'inline-flex text-sm text-gray-400 transition duration-200 hover:translate-x-1 hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030504] text-gray-300">
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-green-700/[0.08] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-green-700/[0.08] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-7 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        {/* Enquiry panel */}
        <div className="flex flex-col gap-5 rounded-2xl border border-green-500/20 bg-gradient-to-r from-green-950/55 via-green-950/25 to-white/[0.03] p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-green-400">
              Order directly from Vanya
            </p>

            <h2
              className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl"
              style={{
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              Products, community stalls, bulk supply and exports
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400 sm:text-base">
              Tell us what you need. Our team will confirm availability,
              current order details and applicable delivery charges.
            </p>
          </div>

          <a
            href="https://wa.me/917907662508?text=Hi%20Vanya%20Eco%20Products%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-lg hover:shadow-green-950/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500"
          >
            <MessageCircle
              className="h-5 w-5"
              aria-hidden="true"
            />

            Chat on WhatsApp

            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Trust information */}
        <div className="grid border-b border-white/10 py-8 sm:grid-cols-3">
          {trustItems.map(
            (
              {
                icon: Icon,
                title,
                text,
              },
              index
            ) => (
              <div
                key={title}
                className={`flex items-center gap-3 py-4 sm:px-5 sm:py-1 ${index > 0
                    ? 'border-t border-white/10 sm:border-l sm:border-t-0'
                    : ''
                  }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green-500/25 bg-green-500/10">
                  <Icon
                    className="h-5 w-5 text-green-400"
                    aria-hidden="true"
                  />
                </span>

                <span>
                  <strong className="block text-sm font-semibold text-white">
                    {title}
                  </strong>

                  <span className="mt-0.5 block text-xs text-gray-500">
                    {text}
                  </span>
                </span>
              </div>
            )
          )}
        </div>

        {/* Main footer content */}
        <div className="grid gap-10 py-11 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.9fr_1.2fr] lg:gap-8">
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
              forest honey, sourced and prepared with a commitment to
              freshness, quality and trust.
            </p>

            <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-green-500">
              Pure Spices, True Flavours
            </p>

            {/* Social media */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://www.instagram.com/vanya_eco_products"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Vanya Eco Products on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-500/10 hover:text-pink-400"
              >
                <Instagram
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </a>

              <a
                href="https://www.facebook.com/share/1Pr3FscVfL/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Vanya Eco Products on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <Facebook
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/131854090/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Vanya Eco Products on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-500/10 hover:text-sky-400"
              >
                <Linkedin
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </a>

              <a
                href="https://www.youtube.com/@VanyaEcoProducts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vanya Eco Products on YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:-translate-y-1 hover:border-red-500 hover:bg-red-500/10 hover:text-red-400"
              >
                <Youtube
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-base font-bold text-white">
              Our Products
            </h3>

            <div className="mt-3 h-0.5 w-10 bg-green-500" />

            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={footerLinkClass}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-base font-bold text-white">
              Explore Vanya
            </h3>

            <div className="mt-3 h-0.5 w-10 bg-green-500" />

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={footerLinkClass}
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
              Contact Vanya
            </h3>

            <div className="mt-3 h-0.5 w-10 bg-green-500" />

            <ul className="mt-5 space-y-5 text-sm">
              <li>
                <a
                  href="tel:+917907662508"
                  className="flex items-start gap-3 text-gray-400 transition hover:text-white"
                >
                  <Phone
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                    aria-hidden="true"
                  />

                  <span>
                    <span className="block text-xs text-gray-500">
                      Phone & WhatsApp
                    </span>

                    <span className="mt-0.5 block">
                      +91 79076 62508
                    </span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:support@vanyaecoproducts.in"
                  className="flex items-start gap-3 break-all text-gray-400 transition hover:text-white"
                >
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                    aria-hidden="true"
                  />

                  <span>
                    <span className="block text-xs text-gray-500">
                      Customer Support
                    </span>

                    <span className="mt-0.5 block">
                      support@vanyaecoproducts.in
                    </span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:business@vanyaecoproducts.in"
                  className="flex items-start gap-3 break-all text-gray-400 transition hover:text-white"
                >
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                    aria-hidden="true"
                  />

                  <span>
                    <span className="block text-xs text-gray-500">
                      Bulk & Export
                    </span>

                    <span className="mt-0.5 block">
                      business@vanyaecoproducts.in
                    </span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Mananthavady%2C%20Wayanad%2C%20Kerala%20670645"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 transition hover:text-white"
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

        {/* Customer policy links */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              Customer Information
            </p>

            <nav
              aria-label="Customer policies"
              className="flex flex-wrap gap-x-5 gap-y-3"
            >
              {policyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-gray-400 transition hover:text-green-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Vanya Eco Products. All rights reserved.
          </p>

          <p>From Wayanad, Kerala, India</p>
        </div>
      </div>
    </footer>
  )
}