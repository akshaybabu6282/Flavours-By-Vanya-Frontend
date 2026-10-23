import React from 'react'
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import useInView from '../hooks/useInView'

const whatsappMessage = `Hi Vanya Eco Products,

I would like to know more about your products.

Product / Requirement:
Location:
Additional Information:`

const whatsappUrl = `https://wa.me/917907662508?text=${encodeURIComponent(
  whatsappMessage
)}`

export default function Contact() {
  const [sectionRef, inView] = useInView()

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-gray-200 bg-[#f5f4ef] py-16 text-gray-900 sm:py-20"
    >
      <div
        ref={sectionRef}
        className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16 lg:px-8"
      >
        {/* Contact introduction */}
        <div
          className={`transition-all duration-700 motion-reduce:transition-none ${
            inView
              ? 'translate-x-0 opacity-100'
              : '-translate-x-8 opacity-0'
          }`}
        >
          <p
            className="text-xs font-bold uppercase tracking-[0.26em] text-green-700 sm:text-sm"
            style={{
              fontFamily: '"Montserrat", sans-serif',
            }}
          >
            Contact Vanya
          </p>

          <h2
            className="mt-4 text-3xl font-extrabold leading-tight text-gray-950 sm:text-4xl lg:text-[2.75rem]"
            style={{
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            Get in Touch
          </h2>

          <div className="mt-6 h-0.5 w-16 bg-green-700" />

          <p
            className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg sm:leading-8"
            style={{
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            Have a product question, need assistance with an order or want to
            discuss a business requirement? Our team is ready to help.
          </p>

          {/* Primary WhatsApp action */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 block max-w-lg overflow-hidden rounded-2xl bg-[#123524] p-5 text-white shadow-[0_16px_45px_rgba(18,53,36,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(18,53,36,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700 sm:p-6"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-300 text-[#123524]">
                <MessageCircle
                  aria-hidden="true"
                  className="h-6 w-6"
                  strokeWidth={2}
                />
              </span>

              <div className="min-w-0 flex-1">
                <p
                  className="text-xs font-bold uppercase tracking-[0.18em] text-green-200"
                  style={{
                    fontFamily: '"Montserrat", sans-serif',
                  }}
                >
                  Quick Assistance
                </p>

                <h3
                  className="mt-1 text-lg font-bold text-white sm:text-xl"
                  style={{
                    fontFamily: '"Raleway", sans-serif',
                  }}
                >
                  Chat with us on WhatsApp
                </h3>

                <p
                  className="mt-1 text-sm leading-5 text-green-50/65"
                  style={{
                    fontFamily: '"Roboto", sans-serif',
                  }}
                >
                  Product enquiries, orders and customer support
                </p>
              </div>

              <ArrowUpRight
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-green-200 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </a>

          <p
            className="mt-4 max-w-lg text-xs leading-5 text-gray-500 sm:text-sm"
            style={{
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            WhatsApp is the quickest way to contact our team. You can review
            your message before sending it.
          </p>
        </div>

        {/* Contact methods */}
        <div
          className={`grid gap-4 transition-all delay-100 duration-700 motion-reduce:transition-none ${
            inView
              ? 'translate-x-0 opacity-100'
              : 'translate-x-8 opacity-0'
          }`}
        >
          {/* Call */}
          <a
            href="tel:+917907662508"
            className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-green-700/30 hover:shadow-[0_14px_35px_rgba(22,101,52,0.09)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700 sm:p-6"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-700/[0.08] text-green-800 transition-colors duration-300 group-hover:bg-green-700 group-hover:text-white">
              <Phone
                aria-hidden="true"
                className="h-6 w-6"
                strokeWidth={1.8}
              />
            </span>

            <div className="min-w-0 flex-1">
              <p
                className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                Phone
              </p>

              <h3
                className="mt-1 text-lg font-bold text-gray-900"
                style={{
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                Call Us
              </h3>

              <p
                className="mt-1 text-sm text-gray-600 sm:text-base"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                +91 79076 62508
              </p>
            </div>

            <ArrowUpRight
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-gray-400 transition group-hover:text-green-700"
            />
          </a>

          {/* Email */}
          <a
            href="mailto:support@vanyaecoproducts.in"
            className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-green-700/30 hover:shadow-[0_14px_35px_rgba(22,101,52,0.09)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700 sm:p-6"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-700/[0.08] text-green-800 transition-colors duration-300 group-hover:bg-green-700 group-hover:text-white">
              <Mail
                aria-hidden="true"
                className="h-6 w-6"
                strokeWidth={1.8}
              />
            </span>

            <div className="min-w-0 flex-1">
              <p
                className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                Customer Support
              </p>

              <h3
                className="mt-1 text-lg font-bold text-gray-900"
                style={{
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                Email Us
              </h3>

              <p
                className="mt-1 break-all text-sm text-gray-600 sm:text-base"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                support@vanyaecoproducts.in
              </p>
            </div>

            <ArrowUpRight
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-gray-400 transition group-hover:text-green-700"
            />
          </a>

          {/* Location */}
          <a
            href="https://www.google.com/maps/place/Wayanad,+Kerala"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-green-700/30 hover:shadow-[0_14px_35px_rgba(22,101,52,0.09)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700 sm:p-6"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-700/[0.08] text-green-800 transition-colors duration-300 group-hover:bg-green-700 group-hover:text-white">
              <MapPin
                aria-hidden="true"
                className="h-6 w-6"
                strokeWidth={1.8}
              />
            </span>

            <div className="min-w-0 flex-1">
              <p
                className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                Location
              </p>

              <h3
                className="mt-1 text-lg font-bold text-gray-900"
                style={{
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                Visit Our Location
              </h3>

              <p
                className="mt-1 text-sm leading-6 text-gray-600 sm:text-base"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                Mananthavady, Wayanad, Kerala 670645, India
              </p>
            </div>

            <ArrowUpRight
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-gray-400 transition group-hover:text-green-700"
            />
          </a>
        </div>
      </div>
    </section>
  )
}