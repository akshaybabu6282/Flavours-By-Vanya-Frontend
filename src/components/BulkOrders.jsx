import React from 'react'
import {
  ArrowUpRight,
  Globe2,
  Mail,
  MessageCircle,
  PackageCheck,
  Boxes,
} from 'lucide-react'
import useInView from '../hooks/useInView'

const whatsappMessage = `Hi Vanya Eco Products,

I would like to discuss a bulk or export requirement.

Business Name:
Country / Location:
Products Required:
Approximate Quantity:
Packaging Requirement:
Additional Information:`

const whatsappUrl = `https://wa.me/917907662508?text=${encodeURIComponent(
  whatsappMessage
)}`

export default function BulkOrders() {
  const [sectionRef, inView] = useInView()

  return (
    <section
      id="bulk"
      className="scroll-mt-24 bg-[#f5f4ef] py-16 text-gray-900 sm:py-20 lg:py-24"
    >
      <div
        ref={sectionRef}
        className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"
      >
        <div
          className={`relative overflow-hidden rounded-[2rem] bg-[#123524] text-white shadow-[0_24px_70px_rgba(18,53,36,0.18)] transition-all duration-700 motion-reduce:transition-none ${
            inView
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Background decoration */}
          <div
            aria-hidden="true"
            className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-green-400/[0.08] blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-green-300/[0.06] blur-3xl"
          />

          <div className="relative grid gap-10 p-6 sm:p-8 md:p-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14 lg:p-14">
            {/* Left content */}
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.25em] text-green-300 sm:text-sm"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                Business & International Enquiries
              </p>

              <h2
                className="mt-4 max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]"
                style={{
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                Bulk Orders & Export
              </h2>

              <div className="mt-6 h-0.5 w-16 bg-green-300" />

              <p
                className="mt-6 max-w-xl text-base leading-7 text-green-50/80 sm:text-lg sm:leading-8"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                We welcome enquiries from retailers, distributors, businesses
                and international buyers looking for Vanya products in larger
                quantities.
              </p>

              <p
                className="mt-4 max-w-xl text-sm leading-6 text-green-50/65 sm:text-base sm:leading-7"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                Product availability, quantity, packaging, documentation and
                delivery requirements are discussed individually with every
                business customer.
              </p>

              {/* Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#123524] transition duration-300 hover:-translate-y-0.5 hover:bg-green-50 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
                  style={{
                    fontFamily: '"Roboto", sans-serif',
                  }}
                >
                  <MessageCircle
                    aria-hidden="true"
                    className="h-5 w-5"
                    strokeWidth={2}
                  />

                  <span>Discuss Your Requirement</span>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href="mailto:business@vanyaecoproducts.in"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white/50 hover:bg-white/[0.10] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
                  style={{
                    fontFamily: '"Roboto", sans-serif',
                  }}
                >
                  <Mail
                    aria-hidden="true"
                    className="h-5 w-5"
                    strokeWidth={1.8}
                  />

                  <span>Email Our Team</span>
                </a>
              </div>

              <p
                className="mt-4 text-xs leading-5 text-green-50/55 sm:text-sm"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                Courier and freight charges depend on the destination and are
                payable by the customer.
              </p>
            </div>

            {/* Business capabilities */}
            <div className="grid gap-4">
              <article
                className={`group rounded-2xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm transition-all duration-500 hover:border-green-300/40 hover:bg-white/[0.10] motion-reduce:transition-none sm:p-6 ${
                  inView
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-7 opacity-0'
                }`}
                style={{
                  transitionDelay: inView ? '180ms' : '0ms',
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-300 text-[#123524]">
                    <Boxes
                      aria-hidden="true"
                      className="h-6 w-6"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <h3
                      className="text-lg font-bold text-white sm:text-xl"
                      style={{
                        fontFamily: '"Raleway", sans-serif',
                      }}
                    >
                      Bulk Product Supply
                    </h3>

                    <p
                      className="mt-2 text-sm leading-6 text-green-50/70 sm:text-base"
                      style={{
                        fontFamily: '"Roboto", sans-serif',
                      }}
                    >
                      Larger quantity enquiries across spices, masalas, tea,
                      coffee, oils, nuts and honey, subject to availability.
                    </p>
                  </div>
                </div>
              </article>

              <article
                className={`group rounded-2xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm transition-all duration-500 hover:border-green-300/40 hover:bg-white/[0.10] motion-reduce:transition-none sm:p-6 ${
                  inView
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-7 opacity-0'
                }`}
                style={{
                  transitionDelay: inView ? '290ms' : '0ms',
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-300 text-[#123524]">
                    <PackageCheck
                      aria-hidden="true"
                      className="h-6 w-6"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <h3
                      className="text-lg font-bold text-white sm:text-xl"
                      style={{
                        fontFamily: '"Raleway", sans-serif',
                      }}
                    >
                      Packaging Coordination
                    </h3>

                    <p
                      className="mt-2 text-sm leading-6 text-green-50/70 sm:text-base"
                      style={{
                        fontFamily: '"Roboto", sans-serif',
                      }}
                    >
                      Packaging and business requirements can be discussed
                      based on the product, order quantity and availability.
                    </p>
                  </div>
                </div>
              </article>

              <article
                className={`group rounded-2xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm transition-all duration-500 hover:border-green-300/40 hover:bg-white/[0.10] motion-reduce:transition-none sm:p-6 ${
                  inView
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-7 opacity-0'
                }`}
                style={{
                  transitionDelay: inView ? '400ms' : '0ms',
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-300 text-[#123524]">
                    <Globe2
                      aria-hidden="true"
                      className="h-6 w-6"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <h3
                      className="text-lg font-bold text-white sm:text-xl"
                      style={{
                        fontFamily: '"Raleway", sans-serif',
                      }}
                    >
                      International Enquiries
                    </h3>

                    <p
                      className="mt-2 text-sm leading-6 text-green-50/70 sm:text-base"
                      style={{
                        fontFamily: '"Roboto", sans-serif',
                      }}
                    >
                      International requirements are reviewed according to the
                      destination, documentation, product availability and
                      delivery arrangements.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Bottom information strip */}
          <div className="relative border-t border-white/10 bg-black/10 px-6 py-4 sm:px-8 lg:px-14">
            <div className="flex flex-col gap-2 text-sm text-green-50/65 sm:flex-row sm:items-center sm:justify-between">
              <span
                style={{
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                India and international business enquiries
              </span>

              <a
                href="mailto:business@vanyaecoproducts.in"
                className="font-medium text-green-200 transition hover:text-white"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                business@vanyaecoproducts.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}